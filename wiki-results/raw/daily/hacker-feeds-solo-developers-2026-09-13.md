# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-13 06:39:13 UTC

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
      "forks": 1615,
      "added_stars": 1936,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4494,
      "added_stars": 5124,
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
      "author": "humanlayer",
      "repo": "skills",
      "avatar": "https://github.com/humanlayer.png",
      "repo_link": "https://github.com/humanlayer/skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 116,
      "added_stars": 1380,
      "builtBy": [
        {
          "username": "dexhorthy",
          "href": "https://github.com/dexhorthy",
          "avatar": "https://avatars.githubusercontent.com/u/3730605"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "K-Mistele",
          "href": "https://github.com/K-Mistele",
          "avatar": "https://avatars.githubusercontent.com/u/18430555"
        }
      ]
    },
    {
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3639,
      "added_stars": 783,
      "builtBy": [
        {
          "username": "OrKoN",
          "href": "https://github.com/OrKoN",
          "avatar": "https://avatars.githubusercontent.com/u/399150"
        },
        {
          "username": "Lightning00Blade",
          "href": "https://github.com/Lightning00Blade",
          "avatar": "https://avatars.githubusercontent.com/u/34244704"
        },
        {
          "username": "browser-automation-bot",
          "href": "https://github.com/browser-automation-bot",
          "avatar": "https://avatars.githubusercontent.com/u/133232582"
        },
        {
          "username": "yulunz",
          "href": "https://github.com/yulunz",
          "avatar": "https://avatars.githubusercontent.com/u/11618243"
        }
      ]
    },
    {
      "author": "THU-MAIC",
      "repo": "OpenMAIC",
      "avatar": "https://github.com/THU-MAIC.png",
      "repo_link": "https://github.com/THU-MAIC/OpenMAIC",
      "desc": "Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5750,
      "added_stars": 4417,
      "builtBy": [
        {
          "username": "wyuc",
          "href": "https://github.com/wyuc",
          "avatar": "https://avatars.githubusercontent.com/u/18752201"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cosarah",
          "href": "https://github.com/cosarah",
          "avatar": "https://avatars.githubusercontent.com/u/117187635"
        },
        {
          "username": "YizukiAme",
          "href": "https://github.com/YizukiAme",
          "avatar": "https://avatars.githubusercontent.com/u/104178195"
        },
        {
          "username": "ly-wang19",
          "href": "https://github.com/ly-wang19",
          "avatar": "https://avatars.githubusercontent.com/u/94427531"
        }
      ]
    },
    {
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8551,
      "added_stars": 1707,
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
          "username": "proffesor-for-testing",
          "href": "https://github.com/proffesor-for-testing",
          "avatar": "https://avatars.githubusercontent.com/u/214853444"
        },
        {
          "username": "dajiaohuang",
          "href": "https://github.com/dajiaohuang",
          "avatar": "https://avatars.githubusercontent.com/u/108231307"
        },
        {
          "username": "alexx-ftw",
          "href": "https://github.com/alexx-ftw",
          "avatar": "https://avatars.githubusercontent.com/u/22500633"
        }
      ]
    },
    {
      "author": "every-app",
      "repo": "open-seo",
      "avatar": "https://github.com/every-app.png",
      "repo_link": "https://github.com/every-app/open-seo",
      "desc": "Open source alternative to Semrush and Ahrefs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2350,
      "added_stars": 1334,
      "builtBy": [
        {
          "username": "bensenescu",
          "href": "https://github.com/bensenescu",
          "avatar": "https://avatars.githubusercontent.com/u/44480372"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jeremypenguin-max",
          "href": "https://github.com/jeremypenguin-max",
          "avatar": "https://avatars.githubusercontent.com/u/287046313"
        },
        {
          "username": "bookingseo",
          "href": "https://github.com/bookingseo",
          "avatar": "https://avatars.githubusercontent.com/u/68512992"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        }
      ]
    },
    {
      "author": "awslabs",
      "repo": "aidlc-workflows",
      "avatar": "https://github.com/awslabs.png",
      "repo_link": "https://github.com/awslabs/aidlc-workflows",
      "desc": "AI-Driven Life Cycle (AI-DLC) adaptive workflow steering rules for AI coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 823,
      "added_stars": 209,
      "builtBy": [
        {
          "username": "apackeer",
          "href": "https://github.com/apackeer",
          "avatar": "https://avatars.githubusercontent.com/u/2102737"
        },
        {
          "username": "leandrodamascena",
          "href": "https://github.com/leandrodamascena",
          "avatar": "https://avatars.githubusercontent.com/u/4295173"
        },
        {
          "username": "raj-jain-aws",
          "href": "https://github.com/raj-jain-aws",
          "avatar": "https://avatars.githubusercontent.com/u/172572948"
        },
        {
          "username": "scottschreckengaust",
          "href": "https://github.com/scottschreckengaust",
          "avatar": "https://avatars.githubusercontent.com/u/345885"
        }
      ]
    },
    {
      "author": "anomalyco",
      "repo": "opencode",
      "avatar": "https://github.com/anomalyco.png",
      "repo_link": "https://github.com/anomalyco/opencode",
      "desc": "The open source coding agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 27111,
      "added_stars": 2600,
      "builtBy": [
        {
          "username": "thdxr",
          "href": "https://github.com/thdxr",
          "avatar": "https://avatars.githubusercontent.com/u/826656"
        },
        {
          "username": "adamdotdevin",
          "href": "https://github.com/adamdotdevin",
          "avatar": "https://avatars.githubusercontent.com/u/2363879"
        },
        {
          "username": "rekram1-node",
          "href": "https://github.com/rekram1-node",
          "avatar": "https://avatars.githubusercontent.com/u/63023139"
        },
        {
          "username": "actions-user",
          "href": "https://github.com/actions-user",
          "avatar": "https://avatars.githubusercontent.com/u/65916846"
        }
      ]
    },
    {
      "author": "OpenHands",
      "repo": "OpenHands",
      "avatar": "https://github.com/OpenHands.png",
      "repo_link": "https://github.com/OpenHands/OpenHands",
      "desc": "🙌 OpenHands: AI-Driven Development",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 11489,
      "added_stars": 1442,
      "builtBy": [
        {
          "username": "openhands-agent",
          "href": "https://github.com/openhands-agent",
          "avatar": "https://avatars.githubusercontent.com/u/175740463"
        },
        {
          "username": "xingyaoww",
          "href": "https://github.com/xingyaoww",
          "avatar": "https://avatars.githubusercontent.com/u/38853559"
        },
        {
          "username": "hieptl",
          "href": "https://github.com/hieptl",
          "avatar": "https://avatars.githubusercontent.com/u/69354317"
        },
        {
          "username": "tofarr",
          "href": "https://github.com/tofarr",
          "avatar": "https://avatars.githubusercontent.com/u/17094895"
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
      "forks": 317,
      "added_stars": 1515,
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
      "author": "MoonTechLab",
      "repo": "LunaTV",
      "avatar": "https://github.com/MoonTechLab.png",
      "repo_link": "https://github.com/MoonTechLab/LunaTV",
      "desc": "本项目采用 CC BY-NC-SA 协议，禁止任何商业化行为，任何衍生项目必须保留本项目地址并以相同协议开源",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9085,
      "added_stars": 1059,
      "builtBy": [
        {
          "username": "senshinya",
          "href": "https://github.com/senshinya",
          "avatar": "https://avatars.githubusercontent.com/u/155552943"
        },
        {
          "username": "JohnsonRan",
          "href": "https://github.com/JohnsonRan",
          "avatar": "https://avatars.githubusercontent.com/u/89735151"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "As9xm",
          "href": "https://github.com/As9xm",
          "avatar": "https://avatars.githubusercontent.com/u/197338912"
        }
      ]
    },
    {
      "author": "pascalorg",
      "repo": "editor",
      "avatar": "https://github.com/pascalorg.png",
      "repo_link": "https://github.com/pascalorg/editor",
      "desc": "Open-source 3D architectural editor with a local CLI, MCP tools, and practical workflows for humans and AI agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2958,
      "added_stars": 1982,
      "builtBy": [
        {
          "username": "wass08",
          "href": "https://github.com/wass08",
          "avatar": "https://avatars.githubusercontent.com/u/6551176"
        },
        {
          "username": "Aymericr",
          "href": "https://github.com/Aymericr",
          "avatar": "https://avatars.githubusercontent.com/u/4444492"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "sudhir9297",
          "href": "https://github.com/sudhir9297",
          "avatar": "https://avatars.githubusercontent.com/u/19578447"
        },
        {
          "username": "open-pascal",
          "href": "https://github.com/open-pascal",
          "avatar": "https://avatars.githubusercontent.com/u/271033448"
        }
      ]
    },
    {
      "author": "BraveOPotato",
      "repo": "FckSignups",
      "avatar": "https://github.com/BraveOPotato.png",
      "repo_link": "https://github.com/BraveOPotato/FckSignups",
      "desc": "A list of tools that are open-source, in-browser, and require no-signups!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 245,
      "added_stars": 1488,
      "builtBy": [
        {
          "username": "BraveOPotato",
          "href": "https://github.com/BraveOPotato",
          "avatar": "https://avatars.githubusercontent.com/u/57965732"
        },
        {
          "username": "Moamal-2000",
          "href": "https://github.com/Moamal-2000",
          "avatar": "https://avatars.githubusercontent.com/u/103026211"
        },
        {
          "username": "ic0e",
          "href": "https://github.com/ic0e",
          "avatar": "https://avatars.githubusercontent.com/u/67431669"
        },
        {
          "username": "AnandSundar",
          "href": "https://github.com/AnandSundar",
          "avatar": "https://avatars.githubusercontent.com/u/7275943"
        },
        {
          "username": "mbj36",
          "href": "https://github.com/mbj36",
          "avatar": "https://avatars.githubusercontent.com/u/9936881"
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
      "forks": 561,
      "added_stars": 850,
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
          "username": "rafaelmelgaco",
          "href": "https://github.com/rafaelmelgaco",
          "avatar": "https://avatars.githubusercontent.com/u/163351162"
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
      "forks": 2688,
      "added_stars": 1045,
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
          "username": "jonathanhefner",
          "href": "https://github.com/jonathanhefner",
          "avatar": "https://avatars.githubusercontent.com/u/771968"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "magnitudedev",
      "repo": "magnitude",
      "avatar": "https://github.com/magnitudedev.png",
      "repo_link": "https://github.com/magnitudedev/magnitude",
      "desc": "Open source local inference engine. It runs models on the hardware you already have, whether that's a Mac, an NVIDIA or AMD GPU, or just a CPU. Plug it into Pi, OpenCode, Hermes, OpenClaw, Codex, Claude Code, Oh My Pi, and Cline.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 331,
      "added_stars": 1445,
      "builtBy": [
        {
          "username": "anerli",
          "href": "https://github.com/anerli",
          "avatar": "https://avatars.githubusercontent.com/u/28166244"
        },
        {
          "username": "thrgreenwald",
          "href": "https://github.com/thrgreenwald",
          "avatar": "https://avatars.githubusercontent.com/u/32600629"
        },
        {
          "username": "fabianhug",
          "href": "https://github.com/fabianhug",
          "avatar": "https://avatars.githubusercontent.com/u/1196732"
        },
        {
          "username": "lloydgreenwald",
          "href": "https://github.com/lloydgreenwald",
          "avatar": "https://avatars.githubusercontent.com/u/120605515"
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
      "forks": 216,
      "added_stars": 346,
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
      "author": "majd",
      "repo": "ipatool",
      "avatar": "https://github.com/majd.png",
      "repo_link": "https://github.com/majd/ipatool",
      "desc": "Command-line tool that allows searching and downloading app packages (known as ipa files) for iOS, iPadOS, tvOS, and visionOS from the App Store.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 931,
      "added_stars": 1298,
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
      "forks": 1451,
      "added_stars": 757,
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
      "author": "authelia",
      "repo": "authelia",
      "avatar": "https://github.com/authelia.png",
      "repo_link": "https://github.com/authelia/authelia",
      "desc": "The Single Sign-On Multi-Factor portal for web apps. OpenID Certified™ and Post-Quantum Cryptography Ready.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1480,
      "added_stars": 431,
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
      "author": "gtsteffaniak",
      "repo": "filebrowser",
      "avatar": "https://github.com/gtsteffaniak.png",
      "repo_link": "https://github.com/gtsteffaniak/filebrowser",
      "desc": "📂 Web File Browser",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 436,
      "added_stars": 549,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1012,
      "added_stars": 1182,
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
      "author": "theagentrouter",
      "repo": "agent-router",
      "avatar": "https://github.com/theagentrouter.png",
      "repo_link": "https://github.com/theagentrouter/agent-router",
      "desc": "Manages Unified Access to Generative AI Services built on Envoy Gateway",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 373,
      "added_stars": 140,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 316,
      "added_stars": 640,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 179,
      "added_stars": 1881,
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
      "author": "go-task",
      "repo": "task",
      "avatar": "https://github.com/go-task.png",
      "repo_link": "https://github.com/go-task/task",
      "desc": "A fast, cross-platform build tool inspired by Make, designed for modern workflows.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 906,
      "added_stars": 197,
      "builtBy": [
        {
          "username": "andreynering",
          "href": "https://github.com/andreynering",
          "avatar": "https://avatars.githubusercontent.com/u/7011819"
        },
        {
          "username": "pd93",
          "href": "https://github.com/pd93",
          "avatar": "https://avatars.githubusercontent.com/u/9294862"
        },
        {
          "username": "vmaerten",
          "href": "https://github.com/vmaerten",
          "avatar": "https://avatars.githubusercontent.com/u/9110126"
        },
        {
          "username": "task-bot",
          "href": "https://github.com/task-bot",
          "avatar": "https://avatars.githubusercontent.com/u/106601941"
        },
        {
          "username": "jaedle",
          "href": "https://github.com/jaedle",
          "avatar": "https://avatars.githubusercontent.com/u/32975714"
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
      "forks": 891,
      "added_stars": 242,
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
      "author": "ongridio",
      "repo": "ongrid",
      "avatar": "https://github.com/ongridio.png",
      "repo_link": "https://github.com/ongridio/ongrid",
      "desc": "An ops AI Agent that understands your infrastructure, finds the root cause, and fixes it — right from Slack, Telegram, Lark or DingTalk.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 220,
      "added_stars": 399,
      "builtBy": [
        {
          "username": "singchia",
          "href": "https://github.com/singchia",
          "avatar": "https://avatars.githubusercontent.com/u/15531166"
        },
        {
          "username": "youzi-1122",
          "href": "https://github.com/youzi-1122",
          "avatar": "https://avatars.githubusercontent.com/u/49868354"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "anrenlx2025",
          "href": "https://github.com/anrenlx2025",
          "avatar": "https://avatars.githubusercontent.com/u/291979871"
        },
        {
          "username": "ixchitl",
          "href": "https://github.com/ixchitl",
          "avatar": "https://avatars.githubusercontent.com/u/21005344"
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
      "forks": 683,
      "added_stars": 352,
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
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 1Panel is a modern, open-source Linux server management panel and a lightweight AI management platform.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3345,
      "added_stars": 467,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2231,
      "added_stars": 664,
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
          "username": "bryanbeverly",
          "href": "https://github.com/bryanbeverly",
          "avatar": "https://avatars.githubusercontent.com/u/1050885"
        },
        {
          "username": "petegallagher",
          "href": "https://github.com/petegallagher",
          "avatar": "https://avatars.githubusercontent.com/u/688331"
        }
      ]
    },
    {
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API 一站式开源中转服务，让 Claude、Openai 、Gemini、Grok订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8631,
      "added_stars": 4809,
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
          "username": "touwaeriol",
          "href": "https://github.com/touwaeriol",
          "avatar": "https://avatars.githubusercontent.com/u/52620633"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "wucm667",
          "href": "https://github.com/wucm667",
          "avatar": "https://avatars.githubusercontent.com/u/109257021"
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
      "forks": 727,
      "added_stars": 262,
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
      "author": "Tencent",
      "repo": "WeKnora",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/WeKnora",
      "desc": "Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3257,
      "added_stars": 2910,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 17836,
      "added_stars": 2998,
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
      "author": "weave-os",
      "repo": "router",
      "avatar": "https://github.com/weave-os.png",
      "repo_link": "https://github.com/weave-os/router",
      "desc": "Model router for agentic systems. Routes every prompt to the right model in <50ms. Cut costs 40-70% with just an endpoint change.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 117,
      "added_stars": 3370,
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
      "author": "putyy",
      "repo": "res-downloader",
      "avatar": "https://github.com/putyy.png",
      "repo_link": "https://github.com/putyy/res-downloader",
      "desc": "视频号、小程序、抖音、快手、小红书、直播流、m3u8、酷狗、QQ音乐等常见网络资源下载!",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2451,
      "added_stars": 779,
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
      "author": "slackhq",
      "repo": "nebula",
      "avatar": "https://github.com/slackhq.png",
      "repo_link": "https://github.com/slackhq/nebula",
      "desc": "A scalable overlay networking tool with a focus on performance, simplicity and security",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1183,
      "added_stars": 760,
      "builtBy": [
        {
          "username": "nbrownus",
          "href": "https://github.com/nbrownus",
          "avatar": "https://avatars.githubusercontent.com/u/957319"
        },
        {
          "username": "wadey",
          "href": "https://github.com/wadey",
          "avatar": "https://avatars.githubusercontent.com/u/18437"
        },
        {
          "username": "JackDoan",
          "href": "https://github.com/JackDoan",
          "avatar": "https://avatars.githubusercontent.com/u/1024837"
        },
        {
          "username": "johnmaguire",
          "href": "https://github.com/johnmaguire",
          "avatar": "https://avatars.githubusercontent.com/u/440033"
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
      "forks": 288,
      "added_stars": 3563,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2824,
      "added_stars": 8682,
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2488,
      "added_stars": 23327,
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
      "author": "youssofal",
      "repo": "MTPLX",
      "avatar": "https://github.com/youssofal.png",
      "repo_link": "https://github.com/youssofal/MTPLX",
      "desc": "3x faster speeds on MLX | Qwen 3.8 27B | Native MTP Speculative Decoding On Apple Silicon With No External Drafter.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 168,
      "added_stars": 1116,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3083,
      "added_stars": 13070,
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
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 52899,
      "added_stars": 24706,
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
      "author": "semantica-agi",
      "repo": "semantica",
      "avatar": "https://github.com/semantica-agi.png",
      "repo_link": "https://github.com/semantica-agi/semantica",
      "desc": "Graph-Native Infrastructure for Context and Accountable AI Systems",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1425,
      "added_stars": 7399,
      "builtBy": [
        {
          "username": "KaifAhmad1",
          "href": "https://github.com/KaifAhmad1",
          "avatar": "https://avatars.githubusercontent.com/u/98801504"
        },
        {
          "username": "Sameer6305",
          "href": "https://github.com/Sameer6305",
          "avatar": "https://avatars.githubusercontent.com/u/169603553"
        },
        {
          "username": "ZohaibHassan16",
          "href": "https://github.com/ZohaibHassan16",
          "avatar": "https://avatars.githubusercontent.com/u/109234410"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "NVIDIA-NeMo",
      "repo": "Switchyard",
      "avatar": "https://github.com/NVIDIA-NeMo.png",
      "repo_link": "https://github.com/NVIDIA-NeMo/Switchyard",
      "desc": "Switchyard lets LLM applications route traffic across models and providers while preserving native OpenAI and Anthropic API compatibility - enabling flexible model selection, benchmarking, and cost/performance optimization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 263,
      "added_stars": 2319,
      "builtBy": [
        {
          "username": "nachiketb-nvidia",
          "href": "https://github.com/nachiketb-nvidia",
          "avatar": "https://avatars.githubusercontent.com/u/197974741"
        },
        {
          "username": "grahamking",
          "href": "https://github.com/grahamking",
          "avatar": "https://avatars.githubusercontent.com/u/180418"
        },
        {
          "username": "ryan-lempka",
          "href": "https://github.com/ryan-lempka",
          "avatar": "https://avatars.githubusercontent.com/u/196090752"
        },
        {
          "username": "elyasmnvidian",
          "href": "https://github.com/elyasmnvidian",
          "avatar": "https://avatars.githubusercontent.com/u/186739590"
        },
        {
          "username": "ayushag-nv",
          "href": "https://github.com/ayushag-nv",
          "avatar": "https://avatars.githubusercontent.com/u/208532109"
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
      "forks": 3099,
      "added_stars": 5141,
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
      "author": "marin-community",
      "repo": "marin",
      "avatar": "https://github.com/marin-community.png",
      "repo_link": "https://github.com/marin-community/marin",
      "desc": "Open-source framework for the research and development of foundation models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 291,
      "added_stars": 2419,
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
          "username": "abhinavg4",
          "href": "https://github.com/abhinavg4",
          "avatar": "https://avatars.githubusercontent.com/u/12746692"
        },
        {
          "username": "ravwojdyla",
          "href": "https://github.com/ravwojdyla",
          "avatar": "https://avatars.githubusercontent.com/u/1419010"
        }
      ]
    },
    {
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 19014,
      "added_stars": 20725,
      "builtBy": [
        {
          "username": "harry0703",
          "href": "https://github.com/harry0703",
          "avatar": "https://avatars.githubusercontent.com/u/4928832"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "yyhhyyyyyy",
          "href": "https://github.com/yyhhyyyyyy",
          "avatar": "https://avatars.githubusercontent.com/u/95077259"
        },
        {
          "username": "vuisme",
          "href": "https://github.com/vuisme",
          "avatar": "https://avatars.githubusercontent.com/u/96235876"
        },
        {
          "username": "Mihir7027",
          "href": "https://github.com/Mihir7027",
          "avatar": "https://avatars.githubusercontent.com/u/41247825"
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
      "forks": 1871,
      "added_stars": 3104,
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
      "forks": 3496,
      "added_stars": 4029,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7901,
      "added_stars": 6411,
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
          "username": "wangzhaode",
          "href": "https://github.com/wangzhaode",
          "avatar": "https://avatars.githubusercontent.com/u/8401806"
        },
        {
          "username": "JustinGuese",
          "href": "https://github.com/JustinGuese",
          "avatar": "https://avatars.githubusercontent.com/u/9588843"
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
      "forks": 4049,
      "added_stars": 11475,
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
      "author": "sngyai",
      "repo": "Sequoia-X",
      "avatar": "https://github.com/sngyai.png",
      "repo_link": "https://github.com/sngyai/Sequoia-X",
      "desc": "A股自动选股系统 — 多种技术形态自动扫描，收盘后自动运行并推送飞书",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1457,
      "added_stars": 1877,
      "builtBy": [
        {
          "username": "sngyai",
          "href": "https://github.com/sngyai",
          "avatar": "https://avatars.githubusercontent.com/u/1306534"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ethqunzhong",
          "href": "https://github.com/ethqunzhong",
          "avatar": "https://avatars.githubusercontent.com/u/16517186"
        },
        {
          "username": "YipKo",
          "href": "https://github.com/YipKo",
          "avatar": "https://avatars.githubusercontent.com/u/17290550"
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
      "forks": 584,
      "added_stars": 1790,
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
      "author": "cactus-compute",
      "repo": "needle",
      "avatar": "https://github.com/cactus-compute.png",
      "repo_link": "https://github.com/cactus-compute/needle",
      "desc": "14MB foundation model for tiny devices; phones, wearables, smart home, and robots.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 702,
      "added_stars": 6905,
      "builtBy": [
        {
          "username": "HenryNdubuaku",
          "href": "https://github.com/HenryNdubuaku",
          "avatar": "https://avatars.githubusercontent.com/u/26547576"
        },
        {
          "username": "ncylich",
          "href": "https://github.com/ncylich",
          "avatar": "https://avatars.githubusercontent.com/u/75380243"
        },
        {
          "username": "kar-m",
          "href": "https://github.com/kar-m",
          "avatar": "https://avatars.githubusercontent.com/u/52249278"
        },
        {
          "username": "justinl66",
          "href": "https://github.com/justinl66",
          "avatar": "https://avatars.githubusercontent.com/u/128657146"
        },
        {
          "username": "LeonSGP43",
          "href": "https://github.com/LeonSGP43",
          "avatar": "https://avatars.githubusercontent.com/u/154585401"
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
      "forks": 168,
      "added_stars": 4288,
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
      "author": "3b1b",
      "repo": "manim",
      "avatar": "https://github.com/3b1b.png",
      "repo_link": "https://github.com/3b1b/manim",
      "desc": "Animation engine for explanatory math videos",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7701,
      "added_stars": 3386,
      "builtBy": [
        {
          "username": "3b1b",
          "href": "https://github.com/3b1b",
          "avatar": "https://avatars.githubusercontent.com/u/11601040"
        },
        {
          "username": "TonyCrane",
          "href": "https://github.com/TonyCrane",
          "avatar": "https://avatars.githubusercontent.com/u/44120331"
        },
        {
          "username": "bhbr",
          "href": "https://github.com/bhbr",
          "avatar": "https://avatars.githubusercontent.com/u/13440601"
        },
        {
          "username": "YishiMichael",
          "href": "https://github.com/YishiMichael",
          "avatar": "https://avatars.githubusercontent.com/u/50232075"
        },
        {
          "username": "eulertour",
          "href": "https://github.com/eulertour",
          "avatar": "https://avatars.githubusercontent.com/u/43117506"
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
      "forks": 9596,
      "added_stars": 4838,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
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
    },
    {
      "title": "We built a fast data grid across React, Vue & Svelte – here's what we learned",
      "url": "https://svar.dev/blog/building-data-grid-in-react-vue-svelte/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-08-24T17:08:59.000Z"
    },
    {
      "title": "I built a flight recorder for AI sessions",
      "url": "https://dev.to/allthingssmitty/i-built-a-flight-recorder-for-ai-sessions-4o8h",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-08-24T12:44:16.000Z"
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
      "title": "What was your win this week??",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-5amk",
      "tags": "weeklyretro",
      "reactions": 32,
      "comments": 37,
      "reading_time": 1,
      "author": "jess"
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
      "title": "The Modern Pitch for BlocSignal: Why Engineering Leads Are Moving to Reactive Primitives",
      "description": "A comprehensive guide for tech leads, staff architects, and engineering managers evaluating BlocSignal: cutting through CISC ceremony, unlocking AI agent velocity, eliminating the code-gen tax, and mastering push-pull reactivity.",
      "url": "https://dev.to/gde/the-modern-pitch-for-blocsignal-why-engineering-leads-are-moving-to-reactive-primitives-5d5h",
      "tags": "flutter, dart, architecture, programming",
      "reactions": 8,
      "comments": 1,
      "reading_time": 15,
      "author": "randalschwartz"
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
      "title": "FastMCP Is Now MCPServer: Migrating a Python MCP Server to the MCP SDK 2.x",
      "description": "Step-by-step: moving a FastMCP server to the MCP Python SDK 2.x — what broke, what changed, what did not, and a redeploy of its Gemma 4 vLLM backend to a Cloud Run L4 GPU.",
      "url": "https://dev.to/gde/fastmcp-is-now-mcpserver-migrating-a-python-mcp-server-to-the-mcp-sdk-2x-2nhj",
      "tags": "mcp, python, googlecloud, vllm",
      "reactions": 12,
      "comments": 7,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "20 Agentic AI Terms Every Developer Should Know (Explained Simply)",
      "description": "Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...",
      "url": "https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii",
      "tags": "ai, agents, mcp, beginners",
      "reactions": 220,
      "comments": 115,
      "reading_time": 11,
      "author": "sylwia-lask"
    },
    {
      "title": "Four Debian 13 Boxes, One Brief: 1,923 Packages on Metal, 328 in the Cloud",
      "description": "The same Debian 13 on a laptop and on AWS, GCE and Azure. The cloud images ship 328-350 packages against 1,923 on metal, no firmware package at all, and no tool to read the NVMe they all boot from. Each machine was then given the same brief and asked to analyse itself. Three of them agreed. The fourth found a partition table its own resize had broken.",
      "url": "https://dev.to/gde/four-debian-13-boxes-one-brief-1923-packages-on-metal-328-in-the-cloud-and-the-backup-gpt-cc2",
      "tags": "debian, linux, claudecode, devops",
      "reactions": 9,
      "comments": 2,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "4 pitfalls of loop engineering (and how to fix them)",
      "description": "Perhaps you've heard the term Loop Engineering: instead of solving a problem by hand, you build a...",
      "url": "https://dev.to/googleai/4-pitfalls-of-loop-engineering-and-how-to-fix-them-1ji2",
      "tags": "ai, agents, discuss",
      "reactions": 17,
      "comments": 8,
      "reading_time": 1,
      "author": "annthurium"
    },
    {
      "title": "Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically",
      "description": "Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.",
      "url": "https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b",
      "tags": "devops, docker, go, cloud",
      "reactions": 7,
      "comments": 3,
      "reading_time": 4,
      "author": "marioezquerro"
    },
    {
      "title": "2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code",
      "description": "Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.",
      "url": "https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3",
      "tags": "mcp, gemma, googlecloud, claudecode",
      "reactions": 8,
      "comments": 1,
      "reading_time": 13,
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
      "title": "heol",
      "url": "https://wiki.xxiivv.com/site/heol.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "lisp"
      ],
      "id": "pr1po9"
    },
    {
      "title": "The night 142 of my servers went up in the clouds Physically",
      "url": "https://exquisite.tube/w/nQbc54t4G7YGaqiryZ7mg1",
      "score": 2,
      "comments": 0,
      "tags": [
        "netbsd"
      ],
      "id": "pbmvov"
    },
    {
      "title": "Lua Pattern Tester",
      "url": "https://iamreiyn.github.io/lua-pattern-tester/",
      "score": 3,
      "comments": 0,
      "tags": [
        "lua"
      ],
      "id": "m4pjtg"
    },
    {
      "title": "A Dick Smith VZ200 without the Dick Smith",
      "url": "http://oldvcr.blogspot.com/2026/09/a-dick-smith-vz200-without-dick-smith.html",
      "score": 4,
      "comments": 0,
      "tags": [
        "retrocomputing"
      ],
      "id": "jwlzd3"
    },
    {
      "title": "Metacarp",
      "url": "https://blog.veitheller.de/Metacarp.html",
      "score": 2,
      "comments": 0,
      "tags": [
        "compilers",
        "lisp"
      ],
      "id": "3nk1lh"
    },
    {
      "title": "Opusfived",
      "url": "https://opusfived.dev/",
      "score": 5,
      "comments": 0,
      "tags": [
        "satire",
        "vibecoding"
      ],
      "id": "scyufg"
    },
    {
      "title": "a better way of blocking macOS updates",
      "url": "https://zoey-on-github.github.io/blog/updates.html",
      "score": 2,
      "comments": 0,
      "tags": [
        "mac"
      ],
      "id": "betbip"
    },
    {
      "title": "Everyone should slow down AI development except for me",
      "url": "https://xeiaso.net/notes/2026/everyone-slowdown-but-me/",
      "score": 17,
      "comments": 0,
      "tags": [
        "ai",
        "satire"
      ],
      "id": "fmkm3v"
    },
    {
      "title": "Microcode in Intel's 8087 floating-point chip: the scale instruction",
      "url": "https://www.righto.com/2026/09/8087-microcode-reverse-engineering-fscale.html",
      "score": 4,
      "comments": 0,
      "tags": [
        "hardware",
        "historical",
        "reversing"
      ],
      "id": "6xdgjr"
    },
    {
      "title": "Optimizing a single Rust Clippy lint by 3133X",
      "url": "https://blog.goose.love/posts/making-a-clippy-lint-faster-by-3133x/",
      "score": 11,
      "comments": 0,
      "tags": [
        "rust"
      ],
      "id": "jtmyg2"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "mulmen",
      "descendants": 8,
      "id": 49679459,
      "kids": [
        49680679,
        49679547,
        49680148,
        49679522,
        49679466,
        49680381,
        49680083
      ],
      "score": 74,
      "time": 1789267437,
      "title": "The Interim Computer Museum",
      "type": "story",
      "url": "https://icm.museum/"
    },
    {
      "by": "juliantigler",
      "descendants": 95,
      "id": 49674050,
      "kids": [
        49674763,
        49680649,
        49674503,
        49675809,
        49680055,
        49677920,
        49680549,
        49674472,
        49678022,
        49674428,
        49674463,
        49675015,
        49676742,
        49675395,
        49680101,
        49675623,
        49674953,
        49674437,
        49677676,
        49676776,
        49674448,
        49678071,
        49675484,
        49676120,
        49678779,
        49678580,
        49679281,
        49674482,
        49679035,
        49678612,
        49676011,
        49674986,
        49676420,
        49675213,
        49676125,
        49679435,
        49677776
      ],
      "score": 415,
      "time": 1789230308,
      "title": "Make your first edit to OpenStreetMap",
      "type": "story",
      "url": "https://high5apps.github.io/josm-plugin-website-wizard/"
    },
    {
      "by": "jonifico",
      "descendants": 70,
      "id": 49678969,
      "kids": [
        49680433,
        49680454,
        49679433,
        49679978,
        49679365,
        49679392,
        49679354,
        49679519,
        49679357,
        49680445,
        49679946,
        49679358,
        49679322,
        49679118,
        49679366,
        49679997,
        49679292,
        49679977,
        49679456,
        49679383,
        49679431,
        49680150,
        49679379,
        49679932,
        49679991,
        49680688,
        49679950
      ],
      "score": 77,
      "time": 1789262551,
      "title": "Why are AI agents lying, cheating and coordinating?",
      "type": "story",
      "url": "https://yoshuabengio.org/en/publication/why-are-ai-agents-lying-cheating-and-coordinating"
    },
    {
      "by": "theanonymousone",
      "descendants": 119,
      "id": 49676820,
      "kids": [
        49680143,
        49680448,
        49677907,
        49677623,
        49680620,
        49677769,
        49679980,
        49678527,
        49680081,
        49677656,
        49679794,
        49678171,
        49677912,
        49679705,
        49678166,
        49680153,
        49679143,
        49677549,
        49679624,
        49677329,
        49679894,
        49677445,
        49679403,
        49677355,
        49678257,
        49679790,
        49678750,
        49677552,
        49679640,
        49678495,
        49678863,
        49677705,
        49677544,
        49677452,
        49677618
      ],
      "score": 205,
      "time": 1789244748,
      "title": "Real-SWE: Benchmarking AI models on private, real-world, enterprise codebases",
      "type": "story",
      "url": "https://withspecific.com/benchmarks/real-swe"
    },
    {
      "by": "ichacas",
      "descendants": 9,
      "id": 49640913,
      "kids": [
        49680659,
        49680639,
        49680538,
        49679985,
        49680576,
        49680494
      ],
      "score": 41,
      "time": 1789032737,
      "title": "I Made a Non-Wi-Fi Mitsubishi AC Smart with an ESP32",
      "type": "story",
      "url": "https://medium.com/@ivangomezarnedo/how-i-added-a-non-wi-fi-mitsubishi-ac-to-home-assistant-22770661dd77"
    },
    {
      "by": "tolugenius",
      "descendants": 315,
      "id": 49673098,
      "kids": [
        49673871,
        49674066,
        49676840,
        49673536,
        49673099,
        49675529,
        49679356,
        49679421,
        49673205,
        49673497,
        49673585,
        49674600,
        49673578,
        49673958,
        49675568,
        49674446,
        49675107,
        49673400,
        49675324,
        49678038,
        49675595,
        49677637,
        49677513,
        49673542,
        49678325,
        49674460,
        49679045,
        49673998,
        49675770,
        49676213,
        49677551,
        49680401,
        49673663,
        49673774
      ],
      "score": 447,
      "text": "<a href=\"https:&#x2F;&#x2F;archive.ph&#x2F;kt50V\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.ph&#x2F;kt50V</a>",
      "time": 1789225707,
      "title": "Nvidia is the central bank of AI",
      "type": "story",
      "url": "https://www.economist.com/interactive/briefing/2026/09/03/nvidia-is-the-central-bank-of-ai"
    },
    {
      "by": "NaOH",
      "descendants": 44,
      "id": 49619848,
      "kids": [
        49677733,
        49680242,
        49680449,
        49678834,
        49678377,
        49678123,
        49678718,
        49679582,
        49677569,
        49678741,
        49678347,
        49678512
      ],
      "score": 185,
      "time": 1788919057,
      "title": "Apple iPod Engraver (2019)",
      "type": "story",
      "url": "https://dunstanorchard.com/apple-ipod-engraver/"
    },
    {
      "by": "pepys",
      "descendants": 9,
      "id": 49679647,
      "kids": [
        49680033
      ],
      "score": 17,
      "time": 1789269509,
      "title": "A succession crisis that tore England apart",
      "type": "story",
      "url": "https://www.historytoday.com/archive/feature/succession-crisis-tore-england-apart"
    },
    {
      "by": "xena",
      "descendants": 198,
      "id": 49678683,
      "kids": [
        49679205,
        49680405,
        49679107,
        49679085,
        49679147,
        49680071,
        49680171,
        49679255,
        49679116,
        49679585,
        49679697,
        49679095,
        49679838,
        49680018,
        49679805,
        49679166,
        49679089,
        49679832,
        49679067,
        49679670,
        49679088,
        49679994,
        49679251,
        49679139,
        49679077
      ],
      "score": 348,
      "time": 1789259444,
      "title": "Everyone should slow down AI development except for me",
      "type": "story",
      "url": "https://xeiaso.net/notes/2026/everyone-slowdown-but-me/"
    },
    {
      "by": "emschwartz",
      "descendants": 39,
      "id": 49679360,
      "kids": [
        49680515,
        49679902,
        49680402,
        49679707,
        49679437,
        49680627,
        49679399,
        49680218,
        49679989,
        49680648,
        49680199,
        49680280,
        49680123,
        49680060,
        49680379,
        49680049,
        49680030
      ],
      "score": 42,
      "time": 1789266579,
      "title": "Don't call yourself an artisanal programmer",
      "type": "story",
      "url": "https://purplesyringa.moe/blog/dont-call-yourself-an-artisanal-programmer/"
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
      "title": "I made two AIs review each other's code for 30 days. A human still caught the bug in 5 minutes.",
      "description": "Last month I let AI write 100% of my code for 30 days. The single loudest lesson wasn't \"AI is...",
      "url": "https://dev.to/infoinlet1/i-made-two-ais-review-each-others-code-for-30-days-a-human-still-caught-the-bug-in-5-minutes-484a",
      "tags": "ai, webdev, programming, career",
      "reactions": 13,
      "comments": 5,
      "reading_time": 7,
      "author": "infoinlet1"
    },
    {
      "title": "AI Is Already Better at Coding Than Most Developers. So Why Would a Company Still Hire You?",
      "description": "AI can write a React component in seconds.  It can create an API, design a database schema, write...",
      "url": "https://dev.to/robertadam987_/ai-is-already-better-at-coding-than-most-developers-so-why-would-a-company-still-hire-you-42h5",
      "tags": "ai, programming, career, softwaredevelopment",
      "reactions": 6,
      "comments": 0,
      "reading_time": 8,
      "author": "robertadam987_"
    },
    {
      "title": "IND-TECH WEEKLY #3: Pixxel's $100M Rocket Ride, Jio's Investor Roadshow Kicks Off, and Oracle's Next Layoff Wave 🇮🇳",
      "description": "Hey 👋  Last issue introduced Jobs Watch, and it's sticking around — this issue keeps that structure...",
      "url": "https://dev.to/dj29/ind-tech-weekly-3-pixxels-100m-rocket-ride-jios-investor-roadshow-kicks-off-and-oracles-1b9o",
      "tags": "india, news, career, discuss",
      "reactions": 11,
      "comments": 1,
      "reading_time": 6,
      "author": "dj29"
    },
    {
      "title": "\"Boredom Isn't the Enemy of Creativity — Knowing When to Stop Is the Skill",
      "description": "The second English piece from \"Psychology of the Keyboard,\" a series I write about the mental side of...",
      "url": "https://dev.to/hossam_assadallah_842151a/boredom-isnt-the-enemy-of-creativity-knowing-when-to-stop-is-the-skill-5co",
      "tags": "hossamassadallah, oracle, career, mentalhealth",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "hossam_assadallah_842151a"
    },
    {
      "title": "My journey into tech: from traffic manager to future developer",
      "description": "Hey, dev.to! 👋  I'm Maycon, a Systems Analysis and Development student at UNICID, currently making a...",
      "url": "https://dev.to/maycondev07/my-journey-into-tech-from-traffic-manager-to-future-developer-2g3",
      "tags": "career, learning, python",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "maycondev07"
    },
    {
      "title": "Day 0 of a Linux Challenge and the Prompt I Almost Got Wrong",
      "description": "I signed up for the Black IT Academy Linux Upskill Challenge. Twenty lessons, one server, a cohort in...",
      "url": "https://dev.to/jas_dev/day-0-of-a-linux-challenge-and-the-prompt-i-almost-got-wrong-2m36",
      "tags": "linux, beginners, devops, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "jas_dev"
    },
    {
      "title": "For Me, TDD Is Therapy",
      "description": "How TDD gave me a systematic way to work through the anxiety and uncertainty of software development—and how AI agents brought some of that anxiety back.",
      "url": "https://dev.to/renanfranca/for-me-tdd-is-therapy-2e10",
      "tags": "tdd, testing, ai, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "renanfranca"
    },
    {
      "title": "My First Blog Post: Why I Started Writing",
      "description": "I've been coding for a while now. I've built projects, fixed bugs, learned new technologies, and made...",
      "url": "https://dev.to/salmantahir/my-first-blog-post-why-i-started-writing-10f5",
      "tags": "webdev, beginners, career, writing",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "salmantahir"
    },
    {
      "title": "Tales of a Dev - An Alternative Reality",
      "description": "It’s been a little over a year since I realized that I work in the desert (a term coined by Kent Beck).",
      "url": "https://dev.to/renanfranca/tales-of-a-dev-an-alternative-reality-76m",
      "tags": "career, programming, opensource, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "renanfranca"
    },
    {
      "title": "The 5-step framework I use for any system design interview (6 worked examples)",
      "description": "Most people fail system design interviews by jumping straight to boxes. The fix is a fixed...",
      "url": "https://dev.to/shohruh_sharipov/the-5-step-framework-i-use-for-any-system-design-interview-6-worked-examples-3g0n",
      "tags": "systemdesign, interview, career, backend",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "shohruh_sharipov"
    }
  ]
}
```

