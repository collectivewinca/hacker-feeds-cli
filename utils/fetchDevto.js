const chalk = require('chalk');
const ora = require('ora');
const t = require('./i18n');
const { DevtoBaseUrl } = require('../common/const');
const { requestWithRetry } = require('./request');

async function fetchDevto(tag = '', sort = 'top', count = 10, output = 'text') {
  let url = `${DevtoBaseUrl}/articles?per_page=${count}`;
  if (tag) {
    url += `&tag=${encodeURIComponent(tag)}`;
  }
  if (sort === 'latest') {
    url += '&state=fresh';
  } else if (sort === 'rising') {
    url += '&state=rising';
  }
  // default (top) uses the API default sort by popularity

  const spinner = ora(t('spinner.load')).start();
  try {
    const { data: items = [] } = await requestWithRetry({ url, method: 'GET' });
    spinner.stop();
    if (output === 'json') {
      console.log(
        JSON.stringify(
          {
            source: 'devto',
            tag: tag || null,
            sort,
            items: items.map(({ title, description, url, tags, positive_reactions_count, comments_count, reading_time_minutes, user }) => ({
              title,
              description,
              url,
              tags,
              reactions: positive_reactions_count,
              comments: comments_count,
              reading_time: reading_time_minutes,
              author: user ? user.username : null,
            })),
          },
          null,
          2,
        ),
      );
      return items;
    }
    console.log(
      chalk.magenta(`-----------------------------------------
          📝 ${t('devto.title')}
-----------------------------------------
    `),
    );
    items.forEach(({ title, description, url, positive_reactions_count, comments_count, user }) => {
      console.log(`${t('devto.postName')}: `, chalk.green(title));
      console.log(
        `${t('devto.reactions')}: `,
        chalk.yellow(positive_reactions_count),
        ' | ',
        `${t('devto.comment')}: `,
        chalk.yellow(comments_count),
        ` | ${t('devto.author')}: `,
        chalk.yellow(user ? user.username : 'unknown'),
      );
      console.log(`${t('devto.url')}: `, chalk.dim(url));
      console.log('----------------------------------------------');
    });
  } catch (error) {
    console.log(chalk.red(`${t('spinner.errorPrefix')}: ${error.message}`));
    spinner.fail(t('spinner.fail'));
  }
}

module.exports = fetchDevto;
