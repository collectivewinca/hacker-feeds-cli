# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-16 07:48:27 UTC

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
      "title": "Why I, as Someone Who Likes MySQL, Now Want to Recommend PostgreSQL",
      "description": "Why I now recommend PostgreSQL for new applications, even though I still like MySQL and have used it for a long time.",
      "url": "https://dev.to/catatsuy/why-i-as-someone-who-likes-mysql-now-want-to-recommend-postgresql-2a8i",
      "tags": "mysql, postgres, database, sql",
      "reactions": 6,
      "comments": 2,
      "reading_time": 13,
      "author": "catatsuy"
    },
    {
      "title": "Thiago Colen's Digital Universe: Building a Content-Synced Portfolio with Gatsby & DEV.to",
      "description": "Learn how I built a high-performance personal site that automatically syncs articles from DEV.to using Gatsby, providing a 'write once, publish everywhere' workflow.",
      "url": "https://dev.to/thiagocolen/thiago-colens-digital-universe-building-a-content-synced-portfolio-with-gatsby-devto-31cj",
      "tags": "gatsby, devto, jamstack, react",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "thiagocolen"
    },
    {
      "title": "Gemini CLI and Jules: my March 2026 stack",
      "description": "Development workflow is a very personal thing. As the various AI and LLM coding tools evolve, I've...",
      "url": "https://dev.to/rowan_m/gemini-cli-and-jules-my-march-2026-stack-4146",
      "tags": "ai, javascript, tooling, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "rowan_m"
    },
    {
      "title": "Fortran meets AI",
      "description": "A computer science exam from 1978 and 2026 AI models ",
      "url": "https://dev.to/viksaaskool/fortran-meets-ai-3oac",
      "tags": "fortran, ai",
      "reactions": 5,
      "comments": 0,
      "reading_time": 3,
      "author": "viksaaskool"
    },
    {
      "title": "What was your win this week?!",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-ilf",
      "tags": "weeklyretro, discuss",
      "reactions": 56,
      "comments": 128,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Why Are We Still Doing GPU Work in JavaScript? (Live WebGPU Benchmark & Demo🚀)",
      "description": "JavaScript has been the main language of the web for years. Its popularity probably surprised even...",
      "url": "https://dev.to/sylwia-lask/why-are-we-still-doing-gpu-work-in-javascript-live-webgpu-benchmark-demo-4j6i",
      "tags": "webdev, javascript, typescript, webgpu",
      "reactions": 82,
      "comments": 78,
      "reading_time": 6,
      "author": "sylwia-lask"
    },
    {
      "title": "90% of Code Will Be AI-Generated — So What the Hell Do We Actually Do?",
      "description": "I read the headline at 11pm on a random Wednesday.  \"Anthropic CEO predicts 90% of all code will be...",
      "url": "https://dev.to/harsh2644/90-of-code-will-be-ai-generated-so-what-the-hell-do-we-actually-do-2kg3",
      "tags": "ai, career, webdev, javascript",
      "reactions": 48,
      "comments": 42,
      "reading_time": 7,
      "author": "harsh2644"
    },
    {
      "title": "mcp-pvp — Privacy Vault Protocol for MCP",
      "description": "Inspiration   We were building an AI agent that handled customer support emails. The agent...",
      "url": "https://dev.to/mitiku1/mcp-pvp-privacy-vault-protocol-for-mcp-2b80",
      "tags": "ai, security, privacy, agents",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "mitiku1"
    },
    {
      "title": "I Analyzed Dozens of AI Agent Rules Files. Most Are Making Your Agent Worse.",
      "description": "An ETH Zurich study from February 2026 tested something most of us assumed was helping: giving AI...",
      "url": "https://dev.to/alexefimenko/i-analyzed-a-lot-of-ai-agent-rules-files-most-are-making-your-agent-worse-2fl",
      "tags": "ai, agents, productivity, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "alexefimenko"
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
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 356,
      "added_stars": 7077,
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
        },
        {
          "username": "glacierphonk",
          "href": "https://github.com/glacierphonk",
          "avatar": "https://avatars.githubusercontent.com/u/260244336"
        },
        {
          "username": "VaishnavGunjari",
          "href": "https://github.com/VaishnavGunjari",
          "avatar": "https://avatars.githubusercontent.com/u/169933825"
        },
        {
          "username": "whchi",
          "href": "https://github.com/whchi",
          "avatar": "https://avatars.githubusercontent.com/u/11798731"
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
      "forks": 2578,
      "added_stars": 4214,
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
      "author": "apify",
      "repo": "agent-skills",
      "avatar": "https://github.com/apify.png",
      "repo_link": "https://github.com/apify/agent-skills",
      "desc": "Collection of Apify Agent Skills",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 176,
      "added_stars": 352,
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
      "author": "coreyhaines31",
      "repo": "marketingskills",
      "avatar": "https://github.com/coreyhaines31.png",
      "repo_link": "https://github.com/coreyhaines31/marketingskills",
      "desc": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2011,
      "added_stars": 1746,
      "builtBy": [
        {
          "username": "coreyhaines31",
          "href": "https://github.com/coreyhaines31",
          "avatar": "https://avatars.githubusercontent.com/u/34802794"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Jiliac",
          "href": "https://github.com/Jiliac",
          "avatar": "https://avatars.githubusercontent.com/u/5956866"
        },
        {
          "username": "bensabic",
          "href": "https://github.com/bensabic",
          "avatar": "https://avatars.githubusercontent.com/u/27636870"
        },
        {
          "username": "Ray0907",
          "href": "https://github.com/Ray0907",
          "avatar": "https://avatars.githubusercontent.com/u/29456968"
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
      "forks": 7499,
      "added_stars": 579,
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
      "author": "datawhalechina",
      "repo": "easy-vibe",
      "avatar": "https://github.com/datawhalechina.png",
      "repo_link": "https://github.com/datawhalechina/easy-vibe",
      "desc": "easy vibe 👋 一起 vibe ! Learn Vibe Coding From 0 to 1 ｜ Vibe Coding 零基础教程 ｜产品原型、AI 与全栈多平台开发教程｜Tutorial on Product Prototype, AI & Full-Stack Multi-platform Dev",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 358,
      "added_stars": 440,
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
      "author": "jgraph",
      "repo": "drawio",
      "avatar": "https://github.com/jgraph.png",
      "repo_link": "https://github.com/jgraph/drawio",
      "desc": "draw.io is a JavaScript, client-side editor for general diagramming.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 717,
      "added_stars": 188,
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
      "author": "libaxuan",
      "repo": "cursor2api-go",
      "avatar": "https://github.com/libaxuan.png",
      "repo_link": "https://github.com/libaxuan/cursor2api-go",
      "desc": "Free claude-sonnet-4.6 | cursor不倒我不倒🙏 ❌ 不支持 tools / function calling / MCP",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 267,
      "added_stars": 296,
      "builtBy": [
        {
          "username": "libaxuan",
          "href": "https://github.com/libaxuan",
          "avatar": "https://avatars.githubusercontent.com/u/33255877"
        },
        {
          "username": "highkay",
          "href": "https://github.com/highkay",
          "avatar": "https://avatars.githubusercontent.com/u/443490"
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
      "forks": 19161,
      "added_stars": 245,
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
      "author": "fishjar",
      "repo": "kiss-translator",
      "avatar": "https://github.com/fishjar.png",
      "repo_link": "https://github.com/fishjar/kiss-translator",
      "desc": "A simple, open source bilingual translation extension & Greasemonkey script (一个简约、开源的 双语对照翻译扩展 & 油猴脚本)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 380,
      "added_stars": 101,
      "builtBy": [
        {
          "username": "fishjar",
          "href": "https://github.com/fishjar",
          "avatar": "https://avatars.githubusercontent.com/u/1157624"
        },
        {
          "username": "htyxyt",
          "href": "https://github.com/htyxyt",
          "avatar": "https://avatars.githubusercontent.com/u/62530172"
        },
        {
          "username": "XYenon",
          "href": "https://github.com/XYenon",
          "avatar": "https://avatars.githubusercontent.com/u/20698483"
        },
        {
          "username": "hoilc",
          "href": "https://github.com/hoilc",
          "avatar": "https://avatars.githubusercontent.com/u/9067094"
        },
        {
          "username": "maou-shonen",
          "href": "https://github.com/maou-shonen",
          "avatar": "https://avatars.githubusercontent.com/u/22576780"
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
      "forks": 2614,
      "added_stars": 781,
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
      "author": "FreeTubeApp",
      "repo": "FreeTube",
      "avatar": "https://github.com/FreeTubeApp.png",
      "repo_link": "https://github.com/FreeTubeApp/FreeTube",
      "desc": "An Open Source YouTube app for privacy",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1355,
      "added_stars": 137,
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
      "author": "songquanpeng",
      "repo": "one-api",
      "avatar": "https://github.com/songquanpeng.png",
      "repo_link": "https://github.com/songquanpeng/one-api",
      "desc": "LLM API 管理 & 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。LLM API management & key redistribution system, unifying multiple providers under a single API. Single binary, Docker-ready, with an English UI.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5837,
      "added_stars": 364,
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
      "title": "I Built an AI That Finds Your Bugs and Rewrites Your Code to Fix Them.",
      "description": "How I built CodeLens — a Groq-powered code review tool that detects SQL injection, memory leaks, and...",
      "url": "https://dev.to/kamaumbuguadev/i-built-an-ai-that-finds-your-bugs-and-rewrites-your-code-to-fix-them-4e21",
      "tags": "python, react, ai, security",
      "reactions": 2,
      "comments": 1,
      "reading_time": 5,
      "author": "kamaumbuguadev"
    },
    {
      "title": "Building Adaptive Language Coaching with Gemini Live API",
      "description": "Building Adaptive Language Coaching with Gemini Live API  How 12 neurolinguistic principles, a...",
      "url": "https://dev.to/ryan_ahamer_105192d3215e3/building-adaptive-language-coaching-with-gemini-live-api-2ngd",
      "tags": "gemini, ai, hackathon, webde",
      "reactions": 1,
      "comments": 0,
      "reading_time": 11,
      "author": "ryan_ahamer_105192d3215e3"
    },
    {
      "title": "Git Archaeology #15 — AI Creates Stars, Not Gravity",
      "description": "AI creates stars. But it doesn't create gravity. What happens when code universes experience their first starburst?",
      "url": "https://dev.to/machuz/git-archaeology-15-ai-creates-stars-not-gravity-4i05",
      "tags": "ai, opensource, git, career",
      "reactions": 2,
      "comments": 2,
      "reading_time": 16,
      "author": "machuz"
    },
    {
      "title": "Your AI Agent Just Failed in Production. Where Do You Even Start Debugging?",
      "description": "You shipped an AI agent to production. A user reports a wrong answer. Or worse, a user doesn't report...",
      "url": "https://dev.to/utibe_okodi_339fb47a13ef5/your-ai-agent-just-failed-in-production-where-do-you-even-start-debugging-268",
      "tags": "ai, agents, genai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "utibe_okodi_339fb47a13ef5"
    },
    {
      "title": "Stateless Software Is Dying: The Rise of Context-Aware Systems",
      "description": "Invitation: Now, I am officially active on X (Twitter). For new DevOps ideas, you can join me on X...",
      "url": "https://dev.to/jaideepparashar/stateless-software-is-dying-the-rise-of-context-aware-systems-pm",
      "tags": "webdev, ai, devops, programming",
      "reactions": 18,
      "comments": 1,
      "reading_time": 3,
      "author": "jaideepparashar"
    },
    {
      "title": "Beyond Single Agents: How to Build Collaborative AI Workflows with LangGraph",
      "description": "In the race to build AI applications, the early wins came from single, monolithic agents. You give an...",
      "url": "https://dev.to/programmingcentral/beyond-single-agents-how-to-build-collaborative-ai-workflows-with-langgraph-cpf",
      "tags": "javascript, typescript, ai, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "programmingcentral"
    },
    {
      "title": "EVAL #004: AI Agent Frameworks — LangGraph vs CrewAI vs AutoGen vs Smolagents vs OpenAI Agents SDK",
      "description": "Every week there's a new AI agent framework on Hacker News. The GitHub stars pile up, the demo videos...",
      "url": "https://dev.to/ultraduneai/eval-004-ai-agent-frameworks-langgraph-vs-crewai-vs-autogen-vs-smolagents-vs-openai-agents-sdk-190l",
      "tags": "ai, agents, python, machinelearning",
      "reactions": 1,
      "comments": 0,
      "reading_time": 1,
      "author": "ultraduneai"
    },
    {
      "title": "I built the personal AI that OpenClaw should have been",
      "description": "OpenClaw hit 216,000 GitHub stars in six weeks. It proved that millions of people want a personal AI...",
      "url": "https://dev.to/heliosnova/i-built-the-personal-ai-that-openclaw-should-have-been-1fgj",
      "tags": "ai, opensource, selfhosted, python",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "heliosnova"
    },
    {
      "title": "Why Claude Code Skills Don't Trigger (And How to Fix Them in 2026)",
      "description": "The core problem with Claude Code skills is a token budget overflow that silently drops your skill...",
      "url": "https://dev.to/lizechengnet/why-claude-code-skills-dont-trigger-and-how-to-fix-them-in-2026-o7h",
      "tags": "ai, buildinpublic, webdev, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "lizechengnet"
    },
    {
      "title": "Power Apps - A Cooler Way to use Code Apps",
      "description": "If you don't know about Code Apps in the Power Platform let me quickly fill you in.  They are full...",
      "url": "https://dev.to/wyattdave/power-apps-a-cooler-way-to-use-code-apps-3nb6",
      "tags": "powerapps, powerplatform, ai, cli",
      "reactions": 5,
      "comments": 0,
      "reading_time": 5,
      "author": "wyattdave"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "opengrass",
      "descendants": 180,
      "id": 47392084,
      "kids": [
        47393177,
        47395037,
        47396126,
        47392794,
        47393187,
        47394078,
        47394573,
        47395828,
        47393021,
        47396092,
        47395661,
        47393477,
        47394181,
        47394042,
        47393497,
        47393644,
        47395972,
        47394009,
        47395088,
        47395097,
        47395065,
        47393590,
        47394434,
        47395530,
        47393493,
        47395244,
        47394447,
        47394257,
        47393801,
        47393277,
        47395024,
        47393746,
        47393652,
        47392914,
        47394446,
        47392829,
        47392789,
        47393070,
        47392928,
        47392852,
        47393301,
        47392988,
        47393502,
        47393064,
        47395663
      ],
      "score": 617,
      "text": "<a href=\"https:&#x2F;&#x2F;www.parl.ca&#x2F;DocumentViewer&#x2F;en&#x2F;45-1&#x2F;bill&#x2F;C-22&#x2F;first-reading\" rel=\"nofollow\">https:&#x2F;&#x2F;www.parl.ca&#x2F;DocumentViewer&#x2F;en&#x2F;45-1&#x2F;bill&#x2F;C-22&#x2F;first-r...</a>",
      "time": 1773609736,
      "title": "Canada's bill C-22 mandates mass metadata surveillance",
      "type": "story",
      "url": "https://www.michaelgeist.ca/2026/03/a-tale-of-two-bills-lawful-access-returns-with-changes-to-warrantless-access-but-dangerous-backdoor-surveillance-risks-remains/"
    },
    {
      "by": "kermatt",
      "descendants": 221,
      "id": 47390945,
      "kids": [
        47391711,
        47391592,
        47391949,
        47395852,
        47393825,
        47395848,
        47393092,
        47392631,
        47396023,
        47392035,
        47392574,
        47391705,
        47395053,
        47391497,
        47392485,
        47391568,
        47392070,
        47392888,
        47392588,
        47393171,
        47395171,
        47394258,
        47394317,
        47395764,
        47392018,
        47391585,
        47395874,
        47392745,
        47395784,
        47395329,
        47394896,
        47392817,
        47391912,
        47392320,
        47391646,
        47393680,
        47393283,
        47394721,
        47391600,
        47395098,
        47391732,
        47393252,
        47391765,
        47392129,
        47392749,
        47392260,
        47393182,
        47396058,
        47395369,
        47393598,
        47391464
      ],
      "score": 472,
      "time": 1773602718,
      "title": "The 49MB web page",
      "type": "story",
      "url": "https://thatshubham.com/blog/news-audit"
    },
    {
      "by": "indigodaddy",
      "descendants": 57,
      "id": 47394022,
      "kids": [
        47396133,
        47395680,
        47396098,
        47395774,
        47394537,
        47395501,
        47395596,
        47395500,
        47395685,
        47396079,
        47395824,
        47395765,
        47394702,
        47395805
      ],
      "score": 119,
      "time": 1773624249,
      "title": "How I write software with LLMs",
      "type": "story",
      "url": "https://www.stavros.io/posts/how-i-write-software-with-llms/"
    },
    {
      "by": "xnx",
      "descendants": 187,
      "id": 47390817,
      "kids": [
        47392034,
        47392102,
        47391079,
        47392002,
        47395052,
        47395304,
        47391489,
        47391356,
        47392373,
        47395045,
        47395215,
        47393503,
        47394813,
        47393719,
        47394424,
        47394874,
        47391775,
        47392089,
        47393307,
        47391926,
        47391198,
        47391685,
        47391886,
        47392675,
        47391206,
        47392536,
        47391877,
        47392853,
        47391760,
        47391812,
        47394648,
        47391717,
        47391810,
        47393044,
        47392869,
        47391463,
        47391149,
        47396027,
        47394601,
        47392433,
        47395790,
        47392448,
        47394142,
        47393651,
        47394694,
        47392123,
        47391281,
        47391278,
        47391165,
        47392756
      ],
      "score": 446,
      "time": 1773601973,
      "title": "Chrome DevTools MCP (2025)",
      "type": "story",
      "url": "https://developer.chrome.com/blog/chrome-devtools-mcp-debug-your-browser-session"
    },
    {
      "by": "o4c",
      "descendants": 11,
      "id": 47350016,
      "kids": [
        47395494,
        47395599,
        47395245,
        47395644
      ],
      "score": 57,
      "time": 1773320675,
      "title": "Electric motor scaling laws and inertia in robot actuators",
      "type": "story",
      "url": "https://robot-daycare.com/posts/actuation_series_1/"
    },
    {
      "by": "jbarrow",
      "descendants": 3,
      "id": 47343902,
      "kids": [
        47395207,
        47395164,
        47395840
      ],
      "score": 42,
      "time": 1773271462,
      "title": "What every computer scientist should know about floating-point arithmetic (1991) [pdf]",
      "type": "story",
      "url": "https://www.itu.dk/~sestoft/bachelor/IEEE754_article.pdf"
    },
    {
      "by": "tzury",
      "descendants": 28,
      "id": 47388676,
      "kids": [
        47396130,
        47393509,
        47392209,
        47395601,
        47391507,
        47392301,
        47392962,
        47393340,
        47393164,
        47393743,
        47393446,
        47393353,
        47392942,
        47394047,
        47391662,
        47393535,
        47394454,
        47395086,
        47393860,
        47391607,
        47391331,
        47391007,
        47390699
      ],
      "score": 365,
      "time": 1773590469,
      "title": "LLM Architecture Gallery",
      "type": "story",
      "url": "https://sebastianraschka.com/llm-architecture-gallery/"
    },
    {
      "by": "tjohnell",
      "descendants": 135,
      "id": 47391803,
      "kids": [
        47393253,
        47396090,
        47395741,
        47395275,
        47393439,
        47393844,
        47393636,
        47395253,
        47395342,
        47393562,
        47395565,
        47395692,
        47394400,
        47393286,
        47393940,
        47395173,
        47394988,
        47395721,
        47393228,
        47393400,
        47393528,
        47394895,
        47394978,
        47395553,
        47394547,
        47395955,
        47393335,
        47395335,
        47393970,
        47395666,
        47393461,
        47393625,
        47393879,
        47394481,
        47393904,
        47393445,
        47394242,
        47393881,
        47395056
      ],
      "score": 182,
      "time": 1773608181,
      "title": "LLMs can be exhausting",
      "type": "story",
      "url": "https://tomjohnell.com/llms-can-be-absolutely-exhausting/"
    },
    {
      "by": "ingve",
      "descendants": 0,
      "id": 47349499,
      "score": 24,
      "time": 1773317480,
      "title": "How far can you go with IX Route Servers only?",
      "type": "story",
      "url": "https://blog.benjojo.co.uk/post/how-far-can-you-get-with-ix-route-servers"
    },
    {
      "by": "namnnumbr",
      "descendants": 116,
      "id": 47389570,
      "kids": [
        47395063,
        47392805,
        47395177,
        47395633,
        47395796,
        47393017,
        47392709,
        47395658,
        47394135,
        47392800,
        47389571,
        47394191,
        47392668,
        47392935,
        47393018,
        47395920,
        47394471,
        47394020,
        47395068,
        47394152,
        47394775,
        47392959,
        47393480,
        47393973,
        47393957,
        47394174,
        47393230,
        47394342,
        47393698,
        47394165,
        47393748,
        47393968,
        47394110,
        47393465,
        47393175
      ],
      "score": 261,
      "time": 1773595500,
      "title": "Stop Sloppypasta",
      "type": "story",
      "url": "https://stopsloppypasta.ai/"
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
      "by": "opengrass",
      "descendants": 180,
      "id": 47392084,
      "kids": [
        47393177,
        47395037,
        47396126,
        47392794,
        47393187,
        47394078,
        47394573,
        47395828,
        47393021,
        47396092,
        47395661,
        47393477,
        47394181,
        47394042,
        47393497,
        47393644,
        47395972,
        47394009,
        47395088,
        47395097,
        47395065,
        47393590,
        47394434,
        47395530,
        47393493,
        47395244,
        47394447,
        47394257,
        47393801,
        47393277,
        47395024,
        47393746,
        47393652,
        47392914,
        47394446,
        47392829,
        47392789,
        47393070,
        47392928,
        47392852,
        47393301,
        47392988,
        47393502,
        47393064,
        47395663
      ],
      "score": 617,
      "text": "<a href=\"https:&#x2F;&#x2F;www.parl.ca&#x2F;DocumentViewer&#x2F;en&#x2F;45-1&#x2F;bill&#x2F;C-22&#x2F;first-reading\" rel=\"nofollow\">https:&#x2F;&#x2F;www.parl.ca&#x2F;DocumentViewer&#x2F;en&#x2F;45-1&#x2F;bill&#x2F;C-22&#x2F;first-r...</a>",
      "time": 1773609736,
      "title": "Canada's bill C-22 mandates mass metadata surveillance",
      "type": "story",
      "url": "https://www.michaelgeist.ca/2026/03/a-tale-of-two-bills-lawful-access-returns-with-changes-to-warrantless-access-but-dangerous-backdoor-surveillance-risks-remains/"
    },
    {
      "by": "kermatt",
      "descendants": 221,
      "id": 47390945,
      "kids": [
        47391711,
        47391592,
        47391949,
        47395852,
        47393825,
        47395848,
        47393092,
        47392631,
        47396023,
        47392035,
        47392574,
        47391705,
        47395053,
        47391497,
        47392485,
        47391568,
        47392070,
        47392888,
        47392588,
        47393171,
        47395171,
        47394258,
        47394317,
        47395764,
        47392018,
        47391585,
        47395874,
        47392745,
        47395784,
        47395329,
        47394896,
        47392817,
        47391912,
        47392320,
        47391646,
        47393680,
        47393283,
        47394721,
        47391600,
        47395098,
        47391732,
        47393252,
        47391765,
        47392129,
        47392749,
        47392260,
        47393182,
        47396058,
        47395369,
        47393598,
        47391464
      ],
      "score": 472,
      "time": 1773602718,
      "title": "The 49MB web page",
      "type": "story",
      "url": "https://thatshubham.com/blog/news-audit"
    },
    {
      "by": "indigodaddy",
      "descendants": 57,
      "id": 47394022,
      "kids": [
        47396133,
        47395680,
        47396098,
        47395774,
        47394537,
        47395501,
        47395596,
        47395500,
        47395685,
        47396079,
        47395824,
        47395765,
        47394702,
        47395805
      ],
      "score": 119,
      "time": 1773624249,
      "title": "How I write software with LLMs",
      "type": "story",
      "url": "https://www.stavros.io/posts/how-i-write-software-with-llms/"
    },
    {
      "by": "xnx",
      "descendants": 187,
      "id": 47390817,
      "kids": [
        47392034,
        47392102,
        47391079,
        47392002,
        47395052,
        47395304,
        47391489,
        47391356,
        47392373,
        47395045,
        47395215,
        47393503,
        47394813,
        47393719,
        47394424,
        47394874,
        47391775,
        47392089,
        47393307,
        47391926,
        47391198,
        47391685,
        47391886,
        47392675,
        47391206,
        47392536,
        47391877,
        47392853,
        47391760,
        47391812,
        47394648,
        47391717,
        47391810,
        47393044,
        47392869,
        47391463,
        47391149,
        47396027,
        47394601,
        47392433,
        47395790,
        47392448,
        47394142,
        47393651,
        47394694,
        47392123,
        47391281,
        47391278,
        47391165,
        47392756
      ],
      "score": 446,
      "time": 1773601973,
      "title": "Chrome DevTools MCP (2025)",
      "type": "story",
      "url": "https://developer.chrome.com/blog/chrome-devtools-mcp-debug-your-browser-session"
    },
    {
      "by": "o4c",
      "descendants": 11,
      "id": 47350016,
      "kids": [
        47395494,
        47395599,
        47395245,
        47395644
      ],
      "score": 57,
      "time": 1773320675,
      "title": "Electric motor scaling laws and inertia in robot actuators",
      "type": "story",
      "url": "https://robot-daycare.com/posts/actuation_series_1/"
    },
    {
      "by": "jbarrow",
      "descendants": 3,
      "id": 47343902,
      "kids": [
        47395207,
        47395164,
        47395840
      ],
      "score": 42,
      "time": 1773271462,
      "title": "What every computer scientist should know about floating-point arithmetic (1991) [pdf]",
      "type": "story",
      "url": "https://www.itu.dk/~sestoft/bachelor/IEEE754_article.pdf"
    },
    {
      "by": "tzury",
      "descendants": 28,
      "id": 47388676,
      "kids": [
        47396130,
        47393509,
        47392209,
        47395601,
        47391507,
        47392301,
        47392962,
        47393340,
        47393164,
        47393743,
        47393446,
        47393353,
        47392942,
        47394047,
        47391662,
        47393535,
        47394454,
        47395086,
        47393860,
        47391607,
        47391331,
        47391007,
        47390699
      ],
      "score": 365,
      "time": 1773590469,
      "title": "LLM Architecture Gallery",
      "type": "story",
      "url": "https://sebastianraschka.com/llm-architecture-gallery/"
    },
    {
      "by": "tjohnell",
      "descendants": 135,
      "id": 47391803,
      "kids": [
        47393253,
        47396090,
        47395741,
        47395275,
        47393439,
        47393844,
        47393636,
        47395253,
        47395342,
        47393562,
        47395565,
        47395692,
        47394400,
        47393286,
        47393940,
        47395173,
        47394988,
        47395721,
        47393228,
        47393400,
        47393528,
        47394895,
        47394978,
        47395553,
        47394547,
        47395955,
        47393335,
        47395335,
        47393970,
        47395666,
        47393461,
        47393625,
        47393879,
        47394481,
        47393904,
        47393445,
        47394242,
        47393881,
        47395056
      ],
      "score": 182,
      "time": 1773608181,
      "title": "LLMs can be exhausting",
      "type": "story",
      "url": "https://tomjohnell.com/llms-can-be-absolutely-exhausting/"
    },
    {
      "by": "ingve",
      "descendants": 0,
      "id": 47349499,
      "score": 24,
      "time": 1773317480,
      "title": "How far can you go with IX Route Servers only?",
      "type": "story",
      "url": "https://blog.benjojo.co.uk/post/how-far-can-you-get-with-ix-route-servers"
    },
    {
      "by": "namnnumbr",
      "descendants": 116,
      "id": 47389570,
      "kids": [
        47395063,
        47392805,
        47395177,
        47395633,
        47395796,
        47393017,
        47392709,
        47395658,
        47394135,
        47392800,
        47389571,
        47394191,
        47392668,
        47392935,
        47393018,
        47395920,
        47394471,
        47394020,
        47395068,
        47394152,
        47394775,
        47392959,
        47393480,
        47393973,
        47393957,
        47394174,
        47393230,
        47394342,
        47393698,
        47394165,
        47393748,
        47393968,
        47394110,
        47393465,
        47393175
      ],
      "score": 261,
      "time": 1773595500,
      "title": "Stop Sloppypasta",
      "type": "story",
      "url": "https://stopsloppypasta.ai/"
    },
    {
      "by": "AnnikaL",
      "descendants": 0,
      "id": 47342185,
      "score": 9,
      "time": 1773264376,
      "title": "Kona EV Hacking",
      "type": "story",
      "url": "http://techno-fandom.org/~hobbit/cars/ev/"
    },
    {
      "by": "dpassens",
      "descendants": 132,
      "id": 47388137,
      "kids": [
        47396119,
        47395914,
        47390865,
        47394265,
        47394161,
        47391523,
        47389972,
        47395924,
        47391144,
        47390122,
        47389729,
        47391193,
        47392883,
        47389943,
        47393998,
        47390131,
        47394986,
        47390514,
        47392017,
        47390650,
        47389619,
        47391780,
        47390116,
        47394288
      ],
      "score": 277,
      "time": 1773587364,
      "title": "Separating the Wayland compositor and window manager",
      "type": "story",
      "url": "https://isaacfreund.com/blog/river-window-management/"
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
      "title": "Separating the Wayland Compositor and Window Manager",
      "url": "https://isaacfreund.com/blog/river-window-management/",
      "score": 93,
      "comments": 12,
      "tags": [
        "graphics"
      ],
      "id": "pk2axu"
    },
    {
      "title": "Gothub is live",
      "url": "https://x61.sh/log/2026/03/14032026191148-gothub.html",
      "score": 67,
      "comments": 10,
      "tags": [
        "openbsd",
        "vcs"
      ],
      "id": "yqnihu"
    },
    {
      "title": "rack-mount hydroponics",
      "url": "https://sa.lj.am/rack-mount-hydroponics/",
      "score": 42,
      "comments": 0,
      "tags": [
        "hardware"
      ],
      "id": "vio5wq"
    },
    {
      "title": "I let Claude Code configure my Arch install",
      "url": "https://www.willmorrison.com/blog/03-15-2026-llm-dotfiles",
      "score": 10,
      "comments": 11,
      "tags": [
        "linux",
        "vibecoding"
      ],
      "id": "8pfxqy"
    },
    {
      "title": "Try not to get scammed while looking for work",
      "url": "https://trysound.io/try-not-to-get-scammed-while-looking-for-work/",
      "score": 5,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "yhc5ug"
    },
    {
      "title": "tree-style invite systems reduce AI slop",
      "url": "https://abyss.fish/tree-style_invite_systems_reduce_AI_slop",
      "score": 82,
      "comments": 31,
      "tags": [
        "culture"
      ],
      "id": "dw0hx5"
    },
    {
      "title": "Introducing pgtui, a Postgres TUI client",
      "url": "https://kdwarn.net/programming/blog/227",
      "score": 4,
      "comments": 0,
      "tags": [
        "databases",
        "rust"
      ],
      "id": "mbljtb"
    },
    {
      "title": "A Linux distribution designed to eliminate single points of failure",
      "url": "https://stagex.tools/",
      "score": 15,
      "comments": 4,
      "tags": [
        "linux",
        "privacy",
        "security"
      ],
      "id": "e1skzj"
    },
    {
      "title": "Changes to OpenTTD distribution on Steam",
      "url": "https://www.openttd.org/news/2026/03/14/steam-changes",
      "score": 34,
      "comments": 14,
      "tags": [
        "games"
      ],
      "id": "nc3c14"
    },
    {
      "title": "Summary - Rust Project Perspectives on AI",
      "url": "https://nikomatsakis.github.io/rust-project-perspectives-on-ai/feb27-summary.html",
      "score": 27,
      "comments": 16,
      "tags": [
        "rust",
        "vibecoding"
      ],
      "id": "mizmno"
    }
  ]
}
```

