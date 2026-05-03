// tests/01-ui-pagination.spec.js
// Task 1: UI - Multi-page Navigation
// Search "Science", click Next, assert page=2 in URL, assert results changed

const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');

test.describe('Task 1: UI - Multi-page Navigation', () => {
  test('should navigate to page 2 and show different results', async ({ page }) => {
    const searchPage = new SearchPage(page);

    // Step 1: Navigate and search for "Science"
    await searchPage.goto();
    await searchPage.search('Science');

    // Step 2: Capture page 1 result titles
    const page1Titles = await searchPage.getResultTitles();
    expect(page1Titles.length).toBeGreaterThan(0);
    console.log(`Page 1 — ${page1Titles.length} results. First: "${page1Titles[0]}"`);

    // Step 3: Scroll to bottom and click Next
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await searchPage.clickNextPage();

    // Step 4: Assert URL contains page=2
    const currentURL = searchPage.getURL();
    expect(currentURL).toContain('page=2');
    console.log(`Navigated to: ${currentURL}`);

    // Step 5: Capture page 2 result titles
    const page2Titles = await searchPage.getResultTitles();
    expect(page2Titles.length).toBeGreaterThan(0);
    console.log(`Page 2 — ${page2Titles.length} results. First: "${page2Titles[0]}"`);

    // Step 6: Assert results differ between pages
    // At least one title on page 2 should not appear on page 1
    const page1Set = new Set(page1Titles.map(t => t.trim()));
    const hasNewResults = page2Titles.some(title => !page1Set.has(title.trim()));
    expect(hasNewResults).toBeTruthy();
    console.log('✅ Page 2 results are different from page 1');
  });
});
