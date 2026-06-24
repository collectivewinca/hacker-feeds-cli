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
  fetchDevto,
  fetchLobsters,
  fetchEchoJS,
  config,
  t,
} = require('../utils');
const {
  isPositiveInt,
  isNonNegativeInt,
  isValidSince,
  isValidRedditSort,
  isValidDevtoSort,
  isValidLobstersSort,
  isValidEchojsSort,
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
  .option('--oauth', 'Use OAuth worker (requires HFEEDS_REDDIT_WORKER env var)')
  .action((args) => {
    const { json } = program.opts();
    const { topic, sort, oauth } = args;
    if (sort && !isValidRedditSort(sort)) {
      console.log(chalk.red(t('program.invalidRedditSort')));
      return;
    }
    fetchReddit(sort, topic, json ? 'json' : 'text', oauth || false);
  });

// get dev.to feeds
program
  .command('devto')
  .description(t('program.devtoDesc'))
  .option('-t, --tag <optional>', t('program.devtoTag'))
  .option('-s, --sort <optional>', t('program.devtoSort'))
  .option('-c, --count <optional>', t('program.devtoCount'))
  .action((args) => {
    const { json } = program.opts();
    const { tag = '', sort = 'top' } = args;
    const countInput = args.count === undefined ? 10 : Number.parseInt(args.count, 10);
    if (!isValidDevtoSort(sort)) {
      console.log(chalk.red(t('program.invalidDevtoSort')));
      return;
    }
    if (!isPositiveInt(countInput)) {
      console.log(chalk.red(t('program.invalidCount')));
      return;
    }
    fetchDevto(tag, sort, countInput, json ? 'json' : 'text');
  });

// get lobsters feeds
program
  .command('lobsters')
  .description(t('program.lobstersDesc'))
  .option('-s, --sort <optional>', t('program.lobstersSort'))
  .option('-t, --tag <optional>', t('program.lobstersTag'))
  .option('-c, --count <optional>', t('program.lobstersCount'))
  .action((args) => {
    const { json } = program.opts();
    const { sort = 'hottest', tag = '' } = args;
    const countInput = args.count === undefined ? 10 : Number.parseInt(args.count, 10);
    if (!isValidLobstersSort(sort)) {
      console.log(chalk.red(t('program.invalidLobstersSort')));
      return;
    }
    if (!isPositiveInt(countInput)) {
      console.log(chalk.red(t('program.invalidCount')));
      return;
    }
    fetchLobsters(sort, tag, countInput, json ? 'json' : 'text');
  });

// get echo js feeds
program
  .command('echojs')
  .description(t('program.echojsDesc'))
  .option('-s, --sort <optional>', t('program.echojsSort'))
  .option('-c, --count <optional>', t('program.echojsCount'))
  .action((args) => {
    const { json } = program.opts();
    const { sort = 'latest' } = args;
    const countInput = args.count === undefined ? 10 : Number.parseInt(args.count, 10);
    if (!isValidEchojsSort(sort)) {
      console.log(chalk.red(t('program.invalidEchojsSort')));
      return;
    }
    if (!isPositiveInt(countInput)) {
      console.log(chalk.red(t('program.invalidCount')));
      return;
    }
    fetchEchoJS(sort, countInput, json ? 'json' : 'text');
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
