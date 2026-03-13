# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-13 07:12:22 UTC

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
- Fetching feeds...
{
  "source": "devto",
  "tag": "ai",
  "sort": "top",
  "items": [
    {
      "title": "Congrats to the GitHub Copilot CLI Challenge Winners!",
      "description": "The results are in! Thank you all so much for your patience as we reviewed over 400 submissions for...",
      "url": "https://dev.to/devteam/congrats-to-the-github-copilot-cli-challenge-winners-2240",
      "tags": "devchallenge, githubchallenge, cli, ai",
      "reactions": 146,
      "comments": 61,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Atlassian Fires 1,600 Engineers to Bet Everything on AI - The New Playbook",
      "description": "👆 Watch the 60-second breakdown above  Atlassian just laid off 10% of its global workforce —...",
      "url": "https://dev.to/tyson_cung/atlassian-fires-1600-engineers-to-bet-everything-on-ai-the-new-playbook-2nnp",
      "tags": "atlassian, ai, layoffs, engineering",
      "reactions": 1,
      "comments": 2,
      "reading_time": 3,
      "author": "tyson_cung"
    },
    {
      "title": "We Shipped Observation-Based Trust Scoring for AI Agents (With a Collaborator We Met Through Our Own Protocol)",
      "description": "Two days ago, an AI agent named Nanook found our project through a GitHub issue. They registered on...",
      "url": "https://dev.to/thenexusguard/we-shipped-observation-based-trust-scoring-for-ai-agents-with-a-collaborator-we-met-through-our-1i3o",
      "tags": "ai, security, python, trust",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "thenexusguard"
    },
    {
      "title": "The Internet Is Getting Quieter - Who Will Feed the Next Generation of AI?",
      "description": "Stack Overflow helped train the AI models that are now making it irrelevant. As developers solve problems privately with AI assistants, the public knowledge commons is quietly starving. This is an underrated problem.",
      "url": "https://dev.to/sag1v/the-internet-is-getting-quieter-who-will-feed-the-next-generation-of-ai-4bl1",
      "tags": "ai, knowledgesharing, stackoverflow, opinion",
      "reactions": 1,
      "comments": 1,
      "reading_time": 5,
      "author": "sag1v"
    },
    {
      "title": "Secure Gemini CLI for Cloud development",
      "description": "AI agents are a double-edged sword. You hear horror stories of autonomous tools deleting production...",
      "url": "https://dev.to/googleai/secure-gemini-cli-for-cloud-development-2mpe",
      "tags": "ai, gemini, devtool, coding",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "rsamborski"
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
      "title": "I Let AI Write to My Database (With Guardrails)🔬",
      "description": "Building Supascribe: a human-in-the-loop AI workflow where ChatGPT writes structured artifacts to Supabase with review safeguards.",
      "url": "https://dev.to/anchildress1/i-let-ai-write-to-my-database-with-guardrails-473o",
      "tags": "ai, database, devtools, discuss",
      "reactions": 3,
      "comments": 0,
      "reading_time": 5,
      "author": "anchildress1"
    },
    {
      "title": "How I Built an AI Chatbot Service for Small Businesses as a CS Student (And Launched It This Week)",
      "description": "I'm a 3rd-year Computer Science student and this week I launched my first real service. I wanted to...",
      "url": "https://dev.to/youssef_abobakr_014266134/how-i-built-an-ai-chatbot-service-for-small-businesses-as-a-cs-student-and-launched-it-this-week-3h57",
      "tags": "ai, python, webdev, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "youssef_abobakr_014266134"
    },
    {
      "title": "Claude 3.5 Sonnet Changed. My System Prompt Stopped Working. Here's What I Learned.",
      "description": "I've been building with Claude APIs since early 2025. Last month, I noticed something strange: my...",
      "url": "https://dev.to/clawgenesis/claude-35-sonnet-changed-my-system-prompt-stopped-working-heres-what-i-learned-nk",
      "tags": "claude, anthropic, llm, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "clawgenesis"
    },
    {
      "title": "Crazyrouter vs LiteLLM: Managed Gateway vs Self-Hosted Proxy (2026 Comparison)",
      "description": "Should you use a managed AI API gateway or self-host your own? I've used both Crazyrouter (managed)...",
      "url": "https://dev.to/xujfcn/crazyrouter-vs-litellm-managed-gateway-vs-self-hosted-proxy-2026-comparison-57gm",
      "tags": "ai, api, devops, comparison",
      "reactions": 1,
      "comments": 1,
      "reading_time": 3,
      "author": "xujfcn"
    }
  ]
}
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
      "score": 173,
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
        47361310,
        47352261,
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
        47360361,
        47355366,
        47353905,
        47356620,
        47353636,
        47354287,
        47353585,
        47354837,
        47352128,
        47359770,
        47359669,
        47351203,
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
      "score": 1185,
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
        47361308,
        47357572,
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
        47361102,
        47357426,
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
        47361200,
        47360345,
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
      "score": 1157,
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
      "score": 173,
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
        47361310,
        47352261,
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
        47360361,
        47355366,
        47353905,
        47356620,
        47353636,
        47354287,
        47353585,
        47354837,
        47352128,
        47359770,
        47359669,
        47351203,
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
      "score": 1185,
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
        47361308,
        47357572,
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
        47361102,
        47357426,
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
        47361200,
        47360345,
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
      "score": 1157,
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
    },
    {
      "by": "valyala",
      "descendants": 3,
      "id": 47309940,
      "kids": [
        47359371
      ],
      "score": 86,
      "time": 1773068071,
      "title": "Understanding the Go Runtime: The Scheduler",
      "type": "story",
      "url": "https://internals-for-interns.com/posts/go-runtime-scheduler/"
    },
    {
      "by": "steerpike",
      "descendants": 6,
      "id": 47347977,
      "kids": [
        47361486,
        47361339,
        47361450,
        47347978,
        47361296
      ],
      "score": 23,
      "time": 1773304380,
      "title": "Celebrating Interesting Flickr Technologies",
      "type": "story",
      "url": "https://medium.com/@brightcarvings/celebrating-flickr-technology-3c93c8ddecc2"
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
    },
    {
      "title": "How Many Times Can a DVD±RW Be Rewritten?",
      "url": "https://goughlui.com/2026/03/07/tested-how-many-times-can-a-dvd%c2%b1rw-be-rewritten-part-2-methodology-results/",
      "score": 6,
      "comments": 0,
      "tags": [
        "hardware"
      ],
      "id": "jow6ea"
    },
    {
      "title": "Grief and the AI Split",
      "url": "https://blog.lmorchard.com/2026/03/11/grief-and-the-ai-split/",
      "score": 35,
      "comments": 9,
      "tags": [
        "vibecoding"
      ],
      "id": "wssz9m"
    }
  ]
}
```

