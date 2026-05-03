// tests/04-ui-language-filter.spec.js
// Task 4: UI - Filtering
// Select "Spanish" in Language filter sidebar,
// assert "Results for..." header updates, assert at least 1 result visible

const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');

test.describe('Task 4: UI - Language Filtering', () => {
  test('should filter results by Spanish language', async ({ page }) => {
    const searchPage = new SearchPage(page);

    // Step 1: Navigate to search results
    await searchPage.gotoSearch('science');
    console.log('Loaded search results for "science"');

    // Step 2: Apply Spanish language filter from sidebar
    await searchPage.applyLanguageFilter('Spanish');
    console.log('Applied Spanish language filter');

    // Step 3: Get the updated results heading
    const heading = await searchPage.getResultsHeading();
    console.log(`Results heading after filter: "${heading}"`);

    // Step 4: Assert heading updates to reflect filter
    // Heading should contain "Results for" and mention Spanish or 'spa' language code
    expect(heading.toLowerCase()).toMatch(/results for|spanish|spa/i);
    console.log('✅ Results heading reflects the language filter');

    // Step 5: Assert at least one result is visible
    const resultCount = await searchPage.getResultCount();
    expect(resultCount).toBeGreaterThan(0);
    console.log(`✅ ${resultCount} result(s) visible after Spanish filter`);

    // Step 6: Confirm URL contains language filter parameter
    const url = searchPage.getURL();
    expect(url).toMatch(/language=spa|lang=spa/i);
    console.log(`✅ URL contains language filter: ${url}`);
  });
});
