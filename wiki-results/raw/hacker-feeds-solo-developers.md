# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-28 06:54:06 UTC

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
      "author": "paperclipai",
      "repo": "paperclip",
      "avatar": "https://github.com/paperclipai.png",
      "repo_link": "https://github.com/paperclipai/paperclip",
      "desc": "The open-source app everyone uses to manage agents at work",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 15730,
      "added_stars": 7364,
      "builtBy": [
        {
          "username": "cryppadotta",
          "href": "https://github.com/cryppadotta",
          "avatar": "https://avatars.githubusercontent.com/u/34892728"
        },
        {
          "username": "Paperclip-Paperclip",
          "href": "https://github.com/Paperclip-Paperclip",
          "avatar": "https://avatars.githubusercontent.com/u/271391591"
        },
        {
          "username": "devinfoley",
          "href": "https://github.com/devinfoley",
          "avatar": "https://avatars.githubusercontent.com/u/139239"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "nickyleach",
          "href": "https://github.com/nickyleach",
          "avatar": "https://avatars.githubusercontent.com/u/331803"
        }
      ]
    },
    {
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5221,
      "added_stars": 6227,
      "builtBy": [
        {
          "username": "nwparker",
          "href": "https://github.com/nwparker",
          "avatar": "https://avatars.githubusercontent.com/u/4138956"
        },
        {
          "username": "AmethystLiang",
          "href": "https://github.com/AmethystLiang",
          "avatar": "https://avatars.githubusercontent.com/u/6427696"
        },
        {
          "username": "orca-ide",
          "href": "https://github.com/orca-ide",
          "avatar": "https://avatars.githubusercontent.com/u/277417572"
        },
        {
          "username": "brennanb2025",
          "href": "https://github.com/brennanb2025",
          "avatar": "https://avatars.githubusercontent.com/u/79079362"
        },
        {
          "username": "Jinwoo-H",
          "href": "https://github.com/Jinwoo-H",
          "avatar": "https://avatars.githubusercontent.com/u/73622457"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "claude-code",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code",
      "desc": "Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 24885,
      "added_stars": 1493,
      "builtBy": [
        {
          "username": "actions-user",
          "href": "https://github.com/actions-user",
          "avatar": "https://avatars.githubusercontent.com/u/65916846"
        },
        {
          "username": "poteat",
          "href": "https://github.com/poteat",
          "avatar": "https://avatars.githubusercontent.com/u/7668446"
        },
        {
          "username": "bcherny",
          "href": "https://github.com/bcherny",
          "avatar": "https://avatars.githubusercontent.com/u/1761758"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ant-kurt",
          "href": "https://github.com/ant-kurt",
          "avatar": "https://avatars.githubusercontent.com/u/209710463"
        }
      ]
    },
    {
      "author": "FxEmbed",
      "repo": "FxEmbed",
      "avatar": "https://github.com/FxEmbed.png",
      "repo_link": "https://github.com/FxEmbed/FxEmbed",
      "desc": "Fix X/Twitter and Bluesky embeds! Use multiple images, videos, polls, translations and more on Discord, Telegram and others",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 262,
      "added_stars": 432,
      "builtBy": [
        {
          "username": "dangeredwolf",
          "href": "https://github.com/dangeredwolf",
          "avatar": "https://avatars.githubusercontent.com/u/2636265"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "Wazbat",
          "href": "https://github.com/Wazbat",
          "avatar": "https://avatars.githubusercontent.com/u/6253896"
        }
      ]
    },
    {
      "author": "dream-num",
      "repo": "univer",
      "avatar": "https://github.com/dream-num.png",
      "repo_link": "https://github.com/dream-num/univer",
      "desc": "The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1767,
      "added_stars": 5414,
      "builtBy": [
        {
          "username": "jikkai",
          "href": "https://github.com/jikkai",
          "avatar": "https://avatars.githubusercontent.com/u/14025786"
        },
        {
          "username": "DR-Univer",
          "href": "https://github.com/DR-Univer",
          "avatar": "https://avatars.githubusercontent.com/u/68851825"
        },
        {
          "username": "wzhudev",
          "href": "https://github.com/wzhudev",
          "avatar": "https://avatars.githubusercontent.com/u/12122021"
        },
        {
          "username": "Dushusir",
          "href": "https://github.com/Dushusir",
          "avatar": "https://avatars.githubusercontent.com/u/26371161"
        },
        {
          "username": "wpxp123456",
          "href": "https://github.com/wpxp123456",
          "avatar": "https://avatars.githubusercontent.com/u/26315959"
        }
      ]
    },
    {
      "author": "Open-Dev-Society",
      "repo": "OpenStock",
      "avatar": "https://github.com/Open-Dev-Society.png",
      "repo_link": "https://github.com/Open-Dev-Society/OpenStock",
      "desc": "OpenStock is an open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights — built openly, for everyone, forever free.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2374,
      "added_stars": 2792,
      "builtBy": [
        {
          "username": "ravixalgorithm",
          "href": "https://github.com/ravixalgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/148683640"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "keshav-005",
          "href": "https://github.com/keshav-005",
          "avatar": "https://avatars.githubusercontent.com/u/180140750"
        },
        {
          "username": "nb-src",
          "href": "https://github.com/nb-src",
          "avatar": "https://avatars.githubusercontent.com/u/76625701"
        }
      ]
    },
    {
      "author": "Crosstalk-Solutions",
      "repo": "project-nomad",
      "avatar": "https://github.com/Crosstalk-Solutions.png",
      "repo_link": "https://github.com/Crosstalk-Solutions/project-nomad",
      "desc": "Project NOMAD is an offline-first knowledge and education server. Wikipedia, thousands of books, courses, maps, and optional local AI, all running on hardware you own with no internet required.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3848,
      "added_stars": 1397,
      "builtBy": [
        {
          "username": "jakeaturner",
          "href": "https://github.com/jakeaturner",
          "avatar": "https://avatars.githubusercontent.com/u/52841588"
        },
        {
          "username": "chriscrosstalk",
          "href": "https://github.com/chriscrosstalk",
          "avatar": "https://avatars.githubusercontent.com/u/49691103"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cosmistack-bot",
          "href": "https://github.com/cosmistack-bot",
          "avatar": "https://avatars.githubusercontent.com/u/175166532"
        }
      ]
    },
    {
      "author": "krillinai",
      "repo": "OpenCreator",
      "avatar": "https://github.com/krillinai.png",
      "repo_link": "https://github.com/krillinai/OpenCreator",
      "desc": "Formerly KrillinAI. Open-source AI workspace for creators, powered by Codex. Create videos, images, voice, avatars, video translation, and edits with Agents in one place.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1283,
      "added_stars": 551,
      "builtBy": [
        {
          "username": "maranello-o",
          "href": "https://github.com/maranello-o",
          "avatar": "https://avatars.githubusercontent.com/u/114557800"
        },
        {
          "username": "wulien",
          "href": "https://github.com/wulien",
          "avatar": "https://avatars.githubusercontent.com/u/2296937"
        },
        {
          "username": "krillinai",
          "href": "https://github.com/krillinai",
          "avatar": "https://avatars.githubusercontent.com/u/2386538"
        },
        {
          "username": "puji4810",
          "href": "https://github.com/puji4810",
          "avatar": "https://avatars.githubusercontent.com/u/148682040"
        },
        {
          "username": "PairZhu",
          "href": "https://github.com/PairZhu",
          "avatar": "https://avatars.githubusercontent.com/u/47098840"
        }
      ]
    },
    {
      "author": "bendlang",
      "repo": "bend",
      "avatar": "https://github.com/bendlang.png",
      "repo_link": "https://github.com/bendlang/bend",
      "desc": "Bend 2: a fast language that blocks AI mistakes via proof. Install: curl -fsSL https://bend-lang.com/install.sh | sh",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 705,
      "added_stars": 958,
      "builtBy": [
        {
          "username": "imaqtkatt",
          "href": "https://github.com/imaqtkatt",
          "avatar": "https://avatars.githubusercontent.com/u/135721694"
        },
        {
          "username": "VictorTaelin",
          "href": "https://github.com/VictorTaelin",
          "avatar": "https://avatars.githubusercontent.com/u/13090166"
        },
        {
          "username": "nicolas-abril",
          "href": "https://github.com/nicolas-abril",
          "avatar": "https://avatars.githubusercontent.com/u/4893601"
        },
        {
          "username": "LunaAmora",
          "href": "https://github.com/LunaAmora",
          "avatar": "https://avatars.githubusercontent.com/u/19491161"
        },
        {
          "username": "edusporto",
          "href": "https://github.com/edusporto",
          "avatar": "https://avatars.githubusercontent.com/u/30930225"
        }
      ]
    },
    {
      "author": "ahmedkhaleel2004",
      "repo": "gitdiagram",
      "avatar": "https://github.com/ahmedkhaleel2004.png",
      "repo_link": "https://github.com/ahmedkhaleel2004/gitdiagram",
      "desc": "Free, simple, fast interactive diagrams and videos for any GitHub repository",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1315,
      "added_stars": 489,
      "builtBy": [
        {
          "username": "ahmedkhaleel2004",
          "href": "https://github.com/ahmedkhaleel2004",
          "avatar": "https://avatars.githubusercontent.com/u/111161052"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "Tencent",
      "repo": "BrowserSkill",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/BrowserSkill",
      "desc": "Let AI agents use your real, logged-in browser without interrupting your work. CLI + extension for browser automation across any shell-capable AI agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 545,
      "added_stars": 1518,
      "builtBy": [
        {
          "username": "TencentXiaowei",
          "href": "https://github.com/TencentXiaowei",
          "avatar": "https://avatars.githubusercontent.com/u/87162611"
        },
        {
          "username": "iuyo5678",
          "href": "https://github.com/iuyo5678",
          "avatar": "https://avatars.githubusercontent.com/u/5351707"
        },
        {
          "username": "Ljy-0827",
          "href": "https://github.com/Ljy-0827",
          "avatar": "https://avatars.githubusercontent.com/u/84192562"
        },
        {
          "username": "BB-fat",
          "href": "https://github.com/BB-fat",
          "avatar": "https://avatars.githubusercontent.com/u/45072480"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 4326,
      "added_stars": 328,
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
          "username": "whh2333",
          "href": "https://github.com/whh2333",
          "avatar": "https://avatars.githubusercontent.com/u/70197018"
        },
        {
          "username": "gao1234-prog",
          "href": "https://github.com/gao1234-prog",
          "avatar": "https://avatars.githubusercontent.com/u/208151450"
        }
      ]
    },
    {
      "author": "mobile-next",
      "repo": "mobile-mcp",
      "avatar": "https://github.com/mobile-next.png",
      "repo_link": "https://github.com/mobile-next/mobile-mcp",
      "desc": "Model Context Protocol Server for Mobile Automation and Scraping (iOS, Android, Emulators, Simulators and Real Devices)",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 688,
      "added_stars": 1008,
      "builtBy": [
        {
          "username": "gmegidish",
          "href": "https://github.com/gmegidish",
          "avatar": "https://avatars.githubusercontent.com/u/2457607"
        },
        {
          "username": "krismuhi",
          "href": "https://github.com/krismuhi",
          "avatar": "https://avatars.githubusercontent.com/u/38224019"
        },
        {
          "username": "benlmyers",
          "href": "https://github.com/benlmyers",
          "avatar": "https://avatars.githubusercontent.com/u/41796709"
        },
        {
          "username": "tomoya0x00",
          "href": "https://github.com/tomoya0x00",
          "avatar": "https://avatars.githubusercontent.com/u/5106629"
        },
        {
          "username": "aluedeke",
          "href": "https://github.com/aluedeke",
          "avatar": "https://avatars.githubusercontent.com/u/311702"
        }
      ]
    },
    {
      "author": "atomicstrata",
      "repo": "llm-wiki-compiler",
      "avatar": "https://github.com/atomicstrata.png",
      "repo_link": "https://github.com/atomicstrata/llm-wiki-compiler",
      "desc": "The knowledge compiler. Raw sources in, interlinked wiki out. Inspired by Karpathy's LLM Wiki pattern.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 227,
      "added_stars": 94,
      "builtBy": [
        {
          "username": "ethanj",
          "href": "https://github.com/ethanj",
          "avatar": "https://avatars.githubusercontent.com/u/1934146"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "PipDscvr",
          "href": "https://github.com/PipDscvr",
          "avatar": "https://avatars.githubusercontent.com/u/130389302"
        },
        {
          "username": "joshuaknipe",
          "href": "https://github.com/joshuaknipe",
          "avatar": "https://avatars.githubusercontent.com/u/35458476"
        },
        {
          "username": "FrankMa1",
          "href": "https://github.com/FrankMa1",
          "avatar": "https://avatars.githubusercontent.com/u/15791252"
        }
      ]
    },
    {
      "author": "vercel-labs",
      "repo": "json-render",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/json-render",
      "desc": "The Generative UI framework",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 973,
      "added_stars": 1210,
      "builtBy": [
        {
          "username": "ctate",
          "href": "https://github.com/ctate",
          "avatar": "https://avatars.githubusercontent.com/u/366502"
        },
        {
          "username": "Railly",
          "href": "https://github.com/Railly",
          "avatar": "https://avatars.githubusercontent.com/u/51397083"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "lucianfialho",
          "href": "https://github.com/lucianfialho",
          "avatar": "https://avatars.githubusercontent.com/u/3296497"
        }
      ]
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
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
      "author": "alibaba",
      "repo": "open-code-review",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/open-code-review",
      "desc": "Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3016,
      "added_stars": 20657,
      "builtBy": [
        {
          "username": "lizhengfeng101",
          "href": "https://github.com/lizhengfeng101",
          "avatar": "https://avatars.githubusercontent.com/u/254839944"
        },
        {
          "username": "wu21-web",
          "href": "https://github.com/wu21-web",
          "avatar": "https://avatars.githubusercontent.com/u/149216116"
        },
        {
          "username": "chethanuk",
          "href": "https://github.com/chethanuk",
          "avatar": "https://avatars.githubusercontent.com/u/16241795"
        },
        {
          "username": "stay-foolish-forever",
          "href": "https://github.com/stay-foolish-forever",
          "avatar": "https://avatars.githubusercontent.com/u/61303077"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "Tencent",
      "repo": "WeKnora",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/WeKnora",
      "desc": "Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4110,
      "added_stars": 9985,
      "builtBy": [
        {
          "username": "lyingbug",
          "href": "https://github.com/lyingbug",
          "avatar": "https://avatars.githubusercontent.com/u/11257935"
        },
        {
          "username": "voidkey",
          "href": "https://github.com/voidkey",
          "avatar": "https://avatars.githubusercontent.com/u/67856742"
        },
        {
          "username": "begoniezhao",
          "href": "https://github.com/begoniezhao",
          "avatar": "https://avatars.githubusercontent.com/u/216642699"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "tailscale",
      "repo": "tailcat",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailcat",
      "desc": "like netcat, but over Tailscale's data plane, without Tailscale's control plane",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 331,
      "added_stars": 6333,
      "builtBy": [
        {
          "username": "bradfitz",
          "href": "https://github.com/bradfitz",
          "avatar": "https://avatars.githubusercontent.com/u/2621"
        },
        {
          "username": "danderson",
          "href": "https://github.com/danderson",
          "avatar": "https://avatars.githubusercontent.com/u/1918"
        },
        {
          "username": "andrew-d",
          "href": "https://github.com/andrew-d",
          "avatar": "https://avatars.githubusercontent.com/u/1079173"
        },
        {
          "username": "raggi",
          "href": "https://github.com/raggi",
          "avatar": "https://avatars.githubusercontent.com/u/348"
        },
        {
          "username": "jwhited",
          "href": "https://github.com/jwhited",
          "avatar": "https://avatars.githubusercontent.com/u/10344482"
        }
      ]
    },
    {
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 459,
      "added_stars": 2249,
      "builtBy": [
        {
          "username": "BenTheElder",
          "href": "https://github.com/BenTheElder",
          "avatar": "https://avatars.githubusercontent.com/u/917931"
        },
        {
          "username": "juli4n",
          "href": "https://github.com/juli4n",
          "avatar": "https://avatars.githubusercontent.com/u/680407"
        },
        {
          "username": "HavenXia",
          "href": "https://github.com/HavenXia",
          "avatar": "https://avatars.githubusercontent.com/u/55463354"
        },
        {
          "username": "thockin",
          "href": "https://github.com/thockin",
          "avatar": "https://avatars.githubusercontent.com/u/5595220"
        },
        {
          "username": "zoez7",
          "href": "https://github.com/zoez7",
          "avatar": "https://avatars.githubusercontent.com/u/35669350"
        }
      ]
    },
    {
      "author": "majd",
      "repo": "ipatool",
      "avatar": "https://github.com/majd.png",
      "repo_link": "https://github.com/majd/ipatool",
      "desc": "Command-line tool that allows you to search for iOS, iPadOS, tvOS, visionOS, and macOS apps on the App Store, and download .ipa or macOS .pkg app packages.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 953,
      "added_stars": 1529,
      "builtBy": [
        {
          "username": "majd",
          "href": "https://github.com/majd",
          "avatar": "https://avatars.githubusercontent.com/u/1644696"
        },
        {
          "username": "ViRb3",
          "href": "https://github.com/ViRb3",
          "avatar": "https://avatars.githubusercontent.com/u/2650170"
        },
        {
          "username": "tux-mind",
          "href": "https://github.com/tux-mind",
          "avatar": "https://avatars.githubusercontent.com/u/1824153"
        },
        {
          "username": "testwill",
          "href": "https://github.com/testwill",
          "avatar": "https://avatars.githubusercontent.com/u/8717479"
        }
      ]
    },
    {
      "author": "vllm-project",
      "repo": "semantic-router",
      "avatar": "https://github.com/vllm-project.png",
      "repo_link": "https://github.com/vllm-project/semantic-router",
      "desc": "A programmable Mixture-of-Models router for heterogeneous LLM inference",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 980,
      "added_stars": 599,
      "builtBy": [
        {
          "username": "Xunzhuo",
          "href": "https://github.com/Xunzhuo",
          "avatar": "https://avatars.githubusercontent.com/u/48784001"
        },
        {
          "username": "rootfs",
          "href": "https://github.com/rootfs",
          "avatar": "https://avatars.githubusercontent.com/u/7062400"
        },
        {
          "username": "AayushSaini101",
          "href": "https://github.com/AayushSaini101",
          "avatar": "https://avatars.githubusercontent.com/u/60972989"
        },
        {
          "username": "wilsonwu",
          "href": "https://github.com/wilsonwu",
          "avatar": "https://avatars.githubusercontent.com/u/1269496"
        }
      ]
    },
    {
      "author": "theagentrouter",
      "repo": "agent-router",
      "avatar": "https://github.com/theagentrouter.png",
      "repo_link": "https://github.com/theagentrouter/agent-router",
      "desc": "Manages Unified Access to Generative AI Services built on Envoy Gateway",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 394,
      "added_stars": 190,
      "builtBy": [
        {
          "username": "mathetake",
          "href": "https://github.com/mathetake",
          "avatar": "https://avatars.githubusercontent.com/u/13513977"
        },
        {
          "username": "nacx",
          "href": "https://github.com/nacx",
          "avatar": "https://avatars.githubusercontent.com/u/446705"
        },
        {
          "username": "yuzisun",
          "href": "https://github.com/yuzisun",
          "avatar": "https://avatars.githubusercontent.com/u/7662095"
        },
        {
          "username": "missBerg",
          "href": "https://github.com/missBerg",
          "avatar": "https://avatars.githubusercontent.com/u/17533717"
        }
      ]
    },
    {
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 251,
      "added_stars": 2683,
      "builtBy": [
        {
          "username": "asciimoo",
          "href": "https://github.com/asciimoo",
          "avatar": "https://avatars.githubusercontent.com/u/20240"
        },
        {
          "username": "4evy",
          "href": "https://github.com/4evy",
          "avatar": "https://avatars.githubusercontent.com/u/57304299"
        },
        {
          "username": "ISSOtm",
          "href": "https://github.com/ISSOtm",
          "avatar": "https://avatars.githubusercontent.com/u/15271137"
        },
        {
          "username": "Shadowbee27",
          "href": "https://github.com/Shadowbee27",
          "avatar": "https://avatars.githubusercontent.com/u/169397554"
        }
      ]
    },
    {
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1052,
      "added_stars": 1095,
      "builtBy": [
        {
          "username": "henrygd",
          "href": "https://github.com/henrygd",
          "avatar": "https://avatars.githubusercontent.com/u/8519632"
        },
        {
          "username": "svenvg93",
          "href": "https://github.com/svenvg93",
          "avatar": "https://avatars.githubusercontent.com/u/4511676"
        },
        {
          "username": "a-mnich",
          "href": "https://github.com/a-mnich",
          "avatar": "https://avatars.githubusercontent.com/u/56564725"
        },
        {
          "username": "stanol",
          "href": "https://github.com/stanol",
          "avatar": "https://avatars.githubusercontent.com/u/27770896"
        }
      ]
    },
    {
      "author": "coder",
      "repo": "coder",
      "avatar": "https://github.com/coder.png",
      "repo_link": "https://github.com/coder/coder",
      "desc": "Secure environments for developers and their agents",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1592,
      "added_stars": 2620,
      "builtBy": [
        {
          "username": "kylecarbs",
          "href": "https://github.com/kylecarbs",
          "avatar": "https://avatars.githubusercontent.com/u/7122116"
        },
        {
          "username": "mafredri",
          "href": "https://github.com/mafredri",
          "avatar": "https://avatars.githubusercontent.com/u/147409"
        },
        {
          "username": "johnstcn",
          "href": "https://github.com/johnstcn",
          "avatar": "https://avatars.githubusercontent.com/u/4949514"
        },
        {
          "username": "Emyrk",
          "href": "https://github.com/Emyrk",
          "avatar": "https://avatars.githubusercontent.com/u/5446298"
        }
      ]
    },
    {
      "author": "gtsteffaniak",
      "repo": "filebrowser",
      "avatar": "https://github.com/gtsteffaniak.png",
      "repo_link": "https://github.com/gtsteffaniak/filebrowser",
      "desc": "📂 Web File Browser",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 446,
      "added_stars": 574,
      "builtBy": [
        {
          "username": "gtsteffaniak",
          "href": "https://github.com/gtsteffaniak",
          "avatar": "https://avatars.githubusercontent.com/u/42989099"
        },
        {
          "username": "Kurami32",
          "href": "https://github.com/Kurami32",
          "avatar": "https://avatars.githubusercontent.com/u/178341547"
        },
        {
          "username": "Stephan-P",
          "href": "https://github.com/Stephan-P",
          "avatar": "https://avatars.githubusercontent.com/u/10008599"
        },
        {
          "username": "pyroch",
          "href": "https://github.com/pyroch",
          "avatar": "https://avatars.githubusercontent.com/u/5215882"
        }
      ]
    },
    {
      "author": "cloudflare",
      "repo": "cloudflared",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflared",
      "desc": "Cloudflare Tunnel client",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1457,
      "added_stars": 564,
      "builtBy": [
        {
          "username": "chungthuang",
          "href": "https://github.com/chungthuang",
          "avatar": "https://avatars.githubusercontent.com/u/7826979"
        },
        {
          "username": "DevinCarr",
          "href": "https://github.com/DevinCarr",
          "avatar": "https://avatars.githubusercontent.com/u/4468678"
        },
        {
          "username": "adamchalmers",
          "href": "https://github.com/adamchalmers",
          "avatar": "https://avatars.githubusercontent.com/u/5407457"
        },
        {
          "username": "sudarshan-reddy",
          "href": "https://github.com/sudarshan-reddy",
          "avatar": "https://avatars.githubusercontent.com/u/12325664"
        },
        {
          "username": "ipostelnik",
          "href": "https://github.com/ipostelnik",
          "avatar": "https://avatars.githubusercontent.com/u/308114"
        }
      ]
    },
    {
      "author": "weave-os",
      "repo": "router",
      "avatar": "https://github.com/weave-os.png",
      "repo_link": "https://github.com/weave-os/router",
      "desc": "Model router for agentic systems. Routes every prompt to the right model in <50ms. Cut costs 40-70% with just an endpoint change.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 143,
      "added_stars": 3755,
      "builtBy": [
        {
          "username": "steventohme",
          "href": "https://github.com/steventohme",
          "avatar": "https://avatars.githubusercontent.com/u/56594084"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "aminsamir45",
          "href": "https://github.com/aminsamir45",
          "avatar": "https://avatars.githubusercontent.com/u/115834029"
        },
        {
          "username": "a-churchill",
          "href": "https://github.com/a-churchill",
          "avatar": "https://avatars.githubusercontent.com/u/18105223"
        }
      ]
    },
    {
      "author": "authelia",
      "repo": "authelia",
      "avatar": "https://github.com/authelia.png",
      "repo_link": "https://github.com/authelia/authelia",
      "desc": "The Single Sign-On Multi-Factor portal for web apps. OpenID Certified™ and Post-Quantum Cryptography Ready.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1494,
      "added_stars": 432,
      "builtBy": [
        {
          "username": "james-d-elliott",
          "href": "https://github.com/james-d-elliott",
          "avatar": "https://avatars.githubusercontent.com/u/3903683"
        },
        {
          "username": "nightah",
          "href": "https://github.com/nightah",
          "avatar": "https://avatars.githubusercontent.com/u/3339418"
        },
        {
          "username": "clems4ever",
          "href": "https://github.com/clems4ever",
          "avatar": "https://avatars.githubusercontent.com/u/3193257"
        },
        {
          "username": "renovate-bot",
          "href": "https://github.com/renovate-bot",
          "avatar": "https://avatars.githubusercontent.com/u/25180681"
        }
      ]
    },
    {
      "author": "projectdiscovery",
      "repo": "katana",
      "avatar": "https://github.com/projectdiscovery.png",
      "repo_link": "https://github.com/projectdiscovery/katana",
      "desc": "A next-generation crawling and spidering framework.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1188,
      "added_stars": 263,
      "builtBy": [
        {
          "username": "Mzack9999",
          "href": "https://github.com/Mzack9999",
          "avatar": "https://avatars.githubusercontent.com/u/13421144"
        },
        {
          "username": "dogancanbakir",
          "href": "https://github.com/dogancanbakir",
          "avatar": "https://avatars.githubusercontent.com/u/65292895"
        },
        {
          "username": "ehsandeep",
          "href": "https://github.com/ehsandeep",
          "avatar": "https://avatars.githubusercontent.com/u/8293321"
        },
        {
          "username": "geeknik",
          "href": "https://github.com/geeknik",
          "avatar": "https://avatars.githubusercontent.com/u/466878"
        }
      ]
    },
    {
      "author": "semaphoreui",
      "repo": "semaphore",
      "avatar": "https://github.com/semaphoreui.png",
      "repo_link": "https://github.com/semaphoreui/semaphore",
      "desc": "Modern UI and powerful API for Ansible, Terraform/OpenTofu/Terragrunt, PowerShell and other DevOps tools.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1316,
      "added_stars": 153,
      "builtBy": [
        {
          "username": "fiftin",
          "href": "https://github.com/fiftin",
          "avatar": "https://avatars.githubusercontent.com/u/914224"
        },
        {
          "username": "matejkramny",
          "href": "https://github.com/matejkramny",
          "avatar": "https://avatars.githubusercontent.com/u/797608"
        },
        {
          "username": "twhiston",
          "href": "https://github.com/twhiston",
          "avatar": "https://avatars.githubusercontent.com/u/17698613"
        },
        {
          "username": "strangeman",
          "href": "https://github.com/strangeman",
          "avatar": "https://avatars.githubusercontent.com/u/1083576"
        }
      ]
    },
    {
      "author": "danielmiessler",
      "repo": "Fabric",
      "avatar": "https://github.com/danielmiessler.png",
      "repo_link": "https://github.com/danielmiessler/Fabric",
      "desc": "Fabric is an open-source framework for augmenting humans using AI. It provides a modular system for solving specific problems using a crowdsourced set of AI prompts that can be used anywhere.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4285,
      "added_stars": 636,
      "builtBy": [
        {
          "username": "ksylvan",
          "href": "https://github.com/ksylvan",
          "avatar": "https://avatars.githubusercontent.com/u/1226059"
        },
        {
          "username": "danielmiessler",
          "href": "https://github.com/danielmiessler",
          "avatar": "https://avatars.githubusercontent.com/u/50654"
        },
        {
          "username": "eugeis",
          "href": "https://github.com/eugeis",
          "avatar": "https://avatars.githubusercontent.com/u/609363"
        },
        {
          "username": "xssdoctor",
          "href": "https://github.com/xssdoctor",
          "avatar": "https://avatars.githubusercontent.com/u/9218431"
        }
      ]
    },
    {
      "author": "glanceapp",
      "repo": "glance",
      "avatar": "https://github.com/glanceapp.png",
      "repo_link": "https://github.com/glanceapp/glance",
      "desc": "A self-hosted dashboard that puts all your feeds in one place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1470,
      "added_stars": 675,
      "builtBy": [
        {
          "username": "svilenmarkov",
          "href": "https://github.com/svilenmarkov",
          "avatar": "https://avatars.githubusercontent.com/u/7613769"
        },
        {
          "username": "ralphocdol",
          "href": "https://github.com/ralphocdol",
          "avatar": "https://avatars.githubusercontent.com/u/31056871"
        },
        {
          "username": "c0smicdev",
          "href": "https://github.com/c0smicdev",
          "avatar": "https://avatars.githubusercontent.com/u/161938764"
        },
        {
          "username": "wfg",
          "href": "https://github.com/wfg",
          "avatar": "https://avatars.githubusercontent.com/u/22161283"
        },
        {
          "username": "DVDAndroid",
          "href": "https://github.com/DVDAndroid",
          "avatar": "https://avatars.githubusercontent.com/u/6277172"
        }
      ]
    },
    {
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3218,
      "added_stars": 3096,
      "builtBy": [
        {
          "username": "sirozha",
          "href": "https://github.com/sirozha",
          "avatar": "https://avatars.githubusercontent.com/u/7765123"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "asdek",
          "href": "https://github.com/asdek",
          "avatar": "https://avatars.githubusercontent.com/u/4257336"
        },
        {
          "username": "mason5052",
          "href": "https://github.com/mason5052",
          "avatar": "https://avatars.githubusercontent.com/u/52062353"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "seaweedfs",
      "repo": "seaweedfs",
      "avatar": "https://github.com/seaweedfs.png",
      "repo_link": "https://github.com/seaweedfs/seaweedfs",
      "desc": "SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3011,
      "added_stars": 788,
      "builtBy": [
        {
          "username": "chrislusf",
          "href": "https://github.com/chrislusf",
          "avatar": "https://avatars.githubusercontent.com/u/1543151"
        },
        {
          "username": "kmlebedev",
          "href": "https://github.com/kmlebedev",
          "avatar": "https://avatars.githubusercontent.com/u/9497591"
        },
        {
          "username": "chrisluuber",
          "href": "https://github.com/chrisluuber",
          "avatar": "https://avatars.githubusercontent.com/u/37195999"
        }
      ]
    },
    {
      "author": "kopia",
      "repo": "kopia",
      "avatar": "https://github.com/kopia.png",
      "repo_link": "https://github.com/kopia/kopia",
      "desc": "Cross-platform backup tool for Windows, macOS & Linux with fast, incremental backups, client-side end-to-end encryption, compression and data deduplication. CLI and GUI included.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 738,
      "added_stars": 264,
      "builtBy": [
        {
          "username": "jkowalski",
          "href": "https://github.com/jkowalski",
          "avatar": "https://avatars.githubusercontent.com/u/249880"
        },
        {
          "username": "julio-lopez",
          "href": "https://github.com/julio-lopez",
          "avatar": "https://avatars.githubusercontent.com/u/1953782"
        },
        {
          "username": "kopia-builder",
          "href": "https://github.com/kopia-builder",
          "avatar": "https://avatars.githubusercontent.com/u/82682015"
        },
        {
          "username": "redgoat650",
          "href": "https://github.com/redgoat650",
          "avatar": "https://avatars.githubusercontent.com/u/12399758"
        }
      ]
    },
    {
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4655,
      "added_stars": 1190,
      "builtBy": [
        {
          "username": "nekohasekai",
          "href": "https://github.com/nekohasekai",
          "avatar": "https://avatars.githubusercontent.com/u/56506714"
        },
        {
          "username": "macronut",
          "href": "https://github.com/macronut",
          "avatar": "https://avatars.githubusercontent.com/u/4027187"
        },
        {
          "username": "flyzstu",
          "href": "https://github.com/flyzstu",
          "avatar": "https://avatars.githubusercontent.com/u/94161727"
        },
        {
          "username": "Mahdi-zarei",
          "href": "https://github.com/Mahdi-zarei",
          "avatar": "https://avatars.githubusercontent.com/u/80265960"
        },
        {
          "username": "NagaseMinato",
          "href": "https://github.com/NagaseMinato",
          "avatar": "https://avatars.githubusercontent.com/u/80738880"
        }
      ]
    },
    {
      "author": "rorkai",
      "repo": "App-Store-Connect-CLI",
      "avatar": "https://github.com/rorkai.png",
      "repo_link": "https://github.com/rorkai/App-Store-Connect-CLI",
      "desc": "Fast, scriptable CLI for the App Store Connect API. Automate TestFlight, builds, submissions, signing, analytics, screenshots, subscriptions, and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 628,
      "added_stars": 1118,
      "builtBy": [
        {
          "username": "rudrankriyam",
          "href": "https://github.com/rudrankriyam",
          "avatar": "https://avatars.githubusercontent.com/u/30552772"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "mithileshchellappan",
          "href": "https://github.com/mithileshchellappan",
          "avatar": "https://avatars.githubusercontent.com/u/35962266"
        },
        {
          "username": "Abdo-codes",
          "href": "https://github.com/Abdo-codes",
          "avatar": "https://avatars.githubusercontent.com/u/80545944"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "navidrome",
      "repo": "navidrome",
      "avatar": "https://github.com/navidrome.png",
      "repo_link": "https://github.com/navidrome/navidrome",
      "desc": "🎧 Your Personal Streaming Service",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1729,
      "added_stars": 759,
      "builtBy": [
        {
          "username": "deluan",
          "href": "https://github.com/deluan",
          "avatar": "https://avatars.githubusercontent.com/u/331353"
        },
        {
          "username": "kgarner7",
          "href": "https://github.com/kgarner7",
          "avatar": "https://avatars.githubusercontent.com/u/17521368"
        },
        {
          "username": "caiocotts",
          "href": "https://github.com/caiocotts",
          "avatar": "https://avatars.githubusercontent.com/u/31974888"
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
      "author": "superdesigndev",
      "repo": "treg",
      "avatar": "https://github.com/superdesigndev.png",
      "repo_link": "https://github.com/superdesigndev/treg",
      "desc": "OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 294,
      "added_stars": 2945,
      "builtBy": [
        {
          "username": "JayZeeDesign",
          "href": "https://github.com/JayZeeDesign",
          "avatar": "https://avatars.githubusercontent.com/u/22532527"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "stonexer",
          "href": "https://github.com/stonexer",
          "avatar": "https://avatars.githubusercontent.com/u/6255130"
        },
        {
          "username": "unclecode",
          "href": "https://github.com/unclecode",
          "avatar": "https://avatars.githubusercontent.com/u/12494079"
        },
        {
          "username": "shehjad-dev",
          "href": "https://github.com/shehjad-dev",
          "avatar": "https://avatars.githubusercontent.com/u/64325867"
        }
      ]
    },
    {
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4855,
      "added_stars": 27329,
      "builtBy": [
        {
          "username": "debpalash",
          "href": "https://github.com/debpalash",
          "avatar": "https://avatars.githubusercontent.com/u/4178343"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "kevin9327",
          "href": "https://github.com/kevin9327",
          "avatar": "https://avatars.githubusercontent.com/u/5299031"
        },
        {
          "username": "jaketame",
          "href": "https://github.com/jaketame",
          "avatar": "https://avatars.githubusercontent.com/u/1787973"
        },
        {
          "username": "velixio",
          "href": "https://github.com/velixio",
          "avatar": "https://avatars.githubusercontent.com/u/270455167"
        }
      ]
    },
    {
      "author": "pollen-robotics",
      "repo": "microduck_rl",
      "avatar": "https://github.com/pollen-robotics.png",
      "repo_link": "https://github.com/pollen-robotics/microduck_rl",
      "desc": "RL training environments for Microduck (mjlab)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 496,
      "added_stars": 2276,
      "builtBy": [
        {
          "username": "apirrone",
          "href": "https://github.com/apirrone",
          "avatar": "https://avatars.githubusercontent.com/u/6552564"
        },
        {
          "username": "Drenayaz",
          "href": "https://github.com/Drenayaz",
          "avatar": "https://avatars.githubusercontent.com/u/72405531"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "darkseed",
          "href": "https://github.com/darkseed",
          "avatar": "https://avatars.githubusercontent.com/u/76959"
        },
        {
          "username": "tfrere",
          "href": "https://github.com/tfrere",
          "avatar": "https://avatars.githubusercontent.com/u/6255609"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5470,
      "added_stars": 3340,
      "builtBy": [
        {
          "username": "mihilmy",
          "href": "https://github.com/mihilmy",
          "avatar": "https://avatars.githubusercontent.com/u/5457787"
        },
        {
          "username": "cxyback",
          "href": "https://github.com/cxyback",
          "avatar": "https://avatars.githubusercontent.com/u/174142461"
        },
        {
          "username": "manar-ant",
          "href": "https://github.com/manar-ant",
          "avatar": "https://avatars.githubusercontent.com/u/250030384"
        },
        {
          "username": "tobinsouth",
          "href": "https://github.com/tobinsouth",
          "avatar": "https://avatars.githubusercontent.com/u/32489862"
        },
        {
          "username": "viveknair",
          "href": "https://github.com/viveknair",
          "avatar": "https://avatars.githubusercontent.com/u/1203039"
        }
      ]
    },
    {
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2981,
      "added_stars": 26939,
      "builtBy": [
        {
          "username": "ayghri",
          "href": "https://github.com/ayghri",
          "avatar": "https://avatars.githubusercontent.com/u/32200675"
        },
        {
          "username": "thejesh23",
          "href": "https://github.com/thejesh23",
          "avatar": "https://avatars.githubusercontent.com/u/35212698"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "SillyDark",
          "href": "https://github.com/SillyDark",
          "avatar": "https://avatars.githubusercontent.com/u/116559191"
        },
        {
          "username": "commie70",
          "href": "https://github.com/commie70",
          "avatar": "https://avatars.githubusercontent.com/u/57289446"
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
      "forks": 3263,
      "added_stars": 5681,
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
          "username": "darkpowerxo",
          "href": "https://github.com/darkpowerxo",
          "avatar": "https://avatars.githubusercontent.com/u/1857776"
        },
        {
          "username": "JustinGuese",
          "href": "https://github.com/JustinGuese",
          "avatar": "https://avatars.githubusercontent.com/u/9588843"
        }
      ]
    },
    {
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8162,
      "added_stars": 7876,
      "builtBy": [
        {
          "username": "jingyaogong",
          "href": "https://github.com/jingyaogong",
          "avatar": "https://avatars.githubusercontent.com/u/62287848"
        },
        {
          "username": "iomgaa-ycz",
          "href": "https://github.com/iomgaa-ycz",
          "avatar": "https://avatars.githubusercontent.com/u/124225682"
        },
        {
          "username": "Linxiushen",
          "href": "https://github.com/Linxiushen",
          "avatar": "https://avatars.githubusercontent.com/u/142557582"
        },
        {
          "username": "basil-k-aji-dev",
          "href": "https://github.com/basil-k-aji-dev",
          "avatar": "https://avatars.githubusercontent.com/u/70605804"
        },
        {
          "username": "readlnh",
          "href": "https://github.com/readlnh",
          "avatar": "https://avatars.githubusercontent.com/u/16349082"
        }
      ]
    },
    {
      "author": "MakazhanAlpamys",
      "repo": "Soup",
      "avatar": "https://github.com/MakazhanAlpamys.png",
      "repo_link": "https://github.com/MakazhanAlpamys/Soup",
      "desc": "Fine-tune LLMs from one YAML. Layer streaming trains an 8B model on a 4 GB laptop GPU.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1193,
      "added_stars": 4140,
      "builtBy": [
        {
          "username": "MakazhanAlpamys",
          "href": "https://github.com/MakazhanAlpamys",
          "avatar": "https://avatars.githubusercontent.com/u/188336071"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Srinivasan8888",
          "href": "https://github.com/Srinivasan8888",
          "avatar": "https://avatars.githubusercontent.com/u/92676627"
        },
        {
          "username": "Amix29",
          "href": "https://github.com/Amix29",
          "avatar": "https://avatars.githubusercontent.com/u/154662592"
        },
        {
          "username": "AmirF194",
          "href": "https://github.com/AmirF194",
          "avatar": "https://avatars.githubusercontent.com/u/26088029"
        }
      ]
    },
    {
      "author": "experientiallabs",
      "repo": "experiential",
      "avatar": "https://github.com/experientiallabs.png",
      "repo_link": "https://github.com/experientiallabs/experiential",
      "desc": "Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend better models, and train a specialized model you own.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 211,
      "added_stars": 6829,
      "builtBy": [
        {
          "username": "SilenNaihin",
          "href": "https://github.com/SilenNaihin",
          "avatar": "https://avatars.githubusercontent.com/u/44129612"
        },
        {
          "username": "kfallah",
          "href": "https://github.com/kfallah",
          "avatar": "https://avatars.githubusercontent.com/u/9440350"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4233,
      "added_stars": 11881,
      "builtBy": [
        {
          "username": "timothykassis",
          "href": "https://github.com/timothykassis",
          "avatar": "https://avatars.githubusercontent.com/u/9168908"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "borealBytes",
          "href": "https://github.com/borealBytes",
          "avatar": "https://avatars.githubusercontent.com/u/206480607"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "TencentCloud",
      "repo": "Octop",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/Octop",
      "desc": "A smarter, self-hosted AI assistant — multi-user, multi-agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 656,
      "added_stars": 4067,
      "builtBy": [
        {
          "username": "jubaoliang-tencent",
          "href": "https://github.com/jubaoliang-tencent",
          "avatar": "https://avatars.githubusercontent.com/u/309035352"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "jubaoliang",
          "href": "https://github.com/jubaoliang",
          "avatar": "https://avatars.githubusercontent.com/u/222386738"
        },
        {
          "username": "liukewia",
          "href": "https://github.com/liukewia",
          "avatar": "https://avatars.githubusercontent.com/u/50489030"
        },
        {
          "username": "huangcheng",
          "href": "https://github.com/huangcheng",
          "avatar": "https://avatars.githubusercontent.com/u/2804393"
        }
      ]
    },
    {
      "author": "handsomestWei",
      "repo": "patent-disclosure-skill",
      "avatar": "https://github.com/handsomestWei.png",
      "repo_link": "https://github.com/handsomestWei/patent-disclosure-skill",
      "desc": "中国专利.skill：专利点挖掘与交底书（发明/实用/外观）编写，通俗解读专利，嗅探政策动向，辅助审查答复。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1077,
      "added_stars": 5092,
      "builtBy": [
        {
          "username": "handsomestWei",
          "href": "https://github.com/handsomestWei",
          "avatar": "https://avatars.githubusercontent.com/u/36500279"
        },
        {
          "username": "yizchu",
          "href": "https://github.com/yizchu",
          "avatar": "https://avatars.githubusercontent.com/u/130751472"
        },
        {
          "username": "x7peeps",
          "href": "https://github.com/x7peeps",
          "avatar": "https://avatars.githubusercontent.com/u/9640837"
        },
        {
          "username": "xiaofengShi",
          "href": "https://github.com/xiaofengShi",
          "avatar": "https://avatars.githubusercontent.com/u/30405889"
        },
        {
          "username": "dajiaohuang",
          "href": "https://github.com/dajiaohuang",
          "avatar": "https://avatars.githubusercontent.com/u/108231307"
        }
      ]
    },
    {
      "author": "strands-agents",
      "repo": "harness-sdk",
      "avatar": "https://github.com/strands-agents.png",
      "repo_link": "https://github.com/strands-agents/harness-sdk",
      "desc": "Build an agent harness and control it end-to-end. Open-source SDK for production AI agents in Python & TypeScript - any model, any cloud.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1270,
      "added_stars": 1474,
      "builtBy": [
        {
          "username": "zastrowm",
          "href": "https://github.com/zastrowm",
          "avatar": "https://avatars.githubusercontent.com/u/3211021"
        },
        {
          "username": "pgrayy",
          "href": "https://github.com/pgrayy",
          "avatar": "https://avatars.githubusercontent.com/u/204914194"
        },
        {
          "username": "strands-agent",
          "href": "https://github.com/strands-agent",
          "avatar": "https://avatars.githubusercontent.com/u/217235299"
        },
        {
          "username": "yonib05",
          "href": "https://github.com/yonib05",
          "avatar": "https://avatars.githubusercontent.com/u/5503597"
        }
      ]
    },
    {
      "author": "rlaope",
      "repo": "oh-my-hermes",
      "avatar": "https://github.com/rlaope.png",
      "repo_link": "https://github.com/rlaope/oh-my-hermes",
      "desc": "All in one plugin for Hermes Agent ⚚ the coding intelligence, a long-term memory system and model optimized workflow packages",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 234,
      "added_stars": 1837,
      "builtBy": [
        {
          "username": "rlaope",
          "href": "https://github.com/rlaope",
          "avatar": "https://avatars.githubusercontent.com/u/105429536"
        },
        {
          "username": "sionic-khope",
          "href": "https://github.com/sionic-khope",
          "avatar": "https://avatars.githubusercontent.com/u/295791202"
        },
        {
          "username": "frirenai",
          "href": "https://github.com/frirenai",
          "avatar": "https://avatars.githubusercontent.com/u/295354495"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "sisyphus-dev-ai",
          "href": "https://github.com/sisyphus-dev-ai",
          "avatar": "https://avatars.githubusercontent.com/u/238992291"
        }
      ]
    },
    {
      "author": "jiji262",
      "repo": "douyin-downloader",
      "avatar": "https://github.com/jiji262.png",
      "repo_link": "https://github.com/jiji262/douyin-downloader",
      "desc": "A practical Douyin downloader for both single-item and profile batch downloads, with progress display, retries, SQLite deduplication, and browser fallback support. 抖音批量下载工具，去水印，支持视频、图集、合集、音乐(原声)。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1861,
      "added_stars": 2677,
      "builtBy": [
        {
          "username": "jiji262",
          "href": "https://github.com/jiji262",
          "avatar": "https://avatars.githubusercontent.com/u/168751"
        },
        {
          "username": "dennistodo",
          "href": "https://github.com/dennistodo",
          "avatar": "https://avatars.githubusercontent.com/u/213367755"
        },
        {
          "username": "craft-agents-bot",
          "href": "https://github.com/craft-agents-bot",
          "avatar": "https://avatars.githubusercontent.com/u/255798083"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1607,
      "added_stars": 3445,
      "builtBy": [
        {
          "username": "rng1995",
          "href": "https://github.com/rng1995",
          "avatar": "https://avatars.githubusercontent.com/u/32655573"
        },
        {
          "username": "keshprad",
          "href": "https://github.com/keshprad",
          "avatar": "https://avatars.githubusercontent.com/u/32313895"
        },
        {
          "username": "mohgupta-ship-it",
          "href": "https://github.com/mohgupta-ship-it",
          "avatar": "https://avatars.githubusercontent.com/u/269879782"
        },
        {
          "username": "rodboev",
          "href": "https://github.com/rodboev",
          "avatar": "https://avatars.githubusercontent.com/u/106971"
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
      "forks": 3649,
      "added_stars": 4408,
      "builtBy": [
        {
          "username": "p-e-w",
          "href": "https://github.com/p-e-w",
          "avatar": "https://avatars.githubusercontent.com/u/2702526"
        },
        {
          "username": "Vinay-Umrethe",
          "href": "https://github.com/Vinay-Umrethe",
          "avatar": "https://avatars.githubusercontent.com/u/175500353"
        },
        {
          "username": "anrp",
          "href": "https://github.com/anrp",
          "avatar": "https://avatars.githubusercontent.com/u/1325515"
        },
        {
          "username": "spikymoth",
          "href": "https://github.com/spikymoth",
          "avatar": "https://avatars.githubusercontent.com/u/133602907"
        }
      ]
    },
    {
      "author": "dgtlmoon",
      "repo": "changedetection.io",
      "avatar": "https://github.com/dgtlmoon.png",
      "repo_link": "https://github.com/dgtlmoon/changedetection.io",
      "desc": "Best and simplest tool for website change detection, web page monitoring, and website change alerts. Perfect for tracking content changes, price drops, restock alerts, and website defacement monitoring—all for free or enjoy our SaaS plan!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2102,
      "added_stars": 1384,
      "builtBy": [
        {
          "username": "dgtlmoon",
          "href": "https://github.com/dgtlmoon",
          "avatar": "https://avatars.githubusercontent.com/u/275001"
        },
        {
          "username": "skkzsh",
          "href": "https://github.com/skkzsh",
          "avatar": "https://avatars.githubusercontent.com/u/1439870"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Constantin1489",
          "href": "https://github.com/Constantin1489",
          "avatar": "https://avatars.githubusercontent.com/u/61624808"
        }
      ]
    },
    {
      "author": "suitenumerique",
      "repo": "docs",
      "avatar": "https://github.com/suitenumerique.png",
      "repo_link": "https://github.com/suitenumerique/docs",
      "desc": "Docs is an open-source text editor: web-native, made for real-time collaboration, cleanly structured documents and sub-documents with full ownership of your data. Built to scale with Django and React.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 647,
      "added_stars": 144,
      "builtBy": [
        {
          "username": "AntoLC",
          "href": "https://github.com/AntoLC",
          "avatar": "https://avatars.githubusercontent.com/u/25994652"
        },
        {
          "username": "lunika",
          "href": "https://github.com/lunika",
          "avatar": "https://avatars.githubusercontent.com/u/767834"
        },
        {
          "username": "Ovgodd",
          "href": "https://github.com/Ovgodd",
          "avatar": "https://avatars.githubusercontent.com/u/65817745"
        },
        {
          "username": "sampaccoud",
          "href": "https://github.com/sampaccoud",
          "avatar": "https://avatars.githubusercontent.com/u/1427165"
        }
      ]
    },
    {
      "author": "abi",
      "repo": "screenshot-to-code",
      "avatar": "https://github.com/abi.png",
      "repo_link": "https://github.com/abi/screenshot-to-code",
      "desc": "Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9752,
      "added_stars": 4945,
      "builtBy": [
        {
          "username": "abi",
          "href": "https://github.com/abi",
          "avatar": "https://avatars.githubusercontent.com/u/23818"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "clean99",
          "href": "https://github.com/clean99",
          "avatar": "https://avatars.githubusercontent.com/u/53188310"
        },
        {
          "username": "kachbit",
          "href": "https://github.com/kachbit",
          "avatar": "https://avatars.githubusercontent.com/u/59241904"
        }
      ]
    },
    {
      "author": "petergyang",
      "repo": "no-ai-slop",
      "avatar": "https://github.com/petergyang.png",
      "repo_link": "https://github.com/petergyang/no-ai-slop",
      "desc": "Removes 20+ patterns of AI slop from any piece of writing.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 782,
      "added_stars": 5339,
      "builtBy": [
        {
          "username": "petergyang",
          "href": "https://github.com/petergyang",
          "avatar": "https://avatars.githubusercontent.com/u/2383268"
        },
        {
          "username": "amateurhuman",
          "href": "https://github.com/amateurhuman",
          "avatar": "https://avatars.githubusercontent.com/u/374244"
        },
        {
          "username": "tmchow",
          "href": "https://github.com/tmchow",
          "avatar": "https://avatars.githubusercontent.com/u/517103"
        },
        {
          "username": "tymrtn",
          "href": "https://github.com/tymrtn",
          "avatar": "https://avatars.githubusercontent.com/u/4305058"
        },
        {
          "username": "CooperSheroy",
          "href": "https://github.com/CooperSheroy",
          "avatar": "https://avatars.githubusercontent.com/u/59650384"
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
      "title": "Node.JS Built-Ins That Replaced NPM Packages",
      "url": "https://flaviocopes.com/node-builtins/",
      "upvotes": "2",
      "comments": "1",
      "created": "2026-09-24T23:00:59.000Z"
    },
    {
      "title": "Tibetan-Singing-Bowls: Strike or rub a set of virtual Tibetan singing bowls - synthesized in the browser with Web Audio, with the beating overtones of the real thing",
      "url": "https://github.com/evoluteur/tibetan-singing-bowls",
      "upvotes": "3",
      "comments": "1",
      "created": "2026-09-22T05:46:13.000Z"
    },
    {
      "title": "Draw a mandala with mirrored symmetry and export it as PNG or SVG.",
      "url": "https://github.com/evoluteur/mandala-maker",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-20T01:15:18.000Z"
    },
    {
      "title": "Supapower - A sync engine that keeps a local PGlite database in sync with Supabase, inspired by PowerSync",
      "url": "https://github.com/aboviq/supapower",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-09-18T15:05:21.000Z"
    },
    {
      "title": "billboard.js 4.1.0: Live resizing, configurable subchart, React subpath & CSP-safe worker",
      "url": "https://netil.medium.com/billboard-js-4-1-0-live-resizing-configurable-subchart-react-subpath-csp-safe-worker-e1a6fd0ece88",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-16T07:28:53.000Z"
    },
    {
      "title": "From 1,256ms to 96ms: Fixing INP in a Massive React Dropdown",
      "url": "https://dev.to/subito/from-1256ms-to-96ms-fixing-inp-in-a-massive-react-dropdown-16l7",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-15T06:55:32.000Z"
    },
    {
      "title": "structured-filter-react: React component for structured queries",
      "url": "https://github.com/evoluteur/structured-filter-react",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-11T07:30:13.000Z"
    },
    {
      "title": "Cymatics: Play a frequency and watch the sand settle into its Chladni figure, computed from the wave equation",
      "url": "https://github.com/evoluteur/cymatics",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-09-09T01:45:36.000Z"
    },
    {
      "title": "Turn the five Platonic solids in 3D, show their duals, and read their measurements",
      "url": "https://github.com/evoluteur/platonic-solids",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-04T07:14:05.000Z"
    },
    {
      "title": "Sharing Application State in a URL",
      "url": "https://ivakin.dev/blog/state-in-url",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-09-02T15:52:29.000Z"
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
      "title": "Disappeared Since March: Taking a Long Break Was My Best Decision Yet",
      "description": "If you checked my profile recently, you probably noticed my page has been completely quiet since...",
      "url": "https://dev.to/maame-codes/disappeared-since-march-taking-a-long-break-was-my-best-decision-yet-1n45",
      "tags": "",
      "reactions": 79,
      "comments": 29,
      "reading_time": 2,
      "author": "maame-codes"
    },
    {
      "title": "Claude Opus 5.5 is now available on Google Cloud",
      "description": "Everyday complex tasks? No problem. Opus 5.5 handles long-running coding and knowledge work while...",
      "url": "https://dev.to/googleai/claude-opus-55-is-now-available-on-google-cloud-2oh",
      "tags": "claude, googlecloud",
      "reactions": 15,
      "comments": 0,
      "reading_time": 1,
      "author": "pugsandprincesses"
    },
    {
      "title": "What was your win this week!?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-odj",
      "tags": "weeklyretro",
      "reactions": 24,
      "comments": 10,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "This video is about how this video was made",
      "description": "This video (the script, the voice timings, the source code, the storyboard, the briefs the subagents...",
      "url": "https://dev.to/peter/this-video-is-about-how-this-video-was-made-42hl",
      "tags": "ai, claude, video, javascript",
      "reactions": 21,
      "comments": 4,
      "reading_time": 4,
      "author": "peter"
    },
    {
      "title": "Claude on Google Cloud workshop | NYC | 9/30",
      "description": "On Wednesday, September 30, Anthropic and Google Cloud are co-hosting a hands-on developer workshop...",
      "url": "https://dev.to/googleai/claude-on-google-cloud-workshop-nyc-930-17jl",
      "tags": "eventsinyourcity, claude, googlecloud, ai",
      "reactions": 14,
      "comments": 1,
      "reading_time": 1,
      "author": "pugsandprincesses"
    },
    {
      "title": "Deploying LiteLLM: An Open-Source AI Gateway",
      "description": "LiteLLM is an open-source AI gateway that provides a unified, OpenAI-compatible API for over 100...",
      "url": "https://dev.to/vultr/deploying-litellm-an-open-source-ai-gateway-2idp",
      "tags": "ai, llm, docker, postgres",
      "reactions": 9,
      "comments": 2,
      "reading_time": 8,
      "author": "sharmukh"
    },
    {
      "title": "Congrats to the DEV Weekend Challenge: Dog Days Edition Winners!",
      "description": "The results are in for our DEV Weekend Challenge: Dog Days Edition! Thank you for your patience while...",
      "url": "https://dev.to/devteam/congrats-to-the-dev-weekend-challenge-dog-days-edition-winners-300g",
      "tags": "devchallenge, weekendchallenge, hackathon, programming",
      "reactions": 81,
      "comments": 30,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "I Turned DEV.to Into a Walkable 3D Library — Debugging It Has Been a Nightmare",
      "description": "DEV Library is my idea of first-person 3D reimagining of DEV.to. Not a themed scene with some...",
      "url": "https://dev.to/mikachu/i-turned-devto-into-a-walkable-3d-library-debugging-it-has-been-a-nightmare-4lkd",
      "tags": "buildinpublic, webdev, nextjs, ai",
      "reactions": 69,
      "comments": 29,
      "reading_time": 7,
      "author": "mikachu"
    },
    {
      "title": "Welcome Thread - v 394",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-394-22l2",
      "tags": "welcome",
      "reactions": 68,
      "comments": 317,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "A 4 GB Laptop GPU vs a 6-Core CPU on Gemma 4, Re-Measured in ABBA Order: 4.1x",
      "description": "Gemma 4 E2B q4_0 served by llama.cpp on one laptop, CPU-only and on a GTX 1650 Ti, rebuilt on CUDA 13.4 and re-measured in CPU, GPU, GPU, CPU order with a temperature gate. The card takes decode by 4.14x, and run order moves the answer by about 2%.",
      "url": "https://dev.to/gde/a-4-gb-laptop-gpu-vs-a-6-core-cpu-on-gemma-4-re-measured-in-abba-order-41x-5g56",
      "tags": "gemma, llamacpp, cuda, benchmarking",
      "reactions": 10,
      "comments": 2,
      "reading_time": 11,
      "author": "xbill"
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
      "title": "Pragmatic Anthropomorphism, or: How to Talk to an Autocompleting Cricket",
      "url": "https://blog.lmorchard.com/2026/09/27/pragmatic-anthropomorphism/",
      "score": 1,
      "comments": 0,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "yidvju"
    },
    {
      "title": "What makes Lisp difficult to read?",
      "url": "https://paultm.nl/paren-thesis",
      "score": 8,
      "comments": 0,
      "tags": [
        "plt"
      ],
      "id": "fqype1"
    },
    {
      "title": "DogWood: Monitoring Policies using First Order Temporal Logic",
      "url": "https://aws.amazon.com/blogs/opensource/introducing-dogwood-runtime-verification-for-ai-agents/",
      "score": 2,
      "comments": 0,
      "tags": [
        "formalmethods",
        "programming"
      ],
      "id": "69mmo0"
    },
    {
      "title": "Fool's Expertise",
      "url": "https://bcantrill.dtrace.org/2026/09/27/fools-expertise/",
      "score": 10,
      "comments": 1,
      "tags": [
        "vibecoding"
      ],
      "id": "hjkktn"
    },
    {
      "title": "Expert asterisks",
      "url": "https://nedbatchelder.com/blog/202609/expert_asterisks",
      "score": 6,
      "comments": 0,
      "tags": [
        "culture",
        "practices"
      ],
      "id": "0knxvq"
    },
    {
      "title": "Replacing the old battery on rechargeable bike lights",
      "url": "https://jvns.ca/blog/2026/09/27/replacing-the-old-battery-on-rechargeable-bike-lights/",
      "score": 4,
      "comments": 2,
      "tags": [
        "hardware"
      ],
      "id": "pfzhxp"
    },
    {
      "title": "Syncing Rust GCC backend or how to test Murphy's law",
      "url": "https://blog.guillaume-gomez.fr/articles/2026-09-22+Syncing+Rust+GCC+backend+or+how+to+test+Murphy%27s+law",
      "score": 4,
      "comments": 0,
      "tags": [
        "rust"
      ],
      "id": "hy7ckt"
    },
    {
      "title": "What I believe about the future of software development",
      "url": "https://thorstenball.com/blog/2026/09/19/what-i-believe-about-the-future-of-software-development/",
      "score": 2,
      "comments": 3,
      "tags": [
        "vibecoding"
      ],
      "id": "edx1gf"
    },
    {
      "title": "EX-ARRR: Sailing the 0-click Seas",
      "url": "https://ironpeak.be/blog/ex-arrr-sailing-the-0-click-seas/",
      "score": -1,
      "comments": 0,
      "tags": [
        "ios",
        "mac",
        "security"
      ],
      "id": "qgsfdf"
    },
    {
      "title": "Dropping Swift entirely from our Bevy iOS crates",
      "url": "https://rustunit.com/blog/2026/09-04-bevy-ios-crates-objc2/",
      "score": 10,
      "comments": 2,
      "tags": [
        "release",
        "rust"
      ],
      "id": "nmksyw"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "teleforce",
      "descendants": 9,
      "id": 49873241,
      "kids": [
        49874052,
        49874120,
        49874015,
        49874290,
        49873732,
        49873626,
        49874170
      ],
      "score": 63,
      "time": 1790565833,
      "title": "Thinking fast and slow in AI: The role of metacognition (2021)",
      "type": "story",
      "url": "https://arxiv.org/abs/2110.01834"
    },
    {
      "by": "Eric_Gullichsen",
      "descendants": 187,
      "id": 49872723,
      "kids": [
        49873305,
        49873282,
        49873251,
        49874025,
        49873627,
        49874446,
        49872996,
        49873471,
        49873128,
        49873537,
        49873137,
        49872983,
        49872994,
        49874194,
        49873917,
        49873384,
        49873424,
        49874026,
        49873614,
        49873062,
        49872991,
        49873053,
        49874198,
        49873100,
        49873663,
        49873314,
        49873431,
        49873934,
        49873707,
        49873224,
        49872791,
        49873055,
        49872786,
        49874088,
        49873331,
        49872734,
        49873069,
        49873681,
        49873211,
        49873142
      ],
      "score": 457,
      "time": 1790561113,
      "title": "Owed a billion dollars in Nvidia stock",
      "type": "story",
      "url": "https://colo.to/nvidia-stock-narrative.html"
    },
    {
      "by": "gmays",
      "descendants": 202,
      "id": 49868830,
      "kids": [
        49869735,
        49870537,
        49869447,
        49869343,
        49869970,
        49870590,
        49871383,
        49870425,
        49869571,
        49869315,
        49870841,
        49869374,
        49869336,
        49870457,
        49872073,
        49871831,
        49872272,
        49870901,
        49872797,
        49870188,
        49869332,
        49870104,
        49871959,
        49871408,
        49871003,
        49869364,
        49870265,
        49869559,
        49871962,
        49869572,
        49869351,
        49869325,
        49871618,
        49869538,
        49869342,
        49872940,
        49869536,
        49869317,
        49869866
      ],
      "score": 430,
      "time": 1790530313,
      "title": "Ember-1",
      "type": "story",
      "url": "https://fireworks.ai/blog/ember-1"
    },
    {
      "by": "sancho-panza",
      "descendants": 588,
      "id": 49870367,
      "kids": [
        49870615,
        49874472,
        49870664,
        49871299,
        49870591,
        49870851,
        49870936,
        49871344,
        49870762,
        49874443,
        49872457,
        49870598,
        49874264,
        49871488,
        49874277,
        49870581,
        49870858,
        49870622,
        49872190,
        49871762,
        49874066,
        49873715,
        49871304,
        49871456,
        49874006,
        49870621,
        49871740,
        49871993,
        49874029,
        49872009,
        49871915,
        49870559,
        49870691,
        49872269,
        49872307,
        49872557,
        49872236,
        49872268,
        49872866,
        49870803,
        49871266,
        49870599,
        49874054,
        49870900,
        49871202,
        49872630,
        49871050,
        49873432,
        49871844,
        49871033,
        49872043,
        49871743,
        49872020,
        49873147,
        49870704,
        49873337,
        49872321,
        49872561,
        49872859,
        49871066,
        49870981,
        49870878,
        49872100,
        49870940,
        49872656,
        49872855,
        49870826,
        49871573,
        49872986,
        49871443,
        49873358,
        49871549,
        49873836,
        49871632,
        49874155,
        49872664,
        49872347,
        49870629,
        49874050,
        49870678,
        49872142,
        49870970,
        49871599,
        49870813,
        49873722,
        49870663,
        49870844,
        49870782,
        49873276,
        49872260,
        49872462,
        49872067,
        49871043,
        49871812,
        49870876,
        49873601,
        49870875,
        49871894,
        49871206,
        49872423,
        49871423,
        49870656,
        49872342,
        49871759,
        49871702,
        49871238,
        49871943,
        49871985,
        49872912,
        49870619,
        49871315,
        49872059,
        49870997,
        49871371,
        49870616,
        49872680,
        49870597,
        49872479,
        49871634,
        49871953,
        49871541,
        49871358,
        49871244,
        49871082,
        49870675,
        49870568,
        49872339,
        49871464,
        49871019,
        49870594,
        49871072,
        49871608,
        49872366,
        49872333,
        49872264,
        49871437,
        49871339,
        49870977,
        49872852,
        49873911,
        49873837,
        49872466,
        49870871,
        49870881,
        49870595,
        49872313,
        49870713,
        49871365,
        49871110,
        49870696,
        49870976,
        49871949
      ],
      "score": 1097,
      "time": 1790539974,
      "title": "When did Google get so weird?",
      "type": "story",
      "url": "https://sancho.bearblog.dev/google-weird/"
    },
    {
      "by": "evakhoury",
      "descendants": 13,
      "id": 49869755,
      "kids": [
        49874102,
        49874383,
        49869757,
        49874361,
        49873447
      ],
      "score": 46,
      "time": 1790535691,
      "title": "Malleable software: Restoring user agency in a world of locked-down apps (2025)",
      "type": "story",
      "url": "https://www.inkandswitch.com/essay/malleable-software/"
    },
    {
      "by": "midnightfish",
      "descendants": 36,
      "id": 49870070,
      "kids": [
        49870383,
        49870986,
        49870349,
        49870623,
        49873979,
        49870327,
        49870867,
        49871533,
        49874023,
        49870243
      ],
      "score": 106,
      "time": 1790537825,
      "title": "Alan Kay's answer to “Did the ENIAC have a BIOS”?",
      "type": "story",
      "url": "https://www.quora.com/Did-the-ENIAC-have-a-BIOS/answer/Alan-Kay-11"
    },
    {
      "by": "ryanscio",
      "descendants": 9,
      "id": 49872474,
      "kids": [
        49873971,
        49874401,
        49873797,
        49873927,
        49874227,
        49873993,
        49874382
      ],
      "score": 35,
      "time": 1790558548,
      "title": "Was silent reading unusual during Augustine's time?",
      "type": "story",
      "url": "https://www.historyofinformation.com/detail.php?entryid=4341"
    },
    {
      "by": "utiiiD",
      "descendants": 57,
      "id": 49857281,
      "kids": [
        49872545,
        49872624,
        49871178,
        49872894,
        49872925,
        49872069,
        49871777,
        49872605,
        49872195,
        49872216,
        49871140,
        49863180,
        49872371,
        49871261,
        49871186
      ],
      "score": 116,
      "time": 1790435188,
      "title": "There is more to code review than (automatable) detection",
      "type": "story",
      "url": "https://www.adaptivecapacitylabs.com/2026/08/24/there-is-more-to-code-review-than-automatable-detection/"
    },
    {
      "by": "mooreds",
      "descendants": 43,
      "id": 49870295,
      "kids": [
        49872520,
        49871969,
        49872293,
        49871908,
        49874283,
        49871957,
        49874203,
        49871610,
        49873136,
        49872506,
        49872213,
        49871676,
        49872473,
        49871626
      ],
      "score": 135,
      "time": 1790539416,
      "title": "Self-Hosting on the Dark Web",
      "type": "story",
      "url": "https://david.alvarezrosa.com/posts/self-hosting-on-the-dark-web/"
    },
    {
      "by": "arbayi",
      "descendants": 20,
      "id": 49852600,
      "kids": [
        49873801,
        49872808,
        49874118,
        49872802,
        49873249,
        49873691,
        49872778,
        49873767
      ],
      "score": 51,
      "time": 1790389490,
      "title": "Guitar amp and effects pedal built on the Waveshare ESP32-S3-Touch-AMOLED-2.06",
      "type": "story",
      "url": "https://github.com/dashersw/coyopedal"
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
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "devto",
  "tag": "career",
  "sort": "top",
  "items": [
    {
      "title": "I Got Rejected 2 Minutes After Applying. So Much for 'Skills-Based Hiring.'",
      "description": "“Startup culture\" on the job listing. FANG-style ATS vetting in the inbox.   I applied for a Junior...",
      "url": "https://dev.to/mikachu/i-got-rejected-2-minutes-after-applying-so-much-for-skills-based-hiring-4315",
      "tags": "career, programming, hiring, beginners",
      "reactions": 29,
      "comments": 12,
      "reading_time": 4,
      "author": "mikachu"
    },
    {
      "title": "Dear Coder: Open This If You're Feeling AI FOMO",
      "description": "It's all over the headlines.  Every so often, someone reveals a model X% faster. A tech CEO makes...",
      "url": "https://dev.to/canro91/dear-coder-open-this-if-youre-feeling-ai-fomo-58d4",
      "tags": "career, ai, programming, beginners",
      "reactions": 1,
      "comments": 2,
      "reading_time": 1,
      "author": "canro91"
    },
    {
      "title": "I got ATS-rejected many times, so I built a free scorer to fix it.",
      "description": "AI rejects resumes before humans see them. That's the bigger problem that no one is talking about,...",
      "url": "https://dev.to/gaur-j/i-got-ats-rejected-many-times-so-i-built-a-free-scorer-to-fix-it-51lh",
      "tags": "ai, showdev, webdev, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "gaur-j"
    },
    {
      "title": "Community, Careers, and the Courage to Show Up",
      "description": "After taking a little break from LinkedIn Live because of conference preparation, I came back with...",
      "url": "https://dev.to/yoditdevn8n/community-careers-and-the-courage-to-show-up-1keg",
      "tags": "career, community, discuss",
      "reactions": 0,
      "comments": 1,
      "reading_time": 27,
      "author": "yoditdevn8n"
    },
    {
      "title": "How the scope of ownership changes when you move up",
      "description": "There is an assumption that most product people carry into leadership without realising it. They...",
      "url": "https://dev.to/pranjal_sarkar_ab7791e75b/how-the-scope-of-ownership-changes-when-you-move-up-55je",
      "tags": "career, leadership, management, product",
      "reactions": 0,
      "comments": 1,
      "reading_time": 3,
      "author": "pranjal_sarkar_ab7791e75b"
    },
    {
      "title": "Why great PMs don't automatically become great product leaders",
      "description": "Product careers have a transition that nobody really prepares you for. You have spent years getting...",
      "url": "https://dev.to/pranjal_sarkar_ab7791e75b/why-great-pms-dont-automatically-become-great-product-leaders-559g",
      "tags": "career, leadership, management, product",
      "reactions": 0,
      "comments": 1,
      "reading_time": 3,
      "author": "pranjal_sarkar_ab7791e75b"
    },
    {
      "title": "What executives actually expect from a product leader",
      "description": "Every leadership review includes a conversation most product leaders are completely unprepared for....",
      "url": "https://dev.to/pranjal_sarkar_ab7791e75b/what-executives-actually-expect-from-a-product-leader-2kh6",
      "tags": "career, leadership, management, product",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "pranjal_sarkar_ab7791e75b"
    },
    {
      "title": "KPIs That Don't Turn Into a Stick",
      "description": "How to decompose a CTO's goals without pushing anyone to work for the number: standing and monthly KPIs, thresholds grounded in facts, burn-down instead of an unreachable absolute",
      "url": "https://dev.to/fattakhov/kpis-that-dont-turn-into-a-stick-44oj",
      "tags": "leadership, management, productivity, career",
      "reactions": 0,
      "comments": 2,
      "reading_time": 10,
      "author": "fattakhov"
    },
    {
      "title": "Design the Loop First: A Practical Guide to Building Workflows You Can Trust",
      "description": "A practical guide to designing workflows that stay reliable when a step fails, a tool changes, or a person has to run them again.",
      "url": "https://dev.to/alexjosephke/design-the-loop-first-a-practical-guide-to-building-workflows-you-can-trust-113n",
      "tags": "productivity, beginners, career, tutorial",
      "reactions": 0,
      "comments": 1,
      "reading_time": 7,
      "author": "alexjosephke"
    },
    {
      "title": "Learn DSA by invariants, not solution memory",
      "description": "Recognizing a problem from a screenshot is not the same as recognizing its structure. Interview...",
      "url": "https://dev.to/sarthakagrawal927/learn-dsa-by-invariants-not-solution-memory-5eln",
      "tags": "algorithms, programming, career, learning",
      "reactions": 0,
      "comments": 1,
      "reading_time": 1,
      "author": "sarthakagrawal927"
    }
  ]
}
```

