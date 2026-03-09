# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-09 07:17:10 UTC

Runtime note: executed with NODE_OPTIONS=--require /tmp/hf-polyfill.js

## 1. Hot Content Themes Today

**Query:** What content themes are hot today?

**Command:**
```bash
echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set' ; node bin/main.js --json reddit -t popular -s hot ; node bin/main.js --json devto -s top -c 10
```

**Output:**
```text
[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
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

## 2. This Week AI + Web Content Ideas

**Query:** What should I make a video/post about this week in AI + web?

**Command:**
```bash
node bin/main.js --json github -s weekly -l javascript ; node bin/main.js --json devto -t ai -s top -c 10 ; node bin/main.js --json news -t 10
```

**Output:**
```text
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
- Fetching feeds...
{
  "source": "devto",
  "tag": "ai",
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
      "title": "Your AI Agent Has Amnesia. And You Designed It That Way.",
      "description": "__Every LLM call starts from nothing. No memory of what worked yesterday. No record of what failed...",
      "url": "https://dev.to/tfatykhov/your-ai-agent-has-amnesia-and-you-designed-it-that-way-pf8",
      "tags": "ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "tfatykhov"
    },
    {
      "title": "PremAI Python SDK Quickstart: Complete Guide (2026)",
      "description": "Most AI SDKs make you choose: easy development or data privacy. Use OpenAI's SDK and your data flows through their servers. Self-host everything and you're writing infrastructure code instead of features.\n\nPremAI's Python SDK offers a different path: an OpenAI-like development experience where your ",
      "url": "https://dev.to/jaipalsingh/premai-python-sdk-quickstart-complete-guide-2026-3gek",
      "tags": "ai, python, tutorial, beginners",
      "reactions": 1,
      "comments": 0,
      "reading_time": 14,
      "author": "jaipalsingh"
    },
    {
      "title": "Auto-Remediation: What If Your Monitoring System Could Fix Things?",
      "description": "The Broken Loop   Here's how incident response works at most organizations:   Monitoring...",
      "url": "https://dev.to/linchuang/auto-remediation-what-if-your-monitoring-system-could-fix-things-cdj",
      "tags": "devops, monitoring, ai, opensource",
      "reactions": 1,
      "comments": 2,
      "reading_time": 3,
      "author": "linchuang"
    },
    {
      "title": "Mapstr is a blazing-fast CLI that maps ANY codebase instantly:\r\n✅ Tree-sitter parsing (50+ langs)\r\n✅ Mermaid diagrams + CONTEXT.md \r\n✅ LLM summaries (Claude/Groq/OpenAI)\r\n✅ Cost tracking & JSON export",
      "description": "AI CLI That Maps Your Codebase (No Reading Required)       TAHA...",
      "url": "https://dev.to/tahaba/mapstr-is-a-blazing-fast-cli-that-maps-any-codebase-instantly-tree-sitter-parsing-50-langs-3j41",
      "tags": "webdev, vibecoding, cli, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "tahaba"
    },
    {
      "title": "How I Built a $58K GMV Yacht Marketplace and a MedTech AI in 6 Weeks: An AI-Augmented Architecture Deep Dive",
      "description": "The term \"vibecoder\" is often used as an insult, implying a lack of fundamental knowledge. However,...",
      "url": "https://dev.to/grekcreator/how-i-built-a-58k-gmv-yacht-marketplace-and-a-medtech-ai-in-6-weeks-an-ai-augmented-architecture-53m1",
      "tags": "python, ai, architecture, webdev",
      "reactions": 1,
      "comments": 1,
      "reading_time": 2,
      "author": "grekcreator"
    },
    {
      "title": "Indexing Knowledge Base Content with Spring Boot and pgvector",
      "description": "In the previous article, we configured PostgreSQL as a vector database using pgvector.  But a vector...",
      "url": "https://dev.to/allan_roberto_3c86dab9d94/indexing-knowledge-base-content-with-spring-boot-and-pgvector-1op1",
      "tags": "ai, java, springboot, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "allan_roberto_3c86dab9d94"
    },
    {
      "title": "Building Production RAG Pipelines on AWS with Bedrock and OpenSearch",
      "description": "RAG (Retrieval-Augmented Generation) is how enterprises are deploying LLMs without fine-tuning. But...",
      "url": "https://dev.to/kogunlowo123/building-production-rag-pipelines-on-aws-with-bedrock-and-opensearch-o01",
      "tags": "ai, aws, python, machinelearning",
      "reactions": 2,
      "comments": 1,
      "reading_time": 2,
      "author": "kogunlowo123"
    },
    {
      "title": "Transformer - Encoder Deep Dive - Part 3: What is Self-Attention",
      "description": "Recap     Embedding: \"The\", \"dog\", \"bit\", \"the\", \"man\" each have a unique semantic...",
      "url": "https://dev.to/iamyuvaraj/transformer-encoder-deep-dive-part-3-what-is-self-attention-1aen",
      "tags": "ai, architecture, machinelearning, deeplearning",
      "reactions": 2,
      "comments": 0,
      "reading_time": 9,
      "author": "iamyuvaraj"
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
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "dryadin",
      "descendants": 20,
      "id": 47305461,
      "kids": [
        47305728,
        47305596,
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
      "score": 61,
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
      "descendants": 361,
      "id": 47303111,
      "kids": [
        47305705,
        47303797,
        47305694,
        47305395,
        47303844,
        47305668,
        47305654,
        47305348,
        47305675,
        47304306,
        47304600,
        47305698,
        47305676,
        47305594,
        47305593,
        47305601,
        47305658,
        47303653,
        47305551,
        47305603,
        47303576,
        47304398,
        47305036,
        47305627,
        47305324,
        47304913,
        47304947,
        47305407,
        47305516,
        47305628,
        47305273,
        47305544,
        47304930,
        47305413,
        47305403,
        47305126,
        47305327,
        47304343,
        47304847,
        47305521,
        47304661,
        47303213,
        47305367,
        47303683,
        47304863,
        47303682,
        47303875,
        47305041,
        47305391,
        47304536,
        47303773,
        47305438,
        47305539,
        47305098,
        47304875,
        47304621,
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
        47305363,
        47304942,
        47303927,
        47305065,
        47305223,
        47303484,
        47305378,
        47305401,
        47304113,
        47305379,
        47305308,
        47304681,
        47304962,
        47304476,
        47304556,
        47303387,
        47304235,
        47304265,
        47304891,
        47304617,
        47305679,
        47304660,
        47305035,
        47303742,
        47304054,
        47304752,
        47303707,
        47303458,
        47305159,
        47305325,
        47305143,
        47305200,
        47305104,
        47305440,
        47304550,
        47304836,
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
        47305263,
        47305028,
        47304533,
        47305099,
        47304910,
        47304492,
        47305226,
        47304057,
        47305322,
        47304389,
        47304948,
        47304884,
        47303501,
        47304830,
        47304824,
        47304215,
        47305120,
        47304285,
        47304488,
        47304933,
        47303549,
        47303406,
        47304767,
        47303500,
        47304511,
        47304949,
        47304817,
        47304970,
        47304455,
        47303703,
        47303410,
        47303734,
        47303945,
        47304144,
        47304995,
        47305010,
        47304497,
        47305047,
        47305394,
        47304367,
        47304544,
        47304551,
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
        47304983,
        47303644,
        47303767,
        47303818,
        47303374,
        47304115,
        47304885,
        47303868,
        47305016,
        47304478,
        47304864,
        47304038,
        47304390,
        47303846,
        47304973,
        47303909,
        47303930,
        47304633,
        47305613,
        47303924,
        47303659,
        47304856,
        47303206,
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
        47304229,
        47304181,
        47304205,
        47303956,
        47304496,
        47305555,
        47303762,
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
        47304787,
        47304439,
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
        47305605,
        47304959,
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
```

## 3. Product Launches to Review/React

**Query:** What products launched that I can review or react to?

**Command:**
```bash
echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set' ; node bin/main.js --json reddit -t startups -s new
```

**Output:**
```text
[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
```

## 4. Current Tech Debate Talking Points

**Query:** What talking points are tech people debating right now?

**Command:**
```bash
node bin/main.js --json news -t 12 ; node bin/main.js --json lobsters -s hottest -c 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "dryadin",
      "descendants": 20,
      "id": 47305461,
      "kids": [
        47305728,
        47305596,
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
      "score": 61,
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
      "descendants": 361,
      "id": 47303111,
      "kids": [
        47305705,
        47303797,
        47305694,
        47305395,
        47303844,
        47305668,
        47305654,
        47305348,
        47305675,
        47304306,
        47304600,
        47305698,
        47305676,
        47305594,
        47305593,
        47305601,
        47305658,
        47303653,
        47305551,
        47305603,
        47303576,
        47304398,
        47305036,
        47305627,
        47305324,
        47304913,
        47304947,
        47305407,
        47305516,
        47305628,
        47305273,
        47305544,
        47304930,
        47305413,
        47305403,
        47305126,
        47305327,
        47304343,
        47304847,
        47305521,
        47304661,
        47303213,
        47305367,
        47303683,
        47304863,
        47303682,
        47303875,
        47305041,
        47305391,
        47304536,
        47303773,
        47305438,
        47305539,
        47305098,
        47304875,
        47304621,
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
        47305363,
        47304942,
        47303927,
        47305065,
        47305223,
        47303484,
        47305378,
        47305401,
        47304113,
        47305379,
        47305308,
        47304681,
        47304962,
        47304476,
        47304556,
        47303387,
        47304235,
        47304265,
        47304891,
        47304617,
        47305679,
        47304660,
        47305035,
        47303742,
        47304054,
        47304752,
        47303707,
        47303458,
        47305159,
        47305325,
        47305143,
        47305200,
        47305104,
        47305440,
        47304550,
        47304836,
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
        47305263,
        47305028,
        47304533,
        47305099,
        47304910,
        47304492,
        47305226,
        47304057,
        47305322,
        47304389,
        47304948,
        47304884,
        47303501,
        47304830,
        47304824,
        47304215,
        47305120,
        47304285,
        47304488,
        47304933,
        47303549,
        47303406,
        47304767,
        47303500,
        47304511,
        47304949,
        47304817,
        47304970,
        47304455,
        47303703,
        47303410,
        47303734,
        47303945,
        47304144,
        47304995,
        47305010,
        47304497,
        47305047,
        47305394,
        47304367,
        47304544,
        47304551,
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
        47304983,
        47303644,
        47303767,
        47303818,
        47303374,
        47304115,
        47304885,
        47303868,
        47305016,
        47304478,
        47304864,
        47304038,
        47304390,
        47303846,
        47304973,
        47303909,
        47303930,
        47304633,
        47305613,
        47303924,
        47303659,
        47304856,
        47303206,
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
        47304229,
        47304181,
        47304205,
        47303956,
        47304496,
        47305555,
        47303762,
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
        47304787,
        47304439,
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
        47305605,
        47304959,
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
    },
    {
      "by": "medbar",
      "descendants": 15,
      "id": 47302463,
      "kids": [
        47305722,
        47303254,
        47304416,
        47303109,
        47304082
      ],
      "score": 67,
      "time": 1773010255,
      "title": "Linux Internals: How /proc/self/mem writes to unwritable memory (2021)",
      "type": "story",
      "url": "https://offlinemark.com/an-obscure-quirk-of-proc/"
    },
    {
      "by": "photon_collider",
      "descendants": 143,
      "id": 47298743,
      "kids": [
        47299256,
        47305463,
        47299376,
        47299441,
        47304301,
        47299270,
        47300257,
        47302510,
        47301101,
        47300323,
        47304124,
        47302052,
        47298843,
        47304429,
        47302714,
        47299547,
        47301613,
        47299123,
        47299860,
        47303092,
        47304370,
        47299298,
        47299145,
        47299644,
        47300568,
        47305652,
        47299340
      ],
      "score": 208,
      "time": 1772988370,
      "title": "My Homelab Setup",
      "type": "story",
      "url": "https://bryananthonio.com/blog/my-homelab-setup/"
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
      "comments": 44,
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
    },
    {
      "title": "LibreOffice Writer now supports Markdown",
      "url": "https://blog.documentfoundation.org/blog/2026/02/04/libreoffice-26-2-is-here/",
      "score": 25,
      "comments": 3,
      "tags": [
        "release"
      ],
      "id": "brz5mw"
    },
    {
      "title": "WebPKI and You",
      "url": "https://blog.brycekerley.net/2026/03/08/webpki-and-you.html",
      "score": 7,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "wevip9"
    }
  ]
}
```

