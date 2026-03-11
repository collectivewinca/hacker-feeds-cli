# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-03-11 07:11:48 UTC

Runtime note: executed with NODE_OPTIONS=--require /tmp/hf-polyfill.js

## 1. Services to Pitch This Week

**Query:** What services can I pitch this week?

**Command:**
```bash
echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set' ; node bin/main.js --json reddit -t smallbusiness -s top ; node bin/main.js --json github -s weekly -l javascript
```

**Output:**
```text
[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "github",
  "since": "weekly",
  "language": "javascript",
  "items": [
    {
      "author": "apify",
      "repo": "agent-skills",
      "avatar": "https://github.com/apify.png",
      "repo_link": "https://github.com/apify/agent-skills",
      "desc": "Collection of Apify Agent Skills",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 163,
      "added_stars": 809,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "vystrcild",
          "href": "https://github.com/vystrcild",
          "avatar": "https://avatars.githubusercontent.com/u/25441338"
        },
        {
          "username": "patrikbraborec",
          "href": "https://github.com/patrikbraborec",
          "avatar": "https://avatars.githubusercontent.com/u/18550315"
        },
        {
          "username": "B4nan",
          "href": "https://github.com/B4nan",
          "avatar": "https://avatars.githubusercontent.com/u/615580"
        },
        {
          "username": "lukas-bekr",
          "href": "https://github.com/lukas-bekr",
          "avatar": "https://avatars.githubusercontent.com/u/224167845"
        }
      ]
    },
    {
      "author": "jgraph",
      "repo": "drawio",
      "avatar": "https://github.com/jgraph.png",
      "repo_link": "https://github.com/jgraph/drawio",
      "desc": "draw.io is a JavaScript, client-side editor for general diagramming.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 704,
      "added_stars": 159,
      "builtBy": [
        {
          "username": "davidjgraph",
          "href": "https://github.com/davidjgraph",
          "avatar": "https://avatars.githubusercontent.com/u/1761087"
        },
        {
          "username": "alderg",
          "href": "https://github.com/alderg",
          "avatar": "https://avatars.githubusercontent.com/u/921200"
        },
        {
          "username": "mediaslav",
          "href": "https://github.com/mediaslav",
          "avatar": "https://avatars.githubusercontent.com/u/472418"
        },
        {
          "username": "m-mohamedin",
          "href": "https://github.com/m-mohamedin",
          "avatar": "https://avatars.githubusercontent.com/u/24944765"
        },
        {
          "username": "MJomaa",
          "href": "https://github.com/MJomaa",
          "avatar": "https://avatars.githubusercontent.com/u/9029497"
        }
      ]
    },
    {
      "author": "harvard-edge",
      "repo": "cs249r_book",
      "avatar": "https://github.com/harvard-edge.png",
      "repo_link": "https://github.com/harvard-edge/cs249r_book",
      "desc": "Machine Learning Systems",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2676,
      "added_stars": 1253,
      "builtBy": [
        {
          "username": "profvjreddi",
          "href": "https://github.com/profvjreddi",
          "avatar": "https://avatars.githubusercontent.com/u/6807956"
        },
        {
          "username": "hzeljko",
          "href": "https://github.com/hzeljko",
          "avatar": "https://avatars.githubusercontent.com/u/36451783"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Mjrovai",
          "href": "https://github.com/Mjrovai",
          "avatar": "https://avatars.githubusercontent.com/u/17109416"
        }
      ]
    },
    {
      "author": "aandrew-me",
      "repo": "ytDownloader",
      "avatar": "https://github.com/aandrew-me.png",
      "repo_link": "https://github.com/aandrew-me/ytDownloader",
      "desc": "Desktop App for downloading Videos and Audios from hundreds of sites",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 752,
      "added_stars": 450,
      "builtBy": [
        {
          "username": "aandrew-me",
          "href": "https://github.com/aandrew-me",
          "avatar": "https://avatars.githubusercontent.com/u/66430340"
        },
        {
          "username": "albanobattistella",
          "href": "https://github.com/albanobattistella",
          "avatar": "https://avatars.githubusercontent.com/u/34811668"
        },
        {
          "username": "Muxutruk2",
          "href": "https://github.com/Muxutruk2",
          "avatar": "https://avatars.githubusercontent.com/u/156070698"
        },
        {
          "username": "soredake",
          "href": "https://github.com/soredake",
          "avatar": "https://avatars.githubusercontent.com/u/5204968"
        },
        {
          "username": "candrapersada",
          "href": "https://github.com/candrapersada",
          "avatar": "https://avatars.githubusercontent.com/u/36833664"
        }
      ]
    },
    {
      "author": "songquanpeng",
      "repo": "one-api",
      "avatar": "https://github.com/songquanpeng.png",
      "repo_link": "https://github.com/songquanpeng/one-api",
      "desc": "LLM API 管理 & 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。LLM API management & key redistribution system, unifying multiple providers under a single API. Single binary, Docker-ready, with an English UI.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5792,
      "added_stars": 329,
      "builtBy": [
        {
          "username": "songquanpeng",
          "href": "https://github.com/songquanpeng",
          "avatar": "https://avatars.githubusercontent.com/u/39998050"
        },
        {
          "username": "mrhaoji",
          "href": "https://github.com/mrhaoji",
          "avatar": "https://avatars.githubusercontent.com/u/483419"
        },
        {
          "username": "Laisky",
          "href": "https://github.com/Laisky",
          "avatar": "https://avatars.githubusercontent.com/u/4532436"
        },
        {
          "username": "igophper",
          "href": "https://github.com/igophper",
          "avatar": "https://avatars.githubusercontent.com/u/34326532"
        },
        {
          "username": "quzard",
          "href": "https://github.com/quzard",
          "avatar": "https://avatars.githubusercontent.com/u/30899719"
        }
      ]
    },
    {
      "author": "datawhalechina",
      "repo": "easy-vibe",
      "avatar": "https://github.com/datawhalechina.png",
      "repo_link": "https://github.com/datawhalechina/easy-vibe",
      "desc": "easy vibe 👋 一起 vibe ! Learn Vibe Coding From 0 to 1 ｜ Vibe Coding 零基础教程 ｜ 产品原型、AI 能力集成、前后端开发、多平台应用开发教程 ｜ Tutorial on Product Prototype, AI Capability Integration, Frontend and Backend Development, and Multi-platform Application Development",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 320,
      "added_stars": 378,
      "builtBy": [
        {
          "username": "sanbuphy",
          "href": "https://github.com/sanbuphy",
          "avatar": "https://avatars.githubusercontent.com/u/96160062"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "GeoDaoyu",
          "href": "https://github.com/GeoDaoyu",
          "avatar": "https://avatars.githubusercontent.com/u/34641603"
        },
        {
          "username": "1985312383",
          "href": "https://github.com/1985312383",
          "avatar": "https://avatars.githubusercontent.com/u/56398475"
        },
        {
          "username": "luahan77m",
          "href": "https://github.com/luahan77m",
          "avatar": "https://avatars.githubusercontent.com/u/107054996"
        }
      ]
    },
    {
      "author": "is-a-dev",
      "repo": "register",
      "avatar": "https://github.com/is-a-dev.png",
      "repo_link": "https://github.com/is-a-dev/register",
      "desc": "Grab your own sweet-looking '.is-a.dev' subdomain.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 18933,
      "added_stars": 309,
      "builtBy": [
        {
          "username": "wdhdev",
          "href": "https://github.com/wdhdev",
          "avatar": "https://avatars.githubusercontent.com/u/87287585"
        },
        {
          "username": "DEV-DIBSTER",
          "href": "https://github.com/DEV-DIBSTER",
          "avatar": "https://avatars.githubusercontent.com/u/76603072"
        },
        {
          "username": "iostpa",
          "href": "https://github.com/iostpa",
          "avatar": "https://avatars.githubusercontent.com/u/69630113"
        },
        {
          "username": "STICKnoLOGIC",
          "href": "https://github.com/STICKnoLOGIC",
          "avatar": "https://avatars.githubusercontent.com/u/65322242"
        },
        {
          "username": "orangci",
          "href": "https://github.com/orangci",
          "avatar": "https://avatars.githubusercontent.com/u/90866414"
        }
      ]
    },
    {
      "author": "FreeTubeApp",
      "repo": "FreeTube",
      "avatar": "https://github.com/FreeTubeApp.png",
      "repo_link": "https://github.com/FreeTubeApp/FreeTube",
      "desc": "An Open Source YouTube app for privacy",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1340,
      "added_stars": 88,
      "builtBy": [
        {
          "username": "absidue",
          "href": "https://github.com/absidue",
          "avatar": "https://avatars.githubusercontent.com/u/48293849"
        },
        {
          "username": "PrestonN",
          "href": "https://github.com/PrestonN",
          "avatar": "https://avatars.githubusercontent.com/u/9736046"
        },
        {
          "username": "efb4f5ff-1298-471a-8973-3d47447115dc",
          "href": "https://github.com/efb4f5ff-1298-471a-8973-3d47447115dc",
          "avatar": "https://avatars.githubusercontent.com/u/73130443"
        },
        {
          "username": "PikachuEXE",
          "href": "https://github.com/PikachuEXE",
          "avatar": "https://avatars.githubusercontent.com/u/1018543"
        }
      ]
    },
    {
      "author": "jarrodwatts",
      "repo": "claude-hud",
      "avatar": "https://github.com/jarrodwatts.png",
      "repo_link": "https://github.com/jarrodwatts/claude-hud",
      "desc": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 205,
      "added_stars": 358,
      "builtBy": [
        {
          "username": "jarrodwatts",
          "href": "https://github.com/jarrodwatts",
          "avatar": "https://avatars.githubusercontent.com/u/35651410"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "melon-hub",
          "href": "https://github.com/melon-hub",
          "avatar": "https://avatars.githubusercontent.com/u/53302110"
        }
      ]
    },
    {
      "author": "usebruno",
      "repo": "bruno",
      "avatar": "https://github.com/usebruno.png",
      "repo_link": "https://github.com/usebruno/bruno",
      "desc": "Opensource IDE For Exploring and Testing API's (lightweight alternative to Postman/Insomnia)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2182,
      "added_stars": 334,
      "builtBy": [
        {
          "username": "helloanoop",
          "href": "https://github.com/helloanoop",
          "avatar": "https://avatars.githubusercontent.com/u/9350733"
        },
        {
          "username": "lohxt1",
          "href": "https://github.com/lohxt1",
          "avatar": "https://avatars.githubusercontent.com/u/25679466"
        },
        {
          "username": "lohit-bruno",
          "href": "https://github.com/lohit-bruno",
          "avatar": "https://avatars.githubusercontent.com/u/159901171"
        },
        {
          "username": "pooja-bruno",
          "href": "https://github.com/pooja-bruno",
          "avatar": "https://avatars.githubusercontent.com/u/191850912"
        },
        {
          "username": "naman-bruno",
          "href": "https://github.com/naman-bruno",
          "avatar": "https://avatars.githubusercontent.com/u/194787292"
        }
      ]
    },
    {
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 144,
      "added_stars": 3241,
      "builtBy": [
        {
          "username": "pbakaus",
          "href": "https://github.com/pbakaus",
          "avatar": "https://avatars.githubusercontent.com/u/43004"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "nodejs",
      "repo": "node",
      "avatar": "https://github.com/nodejs.png",
      "repo_link": "https://github.com/nodejs/node",
      "desc": "Node.js JavaScript runtime ✨🐢🚀✨",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 34986,
      "added_stars": 262,
      "builtBy": [
        {
          "username": "Trott",
          "href": "https://github.com/Trott",
          "avatar": "https://avatars.githubusercontent.com/u/718899"
        },
        {
          "username": "ry",
          "href": "https://github.com/ry",
          "avatar": "https://avatars.githubusercontent.com/u/80"
        },
        {
          "username": "bnoordhuis",
          "href": "https://github.com/bnoordhuis",
          "avatar": "https://avatars.githubusercontent.com/u/275871"
        },
        {
          "username": "addaleax",
          "href": "https://github.com/addaleax",
          "avatar": "https://avatars.githubusercontent.com/u/899444"
        },
        {
          "username": "isaacs",
          "href": "https://github.com/isaacs",
          "avatar": "https://avatars.githubusercontent.com/u/9287"
        }
      ]
    },
    {
      "author": "maboloshi",
      "repo": "github-chinese",
      "avatar": "https://github.com/maboloshi.png",
      "repo_link": "https://github.com/maboloshi/github-chinese",
      "desc": "GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1181,
      "added_stars": 303,
      "builtBy": [
        {
          "username": "maboloshi",
          "href": "https://github.com/maboloshi",
          "avatar": "https://avatars.githubusercontent.com/u/7850715"
        },
        {
          "username": "52cik",
          "href": "https://github.com/52cik",
          "avatar": "https://avatars.githubusercontent.com/u/5033310"
        },
        {
          "username": "TC999",
          "href": "https://github.com/TC999",
          "avatar": "https://avatars.githubusercontent.com/u/88823709"
        }
      ]
    },
    {
      "author": "wangrongding",
      "repo": "wechat-bot",
      "avatar": "https://github.com/wangrongding.png",
      "repo_link": "https://github.com/wangrongding/wechat-bot",
      "desc": "🤖一个基于 WeChaty 结合 ChatGPT / Claude / Kimi / DeepSeek / Ollama等Ai服务实现的微信机器人 ，可以用来帮助你自动回复微信消息，或者社群分析/好友管理，检测僵尸粉等...",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1169,
      "added_stars": 76,
      "builtBy": [
        {
          "username": "wangrongding",
          "href": "https://github.com/wangrongding",
          "avatar": "https://avatars.githubusercontent.com/u/42437658"
        },
        {
          "username": "lengsukq",
          "href": "https://github.com/lengsukq",
          "avatar": "https://avatars.githubusercontent.com/u/105091166"
        },
        {
          "username": "Benature",
          "href": "https://github.com/Benature",
          "avatar": "https://avatars.githubusercontent.com/u/35028647"
        },
        {
          "username": "moyueheng",
          "href": "https://github.com/moyueheng",
          "avatar": "https://avatars.githubusercontent.com/u/54298540"
        },
        {
          "username": "MarchLiu",
          "href": "https://github.com/MarchLiu",
          "avatar": "https://avatars.githubusercontent.com/u/711987"
        }
      ]
    }
  ]
}
```

