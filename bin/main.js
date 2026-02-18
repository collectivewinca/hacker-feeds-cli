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

program.on('--help', () => {
  console.log(
    chalk.green(`
Example:
  $ hfeeds github`),
  );
});

// settings
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
    const { since = 'daily', lang = '' } = args;
    const availableSince = ['daily', 'weekly', 'monthly'];
    if (!availableSince.includes(since)) {
      console.log(chalk.red(t('program.invalidSince')));
      return;
    }
    fetchGitHubTrending(since, lang);
  });

// get hacker news feeds
program
  .command('news')
  .description(t('program.hnDesc'))
  .option('-t, --top <optional>', t('program.hnTop'))
  .action((args) => {
    const top = Number.parseInt(args.top, 10) || 10;
    if (top <= 0) {
      console.log(chalk.red(t('program.invalidTop')));
      return;
    }
    fetchHackerNews(0, top);
  });

// get product hunt feeds
program
  .command('product')
  .description(t('program.phDesc'))
  .option('-c, --count <optional>', t('program.phCount'))
  .option('-p, --past <optional>', t('program.phPast'))
  .action((args) => {
    const count = Number.parseInt(args.count, 10) || 10;
    const past = Number.parseInt(args.past, 10) || 0;
    if (count <= 0) {
      console.log(chalk.red(t('program.invalidCount')));
      return;
    }
    if (past < 0) {
      console.log(chalk.red(t('program.invalidPast')));
      return;
    }
    fetchProductHunt(count, past);
  });

// get v2ex feeds
program
  .command('v2ex')
  .description(t('program.v2ex'))
  .option('-n, --node <optional>', t('program.v2exNode'))
  .action((args) => {
    const { node } = args;
    fetchV2ex(node);
  });

// get reddit feeds
program
  .command('reddit')
  .description(t('program.redditDesc'))
  .option('-t, --topic <optional>', t('program.redditTopic'))
  .option('-s, --sort <optional>', t('program.redditSort'))
  .action((args) => {
    const { topic, sort } = args;
    const availableSorts = ['hot', 'new', 'best', 'top'];
    if (sort && !availableSorts.includes(sort)) {
      console.log(chalk.red(t('program.invalidRedditSort')));
      return;
    }
    fetchReddit(sort, topic);
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
