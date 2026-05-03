# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04-ui-language-filter.spec.js >> Task 4: UI - Language Filtering >> should filter results by Spanish language
- Location: tests\04-ui-language-filter.spec.js:10:3

# Error details

```
TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('#searchResults > .list-books') to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic:
    - generic:
      - iframe
  - generic [ref=e4]:
    - link "Internet Archive logo" [ref=e5] [cursor=pointer]:
      - /url: https://archive.org
      - img "Internet Archive logo" [ref=e6]
    - link "Donate" [ref=e7] [cursor=pointer]:
      - /url: https://archive.org/donate/?platform=ol&origin=olwww-TopNavDonateButton
      - text: Donate ♥
    - group [ref=e9] [cursor=pointer]:
      - generic "English (en) Change Website Language ▼" [ref=e10]:
        - text: English (en)
        - img "Change Website Language" [ref=e11]
        - text: ▼
  - banner [ref=e12]:
    - generic [ref=e13]:
      - link "Open Library logo" [ref=e14] [cursor=pointer]:
        - /url: /
        - img "Open Library logo" [ref=e16]
      - link:
        - /url: /search?show_page_status=1
        - text: Page Status
    - list [ref=e17]:
      - listitem [ref=e18]:
        - link "My Books" [ref=e20] [cursor=pointer]:
          - /url: /account/books
      - listitem [ref=e21]:
        - group [ref=e23]:
          - generic "Browse Menu" [ref=e24] [cursor=pointer]:
            - text: Browse
            - generic [ref=e25]: Menu
            - img [ref=e26]
    - generic [ref=e28]:
      - generic [ref=e29]:
        - generic [ref=e31]:
          - generic [ref=e32]: All
          - combobox "Search by" [ref=e33] [cursor=pointer]:
            - option "All" [selected]
            - option "Title"
            - option "Author"
            - option "Text"
            - option "Subject"
            - option "Lists"
            - option "Advanced"
        - search [ref=e34]:
          - textbox "Search" [ref=e35]: science
          - button "Search submit" [ref=e36] [cursor=pointer]
          - link "Search by barcode" [ref=e38] [cursor=pointer]:
            - /url: /barcodescanner?returnTo=/isbn/$$$
      - generic:
        - list
    - list [ref=e39]:
      - listitem [ref=e40]:
        - link "Log In" [ref=e41] [cursor=pointer]:
          - /url: /account/login
      - listitem [ref=e42]:
        - link "Sign Up" [ref=e43] [cursor=pointer]:
          - /url: /account/create
    - group [ref=e45]:
      - generic "additional options menu" [ref=e46] [cursor=pointer]:
        - img "additional options menu" [ref=e47]
  - main [ref=e48]:
    - generic [ref=e49]:
      - heading "Search Books" [level=1] [ref=e51]
      - generic [ref=e52]:
        - list [ref=e53]:
          - listitem [ref=e54]:
            - link "Books" [ref=e55] [cursor=pointer]:
              - /url: /search?q=science
          - listitem [ref=e56]:
            - link "Authors" [ref=e57] [cursor=pointer]:
              - /url: /search/authors?q=science
          - listitem [ref=e58]:
            - link "Search Inside" [ref=e59] [cursor=pointer]:
              - /url: /search/inside?q=science
          - listitem [ref=e60]:
            - link "Subjects" [ref=e61] [cursor=pointer]:
              - /url: /search/subjects?q=science
          - listitem [ref=e62]:
            - link "Lists" [ref=e63] [cursor=pointer]:
              - /url: /search/lists?q=science
          - listitem [ref=e64]:
            - link "Advanced Search" [ref=e65] [cursor=pointer]:
              - /url: /advancedsearch
        - generic [ref=e67]:
          - generic [ref=e68]:
            - textbox "Search" [ref=e69]: science
            - button "Search" [ref=e71] [cursor=pointer]
          - generic [ref=e72]:
            - radio "Everything" [checked] [ref=e73]
            - text: Everything
            - radio "Ebooks" [ref=e74]
            - text: Ebooks
        - generic [ref=e75]:
          - generic [ref=e76]:
            - text: "No"
            - strong [ref=e77]: books
            - text: directly matched your search.
            - link "Add a new book?" [ref=e78] [cursor=pointer]:
              - /url: /books/add
          - separator [ref=e79]
        - generic [ref=e81]:
          - generic [ref=e82]:
            - link "search inside icon" [ref=e83] [cursor=pointer]:
              - /url: /search/inside?q=science
              - img "search inside icon" [ref=e84]
            - heading "Search Inside — 3,600,619 books found with matching passages" [level=3] [ref=e85]:
              - link "Search Inside" [ref=e86] [cursor=pointer]:
                - /url: /search/inside?q=science
              - text: — 3,600,619 books found with matching passages
          - generic [ref=e88]:
            - 'link "Cover of: Readings in science education for the elementary school" [ref=e90] [cursor=pointer]':
              - /url: /books/OL20940278M/Readings_in_science_education_for_the_elementary_school
              - 'img "Cover of: Readings in science education for the elementary school" [ref=e91]'
            - generic [ref=e92]:
              - generic [ref=e93]:
                - heading "Readings in science education for the elementary school" [level=3] [ref=e94]:
                  - link "Readings in science education for the elementary school" [ref=e95] [cursor=pointer]:
                    - /url: /books/OL20940278M/Readings_in_science_education_for_the_elementary_school
                - paragraph [ref=e96]:
                  - text: by
                  - link "Victor, Edward" [ref=e97] [cursor=pointer]:
                    - /url: /authors/OL30220A
              - generic [ref=e99]:
                - text: ❝
                - link "…teaching elementary science, the evaluation of both science learning and the science program, and the need…" [ref=e100] [cursor=pointer]:
                  - /url: https://archive.org/details/readingsinscienc0000vict
                  - text: …teaching elementary
                  - mark [ref=e101]:
                    - strong [ref=e102]: science
                  - text: ", the evaluation of both"
                  - mark [ref=e103]:
                    - strong [ref=e104]: science
                  - text: learning and the
                  - mark [ref=e105]:
                    - strong [ref=e106]: science
                  - text: program, and the need…
                - text: ❞
                - generic [ref=e107]: "Page: 486"
          - generic [ref=e109]:
            - 'link "Cover of: Management science in Federal agencies: the adoption and diffusion of a socio-technical innovation" [ref=e111] [cursor=pointer]':
              - /url: /books/OL5054664M/Management_science_in_Federal_agencies
              - 'img "Cover of: Management science in Federal agencies: the adoption and diffusion of a socio-technical innovation" [ref=e112]'
            - generic [ref=e113]:
              - generic [ref=e114]:
                - 'heading "Management science in Federal agencies: the adoption and diffusion of a socio-technical innovation" [level=3] [ref=e115]':
                  - 'link "Management science in Federal agencies: the adoption and diffusion of a socio-technical innovation" [ref=e116] [cursor=pointer]':
                    - /url: /books/OL5054664M/Management_science_in_Federal_agencies
                - paragraph [ref=e117]:
                  - text: by
                  - link "Michael J. White" [ref=e118] [cursor=pointer]:
                    - /url: /authors/OL1961188A
              - generic [ref=e120]:
                - text: ❝
                - 'link "…that management science is the best base for policy science: We are looking for a science of the design…" [ref=e121] [cursor=pointer]':
                  - /url: https://archive.org/details/managementscienc0000whit
                  - text: …that management
                  - mark [ref=e122]:
                    - strong [ref=e123]: science
                  - text: is the best base for policy
                  - mark [ref=e124]:
                    - strong [ref=e125]: science
                  - text: ": We are looking for a"
                  - mark [ref=e126]:
                    - strong [ref=e127]: science
                  - text: of the design…
                - text: ❞
                - generic [ref=e128]: "Page: 138"
          - generic [ref=e130]:
            - 'link "Cover of: Girls and women in STEM: a never ending story" [ref=e132] [cursor=pointer]':
              - /url: /books/OL31179610M/Girls_and_women_in_STEM
              - 'img "Cover of: Girls and women in STEM: a never ending story" [ref=e133]'
            - generic [ref=e134]:
              - generic [ref=e135]:
                - 'heading "Girls and women in STEM: a never ending story" [level=3] [ref=e136]':
                  - 'link "Girls and women in STEM: a never ending story" [ref=e137] [cursor=pointer]':
                    - /url: /books/OL31179610M/Girls_and_women_in_STEM
                - paragraph [ref=e138]:
                  - text: by
                  - link "Janice Koch" [ref=e139] [cursor=pointer]:
                    - /url: /authors/OL473706A
                  - text: ","
                  - link "Barbara Polnick" [ref=e140] [cursor=pointer]:
                    - /url: /authors/OL8849198A
                  - text: ", and"
                  - link "Beverly J. Irby" [ref=e141] [cursor=pointer]:
                    - /url: /authors/OL2777597A
              - generic [ref=e143]:
                - text: ❝
                - 'link "…color pursuing science degrees: Implications for science teacher educators. Journal of Science Teacher Education…" [ref=e144] [cursor=pointer]':
                  - /url: https://archive.org/details/girlswomeninstem0000unse
                  - text: …color pursuing
                  - mark [ref=e145]:
                    - strong [ref=e146]: science
                  - text: "degrees: Implications for"
                  - mark [ref=e147]:
                    - strong [ref=e148]: science
                  - text: teacher educators. Journal of
                  - mark [ref=e149]:
                    - strong [ref=e150]: Science
                  - text: Teacher Education…
                - text: ❞
                - generic [ref=e151]: "Page: 264"
          - heading "See all 3,600,619 Search Inside Matches right chevron" [level=3] [ref=e152]:
            - link "See all 3,600,619 Search Inside Matches right chevron" [ref=e153] [cursor=pointer]:
              - /url: /search/inside?q=science
              - text: See all 3,600,619 Search Inside Matches
              - img "right chevron" [ref=e155]
  - contentinfo [ref=e157]:
    - generic [ref=e158]:
      - generic [ref=e159]:
        - generic [ref=e160]:
          - heading "Open Library" [level=2] [ref=e161]
          - list [ref=e162]:
            - listitem [ref=e163]:
              - link "Vision" [ref=e164] [cursor=pointer]:
                - /url: /about/vision
            - listitem [ref=e165]:
              - link "Volunteer" [ref=e166] [cursor=pointer]:
                - /url: /volunteer
            - listitem [ref=e167]:
              - link "Partner With Us" [ref=e168] [cursor=pointer]:
                - /url: /partner-with-us
            - listitem [ref=e169]:
              - link "Careers" [ref=e170] [cursor=pointer]:
                - /url: https://archive.org/about/jobs.php
            - listitem [ref=e171]:
              - link "Blog" [ref=e172] [cursor=pointer]:
                - /url: https://blog.openlibrary.org/
            - listitem [ref=e173]:
              - link "Terms of Service" [ref=e174] [cursor=pointer]:
                - /url: https://archive.org/about/terms.php
            - listitem [ref=e175]:
              - link "Donate" [ref=e176] [cursor=pointer]:
                - /url: https://archive.org/donate/?platform=ol&origin=olwww-TopNavDonateButton
        - generic [ref=e177]:
          - heading "Discover" [level=2] [ref=e178]
          - list [ref=e179]:
            - listitem [ref=e180]:
              - link "Home" [ref=e181] [cursor=pointer]:
                - /url: /
            - listitem [ref=e182]:
              - link "Books" [ref=e183] [cursor=pointer]:
                - /url: /search
            - listitem [ref=e184]:
              - link "Authors" [ref=e185] [cursor=pointer]:
                - /url: /search/authors
            - listitem [ref=e186]:
              - link "Subjects" [ref=e187] [cursor=pointer]:
                - /url: /subjects
            - listitem [ref=e188]:
              - link "Collections" [ref=e189] [cursor=pointer]:
                - /url: /collections
            - listitem [ref=e190]:
              - link "Advanced Search" [ref=e191] [cursor=pointer]:
                - /url: /advancedsearch
            - listitem [ref=e192]:
              - link "Return to Top" [ref=e193] [cursor=pointer]:
                - /url: "#top"
        - generic [ref=e194]:
          - heading "Develop" [level=2] [ref=e195]
          - list [ref=e196]:
            - listitem [ref=e197]:
              - link "Developer Center" [ref=e198] [cursor=pointer]:
                - /url: /developers
            - listitem [ref=e199]:
              - link "API Documentation" [ref=e200] [cursor=pointer]:
                - /url: /developers/api
            - listitem [ref=e201]:
              - link "Bulk Data Dumps" [ref=e202] [cursor=pointer]:
                - /url: /developers/dumps
            - listitem [ref=e203]:
              - link "Writing Bots" [ref=e204] [cursor=pointer]:
                - /url: https://docs.openlibrary.org/developers/backend/writing-bots.html
        - generic [ref=e205]:
          - heading "Help" [level=2] [ref=e206]
          - list [ref=e207]:
            - listitem [ref=e208]:
              - link "Help Center" [ref=e209] [cursor=pointer]:
                - /url: /help
            - listitem [ref=e210]:
              - link "Contact Us" [ref=e211] [cursor=pointer]:
                - /url: mailto:openlibrary@archive.org?subject=Support Case
            - listitem [ref=e212]:
              - link "Suggesting Edits" [ref=e213] [cursor=pointer]:
                - /url: /help/faq/editing
            - listitem [ref=e214]:
              - link "Add a Book" [ref=e215] [cursor=pointer]:
                - /url: /books/add
            - listitem [ref=e216]:
              - link "Release Notes" [ref=e217] [cursor=pointer]:
                - /url: https://github.com/internetarchive/openlibrary/releases
          - complementary [ref=e218]:
            - link "Bluesky" [ref=e219] [cursor=pointer]:
              - /url: https://bsky.app/profile/openlibrary.org
            - link "Twitter" [ref=e220] [cursor=pointer]:
              - /url: https://twitter.com/OpenLibrary
            - link "GitHub" [ref=e221] [cursor=pointer]:
              - /url: https://github.com/internetarchive/openlibrary
        - generic [ref=e222]:
          - heading "Change Website Language" [level=2] [ref=e223]
          - list [ref=e224]:
            - listitem [ref=e225]:
              - link "العربية (ar)" [ref=e226] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e227]:
              - link "Čeština (cs)" [ref=e228] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e229]:
              - link "Deutsch (de)" [ref=e230] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e231]:
              - link "English (en)" [ref=e232] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e233]:
              - link "Español (es)" [ref=e234] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e235]:
              - link "Français (fr)" [ref=e236] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e237]:
              - link "हिंदी (hi)" [ref=e238] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e239]:
              - link "Hrvatski (hr)" [ref=e240] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e241]:
              - link "Italiano (it)" [ref=e242] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e243]:
              - link "Português (pt)" [ref=e244] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e245]:
              - link "Română (ro)" [ref=e246] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e247]:
              - link "Sardu (sc)" [ref=e248] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e249]:
              - link "తెలుగు (te)" [ref=e250] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e251]:
              - link "Українська (uk)" [ref=e252] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e253]:
              - link "中文 (zh)" [ref=e254] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e255]:
              - link "Filipino (tl)" [ref=e256] [cursor=pointer]:
                - /url: "#"
      - separator [ref=e257]
      - generic [ref=e258]:
        - img "Open Library logo" [ref=e259]
        - generic [ref=e261]:
          - text: Open Library is an initiative of the
          - link "Internet Archive" [ref=e262] [cursor=pointer]:
            - /url: //archive.org/
          - text: ", a 501(c)(3) non-profit, building a digital library of Internet sites and other cultural artifacts in digital form. Other"
          - link "projects" [ref=e263] [cursor=pointer]:
            - /url: //archive.org/projects/
          - text: include the
          - link "Wayback Machine" [ref=e264] [cursor=pointer]:
            - /url: //archive.org/web/
          - text: ","
          - link "archive.org" [ref=e265] [cursor=pointer]:
            - /url: //archive.org/
          - text: and
          - link "archive-it.org" [ref=e266] [cursor=pointer]:
            - /url: //archive-it.org
        - generic [ref=e268]:
          - text: version
          - link "c1d79b5" [ref=e269] [cursor=pointer]:
            - /url: https://github.com/internetarchive/openlibrary/commit/c1d79b5
```

