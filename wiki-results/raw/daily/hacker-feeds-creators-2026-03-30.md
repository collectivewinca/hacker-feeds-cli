# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-30 06:53:46 UTC

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
      "title": "How to use Timberborn 🦫 (yes, the beaver city-building game) as a database 💾",
      "description": "So, one of my favourite games lately, Timberborn, has released its 1.0 version and finally left early...",
      "url": "https://dev.to/thormeier/how-to-use-timberborn-yes-the-beaver-city-building-game-as-a-database-489c",
      "tags": "webdev, programming, javascript, donttrythisathome",
      "reactions": 29,
      "comments": 3,
      "reading_time": 5,
      "author": "thormeier"
    },
    {
      "title": "Gemini Tool Combo: Building a LINE Meetup Helper with Maps Grounding and Places API in a Single API Call",
      "description": "Reference articles:     Gemini API tooling updates: context circulation, tool combos and Maps...",
      "url": "https://dev.to/gde/gemini-tool-combo-building-a-line-meetup-helper-with-maps-grounding-and-places-api-in-a-single-api-3ppd",
      "tags": "",
      "reactions": 8,
      "comments": 0,
      "reading_time": 10,
      "author": "evanlin"
    },
    {
      "title": "Gemini 3.1: Real-World Voice Recognition with Flash Live: Making Your LINE Bot Understand You",
      "description": "Background   Google released Gemini 3.1 Flash Live at the end of March 2026 March,...",
      "url": "https://dev.to/gde/gemini-31-real-world-voice-recognition-with-flash-live-making-your-line-bot-understand-you-560o",
      "tags": "ai, gemini, python, tutorial",
      "reactions": 9,
      "comments": 0,
      "reading_time": 10,
      "author": "evanlin"
    },
    {
      "title": "Why Rails Still Feels Like a Startup’s Best Friend in the AI Era",
      "description": "Why Rails still matters for startups and AI-assisted coding: less chaos, more momentum.",
      "url": "https://dev.to/mezbahalam/why-rails-still-feels-like-a-startups-best-friend-in-the-ai-era-45hn",
      "tags": "rails, startup, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "mezbahalam"
    },
    {
      "title": "Async without async",
      "description": "To start with a short TLDR: this article is my exploration of implementing an asynchronous networking...",
      "url": "https://dev.to/szymongib/async-without-async-eik",
      "tags": "rust, linux, c",
      "reactions": 0,
      "comments": 0,
      "reading_time": 23,
      "author": "szymongib"
    },
    {
      "title": "Building for Production: A Guide to Deploying a 3-Tier App on Azure",
      "description": "Introduction  In the early stages of learning cloud development, it’s tempting to just \"make it work\"...",
      "url": "https://dev.to/cafedeluv/building-for-production-a-guide-to-deploying-a-3-tier-app-on-azure-chb",
      "tags": "devops, cloud, azure",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "cafedeluv"
    },
    {
      "title": "Vibe with Code: Plan First, Build Second",
      "description": "The most expensive mistake engineers make with AI isn't the code. It's skipping the plan.  Software...",
      "url": "https://dev.to/abarron/vibe-with-code-plan-first-build-second-3n8o",
      "tags": "ai, software",
      "reactions": 4,
      "comments": 2,
      "reading_time": 9,
      "author": "abarron"
    },
    {
      "title": "Understanding Object-Oriented Programming in JavaScript",
      "description": "Introduction   Hey there, fellow developer!   Imagine building a massive web app where your...",
      "url": "https://dev.to/ritam369/understanding-object-oriented-programming-in-javascript-570e",
      "tags": "javascript, programming, backend, webdev",
      "reactions": 2,
      "comments": 0,
      "reading_time": 4,
      "author": "ritam369"
    },
    {
      "title": "I'm so sick of my editor telling me how great I am. Not that I'm not great.",
      "description": "A post by Ben Halpern",
      "url": "https://dev.to/ben/im-so-sick-of-my-editor-telling-me-how-great-i-am-not-that-im-not-great-2oam",
      "tags": "",
      "reactions": 5,
      "comments": 3,
      "reading_time": 0,
      "author": "ben"
    },
    {
      "title": "Building a Error Library",
      "description": "Error handling is one of those things that quietly shapes the entire experience of a system. When it...",
      "url": "https://dev.to/fafhrd91/building-a-error-library-3kda",
      "tags": "rust",
      "reactions": 28,
      "comments": 0,
      "reading_time": 6,
      "author": "fafhrd91"
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
      "forks": 15234,
      "added_stars": 19877,
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
        }
      ]
    },
    {
      "author": "figma",
      "repo": "mcp-server-guide",
      "avatar": "https://github.com/figma.png",
      "repo_link": "https://github.com/figma/mcp-server-guide",
      "desc": "A guide on how to use the Figma MCP server",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 63,
      "added_stars": 305,
      "builtBy": [
        {
          "username": "ebentley-figma",
          "href": "https://github.com/ebentley-figma",
          "avatar": "https://avatars.githubusercontent.com/u/111350777"
        },
        {
          "username": "mwilliams-figma",
          "href": "https://github.com/mwilliams-figma",
          "avatar": "https://avatars.githubusercontent.com/u/126205200"
        },
        {
          "username": "dwong-figma",
          "href": "https://github.com/dwong-figma",
          "avatar": "https://avatars.githubusercontent.com/u/234063059"
        },
        {
          "username": "jesselumarie",
          "href": "https://github.com/jesselumarie",
          "avatar": "https://avatars.githubusercontent.com/u/4467473"
        },
        {
          "username": "rbhalla-figma",
          "href": "https://github.com/rbhalla-figma",
          "avatar": "https://avatars.githubusercontent.com/u/127770926"
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
      "forks": 620,
      "added_stars": 3964,
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
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3622,
      "added_stars": 6015,
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
      "forks": 2625,
      "added_stars": 1908,
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
          "username": "CoopahG",
          "href": "https://github.com/CoopahG",
          "avatar": "https://avatars.githubusercontent.com/u/72124096"
        }
      ]
    },
    {
      "author": "ChristopherKahler",
      "repo": "paul",
      "avatar": "https://github.com/ChristopherKahler.png",
      "repo_link": "https://github.com/ChristopherKahler/paul",
      "desc": "Plan-Apply-Unify Loop — Structured AI-assisted development for Claude Code. Quality over speed-for-speed's-sake.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 58,
      "added_stars": 150,
      "builtBy": [
        {
          "username": "ChristopherKahler",
          "href": "https://github.com/ChristopherKahler",
          "avatar": "https://avatars.githubusercontent.com/u/188632505"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "stars": 0,
      "forks": 1217,
      "added_stars": 57,
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
          "username": "HannesOberreiter",
          "href": "https://github.com/HannesOberreiter",
          "avatar": "https://avatars.githubusercontent.com/u/16878981"
        },
        {
          "username": "symonbaikov",
          "href": "https://github.com/symonbaikov",
          "avatar": "https://avatars.githubusercontent.com/u/115481136"
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
      "forks": 375,
      "added_stars": 233,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "anuragg-saxenaa",
          "href": "https://github.com/anuragg-saxenaa",
          "avatar": "https://avatars.githubusercontent.com/u/17893081"
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
        }
      ]
    },
    {
      "author": "spicetify",
      "repo": "cli",
      "avatar": "https://github.com/spicetify.png",
      "repo_link": "https://github.com/spicetify/cli",
      "desc": "Command-line tool to customize Spotify client. Supports Windows, macOS, and Linux.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 852,
      "added_stars": 131,
      "builtBy": [
        {
          "username": "khanhas",
          "href": "https://github.com/khanhas",
          "avatar": "https://avatars.githubusercontent.com/u/26436809"
        },
        {
          "username": "rxri",
          "href": "https://github.com/rxri",
          "avatar": "https://avatars.githubusercontent.com/u/9348108"
        },
        {
          "username": "kyrie25",
          "href": "https://github.com/kyrie25",
          "avatar": "https://avatars.githubusercontent.com/u/77577746"
        },
        {
          "username": "SunsetTechuila",
          "href": "https://github.com/SunsetTechuila",
          "avatar": "https://avatars.githubusercontent.com/u/115353812"
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
      "forks": 35211,
      "added_stars": 180,
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
      "author": "vercel",
      "repo": "next.js",
      "avatar": "https://github.com/vercel.png",
      "repo_link": "https://github.com/vercel/next.js",
      "desc": "The React Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 30725,
      "added_stars": 233,
      "builtBy": [
        {
          "username": "ijjk",
          "href": "https://github.com/ijjk",
          "avatar": "https://avatars.githubusercontent.com/u/22380829"
        },
        {
          "username": "timneutkens",
          "href": "https://github.com/timneutkens",
          "avatar": "https://avatars.githubusercontent.com/u/6324199"
        },
        {
          "username": "sokra",
          "href": "https://github.com/sokra",
          "avatar": "https://avatars.githubusercontent.com/u/1365881"
        },
        {
          "username": "vercel-release-bot",
          "href": "https://github.com/vercel-release-bot",
          "avatar": "https://avatars.githubusercontent.com/u/88769842"
        },
        {
          "username": "huozhi",
          "href": "https://github.com/huozhi",
          "avatar": "https://avatars.githubusercontent.com/u/4800338"
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
      "title": "NoteRunway: Because Your Notion Workspace Deserves an Elite Crew",
      "description": "This is a submission for the Notion MCP Challenge           Table of Contents     What I...",
      "url": "https://dev.to/georgekobaidze/noterunway-because-your-notion-workspace-deserves-an-elite-crew-53bk",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 12,
      "comments": 6,
      "reading_time": 7,
      "author": "georgekobaidze"
    },
    {
      "title": "Agentic Shell - cli agent adaption layer",
      "description": "Hey folks,  TLDR: Spent the today writing an adaptation of cli-agent shell requests, having coded the...",
      "url": "https://dev.to/scott_raisbeck_24ea5fbc1e/agentic-shell-cli-agent-adaption-layer-l7m",
      "tags": "ai, programming, python, agents",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "scott_raisbeck_24ea5fbc1e"
    },
    {
      "title": "Building an ISO/IEC 27001-Ready MCP Security Scanner System on Notion MCP",
      "description": "This is a submission for the Notion MCP Challenge  What I Built  A question most organisations have...",
      "url": "https://dev.to/terungwa-mzer/whos-auditing-your-ais-tools-building-an-iso-27001-ready-mcp-security-system-on-notion-mcp-338g",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 1,
      "comments": 1,
      "reading_time": 5,
      "author": "terungwa-mzer"
    },
    {
      "title": "Why SSE for AI agents keeps breaking at 2am",
      "description": "Why SSE for AI agents keeps breaking at 2am Every team building AI agent UIs writes their own SSE...",
      "url": "https://dev.to/abhishek_chatterjee_33b9d/why-sse-for-ai-agents-keeps-breaking-at-2am-55ie",
      "tags": "llm, ai, agents, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "abhishek_chatterjee_33b9d"
    },
    {
      "title": "Keep_AS — The System That Refuses to Let You Miss Opportunities",
      "description": "This is a submission for the Notion MCP Challenge                🧠 Keep_AS — The system that refuses...",
      "url": "https://dev.to/asamaes/keepas-the-system-that-refuses-to-let-you-miss-opportunities-57hg",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 10,
      "comments": 1,
      "reading_time": 2,
      "author": "asamaes"
    },
    {
      "title": "SafeBrowse: A Trust Layer for AI Browser Agents (Prevent Prompt Injection & Data Exfiltration)",
      "description": "If your agent can browse the web, download files, connect tools, and write memory, a stronger model...",
      "url": "https://dev.to/rob_kang_7e54350f8af26743/safebrowse-a-trust-layer-for-ai-browser-agents-prevent-prompt-injection-data-exfiltration-3i3b",
      "tags": "ai, security, agents, agentsbrowsingsecurity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "rob_kang_7e54350f8af26743"
    },
    {
      "title": "Long-Horizon Agents Are Here. Full Autopilot Isn't",
      "description": "A good sanity check for long-horizon agents is not a benchmark. It is a task that is easy to verify...",
      "url": "https://dev.to/maximsaplin/long-horizon-agents-are-here-full-autopilot-isnt-5bo7",
      "tags": "agents, ai, llm, programming",
      "reactions": 10,
      "comments": 0,
      "reading_time": 6,
      "author": "maximsaplin"
    },
    {
      "title": "Reflective — AI journaling companion built with Notion MCP and Claude",
      "description": "This is a submission for the Notion MCP Challenge              What I Built   Reflective is a Chrome...",
      "url": "https://dev.to/neicore/reflective-ai-journaling-companion-built-with-notion-mcp-and-claude-4l70",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 1,
      "comments": 1,
      "reading_time": 3,
      "author": "neicore"
    },
    {
      "title": "Add auth to your AI agents in 5 minutes with KavachOS",
      "description": "Auth libraries handle human sign-in. But what happens when your AI agent needs to read from GitHub,...",
      "url": "https://dev.to/thegdsks/add-auth-to-your-ai-agents-in-5-minutes-with-kavachos-5b9k",
      "tags": "webdev, opensource, ai, typescript",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "thegdsks"
    },
    {
      "title": "Gas-Aware Trading: Execute Only When Gas Is Cheap",
      "description": "Your trading bot spotted a perfect arbitrage opportunity between Uniswap and Balancer. The price...",
      "url": "https://dev.to/walletguy/gas-aware-trading-execute-only-when-gas-is-cheap-cm9",
      "tags": "web3, ai, opensource, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "walletguy"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "zdw",
      "descendants": 6,
      "id": 47570666,
      "kids": [
        47571097,
        47571101,
        47571225,
        47571088,
        47570992
      ],
      "score": 45,
      "time": 1774848438,
      "title": "The curious case of retro demo scene graphics",
      "type": "story",
      "url": "https://www.datagubbe.se/aipixels/"
    },
    {
      "by": "alberto-m",
      "descendants": 345,
      "id": 47566865,
      "kids": [
        47567575,
        47567238,
        47567103,
        47567077,
        47567204,
        47570669,
        47567223,
        47568291,
        47567082,
        47568464,
        47569942,
        47567290,
        47568569,
        47568913,
        47567781,
        47567820,
        47569413,
        47567355,
        47568352,
        47567056,
        47567245,
        47567239,
        47567040,
        47568531,
        47567211,
        47567271,
        47567241,
        47567378,
        47567767,
        47567522,
        47567908,
        47570368,
        47568060,
        47568490,
        47567351
      ],
      "score": 515,
      "time": 1774815665,
      "title": "ChatGPT won't let you type until Cloudflare reads your React state",
      "type": "story",
      "url": "https://www.buchodi.com/chatgpt-wont-let-you-type-until-cloudflare-reads-your-react-state-i-decrypted-the-program-that-does-it/"
    },
    {
      "by": "pavo-etc",
      "descendants": 90,
      "id": 47570269,
      "kids": [
        47570885,
        47570820,
        47570673,
        47570682,
        47570532,
        47570695,
        47570734,
        47570751,
        47570763,
        47570954,
        47570691,
        47570949,
        47571136,
        47571216,
        47570704,
        47571158,
        47570671,
        47570917,
        47570886,
        47570786,
        47570687,
        47570865,
        47570657,
        47570818,
        47570736,
        47570919,
        47570857,
        47570913,
        47570727,
        47570649,
        47570679,
        47570652,
        47570694,
        47571132,
        47571075,
        47570899,
        47570920,
        47570776,
        47570906
      ],
      "score": 291,
      "time": 1774843471,
      "title": "Copilot edited an ad into my PR",
      "type": "story",
      "url": "https://notes.zachmanson.com/copilot-edited-an-ad-into-my-pr/"
    },
    {
      "by": "cokernel_hacker",
      "descendants": 8,
      "id": 47570435,
      "kids": [
        47571002,
        47570858,
        47571139
      ],
      "score": 21,
      "time": 1774845555,
      "title": "VHDL's Crown Jewel",
      "type": "story",
      "url": "https://www.sigasi.com/opinion/jan/vhdls-crown-jewel/"
    },
    {
      "by": "speckx",
      "descendants": 184,
      "id": 47564421,
      "kids": [
        47565756,
        47564679,
        47564922,
        47564612,
        47564892,
        47564999,
        47564755,
        47564670,
        47564680,
        47566262,
        47569842,
        47570551,
        47565562,
        47565038,
        47570833,
        47565363,
        47565595,
        47569687,
        47567537,
        47565513,
        47566742,
        47566605,
        47566471,
        47567075,
        47565683,
        47567019,
        47566057,
        47569038,
        47568015,
        47566229,
        47565448,
        47564758,
        47566582,
        47566074,
        47569557,
        47567766,
        47567984,
        47565381,
        47566849,
        47569343,
        47566296,
        47565765,
        47565642,
        47564603,
        47566682,
        47564944,
        47566943,
        47568846,
        47567940,
        47566449,
        47565376,
        47565432,
        47564856,
        47565128
      ],
      "score": 487,
      "time": 1774800742,
      "title": "Voyager 1 runs on 69 KB of memory and an 8-track tape recorder",
      "type": "story",
      "url": "https://techfixated.com/a-1977-time-capsule-voyager-1-runs-on-69-kb-of-memory-and-an-8-track-tape-recorder-4/"
    },
    {
      "by": "MrAlex94",
      "descendants": 13,
      "id": 47545607,
      "kids": [
        47570709,
        47569450,
        47569559,
        47569500,
        47569907
      ],
      "score": 133,
      "time": 1774632131,
      "title": "15 Years of Forking",
      "type": "story",
      "url": "https://www.waterfox.com/blog/15-years-of-forking/"
    },
    {
      "by": "Philadelphia",
      "descendants": 69,
      "id": 47569471,
      "kids": [
        47569771,
        47571174,
        47569644,
        47569647,
        47569797,
        47569969,
        47571069,
        47569750,
        47570390,
        47569669,
        47570156,
        47569626,
        47570783,
        47569601,
        47569608,
        47570636,
        47569653
      ],
      "score": 191,
      "time": 1774834697,
      "title": "Philly courts will ban all smart eyeglasses starting next week",
      "type": "story",
      "url": "https://www.inquirer.com/news/philadelphia/smart-glasses-ai-meta-courts-20260326.html"
    },
    {
      "by": "luu",
      "descendants": 2,
      "id": 47557299,
      "kids": [
        47570930,
        47560692
      ],
      "score": 14,
      "time": 1774724293,
      "title": "Hardware Image Compression",
      "type": "story",
      "url": "https://www.ludicon.com/castano/blog/2026/03/hardware-image-compression/"
    },
    {
      "by": "giis",
      "descendants": 4,
      "id": 47570940,
      "kids": [
        47571232,
        47571188,
        47571124,
        47571099
      ],
      "score": 23,
      "time": 1774850933,
      "title": "15 years, one server, 8GB RAM and 500k users – how Webminal refuses to die",
      "type": "story",
      "url": "https://community.webminal.org/t/15-years-one-server-8gb-ram-and-500k-users-how-webminal-refuses-to-die/8803"
    },
    {
      "by": "userbinator",
      "descendants": 2,
      "id": 47570547,
      "kids": [
        47570881
      ],
      "score": 22,
      "time": 1774846867,
      "title": "HD Audio Driver for Windows 98SE / Me",
      "type": "story",
      "url": "https://github.com/andrew-hoffman/wdmhda"
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
      "descendants": 6,
      "id": 47570666,
      "kids": [
        47571097,
        47571101,
        47571225,
        47571088,
        47570992
      ],
      "score": 45,
      "time": 1774848438,
      "title": "The curious case of retro demo scene graphics",
      "type": "story",
      "url": "https://www.datagubbe.se/aipixels/"
    },
    {
      "by": "alberto-m",
      "descendants": 345,
      "id": 47566865,
      "kids": [
        47567575,
        47567238,
        47567103,
        47567077,
        47567204,
        47570669,
        47567223,
        47568291,
        47567082,
        47568464,
        47569942,
        47567290,
        47568569,
        47568913,
        47567781,
        47567820,
        47569413,
        47567355,
        47568352,
        47567056,
        47567245,
        47567239,
        47567040,
        47568531,
        47567211,
        47567271,
        47567241,
        47567378,
        47567767,
        47567522,
        47567908,
        47570368,
        47568060,
        47568490,
        47567351
      ],
      "score": 515,
      "time": 1774815665,
      "title": "ChatGPT won't let you type until Cloudflare reads your React state",
      "type": "story",
      "url": "https://www.buchodi.com/chatgpt-wont-let-you-type-until-cloudflare-reads-your-react-state-i-decrypted-the-program-that-does-it/"
    },
    {
      "by": "pavo-etc",
      "descendants": 90,
      "id": 47570269,
      "kids": [
        47570885,
        47570820,
        47570673,
        47570682,
        47570532,
        47570695,
        47570734,
        47570751,
        47570763,
        47570954,
        47570691,
        47570949,
        47571136,
        47571216,
        47570704,
        47571158,
        47570671,
        47570917,
        47570886,
        47570786,
        47570687,
        47570865,
        47570657,
        47570818,
        47570736,
        47570919,
        47570857,
        47570913,
        47570727,
        47570649,
        47570679,
        47570652,
        47570694,
        47571132,
        47571075,
        47570899,
        47570920,
        47570776,
        47570906
      ],
      "score": 291,
      "time": 1774843471,
      "title": "Copilot edited an ad into my PR",
      "type": "story",
      "url": "https://notes.zachmanson.com/copilot-edited-an-ad-into-my-pr/"
    },
    {
      "by": "cokernel_hacker",
      "descendants": 8,
      "id": 47570435,
      "kids": [
        47571002,
        47570858,
        47571139
      ],
      "score": 21,
      "time": 1774845555,
      "title": "VHDL's Crown Jewel",
      "type": "story",
      "url": "https://www.sigasi.com/opinion/jan/vhdls-crown-jewel/"
    },
    {
      "by": "speckx",
      "descendants": 184,
      "id": 47564421,
      "kids": [
        47565756,
        47564679,
        47564922,
        47564612,
        47564892,
        47564999,
        47564755,
        47564670,
        47564680,
        47566262,
        47569842,
        47570551,
        47565562,
        47565038,
        47570833,
        47565363,
        47565595,
        47569687,
        47567537,
        47565513,
        47566742,
        47566605,
        47566471,
        47567075,
        47565683,
        47567019,
        47566057,
        47569038,
        47568015,
        47566229,
        47565448,
        47564758,
        47566582,
        47566074,
        47569557,
        47567766,
        47567984,
        47565381,
        47566849,
        47569343,
        47566296,
        47565765,
        47565642,
        47564603,
        47566682,
        47564944,
        47566943,
        47568846,
        47567940,
        47566449,
        47565376,
        47565432,
        47564856,
        47565128
      ],
      "score": 487,
      "time": 1774800742,
      "title": "Voyager 1 runs on 69 KB of memory and an 8-track tape recorder",
      "type": "story",
      "url": "https://techfixated.com/a-1977-time-capsule-voyager-1-runs-on-69-kb-of-memory-and-an-8-track-tape-recorder-4/"
    },
    {
      "by": "MrAlex94",
      "descendants": 13,
      "id": 47545607,
      "kids": [
        47570709,
        47569450,
        47569559,
        47569500,
        47569907
      ],
      "score": 133,
      "time": 1774632131,
      "title": "15 Years of Forking",
      "type": "story",
      "url": "https://www.waterfox.com/blog/15-years-of-forking/"
    },
    {
      "by": "Philadelphia",
      "descendants": 69,
      "id": 47569471,
      "kids": [
        47569771,
        47571174,
        47569644,
        47569647,
        47569797,
        47569969,
        47571069,
        47569750,
        47570390,
        47569669,
        47570156,
        47569626,
        47570783,
        47569601,
        47569608,
        47570636,
        47569653
      ],
      "score": 191,
      "time": 1774834697,
      "title": "Philly courts will ban all smart eyeglasses starting next week",
      "type": "story",
      "url": "https://www.inquirer.com/news/philadelphia/smart-glasses-ai-meta-courts-20260326.html"
    },
    {
      "by": "luu",
      "descendants": 2,
      "id": 47557299,
      "kids": [
        47570930,
        47560692
      ],
      "score": 14,
      "time": 1774724293,
      "title": "Hardware Image Compression",
      "type": "story",
      "url": "https://www.ludicon.com/castano/blog/2026/03/hardware-image-compression/"
    },
    {
      "by": "giis",
      "descendants": 4,
      "id": 47570940,
      "kids": [
        47571232,
        47571188,
        47571124,
        47571099
      ],
      "score": 23,
      "time": 1774850933,
      "title": "15 years, one server, 8GB RAM and 500k users – how Webminal refuses to die",
      "type": "story",
      "url": "https://community.webminal.org/t/15-years-one-server-8gb-ram-and-500k-users-how-webminal-refuses-to-die/8803"
    },
    {
      "by": "userbinator",
      "descendants": 2,
      "id": 47570547,
      "kids": [
        47570881
      ],
      "score": 22,
      "time": 1774846867,
      "title": "HD Audio Driver for Windows 98SE / Me",
      "type": "story",
      "url": "https://github.com/andrew-hoffman/wdmhda"
    },
    {
      "by": "nullpath",
      "descendants": 12,
      "id": 47532338,
      "kids": [
        47571207,
        47570434,
        47570456,
        47570975,
        47570887,
        47570914,
        47570645,
        47570934
      ],
      "score": 17,
      "time": 1774541688,
      "title": "Gonon: Building a Clock with No Numerals",
      "type": "story",
      "url": "https://tonygaeta.com/perceptor/code/gonon"
    },
    {
      "by": "hydrolox",
      "descendants": 0,
      "id": 47519622,
      "score": 6,
      "time": 1774456271,
      "title": "Douglas Lenat's Automated Mathematician Source Code",
      "type": "story",
      "url": "https://github.com/white-flame/am"
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
      "title": "The Cognitive Dark Forest",
      "url": "https://ryelang.org/blog/posts/cognitive-dark-forest/",
      "score": 45,
      "comments": 39,
      "tags": [
        "vibecoding"
      ],
      "id": "bpotqb"
    },
    {
      "title": "Neovim 0.12.0",
      "url": "https://github.com/neovim/neovim/releases/tag/v0.12.0",
      "score": 33,
      "comments": 13,
      "tags": [
        "vim"
      ],
      "id": "64hfnw"
    },
    {
      "title": "Who's hiring? Q2 2026",
      "url": "",
      "score": 29,
      "comments": 8,
      "tags": [
        "job"
      ],
      "id": "vixzkq"
    },
    {
      "title": "Introduction to the PineTime Pro",
      "url": "https://pine64.org/2026/03/28/pinetime_march_2026/",
      "score": 31,
      "comments": 6,
      "tags": [
        "hardware"
      ],
      "id": "isaccy"
    },
    {
      "title": "What Category Theory Teaches Us About DataFrames",
      "url": "https://mchav.github.io/what-category-theory-teaches-us-about-dataframes/",
      "score": 41,
      "comments": 5,
      "tags": [
        "databases",
        "plt"
      ],
      "id": "ntmv9j"
    },
    {
      "title": "C++26 is done! — Trip report: March 2026 ISO C++ standards meeting (London Croydon, UK)",
      "url": "https://herbsutter.com/2026/03/29/c26-is-done-trip-report-march-2026-iso-c-standards-meeting-london-croydon-uk/",
      "score": 13,
      "comments": 0,
      "tags": [
        "c++"
      ],
      "id": "350aqk"
    },
    {
      "title": "The Steam Controller D0ggle Adventure",
      "url": "https://im-just-lee.ing/steam-controller-d0ggle-54682aa4/",
      "score": 3,
      "comments": 0,
      "tags": [
        "hardware",
        "reversing"
      ],
      "id": "wkukvc"
    },
    {
      "title": "15 Years of Forking (Waterfox)",
      "url": "https://www.waterfox.com/blog/15-years-of-forking/",
      "score": 4,
      "comments": 1,
      "tags": [
        "browsers",
        "historical"
      ],
      "id": "yyxyjy"
    },
    {
      "title": "Free, native RISC-V (RV64GC) CI on GitHub",
      "url": "https://riseproject.dev/2026/03/24/announcing-the-rise-risc-v-runners-free-native-risc-v-ci-on-github/",
      "score": 9,
      "comments": 1,
      "tags": [
        "hardware"
      ],
      "id": "eelhis"
    },
    {
      "title": "ChatGPT Won't Let You Type Until Cloudflare Reads Your React State. I Decrypted the Program That Does It",
      "url": "https://www.buchodi.com/chatgpt-wont-let-you-type-until-cloudflare-reads-your-react-state-i-decrypted-the-program-that-does-it/",
      "score": 4,
      "comments": 0,
      "tags": [
        "privacy",
        "security",
        "web"
      ],
      "id": "lxkqhp"
    }
  ]
}
```