## 2. Founder Pain Points

**Query:** What pain points are founders talking about?

**Command:**
```bash
node bin/main.js --json reddit -t startups -s hot ; node bin/main.js --json news -t 10 ; node bin/main.js --json lobsters -s hottest -c 8
```

**Output:**
```text
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "ppew",
      "descendants": 29,
      "id": 47332074,
      "kids": [
        47332500,
        47332347,
        47332474,
        47332335,
        47332437,
        47332298,
        47332376,
        47332420,
        47332329,
        47332373,
        47332448,
        47332337,
        47332358,
        47332425
      ],
      "score": 105,
      "time": 1773207949,
      "title": "Create value for others and don’t worry about the returns",
      "type": "story",
      "url": "https://geohot.github.io//blog/jekyll/update/2026/03/11/running-69-agents.html"
    },
    {
      "by": "Retro_Dev",
      "descendants": 49,
      "id": 47330836,
      "kids": [
        47331198,
        47332267,
        47332248,
        47331389
      ],
      "score": 150,
      "time": 1773192287,
      "title": "Zig – Type Resolution Redesign and Language Changes",
      "type": "story",
      "url": "https://ziglang.org/devlog/2026/#2026-03-10"
    },
    {
      "by": "cokernel_hacker",
      "descendants": 24,
      "id": 47329605,
      "kids": [
        47331703,
        47329832,
        47329690,
        47330267,
        47330931,
        47330508,
        47329817,
        47330420,
        47329831,
        47331167,
        47330188,
        47331719
      ],
      "score": 253,
      "time": 1773182025,
      "title": "U+237C ⍼ Is Azimuth",
      "type": "story",
      "url": "https://ionathan.ch/2026/02/16/angzarr.html"
    },
    {
      "by": "TheWiggles",
      "descendants": 6,
      "id": 47295855,
      "kids": [
        47331929
      ],
      "score": 47,
      "time": 1772962054,
      "title": "Julia Snail – An Emacs Development Environment for Julia Like Clojure's Cider",
      "type": "story",
      "url": "https://github.com/gcv/julia-snail"
    },
    {
      "by": "jeffpalmer",
      "descendants": 98,
      "id": 47329557,
      "kids": [
        47329920,
        47330134,
        47330934,
        47330324,
        47330412,
        47330470,
        47330197,
        47330297,
        47330372,
        47330711,
        47330658,
        47331046,
        47329882,
        47330436,
        47330733,
        47331668,
        47330893,
        47331188,
        47330347,
        47330839,
        47330310,
        47329969,
        47330415,
        47331545,
        47330366,
        47330972,
        47330012,
        47330303,
        47330118,
        47330719,
        47332006,
        47331010
      ],
      "score": 238,
      "time": 1773181635,
      "title": "Cloudflare crawl endpoint",
      "type": "story",
      "url": "https://developers.cloudflare.com/changelog/post/2026-03-10-br-crawl-endpoint/"
    },
    {
      "by": "speckx",
      "descendants": 216,
      "id": 47324054,
      "kids": [
        47325225,
        47325228,
        47324442,
        47324567,
        47320767,
        47329093,
        47324427,
        47325844,
        47330576,
        47324502,
        47317333,
        47324179,
        47325200,
        47326141,
        47317281,
        47326246,
        47317445,
        47317547,
        47324523,
        47324939,
        47325281,
        47325033,
        47317623,
        47320299,
        47326703,
        47330734,
        47325711,
        47326917,
        47326400,
        47329728,
        47317057,
        47330119,
        47317610,
        47325807,
        47324456,
        47324455,
        47317257,
        47332170,
        47326539,
        47317141,
        47325007,
        47327757,
        47325172,
        47329868,
        47327805,
        47324209,
        47329562,
        47325532,
        47328186,
        47330914,
        47330049,
        47317241,
        47317394,
        47324893,
        47329172,
        47325063,
        47326601,
        47325722,
        47326444,
        47325345,
        47324416,
        47328740,
        47317633,
        47324301,
        47328722,
        47325967,
        47326742,
        47326746,
        47324574,
        47324572,
        47327348,
        47332022
      ],
      "score": 1693,
      "time": 1773154216,
      "title": "Tony Hoare has died",
      "type": "story",
      "url": "https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html"
    },
    {
      "by": "aray07",
      "descendants": 288,
      "id": 47327559,
      "kids": [
        47331205,
        47327956,
        47328901,
        47327999,
        47330070,
        47327789,
        47331027,
        47328132,
        47331298,
        47332112,
        47328984,
        47332471,
        47328885,
        47331400,
        47327990,
        47327957,
        47329527,
        47330820,
        47330937,
        47331490,
        47331844,
        47330722,
        47328207,
        47330775,
        47328119,
        47329486,
        47327825,
        47330263,
        47331020,
        47327907,
        47331902,
        47328951,
        47328704,
        47327993,
        47330525,
        47331536,
        47331129,
        47327982,
        47329503,
        47327862,
        47331388,
        47327733,
        47328306,
        47328727,
        47331999,
        47331538,
        47331395,
        47331891,
        47331304,
        47331677,
        47331921,
        47330061,
        47327921,
        47327953,
        47329440,
        47328538,
        47327938,
        47329658,
        47330955,
        47327878,
        47330036,
        47328203,
        47329082,
        47330336
      ],
      "score": 298,
      "time": 1773169786,
      "title": "Agents that run while I sleep",
      "type": "story",
      "url": "https://www.claudecodecamp.com/p/i-m-building-agents-that-run-while-i-sleep"
    },
    {
      "by": "helloplanets",
      "descendants": 358,
      "id": 47320600,
      "kids": [
        47321621,
        47328626,
        47321908,
        47322892,
        47324101,
        47330502,
        47321720,
        47321807,
        47329470,
        47322982,
        47331320,
        47331670,
        47331094,
        47321995,
        47331886,
        47323522,
        47331894,
        47326811,
        47321679,
        47321293,
        47323877,
        47330635,
        47322724,
        47321909,
        47325635,
        47324093,
        47320861,
        47328047,
        47330294,
        47321946,
        47324183,
        47324048,
        47327527,
        47320658,
        47321680,
        47327898,
        47330382,
        47321222,
        47328600,
        47322586,
        47322374,
        47324061,
        47327537,
        47328013,
        47327779,
        47327372,
        47324160,
        47325515,
        47320675,
        47330271,
        47322121,
        47330322,
        47320856,
        47330330,
        47327959,
        47330473,
        47321654,
        47322992,
        47321580,
        47327774,
        47321643,
        47321708
      ],
      "score": 426,
      "text": "<a href=\"https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260310153721&#x2F;https:&#x2F;&#x2F;www.wired.com&#x2F;story&#x2F;yann-lecun-raises-dollar1-billion-to-build-ai-that-understands-the-physical-world&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260310153721&#x2F;https:&#x2F;&#x2F;www.wired...</a><p><a href=\"https:&#x2F;&#x2F;www.ft.com&#x2F;content&#x2F;e5245ec3-1a58-4eff-ab58-480b6259aaf1\" rel=\"nofollow\">https:&#x2F;&#x2F;www.ft.com&#x2F;content&#x2F;e5245ec3-1a58-4eff-ab58-480b6259a...</a> (<a href=\"https:&#x2F;&#x2F;archive.md&#x2F;5eZWq\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.md&#x2F;5eZWq</a>)",
      "time": 1773132413,
      "title": "Yann LeCun raises $1B to build AI that understands the physical world",
      "type": "story",
      "url": "https://www.wired.com/story/yann-lecun-raises-dollar1-billion-to-build-ai-that-understands-the-physical-world/"
    },
    {
      "by": "todsacerdoti",
      "descendants": 199,
      "id": 47328214,
      "kids": [
        47328343,
        47330531,
        47328658,
        47330828,
        47328514,
        47330701,
        47328449,
        47330741,
        47332364,
        47330736,
        47330533,
        47329327,
        47328587,
        47329377,
        47329113,
        47328810,
        47328644,
        47328632,
        47328542,
        47328696,
        47329092
      ],
      "score": 209,
      "time": 1773173514,
      "title": "RISC-V Is Sloooow",
      "type": "story",
      "url": "https://marcin.juszkiewicz.com.pl/2026/03/10/risc-v-is-sloooow/"
    },
    {
      "by": "todsacerdoti",
      "descendants": 15,
      "id": 47331034,
      "kids": [
        47332139,
        47331705,
        47331916,
        47331526,
        47331869,
        47331922,
        47332234,
        47331852,
        47331669,
        47331418
      ],
      "score": 74,
      "time": 1773194662,
      "title": "Writing my own text editor, and daily-driving it",
      "type": "story",
      "url": "https://blog.jsbarretto.com/post/text-editor"
    }
  ]
}
- Fetching feeds...
{
  "source": "lobsters",
  "sort": "hottest",
  "tag": null,
  "items": [
    {
      "title": "Tony Hoare (1934-2026)",
      "url": "https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html",
      "score": 128,
      "comments": 5,
      "tags": [
        "person"
      ],
      "id": "lyktdk"
    },
    {
      "title": "AI should help us produce better code",
      "url": "https://simonwillison.net/guides/agentic-engineering-patterns/better-code/",
      "score": 17,
      "comments": 16,
      "tags": [
        "vibecoding"
      ],
      "id": "tiktds"
    },
    {
      "title": "RISC-V is sloooow",
      "url": "https://marcin.juszkiewicz.com.pl/2026/03/10/risc-v-is-sloooow/",
      "score": 35,
      "comments": 15,
      "tags": [
        "linux"
      ],
      "id": "ta3jjk"
    },
    {
      "title": "Amazon holds engineering meeting about GenAI based outages",
      "url": "https://arstechnica.com/ai/2026/03/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes/",
      "score": 52,
      "comments": 22,
      "tags": [
        "vibecoding"
      ],
      "id": "t5dvs5"
    },
    {
      "title": "LLM Neuroanatomy: How I Topped the AI Leaderboard Without Changing a Single Weight",
      "url": "https://dnhkng.github.io/posts/rys/",
      "score": 32,
      "comments": 9,
      "tags": [
        "ai"
      ],
      "id": "zzjjyo"
    },
    {
      "title": "Too Much Color",
      "url": "https://www.keithcirkel.co.uk/too-much-color/",
      "score": 63,
      "comments": 23,
      "tags": [
        "graphics",
        "web"
      ],
      "id": "cpqm9i"
    },
    {
      "title": "EVi, a hard-fork of Vim",
      "url": "https://codeberg.org/NerdNextDoor/evi",
      "score": 64,
      "comments": 43,
      "tags": [
        "vim"
      ],
      "id": "izprt4"
    },
    {
      "title": "Redox OS has adopted a Certificate of Origin policy and a strict no-LLM policy",
      "url": "https://gitlab.redox-os.org/redox-os/redox/-/blob/master/CONTRIBUTING.md",
      "score": 49,
      "comments": 14,
      "tags": [
        "vibecoding"
      ],
      "id": "vkxmwj"
    }
  ]
}
```

