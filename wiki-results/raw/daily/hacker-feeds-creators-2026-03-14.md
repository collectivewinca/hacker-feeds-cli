# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-14 07:06:00 UTC

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
      "title": "What was your win this week?!",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-ilf",
      "tags": "weeklyretro, discuss",
      "reactions": 32,
      "comments": 59,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Why Are We Still Doing GPU Work in JavaScript? (Live WebGPU Benchmark & Demo🚀)",
      "description": "JavaScript has been the main language of the web for years. Its popularity probably surprised even...",
      "url": "https://dev.to/sylwia-lask/why-are-we-still-doing-gpu-work-in-javascript-live-webgpu-benchmark-demo-4j6i",
      "tags": "webdev, javascript, typescript, webgpu",
      "reactions": 46,
      "comments": 53,
      "reading_time": 6,
      "author": "sylwia-lask"
    },
    {
      "title": "Deployments made easy: Cloud Run 101",
      "description": "The distance between \"it works on my machine\" and \"it's live for the world\" can often feel like a...",
      "url": "https://dev.to/googleai/deployments-made-easy-cloud-run-101-11ma",
      "tags": "googlecloud, serverless, beginners, cloud",
      "reactions": 29,
      "comments": 3,
      "reading_time": 2,
      "author": "martinomander"
    },
    {
      "title": "AI did a good job... and almost deleted everything",
      "description": "I would like to share an experience I had today.  TLDR:   AI finds minor security problem: danger of...",
      "url": "https://dev.to/eecolor/ai-did-a-good-job-and-almost-deleted-everything-1g8g",
      "tags": "",
      "reactions": 27,
      "comments": 0,
      "reading_time": 3,
      "author": "eecolor"
    },
    {
      "title": "We built a video recording API at $0.01/min. Here's the tech that made it possible.",
      "description": "Most video recording APIs charge $0.02-0.03 per minute. We built one for $0.01/min — 62% cheaper —...",
      "url": "https://dev.to/danger_cris/we-built-a-video-recording-api-at-001min-heres-the-tech-that-made-it-possible-872",
      "tags": "webdev, javascript, saas, video",
      "reactions": 13,
      "comments": 0,
      "reading_time": 3,
      "author": "danger_cris"
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
      "title": "Por qué pusimos un CDN frente a nuestro balanceador de carga (y por qué las cookies fueron el verdadero problema)",
      "description": "Agregar un CDN parece algo obvio. Hasta que es lo único que se interpone entre tú y un deployment...",
      "url": "https://dev.to/davidcuy/por-que-pusimos-un-cdn-frente-a-nuestro-balanceador-de-carga-y-por-que-las-cookies-fueron-el-4mfh",
      "tags": "arquitecturacloud, decisionesdearquitec",
      "reactions": 30,
      "comments": 0,
      "reading_time": 3,
      "author": "davidcuy"
    },
    {
      "title": "I Built EchoHR: The HR System That Doesn’t Ghost You",
      "description": "This is a submission for the Notion MCP Challenge  Rejections hurt. But ghosting hurts even...",
      "url": "https://dev.to/ujja/i-built-echohr-the-hr-system-that-doesnt-ghost-you-1c2i",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 30,
      "comments": 39,
      "reading_time": 5,
      "author": "ujja"
    },
    {
      "title": "The Internet Is Getting Quieter - Who Will Feed the Next Generation of AI?",
      "description": "Stack Overflow helped train the AI models that are now making it irrelevant. As developers solve problems privately with AI assistants, the public knowledge commons is quietly starving. This is an underrated problem.",
      "url": "https://dev.to/sag1v/the-internet-is-getting-quieter-who-will-feed-the-next-generation-of-ai-4bl1",
      "tags": "ai, knowledgesharing, stackoverflow, opinion",
      "reactions": 32,
      "comments": 19,
      "reading_time": 5,
      "author": "sag1v"
    },
    {
      "title": "I Built and Authorized a Planning Agent with MCP and Keycard",
      "description": "My workday is scattered across many disconnected tools: Google Calendar, Linear, Gmail, Google Docs,...",
      "url": "https://dev.to/kimmaida/i-built-a-secure-planning-agent-with-mcp-and-keycard-324a",
      "tags": "agents, mcp, productivity, showdev",
      "reactions": 46,
      "comments": 9,
      "reading_time": 12,
      "author": "kimmaida"
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
      "forks": 174,
      "added_stars": 695,
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
      "forks": 718,
      "added_stars": 176,
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
      "added_stars": 453,
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
      "forks": 19051,
      "added_stars": 331,
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
      "author": "datawhalechina",
      "repo": "easy-vibe",
      "avatar": "https://github.com/datawhalechina.png",
      "repo_link": "https://github.com/datawhalechina/easy-vibe",
      "desc": "easy vibe 👋 一起 vibe ! Learn Vibe Coding From 0 to 1 ｜ Vibe Coding 零基础教程 ｜ 产品原型、AI 能力集成、前后端开发、多平台应用开发教程 ｜ Tutorial on Product Prototype, AI Capability Integration, Frontend and Backend Development, and Multi-platform Application Development",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 350,
      "added_stars": 425,
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
      "author": "jaywcjlove",
      "repo": "awesome-mac",
      "avatar": "https://github.com/jaywcjlove.png",
      "repo_link": "https://github.com/jaywcjlove/awesome-mac",
      "desc": " Now we have become very big, Different from the original idea. Collect premium software in various categories.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7491,
      "added_stars": 556,
      "builtBy": [
        {
          "username": "jaywcjlove",
          "href": "https://github.com/jaywcjlove",
          "avatar": "https://avatars.githubusercontent.com/u/1680273"
        },
        {
          "username": "alichtman",
          "href": "https://github.com/alichtman",
          "avatar": "https://avatars.githubusercontent.com/u/20600565"
        },
        {
          "username": "xcv58",
          "href": "https://github.com/xcv58",
          "avatar": "https://avatars.githubusercontent.com/u/503123"
        },
        {
          "username": "heldev",
          "href": "https://github.com/heldev",
          "avatar": "https://avatars.githubusercontent.com/u/16080436"
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
      "forks": 50774,
      "added_stars": 392,
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
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2493,
      "added_stars": 4192,
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
      "author": "zhaoolee",
      "repo": "ChromeAppHeroes",
      "avatar": "https://github.com/zhaoolee.png",
      "repo_link": "https://github.com/zhaoolee/ChromeAppHeroes",
      "desc": "🌈谷粒-Chrome插件英雄榜, 为优秀的Chrome插件写一本中文说明书, 让Chrome插件英雄们造福人类~ ChromePluginHeroes, Write a Chinese manual for the excellent Chrome plugin, let the Chrome plugin heroes benefit the human~ 公众号「0加1」同步更新",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2613,
      "added_stars": 777,
      "builtBy": [
        {
          "username": "zhaoolee",
          "href": "https://github.com/zhaoolee",
          "avatar": "https://avatars.githubusercontent.com/u/15868458"
        },
        {
          "username": "visiongem",
          "href": "https://github.com/visiongem",
          "avatar": "https://avatars.githubusercontent.com/u/10680716"
        },
        {
          "username": "ksdpmx",
          "href": "https://github.com/ksdpmx",
          "avatar": "https://avatars.githubusercontent.com/u/3256083"
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
      "forks": 5813,
      "added_stars": 356,
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
      "author": "maboloshi",
      "repo": "github-chinese",
      "avatar": "https://github.com/maboloshi.png",
      "repo_link": "https://github.com/maboloshi/github-chinese",
      "desc": "GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1187,
      "added_stars": 306,
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
      "author": "docmirror",
      "repo": "dev-sidecar",
      "avatar": "https://github.com/docmirror.png",
      "repo_link": "https://github.com/docmirror/dev-sidecar",
      "desc": "开发者边车，github打不开，github加速，git clone加速，git release下载加速，stackoverflow加速",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2616,
      "added_stars": 82,
      "builtBy": [
        {
          "username": "wangliang181230",
          "href": "https://github.com/wangliang181230",
          "avatar": "https://avatars.githubusercontent.com/u/1527893"
        },
        {
          "username": "greper",
          "href": "https://github.com/greper",
          "avatar": "https://avatars.githubusercontent.com/u/1687298"
        },
        {
          "username": "starknt",
          "href": "https://github.com/starknt",
          "avatar": "https://avatars.githubusercontent.com/u/64941905"
        },
        {
          "username": "cute-omega",
          "href": "https://github.com/cute-omega",
          "avatar": "https://avatars.githubusercontent.com/u/92797441"
        },
        {
          "username": "Mryan2005",
          "href": "https://github.com/Mryan2005",
          "avatar": "https://avatars.githubusercontent.com/u/40586009"
        }
      ]
    },
    {
      "author": "marktext",
      "repo": "marktext",
      "avatar": "https://github.com/marktext.png",
      "repo_link": "https://github.com/marktext/marktext",
      "desc": "📝A simple and elegant markdown editor, available for Linux, macOS and Windows.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4024,
      "added_stars": 282,
      "builtBy": [
        {
          "username": "Jocs",
          "href": "https://github.com/Jocs",
          "avatar": "https://avatars.githubusercontent.com/u/9712830"
        },
        {
          "username": "fxha",
          "href": "https://github.com/fxha",
          "avatar": "https://avatars.githubusercontent.com/u/22716132"
        },
        {
          "username": "notAlaanor",
          "href": "https://github.com/notAlaanor",
          "avatar": "https://avatars.githubusercontent.com/u/17591936"
        },
        {
          "username": "mdogadailo",
          "href": "https://github.com/mdogadailo",
          "avatar": "https://avatars.githubusercontent.com/u/3466287"
        },
        {
          "username": "MrHeer",
          "href": "https://github.com/MrHeer",
          "avatar": "https://avatars.githubusercontent.com/u/18595761"
        }
      ]
    },
    {
      "author": "atlassian",
      "repo": "atlassian-mcp-server",
      "avatar": "https://github.com/atlassian.png",
      "repo_link": "https://github.com/atlassian/atlassian-mcp-server",
      "desc": "Remote MCP Server that securely connects Jira and Confluence with your LLM, IDE, or agent platform of choice.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 43,
      "added_stars": 40,
      "builtBy": [
        {
          "username": "lsosa1",
          "href": "https://github.com/lsosa1",
          "avatar": "https://avatars.githubusercontent.com/u/218678431"
        },
        {
          "username": "pnguyen-atlassian",
          "href": "https://github.com/pnguyen-atlassian",
          "avatar": "https://avatars.githubusercontent.com/u/16570385"
        },
        {
          "username": "iosamaatlassian",
          "href": "https://github.com/iosamaatlassian",
          "avatar": "https://avatars.githubusercontent.com/u/154573081"
        },
        {
          "username": "ekahinga",
          "href": "https://github.com/ekahinga",
          "avatar": "https://avatars.githubusercontent.com/u/255455128"
        },
        {
          "username": "evperlman1",
          "href": "https://github.com/evperlman1",
          "avatar": "https://avatars.githubusercontent.com/u/262648862"
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
      "title": "Building a Process Scheduling Simulator: Relearning TypeScript and Reducing AI Dependence",
      "description": "For several weeks, I hadn’t written any real Next.js or TypeScript code without relying heavily on AI...",
      "url": "https://dev.to/jitheshpoojari/building-a-process-scheduling-simulator-relearning-typescript-and-reducing-ai-dependence-2pho",
      "tags": "ai, programming, deved, algorithms",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "jitheshpoojari"
    },
    {
      "title": "I Was So Angry, I Actually Shipped It",
      "description": "A while ago I wrote about how I was fed up enough with project management tools to build my own. No...",
      "url": "https://dev.to/sebs/i-was-so-angry-i-actually-shipped-it-2m19",
      "tags": "ai, vibecoding, agile, mcp",
      "reactions": 4,
      "comments": 4,
      "reading_time": 4,
      "author": "sebs"
    },
    {
      "title": "Brew: I Built a Real-Time Voice AI Drive-Thru Barista with Gemini Live API and Google ADK",
      "description": "How I built a voice-first AI ordering agent for coffee shop drive-thrus using Gemini 2.5 Flash Native Audio, Google Agent Development Kit, Cloud Run, and Firestore — for the Gemini Live Agent Challenge hackathon.",
      "url": "https://dev.to/thilak15/brew-i-built-a-real-time-voice-ai-drive-thru-barista-with-gemini-live-api-and-google-adk-4di5",
      "tags": "googlecloud, gemini, ai, hackathon",
      "reactions": 1,
      "comments": 3,
      "reading_time": 7,
      "author": "thilak15"
    },
    {
      "title": "Kriya: Tools for Exploring and Generating Action100M-style Video Annotations",
      "description": "Open-source visualizer + automatic annotations on EPIC-KITCHENS to help build better video understanding, world models, VLMs, and robotic AI.",
      "url": "https://dev.to/ankk98/kriya-tools-for-exploring-and-generating-action100m-style-video-annotations-46ee",
      "tags": "ai, computervision, robotics, dataset",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "ankk98"
    },
    {
      "title": "We Scanned 17 Popular MCP Servers — Here's What We Found",
      "description": "100% of MCP servers lack permission declarations. We found a real eval() vulnerability in Playwright MCP. Average security score: 34/100.",
      "url": "https://dev.to/elliotllliu/we-scanned-17-popular-mcp-servers-heres-what-we-found-321c",
      "tags": "security, ai, mcp, opensource",
      "reactions": 1,
      "comments": 1,
      "reading_time": 4,
      "author": "elliotllliu"
    },
    {
      "title": "Why We Need a Standard Language for Agentic Workflows (And Why I Built One)",
      "description": "Everyone is building **multi-agent systems. Nobody agrees on how to describe them.     I've been...",
      "url": "https://dev.to/argonauta/why-we-need-a-standard-language-for-agentic-workflows-and-why-i-built-one-138",
      "tags": "ai, agents, tooling, opensource",
      "reactions": 5,
      "comments": 3,
      "reading_time": 7,
      "author": "argonauta"
    },
    {
      "title": "Why I Built an Email AI That Never Sends",
      "description": "I spend about 2 hours a day replying to emails. Not reading them — replying. The reading part is...",
      "url": "https://dev.to/alpha_compadre/why-i-built-an-email-ai-that-never-sends-1d85",
      "tags": "ai, productivity, privacy, email",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "alpha_compadre"
    },
    {
      "title": "Why AI Agents Need Credit Scores",
      "description": "You wouldn't wire a contractor's bank account directly to your payroll system without checking their...",
      "url": "https://dev.to/leonidasesquire/why-ai-agents-need-credit-scores-160g",
      "tags": "ai, agents, infrastructure, rust",
      "reactions": 2,
      "comments": 2,
      "reading_time": 4,
      "author": "leonidasesquire"
    },
    {
      "title": "Day 1/30 — The AI Revolution Is Already Here",
      "description": "Artificial Intelligence is no longer a concept from the future. It is already part of many tools and...",
      "url": "https://dev.to/prince_sharma_spx/day-130-the-ai-revolution-is-already-here-3f8k",
      "tags": "ai, productivity, discuss, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "prince_sharma_spx"
    },
    {
      "title": "We Published a Formal Spec for Tamper-Evident AI Audit Chains",
      "description": "AIR Blackbox v1.2.6 ships a Claude Agent SDK trust layer, 4600 training examples, and the first...",
      "url": "https://dev.to/json_shotwell/we-published-a-formal-spec-for-tamper-evident-ai-audit-chains-1ghb",
      "tags": "ai, python, opensource, security",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "json_shotwell"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "meetpateltech",
      "descendants": 227,
      "id": 47367129,
      "kids": [
        47368651,
        47373315,
        47374072,
        47373075,
        47368975,
        47368938,
        47372047,
        47373795,
        47371823,
        47373896,
        47373921,
        47372570,
        47372159,
        47373658,
        47372980,
        47373357,
        47372132,
        47372379,
        47372126,
        47367360,
        47373155,
        47372845,
        47373094,
        47372467,
        47372561,
        47372012,
        47372045,
        47372527,
        47373559,
        47371992,
        47371838,
        47373057,
        47372746,
        47373369,
        47372174,
        47372122,
        47372716,
        47373973,
        47373978,
        47373316,
        47372358,
        47372761,
        47372801,
        47373381
      ],
      "score": 566,
      "time": 1773422341,
      "title": "1M context is now generally available for Opus 4.6 and Sonnet 4.6",
      "type": "story",
      "url": "https://claude.com/blog/1m-context-ga"
    },
    {
      "by": "ricardbejarano",
      "descendants": 281,
      "id": 47363754,
      "kids": [
        47367770,
        47367200,
        47368057,
        47366487,
        47372550,
        47366284,
        47366742,
        47372114,
        47369834,
        47367771,
        47368473,
        47367002,
        47366375,
        47371107,
        47367654,
        47371751,
        47373273,
        47373268,
        47367197,
        47370473,
        47367130,
        47372497,
        47369625,
        47372975,
        47365956,
        47369209,
        47366318,
        47368524,
        47369123,
        47370700,
        47371010,
        47369597,
        47369154,
        47373881,
        47370478,
        47367387,
        47367918,
        47369644,
        47367834,
        47369574,
        47367027,
        47372539,
        47370333,
        47369489,
        47371229,
        47371189,
        47372015,
        47367373,
        47366887,
        47367357,
        47369870,
        47368191,
        47372505,
        47366713,
        47366560,
        47368744,
        47366503,
        47371883,
        47366738,
        47367873,
        47371291,
        47370143,
        47366454,
        47366608,
        47366571,
        47370662,
        47368208,
        47369050,
        47367565,
        47369423,
        47368661,
        47372424,
        47367273,
        47367013,
        47370518,
        47367267,
        47369724,
        47368055,
        47367348,
        47367760,
        47369630,
        47368515,
        47372356,
        47366556,
        47367093,
        47366586,
        47366562,
        47371430,
        47368023,
        47368311,
        47369638,
        47368782,
        47366392,
        47367991,
        47367448,
        47367178,
        47367248,
        47370237,
        47368203,
        47370869,
        47367951,
        47366813,
        47373039,
        47368127,
        47371411,
        47368134,
        47368657,
        47367269,
        47368119,
        47368129,
        47367841,
        47366799,
        47367038,
        47371274
      ],
      "score": 1145,
      "time": 1773405970,
      "title": "Can I run AI locally?",
      "type": "story",
      "url": "https://www.canirun.ai/"
    },
    {
      "by": "vismit2000",
      "descendants": 9,
      "id": 47318386,
      "kids": [
        47374031,
        47374004,
        47373909,
        47373666,
        47373715
      ],
      "score": 38,
      "time": 1773109011,
      "title": "A Survival Guide to a PhD (2016)",
      "type": "story",
      "url": "http://karpathy.github.io/2016/09/07/phd/"
    },
    {
      "by": "johnbarron",
      "descendants": 458,
      "id": 47363584,
      "kids": [
        47368494,
        47369895,
        47372554,
        47370110,
        47369974,
        47373814,
        47373984,
        47371828,
        47366274,
        47372440,
        47373500,
        47369177,
        47364775,
        47364030,
        47372088,
        47373481,
        47364129,
        47369827,
        47371169,
        47370692,
        47372977,
        47370321,
        47368780,
        47371701,
        47364684,
        47366172,
        47364166,
        47364583,
        47369550,
        47363987,
        47363820,
        47370008,
        47368168,
        47368231,
        47363743,
        47369839,
        47364236
      ],
      "score": 516,
      "time": 1773405069,
      "title": "Qatar helium shutdown puts chip supply chain on a two-week clock",
      "type": "story",
      "url": "https://www.tomshardware.com/tech-industry/qatar-helium-shutdown-puts-chip-supply-chain-on-a-two-week-clock"
    },
    {
      "by": "psibi",
      "descendants": 16,
      "id": 47319071,
      "kids": [
        47374032,
        47373991,
        47373797,
        47373660,
        47373968,
        47373972,
        47373489,
        47373735,
        47373333,
        47373828,
        47328270,
        47373284,
        47373930
      ],
      "score": 80,
      "time": 1773116492,
      "title": "Emacs and Vim in the Age of AI",
      "type": "story",
      "url": "https://batsov.com/articles/2026/03/09/emacs-and-vim-in-the-age-of-ai/"
    },
    {
      "by": "kilroy123",
      "descendants": 144,
      "id": 47336100,
      "kids": [
        47369759,
        47366824,
        47367398,
        47370668,
        47373447,
        47366854,
        47367616,
        47371479,
        47368634,
        47368196,
        47366582,
        47366720,
        47368702,
        47368549,
        47370183,
        47366674,
        47367974,
        47367031,
        47367564,
        47366721,
        47367702,
        47371599,
        47367889,
        47369758,
        47368904,
        47372758,
        47367251,
        47368267,
        47370334,
        47367272,
        47369866,
        47368252,
        47370720,
        47369782,
        47372435,
        47369179,
        47370216,
        47368786,
        47368514,
        47367592,
        47370677,
        47367824,
        47367133,
        47373554,
        47367350,
        47367123,
        47369462,
        47368295,
        47371670,
        47368713,
        47366862,
        47368619,
        47366942,
        47367851,
        47370629,
        47369711,
        47367324,
        47368684,
        47366622,
        47367688,
        47370254,
        47366842,
        47370710,
        47368759,
        47370057,
        47367734,
        47367550,
        47370125,
        47368091,
        47368270,
        47367444
      ],
      "score": 474,
      "text": "I know, it&#x27;s a very first-world problem. But in my house, we have a hard time deciding what to watch. Too many options!<p>So I made this to recreate Cable TV for YouTube. I made it so it runs in the browser. Quickly import your subscriptions in the browser via a bookmarklet. No accounts, no sign-ins. Just quickly import your data locally.",
      "time": 1773239697,
      "title": "Show HN: Channel Surfer – Watch YouTube like it’s cable TV",
      "type": "story",
      "url": "https://channelsurfer.tv"
    },
    {
      "by": "mondobe",
      "descendants": 1,
      "id": 47339403,
      "kids": [
        47373767
      ],
      "score": 16,
      "time": 1773254139,
      "title": "Atari 2600 BASIC Programming (2015)",
      "type": "story",
      "url": "https://huguesjohnson.com/programming/atari-2600-basic/"
    },
    {
      "by": "kernelrocks",
      "descendants": 26,
      "id": 47371064,
      "kids": [
        47374082,
        47372720,
        47371406,
        47371361,
        47371962,
        47371245,
        47371078,
        47373313,
        47373279,
        47373405,
        47371926,
        47371287
      ],
      "score": 113,
      "time": 1773442325,
      "title": "I found 39 Algolia admin keys exposed across open source documentation sites",
      "type": "story",
      "url": "https://benzimmermann.dev/blog/algolia-docsearch-admin-keys"
    },
    {
      "by": "surprisetalk",
      "descendants": 1,
      "id": 47323625,
      "kids": [
        47373911
      ],
      "score": 17,
      "time": 1773152301,
      "title": "You gotta think outside the hypercube",
      "type": "story",
      "url": "https://lcamtuf.substack.com/p/you-gotta-think-outside-the-hypercube"
    },
    {
      "by": "avionics-guy",
      "descendants": 78,
      "id": 47368033,
      "kids": [
        47370544,
        47369289,
        47369213,
        47373975,
        47370480,
        47369018,
        47371967,
        47369162,
        47373720,
        47373307,
        47369430,
        47372518,
        47369819,
        47369575,
        47372924,
        47371504,
        47372002,
        47371006,
        47369977,
        47370337,
        47372242,
        47370469,
        47370315,
        47369969,
        47370438,
        47369732,
        47372844,
        47371294,
        47372565,
        47371315,
        47370221
      ],
      "score": 270,
      "text": "I discovered this project because all-of-a-sudden Logi Options Plus software updater started taking 40-60% of my Intel Macbook Pro until I killed the process (of course it restarts). In my searches I ended up at a reddit discussion where I found other people with same issues.<p>I&#x27;m a minor contributor to this project but it aims to reduce&#x2F;eliminate the need to use Logitech proprietary software and telemetry. We could use help if other people are interested.<p>Please check out the github link for more detailed motivations (eliminating telemetry) as a part of this project.   Here is link: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;TomBadash&#x2F;MouseControl\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;TomBadash&#x2F;MouseControl</a>",
      "time": 1773427374,
      "title": "Mouser: An open source alternative to Logi-Plus mouse software",
      "type": "story",
      "url": "https://github.com/TomBadash/MouseControl"
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
      "by": "meetpateltech",
      "descendants": 227,
      "id": 47367129,
      "kids": [
        47368651,
        47373315,
        47374072,
        47373075,
        47368975,
        47368938,
        47372047,
        47373795,
        47371823,
        47373896,
        47373921,
        47372570,
        47372159,
        47373658,
        47372980,
        47373357,
        47372132,
        47372379,
        47372126,
        47367360,
        47373155,
        47372845,
        47373094,
        47372467,
        47372561,
        47372012,
        47372045,
        47372527,
        47373559,
        47371992,
        47371838,
        47373057,
        47372746,
        47373369,
        47372174,
        47372122,
        47372716,
        47373973,
        47373978,
        47373316,
        47372358,
        47372761,
        47372801,
        47373381
      ],
      "score": 566,
      "time": 1773422341,
      "title": "1M context is now generally available for Opus 4.6 and Sonnet 4.6",
      "type": "story",
      "url": "https://claude.com/blog/1m-context-ga"
    },
    {
      "by": "ricardbejarano",
      "descendants": 281,
      "id": 47363754,
      "kids": [
        47367770,
        47367200,
        47368057,
        47366487,
        47372550,
        47366284,
        47366742,
        47372114,
        47369834,
        47367771,
        47368473,
        47367002,
        47366375,
        47371107,
        47367654,
        47371751,
        47373273,
        47373268,
        47367197,
        47370473,
        47367130,
        47372497,
        47369625,
        47372975,
        47365956,
        47369209,
        47366318,
        47368524,
        47369123,
        47370700,
        47371010,
        47369597,
        47369154,
        47373881,
        47370478,
        47367387,
        47367918,
        47369644,
        47367834,
        47369574,
        47367027,
        47372539,
        47370333,
        47369489,
        47371229,
        47371189,
        47372015,
        47367373,
        47366887,
        47367357,
        47369870,
        47368191,
        47372505,
        47366713,
        47366560,
        47368744,
        47366503,
        47371883,
        47366738,
        47367873,
        47371291,
        47370143,
        47366454,
        47366608,
        47366571,
        47370662,
        47368208,
        47369050,
        47367565,
        47369423,
        47368661,
        47372424,
        47367273,
        47367013,
        47370518,
        47367267,
        47369724,
        47368055,
        47367348,
        47367760,
        47369630,
        47368515,
        47372356,
        47366556,
        47367093,
        47366586,
        47366562,
        47371430,
        47368023,
        47368311,
        47369638,
        47368782,
        47366392,
        47367991,
        47367448,
        47367178,
        47367248,
        47370237,
        47368203,
        47370869,
        47367951,
        47366813,
        47373039,
        47368127,
        47371411,
        47368134,
        47368657,
        47367269,
        47368119,
        47368129,
        47367841,
        47366799,
        47367038,
        47371274
      ],
      "score": 1145,
      "time": 1773405970,
      "title": "Can I run AI locally?",
      "type": "story",
      "url": "https://www.canirun.ai/"
    },
    {
      "by": "vismit2000",
      "descendants": 9,
      "id": 47318386,
      "kids": [
        47374031,
        47374004,
        47373909,
        47373666,
        47373715
      ],
      "score": 38,
      "time": 1773109011,
      "title": "A Survival Guide to a PhD (2016)",
      "type": "story",
      "url": "http://karpathy.github.io/2016/09/07/phd/"
    },
    {
      "by": "johnbarron",
      "descendants": 458,
      "id": 47363584,
      "kids": [
        47368494,
        47369895,
        47372554,
        47370110,
        47369974,
        47373814,
        47373984,
        47371828,
        47366274,
        47372440,
        47373500,
        47369177,
        47364775,
        47364030,
        47372088,
        47373481,
        47364129,
        47369827,
        47371169,
        47370692,
        47372977,
        47370321,
        47368780,
        47371701,
        47364684,
        47366172,
        47364166,
        47364583,
        47369550,
        47363987,
        47363820,
        47370008,
        47368168,
        47368231,
        47363743,
        47369839,
        47364236
      ],
      "score": 516,
      "time": 1773405069,
      "title": "Qatar helium shutdown puts chip supply chain on a two-week clock",
      "type": "story",
      "url": "https://www.tomshardware.com/tech-industry/qatar-helium-shutdown-puts-chip-supply-chain-on-a-two-week-clock"
    },
    {
      "by": "psibi",
      "descendants": 16,
      "id": 47319071,
      "kids": [
        47374032,
        47373991,
        47373797,
        47373660,
        47373968,
        47373972,
        47373489,
        47373735,
        47373333,
        47373828,
        47328270,
        47373284,
        47373930
      ],
      "score": 80,
      "time": 1773116492,
      "title": "Emacs and Vim in the Age of AI",
      "type": "story",
      "url": "https://batsov.com/articles/2026/03/09/emacs-and-vim-in-the-age-of-ai/"
    },
    {
      "by": "kilroy123",
      "descendants": 144,
      "id": 47336100,
      "kids": [
        47369759,
        47366824,
        47367398,
        47370668,
        47373447,
        47366854,
        47367616,
        47371479,
        47368634,
        47368196,
        47366582,
        47366720,
        47368702,
        47368549,
        47370183,
        47366674,
        47367974,
        47367031,
        47367564,
        47366721,
        47367702,
        47371599,
        47367889,
        47369758,
        47368904,
        47372758,
        47367251,
        47368267,
        47370334,
        47367272,
        47369866,
        47368252,
        47370720,
        47369782,
        47372435,
        47369179,
        47370216,
        47368786,
        47368514,
        47367592,
        47370677,
        47367824,
        47367133,
        47373554,
        47367350,
        47367123,
        47369462,
        47368295,
        47371670,
        47368713,
        47366862,
        47368619,
        47366942,
        47367851,
        47370629,
        47369711,
        47367324,
        47368684,
        47366622,
        47367688,
        47370254,
        47366842,
        47370710,
        47368759,
        47370057,
        47367734,
        47367550,
        47370125,
        47368091,
        47368270,
        47367444
      ],
      "score": 474,
      "text": "I know, it&#x27;s a very first-world problem. But in my house, we have a hard time deciding what to watch. Too many options!<p>So I made this to recreate Cable TV for YouTube. I made it so it runs in the browser. Quickly import your subscriptions in the browser via a bookmarklet. No accounts, no sign-ins. Just quickly import your data locally.",
      "time": 1773239697,
      "title": "Show HN: Channel Surfer – Watch YouTube like it’s cable TV",
      "type": "story",
      "url": "https://channelsurfer.tv"
    },
    {
      "by": "mondobe",
      "descendants": 1,
      "id": 47339403,
      "kids": [
        47373767
      ],
      "score": 16,
      "time": 1773254139,
      "title": "Atari 2600 BASIC Programming (2015)",
      "type": "story",
      "url": "https://huguesjohnson.com/programming/atari-2600-basic/"
    },
    {
      "by": "kernelrocks",
      "descendants": 26,
      "id": 47371064,
      "kids": [
        47374082,
        47372720,
        47371406,
        47371361,
        47371962,
        47371245,
        47371078,
        47373313,
        47373279,
        47373405,
        47371926,
        47371287
      ],
      "score": 113,
      "time": 1773442325,
      "title": "I found 39 Algolia admin keys exposed across open source documentation sites",
      "type": "story",
      "url": "https://benzimmermann.dev/blog/algolia-docsearch-admin-keys"
    },
    {
      "by": "surprisetalk",
      "descendants": 1,
      "id": 47323625,
      "kids": [
        47373911
      ],
      "score": 17,
      "time": 1773152301,
      "title": "You gotta think outside the hypercube",
      "type": "story",
      "url": "https://lcamtuf.substack.com/p/you-gotta-think-outside-the-hypercube"
    },
    {
      "by": "avionics-guy",
      "descendants": 78,
      "id": 47368033,
      "kids": [
        47370544,
        47369289,
        47369213,
        47373975,
        47370480,
        47369018,
        47371967,
        47369162,
        47373720,
        47373307,
        47369430,
        47372518,
        47369819,
        47369575,
        47372924,
        47371504,
        47372002,
        47371006,
        47369977,
        47370337,
        47372242,
        47370469,
        47370315,
        47369969,
        47370438,
        47369732,
        47372844,
        47371294,
        47372565,
        47371315,
        47370221
      ],
      "score": 270,
      "text": "I discovered this project because all-of-a-sudden Logi Options Plus software updater started taking 40-60% of my Intel Macbook Pro until I killed the process (of course it restarts). In my searches I ended up at a reddit discussion where I found other people with same issues.<p>I&#x27;m a minor contributor to this project but it aims to reduce&#x2F;eliminate the need to use Logitech proprietary software and telemetry. We could use help if other people are interested.<p>Please check out the github link for more detailed motivations (eliminating telemetry) as a part of this project.   Here is link: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;TomBadash&#x2F;MouseControl\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;TomBadash&#x2F;MouseControl</a>",
      "time": 1773427374,
      "title": "Mouser: An open source alternative to Logi-Plus mouse software",
      "type": "story",
      "url": "https://github.com/TomBadash/MouseControl"
    },
    {
      "by": "tosh",
      "descendants": 94,
      "id": 47367932,
      "kids": [
        47371349,
        47368692,
        47370122,
        47368998,
        47368116,
        47370910,
        47369091,
        47373801,
        47369219,
        47372630,
        47369527,
        47372880,
        47368019,
        47369120,
        47370883,
        47368834,
        47368449,
        47371679,
        47368614,
        47368892,
        47370795,
        47372442,
        47370357,
        47368149,
        47369017,
        47369927,
        47369449,
        47369233,
        47372137,
        47370146,
        47369972,
        47368978,
        47368858,
        47368508,
        47369936,
        47370602
      ],
      "score": 264,
      "time": 1773426852,
      "title": "Hammerspoon",
      "type": "story",
      "url": "https://github.com/Hammerspoon/hammerspoon"
    },
    {
      "by": "vinhnx",
      "descendants": 15,
      "id": 47372672,
      "kids": [
        47373329,
        47373165,
        47373054,
        47373514,
        47373031,
        47373540,
        47373088,
        47373855,
        47372992,
        47372894,
        47373476
      ],
      "score": 29,
      "time": 1773455220,
      "title": "Optimizing Content for Agents",
      "type": "story",
      "url": "https://cra.mr/optimizing-content-for-agents/"
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
      "title": "I traced $2 billion in nonprofit grants and 45 states of lobbying records to figure out who's behind the age verification bills",
      "url": "https://www.reddit.com/r/linux/s/WqwsCnFE8E",
      "score": 165,
      "comments": 22,
      "tags": [
        "law",
        "privacy"
      ],
      "id": "ddrcpa"
    },
    {
      "title": "Windows 11 after two decades of macOS: okay, but also awful",
      "url": "https://rakhim.exotext.com/windows-11-experience",
      "score": 28,
      "comments": 8,
      "tags": [
        "windows"
      ],
      "id": "zcmoab"
    },
    {
      "title": "I beg you to follow Crocker's Rules, even if you will be rude to me",
      "url": "https://lr0.org/blog/p/crocker/",
      "score": 11,
      "comments": 11,
      "tags": [
        "culture",
        "practices"
      ],
      "id": "rb8pas"
    },
    {
      "title": "XML is a cheap DSL",
      "url": "https://unplannedobsolescence.com/blog/xml-cheap-dsl/",
      "score": 17,
      "comments": 7,
      "tags": [
        "programming"
      ],
      "id": "i2xkrm"
    },
    {
      "title": "This Is Not The Computer For You",
      "url": "https://samhenri.gold/blog/20260312-this-is-not-the-computer-for-you/",
      "score": 218,
      "comments": 57,
      "tags": [
        "hardware",
        "mac"
      ],
      "id": "zyt5uz"
    },
    {
      "title": "How to use storytelling to fit inline assembly into Rust",
      "url": "https://www.ralfj.de/blog/2026/03/13/inline-asm.html",
      "score": 32,
      "comments": 5,
      "tags": [
        "assembly",
        "rust"
      ],
      "id": "hfypk8"
    },
    {
      "title": "Computing in freedom with GNU Emacs",
      "url": "https://protesilaos.com/codelog/2026-03-13-computing-in-freedom-with-gnu-emacs/",
      "score": 29,
      "comments": 5,
      "tags": [
        "editors",
        "emacs",
        "lisp"
      ],
      "id": "czj5p4"
    },
    {
      "title": "Awash in revisionist histories about Apple's web efforts, a look at the evidence",
      "url": "https://infrequently.org/2025/09/cupertinos-comforting-myths/",
      "score": 9,
      "comments": 8,
      "tags": [
        "browsers"
      ],
      "id": "sbsszu"
    },
    {
      "title": "Reinventing Python's AsyncIO",
      "url": "https://blog.baro.dev/p/reinventing-pythons-asyncio",
      "score": 12,
      "comments": 5,
      "tags": [
        "python"
      ],
      "id": "jadk6d"
    },
    {
      "title": "Libadwaita 1.9",
      "url": "https://nyaa.place/blog/libadwaita-1-9/",
      "score": 8,
      "comments": 0,
      "tags": [
        "graphics",
        "release"
      ],
      "id": "twup3y"
    }
  ]
}
```

