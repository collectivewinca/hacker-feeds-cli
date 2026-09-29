# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-29 06:42:25 UTC

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
      "forks": 15936,
      "added_stars": 10518,
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
      "forks": 5269,
      "added_stars": 6151,
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
      "forks": 263,
      "added_stars": 465,
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
      "forks": 1812,
      "added_stars": 6481,
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
      "forks": 622,
      "added_stars": 1167,
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
      "forks": 2386,
      "added_stars": 1968,
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
      "forks": 1282,
      "added_stars": 444,
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
      "author": "Crosstalk-Solutions",
      "repo": "project-nomad",
      "avatar": "https://github.com/Crosstalk-Solutions.png",
      "repo_link": "https://github.com/Crosstalk-Solutions/project-nomad",
      "desc": "Project NOMAD is an offline-first knowledge and education server. Wikipedia, thousands of books, courses, maps, and optional local AI, all running on hardware you own with no internet required.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3863,
      "added_stars": 966,
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
      "repo": "claude-code",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code",
      "desc": "Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 24993,
      "added_stars": 1130,
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
      "author": "mobile-next",
      "repo": "mobile-mcp",
      "avatar": "https://github.com/mobile-next.png",
      "repo_link": "https://github.com/mobile-next/mobile-mcp",
      "desc": "Model Context Protocol Server for Mobile Automation and Scraping (iOS, Android, Emulators, Simulators and Real Devices)",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 723,
      "added_stars": 1419,
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
      "author": "ahmedkhaleel2004",
      "repo": "gitdiagram",
      "avatar": "https://github.com/ahmedkhaleel2004.png",
      "repo_link": "https://github.com/ahmedkhaleel2004/gitdiagram",
      "desc": "Free, simple, fast interactive diagrams and videos for any GitHub repository",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1330,
      "added_stars": 509,
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
      "author": "anthropics",
      "repo": "claude-code-action",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-action",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2175,
      "added_stars": 308,
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
      "author": "vercel-labs",
      "repo": "scriptc",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/scriptc",
      "desc": "TypeScript-to-Native Compiler",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 148,
      "added_stars": 714,
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
      "author": "bendlang",
      "repo": "bend",
      "avatar": "https://github.com/bendlang.png",
      "repo_link": "https://github.com/bendlang/bend",
      "desc": "Bend 2: a fast language that blocks AI mistakes via proof. Install: curl -fsSL https://bend-lang.com/install.sh | sh",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 711,
      "added_stars": 821,
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
      "author": "NginxProxyManager",
      "repo": "nginx-proxy-manager",
      "avatar": "https://github.com/NginxProxyManager.png",
      "repo_link": "https://github.com/NginxProxyManager/nginx-proxy-manager",
      "desc": "Docker container for managing Nginx proxy hosts with a simple, powerful interface",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3919,
      "added_stars": 92,
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
      "author": "yikart",
      "repo": "AiToEarn",
      "avatar": "https://github.com/yikart.png",
      "repo_link": "https://github.com/yikart/AiToEarn",
      "desc": "Let's use AI to Earn!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4338,
      "added_stars": 281,
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
      "forks": 3040,
      "added_stars": 20955,
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
      "forks": 4151,
      "added_stars": 10271,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 468,
      "added_stars": 2300,
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
      "author": "tailscale",
      "repo": "tailcat",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailcat",
      "desc": "like netcat, but over Tailscale's data plane, without Tailscale's control plane",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 334,
      "added_stars": 5437,
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
      "author": "vllm-project",
      "repo": "semantic-router",
      "avatar": "https://github.com/vllm-project.png",
      "repo_link": "https://github.com/vllm-project/semantic-router",
      "desc": "A programmable Mixture-of-Models router for heterogeneous LLM inference",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 988,
      "added_stars": 597,
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
      "author": "coder",
      "repo": "coder",
      "avatar": "https://github.com/coder.png",
      "repo_link": "https://github.com/coder/coder",
      "desc": "Secure environments for developers and their agents",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1596,
      "added_stars": 2625,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 253,
      "added_stars": 2629,
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
      "forks": 955,
      "added_stars": 1540,
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
      "author": "gtsteffaniak",
      "repo": "filebrowser",
      "avatar": "https://github.com/gtsteffaniak.png",
      "repo_link": "https://github.com/gtsteffaniak/filebrowser",
      "desc": "📂 Web File Browser",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 446,
      "added_stars": 579,
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
      "forks": 1462,
      "added_stars": 565,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1055,
      "added_stars": 1075,
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
      "author": "drakkan",
      "repo": "sftpgo",
      "avatar": "https://github.com/drakkan.png",
      "repo_link": "https://github.com/drakkan/sftpgo",
      "desc": "Full-featured and highly configurable SFTP, HTTP/S, FTP/S and WebDAV server - S3, Google Cloud Storage, Azure Blob",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 970,
      "added_stars": 147,
      "builtBy": [
        {
          "username": "drakkan",
          "href": "https://github.com/drakkan",
          "avatar": "https://avatars.githubusercontent.com/u/553263"
        },
        {
          "username": "jovandeginste",
          "href": "https://github.com/jovandeginste",
          "avatar": "https://avatars.githubusercontent.com/u/3170771"
        },
        {
          "username": "sagikazarmark",
          "href": "https://github.com/sagikazarmark",
          "avatar": "https://avatars.githubusercontent.com/u/1226384"
        },
        {
          "username": "enescakir",
          "href": "https://github.com/enescakir",
          "avatar": "https://avatars.githubusercontent.com/u/993199"
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
      "forks": 4286,
      "added_stars": 647,
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
      "forks": 3225,
      "added_stars": 3088,
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
      "author": "navidrome",
      "repo": "navidrome",
      "avatar": "https://github.com/navidrome.png",
      "repo_link": "https://github.com/navidrome/navidrome",
      "desc": "🎧 Your Personal Streaming Service",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1731,
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
      "author": "seaweedfs",
      "repo": "seaweedfs",
      "avatar": "https://github.com/seaweedfs.png",
      "repo_link": "https://github.com/seaweedfs/seaweedfs",
      "desc": "SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3013,
      "added_stars": 804,
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
      "author": "weave-os",
      "repo": "router",
      "avatar": "https://github.com/weave-os.png",
      "repo_link": "https://github.com/weave-os/router",
      "desc": "Model router for agentic systems. Routes every prompt to the right model in <50ms. Cut costs 40-70% with just an endpoint change.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 144,
      "added_stars": 3078,
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
      "forks": 1495,
      "added_stars": 436,
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
      "author": "glanceapp",
      "repo": "glance",
      "avatar": "https://github.com/glanceapp.png",
      "repo_link": "https://github.com/glanceapp/glance",
      "desc": "A self-hosted dashboard that puts all your feeds in one place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1470,
      "added_stars": 670,
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
      "author": "projectdiscovery",
      "repo": "katana",
      "avatar": "https://github.com/projectdiscovery.png",
      "repo_link": "https://github.com/projectdiscovery/katana",
      "desc": "A next-generation crawling and spidering framework.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1190,
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
      "author": "e2b-dev",
      "repo": "runtime",
      "avatar": "https://github.com/e2b-dev.png",
      "repo_link": "https://github.com/e2b-dev/runtime",
      "desc": "The runtime behind every E2B stack: Cloud, Enterprise, and your own machine.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 451,
      "added_stars": 416,
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
      "author": "kubernetes",
      "repo": "minikube",
      "avatar": "https://github.com/kubernetes.png",
      "repo_link": "https://github.com/kubernetes/minikube",
      "desc": "Run Kubernetes locally",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5334,
      "added_stars": 110,
      "builtBy": [
        {
          "username": "medyagh",
          "href": "https://github.com/medyagh",
          "avatar": "https://avatars.githubusercontent.com/u/4564227"
        },
        {
          "username": "spowelljr",
          "href": "https://github.com/spowelljr",
          "avatar": "https://avatars.githubusercontent.com/u/44844360"
        },
        {
          "username": "sharifelgamal",
          "href": "https://github.com/sharifelgamal",
          "avatar": "https://avatars.githubusercontent.com/u/20781941"
        },
        {
          "username": "afbjorklund",
          "href": "https://github.com/afbjorklund",
          "avatar": "https://avatars.githubusercontent.com/u/10364051"
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
      "forks": 309,
      "added_stars": 3001,
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
      "forks": 5171,
      "added_stars": 30611,
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
      "author": "anthropics",
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5489,
      "added_stars": 3538,
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
      "author": "pollen-robotics",
      "repo": "microduck_rl",
      "avatar": "https://github.com/pollen-robotics.png",
      "repo_link": "https://github.com/pollen-robotics/microduck_rl",
      "desc": "RL training environments for Microduck (mjlab)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 500,
      "added_stars": 2019,
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2990,
      "added_stars": 26854,
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
      "forks": 3267,
      "added_stars": 5752,
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
      "author": "TencentCloud",
      "repo": "Octop",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/Octop",
      "desc": "A smarter, self-hosted AI assistant — multi-user, multi-agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 693,
      "added_stars": 4274,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8165,
      "added_stars": 7920,
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
      "forks": 1209,
      "added_stars": 4089,
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
          "username": "kok-o",
          "href": "https://github.com/kok-o",
          "avatar": "https://avatars.githubusercontent.com/u/173567992"
        }
      ]
    },
    {
      "author": "zubair-trabzada",
      "repo": "geo-seo-claude",
      "avatar": "https://github.com/zubair-trabzada.png",
      "repo_link": "https://github.com/zubair-trabzada/geo-seo-claude",
      "desc": "GEO-first SEO skill for Claude Code. Comprehensive AI search optimization for any website — citability scoring, AI crawler analysis, brand authority, schema markup, platform-specific optimization, and PDF reports. If you want learn how to sell this to real businesses, check out the skool community",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1655,
      "added_stars": 1397,
      "builtBy": [
        {
          "username": "zubair-trabzada",
          "href": "https://github.com/zubair-trabzada",
          "avatar": "https://avatars.githubusercontent.com/u/13802400"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "richard-scott",
          "href": "https://github.com/richard-scott",
          "avatar": "https://avatars.githubusercontent.com/u/5149834"
        },
        {
          "username": "xiaolai",
          "href": "https://github.com/xiaolai",
          "avatar": "https://avatars.githubusercontent.com/u/152970"
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
      "forks": 213,
      "added_stars": 6678,
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
      "author": "handsomestWei",
      "repo": "patent-disclosure-skill",
      "avatar": "https://github.com/handsomestWei.png",
      "repo_link": "https://github.com/handsomestWei/patent-disclosure-skill",
      "desc": "中国专利.skill：专利点挖掘与交底书（发明/实用/外观）编写，通俗解读专利，嗅探政策动向，辅助审查答复。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1083,
      "added_stars": 5115,
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
      "forks": 1283,
      "added_stars": 1498,
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
      "forks": 235,
      "added_stars": 1809,
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
      "added_stars": 2678,
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
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4241,
      "added_stars": 11208,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1618,
      "added_stars": 3493,
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
      "author": "dgtlmoon",
      "repo": "changedetection.io",
      "avatar": "https://github.com/dgtlmoon.png",
      "repo_link": "https://github.com/dgtlmoon/changedetection.io",
      "desc": "Best and simplest tool for website change detection, web page monitoring, and website change alerts. Perfect for tracking content changes, price drops, restock alerts, and website defacement monitoring—all for free or enjoy our SaaS plan!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2108,
      "added_stars": 1404,
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
      "author": "feder-cr",
      "repo": "invisible_playwright_mcp",
      "avatar": "https://github.com/feder-cr.png",
      "repo_link": "https://github.com/feder-cr/invisible_playwright_mcp",
      "desc": "Playwright MCP server undetected by anti-bots and captchas: AI agent browses the web on anti-detect stealth Firefox, Python, undetected browser automation, scraping, computer use.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4680,
      "added_stars": 1646,
      "builtBy": [
        {
          "username": "feder-cr",
          "href": "https://github.com/feder-cr",
          "avatar": "https://avatars.githubusercontent.com/u/85809106"
        },
        {
          "username": "surapuramakhil",
          "href": "https://github.com/surapuramakhil",
          "avatar": "https://avatars.githubusercontent.com/u/9161543"
        },
        {
          "username": "sarob",
          "href": "https://github.com/sarob",
          "avatar": "https://avatars.githubusercontent.com/u/1191994"
        },
        {
          "username": "thomHayner",
          "href": "https://github.com/thomHayner",
          "avatar": "https://avatars.githubusercontent.com/u/49766988"
        },
        {
          "username": "activatedbonkers",
          "href": "https://github.com/activatedbonkers",
          "avatar": "https://avatars.githubusercontent.com/u/55624580"
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
      "forks": 2106,
      "added_stars": 4550,
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
      "forks": 648,
      "added_stars": 147,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
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
    },
    {
      "title": "Turn the five Platonic solids in 3D, show their duals, and read their measurements",
      "url": "https://github.com/evoluteur/platonic-solids",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-04T07:14:05.000Z"
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
      "title": "Count It or Compute It: When a Tool Returns Rows, the Models That Count Them Right Spend the Tokens",
      "description": "A Kaggle benchmark of the step agents rarely test: counting what a tool returns. Ten models, 68 questions, one tool that returns the count and one that returns the rows. With the count, every model is right at a flat cost. With the rows, models that reason through the list count 330 ids right and spend 6 to 26 times the tokens doing it; models that answer straight away get 0 to 10 of 21.",
      "url": "https://dev.to/gde/count-it-or-compute-it-when-a-tool-returns-rows-the-models-that-count-them-right-spend-the-tokens-2hae",
      "tags": "devchallenge, kagglechallenge, ai, machinelearning",
      "reactions": 8,
      "comments": 3,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "How to Build a Real-Time Voice AI Agent with the Gemini Live API",
      "description": "This post was originally posted on X, by Annie Wang, Developer Relations Engineer, Google Cloud and...",
      "url": "https://dev.to/googleai/how-to-build-a-real-time-voice-ai-agent-with-the-gemini-live-api-1dhe",
      "tags": "voiceai, ai, googlecloud, gemini",
      "reactions": 7,
      "comments": 0,
      "reading_time": 5,
      "author": "annie_cusack"
    },
    {
      "title": "I connected a fruit fly connectome to tic-tac-toe (with a minimax safety net)",
      "description": "Scientists have mapped the whole nervous system of a fruit fly: every neuron and every connection, in...",
      "url": "https://dev.to/asyncinnovator/i-connected-a-fruit-fly-connectome-to-tic-tac-toe-with-a-minimax-safety-net-5bc0",
      "tags": "python, opensource, ai, beginners",
      "reactions": 13,
      "comments": 4,
      "reading_time": 3,
      "author": "asyncinnovator"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-2com",
      "tags": "discuss, watercooler, jokes",
      "reactions": 9,
      "comments": 15,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Claude Sonnet 5.5 is now available on Google Cloud",
      "description": "Designed for coding and knowledge work, it helps you build features, and create clean work...",
      "url": "https://dev.to/googleai/claude-sonnet-55-is-now-available-on-google-cloud-168h",
      "tags": "",
      "reactions": 11,
      "comments": 2,
      "reading_time": 1,
      "author": "pugsandprincesses"
    },
    {
      "title": "7 ways to lock down AI agent sandboxes in production (beyond Docker containers)",
      "description": "Running an autonomous coding or ops agent directly on your laptop feels like a superpower for the...",
      "url": "https://dev.to/googleai/7-ways-to-lock-down-ai-agent-sandboxes-in-production-beyond-docker-containers-2bg3",
      "tags": "agents, sandbox, ai",
      "reactions": 6,
      "comments": 0,
      "reading_time": 5,
      "author": "optimist29"
    },
    {
      "title": "The Sand in the Oyster: Why Riverpod Was Needed, and Why You Don't Need It Any More",
      "description": "The hidden mechanical flaw in Flutter's InheritedWidget that forced the creation of Riverpod, why escaping the widget tree created its own architectural taxes, and how push-pull signals finally resolve the tension.",
      "url": "https://dev.to/gde/the-sand-in-the-oyster-why-riverpod-was-needed-and-why-you-dont-need-it-any-more-204o",
      "tags": "flutter, dart, riverpod, statemanagement",
      "reactions": 9,
      "comments": 1,
      "reading_time": 10,
      "author": "randalschwartz"
    },
    {
      "title": "8 Posts by Women on DEV That Deserve More Than a Once-a-Year Spotlight",
      "description": "We went looking for good posts by women on DEV. Not \"inspirational,\" not \"diverse\" but just genuinely...",
      "url": "https://dev.to/sheships/8-posts-by-women-on-dev-that-deserve-more-than-a-once-a-year-spotlight-27dc",
      "tags": "wecoded, womenintech, showdev, career",
      "reactions": 53,
      "comments": 22,
      "reading_time": 4,
      "author": "mikachu"
    },
    {
      "title": "Disappeared Since March: Taking a Long Break Was My Best Decision Yet",
      "description": "If you checked my profile recently, you probably noticed my page has been completely quiet since...",
      "url": "https://dev.to/maame-codes/disappeared-since-march-taking-a-long-break-was-my-best-decision-yet-1n45",
      "tags": "",
      "reactions": 83,
      "comments": 31,
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
      "title": "My experience writing automated tests for a SPA",
      "url": "https://reecoute.fr/tech_blog/2026-09-28_my-experience-writing-automated-tests-for-a-spa",
      "score": 3,
      "comments": 0,
      "tags": [
        "testing",
        "web"
      ],
      "id": "vlywx2"
    },
    {
      "title": "Optimising for fast builds with GHC",
      "url": "https://www.youtube.com/watch?v=nmE6aa_I5TU",
      "score": 1,
      "comments": 0,
      "tags": [
        "haskell",
        "video"
      ],
      "id": "3ww0wy"
    },
    {
      "title": "Switching To Emacs as a Neovim User",
      "url": "https://eliasebner.com/blog/thoughts/switching-to-emacs-as-a-neovim-user/",
      "score": 3,
      "comments": 0,
      "tags": [
        "emacs",
        "vim"
      ],
      "id": "bctr1m"
    },
    {
      "title": "Adding Floating-Point Decimals for Fun and Profit",
      "url": "https://blog.vero.site/post/float",
      "score": 2,
      "comments": 0,
      "tags": [
        "math"
      ],
      "id": "bm2juk"
    },
    {
      "title": "Thoughts on Flash (2010)",
      "url": "https://web.archive.org/web/20100501010616/http://www.apple.com/hotnews/thoughts-on-flash/",
      "score": 4,
      "comments": 1,
      "tags": [
        "mac"
      ],
      "id": "t8bsws"
    },
    {
      "title": "State of the (Tagged) Union Address by Andrew Kelley",
      "url": "https://www.youtube.com/watch?v=zwi5b5xSsKA",
      "score": 18,
      "comments": 0,
      "tags": [
        "video",
        "zig"
      ],
      "id": "okds3e"
    },
    {
      "title": "I'm Upping My P(doom)",
      "url": "https://www.youtube.com/watch?v=5EoO5413dBY",
      "score": -2,
      "comments": 0,
      "tags": [
        "vibecoding",
        "video"
      ],
      "id": "phz6kd"
    },
    {
      "title": "What Would A Serious AI Product Look Like?",
      "url": "https://blog.glyph.im/2026/09/serious-ai-product.html",
      "score": 59,
      "comments": 6,
      "tags": [
        "a11y",
        "design",
        "vibecoding"
      ],
      "id": "q2rymh"
    },
    {
      "title": "Bill Gates tries to install Movie Maker",
      "url": "https://www.techemails.com/p/bill-gates-tries-to-install-movie-maker",
      "score": 73,
      "comments": 7,
      "tags": [
        "windows"
      ],
      "id": "lfqtgh"
    },
    {
      "title": "HardenedBSD August / September 2026 Status Report",
      "url": "https://hardenedbsd.org/article/shawn-webb/2026-09-27/hardenedbsd-august-september-2026-status-report",
      "score": 16,
      "comments": 0,
      "tags": [
        "freebsd",
        "security"
      ],
      "id": "roo5hm"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "evakhoury",
      "descendants": 8,
      "id": 49880411,
      "kids": [
        49888287,
        49888954,
        49888476,
        49889050,
        49888760,
        49888595,
        49888714,
        49888826,
        49888696
      ],
      "score": 75,
      "time": 1790612337,
      "title": "Phyllotaxis: An audio-reactive LED display",
      "type": "story",
      "url": "https://jagi.studio/posts/phyllotaxis/"
    },
    {
      "by": "piotrgrabowski",
      "descendants": 252,
      "id": 49880036,
      "kids": [
        49881259,
        49883151,
        49880486,
        49883123,
        49880291,
        49881250,
        49883678,
        49882564,
        49881132,
        49885827,
        49882600,
        49887265,
        49888216,
        49883348,
        49883547,
        49881608,
        49881604,
        49885721,
        49881603,
        49883983,
        49883695,
        49882465,
        49880657,
        49887667,
        49882843,
        49883401,
        49884545,
        49881538,
        49881395,
        49881635,
        49883502,
        49882575,
        49884904,
        49883195,
        49882357,
        49883015,
        49888910,
        49889084,
        49888218,
        49883735,
        49884401
      ],
      "score": 520,
      "time": 1790610855,
      "title": "Pirating the Pirates",
      "type": "story",
      "url": "https://mubi.com/en/notebook/posts/pirating-the-pirates"
    },
    {
      "by": "randycupertino",
      "descendants": 362,
      "id": 49883539,
      "kids": [
        49886788,
        49884609,
        49888615,
        49888890,
        49888985,
        49888795,
        49887073,
        49887544,
        49886781,
        49884006,
        49888866,
        49887950,
        49888618,
        49886987,
        49888515,
        49888771,
        49888005,
        49889002,
        49884103,
        49887980,
        49887106,
        49884584,
        49887028,
        49886930,
        49888858,
        49887228,
        49884755,
        49887566,
        49884565,
        49888305,
        49888186,
        49884735,
        49887050,
        49884091,
        49884357,
        49888392,
        49886917,
        49888281,
        49884411,
        49884663,
        49884039,
        49887398,
        49888240,
        49884549,
        49887072,
        49887006,
        49888357,
        49888098,
        49888762
      ],
      "score": 169,
      "time": 1790625606,
      "title": "California farmers are struggling to sell grapes as demand for wine drops",
      "type": "story",
      "url": "https://www.kqed.org/news/12101534/california-farmers-are-struggling-to-sell-grapes-as-demand-for-wine-drops"
    },
    {
      "by": "logicallee",
      "descendants": 77,
      "id": 49882781,
      "kids": [
        49888934,
        49883842,
        49888978,
        49883564,
        49885051,
        49888457,
        49887160,
        49887067,
        49886358,
        49887920,
        49888526,
        49883933,
        49884085,
        49888119,
        49887469,
        49884135,
        49885126,
        49883644,
        49883659,
        49884003,
        49884712,
        49884123,
        49883889,
        49882782,
        49883400,
        49888884,
        49888503,
        49884798,
        49883814,
        49885021,
        49883430
      ],
      "score": 209,
      "time": 1790621933,
      "title": "MicroLLM Lab – Try 7 tiny LLM's in the browser",
      "type": "story",
      "url": "https://stateofutopia.com/experiments/microllmlab/"
    },
    {
      "by": "thefourthchime",
      "descendants": 21,
      "id": 49885493,
      "kids": [
        49889101,
        49886455,
        49888440,
        49888559,
        49888538,
        49888088,
        49888404,
        49888375,
        49888875,
        49888441,
        49885524
      ],
      "score": 36,
      "text": "Benchmarks how well Harness+models can create a Pac-Man game from a single prompt:<p>“Create a Pac-Man game in a single HTML page”<p>Each model gets one shot — no follow-up prompts or fixes.",
      "time": 1790635392,
      "title": "Show HN: Pac-Bench – How well can models one-shot a Pac-Man game?",
      "type": "story",
      "url": "https://jonclegg.github.io/pacman-bakeoff/"
    },
    {
      "by": "firelex",
      "descendants": 163,
      "id": 49883844,
      "kids": [
        49887987,
        49888047,
        49887887,
        49884862,
        49885443,
        49886868,
        49888416,
        49887809,
        49885037,
        49884778,
        49887387,
        49887738,
        49886895,
        49885035,
        49886113,
        49885224,
        49885792,
        49886175,
        49885215,
        49887074,
        49885718,
        49887551,
        49888370,
        49886815,
        49885753,
        49883845,
        49885092,
        49884194
      ],
      "score": 442,
      "time": 1790627016,
      "title": "Jeff – Jev-compatible 0.8B decision models, trained at home, ~30 ms",
      "type": "story",
      "url": "https://github.com/firelex/jeff"
    },
    {
      "by": "nkko",
      "descendants": 13,
      "id": 49884625,
      "kids": [
        49889064,
        49888894,
        49887364,
        49887599,
        49886543,
        49887588,
        49888176,
        49887010,
        49888822
      ],
      "score": 77,
      "time": 1790630801,
      "title": "ESP32S3 cluster running 1.58-bit (BitNet) Language model",
      "type": "story",
      "url": "https://github.com/Low-Zi-Hong/ESP32s3-LLM-Cluster"
    },
    {
      "by": "yusufaytas",
      "descendants": 28,
      "id": 49855059,
      "kids": [
        49884342,
        49887871,
        49886424,
        49884903,
        49884557,
        49887715,
        49888710,
        49886661
      ],
      "score": 123,
      "time": 1790417786,
      "title": "12,000-year-old Göbeklitepe burials explain scattered bones",
      "type": "story",
      "url": "https://archaeologymag.com/2026/09/gobeklitepe-burials-hundreds-of-scattered-bones/"
    },
    {
      "by": "jimbooonooo",
      "descendants": 15,
      "id": 49886482,
      "kids": [
        49886483,
        49888731,
        49887309,
        49888667,
        49888606,
        49888052
      ],
      "score": 68,
      "time": 1790642505,
      "title": "Tank Body Problem",
      "type": "story",
      "url": "http://www.jimsitu.com"
    },
    {
      "by": "D2OQZG8l5BI1S06",
      "descendants": 478,
      "id": 49881850,
      "kids": [
        49888925,
        49882083,
        49886033,
        49882889,
        49882146,
        49882052,
        49883023,
        49882110,
        49882573,
        49882304,
        49882280,
        49882667,
        49882641,
        49882095,
        49886244,
        49888271,
        49882333,
        49882372,
        49883275,
        49884538,
        49882102,
        49884057,
        49882022,
        49888508,
        49882880,
        49882180,
        49882661,
        49887526,
        49882484,
        49885087,
        49886790,
        49883139,
        49882536,
        49882184,
        49886230,
        49882502,
        49884197,
        49883394,
        49882402,
        49881990,
        49883767,
        49884084,
        49882913,
        49886858,
        49882063,
        49884767,
        49882443,
        49882349,
        49883762,
        49885159,
        49883604,
        49882050,
        49882263,
        49883097,
        49883434,
        49882685,
        49882273,
        49882092,
        49881876,
        49882131,
        49882390,
        49885400,
        49881989,
        49882008,
        49882570,
        49886074,
        49882005,
        49882612,
        49886587,
        49882947,
        49885902,
        49885869,
        49882206,
        49883756,
        49883581,
        49883522,
        49883343,
        49882738,
        49883665,
        49882556,
        49882413
      ],
      "score": 718,
      "time": 1790618291,
      "title": "Sonnet 5.5",
      "type": "story",
      "url": "https://www.anthropic.com/claude-sonnet-5-5"
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
{
  "source": "reddit",
  "topic": "programming",
  "sort": "top",
  "items": [
    {
      "title": "Fast Primality Testing for 32-bit integers via Forisek and Jancina",
      "url": "https://leetarxiv.substack.com/p/forisek-and-jancina-primality-test",
      "permalink": "https://www.reddit.com/r/programming/comments/1wsaolh/fast_primality_testing_for_32bit_integers_via/",
      "author": "/u/DataBaeBee",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/DataBaeBee [link] &#32; [comments]",
      "published": "2026-09-28T10:11:33+00:00"
    },
    {
      "title": "Supporting native Rust in Workers with the new Emscripten target for wasm-bindgen",
      "url": "https://blog.cloudflare.com/rust-workers-emscripten-target/",
      "permalink": "https://www.reddit.com/r/programming/comments/1wsv1tt/supporting_native_rust_in_workers_with_the_new/",
      "author": "/u/Ok_Stomach6651",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Ok_Stomach6651 [link] &#32; [comments]",
      "published": "2026-09-28T23:59:55+00:00"
    },
    {
      "title": "example.com got modernized !",
      "url": "https://www.reddit.com/r/webdev/comments/1wsr7cw/examplecom_got_modernized/",
      "permalink": "https://www.reddit.com/r/programming/comments/1wsry20/examplecom_got_modernized/",
      "author": "/u/KaKi_87",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/KaKi_87 [link] &#32; [comments]",
      "published": "2026-09-28T21:45:28+00:00"
    },
    {
      "title": "What good is a best-effort exclusive lock, anyway?",
      "url": "https://gaultier.github.io/blog/what_good_is_a_best_effort_exclusive_lock_anyway.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1wsqvwe/what_good_is_a_besteffort_exclusive_lock_anyway/",
      "author": "/u/broken_broken_",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/broken_broken_ [link] &#32; [comments]",
      "published": "2026-09-28T21:04:43+00:00"
    },
    {
      "title": "Needed 1+1, Built a Functional Programming Language",
      "url": "https://hereticpleb.vercel.app/blog/needed-one-plus-one",
      "permalink": "https://www.reddit.com/r/programming/comments/1wsx9fe/needed_11_built_a_functional_programming_language/",
      "author": "/u/GenericAHHyoutuber",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/GenericAHHyoutuber [link] &#32; [comments]",
      "published": "2026-09-29T01:43:29+00:00"
    },
    {
      "title": "Instala y crea un proyecto con Composer en IssuesPHP.",
      "url": "https://www.youtube.com/watch?v=Y1GkU_CTxdI",
      "permalink": "https://www.reddit.com/r/programming/comments/1wsx94j/instala_y_crea_un_proyecto_con_composer_en/",
      "author": "/u/Ok-Picture7006",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Ok-Picture7006 [link] &#32; [comments]",
      "published": "2026-09-29T01:43:07+00:00"
    },
    {
      "title": "Domain Swapper Pro - Chrome Web Store",
      "url": "https://chromewebstore.google.com/detail/lkjaaifkmcomiaakacfgfggnpckamklp?utm_source=item-share-reddit",
      "permalink": "https://www.reddit.com/r/programming/comments/1wt1the/domain_swapper_pro_chrome_web_store/",
      "author": "/u/Hairy-Bumblebee-3809",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Hairy-Bumblebee-3809 [link] &#32; [comments]",
      "published": "2026-09-29T05:37:56+00:00"
    },
    {
      "title": "TUI Games in 80x24",
      "url": "https://www.incredible.rs/#blog/tui-games-in-80x24.md",
      "permalink": "https://www.reddit.com/r/programming/comments/1wspai2/tui_games_in_80x24/",
      "author": "/u/ronilan",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/ronilan [link] &#32; [comments]",
      "published": "2026-09-28T20:05:18+00:00"
    },
    {
      "title": "cpp graphics api review",
      "url": "https://youtu.be/e1bIpUSTeB0",
      "permalink": "https://www.reddit.com/r/programming/comments/1wsjgi0/cpp_graphics_api_review/",
      "author": "/u/wizard_creator_seth",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/wizard_creator_seth [link] &#32; [comments]",
      "published": "2026-09-28T16:32:56+00:00"
    },
    {
      "title": "c++ graphics API - source code explain",
      "url": "https://youtu.be/-99sKWazwYM",
      "permalink": "https://www.reddit.com/r/programming/comments/1wsta2z/c_graphics_api_source_code_explain/",
      "author": "/u/wizard_creator_seth",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/wizard_creator_seth [link] &#32; [comments]",
      "published": "2026-09-28T22:41:31+00:00"
    },
    {
      "title": "Introducing the Triple Cipher encryption concept",
      "url": "https://iain.rocks/blog/introducing-the-triple-cipher-encryption-concept",
      "permalink": "https://www.reddit.com/r/programming/comments/1wsacng/introducing_the_triple_cipher_encryption_concept/",
      "author": "/u/Sir_KnowItAll",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Sir_KnowItAll [link] &#32; [comments]",
      "published": "2026-09-28T09:52:09+00:00"
    },
    {
      "title": "on the nature of undecidability within computing and refuting the church-turing thesis",
      "url": "https://www.academia.edu/175392427",
      "permalink": "https://www.reddit.com/r/programming/comments/1ws7psh/on_the_nature_of_undecidability_within_computing/",
      "author": "/u/this_theater_is_lit",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/this_theater_is_lit [link] &#32; [comments]",
      "published": "2026-09-28T07:07:52+00:00"
    }
  ]
}
- Fetching feeds...
{
  "source": "devto",
  "tag": "career",
  "sort": "top",
  "items": [
    {
      "title": "Dear Coder: Open This If You're Feeling AI FOMO",
      "description": "It's all over the headlines.  Every so often, someone reveals a model X% faster. A tech CEO makes...",
      "url": "https://dev.to/canro91/dear-coder-open-this-if-youre-feeling-ai-fomo-58d4",
      "tags": "career, ai, programming, beginners",
      "reactions": 34,
      "comments": 15,
      "reading_time": 1,
      "author": "canro91"
    },
    {
      "title": "I Stopped Measuring My Programming Ability by How Much Code I Write.",
      "description": "Remember when using autocomplete meant you weren't \"really\" programming?    A real Stack Overflow...",
      "url": "https://dev.to/mikachu/i-stopped-measuring-my-programming-ability-by-how-much-code-i-write-44g3",
      "tags": "ai, programming, career, discuss",
      "reactions": 14,
      "comments": 4,
      "reading_time": 5,
      "author": "mikachu"
    },
    {
      "title": "You Take the Most Care Where Somebody Is Looking",
      "description": "Look at where your care goes.  The pull request the lead will read gets a clean history, good...",
      "url": "https://dev.to/sergueyasaelshinder/you-take-the-most-care-where-somebody-is-looking-44h4",
      "tags": "sergueyasaelshinder, mindset, career, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "sergueyasaelshinder"
    },
    {
      "title": "Prompt Engineer Resume: What to Put On It",
      "description": "Nobody agrees on what a prompt engineer does, which means your resume has to answer that question...",
      "url": "https://dev.to/resuhive/prompt-engineer-resume-what-to-put-on-it-4foi",
      "tags": "ai, career, jobsearch, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "resuhive"
    },
    {
      "title": "Is the '8 Hours to $40K/Month' AI Coding Story Actually Teaching You Anything Useful?",
      "description": "This came up in Chinese AI developer communities this week: a story about someone named Frank who...",
      "url": "https://dev.to/zaradevto/is-the-8-hours-to-40kmonth-ai-coding-story-actually-teaching-you-anything-useful-3p4p",
      "tags": "ai, productivity, webdev, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "zaradevto"
    },
    {
      "title": "The 10 contract clauses every freelance developer needs",
      "description": "Most freelancers treat contracts as paperwork. The freelancers who get paid on time treat them as a...",
      "url": "https://dev.to/chris_ad4e762f2200b40f49a/the-10-contract-clauses-every-freelance-developer-needs-2i2k",
      "tags": "freelancing, career, webdev, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "chris_ad4e762f2200b40f49a"
    },
    {
      "title": "A Second Language Shows You What the First One Hid",
      "description": "If you have written one programming language for most of your career, some of its habits no longer...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/a-second-language-shows-you-what-the-first-one-hid-212o",
      "tags": "asaelshinder, learning, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "A Reorganisation Leaves Work That Belongs to Nobody",
      "description": "The announcement comes on a Thursday. New teams, new reporting lines, a diagram with boxes that did...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/a-reorganisation-leaves-work-that-belongs-to-nobody-2485",
      "tags": "asaelshinder, career, careerdevelopment, leadership",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "Your Mentee Has Overtaken You in Something",
      "description": "It usually shows up as a small moment. You are talking about their work, you offer your usual view on...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/your-mentee-has-overtaken-you-in-something-4poh",
      "tags": "asaelshinder, mentorship, leadership, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "15 ATS Keywords Software Engineers Forget to Put on Their Resume",
      "description": "Your resume lists React, TypeScript, and Node. So does everyone else's. Meanwhile the keyword that...",
      "url": "https://dev.to/chris_ad4e762f2200b40f49a/15-ats-keywords-software-engineers-forget-to-put-on-their-resume-4cal",
      "tags": "career, resume, jobsearch",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "chris_ad4e762f2200b40f49a"
    }
  ]
}
```

