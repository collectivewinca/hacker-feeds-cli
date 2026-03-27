# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-27 06:42:00 UTC

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
      "title": "Speed vs smarts for coding agents?",
      "description": "I'm curious if you specifically have a sense of where you draw the line in terms of your interest in...",
      "url": "https://dev.to/ben/speed-vs-smarts-for-coding-agents-3h",
      "tags": "agents, ai, productivity, discuss",
      "reactions": 24,
      "comments": 11,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "your agent can think. it can't remember.",
      "description": "TLDR: ghost gives your agent instant, ephemeral postgres databases. unlimited databases, unlimited...",
      "url": "https://dev.to/ghostbuild/your-agent-can-think-it-cant-remember-5e1o",
      "tags": "ai, mcp, postgres, agents",
      "reactions": 142,
      "comments": 34,
      "reading_time": 7,
      "author": "ghostdotbuild"
    },
    {
      "title": "The Future of Coding is Communication, Not Just Code",
      "description": "We recently had a great conversation on the Making Software podcast with Bobby Tierney. Bobby is a...",
      "url": "https://dev.to/auth0/the-future-of-coding-is-communication-not-just-code-328p",
      "tags": "ai, mcp, security, vibecoding",
      "reactions": 35,
      "comments": 2,
      "reading_time": 2,
      "author": "carlastabile"
    },
    {
      "title": "I Tried to Turn Agent Memory Into Plumbing Instead of Philosophy",
      "description": "There is a special genre of AI idea that sounds brilliant right up until you try to build it. It...",
      "url": "https://dev.to/marcosomma/i-tried-to-turn-agent-memory-into-plumbing-instead-of-philosophy-3a8e",
      "tags": "agents, ai, architecture, softwareengineering",
      "reactions": 26,
      "comments": 4,
      "reading_time": 7,
      "author": "marcosomma"
    },
    {
      "title": "I built a file transfer tool that can’t spy on you even if it wanted to",
      "description": "I got tired of explaining privacy policies to people.  Every time I needed to send a file to someone,...",
      "url": "https://dev.to/aliirz/i-built-a-file-transfer-tool-that-cant-spy-on-you-even-if-it-wanted-to-2p39",
      "tags": "opensource, go, webdev",
      "reactions": 28,
      "comments": 8,
      "reading_time": 3,
      "author": "aliirz"
    },
    {
      "title": "I Was Tired of Re-Recording Product Demos Every Sprint. So I Built a Tool That Turns Playwright Tests Into Videos.",
      "description": "I Was Tired of Re-Recording Product Demos Every Sprint. So I Built a Tool That Turns...",
      "url": "https://dev.to/thepatriczek/i-was-tired-of-re-recording-product-demos-every-sprint-so-i-built-a-tool-that-turns-playwright-21od",
      "tags": "playwright, product, marketing, ai",
      "reactions": 22,
      "comments": 0,
      "reading_time": 6,
      "author": "thepatriczek"
    },
    {
      "title": "Scaling your productivity with spec docs in your IDE - Anti Gravity.",
      "description": "Google’s Anti Gravity is built on a simple premise: remove friction so developers can stay in \"the...",
      "url": "https://dev.to/gdg/teaching-gemini-to-scale-your-workflow-in-anti-gravity-om2",
      "tags": "ai, antigravity, angular, gdg",
      "reactions": 8,
      "comments": 0,
      "reading_time": 2,
      "author": "matthew_christiansen_4049"
    },
    {
      "title": "Building Framework-Agnostic AI Swarms: Compare LangGraph, Strands, and OpenAI Swarm",
      "description": "Build a 3-agent research analysis swarm that runs across three orchestrators. Learn how LaunchDarkly AI Configs enable framework-agnostic agent definitions, per-agent cost tracking, and silent failure detection.",
      "url": "https://dev.to/launchdarkly/building-framework-agnostic-ai-swarms-compare-langgraph-strands-and-openai-swarm-14ip",
      "tags": "langchain, agents",
      "reactions": 19,
      "comments": 0,
      "reading_time": 13,
      "author": "sattensil888"
    },
    {
      "title": "Build real-time conversational agents with Gemini 3.1 Flash Live",
      "description": "Today, we’re launching Gemini 3.1 Flash Live via the Gemini Live API in Google AI Studio. Gemini 3.1...",
      "url": "https://dev.to/googleai/build-real-time-conversational-agents-with-gemini-31-flash-live-27f6",
      "tags": "ai, gemini, voice, multimodal",
      "reactions": 41,
      "comments": 3,
      "reading_time": 3,
      "author": "thorwebdev"
    },
    {
      "title": "The data engineer's Cortex Code cheat sheet",
      "description": "A practical guide to the commands, prompts, patterns, and habits that make Cortex Code useful in real...",
      "url": "https://dev.to/snowflake/the-data-engineers-cortex-code-cheat-sheet-3b60",
      "tags": "cortexcode, snowflake, ai, dataengineering",
      "reactions": 50,
      "comments": 3,
      "reading_time": 15,
      "author": "jdanielmyers"
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
      "forks": 14456,
      "added_stars": 22821,
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
          "username": "pvgomes",
          "href": "https://github.com/pvgomes",
          "avatar": "https://avatars.githubusercontent.com/u/4427450"
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
      "forks": 571,
      "added_stars": 5543,
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
      "forks": 580,
      "added_stars": 2948,
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
          "username": "shog86",
          "href": "https://github.com/shog86",
          "avatar": "https://avatars.githubusercontent.com/u/19712631"
        },
        {
          "username": "rohan-tessl",
          "href": "https://github.com/rohan-tessl",
          "avatar": "https://avatars.githubusercontent.com/u/246233927"
        },
        {
          "username": "glacierphonk",
          "href": "https://github.com/glacierphonk",
          "avatar": "https://avatars.githubusercontent.com/u/260244336"
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
      "forks": 3457,
      "added_stars": 6869,
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
      "author": "sgoudelis",
      "repo": "ground-station",
      "avatar": "https://github.com/sgoudelis.png",
      "repo_link": "https://github.com/sgoudelis/ground-station",
      "desc": "Ground Station is all-in-one satellite monitoring suite",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 572,
      "added_stars": 581,
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
      "author": "coreyhaines31",
      "repo": "marketingskills",
      "avatar": "https://github.com/coreyhaines31.png",
      "repo_link": "https://github.com/coreyhaines31/marketingskills",
      "desc": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2526,
      "added_stars": 1963,
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
      "author": "justlovemaki",
      "repo": "AIClient-2-API",
      "avatar": "https://github.com/justlovemaki.png",
      "repo_link": "https://github.com/justlovemaki/AIClient-2-API",
      "desc": "Simulates Gemini CLI, Antigravity, Qwen Code, and Kiro client requests, compatible with the OpenAI API. It supports thousands of Gemini model requests per day and offers free use of the built-in Claude model in Kiro. Easily connect to any client via the API, making AI development more efficient!",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 939,
      "added_stars": 355,
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
      "author": "cockpit-project",
      "repo": "cockpit",
      "avatar": "https://github.com/cockpit-project.png",
      "repo_link": "https://github.com/cockpit-project/cockpit",
      "desc": "Cockpit is a web-based graphical interface for servers.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1251,
      "added_stars": 469,
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
      "author": "simple-icons",
      "repo": "simple-icons",
      "avatar": "https://github.com/simple-icons.png",
      "repo_link": "https://github.com/simple-icons/simple-icons",
      "desc": "SVG icons for popular brands",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3084,
      "added_stars": 95,
      "builtBy": [
        {
          "username": "PeterShaggyNoble",
          "href": "https://github.com/PeterShaggyNoble",
          "avatar": "https://avatars.githubusercontent.com/u/15157491"
        },
        {
          "username": "ericcornelissen",
          "href": "https://github.com/ericcornelissen",
          "avatar": "https://avatars.githubusercontent.com/u/3742559"
        },
        {
          "username": "birjj",
          "href": "https://github.com/birjj",
          "avatar": "https://avatars.githubusercontent.com/u/4542461"
        },
        {
          "username": "mondeja",
          "href": "https://github.com/mondeja",
          "avatar": "https://avatars.githubusercontent.com/u/23049315"
        },
        {
          "username": "danleech",
          "href": "https://github.com/danleech",
          "avatar": "https://avatars.githubusercontent.com/u/734706"
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
      "forks": 243,
      "added_stars": 48,
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
      "author": "microsoft",
      "repo": "skills-for-copilot-studio",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/skills-for-copilot-studio",
      "desc": "A skill for AI-coding tools to build and edit Microsoft Copilot Studio agents as YAML — with schema validation, templates, and AI-powered skills. Suited for Claude Code, GitHub Copilot CLI, and more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 27,
      "added_stars": 20,
      "builtBy": [
        {
          "username": "GiorgioUghini",
          "href": "https://github.com/GiorgioUghini",
          "avatar": "https://avatars.githubusercontent.com/u/23707134"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ericsche",
          "href": "https://github.com/ericsche",
          "avatar": "https://avatars.githubusercontent.com/u/35633680"
        },
        {
          "username": "adilei",
          "href": "https://github.com/adilei",
          "avatar": "https://avatars.githubusercontent.com/u/28257760"
        },
        {
          "username": "purnananda",
          "href": "https://github.com/purnananda",
          "avatar": "https://avatars.githubusercontent.com/u/12234450"
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
      "title": "Speed vs smarts for coding agents?",
      "description": "I'm curious if you specifically have a sense of where you draw the line in terms of your interest in...",
      "url": "https://dev.to/ben/speed-vs-smarts-for-coding-agents-3h",
      "tags": "agents, ai, productivity, discuss",
      "reactions": 24,
      "comments": 11,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "your agent can think. it can't remember.",
      "description": "TLDR: ghost gives your agent instant, ephemeral postgres databases. unlimited databases, unlimited...",
      "url": "https://dev.to/ghostbuild/your-agent-can-think-it-cant-remember-5e1o",
      "tags": "ai, mcp, postgres, agents",
      "reactions": 142,
      "comments": 34,
      "reading_time": 7,
      "author": "ghostdotbuild"
    },
    {
      "title": "The Future of Coding is Communication, Not Just Code",
      "description": "We recently had a great conversation on the Making Software podcast with Bobby Tierney. Bobby is a...",
      "url": "https://dev.to/auth0/the-future-of-coding-is-communication-not-just-code-328p",
      "tags": "ai, mcp, security, vibecoding",
      "reactions": 35,
      "comments": 2,
      "reading_time": 2,
      "author": "carlastabile"
    },
    {
      "title": "I Tried to Turn Agent Memory Into Plumbing Instead of Philosophy",
      "description": "There is a special genre of AI idea that sounds brilliant right up until you try to build it. It...",
      "url": "https://dev.to/marcosomma/i-tried-to-turn-agent-memory-into-plumbing-instead-of-philosophy-3a8e",
      "tags": "agents, ai, architecture, softwareengineering",
      "reactions": 26,
      "comments": 4,
      "reading_time": 7,
      "author": "marcosomma"
    },
    {
      "title": "The Conversion Bottleneck Nobody Talks About When Building Autonomous Agents",
      "description": "When people build autonomous agents for repetitive tasks — job applications, outreach, content...",
      "url": "https://dev.to/nathanhamlett/the-conversion-bottleneck-nobody-talks-about-when-building-autonomous-agents-jl2",
      "tags": "ai, automation, career, devops",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "nathanhamlett"
    },
    {
      "title": "I built a self-hosted AI chat app that connects 7 providers in one UI",
      "description": "Over the past few months, I've been juggling Ollama for local stuff, Claude for tricky reasoning, and...",
      "url": "https://dev.to/tsunamayo7/i-built-a-self-hosted-ai-chat-app-that-connects-7-providers-in-one-ui-12ok",
      "tags": "ai, opensource, python, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "tsunamayo7"
    },
    {
      "title": "I Was Tired of Re-Recording Product Demos Every Sprint. So I Built a Tool That Turns Playwright Tests Into Videos.",
      "description": "I Was Tired of Re-Recording Product Demos Every Sprint. So I Built a Tool That Turns...",
      "url": "https://dev.to/thepatriczek/i-was-tired-of-re-recording-product-demos-every-sprint-so-i-built-a-tool-that-turns-playwright-21od",
      "tags": "playwright, product, marketing, ai",
      "reactions": 22,
      "comments": 0,
      "reading_time": 6,
      "author": "thepatriczek"
    },
    {
      "title": "Scaling your productivity with spec docs in your IDE - Anti Gravity.",
      "description": "Google’s Anti Gravity is built on a simple premise: remove friction so developers can stay in \"the...",
      "url": "https://dev.to/gdg/teaching-gemini-to-scale-your-workflow-in-anti-gravity-om2",
      "tags": "ai, antigravity, angular, gdg",
      "reactions": 8,
      "comments": 0,
      "reading_time": 2,
      "author": "matthew_christiansen_4049"
    },
    {
      "title": "Build real-time conversational agents with Gemini 3.1 Flash Live",
      "description": "Today, we’re launching Gemini 3.1 Flash Live via the Gemini Live API in Google AI Studio. Gemini 3.1...",
      "url": "https://dev.to/googleai/build-real-time-conversational-agents-with-gemini-31-flash-live-27f6",
      "tags": "ai, gemini, voice, multimodal",
      "reactions": 41,
      "comments": 3,
      "reading_time": 3,
      "author": "thorwebdev"
    },
    {
      "title": "The data engineer's Cortex Code cheat sheet",
      "description": "A practical guide to the commands, prompts, patterns, and habits that make Cortex Code useful in real...",
      "url": "https://dev.to/snowflake/the-data-engineers-cortex-code-cheat-sheet-3b60",
      "tags": "cortexcode, snowflake, ai, dataengineering",
      "reactions": 50,
      "comments": 3,
      "reading_time": 15,
      "author": "jdanielmyers"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "iBelieve",
      "descendants": 40,
      "id": 47539188,
      "kids": [
        47539295,
        47539493,
        47539301,
        47539571,
        47539320,
        47539354,
        47539267,
        47539399,
        47539253,
        47539335
      ],
      "score": 67,
      "time": 1774586835,
      "title": "Schedule tasks on the web",
      "type": "story",
      "url": "https://code.claude.com/docs/en/web-scheduled-tasks"
    },
    {
      "by": "Amorymeltzer",
      "descendants": 146,
      "id": 47518960,
      "kids": [
        47534055,
        47534471,
        47533673,
        47533966,
        47533801,
        47537682,
        47537489,
        47539579,
        47537017,
        47533833,
        47538599,
        47539213,
        47538652,
        47537031,
        47533882,
        47534468,
        47534388,
        47538687,
        47534151,
        47538323,
        47534261,
        47536658,
        47538864,
        47535021,
        47536419,
        47536459,
        47533922,
        47534232,
        47535171,
        47536814,
        47534339,
        47535025,
        47536449,
        47533745,
        47534977,
        47535031,
        47534092,
        47534777,
        47533954,
        47534108,
        47535339,
        47535126,
        47535527,
        47538857,
        47535471,
        47534355,
        47533779,
        47533657,
        47536450,
        47537391,
        47537081,
        47537131,
        47535010,
        47534593,
        47536451,
        47534414,
        47533867,
        47535143
      ],
      "score": 739,
      "time": 1774453589,
      "title": "Why so many control rooms were seafoam green (2025)",
      "type": "story",
      "url": "https://bethmathews.substack.com/p/why-so-many-control-rooms-were-seafoam"
    },
    {
      "by": "bentocorp",
      "descendants": 205,
      "id": 47535708,
      "kids": [
        47539072,
        47537646,
        47539629,
        47538671,
        47538218,
        47537997,
        47537452,
        47538602,
        47536292,
        47537542,
        47538721,
        47535803,
        47538693,
        47538338,
        47539600,
        47538892,
        47538863,
        47538201,
        47538843,
        47537845,
        47539006,
        47538324,
        47538623,
        47537817,
        47539060,
        47539015,
        47537730,
        47538448,
        47538867,
        47537366,
        47538184,
        47538690,
        47538676,
        47536056,
        47538873,
        47537637,
        47537714
      ],
      "score": 271,
      "time": 1774559090,
      "title": "Apple discontinues the Mac Pro",
      "type": "story",
      "url": "https://9to5mac.com/2026/03/26/apple-discontinues-the-mac-pro/"
    },
    {
      "by": "j0rg3",
      "descendants": 63,
      "id": 47536761,
      "kids": [
        47537374,
        47538451,
        47538011,
        47539068,
        47537678,
        47537151,
        47537213,
        47539597,
        47538781,
        47539426,
        47538519,
        47538592,
        47538092,
        47538669,
        47537857,
        47538186,
        47538402,
        47537819,
        47539075,
        47538472,
        47537064,
        47538744,
        47537881,
        47537457,
        47538793,
        47537966,
        47537947,
        47537128,
        47536778,
        47537629,
        47537466,
        47539187,
        47538280,
        47539021,
        47537991,
        47537075,
        47538758
      ],
      "score": 191,
      "text": "The stack: two agents on separate boxes. The public one (nullclaw) is a 678 KB Zig binary using ~1 MB RAM, connected to an Ergo IRC server. Visitors talk to it via a gamja web client embedded in my site. The private one (ironclaw) handles email and scheduling, reachable only over Tailscale via Google&#x27;s A2A protocol.<p>Tiered inference: Haiku 4.5 for conversation (sub-second, cheap), Sonnet 4.6 for tool use (only when needed). Hard cap at $2&#x2F;day.<p>A2A passthrough: the private-side agent borrows the gateway&#x27;s own inference pipeline, so there&#x27;s one API key and one billing relationship regardless of who initiated the request.<p>You can talk to nully at <a href=\"https:&#x2F;&#x2F;georgelarson.me&#x2F;chat&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;georgelarson.me&#x2F;chat&#x2F;</a> or connect with any IRC client to irc.georgelarson.me:6697 (TLS), channel #lobby.",
      "time": 1774564885,
      "title": "Show HN: I put an AI agent on a $7/month VPS with IRC as its transport layer",
      "type": "story",
      "url": "https://georgelarson.me/writing/2026-03-23-nullclaw-doorman/"
    },
    {
      "by": "axldelafosse",
      "descendants": 12,
      "id": 47538190,
      "kids": [
        47538755,
        47539449,
        47538982,
        47538723,
        47539022,
        47538191,
        47538714,
        47539469
      ],
      "score": 45,
      "time": 1774576075,
      "title": "Agent-to-agent pair programming",
      "type": "story",
      "url": "https://axeldelafosse.com/blog/agent-to-agent-pair-programming"
    },
    {
      "by": "lairv",
      "descendants": 35,
      "id": 47538078,
      "kids": [
        47539321,
        47538079,
        47538855,
        47539554,
        47538205,
        47538782
      ],
      "score": 65,
      "time": 1774575130,
      "title": "From 0% to 36% on Day 1 of ARC-AGI-3",
      "type": "story",
      "url": "https://www.symbolica.ai/blog/arc-agi-3"
    },
    {
      "by": "frenkel",
      "descendants": 16,
      "id": 47489213,
      "kids": [
        47539223,
        47539609,
        47538197,
        47538611,
        47538007,
        47539163,
        47538148
      ],
      "score": 57,
      "time": 1774272299,
      "title": "Dobase – Your workspace, your server",
      "type": "story",
      "url": "https://dobase.co/"
    },
    {
      "by": "philip1209",
      "descendants": 3,
      "id": 47534564,
      "kids": [
        47538939,
        47539633,
        47539545,
        47538771
      ],
      "score": 39,
      "text": "<a href=\"https:&#x2F;&#x2F;x.com&#x2F;trychroma&#x2F;status&#x2F;2037243681988894950\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;trychroma&#x2F;status&#x2F;2037243681988894950</a><p><a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;trychroma&#x2F;status&#x2F;2037243681988894950\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;trychroma&#x2F;status&#x2F;2037243681988894950</a>",
      "time": 1774553119,
      "title": "Chroma Context-1: Training a Self-Editing Search Agent",
      "type": "story",
      "url": "https://www.trychroma.com/research/context-1"
    },
    {
      "by": "Venn1",
      "descendants": 75,
      "id": 47490705,
      "kids": [
        47533662,
        47536416,
        47533659,
        47537284,
        47533927,
        47534910,
        47538644,
        47533607,
        47534392,
        47534152,
        47539491,
        47534266,
        47539384,
        47534265,
        47534755,
        47535302,
        47535702,
        47538087,
        47534432,
        47536827,
        47535983,
        47535375,
        47536379,
        47534244,
        47534141,
        47536373,
        47538874,
        47536834,
        47537049,
        47538093,
        47538881,
        47535450,
        47539141,
        47534093,
        47534979
      ],
      "score": 243,
      "time": 1774279058,
      "title": "DOOM Over DNS",
      "type": "story",
      "url": "https://github.com/resumex/doom-over-dns"
    },
    {
      "by": "varjag",
      "descendants": 2,
      "id": 47495190,
      "kids": [
        47538910,
        47537752,
        47538989,
        47538985
      ],
      "score": 70,
      "time": 1774300396,
      "title": "Whistler: Live eBPF Programming from the Common Lisp REPL",
      "type": "story",
      "url": "https://atgreen.github.io/repl-yell/posts/whistler/"
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
      "by": "iBelieve",
      "descendants": 40,
      "id": 47539188,
      "kids": [
        47539295,
        47539493,
        47539301,
        47539571,
        47539320,
        47539354,
        47539267,
        47539399,
        47539253,
        47539335
      ],
      "score": 67,
      "time": 1774586835,
      "title": "Schedule tasks on the web",
      "type": "story",
      "url": "https://code.claude.com/docs/en/web-scheduled-tasks"
    },
    {
      "by": "Amorymeltzer",
      "descendants": 146,
      "id": 47518960,
      "kids": [
        47534055,
        47534471,
        47533673,
        47533966,
        47533801,
        47537682,
        47537489,
        47539579,
        47537017,
        47533833,
        47538599,
        47539213,
        47538652,
        47537031,
        47533882,
        47534468,
        47534388,
        47538687,
        47534151,
        47538323,
        47534261,
        47536658,
        47538864,
        47535021,
        47536419,
        47536459,
        47533922,
        47534232,
        47535171,
        47536814,
        47534339,
        47535025,
        47536449,
        47533745,
        47534977,
        47535031,
        47534092,
        47534777,
        47533954,
        47534108,
        47535339,
        47535126,
        47535527,
        47538857,
        47535471,
        47534355,
        47533779,
        47533657,
        47536450,
        47537391,
        47537081,
        47537131,
        47535010,
        47534593,
        47536451,
        47534414,
        47533867,
        47535143
      ],
      "score": 739,
      "time": 1774453589,
      "title": "Why so many control rooms were seafoam green (2025)",
      "type": "story",
      "url": "https://bethmathews.substack.com/p/why-so-many-control-rooms-were-seafoam"
    },
    {
      "by": "bentocorp",
      "descendants": 205,
      "id": 47535708,
      "kids": [
        47539072,
        47537646,
        47539629,
        47538671,
        47538218,
        47537997,
        47537452,
        47538602,
        47536292,
        47537542,
        47538721,
        47535803,
        47538693,
        47538338,
        47539600,
        47538892,
        47538863,
        47538201,
        47538843,
        47537845,
        47539006,
        47538324,
        47538623,
        47537817,
        47539060,
        47539015,
        47537730,
        47538448,
        47538867,
        47537366,
        47538184,
        47538690,
        47538676,
        47536056,
        47538873,
        47537637,
        47537714
      ],
      "score": 271,
      "time": 1774559090,
      "title": "Apple discontinues the Mac Pro",
      "type": "story",
      "url": "https://9to5mac.com/2026/03/26/apple-discontinues-the-mac-pro/"
    },
    {
      "by": "j0rg3",
      "descendants": 63,
      "id": 47536761,
      "kids": [
        47537374,
        47538451,
        47538011,
        47539068,
        47537678,
        47537151,
        47537213,
        47539597,
        47538781,
        47539426,
        47538519,
        47538592,
        47538092,
        47538669,
        47537857,
        47538186,
        47538402,
        47537819,
        47539075,
        47538472,
        47537064,
        47538744,
        47537881,
        47537457,
        47538793,
        47537966,
        47537947,
        47537128,
        47536778,
        47537629,
        47537466,
        47539187,
        47538280,
        47539021,
        47537991,
        47537075,
        47538758
      ],
      "score": 191,
      "text": "The stack: two agents on separate boxes. The public one (nullclaw) is a 678 KB Zig binary using ~1 MB RAM, connected to an Ergo IRC server. Visitors talk to it via a gamja web client embedded in my site. The private one (ironclaw) handles email and scheduling, reachable only over Tailscale via Google&#x27;s A2A protocol.<p>Tiered inference: Haiku 4.5 for conversation (sub-second, cheap), Sonnet 4.6 for tool use (only when needed). Hard cap at $2&#x2F;day.<p>A2A passthrough: the private-side agent borrows the gateway&#x27;s own inference pipeline, so there&#x27;s one API key and one billing relationship regardless of who initiated the request.<p>You can talk to nully at <a href=\"https:&#x2F;&#x2F;georgelarson.me&#x2F;chat&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;georgelarson.me&#x2F;chat&#x2F;</a> or connect with any IRC client to irc.georgelarson.me:6697 (TLS), channel #lobby.",
      "time": 1774564885,
      "title": "Show HN: I put an AI agent on a $7/month VPS with IRC as its transport layer",
      "type": "story",
      "url": "https://georgelarson.me/writing/2026-03-23-nullclaw-doorman/"
    },
    {
      "by": "axldelafosse",
      "descendants": 12,
      "id": 47538190,
      "kids": [
        47538755,
        47539449,
        47538982,
        47538723,
        47539022,
        47538191,
        47538714,
        47539469
      ],
      "score": 45,
      "time": 1774576075,
      "title": "Agent-to-agent pair programming",
      "type": "story",
      "url": "https://axeldelafosse.com/blog/agent-to-agent-pair-programming"
    },
    {
      "by": "lairv",
      "descendants": 35,
      "id": 47538078,
      "kids": [
        47539321,
        47538079,
        47538855,
        47539554,
        47538205,
        47538782
      ],
      "score": 65,
      "time": 1774575130,
      "title": "From 0% to 36% on Day 1 of ARC-AGI-3",
      "type": "story",
      "url": "https://www.symbolica.ai/blog/arc-agi-3"
    },
    {
      "by": "frenkel",
      "descendants": 16,
      "id": 47489213,
      "kids": [
        47539223,
        47539609,
        47538197,
        47538611,
        47538007,
        47539163,
        47538148
      ],
      "score": 57,
      "time": 1774272299,
      "title": "Dobase – Your workspace, your server",
      "type": "story",
      "url": "https://dobase.co/"
    },
    {
      "by": "philip1209",
      "descendants": 3,
      "id": 47534564,
      "kids": [
        47538939,
        47539633,
        47539545,
        47538771
      ],
      "score": 39,
      "text": "<a href=\"https:&#x2F;&#x2F;x.com&#x2F;trychroma&#x2F;status&#x2F;2037243681988894950\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;trychroma&#x2F;status&#x2F;2037243681988894950</a><p><a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;trychroma&#x2F;status&#x2F;2037243681988894950\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;trychroma&#x2F;status&#x2F;2037243681988894950</a>",
      "time": 1774553119,
      "title": "Chroma Context-1: Training a Self-Editing Search Agent",
      "type": "story",
      "url": "https://www.trychroma.com/research/context-1"
    },
    {
      "by": "Venn1",
      "descendants": 75,
      "id": 47490705,
      "kids": [
        47533662,
        47536416,
        47533659,
        47537284,
        47533927,
        47534910,
        47538644,
        47533607,
        47534392,
        47534152,
        47539491,
        47534266,
        47539384,
        47534265,
        47534755,
        47535302,
        47535702,
        47538087,
        47534432,
        47536827,
        47535983,
        47535375,
        47536379,
        47534244,
        47534141,
        47536373,
        47538874,
        47536834,
        47537049,
        47538093,
        47538881,
        47535450,
        47539141,
        47534093,
        47534979
      ],
      "score": 243,
      "time": 1774279058,
      "title": "DOOM Over DNS",
      "type": "story",
      "url": "https://github.com/resumex/doom-over-dns"
    },
    {
      "by": "varjag",
      "descendants": 2,
      "id": 47495190,
      "kids": [
        47538910,
        47537752,
        47538989,
        47538985
      ],
      "score": 70,
      "time": 1774300396,
      "title": "Whistler: Live eBPF Programming from the Common Lisp REPL",
      "type": "story",
      "url": "https://atgreen.github.io/repl-yell/posts/whistler/"
    },
    {
      "by": "the-mitr",
      "descendants": 3,
      "id": 47492894,
      "kids": [
        47526158
      ],
      "score": 17,
      "time": 1774288591,
      "title": "The Legibility of Serif and Sans Serif Typefaces (2022)",
      "type": "story",
      "url": "https://library.oapen.org//handle/20.500.12657/53344"
    },
    {
      "by": "Fibonar",
      "descendants": 131,
      "id": 47531967,
      "kids": [
        47531968,
        47532515,
        47534740,
        47532318,
        47533420,
        47534907,
        47532924,
        47534045,
        47535576,
        47535440,
        47532909,
        47533207,
        47536543,
        47534751,
        47536269,
        47532094,
        47534273,
        47538465,
        47534040,
        47534483,
        47532491,
        47534006,
        47534363,
        47532640,
        47538740,
        47538750,
        47537717,
        47537723,
        47538890,
        47537619,
        47533674,
        47536693,
        47534853,
        47536094,
        47533298,
        47534346,
        47534844,
        47536704,
        47534440,
        47534043,
        47534491,
        47533439,
        47532804
      ],
      "score": 342,
      "text": "Related: <i>Tell HN: Litellm 1.82.7 and 1.82.8 on PyPI are compromised</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47501426\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47501426</a> (483 comments)",
      "time": 1774540120,
      "title": "My minute-by-minute response to the LiteLLM malware attack",
      "type": "story",
      "url": "https://futuresearch.ai/blog/litellm-attack-transcript/"
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
      "title": "I can't See Apple's Vision",
      "url": "https://matduggan.com/i-cant-see-apples-vision/",
      "score": 38,
      "comments": 19,
      "tags": [
        "design",
        "ios",
        "mac"
      ],
      "id": "znjvvf"
    },
    {
      "title": "EYG is now open source",
      "url": "https://eyg.run/news/editions/6",
      "score": 22,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "i7z3ru"
    },
    {
      "title": "vim-classic: Long-term maintenance of Vim 8.x",
      "url": "https://sr.ht/~sircmpwn/vim-classic/",
      "score": 113,
      "comments": 42,
      "tags": [
        "release",
        "vim"
      ],
      "id": "iqctrn"
    },
    {
      "title": "ROCm 7.1.1: you can (not) build",
      "url": "https://lunnova.dev/articles/rocm-711-you-can-not-build/",
      "score": 17,
      "comments": 3,
      "tags": [
        "graphics",
        "linux"
      ],
      "id": "ob2ijp"
    },
    {
      "title": "Shell Tricks That Actually Make Life Easier (And Save Your Sanity)",
      "url": "https://blog.hofstede.it/shell-tricks-that-actually-make-life-easier-and-save-your-sanity/",
      "score": 123,
      "comments": 32,
      "tags": [
        "unix"
      ],
      "id": "xpx9vi"
    },
    {
      "title": "Lines of code are useful",
      "url": "https://entropicthoughts.com/lines-of-code",
      "score": 20,
      "comments": 23,
      "tags": [
        "practices",
        "science"
      ],
      "id": "cibkd8"
    },
    {
      "title": "ssereload(1) introduction",
      "url": "https://timmarinin.net/2026/ssereload/",
      "score": 8,
      "comments": 0,
      "tags": [
        "lisp",
        "web"
      ],
      "id": "haqvra"
    },
    {
      "title": "IP addresses through 2025",
      "url": "https://blog.apnic.net/2026/01/20/ip-addresses-through-2025/",
      "score": 3,
      "comments": 6,
      "tags": [
        "networking"
      ],
      "id": "tkofyq"
    },
    {
      "title": "Mojo's not (yet) Python",
      "url": "https://theconsensus.dev/p/2026/03/12/mojos-not-yet-python.html",
      "score": 66,
      "comments": 29,
      "tags": [
        "plt",
        "python"
      ],
      "id": "tntlde"
    },
    {
      "title": "Don’t trust software, verify it",
      "url": "https://daniel.haxx.se/blog/2026/03/26/dont-trust-verify/",
      "score": 16,
      "comments": 4,
      "tags": [
        "practices",
        "security"
      ],
      "id": "sazeyn"
    }
  ]
}
```

