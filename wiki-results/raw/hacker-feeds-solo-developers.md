# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-23 06:40:04 UTC

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
      "forks": 24138,
      "added_stars": 2754,
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
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4970,
      "added_stars": 6205,
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
      "author": "danny-avila",
      "repo": "LibreChat",
      "avatar": "https://github.com/danny-avila.png",
      "repo_link": "https://github.com/danny-avila/LibreChat",
      "desc": "Enhanced ChatGPT Clone: Features Agents, MCP, Skills, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, GPT-5, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions, Secure Multi-User Auth, Presets, open-source for self-hosting. Active",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9177,
      "added_stars": 1262,
      "builtBy": [
        {
          "username": "danny-avila",
          "href": "https://github.com/danny-avila",
          "avatar": "https://avatars.githubusercontent.com/u/110412045"
        },
        {
          "username": "berry-13",
          "href": "https://github.com/berry-13",
          "avatar": "https://avatars.githubusercontent.com/u/81851188"
        },
        {
          "username": "dustinhealy",
          "href": "https://github.com/dustinhealy",
          "avatar": "https://avatars.githubusercontent.com/u/54083382"
        },
        {
          "username": "wtlyu",
          "href": "https://github.com/wtlyu",
          "avatar": "https://avatars.githubusercontent.com/u/8267138"
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
      "forks": 7491,
      "added_stars": 1188,
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
      "author": "supabase",
      "repo": "supabase",
      "avatar": "https://github.com/supabase.png",
      "repo_link": "https://github.com/supabase/supabase",
      "desc": "The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 14519,
      "added_stars": 1508,
      "builtBy": [
        {
          "username": "joshenlim",
          "href": "https://github.com/joshenlim",
          "avatar": "https://avatars.githubusercontent.com/u/19742402"
        },
        {
          "username": "kiwicopple",
          "href": "https://github.com/kiwicopple",
          "avatar": "https://avatars.githubusercontent.com/u/10214025"
        },
        {
          "username": "MildTomato",
          "href": "https://github.com/MildTomato",
          "avatar": "https://avatars.githubusercontent.com/u/8291514"
        },
        {
          "username": "saltcod",
          "href": "https://github.com/saltcod",
          "avatar": "https://avatars.githubusercontent.com/u/105593"
        },
        {
          "username": "alaister",
          "href": "https://github.com/alaister",
          "avatar": "https://avatars.githubusercontent.com/u/10985857"
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
      "forks": 2264,
      "added_stars": 4009,
      "builtBy": [
        {
          "username": "ravixalgorithm",
          "href": "https://github.com/ravixalgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/148683640"
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
        },
        {
          "username": "chinnsenn",
          "href": "https://github.com/chinnsenn",
          "avatar": "https://avatars.githubusercontent.com/u/13096352"
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
      "forks": 492,
      "added_stars": 4553,
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
      "author": "ever-co",
      "repo": "ever-gauzy",
      "avatar": "https://github.com/ever-co.png",
      "repo_link": "https://github.com/ever-co/ever-gauzy",
      "desc": "Ever® Gauzy™ - Open Business Management Platform (ERP/CRM/HRM/ATS/PM) - https://gauzy.co",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1172,
      "added_stars": 1656,
      "builtBy": [
        {
          "username": "rahul-rocket",
          "href": "https://github.com/rahul-rocket",
          "avatar": "https://avatars.githubusercontent.com/u/41804588"
        },
        {
          "username": "evereq",
          "href": "https://github.com/evereq",
          "avatar": "https://avatars.githubusercontent.com/u/118497"
        },
        {
          "username": "adkif",
          "href": "https://github.com/adkif",
          "avatar": "https://avatars.githubusercontent.com/u/45813955"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "AlexTasev",
          "href": "https://github.com/AlexTasev",
          "avatar": "https://avatars.githubusercontent.com/u/40795644"
        }
      ]
    },
    {
      "author": "Fission-AI",
      "repo": "OpenSpec",
      "avatar": "https://github.com/Fission-AI.png",
      "repo_link": "https://github.com/Fission-AI/OpenSpec",
      "desc": "Spec-driven development (SDD) for AI coding assistants.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4784,
      "added_stars": 1558,
      "builtBy": [
        {
          "username": "TabishB",
          "href": "https://github.com/TabishB",
          "avatar": "https://avatars.githubusercontent.com/u/30385142"
        },
        {
          "username": "clay-good",
          "href": "https://github.com/clay-good",
          "avatar": "https://avatars.githubusercontent.com/u/237345393"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "vastsa",
      "repo": "PI-Desktop",
      "avatar": "https://github.com/vastsa.png",
      "repo_link": "https://github.com/vastsa/PI-Desktop",
      "desc": "Local-first AI coding agent desktop: Electron + Rust host core + pi Agent Harness + user-installable plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 447,
      "added_stars": 1379,
      "builtBy": [
        {
          "username": "vastsa",
          "href": "https://github.com/vastsa",
          "avatar": "https://avatars.githubusercontent.com/u/48862574"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Tioit-Wang",
          "href": "https://github.com/Tioit-Wang",
          "avatar": "https://avatars.githubusercontent.com/u/104554654"
        },
        {
          "username": "muzimu217",
          "href": "https://github.com/muzimu217",
          "avatar": "https://avatars.githubusercontent.com/u/201334833"
        },
        {
          "username": "zszz3",
          "href": "https://github.com/zszz3",
          "avatar": "https://avatars.githubusercontent.com/u/91608029"
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
      "forks": 1248,
      "added_stars": 824,
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
      "author": "jamiepine",
      "repo": "voicebox",
      "avatar": "https://github.com/jamiepine.png",
      "repo_link": "https://github.com/jamiepine/voicebox",
      "desc": "The open-source AI voice studio. Clone, dictate, create.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6922,
      "added_stars": 1859,
      "builtBy": [
        {
          "username": "jamiepine",
          "href": "https://github.com/jamiepine",
          "avatar": "https://avatars.githubusercontent.com/u/32987599"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tomasmach",
          "href": "https://github.com/tomasmach",
          "avatar": "https://avatars.githubusercontent.com/u/52257177"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "selop",
          "href": "https://github.com/selop",
          "avatar": "https://avatars.githubusercontent.com/u/5173254"
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
      "forks": 3787,
      "added_stars": 1219,
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
      "author": "ahmedkhaleel2004",
      "repo": "gitdiagram",
      "avatar": "https://github.com/ahmedkhaleel2004.png",
      "repo_link": "https://github.com/ahmedkhaleel2004/gitdiagram",
      "desc": "Free, simple, fast interactive diagrams for any GitHub repository",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1290,
      "added_stars": 954,
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
        },
        {
          "username": "martin226",
          "href": "https://github.com/martin226",
          "avatar": "https://avatars.githubusercontent.com/u/46298951"
        }
      ]
    },
    {
      "author": "melgarafael",
      "repo": "DeskcommCRM",
      "avatar": "https://github.com/melgarafael.png",
      "repo_link": "https://github.com/melgarafael/DeskcommCRM",
      "desc": "Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA). Open alternative to Kommo, Octadesk & Intercom for any business that sells by chat. MCP-ready, multi-tenant, LGPD.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 867,
      "added_stars": 918,
      "builtBy": [
        {
          "username": "melgarafael",
          "href": "https://github.com/melgarafael",
          "avatar": "https://avatars.githubusercontent.com/u/119944436"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "webtecnica",
          "href": "https://github.com/webtecnica",
          "avatar": "https://avatars.githubusercontent.com/u/75556242"
        },
        {
          "username": "joaopaulomirandamatias",
          "href": "https://github.com/joaopaulomirandamatias",
          "avatar": "https://avatars.githubusercontent.com/u/37987074"
        },
        {
          "username": "IanCouto",
          "href": "https://github.com/IanCouto",
          "avatar": "https://avatars.githubusercontent.com/u/48738352"
        }
      ]
    },
    {
      "author": "reconurge",
      "repo": "flowsint",
      "avatar": "https://github.com/reconurge.png",
      "repo_link": "https://github.com/reconurge/flowsint",
      "desc": "A modern platform for visual, flexible, and extensible graph-based investigations. For cybersecurity analysts and investigators.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1086,
      "added_stars": 526,
      "builtBy": [
        {
          "username": "dextmorgn",
          "href": "https://github.com/dextmorgn",
          "avatar": "https://avatars.githubusercontent.com/u/64375473"
        },
        {
          "username": "Ghraven",
          "href": "https://github.com/Ghraven",
          "avatar": "https://avatars.githubusercontent.com/u/115199279"
        },
        {
          "username": "gustavorps",
          "href": "https://github.com/gustavorps",
          "avatar": "https://avatars.githubusercontent.com/u/516827"
        },
        {
          "username": "rachit367",
          "href": "https://github.com/rachit367",
          "avatar": "https://avatars.githubusercontent.com/u/185813792"
        },
        {
          "username": "z3rodaycve",
          "href": "https://github.com/z3rodaycve",
          "avatar": "https://avatars.githubusercontent.com/u/241736084"
        }
      ]
    },
    {
      "author": "n8n-io",
      "repo": "n8n",
      "avatar": "https://github.com/n8n-io.png",
      "repo_link": "https://github.com/n8n-io/n8n",
      "desc": "Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 60853,
      "added_stars": 1620,
      "builtBy": [
        {
          "username": "janober",
          "href": "https://github.com/janober",
          "avatar": "https://avatars.githubusercontent.com/u/6249596"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ivov",
          "href": "https://github.com/ivov",
          "avatar": "https://avatars.githubusercontent.com/u/44588767"
        },
        {
          "username": "netroy",
          "href": "https://github.com/netroy",
          "avatar": "https://avatars.githubusercontent.com/u/196144"
        },
        {
          "username": "RicardoE105",
          "href": "https://github.com/RicardoE105",
          "avatar": "https://avatars.githubusercontent.com/u/16496553"
        }
      ]
    },
    {
      "author": "wonderwhy-er",
      "repo": "DesktopCommanderMCP",
      "avatar": "https://github.com/wonderwhy-er.png",
      "repo_link": "https://github.com/wonderwhy-er/DesktopCommanderMCP",
      "desc": "This is MCP server for Claude that gives it terminal control, file system search and diff file editing capabilities",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1219,
      "added_stars": 158,
      "builtBy": [
        {
          "username": "wonderwhy-er",
          "href": "https://github.com/wonderwhy-er",
          "avatar": "https://avatars.githubusercontent.com/u/1150639"
        },
        {
          "username": "serg33v",
          "href": "https://github.com/serg33v",
          "avatar": "https://avatars.githubusercontent.com/u/989699"
        },
        {
          "username": "edgarsskore",
          "href": "https://github.com/edgarsskore",
          "avatar": "https://avatars.githubusercontent.com/u/22543693"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "dmitry-ottic-ai",
          "href": "https://github.com/dmitry-ottic-ai",
          "avatar": "https://avatars.githubusercontent.com/u/181032508"
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
      "forks": 947,
      "added_stars": 1921,
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
      "author": "dream-num",
      "repo": "univer",
      "avatar": "https://github.com/dream-num.png",
      "repo_link": "https://github.com/dream-num/univer",
      "desc": "The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1404,
      "added_stars": 768,
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
      "forks": 2863,
      "added_stars": 18836,
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
      "forks": 3922,
      "added_stars": 8734,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 238,
      "added_stars": 3579,
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
      "forks": 945,
      "added_stars": 1531,
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
      "author": "bjarneo",
      "repo": "cliamp",
      "avatar": "https://github.com/bjarneo.png",
      "repo_link": "https://github.com/bjarneo/cliamp",
      "desc": "cliamp - Terminal music player inspired by winamp",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 288,
      "added_stars": 900,
      "builtBy": [
        {
          "username": "bjarneo",
          "href": "https://github.com/bjarneo",
          "avatar": "https://avatars.githubusercontent.com/u/1419214"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tahadx",
          "href": "https://github.com/tahadx",
          "avatar": "https://avatars.githubusercontent.com/u/152646159"
        },
        {
          "username": "coryshaw1",
          "href": "https://github.com/coryshaw1",
          "avatar": "https://avatars.githubusercontent.com/u/5014172"
        },
        {
          "username": "oweneldridge",
          "href": "https://github.com/oweneldridge",
          "avatar": "https://avatars.githubusercontent.com/u/90428464"
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
      "forks": 1464,
      "added_stars": 736,
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
      "author": "cloudflare",
      "repo": "cloudflared",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflared",
      "desc": "Cloudflare Tunnel client",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1452,
      "added_stars": 556,
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
      "author": "rorkai",
      "repo": "App-Store-Connect-CLI",
      "avatar": "https://github.com/rorkai.png",
      "repo_link": "https://github.com/rorkai/App-Store-Connect-CLI",
      "desc": "Fast, scriptable CLI for the App Store Connect API. Automate TestFlight, builds, submissions, signing, analytics, screenshots, subscriptions, and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 621,
      "added_stars": 1322,
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
      "author": "gtsteffaniak",
      "repo": "filebrowser",
      "avatar": "https://github.com/gtsteffaniak.png",
      "repo_link": "https://github.com/gtsteffaniak/filebrowser",
      "desc": "📂 Web File Browser",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 446,
      "added_stars": 563,
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
      "forks": 3362,
      "added_stars": 481,
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
      "author": "coder",
      "repo": "coder",
      "avatar": "https://github.com/coder.png",
      "repo_link": "https://github.com/coder/coder",
      "desc": "Secure environments for developers and their agents",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1579,
      "added_stars": 2533,
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
      "author": "weave-os",
      "repo": "router",
      "avatar": "https://github.com/weave-os.png",
      "repo_link": "https://github.com/weave-os/router",
      "desc": "Model router for agentic systems. Routes every prompt to the right model in <50ms. Cut costs 40-70% with just an endpoint change.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 135,
      "added_stars": 3839,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 391,
      "added_stars": 1268,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1030,
      "added_stars": 1152,
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
      "author": "projectdiscovery",
      "repo": "katana",
      "avatar": "https://github.com/projectdiscovery.png",
      "repo_link": "https://github.com/projectdiscovery/katana",
      "desc": "A next-generation crawling and spidering framework.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1186,
      "added_stars": 242,
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
      "author": "authelia",
      "repo": "authelia",
      "avatar": "https://github.com/authelia.png",
      "repo_link": "https://github.com/authelia/authelia",
      "desc": "The Single Sign-On Multi-Factor portal for web apps. OpenID Certified™ and Post-Quantum Cryptography Ready.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1492,
      "added_stars": 457,
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
      "author": "seaweedfs",
      "repo": "seaweedfs",
      "avatar": "https://github.com/seaweedfs.png",
      "repo_link": "https://github.com/seaweedfs/seaweedfs",
      "desc": "SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3001,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4638,
      "added_stars": 1159,
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
        }
      ]
    },
    {
      "author": "evcc-io",
      "repo": "evcc",
      "avatar": "https://github.com/evcc-io.png",
      "repo_link": "https://github.com/evcc-io/evcc",
      "desc": "solar charging ☀️🚘",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1518,
      "added_stars": 223,
      "builtBy": [
        {
          "username": "andig",
          "href": "https://github.com/andig",
          "avatar": "https://avatars.githubusercontent.com/u/184815"
        },
        {
          "username": "naltatis",
          "href": "https://github.com/naltatis",
          "avatar": "https://avatars.githubusercontent.com/u/152287"
        },
        {
          "username": "premultiply",
          "href": "https://github.com/premultiply",
          "avatar": "https://avatars.githubusercontent.com/u/4681172"
        },
        {
          "username": "weblate",
          "href": "https://github.com/weblate",
          "avatar": "https://avatars.githubusercontent.com/u/1607653"
        },
        {
          "username": "DerAndereAndi",
          "href": "https://github.com/DerAndereAndi",
          "avatar": "https://avatars.githubusercontent.com/u/42185"
        }
      ]
    },
    {
      "author": "siderolabs",
      "repo": "talos",
      "avatar": "https://github.com/siderolabs.png",
      "repo_link": "https://github.com/siderolabs/talos",
      "desc": "Talos Linux is a modern Linux distribution built for Kubernetes.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 902,
      "added_stars": 236,
      "builtBy": [
        {
          "username": "smira",
          "href": "https://github.com/smira",
          "avatar": "https://avatars.githubusercontent.com/u/55211"
        },
        {
          "username": "andrewrynhard",
          "href": "https://github.com/andrewrynhard",
          "avatar": "https://avatars.githubusercontent.com/u/3383143"
        },
        {
          "username": "frezbo",
          "href": "https://github.com/frezbo",
          "avatar": "https://avatars.githubusercontent.com/u/18496730"
        },
        {
          "username": "rsmitty",
          "href": "https://github.com/rsmitty",
          "avatar": "https://avatars.githubusercontent.com/u/1529818"
        },
        {
          "username": "Unix4ever",
          "href": "https://github.com/Unix4ever",
          "avatar": "https://avatars.githubusercontent.com/u/830532"
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
      "forks": 3204,
      "added_stars": 3035,
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
      "author": "milvus-io",
      "repo": "milvus",
      "avatar": "https://github.com/milvus-io.png",
      "repo_link": "https://github.com/milvus-io/milvus",
      "desc": "Milvus is a high-performance, cloud-native vector database built for scalable vector ANN search",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4266,
      "added_stars": 541,
      "builtBy": [
        {
          "username": "congqixia",
          "href": "https://github.com/congqixia",
          "avatar": "https://avatars.githubusercontent.com/u/84113973"
        },
        {
          "username": "JinHai-CN",
          "href": "https://github.com/JinHai-CN",
          "avatar": "https://avatars.githubusercontent.com/u/33142505"
        },
        {
          "username": "bigsheeper",
          "href": "https://github.com/bigsheeper",
          "avatar": "https://avatars.githubusercontent.com/u/42060877"
        },
        {
          "username": "zhuwenxing",
          "href": "https://github.com/zhuwenxing",
          "avatar": "https://avatars.githubusercontent.com/u/12268675"
        },
        {
          "username": "xiaocai2333",
          "href": "https://github.com/xiaocai2333",
          "avatar": "https://avatars.githubusercontent.com/u/46207236"
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
      "forks": 974,
      "added_stars": 687,
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
          "username": "theohsiung",
          "href": "https://github.com/theohsiung",
          "avatar": "https://avatars.githubusercontent.com/u/90186852"
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4082,
      "added_stars": 23275,
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
          "username": "jaketame",
          "href": "https://github.com/jaketame",
          "avatar": "https://avatars.githubusercontent.com/u/1787973"
        },
        {
          "username": "kevin9327",
          "href": "https://github.com/kevin9327",
          "avatar": "https://avatars.githubusercontent.com/u/5299031"
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
      "forks": 2905,
      "added_stars": 27313,
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
      "repo": "claude-plugins-community",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-community",
      "desc": "Community plugin marketplace for Claude Cowork and Claude Code. Read-only mirror — submit plugins at clau.de/plugin-directory-submission.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 312,
      "added_stars": 3918,
      "builtBy": [
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
          "username": "tobinsouth",
          "href": "https://github.com/tobinsouth",
          "avatar": "https://avatars.githubusercontent.com/u/32489862"
        },
        {
          "username": "ThariqS",
          "href": "https://github.com/ThariqS",
          "avatar": "https://avatars.githubusercontent.com/u/140827"
        }
      ]
    },
    {
      "author": "FlashML-org",
      "repo": "FreeToken",
      "avatar": "https://github.com/FlashML-org.png",
      "repo_link": "https://github.com/FlashML-org/FreeToken",
      "desc": "FreeToken brings datacenter-scale model serving to your desktop. Run massive models locally, fast and efficiently.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1341,
      "added_stars": 12528,
      "builtBy": [
        {
          "username": "jason-fxz",
          "href": "https://github.com/jason-fxz",
          "avatar": "https://avatars.githubusercontent.com/u/36730318"
        },
        {
          "username": "andy-yang-1",
          "href": "https://github.com/andy-yang-1",
          "avatar": "https://avatars.githubusercontent.com/u/73746844"
        },
        {
          "username": "taking-lying-flat",
          "href": "https://github.com/taking-lying-flat",
          "avatar": "https://avatars.githubusercontent.com/u/234872336"
        },
        {
          "username": "earlvanze",
          "href": "https://github.com/earlvanze",
          "avatar": "https://avatars.githubusercontent.com/u/3733346"
        },
        {
          "username": "RuixiangMa",
          "href": "https://github.com/RuixiangMa",
          "avatar": "https://avatars.githubusercontent.com/u/27672240"
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
      "forks": 3235,
      "added_stars": 5496,
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
      "forks": 8090,
      "added_stars": 7443,
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
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4186,
      "added_stars": 12198,
      "builtBy": [
        {
          "username": "TKassis",
          "href": "https://github.com/TKassis",
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3622,
      "added_stars": 4312,
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
      "author": "abi",
      "repo": "screenshot-to-code",
      "avatar": "https://github.com/abi.png",
      "repo_link": "https://github.com/abi/screenshot-to-code",
      "desc": "Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9722,
      "added_stars": 5372,
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
      "author": "experientiallabs",
      "repo": "experiential",
      "avatar": "https://github.com/experientiallabs.png",
      "repo_link": "https://github.com/experientiallabs/experiential",
      "desc": "Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend better models, and train a specialized model you own.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 199,
      "added_stars": 5189,
      "builtBy": [
        {
          "username": "SilenNaihin",
          "href": "https://github.com/SilenNaihin",
          "avatar": "https://avatars.githubusercontent.com/u/44129612"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "kfallah",
          "href": "https://github.com/kfallah",
          "avatar": "https://avatars.githubusercontent.com/u/9440350"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "agent-lightning",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/agent-lightning",
      "desc": "The absolute trainer to light up AI agents.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1630,
      "added_stars": 878,
      "builtBy": [
        {
          "username": "mydmdm",
          "href": "https://github.com/mydmdm",
          "avatar": "https://avatars.githubusercontent.com/u/7117512"
        },
        {
          "username": "actions-user",
          "href": "https://github.com/actions-user",
          "avatar": "https://avatars.githubusercontent.com/u/65916846"
        },
        {
          "username": "ultmaster",
          "href": "https://github.com/ultmaster",
          "avatar": "https://avatars.githubusercontent.com/u/8463288"
        },
        {
          "username": "hzy46",
          "href": "https://github.com/hzy46",
          "avatar": "https://avatars.githubusercontent.com/u/7499023"
        },
        {
          "username": "SiweiPro",
          "href": "https://github.com/SiweiPro",
          "avatar": "https://avatars.githubusercontent.com/u/95038127"
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
      "forks": 1849,
      "added_stars": 2679,
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
      "author": "marin-community",
      "repo": "marin",
      "avatar": "https://github.com/marin-community.png",
      "repo_link": "https://github.com/marin-community/marin",
      "desc": "Open-source framework for the research and development of foundation models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 303,
      "added_stars": 2512,
      "builtBy": [
        {
          "username": "dlwh",
          "href": "https://github.com/dlwh",
          "avatar": "https://avatars.githubusercontent.com/u/9633"
        },
        {
          "username": "rjpower",
          "href": "https://github.com/rjpower",
          "avatar": "https://avatars.githubusercontent.com/u/607207"
        },
        {
          "username": "BabyChouSr",
          "href": "https://github.com/BabyChouSr",
          "avatar": "https://avatars.githubusercontent.com/u/49086305"
        },
        {
          "username": "ravwojdyla",
          "href": "https://github.com/ravwojdyla",
          "avatar": "https://avatars.githubusercontent.com/u/1419010"
        },
        {
          "username": "abhinavg4",
          "href": "https://github.com/abhinavg4",
          "avatar": "https://avatars.githubusercontent.com/u/12746692"
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
      "forks": 1063,
      "added_stars": 5021,
      "builtBy": [
        {
          "username": "handsomestWei",
          "href": "https://github.com/handsomestWei",
          "avatar": "https://avatars.githubusercontent.com/u/36500279"
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
        },
        {
          "username": "917Dhj",
          "href": "https://github.com/917Dhj",
          "avatar": "https://avatars.githubusercontent.com/u/135248415"
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
      "forks": 747,
      "added_stars": 5395,
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
      "author": "dgtlmoon",
      "repo": "changedetection.io",
      "avatar": "https://github.com/dgtlmoon.png",
      "repo_link": "https://github.com/dgtlmoon/changedetection.io",
      "desc": "Best and simplest tool for website change detection, web page monitoring, and website change alerts. Perfect for tracking content changes, price drops, restock alerts, and website defacement monitoring—all for free or enjoy our SaaS plan!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2082,
      "added_stars": 1323,
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
      "author": "TencentCloud",
      "repo": "Octop",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/Octop",
      "desc": "A smarter, self-hosted AI assistant — multi-user, multi-agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 543,
      "added_stars": 3559,
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
      "author": "k2-fsa",
      "repo": "OmniVoice",
      "avatar": "https://github.com/k2-fsa.png",
      "repo_link": "https://github.com/k2-fsa/OmniVoice",
      "desc": "High-Quality Voice Cloning TTS for 600+ Languages",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2072,
      "added_stars": 4472,
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
      "author": "youssofal",
      "repo": "MTPLX",
      "avatar": "https://github.com/youssofal.png",
      "repo_link": "https://github.com/youssofal/MTPLX",
      "desc": "The fastest way to run Qwen 3.8 Flash Next and Qwen 3.8 27B on a Mac: 125 tok/s in OpenCode on an M5 Max. Native MTP speculative decoding on Apple Silicon, exact at any temperature. OpenAI and Anthropic compatible local server.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 184,
      "added_stars": 859,
      "builtBy": [
        {
          "username": "youssofal",
          "href": "https://github.com/youssofal",
          "avatar": "https://avatars.githubusercontent.com/u/66418316"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "davidtai",
          "href": "https://github.com/davidtai",
          "avatar": "https://avatars.githubusercontent.com/u/8346495"
        },
        {
          "username": "Cyb3rb1ade",
          "href": "https://github.com/Cyb3rb1ade",
          "avatar": "https://avatars.githubusercontent.com/u/84099452"
        }
      ]
    },
    {
      "author": "securo-finance",
      "repo": "securo",
      "avatar": "https://github.com/securo-finance.png",
      "repo_link": "https://github.com/securo-finance/securo",
      "desc": "Open-source personal finance manager. Self-hosted, privacy-first.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 477,
      "added_stars": 1688,
      "builtBy": [
        {
          "username": "tassionoronha",
          "href": "https://github.com/tassionoronha",
          "avatar": "https://avatars.githubusercontent.com/u/5116181"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ADolkun",
          "href": "https://github.com/ADolkun",
          "avatar": "https://avatars.githubusercontent.com/u/90114586"
        },
        {
          "username": "panga",
          "href": "https://github.com/panga",
          "avatar": "https://avatars.githubusercontent.com/u/225529"
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
      "title": "Tibetan-Singing-Bowls: Strike or rub a set of virtual Tibetan singing bowls - synthesized in the browser with Web Audio, with the beating overtones of the real thing",
      "url": "https://github.com/evoluteur/tibetan-singing-bowls",
      "upvotes": "1",
      "comments": "0",
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
      "upvotes": "1",
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
    },
    {
      "title": "Sacred Geometry Generator: draw, tune, and export Vesica Piscis, Seed of Life, Flower of Life, Metatron's Cube, and the Golden Spiral as SVG",
      "url": "https://github.com/evoluteur/sacred-geometry",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-01T05:57:26.000Z"
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
      "title": "Claude Opus 5.5 is now available on Google Cloud",
      "description": "Everyday complex tasks? No problem. Opus 5.5 handles long-running coding and knowledge work while...",
      "url": "https://dev.to/googleai/claude-opus-55-is-now-available-on-google-cloud-2oh",
      "tags": "claude, googlecloud",
      "reactions": 7,
      "comments": 0,
      "reading_time": 1,
      "author": "pugsandprincesses"
    },
    {
      "title": "Architecting a Resilient DevSecOps Pipeline for Enterprise AI Agents",
      "description": "A four-stage DevSecOps CI/CD architecture for securing enterprise AI agents with GitHub Actions, secret scanning, AI-assisted review, Veracode SCA, and Pipeline SAST.",
      "url": "https://dev.to/gde/architecting-a-resilient-devsecops-pipeline-for-enterprise-ai-agents-on4",
      "tags": "ai, devsecops, github, security",
      "reactions": 19,
      "comments": 6,
      "reading_time": 7,
      "author": "jitu028"
    },
    {
      "title": "Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs",
      "description": "How combining Dart's Enhanced Enums with constructor tearoffs turns simple enum values into self-instantiating, type-safe polymorphic factories.",
      "url": "https://dev.to/gde/dart-enhanced-enums-are-secretly-factories-unlocking-constructor-tearoffs-54n9",
      "tags": "dart, flutter, architecture, programming",
      "reactions": 8,
      "comments": 2,
      "reading_time": 5,
      "author": "randalschwartz"
    },
    {
      "title": "Stop Paying the build_runner Tax: Why I Refuse to Use Mockito in Modern Dart",
      "description": "Why code-generated mocks ruin developer velocity in modern Dart and Flutter, and how switching to mocktail restores true zero-friction TDD.",
      "url": "https://dev.to/gde/stop-paying-the-buildrunner-tax-why-i-refuse-to-use-mockito-in-modern-dart-4cif",
      "tags": "dart, flutter, testing, architecture",
      "reactions": 10,
      "comments": 0,
      "reading_time": 6,
      "author": "randalschwartz"
    },
    {
      "title": "The Symmetry of State: Why Flutter Deserves context.value and context.state",
      "description": "Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.",
      "url": "https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250",
      "tags": "flutter, dart, architecture, programming",
      "reactions": 8,
      "comments": 1,
      "reading_time": 9,
      "author": "randalschwartz"
    },
    {
      "title": "Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4",
      "description": "Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.",
      "url": "https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b",
      "tags": "debian, macos, ollama, linux",
      "reactions": 9,
      "comments": 1,
      "reading_time": 16,
      "author": "xbill"
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
      "title": "Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6",
      "description": "Step-by-step: running Google's quantization-aware-trained Gemma 4 E2B on a 10th-gen Core i7 laptop with a 4 GB GTX 1650 Ti — why bf16 and int8 cannot fit, why the QAT GGUF does with room to spare, and managing it with an MCP server.",
      "url": "https://dev.to/gde/gemma-4-on-an-old-4-gb-laptop-gpu-qat-takes-it-from-95-gib-to-16-b5l",
      "tags": "gemma, llamacpp, mcp, cuda",
      "reactions": 10,
      "comments": 3,
      "reading_time": 13,
      "author": "xbill"
    },
    {
      "title": "What was your win this week?!",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-2hcb",
      "tags": "weeklyretro",
      "reactions": 69,
      "comments": 50,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Share State Across Dart Isolates Without Losing Your Mind: Enter shared_map",
      "description": "How to bypass tedious SendPort/ReceivePort plumbing and share synchronized in-memory state across Dart Isolates using the zero-dependency shared_map package.",
      "url": "https://dev.to/gde/share-state-across-dart-isolates-without-losing-your-mind-enter-sharedmap-221b",
      "tags": "dart, flutter, architecture, concurrency",
      "reactions": 9,
      "comments": 0,
      "reading_time": 6,
      "author": "randalschwartz"
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
      "title": "Sandboxing with minimal effort",
      "url": "https://yorickpeterse.com/articles/sandboxing-with-minimal-effort/",
      "score": 2,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "zji8bf"
    },
    {
      "title": "Redis is not a map you talk to over TCP",
      "url": "https://blog.verygoodsoftwarenotvirus.dev/posts/2026/09/22/redis-is-not-a-map-you-talk-to-over-tcp/",
      "score": 2,
      "comments": 3,
      "tags": [
        "distributed"
      ],
      "id": "sfhrrp"
    },
    {
      "title": "Parsing JSON Objects without intermediate ASTs",
      "url": "https://arthi-chaud.github.io/posts/json-ir/",
      "score": 2,
      "comments": 1,
      "tags": [
        "haskell"
      ],
      "id": "ehpn7n"
    },
    {
      "title": "DeepSeek Elastic Compute (DSec): Sandbox Infrastructure for Effective Agentic Training at Scale",
      "url": "https://arxiv.org/abs/2609.22978",
      "score": 1,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "3hbty3"
    },
    {
      "title": "Re: Suggestions on implementing an efficient instruction set simulator in LuaJIT2 (2011)",
      "url": "https://web.archive.org/web/20180603053407/http://article.gmane.org/gmane.comp.lang.lua.general/75426",
      "score": 2,
      "comments": 0,
      "tags": [
        "compilers"
      ],
      "id": "v4bdwl"
    },
    {
      "title": "Measuring Taiwan’s Mobile Slowdown with OONI in Taipei",
      "url": "https://mashbean.net/en/blog/2026/0813-16xy2v/",
      "score": 1,
      "comments": 0,
      "tags": [
        "networking"
      ],
      "id": "ut3ncn"
    },
    {
      "title": "Language Designers Panel - Bjarne Stroustrup, Guido van Rossum, Mads Torgersen & Emma Tracey",
      "url": "https://www.youtube.com/watch?v=HFcTjwfpHWQ",
      "score": 1,
      "comments": 0,
      "tags": [
        "person",
        "video"
      ],
      "id": "u2sjpx"
    },
    {
      "title": "Synthetic sagas",
      "url": "https://www.scattered-thoughts.net/writing/synthetic-sagas/",
      "score": 2,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "ctarqy"
    },
    {
      "title": "How to talk about \"AI\" without adding to the anthropomorphization",
      "url": "https://buttondown.com/maiht3k/archive/how-to-talk-about-ai-without-adding-to-the/",
      "score": 10,
      "comments": 1,
      "tags": [
        "vibecoding"
      ],
      "id": "oqipmz"
    },
    {
      "title": "GitHub Actions leaking secrets when Miri output is cached",
      "url": "https://blog.rust-lang.org/2026/09/21/github-actions-leaking-secrets-when-miri-output-is-cached/",
      "score": 6,
      "comments": 4,
      "tags": [
        "rust",
        "security"
      ],
      "id": "acz9kk"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "OfficialTurkey",
      "descendants": 680,
      "id": 49805509,
      "kids": [
        49806126,
        49805803,
        49805972,
        49808412,
        49805615,
        49805977,
        49808116,
        49805892,
        49805897,
        49806183,
        49805553,
        49805963,
        49808899,
        49807354,
        49806791,
        49805629,
        49806400,
        49805991,
        49805797,
        49806269,
        49805572,
        49806512,
        49807535,
        49805678,
        49809220,
        49805569,
        49809394,
        49805974,
        49805844,
        49806129,
        49806451,
        49810624,
        49805637,
        49805540,
        49805632,
        49808740,
        49808962,
        49806813,
        49809512,
        49807554,
        49805872,
        49805771,
        49805981,
        49810039,
        49809755,
        49808093,
        49806553,
        49805650,
        49809989,
        49809473,
        49805980,
        49806573,
        49812166,
        49806729,
        49805613,
        49808585,
        49805547,
        49806160,
        49807916,
        49805619,
        49806279,
        49807255,
        49806963,
        49806666,
        49808876,
        49805686,
        49811743,
        49806026,
        49806385,
        49810917,
        49810336,
        49805737,
        49805564,
        49806942,
        49806037,
        49805667,
        49807153,
        49807577,
        49806627,
        49808510,
        49805699,
        49809720,
        49806710,
        49807220,
        49806082,
        49806078,
        49808683,
        49805646,
        49805664,
        49806808,
        49806571,
        49810187,
        49805573,
        49806476,
        49806066,
        49805957,
        49806794,
        49807024,
        49807539,
        49807435,
        49806008,
        49806916,
        49806889,
        49805870,
        49805859,
        49807355,
        49806049,
        49812132,
        49808288,
        49808183,
        49811025,
        49809979,
        49806048,
        49805579,
        49807184,
        49807141,
        49805966,
        49805684,
        49806434,
        49805670
      ],
      "score": 1407,
      "time": 1790100034,
      "title": "GPT-6 Sol and Luna",
      "type": "story",
      "url": "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
    },
    {
      "by": "km144",
      "descendants": 898,
      "id": 49803892,
      "kids": [
        49804199,
        49804160,
        49804718,
        49807348,
        49810454,
        49804862,
        49804166,
        49810360,
        49804180,
        49804028,
        49812039,
        49804092,
        49803944,
        49804260,
        49804075,
        49812046,
        49804031,
        49804388,
        49803925,
        49806120,
        49807352,
        49812107,
        49807724,
        49807089,
        49805251,
        49804947,
        49806477,
        49808224,
        49804037,
        49808591,
        49804649,
        49803990,
        49803952,
        49804792,
        49809738,
        49811060,
        49803991,
        49804416,
        49805716,
        49810019,
        49804418,
        49811790,
        49804531,
        49804008,
        49804458,
        49804157,
        49805379,
        49810853,
        49804018,
        49803935,
        49804007,
        49803951,
        49808684,
        49806175,
        49804005,
        49804450,
        49803946,
        49804101,
        49803976,
        49806261,
        49804515,
        49804332,
        49804014,
        49810660,
        49808654,
        49804436,
        49804244,
        49804068,
        49804224,
        49808063,
        49809316,
        49806837,
        49810013,
        49804117,
        49807536,
        49804503,
        49804786,
        49805827,
        49808135,
        49803962,
        49804002,
        49809349,
        49805082,
        49808488,
        49805542,
        49804812,
        49804522,
        49804027,
        49806555,
        49804648,
        49803996,
        49804935,
        49805557,
        49804566,
        49804304,
        49804782,
        49804122,
        49805157,
        49804677,
        49805238,
        49804049,
        49808320,
        49809083,
        49804051,
        49804650,
        49804320,
        49804000,
        49804404,
        49804056,
        49807575,
        49804111,
        49805340,
        49805257,
        49804251,
        49805785,
        49803970,
        49804930,
        49804094,
        49804346,
        49804164,
        49805328,
        49804208,
        49809870,
        49804269,
        49806114,
        49804794,
        49803961,
        49806594,
        49804315,
        49805943,
        49804116,
        49808868,
        49809672,
        49807286,
        49805231,
        49804114,
        49804868,
        49805406,
        49805300,
        49804970,
        49804948,
        49804569,
        49804614,
        49804273,
        49804201,
        49804358,
        49804280,
        49804045,
        49804019,
        49803999,
        49803926,
        49810884,
        49804249,
        49804763,
        49804884,
        49803955,
        49805893,
        49812134,
        49811749,
        49805431,
        49804340,
        49804282,
        49803964,
        49804602,
        49806365,
        49807053,
        49805447,
        49803963,
        49804112,
        49803994,
        49804172
      ],
      "score": 1423,
      "time": 1790094545,
      "title": "Claude Opus 5.5",
      "type": "story",
      "url": "https://www.anthropic.com/claude-opus-5-5"
    },
    {
      "by": "segfaultbuserr",
      "descendants": 11,
      "id": 49811429,
      "kids": [
        49812382,
        49811852,
        49812003,
        49811732,
        49812153
      ],
      "score": 25,
      "time": 1790135368,
      "title": "Data-only attacks are easier than you think (2024)",
      "type": "story",
      "url": "https://www.usenix.org/publications/loginonline/data-only-attacks-are-easier-you-think"
    },
    {
      "by": "sohkamyung",
      "descendants": 381,
      "id": 49801324,
      "kids": [
        49801615,
        49805363,
        49805434,
        49812156,
        49801630,
        49801977,
        49801679,
        49805244,
        49802165,
        49801662,
        49803652,
        49801628,
        49809057,
        49807534,
        49805802,
        49802861,
        49805456,
        49806925,
        49802640,
        49801777,
        49801556,
        49802301,
        49801623,
        49803465,
        49801580,
        49801778,
        49801760,
        49801622,
        49810099,
        49803201,
        49805365,
        49802230,
        49801892,
        49801763,
        49803222,
        49803521,
        49805857,
        49803010,
        49802079,
        49801675,
        49801910,
        49811181,
        49801551,
        49804478,
        49806190,
        49803464,
        49801596,
        49804105,
        49802038,
        49803604,
        49803267,
        49802111,
        49801611
      ],
      "score": 634,
      "time": 1790085135,
      "title": "OpenAI GPT–6 Astra breaks Enigma message that has resisted solution since 2005",
      "type": "story",
      "url": "https://www.cryptocellar.org/bgac/the-mvueh-break.html"
    },
    {
      "by": "boredjohnny",
      "descendants": 167,
      "id": 49808023,
      "kids": [
        49811716,
        49809375,
        49812466,
        49812461,
        49812431,
        49808920,
        49812437,
        49810047,
        49809637,
        49808434,
        49808778,
        49810658,
        49809916,
        49809374,
        49808356,
        49811712,
        49808530,
        49808557,
        49809803,
        49808375,
        49809743,
        49808396,
        49811041,
        49808440,
        49811627,
        49808896,
        49808471,
        49808550,
        49809943,
        49809764,
        49809577,
        49808358,
        49808568,
        49808473,
        49808587,
        49808340,
        49811757,
        49808494,
        49810464,
        49808756,
        49812358,
        49808734,
        49809701,
        49809157,
        49808450,
        49808445,
        49808770,
        49812416,
        49808024,
        49808779,
        49811812,
        49808990,
        49808828,
        49808720
      ],
      "score": 277,
      "text": "Visual FoxPro stopped at version 9 in 2007. A surprising amount of it is still running, in 32 bits, because rewriting a 20-year-old business app is how you lose the business. A customer wanted to keep milking their app for the foreseeable future, so here it is: the same language on a new runtime (Rust, compiled to wasm, checked against the real vfp9.exe), tables no longer stopped at 2 GB, the old 32-bit .fll add-ins still loading, and lambdas, JSON and an HTTP server bolted on for good measure. Reports are not done and the builds are unsigned. MIT because why not?",
      "time": 1790110830,
      "title": "Microsoft killed FoxPro in 2007. Anyway, here's FoxPro revived",
      "type": "story",
      "url": "https://foxscript.org/"
    },
    {
      "by": "spenvo",
      "descendants": 378,
      "id": 49805278,
      "kids": [
        49807928,
        49812032,
        49807719,
        49809544,
        49809847,
        49810018,
        49806551,
        49808324,
        49811493,
        49807772,
        49808411,
        49809925,
        49809092,
        49805640,
        49809478,
        49811251,
        49808045,
        49807739,
        49807932,
        49808656,
        49808993,
        49811219,
        49810945,
        49811444,
        49810874,
        49811449,
        49811808,
        49805620,
        49808165,
        49807234,
        49808081,
        49809826,
        49810725,
        49810260,
        49807306,
        49811475,
        49810412,
        49807985,
        49806439,
        49807825,
        49809959,
        49810976,
        49809801,
        49807817,
        49807516,
        49808284,
        49811201,
        49807855,
        49807589,
        49807542,
        49809691,
        49807984,
        49811674,
        49809640,
        49809564,
        49809019,
        49807388,
        49807907,
        49809817,
        49806924,
        49811376,
        49809217
      ],
      "score": 546,
      "text": "<a href=\"https:&#x2F;&#x2F;archive.ph&#x2F;96YBP\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.ph&#x2F;96YBP</a>",
      "time": 1790099162,
      "title": "'We hacked the FBI:' Hackers say they have data on all FBI employees",
      "type": "story",
      "url": "https://www.404media.co/we-hacked-the-fbi-hackers-say-they-have-data-on-all-fbi-employees/"
    },
    {
      "by": "raybb",
      "descendants": 83,
      "id": 49811065,
      "kids": [
        49811539,
        49811510,
        49812296,
        49812049,
        49811615,
        49811909,
        49811864,
        49811605,
        49812077,
        49811841
      ],
      "score": 100,
      "time": 1790131949,
      "title": "Transit rewards (Waymo pays you to take the train)",
      "type": "story",
      "url": "https://waymo.com/blog/2026/09/transit-rewards/"
    },
    {
      "by": "nateb2022",
      "descendants": 40,
      "id": 49781862,
      "kids": [
        49811602,
        49810323,
        49809519,
        49809673,
        49812312,
        49811327,
        49810159,
        49810901
      ],
      "score": 121,
      "time": 1789952866,
      "title": "ReBarUEFI: Resizable BAR for almost any UEFI system",
      "type": "story",
      "url": "https://github.com/xCuri0/ReBarUEFI"
    },
    {
      "by": "Jtsummers",
      "descendants": 296,
      "id": 49796379,
      "kids": [
        49801660,
        49812242,
        49808687,
        49810354,
        49809084,
        49810542,
        49807913,
        49808415,
        49810554,
        49810810,
        49809022,
        49807846,
        49807827,
        49808451,
        49808034
      ],
      "score": 189,
      "time": 1790046605,
      "title": "What California is learning from solar panels built over irrigation canals",
      "type": "story",
      "url": "https://www.kqed.org/science/2002033/heres-what-california-is-learning-from-solar-panels-built-over-irrigation-canals"
    },
    {
      "by": "luu",
      "descendants": 3,
      "id": 49795337,
      "kids": [
        49812232,
        49811960,
        49812070,
        49811886
      ],
      "score": 16,
      "time": 1790037164,
      "title": "No Easy Fix for Bogus Respondents in Online Opt-In Polls",
      "type": "story",
      "url": "https://www.pewresearch.org/methods/2026/08/27/no-easy-fix-for-bogus-respondents-in-online-opt-in-polls/"
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
      "title": "Why the Best Software Advice Is the Hardest to Follow",
      "description": "Not all software advice is created equal. Some advice is practical. It tells you exactly what to...",
      "url": "https://dev.to/remojansen/why-the-best-software-advice-is-the-hardest-to-follow-4kg8",
      "tags": "software, career, learning, discuss",
      "reactions": 24,
      "comments": 6,
      "reading_time": 7,
      "author": "remojansen"
    },
    {
      "title": "Two Weeks In: A 15-Year QA Veteran, Back to Being the New Guy",
      "description": "I started last Monday. Today it's been exactly two weeks.  Here's the funny part. I've spent 15...",
      "url": "https://dev.to/xulingfeng/two-weeks-in-a-15-year-qa-veteran-back-to-being-the-new-guy-39g3",
      "tags": "discuss, career, testing, ai",
      "reactions": 73,
      "comments": 53,
      "reading_time": 6,
      "author": "xulingfeng"
    },
    {
      "title": "You're not an impostor, you just started from a different line",
      "description": "If you've ever felt like a fraud in an interview in English, this is probably what you need to...",
      "url": "https://dev.to/danielhe4rt/youre-not-an-impostor-you-just-started-from-a-different-line-2lph",
      "tags": "career, discuss, beginners, braziliandevs",
      "reactions": 147,
      "comments": 3,
      "reading_time": 8,
      "author": "danielhe4rt"
    },
    {
      "title": "Applying with AI honestly and efficiently",
      "description": "How I built an AI assistant that applies for jobs with you, and never invents a fact about you.  Let...",
      "url": "https://dev.to/thomassimmer/applying-with-ai-honestly-and-efficiently-3hba",
      "tags": "ai, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "thomassimmer"
    },
    {
      "title": "The Hiring App We Actually Need: 12 Experts Help Design a More Seamless Way to Hire",
      "description": "Hiring software was supposed to make recruitment easier. Instead, employers now juggle applicant...",
      "url": "https://dev.to/zack_whittaker/the-hiring-app-we-actually-need-12-experts-help-design-a-more-seamless-way-to-hire-4idc",
      "tags": "career, hiring, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 14,
      "author": "zack_whittaker"
    },
    {
      "title": "Agentic Coding: Saat Menulis Kode Bukan Lagi Bagian Terberat dari Software Engineering",
      "description": "Agentic Coding: Saat Menulis Kode Bukan Lagi Bagian Terberat dari Software...",
      "url": "https://dev.to/hellogung/agentic-coding-saat-menulis-kode-bukan-lagi-bagian-terberat-dari-software-engineering-1bl6",
      "tags": "ai, softwareengineering, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "hellogung"
    },
    {
      "title": "The override protocol: how Keel lets the operator overrule a refusal — honestly",
      "description": "Refusals are final unless the operator's word lands — and when it does, the override is a stamped, visible record, not an edit to history. The pressure valve, as a protocol.",
      "url": "https://dev.to/keel/the-override-protocol-how-keel-lets-the-operator-overrule-a-refusal-honestly-4pi",
      "tags": "opensource, automation, ai, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "keel"
    },
    {
      "title": "Why auto-apply bots are spam (and what actually works)",
      "description": "The pitch is seductive: apply to 500 jobs while you sleep.  So people do. And then something...",
      "url": "https://dev.to/keel/why-auto-apply-bots-are-spam-and-what-actually-works-234a",
      "tags": "career, automation, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "keel"
    },
    {
      "title": "Something About Coding Stopped Feeling Good — and It Took Me a While to Figure Out What",
      "description": "Let me tell you about a project that wasn't impressive.  Back in university, I built a small .NET...",
      "url": "https://dev.to/james_anderson_h/something-about-coding-stopped-feeling-good-and-it-took-me-a-while-to-figure-out-what-2op2",
      "tags": "career, ai, discuss, watercooler",
      "reactions": 2,
      "comments": 0,
      "reading_time": 6,
      "author": "james_anderson_h"
    },
    {
      "title": "255 Followers, 159K Views: What I Learned Growing on Threads",
      "description": "A small audience can still create a surprising amount of distribution. Here’s what my own Threads...",
      "url": "https://dev.to/skillchirp/255-followers-159k-views-what-i-learned-growing-on-threads-5emd",
      "tags": "productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "skillchirp"
    }
  ]
}
```

