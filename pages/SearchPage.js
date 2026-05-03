// pages/SearchPage.js
// Page Object Model for Open Library Search

const { expect } = require('@playwright/test');

class SearchPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.searchInput = page.getByRole('textbox', { name: /search/i });
    this.searchButton = page.getByRole('button', { name: /search/i });
    this.resultsHeader = page.locator('#searchResults h1, .search-results-stats, [data-testid="results-header"], h1.search-results-count');
    this.bookResults = page.locator('.searchResultItem, li.searchResultItem');
    this.nextPageButton = page.getByRole('link', { name: /next/i });
    this.sortDropdown = page.getByRole('combobox', { name: /sort/i });
    this.languageFilter = page.locator('a').filter({ hasText: /spanish/i }).first();
    this.resultsCountHeading = page.locator('h1').filter({ hasText: /results for/i });
  }

  /**
   * Navigate to Open Library homepage
   */
  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Search for a term
   * @param {string} term
   */
  async search(term) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
    await this.page.waitForLoadState('domcontentloaded');
    // Wait for results to appear
    await this.page.waitForSelector('#searchResults > .list-books', { timeout: 15000 });
  }

  /**
   * Navigate to search results page directly by URL
   * @param {string} query
   * @param {Object} params  - additional query params
   */
  async gotoSearch(query, params = {}) {
    const searchParams = new URLSearchParams({ q: query, ...params });
    await this.page.goto(`/search?${searchParams.toString()}`);
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector('#searchResults > .list-books', { timeout: 15000 });
  }

  /**
   * Get current URL
   */
  getURL() {
    return this.page.url();
  }

  /**
   * Click the Next page button
   */
  async clickNextPage() {
    await this.nextPageButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.nextPageButton.click();
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector('#searchResults > .list-books', { timeout: 15000 });
  }

  /**
   * Get all result item titles on current page
   * @returns {Promise<string[]>}
   */
  async getResultTitles() {
    await this.bookResults.first().waitFor({ state: 'visible', timeout: 10000 });
    return await this.page.locator('.searchResultItem h3').allTextContents();
    // return await this.page.locator('.searchResultItem h3, .searchResultItem .bookTitle').allTextContents();
  }

  /**
   * Get the title of the first result
   * @returns {Promise<string>}
   */
  async getFirstResultTitle() {
    const titles = await this.getResultTitles();
    return titles[0]?.trim() ?? '';
  }

  /**
   * Change the Sort dropdown
   * @param {string} value - e.g. 'old'
   */
  async selectSortOrder(value) {
    // Open Library uses a <select> or link-based sort
    // Try select element first
    const selectEl = this.page.locator('select[name="sort"], select#sort-select');
    const count = await selectEl.count();
    if (count > 0) {
      await selectEl.selectOption(value);
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector('#searchResults > .list-books', { timeout: 15000 });
    } else {
      // Fallback: click sort link
      await this.page.locator(".sort-dropper > .tool-button").click();
      await this.page.locator(".sort-content > span > a[data-ol-link-track='SearchSort|Old']").click();
      
      await this.page.waitForLoadState('domcontentloaded');
      await this.page.waitForSelector('#searchResults > .list-books', { timeout: 15000 });
    }
  }

  /**
   * Apply Language filter from sidebar
   * @param {string} language - e.g. 'Spanish'
   */
  async applyLanguageFilter(language) {
    // Language filters appear in the facets sidebar
    const languageHeading = this.page.locator("//h4[text()='Language']");
    expect(languageHeading).toBeVisible();
    console.log('✅ Language Header is visible in sidebar');

    const langLink = this.page.getByTitle(`Filter results for ${language}`);
    // await langLink.waitFor({ state: 'attached', timeout: 20000 });
    await langLink.click({timeout: 20000});
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector('#searchResults > .list-books', { timeout: 15000 });
  }

  /**
   * Get results heading text
   * @returns {Promise<string>}
   */
  async getResultsHeading() {
    const heading = this.page.locator('h3').first();
    await heading.waitFor({ state: 'visible', timeout: 10000 });
    return (await heading.textContent())?.trim() ?? '';
  }

  /**
   * Count visible results
   * @returns {Promise<number>}
   */
  async getResultCount() {
    return await this.bookResults.count();
  }
}

module.exports = { SearchPage };
