# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-06 06:34:40 UTC

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
      "forks": 5250,
      "added_stars": 10109,
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
      "forks": 9064,
      "added_stars": 1839,
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
      "author": "magnitudedev",
      "repo": "magnitude",
      "avatar": "https://github.com/magnitudedev.png",
      "repo_link": "https://github.com/magnitudedev/magnitude",
      "desc": "Open source inference server that runs the best local models for your hardware, plugged into the agent you already use. Works with Pi, OpenCode, Hermes, OpenClaw, Codex, Claude Code, Oh My Pi, and Cline.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 240,
      "added_stars": 1396,
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
      "author": "every-app",
      "repo": "open-seo",
      "avatar": "https://github.com/every-app.png",
      "repo_link": "https://github.com/every-app/open-seo",
      "desc": "Open source alternative to Semrush and Ahrefs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2171,
      "added_stars": 2755,
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
      "forks": 3585,
      "added_stars": 958,
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
      "forks": 3347,
      "added_stars": 2361,
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
      "author": "rmyndharis",
      "repo": "OpenWA",
      "avatar": "https://github.com/rmyndharis.png",
      "repo_link": "https://github.com/rmyndharis/OpenWA",
      "desc": "Free, Open Source, Self-Hosted WhatsApp API Gateway",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3199,
      "added_stars": 499,
      "builtBy": [
        {
          "username": "rmyndharis",
          "href": "https://github.com/rmyndharis",
          "avatar": "https://avatars.githubusercontent.com/u/2390382"
        },
        {
          "username": "tobiasstrebitzer",
          "href": "https://github.com/tobiasstrebitzer",
          "avatar": "https://avatars.githubusercontent.com/u/222509"
        },
        {
          "username": "m7fz7",
          "href": "https://github.com/m7fz7",
          "avatar": "https://avatars.githubusercontent.com/u/75252008"
        },
        {
          "username": "albanobattistella",
          "href": "https://github.com/albanobattistella",
          "avatar": "https://avatars.githubusercontent.com/u/34811668"
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
      "forks": 2065,
      "added_stars": 406,
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
      "author": "vercel-labs",
      "repo": "portless",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/portless",
      "desc": "Replace port numbers with stable, named local URLs. For humans and agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 399,
      "added_stars": 832,
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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 581,
      "added_stars": 789,
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
      "author": "humanlayer",
      "repo": "skills",
      "avatar": "https://github.com/humanlayer.png",
      "repo_link": "https://github.com/humanlayer/skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 79,
      "added_stars": 1990,
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
      "author": "awslabs",
      "repo": "aidlc-workflows",
      "avatar": "https://github.com/awslabs.png",
      "repo_link": "https://github.com/awslabs/aidlc-workflows",
      "desc": "AI-Driven Life Cycle (AI-DLC) adaptive workflow steering rules for AI coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 779,
      "added_stars": 149,
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
      "forks": 1374,
      "added_stars": 392,
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
      "author": "colinhacks",
      "repo": "zod",
      "avatar": "https://github.com/colinhacks.png",
      "repo_link": "https://github.com/colinhacks/zod",
      "desc": "TypeScript-first schema validation with static type inference",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2176,
      "added_stars": 304,
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
      "author": "abhigyanpatwari",
      "repo": "GitNexus",
      "avatar": "https://github.com/abhigyanpatwari.png",
      "repo_link": "https://github.com/abhigyanpatwari/GitNexus",
      "desc": "GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a git repository (Github, Gitlab, Azure, Local) or ZIP file, and get an interactive knowledge graph with a built in Graph RAG Agent. Perfect for code exploration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5154,
      "added_stars": 766,
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
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 3465,
      "added_stars": 95,
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
      "forks": 1957,
      "added_stars": 289,
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
      "author": "KnockOutEZ",
      "repo": "wigolo",
      "avatar": "https://github.com/KnockOutEZ.png",
      "repo_link": "https://github.com/KnockOutEZ/wigolo",
      "desc": "The go-to web for your AI coding agent — local-first search, fetch, crawl & research over MCP. No API keys, no cloud, $0/query. Public beta.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 404,
      "added_stars": 298,
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
      "forks": 913,
      "added_stars": 1155,
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
      "forks": 1446,
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
      "author": "caddyserver",
      "repo": "caddy",
      "avatar": "https://github.com/caddyserver.png",
      "repo_link": "https://github.com/caddyserver/caddy",
      "desc": "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4943,
      "added_stars": 973,
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
      "forks": 304,
      "added_stars": 807,
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
      "added_stars": 663,
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
      "author": "google",
      "repo": "osv-scanner",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/osv-scanner",
      "desc": "Vulnerability scanner written in Go which uses the data provided by https://osv.dev",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 786,
      "added_stars": 266,
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
      "author": "kopia",
      "repo": "kopia",
      "avatar": "https://github.com/kopia.png",
      "repo_link": "https://github.com/kopia/kopia",
      "desc": "Cross-platform backup tool for Windows, macOS & Linux with fast, incremental backups, client-side end-to-end encryption, compression and data deduplication. CLI and GUI included.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 722,
      "added_stars": 270,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 994,
      "added_stars": 1115,
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
      "forks": 6185,
      "added_stars": 583,
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
      "author": "authelia",
      "repo": "authelia",
      "avatar": "https://github.com/authelia.png",
      "repo_link": "https://github.com/authelia/authelia",
      "desc": "The Single Sign-On Multi-Factor portal for web apps. OpenID Certified™ and Post-Quantum Cryptography Ready.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1477,
      "added_stars": 359,
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
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "The system of action for AI-native cybersecurity—where intent becomes governed execution, evidence becomes operational memory, and every operation improves the next.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1035,
      "added_stars": 859,
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
      "author": "nektos",
      "repo": "act",
      "avatar": "https://github.com/nektos.png",
      "repo_link": "https://github.com/nektos/act",
      "desc": "Run your GitHub Actions locally 🚀",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2022,
      "added_stars": 554,
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
      "author": "github",
      "repo": "github-mcp-server",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/github-mcp-server",
      "desc": "GitHub's official MCP Server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4907,
      "added_stars": 844,
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
      "forks": 171,
      "added_stars": 1795,
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
      "forks": 1002,
      "added_stars": 1904,
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
      "forks": 112,
      "added_stars": 3002,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8974,
      "added_stars": 629,
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
      "author": "infiniflow",
      "repo": "ragflow",
      "avatar": "https://github.com/infiniflow.png",
      "repo_link": "https://github.com/infiniflow/ragflow",
      "desc": "RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context layer for LLMs",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10628,
      "added_stars": 3444,
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
      "author": "krillinai",
      "repo": "OpenCreator",
      "avatar": "https://github.com/krillinai.png",
      "repo_link": "https://github.com/krillinai/OpenCreator",
      "desc": "Formerly KrillinAI. Open-source AI workspace for creators, powered by Codex. Create videos, images, voice, avatars, translations, and edits with Agents in one place.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1088,
      "added_stars": 729,
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
      "author": "rorkai",
      "repo": "App-Store-Connect-CLI",
      "avatar": "https://github.com/rorkai.png",
      "repo_link": "https://github.com/rorkai/App-Store-Connect-CLI",
      "desc": "Fast, scriptable CLI for the App Store Connect API. Automate TestFlight, builds, submissions, signing, analytics, screenshots, subscriptions, and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 555,
      "added_stars": 927,
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
      "author": "pranshuparmar",
      "repo": "witr",
      "avatar": "https://github.com/pranshuparmar.png",
      "repo_link": "https://github.com/pranshuparmar/witr",
      "desc": "Why is this running? Trace any process, port, container, or file back to what started it - CLI + TUI.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 772,
      "added_stars": 3385,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 17719,
      "added_stars": 2969,
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
      "author": "OpenListTeam",
      "repo": "OpenList",
      "avatar": "https://github.com/OpenListTeam.png",
      "repo_link": "https://github.com/OpenListTeam/OpenList",
      "desc": "A new AList Fork to Anti Trust Crisis",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2263,
      "added_stars": 692,
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
      "forks": 1367,
      "added_stars": 10251,
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
      "forks": 267,
      "added_stars": 3187,
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
      "forks": 2722,
      "added_stars": 7811,
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
      "forks": 659,
      "added_stars": 2486,
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
      "author": "youssofal",
      "repo": "MTPLX",
      "avatar": "https://github.com/youssofal.png",
      "repo_link": "https://github.com/youssofal/MTPLX",
      "desc": "3x faster speeds on MLX | Qwen 3.8 27B | Native MTP Speculative Decoding On Apple Silicon With No External Drafter.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 155,
      "added_stars": 953,
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
      "forks": 664,
      "added_stars": 7001,
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
      "forks": 7659,
      "added_stars": 4108,
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
      "forks": 2451,
      "added_stars": 9208,
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
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 52577,
      "added_stars": 22282,
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
      "author": "abi",
      "repo": "screenshot-to-code",
      "avatar": "https://github.com/abi.png",
      "repo_link": "https://github.com/abi/screenshot-to-code",
      "desc": "Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9480,
      "added_stars": 4131,
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
      "author": "megadose",
      "repo": "holehe",
      "avatar": "https://github.com/megadose.png",
      "repo_link": "https://github.com/megadose/holehe",
      "desc": "holehe allows you to check if the mail is used on different sites like twitter, instagram and will retrieve information on sites with the forgotten password function.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1866,
      "added_stars": 2755,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Local UI to run and train LLMs and diffusion models. Supports GGUF, MLX, Qwen3.8, DeepSeek-V4, MiniMax-H3, Gemma 4, FLUX and more.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6882,
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
      "forks": 1830,
      "added_stars": 3050,
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
      "author": "blader",
      "repo": "humanizer",
      "avatar": "https://github.com/blader.png",
      "repo_link": "https://github.com/blader/humanizer",
      "desc": "Agent skill that removes signs of AI-generated writing from text",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3654,
      "added_stars": 9770,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 18581,
      "added_stars": 19827,
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
      "author": "donnemartin",
      "repo": "system-design-primer",
      "avatar": "https://github.com/donnemartin.png",
      "repo_link": "https://github.com/donnemartin/system-design-primer",
      "desc": "Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 58257,
      "added_stars": 7847,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3386,
      "added_stars": 3557,
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1708,
      "added_stars": 10201,
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
      "author": "Tencent",
      "repo": "AI-Infra-Guard",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/AI-Infra-Guard",
      "desc": "A full-stack AI Red Teaming platform securing AI ecosystems via Agent Scan, Skills Scan, MCP scan, AI Infra scan and LLM jailbreak evaluation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 574,
      "added_stars": 1779,
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
      "author": "virgiliojr94",
      "repo": "book-to-skill",
      "avatar": "https://github.com/virgiliojr94.png",
      "repo_link": "https://github.com/virgiliojr94/book-to-skill",
      "desc": "Turn any technical book PDF into a Claude Code skill — ready to study, reference, and use while you work.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2984,
      "added_stars": 11917,
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
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3930,
      "added_stars": 10339,
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
      "author": "whiteguo233",
      "repo": "OpenBiliClaw",
      "avatar": "https://github.com/whiteguo233.png",
      "repo_link": "https://github.com/whiteguo233/OpenBiliClaw",
      "desc": "本地私有、开源的自进化跨平台 AI 内容发现 Agent：先理解你，再主动从 B站、小红书、抖音、YouTube、X、知乎、Reddit、微博等平台与开放 Web 寻找内容。（支持 deepseek harness 插件） | Local-first open-source cross-platform AI content discovery agent: understands you, then proactively finds content across Bilibili, Xiaohongshu, Douyin, YouTube, X, Zhihu, Reddit, Weibo and the open web.（support deepseek harness plugin）",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 159,
      "added_stars": 1604,
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
      "reactions": 150,
      "comments": 77,
      "reading_time": 11,
      "author": "sylwia-lask"
    },
    {
      "title": "AI Engineering Is Easy. Changing How We Work Is Hard",
      "description": "AI engineering sounds fancy. New terms are everywhere: agentic development, AI-native engineering,...",
      "url": "https://dev.to/ujja/ai-engineering-is-easy-changing-how-we-work-is-hard-39j4",
      "tags": "ai, agents, software, discuss",
      "reactions": 32,
      "comments": 23,
      "reading_time": 4,
      "author": "ujja"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-1mo8",
      "tags": "weeklyretro",
      "reactions": 27,
      "comments": 22,
      "reading_time": 1,
      "author": "jess"
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
      "reactions": 8,
      "comments": 1,
      "reading_time": 5,
      "author": "jimmyliao"
    },
    {
      "title": "I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things",
      "description": "TL;DR  I recently finished a project from Udacity's Future AWS Agent Engineer Nanodegree Program,...",
      "url": "https://dev.to/hemapriya_kanagala/i-built-my-first-aws-agent-workflow-and-the-hardest-part-was-getting-it-to-stop-assuming-things-8fg",
      "tags": "discuss, aws, beginners, agents",
      "reactions": 72,
      "comments": 28,
      "reading_time": 17,
      "author": "hemapriya_kanagala"
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
      "title": "Your First AI Agent: A Beginner's Guide to Building an AI Trend finder with ADK",
      "description": "The world of AI agents is moving at lightning speed. Keeping up with the latest trends, new...",
      "url": "https://dev.to/googleai/your-first-ai-agent-a-beginners-guide-to-building-an-ai-trend-finder-with-adk-5f8k",
      "tags": "agents, ai, googlecloud",
      "reactions": 18,
      "comments": 0,
      "reading_time": 12,
      "author": "shirmeirlador"
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
      "title": "How To: Federated Stars",
      "url": "https://domaindrivenarchitecture.org/blog/2024-06-05-howto-federated-stars/",
      "score": 1,
      "comments": 0,
      "tags": [
        "vcs"
      ],
      "id": "1kdrx2"
    },
    {
      "title": "Beyond ORMs",
      "url": "https://noteflakes.com/articles/2026-09-05-beyond-orms",
      "score": 1,
      "comments": 0,
      "tags": [
        "databases",
        "ruby"
      ],
      "id": "rcddma"
    },
    {
      "title": "Convivial tool",
      "url": "https://www.nimblemachines.com/convivial-tool/",
      "score": 1,
      "comments": 0,
      "tags": [
        "book",
        "culture"
      ],
      "id": "4ac7zr"
    },
    {
      "title": "Compression in Full Quiet",
      "url": "https://pineight.com/retrotainment/fq-compression.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "compsci",
        "games",
        "retrocomputing"
      ],
      "id": "ywxrua"
    },
    {
      "title": "There's No Limit to How Bad Code Can Get",
      "url": "https://zachkehs.com/blog/theres_no_limit_to_how_bad_code_can_get/",
      "score": 3,
      "comments": 0,
      "tags": [
        "practices"
      ],
      "id": "rfn2mn"
    },
    {
      "title": "M2: Episode 1 (or, Asahi Linux on M3)",
      "url": "https://asahilinux.org/2026/09/m2-episode-1/",
      "score": 16,
      "comments": 0,
      "tags": [
        "linux",
        "mac",
        "release"
      ],
      "id": "ben6a4"
    },
    {
      "title": "How is this frame of Animal Well rendered?",
      "url": "https://www.youtube.com/watch?v=HtaleVLNws8",
      "score": 1,
      "comments": 0,
      "tags": [
        "games",
        "graphics",
        "video"
      ],
      "id": "qjhtae"
    },
    {
      "title": "Controlling when CSS custom property values are computed",
      "url": "https://jakearchibald.com/2026/css-custom-property-compute-time/",
      "score": 3,
      "comments": 0,
      "tags": [
        "css"
      ],
      "id": "eqc1s5"
    },
    {
      "title": "The revolt of the reader",
      "url": "https://bcantrill.dtrace.org/2026/09/05/the-revolt-of-the-reader/",
      "score": 37,
      "comments": 7,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "xnqxqe"
    },
    {
      "title": "Large-Language Models as a Cognitive Virus",
      "url": "https://arxiv.org/abs/2609.03344",
      "score": 6,
      "comments": 0,
      "tags": [
        "cogsci",
        "pdf",
        "vibecoding",
        "visualization"
      ],
      "id": "qnnvq2"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "zplizzi",
      "descendants": 130,
      "id": 49582000,
      "kids": [
        49582749,
        49582189,
        49582212,
        49583694,
        49582498,
        49583692,
        49582383,
        49583599,
        49583749,
        49582394,
        49583726,
        49583202,
        49583863,
        49583131,
        49583292,
        49582764,
        49582489,
        49583055,
        49583134,
        49583209,
        49583222,
        49583072,
        49583184,
        49582312,
        49583174,
        49583015,
        49583513,
        49582480,
        49582635,
        49582230,
        49582564,
        49583805,
        49582710,
        49583429,
        49582193,
        49582518,
        49582732,
        49582738,
        49583705,
        49582881,
        49582104,
        49583246,
        49582814,
        49582609,
        49582364,
        49583095,
        49582382,
        49583059,
        49583657,
        49582657,
        49582549,
        49582448,
        49582161,
        49582746,
        49582585,
        49582292
      ],
      "score": 305,
      "time": 1788653009,
      "title": "Cloud in a Bottle: making self-hosting accessible to everyone",
      "type": "story",
      "url": "https://cloudinabottle.org/blog/launch-post"
    },
    {
      "by": "chmaynard",
      "descendants": 101,
      "id": 49580939,
      "kids": [
        49583102,
        49582637,
        49583348,
        49581790,
        49583393,
        49583760,
        49583703,
        49582363,
        49582202,
        49582901,
        49582687,
        49582820,
        49582816,
        49583475,
        49583064,
        49581703,
        49582219,
        49582752,
        49582522,
        49582305,
        49583434,
        49582594,
        49582032,
        49582799,
        49582586,
        49583849,
        49582680,
        49583014,
        49582614,
        49581883,
        49582403,
        49583739
      ],
      "score": 268,
      "time": 1788644269,
      "title": "The revolt of the reader",
      "type": "story",
      "url": "https://bcantrill.dtrace.org/2026/09/05/the-revolt-of-the-reader/"
    },
    {
      "by": "sohkamyung",
      "descendants": 7,
      "id": 49529398,
      "kids": [
        49583730,
        49583504
      ],
      "score": 34,
      "time": 1788303255,
      "title": "The ColorChecker, photography's most important 24 squares, turns 50",
      "type": "story",
      "url": "https://www.dpreview.com/news/the-colorchecker-photographys-most-important-24-squares-turns-50/"
    },
    {
      "by": "zdw",
      "descendants": 9,
      "id": 49539759,
      "kids": [
        49583870,
        49583448,
        49583275,
        49583276,
        49583412,
        49583505
      ],
      "score": 39,
      "time": 1788371064,
      "title": "OpenBSD Stories: Strange Medieval Devices",
      "type": "story",
      "url": "http://miod.online.fr/software/openbsd/stories/smd.html"
    },
    {
      "by": "birdculture",
      "descendants": 7,
      "id": 49541888,
      "kids": [
        49583865,
        49583858,
        49583740,
        49543178,
        49583721
      ],
      "score": 37,
      "time": 1788380353,
      "title": "Music Theory for Programmers",
      "type": "story",
      "url": "https://runjs.app/blog/music-theory-for-programmers"
    },
    {
      "by": "Anon84",
      "descendants": 92,
      "id": 49582582,
      "kids": [
        49583154,
        49583037,
        49582819,
        49583671,
        49582887,
        49583024,
        49582801,
        49583417,
        49583288,
        49583030
      ],
      "score": 139,
      "time": 1788659565,
      "title": "GPT-6 Astra on robot arms",
      "type": "story",
      "url": "https://openai.robocurve.org/gpt-6-astra/"
    },
    {
      "by": "ExMachina73",
      "descendants": 41,
      "id": 49581870,
      "kids": [
        49583819,
        49582652,
        49582869,
        49583350,
        49582989,
        49583751,
        49583157,
        49583644,
        49583271,
        49582835,
        49583297,
        49583871,
        49583539
      ],
      "score": 273,
      "time": 1788651587,
      "title": "Chrome again exempts Google from user site data settings",
      "type": "story",
      "url": "https://lapcatsoftware.com/articles/2026/9/1.html"
    },
    {
      "by": "elvis70",
      "descendants": 85,
      "id": 49578280,
      "kids": [
        49583877,
        49582156,
        49579816,
        49580212,
        49582795,
        49582930,
        49581157,
        49579698,
        49581020,
        49580017,
        49581556,
        49579981,
        49582118,
        49582957
      ],
      "score": 226,
      "time": 1788626702,
      "title": "Learn Programming with OCaml",
      "type": "story",
      "url": "https://usr.lmf.cnrs.fr/lpo/"
    },
    {
      "by": "bookmtn",
      "descendants": 253,
      "id": 49580369,
      "kids": [
        49583005,
        49580719,
        49583520,
        49581524,
        49583359,
        49583627,
        49580407,
        49582340,
        49583656,
        49583291,
        49583195,
        49581357,
        49580619,
        49580821,
        49583580,
        49583116,
        49581928,
        49580695,
        49580712,
        49581530,
        49582138,
        49582049,
        49582569,
        49583680,
        49583623,
        49580704,
        49581119,
        49580649,
        49580626,
        49580738,
        49581075,
        49582027,
        49580523,
        49582849
      ],
      "score": 489,
      "time": 1788640298,
      "title": "Private German rocket makes history, reaches orbit from European soil",
      "type": "story",
      "url": "https://www.space.com/space-exploration/launches-spacecraft/isar-aerospace-second-launch-norway-andoya-spaceport-spectrum-rocket"
    },
    {
      "by": "networked",
      "descendants": 98,
      "id": 49576386,
      "kids": [
        49576855,
        49579060,
        49576756,
        49583815,
        49577525,
        49576499,
        49582185,
        49576545,
        49583391,
        49577591,
        49577870,
        49580269,
        49576412,
        49578226,
        49580512,
        49577047,
        49583302,
        49581098,
        49576594,
        49580071,
        49577178,
        49578875,
        49581578,
        49579197,
        49579300,
        49577086,
        49576502,
        49578072,
        49579685,
        49576692,
        49576506,
        49580633,
        49576656,
        49577112,
        49582179,
        49578550,
        49577843
      ],
      "score": 326,
      "time": 1788615398,
      "title": "The \"$60 Gaming PC\" – AMD BC-250 (2025)",
      "type": "story",
      "url": "https://devquasar.com/hardware/the-60-gaming-pc-amd-bc-250/"
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
      "title": "There's No Limit to How Bad Code Can Get",
      "url": "https://zachkehs.com/blog/theres_no_limit_to_how_bad_code_can_get/",
      "permalink": "https://www.reddit.com/r/programming/comments/1w81w2j/theres_no_limit_to_how_bad_code_can_get/",
      "author": "/u/SunnyKatt",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/SunnyKatt [link] &#32; [comments]",
      "published": "2026-09-05T14:14:26+00:00"
    },
    {
      "title": ".gitignore everything by default",
      "url": "https://packagemain.tech/p/gitignore-everything-by-default",
      "permalink": "https://www.reddit.com/r/programming/comments/1w80olh/gitignore_everything_by_default/",
      "author": "/u/der_gopher",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/der_gopher [link] &#32; [comments]",
      "published": "2026-09-05T13:23:49+00:00"
    },
    {
      "title": "The NX bit is not just about security",
      "url": "https://purplesyringa.moe/blog/guest/the-nx-bit-is-not-just-about-security/",
      "permalink": "https://www.reddit.com/r/programming/comments/1w7vcf3/the_nx_bit_is_not_just_about_security/",
      "author": "/u/soap94",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/soap94 [link] &#32; [comments]",
      "published": "2026-09-05T08:50:06+00:00"
    },
    {
      "title": "How to name things",
      "url": "https://kolemannix.com/blog/how-to-name-things/",
      "permalink": "https://www.reddit.com/r/programming/comments/1w8jj00/how_to_name_things/",
      "author": "/u/foobear777",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "A short essay on naming &#32; submitted by &#32; /u/foobear777 [link] &#32; [comments]",
      "published": "2026-09-06T02:20:18+00:00"
    },
    {
      "title": "I wrote a lighthearted guide to learning Monads - maybe you like",
      "url": "https://github.com/ManuelSaleta/CavemanProgramming/blob/main/Monads/README.md",
      "permalink": "https://www.reddit.com/r/programming/comments/1w8ft2i/i_wrote_a_lighthearted_guide_to_learning_monads/",
      "author": "/u/manny2206",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/manny2206 [link] &#32; [comments]",
      "published": "2026-09-05T23:23:34+00:00"
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
      "title": "IND-TECH WEEKLY #2: Jio's IPO Gets a Festive-Season Window, Slice Takes a ~70% Haircut, and the Jobs Watch Section 🇮🇳",
      "description": "Hey 👋  Quick heads-up before anything else: Sessional-2 exams for Sem 7 kick in on my end starting...",
      "url": "https://dev.to/dj29/ind-tech-weekly-2-jios-ipo-gets-a-festive-season-window-slice-takes-a-70-haircut-and-the-3dlg",
      "tags": "india, news, career, discuss",
      "reactions": 16,
      "comments": 3,
      "reading_time": 8,
      "author": "dj29"
    },
    {
      "title": "Hey Everyone! I’m Sanidhya from MLH",
      "description": "MLH AI Roadshow Bengaluru       Hey Everyone! I am Sanidhya Goel, a new MLH Hackathon Community...",
      "url": "https://blog.mlh.com/hey-everyone-im-sanidhya-from-mlh-25an",
      "tags": "mlh, community, devrel, career",
      "reactions": 47,
      "comments": 13,
      "reading_time": 4,
      "author": "sanidhya_at_mlh"
    },
    {
      "title": "How to Pass the Amazon SQL Interview (A Practical Guide)",
      "description": "A comprehensive guide on what the Amazon SQL interview actually tests, core topics to master, and a simple framework to help you pass.",
      "url": "https://dev.to/rahmanfrr/how-to-pass-the-amazon-sql-interview-a-practical-guide-3ie5",
      "tags": "sql, dataengineering, career, interview",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "rahmanfrr"
    },
    {
      "title": "AWS Student Rewards: A Practical Starting Guide for Students Building a Cloud Career ☁️🧑🏻‍💻",
      "description": "🎓 Why AWS Student Rewards caught my attention  If you're a university student interested in cloud...",
      "url": "https://dev.to/randyalonzo-dev/aws-student-rewards-a-practical-starting-guide-for-students-building-a-cloud-career-1amd",
      "tags": "aws, cloud, certification, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "randyalonzo-dev"
    },
    {
      "title": "What I Wish I Knew Before Taking My First Freelance Client",
      "description": "When I started freelancing, I thought the hard part would be the code. It wasn't. The hard part was...",
      "url": "https://dev.to/bilaal_muhammad_5dcffc369/what-i-wish-i-knew-before-taking-my-first-freelance-client-2djb",
      "tags": "career, freelance, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "bilaal_muhammad_5dcffc369"
    },
    {
      "title": "Machines Can Only Build What Someone Already Imagined",
      "description": "When a prompt describing what you need is submitted, an AI fills in forty lines of clean, working...",
      "url": "https://dev.to/edmundsparrow/machines-can-only-build-what-someone-already-imagined-4mgg",
      "tags": "ai, career, discuss, programming",
      "reactions": 11,
      "comments": 0,
      "reading_time": 4,
      "author": "edmundsparrow"
    },
    {
      "title": "What I learned taking over an abandoned Python library (twice-abandoned, actually)",
      "description": "The library that kept dying   Whoosh is a pure-Python full-text search engine — ranked...",
      "url": "https://dev.to/priyasundaram/what-i-learned-taking-over-an-abandoned-python-library-twice-abandoned-actually-1h6n",
      "tags": "python, opensource, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "priyasundaram"
    },
    {
      "title": "The Advice Was \"Build on Unique Data.\" Mine Was a House.",
      "description": "A response to Marina Wyss's How I'd Learn Machine Learning in 2026, from someone who arrived at the...",
      "url": "https://dev.to/salparvez/the-advice-was-build-on-unique-data-mine-was-a-house-2dem",
      "tags": "machinelearning, ai, career, startup",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "salparvez"
    },
    {
      "title": "The Tea on Teamwork: Week One of My i.c.stars Tech Internship",
      "description": "I went into my first week at i.c.stars thinking about technology, code, and systems. The week turned...",
      "url": "https://dev.to/keenenwilkins/the-tea-on-teamwork-week-one-of-my-icstars-tech-internship-k3o",
      "tags": "career, beginners, devjournal, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "keenenwilkins"
    },
    {
      "title": "Solve Your Marketing Problem By Buying Old Gmail Account",
      "description": "Solve Your Marketing Problem By Buying Old Gmail Account ⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩⏩ 🗣️ For more details,...",
      "url": "https://dev.to/oldgmail0124/solve-your-marketing-problem-by-buying-old-gmail-account-13cf",
      "tags": "automation, api, career, architecture",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "oldgmail0124"
    }
  ]
}
```

