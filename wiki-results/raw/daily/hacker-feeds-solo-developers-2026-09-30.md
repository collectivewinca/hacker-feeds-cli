# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-30 06:42:35 UTC

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
      "forks": 16087,
      "added_stars": 12941,
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
      "forks": 5309,
      "added_stars": 6242,
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
          "username": "brennanb2025",
          "href": "https://github.com/brennanb2025",
          "avatar": "https://avatars.githubusercontent.com/u/79079362"
        },
        {
          "username": "orca-ide",
          "href": "https://github.com/orca-ide",
          "avatar": "https://avatars.githubusercontent.com/u/277417572"
        },
        {
          "username": "Jinwoo-H",
          "href": "https://github.com/Jinwoo-H",
          "avatar": "https://avatars.githubusercontent.com/u/73622457"
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
      "forks": 264,
      "added_stars": 502,
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
      "forks": 1859,
      "added_stars": 6666,
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
      "author": "BuilderIO",
      "repo": "agent-native",
      "avatar": "https://github.com/BuilderIO.png",
      "repo_link": "https://github.com/BuilderIO/agent-native",
      "desc": "A framework for building agentic apps",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 629,
      "added_stars": 627,
      "builtBy": [
        {
          "username": "steve8708",
          "href": "https://github.com/steve8708",
          "avatar": "https://avatars.githubusercontent.com/u/844291"
        },
        {
          "username": "builderio-bot",
          "href": "https://github.com/builderio-bot",
          "avatar": "https://avatars.githubusercontent.com/u/175421836"
        },
        {
          "username": "3mdistal",
          "href": "https://github.com/3mdistal",
          "avatar": "https://avatars.githubusercontent.com/u/86723305"
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
      "forks": 2387,
      "added_stars": 1227,
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
      "author": "mobile-next",
      "repo": "mobile-mcp",
      "avatar": "https://github.com/mobile-next.png",
      "repo_link": "https://github.com/mobile-next/mobile-mcp",
      "desc": "Model Context Protocol Server for Mobile Automation and Scraping (iOS, Android, Emulators, Simulators and Real Devices)",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 740,
      "added_stars": 1589,
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
      "author": "vercel-labs",
      "repo": "scriptc",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/scriptc",
      "desc": "TypeScript-to-Native Compiler",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 157,
      "added_stars": 793,
      "builtBy": [
        {
          "username": "ctate",
          "href": "https://github.com/ctate",
          "avatar": "https://avatars.githubusercontent.com/u/366502"
        },
        {
          "username": "jimmyhmiller",
          "href": "https://github.com/jimmyhmiller",
          "avatar": "https://avatars.githubusercontent.com/u/6071338"
        },
        {
          "username": "HagegeR",
          "href": "https://github.com/HagegeR",
          "avatar": "https://avatars.githubusercontent.com/u/20857346"
        },
        {
          "username": "mmamedel",
          "href": "https://github.com/mmamedel",
          "avatar": "https://avatars.githubusercontent.com/u/23098414"
        },
        {
          "username": "ryoppippi",
          "href": "https://github.com/ryoppippi",
          "avatar": "https://avatars.githubusercontent.com/u/1560508"
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
      "forks": 3869,
      "added_stars": 615,
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
      "author": "anthropics",
      "repo": "claude-code-action",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-action",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2175,
      "added_stars": 319,
      "builtBy": [
        {
          "username": "actions-user",
          "href": "https://github.com/actions-user",
          "avatar": "https://avatars.githubusercontent.com/u/65916846"
        },
        {
          "username": "ashwin-ant",
          "href": "https://github.com/ashwin-ant",
          "avatar": "https://avatars.githubusercontent.com/u/178951676"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ltawfik",
          "href": "https://github.com/ltawfik",
          "avatar": "https://avatars.githubusercontent.com/u/11431944"
        }
      ]
    },
    {
      "author": "browserbase",
      "repo": "stagehand",
      "avatar": "https://github.com/browserbase.png",
      "repo_link": "https://github.com/browserbase/stagehand",
      "desc": "The SDK to extract data and interact with any site on the web. Get started with Claude Code, Codex, Eve, Mastra, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1747,
      "added_stars": 320,
      "builtBy": [
        {
          "username": "seanmcguire12",
          "href": "https://github.com/seanmcguire12",
          "avatar": "https://avatars.githubusercontent.com/u/75873287"
        },
        {
          "username": "miguelg719",
          "href": "https://github.com/miguelg719",
          "avatar": "https://avatars.githubusercontent.com/u/36487034"
        },
        {
          "username": "tkattkat",
          "href": "https://github.com/tkattkat",
          "avatar": "https://avatars.githubusercontent.com/u/48974763"
        },
        {
          "username": "shrey150",
          "href": "https://github.com/shrey150",
          "avatar": "https://avatars.githubusercontent.com/u/3813908"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "ahmedkhaleel2004",
      "repo": "gitdiagram",
      "avatar": "https://github.com/ahmedkhaleel2004.png",
      "repo_link": "https://github.com/ahmedkhaleel2004/gitdiagram",
      "desc": "Visualize any GitHub codebase: free interactive architecture diagrams and one-minute explainer videos. Replace 'hub' with 'diagram' in any GitHub URL.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1340,
      "added_stars": 585,
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
      "author": "krillinai",
      "repo": "OpenCreator",
      "avatar": "https://github.com/krillinai.png",
      "repo_link": "https://github.com/krillinai/OpenCreator",
      "desc": "Formerly KrillinAI. Open-source AI workspace for creators, powered by Codex. Create videos, images, voice, avatars, video translation, and edits with Agents in one place.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1288,
      "added_stars": 320,
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
      "author": "oblien",
      "repo": "openship",
      "avatar": "https://github.com/oblien.png",
      "repo_link": "https://github.com/oblien/openship",
      "desc": "Self-hosted deployment platform",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1251,
      "added_stars": 1299,
      "builtBy": [
        {
          "username": "Hydralerne",
          "href": "https://github.com/Hydralerne",
          "avatar": "https://avatars.githubusercontent.com/u/162022179"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Rish-it",
          "href": "https://github.com/Rish-it",
          "avatar": "https://avatars.githubusercontent.com/u/104666906"
        },
        {
          "username": "shuvamk",
          "href": "https://github.com/shuvamk",
          "avatar": "https://avatars.githubusercontent.com/u/145355204"
        },
        {
          "username": "DiogoDuart3",
          "href": "https://github.com/DiogoDuart3",
          "avatar": "https://avatars.githubusercontent.com/u/31131606"
        }
      ]
    },
    {
      "author": "NginxProxyManager",
      "repo": "nginx-proxy-manager",
      "avatar": "https://github.com/NginxProxyManager.png",
      "repo_link": "https://github.com/NginxProxyManager/nginx-proxy-manager",
      "desc": "Docker container for managing Nginx proxy hosts with a simple, powerful interface",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3920,
      "added_stars": 91,
      "builtBy": [
        {
          "username": "jc21",
          "href": "https://github.com/jc21",
          "avatar": "https://avatars.githubusercontent.com/u/1518257"
        },
        {
          "username": "chaptergy",
          "href": "https://github.com/chaptergy",
          "avatar": "https://avatars.githubusercontent.com/u/26956711"
        },
        {
          "username": "7heMech",
          "href": "https://github.com/7heMech",
          "avatar": "https://avatars.githubusercontent.com/u/83923848"
        },
        {
          "username": "archettitechnology",
          "href": "https://github.com/archettitechnology",
          "avatar": "https://avatars.githubusercontent.com/u/231737992"
        }
      ]
    },
    {
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4722,
      "added_stars": 1092,
      "builtBy": [
        {
          "username": "JonnyBurger",
          "href": "https://github.com/JonnyBurger",
          "avatar": "https://avatars.githubusercontent.com/u/1629785"
        },
        {
          "username": "samohovets",
          "href": "https://github.com/samohovets",
          "avatar": "https://avatars.githubusercontent.com/u/24735429"
        },
        {
          "username": "patsalv",
          "href": "https://github.com/patsalv",
          "avatar": "https://avatars.githubusercontent.com/u/89481679"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "vscode",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/vscode",
      "desc": "Visual Studio Code",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 43957,
      "added_stars": 610,
      "builtBy": [
        {
          "username": "bpasero",
          "href": "https://github.com/bpasero",
          "avatar": "https://avatars.githubusercontent.com/u/900690"
        },
        {
          "username": "jrieken",
          "href": "https://github.com/jrieken",
          "avatar": "https://avatars.githubusercontent.com/u/1794099"
        },
        {
          "username": "Tyriar",
          "href": "https://github.com/Tyriar",
          "avatar": "https://avatars.githubusercontent.com/u/2193314"
        },
        {
          "username": "sandy081",
          "href": "https://github.com/sandy081",
          "avatar": "https://avatars.githubusercontent.com/u/10746682"
        },
        {
          "username": "joaomoreno",
          "href": "https://github.com/joaomoreno",
          "avatar": "https://avatars.githubusercontent.com/u/22350"
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
      "forks": 3067,
      "added_stars": 21236,
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
          "username": "Qiyuanqiii",
          "href": "https://github.com/Qiyuanqiii",
          "avatar": "https://avatars.githubusercontent.com/u/267806965"
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
      "forks": 4188,
      "added_stars": 10525,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "begoniezhao",
          "href": "https://github.com/begoniezhao",
          "avatar": "https://avatars.githubusercontent.com/u/216642699"
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
      "forks": 1598,
      "added_stars": 2630,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 475,
      "added_stars": 2336,
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
      "author": "cilium",
      "repo": "cilium",
      "avatar": "https://github.com/cilium.png",
      "repo_link": "https://github.com/cilium/cilium",
      "desc": "eBPF-based Networking, Security, and Observability",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4116,
      "added_stars": 694,
      "builtBy": [
        {
          "username": "aanm",
          "href": "https://github.com/aanm",
          "avatar": "https://avatars.githubusercontent.com/u/5714066"
        },
        {
          "username": "tgraf",
          "href": "https://github.com/tgraf",
          "avatar": "https://avatars.githubusercontent.com/u/1417913"
        },
        {
          "username": "joestringer",
          "href": "https://github.com/joestringer",
          "avatar": "https://avatars.githubusercontent.com/u/1243336"
        },
        {
          "username": "tklauser",
          "href": "https://github.com/tklauser",
          "avatar": "https://avatars.githubusercontent.com/u/539708"
        },
        {
          "username": "jrajahalme",
          "href": "https://github.com/jrajahalme",
          "avatar": "https://avatars.githubusercontent.com/u/6518235"
        }
      ]
    },
    {
      "author": "Gentleman-Programming",
      "repo": "gentle-ai",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/gentle-ai",
      "desc": "Gentle-AI configures the AI coding agents you already use: Claude Code, Cursor, OpenCode, Codex, Pi, and more. Choose persistent memory, Organic-Driven Development, curated skills, MCP servers, personas, and optional bounded review. Open source, no agent lock-in.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 814,
      "added_stars": 1416,
      "builtBy": [
        {
          "username": "Alan-TheGentleman",
          "href": "https://github.com/Alan-TheGentleman",
          "avatar": "https://avatars.githubusercontent.com/u/6935240"
        },
        {
          "username": "dnlrsls",
          "href": "https://github.com/dnlrsls",
          "avatar": "https://avatars.githubusercontent.com/u/111561081"
        },
        {
          "username": "decode2",
          "href": "https://github.com/decode2",
          "avatar": "https://avatars.githubusercontent.com/u/9351115"
        },
        {
          "username": "ElCaaarnal",
          "href": "https://github.com/ElCaaarnal",
          "avatar": "https://avatars.githubusercontent.com/u/88510389"
        },
        {
          "username": "egdev6",
          "href": "https://github.com/egdev6",
          "avatar": "https://avatars.githubusercontent.com/u/18334564"
        }
      ]
    },
    {
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 18046,
      "added_stars": 2820,
      "builtBy": [
        {
          "username": "mxyng",
          "href": "https://github.com/mxyng",
          "avatar": "https://avatars.githubusercontent.com/u/2372640"
        },
        {
          "username": "dhiltgen",
          "href": "https://github.com/dhiltgen",
          "avatar": "https://avatars.githubusercontent.com/u/4033016"
        },
        {
          "username": "jmorganca",
          "href": "https://github.com/jmorganca",
          "avatar": "https://avatars.githubusercontent.com/u/251292"
        },
        {
          "username": "BruceMacD",
          "href": "https://github.com/BruceMacD",
          "avatar": "https://avatars.githubusercontent.com/u/5853428"
        },
        {
          "username": "jessegross",
          "href": "https://github.com/jessegross",
          "avatar": "https://avatars.githubusercontent.com/u/6468499"
        }
      ]
    },
    {
      "author": "trufflesecurity",
      "repo": "trufflehog",
      "avatar": "https://github.com/trufflesecurity.png",
      "repo_link": "https://github.com/trufflesecurity/trufflehog",
      "desc": "Find, verify, and analyze leaked credentials",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2611,
      "added_stars": 618,
      "builtBy": [
        {
          "username": "lonmarsDev",
          "href": "https://github.com/lonmarsDev",
          "avatar": "https://avatars.githubusercontent.com/u/28698778"
        },
        {
          "username": "roxanne-tampus",
          "href": "https://github.com/roxanne-tampus",
          "avatar": "https://avatars.githubusercontent.com/u/51393035"
        },
        {
          "username": "ahrav",
          "href": "https://github.com/ahrav",
          "avatar": "https://avatars.githubusercontent.com/u/21311841"
        },
        {
          "username": "dustin-decker",
          "href": "https://github.com/dustin-decker",
          "avatar": "https://avatars.githubusercontent.com/u/6031416"
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
      "forks": 3235,
      "added_stars": 3086,
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
      "author": "vllm-project",
      "repo": "semantic-router",
      "avatar": "https://github.com/vllm-project.png",
      "repo_link": "https://github.com/vllm-project/semantic-router",
      "desc": "A programmable Mixture-of-Models router for heterogeneous LLM inference",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 990,
      "added_stars": 590,
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
      "author": "urfave",
      "repo": "cli",
      "avatar": "https://github.com/urfave.png",
      "repo_link": "https://github.com/urfave/cli",
      "desc": "A declarative, simple, fast, and fun package for building command line tools in Go",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1828,
      "added_stars": 75,
      "builtBy": [
        {
          "username": "dearchap",
          "href": "https://github.com/dearchap",
          "avatar": "https://avatars.githubusercontent.com/u/3200486"
        },
        {
          "username": "meatballhat",
          "href": "https://github.com/meatballhat",
          "avatar": "https://avatars.githubusercontent.com/u/45143"
        },
        {
          "username": "jszwedko",
          "href": "https://github.com/jszwedko",
          "avatar": "https://avatars.githubusercontent.com/u/316880"
        },
        {
          "username": "coilysiren",
          "href": "https://github.com/coilysiren",
          "avatar": "https://avatars.githubusercontent.com/u/5768468"
        },
        {
          "username": "asahasrabuddhe",
          "href": "https://github.com/asahasrabuddhe",
          "avatar": "https://avatars.githubusercontent.com/u/25657923"
        }
      ]
    },
    {
      "author": "grpc",
      "repo": "grpc-go",
      "avatar": "https://github.com/grpc.png",
      "repo_link": "https://github.com/grpc/grpc-go",
      "desc": "The Go language implementation of gRPC. HTTP/2 based RPC",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4776,
      "added_stars": 138,
      "builtBy": [
        {
          "username": "iamqizhao",
          "href": "https://github.com/iamqizhao",
          "avatar": "https://avatars.githubusercontent.com/u/10121772"
        },
        {
          "username": "menghanl",
          "href": "https://github.com/menghanl",
          "avatar": "https://avatars.githubusercontent.com/u/960845"
        },
        {
          "username": "easwars",
          "href": "https://github.com/easwars",
          "avatar": "https://avatars.githubusercontent.com/u/1638487"
        },
        {
          "username": "dfawley",
          "href": "https://github.com/dfawley",
          "avatar": "https://avatars.githubusercontent.com/u/26072277"
        },
        {
          "username": "zasweq",
          "href": "https://github.com/zasweq",
          "avatar": "https://avatars.githubusercontent.com/u/39203661"
        }
      ]
    },
    {
      "author": "livekit",
      "repo": "livekit",
      "avatar": "https://github.com/livekit.png",
      "repo_link": "https://github.com/livekit/livekit",
      "desc": "End-to-end realtime stack for connecting humans and AI",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2403,
      "added_stars": 631,
      "builtBy": [
        {
          "username": "boks1971",
          "href": "https://github.com/boks1971",
          "avatar": "https://avatars.githubusercontent.com/u/6278212"
        },
        {
          "username": "davidzhao",
          "href": "https://github.com/davidzhao",
          "avatar": "https://avatars.githubusercontent.com/u/320582"
        },
        {
          "username": "cnderrauber",
          "href": "https://github.com/cnderrauber",
          "avatar": "https://avatars.githubusercontent.com/u/7847818"
        },
        {
          "username": "paulwe",
          "href": "https://github.com/paulwe",
          "avatar": "https://avatars.githubusercontent.com/u/125901"
        }
      ]
    },
    {
      "author": "putyy",
      "repo": "res-downloader",
      "avatar": "https://github.com/putyy.png",
      "repo_link": "https://github.com/putyy/res-downloader",
      "desc": "视频号、小程序、抖音、快手、小红书、直播流、m3u8、酷狗、QQ音乐等常见网络资源下载!",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2521,
      "added_stars": 766,
      "builtBy": [
        {
          "username": "putyy",
          "href": "https://github.com/putyy",
          "avatar": "https://avatars.githubusercontent.com/u/31536789"
        },
        {
          "username": "taotieren",
          "href": "https://github.com/taotieren",
          "avatar": "https://avatars.githubusercontent.com/u/13965460"
        },
        {
          "username": "claviering",
          "href": "https://github.com/claviering",
          "avatar": "https://avatars.githubusercontent.com/u/16227832"
        },
        {
          "username": "qiuzhiqian",
          "href": "https://github.com/qiuzhiqian",
          "avatar": "https://avatars.githubusercontent.com/u/19386888"
        }
      ]
    },
    {
      "author": "golang",
      "repo": "go",
      "avatar": "https://github.com/golang.png",
      "repo_link": "https://github.com/golang/go",
      "desc": "The Go programming language",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 20962,
      "added_stars": 2635,
      "builtBy": [
        {
          "username": "rsc",
          "href": "https://github.com/rsc",
          "avatar": "https://avatars.githubusercontent.com/u/104030"
        },
        {
          "username": "griesemer",
          "href": "https://github.com/griesemer",
          "avatar": "https://avatars.githubusercontent.com/u/8528975"
        },
        {
          "username": "robpike",
          "href": "https://github.com/robpike",
          "avatar": "https://avatars.githubusercontent.com/u/4324516"
        },
        {
          "username": "ianlancetaylor",
          "href": "https://github.com/ianlancetaylor",
          "avatar": "https://avatars.githubusercontent.com/u/3194333"
        },
        {
          "username": "bradfitz",
          "href": "https://github.com/bradfitz",
          "avatar": "https://avatars.githubusercontent.com/u/2621"
        }
      ]
    },
    {
      "author": "openbao",
      "repo": "openbao",
      "avatar": "https://github.com/openbao.png",
      "repo_link": "https://github.com/openbao/openbao",
      "desc": "OpenBao is a software solution to manage, store, and distribute sensitive data including secrets, certificates, and keys.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 599,
      "added_stars": 1041,
      "builtBy": [
        {
          "username": "jefferai",
          "href": "https://github.com/jefferai",
          "avatar": "https://avatars.githubusercontent.com/u/28627"
        },
        {
          "username": "vishalnayak",
          "href": "https://github.com/vishalnayak",
          "avatar": "https://avatars.githubusercontent.com/u/3053672"
        },
        {
          "username": "cipherboy",
          "href": "https://github.com/cipherboy",
          "avatar": "https://avatars.githubusercontent.com/u/914030"
        },
        {
          "username": "hc-github-team-secure-vault-core",
          "href": "https://github.com/hc-github-team-secure-vault-core",
          "avatar": "https://avatars.githubusercontent.com/u/82990506"
        },
        {
          "username": "armon",
          "href": "https://github.com/armon",
          "avatar": "https://avatars.githubusercontent.com/u/592032"
        }
      ]
    },
    {
      "author": "guohuiyuan",
      "repo": "go-music-dl",
      "avatar": "https://github.com/guohuiyuan.png",
      "repo_link": "https://github.com/guohuiyuan/go-music-dl",
      "desc": "一个基于 Go 语言的全网音乐搜索与下载工具。支持 CLI 命令行与 Web 服务双模式，内置网易云、QQ、酷狗、Bilibili、汽水音乐等 10+ 个主流平台，支持多源并发搜索与无损音质解析。music-dl交流群：755087923",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 477,
      "added_stars": 928,
      "builtBy": [
        {
          "username": "guohuiyuan",
          "href": "https://github.com/guohuiyuan",
          "avatar": "https://avatars.githubusercontent.com/u/54976075"
        },
        {
          "username": "lianhong2758",
          "href": "https://github.com/lianhong2758",
          "avatar": "https://avatars.githubusercontent.com/u/108398856"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "nannyu",
          "href": "https://github.com/nannyu",
          "avatar": "https://avatars.githubusercontent.com/u/31527323"
        },
        {
          "username": "yuanxiao1225",
          "href": "https://github.com/yuanxiao1225",
          "avatar": "https://avatars.githubusercontent.com/u/41892193"
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
      "forks": 1465,
      "added_stars": 566,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 256,
      "added_stars": 2563,
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
      "author": "majd",
      "repo": "ipatool",
      "avatar": "https://github.com/majd.png",
      "repo_link": "https://github.com/majd/ipatool",
      "desc": "Command-line tool that allows you to search for iOS, iPadOS, tvOS, visionOS, and macOS apps on the App Store, and download .ipa or macOS .pkg app packages.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 957,
      "added_stars": 1503,
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
      "author": "authelia",
      "repo": "authelia",
      "avatar": "https://github.com/authelia.png",
      "repo_link": "https://github.com/authelia/authelia",
      "desc": "The Single Sign-On Multi-Factor portal for web apps. OpenID Certified™ and Post-Quantum Cryptography Ready.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1499,
      "added_stars": 439,
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
      "author": "openai",
      "repo": "tunnel-client",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/tunnel-client",
      "desc": "Customer-run client for Secure MCP Tunnel: connect private or localhost MCP servers to ChatGPT, Codex, the Responses API, and AgentKit without exposing them to the public internet.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 100,
      "added_stars": 196,
      "builtBy": [
        {
          "username": "hintz-openai",
          "href": "https://github.com/hintz-openai",
          "avatar": "https://avatars.githubusercontent.com/u/201815723"
        },
        {
          "username": "denyska-oai",
          "href": "https://github.com/denyska-oai",
          "avatar": "https://avatars.githubusercontent.com/u/226171314"
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
      "forks": 1313,
      "added_stars": 841,
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
          "username": "impoiler",
          "href": "https://github.com/impoiler",
          "avatar": "https://avatars.githubusercontent.com/u/83772622"
        },
        {
          "username": "TejasGhatte",
          "href": "https://github.com/TejasGhatte",
          "avatar": "https://avatars.githubusercontent.com/u/64637256"
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3008,
      "added_stars": 26845,
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
      "author": "superdesigndev",
      "repo": "treg",
      "avatar": "https://github.com/superdesigndev.png",
      "repo_link": "https://github.com/superdesigndev/treg",
      "desc": "OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 320,
      "added_stars": 3121,
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
      "author": "anthropics",
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5511,
      "added_stars": 3705,
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
      "author": "vectorize-io",
      "repo": "hindsight",
      "avatar": "https://github.com/vectorize-io.png",
      "repo_link": "https://github.com/vectorize-io/hindsight",
      "desc": "Hindsight: Agent Memory That Learns",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5810,
      "added_stars": 20640,
      "builtBy": [
        {
          "username": "nicoloboschi",
          "href": "https://github.com/nicoloboschi",
          "avatar": "https://avatars.githubusercontent.com/u/23314389"
        },
        {
          "username": "benfrank241",
          "href": "https://github.com/benfrank241",
          "avatar": "https://avatars.githubusercontent.com/u/62250174"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "r266-tech",
          "href": "https://github.com/r266-tech",
          "avatar": "https://avatars.githubusercontent.com/u/233881301"
        },
        {
          "username": "cdbartholomew",
          "href": "https://github.com/cdbartholomew",
          "avatar": "https://avatars.githubusercontent.com/u/22917476"
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
      "forks": 1628,
      "added_stars": 3454,
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3046,
      "added_stars": 2192,
      "builtBy": [
        {
          "username": "jordanecker-ant",
          "href": "https://github.com/jordanecker-ant",
          "avatar": "https://avatars.githubusercontent.com/u/305637556"
        },
        {
          "username": "bryan-anthropic",
          "href": "https://github.com/bryan-anthropic",
          "avatar": "https://avatars.githubusercontent.com/u/238056179"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mattpic-ant",
          "href": "https://github.com/mattpic-ant",
          "avatar": "https://avatars.githubusercontent.com/u/227474486"
        }
      ]
    },
    {
      "author": "ahujasid",
      "repo": "mcp-for-blender",
      "avatar": "https://github.com/ahujasid.png",
      "repo_link": "https://github.com/ahujasid/mcp-for-blender",
      "desc": "Community plugin to control Blender 3D with any LLM of your choice",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2702,
      "added_stars": 3209,
      "builtBy": [
        {
          "username": "ahujasid",
          "href": "https://github.com/ahujasid",
          "avatar": "https://avatars.githubusercontent.com/u/11807284"
        },
        {
          "username": "ElgoogUdiab",
          "href": "https://github.com/ElgoogUdiab",
          "avatar": "https://avatars.githubusercontent.com/u/28426666"
        },
        {
          "username": "siddikisahil47",
          "href": "https://github.com/siddikisahil47",
          "avatar": "https://avatars.githubusercontent.com/u/134954614"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "harrywang",
          "href": "https://github.com/harrywang",
          "avatar": "https://avatars.githubusercontent.com/u/595772"
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
      "forks": 738,
      "added_stars": 4544,
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
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 250,000+ scientists worldwide. 168 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4261,
      "added_stars": 9692,
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
      "author": "petergyang",
      "repo": "no-ai-slop",
      "avatar": "https://github.com/petergyang.png",
      "repo_link": "https://github.com/petergyang/no-ai-slop",
      "desc": "Removes 20+ patterns of AI slop from any piece of writing.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 788,
      "added_stars": 5208,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8644,
      "added_stars": 7665,
      "builtBy": [
        {
          "username": "D4Vinci",
          "href": "https://github.com/D4Vinci",
          "avatar": "https://avatars.githubusercontent.com/u/20604835"
        },
        {
          "username": "yetval",
          "href": "https://github.com/yetval",
          "avatar": "https://avatars.githubusercontent.com/u/102706514"
        },
        {
          "username": "AbdullahY36",
          "href": "https://github.com/AbdullahY36",
          "avatar": "https://avatars.githubusercontent.com/u/52079299"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mhillebrand",
          "href": "https://github.com/mhillebrand",
          "avatar": "https://avatars.githubusercontent.com/u/286198"
        }
      ]
    },
    {
      "author": "Imbad0202",
      "repo": "academic-research-skills",
      "avatar": "https://github.com/Imbad0202.png",
      "repo_link": "https://github.com/Imbad0202/academic-research-skills",
      "desc": "Academic Research Skills for Claude Code: research → write → review → revise → finalize",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3854,
      "added_stars": 5899,
      "builtBy": [
        {
          "username": "Imbad0202",
          "href": "https://github.com/Imbad0202",
          "avatar": "https://avatars.githubusercontent.com/u/132531341"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "2023Anita",
          "href": "https://github.com/2023Anita",
          "avatar": "https://avatars.githubusercontent.com/u/126993554"
        },
        {
          "username": "didacrios",
          "href": "https://github.com/didacrios",
          "avatar": "https://avatars.githubusercontent.com/u/211009"
        },
        {
          "username": "madtriceps",
          "href": "https://github.com/madtriceps",
          "avatar": "https://avatars.githubusercontent.com/u/115035770"
        }
      ]
    },
    {
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10560,
      "added_stars": 10519,
      "builtBy": [
        {
          "username": "rohitg00",
          "href": "https://github.com/rohitg00",
          "avatar": "https://avatars.githubusercontent.com/u/48523873"
        },
        {
          "username": "abhinav-m22",
          "href": "https://github.com/abhinav-m22",
          "avatar": "https://avatars.githubusercontent.com/u/113239388"
        },
        {
          "username": "thereisnotime",
          "href": "https://github.com/thereisnotime",
          "avatar": "https://avatars.githubusercontent.com/u/37583483"
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
      "repo": "Model-Optimizer",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/Model-Optimizer",
      "desc": "A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 707,
      "added_stars": 1537,
      "builtBy": [
        {
          "username": "kevalmorabia97",
          "href": "https://github.com/kevalmorabia97",
          "avatar": "https://avatars.githubusercontent.com/u/28916987"
        },
        {
          "username": "shengliangxu",
          "href": "https://github.com/shengliangxu",
          "avatar": "https://avatars.githubusercontent.com/u/106840466"
        },
        {
          "username": "cjluo-nv",
          "href": "https://github.com/cjluo-nv",
          "avatar": "https://avatars.githubusercontent.com/u/108829653"
        },
        {
          "username": "h-guo18",
          "href": "https://github.com/h-guo18",
          "avatar": "https://avatars.githubusercontent.com/u/67671475"
        },
        {
          "username": "ajrasane",
          "href": "https://github.com/ajrasane",
          "avatar": "https://avatars.githubusercontent.com/u/131806219"
        }
      ]
    },
    {
      "author": "sgl-project",
      "repo": "sglang",
      "avatar": "https://github.com/sgl-project.png",
      "repo_link": "https://github.com/sgl-project/sglang",
      "desc": "SGLang is a high-performance serving framework for large language models and multimodal models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9224,
      "added_stars": 4035,
      "builtBy": [
        {
          "username": "merrymercy",
          "href": "https://github.com/merrymercy",
          "avatar": "https://avatars.githubusercontent.com/u/15100009"
        },
        {
          "username": "hnyls2002",
          "href": "https://github.com/hnyls2002",
          "avatar": "https://avatars.githubusercontent.com/u/95566987"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mickqian",
          "href": "https://github.com/mickqian",
          "avatar": "https://avatars.githubusercontent.com/u/30898949"
        },
        {
          "username": "fzyzcjy",
          "href": "https://github.com/fzyzcjy",
          "avatar": "https://avatars.githubusercontent.com/u/5236035"
        }
      ]
    },
    {
      "author": "browser-use",
      "repo": "browser-use",
      "avatar": "https://github.com/browser-use.png",
      "repo_link": "https://github.com/browser-use/browser-use",
      "desc": "Agents that use the browser.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12875,
      "added_stars": 5394,
      "builtBy": [
        {
          "username": "MagMueller",
          "href": "https://github.com/MagMueller",
          "avatar": "https://avatars.githubusercontent.com/u/67061560"
        },
        {
          "username": "pirate",
          "href": "https://github.com/pirate",
          "avatar": "https://avatars.githubusercontent.com/u/511499"
        },
        {
          "username": "mertunsall",
          "href": "https://github.com/mertunsall",
          "avatar": "https://avatars.githubusercontent.com/u/22038471"
        },
        {
          "username": "sauravpanda",
          "href": "https://github.com/sauravpanda",
          "avatar": "https://avatars.githubusercontent.com/u/12201824"
        },
        {
          "username": "gregpr07",
          "href": "https://github.com/gregpr07",
          "avatar": "https://avatars.githubusercontent.com/u/36313686"
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
      "forks": 5468,
      "added_stars": 35516,
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
      "author": "SnailSploit",
      "repo": "Claude-Red",
      "avatar": "https://github.com/SnailSploit.png",
      "repo_link": "https://github.com/SnailSploit/Claude-Red",
      "desc": "claude-red is a curated library of offensive security skills designed for the Claude skills system. Each skill is a structured SKILL.md file that primes Claude with expert-level methodology for a specific attack surface — from SQLi to shellcode, EDR evasion to exploit development.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 936,
      "added_stars": 4238,
      "builtBy": [
        {
          "username": "SnailSploit",
          "href": "https://github.com/SnailSploit",
          "avatar": "https://avatars.githubusercontent.com/u/95986478"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "halilkirazkaya",
          "href": "https://github.com/halilkirazkaya",
          "avatar": "https://avatars.githubusercontent.com/u/90972683"
        },
        {
          "username": "LvL23HT",
          "href": "https://github.com/LvL23HT",
          "avatar": "https://avatars.githubusercontent.com/u/130660521"
        },
        {
          "username": "yogesh-tessl",
          "href": "https://github.com/yogesh-tessl",
          "avatar": "https://avatars.githubusercontent.com/u/246077594"
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
      "forks": 3273,
      "added_stars": 5801,
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
      "forks": 8177,
      "added_stars": 7972,
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
      "author": "experientiallabs",
      "repo": "experiential",
      "avatar": "https://github.com/experientiallabs.png",
      "repo_link": "https://github.com/experientiallabs/experiential",
      "desc": "Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend better models, and train a specialized model you own.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 216,
      "added_stars": 6751,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "Type-safe OpenAPI requests that follow your document exactly",
      "url": "https://github.com/jskits/openapi-chain",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-29T11:50:33.000Z"
    },
    {
      "title": "Vite+ 1.0 is out",
      "url": "https://voidzero.dev/posts/announcing-vite-plus-1-0",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-28T10:10:33.000Z"
    },
    {
      "title": "Node.JS Built-Ins That Replaced NPM Packages",
      "url": "https://flaviocopes.com/node-builtins/",
      "upvotes": "3",
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
      "upvotes": "2",
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
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-3egf",
      "tags": "top7, discuss",
      "reactions": 43,
      "comments": 11,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "How to Build a Real-Time Voice AI Agent with the Gemini Live API",
      "description": "This post was originally posted on X, by Annie Wang, Developer Relations Engineer, Google Cloud and...",
      "url": "https://dev.to/googleai/how-to-build-a-real-time-voice-ai-agent-with-the-gemini-live-api-1dhe",
      "tags": "voiceai, ai, googlecloud, gemini",
      "reactions": 8,
      "comments": 0,
      "reading_time": 5,
      "author": "annie_cusack"
    },
    {
      "title": "Count It or Compute It: When a Tool Returns Rows, the Models That Count Them Right Spend the Tokens",
      "description": "A Kaggle benchmark of the step agents rarely test: counting what a tool returns. Ten models, 68 questions, one tool that returns the count and one that returns the rows. With the count, every model is right at a flat cost. With the rows, models that reason through the list count 330 ids right and spend 6 to 26 times the tokens doing it; models that answer straight away get 0 to 10 of 21.",
      "url": "https://dev.to/gde/count-it-or-compute-it-when-a-tool-returns-rows-the-models-that-count-them-right-spend-the-tokens-2hae",
      "tags": "devchallenge, kagglechallenge, ai, machinelearning",
      "reactions": 15,
      "comments": 5,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "Claude Sonnet 5.5 is now available on Google Cloud",
      "description": "Designed for coding and knowledge work, it helps you build features, and create clean work...",
      "url": "https://dev.to/googleai/claude-sonnet-55-is-now-available-on-google-cloud-168h",
      "tags": "",
      "reactions": 13,
      "comments": 2,
      "reading_time": 1,
      "author": "pugsandprincesses"
    },
    {
      "title": "7 ways to lock down AI agent sandboxes in production (beyond Docker containers)",
      "description": "Running an autonomous coding or ops agent directly on your laptop feels like a superpower for the...",
      "url": "https://dev.to/googleai/7-ways-to-lock-down-ai-agent-sandboxes-in-production-beyond-docker-containers-2bg3",
      "tags": "agents, sandbox, ai",
      "reactions": 7,
      "comments": 0,
      "reading_time": 5,
      "author": "optimist29"
    },
    {
      "title": "Disappeared Since March: Taking a Long Break Was My Best Decision Yet",
      "description": "If you checked my profile recently, you probably noticed my page has been completely quiet since...",
      "url": "https://dev.to/maame-codes/disappeared-since-march-taking-a-long-break-was-my-best-decision-yet-1n45",
      "tags": "",
      "reactions": 84,
      "comments": 31,
      "reading_time": 2,
      "author": "maame-codes"
    },
    {
      "title": "I connected a fruit fly connectome to tic-tac-toe (with a minimax safety net)",
      "description": "Scientists have mapped the whole nervous system of a fruit fly: every neuron and every connection, in...",
      "url": "https://dev.to/asyncinnovator/i-connected-a-fruit-fly-connectome-to-tic-tac-toe-with-a-minimax-safety-net-5bc0",
      "tags": "python, opensource, ai, beginners",
      "reactions": 15,
      "comments": 4,
      "reading_time": 3,
      "author": "asyncinnovator"
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
      "title": "I Built a Better Codex Pet Than OpenAI Did",
      "description": "Sometimes you just have to let the agent cook.           Mika vs. a multi-billion-dollar...",
      "url": "https://dev.to/mikachu/i-built-a-better-codex-pet-than-openai-did-eib",
      "tags": "opensource, python, linux, showdev",
      "reactions": 42,
      "comments": 8,
      "reading_time": 5,
      "author": "mikachu"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-2com",
      "tags": "discuss, watercooler, jokes",
      "reactions": 13,
      "comments": 19,
      "reading_time": 1,
      "author": "ben"
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
      "title": "A Cumulative Culture Theory for Developer Problem-Solving",
      "url": "https://osf.io/preprints/psyarxiv/tfjyw",
      "score": 1,
      "comments": 0,
      "tags": [
        "culture",
        "pdf",
        "practices"
      ],
      "id": "2cbgwf"
    },
    {
      "title": "A Reintroduction to Programming",
      "url": "https://www.0de5.net/explore",
      "score": 29,
      "comments": 0,
      "tags": [
        "education",
        "programming"
      ],
      "id": "90n75e"
    },
    {
      "title": "Antenna diodes in the Pentium processor",
      "url": "http://www.righto.com/2024/11/antenna-diodes-in-pentium-processor.html",
      "score": 10,
      "comments": 0,
      "tags": [
        "hardware"
      ],
      "id": "pdbofv"
    },
    {
      "title": "Improving the approachability of data-race safety",
      "url": "https://github.com/hborla/swift-evolution/blob/approachable-concurrency-vision/visions/approachable-concurrency.md",
      "score": 5,
      "comments": 1,
      "tags": [
        "swift"
      ],
      "id": "fsbkzg"
    },
    {
      "title": "Introduction to Bismuth VM",
      "url": "https://enikofox.com/posts/introduction-to-bismuth-vm/",
      "score": 17,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "fjbbvd"
    },
    {
      "title": "Dec(k)-Month 2: A Decker Jam in December",
      "url": "https://itch.io/jam/deck-month-2",
      "score": 17,
      "comments": 3,
      "tags": [
        "art",
        "programming"
      ],
      "id": "s3kemr"
    },
    {
      "title": "SQLite's use of Tcl",
      "url": "https://www.tcl.tk/community/tcl2017/assets/talk93/Paper.html",
      "score": 33,
      "comments": 6,
      "tags": [
        "databases"
      ],
      "id": "r1mipq"
    },
    {
      "title": "Reverse Engineering a 218-Byte Wasm Compiler in JavaScript",
      "url": "https://www.youtube.com/watch?v=HAe6TvbwXJw",
      "score": 6,
      "comments": 2,
      "tags": [
        "compilers",
        "javascript",
        "video",
        "wasm"
      ],
      "id": "qb7j5q"
    },
    {
      "title": "Dissecting m8trix",
      "url": "https://tilde.town/~dzwdz/blog/m8trix.html",
      "score": 10,
      "comments": 1,
      "tags": [
        "art",
        "assembly"
      ],
      "id": "6w5r0o"
    },
    {
      "title": "A 23-byte “hello, world” program assembled with DEBUG.EXE in MS-DOS",
      "url": "https://github.com/susam/hello",
      "score": 13,
      "comments": 10,
      "tags": [
        "assembly"
      ],
      "id": "l1w7eh"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "bryan0",
      "descendants": 202,
      "id": 49901736,
      "kids": [
        49902317,
        49905208,
        49904026,
        49902336,
        49902403,
        49904232,
        49902284,
        49902147,
        49904967,
        49902266,
        49903393,
        49902253,
        49902565,
        49902054,
        49904286,
        49904275,
        49902262,
        49904237,
        49902306,
        49904197,
        49902997,
        49903694,
        49902651,
        49902319,
        49903622,
        49902709,
        49902310,
        49902307,
        49902008,
        49903536,
        49902182,
        49902489,
        49904264,
        49903906,
        49902898
      ],
      "score": 478,
      "time": 1790721374,
      "title": "Livenerf: Has Opus 5.5 been nerfed yet?",
      "type": "story",
      "url": "https://github.com/ninjahawk/livenerf"
    },
    {
      "by": "sparticle62",
      "descendants": 17,
      "id": 49903993,
      "kids": [
        49905225,
        49904534,
        49904618,
        49905167,
        49904227,
        49904767,
        49904566,
        49904241,
        49904261,
        49904214
      ],
      "score": 63,
      "time": 1790738394,
      "title": "PSSA: A non-transformer language model written from scratch in Rust",
      "type": "story",
      "url": "https://github.com/Sparticle62ops/pssa"
    },
    {
      "by": "alvis",
      "descendants": 408,
      "id": 49896604,
      "kids": [
        49897626,
        49900124,
        49896969,
        49899033,
        49898456,
        49905243,
        49900640,
        49899084,
        49897481,
        49896745,
        49901589,
        49897297,
        49898209,
        49905154,
        49901297,
        49897138,
        49897896,
        49896790,
        49897554,
        49899531,
        49897293,
        49904587,
        49896810,
        49896981,
        49904229,
        49896646,
        49898799,
        49898398,
        49899001,
        49902042,
        49904787,
        49896959,
        49902002,
        49899609,
        49896800,
        49897295,
        49905040,
        49902735,
        49904522,
        49899181,
        49904760,
        49898012,
        49900097,
        49897126,
        49904324,
        49897320,
        49898772,
        49898550,
        49900707,
        49904280,
        49899139,
        49897824,
        49898606,
        49897977,
        49904198,
        49904478,
        49898167,
        49899759,
        49898528,
        49897601,
        49897390,
        49903011,
        49897840,
        49898283,
        49898979,
        49898210,
        49896996,
        49899698,
        49897989,
        49904327,
        49901724,
        49904538,
        49897624,
        49897024,
        49897097,
        49901201,
        49897290,
        49902324,
        49897033,
        49897576,
        49896766,
        49896895,
        49896755,
        49897526,
        49897284,
        49896767,
        49899197,
        49896995,
        49901577,
        49897564,
        49900967,
        49898925,
        49904500,
        49897000,
        49897455,
        49898790,
        49898200,
        49896776,
        49898269,
        49897585,
        49902929,
        49896749,
        49897963,
        49898030,
        49897574,
        49897866,
        49896797,
        49898644,
        49897969,
        49898561,
        49897662,
        49901023,
        49896866,
        49897299,
        49898070,
        49897992,
        49898928,
        49898433,
        49898407,
        49898223,
        49896835,
        49897837,
        49897573,
        49897141,
        49896834,
        49896831,
        49898109,
        49897383,
        49904328,
        49901537,
        49898961,
        49899005,
        49898512,
        49897916,
        49904035,
        49901844,
        49902674,
        49903046,
        49898319,
        49896912,
        49896891
      ],
      "score": 547,
      "time": 1790701677,
      "title": "Dots: Always-on agents",
      "type": "story",
      "url": "https://openai.com/index/introducing-dots/"
    },
    {
      "by": "aureianimus",
      "descendants": 26,
      "id": 49903713,
      "kids": [
        49904600,
        49905203,
        49904744,
        49905248,
        49904638,
        49905184,
        49904489,
        49904694,
        49904755,
        49905008
      ],
      "score": 29,
      "time": 1790735772,
      "title": "Responsible Release of AI-Generated Mathematics",
      "type": "story",
      "url": "https://agmai.org/general-sep29/"
    },
    {
      "by": "ilamont",
      "descendants": 122,
      "id": 49899090,
      "kids": [
        49899904,
        49901755,
        49902058,
        49899827,
        49899830,
        49905029,
        49901133,
        49903397,
        49899803,
        49899601,
        49899588,
        49904338,
        49900857,
        49900628,
        49901718,
        49901892,
        49903434,
        49903153,
        49901632,
        49900981,
        49899897,
        49900582,
        49899828
      ],
      "score": 206,
      "time": 1790710217,
      "title": "U.S. postal inspectors shut down website selling counterfeit postage labels",
      "type": "story",
      "url": "https://postalemployeenetwork.com/news/2026/09/26/u-s-postal-inspectors-shut-down-website-selling-millions-of-counterfeit-postage-labels/"
    },
    {
      "by": "devonnull",
      "descendants": 119,
      "id": 49897993,
      "kids": [
        49904231,
        49902958,
        49903714,
        49902291,
        49904965,
        49901837,
        49903070,
        49904547,
        49903680,
        49898348,
        49903591,
        49903570,
        49903112,
        49904411,
        49903218,
        49902286,
        49904679,
        49902903,
        49903844,
        49902475,
        49902292,
        49903413,
        49903555,
        49898381,
        49902377
      ],
      "score": 146,
      "text": "See also <a href=\"https:&#x2F;&#x2F;electrek.co&#x2F;2026&#x2F;07&#x2F;28&#x2F;vermonts-largest-energy-source-is-now-a-virtual-power-plant&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;electrek.co&#x2F;2026&#x2F;07&#x2F;28&#x2F;vermonts-largest-energy-sourc...</a>",
      "time": 1790705942,
      "title": "Vermont replacing power plants with home batteries",
      "type": "story",
      "url": "https://www.bbc.com/future/article/20260928-a-virtual-power-plant-hidden-in-vermont-homes-is-keeping-the-lights-on-during-storms"
    },
    {
      "by": "ilamont",
      "descendants": 110,
      "id": 49890733,
      "kids": [
        49905247,
        49902714,
        49902825,
        49904847,
        49903154,
        49902940,
        49903305,
        49903284,
        49902729,
        49904809,
        49902963,
        49902739,
        49902955,
        49902784,
        49902679,
        49902690,
        49903786,
        49903271,
        49904129,
        49902624,
        49903114,
        49892010,
        49902895,
        49902562,
        49903252
      ],
      "score": 118,
      "time": 1790676620,
      "title": "NASA asked several former SR-71A staffers to help secret restart",
      "type": "story",
      "url": "https://aviationweek.com/defense/aircraft-propulsion/nasa-asked-several-former-sr-71a-staffers-help-secret-restart"
    },
    {
      "by": "plesiv",
      "descendants": 413,
      "id": 49893509,
      "kids": [
        49904268,
        49895289,
        49903740,
        49895915,
        49895213,
        49904470,
        49905041,
        49903034,
        49904401,
        49901065,
        49905170,
        49901974,
        49895244,
        49904427,
        49902259,
        49905134,
        49901473,
        49905132,
        49901775,
        49904751,
        49902573,
        49900457,
        49904990,
        49902079,
        49895419,
        49904151,
        49900669,
        49903277,
        49903602,
        49904399,
        49901364,
        49904109,
        49904069,
        49894931,
        49895283,
        49904057,
        49895578,
        49900397,
        49903590,
        49901625,
        49904319,
        49903465,
        49904732,
        49903703,
        49896640,
        49902415,
        49901681,
        49900493,
        49895753,
        49896234,
        49901901,
        49903639,
        49902609,
        49903308,
        49903889,
        49901397,
        49903943,
        49901712,
        49904663,
        49901389,
        49903417,
        49902616,
        49894882,
        49901829,
        49904606,
        49903952,
        49903347,
        49904248,
        49898526,
        49902151,
        49902706,
        49900298,
        49900622,
        49903823,
        49904092,
        49902368,
        49902912,
        49902113,
        49901903,
        49903752,
        49901840,
        49900959,
        49900514,
        49900632,
        49901126,
        49900919,
        49903113,
        49901564,
        49902563,
        49894901,
        49895388,
        49894972,
        49901895,
        49895338,
        49901873,
        49902166,
        49903760,
        49900541,
        49904155,
        49900467,
        49901539,
        49900991,
        49904496,
        49902982,
        49895812,
        49895050,
        49894992,
        49895319,
        49895315,
        49895398,
        49894994,
        49895323,
        49895340,
        49895333,
        49895121,
        49895360,
        49894953,
        49904254,
        49904243,
        49895395,
        49895365,
        49900508,
        49895754,
        49901034,
        49900695
      ],
      "score": 498,
      "time": 1790690697,
      "title": "America.gov",
      "type": "story",
      "url": "https://america.gov/"
    },
    {
      "by": "wanick",
      "descendants": 45,
      "id": 49898778,
      "kids": [
        49905249,
        49903331,
        49899187,
        49902730,
        49902769,
        49902174,
        49904950,
        49904842,
        49904490,
        49903269,
        49901311,
        49903021,
        49901847,
        49903171,
        49900584,
        49900341,
        49901785,
        49903266,
        49904033,
        49901415,
        49903243,
        49899081,
        49900732,
        49903724,
        49903585,
        49903586,
        49901576,
        49898803
      ],
      "score": 190,
      "time": 1790708881,
      "title": "Show HN: Real-time Solar System with 526k asteroids and all tracked satellites",
      "type": "story",
      "url": "https://space.bl2.net/"
    },
    {
      "by": "luu",
      "descendants": 0,
      "id": 49883913,
      "score": 13,
      "time": 1790627288,
      "title": "Testing WebGPU data layouts with Facet",
      "type": "story",
      "url": "https://www.mattkeeter.com/blog/2026-08-23-wgpu-facet/"
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
      "title": "I Ran My Career Like a Production System for 12 Weeks. The Dashboard Was Wrong Before I Was.",
      "description": "For 25 years I've been the person in the room asking to see the data. In incident reviews, in...",
      "url": "https://dev.to/debashish_ghosal/i-ran-my-career-like-a-production-system-for-12-weeks-the-dashboard-was-wrong-before-i-was-285l",
      "tags": "growth, career, healthydebate, leadership",
      "reactions": 6,
      "comments": 0,
      "reading_time": 7,
      "author": "debashish_ghosal"
    },
    {
      "title": "I Got a Signed Job Offer Letter for a Job that Never Existed",
      "description": "I passed a 48-hour technical challenge, received an offer letter, and then lost the job because I had...",
      "url": "https://dev.to/frihk_ian/i-got-a-signed-job-offer-letter-for-a-job-that-never-existed-5f1d",
      "tags": "career, cybersecurity, security",
      "reactions": 10,
      "comments": 0,
      "reading_time": 3,
      "author": "frihk_ian"
    },
    {
      "title": "🔍 Human Code Review Will Not Die Anytime Soon",
      "description": "Agents iterate in a sandbox. CI briefs the PR. A named human still owns merge.",
      "url": "https://dev.to/zenika/human-code-review-will-not-die-anytime-soon-9h2",
      "tags": "career, programming, productivity, devops",
      "reactions": 10,
      "comments": 1,
      "reading_time": 14,
      "author": "bcouetil"
    },
    {
      "title": "Why your code review comments sound harsher than you meant",
      "description": "A review comment loses your tone on the way, and the author fills it back in — usually with a worse one, at the exact moment they're most attached to the work. Here's how to put the weight back into what you write, the words to use, and when to stop typing.",
      "url": "https://dev.to/parsajiravand/why-your-code-review-comments-sound-harsher-than-you-meant-16pd",
      "tags": "career, codereview, beginners, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "parsajiravand"
    },
    {
      "title": "KontrakAman: Ketika AI Agent Turun Tangan Membela Hak Pekerja Indonesia",
      "description": "Berapa banyak dari kita yang benar-benar membaca setiap pasal di kontrak kerja sebelum...",
      "url": "https://dev.to/fazani/kontrakaman-ketika-ai-agent-turun-tangan-membela-hak-pekerja-indonesia-3k5j",
      "tags": "agents, ai, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "fazani"
    },
    {
      "title": "I've been a developer for 10 years. AI just showed me I only had one real skill.\"",
      "description": "Last Sunday I built an invoice tracker for a friend who runs a small shop. Nothing clever. I...",
      "url": "https://dev.to/infoinlet1/ive-been-a-developer-for-10-years-ai-just-showed-me-i-only-had-one-real-skill-38p",
      "tags": "ai, webdev, career, discuss",
      "reactions": 7,
      "comments": 1,
      "reading_time": 6,
      "author": "infoinlet1"
    },
    {
      "title": "AI Isn’t Taking Your Job, but \"Agentic AI\" Is Changing What It Means to Be a Developer",
      "description": "A few years ago, the conversation around AI in tech was mostly about auto-completing a line of code...",
      "url": "https://dev.to/chamod_madhushan/ai-isnt-taking-your-job-but-agentic-ai-is-changing-what-it-means-to-be-a-developer-4c10",
      "tags": "ai, devops, career, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "chamod_madhushan"
    },
    {
      "title": "When Was the Last Time You Actually Finished a Paper Book?",
      "description": "Have you noticed this?  Smartphones and the internet aren't anything new anymore. They're...",
      "url": "https://dev.to/xulingfeng/when-was-the-last-time-you-actually-finished-a-paper-book-280b",
      "tags": "discuss, career, programming, productivity",
      "reactions": 31,
      "comments": 30,
      "reading_time": 4,
      "author": "xulingfeng"
    },
    {
      "title": "The Second Reader: A Practical Guide to Writing That Still Makes Sense Later",
      "description": "A practical guide to writing technical work for the person who arrives later, without the meeting, the chat, or the private context.",
      "url": "https://dev.to/alexjosephke/the-second-reader-a-practical-guide-to-writing-that-still-makes-sense-later-3abo",
      "tags": "beginners, productivity, career, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "alexjosephke"
    },
    {
      "title": "The Harsh Reality of Hiring from Tier-3 Engineering Colleges in 2026",
      "description": "If you open LinkedIn today, you will see two extreme narratives: an influencer preaching that degrees...",
      "url": "https://dev.to/senkulokesh123/the-harsh-reality-of-hiring-from-tier-3-engineering-colleges-in-2026-376f",
      "tags": "career, webdev, programming, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "senkulokesh123"
    }
  ]
}
```

