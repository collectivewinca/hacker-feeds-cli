const chalk = require('chalk');
const ora = require('ora');
const t = require('./i18n');
const { LobstersBaseUrl } = require('../common/const');
const { requestWithRetry } = require('./request');

async function fetchLobsters(sort = 'hottest', tag = '', count = 10, output = 'text') {
  let url = `${LobstersBaseUrl}/${sort}.json`;
  if (tag) {
    url = `${LobstersBaseUrl}/t/${encodeURIComponent(tag)}.json`;
  }

  const spinner = ora(t('spinner.load')).start();
  try {
    const { data = [] } = await requestWithRetry({
      url,
      method: 'GET',
      headers: { 'User-Agent': 'hacker-feeds-cli/0.5.0 (https://github.com/collectivewinca/hacker-feeds-cli)' },
    });
    const items = data.slice(0, count);
    spinner.stop();
    if (output === 'json') {
      console.log(
        JSON.stringify(
          {
            source: 'lobsters',
            sort,
            tag: tag || null,
            items: items.map(({ title, url, score, comment_count, tags, submitter_user, short_id }) => ({
              title,
              url,
              score,
              comments: comment_count,
              tags,
              submitter: submitter_user ? submitter_user.username : null,
              id: short_id,
            })),
          },
          null,
          2,
        ),
      );
      return items;
    }
    console.log(
      chalk.red(`-----------------------------------------
          🦞 ${t('lobsters.title')}
-----------------------------------------
    `),
    );
    items.forEach(({ title, url, score, comment_count, tags, submitter_user }) => {
      console.log(`${t('lobsters.postName')}: `, chalk.green(title));
      console.log(
        `${t('lobsters.score')}: `,
        chalk.yellow(score),
        ' | ',
        `${t('lobsters.comment')}: `,
        chalk.yellow(comment_count),
        ` | ${t('lobsters.tags')}: `,
        chalk.yellow((tags || []).join(', ')),
      );
      console.log(`${t('lobsters.url')}: `, chalk.dim(url));
      console.log('----------------------------------------------');
    });
  } catch (error) {
    console.log(chalk.red(`${t('spinner.errorPrefix')}: ${error.message}`));
    spinner.fail(t('spinner.fail'));
  }
}

module.exports = fetchLobsters;
