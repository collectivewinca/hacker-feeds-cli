# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-21 06:26:33 UTC

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
      "title": "What was your win this week??",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-35ja",
      "tags": "weeklyretro, discuss",
      "reactions": 34,
      "comments": 23,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Get Started on Dev.to! A Beginner's Guide to Engage with the Community!",
      "description": "All Images are own by the Pokemon Company!  Important Information: This post is an Unofficial Dev.to...",
      "url": "https://dev.to/francistrdev/get-started-on-devto-a-beginners-guide-to-engage-with-the-community-4ach",
      "tags": "discuss, community, beginners, howtodevto",
      "reactions": 41,
      "comments": 22,
      "reading_time": 6,
      "author": "francistrdev"
    },
    {
      "title": "Unlocking Gemini CLI with Skills, Hooks & Plan Mode",
      "description": "In Unlocking Gemini CLI with Skills, Hooks &amp; Plan Mode, we moved past the basics and into the...",
      "url": "https://dev.to/googleai/unlocking-gemini-cli-with-skills-hooks-plan-mode-2bgf",
      "tags": "gemini, ai, cli",
      "reactions": 38,
      "comments": 3,
      "reading_time": 3,
      "author": "greggyb"
    },
    {
      "title": "Congrats to the Winners of Our First DEV Weekend Challenge!",
      "description": "It's time!! We are thrilled to announce the winners of our first DEV Weekend Challenge.  The prompt...",
      "url": "https://dev.to/devteam/congrats-to-the-winners-of-our-first-dev-weekend-challenge-1gml",
      "tags": "ai, devchallenge, weekendchallenge, webdev",
      "reactions": 65,
      "comments": 17,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Vandalizing My Own Wikipedia Experience: A 90s Cyberpunk GeoCities Makeover",
      "description": "Wikipedia is a marvel. It is the Library of Alexandria of our time, a meticulously curated repository...",
      "url": "https://dev.to/googleai/vandalizing-my-own-wikipedia-experience-a-90s-cyberpunk-geocities-makeover-13ie",
      "tags": "webdev, ai, javascript, programming",
      "reactions": 51,
      "comments": 4,
      "reading_time": 4,
      "author": "dynamicwebpaige"
    },
    {
      "title": "My AI agent messed up a UTC time conversion algorithm after I *specifically told it* to make no mistakes. smh",
      "description": "A post by Ben Halpern",
      "url": "https://dev.to/ben/my-ai-agent-messed-up-a-utc-time-conversion-algorithm-after-i-specifically-told-it-to-make-no-46k7",
      "tags": "agents, ai, algorithms, discuss",
      "reactions": 41,
      "comments": 4,
      "reading_time": 0,
      "author": "ben"
    },
    {
      "title": "My First Experience Creating Antigravity Skills",
      "description": "Experimenting with Agent skills for the first time, feeling empowered!    Last week, I was at an...",
      "url": "https://dev.to/googleai/my-first-experience-creating-antigravity-skills-524b",
      "tags": "antigravity, ai, googlecloud, agents",
      "reactions": 39,
      "comments": 2,
      "reading_time": 5,
      "author": "shirmeirlador"
    },
    {
      "title": "Quick tip: your og:image should be 1200x630px",
      "description": "Quick tip about link previews:  Your og:image should be 1200x630px. Most sites get this wrong —...",
      "url": "https://dev.to/bengreenberg/quick-tip-your-ogimage-should-be-1200x630px-4m27",
      "tags": "seo, webdev, devtips, opengraph",
      "reactions": 29,
      "comments": 3,
      "reading_time": 1,
      "author": "bengreenberg"
    },
    {
      "title": "Vitest's 4.1 New \"Fast-Forward\" Mode Skips Timer Delays Instantly",
      "description": "An important property of tests is that they should be composable.  Here is an example. Say you have a...",
      "url": "https://dev.to/playfulprogramming-angular/vitests-41-new-fast-forward-mode-skips-timer-delays-instantly-4a4h",
      "tags": "webdev, javascript, testing, angular",
      "reactions": 29,
      "comments": 0,
      "reading_time": 3,
      "author": "younesjd"
    },
    {
      "title": "I Scanned 100 AI Codebases - Here's What I Found",
      "description": "I've been building VibeCheck for the past few months - it's a security scanner specifically for...",
      "url": "https://dev.to/itskondrat/i-scanned-100-ai-codebases-heres-what-i-found-55be",
      "tags": "vibecoding, ai, security, webdev",
      "reactions": 7,
      "comments": 51,
      "reading_time": 3,
      "author": "itskondrat"
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
      "author": "jarrodwatts",
      "repo": "claude-hud",
      "avatar": "https://github.com/jarrodwatts.png",
      "repo_link": "https://github.com/jarrodwatts/claude-hud",
      "desc": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 418,
      "added_stars": 4693,
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
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 451,
      "added_stars": 4529,
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
      "author": "affaan-m",
      "repo": "everything-claude-code",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/everything-claude-code",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 11996,
      "added_stars": 15436,
      "builtBy": [
        {
          "username": "affaan-m",
          "href": "https://github.com/affaan-m",
          "avatar": "https://avatars.githubusercontent.com/u/124439313"
        },
        {
          "username": "pangerlkr",
          "href": "https://github.com/pangerlkr",
          "avatar": "https://avatars.githubusercontent.com/u/73515951"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shimo4228",
          "href": "https://github.com/shimo4228",
          "avatar": "https://avatars.githubusercontent.com/u/54734315"
        }
      ]
    },
    {
      "author": "andrewyng",
      "repo": "context-hub",
      "avatar": "https://github.com/andrewyng.png",
      "repo_link": "https://github.com/andrewyng/context-hub",
      "desc": "",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 973,
      "added_stars": 5170,
      "builtBy": [
        {
          "username": "rohitprasad15",
          "href": "https://github.com/rohitprasad15",
          "avatar": "https://avatars.githubusercontent.com/u/1796239"
        },
        {
          "username": "Ivanye2509",
          "href": "https://github.com/Ivanye2509",
          "avatar": "https://avatars.githubusercontent.com/u/91228630"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "danielhorvath-cleo",
          "href": "https://github.com/danielhorvath-cleo",
          "avatar": "https://avatars.githubusercontent.com/u/147529159"
        },
        {
          "username": "neilthomass",
          "href": "https://github.com/neilthomass",
          "avatar": "https://avatars.githubusercontent.com/u/195538237"
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
      "forks": 1365,
      "added_stars": 129,
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
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3029,
      "added_stars": 7756,
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
          "username": "trek-e",
          "href": "https://github.com/trek-e",
          "avatar": "https://avatars.githubusercontent.com/u/4738965"
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
        }
      ]
    },
    {
      "author": "hmjz100",
      "repo": "LinkSwift",
      "avatar": "https://github.com/hmjz100.png",
      "repo_link": "https://github.com/hmjz100/LinkSwift",
      "desc": "一个基于 JavaScript 的网盘文件下载地址获取工具。基于【网盘直链下载助手】修改 ，支持 百度网盘 / 阿里云盘 / 中国移动云盘 / 天翼云盘 / 迅雷云盘 / 夸克网盘 / UC网盘 / 123云盘 八大网盘",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 786,
      "added_stars": 578,
      "builtBy": [
        {
          "username": "hmjz100",
          "href": "https://github.com/hmjz100",
          "avatar": "https://avatars.githubusercontent.com/u/98228280"
        },
        {
          "username": "MisaLiu",
          "href": "https://github.com/MisaLiu",
          "avatar": "https://avatars.githubusercontent.com/u/62408957"
        },
        {
          "username": "Night-stars-1",
          "href": "https://github.com/Night-stars-1",
          "avatar": "https://avatars.githubusercontent.com/u/99261160"
        },
        {
          "username": "AstralFlare-owo",
          "href": "https://github.com/AstralFlare-owo",
          "avatar": "https://avatars.githubusercontent.com/u/46892455"
        }
      ]
    },
    {
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2815,
      "added_stars": 4204,
      "builtBy": [
        {
          "username": "thedotmack",
          "href": "https://github.com/thedotmack",
          "avatar": "https://avatars.githubusercontent.com/u/683968"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "rodboev",
          "href": "https://github.com/rodboev",
          "avatar": "https://avatars.githubusercontent.com/u/106971"
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
      "forks": 1514,
      "added_stars": 460,
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
      "author": "ComposioHQ",
      "repo": "awesome-claude-plugins",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/awesome-claude-plugins",
      "desc": "A curated list of Plugins that let you extend Claude Code with custom commands, agents, hooks, and MCP servers through the plugin system.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 227,
      "added_stars": 64,
      "builtBy": [
        {
          "username": "Prat011",
          "href": "https://github.com/Prat011",
          "avatar": "https://avatars.githubusercontent.com/u/67639393"
        },
        {
          "username": "sujayjayjay",
          "href": "https://github.com/sujayjayjay",
          "avatar": "https://avatars.githubusercontent.com/u/84703335"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mksglu",
          "href": "https://github.com/mksglu",
          "avatar": "https://avatars.githubusercontent.com/u/6067714"
        },
        {
          "username": "SebConejo",
          "href": "https://github.com/SebConejo",
          "avatar": "https://avatars.githubusercontent.com/u/11723962"
        }
      ]
    },
    {
      "author": "justlovemaki",
      "repo": "AIClient-2-API",
      "avatar": "https://github.com/justlovemaki.png",
      "repo_link": "https://github.com/justlovemaki/AIClient-2-API",
      "desc": "Simulates Gemini CLI, Antigravity, Qwen Code, and Kiro client requests, compatible with the OpenAI API. It supports thousands of Gemini model requests per day and offers free use of the built-in Claude model in Kiro. Easily connect to any client via the API, making AI development more efficient!",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 901,
      "added_stars": 766,
      "builtBy": [
        {
          "username": "justlikemaki",
          "href": "https://github.com/justlikemaki",
          "avatar": "https://avatars.githubusercontent.com/u/12859173"
        },
        {
          "username": "justlovemaki",
          "href": "https://github.com/justlovemaki",
          "avatar": "https://avatars.githubusercontent.com/u/22851716"
        },
        {
          "username": "leonaii",
          "href": "https://github.com/leonaii",
          "avatar": "https://avatars.githubusercontent.com/u/7904076"
        },
        {
          "username": "MicoMiOvO",
          "href": "https://github.com/MicoMiOvO",
          "avatar": "https://avatars.githubusercontent.com/u/119792728"
        },
        {
          "username": "tickernelz",
          "href": "https://github.com/tickernelz",
          "avatar": "https://avatars.githubusercontent.com/u/10543415"
        }
      ]
    },
    {
      "author": "tabler",
      "repo": "tabler-icons",
      "avatar": "https://github.com/tabler.png",
      "repo_link": "https://github.com/tabler/tabler-icons",
      "desc": "A set of over 5900 free MIT-licensed high-quality SVG icons for you to use in your web projects.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1100,
      "added_stars": 134,
      "builtBy": [
        {
          "username": "codecalm",
          "href": "https://github.com/codecalm",
          "avatar": "https://avatars.githubusercontent.com/u/1282324"
        },
        {
          "username": "FreexD",
          "href": "https://github.com/FreexD",
          "avatar": "https://avatars.githubusercontent.com/u/7117869"
        },
        {
          "username": "0xflotus",
          "href": "https://github.com/0xflotus",
          "avatar": "https://avatars.githubusercontent.com/u/26602940"
        },
        {
          "username": "BG-Software-BG",
          "href": "https://github.com/BG-Software-BG",
          "avatar": "https://avatars.githubusercontent.com/u/73077398"
        },
        {
          "username": "mauriciabad",
          "href": "https://github.com/mauriciabad",
          "avatar": "https://avatars.githubusercontent.com/u/12821361"
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
      "forks": 2252,
      "added_stars": 1812,
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
      "author": "songquanpeng",
      "repo": "one-api",
      "avatar": "https://github.com/songquanpeng.png",
      "repo_link": "https://github.com/songquanpeng/one-api",
      "desc": "LLM API 管理 & 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。LLM API management & key redistribution system, unifying multiple providers under a single API. Single binary, Docker-ready, with an English UI.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5875,
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
      "title": "Unlocking Gemini CLI with Skills, Hooks & Plan Mode",
      "description": "In Unlocking Gemini CLI with Skills, Hooks &amp; Plan Mode, we moved past the basics and into the...",
      "url": "https://dev.to/googleai/unlocking-gemini-cli-with-skills-hooks-plan-mode-2bgf",
      "tags": "gemini, ai, cli",
      "reactions": 38,
      "comments": 3,
      "reading_time": 3,
      "author": "greggyb"
    },
    {
      "title": "Congrats to the Winners of Our First DEV Weekend Challenge!",
      "description": "It's time!! We are thrilled to announce the winners of our first DEV Weekend Challenge.  The prompt...",
      "url": "https://dev.to/devteam/congrats-to-the-winners-of-our-first-dev-weekend-challenge-1gml",
      "tags": "ai, devchallenge, weekendchallenge, webdev",
      "reactions": 65,
      "comments": 17,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Vandalizing My Own Wikipedia Experience: A 90s Cyberpunk GeoCities Makeover",
      "description": "Wikipedia is a marvel. It is the Library of Alexandria of our time, a meticulously curated repository...",
      "url": "https://dev.to/googleai/vandalizing-my-own-wikipedia-experience-a-90s-cyberpunk-geocities-makeover-13ie",
      "tags": "webdev, ai, javascript, programming",
      "reactions": 51,
      "comments": 4,
      "reading_time": 4,
      "author": "dynamicwebpaige"
    },
    {
      "title": "Congrats to the \"Built with Google Gemini: Writing Challenge\" Winners!",
      "description": "The results are in! We are thrilled to announce the winners of the Built with Google Gemini: Writing...",
      "url": "https://dev.to/devteam/congrats-to-the-built-with-google-gemini-writing-challenge-winners-5ej6",
      "tags": "geminireflections, gemini, ai, devchallenge",
      "reactions": 68,
      "comments": 22,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "My AI agent messed up a UTC time conversion algorithm after I *specifically told it* to make no mistakes. smh",
      "description": "A post by Ben Halpern",
      "url": "https://dev.to/ben/my-ai-agent-messed-up-a-utc-time-conversion-algorithm-after-i-specifically-told-it-to-make-no-46k7",
      "tags": "agents, ai, algorithms, discuss",
      "reactions": 41,
      "comments": 4,
      "reading_time": 0,
      "author": "ben"
    },
    {
      "title": "My First Experience Creating Antigravity Skills",
      "description": "Experimenting with Agent skills for the first time, feeling empowered!    Last week, I was at an...",
      "url": "https://dev.to/googleai/my-first-experience-creating-antigravity-skills-524b",
      "tags": "antigravity, ai, googlecloud, agents",
      "reactions": 39,
      "comments": 2,
      "reading_time": 5,
      "author": "shirmeirlador"
    },
    {
      "title": "I Built a Personalized AI Life Coach with Obsidian + Claude — Here's the Exact Setup",
      "description": "Most people use AI the same way they use Google: ask a question, get an answer, close the tab. The...",
      "url": "https://dev.to/aschung212/i-built-a-personalized-ai-life-coach-with-obsidian-claude-heres-the-exact-setup-3aj2",
      "tags": "productivity, ai, obsidian, pkm",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "aschung212"
    },
    {
      "title": "Why I Built a Privacy-First AI Assistant for Visual Studio 2022 (Goodbye Cloud-Only Copilots!)",
      "description": "The Problem: Cloud AI is Great, but Privacy is Greater   We all love GitHub Copilot, but...",
      "url": "https://dev.to/furkiak/why-i-built-a-privacy-first-ai-assistant-for-visual-studio-2022-goodbye-cloud-only-copilots-e9h",
      "tags": "ai, opensource, csharp, productivity",
      "reactions": 2,
      "comments": 2,
      "reading_time": 2,
      "author": "furkiak"
    },
    {
      "title": "Your Agent Is Making Decisions Nobody Authorized",
      "description": "A quant fund ran five independent strategies. Every one passed its individual risk limits. Every...",
      "url": "https://dev.to/dannwaneri/your-agent-is-making-decisions-nobody-authorized-2bc7",
      "tags": "ai, webdev, architecture, discuss",
      "reactions": 29,
      "comments": 24,
      "reading_time": 7,
      "author": "dannwaneri"
    },
    {
      "title": "Claude Code v2.1.76~81 심층 분석: --channels 텔레그램 연동, --bare CI/CD 모드, /remote-control 원격 제어",
      "description": "Claude Code v2.1.76~81 심층 분석: 9가지 핵심 기능의 아키텍처와 실전 활용   2026년 3월 14일부터 20일까지, Claude Code는 6개...",
      "url": "https://dev.to/_46ea277e677b888e0cd13/claude-code-v217681-simceung-bunseog-channels-telregeuraem-yeondong-bare-cicd-modeu-remote-control-weongyeog-jeeo-1h19",
      "tags": "ai, cicd, cli, llm",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "_46ea277e677b888e0cd13"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "rbanffy",
      "descendants": 273,
      "id": 47460525,
      "kids": [
        47462013,
        47463880,
        47461304,
        47460841,
        47461834,
        47461565,
        47461578,
        47463429,
        47461462,
        47462787,
        47461042,
        47463916,
        47461326,
        47462955,
        47463768,
        47461008,
        47462243,
        47461613,
        47463249,
        47462016,
        47463524,
        47461348,
        47463007,
        47463470,
        47463743,
        47463753,
        47462299,
        47461707,
        47461334,
        47462400,
        47461500,
        47461851,
        47463814,
        47461846,
        47464077,
        47461597,
        47461314,
        47463198,
        47464053,
        47461781,
        47462465,
        47461212,
        47461262,
        47462066,
        47461679,
        47461996,
        47461475,
        47461944,
        47461340,
        47463497,
        47461422,
        47460967,
        47460886,
        47463483,
        47463835,
        47461499,
        47461213,
        47462900,
        47462424,
        47463399,
        47463979,
        47461888,
        47462908,
        47461947,
        47463897,
        47462583,
        47462289,
        47461217,
        47462442,
        47463509,
        47462612,
        47463915,
        47463913,
        47461418,
        47461554,
        47462117,
        47462890
      ],
      "score": 629,
      "time": 1774040632,
      "title": "OpenCode – Open source AI coding agent",
      "type": "story",
      "url": "https://opencode.ai/"
    },
    {
      "by": "matt_d",
      "descendants": 4,
      "id": 47419391,
      "kids": [
        47464472,
        47464418
      ],
      "score": 37,
      "time": 1773787512,
      "title": "Mamba-3",
      "type": "story",
      "url": "https://www.together.ai/blog/mamba-3"
    },
    {
      "by": "surprisetalk",
      "descendants": 25,
      "id": 47455138,
      "kids": [
        47464191,
        47463891,
        47464286,
        47463638,
        47464243,
        47464331,
        47464292,
        47464192,
        47463681,
        47463812,
        47463745,
        47463925
      ],
      "score": 55,
      "text": "<a href=\"https:&#x2F;&#x2F;en.wiktionary.org&#x2F;wiki&#x2F;molly-guard\" rel=\"nofollow\">https:&#x2F;&#x2F;en.wiktionary.org&#x2F;wiki&#x2F;molly-guard</a>",
      "time": 1774017221,
      "title": "Molly Guard",
      "type": "story",
      "url": "https://bookofjoe2.blogspot.com/2026/02/molly-guard.html"
    },
    {
      "by": "MrDresden",
      "descendants": 420,
      "id": 47453942,
      "kids": [
        47460122,
        47455098,
        47464315,
        47454412,
        47455086,
        47457473,
        47458273,
        47461915,
        47461364,
        47457617,
        47457880,
        47463987,
        47459304,
        47460221,
        47455433,
        47461864,
        47457751,
        47458066,
        47458977,
        47458587,
        47460427,
        47454543,
        47459849,
        47462477,
        47460431,
        47458701,
        47458516,
        47462972,
        47459763,
        47459534,
        47458905,
        47458000,
        47457760,
        47456331,
        47460483,
        47462898,
        47461117,
        47458282,
        47459178,
        47459502,
        47454550,
        47459210,
        47458874,
        47454819,
        47458627,
        47454717,
        47459663
      ],
      "score": 531,
      "time": 1774011716,
      "title": "France's aircraft carrier located in real time by Le Monde through fitness app",
      "type": "story",
      "url": "https://www.lemonde.fr/en/international/article/2026/03/20/stravaleaks-france-s-aircraft-carrier-located-in-real-time-by-le-monde-through-fitness-app_6751640_4.html"
    },
    {
      "by": "zahlekhan",
      "descendants": 91,
      "id": 47461094,
      "kids": [
        47462536,
        47461242,
        47463605,
        47461566,
        47464358,
        47461919,
        47464380,
        47461585,
        47464407,
        47464074,
        47463786,
        47462862,
        47462654,
        47462440,
        47463693,
        47462638,
        47462408,
        47463250,
        47462405,
        47461524,
        47462742,
        47462838,
        47462816,
        47461630,
        47462457,
        47463598,
        47462245,
        47462341,
        47462099,
        47463521,
        47462722,
        47462827,
        47462452,
        47463369,
        47462039,
        47462976
      ],
      "score": 157,
      "time": 1774043286,
      "title": "We rewrote our Rust WASM parser in TypeScript and it got faster",
      "type": "story",
      "url": "https://www.openui.com/blog/rust-wasm-parser"
    },
    {
      "by": "cainxinth",
      "descendants": 151,
      "id": 47460452,
      "kids": [
        47460779,
        47463530,
        47461243,
        47464450,
        47464463,
        47464459,
        47463905,
        47461323,
        47463956,
        47460885,
        47461573,
        47464056,
        47460799,
        47463792,
        47463728,
        47461121,
        47461355,
        47463859,
        47460964,
        47461926,
        47461800,
        47462659,
        47460948,
        47463474,
        47460920,
        47463525,
        47461263,
        47461487,
        47460768,
        47461200,
        47462683,
        47461502,
        47463111,
        47460974,
        47460745
      ],
      "score": 206,
      "time": 1774040097,
      "title": "A Japanese glossary of chopsticks faux pas",
      "type": "story",
      "url": "https://www.nippon.com/en/japan-data/h01362/"
    },
    {
      "by": "bjornroberg",
      "descendants": 28,
      "id": 47461378,
      "kids": [
        47462254,
        47462132,
        47462521
      ],
      "score": 165,
      "time": 1774044697,
      "title": "Ghostling",
      "type": "story",
      "url": "https://github.com/ghostty-org/ghostling"
    },
    {
      "by": "notcodingtoday",
      "descendants": 1,
      "id": 47435081,
      "kids": [
        47435082
      ],
      "score": 5,
      "time": 1773895773,
      "title": "Fujifilm X RAW STUDIO webapp clone",
      "type": "story",
      "url": "https://github.com/eggricesoy/filmkit"
    },
    {
      "by": "teleforce",
      "descendants": 8,
      "id": 47462483,
      "kids": [
        47462979,
        47462937
      ],
      "score": 60,
      "time": 1774051042,
      "title": "Linux Applications Programming by Example: The Fundamental APIs (2nd Edition)",
      "type": "story",
      "url": "https://github.com/arnoldrobbins/LinuxByExample-2e"
    },
    {
      "by": "vinhnx",
      "descendants": 0,
      "id": 47463547,
      "score": 21,
      "time": 1774061233,
      "title": "FFmpeg 101 (2024)",
      "type": "story",
      "url": "https://blogs.igalia.com/llepage/ffmpeg-101/"
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
      "by": "rbanffy",
      "descendants": 273,
      "id": 47460525,
      "kids": [
        47462013,
        47463880,
        47461304,
        47460841,
        47461834,
        47461565,
        47461578,
        47463429,
        47461462,
        47462787,
        47461042,
        47463916,
        47461326,
        47462955,
        47463768,
        47461008,
        47462243,
        47461613,
        47463249,
        47462016,
        47463524,
        47461348,
        47463007,
        47463470,
        47463743,
        47463753,
        47462299,
        47461707,
        47461334,
        47462400,
        47461500,
        47461851,
        47463814,
        47461846,
        47464077,
        47461597,
        47461314,
        47463198,
        47464053,
        47461781,
        47462465,
        47461212,
        47461262,
        47462066,
        47461679,
        47461996,
        47461475,
        47461944,
        47461340,
        47463497,
        47461422,
        47460967,
        47460886,
        47463483,
        47463835,
        47461499,
        47461213,
        47462900,
        47462424,
        47463399,
        47463979,
        47461888,
        47462908,
        47461947,
        47463897,
        47462583,
        47462289,
        47461217,
        47462442,
        47463509,
        47462612,
        47463915,
        47463913,
        47461418,
        47461554,
        47462117,
        47462890
      ],
      "score": 629,
      "time": 1774040632,
      "title": "OpenCode – Open source AI coding agent",
      "type": "story",
      "url": "https://opencode.ai/"
    },
    {
      "by": "matt_d",
      "descendants": 4,
      "id": 47419391,
      "kids": [
        47464472,
        47464418
      ],
      "score": 37,
      "time": 1773787512,
      "title": "Mamba-3",
      "type": "story",
      "url": "https://www.together.ai/blog/mamba-3"
    },
    {
      "by": "surprisetalk",
      "descendants": 25,
      "id": 47455138,
      "kids": [
        47464191,
        47463891,
        47464286,
        47463638,
        47464243,
        47464331,
        47464292,
        47464192,
        47463681,
        47463812,
        47463745,
        47463925
      ],
      "score": 55,
      "text": "<a href=\"https:&#x2F;&#x2F;en.wiktionary.org&#x2F;wiki&#x2F;molly-guard\" rel=\"nofollow\">https:&#x2F;&#x2F;en.wiktionary.org&#x2F;wiki&#x2F;molly-guard</a>",
      "time": 1774017221,
      "title": "Molly Guard",
      "type": "story",
      "url": "https://bookofjoe2.blogspot.com/2026/02/molly-guard.html"
    },
    {
      "by": "MrDresden",
      "descendants": 420,
      "id": 47453942,
      "kids": [
        47460122,
        47455098,
        47464315,
        47454412,
        47455086,
        47457473,
        47458273,
        47461915,
        47461364,
        47457617,
        47457880,
        47463987,
        47459304,
        47460221,
        47455433,
        47461864,
        47457751,
        47458066,
        47458977,
        47458587,
        47460427,
        47454543,
        47459849,
        47462477,
        47460431,
        47458701,
        47458516,
        47462972,
        47459763,
        47459534,
        47458905,
        47458000,
        47457760,
        47456331,
        47460483,
        47462898,
        47461117,
        47458282,
        47459178,
        47459502,
        47454550,
        47459210,
        47458874,
        47454819,
        47458627,
        47454717,
        47459663
      ],
      "score": 531,
      "time": 1774011716,
      "title": "France's aircraft carrier located in real time by Le Monde through fitness app",
      "type": "story",
      "url": "https://www.lemonde.fr/en/international/article/2026/03/20/stravaleaks-france-s-aircraft-carrier-located-in-real-time-by-le-monde-through-fitness-app_6751640_4.html"
    },
    {
      "by": "zahlekhan",
      "descendants": 91,
      "id": 47461094,
      "kids": [
        47462536,
        47461242,
        47463605,
        47461566,
        47464358,
        47461919,
        47464380,
        47461585,
        47464407,
        47464074,
        47463786,
        47462862,
        47462654,
        47462440,
        47463693,
        47462638,
        47462408,
        47463250,
        47462405,
        47461524,
        47462742,
        47462838,
        47462816,
        47461630,
        47462457,
        47463598,
        47462245,
        47462341,
        47462099,
        47463521,
        47462722,
        47462827,
        47462452,
        47463369,
        47462039,
        47462976
      ],
      "score": 157,
      "time": 1774043286,
      "title": "We rewrote our Rust WASM parser in TypeScript and it got faster",
      "type": "story",
      "url": "https://www.openui.com/blog/rust-wasm-parser"
    },
    {
      "by": "cainxinth",
      "descendants": 151,
      "id": 47460452,
      "kids": [
        47460779,
        47463530,
        47461243,
        47464450,
        47464463,
        47464459,
        47463905,
        47461323,
        47463956,
        47460885,
        47461573,
        47464056,
        47460799,
        47463792,
        47463728,
        47461121,
        47461355,
        47463859,
        47460964,
        47461926,
        47461800,
        47462659,
        47460948,
        47463474,
        47460920,
        47463525,
        47461263,
        47461487,
        47460768,
        47461200,
        47462683,
        47461502,
        47463111,
        47460974,
        47460745
      ],
      "score": 206,
      "time": 1774040097,
      "title": "A Japanese glossary of chopsticks faux pas",
      "type": "story",
      "url": "https://www.nippon.com/en/japan-data/h01362/"
    },
    {
      "by": "bjornroberg",
      "descendants": 28,
      "id": 47461378,
      "kids": [
        47462254,
        47462132,
        47462521
      ],
      "score": 165,
      "time": 1774044697,
      "title": "Ghostling",
      "type": "story",
      "url": "https://github.com/ghostty-org/ghostling"
    },
    {
      "by": "notcodingtoday",
      "descendants": 1,
      "id": 47435081,
      "kids": [
        47435082
      ],
      "score": 5,
      "time": 1773895773,
      "title": "Fujifilm X RAW STUDIO webapp clone",
      "type": "story",
      "url": "https://github.com/eggricesoy/filmkit"
    },
    {
      "by": "teleforce",
      "descendants": 8,
      "id": 47462483,
      "kids": [
        47462979,
        47462937
      ],
      "score": 60,
      "time": 1774051042,
      "title": "Linux Applications Programming by Example: The Fundamental APIs (2nd Edition)",
      "type": "story",
      "url": "https://github.com/arnoldrobbins/LinuxByExample-2e"
    },
    {
      "by": "vinhnx",
      "descendants": 0,
      "id": 47463547,
      "score": 21,
      "time": 1774061233,
      "title": "FFmpeg 101 (2024)",
      "type": "story",
      "url": "https://blogs.igalia.com/llepage/ffmpeg-101/"
    },
    {
      "by": "randycupertino",
      "descendants": 27,
      "id": 47428132,
      "kids": [
        47463858,
        47463947,
        47463762,
        47464271,
        47463894,
        47463611,
        47463813,
        47463656,
        47463594,
        47464204,
        47464165,
        47463750,
        47464047
      ],
      "score": 45,
      "time": 1773852778,
      "title": "The Ugliest Airplane: An Appreciation",
      "type": "story",
      "url": "https://www.smithsonianmag.com/air-space-magazine/ugliest-airplane-appreciation-180978708/"
    },
    {
      "by": "rvnx",
      "descendants": 8,
      "id": 47431653,
      "kids": [
        47464177,
        47464140,
        47464161
      ],
      "score": 17,
      "time": 1773869354,
      "title": "A look at content scrambling in DVDs",
      "type": "story",
      "url": "https://mathweb.ucsd.edu/~crypto/Projects/MarkBarry/"
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
      "title": "EnshittifAIcation",
      "url": "https://it-notes.dragas.net/2026/03/20/enshittifaication/",
      "score": 91,
      "comments": 22,
      "tags": [
        "vibecoding"
      ],
      "id": "cvt7fd"
    },
    {
      "title": "I'm OK being left behind, thanks",
      "url": "https://shkspr.mobi/blog/2026/03/im-ok-being-left-behind-thanks/",
      "score": 74,
      "comments": 27,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "ghtnpx"
    },
    {
      "title": "Lobsters Interview with Internet_Jannitor",
      "url": "https://alexalejandre.com/programming/interview-with-john-earnest/",
      "score": 39,
      "comments": 6,
      "tags": [
        "apl",
        "interview",
        "person"
      ],
      "id": "bekb7j"
    },
    {
      "title": "Related UI elements should not appear unrelated",
      "url": "https://rakhim.exotext.com/related-ui-elements-should-not-appear-unrelated",
      "score": 47,
      "comments": 7,
      "tags": [
        "design"
      ],
      "id": "8iyfng"
    },
    {
      "title": "What we heard about Rust's challenges, and how we can address them",
      "url": "https://blog.rust-lang.org/2026/03/20/rust-challenges.md/",
      "score": 28,
      "comments": 25,
      "tags": [
        "rust"
      ],
      "id": "eewvj8"
    },
    {
      "title": "Adding Live Reload to a Static Site Generator Written in Go",
      "url": "https://jon.chrt.dev/2026/03/20/adding-live-reload-to-a-static-site-generator-written-in-go.html",
      "score": 13,
      "comments": 8,
      "tags": [
        "go"
      ],
      "id": "ldglpx"
    },
    {
      "title": "What creative technical outlets of yours have been ruined by generative AI?",
      "url": "",
      "score": 14,
      "comments": 1,
      "tags": [
        "ask",
        "vibecoding"
      ],
      "id": "vvt1fh"
    },
    {
      "title": "Unix philosophy is dead! Long live... something else?",
      "url": "https://sdomi.pl/weblog/27-manifesto-of-a-burnt-out-hacker/",
      "score": 6,
      "comments": 1,
      "tags": [
        "philosophy"
      ],
      "id": "dttagp"
    },
    {
      "title": "To be a better programmer, write little proofs in your head (2025)",
      "url": "https://blog.get-nerve.com/to-be-a-better-programmer-write-little-proofs-in-your-head/",
      "score": 48,
      "comments": 14,
      "tags": [
        "practices",
        "programming"
      ],
      "id": "hjr72q"
    },
    {
      "title": "Trivy Compromised a Second Time - Malicious v0.69.4 Release",
      "url": "https://www.stepsecurity.io/blog/trivy-compromised-a-second-time---malicious-v0-69-4-release",
      "score": 12,
      "comments": 3,
      "tags": [
        "security"
      ],
      "id": "4fhlaz"
    }
  ]
}
```

