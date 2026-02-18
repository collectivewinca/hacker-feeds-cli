const ora = require('ora');
const t = require('./i18n');
const { V2exBaseUrl } = require('../common/const');
const chalk = require('chalk');
const { requestWithRetry } = require('./request');

async function fetchV2ex(topic = 'create', output = 'text') {
  const url = `${V2exBaseUrl}/api/topics/show.json?node_name=${topic}`;
  const spinner = ora(t('spinner.load')).start();
  try {
    const { data = [] } = await requestWithRetry({ url, method: 'GET' });
    spinner.stop();
    if (output === 'json') {
      console.log(
        JSON.stringify(
          {
            source: 'v2ex',
            topic,
            items: data,
          },
          null,
          2,
        ),
      );
      return data;
    }
    console.log(
      chalk.cyan(`-----------------------------------------
              🤖️ ${t('v2ex.title')}          
-----------------------------------------
    `),
    );
    data.forEach((item) => {
      const { title, url, content, node = {}, replies } = item;
      console.log(t('v2ex.postName'), ': ', chalk.cyan(title));
      console.log(
        `${t('v2ex.comment')}: `,
        chalk.yellow(replies),
        ` | ${t('v2ex.topic')}: `,
        chalk.yellow(node.name),
      );
      console.log(t('v2ex.url'), ': ', chalk.dim(url));
      if (content !== '') {
        console.log(t('v2ex.content'), ': ', chalk.green(content));
      }
      console.log('----------------------------------------------');
    });
    spinner.stop();
  } catch (error) {
    console.log(chalk.red(`${t('spinner.errorPrefix')}: ${error.message}`));
    spinner.fail(t('spinner.fail'));
  }
}

module.exports = fetchV2ex;
