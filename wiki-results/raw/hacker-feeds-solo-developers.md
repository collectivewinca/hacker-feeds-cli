# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-14 06:49:10 UTC

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
      "forks": 1640,
      "added_stars": 2102,
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
      "forks": 4542,
      "added_stars": 5146,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3642,
      "added_stars": 736,
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
      "forks": 5796,
      "added_stars": 4202,
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
      "author": "humanlayer",
      "repo": "skills",
      "avatar": "https://github.com/humanlayer.png",
      "repo_link": "https://github.com/humanlayer/skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 123,
      "added_stars": 1004,
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
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8565,
      "added_stars": 1497,
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
      "author": "OpenHands",
      "repo": "OpenHands",
      "avatar": "https://github.com/OpenHands.png",
      "repo_link": "https://github.com/OpenHands/OpenHands",
      "desc": "🙌 OpenHands: AI-Driven Development",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 11506,
      "added_stars": 1477,
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
      "author": "awslabs",
      "repo": "aidlc-workflows",
      "avatar": "https://github.com/awslabs.png",
      "repo_link": "https://github.com/awslabs/aidlc-workflows",
      "desc": "AI-Driven Life Cycle (AI-DLC) adaptive workflow steering rules for AI coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 826,
      "added_stars": 205,
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
      "author": "alsk1992",
      "repo": "CloddsBot",
      "avatar": "https://github.com/alsk1992.png",
      "repo_link": "https://github.com/alsk1992/CloddsBot",
      "desc": "Open Source AI trading agent that operates autonomously across 1000+ markets - Polymarket, Kalshi, Binance, Hyperliquid, Solana DEXs, 5 EVM chains. Scans for edge, executes instantly, manages risk while you sleep. Agent commerce protocol for machine-to-machine payments. Self-hosted. Built on Claude.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 329,
      "added_stars": 1794,
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
      "author": "vercel-labs",
      "repo": "skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/skills",
      "desc": "The open agent skills tool - npx skills",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2693,
      "added_stars": 1057,
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
      "author": "microsoft",
      "repo": "vscode",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/vscode",
      "desc": "Visual Studio Code",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 42128,
      "added_stars": 1679,
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
      "author": "anomalyco",
      "repo": "opencode",
      "avatar": "https://github.com/anomalyco.png",
      "repo_link": "https://github.com/anomalyco/opencode",
      "desc": "The open source coding agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 27155,
      "added_stars": 2218,
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
      "author": "langgenius",
      "repo": "dify",
      "avatar": "https://github.com/langgenius.png",
      "repo_link": "https://github.com/langgenius/dify",
      "desc": "Build Agentic workflows, RAG pipelines, with rich AI model and tool support on one collaborative workspace. Deploy on cloud, VPC, or self-hosted, so teams move from prototype to production without rebuilding the stack.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 24582,
      "added_stars": 1072,
      "builtBy": [
        {
          "username": "lyzno1",
          "href": "https://github.com/lyzno1",
          "avatar": "https://avatars.githubusercontent.com/u/92089059"
        },
        {
          "username": "crazywoola",
          "href": "https://github.com/crazywoola",
          "avatar": "https://avatars.githubusercontent.com/u/100913391"
        },
        {
          "username": "laipz8200",
          "href": "https://github.com/laipz8200",
          "avatar": "https://avatars.githubusercontent.com/u/16485841"
        },
        {
          "username": "asukaminato0721",
          "href": "https://github.com/asukaminato0721",
          "avatar": "https://avatars.githubusercontent.com/u/30024051"
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
      "forks": 2961,
      "added_stars": 2015,
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
      "author": "melgarafael",
      "repo": "DeskcommCRM",
      "avatar": "https://github.com/melgarafael.png",
      "repo_link": "https://github.com/melgarafael/DeskcommCRM",
      "desc": "Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA). Open alternative to Kommo, Octadesk & Intercom for any business that sells by chat. MCP-ready, multi-tenant, LGPD.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 607,
      "added_stars": 1283,
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
      "author": "MoonTechLab",
      "repo": "LunaTV",
      "avatar": "https://github.com/MoonTechLab.png",
      "repo_link": "https://github.com/MoonTechLab/LunaTV",
      "desc": "本项目采用 CC BY-NC-SA 协议，禁止任何商业化行为，任何衍生项目必须保留本项目地址并以相同协议开源",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9089,
      "added_stars": 999,
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
      "author": "nab138",
      "repo": "iloader",
      "avatar": "https://github.com/nab138.png",
      "repo_link": "https://github.com/nab138/iloader",
      "desc": "User friendly sideloader",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 225,
      "added_stars": 542,
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
      "author": "adminsyspro",
      "repo": "proxcenter-ui",
      "avatar": "https://github.com/adminsyspro.png",
      "repo_link": "https://github.com/adminsyspro/proxcenter-ui",
      "desc": "ProxCenter is an alternative to VMware vCenter for Proxmox environments. It provides a modern, intuitive web interface to manage multiple Proxmox VE clusters and Proxmox Backup Server instances from a single pane of glass.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 98,
      "added_stars": 312,
      "builtBy": [
        {
          "username": "adminsyspro",
          "href": "https://github.com/adminsyspro",
          "avatar": "https://avatars.githubusercontent.com/u/51157323"
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
      "author": "rorkai",
      "repo": "App-Store-Connect-CLI",
      "avatar": "https://github.com/rorkai.png",
      "repo_link": "https://github.com/rorkai/App-Store-Connect-CLI",
      "desc": "Fast, scriptable CLI for the App Store Connect API. Automate TestFlight, builds, submissions, signing, analytics, screenshots, subscriptions, and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 608,
      "added_stars": 1436,
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
      "author": "majd",
      "repo": "ipatool",
      "avatar": "https://github.com/majd.png",
      "repo_link": "https://github.com/majd/ipatool",
      "desc": "Command-line tool that allows you to search for iOS, iPadOS, tvOS, visionOS, and macOS apps on the App Store, and download .ipa or macOS .pkg app packages.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 933,
      "added_stars": 1306,
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
      "forks": 1453,
      "added_stars": 759,
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
      "added_stars": 444,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1016,
      "added_stars": 1187,
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
      "author": "theagentrouter",
      "repo": "agent-router",
      "avatar": "https://github.com/theagentrouter.png",
      "repo_link": "https://github.com/theagentrouter/agent-router",
      "desc": "Manages Unified Access to Generative AI Services built on Envoy Gateway",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 373,
      "added_stars": 139,
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
      "author": "go-task",
      "repo": "task",
      "avatar": "https://github.com/go-task.png",
      "repo_link": "https://github.com/go-task/task",
      "desc": "A fast, cross-platform build tool inspired by Make, designed for modern workflows.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 907,
      "added_stars": 200,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 317,
      "added_stars": 642,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The task manager you actually own.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 685,
      "added_stars": 353,
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
      "author": "siderolabs",
      "repo": "talos",
      "avatar": "https://github.com/siderolabs.png",
      "repo_link": "https://github.com/siderolabs/talos",
      "desc": "Talos Linux is a modern Linux distribution built for Kubernetes.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 892,
      "added_stars": 243,
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
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 1Panel is a modern, open-source Linux server management panel and a lightweight AI management platform.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3346,
      "added_stars": 453,
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
      "author": "Tencent",
      "repo": "WeKnora",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/WeKnora",
      "desc": "Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3276,
      "added_stars": 3077,
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
      "author": "kopia",
      "repo": "kopia",
      "avatar": "https://github.com/kopia.png",
      "repo_link": "https://github.com/kopia/kopia",
      "desc": "Cross-platform backup tool for Windows, macOS & Linux with fast, incremental backups, client-side end-to-end encryption, compression and data deduplication. CLI and GUI included.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 727,
      "added_stars": 266,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2231,
      "added_stars": 644,
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
      "forks": 8648,
      "added_stars": 4730,
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
      "author": "github",
      "repo": "gh-aw",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/gh-aw",
      "desc": "GitHub Agentic Workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 540,
      "added_stars": 243,
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
      "author": "weave-os",
      "repo": "router",
      "avatar": "https://github.com/weave-os.png",
      "repo_link": "https://github.com/weave-os/router",
      "desc": "Model router for agentic systems. Routes every prompt to the right model in <50ms. Cut costs 40-70% with just an endpoint change.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 116,
      "added_stars": 3392,
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
      "author": "vllm-project",
      "repo": "semantic-router",
      "avatar": "https://github.com/vllm-project.png",
      "repo_link": "https://github.com/vllm-project/semantic-router",
      "desc": "A programmable Mixture-of-Models router for heterogeneous LLM inference",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 937,
      "added_stars": 637,
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
      "author": "restic",
      "repo": "restic",
      "avatar": "https://github.com/restic.png",
      "repo_link": "https://github.com/restic/restic",
      "desc": "Fast, secure, efficient backup program",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1873,
      "added_stars": 589,
      "builtBy": [
        {
          "username": "fd0",
          "href": "https://github.com/fd0",
          "avatar": "https://avatars.githubusercontent.com/u/123276"
        },
        {
          "username": "MichaelEischer",
          "href": "https://github.com/MichaelEischer",
          "avatar": "https://avatars.githubusercontent.com/u/9106997"
        },
        {
          "username": "rawtaz",
          "href": "https://github.com/rawtaz",
          "avatar": "https://avatars.githubusercontent.com/u/825204"
        },
        {
          "username": "greatroar",
          "href": "https://github.com/greatroar",
          "avatar": "https://avatars.githubusercontent.com/u/61184462"
        }
      ]
    },
    {
      "author": "anchore",
      "repo": "syft",
      "avatar": "https://github.com/anchore.png",
      "repo_link": "https://github.com/anchore/syft",
      "desc": "CLI tool and library for generating a Software Bill of Materials from container images and filesystems",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 954,
      "added_stars": 176,
      "builtBy": [
        {
          "username": "wagoodman",
          "href": "https://github.com/wagoodman",
          "avatar": "https://avatars.githubusercontent.com/u/590471"
        },
        {
          "username": "spiffcs",
          "href": "https://github.com/spiffcs",
          "avatar": "https://avatars.githubusercontent.com/u/32073428"
        },
        {
          "username": "kzantow",
          "href": "https://github.com/kzantow",
          "avatar": "https://avatars.githubusercontent.com/u/3009477"
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
      "forks": 291,
      "added_stars": 3635,
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
      "forks": 2852,
      "added_stars": 8745,
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
      "forks": 2573,
      "added_stars": 24025,
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
      "forks": 3392,
      "added_stars": 15895,
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
      "forks": 52932,
      "added_stars": 24869,
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
      "author": "youssofal",
      "repo": "MTPLX",
      "avatar": "https://github.com/youssofal.png",
      "repo_link": "https://github.com/youssofal/MTPLX",
      "desc": "3x faster speeds on MLX | Qwen 3.8 27B | Native MTP Speculative Decoding On Apple Silicon With No External Drafter.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 171,
      "added_stars": 1153,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3107,
      "added_stars": 5192,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 19089,
      "added_stars": 20878,
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
      "forks": 1876,
      "added_stars": 3106,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7921,
      "added_stars": 6429,
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
      "forks": 4064,
      "added_stars": 11530,
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
      "forks": 3506,
      "added_stars": 4031,
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
      "author": "Tencent",
      "repo": "AI-Infra-Guard",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/AI-Infra-Guard",
      "desc": "A full-stack AI Red Teaming platform securing AI ecosystems via Agent Scan, Skills Scan, MCP scan, AI Infra scan and LLM jailbreak evaluation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 584,
      "added_stars": 1796,
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
      "author": "sngyai",
      "repo": "Sequoia-X",
      "avatar": "https://github.com/sngyai.png",
      "repo_link": "https://github.com/sngyai/Sequoia-X",
      "desc": "A股自动选股系统 — 多种技术形态自动扫描，收盘后自动运行并推送飞书",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1468,
      "added_stars": 1910,
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
      "author": "semantica-agi",
      "repo": "semantica",
      "avatar": "https://github.com/semantica-agi.png",
      "repo_link": "https://github.com/semantica-agi/semantica",
      "desc": "Graph-Native Infrastructure for Context and Accountable AI Systems",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1433,
      "added_stars": 6477,
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
      "author": "titanwings",
      "repo": "distilly",
      "avatar": "https://github.com/titanwings.png",
      "repo_link": "https://github.com/titanwings/distilly",
      "desc": "Distilly — Distill how they think into reusable Skills for any Agent or Bot. Formerly Colleague Skill（原同事 Skill）.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2144,
      "added_stars": 3754,
      "builtBy": [
        {
          "username": "titanwings",
          "href": "https://github.com/titanwings",
          "avatar": "https://avatars.githubusercontent.com/u/85022018"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "baichou6320-cpu",
          "href": "https://github.com/baichou6320-cpu",
          "avatar": "https://avatars.githubusercontent.com/u/172188635"
        },
        {
          "username": "KOR-Believer",
          "href": "https://github.com/KOR-Believer",
          "avatar": "https://avatars.githubusercontent.com/u/8975134"
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
      "forks": 9609,
      "added_stars": 4901,
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
      "author": "NVIDIA-NeMo",
      "repo": "Switchyard",
      "avatar": "https://github.com/NVIDIA-NeMo.png",
      "repo_link": "https://github.com/NVIDIA-NeMo/Switchyard",
      "desc": "Switchyard lets LLM applications route traffic across models and providers while preserving native OpenAI and Anthropic API compatibility - enabling flexible model selection, benchmarking, and cost/performance optimization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 270,
      "added_stars": 1905,
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
      "author": "experientiallabs",
      "repo": "experiential",
      "avatar": "https://github.com/experientiallabs.png",
      "repo_link": "https://github.com/experientiallabs/experiential",
      "desc": "Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend better models, and train a specialized model you own.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 175,
      "added_stars": 4416,
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
      "author": "cactus-compute",
      "repo": "needle",
      "avatar": "https://github.com/cactus-compute.png",
      "repo_link": "https://github.com/cactus-compute/needle",
      "desc": "14MB foundation model for tiny devices; phones, wearables, smart home, and robots.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 709,
      "added_stars": 6220,
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
      "title": "What was your win this week??",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-5amk",
      "tags": "weeklyretro",
      "reactions": 33,
      "comments": 37,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "20 Agentic AI Terms Every Developer Should Know (Explained Simply)",
      "description": "Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...",
      "url": "https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii",
      "tags": "ai, agents, mcp, beginners",
      "reactions": 221,
      "comments": 115,
      "reading_time": 11,
      "author": "sylwia-lask"
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
    },
    {
      "title": "Bidirectional Writeback for Apache Iceberg via Google Sheets: Serverless Lakehouse Console",
      "description": "Turn Google Sheets into a Fully Interactive, Differential ACID Mutation Console for Apache Iceberg...",
      "url": "https://dev.to/gde/bidirectional-writeback-for-apache-iceberg-via-google-sheets-serverless-lakehouse-console-14ic",
      "tags": "googleworkspace, googlecloud, bigquery, apacheiceberg",
      "reactions": 7,
      "comments": 0,
      "reading_time": 26,
      "author": "tanaike"
    },
    {
      "title": "Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script",
      "description": "Turn Google Drive into an AI-Powered Lakehouse Vector Engine across Converted PDFs, Binary Images,...",
      "url": "https://dev.to/gde/serverless-multimodal-vector-search-on-apache-iceberg-via-google-apps-script-4fg",
      "tags": "googleworkspace, googlecloud, bigquery, apacheiceberg",
      "reactions": 7,
      "comments": 0,
      "reading_time": 22,
      "author": "tanaike"
    },
    {
      "title": "FastMCP Is Now MCPServer: Migrating a Python MCP Server to the MCP SDK 2.x",
      "description": "Step-by-step: moving a FastMCP server to the MCP Python SDK 2.x — what broke, what changed, what did not, and a redeploy of its Gemma 4 vLLM backend to a Cloud Run L4 GPU.",
      "url": "https://dev.to/gde/fastmcp-is-now-mcpserver-migrating-a-python-mcp-server-to-the-mcp-sdk-2x-2nhj",
      "tags": "mcp, python, googlecloud, vllm",
      "reactions": 13,
      "comments": 8,
      "reading_time": 12,
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
      "title": "Download Dimensional Drawings - Accessories",
      "url": "https://developer.apple.com/accessories/dimensional-drawings/",
      "score": 1,
      "comments": 0,
      "tags": [
        "design"
      ],
      "id": "fpoakb"
    },
    {
      "title": "Fable 5.1 Solves the \"Cyphral Distich\" (370 year old cipher)",
      "url": "https://www.vals.ai/blogs/fable-solves-cyphral-distich",
      "score": 0,
      "comments": 0,
      "tags": [
        "ai",
        "cryptography"
      ],
      "id": "avn6ij"
    },
    {
      "title": "Why is the x86 undefined instruction called ud2? Why 2?",
      "url": "https://devblogs.microsoft.com/oldnewthing/20260910-00/?p=112689",
      "score": 8,
      "comments": 0,
      "tags": [
        "assembly",
        "historical"
      ],
      "id": "zbb37v"
    },
    {
      "title": "Singeli: High-level interface for low-level programming",
      "url": "https://github.com/mlochbaum/Singeli",
      "score": 3,
      "comments": 0,
      "tags": [
        "apl",
        "compilers",
        "performance"
      ],
      "id": "jnutrb"
    },
    {
      "title": "The case against JPEG XL",
      "url": "https://giannirosato.com/blog/post/case-against-jxl",
      "score": 11,
      "comments": 2,
      "tags": [
        "compsci"
      ],
      "id": "e1lcnf"
    },
    {
      "title": "Purely Functional Operating Systems",
      "url": "https://eighty-twenty.org/2022/06/23/henderson-functional-operating-systems-1982",
      "score": 10,
      "comments": 0,
      "tags": [
        "osdev",
        "programming"
      ],
      "id": "jlmeib"
    },
    {
      "title": "Anecdotally, programmers dislike \"reduce\"",
      "url": "https://evanhahn.com/posts/2026-09-13-programmers-dislike-reduce/",
      "score": 24,
      "comments": 26,
      "tags": [
        "clojure",
        "programming"
      ],
      "id": "dhn991"
    },
    {
      "title": "Writing a Guix service from scratch, as a beginner",
      "url": "https://aloysberger.com/posts/writing-a-guix-service-from-scratch-as-a-beginner.html",
      "score": 13,
      "comments": 8,
      "tags": [
        "nix"
      ],
      "id": "f4arrs"
    },
    {
      "title": "Fixing an NZXT Signal 4K30 part 2: the green/pink video bug",
      "url": "https://www.downtowndougbrown.com/2026/09/fixing-an-nzxt-signal-4k30-part-2-the-green-pink-video-bug/",
      "score": 1,
      "comments": 0,
      "tags": [
        "debugging",
        "reversing",
        "vibecoding"
      ],
      "id": "z1oxbd"
    },
    {
      "title": "Sorry, Wrong Number: Debugging a Crash under Wine (2022)",
      "url": "https://blog.jchw.dev/wrong-number/",
      "score": 6,
      "comments": 0,
      "tags": [
        "debugging",
        "linux"
      ],
      "id": "sr1qmw"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "u1hcw9nx",
      "descendants": 316,
      "id": 49688695,
      "kids": [
        49692135,
        49689302,
        49689080,
        49689163,
        49689988,
        49692041,
        49689335,
        49692588,
        49689388,
        49689061,
        49689430,
        49689089,
        49689415,
        49692395,
        49690063,
        49692597,
        49690842,
        49689251,
        49689130,
        49689811,
        49692407,
        49689423,
        49691322,
        49690793,
        49689548,
        49690625,
        49690909,
        49691093,
        49692142,
        49691888,
        49689214,
        49690788,
        49690783,
        49690010,
        49691925,
        49690134,
        49691944,
        49691142,
        49690245,
        49690096,
        49689230,
        49689453,
        49690045,
        49689091,
        49692241,
        49691442,
        49689768,
        49689212,
        49689220,
        49691990,
        49689908,
        49692280,
        49689235,
        49690934,
        49690732,
        49692363,
        49691097,
        49690904,
        49691139,
        49689170,
        49689327,
        49692350,
        49692323,
        49689910,
        49691791,
        49692307,
        49690744,
        49690572,
        49691370,
        49691397
      ],
      "score": 763,
      "time": 1789333573,
      "title": "Fable 5.1 Solves the Cyphral Distich, a 370-year-old cipher",
      "type": "story",
      "url": "https://www.vals.ai/blogs/fable-solves-cyphral-distich"
    },
    {
      "by": "bryanrasmussen",
      "descendants": 0,
      "id": 49692765,
      "score": 5,
      "time": 1789367646,
      "title": "Of Gods and Languages: On \"When God Spoke Greek\"",
      "type": "story",
      "url": "https://lareviewofbooks.org/article/of-gods-and-languages-on-when-god-spoke-greek/"
    },
    {
      "by": "zdw",
      "descendants": 30,
      "id": 49638510,
      "kids": [
        49692846,
        49692403,
        49692837,
        49691261,
        49691077,
        49691372,
        49692240,
        49691844,
        49691084,
        49691130,
        49691079,
        49691212,
        49691829
      ],
      "score": 159,
      "time": 1789015472,
      "title": "Spaceships (Reverse Asteroid)",
      "type": "story",
      "url": "https://spaceships.treybastian.com/"
    },
    {
      "by": "Cider9986",
      "descendants": 91,
      "id": 49689048,
      "kids": [
        49690224,
        49690265,
        49690178,
        49690135,
        49690129,
        49691725,
        49690637,
        49690469,
        49691026,
        49692786,
        49690762,
        49690189,
        49689829
      ],
      "score": 200,
      "time": 1789336024,
      "title": "Registration without a phone number on Signal will use zero-knowledge proofs",
      "type": "story",
      "url": "https://community.signalusers.org/t/registration-without-a-phone-number/2222?page=10"
    },
    {
      "by": "contact9879",
      "descendants": 132,
      "id": 49690554,
      "kids": [
        49692494,
        49690741,
        49692311,
        49690834,
        49692252,
        49692685,
        49691256,
        49690980,
        49691354,
        49690856,
        49690698,
        49690859,
        49690751,
        49692570,
        49690789,
        49691022,
        49690819,
        49692283
      ],
      "score": 105,
      "time": 1789347757,
      "title": "The case against JPEG XL",
      "type": "story",
      "url": "https://giannirosato.com/blog/post/case-against-jxl/"
    },
    {
      "by": "herbertl",
      "descendants": 42,
      "id": 49690174,
      "kids": [
        49691668,
        49691494,
        49691945,
        49691216,
        49692478,
        49692089,
        49691450,
        49692717,
        49691846
      ],
      "score": 130,
      "time": 1789344681,
      "title": "Apple's Dimensional Drawings",
      "type": "story",
      "url": "https://developer.apple.com/accessories/dimensional-drawings/"
    },
    {
      "by": "knowablemag",
      "descendants": 3,
      "id": 49662246,
      "kids": [
        49691926,
        49692756
      ],
      "score": 35,
      "time": 1789148291,
      "title": "Rope, twine and thread: Invisible technologies of the Stone Age",
      "type": "story",
      "url": "https://knowablemagazine.org/content/article/society/2026/prehistory-lost-threads"
    },
    {
      "by": "rasengan0",
      "descendants": 10,
      "id": 49690678,
      "kids": [
        49691391,
        49691880,
        49691403
      ],
      "score": 46,
      "time": 1789348955,
      "title": "The Malicious Use of Artificial Intelligence",
      "type": "story",
      "url": "https://arxiv.org/abs/1802.07228"
    },
    {
      "by": "bookofjoe",
      "descendants": 201,
      "id": 49683953,
      "kids": [
        49684930,
        49689409,
        49692534,
        49692726,
        49684449,
        49687774,
        49684363,
        49684998,
        49684853,
        49685028,
        49685056,
        49690673,
        49691892,
        49691530,
        49684973,
        49692290,
        49688187,
        49684639,
        49688931,
        49688543,
        49684864,
        49685227,
        49684441,
        49692499,
        49683960,
        49685947,
        49687545,
        49692126,
        49687840,
        49684526,
        49684340
      ],
      "score": 384,
      "text": "<a href=\"https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260913134705&#x2F;https:&#x2F;&#x2F;www.theverge.com&#x2F;column&#x2F;994172&#x2F;your-car-is-selling-your-data\" rel=\"nofollow\">https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260913134705&#x2F;https:&#x2F;&#x2F;www.theve...</a><p><a href=\"https:&#x2F;&#x2F;archive.ph&#x2F;TWEVZ\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.ph&#x2F;TWEVZ</a>",
      "time": 1789307108,
      "title": "Data collected by cars and sold to third parties",
      "type": "story",
      "url": "https://www.theverge.com/column/994172/your-car-is-selling-your-data"
    },
    {
      "by": "andsoitis",
      "descendants": 28,
      "id": 49690279,
      "kids": [
        49691463,
        49691860,
        49691081,
        49692087,
        49692539,
        49690585,
        49691634,
        49691554,
        49691903,
        49691688,
        49692243
      ],
      "score": 56,
      "time": 1789345631,
      "title": "Writing a better reality: The case for optimistic sci-fi (2022)",
      "type": "story",
      "url": "https://honisoit.com/2022/03/writing-a-better-reality-the-case-for-optimistic-sci-fi/"
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
      "title": "🔁 Pendant un hackathon data... je trouve une opportunité de CDO dans ma propre entreprise 😹",
      "description": "❔Contexte   Le #HackAVP  - le premier hackathon dédié aux AVPs de l'OPT-NC - a été lancé...",
      "url": "https://dev.to/adriens/pendant-un-hackathon-data-je-trouve-une-opportunite-de-cdo-dans-ma-propre-entreprise-4bp9",
      "tags": "career, hackavp, hackathon, ai",
      "reactions": 0,
      "comments": 2,
      "reading_time": 1,
      "author": "adriens"
    },
    {
      "title": "I logged into 12 freelance platforms from India and counted what is actually open to us",
      "description": "Every thread about freelancing from India gets the same answers: sign up for Upwork, try Braintrust,...",
      "url": "https://dev.to/yashharkawat/i-logged-into-12-freelance-platforms-from-india-and-counted-what-is-actually-open-to-us-18e",
      "tags": "career, freelance, webdev, india",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "yashharkawat"
    },
    {
      "title": "Should You Use AI for Your Cover Letter? Where the Line Is",
      "description": "Almost every guide on this lands in the same place: \"AI is a starting point, not the finish line.\"...",
      "url": "https://dev.to/resuhive/should-you-use-ai-for-your-cover-letter-where-the-line-is-16pd",
      "tags": "career, jobsearch, writing, beginners",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "resuhive"
    },
    {
      "title": "Nobody Warns You the Data Engineering Interview Isn't About Data Engineering",
      "description": "I've sat on both sides of the interview table more times than I can count. Here's the thing nobody...",
      "url": "https://dev.to/rahmanfrr/nobody-warns-you-the-data-engineering-interview-isnt-about-data-engineering-16md",
      "tags": "dataengineering, interview, career, sql",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "rahmanfrr"
    },
    {
      "title": "Stop Eating Free Scope: The Change Log Habit That Saved My Freelance Hours",
      "description": "Scope creep rarely shows up as a formal change request. It shows up as a Slack ping at 4:47pm: \"Quick...",
      "url": "https://dev.to/scopepaid/stop-eating-free-scope-the-change-log-habit-that-saved-my-freelance-hours-1dfd",
      "tags": "freelancing, career, productivity, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "scopepaid"
    },
    {
      "title": "Why You Sit And Stare At The Deadline You Missed For Three Weeks",
      "description": "You know the feeling when a simple chore or a late message sits on your list for three weeks. You...",
      "url": "https://dev.to/lukatherdp/why-you-sit-and-stare-at-the-deadline-you-missed-for-three-weeks-2pbd",
      "tags": "mentalhealth, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 10,
      "author": "lukatherdp"
    },
    {
      "title": "The AI job market in 2026: who gets hired, what they earn, and which roles are fading",
      "description": "In September 2026 I pulled together what the major sources say about the AI labor market: LinkedIn,...",
      "url": "https://dev.to/ilinmaks/the-ai-job-market-in-2026-who-gets-hired-what-they-earn-and-which-roles-are-fading-3fk2",
      "tags": "ai, career, machinelearning, jobs",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "ilinmaks"
    },
    {
      "title": "Технический английский для security engineer: База о том как писать, говорить и проходить интервью",
      "description": "Preview   Hey, you'all   Не секрет, что у многих русскоязычных IT/security-специалистов (РФ,...",
      "url": "https://dev.to/ivan-piskunov/tiekhnichieskii-anghliiskii-dlia-security-engineer-baza-o-tom-kak-pisat-ghovorit-i-prokhodit-intierviu-3a58",
      "tags": "beginners, career, learning, security",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "ivan-piskunov"
    },
    {
      "title": "Which Claude Certification Should You Take? A Practical Roadmap to Choosing Your Path",
      "description": "After clearing all four Anthropic Claude certifications last month, I shared my score breakdown and...",
      "url": "https://dev.to/bluepanda/which-claude-certification-should-you-take-a-practical-roadmap-to-choosing-your-path-581l",
      "tags": "discuss, ai, career, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "bluepanda"
    },
    {
      "title": "Why AI Coding Agents Didn't Replace Us, But Changed What It Means to Be a Developer",
      "description": "We spent the last few years arguing over whether AI tools would take our jobs. Every week brought a...",
      "url": "https://dev.to/chamod_madhushan/why-ai-coding-agents-didnt-replace-us-but-changed-what-it-means-to-be-a-developer-5c0a",
      "tags": "ai, programming, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "chamod_madhushan"
    }
  ]
}
```

