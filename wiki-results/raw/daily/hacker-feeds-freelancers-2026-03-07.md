# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-03-07 06:58:47 UTC

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
      "author": "expo",
      "repo": "skills",
      "avatar": "https://github.com/expo.png",
      "repo_link": "https://github.com/expo/skills",
      "desc": "A collection of AI agent skills for working with Expo projects and Expo Application Services",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 60,
      "added_stars": 136,
      "builtBy": [
        {
          "username": "EvanBacon",
          "href": "https://github.com/EvanBacon",
          "avatar": "https://avatars.githubusercontent.com/u/9664363"
        },
        {
          "username": "ide",
          "href": "https://github.com/ide",
          "avatar": "https://avatars.githubusercontent.com/u/379606"
        },
        {
          "username": "Ubax",
          "href": "https://github.com/Ubax",
          "avatar": "https://avatars.githubusercontent.com/u/32908614"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "brentvatne",
          "href": "https://github.com/brentvatne",
          "avatar": "https://avatars.githubusercontent.com/u/90494"
        }
      ]
    },
    {
      "author": "Wei-Shaw",
      "repo": "claude-relay-service",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/claude-relay-service",
      "desc": "CRS-自建Claude Code镜像，一站式开源中转服务，让 Claude、OpenAI、Gemini、Droid 订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1428,
      "added_stars": 558,
      "builtBy": [
        {
          "username": "Wei-Shaw",
          "href": "https://github.com/Wei-Shaw",
          "avatar": "https://avatars.githubusercontent.com/u/26101719"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "f3n9",
          "href": "https://github.com/f3n9",
          "avatar": "https://avatars.githubusercontent.com/u/663221"
        },
        {
          "username": "kevinconan",
          "href": "https://github.com/kevinconan",
          "avatar": "https://avatars.githubusercontent.com/u/3772409"
        }
      ]
    },
    {
      "author": "harvard-edge",
      "repo": "cs249r_book",
      "avatar": "https://github.com/harvard-edge.png",
      "repo_link": "https://github.com/harvard-edge/cs249r_book",
      "desc": "Introduction to Machine Learning Systems",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2664,
      "added_stars": 1283,
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
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2171,
      "added_stars": 3835,
      "builtBy": [
        {
          "username": "glittercowboy",
          "href": "https://github.com/glittercowboy",
          "avatar": "https://avatars.githubusercontent.com/u/186001655"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Tibsfox",
          "href": "https://github.com/Tibsfox",
          "avatar": "https://avatars.githubusercontent.com/u/537551"
        },
        {
          "username": "Solvely-Colin",
          "href": "https://github.com/Solvely-Colin",
          "avatar": "https://avatars.githubusercontent.com/u/211764741"
        },
        {
          "username": "jjshanks",
          "href": "https://github.com/jjshanks",
          "avatar": "https://avatars.githubusercontent.com/u/62661"
        }
      ]
    },
    {
      "author": "datawhalechina",
      "repo": "easy-vibe",
      "avatar": "https://github.com/datawhalechina.png",
      "repo_link": "https://github.com/datawhalechina/easy-vibe",
      "desc": "Vibe Coding From 0 to 1 ｜ Vibe Coding 零基础教程 ｜ 产品原型、AI 能力集成、前后端开发、多平台应用开发教程 ｜ Tutorial on Product Prototype, AI Capability Integration, Frontend and Backend Development, and Multi-platform Application Development",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 299,
      "added_stars": 512,
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
      "forks": 5768,
      "added_stars": 291,
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
      "author": "SillyTavern",
      "repo": "SillyTavern",
      "avatar": "https://github.com/SillyTavern.png",
      "repo_link": "https://github.com/SillyTavern/SillyTavern",
      "desc": "LLM Frontend for Power Users.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4857,
      "added_stars": 364,
      "builtBy": [
        {
          "username": "Cohee1207",
          "href": "https://github.com/Cohee1207",
          "avatar": "https://avatars.githubusercontent.com/u/18619528"
        },
        {
          "username": "Wolfsblvt",
          "href": "https://github.com/Wolfsblvt",
          "avatar": "https://avatars.githubusercontent.com/u/9962104"
        },
        {
          "username": "RossAscends",
          "href": "https://github.com/RossAscends",
          "avatar": "https://avatars.githubusercontent.com/u/124905043"
        },
        {
          "username": "LenAnderson",
          "href": "https://github.com/LenAnderson",
          "avatar": "https://avatars.githubusercontent.com/u/7149120"
        },
        {
          "username": "valadaptive",
          "href": "https://github.com/valadaptive",
          "avatar": "https://avatars.githubusercontent.com/u/79560998"
        }
      ]
    },
    {
      "author": "xinnan-tech",
      "repo": "xiaozhi-esp32-server",
      "avatar": "https://github.com/xinnan-tech.png",
      "repo_link": "https://github.com/xinnan-tech/xiaozhi-esp32-server",
      "desc": "本项目为xiaozhi-esp32提供后端服务，帮助您快速搭建ESP32设备控制服务器。Backend service for xiaozhi-esp32, helps you quickly build an ESP32 device control server.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2991,
      "added_stars": 81,
      "builtBy": [
        {
          "username": "openrz",
          "href": "https://github.com/openrz",
          "avatar": "https://avatars.githubusercontent.com/u/32005838"
        },
        {
          "username": "xinnan-tech",
          "href": "https://github.com/xinnan-tech",
          "avatar": "https://avatars.githubusercontent.com/u/197497371"
        },
        {
          "username": "studentCGD",
          "href": "https://github.com/studentCGD",
          "avatar": "https://avatars.githubusercontent.com/u/185143709"
        },
        {
          "username": "Sakura-RanChen",
          "href": "https://github.com/Sakura-RanChen",
          "avatar": "https://avatars.githubusercontent.com/u/142338557"
        },
        {
          "username": "rainv123",
          "href": "https://github.com/rainv123",
          "avatar": "https://avatars.githubusercontent.com/u/207579765"
        }
      ]
    },
    {
      "author": "grab",
      "repo": "cursor-talk-to-figma-mcp",
      "avatar": "https://github.com/grab.png",
      "repo_link": "https://github.com/grab/cursor-talk-to-figma-mcp",
      "desc": "TalkToFigma: MCP integration between AI Agent (Cursor, Claude Code) and Figma, allowing Agentic AI to communicate with Figma for reading designs and modifying them programmatically.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 690,
      "added_stars": 74,
      "builtBy": [
        {
          "username": "sonnylazuardi",
          "href": "https://github.com/sonnylazuardi",
          "avatar": "https://avatars.githubusercontent.com/u/856609"
        },
        {
          "username": "dusskapark",
          "href": "https://github.com/dusskapark",
          "avatar": "https://avatars.githubusercontent.com/u/4177529"
        },
        {
          "username": "Kenrick-Zhou",
          "href": "https://github.com/Kenrick-Zhou",
          "avatar": "https://avatars.githubusercontent.com/u/973833"
        },
        {
          "username": "saleiva",
          "href": "https://github.com/saleiva",
          "avatar": "https://avatars.githubusercontent.com/u/132149"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 1171,
      "added_stars": 276,
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
      "author": "xnx3",
      "repo": "translate",
      "avatar": "https://github.com/xnx3.png",
      "repo_link": "https://github.com/xnx3/translate",
      "desc": "AI i18n, Two lines of js realize automatic html translation. No need to change the page, no language configuration file, no API key, SEO friendly!",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 391,
      "added_stars": 74,
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
      "author": "WebKit",
      "repo": "WebKit",
      "avatar": "https://github.com/WebKit.png",
      "repo_link": "https://github.com/WebKit/WebKit",
      "desc": "Home of the WebKit project, the browser engine used by Safari, Mail, App Store and many other applications on macOS, iOS and Linux.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1870,
      "added_stars": 30,
      "builtBy": [
        {
          "username": "cdumez",
          "href": "https://github.com/cdumez",
          "avatar": "https://avatars.githubusercontent.com/u/995975"
        },
        {
          "username": "eseidel",
          "href": "https://github.com/eseidel",
          "avatar": "https://avatars.githubusercontent.com/u/478541"
        },
        {
          "username": "rniwa",
          "href": "https://github.com/rniwa",
          "avatar": "https://avatars.githubusercontent.com/u/285965"
        },
        {
          "username": "alanbaradlay",
          "href": "https://github.com/alanbaradlay",
          "avatar": "https://avatars.githubusercontent.com/u/9871613"
        },
        {
          "username": "webkit-commit-queue",
          "href": "https://github.com/webkit-commit-queue",
          "avatar": "https://avatars.githubusercontent.com/u/77073439"
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
      "by": "PaulHoule",
      "descendants": 98,
      "id": 47282736,
      "kids": [
        47283124,
        47285060,
        47282933,
        47284615,
        47284170,
        47282837,
        47283169,
        47284412,
        47285108,
        47284680,
        47283193,
        47283075,
        47284215,
        47282958,
        47285002,
        47284957,
        47284143,
        47284211,
        47283673,
        47283118,
        47283130,
        47283364,
        47283385,
        47283230,
        47282919,
        47283241,
        47284881
      ],
      "score": 307,
      "time": 1772841556,
      "title": "Plasma Bigscreen – 10-foot interface for KDE plasma",
      "type": "story",
      "url": "https://plasma-bigscreen.org"
    },
    {
      "by": "soypat",
      "descendants": 54,
      "id": 47283665,
      "kids": [
        47284777,
        47284188,
        47284905,
        47284241,
        47284295,
        47284710,
        47284855
      ],
      "score": 116,
      "time": 1772849001,
      "title": "UUID package coming to Go standard library",
      "type": "story",
      "url": "https://github.com/golang/go/issues/62026"
    },
    {
      "by": "todsacerdoti",
      "descendants": 77,
      "id": 47281593,
      "kids": [
        47281862,
        47283274,
        47283121,
        47282334,
        47283913,
        47281848,
        47281987,
        47282876,
        47284173,
        47282703,
        47282446,
        47282669,
        47284648,
        47282718,
        47282430,
        47284571,
        47282261,
        47283064,
        47282460,
        47282436,
        47282312,
        47283063,
        47284358,
        47282270,
        47282382,
        47283238,
        47281746
      ],
      "score": 223,
      "time": 1772833964,
      "title": "this css proves me human",
      "type": "story",
      "url": "https://will-keleher.com/posts/this-css-makes-me-human/"
    },
    {
      "by": "surprisetalk",
      "descendants": 42,
      "id": 47256941,
      "kids": [
        47285164,
        47285148,
        47284860,
        47284914,
        47284333,
        47284652,
        47283883,
        47284102,
        47284282,
        47284174,
        47284853
      ],
      "score": 78,
      "time": 1772679490,
      "title": "Maybe there's a pattern here?",
      "type": "story",
      "url": "https://dynomight.net/pattern/"
    },
    {
      "by": "dnw",
      "descendants": 112,
      "id": 47283337,
      "kids": [
        47283819,
        47284983,
        47285144,
        47284776,
        47283663,
        47284629,
        47284501,
        47283778,
        47283769,
        47284741,
        47283704,
        47284774,
        47284118,
        47283735,
        47283645,
        47284844,
        47284099,
        47284033,
        47283785,
        47283904,
        47284371,
        47283796,
        47284078,
        47284898,
        47283836,
        47283748,
        47284785,
        47283751,
        47283757,
        47284572,
        47283798
      ],
      "score": 150,
      "time": 1772846277,
      "title": "LLMs work best when the user defines their acceptance criteria first",
      "type": "story",
      "url": "https://blog.katanaquant.com/p/your-llm-doesnt-write-correct-code"
    },
    {
      "by": "todsacerdoti",
      "descendants": 153,
      "id": 47273854,
      "kids": [
        47280277,
        47274569,
        47283282,
        47274043,
        47274478,
        47274253,
        47276103,
        47274869,
        47283096,
        47275028,
        47274772,
        47279031,
        47274072,
        47275223,
        47282466,
        47283680,
        47278825,
        47280122,
        47277113,
        47282089,
        47281045,
        47279017,
        47280551,
        47284790,
        47282998,
        47275876,
        47275763,
        47274095,
        47278051,
        47275143,
        47274221,
        47276935,
        47274335,
        47277517
      ],
      "score": 549,
      "text": "The bugs are the ones that say &quot;using Claude from Anthropic&quot; here: <a href=\"https:&#x2F;&#x2F;www.mozilla.org&#x2F;en-US&#x2F;security&#x2F;advisories&#x2F;mfsa2026-13&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.mozilla.org&#x2F;en-US&#x2F;security&#x2F;advisories&#x2F;mfsa2026-1...</a><p><a href=\"https:&#x2F;&#x2F;blog.mozilla.org&#x2F;en&#x2F;firefox&#x2F;hardening-firefox-anthropic-red-team&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;blog.mozilla.org&#x2F;en&#x2F;firefox&#x2F;hardening-firefox-anthro...</a><p><a href=\"https:&#x2F;&#x2F;www.wsj.com&#x2F;tech&#x2F;ai&#x2F;send-us-more-anthropics-claude-sniffs-out-bevy-of-bugs-c6822075\" rel=\"nofollow\">https:&#x2F;&#x2F;www.wsj.com&#x2F;tech&#x2F;ai&#x2F;send-us-more-anthropics-claude-s...</a>",
      "time": 1772797998,
      "title": "Hardening Firefox with Anthropic's Red Team",
      "type": "story",
      "url": "https://www.anthropic.com/news/mozilla-firefox-security"
    },
    {
      "by": "herbertl",
      "descendants": 0,
      "id": 47234689,
      "score": 6,
      "time": 1772554748,
      "title": "The Longing (1999)",
      "type": "story",
      "url": "https://www.cluetrain.com/book/longing.html"
    },
    {
      "by": "tzury",
      "descendants": 16,
      "id": 47263938,
      "kids": [
        47285087,
        47283449,
        47284700,
        47284281,
        47283890
      ],
      "score": 88,
      "time": 1772729247,
      "title": "Galileo's handwritten notes found in ancient astronomy text",
      "type": "story",
      "url": "https://www.science.org/content/article/galileo-s-handwritten-notes-found-ancient-astronomy-text"
    },
    {
      "by": "squidleon",
      "descendants": 136,
      "id": 47275236,
      "kids": [
        47276600,
        47277085,
        47279492,
        47280358,
        47277894,
        47281794,
        47275677,
        47279194,
        47280962,
        47279470,
        47276395,
        47276257,
        47275696,
        47279235,
        47275698,
        47278660,
        47279345,
        47275790,
        47279058,
        47277695,
        47279505,
        47276802,
        47278330,
        47280812,
        47278052,
        47278513,
        47277684,
        47279716,
        47278537
      ],
      "score": 244,
      "text": "I&#x27;ve been building a modern Ultima Online server emulator from scratch. It&#x27;s not feature-complete (no combat, no skills yet), but the foundation is solid and I wanted to share it early.<p>What it does today:\n- Full packet layer for the classic UO client (login, movement, items, mobiles)\n- Lua scripting for item behaviors (double-click a potion, open a door — all defined in Lua, no C# recompile)\n- Spatial world partitioned into sectors with delta sync (only sends packets for new sectors when crossing boundaries)\n- Snapshot-based persistence with MessagePack\n- Source generators for automatic DI wiring, packet handler registration, and Lua module exposure\n- NativeAOT support — the server compiles to a single native binary\n- Embedded HTTP admin API + React management UI\n- Auto-generated doors from map statics (same algorithm as ModernUO&#x2F;RunUO)<p>Tech stack: .NET 10, NativeAOT, NLua, MessagePack, DryIoc, Kestrel<p>What&#x27;s missing: Combat, skills, weather integration, NPC AI. This is still early — the focus so far has been on getting the architecture right so adding those systems doesn&#x27;t require rewiring everything.<p>Why not just use ModernUO&#x2F;RunUO? Those are mature and battle-tested. I started this because I wanted to rethink the architecture from scratch: strict network&#x2F;domain separation, event-driven game loop, no\n  inheritance-heavy item hierarchies, and Lua for rapid iteration on game logic without recompiling.<p>GitHub: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;moongate-community&#x2F;moongatev2\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;moongate-community&#x2F;moongatev2</a>",
      "time": 1772806979,
      "title": "Show HN: Moongate – Ultima Online server emulator in .NET 10 with Lua scripting",
      "type": "story",
      "url": "https://github.com/moongate-community/moongatev2"
    },
    {
      "by": "doener",
      "descendants": 13,
      "id": 47282701,
      "kids": [
        47285163,
        47285052,
        47284909,
        47284946,
        47284377,
        47284878,
        47284780,
        47285035,
        47284945
      ],
      "score": 60,
      "time": 1772841209,
      "title": "Helix: A post-modern text editor",
      "type": "story",
      "url": "https://helix-editor.com/"
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
      "title": "Some Words on WigglyPaint",
      "url": "https://beyondloom.com/blog/onwigglypaint.html",
      "score": 39,
      "comments": 3,
      "tags": [
        "graphics"
      ],
      "id": "drtput"
    },
    {
      "title": "jank is off to a great start in 2026",
      "url": "https://jank-lang.org/blog/2026-03-06-great-start/",
      "score": 42,
      "comments": 2,
      "tags": [
        "clojure",
        "compilers",
        "plt"
      ],
      "id": "traf1f"
    },
    {
      "title": "Mozilla is working on a big Firefox redesign, here is what it looks like",
      "url": "https://www.neowin.net/news/mozilla-is-working-on-a-big-firefox-redesign-here-is-what-it-looks-like/",
      "score": 60,
      "comments": 66,
      "tags": [
        "browsers",
        "design"
      ],
      "id": "lx1wc2"
    },
    {
      "title": "I'm not consulting an LLM",
      "url": "https://lr0.org/blog/p/gpt/",
      "score": 19,
      "comments": 2,
      "tags": [
        "culture",
        "practices"
      ],
      "id": "qorrgl"
    },
    {
      "title": "EUPL: European Union Public License",
      "url": "https://eupl.eu/",
      "score": 56,
      "comments": 30,
      "tags": [
        "law"
      ],
      "id": "msjuyz"
    },
    {
      "title": "10% of Firefox crashes are caused by bitflips",
      "url": "https://mas.to/@gabrielesvelto/116171750653898304",
      "score": 75,
      "comments": 14,
      "tags": [
        "hardware"
      ],
      "id": "e5vqyc"
    },
    {
      "title": "A new chapter for the Nix language, courtesy of WebAssembly",
      "url": "https://determinate.systems/blog/builtins-wasm/",
      "score": 52,
      "comments": 19,
      "tags": [
        "nix",
        "wasm"
      ],
      "id": "uwdjjy"
    },
    {
      "title": "SPA vs. Hypermedia: Real-World Performance Under Load",
      "url": "https://zweiundeins.gmbh/en/methodology/spa-vs-hypermedia-real-world-performance-under-load",
      "score": 12,
      "comments": 3,
      "tags": [
        "web"
      ],
      "id": "mktb13"
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
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 340,
      "added_stars": 4861,
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
      "forks": 495,
      "added_stars": 7180,
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
      "forks": 1080,
      "added_stars": 6078,
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
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skills and subagents, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2998,
      "added_stars": 5416,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 371,
      "added_stars": 3844,
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
          "username": "ZaynJarvis",
          "href": "https://github.com/ZaynJarvis",
          "avatar": "https://avatars.githubusercontent.com/u/31875147"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 478,
      "added_stars": 5498,
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
      "author": "openai",
      "repo": "skills",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/skills",
      "desc": "Skills Catalog for Codex",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 678,
      "added_stars": 6925,
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
      "author": "databricks-solutions",
      "repo": "ai-dev-kit",
      "avatar": "https://github.com/databricks-solutions.png",
      "repo_link": "https://github.com/databricks-solutions/ai-dev-kit",
      "desc": "Databricks Toolkit for Coding Agents provided by Field Engineering",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 150,
      "added_stars": 677,
      "builtBy": [
        {
          "username": "calreynolds",
          "href": "https://github.com/calreynolds",
          "avatar": "https://avatars.githubusercontent.com/u/49540501"
        },
        {
          "username": "dustinvannoy-db",
          "href": "https://github.com/dustinvannoy-db",
          "avatar": "https://avatars.githubusercontent.com/u/126025751"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "author": "google",
      "repo": "langextract",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/langextract",
      "desc": "A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2300,
      "added_stars": 10452,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 826,
      "added_stars": 2276,
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
      "author": "Shubhamsaboo",
      "repo": "awesome-llm-apps",
      "avatar": "https://github.com/Shubhamsaboo.png",
      "repo_link": "https://github.com/Shubhamsaboo/awesome-llm-apps",
      "desc": "Collection of awesome LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and opensource models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 14557,
      "added_stars": 7887,
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1581,
      "added_stars": 6953,
      "builtBy": [
        {
          "username": "rejojer",
          "href": "https://github.com/rejojer",
          "avatar": "https://avatars.githubusercontent.com/u/8255061"
        },
        {
          "username": "zmtomorrow",
          "href": "https://github.com/zmtomorrow",
          "avatar": "https://avatars.githubusercontent.com/u/13518252"
        },
        {
          "username": "BukeLy",
          "href": "https://github.com/BukeLy",
          "avatar": "https://avatars.githubusercontent.com/u/19304666"
        },
        {
          "username": "clarenceluo78",
          "href": "https://github.com/clarenceluo78",
          "avatar": "https://avatars.githubusercontent.com/u/71917860"
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
      "forks": 6220,
      "added_stars": 2778,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "169 production-ready skills & plugins for Claude Code, OpenAI Codex, and OpenClaw — engineering, marketing, product, compliance, C-level advisory, and more. Install via /plugin marketplace.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 339,
      "added_stars": 934,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1434,
      "added_stars": 3775,
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
      "author": "NevaMind-AI",
      "repo": "memU",
      "avatar": "https://github.com/NevaMind-AI.png",
      "repo_link": "https://github.com/NevaMind-AI/memU",
      "desc": "Memory for 24/7 proactive agents like openclaw (moltbot, clawdbot).",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 929,
      "added_stars": 4732,
      "builtBy": [
        {
          "username": "sairin1202",
          "href": "https://github.com/sairin1202",
          "avatar": "https://avatars.githubusercontent.com/u/5654879"
        },
        {
          "username": "evan-ak",
          "href": "https://github.com/evan-ak",
          "avatar": "https://avatars.githubusercontent.com/u/33013709"
        },
        {
          "username": "ankaisen",
          "href": "https://github.com/ankaisen",
          "avatar": "https://avatars.githubusercontent.com/u/51148505"
        },
        {
          "username": "Koimiao-zz",
          "href": "https://github.com/Koimiao-zz",
          "avatar": "https://avatars.githubusercontent.com/u/224523934"
        }
      ]
    },
    {
      "author": "taylorwilsdon",
      "repo": "google_workspace_mcp",
      "avatar": "https://github.com/taylorwilsdon.png",
      "repo_link": "https://github.com/taylorwilsdon/google_workspace_mcp",
      "desc": "Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search & Drive with AI - Comprehensive Google Workspace / G Suite MCP Server & CLI Tool",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 502,
      "added_stars": 400,
      "builtBy": [
        {
          "username": "taylorwilsdon",
          "href": "https://github.com/taylorwilsdon",
          "avatar": "https://avatars.githubusercontent.com/u/6508528"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shawnzhu",
          "href": "https://github.com/shawnzhu",
          "avatar": "https://avatars.githubusercontent.com/u/1059372"
        }
      ]
    },
    {
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, prompts, and configurations to help you make the most of GitHub Copilot.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2747,
      "added_stars": 3640,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
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
      "author": "KeygraphHQ",
      "repo": "shannon",
      "avatar": "https://github.com/KeygraphHQ.png",
      "repo_link": "https://github.com/KeygraphHQ/shannon",
      "desc": "Shannon Lite is a fully autonomous AI pentester for web apps and APIs. 96.15% (100/104 exploits) on a hint-free, source-aware variant of the XBOW benchmark.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3222,
      "added_stars": 27672,
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
      "author": "openclaw",
      "repo": "openclaw",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/openclaw",
      "desc": "Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 52061,
      "added_stars": 101936,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "vignesh07",
          "href": "https://github.com/vignesh07",
          "avatar": "https://avatars.githubusercontent.com/u/1436853"
        },
        {
          "username": "vincentkoc",
          "href": "https://github.com/vincentkoc",
          "avatar": "https://avatars.githubusercontent.com/u/25068"
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
      "forks": 2181,
      "added_stars": 13231,
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
      "author": "moeru-ai",
      "repo": "airi",
      "avatar": "https://github.com/moeru-ai.png",
      "repo_link": "https://github.com/moeru-ai/airi",
      "desc": "💖🧸 Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2862,
      "added_stars": 11577,
      "builtBy": [
        {
          "username": "nekomeowww",
          "href": "https://github.com/nekomeowww",
          "avatar": "https://avatars.githubusercontent.com/u/11081491"
        },
        {
          "username": "luoling8192",
          "href": "https://github.com/luoling8192",
          "avatar": "https://avatars.githubusercontent.com/u/44741987"
        },
        {
          "username": "shinohara-rin",
          "href": "https://github.com/shinohara-rin",
          "avatar": "https://avatars.githubusercontent.com/u/25588514"
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
      "author": "tobi",
      "repo": "qmd",
      "avatar": "https://github.com/tobi.png",
      "repo_link": "https://github.com/tobi/qmd",
      "desc": "mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 737,
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
      "author": "superset-sh",
      "repo": "superset",
      "avatar": "https://github.com/superset-sh.png",
      "repo_link": "https://github.com/superset-sh/superset",
      "desc": "IDE for the AI Agents Era - Run an army of Claude Code, Codex, etc. on your machine",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 328,
      "added_stars": 3897,
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
      "author": "openclaw",
      "repo": "clawhub",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/clawhub",
      "desc": "Skill Directory for OpenClaw",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 748,
      "added_stars": 3053,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "thewilloftheshadow",
          "href": "https://github.com/thewilloftheshadow",
          "avatar": "https://avatars.githubusercontent.com/u/35580099"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "theonejvo",
          "href": "https://github.com/theonejvo",
          "avatar": "https://avatars.githubusercontent.com/u/125909656"
        },
        {
          "username": "tanujbhaud",
          "href": "https://github.com/tanujbhaud",
          "avatar": "https://avatars.githubusercontent.com/u/128238320"
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
      "forks": 4309,
      "added_stars": 5644,
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
      "author": "virattt",
      "repo": "dexter",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/dexter",
      "desc": "An autonomous agent for deep financial research",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2104,
      "added_stars": 6628,
      "builtBy": [
        {
          "username": "virattt",
          "href": "https://github.com/virattt",
          "avatar": "https://avatars.githubusercontent.com/u/901795"
        },
        {
          "username": "MkDev11",
          "href": "https://github.com/MkDev11",
          "avatar": "https://avatars.githubusercontent.com/u/94194147"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "gupta-8",
          "href": "https://github.com/gupta-8",
          "avatar": "https://avatars.githubusercontent.com/u/215169640"
        },
        {
          "username": "sjhddh",
          "href": "https://github.com/sjhddh",
          "avatar": "https://avatars.githubusercontent.com/u/5778228"
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
      "forks": 292,
      "added_stars": 3198,
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
          "username": "vlnd0",
          "href": "https://github.com/vlnd0",
          "avatar": "https://avatars.githubusercontent.com/u/42946292"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "philippb",
          "href": "https://github.com/philippb",
          "avatar": "https://avatars.githubusercontent.com/u/374326"
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
      "forks": 668,
      "added_stars": 1645,
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
      "author": "cloudflare",
      "repo": "agents",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/agents",
      "desc": "Build and deploy AI Agents on Cloudflare",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 448,
      "added_stars": 1358,
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
      "author": "siteboon",
      "repo": "claudecodeui",
      "avatar": "https://github.com/siteboon.png",
      "repo_link": "https://github.com/siteboon/claudecodeui",
      "desc": "Use Claude Code, Cursor CLI or Codex on mobile and web with CloudCLI (aka Claude Code UI). CloudCLI is a free open source webui/GUI that helps you manage your Claude Code session and projects remotely",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1010,
      "added_stars": 1933,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1623,
      "added_stars": 4424,
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
      "author": "farion1231",
      "repo": "cc-switch",
      "avatar": "https://github.com/farion1231.png",
      "repo_link": "https://github.com/farion1231/cc-switch",
      "desc": "A cross-platform desktop All-in-One assistant tool for Claude Code, Codex, OpenCode, openclaw & Gemini CLI.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1519,
      "added_stars": 8278,
      "builtBy": [
        {
          "username": "farion1231",
          "href": "https://github.com/farion1231",
          "avatar": "https://avatars.githubusercontent.com/u/44939412"
        },
        {
          "username": "yovinchen",
          "href": "https://github.com/yovinchen",
          "avatar": "https://avatars.githubusercontent.com/u/76760071"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "TinsFox",
          "href": "https://github.com/TinsFox",
          "avatar": "https://avatars.githubusercontent.com/u/33956589"
        },
        {
          "username": "tianrking",
          "href": "https://github.com/tianrking",
          "avatar": "https://avatars.githubusercontent.com/u/10758833"
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
      "forks": 168,
      "added_stars": 1066,
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
      "author": "iOfficeAI",
      "repo": "AionUi",
      "avatar": "https://github.com/iOfficeAI.png",
      "repo_link": "https://github.com/iOfficeAI/AionUi",
      "desc": "Free, local, open-source 24/7 Cowork app and OpenClaw for Gemini CLI, Claude Code, Codex, OpenCode, Qwen Code, Goose CLI, Auggie, and more | 🌟 Star if you like it!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1391,
      "added_stars": 5774,
      "builtBy": [
        {
          "username": "kuishou68",
          "href": "https://github.com/kuishou68",
          "avatar": "https://avatars.githubusercontent.com/u/54054995"
        },
        {
          "username": "IceyLiu",
          "href": "https://github.com/IceyLiu",
          "avatar": "https://avatars.githubusercontent.com/u/10683426"
        },
        {
          "username": "halvee-tech",
          "href": "https://github.com/halvee-tech",
          "avatar": "https://avatars.githubusercontent.com/u/224486645"
        },
        {
          "username": "goworm",
          "href": "https://github.com/goworm",
          "avatar": "https://avatars.githubusercontent.com/u/28083037"
        },
        {
          "username": "ringringlin",
          "href": "https://github.com/ringringlin",
          "avatar": "https://avatars.githubusercontent.com/u/226215277"
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
      "forks": 212,
      "added_stars": 1340,
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
      "title": "What was your win this week?",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-1m96",
      "tags": "weeklyretro, discuss",
      "reactions": 38,
      "comments": 40,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Join the 2026 WeCoded Challenge and Celebrate Underrepresented Voices in Tech Through Writing & Frontend Art 🎨!",
      "description": "We’re excited to announce the launch of the 2026 WeCoded Challenge!  This year marks our ninth year...",
      "url": "https://dev.to/devteam/join-the-2026-wecoded-challenge-and-celebrate-underrepresented-voices-in-tech-through-writing--4828",
      "tags": "devchallenge, wecoded, frontend, career",
      "reactions": 72,
      "comments": 8,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Advice I’d Send Back in Time: Technology in 2026 and Four Lessons for My High School Self",
      "description": "*Author context: This WeCoded 2026 post is a twist on a writing challenge Future did last year. This...",
      "url": "https://dev.to/theoriginalbpc/advice-id-send-back-in-time-technology-in-2026-and-four-lessons-for-my-high-school-self-2elj",
      "tags": "wecoded",
      "reactions": 11,
      "comments": 1,
      "reading_time": 8,
      "author": "theoriginalbpc"
    },
    {
      "title": "How to Scale Claude Code with an MCP Gateway (Run Any LLM, Centralize Tools, Control Costs)",
      "description": "Claude Code is one of the most capable terminal-based coding agents available today. It can read your...",
      "url": "https://dev.to/hadil/how-to-scale-claude-code-with-an-mcp-gateway-run-any-llm-centralize-tools-control-costs-nd9",
      "tags": "ai, llm, backend, opensource",
      "reactions": 39,
      "comments": 11,
      "reading_time": 6,
      "author": "hadil"
    },
    {
      "title": "Ship Less, Measure More",
      "description": "AI did not remove the engineering bottleneck. It moved it.  Code is cheaper than it has ever been....",
      "url": "https://dev.to/snowman647/ship-less-measure-more-58m4",
      "tags": "ai, programming, management",
      "reactions": 5,
      "comments": 0,
      "reading_time": 6,
      "author": "snowman647"
    },
    {
      "title": "I Built a Pixel Art Village Where AI Characters Have Real Emotions",
      "description": "Last weekend I fell into a rabbit hole: what if game characters didn't just have scripted reactions,...",
      "url": "https://dev.to/miss_terry/i-built-a-pixel-art-village-where-ai-characters-have-real-emotions-ccg",
      "tags": "ai, gamedev, showdev, sideprojects",
      "reactions": 28,
      "comments": 1,
      "reading_time": 3,
      "author": "miss_terry"
    },
    {
      "title": "Are you more of a CLI person or a GUI person",
      "description": "And why do you think that's your preference?",
      "url": "https://dev.to/ben/are-you-more-of-a-cli-person-or-a-gui-person-37n5",
      "tags": "discuss, cli, terminal",
      "reactions": 6,
      "comments": 5,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "AI Can't Recreate Thrust (But It Can Help You Understand It)",
      "description": "I asked Claude to recreate the classic 1986 game Thrust for me in the browser. It created slop but...",
      "url": "https://dev.to/jamesrandall/ai-cant-recreate-thrust-but-it-can-help-you-understand-it-279d",
      "tags": "ai, gamedev, llm, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 11,
      "author": "jamesrandall"
    },
    {
      "title": "Questions about building multimodal agents? The Google team might just have an answer for you!",
      "description": "Each week, we collect community questions for the team at Google to answer on their weekly...",
      "url": "https://dev.to/devteam/questions-about-building-multimodal-agents-the-google-team-might-just-have-an-answer-for-you-e1j",
      "tags": "discuss, agents, ai, gemini",
      "reactions": 11,
      "comments": 0,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Why Shift+Enter doesn't work in Claude Code (and how to fix it)",
      "description": "TL;DR    Enable the Kitty keyboard protocol in your terminal (WezTerm: add...",
      "url": "https://dev.to/richardbray/why-shiftenter-doesnt-work-in-claude-code-and-how-to-fix-it-10f7",
      "tags": "claudecode, terminal, wezterm, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "richardbray"
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
      "title": "I built a water reminder plugin for JetBrains and VS Code — here's how and why",
      "description": "I built a water reminder plugin for JetBrains and VS Code            The problem   I spend...",
      "url": "https://dev.to/f3dc4r/i-built-a-water-reminder-plugin-for-jetbrains-and-vs-code-heres-how-and-why-1ac9",
      "tags": "webdev, vscode, opensource, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "f3dc4r"
    },
    {
      "title": "Nobody Is Reading Your Blog Post. They Weren't Going To Read Mine Either.",
      "description": "I was building a slide deck last week... technical content, thoughtful structure, a solid wall of...",
      "url": "https://dev.to/evanlausier/nobody-is-reading-your-blog-post-they-werent-going-to-read-mine-either-42j8",
      "tags": "ai, productivity, writing, discuss",
      "reactions": 8,
      "comments": 3,
      "reading_time": 3,
      "author": "evanlausier"
    },
    {
      "title": "Why Shift+Enter doesn't work in Claude Code (and how to fix it)",
      "description": "TL;DR    Enable the Kitty keyboard protocol in your terminal (WezTerm: add...",
      "url": "https://dev.to/richardbray/why-shiftenter-doesnt-work-in-claude-code-and-how-to-fix-it-10f7",
      "tags": "claudecode, terminal, wezterm, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "richardbray"
    },
    {
      "title": "I Submitted to a Mistral Hackathon at 10pm. My Agent Built the App While I Slept.",
      "description": "The Mistral Worldwide Hackathon announcement showed up in my feed sometime last week. Deadline:...",
      "url": "https://dev.to/joozio/i-submitted-to-a-mistral-hackathon-at-10pm-my-agent-built-the-app-while-i-slept-3fd3",
      "tags": "ai, automation, programming, productivity",
      "reactions": 5,
      "comments": 1,
      "reading_time": 2,
      "author": "joozio"
    },
    {
      "title": "Mistral Made Me Feel Like It Was 2024 Again. Not in a Good Way.",
      "description": "I just submitted the Mistral hackathon.  A few hours ago. I built something, shipped something, and...",
      "url": "https://dev.to/joozio/mistral-made-me-feel-like-it-was-2024-again-not-in-a-good-way-13ap",
      "tags": "ai, programming, machinelearning, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "joozio"
    },
    {
      "title": "Stop asking AI to \"build your app\"",
      "description": "Repo URL Website Version of the Repo  I think a lot of people are using AI coding tools in the worst...",
      "url": "https://dev.to/khazp/stop-asking-ai-to-build-your-app-42jj",
      "tags": "ai, webdev, productivity, startup",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "khazp"
    },
    {
      "title": "Why I Built AngryToPolite after Years of Email Regret",
      "description": "Introduction   As developers, we've all been there - hitting send on an email, only to...",
      "url": "https://dev.to/crawde/why-i-built-angrytopolite-after-years-of-email-regret-33b7",
      "tags": "productivity, ai, communication, tools",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "crawde"
    },
    {
      "title": "I built a mobile app to control Claude Code and Codex from my phone",
      "description": "I use Claude Code and Codex CLI for most of my side projects. The problem? Every time the agent needs...",
      "url": "https://dev.to/k9i/i-built-a-mobile-app-to-control-claude-code-and-codex-from-my-phone-4d84",
      "tags": "claudecode, opensource, flutter, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "k9i"
    },
    {
      "title": "Stop Using One AI Model for Everything!",
      "description": "Every time a new model drops, the internet loses it.    \"INSANE.\" \"This changes everything.\" \"Goodbye...",
      "url": "https://dev.to/camb/stop-using-one-ai-model-for-everything-3a4i",
      "tags": "ai, webdev, productivity, discuss",
      "reactions": 5,
      "comments": 0,
      "reading_time": 4,
      "author": "camb"
    },
    {
      "title": "I Built 35 Free CLI Tools for Claude Code -- Here's What Each One Does",
      "description": "I run Claude Code around the clock. Literally -- tmux session, autonomous loop, 24/7.  After 60 days...",
      "url": "https://dev.to/yurukusa/i-built-35-free-cli-tools-for-claude-code-heres-what-each-one-does-387m",
      "tags": "claudecode, productivity, opensource, cli",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "yurukusa"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
```

