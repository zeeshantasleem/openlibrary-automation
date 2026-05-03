// helpers/apiHelper.js
// Centralized Open Library API request logic and response parsing

const BASE_API_URL = 'https://openlibrary.org/search.json';

/**
 * Core fetch wrapper for Open Library Search API
 * @param {Object} params - query parameters
 * @returns {Promise<Object>} parsed JSON response
 */
async function searchAPI(params = {}) {
  const query = new URLSearchParams(params).toString();
  const url = `${BASE_API_URL}?${query}`;

  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'PlaywrightTestSuite/1.0',
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText} — URL: ${url}`);
  }

  const data = await response.json();
  return data;
}

/**
 * Parse and validate standard fields from an API response
 * @param {Object} response - raw API response
 * @returns {{ numFound: number, docs: Object[], start: number }}
 */
function parseSearchResponse(response) {
  const { numFound, docs, start } = response;

  if (typeof numFound !== 'number') {
    throw new Error(`Unexpected response: numFound is not a number (got ${typeof numFound})`);
  }
  if (!Array.isArray(docs)) {
    throw new Error(`Unexpected response: docs is not an array`);
  }

  return { numFound, docs, start: start ?? 0 };
}

/**
 * Search with a limit and arbitrary query params
 * @param {string} q - search query
 * @param {number} limit
 * @param {Object} extra - extra params (e.g. sort)
 * @returns {Promise<{ numFound: number, docs: Object[], start: number }>}
 */
async function searchWithLimit(q, limit, extra = {}) {
  const raw = await searchAPI({ q, limit, ...extra });
  return parseSearchResponse(raw);
}

/**
 * Get first result title from API for a given sort
 * @param {string} q
 * @param {string} sort
 * @returns {Promise<string>}
 */
async function getFirstTitleWithSort(q, sort) {
  const raw = await searchAPI({ q, sort, limit: 1 });
  const { docs } = parseSearchResponse(raw);
  if (!docs.length) throw new Error('No docs returned from API');
  return (docs[0].title ?? '').trim();
}

module.exports = {
  searchAPI,
  parseSearchResponse,
  searchWithLimit,
  getFirstTitleWithSort,
};
