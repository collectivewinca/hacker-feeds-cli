# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-04 06:39:09 UTC

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
      "forks": 5152,
      "added_stars": 10023,
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
      "forks": 9025,
      "added_stars": 1389,
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
      "forks": 2072,
      "added_stars": 2941,
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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 558,
      "added_stars": 1159,
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
      "forks": 2173,
      "added_stars": 277,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3289,
      "added_stars": 3194,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3567,
      "added_stars": 1058,
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
      "author": "abhigyanpatwari",
      "repo": "GitNexus",
      "avatar": "https://github.com/abhigyanpatwari.png",
      "repo_link": "https://github.com/abhigyanpatwari/GitNexus",
      "desc": "GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a git repository (Github, Gitlab, Azure, Local) or ZIP file, and get an interactive knowledge graph with a built in Graph RAG Agent. Perfect for code exploration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5150,
      "added_stars": 1157,
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
      "author": "elder-plinius",
      "repo": "T3MP3ST",
      "avatar": "https://github.com/elder-plinius.png",
      "repo_link": "https://github.com/elder-plinius/T3MP3ST",
      "desc": "autonomous red teaming platform; multi-agent offensive-security meta-harness",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1268,
      "added_stars": 270,
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
      "author": "nashsu",
      "repo": "llm_wiki",
      "avatar": "https://github.com/nashsu.png",
      "repo_link": "https://github.com/nashsu/llm_wiki",
      "desc": "LLM Wiki is a cross-platform desktop application that turns your documents into an organized, interlinked knowledge base — automatically. Instead of traditional RAG (retrieve-and-answer from scratch every time), the LLM incrementally builds and maintains a persistent wiki from your sources。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2052,
      "added_stars": 470,
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
      "author": "actions",
      "repo": "checkout",
      "avatar": "https://github.com/actions.png",
      "repo_link": "https://github.com/actions/checkout",
      "desc": "Action for checking out a repo",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2773,
      "added_stars": 173,
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
      "author": "chaitanyagiri",
      "repo": "munder-difflin",
      "avatar": "https://github.com/chaitanyagiri.png",
      "repo_link": "https://github.com/chaitanyagiri/munder-difflin",
      "desc": "A local multi-agent harness that works with your existing Claude Code, Codex subscriptions, allows you to run an office of agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 785,
      "added_stars": 1238,
      "builtBy": [
        {
          "username": "chaitanyagiri",
          "href": "https://github.com/chaitanyagiri",
          "avatar": "https://avatars.githubusercontent.com/u/26071627"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "gpechieu",
          "href": "https://github.com/gpechieu",
          "avatar": "https://avatars.githubusercontent.com/u/86521613"
        },
        {
          "username": "bluepanda999",
          "href": "https://github.com/bluepanda999",
          "avatar": "https://avatars.githubusercontent.com/u/61337736"
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
      "added_stars": 45,
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
      "author": "mlc-ai",
      "repo": "web-llm",
      "avatar": "https://github.com/mlc-ai.png",
      "repo_link": "https://github.com/mlc-ai/web-llm",
      "desc": "High-performance In-browser LLM Inference Engine",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1373,
      "added_stars": 345,
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
      "author": "rohitg00",
      "repo": "agentmemory",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/agentmemory",
      "desc": "#1 Persistent memory for AI coding agents based on real-world benchmarks",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2421,
      "added_stars": 399,
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
      "author": "KeygraphHQ",
      "repo": "shannon",
      "avatar": "https://github.com/KeygraphHQ.png",
      "repo_link": "https://github.com/KeygraphHQ/shannon",
      "desc": "Shannon is an AI pentester for web applications and APIs. It analyzes your source code, identifies attack vectors, and executes real exploits to prove vulnerabilities before they reach production.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5482,
      "added_stars": 483,
      "builtBy": [
        {
          "username": "ajmallesh",
          "href": "https://github.com/ajmallesh",
          "avatar": "https://avatars.githubusercontent.com/u/178829317"
        },
        {
          "username": "ezl-keygraph",
          "href": "https://github.com/ezl-keygraph",
          "avatar": "https://avatars.githubusercontent.com/u/252853768"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "keygraphVarun",
          "href": "https://github.com/keygraphVarun",
          "avatar": "https://avatars.githubusercontent.com/u/182007681"
        },
        {
          "username": "Khaushik-keygraph",
          "href": "https://github.com/Khaushik-keygraph",
          "avatar": "https://avatars.githubusercontent.com/u/197124057"
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
      "forks": 1948,
      "added_stars": 209,
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
      "author": "maotoumao",
      "repo": "MusicFree",
      "avatar": "https://github.com/maotoumao.png",
      "repo_link": "https://github.com/maotoumao/MusicFree",
      "desc": "插件化、定制化、无广告的免费音乐播放器",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1893,
      "added_stars": 203,
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
      "forks": 283,
      "added_stars": 232,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 294,
      "added_stars": 786,
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
      "author": "caddyserver",
      "repo": "caddy",
      "avatar": "https://github.com/caddyserver.png",
      "repo_link": "https://github.com/caddyserver/caddy",
      "desc": "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4940,
      "added_stars": 998,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2227,
      "added_stars": 667,
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
      "author": "glanceapp",
      "repo": "glance",
      "avatar": "https://github.com/glanceapp.png",
      "repo_link": "https://github.com/glanceapp/glance",
      "desc": "A self-hosted dashboard that puts all your feeds in one place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1444,
      "added_stars": 776,
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
      "author": "majd",
      "repo": "ipatool",
      "avatar": "https://github.com/majd.png",
      "repo_link": "https://github.com/majd/ipatool",
      "desc": "Command-line tool that allows searching and downloading app packages (known as ipa files) for iOS, iPadOS, tvOS, and visionOS from the App Store.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 908,
      "added_stars": 1047,
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
      "author": "google",
      "repo": "osv-scanner",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/osv-scanner",
      "desc": "Vulnerability scanner written in Go which uses the data provided by https://osv.dev",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 784,
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
      "author": "nektos",
      "repo": "act",
      "avatar": "https://github.com/nektos.png",
      "repo_link": "https://github.com/nektos/act",
      "desc": "Run your GitHub Actions locally 🚀",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2023,
      "added_stars": 553,
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
      "author": "traefik",
      "repo": "traefik",
      "avatar": "https://github.com/traefik.png",
      "repo_link": "https://github.com/traefik/traefik",
      "desc": "The Cloud Native Application Proxy",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6184,
      "added_stars": 598,
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
      "forks": 167,
      "added_stars": 1837,
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
      "forks": 4894,
      "added_stars": 846,
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
      "forks": 627,
      "added_stars": 1413,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 987,
      "added_stars": 1108,
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
      "forks": 10616,
      "added_stars": 3527,
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
      "author": "sundowndev",
      "repo": "phoneinfoga",
      "avatar": "https://github.com/sundowndev.png",
      "repo_link": "https://github.com/sundowndev/phoneinfoga",
      "desc": "Information gathering framework for phone numbers",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5758,
      "added_stars": 539,
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
      "author": "rorkai",
      "repo": "App-Store-Connect-CLI",
      "avatar": "https://github.com/rorkai.png",
      "repo_link": "https://github.com/rorkai/App-Store-Connect-CLI",
      "desc": "Fast, scriptable CLI for the App Store Connect API. Automate TestFlight, builds, submissions, signing, analytics, screenshots, subscriptions, and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 552,
      "added_stars": 950,
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
      "author": "krillinai",
      "repo": "KrillinAI",
      "avatar": "https://github.com/krillinai.png",
      "repo_link": "https://github.com/krillinai/KrillinAI",
      "desc": "AI video translation & dubbing tool for humans and AI Agents, powered by LLMs. Full pipeline: download, transcribe, translate, TTS dub, reformat, cover generation. 100+ languages, optimized for YouTube, TikTok, Bilibili, Douyin, and more.AI视频翻译配音工具，面向人类与AI Agent，100+语言全链路，CLI分阶段调用，适配抖音、小红书、哔哩哔哩、视频号、TikTok、YouTube",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1086,
      "added_stars": 736,
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
      "forks": 8964,
      "added_stars": 644,
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
      "author": "higress-group",
      "repo": "higress",
      "avatar": "https://github.com/higress-group.png",
      "repo_link": "https://github.com/higress-group/higress",
      "desc": "🤖 AI Gateway | AI Native API Gateway",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1273,
      "added_stars": 289,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 17674,
      "added_stars": 2989,
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
      "author": "weave-os",
      "repo": "router",
      "avatar": "https://github.com/weave-os.png",
      "repo_link": "https://github.com/weave-os/router",
      "desc": "Model router for agentic systems. Routes every prompt to the right model in <50ms. Cut costs 40-70% with just an endpoint change.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 105,
      "added_stars": 2820,
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
      "author": "cloudflare",
      "repo": "cloudflared",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflared",
      "desc": "Cloudflare Tunnel client",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1418,
      "added_stars": 461,
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
      "forks": 1343,
      "added_stars": 10058,
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
      "forks": 258,
      "added_stars": 3067,
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
      "forks": 2708,
      "added_stars": 7659,
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
      "forks": 654,
      "added_stars": 2456,
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
      "forks": 655,
      "added_stars": 6855,
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
      "forks": 148,
      "added_stars": 870,
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
      "author": "google",
      "repo": "skills",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/skills",
      "desc": "Agent Skills for Google products and technologies",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1560,
      "added_stars": 4004,
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
      "author": "huangruiteng",
      "repo": "loopx",
      "avatar": "https://github.com/huangruiteng.png",
      "repo_link": "https://github.com/huangruiteng/loopx",
      "desc": "Long-horizon agent control plane for durable, governed work across Codex, Claude Code, and other harnesses.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 497,
      "added_stars": 4713,
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
      "author": "3b1b",
      "repo": "manim",
      "avatar": "https://github.com/3b1b.png",
      "repo_link": "https://github.com/3b1b/manim",
      "desc": "Animation engine for explanatory math videos",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7642,
      "added_stars": 3988,
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1688,
      "added_stars": 10930,
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
      "author": "megadose",
      "repo": "holehe",
      "avatar": "https://github.com/megadose.png",
      "repo_link": "https://github.com/megadose/holehe",
      "desc": "holehe allows you to check if the mail is used on different sites like twitter, instagram and will retrieve information on sites with the forgotten password function.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1862,
      "added_stars": 2763,
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
      "forks": 52482,
      "added_stars": 21701,
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
      "forks": 9438,
      "added_stars": 3706,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2233,
      "added_stars": 6569,
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
      "author": "donnemartin",
      "repo": "system-design-primer",
      "avatar": "https://github.com/donnemartin.png",
      "repo_link": "https://github.com/donnemartin/system-design-primer",
      "desc": "Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 58219,
      "added_stars": 8374,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Local UI to run and train LLMs and diffusion models. Supports GGUF, MLX, Qwen3.8, DeepSeek-V4, MiniMax-H3, Gemma 4, FLUX and more.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6864,
      "added_stars": 6338,
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
      "author": "virgiliojr94",
      "repo": "book-to-skill",
      "avatar": "https://github.com/virgiliojr94.png",
      "repo_link": "https://github.com/virgiliojr94/book-to-skill",
      "desc": "Turn any technical book PDF into a Claude Code skill — ready to study, reference, and use while you work.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2938,
      "added_stars": 12524,
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
      "author": "jundot",
      "repo": "omlx",
      "avatar": "https://github.com/jundot.png",
      "repo_link": "https://github.com/jundot/omlx",
      "desc": "LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1822,
      "added_stars": 3042,
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
      "forks": 3357,
      "added_stars": 3351,
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
      "forks": 18450,
      "added_stars": 19566,
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
      "author": "blader",
      "repo": "humanizer",
      "avatar": "https://github.com/blader.png",
      "repo_link": "https://github.com/blader/humanizer",
      "desc": "Agent skill that removes signs of AI-generated writing from text",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3569,
      "added_stars": 8553,
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
      "author": "titanwings",
      "repo": "distilly",
      "avatar": "https://github.com/titanwings.png",
      "repo_link": "https://github.com/titanwings/distilly",
      "desc": "Distilly — Distill how they think into reusable Skills for any Agent or Bot. Formerly Colleague Skill（原同事 Skill）.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2130,
      "added_stars": 3741,
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
      "title": "20 Agentic AI Terms Every Developer Should Know (Explained Simply)",
      "description": "Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...",
      "url": "https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii",
      "tags": "ai, agents, mcp, beginners",
      "reactions": 78,
      "comments": 29,
      "reading_time": 11,
      "author": "sylwia-lask"
    },
    {
      "title": "I Built My First AWS Agent Workflow, and the Hardest Part Was Getting It to Stop Assuming Things",
      "description": "TL;DR  I recently finished a project from Udacity's Future AWS Agent Engineer Nanodegree Program,...",
      "url": "https://dev.to/hemapriya_kanagala/i-built-my-first-aws-agent-workflow-and-the-hardest-part-was-getting-it-to-stop-assuming-things-8fg",
      "tags": "discuss, aws, beginners, agents",
      "reactions": 49,
      "comments": 13,
      "reading_time": 17,
      "author": "hemapriya_kanagala"
    },
    {
      "title": "AI-assisted genealogy",
      "description": "My son recently came to me to brag about using AI to find our ancestors. While the results were...",
      "url": "https://dev.to/nfrankel/ai-assisted-genealogy-9cn",
      "tags": "ai, codingassistant, genealogy, claude",
      "reactions": 16,
      "comments": 0,
      "reading_time": 8,
      "author": "nfrankel"
    },
    {
      "title": "Taming Flutter Infinite Scroll (Part 2): Turning ScrollController into a Reactive State Machine with CubitSignalMixin",
      "description": "Discover how to eliminate Flutter StatefulWidget boilerplate and overcome Dart's single-inheritance wall by combining ScrollController with CubitSignalMixin and BlocSignalMixin for a 100% StatelessWidget UI.",
      "url": "https://dev.to/gde/taming-flutter-infinite-scroll-part-2-turning-scrollcontroller-into-a-reactive-state-machine-cgh",
      "tags": "flutter, dart, architecture, statemanagement",
      "reactions": 6,
      "comments": 0,
      "reading_time": 9,
      "author": "randalschwartz"
    },
    {
      "title": "ChromeOS Lookalikes, Two Ways: One With Drivers, One Without",
      "description": "chromeos-boot holds two unrelated scripts under one name: stage seeds a real Crostini container from a private bucket, flex skins a bare-metal Debian desktop to look like one. The split exists because Crostini's guest kernel can't load the NVIDIA driver.",
      "url": "https://dev.to/gde/chromeos-lookalikes-two-ways-one-with-drivers-one-without-83m",
      "tags": "chromeos, linux, debian, gnome",
      "reactions": 7,
      "comments": 0,
      "reading_time": 8,
      "author": "xbill"
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
      "title": "Your First AI Agent: A Beginner's Guide to Building an AI Trend finder with ADK",
      "description": "The world of AI agents is moving at lightning speed. Keeping up with the latest trends, new...",
      "url": "https://dev.to/googleai/your-first-ai-agent-a-beginners-guide-to-building-an-ai-trend-finder-with-adk-5f8k",
      "tags": "agents, ai, googlecloud",
      "reactions": 15,
      "comments": 0,
      "reading_time": 12,
      "author": "shirmeirlador"
    },
    {
      "title": "Join our DEV Weekend Challenge: Generosity Edition! $1,000 in Prizes Across FIVE Winners. Submissions Due September 7 at 6:59 AM UTC.",
      "description": "We're back with another DEV Weekend Challenge, a short bite-sized challenge planned to fit into your...",
      "url": "https://dev.to/devteam/join-our-dev-weekend-challenge-generosity-edition-1000-in-prizes-across-five-winners-20en",
      "tags": "devchallenge, weekendchallenge, hackathon",
      "reactions": 22,
      "comments": 1,
      "reading_time": 4,
      "author": "heyitsjem"
    },
    {
      "title": "Kong AI Gateway 2.0 on Google Cloud: Securing GKE, Cloud Run, and Vertex AI(Agent Platform)",
      "description": "Most teams running on Google Cloud don't pick one compute model and stay there. Some services live...",
      "url": "https://dev.to/gde/kong-ai-gateway-20-on-google-cloud-securing-gke-cloud-run-and-vertex-ai-219o",
      "tags": "ai, googlecloud, kubernetes, security",
      "reactions": 10,
      "comments": 0,
      "reading_time": 4,
      "author": "saurabhmi"
    },
    {
      "title": "Your First Multi-agent system: A Beginner's Guide to Building an AI Trend finder with ADK",
      "description": "Welcome back to our series on building the ultimate AI research assistant for our AI agent podcast!...",
      "url": "https://dev.to/googleai/your-first-multi-agent-system-a-beginners-guide-to-building-an-ai-trend-finder-with-adk-48jp",
      "tags": "ai, agents",
      "reactions": 6,
      "comments": 0,
      "reading_time": 15,
      "author": "shirmeirlador"
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
      "title": "The NX bit is not just about security",
      "url": "https://purplesyringa.moe/blog/guest/the-nx-bit-is-not-just-about-security/",
      "score": 1,
      "comments": 0,
      "tags": [
        "assembly"
      ],
      "id": "eokmrg"
    },
    {
      "title": "Lua-async",
      "url": "https://neovim.io/doc/user/lua-async/",
      "score": 2,
      "comments": 0,
      "tags": [
        "lua",
        "vim"
      ],
      "id": "r58i7h"
    },
    {
      "title": "The asteroid currently hitting frontend web development",
      "url": "https://nolanlawson.com/2026/08/23/the-asteroid-currently-hitting-frontend-web-development/",
      "score": 5,
      "comments": 0,
      "tags": [
        "education",
        "vibecoding"
      ],
      "id": "rntyvm"
    },
    {
      "title": "WebDev intro course: what small changes towards progressive enhancement?",
      "url": "",
      "score": 1,
      "comments": 1,
      "tags": [
        "ask",
        "web"
      ],
      "id": "nr3ucr"
    },
    {
      "title": "So, what happened to my Claude Code series?",
      "url": "https://steveklabnik.com/writing/so-what-happened-to-my-claude-code-series/",
      "score": -4,
      "comments": 1,
      "tags": [
        "vibecoding"
      ],
      "id": "3kugri"
    },
    {
      "title": "Stop Telling People Not To Click Links",
      "url": "https://www.forbes.com/councils/forbestechcouncil/2026/08/26/stop-telling-people-not-to-click-links/",
      "score": 1,
      "comments": 1,
      "tags": [
        "security"
      ],
      "id": "kvfua1"
    },
    {
      "title": "Effective compression using frame-of-reference and delta coding",
      "url": "https://lemire.me/blog/2012/02/08/effective-compression-using-frame-of-reference-and-delta-coding/",
      "score": 2,
      "comments": 0,
      "tags": [
        "performance"
      ],
      "id": "dd6ttc"
    },
    {
      "title": "An image only some users can see",
      "url": "https://d.erenrich.net/apple.avif",
      "score": 4,
      "comments": 2,
      "tags": [
        "browsers",
        "show"
      ],
      "id": "htrg6g"
    },
    {
      "title": "NES dumping over audio",
      "url": "https://mathstodon.xyz/@JordiGH/117209252363385093",
      "score": 8,
      "comments": 0,
      "tags": [
        "games",
        "retrocomputing"
      ],
      "id": "rlswbt"
    },
    {
      "title": "simple is not small",
      "url": "https://jyn.dev/simple-is-not-the-same-as-small/",
      "score": 25,
      "comments": 5,
      "tags": [
        "practices"
      ],
      "id": "entcaa"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "kibae",
      "descendants": 1391,
      "id": 49554643,
      "kids": [
        49555558,
        49556467,
        49557301,
        49556365,
        49557075,
        49556612,
        49557797,
        49559688,
        49554741,
        49555976,
        49556882,
        49559298,
        49555783,
        49557467,
        49555621,
        49555652,
        49555574,
        49556487,
        49555716,
        49556138,
        49556005,
        49556631,
        49556555,
        49554623,
        49556802,
        49557137,
        49556325,
        49554723,
        49558888,
        49560448,
        49557982,
        49556753,
        49559541,
        49555767,
        49555743,
        49558099,
        49555960,
        49556382,
        49556689,
        49556266,
        49558156,
        49560433,
        49558015,
        49557955,
        49555696,
        49555705,
        49556059,
        49556592,
        49555205,
        49556701,
        49560609,
        49555880,
        49556309,
        49556134,
        49558094,
        49560423,
        49560983,
        49557403,
        49555526,
        49556532,
        49555535,
        49555585,
        49556114,
        49559773,
        49554712,
        49555909,
        49555784,
        49559080,
        49558679,
        49556865,
        49556413,
        49557548,
        49556957,
        49556394,
        49560486,
        49555679,
        49556364,
        49556291,
        49559352,
        49554943,
        49556517,
        49557356,
        49555720,
        49555563,
        49558813,
        49558626,
        49557310,
        49555728,
        49556086,
        49556699,
        49560085,
        49556512,
        49556279,
        49557815,
        49557283,
        49557132,
        49556491,
        49560487,
        49558787,
        49560293,
        49558617,
        49557047,
        49558778,
        49555879,
        49556317,
        49556233,
        49554882,
        49555578,
        49556400,
        49556859,
        49557464,
        49555874,
        49556453,
        49559647,
        49560287,
        49554726,
        49560115,
        49556124,
        49559980,
        49555907,
        49556476,
        49556247,
        49560637,
        49556839,
        49557153,
        49556769,
        49557479,
        49556219,
        49558381,
        49556213,
        49556410,
        49555908,
        49556076,
        49556379,
        49554695,
        49556648,
        49558872,
        49556790,
        49558242,
        49556010,
        49555625,
        49558105,
        49558092,
        49559782,
        49557618,
        49556665,
        49556632,
        49556175,
        49555597,
        49554871,
        49554833,
        49554826,
        49554727,
        49554709,
        49557756,
        49558466,
        49560512,
        49555544,
        49557111,
        49556630,
        49555622,
        49556463,
        49558197,
        49556589,
        49554718,
        49556280,
        49557612,
        49556484,
        49561234,
        49554676,
        49559896,
        49561113,
        49556201,
        49560716,
        49558162,
        49559245,
        49556423,
        49554807,
        49555494,
        49559572,
        49557562,
        49556421,
        49559448,
        49556047,
        49558325,
        49555548,
        49554690,
        49555872,
        49557926
      ],
      "score": 1617,
      "text": "System Card: <a href=\"https:&#x2F;&#x2F;deploymentsafety.openai.com&#x2F;gpt-6-astra\" rel=\"nofollow\">https:&#x2F;&#x2F;deploymentsafety.openai.com&#x2F;gpt-6-astra</a><p>Related ongoing threads:<p><i>OpenAI&#x27;s GPT-6 Astra on ARC-AGI-3</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49555691\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49555691</a><p><i>GPT-6 Astra makes major gains in the Artificial Analysis Coding Agent Index</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49556147\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49556147</a>",
      "time": 1788460865,
      "title": "GPT-6 Astra",
      "type": "story",
      "url": "https://openai.com/index/gpt-6-astra/"
    },
    {
      "by": "pavel_lishin",
      "descendants": 414,
      "id": 49550772,
      "kids": [
        49552960,
        49556728,
        49553921,
        49556177,
        49552590,
        49552858,
        49557894,
        49559829,
        49553477,
        49553649,
        49552598,
        49553392,
        49554373,
        49552766,
        49553039,
        49554881,
        49552433,
        49553657,
        49552866,
        49558825,
        49552362,
        49552879,
        49554395,
        49554657,
        49552340,
        49552436,
        49556610,
        49555927,
        49552543,
        49552582,
        49554347,
        49558756,
        49553642,
        49552197,
        49556624,
        49558340,
        49553206,
        49555331,
        49558230,
        49555285,
        49552887,
        49556663,
        49553254,
        49554758,
        49558372,
        49553624,
        49553012,
        49554024,
        49552290,
        49560041,
        49552245,
        49554375,
        49554180,
        49553070,
        49559661,
        49554230,
        49553462,
        49556615,
        49553800,
        49554458,
        49553608,
        49553112,
        49552617,
        49552332,
        49554667,
        49554668,
        49554096,
        49554893,
        49554626,
        49552784,
        49553185,
        49552839
      ],
      "score": 1623,
      "time": 1788447279,
      "title": ".name Termination",
      "type": "story",
      "url": "https://neil.fraser.name/news/2026/09/03/"
    },
    {
      "by": "altertable",
      "descendants": 166,
      "id": 49554520,
      "kids": [
        49555422,
        49555518,
        49554810,
        49561180,
        49555292,
        49555329,
        49555741,
        49554591,
        49554779,
        49555006,
        49555066,
        49554748,
        49561055,
        49557016,
        49561156,
        49555889,
        49556072,
        49554763,
        49557026,
        49554645,
        49556923,
        49555110,
        49555899,
        49555112,
        49560055,
        49554957,
        49554972,
        49558949,
        49555059,
        49555600,
        49555144,
        49554687,
        49554777,
        49559474,
        49554883
      ],
      "score": 515,
      "time": 1788460333,
      "title": "Qwen 3.8 27B available on Cerebras at 1500 tokens/s",
      "type": "story",
      "url": "https://inference-docs.cerebras.ai/models/overview"
    },
    {
      "by": "andsoitis",
      "descendants": 9,
      "id": 49559522,
      "kids": [
        49559999,
        49560300,
        49560457,
        49560440
      ],
      "score": 63,
      "time": 1788486323,
      "title": "Project Xanadu: Even More Hindsight",
      "type": "story",
      "url": "https://gwern.net/xanadu"
    },
    {
      "by": "feb",
      "descendants": 187,
      "id": 49526453,
      "kids": [
        49558152,
        49560087,
        49557031,
        49559679,
        49560713,
        49526454,
        49556352,
        49560248,
        49560110,
        49560482,
        49558864,
        49558899,
        49558198,
        49557812,
        49527300,
        49558254,
        49557427,
        49558880,
        49527772,
        49556746,
        49559316,
        49557617,
        49557266,
        49559066,
        49557276,
        49526730,
        49556462,
        49557899
      ],
      "score": 259,
      "text": "<a href=\"https:&#x2F;&#x2F;www.ycombinator.com&#x2F;library&#x2F;Y6-the-world-s-largest-electric-aircraft-just-flew\">https:&#x2F;&#x2F;www.ycombinator.com&#x2F;library&#x2F;Y6-the-world-s-largest-e...</a>",
      "time": 1788289354,
      "title": "The largest electric aircraft just flew [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=nM86DBOqgPM"
    },
    {
      "by": "theanonymousone",
      "descendants": 14,
      "id": 49507072,
      "kids": [
        49561082,
        49560152,
        49560543,
        49560295,
        49560242,
        49560226,
        49560584,
        49560944,
        49560359
      ],
      "score": 68,
      "time": 1788164769,
      "title": "How an MIT research project became the Julia programming language",
      "type": "story",
      "url": "https://news.mit.edu/2026/how-mit-research-project-became-global-programming-language-0831"
    },
    {
      "by": "speckx",
      "descendants": 65,
      "id": 49552572,
      "kids": [
        49556726,
        49560889,
        49556180,
        49559299,
        49555220,
        49556659,
        49556350,
        49559376,
        49556646,
        49556245,
        49558830
      ],
      "score": 218,
      "time": 1788452493,
      "title": "Artificial beaver dams saw juvenile coho salmon survival rates go from 8% to 60%",
      "type": "story",
      "url": "https://www.discoverwildlife.com/animal-facts/artificial-beaver-dams-california"
    },
    {
      "by": "rabahs",
      "descendants": 72,
      "id": 49550375,
      "kids": [
        49557188,
        49554889,
        49557461,
        49559423,
        49550941,
        49554421,
        49554365,
        49559444,
        49557365,
        49559383,
        49559283,
        49554873,
        49555833,
        49556092,
        49554831,
        49560558,
        49557790,
        49557441,
        49554582,
        49558505,
        49558465,
        49560222,
        49550384,
        49559840,
        49560374,
        49557064,
        49554255,
        49554971
      ],
      "score": 251,
      "text": "These are my notes from porting my Amiga game, which I originally built in Baghdad in 1993 in MC68000 assembly, to Godot, using Claude Fable 5 during last July holiday.  It took an evening! Getting the feel right and shipping it took a few more weekends and evenings.<p>I spent the last few weeks analyzing what Claude did, feeding it my 33 years of memory of how I built the game, my notes and the git repos. It wrote the first draft of the article, and I edited line by line over a week. The screenshots of my 1993 map editor is the first I have run it since then. The one thing I never verified myself is the 108-byte explanation.<p>&quot;Before starting everything, the model assembled the code using vasm on my Mac, and kept going till the binary is byte-identical to the binaries I had in my original game. Even after that, the there was mismatch of about 108 bytes. I originally used AsmOne  which assembles into memory, and the game saved into the disk by saving that memory after running the game. So the original shipped files are a snapshot of the game that had already been running, not clean asm-one output.&quot;<p>Please post any questions. I am also releasing the original game for free.",
      "time": 1788445698,
      "title": "Porting my 1993 Amiga game to Godot, with an LLM reading the 68000 assembly",
      "type": "story",
      "url": "https://babyloniantwins.com/blog/porting-a-1993-amiga-game-to-godot/"
    },
    {
      "by": "Sniffnoy",
      "descendants": 1,
      "id": 49559901,
      "kids": [
        49560820
      ],
      "score": 19,
      "time": 1788489612,
      "title": "From Hookswitch to Grave",
      "type": "story",
      "url": "https://computer.rip/2026-06-14-hookswitch-to-grave.html"
    },
    {
      "by": "karimf",
      "descendants": 93,
      "id": 49551760,
      "kids": [
        49552578,
        49561131,
        49553249,
        49552557,
        49554389,
        49555008,
        49553265,
        49560313,
        49552597,
        49555061,
        49553111,
        49557308,
        49552559,
        49552968,
        49558499,
        49554958,
        49552642,
        49552706,
        49553439,
        49553876,
        49554013,
        49554131
      ],
      "score": 286,
      "time": 1788449803,
      "title": "K2 Horizon: A connected fleet of six open models",
      "type": "story",
      "url": "https://ifm.ai/blog/k2/"
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
      "reactions": 6,
      "comments": 2,
      "reading_time": 4,
      "author": "sanidhya_at_mlh"
    },
    {
      "title": "I built GitCard, a visual portfolio for developers",
      "description": "I’ve been working on a side project called GitCard, and I’m finally at the point where I’d like other...",
      "url": "https://dev.to/ptb4866/i-built-gitcard-a-visual-portfolio-for-developers-2j1g",
      "tags": "showdev, webdev, career, github",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "ptb4866"
    },
    {
      "title": "Backend Engineer Career Path — Beyond the CRUD App (2026)",
      "description": "A CRUD App Is Not a Backend Portfolio   Nearly every self-taught backend developer builds...",
      "url": "https://dev.to/ciphemic_academia_3dad1a0/backend-engineer-career-path-beyond-the-crud-app-2026-oe0",
      "tags": "ai, backend, api, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "ciphemic_academia_3dad1a0"
    },
    {
      "title": "Как я перестал бояться ИИ и научился с ним работать",
      "description": "Три месяца назад я сидел перед экраном и смотрел, как GPT-4 за двадцать секунд написал функцию, над...",
      "url": "https://dev.to/newsfro_af4238fd2bba/kak-ia-pieriestal-boiatsia-ii-i-nauchilsia-s-nim-rabotat-17b8",
      "tags": "ai, career, productivity, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "newsfro_af4238fd2bba"
    },
    {
      "title": "Battle of Attrition",
      "description": "Lessons Learned from an Acquisition  An acquisition lives or dies on the unglamorous organizational...",
      "url": "https://dev.to/skyscrapers_on_sand/battle-of-attrition-1c4e",
      "tags": "leadership, career, management, startup",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "skyscrapers_on_sand"
    },
    {
      "title": "The #1 professional-development spend of 540 engineers isn't a book",
      "description": "I spent a weekend reading all 540 comments from Hacker News' biggest Ask HN on professional...",
      "url": "https://dev.to/justinnnnnnn045/the-1-professional-development-spend-of-540-engineers-isnt-a-book-4kgm",
      "tags": "career, learning, books, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "justinnnnnnn045"
    },
    {
      "title": "How to Start Learning Cybersecurity: A Practical Roadmap for Beginners",
      "description": "If you're starting cybersecurity from scratch, one of the easiest mistakes to make is beginning with...",
      "url": "https://dev.to/cyberopluscom/how-to-start-learning-cybersecurity-a-practical-roadmap-for-beginners-1e8e",
      "tags": "cybersecurity, beginners, career, security",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "cyberoplus"
    },
    {
      "title": "AI Is Taking Our Coding Skills. Maybe That’s Not the Same as Taking Our Value.",
      "description": "I think a lot of engineers are quietly wondering the same thing right now.  “If AI can write the...",
      "url": "https://dev.to/isurogi/ai-is-taking-our-coding-skills-maybe-thats-not-the-same-as-taking-our-value-3cm7",
      "tags": "ai, career, programming, softwaredevelopment",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "isurogi"
    },
    {
      "title": "I got tired of AI resume spam and ghost jobs, so I built an open-source CLI agent for developers",
      "description": "Job hunting in 2026 is mathematically broken.   Recruiters use ATS bots to reject candidates in 6...",
      "url": "https://dev.to/akash_kaintura6527/i-got-tired-of-ai-resume-spam-and-ghost-jobs-so-i-built-an-open-source-cli-agent-for-developers-173p",
      "tags": "opensource, javascript, career, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "akash_kaintura6527"
    },
    {
      "title": "I Can Tell If Code Is Bad Without Reading It. Here's My Trick.",
      "description": "People usually guess wrong when I tell them this.  Most people think I check the tests first, since...",
      "url": "https://dev.to/sneh_desai/i-can-tell-if-code-is-bad-without-reading-it-heres-my-trick-32f5",
      "tags": "programming, webdev, discuss, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "sneh_desai"
    }
  ]
}
```

