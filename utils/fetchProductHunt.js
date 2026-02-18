const chalk = require('chalk');
const ora = require('ora');
const { getProductHuntAccessToken } = require('../common/config');
const { ProductHuntBaseUrl } = require('../common/const');
const { formatDate, getAfterNDayDate, getBeforeNDayDate } = require('./date');
const t = require('./i18n');
const { requestWithRetry } = require('./request');

const defaultDate = formatDate(new Date());

async function fetchProductHunt(count = 10, past = 0, time = defaultDate, output = 'text') {
  const accessToken = getProductHuntAccessToken();
  if (!accessToken) {
    console.log(chalk.red(t('ph.missingToken')));
    return;
  }
  const beforeOneDay = getBeforeNDayDate(time, past);
  const afterOneDay = getAfterNDayDate(time, 1);
  const reqOptions = {
    url: ProductHuntBaseUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    mode: 'cors',
    data: JSON.stringify({
      query: `query { posts(first: ${count}, order: VOTES, postedAfter: "${beforeOneDay}", postedBefore: "${afterOneDay}") {
          edges{
            cursor
            node{
              id
              name
              tagline
              description
              url
              votesCount
              thumbnail{
                type
                url
              }
              website
              reviewsRating
}}}}`,
    }),
  };
  const spinner = ora(t('spinner.load')).start();
  try {
    const { data } = await requestWithRetry(reqOptions);
    const products = data.data.posts.edges || [];
    if (products.length === 0) {
      spinner.fail(t('spinner.unUpdate'));
      return;
    }
    spinner.stop();
    const items = products.map((product) => product.node);
    if (output === 'json') {
      console.log(
        JSON.stringify(
          {
            source: 'producthunt',
            count,
            past,
            items,
          },
          null,
          2,
        ),
      );
      return items;
    }
    console.log(
      chalk.green(`-----------------------------------------
          🔮 ${t('ph.title')}          
-----------------------------------------
    `),
    );
    items.forEach(({ name, description, url, website, votesCount }) => {
      console.log(
        chalk.bold(`${t('ph.name')}: `, chalk.cyan(name)),
        `| ▲`,
        chalk.yellow(votesCount),
      );
      console.log(`${t('ph.desc')}: `, chalk.green(description));
      console.log(`${t('ph.url')}: `, chalk.dim(url.split('?')[0]));
      console.log(`${t('ph.website')}: `, chalk.dim(website.split('?')[0]));
      console.log('----------------------------------------------');
    });
  } catch (error) {
    console.log(chalk.red(`${t('spinner.errorPrefix')}: ${error.message}`));
    spinner.fail(t('spinner.fail'));
  }
}

module.exports = fetchProductHunt;
