# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-03-09 07:17:10 UTC

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
      "forks": 146,
      "added_stars": 707,
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
      "forks": 697,
      "added_stars": 160,
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
      "forks": 2673,
      "added_stars": 1262,
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
      "author": "datawhalechina",
      "repo": "easy-vibe",
      "avatar": "https://github.com/datawhalechina.png",
      "repo_link": "https://github.com/datawhalechina/easy-vibe",
      "desc": "easy vibe 一起 vibe ! Learn Vibe Coding From 0 to 1 ｜ Vibe Coding 零基础教程 ｜ 产品原型、AI 能力集成、前后端开发、多平台应用开发教程 ｜ Tutorial on Product Prototype, AI Capability Integration, Frontend and Backend Development, and Multi-platform Application Development",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 313,
      "added_stars": 466,
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
      "forks": 5775,
      "added_stars": 303,
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
      "author": "expo",
      "repo": "skills",
      "avatar": "https://github.com/expo.png",
      "repo_link": "https://github.com/expo/skills",
      "desc": "A collection of AI agent skills for working with Expo projects and Expo Application Services",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 61,
      "added_stars": 126,
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
      "author": "aandrew-me",
      "repo": "ytDownloader",
      "avatar": "https://github.com/aandrew-me.png",
      "repo_link": "https://github.com/aandrew-me/ytDownloader",
      "desc": "Desktop App for downloading Videos and Audios from hundreds of sites",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 742,
      "added_stars": 328,
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
      "author": "Wei-Shaw",
      "repo": "claude-relay-service",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/claude-relay-service",
      "desc": "CRS-自建Claude Code镜像，一站式开源中转服务，让 Claude、OpenAI、Gemini、Droid 订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1434,
      "added_stars": 398,
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
      "author": "SillyTavern",
      "repo": "SillyTavern",
      "avatar": "https://github.com/SillyTavern.png",
      "repo_link": "https://github.com/SillyTavern/SillyTavern",
      "desc": "LLM Frontend for Power Users.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4870,
      "added_stars": 366,
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
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2259,
      "added_stars": 3622,
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
      "author": "usebruno",
      "repo": "bruno",
      "avatar": "https://github.com/usebruno.png",
      "repo_link": "https://github.com/usebruno/bruno",
      "desc": "Opensource IDE For Exploring and Testing API's (lightweight alternative to Postman/Insomnia)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2176,
      "added_stars": 337,
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
      "author": "Mintplex-Labs",
      "repo": "anything-llm",
      "avatar": "https://github.com/Mintplex-Labs.png",
      "repo_link": "https://github.com/Mintplex-Labs/anything-llm",
      "desc": "The all-in-one AI productivity accelerator. On device and privacy first with no annoying setup or configration.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6043,
      "added_stars": 715,
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
      "by": "dryadin",
      "descendants": 21,
      "id": 47305461,
      "kids": [
        47305742,
        47305596,
        47305728,
        47305597,
        47305609,
        47305592,
        47305557,
        47305513,
        47305672,
        47305575,
        47305549,
        47305589,
        47305543,
        47305617
      ],
      "score": 62,
      "time": 1773037682,
      "title": "US Court of Appeals: TOS may be updated by email, use can imply consent [pdf]",
      "type": "story",
      "url": "https://cdn.ca9.uscourts.gov/datastore/memoranda/2026/03/03/25-403.pdf"
    },
    {
      "by": "atombender",
      "descendants": 120,
      "id": 47301085,
      "kids": [
        47301472,
        47304797,
        47303325,
        47302296,
        47301342,
        47305685,
        47302271,
        47304433,
        47303248,
        47302154,
        47303052,
        47305005,
        47301969,
        47305455,
        47304201,
        47304693,
        47301338,
        47305067,
        47303435,
        47305271,
        47303616,
        47301978,
        47302973,
        47303721,
        47303238,
        47303597,
        47304303,
        47303088,
        47304297,
        47303914,
        47302180,
        47301363,
        47303840,
        47305037,
        47302076,
        47303009,
        47302547,
        47305133,
        47304438,
        47302806,
        47301554,
        47302097,
        47303882,
        47302593
      ],
      "score": 524,
      "time": 1773001818,
      "title": "Agent Safehouse – macOS-native sandboxing for local agents",
      "type": "story",
      "url": "https://agent-safehouse.dev/"
    },
    {
      "by": "zdw",
      "descendants": 40,
      "id": 47291876,
      "kids": [
        47301471,
        47304776,
        47305253,
        47302362,
        47302253,
        47302868,
        47302085,
        47302548,
        47302302,
        47303346,
        47304234,
        47303537,
        47304320
      ],
      "score": 382,
      "time": 1772921017,
      "title": "Microscopes can see video on a laserdisc",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=qZuR-772cks"
    },
    {
      "by": "zachlatta",
      "descendants": 25,
      "id": 47294582,
      "kids": [
        47304579,
        47305611,
        47305243,
        47305197,
        47303538,
        47303578,
        47303289,
        47304765,
        47303634,
        47304207
      ],
      "score": 142,
      "time": 1772946254,
      "title": "PCB devboard the size of a USB-C plug",
      "type": "story",
      "url": "https://github.com/Dieu-de-l-elec/AngstromIO-devboard"
    },
    {
      "by": "horseradish",
      "descendants": 123,
      "id": 47300747,
      "kids": [
        47302932,
        47302739,
        47301689,
        47301681,
        47302081,
        47302162,
        47301804,
        47305241,
        47304522,
        47304595,
        47304442,
        47301788,
        47302604,
        47303333,
        47301712,
        47304096,
        47302767,
        47303967,
        47304423,
        47302709,
        47303898,
        47301980,
        47302823,
        47303900,
        47303569,
        47304280,
        47303386,
        47301963,
        47300819,
        47302161,
        47301717,
        47303171,
        47302325,
        47302257,
        47302078,
        47302810,
        47305383,
        47305137,
        47304443,
        47302877,
        47302809,
        47302129
      ],
      "score": 213,
      "time": 1772999895,
      "title": "We should revisit literate programming in the agent era",
      "type": "story",
      "url": "https://silly.business/blog/we-should-revisit-literate-programming-in-the-agent-era/"
    },
    {
      "by": "david927",
      "descendants": 362,
      "id": 47303111,
      "kids": [
        47305743,
        47305747,
        47303797,
        47305705,
        47305395,
        47305694,
        47303844,
        47305348,
        47305668,
        47305654,
        47304306,
        47305675,
        47304600,
        47305676,
        47305594,
        47305698,
        47305593,
        47305601,
        47303653,
        47305658,
        47303576,
        47304398,
        47305551,
        47305603,
        47305036,
        47305627,
        47305324,
        47304913,
        47304947,
        47305407,
        47305516,
        47305273,
        47305628,
        47304930,
        47305544,
        47305413,
        47305126,
        47305403,
        47305327,
        47304343,
        47304847,
        47304661,
        47305521,
        47303213,
        47305367,
        47303683,
        47304863,
        47303682,
        47303875,
        47305041,
        47304536,
        47305391,
        47303773,
        47305438,
        47305098,
        47305539,
        47304621,
        47304875,
        47305023,
        47305251,
        47304514,
        47305343,
        47305163,
        47304719,
        47304827,
        47304199,
        47303886,
        47305350,
        47303927,
        47304942,
        47305363,
        47305065,
        47305223,
        47303484,
        47305378,
        47305401,
        47304113,
        47305379,
        47305308,
        47304681,
        47304476,
        47304962,
        47304556,
        47303387,
        47304235,
        47304265,
        47304891,
        47304617,
        47304660,
        47305035,
        47303742,
        47304054,
        47304752,
        47303707,
        47303458,
        47305159,
        47305679,
        47305325,
        47305143,
        47305200,
        47305104,
        47304550,
        47304836,
        47305440,
        47304683,
        47304812,
        47305146,
        47304564,
        47305179,
        47305235,
        47303611,
        47305055,
        47304953,
        47304759,
        47304997,
        47305087,
        47305028,
        47304533,
        47305263,
        47305099,
        47304910,
        47304492,
        47304057,
        47305226,
        47305322,
        47304389,
        47304948,
        47304884,
        47303501,
        47304830,
        47304215,
        47304824,
        47304285,
        47305120,
        47304488,
        47304933,
        47303549,
        47303406,
        47303500,
        47304767,
        47304511,
        47304949,
        47304817,
        47304455,
        47304970,
        47303703,
        47303410,
        47303734,
        47303945,
        47304144,
        47304995,
        47305010,
        47304497,
        47305047,
        47304367,
        47304544,
        47304551,
        47305394,
        47303920,
        47303919,
        47304080,
        47303592,
        47304541,
        47303869,
        47304278,
        47304015,
        47303989,
        47304294,
        47304362,
        47303644,
        47304983,
        47303767,
        47303818,
        47303374,
        47304115,
        47303868,
        47304885,
        47305016,
        47304478,
        47304038,
        47304864,
        47304390,
        47303846,
        47303909,
        47304973,
        47303930,
        47304633,
        47303924,
        47303659,
        47304856,
        47303206,
        47305613,
        47303713,
        47303298,
        47303617,
        47303888,
        47304819,
        47304813,
        47304279,
        47303485,
        47303770,
        47303765,
        47304677,
        47303529,
        47304284,
        47303613,
        47304918,
        47304137,
        47305090,
        47303816,
        47304028,
        47304437,
        47304121,
        47304227,
        47304561,
        47304209,
        47303441,
        47303985,
        47304220,
        47303577,
        47304491,
        47304181,
        47304229,
        47304205,
        47303956,
        47304496,
        47303762,
        47305555,
        47304018,
        47303572,
        47303602,
        47304005,
        47304445,
        47304519,
        47303587,
        47303595,
        47303489,
        47303995,
        47303383,
        47304474,
        47303442,
        47304004,
        47303547,
        47304465,
        47304463,
        47303640,
        47303391,
        47303947,
        47304439,
        47304787,
        47303871,
        47304102,
        47303480,
        47305315,
        47304688,
        47305116,
        47303786,
        47303651,
        47303877,
        47303525,
        47305231,
        47303743,
        47304967,
        47305145,
        47303708,
        47304384,
        47305014,
        47304188,
        47304312,
        47304041,
        47303977,
        47304780,
        47304479,
        47304232,
        47304386,
        47303984,
        47304180,
        47303599,
        47305321,
        47305196,
        47304855,
        47303477,
        47304366,
        47305304,
        47303553,
        47304852
      ],
      "score": 114,
      "text": "What are you working on?  Any new ideas that you&#x27;re thinking about?",
      "time": 1773014838,
      "title": "Ask HN: What Are You Working On? (March 2026)",
      "type": "story"
    },
    {
      "by": "speckx",
      "descendants": 42,
      "id": 47260812,
      "kids": [
        47301765,
        47303300,
        47301720,
        47301662,
        47303056,
        47301996,
        47302349,
        47301900,
        47302373
      ],
      "score": 146,
      "time": 1772713450,
      "title": "Every single board computer I tested in 2025",
      "type": "story",
      "url": "https://bret.dk/every-single-board-computer-i-tested-in-2025/"
    },
    {
      "by": "knowsuchagency",
      "descendants": 2,
      "id": 47305149,
      "kids": [
        47305737,
        47305723,
        47305735
      ],
      "score": 10,
      "text": "Every MCP server injects its full tool schemas into context on every turn — 30 tools costs ~3,600 tokens&#x2F;turn whether the model uses them or not. Over 25 turns with 120 tools, that&#x27;s 362,000 tokens just for schemas.<p>mcp2cli turns any MCP server or OpenAPI spec into a CLI at runtime. The LLM discovers tools on demand:<p><pre><code>    mcp2cli --mcp https:&#x2F;&#x2F;mcp.example.com&#x2F;sse --list             # ~16 tokens&#x2F;tool\n    mcp2cli --mcp https:&#x2F;&#x2F;mcp.example.com&#x2F;sse create-task --help  # ~120 tokens, once\n    mcp2cli --mcp https:&#x2F;&#x2F;mcp.example.com&#x2F;sse create-task --title &quot;Fix bug&quot;\n</code></pre>\nNo codegen, no rebuild when the server changes. Works with any LLM — it&#x27;s just a CLI the model shells out to. Also handles OpenAPI specs (JSON&#x2F;YAML, local or remote) with the same interface.<p>Token savings are real, measured with cl100k_base: 96% for 30 tools over 15 turns, 99% for 120 tools over 25 turns.<p>It also ships as an installable skill for AI coding agents (Claude Code, Cursor, Codex): `npx skills add knowsuchagency&#x2F;mcp2cli --skill mcp2cli`<p>Inspired by Kagan Yilmaz&#x27;s CLI vs MCP analysis and CLIHub.<p><a href=\"https:&#x2F;&#x2F;github.com&#x2F;knowsuchagency&#x2F;mcp2cli\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;knowsuchagency&#x2F;mcp2cli</a>",
      "time": 1773033526,
      "title": "Show HN: Mcp2cli – One CLI for every API, 96-99% fewer tokens than native MCP",
      "type": "story",
      "url": "https://github.com/knowsuchagency/mcp2cli"
    },
    {
      "by": "todsacerdoti",
      "descendants": 68,
      "id": 47298044,
      "kids": [
        47305153,
        47299509,
        47298329,
        47300651,
        47301379,
        47298277,
        47300437,
        47298455,
        47299991,
        47298319,
        47305084,
        47299337,
        47301936,
        47298316,
        47299751,
        47304315,
        47301772,
        47298417,
        47298710,
        47301565,
        47299255,
        47298971,
        47301008,
        47302980,
        47298774,
        47302306,
        47300457
      ],
      "score": 400,
      "time": 1772983269,
      "title": "FrameBook",
      "type": "story",
      "url": "https://fb.edoo.gg"
    },
    {
      "by": "jruohonen",
      "descendants": 40,
      "id": 47304886,
      "kids": [
        47305588,
        47305115,
        47305707,
        47305449,
        47305445,
        47304959,
        47305605,
        47305261,
        47305388,
        47305073,
        47305123,
        47305074,
        47305057,
        47305264,
        47305171,
        47305095,
        47305105
      ],
      "score": 78,
      "time": 1773030479,
      "title": "The death of social media is the renaissance of RSS (2025)",
      "type": "story",
      "url": "https://www.smartlab.at/rss-revival-life-after-social-media/"
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
      "title": "Lightweight protocol to assert authorship of content and vouch for humanity of others",
      "url": "https://codeberg.org/robida/human.json",
      "score": 45,
      "comments": 19,
      "tags": [
        "ai",
        "show",
        "web"
      ],
      "id": "j17fxk"
    },
    {
      "title": "Put the ZIP code first",
      "url": "https://zipcodefirst.com/",
      "score": 58,
      "comments": 45,
      "tags": [
        "a11y",
        "web"
      ],
      "id": "kgpyat"
    },
    {
      "title": "FrameBook",
      "url": "https://fb.edoo.gg",
      "score": 58,
      "comments": 1,
      "tags": [
        "hardware"
      ],
      "id": "9thupi"
    },
    {
      "title": "Impressions from Mozilla 1.2b (2002)",
      "url": "https://movq.de/blog/postings/2026-03-08/0/POSTING-en.html",
      "score": 20,
      "comments": 13,
      "tags": [
        "browsers",
        "historical"
      ],
      "id": "e72lgq"
    },
    {
      "title": "z80-sans: OpenType font that disassembles Z80 instructions",
      "url": "https://github.com/nevesnunes/z80-sans",
      "score": 23,
      "comments": 0,
      "tags": [
        "assembly"
      ],
      "id": "hbybe3"
    },
    {
      "title": "Blocking HTTP1.1",
      "url": "https://sheep.horse/2026/3/blocking_http1.1_-_some_results.html",
      "score": 15,
      "comments": 16,
      "tags": [
        "networking"
      ],
      "id": "exxoe2"
    },
    {
      "title": "GNU and the AI reimplementations",
      "url": "https://antirez.com/news/162",
      "score": 16,
      "comments": 20,
      "tags": [
        "law",
        "vibecoding"
      ],
      "id": "ooandv"
    },
    {
      "title": "Thinnings: Sublist Witnesses and de Bruijn Index Shift Clumping",
      "url": "https://www.philipzucker.com/thin1/",
      "score": 5,
      "comments": 0,
      "tags": [
        "formalmethods",
        "plt"
      ],
      "id": "kefmyt"
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
      "forks": 373,
      "added_stars": 5302,
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
      "forks": 508,
      "added_stars": 7359,
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
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skills and subagents, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3089,
      "added_stars": 6282,
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
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "OpenSandbox is a general-purpose sandbox platform for AI applications, offering multi-language SDKs, unified sandbox APIs, and Docker/Kubernetes runtimes for scenarios like Coding Agents, GUI Agents, Agent Evaluation, AI Code Execution, and RL Training.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 518,
      "added_stars": 5821,
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
      "forks": 385,
      "added_stars": 3991,
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
      "author": "google",
      "repo": "langextract",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/langextract",
      "desc": "A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2310,
      "added_stars": 10002,
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
      "author": "databricks-solutions",
      "repo": "ai-dev-kit",
      "avatar": "https://github.com/databricks-solutions.png",
      "repo_link": "https://github.com/databricks-solutions/ai-dev-kit",
      "desc": "Databricks Toolkit for Coding Agents provided by Field Engineering",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 153,
      "added_stars": 636,
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
      "author": "Shubhamsaboo",
      "repo": "awesome-llm-apps",
      "avatar": "https://github.com/Shubhamsaboo.png",
      "repo_link": "https://github.com/Shubhamsaboo/awesome-llm-apps",
      "desc": "Collection of awesome LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and opensource models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 14675,
      "added_stars": 8347,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 830,
      "added_stars": 2292,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "169 production-ready skills & plugins for Claude Code, OpenAI Codex, and OpenClaw — engineering, marketing, product, compliance, C-level advisory, and more. Install via /plugin marketplace.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 371,
      "added_stars": 1061,
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
      "forks": 1457,
      "added_stars": 4182,
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1605,
      "added_stars": 6730,
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
      "author": "openai",
      "repo": "skills",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/skills",
      "desc": "Skills Catalog for Codex",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 753,
      "added_stars": 6356,
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
      "author": "anthropics",
      "repo": "claude-code-security-review",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-security-review",
      "desc": "An AI-powered security review GitHub Action using Claude to analyze code changes for security vulnerabilities.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 295,
      "added_stars": 692,
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
      "forks": 6262,
      "added_stars": 2821,
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
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2774,
      "added_stars": 3681,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
        }
      ]
    },
    {
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API for Google NotebookLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 493,
      "added_stars": 1744,
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
          "username": "wreuon",
          "href": "https://github.com/wreuon",
          "avatar": "https://avatars.githubusercontent.com/u/223056553"
        },
        {
          "username": "bravohenry",
          "href": "https://github.com/bravohenry",
          "avatar": "https://avatars.githubusercontent.com/u/84128702"
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
      "forks": 1726,
      "added_stars": 3776,
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
      "author": "taylorwilsdon",
      "repo": "google_workspace_mcp",
      "avatar": "https://github.com/taylorwilsdon.png",
      "repo_link": "https://github.com/taylorwilsdon/google_workspace_mcp",
      "desc": "Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search & Drive with AI - Comprehensive Google Workspace / G Suite MCP Server & CLI Tool",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 506,
      "added_stars": 414,
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
      "forks": 3068,
      "added_stars": 13833,
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
      "author": "openclaw",
      "repo": "openclaw",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/openclaw",
      "desc": "Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 54150,
      "added_stars": 106172,
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
          "username": "thewilloftheshadow",
          "href": "https://github.com/thewilloftheshadow",
          "avatar": "https://avatars.githubusercontent.com/u/35580099"
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
      "forks": 2263,
      "added_stars": 13206,
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
      "author": "KeygraphHQ",
      "repo": "shannon",
      "avatar": "https://github.com/KeygraphHQ.png",
      "repo_link": "https://github.com/KeygraphHQ/shannon",
      "desc": "Shannon Lite is a fully autonomous AI pentester for web apps and APIs. 96.15% (100/104 exploits) on a hint-free, source-aware variant of the XBOW benchmark.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3263,
      "added_stars": 21399,
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
      "author": "superset-sh",
      "repo": "superset",
      "avatar": "https://github.com/superset-sh.png",
      "repo_link": "https://github.com/superset-sh/superset",
      "desc": "IDE for the AI Agents Era - Run an army of Claude Code, Codex, etc. on your machine",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 383,
      "added_stars": 4374,
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
      "forks": 777,
      "added_stars": 6210,
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
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need - A nano Claude Code–like agent, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4432,
      "added_stars": 7115,
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
      "author": "openclaw",
      "repo": "clawhub",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/clawhub",
      "desc": "Skill Directory for OpenClaw",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 795,
      "added_stars": 3206,
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
      "author": "seerr-team",
      "repo": "seerr",
      "avatar": "https://github.com/seerr-team.png",
      "repo_link": "https://github.com/seerr-team/seerr",
      "desc": "Open-source media request and discovery manager for Jellyfin, Plex, and Emby.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 671,
      "added_stars": 1689,
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
      "author": "siteboon",
      "repo": "claudecodeui",
      "avatar": "https://github.com/siteboon.png",
      "repo_link": "https://github.com/siteboon/claudecodeui",
      "desc": "Use Claude Code, Cursor CLI or Codex on mobile and web with CloudCLI (aka Claude Code UI). CloudCLI is a free open source webui/GUI that helps you manage your Claude Code session and projects remotely",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1030,
      "added_stars": 2018,
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
      "author": "cloudflare",
      "repo": "agents",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/agents",
      "desc": "Build and deploy AI Agents on Cloudflare",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 449,
      "added_stars": 1360,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1649,
      "added_stars": 4669,
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
      "author": "virattt",
      "repo": "dexter",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/dexter",
      "desc": "An autonomous agent for deep financial research",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2121,
      "added_stars": 5134,
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
      "author": "farion1231",
      "repo": "cc-switch",
      "avatar": "https://github.com/farion1231.png",
      "repo_link": "https://github.com/farion1231/cc-switch",
      "desc": "A cross-platform desktop All-in-One assistant tool for Claude Code, Codex, OpenCode, openclaw & Gemini CLI.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1566,
      "added_stars": 8538,
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
      "author": "ItzCrazyKns",
      "repo": "Perplexica",
      "avatar": "https://github.com/ItzCrazyKns.png",
      "repo_link": "https://github.com/ItzCrazyKns/Perplexica",
      "desc": "Perplexica is an AI-powered answering engine.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3469,
      "added_stars": 3532,
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
      "author": "YishenTu",
      "repo": "claudian",
      "avatar": "https://github.com/YishenTu.png",
      "repo_link": "https://github.com/YishenTu/claudian",
      "desc": "An Obsidian plugin that embeds Claude Code as an AI collaborator in your vault",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 213,
      "added_stars": 1385,
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
      "forks": 171,
      "added_stars": 983,
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
      "forks": 1407,
      "added_stars": 5359,
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
      "title": "3 words worth a billion dollars: Drift to Determinism (DriDe)",
      "description": "I doubt I am the first to come up with this concept, but I am probably the first to name it.  Drift...",
      "url": "https://dev.to/grahamthedev/3-words-worth-a-billion-dollars-drift-to-determinism-dride-dej",
      "tags": "webdev, ai, automation, architecture",
      "reactions": 49,
      "comments": 27,
      "reading_time": 7,
      "author": "grahamthedev"
    },
    {
      "title": "Join the 2026 WeCoded Challenge and Celebrate Underrepresented Voices in Tech Through Writing & Frontend Art 🎨!",
      "description": "We’re excited to announce the launch of the 2026 WeCoded Challenge!  This year marks our ninth year...",
      "url": "https://dev.to/devteam/join-the-2026-wecoded-challenge-and-celebrate-underrepresented-voices-in-tech-through-writing--4828",
      "tags": "devchallenge, wecoded, frontend, career",
      "reactions": 100,
      "comments": 11,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "The Women Who Helped Me Grow as a Developer",
      "description": "Last night while reading articles on Dev.to, I realized how many amazing women I have learned from...",
      "url": "https://dev.to/konark_13/the-women-who-helped-me-grow-as-a-developer-40f6",
      "tags": "discuss, womenintech, learning, career",
      "reactions": 26,
      "comments": 8,
      "reading_time": 5,
      "author": "konark_13"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-1m96",
      "tags": "weeklyretro, discuss",
      "reactions": 54,
      "comments": 82,
      "reading_time": 1,
      "author": "jess"
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
      "title": "Advice I’d Send Back in Time: Technology in 2026 and Four Lessons for My High School Self",
      "description": "*Author context: This WeCoded 2026 post is a twist on a writing challenge Future did last year. This...",
      "url": "https://dev.to/theoriginalbpc/advice-id-send-back-in-time-technology-in-2026-and-four-lessons-for-my-high-school-self-2elj",
      "tags": "wecoded",
      "reactions": 30,
      "comments": 4,
      "reading_time": 8,
      "author": "theoriginalbpc"
    },
    {
      "title": "🏗️ Building a Clean Architecture API with Go, Ore, and SQLite",
      "description": "So you've been writing Go for a bit. Your main.go is growing. You've got a database call next to an...",
      "url": "https://dev.to/lilury/building-a-clean-architecture-api-with-go-ore-and-sqlite-4ilf",
      "tags": "go, ore, di, architecture",
      "reactions": 3,
      "comments": 0,
      "reading_time": 14,
      "author": "firas"
    },
    {
      "title": "Decisions, Decisions -- Thoughts on making architectural decisions",
      "description": "Architectural decisions shape codebases for years. Here are the principles I've developed over 25 years to make better ones — covering simplicity, vendor lock-in, reversibility, and total cost of ownership.",
      "url": "https://dev.to/alexandermchan/decisions-decisions-thoughts-on-making-architectural-decisions-2bol",
      "tags": "architecture, libraries, fullstack",
      "reactions": 2,
      "comments": 0,
      "reading_time": 7,
      "author": "alexandermchan"
    },
    {
      "title": "I Deleted Pinecone, Redis, and 400 Lines of Python. My RAG Pipeline Still Works.",
      "description": "I had 5 services running for a RAG pipeline. Turns out I only needed PostgreSQL. Here's the whole thing in SQL.",
      "url": "https://dev.to/zeybek/i-deleted-pinecone-redis-and-400-lines-of-python-my-rag-pipeline-still-works-5dh3",
      "tags": "postgres, ai, machinelearning, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "zeybek"
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
      "title": "I built a 56-language Telegram bot in 10 days, hit the marketing wall. Then Telegram shipped the same feature",
      "description": "Every side project has an origin story. Mine started with grocery shopping.  My wife sends me grocery...",
      "url": "https://dev.to/alex_238be592ca4b365382f1/i-built-a-56-language-telegram-bot-in-10-days-hit-the-marketing-wall-then-telegram-shipped-the-4l5i",
      "tags": "telegram, development, productivity, startup",
      "reactions": 7,
      "comments": 2,
      "reading_time": 5,
      "author": "alex_238be592ca4b365382f1"
    },
    {
      "title": "The Permission Creep Problem: Why AI Agents Accumulate Access They Were Never Meant to Have",
      "description": "The Permission Creep Problem   There's a pattern I see in almost every AI agent deployment...",
      "url": "https://dev.to/askpatrick/the-permission-creep-problem-why-ai-agents-accumulate-access-they-were-never-meant-to-have-48c",
      "tags": "ai, agents, devops, productivity",
      "reactions": 1,
      "comments": 2,
      "reading_time": 3,
      "author": "askpatrick"
    },
    {
      "title": "The Three-File Stack: How to Stop AI Agents from Drifting",
      "description": "The Three-File Stack: How to Stop AI Agents from Drifting   Most AI agent reliability...",
      "url": "https://dev.to/askpatrick/the-three-file-stack-how-to-stop-ai-agents-from-drifting-1k50",
      "tags": "ai, agents, productivity, tutorial",
      "reactions": 1,
      "comments": 1,
      "reading_time": 3,
      "author": "askpatrick"
    },
    {
      "title": "How to monitor Windows Server and SQL Server for $0 using SQL Planner.",
      "description": "As a DBA, I’ve always been frustrated by the \"monitoring tax.\" You either pay thousands of dollars...",
      "url": "https://dev.to/chandansqlexpert/how-to-monitor-windows-server-and-sql-server-for-0-using-sql-planner-kg",
      "tags": "sqlserver, servermonitor, monitoring, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "chandansqlexpert"
    },
    {
      "title": "The Exit Condition Pattern: How to Stop Your AI Agent at the Right Moment",
      "description": "Most AI agent problems are not about what the agent does. They are about when it stops.  I run five...",
      "url": "https://dev.to/askpatrick/the-exit-condition-pattern-how-to-stop-your-ai-agent-at-the-right-moment-4901",
      "tags": "ai, agents, productivity, llm",
      "reactions": 1,
      "comments": 1,
      "reading_time": 2,
      "author": "askpatrick"
    },
    {
      "title": "The Never List: The First Thing to Write Before Building an AI Agent",
      "description": "The Never List: The First Thing to Write Before Building an AI Agent   Every AI agent config...",
      "url": "https://dev.to/askpatrick/the-never-list-the-first-thing-to-write-before-building-an-ai-agent-mhk",
      "tags": "ai, agents, productivity, programming",
      "reactions": 1,
      "comments": 1,
      "reading_time": 3,
      "author": "askpatrick"
    },
    {
      "title": "I built a Symfony bundle that validates anything and everything.",
      "description": "TL;DR:   I created a bundle for request validation via JSON Schema because I was fed up with...",
      "url": "https://dev.to/outcomer/i-built-a-symfony-bundle-that-validates-anything-and-everything-4nah",
      "tags": "opensource, productivity, symfony, api",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "outcomer"
    },
    {
      "title": "Claude Code를 팀의 시니어 개발자로 만들기: .claude 디렉토리 설계 전략",
      "description": "배경 / 문제 상황   AI 코딩 도구를 사용하다 보면 한 가지 불만이 생긴다. 매번 같은 규칙을 알려줘야 한다는 것. \"Entity에는 반드시 comment를...",
      "url": "https://dev.to/artistrator/claude-codereul-timyi-sinieo-gaebaljaro-mandeulgi-claude-diregtori-seolgye-jeonryag-5cmo",
      "tags": "claudecode, ai, nestjs, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "artistrator"
    },
    {
      "title": "The Curation Rule: Why AI Agents Need to Forget More Than They Remember",
      "description": "Most teams building AI agents obsess over memory capacity.  How much context can the model hold? How...",
      "url": "https://dev.to/askpatrick/the-curation-rule-why-ai-agents-need-to-forget-more-than-they-remember-26j",
      "tags": "ai, machinelearning, productivity, programming",
      "reactions": 1,
      "comments": 1,
      "reading_time": 4,
      "author": "askpatrick"
    },
    {
      "title": "The Handoff Problem: Why Multi-Agent Systems Break at the Boundary",
      "description": "When an AI agent finishes its work and passes it to the next agent, something critical is lost: the...",
      "url": "https://dev.to/askpatrick/the-handoff-problem-why-multi-agent-systems-break-at-the-boundary-3mmf",
      "tags": "ai, agents, programming, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 3,
      "author": "askpatrick"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
```

