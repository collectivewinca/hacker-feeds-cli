# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-11 06:37:56 UTC

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
      "forks": 1588,
      "added_stars": 1619,
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
      "forks": 4467,
      "added_stars": 4896,
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
      "forks": 3625,
      "added_stars": 791,
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
      "desc": "🌊 The original agent meta-harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, RAG integration, and native Claude Code / Codex / Hermes and many more Integrated",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8520,
      "added_stars": 1694,
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
      "forks": 5659,
      "added_stars": 4174,
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
      "forks": 2315,
      "added_stars": 1679,
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
      "forks": 27007,
      "added_stars": 3139,
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
      "forks": 816,
      "added_stars": 204,
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
      "author": "humanlayer",
      "repo": "skills",
      "avatar": "https://github.com/humanlayer.png",
      "repo_link": "https://github.com/humanlayer/skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 108,
      "added_stars": 2609,
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
      "author": "magnitudedev",
      "repo": "magnitude",
      "avatar": "https://github.com/magnitudedev.png",
      "repo_link": "https://github.com/magnitudedev/magnitude",
      "desc": "Open source local inference engine. It runs models on the hardware you already have, whether that's a Mac, an NVIDIA or AMD GPU, or just a CPU. Plug it into Pi, OpenCode, Hermes, OpenClaw, Codex, Claude Code, Oh My Pi, and Cline.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 317,
      "added_stars": 2446,
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
      "author": "MoonTechLab",
      "repo": "LunaTV",
      "avatar": "https://github.com/MoonTechLab.png",
      "repo_link": "https://github.com/MoonTechLab/LunaTV",
      "desc": "本项目采用 CC BY-NC-SA 协议，禁止任何商业化行为，任何衍生项目必须保留本项目地址并以相同协议开源",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9082,
      "added_stars": 1041,
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
      "author": "Gitlawb",
      "repo": "openclaude",
      "avatar": "https://github.com/Gitlawb.png",
      "repo_link": "https://github.com/Gitlawb/openclaude",
      "desc": "runs anywhere. uses anything",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9082,
      "added_stars": 899,
      "builtBy": [
        {
          "username": "kevincodex1",
          "href": "https://github.com/kevincodex1",
          "avatar": "https://avatars.githubusercontent.com/u/268502447"
        },
        {
          "username": "chioarub",
          "href": "https://github.com/chioarub",
          "avatar": "https://avatars.githubusercontent.com/u/59725767"
        },
        {
          "username": "jatmn",
          "href": "https://github.com/jatmn",
          "avatar": "https://avatars.githubusercontent.com/u/12479882"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "0xfandom",
          "href": "https://github.com/0xfandom",
          "avatar": "https://avatars.githubusercontent.com/u/50949929"
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
      "forks": 242,
      "added_stars": 1637,
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
      "author": "alsk1992",
      "repo": "CloddsBot",
      "avatar": "https://github.com/alsk1992.png",
      "repo_link": "https://github.com/alsk1992/CloddsBot",
      "desc": "Open Source AI trading agent that operates autonomously across 1000+ markets - Polymarket, Kalshi, Binance, Hyperliquid, Solana DEXs, 5 EVM chains. Scans for edge, executes instantly, manages risk while you sleep. Agent commerce protocol for machine-to-machine payments. Self-hosted. Built on Claude.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 264,
      "added_stars": 594,
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
      "author": "pascalorg",
      "repo": "editor",
      "avatar": "https://github.com/pascalorg.png",
      "repo_link": "https://github.com/pascalorg/editor",
      "desc": "Open-source 3D architectural editor with a local CLI, MCP tools, and practical workflows for humans and AI agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2916,
      "added_stars": 1402,
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
      "author": "OpenHands",
      "repo": "OpenHands",
      "avatar": "https://github.com/OpenHands.png",
      "repo_link": "https://github.com/OpenHands/OpenHands",
      "desc": "🙌 OpenHands: AI-Driven Development",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 11450,
      "added_stars": 1215,
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
      "author": "AdventDevInc",
      "repo": "kudu",
      "avatar": "https://github.com/AdventDevInc.png",
      "repo_link": "https://github.com/AdventDevInc/kudu",
      "desc": "Free Windows, Mac and Linux cleaner, scanner, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 274,
      "added_stars": 979,
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
      "author": "aipoch",
      "repo": "open-science",
      "avatar": "https://github.com/aipoch.png",
      "repo_link": "https://github.com/aipoch/open-science",
      "desc": "AIPOCH Open-Science is an open-source, local-first, model-agnostic AI research workbench for macOS, Windows, and Linux, with scientific agents, Python/R notebooks, data connectors, and reproducible provenance.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 264,
      "added_stars": 779,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 178,
      "added_stars": 1849,
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
      "desc": "Command-line tool that allows searching and downloading app packages (known as ipa files) for iOS, iPadOS, tvOS, and visionOS from the App Store.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 924,
      "added_stars": 1270,
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
      "added_stars": 781,
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
      "added_stars": 397,
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
      "forks": 431,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1006,
      "added_stars": 1172,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2232,
      "added_stars": 680,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 311,
      "added_stars": 639,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The task manager you actually own.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 680,
      "added_stars": 343,
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
      "author": "go-task",
      "repo": "task",
      "avatar": "https://github.com/go-task.png",
      "repo_link": "https://github.com/go-task/task",
      "desc": "A fast, cross-platform build tool inspired by Make, designed for modern workflows.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 906,
      "added_stars": 195,
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
      "forks": 3343,
      "added_stars": 473,
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
      "author": "CarterPerez-dev",
      "repo": "Cybersecurity-Projects",
      "avatar": "https://github.com/CarterPerez-dev.png",
      "repo_link": "https://github.com/CarterPerez-dev/Cybersecurity-Projects",
      "desc": "Building 70 Projects ranging from beginner to advanced so anyone can — learn from, build upon, use as a reference, or even copy directly. Gamified Cybersecurity learning 👇",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1009,
      "added_stars": 1914,
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
      "author": "putyy",
      "repo": "res-downloader",
      "avatar": "https://github.com/putyy.png",
      "repo_link": "https://github.com/putyy/res-downloader",
      "desc": "视频号、小程序、抖音、快手、小红书、直播流、m3u8、酷狗、QQ音乐等常见网络资源下载!",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2445,
      "added_stars": 775,
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
      "author": "caddyserver",
      "repo": "caddy",
      "avatar": "https://github.com/caddyserver.png",
      "repo_link": "https://github.com/caddyserver/caddy",
      "desc": "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4951,
      "added_stars": 945,
      "builtBy": [
        {
          "username": "mholt",
          "href": "https://github.com/mholt",
          "avatar": "https://avatars.githubusercontent.com/u/1128849"
        },
        {
          "username": "francislavoie",
          "href": "https://github.com/francislavoie",
          "avatar": "https://avatars.githubusercontent.com/u/2111701"
        },
        {
          "username": "mohammed90",
          "href": "https://github.com/mohammed90",
          "avatar": "https://avatars.githubusercontent.com/u/2636183"
        },
        {
          "username": "WeidiDeng",
          "href": "https://github.com/WeidiDeng",
          "avatar": "https://avatars.githubusercontent.com/u/28780594"
        },
        {
          "username": "dunglas",
          "href": "https://github.com/dunglas",
          "avatar": "https://avatars.githubusercontent.com/u/57224"
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
      "forks": 17808,
      "added_stars": 2991,
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
      "author": "nektos",
      "repo": "act",
      "avatar": "https://github.com/nektos.png",
      "repo_link": "https://github.com/nektos/act",
      "desc": "Run your GitHub Actions locally 🚀",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2023,
      "added_stars": 509,
      "builtBy": [
        {
          "username": "cplee",
          "href": "https://github.com/cplee",
          "avatar": "https://avatars.githubusercontent.com/u/2239057"
        },
        {
          "username": "ChristopherHX",
          "href": "https://github.com/ChristopherHX",
          "avatar": "https://avatars.githubusercontent.com/u/44845461"
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
      "forks": 8585,
      "added_stars": 4895,
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
      "author": "OpenListTeam",
      "repo": "OpenList",
      "avatar": "https://github.com/OpenListTeam.png",
      "repo_link": "https://github.com/OpenListTeam/OpenList",
      "desc": "A new AList Fork to Anti Trust Crisis",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2278,
      "added_stars": 610,
      "builtBy": [
        {
          "username": "xhofe",
          "href": "https://github.com/xhofe",
          "avatar": "https://avatars.githubusercontent.com/u/36558727"
        },
        {
          "username": "xrgzs",
          "href": "https://github.com/xrgzs",
          "avatar": "https://avatars.githubusercontent.com/u/26499123"
        },
        {
          "username": "j2rong4cn",
          "href": "https://github.com/j2rong4cn",
          "avatar": "https://avatars.githubusercontent.com/u/36783515"
        },
        {
          "username": "foxxorcat",
          "href": "https://github.com/foxxorcat",
          "avatar": "https://avatars.githubusercontent.com/u/95907542"
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
      "forks": 725,
      "added_stars": 273,
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
      "author": "seaweedfs",
      "repo": "seaweedfs",
      "avatar": "https://github.com/seaweedfs.png",
      "repo_link": "https://github.com/seaweedfs/seaweedfs",
      "desc": "SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2997,
      "added_stars": 636,
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
      "author": "higress-group",
      "repo": "higress",
      "avatar": "https://github.com/higress-group.png",
      "repo_link": "https://github.com/higress-group/higress",
      "desc": "🤖 AI Gateway | AI Native API Gateway",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1292,
      "added_stars": 306,
      "builtBy": [
        {
          "username": "johnlanni",
          "href": "https://github.com/johnlanni",
          "avatar": "https://avatars.githubusercontent.com/u/6763318"
        },
        {
          "username": "CH3CHO",
          "href": "https://github.com/CH3CHO",
          "avatar": "https://avatars.githubusercontent.com/u/2909796"
        },
        {
          "username": "rinfx",
          "href": "https://github.com/rinfx",
          "avatar": "https://avatars.githubusercontent.com/u/25995563"
        },
        {
          "username": "EndlessSeeker",
          "href": "https://github.com/EndlessSeeker",
          "avatar": "https://avatars.githubusercontent.com/u/153817598"
        },
        {
          "username": "Jing-ze",
          "href": "https://github.com/Jing-ze",
          "avatar": "https://avatars.githubusercontent.com/u/52855280"
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
      "forks": 369,
      "added_stars": 121,
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
      "forks": 283,
      "added_stars": 3460,
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
      "forks": 2799,
      "added_stars": 8469,
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
      "author": "NVIDIA-NeMo",
      "repo": "Switchyard",
      "avatar": "https://github.com/NVIDIA-NeMo.png",
      "repo_link": "https://github.com/NVIDIA-NeMo/Switchyard",
      "desc": "Switchyard lets LLM applications route traffic across models and providers while preserving native OpenAI and Anthropic API compatibility - enabling flexible model selection, benchmarking, and cost/performance optimization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 257,
      "added_stars": 2628,
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
          "username": "elyasmnvidian",
          "href": "https://github.com/elyasmnvidian",
          "avatar": "https://avatars.githubusercontent.com/u/186739590"
        },
        {
          "username": "ryan-lempka",
          "href": "https://github.com/ryan-lempka",
          "avatar": "https://avatars.githubusercontent.com/u/196090752"
        },
        {
          "username": "ayushag-nv",
          "href": "https://github.com/ayushag-nv",
          "avatar": "https://avatars.githubusercontent.com/u/208532109"
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
      "forks": 1414,
      "added_stars": 8849,
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
      "author": "youssofal",
      "repo": "MTPLX",
      "avatar": "https://github.com/youssofal.png",
      "repo_link": "https://github.com/youssofal/MTPLX",
      "desc": "3x faster speeds on MLX | Qwen 3.8 27B | Native MTP Speculative Decoding On Apple Silicon With No External Drafter.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 164,
      "added_stars": 1060,
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
      "forks": 2751,
      "added_stars": 12418,
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
      "forks": 52839,
      "added_stars": 24223,
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
      "forks": 689,
      "added_stars": 7395,
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2237,
      "added_stars": 18245,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 18891,
      "added_stars": 20448,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3478,
      "added_stars": 3977,
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
      "author": "jundot",
      "repo": "omlx",
      "avatar": "https://github.com/jundot.png",
      "repo_link": "https://github.com/jundot/omlx",
      "desc": "LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1852,
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
      "author": "3b1b",
      "repo": "manim",
      "avatar": "https://github.com/3b1b.png",
      "repo_link": "https://github.com/3b1b/manim",
      "desc": "Animation engine for explanatory math videos",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7694,
      "added_stars": 4026,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Local UI to run and train LLMs and diffusion models. Supports GGUF, MLX, Qwen3.8, DeepSeek-V4, MiniMax-H3, Gemma 4, FLUX and more.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6923,
      "added_stars": 6408,
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
      "author": "megadose",
      "repo": "holehe",
      "avatar": "https://github.com/megadose.png",
      "repo_link": "https://github.com/megadose/holehe",
      "desc": "holehe allows you to check if the mail is used on different sites like twitter, instagram and will retrieve information on sites with the forgotten password function.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1890,
      "added_stars": 2949,
      "builtBy": [
        {
          "username": "megadose",
          "href": "https://github.com/megadose",
          "avatar": "https://avatars.githubusercontent.com/u/51822495"
        },
        {
          "username": "Eriys",
          "href": "https://github.com/Eriys",
          "avatar": "https://avatars.githubusercontent.com/u/70079220"
        },
        {
          "username": "novitae",
          "href": "https://github.com/novitae",
          "avatar": "https://avatars.githubusercontent.com/u/85891169"
        },
        {
          "username": "mxrch",
          "href": "https://github.com/mxrch",
          "avatar": "https://avatars.githubusercontent.com/u/17338428"
        },
        {
          "username": "byt3loss",
          "href": "https://github.com/byt3loss",
          "avatar": "https://avatars.githubusercontent.com/u/72035730"
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
      "forks": 3810,
      "added_stars": 11872,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3084,
      "added_stars": 5014,
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
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4025,
      "added_stars": 11332,
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
      "forks": 583,
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
      "author": "MiaAI-Lab",
      "repo": "DeepSeek-v4-Flash-DSpark-2x-DGX-Spark",
      "avatar": "https://github.com/MiaAI-Lab.png",
      "repo_link": "https://github.com/MiaAI-Lab/DeepSeek-v4-Flash-DSpark-2x-DGX-Spark",
      "desc": "DeepSeek-v4-Flash 0731 recipe for 2x DGX Sparks",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 182,
      "added_stars": 816,
      "builtBy": [
        {
          "username": "MiaAI-Lab",
          "href": "https://github.com/MiaAI-Lab",
          "avatar": "https://avatars.githubusercontent.com/u/83042094"
        },
        {
          "username": "plotarmordev",
          "href": "https://github.com/plotarmordev",
          "avatar": "https://avatars.githubusercontent.com/u/299844489"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "de1tydev",
          "href": "https://github.com/de1tydev",
          "avatar": "https://avatars.githubusercontent.com/u/7804799"
        },
        {
          "username": "0xSero",
          "href": "https://github.com/0xSero",
          "avatar": "https://avatars.githubusercontent.com/u/69639595"
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
      "forks": 9574,
      "added_stars": 4717,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7860,
      "added_stars": 6182,
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
      "author": "whiteguo233",
      "repo": "OpenBiliClaw",
      "avatar": "https://github.com/whiteguo233.png",
      "repo_link": "https://github.com/whiteguo233/OpenBiliClaw",
      "desc": "本地私有、开源的自进化跨平台 AI 内容发现 Agent：先理解你，再主动从 B站、小红书、抖音、YouTube、X、知乎、Reddit、微博等平台与开放 Web 寻找内容。（支持 deepseek harness 插件） | Local-first open-source cross-platform AI content discovery agent: understands you, then proactively finds content across Bilibili, Xiaohongshu, Douyin, YouTube, X, Zhihu, Reddit, Weibo and the open web.（support deepseek harness plugin）",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 167,
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
    },
    {
      "author": "radixark",
      "repo": "miles",
      "avatar": "https://github.com/radixark.png",
      "repo_link": "https://github.com/radixark/miles",
      "desc": "Miles is an enterprise-facing reinforcement learning framework for LLM and VLM post-training, forked from and co-evolving with slime.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 475,
      "added_stars": 839,
      "builtBy": [
        {
          "username": "fzyzcjy",
          "href": "https://github.com/fzyzcjy",
          "avatar": "https://avatars.githubusercontent.com/u/5236035"
        },
        {
          "username": "guapisolo",
          "href": "https://github.com/guapisolo",
          "avatar": "https://avatars.githubusercontent.com/u/48857426"
        },
        {
          "username": "yueming-yuan",
          "href": "https://github.com/yueming-yuan",
          "avatar": "https://avatars.githubusercontent.com/u/112649537"
        },
        {
          "username": "Zhichenzzz",
          "href": "https://github.com/Zhichenzzz",
          "avatar": "https://avatars.githubusercontent.com/u/108505471"
        },
        {
          "username": "Shi-Dong",
          "href": "https://github.com/Shi-Dong",
          "avatar": "https://avatars.githubusercontent.com/u/23387010"
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
    },
    {
      "title": "How React Keeps You Logged In With JWT and Zustand",
      "url": "https://www.jstools.space/blog/react-jwt-zustand/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-08-21T13:53:34.000Z"
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
      "title": "Four Debian 13 Boxes, One Brief: 1,923 Packages on Metal, 328 in the Cloud",
      "description": "The same Debian 13 on a laptop and on AWS, GCE and Azure. The cloud images ship 328-350 packages against 1,923 on metal, no firmware package at all, and no tool to read the NVMe they all boot from. Each machine was then given the same brief and asked to analyse itself. Three of them agreed. The fourth found a partition table its own resize had broken.",
      "url": "https://dev.to/gde/four-debian-13-boxes-one-brief-1923-packages-on-metal-328-in-the-cloud-and-the-backup-gpt-cc2",
      "tags": "debian, linux, claudecode, devops",
      "reactions": 8,
      "comments": 2,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Congrats to the Frontend Challenge: Comfort Food Edition Winners!",
      "description": "We are so excited to announce the winners of our Frontend Challenge: Comfort Food Edition!  This...",
      "url": "https://dev.to/devteam/congrats-to-the-frontend-challenge-comfort-food-edition-winners-1l8",
      "tags": "devchallenge, frontendchallenge, css, javascript",
      "reactions": 47,
      "comments": 22,
      "reading_time": 2,
      "author": "heyitsjem"
    },
    {
      "title": "DEV Weekend Challenge: Dog Days Edition Winner Announcement Delayed",
      "description": "Hey all, we have a quick update for everyone who participated in the DEV Weekend Challenge: Dog Days...",
      "url": "https://dev.to/devteam/dev-weekend-challenge-dog-days-edition-winner-announcement-delayed-36f0",
      "tags": "devchallenge, weekendchallenge",
      "reactions": 2,
      "comments": 6,
      "reading_time": 1,
      "author": "heyitsjem"
    },
    {
      "title": "Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6",
      "description": "Step-by-step: running Google's quantization-aware-trained Gemma 4 E2B on a 10th-gen Core i7 laptop with a 4 GB GTX 1650 Ti — why bf16 and int8 cannot fit, why the QAT GGUF does with room to spare, and managing it with an MCP server.",
      "url": "https://dev.to/gde/gemma-4-on-an-old-4-gb-laptop-gpu-qat-takes-it-from-95-gib-to-16-b5l",
      "tags": "gemma, llamacpp, mcp, cuda",
      "reactions": 9,
      "comments": 3,
      "reading_time": 13,
      "author": "xbill"
    },
    {
      "title": "is Graph Engineering just reinventing systems architecture for the AI age?",
      "description": "Bringing backend predictability to multi-agent systems  I've been hearing the phrase \"graph...",
      "url": "https://dev.to/googleai/is-graph-engineering-just-reinventing-systems-architecture-for-the-ai-age-2427",
      "tags": "ai, agents, graphengineering, adk",
      "reactions": 7,
      "comments": 2,
      "reading_time": 1,
      "author": "annthurium"
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
      "title": "4 pitfalls of loop engineering (and how to fix them)",
      "description": "Perhaps you've heard the term Loop Engineering: instead of solving a problem by hand, you build a...",
      "url": "https://dev.to/googleai/4-pitfalls-of-loop-engineering-and-how-to-fix-them-1ji2",
      "tags": "ai, agents, discuss",
      "reactions": 16,
      "comments": 4,
      "reading_time": 1,
      "author": "annthurium"
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
    },
    {
      "title": "Welcome Thread - v 392",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-392-1kj4",
      "tags": "welcome",
      "reactions": 24,
      "comments": 143,
      "reading_time": 1,
      "author": "sloan"
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
      "title": "Models Don't Go Rogue",
      "url": "https://mail.cyberneticforests.com/models-dont-go-rogue/",
      "score": 2,
      "comments": 0,
      "tags": [
        "ai",
        "security"
      ],
      "id": "0i492m"
    },
    {
      "title": "DiffOS is For Freedom",
      "url": "https://www.diffos.org/",
      "score": 1,
      "comments": 0,
      "tags": [
        "linux"
      ],
      "id": "mfx8ja"
    },
    {
      "title": "The Wind, The Wind",
      "url": "https://exple.tive.org/blarg/2026/09/10/the-wind-the-wind/",
      "score": 4,
      "comments": 0,
      "tags": [
        "practices",
        "satire",
        "vibecoding"
      ],
      "id": "akchzn"
    },
    {
      "title": "An untrusted site can freeze a Mac using WebGPU",
      "url": "https://auberon.xyz/blog/posts/deathray/",
      "score": 4,
      "comments": 0,
      "tags": [
        "browsers",
        "security"
      ],
      "id": "l0sqnt"
    },
    {
      "title": "Tributes pour in following death of Paddy Keenan, the 'Jimi Hendrix of the uilleann pipes'",
      "url": "https://www.irishexaminer.com/lifestyle/artsandculture/arid-41909041.html",
      "score": -4,
      "comments": 0,
      "tags": [
        "person"
      ],
      "id": "zuigo4"
    },
    {
      "title": "Occlusion with Bells On",
      "url": "https://acko.net/blog/occlusion-with-bells-on/",
      "score": 3,
      "comments": 0,
      "tags": [
        "graphics",
        "programming",
        "release"
      ],
      "id": "nvrxk9"
    },
    {
      "title": "Soft-deprecating re.match()",
      "url": "https://hugovk.dev/blog/2026/soft-deprecating-re.match/",
      "score": 18,
      "comments": 1,
      "tags": [
        "python"
      ],
      "id": "u7dr96"
    },
    {
      "title": "Fastly Speedtest Test",
      "url": "https://speed.edgecompute.app/",
      "score": 10,
      "comments": 1,
      "tags": [
        "networking",
        "wasm"
      ],
      "id": "twkkac"
    },
    {
      "title": "Julia 1.13 Highlights",
      "url": "https://julialang.org/blog/2026/09/julia-1.13-highlights/index.html",
      "score": 3,
      "comments": 0,
      "tags": [
        "release"
      ],
      "id": "zxcabg"
    },
    {
      "title": "phlex-hanami v0.2.0",
      "url": "https://github.com/aaronmallen/phlex-hanami/releases/tag/0.2.0",
      "score": 3,
      "comments": 0,
      "tags": [
        "release",
        "ruby"
      ],
      "id": "kpwrwb"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "manojbajaj95",
      "descendants": 2,
      "id": 49654229,
      "kids": [
        49654306,
        49654291
      ],
      "score": 9,
      "time": 1789107786,
      "title": "Astra for Coding: Why Are We Doing This Again?",
      "type": "story",
      "url": "https://lucumr.pocoo.org/2026/9/7/astra-why/"
    },
    {
      "by": "fnthawar2",
      "descendants": 653,
      "id": 49643982,
      "kids": [
        49653269,
        49644503,
        49654282,
        49653638,
        49651594,
        49645618,
        49651581,
        49643983,
        49646473,
        49654030,
        49653651,
        49651193,
        49654196,
        49644476,
        49645214,
        49653030,
        49653286,
        49644335,
        49648932,
        49647663,
        49652340,
        49644617,
        49645215,
        49653183,
        49644664,
        49654268,
        49652139,
        49646712,
        49644740,
        49644759,
        49644281,
        49646051,
        49644489,
        49652369,
        49647987,
        49653264,
        49653478,
        49653122,
        49645091,
        49654152,
        49644910,
        49645527,
        49645156,
        49653609,
        49653536,
        49651998,
        49646906,
        49653146,
        49654046,
        49653020,
        49651532,
        49651570,
        49646825,
        49652988,
        49645776,
        49652535,
        49646793,
        49651029,
        49645099,
        49645104,
        49645348,
        49645433,
        49645495,
        49646932,
        49645473,
        49648033,
        49651585,
        49645903,
        49644633,
        49644563,
        49647488,
        49646607,
        49646238,
        49646477,
        49645944,
        49646951,
        49644860,
        49646537,
        49644362,
        49644369,
        49645632,
        49650550,
        49645948,
        49647708,
        49645014,
        49647408,
        49646004,
        49647042,
        49644301,
        49650624,
        49646116,
        49645222,
        49644331,
        49644413,
        49645085,
        49646663,
        49650035,
        49652435,
        49652591,
        49646893,
        49652694,
        49650449,
        49645855,
        49646527,
        49645777,
        49653133,
        49645752,
        49645691,
        49646642,
        49650203,
        49644782,
        49650603,
        49644370,
        49645765,
        49645083,
        49647803,
        49646935,
        49646595,
        49646267,
        49651667,
        49645815,
        49645070,
        49645055,
        49644589,
        49644350,
        49644378,
        49644309,
        49645565,
        49646320,
        49646848,
        49647335,
        49645093,
        49644450,
        49644354,
        49644256,
        49647075,
        49644532,
        49644903,
        49648808,
        49645931,
        49645666,
        49645629,
        49644461,
        49644429,
        49647684,
        49652152,
        49650671,
        49649072,
        49652273,
        49645273,
        49651491,
        49644277,
        49653315,
        49646264,
        49647345,
        49651783,
        49645040,
        49645526,
        49645789,
        49644588
      ],
      "score": 973,
      "time": 1789049371,
      "title": "Shopify is moving from React Native back to Swift and Kotlin",
      "type": "story",
      "url": "https://shopify.engineering/back-to-native"
    },
    {
      "by": "Brajeshwar",
      "descendants": 298,
      "id": 49645393,
      "kids": [
        49654303,
        49646223,
        49654294,
        49650002,
        49645921,
        49653134,
        49649319,
        49645724,
        49646383,
        49651497,
        49654055,
        49652077,
        49650078,
        49647087,
        49649559,
        49645899,
        49650386,
        49650557,
        49653716,
        49649372,
        49646059,
        49653321,
        49646427,
        49651171,
        49646063,
        49651255,
        49652751,
        49645901,
        49653242,
        49649942,
        49650123,
        49650946,
        49651195,
        49652592,
        49652875,
        49650567,
        49649518,
        49650880,
        49646582,
        49647905,
        49650054,
        49652548,
        49649996,
        49651320,
        49653280,
        49645852,
        49652342,
        49650333,
        49649807,
        49651397,
        49650741,
        49649645,
        49650724,
        49650835,
        49651170,
        49649650,
        49653626,
        49653917,
        49651547,
        49649563,
        49650311,
        49646001,
        49649452,
        49645920,
        49651472,
        49646098,
        49652125,
        49650131,
        49646898,
        49650722,
        49651040,
        49645879,
        49650016,
        49653261,
        49652084,
        49653268,
        49650430,
        49646378,
        49650493,
        49645774,
        49651164,
        49652459,
        49650168,
        49650050,
        49650139,
        49649669,
        49649599,
        49646189,
        49652063,
        49651300,
        49650481,
        49650253,
        49653167,
        49649112,
        49646047
      ],
      "score": 441,
      "time": 1789054042,
      "title": "Don't let anyone take away your big box of cables",
      "type": "story",
      "url": "https://blog.jim-nielsen.com/2026/hands-off-my-cables/"
    },
    {
      "by": "baud147258",
      "descendants": 33,
      "id": 49610834,
      "kids": [
        49654012,
        49654065,
        49654242,
        49654182,
        49653967,
        49654073,
        49653932,
        49653858,
        49654037,
        49653978
      ],
      "score": 36,
      "time": 1788877690,
      "title": "The little holes in your bread are telling you something",
      "type": "story",
      "url": "https://edconway.substack.com/p/the-little-holes-in-your-bread-are"
    },
    {
      "by": "aquir",
      "descendants": 128,
      "id": 49649213,
      "kids": [
        49650888,
        49650658,
        49651647,
        49650441,
        49652257,
        49653842,
        49653602,
        49653572,
        49650234,
        49650525,
        49651460,
        49651406,
        49654029,
        49652202,
        49650188,
        49650221,
        49652175,
        49650561,
        49651471,
        49651225,
        49650503,
        49651228,
        49650299,
        49650585,
        49650846,
        49653983,
        49650541,
        49651126,
        49650428,
        49654048,
        49653937,
        49653307,
        49653200,
        49651937,
        49650259,
        49650641,
        49650996,
        49651733,
        49652385
      ],
      "score": 217,
      "time": 1789069402,
      "title": "OpenAI Agents API",
      "type": "story",
      "url": "https://developers.openai.com/api/docs/guides/agents-api/overview"
    },
    {
      "by": "nasutton12",
      "descendants": 6,
      "id": 49651221,
      "kids": [
        49654302,
        49654104,
        49654159,
        49653950,
        49653955
      ],
      "score": 54,
      "time": 1789080841,
      "title": "Nine coding harnesses vs. your laptop",
      "type": "story",
      "url": "https://nasutton.notion.site/Nine-coding-harnesses-vs-your-laptop-3d139990182b80d59fa3cf500f0450ba?pvs=74"
    },
    {
      "by": "seelos",
      "descendants": 166,
      "id": 49645443,
      "kids": [
        49646410,
        49647006,
        49646469,
        49646847,
        49653360,
        49646420,
        49646136,
        49646612,
        49650371,
        49648000,
        49648102,
        49653880,
        49649017,
        49646735,
        49646566,
        49648891,
        49648681,
        49648256,
        49651186,
        49653358,
        49646173,
        49646255,
        49646156,
        49646526,
        49651531,
        49646522,
        49647438,
        49648077,
        49646140,
        49649477,
        49653000
      ],
      "score": 400,
      "time": 1789054187,
      "title": "Cognition launches new SWE-2 model, Rivaling Fable 5.1 and GPT-Astra",
      "type": "story",
      "url": "https://cognition.com/blog/swe-2"
    },
    {
      "by": "auberonedu",
      "descendants": 93,
      "id": 49649124,
      "kids": [
        49653946,
        49653479,
        49652972,
        49653922,
        49653891,
        49651836,
        49651562,
        49652881,
        49651655,
        49653251,
        49652023,
        49651919,
        49651871,
        49653076,
        49649439,
        49653189,
        49652253,
        49651609,
        49651626,
        49651760,
        49651736,
        49652007,
        49652115,
        49651322,
        49653275,
        49651396,
        49649766
      ],
      "score": 140,
      "time": 1789068860,
      "title": "The Deathray: A simple way for an untrusted site to freeze a Mac",
      "type": "story",
      "url": "https://auberon.xyz/blog/posts/deathray/"
    },
    {
      "by": "quysala12",
      "descendants": 5,
      "id": 49653699,
      "kids": [
        49653736,
        49653973,
        49654061,
        49653965
      ],
      "score": 13,
      "time": 1789102340,
      "title": "The Gemini app is now available for Windows",
      "type": "story",
      "url": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-app-now-on-windows/"
    },
    {
      "by": "rguiscard",
      "descendants": 54,
      "id": 49652237,
      "kids": [
        49652876,
        49654279,
        49653031,
        49652860,
        49653428,
        49652851,
        49653025,
        49652859,
        49653059,
        49653077,
        49653206,
        49653655,
        49653003,
        49653910,
        49653525,
        49653004,
        49652862,
        49653529,
        49653467,
        49652932,
        49652871,
        49653574
      ],
      "score": 142,
      "time": 1789088456,
      "title": "Mexican student creates an acoustic fire extinguisher to put out fire in seconds",
      "type": "story",
      "url": "https://www.upsocl.com/en/16-year-old-mexican-student-creates-an-acoustic-fire-extinguisher-that-uses-sound-waves-to-put-out-fires-in-seconds/"
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
      "title": "The Internship That Taught Me to Read Between the Lines of a Job Offer",
      "description": "I didn't read the job description.  I didn't check Glassdoor.  I didn't ask a single senior what the...",
      "url": "https://dev.to/dj29/the-internship-that-taught-me-to-read-between-the-lines-of-a-job-offer-50ef",
      "tags": "career, devjournal, discuss, showdev",
      "reactions": 19,
      "comments": 14,
      "reading_time": 8,
      "author": "dj29"
    },
    {
      "title": "I Think Developers Are Building Too Much Software",
      "description": "There was a time when the difficult part of building software was writing the software.  Today, that...",
      "url": "https://dev.to/jaideepparashar/i-think-developers-are-building-too-much-software-1l1i",
      "tags": "ai, devops, career, webdev",
      "reactions": 7,
      "comments": 1,
      "reading_time": 6,
      "author": "jaideepparashar"
    },
    {
      "title": "When AI Writes the Code, What Makes an Engineer Valuable?",
      "description": "Claude and OpenAI are bringing what feels like a real storm to IT. I don’t expect that storm to hit...",
      "url": "https://dev.to/sreeni5018/when-ai-writes-the-code-what-makes-an-engineer-valuable-1bp1",
      "tags": "ai, career, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "sreeni5018"
    },
    {
      "title": "Regarding the Job Market: Why 2026 Feels Like a Crisis — and Why the Profession Isn't Dying",
      "description": "The 2026 \"developer crisis\" is mostly a product of filter bubbles — and the data is the first to...",
      "url": "https://dev.to/tom_seidel_d47bb467039516/regarding-the-job-market-why-2026-feels-like-a-crisis-and-why-the-profession-isnt-dying-254n",
      "tags": "ai, programming, career, software",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "tom_seidel_d47bb467039516"
    },
    {
      "title": "The 5-Minute Trick That Landed Me 3 Job Offers",
      "description": "I used to prep for interviews the normal way. Read the job post twice. Practice \"tell me about...",
      "url": "https://dev.to/rahmanfrr/the-5-minute-trick-that-landed-me-3-job-offers-jff",
      "tags": "career, interview, jobsearch, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "rahmanfrr"
    },
    {
      "title": "The Mathematicians Just Felt It: What Happens to a Lifetime of Work When a Machine Finishes It in Days?",
      "description": "Somewhere this week, a mathematician woke up, made coffee, and read the news that the problem they'd...",
      "url": "https://dev.to/james_anderson_h/the-mathematicians-just-felt-it-what-happens-to-a-lifetime-of-work-when-a-machine-finishes-it-in-1i8i",
      "tags": "ai, career, discuss, mentalhealth",
      "reactions": 19,
      "comments": 23,
      "reading_time": 7,
      "author": "james_anderson_h"
    },
    {
      "title": "How to Explain Your Final Year Project in an Interview (2-Minute Script)",
      "description": "Originally published on mock-mate.com. I work on MockMate; this guide is not about the product, but...",
      "url": "https://dev.to/krishna_krish_1012901fe94/how-to-explain-your-final-year-project-in-an-interview-2-minute-script-nco",
      "tags": "career, beginners, interview, students",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "krishna_krish_1012901fe94"
    },
    {
      "title": "Performance Marketing Course in Trivandrum",
      "description": "Performance Marketing Course in Trivandrum: A Practical Path to Digital Advertising...",
      "url": "https://dev.to/sruthin_s_b647be51f7bd68e/performance-marketing-course-in-trivandrum-olb",
      "tags": "productivity, career, seo, softwaredevelopment",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sruthin_s_b647be51f7bd68e"
    },
    {
      "title": "Speak in the First Ten Minutes",
      "description": "If you are going to say something in a meeting, say something early. Not the perfect thing. Just...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/speak-in-the-first-ten-minutes-hi8",
      "tags": "asaelshinder, confidence, communication, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "The Why Is the Part Nobody Wrote Down",
      "description": "Take any system you work on and ask why it is shaped the way it is. Not what it does. Why.  The code...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/the-why-is-the-part-nobody-wrote-down-2dg2",
      "tags": "asaelshinder, career, future, softskills",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    }
  ]
}
```

