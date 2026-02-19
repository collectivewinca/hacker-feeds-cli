# Hacker Feeds Outcomes - Creators

Generated on: 2026-02-19 07:15:48 UTC

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
      "reactions": 256,
      "comments": 56,
      "reading_time": 6,
      "author": "ben"
    },
    {
      "title": "The Future of Software Has a Lot More Builders. They’re Going to Need a Home.",
      "description": "I have some big news to share today: Major League Hacking has acquired DEV (dev.to), the developer...",
      "url": "https://dev.to/mlh/the-future-of-software-has-a-lot-more-builders-theyre-going-to-need-a-home-1k65",
      "tags": "discuss, news, ai, programming",
      "reactions": 64,
      "comments": 15,
      "reading_time": 4,
      "author": "jonmarkgo"
    },
    {
      "title": "The most valuable skill in 2026 isn't writing code. It is deleting it.",
      "description": "We are currently living through the greatest inflation of software in history.  With the AI tools we...",
      "url": "https://dev.to/the_nortern_dev/the-most-valuable-skill-in-2026-isnt-writing-code-it-is-deleting-it-53j1",
      "tags": "softwareengineering, career, productivity, discuss",
      "reactions": 50,
      "comments": 42,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "Introducing Our Next DEV Education Track: \"Build Multi-Agent Systems with ADK\"",
      "description": "Hundreds of developers have already completed our first DEV Education Track, and today we're excited...",
      "url": "https://dev.to/devteam/introducing-our-next-dev-education-track-build-multi-agent-systems-with-adk-4bg8",
      "tags": "agents, gemini, ai, buildmultiagents",
      "reactions": 90,
      "comments": 9,
      "reading_time": 3,
      "author": "jess"
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
      "reactions": 15,
      "comments": 0,
      "reading_time": 4,
      "author": "shirmeirlador"
    },
    {
      "title": "If Writing still Matters, How to Do it Right and Avoid AI Suspicion?",
      "description": "Does writing still matter? Does anyone still care? I care. I write. Because it matters.  \"Still\"...",
      "url": "https://dev.to/ingosteinke/if-writing-still-matters-how-to-do-it-right-and-avoid-ai-suspicion-2nac",
      "tags": "writing, ai, watercooler, nanobanana",
      "reactions": 19,
      "comments": 0,
      "reading_time": 9,
      "author": "ingosteinke"
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
      "stars": 1001,
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
      "stars": 19828,
      "forks": 2308,
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
      "stars": 5256,
      "forks": 609,
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
      "stars": 8137,
      "forks": 3022,
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
      "stars": 8998,
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
      "stars": 1346,
      "forks": 459,
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
      "stars": 519,
      "forks": 49,
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
      "stars": 11557,
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
      "stars": 4011,
      "forks": 212,
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
      "stars": 82971,
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
      "reactions": 65,
      "comments": 15,
      "reading_time": 4,
      "author": "jonmarkgo"
    },
    {
      "title": "Introducing Our Next DEV Education Track: \"Build Multi-Agent Systems with ADK\"",
      "description": "Hundreds of developers have already completed our first DEV Education Track, and today we're excited...",
      "url": "https://dev.to/devteam/introducing-our-next-dev-education-track-build-multi-agent-systems-with-adk-4bg8",
      "tags": "agents, gemini, ai, buildmultiagents",
      "reactions": 90,
      "comments": 9,
      "reading_time": 3,
      "author": "jess"
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
      "reactions": 15,
      "comments": 0,
      "reading_time": 4,
      "author": "shirmeirlador"
    },
    {
      "title": "If Writing still Matters, How to Do it Right and Avoid AI Suspicion?",
      "description": "Does writing still matter? Does anyone still care? I care. I write. Because it matters.  \"Still\"...",
      "url": "https://dev.to/ingosteinke/if-writing-still-matters-how-to-do-it-right-and-avoid-ai-suspicion-2nac",
      "tags": "writing, ai, watercooler, nanobanana",
      "reactions": 19,
      "comments": 0,
      "reading_time": 9,
      "author": "ingosteinke"
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
      "title": "Positioning yourself as an AI expert is not just about branding; it's more than the branding. In the AI era, expertise is not about doing more implementation. It’s about owning better outcomes.",
      "description": "How to Position Yourself as an AI Expert Without Coding...",
      "url": "https://dev.to/jaideepparashar/positioning-yourself-as-an-ai-expert-is-not-just-about-branding-its-more-than-the-branding-in-2hf0",
      "tags": "webdev, ai, programming, beginners",
      "reactions": 15,
      "comments": 0,
      "reading_time": 1,
      "author": "jaideepparashar"
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
      "title": "8 Things You Didn't Know About Code Mode",
      "description": "Agents fundamentally changed how we program. They enable developers to move faster by...",
      "url": "https://dev.to/goose_oss/8-things-you-didnt-know-about-code-mode-4h71",
      "tags": "ai, mcp, agents, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "blackgirlbytes"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "puppion",
      "descendants": 89,
      "id": 47070142,
      "kids": [
        47070465,
        47070715,
        47070388,
        47070421,
        47070782,
        47070405,
        47070443,
        47070467,
        47070544,
        47070383,
        47070572,
        47070394,
        47070582,
        47070617,
        47070542,
        47070419
      ],
      "score": 147,
      "time": 1771477657,
      "title": "European Tech Alternatives",
      "type": "story",
      "url": "https://eutechmap.com/map"
    },
    {
      "by": "zdw",
      "descendants": 232,
      "id": 47066552,
      "kids": [
        47067188,
        47070303,
        47067519,
        47067205,
        47067287,
        47070315,
        47069511,
        47067464,
        47070352,
        47067568,
        47067247,
        47067413,
        47067044,
        47070611,
        47067104,
        47068339,
        47068071,
        47067424,
        47069308,
        47067367,
        47068121,
        47067158,
        47067437,
        47069334,
        47070490,
        47067660,
        47068994,
        47067366,
        47069328,
        47067871,
        47067124,
        47067134,
        47067786,
        47069899,
        47067167,
        47067281,
        47067150,
        47069016,
        47068022,
        47067382,
        47067163,
        47068153,
        47067401,
        47067283,
        47067170,
        47068072,
        47067126,
        47068986
      ],
      "score": 452,
      "time": 1771449500,
      "title": "Sizing chaos",
      "type": "story",
      "url": "https://pudding.cool/2026/02/womens-sizing/"
    },
    {
      "by": "surprisetalk",
      "descendants": 143,
      "id": 47066241,
      "kids": [
        47067816,
        47067622,
        47067483,
        47067501,
        47069108,
        47069518,
        47070614,
        47067442,
        47067239,
        47067295,
        47070463,
        47070667,
        47069670,
        47067173,
        47067809,
        47068100,
        47069231,
        47069104,
        47070578,
        47067637,
        47069349,
        47067383,
        47067515,
        47069620,
        47067362,
        47069310,
        47067763,
        47067264,
        47067742,
        47067676,
        47067899,
        47070506,
        47067438
      ],
      "score": 280,
      "time": 1771448071,
      "title": "27-year-old Apple iBooks can connect to Wi-Fi and download official updates",
      "type": "story",
      "url": "https://old.reddit.com/r/MacOS/comments/1r8900z/macos_which_officially_supports_27_year_old/"
    },
    {
      "by": "fp64enjoyer",
      "descendants": 26,
      "id": 47068890,
      "kids": [
        47069424,
        47069822,
        47070839,
        47069802,
        47069479,
        47070554,
        47070612,
        47070015,
        47070025
      ],
      "score": 82,
      "time": 1771465567,
      "title": "15 years of FP64 segmentation, and why the Blackwell Ultra breaks the pattern",
      "type": "story",
      "url": "https://nicolasdickenmann.com/blog/the-great-fp64-divide.html"
    },
    {
      "by": "theahura",
      "descendants": 261,
      "id": 47069299,
      "kids": [
        47070852,
        47070518,
        47069629,
        47069488,
        47069775,
        47069726,
        47069903,
        47070164,
        47069643,
        47070825,
        47070764,
        47070531,
        47070613,
        47070448,
        47070449,
        47070229,
        47070089,
        47069719,
        47070696,
        47069494,
        47069667,
        47069300,
        47069561,
        47069483,
        47070211,
        47069677,
        47069649,
        47069883,
        47069759,
        47069916,
        47069606,
        47069539,
        47069720,
        47069740,
        47069808,
        47069570,
        47070276,
        47070481,
        47069697,
        47069772,
        47069713,
        47070400,
        47069960,
        47069565,
        47069766,
        47070049,
        47069756,
        47069495
      ],
      "score": 250,
      "time": 1771469546,
      "title": "Anthropic officially bans using subscription auth for third party use",
      "type": "story",
      "url": "https://code.claude.com/docs/en/legal-and-compliance"
    },
    {
      "by": "jfantl",
      "descendants": 108,
      "id": 47064490,
      "kids": [
        47065241,
        47070040,
        47066342,
        47069590,
        47070523,
        47065053,
        47065023,
        47069971,
        47065778,
        47065865,
        47065187,
        47067829,
        47068399,
        47069398,
        47067734,
        47068186,
        47065571,
        47065159,
        47068901,
        47065526,
        47065547,
        47066107,
        47066991,
        47068369,
        47066698,
        47065494,
        47068987,
        47067620,
        47069109,
        47068424,
        47066930,
        47066153
      ],
      "score": 345,
      "time": 1771439842,
      "title": "Cosmologically Unique IDs",
      "type": "story",
      "url": "https://jasonfantl.com/posts/Universal-Unique-IDs/"
    },
    {
      "by": "kristianp",
      "descendants": 11,
      "id": 47069179,
      "kids": [
        47069184,
        47069582,
        47070128,
        47070629,
        47070073
      ],
      "score": 40,
      "time": 1771468320,
      "title": "Step 3.5 Flash: Fast Enough to Think. Reliable Enough to Act",
      "type": "story",
      "url": "https://static.stepfun.com/blog/step-3.5-flash/"
    },
    {
      "by": "thunderseethe",
      "descendants": 10,
      "id": 47025885,
      "kids": [
        47069526,
        47069377,
        47070366,
        47069595
      ],
      "score": 82,
      "time": 1771178864,
      "title": "How to Choose Between Hindley-Milner and Bidirectional Typing",
      "type": "story",
      "url": "https://thunderseethe.dev/posts/how-to-choose-between-hm-and-bidir/"
    },
    {
      "by": "murat3ok",
      "descendants": 0,
      "id": 47070446,
      "score": 6,
      "time": 1771481398,
      "title": "Stoolap/Node: A Native Node.js Driver That's Surprisingly Fast",
      "type": "story",
      "url": "https://stoolap.io/blog/2026/02/19/introducing-stoolap-node/"
    },
    {
      "by": "sz4kerto",
      "descendants": 190,
      "id": 47063005,
      "kids": [
        47065206,
        47063590,
        47063593,
        47070292,
        47066760,
        47067447,
        47066809,
        47070256,
        47066294,
        47067781,
        47064620,
        47064866,
        47067144,
        47066205,
        47067628,
        47066755,
        47063713,
        47069237,
        47063775,
        47064003,
        47065114,
        47063781,
        47064605,
        47064181,
        47070052,
        47063757
      ],
      "score": 381,
      "time": 1771433172,
      "title": "Tailscale Peer Relays is now generally available",
      "type": "story",
      "url": "https://tailscale.com/blog/peer-relays-ga"
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
      "by": "puppion",
      "descendants": 89,
      "id": 47070142,
      "kids": [
        47070465,
        47070715,
        47070388,
        47070421,
        47070782,
        47070405,
        47070443,
        47070467,
        47070544,
        47070383,
        47070572,
        47070394,
        47070582,
        47070617,
        47070542,
        47070419
      ],
      "score": 147,
      "time": 1771477657,
      "title": "European Tech Alternatives",
      "type": "story",
      "url": "https://eutechmap.com/map"
    },
    {
      "by": "zdw",
      "descendants": 232,
      "id": 47066552,
      "kids": [
        47067188,
        47070303,
        47067519,
        47067205,
        47067287,
        47070315,
        47069511,
        47067464,
        47070352,
        47067568,
        47067247,
        47067413,
        47067044,
        47070611,
        47067104,
        47068339,
        47068071,
        47067424,
        47069308,
        47067367,
        47068121,
        47067158,
        47067437,
        47069334,
        47070490,
        47067660,
        47068994,
        47067366,
        47069328,
        47067871,
        47067124,
        47067134,
        47067786,
        47069899,
        47067167,
        47067281,
        47067150,
        47069016,
        47068022,
        47067382,
        47067163,
        47068153,
        47067401,
        47067283,
        47067170,
        47068072,
        47067126,
        47068986
      ],
      "score": 452,
      "time": 1771449500,
      "title": "Sizing chaos",
      "type": "story",
      "url": "https://pudding.cool/2026/02/womens-sizing/"
    },
    {
      "by": "surprisetalk",
      "descendants": 143,
      "id": 47066241,
      "kids": [
        47067816,
        47067622,
        47067483,
        47067501,
        47069108,
        47069518,
        47070614,
        47067442,
        47067239,
        47067295,
        47070463,
        47070667,
        47069670,
        47067173,
        47067809,
        47068100,
        47069231,
        47069104,
        47070578,
        47067637,
        47069349,
        47067383,
        47067515,
        47069620,
        47067362,
        47069310,
        47067763,
        47067264,
        47067742,
        47067676,
        47067899,
        47070506,
        47067438
      ],
      "score": 280,
      "time": 1771448071,
      "title": "27-year-old Apple iBooks can connect to Wi-Fi and download official updates",
      "type": "story",
      "url": "https://old.reddit.com/r/MacOS/comments/1r8900z/macos_which_officially_supports_27_year_old/"
    },
    {
      "by": "fp64enjoyer",
      "descendants": 26,
      "id": 47068890,
      "kids": [
        47069424,
        47069822,
        47070839,
        47069802,
        47069479,
        47070554,
        47070612,
        47070015,
        47070025
      ],
      "score": 82,
      "time": 1771465567,
      "title": "15 years of FP64 segmentation, and why the Blackwell Ultra breaks the pattern",
      "type": "story",
      "url": "https://nicolasdickenmann.com/blog/the-great-fp64-divide.html"
    },
    {
      "by": "theahura",
      "descendants": 261,
      "id": 47069299,
      "kids": [
        47070852,
        47070518,
        47069629,
        47069488,
        47069775,
        47069726,
        47069903,
        47070164,
        47069643,
        47070825,
        47070764,
        47070531,
        47070613,
        47070448,
        47070449,
        47070229,
        47070089,
        47069719,
        47070696,
        47069494,
        47069667,
        47069300,
        47069561,
        47069483,
        47070211,
        47069677,
        47069649,
        47069883,
        47069759,
        47069916,
        47069606,
        47069539,
        47069720,
        47069740,
        47069808,
        47069570,
        47070276,
        47070481,
        47069697,
        47069772,
        47069713,
        47070400,
        47069960,
        47069565,
        47069766,
        47070049,
        47069756,
        47069495
      ],
      "score": 250,
      "time": 1771469546,
      "title": "Anthropic officially bans using subscription auth for third party use",
      "type": "story",
      "url": "https://code.claude.com/docs/en/legal-and-compliance"
    },
    {
      "by": "jfantl",
      "descendants": 108,
      "id": 47064490,
      "kids": [
        47065241,
        47070040,
        47066342,
        47069590,
        47070523,
        47065053,
        47065023,
        47069971,
        47065778,
        47065865,
        47065187,
        47067829,
        47068399,
        47069398,
        47067734,
        47068186,
        47065571,
        47065159,
        47068901,
        47065526,
        47065547,
        47066107,
        47066991,
        47068369,
        47066698,
        47065494,
        47068987,
        47067620,
        47069109,
        47068424,
        47066930,
        47066153
      ],
      "score": 345,
      "time": 1771439842,
      "title": "Cosmologically Unique IDs",
      "type": "story",
      "url": "https://jasonfantl.com/posts/Universal-Unique-IDs/"
    },
    {
      "by": "kristianp",
      "descendants": 11,
      "id": 47069179,
      "kids": [
        47069184,
        47069582,
        47070128,
        47070629,
        47070073
      ],
      "score": 40,
      "time": 1771468320,
      "title": "Step 3.5 Flash: Fast Enough to Think. Reliable Enough to Act",
      "type": "story",
      "url": "https://static.stepfun.com/blog/step-3.5-flash/"
    },
    {
      "by": "thunderseethe",
      "descendants": 10,
      "id": 47025885,
      "kids": [
        47069526,
        47069377,
        47070366,
        47069595
      ],
      "score": 82,
      "time": 1771178864,
      "title": "How to Choose Between Hindley-Milner and Bidirectional Typing",
      "type": "story",
      "url": "https://thunderseethe.dev/posts/how-to-choose-between-hm-and-bidir/"
    },
    {
      "by": "murat3ok",
      "descendants": 0,
      "id": 47070446,
      "score": 6,
      "time": 1771481398,
      "title": "Stoolap/Node: A Native Node.js Driver That's Surprisingly Fast",
      "type": "story",
      "url": "https://stoolap.io/blog/2026/02/19/introducing-stoolap-node/"
    },
    {
      "by": "sz4kerto",
      "descendants": 190,
      "id": 47063005,
      "kids": [
        47065206,
        47063590,
        47063593,
        47070292,
        47066760,
        47067447,
        47066809,
        47070256,
        47066294,
        47067781,
        47064620,
        47064866,
        47067144,
        47066205,
        47067628,
        47066755,
        47063713,
        47069237,
        47063775,
        47064003,
        47065114,
        47063781,
        47064605,
        47064181,
        47070052,
        47063757
      ],
      "score": 381,
      "time": 1771433172,
      "title": "Tailscale Peer Relays is now generally available",
      "type": "story",
      "url": "https://tailscale.com/blog/peer-relays-ga"
    },
    {
      "by": "idoxer",
      "descendants": 159,
      "id": 47062748,
      "kids": [
        47063074,
        47066807,
        47063053,
        47065270,
        47063206,
        47069048,
        47069093,
        47063859,
        47063587,
        47068302,
        47065102,
        47062749,
        47063165,
        47063766,
        47065032,
        47064265,
        47062786,
        47070032,
        47063290,
        47063106
      ],
      "score": 308,
      "time": 1771432099,
      "title": "Zero-day CSS: CVE-2026-2441 exists in the wild",
      "type": "story",
      "url": "https://chromereleases.googleblog.com/2026/02/stable-channel-update-for-desktop_13.html"
    },
    {
      "by": "pseudolus",
      "descendants": 32,
      "id": 47068320,
      "kids": [
        47069829,
        47069605,
        47070042,
        47070265,
        47070217,
        47070188,
        47069685,
        47070273
      ],
      "score": 72,
      "time": 1771460565,
      "title": "How AI is affecting productivity and jobs in Europe",
      "type": "story",
      "url": "https://cepr.org/voxeu/columns/how-ai-affecting-productivity-and-jobs-europe"
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
      "title": "Ditching Discord",
      "url": "https://wiki.alopex.li/DitchingDiscord",
      "score": 52,
      "comments": 14,
      "tags": [
        "culture",
        "practices",
        "privacy"
      ],
      "id": "qvjp07"
    },
    {
      "title": "Why I don't think AGI is imminent",
      "url": "https://dlants.me/agi-not-imminent.html",
      "score": 17,
      "comments": 11,
      "tags": [
        "ai"
      ],
      "id": "rrlcfb"
    },
    {
      "title": "how openai, the US government, and persona built an identity surveillance machine that files reports on you to the feds",
      "url": "https://vmfunc.re/blog/persona/",
      "score": 35,
      "comments": 4,
      "tags": [
        "reversing",
        "security"
      ],
      "id": "yyqxg6"
    },
    {
      "title": "Current - An RSS reader",
      "url": "https://www.terrygodier.com/current",
      "score": 35,
      "comments": 23,
      "tags": [
        "design",
        "mobile"
      ],
      "id": "m2ouss"
    },
    {
      "title": "15+ years later, Microsoft morged my diagram",
      "url": "https://nvie.com/posts/15-years-later/",
      "score": 113,
      "comments": 21,
      "tags": [
        "vibecoding"
      ],
      "id": "rfcbij"
    },
    {
      "title": "DNS-PERSIST-01: A New Model for DNS-based Challenge Validation",
      "url": "https://letsencrypt.org/2026/02/18/dns-persist-01.html",
      "score": 51,
      "comments": 8,
      "tags": [
        "networking",
        "security"
      ],
      "id": "zk2u9e"
    },
    {
      "title": "Asahi Linux Progress Report: Linux 6.19",
      "url": "https://asahilinux.org/2026/02/progress-report-6-19/",
      "score": 79,
      "comments": 10,
      "tags": [
        "linux"
      ],
      "id": "idfeqo"
    },
    {
      "title": "Notes on clarifying man pages",
      "url": "https://jvns.ca/blog/2026/02/18/man-pages/",
      "score": 18,
      "comments": 4,
      "tags": [
        "practices"
      ],
      "id": "zpifkh"
    },
    {
      "title": "Bruteforcing the Bitwarden master password I forgor",
      "url": "https://compilercrim.es/forgor/",
      "score": 22,
      "comments": 6,
      "tags": [
        "cryptography",
        "reversing"
      ],
      "id": "9dgwdo"
    },
    {
      "title": "Rust on CHERIoT: Status update #0",
      "url": "https://rust.cheriot.org/2026/02/15/status-update.html",
      "score": 7,
      "comments": 0,
      "tags": [
        "compilers",
        "rust"
      ],
      "id": "es58bi"
    }
  ]
}
```