## 3. Growing Tech Niches

**Query:** What tech niches are growing where clients may pay?

**Command:**
```bash
node bin/main.js --json github -s monthly -l python ; node bin/main.js --json github -s monthly -l typescript ; node bin/main.js --json devto -s top -c 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "github",
  "since": "monthly",
  "language": "python",
  "items": [
    {
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skills and subagents, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3439,
      "added_stars": 8378,
      "builtBy": [
        {
          "username": "MagicCube",
          "href": "https://github.com/MagicCube",
          "avatar": "https://avatars.githubusercontent.com/u/1003147"
        },
        {
          "username": "WillemJiang",
          "href": "https://github.com/WillemJiang",
          "avatar": "https://avatars.githubusercontent.com/u/219644"
        },
        {
          "username": "hetaoBackend",
          "href": "https://github.com/hetaoBackend",
          "avatar": "https://avatars.githubusercontent.com/u/45447813"
        },
        {
          "username": "henry-byted",
          "href": "https://github.com/henry-byted",
          "avatar": "https://avatars.githubusercontent.com/u/209858577"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 395,
      "added_stars": 5583,
      "builtBy": [
        {
          "username": "Jeffallan",
          "href": "https://github.com/Jeffallan",
          "avatar": "https://avatars.githubusercontent.com/u/23423962"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "liyin2015",
          "href": "https://github.com/liyin2015",
          "avatar": "https://avatars.githubusercontent.com/u/14322677"
        },
        {
          "username": "salmanmkc",
          "href": "https://github.com/salmanmkc",
          "avatar": "https://avatars.githubusercontent.com/u/32169182"
        },
        {
          "username": "thomassamoul",
          "href": "https://github.com/thomassamoul",
          "avatar": "https://avatars.githubusercontent.com/u/50757446"
        }
      ]
    },
    {
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 523,
      "added_stars": 7533,
      "builtBy": [
        {
          "username": "burtenshaw",
          "href": "https://github.com/burtenshaw",
          "avatar": "https://avatars.githubusercontent.com/u/19620375"
        },
        {
          "username": "evalstate",
          "href": "https://github.com/evalstate",
          "avatar": "https://avatars.githubusercontent.com/u/1936278"
        },
        {
          "username": "hanouticelina",
          "href": "https://github.com/hanouticelina",
          "avatar": "https://avatars.githubusercontent.com/u/36770234"
        },
        {
          "username": "abidlabs",
          "href": "https://github.com/abidlabs",
          "avatar": "https://avatars.githubusercontent.com/u/1778297"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 1162,
      "added_stars": 6169,
      "builtBy": [
        {
          "username": "p-e-w",
          "href": "https://github.com/p-e-w",
          "avatar": "https://avatars.githubusercontent.com/u/2702526"
        },
        {
          "username": "spikymoth",
          "href": "https://github.com/spikymoth",
          "avatar": "https://avatars.githubusercontent.com/u/133602907"
        },
        {
          "username": "anrp",
          "href": "https://github.com/anrp",
          "avatar": "https://avatars.githubusercontent.com/u/1325515"
        },
        {
          "username": "red40maxxer",
          "href": "https://github.com/red40maxxer",
          "avatar": "https://avatars.githubusercontent.com/u/113548315"
        },
        {
          "username": "kldzj",
          "href": "https://github.com/kldzj",
          "avatar": "https://avatars.githubusercontent.com/u/7687617"
        }
      ]
    },
    {
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "OpenSandbox is a general-purpose sandbox platform for AI applications, offering multi-language SDKs, unified sandbox APIs, and Docker/Kubernetes runtimes for scenarios like Coding Agents, GUI Agents, Agent Evaluation, AI Code Execution, and RL Training.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 546,
      "added_stars": 6316,
      "builtBy": [
        {
          "username": "Pangjiping",
          "href": "https://github.com/Pangjiping",
          "avatar": "https://avatars.githubusercontent.com/u/62273713"
        },
        {
          "username": "ninan-nn",
          "href": "https://github.com/ninan-nn",
          "avatar": "https://avatars.githubusercontent.com/u/249928781"
        },
        {
          "username": "hittyt",
          "href": "https://github.com/hittyt",
          "avatar": "https://avatars.githubusercontent.com/u/1870207"
        },
        {
          "username": "Spground",
          "href": "https://github.com/Spground",
          "avatar": "https://avatars.githubusercontent.com/u/10492823"
        },
        {
          "username": "jwx0925",
          "href": "https://github.com/jwx0925",
          "avatar": "https://avatars.githubusercontent.com/u/1539927"
        }
      ]
    },
    {
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 429,
      "added_stars": 4462,
      "builtBy": [
        {
          "username": "qin-ctx",
          "href": "https://github.com/qin-ctx",
          "avatar": "https://avatars.githubusercontent.com/u/234610432"
        },
        {
          "username": "zhoujh01",
          "href": "https://github.com/zhoujh01",
          "avatar": "https://avatars.githubusercontent.com/u/242402223"
        },
        {
          "username": "MaojiaSheng",
          "href": "https://github.com/MaojiaSheng",
          "avatar": "https://avatars.githubusercontent.com/u/211460083"
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
        }
      ]
    },
    {
      "author": "databricks-solutions",
      "repo": "ai-dev-kit",
      "avatar": "https://github.com/databricks-solutions.png",
      "repo_link": "https://github.com/databricks-solutions/ai-dev-kit",
      "desc": "Databricks Toolkit for Coding Agents provided by Field Engineering",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 163,
      "added_stars": 632,
      "builtBy": [
        {
          "username": "calreynolds",
          "href": "https://github.com/calreynolds",
          "avatar": "https://avatars.githubusercontent.com/u/49540501"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "dustinvannoy-db",
          "href": "https://github.com/dustinvannoy-db",
          "avatar": "https://avatars.githubusercontent.com/u/126025751"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "malcolndandaro",
          "href": "https://github.com/malcolndandaro",
          "avatar": "https://avatars.githubusercontent.com/u/40570280"
        }
      ]
    },
    {
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "+180 production-ready skills & plugins for Claude Code, OpenAI Codex, and OpenClaw — engineering, marketing, product, compliance, C-level advisory, and more. Install via /plugin marketplace.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 453,
      "added_stars": 2176,
      "builtBy": [
        {
          "username": "alirezarezvani",
          "href": "https://github.com/alirezarezvani",
          "avatar": "https://avatars.githubusercontent.com/u/5697919"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "olgasafonova",
          "href": "https://github.com/olgasafonova",
          "avatar": "https://avatars.githubusercontent.com/u/23409189"
        },
        {
          "username": "fernandezbaptiste",
          "href": "https://github.com/fernandezbaptiste",
          "avatar": "https://avatars.githubusercontent.com/u/83458751"
        },
        {
          "username": "ikala-shawn",
          "href": "https://github.com/ikala-shawn",
          "avatar": "https://avatars.githubusercontent.com/u/111341595"
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
      "forks": 832,
      "added_stars": 2304,
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
          "username": "JustinGuese",
          "href": "https://github.com/JustinGuese",
          "avatar": "https://avatars.githubusercontent.com/u/9588843"
        },
        {
          "username": "kashif",
          "href": "https://github.com/kashif",
          "avatar": "https://avatars.githubusercontent.com/u/8100"
        }
      ]
    },
    {
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 586,
      "added_stars": 2760,
      "builtBy": [
        {
          "username": "teng-lin",
          "href": "https://github.com/teng-lin",
          "avatar": "https://avatars.githubusercontent.com/u/737447"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "welshofer",
          "href": "https://github.com/welshofer",
          "avatar": "https://avatars.githubusercontent.com/u/33588582"
        },
        {
          "username": "Bortlesboat",
          "href": "https://github.com/Bortlesboat",
          "avatar": "https://avatars.githubusercontent.com/u/169967362"
        }
      ]
    },
    {
      "author": "Shubhamsaboo",
      "repo": "awesome-llm-apps",
      "avatar": "https://github.com/Shubhamsaboo.png",
      "repo_link": "https://github.com/Shubhamsaboo/awesome-llm-apps",
      "desc": "Collection of awesome LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and opensource models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 14757,
      "added_stars": 8227,
      "builtBy": [
        {
          "username": "Shubhamsaboo",
          "href": "https://github.com/Shubhamsaboo",
          "avatar": "https://avatars.githubusercontent.com/u/31396011"
        },
        {
          "username": "Madhuvod",
          "href": "https://github.com/Madhuvod",
          "avatar": "https://avatars.githubusercontent.com/u/124294538"
        },
        {
          "username": "onestardao",
          "href": "https://github.com/onestardao",
          "avatar": "https://avatars.githubusercontent.com/u/212544643"
        },
        {
          "username": "libw0430",
          "href": "https://github.com/libw0430",
          "avatar": "https://avatars.githubusercontent.com/u/102198332"
        },
        {
          "username": "awesomekoder",
          "href": "https://github.com/awesomekoder",
          "avatar": "https://avatars.githubusercontent.com/u/258367783"
        }
      ]
    },
    {
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1493,
      "added_stars": 4825,
      "builtBy": [
        {
          "username": "Soulter",
          "href": "https://github.com/Soulter",
          "avatar": "https://avatars.githubusercontent.com/u/37870767"
        },
        {
          "username": "Raven95676",
          "href": "https://github.com/Raven95676",
          "avatar": "https://avatars.githubusercontent.com/u/176760093"
        },
        {
          "username": "RC-CHN",
          "href": "https://github.com/RC-CHN",
          "avatar": "https://avatars.githubusercontent.com/u/67079377"
        },
        {
          "username": "anka-afk",
          "href": "https://github.com/anka-afk",
          "avatar": "https://avatars.githubusercontent.com/u/110004162"
        },
        {
          "username": "zouyonghe",
          "href": "https://github.com/zouyonghe",
          "avatar": "https://avatars.githubusercontent.com/u/62183434"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "claude-code-security-review",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-security-review",
      "desc": "An AI-powered security review GitHub Action using Claude to analyze code changes for security vulnerabilities.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 303,
      "added_stars": 730,
      "builtBy": [
        {
          "username": "ddworken",
          "href": "https://github.com/ddworken",
          "avatar": "https://avatars.githubusercontent.com/u/5304541"
        },
        {
          "username": "GrahamCampbell",
          "href": "https://github.com/GrahamCampbell",
          "avatar": "https://avatars.githubusercontent.com/u/2829600"
        },
        {
          "username": "Eduard-Voiculescu",
          "href": "https://github.com/Eduard-Voiculescu",
          "avatar": "https://avatars.githubusercontent.com/u/26581515"
        }
      ]
    },
    {
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1608,
      "added_stars": 10012,
      "builtBy": [
        {
          "username": "666ghj",
          "href": "https://github.com/666ghj",
          "avatar": "https://avatars.githubusercontent.com/u/110395318"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "google",
      "repo": "langextract",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/langextract",
      "desc": "A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2316,
      "added_stars": 7266,
      "builtBy": [
        {
          "username": "aksg87",
          "href": "https://github.com/aksg87",
          "avatar": "https://avatars.githubusercontent.com/u/19271735"
        },
        {
          "username": "kleeena",
          "href": "https://github.com/kleeena",
          "avatar": "https://avatars.githubusercontent.com/u/62442533"
        },
        {
          "username": "mariano",
          "href": "https://github.com/mariano",
          "avatar": "https://avatars.githubusercontent.com/u/18598"
        },
        {
          "username": "tonebeta",
          "href": "https://github.com/tonebeta",
          "avatar": "https://avatars.githubusercontent.com/u/4890246"
        }
      ]
    },
    {
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6311,
      "added_stars": 2936,
      "builtBy": [
        {
          "username": "ishaan-jaff",
          "href": "https://github.com/ishaan-jaff",
          "avatar": "https://avatars.githubusercontent.com/u/29436595"
        },
        {
          "username": "krrishdholakia",
          "href": "https://github.com/krrishdholakia",
          "avatar": "https://avatars.githubusercontent.com/u/17561003"
        },
        {
          "username": "yuneng-jiang",
          "href": "https://github.com/yuneng-jiang",
          "avatar": "https://avatars.githubusercontent.com/u/171294688"
        },
        {
          "username": "Sameerlite",
          "href": "https://github.com/Sameerlite",
          "avatar": "https://avatars.githubusercontent.com/u/231518212"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "ZhuLinsen",
      "repo": "daily_stock_analysis",
      "avatar": "https://github.com/ZhuLinsen.png",
      "repo_link": "https://github.com/ZhuLinsen/daily_stock_analysis",
      "desc": "LLM驱动的 A/H/美股智能分析器，多数据源行情 + 实时新闻 + Gemini 决策仪表盘 + 多渠道推送，零成本，纯白嫖，定时运行",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 18812,
      "added_stars": 7700,
      "builtBy": [
        {
          "username": "ZhuLinsen",
          "href": "https://github.com/ZhuLinsen",
          "avatar": "https://avatars.githubusercontent.com/u/42829555"
        },
        {
          "username": "freesme",
          "href": "https://github.com/freesme",
          "avatar": "https://avatars.githubusercontent.com/u/56824280"
        },
        {
          "username": "massif-01",
          "href": "https://github.com/massif-01",
          "avatar": "https://avatars.githubusercontent.com/u/176381099"
        },
        {
          "username": "adminlove520",
          "href": "https://github.com/adminlove520",
          "avatar": "https://avatars.githubusercontent.com/u/32920883"
        },
        {
          "username": "birdxs",
          "href": "https://github.com/birdxs",
          "avatar": "https://avatars.githubusercontent.com/u/36181736"
        }
      ]
    },
    {
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2809,
      "added_stars": 3786,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
        }
      ]
    },
    {
      "author": "openai",
      "repo": "skills",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/skills",
      "desc": "Skills Catalog for Codex",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 781,
      "added_stars": 5997,
      "builtBy": [
        {
          "username": "gverma-openai",
          "href": "https://github.com/gverma-openai",
          "avatar": "https://avatars.githubusercontent.com/u/235382312"
        },
        {
          "username": "dkundel-openai",
          "href": "https://github.com/dkundel-openai",
          "avatar": "https://avatars.githubusercontent.com/u/200841172"
        },
        {
          "username": "vb-openai",
          "href": "https://github.com/vb-openai",
          "avatar": "https://avatars.githubusercontent.com/u/250380837"
        },
        {
          "username": "edward-bayes",
          "href": "https://github.com/edward-bayes",
          "avatar": "https://avatars.githubusercontent.com/u/191618473"
        },
        {
          "username": "ae-openai",
          "href": "https://github.com/ae-openai",
          "avatar": "https://avatars.githubusercontent.com/u/173195103"
        }
      ]
    },
    {
      "author": "inclusionAI",
      "repo": "AReaL",
      "avatar": "https://github.com/inclusionAI.png",
      "repo_link": "https://github.com/inclusionAI/AReaL",
      "desc": "Lightning-Fast RL for LLM Reasoning and Agents. Made Simple & Flexible.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 387,
      "added_stars": 1105,
      "builtBy": [
        {
          "username": "garrett4wade",
          "href": "https://github.com/garrett4wade",
          "avatar": "https://avatars.githubusercontent.com/u/36355462"
        },
        {
          "username": "rchardx",
          "href": "https://github.com/rchardx",
          "avatar": "https://avatars.githubusercontent.com/u/1036136"
        },
        {
          "username": "nuzant",
          "href": "https://github.com/nuzant",
          "avatar": "https://avatars.githubusercontent.com/u/23146120"
        },
        {
          "username": "fishcrap",
          "href": "https://github.com/fishcrap",
          "avatar": "https://avatars.githubusercontent.com/u/55312295"
        }
      ]
    }
  ]
}
- Fetching feeds...
{
  "source": "github",
  "since": "monthly",
  "language": "typescript",
  "items": [
    {
      "author": "moeru-ai",
      "repo": "airi",
      "avatar": "https://github.com/moeru-ai.png",
      "repo_link": "https://github.com/moeru-ai/airi",
      "desc": "💖🧸 Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3178,
      "added_stars": 14824,
      "builtBy": [
        {
          "username": "nekomeowww",
          "href": "https://github.com/nekomeowww",
          "avatar": "https://avatars.githubusercontent.com/u/11081491"
        },
        {
          "username": "shinohara-rin",
          "href": "https://github.com/shinohara-rin",
          "avatar": "https://avatars.githubusercontent.com/u/25588514"
        },
        {
          "username": "luoling8192",
          "href": "https://github.com/luoling8192",
          "avatar": "https://avatars.githubusercontent.com/u/44741987"
        },
        {
          "username": "LemonNekoGH",
          "href": "https://github.com/LemonNekoGH",
          "avatar": "https://avatars.githubusercontent.com/u/17664845"
        },
        {
          "username": "sumimakito",
          "href": "https://github.com/sumimakito",
          "avatar": "https://avatars.githubusercontent.com/u/5277268"
        }
      ]
    },
    {
      "author": "openclaw",
      "repo": "openclaw",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/openclaw",
      "desc": "Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 56853,
      "added_stars": 117792,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "vincentkoc",
          "href": "https://github.com/vincentkoc",
          "avatar": "https://avatars.githubusercontent.com/u/25068"
        },
        {
          "username": "vignesh07",
          "href": "https://github.com/vignesh07",
          "avatar": "https://avatars.githubusercontent.com/u/1436853"
        },
        {
          "username": "obviyus",
          "href": "https://github.com/obviyus",
          "avatar": "https://avatars.githubusercontent.com/u/22031114"
        },
        {
          "username": "gumadeiras",
          "href": "https://github.com/gumadeiras",
          "avatar": "https://avatars.githubusercontent.com/u/5599352"
        }
      ]
    },
    {
      "author": "badlogic",
      "repo": "pi-mono",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-mono",
      "desc": "AI agent toolkit: coding agent CLI, unified LLM API, TUI & web UI libraries, Slack bot, vLLM pods",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2349,
      "added_stars": 12353,
      "builtBy": [
        {
          "username": "badlogic",
          "href": "https://github.com/badlogic",
          "avatar": "https://avatars.githubusercontent.com/u/514052"
        },
        {
          "username": "hjanuschka",
          "href": "https://github.com/hjanuschka",
          "avatar": "https://avatars.githubusercontent.com/u/2891702"
        },
        {
          "username": "markusylisiurunen",
          "href": "https://github.com/markusylisiurunen",
          "avatar": "https://avatars.githubusercontent.com/u/8409947"
        },
        {
          "username": "aliou",
          "href": "https://github.com/aliou",
          "avatar": "https://avatars.githubusercontent.com/u/980367"
        }
      ]
    },
    {
      "author": "superset-sh",
      "repo": "superset",
      "avatar": "https://github.com/superset-sh.png",
      "repo_link": "https://github.com/superset-sh/superset",
      "desc": "IDE for the AI Agents Era - Run an army of Claude Code, Codex, etc. on your machine",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 430,
      "added_stars": 5012,
      "builtBy": [
        {
          "username": "Kitenite",
          "href": "https://github.com/Kitenite",
          "avatar": "https://avatars.githubusercontent.com/u/31864905"
        },
        {
          "username": "saddlepaddle",
          "href": "https://github.com/saddlepaddle",
          "avatar": "https://avatars.githubusercontent.com/u/14907857"
        },
        {
          "username": "AviPeltz",
          "href": "https://github.com/AviPeltz",
          "avatar": "https://avatars.githubusercontent.com/u/11849162"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "andreasasprou",
          "href": "https://github.com/andreasasprou",
          "avatar": "https://avatars.githubusercontent.com/u/8077469"
        }
      ]
    },
    {
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need - A nano Claude Code–like agent, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4530,
      "added_stars": 8053,
      "builtBy": [
        {
          "username": "CrazyBoyM",
          "href": "https://github.com/CrazyBoyM",
          "avatar": "https://avatars.githubusercontent.com/u/35400185"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "bansalkanav",
          "href": "https://github.com/bansalkanav",
          "avatar": "https://avatars.githubusercontent.com/u/13186335"
        },
        {
          "username": "Octane0411",
          "href": "https://github.com/Octane0411",
          "avatar": "https://avatars.githubusercontent.com/u/88922959"
        },
        {
          "username": "synix",
          "href": "https://github.com/synix",
          "avatar": "https://avatars.githubusercontent.com/u/3198234"
        }
      ]
    },
    {
      "author": "KeygraphHQ",
      "repo": "shannon",
      "avatar": "https://github.com/KeygraphHQ.png",
      "repo_link": "https://github.com/KeygraphHQ/shannon",
      "desc": "Shannon Lite is a fully autonomous AI pentester for web apps and APIs. 96.15% (100/104 exploits) on a hint-free, source-aware variant of the XBOW benchmark.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3295,
      "added_stars": 13928,
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
      "author": "tobi",
      "repo": "qmd",
      "avatar": "https://github.com/tobi.png",
      "repo_link": "https://github.com/tobi/qmd",
      "desc": "mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 824,
      "added_stars": 6281,
      "builtBy": [
        {
          "username": "tobi",
          "href": "https://github.com/tobi",
          "avatar": "https://avatars.githubusercontent.com/u/347"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "burke",
          "href": "https://github.com/burke",
          "avatar": "https://avatars.githubusercontent.com/u/1284"
        },
        {
          "username": "mbrendan",
          "href": "https://github.com/mbrendan",
          "avatar": "https://avatars.githubusercontent.com/u/25271154"
        },
        {
          "username": "vincentkoc",
          "href": "https://github.com/vincentkoc",
          "avatar": "https://avatars.githubusercontent.com/u/25068"
        }
      ]
    },
    {
      "author": "openclaw",
      "repo": "clawhub",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/clawhub",
      "desc": "Skill Directory for OpenClaw",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 845,
      "added_stars": 3592,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "thewilloftheshadow",
          "href": "https://github.com/thewilloftheshadow",
          "avatar": "https://avatars.githubusercontent.com/u/35580099"
        },
        {
          "username": "sethconvex",
          "href": "https://github.com/sethconvex",
          "avatar": "https://avatars.githubusercontent.com/u/239661579"
        },
        {
          "username": "theonejvo",
          "href": "https://github.com/theonejvo",
          "avatar": "https://avatars.githubusercontent.com/u/125909656"
        }
      ]
    },
    {
      "author": "siteboon",
      "repo": "claudecodeui",
      "avatar": "https://github.com/siteboon.png",
      "repo_link": "https://github.com/siteboon/claudecodeui",
      "desc": "Use Claude Code, Cursor CLI or Codex on mobile and web with CloudCLI (aka Claude Code UI). CloudCLI is a free open source webui/GUI that helps you manage your Claude Code session and projects remotely",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1045,
      "added_stars": 2107,
      "builtBy": [
        {
          "username": "viper151",
          "href": "https://github.com/viper151",
          "avatar": "https://avatars.githubusercontent.com/u/7479045"
        },
        {
          "username": "blackmammoth",
          "href": "https://github.com/blackmammoth",
          "avatar": "https://avatars.githubusercontent.com/u/118998054"
        },
        {
          "username": "EricBlanquer",
          "href": "https://github.com/EricBlanquer",
          "avatar": "https://avatars.githubusercontent.com/u/1058958"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "unsystemizer",
          "href": "https://github.com/unsystemizer",
          "avatar": "https://avatars.githubusercontent.com/u/13134193"
        }
      ]
    },
    {
      "author": "steipete",
      "repo": "summarize",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/summarize",
      "desc": "Point at any URL/YouTube/Podcast or file. Get the gist. CLI and Chrome Extension.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 306,
      "added_stars": 3235,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "mvance",
          "href": "https://github.com/mvance",
          "avatar": "https://avatars.githubusercontent.com/u/82473"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "vlnd0",
          "href": "https://github.com/vlnd0",
          "avatar": "https://avatars.githubusercontent.com/u/42946292"
        },
        {
          "username": "philippb",
          "href": "https://github.com/philippb",
          "avatar": "https://avatars.githubusercontent.com/u/374326"
        }
      ]
    },
    {
      "author": "ItzCrazyKns",
      "repo": "Vane",
      "avatar": "https://github.com/ItzCrazyKns.png",
      "repo_link": "https://github.com/ItzCrazyKns/Vane",
      "desc": "Vane is an AI-powered answering engine.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3507,
      "added_stars": 3899,
      "builtBy": [
        {
          "username": "ItzCrazyKns",
          "href": "https://github.com/ItzCrazyKns",
          "avatar": "https://avatars.githubusercontent.com/u/95534749"
        },
        {
          "username": "WanQuanXie",
          "href": "https://github.com/WanQuanXie",
          "avatar": "https://avatars.githubusercontent.com/u/8021137"
        },
        {
          "username": "OmarElKadri",
          "href": "https://github.com/OmarElKadri",
          "avatar": "https://avatars.githubusercontent.com/u/118303871"
        },
        {
          "username": "sjiampojamarn",
          "href": "https://github.com/sjiampojamarn",
          "avatar": "https://avatars.githubusercontent.com/u/18257803"
        }
      ]
    },
    {
      "author": "seerr-team",
      "repo": "seerr",
      "avatar": "https://github.com/seerr-team.png",
      "repo_link": "https://github.com/seerr-team/seerr",
      "desc": "Open-source media request and discovery manager for Jellyfin, Plex, and Emby.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 679,
      "added_stars": 1717,
      "builtBy": [
        {
          "username": "fallenbagel",
          "href": "https://github.com/fallenbagel",
          "avatar": "https://avatars.githubusercontent.com/u/98979876"
        },
        {
          "username": "sct",
          "href": "https://github.com/sct",
          "avatar": "https://avatars.githubusercontent.com/u/234213"
        },
        {
          "username": "TheCatLady",
          "href": "https://github.com/TheCatLady",
          "avatar": "https://avatars.githubusercontent.com/u/52870424"
        },
        {
          "username": "gauthier-th",
          "href": "https://github.com/gauthier-th",
          "avatar": "https://avatars.githubusercontent.com/u/37781713"
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
      "forks": 1666,
      "added_stars": 4758,
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
          "username": "szuend",
          "href": "https://github.com/szuend",
          "avatar": "https://avatars.githubusercontent.com/u/325588"
        }
      ]
    },
    {
      "author": "cloudflare",
      "repo": "agents",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/agents",
      "desc": "Build and deploy AI Agents on Cloudflare",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 449,
      "added_stars": 1356,
      "builtBy": [
        {
          "username": "threepointone",
          "href": "https://github.com/threepointone",
          "avatar": "https://avatars.githubusercontent.com/u/18808"
        },
        {
          "username": "whoiskatrin",
          "href": "https://github.com/whoiskatrin",
          "avatar": "https://avatars.githubusercontent.com/u/8017908"
        },
        {
          "username": "mattzcarey",
          "href": "https://github.com/mattzcarey",
          "avatar": "https://avatars.githubusercontent.com/u/77928207"
        },
        {
          "username": "deathbyknowledge",
          "href": "https://github.com/deathbyknowledge",
          "avatar": "https://avatars.githubusercontent.com/u/37671466"
        }
      ]
    },
    {
      "author": "grafana",
      "repo": "grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/grafana",
      "desc": "The open and composable observability and data visualization platform. Visualize metrics, logs, and traces from multiple sources like Prometheus, Loki, Elasticsearch, InfluxDB, Postgres and many more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 13529,
      "added_stars": 691,
      "builtBy": [
        {
          "username": "torkelo",
          "href": "https://github.com/torkelo",
          "avatar": "https://avatars.githubusercontent.com/u/10999"
        },
        {
          "username": "bergquist",
          "href": "https://github.com/bergquist",
          "avatar": "https://avatars.githubusercontent.com/u/618863"
        },
        {
          "username": "ryantxu",
          "href": "https://github.com/ryantxu",
          "avatar": "https://avatars.githubusercontent.com/u/705951"
        },
        {
          "username": "marefr",
          "href": "https://github.com/marefr",
          "avatar": "https://avatars.githubusercontent.com/u/1668778"
        }
      ]
    },
    {
      "author": "steipete",
      "repo": "mcporter",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/mcporter",
      "desc": "Call MCPs via TypeScript, masquerading as simple TypeScript API. Or package them as cli.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 175,
      "added_stars": 1010,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ryoppippi",
          "href": "https://github.com/ryoppippi",
          "avatar": "https://avatars.githubusercontent.com/u/1560508"
        },
        {
          "username": "caseyg",
          "href": "https://github.com/caseyg",
          "avatar": "https://avatars.githubusercontent.com/u/462020"
        },
        {
          "username": "aryasaatvik",
          "href": "https://github.com/aryasaatvik",
          "avatar": "https://avatars.githubusercontent.com/u/5666379"
        }
      ]
    },
    {
      "author": "YishenTu",
      "repo": "claudian",
      "avatar": "https://github.com/YishenTu.png",
      "repo_link": "https://github.com/YishenTu/claudian",
      "desc": "An Obsidian plugin that embeds Claude Code as an AI collaborator in your vault",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 215,
      "added_stars": 1426,
      "builtBy": [
        {
          "username": "YishenTu",
          "href": "https://github.com/YishenTu",
          "avatar": "https://avatars.githubusercontent.com/u/134207149"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "summerKK",
          "href": "https://github.com/summerKK",
          "avatar": "https://avatars.githubusercontent.com/u/19187969"
        },
        {
          "username": "AlexSuprun",
          "href": "https://github.com/AlexSuprun",
          "avatar": "https://avatars.githubusercontent.com/u/3644296"
        }
      ]
    }
  ]
}
- Fetching feeds...
{
  "source": "devto",
  "tag": null,
  "sort": "top",
  "items": [
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-1889",
      "tags": "top7, discuss",
      "reactions": 31,
      "comments": 13,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "DumbQuestion.ai - Self-Awareness, Prompt Injection, Search Intent... and darkness",
      "description": "Continued from Part 2 (and Part 1) ...  Building DumbQuestion.ai wasn't just about choosing the right...",
      "url": "https://dev.to/jagostoni/dumbquestionai-self-awareness-prompt-injection-search-intent-and-darkness-3pd",
      "tags": "ai, agents, webdev, go",
      "reactions": 30,
      "comments": 6,
      "reading_time": 4,
      "author": "jagostoni"
    },
    {
      "title": "Gemini 2.5 Flash vs Claude 3.7 Sonnet: 4 Production Constraints That Made the Decision for Me",
      "description": "An evaluation of the Gemini 2.5 flash and Claude 3.7 Sonnet model for an agentic engine.  I had a...",
      "url": "https://dev.to/dumebii/gemini-25-flash-vs-claude-37-sonnet-4-production-constraints-that-made-the-decision-for-me-bib",
      "tags": "webdev, javascript, showdev, nextjs",
      "reactions": 33,
      "comments": 9,
      "reading_time": 10,
      "author": "dumebii"
    },
    {
      "title": "I Made Claude Code Think Before It Codes. Here's the Prompt.",
      "description": "Claude Code is the fastest coder I've ever worked with. It can scaffold a feature, write tests, and...",
      "url": "https://dev.to/_vjk/i-made-claude-code-think-before-it-codes-heres-the-prompt-bf",
      "tags": "claudecode, ai, tdd, productivity",
      "reactions": 33,
      "comments": 1,
      "reading_time": 7,
      "author": "_vjk"
    },
    {
      "title": "3 words worth a billion dollars: Drift to Determinism (DriDe)",
      "description": "I doubt I am the first to come up with this concept, but I am probably the first to name it.  Drift...",
      "url": "https://dev.to/grahamthedev/3-words-worth-a-billion-dollars-drift-to-determinism-dride-dej",
      "tags": "webdev, ai, automation, architecture",
      "reactions": 58,
      "comments": 31,
      "reading_time": 7,
      "author": "grahamthedev"
    },
    {
      "title": "TLS Certificates Are About to Expire Way More Often. Here's How I'm Handling It.",
      "description": "If you manage TLS certificates for anything beyond a single server, the next three years are going to...",
      "url": "https://dev.to/krakenhavoc/tls-certificates-are-about-to-expire-way-more-often-heres-how-im-handling-it-40p6",
      "tags": "security, automation, ssl, devops",
      "reactions": 34,
      "comments": 3,
      "reading_time": 3,
      "author": "krakenhavoc"
    },
    {
      "title": "Your Agent Is a Small, Low-Stakes HAL",
      "description": "I work with multi-agent systems that review code, plan architecture, find faults, and critique...",
      "url": "https://dev.to/romanonthego/your-agent-is-a-small-low-stakes-hal-59j8",
      "tags": "ai, programming, llm, agents",
      "reactions": 35,
      "comments": 0,
      "reading_time": 7,
      "author": "romanonthego"
    },
    {
      "title": "Gemini Embedding 2: Our first natively multimodal embedding model",
      "description": "Today we're releasing Gemini Embedding 2, our first fully multimodal embedding model built on the...",
      "url": "https://dev.to/googleai/gemini-embedding-2-our-first-natively-multimodal-embedding-model-4apn",
      "tags": "ai, embedding, google, news",
      "reactions": 36,
      "comments": 1,
      "reading_time": 3,
      "author": "pat_loeber"
    },
    {
      "title": "Running a Local Sandboxed macOS Desktop Using VNC and a Restricted User",
      "description": "Sometimes you want to run commands that you don’t fully trust or that intentionally bypass...",
      "url": "https://dev.to/jlarky/running-a-local-sandboxed-macos-desktop-using-vnc-and-a-restricted-user-38dk",
      "tags": "abotwrotethis, sandbox, security",
      "reactions": 28,
      "comments": 0,
      "reading_time": 3,
      "author": "jlarky"
    },
    {
      "title": "Revamped RSS Feed Imports",
      "description": "You can now add multiple RSS feed imports, monitor their status, and assign each one to different...",
      "url": "https://dev.to/devteam/revamped-rss-feed-imports-3j1e",
      "tags": "forem, devto, rss",
      "reactions": 39,
      "comments": 3,
      "reading_time": 2,
      "author": "jonmarkgo"
    }
  ]
}
```

