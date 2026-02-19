const fetchHackerNews = require('./fetchHackerNews');
const fetchProductHunt = require('./fetchProductHunt');
const fetchGitHubTrending = require('./fetchGitHub');
const fetchReddit = require('./fetchReddit');
const fetchV2ex = require('./fetchV2ex');
const fetchDevto = require('./fetchDevto');
const fetchLobsters = require('./fetchLobsters');
const fetchEchoJS = require('./fetchEchoJS');
const config = require('./db');
const t = require('./i18n');

module.exports = {
  fetchHackerNews,
  fetchProductHunt,
  fetchGitHubTrending,
  fetchReddit,
  fetchV2ex,
  fetchDevto,
  fetchLobsters,
  fetchEchoJS,
  config,
  t,
};
