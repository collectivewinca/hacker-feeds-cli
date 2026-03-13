# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-03-13 07:12:22 UTC

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
      "forks": 170,
      "added_stars": 711,
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
      "forks": 715,
      "added_stars": 174,
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
      "author": "aandrew-me",
      "repo": "ytDownloader",
      "avatar": "https://github.com/aandrew-me.png",
      "repo_link": "https://github.com/aandrew-me/ytDownloader",
      "desc": "Desktop App for downloading Videos and Audios from hundreds of sites",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 753,
      "added_stars": 475,
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
      "author": "is-a-dev",
      "repo": "register",
      "avatar": "https://github.com/is-a-dev.png",
      "repo_link": "https://github.com/is-a-dev/register",
      "desc": "Grab your own sweet-looking '.is-a.dev' subdomain.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 19012,
      "added_stars": 323,
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
      "author": "jarrodwatts",
      "repo": "claude-hud",
      "avatar": "https://github.com/jarrodwatts.png",
      "repo_link": "https://github.com/jarrodwatts/claude-hud",
      "desc": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 206,
      "added_stars": 326,
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
      "author": "wangrongding",
      "repo": "wechat-bot",
      "avatar": "https://github.com/wangrongding.png",
      "repo_link": "https://github.com/wangrongding/wechat-bot",
      "desc": "🤖一个基于 WeChaty 结合 ChatGPT / Claude / Kimi / DeepSeek / Ollama等Ai服务实现的微信机器人 ，可以用来帮助你自动回复微信消息，或者社群分析/好友管理，检测僵尸粉等...",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1173,
      "added_stars": 84,
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
      "forks": 1184,
      "added_stars": 311,
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
      "author": "facebook",
      "repo": "react",
      "avatar": "https://github.com/facebook.png",
      "repo_link": "https://github.com/facebook/react",
      "desc": "The library for web and native user interfaces.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 50767,
      "added_stars": 410,
      "builtBy": [
        {
          "username": "sebmarkbage",
          "href": "https://github.com/sebmarkbage",
          "avatar": "https://avatars.githubusercontent.com/u/63648"
        },
        {
          "username": "zpao",
          "href": "https://github.com/zpao",
          "avatar": "https://avatars.githubusercontent.com/u/8445"
        },
        {
          "username": "gaearon",
          "href": "https://github.com/gaearon",
          "avatar": "https://avatars.githubusercontent.com/u/810438"
        },
        {
          "username": "acdlite",
          "href": "https://github.com/acdlite",
          "avatar": "https://avatars.githubusercontent.com/u/3624098"
        },
        {
          "username": "sophiebits",
          "href": "https://github.com/sophiebits",
          "avatar": "https://avatars.githubusercontent.com/u/6820"
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
      "forks": 341,
      "added_stars": 403,
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
      "author": "songquanpeng",
      "repo": "one-api",
      "avatar": "https://github.com/songquanpeng.png",
      "repo_link": "https://github.com/songquanpeng/one-api",
      "desc": "LLM API 管理 & 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。LLM API management & key redistribution system, unifying multiple providers under a single API. Single binary, Docker-ready, with an English UI.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5810,
      "added_stars": 340,
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
      "author": "Mintplex-Labs",
      "repo": "anything-llm",
      "avatar": "https://github.com/Mintplex-Labs.png",
      "repo_link": "https://github.com/Mintplex-Labs/anything-llm",
      "desc": "The all-in-one AI productivity accelerator. On device and privacy first with no annoying setup or configration.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6071,
      "added_stars": 516,
      "builtBy": [
        {
          "username": "timothycarambat",
          "href": "https://github.com/timothycarambat",
          "avatar": "https://avatars.githubusercontent.com/u/16845892"
        },
        {
          "username": "shatfield4",
          "href": "https://github.com/shatfield4",
          "avatar": "https://avatars.githubusercontent.com/u/2336488"
        },
        {
          "username": "angelplusultra",
          "href": "https://github.com/angelplusultra",
          "avatar": "https://avatars.githubusercontent.com/u/106866560"
        },
        {
          "username": "KPCOFGS",
          "href": "https://github.com/KPCOFGS",
          "avatar": "https://avatars.githubusercontent.com/u/100217654"
        },
        {
          "username": "17ColinMiPerry",
          "href": "https://github.com/17ColinMiPerry",
          "avatar": "https://avatars.githubusercontent.com/u/55003831"
        }
      ]
    },
    {
      "author": "xnx3",
      "repo": "translate",
      "avatar": "https://github.com/xnx3.png",
      "repo_link": "https://github.com/xnx3/translate",
      "desc": "AI i18n, Two lines of js realize automatic html translation. No need to change the page, no language configuration file, no API key, SEO friendly!",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 400,
      "added_stars": 68,
      "builtBy": [
        {
          "username": "xnx3",
          "href": "https://github.com/xnx3",
          "avatar": "https://avatars.githubusercontent.com/u/8872471"
        },
        {
          "username": "cxb1029",
          "href": "https://github.com/cxb1029",
          "avatar": "https://avatars.githubusercontent.com/u/155722415"
        },
        {
          "username": "Lruihao",
          "href": "https://github.com/Lruihao",
          "avatar": "https://avatars.githubusercontent.com/u/33419593"
        },
        {
          "username": "DYJ762",
          "href": "https://github.com/DYJ762",
          "avatar": "https://avatars.githubusercontent.com/u/68176989"
        },
        {
          "username": "TatsukiMeng",
          "href": "https://github.com/TatsukiMeng",
          "avatar": "https://avatars.githubusercontent.com/u/98578510"
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
      "forks": 1342,
      "added_stars": 93,
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
      "by": "Samin100",
      "descendants": 71,
      "id": 47307124,
      "kids": [
        47360936,
        47361401,
        47361027,
        47360932,
        47361345,
        47361446,
        47361226,
        47361439,
        47361333,
        47360910,
        47361361,
        47360915,
        47361055,
        47361391,
        47361176,
        47361109,
        47361221,
        47360834,
        47360863,
        47361104,
        47361191,
        47361185,
        47361288,
        47361382,
        47361058,
        47361344,
        47360865,
        47361111,
        47361320,
        47360957,
        47360869,
        47360854,
        47360807,
        47361328
      ],
      "score": 174,
      "time": 1773051718,
      "title": "Willingness to look stupid",
      "type": "story",
      "url": "https://sharif.io/looking-stupid"
    },
    {
      "by": "microflash",
      "descendants": 431,
      "id": 47350424,
      "kids": [
        47352848,
        47355902,
        47352387,
        47353349,
        47351902,
        47354348,
        47353882,
        47353496,
        47354020,
        47352483,
        47351178,
        47352296,
        47355386,
        47351155,
        47352568,
        47360524,
        47351481,
        47354969,
        47351509,
        47352292,
        47357403,
        47351498,
        47354045,
        47352865,
        47359760,
        47354370,
        47351284,
        47352139,
        47352458,
        47354991,
        47351603,
        47351270,
        47358383,
        47355375,
        47357212,
        47352220,
        47355947,
        47353653,
        47355460,
        47354976,
        47355316,
        47355359,
        47352522,
        47354558,
        47354768,
        47354741,
        47353250,
        47357375,
        47354549,
        47351695,
        47353719,
        47353492,
        47353401,
        47353329,
        47355276,
        47350440,
        47354414,
        47353591,
        47352261,
        47361310,
        47354746,
        47352503,
        47351762,
        47356003,
        47360996,
        47352218,
        47359575,
        47356232,
        47352019,
        47356216,
        47352078,
        47360289,
        47354302,
        47358419,
        47351193,
        47354158,
        47353630,
        47353511,
        47352474,
        47354300,
        47351835,
        47352433,
        47355570,
        47355366,
        47360361,
        47353905,
        47356620,
        47353636,
        47354287,
        47353585,
        47354837,
        47352128,
        47359770,
        47351203,
        47359669,
        47356441,
        47353010,
        47354121,
        47359345,
        47355853,
        47351673,
        47358277,
        47354241,
        47358265,
        47355047,
        47356044,
        47357457,
        47354482,
        47352293,
        47353832,
        47354386,
        47352666,
        47352336,
        47355374,
        47354390,
        47355197,
        47351322,
        47355418,
        47352966,
        47352133,
        47352887,
        47351339,
        47354802,
        47358885,
        47354569,
        47353649,
        47357030,
        47356089,
        47354381,
        47354006,
        47354216,
        47351444,
        47359155,
        47355651,
        47352407,
        47355810,
        47352890,
        47352818,
        47353550,
        47353943
      ],
      "score": 1186,
      "text": "<a href=\"https:&#x2F;&#x2F;fosdem.org&#x2F;2026&#x2F;schedule&#x2F;event&#x2F;SUVS7G-lets_end_open_source_together_with_this_one_simple_trick&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;fosdem.org&#x2F;2026&#x2F;schedule&#x2F;event&#x2F;SUVS7G-lets_end_open_...</a><p><a href=\"https:&#x2F;&#x2F;malus.sh&#x2F;blog.html\" rel=\"nofollow\">https:&#x2F;&#x2F;malus.sh&#x2F;blog.html</a>",
      "time": 1773322924,
      "title": "Malus – Clean Room as a Service",
      "type": "story",
      "url": "https://malus.sh"
    },
    {
      "by": "kothariji",
      "descendants": 14,
      "id": 47360730,
      "kids": [
        47361369,
        47361089,
        47361462,
        47361386,
        47361134,
        47360849,
        47361209,
        47361366
      ],
      "score": 149,
      "time": 1773376600,
      "title": "Vite 8.0 Is Out",
      "type": "story",
      "url": "https://vite.dev/blog/announcing-vite8"
    },
    {
      "by": "mfiguiere",
      "descendants": 2,
      "id": 47301017,
      "kids": [
        47361434,
        47361397
      ],
      "score": 15,
      "time": 1773001346,
      "title": "Prefix sums at gigabytes per second with ARM NEON",
      "type": "story",
      "url": "https://lemire.me/blog/2026/03/08/prefix-sums-at-tens-of-gigabytes-per-second-with-arm-neon/"
    },
    {
      "by": "nvahalik",
      "descendants": 11,
      "id": 47360383,
      "kids": [
        47361491,
        47361207,
        47361416,
        47360989,
        47360883
      ],
      "score": 27,
      "time": 1773372738,
      "title": "Hyperlinks in Terminal Emulators",
      "type": "story",
      "url": "https://gist.github.com/egmontkob/eb114294efbcd5adb1944c9f3cb5feda"
    },
    {
      "by": "eieio",
      "descendants": 94,
      "id": 47354098,
      "kids": [
        47361375,
        47355476,
        47354099,
        47354780,
        47354395,
        47354891,
        47354374,
        47355783,
        47354544,
        47361195,
        47360715,
        47355391,
        47355298,
        47357133,
        47356496,
        47354490,
        47358146,
        47354745,
        47361113,
        47355499,
        47357612,
        47357073,
        47354941,
        47355406,
        47355470,
        47354986,
        47358459,
        47356911,
        47355642,
        47354610
      ],
      "score": 310,
      "time": 1773335636,
      "title": "Bubble Sorted Amen Break",
      "type": "story",
      "url": "https://parametricavocado.itch.io/amen-sorting"
    },
    {
      "by": "breton",
      "descendants": 435,
      "id": 47357042,
      "kids": [
        47358247,
        47358725,
        47357885,
        47357962,
        47357572,
        47361308,
        47360327,
        47361237,
        47357627,
        47357579,
        47361187,
        47357726,
        47358264,
        47360709,
        47357697,
        47358615,
        47360487,
        47360317,
        47357426,
        47361102,
        47357584,
        47360167,
        47357588,
        47360835,
        47357956,
        47361220,
        47360898,
        47358150,
        47357941,
        47358006,
        47357918,
        47357963,
        47358198,
        47359443,
        47360546,
        47360711,
        47358501,
        47360098,
        47360135,
        47360342,
        47360585,
        47358543,
        47360345,
        47361200,
        47357811,
        47360396,
        47357919,
        47359157,
        47359206,
        47358321,
        47359064,
        47357979,
        47357622,
        47358491,
        47357823,
        47357460,
        47357949,
        47358929,
        47360368,
        47360326,
        47358079,
        47357849,
        47357800,
        47360792,
        47360246,
        47357771,
        47357932,
        47359036,
        47358898,
        47358586,
        47358274,
        47357808,
        47357861,
        47359140,
        47359564,
        47357859,
        47358121,
        47359041,
        47359050,
        47361203,
        47359224,
        47360172,
        47358532,
        47359771,
        47358941,
        47357901,
        47357933,
        47357717,
        47357475,
        47357473,
        47357987,
        47357747
      ],
      "score": 1158,
      "time": 1773349270,
      "title": "Shall I implement it? No",
      "type": "story",
      "url": "https://gist.github.com/bretonium/291f4388e2de89a43b25c135b44e41f0"
    },
    {
      "by": "MBCook",
      "descendants": 131,
      "id": 47359744,
      "kids": [
        47360535,
        47360272,
        47360650,
        47361122,
        47360189,
        47361477,
        47360544,
        47360840,
        47360773,
        47361234,
        47360096,
        47360239,
        47360441,
        47360927,
        47361254,
        47360134,
        47360782,
        47360168,
        47361004,
        47361063,
        47360948,
        47360631,
        47360816,
        47360979,
        47360349,
        47360837,
        47360245,
        47360475,
        47360464,
        47360348,
        47360234,
        47360523,
        47361407,
        47359767
      ],
      "score": 272,
      "time": 1773366349,
      "title": "“This is not the computer for you”",
      "type": "story",
      "url": "https://samhenri.gold/blog/20260312-this-is-not-the-computer-for-you/"
    },
    {
      "by": "colinprince",
      "descendants": 419,
      "id": 47351371,
      "kids": [
        47351960,
        47355147,
        47351779,
        47351800,
        47360800,
        47356558,
        47358723,
        47352688,
        47351623,
        47354581,
        47360737,
        47352149,
        47357914,
        47356076,
        47355242,
        47351905,
        47360170,
        47354279,
        47358011,
        47354075,
        47355436,
        47353789,
        47358704,
        47352678,
        47352230,
        47352156,
        47351903,
        47352217,
        47360114,
        47358223,
        47352586,
        47351642,
        47351952,
        47356449,
        47359479,
        47352009,
        47354601,
        47353174,
        47351803,
        47351639,
        47351827,
        47358473,
        47355657,
        47355821,
        47356661,
        47359684,
        47355165,
        47353920
      ],
      "score": 390,
      "time": 1773326937,
      "title": "ATMs didn’t kill bank teller jobs, but the iPhone did",
      "type": "story",
      "url": "https://davidoks.blog/p/why-the-atm-didnt-kill-bank-teller"
    },
    {
      "by": "mustaphah",
      "descendants": 113,
      "id": 47353533,
      "kids": [
        47354889,
        47355358,
        47355356,
        47360273,
        47357381,
        47361408,
        47356026,
        47356252,
        47360072,
        47354667,
        47355834,
        47355977,
        47359220,
        47356543,
        47356670,
        47360298,
        47359815,
        47356893,
        47354522,
        47359486,
        47354515,
        47358203,
        47354682
      ],
      "score": 289,
      "time": 1773333531,
      "title": "Reversing memory loss via gut-brain communication",
      "type": "story",
      "url": "https://med.stanford.edu/news/all-news/2026/03/gut-brain-cognitive-decline.html"
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
      "title": "This Is Not The Computer For You",
      "url": "https://samhenri.gold/blog/20260312-this-is-not-the-computer-for-you/",
      "score": 127,
      "comments": 27,
      "tags": [
        "hardware",
        "mac"
      ],
      "id": "zyt5uz"
    },
    {
      "title": "How do you manage SSH keys?",
      "url": "",
      "score": 33,
      "comments": 43,
      "tags": [
        "ask",
        "practices"
      ],
      "id": "zcoz8h"
    },
    {
      "title": "Plan 9's Acme: The Un-Terminal and Text-Based GUIs",
      "url": "https://www.danielmoch.com/posts/2025/01/acme/",
      "score": 11,
      "comments": 2,
      "tags": [
        "editors"
      ],
      "id": "x9znhg"
    },
    {
      "title": "Parametricity, or Comptime is Bonkers",
      "url": "https://noelwelsh.com/posts/comptime-is-bonkers/",
      "score": 61,
      "comments": 72,
      "tags": [
        "haskell",
        "plt",
        "rust",
        "zig"
      ],
      "id": "l3rkdl"
    },
    {
      "title": "On Making",
      "url": "https://beej.us/blog/data/ai-making/",
      "score": 22,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "8xccbo"
    },
    {
      "title": "Guix System - One Month Later",
      "url": "https://nemin.hu/guix-one-month-later.html",
      "score": 14,
      "comments": 3,
      "tags": [
        "lisp",
        "nix"
      ],
      "id": "koymkj"
    },
    {
      "title": "Dreaming of a ten-year computer",
      "url": "https://alexwlchan.net/2026/ten-year-computer/",
      "score": 13,
      "comments": 16,
      "tags": [
        "hardware"
      ],
      "id": "eng6mr"
    },
    {
      "title": "My PostgreSQL database got nuked lol",
      "url": "https://akselmo.dev/posts/they-broke-my-server/",
      "score": 76,
      "comments": 47,
      "tags": [
        "security",
        "web"
      ],
      "id": "vb7ipx"
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
      "forks": 3625,
      "added_stars": 10001,
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
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 534,
      "added_stars": 7684,
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
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 414,
      "added_stars": 5009,
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
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "OpenSandbox is a general-purpose sandbox platform for AI applications, offering multi-language SDKs, unified sandbox APIs, and Docker/Kubernetes runtimes for scenarios like Coding Agents, GUI Agents, Agent Evaluation, AI Code Execution, and RL Training.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 565,
      "added_stars": 6553,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1265,
      "added_stars": 6358,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 538,
      "added_stars": 4853,
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
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2147,
      "added_stars": 14154,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "+180 production-ready skills & plugins for Claude Code, OpenAI Codex, and OpenClaw — engineering, marketing, product, compliance, C-level advisory, and more. Install via /plugin marketplace.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 520,
      "added_stars": 2772,
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
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 654,
      "added_stars": 3368,
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
          "username": "furkankoykiran",
          "href": "https://github.com/furkankoykiran",
          "avatar": "https://avatars.githubusercontent.com/u/60299878"
        },
        {
          "username": "welshofer",
          "href": "https://github.com/welshofer",
          "avatar": "https://avatars.githubusercontent.com/u/33588582"
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
      "forks": 171,
      "added_stars": 645,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1592,
      "added_stars": 6918,
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
          "username": "advent259141",
          "href": "https://github.com/advent259141",
          "avatar": "https://avatars.githubusercontent.com/u/197440256"
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
      "forks": 834,
      "added_stars": 2321,
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
      "author": "anthropics",
      "repo": "claude-code-security-review",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-security-review",
      "desc": "An AI-powered security review GitHub Action using Claude to analyze code changes for security vulnerabilities.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 311,
      "added_stars": 768,
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
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6376,
      "added_stars": 3069,
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
      "author": "mihail911",
      "repo": "modern-software-dev-assignments",
      "avatar": "https://github.com/mihail911.png",
      "repo_link": "https://github.com/mihail911/modern-software-dev-assignments",
      "desc": "Assignments for CS146S: The Modern Software Dev (Stanford University Fall 2025)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 700,
      "added_stars": 1282,
      "builtBy": [
        {
          "username": "mihail911",
          "href": "https://github.com/mihail911",
          "avatar": "https://avatars.githubusercontent.com/u/2789441"
        },
        {
          "username": "febielin",
          "href": "https://github.com/febielin",
          "avatar": "https://avatars.githubusercontent.com/u/133082422"
        }
      ]
    },
    {
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1813,
      "added_stars": 4218,
      "builtBy": [
        {
          "username": "hesreallyhim",
          "href": "https://github.com/hesreallyhim",
          "avatar": "https://avatars.githubusercontent.com/u/172150522"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tninja",
          "href": "https://github.com/tninja",
          "avatar": "https://avatars.githubusercontent.com/u/714625"
        }
      ]
    },
    {
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2854,
      "added_stars": 3910,
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
      "forks": 803,
      "added_stars": 5942,
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
      "forks": 3261,
      "added_stars": 15697,
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
      "forks": 58583,
      "added_stars": 122281,
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
      "forks": 2430,
      "added_stars": 11725,
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
      "author": "rowboatlabs",
      "repo": "rowboat",
      "avatar": "https://github.com/rowboatlabs.png",
      "repo_link": "https://github.com/rowboatlabs/rowboat",
      "desc": "Open-source AI coworker, with memory",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 779,
      "added_stars": 4245,
      "builtBy": [
        {
          "username": "ramnique",
          "href": "https://github.com/ramnique",
          "avatar": "https://avatars.githubusercontent.com/u/30795890"
        },
        {
          "username": "akhisud3195",
          "href": "https://github.com/akhisud3195",
          "avatar": "https://avatars.githubusercontent.com/u/55130408"
        },
        {
          "username": "arkml",
          "href": "https://github.com/arkml",
          "avatar": "https://avatars.githubusercontent.com/u/6592213"
        },
        {
          "username": "tusharmagar",
          "href": "https://github.com/tusharmagar",
          "avatar": "https://avatars.githubusercontent.com/u/47842976"
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
      "forks": 4620,
      "added_stars": 8580,
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
      "author": "superset-sh",
      "repo": "superset",
      "avatar": "https://github.com/superset-sh.png",
      "repo_link": "https://github.com/superset-sh/superset",
      "desc": "IDE for the AI Agents Era - Run an army of Claude Code, Codex, etc. on your machine",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 459,
      "added_stars": 5242,
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
      "author": "tobi",
      "repo": "qmd",
      "avatar": "https://github.com/tobi.png",
      "repo_link": "https://github.com/tobi/qmd",
      "desc": "mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 873,
      "added_stars": 6553,
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
      "forks": 900,
      "added_stars": 3820,
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
      "author": "southleft",
      "repo": "figma-console-mcp",
      "avatar": "https://github.com/southleft.png",
      "repo_link": "https://github.com/southleft/figma-console-mcp",
      "desc": "Your design system as an API. Connect AI to Figma for extraction, creation, and debugging.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 99,
      "added_stars": 670,
      "builtBy": [
        {
          "username": "tpitre",
          "href": "https://github.com/tpitre",
          "avatar": "https://avatars.githubusercontent.com/u/645765"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "abdokhaire",
          "href": "https://github.com/abdokhaire",
          "avatar": "https://avatars.githubusercontent.com/u/4311670"
        },
        {
          "username": "ionmesca",
          "href": "https://github.com/ionmesca",
          "avatar": "https://avatars.githubusercontent.com/u/103584532"
        }
      ]
    },
    {
      "author": "JimLiu",
      "repo": "baoyu-skills",
      "avatar": "https://github.com/JimLiu.png",
      "repo_link": "https://github.com/JimLiu/baoyu-skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 977,
      "added_stars": 4334,
      "builtBy": [
        {
          "username": "JimLiu",
          "href": "https://github.com/JimLiu",
          "avatar": "https://avatars.githubusercontent.com/u/648674"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "luojiyin1987",
          "href": "https://github.com/luojiyin1987",
          "avatar": "https://avatars.githubusercontent.com/u/6524977"
        },
        {
          "username": "justnode",
          "href": "https://github.com/justnode",
          "avatar": "https://avatars.githubusercontent.com/u/8398907"
        },
        {
          "username": "fkysly",
          "href": "https://github.com/fkysly",
          "avatar": "https://avatars.githubusercontent.com/u/3274605"
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
      "forks": 682,
      "added_stars": 1735,
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
      "author": "ItzCrazyKns",
      "repo": "Vane",
      "avatar": "https://github.com/ItzCrazyKns.png",
      "repo_link": "https://github.com/ItzCrazyKns/Vane",
      "desc": "Vane is an AI-powered answering engine.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3532,
      "added_stars": 4072,
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
      "author": "siteboon",
      "repo": "claudecodeui",
      "avatar": "https://github.com/siteboon.png",
      "repo_link": "https://github.com/siteboon/claudecodeui",
      "desc": "Use Claude Code, Cursor CLI or Codex on mobile and web with CloudCLI (aka Claude Code UI). CloudCLI is a free open source webui/GUI that helps you manage your Claude Code session and projects remotely",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1067,
      "added_stars": 2176,
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
      "author": "KeygraphHQ",
      "repo": "shannon",
      "avatar": "https://github.com/KeygraphHQ.png",
      "repo_link": "https://github.com/KeygraphHQ/shannon",
      "desc": "Shannon Lite is an autonomous, white-box AI pentester for web applications and APIs. It analyzes your source code, identifies attack vectors, and executes real exploits to prove vulnerabilities before they reach production.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3336,
      "added_stars": 12454,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1687,
      "added_stars": 4477,
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
      "forks": 452,
      "added_stars": 1361,
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
      "author": "promptfoo",
      "repo": "promptfoo",
      "avatar": "https://github.com/promptfoo.png",
      "repo_link": "https://github.com/promptfoo/promptfoo",
      "desc": "Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI. Compare performance of GPT, Claude, Gemini, Llama, and more. Simple declarative configs with command line and CI/CD integration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1296,
      "added_stars": 2452,
      "builtBy": [
        {
          "username": "typpo",
          "href": "https://github.com/typpo",
          "avatar": "https://avatars.githubusercontent.com/u/310310"
        },
        {
          "username": "mldangelo",
          "href": "https://github.com/mldangelo",
          "avatar": "https://avatars.githubusercontent.com/u/7235481"
        },
        {
          "username": "sklein12",
          "href": "https://github.com/sklein12",
          "avatar": "https://avatars.githubusercontent.com/u/1080611"
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
      "title": "Why Are We Still Doing GPU Work in JavaScript? (Live WebGPU Benchmark & Demo🚀)",
      "description": "JavaScript has been the main language of the web for years. Its popularity probably surprised even...",
      "url": "https://dev.to/sylwia-lask/why-are-we-still-doing-gpu-work-in-javascript-live-webgpu-benchmark-demo-4j6i",
      "tags": "webdev, javascript, typescript, webgpu",
      "reactions": 30,
      "comments": 17,
      "reading_time": 6,
      "author": "sylwia-lask"
    },
    {
      "title": "An Update on How We Judge DEV Challenges",
      "description": "We're always working to improve how we run DEV Challenges, and we have an update to share on the...",
      "url": "https://dev.to/devteam/an-update-on-how-we-judge-dev-challenges-34eg",
      "tags": "devchallenge, devto",
      "reactions": 27,
      "comments": 3,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "The Diplomatic Core: Shared Logic in a Multi-Framework World",
      "description": "This is the third part in a tenuously linked series defending JavaScript singletons in a modern...",
      "url": "https://dev.to/link2twenty/the-diplomatic-core-shared-logic-in-a-multi-framework-world-36m8",
      "tags": "microfrontend, webdev, react, vue",
      "reactions": 28,
      "comments": 2,
      "reading_time": 4,
      "author": "link2twenty"
    },
    {
      "title": "What Quitting My Job Taught Me About Tech",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience  So it is finally time to...",
      "url": "https://dev.to/konark_13/what-quitting-my-job-taught-me-about-tech-3no0",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 50,
      "comments": 30,
      "reading_time": 7,
      "author": "konark_13"
    },
    {
      "title": "experience report: coding a framework with AI",
      "description": "I'm Theo. I code out of pure passion for over 2 decades, specialized in webdev.  Building something...",
      "url": "https://dev.to/theodordiaconu/experience-report-coding-a-framework-with-ai-hlj",
      "tags": "ai, webdev, typescript",
      "reactions": 1,
      "comments": 1,
      "reading_time": 4,
      "author": "theodordiaconu"
    },
    {
      "title": "Your AI code reviewer has no one to disagree with",
      "description": "Why single-pass AI code review is fundamentally broken and what happens when you make AI reviewers argue with each other first.",
      "url": "https://dev.to/spencermarx/your-ai-code-reviewer-has-no-one-to-disagree-with-f1j",
      "tags": "opensource, ai, codereview, claudecode",
      "reactions": 36,
      "comments": 1,
      "reading_time": 5,
      "author": "spencermarx"
    },
    {
      "title": "Gemini 2.5 Flash vs Claude 3.7 Sonnet: 4 Production Constraints That Made the Decision for Me",
      "description": "An evaluation of the Gemini 2.5 flash and Claude 3.7 Sonnet model for an agentic engine.  I had a...",
      "url": "https://dev.to/dumebii/gemini-25-flash-vs-claude-37-sonnet-4-production-constraints-that-made-the-decision-for-me-bib",
      "tags": "webdev, javascript, showdev, nextjs",
      "reactions": 44,
      "comments": 19,
      "reading_time": 11,
      "author": "dumebii"
    },
    {
      "title": "Clojure Inheritance… Sort Of",
      "description": "Disclaimer   I want to start off by saying that I don't expect anyone to read this. However,...",
      "url": "https://dev.to/quoll/clojure-inheritance-sort-of-2i6i",
      "tags": "clojure",
      "reactions": 5,
      "comments": 0,
      "reading_time": 5,
      "author": "quoll"
    },
    {
      "title": "The one question that made me turn down a job offer",
      "description": "Last month, I went through a full interview process for a tech lead role. It went well — I liked the...",
      "url": "https://dev.to/etienneburdet/the-one-question-that-made-me-turn-down-a-job-offer-5g1c",
      "tags": "career, interview",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "etienneburdet"
    },
    {
      "title": "Multi-Connector OAuth: Meeting Scheduler Agent using Google Calendar, Gmail, Scalekit",
      "description": "Scheduling a meeting takes three API calls: check availability, create the event, and draft the...",
      "url": "https://dev.to/saif_shines/multi-connector-oauth-meeting-scheduler-agent-using-google-calendar-gmail-scalekit-89e",
      "tags": "ai, security, authentication, oauth",
      "reactions": 2,
      "comments": 0,
      "reading_time": 10,
      "author": "saif_shines"
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
      "title": "Premature Optimization Is Bad, But Your App Is Just Slow Because You're Lazy",
      "description": "\"Premature optimization is the root of all evil.\"  Donald Knuth wrote that in 1974. It is one of the...",
      "url": "https://dev.to/adamthedeveloper/premature-optimization-is-bad-but-your-app-is-just-slow-because-youre-lazy-ldn",
      "tags": "programming, javascript, productivity, webdev",
      "reactions": 22,
      "comments": 4,
      "reading_time": 5,
      "author": "adamthedeveloper"
    },
    {
      "title": "I Built 75 Browser-Based Tools With Next.js and Zero Backend.",
      "description": "No waitlists. No accounts. No paywalls. Just tools that work.  I kept running into the same problem:...",
      "url": "https://dev.to/fmtly/i-built-75-browser-based-tools-with-nextjs-and-zero-backend-167c",
      "tags": "webdev, javascript, productivity, sideprojects",
      "reactions": 3,
      "comments": 2,
      "reading_time": 4,
      "author": "fmtly"
    },
    {
      "title": "I stopped treating AI spend and doomscrolling as separate problems (and shipped more in 7 days)",
      "description": "I kept making the same mistake:   I treated AI cost as a money problem. I treated doomscrolling as a...",
      "url": "https://dev.to/godnick/i-stopped-treating-ai-spend-and-doomscrolling-as-separate-problems-and-shipped-more-in-7-days-2ckl",
      "tags": "productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "godnick"
    },
    {
      "title": "Your 2026 PTO Cheat Sheet: Exactly Which Days to Take Off",
      "description": "Your 2026 PTO Cheat Sheet: Exactly Which Days to Take Off  You have a limited number of PTO days....",
      "url": "https://dev.to/eastkap/your-2026-pto-cheat-sheet-exactly-which-days-to-take-off-4eki",
      "tags": "productivity, career, webdev, opensource",
      "reactions": 2,
      "comments": 0,
      "reading_time": 5,
      "author": "eastkap"
    },
    {
      "title": "Stop Asking AI for Answers - Start Shipping Fixes",
      "description": "The modern equivalent of answering Stack Overflow questions is contributing fixes to open source issues. AI is what finally makes this approachable at scale.",
      "url": "https://dev.to/sag1v/stop-asking-ai-for-answers-start-shipping-fixes-4mde",
      "tags": "ai, opensource, career, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "sag1v"
    },
    {
      "title": "Devlog 4",
      "description": "&lt; Welcome back to my devlog series on fixed, my little indie game. So in this I don't know how...",
      "url": "https://dev.to/no_arms_studio/devlog-4-2d1i",
      "tags": "productivity, devops, discuss, react",
      "reactions": 2,
      "comments": 0,
      "reading_time": 2,
      "author": "no_arms_studio"
    },
    {
      "title": "AI didn’t replace developers.",
      "description": "It just changed the workflow:  1️⃣ Ask AI to build everything 2️⃣ Hit usage limits 3️⃣ Wait for the...",
      "url": "https://dev.to/andrei_nita/ai-didnt-replace-developers-6j1",
      "tags": "ai, webdev, programming, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "andrei_nita"
    },
    {
      "title": "AI Reviews Your Code Before You Even Open the PR — Claude Code Review Changes Everything",
      "description": "One line changed. Nothing looked suspicious. But Claude Code Review caught it before deploy — and saved an entire authentication system from going down.",
      "url": "https://dev.to/philliphades/ai-reviews-your-code-before-you-even-open-the-pr-claude-code-review-changes-everything-4dfh",
      "tags": "ai, codereview, devtools, productivity",
      "reactions": 5,
      "comments": 1,
      "reading_time": 5,
      "author": "philliphades"
    },
    {
      "title": "Why Context Engineering Will Replace Traditional Architecture Thinking",
      "description": "Invitation: Now, I am officially active on X (Twitter). For new DevOps ideas, you can join me on X...",
      "url": "https://dev.to/jaideepparashar/why-context-engineering-will-replace-traditional-architecture-thinking-4e39",
      "tags": "ai, software, webdev, productivity",
      "reactions": 16,
      "comments": 1,
      "reading_time": 3,
      "author": "jaideepparashar"
    },
    {
      "title": "How We Stopped Claude Code from Writing eval() in Production",
      "description": "Claude Code wrote eval() in our production codebase. Nobody caught it for 3 days.   It was a...",
      "url": "https://dev.to/kirollos_atef/how-we-stopped-claude-code-from-writing-eval-in-production-34na",
      "tags": "opensource, productivity, testing, showdev",
      "reactions": 6,
      "comments": 1,
      "reading_time": 8,
      "author": "kirollos_atef"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
```

