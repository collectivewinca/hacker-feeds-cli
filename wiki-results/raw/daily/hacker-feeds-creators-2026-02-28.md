# Hacker Feeds Outcomes - Creators

Generated on: 2026-02-28 06:56:57 UTC

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
      "url": "https://dev.to/devteam/what-was-your-win-this-week-5h33",
      "tags": "weeklyretro, discuss",
      "reactions": 32,
      "comments": 30,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "The Token Economy",
      "description": "In 2161, time is money. Literally.  When you are born, a clock starts on your arm. One year. When it...",
      "url": "https://dev.to/dannwaneri/the-token-economy-3cd9",
      "tags": "ai, webdev, career, discuss",
      "reactions": 45,
      "comments": 38,
      "reading_time": 4,
      "author": "dannwaneri"
    },
    {
      "title": "Happening Now: DEV Weekend Challenge!! Submissions due March 2 at 7:59am UTC.",
      "description": "Good morning! Good afternoon! Good Evening!   Welcome to our first DEV Weekend Challenge, a short...",
      "url": "https://dev.to/devteam/happening-now-dev-weekend-challenge-submissions-due-march-2-at-759am-utc-5fg8",
      "tags": "devchallenge, weekendchallenge, webdev, ai",
      "reactions": 138,
      "comments": 25,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "AI Ate the Homework: What Communities Are Actually For Now",
      "description": "Communities used to be where you went to ask questions and get help. Now that AI can answer most of those questions, what are communities actually for? Here's what the shift means for community builders and members.",
      "url": "https://dev.to/bekahhw/ai-ate-the-homework-what-communities-are-actually-for-now-11hi",
      "tags": "ai, community",
      "reactions": 6,
      "comments": 2,
      "reading_time": 6,
      "author": "bekahhw"
    },
    {
      "title": "Join the \"Built with Google Gemini: Writing Challenge\" Presented by Major League Hacking (MLH). Win a Raspberry Pi AI Kit!",
      "description": "Last week, we announced that DEV has joined Major League Hacking. To kick things off, we're launching...",
      "url": "https://dev.to/devteam/join-the-built-with-google-gemini-writing-challenge-presented-by-major-league-hacking-mlh-win-17pk",
      "tags": "devchallenge, geminireflections, gemini, ai",
      "reactions": 101,
      "comments": 28,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Upgraded embed experience and new embed types in DEV posts",
      "description": "When you paste a URL into your DEV post, if it is embeddable, you now get a handy little tooltip to...",
      "url": "https://dev.to/devteam/upgraded-embed-experience-and-new-embed-types-in-dev-posts-1kho",
      "tags": "news, devto, forem",
      "reactions": 41,
      "comments": 3,
      "reading_time": 1,
      "author": "jonmarkgo"
    },
    {
      "title": "Using tox to Test a Django App Across Multiple Django Versions",
      "description": "Recently, I developed a reusable Django app django-clearplaintext for normalizing plain text in...",
      "url": "https://dev.to/djangotricks/using-tox-to-test-a-django-app-across-multiple-django-versions-28g9",
      "tags": "django, python, tox, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 7,
      "author": "djangotricks"
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
      "title": "Data Pseudonymization: When You Can't Just Delete Everything",
      "description": "Here's a problem I run into all the time: you need to track that \"cust_47832\" who made a purchase...",
      "url": "https://dev.to/manualwise/data-pseudonymization-when-you-cant-just-delete-everything-4goa",
      "tags": "data, dataengineering",
      "reactions": 2,
      "comments": 0,
      "reading_time": 9,
      "author": "manualwise"
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
      "forks": 1097,
      "added_stars": 1227,
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
      "forks": 1899,
      "added_stars": 5031,
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
      "forks": 887,
      "added_stars": 1209,
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
      "author": "rabbitmq",
      "repo": "rabbitmq-server",
      "avatar": "https://github.com/rabbitmq.png",
      "repo_link": "https://github.com/rabbitmq/rabbitmq-server",
      "desc": "Open source RabbitMQ: core server and tier 1 (built-in) plugins",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3992,
      "added_stars": 23,
      "builtBy": [
        {
          "username": "michaelklishin",
          "href": "https://github.com/michaelklishin",
          "avatar": "https://avatars.githubusercontent.com/u/1090"
        },
        {
          "username": "dumbbell",
          "href": "https://github.com/dumbbell",
          "avatar": "https://avatars.githubusercontent.com/u/159804"
        },
        {
          "username": "rade",
          "href": "https://github.com/rade",
          "avatar": "https://avatars.githubusercontent.com/u/109109"
        },
        {
          "username": "hairyhum",
          "href": "https://github.com/hairyhum",
          "avatar": "https://avatars.githubusercontent.com/u/784180"
        },
        {
          "username": "kjnilsson",
          "href": "https://github.com/kjnilsson",
          "avatar": "https://avatars.githubusercontent.com/u/1180564"
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
      "forks": 668,
      "added_stars": 168,
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
      "author": "atlassian",
      "repo": "atlassian-mcp-server",
      "avatar": "https://github.com/atlassian.png",
      "repo_link": "https://github.com/atlassian/atlassian-mcp-server",
      "desc": "Remote MCP Server that securely connects Jira and Confluence with your LLM, IDE, or agent platform of choice.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 41,
      "added_stars": 27,
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
      "forks": 67,
      "added_stars": 111,
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
      "author": "harvard-edge",
      "repo": "cs249r_book",
      "avatar": "https://github.com/harvard-edge.png",
      "repo_link": "https://github.com/harvard-edge/cs249r_book",
      "desc": "Introduction to Machine Learning Systems",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2472,
      "added_stars": 691,
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
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, prompts, and configurations to help you make the most of GitHub Copilot.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2634,
      "added_stars": 1013,
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
      "author": "jasonjmcghee",
      "repo": "WebMCP",
      "avatar": "https://github.com/jasonjmcghee.png",
      "repo_link": "https://github.com/jasonjmcghee/WebMCP",
      "desc": "Early WebMCP proposal / implementation - since evolved and worked on by much more capable folks that develop the web: https://github.com/webmachinelearning/webmcp",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 41,
      "added_stars": 47,
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
      "author": "gaotianliuyun",
      "repo": "gao",
      "avatar": "https://github.com/gaotianliuyun.png",
      "repo_link": "https://github.com/gaotianliuyun/gao",
      "desc": "FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2584,
      "added_stars": 66,
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
      "author": "Mintplex-Labs",
      "repo": "anything-llm",
      "avatar": "https://github.com/Mintplex-Labs.png",
      "repo_link": "https://github.com/Mintplex-Labs/anything-llm",
      "desc": "The all-in-one Desktop & Docker AI application with built-in RAG, AI agents, No-code agent builder, MCP compatibility, and more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5958,
      "added_stars": 371,
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
      "author": "SillyTavern",
      "repo": "SillyTavern",
      "avatar": "https://github.com/SillyTavern.png",
      "repo_link": "https://github.com/SillyTavern/SillyTavern",
      "desc": "LLM Frontend for Power Users.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4805,
      "added_stars": 333,
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
      "author": "jaywcjlove",
      "repo": "awesome-mac",
      "avatar": "https://github.com/jaywcjlove.png",
      "repo_link": "https://github.com/jaywcjlove/awesome-mac",
      "desc": " Now we have become very big, Different from the original idea. Collect premium software in various categories.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7436,
      "added_stars": 386,
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
      "author": "nolimits4web",
      "repo": "swiper",
      "avatar": "https://github.com/nolimits4web.png",
      "repo_link": "https://github.com/nolimits4web/swiper",
      "desc": "Most modern mobile touch slider with hardware accelerated transitions",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 9707,
      "added_stars": 25,
      "builtBy": [
        {
          "username": "nolimits4web",
          "href": "https://github.com/nolimits4web",
          "avatar": "https://avatars.githubusercontent.com/u/999588"
        },
        {
          "username": "vltansky",
          "href": "https://github.com/vltansky",
          "avatar": "https://avatars.githubusercontent.com/u/5851280"
        },
        {
          "username": "DAnn2012",
          "href": "https://github.com/DAnn2012",
          "avatar": "https://avatars.githubusercontent.com/u/1197819"
        },
        {
          "username": "TiagoCavalcante",
          "href": "https://github.com/TiagoCavalcante",
          "avatar": "https://avatars.githubusercontent.com/u/62714153"
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
      "title": "The Token Economy",
      "description": "In 2161, time is money. Literally.  When you are born, a clock starts on your arm. One year. When it...",
      "url": "https://dev.to/dannwaneri/the-token-economy-3cd9",
      "tags": "ai, webdev, career, discuss",
      "reactions": 45,
      "comments": 38,
      "reading_time": 4,
      "author": "dannwaneri"
    },
    {
      "title": "Happening Now: DEV Weekend Challenge!! Submissions due March 2 at 7:59am UTC.",
      "description": "Good morning! Good afternoon! Good Evening!   Welcome to our first DEV Weekend Challenge, a short...",
      "url": "https://dev.to/devteam/happening-now-dev-weekend-challenge-submissions-due-march-2-at-759am-utc-5fg8",
      "tags": "devchallenge, weekendchallenge, webdev, ai",
      "reactions": 138,
      "comments": 25,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "AI Ate the Homework: What Communities Are Actually For Now",
      "description": "Communities used to be where you went to ask questions and get help. Now that AI can answer most of those questions, what are communities actually for? Here's what the shift means for community builders and members.",
      "url": "https://dev.to/bekahhw/ai-ate-the-homework-what-communities-are-actually-for-now-11hi",
      "tags": "ai, community",
      "reactions": 6,
      "comments": 2,
      "reading_time": 6,
      "author": "bekahhw"
    },
    {
      "title": "Join the \"Built with Google Gemini: Writing Challenge\" Presented by Major League Hacking (MLH). Win a Raspberry Pi AI Kit!",
      "description": "Last week, we announced that DEV has joined Major League Hacking. To kick things off, we're launching...",
      "url": "https://dev.to/devteam/join-the-built-with-google-gemini-writing-challenge-presented-by-major-league-hacking-mlh-win-17pk",
      "tags": "devchallenge, geminireflections, gemini, ai",
      "reactions": 101,
      "comments": 28,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Entering the Age of AI: A Laggard's Tale",
      "description": "I know I’m late to the game. It’s hard to teach an old dog new tricks. I’m the type of person who...",
      "url": "https://dev.to/playfulprogramming/entering-the-age-of-ai-a-laggards-tale-56i1",
      "tags": "webdev, ai, programming, devjournal",
      "reactions": 10,
      "comments": 2,
      "reading_time": 6,
      "author": "ryansolid"
    },
    {
      "title": "How I Built a Security Flywheel for AI Agents in 14 Days",
      "description": "Scanner, observatory, MCP server. 42,655 skills, 7 registries, 148 rules. How a feedback loop compounds when data improves rules and rules improve data.",
      "url": "https://dev.to/0x711/i-built-a-security-flywheel-for-ai-agents-in-14-days-heres-how-each-piece-made-the-next-one-2ca2",
      "tags": "security, ai, opensource, go",
      "reactions": 1,
      "comments": 2,
      "reading_time": 4,
      "author": "0x711"
    },
    {
      "title": "My Take On AI and Technology (Besides the Pure Developer PoV)",
      "description": "Hello Dev.to community !  I hope you're all doing well, today I decided for a little bit more...",
      "url": "https://dev.to/luftietheanonymous/my-take-on-ai-and-technology-besides-the-pure-developer-pov-cce",
      "tags": "ai, future, machinelearning, discuss",
      "reactions": 24,
      "comments": 2,
      "reading_time": 7,
      "author": "luftietheanonymous"
    },
    {
      "title": "Kimi Wrote 8,500 Lines, Blamed Me for Delegating, Then Claimed to Be Claude",
      "description": "I delegated 8 tasks to Kimi K2.5, and 8,500 lines of code appeared. The next morning, I reviewed...",
      "url": "https://dev.to/shimo4228/kimi-wrote-8500-lines-blamed-me-for-delegating-then-claimed-to-be-claude-3991",
      "tags": "claudecode, kimi, ai, solodev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "shimo4228"
    },
    {
      "title": "How I built an AI tool that diagnoses CI/CD pipeline failures in seconds",
      "description": "Every engineering team I've talked to has the same frustration. Pipeline fails. Engineer gets a Slack...",
      "url": "https://dev.to/raja_karuppasamy_dfec2475/how-i-built-an-ai-tool-that-diagnoses-cicd-pipeline-failures-in-seconds-2igi",
      "tags": "devops, ai, github, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "raja_karuppasamy_dfec2475"
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
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "BloondAndDoom",
      "descendants": 432,
      "id": 47188473,
      "kids": [
        47190662,
        47188929,
        47189594,
        47189518,
        47189190,
        47190847,
        47189261,
        47188682,
        47189438,
        47189166,
        47191133,
        47189636,
        47188812,
        47191377,
        47189418,
        47189657,
        47188623,
        47188839,
        47189120,
        47190381,
        47191007,
        47190506,
        47190819,
        47189216,
        47190035,
        47189496,
        47190445,
        47190181,
        47189584,
        47190961,
        47189465,
        47188628,
        47189875,
        47189530,
        47189222,
        47188739,
        47188681,
        47190192,
        47188947,
        47189200,
        47188709,
        47188707,
        47190236,
        47190392,
        47190963,
        47189208,
        47178525,
        47189420,
        47189497,
        47188653,
        47190719,
        47183575,
        47191080,
        47190578,
        47190503,
        47190143,
        47190484,
        47190241,
        47189228,
        47190066,
        47188873,
        47189921,
        47190526,
        47191185,
        47188646,
        47189479,
        47189311,
        47189288,
        47189405,
        47188988,
        47190685,
        47188649,
        47190524,
        47188604,
        47190389,
        47189793,
        47189612,
        47189540,
        47189197,
        47188912,
        47189313,
        47189966,
        47190229,
        47191242,
        47190300,
        47189437,
        47189149,
        47189045,
        47188713,
        47189001,
        47188784,
        47188789,
        47189407,
        47188701,
        47189803,
        47188734,
        47190992
      ],
      "score": 1183,
      "time": 1772240093,
      "title": "We Will Not Be Divided",
      "type": "story",
      "url": "https://notdivided.org"
    },
    {
      "by": "tobr",
      "descendants": 23,
      "id": 47190997,
      "kids": [
        47191258,
        47191401,
        47191325,
        47191380,
        47191388,
        47191364,
        47191275,
        47191293,
        47191128,
        47191272,
        47191310
      ],
      "score": 160,
      "time": 1772258101,
      "title": "How do I cancel my ChatGPT subscription?",
      "type": "story",
      "url": "https://help.openai.com/en/articles/7232927-how-do-i-cancel-my-chatgpt-subscription"
    },
    {
      "by": "toomuchtodo",
      "descendants": 14,
      "id": 47189535,
      "kids": [
        47190618,
        47191211,
        47190807,
        47191245,
        47189581
      ],
      "score": 134,
      "time": 1772246896,
      "title": "Croatia declared free of landmines after 31 years",
      "type": "story",
      "url": "https://glashrvatske.hrt.hr/en/domestic/croatia-declared-free-of-landmines-after-31-years-12593533"
    },
    {
      "by": "zdw",
      "descendants": 51,
      "id": 47189749,
      "kids": [
        47190414,
        47190619,
        47190321,
        47190191,
        47190124,
        47191122,
        47190218,
        47190135,
        47190317,
        47190100,
        47190230,
        47190641,
        47190231
      ],
      "score": 108,
      "time": 1772248300,
      "title": "Don't use passkeys for encrypting user data",
      "type": "story",
      "url": "https://blog.timcappalli.me/p/passkeys-prf-warning/"
    },
    {
      "by": "zdw",
      "descendants": 1,
      "id": 47190806,
      "kids": [
        47191210,
        47191161
      ],
      "score": 26,
      "time": 1772256081,
      "title": "Cash issuing terminals",
      "type": "story",
      "url": "https://computer.rip/2026-02-27-ibm-atm.html"
    },
    {
      "by": "eoskx",
      "descendants": 226,
      "id": 47189650,
      "kids": [
        47189970,
        47191321,
        47190708,
        47191273,
        47190420,
        47190063,
        47190970,
        47190671,
        47189862,
        47190103,
        47190595,
        47190729,
        47189879,
        47190131,
        47190368,
        47190351,
        47189851,
        47190674,
        47190867,
        47189937,
        47190021,
        47190140,
        47190270,
        47190025,
        47191195,
        47191017,
        47190707,
        47191306,
        47190723,
        47190401,
        47190403,
        47191169,
        47190225,
        47190171,
        47190072,
        47190163,
        47190112,
        47190540,
        47190232,
        47190887,
        47190306,
        47190869,
        47190197,
        47190019,
        47189975,
        47190331,
        47190615,
        47191247,
        47190283,
        47189959,
        47190220,
        47190079,
        47189997,
        47191214,
        47190444,
        47190634,
        47190453,
        47189964,
        47188741,
        47190290,
        47190137,
        47190910,
        47190279,
        47189960,
        47190201,
        47190210,
        47190168,
        47189705,
        47190274,
        47189835,
        47190110,
        47190228,
        47190363,
        47190264,
        47190147,
        47189923
      ],
      "score": 396,
      "text": "<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;sama&#x2F;status&#x2F;2027578652477821175\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;sama&#x2F;status&#x2F;2027578652477821175</a><p><a href=\"https:&#x2F;&#x2F;fortune.com&#x2F;2026&#x2F;02&#x2F;27&#x2F;openai-in-talks-with-pentagon-after-anthropic-blowup&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;fortune.com&#x2F;2026&#x2F;02&#x2F;27&#x2F;openai-in-talks-with-pentagon...</a>",
      "time": 1772247542,
      "title": "OpenAI agrees with Dept. of War to deploy models in their classified network",
      "type": "story",
      "url": "https://twitter.com/sama/status/2027578652477821175"
    },
    {
      "by": "maloyan",
      "descendants": 13,
      "id": 47155375,
      "kids": [
        47191370,
        47191142,
        47191043,
        47190877,
        47190638,
        47190479,
        47190466,
        47190469,
        47191092
      ],
      "score": 65,
      "text": "Hi HN, I&#x27;m Narek. I built Manim-Web, a TypeScript&#x2F;JavaScript port of 3Blue1Brown’s popular Manim math animation engine.<p>The Problem: Like many here, I love Manim&#x27;s visual style. But setting it up locally is notoriously painful - it requires Python, FFmpeg, Cairo, and a full LaTeX distribution. It creates a massive barrier to entry, especially for students or people who just want to quickly visualize a concept.<p>The Solution: I wanted to make it zero-setup, so I ported the engine to TypeScript. Manim-Web runs entirely client-side in the browser. No Python, no servers, no install. It runs animations in real-time at 60fps.<p>How it works underneath:\n- Rendering: Uses Canvas API &#x2F; WebGL (via Three.js for 3D scenes).\n- LaTeX: Rendered and animated via MathJax&#x2F;KaTeX (no LaTeX install needed!).\n- API: I kept the API almost identical to the Python version (e.g., scene.play(new Transform(square, circle))), meaning existing Manim knowledge transfers over directly.\n- Reactivity: Updaters and ValueTrackers follow the exact same reactive pattern as the Python original.<p>Because it&#x27;s web-native, the animations are now inherently interactive (objects can be draggable&#x2F;clickable) and can be embedded directly into React&#x2F;Vue apps, interactive textbooks, or blogs. I also included a py2ts converter to help migrate existing scripts.<p>Live Demo: <a href=\"https:&#x2F;&#x2F;maloyan.github.io&#x2F;manim-web&#x2F;examples\" rel=\"nofollow\">https:&#x2F;&#x2F;maloyan.github.io&#x2F;manim-web&#x2F;examples</a>\nGitHub: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;maloyan&#x2F;manim-web\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;maloyan&#x2F;manim-web</a><p>It&#x27;s open-source (MIT). I&#x27;m still actively building out feature parity with the Python version, but core animations, geometry, plotting, and 3D orbiting are working great. I would love to hear your feedback, and I&#x27;ll be hanging around to answer any technical questions about rendering math in the browser!",
      "time": 1772043307,
      "title": "Show HN: I ported Manim to TypeScript (run 3b1B math animations in the browser)",
      "type": "story",
      "url": "https://github.com/maloyan/manim-web"
    },
    {
      "by": "zlatkov",
      "descendants": 501,
      "id": 47181211,
      "kids": [
        47181631,
        47185747,
        47181452,
        47186113,
        47185571,
        47181613,
        47180830,
        47182151,
        47182111,
        47186948,
        47190654,
        47186278,
        47180865,
        47185316,
        47187052,
        47189740,
        47180875,
        47181350,
        47181752,
        47187787,
        47189674,
        47180895,
        47180831,
        47180767,
        47185664,
        47181060,
        47182519,
        47187961,
        47181406,
        47185839,
        47181409,
        47188938,
        47181930,
        47186585,
        47185574,
        47181697,
        47182168,
        47185958,
        47180957,
        47181783,
        47181445,
        47181500,
        47181536,
        47180910,
        47181202,
        47186137,
        47182133,
        47182368,
        47182011,
        47181012,
        47187687,
        47182392,
        47180961,
        47185630,
        47180851,
        47181495,
        47182127,
        47185170,
        47181860,
        47180896,
        47181705,
        47182024,
        47188573,
        47188256,
        47181340,
        47182235,
        47181939,
        47181438,
        47180696,
        47183421
      ],
      "score": 461,
      "text": "<a href=\"https:&#x2F;&#x2F;openai.com&#x2F;index&#x2F;scaling-ai-for-everyone&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;openai.com&#x2F;index&#x2F;scaling-ai-for-everyone&#x2F;</a><p><a href=\"https:&#x2F;&#x2F;x.com&#x2F;sama&#x2F;status&#x2F;2027386252555919386\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;sama&#x2F;status&#x2F;2027386252555919386</a><p><a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;sama&#x2F;status&#x2F;2027386252555919386\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;sama&#x2F;status&#x2F;2027386252555919386</a>",
      "time": 1772204165,
      "title": "OpenAI raises $110B on $730B pre-money valuation",
      "type": "story",
      "url": "https://techcrunch.com/2026/02/27/openai-raises-110b-in-one-of-the-largest-private-funding-rounds-in-history/"
    },
    {
      "by": "ks2048",
      "descendants": 53,
      "id": 47170030,
      "kids": [
        47191323,
        47189502,
        47191170,
        47188254,
        47191039,
        47189742,
        47190660,
        47188770,
        47191040,
        47188514,
        47189214,
        47188802,
        47190982,
        47189195,
        47189138,
        47190093,
        47189207,
        47191400,
        47190508,
        47189307,
        47189565
      ],
      "score": 131,
      "time": 1772130596,
      "title": "Smallest transformer that can add two 10-digit numbers",
      "type": "story",
      "url": "https://github.com/anadim/AdderBoard"
    },
    {
      "by": "WalterSobchak",
      "descendants": 496,
      "id": 47181208,
      "kids": [
        47191379,
        47187802,
        47184488,
        47187277,
        47189744,
        47183691,
        47182908,
        47184721,
        47191107,
        47189805,
        47181385,
        47186797,
        47186181,
        47184622,
        47190703,
        47183542,
        47185846,
        47183620,
        47190611,
        47186427,
        47186433,
        47181949,
        47186820,
        47191205,
        47188304,
        47187893,
        47191318,
        47184443,
        47186733,
        47183121,
        47188383,
        47189874,
        47181921,
        47185946,
        47183247,
        47187124,
        47186838,
        47187706,
        47189037,
        47187882,
        47189669,
        47189542,
        47190994,
        47186827,
        47189094,
        47183498,
        47187854,
        47189722,
        47182800,
        47187110,
        47189990,
        47187083,
        47188189,
        47187864,
        47188515,
        47186520,
        47190699,
        47188257,
        47184033,
        47187656,
        47189218,
        47189555,
        47189656,
        47187248,
        47186784,
        47188783,
        47191154,
        47190024,
        47187826,
        47183760,
        47185543,
        47188965,
        47182586,
        47186243,
        47188040,
        47183664,
        47185634,
        47190432,
        47185894,
        47190246,
        47185344,
        47190121,
        47190527,
        47185622,
        47187619,
        47183610,
        47186642,
        47184899,
        47188476,
        47185586,
        47183588,
        47182965,
        47185534,
        47186799,
        47183741,
        47186172,
        47187722,
        47186054,
        47182703,
        47184541,
        47183488,
        47188475,
        47186326,
        47187956,
        47185555,
        47187452,
        47185998,
        47188495,
        47186891,
        47183315,
        47187938,
        47189987
      ],
      "score": 521,
      "time": 1772204149,
      "title": "A new California law says all operating systems need to have age verification",
      "type": "story",
      "url": "https://www.pcgamer.com/software/operating-systems/a-new-california-law-says-all-operating-systems-including-linux-need-to-have-some-form-of-age-verification-at-account-setup/"
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
      "by": "BloondAndDoom",
      "descendants": 432,
      "id": 47188473,
      "kids": [
        47190662,
        47188929,
        47189594,
        47189518,
        47189190,
        47190847,
        47189261,
        47188682,
        47189438,
        47189166,
        47191133,
        47189636,
        47188812,
        47191377,
        47189418,
        47189657,
        47188623,
        47188839,
        47189120,
        47190381,
        47191007,
        47190506,
        47190819,
        47189216,
        47190035,
        47189496,
        47190445,
        47190181,
        47189584,
        47190961,
        47189465,
        47188628,
        47189875,
        47189530,
        47189222,
        47188739,
        47188681,
        47190192,
        47188947,
        47189200,
        47188709,
        47188707,
        47190236,
        47190392,
        47190963,
        47189208,
        47178525,
        47189420,
        47189497,
        47188653,
        47190719,
        47183575,
        47191080,
        47190578,
        47190503,
        47190143,
        47190484,
        47190241,
        47189228,
        47190066,
        47188873,
        47189921,
        47190526,
        47191185,
        47188646,
        47189479,
        47189311,
        47189288,
        47189405,
        47188988,
        47190685,
        47188649,
        47190524,
        47188604,
        47190389,
        47189793,
        47189612,
        47189540,
        47189197,
        47188912,
        47189313,
        47189966,
        47190229,
        47191242,
        47190300,
        47189437,
        47189149,
        47189045,
        47188713,
        47189001,
        47188784,
        47188789,
        47189407,
        47188701,
        47189803,
        47188734,
        47190992
      ],
      "score": 1183,
      "time": 1772240093,
      "title": "We Will Not Be Divided",
      "type": "story",
      "url": "https://notdivided.org"
    },
    {
      "by": "tobr",
      "descendants": 23,
      "id": 47190997,
      "kids": [
        47191258,
        47191401,
        47191325,
        47191380,
        47191388,
        47191364,
        47191275,
        47191293,
        47191128,
        47191272,
        47191310
      ],
      "score": 160,
      "time": 1772258101,
      "title": "How do I cancel my ChatGPT subscription?",
      "type": "story",
      "url": "https://help.openai.com/en/articles/7232927-how-do-i-cancel-my-chatgpt-subscription"
    },
    {
      "by": "toomuchtodo",
      "descendants": 14,
      "id": 47189535,
      "kids": [
        47190618,
        47191211,
        47190807,
        47191245,
        47189581
      ],
      "score": 134,
      "time": 1772246896,
      "title": "Croatia declared free of landmines after 31 years",
      "type": "story",
      "url": "https://glashrvatske.hrt.hr/en/domestic/croatia-declared-free-of-landmines-after-31-years-12593533"
    },
    {
      "by": "zdw",
      "descendants": 51,
      "id": 47189749,
      "kids": [
        47190414,
        47190619,
        47190321,
        47190191,
        47190124,
        47191122,
        47190218,
        47190135,
        47190317,
        47190100,
        47190230,
        47190641,
        47190231
      ],
      "score": 108,
      "time": 1772248300,
      "title": "Don't use passkeys for encrypting user data",
      "type": "story",
      "url": "https://blog.timcappalli.me/p/passkeys-prf-warning/"
    },
    {
      "by": "zdw",
      "descendants": 1,
      "id": 47190806,
      "kids": [
        47191210,
        47191161
      ],
      "score": 26,
      "time": 1772256081,
      "title": "Cash issuing terminals",
      "type": "story",
      "url": "https://computer.rip/2026-02-27-ibm-atm.html"
    },
    {
      "by": "eoskx",
      "descendants": 226,
      "id": 47189650,
      "kids": [
        47189970,
        47191321,
        47190708,
        47191273,
        47190420,
        47190063,
        47190970,
        47190671,
        47189862,
        47190103,
        47190595,
        47190729,
        47189879,
        47190131,
        47190368,
        47190351,
        47189851,
        47190674,
        47190867,
        47189937,
        47190021,
        47190140,
        47190270,
        47190025,
        47191195,
        47191017,
        47190707,
        47191306,
        47190723,
        47190401,
        47190403,
        47191169,
        47190225,
        47190171,
        47190072,
        47190163,
        47190112,
        47190540,
        47190232,
        47190887,
        47190306,
        47190869,
        47190197,
        47190019,
        47189975,
        47190331,
        47190615,
        47191247,
        47190283,
        47189959,
        47190220,
        47190079,
        47189997,
        47191214,
        47190444,
        47190634,
        47190453,
        47189964,
        47188741,
        47190290,
        47190137,
        47190910,
        47190279,
        47189960,
        47190201,
        47190210,
        47190168,
        47189705,
        47190274,
        47189835,
        47190110,
        47190228,
        47190363,
        47190264,
        47190147,
        47189923
      ],
      "score": 396,
      "text": "<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;sama&#x2F;status&#x2F;2027578652477821175\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;sama&#x2F;status&#x2F;2027578652477821175</a><p><a href=\"https:&#x2F;&#x2F;fortune.com&#x2F;2026&#x2F;02&#x2F;27&#x2F;openai-in-talks-with-pentagon-after-anthropic-blowup&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;fortune.com&#x2F;2026&#x2F;02&#x2F;27&#x2F;openai-in-talks-with-pentagon...</a>",
      "time": 1772247542,
      "title": "OpenAI agrees with Dept. of War to deploy models in their classified network",
      "type": "story",
      "url": "https://twitter.com/sama/status/2027578652477821175"
    },
    {
      "by": "maloyan",
      "descendants": 13,
      "id": 47155375,
      "kids": [
        47191370,
        47191142,
        47191043,
        47190877,
        47190638,
        47190479,
        47190466,
        47190469,
        47191092
      ],
      "score": 65,
      "text": "Hi HN, I&#x27;m Narek. I built Manim-Web, a TypeScript&#x2F;JavaScript port of 3Blue1Brown’s popular Manim math animation engine.<p>The Problem: Like many here, I love Manim&#x27;s visual style. But setting it up locally is notoriously painful - it requires Python, FFmpeg, Cairo, and a full LaTeX distribution. It creates a massive barrier to entry, especially for students or people who just want to quickly visualize a concept.<p>The Solution: I wanted to make it zero-setup, so I ported the engine to TypeScript. Manim-Web runs entirely client-side in the browser. No Python, no servers, no install. It runs animations in real-time at 60fps.<p>How it works underneath:\n- Rendering: Uses Canvas API &#x2F; WebGL (via Three.js for 3D scenes).\n- LaTeX: Rendered and animated via MathJax&#x2F;KaTeX (no LaTeX install needed!).\n- API: I kept the API almost identical to the Python version (e.g., scene.play(new Transform(square, circle))), meaning existing Manim knowledge transfers over directly.\n- Reactivity: Updaters and ValueTrackers follow the exact same reactive pattern as the Python original.<p>Because it&#x27;s web-native, the animations are now inherently interactive (objects can be draggable&#x2F;clickable) and can be embedded directly into React&#x2F;Vue apps, interactive textbooks, or blogs. I also included a py2ts converter to help migrate existing scripts.<p>Live Demo: <a href=\"https:&#x2F;&#x2F;maloyan.github.io&#x2F;manim-web&#x2F;examples\" rel=\"nofollow\">https:&#x2F;&#x2F;maloyan.github.io&#x2F;manim-web&#x2F;examples</a>\nGitHub: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;maloyan&#x2F;manim-web\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;maloyan&#x2F;manim-web</a><p>It&#x27;s open-source (MIT). I&#x27;m still actively building out feature parity with the Python version, but core animations, geometry, plotting, and 3D orbiting are working great. I would love to hear your feedback, and I&#x27;ll be hanging around to answer any technical questions about rendering math in the browser!",
      "time": 1772043307,
      "title": "Show HN: I ported Manim to TypeScript (run 3b1B math animations in the browser)",
      "type": "story",
      "url": "https://github.com/maloyan/manim-web"
    },
    {
      "by": "zlatkov",
      "descendants": 501,
      "id": 47181211,
      "kids": [
        47181631,
        47185747,
        47181452,
        47186113,
        47185571,
        47181613,
        47180830,
        47182151,
        47182111,
        47186948,
        47190654,
        47186278,
        47180865,
        47185316,
        47187052,
        47189740,
        47180875,
        47181350,
        47181752,
        47187787,
        47189674,
        47180895,
        47180831,
        47180767,
        47185664,
        47181060,
        47182519,
        47187961,
        47181406,
        47185839,
        47181409,
        47188938,
        47181930,
        47186585,
        47185574,
        47181697,
        47182168,
        47185958,
        47180957,
        47181783,
        47181445,
        47181500,
        47181536,
        47180910,
        47181202,
        47186137,
        47182133,
        47182368,
        47182011,
        47181012,
        47187687,
        47182392,
        47180961,
        47185630,
        47180851,
        47181495,
        47182127,
        47185170,
        47181860,
        47180896,
        47181705,
        47182024,
        47188573,
        47188256,
        47181340,
        47182235,
        47181939,
        47181438,
        47180696,
        47183421
      ],
      "score": 461,
      "text": "<a href=\"https:&#x2F;&#x2F;openai.com&#x2F;index&#x2F;scaling-ai-for-everyone&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;openai.com&#x2F;index&#x2F;scaling-ai-for-everyone&#x2F;</a><p><a href=\"https:&#x2F;&#x2F;x.com&#x2F;sama&#x2F;status&#x2F;2027386252555919386\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;sama&#x2F;status&#x2F;2027386252555919386</a><p><a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;sama&#x2F;status&#x2F;2027386252555919386\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;sama&#x2F;status&#x2F;2027386252555919386</a>",
      "time": 1772204165,
      "title": "OpenAI raises $110B on $730B pre-money valuation",
      "type": "story",
      "url": "https://techcrunch.com/2026/02/27/openai-raises-110b-in-one-of-the-largest-private-funding-rounds-in-history/"
    },
    {
      "by": "ks2048",
      "descendants": 53,
      "id": 47170030,
      "kids": [
        47191323,
        47189502,
        47191170,
        47188254,
        47191039,
        47189742,
        47190660,
        47188770,
        47191040,
        47188514,
        47189214,
        47188802,
        47190982,
        47189195,
        47189138,
        47190093,
        47189207,
        47191400,
        47190508,
        47189307,
        47189565
      ],
      "score": 131,
      "time": 1772130596,
      "title": "Smallest transformer that can add two 10-digit numbers",
      "type": "story",
      "url": "https://github.com/anadim/AdderBoard"
    },
    {
      "by": "WalterSobchak",
      "descendants": 496,
      "id": 47181208,
      "kids": [
        47191379,
        47187802,
        47184488,
        47187277,
        47189744,
        47183691,
        47182908,
        47184721,
        47191107,
        47189805,
        47181385,
        47186797,
        47186181,
        47184622,
        47190703,
        47183542,
        47185846,
        47183620,
        47190611,
        47186427,
        47186433,
        47181949,
        47186820,
        47191205,
        47188304,
        47187893,
        47191318,
        47184443,
        47186733,
        47183121,
        47188383,
        47189874,
        47181921,
        47185946,
        47183247,
        47187124,
        47186838,
        47187706,
        47189037,
        47187882,
        47189669,
        47189542,
        47190994,
        47186827,
        47189094,
        47183498,
        47187854,
        47189722,
        47182800,
        47187110,
        47189990,
        47187083,
        47188189,
        47187864,
        47188515,
        47186520,
        47190699,
        47188257,
        47184033,
        47187656,
        47189218,
        47189555,
        47189656,
        47187248,
        47186784,
        47188783,
        47191154,
        47190024,
        47187826,
        47183760,
        47185543,
        47188965,
        47182586,
        47186243,
        47188040,
        47183664,
        47185634,
        47190432,
        47185894,
        47190246,
        47185344,
        47190121,
        47190527,
        47185622,
        47187619,
        47183610,
        47186642,
        47184899,
        47188476,
        47185586,
        47183588,
        47182965,
        47185534,
        47186799,
        47183741,
        47186172,
        47187722,
        47186054,
        47182703,
        47184541,
        47183488,
        47188475,
        47186326,
        47187956,
        47185555,
        47187452,
        47185998,
        47188495,
        47186891,
        47183315,
        47187938,
        47189987
      ],
      "score": 521,
      "time": 1772204149,
      "title": "A new California law says all operating systems need to have age verification",
      "type": "story",
      "url": "https://www.pcgamer.com/software/operating-systems/a-new-california-law-says-all-operating-systems-including-linux-need-to-have-some-form-of-age-verification-at-account-setup/"
    },
    {
      "by": "surprisetalk",
      "descendants": 287,
      "id": 47188697,
      "kids": [
        47189489,
        47188933,
        47188872,
        47189379,
        47189180,
        47189380,
        47189252,
        47189714,
        47188953,
        47189478,
        47189433,
        47189715,
        47189841,
        47189014,
        47189082,
        47190581,
        47189253,
        47191045,
        47189392,
        47191282,
        47189274,
        47189320,
        47191138,
        47189567,
        47189839,
        47190305,
        47189985,
        47190157,
        47190893,
        47188774,
        47189310,
        47190957,
        47189795,
        47190509,
        47191240,
        47189814,
        47189021,
        47189286,
        47188960,
        47189528,
        47189095,
        47189076,
        47189198,
        47190647,
        47189298,
        47190102,
        47189730,
        47189440,
        47189416,
        47191099,
        47190930,
        47190798,
        47189681,
        47190812,
        47189024,
        47189324,
        47189620,
        47189608,
        47189111,
        47188798,
        47189067,
        47189315,
        47189035,
        47189016,
        47189549,
        47189003,
        47190356
      ],
      "score": 815,
      "time": 1772241610,
      "title": "Statement on the comments from Secretary of War Pete Hegseth",
      "type": "story",
      "url": "https://www.anthropic.com/news/statement-comments-secretary-war"
    },
    {
      "by": "avsm",
      "descendants": 0,
      "id": 47136272,
      "score": 13,
      "time": 1771936064,
      "title": "Package Managers à la Carte: a formal model of dependency resolution",
      "type": "story",
      "url": "https://arxiv.org/abs/2602.18602"
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
      "title": "Mothlamp Problems",
      "url": "https://unfoldingdiagrams.leaflet.pub/3mft6olldos26",
      "score": 82,
      "comments": 31,
      "tags": [
        "philosophy"
      ],
      "id": "4pqmdx"
    },
    {
      "title": "Please stop using passkeys for encrypting user data",
      "url": "https://blog.timcappalli.me/p/passkeys-prf-warning/",
      "score": 25,
      "comments": 28,
      "tags": [
        "cryptography"
      ],
      "id": "tf8j5h"
    },
    {
      "title": "Accidentally disabling SSH access via scp",
      "url": "https://sny.sh/hypha/blog/scp",
      "score": 56,
      "comments": 6,
      "tags": [
        "linux"
      ],
      "id": "aifnbl"
    },
    {
      "title": "Allocating on the Stack",
      "url": "https://go.dev/blog/allocation-optimizations",
      "score": 39,
      "comments": 0,
      "tags": [
        "go"
      ],
      "id": "ulxeaa"
    },
    {
      "title": "Stop Putting Secrets in .env Files",
      "url": "https://jonmagic.com/posts/stop-putting-secrets-in-dotenv-files/",
      "score": 5,
      "comments": 6,
      "tags": [
        "security"
      ],
      "id": "eai9st"
    },
    {
      "title": "Jails for NetBSD",
      "url": "https://netbsd-jails.petermann-digital.de/",
      "score": 33,
      "comments": 3,
      "tags": [
        "netbsd"
      ],
      "id": "wrfca5"
    },
    {
      "title": "How my side project got banned from the internet",
      "url": "https://trysound.io/how-my-side-project-got-banned-from-the-internet/",
      "score": 102,
      "comments": 22,
      "tags": [
        "security"
      ],
      "id": "wbpjmd"
    },
    {
      "title": "An update on SVG in GTK",
      "url": "https://blogs.gnome.org/gtk/2026/02/25/an-update-on-svg-in-gtk/",
      "score": 17,
      "comments": 4,
      "tags": [
        "graphics"
      ],
      "id": "d1j6ye"
    },
    {
      "title": "We deserve a better streams API for JavaScript",
      "url": "https://blog.cloudflare.com/a-better-web-streams-api/",
      "score": 16,
      "comments": 6,
      "tags": [
        "javascript",
        "web"
      ],
      "id": "vlpddk"
    },
    {
      "title": "FIPS: Free Internetworking Peering System",
      "url": "https://github.com/jmcorgan/fips/blob/master/docs/design/fips-intro.md",
      "score": 13,
      "comments": 26,
      "tags": [
        "distributed",
        "rust",
        "vibecoding"
      ],
      "id": "fxljxx"
    }
  ]
}
```

