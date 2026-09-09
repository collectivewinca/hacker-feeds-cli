# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-09 06:38:57 UTC

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
      "forks": 3609,
      "added_stars": 1014,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1548,
      "added_stars": 935,
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
      "forks": 4408,
      "added_stars": 3886,
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
      "author": "every-app",
      "repo": "open-seo",
      "avatar": "https://github.com/every-app.png",
      "repo_link": "https://github.com/every-app/open-seo",
      "desc": "Open source alternative to Semrush and Ahrefs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2267,
      "added_stars": 1846,
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
      "forks": 8486,
      "added_stars": 1585,
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
      "author": "Effect-TS",
      "repo": "effect",
      "avatar": "https://github.com/Effect-TS.png",
      "repo_link": "https://github.com/Effect-TS/effect",
      "desc": "Build production-ready applications in TypeScript",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 729,
      "added_stars": 331,
      "builtBy": [
        {
          "username": "mikearnaldi",
          "href": "https://github.com/mikearnaldi",
          "avatar": "https://avatars.githubusercontent.com/u/24249610"
        },
        {
          "username": "tim-smart",
          "href": "https://github.com/tim-smart",
          "avatar": "https://avatars.githubusercontent.com/u/40680"
        },
        {
          "username": "gcanti",
          "href": "https://github.com/gcanti",
          "avatar": "https://avatars.githubusercontent.com/u/878912"
        },
        {
          "username": "fubhy",
          "href": "https://github.com/fubhy",
          "avatar": "https://avatars.githubusercontent.com/u/1172528"
        }
      ]
    },
    {
      "author": "magnitudedev",
      "repo": "magnitude",
      "avatar": "https://github.com/magnitudedev.png",
      "repo_link": "https://github.com/magnitudedev/magnitude",
      "desc": "Open source inference server for Apple silicon. Profiles your Mac, recommends the best models for it, then downloads, tunes, and runs them. Plugs into Pi, OpenCode, Hermes, OpenClaw, Codex, Claude Code, Oh My Pi, and Cline.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 303,
      "added_stars": 2648,
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
      "author": "Gitlawb",
      "repo": "openclaude",
      "avatar": "https://github.com/Gitlawb.png",
      "repo_link": "https://github.com/Gitlawb/openclaude",
      "desc": "runs anywhere. uses anything",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9068,
      "added_stars": 1932,
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
      "author": "humanlayer",
      "repo": "skills",
      "avatar": "https://github.com/humanlayer.png",
      "repo_link": "https://github.com/humanlayer/skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 106,
      "added_stars": 2930,
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
      "author": "BraveOPotato",
      "repo": "FckSignups",
      "avatar": "https://github.com/BraveOPotato.png",
      "repo_link": "https://github.com/BraveOPotato/FckSignups",
      "desc": "A list of tools that are open-source, in-browser, and require no-signups!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 240,
      "added_stars": 1568,
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
      "author": "mlc-ai",
      "repo": "web-llm",
      "avatar": "https://github.com/mlc-ai.png",
      "repo_link": "https://github.com/mlc-ai/web-llm",
      "desc": "High-performance In-browser LLM Inference Engine",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1374,
      "added_stars": 375,
      "builtBy": [
        {
          "username": "CharlieFRuan",
          "href": "https://github.com/CharlieFRuan",
          "avatar": "https://avatars.githubusercontent.com/u/53290280"
        },
        {
          "username": "tqchen",
          "href": "https://github.com/tqchen",
          "avatar": "https://avatars.githubusercontent.com/u/2577440"
        },
        {
          "username": "Neet-Nestor",
          "href": "https://github.com/Neet-Nestor",
          "avatar": "https://avatars.githubusercontent.com/u/23090573"
        },
        {
          "username": "MasterJH5574",
          "href": "https://github.com/MasterJH5574",
          "avatar": "https://avatars.githubusercontent.com/u/45167100"
        },
        {
          "username": "akaashrp",
          "href": "https://github.com/akaashrp",
          "avatar": "https://avatars.githubusercontent.com/u/43900735"
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
      "forks": 4027,
      "added_stars": 539,
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
      "author": "THU-MAIC",
      "repo": "OpenMAIC",
      "avatar": "https://github.com/THU-MAIC.png",
      "repo_link": "https://github.com/THU-MAIC/OpenMAIC",
      "desc": "Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5459,
      "added_stars": 4380,
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
      "author": "pascalorg",
      "repo": "editor",
      "avatar": "https://github.com/pascalorg.png",
      "repo_link": "https://github.com/pascalorg/editor",
      "desc": "Create and share 3D architectural projects.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2883,
      "added_stars": 814,
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
      "forks": 254,
      "added_stars": 727,
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
      "author": "anomalyco",
      "repo": "opencode",
      "avatar": "https://github.com/anomalyco.png",
      "repo_link": "https://github.com/anomalyco/opencode",
      "desc": "The open source coding agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 26900,
      "added_stars": 3100,
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
      "author": "vercel-labs",
      "repo": "portless",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/portless",
      "desc": "Replace port numbers with stable, named local URLs. For humans and agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 409,
      "added_stars": 886,
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
          "username": "tomdale",
          "href": "https://github.com/tomdale",
          "avatar": "https://avatars.githubusercontent.com/u/90888"
        },
        {
          "username": "gerardbalaoro",
          "href": "https://github.com/gerardbalaoro",
          "avatar": "https://avatars.githubusercontent.com/u/13101267"
        }
      ]
    },
    {
      "author": "pmndrs",
      "repo": "react-three-fiber",
      "avatar": "https://github.com/pmndrs.png",
      "repo_link": "https://github.com/pmndrs/react-three-fiber",
      "desc": "🇨🇭 A React renderer for Three.js",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1962,
      "added_stars": 359,
      "builtBy": [
        {
          "username": "drcmda",
          "href": "https://github.com/drcmda",
          "avatar": "https://avatars.githubusercontent.com/u/2223602"
        },
        {
          "username": "CodyJasonBennett",
          "href": "https://github.com/CodyJasonBennett",
          "avatar": "https://avatars.githubusercontent.com/u/23324155"
        },
        {
          "username": "joshuaellis",
          "href": "https://github.com/joshuaellis",
          "avatar": "https://avatars.githubusercontent.com/u/37798644"
        },
        {
          "username": "krispya",
          "href": "https://github.com/krispya",
          "avatar": "https://avatars.githubusercontent.com/u/7064954"
        },
        {
          "username": "birkir",
          "href": "https://github.com/birkir",
          "avatar": "https://avatars.githubusercontent.com/u/180773"
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
      "forks": 798,
      "added_stars": 188,
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
      "forks": 920,
      "added_stars": 1252,
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
      "forks": 1450,
      "added_stars": 832,
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
      "added_stars": 678,
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
      "forks": 1002,
      "added_stars": 1162,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 307,
      "added_stars": 672,
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
      "author": "google",
      "repo": "osv-scanner",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/osv-scanner",
      "desc": "Vulnerability scanner written in Go which uses the data provided by https://osv.dev",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 789,
      "added_stars": 229,
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
          "username": "cuixq",
          "href": "https://github.com/cuixq",
          "avatar": "https://avatars.githubusercontent.com/u/72771658"
        },
        {
          "username": "osv-robot",
          "href": "https://github.com/osv-robot",
          "avatar": "https://avatars.githubusercontent.com/u/80022306"
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
      "forks": 4945,
      "added_stars": 955,
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
      "author": "authelia",
      "repo": "authelia",
      "avatar": "https://github.com/authelia.png",
      "repo_link": "https://github.com/authelia/authelia",
      "desc": "The Single Sign-On Multi-Factor portal for web apps. OpenID Certified™ and Post-Quantum Cryptography Ready.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1476,
      "added_stars": 348,
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
      "author": "nektos",
      "repo": "act",
      "avatar": "https://github.com/nektos.png",
      "repo_link": "https://github.com/nektos/act",
      "desc": "Run your GitHub Actions locally 🚀",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2021,
      "added_stars": 504,
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
      "author": "gtsteffaniak",
      "repo": "filebrowser",
      "avatar": "https://github.com/gtsteffaniak.png",
      "repo_link": "https://github.com/gtsteffaniak/filebrowser",
      "desc": "📂 Web File Browser",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 428,
      "added_stars": 513,
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
      "author": "github",
      "repo": "github-mcp-server",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/github-mcp-server",
      "desc": "GitHub's official MCP Server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4938,
      "added_stars": 845,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 173,
      "added_stars": 1825,
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
      "forks": 1008,
      "added_stars": 1913,
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
      "forks": 17777,
      "added_stars": 3013,
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
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 1Panel is a modern, open-source Linux server management panel and a lightweight AI management platform.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3341,
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
      "author": "infiniflow",
      "repo": "ragflow",
      "avatar": "https://github.com/infiniflow.png",
      "repo_link": "https://github.com/infiniflow/ragflow",
      "desc": "RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context layer for LLMs",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10662,
      "added_stars": 3472,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8994,
      "added_stars": 605,
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
      "author": "go-task",
      "repo": "task",
      "avatar": "https://github.com/go-task.png",
      "repo_link": "https://github.com/go-task/task",
      "desc": "A fast, cross-platform build tool inspired by Make, designed for modern workflows.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 904,
      "added_stars": 193,
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
      "author": "traefik",
      "repo": "traefik",
      "avatar": "https://github.com/traefik.png",
      "repo_link": "https://github.com/traefik/traefik",
      "desc": "The Cloud Native Application Proxy",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6192,
      "added_stars": 571,
      "builtBy": [
        {
          "username": "ldez",
          "href": "https://github.com/ldez",
          "avatar": "https://avatars.githubusercontent.com/u/5674651"
        },
        {
          "username": "emilevauge",
          "href": "https://github.com/emilevauge",
          "avatar": "https://avatars.githubusercontent.com/u/6207234"
        },
        {
          "username": "rtribotte",
          "href": "https://github.com/rtribotte",
          "avatar": "https://avatars.githubusercontent.com/u/13045437"
        },
        {
          "username": "kevinpollet",
          "href": "https://github.com/kevinpollet",
          "avatar": "https://avatars.githubusercontent.com/u/299142"
        },
        {
          "username": "mmatur",
          "href": "https://github.com/mmatur",
          "avatar": "https://avatars.githubusercontent.com/u/1776972"
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
      "forks": 677,
      "added_stars": 340,
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API 一站式开源中转服务，让 Claude、Openai 、Gemini、Grok订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8524,
      "added_stars": 4832,
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
      "forks": 282,
      "added_stars": 3348,
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
      "author": "semantica-agi",
      "repo": "semantica",
      "avatar": "https://github.com/semantica-agi.png",
      "repo_link": "https://github.com/semantica-agi/semantica",
      "desc": "Graph-Native Infrastructure for Context and Accountable AI Systems",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1394,
      "added_stars": 9951,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2754,
      "added_stars": 8115,
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
      "author": "cactus-compute",
      "repo": "needle",
      "avatar": "https://github.com/cactus-compute.png",
      "repo_link": "https://github.com/cactus-compute/needle",
      "desc": "14MB foundation model for tiny devices; phones, wearables, smart home, and robots.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 677,
      "added_stars": 7220,
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
      "forks": 2659,
      "added_stars": 11516,
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
      "forks": 52735,
      "added_stars": 23450,
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
      "author": "3b1b",
      "repo": "manim",
      "avatar": "https://github.com/3b1b.png",
      "repo_link": "https://github.com/3b1b/manim",
      "desc": "Animation engine for explanatory math videos",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7682,
      "added_stars": 4394,
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
      "author": "megadose",
      "repo": "holehe",
      "avatar": "https://github.com/megadose.png",
      "repo_link": "https://github.com/megadose/holehe",
      "desc": "holehe allows you to check if the mail is used on different sites like twitter, instagram and will retrieve information on sites with the forgotten password function.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1881,
      "added_stars": 2856,
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
      "author": "MiaAI-Lab",
      "repo": "DeepSeek-v4-Flash-DSpark-2x-DGX-Spark",
      "avatar": "https://github.com/MiaAI-Lab.png",
      "repo_link": "https://github.com/MiaAI-Lab/DeepSeek-v4-Flash-DSpark-2x-DGX-Spark",
      "desc": "DeepSeek-v4-Flash 0731 recipe for 2x DGX Sparks",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 179,
      "added_stars": 812,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Local UI to run and train LLMs and diffusion models. Supports GGUF, MLX, Qwen3.8, DeepSeek-V4, MiniMax-H3, Gemma 4, FLUX and more.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6901,
      "added_stars": 6357,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3449,
      "added_stars": 3837,
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
      "forks": 1839,
      "added_stars": 3084,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 18781,
      "added_stars": 20098,
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
      "author": "blader",
      "repo": "humanizer",
      "avatar": "https://github.com/blader.png",
      "repo_link": "https://github.com/blader/humanizer",
      "desc": "Agent skill that removes signs of AI-generated writing from text",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3749,
      "added_stars": 11172,
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
      "forks": 581,
      "added_stars": 1775,
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
      "author": "abi",
      "repo": "screenshot-to-code",
      "avatar": "https://github.com/abi.png",
      "repo_link": "https://github.com/abi/screenshot-to-code",
      "desc": "Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9525,
      "added_stars": 4566,
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
      "forks": 458,
      "added_stars": 754,
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
      "author": "vitali87",
      "repo": "code-graph-rag",
      "avatar": "https://github.com/vitali87.png",
      "repo_link": "https://github.com/vitali87/code-graph-rag",
      "desc": "The ultimate RAG for your monorepo. Query, understand, and edit multi-language codebases with the power of AI and knowledge graphs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 668,
      "added_stars": 2520,
      "builtBy": [
        {
          "username": "vitali87",
          "href": "https://github.com/vitali87",
          "avatar": "https://avatars.githubusercontent.com/u/22404335"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ZuebeyirEser",
          "href": "https://github.com/ZuebeyirEser",
          "avatar": "https://avatars.githubusercontent.com/u/140069682"
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
      "forks": 3993,
      "added_stars": 11075,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7783,
      "added_stars": 5584,
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
      "author": "donnemartin",
      "repo": "system-design-primer",
      "avatar": "https://github.com/donnemartin.png",
      "repo_link": "https://github.com/donnemartin/system-design-primer",
      "desc": "Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 58308,
      "added_stars": 7360,
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
      "forks": 3063,
      "added_stars": 4813,
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
      "title": "Basics of Decentralized Identity and Self-Sovereign Identity",
      "url": "https://memdeklaro.org/decentralized-identity-guide/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-08T21:08:15.000Z"
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
      "title": "Best of Self-Sovereign Identity: Digitalcourage vs. World Passport vs. Memdeklaro",
      "url": "https://dev.to/narehate78/vat-helpline-vs-ad-hoc-vat-advisory-which-is-more-effective-for-uk-businesses-dealing-with-151k",
      "upvotes": "1",
      "comments": "2",
      "created": "2026-08-31T16:49:34.000Z"
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
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-40ma",
      "tags": "top7, discuss",
      "reactions": 54,
      "comments": 25,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Bidirectional Writeback for Apache Iceberg via Google Sheets: Serverless Lakehouse Console",
      "description": "Turn Google Sheets into a Fully Interactive, Differential ACID Mutation Console for Apache Iceberg...",
      "url": "https://dev.to/gde/bidirectional-writeback-for-apache-iceberg-via-google-sheets-serverless-lakehouse-console-14ic",
      "tags": "googleworkspace, googlecloud, bigquery, apacheiceberg",
      "reactions": 6,
      "comments": 0,
      "reading_time": 26,
      "author": "tanaike"
    },
    {
      "title": "Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script",
      "description": "Turn Google Drive into an AI-Powered Lakehouse Vector Engine across Converted PDFs, Binary Images,...",
      "url": "https://dev.to/gde/serverless-multimodal-vector-search-on-apache-iceberg-via-google-apps-script-4fg",
      "tags": "googleworkspace, googlecloud, bigquery, apacheiceberg",
      "reactions": 6,
      "comments": 0,
      "reading_time": 22,
      "author": "tanaike"
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
      "reactions": 212,
      "comments": 110,
      "reading_time": 11,
      "author": "sylwia-lask"
    },
    {
      "title": "BoonFest: The Anti-Sloth Game Where Generosity Means Survival!",
      "description": "This is a submission for Weekend Challenge: Generosity Edition           What I Built   I built...",
      "url": "https://dev.to/fm/boonfest-the-anti-sloth-game-where-generosity-means-survival-3pg8",
      "tags": "devchallenge, weekendchallenge, ai, gamedev",
      "reactions": 19,
      "comments": 9,
      "reading_time": 4,
      "author": "fm"
    },
    {
      "title": "Stop rebuilding from scratch: cache Docker layers on Cloud Build",
      "description": "Cloud Build runs on ephemeral workers, so your Docker cache vanishes on every run. Here's how to persist it in Artifact Registry with BuildKit's registry cache — uv stops re-downloading dependencies, builds get faster, greener and cheaper.",
      "url": "https://dev.to/gde/stop-rebuilding-from-scratch-cache-docker-layers-on-cloud-build-41m0",
      "tags": "docker, googlecloud, python, devops",
      "reactions": 9,
      "comments": 0,
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
      "title": "Building With AI When You Don't Know Architecture: A Survival Guide",
      "description": "Let me describe a moment you might recognize.  You had an idea for an app. You didn't know how to...",
      "url": "https://dev.to/james_anderson_h/building-with-ai-when-you-dont-know-architecture-a-survival-guide-1ma3",
      "tags": "ai, beginners, webdev",
      "reactions": 130,
      "comments": 78,
      "reading_time": 7,
      "author": "james_anderson_h"
    },
    {
      "title": "Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood",
      "description": "Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.",
      "url": "https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l",
      "tags": "kubernetes, ai, gke, googlecloud",
      "reactions": 6,
      "comments": 0,
      "reading_time": 4,
      "author": "olivi-eh"
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
      "title": "Patchwork-26: A malleable, collaborative, local-first workspace",
      "url": "https://youtu.be/4UxGijnuXEs",
      "score": 1,
      "comments": 0,
      "tags": [
        "programming",
        "video"
      ],
      "id": "mbzhlq"
    },
    {
      "title": "Fancy Little Lisp λs (2017)",
      "url": "https://lepisma.xyz/2017/12/20/fancy-lambdas",
      "score": 1,
      "comments": 0,
      "tags": [
        "lisp"
      ],
      "id": "dote36"
    },
    {
      "title": "Why Function Arguments Are Not Function Colors",
      "url": "https://jerf.org/iri/post/2026/func_args_are_not_colors/",
      "score": 1,
      "comments": 0,
      "tags": [
        "go",
        "haskell",
        "programming"
      ],
      "id": "tsfs3w"
    },
    {
      "title": "software for humans",
      "url": "https://clankerfree.org",
      "score": 4,
      "comments": 13,
      "tags": [
        "culture"
      ],
      "id": "8mgfan"
    },
    {
      "title": "Sloc Cloc and Code - Did I just get Buster Scrugged?",
      "url": "https://boyter.org/posts/did-i-just-get-buster-scrugged/",
      "score": 6,
      "comments": 0,
      "tags": [
        "go",
        "performance"
      ],
      "id": "biulze"
    },
    {
      "title": "Teaching NumPy’s ufuncs new tricks",
      "url": "https://labs.quansight.org/blog/teaching-numpys-ufuncs-new-tricks",
      "score": 3,
      "comments": 0,
      "tags": [
        "c",
        "python"
      ],
      "id": "fvdo91"
    },
    {
      "title": "How to build a f**king printer",
      "url": "https://nishantjosh.dev/blogs/how-to-build-a-fking-printer/",
      "score": 35,
      "comments": 5,
      "tags": [
        "c++",
        "hardware",
        "networking"
      ],
      "id": "pxreik"
    },
    {
      "title": "Rust: When Empty Isn't Bottom",
      "url": "https://ettolrach.com/blog/rust_when_empty_isnt_bottom.html",
      "score": 7,
      "comments": 4,
      "tags": [
        "plt",
        "rust"
      ],
      "id": "lf3est"
    },
    {
      "title": "What makes $BigTechCompany's products bad, anyway?",
      "url": "https://herecomesthemoon.net/2026/09/why-is-big-tech-bad/",
      "score": 18,
      "comments": 19,
      "tags": [
        "finance"
      ],
      "id": "wlcg5w"
    },
    {
      "title": "Reverse engineering my e-scooter and rewriting the firmware in rust",
      "url": "https://bensimms.moe/reverse-engineering-scooter/",
      "score": 12,
      "comments": 1,
      "tags": [
        "hardware",
        "reversing",
        "rust"
      ],
      "id": "pdr2bo"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "tosh",
      "descendants": 18,
      "id": 49621697,
      "kids": [
        49622110,
        49621895,
        49622097,
        49622107,
        49621912,
        49622078,
        49622106,
        49621981,
        49622114,
        49622064,
        49622010,
        49622076,
        49622040
      ],
      "score": 53,
      "time": 1788933339,
      "title": "The Navier–Stokes Millennium Prize Problem",
      "type": "story",
      "url": "https://simonwillison.net/2026/Sep/8/on-navier-stokes/"
    },
    {
      "by": "yks",
      "descendants": 482,
      "id": 49615537,
      "kids": [
        49619077,
        49622072,
        49619026,
        49621833,
        49621179,
        49615810,
        49620183,
        49621251,
        49619535,
        49619018,
        49619507,
        49615819,
        49619260,
        49618998,
        49619101,
        49615858,
        49615932,
        49619131,
        49615838,
        49617903,
        49617555,
        49615782,
        49615917,
        49620189,
        49615846,
        49616390,
        49616351,
        49619147,
        49620546,
        49616030,
        49619518,
        49619951,
        49620579,
        49621793,
        49619039,
        49616421,
        49616575,
        49621649,
        49620382,
        49616249,
        49620091,
        49616315,
        49621300,
        49616552,
        49619481,
        49619424,
        49620034,
        49616670,
        49621693,
        49619974,
        49615930,
        49618113,
        49616273,
        49615744,
        49620176,
        49616908,
        49619664,
        49619335,
        49617025,
        49616702,
        49620044,
        49616992,
        49616596,
        49616361,
        49619714,
        49617667,
        49615972,
        49616484,
        49617731,
        49620554,
        49619228,
        49621214,
        49618981,
        49621590,
        49616069,
        49621540,
        49616079,
        49620645,
        49620427,
        49620045,
        49619914,
        49615817,
        49620261,
        49615862,
        49619505,
        49615988,
        49617036,
        49616363,
        49616080,
        49619010,
        49620042,
        49616406,
        49615841,
        49616135,
        49619087,
        49615903,
        49618951,
        49615880,
        49619071,
        49616025,
        49616056,
        49617310,
        49621858,
        49621812,
        49621702,
        49621720,
        49619626,
        49619092,
        49617066,
        49619315,
        49619252,
        49616393,
        49619097,
        49619021
      ],
      "score": 460,
      "time": 1788895500,
      "title": "Muse – Meta’s personal AI agent",
      "type": "story",
      "url": "https://ai.meta.com/muse/"
    },
    {
      "by": "mdp2021",
      "descendants": 14,
      "id": 49546964,
      "kids": [
        49620838,
        49620619,
        49620756,
        49621885,
        49621647
      ],
      "score": 92,
      "time": 1788420580,
      "title": "Tension wood: A 'muscle' that can both bend and straighten plants",
      "type": "story",
      "url": "https://phys.org/news/2026-09-trees-muscle-posture-newly-role.html"
    },
    {
      "by": "cisc",
      "descendants": 7,
      "id": 49580761,
      "kids": [
        49621410,
        49621537,
        49621674
      ],
      "score": 26,
      "time": 1788642858,
      "title": "Researchers Spot Fake Ancient Pottery Using the Earth's Magnetic Field",
      "type": "story",
      "url": "https://www.smithsonianmag.com/smart-news/researchers-determine-how-to-spot-fake-ancient-pottery-using-the-earths-magnetic-field-180989441/"
    },
    {
      "by": "procedurecall",
      "descendants": 659,
      "id": 49605915,
      "kids": [
        49607239,
        49606568,
        49617154,
        49606404,
        49621415,
        49607090,
        49607073,
        49619384,
        49606636,
        49606322,
        49606740,
        49616213,
        49615201,
        49606078,
        49617952,
        49606885,
        49607029,
        49621557,
        49608455,
        49621306,
        49608314,
        49609805,
        49618153,
        49614040,
        49615823,
        49607399,
        49606626,
        49609571,
        49621953,
        49607550,
        49608365,
        49615746,
        49606357,
        49616108,
        49606738,
        49610490,
        49620887,
        49617060,
        49608151,
        49607355,
        49620790,
        49619276,
        49620491,
        49614847,
        49606531,
        49606887,
        49608026,
        49607401,
        49613400,
        49618413,
        49606230,
        49609372,
        49607727,
        49609106,
        49618373,
        49618010,
        49621042,
        49609098,
        49608767,
        49608845,
        49621080,
        49606886,
        49616901,
        49617241,
        49608162,
        49612566,
        49618150,
        49620149,
        49611325,
        49618482,
        49613423,
        49609191,
        49606377,
        49607045,
        49610958,
        49607177,
        49610225,
        49618183,
        49613323,
        49616636,
        49608643,
        49616733,
        49606777,
        49619270,
        49606400,
        49607728,
        49607507,
        49611740,
        49613521,
        49612897,
        49619495,
        49617105,
        49608636,
        49617109,
        49614460,
        49617115,
        49617112,
        49618043,
        49620358,
        49607054,
        49606408,
        49606628,
        49613276
      ],
      "score": 1528,
      "time": 1788846148,
      "title": "Navier-Stokes – Tristan Buckmaster [pdf]",
      "type": "story",
      "url": "https://cims.nyu.edu/~tristanb/statement.pdf"
    },
    {
      "by": "samclemens",
      "descendants": 19,
      "id": 49621074,
      "kids": [
        49622080,
        49621735,
        49621153,
        49621831,
        49622090,
        49621950
      ],
      "score": 22,
      "time": 1788928751,
      "title": "The Nonfiction Book Market is Collapsing?",
      "type": "story",
      "url": "https://dearheadofmine.substack.com/p/the-nonfiction-book-market-is-collapsing"
    },
    {
      "by": "cat-whisperer",
      "descendants": 52,
      "id": 49617255,
      "kids": [
        49619525,
        49621387,
        49619847,
        49621801,
        49619127,
        49621279,
        49618581,
        49619186,
        49619083,
        49619254,
        49618532,
        49618730,
        49618896,
        49618165,
        49620568
      ],
      "score": 258,
      "time": 1788902531,
      "title": "How to build a printer",
      "type": "story",
      "url": "https://nishantjosh.dev/blogs/how-to-build-a-fking-printer/"
    },
    {
      "by": "utiiiD",
      "descendants": 118,
      "id": 49611251,
      "kids": [
        49616342,
        49612313,
        49614431,
        49613968,
        49612971,
        49616128,
        49612833,
        49617920,
        49614889,
        49614818,
        49613579,
        49613078,
        49612575,
        49612165,
        49614297,
        49612615,
        49613263,
        49612867,
        49612588,
        49613702,
        49615449,
        49612321,
        49615289,
        49612080,
        49614786,
        49613788,
        49612714,
        49612331,
        49611659,
        49612297,
        49611800
      ],
      "score": 539,
      "text": "<a href=\"https:&#x2F;&#x2F;deepmind.google&#x2F;blog&#x2F;alphagenome-atlas-a-predictive-map-of-every-possible-dna-letter-change-in-the-human-genome&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;deepmind.google&#x2F;blog&#x2F;alphagenome-atlas-a-predictive-...</a><p><a href=\"https:&#x2F;&#x2F;deepmind.google.com&#x2F;science&#x2F;alphagenome&#x2F;atlas\" rel=\"nofollow\">https:&#x2F;&#x2F;deepmind.google.com&#x2F;science&#x2F;alphagenome&#x2F;atlas</a>",
      "time": 1788879345,
      "title": "AlphaGenome Atlas: a high-resolution map of human DNA",
      "type": "story",
      "url": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/alphagenome-atlas/"
    },
    {
      "by": "Topfi",
      "descendants": 26,
      "id": 49616354,
      "kids": [
        49621408,
        49616933,
        49620999,
        49616810,
        49617237,
        49620437,
        49616855,
        49617968,
        49620803,
        49618366,
        49619052,
        49617234,
        49620778,
        49618304,
        49620535,
        49618367,
        49618375,
        49619826,
        49619441,
        49617222
      ],
      "score": 176,
      "time": 1788898492,
      "title": "Mercury 2.5",
      "type": "story",
      "url": "https://www.inceptionlabs.ai/blog/introducing-mercury-2-5"
    },
    {
      "by": "paimapi",
      "descendants": 72,
      "id": 49617581,
      "kids": [
        49618722,
        49618279,
        49618016,
        49621842,
        49617925,
        49618636,
        49618488,
        49620986,
        49619070,
        49618789,
        49619347,
        49619681,
        49618433,
        49618550,
        49618725,
        49620118,
        49618579,
        49619880,
        49617897,
        49619580,
        49619995,
        49619458,
        49618353,
        49618260,
        49618131
      ],
      "score": 138,
      "time": 1788904058,
      "title": "Large language models develop novel social biases through adaptive exploration",
      "type": "story",
      "url": "https://openreview.net/challenge?redirect=%2Fforum%3Fid%3Dpc7fqaOcAH"
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
      "title": "Has AI Made You A Lazier Developer? Be Honest.",
      "description": "Haven't you ever wondered if this AI vibe coding has made us lazy? Who's been solving problems on...",
      "url": "https://dev.to/nazar-boyko/has-ai-made-you-a-lazier-developer-be-honest-5ack",
      "tags": "discuss, ai, productivity, career",
      "reactions": 61,
      "comments": 22,
      "reading_time": 4,
      "author": "nazar-boyko"
    },
    {
      "title": "So You've Got a Technical Interview in 7 days...",
      "description": "So you got head-hunted. A recruiter from a large company wanted to talk to you about a React...",
      "url": "https://dev.to/cathylai/so-youve-got-a-technical-interview-in-7-days-22g5",
      "tags": "react, career, javascript",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "cathylai"
    },
    {
      "title": "What AI Can’t Fake: How junior engineers can stand out in the age of AI",
      "description": "There is a piece of advice that circulates endlessly through mentoring conversations, coding...",
      "url": "https://dev.to/ratioshift/what-ai-cant-fake-how-junior-engineers-can-stand-out-in-the-age-of-ai-2m83",
      "tags": "ai, career, software",
      "reactions": 0,
      "comments": 3,
      "reading_time": 4,
      "author": "ratioshift"
    },
    {
      "title": "The Mathematicians Just Felt It: What Happens to a Lifetime of Work When a Machine Finishes It in Days?",
      "description": "Somewhere this week, a mathematician woke up, made coffee, and read the news that the problem they'd...",
      "url": "https://dev.to/james_anderson_h/the-mathematicians-just-felt-it-what-happens-to-a-lifetime-of-work-when-a-machine-finishes-it-in-1i8i",
      "tags": "ai, career, discuss, mentalhealth",
      "reactions": 2,
      "comments": 2,
      "reading_time": 7,
      "author": "james_anderson_h"
    },
    {
      "title": "Jira Dashboard Invisibility",
      "description": "Three days before sprint end, my manager sent a message asking if I was active on the project.  I had...",
      "url": "https://dev.to/walkingriver/dashboard-invisibility-5f0p",
      "tags": "agile, career, leadership, discuss",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "walkingriver"
    },
    {
      "title": "Building My Own Technical Interview Practice Repository",
      "description": "Preparing for technical interviews has made me realize something:  solving more exercises doesn't...",
      "url": "https://dev.to/johanngaviria/building-my-own-technical-interview-practice-repository-24m3",
      "tags": "backend, career, interview, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "johanngaviria"
    },
    {
      "title": "Why I Stopped Chasing \"Full-Stack\" Perfection (And Why You Should Too)",
      "description": "Let’s be honest—if you look at a modern job description for a junior developer today, it feels less...",
      "url": "https://dev.to/chamod_madhushan/why-i-stopped-chasing-full-stack-perfection-and-why-you-should-too-2mkj",
      "tags": "webdev, career, programming, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "chamod_madhushan"
    },
    {
      "title": "Advanced AI Debugging Assistants: Real Results & 2026 Data",
      "description": "Discover how advanced AI debugging assistants cut bug resolution time by 66% in 2026, save teams $15K/year, and outperform human triage. Tool comparisons, case studies, and pro tips.",
      "url": "https://dev.to/nlocoding/advanced-ai-debugging-assistants-real-results-2026-data-3pom",
      "tags": "ai, testing, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "nlocoding"
    },
    {
      "title": "The Minute-12 Rule: Coding Interview Time Management",
      "description": "Coding interview time management, minute by minute: the 45-minute clock, the minute-12 rule, and the 4 places candidates lose.",
      "url": "https://dev.to/ji_ai/the-minute-12-rule-coding-interview-time-management-2o2p",
      "tags": "interview, career, programming, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "ji_ai"
    },
    {
      "title": "AI Didn't Make Developers Faster. It Made Many Developers Lazy.",
      "description": "I'm going to say something that probably won't be popular with developers:  AI didn't just make...",
      "url": "https://dev.to/maulik_solanki_6660abf902/ai-didnt-make-developers-faster-it-made-many-developers-lazy-5a4d",
      "tags": "ai, webdev, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "maulik_solanki_6660abf902"
    }
  ]
}
```

