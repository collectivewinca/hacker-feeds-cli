const ora = require('ora');
const t = require('./i18n');
const { RedditBaseUrl } = require('../common/const');
const chalk = require('chalk');
const { requestWithRetry } = require('./request');
const { XMLParser } = require('fast-xml-parser');

function extractExternalUrl(contentHtml) {
  if (!contentHtml) return null;
  const match = contentHtml.match(/<a\s+href="(https?:\/\/[^"]+)"[^>]*>\s*\[link\]/i);
  return match ? match[1].trim() : null;
}

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

async function fetchReddit(sort = 'hot', topic = 'popular', output = 'text') {
  const url = `${RedditBaseUrl}/r/${topic}/${sort}.rss?limit=25`;
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
      const externalUrl = extractExternalUrl(contentHtml);
      return {
        title: entry.title || '',
        url: externalUrl || permalink,
        permalink,
        author: entry.author?.name || '',
        subreddit: topic,
        score: null,
        num_comments: null,
        selftext: stripHtml(contentHtml),
        published: entry.published || entry.updated || '',
      };
    });

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
      const { title, num_comments, subreddit, permalink, url, selftext } = item;
      console.log(t('reddit.postName'), ': ', chalk.green(title));
      console.log(
        `${t('reddit.comment')}: `,
        chalk.yellow(num_comments ?? '-'),
        ' | ',
        `${t('reddit.topic')}: `,
        chalk.yellow(subreddit),
      );
      console.log(t('reddit.url'), ': ', chalk.dim(url || permalink));
      if (selftext && selftext.length > 0) {
        const preview = selftext.length > 200 ? selftext.slice(0, 200) + '…' : selftext;
        console.log(t('reddit.content'), ': ', chalk.cyan(preview));
      }
      console.log('----------------------------------------------');
    });
  } catch (error) {
    spinner.stop();
    console.log(chalk.red(`${t('spinner.errorPrefix')}: ${error.message}`));
    spinner.fail(t('spinner.fail'));
  }
}

module.exports = fetchReddit;
