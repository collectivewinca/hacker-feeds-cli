# Hacker Feeds Outcomes - Creators

Generated on: 2026-02-19 02:34:25 UTC

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
      "title": "A New Chapter: DEV is Joining Forces with Major League Hacking (MLH)",
      "description": "Hey everyone,  I have some massive news to share today, and I couldn't be more excited to finally...",
      "url": "https://dev.to/devteam/a-new-chapter-dev-is-joining-forces-with-major-league-hacking-mlh-3kfd",
      "tags": "news, devto, hackathon, discuss",
      "reactions": 243,
      "comments": 50,
      "reading_time": 6,
      "author": "ben"
    },
    {
      "title": "The Future of Software Has a Lot More Builders. They’re Going to Need a Home.",
      "description": "I have some big news to share today: Major League Hacking has acquired DEV (dev.to), the developer...",
      "url": "https://dev.to/mlh/the-future-of-software-has-a-lot-more-builders-theyre-going-to-need-a-home-1k65",
      "tags": "discuss, news, ai, programming",
      "reactions": 63,
      "comments": 14,
      "reading_time": 4,
      "author": "jonmarkgo"
    },
    {
      "title": "The most valuable skill in 2026 isn't writing code. It is deleting it.",
      "description": "We are currently living through the greatest inflation of software in history.  With the AI tools we...",
      "url": "https://dev.to/the_nortern_dev/the-most-valuable-skill-in-2026-isnt-writing-code-it-is-deleting-it-53j1",
      "tags": "softwareengineering, career, productivity, discuss",
      "reactions": 49,
      "comments": 37,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "Ran out of Cursor tokens and switched to GitHub Copilot: Side-by-Side",
      "description": "DISCLAIMER! The best AI coding tool is the one available to you, that gives you the best model and...",
      "url": "https://dev.to/maximsaplin/ran-out-of-cursor-tokens-and-switched-to-github-copilot-side-by-side-2n5p",
      "tags": "ai, githubcopilot, programming, productivity",
      "reactions": 20,
      "comments": 5,
      "reading_time": 9,
      "author": "maximsaplin"
    },
    {
      "title": "How I Turned an Ugly Spreadsheet into an AI Assisted App with Antigravity",
      "description": "I have a confession to make.  Up until now, I wasn’t that much into “vibe coding.” I used AI all the...",
      "url": "https://dev.to/googleai/how-i-turned-an-ugly-spreadsheet-into-an-ai-assisted-app-with-antigravity-3j52",
      "tags": "antigravity, ai, gemini, googlecloud",
      "reactions": 14,
      "comments": 0,
      "reading_time": 4,
      "author": "shirmeirlador"
    },
    {
      "title": "If Writing still Matters, How to Do it Right and Avoid AI Suspicion?",
      "description": "Does writing still matter? Does anyone still care? I care. I write. Because it matters.  \"Still\"...",
      "url": "https://dev.to/ingosteinke/if-writing-still-matters-how-to-do-it-right-and-avoid-ai-suspicion-2nac",
      "tags": "writing, ai, watercooler, nanobanana",
      "reactions": 18,
      "comments": 0,
      "reading_time": 9,
      "author": "ingosteinke"
    },
    {
      "title": "Introducing Our Next DEV Education Track: \"Build Multi-Agent Systems with ADK\"",
      "description": "Hundreds of developers have already completed our first DEV Education Track, and today we're excited...",
      "url": "https://dev.to/devteam/introducing-our-next-dev-education-track-build-multi-agent-systems-with-adk-4bg8",
      "tags": "agents, gemini, ai, buildmultiagents",
      "reactions": 89,
      "comments": 9,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Can you order a pizza on my site? ❌ 99% Can't 😤",
      "description": "99% of you will rage quit before checkout. Order a pizza if you think you have patience. 🧘‍♂️     I...",
      "url": "https://dev.to/jacksonkasi/can-you-order-a-pizza-on-this-site-99-cant-30pd",
      "tags": "webdev, programming, discuss, showdev",
      "reactions": 16,
      "comments": 10,
      "reading_time": 1,
      "author": "jacksonkasi"
    },
    {
      "title": "I'm Done With Magic. Here's What I Built Instead.",
      "description": "The JavaScript ecosystem has a magic problem.  Not the fun kind. The kind where you stare at your...",
      "url": "https://dev.to/iceonfire/im-done-with-magic-heres-what-i-built-instead-988",
      "tags": "javascript, webdev, architecture, redux",
      "reactions": 1,
      "comments": 2,
      "reading_time": 6,
      "author": "iceonfire"
    },
    {
      "title": "Stacking Multiple Dialogs in React Without Hooks or Effects",
      "description": "Managing z-index across multiple stacked dialogs in React gets messy fast. I ran this problem through...",
      "url": "https://dev.to/9thquadrant/stacking-multiple-dialogs-in-react-without-hooks-or-effects-4enj",
      "tags": "javascript, react, ui, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "9thquadrant"
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
      "author": "yctimlin",
      "repo": "mcp_excalidraw",
      "avatar": "https://github.com/yctimlin.png",
      "repo_link": "https://github.com/yctimlin/mcp_excalidraw",
      "desc": "",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 997,
      "forks": 94,
      "added_stars": 203,
      "builtBy": [
        {
          "username": "yctimlin",
          "href": "https://github.com/yctimlin",
          "avatar": "https://avatars.githubusercontent.com/u/37396655"
        },
        {
          "username": "frNNcs",
          "href": "https://github.com/frNNcs",
          "avatar": "https://avatars.githubusercontent.com/u/34633159"
        },
        {
          "username": "ycsahara",
          "href": "https://github.com/ycsahara",
          "avatar": "https://avatars.githubusercontent.com/u/171326707"
        },
        {
          "username": "gianluca-venturini",
          "href": "https://github.com/gianluca-venturini",
          "avatar": "https://avatars.githubusercontent.com/u/6535621"
        },
        {
          "username": "Songmengdi",
          "href": "https://github.com/Songmengdi",
          "avatar": "https://avatars.githubusercontent.com/u/40119877"
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
      "stars": 19716,
      "forks": 2300,
      "added_stars": 1547,
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
      "author": "pshenok",
      "repo": "server-survival",
      "avatar": "https://github.com/pshenok.png",
      "repo_link": "https://github.com/pshenok/server-survival",
      "desc": "Tower defense game that teaches cloud architecture. Build infrastructure, survive traffic, learn scaling.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 5249,
      "forks": 608,
      "added_stars": 582,
      "builtBy": [
        {
          "username": "pshenok",
          "href": "https://github.com/pshenok",
          "avatar": "https://avatars.githubusercontent.com/u/42213409"
        },
        {
          "username": "kant2002",
          "href": "https://github.com/kant2002",
          "avatar": "https://avatars.githubusercontent.com/u/4257079"
        },
        {
          "username": "velosojonathan5",
          "href": "https://github.com/velosojonathan5",
          "avatar": "https://avatars.githubusercontent.com/u/16419310"
        },
        {
          "username": "TraxionRPh",
          "href": "https://github.com/TraxionRPh",
          "avatar": "https://avatars.githubusercontent.com/u/103160824"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "qist",
      "repo": "tvbox",
      "avatar": "https://github.com/qist.png",
      "repo_link": "https://github.com/qist/tvbox",
      "desc": "OK影视、tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 8132,
      "forks": 3020,
      "added_stars": 172,
      "builtBy": [
        {
          "username": "gaotianliuyun",
          "href": "https://github.com/gaotianliuyun",
          "avatar": "https://avatars.githubusercontent.com/u/58679624"
        },
        {
          "username": "qist",
          "href": "https://github.com/qist",
          "avatar": "https://avatars.githubusercontent.com/u/7844620"
        },
        {
          "username": "st7833232",
          "href": "https://github.com/st7833232",
          "avatar": "https://avatars.githubusercontent.com/u/46182664"
        },
        {
          "username": "taomi",
          "href": "https://github.com/taomi",
          "avatar": "https://avatars.githubusercontent.com/u/1817451"
        }
      ]
    },
    {
      "author": "Stremio",
      "repo": "stremio-web",
      "avatar": "https://github.com/Stremio.png",
      "repo_link": "https://github.com/Stremio/stremio-web",
      "desc": "Stremio - Freedom to Stream",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 8997,
      "forks": 1002,
      "added_stars": 38,
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
      "author": "SynkraAI",
      "repo": "aios-core",
      "avatar": "https://github.com/SynkraAI.png",
      "repo_link": "https://github.com/SynkraAI/aios-core",
      "desc": "Synkra AIOS: AI-Orchestrated System for Full Stack Development - Core Framework v4.0",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 1337,
      "forks": 454,
      "added_stars": 1163,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Pedrovaleriolopez",
          "href": "https://github.com/Pedrovaleriolopez",
          "avatar": "https://avatars.githubusercontent.com/u/124090200"
        },
        {
          "username": "oalanicolas",
          "href": "https://github.com/oalanicolas",
          "avatar": "https://avatars.githubusercontent.com/u/895889"
        },
        {
          "username": "semantic-release-bot",
          "href": "https://github.com/semantic-release-bot",
          "avatar": "https://avatars.githubusercontent.com/u/32174276"
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
      "stars": 516,
      "forks": 48,
      "added_stars": 84,
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
      "author": "plankanban",
      "repo": "planka",
      "avatar": "https://github.com/plankanban.png",
      "repo_link": "https://github.com/plankanban/planka",
      "desc": "PLANKA is the Kanban-style project mastering tool for everyone",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 11556,
      "forks": 1183,
      "added_stars": 66,
      "builtBy": [
        {
          "username": "meltyshev",
          "href": "https://github.com/meltyshev",
          "avatar": "https://avatars.githubusercontent.com/u/5564188"
        },
        {
          "username": "daniel-hiller",
          "href": "https://github.com/daniel-hiller",
          "avatar": "https://avatars.githubusercontent.com/u/46579393"
        },
        {
          "username": "symonbaikov",
          "href": "https://github.com/symonbaikov",
          "avatar": "https://avatars.githubusercontent.com/u/115481136"
        },
        {
          "username": "HannesOberreiter",
          "href": "https://github.com/HannesOberreiter",
          "avatar": "https://avatars.githubusercontent.com/u/16878981"
        }
      ]
    },
    {
      "author": "gnmyt",
      "repo": "Nexterm",
      "avatar": "https://github.com/gnmyt.png",
      "repo_link": "https://github.com/gnmyt/Nexterm",
      "desc": "The open source server management software for SSH, VNC & RDP",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 4009,
      "forks": 211,
      "added_stars": 139,
      "builtBy": [
        {
          "username": "gnmyt",
          "href": "https://github.com/gnmyt",
          "avatar": "https://avatars.githubusercontent.com/u/35641351"
        },
        {
          "username": "tcatlas",
          "href": "https://github.com/tcatlas",
          "avatar": "https://avatars.githubusercontent.com/u/23132187"
        },
        {
          "username": "actions-user",
          "href": "https://github.com/actions-user",
          "avatar": "https://avatars.githubusercontent.com/u/65916846"
        }
      ]
    },
    {
      "author": "louislam",
      "repo": "uptime-kuma",
      "avatar": "https://github.com/louislam.png",
      "repo_link": "https://github.com/louislam/uptime-kuma",
      "desc": "A fancy self-hosted monitoring tool",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 82968,
      "forks": 7414,
      "added_stars": 293,
      "builtBy": [
        {
          "username": "louislam",
          "href": "https://github.com/louislam",
          "avatar": "https://avatars.githubusercontent.com/u/1336778"
        },
        {
          "username": "CommanderStorm",
          "href": "https://github.com/CommanderStorm",
          "avatar": "https://avatars.githubusercontent.com/u/26258709"
        },
        {
          "username": "chakflying",
          "href": "https://github.com/chakflying",
          "avatar": "https://avatars.githubusercontent.com/u/3271800"
        },
        {
          "username": "Saibamen",
          "href": "https://github.com/Saibamen",
          "avatar": "https://avatars.githubusercontent.com/u/905878"
        },
        {
          "username": "Computroniks",
          "href": "https://github.com/Computroniks",
          "avatar": "https://avatars.githubusercontent.com/u/67638596"
        }
      ]
    },
    {
      "author": "processing",
      "repo": "p5.js",
      "avatar": "https://github.com/processing.png",
      "repo_link": "https://github.com/processing/p5.js",
      "desc": "p5.js is a client-side JS platform that empowers artists, designers, students, and anyone to learn to code and express themselves creatively on the web. It is based on the core principles of Processing. Looking for p5.js 2.0? http://beta.p5js.org",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 23453,
      "forks": 3711,
      "added_stars": 36,
      "builtBy": [
        {
          "username": "lmccart",
          "href": "https://github.com/lmccart",
          "avatar": "https://avatars.githubusercontent.com/u/191056"
        },
        {
          "username": "davepagurek",
          "href": "https://github.com/davepagurek",
          "avatar": "https://avatars.githubusercontent.com/u/5315059"
        },
        {
          "username": "Qianqianye",
          "href": "https://github.com/Qianqianye",
          "avatar": "https://avatars.githubusercontent.com/u/18587130"
        },
        {
          "username": "outofambit",
          "href": "https://github.com/outofambit",
          "avatar": "https://avatars.githubusercontent.com/u/964912"
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
      "title": "The Future of Software Has a Lot More Builders. They’re Going to Need a Home.",
      "description": "I have some big news to share today: Major League Hacking has acquired DEV (dev.to), the developer...",
      "url": "https://dev.to/mlh/the-future-of-software-has-a-lot-more-builders-theyre-going-to-need-a-home-1k65",
      "tags": "discuss, news, ai, programming",
      "reactions": 63,
      "comments": 14,
      "reading_time": 4,
      "author": "jonmarkgo"
    },
    {
      "title": "Ran out of Cursor tokens and switched to GitHub Copilot: Side-by-Side",
      "description": "DISCLAIMER! The best AI coding tool is the one available to you, that gives you the best model and...",
      "url": "https://dev.to/maximsaplin/ran-out-of-cursor-tokens-and-switched-to-github-copilot-side-by-side-2n5p",
      "tags": "ai, githubcopilot, programming, productivity",
      "reactions": 20,
      "comments": 5,
      "reading_time": 9,
      "author": "maximsaplin"
    },
    {
      "title": "How I Turned an Ugly Spreadsheet into an AI Assisted App with Antigravity",
      "description": "I have a confession to make.  Up until now, I wasn’t that much into “vibe coding.” I used AI all the...",
      "url": "https://dev.to/googleai/how-i-turned-an-ugly-spreadsheet-into-an-ai-assisted-app-with-antigravity-3j52",
      "tags": "antigravity, ai, gemini, googlecloud",
      "reactions": 14,
      "comments": 0,
      "reading_time": 4,
      "author": "shirmeirlador"
    },
    {
      "title": "If Writing still Matters, How to Do it Right and Avoid AI Suspicion?",
      "description": "Does writing still matter? Does anyone still care? I care. I write. Because it matters.  \"Still\"...",
      "url": "https://dev.to/ingosteinke/if-writing-still-matters-how-to-do-it-right-and-avoid-ai-suspicion-2nac",
      "tags": "writing, ai, watercooler, nanobanana",
      "reactions": 18,
      "comments": 0,
      "reading_time": 9,
      "author": "ingosteinke"
    },
    {
      "title": "Introducing Our Next DEV Education Track: \"Build Multi-Agent Systems with ADK\"",
      "description": "Hundreds of developers have already completed our first DEV Education Track, and today we're excited...",
      "url": "https://dev.to/devteam/introducing-our-next-dev-education-track-build-multi-agent-systems-with-adk-4bg8",
      "tags": "agents, gemini, ai, buildmultiagents",
      "reactions": 89,
      "comments": 9,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "How I Built a Synthetic Goat Scream Pipeline (And the Tools Along the Way)",
      "description": "Goats?   I needed goat screams. Hundreds of them. High quality. Labeled with musical...",
      "url": "https://dev.to/aimatey/how-i-built-a-synthetic-goat-scream-pipeline-and-the-tools-along-the-way-1aln",
      "tags": "funny, api, infrastructure, ai",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "aimatey"
    },
    {
      "title": "Every AI Agent Framework Trusts the Agent. That's the Problem.",
      "description": "Every AI agent framework trusts the agent.  LangChain. AutoGen. CrewAI. Anthropic Tool Use. OpenAI...",
      "url": "https://dev.to/saezbaldo/every-ai-agent-framework-trusts-the-agent-thats-the-problem-5gfa",
      "tags": "ai, security, distributedsystems, opensource",
      "reactions": 1,
      "comments": 3,
      "reading_time": 5,
      "author": "saezbaldo"
    },
    {
      "title": "Built runtime security for AI agents",
      "description": "Noticed that a big gap is that there's no standard way to control what agents are allowed to do at...",
      "url": "https://dev.to/mlnas/built-runtime-security-for-ai-agents-576h",
      "tags": "ai, opensource, security, architecture",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "mlnas"
    },
    {
      "title": "Generative UI: Building a Real-Time Weather & Stock Assistant with Streaming RSCs",
      "description": "The traditional web request-response cycle is dead. At least, it’s dying for the next generation of...",
      "url": "https://dev.to/programmingcentral/generative-ui-building-a-real-time-weather-stock-assistant-with-streaming-rscs-2m5g",
      "tags": "javascript, typescript, ai, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "programmingcentral"
    },
    {
      "title": "Navigating the AI Frontier: A Framework for Product Leadership",
      "description": "The AI era isn't just a technological shift; it's a paradigm shift in how we build, scale, and...",
      "url": "https://dev.to/angelica_dacillo_31b1d789/navigating-the-ai-frontier-a-framework-for-product-leadership-46h8",
      "tags": "ai, leadership, management, productmanegement",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "angelica_dacillo_31b1d789"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "zdw",
      "descendants": 172,
      "id": 47066552,
      "kids": [
        47067871,
        47067188,
        47067519,
        47067464,
        47068994,
        47067287,
        47067247,
        47067413,
        47068339,
        47068071,
        47067568,
        47067660,
        47067424,
        47068121,
        47067044,
        47067367,
        47067104,
        47069016,
        47067437,
        47067366,
        47068153,
        47067158,
        47067124,
        47067205,
        47067167,
        47067281,
        47067134,
        47067150,
        47068022,
        47067382,
        47067163,
        47068072,
        47067401,
        47067283,
        47067170,
        47067126,
        47067786,
        47068986
      ],
      "score": 294,
      "time": 1771449500,
      "title": "Sizing chaos",
      "type": "story",
      "url": "https://pudding.cool/2026/02/womens-sizing/"
    },
    {
      "by": "thewavelength",
      "descendants": 149,
      "id": 47067678,
      "kids": [
        47068856,
        47067890,
        47068035,
        47069150,
        47068488,
        47067830,
        47067885,
        47068002,
        47069073,
        47068031,
        47068967,
        47067758,
        47068657,
        47068256,
        47068814,
        47068456
      ],
      "score": 196,
      "time": 1771456118,
      "title": "Ladybird: Closing this as we are no longer pursuing Swift adoption",
      "type": "story",
      "url": "https://github.com/LadybirdBrowser/ladybird/issues/933"
    },
    {
      "by": "surprisetalk",
      "descendants": 78,
      "id": 47066241,
      "kids": [
        47067816,
        47067622,
        47069104,
        47067483,
        47069108,
        47067501,
        47067239,
        47067442,
        47067295,
        47068100,
        47067173,
        47067809,
        47067742,
        47067383,
        47067515,
        47067763,
        47067637,
        47067264,
        47067676,
        47067362,
        47067899,
        47067438
      ],
      "score": 154,
      "time": 1771448071,
      "title": "27-year-old Apple iBooks can connect to Wi-Fi and download official updates",
      "type": "story",
      "url": "https://old.reddit.com/r/MacOS/comments/1r8900z/macos_which_officially_supports_27_year_old/"
    },
    {
      "by": "jfantl",
      "descendants": 83,
      "id": 47064490,
      "kids": [
        47065241,
        47066342,
        47065053,
        47065023,
        47068424,
        47067829,
        47068399,
        47065778,
        47065865,
        47068901,
        47065187,
        47068186,
        47067734,
        47065571,
        47065159,
        47065526,
        47065547,
        47066107,
        47066991,
        47068987,
        47068369,
        47066698,
        47065494,
        47067620,
        47069109,
        47066930,
        47066153
      ],
      "score": 283,
      "time": 1771439842,
      "title": "Cosmologically Unique IDs",
      "type": "story",
      "url": "https://jasonfantl.com/posts/Universal-Unique-IDs/"
    },
    {
      "by": "sz4kerto",
      "descendants": 172,
      "id": 47063005,
      "kids": [
        47065206,
        47063590,
        47063593,
        47066760,
        47067781,
        47066294,
        47066809,
        47067447,
        47067144,
        47064620,
        47067628,
        47066205,
        47066755,
        47064866,
        47063713,
        47063775,
        47064003,
        47065114,
        47063781,
        47064605,
        47064181,
        47063757
      ],
      "score": 328,
      "time": 1771433172,
      "title": "Tailscale Peer Relays is now generally available",
      "type": "story",
      "url": "https://tailscale.com/blog/peer-relays-ga"
    },
    {
      "by": "idoxer",
      "descendants": 137,
      "id": 47062748,
      "kids": [
        47063074,
        47066807,
        47069048,
        47063053,
        47069093,
        47065270,
        47063206,
        47068302,
        47063859,
        47063587,
        47065102,
        47062749,
        47063165,
        47063766,
        47065032,
        47064265,
        47062786,
        47063290,
        47063106
      ],
      "score": 258,
      "time": 1771432099,
      "title": "Zero-day CSS: CVE-2026-2441 exists in the wild",
      "type": "story",
      "url": "https://chromereleases.googleblog.com/2026/02/stable-channel-update-for-desktop_13.html"
    },
    {
      "by": "todsacerdoti",
      "descendants": 97,
      "id": 47064047,
      "kids": [
        47069134,
        47066072,
        47064841,
        47067142,
        47066215,
        47066365,
        47068372,
        47068995,
        47066673,
        47069002,
        47067983,
        47066751,
        47066723,
        47065717,
        47066157,
        47066163,
        47065345,
        47065810,
        47065105,
        47068701,
        47066303,
        47065851,
        47067472,
        47066106,
        47065749,
        47066313,
        47065308,
        47067225,
        47065746
      ],
      "score": 202,
      "time": 1771437853,
      "title": "DNS-Persist-01: A New Model for DNS-Based Challenge Validation",
      "type": "story",
      "url": "https://letsencrypt.org/2026/02/18/dns-persist-01.html"
    },
    {
      "by": "tuananh",
      "descendants": 7,
      "id": 47068948,
      "kids": [
        47069168,
        47069122,
        47069107,
        47069173
      ],
      "score": 33,
      "time": 1771466133,
      "title": "Minecraft Java is switching from OpenGL to Vulkan",
      "type": "story",
      "url": "https://www.gamingonlinux.com/2026/02/minecraft-java-is-switching-from-opengl-to-vulkan-for-the-vibrant-visuals-update/"
    },
    {
      "by": "thunderseethe",
      "descendants": 0,
      "id": 47025885,
      "score": 20,
      "time": 1771178864,
      "title": "How to Choose Between Hindley-Milner and Bidirectional Typing",
      "type": "story",
      "url": "https://thunderseethe.dev/posts/how-to-choose-between-hm-and-bidir/"
    },
    {
      "by": "tosh",
      "descendants": 9,
      "id": 47065179,
      "kids": [
        47069018,
        47065658,
        47067015,
        47066063
      ],
      "score": 59,
      "time": 1771442939,
      "title": "R3forth: A concatenative language derived from ColorForth",
      "type": "story",
      "url": "https://github.com/phreda4/r3/blob/main/doc/r3forth_tutorial.md"
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
      "by": "zdw",
      "descendants": 172,
      "id": 47066552,
      "kids": [
        47067871,
        47067188,
        47067519,
        47067464,
        47068994,
        47067287,
        47067247,
        47067413,
        47068339,
        47068071,
        47067568,
        47067660,
        47067424,
        47068121,
        47067044,
        47067367,
        47067104,
        47069016,
        47067437,
        47067366,
        47068153,
        47067158,
        47067124,
        47067205,
        47067167,
        47067281,
        47067134,
        47067150,
        47068022,
        47067382,
        47067163,
        47068072,
        47067401,
        47067283,
        47067170,
        47067126,
        47067786,
        47068986
      ],
      "score": 294,
      "time": 1771449500,
      "title": "Sizing chaos",
      "type": "story",
      "url": "https://pudding.cool/2026/02/womens-sizing/"
    },
    {
      "by": "thewavelength",
      "descendants": 149,
      "id": 47067678,
      "kids": [
        47068856,
        47067890,
        47068035,
        47069150,
        47068488,
        47067830,
        47067885,
        47068002,
        47069073,
        47068031,
        47068967,
        47067758,
        47068657,
        47068256,
        47068814,
        47068456
      ],
      "score": 196,
      "time": 1771456118,
      "title": "Ladybird: Closing this as we are no longer pursuing Swift adoption",
      "type": "story",
      "url": "https://github.com/LadybirdBrowser/ladybird/issues/933"
    },
    {
      "by": "surprisetalk",
      "descendants": 78,
      "id": 47066241,
      "kids": [
        47067816,
        47067622,
        47069104,
        47067483,
        47069108,
        47067501,
        47067239,
        47067442,
        47067295,
        47068100,
        47067173,
        47067809,
        47067742,
        47067383,
        47067515,
        47067763,
        47067637,
        47067264,
        47067676,
        47067362,
        47067899,
        47067438
      ],
      "score": 154,
      "time": 1771448071,
      "title": "27-year-old Apple iBooks can connect to Wi-Fi and download official updates",
      "type": "story",
      "url": "https://old.reddit.com/r/MacOS/comments/1r8900z/macos_which_officially_supports_27_year_old/"
    },
    {
      "by": "jfantl",
      "descendants": 83,
      "id": 47064490,
      "kids": [
        47065241,
        47066342,
        47065053,
        47065023,
        47068424,
        47067829,
        47068399,
        47065778,
        47065865,
        47068901,
        47065187,
        47068186,
        47067734,
        47065571,
        47065159,
        47065526,
        47065547,
        47066107,
        47066991,
        47068987,
        47068369,
        47066698,
        47065494,
        47067620,
        47069109,
        47066930,
        47066153
      ],
      "score": 283,
      "time": 1771439842,
      "title": "Cosmologically Unique IDs",
      "type": "story",
      "url": "https://jasonfantl.com/posts/Universal-Unique-IDs/"
    },
    {
      "by": "sz4kerto",
      "descendants": 172,
      "id": 47063005,
      "kids": [
        47065206,
        47063590,
        47063593,
        47066760,
        47067781,
        47066294,
        47066809,
        47067447,
        47067144,
        47064620,
        47067628,
        47066205,
        47066755,
        47064866,
        47063713,
        47063775,
        47064003,
        47065114,
        47063781,
        47064605,
        47064181,
        47063757
      ],
      "score": 328,
      "time": 1771433172,
      "title": "Tailscale Peer Relays is now generally available",
      "type": "story",
      "url": "https://tailscale.com/blog/peer-relays-ga"
    },
    {
      "by": "idoxer",
      "descendants": 137,
      "id": 47062748,
      "kids": [
        47063074,
        47066807,
        47069048,
        47063053,
        47069093,
        47065270,
        47063206,
        47068302,
        47063859,
        47063587,
        47065102,
        47062749,
        47063165,
        47063766,
        47065032,
        47064265,
        47062786,
        47063290,
        47063106
      ],
      "score": 258,
      "time": 1771432099,
      "title": "Zero-day CSS: CVE-2026-2441 exists in the wild",
      "type": "story",
      "url": "https://chromereleases.googleblog.com/2026/02/stable-channel-update-for-desktop_13.html"
    },
    {
      "by": "todsacerdoti",
      "descendants": 97,
      "id": 47064047,
      "kids": [
        47069134,
        47066072,
        47064841,
        47067142,
        47066215,
        47066365,
        47068372,
        47068995,
        47066673,
        47069002,
        47067983,
        47066751,
        47066723,
        47065717,
        47066157,
        47066163,
        47065345,
        47065810,
        47065105,
        47068701,
        47066303,
        47065851,
        47067472,
        47066106,
        47065749,
        47066313,
        47065308,
        47067225,
        47065746
      ],
      "score": 202,
      "time": 1771437853,
      "title": "DNS-Persist-01: A New Model for DNS-Based Challenge Validation",
      "type": "story",
      "url": "https://letsencrypt.org/2026/02/18/dns-persist-01.html"
    },
    {
      "by": "tuananh",
      "descendants": 7,
      "id": 47068948,
      "kids": [
        47069168,
        47069122,
        47069107,
        47069173
      ],
      "score": 33,
      "time": 1771466133,
      "title": "Minecraft Java is switching from OpenGL to Vulkan",
      "type": "story",
      "url": "https://www.gamingonlinux.com/2026/02/minecraft-java-is-switching-from-opengl-to-vulkan-for-the-vibrant-visuals-update/"
    },
    {
      "by": "thunderseethe",
      "descendants": 0,
      "id": 47025885,
      "score": 20,
      "time": 1771178864,
      "title": "How to Choose Between Hindley-Milner and Bidirectional Typing",
      "type": "story",
      "url": "https://thunderseethe.dev/posts/how-to-choose-between-hm-and-bidir/"
    },
    {
      "by": "tosh",
      "descendants": 9,
      "id": 47065179,
      "kids": [
        47069018,
        47065658,
        47067015,
        47066063
      ],
      "score": 59,
      "time": 1771442939,
      "title": "R3forth: A concatenative language derived from ColorForth",
      "type": "story",
      "url": "https://github.com/phreda4/r3/blob/main/doc/r3forth_tutorial.md"
    },
    {
      "by": "evakhoury",
      "descendants": 36,
      "id": 47063663,
      "kids": [
        47067011,
        47068963,
        47068581,
        47067787,
        47066836,
        47066762,
        47067613,
        47066136,
        47067242,
        47067852,
        47066131,
        47066947,
        47066748,
        47068068,
        47068078,
        47066812
      ],
      "score": 76,
      "time": 1771436077,
      "title": "The Perils of ISBN",
      "type": "story",
      "url": "https://rygoldstein.com/posts/perils-of-isbn"
    },
    {
      "by": "a7b3fa",
      "descendants": 7,
      "id": 47024585,
      "kids": [
        47067905,
        47068290,
        47030471,
        47027327
      ],
      "score": 44,
      "time": 1771170251,
      "title": "Making a font with ligatures to display thirteenth-century monk numerals",
      "type": "story",
      "url": "https://digitalseams.com/blog/making-a-font-with-9999-ligatures-to-display-thirteenth-century-monk-numerals"
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
      "title": "Current - An RSS reader",
      "url": "https://www.terrygodier.com/current",
      "score": 27,
      "comments": 18,
      "tags": [
        "design",
        "mobile"
      ],
      "id": "m2ouss"
    },
    {
      "title": "15+ years later, Microsoft morged my diagram",
      "url": "https://nvie.com/posts/15-years-later/",
      "score": 105,
      "comments": 18,
      "tags": [
        "vibecoding"
      ],
      "id": "rfcbij"
    },
    {
      "title": "DNS-PERSIST-01: A New Model for DNS-based Challenge Validation",
      "url": "https://letsencrypt.org/2026/02/18/dns-persist-01.html",
      "score": 45,
      "comments": 7,
      "tags": [
        "networking",
        "security"
      ],
      "id": "zk2u9e"
    },
    {
      "title": "Ditching Discord",
      "url": "https://wiki.alopex.li/DitchingDiscord",
      "score": 12,
      "comments": 2,
      "tags": [
        "networking"
      ],
      "id": "qvjp07"
    },
    {
      "title": "Asahi Linux Progress Report: Linux 6.19",
      "url": "https://asahilinux.org/2026/02/progress-report-6-19/",
      "score": 73,
      "comments": 9,
      "tags": [
        "linux"
      ],
      "id": "idfeqo"
    },
    {
      "title": "Bruteforcing the Bitwarden master password I forgor",
      "url": "https://compilercrim.es/forgor/",
      "score": 20,
      "comments": 5,
      "tags": [
        "cryptography",
        "reversing"
      ],
      "id": "9dgwdo"
    },
    {
      "title": "Why I don't think AGI is imminent",
      "url": "https://dlants.me/agi-not-imminent.html",
      "score": 9,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "rrlcfb"
    },
    {
      "title": "how openai, the US government, and persona built an identity surveillance machine that files reports on you to the feds",
      "url": "https://vmfunc.re/blog/persona/",
      "score": 8,
      "comments": 3,
      "tags": [
        "reversing",
        "security"
      ],
      "id": "yyqxg6"
    },
    {
      "title": "What's cooking on SourceHut? Q1 2026",
      "url": "https://sourcehut.org/blog/2026-02-18-whats-cooking-q1-2026/",
      "score": 44,
      "comments": 2,
      "tags": [
        "devops"
      ],
      "id": "8xnajy"
    },
    {
      "title": "Notes on clarifying man pages",
      "url": "https://jvns.ca/blog/2026/02/18/man-pages/",
      "score": 9,
      "comments": 1,
      "tags": [
        "practices"
      ],
      "id": "zpifkh"
    }
  ]
}
```

