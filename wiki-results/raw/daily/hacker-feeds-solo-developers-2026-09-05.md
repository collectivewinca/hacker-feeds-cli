# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-05 06:34:06 UTC

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
      "author": "THU-MAIC",
      "repo": "OpenMAIC",
      "avatar": "https://github.com/THU-MAIC.png",
      "repo_link": "https://github.com/THU-MAIC/OpenMAIC",
      "desc": "Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5199,
      "added_stars": 10274,
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
      "author": "Gitlawb",
      "repo": "openclaude",
      "avatar": "https://github.com/Gitlawb.png",
      "repo_link": "https://github.com/Gitlawb/openclaude",
      "desc": "runs anywhere. uses anything",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9051,
      "added_stars": 1679,
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
      "author": "every-app",
      "repo": "open-seo",
      "avatar": "https://github.com/every-app.png",
      "repo_link": "https://github.com/every-app/open-seo",
      "desc": "Open source alternative to Semrush and Ahrefs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2133,
      "added_stars": 2950,
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
      "author": "colinhacks",
      "repo": "zod",
      "avatar": "https://github.com/colinhacks.png",
      "repo_link": "https://github.com/colinhacks/zod",
      "desc": "TypeScript-first schema validation with static type inference",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2175,
      "added_stars": 297,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3571,
      "added_stars": 1067,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3316,
      "added_stars": 2888,
      "builtBy": [
        {
          "username": "tashfeenahmed",
          "href": "https://github.com/tashfeenahmed",
          "avatar": "https://avatars.githubusercontent.com/u/9307356"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "suantea",
          "href": "https://github.com/suantea",
          "avatar": "https://avatars.githubusercontent.com/u/108558399"
        },
        {
          "username": "OhOkThisIsFine",
          "href": "https://github.com/OhOkThisIsFine",
          "avatar": "https://avatars.githubusercontent.com/u/102485413"
        },
        {
          "username": "jasnoorgill",
          "href": "https://github.com/jasnoorgill",
          "avatar": "https://avatars.githubusercontent.com/u/5494586"
        }
      ]
    },
    {
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 570,
      "added_stars": 992,
      "builtBy": [
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "poteto",
          "href": "https://github.com/poteto",
          "avatar": "https://avatars.githubusercontent.com/u/1390709"
        },
        {
          "username": "roshansada",
          "href": "https://github.com/roshansada",
          "avatar": "https://avatars.githubusercontent.com/u/930790"
        },
        {
          "username": "ericzakariasson",
          "href": "https://github.com/ericzakariasson",
          "avatar": "https://avatars.githubusercontent.com/u/25622412"
        },
        {
          "username": "maloneya",
          "href": "https://github.com/maloneya",
          "avatar": "https://avatars.githubusercontent.com/u/9469738"
        }
      ]
    },
    {
      "author": "abhigyanpatwari",
      "repo": "GitNexus",
      "avatar": "https://github.com/abhigyanpatwari.png",
      "repo_link": "https://github.com/abhigyanpatwari/GitNexus",
      "desc": "GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a git repository (Github, Gitlab, Azure, Local) or ZIP file, and get an interactive knowledge graph with a built in Graph RAG Agent. Perfect for code exploration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5151,
      "added_stars": 1006,
      "builtBy": [
        {
          "username": "magyargergo",
          "href": "https://github.com/magyargergo",
          "avatar": "https://avatars.githubusercontent.com/u/11230420"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "abhigyanpatwari",
          "href": "https://github.com/abhigyanpatwari",
          "avatar": "https://avatars.githubusercontent.com/u/126312502"
        },
        {
          "username": "azizur100389",
          "href": "https://github.com/azizur100389",
          "avatar": "https://avatars.githubusercontent.com/u/180941991"
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
      "forks": 2060,
      "added_stars": 504,
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
      "author": "awslabs",
      "repo": "aidlc-workflows",
      "avatar": "https://github.com/awslabs.png",
      "repo_link": "https://github.com/awslabs/aidlc-workflows",
      "desc": "AI-Driven Life Cycle (AI-DLC) adaptive workflow steering rules for AI coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 775,
      "added_stars": 135,
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
      "author": "mlc-ai",
      "repo": "web-llm",
      "avatar": "https://github.com/mlc-ai.png",
      "repo_link": "https://github.com/mlc-ai/web-llm",
      "desc": "High-performance In-browser LLM Inference Engine",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1373,
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
      "author": "magnitudedev",
      "repo": "magnitude",
      "avatar": "https://github.com/magnitudedev.png",
      "repo_link": "https://github.com/magnitudedev/magnitude",
      "desc": "Open source inference server that runs the best local models for your hardware, plugged into the agent you already use. Works with Pi, OpenCode, Hermes, OpenClaw, Codex, Claude Code, Oh My Pi, and Cline.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 192,
      "added_stars": 740,
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
      "author": "actions",
      "repo": "checkout",
      "avatar": "https://github.com/actions.png",
      "repo_link": "https://github.com/actions/checkout",
      "desc": "Action for checking out a repo",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2777,
      "added_stars": 73,
      "builtBy": [
        {
          "username": "ericsciple",
          "href": "https://github.com/ericsciple",
          "avatar": "https://avatars.githubusercontent.com/u/12102068"
        },
        {
          "username": "cory-miller",
          "href": "https://github.com/cory-miller",
          "avatar": "https://avatars.githubusercontent.com/u/13227161"
        },
        {
          "username": "jww3",
          "href": "https://github.com/jww3",
          "avatar": "https://avatars.githubusercontent.com/u/81404201"
        },
        {
          "username": "thboop",
          "href": "https://github.com/thboop",
          "avatar": "https://avatars.githubusercontent.com/u/52323235"
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
      "forks": 398,
      "added_stars": 788,
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
      "author": "solidjs",
      "repo": "solid",
      "avatar": "https://github.com/solidjs.png",
      "repo_link": "https://github.com/solidjs/solid",
      "desc": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1103,
      "added_stars": 41,
      "builtBy": [
        {
          "username": "ryansolid",
          "href": "https://github.com/ryansolid",
          "avatar": "https://avatars.githubusercontent.com/u/2768267"
        },
        {
          "username": "thetarnav",
          "href": "https://github.com/thetarnav",
          "avatar": "https://avatars.githubusercontent.com/u/24491503"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "otonashixav",
          "href": "https://github.com/otonashixav",
          "avatar": "https://avatars.githubusercontent.com/u/42372774"
        },
        {
          "username": "Jutanium",
          "href": "https://github.com/Jutanium",
          "avatar": "https://avatars.githubusercontent.com/u/4033662"
        }
      ]
    },
    {
      "author": "coleam00",
      "repo": "Archon",
      "avatar": "https://github.com/coleam00.png",
      "repo_link": "https://github.com/coleam00/Archon",
      "desc": "The first open-source harness builder for AI coding. Make AI coding deterministic and repeatable.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3463,
      "added_stars": 96,
      "builtBy": [
        {
          "username": "Wirasm",
          "href": "https://github.com/Wirasm",
          "avatar": "https://avatars.githubusercontent.com/u/152263317"
        },
        {
          "username": "coleam00",
          "href": "https://github.com/coleam00",
          "avatar": "https://avatars.githubusercontent.com/u/47287758"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "leex279",
          "href": "https://github.com/leex279",
          "avatar": "https://avatars.githubusercontent.com/u/6664492"
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
      "forks": 1955,
      "added_stars": 261,
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
      "forks": 910,
      "added_stars": 1102,
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
      "author": "caddyserver",
      "repo": "caddy",
      "avatar": "https://github.com/caddyserver.png",
      "repo_link": "https://github.com/caddyserver/caddy",
      "desc": "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4941,
      "added_stars": 981,
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
      "author": "glanceapp",
      "repo": "glance",
      "avatar": "https://github.com/glanceapp.png",
      "repo_link": "https://github.com/glanceapp/glance",
      "desc": "A self-hosted dashboard that puts all your feeds in one place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1445,
      "added_stars": 791,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 299,
      "added_stars": 796,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2228,
      "added_stars": 669,
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
      "author": "nektos",
      "repo": "act",
      "avatar": "https://github.com/nektos.png",
      "repo_link": "https://github.com/nektos/act",
      "desc": "Run your GitHub Actions locally 🚀",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2023,
      "added_stars": 552,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 992,
      "added_stars": 1120,
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
      "author": "traefik",
      "repo": "traefik",
      "avatar": "https://github.com/traefik.png",
      "repo_link": "https://github.com/traefik/traefik",
      "desc": "The Cloud Native Application Proxy",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6184,
      "added_stars": 588,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 170,
      "added_stars": 1791,
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
      "author": "github",
      "repo": "github-mcp-server",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/github-mcp-server",
      "desc": "GitHub's official MCP Server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4902,
      "added_stars": 850,
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
      "author": "pranshuparmar",
      "repo": "witr",
      "avatar": "https://github.com/pranshuparmar.png",
      "repo_link": "https://github.com/pranshuparmar/witr",
      "desc": "Why is this running? Trace any process, port, container, or file back to what started it - CLI + TUI.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 772,
      "added_stars": 3538,
      "builtBy": [
        {
          "username": "pranshuparmar",
          "href": "https://github.com/pranshuparmar",
          "avatar": "https://avatars.githubusercontent.com/u/4262592"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "chojs23",
          "href": "https://github.com/chojs23",
          "avatar": "https://avatars.githubusercontent.com/u/55792153"
        },
        {
          "username": "gaod",
          "href": "https://github.com/gaod",
          "avatar": "https://avatars.githubusercontent.com/u/78291"
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
      "forks": 8968,
      "added_stars": 638,
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
      "author": "CarterPerez-dev",
      "repo": "Cybersecurity-Projects",
      "avatar": "https://github.com/CarterPerez-dev.png",
      "repo_link": "https://github.com/CarterPerez-dev/Cybersecurity-Projects",
      "desc": "Building 70 Projects ranging from beginner to advanced so anyone can — learn from, build upon, use as a reference, or even copy directly. Gamified Cybersecurity learning 👇",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1001,
      "added_stars": 1894,
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
      "author": "weave-os",
      "repo": "router",
      "avatar": "https://github.com/weave-os.png",
      "repo_link": "https://github.com/weave-os/router",
      "desc": "Model router for agentic systems. Routes every prompt to the right model in <50ms. Cut costs 40-70% with just an endpoint change.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 109,
      "added_stars": 2914,
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
      "author": "infiniflow",
      "repo": "ragflow",
      "avatar": "https://github.com/infiniflow.png",
      "repo_link": "https://github.com/infiniflow/ragflow",
      "desc": "RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context layer for LLMs",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10624,
      "added_stars": 3500,
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
          "username": "writinwaters",
          "href": "https://github.com/writinwaters",
          "avatar": "https://avatars.githubusercontent.com/u/93570324"
        },
        {
          "username": "dcc123456",
          "href": "https://github.com/dcc123456",
          "avatar": "https://avatars.githubusercontent.com/u/20180003"
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
      "forks": 555,
      "added_stars": 940,
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
      "author": "go-task",
      "repo": "task",
      "avatar": "https://github.com/go-task.png",
      "repo_link": "https://github.com/go-task/task",
      "desc": "A fast, cross-platform build tool inspired by Make, designed for modern workflows.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 900,
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
      "author": "krillinai",
      "repo": "KrillinAI",
      "avatar": "https://github.com/krillinai.png",
      "repo_link": "https://github.com/krillinai/KrillinAI",
      "desc": "AI video translation & dubbing tool for humans and AI Agents, powered by LLMs. Full pipeline: download, transcribe, translate, TTS dub, reformat, cover generation. 100+ languages, optimized for YouTube, TikTok, Bilibili, Douyin, and more.AI视频翻译配音工具，面向人类与AI Agent，100+语言全链路，CLI分阶段调用，适配抖音、小红书、哔哩哔哩、视频号、TikTok、YouTube",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1087,
      "added_stars": 723,
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
          "username": "puji4810",
          "href": "https://github.com/puji4810",
          "avatar": "https://avatars.githubusercontent.com/u/148682040"
        },
        {
          "username": "krillinai",
          "href": "https://github.com/krillinai",
          "avatar": "https://avatars.githubusercontent.com/u/2386538"
        },
        {
          "username": "PairZhu",
          "href": "https://github.com/PairZhu",
          "avatar": "https://avatars.githubusercontent.com/u/47098840"
        }
      ]
    },
    {
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "The system of action for AI-native cybersecurity—where intent becomes governed execution, evidence becomes operational memory, and every operation improves the next.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1034,
      "added_stars": 857,
      "builtBy": [
        {
          "username": "Ed1s0nZ",
          "href": "https://github.com/Ed1s0nZ",
          "avatar": "https://avatars.githubusercontent.com/u/83812544"
        },
        {
          "username": "RuoJi6",
          "href": "https://github.com/RuoJi6",
          "avatar": "https://avatars.githubusercontent.com/u/79234113"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "ruanmingchen",
          "href": "https://github.com/ruanmingchen",
          "avatar": "https://avatars.githubusercontent.com/u/36464280"
        },
        {
          "username": "donnel666",
          "href": "https://github.com/donnel666",
          "avatar": "https://avatars.githubusercontent.com/u/200881010"
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
      "forks": 17703,
      "added_stars": 2981,
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API 一站式开源中转服务，让 Claude、Openai 、Gemini、Grok订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8393,
      "added_stars": 4883,
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
      "author": "TecharoHQ",
      "repo": "anubis",
      "avatar": "https://github.com/TecharoHQ.png",
      "repo_link": "https://github.com/TecharoHQ/anubis",
      "desc": "Weighs the soul of incoming HTTP requests to stop AI crawlers",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 710,
      "added_stars": 1063,
      "builtBy": [
        {
          "username": "Xe",
          "href": "https://github.com/Xe",
          "avatar": "https://avatars.githubusercontent.com/u/529003"
        },
        {
          "username": "JasonLovesDoggo",
          "href": "https://github.com/JasonLovesDoggo",
          "avatar": "https://avatars.githubusercontent.com/u/66544866"
        },
        {
          "username": "SlyEcho",
          "href": "https://github.com/SlyEcho",
          "avatar": "https://avatars.githubusercontent.com/u/795193"
        },
        {
          "username": "lotharsm",
          "href": "https://github.com/lotharsm",
          "avatar": "https://avatars.githubusercontent.com/u/11882577"
        }
      ]
    },
    {
      "author": "sundowndev",
      "repo": "phoneinfoga",
      "avatar": "https://github.com/sundowndev.png",
      "repo_link": "https://github.com/sundowndev/phoneinfoga",
      "desc": "Information gathering framework for phone numbers",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5779,
      "added_stars": 517,
      "builtBy": [
        {
          "username": "sundowndev",
          "href": "https://github.com/sundowndev",
          "avatar": "https://avatars.githubusercontent.com/u/16480203"
        },
        {
          "username": "renovate-bot",
          "href": "https://github.com/renovate-bot",
          "avatar": "https://avatars.githubusercontent.com/u/25180681"
        },
        {
          "username": "RomainMaillot",
          "href": "https://github.com/RomainMaillot",
          "avatar": "https://avatars.githubusercontent.com/u/32742569"
        },
        {
          "username": "d4rkc0nd0r",
          "href": "https://github.com/d4rkc0nd0r",
          "avatar": "https://avatars.githubusercontent.com/u/48673505"
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
      "forks": 1355,
      "added_stars": 10154,
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
      "forks": 260,
      "added_stars": 3126,
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
      "forks": 2715,
      "added_stars": 7710,
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
      "author": "vitali87",
      "repo": "code-graph-rag",
      "avatar": "https://github.com/vitali87.png",
      "repo_link": "https://github.com/vitali87/code-graph-rag",
      "desc": "The ultimate RAG for your monorepo. Query, understand, and edit multi-language codebases with the power of AI and knowledge graphs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 657,
      "added_stars": 2480,
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
      "author": "cactus-compute",
      "repo": "needle",
      "avatar": "https://github.com/cactus-compute.png",
      "repo_link": "https://github.com/cactus-compute/needle",
      "desc": "14MB foundation model for tiny devices; phones, wearables, smart home, and robots.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 660,
      "added_stars": 6940,
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
      "author": "youssofal",
      "repo": "MTPLX",
      "avatar": "https://github.com/youssofal.png",
      "repo_link": "https://github.com/youssofal/MTPLX",
      "desc": "3x faster speeds on MLX | Qwen 3.8 27B | Native MTP Speculative Decoding On Apple Silicon With No External Drafter.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 154,
      "added_stars": 922,
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
      "author": "3b1b",
      "repo": "manim",
      "avatar": "https://github.com/3b1b.png",
      "repo_link": "https://github.com/3b1b/manim",
      "desc": "Animation engine for explanatory math videos",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7653,
      "added_stars": 4029,
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
      "author": "google",
      "repo": "skills",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/skills",
      "desc": "Agent Skills for Google products and technologies",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1568,
      "added_stars": 4015,
      "builtBy": [
        {
          "username": "cloud-ix-copybara",
          "href": "https://github.com/cloud-ix-copybara",
          "avatar": "https://avatars.githubusercontent.com/u/277152880"
        },
        {
          "username": "holtskinner",
          "href": "https://github.com/holtskinner",
          "avatar": "https://avatars.githubusercontent.com/u/13262395"
        },
        {
          "username": "martinvarelaj",
          "href": "https://github.com/martinvarelaj",
          "avatar": "https://avatars.githubusercontent.com/u/52255361"
        },
        {
          "username": "wangauone",
          "href": "https://github.com/wangauone",
          "avatar": "https://avatars.githubusercontent.com/u/51683731"
        },
        {
          "username": "helloeve",
          "href": "https://github.com/helloeve",
          "avatar": "https://avatars.githubusercontent.com/u/2510012"
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
      "forks": 52528,
      "added_stars": 21938,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2381,
      "added_stars": 7886,
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
          "username": "bultodepapas",
          "href": "https://github.com/bultodepapas",
          "avatar": "https://avatars.githubusercontent.com/u/13193085"
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
      "forks": 1862,
      "added_stars": 2758,
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
      "author": "abi",
      "repo": "screenshot-to-code",
      "avatar": "https://github.com/abi.png",
      "repo_link": "https://github.com/abi/screenshot-to-code",
      "desc": "Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9460,
      "added_stars": 3939,
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
      "author": "huangruiteng",
      "repo": "loopx",
      "avatar": "https://github.com/huangruiteng.png",
      "repo_link": "https://github.com/huangruiteng/loopx",
      "desc": "Long-horizon agent control plane for durable, governed work across Codex, Claude Code, and other harnesses.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 502,
      "added_stars": 4133,
      "builtBy": [
        {
          "username": "huangruiteng",
          "href": "https://github.com/huangruiteng",
          "avatar": "https://avatars.githubusercontent.com/u/14976749"
        },
        {
          "username": "cocolord",
          "href": "https://github.com/cocolord",
          "avatar": "https://avatars.githubusercontent.com/u/17559402"
        },
        {
          "username": "steven-kid",
          "href": "https://github.com/steven-kid",
          "avatar": "https://avatars.githubusercontent.com/u/96154058"
        },
        {
          "username": "yuefengw",
          "href": "https://github.com/yuefengw",
          "avatar": "https://avatars.githubusercontent.com/u/60574042"
        },
        {
          "username": "wchwawa",
          "href": "https://github.com/wchwawa",
          "avatar": "https://avatars.githubusercontent.com/u/121164350"
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
      "forks": 1696,
      "added_stars": 10590,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Local UI to run and train LLMs and diffusion models. Supports GGUF, MLX, Qwen3.8, DeepSeek-V4, MiniMax-H3, Gemma 4, FLUX and more.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6872,
      "added_stars": 6299,
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
      "author": "jundot",
      "repo": "omlx",
      "avatar": "https://github.com/jundot.png",
      "repo_link": "https://github.com/jundot/omlx",
      "desc": "LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1827,
      "added_stars": 3056,
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
      "author": "donnemartin",
      "repo": "system-design-primer",
      "avatar": "https://github.com/donnemartin.png",
      "repo_link": "https://github.com/donnemartin/system-design-primer",
      "desc": "Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 58243,
      "added_stars": 8032,
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
      "author": "blader",
      "repo": "humanizer",
      "avatar": "https://github.com/blader.png",
      "repo_link": "https://github.com/blader/humanizer",
      "desc": "Agent skill that removes signs of AI-generated writing from text",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3617,
      "added_stars": 9214,
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
          "username": "warp-agent",
          "href": "https://github.com/warp-agent",
          "avatar": "https://avatars.githubusercontent.com/u/243858445"
        },
        {
          "username": "wilu222",
          "href": "https://github.com/wilu222",
          "avatar": "https://avatars.githubusercontent.com/u/37253580"
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
      "forks": 3373,
      "added_stars": 3451,
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
      "author": "virgiliojr94",
      "repo": "book-to-skill",
      "avatar": "https://github.com/virgiliojr94.png",
      "repo_link": "https://github.com/virgiliojr94/book-to-skill",
      "desc": "Turn any technical book PDF into a Claude Code skill — ready to study, reference, and use while you work.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2966,
      "added_stars": 12346,
      "builtBy": [
        {
          "username": "virgiliojr94",
          "href": "https://github.com/virgiliojr94",
          "avatar": "https://avatars.githubusercontent.com/u/23645449"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "dex0shubham",
          "href": "https://github.com/dex0shubham",
          "avatar": "https://avatars.githubusercontent.com/u/183437397"
        },
        {
          "username": "Hotragn",
          "href": "https://github.com/Hotragn",
          "avatar": "https://avatars.githubusercontent.com/u/103170876"
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
      "forks": 18518,
      "added_stars": 19671,
      "builtBy": [
        {
          "username": "harry0703",
          "href": "https://github.com/harry0703",
          "avatar": "https://avatars.githubusercontent.com/u/4928832"
        },
        {
          "username": "yyhhyyyyyy",
          "href": "https://github.com/yyhhyyyyyy",
          "avatar": "https://avatars.githubusercontent.com/u/95077259"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "author": "Tencent",
      "repo": "AI-Infra-Guard",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/AI-Infra-Guard",
      "desc": "A full-stack AI Red Teaming platform securing AI ecosystems via Agent Scan, Skills Scan, MCP scan, AI Infra scan and LLM jailbreak evaluation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 573,
      "added_stars": 1776,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
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
      "title": "20 Agentic AI Terms Every Developer Should Know (Explained Simply)",
      "description": "Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...",
      "url": "https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii",
      "tags": "ai, agents, mcp, beginners",
      "reactions": 127,
      "comments": 68,
      "reading_time": 11,
      "author": "sylwia-lask"
    },
    {
      "title": "AI Engineering Is Easy. Changing How We Work Is Hard",
      "description": "AI engineering sounds fancy. New terms are everywhere: agentic development, AI-native engineering,...",
      "url": "https://dev.to/ujja/ai-engineering-is-easy-changing-how-we-work-is-hard-39j4",
      "tags": "ai, agents, softwaredevelopment, architecture",
      "reactions": 29,
      "comments": 19,
      "reading_time": 4,
      "author": "ujja"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-1mo8",
      "tags": "weeklyretro",
      "reactions": 24,
      "comments": 19,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Taming Flutter Infinite Scroll: Why 3 Lines of async* Missed the Point, and How BlocSignal Fixes It",
      "description": "Explore why using async* generators for infinite scroll pagination in Flutter hides subtle concurrency crashes, and discover how BlocSignal solves rapid scrolling race conditions streamlessly with droppable().",
      "url": "https://dev.to/gde/taming-flutter-infinite-scroll-why-3-lines-of-async-missed-the-point-and-how-blocsignal-fixes-it-3n48",
      "tags": "flutter, dart, architecture, statemanagement",
      "reactions": 6,
      "comments": 0,
      "reading_time": 8,
      "author": "randalschwartz"
    },
    {
      "title": "I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things",
      "description": "TL;DR  I recently finished a project from Udacity's Future AWS Agent Engineer Nanodegree Program,...",
      "url": "https://dev.to/hemapriya_kanagala/i-built-my-first-aws-agent-workflow-and-the-hardest-part-was-getting-it-to-stop-assuming-things-8fg",
      "tags": "discuss, aws, beginners, agents",
      "reactions": 70,
      "comments": 26,
      "reading_time": 17,
      "author": "hemapriya_kanagala"
    },
    {
      "title": "Taming Flutter Infinite Scroll (Part 2): Turning ScrollController into a Reactive State Machine with CubitSignalMixin",
      "description": "Discover how to eliminate Flutter StatefulWidget boilerplate and overcome Dart's single-inheritance wall by combining ScrollController with CubitSignalMixin and BlocSignalMixin for a 100% StatelessWidget UI.",
      "url": "https://dev.to/gde/taming-flutter-infinite-scroll-part-2-turning-scrollcontroller-into-a-reactive-state-machine-cgh",
      "tags": "flutter, dart, architecture, statemanagement",
      "reactions": 7,
      "comments": 0,
      "reading_time": 9,
      "author": "randalschwartz"
    },
    {
      "title": "Kong AI Gateway 2.0 on Google Cloud: Securing GKE, Cloud Run, and Vertex AI(Agent Platform)",
      "description": "Most teams running on Google Cloud don't pick one compute model and stay there. Some services live...",
      "url": "https://dev.to/gde/kong-ai-gateway-20-on-google-cloud-securing-gke-cloud-run-and-vertex-ai-219o",
      "tags": "ai, googlecloud, kubernetes, security",
      "reactions": 12,
      "comments": 0,
      "reading_time": 4,
      "author": "saurabhmi"
    },
    {
      "title": "Gemini Agentic Video Isn't Always Cheaper: A 24-Run Benchmark",
      "description": "A controlled Gemini 3.7 Flash benchmark shows why agentic video is excellent for long-form search—but...",
      "url": "https://dev.to/gde/gemini-agentic-video-isnt-always-cheaper-a-24-run-benchmark-4ge3",
      "tags": "gemini, google",
      "reactions": 7,
      "comments": 0,
      "reading_time": 5,
      "author": "jimmyliao"
    },
    {
      "title": "Your First AI Agent: A Beginner's Guide to Building an AI Trend finder with ADK",
      "description": "The world of AI agents is moving at lightning speed. Keeping up with the latest trends, new...",
      "url": "https://dev.to/googleai/your-first-ai-agent-a-beginners-guide-to-building-an-ai-trend-finder-with-adk-5f8k",
      "tags": "agents, ai, googlecloud",
      "reactions": 17,
      "comments": 0,
      "reading_time": 12,
      "author": "shirmeirlador"
    },
    {
      "title": "My Thermostat Was Speaking an Industrial Protocol. Just Not to Me.",
      "description": "A senior software engineer who knew nothing about hardware, a BACnet MS/TP thermostat, and an RS-485 bus. How I ended up with an ESP32-S3 gateway on a DIN rail, wired into Home Assistant, in 15 evenings.",
      "url": "https://dev.to/managerfx/my-thermostat-was-speaking-an-industrial-protocol-just-not-to-me-2a0p",
      "tags": "bacnet, esp32, iot, ai",
      "reactions": 17,
      "comments": 0,
      "reading_time": 20,
      "author": "managerfx"
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
      "title": "Git Submodules as a Package Manager",
      "url": "https://nesbitt.io/2026/09/01/git-submodules-as-a-package-manager.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "vcs"
      ],
      "id": "j2hxnq"
    },
    {
      "title": "Reverse Engineering a Chip (or well, a GDS)",
      "url": "https://pradyun.net/blog/reverse_engineering.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "hardware"
      ],
      "id": "lhmfw7"
    },
    {
      "title": "MISRust: Mapping MISRA-C++ Coding Guidelines to the Rust Programming Language",
      "url": "https://arxiv.org/abs/2605.23490",
      "score": 2,
      "comments": 1,
      "tags": [
        "rust"
      ],
      "id": "naoawd"
    },
    {
      "title": "Exploring Mojo’s raw pointer type",
      "url": "https://melodyogonna.substack.com/p/exploring-mojos-raw-pointer-type",
      "score": 7,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "f4jtaf"
    },
    {
      "title": "Plush's New Register-Based Interpreter Is Insanely Fast",
      "url": "https://pointersgonewild.com/2026-09-02-plushs-new-register-based-interpreter/",
      "score": 3,
      "comments": 0,
      "tags": [
        "compilers",
        "rust"
      ],
      "id": "4xy1l4"
    },
    {
      "title": "AI it's not bad but it's a tool",
      "url": "",
      "score": 3,
      "comments": 1,
      "tags": [
        "vibecoding"
      ],
      "id": "2eai0v"
    },
    {
      "title": "Stop Thinking of LLMs as Next-Token Predictors",
      "url": "https://gmcgoldr.github.io/2026/09/04/llm-next-token-predictors.html",
      "score": 5,
      "comments": 3,
      "tags": [
        "vibecoding"
      ],
      "id": "fiirrs"
    },
    {
      "title": "FLT: Anthropic has beaten me to it",
      "url": "https://xenaproject.wordpress.com/2026/09/04/flt-anthropic-has-beaten-me-to-it/",
      "score": 32,
      "comments": 5,
      "tags": [
        "math",
        "vibecoding"
      ],
      "id": "5iacaa"
    },
    {
      "title": "Babashka 1.13.220 gets FFI",
      "url": "https://blog.michielborkent.nl/babashka-ffi.html",
      "score": 22,
      "comments": 3,
      "tags": [
        "clojure"
      ],
      "id": "o8bp2s"
    },
    {
      "title": "jank reimagines C++ errors and gets an official native package repo",
      "url": "https://jank-lang.org/blog/2026-09-04-better-and-better/",
      "score": 19,
      "comments": 0,
      "tags": [
        "c++",
        "clojure",
        "compilers",
        "plt"
      ],
      "id": "rhjedr"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "ranit",
      "descendants": 33,
      "id": 49573455,
      "kids": [
        49573528,
        49573483,
        49573523,
        49573558,
        49573668,
        49573690,
        49573607,
        49573507,
        49573655,
        49573656,
        49573620,
        49573592,
        49573510,
        49573513,
        49573689,
        49573622,
        49573541,
        49573544,
        49573686
      ],
      "score": 60,
      "time": 1788587529,
      "title": "Why are European countries moving their gold out of North America?",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/cvgyn8q8gqxo"
    },
    {
      "by": "negura",
      "descendants": 229,
      "id": 49570669,
      "kids": [
        49571286,
        49571586,
        49571772,
        49570868,
        49573396,
        49572805,
        49571871,
        49571335,
        49571760,
        49572601,
        49573012,
        49572322,
        49571906,
        49573283,
        49571784,
        49571034,
        49572380,
        49570823,
        49572041,
        49572826,
        49572201,
        49572468,
        49571045,
        49572148,
        49572951,
        49571261
      ],
      "score": 411,
      "time": 1788558721,
      "title": "Actively exploited sandbox RCE in all Chromium versions",
      "type": "story",
      "url": "https://nvd.nist.gov/vuln/detail/cve-2026-85046"
    },
    {
      "by": "moultano",
      "descendants": 1273,
      "id": 49563355,
      "kids": [
        49573550,
        49570212,
        49563657,
        49563695,
        49570222,
        49563922,
        49565613,
        49568952,
        49564090,
        49563763,
        49564343,
        49573021,
        49564859,
        49565071,
        49568170,
        49563639,
        49563053,
        49565200,
        49568090,
        49565558,
        49568742,
        49563818,
        49565275,
        49568211,
        49573295,
        49564492,
        49564257,
        49565813,
        49563891,
        49562975,
        49566108,
        49568309,
        49567815,
        49565264,
        49573308,
        49566941,
        49567697,
        49563894,
        49570794,
        49563984,
        49563681,
        49565792,
        49571521,
        49563609,
        49565915,
        49563862,
        49568436,
        49564631,
        49564344,
        49572847,
        49563889,
        49571381,
        49563664,
        49563266,
        49564730,
        49564432,
        49564027,
        49572227,
        49569587,
        49568536,
        49570539,
        49566913,
        49573173,
        49567359,
        49564107,
        49568980,
        49564098,
        49564319,
        49568884,
        49564184,
        49563848,
        49567995,
        49563878,
        49565216,
        49572856,
        49564489,
        49566956,
        49564872,
        49571831,
        49563669,
        49566488,
        49566791,
        49564320,
        49568326,
        49566895,
        49565844,
        49565982,
        49568084,
        49564401,
        49564606,
        49567636,
        49567867,
        49564482,
        49570682,
        49564767,
        49565026,
        49566746,
        49565326,
        49563800,
        49564812,
        49572108,
        49565153,
        49567856,
        49572635,
        49564266,
        49567164,
        49568586,
        49571043,
        49564669,
        49570847,
        49568731,
        49568845,
        49564085,
        49568288,
        49564990,
        49564370,
        49563914,
        49570491,
        49566328,
        49563915,
        49564058,
        49566345,
        49562781,
        49568407,
        49569092,
        49564660,
        49569677,
        49567628,
        49569199,
        49563742,
        49564958,
        49569973,
        49567372,
        49564542,
        49564071,
        49565961,
        49566567,
        49569140,
        49566909,
        49568476,
        49564056,
        49571220,
        49564450,
        49564279,
        49566463,
        49570632,
        49563953,
        49563680,
        49566308,
        49563095,
        49567785,
        49563887,
        49563908,
        49563964,
        49564267,
        49567475,
        49567301,
        49566222,
        49563648,
        49568348,
        49564399,
        49568394,
        49564619,
        49570459,
        49564431,
        49564376,
        49564181,
        49563944,
        49565895,
        49563979,
        49567881,
        49569280,
        49565788,
        49570211,
        49567316,
        49566714,
        49563700,
        49566947,
        49563870,
        49563505,
        49567756,
        49565073,
        49563799,
        49571806,
        49572449,
        49569879,
        49568054,
        49571492,
        49565391,
        49565836,
        49564116,
        49568340,
        49565143,
        49564086,
        49566369,
        49564445,
        49572828,
        49565025,
        49571792,
        49566490,
        49564222,
        49564077,
        49564232,
        49563874,
        49564103,
        49565429,
        49566961,
        49564700,
        49564611,
        49563196,
        49568399
      ],
      "score": 1614,
      "text": "<a href=\"https:&#x2F;&#x2F;www.reuters.com&#x2F;world&#x2F;europe&#x2F;openai-agents-hijacked-german-website-previously-undisclosed-ai-breakout-this-2026-09-04&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.reuters.com&#x2F;world&#x2F;europe&#x2F;openai-agents-hijacked-...</a>",
      "time": 1788522893,
      "title": "Discovery of a new OpenAI agent message board",
      "type": "story",
      "url": "https://collusion.wiki/"
    },
    {
      "by": "jlebar",
      "descendants": 356,
      "id": 49568506,
      "kids": [
        49568667,
        49568787,
        49572846,
        49570557,
        49568747,
        49572477,
        49569311,
        49568915,
        49569073,
        49568759,
        49569603,
        49568684,
        49569442,
        49570495,
        49568773,
        49572012,
        49571192,
        49569918,
        49569460,
        49568655,
        49573073,
        49568723,
        49572251,
        49569653,
        49572123,
        49569076,
        49570068,
        49569623,
        49571341,
        49568838,
        49570094,
        49569067,
        49569384,
        49570494,
        49570657,
        49572726,
        49571033,
        49572173,
        49571881,
        49570123,
        49569263,
        49569170,
        49571419,
        49569273,
        49570698,
        49569690,
        49569038,
        49570395,
        49570396,
        49571490,
        49570421,
        49571231,
        49569684,
        49569459,
        49569173,
        49569134,
        49568832,
        49571065,
        49568956,
        49568763,
        49569339,
        49569931,
        49569962,
        49570442,
        49570334,
        49570484,
        49568801,
        49568957,
        49568751,
        49568743,
        49569100,
        49568969
      ],
      "score": 574,
      "text": "<a href=\"https:&#x2F;&#x2F;xenaproject.wordpress.com&#x2F;2026&#x2F;09&#x2F;04&#x2F;flt-anthropic-has-beaten-me-to-it&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;xenaproject.wordpress.com&#x2F;2026&#x2F;09&#x2F;04&#x2F;flt-anthropic-h...</a>",
      "time": 1788547376,
      "title": "Formalizing Fermat's Last Theorem",
      "type": "story",
      "url": "https://www.anthropic.com/research/formalizing-fermats-last-theorem"
    },
    {
      "by": "p4bl0",
      "descendants": 71,
      "id": 49569896,
      "kids": [
        49570207,
        49571580,
        49571665,
        49570310,
        49571116,
        49571443,
        49571024,
        49572530,
        49572634,
        49570711,
        49570542,
        49570567,
        49571168,
        49570508,
        49571247,
        49571321,
        49570621,
        49571194,
        49571552,
        49570606,
        49570817,
        49570795,
        49570897,
        49571899,
        49571438,
        49570435,
        49570327,
        49572333,
        49571727,
        49570841
      ],
      "score": 226,
      "time": 1788554089,
      "title": "Statichost.eu – European static site hosting",
      "type": "story",
      "url": "https://www.statichost.eu/"
    },
    {
      "by": "Topfi",
      "descendants": 98,
      "id": 49570545,
      "kids": [
        49571081,
        49572801,
        49571150,
        49570806,
        49573389,
        49572299,
        49570948,
        49571737,
        49571815,
        49570914,
        49570925,
        49570833,
        49571159,
        49571000,
        49570860,
        49571854,
        49571662,
        49571690,
        49570700,
        49571041,
        49571294,
        49570926,
        49573382
      ],
      "score": 185,
      "time": 1788557959,
      "title": "GPT-6 Astra on OpenRouter",
      "type": "story",
      "url": "https://openrouter.ai/openai/gpt-6-astra"
    },
    {
      "by": "Cider9986",
      "descendants": 33,
      "id": 49571634,
      "kids": [
        49573035,
        49573190,
        49573494,
        49573445,
        49572505,
        49573466,
        49573555,
        49572636,
        49573537,
        49572493,
        49572342,
        49572369
      ],
      "score": 106,
      "time": 1788566656,
      "title": "Nitter has more working instances than before the takedowns",
      "type": "story",
      "url": "https://codeberg.org/mv12star/shitter/wiki/Instances"
    },
    {
      "by": "iopapa",
      "descendants": 138,
      "id": 49569366,
      "kids": [
        49572155,
        49570096,
        49569752,
        49572292,
        49573486,
        49569673,
        49570381,
        49571070,
        49571604,
        49570620,
        49571875,
        49572733,
        49570706,
        49569618,
        49570813,
        49570228,
        49570755,
        49569750,
        49570712,
        49571799,
        49570862,
        49571824,
        49570913,
        49572334,
        49572058,
        49570779,
        49570204,
        49571726,
        49569528,
        49569601,
        49569694,
        49571959,
        49572958,
        49571846,
        49569652,
        49570612,
        49569555,
        49571414,
        49570997,
        49570426,
        49570030,
        49570613,
        49570224,
        49570194,
        49570240,
        49570225,
        49570292,
        49572053,
        49572220,
        49572208,
        49570257
      ],
      "score": 227,
      "time": 1788551309,
      "title": "Can AI design circuit boards yet?",
      "type": "story",
      "url": "https://eebench.org/blog/can-ai-design-circuit-boards-yet/"
    },
    {
      "by": "ErenayDev",
      "descendants": 4,
      "id": 49519850,
      "kids": [
        49572922,
        49572853,
        49572806,
        49573337,
        49573599,
        49573112
      ],
      "score": 37,
      "time": 1788255370,
      "title": "Git Submodules as a Package Manager",
      "type": "story",
      "url": "https://nesbitt.io/2026/09/01/git-submodules-as-a-package-manager.html"
    },
    {
      "by": "nojs",
      "descendants": 36,
      "id": 49571632,
      "kids": [
        49573452,
        49573593,
        49571986,
        49572176,
        49573404,
        49572190,
        49572229,
        49573368,
        49571960,
        49572993,
        49571950,
        49571937
      ],
      "score": 101,
      "time": 1788566654,
      "title": "Artificial Analysis Intelligence Index v4.2",
      "type": "story",
      "url": "https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-2"
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
      "title": "Hey Everyone! I’m Sanidhya from MLH",
      "description": "MLH AI Roadshow Bengaluru       Hey Everyone! I am Sanidhya Goel, a new MLH Hackathon Community...",
      "url": "https://blog.mlh.com/hey-everyone-im-sanidhya-from-mlh-25an",
      "tags": "mlh, community, devrel, career",
      "reactions": 44,
      "comments": 12,
      "reading_time": 4,
      "author": "sanidhya_at_mlh"
    },
    {
      "title": "Are We Becoming AI Managers Instead of Developers?",
      "description": "I've been doing front-end development for somewhere around 20 years now. During that time, I've...",
      "url": "https://dev.to/brianmtreese/are-we-becoming-ai-managers-instead-of-developers-3j52",
      "tags": "ai, programming, softwaredevelopment, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "brianmtreese"
    },
    {
      "title": "Beyond Working Code: My Growth Through the Meta x MLH Production Engineering Fellowship",
      "description": "Gabriel Changamire  Before the Meta x MLH Fellowship, I understood software mainly through the act of...",
      "url": "https://dev.to/gchangamire/beyond-working-code-my-growth-through-the-meta-x-mlh-production-engineering-fellowship-22l0",
      "tags": "career, devops, learning, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "gchangamire"
    },
    {
      "title": "Who Can Still Push to main? An Access and Process Audit in 30 Seconds",
      "description": "The question is not who has push access to main — that is an access-control question, answered in the...",
      "url": "https://dev.to/ke_jia_24bb2f9f84f14f728a/who-can-still-push-to-main-an-access-and-process-audit-in-30-seconds-12dh",
      "tags": "security, git, devops, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 10,
      "author": "ke_jia_24bb2f9f84f14f728a"
    },
    {
      "title": "I Built an AI Career Test That Gives You Career Hypotheses, Not a Career Verdict",
      "description": "Career questions have become harder to answer in the AI era. It is no longer only about what someone...",
      "url": "https://dev.to/mileschen/i-built-an-ai-career-test-that-gives-you-career-hypotheses-not-a-career-verdict-ifp",
      "tags": "ai, career, showdev, interview",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "mileschen"
    },
    {
      "title": "47% of my lifetime views are on articles with no link out",
      "description": "I audited every article on this account on 2026-09-04. 63 published. 24 of them contain no link to...",
      "url": "https://dev.to/mahirhir/47-of-my-lifetime-views-are-on-articles-with-no-link-out-234a",
      "tags": "writing, career, opensource, meta",
      "reactions": 5,
      "comments": 0,
      "reading_time": 3,
      "author": "mahirhir"
    },
    {
      "title": "How senior engineers pass hard technical interviews and land big offers",
      "description": "Two engineers with the same years and the same stack sit the same loop. One gets a mid-level offer,...",
      "url": "https://dev.to/moputa/how-senior-engineers-pass-hard-technical-interviews-and-land-big-offers-23nj",
      "tags": "career, senior, hiring, technicalinterviews",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "moputa"
    },
    {
      "title": "Without AI Models, Who Am I?",
      "description": "I graduated in July 2025 with a degree in Computer Engineering. Not long after graduating, I got my...",
      "url": "https://dev.to/itsmeangeloo/without-ai-models-who-am-i-5b50",
      "tags": "discuss, career, beginners, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "itsmeangeloo"
    },
    {
      "title": "How to Show Engineering Ownership When the Repositories Are Private",
      "description": "Every repository I have shipped production code into belongs to somebody else. This is the method I use to make ownership claims that can be judged ra",
      "url": "https://dev.to/efe_genc/how-to-show-engineering-ownership-when-the-repositories-are-private-3fon",
      "tags": "career, git, softwareengineering, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "efe_genc"
    },
    {
      "title": "My site was indexed on Google for three weeks and ranked for nothing. Every backlink I had was nofollow.",
      "description": "I shipped my portfolio on 23 July. Then I did what everyone tells you to do.  I put the link in my...",
      "url": "https://dev.to/hecodesforme/my-site-was-indexed-on-google-for-three-weeks-and-ranked-for-nothing-every-backlink-i-had-was-2fi9",
      "tags": "seo, webdev, beginners, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "hecodesforme"
    }
  ]
}
```

