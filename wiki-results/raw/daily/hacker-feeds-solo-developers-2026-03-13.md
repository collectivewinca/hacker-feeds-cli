# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-13 07:12:22 UTC

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
      "author": "moeru-ai",
      "repo": "airi",
      "avatar": "https://github.com/moeru-ai.png",
      "repo_link": "https://github.com/moeru-ai/airi",
      "desc": "💖🧸 Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3261,
      "added_stars": 6582,
      "builtBy": [
        {
          "username": "nekomeowww",
          "href": "https://github.com/nekomeowww",
          "avatar": "https://avatars.githubusercontent.com/u/11081491"
        },
        {
          "username": "shinohara-rin",
          "href": "https://github.com/shinohara-rin",
          "avatar": "https://avatars.githubusercontent.com/u/25588514"
        },
        {
          "username": "luoling8192",
          "href": "https://github.com/luoling8192",
          "avatar": "https://avatars.githubusercontent.com/u/44741987"
        },
        {
          "username": "LemonNekoGH",
          "href": "https://github.com/LemonNekoGH",
          "avatar": "https://avatars.githubusercontent.com/u/17664845"
        },
        {
          "username": "sumimakito",
          "href": "https://github.com/sumimakito",
          "avatar": "https://avatars.githubusercontent.com/u/5277268"
        }
      ]
    },
    {
      "author": "promptfoo",
      "repo": "promptfoo",
      "avatar": "https://github.com/promptfoo.png",
      "repo_link": "https://github.com/promptfoo/promptfoo",
      "desc": "Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI. Compare performance of GPT, Claude, Gemini, Llama, and more. Simple declarative configs with command line and CI/CD integration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1296,
      "added_stars": 2034,
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
      "author": "aidenybai",
      "repo": "react-grab",
      "avatar": "https://github.com/aidenybai.png",
      "repo_link": "https://github.com/aidenybai/react-grab",
      "desc": "Select context for coding agents directly from your website",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 302,
      "added_stars": 1193,
      "builtBy": [
        {
          "username": "aidenybai",
          "href": "https://github.com/aidenybai",
          "avatar": "https://avatars.githubusercontent.com/u/38025074"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "ben-million",
          "href": "https://github.com/ben-million",
          "avatar": "https://avatars.githubusercontent.com/u/210088851"
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
      "forks": 4620,
      "added_stars": 3861,
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
      "author": "JimLiu",
      "repo": "baoyu-skills",
      "avatar": "https://github.com/JimLiu.png",
      "repo_link": "https://github.com/JimLiu/baoyu-skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 977,
      "added_stars": 1877,
      "builtBy": [
        {
          "username": "JimLiu",
          "href": "https://github.com/JimLiu",
          "avatar": "https://avatars.githubusercontent.com/u/648674"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "luojiyin1987",
          "href": "https://github.com/luojiyin1987",
          "avatar": "https://avatars.githubusercontent.com/u/6524977"
        },
        {
          "username": "justnode",
          "href": "https://github.com/justnode",
          "avatar": "https://avatars.githubusercontent.com/u/8398907"
        },
        {
          "username": "fkysly",
          "href": "https://github.com/fkysly",
          "avatar": "https://avatars.githubusercontent.com/u/3274605"
        }
      ]
    },
    {
      "author": "ItzCrazyKns",
      "repo": "Vane",
      "avatar": "https://github.com/ItzCrazyKns.png",
      "repo_link": "https://github.com/ItzCrazyKns/Vane",
      "desc": "Vane is an AI-powered answering engine.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3532,
      "added_stars": 1679,
      "builtBy": [
        {
          "username": "ItzCrazyKns",
          "href": "https://github.com/ItzCrazyKns",
          "avatar": "https://avatars.githubusercontent.com/u/95534749"
        },
        {
          "username": "WanQuanXie",
          "href": "https://github.com/WanQuanXie",
          "avatar": "https://avatars.githubusercontent.com/u/8021137"
        },
        {
          "username": "OmarElKadri",
          "href": "https://github.com/OmarElKadri",
          "avatar": "https://avatars.githubusercontent.com/u/118303871"
        },
        {
          "username": "sjiampojamarn",
          "href": "https://github.com/sjiampojamarn",
          "avatar": "https://avatars.githubusercontent.com/u/18257803"
        }
      ]
    },
    {
      "author": "toeverything",
      "repo": "AFFiNE",
      "avatar": "https://github.com/toeverything.png",
      "repo_link": "https://github.com/toeverything/AFFiNE",
      "desc": "There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4593,
      "added_stars": 2345,
      "builtBy": [
        {
          "username": "himself65",
          "href": "https://github.com/himself65",
          "avatar": "https://avatars.githubusercontent.com/u/14026360"
        },
        {
          "username": "darkskygit",
          "href": "https://github.com/darkskygit",
          "avatar": "https://avatars.githubusercontent.com/u/25152247"
        },
        {
          "username": "pengx17",
          "href": "https://github.com/pengx17",
          "avatar": "https://avatars.githubusercontent.com/u/584378"
        },
        {
          "username": "JimmFly",
          "href": "https://github.com/JimmFly",
          "avatar": "https://avatars.githubusercontent.com/u/102217452"
        },
        {
          "username": "EYHN",
          "href": "https://github.com/EYHN",
          "avatar": "https://avatars.githubusercontent.com/u/13579374"
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
      "forks": 240,
      "added_stars": 864,
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
      "author": "shadcn-ui",
      "repo": "ui",
      "avatar": "https://github.com/shadcn-ui.png",
      "repo_link": "https://github.com/shadcn-ui/ui",
      "desc": "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8160,
      "added_stars": 1748,
      "builtBy": [
        {
          "username": "shadcn",
          "href": "https://github.com/shadcn",
          "avatar": "https://avatars.githubusercontent.com/u/124599"
        },
        {
          "username": "iaingymware",
          "href": "https://github.com/iaingymware",
          "avatar": "https://avatars.githubusercontent.com/u/74924033"
        },
        {
          "username": "jaem0629",
          "href": "https://github.com/jaem0629",
          "avatar": "https://avatars.githubusercontent.com/u/91131509"
        }
      ]
    },
    {
      "author": "yikart",
      "repo": "AiToEarn",
      "avatar": "https://github.com/yikart.png",
      "repo_link": "https://github.com/yikart/AiToEarn",
      "desc": "Let's use AI to Earn!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2418,
      "added_stars": 756,
      "builtBy": [
        {
          "username": "niuwenzheng",
          "href": "https://github.com/niuwenzheng",
          "avatar": "https://avatars.githubusercontent.com/u/30893307"
        },
        {
          "username": "gaozhenqiang",
          "href": "https://github.com/gaozhenqiang",
          "avatar": "https://avatars.githubusercontent.com/u/88360790"
        },
        {
          "username": "Yuuki-Sakura",
          "href": "https://github.com/Yuuki-Sakura",
          "avatar": "https://avatars.githubusercontent.com/u/54829481"
        },
        {
          "username": "gao1234-prog",
          "href": "https://github.com/gao1234-prog",
          "avatar": "https://avatars.githubusercontent.com/u/208151450"
        },
        {
          "username": "whh2333",
          "href": "https://github.com/whh2333",
          "avatar": "https://avatars.githubusercontent.com/u/70197018"
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
      "forks": 889,
      "added_stars": 173,
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
      "author": "openclaw",
      "repo": "clawhub",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/clawhub",
      "desc": "Skill Directory for OpenClaw",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 900,
      "added_stars": 1365,
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
          "username": "thewilloftheshadow",
          "href": "https://github.com/thewilloftheshadow",
          "avatar": "https://avatars.githubusercontent.com/u/35580099"
        },
        {
          "username": "sethconvex",
          "href": "https://github.com/sethconvex",
          "avatar": "https://avatars.githubusercontent.com/u/239661579"
        },
        {
          "username": "theonejvo",
          "href": "https://github.com/theonejvo",
          "avatar": "https://avatars.githubusercontent.com/u/125909656"
        }
      ]
    },
    {
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The leading agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features enterprise-grade architecture, distributed swarm intelligence, RAG integration, and native Claude Code / Codex Integration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2299,
      "added_stars": 1679,
      "builtBy": [
        {
          "username": "ruvnet",
          "href": "https://github.com/ruvnet",
          "avatar": "https://avatars.githubusercontent.com/u/2934394"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "alexx-ftw",
          "href": "https://github.com/alexx-ftw",
          "avatar": "https://avatars.githubusercontent.com/u/22500633"
        },
        {
          "username": "lanemc",
          "href": "https://github.com/lanemc",
          "avatar": "https://avatars.githubusercontent.com/u/15803865"
        },
        {
          "username": "tommy-ca",
          "href": "https://github.com/tommy-ca",
          "avatar": "https://avatars.githubusercontent.com/u/140900186"
        }
      ]
    },
    {
      "author": "openclaw",
      "repo": "openclaw",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/openclaw",
      "desc": "Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 58582,
      "added_stars": 43702,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "vincentkoc",
          "href": "https://github.com/vincentkoc",
          "avatar": "https://avatars.githubusercontent.com/u/25068"
        },
        {
          "username": "vignesh07",
          "href": "https://github.com/vignesh07",
          "avatar": "https://avatars.githubusercontent.com/u/1436853"
        },
        {
          "username": "obviyus",
          "href": "https://github.com/obviyus",
          "avatar": "https://avatars.githubusercontent.com/u/22031114"
        },
        {
          "username": "gumadeiras",
          "href": "https://github.com/gumadeiras",
          "avatar": "https://avatars.githubusercontent.com/u/5599352"
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
      "author": "steipete",
      "repo": "gogcli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/gogcli",
      "desc": "Google Suite CLI: Gmail, GCal, GDrive, GContacts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 468,
      "added_stars": 4579,
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
      "forks": 291,
      "added_stars": 2194,
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
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1717,
      "added_stars": 2759,
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
      "author": "entireio",
      "repo": "cli",
      "avatar": "https://github.com/entireio.png",
      "repo_link": "https://github.com/entireio/cli",
      "desc": "Entire is a new developer platform that hooks into your git workflow to capture AI agent sessions on every push, unifying your code with its context and reasoning.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 255,
      "added_stars": 1612,
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 790,
      "added_stars": 3179,
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
      "forks": 664,
      "added_stars": 1064,
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
      "author": "asheshgoplani",
      "repo": "agent-deck",
      "avatar": "https://github.com/asheshgoplani.png",
      "repo_link": "https://github.com/asheshgoplani/agent-deck",
      "desc": "Terminal session manager for AI coding agents. One TUI for Claude, Gemini, OpenCode, Codex, and more.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 150,
      "added_stars": 729,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 454,
      "added_stars": 588,
      "builtBy": [
        {
          "username": "gosom",
          "href": "https://github.com/gosom",
          "avatar": "https://avatars.githubusercontent.com/u/454718"
        },
        {
          "username": "dredozubov",
          "href": "https://github.com/dredozubov",
          "avatar": "https://avatars.githubusercontent.com/u/131368"
        },
        {
          "username": "Lucifer-02",
          "href": "https://github.com/Lucifer-02",
          "avatar": "https://avatars.githubusercontent.com/u/84069686"
        },
        {
          "username": "lucifer-vcb",
          "href": "https://github.com/lucifer-vcb",
          "avatar": "https://avatars.githubusercontent.com/u/170999809"
        },
        {
          "username": "bugkerb",
          "href": "https://github.com/bugkerb",
          "avatar": "https://avatars.githubusercontent.com/u/8428579"
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
      "forks": 292,
      "added_stars": 257,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1952,
      "added_stars": 498,
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
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "CyberStrikeAI is an AI-native security testing platform built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 453,
      "added_stars": 1979,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 14940,
      "added_stars": 2976,
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
      "author": "m1k1o",
      "repo": "neko",
      "avatar": "https://github.com/m1k1o.png",
      "repo_link": "https://github.com/m1k1o/neko",
      "desc": "A self hosted virtual browser that runs in docker and uses WebRTC.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1391,
      "added_stars": 2759,
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
      "author": "charmbracelet",
      "repo": "glow",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/glow",
      "desc": "Render markdown on the CLI, with pizzazz! 💅🏻",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 606,
      "added_stars": 858,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8066,
      "added_stars": 820,
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
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 306,
      "added_stars": 633,
      "builtBy": [
        {
          "username": "akshaydeo",
          "href": "https://github.com/akshaydeo",
          "avatar": "https://avatars.githubusercontent.com/u/1050029"
        },
        {
          "username": "Pratham-Mishra04",
          "href": "https://github.com/Pratham-Mishra04",
          "avatar": "https://avatars.githubusercontent.com/u/99235987"
        },
        {
          "username": "TejasGhatte",
          "href": "https://github.com/TejasGhatte",
          "avatar": "https://avatars.githubusercontent.com/u/64637256"
        },
        {
          "username": "Radheshg04",
          "href": "https://github.com/Radheshg04",
          "avatar": "https://avatars.githubusercontent.com/u/61974742"
        }
      ]
    },
    {
      "author": "abiosoft",
      "repo": "colima",
      "avatar": "https://github.com/abiosoft.png",
      "repo_link": "https://github.com/abiosoft/colima",
      "desc": "Container runtimes on macOS (and Linux) with minimal setup",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 555,
      "added_stars": 685,
      "builtBy": [
        {
          "username": "abiosoft",
          "href": "https://github.com/abiosoft",
          "avatar": "https://avatars.githubusercontent.com/u/240448"
        },
        {
          "username": "rfay",
          "href": "https://github.com/rfay",
          "avatar": "https://avatars.githubusercontent.com/u/112444"
        },
        {
          "username": "LaszloGombos",
          "href": "https://github.com/LaszloGombos",
          "avatar": "https://avatars.githubusercontent.com/u/1522773"
        },
        {
          "username": "artygus",
          "href": "https://github.com/artygus",
          "avatar": "https://avatars.githubusercontent.com/u/4974968"
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
      "forks": 2586,
      "added_stars": 1984,
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
      "author": "dapr",
      "repo": "dapr",
      "avatar": "https://github.com/dapr.png",
      "repo_link": "https://github.com/dapr/dapr",
      "desc": "Dapr is a portable runtime for building distributed applications across cloud and edge, combining event-driven architecture with workflow orchestration.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2054,
      "added_stars": 144,
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
      "forks": 3625,
      "added_stars": 10001,
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
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 534,
      "added_stars": 7684,
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
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 414,
      "added_stars": 5009,
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
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "OpenSandbox is a general-purpose sandbox platform for AI applications, offering multi-language SDKs, unified sandbox APIs, and Docker/Kubernetes runtimes for scenarios like Coding Agents, GUI Agents, Agent Evaluation, AI Code Execution, and RL Training.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 565,
      "added_stars": 6553,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1265,
      "added_stars": 6358,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 538,
      "added_stars": 4853,
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
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2147,
      "added_stars": 14154,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "+180 production-ready skills & plugins for Claude Code, OpenAI Codex, and OpenClaw — engineering, marketing, product, compliance, C-level advisory, and more. Install via /plugin marketplace.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 520,
      "added_stars": 2772,
      "builtBy": [
        {
          "username": "alirezarezvani",
          "href": "https://github.com/alirezarezvani",
          "avatar": "https://avatars.githubusercontent.com/u/5697919"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "olgasafonova",
          "href": "https://github.com/olgasafonova",
          "avatar": "https://avatars.githubusercontent.com/u/23409189"
        },
        {
          "username": "fernandezbaptiste",
          "href": "https://github.com/fernandezbaptiste",
          "avatar": "https://avatars.githubusercontent.com/u/83458751"
        },
        {
          "username": "ikala-shawn",
          "href": "https://github.com/ikala-shawn",
          "avatar": "https://avatars.githubusercontent.com/u/111341595"
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
      "forks": 654,
      "added_stars": 3368,
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
      "author": "databricks-solutions",
      "repo": "ai-dev-kit",
      "avatar": "https://github.com/databricks-solutions.png",
      "repo_link": "https://github.com/databricks-solutions/ai-dev-kit",
      "desc": "Databricks Toolkit for Coding Agents provided by Field Engineering",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 171,
      "added_stars": 645,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1592,
      "added_stars": 6918,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 834,
      "added_stars": 2321,
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
      "author": "anthropics",
      "repo": "claude-code-security-review",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-security-review",
      "desc": "An AI-powered security review GitHub Action using Claude to analyze code changes for security vulnerabilities.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 311,
      "added_stars": 768,
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
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6376,
      "added_stars": 3069,
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
      "author": "mihail911",
      "repo": "modern-software-dev-assignments",
      "avatar": "https://github.com/mihail911.png",
      "repo_link": "https://github.com/mihail911/modern-software-dev-assignments",
      "desc": "Assignments for CS146S: The Modern Software Dev (Stanford University Fall 2025)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 700,
      "added_stars": 1282,
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
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1813,
      "added_stars": 4218,
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
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2854,
      "added_stars": 3910,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
        }
      ]
    },
    {
      "author": "openai",
      "repo": "skills",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/skills",
      "desc": "Skills Catalog for Codex",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 803,
      "added_stars": 5942,
      "builtBy": [
        {
          "username": "gverma-openai",
          "href": "https://github.com/gverma-openai",
          "avatar": "https://avatars.githubusercontent.com/u/235382312"
        },
        {
          "username": "dkundel-openai",
          "href": "https://github.com/dkundel-openai",
          "avatar": "https://avatars.githubusercontent.com/u/200841172"
        },
        {
          "username": "vb-openai",
          "href": "https://github.com/vb-openai",
          "avatar": "https://avatars.githubusercontent.com/u/250380837"
        },
        {
          "username": "edward-bayes",
          "href": "https://github.com/edward-bayes",
          "avatar": "https://avatars.githubusercontent.com/u/191618473"
        },
        {
          "username": "ae-openai",
          "href": "https://github.com/ae-openai",
          "avatar": "https://avatars.githubusercontent.com/u/173195103"
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
    },
    {
      "title": "tsonic - Compile TS to native code via NativeAOT",
      "url": "https://github.com/tsoniclang/tsonic",
      "upvotes": "2",
      "comments": "1",
      "created": "2026-03-03T16:46:46.000Z"
    },
    {
      "title": "Why your Vitest test suite is slow (and how to fix it)",
      "url": "https://medium.com/ekino-france/why-your-vitest-test-suite-is-slow-and-how-to-fix-it-068fbaf6d6eb",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-02T13:44:07.000Z"
    },
    {
      "title": "Next-Translate 3.0.0",
      "url": "https://aralroca.com/blog/next-translate-3-0",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-01T23:13:55.000Z"
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
      "title": "Why Are We Still Doing GPU Work in JavaScript? (Live WebGPU Benchmark & Demo🚀)",
      "description": "JavaScript has been the main language of the web for years. Its popularity probably surprised even...",
      "url": "https://dev.to/sylwia-lask/why-are-we-still-doing-gpu-work-in-javascript-live-webgpu-benchmark-demo-4j6i",
      "tags": "webdev, javascript, typescript, webgpu",
      "reactions": 30,
      "comments": 17,
      "reading_time": 6,
      "author": "sylwia-lask"
    },
    {
      "title": "An Update on How We Judge DEV Challenges",
      "description": "We're always working to improve how we run DEV Challenges, and we have an update to share on the...",
      "url": "https://dev.to/devteam/an-update-on-how-we-judge-dev-challenges-34eg",
      "tags": "devchallenge, devto",
      "reactions": 27,
      "comments": 3,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "The Diplomatic Core: Shared Logic in a Multi-Framework World",
      "description": "This is the third part in a tenuously linked series defending JavaScript singletons in a modern...",
      "url": "https://dev.to/link2twenty/the-diplomatic-core-shared-logic-in-a-multi-framework-world-36m8",
      "tags": "microfrontend, webdev, react, vue",
      "reactions": 28,
      "comments": 2,
      "reading_time": 4,
      "author": "link2twenty"
    },
    {
      "title": "What Quitting My Job Taught Me About Tech",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience  So it is finally time to...",
      "url": "https://dev.to/konark_13/what-quitting-my-job-taught-me-about-tech-3no0",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 50,
      "comments": 30,
      "reading_time": 7,
      "author": "konark_13"
    },
    {
      "title": "experience report: coding a framework with AI",
      "description": "I'm Theo. I code out of pure passion for over 2 decades, specialized in webdev.  Building something...",
      "url": "https://dev.to/theodordiaconu/experience-report-coding-a-framework-with-ai-hlj",
      "tags": "ai, webdev, typescript",
      "reactions": 1,
      "comments": 1,
      "reading_time": 4,
      "author": "theodordiaconu"
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
    },
    {
      "title": "Gemini 2.5 Flash vs Claude 3.7 Sonnet: 4 Production Constraints That Made the Decision for Me",
      "description": "An evaluation of the Gemini 2.5 flash and Claude 3.7 Sonnet model for an agentic engine.  I had a...",
      "url": "https://dev.to/dumebii/gemini-25-flash-vs-claude-37-sonnet-4-production-constraints-that-made-the-decision-for-me-bib",
      "tags": "webdev, javascript, showdev, nextjs",
      "reactions": 44,
      "comments": 19,
      "reading_time": 11,
      "author": "dumebii"
    },
    {
      "title": "Clojure Inheritance… Sort Of",
      "description": "Disclaimer   I want to start off by saying that I don't expect anyone to read this. However,...",
      "url": "https://dev.to/quoll/clojure-inheritance-sort-of-2i6i",
      "tags": "clojure",
      "reactions": 5,
      "comments": 0,
      "reading_time": 5,
      "author": "quoll"
    },
    {
      "title": "The one question that made me turn down a job offer",
      "description": "Last month, I went through a full interview process for a tech lead role. It went well — I liked the...",
      "url": "https://dev.to/etienneburdet/the-one-question-that-made-me-turn-down-a-job-offer-5g1c",
      "tags": "career, interview",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "etienneburdet"
    },
    {
      "title": "Multi-Connector OAuth: Meeting Scheduler Agent using Google Calendar, Gmail, Scalekit",
      "description": "Scheduling a meeting takes three API calls: check availability, create the event, and draft the...",
      "url": "https://dev.to/saif_shines/multi-connector-oauth-meeting-scheduler-agent-using-google-calendar-gmail-scalekit-89e",
      "tags": "ai, security, authentication, oauth",
      "reactions": 2,
      "comments": 0,
      "reading_time": 10,
      "author": "saif_shines"
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
      "title": "The Best Darn Grid Shader (Yet)",
      "url": "https://bgolus.medium.com/the-best-darn-grid-shader-yet-727f9278b9d8",
      "score": 2,
      "comments": 0,
      "tags": [
        "graphics"
      ],
      "id": "jn7yoi"
    },
    {
      "title": "Blog: Mitigating URL-based Exfiltration in Gemini",
      "url": "https://bughunters.google.com/blog/mitigating-url-based-exfiltration-in-gemini",
      "score": 1,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "cbryfr"
    },
    {
      "title": "How to make your own static site generator",
      "url": "https://gaultier.github.io/blog/how_to_make_your_own_static_site_generator.html",
      "score": 3,
      "comments": 1,
      "tags": [
        "programming"
      ],
      "id": "qnnok5"
    },
    {
      "title": "Learn Haskell in Two Weeks",
      "url": "https://vitez.me/learn-haskell-in-two-weeks",
      "score": 1,
      "comments": 0,
      "tags": [
        "haskell",
        "practices"
      ],
      "id": "gpwpji"
    },
    {
      "title": "Plan 9's Acme: The Un-Terminal and Text-Based GUIs",
      "url": "https://www.danielmoch.com/posts/2025/01/acme/",
      "score": 11,
      "comments": 2,
      "tags": [
        "editors"
      ],
      "id": "x9znhg"
    },
    {
      "title": "How Many Times Can a DVD±RW Be Rewritten?",
      "url": "https://goughlui.com/2026/03/07/tested-how-many-times-can-a-dvd%c2%b1rw-be-rewritten-part-2-methodology-results/",
      "score": 6,
      "comments": 0,
      "tags": [
        "hardware"
      ],
      "id": "jow6ea"
    },
    {
      "title": "Games in PostScript - Play Chess Against Your Printer",
      "url": "https://www.youtube.com/watch?v=2YCATafErA8",
      "score": 5,
      "comments": 2,
      "tags": [
        "programming",
        "retrocomputing",
        "video"
      ],
      "id": "efhaws"
    },
    {
      "title": "oss-security - Re: Multiple vulnerabilities in AppArmor",
      "url": "https://www.openwall.com/lists/oss-security/2026/03/12/7",
      "score": 5,
      "comments": 0,
      "tags": [
        "linux",
        "security"
      ],
      "id": "2oob2h"
    },
    {
      "title": "The 8 Levels of Agentic Engineering — Bassim Eledath",
      "url": "https://www.bassimeledath.com/blog/levels-of-agentic-engineering",
      "score": 1,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "qbjifl"
    },
    {
      "title": "Why End-to-End Encryption Cannot Protect Infrastructure Metadata",
      "url": "https://dev.to/alifunk/why-end-to-end-encryption-cannot-protect-infrastructure-metadata-4bj4",
      "score": 0,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "rkzrd7"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "Samin100",
      "descendants": 71,
      "id": 47307124,
      "kids": [
        47360936,
        47361401,
        47361027,
        47360932,
        47361345,
        47361446,
        47361226,
        47361439,
        47361333,
        47360910,
        47361361,
        47360915,
        47361055,
        47361391,
        47361176,
        47361109,
        47361221,
        47360834,
        47360863,
        47361104,
        47361191,
        47361185,
        47361288,
        47361382,
        47361058,
        47361344,
        47360865,
        47361111,
        47361320,
        47360957,
        47360869,
        47360854,
        47360807,
        47361328
      ],
      "score": 174,
      "time": 1773051718,
      "title": "Willingness to look stupid",
      "type": "story",
      "url": "https://sharif.io/looking-stupid"
    },
    {
      "by": "microflash",
      "descendants": 431,
      "id": 47350424,
      "kids": [
        47352848,
        47355902,
        47352387,
        47353349,
        47351902,
        47354348,
        47353882,
        47353496,
        47354020,
        47352483,
        47351178,
        47352296,
        47355386,
        47351155,
        47352568,
        47360524,
        47351481,
        47354969,
        47351509,
        47352292,
        47357403,
        47351498,
        47354045,
        47352865,
        47359760,
        47354370,
        47351284,
        47352139,
        47352458,
        47354991,
        47351603,
        47351270,
        47358383,
        47355375,
        47357212,
        47352220,
        47355947,
        47353653,
        47355460,
        47354976,
        47355316,
        47355359,
        47352522,
        47354558,
        47354768,
        47354741,
        47353250,
        47357375,
        47354549,
        47351695,
        47353719,
        47353492,
        47353401,
        47353329,
        47355276,
        47350440,
        47354414,
        47353591,
        47352261,
        47361310,
        47354746,
        47352503,
        47351762,
        47356003,
        47360996,
        47352218,
        47359575,
        47356232,
        47352019,
        47356216,
        47352078,
        47360289,
        47354302,
        47358419,
        47351193,
        47354158,
        47353630,
        47353511,
        47352474,
        47354300,
        47351835,
        47352433,
        47355570,
        47355366,
        47360361,
        47353905,
        47356620,
        47353636,
        47354287,
        47353585,
        47354837,
        47352128,
        47359770,
        47351203,
        47359669,
        47356441,
        47353010,
        47354121,
        47359345,
        47355853,
        47351673,
        47358277,
        47354241,
        47358265,
        47355047,
        47356044,
        47357457,
        47354482,
        47352293,
        47353832,
        47354386,
        47352666,
        47352336,
        47355374,
        47354390,
        47355197,
        47351322,
        47355418,
        47352966,
        47352133,
        47352887,
        47351339,
        47354802,
        47358885,
        47354569,
        47353649,
        47357030,
        47356089,
        47354381,
        47354006,
        47354216,
        47351444,
        47359155,
        47355651,
        47352407,
        47355810,
        47352890,
        47352818,
        47353550,
        47353943
      ],
      "score": 1186,
      "text": "<a href=\"https:&#x2F;&#x2F;fosdem.org&#x2F;2026&#x2F;schedule&#x2F;event&#x2F;SUVS7G-lets_end_open_source_together_with_this_one_simple_trick&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;fosdem.org&#x2F;2026&#x2F;schedule&#x2F;event&#x2F;SUVS7G-lets_end_open_...</a><p><a href=\"https:&#x2F;&#x2F;malus.sh&#x2F;blog.html\" rel=\"nofollow\">https:&#x2F;&#x2F;malus.sh&#x2F;blog.html</a>",
      "time": 1773322924,
      "title": "Malus – Clean Room as a Service",
      "type": "story",
      "url": "https://malus.sh"
    },
    {
      "by": "kothariji",
      "descendants": 14,
      "id": 47360730,
      "kids": [
        47361369,
        47361089,
        47361462,
        47361386,
        47361134,
        47360849,
        47361209,
        47361366
      ],
      "score": 149,
      "time": 1773376600,
      "title": "Vite 8.0 Is Out",
      "type": "story",
      "url": "https://vite.dev/blog/announcing-vite8"
    },
    {
      "by": "mfiguiere",
      "descendants": 2,
      "id": 47301017,
      "kids": [
        47361434,
        47361397
      ],
      "score": 15,
      "time": 1773001346,
      "title": "Prefix sums at gigabytes per second with ARM NEON",
      "type": "story",
      "url": "https://lemire.me/blog/2026/03/08/prefix-sums-at-tens-of-gigabytes-per-second-with-arm-neon/"
    },
    {
      "by": "nvahalik",
      "descendants": 11,
      "id": 47360383,
      "kids": [
        47361491,
        47361207,
        47361416,
        47360989,
        47360883
      ],
      "score": 27,
      "time": 1773372738,
      "title": "Hyperlinks in Terminal Emulators",
      "type": "story",
      "url": "https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda"
    },
    {
      "by": "eieio",
      "descendants": 94,
      "id": 47354098,
      "kids": [
        47361375,
        47355476,
        47354099,
        47354780,
        47354395,
        47354891,
        47354374,
        47355783,
        47354544,
        47361195,
        47360715,
        47355391,
        47355298,
        47357133,
        47356496,
        47354490,
        47358146,
        47354745,
        47361113,
        47355499,
        47357612,
        47357073,
        47354941,
        47355406,
        47355470,
        47354986,
        47358459,
        47356911,
        47355642,
        47354610
      ],
      "score": 310,
      "time": 1773335636,
      "title": "Bubble Sorted Amen Break",
      "type": "story",
      "url": "https://parametricavocado.itch.io/amen-sorting"
    },
    {
      "by": "breton",
      "descendants": 435,
      "id": 47357042,
      "kids": [
        47358247,
        47358725,
        47357885,
        47357962,
        47357572,
        47361308,
        47360327,
        47361237,
        47357627,
        47357579,
        47361187,
        47357726,
        47358264,
        47360709,
        47357697,
        47358615,
        47360487,
        47360317,
        47357426,
        47361102,
        47357584,
        47360167,
        47357588,
        47360835,
        47357956,
        47361220,
        47360898,
        47358150,
        47357941,
        47358006,
        47357918,
        47357963,
        47358198,
        47359443,
        47360546,
        47360711,
        47358501,
        47360098,
        47360135,
        47360342,
        47360585,
        47358543,
        47360345,
        47361200,
        47357811,
        47360396,
        47357919,
        47359157,
        47359206,
        47358321,
        47359064,
        47357979,
        47357622,
        47358491,
        47357823,
        47357460,
        47357949,
        47358929,
        47360368,
        47360326,
        47358079,
        47357849,
        47357800,
        47360792,
        47360246,
        47357771,
        47357932,
        47359036,
        47358898,
        47358586,
        47358274,
        47357808,
        47357861,
        47359140,
        47359564,
        47357859,
        47358121,
        47359041,
        47359050,
        47361203,
        47359224,
        47360172,
        47358532,
        47359771,
        47358941,
        47357901,
        47357933,
        47357717,
        47357475,
        47357473,
        47357987,
        47357747
      ],
      "score": 1158,
      "time": 1773349270,
      "title": "Shall I implement it? No",
      "type": "story",
      "url": "https://gist.github.com/bretonium/291f4388e2de89a43b25c135b44e41f0"
    },
    {
      "by": "MBCook",
      "descendants": 131,
      "id": 47359744,
      "kids": [
        47360535,
        47360272,
        47360650,
        47361122,
        47360189,
        47361477,
        47360544,
        47360840,
        47360773,
        47361234,
        47360096,
        47360239,
        47360441,
        47360927,
        47361254,
        47360134,
        47360782,
        47360168,
        47361004,
        47361063,
        47360948,
        47360631,
        47360816,
        47360979,
        47360349,
        47360837,
        47360245,
        47360475,
        47360464,
        47360348,
        47360234,
        47360523,
        47361407,
        47359767
      ],
      "score": 272,
      "time": 1773366349,
      "title": "“This is not the computer for you”",
      "type": "story",
      "url": "https://samhenri.gold/blog/20260312-this-is-not-the-computer-for-you/"
    },
    {
      "by": "colinprince",
      "descendants": 419,
      "id": 47351371,
      "kids": [
        47351960,
        47355147,
        47351779,
        47351800,
        47360800,
        47356558,
        47358723,
        47352688,
        47351623,
        47354581,
        47360737,
        47352149,
        47357914,
        47356076,
        47355242,
        47351905,
        47360170,
        47354279,
        47358011,
        47354075,
        47355436,
        47353789,
        47358704,
        47352678,
        47352230,
        47352156,
        47351903,
        47352217,
        47360114,
        47358223,
        47352586,
        47351642,
        47351952,
        47356449,
        47359479,
        47352009,
        47354601,
        47353174,
        47351803,
        47351639,
        47351827,
        47358473,
        47355657,
        47355821,
        47356661,
        47359684,
        47355165,
        47353920
      ],
      "score": 390,
      "time": 1773326937,
      "title": "ATMs didn’t kill bank teller jobs, but the iPhone did",
      "type": "story",
      "url": "https://davidoks.blog/p/why-the-atm-didnt-kill-bank-teller"
    },
    {
      "by": "mustaphah",
      "descendants": 113,
      "id": 47353533,
      "kids": [
        47354889,
        47355358,
        47355356,
        47360273,
        47357381,
        47361408,
        47356026,
        47356252,
        47360072,
        47354667,
        47355834,
        47355977,
        47359220,
        47356543,
        47356670,
        47360298,
        47359815,
        47356893,
        47354522,
        47359486,
        47354515,
        47358203,
        47354682
      ],
      "score": 289,
      "time": 1773333531,
      "title": "Reversing memory loss via gut-brain communication",
      "type": "story",
      "url": "https://med.stanford.edu/news/all-news/2026/03/gut-brain-cognitive-decline.html"
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
      "title": "I Was One Day Away From Quitting — And Then My Career Took An Unexpected Turn",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience     Here's a story from my...",
      "url": "https://dev.to/dev-in-progress/i-was-one-day-away-from-quitting-and-then-my-career-took-an-unexpected-turn-o1k",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "dev-in-progress"
    },
    {
      "title": "Unboxable in Tech",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience     \"I don't know which box...",
      "url": "https://dev.to/pascal_cescato_692b7a8a20/unboxable-in-tech-2knm",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 38,
      "comments": 15,
      "reading_time": 7,
      "author": "pascal_cescato_692b7a8a20"
    },
    {
      "title": "What Quitting My Job Taught Me About Tech",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience  So it is finally time to...",
      "url": "https://dev.to/konark_13/what-quitting-my-job-taught-me-about-tech-3no0",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 50,
      "comments": 30,
      "reading_time": 7,
      "author": "konark_13"
    },
    {
      "title": "Your 2026 PTO Cheat Sheet: Exactly Which Days to Take Off",
      "description": "Your 2026 PTO Cheat Sheet: Exactly Which Days to Take Off  You have a limited number of PTO days....",
      "url": "https://dev.to/eastkap/your-2026-pto-cheat-sheet-exactly-which-days-to-take-off-4eki",
      "tags": "productivity, career, webdev, opensource",
      "reactions": 2,
      "comments": 0,
      "reading_time": 5,
      "author": "eastkap"
    },
    {
      "title": "Stop Asking AI for Answers - Start Shipping Fixes",
      "description": "The modern equivalent of answering Stack Overflow questions is contributing fixes to open source issues. AI is what finally makes this approachable at scale.",
      "url": "https://dev.to/sag1v/stop-asking-ai-for-answers-start-shipping-fixes-4mde",
      "tags": "ai, opensource, career, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "sag1v"
    },
    {
      "title": "My Brain Stopped Working and I Spent 6 Months Figuring Out Why",
      "description": "This is going to sound dramatic but stick with me     Okay so there was this one evening last year...",
      "url": "https://dev.to/sukriti_singh/my-brain-stopped-working-and-i-spent-6-months-figuring-out-why-1n4i",
      "tags": "discuss, productivity, career, mentalhealth",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "sukriti_singh"
    },
    {
      "title": "layoffs, closing chapters & personal value",
      "description": "It’s been exactly one week since I was laid off from my job as a junior frontend developer.  My...",
      "url": "https://dev.to/gabizaor/layoffs-closing-chapters-personal-value-f3j",
      "tags": "career, devjournal, discuss, frontend",
      "reactions": 7,
      "comments": 0,
      "reading_time": 3,
      "author": "gabizaor"
    },
    {
      "title": "Why Your Interview Prep Is Broken (And What AI Gets Wrong About It)",
      "description": "The job market in 2026 is brutal. Not because there aren't jobs -- there are -- but because the...",
      "url": "https://dev.to/coach4life/why-your-interview-prep-is-broken-and-what-ai-gets-wrong-about-it-3onf",
      "tags": "career, interview, productivity, beginners",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "coach4life"
    },
    {
      "title": "Refactoring Text Like Code: The \"Mother Tongue\" Prompt Hack That Got My Book Published",
      "description": "From a simple YouTube timer to a published tech book. Discover how I used native Japanese prompts to handle deep logic, bypass the English barrier, and refactor text like code.",
      "url": "https://dev.to/lwgena/refactoring-text-like-code-the-mother-tongue-prompt-hack-that-got-my-book-published-5576",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "lwgena"
    },
    {
      "title": "Resumes are still stuck in 2010. What if an AI agent handled the entire process?",
      "description": "Every few years, the resume \"tool\" space gets a facelift. New templates, new editors, maybe a grammar...",
      "url": "https://dev.to/phanikondru/resumes-are-still-stuck-in-2010-what-if-an-ai-agent-handled-the-entire-2b7c",
      "tags": "career, ai, webdev, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "phanikondru"
    }
  ]
}
```

