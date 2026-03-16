# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-16 07:48:27 UTC

Runtime note: executed with NODE_OPTIONS=--require /tmp/hf-polyfill.js

## 1. Weekend Build Ideas with Demand

**Query:** What should I build this weekend that has demand?

**Command:**
```bash
echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set' ; node bin/main.js --json github -s weekly -l typescript ; node bin/main.js --json reddit -t webdev -s top
```

**Output:**
```text
[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set
- Fetching feeds...
{
  "source": "github",
  "since": "weekly",
  "language": "typescript",
  "items": [
    {
      "author": "promptfoo",
      "repo": "promptfoo",
      "avatar": "https://github.com/promptfoo.png",
      "repo_link": "https://github.com/promptfoo/promptfoo",
      "desc": "Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI. Compare performance of GPT, Claude, Gemini, Llama, and more. Simple declarative configs with command line and CI/CD integration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1449,
      "added_stars": 5337,
      "builtBy": [
        {
          "username": "typpo",
          "href": "https://github.com/typpo",
          "avatar": "https://avatars.githubusercontent.com/u/310310"
        },
        {
          "username": "mldangelo",
          "href": "https://github.com/mldangelo",
          "avatar": "https://avatars.githubusercontent.com/u/7235481"
        },
        {
          "username": "sklein12",
          "href": "https://github.com/sklein12",
          "avatar": "https://avatars.githubusercontent.com/u/1080611"
        }
      ]
    },
    {
      "author": "FlorianBruniaux",
      "repo": "claude-code-ultimate-guide",
      "avatar": "https://github.com/FlorianBruniaux.png",
      "repo_link": "https://github.com/FlorianBruniaux/claude-code-ultimate-guide",
      "desc": "A tremendous feat of documentation, this guide covers Claude Code from beginner to power user, with production-ready templates for Claude Code features, guides on agentic workflows, and a lot of great learning materials, including quizzes and a handy \"cheatsheet\". Whether it's the \"ultimate\" guide to Claude Code will be up to the reader :)",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 256,
      "added_stars": 866,
      "builtBy": [
        {
          "username": "FlorianBruniaux",
          "href": "https://github.com/FlorianBruniaux",
          "avatar": "https://avatars.githubusercontent.com/u/3902606"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need - A nano Claude Code–like agent, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4948,
      "added_stars": 4067,
      "builtBy": [
        {
          "username": "CrazyBoyM",
          "href": "https://github.com/CrazyBoyM",
          "avatar": "https://avatars.githubusercontent.com/u/35400185"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "bansalkanav",
          "href": "https://github.com/bansalkanav",
          "avatar": "https://avatars.githubusercontent.com/u/13186335"
        },
        {
          "username": "Octane0411",
          "href": "https://github.com/Octane0411",
          "avatar": "https://avatars.githubusercontent.com/u/88922959"
        },
        {
          "username": "synix",
          "href": "https://github.com/synix",
          "avatar": "https://avatars.githubusercontent.com/u/3198234"
        }
      ]
    },
    {
      "author": "openclaw",
      "repo": "clawhub",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/clawhub",
      "desc": "Skill Directory for OpenClaw",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 943,
      "added_stars": 1296,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "sethconvex",
          "href": "https://github.com/sethconvex",
          "avatar": "https://avatars.githubusercontent.com/u/239661579"
        },
        {
          "username": "thewilloftheshadow",
          "href": "https://github.com/thewilloftheshadow",
          "avatar": "https://avatars.githubusercontent.com/u/35580099"
        },
        {
          "username": "ngutman",
          "href": "https://github.com/ngutman",
          "avatar": "https://avatars.githubusercontent.com/u/1540134"
        }
      ]
    },
    {
      "author": "shadcn-ui",
      "repo": "ui",
      "avatar": "https://github.com/shadcn-ui.png",
      "repo_link": "https://github.com/shadcn-ui/ui",
      "desc": "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8196,
      "added_stars": 1237,
      "builtBy": [
        {
          "username": "shadcn",
          "href": "https://github.com/shadcn",
          "avatar": "https://avatars.githubusercontent.com/u/124599"
        },
        {
          "username": "kapishdima",
          "href": "https://github.com/kapishdima",
          "avatar": "https://avatars.githubusercontent.com/u/23422228"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "sirmalloc",
      "repo": "ccstatusline",
      "avatar": "https://github.com/sirmalloc.png",
      "repo_link": "https://github.com/sirmalloc/ccstatusline",
      "desc": "🚀 Beautiful highly customizable statusline for Claude Code CLI with powerline support, themes, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 205,
      "added_stars": 484,
      "builtBy": [
        {
          "username": "sirmalloc",
          "href": "https://github.com/sirmalloc",
          "avatar": "https://avatars.githubusercontent.com/u/2913994"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jackall3n",
          "href": "https://github.com/jackall3n",
          "avatar": "https://avatars.githubusercontent.com/u/38332643"
        },
        {
          "username": "alex-on-java",
          "href": "https://github.com/alex-on-java",
          "avatar": "https://avatars.githubusercontent.com/u/10196978"
        }
      ]
    },
    {
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2906,
      "added_stars": 1145,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
        }
      ]
    },
    {
      "author": "tobi",
      "repo": "qmd",
      "avatar": "https://github.com/tobi.png",
      "repo_link": "https://github.com/tobi/qmd",
      "desc": "mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 910,
      "added_stars": 2117,
      "builtBy": [
        {
          "username": "tobi",
          "href": "https://github.com/tobi",
          "avatar": "https://avatars.githubusercontent.com/u/347"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shreyaskarnik",
          "href": "https://github.com/shreyaskarnik",
          "avatar": "https://avatars.githubusercontent.com/u/311217"
        },
        {
          "username": "burke",
          "href": "https://github.com/burke",
          "avatar": "https://avatars.githubusercontent.com/u/1284"
        },
        {
          "username": "mbrendan",
          "href": "https://github.com/mbrendan",
          "avatar": "https://avatars.githubusercontent.com/u/25271154"
        }
      ]
    },
    {
      "author": "web-infra-dev",
      "repo": "midscene",
      "avatar": "https://github.com/web-infra-dev.png",
      "repo_link": "https://github.com/web-infra-dev/midscene",
      "desc": "AI-powered, vision-driven UI automation for every platform.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 897,
      "added_stars": 171,
      "builtBy": [
        {
          "username": "quanru",
          "href": "https://github.com/quanru",
          "avatar": "https://avatars.githubusercontent.com/u/11739753"
        },
        {
          "username": "yuyutaotao",
          "href": "https://github.com/yuyutaotao",
          "avatar": "https://avatars.githubusercontent.com/u/167746126"
        },
        {
          "username": "zhoushaw",
          "href": "https://github.com/zhoushaw",
          "avatar": "https://avatars.githubusercontent.com/u/27547179"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "alibaba",
      "repo": "page-agent",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/page-agent",
      "desc": "JavaScript in-page GUI agent. Control web interfaces with natural language.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 724,
      "added_stars": 6971,
      "builtBy": [
        {
          "username": "gaomeng1900",
          "href": "https://github.com/gaomeng1900",
          "avatar": "https://avatars.githubusercontent.com/u/10131203"
        },
        {
          "username": "JasonOA888",
          "href": "https://github.com/JasonOA888",
          "avatar": "https://avatars.githubusercontent.com/u/101583541"
        }
      ]
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
```

## 2. Monthly Stack Trends

**Query:** What stack trends should I follow this month?

