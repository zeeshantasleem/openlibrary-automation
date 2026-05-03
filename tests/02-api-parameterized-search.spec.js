// tests/02-api-parameterized-search.spec.js
// Task 2: API - Parameterized Search
// Call search API with limit=12 & q=space, validate docs.length === 12 and numFound > limit

const { test, expect } = require('@playwright/test');
const { searchWithLimit } = require('../helpers/apiHelper');

test.describe('Task 2: API - Parameterized Search', () => {
  test('should return exactly 12 docs and numFound greater than limit', async () => {
    const LIMIT = 12;
    const QUERY = 'space';

    // Call the API
    const { numFound, docs } = await searchWithLimit(QUERY, LIMIT);

    console.log(`API Response — numFound: ${numFound}, docs returned: ${docs.length}`);

    // Assert docs array length is exactly 12
    expect(docs).toHaveLength(LIMIT);
    console.log(`✅ docs.length === ${LIMIT}`);

    // Assert numFound is a number greater than the limit
    expect(typeof numFound).toBe('number');
    expect(numFound).toBeGreaterThan(LIMIT);
    console.log(`✅ numFound (${numFound}) is a number and greater than limit (${LIMIT})`);
  });
});
