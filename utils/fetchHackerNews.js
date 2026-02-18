const chalk = require('chalk');
const ora = require('ora');
const { HackerNewsBaseUrl } = require('../common/const');
const t = require('./i18n');
const { requestWithRetry } = require('./request');

async function fetchHackerNews(start = 0, end = 10, output = 'text') {
  const url = `${HackerNewsBaseUrl}topstories.json`;
  const spinner = ora(t('spinner.load')).start();
  try {
    const { data = [] } = await requestWithRetry({ url, method: 'GET' });
    const promises = data.slice(start, end).map((itemId) =>
      requestWithRetry({
        url: `${HackerNewsBaseUrl}item/${itemId}.json`,
        method: 'GET',
      }),
    );
    const result = await Promise.all(promises);
    spinner.stop();
    const items = result.map((item) => item.data);
    if (output === 'json') {
      console.log(
        JSON.stringify(
          {
            source: 'hackernews',
            items,
          },
          null,
          2,
        ),
      );
      return items;
    }
    console.log(
      chalk.cyan(`-----------------------------------------
              📰 ${t('hn.outputTitle')}          
-----------------------------------------
    `),
    );
    const news = items.forEach(({ title, url }) => {
      // output list
      console.log(`${t('hn.title')}: `, chalk.green(title));
      console.log(`${t('hn.url')}: `, chalk.dim(url));
      console.log('------------------------------------');
    });
    return news;
  } catch (error) {
    console.log(chalk.red(`${t('spinner.errorPrefix')}: ${error.message}`));
    spinner.fail(t('spinner.fail'));
  }
}

module.exports = fetchHackerNews;
