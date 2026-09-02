# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-02 06:43:13 UTC

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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 541,
      "added_stars": 1377,
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
      "author": "THU-MAIC",
      "repo": "OpenMAIC",
      "avatar": "https://github.com/THU-MAIC.png",
      "repo_link": "https://github.com/THU-MAIC/OpenMAIC",
      "desc": "Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5011,
      "added_stars": 8014,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3240,
      "added_stars": 3452,
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
      "author": "every-app",
      "repo": "open-seo",
      "avatar": "https://github.com/every-app.png",
      "repo_link": "https://github.com/every-app/open-seo",
      "desc": "Open source alternative to Semrush and Ahrefs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1969,
      "added_stars": 2625,
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
      "author": "OpenCut-app",
      "repo": "OpenCut",
      "avatar": "https://github.com/OpenCut-app.png",
      "repo_link": "https://github.com/OpenCut-app/OpenCut",
      "desc": "The open-source CapCut alternative",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8718,
      "added_stars": 2630,
      "builtBy": [
        {
          "username": "mazeincoding",
          "href": "https://github.com/mazeincoding",
          "avatar": "https://avatars.githubusercontent.com/u/167211895"
        },
        {
          "username": "izadoesdev",
          "href": "https://github.com/izadoesdev",
          "avatar": "https://avatars.githubusercontent.com/u/59828082"
        },
        {
          "username": "anwarulislam",
          "href": "https://github.com/anwarulislam",
          "avatar": "https://avatars.githubusercontent.com/u/26295990"
        },
        {
          "username": "khanguyen74",
          "href": "https://github.com/khanguyen74",
          "avatar": "https://avatars.githubusercontent.com/u/50540913"
        },
        {
          "username": "DevloperAmanSingh",
          "href": "https://github.com/DevloperAmanSingh",
          "avatar": "https://avatars.githubusercontent.com/u/80804989"
        }
      ]
    },
    {
      "author": "apache",
      "repo": "maka",
      "avatar": "https://github.com/apache.png",
      "repo_link": "https://github.com/apache/maka",
      "desc": "Apache Maka (Incubating) is a local-first AI agent workspace. Model messages, tool calls, tool results, permission decisions, and termination events are recorded as an append-only log.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 417,
      "added_stars": 1285,
      "builtBy": [
        {
          "username": "jackwener",
          "href": "https://github.com/jackwener",
          "avatar": "https://avatars.githubusercontent.com/u/30525741"
        },
        {
          "username": "Astro-Han",
          "href": "https://github.com/Astro-Han",
          "avatar": "https://avatars.githubusercontent.com/u/255364436"
        },
        {
          "username": "likun666661",
          "href": "https://github.com/likun666661",
          "avatar": "https://avatars.githubusercontent.com/u/90952590"
        },
        {
          "username": "M4n5ter",
          "href": "https://github.com/M4n5ter",
          "avatar": "https://avatars.githubusercontent.com/u/68144809"
        },
        {
          "username": "me2seeks",
          "href": "https://github.com/me2seeks",
          "avatar": "https://avatars.githubusercontent.com/u/96464454"
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
      "forks": 2165,
      "added_stars": 238,
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
      "forks": 5143,
      "added_stars": 1149,
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
      "author": "1weiho",
      "repo": "open-slide",
      "avatar": "https://github.com/1weiho.png",
      "repo_link": "https://github.com/1weiho/open-slide",
      "desc": "A slide framework built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 520,
      "added_stars": 411,
      "builtBy": [
        {
          "username": "1weiho",
          "href": "https://github.com/1weiho",
          "avatar": "https://avatars.githubusercontent.com/u/75478661"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ridemountainpig",
          "href": "https://github.com/ridemountainpig",
          "avatar": "https://avatars.githubusercontent.com/u/92412722"
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
      "forks": 1100,
      "added_stars": 47,
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
      "author": "mobile-next",
      "repo": "mobile-mcp",
      "avatar": "https://github.com/mobile-next.png",
      "repo_link": "https://github.com/mobile-next/mobile-mcp",
      "desc": "Model Context Protocol Server for Mobile Automation and Scraping (iOS, Android, Emulators, Simulators and Real Devices)",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 544,
      "added_stars": 294,
      "builtBy": [
        {
          "username": "gmegidish",
          "href": "https://github.com/gmegidish",
          "avatar": "https://avatars.githubusercontent.com/u/2457607"
        },
        {
          "username": "krismuhi",
          "href": "https://github.com/krismuhi",
          "avatar": "https://avatars.githubusercontent.com/u/38224019"
        },
        {
          "username": "benlmyers",
          "href": "https://github.com/benlmyers",
          "avatar": "https://avatars.githubusercontent.com/u/41796709"
        },
        {
          "username": "tomoya0x00",
          "href": "https://github.com/tomoya0x00",
          "avatar": "https://avatars.githubusercontent.com/u/5106629"
        },
        {
          "username": "aluedeke",
          "href": "https://github.com/aluedeke",
          "avatar": "https://avatars.githubusercontent.com/u/311702"
        }
      ]
    },
    {
      "author": "PurpleDoubleD",
      "repo": "locally-uncensored",
      "avatar": "https://github.com/PurpleDoubleD.png",
      "repo_link": "https://github.com/PurpleDoubleD/locally-uncensored",
      "desc": "Plug-and-play local AI studio: uncensored chat, image & video generation, coding agent. Runs abliterated LLMs + ComfyUI 100% offline. One installer, no Docker, no cloud.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 213,
      "added_stars": 208,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "PurpleDoubleD",
          "href": "https://github.com/PurpleDoubleD",
          "avatar": "https://avatars.githubusercontent.com/u/224399100"
        },
        {
          "username": "Kizerfluid",
          "href": "https://github.com/Kizerfluid",
          "avatar": "https://avatars.githubusercontent.com/u/311560202"
        },
        {
          "username": "dorengstearns",
          "href": "https://github.com/dorengstearns",
          "avatar": "https://avatars.githubusercontent.com/u/74570837"
        },
        {
          "username": "adhney",
          "href": "https://github.com/adhney",
          "avatar": "https://avatars.githubusercontent.com/u/96858173"
        }
      ]
    },
    {
      "author": "bookorbit",
      "repo": "bookorbit",
      "avatar": "https://github.com/bookorbit.png",
      "repo_link": "https://github.com/bookorbit/bookorbit",
      "desc": "BookOrbit: Your Reading Space",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 223,
      "added_stars": 547,
      "builtBy": [
        {
          "username": "neonsolstice",
          "href": "https://github.com/neonsolstice",
          "avatar": "https://avatars.githubusercontent.com/u/18559658"
        },
        {
          "username": "chrismansell26",
          "href": "https://github.com/chrismansell26",
          "avatar": "https://avatars.githubusercontent.com/u/213777310"
        },
        {
          "username": "jadehawk",
          "href": "https://github.com/jadehawk",
          "avatar": "https://avatars.githubusercontent.com/u/333657"
        }
      ]
    },
    {
      "author": "rohitg00",
      "repo": "agentmemory",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/agentmemory",
      "desc": "#1 Persistent memory for AI coding agents based on real-world benchmarks",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2412,
      "added_stars": 519,
      "builtBy": [
        {
          "username": "rohitg00",
          "href": "https://github.com/rohitg00",
          "avatar": "https://avatars.githubusercontent.com/u/48523873"
        },
        {
          "username": "Tanmay-008",
          "href": "https://github.com/Tanmay-008",
          "avatar": "https://avatars.githubusercontent.com/u/158763203"
        },
        {
          "username": "honor2030",
          "href": "https://github.com/honor2030",
          "avatar": "https://avatars.githubusercontent.com/u/19909783"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "efenex",
          "href": "https://github.com/efenex",
          "avatar": "https://avatars.githubusercontent.com/u/5664860"
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
      "forks": 2043,
      "added_stars": 453,
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
      "author": "maotoumao",
      "repo": "MusicFree",
      "avatar": "https://github.com/maotoumao.png",
      "repo_link": "https://github.com/maotoumao/MusicFree",
      "desc": "插件化、定制化、无广告的免费音乐播放器",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1890,
      "added_stars": 231,
      "builtBy": [
        {
          "username": "maotoumao",
          "href": "https://github.com/maotoumao",
          "avatar": "https://avatars.githubusercontent.com/u/31655147"
        },
        {
          "username": "282931",
          "href": "https://github.com/282931",
          "avatar": "https://avatars.githubusercontent.com/u/11798364"
        },
        {
          "username": "eastcukt",
          "href": "https://github.com/eastcukt",
          "avatar": "https://avatars.githubusercontent.com/u/49146637"
        },
        {
          "username": "Matsuko97",
          "href": "https://github.com/Matsuko97",
          "avatar": "https://avatars.githubusercontent.com/u/64468673"
        },
        {
          "username": "zhuguibiao",
          "href": "https://github.com/zhuguibiao",
          "avatar": "https://avatars.githubusercontent.com/u/22173974"
        }
      ]
    },
    {
      "author": "modem-dev",
      "repo": "hunk",
      "avatar": "https://github.com/modem-dev.png",
      "repo_link": "https://github.com/modem-dev/hunk",
      "desc": "Review-first terminal diff viewer for agentic coders",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 284,
      "added_stars": 267,
      "builtBy": [
        {
          "username": "benvinegar",
          "href": "https://github.com/benvinegar",
          "avatar": "https://avatars.githubusercontent.com/u/2153"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "elucid",
          "href": "https://github.com/elucid",
          "avatar": "https://avatars.githubusercontent.com/u/2888"
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
      "forks": 3549,
      "added_stars": 738,
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
      "author": "esengine",
      "repo": "DeepSeek-Reasonix",
      "avatar": "https://github.com/esengine.png",
      "repo_link": "https://github.com/esengine/DeepSeek-Reasonix",
      "desc": "DeepSeek-native AI coding agent for your terminal. Engineered around prefix-cache stability — leave it running.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2362,
      "added_stars": 7532,
      "builtBy": [
        {
          "username": "SivanCola",
          "href": "https://github.com/SivanCola",
          "avatar": "https://avatars.githubusercontent.com/u/32437197"
        },
        {
          "username": "esengine",
          "href": "https://github.com/esengine",
          "avatar": "https://avatars.githubusercontent.com/u/18465053"
        },
        {
          "username": "ttmouse",
          "href": "https://github.com/ttmouse",
          "avatar": "https://avatars.githubusercontent.com/u/8982044"
        },
        {
          "username": "lifu963",
          "href": "https://github.com/lifu963",
          "avatar": "https://avatars.githubusercontent.com/u/56394323"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 287,
      "added_stars": 776,
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
          "username": "mesutoezdil",
          "href": "https://github.com/mesutoezdil",
          "avatar": "https://avatars.githubusercontent.com/u/114185853"
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
      "forks": 4933,
      "added_stars": 983,
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
      "author": "sundowndev",
      "repo": "phoneinfoga",
      "avatar": "https://github.com/sundowndev.png",
      "repo_link": "https://github.com/sundowndev/phoneinfoga",
      "desc": "Information gathering framework for phone numbers",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5737,
      "added_stars": 546,
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
      "added_stars": 536,
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
      "author": "glanceapp",
      "repo": "glance",
      "avatar": "https://github.com/glanceapp.png",
      "repo_link": "https://github.com/glanceapp/glance",
      "desc": "A self-hosted dashboard that puts all your feeds in one place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1441,
      "added_stars": 761,
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
      "author": "superplanehq",
      "repo": "superplane",
      "avatar": "https://github.com/superplanehq.png",
      "repo_link": "https://github.com/superplanehq/superplane",
      "desc": "Open source factory for one-shot engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 625,
      "added_stars": 1419,
      "builtBy": [
        {
          "username": "forestileao",
          "href": "https://github.com/forestileao",
          "avatar": "https://avatars.githubusercontent.com/u/60622592"
        },
        {
          "username": "shiroyasha",
          "href": "https://github.com/shiroyasha",
          "avatar": "https://avatars.githubusercontent.com/u/1779493"
        },
        {
          "username": "lucaspin",
          "href": "https://github.com/lucaspin",
          "avatar": "https://avatars.githubusercontent.com/u/12387728"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "AleksandarCole",
          "href": "https://github.com/AleksandarCole",
          "avatar": "https://avatars.githubusercontent.com/u/61409859"
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
      "forks": 903,
      "added_stars": 994,
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
      "author": "traefik",
      "repo": "traefik",
      "avatar": "https://github.com/traefik.png",
      "repo_link": "https://github.com/traefik/traefik",
      "desc": "The Cloud Native Application Proxy",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6181,
      "added_stars": 610,
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
      "author": "github",
      "repo": "github-mcp-server",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/github-mcp-server",
      "desc": "GitHub's official MCP Server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4882,
      "added_stars": 854,
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
      "author": "gastownhall",
      "repo": "beads",
      "avatar": "https://github.com/gastownhall.png",
      "repo_link": "https://github.com/gastownhall/beads",
      "desc": "Beads - A memory upgrade for your coding agent",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1809,
      "added_stars": 1092,
      "builtBy": [
        {
          "username": "steveyegge",
          "href": "https://github.com/steveyegge",
          "avatar": "https://avatars.githubusercontent.com/u/613744"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "maphew",
          "href": "https://github.com/maphew",
          "avatar": "https://avatars.githubusercontent.com/u/486200"
        },
        {
          "username": "coffeegoddd",
          "href": "https://github.com/coffeegoddd",
          "avatar": "https://avatars.githubusercontent.com/u/43383835"
        },
        {
          "username": "julianknutsen",
          "href": "https://github.com/julianknutsen",
          "avatar": "https://avatars.githubusercontent.com/u/8082291"
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
      "forks": 162,
      "added_stars": 1793,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2227,
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
      "forks": 984,
      "added_stars": 1088,
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
      "author": "infiniflow",
      "repo": "ragflow",
      "avatar": "https://github.com/infiniflow.png",
      "repo_link": "https://github.com/infiniflow/ragflow",
      "desc": "RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent capabilities to create a superior context layer for LLMs",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10595,
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
      "forks": 549,
      "added_stars": 1001,
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
      "author": "multica-ai",
      "repo": "multica",
      "avatar": "https://github.com/multica-ai.png",
      "repo_link": "https://github.com/multica-ai/multica",
      "desc": "Make humans and AI agents work as one team — open-source and self-hostable.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6259,
      "added_stars": 5654,
      "builtBy": [
        {
          "username": "multica-agent",
          "href": "https://github.com/multica-agent",
          "avatar": "https://avatars.githubusercontent.com/u/280515704"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Bohan-J",
          "href": "https://github.com/Bohan-J",
          "avatar": "https://avatars.githubusercontent.com/u/52446949"
        },
        {
          "username": "NevilleQingNY",
          "href": "https://github.com/NevilleQingNY",
          "avatar": "https://avatars.githubusercontent.com/u/145280634"
        },
        {
          "username": "forrestchang",
          "href": "https://github.com/forrestchang",
          "avatar": "https://avatars.githubusercontent.com/u/7857126"
        }
      ]
    },
    {
      "author": "kubernetes-sigs",
      "repo": "kueue",
      "avatar": "https://github.com/kubernetes-sigs.png",
      "repo_link": "https://github.com/kubernetes-sigs/kueue",
      "desc": "Kubernetes-native Job Queueing",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 773,
      "added_stars": 170,
      "builtBy": [
        {
          "username": "mbobrovskyi",
          "href": "https://github.com/mbobrovskyi",
          "avatar": "https://avatars.githubusercontent.com/u/13921122"
        },
        {
          "username": "k8s-ci-robot",
          "href": "https://github.com/k8s-ci-robot",
          "avatar": "https://avatars.githubusercontent.com/u/20407524"
        },
        {
          "username": "tenzen-y",
          "href": "https://github.com/tenzen-y",
          "avatar": "https://avatars.githubusercontent.com/u/68272500"
        },
        {
          "username": "mimowo",
          "href": "https://github.com/mimowo",
          "avatar": "https://avatars.githubusercontent.com/u/10359181"
        }
      ]
    },
    {
      "author": "krillinai",
      "repo": "KrillinAI",
      "avatar": "https://github.com/krillinai.png",
      "repo_link": "https://github.com/krillinai/KrillinAI",
      "desc": "AI video translation & dubbing tool for humans and AI Agents, powered by LLMs. Full pipeline: download, transcribe, translate, TTS dub, reformat, cover generation. 100+ languages, optimized for YouTube, TikTok, Bilibili, Douyin, and more.AI视频翻译配音工具，面向人类与AI Agent，100+语言全链路，CLI分阶段调用，适配抖音、小红书、哔哩哔哩、视频号、TikTok、YouTube",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1081,
      "added_stars": 765,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8951,
      "added_stars": 672,
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
      "author": "github",
      "repo": "gh-aw",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/gh-aw",
      "desc": "GitHub Agentic Workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 530,
      "added_stars": 265,
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
      "forks": 250,
      "added_stars": 2866,
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
      "forks": 2680,
      "added_stars": 7321,
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
      "author": "huangruiteng",
      "repo": "loopx",
      "avatar": "https://github.com/huangruiteng.png",
      "repo_link": "https://github.com/huangruiteng/loopx",
      "desc": "Long-horizon agent control plane for durable, governed work across Codex, Claude Code, and other harnesses.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 481,
      "added_stars": 5248,
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
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 1664,
      "added_stars": 11429,
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
      "author": "cactus-compute",
      "repo": "needle",
      "avatar": "https://github.com/cactus-compute.png",
      "repo_link": "https://github.com/cactus-compute/needle",
      "desc": "14MB foundation model for tiny devices; phones, wearables, smart home, and robots.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 651,
      "added_stars": 6669,
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
      "author": "donnemartin",
      "repo": "system-design-primer",
      "avatar": "https://github.com/donnemartin.png",
      "repo_link": "https://github.com/donnemartin/system-design-primer",
      "desc": "Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 58181,
      "added_stars": 7979,
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
      "author": "google",
      "repo": "skills",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/skills",
      "desc": "Agent Skills for Google products and technologies",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1548,
      "added_stars": 3797,
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
      "author": "youssofal",
      "repo": "MTPLX",
      "avatar": "https://github.com/youssofal.png",
      "repo_link": "https://github.com/youssofal/MTPLX",
      "desc": "3x faster speeds on MLX | Qwen 3.8 27B | Native MTP Speculative Decoding On Apple Silicon With No External Drafter.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 143,
      "added_stars": 766,
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
      "forks": 7625,
      "added_stars": 3476,
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
      "forks": 1858,
      "added_stars": 2761,
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
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 52382,
      "added_stars": 21253,
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
      "forks": 9389,
      "added_stars": 3259,
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
      "author": "virgiliojr94",
      "repo": "book-to-skill",
      "avatar": "https://github.com/virgiliojr94.png",
      "repo_link": "https://github.com/virgiliojr94/book-to-skill",
      "desc": "Turn any technical book PDF into a Claude Code skill — ready to study, reference, and use while you work.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2878,
      "added_stars": 13217,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Local UI to run and train LLMs and diffusion models. Supports GGUF, MLX, Qwen3.8, Kimi K3, MiniMax-H3, Gemma 4, FLUX and more.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6852,
      "added_stars": 6327,
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
      "forks": 1806,
      "added_stars": 2955,
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
      "author": "uber",
      "repo": "ADR",
      "avatar": "https://github.com/uber.png",
      "repo_link": "https://github.com/uber/ADR",
      "desc": "ADR secures enterprise AI agents through observability, security benchmarking, and threat detection. Deployed at Uber.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 139,
      "added_stars": 1509,
      "builtBy": [
        {
          "username": "pengyuzhang",
          "href": "https://github.com/pengyuzhang",
          "avatar": "https://avatars.githubusercontent.com/u/4452761"
        },
        {
          "username": "lghupan",
          "href": "https://github.com/lghupan",
          "avatar": "https://avatars.githubusercontent.com/u/2167458"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cmvan",
          "href": "https://github.com/cmvan",
          "avatar": "https://avatars.githubusercontent.com/u/66971827"
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
      "forks": 3472,
      "added_stars": 7192,
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
      "forks": 3307,
      "added_stars": 3075,
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
      "author": "goauthentik",
      "repo": "authentik",
      "avatar": "https://github.com/goauthentik.png",
      "repo_link": "https://github.com/goauthentik/authentik",
      "desc": "The authentication glue you need.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1988,
      "added_stars": 2811,
      "builtBy": [
        {
          "username": "BeryJu",
          "href": "https://github.com/BeryJu",
          "avatar": "https://avatars.githubusercontent.com/u/1932513"
        },
        {
          "username": "rissson",
          "href": "https://github.com/rissson",
          "avatar": "https://avatars.githubusercontent.com/u/18313093"
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
    },
    {
      "title": "My idempotency library had one job. A dropped connection made it run the payment twice.",
      "url": "https://dev.to/pinceladasdaweb/my-idempotency-library-had-one-job-a-dropped-connection-made-it-run-the-payment-twice-nnh",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-08-17T12:32:41.000Z"
    },
    {
      "title": "\"half-open\" twice is not the same state: the bug that shaped breakwater 1.0",
      "url": "https://dev.to/pinceladasdaweb/half-open-twice-is-not-the-same-state-the-bug-that-shaped-breakwater-10-4m6c",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-08-15T17:21:47.000Z"
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
      "title": "The job description already changed. We're not coders anymore, but couriers.",
      "description": "re: Couriers, Not Coders (Syntax Isn't The Edge Anymore)                                       ...",
      "url": "https://dev.to/canro91/the-job-description-already-changed-were-not-coders-anymore-but-couriers-40eg",
      "tags": "career, coding, softwaredevelopment, softwareengineering",
      "reactions": 3,
      "comments": 0,
      "reading_time": 1,
      "author": "canro91"
    },
    {
      "title": "Preptember is here!! Plan a Fest for your local community.",
      "description": "September marks the official start of Preptember, a month dedicated to organizers planning local...",
      "url": "https://blog.mlh.com/preptember-is-here-plan-a-fest-for-your-local-community-5ce3",
      "tags": "hacktoberfest, ai, hackathon, devchallenge",
      "reactions": 37,
      "comments": 1,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Overcoming Dart's Single Inheritance Wall: Composable CubitSignalMixin & BlocSignalMixin in Flutter",
      "description": "Discover how CubitSignalMixin and BlocSignalMixin allow any existing Flutter controller, domain repository, or enterprise class to gain full reactive state container capabilities without occupying its single inheritance slot.",
      "url": "https://dev.to/gde/overcoming-darts-single-inheritance-wall-composable-cubitsignalmixin-blocsignalmixin-in-flutter-43bf",
      "tags": "flutter, dart, architecture, statemanagement",
      "reactions": 10,
      "comments": 0,
      "reading_time": 5,
      "author": "randalschwartz"
    },
    {
      "title": "How to Design AI Evaluations You Can Actually Trust",
      "description": "As part of my work at Google, we are publishing a suite of Agent Skills for Google products and...",
      "url": "https://dev.to/googleai/how-to-design-ai-evaluations-you-can-actually-trust-41c3",
      "tags": "ai, evals",
      "reactions": 23,
      "comments": 6,
      "reading_time": 4,
      "author": "jfschmakeit"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-2aic",
      "tags": "top7, discuss",
      "reactions": 27,
      "comments": 6,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Native CORS support on GKE Gateway: Offloading cross-origin policy management to infrastructure",
      "description": "Offload cross-origin preflight handling and header injection to Google Cloud Load Balancing with native CORS support on GKE Gateway.",
      "url": "https://dev.to/googlecloud/native-cors-support-on-gke-gateway-offloading-cross-origin-policy-management-to-infrastructure-3c0m",
      "tags": "kubernetes, ai, gke, googlecloud",
      "reactions": 15,
      "comments": 1,
      "reading_time": 4,
      "author": "olivi-eh"
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
      "title": "Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood",
      "description": "Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.",
      "url": "https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l",
      "tags": "kubernetes, ai, gke, googlecloud",
      "reactions": 6,
      "comments": 0,
      "reading_time": 4,
      "author": "olivi-eh"
    },
    {
      "title": "Cross Cloud A2A Agent Card Field Comparison",
      "description": "Comparing Agent Cards with A2A - This tutorial aims to fetch the agent card from A2A agents running...",
      "url": "https://dev.to/gde/cross-cloud-a2a-agent-card-field-comparison-2hod",
      "tags": "a2a, multicloud, ai, python",
      "reactions": 7,
      "comments": 0,
      "reading_time": 20,
      "author": "xbill"
    },
    {
      "title": "Production Flutter Networking Without the Boilerplate: Reactive Repositories with BlocSignal",
      "description": "Learn how to structure production-grade networking in Flutter without the traditional boilerplate. Combine Dio or HTTP clients with CubitSignalMixin, HydratedMixin, and .toAsyncBlocSignal() for zero-race-condition, offline-cached reactive architecture.",
      "url": "https://dev.to/gde/production-flutter-networking-without-the-boilerplate-reactive-repositories-with-blocsignal-4c3c",
      "tags": "flutter, dart, architecture, statemanagement",
      "reactions": 8,
      "comments": 0,
      "reading_time": 4,
      "author": "randalschwartz"
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
      "title": "Normalized Fascism in Open Source: $12 Million Given to DHH",
      "url": "https://brennan.day/normalized-fascism-in-open-source-12-million-given-to-dhh/",
      "score": 1,
      "comments": 0,
      "tags": [
        "culture"
      ],
      "id": "ipy9xw"
    },
    {
      "title": "Bluefin is a capability system",
      "url": "https://h2.jaguarpaw.co.uk/posts/bluefin-capability-system/",
      "score": 1,
      "comments": 0,
      "tags": [
        "haskell",
        "plt"
      ],
      "id": "v1wxh0"
    },
    {
      "title": "AyanDict 3.0.0 Released",
      "url": "https://github.com/ilius/ayandict/releases/tag/v3.0.0",
      "score": 1,
      "comments": 0,
      "tags": [
        "go",
        "release"
      ],
      "id": "mjbwfn"
    },
    {
      "title": "The Vulnpocalypse Is Repricing the Bug Bounty Economy",
      "url": "https://www.darkreading.com/vulnerabilities-threats/vulnpocalypse-repricing-bug-bounty-economy",
      "score": 0,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "ta0fg1"
    },
    {
      "title": "GentleOS/16 hobby OS for vintage 16-bit PCs",
      "url": "https://luke8086.dev/gentleos16.html",
      "score": 3,
      "comments": 1,
      "tags": [
        "retrocomputing"
      ],
      "id": "kxgwhy"
    },
    {
      "title": "The load-bearing vocabulary of Claude",
      "url": "https://louisabraham.github.io/load-bearing/",
      "score": 5,
      "comments": 5,
      "tags": [
        "visualization"
      ],
      "id": "4gzijx"
    },
    {
      "title": "The Endless Temptation of Claude",
      "url": "https://discardpile.pika.page/posts/the-endless-temptation-of-claude",
      "score": 10,
      "comments": 11,
      "tags": [
        "vibecoding"
      ],
      "id": "qnffyn"
    },
    {
      "title": "LLVM Z80 backend",
      "url": "https://github.com/llvm-z80/llvm-z80/wiki",
      "score": -1,
      "comments": 0,
      "tags": [
        "compilers"
      ],
      "id": "ozyvxn"
    },
    {
      "title": "Rendering sunsets with math",
      "url": "https://www.youtube.com/watch?v=QNpYgvS5uA0",
      "score": 1,
      "comments": 0,
      "tags": [
        "math",
        "programming",
        "video"
      ],
      "id": "csgbsj"
    },
    {
      "title": "Why I'm excited about effect systems (2025)",
      "url": "https://osa1.net/posts/2025-06-28-why-effects.html",
      "score": 1,
      "comments": 1,
      "tags": [
        "compilers"
      ],
      "id": "abkikp"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "denysvitali",
      "descendants": 1035,
      "id": 49525378,
      "kids": [
        49525809,
        49526051,
        49526044,
        49527258,
        49527139,
        49525713,
        49532502,
        49525815,
        49531351,
        49525688,
        49528162,
        49525611,
        49525774,
        49527997,
        49526725,
        49526236,
        49525940,
        49526374,
        49526606,
        49526955,
        49528033,
        49526506,
        49526431,
        49526061,
        49527037,
        49530152,
        49526050,
        49525769,
        49526734,
        49527730,
        49526007,
        49531884,
        49530870,
        49526572,
        49531517,
        49525593,
        49525579,
        49526600,
        49526823,
        49531793,
        49528304,
        49525731,
        49526335,
        49525932,
        49530350,
        49526612,
        49529103,
        49526367,
        49526932,
        49529868,
        49528201,
        49529754,
        49525591,
        49525785,
        49526100,
        49525695,
        49528598,
        49531586,
        49531086,
        49528360,
        49525536,
        49526045,
        49525661,
        49526686,
        49527259,
        49526702,
        49532270,
        49525656,
        49527301,
        49525846,
        49526953,
        49525626,
        49529026,
        49531706,
        49525914,
        49525839,
        49526769,
        49526922,
        49526292,
        49526046,
        49526123,
        49526504,
        49528794,
        49528236,
        49528167,
        49525623,
        49525933,
        49531230,
        49531064,
        49526498,
        49526889,
        49530341,
        49528869,
        49525749,
        49531041,
        49528290,
        49526873,
        49528271,
        49526912,
        49527583,
        49526756,
        49527367,
        49525707,
        49526928,
        49525835,
        49531620,
        49525934,
        49525717,
        49527064,
        49528165,
        49526159,
        49526137,
        49526194,
        49526085,
        49525739,
        49528924,
        49528776,
        49528226,
        49528026,
        49526650,
        49526548,
        49525838,
        49525697,
        49525654,
        49525645,
        49525598,
        49525889,
        49528469,
        49525921,
        49525716,
        49525575,
        49528597,
        49525893,
        49526289,
        49525616,
        49525738,
        49529797,
        49527942,
        49529145,
        49530995,
        49527187,
        49525827,
        49529319,
        49529022,
        49529187,
        49529202,
        49526518,
        49525755,
        49526745,
        49526350,
        49529345
      ],
      "score": 1122,
      "text": "What&#x27;s new in Claude Fable 5.1\n – <a href=\"https:&#x2F;&#x2F;platform.claude.com&#x2F;docs&#x2F;en&#x2F;models&#x2F;fable-5-1&#x2F;whats-new-fable-5-1\" rel=\"nofollow\">https:&#x2F;&#x2F;platform.claude.com&#x2F;docs&#x2F;en&#x2F;models&#x2F;fable-5-1&#x2F;whats-n...</a><p>System Card: <a href=\"https:&#x2F;&#x2F;www-cdn.anthropic.com&#x2F;0339e6a7c5c7b87f5c07798616dc32c215d14235&#x2F;Claude%20Fable%205.1%20&amp;%20Claude%20Mythos%205.1%20System%20Card.pdf\" rel=\"nofollow\">https:&#x2F;&#x2F;www-cdn.anthropic.com&#x2F;0339e6a7c5c7b87f5c07798616dc32...</a>",
      "time": 1788285233,
      "title": "Claude Fable 5.1 and Claude Mythos 5.1",
      "type": "story",
      "url": "https://www.anthropic.com/claude-fable-and-mythos-5-1"
    },
    {
      "by": "schmuhblaster",
      "descendants": 8,
      "id": 49531651,
      "kids": [
        49532563,
        49532552,
        49532019,
        49532144,
        49532047
      ],
      "score": 52,
      "time": 1788322556,
      "title": "The Emergent Symbolic Structure of Artificial Neural Networks",
      "type": "story",
      "url": "https://arxiv.org/abs/2608.29530"
    },
    {
      "by": "ptrhvns",
      "descendants": 94,
      "id": 49530989,
      "kids": [
        49532573,
        49532569,
        49532471,
        49532179,
        49531759,
        49532040,
        49531726,
        49532507,
        49531799,
        49531905,
        49531980,
        49531788,
        49531855,
        49531626,
        49532518,
        49532245,
        49532347,
        49531604,
        49531738,
        49531668,
        49531545,
        49532109
      ],
      "score": 152,
      "time": 1788315670,
      "title": "True Rate of Unemployment",
      "type": "story",
      "url": "https://www.lisep.org/tru"
    },
    {
      "by": "jatins",
      "descendants": 675,
      "id": 49526069,
      "kids": [
        49529382,
        49531443,
        49527493,
        49527078,
        49532228,
        49527546,
        49527714,
        49527178,
        49527968,
        49528409,
        49529256,
        49530111,
        49529449,
        49527345,
        49530454,
        49529106,
        49527192,
        49527651,
        49528876,
        49528018,
        49529075,
        49531175,
        49528477,
        49530364,
        49529238,
        49532227,
        49531409,
        49531551,
        49530039,
        49531506,
        49529159,
        49530724,
        49532352,
        49528051,
        49527203,
        49529261,
        49529855,
        49527097,
        49528058,
        49531692,
        49527245,
        49528158,
        49527788,
        49527797,
        49527597,
        49530494,
        49529573,
        49531837,
        49530796,
        49528585,
        49531736,
        49531566,
        49530997,
        49529262,
        49531871,
        49529247,
        49531200,
        49531489,
        49527043,
        49530247,
        49527870,
        49528958,
        49527712,
        49527252,
        49527503,
        49529625,
        49528381,
        49527736,
        49527765,
        49531979,
        49529515,
        49528991,
        49530060,
        49530483,
        49531678,
        49531950,
        49529143,
        49530309,
        49530262,
        49529381,
        49531381,
        49529155,
        49527625,
        49528863,
        49527707,
        49527781,
        49530319,
        49529206,
        49529081,
        49528841,
        49531665,
        49529195,
        49531694,
        49528698,
        49530196,
        49527698,
        49527132,
        49531247,
        49527558,
        49528118,
        49527249,
        49528250,
        49527513,
        49529745,
        49529690,
        49528907,
        49527400,
        49529165,
        49527349,
        49527680,
        49527609,
        49527561,
        49530287,
        49527105,
        49527517,
        49527631,
        49532301,
        49527617,
        49528306,
        49528688,
        49527447,
        49527143,
        49529490,
        49529386,
        49527362,
        49527341,
        49527406,
        49527587,
        49527459,
        49531078,
        49529014
      ],
      "score": 602,
      "time": 1788287715,
      "title": "How accurate have Ed Zitron's AI skeptic predictions been?",
      "type": "story",
      "url": "https://danluu.com/zitron/"
    },
    {
      "by": "gurjeet",
      "descendants": 19,
      "id": 49531525,
      "kids": [
        49531914,
        49532377,
        49531589,
        49531945,
        49532155
      ],
      "score": 34,
      "time": 1788321298,
      "title": "WebFPGA",
      "type": "story",
      "url": "https://webfpga.io/"
    },
    {
      "by": "colinprince",
      "descendants": 4,
      "id": 49505170,
      "kids": [
        49532505,
        49532403,
        49532476,
        49532469
      ],
      "score": 16,
      "time": 1788145899,
      "title": "Salad Theory",
      "type": "story",
      "url": "https://saladtheory.github.io/"
    },
    {
      "by": "tatersolid",
      "descendants": 51,
      "id": 49529621,
      "kids": [
        49531504,
        49531773,
        49532314,
        49531169,
        49532042,
        49531746,
        49532453,
        49531202,
        49531173,
        49531628,
        49531308,
        49531846,
        49531956
      ],
      "score": 142,
      "time": 1788304663,
      "title": "FBI Probes Service Selling 153M+ Drivers Licenses",
      "type": "story",
      "url": "https://krebsonsecurity.com/2026/09/fbi-probes-service-selling-153m-drivers-licenses/"
    },
    {
      "by": "raybb",
      "descendants": 67,
      "id": 49529132,
      "kids": [
        49532370,
        49529874,
        49532297,
        49531875,
        49531294,
        49530249,
        49530555,
        49530223,
        49531204,
        49530209,
        49530282,
        49530301,
        49532071,
        49530174,
        49530259,
        49531859,
        49531830,
        49531244,
        49530725
      ],
      "score": 146,
      "time": 1788301852,
      "title": "My local model setup on an M4 Pro Mac Mini",
      "type": "story",
      "url": "https://lws.io/blog/my-local-model-setup/"
    },
    {
      "by": "HieronymusBosch",
      "descendants": 132,
      "id": 49521973,
      "kids": [
        49525275,
        49532479,
        49522945,
        49531631,
        49522996,
        49526410,
        49523537,
        49523169,
        49523450,
        49523298,
        49523308,
        49528074,
        49529734,
        49531478,
        49527538,
        49532346,
        49527238,
        49524415,
        49530486,
        49524085,
        49524190,
        49523163,
        49529482,
        49525800,
        49525081,
        49530530,
        49523225,
        49522913
      ],
      "score": 397,
      "time": 1788270409,
      "title": "Introducing Ad Blocker for Firefox on iOS",
      "type": "story",
      "url": "https://blog.mozilla.org/en/firefox/ad-blocker-on-ios/"
    },
    {
      "by": "masteranza",
      "descendants": 42,
      "id": 49528895,
      "kids": [
        49532523,
        49531920,
        49531238,
        49530880,
        49532078,
        49530241,
        49530734,
        49529224,
        49529735,
        49530136,
        49531813,
        49529368,
        49529414,
        49531399,
        49530154,
        49529990,
        49532348
      ],
      "score": 101,
      "text": "I&#x27;m the developer. I built this because AI-generated conspiracy videos were getting out of control in my own YouTube feed. Weedout is a $1.99 Safari extension for macOS that removes videos YouTube labels “Made with AI” from feed, search, related videos, playlists and Shorts. It uses YouTube&#x27;s label rather than AI detection, runs locally, and does not catch unlabeled videos.<p>Source for developers who want to fork or build: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;masteranza&#x2F;weedout-for-youtube\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;masteranza&#x2F;weedout-for-youtube</a><p>Pull requests are not accepted; the repository is for independent forks.",
      "time": 1788300417,
      "title": "Show HN: Weedout – Safari extension that hides YouTube AI-labeled videos",
      "type": "story",
      "url": "https://masteranza.github.io/weedout/"
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
      "title": "The Stack Nobody Picks Might Be the One That Picks You",
      "description": "Nobody chooses .NET.  Not as a student, at least. You hear \"backend\" and the room splits into Spring...",
      "url": "https://dev.to/dj29/the-stack-nobody-picks-might-be-the-one-that-picks-you-473c",
      "tags": "discuss, csharp, devjournal, career",
      "reactions": 27,
      "comments": 28,
      "reading_time": 5,
      "author": "dj29"
    },
    {
      "title": "The job description already changed. We're not coders anymore, but couriers.",
      "description": "re: Couriers, Not Coders (Syntax Isn't The Edge Anymore)                                       ...",
      "url": "https://dev.to/canro91/the-job-description-already-changed-were-not-coders-anymore-but-couriers-40eg",
      "tags": "career, coding, softwaredevelopment, softwareengineering",
      "reactions": 3,
      "comments": 0,
      "reading_time": 1,
      "author": "canro91"
    },
    {
      "title": "The Gap Between College SQL and Industry Reality When I was in college, I thought I knew databases.",
      "description": "I sat in my 300-level database concepts class and wrote SELECT * FROM users JOIN orders ON users.id =...",
      "url": "https://dev.to/rahmanfrr/the-gap-between-college-sql-and-industry-realitywhen-i-was-in-college-i-thought-i-knew-databases-5eac",
      "tags": "career, database, interview, sql",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "rahmanfrr"
    },
    {
      "title": "Why I'm Moving Away from Power Platform and Back to Modern WordPress",
      "description": "After nearly five years of enterprise Power Platform work, I'm pivoting my content and personal projects back to modern custom WordPress development.",
      "url": "https://dev.to/matthummeldev/why-im-moving-away-from-power-platform-and-back-to-modern-wordpress-15i2",
      "tags": "wordpress, webdev, powerplatform, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "matthummeldev"
    },
    {
      "title": "New Here — Figured I’d Introduce Myself and DaemonCore",
      "description": "What’s up everyone. My name is Theodore Ochsen, founder of DaemonCore. I’ve been a developer for well...",
      "url": "https://dev.to/daemoncoreapps/new-here-figured-id-introduce-myself-and-daemoncore-kle",
      "tags": "career, cybersecurity, software, startup",
      "reactions": 1,
      "comments": 1,
      "reading_time": 2,
      "author": "daemoncoreapps"
    },
    {
      "title": "The risky part of cloning an arcade classic was never the code",
      "description": "A while back I built a small game that's clearly inspired by a 1980s arcade classic — the kind...",
      "url": "https://dev.to/pgardunoc/the-risky-part-of-cloning-an-arcade-classic-was-never-the-code-1fm",
      "tags": "gamedev, career, startup, software",
      "reactions": 1,
      "comments": 1,
      "reading_time": 5,
      "author": "pgardunoc"
    },
    {
      "title": "How to Integrate AI Coding Tools in Agile (2026 Data & Tactics)",
      "description": "See how to integrate AI coding tools in Agile development: 2026 stats, tool costs, pitfalls, and actionable playbooks. AI team velocity, ceremonies, and quality metrics.",
      "url": "https://dev.to/nlocoding/how-to-integrate-ai-coding-tools-in-agile-2026-data-tactics-652",
      "tags": "ai, career, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "nlocoding"
    },
    {
      "title": "Notice What They're Good At Before They Do",
      "description": "Most people cannot see their own strengths.  The things they do well feel too easy to count.  They...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/notice-what-theyre-good-at-before-they-do-3f0p",
      "tags": "asaelshinder, mentorship, growth, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "Standby pay at $3 an hour is a wage for owning your whole evening",
      "description": "Three dollars an hour to not drink.  That's the going rate for owning your entire evening. You can't...",
      "url": "https://dev.to/adioof/standby-pay-at-3-an-hour-is-a-wage-for-owning-your-whole-evening-2n63",
      "tags": "career, culture, devlife, oncall",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "adioof"
    },
    {
      "title": "The follow-up question is the interview",
      "description": "You can prepare an answer. You cannot prepare the question that comes after it, because it is...",
      "url": "https://dev.to/moputa/the-follow-up-question-is-the-interview-2na9",
      "tags": "career, interview, softwareengineering, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "moputa"
    }
  ]
}
```

