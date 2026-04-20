const ora = require('ora');
const t = require('./i18n');
const { V2exBaseUrl } = require('../common/const');
const chalk = require('chalk');
const { requestWithRetry } = require('./request');
const { XMLParser } = require('fast-xml-parser');

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

async function fetchV2ex(topic = 'create', output = 'text') {
  const url = `${V2exBaseUrl}/feed/${topic}.xml`;
  const spinner = ora(t('spinner.load')).start();
  try {
    const { data: xml } = await requestWithRetry({
      url,
      method: 'GET',
      headers: {
        'User-Agent': 'hacker-feeds-cli/0.5.0 (https://github.com/collectivewinca/hacker-feeds-cli)',
      },
      responseType: 'text',
    });

    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
    const feed = parser.parse(xml);
    const entries = feed.feed?.entry || [];
    const normalized = Array.isArray(entries) ? entries : [entries];

    const items = normalized.map((entry) => {
      const permalink = entry.link?.['@_href'] || entry.link || '';
      const contentHtml = entry.content ? (entry.content['#text'] || entry.content) : '';
      return {
        title: entry.title || '',
        url: permalink,
        permalink,
        content: stripHtml(contentHtml),
        node: { name: topic, title: feed.feed?.title || topic },
        replies: null,
        author: entry.author?.name || '',
        published: entry.published || entry.updated || '',
      };
    });

    spinner.stop();
    if (output === 'json') {
      console.log(
        JSON.stringify(
          {
            source: 'v2ex',
            topic,
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
              🤖️ ${t('v2ex.title')}
-----------------------------------------
    `),
    );
    items.forEach((item) => {
      const { title, url, content, node = {}, replies } = item;
      console.log(t('v2ex.postName'), ': ', chalk.cyan(title));
      console.log(
        `${t('v2ex.comment')}: `,
        chalk.yellow(replies ?? '-'),
        ` | ${t('v2ex.topic')}: `,
        chalk.yellow(node.name),
      );
      console.log(t('v2ex.url'), ': ', chalk.dim(url));
      if (content && content.length > 0) {
        const preview = content.length > 300 ? content.slice(0, 300) + '…' : content;
        console.log(t('v2ex.content'), ': ', chalk.green(preview));
      }
      console.log('----------------------------------------------');
    });
  } catch (error) {
    spinner.stop();
    console.log(chalk.red(`${t('spinner.errorPrefix')}: ${error.message}`));
    spinner.fail(t('spinner.fail'));
  }
}

module.exports = fetchV2ex;
