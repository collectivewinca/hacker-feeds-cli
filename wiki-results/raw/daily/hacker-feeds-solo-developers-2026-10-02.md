# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-10-02 06:42:10 UTC

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
      "forks": 16265,
      "added_stars": 14335,
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
      "author": "anthropics",
      "repo": "claude-code-action",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-action",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2185,
      "added_stars": 376,
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
      "author": "dream-num",
      "repo": "univer",
      "avatar": "https://github.com/dream-num.png",
      "repo_link": "https://github.com/dream-num/univer",
      "desc": "The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1870,
      "added_stars": 5267,
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
      "author": "FxEmbed",
      "repo": "FxEmbed",
      "avatar": "https://github.com/FxEmbed.png",
      "repo_link": "https://github.com/FxEmbed/FxEmbed",
      "desc": "Fix X/Twitter and Bluesky embeds! Use multiple images, videos, polls, translations and more on Discord, Telegram and others",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 269,
      "added_stars": 369,
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
      "author": "pablostanley",
      "repo": "yoinks",
      "avatar": "https://github.com/pablostanley.png",
      "repo_link": "https://github.com/pablostanley/yoinks",
      "desc": "yoink any video from your terminal. no shady ads.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 291,
      "added_stars": 1069,
      "builtBy": [
        {
          "username": "pablostanley",
          "href": "https://github.com/pablostanley",
          "avatar": "https://avatars.githubusercontent.com/u/7430988"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 749,
      "added_stars": 1685,
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
      "author": "oblien",
      "repo": "openship",
      "avatar": "https://github.com/oblien.png",
      "repo_link": "https://github.com/oblien/openship",
      "desc": "Self-hosted deployment platform",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1277,
      "added_stars": 1866,
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
      "author": "vercel-labs",
      "repo": "scriptc",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/scriptc",
      "desc": "TypeScript-to-Native Compiler",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 163,
      "added_stars": 948,
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
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5396,
      "added_stars": 5804,
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
      "author": "satnaing",
      "repo": "shadcn-admin",
      "avatar": "https://github.com/satnaing.png",
      "repo_link": "https://github.com/satnaing/shadcn-admin",
      "desc": "Admin Dashboard UI built with Shadcn and Vite.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2352,
      "added_stars": 1239,
      "builtBy": [
        {
          "username": "satnaing",
          "href": "https://github.com/satnaing",
          "avatar": "https://avatars.githubusercontent.com/u/53733092"
        },
        {
          "username": "rakrisi",
          "href": "https://github.com/rakrisi",
          "avatar": "https://avatars.githubusercontent.com/u/48623037"
        },
        {
          "username": "unclebay143",
          "href": "https://github.com/unclebay143",
          "avatar": "https://avatars.githubusercontent.com/u/58919619"
        },
        {
          "username": "devshinthant",
          "href": "https://github.com/devshinthant",
          "avatar": "https://avatars.githubusercontent.com/u/94442302"
        }
      ]
    },
    {
      "author": "vega-org",
      "repo": "vega-app",
      "avatar": "https://github.com/vega-org.png",
      "repo_link": "https://github.com/vega-org/vega-app",
      "desc": "A app to Play, Stream or Cast Media for andorid.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 204,
      "added_stars": 72,
      "builtBy": [
        {
          "username": "himanshu8443",
          "href": "https://github.com/himanshu8443",
          "avatar": "https://avatars.githubusercontent.com/u/99420590"
        },
        {
          "username": "Zenda-Cross",
          "href": "https://github.com/Zenda-Cross",
          "avatar": "https://avatars.githubusercontent.com/u/143804558"
        },
        {
          "username": "Anshu08787",
          "href": "https://github.com/Anshu08787",
          "avatar": "https://avatars.githubusercontent.com/u/152717151"
        },
        {
          "username": "OshekharO",
          "href": "https://github.com/OshekharO",
          "avatar": "https://avatars.githubusercontent.com/u/95137948"
        },
        {
          "username": "thewahab07",
          "href": "https://github.com/thewahab07",
          "avatar": "https://avatars.githubusercontent.com/u/114085078"
        }
      ]
    },
    {
      "author": "moeru-ai",
      "repo": "airi",
      "avatar": "https://github.com/moeru-ai.png",
      "repo_link": "https://github.com/moeru-ai/airi",
      "desc": "💖🧸 Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4984,
      "added_stars": 603,
      "builtBy": [
        {
          "username": "nekomeowww",
          "href": "https://github.com/nekomeowww",
          "avatar": "https://avatars.githubusercontent.com/u/11081491"
        },
        {
          "username": "luoling8192",
          "href": "https://github.com/luoling8192",
          "avatar": "https://avatars.githubusercontent.com/u/44741987"
        },
        {
          "username": "shinohara-rin",
          "href": "https://github.com/shinohara-rin",
          "avatar": "https://avatars.githubusercontent.com/u/25588514"
        },
        {
          "username": "sumimakito",
          "href": "https://github.com/sumimakito",
          "avatar": "https://avatars.githubusercontent.com/u/5277268"
        }
      ]
    },
    {
      "author": "openclaw",
      "repo": "openclaw",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/openclaw",
      "desc": "The AI that really does things. Any OS. Any Platform. The lobster way. 🦞",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 82239,
      "added_stars": 1183,
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
          "username": "shakkernerd",
          "href": "https://github.com/shakkernerd",
          "avatar": "https://avatars.githubusercontent.com/u/165377636"
        },
        {
          "username": "obviyus",
          "href": "https://github.com/obviyus",
          "avatar": "https://avatars.githubusercontent.com/u/22031114"
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
      "forks": 1359,
      "added_stars": 651,
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
      "author": "adewaskar",
      "repo": "jarvis",
      "avatar": "https://github.com/adewaskar.png",
      "repo_link": "https://github.com/adewaskar/jarvis",
      "desc": "J.A.R.V.I.S for automating your daily tasks using Claude Code",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 141,
      "added_stars": 120,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "adityadewz",
          "href": "https://github.com/adityadewz",
          "avatar": "https://avatars.githubusercontent.com/u/34622770"
        }
      ]
    },
    {
      "author": "freeCodeCamp",
      "repo": "freeCodeCamp",
      "avatar": "https://github.com/freeCodeCamp.png",
      "repo_link": "https://github.com/freeCodeCamp/freeCodeCamp",
      "desc": "freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 47873,
      "added_stars": 669,
      "builtBy": [
        {
          "username": "ojeytonwilliams",
          "href": "https://github.com/ojeytonwilliams",
          "avatar": "https://avatars.githubusercontent.com/u/15801806"
        },
        {
          "username": "raisedadead",
          "href": "https://github.com/raisedadead",
          "avatar": "https://avatars.githubusercontent.com/u/1884376"
        },
        {
          "username": "camperbot",
          "href": "https://github.com/camperbot",
          "avatar": "https://avatars.githubusercontent.com/u/13561988"
        },
        {
          "username": "renovate-bot",
          "href": "https://github.com/renovate-bot",
          "avatar": "https://avatars.githubusercontent.com/u/25180681"
        }
      ]
    },
    {
      "author": "synthetic-sciences",
      "repo": "openscience",
      "avatar": "https://github.com/synthetic-sciences.png",
      "repo_link": "https://github.com/synthetic-sciences/openscience",
      "desc": "The open-source AI workbench for scientific research",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 517,
      "added_stars": 256,
      "builtBy": [
        {
          "username": "ishaan1124",
          "href": "https://github.com/ishaan1124",
          "avatar": "https://avatars.githubusercontent.com/u/168362620"
        },
        {
          "username": "aayambansal",
          "href": "https://github.com/aayambansal",
          "avatar": "https://avatars.githubusercontent.com/u/170187777"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 3113,
      "added_stars": 21646,
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
      "forks": 4229,
      "added_stars": 10740,
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
      "forks": 1604,
      "added_stars": 2640,
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
      "author": "Gentleman-Programming",
      "repo": "gentle-ai",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/gentle-ai",
      "desc": "Gentle-AI configures the AI coding agents you already use: Claude Code, Cursor, OpenCode, Codex, Pi, and more. Choose persistent memory, Organic-Driven Development, curated skills, MCP servers, personas, and optional bounded review. Open source, no agent lock-in.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 823,
      "added_stars": 1402,
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
      "author": "cilium",
      "repo": "cilium",
      "avatar": "https://github.com/cilium.png",
      "repo_link": "https://github.com/cilium/cilium",
      "desc": "eBPF-based Networking, Security, and Observability",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4120,
      "added_stars": 692,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 490,
      "added_stars": 2393,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 18078,
      "added_stars": 2719,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3241,
      "added_stars": 3083,
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
      "author": "Autumn-27",
      "repo": "ARTEX",
      "avatar": "https://github.com/Autumn-27.png",
      "repo_link": "https://github.com/Autumn-27/ARTEX",
      "desc": "AI 自主渗透测试系统 | 百度“agent+”攻防挑战赛冠军项目",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 214,
      "added_stars": 728,
      "builtBy": [
        {
          "username": "Autumn-27",
          "href": "https://github.com/Autumn-27",
          "avatar": "https://avatars.githubusercontent.com/u/53844290"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "neouks",
          "href": "https://github.com/neouks",
          "avatar": "https://avatars.githubusercontent.com/u/26845888"
        },
        {
          "username": "RuoJi6",
          "href": "https://github.com/RuoJi6",
          "avatar": "https://avatars.githubusercontent.com/u/79234113"
        },
        {
          "username": "lucksec",
          "href": "https://github.com/lucksec",
          "avatar": "https://avatars.githubusercontent.com/u/59011386"
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
      "forks": 258,
      "added_stars": 2351,
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
      "author": "urfave",
      "repo": "cli",
      "avatar": "https://github.com/urfave.png",
      "repo_link": "https://github.com/urfave/cli",
      "desc": "A declarative, simple, fast, and fun package for building command line tools in Go",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1830,
      "added_stars": 71,
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
      "author": "livekit",
      "repo": "livekit",
      "avatar": "https://github.com/livekit.png",
      "repo_link": "https://github.com/livekit/livekit",
      "desc": "End-to-end realtime stack for connecting humans and AI",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2403,
      "added_stars": 619,
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
      "author": "grpc",
      "repo": "grpc-go",
      "avatar": "https://github.com/grpc.png",
      "repo_link": "https://github.com/grpc/grpc-go",
      "desc": "The Go language implementation of gRPC. HTTP/2 based RPC",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4778,
      "added_stars": 139,
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
      "author": "vllm-project",
      "repo": "semantic-router",
      "avatar": "https://github.com/vllm-project.png",
      "repo_link": "https://github.com/vllm-project/semantic-router",
      "desc": "A programmable Mixture-of-Models router for heterogeneous LLM inference",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 995,
      "added_stars": 537,
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
          "username": "wilsonwu",
          "href": "https://github.com/wilsonwu",
          "avatar": "https://avatars.githubusercontent.com/u/1269496"
        },
        {
          "username": "AayushSaini101",
          "href": "https://github.com/AayushSaini101",
          "avatar": "https://avatars.githubusercontent.com/u/60972989"
        }
      ]
    },
    {
      "author": "Gaurav-Gosain",
      "repo": "tuios",
      "avatar": "https://github.com/Gaurav-Gosain.png",
      "repo_link": "https://github.com/Gaurav-Gosain/tuios",
      "desc": "A terminal window manager that knows what your agents are doing. Tiling panes, workspaces, sessions that survive restarts, and one Inbox for every coding agent.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 198,
      "added_stars": 877,
      "builtBy": [
        {
          "username": "Gaurav-Gosain",
          "href": "https://github.com/Gaurav-Gosain",
          "avatar": "https://avatars.githubusercontent.com/u/55647468"
        },
        {
          "username": "cr2007",
          "href": "https://github.com/cr2007",
          "avatar": "https://avatars.githubusercontent.com/u/73425927"
        },
        {
          "username": "SebaWag",
          "href": "https://github.com/SebaWag",
          "avatar": "https://avatars.githubusercontent.com/u/251644039"
        },
        {
          "username": "kylesnowschwartz",
          "href": "https://github.com/kylesnowschwartz",
          "avatar": "https://avatars.githubusercontent.com/u/11069001"
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
      "forks": 1322,
      "added_stars": 817,
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
    },
    {
      "author": "Gentleman-Programming",
      "repo": "engram",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/engram",
      "desc": "Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5, MCP server, HTTP API, CLI, and TUI.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 721,
      "added_stars": 739,
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
          "username": "danielgap",
          "href": "https://github.com/danielgap",
          "avatar": "https://avatars.githubusercontent.com/u/5764171"
        },
        {
          "username": "egdev6",
          "href": "https://github.com/egdev6",
          "avatar": "https://avatars.githubusercontent.com/u/18334564"
        },
        {
          "username": "Reaan06",
          "href": "https://github.com/Reaan06",
          "avatar": "https://avatars.githubusercontent.com/u/231132982"
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
      "forks": 2617,
      "added_stars": 639,
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
      "author": "cloudflare",
      "repo": "cloudflared",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflared",
      "desc": "Cloudflare Tunnel client",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1467,
      "added_stars": 542,
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
      "author": "golang",
      "repo": "go",
      "avatar": "https://github.com/golang.png",
      "repo_link": "https://github.com/golang/go",
      "desc": "The Go programming language",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 20967,
      "added_stars": 2384,
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
      "author": "putyy",
      "repo": "res-downloader",
      "avatar": "https://github.com/putyy.png",
      "repo_link": "https://github.com/putyy/res-downloader",
      "desc": "视频号、小程序、抖音、快手、小红书、直播流、m3u8、酷狗、QQ音乐等常见网络资源下载!",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2524,
      "added_stars": 737,
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
      "author": "e2b-dev",
      "repo": "runtime",
      "avatar": "https://github.com/e2b-dev.png",
      "repo_link": "https://github.com/e2b-dev/runtime",
      "desc": "The runtime behind every E2B stack: Cloud, Enterprise, and your own machine.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 457,
      "added_stars": 433,
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
      "forks": 1735,
      "added_stars": 701,
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3037,
      "added_stars": 26584,
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
      "forks": 331,
      "added_stars": 3249,
      "builtBy": [
        {
          "username": "JayZeeDesign",
          "href": "https://github.com/JayZeeDesign",
          "avatar": "https://avatars.githubusercontent.com/u/22532527"
        },
        {
          "username": "stonexer",
          "href": "https://github.com/stonexer",
          "avatar": "https://avatars.githubusercontent.com/u/6255130"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 5537,
      "added_stars": 3930,
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
      "forks": 5861,
      "added_stars": 22416,
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
      "author": "TencentCloud",
      "repo": "Octop",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/Octop",
      "desc": "A smarter, self-hosted AI assistant — multi-user, multi-agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 786,
      "added_stars": 4888,
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
      "forks": 8191,
      "added_stars": 6436,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1657,
      "added_stars": 3423,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 3052,
      "added_stars": 2254,
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
      "forks": 2712,
      "added_stars": 3261,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "siddikisahil47",
          "href": "https://github.com/siddikisahil47",
          "avatar": "https://avatars.githubusercontent.com/u/134954614"
        },
        {
          "username": "harrywang",
          "href": "https://github.com/harrywang",
          "avatar": "https://avatars.githubusercontent.com/u/595772"
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
      "forks": 8712,
      "added_stars": 7510,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10688,
      "added_stars": 10879,
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
      "author": "petergyang",
      "repo": "no-ai-slop",
      "avatar": "https://github.com/petergyang.png",
      "repo_link": "https://github.com/petergyang/no-ai-slop",
      "desc": "Removes 20+ patterns of AI slop from any piece of writing.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 796,
      "added_stars": 5128,
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
      "author": "NVIDIA",
      "repo": "Model-Optimizer",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/Model-Optimizer",
      "desc": "A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 718,
      "added_stars": 1488,
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
      "author": "microsoft",
      "repo": "markitdown",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/markitdown",
      "desc": "Python tool for converting files and office documents to Markdown.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13906,
      "added_stars": 10815,
      "builtBy": [
        {
          "username": "afourney",
          "href": "https://github.com/afourney",
          "avatar": "https://avatars.githubusercontent.com/u/4017093"
        },
        {
          "username": "gagb",
          "href": "https://github.com/gagb",
          "avatar": "https://avatars.githubusercontent.com/u/13227607"
        },
        {
          "username": "sugatoray",
          "href": "https://github.com/sugatoray",
          "avatar": "https://avatars.githubusercontent.com/u/10201242"
        },
        {
          "username": "PetrAPConsulting",
          "href": "https://github.com/PetrAPConsulting",
          "avatar": "https://avatars.githubusercontent.com/u/173082609"
        }
      ]
    },
    {
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 250,000+ scientists worldwide. 177 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4282,
      "added_stars": 6100,
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
      "author": "Imbad0202",
      "repo": "academic-research-skills",
      "avatar": "https://github.com/Imbad0202.png",
      "repo_link": "https://github.com/Imbad0202/academic-research-skills",
      "desc": "Academic Research Skills for Claude Code: research → write → review → revise → finalize",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3866,
      "added_stars": 5513,
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
      "author": "browser-use",
      "repo": "browser-use",
      "avatar": "https://github.com/browser-use.png",
      "repo_link": "https://github.com/browser-use/browser-use",
      "desc": "Agents that use the browser.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12906,
      "added_stars": 5285,
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
      "author": "sgl-project",
      "repo": "sglang",
      "avatar": "https://github.com/sgl-project.png",
      "repo_link": "https://github.com/sgl-project/sglang",
      "desc": "SGLang is a high-performance serving framework for large language models and multimodal models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9262,
      "added_stars": 3752,
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
      "author": "docling-project",
      "repo": "docling",
      "avatar": "https://github.com/docling-project.png",
      "repo_link": "https://github.com/docling-project/docling",
      "desc": "Get your documents ready for gen AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4982,
      "added_stars": 2512,
      "builtBy": [
        {
          "username": "dolfim-ibm",
          "href": "https://github.com/dolfim-ibm",
          "avatar": "https://avatars.githubusercontent.com/u/97102151"
        },
        {
          "username": "cau-git",
          "href": "https://github.com/cau-git",
          "avatar": "https://avatars.githubusercontent.com/u/60343111"
        },
        {
          "username": "ceberam",
          "href": "https://github.com/ceberam",
          "avatar": "https://avatars.githubusercontent.com/u/75900930"
        },
        {
          "username": "vagenas",
          "href": "https://github.com/vagenas",
          "avatar": "https://avatars.githubusercontent.com/u/35837085"
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
      "forks": 5744,
      "added_stars": 38088,
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
      "forks": 942,
      "added_stars": 4301,
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
      "title": "Hacktoberfest 2026 DEV Challenges: Five Challenges, One Prompt, a New Theme Every Week",
      "description": "Hacktoberfest is here, and this October we're running five DEV Challenges back to back.  Every...",
      "url": "https://dev.to/devteam/hacktoberfest-2026-dev-challenges-five-challenges-one-prompt-a-new-theme-every-week-1e54",
      "tags": "devchallenge, hf26challenge, hacktoberfest, opensource",
      "reactions": 34,
      "comments": 3,
      "reading_time": 6,
      "author": "heyitsjem"
    },
    {
      "title": "Join the Hacktoberfest Weekend Challenge: Build for a Friend! $2,450 in Prizes Across 17 Winners. Submissions Due October 5 at 6:59 AM UTC.",
      "description": "Hacktoberfest is here, and so is the first of our five Hacktoberfest DEV Challenges: a Weekend...",
      "url": "https://dev.to/devteam/join-the-hacktoberfest-weekend-challenge-build-for-a-friend-2450-in-prizes-across-17-winners-1aj5",
      "tags": "devchallenge, weekendchallenge, hf26challenge, hacktoberfest",
      "reactions": 44,
      "comments": 8,
      "reading_time": 6,
      "author": "heyitsjem"
    },
    {
      "title": "The Physics of Socratic Prompting: Somatic Recoil, Chess Alpha-Beta, & The NLP Meta-Model",
      "description": "Why scalar RLHF fails at credit assignment, why barking direct code fixes turns you into an exhausted human compiler, and how Socratic questioning plus topological scars prune doomed search trees at depth d=1.",
      "url": "https://dev.to/gde/the-physics-of-socratic-prompting-somatic-recoil-chess-alpha-beta-the-nlp-meta-model-2b6e",
      "tags": "ai, programming, architecture, machinelearning",
      "reactions": 8,
      "comments": 4,
      "reading_time": 14,
      "author": "randalschwartz"
    },
    {
      "title": "Everything You Need To Know About Hacktoberfest 2026: AI Belongs to Everyone 🎃",
      "description": "It's October 1st, which means Hacktoberfest 2026 is officially live! 🎉  This year looks a little...",
      "url": "https://blog.mlh.com/everything-you-need-to-know-about-hacktoberfest-2026-ai-belongs-to-everyone-mdk",
      "tags": "hacktoberfest, opensource, ai, devchallenge",
      "reactions": 55,
      "comments": 6,
      "reading_time": 8,
      "author": "jess"
    },
    {
      "title": "Gemma 4 on Amazon SageMaker: The NVIDIA T4 Decodes at 0.8x of the L4 With the Same Answers",
      "description": "Gemma 4's 4-bit builds on SageMaker's smallest GPU, an NVIDIA T4, against the L4: a Turing patch for vLLM, the host image the CUDA 13 container needs, speed, memory, answers and cost per token.",
      "url": "https://dev.to/gde/gemma-4-on-amazon-sagemaker-the-nvidia-t4-decodes-at-08x-of-the-l4-with-the-same-answers-19m4",
      "tags": "aws, sagemaker, gemma, vllm",
      "reactions": 15,
      "comments": 1,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Gemini 4 Argon\r\n\r\nhttps://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
      "description": "...",
      "url": "https://dev.to/ben/gemini-4-argon-5g2l",
      "tags": "ai, gemini, google",
      "reactions": 5,
      "comments": 2,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Gemma 4 on a Tesla T4, Part 3: Int4 Embeddings Serve E2B in 2.86 GiB at 2.30x bf16",
      "description": "Google's QAT Gemma 4 E2B keeps its embedding tables in bf16, and on a Tesla T4 they are most of the model. Packing them to int4 on the grid QAT trained them onto cuts model loading from 6.33 to 2.86 GiB, with every greedy test output token-identical, and raises vLLM's output throughput 11-37% over Google's own W4A16 export.",
      "url": "https://dev.to/gde/gemma-4-on-a-tesla-t4-part-3-int4-embeddings-serve-e2b-in-286-gib-at-230x-bf16-3kch",
      "tags": "gemma, vllm, cuda, machinelearning",
      "reactions": 9,
      "comments": 0,
      "reading_time": 11,
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
      "title": "Join Us Live: Hacktoberfest 2026 Launch with Exclusive Swag! 🎃🚀",
      "description": "Hacktoberfest officially kicks off October 1st! To celebrate, we are hosting an official launch...",
      "url": "https://dev.to/devteam/join-us-live-hacktoberfest-2026-launch-with-exclusive-swag-1e25",
      "tags": "hacktoberfest, hf26challenge, opensource, ai",
      "reactions": 28,
      "comments": 2,
      "reading_time": 2,
      "author": "jess"
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
      "title": "Waterfox 6.7.5 Adds a Built-in Feed Reader",
      "url": "https://www.waterfox.com/releases/6.7.5/",
      "score": 11,
      "comments": 1,
      "tags": [
        "browsers",
        "release"
      ],
      "id": "gmjegm"
    },
    {
      "title": "Schedules Are Solvable Symbols: Tuning-Free Compilation of Tile Programs on Dataflow Architectures",
      "url": "https://arxiv.org/abs/2609.29219",
      "score": 2,
      "comments": 0,
      "tags": [
        "compilers"
      ],
      "id": "4553tn"
    },
    {
      "title": "Deeper dive into the Ubiquiti USW Flex Mini",
      "url": "https://kloenk.eu/posts/unifree/usw-flex-mini/",
      "score": 1,
      "comments": 0,
      "tags": [
        "hardware"
      ],
      "id": "3nf17z"
    },
    {
      "title": "Plumbers, chains, and famous painters: The (updated) history of the pipe operator in R",
      "url": "http://adolfoalvarez.cl/blog/2021-09-16-plumbers-chains-and-famous-painters-the-history-of-the-pipe-operator-in-r/",
      "score": 1,
      "comments": 0,
      "tags": [
        "plt"
      ],
      "id": "tob6sq"
    },
    {
      "title": "We Should be Able to Change our Languages",
      "url": "https://jimmyhmiller.com/change-our-languages",
      "score": 3,
      "comments": 2,
      "tags": [
        "plt",
        "vibecoding"
      ],
      "id": "oeflod"
    },
    {
      "title": "How to make a text box: A crash course in Unicode and OpenType",
      "url": "https://www.youtube.com/watch?v=7Tr0ty9-yeQ",
      "score": 7,
      "comments": 0,
      "tags": [
        "c",
        "graphics",
        "video"
      ],
      "id": "tslwlq"
    },
    {
      "title": "Git 3.0's upcoming SHA-256 default will be a costly mistake",
      "url": "https://blog.gitbutler.com/git-3-sha-256",
      "score": 36,
      "comments": 27,
      "tags": [
        "vcs"
      ],
      "id": "bytzgl"
    },
    {
      "title": "The death of web development education",
      "url": "https://molily.de/web-dev-education/",
      "score": 25,
      "comments": 1,
      "tags": [
        "education",
        "vibecoding",
        "web"
      ],
      "id": "td9dxd"
    },
    {
      "title": "Pidgin 3.0 Alpha 3 2.97.0 has been released",
      "url": "https://discourse.imfreedom.org/t/pidgin-3-0-alpha-3-2-97-0-has-been-released/436",
      "score": 19,
      "comments": 5,
      "tags": [
        "release"
      ],
      "id": "ccxvh6"
    },
    {
      "title": "Lists that keep track of their reversal",
      "url": "https://grim.cargocut.org/a/rev-list.html",
      "score": 8,
      "comments": 1,
      "tags": [
        "ml"
      ],
      "id": "eqemtu"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "Kuyawa",
      "descendants": 52,
      "id": 49929489,
      "kids": [
        49929926,
        49929518,
        49930490,
        49929915,
        49929771,
        49929964,
        49930395,
        49930158,
        49929800,
        49929814,
        49929795,
        49929781
      ],
      "score": 144,
      "time": 1790910680,
      "title": "DeepSeek Harness",
      "type": "story",
      "url": "https://www.deepseek.com/en/harness/"
    },
    {
      "by": "sergiotapia",
      "descendants": 336,
      "id": 49926069,
      "kids": [
        49926563,
        49928690,
        49928407,
        49930434,
        49927088,
        49926247,
        49927226,
        49926998,
        49926400,
        49928895,
        49930109,
        49927341,
        49926264,
        49926500,
        49926262,
        49926788,
        49926760,
        49927031,
        49928898,
        49928233,
        49927781,
        49926447,
        49926366,
        49929272,
        49927619,
        49927870,
        49928046,
        49928041,
        49929179,
        49926467,
        49928224,
        49926965,
        49927728,
        49927769,
        49926879,
        49926397,
        49927086,
        49929841,
        49927456,
        49927540,
        49926281,
        49926428,
        49926314,
        49926540,
        49926399,
        49926661,
        49928910,
        49929049,
        49926254,
        49928551,
        49927767,
        49927496,
        49926476,
        49926330,
        49927324,
        49929549,
        49926543,
        49927663,
        49928145,
        49926549,
        49926433,
        49929520
      ],
      "score": 1070,
      "text": "Related: <i>Pi Durable</i> - https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49925969",
      "time": 1790883185,
      "title": "Pi 1.0",
      "type": "story",
      "url": "https://earendil.com/posts/pi-1-0/"
    },
    {
      "by": "danielfoster",
      "descendants": 40,
      "id": 49929113,
      "kids": [
        49929580,
        49929645,
        49930046,
        49930127,
        49929978,
        49929619,
        49929413,
        49929847,
        49929832,
        49929480,
        49930034,
        49930087,
        49929595
      ],
      "score": 86,
      "time": 1790906212,
      "title": "How Singapore's government-run dating service works",
      "type": "story",
      "url": "https://www.singapore-samizdat.com/p/how-singapores-government-run-dating-service-firstdate-works"
    },
    {
      "by": "pietroppeter",
      "descendants": 1,
      "id": 49930047,
      "kids": [
        49930410
      ],
      "score": 23,
      "time": 1790917978,
      "title": "Shimano Bicycle Museum Review",
      "type": "story",
      "url": "https://inrng.com/2026/10/shimano-bicycle-museum/"
    },
    {
      "by": "jasondavies",
      "descendants": 171,
      "id": 49923692,
      "kids": [
        49924445,
        49924502,
        49929048,
        49926385,
        49924252,
        49924307,
        49929567,
        49925183,
        49924297,
        49925130,
        49924266,
        49925842,
        49928781,
        49924597,
        49928987,
        49926220,
        49925578,
        49927461,
        49925083,
        49925524,
        49928481,
        49925049,
        49924396,
        49924176,
        49923943,
        49924174,
        49925328,
        49925113,
        49927636,
        49926169,
        49924620,
        49924287,
        49929308,
        49924263,
        49924942,
        49926197,
        49925949,
        49925250,
        49924333,
        49927451,
        49924303,
        49924623,
        49924131,
        49929533,
        49927773,
        49927697,
        49927700,
        49924822,
        49924682,
        49924093
      ],
      "score": 482,
      "time": 1790871537,
      "title": "Clef: Open-weight decision models, and new RL fine-tuning platform",
      "type": "story",
      "url": "https://blog.cloudflare.com/clef-decision-models/"
    },
    {
      "by": "sampsn",
      "descendants": 70,
      "id": 49926536,
      "kids": [
        49929384,
        49928079,
        49930379,
        49928771,
        49928106,
        49927650,
        49930257,
        49928237,
        49928281,
        49928701,
        49928552,
        49928958,
        49926698,
        49928519,
        49928626,
        49929158,
        49929743
      ],
      "score": 215,
      "time": 1790885663,
      "title": "SvelteKit 3",
      "type": "story",
      "url": "https://svelte.dev/blog/sveltekit-3-is-here"
    },
    {
      "by": "rafaelc",
      "descendants": 153,
      "id": 49926628,
      "kids": [
        49927018,
        49927219,
        49926877,
        49926658,
        49927190,
        49927071,
        49927946,
        49927049,
        49926980,
        49927954,
        49927021,
        49927357,
        49929815,
        49927615,
        49927641,
        49928390,
        49927167,
        49927130,
        49927640,
        49927269,
        49928039,
        49928799,
        49928946,
        49927626,
        49927241,
        49927006,
        49927482,
        49926999,
        49928570,
        49929213,
        49926961,
        49928238
      ],
      "score": 162,
      "time": 1790886207,
      "title": "Automatic Transmission – a data-privacy study of connected vehicles",
      "type": "story",
      "url": "https://automatictransmission.khoury.northeastern.edu/index.html"
    },
    {
      "by": "paulsmith",
      "descendants": 38,
      "id": 49925969,
      "kids": [
        49927001,
        49928702,
        49927056,
        49927822,
        49929069,
        49928462,
        49927614,
        49927339,
        49927249,
        49927715,
        49929597,
        49928264,
        49929545,
        49927795,
        49927929
      ],
      "score": 322,
      "text": "Related: <i>Pi 1.0</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49926069\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49926069</a> - Oct 2026 (184 comments)",
      "time": 1790882648,
      "title": "Pi Durable",
      "type": "story",
      "url": "https://earendil.com/posts/pi-durable/"
    },
    {
      "by": "luispa",
      "descendants": 153,
      "id": 49928121,
      "kids": [
        49928793,
        49929759,
        49930055,
        49929353,
        49929820,
        49928907,
        49929659,
        49928597,
        49928745,
        49928646,
        49928195,
        49928578,
        49928495,
        49928513,
        49928853,
        49929951,
        49929560,
        49929639,
        49928707,
        49928653,
        49929585,
        49929163,
        49929173,
        49928723,
        49929812,
        49928854,
        49930406,
        49928539,
        49928504,
        49928649
      ],
      "score": 228,
      "time": 1790896244,
      "title": "Several vulnerabilities have been discovered in the Linux kernel",
      "type": "story",
      "url": "https://lwn.net/Articles/1097401/"
    },
    {
      "by": "whoishiring",
      "descendants": 180,
      "id": 49922569,
      "kids": [
        49930470,
        49930478,
        49930428,
        49930066,
        49925643,
        49930136,
        49926618,
        49928755,
        49922584,
        49929563,
        49927692,
        49926244,
        49930260,
        49924974,
        49929283,
        49925526,
        49924016,
        49924972,
        49924889,
        49929798,
        49926050,
        49929056,
        49925644,
        49926771,
        49925063,
        49929664,
        49924509,
        49923640,
        49929553,
        49923320,
        49929522,
        49926872,
        49929352,
        49925489,
        49929510,
        49925202,
        49923964,
        49929264,
        49929200,
        49925545,
        49923784,
        49929235,
        49927132,
        49929655,
        49922850,
        49926213,
        49925300,
        49924674,
        49924327,
        49925071,
        49925469,
        49923010,
        49924165,
        49922899,
        49923870,
        49927896,
        49922910,
        49924556,
        49922929,
        49922881,
        49926232,
        49928066,
        49929547,
        49926793,
        49929202,
        49928334,
        49929368,
        49922921,
        49927351,
        49924869,
        49923756,
        49927158,
        49927984,
        49928826,
        49927464,
        49926504,
        49922693,
        49929588,
        49924087,
        49928727,
        49928358,
        49925329,
        49926228,
        49926195,
        49927073,
        49926811,
        49928997,
        49925116,
        49928396,
        49925468,
        49925098,
        49928430,
        49925633,
        49922606,
        49927356,
        49927917,
        49927389,
        49926951,
        49922621,
        49922695,
        49927319,
        49927265,
        49927257,
        49922970,
        49923426,
        49922803,
        49922616,
        49925995,
        49924581,
        49923454,
        49929657,
        49928023,
        49922829,
        49926511,
        49925904,
        49924239,
        49924171,
        49923847,
        49922615,
        49922711,
        49925497,
        49927367,
        49922593,
        49925283,
        49923163,
        49927291,
        49924575,
        49926031,
        49928677,
        49928452,
        49922609,
        49923384,
        49929886,
        49922596,
        49929415,
        49929471,
        49924627,
        49924634,
        49922573,
        49924849,
        49929302,
        49925544,
        49926835,
        49927288,
        49925455,
        49925900,
        49925696,
        49922885,
        49925260,
        49922769,
        49925928,
        49927083
      ],
      "score": 178,
      "text": "Please state the location and include REMOTE for remote work, REMOTE (US)\nor similar if the country is restricted, and ONSITE when remote work is <i>not</i> an option.<p>Please only post if you personally are part of the hiring company—no\nrecruiting firms or job boards. One post per company. If it isn&#x27;t a household name,\nexplain what your company does.<p>Please only post if you are actively filling a position and are committed\nto replying to applicants.<p>Commenters: please don&#x27;t reply to job posts to complain about\nsomething. It&#x27;s off topic here.<p>Readers: please only email if you are personally interested in the job.<p>Searchers: try <a href=\"https:&#x2F;&#x2F;hnwork.app\" rel=\"nofollow\">https:&#x2F;&#x2F;hnwork.app</a>, <a href=\"https:&#x2F;&#x2F;nthesis.ai&#x2F;public&#x2F;hn-who-is-hiring\" rel=\"nofollow\">https:&#x2F;&#x2F;nthesis.ai&#x2F;public&#x2F;hn-who-is-hiring</a>, <a href=\"https:&#x2F;&#x2F;dheerajck.github.io&#x2F;hnwhoishiring&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;dheerajck.github.io&#x2F;hnwhoishiring&#x2F;</a>,\n<a href=\"http:&#x2F;&#x2F;nchelluri.github.io&#x2F;hnjobs&#x2F;\" rel=\"nofollow\">http:&#x2F;&#x2F;nchelluri.github.io&#x2F;hnjobs&#x2F;</a>, <a href=\"https:&#x2F;&#x2F;hnjobs.emilburzo.com\" rel=\"nofollow\">https:&#x2F;&#x2F;hnjobs.emilburzo.com</a>.<p>Don&#x27;t miss this other fine thread: <i>Who wants to be hired?</i> <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49922568\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49922568</a>",
      "time": 1790866927,
      "title": "Ask HN: Who is hiring? (October 2026)",
      "type": "story"
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
      "title": "Views Measure Views",
      "description": "Nine years in, I finally worked out what else to count.  A writer I follow, Sylwia Laskowska,...",
      "url": "https://dev.to/kenwalger/views-measure-views-4co7",
      "tags": "career, writing, devjournal, meta",
      "reactions": 8,
      "comments": 3,
      "reading_time": 12,
      "author": "kenwalger"
    },
    {
      "title": "Coverage Stopped Being a Code Metric. It's a Career Metric Now.",
      "description": "I'm going to start with the strongest argument against this post, because I'd rather you hear it from...",
      "url": "https://dev.to/debashish_ghosal/coverage-stopped-being-a-code-metric-its-a-career-metric-now-3h8h",
      "tags": "learning, career, growth, healthydebate",
      "reactions": 17,
      "comments": 0,
      "reading_time": 7,
      "author": "debashish_ghosal"
    },
    {
      "title": "What a Product Engineer Actually Does",
      "description": "The title product engineer can sound broader than it is. In practice, it is most useful when product...",
      "url": "https://dev.to/himanrawat/what-a-product-engineer-actually-does-47cm",
      "tags": "productivity, webdev, react, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "himanrawat"
    },
    {
      "title": "Nobody Withholds For You: Working Out Your Own Freelance Tax Set-Aside",
      "description": "Nobody Withholds For You: Working Out Your Own Freelance Tax Set-Aside   Every advice column...",
      "url": "https://dev.to/monkeyrun/nobody-withholds-for-you-working-out-your-own-freelance-tax-set-aside-3md5",
      "tags": "career, freelance",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "monkeyrun"
    },
    {
      "title": "Your Mentee Is Thinking About Leaving Tech",
      "description": "Your mentee opens the call with something you were not expecting. I think I might be done with this....",
      "url": "https://dev.to/asael_shinder_9f53bdca840/your-mentee-is-thinking-about-leaving-tech-47d9",
      "tags": "asaelshinder, mentorship, career, careerchange",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "Thank You, Every Time: What the Pyxel Team at ESA Taught Me That No Employer Ever Did",
      "description": "My best collaboration to this day was with the open-source Pyxel team at the European Space Agency. It taught me that respect, mutual care and real teamwork exist, and that is the reason I kept going.",
      "url": "https://dev.to/dobybaxter127/thank-you-every-time-what-the-pyxel-team-at-esa-taught-me-that-no-employer-ever-did-c8c",
      "tags": "opensource, career, community, space",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "dobybaxter127"
    },
    {
      "title": "the senior developer who can't get hired",
      "description": "I had lunch with a friend last week who has been writing software professionally for eleven years....",
      "url": "https://dev.to/vyixor/the-senior-developer-who-cant-get-hired-83i",
      "tags": "discuss, ai, career, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "vyixor"
    },
    {
      "title": "Measuring Agentic Engineering: Count Review, Rework, and Value",
      "description": "“The agent finished in five minutes” is a timing observation, not a productivity result. Someone may...",
      "url": "https://dev.to/qnbs/measuring-agentic-engineering-count-review-rework-and-value-31n",
      "tags": "ai, productivity, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "qnbs"
    },
    {
      "title": "How I stop scope creep before it starts: a 5-question scope check for freelance devs (and a free Claude skill)",
      "description": "Most scope creep does not arrive as a big, obvious request. It arrives as \"while you're in there, can...",
      "url": "https://dev.to/klipora_hq_d50d1d8a8d2dee/how-i-stop-scope-creep-before-it-starts-a-5-question-scope-check-for-freelance-devs-and-a-free-4dbk",
      "tags": "freelance, productivity, ai, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "klipora_hq_d50d1d8a8d2dee"
    },
    {
      "title": "ISTQB CT-AI vs CT-GenAI: which AI certification should a tester take?",
      "description": "ISTQB offers two certifications around artificial intelligence, and their names are easy to mix up....",
      "url": "https://dev.to/automationdatacamp/istqb-ct-ai-vs-ct-genai-which-ai-certification-should-a-tester-take-4npc",
      "tags": "testing, ai, career, certification",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "automationdatacamp"
    }
  ]
}
```

