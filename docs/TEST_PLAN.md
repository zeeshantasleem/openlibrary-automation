# Test Plan — Open Library Automation Assessment

**Project:** Open Library Advanced Search & Pagination  
**Date:** May 2026  
**Tool:** Playwright v1.59+ with JavaScript  
**URLs Under Test:**  
- UI: https://openlibrary.org  
- API: https://openlibrary.org/search.json  

---

## Scope & Coverage

| ID | Task | Type | Coverage |
|----|------|------|----------|
| T1 | Multi-page navigation (Search → Next → page=2 URL + different results) | UI | Happy path |
| T2 | Parameterized API search (limit=12, q=space → docs.length=12, numFound>12) | API | Happy path + boundary |
| T3 | Sort order validation (UI sort=Oldest matches API sort=old first title) | Integrated | Cross-layer consistency |
| T4 | Language filter (Spanish sidebar → heading update + ≥1 result) | UI | Happy path |

**Out of Scope:** Authentication flows, checkout/borrowing, admin pages, mobile viewports, negative/error API inputs.

---

## Risk Mitigation

| Risk | Likelihood | Mitigation |
|------|-----------|-----------|
| Open Library selector changes (CSS classes updated) | Medium | POM isolates selectors; use `getByRole`/`getByLabel` which survive minor DOM changes |
| API rate limiting | Low | Tests run serially (workers: 1); lightweight payloads |
| Pagination results not differing (cache or A/B test) | Low | Assert at least 1 title differs using set comparison |
| Sort order mismatch between UI and API due to tie-breaking | Medium | Normalize title strings (trim, lowercase) before comparison |
| Language facet not rendering for all queries | Low | Use broad query ("history") with many results to ensure facet loads |
| Flakiness from network latency | Medium | All assertions use Playwright auto-wait; no hard sleeps; 60s timeout |

---

## Tools & Architecture

- **Framework:** Playwright Test (`@playwright/test`)
- **Language:** JavaScript (Node.js 18+)
- **Pattern:** Page Object Model — `SearchPage.js` owns all UI interactions
- **API Layer:** `apiHelper.js` — single module for all HTTP calls, response parsing, and validation helpers
- **Selectors:** `getByRole`, `getByLabel`, attribute selectors — no brittle class-based chains
- **Waiting:** `waitForLoadState`, `waitForSelector`, Playwright auto-wait — zero hard sleeps
- **Reporting:** Playwright HTML Report (`playwright-report/index.html`)
- **CI Ready:** `retries: 1` on CI, screenshot + video on failure

---

## Execution

```bash
npm install && npx playwright install chromium
npm test                  # all 4 tests
npx playwright show-report  # view HTML report
```

Expected runtime: ~2–4 minutes (network dependent).
