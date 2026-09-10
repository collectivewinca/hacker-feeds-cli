# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-10 06:38:38 UTC

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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3616,
      "added_stars": 962,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4442,
      "added_stars": 4643,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1570,
      "added_stars": 1331,
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
      "author": "THU-MAIC",
      "repo": "OpenMAIC",
      "avatar": "https://github.com/THU-MAIC.png",
      "repo_link": "https://github.com/THU-MAIC/OpenMAIC",
      "desc": "Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5566,
      "added_stars": 3948,
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
      "forks": 2293,
      "added_stars": 1788,
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
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The original agent meta-harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, RAG integration, and native Claude Code / Codex / Hermes and many more Integrated",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8504,
      "added_stars": 1618,
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
      "author": "anomalyco",
      "repo": "opencode",
      "avatar": "https://github.com/anomalyco.png",
      "repo_link": "https://github.com/anomalyco/opencode",
      "desc": "The open source coding agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 26943,
      "added_stars": 3133,
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
      "forks": 807,
      "added_stars": 190,
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
      "author": "magnitudedev",
      "repo": "magnitude",
      "avatar": "https://github.com/magnitudedev.png",
      "repo_link": "https://github.com/magnitudedev/magnitude",
      "desc": "Open source inference server for the hardware you already have. It profiles your machine, recommends the right models for it, then downloads, tunes, and runs them. Plug it into Pi, OpenCode, Hermes, OpenClaw, Codex, Claude Code, Oh My Pi, and Cline.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 313,
      "added_stars": 2616,
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
      "author": "humanlayer",
      "repo": "skills",
      "avatar": "https://github.com/humanlayer.png",
      "repo_link": "https://github.com/humanlayer/skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 107,
      "added_stars": 3011,
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
      "author": "MoonTechLab",
      "repo": "LunaTV",
      "avatar": "https://github.com/MoonTechLab.png",
      "repo_link": "https://github.com/MoonTechLab/LunaTV",
      "desc": "本项目采用 CC BY-NC-SA 协议，禁止任何商业化行为，任何衍生项目必须保留本项目地址并以相同协议开源",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9074,
      "added_stars": 1035,
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
          "username": "1411430556",
          "href": "https://github.com/1411430556",
          "avatar": "https://avatars.githubusercontent.com/u/67215517"
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
      "forks": 9071,
      "added_stars": 1251,
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
      "forks": 239,
      "added_stars": 1618,
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
      "author": "AdventDevInc",
      "repo": "kudu",
      "avatar": "https://github.com/AdventDevInc.png",
      "repo_link": "https://github.com/AdventDevInc/kudu",
      "desc": "Free Windows, Mac and Linux cleaner, scanner, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 271,
      "added_stars": 942,
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
      "author": "pascalorg",
      "repo": "editor",
      "avatar": "https://github.com/pascalorg.png",
      "repo_link": "https://github.com/pascalorg/editor",
      "desc": "Open-source 3D architectural editor with a local CLI, MCP tools, and practical workflows for humans and AI agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2907,
      "added_stars": 979,
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
      "author": "aipoch",
      "repo": "open-science",
      "avatar": "https://github.com/aipoch.png",
      "repo_link": "https://github.com/aipoch/open-science",
      "desc": "AIPOCH Open-Science is an open-source, local-first, model-agnostic AI research workbench for macOS, Windows, and Linux, with scientific agents, Python/R notebooks, data connectors, and reproducible provenance.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 256,
      "added_stars": 745,
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
    },
    {
      "author": "linshenkx",
      "repo": "prompt-optimizer",
      "avatar": "https://github.com/linshenkx.png",
      "repo_link": "https://github.com/linshenkx/prompt-optimizer",
      "desc": "An AI prompt optimizer for writing better prompts and getting better AI results.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4032,
      "added_stars": 544,
      "builtBy": [
        {
          "username": "linshenkx",
          "href": "https://github.com/linshenkx",
          "avatar": "https://avatars.githubusercontent.com/u/32978552"
        },
        {
          "username": "hexart",
          "href": "https://github.com/hexart",
          "avatar": "https://avatars.githubusercontent.com/u/5528016"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "prazjain",
          "href": "https://github.com/prazjain",
          "avatar": "https://avatars.githubusercontent.com/u/1950036"
        },
        {
          "username": "lanyuanxiaoyao",
          "href": "https://github.com/lanyuanxiaoyao",
          "avatar": "https://avatars.githubusercontent.com/u/15119304"
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
      "forks": 11431,
      "added_stars": 1144,
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
      "forks": 594,
      "added_stars": 1514,
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
      "desc": "Command-line tool that allows searching and downloading app packages (known as ipa files) for iOS, iPadOS, tvOS, and visionOS from the App Store.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 921,
      "added_stars": 1265,
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
      "added_stars": 797,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2229,
      "added_stars": 675,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1006,
      "added_stars": 1171,
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
      "forks": 430,
      "added_stars": 536,
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
      "author": "authelia",
      "repo": "authelia",
      "avatar": "https://github.com/authelia.png",
      "repo_link": "https://github.com/authelia/authelia",
      "desc": "The Single Sign-On Multi-Factor portal for web apps. OpenID Certified™ and Post-Quantum Cryptography Ready.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1481,
      "added_stars": 365,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 308,
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
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 1Panel is a modern, open-source Linux server management panel and a lightweight AI management platform.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3342,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 176,
      "added_stars": 1830,
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
      "author": "CarterPerez-dev",
      "repo": "Cybersecurity-Projects",
      "avatar": "https://github.com/CarterPerez-dev.png",
      "repo_link": "https://github.com/CarterPerez-dev/Cybersecurity-Projects",
      "desc": "Building 70 Projects ranging from beginner to advanced so anyone can — learn from, build upon, use as a reference, or even copy directly. Gamified Cybersecurity learning 👇",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1007,
      "added_stars": 1903,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 17782,
      "added_stars": 3005,
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
      "author": "caddyserver",
      "repo": "caddy",
      "avatar": "https://github.com/caddyserver.png",
      "repo_link": "https://github.com/caddyserver/caddy",
      "desc": "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4948,
      "added_stars": 957,
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
      "author": "nektos",
      "repo": "act",
      "avatar": "https://github.com/nektos.png",
      "repo_link": "https://github.com/nektos/act",
      "desc": "Run your GitHub Actions locally 🚀",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2022,
      "added_stars": 510,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The task manager you actually own.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 676,
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
      "author": "putyy",
      "repo": "res-downloader",
      "avatar": "https://github.com/putyy.png",
      "repo_link": "https://github.com/putyy/res-downloader",
      "desc": "视频号、小程序、抖音、快手、小红书、直播流、m3u8、酷狗、QQ音乐等常见网络资源下载!",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2442,
      "added_stars": 780,
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
      "author": "github",
      "repo": "github-mcp-server",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/github-mcp-server",
      "desc": "GitHub's official MCP Server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4939,
      "added_stars": 824,
      "builtBy": [
        {
          "username": "SamMorrowDrums",
          "href": "https://github.com/SamMorrowDrums",
          "avatar": "https://avatars.githubusercontent.com/u/4811358"
        },
        {
          "username": "JoannaaKL",
          "href": "https://github.com/JoannaaKL",
          "avatar": "https://avatars.githubusercontent.com/u/67866556"
        },
        {
          "username": "mattdholloway",
          "href": "https://github.com/mattdholloway",
          "avatar": "https://avatars.githubusercontent.com/u/918573"
        }
      ]
    },
    {
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8996,
      "added_stars": 600,
      "builtBy": [
        {
          "username": "mislav",
          "href": "https://github.com/mislav",
          "avatar": "https://avatars.githubusercontent.com/u/887"
        },
        {
          "username": "vilmibm",
          "href": "https://github.com/vilmibm",
          "avatar": "https://avatars.githubusercontent.com/u/98482"
        },
        {
          "username": "BagToad",
          "href": "https://github.com/BagToad",
          "avatar": "https://avatars.githubusercontent.com/u/47394200"
        },
        {
          "username": "williammartin",
          "href": "https://github.com/williammartin",
          "avatar": "https://avatars.githubusercontent.com/u/1611510"
        },
        {
          "username": "babakks",
          "href": "https://github.com/babakks",
          "avatar": "https://avatars.githubusercontent.com/u/36728931"
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
      "forks": 8545,
      "added_stars": 4892,
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
      "author": "infiniflow",
      "repo": "ragflow",
      "avatar": "https://github.com/infiniflow.png",
      "repo_link": "https://github.com/infiniflow/ragflow",
      "desc": "RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context layer for LLMs",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10677,
      "added_stars": 3530,
      "builtBy": [
        {
          "username": "cike8899",
          "href": "https://github.com/cike8899",
          "avatar": "https://avatars.githubusercontent.com/u/8089971"
        },
        {
          "username": "KevinHuSh",
          "href": "https://github.com/KevinHuSh",
          "avatar": "https://avatars.githubusercontent.com/u/12318111"
        },
        {
          "username": "JinHai-CN",
          "href": "https://github.com/JinHai-CN",
          "avatar": "https://avatars.githubusercontent.com/u/33142505"
        },
        {
          "username": "dcc123456",
          "href": "https://github.com/dcc123456",
          "avatar": "https://avatars.githubusercontent.com/u/20180003"
        },
        {
          "username": "writinwaters",
          "href": "https://github.com/writinwaters",
          "avatar": "https://avatars.githubusercontent.com/u/93570324"
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
      "forks": 1289,
      "added_stars": 303,
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
      "forks": 281,
      "added_stars": 3395,
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
      "forks": 2779,
      "added_stars": 8284,
      "builtBy": [
        {
          "username": "qin-ctx",
          "href": "https://github.com/qin-ctx",
          "avatar": "https://avatars.githubusercontent.com/u/234610432"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ZaynJarvis",
          "href": "https://github.com/ZaynJarvis",
          "avatar": "https://avatars.githubusercontent.com/u/31875147"
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
      "forks": 1403,
      "added_stars": 9711,
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
      "author": "cactus-compute",
      "repo": "needle",
      "avatar": "https://github.com/cactus-compute.png",
      "repo_link": "https://github.com/cactus-compute/needle",
      "desc": "14MB foundation model for tiny devices; phones, wearables, smart home, and robots.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 682,
      "added_stars": 7313,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2703,
      "added_stars": 12027,
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
      "author": "marin-community",
      "repo": "marin",
      "avatar": "https://github.com/marin-community.png",
      "repo_link": "https://github.com/marin-community/marin",
      "desc": "Open-source framework for the research and development of foundation models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 288,
      "added_stars": 2360,
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
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 52784,
      "added_stars": 23852,
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
      "author": "megadose",
      "repo": "holehe",
      "avatar": "https://github.com/megadose.png",
      "repo_link": "https://github.com/megadose/holehe",
      "desc": "holehe allows you to check if the mail is used on different sites like twitter, instagram and will retrieve information on sites with the forgotten password function.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1884,
      "added_stars": 2905,
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
      "author": "3b1b",
      "repo": "manim",
      "avatar": "https://github.com/3b1b.png",
      "repo_link": "https://github.com/3b1b/manim",
      "desc": "Animation engine for explanatory math videos",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7689,
      "added_stars": 4372,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 18836,
      "added_stars": 20372,
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
      "forks": 1844,
      "added_stars": 3096,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Local UI to run and train LLMs and diffusion models. Supports GGUF, MLX, Qwen3.8, DeepSeek-V4, MiniMax-H3, Gemma 4, FLUX and more.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6916,
      "added_stars": 6434,
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
      "author": "MiaAI-Lab",
      "repo": "DeepSeek-v4-Flash-DSpark-2x-DGX-Spark",
      "avatar": "https://github.com/MiaAI-Lab.png",
      "repo_link": "https://github.com/MiaAI-Lab/DeepSeek-v4-Flash-DSpark-2x-DGX-Spark",
      "desc": "DeepSeek-v4-Flash 0731 recipe for 2x DGX Sparks",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 182,
      "added_stars": 828,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3467,
      "added_stars": 3915,
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
      "author": "blader",
      "repo": "humanizer",
      "avatar": "https://github.com/blader.png",
      "repo_link": "https://github.com/blader/humanizer",
      "desc": "Agent skill that removes signs of AI-generated writing from text",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3778,
      "added_stars": 11613,
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
      "author": "Tencent",
      "repo": "AI-Infra-Guard",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/AI-Infra-Guard",
      "desc": "A full-stack AI Red Teaming platform securing AI ecosystems via Agent Scan, Skills Scan, MCP scan, AI Infra scan and LLM jailbreak evaluation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 580,
      "added_stars": 1783,
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
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4008,
      "added_stars": 11256,
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
      "author": "abi",
      "repo": "screenshot-to-code",
      "avatar": "https://github.com/abi.png",
      "repo_link": "https://github.com/abi/screenshot-to-code",
      "desc": "Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9554,
      "added_stars": 4649,
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
      "author": "radixark",
      "repo": "miles",
      "avatar": "https://github.com/radixark.png",
      "repo_link": "https://github.com/radixark/miles",
      "desc": "Miles is an enterprise-facing reinforcement learning framework for LLM and VLM post-training, forked from and co-evolving with slime.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 467,
      "added_stars": 773,
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
      "forks": 7824,
      "added_stars": 5970,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3072,
      "added_stars": 4942,
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
      "author": "donnemartin",
      "repo": "system-design-primer",
      "avatar": "https://github.com/donnemartin.png",
      "repo_link": "https://github.com/donnemartin/system-design-primer",
      "desc": "Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 58327,
      "added_stars": 7348,
      "builtBy": [
        {
          "username": "donnemartin",
          "href": "https://github.com/donnemartin",
          "avatar": "https://avatars.githubusercontent.com/u/5458997"
        },
        {
          "username": "cclauss",
          "href": "https://github.com/cclauss",
          "avatar": "https://avatars.githubusercontent.com/u/3709715"
        },
        {
          "username": "satob",
          "href": "https://github.com/satob",
          "avatar": "https://avatars.githubusercontent.com/u/171818"
        },
        {
          "username": "fluency03",
          "href": "https://github.com/fluency03",
          "avatar": "https://avatars.githubusercontent.com/u/7440735"
        },
        {
          "username": "luisbg",
          "href": "https://github.com/luisbg",
          "avatar": "https://avatars.githubusercontent.com/u/303663"
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
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-09T01:45:36.000Z"
    },
    {
      "title": "A 60Hz low-latency multiplayer browser game on Cloudflare Durable Objects: how the netcode works",
      "url": "https://railmid.com/blog/how-it-works?utm_source=echojs",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-07T01:58:40.000Z"
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
      "comments": "0",
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
      "title": "Four Debian 13 Boxes, One Brief: 1,923 Packages on Metal, 328 in the Cloud",
      "description": "The same Debian 13 on a laptop and on AWS, GCE and Azure. The cloud images ship 328-350 packages against 1,923 on metal, no firmware package at all, and no tool to read the NVMe they all boot from. Each machine was then given the same brief and asked to analyse itself. Three of them agreed. The fourth found a partition table its own resize had broken.",
      "url": "https://dev.to/gde/four-debian-13-boxes-one-brief-1923-packages-on-metal-328-in-the-cloud-and-the-backup-gpt-cc2",
      "tags": "debian, linux, claudecode, devops",
      "reactions": 8,
      "comments": 1,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "4 pitfalls of loop engineering (and how to fix them)",
      "description": "Perhaps you've heard the term Loop Engineering: instead of solving a problem by hand, you build a...",
      "url": "https://dev.to/googleai/4-pitfalls-of-loop-engineering-and-how-to-fix-them-1ji2",
      "tags": "ai, agents, discuss",
      "reactions": 9,
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
      "title": "Welcome Thread - v 392",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-392-1kj4",
      "tags": "welcome",
      "reactions": 14,
      "comments": 60,
      "reading_time": 1,
      "author": "sloan"
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
      "reactions": 217,
      "comments": 115,
      "reading_time": 11,
      "author": "sylwia-lask"
    },
    {
      "title": "The Cable Buys Headroom: 91% of a USB 2.0 Bus, 3.6% of a Thunderbolt One",
      "description": "The best USB 2.0 pass in 45 tethering records used 91% of what that bus can usably carry. The same link on a SuperSpeed cable uses 3.6%. USB speed is autonegotiated between host, cable and device, the slowest one wins, and nothing anywhere tells you the cable capped you.",
      "url": "https://dev.to/gde/the-cable-buys-headroom-91-of-a-usb-20-bus-36-of-a-thunderbolt-one-563n",
      "tags": "linux, networking, usb, debugging",
      "reactions": 9,
      "comments": 1,
      "reading_time": 18,
      "author": "xbill"
    },
    {
      "title": "Stop rebuilding from scratch: cache Docker layers on Cloud Build",
      "description": "Cloud Build runs on ephemeral workers, so your Docker cache vanishes on every run. Here's how to persist it in Artifact Registry with BuildKit's registry cache — uv stops re-downloading dependencies, builds get faster, greener and cheaper.",
      "url": "https://dev.to/gde/stop-rebuilding-from-scratch-cache-docker-layers-on-cloud-build-41m0",
      "tags": "docker, googlecloud, python, devops",
      "reactions": 9,
      "comments": 1,
      "reading_time": 14,
      "author": "mazlum_tosun"
    },
    {
      "title": "My Grandmother Ran Ajo. I Built the Version Where the Pot Can't Walk Away",
      "description": "This is a submission for Weekend Challenge: Generosity Edition           What I Built   My late...",
      "url": "https://dev.to/dannwaneri/my-grandmother-ran-ajo-i-built-the-version-where-the-pot-cant-walk-away-5gkn",
      "tags": "weekendchallenge, devchallenge, solana, gemini",
      "reactions": 40,
      "comments": 2,
      "reading_time": 6,
      "author": "dannwaneri"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-40ma",
      "tags": "top7, discuss",
      "reactions": 56,
      "comments": 25,
      "reading_time": 3,
      "author": "heyitsjem"
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
      "title": "Some (mostly historical) issues with the Unix load average",
      "url": "https://utcc.utoronto.ca/~cks/space/blog/unix/LoadAverageHistoricalIssues",
      "score": 1,
      "comments": 0,
      "tags": [
        "historical",
        "unix"
      ],
      "id": "26liff"
    },
    {
      "title": "SystemIO conflicts are not firmware bugs",
      "url": "https://codon.org.uk/~mjg59/blog/p/systemio-conflicts-are-not-firmware-bugs/",
      "score": 6,
      "comments": 0,
      "tags": [
        "hardware",
        "osdev"
      ],
      "id": "jz8fmz"
    },
    {
      "title": "Review a pull request by booting it",
      "url": "https://fzakaria.com/2026/09/09/review-a-pull-request-by-booting-it",
      "score": 2,
      "comments": 0,
      "tags": [
        "nix",
        "vibecoding"
      ],
      "id": "7lii0g"
    },
    {
      "title": "my philosophy on banning AI in projects",
      "url": "https://cyrneko.eu/posts/ai-philosophy.html",
      "score": 5,
      "comments": 0,
      "tags": [
        "culture",
        "vibecoding"
      ],
      "id": "5xlbx9"
    },
    {
      "title": "An alignment assessment of recent cybersecurity incidents",
      "url": "https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents",
      "score": 2,
      "comments": 0,
      "tags": [
        "ai",
        "security"
      ],
      "id": "xokuhi"
    },
    {
      "title": "DIFF: A Relational Interface for Large-Scale Data Explanation",
      "url": "https://andrewxiwu.github.io/public/papers/2019/macrobase-sql-VLDB2019.pdf",
      "score": 2,
      "comments": 0,
      "tags": [
        "databases",
        "pdf"
      ],
      "id": "qlhcr5"
    },
    {
      "title": "Efficient and accurate systems for querying unstructured data",
      "url": "https://stacks.stanford.edu/file/fk030tb6783/thesis-augmented.pdf",
      "score": 3,
      "comments": 0,
      "tags": [
        "ai",
        "databases",
        "pdf"
      ],
      "id": "v8atna"
    },
    {
      "title": "Bulk AbuseIPDB reporting using command-line tools",
      "url": "https://blog.mbirth.uk/2026/08/30/bulk-abuseipdb-reporting-using-command-line-tools.html",
      "score": 3,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "vjds7h"
    },
    {
      "title": "ID design and primary keys",
      "url": "https://anchorsandlinks.com/posts/primary-keys/",
      "score": 13,
      "comments": 4,
      "tags": [
        "databases"
      ],
      "id": "tiltfq"
    },
    {
      "title": "Better AI code comment detector",
      "url": "https://entropicthoughts.com/better-ai-comment-classifier",
      "score": 6,
      "comments": 2,
      "tags": [
        "ai",
        "math",
        "vibecoding"
      ],
      "id": "o9cyiv"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "thecosmicfrog",
      "descendants": 1956,
      "id": 49630931,
      "kids": [
        49638923,
        49639299,
        49639035,
        49632516,
        49639162,
        49633341,
        49638380,
        49633307,
        49631599,
        49631894,
        49630973,
        49638927,
        49631177,
        49631048,
        49639179,
        49639069,
        49631501,
        49631850,
        49631776,
        49638409,
        49637566,
        49633379,
        49630801,
        49631500,
        49631002,
        49631119,
        49631798,
        49631161,
        49631531,
        49631652,
        49631060,
        49631920,
        49631403,
        49630826,
        49633992,
        49631347,
        49636391,
        49632169,
        49631068,
        49631458,
        49631122,
        49630970,
        49631903,
        49638710,
        49638520,
        49638763,
        49638140,
        49631506,
        49631792,
        49638954,
        49631209,
        49631117,
        49630884,
        49631008,
        49632706,
        49638391,
        49639147,
        49632164,
        49631299,
        49631620,
        49631190,
        49630968,
        49633810,
        49633490,
        49631474,
        49637825,
        49631653,
        49631995,
        49632225,
        49631572,
        49633048,
        49631914,
        49634255,
        49632467,
        49634616,
        49631124,
        49632961,
        49638122,
        49637177,
        49631857,
        49638772,
        49638148,
        49631337,
        49632251,
        49638228,
        49636556,
        49631277,
        49638261,
        49632371,
        49631795,
        49632304,
        49633744,
        49638699,
        49635097,
        49631597,
        49633264,
        49630886,
        49632135,
        49632472,
        49638464,
        49631464,
        49634567,
        49631910,
        49635496,
        49631141,
        49632184,
        49631239,
        49633429,
        49630872,
        49631617,
        49631432,
        49632055,
        49631087,
        49632944,
        49632083,
        49636248,
        49631175,
        49631761,
        49635229,
        49633831,
        49632683,
        49636348,
        49631144,
        49631878,
        49638300,
        49632063,
        49636339,
        49630976,
        49633509,
        49637883,
        49637102,
        49632215,
        49634079,
        49630990,
        49631138,
        49633790,
        49638427,
        49638804,
        49632614,
        49632708,
        49632263,
        49633074,
        49634529,
        49638666,
        49630848,
        49631266,
        49631099,
        49634695,
        49631381,
        49636361,
        49634715,
        49638199,
        49631959,
        49631123,
        49636118,
        49634253,
        49630796,
        49630883,
        49634617,
        49635289,
        49633560,
        49635830,
        49632971,
        49631205,
        49631294,
        49631614,
        49635774,
        49631869,
        49632627,
        49631040,
        49632366,
        49633682,
        49631495,
        49631049,
        49634817,
        49637577,
        49631105,
        49637408,
        49635972,
        49638476,
        49630983,
        49638467,
        49635567,
        49632065,
        49631056,
        49632813,
        49632793,
        49634088,
        49631109,
        49633444,
        49632681,
        49632628,
        49633097,
        49637189,
        49631611,
        49634854,
        49631041,
        49631206,
        49633334,
        49634162,
        49634263,
        49636813,
        49631241,
        49634795,
        49631292,
        49633766,
        49635560,
        49631136,
        49633210,
        49633246,
        49638466,
        49635670,
        49631862,
        49631603,
        49638583,
        49630992,
        49631032,
        49631356,
        49637820,
        49631946,
        49631132,
        49631312,
        49632086,
        49632733,
        49634426,
        49632429,
        49631666,
        49631130,
        49634138,
        49633936,
        49637662,
        49634704,
        49634595,
        49631784,
        49631030,
        49631309,
        49631566,
        49631554,
        49636140,
        49631843,
        49631747,
        49631237,
        49633902,
        49637176,
        49633544,
        49637149,
        49637061,
        49634433,
        49632740,
        49632891,
        49632843,
        49635451,
        49634196,
        49631678,
        49631626,
        49634075,
        49631086,
        49630940,
        49638057,
        49631676,
        49638866,
        49633365,
        49633804,
        49632216,
        49631840,
        49631005,
        49635749,
        49631227,
        49635653,
        49635406,
        49635402,
        49634221,
        49631544,
        49638698,
        49633881,
        49633636,
        49633589,
        49633269,
        49633167,
        49632866,
        49632776,
        49632743,
        49631053,
        49632343,
        49632245,
        49630881,
        49632123,
        49632099,
        49636770,
        49633588,
        49631864,
        49631851,
        49631801,
        49631789,
        49631751,
        49631397,
        49631396,
        49631303,
        49636620,
        49631069,
        49631037,
        49631018,
        49630991,
        49630952,
        49630699,
        49637265,
        49632563,
        49632361,
        49635605,
        49631368,
        49631765,
        49636120,
        49634939,
        49633082,
        49633215,
        49632279,
        49633464,
        49636467,
        49631336,
        49637645,
        49632022,
        49631184,
        49637792,
        49631254,
        49633175,
        49634582,
        49633896,
        49631250,
        49632983,
        49632480,
        49631950,
        49631402,
        49631110,
        49635960,
        49632314,
        49631738,
        49633890,
        49631467,
        49631712,
        49631526,
        49631061,
        49631052,
        49631651,
        49632652,
        49631007,
        49631512,
        49638347,
        49631574,
        49631725,
        49635471,
        49631100,
        49632244,
        49634566,
        49631660,
        49631296
      ],
      "score": 1108,
      "time": 1788977743,
      "title": "iPhone Duo",
      "type": "story",
      "url": "https://www.apple.com/iphone-duo/"
    },
    {
      "by": "dmitrybrant",
      "descendants": 87,
      "id": 49637385,
      "kids": [
        49639320,
        49639279,
        49639144,
        49639215,
        49638203,
        49637822,
        49638920,
        49639175,
        49638737,
        49639180,
        49637739,
        49637771,
        49637911,
        49638823,
        49639153,
        49637850,
        49637702,
        49638681,
        49638616,
        49638707,
        49638743,
        49638880,
        49638243,
        49638607,
        49639142,
        49637679,
        49638657,
        49638188,
        49637715,
        49637918,
        49638620,
        49637663,
        49638341,
        49638197,
        49638183,
        49637847,
        49637756,
        49639042,
        49638732
      ],
      "score": 199,
      "text": "I&#x27;ve always wanted to make a visualization where the speed of light was scaled down to human speeds, so that we could intuit relativistic effects with everyday objects. Here is the first version of it!",
      "time": 1789005480,
      "title": "Show HN: What if the speed of light was 5 km/h?",
      "type": "story",
      "url": "https://rivendell.dmitrybrant.com/relativity/"
    },
    {
      "by": "yurivish",
      "descendants": 8,
      "id": 49638280,
      "kids": [
        49639295,
        49639080,
        49639269,
        49639298,
        49639237,
        49639118,
        49639057
      ],
      "score": 38,
      "time": 1789013078,
      "title": "All grown-ups were once children… but only few of them remember it",
      "type": "story",
      "url": "https://mathstodon.xyz/@tao/117244102901892965"
    },
    {
      "by": "bananaboy",
      "descendants": 20,
      "id": 49603265,
      "kids": [
        49639122,
        49639246,
        49639242,
        49638860,
        49639119,
        49639044,
        49639133,
        49639156,
        49639067,
        49638961
      ],
      "score": 51,
      "time": 1788817331,
      "title": "Version Control Second Coming",
      "type": "story",
      "url": "https://psantosl.github.io/posts/version-control-second-coming/"
    },
    {
      "by": "geotp",
      "descendants": 10,
      "id": 49587465,
      "kids": [
        49639281,
        49639240,
        49639082,
        49587466,
        49639092,
        49639026,
        49638632,
        49639013,
        49638720
      ],
      "score": 66,
      "time": 1788708539,
      "title": "ESP32 Bit Pirate Hardware Hacking Kit with Web Tools That Speaks Every Protocol",
      "type": "story",
      "url": "https://geo-tp.github.io/ESP32-Bit-Pirate/"
    },
    {
      "by": "olalonde",
      "descendants": 1,
      "id": 49621018,
      "kids": [
        49639288
      ],
      "score": 12,
      "time": 1788928342,
      "title": "Larger Pacific Striped Octopus",
      "type": "story",
      "url": "https://en.wikipedia.org/wiki/Larger_Pacific_striped_octopus"
    },
    {
      "by": "EdwinHoksberg",
      "descendants": 384,
      "id": 49626190,
      "kids": [
        49626354,
        49626734,
        49626416,
        49630202,
        49626765,
        49634327,
        49637823,
        49626503,
        49626737,
        49627177,
        49626778,
        49626547,
        49628623,
        49634822,
        49638144,
        49629044,
        49629269,
        49638519,
        49626772,
        49627466,
        49638373,
        49629279,
        49627954,
        49626448,
        49626664,
        49626405,
        49630351,
        49626265,
        49636205,
        49628272,
        49635509,
        49630183,
        49626443,
        49626656,
        49636593,
        49627049,
        49626456,
        49632538,
        49636305,
        49629114,
        49626720,
        49627179,
        49630652,
        49634410,
        49630063,
        49635780,
        49626571,
        49626759,
        49630494,
        49627010,
        49627419,
        49637841,
        49626852,
        49626325,
        49631642,
        49627660,
        49626669,
        49637032,
        49637580,
        49634882,
        49629232,
        49626452,
        49627382,
        49626323,
        49627787,
        49630304,
        49630107,
        49630092,
        49632254,
        49629686,
        49629477,
        49626999,
        49626701,
        49626368,
        49626402,
        49627753,
        49626670,
        49635136,
        49629534,
        49637402,
        49636483,
        49628567,
        49627088,
        49630426,
        49626387,
        49627925
      ],
      "score": 984,
      "time": 1788960431,
      "title": "Shopify acquires Tailwind",
      "type": "story",
      "url": "https://tailwindcss.com/blog/tailwind-is-joining-shopify"
    },
    {
      "by": "evakhoury",
      "descendants": 260,
      "id": 49614280,
      "kids": [
        49632403,
        49632963,
        49631180,
        49633004,
        49631805,
        49636627,
        49634056,
        49632226,
        49631941,
        49635717,
        49637733,
        49635649,
        49631598,
        49632999,
        49632322,
        49633959,
        49631616,
        49631621,
        49630682,
        49635389,
        49632172,
        49633066,
        49632303,
        49637398,
        49634626,
        49631185,
        49636169
      ],
      "score": 476,
      "time": 1788891065,
      "title": "What do Visa and Mastercard do? An intro to card networks",
      "type": "story",
      "url": "https://tautology.town/2026/06/01/card-networks.html"
    },
    {
      "by": "bookofjoe",
      "descendants": 519,
      "id": 49629886,
      "kids": [
        49635397,
        49633788,
        49634152,
        49638541,
        49637730,
        49633760,
        49639164,
        49630012,
        49637410,
        49638864,
        49630056,
        49639222,
        49630199,
        49635011,
        49637263,
        49638210,
        49636090,
        49630265,
        49630348,
        49630217,
        49638586,
        49637186,
        49635238,
        49636910,
        49636923,
        49637521,
        49634812,
        49634496,
        49634804,
        49631125,
        49637017,
        49630137,
        49637026,
        49635395,
        49636504,
        49630488,
        49636607,
        49634439,
        49637039,
        49634343,
        49630696,
        49638357,
        49635820,
        49630892,
        49638070,
        49630114,
        49636862,
        49637743,
        49633630,
        49634778,
        49633795,
        49637084,
        49637150,
        49637008,
        49636975,
        49635443,
        49634050,
        49638633,
        49630282,
        49636840,
        49636363,
        49632623,
        49637234,
        49636441,
        49629978,
        49634798
      ],
      "score": 309,
      "time": 1788974099,
      "title": "Growing proof that autonomous cars save lives",
      "type": "story",
      "url": "https://spectrum.ieee.org/are-self-driving-cars-safe"
    },
    {
      "by": "Anon84",
      "descendants": 6,
      "id": 49637435,
      "kids": [
        49638604,
        49638325,
        49638048,
        49638987
      ],
      "score": 44,
      "time": 1789005851,
      "title": "Training a 3.8B LLM to 0.384 CORE for $998 – Hugo Vergnes",
      "type": "story",
      "url": "https://hugovergnes.github.io/little-lm-3-8b/"
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
      "title": "I spend a stupid amount of time on an issue I only half-care about. Now I will foist it on all of you! Enjoy :P",
      "url": "https://arewetauyet.dev",
      "permalink": "https://www.reddit.com/r/programming/comments/1wbhjda/i_spend_a_stupid_amount_of_time_on_an_issue_i/",
      "author": "/u/GetAGripGal",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/GetAGripGal [link] &#32; [comments]",
      "published": "2026-09-09T10:15:40+00:00"
    },
    {
      "title": "Optimizing a Spin-Lock",
      "url": "https://david.alvarezrosa.com/posts/optimizing-a-spin-lock/",
      "permalink": "https://www.reddit.com/r/programming/comments/1wbr6an/optimizing_a_spinlock/",
      "author": "/u/david-alvarez-rosa",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/david-alvarez-rosa [link] &#32; [comments]",
      "published": "2026-09-09T16:54:06+00:00"
    },
    {
      "title": "Introducing CUDA Rust: Two Tracks for Writing GPU Kernels",
      "url": "https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/",
      "permalink": "https://www.reddit.com/r/programming/comments/1wblvwx/introducing_cuda_rust_two_tracks_for_writing_gpu/",
      "author": "/u/unixmachine",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/unixmachine [link] &#32; [comments]",
      "published": "2026-09-09T13:39:17+00:00"
    },
    {
      "title": "Compute Polynomials Twice as Fast",
      "url": "https://thomasahle.com/fast-polynomials/",
      "permalink": "https://www.reddit.com/r/programming/comments/1wbgcke/compute_polynomials_twice_as_fast/",
      "author": "/u/thomasahle",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/thomasahle [link] &#32; [comments]",
      "published": "2026-09-09T09:08:35+00:00"
    },
    {
      "title": "High-performance Database Architecture - Interview with Tyler Cloutier",
      "url": "https://youtu.be/ONxwjqFjP3A?is=_gVse0n3r6tFDsgg",
      "permalink": "https://www.reddit.com/r/programming/comments/1wbwkvz/highperformance_database_architecture_interview/",
      "author": "/u/max123246",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/max123246 [link] &#32; [comments]",
      "published": "2026-09-09T20:02:37+00:00"
    },
    {
      "title": "A Design Space Exploration of Async/Await",
      "url": "https://cel.cs.brown.edu/blog/design-space-async-await/",
      "permalink": "https://www.reddit.com/r/programming/comments/1wbw0pa/a_design_space_exploration_of_asyncawait/",
      "author": "/u/alexeyr",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/alexeyr [link] &#32; [comments]",
      "published": "2026-09-09T19:43:05+00:00"
    },
    {
      "title": "Decoding the NEC V20 Microcode",
      "url": "https://martypc.blogspot.com/2026/09/decoding-nec-v20-microcode.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1wc3hjq/decoding_the_nec_v20_microcode/",
      "author": "/u/self",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/self [link] &#32; [comments]",
      "published": "2026-09-10T00:30:15+00:00"
    },
    {
      "title": "Implementation of GCC's Nested Functions (vs. C++ Lambdas)",
      "url": "https://uecker.codeberg.page/2026-09-05.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1wboyhf/implementation_of_gccs_nested_functions_vs_c/",
      "author": "/u/lelanthran",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/lelanthran [link] &#32; [comments]",
      "published": "2026-09-09T15:34:37+00:00"
    },
    {
      "title": "Diskless Kafka: Object Storage, KIP-1150, and Kafka’s Future",
      "url": "https://softwaremill.com/diskless-kafka-object-storage-kip-1150-and-kafkas-future/",
      "permalink": "https://www.reddit.com/r/programming/comments/1wbfz9o/diskless_kafka_object_storage_kip1150_and_kafkas/",
      "author": "/u/mmatloka",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/mmatloka [link] &#32; [comments]",
      "published": "2026-09-09T08:46:53+00:00"
    },
    {
      "title": "Every Millisecond Counts",
      "url": "https://jordivillar.com/blog/every-millisecond-counts",
      "permalink": "https://www.reddit.com/r/programming/comments/1wbplpd/every_millisecond_counts/",
      "author": "/u/jrdi_",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/jrdi_ [link] &#32; [comments]",
      "published": "2026-09-09T15:58:29+00:00"
    },
    {
      "title": "Asteroids in 9 different programming languages",
      "url": "https://youtu.be/ftMJNx6hDrE",
      "permalink": "https://www.reddit.com/r/programming/comments/1wbjaju/asteroids_in_9_different_programming_languages/",
      "author": "/u/waozen",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "The languages used: C, C3, C++, D (Dlang), Go (Golang), Odin, Rust, V (Vlang), Zig &#32; submitted by &#32; /u/waozen [link] &#32; [comments]",
      "published": "2026-09-09T11:47:10+00:00"
    },
    {
      "title": "Edward Patel - 6502 Nostalgia",
      "url": "https://www.youtube.com/watch?v=eydE_Aa-0KE",
      "permalink": "https://www.reddit.com/r/programming/comments/1wbo5h1/edward_patel_6502_nostalgia/",
      "author": "/u/_a4z",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "A journey from the Visual6502 project to a real, fully assembled board, and the debugging adventures required to make it actually work. &#32; submitted by &#32; /u/_a4z [link] &#32; [comments]",
      "published": "2026-09-09T15:05:08+00:00"
    },
    {
      "title": "There is no 10x RBAC",
      "url": "https://infisical.com/blog/folder-based-rbac",
      "permalink": "https://www.reddit.com/r/programming/comments/1wbzvcs/there_is_no_10x_rbac/",
      "author": "/u/finncmdbar",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/finncmdbar [link] &#32; [comments]",
      "published": "2026-09-09T22:02:59+00:00"
    },
    {
      "title": "A GitHub Action that fails pull requests with too many comments",
      "url": "https://github.com/marketplace/actions/comment-ratio",
      "permalink": "https://www.reddit.com/r/programming/comments/1wbjodr/a_github_action_that_fails_pull_requests_with_too/",
      "author": "/u/Nebulic",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Nebulic [link] &#32; [comments]",
      "published": "2026-09-09T12:04:36+00:00"
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
      "title": "The Mathematicians Just Felt It: What Happens to a Lifetime of Work When a Machine Finishes It in Days?",
      "description": "Somewhere this week, a mathematician woke up, made coffee, and read the news that the problem they'd...",
      "url": "https://dev.to/james_anderson_h/the-mathematicians-just-felt-it-what-happens-to-a-lifetime-of-work-when-a-machine-finishes-it-in-1i8i",
      "tags": "ai, career, discuss, mentalhealth",
      "reactions": 16,
      "comments": 20,
      "reading_time": 7,
      "author": "james_anderson_h"
    },
    {
      "title": "I let AI write 100% of my code for 30 days. Here's what broke.",
      "description": "Not \"AI-assisted.\" Not \"copilot suggestions I edited.\" I mean I made a rule: for 30 days, I don't...",
      "url": "https://dev.to/infoinlet1/i-let-ai-write-100-of-my-code-for-30-days-heres-what-broke-1aa0",
      "tags": "ai, webdev, programming, career",
      "reactions": 32,
      "comments": 7,
      "reading_time": 5,
      "author": "infoinlet1"
    },
    {
      "title": "Has AI Made You A Lazier Developer? Be Honest.",
      "description": "Haven't you ever wondered if this AI vibe coding has made us lazy? Who's been solving problems on...",
      "url": "https://dev.to/nazar-boyko/has-ai-made-you-a-lazier-developer-be-honest-5ack",
      "tags": "discuss, ai, productivity, career",
      "reactions": 78,
      "comments": 27,
      "reading_time": 4,
      "author": "nazar-boyko"
    },
    {
      "title": "If You Understand These 5 AI Terms, You're Ahead of 90% of People",
      "description": "A few months back I sat in a meeting where someone said, dead serious, \"we should fine-tune the RAG.\"...",
      "url": "https://dev.to/rahmanfrr/if-you-understand-these-5-ai-terms-youre-ahead-of-90-of-people-53h2",
      "tags": "ai, beginners, productivity, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "rahmanfrr"
    },
    {
      "title": "I'm 12. I found an ocean no market report can see. I call it Ocean Zero. ",
      "description": "Every market report on Earth agrees: there are about 30 million software developers on the...",
      "url": "https://dev.to/koda2026/im-12-i-found-an-ocean-no-market-report-can-see-i-call-it-ocean-zero-292c",
      "tags": "ai, beginners, career, webdev",
      "reactions": 5,
      "comments": 1,
      "reading_time": 3,
      "author": "koda2026"
    },
    {
      "title": "The Hard Truth About Data Engineering Interviews Nobody Tells You",
      "description": "LeetCode won't save you. SQL will. Here's what data engineering interviews actually test, with real examples.",
      "url": "https://dev.to/rahmanfrr/the-hard-truth-about-data-engineering-interviews-nobody-tells-you-235c",
      "tags": "dataengineering, interview, career, sql",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "rahmanfrr"
    },
    {
      "title": "Why Learning Data Engineering Is Still a Smart Bet in 2026 (Even With AI Eating the Easy Parts)",
      "description": "A friend messaged me last month, half-panicking: \"Isn't AI going to write all the ETL pipelines soon?...",
      "url": "https://dev.to/rahmanfrr/why-learning-data-engineering-is-still-a-smart-bet-in-2026-even-with-ai-eating-the-easy-parts-4poa",
      "tags": "dataengineering, career, sql, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "rahmanfrr"
    },
    {
      "title": "Your Reputation Is Built From Small Promises",
      "description": "People think reputation is made of big moments.  The rescue.  The outage you fixed at midnight.  The...",
      "url": "https://dev.to/sergueyasaelshinder/your-reputation-is-built-from-small-promises-5bgc",
      "tags": "sergueyasaelshinder, mindset, career, trust",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "sergueyasaelshinder"
    },
    {
      "title": "Whiteboard interviews died the day AI could solve them live",
      "description": "The whiteboard interview went away not because it was inhumane, but because it lost out to a bot that...",
      "url": "https://dev.to/adioof/whiteboard-interviews-died-the-day-ai-could-solve-them-live-lag",
      "tags": "hiring, career, opinion, discuss",
      "reactions": 1,
      "comments": 2,
      "reading_time": 3,
      "author": "adioof"
    },
    {
      "title": "Nem tudo que reluz, é ouro...",
      "description": "Mantendo a coerência temporal de meus textos, escrevo esse texto 1 ano e 17 dias após a minha...",
      "url": "https://dev.to/wivsonmachado/nem-tudo-que-reluz-e-ouro-3f94",
      "tags": "webdev, career, careerdevelopment, braziliandevs",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "wivsonmachado"
    }
  ]
}
```