# Test source

```ts
  1   | // pages/SearchPage.js
  2   | // Page Object Model for Open Library Search
  3   | 
  4   | const { expect } = require('@playwright/test');
  5   | 
  6   | class SearchPage {
  7   |   /**
  8   |    * @param {import('@playwright/test').Page} page
  9   |    */
  10  |   constructor(page) {
  11  |     this.page = page;
  12  | 
  13  |     // Locators
  14  |     this.searchInput = page.getByRole('textbox', { name: /search/i });
  15  |     this.searchButton = page.getByRole('button', { name: /search/i });
  16  |     this.resultsHeader = page.locator('#searchResults h1, .search-results-stats, [data-testid="results-header"], h1.search-results-count');
  17  |     this.bookResults = page.locator('.searchResultItem, li.searchResultItem');
  18  |     this.nextPageButton = page.getByRole('link', { name: /next/i });
  19  |     this.sortDropdown = page.getByRole('combobox', { name: /sort/i });
  20  |     this.languageFilter = page.locator('a').filter({ hasText: /spanish/i }).first();
  21  |     this.resultsCountHeading = page.locator('h1').filter({ hasText: /results for/i });
  22  |   }
  23  | 
  24  |   /**
  25  |    * Navigate to Open Library homepage
  26  |    */
  27  |   async goto() {
  28  |     await this.page.goto('/');
  29  |     await this.page.waitForLoadState('domcontentloaded');
  30  |   }
  31  | 
  32  |   /**
  33  |    * Search for a term
  34  |    * @param {string} term
  35  |    */
  36  |   async search(term) {
  37  |     await this.searchInput.fill(term);
  38  |     await this.searchButton.click();
  39  |     await this.page.waitForLoadState('domcontentloaded');
  40  |     // Wait for results to appear
  41  |     await this.page.waitForSelector('#searchResults > .list-books', { timeout: 15000 });
  42  |   }
  43  | 
  44  |   /**
  45  |    * Navigate to search results page directly by URL
  46  |    * @param {string} query
  47  |    * @param {Object} params  - additional query params
  48  |    */
  49  |   async gotoSearch(query, params = {}) {
  50  |     const searchParams = new URLSearchParams({ q: query, ...params });
  51  |     await this.page.goto(`/search?${searchParams.toString()}`);
  52  |     await this.page.waitForLoadState('domcontentloaded');
> 53  |     await this.page.waitForSelector('#searchResults > .list-books', { timeout: 15000 });
      |                     ^ TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
  54  |   }
  55  | 
  56  |   /**
  57  |    * Get current URL
  58  |    */
  59  |   getURL() {
  60  |     return this.page.url();
  61  |   }
  62  | 
  63  |   /**
  64  |    * Click the Next page button
  65  |    */
  66  |   async clickNextPage() {
  67  |     await this.nextPageButton.waitFor({ state: 'visible', timeout: 10000 });
  68  |     await this.nextPageButton.click();
  69  |     await this.page.waitForLoadState('domcontentloaded');
  70  |     await this.page.waitForSelector('#searchResults > .list-books', { timeout: 15000 });
  71  |   }
  72  | 
  73  |   /**
  74  |    * Get all result item titles on current page
  75  |    * @returns {Promise<string[]>}
  76  |    */
  77  |   async getResultTitles() {
  78  |     await this.bookResults.first().waitFor({ state: 'visible', timeout: 10000 });
  79  |     return await this.page.locator('.searchResultItem h3').allTextContents();
  80  |     // return await this.page.locator('.searchResultItem h3, .searchResultItem .bookTitle').allTextContents();
  81  |   }
  82  | 
  83  |   /**
  84  |    * Get the title of the first result
  85  |    * @returns {Promise<string>}
  86  |    */
  87  |   async getFirstResultTitle() {
  88  |     const titles = await this.getResultTitles();
  89  |     return titles[0]?.trim() ?? '';
  90  |   }
  91  | 
  92  |   /**
  93  |    * Change the Sort dropdown
  94  |    * @param {string} value - e.g. 'old'
  95  |    */
  96  |   async selectSortOrder(value) {
  97  |     // Open Library uses a <select> or link-based sort
  98  |     // Try select element first
  99  |     const selectEl = this.page.locator('select[name="sort"], select#sort-select');
  100 |     const count = await selectEl.count();
  101 |     if (count > 0) {
  102 |       await selectEl.selectOption(value);
  103 |       await this.page.waitForLoadState('domcontentloaded');
  104 |       await this.page.waitForSelector('#searchResults > .list-books', { timeout: 15000 });
  105 |     } else {
  106 |       // Fallback: click sort link
  107 |       await this.page.locator(".sort-dropper > .tool-button").click();
  108 |       await this.page.locator(".sort-content > span > a[data-ol-link-track='SearchSort|Old']").click();
  109 |       
  110 |       await this.page.waitForLoadState('domcontentloaded');
  111 |       await this.page.waitForSelector('#searchResults > .list-books', { timeout: 15000 });
  112 |     }
  113 |   }
  114 | 
  115 |   /**
  116 |    * Apply Language filter from sidebar
  117 |    * @param {string} language - e.g. 'Spanish'
  118 |    */
  119 |   async applyLanguageFilter(language) {
  120 |     // Language filters appear in the facets sidebar
  121 |     const languageHeading = this.page.locator("//h4[text()='Language']");
  122 |     expect(languageHeading).toBeVisible();
  123 |     console.log('✅ Language Header is visible in sidebar');
  124 | 
  125 |     const langLink = this.page.getByTitle(`Filter results for ${language}`);
  126 |     // await langLink.waitFor({ state: 'attached', timeout: 20000 });
  127 |     await langLink.click({timeout: 20000});
  128 |     await this.page.waitForLoadState('domcontentloaded');
  129 |     await this.page.waitForSelector('#searchResults > .list-books', { timeout: 15000 });
  130 |   }
  131 | 
  132 |   /**
  133 |    * Get results heading text
  134 |    * @returns {Promise<string>}
  135 |    */
  136 |   async getResultsHeading() {
  137 |     const heading = this.page.locator('h3').first();
  138 |     await heading.waitFor({ state: 'visible', timeout: 10000 });
  139 |     return (await heading.textContent())?.trim() ?? '';
  140 |   }
  141 | 
  142 |   /**
  143 |    * Count visible results
  144 |    * @returns {Promise<number>}
  145 |    */
  146 |   async getResultCount() {
  147 |     return await this.bookResults.count();
  148 |   }
  149 | }
  150 | 
  151 | module.exports = { SearchPage };
  152 | 
```