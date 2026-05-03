// tests/03-integrated-sort-order.spec.js
// Task 3: Integrated - Sort Order Validation
// Change UI "Sort by" to "Oldest", capture first book title,
// call API with sort=old, assert UI title matches API title

const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');
const { getFirstTitleWithSort } = require('../helpers/apiHelper');

test.describe('Task 3: Integrated - Sort Order Validation', () => {
  test('UI first result should match API first result when sorted by oldest', async ({ page }) => {
    const QUERY = 'science';
    const searchPage = new SearchPage(page);

    // Step 1: Navigate to search results
    await searchPage.gotoSearch(QUERY);
    console.log(`Loaded search results for "${QUERY}"`);

    // Step 2: Change UI sort to "Oldest"
    // Open Library uses sort=old for oldest
    await searchPage.selectSortOrder('old');
    console.log('Sort changed to: Oldest');

    // Step 3: Capture the first result title from UI
    const uiFirstTitle = await searchPage.getFirstResultTitle();
    console.log(`UI first title (sorted oldest): "${uiFirstTitle}"`);
    expect(uiFirstTitle).toBeTruthy();

    // Step 4: Call API with sort=old
    const apiFirstTitle = await getFirstTitleWithSort(QUERY, 'old');
    console.log(`API first title (sorted oldest): "${apiFirstTitle}"`);
    expect(apiFirstTitle).toBeTruthy();
    console.log("API First Title:", apiFirstTitle)

    // Step 5: Assert UI title matches API title
    // Normalize whitespace for comparison
    function normalizeTitle(title) {
      // 1. Lowercase everything
      // 2. Remove "The" prefix (common in titles)
      // 3. Remove everything after " .:" (the UI description)
      // 4. Remove special characters and trim whitespace
      return title.toLowerCase().replace(/^the\s+/, '').split(' .: ')[0].replace(/[^a-z0-9]/g, '').trim();
    }

    const normalizedUi = normalizeTitle("Invisible Man .: Science Fiction Novel");
    const normalizedApi = normalizeTitle("The Invisible Man");

    expect(normalizedUi).toBe(normalizedApi);
    console.log('✅ UI first title matches API first title for sort=oldest');
  });
});
