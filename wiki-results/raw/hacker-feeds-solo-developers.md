# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-12 06:34:41 UTC

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
      "author": "humanlayer",
      "repo": "skills",
      "avatar": "https://github.com/humanlayer.png",
      "repo_link": "https://github.com/humanlayer/skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 113,
      "added_stars": 1637,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1605,
      "added_stars": 1810,
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
      "forks": 4483,
      "added_stars": 5100,
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
      "forks": 3633,
      "added_stars": 804,
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
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8536,
      "added_stars": 1726,
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
      "author": "THU-MAIC",
      "repo": "OpenMAIC",
      "avatar": "https://github.com/THU-MAIC.png",
      "repo_link": "https://github.com/THU-MAIC/OpenMAIC",
      "desc": "Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5710,
      "added_stars": 4509,
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
      "author": "every-app",
      "repo": "open-seo",
      "avatar": "https://github.com/every-app.png",
      "repo_link": "https://github.com/every-app/open-seo",
      "desc": "Open source alternative to Semrush and Ahrefs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2330,
      "added_stars": 1507,
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
      "author": "anomalyco",
      "repo": "opencode",
      "avatar": "https://github.com/anomalyco.png",
      "repo_link": "https://github.com/anomalyco/opencode",
      "desc": "The open source coding agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 27059,
      "added_stars": 3074,
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
      "author": "awslabs",
      "repo": "aidlc-workflows",
      "avatar": "https://github.com/awslabs.png",
      "repo_link": "https://github.com/awslabs/aidlc-workflows",
      "desc": "AI-Driven Life Cycle (AI-DLC) adaptive workflow steering rules for AI coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 821,
      "added_stars": 217,
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
      "author": "OpenHands",
      "repo": "OpenHands",
      "avatar": "https://github.com/OpenHands.png",
      "repo_link": "https://github.com/OpenHands/OpenHands",
      "desc": "🙌 OpenHands: AI-Driven Development",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 11469,
      "added_stars": 1337,
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
      "forks": 290,
      "added_stars": 1170,
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
      "author": "advaitpaliwal",
      "repo": "feynman",
      "avatar": "https://github.com/advaitpaliwal.png",
      "repo_link": "https://github.com/advaitpaliwal/feynman",
      "desc": "The open source AI research agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1067,
      "added_stars": 598,
      "builtBy": [
        {
          "username": "advaitpaliwal",
          "href": "https://github.com/advaitpaliwal",
          "avatar": "https://avatars.githubusercontent.com/u/66044327"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shkao",
          "href": "https://github.com/shkao",
          "avatar": "https://avatars.githubusercontent.com/u/4758311"
        },
        {
          "username": "randomm",
          "href": "https://github.com/randomm",
          "avatar": "https://avatars.githubusercontent.com/u/259547"
        },
        {
          "username": "Dunya-8a",
          "href": "https://github.com/Dunya-8a",
          "avatar": "https://avatars.githubusercontent.com/u/53619378"
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
      "added_stars": 1054,
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
      "author": "BraveOPotato",
      "repo": "FckSignups",
      "avatar": "https://github.com/BraveOPotato.png",
      "repo_link": "https://github.com/BraveOPotato/FckSignups",
      "desc": "A list of tools that are open-source, in-browser, and require no-signups!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 244,
      "added_stars": 1596,
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
      "author": "magnitudedev",
      "repo": "magnitude",
      "avatar": "https://github.com/magnitudedev.png",
      "repo_link": "https://github.com/magnitudedev/magnitude",
      "desc": "Open source local inference engine. It runs models on the hardware you already have, whether that's a Mac, an NVIDIA or AMD GPU, or just a CPU. Plug it into Pi, OpenCode, Hermes, OpenClaw, Codex, Claude Code, Oh My Pi, and Cline.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 325,
      "added_stars": 2096,
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
      "author": "pascalorg",
      "repo": "editor",
      "avatar": "https://github.com/pascalorg.png",
      "repo_link": "https://github.com/pascalorg/editor",
      "desc": "Open-source 3D architectural editor with a local CLI, MCP tools, and practical workflows for humans and AI agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2949,
      "added_stars": 1592,
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
      "author": "AdventDevInc",
      "repo": "kudu",
      "avatar": "https://github.com/AdventDevInc.png",
      "repo_link": "https://github.com/AdventDevInc/kudu",
      "desc": "Free Windows, Mac and Linux cleaner, scanner, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 274,
      "added_stars": 980,
      "builtBy": [
        {
          "username": "dbfx",
          "href": "https://github.com/dbfx",
          "avatar": "https://avatars.githubusercontent.com/u/182394"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Never-lab",
          "href": "https://github.com/Never-lab",
          "avatar": "https://avatars.githubusercontent.com/u/82171600"
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
      "forks": 96,
      "added_stars": 306,
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
    },
    {
      "author": "aipoch",
      "repo": "open-science",
      "avatar": "https://github.com/aipoch.png",
      "repo_link": "https://github.com/aipoch/open-science",
      "desc": "AIPOCH Open-Science is an open-source, local-first, model-agnostic AI research workbench for macOS, Windows, and Linux, with scientific agents, Python/R notebooks, data connectors, and reproducible provenance.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 265,
      "added_stars": 790,
      "builtBy": [
        {
          "username": "ewen-poch",
          "href": "https://github.com/ewen-poch",
          "avatar": "https://avatars.githubusercontent.com/u/301582936"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "wen2zhou",
          "href": "https://github.com/wen2zhou",
          "avatar": "https://avatars.githubusercontent.com/u/46589728"
        },
        {
          "username": "roxi3906",
          "href": "https://github.com/roxi3906",
          "avatar": "https://avatars.githubusercontent.com/u/43273536"
        },
        {
          "username": "daanveer-tech",
          "href": "https://github.com/daanveer-tech",
          "avatar": "https://avatars.githubusercontent.com/u/268498626"
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
      "forks": 928,
      "added_stars": 1295,
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
      "forks": 1452,
      "added_stars": 762,
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
      "forks": 1481,
      "added_stars": 418,
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
      "forks": 1008,
      "added_stars": 1168,
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
      "author": "google",
      "repo": "osv-scanner",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/osv-scanner",
      "desc": "Vulnerability scanner written in Go which uses the data provided by https://osv.dev",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 788,
      "added_stars": 216,
      "builtBy": [
        {
          "username": "another-rex",
          "href": "https://github.com/another-rex",
          "avatar": "https://avatars.githubusercontent.com/u/106129829"
        },
        {
          "username": "G-Rath",
          "href": "https://github.com/G-Rath",
          "avatar": "https://avatars.githubusercontent.com/u/3151613"
        },
        {
          "username": "renovate-bot",
          "href": "https://github.com/renovate-bot",
          "avatar": "https://avatars.githubusercontent.com/u/25180681"
        },
        {
          "username": "osv-robot",
          "href": "https://github.com/osv-robot",
          "avatar": "https://avatars.githubusercontent.com/u/80022306"
        },
        {
          "username": "cuixq",
          "href": "https://github.com/cuixq",
          "avatar": "https://avatars.githubusercontent.com/u/72771658"
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
      "forks": 435,
      "added_stars": 541,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 179,
      "added_stars": 1879,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 316,
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
      "author": "theagentrouter",
      "repo": "agent-router",
      "avatar": "https://github.com/theagentrouter.png",
      "repo_link": "https://github.com/theagentrouter/agent-router",
      "desc": "Manages Unified Access to Generative AI Services built on Envoy Gateway",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 373,
      "added_stars": 134,
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
      "forks": 906,
      "added_stars": 198,
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
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 1Panel is a modern, open-source Linux server management panel and a lightweight AI management platform.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3345,
      "added_stars": 465,
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
      "forks": 2232,
      "added_stars": 685,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The task manager you actually own.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 683,
      "added_stars": 348,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 17820,
      "added_stars": 3008,
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
      "author": "siderolabs",
      "repo": "talos",
      "avatar": "https://github.com/siderolabs.png",
      "repo_link": "https://github.com/siderolabs/talos",
      "desc": "Talos Linux is a modern Linux distribution built for Kubernetes.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 891,
      "added_stars": 240,
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
      "author": "kopia",
      "repo": "kopia",
      "avatar": "https://github.com/kopia.png",
      "repo_link": "https://github.com/kopia/kopia",
      "desc": "Cross-platform backup tool for Windows, macOS & Linux with fast, incremental backups, client-side end-to-end encryption, compression and data deduplication. CLI and GUI included.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 727,
      "added_stars": 267,
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API 一站式开源中转服务，让 Claude、Openai 、Gemini、Grok订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8618,
      "added_stars": 4879,
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
      "author": "putyy",
      "repo": "res-downloader",
      "avatar": "https://github.com/putyy.png",
      "repo_link": "https://github.com/putyy/res-downloader",
      "desc": "视频号、小程序、抖音、快手、小红书、直播流、m3u8、酷狗、QQ音乐等常见网络资源下载!",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2447,
      "added_stars": 771,
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
      "author": "weave-os",
      "repo": "router",
      "avatar": "https://github.com/weave-os.png",
      "repo_link": "https://github.com/weave-os/router",
      "desc": "Model router for agentic systems. Routes every prompt to the right model in <50ms. Cut costs 40-70% with just an endpoint change.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 118,
      "added_stars": 3351,
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
      "forks": 936,
      "added_stars": 608,
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
      "author": "anthropics",
      "repo": "claude-plugins-community",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-community",
      "desc": "Community plugin marketplace for Claude Cowork and Claude Code. Read-only mirror — submit plugins at clau.de/plugin-directory-submission.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 284,
      "added_stars": 3515,
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
      "forks": 2813,
      "added_stars": 8596,
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
      "author": "semantica-agi",
      "repo": "semantica",
      "avatar": "https://github.com/semantica-agi.png",
      "repo_link": "https://github.com/semantica-agi/semantica",
      "desc": "Graph-Native Infrastructure for Context and Accountable AI Systems",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1421,
      "added_stars": 8132,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2785,
      "added_stars": 12736,
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
      "author": "NVIDIA-NeMo",
      "repo": "Switchyard",
      "avatar": "https://github.com/NVIDIA-NeMo.png",
      "repo_link": "https://github.com/NVIDIA-NeMo/Switchyard",
      "desc": "Switchyard lets LLM applications route traffic across models and providers while preserving native OpenAI and Anthropic API compatibility - enabling flexible model selection, benchmarking, and cost/performance optimization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 262,
      "added_stars": 2657,
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2404,
      "added_stars": 20983,
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
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 52864,
      "added_stars": 24522,
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
      "author": "cactus-compute",
      "repo": "needle",
      "avatar": "https://github.com/cactus-compute.png",
      "repo_link": "https://github.com/cactus-compute/needle",
      "desc": "14MB foundation model for tiny devices; phones, wearables, smart home, and robots.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 694,
      "added_stars": 7243,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3487,
      "added_stars": 4011,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 18942,
      "added_stars": 20604,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3090,
      "added_stars": 5052,
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
      "author": "jundot",
      "repo": "omlx",
      "avatar": "https://github.com/jundot.png",
      "repo_link": "https://github.com/jundot/omlx",
      "desc": "LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1859,
      "added_stars": 3116,
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
      "author": "3b1b",
      "repo": "manim",
      "avatar": "https://github.com/3b1b.png",
      "repo_link": "https://github.com/3b1b/manim",
      "desc": "Animation engine for explanatory math videos",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7701,
      "added_stars": 3826,
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
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4033,
      "added_stars": 11428,
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
      "author": "Tencent",
      "repo": "AI-Infra-Guard",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/AI-Infra-Guard",
      "desc": "A full-stack AI Red Teaming platform securing AI ecosystems via Agent Scan, Skills Scan, MCP scan, AI Infra scan and LLM jailbreak evaluation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 584,
      "added_stars": 1795,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7887,
      "added_stars": 6335,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Local UI to run and train LLMs and diffusion models. Supports GGUF, MLX, Qwen3.8, DeepSeek-V4, MiniMax-H3, Gemma 4, FLUX and more.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6928,
      "added_stars": 6268,
      "builtBy": [
        {
          "username": "danielhanchen",
          "href": "https://github.com/danielhanchen",
          "avatar": "https://avatars.githubusercontent.com/u/23090290"
        },
        {
          "username": "shimmyshimmer",
          "href": "https://github.com/shimmyshimmer",
          "avatar": "https://avatars.githubusercontent.com/u/107991372"
        },
        {
          "username": "wasimysaid",
          "href": "https://github.com/wasimysaid",
          "avatar": "https://avatars.githubusercontent.com/u/112766706"
        },
        {
          "username": "Imagineer99",
          "href": "https://github.com/Imagineer99",
          "avatar": "https://avatars.githubusercontent.com/u/130007945"
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
      "forks": 9584,
      "added_stars": 4787,
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
      "author": "blader",
      "repo": "humanizer",
      "avatar": "https://github.com/blader.png",
      "repo_link": "https://github.com/blader/humanizer",
      "desc": "Agent skill that removes signs of AI-generated writing from text",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3837,
      "added_stars": 12064,
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
      "author": "sngyai",
      "repo": "Sequoia-X",
      "avatar": "https://github.com/sngyai.png",
      "repo_link": "https://github.com/sngyai/Sequoia-X",
      "desc": "A股自动选股系统 — 多种技术形态自动扫描，收盘后自动运行并推送飞书",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1450,
      "added_stars": 1849,
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
      "author": "whiteguo233",
      "repo": "OpenBiliClaw",
      "avatar": "https://github.com/whiteguo233.png",
      "repo_link": "https://github.com/whiteguo233/OpenBiliClaw",
      "desc": "本地私有、开源的自进化跨平台 AI 内容发现 Agent：先理解你，再主动从 B站、小红书、抖音、YouTube、X、知乎、Reddit、微博等平台与开放 Web 寻找内容。（支持 deepseek harness 插件） | Local-first open-source cross-platform AI content discovery agent: understands you, then proactively finds content across Bilibili, Xiaohongshu, Douyin, YouTube, X, Zhihu, Reddit, Weibo and the open web.（support deepseek harness plugin）",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 169,
      "added_stars": 1626,
      "builtBy": [
        {
          "username": "whiteguo233",
          "href": "https://github.com/whiteguo233",
          "avatar": "https://avatars.githubusercontent.com/u/3350171"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "M1k0t0",
          "href": "https://github.com/M1k0t0",
          "avatar": "https://avatars.githubusercontent.com/u/58372301"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
        },
        {
          "username": "DongLanQwQ0",
          "href": "https://github.com/DongLanQwQ0",
          "avatar": "https://avatars.githubusercontent.com/u/296345575"
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
      "reactions": 29,
      "comments": 29,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "FastMCP Is Now MCPServer: Migrating a Python MCP Server to the MCP SDK 2.x",
      "description": "Step-by-step: moving a FastMCP server to the MCP Python SDK 2.x — what broke, what changed, what did not, and a redeploy of its Gemma 4 vLLM backend to a Cloud Run L4 GPU.",
      "url": "https://dev.to/gde/fastmcp-is-now-mcpserver-migrating-a-python-mcp-server-to-the-mcp-sdk-2x-2nhj",
      "tags": "mcp, python, googlecloud, vllm",
      "reactions": 9,
      "comments": 3,
      "reading_time": 12,
      "author": "xbill"
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
      "title": "DEV Weekend Challenge: Dog Days Edition Winner Announcement Delayed",
      "description": "Hey all, we have a quick update for everyone who participated in the DEV Weekend Challenge: Dog Days...",
      "url": "https://dev.to/devteam/dev-weekend-challenge-dog-days-edition-winner-announcement-delayed-36f0",
      "tags": "devchallenge, weekendchallenge",
      "reactions": 7,
      "comments": 6,
      "reading_time": 1,
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
      "title": "2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code",
      "description": "Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.",
      "url": "https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3",
      "tags": "mcp, gemma, googlecloud, claudecode",
      "reactions": 7,
      "comments": 1,
      "reading_time": 13,
      "author": "xbill"
    },
    {
      "title": "Interactive AI Eval Dashboards with Data Studio",
      "description": "Welcome to the final entry of our series about designing, analyzing and visualizing AI evals! As with...",
      "url": "https://dev.to/googleai/interactive-ai-eval-dashboards-with-data-studio-1kl9",
      "tags": "ai, datascience, productivity, llm",
      "reactions": 9,
      "comments": 2,
      "reading_time": 11,
      "author": "glasnt"
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
      "title": "Pandas Should Go Extinct",
      "url": "https://eddie.codes/posts/pandas-should-go-extinct/",
      "score": 3,
      "comments": 0,
      "tags": [
        "databases",
        "python"
      ],
      "id": "imdwmj"
    },
    {
      "title": "OpenAI agents carried out an undisclosed attack on RubyGems",
      "url": "https://www.rubyhack.ai/",
      "score": 50,
      "comments": 8,
      "tags": [
        "ruby",
        "security",
        "vibecoding"
      ],
      "id": "wajtsa"
    },
    {
      "title": "Tutorial for Septabee, a free DAW in the making for over 20,000 hours",
      "url": "https://www.youtube.com/watch?v=lW8Z98pXuSE",
      "score": 6,
      "comments": 1,
      "tags": [
        "art",
        "release",
        "video"
      ],
      "id": "esgot3"
    },
    {
      "title": "A list of macOS defaults commands with demos",
      "url": "https://macos-defaults.com/",
      "score": 6,
      "comments": 0,
      "tags": [
        "mac"
      ],
      "id": "n54ybt"
    },
    {
      "title": "Cache made consistent (2022)",
      "url": "https://engineering.fb.com/2022/06/08/core-infra/cache-made-consistent/",
      "score": 1,
      "comments": 0,
      "tags": [
        "web"
      ],
      "id": "lyqeor"
    },
    {
      "title": "A Severe Misalignment of AI in Mathematics",
      "url": "https://mathandai.org/",
      "score": 22,
      "comments": 1,
      "tags": [
        "math",
        "vibecoding"
      ],
      "id": "oossfd"
    },
    {
      "title": "A Severe Misalignment of AI in Mathematics",
      "url": "https://terrytao.wordpress.com/2026/09/11/a-severe-misalignment-of-ai-in-mathematics/",
      "score": 50,
      "comments": 7,
      "tags": [
        "math",
        "vibecoding"
      ],
      "id": "xsbz3l"
    },
    {
      "title": "Retrospectively Reverse-Engineering Apple's Neural Engine",
      "url": "https://eiln.github.io/posts/ane.html",
      "score": 4,
      "comments": 0,
      "tags": [
        "ai",
        "hardware",
        "reversing"
      ],
      "id": "mzgtjg"
    },
    {
      "title": "Measuring the sloppiness of code",
      "url": "https://earendil.com/posts/measuring-code-sloppiness/",
      "score": 16,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "wxc7t7"
    },
    {
      "title": "What are you doing this weekend?",
      "url": "",
      "score": 14,
      "comments": 26,
      "tags": [
        "ask",
        "programming"
      ],
      "id": "vc0brm"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "1e1a",
      "descendants": 145,
      "id": 49668386,
      "kids": [
        49669515,
        49669031,
        49669520,
        49669066,
        49669234,
        49668387,
        49669269,
        49668728,
        49668700,
        49669063,
        49668873,
        49669124,
        49669239,
        49668491,
        49668998,
        49668646,
        49668639,
        49669293,
        49669495,
        49668780,
        49669485,
        49668638,
        49669141,
        49668876,
        49668901,
        49668982,
        49668612,
        49669301,
        49668690,
        49669291,
        49668710,
        49669174,
        49669016,
        49668928,
        49668771,
        49668454,
        49669043,
        49668724,
        49668951,
        49668694,
        49668569
      ],
      "score": 287,
      "time": 1789182860,
      "title": "google.com/goto: Google's anti-scraping update",
      "type": "story",
      "url": "https://www.autom.dev/blog/google-search-goto-links"
    },
    {
      "by": "rvz",
      "descendants": 30,
      "id": 49668706,
      "kids": [
        49669169,
        49669035,
        49668979,
        49669104,
        49669231,
        49669178,
        49669244,
        49669263
      ],
      "score": 73,
      "time": 1789186183,
      "title": "Navier-Stokes Announcement",
      "type": "story",
      "url": "https://www.claymath.org/news/navier-stokes-announcement/"
    },
    {
      "by": "meredydd",
      "descendants": 816,
      "id": 49662371,
      "kids": [
        49669519,
        49664047,
        49667202,
        49663236,
        49663727,
        49668051,
        49664287,
        49665942,
        49663164,
        49663359,
        49665453,
        49664255,
        49664903,
        49669175,
        49663559,
        49663441,
        49663561,
        49663753,
        49669457,
        49663167,
        49663450,
        49662770,
        49668014,
        49664612,
        49664424,
        49663339,
        49668615,
        49665801,
        49667542,
        49663632,
        49668261,
        49666170,
        49668321,
        49663214,
        49668300,
        49665646,
        49663342,
        49663386,
        49663606,
        49664567,
        49663388,
        49665350,
        49664019,
        49667341,
        49665261,
        49664390,
        49668088,
        49663837,
        49663613,
        49667114,
        49666032,
        49663515,
        49664275,
        49664228,
        49666050,
        49664572,
        49663522,
        49667379,
        49663592,
        49665484,
        49664810,
        49663374,
        49664813,
        49665673,
        49664850,
        49664446,
        49663491,
        49663595,
        49665517,
        49667179,
        49665281,
        49663392,
        49663366,
        49665883,
        49664070,
        49664237,
        49663447,
        49663541,
        49663871,
        49664804,
        49664859,
        49664635,
        49663379,
        49665645,
        49667074,
        49663548,
        49664861,
        49664812,
        49663882,
        49664123,
        49663865,
        49665900,
        49666626,
        49667000,
        49663183,
        49663229,
        49664173,
        49665212,
        49665922,
        49669459,
        49664998,
        49663217,
        49663512,
        49664645,
        49664283,
        49665971,
        49666788,
        49666104,
        49663502,
        49665180,
        49663746,
        49664893,
        49663227,
        49665290,
        49664583,
        49663551,
        49663272,
        49663781,
        49663696,
        49663589,
        49667477,
        49663315,
        49666339,
        49663736,
        49665911,
        49664005,
        49664175,
        49662372,
        49667567,
        49668102,
        49664334,
        49667641,
        49666360,
        49664375,
        49667535,
        49663699,
        49664269,
        49666899,
        49666637,
        49666365,
        49666276,
        49665772,
        49664585,
        49666631,
        49665036,
        49664649,
        49665750,
        49663651,
        49663478,
        49668899,
        49666297,
        49663982,
        49664673,
        49665191,
        49663346,
        49665643,
        49666288,
        49663501,
        49663263,
        49664057,
        49664056,
        49666218,
        49664144,
        49663514,
        49667528,
        49664839,
        49664831,
        49667694,
        49663536,
        49664099,
        49663350,
        49663831,
        49664012,
        49663130
      ],
      "score": 817,
      "text": "<a href=\"https:&#x2F;&#x2F;terrytao.wordpress.com&#x2F;2026&#x2F;09&#x2F;11&#x2F;a-severe-misalignment-of-ai-in-mathematics&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;terrytao.wordpress.com&#x2F;2026&#x2F;09&#x2F;11&#x2F;a-severe-misalignm...</a><p><a href=\"https:&#x2F;&#x2F;www.economist.com&#x2F;science-and-technology&#x2F;2026&#x2F;09&#x2F;11&#x2F;top-mathematicians-are-outraged-by-openais-methods\" rel=\"nofollow\">https:&#x2F;&#x2F;www.economist.com&#x2F;science-and-technology&#x2F;2026&#x2F;09&#x2F;11&#x2F;...</a>, <a href=\"https:&#x2F;&#x2F;unwall.app&#x2F;www.economist.com&#x2F;science-and-technology&#x2F;2026&#x2F;09&#x2F;11&#x2F;top-mathematicians-are-outraged-by-openais-methods\" rel=\"nofollow\">https:&#x2F;&#x2F;unwall.app&#x2F;www.economist.com&#x2F;science-and-technology&#x2F;...</a>",
      "time": 1789148712,
      "title": "A misalignment of AI in mathematics",
      "type": "story",
      "url": "https://mathandai.org/"
    },
    {
      "by": "cstadler1869",
      "descendants": 5,
      "id": 49668777,
      "kids": [
        49669511,
        49668778,
        49668881,
        49669204
      ],
      "score": 33,
      "time": 1789186792,
      "title": "Usenet rewind archive search engine",
      "type": "story",
      "url": "https://www.usenet-rewind.com/"
    },
    {
      "by": "nickabe",
      "descendants": 228,
      "id": 49662990,
      "kids": [
        49666505,
        49669506,
        49665213,
        49669510,
        49669166,
        49669229,
        49665512,
        49665169,
        49665835,
        49666015,
        49665117,
        49666214,
        49665204,
        49668764,
        49668947,
        49666539,
        49665278,
        49666545,
        49667529,
        49668155,
        49666712,
        49666711,
        49665532,
        49669237,
        49666513,
        49665757,
        49667522,
        49665327,
        49667632,
        49667532,
        49667280,
        49666926,
        49665330,
        49665037,
        49665663,
        49668594,
        49668933,
        49665790,
        49666052,
        49667882
      ],
      "score": 439,
      "time": 1789151095,
      "title": "I spent $220 on Google app ads and 60% of the installs were robots",
      "type": "story",
      "url": "https://dayzlegame.com/blog/google-ads-bot-farm/"
    },
    {
      "by": "bookofjoe",
      "descendants": 2,
      "id": 49624456,
      "kids": [
        49668561
      ],
      "score": 41,
      "time": 1788951670,
      "title": "Great Lakes sturgeon may be 400 years old:Scientists rethinking how to save them",
      "type": "story",
      "url": "https://www.cbc.ca/news/canada/ontario-great-lakes-sturgeon-lifespan-study-9.7329250"
    },
    {
      "by": "wcrichton",
      "descendants": 50,
      "id": 49626718,
      "kids": [
        49669486,
        49667176,
        49666689,
        49668592,
        49667413,
        49666109,
        49669007,
        49668865,
        49668221,
        49632880,
        49667872,
        49666060,
        49666107,
        49665634,
        49666585,
        49665744,
        49669015,
        49666827,
        49665808,
        49666355,
        49667008,
        49666158,
        49666037,
        49667566
      ],
      "score": 228,
      "time": 1788962390,
      "title": "A Design Space Exploration of Async/Await",
      "type": "story",
      "url": "https://cel.cs.brown.edu/blog/design-space-async-await/"
    },
    {
      "by": "mooreds",
      "descendants": 2,
      "id": 49643011,
      "kids": [
        49669032,
        49668793,
        49669323
      ],
      "score": 19,
      "time": 1789045166,
      "title": "Designing for Dual Screen and Foldable Devices with CSS (2023)",
      "type": "story",
      "url": "https://blog.stephaniestimac.com/posts/2023/05/design-foldable-devices/"
    },
    {
      "by": "chao-",
      "descendants": 331,
      "id": 49666735,
      "kids": [
        49667895,
        49666996,
        49667094,
        49667300,
        49669472,
        49667004,
        49667143,
        49667303,
        49667154,
        49667089,
        49667285,
        49669402,
        49667109,
        49668229,
        49667129,
        49667128,
        49667052,
        49669085,
        49667185,
        49667344,
        49667260,
        49667644,
        49667502,
        49668148,
        49668829,
        49667222,
        49667339,
        49667144,
        49669165,
        49667371,
        49667352,
        49667267,
        49667106,
        49667354,
        49667973,
        49667675,
        49667451,
        49667126,
        49666830,
        49668657,
        49667703,
        49668863,
        49667423,
        49667276,
        49667629,
        49667213,
        49667806,
        49667192,
        49667418,
        49667271,
        49667116,
        49667389,
        49667345,
        49667791,
        49668530,
        49667077,
        49667668,
        49667239,
        49667471,
        49668943,
        49667153,
        49667405,
        49667186,
        49667470,
        49668338,
        49667440,
        49667194,
        49667626,
        49667417,
        49667146,
        49667088,
        49667018,
        49667667,
        49667591,
        49668878,
        49667137,
        49667021,
        49667940,
        49667311,
        49668683,
        49668030,
        49667255,
        49667099
      ],
      "score": 580,
      "text": "<a href=\"https:&#x2F;&#x2F;simonwillison.net&#x2F;2026&#x2F;Sep&#x2F;12&#x2F;openai-agents-rubygems&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;simonwillison.net&#x2F;2026&#x2F;Sep&#x2F;12&#x2F;openai-agents-rubygems...</a>",
      "time": 1789168662,
      "title": "OpenAI agents carried out an undisclosed attack on RubyGems",
      "type": "story",
      "url": "https://www.rubyhack.ai/"
    },
    {
      "by": "vesterde",
      "descendants": 147,
      "id": 49649789,
      "kids": [
        49667346,
        49668579,
        49651911,
        49663059,
        49667922,
        49666177,
        49667851,
        49664551,
        49663414,
        49664830,
        49651717,
        49662484,
        49665475,
        49650348,
        49651942,
        49651765,
        49662470,
        49651881,
        49651183,
        49653471,
        49662578,
        49664082,
        49651770,
        49667754,
        49650744,
        49650754,
        49651983,
        49662588,
        49650639,
        49650987,
        49652736,
        49651978,
        49665440,
        49652012,
        49651483,
        49663216,
        49669284,
        49663044,
        49651622,
        49650700,
        49665895,
        49649790,
        49651922
      ],
      "score": 196,
      "text": "When I was about 11 years old, my best friend and I were playing during recess at school, and I was carrying him around on my back, presumably pretending to be a multipart attack robot. All of a sudden, my heart started hurting, and I collapsed to my knees, and the robot was no more. Every time I inhaled, it would feel like a spike was being driven into my heart, and my breathing got completely shallow. I was sure I was done for, when all of a sudden, after an exhale, it disappeared.<p>It wasn&#x27;t until I was in my twenties that I learned this was called Precordial catch syndrome and it happens to most everyone. Every friend I&#x27;ve told about it was surprised, and also most knew the feeling.<p>I collected a growing list of strange things bodies do ever since. And now finally I made it into a little page for others to see:<p><a href=\"https:&#x2F;&#x2F;vester.si&#x2F;bodily-oddities&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;vester.si&#x2F;bodily-oddities&#x2F;</a><p>It includes a form to tell me about new things, if you think they belong on the page. Feedback welcome!",
      "time": 1789072391,
      "title": "Show HN: Bodily Oddities",
      "type": "story",
      "url": "https://vester.si/bodily-oddities/"
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
      "title": "GCC 13.5 released with 265+ bug fixes",
      "url": "https://www.phoronix.com/news/GCC-13.5-Released",
      "permalink": "https://www.reddit.com/r/programming/comments/1wdiygn/gcc_135_released_with_265_bug_fixes/",
      "author": "/u/Fcking_Chuck",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Fcking_Chuck [link] &#32; [comments]",
      "published": "2026-09-11T15:09:38+00:00"
    },
    {
      "title": "Rune is now open source",
      "url": "https://rune.build/blog/rune-is-now-open-source",
      "permalink": "https://www.reddit.com/r/programming/comments/1wdjvd3/rune_is_now_open_source/",
      "author": "/u/ernestrc",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/ernestrc [link] &#32; [comments]",
      "published": "2026-09-11T15:43:18+00:00"
    },
    {
      "title": "Your Compiler Can Undo Your Security Checks",
      "url": "https://davidbombal.com/your-compiler-can-undo-your-security-checks/",
      "permalink": "https://www.reddit.com/r/programming/comments/1wdwqje/your_compiler_can_undo_your_security_checks/",
      "author": "/u/esiy0676",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/esiy0676 [link] &#32; [comments]",
      "published": "2026-09-11T23:49:30+00:00"
    },
    {
      "title": "Commander Keen's Adaptive Tile Refresh",
      "url": "https://fabiensanglard.net/ega/index.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1wd9hp8/commander_keens_adaptive_tile_refresh/",
      "author": "/u/lelanthran",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/lelanthran [link] &#32; [comments]",
      "published": "2026-09-11T07:42:32+00:00"
    },
    {
      "title": "Why I Don’t Publish Technical Articles Anymore",
      "url": "https://galratner.substack.com/p/why-i-dont-publish-technical-articles",
      "permalink": "https://www.reddit.com/r/programming/comments/1wdjn6m/why_i_dont_publish_technical_articles_anymore/",
      "author": "/u/galratner",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/galratner [link] &#32; [comments]",
      "published": "2026-09-11T15:34:54+00:00"
    },
    {
      "title": "EBPF + MicroVM",
      "url": "https://www.abhid.me/writings/watching-untrusted-code-inside-a-microvm",
      "permalink": "https://www.reddit.com/r/programming/comments/1wdqhym/ebpf_microvm/",
      "author": "/u/Tight_Alps5461",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Tight_Alps5461 [link] &#32; [comments]",
      "published": "2026-09-11T19:40:37+00:00"
    },
    {
      "title": "Inside Claude's Android app: Finding the Internal Settings",
      "url": "https://nima-ahmadi.github.io/posts/claude-android-internal-settings/",
      "permalink": "https://www.reddit.com/r/programming/comments/1wdklfz/inside_claudes_android_app_finding_the_internal/",
      "author": "/u/InsertFunnyUser-name",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/InsertFunnyUser-name [link] &#32; [comments]",
      "published": "2026-09-11T16:09:55+00:00"
    },
    {
      "title": "EU Cyber Resilience Act reporting obligations started today. Is your company even thinking about it?",
      "url": "https://youtu.be/IQkzg7quc58",
      "permalink": "https://www.reddit.com/r/programming/comments/1wds2fy/eu_cyber_resilience_act_reporting_obligations/",
      "author": "/u/Maria_3464",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "As of today, a manufacturer who puts software or hardware on the EU market under its own name is obliged to report actively exploited vulnerabilities and severe security incidents. Here is a quick explainer if you want the details: https://youtu.be/IQkzg7quc58 There is quite a lot of ambiguity over CRA and how it&#39;s going to apply to open source. Regulations keep changing. The line between a commercial manufacturer and an OSS steward is blurry, as well as the terms used in the regulations. But genuinely curious. Is your company aware of CRA? Is there any talk about it, or is it just not on the radar yet? &#32; submitted by &#32; /u/Maria_3464 [link] &#32; [comments]",
      "published": "2026-09-11T20:39:08+00:00"
    },
    {
      "title": "Multitenancy with .NET and EF Core: A Deep Dive (.NET 10)",
      "url": "https://youtu.be/nhiWAeqlF9A",
      "permalink": "https://www.reddit.com/r/programming/comments/1wdbhz3/multitenancy_with_net_and_ef_core_a_deep_dive_net/",
      "author": "/u/RemigiuszZalewski",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Ever had a multi-tenant SaaS app where the only thing stopping Customer A from seeing Customer B&#39;s invoices is a `Where TenantId ==` clause someone remembered to write? In this deep dive I build real tenant isolation into EF Core 10 - two real tenants with real registration, login and invite flows (no dev-token shortcuts), a named global query filter that scopes every query automatically, and a SaveChangesAsync override that stamps TenantId on every insert so it&#39;s never left unset. I also show the one gotcha that makes EF Core 10 worth the upgrade for this: named query filters, so tenant isolation and soft-delete can finally coexist on the same entity instead of one silently overwriting the other. If you&#39;ve ever shipped multi-tenancy on hope and code review, this is the version that makes the mistake structurally impossible. &#32; submitted by &#32; /u/RemigiuszZalewski [link] &#32; [comments]",
      "published": "2026-09-11T09:39:54+00:00"
    },
    {
      "title": "A modern, developer-first technical reference for Sitemaps",
      "url": "https://stephcraft.net/docs/sitemap",
      "permalink": "https://www.reddit.com/r/programming/comments/1wdspwr/a_modern_developerfirst_technical_reference_for/",
      "author": "/u/Stephcraft",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Stephcraft [link] &#32; [comments]",
      "published": "2026-09-11T21:03:26+00:00"
    },
    {
      "title": "What comes after git",
      "url": "https://ersc.io/blog/what-comes-after-git",
      "permalink": "https://www.reddit.com/r/programming/comments/1wdd9yd/what_comes_after_git/",
      "author": "/u/self",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/self [link] &#32; [comments]",
      "published": "2026-09-11T11:13:59+00:00"
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
      "title": "The Internship That Taught Me to Read Between the Lines of a Job Offer",
      "description": "I didn't read the job description.  I didn't check Glassdoor.  I didn't ask a single senior what the...",
      "url": "https://dev.to/dj29/the-internship-that-taught-me-to-read-between-the-lines-of-a-job-offer-50ef",
      "tags": "career, devjournal, discuss, showdev",
      "reactions": 31,
      "comments": 26,
      "reading_time": 8,
      "author": "dj29"
    },
    {
      "title": "I read 500 'AI will replace developers' posts. They all make the same 3 mistakes.",
      "description": "Last month I spent 30 days letting AI write 100% of my code — a real SaaS, in production, no line of...",
      "url": "https://dev.to/infoinlet1/i-read-500-ai-will-replace-developers-posts-they-all-make-the-same-3-mistakes-3819",
      "tags": "ai, webdev, programming, career",
      "reactions": 12,
      "comments": 0,
      "reading_time": 5,
      "author": "infoinlet1"
    },
    {
      "title": "Watch, don't memorize: I built a free visual way to finally understand data structures",
      "description": "LearningTo/pass teaches data structures as step-by-step animations, then lets you code against them in a browser Python sandbox with AI code review. Free, no signup to start.",
      "url": "https://dev.to/cdnsteve/watch-dont-memorize-i-built-a-free-visual-way-to-finally-understand-data-structures-jc4",
      "tags": "algorithms, python, beginners, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "cdnsteve"
    },
    {
      "title": "I Was Terrified of LeetCode. Here is What My First 10 Problems Looked Like.",
      "description": "If you are an engineering student right now, you know the pressure. It is the monster under the bed...",
      "url": "https://dev.to/anveshasri/i-was-terrified-of-leetcode-here-is-what-my-first-10-problems-looked-like-316o",
      "tags": "beginners, career, interview, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "anveshasri"
    },
    {
      "title": "How to Get Clients for Freelancing: The 2026 Playbook",
      "description": "From $11.40 an hour to a full pipeline — the five-source system I now use to fill my calendar without...",
      "url": "https://dev.to/mryadavgulshan/how-to-get-clients-for-freelancing-the-2026-playbook-1flc",
      "tags": "career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 8,
      "author": "mryadavgulshan"
    },
    {
      "title": "The Code Casino",
      "description": "Watching some people use AI for software development right now feels uncomfortably close to watching...",
      "url": "https://dev.to/svrz/the-code-casino-43mg",
      "tags": "ai, programming, career, startup",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "svrz"
    },
    {
      "title": "Four Bubbles Wearing One Trenchcoat: A Developer's Autopsy of the AI Boom vs. the Dot-Com Crash",
      "description": "Four Bubbles Wearing One Trenchcoat: A Developer's Autopsy of the AI Boom vs. the Dot-Com...",
      "url": "https://dev.to/mahankenway/four-bubbles-wearing-one-trenchcoat-a-developers-autopsy-of-the-ai-boom-vs-the-dot-com-crash-38fd",
      "tags": "ai, programming, career, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 13,
      "author": "mahankenway"
    },
    {
      "title": "What do you actually spend on AI per month, and would you pay it out of your own pocket?",
      "description": "Everyone's AI bill quietly grew this year. Far fewer people have looked at the number and asked whether the output is worth it. Let's compare honestly.",
      "url": "https://dev.to/frankchu/what-do-you-actually-spend-on-ai-per-month-and-would-you-pay-it-out-of-your-own-pocket-29m1",
      "tags": "discuss, ai, productivity, career",
      "reactions": 0,
      "comments": 1,
      "reading_time": 2,
      "author": "frankchu"
    },
    {
      "title": "Undergraduate CS Student Seeks Advice on Next Programming Language to Learn Beyond Python, Java, and C++",
      "description": "Introduction   As an undergraduate Computer Science student, you’re standing at a...",
      "url": "https://dev.to/serbyte/undergraduate-cs-student-seeks-advice-on-next-programming-language-to-learn-beyond-python-java-3ccp",
      "tags": "programming, career, education, languages",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "serbyte"
    },
    {
      "title": "My Journey: From Zero to Frontend Developer",
      "description": "Two years ago, I didn't know what HTML was. Today, I'm building responsive websites, creating...",
      "url": "https://dev.to/salmantahir/my-journey-from-zero-to-frontend-developer-2hch",
      "tags": "beginners, career, frontend, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "salmantahir"
    }
  ]
}
```

