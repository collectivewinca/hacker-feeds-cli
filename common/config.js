const config = require('../utils/db');

function getProductHuntAccessToken() {
  const fileConfig = config.load();
  return process.env.HF_PRODUCTHUNT_TOKEN || fileConfig.productHuntToken || '';
}

module.exports = { getProductHuntAccessToken };
