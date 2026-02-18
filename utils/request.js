const axios = require('axios');

const DEFAULT_TIMEOUT_MS = 10000;
const DEFAULT_RETRIES = 2;
const DEFAULT_RETRY_DELAY_MS = 600;

const client = axios.create({
  timeout: DEFAULT_TIMEOUT_MS,
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function shouldRetry(error) {
  if (!error) {
    return false;
  }
  if (error.code === 'ECONNABORTED' || error.code === 'ENOTFOUND' || error.code === 'ECONNRESET') {
    return true;
  }
  const status = error.response && error.response.status;
  return typeof status === 'number' && status >= 500;
}

async function requestWithRetry(config, options = {}) {
  const retries = options.retries ?? DEFAULT_RETRIES;
  const retryDelayMs = options.retryDelayMs ?? DEFAULT_RETRY_DELAY_MS;
  const requestFn = options.requestFn || ((nextConfig) => client.request(nextConfig));
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await requestFn(config);
    } catch (error) {
      lastError = error;
      if (attempt === retries || !shouldRetry(error)) {
        throw error;
      }
      await sleep(retryDelayMs * (attempt + 1));
    }
  }
  throw lastError;
}

module.exports = {
  requestWithRetry,
  shouldRetry,
};