**Command:**
```bash
node bin/main.js --json github -s monthly -l go ; node bin/main.js --json github -s monthly -l python ; node bin/main.js --json echojs -s latest -c 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "github",
  "since": "monthly",
  "language": "go",
  "items": [
    {
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1745,
      "added_stars": 2893,
      "builtBy": [
        {
          "username": "xpzouying",
          "href": "https://github.com/xpzouying",
          "avatar": "https://avatars.githubusercontent.com/u/3946563"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tanxxjun321",
          "href": "https://github.com/tanxxjun321",
          "avatar": "https://avatars.githubusercontent.com/u/7806992"
        },
        {
          "username": "Angiin",
          "href": "https://github.com/Angiin",
          "avatar": "https://avatars.githubusercontent.com/u/17389304"
        }
      ]
    },
    {
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 889,
      "added_stars": 3935,
      "builtBy": [
        {
          "username": "Wei-Shaw",
          "href": "https://github.com/Wei-Shaw",
          "avatar": "https://avatars.githubusercontent.com/u/26101719"
        },
        {
          "username": "IanShaw027",
          "href": "https://github.com/IanShaw027",
          "avatar": "https://avatars.githubusercontent.com/u/131567472"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "slovx2",
          "href": "https://github.com/slovx2",
          "avatar": "https://avatars.githubusercontent.com/u/2713715"
        },
        {
          "username": "touwaeriol",
          "href": "https://github.com/touwaeriol",
          "avatar": "https://avatars.githubusercontent.com/u/52620633"
        }
      ]
    },
    {
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 695,
      "added_stars": 1581,
      "builtBy": [
        {
          "username": "zachmu",
          "href": "https://github.com/zachmu",
          "avatar": "https://avatars.githubusercontent.com/u/474773"
        },
        {
          "username": "andy-wm-arthur",
          "href": "https://github.com/andy-wm-arthur",
          "avatar": "https://avatars.githubusercontent.com/u/8837413"
        },
        {
          "username": "fulghum",
          "href": "https://github.com/fulghum",
          "avatar": "https://avatars.githubusercontent.com/u/193449"
        },
        {
          "username": "coffeegoddd",
          "href": "https://github.com/coffeegoddd",
          "avatar": "https://avatars.githubusercontent.com/u/43383835"
        },
        {
          "username": "reltuk",
          "href": "https://github.com/reltuk",
          "avatar": "https://avatars.githubusercontent.com/u/1150979"
        }
      ]
    },
    {
      "author": "steipete",
      "repo": "gogcli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/gogcli",
      "desc": "Google Suite CLI: Gmail, GCal, GDrive, GContacts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 475,
      "added_stars": 3543,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "visionik",
          "href": "https://github.com/visionik",
          "avatar": "https://avatars.githubusercontent.com/u/52174"
        },
        {
          "username": "jeanregisser",
          "href": "https://github.com/jeanregisser",
          "avatar": "https://avatars.githubusercontent.com/u/57791"
        },
        {
          "username": "antons",
          "href": "https://github.com/antons",
          "avatar": "https://avatars.githubusercontent.com/u/129705"
        }
      ]
    },
    {
      "author": "github",
      "repo": "gh-aw",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/gh-aw",
      "desc": "GitHub Agentic Workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 295,
      "added_stars": 1610,
      "builtBy": [
        {
          "username": "pelikhan",
          "href": "https://github.com/pelikhan",
          "avatar": "https://avatars.githubusercontent.com/u/4175913"
        },
        {
          "username": "dsyme",
          "href": "https://github.com/dsyme",
          "avatar": "https://avatars.githubusercontent.com/u/7204669"
        },
        {
          "username": "mnkiefer",
          "href": "https://github.com/mnkiefer",
          "avatar": "https://avatars.githubusercontent.com/u/8320933"
        }
      ]
    },
    {
      "author": "asheshgoplani",
      "repo": "agent-deck",
      "avatar": "https://github.com/asheshgoplani.png",
      "repo_link": "https://github.com/asheshgoplani/agent-deck",
      "desc": "Terminal session manager for AI coding agents. One TUI for Claude, Gemini, OpenCode, Codex, and more.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 156,
      "added_stars": 731,
      "builtBy": [
        {
          "username": "asheshgoplani",
          "href": "https://github.com/asheshgoplani",
          "avatar": "https://avatars.githubusercontent.com/u/36273585"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "DieracDelta",
          "href": "https://github.com/DieracDelta",
          "avatar": "https://avatars.githubusercontent.com/u/13730968"
        },
        {
          "username": "AlanRezende",
          "href": "https://github.com/AlanRezende",
          "avatar": "https://avatars.githubusercontent.com/u/7322595"
        },
        {
          "username": "ruiheng",
          "href": "https://github.com/ruiheng",
          "avatar": "https://avatars.githubusercontent.com/u/1283599"
        }
      ]
    },
    {
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "CyberStrikeAI is an AI-native security testing platform built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 478,
      "added_stars": 2054,
      "builtBy": [
        {
          "username": "Ed1s0nZ",
          "href": "https://github.com/Ed1s0nZ",
          "avatar": "https://avatars.githubusercontent.com/u/83812544"
        },
        {
          "username": "chhs1129",
          "href": "https://github.com/chhs1129",
          "avatar": "https://avatars.githubusercontent.com/u/22484224"
        }
      ]
    },
    {
      "author": "charmbracelet",
      "repo": "glow",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/glow",
      "desc": "Render markdown on the CLI, with pizzazz! 💅🏻",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 608,
      "added_stars": 905,
      "builtBy": [
        {
          "username": "meowgorithm",
          "href": "https://github.com/meowgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/25087"
        },
        {
          "username": "muesli",
          "href": "https://github.com/muesli",
          "avatar": "https://avatars.githubusercontent.com/u/146378"
        },
        {
          "username": "caarlos0",
          "href": "https://github.com/caarlos0",
          "avatar": "https://avatars.githubusercontent.com/u/245435"
        },
        {
          "username": "penguwin",
          "href": "https://github.com/penguwin",
          "avatar": "https://avatars.githubusercontent.com/u/13225611"
        }
      ]
    },
    {
      "author": "m1k1o",
      "repo": "neko",
      "avatar": "https://github.com/m1k1o.png",
      "repo_link": "https://github.com/m1k1o/neko",
      "desc": "A self hosted virtual browser that runs in docker and uses WebRTC.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1412,
      "added_stars": 2907,
      "builtBy": [
        {
          "username": "m1k1o",
          "href": "https://github.com/m1k1o",
          "avatar": "https://avatars.githubusercontent.com/u/7534274"
        },
        {
          "username": "nurdism",
          "href": "https://github.com/nurdism",
          "avatar": "https://avatars.githubusercontent.com/u/420102"
        },
        {
          "username": "mbattista",
          "href": "https://github.com/mbattista",
          "avatar": "https://avatars.githubusercontent.com/u/26247314"
        },
        {
          "username": "prophetofxenu",
          "href": "https://github.com/prophetofxenu",
          "avatar": "https://avatars.githubusercontent.com/u/20529712"
        },
        {
          "username": "gbrian",
          "href": "https://github.com/gbrian",
          "avatar": "https://avatars.githubusercontent.com/u/767180"
        }
      ]
    },
    {
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8093,
      "added_stars": 853,
      "builtBy": [
        {
          "username": "mislav",
          "href": "https://github.com/mislav",
          "avatar": "https://avatars.githubusercontent.com/u/887"
        },
        {
          "username": "vilmibm",
          "href": "https://github.com/vilmibm",
          "avatar": "https://avatars.githubusercontent.com/u/98482"
        },
        {
          "username": "BagToad",
          "href": "https://github.com/BagToad",
          "avatar": "https://avatars.githubusercontent.com/u/47394200"
        },
        {
          "username": "williammartin",
          "href": "https://github.com/williammartin",
          "avatar": "https://avatars.githubusercontent.com/u/1611510"
        },
        {
          "username": "andyfeller",
          "href": "https://github.com/andyfeller",
          "avatar": "https://avatars.githubusercontent.com/u/2089743"
        }
      ]
    },
    {
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2608,
      "added_stars": 2180,
      "builtBy": [
        {
          "username": "jesseduffield",
          "href": "https://github.com/jesseduffield",
          "avatar": "https://avatars.githubusercontent.com/u/8456633"
        },
        {
          "username": "stefanhaller",
          "href": "https://github.com/stefanhaller",
          "avatar": "https://avatars.githubusercontent.com/u/1225667"
        },
        {
          "username": "mjarkk",
          "href": "https://github.com/mjarkk",
          "avatar": "https://avatars.githubusercontent.com/u/15320763"
        },
        {
          "username": "dawidd6",
          "href": "https://github.com/dawidd6",
          "avatar": "https://avatars.githubusercontent.com/u/9713907"
        },
        {
          "username": "Ryooooooga",
          "href": "https://github.com/Ryooooooga",
          "avatar": "https://avatars.githubusercontent.com/u/10097437"
        }
      ]
    },
    {
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 Take full control of your VPS with 1Panel. Deploy OpenClaw in one click.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3036,
      "added_stars": 1007,
      "builtBy": [
        {
          "username": "zhengkunwang223",
          "href": "https://github.com/zhengkunwang223",
          "avatar": "https://avatars.githubusercontent.com/u/31820853"
        },
        {
          "username": "ssongliu",
          "href": "https://github.com/ssongliu",
          "avatar": "https://avatars.githubusercontent.com/u/73214554"
        },
        {
          "username": "lan-yonghui",
          "href": "https://github.com/lan-yonghui",
          "avatar": "https://avatars.githubusercontent.com/u/81747598"
        },
        {
          "username": "HynoR",
          "href": "https://github.com/HynoR",
          "avatar": "https://avatars.githubusercontent.com/u/20227709"
        },
        {
          "username": "wanghe-fit2cloud",
          "href": "https://github.com/wanghe-fit2cloud",
          "avatar": "https://avatars.githubusercontent.com/u/46734380"
        }
      ]
    },
    {
      "author": "entireio",
      "repo": "cli",
      "avatar": "https://github.com/entireio.png",
      "repo_link": "https://github.com/entireio/cli",
      "desc": "Entire is a new developer platform that hooks into your git workflow to capture AI agent sessions on every push, unifying your code with its context and reasoning.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 256,
      "added_stars": 1193,
      "builtBy": [
        {
          "username": "khaong",
          "href": "https://github.com/khaong",
          "avatar": "https://avatars.githubusercontent.com/u/351934"
        },
        {
          "username": "Soph",
          "href": "https://github.com/Soph",
          "avatar": "https://avatars.githubusercontent.com/u/70741"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "gtrrz-victor",
          "href": "https://github.com/gtrrz-victor",
          "avatar": "https://avatars.githubusercontent.com/u/881031"
        },
        {
          "username": "squishykid",
          "href": "https://github.com/squishykid",
          "avatar": "https://avatars.githubusercontent.com/u/2177912"
        }
      ]
    },
    {
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 14987,
      "added_stars": 3051,
      "builtBy": [
        {
          "username": "mxyng",
          "href": "https://github.com/mxyng",
          "avatar": "https://avatars.githubusercontent.com/u/2372640"
        },
        {
          "username": "jmorganca",
          "href": "https://github.com/jmorganca",
          "avatar": "https://avatars.githubusercontent.com/u/251292"
        },
        {
          "username": "dhiltgen",
          "href": "https://github.com/dhiltgen",
          "avatar": "https://avatars.githubusercontent.com/u/4033016"
        },
        {
          "username": "BruceMacD",
          "href": "https://github.com/BruceMacD",
          "avatar": "https://avatars.githubusercontent.com/u/5853428"
        },
        {
          "username": "pdevine",
          "href": "https://github.com/pdevine",
          "avatar": "https://avatars.githubusercontent.com/u/75239"
        }
      ]
    },
    {
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1957,
      "added_stars": 526,
      "builtBy": [
        {
          "username": "zricethezav",
          "href": "https://github.com/zricethezav",
          "avatar": "https://avatars.githubusercontent.com/u/15034943"
        },
        {
          "username": "rgmz",
          "href": "https://github.com/rgmz",
          "avatar": "https://avatars.githubusercontent.com/u/32133502"
        },
        {
          "username": "w0rmr1d3r",
          "href": "https://github.com/w0rmr1d3r",
          "avatar": "https://avatars.githubusercontent.com/u/20722014"
        },
        {
          "username": "petegallagher",
          "href": "https://github.com/petegallagher",
          "avatar": "https://avatars.githubusercontent.com/u/688331"
        },
        {
          "username": "bufferoverflow",
          "href": "https://github.com/bufferoverflow",
          "avatar": "https://avatars.githubusercontent.com/u/378909"
        }
      ]
    },
    {
      "author": "grafana",
      "repo": "mcp-grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/mcp-grafana",
      "desc": "MCP server for Grafana",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 296,
      "added_stars": 239,
      "builtBy": [
        {
          "username": "sd2k",
          "href": "https://github.com/sd2k",
          "avatar": "https://avatars.githubusercontent.com/u/5464991"
        },
        {
          "username": "ioanarm",
          "href": "https://github.com/ioanarm",
          "avatar": "https://avatars.githubusercontent.com/u/29095029"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 303,
      "added_stars": 487,
      "builtBy": [
        {
          "username": "dgageot",
          "href": "https://github.com/dgageot",
          "avatar": "https://avatars.githubusercontent.com/u/153495"
        },
        {
          "username": "rumpl",
          "href": "https://github.com/rumpl",
          "avatar": "https://avatars.githubusercontent.com/u/99933"
        },
        {
          "username": "krissetto",
          "href": "https://github.com/krissetto",
          "avatar": "https://avatars.githubusercontent.com/u/47751006"
        },
        {
          "username": "trungutt",
          "href": "https://github.com/trungutt",
          "avatar": "https://avatars.githubusercontent.com/u/18528548"
        },
        {
          "username": "derekmisler",
          "href": "https://github.com/derekmisler",
          "avatar": "https://avatars.githubusercontent.com/u/2684662"
        }
      ]
    },
    {
      "author": "charmbracelet",
      "repo": "bubbletea",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/bubbletea",
      "desc": "A powerful little TUI framework 🏗",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1132,
      "added_stars": 1409,
      "builtBy": [
        {
          "username": "aymanbagabas",
          "href": "https://github.com/aymanbagabas",
          "avatar": "https://avatars.githubusercontent.com/u/3187948"
        },
        {
          "username": "meowgorithm",
          "href": "https://github.com/meowgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/25087"
        },
        {
          "username": "muesli",
          "href": "https://github.com/muesli",
          "avatar": "https://avatars.githubusercontent.com/u/146378"
        },
        {
          "username": "caarlos0",
          "href": "https://github.com/caarlos0",
          "avatar": "https://avatars.githubusercontent.com/u/245435"
        }
      ]
    },
    {
      "author": "dapr",
      "repo": "dapr",
      "avatar": "https://github.com/dapr.png",
      "repo_link": "https://github.com/dapr/dapr",
      "desc": "Dapr is a portable runtime for building distributed applications across cloud and edge, combining event-driven architecture with workflow orchestration.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2056,
      "added_stars": 142,
      "builtBy": [
        {
          "username": "yaron2",
          "href": "https://github.com/yaron2",
          "avatar": "https://avatars.githubusercontent.com/u/16295283"
        },
        {
          "username": "JoshVanL",
          "href": "https://github.com/JoshVanL",
          "avatar": "https://avatars.githubusercontent.com/u/15893072"
        },
        {
          "username": "artursouza",
          "href": "https://github.com/artursouza",
          "avatar": "https://avatars.githubusercontent.com/u/130954"
        },
        {
          "username": "dapr-bot",
          "href": "https://github.com/dapr-bot",
          "avatar": "https://avatars.githubusercontent.com/u/56698301"
        },
        {
          "username": "ItalyPaleAle",
          "href": "https://github.com/ItalyPaleAle",
          "avatar": "https://avatars.githubusercontent.com/u/43508"
        }
      ]
    }
  ]
}
- Fetching feeds...
{
  "source": "github",
  "since": "monthly",
  "language": "python",
  "items": [
    {
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skills and subagents, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3738,
      "added_stars": 11028,
      "builtBy": [
        {
          "username": "MagicCube",
          "href": "https://github.com/MagicCube",
          "avatar": "https://avatars.githubusercontent.com/u/1003147"
        },
        {
          "username": "WillemJiang",
          "href": "https://github.com/WillemJiang",
          "avatar": "https://avatars.githubusercontent.com/u/219644"
        },
        {
          "username": "hetaoBackend",
          "href": "https://github.com/hetaoBackend",
          "avatar": "https://avatars.githubusercontent.com/u/45447813"
        },
        {
          "username": "henry-byted",
          "href": "https://github.com/henry-byted",
          "avatar": "https://avatars.githubusercontent.com/u/209858577"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3416,
      "added_stars": 21970,
      "builtBy": [
        {
          "username": "666ghj",
          "href": "https://github.com/666ghj",
          "avatar": "https://avatars.githubusercontent.com/u/110395318"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 899,
      "added_stars": 10104,
      "builtBy": [
        {
          "username": "qin-ctx",
          "href": "https://github.com/qin-ctx",
          "avatar": "https://avatars.githubusercontent.com/u/234610432"
        },
        {
          "username": "zhoujh01",
          "href": "https://github.com/zhoujh01",
          "avatar": "https://avatars.githubusercontent.com/u/242402223"
        },
        {
          "username": "MaojiaSheng",
          "href": "https://github.com/MaojiaSheng",
          "avatar": "https://avatars.githubusercontent.com/u/211460083"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ZaynJarvis",
          "href": "https://github.com/ZaynJarvis",
          "avatar": "https://avatars.githubusercontent.com/u/31875147"
        }
      ]
    },
    {
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 547,
      "added_stars": 7871,
      "builtBy": [
        {
          "username": "burtenshaw",
          "href": "https://github.com/burtenshaw",
          "avatar": "https://avatars.githubusercontent.com/u/19620375"
        },
        {
          "username": "evalstate",
          "href": "https://github.com/evalstate",
          "avatar": "https://avatars.githubusercontent.com/u/1936278"
        },
        {
          "username": "hanouticelina",
          "href": "https://github.com/hanouticelina",
          "avatar": "https://avatars.githubusercontent.com/u/36770234"
        },
        {
          "username": "abidlabs",
          "href": "https://github.com/abidlabs",
          "avatar": "https://avatars.githubusercontent.com/u/1778297"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1511,
      "added_stars": 9197,
      "builtBy": [
        {
          "username": "p-e-w",
          "href": "https://github.com/p-e-w",
          "avatar": "https://avatars.githubusercontent.com/u/2702526"
        },
        {
          "username": "spikymoth",
          "href": "https://github.com/spikymoth",
          "avatar": "https://avatars.githubusercontent.com/u/133602907"
        },
        {
          "username": "anrp",
          "href": "https://github.com/anrp",
          "avatar": "https://avatars.githubusercontent.com/u/1325515"
        },
        {
          "username": "red40maxxer",
          "href": "https://github.com/red40maxxer",
          "avatar": "https://avatars.githubusercontent.com/u/113548315"
        },
        {
          "username": "kldzj",
          "href": "https://github.com/kldzj",
          "avatar": "https://avatars.githubusercontent.com/u/7687617"
        }
      ]
    },
    {
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "OpenSandbox is a general-purpose sandbox platform for AI applications, offering multi-language SDKs, unified sandbox APIs, and Docker/Kubernetes runtimes for scenarios like Coding Agents, GUI Agents, Agent Evaluation, AI Code Execution, and RL Training.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 588,
      "added_stars": 6794,
      "builtBy": [
        {
          "username": "Pangjiping",
          "href": "https://github.com/Pangjiping",
          "avatar": "https://avatars.githubusercontent.com/u/62273713"
        },
        {
          "username": "ninan-nn",
          "href": "https://github.com/ninan-nn",
          "avatar": "https://avatars.githubusercontent.com/u/249928781"
        },
        {
          "username": "hittyt",
          "href": "https://github.com/hittyt",
          "avatar": "https://avatars.githubusercontent.com/u/1870207"
        },
        {
          "username": "Spground",
          "href": "https://github.com/Spground",
          "avatar": "https://avatars.githubusercontent.com/u/10492823"
        },
        {
          "username": "jwx0925",
          "href": "https://github.com/jwx0925",
          "avatar": "https://avatars.githubusercontent.com/u/1539927"
        }
      ]
    },
    {
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 433,
      "added_stars": 4192,
      "builtBy": [
        {
          "username": "Jeffallan",
          "href": "https://github.com/Jeffallan",
          "avatar": "https://avatars.githubusercontent.com/u/23423962"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "liyin2015",
          "href": "https://github.com/liyin2015",
          "avatar": "https://avatars.githubusercontent.com/u/14322677"
        },
        {
          "username": "salmanmkc",
          "href": "https://github.com/salmanmkc",
          "avatar": "https://avatars.githubusercontent.com/u/32169182"
        },
        {
          "username": "thomassamoul",
          "href": "https://github.com/thomassamoul",
          "avatar": "https://avatars.githubusercontent.com/u/50757446"
        }
      ]
    },
    {
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1700,
      "added_stars": 8989,
      "builtBy": [
        {
          "username": "Soulter",
          "href": "https://github.com/Soulter",
          "avatar": "https://avatars.githubusercontent.com/u/37870767"
        },
        {
          "username": "Raven95676",
          "href": "https://github.com/Raven95676",
          "avatar": "https://avatars.githubusercontent.com/u/176760093"
        },
        {
          "username": "RC-CHN",
          "href": "https://github.com/RC-CHN",
          "avatar": "https://avatars.githubusercontent.com/u/67079377"
        },
        {
          "username": "anka-afk",
          "href": "https://github.com/anka-afk",
          "avatar": "https://avatars.githubusercontent.com/u/110004162"
        },
        {
          "username": "advent259141",
          "href": "https://github.com/advent259141",
          "avatar": "https://avatars.githubusercontent.com/u/197440256"
        }
      ]
    },
    {
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 735,
      "added_stars": 3864,
      "builtBy": [
        {
          "username": "teng-lin",
          "href": "https://github.com/teng-lin",
          "avatar": "https://avatars.githubusercontent.com/u/737447"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "furkankoykiran",
          "href": "https://github.com/furkankoykiran",
          "avatar": "https://avatars.githubusercontent.com/u/60299878"
        },
        {
          "username": "welshofer",
          "href": "https://github.com/welshofer",
          "avatar": "https://avatars.githubusercontent.com/u/33588582"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2952,
      "added_stars": 6368,
      "builtBy": [
        {
          "username": "potassiummmm",
          "href": "https://github.com/potassiummmm",
          "avatar": "https://avatars.githubusercontent.com/u/54800242"
        },
        {
          "username": "tsong-ms",
          "href": "https://github.com/tsong-ms",
          "avatar": "https://avatars.githubusercontent.com/u/84831885"
        },
        {
          "username": "younesbelkada",
          "href": "https://github.com/younesbelkada",
          "avatar": "https://avatars.githubusercontent.com/u/49240599"
        },
        {
          "username": "sd983527",
          "href": "https://github.com/sd983527",
          "avatar": "https://avatars.githubusercontent.com/u/59006636"
        },
        {
          "username": "XsquirrelC",
          "href": "https://github.com/XsquirrelC",
          "avatar": "https://avatars.githubusercontent.com/u/178687198"
        }
      ]
    },
    {
      "author": "databricks-solutions",
      "repo": "ai-dev-kit",
      "avatar": "https://github.com/databricks-solutions.png",
      "repo_link": "https://github.com/databricks-solutions/ai-dev-kit",
      "desc": "Databricks Toolkit for Coding Agents provided by Field Engineering",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 174,
      "added_stars": 628,
      "builtBy": [
        {
          "username": "calreynolds",
          "href": "https://github.com/calreynolds",
          "avatar": "https://avatars.githubusercontent.com/u/49540501"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "dustinvannoy-db",
          "href": "https://github.com/dustinvannoy-db",
          "avatar": "https://avatars.githubusercontent.com/u/126025751"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "malcolndandaro",
          "href": "https://github.com/malcolndandaro",
          "avatar": "https://avatars.githubusercontent.com/u/40570280"
        }
      ]
    },
    {
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8557,
      "added_stars": 3375,
      "builtBy": [
        {
          "username": "virattt",
          "href": "https://github.com/virattt",
          "avatar": "https://avatars.githubusercontent.com/u/901795"
        },
        {
          "username": "arsaboo",
          "href": "https://github.com/arsaboo",
          "avatar": "https://avatars.githubusercontent.com/u/18319734"
        },
        {
          "username": "KittatamSaisaard",
          "href": "https://github.com/KittatamSaisaard",
          "avatar": "https://avatars.githubusercontent.com/u/50354903"
        },
        {
          "username": "jsemldonado",
          "href": "https://github.com/jsemldonado",
          "avatar": "https://avatars.githubusercontent.com/u/172995042"
        },
        {
          "username": "ak4631",
          "href": "https://github.com/ak4631",
          "avatar": "https://avatars.githubusercontent.com/u/132299371"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "claude-code-security-review",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-security-review",
      "desc": "An AI-powered security review GitHub Action using Claude to analyze code changes for security vulnerabilities.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 315,
      "added_stars": 805,
      "builtBy": [
        {
          "username": "ddworken",
          "href": "https://github.com/ddworken",
          "avatar": "https://avatars.githubusercontent.com/u/5304541"
        },
        {
          "username": "GrahamCampbell",
          "href": "https://github.com/GrahamCampbell",
          "avatar": "https://avatars.githubusercontent.com/u/2829600"
        },
        {
          "username": "Eduard-Voiculescu",
          "href": "https://github.com/Eduard-Voiculescu",
          "avatar": "https://avatars.githubusercontent.com/u/26581515"
        }
      ]
    },
    {
      "author": "fishaudio",
      "repo": "fish-speech",
      "avatar": "https://github.com/fishaudio.png",
      "repo_link": "https://github.com/fishaudio/fish-speech",
      "desc": "SOTA Open Source TTS",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2310,
      "added_stars": 2662,
      "builtBy": [
        {
          "username": "leng-yue",
          "href": "https://github.com/leng-yue",
          "avatar": "https://avatars.githubusercontent.com/u/25119060"
        },
        {
          "username": "AnyaCoder",
          "href": "https://github.com/AnyaCoder",
          "avatar": "https://avatars.githubusercontent.com/u/122108331"
        },
        {
          "username": "PoTaTo-Mika",
          "href": "https://github.com/PoTaTo-Mika",
          "avatar": "https://avatars.githubusercontent.com/u/148920650"
        }
      ]
    },
    {
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 838,
      "added_stars": 2337,
      "builtBy": [
        {
          "username": "rajatsen91",
          "href": "https://github.com/rajatsen91",
          "avatar": "https://avatars.githubusercontent.com/u/8039264"
        },
        {
          "username": "siriuz42",
          "href": "https://github.com/siriuz42",
          "avatar": "https://avatars.githubusercontent.com/u/5073569"
        },
        {
          "username": "misha-chertushkin",
          "href": "https://github.com/misha-chertushkin",
          "avatar": "https://avatars.githubusercontent.com/u/151166456"
        },
        {
          "username": "JustinGuese",
          "href": "https://github.com/JustinGuese",
          "avatar": "https://avatars.githubusercontent.com/u/9588843"
        },
        {
          "username": "kashif",
          "href": "https://github.com/kashif",
          "avatar": "https://avatars.githubusercontent.com/u/8100"
        }
      ]
    },
    {
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6431,
      "added_stars": 3190,
      "builtBy": [
        {
          "username": "ishaan-jaff",
          "href": "https://github.com/ishaan-jaff",
          "avatar": "https://avatars.githubusercontent.com/u/29436595"
        },
        {
          "username": "krrishdholakia",
          "href": "https://github.com/krrishdholakia",
          "avatar": "https://avatars.githubusercontent.com/u/17561003"
        },
        {
          "username": "yuneng-jiang",
          "href": "https://github.com/yuneng-jiang",
          "avatar": "https://avatars.githubusercontent.com/u/171294688"
        },
        {
          "username": "Sameerlite",
          "href": "https://github.com/Sameerlite",
          "avatar": "https://avatars.githubusercontent.com/u/231518212"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "chenyme",
      "repo": "grok2api",
      "avatar": "https://github.com/chenyme.png",
      "repo_link": "https://github.com/chenyme/grok2api",
      "desc": "基于 FastAPI 构建的 Grok2API，全面适配 OpenAI 兼容的调用格式，支持流式/非流式对话、图像生成、图像编辑、视频生成、工具调用、语音聊天、一键NSFW、号池并发与自动负载均衡一体化。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1007,
      "added_stars": 1496,
      "builtBy": [
        {
          "username": "chenyme",
          "href": "https://github.com/chenyme",
          "avatar": "https://avatars.githubusercontent.com/u/118253778"
        },
        {
          "username": "lijirou12",
          "href": "https://github.com/lijirou12",
          "avatar": "https://avatars.githubusercontent.com/u/121499347"
        },
        {
          "username": "piexian",
          "href": "https://github.com/piexian",
          "avatar": "https://avatars.githubusercontent.com/u/64474352"
        },
        {
          "username": "qoomezhu",
          "href": "https://github.com/qoomezhu",
          "avatar": "https://avatars.githubusercontent.com/u/194384232"
        },
        {
          "username": "timerring",
          "href": "https://github.com/timerring",
          "avatar": "https://avatars.githubusercontent.com/u/89397553"
        }
      ]
    },
    {
      "author": "ZhuLinsen",
      "repo": "daily_stock_analysis",
      "avatar": "https://github.com/ZhuLinsen.png",
      "repo_link": "https://github.com/ZhuLinsen/daily_stock_analysis",
      "desc": "LLM驱动的 A/H/美股智能分析器，多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送，零成本，纯白嫖，定时运行",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 21704,
      "added_stars": 9019,
      "builtBy": [
        {
          "username": "ZhuLinsen",
          "href": "https://github.com/ZhuLinsen",
          "avatar": "https://avatars.githubusercontent.com/u/42829555"
        },
        {
          "username": "freesme",
          "href": "https://github.com/freesme",
          "avatar": "https://avatars.githubusercontent.com/u/56824280"
        },
        {
          "username": "massif-01",
          "href": "https://github.com/massif-01",
          "avatar": "https://avatars.githubusercontent.com/u/176381099"
        },
        {
          "username": "adminlove520",
          "href": "https://github.com/adminlove520",
          "avatar": "https://avatars.githubusercontent.com/u/32920883"
        },
        {
          "username": "birdxs",
          "href": "https://github.com/birdxs",
          "avatar": "https://avatars.githubusercontent.com/u/36181736"
        }
      ]
    },
    {
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1884,
      "added_stars": 4632,
      "builtBy": [
        {
          "username": "hesreallyhim",
          "href": "https://github.com/hesreallyhim",
          "avatar": "https://avatars.githubusercontent.com/u/172150522"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tninja",
          "href": "https://github.com/tninja",
          "avatar": "https://avatars.githubusercontent.com/u/714625"
        }
      ]
    },
    {
      "author": "mihail911",
      "repo": "modern-software-dev-assignments",
      "avatar": "https://github.com/mihail911.png",
      "repo_link": "https://github.com/mihail911/modern-software-dev-assignments",
      "desc": "Assignments for CS146S: The Modern Software Dev (Stanford University Fall 2025)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 721,
      "added_stars": 1314,
      "builtBy": [
        {
          "username": "mihail911",
          "href": "https://github.com/mihail911",
          "avatar": "https://avatars.githubusercontent.com/u/2789441"
        },
        {
          "username": "febielin",
          "href": "https://github.com/febielin",
          "avatar": "https://avatars.githubusercontent.com/u/133082422"
        }
      ]
    },
    {
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 44373,
      "added_stars": 12939,
      "builtBy": [
        {
          "username": "matheusfelipeog",
          "href": "https://github.com/matheusfelipeog",
          "avatar": "https://avatars.githubusercontent.com/u/50463866"
        },
        {
          "username": "davemachado",
          "href": "https://github.com/davemachado",
          "avatar": "https://avatars.githubusercontent.com/u/15134885"
        },
        {
          "username": "pawelborkar",
          "href": "https://github.com/pawelborkar",
          "avatar": "https://avatars.githubusercontent.com/u/36134699"
        },
        {
          "username": "jbrooksuk",
          "href": "https://github.com/jbrooksuk",
          "avatar": "https://avatars.githubusercontent.com/u/246103"
        },
        {
          "username": "marekdano",
          "href": "https://github.com/marekdano",
          "avatar": "https://avatars.githubusercontent.com/u/1914165"
        }
      ]
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "I Built an npm Package and Tracked Every Download for Two Weeks. Here's the Data.",
      "url": "https://dev.to/ckmtools/i-built-an-npm-package-and-tracked-every-download-for-two-weeks-heres-the-data-3jck",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-16T04:19:07.000Z"
    },
    {
      "title": "Sharing my 10MB database management tool that could change your workflow",
      "url": "https://github.com/debba/tabularis",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-15T09:37:41.000Z"
    },
    {
      "title": "alonronin/orbit: A better search engine for your github starred collection.",
      "url": "https://github.com/alonronin/orbit",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-13T23:50:28.000Z"
    },
    {
      "title": "HTML and web page minification benchmarks",
      "url": "https://github.com/j9t/minifier-benchmarks",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-12T15:42:33.000Z"
    },
    {
      "title": "JavaScript Performance Benchmarking Tool",
      "url": "https://benchmarkstudio.net",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-10T10:59:11.000Z"
    },
    {
      "title": "My 8-Year-Old Open-Source Project (Neutralino.js) was a Victim of a Major Cyber Attack",
      "url": "https://medium.com/gitconnected/my-8-year-old-open-source-project-was-a-victim-of-a-major-cyber-attack-24af7eb3a82b?sk=e58c8c8d6028a7bc2bba14266f2c5d08",
      "upvotes": "2",
      "comments": "1",
      "created": "2026-03-10T09:41:08.000Z"
    },
    {
      "title": "textlens - All-in-one text analysis for Node.js (readability, sentiment, keywords, zero dependencies)",
      "url": "https://github.com/ckmtools/textlens",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-10T00:52:22.000Z"
    },
    {
      "title": "theSVG - 3800+ brand SVG icons with npm, React, CLI and CDN",
      "url": "https://github.com/GLINCKER/thesvg",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-09T04:59:57.000Z"
    },
    {
      "title": "Haptic feedback for the mobile web",
      "url": "https://haptics.lochie.me",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-07T13:57:52.000Z"
    },
    {
      "title": "React Compiler and Beyond: Capability Boundaries of Compiler-Driven UI Frameworks",
      "url": "https://dev.to/unadlib/react-compiler-and-beyond-capability-boundaries-of-compiler-driven-ui-frameworks-4928",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-04T18:09:32.000Z"
    }
  ]
}
```

