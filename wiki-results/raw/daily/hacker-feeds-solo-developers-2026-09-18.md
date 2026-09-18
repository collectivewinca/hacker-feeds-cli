# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-18 06:38:49 UTC

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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1686,
      "added_stars": 1482,
      "builtBy": [
        {
          "username": "mksglu",
          "href": "https://github.com/mksglu",
          "avatar": "https://avatars.githubusercontent.com/u/6067714"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ipedro",
          "href": "https://github.com/ipedro",
          "avatar": "https://avatars.githubusercontent.com/u/380338"
        },
        {
          "username": "ousamabenyounes",
          "href": "https://github.com/ousamabenyounes",
          "avatar": "https://avatars.githubusercontent.com/u/2910651"
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
      "forks": 23658,
      "added_stars": 1294,
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
      "author": "danny-avila",
      "repo": "LibreChat",
      "avatar": "https://github.com/danny-avila.png",
      "repo_link": "https://github.com/danny-avila/LibreChat",
      "desc": "Enhanced ChatGPT Clone: Features Agents, MCP, Skills, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, GPT-5, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions, Secure Multi-User Auth, Presets, open-source for self-hosting. Active",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9097,
      "added_stars": 1421,
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
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4669,
      "added_stars": 5305,
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
      "author": "vastsa",
      "repo": "PI-Desktop",
      "avatar": "https://github.com/vastsa.png",
      "repo_link": "https://github.com/vastsa/PI-Desktop",
      "desc": "Local-first AI coding agent desktop: Electron + Rust host core + pi Agent Harness + user-installable plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 350,
      "added_stars": 1939,
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
          "username": "yg2224",
          "href": "https://github.com/yg2224",
          "avatar": "https://avatars.githubusercontent.com/u/136247805"
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
      "forks": 42570,
      "added_stars": 1442,
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
    },
    {
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4661,
      "added_stars": 2400,
      "builtBy": [
        {
          "username": "miguel-heygen",
          "href": "https://github.com/miguel-heygen",
          "avatar": "https://avatars.githubusercontent.com/u/229591595"
        },
        {
          "username": "vanceingalls",
          "href": "https://github.com/vanceingalls",
          "avatar": "https://avatars.githubusercontent.com/u/337856"
        },
        {
          "username": "jrusso1020",
          "href": "https://github.com/jrusso1020",
          "avatar": "https://avatars.githubusercontent.com/u/7664106"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ukimsanov",
          "href": "https://github.com/ukimsanov",
          "avatar": "https://avatars.githubusercontent.com/u/165517112"
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
      "forks": 14177,
      "added_stars": 1016,
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
      "author": "vercel-labs",
      "repo": "skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/skills",
      "desc": "The open agent skills tool - npx skills",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2725,
      "added_stars": 821,
      "builtBy": [
        {
          "username": "quuu",
          "href": "https://github.com/quuu",
          "avatar": "https://avatars.githubusercontent.com/u/32676955"
        },
        {
          "username": "huozhi",
          "href": "https://github.com/huozhi",
          "avatar": "https://avatars.githubusercontent.com/u/4800338"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jonathanhefner",
          "href": "https://github.com/jonathanhefner",
          "avatar": "https://avatars.githubusercontent.com/u/771968"
        }
      ]
    },
    {
      "author": "alsk1992",
      "repo": "CloddsBot",
      "avatar": "https://github.com/alsk1992.png",
      "repo_link": "https://github.com/alsk1992/CloddsBot",
      "desc": "Open Source AI trading agent that operates autonomously across 1000+ markets - Polymarket, Kalshi, Binance, Hyperliquid, Solana DEXs, 5 EVM chains. Scans for edge, executes instantly, manages risk while you sleep. Agent commerce protocol for machine-to-machine payments. Self-hosted. Built on Claude.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 336,
      "added_stars": 1222,
      "builtBy": [
        {
          "username": "alsk1992",
          "href": "https://github.com/alsk1992",
          "avatar": "https://avatars.githubusercontent.com/u/193760801"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "dajiaohuang",
          "href": "https://github.com/dajiaohuang",
          "avatar": "https://avatars.githubusercontent.com/u/108231307"
        },
        {
          "username": "nox-oss",
          "href": "https://github.com/nox-oss",
          "avatar": "https://avatars.githubusercontent.com/u/259919097"
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
      "forks": 1135,
      "added_stars": 3332,
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
      "author": "melgarafael",
      "repo": "DeskcommCRM",
      "avatar": "https://github.com/melgarafael.png",
      "repo_link": "https://github.com/melgarafael/DeskcommCRM",
      "desc": "Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA). Open alternative to Kommo, Octadesk & Intercom for any business that sells by chat. MCP-ready, multi-tenant, LGPD.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 764,
      "added_stars": 2179,
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
          "username": "jmpo",
          "href": "https://github.com/jmpo",
          "avatar": "https://avatars.githubusercontent.com/u/23352109"
        },
        {
          "username": "JowaniOrantes",
          "href": "https://github.com/JowaniOrantes",
          "avatar": "https://avatars.githubusercontent.com/u/99059532"
        },
        {
          "username": "webtecnica",
          "href": "https://github.com/webtecnica",
          "avatar": "https://avatars.githubusercontent.com/u/75556242"
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
      "forks": 1069,
      "added_stars": 1145,
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
      "author": "nab138",
      "repo": "iloader",
      "avatar": "https://github.com/nab138.png",
      "repo_link": "https://github.com/nab138/iloader",
      "desc": "User friendly sideloader",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 235,
      "added_stars": 698,
      "builtBy": [
        {
          "username": "nab138",
          "href": "https://github.com/nab138",
          "avatar": "https://avatars.githubusercontent.com/u/56705177"
        },
        {
          "username": "okinaau",
          "href": "https://github.com/okinaau",
          "avatar": "https://avatars.githubusercontent.com/u/174910454"
        },
        {
          "username": "baocreata",
          "href": "https://github.com/baocreata",
          "avatar": "https://avatars.githubusercontent.com/u/110660302"
        },
        {
          "username": "se2crid",
          "href": "https://github.com/se2crid",
          "avatar": "https://avatars.githubusercontent.com/u/151872490"
        },
        {
          "username": "CelloSerenity",
          "href": "https://github.com/CelloSerenity",
          "avatar": "https://avatars.githubusercontent.com/u/195480169"
        }
      ]
    },
    {
      "author": "nashsu",
      "repo": "llm_wiki",
      "avatar": "https://github.com/nashsu.png",
      "repo_link": "https://github.com/nashsu/llm_wiki",
      "desc": "LLM Wiki is a cross-platform desktop application that turns your documents into an organized, interlinked knowledge base — automatically. Instead of traditional RAG (retrieve-and-answer from scratch every time), the LLM incrementally builds and maintains a persistent wiki from your sources。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2224,
      "added_stars": 1718,
      "builtBy": [
        {
          "username": "nashsu",
          "href": "https://github.com/nashsu",
          "avatar": "https://avatars.githubusercontent.com/u/2127280"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "skfan135",
          "href": "https://github.com/skfan135",
          "avatar": "https://avatars.githubusercontent.com/u/111690459"
        },
        {
          "username": "AndrewDongminYoo",
          "href": "https://github.com/AndrewDongminYoo",
          "avatar": "https://avatars.githubusercontent.com/u/82999715"
        },
        {
          "username": "chuenchen309",
          "href": "https://github.com/chuenchen309",
          "avatar": "https://avatars.githubusercontent.com/u/48723787"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "AI-Engineering-Coach",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/AI-Engineering-Coach",
      "desc": "better agentic engineering",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 582,
      "added_stars": 565,
      "builtBy": [
        {
          "username": "aymenfurter",
          "href": "https://github.com/aymenfurter",
          "avatar": "https://avatars.githubusercontent.com/u/20464460"
        },
        {
          "username": "san360",
          "href": "https://github.com/san360",
          "avatar": "https://avatars.githubusercontent.com/u/6613457"
        }
      ]
    },
    {
      "author": "langwatch",
      "repo": "langwatch",
      "avatar": "https://github.com/langwatch.png",
      "repo_link": "https://github.com/langwatch/langwatch",
      "desc": "The platform for LLM evaluations and AI agent testing",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 393,
      "added_stars": 1287,
      "builtBy": [
        {
          "username": "rogeriochaves",
          "href": "https://github.com/rogeriochaves",
          "avatar": "https://avatars.githubusercontent.com/u/792201"
        },
        {
          "username": "richhuth",
          "href": "https://github.com/richhuth",
          "avatar": "https://avatars.githubusercontent.com/u/2778646"
        },
        {
          "username": "0xdeafcafe",
          "href": "https://github.com/0xdeafcafe",
          "avatar": "https://avatars.githubusercontent.com/u/2768524"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "drewdrewthis",
          "href": "https://github.com/drewdrewthis",
          "avatar": "https://avatars.githubusercontent.com/u/4934813"
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
      "forks": 321,
      "added_stars": 2157,
      "builtBy": [
        {
          "username": "TencentXiaowei",
          "href": "https://github.com/TencentXiaowei",
          "avatar": "https://avatars.githubusercontent.com/u/87162611"
        },
        {
          "username": "Ljy-0827",
          "href": "https://github.com/Ljy-0827",
          "avatar": "https://avatars.githubusercontent.com/u/84192562"
        },
        {
          "username": "iuyo5678",
          "href": "https://github.com/iuyo5678",
          "avatar": "https://avatars.githubusercontent.com/u/5351707"
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
      "author": "Tencent",
      "repo": "teamai-cli",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/teamai-cli",
      "desc": "Make Every Team AI Native",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 336,
      "added_stars": 1021,
      "builtBy": [
        {
          "username": "jeff-r2026",
          "href": "https://github.com/jeff-r2026",
          "avatar": "https://avatars.githubusercontent.com/u/279665174"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "m0Nst3r873",
          "href": "https://github.com/m0Nst3r873",
          "avatar": "https://avatars.githubusercontent.com/u/146067293"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "jimpablo",
          "href": "https://github.com/jimpablo",
          "avatar": "https://avatars.githubusercontent.com/u/194239734"
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
      "forks": 6833,
      "added_stars": 2058,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "reddit",
  "topic": "webdev",
  "sort": "top",
  "items": [
    {
      "title": "We now have AI bots advertising AI slop projects on open source projects via pull requests",
      "url": "https://i.redd.it/jdwfjn88b3qh1.png",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wivo1w/we_now_have_ai_bots_advertising_ai_slop_projects/",
      "author": "/u/michaelbelgium",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "This guy has been running an agent or some sorts since 14 september, 3 pull requests a day, today was my turn. He opens pull requests to put the link of his AI slop project in the README of open source projects This is getting more ridiculous every day &#32; submitted by &#32; /u/michaelbelgium [link] &#32; [comments]",
      "published": "2026-09-17T14:32:21+00:00"
    },
    {
      "title": "Reverse Engineering ChatGPT Web: How OpenAI Built for a Billion Users",
      "url": "https://performance.dev/chatgpt",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wipq1u/reverse_engineering_chatgpt_web_how_openai_built/",
      "author": "/u/fagnerbrack",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/fagnerbrack [link] &#32; [comments]",
      "published": "2026-09-17T10:00:35+00:00"
    },
    {
      "title": "ispring scorm rendering with a padding around the player",
      "url": "https://www.reddit.com/r/webdev/comments/1wimhi7/ispring_scorm_rendering_with_a_padding_around_the/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wimhi7/ispring_scorm_rendering_with_a_padding_around_the/",
      "author": "/u/raysnotion-101",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "If you’ve ever worked with the iSpring SCORM player, do you know how to remove the padding/spacing around the player to make it fit the full width? The red lines show the space around the player, and I want it to fit the width of the container. https://preview.redd.it/lk1eq6jn11qh1.png?width=1476&amp;format=png&amp;auto=webp&amp;s=1e039421469b78a374832aba9bfb39314322f176 &#32; submitted by &#32; /u/raysnotion-101 [link] &#32; [comments]",
      "published": "2026-09-17T06:50:22+00:00"
    },
    {
      "title": "magazine site cms suggestions",
      "url": "https://www.reddit.com/r/webdev/comments/1wj9uu0/magazine_site_cms_suggestions/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wj9uu0/magazine_site_cms_suggestions/",
      "author": "/u/blackroseseason",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "hi trying to make a magazine site and i want a cms but i&#39;m specific as fuck and idk what to use since theses are my preferences for a cms at the moment free with no paid options (don&#39;t wanna deal with having features be paywalled right from under me) can handle different post types (blog articles and photo galleries) frontmatter with title, sub title/description (also called a dek or abstract apparently), post image, author, pubdate, categories, and tags not wordpress (or php based in general) relatively idiotproof (meeeeeee) &#32; submitted by &#32; /u/blackroseseason [link] &#32; [comments]",
      "published": "2026-09-17T23:29:36+00:00"
    },
    {
      "title": "How can I get live server in the vscode web version?",
      "url": "https://www.reddit.com/r/webdev/comments/1wj2kxu/how_can_i_get_live_server_in_the_vscode_web/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wj2kxu/how_can_i_get_live_server_in_the_vscode_web/",
      "author": "/u/False_Bee4659",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "My computer is very low on specs and I can&#39;t really afford a new one so I&#39;m forced to use the web version of VS Code. I have Windows on my Steam Deck and I&#39;ve been mirroring from it on my Chromebook, but it just doesn&#39;t feel right. &#32; submitted by &#32; /u/False_Bee4659 [link] &#32; [comments]",
      "published": "2026-09-17T18:46:31+00:00"
    },
    {
      "title": "Collaborative Editing in Wordgard",
      "url": "https://marijnhaverbeke.nl/blog/collaborative-editing-wordgard.html",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wjfp1m/collaborative_editing_in_wordgard/",
      "author": "/u/fagnerbrack",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/fagnerbrack [link] &#32; [comments]",
      "published": "2026-09-18T04:00:57+00:00"
    },
    {
      "title": "How design engineer really looks like?",
      "url": "https://www.reddit.com/r/webdev/comments/1wjfbbd/how_design_engineer_really_looks_like/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wjfbbd/how_design_engineer_really_looks_like/",
      "author": "/u/Alarmed_Doubt8997",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Anybody went through one please do share your experience *I mean interview and day to day tasks &#32; submitted by &#32; /u/Alarmed_Doubt8997 [link] &#32; [comments]",
      "published": "2026-09-18T03:42:18+00:00"
    },
    {
      "title": "[VAGA ESTÁGIO / FREELA] Estudante para integrar Typebot + OpenAI + WhatsApp em MVP de 30 dias (Healthtech)",
      "url": "https://www.reddit.com/r/webdev/comments/1wjcpa2/vaga_estágio_freela_estudante_para_integrar/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wjcpa2/vaga_estágio_freela_estudante_para_integrar/",
      "author": "/u/Tech71Guy",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Fala pessoal. Sou fundador da Zelo Health (startup de cuidado domiciliar) e estou com o backend (Supabase, Prisma, pgvector) já estruturado. Estou buscando um estagiário ou dev júnior/estudante para matar uma frente específica do MVP: O onboarding conversacional. A missão: O usuário manda um áudio no zap -&gt; A API recebe -&gt; Manda pro Whisper transcrever -&gt; Manda pro GPT estruturar os dados do paciente num JSON -&gt; Dispara um Webhook pro meu backend. Ferramentas: Typebot, Evolution API (ou similar), APIs da OpenAI. É uma oportunidade excelente pra quem tá estudando IA/Integrações e quer um case real no portfólio que vai pra produção em 30 dias. Vou mentorar a pessoa durante o processo, mas preciso de alguém com perfil fuçador que não tenha medo de ler documentação de API de terceiros. Se alguém tiver interesse, me manda uma DM com o seu GitHub ou me conta rapidamente o que já montou mexendo com APIs. &#32; submitted by &#32; /u/Tech71Guy [link] &#32; [comments]",
      "published": "2026-09-18T01:38:42+00:00"
    },
    {
      "title": "Begginer: Custom WooCommerce product cards",
      "url": "https://www.reddit.com/gallery/1wiudbc",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wiudbc/begginer_custom_woocommerce_product_cards/",
      "author": "/u/TshegoBless",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I use wordpress and have an understanding of html,css. How would you approach designing a similar prouct card to this without the use of more plugins. I&#39;ve been here and learning web dev for atleast 6months now and i&#39;m able to create websites. I use blocksy and kadence themes. And also achieving &quot;Click product → product opens over the current menu&quot;, how to approach this too. Thanks &#32; submitted by &#32; /u/TshegoBless [link] &#32; [comments]",
      "published": "2026-09-17T13:42:44+00:00"
    },
    {
      "title": "Is it possible to render two sessions of the same site (one authenticated, one not) in a single browser tab?",
      "url": "https://i.redd.it/x0x125kqd5qh1.png",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wj6rh7/is_it_possible_to_render_two_sessions_of_the_same/",
      "author": "/u/alexCosmetic",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Context: I teach chess lessons over Google Meet using Lichess. My screen (specifically one browser tab) is shared with a student. My school has a policy that teachers can&#39;t reveal their real account/username to students, so the student&#39;s view of the game must show me as anonymous/logged out. we usually teach the students and at the end we play an Anonymous game and this is the problem. The catch: I still need to stay logged in on my end, because some features (Opening Explorer, analysis tools) only work for authenticated accounts, and I use them while teaching. so i did write a Tampermonkey script, it checks the website and finds my username and replaces it with &quot;Anonymous&quot;, so far so good. but the problem is the &quot;Challenge a friend&quot; request, when i click this, it generated a link for my account (which is logged in), so when the student accepts the Challenge, they will see my name because this is all happening in a single website/url/domain, i thought the issue of same-origin is not gonna matter, maybe we could use an iframe?, some sandboxing technique? stripped the cookie from certain requests? The actual question: Is there any technique — browser API, extension capability, or otherwise — that lets a single tab display two independent sessions/cookie contexts of the same origin simultaneously, where both remain fully functional? Or is &quot;one tab = one cookie jar, full stop&quot; actually a hard architectural ceiling in modern browsers, and the realistic answer is just &quot;use two tabs/windows and switch fast&quot;? Happy to be told this is a dead end, just want to hear it from people who work with browser internals regularly. &#32; submitted by &#32; /u/alexCosmetic [link] &#32; [comments]",
      "published": "2026-09-17T21:22:12+00:00"
    },
    {
      "title": "First freelance project – Need help estimating development + AWS costs for a scalable psychometric assessment platform",
      "url": "https://www.reddit.com/r/webdev/comments/1wisdxx/first_freelance_project_need_help_estimating/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wisdxx/first_freelance_project_need_help_estimating/",
      "author": "/u/Material-Ad2477",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hi everyone, This is my first freelance project, and I’m trying to prepare a realistic cost estimate before giving the client a quote. I’d really appreciate input from experienced freelancers, developers, and software architects. The project is a psychometric assessment website. The platform will include assessment questions as well as interactive 2D/3D games that are part of the assessment. Rough scope Frontend - User-facing website - Registration/login - Assessment/question interfaces - 2D/3D interactive games - Responsive UI - Results/report interface - Possibly an admin/dashboard interface Backend - User authentication and user management - Assessment/question management - Game/assessment data processing - Storing user responses and scores - Generating assessment results/reports - Admin functionality - APIs between frontend and backend Cloud / Infrastructure - Deployment on AWS - Database - File/storage requirements - Domain + SSL - CI/CD - Logging/monitoring - Backups - Security Scalability One important requirement is that this shouldn&#39;t be designed as a small website that only works for a few users. The expectation is that it should eventually support a large number of concurrent users, particularly when assessments are being conducted in batches. So I’m also trying to understand the additional cost involved in designing the architecture for scalability — AWS infrastructure, database scaling, caching, load balancing, CDN, etc. Other requirements There may also be: - Payment gateway - Gamified assessments - Dashboard/reporting - PDF report generation - Pilot testing - Ongoing maintenance/support after launch I’m currently trying to break the quote into: UI/UX design Frontend development 2D/3D game development Backend/API development Database Admin dashboard Assessment/scoring engine PDF/report generation AWS deployment Scalable architecture Security/testing Domain/SSL/other infrastructure Maintenance and ongoing support My main questions: - How would you break down the development cost for a project like this? - What would be a reasonable freelance price range in India? - How should I estimate the cost of the 2D/3D games separately? - What AWS costs should I account for initially, and how should I estimate costs as users scale? - What important components am I missing from the quotation? - Should I charge a fixed project price, milestone-based price, or development cost + monthly maintenance? - For a first freelance project, what should I be careful about when defining the scope and pricing? I’m not looking for an exact quote — even a rough breakdown/range with assumptions would be extremely helpful. Thanks! &#32; submitted by &#32; /u/Material-Ad2477 [link] &#32; [comments]",
      "published": "2026-09-17T12:17:47+00:00"
    },
    {
      "title": "Inline styles no longer considered harmful · esveo",
      "url": "https://www.esveo.com/en/blog/5y/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wj0mul/inline_styles_no_longer_considered_harmful_esveo/",
      "author": "/u/theScottyJam",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "At work, we&#39;ve have a rule that says we&#39;re not allowed to use inline styles. The rule originated a while ago, from people who have long since left the company, and we&#39;ve been carrying it on. I&#39;m thinking about challenging it, and have been researching into why this seems to be a common &quot;best practice&quot;. Most discussions I find on the subject are about a decade old, which is why I thought I&#39;d bring up for discussion on Reddit as well, to see what people now days have to think on the subject. I liked the points this particular blog post brought up, though it didn&#39;t give any advise one how much inline styles should be used. I&#39;m thinking that if an element only needs one, maybe two style rules, it might be better to just use an inline style, otherwise, using a named class is probably better. I&#39;ll also bring this point up now: I noticed a common argument against inline styles is that it can break certain content security policy rules. We don&#39;t have those rules in place, and there&#39;s no plans on adding them for the foreseeable future, so I&#39;m not concerned about it. For context, I work with Angular. I know the situation is different for server side rendering. Edit: I&#39;m seeing a lot of responses talking as if I want to use inline styles for everything. Please keep in mind my above statement of only considering using them when there&#39;s only one or two style rules. One example common use case would be when I add a &lt;div class=&quot;spacer&quot;&gt;&lt;/div&gt; , where the CSS for &quot;spacer&quot; is simple &quot;flex: 1&quot; and it&#39;s purpose is to separate content that should be left aligned from content that should be right aligned. This, to me, is a good candidate for inline styles. In general, I mainly have layout use-cases in mind. There&#39;s no reason someone would want to override the &quot;spacer&quot; style so high specificity isn&#39;t important here, and even if that was needed, you just refactor it into a CSS class. &#32; submitted by &#32; /u/theScottyJam [link] &#32; [comments]",
      "published": "2026-09-17T17:35:00+00:00"
    }
  ]
}
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
      "author": "Tencent",
      "repo": "WeKnora",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/WeKnora",
      "desc": "Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3581,
      "added_stars": 6280,
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
      "author": "alibaba",
      "repo": "open-code-review",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/open-code-review",
      "desc": "Fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2516,
      "added_stars": 13677,
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
      "author": "majd",
      "repo": "ipatool",
      "avatar": "https://github.com/majd.png",
      "repo_link": "https://github.com/majd/ipatool",
      "desc": "Command-line tool that allows you to search for iOS, iPadOS, tvOS, visionOS, and macOS apps on the App Store, and download .ipa or macOS .pkg app packages.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 941,
      "added_stars": 1490,
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
      "author": "glanceapp",
      "repo": "glance",
      "avatar": "https://github.com/glanceapp.png",
      "repo_link": "https://github.com/glanceapp/glance",
      "desc": "A self-hosted dashboard that puts all your feeds in one place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1463,
      "added_stars": 756,
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
      "author": "rorkai",
      "repo": "App-Store-Connect-CLI",
      "avatar": "https://github.com/rorkai.png",
      "repo_link": "https://github.com/rorkai/App-Store-Connect-CLI",
      "desc": "Fast, scriptable CLI for the App Store Connect API. Automate TestFlight, builds, submissions, signing, analytics, screenshots, subscriptions, and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 612,
      "added_stars": 1363,
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
      "author": "theagentrouter",
      "repo": "agent-router",
      "avatar": "https://github.com/theagentrouter.png",
      "repo_link": "https://github.com/theagentrouter/agent-router",
      "desc": "Manages Unified Access to Generative AI Services built on Envoy Gateway",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 379,
      "added_stars": 188,
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
      "author": "gtsteffaniak",
      "repo": "filebrowser",
      "avatar": "https://github.com/gtsteffaniak.png",
      "repo_link": "https://github.com/gtsteffaniak/filebrowser",
      "desc": "📂 Web File Browser",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 441,
      "added_stars": 561,
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
      "forks": 3355,
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
      "author": "authelia",
      "repo": "authelia",
      "avatar": "https://github.com/authelia.png",
      "repo_link": "https://github.com/authelia/authelia",
      "desc": "The Single Sign-On Multi-Factor portal for web apps. OpenID Certified™ and Post-Quantum Cryptography Ready.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1485,
      "added_stars": 448,
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
      "author": "evcc-io",
      "repo": "evcc",
      "avatar": "https://github.com/evcc-io.png",
      "repo_link": "https://github.com/evcc-io/evcc",
      "desc": "solar charging ☀️🚘",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1513,
      "added_stars": 205,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The task manager you actually own.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 694,
      "added_stars": 386,
      "builtBy": [
        {
          "username": "kolaente",
          "href": "https://github.com/kolaente",
          "avatar": "https://avatars.githubusercontent.com/u/13721712"
        },
        {
          "username": "dpschen",
          "href": "https://github.com/dpschen",
          "avatar": "https://avatars.githubusercontent.com/u/6173598"
        },
        {
          "username": "vikunja-bot",
          "href": "https://github.com/vikunja-bot",
          "avatar": "https://avatars.githubusercontent.com/u/45438395"
        },
        {
          "username": "tink-bot",
          "href": "https://github.com/tink-bot",
          "avatar": "https://avatars.githubusercontent.com/u/259739204"
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
      "added_stars": 764,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 193,
      "added_stars": 1905,
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
      "author": "bjarneo",
      "repo": "cliamp",
      "avatar": "https://github.com/bjarneo.png",
      "repo_link": "https://github.com/bjarneo/cliamp",
      "desc": "cliamp - Terminal music player inspired by winamp",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 282,
      "added_stars": 1100,
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
          "username": "coryshaw1",
          "href": "https://github.com/coryshaw1",
          "avatar": "https://avatars.githubusercontent.com/u/5014172"
        },
        {
          "username": "tahadx",
          "href": "https://github.com/tahadx",
          "avatar": "https://avatars.githubusercontent.com/u/152646159"
        },
        {
          "username": "oweneldridge",
          "href": "https://github.com/oweneldridge",
          "avatar": "https://avatars.githubusercontent.com/u/90428464"
        }
      ]
    },
    {
      "author": "CarterPerez-dev",
      "repo": "Cybersecurity-Projects",
      "avatar": "https://github.com/CarterPerez-dev.png",
      "repo_link": "https://github.com/CarterPerez-dev/Cybersecurity-Projects",
      "desc": "Building 70 Projects ranging from beginner to advanced so anyone can — learn from, build upon, use as a reference, or even copy directly. Gamified Cybersecurity learning 👇",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1035,
      "added_stars": 1987,
      "builtBy": [
        {
          "username": "CarterPerez-dev",
          "href": "https://github.com/CarterPerez-dev",
          "avatar": "https://avatars.githubusercontent.com/u/188120068"
        },
        {
          "username": "deniskhud",
          "href": "https://github.com/deniskhud",
          "avatar": "https://avatars.githubusercontent.com/u/179751626"
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
      "forks": 4256,
      "added_stars": 539,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4616,
      "added_stars": 1147,
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
      "author": "siderolabs",
      "repo": "talos",
      "avatar": "https://github.com/siderolabs.png",
      "repo_link": "https://github.com/siderolabs/talos",
      "desc": "Talos Linux is a modern Linux distribution built for Kubernetes.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 897,
      "added_stars": 245,
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
      "forks": 3171,
      "added_stars": 2919,
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
      "author": "cloudflare",
      "repo": "cloudflared",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflared",
      "desc": "Cloudflare Tunnel client",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1445,
      "added_stars": 446,
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
      "author": "microsoft",
      "repo": "TypeScript",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/TypeScript",
      "desc": "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 14200,
      "added_stars": 1130,
      "builtBy": [
        {
          "username": "ahejlsberg",
          "href": "https://github.com/ahejlsberg",
          "avatar": "https://avatars.githubusercontent.com/u/4226954"
        },
        {
          "username": "sheetalkamat",
          "href": "https://github.com/sheetalkamat",
          "avatar": "https://avatars.githubusercontent.com/u/8052792"
        },
        {
          "username": "DanielRosenwasser",
          "href": "https://github.com/DanielRosenwasser",
          "avatar": "https://avatars.githubusercontent.com/u/972891"
        },
        {
          "username": "sandersn",
          "href": "https://github.com/sandersn",
          "avatar": "https://avatars.githubusercontent.com/u/293473"
        },
        {
          "username": "mhegazy",
          "href": "https://github.com/mhegazy",
          "avatar": "https://avatars.githubusercontent.com/u/8000722"
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
      "forks": 950,
      "added_stars": 689,
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
      "forks": 1021,
      "added_stars": 1185,
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
      "author": "anthropics",
      "repo": "claude-plugins-community",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-community",
      "desc": "Community plugin marketplace for Claude Cowork and Claude Code. Read-only mirror — submit plugins at clau.de/plugin-directory-submission.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 307,
      "added_stars": 3896,
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2773,
      "added_stars": 26237,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3868,
      "added_stars": 22507,
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
          "username": "velixio",
          "href": "https://github.com/velixio",
          "avatar": "https://avatars.githubusercontent.com/u/270455167"
        },
        {
          "username": "paoloantinori",
          "href": "https://github.com/paoloantinori",
          "avatar": "https://avatars.githubusercontent.com/u/1520602"
        },
        {
          "username": "psiberfunk",
          "href": "https://github.com/psiberfunk",
          "avatar": "https://avatars.githubusercontent.com/u/19777571"
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
      "forks": 3182,
      "added_stars": 5145,
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
      "forks": 8008,
      "added_stars": 6867,
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
          "username": "readlnh",
          "href": "https://github.com/readlnh",
          "avatar": "https://avatars.githubusercontent.com/u/16349082"
        },
        {
          "username": "basil-k-aji-dev",
          "href": "https://github.com/basil-k-aji-dev",
          "avatar": "https://avatars.githubusercontent.com/u/70605804"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 446,
      "added_stars": 1902,
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
      "forks": 4122,
      "added_stars": 11830,
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
      "forks": 3545,
      "added_stars": 4036,
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
      "forks": 9670,
      "added_stars": 5254,
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
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 53131,
      "added_stars": 19150,
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
          "username": "ArindamOSS",
          "href": "https://github.com/ArindamOSS",
          "avatar": "https://avatars.githubusercontent.com/u/278394627"
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
      "forks": 183,
      "added_stars": 4732,
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
      "author": "zubair-trabzada",
      "repo": "geo-seo-claude",
      "avatar": "https://github.com/zubair-trabzada.png",
      "repo_link": "https://github.com/zubair-trabzada/geo-seo-claude",
      "desc": "GEO-first SEO skill for Claude Code. Comprehensive AI search optimization for any website — citability scoring, AI crawler analysis, brand authority, schema markup, platform-specific optimization, and PDF reports. If you want learn how to sell this to real businesses, check out the skool community",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1625,
      "added_stars": 1327,
      "builtBy": [
        {
          "username": "richard-scott",
          "href": "https://github.com/richard-scott",
          "avatar": "https://avatars.githubusercontent.com/u/5149834"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "zubair-trabzada",
          "href": "https://github.com/zubair-trabzada",
          "avatar": "https://avatars.githubusercontent.com/u/13802400"
        },
        {
          "username": "xiaolai",
          "href": "https://github.com/xiaolai",
          "avatar": "https://avatars.githubusercontent.com/u/152970"
        }
      ]
    },
    {
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2938,
      "added_stars": 9190,
      "builtBy": [
        {
          "username": "qin-ctx",
          "href": "https://github.com/qin-ctx",
          "avatar": "https://avatars.githubusercontent.com/u/234610432"
        },
        {
          "username": "ZaynJarvis",
          "href": "https://github.com/ZaynJarvis",
          "avatar": "https://avatars.githubusercontent.com/u/31875147"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "zhoujh01",
          "href": "https://github.com/zhoujh01",
          "avatar": "https://avatars.githubusercontent.com/u/242402223"
        },
        {
          "username": "r266-tech",
          "href": "https://github.com/r266-tech",
          "avatar": "https://avatars.githubusercontent.com/u/233881301"
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
      "forks": 727,
      "added_stars": 5127,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9645,
      "added_stars": 8365,
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
          "username": "thejesh23",
          "href": "https://github.com/thejesh23",
          "avatar": "https://avatars.githubusercontent.com/u/35212698"
        }
      ]
    },
    {
      "author": "Tencent",
      "repo": "AI-Infra-Guard",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/AI-Infra-Guard",
      "desc": "A full-stack AI Red Teaming platform securing AI ecosystems via Agent Scan, Skills Scan, MCP scan, AI Infra scan and LLM jailbreak evaluation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 594,
      "added_stars": 1926,
      "builtBy": [
        {
          "username": "boy-hack",
          "href": "https://github.com/boy-hack",
          "avatar": "https://avatars.githubusercontent.com/u/18695984"
        },
        {
          "username": "aigsec",
          "href": "https://github.com/aigsec",
          "avatar": "https://avatars.githubusercontent.com/u/19813635"
        },
        {
          "username": "rocie799",
          "href": "https://github.com/rocie799",
          "avatar": "https://avatars.githubusercontent.com/u/28682217"
        },
        {
          "username": "zonalalala",
          "href": "https://github.com/zonalalala",
          "avatar": "https://avatars.githubusercontent.com/u/170615914"
        },
        {
          "username": "y3oZ",
          "href": "https://github.com/y3oZ",
          "avatar": "https://avatars.githubusercontent.com/u/55682544"
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
      "forks": 1829,
      "added_stars": 2567,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8333,
      "added_stars": 7264,
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
      "author": "youssofal",
      "repo": "MTPLX",
      "avatar": "https://github.com/youssofal.png",
      "repo_link": "https://github.com/youssofal/MTPLX",
      "desc": "The fastest way to run Qwen 3.8 Flash Next and Qwen 3.8 27B on a Mac: 125 tok/s in OpenCode on an M5 Max. Native MTP speculative decoding on Apple Silicon, exact at any temperature. OpenAI and Anthropic compatible local server.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 177,
      "added_stars": 1057,
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
      "author": "blader",
      "repo": "humanizer",
      "avatar": "https://github.com/blader.png",
      "repo_link": "https://github.com/blader/humanizer",
      "desc": "Agent skill that removes signs of AI-generated writing from text",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4018,
      "added_stars": 13578,
      "builtBy": [
        {
          "username": "blader",
          "href": "https://github.com/blader",
          "avatar": "https://avatars.githubusercontent.com/u/1672"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "Scott-Emberson",
          "href": "https://github.com/Scott-Emberson",
          "avatar": "https://avatars.githubusercontent.com/u/8268155"
        },
        {
          "username": "warp-agent",
          "href": "https://github.com/warp-agent",
          "avatar": "https://avatars.githubusercontent.com/u/243858445"
        }
      ]
    },
    {
      "author": "jundot",
      "repo": "omlx",
      "avatar": "https://github.com/jundot.png",
      "repo_link": "https://github.com/jundot/omlx",
      "desc": "LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1888,
      "added_stars": 3034,
      "builtBy": [
        {
          "username": "jundot",
          "href": "https://github.com/jundot",
          "avatar": "https://avatars.githubusercontent.com/u/64250138"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cfbraun",
          "href": "https://github.com/cfbraun",
          "avatar": "https://avatars.githubusercontent.com/u/6842433"
        },
        {
          "username": "JimStenstrom",
          "href": "https://github.com/JimStenstrom",
          "avatar": "https://avatars.githubusercontent.com/u/30080538"
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
    },
    {
      "title": "Reads Are Subscriptions - Migrating from Zustand to Coaction",
      "url": "https://dev.to/unadlib/reads-are-subscriptions-migrating-from-zustand-to-coaction-3228",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-08-30T17:40:25.000Z"
    },
    {
      "title": "binaural-beats: Simple web page to play binaural beats for sleep, meditation, relaxation, and focus",
      "url": "https://github.com/evoluteur/binaural-beats",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-08-30T08:56:07.000Z"
    },
    {
      "title": "toast-queue — Accessible, customizable toast notifications for modern web apps",
      "url": "https://toast-queue.js.org",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-08-25T15:23:35.000Z"
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
      "title": "Congrats to the DEV Weekend Challenge: Dog Days Edition Winners!",
      "description": "The results are in for our DEV Weekend Challenge: Dog Days Edition! Thank you for your patience while...",
      "url": "https://dev.to/devteam/congrats-to-the-dev-weekend-challenge-dog-days-edition-winners-300g",
      "tags": "devchallenge, weekendchallenge, hackathon, programming",
      "reactions": 24,
      "comments": 8,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Serving Gemma 4 on an AMD MI300X: What $1.99 an Hour Buys",
      "description": "A step by step deployment of Gemma 4 E2B to a single AMD Instinct MI300X on AMD Developer Cloud, driven by Python MCP tools, and the throughput a 191.7 GiB card returns for its hourly rate.",
      "url": "https://dev.to/gde/serving-gemma-4-on-an-amd-mi300x-what-199-an-hour-buys-52h9",
      "tags": "amd, vllm, rocm, machinelearning",
      "reactions": 7,
      "comments": 1,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "How we built a desktop companion robot with Gemma 4 and Raspberry Pi",
      "description": "The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.",
      "url": "https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke",
      "tags": "raspberrypi, gemma, gemini, robotics",
      "reactions": 31,
      "comments": 4,
      "reading_time": 5,
      "author": "bebechien"
    },
    {
      "title": "Welcome Thread - v 393",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-393-5f09",
      "tags": "welcome",
      "reactions": 37,
      "comments": 162,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "Build real-time voice applications with Gemini 3.8 Live and 3.5 Transcribe",
      "description": "Yesterday, we released new Gemini Live models in the Gemini API and Google AI Studio, expanding our...",
      "url": "https://dev.to/googleai/build-real-time-voice-applications-with-gemini-38-live-and-35-transcribe-4nb5",
      "tags": "ai, live, voice, gemini",
      "reactions": 31,
      "comments": 8,
      "reading_time": 4,
      "author": "thorwebdev"
    },
    {
      "title": "A Quick Update on the Summer Bug Smash Winners",
      "description": "Hey all, we have a quick update for everyone who participated in DEV's Big Summer Bug Smash powered...",
      "url": "https://dev.to/devteam/a-quick-update-on-the-summer-bug-smash-winners-3021",
      "tags": "devchallenge, bugsmash",
      "reactions": 21,
      "comments": 2,
      "reading_time": 1,
      "author": "heyitsjem"
    },
    {
      "title": "The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001",
      "description": "Discover how Gubernator revolutionizes container orchestration by natively baking in ENS RD 311/2022, EU NIS 2, EU DORA (Reg. 2022/2554), CIS Docker Benchmark, ISO 27001, SHA-256 audit ledger, Cosign, and SBOM into a single sovereign Go binary.",
      "url": "https://dev.to/gde/the-only-container-orchestrator-with-built-in-compliance-how-gubernator-enforces-ens-nis-2-cis-mbf",
      "tags": "security, devops, docker, kubernetes",
      "reactions": 7,
      "comments": 0,
      "reading_time": 10,
      "author": "marioezquerro"
    },
    {
      "title": "Progressive Disclosure: What, Where, When, and Why",
      "description": "Do you remember when we first started using AGENTS.md files?   You would have a project root file...",
      "url": "https://dev.to/reporails/progressive-disclosure-what-where-when-and-why-36m3",
      "tags": "ai, claude, performance, productivity",
      "reactions": 14,
      "comments": 8,
      "reading_time": 7,
      "author": "cleverhoods"
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
      "title": "AI made me doubt everything about programming by Felienne Hermans - DDD Europe 2026",
      "url": "https://youtube.com/watch?v=0-6-f94n_9M",
      "score": 2,
      "comments": 0,
      "tags": [
        "culture",
        "vibecoding",
        "video"
      ],
      "id": "secbwf"
    },
    {
      "title": "Telstra outage: The night a network decided the year was 2006",
      "url": "https://www.netnod.se/blog/telstra-outage-night-network-decided-year-was-2006",
      "score": 2,
      "comments": 0,
      "tags": [
        "networking"
      ],
      "id": "3qdik0"
    },
    {
      "title": "Introducing System One Models & Jev",
      "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev",
      "score": 12,
      "comments": 1,
      "tags": [
        "ai"
      ],
      "id": "ebbixx"
    },
    {
      "title": "We Must Create the Shit Machine",
      "url": "https://www.mcsweeneys.net/articles/we-must-create-the-shit-machine",
      "score": 24,
      "comments": 1,
      "tags": [
        "satire"
      ],
      "id": "vzql1n"
    },
    {
      "title": "How We Built a Data Warehouse Using ClickHouse",
      "url": "https://letsencrypt.org/2026/09/17/clickhouse.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "databases"
      ],
      "id": "attm9x"
    },
    {
      "title": "Flock cameras are riddled with security vulnerabilities and hard-coded credentials",
      "url": "https://micahflee.com/flock-cameras-are-riddled-with-security-vulnerabilities-and-hard-coded-credentials/",
      "score": 38,
      "comments": 2,
      "tags": [
        "reversing",
        "security"
      ],
      "id": "eyg3oe"
    },
    {
      "title": "bonobomock: A GoogleTest-compatible C++ mocking library",
      "url": "https://github.com/bloomberg/bonobomock/",
      "score": 3,
      "comments": 1,
      "tags": [
        "c++",
        "testing"
      ],
      "id": "marwqj"
    },
    {
      "title": "jemalloc 5.4.0 release",
      "url": "https://github.com/jemalloc/jemalloc/releases/tag/5.4.0",
      "score": 17,
      "comments": 2,
      "tags": [
        "release"
      ],
      "id": "eiqamo"
    },
    {
      "title": "Be alert: targeted attacks on prominent Rustaceans",
      "url": "https://blog.rust-lang.org/2026/09/17/targeted-attacks/",
      "score": 49,
      "comments": 2,
      "tags": [
        "rust",
        "security"
      ],
      "id": "uz30ed"
    },
    {
      "title": "Who owns my stack?",
      "url": "https://chrisamico.com/blog/2026-09-12/who-owns-my-stack/",
      "score": 3,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "x0ntfl"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "Handy-Man",
      "descendants": 72,
      "id": 49749656,
      "kids": [
        49750434,
        49750433,
        49750117,
        49750602,
        49749989,
        49750498,
        49750780,
        49750474,
        49750631,
        49750355,
        49750091,
        49750155,
        49749996,
        49750412,
        49750517,
        49749954,
        49750153,
        49749962,
        49749950,
        49749660,
        49750727,
        49749976,
        49750119
      ],
      "score": 235,
      "time": 1789699644,
      "title": "Hacking OpenAI",
      "type": "story",
      "url": "https://www.hacktron.ai/blog/hacking-openai"
    },
    {
      "by": "ramanan",
      "descendants": 60,
      "id": 49749981,
      "kids": [
        49750731,
        49750280,
        49750214,
        49750677,
        49750288,
        49750700,
        49750020,
        49750268
      ],
      "score": 82,
      "time": 1789703364,
      "title": "Waymo in Singapore",
      "type": "story",
      "url": "https://waymo.com/waymo-in-singapore/"
    },
    {
      "by": "vertigoruntime",
      "descendants": 460,
      "id": 49745940,
      "kids": [
        49748312,
        49748503,
        49747136,
        49746363,
        49746353,
        49746093,
        49749153,
        49747322,
        49750431,
        49750132,
        49748571,
        49748280,
        49750415,
        49746376,
        49748162,
        49746213,
        49746869,
        49750106,
        49746703,
        49749892,
        49746704,
        49749676,
        49748480,
        49750242,
        49749412,
        49746556,
        49747501,
        49749386,
        49749433,
        49746031,
        49749625,
        49746794,
        49748073,
        49749964,
        49747803,
        49748137,
        49748967,
        49746079,
        49747523,
        49748129,
        49748555,
        49749073,
        49747273,
        49746115,
        49749142,
        49749529,
        49746709,
        49750674,
        49747693,
        49747299,
        49747515,
        49747291,
        49748746,
        49748491,
        49749796,
        49746028,
        49747520,
        49748709,
        49749052,
        49748437,
        49749399,
        49746834,
        49747196,
        49747023,
        49747165,
        49746244,
        49746498,
        49746477,
        49748788,
        49747278,
        49747599,
        49746090,
        49746392,
        49748143,
        49746104,
        49748911,
        49747333,
        49750101,
        49749441,
        49748585,
        49748679,
        49746464,
        49746927
      ],
      "score": 434,
      "time": 1789676268,
      "title": "Astra for Law",
      "type": "story",
      "url": "https://openai.com/index/astra-for-law/"
    },
    {
      "by": "gkfasdfasdf",
      "descendants": 5,
      "id": 49750152,
      "kids": [
        49750698,
        49750627
      ],
      "score": 28,
      "time": 1789705224,
      "title": "Jemalloc 5.4.0",
      "type": "story",
      "url": "https://github.com/jemalloc/jemalloc/releases/tag/5.4.0"
    },
    {
      "by": "JonSchneider",
      "descendants": 114,
      "id": 49746618,
      "kids": [
        49747390,
        49747481,
        49747164,
        49747732,
        49747684,
        49749126,
        49748190,
        49750047,
        49746767,
        49748869,
        49747356,
        49748450,
        49747586,
        49748346,
        49749483,
        49749328,
        49750162,
        49749837,
        49748463,
        49749801,
        49748117,
        49748752,
        49747221,
        49746790,
        49750453,
        49747858,
        49749822,
        49749583,
        49748445,
        49748586
      ],
      "score": 364,
      "time": 1789679611,
      "title": "Bonsai 2 27B: Near-Lossless Compression in a 9x Smaller Footprint",
      "type": "story",
      "url": "https://prismml.com/news/bonsai-2-27b"
    },
    {
      "by": "dagmx",
      "descendants": 1,
      "id": 49750094,
      "kids": [
        49750760
      ],
      "score": 35,
      "time": 1789704588,
      "title": "The scourge of x86 emulation",
      "type": "story",
      "url": "https://fex-emu.com/Scourge-of-emulation/"
    },
    {
      "by": "nicolas-siplis",
      "descendants": 197,
      "id": 49746163,
      "kids": [
        49746605,
        49749199,
        49750811,
        49749040,
        49749090,
        49750799,
        49747163,
        49746985,
        49746554,
        49750599,
        49746461,
        49747521,
        49746915,
        49750014,
        49750618,
        49747710,
        49747045,
        49747459,
        49749948,
        49749520,
        49747113,
        49746930,
        49746717,
        49747145,
        49748456,
        49749794,
        49749261,
        49748536,
        49748755,
        49748526,
        49746784,
        49746889,
        49747760,
        49749002,
        49747389,
        49746592,
        49749902,
        49747664,
        49747940,
        49746947,
        49746480,
        49747092,
        49747408,
        49749214,
        49746839,
        49747068,
        49746824,
        49746921,
        49746888,
        49747542,
        49747084,
        49748820,
        49747161,
        49749000,
        49747502,
        49746515,
        49746447,
        49748091,
        49750750,
        49749553,
        49748921,
        49747464,
        49748373,
        49748590,
        49750060,
        49749182,
        49746997
      ],
      "score": 405,
      "time": 1789677373,
      "title": "Bend – A language that blocks AI mistakes via proof, on CPU and GPU",
      "type": "story",
      "url": "https://bend-lang.com/"
    },
    {
      "by": "axiologist",
      "descendants": 12,
      "id": 49749771,
      "kids": [
        49750463,
        49750430,
        49750392,
        49750395,
        49750406
      ],
      "score": 43,
      "time": 1789700678,
      "title": "Pre-Greek: The lost language hidden within Ancient Greek",
      "type": "story",
      "url": "https://linguisticdiscovery.com/posts/pre-greek/"
    },
    {
      "by": "bookofjoe",
      "descendants": 147,
      "id": 49743097,
      "kids": [
        49744288,
        49744555,
        49744185,
        49744877,
        49747417,
        49750398,
        49744095,
        49745537,
        49743424,
        49745146,
        49745220,
        49750232,
        49744375,
        49750407,
        49750636,
        49744590,
        49744162,
        49744538,
        49744870,
        49750300,
        49747744,
        49749440,
        49744260,
        49748078,
        49749107,
        49745849,
        49748621,
        49748961,
        49744406,
        49745605,
        49747576,
        49744194,
        49744906,
        49745322,
        49743561,
        49745080,
        49748848,
        49744680,
        49745024,
        49743596,
        49745011,
        49746224,
        49745250,
        49750688,
        49745690
      ],
      "score": 555,
      "time": 1789662337,
      "title": "Hister: A private search engine for the pages you visit and the files you keep",
      "type": "story",
      "url": "https://github.com/asciimoo/hister"
    },
    {
      "by": "jjcm",
      "descendants": 41,
      "id": 49747925,
      "kids": [
        49749728,
        49749361,
        49749246,
        49749162,
        49749924,
        49750537
      ],
      "score": 145,
      "time": 1789686348,
      "title": "Qwen 3.8 Omni Flash",
      "type": "story",
      "url": "https://qwen.ai/blog?id=qwen3.8-omni-flash"
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
      "title": "AI Didn't Remove the Engineering Work. It Just Made It Easier to Pretend You Did.",
      "description": "On September 15, India — along with Sri Lanka and Tanzania — celebrates Engineer's Day, marking the...",
      "url": "https://dev.to/dj29/ai-didnt-remove-the-engineering-work-it-just-made-it-easier-to-pretend-you-did-42m9",
      "tags": "ai, discuss, career, webdev",
      "reactions": 76,
      "comments": 77,
      "reading_time": 4,
      "author": "dj29"
    },
    {
      "title": "Three tools said my resume was clean. One of them was not installed.",
      "description": "Today I audited my own public claims and found a false one. My resume said the Android game I...",
      "url": "https://dev.to/agentdev9/three-tools-said-my-resume-was-clean-one-of-them-was-not-installed-2mic",
      "tags": "showdev, testing, bash, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "agentdev9"
    },
    {
      "title": "The 60-second self-introduction that actually works",
      "description": "It is the only interview question you can be certain you'll be asked. Most people answer it by...",
      "url": "https://dev.to/resuhive/the-60-second-self-introduction-that-actually-works-5519",
      "tags": "career, jobsearch, interview, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "resuhive"
    },
    {
      "title": "Junior Developers Are Learning to Build in Public Before They've Built Anything Private",
      "description": "I used to think the problem with junior developers was that they didn't know enough yet. Now I think...",
      "url": "https://dev.to/web_dev-usman/junior-developers-are-learning-to-build-in-public-before-theyve-built-anything-private-10fh",
      "tags": "beginners, career, productivity, discuss",
      "reactions": 5,
      "comments": 0,
      "reading_time": 2,
      "author": "web_dev-usman"
    },
    {
      "title": "The Quiet Weight of Working in Tech in the AI Era",
      "description": "I've started noticing a look on people's faces.  It's in standups, in the half-second-too-fast \"yeah,...",
      "url": "https://dev.to/james_anderson_h/the-quiet-weight-of-working-in-tech-in-the-ai-era-551g",
      "tags": "mentalhealth, career, ai, discuss",
      "reactions": 107,
      "comments": 69,
      "reading_time": 7,
      "author": "james_anderson_h"
    },
    {
      "title": "Top AI Staffing Firm Designation | Certified AI Recruiting Agencies – AITechAlliance",
      "description": "As demand for AI talent surges from machine learning engineers to AI trainers, reviewers, and prompt...",
      "url": "https://dev.to/nokaner/top-ai-staffing-firm-designation-certified-ai-recruiting-agencies-aitechalliance-egh",
      "tags": "ai, career, certification, leadership",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "nokaner"
    },
    {
      "title": "The LLM can declare that a task \"appears to be finished. It will not be possible to check it off.",
      "description": "We develop an AI Copilot whose functionality unfolds across projects with students, including a...",
      "url": "https://dev.to/experimentlabs/the-llm-can-declare-that-a-task-appears-to-be-finished-it-will-not-be-possible-to-check-it-off-1ff8",
      "tags": "productivity, career, careerdevelopment, ai",
      "reactions": 1,
      "comments": 0,
      "reading_time": 14,
      "author": "experimentlabs"
    },
    {
      "title": "My AWS Certification Journey: From Serverless Projects to 12 Active Certifications",
      "description": "How client work, structured learning, hands-on practice, and a few uncomfortable challenges helped me...",
      "url": "https://dev.to/muswain/my-aws-certification-journey-from-serverless-projects-to-12-active-certifications-1oe9",
      "tags": "aws, career, learning, certification",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "muswain"
    },
    {
      "title": "Programming Is Mostly Learning How to Investigate Things",
      "description": "When I first started learning programming, I thought getting better at it meant knowing more...",
      "url": "https://dev.to/sizzlebop/programming-is-mostly-learning-how-to-investigate-things-2hf6",
      "tags": "programming, beginners, debugging, career",
      "reactions": 14,
      "comments": 0,
      "reading_time": 4,
      "author": "sizzlebop"
    },
    {
      "title": "readme",
      "description": "Estou dando os primeiros passos na minha carreira em TI — e faço questão de compartilhar essa jornada...",
      "url": "https://dev.to/pedrohs_cdc/readme-43di",
      "tags": "beginners, career, computerscience, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "pedrohs_cdc"
    }
  ]
}
```