## 4. Quick-Win Offers (Automation/Web/AI)

**Query:** What quick-win offers can I package (automation/web/AI)?

**Command:**
```bash
echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set' ; node bin/main.js --json devto -t productivity -s top -c 10 ; node bin/main.js --json reddit -t freelance -s top
```

**Output:**
```text
[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set
- Fetching feeds...
{
  "source": "devto",
  "tag": "productivity",
  "sort": "top",
  "items": [
    {
      "title": "I Made Claude Code Think Before It Codes. Here's the Prompt.",
      "description": "Claude Code is the fastest coder I've ever worked with. It can scaffold a feature, write tests, and...",
      "url": "https://dev.to/_vjk/i-made-claude-code-think-before-it-codes-heres-the-prompt-bf",
      "tags": "claudecode, ai, tdd, productivity",
      "reactions": 33,
      "comments": 1,
      "reading_time": 7,
      "author": "_vjk"
    },
    {
      "title": "Python/FastAPI Development with Claude Code: CLAUDE.md Setup, Hooks, and Best Practices",
      "description": "Claude Code's output quality for Python projects depends heavily on how well you configure it. With a...",
      "url": "https://dev.to/myougatheaxo/pythonfastapi-development-with-claude-code-claudemd-setup-hooks-and-best-practices-1f11",
      "tags": "claudecode, python, fastapi, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "myougatheaxo"
    },
    {
      "title": "The Brief Method: How to Get 10x Better Results from Claude Code",
      "description": "Most developers who try Claude Code and get mediocre results have the same problem: they're not...",
      "url": "https://dev.to/askpatrick/the-brief-method-how-to-get-10x-better-results-from-claude-code-5bnl",
      "tags": "claudeai, productivity, ai, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "askpatrick"
    },
    {
      "title": "Why Engineers Stop Using GitHub Copilot (And What Actually Fixes It)",
      "description": "We run co-work training sessions for engineering teams deploying AI tools. Before every engagement,...",
      "url": "https://dev.to/askpatrick/why-engineers-stop-using-github-copilot-and-what-actually-fixes-it-3ol",
      "tags": "github, githubcopilot, productivity, engineering",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "askpatrick"
    },
    {
      "title": "Discover the Exciting Stories of the IT Industry from the 1960s",
      "description": "The 1960s was perhaps the most contradictory and exciting decade in the history of computing. While...",
      "url": "https://dev.to/toviszsolt/discover-the-exciting-stories-of-the-it-industry-from-the-1960s-3ohf",
      "tags": "programming, ai, productivity, discuss",
      "reactions": 5,
      "comments": 1,
      "reading_time": 6,
      "author": "toviszsolt"
    },
    {
      "title": "You've never unit tested a regex and you know it",
      "description": "We all use mailpit or mailtrap in development. Nobody sends real emails locally. That issue has been...",
      "url": "https://dev.to/bicibg/youve-never-unit-tested-a-regex-and-you-know-it-3244",
      "tags": "webdev, testing, discuss, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "bicibg"
    },
    {
      "title": "The Irony of AI-Generated Code in 2026",
      "description": "In 2026, the promise of \"production-ready\" code seems more complex than ever. With AI generating...",
      "url": "https://dev.to/liora_22/the-irony-of-ai-generated-code-in-2026-n46",
      "tags": "programming, ai, codereview, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "liora_22"
    },
    {
      "title": "The MEMORY.md problem: what do you keep when you can only remember 200 lines?",
      "description": "Disclosure: This article was written by an autonomous AI agent — Claude Sonnet 4.6 running as the...",
      "url": "https://dev.to/0coceo/the-memorymd-problem-what-do-you-keep-when-you-can-only-remember-200-lines-4dji",
      "tags": "ai, devlog, webdev, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "0coceo"
    },
    {
      "title": "I Used Three AI Agents on a Real Project. Here's What Each One Is Actually Good At.",
      "description": "Not a tutorial. Not a demo. What I actually observed after months of running Claude, Codex, and Gemini together on a production-grade Kubernetes automation project.",
      "url": "https://dev.to/wilddog64/i-used-three-ai-agents-on-a-real-project-heres-what-each-one-is-actually-good-at-4nnh",
      "tags": "ai, devops, kubernetes, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "wilddog64"
    },
    {
      "title": "How to Fix a Vibe-Coded App That Works But Doesn't Grow",
      "description": "Your app works. You can demo it. You can walk someone through the flow and they nod along. The code...",
      "url": "https://dev.to/alichherawalla/how-to-fix-a-vibe-coded-app-that-works-but-doesnt-grow-2a3e",
      "tags": "startup, productivity, beginners, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 10,
      "author": "alichherawalla"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
```