## 3. What Builders Are Shipping/Discussing

**Query:** What are builders shipping and discussing right now?

**Command:**
```bash
node bin/main.js --json devto -s top -c 10 ; node bin/main.js --json lobsters -s newest -c 10 ; node bin/main.js --json news -t 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "devto",
  "tag": null,
  "sort": "top",
  "items": [
    {
      "title": "Why I, as Someone Who Likes MySQL, Now Want to Recommend PostgreSQL",
      "description": "Why I now recommend PostgreSQL for new applications, even though I still like MySQL and have used it for a long time.",
      "url": "https://dev.to/catatsuy/why-i-as-someone-who-likes-mysql-now-want-to-recommend-postgresql-2a8i",
      "tags": "mysql, postgres, database, sql",
      "reactions": 6,
      "comments": 2,
      "reading_time": 13,
      "author": "catatsuy"
    },
    {
      "title": "Thiago Colen's Digital Universe: Building a Content-Synced Portfolio with Gatsby & DEV.to",
      "description": "Learn how I built a high-performance personal site that automatically syncs articles from DEV.to using Gatsby, providing a 'write once, publish everywhere' workflow.",
      "url": "https://dev.to/thiagocolen/thiago-colens-digital-universe-building-a-content-synced-portfolio-with-gatsby-devto-31cj",
      "tags": "gatsby, devto, jamstack, react",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "thiagocolen"
    },
    {
      "title": "Gemini CLI and Jules: my March 2026 stack",
      "description": "Development workflow is a very personal thing. As the various AI and LLM coding tools evolve, I've...",
      "url": "https://dev.to/rowan_m/gemini-cli-and-jules-my-march-2026-stack-4146",
      "tags": "ai, javascript, tooling, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "rowan_m"
    },
    {
      "title": "Fortran meets AI",
      "description": "A computer science exam from 1978 and 2026 AI models ",
      "url": "https://dev.to/viksaaskool/fortran-meets-ai-3oac",
      "tags": "fortran, ai",
      "reactions": 5,
      "comments": 0,
      "reading_time": 3,
      "author": "viksaaskool"
    },
    {
      "title": "What was your win this week?!",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-ilf",
      "tags": "weeklyretro, discuss",
      "reactions": 56,
      "comments": 128,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Why Are We Still Doing GPU Work in JavaScript? (Live WebGPU Benchmark & Demo🚀)",
      "description": "JavaScript has been the main language of the web for years. Its popularity probably surprised even...",
      "url": "https://dev.to/sylwia-lask/why-are-we-still-doing-gpu-work-in-javascript-live-webgpu-benchmark-demo-4j6i",
      "tags": "webdev, javascript, typescript, webgpu",
      "reactions": 82,
      "comments": 78,
      "reading_time": 6,
      "author": "sylwia-lask"
    },
    {
      "title": "90% of Code Will Be AI-Generated — So What the Hell Do We Actually Do?",
      "description": "I read the headline at 11pm on a random Wednesday.  \"Anthropic CEO predicts 90% of all code will be...",
      "url": "https://dev.to/harsh2644/90-of-code-will-be-ai-generated-so-what-the-hell-do-we-actually-do-2kg3",
      "tags": "ai, career, webdev, javascript",
      "reactions": 48,
      "comments": 42,
      "reading_time": 7,
      "author": "harsh2644"
    },
    {
      "title": "mcp-pvp — Privacy Vault Protocol for MCP",
      "description": "Inspiration   We were building an AI agent that handled customer support emails. The agent...",
      "url": "https://dev.to/mitiku1/mcp-pvp-privacy-vault-protocol-for-mcp-2b80",
      "tags": "ai, security, privacy, agents",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "mitiku1"
    },
    {
      "title": "I Analyzed Dozens of AI Agent Rules Files. Most Are Making Your Agent Worse.",
      "description": "An ETH Zurich study from February 2026 tested something most of us assumed was helping: giving AI...",
      "url": "https://dev.to/alexefimenko/i-analyzed-a-lot-of-ai-agent-rules-files-most-are-making-your-agent-worse-2fl",
      "tags": "ai, agents, productivity, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "alexefimenko"
    },
    {
      "title": "Your AI code reviewer has no one to disagree with",
      "description": "Why single-pass AI code review is fundamentally broken and what happens when you make AI reviewers argue with each other first.",
      "url": "https://dev.to/spencermarx/your-ai-code-reviewer-has-no-one-to-disagree-with-f1j",
      "tags": "opensource, ai, codereview, claudecode",
      "reactions": 36,
      "comments": 1,
      "reading_time": 5,
      "author": "spencermarx"
    }
  ]
}
- Fetching feeds...
{
  "source": "lobsters",
  "sort": "newest",
  "tag": null,
  "items": [
    {
      "title": "Ghosts and Demons: Undefined Behavior in C2Y",
      "url": "https://www.open-std.org/jtc1/sc22/wg14/www/docs/n3861.pdf",
      "score": 1,
      "comments": 0,
      "tags": [
        "c",
        "pdf"
      ],
      "id": "9aztse"
    },
    {
      "title": "Good Haskell Libraries",
      "url": "http://jackkelly.name/wiki/haskell/libraries.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "haskell"
      ],
      "id": "zqorsc"
    },
    {
      "title": "Try not to get scammed while looking for work",
      "url": "https://trysound.io/try-not-to-get-scammed-while-looking-for-work/",
      "score": 5,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "yhc5ug"
    },
    {
      "title": "Introducing pgtui, a Postgres TUI client",
      "url": "https://kdwarn.net/programming/blog/227",
      "score": 4,
      "comments": 0,
      "tags": [
        "databases",
        "rust"
      ],
      "id": "mbljtb"
    },
    {
      "title": "LLM Architecture Gallery",
      "url": "https://sebastianraschka.com/llm-architecture-gallery/",
      "score": 4,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "q7izua"
    },
    {
      "title": "Anthropic and The Authoritarian Ethic",
      "url": "https://blog.giovanh.com/blog/2026/03/03/anthropic-and-the-authoritarian-ethic/",
      "score": 4,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "oevwjg"
    },
    {
      "title": "A Year of WordHopper - Development Retrospective (2024)",
      "url": "https://kokoscript.com/2024/015.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "games",
        "retrocomputing"
      ],
      "id": "uweff0"
    },
    {
      "title": "What is Sequence Data ?",
      "url": "https://thesis.lucblassel.com/what-is-sequence-data.html",
      "score": 1,
      "comments": 2,
      "tags": [
        "science"
      ],
      "id": "rwh6et"
    },
    {
      "title": "rack-mount hydroponics",
      "url": "https://sa.lj.am/rack-mount-hydroponics/",
      "score": 42,
      "comments": 0,
      "tags": [
        "hardware"
      ],
      "id": "vio5wq"
    },
    {
      "title": "I let Claude Code configure my Arch install",
      "url": "https://www.willmorrison.com/blog/03-15-2026-llm-dotfiles",
      "score": 10,
      "comments": 11,
      "tags": [
        "linux",
        "vibecoding"
      ],
      "id": "8pfxqy"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "opengrass",
      "descendants": 180,
      "id": 47392084,
      "kids": [
        47393177,
        47395037,
        47396126,
        47392794,
        47393187,
        47394078,
        47394573,
        47395828,
        47393021,
        47396092,
        47395661,
        47393477,
        47394181,
        47394042,
        47393497,
        47393644,
        47395972,
        47394009,
        47395088,
        47395097,
        47395065,
        47393590,
        47394434,
        47395530,
        47393493,
        47395244,
        47394447,
        47394257,
        47393801,
        47393277,
        47395024,
        47393746,
        47393652,
        47392914,
        47394446,
        47392829,
        47392789,
        47393070,
        47392928,
        47392852,
        47393301,
        47392988,
        47393502,
        47393064,
        47395663
      ],
      "score": 617,
      "text": "<a href=\"https:&#x2F;&#x2F;www.parl.ca&#x2F;DocumentViewer&#x2F;en&#x2F;45-1&#x2F;bill&#x2F;C-22&#x2F;first-reading\" rel=\"nofollow\">https:&#x2F;&#x2F;www.parl.ca&#x2F;DocumentViewer&#x2F;en&#x2F;45-1&#x2F;bill&#x2F;C-22&#x2F;first-r...</a>",
      "time": 1773609736,
      "title": "Canada's bill C-22 mandates mass metadata surveillance",
      "type": "story",
      "url": "https://www.michaelgeist.ca/2026/03/a-tale-of-two-bills-lawful-access-returns-with-changes-to-warrantless-access-but-dangerous-backdoor-surveillance-risks-remains/"
    },
    {
      "by": "kermatt",
      "descendants": 221,
      "id": 47390945,
      "kids": [
        47391711,
        47391592,
        47391949,
        47395852,
        47393825,
        47395848,
        47393092,
        47392631,
        47396023,
        47392035,
        47392574,
        47391705,
        47395053,
        47391497,
        47392485,
        47391568,
        47392070,
        47392888,
        47392588,
        47393171,
        47395171,
        47394258,
        47394317,
        47395764,
        47392018,
        47391585,
        47395874,
        47392745,
        47395784,
        47395329,
        47394896,
        47392817,
        47391912,
        47392320,
        47391646,
        47393680,
        47393283,
        47394721,
        47391600,
        47395098,
        47391732,
        47393252,
        47391765,
        47392129,
        47392749,
        47392260,
        47393182,
        47396058,
        47395369,
        47393598,
        47391464
      ],
      "score": 472,
      "time": 1773602718,
      "title": "The 49MB web page",
      "type": "story",
      "url": "https://thatshubham.com/blog/news-audit"
    },
    {
      "by": "indigodaddy",
      "descendants": 57,
      "id": 47394022,
      "kids": [
        47396133,
        47395680,
        47396098,
        47395774,
        47394537,
        47395501,
        47395596,
        47395500,
        47395685,
        47396079,
        47395824,
        47395765,
        47394702,
        47395805
      ],
      "score": 119,
      "time": 1773624249,
      "title": "How I write software with LLMs",
      "type": "story",
      "url": "https://www.stavros.io/posts/how-i-write-software-with-llms/"
    },
    {
      "by": "xnx",
      "descendants": 187,
      "id": 47390817,
      "kids": [
        47392034,
        47392102,
        47391079,
        47392002,
        47395052,
        47395304,
        47391489,
        47391356,
        47392373,
        47395045,
        47395215,
        47393503,
        47394813,
        47393719,
        47394424,
        47394874,
        47391775,
        47392089,
        47393307,
        47391926,
        47391198,
        47391685,
        47391886,
        47392675,
        47391206,
        47392536,
        47391877,
        47392853,
        47391760,
        47391812,
        47394648,
        47391717,
        47391810,
        47393044,
        47392869,
        47391463,
        47391149,
        47396027,
        47394601,
        47392433,
        47395790,
        47392448,
        47394142,
        47393651,
        47394694,
        47392123,
        47391281,
        47391278,
        47391165,
        47392756
      ],
      "score": 446,
      "time": 1773601973,
      "title": "Chrome DevTools MCP (2025)",
      "type": "story",
      "url": "https://developer.chrome.com/blog/chrome-devtools-mcp-debug-your-browser-session"
    },
    {
      "by": "o4c",
      "descendants": 11,
      "id": 47350016,
      "kids": [
        47395494,
        47395599,
        47395245,
        47395644
      ],
      "score": 57,
      "time": 1773320675,
      "title": "Electric motor scaling laws and inertia in robot actuators",
      "type": "story",
      "url": "https://robot-daycare.com/posts/actuation_series_1/"
    },
    {
      "by": "jbarrow",
      "descendants": 3,
      "id": 47343902,
      "kids": [
        47395207,
        47395164,
        47395840
      ],
      "score": 42,
      "time": 1773271462,
      "title": "What every computer scientist should know about floating-point arithmetic (1991) [pdf]",
      "type": "story",
      "url": "https://www.itu.dk/~sestoft/bachelor/IEEE754_article.pdf"
    },
    {
      "by": "tzury",
      "descendants": 28,
      "id": 47388676,
      "kids": [
        47396130,
        47393509,
        47392209,
        47395601,
        47391507,
        47392301,
        47392962,
        47393340,
        47393164,
        47393743,
        47393446,
        47393353,
        47392942,
        47394047,
        47391662,
        47393535,
        47394454,
        47395086,
        47393860,
        47391607,
        47391331,
        47391007,
        47390699
      ],
      "score": 365,
      "time": 1773590469,
      "title": "LLM Architecture Gallery",
      "type": "story",
      "url": "https://sebastianraschka.com/llm-architecture-gallery/"
    },
    {
      "by": "tjohnell",
      "descendants": 135,
      "id": 47391803,
      "kids": [
        47393253,
        47396090,
        47395741,
        47395275,
        47393439,
        47393844,
        47393636,
        47395253,
        47395342,
        47393562,
        47395565,
        47395692,
        47394400,
        47393286,
        47393940,
        47395173,
        47394988,
        47395721,
        47393228,
        47393400,
        47393528,
        47394895,
        47394978,
        47395553,
        47394547,
        47395955,
        47393335,
        47395335,
        47393970,
        47395666,
        47393461,
        47393625,
        47393879,
        47394481,
        47393904,
        47393445,
        47394242,
        47393881,
        47395056
      ],
      "score": 182,
      "time": 1773608181,
      "title": "LLMs can be exhausting",
      "type": "story",
      "url": "https://tomjohnell.com/llms-can-be-absolutely-exhausting/"
    },
    {
      "by": "ingve",
      "descendants": 0,
      "id": 47349499,
      "score": 24,
      "time": 1773317480,
      "title": "How far can you go with IX Route Servers only?",
      "type": "story",
      "url": "https://blog.benjojo.co.uk/post/how-far-can-you-get-with-ix-route-servers"
    },
    {
      "by": "namnnumbr",
      "descendants": 116,
      "id": 47389570,
      "kids": [
        47395063,
        47392805,
        47395177,
        47395633,
        47395796,
        47393017,
        47392709,
        47395658,
        47394135,
        47392800,
        47389571,
        47394191,
        47392668,
        47392935,
        47393018,
        47395920,
        47394471,
        47394020,
        47395068,
        47394152,
        47394775,
        47392959,
        47393480,
        47393973,
        47393957,
        47394174,
        47393230,
        47394342,
        47393698,
        47394165,
        47393748,
        47393968,
        47394110,
        47393465,
        47393175
      ],
      "score": 261,
      "time": 1773595500,
      "title": "Stop Sloppypasta",
      "type": "story",
      "url": "https://stopsloppypasta.ai/"
    }
  ]
}
```

