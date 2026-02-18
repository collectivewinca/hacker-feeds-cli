const _ = require('lodash');
const ora = require('ora');
const t = require('./i18n');
const { RedditBaseUrl } = require('../common/const');
const chalk = require('chalk');
const { requestWithRetry } = require('./request');

async function fetchReddit(sort = 'hot', topic = 'popular', output = 'text') {
  const url = `${RedditBaseUrl}/r/${topic}/${sort}.json`;
  const spinner = ora(t('spinner.load')).start();
  try {
    const { data } = await requestWithRetry({ url, method: 'GET' });
    const items = _.get(data, 'data.children', []).map(({ data: item }) => item);
    spinner.stop();
    if (output === 'json') {
      console.log(
        JSON.stringify(
          {
            source: 'reddit',
            topic,
            sort,
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
              🧬 ${t('reddit.title')}          
-----------------------------------------
    `),
    );
    items.forEach((item) => {
      const { title, ups, selftext, num_comments, subreddit, permalink } = item;
      console.log(t('reddit.postName'), ': ', chalk.green(title));
      console.log(
        `${t('reddit.comment')}: `,
        chalk.yellow(num_comments),
        ' | ',
        `${t('reddit.votes')}: `,
        chalk.yellow(ups),
        ` | ${t('reddit.topic')}: `,
        chalk.yellow(subreddit),
      );
      console.log(t('reddit.url'), ': ', chalk.dim(`${RedditBaseUrl}${permalink}`));
      if (selftext !== '') {
        console.log(t('reddit.content'), ': ', chalk.cyan(selftext));
      }
      console.log('----------------------------------------------');
    });
    spinner.stop();
  } catch (error) {
    console.log(chalk.red(`${t('spinner.errorPrefix')}: ${error.message}`));
    spinner.fail(t('spinner.fail'));
  }
}

module.exports = fetchReddit;
