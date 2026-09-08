# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-08 06:38:20 UTC

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
      "author": "magnitudedev",
      "repo": "magnitude",
      "avatar": "https://github.com/magnitudedev.png",
      "repo_link": "https://github.com/magnitudedev/magnitude",
      "desc": "Open source inference server that runs the best local models for your hardware, plugged into the agent you already use. Works with Pi, OpenCode, Hermes, OpenClaw, Codex, Claude Code, Oh My Pi, and Cline.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 293,
      "added_stars": 2430,
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
      "added_stars": 2040,
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
      "author": "THU-MAIC",
      "repo": "OpenMAIC",
      "avatar": "https://github.com/THU-MAIC.png",
      "repo_link": "https://github.com/THU-MAIC/OpenMAIC",
      "desc": "Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5392,
      "added_stars": 6934,
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
      "author": "advaitpaliwal",
      "repo": "feynman",
      "avatar": "https://github.com/advaitpaliwal.png",
      "repo_link": "https://github.com/advaitpaliwal/feynman",
      "desc": "The open source AI research agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1046,
      "added_stars": 292,
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
      "author": "colinhacks",
      "repo": "zod",
      "avatar": "https://github.com/colinhacks.png",
      "repo_link": "https://github.com/colinhacks/zod",
      "desc": "TypeScript-first schema validation with static type inference",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2181,
      "added_stars": 175,
      "builtBy": [
        {
          "username": "colinhacks",
          "href": "https://github.com/colinhacks",
          "avatar": "https://avatars.githubusercontent.com/u/3084745"
        },
        {
          "username": "JacobWeisenburger",
          "href": "https://github.com/JacobWeisenburger",
          "avatar": "https://avatars.githubusercontent.com/u/31667350"
        },
        {
          "username": "scotttrinh",
          "href": "https://github.com/scotttrinh",
          "avatar": "https://avatars.githubusercontent.com/u/1682194"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "igalklebanov",
          "href": "https://github.com/igalklebanov",
          "avatar": "https://avatars.githubusercontent.com/u/14938291"
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
      "forks": 2246,
      "added_stars": 2137,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3613,
      "added_stars": 1042,
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
      "author": "KnockOutEZ",
      "repo": "wigolo",
      "avatar": "https://github.com/KnockOutEZ.png",
      "repo_link": "https://github.com/KnockOutEZ/wigolo",
      "desc": "The go-to web for your AI coding agent — local-first search, fetch, crawl & research over MCP. No API keys, no cloud, $0/query. Public beta.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 414,
      "added_stars": 367,
      "builtBy": [
        {
          "username": "KnockOutEZ",
          "href": "https://github.com/KnockOutEZ",
          "avatar": "https://avatars.githubusercontent.com/u/70368615"
        },
        {
          "username": "HsiangNianian",
          "href": "https://github.com/HsiangNianian",
          "avatar": "https://avatars.githubusercontent.com/u/44714368"
        },
        {
          "username": "ashrafulislambd",
          "href": "https://github.com/ashrafulislambd",
          "avatar": "https://avatars.githubusercontent.com/u/36521371"
        },
        {
          "username": "josephkehan-prog",
          "href": "https://github.com/josephkehan-prog",
          "avatar": "https://avatars.githubusercontent.com/u/272387488"
        },
        {
          "username": "spartan8806",
          "href": "https://github.com/spartan8806",
          "avatar": "https://avatars.githubusercontent.com/u/39662153"
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
      "forks": 405,
      "added_stars": 888,
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
      "author": "rmyndharis",
      "repo": "OpenWA",
      "avatar": "https://github.com/rmyndharis.png",
      "repo_link": "https://github.com/rmyndharis/OpenWA",
      "desc": "Free, Open Source, Self-Hosted WhatsApp API Gateway",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3224,
      "added_stars": 397,
      "builtBy": [
        {
          "username": "rmyndharis",
          "href": "https://github.com/rmyndharis",
          "avatar": "https://avatars.githubusercontent.com/u/2390382"
        },
        {
          "username": "m7fz7",
          "href": "https://github.com/m7fz7",
          "avatar": "https://avatars.githubusercontent.com/u/75252008"
        },
        {
          "username": "tobiasstrebitzer",
          "href": "https://github.com/tobiasstrebitzer",
          "avatar": "https://avatars.githubusercontent.com/u/222509"
        },
        {
          "username": "albanobattistella",
          "href": "https://github.com/albanobattistella",
          "avatar": "https://avatars.githubusercontent.com/u/34811668"
        }
      ]
    },
    {
      "author": "aipoch",
      "repo": "open-science",
      "avatar": "https://github.com/aipoch.png",
      "repo_link": "https://github.com/aipoch/open-science",
      "desc": "Open Science by AIPOCH is an open-source, local-first, model-agnostic AI research workbench for macOS, Windows, and Linux, with scientific agents, Python/R notebooks, data connectors, and reproducible provenance.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 249,
      "added_stars": 665,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1524,
      "added_stars": 399,
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
      "author": "awslabs",
      "repo": "aidlc-workflows",
      "avatar": "https://github.com/awslabs.png",
      "repo_link": "https://github.com/awslabs/aidlc-workflows",
      "desc": "AI-Driven Life Cycle (AI-DLC) adaptive workflow steering rules for AI coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 792,
      "added_stars": 172,
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
      "author": "umami-software",
      "repo": "umami",
      "avatar": "https://github.com/umami-software.png",
      "repo_link": "https://github.com/umami-software/umami",
      "desc": "Umami is a privacy-first analytics platform. Traffic, campaigns, behavior, conversions, and revenue in one place — no cookies, no surveillance, self-hosted or in the cloud.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7983,
      "added_stars": 209,
      "builtBy": [
        {
          "username": "mikecao",
          "href": "https://github.com/mikecao",
          "avatar": "https://avatars.githubusercontent.com/u/477975"
        },
        {
          "username": "franciscao633",
          "href": "https://github.com/franciscao633",
          "avatar": "https://avatars.githubusercontent.com/u/31608805"
        },
        {
          "username": "briancao",
          "href": "https://github.com/briancao",
          "avatar": "https://avatars.githubusercontent.com/u/4401225"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Maxime-J",
          "href": "https://github.com/Maxime-J",
          "avatar": "https://avatars.githubusercontent.com/u/12450219"
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
      "added_stars": 335,
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
      "author": "humanlayer",
      "repo": "skills",
      "avatar": "https://github.com/humanlayer.png",
      "repo_link": "https://github.com/humanlayer/skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 101,
      "added_stars": 2789,
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
      "forks": 231,
      "added_stars": 1175,
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
      "author": "linshenkx",
      "repo": "prompt-optimizer",
      "avatar": "https://github.com/linshenkx.png",
      "repo_link": "https://github.com/linshenkx/prompt-optimizer",
      "desc": "An AI prompt optimizer for writing better prompts and getting better AI results.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4019,
      "added_stars": 502,
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
      "forks": 919,
      "added_stars": 1244,
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
      "added_stars": 814,
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
      "added_stars": 670,
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
      "author": "caddyserver",
      "repo": "caddy",
      "avatar": "https://github.com/caddyserver.png",
      "repo_link": "https://github.com/caddyserver/caddy",
      "desc": "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4945,
      "added_stars": 953,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 305,
      "added_stars": 705,
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
      "forks": 999,
      "added_stars": 1133,
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
      "author": "nektos",
      "repo": "act",
      "avatar": "https://github.com/nektos.png",
      "repo_link": "https://github.com/nektos/act",
      "desc": "Run your GitHub Actions locally 🚀",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2022,
      "added_stars": 518,
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
      "author": "kopia",
      "repo": "kopia",
      "avatar": "https://github.com/kopia.png",
      "repo_link": "https://github.com/kopia/kopia",
      "desc": "Cross-platform backup tool for Windows, macOS & Linux with fast, incremental backups, client-side end-to-end encryption, compression and data deduplication. CLI and GUI included.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 723,
      "added_stars": 279,
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
      "author": "authelia",
      "repo": "authelia",
      "avatar": "https://github.com/authelia.png",
      "repo_link": "https://github.com/authelia/authelia",
      "desc": "The Single Sign-On Multi-Factor portal for web apps. OpenID Certified™ and Post-Quantum Cryptography Ready.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1476,
      "added_stars": 350,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 172,
      "added_stars": 1803,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8990,
      "added_stars": 595,
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
      "author": "traefik",
      "repo": "traefik",
      "avatar": "https://github.com/traefik.png",
      "repo_link": "https://github.com/traefik/traefik",
      "desc": "The Cloud Native Application Proxy",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6192,
      "added_stars": 574,
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
      "author": "CarterPerez-dev",
      "repo": "Cybersecurity-Projects",
      "avatar": "https://github.com/CarterPerez-dev.png",
      "repo_link": "https://github.com/CarterPerez-dev/Cybersecurity-Projects",
      "desc": "Building 70 Projects ranging from beginner to advanced so anyone can — learn from, build upon, use as a reference, or even copy directly. Gamified Cybersecurity learning 👇",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1009,
      "added_stars": 1905,
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
      "author": "github",
      "repo": "github-mcp-server",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/github-mcp-server",
      "desc": "GitHub's official MCP Server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4934,
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
      "author": "go-task",
      "repo": "task",
      "avatar": "https://github.com/go-task.png",
      "repo_link": "https://github.com/go-task/task",
      "desc": "A fast, cross-platform build tool inspired by Make, designed for modern workflows.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 902,
      "added_stars": 192,
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
      "author": "infiniflow",
      "repo": "ragflow",
      "avatar": "https://github.com/infiniflow.png",
      "repo_link": "https://github.com/infiniflow/ragflow",
      "desc": "RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context layer for LLMs",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10648,
      "added_stars": 3432,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 17762,
      "added_stars": 2986,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The task manager you actually own.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 672,
      "added_stars": 339,
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
      "author": "higress-group",
      "repo": "higress",
      "avatar": "https://github.com/higress-group.png",
      "repo_link": "https://github.com/higress-group/higress",
      "desc": "🤖 AI Gateway | AI Native API Gateway",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1282,
      "added_stars": 297,
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
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 1Panel is a modern, open-source Linux server management panel and a lightweight AI management platform.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3341,
      "added_stars": 452,
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
      "author": "gtsteffaniak",
      "repo": "filebrowser",
      "avatar": "https://github.com/gtsteffaniak.png",
      "repo_link": "https://github.com/gtsteffaniak/filebrowser",
      "desc": "📂 Web File Browser",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 427,
      "added_stars": 488,
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
      "author": "semantica-agi",
      "repo": "semantica",
      "avatar": "https://github.com/semantica-agi.png",
      "repo_link": "https://github.com/semantica-agi/semantica",
      "desc": "Graph-Native Infrastructure for Context and Accountable AI Systems",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1390,
      "added_stars": 10142,
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
      "author": "anthropics",
      "repo": "claude-plugins-community",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-community",
      "desc": "Community plugin marketplace for Claude Cowork and Claude Code. Read-only mirror — submit plugins at clau.de/plugin-directory-submission.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 278,
      "added_stars": 3285,
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
      "forks": 2745,
      "added_stars": 7993,
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
      "author": "youssofal",
      "repo": "MTPLX",
      "avatar": "https://github.com/youssofal.png",
      "repo_link": "https://github.com/youssofal/MTPLX",
      "desc": "3x faster speeds on MLX | Qwen 3.8 27B | Native MTP Speculative Decoding On Apple Silicon With No External Drafter.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 159,
      "added_stars": 1000,
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
      "author": "cactus-compute",
      "repo": "needle",
      "avatar": "https://github.com/cactus-compute.png",
      "repo_link": "https://github.com/cactus-compute/needle",
      "desc": "14MB foundation model for tiny devices; phones, wearables, smart home, and robots.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 674,
      "added_stars": 7126,
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
      "author": "3b1b",
      "repo": "manim",
      "avatar": "https://github.com/3b1b.png",
      "repo_link": "https://github.com/3b1b/manim",
      "desc": "Animation engine for explanatory math videos",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7675,
      "added_stars": 4285,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2600,
      "added_stars": 10716,
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
      "forks": 52669,
      "added_stars": 22977,
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
      "author": "vitali87",
      "repo": "code-graph-rag",
      "avatar": "https://github.com/vitali87.png",
      "repo_link": "https://github.com/vitali87/code-graph-rag",
      "desc": "The ultimate RAG for your monorepo. Query, understand, and edit multi-language codebases with the power of AI and knowledge graphs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 665,
      "added_stars": 2529,
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
      "author": "megadose",
      "repo": "holehe",
      "avatar": "https://github.com/megadose.png",
      "repo_link": "https://github.com/megadose/holehe",
      "desc": "holehe allows you to check if the mail is used on different sites like twitter, instagram and will retrieve information on sites with the forgotten password function.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1880,
      "added_stars": 2795,
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
      "forks": 178,
      "added_stars": 809,
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
      "author": "jundot",
      "repo": "omlx",
      "avatar": "https://github.com/jundot.png",
      "repo_link": "https://github.com/jundot/omlx",
      "desc": "LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1835,
      "added_stars": 3070,
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
      "forks": 6900,
      "added_stars": 6317,
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
          "username": "Datta0",
          "href": "https://github.com/Datta0",
          "avatar": "https://avatars.githubusercontent.com/u/39181234"
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
      "forks": 3426,
      "added_stars": 3766,
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
      "forks": 18726,
      "added_stars": 19986,
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
      "forks": 3714,
      "added_stars": 10865,
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
      "forks": 577,
      "added_stars": 1769,
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
      "forks": 9510,
      "added_stars": 4411,
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
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3977,
      "added_stars": 10847,
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
      "author": "donnemartin",
      "repo": "system-design-primer",
      "avatar": "https://github.com/donnemartin.png",
      "repo_link": "https://github.com/donnemartin/system-design-primer",
      "desc": "Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 58293,
      "added_stars": 7333,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7728,
      "added_stars": 5141,
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
      "author": "index-tts",
      "repo": "index-tts",
      "avatar": "https://github.com/index-tts.png",
      "repo_link": "https://github.com/index-tts/index-tts",
      "desc": "An Industrial-Level Controllable and Efficient Zero-Shot Text-To-Speech System",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2847,
      "added_stars": 1397,
      "builtBy": [
        {
          "username": "Arcitec",
          "href": "https://github.com/Arcitec",
          "avatar": "https://avatars.githubusercontent.com/u/38923130"
        },
        {
          "username": "nanaoto",
          "href": "https://github.com/nanaoto",
          "avatar": "https://avatars.githubusercontent.com/u/19526637"
        },
        {
          "username": "yrom",
          "href": "https://github.com/yrom",
          "avatar": "https://avatars.githubusercontent.com/u/2888674"
        },
        {
          "username": "bilisjc",
          "href": "https://github.com/bilisjc",
          "avatar": "https://avatars.githubusercontent.com/u/105334801"
        },
        {
          "username": "index-tts",
          "href": "https://github.com/index-tts",
          "avatar": "https://avatars.githubusercontent.com/u/196291161"
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
      "title": "My Grandmother Ran Ajo. I Built the Version Where the Pot Can't Walk Away",
      "description": "This is a submission for Weekend Challenge: Generosity Edition           What I Built   My late...",
      "url": "https://dev.to/dannwaneri/my-grandmother-ran-ajo-i-built-the-version-where-the-pot-cant-walk-away-5gkn",
      "tags": "weekendchallenge, devchallenge, solana, gemini",
      "reactions": 38,
      "comments": 2,
      "reading_time": 6,
      "author": "dannwaneri"
    },
    {
      "title": "20 Agentic AI Terms Every Developer Should Know (Explained Simply)",
      "description": "Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...",
      "url": "https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii",
      "tags": "ai, agents, mcp, beginners",
      "reactions": 205,
      "comments": 108,
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
      "title": "AI Engineering Is Easy. Changing How We Work Is Hard",
      "description": "AI engineering sounds fancy. New terms are everywhere: agentic development, AI-native engineering,...",
      "url": "https://dev.to/ujja/ai-engineering-is-easy-changing-how-we-work-is-hard-39j4",
      "tags": "ai, agents, software, discuss",
      "reactions": 40,
      "comments": 32,
      "reading_time": 4,
      "author": "ujja"
    },
    {
      "title": "The Unbreakable Shopping Cart: Pairing BlocSignal with Fast Immutable Collections (FIC) for Bulletproof Flutter Apps",
      "description": "Eliminate in-place mutation bugs, corrupted undo stacks, defensive copying overhead, and skipped Flutter rebuilds by pairing BlocSignal with fast_immutable_collections.",
      "url": "https://dev.to/gde/the-unbreakable-shopping-cart-pairing-blocsignal-with-fast-immutable-collections-fic-for-1pn2",
      "tags": "flutter, dart, architecture, statemanagement",
      "reactions": 8,
      "comments": 1,
      "reading_time": 16,
      "author": "randalschwartz"
    },
    {
      "title": "Building With AI When You Don't Know Architecture: A Survival Guide",
      "description": "Let me describe a moment you might recognize.  You had an idea for an app. You didn't know how to...",
      "url": "https://dev.to/james_anderson_h/building-with-ai-when-you-dont-know-architecture-a-survival-guide-1ma3",
      "tags": "ai, beginners, webdev",
      "reactions": 127,
      "comments": 75,
      "reading_time": 7,
      "author": "james_anderson_h"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-1mo8",
      "tags": "weeklyretro",
      "reactions": 33,
      "comments": 32,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Kubeflow Without Kubernetes? Deploy a Complete MLOps Suite in 60 Seconds with Gubernator",
      "description": "Run JupyterLab, MLflow, MinIO S3, and Ollama Inference on a lightweight cluster using pure Docker Compose and <2GB RAM.",
      "url": "https://dev.to/gde/kubeflow-without-kubernetes-deploy-a-complete-mlops-suite-in-60-seconds-with-gubernator-3moo",
      "tags": "gubernator, docker, antigravity, orquestador",
      "reactions": 11,
      "comments": 1,
      "reading_time": 4,
      "author": "marioezquerro"
    },
    {
      "title": "Unifying Google Workspace and Apache Iceberg: Serverless Lakehouse Management",
      "description": "Turn Google Sheets into a Petabyte Lakehouse with Sub-Second ACID Queries.             ...",
      "url": "https://dev.to/gde/unifying-google-workspace-and-apache-iceberg-serverless-lakehouse-management-ep3",
      "tags": "googleworkspace, googlecloud, bigquery, apacheiceberg",
      "reactions": 7,
      "comments": 0,
      "reading_time": 21,
      "author": "tanaike"
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
      "title": "This Month in Ladybird - August 2026",
      "url": "https://ladybird.org/newsletter/2026-08-31/",
      "score": 3,
      "comments": 0,
      "tags": [
        "browsers"
      ],
      "id": "npyzwy"
    },
    {
      "title": "I changed my license to EUPL",
      "url": "https://bergie.iki.fi/blog/eupl/",
      "score": 12,
      "comments": 3,
      "tags": [
        "law"
      ],
      "id": "4ntizu"
    },
    {
      "title": "I’ve factored the RSA keys of a Certificate Authority…from the 90s",
      "url": "https://mcpherrin.ca/2026/09/07/rsa.html",
      "score": 6,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "wl0mln"
    },
    {
      "title": "My Nix Config Is Intimate",
      "url": "https://www.scd31.com/posts/nix-files-are-intimate",
      "score": 4,
      "comments": 0,
      "tags": [
        "nix"
      ],
      "id": "aepn8g"
    },
    {
      "title": "Jellyfin 12.0",
      "url": "https://jellyfin.org/posts/jellyfin-release-12.0",
      "score": 8,
      "comments": 1,
      "tags": [
        "release"
      ],
      "id": "blba3b"
    },
    {
      "title": "Emacs Bedrock 2.0 Released",
      "url": "https://lambdaland.org/posts/2026-09-06-bedrock-v2/",
      "score": 12,
      "comments": 0,
      "tags": [
        "emacs"
      ],
      "id": "sukgeg"
    },
    {
      "title": "What are you using as a task manager and as a people manager?",
      "url": "",
      "score": 8,
      "comments": 13,
      "tags": [
        "ask",
        "philosophy"
      ],
      "id": "0t6c5f"
    },
    {
      "title": "Converting a Ruby block interface to start/stop methods with a Fiber",
      "url": "https://island94.org/2026/09/converting-a-ruby-block-interface-to-start-stop-methods-with-a-fiber",
      "score": 1,
      "comments": 0,
      "tags": [
        "ruby"
      ],
      "id": "g7ecta"
    },
    {
      "title": "Hardening Container Images",
      "url": "https://www.grepular.com/Hardening_Container_Images",
      "score": 12,
      "comments": 1,
      "tags": [
        "devops"
      ],
      "id": "8hz82r"
    },
    {
      "title": "How to bring up the Linux Kernel on a new platform",
      "url": "https://werwolv.net/posts/linux_bringup/",
      "score": 5,
      "comments": 0,
      "tags": [
        "hardware",
        "linux",
        "wasm"
      ],
      "id": "a2kz9j"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "kuberwastaken",
      "descendants": 42,
      "id": 49605767,
      "kids": [
        49606293,
        49606204,
        49605971,
        49606143,
        49606117,
        49606252,
        49606059,
        49606228,
        49606259
      ],
      "score": 105,
      "time": 1788843983,
      "title": "Mistral raises €3B to make sovereign, open-weight AI the technology frontier",
      "type": "story",
      "url": "https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/"
    },
    {
      "by": "saikatsg",
      "descendants": 66,
      "id": 49605691,
      "kids": [
        49606073,
        49605803,
        49605819,
        49605795,
        49606011,
        49605920,
        49606224,
        49606270,
        49606288,
        49605921,
        49606042,
        49605835,
        49605872,
        49605858,
        49605896,
        49605832,
        49606015,
        49605866,
        49605771
      ],
      "score": 106,
      "time": 1788842890,
      "title": "We have a year to fix security everywhere",
      "type": "story",
      "url": "https://jyn.dev/a-year-to-fix-security/"
    },
    {
      "by": "procedurecall",
      "descendants": 7,
      "id": 49605915,
      "kids": [
        49606078,
        49606322,
        49606230
      ],
      "score": 49,
      "time": 1788846148,
      "title": "Navier-Stokes – Tristan Buckmaster [pdf]",
      "type": "story",
      "url": "https://cims.nyu.edu/~tristanb/statement.pdf"
    },
    {
      "by": "ahlCVA",
      "descendants": 45,
      "id": 49604637,
      "kids": [
        49604929,
        49604867,
        49604918,
        49604923,
        49605738,
        49605491,
        49605294,
        49605020,
        49604987,
        49605534,
        49605260,
        49604841
      ],
      "score": 245,
      "time": 1788830219,
      "title": "I've factored the RSA keys of a Certificate Authority from the 90s",
      "type": "story",
      "url": "https://mcpherrin.ca/2026/09/07/rsa.html"
    },
    {
      "by": "dotcoma",
      "descendants": 21,
      "id": 49605782,
      "kids": [
        49606210,
        49606070,
        49606024,
        49605882,
        49606091,
        49605876,
        49605949,
        49606088,
        49606020,
        49606141,
        49605923,
        49605871
      ],
      "score": 47,
      "time": 1788844236,
      "title": "My Feed, My Way",
      "type": "story",
      "url": "https://www.pm.gov.au/media/my-feed-my-way"
    },
    {
      "by": "alvins82",
      "descendants": 21,
      "id": 49605433,
      "kids": [
        49606211,
        49606008,
        49605789,
        49606305,
        49605929,
        49606032,
        49605788,
        49605744,
        49605967,
        49605999,
        49605776,
        49605838,
        49605434,
        49606054
      ],
      "score": 37,
      "time": 1788838945,
      "title": "I tested 10 model/harness combinations on the same Three.js task",
      "type": "story",
      "url": "https://alvins82.github.io/hangar-harness-model-tests/"
    },
    {
      "by": "alixanderwang",
      "descendants": 12,
      "id": 49604150,
      "kids": [
        49606264,
        49604567,
        49605287,
        49604254,
        49604560,
        49604922,
        49605341,
        49604470,
        49604538,
        49604527,
        49605316,
        49604446
      ],
      "score": 173,
      "time": 1788824262,
      "title": "TALA Is Open-Source",
      "type": "story",
      "url": "https://d2lang.com/blog/tala-is-open-source/"
    },
    {
      "by": "drasticactions",
      "descendants": 32,
      "id": 49605424,
      "kids": [
        49606055,
        49605984,
        49605889,
        49606050,
        49606104,
        49605870,
        49605888,
        49605990,
        49605986,
        49606223,
        49606014,
        49606021
      ],
      "score": 53,
      "time": 1788838824,
      "title": "GamersNexus and LG: Or why rooting your TV is a bad idea",
      "type": "story",
      "url": "https://leaflet.pub/p/did:plc:yhgc5rlqhoezrx6fbawajxlh/3muwrqenzfk2n"
    },
    {
      "by": "vinhnx",
      "descendants": 7,
      "id": 49605246,
      "kids": [
        49605773,
        49605759,
        49605679,
        49605704,
        49605816,
        49605809,
        49606127,
        49606076,
        49605413
      ],
      "score": 50,
      "time": 1788836296,
      "title": "How well do agents use test/verification techniques?",
      "type": "story",
      "url": "https://danluu.com/agentic-testing/"
    },
    {
      "by": "Re-Tails",
      "descendants": 10,
      "id": 49605511,
      "kids": [
        49605780,
        49605696,
        49605991
      ],
      "score": 25,
      "time": 1788840380,
      "title": "Arm Mali G2-Ultra NX GPU: desktop-class mobile gameplay with AI-native graphics",
      "type": "story",
      "url": "https://newsroom.arm.com/blog/arm-mali-g2-ultra-nx-ai-native-mobile-graphics"
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
      "title": "Dozens of Resumes, One Call From an Old Colleague",
      "description": "About two weeks ago, I left my previous company.  I didn't start looking for a new job right away. I...",
      "url": "https://dev.to/xulingfeng/dozens-of-resumes-one-call-from-an-old-colleague-141l",
      "tags": "discuss, career, programming, testing",
      "reactions": 73,
      "comments": 51,
      "reading_time": 6,
      "author": "xulingfeng"
    },
    {
      "title": "The Same Day, 180 Times: How Does the Unglamorous Machinery of Locking In Actually Work?",
      "description": "\"Inspiration is for amateurs, the rest of us just show up and get to work.\"   — Chuck Close        ...",
      "url": "https://dev.to/georgekobaidze/the-same-day-180-times-how-does-the-unglamorous-machinery-of-locking-in-actually-work-4n0l",
      "tags": "productivity, career, community, journey",
      "reactions": 22,
      "comments": 13,
      "reading_time": 19,
      "author": "georgekobaidze"
    },
    {
      "title": "Enjoying coding again",
      "description": "I Have a Job — I Just Need to Do It   A few months ago, I left my last job as a remote Unity...",
      "url": "https://dev.to/mmar58/enjoying-coding-again-3mpm",
      "tags": "realexperience, programming, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 7,
      "author": "mmar58"
    },
    {
      "title": "Why Compliance Kills Early-Stage Projects and How to Fix It",
      "description": "Compliance itself isn't the villain. The problem is a system designed for large banks being forced...",
      "url": "https://dev.to/vikram_anand_affa8cf1fca8/why-compliance-kills-early-stage-projects-and-how-to-fix-it-g57",
      "tags": "startup, discuss, career, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "vikram_anand_affa8cf1fca8"
    },
    {
      "title": "The Code Review Interview: I Hand Candidates a Broken PR",
      "description": "The code review interview: I hand candidates a broken pull request instead of a LeetCode problem. Here's what it actually scores.",
      "url": "https://dev.to/ji_ai/the-code-review-interview-i-hand-candidates-a-broken-pr-3mam",
      "tags": "interview, career, programming, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "ji_ai"
    },
    {
      "title": "What are your goals for the week? #195",
      "description": "It's Labor Day in the US so this is a scheduled post. I plan to sleep in but may wake up normal time...",
      "url": "https://dev.to/jarvisscript/what-are-your-goals-for-the-week-195-ec3",
      "tags": "career, discuss, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "jarvisscript"
    },
    {
      "title": "I Built a $1,500 Dashboard. I Learned a Lesson Worth More Than $1,500.",
      "description": "Three months.  One client.  A complete agency dashboard.  And $200 paid out of an agreed $1,500.  I...",
      "url": "https://dev.to/a95yman/i-built-a-1500-dashboard-i-learned-a-lesson-worth-more-than-1500-42n",
      "tags": "freelance, webdev, career, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "a95yman"
    },
    {
      "title": "9 Cover Letter Phrases to Replace (and What to Say Instead)",
      "description": "Most cover letter advice tells you what to cut. That's the easy half. The useful half is knowing what...",
      "url": "https://dev.to/_84df9d6496da92a9041609/9-cover-letter-phrases-to-replace-and-what-to-say-instead-1cd0",
      "tags": "career, jobsearch, writing, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "_84df9d6496da92a9041609"
    },
    {
      "title": "Kubernetes Training Course Online: A Practical Path to Becoming Job-Ready",
      "description": "Kubernetes technology is becoming a necessary part of the cloud-native applications development...",
      "url": "https://dev.to/ap2v_011_f1a8d312a87300d4/kubernetes-training-course-online-a-practical-path-to-becoming-job-ready-2bej",
      "tags": "tutorial, beginners, devops, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "ap2v_011_f1a8d312a87300d4"
    },
    {
      "title": "O conhecimento técnico é apenas o começo!",
      "description": "O conhecimento técnico é apenas o começo   Quando comecei a pensar mais sobre...",
      "url": "https://dev.to/igoralencar/o-conhecimento-tecnico-e-apenas-o-comeco-2g09",
      "tags": "career, webdev, programming, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "igoralencar"
    }
  ]
}
```

