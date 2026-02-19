const test = require('node:test');
const assert = require('node:assert/strict');
const { requestWithRetry, shouldRetry } = require('../utils/request');

test('shouldRetry returns true for transient network errors', () => {
  assert.equal(shouldRetry({ code: 'ENOTFOUND' }), true);
  assert.equal(shouldRetry({ code: 'ECONNABORTED' }), true);
  assert.equal(shouldRetry({ code: 'ECONNRESET' }), true);
});

test('shouldRetry returns true for 5xx and false for 4xx', () => {
  assert.equal(shouldRetry({ response: { status: 500 } }), true);
  assert.equal(shouldRetry({ response: { status: 429 } }), true);
  assert.equal(shouldRetry({ response: { status: 404 } }), false);
});

test('requestWithRetry retries and eventually succeeds', async () => {
  let calls = 0;
  const response = await requestWithRetry(
    { url: 'https://example.com', method: 'GET' },
    {
      retries: 2,
      retryDelayMs: 1,
      requestFn: async () => {
        calls += 1;
        if (calls < 3) {
          const error = new Error('temporary');
          error.code = 'ECONNRESET';
          throw error;
        }
        return { data: { ok: true } };
      },
    },
  );
  assert.equal(calls, 3);
  assert.deepEqual(response.data, { ok: true });
});

test('requestWithRetry does not retry non-retryable errors', async () => {
  let calls = 0;
  await assert.rejects(
    requestWithRetry(
      { url: 'https://example.com', method: 'GET' },
      {
        retries: 3,
        retryDelayMs: 1,
        requestFn: async () => {
          calls += 1;
          const error = new Error('bad request');
          error.response = { status: 400 };
          throw error;
        },
      },
    ),
  );
  assert.equal(calls, 1);
});
