# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-03 06:39:36 UTC

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
      "forks": 5096,
      "added_stars": 9426,
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
      "forks": 2019,
      "added_stars": 2767,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3269,
      "added_stars": 3366,
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
      "forks": 548,
      "added_stars": 1333,
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
      "author": "colinhacks",
      "repo": "zod",
      "avatar": "https://github.com/colinhacks.png",
      "repo_link": "https://github.com/colinhacks/zod",
      "desc": "TypeScript-first schema validation with static type inference",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2170,
      "added_stars": 252,
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
      "author": "Gitlawb",
      "repo": "openclaude",
      "avatar": "https://github.com/Gitlawb.png",
      "repo_link": "https://github.com/Gitlawb/openclaude",
      "desc": "runs anywhere. uses anything",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9009,
      "added_stars": 1035,
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
      "author": "abhigyanpatwari",
      "repo": "GitNexus",
      "avatar": "https://github.com/abhigyanpatwari.png",
      "repo_link": "https://github.com/abhigyanpatwari/GitNexus",
      "desc": "GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a git repository (Github, Gitlab, Azure, Local) or ZIP file, and get an interactive knowledge graph with a built in Graph RAG Agent. Perfect for code exploration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5147,
      "added_stars": 1174,
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
      "author": "OpenCut-app",
      "repo": "OpenCut",
      "avatar": "https://github.com/OpenCut-app.png",
      "repo_link": "https://github.com/OpenCut-app/OpenCut",
      "desc": "The open-source CapCut alternative",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8734,
      "added_stars": 1755,
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
      "author": "elder-plinius",
      "repo": "T3MP3ST",
      "avatar": "https://github.com/elder-plinius.png",
      "repo_link": "https://github.com/elder-plinius/T3MP3ST",
      "desc": "autonomous red teaming platform; multi-agent offensive-security meta-harness",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1264,
      "added_stars": 257,
      "builtBy": [
        {
          "username": "jmagly",
          "href": "https://github.com/jmagly",
          "avatar": "https://avatars.githubusercontent.com/u/1159087"
        },
        {
          "username": "elder-plinius",
          "href": "https://github.com/elder-plinius",
          "avatar": "https://avatars.githubusercontent.com/u/133052465"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "lyubomir-bozhinov",
          "href": "https://github.com/lyubomir-bozhinov",
          "avatar": "https://avatars.githubusercontent.com/u/12250247"
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
      "forks": 2416,
      "added_stars": 476,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3558,
      "added_stars": 849,
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
      "author": "nashsu",
      "repo": "llm_wiki",
      "avatar": "https://github.com/nashsu.png",
      "repo_link": "https://github.com/nashsu/llm_wiki",
      "desc": "LLM Wiki is a cross-platform desktop application that turns your documents into an organized, interlinked knowledge base — automatically. Instead of traditional RAG (retrieve-and-answer from scratch every time), the LLM incrementally builds and maintains a persistent wiki from your sources。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2047,
      "added_stars": 456,
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
      "forks": 1892,
      "added_stars": 206,
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
      "author": "solidjs",
      "repo": "solid",
      "avatar": "https://github.com/solidjs.png",
      "repo_link": "https://github.com/solidjs/solid",
      "desc": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1101,
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
      "author": "apache",
      "repo": "maka",
      "avatar": "https://github.com/apache.png",
      "repo_link": "https://github.com/apache/maka",
      "desc": "Apache Maka (Incubating) is a local-first AI agent workspace. Model messages, tool calls, tool results, permission decisions, and termination events are recorded as an append-only log.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 428,
      "added_stars": 991,
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
      "author": "1weiho",
      "repo": "open-slide",
      "avatar": "https://github.com/1weiho.png",
      "repo_link": "https://github.com/1weiho/open-slide",
      "desc": "A slide framework built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 525,
      "added_stars": 335,
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
      "author": "elysiajs",
      "repo": "elysia",
      "avatar": "https://github.com/elysiajs.png",
      "repo_link": "https://github.com/elysiajs/elysia",
      "desc": "Ergonomic Framework for Humans",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 588,
      "added_stars": 94,
      "builtBy": [
        {
          "username": "SaltyAom",
          "href": "https://github.com/SaltyAom",
          "avatar": "https://avatars.githubusercontent.com/u/35027979"
        },
        {
          "username": "MarcelOlsen",
          "href": "https://github.com/MarcelOlsen",
          "avatar": "https://avatars.githubusercontent.com/u/45267579"
        },
        {
          "username": "Teyik0",
          "href": "https://github.com/Teyik0",
          "avatar": "https://avatars.githubusercontent.com/u/103841897"
        },
        {
          "username": "bogeychan",
          "href": "https://github.com/bogeychan",
          "avatar": "https://avatars.githubusercontent.com/u/109291149"
        },
        {
          "username": "akim-bow",
          "href": "https://github.com/akim-bow",
          "avatar": "https://avatars.githubusercontent.com/u/59872966"
        }
      ]
    },
    {
      "author": "NeoLabHQ",
      "repo": "context-engineering-kit",
      "avatar": "https://github.com/NeoLabHQ.png",
      "repo_link": "https://github.com/NeoLabHQ/context-engineering-kit",
      "desc": "Hand-crafted Claude Code Skills focused on improving agent results quality. Compatible with OpenCode, Cursor, Antigravity, Gemini CLI, and others. Includes CodeRabbit open-source alternative.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 154,
      "added_stars": 108,
      "builtBy": [
        {
          "username": "LeoVS09",
          "href": "https://github.com/LeoVS09",
          "avatar": "https://avatars.githubusercontent.com/u/11697794"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "popey",
          "href": "https://github.com/popey",
          "avatar": "https://avatars.githubusercontent.com/u/1841272"
        },
        {
          "username": "yoannrenard",
          "href": "https://github.com/yoannrenard",
          "avatar": "https://avatars.githubusercontent.com/u/6651065"
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
      "forks": 283,
      "added_stars": 266,
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
      "author": "actions",
      "repo": "checkout",
      "avatar": "https://github.com/actions.png",
      "repo_link": "https://github.com/actions/checkout",
      "desc": "Action for checking out a repo",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2772,
      "added_stars": 192,
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
      "author": "caddyserver",
      "repo": "caddy",
      "avatar": "https://github.com/caddyserver.png",
      "repo_link": "https://github.com/caddyserver/caddy",
      "desc": "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4936,
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
      "author": "majd",
      "repo": "ipatool",
      "avatar": "https://github.com/majd.png",
      "repo_link": "https://github.com/majd/ipatool",
      "desc": "Command-line tool that allows searching and downloading app packages (known as ipa files) for iOS, iPadOS, tvOS, and visionOS from the App Store.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 905,
      "added_stars": 1027,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 290,
      "added_stars": 784,
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
      "author": "google",
      "repo": "osv-scanner",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/osv-scanner",
      "desc": "Vulnerability scanner written in Go which uses the data provided by https://osv.dev",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 785,
      "added_stars": 270,
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
      "author": "glanceapp",
      "repo": "glance",
      "avatar": "https://github.com/glanceapp.png",
      "repo_link": "https://github.com/glanceapp/glance",
      "desc": "A self-hosted dashboard that puts all your feeds in one place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1444,
      "added_stars": 772,
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
      "author": "nektos",
      "repo": "act",
      "avatar": "https://github.com/nektos.png",
      "repo_link": "https://github.com/nektos/act",
      "desc": "Run your GitHub Actions locally 🚀",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2023,
      "added_stars": 556,
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
      "author": "esengine",
      "repo": "DeepSeek-Reasonix",
      "avatar": "https://github.com/esengine.png",
      "repo_link": "https://github.com/esengine/DeepSeek-Reasonix",
      "desc": "DeepSeek-native AI coding agent for your terminal. Engineered around prefix-cache stability — leave it running.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2362,
      "added_stars": 7186,
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
      "author": "authelia",
      "repo": "authelia",
      "avatar": "https://github.com/authelia.png",
      "repo_link": "https://github.com/authelia/authelia",
      "desc": "The Single Sign-On Multi-Factor portal for web apps, now OpenID Certified™",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1478,
      "added_stars": 394,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2227,
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
      "author": "traefik",
      "repo": "traefik",
      "avatar": "https://github.com/traefik.png",
      "repo_link": "https://github.com/traefik/traefik",
      "desc": "The Cloud Native Application Proxy",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6180,
      "added_stars": 603,
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
      "author": "sundowndev",
      "repo": "phoneinfoga",
      "avatar": "https://github.com/sundowndev.png",
      "repo_link": "https://github.com/sundowndev/phoneinfoga",
      "desc": "Information gathering framework for phone numbers",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5751,
      "added_stars": 540,
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
      "author": "github",
      "repo": "github-mcp-server",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/github-mcp-server",
      "desc": "GitHub's official MCP Server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4888,
      "added_stars": 860,
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
      "author": "superplanehq",
      "repo": "superplane",
      "avatar": "https://github.com/superplanehq.png",
      "repo_link": "https://github.com/superplanehq/superplane",
      "desc": "Open source factory for one-shot engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 626,
      "added_stars": 1435,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 166,
      "added_stars": 1820,
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
      "author": "cloudflare",
      "repo": "cloudflared",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflared",
      "desc": "Cloudflare Tunnel client",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1415,
      "added_stars": 457,
      "builtBy": [
        {
          "username": "chungthuang",
          "href": "https://github.com/chungthuang",
          "avatar": "https://avatars.githubusercontent.com/u/7826979"
        },
        {
          "username": "DevinCarr",
          "href": "https://github.com/DevinCarr",
          "avatar": "https://avatars.githubusercontent.com/u/4468678"
        },
        {
          "username": "adamchalmers",
          "href": "https://github.com/adamchalmers",
          "avatar": "https://avatars.githubusercontent.com/u/5407457"
        },
        {
          "username": "sudarshan-reddy",
          "href": "https://github.com/sudarshan-reddy",
          "avatar": "https://avatars.githubusercontent.com/u/12325664"
        },
        {
          "username": "ipostelnik",
          "href": "https://github.com/ipostelnik",
          "avatar": "https://avatars.githubusercontent.com/u/308114"
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
      "forks": 10609,
      "added_stars": 3547,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 987,
      "added_stars": 1093,
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
      "author": "gastownhall",
      "repo": "beads",
      "avatar": "https://github.com/gastownhall.png",
      "repo_link": "https://github.com/gastownhall/beads",
      "desc": "Beads - A memory upgrade for your coding agent",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1809,
      "added_stars": 1119,
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
      "author": "rorkai",
      "repo": "App-Store-Connect-CLI",
      "avatar": "https://github.com/rorkai.png",
      "repo_link": "https://github.com/rorkai/App-Store-Connect-CLI",
      "desc": "Fast, scriptable CLI for the App Store Connect API. Automate TestFlight, builds, submissions, signing, analytics, screenshots, subscriptions, and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 552,
      "added_stars": 972,
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
      "author": "krillinai",
      "repo": "KrillinAI",
      "avatar": "https://github.com/krillinai.png",
      "repo_link": "https://github.com/krillinai/KrillinAI",
      "desc": "AI video translation & dubbing tool for humans and AI Agents, powered by LLMs. Full pipeline: download, transcribe, translate, TTS dub, reformat, cover generation. 100+ languages, optimized for YouTube, TikTok, Bilibili, Douyin, and more.AI视频翻译配音工具，面向人类与AI Agent，100+语言全链路，CLI分阶段调用，适配抖音、小红书、哔哩哔哩、视频号、TikTok、YouTube",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1086,
      "added_stars": 774,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 17668,
      "added_stars": 3017,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8958,
      "added_stars": 663,
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
      "forks": 1322,
      "added_stars": 9973,
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
      "forks": 254,
      "added_stars": 2979,
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
      "forks": 2701,
      "added_stars": 7539,
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
      "forks": 486,
      "added_stars": 5297,
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
      "forks": 1675,
      "added_stars": 11252,
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
      "forks": 655,
      "added_stars": 6771,
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
      "author": "google",
      "repo": "skills",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/skills",
      "desc": "Agent Skills for Google products and technologies",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1553,
      "added_stars": 3900,
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
      "author": "donnemartin",
      "repo": "system-design-primer",
      "avatar": "https://github.com/donnemartin.png",
      "repo_link": "https://github.com/donnemartin/system-design-primer",
      "desc": "Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 58199,
      "added_stars": 8361,
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
      "author": "youssofal",
      "repo": "MTPLX",
      "avatar": "https://github.com/youssofal.png",
      "repo_link": "https://github.com/youssofal/MTPLX",
      "desc": "3x faster speeds on MLX | Qwen 3.8 27B | Native MTP Speculative Decoding On Apple Silicon With No External Drafter.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 146,
      "added_stars": 826,
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
      "forks": 7636,
      "added_stars": 3870,
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
      "forks": 1860,
      "added_stars": 2770,
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
      "forks": 52427,
      "added_stars": 21575,
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
      "forks": 9409,
      "added_stars": 3533,
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
      "forks": 2891,
      "added_stars": 12772,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2144,
      "added_stars": 5159,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Local UI to run and train LLMs and diffusion models. Supports GGUF, MLX, Qwen3.8, DeepSeek-V4, MiniMax-H3, Gemma 4, FLUX and more.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6859,
      "added_stars": 6347,
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
      "forks": 1814,
      "added_stars": 3023,
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
      "forks": 3337,
      "added_stars": 3260,
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
      "forks": 1990,
      "added_stars": 2822,
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
      "forks": 569,
      "added_stars": 1781,
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
      "author": "titanwings",
      "repo": "distilly",
      "avatar": "https://github.com/titanwings.png",
      "repo_link": "https://github.com/titanwings/distilly",
      "desc": "Distilly — Distill how they think into reusable Skills for any Agent or Bot. Formerly Colleague Skill（原同事 Skill）.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2128,
      "added_stars": 3727,
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
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
    },
    {
      "title": "My idempotency library had one job. A dropped connection made it run the payment twice.",
      "url": "https://dev.to/pinceladasdaweb/my-idempotency-library-had-one-job-a-dropped-connection-made-it-run-the-payment-twice-nnh",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-08-17T12:32:41.000Z"
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
      "title": "💎 Introducing Community Gems: Celebrating Human Curation and the Best of Our Community",
      "description": "In an internet full of noise, infinite scrolls, and algorithmically generated content, finding...",
      "url": "https://dev.to/devteam/introducing-community-gems-celebrating-human-curation-and-the-best-of-our-community-58c8",
      "tags": "meta, community, devjournal",
      "reactions": 61,
      "comments": 14,
      "reading_time": 2,
      "author": "ben"
    },
    {
      "title": "How to Write Reliable Rubrics for LLM-as-a-Judge Evaluations",
      "description": "Follow up to Part 1: How to Design AI Evaluations You Can Actually Trust  At Google, we are...",
      "url": "https://dev.to/googleai/how-to-write-reliable-rubrics-for-llm-as-a-judge-evaluations-ndp",
      "tags": "ai, evals, testing",
      "reactions": 23,
      "comments": 0,
      "reading_time": 5,
      "author": "jfschmakeit"
    },
    {
      "title": "What is harness engineering and why should I care?",
      "description": "How do you ship a software product with 0 lines of manually-written code?  A friend...",
      "url": "https://dev.to/googleai/what-is-harness-engineering-and-why-should-i-care-8n0",
      "tags": "ai, agents, programming, softwareengineering",
      "reactions": 19,
      "comments": 0,
      "reading_time": 6,
      "author": "shirmeirlador"
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
      "title": "Preptember is here!! Plan a Fest for your local community.",
      "description": "September marks the official start of Preptember, a month dedicated to organizers planning local...",
      "url": "https://blog.mlh.com/preptember-is-here-plan-a-fest-for-your-local-community-5ce3",
      "tags": "hacktoberfest, ai, hackathon, devchallenge",
      "reactions": 43,
      "comments": 3,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Hearing the Mountain's Roar: How Antigravity CLI's AI Agents & IoT Data Track Volcanic Shockwaves",
      "description": "Turning 29k home weather stations and Gemini AI agents into a 15-minute volcanic warning...",
      "url": "https://dev.to/gde/hearing-the-mountains-roar-how-antigravity-clis-ai-agents-iot-data-track-volcanic-shockwaves-13hp",
      "tags": "",
      "reactions": 6,
      "comments": 0,
      "reading_time": 17,
      "author": "tanaike"
    },
    {
      "title": "Welcome Thread - v391",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v391-13l0",
      "tags": "welcome",
      "reactions": 16,
      "comments": 62,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "Claude Fable 5.1 is now available on Agent Platform!",
      "description": "Claude Fable 5.1 is officially available in the Model Garden on Agent Platform.  Built for...",
      "url": "https://dev.to/googleai/claude-fable-51-is-now-available-on-agent-platform-1b16",
      "tags": "claude, googlecloud, developer",
      "reactions": 8,
      "comments": 0,
      "reading_time": 1,
      "author": "pugsandprincesses"
    },
    {
      "title": "Elevating Antigravity agent skills, Part 2: Image generation",
      "description": "By coupling native image generation directly with structured prompt synthesis, you turn your AI agent...",
      "url": "https://dev.to/googleai/elevating-antigravity-agent-skills-part-2-image-generation-2jno",
      "tags": "ai, agentskills, antigravity",
      "reactions": 16,
      "comments": 0,
      "reading_time": 6,
      "author": "jamesor"
    },
    {
      "title": "Streamline Publishing with a Claude Code Skill",
      "description": "A Claude Code skill that turns one markdown file into dev.to, AWS Builder Center, Medium and LinkedIn versions, checks them before they ship, and posts the ones with an API — plus the debugging tools for when a destination mangles something.",
      "url": "https://dev.to/gde/streamline-publishing-with-a-claude-code-skill-1bdn",
      "tags": "claudecode, writing, devtools, ai",
      "reactions": 16,
      "comments": 1,
      "reading_time": 7,
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
      "title": "deforester - Logging for Janet",
      "url": "https://codeberg.org/veqq/deforester",
      "score": 5,
      "comments": 0,
      "tags": [
        "lisp",
        "show"
      ],
      "id": "klhs7o"
    },
    {
      "title": "I Think the Military Commissary Freezers Were Hacked",
      "url": "https://signalandsilence.substack.com/p/i-think-someone-hacked-the-commissary",
      "score": 7,
      "comments": 1,
      "tags": [
        "security"
      ],
      "id": "ygjo0g"
    },
    {
      "title": "Claude Code Stores OAuth Tokens in Plaintext",
      "url": "https://secretspec.dev/blog/claude-code-stores-oauth-tokens-in-plaintext/",
      "score": -1,
      "comments": 0,
      "tags": [
        "security",
        "vibecoding"
      ],
      "id": "uxp2y2"
    },
    {
      "title": "Security Incident – BGP Hijacking",
      "url": "https://www.virtualizor.com/blog/security-incident-bgp-hijacking/",
      "score": 5,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "6e1y6s"
    },
    {
      "title": "asciiQuake",
      "url": "https://asciiquake.wtf/",
      "score": 1,
      "comments": 1,
      "tags": [
        "games"
      ],
      "id": "l1luho"
    },
    {
      "title": "US government backs OpenAI in New York Times copyright case",
      "url": "https://www.reuters.com/legal/litigation/us-government-backs-openai-new-york-times-copyright-case-2026-09-02/",
      "score": -2,
      "comments": 1,
      "tags": [
        "ai",
        "law"
      ],
      "id": "xoklqk"
    },
    {
      "title": "What Happened to Borland?",
      "url": "https://www.youtube.com/watch?v=HwkoaPl31Dw",
      "score": -1,
      "comments": 3,
      "tags": [
        "historical",
        "video"
      ],
      "id": "zzt49w"
    },
    {
      "title": "Reverse Engineering Unknown File Formats with ImHex",
      "url": "https://werwolv.net/posts/file_format_reverse_engineering/",
      "score": 5,
      "comments": 0,
      "tags": [
        "reversing"
      ],
      "id": "tst4e1"
    },
    {
      "title": "CTTI is Exponential, RTTI is Linear",
      "url": "https://www.gingerbill.org/article/2026/09/02/ctti-is-exponential-rtti-is-linear/",
      "score": 5,
      "comments": 2,
      "tags": [
        "compilers",
        "plt"
      ],
      "id": "mj9qti"
    },
    {
      "title": "Let's build a compressor from scratch",
      "url": "https://ochagavia.nl/blog/lets-build-a-compressor-from-scratch/",
      "score": 9,
      "comments": 2,
      "tags": [
        "compsci",
        "programming",
        "rust"
      ],
      "id": "3y9lbw"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "bvaldivielso",
      "descendants": 346,
      "id": 49541256,
      "kids": [
        49541357,
        49541610,
        49541666,
        49541688,
        49543189,
        49542912,
        49546442,
        49546502,
        49541569,
        49541410,
        49546378,
        49541978,
        49541501,
        49542368,
        49541506,
        49546045,
        49543985,
        49544560,
        49541601,
        49544110,
        49545697,
        49545587,
        49542116,
        49543546,
        49542817,
        49543009,
        49541952,
        49542796,
        49546294,
        49541446,
        49541540,
        49545047,
        49541825,
        49544112,
        49544550,
        49544043,
        49546314,
        49541502,
        49545217,
        49541703,
        49545733,
        49542956,
        49545032,
        49543428,
        49542711,
        49542699,
        49541627,
        49541350,
        49542356,
        49546132,
        49541931,
        49545743,
        49544631,
        49541556,
        49543123,
        49541522
      ],
      "score": 508,
      "text": "<a href=\"https:&#x2F;&#x2F;research.meta.ai&#x2F;blog&#x2F;introducing-muse-spark-1-3\" rel=\"nofollow\">https:&#x2F;&#x2F;research.meta.ai&#x2F;blog&#x2F;introducing-muse-spark-1-3</a>",
      "time": 1788377704,
      "title": "Muse Spark 1.3",
      "type": "story",
      "url": "https://developer.meta.com/ai/models/muse-spark/"
    },
    {
      "by": "bratao",
      "descendants": 540,
      "id": 49537553,
      "kids": [
        49538953,
        49538512,
        49537983,
        49538217,
        49538420,
        49540167,
        49539552,
        49537862,
        49538445,
        49540467,
        49538697,
        49537937,
        49538742,
        49539046,
        49537951,
        49540721,
        49546108,
        49546477,
        49538126,
        49538775,
        49545638,
        49539270,
        49545336,
        49541858,
        49538534,
        49538774,
        49538498,
        49539549,
        49538670,
        49538531,
        49538099,
        49540776,
        49539256,
        49539081,
        49538801,
        49539538,
        49540551,
        49540705,
        49538433,
        49545111,
        49541219,
        49540946,
        49539330,
        49538603,
        49545829,
        49545007,
        49544748,
        49540117,
        49538587,
        49538087,
        49540217,
        49545721,
        49540990,
        49538032,
        49539317,
        49542634,
        49542273,
        49538060,
        49538089,
        49539769,
        49540822,
        49539998,
        49544211,
        49538129,
        49540429,
        49538869,
        49542115,
        49538074,
        49539603,
        49541477,
        49544366,
        49537873,
        49538465,
        49538460,
        49538747,
        49540359,
        49544987,
        49538984,
        49537974,
        49543610,
        49537803,
        49541082,
        49540610,
        49538848,
        49538663,
        49537996,
        49537707,
        49542376,
        49537797,
        49540899,
        49539516,
        49539306,
        49539265,
        49539258,
        49538815,
        49538701,
        49538547,
        49545946,
        49538526,
        49538571,
        49537848,
        49543032,
        49537752,
        49542719,
        49546260,
        49540702,
        49541216,
        49538132,
        49538000,
        49538873,
        49537860,
        49537818,
        49538013,
        49538266,
        49539135
      ],
      "score": 951,
      "text": "<a href=\"https:&#x2F;&#x2F;deepmind.google&#x2F;models&#x2F;model-cards&#x2F;gemini-3-8-flash&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;deepmind.google&#x2F;models&#x2F;model-cards&#x2F;gemini-3-8-flash&#x2F;</a>",
      "time": 1788361960,
      "title": "Gemini 3.8 Flash and 3.8 Flash Cyber",
      "type": "story",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
    },
    {
      "by": "rbanffy",
      "descendants": 5,
      "id": 49511493,
      "kids": [
        49511695,
        49546496,
        49512970
      ],
      "score": 15,
      "time": 1788192937,
      "title": "The Computer Museum of America reclamation project",
      "type": "story",
      "url": "https://computer-museum.org/wp/"
    },
    {
      "by": "ColinWright",
      "descendants": 19,
      "id": 49508405,
      "kids": [
        49545183,
        49545891,
        49544826,
        49544647,
        49544740,
        49545251
      ],
      "score": 128,
      "time": 1788175784,
      "title": "Holden's Lightning Flight",
      "type": "story",
      "url": "https://en.wikipedia.org/wiki/Holden%27s_Lightning_flight"
    },
    {
      "by": "donohoe",
      "descendants": 248,
      "id": 49537131,
      "kids": [
        49543693,
        49543135,
        49544074,
        49545306,
        49545450,
        49541307,
        49544310,
        49542541,
        49546073,
        49544228,
        49543941,
        49545113,
        49545265,
        49543722,
        49543198,
        49542263,
        49542944,
        49543877,
        49542027,
        49545712,
        49544921,
        49541332,
        49541441,
        49541370,
        49542828,
        49543602
      ],
      "score": 342,
      "text": "<a href=\"https:&#x2F;&#x2F;archive.ph&#x2F;rlAbY\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.ph&#x2F;rlAbY</a><p><a href=\"https:&#x2F;&#x2F;www.reuters.com&#x2F;legal&#x2F;litigation&#x2F;google-defeats-us-bid-force-ad-tech-sale-2026-09-02&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.reuters.com&#x2F;legal&#x2F;litigation&#x2F;google-defeats-us-b...</a>",
      "time": 1788360376,
      "title": "Google avoids a breakup of its ad tech business",
      "type": "story",
      "url": "https://www.nytimes.com/2026/09/02/technology/google-ad-tech-remedies.html"
    },
    {
      "by": "jakobgreenfeld",
      "descendants": 170,
      "id": 49536375,
      "kids": [
        49536867,
        49537411,
        49536677,
        49538500,
        49536644,
        49536739,
        49545738,
        49545361,
        49544777,
        49536605,
        49546008,
        49536995,
        49537127,
        49536635,
        49538002,
        49538506,
        49537746,
        49536688,
        49536952,
        49536611,
        49540494,
        49538054,
        49537187,
        49538061,
        49540786,
        49536625,
        49536805,
        49545271,
        49536660,
        49539380,
        49544446,
        49537129,
        49538408,
        49539591,
        49543067,
        49537456,
        49540648,
        49544736,
        49539343
      ],
      "score": 370,
      "time": 1788357599,
      "title": "Three sites made 215,128 “best software” pages for AI. Perplexity cites them",
      "type": "story",
      "url": "https://trellner.com/reports/manufactured-sources-behind-ai-recommendations/"
    },
    {
      "by": "Anon84",
      "descendants": 79,
      "id": 49497996,
      "kids": [
        49546371,
        49545606,
        49545706,
        49545544,
        49545090,
        49546117,
        49545521,
        49498881,
        49499982,
        49545953,
        49500648,
        49545800,
        49545708,
        49546147,
        49545147,
        49545332,
        49545560,
        49545568
      ],
      "score": 115,
      "time": 1788091976,
      "title": "The shrinking landscape of linguistic diversity in the age of LLMs",
      "type": "story",
      "url": "https://www.nature.com/articles/s41562-026-02550-0"
    },
    {
      "by": "smarmelling",
      "descendants": 18,
      "id": 49509606,
      "kids": [
        49546354,
        49546474,
        49546303,
        49545818,
        49545888,
        49546257
      ],
      "score": 26,
      "time": 1788183211,
      "title": "Creating Backup Storage Sucks",
      "type": "story",
      "url": "https://smarmelling.com/posts/creating-backup-storage-sucks.html"
    },
    {
      "by": "MrOrelliOReilly",
      "descendants": 11,
      "id": 49519792,
      "kids": [
        49545556,
        49546235,
        49519871,
        49545445,
        49545635,
        49546246,
        49545987
      ],
      "score": 48,
      "time": 1788254839,
      "title": "Higher Multipoles of the Cow",
      "type": "story",
      "url": "https://arxiv.org/abs/2504.00506"
    },
    {
      "by": "lloydarmbrust",
      "descendants": 57,
      "id": 49543530,
      "kids": [
        49544249,
        49543849,
        49545069,
        49543752,
        49544815,
        49544867,
        49543810,
        49546478,
        49545526,
        49546568,
        49544778,
        49545376,
        49545821,
        49544503,
        49546340,
        49544354,
        49545531,
        49545535,
        49545563,
        49543742,
        49543581,
        49545497
      ],
      "score": 49,
      "text": "Hi HN,<p>I’m Lloyd, one of two founders of RonanRx (<a href=\"https:&#x2F;&#x2F;ronanrx.com&#x2F;\">https:&#x2F;&#x2F;ronanrx.com&#x2F;</a>). We are building a vertically integrated pharmaceutical company with software for prescribing, telehealth, compounding, manufacturing, and delivery. We are starting with GLP-1s and peptides.<p>The path to RonanRx is fairly unconventional. During the pandemic, I built one of the largest mask manufacturing factories in the US. We could make a million masks in a day. We converted raw polypropylene pellets into finished pallets of masks.<p>I had a background in software from my YC W10 company, so we took a software approach to building our factory. We used machine learning and computer vision to optimize production. We also vertically integrated almost everything. It worked. We built an efficient manufacturing operation and grew the business to 50 million dollars in revenue. Then people actually stopped caring about masks. Fair enough.<p>Around the same time, I decided to try and lose the weight I had gained while building the factory. I ate nothing but chicken for six months. While this diet got some results, I plateaued. My doctor suggested tirzepatide, a GLP-1 medication.<p>For me, losing weight was only the beginning. &quot;Food noise&quot; was gone. I showed less interest in other compulsive behavior. I stopped scrolling Instagram and quit biting my nails. But that was just the beginning. I was born with a congenital heart defect called aortic stenosis. My whole life doctors told me I&#x27;d need open heart surgery in my 40s (I am 45 now). After just 18 months using tirzepatide, my cardiologist’s began to think (and still thinks) my surgery could be pushed back until I am 70 or 80.<p>This was all happening when I was deciding what to work on next. I wanted to keep working on manufacturing. I didn&#x27;t want to build another product that could be replicated by a frontier model. Pharmaceutical manufacturing was the best combination of digital, physical, biological, and regulatory infrastructure I could find. The thing that bothered me was how disconnected all of the pieces were: telehealth, EHR, prescriptions, dispensing software, production, shipping. No one company has it all.<p>GLP-1s come in a handful of predefined doses, but patients obviously aren&#x27;t standardized: they respond differently, lose weight at different rates, experience different side effects, and may need very different doses. Compounding pharmacies can fill customized prescriptions, but they are not built like software companies. Workflows are manual, fragmented, and disconnected from the patient’s data. It&#x27;s our goal to connect those pieces with RonanRx.<p>Patients either come to us directly or are referred by a physician. Once a patient is in our system, we collect medical records, current meds, labs, and data from wearables. Our software follows the prescription through drug formulation, compounding, quality testing, and drug dispensing and distribution.<p>The most interesting feature is the feedback loop. As the patient is undergoing treatment, their response becomes data that can be used by their doctor to modify the treatment. We keep the doctor in the feedback loop.<p>We make money by selling drugs we manufacture. Because people can buy directly from us, their price is usually 3x-10x more affordable. We can do this because we start at the molecule and own the entire stack from manufacturing through prescribing, dispensing, and delivery, instead of paying a chain of middlemen at every step.<p>We are beginning with GLP-1s and peptides since this was where I personally experienced the issue; however, we are more interested in the potential of patient-specific pharmaceutical manufacturing.<p>We would love your feedback, especially if you have built pharmacy, manufacturing, clinical infrastructure, EHRs, or any other regulated software. There are a lot of assumptions in this model that should be tested.",
      "time": 1788388564,
      "title": "Launch HN: RonanRX (YC S26) – Personalized Peptides and GLP-1s",
      "type": "story"
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
      "title": "Beyond Lambdas: Raising the Abstraction Level of Functional Code",
      "url": "https://adamtornhill.substack.com/p/beyond-lambdas-raising-the-abstraction",
      "permalink": "https://www.reddit.com/r/programming/comments/1w53v9c/beyond_lambdas_raising_the_abstraction_level_of/",
      "author": "/u/nephrenka",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/nephrenka [link] &#32; [comments]",
      "published": "2026-09-02T07:56:02+00:00"
    },
    {
      "title": "Postgres Calculations and the Ambiguity of NULL",
      "url": "https://www.crunchydata.com/blog/postgres-calculations-and-the-ambiguity-of-null",
      "permalink": "https://www.reddit.com/r/programming/comments/1w5gtxg/postgres_calculations_and_the_ambiguity_of_null/",
      "author": "/u/winsletts",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "All the ways that NULL can cause chaos in your SQL outcomes. &#32; submitted by &#32; /u/winsletts [link] &#32; [comments]",
      "published": "2026-09-02T17:22:58+00:00"
    },
    {
      "title": "CTTI is Exponential, RTTI is Linear",
      "url": "https://www.gingerbill.org/article/2026/09/02/ctti-is-exponential-rtti-is-linear/",
      "permalink": "https://www.reddit.com/r/programming/comments/1w5ov1s/ctti_is_exponential_rtti_is_linear/",
      "author": "/u/gingerbill",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/gingerbill [link] &#32; [comments]",
      "published": "2026-09-02T22:08:52+00:00"
    },
    {
      "title": "Data Access Patterns That Makes Your CPU Really Angry",
      "url": "https://blog.weineng.me/posts/slowest_add/",
      "permalink": "https://www.reddit.com/r/programming/comments/1w5ehl9/data_access_patterns_that_makes_your_cpu_really/",
      "author": "/u/fagnerbrack",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/fagnerbrack [link] &#32; [comments]",
      "published": "2026-09-02T16:00:54+00:00"
    },
    {
      "title": "This Fence Has No Farmer",
      "url": "https://adamgreenough.net/blog/this-fence-has-no-farmer/",
      "permalink": "https://www.reddit.com/r/programming/comments/1w5ff6s/this_fence_has_no_farmer/",
      "author": "/u/addycodes",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/addycodes [link] &#32; [comments]",
      "published": "2026-09-02T16:34:12+00:00"
    },
    {
      "title": "Let's build a compressor from scratch",
      "url": "https://ochagavia.nl/blog/lets-build-a-compressor-from-scratch/",
      "permalink": "https://www.reddit.com/r/programming/comments/1w5l8wx/lets_build_a_compressor_from_scratch/",
      "author": "/u/aochagavia",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/aochagavia [link] &#32; [comments]",
      "published": "2026-09-02T19:56:50+00:00"
    },
    {
      "title": "Apache Kafka vs Apache Iggy: A Technical Comparison",
      "url": "https://softwaremill.com/apache-kafka-vs-apache-iggy-same-log-different-engine/",
      "permalink": "https://www.reddit.com/r/programming/comments/1w57nle/apache_kafka_vs_apache_iggy_a_technical_comparison/",
      "author": "/u/mmatloka",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/mmatloka [link] &#32; [comments]",
      "published": "2026-09-02T11:28:12+00:00"
    },
    {
      "title": "Squeezing Performance out of eBPF",
      "url": "https://bitbison.io/blog/ebpf-performance/",
      "permalink": "https://www.reddit.com/r/programming/comments/1w5p84l/squeezing_performance_out_of_ebpf/",
      "author": "/u/mttd",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/mttd [link] &#32; [comments]",
      "published": "2026-09-02T22:23:00+00:00"
    },
    {
      "title": "Injections done the right way!",
      "url": "https://youtu.be/rEmL9wqxgKQ",
      "permalink": "https://www.reddit.com/r/programming/comments/1w5fn7e/injections_done_the_right_way/",
      "author": "/u/Efficient-Public-551",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Efficient-Public-551 [link] &#32; [comments]",
      "published": "2026-09-02T16:42:08+00:00"
    },
    {
      "title": "Yet Another Sentence Boundary Detector (python, rule-based)",
      "url": "https://hashnode.com/edit/cms4z57tu00010bhr87bw1jtz",
      "permalink": "https://www.reddit.com/r/programming/comments/1w5hhdh/yet_another_sentence_boundary_detector_python/",
      "author": "/u/Speedk4011",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Speedk4011 [link] &#32; [comments]",
      "published": "2026-09-02T17:45:39+00:00"
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
      "title": "The Stack Nobody Picks Might Be the One That Picks You",
      "description": "Nobody chooses .NET.  Not as a student, at least. You hear \"backend\" and the room splits into Spring...",
      "url": "https://dev.to/dj29/the-stack-nobody-picks-might-be-the-one-that-picks-you-473c",
      "tags": "discuss, csharp, devjournal, career",
      "reactions": 31,
      "comments": 40,
      "reading_time": 5,
      "author": "dj29"
    },
    {
      "title": "Scope, not effort: how engineer promotions actually get decided",
      "description": "Every big-tech ladder is measuring the same thing, and it isn't how hard you worked. Here's the machine, and the six ways good engineers stall inside it.",
      "url": "https://dev.to/ginocorp_industries/scope-not-effort-how-engineer-promotions-actually-get-decided-4jp2",
      "tags": "career, programming, leadership, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 9,
      "author": "ginocorp_industries"
    },
    {
      "title": "Nine categories: how engineering manager interviews actually get scored",
      "description": "Most EM interview prep fails the same way. You rehearse three strong stories, then get asked something from a category you never considered.",
      "url": "https://dev.to/ginocorp_industries/nine-categories-how-engineering-manager-interviews-actually-get-scored-19kn",
      "tags": "career, leadership, management, interview",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "ginocorp_industries"
    },
    {
      "title": "The Best Thing You Can Give Is Your Time",
      "description": "When people think about mentoring, they imagine having brilliant answers.  The perfect piece of...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/the-best-thing-you-can-give-is-your-time-ab6",
      "tags": "asaelshinder, mentorship, career, growth",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "My Research Journal: Why I Decided to Start Doing Research & What I Learned",
      "description": "Why I Decided to Start Doing Research  So I decided I will start doing research, and in this blog...",
      "url": "https://dev.to/abtahitajwar/my-research-journal-why-i-decided-to-start-doing-research-what-i-learned-4a1g",
      "tags": "career, computerscience, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "abtahitajwar"
    },
    {
      "title": "I read my own code from two years ago, here's what embarrassed me",
      "description": "Last week I needed to pull a small utility out of an old project, something I built during my first...",
      "url": "https://dev.to/ethanpkg/i-read-my-own-code-from-two-years-ago-heres-what-embarrassed-me-51oa",
      "tags": "discuss, programming, career, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "ethanpkg"
    },
    {
      "title": "Why Most Developers Plateau — And How to Break Through It",
      "description": "The Comfort Zone Trap  Most developers hit a point where they know enough to be productive, and...",
      "url": "https://dev.to/lakshya_parashar/why-most-developers-plateau-and-how-to-break-through-it-39l1",
      "tags": "programming, career, webdev, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "lakshya_parashar"
    },
    {
      "title": "Why Developers Should Learn to Love Regulation",
      "description": "Tech culture is allergic to regulation. We want to move fast and break things. Auditors are...",
      "url": "https://dev.to/grade_one/why-developers-should-learn-to-love-regulation-g7m",
      "tags": "career, ai, webdev, discuss",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "grade_one"
    },
    {
      "title": "The Tool You Master Today Is the Legacy System You Maintain Tomorrow",
      "description": "Early in my career I fell in love with a particular technology and got genuinely good at it. I knew...",
      "url": "https://dev.to/serguey_shinder_4ab9b87b1/the-tool-you-master-today-is-the-legacy-system-you-maintain-tomorrow-11ml",
      "tags": "sergueyshinder, future, career, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "serguey_shinder_4ab9b87b1"
    },
    {
      "title": "AI Can Write the Code. So What Are You Actually Good At?",
      "description": "There is a strange thing happening in software engineering.  We have AI that can generate functions,...",
      "url": "https://dev.to/darkterminal/ai-can-write-the-code-so-what-are-you-actually-good-at-220e",
      "tags": "ai, career, softwareengineering, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "darkterminal"
    }
  ]
}
```

