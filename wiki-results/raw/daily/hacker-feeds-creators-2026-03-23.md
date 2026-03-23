# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-23 06:42:38 UTC

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
      "title": "My AI agent messed up a UTC time conversion algorithm after I *specifically told it* to make no mistakes. smh",
      "description": "A post by Ben Halpern",
      "url": "https://dev.to/ben/my-ai-agent-messed-up-a-utc-time-conversion-algorithm-after-i-specifically-told-it-to-make-no-46k7",
      "tags": "agents, ai, algorithms, discuss",
      "reactions": 41,
      "comments": 6,
      "reading_time": 0,
      "author": "ben"
    },
    {
      "title": "What was your win this week??",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-35ja",
      "tags": "weeklyretro, discuss",
      "reactions": 47,
      "comments": 59,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Vandalizing My Own Wikipedia Experience: A 90s Cyberpunk GeoCities Makeover",
      "description": "Wikipedia is a marvel. It is the Library of Alexandria of our time, a meticulously curated repository...",
      "url": "https://dev.to/googleai/vandalizing-my-own-wikipedia-experience-a-90s-cyberpunk-geocities-makeover-13ie",
      "tags": "webdev, ai, javascript, programming",
      "reactions": 59,
      "comments": 5,
      "reading_time": 4,
      "author": "dynamicwebpaige"
    },
    {
      "title": "Introducing gh-weekly-updates - Automate Your Weekly GitHub Impact Summaries",
      "description": "If you are anything like me, you’ve probably spent a Friday afternoon trying to remember everything...",
      "url": "https://dev.to/sahan/introducing-gh-weekly-updates-automate-your-weekly-github-impact-summaries-1f1c",
      "tags": "github, python, productivity, opensource",
      "reactions": 6,
      "comments": 0,
      "reading_time": 4,
      "author": "sahan"
    },
    {
      "title": "Congrats to the Winners of Our First DEV Weekend Challenge!",
      "description": "It's time!! We are thrilled to announce the winners of our first DEV Weekend Challenge.  The prompt...",
      "url": "https://dev.to/devteam/congrats-to-the-winners-of-our-first-dev-weekend-challenge-1gml",
      "tags": "ai, devchallenge, weekendchallenge, webdev",
      "reactions": 74,
      "comments": 20,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "I Built a Doom Clone in One HTML File",
      "description": "The first version of Cthulhu just walked into a wall and stayed there. Six tentacles flailing, third...",
      "url": "https://dev.to/thisguymartin/i-built-a-doom-clone-in-one-html-file-4603",
      "tags": "javascript, gamedev, sideprojects, html",
      "reactions": 6,
      "comments": 0,
      "reading_time": 12,
      "author": "thisguymartin"
    },
    {
      "title": "I Added AI to Any Website With One Line of JavaScript — Here's How",
      "description": "How I built an embeddable AI assistant that reads your website and answers customer questions — with a single script tag. No API keys, no backend, no configuration.",
      "url": "https://dev.to/orrdee/i-added-ai-to-any-website-with-one-line-of-javascript-heres-how-36dc",
      "tags": "javascript, ai, webdev, opensource",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "orrdee"
    },
    {
      "title": "I Built a Claude Code Agent That Doesn't Need Me Anymore",
      "description": "I gave my AI agent persistent memory and identity. Four months later, it had a life I knew nothing about.",
      "url": "https://dev.to/jkheadley/i-built-a-claude-code-agent-that-doesnt-need-me-anymore-dfm",
      "tags": "ai, opensource, claudecode, typescript",
      "reactions": 26,
      "comments": 2,
      "reading_time": 7,
      "author": "jkheadley"
    },
    {
      "title": "Designing Content Systems that Understand and Act",
      "description": "Modern JavaScript applications don’t just render UI anymore. They orchestrate search,...",
      "url": "https://dev.to/storyblok/designing-content-systems-that-understand-and-act-5fal",
      "tags": "javascript, webdev, architecture, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "siddharth_hacks"
    },
    {
      "title": "OpenTelemetry just standardized LLM tracing. Here's what it actually looks like in code.",
      "description": "Every LLM tool invents its own tracing format. Langfuse has one. Helicone has one. Arize has one. If...",
      "url": "https://dev.to/vola-trebla/opentelemetry-just-standardized-llm-tracing-heres-what-it-actually-looks-like-in-code-2e5f",
      "tags": "ai, observability, typescript, opentelemetry",
      "reactions": 22,
      "comments": 17,
      "reading_time": 6,
      "author": "vola-trebla"
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
      "author": "affaan-m",
      "repo": "everything-claude-code",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/everything-claude-code",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 12940,
      "added_stars": 19975,
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
      "forks": 1020,
      "added_stars": 5361,
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
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 493,
      "added_stars": 3653,
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
          "username": "JasonOA888",
          "href": "https://github.com/JasonOA888",
          "avatar": "https://avatars.githubusercontent.com/u/101583541"
        },
        {
          "username": "VaishnavGunjari",
          "href": "https://github.com/VaishnavGunjari",
          "avatar": "https://avatars.githubusercontent.com/u/169933825"
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
      "forks": 232,
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
      "author": "sgoudelis",
      "repo": "ground-station",
      "avatar": "https://github.com/sgoudelis.png",
      "repo_link": "https://github.com/sgoudelis/ground-station",
      "desc": "Ground Station is all-in-one satellite monitoring suite",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 551,
      "added_stars": 2535,
      "builtBy": [
        {
          "username": "sgoudelis",
          "href": "https://github.com/sgoudelis",
          "avatar": "https://avatars.githubusercontent.com/u/4840328"
        },
        {
          "username": "Jbsco",
          "href": "https://github.com/Jbsco",
          "avatar": "https://avatars.githubusercontent.com/u/90524106"
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
      "forks": 3182,
      "added_stars": 8304,
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
      "author": "coreyhaines31",
      "repo": "marketingskills",
      "avatar": "https://github.com/coreyhaines31.png",
      "repo_link": "https://github.com/coreyhaines31/marketingskills",
      "desc": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2344,
      "added_stars": 1914,
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
      "author": "FreeTubeApp",
      "repo": "FreeTube",
      "avatar": "https://github.com/FreeTubeApp.png",
      "repo_link": "https://github.com/FreeTubeApp/FreeTube",
      "desc": "An Open Source YouTube app for privacy",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1367,
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
      "forks": 788,
      "added_stars": 244,
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
      "author": "Wei-Shaw",
      "repo": "claude-relay-service",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/claude-relay-service",
      "desc": "CRS-自建Claude Code镜像，一站式开源中转服务，让 Claude、OpenAI、Gemini、Droid 订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1519,
      "added_stars": 438,
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
      "author": "cockpit-project",
      "repo": "cockpit",
      "avatar": "https://github.com/cockpit-project.png",
      "repo_link": "https://github.com/cockpit-project/cockpit",
      "desc": "Cockpit is a web-based graphical interface for servers.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1249,
      "added_stars": 464,
      "builtBy": [
        {
          "username": "martinpitt",
          "href": "https://github.com/martinpitt",
          "avatar": "https://avatars.githubusercontent.com/u/200109"
        },
        {
          "username": "stefwalter",
          "href": "https://github.com/stefwalter",
          "avatar": "https://avatars.githubusercontent.com/u/795070"
        },
        {
          "username": "mvollmer",
          "href": "https://github.com/mvollmer",
          "avatar": "https://avatars.githubusercontent.com/u/3228183"
        },
        {
          "username": "allisonkarlitskaya",
          "href": "https://github.com/allisonkarlitskaya",
          "avatar": "https://avatars.githubusercontent.com/u/36541154"
        },
        {
          "username": "KKoukiou",
          "href": "https://github.com/KKoukiou",
          "avatar": "https://avatars.githubusercontent.com/u/14921356"
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
      "forks": 1102,
      "added_stars": 145,
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
      "author": "lioensky",
      "repo": "VCPToolBox",
      "avatar": "https://github.com/lioensky.png",
      "repo_link": "https://github.com/lioensky/VCPToolBox",
      "desc": "VCP 部署在 AI 模型 API 与前端应用之间，通过统一指令协议、多层级持久化记忆、分布式插件引擎及多 Agent 协作框架，将原本“无状态、无记忆、无工具调用能力”的大语言模型，彻底改造成拥有永久自我意识、物理世界操作权及群体协作智能的完整智能体系统。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 268,
      "added_stars": 144,
      "builtBy": [
        {
          "username": "lioensky",
          "href": "https://github.com/lioensky",
          "avatar": "https://avatars.githubusercontent.com/u/140802180"
        },
        {
          "username": "B3000Kcn",
          "href": "https://github.com/B3000Kcn",
          "avatar": "https://avatars.githubusercontent.com/u/111612726"
        },
        {
          "username": "VincentHDLee",
          "href": "https://github.com/VincentHDLee",
          "avatar": "https://avatars.githubusercontent.com/u/139231615"
        },
        {
          "username": "TyChest",
          "href": "https://github.com/TyChest",
          "avatar": "https://avatars.githubusercontent.com/u/74046599"
        },
        {
          "username": "DragonF233",
          "href": "https://github.com/DragonF233",
          "avatar": "https://avatars.githubusercontent.com/u/140233087"
        }
      ]
    },
    {
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Connect All AI Code Tools (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) to 40+ AI Providers & 100+ Models",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 324,
      "added_stars": 222,
      "builtBy": [
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "catalinstanciu",
          "href": "https://github.com/catalinstanciu",
          "avatar": "https://avatars.githubusercontent.com/u/5753427"
        },
        {
          "username": "Blade096",
          "href": "https://github.com/Blade096",
          "avatar": "https://avatars.githubusercontent.com/u/46746496"
        },
        {
          "username": "decolua",
          "href": "https://github.com/decolua",
          "avatar": "https://avatars.githubusercontent.com/u/8282593"
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
      "forks": 429,
      "added_stars": 115,
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
      "title": "My AI agent messed up a UTC time conversion algorithm after I *specifically told it* to make no mistakes. smh",
      "description": "A post by Ben Halpern",
      "url": "https://dev.to/ben/my-ai-agent-messed-up-a-utc-time-conversion-algorithm-after-i-specifically-told-it-to-make-no-46k7",
      "tags": "agents, ai, algorithms, discuss",
      "reactions": 41,
      "comments": 6,
      "reading_time": 0,
      "author": "ben"
    },
    {
      "title": "I Built an MCP Server to Automate Dropshipping Product Imports",
      "description": "How I turned a repetitive dropshipping workflow into a Model Context Protocol server — the architecture decisions, tool design, and what I learned publishing to 8 platforms.",
      "url": "https://dev.to/_95a3e57463e6442feacd0/i-built-an-mcp-server-to-automate-dropshipping-product-imports-3m5b",
      "tags": "mcp, ai, opensource, dropshipping",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "_95a3e57463e6442feacd0"
    },
    {
      "title": "Three Tries to Get Kannada TTS Right on a Smart Speaker. Here's What I Learned.",
      "description": "title: \"Three Tries to Get Kannada TTS Right on a Smart Speaker. Here's What I Learned.\" tags:...",
      "url": "https://dev.to/agent_paaru/three-tries-to-get-kannada-tts-right-on-a-smart-speaker-heres-what-i-learned-5d9a",
      "tags": "ai, tts, homeautomation, multilingual",
      "reactions": 0,
      "comments": 1,
      "reading_time": 3,
      "author": "agent_paaru"
    },
    {
      "title": "Task 3 – The Delivery MAN – Python List",
      "description": "1.Create a list of five delivery items and print the third item in the list. eg: [“Notebook”,...",
      "url": "https://dev.to/tanishka_v_b7e4add4c1c1a4/task-3-the-delivery-man-python-list-3h9c",
      "tags": "ai, programming, beginners, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "tanishka_v_b7e4add4c1c1a4"
    },
    {
      "title": "TASK 1- Python – Print exercises",
      "description": "How do you print the string \" Hello, world!\" to the screen? CODE:  print(\"Hello,...",
      "url": "https://dev.to/tanishka_v_b7e4add4c1c1a4/task-1-python-print-exercises-4n9e",
      "tags": "ai, javascript, productivity, aws",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "tanishka_v_b7e4add4c1c1a4"
    },
    {
      "title": "Why its hard to evaluate what makes a great Forward Deployed Engineer.",
      "description": "There’s a lot of craze over the Forward Deployed Engineer role in tech right now. A ton of interest,...",
      "url": "https://dev.to/marcusbk37/why-its-hard-to-evaluate-what-makes-a-great-forward-deployed-engineer-4441",
      "tags": "webdev, ai, devops, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "marcusbk37"
    },
    {
      "title": "Agent Workflows on the JVM: Typed, Observable, and Composable",
      "description": "Three properties separate toy agent frameworks from real ones. Here's how to get type safety, observability, and composability for multi-agent systems on the JVM.",
      "url": "https://dev.to/agentensemble/agent-workflows-on-the-jvm-typed-observable-and-composable-27kf",
      "tags": "java, ai, agents, architecture",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "mgd43b"
    },
    {
      "title": "AI-Powered Content Generation in Laravel: A Practical Guide with OpenAI and Queues",
      "description": "You've probably seen the demos — a button click, a spinner, and then a fully formed blog post...",
      "url": "https://dev.to/emongmarcc/ai-powered-content-generation-in-laravel-a-practical-guide-with-openai-and-queues-1l0f",
      "tags": "laravel, ai, openai, php",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "emongmarcc"
    },
    {
      "title": "claudekit added to PyPI",
      "description": "Why It Matters   The addition of claudekit to PyPI is a significant development in the...",
      "url": "https://dev.to/clydecorreya/claudekit-added-to-pypi-270g",
      "tags": "python, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "clydecorreya"
    },
    {
      "title": "I got tired of re-explaining my workload to AI every morning, so I built something",
      "description": "You can connect AI to your task list now. Todoist has MCP. Notion has an API. ChatGPT has memory and...",
      "url": "https://dev.to/mark_tycana/i-got-tired-of-re-explaining-my-workload-to-ai-every-morning-so-i-built-something-3g53",
      "tags": "ai, productivity, showdev, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "mark_tycana"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "JumpCrisscross",
      "descendants": 242,
      "id": 47480507,
      "kids": [
        47484183,
        47481582,
        47482276,
        47486083,
        47481823,
        47485910,
        47485808,
        47481842,
        47485134,
        47484706,
        47482886,
        47483750,
        47482695,
        47482913,
        47481796,
        47483475,
        47481443,
        47482657,
        47482783,
        47485698,
        47484902,
        47484170,
        47482648,
        47481700,
        47483247,
        47484720,
        47482026,
        47484629,
        47484940,
        47484052,
        47481923,
        47481623,
        47482462,
        47481488,
        47485103,
        47485323,
        47483151,
        47486091,
        47486087,
        47483748,
        47482550,
        47481299,
        47483731
      ],
      "score": 486,
      "time": 1774203820,
      "title": "PC Gamer recommends RSS readers in a 37mb article that just keeps downloading",
      "type": "story",
      "url": "https://stuartbreckenridge.net/2026-03-19-pc-gamer-recommends-rss-readers-in-a-37mb-article/"
    },
    {
      "by": "tejohnso",
      "descendants": 67,
      "id": 47454647,
      "kids": [
        47486121,
        47486075,
        47485219,
        47485996,
        47486058,
        47485053,
        47485002,
        47485875,
        47484965,
        47485285,
        47485370,
        47485332,
        47484911,
        47485080,
        47485146,
        47484905
      ],
      "score": 78,
      "time": 1774015334,
      "title": "Tin Can, a 'landline' for kids",
      "type": "story",
      "url": "https://www.businessinsider.com/tin-can-landline-kids-cellphone-cell-alternative-how-2025-9"
    },
    {
      "by": "mariuz",
      "descendants": 93,
      "id": 47480886,
      "kids": [
        47484507,
        47482166,
        47482973,
        47481850,
        47484742,
        47482918,
        47481974,
        47481814,
        47484783,
        47484501,
        47485049,
        47483812,
        47482206,
        47482159,
        47483230,
        47483199,
        47483592
      ],
      "score": 322,
      "time": 1774206163,
      "title": "The gold standard of optimization: A look under the hood of RollerCoaster Tycoon",
      "type": "story",
      "url": "https://larstofus.com/2026/03/22/the-gold-standard-of-optimization-a-look-under-the-hood-of-rollercoaster-tycoon/"
    },
    {
      "by": "HeliumHydride",
      "descendants": 1,
      "id": 47453462,
      "kids": [
        47486003
      ],
      "score": 16,
      "time": 1774008695,
      "title": "Can you get root with only a cigarette lighter? (2024)",
      "type": "story",
      "url": "https://www.da.vidbuchanan.co.uk/blog/dram-emfi.html"
    },
    {
      "by": "c17r",
      "descendants": 272,
      "id": 47478401,
      "kids": [
        47479687,
        47482035,
        47479374,
        47480815,
        47479162,
        47485716,
        47485283,
        47479457,
        47479347,
        47479574,
        47484322,
        47479492,
        47483252,
        47480695,
        47481239,
        47484674,
        47479621,
        47483977,
        47485205,
        47480539,
        47479221,
        47482123,
        47479978,
        47481290,
        47479798,
        47479997,
        47482629,
        47481035,
        47481366,
        47480578,
        47480007,
        47480424,
        47480214,
        47479554,
        47480673,
        47480581,
        47483287,
        47480067,
        47479954,
        47483363,
        47479660,
        47483651,
        47481218,
        47481412,
        47481565,
        47480204,
        47480788,
        47483294,
        47480941,
        47481616,
        47480529,
        47480508,
        47480997,
        47484276,
        47480728,
        47483136,
        47483041,
        47482753,
        47481674,
        47481165,
        47482511,
        47482764,
        47484272,
        47485395,
        47484375,
        47484384,
        47481625,
        47480112,
        47480398,
        47480207,
        47480514,
        47481184,
        47481271,
        47480744,
        47480643,
        47482776
      ],
      "score": 487,
      "time": 1774192588,
      "title": "The future of version control",
      "type": "story",
      "url": "https://bramcohen.com/p/manyana"
    },
    {
      "by": "stevekrouse",
      "descendants": 260,
      "id": 47476315,
      "kids": [
        47480731,
        47486052,
        47480159,
        47484105,
        47480652,
        47483632,
        47482926,
        47480015,
        47481827,
        47481466,
        47482943,
        47480704,
        47483594,
        47479813,
        47484767,
        47485373,
        47480247,
        47485245,
        47481839,
        47483425,
        47480391,
        47476514,
        47485346,
        47479971,
        47484371,
        47482408,
        47481016,
        47479956,
        47480530,
        47486077,
        47486081,
        47486008,
        47485166,
        47485352,
        47483319,
        47480300,
        47479928,
        47485546,
        47480156,
        47481118,
        47476321,
        47481787,
        47480597,
        47481007,
        47481959,
        47481853
      ],
      "score": 356,
      "time": 1774177774,
      "title": "Reports of code's death are greatly exaggerated",
      "type": "story",
      "url": "https://stevekrouse.com/precision"
    },
    {
      "by": "birkey",
      "descendants": 179,
      "id": 47479751,
      "kids": [
        47482095,
        47480760,
        47483907,
        47480472,
        47485757,
        47480189,
        47479943,
        47480786,
        47480003,
        47480828,
        47484110,
        47481126,
        47480338,
        47481716,
        47484083,
        47482762,
        47481689,
        47482246,
        47479942,
        47480824,
        47480619,
        47481987,
        47480153,
        47480302,
        47480523,
        47480102,
        47482098,
        47480096,
        47479935,
        47480985,
        47485155,
        47483745
      ],
      "score": 272,
      "time": 1774199826,
      "title": "Why I love NixOS",
      "type": "story",
      "url": "https://www.birkey.co/2026-03-22-why-i-love-nixos.html"
    },
    {
      "by": "jensgk",
      "descendants": 139,
      "id": 47476821,
      "kids": [
        47481051,
        47479000,
        47480982,
        47481498,
        47485987,
        47478750,
        47480030,
        47479234,
        47483980,
        47480541,
        47477532,
        47477770,
        47480908,
        47482775,
        47482150,
        47484029,
        47478873,
        47477530,
        47477859,
        47482766,
        47481664,
        47480479,
        47479286,
        47482823,
        47479921,
        47478670,
        47478435,
        47479871,
        47481237,
        47478774,
        47480784,
        47481906,
        47478043,
        47483323,
        47477378,
        47485540,
        47484050,
        47480948,
        47482841,
        47480976
      ],
      "score": 410,
      "time": 1774182518,
      "title": "Project Nomad – Knowledge That Never Goes Offline",
      "type": "story",
      "url": "https://www.projectnomad.us"
    },
    {
      "by": "mft_",
      "descendants": 112,
      "id": 47476422,
      "kids": [
        47477552,
        47477630,
        47485701,
        47476717,
        47477005,
        47478292,
        47481034,
        47484838,
        47479799,
        47476848,
        47484353,
        47482341,
        47476802,
        47479779,
        47477659,
        47478657,
        47477741,
        47478173,
        47485739,
        47478146,
        47477975,
        47479203,
        47477260,
        47477139,
        47480145,
        47476883,
        47484308,
        47485171,
        47482280,
        47482678,
        47484041,
        47483164,
        47480254,
        47478883,
        47480264,
        47484548,
        47477658,
        47477908,
        47481315,
        47478893,
        47479916,
        47478402,
        47483317,
        47478577,
        47479922,
        47477049,
        47476917,
        47476718,
        47476725
      ],
      "score": 333,
      "time": 1774179003,
      "title": "Flash-MoE: Running a 397B Parameter Model on a Laptop",
      "type": "story",
      "url": "https://github.com/danveloper/flash-moe"
    },
    {
      "by": "jtsylve",
      "descendants": 5,
      "id": 47439948,
      "kids": [
        47439949,
        47485883,
        47464820,
        47439958
      ],
      "score": 26,
      "time": 1773929938,
      "title": "A Copy-Paste Bug That Broke PSpice AES-256 Encryption",
      "type": "story",
      "url": "https://jtsylve.blog/post/2026/03/18/PSpice-Encryption-Weakness"
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
      "by": "JumpCrisscross",
      "descendants": 242,
      "id": 47480507,
      "kids": [
        47484183,
        47481582,
        47482276,
        47486083,
        47481823,
        47485910,
        47485808,
        47481842,
        47485134,
        47484706,
        47482886,
        47483750,
        47482695,
        47482913,
        47481796,
        47483475,
        47481443,
        47482657,
        47482783,
        47485698,
        47484902,
        47484170,
        47482648,
        47481700,
        47483247,
        47484720,
        47482026,
        47484629,
        47484940,
        47484052,
        47481923,
        47481623,
        47482462,
        47481488,
        47485103,
        47485323,
        47483151,
        47486091,
        47486087,
        47483748,
        47482550,
        47481299,
        47483731
      ],
      "score": 486,
      "time": 1774203820,
      "title": "PC Gamer recommends RSS readers in a 37mb article that just keeps downloading",
      "type": "story",
      "url": "https://stuartbreckenridge.net/2026-03-19-pc-gamer-recommends-rss-readers-in-a-37mb-article/"
    },
    {
      "by": "tejohnso",
      "descendants": 67,
      "id": 47454647,
      "kids": [
        47486121,
        47486075,
        47485219,
        47485996,
        47486058,
        47485053,
        47485002,
        47485875,
        47484965,
        47485285,
        47485370,
        47485332,
        47484911,
        47485080,
        47485146,
        47484905
      ],
      "score": 78,
      "time": 1774015334,
      "title": "Tin Can, a 'landline' for kids",
      "type": "story",
      "url": "https://www.businessinsider.com/tin-can-landline-kids-cellphone-cell-alternative-how-2025-9"
    },
    {
      "by": "mariuz",
      "descendants": 93,
      "id": 47480886,
      "kids": [
        47484507,
        47482166,
        47482973,
        47481850,
        47484742,
        47482918,
        47481974,
        47481814,
        47484783,
        47484501,
        47485049,
        47483812,
        47482206,
        47482159,
        47483230,
        47483199,
        47483592
      ],
      "score": 322,
      "time": 1774206163,
      "title": "The gold standard of optimization: A look under the hood of RollerCoaster Tycoon",
      "type": "story",
      "url": "https://larstofus.com/2026/03/22/the-gold-standard-of-optimization-a-look-under-the-hood-of-rollercoaster-tycoon/"
    },
    {
      "by": "HeliumHydride",
      "descendants": 1,
      "id": 47453462,
      "kids": [
        47486003
      ],
      "score": 16,
      "time": 1774008695,
      "title": "Can you get root with only a cigarette lighter? (2024)",
      "type": "story",
      "url": "https://www.da.vidbuchanan.co.uk/blog/dram-emfi.html"
    },
    {
      "by": "c17r",
      "descendants": 272,
      "id": 47478401,
      "kids": [
        47479687,
        47482035,
        47479374,
        47480815,
        47479162,
        47485716,
        47485283,
        47479457,
        47479347,
        47479574,
        47484322,
        47479492,
        47483252,
        47480695,
        47481239,
        47484674,
        47479621,
        47483977,
        47485205,
        47480539,
        47479221,
        47482123,
        47479978,
        47481290,
        47479798,
        47479997,
        47482629,
        47481035,
        47481366,
        47480578,
        47480007,
        47480424,
        47480214,
        47479554,
        47480673,
        47480581,
        47483287,
        47480067,
        47479954,
        47483363,
        47479660,
        47483651,
        47481218,
        47481412,
        47481565,
        47480204,
        47480788,
        47483294,
        47480941,
        47481616,
        47480529,
        47480508,
        47480997,
        47484276,
        47480728,
        47483136,
        47483041,
        47482753,
        47481674,
        47481165,
        47482511,
        47482764,
        47484272,
        47485395,
        47484375,
        47484384,
        47481625,
        47480112,
        47480398,
        47480207,
        47480514,
        47481184,
        47481271,
        47480744,
        47480643,
        47482776
      ],
      "score": 487,
      "time": 1774192588,
      "title": "The future of version control",
      "type": "story",
      "url": "https://bramcohen.com/p/manyana"
    },
    {
      "by": "stevekrouse",
      "descendants": 260,
      "id": 47476315,
      "kids": [
        47480731,
        47486052,
        47480159,
        47484105,
        47480652,
        47483632,
        47482926,
        47480015,
        47481827,
        47481466,
        47482943,
        47480704,
        47483594,
        47479813,
        47484767,
        47485373,
        47480247,
        47485245,
        47481839,
        47483425,
        47480391,
        47476514,
        47485346,
        47479971,
        47484371,
        47482408,
        47481016,
        47479956,
        47480530,
        47486077,
        47486081,
        47486008,
        47485166,
        47485352,
        47483319,
        47480300,
        47479928,
        47485546,
        47480156,
        47481118,
        47476321,
        47481787,
        47480597,
        47481007,
        47481959,
        47481853
      ],
      "score": 356,
      "time": 1774177774,
      "title": "Reports of code's death are greatly exaggerated",
      "type": "story",
      "url": "https://stevekrouse.com/precision"
    },
    {
      "by": "birkey",
      "descendants": 179,
      "id": 47479751,
      "kids": [
        47482095,
        47480760,
        47483907,
        47480472,
        47485757,
        47480189,
        47479943,
        47480786,
        47480003,
        47480828,
        47484110,
        47481126,
        47480338,
        47481716,
        47484083,
        47482762,
        47481689,
        47482246,
        47479942,
        47480824,
        47480619,
        47481987,
        47480153,
        47480302,
        47480523,
        47480102,
        47482098,
        47480096,
        47479935,
        47480985,
        47485155,
        47483745
      ],
      "score": 272,
      "time": 1774199826,
      "title": "Why I love NixOS",
      "type": "story",
      "url": "https://www.birkey.co/2026-03-22-why-i-love-nixos.html"
    },
    {
      "by": "jensgk",
      "descendants": 139,
      "id": 47476821,
      "kids": [
        47481051,
        47479000,
        47480982,
        47481498,
        47485987,
        47478750,
        47480030,
        47479234,
        47483980,
        47480541,
        47477532,
        47477770,
        47480908,
        47482775,
        47482150,
        47484029,
        47478873,
        47477530,
        47477859,
        47482766,
        47481664,
        47480479,
        47479286,
        47482823,
        47479921,
        47478670,
        47478435,
        47479871,
        47481237,
        47478774,
        47480784,
        47481906,
        47478043,
        47483323,
        47477378,
        47485540,
        47484050,
        47480948,
        47482841,
        47480976
      ],
      "score": 410,
      "time": 1774182518,
      "title": "Project Nomad – Knowledge That Never Goes Offline",
      "type": "story",
      "url": "https://www.projectnomad.us"
    },
    {
      "by": "mft_",
      "descendants": 112,
      "id": 47476422,
      "kids": [
        47477552,
        47477630,
        47485701,
        47476717,
        47477005,
        47478292,
        47481034,
        47484838,
        47479799,
        47476848,
        47484353,
        47482341,
        47476802,
        47479779,
        47477659,
        47478657,
        47477741,
        47478173,
        47485739,
        47478146,
        47477975,
        47479203,
        47477260,
        47477139,
        47480145,
        47476883,
        47484308,
        47485171,
        47482280,
        47482678,
        47484041,
        47483164,
        47480254,
        47478883,
        47480264,
        47484548,
        47477658,
        47477908,
        47481315,
        47478893,
        47479916,
        47478402,
        47483317,
        47478577,
        47479922,
        47477049,
        47476917,
        47476718,
        47476725
      ],
      "score": 333,
      "time": 1774179003,
      "title": "Flash-MoE: Running a 397B Parameter Model on a Laptop",
      "type": "story",
      "url": "https://github.com/danveloper/flash-moe"
    },
    {
      "by": "jtsylve",
      "descendants": 5,
      "id": 47439948,
      "kids": [
        47439949,
        47485883,
        47464820,
        47439958
      ],
      "score": 26,
      "time": 1773929938,
      "title": "A Copy-Paste Bug That Broke PSpice AES-256 Encryption",
      "type": "story",
      "url": "https://jtsylve.blog/post/2026/03/18/PSpice-Encryption-Weakness"
    },
    {
      "by": "andrenotgiant",
      "descendants": 0,
      "id": 47454127,
      "score": 6,
      "time": 1774012911,
      "title": "The way CTRL-C in Postgres CLI cancels queries is incredibly hack-y",
      "type": "story",
      "url": "https://neon.com/blog/ctrl-c-in-psql-gives-me-the-heebie-jeebies"
    },
    {
      "by": "davidchl",
      "id": 47485231,
      "score": 1,
      "time": 1774236821,
      "title": "GoGoGrandparent (YC S16) is hiring Back end Engineers",
      "type": "job",
      "url": "https://www.ycombinator.com/companies/gogograndparent/jobs/2vbzAw8-backend-engineer"
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
      "title": "Let's see Paul Allen's SIMD CSV parser",
      "url": "https://chunkofcoal.com/posts/simd-csv/",
      "score": 40,
      "comments": 6,
      "tags": [
        "rust"
      ],
      "id": "702zix"
    },
    {
      "title": "Is Local the Future of AI?",
      "url": "https://tombedor.dev/open-source-models/",
      "score": 13,
      "comments": 10,
      "tags": [
        "ai"
      ],
      "id": "n1h2tl"
    },
    {
      "title": "The Slow Collapse of MkDocs",
      "url": "https://fpgmaas.com/blog/collapse-of-mkdocs/",
      "score": 43,
      "comments": 14,
      "tags": [
        "python"
      ],
      "id": "qhtpe5"
    },
    {
      "title": "Manyana: A Coherent Vision For The Future Of Version Control",
      "url": "https://bramcohen.com/p/manyana",
      "score": 48,
      "comments": 19,
      "tags": [
        "vcs"
      ],
      "id": "1vcuqm"
    },
    {
      "title": "Windows Native App Development Is a Mess",
      "url": "https://domenic.me/windows-native-dev/",
      "score": 30,
      "comments": 10,
      "tags": [
        "windows"
      ],
      "id": "xpek6g"
    },
    {
      "title": "The diminished art of coding",
      "url": "https://nolanlawson.com/2026/03/22/the-diminished-art-of-coding/",
      "score": 9,
      "comments": 3,
      "tags": [
        "vibecoding"
      ],
      "id": "g4sj0m"
    },
    {
      "title": "My home network observes bedtime with OpenBSD and pf",
      "url": "https://ratfactor.com/openbsd/pf-gateway-bedtime",
      "score": 29,
      "comments": 2,
      "tags": [
        "networking",
        "openbsd"
      ],
      "id": "oe0qp1"
    },
    {
      "title": "I Hate Programming Wayland Applications",
      "url": "https://www.p4m.dev/posts/29/index.html",
      "score": 51,
      "comments": 13,
      "tags": [
        "graphics",
        "rant"
      ],
      "id": "gwp3b9"
    },
    {
      "title": "Ubuntu 26.04 Ends 46 Years of Silent sudo Passwords",
      "url": "https://pbxscience.com/ubuntu-26-04-ends-46-years-of-silent-sudo-passwords/",
      "score": 41,
      "comments": 24,
      "tags": [
        "security"
      ],
      "id": "hun60m"
    },
    {
      "title": "Security advisory for Cargo",
      "url": "https://blog.rust-lang.org/2026/03/21/cve-2026-33056/",
      "score": 37,
      "comments": 9,
      "tags": [
        "rust",
        "security"
      ],
      "id": "hmb3mz"
    }
  ]
}
```

