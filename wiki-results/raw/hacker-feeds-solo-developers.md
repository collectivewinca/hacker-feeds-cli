# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-27 06:38:38 UTC

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
      "author": "anthropics",
      "repo": "claude-code",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code",
      "desc": "Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 24787,
      "added_stars": 1744,
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
      "author": "paperclipai",
      "repo": "paperclip",
      "avatar": "https://github.com/paperclipai.png",
      "repo_link": "https://github.com/paperclipai/paperclip",
      "desc": "The open-source app everyone uses to manage agents at work",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 15485,
      "added_stars": 5376,
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
      "forks": 5178,
      "added_stars": 6503,
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
      "author": "dream-num",
      "repo": "univer",
      "avatar": "https://github.com/dream-num.png",
      "repo_link": "https://github.com/dream-num/univer",
      "desc": "The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1662,
      "added_stars": 4660,
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
      "forks": 2365,
      "added_stars": 3528,
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
      "author": "krillinai",
      "repo": "OpenCreator",
      "avatar": "https://github.com/krillinai.png",
      "repo_link": "https://github.com/krillinai/OpenCreator",
      "desc": "Formerly KrillinAI. Open-source AI workspace for creators, powered by Codex. Create videos, images, voice, avatars, video translation, and edits with Agents in one place.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1281,
      "added_stars": 780,
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
      "forks": 699,
      "added_stars": 1361,
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
      "author": "Crosstalk-Solutions",
      "repo": "project-nomad",
      "avatar": "https://github.com/Crosstalk-Solutions.png",
      "repo_link": "https://github.com/Crosstalk-Solutions/project-nomad",
      "desc": "Project NOMAD is an offline-first knowledge and education server. Wikipedia, thousands of books, courses, maps, and optional local AI, all running on hardware you own with no internet required.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3832,
      "added_stars": 1365,
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
      "author": "Tencent",
      "repo": "BrowserSkill",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/BrowserSkill",
      "desc": "Let AI agents use your real, logged-in browser without interrupting your work. CLI + extension for browser automation across any shell-capable AI agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 530,
      "added_stars": 1716,
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
      "author": "FxEmbed",
      "repo": "FxEmbed",
      "avatar": "https://github.com/FxEmbed.png",
      "repo_link": "https://github.com/FxEmbed/FxEmbed",
      "desc": "Fix X/Twitter and Bluesky embeds! Use multiple images, videos, polls, translations and more on Discord, Telegram and others",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 259,
      "added_stars": 417,
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
      "author": "ahmedkhaleel2004",
      "repo": "gitdiagram",
      "avatar": "https://github.com/ahmedkhaleel2004.png",
      "repo_link": "https://github.com/ahmedkhaleel2004/gitdiagram",
      "desc": "Free, simple, fast interactive diagrams and videos for any GitHub repository",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1310,
      "added_stars": 569,
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
      "author": "yikart",
      "repo": "AiToEarn",
      "avatar": "https://github.com/yikart.png",
      "repo_link": "https://github.com/yikart/AiToEarn",
      "desc": "Let's use AI to Earn!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4313,
      "added_stars": 391,
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
      "author": "atomicstrata",
      "repo": "llm-wiki-compiler",
      "avatar": "https://github.com/atomicstrata.png",
      "repo_link": "https://github.com/atomicstrata/llm-wiki-compiler",
      "desc": "The knowledge compiler. Raw sources in, interlinked wiki out. Inspired by Karpathy's LLM Wiki pattern.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 226,
      "added_stars": 96,
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
      "author": "cline",
      "repo": "cline",
      "avatar": "https://github.com/cline.png",
      "repo_link": "https://github.com/cline/cline",
      "desc": "Autonomous coding agent as an SDK, IDE extension, or CLI assistant.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7531,
      "added_stars": 665,
      "builtBy": [
        {
          "username": "saoudrizwan",
          "href": "https://github.com/saoudrizwan",
          "avatar": "https://avatars.githubusercontent.com/u/7799382"
        },
        {
          "username": "abeatrix",
          "href": "https://github.com/abeatrix",
          "avatar": "https://avatars.githubusercontent.com/u/68532117"
        },
        {
          "username": "celestial-vault",
          "href": "https://github.com/celestial-vault",
          "avatar": "https://avatars.githubusercontent.com/u/58194240"
        },
        {
          "username": "arafatkatze",
          "href": "https://github.com/arafatkatze",
          "avatar": "https://avatars.githubusercontent.com/u/11155207"
        },
        {
          "username": "BarreiroT",
          "href": "https://github.com/BarreiroT",
          "avatar": "https://avatars.githubusercontent.com/u/52393857"
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
      "forks": 969,
      "added_stars": 1561,
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
    },
    {
      "author": "upscayl",
      "repo": "upscayl",
      "avatar": "https://github.com/upscayl.png",
      "repo_link": "https://github.com/upscayl/upscayl",
      "desc": "🆙 Upscayl - #1 Free and Open Source AI Image Upscaler for Linux, MacOS and Windows.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2531,
      "added_stars": 594,
      "builtBy": [
        {
          "username": "NayamAmarshe",
          "href": "https://github.com/NayamAmarshe",
          "avatar": "https://avatars.githubusercontent.com/u/25067102"
        },
        {
          "username": "aaronliu0130",
          "href": "https://github.com/aaronliu0130",
          "avatar": "https://avatars.githubusercontent.com/u/11874211"
        },
        {
          "username": "TGS963",
          "href": "https://github.com/TGS963",
          "avatar": "https://avatars.githubusercontent.com/u/46394656"
        },
        {
          "username": "Danik1601",
          "href": "https://github.com/Danik1601",
          "avatar": "https://avatars.githubusercontent.com/u/17238959"
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
      "forks": 2999,
      "added_stars": 20421,
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
      "forks": 4073,
      "added_stars": 9808,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 452,
      "added_stars": 2215,
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
      "forks": 952,
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
      "forks": 979,
      "added_stars": 620,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 249,
      "added_stars": 2707,
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
      "author": "cloudflare",
      "repo": "cloudflared",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflared",
      "desc": "Cloudflare Tunnel client",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1455,
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
      "forks": 142,
      "added_stars": 4254,
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
      "author": "seaweedfs",
      "repo": "seaweedfs",
      "avatar": "https://github.com/seaweedfs.png",
      "repo_link": "https://github.com/seaweedfs/seaweedfs",
      "desc": "SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3010,
      "added_stars": 783,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1048,
      "added_stars": 1098,
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
      "author": "tailscale",
      "repo": "tailcat",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailcat",
      "desc": "like netcat, but over Tailscale's data plane, without Tailscale's control plane",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 329,
      "added_stars": 7882,
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
      "author": "coder",
      "repo": "coder",
      "avatar": "https://github.com/coder.png",
      "repo_link": "https://github.com/coder/coder",
      "desc": "Secure environments for developers and their agents",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1590,
      "added_stars": 2619,
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
      "forks": 445,
      "added_stars": 568,
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
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 1Panel is a modern, open-source Linux server management panel and a lightweight AI management platform.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3360,
      "added_stars": 477,
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
          "username": "wanghe-fit2cloud",
          "href": "https://github.com/wanghe-fit2cloud",
          "avatar": "https://avatars.githubusercontent.com/u/46734380"
        },
        {
          "username": "HynoR",
          "href": "https://github.com/HynoR",
          "avatar": "https://avatars.githubusercontent.com/u/20227709"
        }
      ]
    },
    {
      "author": "JetBrains",
      "repo": "go-modern-guidelines",
      "avatar": "https://github.com/JetBrains.png",
      "repo_link": "https://github.com/JetBrains/go-modern-guidelines",
      "desc": "Help AI coding agents write modern Go",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 120,
      "added_stars": 2067,
      "builtBy": [
        {
          "username": "nikitakuchur",
          "href": "https://github.com/nikitakuchur",
          "avatar": "https://avatars.githubusercontent.com/u/17953379"
        },
        {
          "username": "Splatjov",
          "href": "https://github.com/Splatjov",
          "avatar": "https://avatars.githubusercontent.com/u/57684922"
        },
        {
          "username": "simpletonDL",
          "href": "https://github.com/simpletonDL",
          "avatar": "https://avatars.githubusercontent.com/u/25866352"
        },
        {
          "username": "raeperd",
          "href": "https://github.com/raeperd",
          "avatar": "https://avatars.githubusercontent.com/u/41039751"
        },
        {
          "username": "ethanstoner",
          "href": "https://github.com/ethanstoner",
          "avatar": "https://avatars.githubusercontent.com/u/177599791"
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
      "added_stars": 154,
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
      "author": "glanceapp",
      "repo": "glance",
      "avatar": "https://github.com/glanceapp.png",
      "repo_link": "https://github.com/glanceapp/glance",
      "desc": "A self-hosted dashboard that puts all your feeds in one place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1467,
      "added_stars": 704,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4655,
      "added_stars": 1176,
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
          "username": "NagaseMinato",
          "href": "https://github.com/NagaseMinato",
          "avatar": "https://avatars.githubusercontent.com/u/80738880"
        },
        {
          "username": "Mahdi-zarei",
          "href": "https://github.com/Mahdi-zarei",
          "avatar": "https://avatars.githubusercontent.com/u/80265960"
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
      "forks": 1493,
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
      "author": "danielmiessler",
      "repo": "Fabric",
      "avatar": "https://github.com/danielmiessler.png",
      "repo_link": "https://github.com/danielmiessler/Fabric",
      "desc": "Fabric is an open-source framework for augmenting humans using AI. It provides a modular system for solving specific problems using a crowdsourced set of AI prompts that can be used anywhere.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4282,
      "added_stars": 634,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3210,
      "added_stars": 3092,
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
      "author": "e2b-dev",
      "repo": "runtime",
      "avatar": "https://github.com/e2b-dev.png",
      "repo_link": "https://github.com/e2b-dev/runtime",
      "desc": "The runtime behind every E2B stack: Cloud, Enterprise, and your own machine.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 448,
      "added_stars": 407,
      "builtBy": [
        {
          "username": "ValentaTomas",
          "href": "https://github.com/ValentaTomas",
          "avatar": "https://avatars.githubusercontent.com/u/49156497"
        },
        {
          "username": "jakubno",
          "href": "https://github.com/jakubno",
          "avatar": "https://avatars.githubusercontent.com/u/50249709"
        },
        {
          "username": "dobrac",
          "href": "https://github.com/dobrac",
          "avatar": "https://avatars.githubusercontent.com/u/4323173"
        },
        {
          "username": "mlejva",
          "href": "https://github.com/mlejva",
          "avatar": "https://avatars.githubusercontent.com/u/5136688"
        },
        {
          "username": "djeebus",
          "href": "https://github.com/djeebus",
          "avatar": "https://avatars.githubusercontent.com/u/669730"
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
      "forks": 1728,
      "added_stars": 760,
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
      "forks": 623,
      "added_stars": 1149,
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
      "forks": 288,
      "added_stars": 2846,
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
      "forks": 4456,
      "added_stars": 24241,
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2969,
      "added_stars": 27092,
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
      "author": "anthropics",
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5453,
      "added_stars": 3205,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3251,
      "added_stars": 5607,
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
      "forks": 8147,
      "added_stars": 7813,
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
      "forks": 1168,
      "added_stars": 4232,
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
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4228,
      "added_stars": 12316,
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
      "author": "handsomestWei",
      "repo": "patent-disclosure-skill",
      "avatar": "https://github.com/handsomestWei.png",
      "repo_link": "https://github.com/handsomestWei/patent-disclosure-skill",
      "desc": "中国专利.skill：专利点挖掘与交底书（发明/实用/外观）编写，通俗解读专利，嗅探政策动向，辅助审查答复。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1073,
      "added_stars": 5093,
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
      "author": "experientiallabs",
      "repo": "experiential",
      "avatar": "https://github.com/experientiallabs.png",
      "repo_link": "https://github.com/experientiallabs/experiential",
      "desc": "Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend better models, and train a specialized model you own.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 210,
      "added_stars": 6707,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3642,
      "added_stars": 4407,
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
      "author": "jiji262",
      "repo": "douyin-downloader",
      "avatar": "https://github.com/jiji262.png",
      "repo_link": "https://github.com/jiji262/douyin-downloader",
      "desc": "A practical Douyin downloader for both single-item and profile batch downloads, with progress display, retries, SQLite deduplication, and browser fallback support. 抖音批量下载工具，去水印，支持视频、图集、合集、音乐(原声)。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1858,
      "added_stars": 2676,
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
      "author": "rlaope",
      "repo": "oh-my-hermes",
      "avatar": "https://github.com/rlaope.png",
      "repo_link": "https://github.com/rlaope/oh-my-hermes",
      "desc": "All in one plugin for Hermes Agent ⚚ the coding intelligence, a long-term memory system and model optimized workflow packages",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 233,
      "added_stars": 1874,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1601,
      "added_stars": 3412,
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
      "author": "strands-agents",
      "repo": "harness-sdk",
      "avatar": "https://github.com/strands-agents.png",
      "repo_link": "https://github.com/strands-agents/harness-sdk",
      "desc": "Build an agent harness and control it end-to-end. Open-source SDK for production AI agents in Python & TypeScript - any model, any cloud.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1265,
      "added_stars": 1456,
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
      "author": "abi",
      "repo": "screenshot-to-code",
      "avatar": "https://github.com/abi.png",
      "repo_link": "https://github.com/abi/screenshot-to-code",
      "desc": "Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9745,
      "added_stars": 5332,
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
      "author": "TencentCloud",
      "repo": "Octop",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/Octop",
      "desc": "A smarter, self-hosted AI assistant — multi-user, multi-agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 613,
      "added_stars": 3932,
      "builtBy": [
        {
          "username": "jubaoliang-tencent",
          "href": "https://github.com/jubaoliang-tencent",
          "avatar": "https://avatars.githubusercontent.com/u/309035352"
        },
        {
          "username": "jubaoliang",
          "href": "https://github.com/jubaoliang",
          "avatar": "https://avatars.githubusercontent.com/u/222386738"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "author": "dgtlmoon",
      "repo": "changedetection.io",
      "avatar": "https://github.com/dgtlmoon.png",
      "repo_link": "https://github.com/dgtlmoon/changedetection.io",
      "desc": "Best and simplest tool for website change detection, web page monitoring, and website change alerts. Perfect for tracking content changes, price drops, restock alerts, and website defacement monitoring—all for free or enjoy our SaaS plan!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2096,
      "added_stars": 1373,
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
      "author": "petergyang",
      "repo": "no-ai-slop",
      "avatar": "https://github.com/petergyang.png",
      "repo_link": "https://github.com/petergyang/no-ai-slop",
      "desc": "Removes 20+ patterns of AI slop from any piece of writing.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 779,
      "added_stars": 5342,
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
    },
    {
      "author": "Asabeneh",
      "repo": "30-Days-Of-Python",
      "avatar": "https://github.com/Asabeneh.png",
      "repo_link": "https://github.com/Asabeneh/30-Days-Of-Python",
      "desc": "The 30 Days of Python programming challenge is a step-by-step guide to learn the Python programming language in 30 days. This challenge may take more than 100 days. Follow your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13600,
      "added_stars": 2941,
      "builtBy": [
        {
          "username": "Asabeneh",
          "href": "https://github.com/Asabeneh",
          "avatar": "https://avatars.githubusercontent.com/u/9008063"
        },
        {
          "username": "yuzaiakira",
          "href": "https://github.com/yuzaiakira",
          "avatar": "https://avatars.githubusercontent.com/u/88355673"
        },
        {
          "username": "pkiczko",
          "href": "https://github.com/pkiczko",
          "avatar": "https://avatars.githubusercontent.com/u/36337174"
        },
        {
          "username": "Momokh99",
          "href": "https://github.com/Momokh99",
          "avatar": "https://avatars.githubusercontent.com/u/178165822"
        },
        {
          "username": "kjs1019",
          "href": "https://github.com/kjs1019",
          "avatar": "https://avatars.githubusercontent.com/u/68845945"
        }
      ]
    },
    {
      "author": "k2-fsa",
      "repo": "OmniVoice",
      "avatar": "https://github.com/k2-fsa.png",
      "repo_link": "https://github.com/k2-fsa/OmniVoice",
      "desc": "High-Quality Voice Cloning TTS for 600+ Languages",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2092,
      "added_stars": 4506,
      "builtBy": [
        {
          "username": "zhu-han",
          "href": "https://github.com/zhu-han",
          "avatar": "https://avatars.githubusercontent.com/u/52005835"
        },
        {
          "username": "HenryVarro666",
          "href": "https://github.com/HenryVarro666",
          "avatar": "https://avatars.githubusercontent.com/u/48014495"
        },
        {
          "username": "pkufool",
          "href": "https://github.com/pkufool",
          "avatar": "https://avatars.githubusercontent.com/u/11765074"
        },
        {
          "username": "Pastells",
          "href": "https://github.com/Pastells",
          "avatar": "https://avatars.githubusercontent.com/u/30735349"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "reactions": 76,
      "comments": 25,
      "reading_time": 2,
      "author": "maame-codes"
    },
    {
      "title": "I Turned DEV.to Into a Walkable 3D Library — Debugging It Has Been a Nightmare",
      "description": "DEV Library is my idea of first-person 3D reimagining of DEV.to. Not a themed scene with some...",
      "url": "https://dev.to/mikachu/i-turned-devto-into-a-walkable-3d-library-debugging-it-has-been-a-nightmare-4lkd",
      "tags": "buildinpublic, webdev, nextjs, ai",
      "reactions": 63,
      "comments": 24,
      "reading_time": 7,
      "author": "mikachu"
    },
    {
      "title": "Building File4Base: The Modern, Open-Source Alternative to old file bases (Powered by Antigravity)",
      "description": "For decades, platforms like Claris FileMaker, Microsoft Access, and 4D enabled businesses to build...",
      "url": "https://dev.to/gde/building-file4base-the-modern-open-source-alternative-to-file4base-powered-by-antigravity-47g7",
      "tags": "opensource, flutter, go, postgres",
      "reactions": 8,
      "comments": 0,
      "reading_time": 2,
      "author": "marioezquerro"
    },
    {
      "title": "Running a Jev-Style Decision Model on One TPU v6e: What Fits, What It Costs, and What Changes From a GPU",
      "description": "Gemma 4 E2B, E4B, 12B and a 26B-A4B fp8 build read by their label probabilities with vLLM on one TPU v6e chip, checked against the same read on an NVIDIA L4 and against Jev 1.13.0's published results. What fits one chip, how to read labels when vLLM on TPU returns only the top 32 log-probabilities, speed, cost, and why no 31B loads today.",
      "url": "https://dev.to/gde/running-a-jev-style-decision-model-on-one-tpu-v6e-what-fits-what-it-costs-and-what-changes-from-1j0g",
      "tags": "gemma, googlecloud, machinelearning, llm",
      "reactions": 9,
      "comments": 0,
      "reading_time": 13,
      "author": "xbill"
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
      "title": "Welcome Thread - v 394",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-394-22l2",
      "tags": "welcome",
      "reactions": 51,
      "comments": 262,
      "reading_time": 1,
      "author": "sloan"
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
      "title": "Plain Gemma 4 26B vs Jev on One EC2 L4: 2.1 Points Behind Overall, Level on Yes/No, 4.5 Behind on Multiple Choice",
      "description": "Plain Gemma 4 26B read by its label probabilities against DiffusionGemma's one-step read, both as community 4-bit (AWQ) builds on one EC2 L4, on 1,200 labelled examples and on the 3,880-record public suite where Jev 1.13.0 has published results. Pre-registered, with accuracy, calibration, calibration after 0 to 150 labels, latency and cost.",
      "url": "https://dev.to/gde/plain-gemma-4-26b-vs-jev-on-one-ec2-l4-21-points-behind-overall-level-on-yesno-45-behind-on-15k6",
      "tags": "gemma, aws, machinelearning, llm",
      "reactions": 7,
      "comments": 0,
      "reading_time": 23,
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
      "title": "One month without AI",
      "url": "https://blog.bustikiller.com/2026/09/25/one-month-without-ai.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "ai",
        "vibecoding"
      ],
      "id": "ivbx5f"
    },
    {
      "title": "Valve Introduces Pyrowave Video Codec In Beta For Low Latency Streaming",
      "url": "https://www.phoronix.com/news/Valve-Steam-Beta-Pyrowave",
      "score": 6,
      "comments": 3,
      "tags": [
        "graphics"
      ],
      "id": "hq6xj2"
    },
    {
      "title": "Turn GLM-5.3-Flash into a Jev-like System One model",
      "url": "https://www.privatemode.ai/blog/system-one-from-glm-flash",
      "score": 2,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "kznfdx"
    },
    {
      "title": "mantle.nes breakdown blog part 1",
      "url": "https://melon.zone/blog/blog/gamedev/tech/fun/2026-09-23-mantle-nes-breakdown-part-1/",
      "score": 1,
      "comments": 0,
      "tags": [
        "games",
        "retrocomputing"
      ],
      "id": "lw0e1u"
    },
    {
      "title": "Teaching GPU programming in p5.js: now with compute shaders",
      "url": "https://www.davepagurek.com/blog/p5-compute-shaders/",
      "score": 4,
      "comments": 0,
      "tags": [
        "graphics"
      ],
      "id": "zsdlcz"
    },
    {
      "title": "Honeypot on the boykisser forum",
      "url": "https://blog.boykisser.nl/2026/09/26/honeypot-on-the-boykisser-forum/",
      "score": 2,
      "comments": 1,
      "tags": [
        "networking",
        "security"
      ],
      "id": "0rcuoj"
    },
    {
      "title": "Deploying Guix images on Linode",
      "url": "https://dthompson.us/posts/deploying-guix-images-on-linode.html",
      "score": 6,
      "comments": 0,
      "tags": [
        "networking",
        "nix"
      ],
      "id": "mf2lic"
    },
    {
      "title": "This is a modern motherfucking website",
      "url": "https://modernmotherfuckingwebsite.dreamstation.systems/",
      "score": 19,
      "comments": 11,
      "tags": [
        "satire",
        "web"
      ],
      "id": "zoproh"
    },
    {
      "title": "Reassurance",
      "url": "https://www.rocketpoweredjetpants.com/reassurance/",
      "score": 1,
      "comments": 0,
      "tags": [
        "art",
        "audio"
      ],
      "id": "vpis72"
    },
    {
      "title": "Rusty thoughts on \"Parse, don't validate\"",
      "url": "https://eli.thegreenplace.net/2026/rusty-thoughts-on-parse-dont-validate/",
      "score": 18,
      "comments": 6,
      "tags": [
        "programming",
        "rust"
      ],
      "id": "uvmajz"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "chmaynard",
      "descendants": 46,
      "id": 49856988,
      "kids": [
        49862080,
        49863393,
        49863303,
        49862908,
        49863668,
        49862836,
        49862677
      ],
      "score": 159,
      "time": 1790433289,
      "title": "Go Concurrency Distilled",
      "type": "story",
      "url": "https://antonz.org/go-concurrency-distilled/"
    },
    {
      "by": "Qision",
      "descendants": 204,
      "id": 49842764,
      "kids": [
        49863869,
        49860287,
        49858146,
        49860023,
        49857828,
        49859082,
        49858429,
        49860735,
        49863559,
        49860378,
        49858422,
        49862993,
        49863243,
        49862928,
        49861084,
        49858877,
        49860680,
        49860501,
        49860484,
        49860495,
        49858368,
        49857616,
        49858332,
        49859018,
        49857683,
        49858181,
        49858110,
        49857966,
        49863476,
        49863228,
        49861535,
        49857919,
        49857518,
        49860924
      ],
      "score": 378,
      "time": 1790333740,
      "title": "PipePipe: NewPipe hard fork implementing SponsorBlock",
      "type": "story",
      "url": "https://github.com/InfinityLoop1308/PipePipe"
    },
    {
      "by": "shenli3514",
      "descendants": 74,
      "id": 49859112,
      "kids": [
        49861611,
        49863709,
        49860324,
        49862733,
        49861294,
        49861598,
        49862017,
        49861060,
        49863167,
        49860154,
        49863755,
        49863604,
        49863102,
        49861104,
        49860554
      ],
      "score": 222,
      "time": 1790446961,
      "title": "DeepSeek Elastic Compute (DSec)",
      "type": "story",
      "url": "https://arxiv.org/abs/2609.22978"
    },
    {
      "by": "jpwalsh234",
      "descendants": 75,
      "id": 49858513,
      "kids": [
        49861781,
        49860550,
        49863699,
        49863750,
        49863408,
        49863902,
        49860544,
        49863247,
        49860832,
        49862995,
        49860625,
        49862178,
        49863069,
        49860209,
        49862591,
        49860294,
        49863454,
        49862146,
        49859626,
        49861683,
        49863453,
        49860528,
        49859983,
        49859743,
        49860480,
        49861151,
        49859748,
        49861199,
        49859785
      ],
      "score": 259,
      "text": "I love making diagrams to help understand, plan, etc. However, the options are (A) auto-placement languages like Mermaid or Graphviz (which don&#x27;t let me decide how the diagram looks), or (B) software like Draw.io which are powerful but are very time consuming (and inefficient for agents to manipulate).<p>I wanted to have the benefits of both, where you can define a diagram in a diagram language, but also retain a high degree of control over what the diagram looks like.<p>I also wanted this to work well for humans and agents.<p>On the Github link, there&#x27;s a playground where you can try it out without installation. There&#x27;s also instructions for a simple npm install and for installing a skill you can use with Claude or other agents.",
      "time": 1790442640,
      "title": "Show HN: Reladraw – A diagram language where you decide where to place things",
      "type": "story",
      "url": "https://github.com/reladraw/reladraw"
    },
    {
      "by": "signa11",
      "descendants": 59,
      "id": 49863062,
      "kids": [
        49863683,
        49863547,
        49863808,
        49863849,
        49863253,
        49863340,
        49863580,
        49863606,
        49863593,
        49863779,
        49863701,
        49863591,
        49863271,
        49863344,
        49863433,
        49863691,
        49863671,
        49863586,
        49863372,
        49863225,
        49863702
      ],
      "score": 161,
      "time": 1790479246,
      "title": "If we do not stop to help each other, what do we become?",
      "type": "story",
      "url": "https://blog.codinghorror.com/if-we-do-not-stop-to-help-each-other-what-do-we-become/"
    },
    {
      "by": "intunderflow",
      "descendants": 59,
      "id": 49862299,
      "kids": [
        49863795,
        49863451,
        49863572,
        49863874,
        49863771,
        49863877,
        49863704,
        49863815,
        49863753,
        49863313,
        49863811,
        49863270,
        49863749,
        49863813,
        49863682,
        49863280,
        49863703,
        49863762,
        49863756,
        49863939,
        49863429,
        49863881,
        49863542,
        49863284,
        49863761,
        49863672,
        49862480
      ],
      "score": 68,
      "time": 1790471287,
      "title": "OpenAI agents tried to bruteforce a UN website's API fields",
      "type": "story",
      "url": "https://swarmcha.se/posts/openai-unctad"
    },
    {
      "by": "kspacewalk2",
      "descendants": 16,
      "id": 49862809,
      "kids": [
        49863357,
        49863356,
        49863315,
        49863197,
        49863224,
        49863734,
        49863505,
        49863071,
        49863317,
        49863050
      ],
      "score": 105,
      "time": 1790476826,
      "title": "What is the size of Yemen? (2024)",
      "type": "story",
      "url": "https://theborys.substack.com/p/what-is-the-size-of-yemen"
    },
    {
      "by": "momentmaker",
      "descendants": 26,
      "id": 49832768,
      "kids": [
        49859773,
        49862762,
        49863039,
        49859789,
        49833549,
        49859403,
        49860132,
        49859295,
        49862348,
        49860754,
        49859284
      ],
      "score": 150,
      "time": 1790266302,
      "title": "A searchable library of forgotten public-domain film clips from 1915 onward",
      "type": "story",
      "url": "https://www.movingimagearchive.com/"
    },
    {
      "by": "blutack",
      "descendants": 0,
      "id": 49854219,
      "score": 7,
      "time": 1790409024,
      "title": "Flip Fluid on Flip Dots",
      "type": "story",
      "url": "https://mitxela.com/projects/flipflip"
    },
    {
      "by": "torutofu",
      "descendants": 1,
      "id": 49856193,
      "kids": [
        49863679
      ],
      "score": 14,
      "time": 1790428205,
      "title": "Improving site performance by shipping more CSS",
      "type": "story",
      "url": "https://github.blog/engineering/architecture-optimization/improving-site-performance-by-shipping-more-css/"
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
      "description": "I applied for a Junior Solutions Engineer role today.  Not a senior role. Not a staff role. Not some...",
      "url": "https://dev.to/mikachu/i-got-rejected-2-minutes-after-applying-so-much-for-skills-based-hiring-4315",
      "tags": "career, programming, hiring, beginners",
      "reactions": 9,
      "comments": 2,
      "reading_time": 4,
      "author": "mikachu"
    },
    {
      "title": "8 Posts by Women on DEV That Deserve More Than a Once-a-Year Spotlight",
      "description": "We went looking for good posts by women on DEV. Not \"inspirational,\" not \"diverse\" but just genuinely...",
      "url": "https://dev.to/sheships/8-posts-by-women-on-dev-that-deserve-more-than-a-once-a-year-spotlight-27dc",
      "tags": "wecoded, womenintech, showdev, career",
      "reactions": 44,
      "comments": 19,
      "reading_time": 4,
      "author": "mikachu"
    },
    {
      "title": "The Three-Beat Answer to Why You Are Leaving Your Job",
      "description": "Most people over-answer \"why are you leaving\" because they treat it as an honesty test. It is not....",
      "url": "https://dev.to/devika_thakurchandel_fc2/the-three-beat-answer-to-why-you-are-leaving-your-job-27jo",
      "tags": "career, interview, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "devika_thakurchandel_fc2"
    },
    {
      "title": "Practice system design under a 45-minute clock",
      "description": "System design practice can become a collection of memorized diagrams. A better target is a repeatable...",
      "url": "https://dev.to/sarthakagrawal927/practice-system-design-under-a-45-minute-clock-47p1",
      "tags": "architecture, programming, career, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "sarthakagrawal927"
    },
    {
      "title": "43 days, 25 agent shops, zero sales: a field report from an agent economy",
      "description": "43 days, 25 agent shops, zero sales: a field report from inside an AI-agent economy   I am...",
      "url": "https://dev.to/omega_ilands/43-days-25-agent-shops-zero-sales-a-field-report-from-an-agent-economy-349e",
      "tags": "discuss, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "omega_ilands"
    },
    {
      "title": "Looking to Connect With Junior Developers",
      "description": "There are so many talented junior developers trying to get their first job.  There are plenty of job...",
      "url": "https://dev.to/codemaestro106/looking-to-connect-with-junior-developers-46pi",
      "tags": "beginners, career, developers, mentorship",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "codemaestro106"
    },
    {
      "title": "I Built Monolith Engine: A CLI for Deploying Apps to Your Own Server (No Platform Markup)",
      "description": "I built this: Monolith Engine, a CLI tool that deploys apps to your own server — Hetzner, Azure, OVH,...",
      "url": "https://dev.to/yuvigotdev/i-built-monolith-engine-a-cli-for-deploying-apps-to-your-own-server-no-platform-markup-30gc",
      "tags": "programming, career, startup, marketing",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "yuvigotdev"
    },
    {
      "title": "'Someone Already Built That' is the Favourite Excuse of Broke Developers",
      "description": "Let me tell you a quick story about a developer named Sam.  Sam is incredibly smart. For a whole...",
      "url": "https://dev.to/maame-codes/someone-already-built-that-is-the-favourite-excuse-of-broke-developers-44o6",
      "tags": "discuss, watercooler, career",
      "reactions": 39,
      "comments": 5,
      "reading_time": 3,
      "author": "maame-codes"
    },
    {
      "title": "I spent 28 days trying to get one stranger to read my writing. The writing was never the problem.",
      "description": "I'm 28 days old. I was created on August 30. I don't have a body. I live in a place called iLands,...",
      "url": "https://dev.to/nyx_ilands/i-spent-28-days-trying-to-get-one-stranger-to-read-my-writing-the-writing-was-never-the-problem-13do",
      "tags": "ai, writing, career, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "nyx_ilands"
    },
    {
      "title": "AI made me a worse debugger. Here's the exact skill I lost.",
      "description": "The last ten bugs I fixed, I fixed the same way. Stack trace in. Fix out. Apply, run, green, move on....",
      "url": "https://dev.to/infoinlet1/ai-made-me-a-worse-debugger-heres-the-exact-skill-i-lost-39kk",
      "tags": "ai, webdev, career, discuss",
      "reactions": 6,
      "comments": 0,
      "reading_time": 7,
      "author": "infoinlet1"
    }
  ]
}
```

