# Open Library — Advanced Search & Pagination Test Suite

Playwright JS test suite for the [Open Library](https://openlibrary.org) automation assessment.

---

## 🏗️ Project Structure

```
open-library-tests/
├── pages/
│   └── SearchPage.js          # Page Object Model for search UI
├── helpers/
│   └── apiHelper.js           # Centralized API request & response logic
├── tests/
│   ├── 01-ui-pagination.spec.js       # Task 1: Multi-page navigation
│   ├── 02-api-parameterized-search.spec.js  # Task 2: API parameterized search
│   ├── 03-integrated-sort-order.spec.js     # Task 3: Sort order validation
│   └── 04-ui-language-filter.spec.js        # Task 4: Language filtering
├── playwright.config.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Prerequisites
- Node.js v18 or higher
- npm v9 or higher

### Steps

```bash
# 1. Clone / unzip the project
cd open-library-tests

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install chromium
```

---

## ▶️ Running Tests

```bash
# Run all tests
npm test

# Run specific test category
npm run test:ui           # UI tests only (Task 1 & 4)
npm run test:api          # API test only (Task 2)
npm run test:integration  # Integrated test (Task 3)

# Run in headed mode (visible browser)
npm run test:headed

# Run a single test file
npx playwright test tests/01-ui-pagination.spec.js

# Run with verbose output
npx playwright test --reporter=list
```

---

## 📊 Viewing Reports

After running tests, an HTML report is generated automatically:

```bash
npm run test:report
# Opens the HTML report in your browser
```

Reports are saved to `playwright-report/`.

---

## 🧪 Test Coverage

| # | Test File | Type | What It Tests |
|---|-----------|------|---------------|
| 1 | `01-ui-pagination.spec.js` | UI | Search "Science", click Next, assert URL has `page=2`, assert results differ |
| 2 | `02-api-parameterized-search.spec.js` | API | `limit=12&q=space` → `docs.length === 12`, `numFound > 12` |
| 3 | `03-integrated-sort-order.spec.js` | Integrated | UI sort="Oldest" → capture first title → compare with API `sort=old` |
| 4 | `04-ui-language-filter.spec.js` | UI | Click Spanish filter → assert heading updates, ≥1 result visible |

---

## 🛠️ Engineering Decisions

### Page Object Model (POM)
`SearchPage.js` encapsulates all UI interactions. Tests never interact with the DOM directly — they call named methods (`search()`, `clickNextPage()`, `applyLanguageFilter()`).

### Stable Selectors
Locators use `getByRole`, `getByLabel`, and attribute-based selectors. No brittle CSS class chains. Falls back gracefully to data-testid when available.

### API Helper Module
`apiHelper.js` centralizes all API calls. Two key functions:
- `searchWithLimit(q, limit)` — parameterized search
- `getFirstTitleWithSort(q, sort)` — for sort validation

### Wait Strategies
No `page.waitForTimeout()` / hard sleeps anywhere. All waits use:
- `page.waitForLoadState('domcontentloaded')`
- `page.waitForSelector()`
- Playwright's built-in auto-waiting on `expect()` assertions

---

## 🤖 AI Prompts Used

### Framework scaffold prompt
> "Create a Playwright JS project for testing openlibrary.org. Use Page Object Model with a SearchPage class. Include a separate apiHelper.js module that centralizes fetch calls to https://openlibrary.org/search.json. Use getByRole and getByLabel selectors. No hard sleeps — use Playwright auto-waiting only."

### Test 1 prompt
> "Write a Playwright test that searches for 'Science' on openlibrary.org, scrolls to the bottom, clicks the Next page button, asserts the URL contains page=2, and asserts that the results on page 2 differ from page 1."

### Test 2 prompt
> "Write a Playwright test that calls the Open Library API with q=space and limit=12. Assert that docs.length is exactly 12 and numFound is greater than 12."

### Test 3 prompt
> "Write an integrated Playwright test that changes the UI sort to 'Oldest', captures the first result title, calls the API with sort=old, and asserts the UI title matches the API title."

### Test 4 prompt
> "Write a Playwright test that selects the Spanish language filter from the sidebar on Open Library search results. Assert the results heading updates and at least one result is visible."
