# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-01 07:03:59 UTC

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
      "title": "🐾 FurEver Log — The App I Built After Losing Abu",
      "description": "The Community    This app is built for pet owners who suddenly become full-time caregivers.  The ones...",
      "url": "https://dev.to/siti_aisyahmatzainal_73/furever-log-the-app-i-built-after-losing-abu-4agn",
      "tags": "devchallenge, weekendchallenge, showdev, catloss",
      "reactions": 15,
      "comments": 2,
      "reading_time": 4,
      "author": "siti_aisyahmatzainal_73"
    },
    {
      "title": "Join the \"Built with Google Gemini: Writing Challenge\" Presented by Major League Hacking (MLH). Win a Raspberry Pi AI Kit!",
      "description": "Last week, we announced that DEV has joined Major League Hacking. To kick things off, we're launching...",
      "url": "https://dev.to/devteam/join-the-built-with-google-gemini-writing-challenge-presented-by-major-league-hacking-mlh-win-17pk",
      "tags": "devchallenge, geminireflections, gemini, ai",
      "reactions": 115,
      "comments": 37,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Upgraded embed experience and new embed types in DEV posts",
      "description": "When you paste a URL into your DEV post, if it is embeddable, you now get a handy little tooltip to...",
      "url": "https://dev.to/devteam/upgraded-embed-experience-and-new-embed-types-in-dev-posts-1kho",
      "tags": "news, devto, forem",
      "reactions": 42,
      "comments": 3,
      "reading_time": 1,
      "author": "jonmarkgo"
    },
    {
      "title": "An App where you can Train your Own Hand Pose Model for your Project! 🤌",
      "description": "This is a submission for the DEV Weekend Challenge: Community           The Community   This targets...",
      "url": "https://dev.to/francistrdev/an-app-where-you-can-train-your-own-hand-pose-model-for-your-project-58ib",
      "tags": "devchallenge, weekendchallenge, showdev, javascript",
      "reactions": 52,
      "comments": 4,
      "reading_time": 3,
      "author": "francistrdev"
    },
    {
      "title": "Bringing up an AmpereOne system",
      "description": "I decided to buy something quite large since my workstations are aging and I wanted to build stuff...",
      "url": "https://dev.to/luzero/bringing-up-an-ampereone-system-1ln6",
      "tags": "gentoo, ampere",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "luzero"
    },
    {
      "title": "Why I stopped overthinking the Livewire vs. Inertia debate (and how to pick one)",
      "description": "The Laravel ecosystem is spoiled for choice. When building a modern web app, the first big decision...",
      "url": "https://dev.to/hamizulfaiz/why-i-stopped-overthinking-the-livewire-vs-inertia-debate-and-how-to-pick-one-5h67",
      "tags": "webdev, livewire, inertiajs, laravel",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "hamizulfaiz"
    },
    {
      "title": "What was your win this week?!",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-5h33",
      "tags": "weeklyretro, discuss",
      "reactions": 37,
      "comments": 48,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "How Do You Actually Know If AI Is Working On Your Team?",
      "description": "Productivity percentages and acceptance rates don't tell you much. Here's a more concrete metric: AI functional coverage.",
      "url": "https://dev.to/dionysos/how-do-you-actually-know-if-ai-is-working-on-your-team-2b02",
      "tags": "ai, engineering, productivity, dx",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "dionysos"
    },
    {
      "title": "The Token Economy",
      "description": "In 2161, time is money. Literally.  When you are born, a clock starts on your arm. One year. When it...",
      "url": "https://dev.to/dannwaneri/the-token-economy-3cd9",
      "tags": "ai, webdev, career, discuss",
      "reactions": 53,
      "comments": 40,
      "reading_time": 4,
      "author": "dannwaneri"
    },
    {
      "title": "Happening Now: DEV Weekend Challenge!! Submissions due March 2 at 7:59am UTC.",
      "description": "Good morning! Good afternoon! Good Evening!   Welcome to our first DEV Weekend Challenge, a short...",
      "url": "https://dev.to/devteam/happening-now-dev-weekend-challenge-submissions-due-march-2-at-759am-utc-5fg8",
      "tags": "devchallenge, weekendchallenge, webdev, ai",
      "reactions": 162,
      "comments": 32,
      "reading_time": 3,
      "author": "jess"
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
      "author": "Stremio",
      "repo": "stremio-web",
      "avatar": "https://github.com/Stremio.png",
      "repo_link": "https://github.com/Stremio/stremio-web",
      "desc": "Stremio - Freedom to Stream",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1098,
      "added_stars": 965,
      "builtBy": [
        {
          "username": "nklhtv",
          "href": "https://github.com/nklhtv",
          "avatar": "https://avatars.githubusercontent.com/u/5950722"
        },
        {
          "username": "tymmesyde",
          "href": "https://github.com/tymmesyde",
          "avatar": "https://avatars.githubusercontent.com/u/7889816"
        },
        {
          "username": "kKaskak",
          "href": "https://github.com/kKaskak",
          "avatar": "https://avatars.githubusercontent.com/u/117831817"
        },
        {
          "username": "swetlasg",
          "href": "https://github.com/swetlasg",
          "avatar": "https://avatars.githubusercontent.com/u/15102316"
        },
        {
          "username": "Botsy",
          "href": "https://github.com/Botsy",
          "avatar": "https://avatars.githubusercontent.com/u/10400528"
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
      "forks": 1943,
      "added_stars": 5245,
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
          "username": "Solvely-Colin",
          "href": "https://github.com/Solvely-Colin",
          "avatar": "https://avatars.githubusercontent.com/u/211764741"
        },
        {
          "username": "jjshanks",
          "href": "https://github.com/jjshanks",
          "avatar": "https://avatars.githubusercontent.com/u/62661"
        },
        {
          "username": "davesienkowski",
          "href": "https://github.com/davesienkowski",
          "avatar": "https://avatars.githubusercontent.com/u/3037759"
        }
      ]
    },
    {
      "author": "liyupi",
      "repo": "ai-guide",
      "avatar": "https://github.com/liyupi.png",
      "repo_link": "https://github.com/liyupi/ai-guide",
      "desc": "程序员鱼皮的 AI 资源大全 + Vibe Coding 零基础教程，分享大模型选择指南（DeepSeek / GPT / Gemini / Claude）、最新 AI 资讯、Prompt 提示词大全、AI 知识百科（RAG / MCP / A2A）、AI 编程教程、AI 工具用法（Cursor / Claude Code / OpenClaw / TRAE / Lovable / Agent Skills）、AI 开发框架教程（Spring AI / LangChain）、AI 产品变现指南，帮你快速掌握 AI 技术，走在时代前沿。本项目为开源文档版本，已升级为鱼皮 AI 导航网站",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 903,
      "added_stars": 1346,
      "builtBy": [
        {
          "username": "liyupi",
          "href": "https://github.com/liyupi",
          "avatar": "https://avatars.githubusercontent.com/u/26037703"
        },
        {
          "username": "chaseFunny",
          "href": "https://github.com/chaseFunny",
          "avatar": "https://avatars.githubusercontent.com/u/75657636"
        },
        {
          "username": "cq2021-coder",
          "href": "https://github.com/cq2021-coder",
          "avatar": "https://avatars.githubusercontent.com/u/87939797"
        },
        {
          "username": "gulihua10010",
          "href": "https://github.com/gulihua10010",
          "avatar": "https://avatars.githubusercontent.com/u/38686919"
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
      "forks": 670,
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
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, prompts, and configurations to help you make the most of GitHub Copilot.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2643,
      "added_stars": 1005,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
        },
        {
          "username": "codemillmatt",
          "href": "https://github.com/codemillmatt",
          "avatar": "https://avatars.githubusercontent.com/u/2053639"
        },
        {
          "username": "mubaidr",
          "href": "https://github.com/mubaidr",
          "avatar": "https://avatars.githubusercontent.com/u/2222702"
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
      "forks": 41,
      "added_stars": 24,
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
    },
    {
      "author": "badlogic",
      "repo": "pi-skills",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-skills",
      "desc": "Skills for pi coding agent (compatible with Claude Code and Codex CLI)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 68,
      "added_stars": 117,
      "builtBy": [
        {
          "username": "badlogic",
          "href": "https://github.com/badlogic",
          "avatar": "https://avatars.githubusercontent.com/u/514052"
        },
        {
          "username": "terrorobe",
          "href": "https://github.com/terrorobe",
          "avatar": "https://avatars.githubusercontent.com/u/151045"
        }
      ]
    },
    {
      "author": "Mintplex-Labs",
      "repo": "anything-llm",
      "avatar": "https://github.com/Mintplex-Labs.png",
      "repo_link": "https://github.com/Mintplex-Labs/anything-llm",
      "desc": "The all-in-one Desktop & Docker AI application with built-in RAG, AI agents, No-code agent builder, MCP compatibility, and more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5965,
      "added_stars": 396,
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
      "author": "Wei-Shaw",
      "repo": "claude-relay-service",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/claude-relay-service",
      "desc": "CRS-自建Claude Code镜像，一站式开源中转服务，让 Claude、OpenAI、Gemini、Droid 订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1388,
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
      "author": "gaotianliuyun",
      "repo": "gao",
      "avatar": "https://github.com/gaotianliuyun.png",
      "repo_link": "https://github.com/gaotianliuyun/gao",
      "desc": "FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2584,
      "added_stars": 60,
      "builtBy": [
        {
          "username": "gaotianliuyun",
          "href": "https://github.com/gaotianliuyun",
          "avatar": "https://avatars.githubusercontent.com/u/58679624"
        },
        {
          "username": "xuy132",
          "href": "https://github.com/xuy132",
          "avatar": "https://avatars.githubusercontent.com/u/61369344"
        },
        {
          "username": "ghaner",
          "href": "https://github.com/ghaner",
          "avatar": "https://avatars.githubusercontent.com/u/51288907"
        },
        {
          "username": "lanceyang",
          "href": "https://github.com/lanceyang",
          "avatar": "https://avatars.githubusercontent.com/u/13310044"
        },
        {
          "username": "Baobei321",
          "href": "https://github.com/Baobei321",
          "avatar": "https://avatars.githubusercontent.com/u/108043431"
        }
      ]
    },
    {
      "author": "jasonjmcghee",
      "repo": "WebMCP",
      "avatar": "https://github.com/jasonjmcghee.png",
      "repo_link": "https://github.com/jasonjmcghee/WebMCP",
      "desc": "Early WebMCP proposal / implementation - since evolved and worked on by much more capable folks that develop the web: https://github.com/webmachinelearning/webmcp",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 43,
      "added_stars": 46,
      "builtBy": [
        {
          "username": "jasonjmcghee",
          "href": "https://github.com/jasonjmcghee",
          "avatar": "https://avatars.githubusercontent.com/u/1522149"
        },
        {
          "username": "evalstate",
          "href": "https://github.com/evalstate",
          "avatar": "https://avatars.githubusercontent.com/u/1936278"
        },
        {
          "username": "cybermanhao",
          "href": "https://github.com/cybermanhao",
          "avatar": "https://avatars.githubusercontent.com/u/37235140"
        }
      ]
    },
    {
      "author": "mozilla-firefox",
      "repo": "firefox",
      "avatar": "https://github.com/mozilla-firefox.png",
      "repo_link": "https://github.com/mozilla-firefox/firefox",
      "desc": "The official repository of Mozilla's Firefox web browser.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 920,
      "added_stars": 73,
      "builtBy": [
        {
          "username": "moz-wptsync-bot",
          "href": "https://github.com/moz-wptsync-bot",
          "avatar": "https://avatars.githubusercontent.com/u/32546304"
        },
        {
          "username": "emilio",
          "href": "https://github.com/emilio",
          "avatar": "https://avatars.githubusercontent.com/u/1323194"
        },
        {
          "username": "mfromanmoz",
          "href": "https://github.com/mfromanmoz",
          "avatar": "https://avatars.githubusercontent.com/u/88160594"
        },
        {
          "username": "bzbarsky",
          "href": "https://github.com/bzbarsky",
          "avatar": "https://avatars.githubusercontent.com/u/1457979"
        },
        {
          "username": "glandium",
          "href": "https://github.com/glandium",
          "avatar": "https://avatars.githubusercontent.com/u/1038527"
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
      "forks": 1161,
      "added_stars": 244,
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
      "author": "SillyTavern",
      "repo": "SillyTavern",
      "avatar": "https://github.com/SillyTavern.png",
      "repo_link": "https://github.com/SillyTavern/SillyTavern",
      "desc": "LLM Frontend for Power Users.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4814,
      "added_stars": 337,
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
      "title": "Join the \"Built with Google Gemini: Writing Challenge\" Presented by Major League Hacking (MLH). Win a Raspberry Pi AI Kit!",
      "description": "Last week, we announced that DEV has joined Major League Hacking. To kick things off, we're launching...",
      "url": "https://dev.to/devteam/join-the-built-with-google-gemini-writing-challenge-presented-by-major-league-hacking-mlh-win-17pk",
      "tags": "devchallenge, geminireflections, gemini, ai",
      "reactions": 115,
      "comments": 37,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Stop Downloading Apps for Your Kids. Build Them Instead.",
      "description": "This is a submission for the DEV Weekend Challenge: Community           The Community   I'm a mom. My...",
      "url": "https://dev.to/meimakes/stop-downloading-apps-for-your-kids-build-them-instead-1bhn",
      "tags": "devchallenge, weekendchallenge, ai, opensource",
      "reactions": 3,
      "comments": 0,
      "reading_time": 4,
      "author": "meimakes"
    },
    {
      "title": "Building an Automated Competitive Intelligence Pipeline (Without Enterprise Pricing)",
      "description": "Last quarter, one of our competitors quietly shipped a feature that directly overlapped with what...",
      "url": "https://dev.to/warren_allen/building-an-automated-competitive-intelligence-pipeline-without-enterprise-pricing-1l5e",
      "tags": "productivity, tutorial, webdev, ai",
      "reactions": 1,
      "comments": 0,
      "reading_time": 7,
      "author": "warren_allen"
    },
    {
      "title": "How to Train a Model in TensorFlow.js on Massive Datasets (Out-of-Core Learning).",
      "description": "You wake up one day and decide: \"I'm going to create a machine learning model\".  On the first day,...",
      "url": "https://dev.to/alvarogfn/how-to-train-a-model-in-tensorflowjs-on-massive-datasets-out-of-core-learning-1lb7",
      "tags": "tensorflow, javascript, ai, programming",
      "reactions": 5,
      "comments": 0,
      "reading_time": 6,
      "author": "alvarogfn"
    },
    {
      "title": "The Scaffold: Playwright Project Structure Built for AI",
      "description": "Have you ever started a new Playwright project and spent the first two days just figuring out where...",
      "url": "https://dev.to/idavidov13/the-scaffold-playwright-project-structure-built-for-ai-3a62",
      "tags": "testing, qa, playwright, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "idavidov13"
    },
    {
      "title": "I built a desktop app that orchestrates Claude, GPT, Gemini and local Ollama in a 3-phase pipeline",
      "description": "I've been building desktop AI tools for a while, and one frustration kept coming up: every AI model...",
      "url": "https://dev.to/tsunamayo7/i-built-a-desktop-app-that-orchestrates-claude-gpt-gemini-and-local-ollama-in-a-3-phase-pipeline-1ml7",
      "tags": "showdev, ai, python, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "tsunamayo7"
    },
    {
      "title": "Why We Chose Local LLMs Over Cloud-Only (and When We Break That Rule)",
      "description": "How we cut AI costs by ~90% with local models while keeping cloud APIs for strategic decisions",
      "url": "https://dev.to/mfs_corp/why-we-chose-local-llms-over-cloud-only-and-when-we-break-that-rule-2nne",
      "tags": "ai, llm, selfhosted, infrastructure",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "mfs_corp"
    },
    {
      "title": "I Built a Voice-to-Code VS Code Extension That Runs Entirely On-Device",
      "description": "Every AI coding assistant requires typing. GitHub Copilot, Continue, Kiro — they all expect you to...",
      "url": "https://dev.to/agentic_engineer/i-built-a-voice-to-code-vs-code-extension-that-runs-entirely-on-device-16gc",
      "tags": "vscode, ai, opensource, a11y",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "agentic_engineer"
    },
    {
      "title": "Agent Memory Architecture: How Our AI Remembers Across Sessions",
      "description": "Building persistent memory for AI agents that wake up fresh each session",
      "url": "https://dev.to/mfs_corp/agent-memory-architecture-how-our-ai-remembers-across-sessions-j8l",
      "tags": "ai, architecture, memory, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "mfs_corp"
    },
    {
      "title": "The lost-in-the-middle problem and why retrieval beats stuffing",
      "description": "Your agent has a 200K token context window. So you dump everything in there — MEMORY.md, daily logs,...",
      "url": "https://dev.to/anajuliabit/the-lost-in-the-middle-problem-and-why-retrieval-beats-stuffing-1h37",
      "tags": "ai, memory, llm, agents",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "anajuliabit"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "tambourine_man",
      "descendants": 90,
      "id": 47202708,
      "kids": [
        47203987,
        47203703,
        47204191,
        47203786,
        47203702,
        47204303,
        47204123,
        47204188,
        47204061,
        47204151,
        47203192,
        47202976,
        47203653,
        47203236,
        47204051,
        47203465,
        47203796,
        47203592,
        47203044,
        47203705,
        47203423,
        47203247,
        47202895,
        47203222
      ],
      "score": 528,
      "time": 1772329166,
      "title": "Microgpt",
      "type": "story",
      "url": "http://karpathy.github.io/2026/02/12/microgpt/"
    },
    {
      "by": "golfer",
      "descendants": 206,
      "id": 47200420,
      "kids": [
        47201779,
        47204355,
        47202878,
        47202880,
        47202700,
        47202705,
        47202593,
        47204025,
        47203193,
        47203086,
        47202561,
        47200742,
        47201018,
        47202342,
        47202930,
        47203526,
        47204238,
        47201846,
        47202982,
        47203205,
        47202819,
        47203810,
        47204185,
        47202259,
        47202989,
        47202485,
        47203709,
        47202964,
        47202805,
        47203872,
        47201644,
        47203566,
        47201647,
        47201703,
        47202907,
        47201852,
        47202809,
        47203284,
        47202582,
        47202542,
        47202756,
        47202283,
        47201731,
        47202438,
        47202800,
        47203894,
        47202752,
        47202688,
        47202885,
        47202199
      ],
      "score": 454,
      "time": 1772313856,
      "title": "We do not think Anthropic should be designated as a supply chain risk",
      "type": "story",
      "url": "https://twitter.com/OpenAI/status/2027846016423321831"
    },
    {
      "by": "ksec",
      "descendants": 132,
      "id": 47200904,
      "kids": [
        47201788,
        47201474,
        47201511,
        47202356,
        47202621,
        47203294,
        47204150,
        47202699,
        47204194,
        47201499,
        47201332,
        47201900,
        47201700,
        47201549,
        47201521,
        47202318
      ],
      "score": 222,
      "time": 1772317176,
      "title": "The Windows 95 user interface: A case study in usability engineering (1996)",
      "type": "story",
      "url": "https://dl.acm.org/doi/fullHtml/10.1145/238386.238611"
    },
    {
      "by": "zdw",
      "descendants": 8,
      "id": 47152448,
      "kids": [
        47204165,
        47204035
      ],
      "score": 34,
      "time": 1772031680,
      "title": "Sub-second volumetric 3D printing by synthesis of holographic light fields",
      "type": "story",
      "url": "https://www.nature.com/articles/s41586-026-10114-5"
    },
    {
      "by": "bewal416",
      "descendants": 218,
      "id": 47161759,
      "kids": [
        47199926,
        47199531,
        47199743,
        47204067,
        47199108,
        47202544,
        47202710,
        47199844,
        47198937,
        47199300,
        47199344,
        47199730,
        47199974,
        47201680,
        47203069,
        47199957,
        47203601,
        47203289,
        47200118,
        47203282,
        47200105,
        47200064,
        47201178,
        47201925,
        47203561,
        47200937,
        47200275,
        47201225,
        47199945,
        47198865,
        47199325,
        47203927,
        47202348,
        47201800,
        47199372,
        47200279
      ],
      "score": 432,
      "time": 1772079227,
      "title": "The happiest I've ever been",
      "type": "story",
      "url": "https://ben-mini.com/2026/the-happiest-ive-ever-been"
    },
    {
      "by": "adilmoujahid",
      "descendants": 154,
      "id": 47197267,
      "kids": [
        47197627,
        47198321,
        47204092,
        47198426,
        47200196,
        47200484,
        47197433,
        47204101,
        47200666,
        47198043,
        47202445,
        47201047,
        47197391,
        47199063,
        47200225,
        47197991,
        47198915,
        47197588,
        47200223,
        47199872,
        47202021,
        47200282,
        47200685,
        47198997,
        47197484,
        47199717,
        47198375,
        47197666,
        47200387,
        47198301,
        47200235,
        47197697,
        47200750,
        47197679,
        47197445,
        47201442
      ],
      "score": 451,
      "time": 1772296313,
      "title": "Obsidian Sync now has a headless client",
      "type": "story",
      "url": "https://help.obsidian.md/sync/headless"
    },
    {
      "by": "mrngm",
      "descendants": 14,
      "id": 47163779,
      "kids": [
        47203743,
        47203740,
        47203190,
        47203312,
        47202894,
        47186205
      ],
      "score": 64,
      "time": 1772097537,
      "title": "H-Bomb: A Frank Lloyd Wright Typographic Mystery",
      "type": "story",
      "url": "https://www.inconspicuous.info/p/h-bomb-a-frank-lloyd-wright-typographic"
    },
    {
      "by": "todsacerdoti",
      "descendants": 86,
      "id": 47198977,
      "kids": [
        47200608,
        47202649,
        47201799,
        47204334,
        47202780,
        47201441,
        47200936,
        47200802,
        47202458,
        47202707,
        47200418,
        47203491,
        47201215,
        47203354,
        47203316,
        47203769,
        47203434,
        47202480,
        47201660,
        47204103,
        47200850,
        47200972,
        47201367,
        47200845,
        47200978,
        47203349,
        47200624
      ],
      "score": 191,
      "time": 1772305441,
      "title": "Block the “Upgrade to Tahoe” Alerts",
      "type": "story",
      "url": "https://robservatory.com/block-the-upgrade-to-tahoe-alerts-and-system-settings-indicator/"
    },
    {
      "by": "jawiggins",
      "descendants": 38,
      "id": 47201816,
      "kids": [
        47204178,
        47202718,
        47203883,
        47202576,
        47202832,
        47202423,
        47203756,
        47202495,
        47202464,
        47203325,
        47203435,
        47202420
      ],
      "score": 54,
      "text": "Recently several AI labs have published experiments where they tried to get AI coding agents to complete large software projects.<p>- Cursor attempted to make a browser from scratch: <a href=\"https:&#x2F;&#x2F;cursor.com&#x2F;blog&#x2F;scaling-agents\" rel=\"nofollow\">https:&#x2F;&#x2F;cursor.com&#x2F;blog&#x2F;scaling-agents</a><p>- Anthropic attempted to make a C Compiler: <a href=\"https:&#x2F;&#x2F;www.anthropic.com&#x2F;engineering&#x2F;building-c-compiler\" rel=\"nofollow\">https:&#x2F;&#x2F;www.anthropic.com&#x2F;engineering&#x2F;building-c-compiler</a><p>I have been wondering if there are software packages that can be easily reproduced by taking the available test suites and tasking agents to work on projects until the existing test suites pass.<p>After playing with this concept by having Claude Code reproduce redis and sqlite, I began looking for software packages where an agent-made reproduction might actually be useful.<p>I found libxml2, a widely used, open-source C language library designed for parsing, creating, and manipulating XML and HTML documents. Three months ago it became unmaintained with the update, &quot;This project is unmaintained and has\n[known security issues](<a href=\"https:&#x2F;&#x2F;gitlab.gnome.org&#x2F;GNOME&#x2F;libxml2&#x2F;-&#x2F;issues&#x2F;346\" rel=\"nofollow\">https:&#x2F;&#x2F;gitlab.gnome.org&#x2F;GNOME&#x2F;libxml2&#x2F;-&#x2F;issues&#x2F;346</a>). It is foolish to use this software to process untrusted data.&quot;.<p>With a few days of work, I was able to create xmloxide, a memory safe rust replacement for libxml2 which passes the compatibility suite as well as the W3C XML Conformance Test Suite. Performance is similar on most parsing operations and better on serialization. It comes with a C API so that it can be a replacement for existing uses of libxml2.<p>- crates.io: <a href=\"https:&#x2F;&#x2F;crates.io&#x2F;crates&#x2F;xmloxide\" rel=\"nofollow\">https:&#x2F;&#x2F;crates.io&#x2F;crates&#x2F;xmloxide</a><p>- GitHub release: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;jonwiggins&#x2F;xmloxide&#x2F;releases&#x2F;tag&#x2F;v0.1.0\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;jonwiggins&#x2F;xmloxide&#x2F;releases&#x2F;tag&#x2F;v0.1.0</a><p>While I don&#x27;t expect people to cut over to this new and unproven package, I do think there is something interesting to think about here in how coding agents like Claude Code can quickly iterate given a test suite. It&#x27;s possible the legacy code problem that COBOL and other systems present will go away as rewrites become easier. The problem of ongoing maintenance to fix CVEs and update to later package versions becomes a larger percentage of software package management work.",
      "time": 1772322281,
      "title": "Show HN: Xmloxide – an agent made rust replacement for libxml2",
      "type": "story",
      "url": "https://github.com/jonwiggins/xmloxide"
    },
    {
      "by": "rmoff",
      "descendants": 0,
      "id": 47167432,
      "score": 12,
      "time": 1772119899,
      "title": "Hardwood: A New Parser for Apache Parquet",
      "type": "story",
      "url": "https://www.morling.dev/blog/hardwood-new-parser-for-apache-parquet/"
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
      "by": "tambourine_man",
      "descendants": 90,
      "id": 47202708,
      "kids": [
        47203987,
        47203703,
        47204191,
        47203786,
        47203702,
        47204303,
        47204123,
        47204188,
        47204061,
        47204151,
        47203192,
        47202976,
        47203653,
        47203236,
        47204051,
        47203465,
        47203796,
        47203592,
        47203044,
        47203705,
        47203423,
        47203247,
        47202895,
        47203222
      ],
      "score": 528,
      "time": 1772329166,
      "title": "Microgpt",
      "type": "story",
      "url": "http://karpathy.github.io/2026/02/12/microgpt/"
    },
    {
      "by": "golfer",
      "descendants": 206,
      "id": 47200420,
      "kids": [
        47201779,
        47204355,
        47202878,
        47202880,
        47202700,
        47202705,
        47202593,
        47204025,
        47203193,
        47203086,
        47202561,
        47200742,
        47201018,
        47202342,
        47202930,
        47203526,
        47204238,
        47201846,
        47202982,
        47203205,
        47202819,
        47203810,
        47204185,
        47202259,
        47202989,
        47202485,
        47203709,
        47202964,
        47202805,
        47203872,
        47201644,
        47203566,
        47201647,
        47201703,
        47202907,
        47201852,
        47202809,
        47203284,
        47202582,
        47202542,
        47202756,
        47202283,
        47201731,
        47202438,
        47202800,
        47203894,
        47202752,
        47202688,
        47202885,
        47202199
      ],
      "score": 454,
      "time": 1772313856,
      "title": "We do not think Anthropic should be designated as a supply chain risk",
      "type": "story",
      "url": "https://twitter.com/OpenAI/status/2027846016423321831"
    },
    {
      "by": "ksec",
      "descendants": 132,
      "id": 47200904,
      "kids": [
        47201788,
        47201474,
        47201511,
        47202356,
        47202621,
        47203294,
        47204150,
        47202699,
        47204194,
        47201499,
        47201332,
        47201900,
        47201700,
        47201549,
        47201521,
        47202318
      ],
      "score": 222,
      "time": 1772317176,
      "title": "The Windows 95 user interface: A case study in usability engineering (1996)",
      "type": "story",
      "url": "https://dl.acm.org/doi/fullHtml/10.1145/238386.238611"
    },
    {
      "by": "zdw",
      "descendants": 8,
      "id": 47152448,
      "kids": [
        47204165,
        47204035
      ],
      "score": 34,
      "time": 1772031680,
      "title": "Sub-second volumetric 3D printing by synthesis of holographic light fields",
      "type": "story",
      "url": "https://www.nature.com/articles/s41586-026-10114-5"
    },
    {
      "by": "bewal416",
      "descendants": 218,
      "id": 47161759,
      "kids": [
        47199926,
        47199531,
        47199743,
        47204067,
        47199108,
        47202544,
        47202710,
        47199844,
        47198937,
        47199300,
        47199344,
        47199730,
        47199974,
        47201680,
        47203069,
        47199957,
        47203601,
        47203289,
        47200118,
        47203282,
        47200105,
        47200064,
        47201178,
        47201925,
        47203561,
        47200937,
        47200275,
        47201225,
        47199945,
        47198865,
        47199325,
        47203927,
        47202348,
        47201800,
        47199372,
        47200279
      ],
      "score": 432,
      "time": 1772079227,
      "title": "The happiest I've ever been",
      "type": "story",
      "url": "https://ben-mini.com/2026/the-happiest-ive-ever-been"
    },
    {
      "by": "adilmoujahid",
      "descendants": 154,
      "id": 47197267,
      "kids": [
        47197627,
        47198321,
        47204092,
        47198426,
        47200196,
        47200484,
        47197433,
        47204101,
        47200666,
        47198043,
        47202445,
        47201047,
        47197391,
        47199063,
        47200225,
        47197991,
        47198915,
        47197588,
        47200223,
        47199872,
        47202021,
        47200282,
        47200685,
        47198997,
        47197484,
        47199717,
        47198375,
        47197666,
        47200387,
        47198301,
        47200235,
        47197697,
        47200750,
        47197679,
        47197445,
        47201442
      ],
      "score": 451,
      "time": 1772296313,
      "title": "Obsidian Sync now has a headless client",
      "type": "story",
      "url": "https://help.obsidian.md/sync/headless"
    },
    {
      "by": "mrngm",
      "descendants": 14,
      "id": 47163779,
      "kids": [
        47203743,
        47203740,
        47203190,
        47203312,
        47202894,
        47186205
      ],
      "score": 64,
      "time": 1772097537,
      "title": "H-Bomb: A Frank Lloyd Wright Typographic Mystery",
      "type": "story",
      "url": "https://www.inconspicuous.info/p/h-bomb-a-frank-lloyd-wright-typographic"
    },
    {
      "by": "todsacerdoti",
      "descendants": 86,
      "id": 47198977,
      "kids": [
        47200608,
        47202649,
        47201799,
        47204334,
        47202780,
        47201441,
        47200936,
        47200802,
        47202458,
        47202707,
        47200418,
        47203491,
        47201215,
        47203354,
        47203316,
        47203769,
        47203434,
        47202480,
        47201660,
        47204103,
        47200850,
        47200972,
        47201367,
        47200845,
        47200978,
        47203349,
        47200624
      ],
      "score": 191,
      "time": 1772305441,
      "title": "Block the “Upgrade to Tahoe” Alerts",
      "type": "story",
      "url": "https://robservatory.com/block-the-upgrade-to-tahoe-alerts-and-system-settings-indicator/"
    },
    {
      "by": "jawiggins",
      "descendants": 38,
      "id": 47201816,
      "kids": [
        47204178,
        47202718,
        47203883,
        47202576,
        47202832,
        47202423,
        47203756,
        47202495,
        47202464,
        47203325,
        47203435,
        47202420
      ],
      "score": 54,
      "text": "Recently several AI labs have published experiments where they tried to get AI coding agents to complete large software projects.<p>- Cursor attempted to make a browser from scratch: <a href=\"https:&#x2F;&#x2F;cursor.com&#x2F;blog&#x2F;scaling-agents\" rel=\"nofollow\">https:&#x2F;&#x2F;cursor.com&#x2F;blog&#x2F;scaling-agents</a><p>- Anthropic attempted to make a C Compiler: <a href=\"https:&#x2F;&#x2F;www.anthropic.com&#x2F;engineering&#x2F;building-c-compiler\" rel=\"nofollow\">https:&#x2F;&#x2F;www.anthropic.com&#x2F;engineering&#x2F;building-c-compiler</a><p>I have been wondering if there are software packages that can be easily reproduced by taking the available test suites and tasking agents to work on projects until the existing test suites pass.<p>After playing with this concept by having Claude Code reproduce redis and sqlite, I began looking for software packages where an agent-made reproduction might actually be useful.<p>I found libxml2, a widely used, open-source C language library designed for parsing, creating, and manipulating XML and HTML documents. Three months ago it became unmaintained with the update, &quot;This project is unmaintained and has\n[known security issues](<a href=\"https:&#x2F;&#x2F;gitlab.gnome.org&#x2F;GNOME&#x2F;libxml2&#x2F;-&#x2F;issues&#x2F;346\" rel=\"nofollow\">https:&#x2F;&#x2F;gitlab.gnome.org&#x2F;GNOME&#x2F;libxml2&#x2F;-&#x2F;issues&#x2F;346</a>). It is foolish to use this software to process untrusted data.&quot;.<p>With a few days of work, I was able to create xmloxide, a memory safe rust replacement for libxml2 which passes the compatibility suite as well as the W3C XML Conformance Test Suite. Performance is similar on most parsing operations and better on serialization. It comes with a C API so that it can be a replacement for existing uses of libxml2.<p>- crates.io: <a href=\"https:&#x2F;&#x2F;crates.io&#x2F;crates&#x2F;xmloxide\" rel=\"nofollow\">https:&#x2F;&#x2F;crates.io&#x2F;crates&#x2F;xmloxide</a><p>- GitHub release: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;jonwiggins&#x2F;xmloxide&#x2F;releases&#x2F;tag&#x2F;v0.1.0\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;jonwiggins&#x2F;xmloxide&#x2F;releases&#x2F;tag&#x2F;v0.1.0</a><p>While I don&#x27;t expect people to cut over to this new and unproven package, I do think there is something interesting to think about here in how coding agents like Claude Code can quickly iterate given a test suite. It&#x27;s possible the legacy code problem that COBOL and other systems present will go away as rewrites become easier. The problem of ongoing maintenance to fix CVEs and update to later package versions becomes a larger percentage of software package management work.",
      "time": 1772322281,
      "title": "Show HN: Xmloxide – an agent made rust replacement for libxml2",
      "type": "story",
      "url": "https://github.com/jonwiggins/xmloxide"
    },
    {
      "by": "rmoff",
      "descendants": 0,
      "id": 47167432,
      "score": 12,
      "time": 1772119899,
      "title": "Hardwood: A New Parser for Apache Parquet",
      "type": "story",
      "url": "https://www.morling.dev/blog/hardwood-new-parser-for-apache-parquet/"
    },
    {
      "by": "adamnemecek",
      "descendants": 112,
      "id": 47155526,
      "kids": [
        47199044,
        47196606,
        47156906,
        47197498,
        47204114,
        47197036,
        47198889,
        47198896,
        47201376,
        47198443,
        47200116,
        47202807,
        47198540,
        47197343,
        47197250,
        47196807,
        47196026,
        47196675
      ],
      "score": 273,
      "time": 1772043886,
      "title": "Woxi: Wolfram Mathematica Reimplementation in Rust",
      "type": "story",
      "url": "https://github.com/ad-si/Woxi"
    },
    {
      "by": "RyanShook",
      "descendants": 187,
      "id": 47195371,
      "kids": [
        47195943,
        47195879,
        47195796,
        47197621,
        47198537,
        47196427,
        47202306,
        47197339,
        47196995,
        47196732,
        47201545,
        47195885,
        47201626,
        47203905,
        47196693,
        47195726,
        47196293,
        47202768,
        47195580,
        47197703,
        47200568,
        47196687,
        47197942,
        47196752,
        47196548,
        47198724,
        47196898,
        47196226,
        47196735,
        47199140,
        47200142,
        47195735
      ],
      "score": 227,
      "time": 1772286613,
      "title": "Addressing Antigravity Bans and Reinstating Access",
      "type": "story",
      "url": "https://github.com/google-gemini/gemini-cli/discussions/20632"
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
      "title": "Package Managers à la Carte: A Formal Model of Dependency Resolution",
      "url": "https://arxiv.org/abs/2602.18602",
      "score": 59,
      "comments": 8,
      "tags": [
        "compsci"
      ],
      "id": "fm1eln"
    },
    {
      "title": "prek: a better `pre-commit`",
      "url": "https://github.com/j178/prek",
      "score": 29,
      "comments": 18,
      "tags": [
        "vibecoding"
      ],
      "id": "v5nyjz"
    },
    {
      "title": "Yes, and",
      "url": "https://htmx.org/essays/yes-and/",
      "score": 100,
      "comments": 3,
      "tags": [
        "practices",
        "programming",
        "vibecoding"
      ],
      "id": "tza0zh"
    },
    {
      "title": "Block the “Upgrade to Tahoe” alerts",
      "url": "https://robservatory.com/block-the-upgrade-to-tahoe-alerts-and-system-settings-indicator/",
      "score": 21,
      "comments": 12,
      "tags": [
        "mac"
      ],
      "id": "kch6lb"
    },
    {
      "title": "January in Servo: preloads, better forms, details styling, and more",
      "url": "https://servo.org/blog/2026/02/28/january-in-servo/",
      "score": 38,
      "comments": 0,
      "tags": [
        "browsers",
        "release"
      ],
      "id": "gpcwus"
    },
    {
      "title": "fast-servers: an interesting pattern",
      "url": "https://geocar.sdf1.org/fast-servers.html",
      "score": 21,
      "comments": 6,
      "tags": [
        "c",
        "unix"
      ],
      "id": "3fevyk"
    },
    {
      "title": "15 Years of Indie Dev In 4 Bits of Advice",
      "url": "https://www.pentadact.com/2026-01-08-15-years-of-indie-dev-in-4-bits-of-advice/",
      "score": 39,
      "comments": 1,
      "tags": [
        "games"
      ],
      "id": "asryy7"
    },
    {
      "title": "Custom Data Structures in E-Graphs",
      "url": "https://uwplse.org/2026/02/24/egglog-containers.html",
      "score": 7,
      "comments": 1,
      "tags": [
        "logiclangs",
        "plt",
        "python"
      ],
      "id": "szaazg"
    },
    {
      "title": "AI=true is an Anti-Pattern",
      "url": "https://keleshev.com/ai-equals-true-is-an-anti-pattern",
      "score": 23,
      "comments": 4,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "iedoot"
    },
    {
      "title": "Cash issuing terminals",
      "url": "https://computer.rip/2026-02-27-ibm-atm.html",
      "score": 12,
      "comments": 0,
      "tags": [
        "historical"
      ],
      "id": "98pmg9"
    }
  ]
}
```

