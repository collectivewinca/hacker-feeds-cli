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

// --- OAuth path: fetch via a Cloudflare Worker proxy that holds Reddit client_credentials ---
// Set HFEEDS_REDDIT_WORKER env var to your worker URL, e.g.:
//   export HFEEDS_REDDIT_WORKER=https://my-reddit-oauth.workers.dev
// The worker must expose GET /reddit/listing/{sub}/{sort} returning Reddit JSON.
async function fetchRedditOAuth(sort, topic, output, spinner) {
  const workerUrl = process.env.HFEEDS_REDDIT_WORKER;
  if (!workerUrl) throw new Error('HFEEDS_REDDIT_WORKER not set');
  const url = `${workerUrl}/reddit/listing/${topic}/${sort}`;
  const { data } = await requestWithRetry({
    url,
    method: 'GET',
    headers: {
      'User-Agent': 'hacker-feeds-cli/0.6.0 (https://github.com/collectivewinca/hacker-feeds-cli)',
    },
    responseType: 'json',
  });
  const children = data?.data?.children || [];
  const items = children.map((c) => {
    const d = c.data || {};
    return {
      title: d.title || '',
      url: d.url || '',
      permalink: d.permalink ? `${RedditBaseUrl}${d.permalink}` : '',
      author: d.author || '',
      subreddit: d.subreddit || topic,
      score: d.ups ?? null,
      num_comments: d.num_comments ?? null,
      selftext: d.selftext || '',
      published: d.created_utc ? new Date(d.created_utc * 1000).toISOString() : '',
    };
  });
  return items;
}

// --- RSS path: fallback when no OAuth worker is configured or it fails ---
async function fetchRedditRSS(sort, topic, spinner) {
  const url = `${RedditBaseUrl}/r/${topic}/${sort}.rss?limit=25`;
  const { data: xml } = await requestWithRetry({
    url,
    method: 'GET',
    headers: {
      'User-Agent': 'hacker-feeds-cli/0.6.0 (https://github.com/collectivewinca/hacker-feeds-cli)',
    },
    responseType: 'text',
  });
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
  const feed = parser.parse(xml);
  const entries = feed.feed?.entry || [];
  const normalized = Array.isArray(entries) ? entries : [entries];
  return normalized.map((entry) => {
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
}

async function fetchReddit(sort = 'hot', topic = 'popular', output = 'text', useOAuth = false) {
  const spinner = output === 'json' ? { stop() {}, fail() {} } : ora(t('spinner.load')).start();
  let items = [];
  let usedOAuth = false;

  // Try OAuth path if explicitly requested or env var is set
  if (useOAuth || process.env.HFEEDS_REDDIT_WORKER) {
    try {
      items = await fetchRedditOAuth(sort, topic, output, spinner);
      usedOAuth = true;
    } catch (err) {
      if (useOAuth) {
        // Explicitly requested OAuth — don't silently fall back
        spinner.stop();
        console.log(chalk.red(`${t('spinner.errorPrefix')}: ${err.message}`));
        spinner.fail(t('spinner.fail'));
        return;
      }
      // Auto-detected but failed — fall through to RSS
    }
  }

  // RSS fallback
  if (!usedOAuth) {
    try {
      items = await fetchRedditRSS(sort, topic, spinner);
    } catch (error) {
      spinner.stop();
      console.log(chalk.red(`${t('spinner.errorPrefix')}: ${error.message}`));
      spinner.fail(t('spinner.fail'));
      return;
    }
  }

  spinner.stop();
  if (output === 'json') {
    console.log(
      JSON.stringify(
        {
          source: 'reddit',
          topic,
          sort,
          oauth: usedOAuth,
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
    const { title, num_comments, subreddit, permalink, url, selftext, score } = item;
    console.log(t('reddit.postName'), ': ', chalk.green(title));
    console.log(
      `${t('reddit.comment')}: `,
      chalk.yellow(num_comments ?? '-'),
      ' | ',
      `${t('reddit.votes')}: `,
      chalk.yellow(score ?? '-'),
      ` | ${t('reddit.topic')}: `,
      chalk.yellow(subreddit),
    );
    console.log(t('reddit.url'), ': ', chalk.dim(url || permalink));
    if (selftext && selftext.length > 0) {
      const preview = selftext.length > 200 ? selftext.slice(0, 200) + '…' : selftext;
      console.log(t('reddit.content'), ': ', chalk.cyan(preview));
    }
    console.log('----------------------------------------------');
  });
}

module.exports = fetchReddit;
