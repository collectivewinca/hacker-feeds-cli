#!/usr/bin/env node
const chalk = require('chalk');
const program = require('commander');
const pkg = require('../package.json');
const inquirer = require('inquirer');
const {
  fetchHackerNews,
  fetchProductHunt,
  fetchGitHubTrending,
  fetchReddit,
  fetchV2ex,
  config,
  t,
} = require('../utils');
const {
  isPositiveInt,
  isNonNegativeInt,
  isValidSince,
  isValidRedditSort,
} = require('../utils/validators');

program.on('--help', () => {
  console.log(
    chalk.green(`
Example:
  $ hfeeds github`),
  );
});

// settings
program.option('--json', t('program.jsonOutput'));

program
  .command('config')
  .description(t('program.configDesc'))
  .option('-l, --lang <optional>', t('program.configLang'))
  .option('-p, --ph-token <optional>', t('program.configPhToken'))
  .action((options) => {
    const { lang, phToken } = options;
    if (!lang && !phToken) {
      setConfig();
      return;
    }
    const nextConfig = {};
    if (lang) {
      nextConfig.lang = lang;
    }
    if (phToken) {
      nextConfig.productHuntToken = phToken;
    }
    config.write(nextConfig);
  });

// get github feeds
program
  .command('github')
  .description(t('program.ghDesc'))
  .option('-s, --since <optional>', t('program.ghSince'))
  .option('-l, --lang <optional>', t('program.ghLang'))
  .action((args) => {
    const { json } = program.opts();
    const { since = 'daily', lang = '' } = args;
    if (!isValidSince(since)) {
      console.log(chalk.red(t('program.invalidSince')));
      return;
    }
    fetchGitHubTrending(since, lang, json ? 'json' : 'text');
  });

// get hacker news feeds
program
  .command('news')
  .description(t('program.hnDesc'))
  .option('-t, --top <optional>', t('program.hnTop'))
  .action((args) => {
    const { json } = program.opts();
    const topInput = args.top === undefined ? 10 : Number.parseInt(args.top, 10);
    if (!isPositiveInt(topInput)) {
      console.log(chalk.red(t('program.invalidTop')));
      return;
    }
    fetchHackerNews(0, topInput, json ? 'json' : 'text');
  });

// get product hunt feeds
program
  .command('product')
  .description(t('program.phDesc'))
  .option('-c, --count <optional>', t('program.phCount'))
  .option('-p, --past <optional>', t('program.phPast'))
  .action((args) => {
    const { json } = program.opts();
    const countInput = args.count === undefined ? 10 : Number.parseInt(args.count, 10);
    const pastInput = args.past === undefined ? 0 : Number.parseInt(args.past, 10);
    if (!isPositiveInt(countInput)) {
      console.log(chalk.red(t('program.invalidCount')));
      return;
    }
    if (!isNonNegativeInt(pastInput)) {
      console.log(chalk.red(t('program.invalidPast')));
      return;
    }
    fetchProductHunt(countInput, pastInput, undefined, json ? 'json' : 'text');
  });

// get v2ex feeds
program
  .command('v2ex')
  .description(t('program.v2ex'))
  .option('-n, --node <optional>', t('program.v2exNode'))
  .action((args) => {
    const { json } = program.opts();
    const { node } = args;
    fetchV2ex(node, json ? 'json' : 'text');
  });

// get reddit feeds
program
  .command('reddit')
  .description(t('program.redditDesc'))
  .option('-t, --topic <optional>', t('program.redditTopic'))
  .option('-s, --sort <optional>', t('program.redditSort'))
  .action((args) => {
    const { json } = program.opts();
    const { topic, sort } = args;
    if (sort && !isValidRedditSort(sort)) {
      console.log(chalk.red(t('program.invalidRedditSort')));
      return;
    }
    fetchReddit(sort, topic, json ? 'json' : 'text');
  });

program.addHelpCommand('help [command]', t('program.help'));
program.helpOption('-h, --help', t('program.help'));
program.version(pkg.version, '-v, --version', t('program.version'));

program.parse(process.argv);

// trigger without param
if (!process.argv.slice(2).length) {
  program.outputHelp();
}

async function setConfig() {
  const { lang, productHuntToken } = await inquirer.prompt([
    {
      type: 'list',
      message: t('program.langConfig'),
      name: 'lang',
      choices: [
        { name: 'EN（English）', value: 'en' },
        { name: 'ZH（简体中文）', value: 'zh' },
      ],
    },
    {
      type: 'input',
      message: t('program.phTokenConfig'),
      name: 'productHuntToken',
    },
  ]);
  const updates = { lang };
  if (productHuntToken) {
    updates.productHuntToken = productHuntToken;
  }
  config.write(updates);
}
