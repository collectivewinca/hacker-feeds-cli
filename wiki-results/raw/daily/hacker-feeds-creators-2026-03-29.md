# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-29 06:39:57 UTC

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
      "reactions": 17,
      "comments": 1,
      "reading_time": 5,
      "author": "thormeier"
    },
    {
      "title": "Why Daily Standups Are Becoming Useless in the AI Era",
      "description": "Daily standups used to be a coordination tool. Today, with better async workflows and AI-assisted status sharing, they often waste engineering time at scale.",
      "url": "https://dev.to/oler/why-daily-standups-are-becoming-useless-in-the-ai-era-iao",
      "tags": "agile, standup, ai, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "oler"
    },
    {
      "title": "How to Store Secrets in the Mac Keychain (and Use Them Like Environment Variables)",
      "description": "I used to keep API keys in .env because it was fast. Then I caught myself grepping my home folder for...",
      "url": "https://dev.to/alsaheem/how-to-store-secrets-in-the-mac-keychain-and-use-them-like-environment-variables-1aj7",
      "tags": "macos, security, keychain, bash",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "alsaheem"
    },
    {
      "title": "your agent can think. it can't remember.",
      "description": "TLDR: ghost gives your agent instant, ephemeral postgres databases. unlimited databases, unlimited...",
      "url": "https://dev.to/ghostbuild/your-agent-can-think-it-cant-remember-5e1o",
      "tags": "ai, mcp, postgres, agents",
      "reactions": 147,
      "comments": 44,
      "reading_time": 7,
      "author": "ghostdotbuild"
    },
    {
      "title": "Stop Writing Custom Importers: Import Multilingual Data in Drupal with Migrate API",
      "description": "Most Drupal developers still write custom importers for external data.  In many cases, that’s...",
      "url": "https://dev.to/baikho/stop-writing-custom-importers-import-multilingual-data-in-drupal-with-migrate-api-m35",
      "tags": "drupal, php, opensource, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "baikho"
    },
    {
      "title": "Cross Cloud Multi Agent Comic Builder with ADK, Amazon Fargate, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build low code...",
      "url": "https://dev.to/gde/cross-cloud-multi-agent-comic-builder-with-adk-amazon-fargate-and-gemini-cli-16k9",
      "tags": "gemini, googleadk, googlecloudplatform, python",
      "reactions": 7,
      "comments": 2,
      "reading_time": 7,
      "author": "xbill"
    },
    {
      "title": "Decoding Bronze Age Paperwork: Modern AI vs. Ancient Assyrian Clay Tablets",
      "description": "Four thousand years ago, Assyrian merchants were doing what people have always done: tracking debts,...",
      "url": "https://dev.to/gde/decoding-bronze-age-paperwork-modern-ai-vs-ancient-assyrian-clay-tablets-5adf",
      "tags": "ai, kaggle, gemini, vertexai",
      "reactions": 14,
      "comments": 4,
      "reading_time": 15,
      "author": "erturul_demir_695474ad8d"
    },
    {
      "title": "Modular Monolith Architecture in .NET: The Pragmatic Middle Ground",
      "description": "The Problem No One Talks About in the Microservices Hype   It's 2019. Your team has just...",
      "url": "https://dev.to/aldacosta/modular-monolith-architecture-in-net-the-pragmatic-middle-ground-2fm5",
      "tags": "dotnet, architecture",
      "reactions": 4,
      "comments": 0,
      "reading_time": 8,
      "author": "aldacosta"
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
      "forks": 14988,
      "added_stars": 21644,
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
      "author": "jarrodwatts",
      "repo": "claude-hud",
      "avatar": "https://github.com/jarrodwatts.png",
      "repo_link": "https://github.com/jarrodwatts/claude-hud",
      "desc": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 602,
      "added_stars": 4505,
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
      "author": "figma",
      "repo": "mcp-server-guide",
      "avatar": "https://github.com/figma.png",
      "repo_link": "https://github.com/figma/mcp-server-guide",
      "desc": "A guide on how to use the Figma MCP server",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 57,
      "added_stars": 282,
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
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3567,
      "added_stars": 6196,
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
      "forks": 2596,
      "added_stars": 1957,
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
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Connect All AI Code Tools (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) to 40+ AI Providers & 100+ Models",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 365,
      "added_stars": 221,
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
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 618,
      "added_stars": 2582,
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
      "author": "simple-icons",
      "repo": "simple-icons",
      "avatar": "https://github.com/simple-icons.png",
      "repo_link": "https://github.com/simple-icons/simple-icons",
      "desc": "SVG icons for popular brands",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3087,
      "added_stars": 116,
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
      "author": "plankanban",
      "repo": "planka",
      "avatar": "https://github.com/plankanban.png",
      "repo_link": "https://github.com/plankanban/planka",
      "desc": "PLANKA is the Kanban-style project mastering tool for everyone",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1214,
      "added_stars": 60,
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
      "author": "nodejs",
      "repo": "node",
      "avatar": "https://github.com/nodejs.png",
      "repo_link": "https://github.com/nodejs/node",
      "desc": "Node.js JavaScript runtime ✨🐢🚀✨",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 35199,
      "added_stars": 194,
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
      "author": "markedjs",
      "repo": "marked",
      "avatar": "https://github.com/markedjs.png",
      "repo_link": "https://github.com/markedjs/marked",
      "desc": "A markdown parser and compiler. Built for speed.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3516,
      "added_stars": 76,
      "builtBy": [
        {
          "username": "UziTech",
          "href": "https://github.com/UziTech",
          "avatar": "https://avatars.githubusercontent.com/u/97994"
        },
        {
          "username": "chjj",
          "href": "https://github.com/chjj",
          "avatar": "https://avatars.githubusercontent.com/u/470564"
        },
        {
          "username": "styfle",
          "href": "https://github.com/styfle",
          "avatar": "https://avatars.githubusercontent.com/u/229881"
        },
        {
          "username": "Feder1co5oave",
          "href": "https://github.com/Feder1co5oave",
          "avatar": "https://avatars.githubusercontent.com/u/1869444"
        }
      ]
    },
    {
      "author": "MobSF",
      "repo": "Mobile-Security-Framework-MobSF",
      "avatar": "https://github.com/MobSF.png",
      "repo_link": "https://github.com/MobSF/Mobile-Security-Framework-MobSF",
      "desc": "Mobile Security Framework (MobSF) is an automated, all-in-one mobile application (Android/iOS/Windows) pen-testing, malware analysis and security assessment framework capable of performing static and dynamic analysis.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3634,
      "added_stars": 62,
      "builtBy": [
        {
          "username": "ajinabraham",
          "href": "https://github.com/ajinabraham",
          "avatar": "https://avatars.githubusercontent.com/u/4301109"
        },
        {
          "username": "superpoussin22",
          "href": "https://github.com/superpoussin22",
          "avatar": "https://avatars.githubusercontent.com/u/27353689"
        },
        {
          "username": "pyup-bot",
          "href": "https://github.com/pyup-bot",
          "avatar": "https://avatars.githubusercontent.com/u/16239342"
        },
        {
          "username": "sydowma",
          "href": "https://github.com/sydowma",
          "avatar": "https://avatars.githubusercontent.com/u/3363787"
        },
        {
          "username": "sn0b4ll",
          "href": "https://github.com/sn0b4ll",
          "avatar": "https://avatars.githubusercontent.com/u/1722036"
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
      "title": "Why Daily Standups Are Becoming Useless in the AI Era",
      "description": "Daily standups used to be a coordination tool. Today, with better async workflows and AI-assisted status sharing, they often waste engineering time at scale.",
      "url": "https://dev.to/oler/why-daily-standups-are-becoming-useless-in-the-ai-era-iao",
      "tags": "agile, standup, ai, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "oler"
    },
    {
      "title": "AI Coding Agents Are Great, but They Suck at RTL. Here's How I Fixed It",
      "description": "AI coding agents always generate broken RTL layouts. RTLify fixes this with one command.",
      "url": "https://dev.to/idanlevi1/ai-coding-agents-are-great-but-they-suck-at-rtl-heres-how-i-fixed-it-2g0g",
      "tags": "ai, rtl, react, javascript",
      "reactions": 0,
      "comments": 1,
      "reading_time": 4,
      "author": "idanlevi1"
    },
    {
      "title": "Decoding Bronze Age Paperwork: Modern AI vs. Ancient Assyrian Clay Tablets",
      "description": "Four thousand years ago, Assyrian merchants were doing what people have always done: tracking debts,...",
      "url": "https://dev.to/gde/decoding-bronze-age-paperwork-modern-ai-vs-ancient-assyrian-clay-tablets-5adf",
      "tags": "ai, kaggle, gemini, vertexai",
      "reactions": 17,
      "comments": 4,
      "reading_time": 15,
      "author": "erturul_demir_695474ad8d"
    },
    {
      "title": "your agent can think. it can't remember.",
      "description": "TLDR: ghost gives your agent instant, ephemeral postgres databases. unlimited databases, unlimited...",
      "url": "https://dev.to/ghostbuild/your-agent-can-think-it-cant-remember-5e1o",
      "tags": "ai, mcp, postgres, agents",
      "reactions": 147,
      "comments": 44,
      "reading_time": 7,
      "author": "ghostdotbuild"
    },
    {
      "title": "Telegram Bridges for Gemini CLI and Codex After Hitting Claude Code Limits",
      "description": "Claude Code limits made me realize the real dependency was the workflow. I built a local-first Telegram bridge for Gemini CLI and Codex to get the async mobile loop back.",
      "url": "https://dev.to/kaz123/telegram-bridges-for-gemini-cli-and-codex-after-hitting-claude-code-limits-3cc1",
      "tags": "ai, telegram, codex, gemini",
      "reactions": 0,
      "comments": 2,
      "reading_time": 4,
      "author": "kaz123"
    },
    {
      "title": "Show DEV: PressArk - Talk to Your WordPress Site Instead of Clicking Through It",
      "description": "Hey DEV! I built an AI co-pilot that lives inside your WordPress admin dashboard. Instead of clicking...",
      "url": "https://dev.to/abdelali_selouani_55871ee/show-dev-pressark-talk-to-your-wordpress-site-instead-of-clicking-through-it-1hb5",
      "tags": "showdev, wordpress, ai, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "abdelali_selouani_55871ee"
    },
    {
      "title": "Gemini 3.1: Real-World Voice Recognition with Flash Live: Making Your LINE Bot Understand You",
      "description": "Background   Google released Gemini 3.1 Flash Live at the end of March 2026 March,...",
      "url": "https://dev.to/gde/gemini-31-real-world-voice-recognition-with-flash-live-making-your-line-bot-understand-you-560o",
      "tags": "ai, gemini, python, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 10,
      "author": "evanlin"
    },
    {
      "title": "HOW A REQUEST ORGINATES FROM CLIENT AND REACHES THE SERVER?",
      "description": "How a Request Travels from Client to Server  A client is simply the end user who makes a request,...",
      "url": "https://dev.to/ashiq_omar/how-a-request-orginates-from-client-and-reaches-the-server-6b9",
      "tags": "ai, beginners, devops, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "ashiq_omar"
    },
    {
      "title": "OpenAI Just Put a Bounty on Prompt Injection. Here's How to Defend Against It Today.",
      "description": "OpenAI Just Put a Bounty on Prompt Injection. Here's How to Defend Against It...",
      "url": "https://dev.to/darbogach/openai-just-put-a-bounty-on-prompt-injection-heres-how-to-defend-against-it-today-4jfd",
      "tags": "ai, security, promptinjection, agents",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "darbogach"
    },
    {
      "title": "EU Deepfake Nudifier Ban Exposes a Verification Crisis for Investigators",
      "description": "The technical challenges of digital verification have reached a fever pitch. The EU's move to ban...",
      "url": "https://dev.to/caracomp/eu-deepfake-nudifier-ban-exposes-a-verification-crisis-for-investigators-55in",
      "tags": "ai, machinelearning, computervision, biometrics",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "caracomp"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "wangzhangwu",
      "descendants": 15,
      "id": 47560380,
      "kids": [
        47560881,
        47560798,
        47560542,
        47560821,
        47560745,
        47560711,
        47560393,
        47560601,
        47560531,
        47560381,
        47560555,
        47560650
      ],
      "score": 53,
      "time": 1774758373,
      "title": "OpenYak – An open-source Cowork that runs any model and owns your filesystem",
      "type": "story",
      "url": "https://github.com/openyak/desktop"
    },
    {
      "by": "bob_theslob646",
      "descendants": 193,
      "id": 47556729,
      "kids": [
        47557260,
        47558260,
        47560794,
        47558681,
        47557038,
        47560766,
        47557106,
        47557780,
        47557494,
        47559859,
        47558051,
        47558970,
        47558252,
        47556934,
        47560295,
        47557022,
        47556872,
        47558312,
        47557019,
        47556975,
        47559012,
        47559222,
        47557150,
        47556907,
        47557107,
        47558804,
        47557528,
        47557543,
        47559071,
        47558708,
        47557129,
        47557577,
        47560124,
        47557461,
        47558527,
        47559585,
        47556887,
        47558489,
        47558539,
        47557692,
        47557326
      ],
      "score": 878,
      "time": 1774719589,
      "title": "Founder of GitLab battles cancer by founding companies",
      "type": "story",
      "url": "https://sytse.com/cancer/"
    },
    {
      "by": "msephton",
      "descendants": 63,
      "id": 47557960,
      "kids": [
        47560880,
        47560823,
        47558631,
        47558242,
        47560421,
        47558097,
        47559047,
        47558852,
        47560737,
        47559617,
        47558083,
        47558087,
        47558395,
        47558861,
        47559428,
        47559417,
        47559580,
        47558121,
        47558296,
        47559592,
        47558806,
        47558376,
        47558228,
        47560618,
        47558311,
        47559102,
        47559181,
        47559629,
        47559715,
        47559499,
        47558541,
        47559754,
        47558678,
        47558027
      ],
      "score": 270,
      "time": 1774730341,
      "title": "CSS is DOOMed",
      "type": "story",
      "url": "https://nielsleenheer.com/articles/2026/css-is-doomed-rendering-doom-in-3d-with-css/"
    },
    {
      "by": "oldfrenchfries",
      "descendants": 448,
      "id": 47554773,
      "kids": [
        47556125,
        47556522,
        47555768,
        47555527,
        47555285,
        47555140,
        47555632,
        47560683,
        47560377,
        47555406,
        47560308,
        47555572,
        47554981,
        47555379,
        47556026,
        47558560,
        47559337,
        47556197,
        47556280,
        47555453,
        47560267,
        47557234,
        47555438,
        47557293,
        47556992,
        47556463,
        47560473,
        47555167,
        47558981,
        47559332,
        47556094,
        47559249,
        47555304,
        47558137,
        47556476,
        47556318,
        47557774,
        47558652,
        47556974,
        47555675,
        47555454,
        47557449,
        47556774,
        47556686,
        47555713,
        47555086,
        47556023,
        47556718,
        47555824,
        47559089,
        47556417,
        47555855,
        47555423,
        47560249,
        47556372,
        47555942,
        47556893,
        47555629,
        47557442,
        47555452,
        47559397,
        47556434,
        47554776,
        47556439,
        47555233,
        47558701,
        47556397,
        47559167,
        47555916,
        47558130,
        47555663,
        47555854,
        47555139,
        47556855,
        47556109,
        47556351,
        47555869,
        47555383,
        47555143,
        47555670,
        47560556,
        47559179,
        47558520,
        47559380,
        47558587,
        47557807,
        47559544,
        47556542,
        47558245,
        47556910,
        47555889,
        47557373,
        47558880,
        47556672,
        47555886,
        47557143,
        47556449,
        47558566,
        47555199,
        47555945,
        47555890,
        47556195,
        47555146,
        47555323,
        47555125,
        47555108
      ],
      "score": 595,
      "text": "<a href=\"https:&#x2F;&#x2F;arxiv.org&#x2F;abs&#x2F;2602.14270\" rel=\"nofollow\">https:&#x2F;&#x2F;arxiv.org&#x2F;abs&#x2F;2602.14270</a><p><a href=\"https:&#x2F;&#x2F;www.science.org&#x2F;doi&#x2F;10.1126&#x2F;science.aec8352\" rel=\"nofollow\">https:&#x2F;&#x2F;www.science.org&#x2F;doi&#x2F;10.1126&#x2F;science.aec8352</a>",
      "time": 1774706913,
      "title": "AI overly affirms users asking for personal advice",
      "type": "story",
      "url": "https://news.stanford.edu/stories/2026/03/ai-advice-sycophantic-models-research"
    },
    {
      "by": "bookofjoe",
      "descendants": 46,
      "id": 47559481,
      "kids": [
        47559685,
        47560469,
        47559763,
        47559988,
        47560299,
        47559701,
        47560539,
        47560451,
        47559688,
        47559729,
        47559898,
        47559907,
        47560364,
        47559751,
        47560182,
        47560189,
        47559714,
        47559698
      ],
      "score": 89,
      "time": 1774745610,
      "title": "Alzheimer's disease mortality among taxi and ambulance drivers (2024)",
      "type": "story",
      "url": "https://www.bmj.com/content/387/bmj-2024-082194"
    },
    {
      "by": "signa11",
      "descendants": 3,
      "id": 47528853,
      "kids": [
        47560047
      ],
      "score": 49,
      "time": 1774522056,
      "title": "A Verilog to Factorio Compiler and Simulator (Working RISC-V CPU)",
      "type": "story",
      "url": "https://github.com/ben-j-c/verilog2factorio"
    },
    {
      "by": "jcmartinezdev",
      "descendants": 15,
      "id": 47508078,
      "kids": [
        47560625,
        47560871,
        47560633,
        47560804,
        47560626,
        47560620,
        47560757
      ],
      "score": 23,
      "time": 1774381796,
      "title": "The case for becoming a manager",
      "type": "story",
      "url": "https://newsletter.thelongcommit.com/p/the-case-for-becoming-a-manager"
    },
    {
      "by": "rbanffy",
      "descendants": 8,
      "id": 47543186,
      "kids": [
        47559408,
        47560519,
        47560306,
        47560316
      ],
      "score": 78,
      "time": 1774622391,
      "title": "OpenBSD on Motorola 88000 Processors",
      "type": "story",
      "url": "http://miod.online.fr/software/openbsd/stories/m88k1.html"
    },
    {
      "by": "Kirkman14",
      "descendants": 1,
      "id": 47536306,
      "kids": [
        47536307
      ],
      "score": 17,
      "time": 1774562058,
      "title": "The ANSI art \"telecomics\" of the 1992 election",
      "type": "story",
      "url": "https://breakintochat.com/blog/2026/03/25/don-lokke-and-mack-the-mouse/"
    },
    {
      "by": "mean_mistreater",
      "descendants": 122,
      "id": 47557166,
      "kids": [
        47558172,
        47558377,
        47560678,
        47558360,
        47558842,
        47558628,
        47557876,
        47558887,
        47557425,
        47558948,
        47558555
      ],
      "score": 186,
      "text": "<i>Knuth Claude&#x27;s Cycles note update: problem now fully solved, by LLMs</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47306926\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47306926</a> - March 2026 (2 comments)<p><a href=\"https:&#x2F;&#x2F;chatgpt.com&#x2F;share&#x2F;69aaab4b-888c-8003-9a02-d1df80f9c791\" rel=\"nofollow\">https:&#x2F;&#x2F;chatgpt.com&#x2F;share&#x2F;69aaab4b-888c-8003-9a02-d1df80f9c7...</a><p><i>Claude&#x27;s Cycles [pdf]</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47230710\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47230710</a> - March 2026 (362 comments)",
      "time": 1774723139,
      "title": "Further human + AI + proof assistant work on Knuth's \"Claude Cycles\" problem",
      "type": "story",
      "url": "https://twitter.com/BoWang87/status/2037648937453232504"
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
      "by": "wangzhangwu",
      "descendants": 15,
      "id": 47560380,
      "kids": [
        47560881,
        47560798,
        47560542,
        47560821,
        47560745,
        47560711,
        47560393,
        47560601,
        47560531,
        47560381,
        47560555,
        47560650
      ],
      "score": 53,
      "time": 1774758373,
      "title": "OpenYak – An open-source Cowork that runs any model and owns your filesystem",
      "type": "story",
      "url": "https://github.com/openyak/desktop"
    },
    {
      "by": "bob_theslob646",
      "descendants": 193,
      "id": 47556729,
      "kids": [
        47557260,
        47558260,
        47560794,
        47558681,
        47557038,
        47560766,
        47557106,
        47557780,
        47557494,
        47559859,
        47558051,
        47558970,
        47558252,
        47556934,
        47560295,
        47557022,
        47556872,
        47558312,
        47557019,
        47556975,
        47559012,
        47559222,
        47557150,
        47556907,
        47557107,
        47558804,
        47557528,
        47557543,
        47559071,
        47558708,
        47557129,
        47557577,
        47560124,
        47557461,
        47558527,
        47559585,
        47556887,
        47558489,
        47558539,
        47557692,
        47557326
      ],
      "score": 878,
      "time": 1774719589,
      "title": "Founder of GitLab battles cancer by founding companies",
      "type": "story",
      "url": "https://sytse.com/cancer/"
    },
    {
      "by": "msephton",
      "descendants": 63,
      "id": 47557960,
      "kids": [
        47560880,
        47560823,
        47558631,
        47558242,
        47560421,
        47558097,
        47559047,
        47558852,
        47560737,
        47559617,
        47558083,
        47558087,
        47558395,
        47558861,
        47559428,
        47559417,
        47559580,
        47558121,
        47558296,
        47559592,
        47558806,
        47558376,
        47558228,
        47560618,
        47558311,
        47559102,
        47559181,
        47559629,
        47559715,
        47559499,
        47558541,
        47559754,
        47558678,
        47558027
      ],
      "score": 270,
      "time": 1774730341,
      "title": "CSS is DOOMed",
      "type": "story",
      "url": "https://nielsleenheer.com/articles/2026/css-is-doomed-rendering-doom-in-3d-with-css/"
    },
    {
      "by": "oldfrenchfries",
      "descendants": 448,
      "id": 47554773,
      "kids": [
        47556125,
        47556522,
        47555768,
        47555527,
        47555285,
        47555140,
        47555632,
        47560683,
        47560377,
        47555406,
        47560308,
        47555572,
        47554981,
        47555379,
        47556026,
        47558560,
        47559337,
        47556197,
        47556280,
        47555453,
        47560267,
        47557234,
        47555438,
        47557293,
        47556992,
        47556463,
        47560473,
        47555167,
        47558981,
        47559332,
        47556094,
        47559249,
        47555304,
        47558137,
        47556476,
        47556318,
        47557774,
        47558652,
        47556974,
        47555675,
        47555454,
        47557449,
        47556774,
        47556686,
        47555713,
        47555086,
        47556023,
        47556718,
        47555824,
        47559089,
        47556417,
        47555855,
        47555423,
        47560249,
        47556372,
        47555942,
        47556893,
        47555629,
        47557442,
        47555452,
        47559397,
        47556434,
        47554776,
        47556439,
        47555233,
        47558701,
        47556397,
        47559167,
        47555916,
        47558130,
        47555663,
        47555854,
        47555139,
        47556855,
        47556109,
        47556351,
        47555869,
        47555383,
        47555143,
        47555670,
        47560556,
        47559179,
        47558520,
        47559380,
        47558587,
        47557807,
        47559544,
        47556542,
        47558245,
        47556910,
        47555889,
        47557373,
        47558880,
        47556672,
        47555886,
        47557143,
        47556449,
        47558566,
        47555199,
        47555945,
        47555890,
        47556195,
        47555146,
        47555323,
        47555125,
        47555108
      ],
      "score": 595,
      "text": "<a href=\"https:&#x2F;&#x2F;arxiv.org&#x2F;abs&#x2F;2602.14270\" rel=\"nofollow\">https:&#x2F;&#x2F;arxiv.org&#x2F;abs&#x2F;2602.14270</a><p><a href=\"https:&#x2F;&#x2F;www.science.org&#x2F;doi&#x2F;10.1126&#x2F;science.aec8352\" rel=\"nofollow\">https:&#x2F;&#x2F;www.science.org&#x2F;doi&#x2F;10.1126&#x2F;science.aec8352</a>",
      "time": 1774706913,
      "title": "AI overly affirms users asking for personal advice",
      "type": "story",
      "url": "https://news.stanford.edu/stories/2026/03/ai-advice-sycophantic-models-research"
    },
    {
      "by": "bookofjoe",
      "descendants": 46,
      "id": 47559481,
      "kids": [
        47559685,
        47560469,
        47559763,
        47559988,
        47560299,
        47559701,
        47560539,
        47560451,
        47559688,
        47559729,
        47559898,
        47559907,
        47560364,
        47559751,
        47560182,
        47560189,
        47559714,
        47559698
      ],
      "score": 89,
      "time": 1774745610,
      "title": "Alzheimer's disease mortality among taxi and ambulance drivers (2024)",
      "type": "story",
      "url": "https://www.bmj.com/content/387/bmj-2024-082194"
    },
    {
      "by": "signa11",
      "descendants": 3,
      "id": 47528853,
      "kids": [
        47560047
      ],
      "score": 49,
      "time": 1774522056,
      "title": "A Verilog to Factorio Compiler and Simulator (Working RISC-V CPU)",
      "type": "story",
      "url": "https://github.com/ben-j-c/verilog2factorio"
    },
    {
      "by": "jcmartinezdev",
      "descendants": 15,
      "id": 47508078,
      "kids": [
        47560625,
        47560871,
        47560633,
        47560804,
        47560626,
        47560620,
        47560757
      ],
      "score": 23,
      "time": 1774381796,
      "title": "The case for becoming a manager",
      "type": "story",
      "url": "https://newsletter.thelongcommit.com/p/the-case-for-becoming-a-manager"
    },
    {
      "by": "rbanffy",
      "descendants": 8,
      "id": 47543186,
      "kids": [
        47559408,
        47560519,
        47560306,
        47560316
      ],
      "score": 78,
      "time": 1774622391,
      "title": "OpenBSD on Motorola 88000 Processors",
      "type": "story",
      "url": "http://miod.online.fr/software/openbsd/stories/m88k1.html"
    },
    {
      "by": "Kirkman14",
      "descendants": 1,
      "id": 47536306,
      "kids": [
        47536307
      ],
      "score": 17,
      "time": 1774562058,
      "title": "The ANSI art \"telecomics\" of the 1992 election",
      "type": "story",
      "url": "https://breakintochat.com/blog/2026/03/25/don-lokke-and-mack-the-mouse/"
    },
    {
      "by": "mean_mistreater",
      "descendants": 122,
      "id": 47557166,
      "kids": [
        47558172,
        47558377,
        47560678,
        47558360,
        47558842,
        47558628,
        47557876,
        47558887,
        47557425,
        47558948,
        47558555
      ],
      "score": 186,
      "text": "<i>Knuth Claude&#x27;s Cycles note update: problem now fully solved, by LLMs</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47306926\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47306926</a> - March 2026 (2 comments)<p><a href=\"https:&#x2F;&#x2F;chatgpt.com&#x2F;share&#x2F;69aaab4b-888c-8003-9a02-d1df80f9c791\" rel=\"nofollow\">https:&#x2F;&#x2F;chatgpt.com&#x2F;share&#x2F;69aaab4b-888c-8003-9a02-d1df80f9c7...</a><p><i>Claude&#x27;s Cycles [pdf]</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47230710\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47230710</a> - March 2026 (362 comments)",
      "time": 1774723139,
      "title": "Further human + AI + proof assistant work on Knuth's \"Claude Cycles\" problem",
      "type": "story",
      "url": "https://twitter.com/BoWang87/status/2037648937453232504"
    },
    {
      "by": "amarcheschi",
      "descendants": 179,
      "id": 47555556,
      "kids": [
        47556256,
        47555983,
        47560152,
        47555905,
        47556002,
        47559115,
        47558963,
        47558773,
        47555992,
        47559112,
        47559886,
        47556842,
        47555888,
        47555921,
        47559919,
        47556314,
        47555877,
        47556760,
        47556054,
        47560139,
        47557820,
        47559719,
        47557499,
        47557532,
        47558104,
        47557984,
        47555995,
        47557116,
        47557192,
        47557076,
        47556210,
        47556689,
        47555859,
        47556331,
        47557828
      ],
      "score": 470,
      "time": 1774712237,
      "title": "I decompiled the White House's new app",
      "type": "story",
      "url": "https://thereallo.dev/blog/decompiling-the-white-house-app"
    },
    {
      "by": "gggscript",
      "descendants": 4,
      "id": 47552643,
      "kids": [
        47559727,
        47560008,
        47560335
      ],
      "score": 43,
      "time": 1774686206,
      "title": "Cat Itecture: Better Cat Window Boxes",
      "type": "story",
      "url": "https://gwern.net/catitecture"
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
      "title": "I Decompiled the White House's New App",
      "url": "https://blog.thereallo.dev/blog/decompiling-the-white-house-app",
      "score": 49,
      "comments": 8,
      "tags": [
        "android"
      ],
      "id": "2zvgxm"
    },
    {
      "title": "Linux, finally for everyone",
      "url": "https://yololinux.com",
      "score": 44,
      "comments": 20,
      "tags": [
        "linux",
        "vibecoding"
      ],
      "id": "bwyqi9"
    },
    {
      "title": "BubbleWrap your dev env and agents",
      "url": "https://dpc.pw/posts/bubblewrap-your-dev-env-and-agents/",
      "score": 14,
      "comments": 8,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "u4bws9"
    },
    {
      "title": "6o6 v1.1: Faster 6502-on-6502 virtualization for a C64/Apple II Apple-1 emulator",
      "url": "http://oldvcr.blogspot.com/2026/03/6o6-v11-faster-6502-on-6502.html",
      "score": 7,
      "comments": 0,
      "tags": [
        "retrocomputing"
      ],
      "id": "sy7ctg"
    },
    {
      "title": "Linux is an interpreter",
      "url": "https://astrid.tech/2026/03/28/0/linux-is-an-interpreter/",
      "score": 26,
      "comments": 0,
      "tags": [
        "linux"
      ],
      "id": "wy4ndf"
    },
    {
      "title": "Building a guitar trainer with embedded Rust",
      "url": "https://blog.orhun.dev/introducing-tuitar/",
      "score": 25,
      "comments": 7,
      "tags": [
        "rust",
        "show"
      ],
      "id": "zb2rqd"
    },
    {
      "title": "Legacy PC design misery",
      "url": "https://mjg59.livejournal.com/118098.html",
      "score": 8,
      "comments": 0,
      "tags": [
        "retrocomputing"
      ],
      "id": "bywfs1"
    },
    {
      "title": "heerich.js - A tiny engine for 3D voxel scenes rendered to SVG",
      "url": "https://meodai.github.io/heerich",
      "score": 3,
      "comments": 1,
      "tags": [
        "art",
        "javascript"
      ],
      "id": "qqpc7k"
    },
    {
      "title": "Translating non-trivial codebases with Claude",
      "url": "https://blog.danieljanus.pl/2026/03/26/claude-nlp/",
      "score": 15,
      "comments": 3,
      "tags": [
        "education",
        "vibecoding"
      ],
      "id": "rlhm21"
    },
    {
      "title": "Adventures in cellular location services",
      "url": "https://nickvsnetworking.com/somebodys-watching-me-adventures-in-cellular-locating/",
      "score": 14,
      "comments": 0,
      "tags": [
        "mobile",
        "privacy"
      ],
      "id": "i95lfw"
    }
  ]
}
```

