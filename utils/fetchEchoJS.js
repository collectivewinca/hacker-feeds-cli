const chalk = require('chalk');
const ora = require('ora');
const t = require('./i18n');
const { EchoJSBaseUrl } = require('../common/const');
const { requestWithRetry } = require('./request');

async function fetchEchoJS(sort = 'latest', count = 10, output = 'text') {
  const endpoint = sort === 'top' ? 'top' : 'latest';
  const url = `${EchoJSBaseUrl}/api/getnews/${endpoint}/0/${count}`;

  const spinner = ora(t('spinner.load')).start();
  try {
    const { data = {} } = await requestWithRetry({ url, method: 'GET' });
    const items = data.news || [];
    spinner.stop();
    if (output === 'json') {
      console.log(
        JSON.stringify(
          {
            source: 'echojs',
            sort,
            items: items.map(({ title, url, up, comments, ctime }) => ({
              title,
              url,
              upvotes: up,
              comments,
              created: ctime ? new Date(ctime * 1000).toISOString() : null,
            })),
          },
          null,
          2,
        ),
      );
      return items;
    }
    console.log(
      chalk.yellow(`-----------------------------------------
          ⚡ ${t('echojs.title')}
-----------------------------------------
    `),
    );
    items.forEach(({ title, url, up, comments }) => {
      console.log(`${t('echojs.postName')}: `, chalk.green(title));
      console.log(
        `${t('echojs.upvotes')}: `,
        chalk.yellow(up),
        ' | ',
        `${t('echojs.comment')}: `,
        chalk.yellow(comments),
      );
      console.log(`${t('echojs.url')}: `, chalk.dim(url));
      console.log('----------------------------------------------');
    });
  } catch (error) {
    console.log(chalk.red(`${t('spinner.errorPrefix')}: ${error.message}`));
    spinner.fail(t('spinner.fail'));
  }
}

module.exports = fetchEchoJS;