## 4. Practical Coding Topics to Study

**Query:** What practical coding topics should I study next?

**Command:**
```bash
node bin/main.js --json reddit -t programming -s top ; node bin/main.js --json devto -t career -s top -c 10
```

**Output:**
```text
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "devto",
  "tag": "career",
  "sort": "top",
  "items": [
    {
      "title": "Git Archaeology #14 — Civilization: Why Only Some Codebases Become Civilizations",
      "description": "Most code universes die. Only a few become civilizations — self-sustaining structures that outlast their creators.",
      "url": "https://dev.to/machuz/git-archaeology-14-civilization-why-only-some-codebases-become-civilizations-2nl3",
      "tags": "opensource, productivity, git, career",
      "reactions": 2,
      "comments": 0,
      "reading_time": 11,
      "author": "machuz"
    },
    {
      "title": "Git Archaeology #16 (Final) — The Engineers Who Shape Gravity",
      "description": "Git remembers the past. AI imagines the future. Between them, engineers shape gravity.",
      "url": "https://dev.to/machuz/git-archaeology-16-the-engineers-who-shape-gravity-3fmi",
      "tags": "opensource, productivity, git, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "machuz"
    },
    {
      "title": "Git Archaeology #15 — AI Creates Stars, Not Gravity",
      "description": "AI creates stars. But it doesn't create gravity. What happens when code universes experience their first starburst?",
      "url": "https://dev.to/machuz/git-archaeology-15-ai-creates-stars-not-gravity-4i05",
      "tags": "ai, opensource, git, career",
      "reactions": 2,
      "comments": 2,
      "reading_time": 16,
      "author": "machuz"
    },
    {
      "title": "hello",
      "description": "Building Connections in the Developer Community   Hey developers! As someone who's been in...",
      "url": "https://dev.to/deepika_sharma_f30addac17/hello-1d88",
      "tags": "startup, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "deepika_sharma_f30addac17"
    },
    {
      "title": "The 2026 Bridge Day Playbook: Exact Days to Request in France, Germany, UK, and the US",
      "description": "How the same 5 vacation days can produce wildly different amounts of time off depending on which...",
      "url": "https://dev.to/eastkap/the-2026-bridge-day-playbook-exact-days-to-request-in-france-germany-uk-and-the-us-3j78",
      "tags": "productivity, career, travel, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "eastkap"
    },
    {
      "title": "What’s happening in IT world",
      "description": "Layoffs are dominating headlines across the tech industry. In many cases, the explanation given is...",
      "url": "https://dev.to/vishthakkar/whats-happening-in-it-world-4lg9",
      "tags": "ai, career, news, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "vishthakkar"
    },
    {
      "title": "Git Archaeology — A Complete Theory of Software Universes",
      "description": "16 chapters condensed: how git log and git blame reveal engineer gravity, team health, software cosmology, and why AI creates stars but not gravity.",
      "url": "https://dev.to/machuz/git-archaeology-a-complete-theory-of-software-universes-1057",
      "tags": "opensource, productivity, git, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "machuz"
    },
    {
      "title": "A Funeral for the Coder",
      "description": "The service isn't in a church. It's at my desk, at 2 a.m., in the glow of a single monitor. The only...",
      "url": "https://dev.to/hashemi_soroush/a-funeral-for-the-coder-320k",
      "tags": "career, ai, programming, watercooler",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "hashemi_soroush"
    },
    {
      "title": "Developers Are Invisible, But Forg.to Wants to Change That",
      "description": "The modern developer’s identity is scattered across the web, hidden in fragments that never tell the...",
      "url": "https://dev.to/kislay/developers-are-invisible-but-forgto-wants-to-change-that-44ha",
      "tags": "career, developer, socialmedia, startup",
      "reactions": 6,
      "comments": 0,
      "reading_time": 2,
      "author": "kislay"
    },
    {
      "title": "I Passed the AWS Certification. Here's Why I Still Couldn't Get Hired.",
      "description": "AWS certifications alone won't land you a cloud job in 2026. Here's what hiring managers actually look for — and how to prove you can do the work.",
      "url": "https://dev.to/ajbuilds/i-passed-the-aws-certification-heres-why-i-still-couldnt-get-hired-52mb",
      "tags": "aws, cloud, career, devops",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "ajbuilds"
    }
  ]
}
```

