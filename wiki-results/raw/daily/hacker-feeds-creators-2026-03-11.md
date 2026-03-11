# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-11 07:11:48 UTC

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
      "reactions": 118,
      "comments": 49,
      "reading_time": 4,
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
      "title": "Why Our RAG System Was Silently Returning Wrong Answers — And How We Fixed It",
      "description": "For 3 days, our RAG system was confident.  Every query returned an answer. Response times were...",
      "url": "https://dev.to/ayanarshad02/why-our-rag-system-was-silently-returning-wrong-answers-and-how-we-fixed-it-386g",
      "tags": "genai, rag, ai, architecture",
      "reactions": 5,
      "comments": 1,
      "reading_time": 6,
      "author": "ayanarshad02"
    },
    {
      "title": "The Ephemerality Gap: Tackling Data Loss in AI-Generated UIs with an Open-Source Fix",
      "description": "I’m not a professional writer, and this is a relatively new problem space, so I’ll do my best to...",
      "url": "https://dev.to/bryton_cooper_4e4f5d12665/the-ephemerality-gap-tackling-data-loss-in-ai-generated-uis-with-an-open-source-fix-57e0",
      "tags": "ai, webdev, reactjsdevelopment, opensource",
      "reactions": 3,
      "comments": 0,
      "reading_time": 3,
      "author": "bryton_cooper_4e4f5d12665"
    },
    {
      "title": "duckflux — A Declarative Workflow DSL Born from the Multi-Agent Orchestration Gap",
      "description": "TL;DR: After months exploring multi-agent orchestration with OpenClaw and Lobster, I hit a wall: no...",
      "url": "https://dev.to/ggondim/duckflux-a-declarative-workflow-dsl-born-from-the-multi-agent-orchestration-gap-4n28",
      "tags": "ai, agents, openclaw, dsl",
      "reactions": 1,
      "comments": 0,
      "reading_time": 8,
      "author": "ggondim"
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
      "title": "notion-flows: Your Notion Pages Are Your Automation Code",
      "description": "I built a CLI tool that turns plain-English Notion pages into live business automations powered by Claude AI — edit the page, change the behavior. No deployments needed.",
      "url": "https://dev.to/dinesh0666/notion-flows-your-notion-pages-are-your-automation-code-31d5",
      "tags": "notionchallenge, notion, typescript, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "dinesh0666"
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
    }
  ]
}
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
    },
    {
      "by": "piccirello",
      "descendants": 52,
      "id": 47318797,
      "kids": [
        47330350,
        47330498,
        47332007,
        47331062,
        47331478,
        47330371,
        47330290,
        47331821,
        47330887,
        47332349,
        47330939,
        47331368,
        47331047,
        47330483
      ],
      "score": 151,
      "text": "<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;rebane2001&#x2F;status&#x2F;2031037389347406054\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;rebane2001&#x2F;status&#x2F;2031037389347406054</a>",
      "time": 1773113318,
      "title": "SSH Secret Menu",
      "type": "story",
      "url": "https://twitter.com/rebane2001/status/2031037389347406054"
    },
    {
      "by": "justinclift",
      "descendants": 2,
      "id": 47284328,
      "kids": [
        47284682,
        47284329
      ],
      "score": 4,
      "time": 1772855728,
      "title": "Support for Aquantia AQC113 and AQC113C Ethernet Controllers on FreeBSD",
      "type": "story",
      "url": "https://github.com/Aquantia/aqtion-freebsd/issues/32"
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
    },
    {
      "title": "Writing my own text editor, and daily-driving it",
      "url": "https://blog.jsbarretto.com/post/text-editor",
      "score": 14,
      "comments": 0,
      "tags": [
        "editors"
      ],
      "id": "ufczx8"
    },
    {
      "title": "Ghostty 1.3.0",
      "url": "https://ghostty.org/docs/install/release-notes/1-3-0",
      "score": 183,
      "comments": 56,
      "tags": [
        "release"
      ],
      "id": "flbwoi"
    }
  ]
}
```

