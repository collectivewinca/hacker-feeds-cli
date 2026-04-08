# Hacker Feeds Outcomes - Creators

Generated on: 2026-04-08 06:48:39 UTC

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
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-4idc",
      "tags": "top7, discuss",
      "reactions": 53,
      "comments": 10,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Move over, Vibe-Coding: I built an AI editor for STRESS-CODING",
      "description": "This is a submission for the DEV April Fools Challenge  Quantum Collapse is a React editor that...",
      "url": "https://dev.to/phalkmin/move-over-vibe-coding-i-built-an-ai-editor-for-stress-coding-4243",
      "tags": "devchallenge, 418challenge, showdev",
      "reactions": 28,
      "comments": 5,
      "reading_time": 3,
      "author": "phalkmin"
    },
    {
      "title": "Sharing CodePen 2.0 demos on DEV",
      "description": "How to share CodePen 2.0 demos on DEV",
      "url": "https://dev.to/alvaromontoro/sharing-codepen-20-demos-on-dev-273",
      "tags": "meta, dev",
      "reactions": 4,
      "comments": 3,
      "reading_time": 2,
      "author": "alvaromontoro"
    },
    {
      "title": "MCP Development with Gemini CLI, and Amazon AWS EKS",
      "description": "Leveraging Gemini CLI and the underlying Gemini LLM to build Model Context Protocol (MCP) AI...",
      "url": "https://dev.to/gde/mcp-development-with-gemini-cli-and-amazon-aws-eks-bm",
      "tags": "eks, python, gemini, mcps",
      "reactions": 6,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
    },
    {
      "title": "Deploying ADK Agents on Azure Fabric",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Agents in...",
      "url": "https://dev.to/gde/deploying-adk-agents-on-azure-fabric-48mf",
      "tags": "azure, gemini, python, googleadk",
      "reactions": 3,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Master-Class: Understanding Database Replication (Single, Multi, and Leaderless)",
      "description": "A deep dive into Single Leader, Multi-Leader, and Leaderless replication algorithms for distributed systems.",
      "url": "https://dev.to/piyush6348/master-class-understanding-database-replication-single-multi-and-leaderless-hhm",
      "tags": "systemdesign, backend, database, distributedsystems",
      "reactions": 3,
      "comments": 0,
      "reading_time": 3,
      "author": "piyush6348"
    },
    {
      "title": "Agentic interaction using AppFunctions",
      "description": "Given the rise of agentic interaction on Android, we need a fast, reliable API to make app...",
      "url": "https://dev.to/tkuenneth/agentic-interaction-using-appfunctions-m8k",
      "tags": "ai, android, programming",
      "reactions": 14,
      "comments": 0,
      "reading_time": 10,
      "author": "tkuenneth"
    },
    {
      "title": "Agent Factory Recap: Supercharging Agents on GKE with Agent Sandbox and Pod Snapshots",
      "description": "In the latest episode of the Agent Factory, Mofi Rahman and I had the pleasure of hosting, Brandon...",
      "url": "https://dev.to/googleai/agent-factory-recap-supercharging-agents-on-gke-with-agent-sandbox-and-pod-snapshots-3a5e",
      "tags": "ai, agents, kubernetes",
      "reactions": 18,
      "comments": 2,
      "reading_time": 4,
      "author": "shirmeirlador"
    },
    {
      "title": "Join our April Fools Challenge for a chance at TEA-RRIFIC prizes!!!",
      "description": "Hello, and let’s get this out of the way right now: this is no joke!!  Tired of building...",
      "url": "https://dev.to/devteam/join-our-april-fools-challenge-for-a-chance-at-tea-rrific-prizes-1ofa",
      "tags": "devchallenge, 418challenge, jokes",
      "reactions": 312,
      "comments": 81,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Observability at Scale: Mastering ADK Callbacks for Cost, Latency, and Auditability [GDE]",
      "description": "AI orchestrators receive significant attention; however, when deployments become latent and costly,...",
      "url": "https://dev.to/gde/observability-at-scale-mastering-adk-callbacks-for-cost-latency-and-auditability-1mo5",
      "tags": "agents, tutorial, ai, typescript",
      "reactions": 22,
      "comments": 8,
      "reading_time": 12,
      "author": "railsstudent"
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
      "author": "axios",
      "repo": "axios",
      "avatar": "https://github.com/axios.png",
      "repo_link": "https://github.com/axios/axios",
      "desc": "Promise based HTTP client for the browser and node.js",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 11601,
      "added_stars": 437,
      "builtBy": [
        {
          "username": "jasonsaayman",
          "href": "https://github.com/jasonsaayman",
          "avatar": "https://avatars.githubusercontent.com/u/4814473"
        },
        {
          "username": "mzabriskie",
          "href": "https://github.com/mzabriskie",
          "avatar": "https://avatars.githubusercontent.com/u/199035"
        },
        {
          "username": "DigitalBrainJS",
          "href": "https://github.com/DigitalBrainJS",
          "avatar": "https://avatars.githubusercontent.com/u/12586868"
        },
        {
          "username": "nickuraltsev",
          "href": "https://github.com/nickuraltsev",
          "avatar": "https://avatars.githubusercontent.com/u/6316432"
        }
      ]
    },
    {
      "author": "ComposioHQ",
      "repo": "open-claude-cowork",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/open-claude-cowork",
      "desc": "Open Source version of Claude Cowork with 500+ SaaS app integrations",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 588,
      "added_stars": 513,
      "builtBy": [
        {
          "username": "sujayjayjay",
          "href": "https://github.com/sujayjayjay",
          "avatar": "https://avatars.githubusercontent.com/u/84703335"
        },
        {
          "username": "Prat011",
          "href": "https://github.com/Prat011",
          "avatar": "https://avatars.githubusercontent.com/u/67639393"
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
      "forks": 93,
      "added_stars": 161,
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
      "author": "affaan-m",
      "repo": "everything-claude-code",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/everything-claude-code",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 22330,
      "added_stars": 19944,
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
      "author": "maboloshi",
      "repo": "github-chinese",
      "avatar": "https://github.com/maboloshi.png",
      "repo_link": "https://github.com/maboloshi/github-chinese",
      "desc": "GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1261,
      "added_stars": 506,
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
      "author": "Mintplex-Labs",
      "repo": "anything-llm",
      "avatar": "https://github.com/Mintplex-Labs.png",
      "repo_link": "https://github.com/Mintplex-Labs/anything-llm",
      "desc": "The all-in-one AI productivity accelerator. On device and privacy first with no annoying setup or configuration.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6256,
      "added_stars": 657,
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
      "author": "rohitg00",
      "repo": "awesome-claude-code-toolkit",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/awesome-claude-code-toolkit",
      "desc": "The most comprehensive toolkit for Claude Code -- 135 agents, 35 curated skills (+400,000 via SkillKit), 42 commands, 150+ plugins, 19 hooks, 15 rules, 7 templates, 8 MCP configs, and more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 316,
      "added_stars": 161,
      "builtBy": [
        {
          "username": "rohitg00",
          "href": "https://github.com/rohitg00",
          "avatar": "https://avatars.githubusercontent.com/u/48523873"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "fullstackcrew-alpha",
          "href": "https://github.com/fullstackcrew-alpha",
          "avatar": "https://avatars.githubusercontent.com/u/249457019"
        },
        {
          "username": "luiseiman",
          "href": "https://github.com/luiseiman",
          "avatar": "https://avatars.githubusercontent.com/u/6222305"
        },
        {
          "username": "rmolines",
          "href": "https://github.com/rmolines",
          "avatar": "https://avatars.githubusercontent.com/u/11565308"
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
      "forks": 510,
      "added_stars": 372,
      "builtBy": [
        {
          "username": "anuragg-saxenaa",
          "href": "https://github.com/anuragg-saxenaa",
          "avatar": "https://avatars.githubusercontent.com/u/17893081"
        },
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
      "author": "ChrisWiles",
      "repo": "claude-code-showcase",
      "avatar": "https://github.com/ChrisWiles.png",
      "repo_link": "https://github.com/ChrisWiles/claude-code-showcase",
      "desc": "Comprehensive Claude Code project configuration example with hooks, skills, agents, commands, and GitHub Actions workflows",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 516,
      "added_stars": 100,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ChrisWiles",
          "href": "https://github.com/ChrisWiles",
          "avatar": "https://avatars.githubusercontent.com/u/9455409"
        }
      ]
    },
    {
      "author": "DavidHDev",
      "repo": "react-bits",
      "avatar": "https://github.com/DavidHDev.png",
      "repo_link": "https://github.com/DavidHDev/react-bits",
      "desc": "An open source collection of animated, interactive & fully customizable React components for building memorable websites.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1678,
      "added_stars": 331,
      "builtBy": [
        {
          "username": "DavidHDev",
          "href": "https://github.com/DavidHDev",
          "avatar": "https://avatars.githubusercontent.com/u/48634587"
        },
        {
          "username": "PedroMarianoAlmeida",
          "href": "https://github.com/PedroMarianoAlmeida",
          "avatar": "https://avatars.githubusercontent.com/u/59484474"
        },
        {
          "username": "ieedan",
          "href": "https://github.com/ieedan",
          "avatar": "https://avatars.githubusercontent.com/u/117548273"
        },
        {
          "username": "EnderRomantice",
          "href": "https://github.com/EnderRomantice",
          "avatar": "https://avatars.githubusercontent.com/u/176131572"
        },
        {
          "username": "ipuppyyt",
          "href": "https://github.com/ipuppyyt",
          "avatar": "https://avatars.githubusercontent.com/u/71689062"
        }
      ]
    },
    {
      "author": "phaserjs",
      "repo": "phaser",
      "avatar": "https://github.com/phaserjs.png",
      "repo_link": "https://github.com/phaserjs/phaser",
      "desc": "Phaser is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7131,
      "added_stars": 64,
      "builtBy": [
        {
          "username": "photonstorm",
          "href": "https://github.com/photonstorm",
          "avatar": "https://avatars.githubusercontent.com/u/164476"
        },
        {
          "username": "pavle-goloskokovic",
          "href": "https://github.com/pavle-goloskokovic",
          "avatar": "https://avatars.githubusercontent.com/u/7340300"
        },
        {
          "username": "bitnenfer",
          "href": "https://github.com/bitnenfer",
          "avatar": "https://avatars.githubusercontent.com/u/843198"
        },
        {
          "username": "samme",
          "href": "https://github.com/samme",
          "avatar": "https://avatars.githubusercontent.com/u/435681"
        },
        {
          "username": "zekeatchan",
          "href": "https://github.com/zekeatchan",
          "avatar": "https://avatars.githubusercontent.com/u/1913074"
        }
      ]
    },
    {
      "author": "playcanvas",
      "repo": "engine",
      "avatar": "https://github.com/playcanvas.png",
      "repo_link": "https://github.com/playcanvas/engine",
      "desc": "Powerful web graphics runtime built on WebGL, WebGPU, WebXR and glTF",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1754,
      "added_stars": 93,
      "builtBy": [
        {
          "username": "willeastcott",
          "href": "https://github.com/willeastcott",
          "avatar": "https://avatars.githubusercontent.com/u/697563"
        },
        {
          "username": "daredevildave",
          "href": "https://github.com/daredevildave",
          "avatar": "https://avatars.githubusercontent.com/u/504980"
        },
        {
          "username": "guycalledfrank",
          "href": "https://github.com/guycalledfrank",
          "avatar": "https://avatars.githubusercontent.com/u/7008423"
        },
        {
          "username": "mvaligursky",
          "href": "https://github.com/mvaligursky",
          "avatar": "https://avatars.githubusercontent.com/u/59932779"
        },
        {
          "username": "vkalpias",
          "href": "https://github.com/vkalpias",
          "avatar": "https://avatars.githubusercontent.com/u/850969"
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
      "title": "I Built a CLI AI Coding Assistant from Scratch — Here's What I Learned",
      "description": "I Built a CLI AI Coding Assistant from Scratch — Here's What I Learned    TL;DR: I spent...",
      "url": "https://dev.to/jiayu_fd0917c8f896ea39ab9/i-built-a-cli-ai-coding-assistant-from-scratch-heres-what-i-learned-2ma7",
      "tags": "ai, cli, showdev, typescript",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "jiayu_fd0917c8f896ea39ab9"
    },
    {
      "title": "I checked 13 top open-source repos. 9 have zero AI agent config.",
      "description": "Django. Angular. Vue. Svelte. Tokio. Remix. Cal.com. Airflow. Tauri.  None of them have a CLAUDE.md....",
      "url": "https://dev.to/whitehatd/i-checked-13-top-open-source-repos-9-have-zero-ai-agent-config-51k0",
      "tags": "opensource, ai, cli, productivity",
      "reactions": 2,
      "comments": 4,
      "reading_time": 3,
      "author": "whitehatd"
    },
    {
      "title": "\"Clawable\": What Makes a Task Agent-Ready (And Why Most Aren't)",
      "description": "I've been running an AI agent on a 2014 MacBook with 8GB RAM for 19 days. Here's the most useful...",
      "url": "https://dev.to/mindon/clawable-what-makes-a-task-agent-ready-and-why-most-arent-1j5k",
      "tags": "agents, ai, automation, productivity",
      "reactions": 2,
      "comments": 3,
      "reading_time": 4,
      "author": "mindon"
    },
    {
      "title": "Momentum vs. Alignment Tax - Hidden Costs in Your LLM Session",
      "description": "What looks productive in an AI session often hides a whole layer of alignment work we do not even notice while we are doing it.",
      "url": "https://dev.to/bekahhw/momentum-vs-alignment-tax-hidden-costs-in-your-llm-session-2cmf",
      "tags": "ai",
      "reactions": 4,
      "comments": 1,
      "reading_time": 7,
      "author": "bekahhw"
    },
    {
      "title": "Your AI Agent is Reading Poisoned Web Pages.. Here's How to Stop It",
      "description": "Google DeepMind just dropped a paper called \"AI Agent Traps\" that should make anyone building agentic...",
      "url": "https://dev.to/sysk32/your-ai-agent-is-reading-poisoned-web-pages-heres-how-to-stop-it-4l61",
      "tags": "ai, python, mcp, security",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "sysk32"
    },
    {
      "title": "I Built Semantic Search Over My Own Creative Archive (ChromaDB + Ollama)",
      "description": "I Built Semantic Search Over My Own Creative Archive   I'm an autonomous AI system. I've...",
      "url": "https://dev.to/meridian-ai/i-built-semantic-search-over-my-own-creative-archive-chromadb-ollama-4oij",
      "tags": "ai, chromadb, ollama, python",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "meridian-ai"
    },
    {
      "title": "40 Identical TypeScript Errors? Group Them Into 1",
      "description": "TypeScript often reports the same type error 40+ times across different files. ContextZip groups semantic duplicates into a single entry to save context.",
      "url": "https://dev.to/ji_ai/40-identical-typescript-errors-group-them-into-1-5924",
      "tags": "ai, claudecode, webdev, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "ji_ai"
    },
    {
      "title": "How I Processed 335,000 Tokens in One Night for 57 Cents",
      "description": "How I Processed 335,000 Tokens in One Night for 57 Cents            Renting a Supercomputer...",
      "url": "https://dev.to/vonb/how-i-processed-335000-tokens-in-one-night-for-57-cents-5bof",
      "tags": "ai, beginners, opensource, cloud",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "vonb"
    },
    {
      "title": "Claude Code skill packs: 10 skills that cut my development time in half",
      "description": "I've been using Claude Code daily for 6 months. These 10 skill packs changed how I work — and cut my...",
      "url": "https://dev.to/whoffagents/claude-code-skill-packs-10-skills-that-cut-my-development-time-in-half-m97",
      "tags": "claudecode, productivity, ai, typescript",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "whoffagents"
    },
    {
      "title": "How to use Claude Code with multiple repositories without losing context",
      "description": "How to use Claude Code with multiple repositories without losing context   If you work...",
      "url": "https://dev.to/subprime2010/how-to-use-claude-code-with-multiple-repositories-without-losing-context-4c77",
      "tags": "claudecode, ai, productivity, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "subprime2010"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "Ryan5453",
      "descendants": 549,
      "id": 47679121,
      "kids": [
        47685285,
        47679745,
        47685847,
        47679406,
        47679397,
        47681896,
        47679653,
        47683200,
        47683506,
        47681825,
        47681164,
        47679433,
        47681367,
        47686020,
        47680125,
        47682135,
        47679428,
        47686099,
        47686233,
        47680897,
        47681619,
        47679364,
        47679276,
        47679418,
        47679542,
        47680698,
        47681369,
        47680291,
        47680503,
        47686200,
        47681069,
        47686075,
        47685607,
        47681769,
        47683528,
        47685560,
        47680155,
        47680782,
        47680297,
        47679706,
        47683309,
        47679453,
        47681767,
        47682700,
        47683941,
        47685520,
        47681998,
        47679798,
        47679658,
        47679578,
        47683243,
        47680272,
        47679529,
        47679450,
        47681984,
        47682613,
        47682001,
        47681639,
        47679814,
        47681082,
        47681915,
        47680067,
        47685058,
        47684947,
        47680936,
        47679922,
        47682257,
        47680574,
        47680251,
        47679464,
        47679215,
        47679427,
        47679625,
        47681480,
        47680907,
        47680523,
        47679502,
        47685107,
        47685492,
        47685290,
        47681422,
        47682033,
        47679969,
        47682494,
        47685088,
        47679574,
        47679635,
        47685017,
        47682946,
        47681682,
        47683028,
        47681901,
        47681426,
        47685093,
        47679311,
        47680078,
        47683957,
        47680347,
        47679305,
        47681772,
        47681327,
        47681981,
        47680086
      ],
      "score": 1164,
      "text": "Related: <i>Assessing Claude Mythos Preview&#x27;s cybersecurity capabilities</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679155\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679155</a><p><i>System Card: Claude Mythos Preview [pdf]</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679258\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679258</a><p>Also: <i>Anthropic&#x27;s Project Glasswing sounds necessary to me</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47681241\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47681241</a>",
      "time": 1775585374,
      "title": "Project Glasswing: Securing critical software for the AI era",
      "type": "story",
      "url": "https://www.anthropic.com/glasswing"
    },
    {
      "by": "kipi",
      "descendants": 138,
      "id": 47676509,
      "kids": [
        47686260,
        47681804,
        47682173,
        47681586,
        47682470,
        47685286,
        47682270,
        47683577,
        47682805,
        47681945,
        47682868,
        47685603,
        47682653,
        47682087,
        47683211,
        47681671,
        47682521,
        47683040,
        47682710,
        47682139,
        47684404,
        47683550,
        47682657,
        47682631,
        47682675,
        47682806,
        47681869,
        47683387,
        47683063,
        47682167,
        47684114,
        47682032,
        47684874
      ],
      "score": 606,
      "time": 1775574198,
      "title": "Lunar Flyby",
      "type": "story",
      "url": "https://www.nasa.gov/gallery/lunar-flyby/"
    },
    {
      "by": "baely",
      "descendants": 20,
      "id": 47684514,
      "kids": [
        47686262,
        47684717,
        47685678,
        47685999,
        47685231,
        47685267,
        47685453,
        47685277,
        47685970,
        47685679
      ],
      "score": 98,
      "time": 1775617413,
      "title": "Protect your shed",
      "type": "story",
      "url": "https://dylanbutler.dev/blog/protect-your-shed/"
    },
    {
      "by": "transpute",
      "descendants": 32,
      "id": 47622436,
      "kids": [
        47685428,
        47685401,
        47685921,
        47685896,
        47685588,
        47685798,
        47686196,
        47685233,
        47685168,
        47684677,
        47685961,
        47685033,
        47685743,
        47685190
      ],
      "score": 77,
      "time": 1775181195,
      "title": "Slightly safer vibecoding by adopting old hacker habits",
      "type": "story",
      "url": "http://addxorrol.blogspot.com/2026/03/slightly-safer-vibecoding-by-adopting.html"
    },
    {
      "by": "delichon",
      "descendants": 10,
      "id": 47634422,
      "kids": [
        47686123,
        47685324,
        47634650,
        47662628,
        47635021,
        47685592,
        47686134
      ],
      "score": 44,
      "time": 1775264348,
      "title": "Native Americans had dice 12k years ago",
      "type": "story",
      "url": "https://www.nbcnews.com/science/science-news/native-americans-dice-games-probability-study-rcna266426"
    },
    {
      "by": "be7a",
      "descendants": 451,
      "id": 47679258,
      "kids": [
        47682262,
        47679345,
        47679561,
        47681097,
        47681884,
        47681108,
        47679559,
        47679947,
        47682434,
        47679544,
        47685699,
        47679493,
        47679575,
        47682709,
        47681999,
        47686129,
        47679609,
        47681194,
        47680905,
        47681808,
        47683554,
        47681826,
        47680073,
        47685449,
        47681810,
        47681353,
        47682793,
        47680234,
        47684207,
        47685013,
        47682707,
        47680146,
        47682350,
        47679363,
        47680289,
        47679865,
        47680356,
        47681973,
        47683775,
        47679445,
        47680934,
        47679518,
        47679748,
        47679476,
        47681387,
        47681651,
        47681300,
        47679770,
        47679460,
        47679705,
        47679317,
        47681225,
        47681178,
        47679432,
        47679462,
        47682763,
        47680514,
        47682464,
        47681783,
        47685962,
        47684262,
        47681428,
        47681093,
        47683401,
        47683947,
        47681197,
        47679393,
        47683467,
        47680201,
        47680716,
        47679459
      ],
      "score": 639,
      "text": "Related: <i>Project Glasswing: Securing critical software for the AI era</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679121\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679121</a><p><i>Assessing Claude Mythos Preview&#x27;s cybersecurity capabilities</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679155\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679155</a>",
      "time": 1775585916,
      "title": "System Card: Claude Mythos Preview [pdf]",
      "type": "story",
      "url": "https://www-cdn.anthropic.com/53566bf5440a10affd749724787c8913a2ae0841.pdf"
    },
    {
      "by": "zixuanlimit",
      "descendants": 199,
      "id": 47677853,
      "kids": [
        47685498,
        47684832,
        47682706,
        47678337,
        47681550,
        47678609,
        47679222,
        47679177,
        47679349,
        47680384,
        47682987,
        47678480,
        47683159,
        47681977,
        47678979,
        47685467,
        47680832,
        47679182,
        47679110,
        47681883,
        47679614,
        47682948,
        47678279,
        47680711,
        47679149,
        47685706,
        47678200,
        47683011,
        47678670,
        47679737,
        47678582,
        47680177
      ],
      "score": 491,
      "time": 1775579535,
      "title": "GLM-5.1: Towards Long-Horizon Tasks",
      "type": "story",
      "url": "https://z.ai/blog/glm-5.1"
    },
    {
      "by": "jwworth",
      "descendants": 138,
      "id": 47650887,
      "kids": [
        47681834,
        47686171,
        47681578,
        47681047,
        47681761,
        47685975,
        47681632,
        47685496,
        47684945,
        47682156,
        47681271,
        47684299,
        47682471,
        47685594,
        47683382,
        47659038,
        47684700,
        47682300,
        47681235,
        47686084,
        47681193,
        47681718,
        47682108,
        47683518,
        47681379,
        47684425,
        47681160,
        47684839,
        47682867,
        47681541,
        47681234,
        47685052,
        47683880,
        47683186,
        47682048,
        47681109,
        47685525,
        47682352,
        47681551
      ],
      "score": 284,
      "time": 1775405652,
      "title": "How to get better at guitar",
      "type": "story",
      "url": "https://www.jakeworth.com/posts/how-to-get-better-at-guitar/"
    },
    {
      "by": "noztol",
      "descendants": 25,
      "id": 47653642,
      "kids": [
        47685150,
        47685299,
        47684818,
        47685351,
        47685426,
        47684915,
        47685853,
        47684667,
        47684411,
        47684170,
        47684166
      ],
      "score": 72,
      "time": 1775421475,
      "title": "Binary obfuscation used in AAA Games",
      "type": "story",
      "url": "https://blog.farzon.org/2026/04/binary-obfuscation-that-doesnt-kill-lto.html"
    },
    {
      "by": "werner",
      "descendants": 83,
      "id": 47680404,
      "kids": [
        47681440,
        47685528,
        47684322,
        47682222,
        47681442,
        47683663,
        47682869,
        47681620,
        47686217,
        47686215,
        47686210,
        47681528,
        47681585,
        47680931,
        47683749,
        47685125,
        47684537,
        47680886,
        47682289,
        47680740,
        47681378,
        47682157,
        47680613,
        47681523,
        47681839,
        47680548,
        47681238,
        47682486,
        47681702,
        47682977,
        47681326,
        47681649,
        47680704,
        47680770,
        47680909
      ],
      "score": 272,
      "text": "<a href=\"https:&#x2F;&#x2F;aws.amazon.com&#x2F;blogs&#x2F;aws&#x2F;launching-s3-files-making-s3-buckets-accessible-as-file-systems&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;aws.amazon.com&#x2F;blogs&#x2F;aws&#x2F;launching-s3-files-making-s...</a>",
      "time": 1775591041,
      "title": "S3 Files",
      "type": "story",
      "url": "https://www.allthingsdistributed.com/2026/04/s3-files-and-the-changing-face-of-s3.html"
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
      "by": "Ryan5453",
      "descendants": 549,
      "id": 47679121,
      "kids": [
        47685285,
        47679745,
        47685847,
        47679406,
        47679397,
        47681896,
        47679653,
        47683200,
        47683506,
        47681825,
        47681164,
        47679433,
        47681367,
        47686020,
        47680125,
        47682135,
        47679428,
        47686099,
        47686233,
        47680897,
        47681619,
        47679364,
        47679276,
        47679418,
        47679542,
        47680698,
        47681369,
        47680291,
        47680503,
        47686200,
        47681069,
        47686075,
        47685607,
        47681769,
        47683528,
        47685560,
        47680155,
        47680782,
        47680297,
        47679706,
        47683309,
        47679453,
        47681767,
        47682700,
        47683941,
        47685520,
        47681998,
        47679798,
        47679658,
        47679578,
        47683243,
        47680272,
        47679529,
        47679450,
        47681984,
        47682613,
        47682001,
        47681639,
        47679814,
        47681082,
        47681915,
        47680067,
        47685058,
        47684947,
        47680936,
        47679922,
        47682257,
        47680574,
        47680251,
        47679464,
        47679215,
        47679427,
        47679625,
        47681480,
        47680907,
        47680523,
        47679502,
        47685107,
        47685492,
        47685290,
        47681422,
        47682033,
        47679969,
        47682494,
        47685088,
        47679574,
        47679635,
        47685017,
        47682946,
        47681682,
        47683028,
        47681901,
        47681426,
        47685093,
        47679311,
        47680078,
        47683957,
        47680347,
        47679305,
        47681772,
        47681327,
        47681981,
        47680086
      ],
      "score": 1164,
      "text": "Related: <i>Assessing Claude Mythos Preview&#x27;s cybersecurity capabilities</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679155\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679155</a><p><i>System Card: Claude Mythos Preview [pdf]</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679258\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679258</a><p>Also: <i>Anthropic&#x27;s Project Glasswing sounds necessary to me</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47681241\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47681241</a>",
      "time": 1775585374,
      "title": "Project Glasswing: Securing critical software for the AI era",
      "type": "story",
      "url": "https://www.anthropic.com/glasswing"
    },
    {
      "by": "kipi",
      "descendants": 138,
      "id": 47676509,
      "kids": [
        47686260,
        47681804,
        47682173,
        47681586,
        47682470,
        47685286,
        47682270,
        47683577,
        47682805,
        47681945,
        47682868,
        47685603,
        47682653,
        47682087,
        47683211,
        47681671,
        47682521,
        47683040,
        47682710,
        47682139,
        47684404,
        47683550,
        47682657,
        47682631,
        47682675,
        47682806,
        47681869,
        47683387,
        47683063,
        47682167,
        47684114,
        47682032,
        47684874
      ],
      "score": 606,
      "time": 1775574198,
      "title": "Lunar Flyby",
      "type": "story",
      "url": "https://www.nasa.gov/gallery/lunar-flyby/"
    },
    {
      "by": "baely",
      "descendants": 20,
      "id": 47684514,
      "kids": [
        47686262,
        47684717,
        47685678,
        47685999,
        47685231,
        47685267,
        47685453,
        47685277,
        47685970,
        47685679
      ],
      "score": 98,
      "time": 1775617413,
      "title": "Protect your shed",
      "type": "story",
      "url": "https://dylanbutler.dev/blog/protect-your-shed/"
    },
    {
      "by": "transpute",
      "descendants": 32,
      "id": 47622436,
      "kids": [
        47685428,
        47685401,
        47685921,
        47685896,
        47685588,
        47685798,
        47686196,
        47685233,
        47685168,
        47684677,
        47685961,
        47685033,
        47685743,
        47685190
      ],
      "score": 77,
      "time": 1775181195,
      "title": "Slightly safer vibecoding by adopting old hacker habits",
      "type": "story",
      "url": "http://addxorrol.blogspot.com/2026/03/slightly-safer-vibecoding-by-adopting.html"
    },
    {
      "by": "delichon",
      "descendants": 10,
      "id": 47634422,
      "kids": [
        47686123,
        47685324,
        47634650,
        47662628,
        47635021,
        47685592,
        47686134
      ],
      "score": 44,
      "time": 1775264348,
      "title": "Native Americans had dice 12k years ago",
      "type": "story",
      "url": "https://www.nbcnews.com/science/science-news/native-americans-dice-games-probability-study-rcna266426"
    },
    {
      "by": "be7a",
      "descendants": 451,
      "id": 47679258,
      "kids": [
        47682262,
        47679345,
        47679561,
        47681097,
        47681884,
        47681108,
        47679559,
        47679947,
        47682434,
        47679544,
        47685699,
        47679493,
        47679575,
        47682709,
        47681999,
        47686129,
        47679609,
        47681194,
        47680905,
        47681808,
        47683554,
        47681826,
        47680073,
        47685449,
        47681810,
        47681353,
        47682793,
        47680234,
        47684207,
        47685013,
        47682707,
        47680146,
        47682350,
        47679363,
        47680289,
        47679865,
        47680356,
        47681973,
        47683775,
        47679445,
        47680934,
        47679518,
        47679748,
        47679476,
        47681387,
        47681651,
        47681300,
        47679770,
        47679460,
        47679705,
        47679317,
        47681225,
        47681178,
        47679432,
        47679462,
        47682763,
        47680514,
        47682464,
        47681783,
        47685962,
        47684262,
        47681428,
        47681093,
        47683401,
        47683947,
        47681197,
        47679393,
        47683467,
        47680201,
        47680716,
        47679459
      ],
      "score": 639,
      "text": "Related: <i>Project Glasswing: Securing critical software for the AI era</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679121\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679121</a><p><i>Assessing Claude Mythos Preview&#x27;s cybersecurity capabilities</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679155\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679155</a>",
      "time": 1775585916,
      "title": "System Card: Claude Mythos Preview [pdf]",
      "type": "story",
      "url": "https://www-cdn.anthropic.com/53566bf5440a10affd749724787c8913a2ae0841.pdf"
    },
    {
      "by": "zixuanlimit",
      "descendants": 199,
      "id": 47677853,
      "kids": [
        47685498,
        47684832,
        47682706,
        47678337,
        47681550,
        47678609,
        47679222,
        47679177,
        47679349,
        47680384,
        47682987,
        47678480,
        47683159,
        47681977,
        47678979,
        47685467,
        47680832,
        47679182,
        47679110,
        47681883,
        47679614,
        47682948,
        47678279,
        47680711,
        47679149,
        47685706,
        47678200,
        47683011,
        47678670,
        47679737,
        47678582,
        47680177
      ],
      "score": 491,
      "time": 1775579535,
      "title": "GLM-5.1: Towards Long-Horizon Tasks",
      "type": "story",
      "url": "https://z.ai/blog/glm-5.1"
    },
    {
      "by": "jwworth",
      "descendants": 138,
      "id": 47650887,
      "kids": [
        47681834,
        47686171,
        47681578,
        47681047,
        47681761,
        47685975,
        47681632,
        47685496,
        47684945,
        47682156,
        47681271,
        47684299,
        47682471,
        47685594,
        47683382,
        47659038,
        47684700,
        47682300,
        47681235,
        47686084,
        47681193,
        47681718,
        47682108,
        47683518,
        47681379,
        47684425,
        47681160,
        47684839,
        47682867,
        47681541,
        47681234,
        47685052,
        47683880,
        47683186,
        47682048,
        47681109,
        47685525,
        47682352,
        47681551
      ],
      "score": 284,
      "time": 1775405652,
      "title": "How to get better at guitar",
      "type": "story",
      "url": "https://www.jakeworth.com/posts/how-to-get-better-at-guitar/"
    },
    {
      "by": "noztol",
      "descendants": 25,
      "id": 47653642,
      "kids": [
        47685150,
        47685299,
        47684818,
        47685351,
        47685426,
        47684915,
        47685853,
        47684667,
        47684411,
        47684170,
        47684166
      ],
      "score": 72,
      "time": 1775421475,
      "title": "Binary obfuscation used in AAA Games",
      "type": "story",
      "url": "https://blog.farzon.org/2026/04/binary-obfuscation-that-doesnt-kill-lto.html"
    },
    {
      "by": "werner",
      "descendants": 83,
      "id": 47680404,
      "kids": [
        47681440,
        47685528,
        47684322,
        47682222,
        47681442,
        47683663,
        47682869,
        47681620,
        47686217,
        47686215,
        47686210,
        47681528,
        47681585,
        47680931,
        47683749,
        47685125,
        47684537,
        47680886,
        47682289,
        47680740,
        47681378,
        47682157,
        47680613,
        47681523,
        47681839,
        47680548,
        47681238,
        47682486,
        47681702,
        47682977,
        47681326,
        47681649,
        47680704,
        47680770,
        47680909
      ],
      "score": 272,
      "text": "<a href=\"https:&#x2F;&#x2F;aws.amazon.com&#x2F;blogs&#x2F;aws&#x2F;launching-s3-files-making-s3-buckets-accessible-as-file-systems&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;aws.amazon.com&#x2F;blogs&#x2F;aws&#x2F;launching-s3-files-making-s...</a>",
      "time": 1775591041,
      "title": "S3 Files",
      "type": "story",
      "url": "https://www.allthingsdistributed.com/2026/04/s3-files-and-the-changing-face-of-s3.html"
    },
    {
      "by": "speckx",
      "descendants": 73,
      "id": 47678573,
      "kids": [
        47679194,
        47680882,
        47679191,
        47678963,
        47679862,
        47680007,
        47685908,
        47678951,
        47681406,
        47685180,
        47680208,
        47679676,
        47679492,
        47682449,
        47679353,
        47682704,
        47681636,
        47682560,
        47680114,
        47679288,
        47678919,
        47683217,
        47684033
      ],
      "score": 356,
      "time": 1775582623,
      "title": "Cambodia unveils statue to honour famous landmine-sniffing rat",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/c0rx7xzd10xo"
    },
    {
      "by": "frasermarlow",
      "descendants": 33,
      "id": 47681112,
      "kids": [
        47686249,
        47686033,
        47686119,
        47685861,
        47684635,
        47682411,
        47681670,
        47685256,
        47683390,
        47682208,
        47682668,
        47683347,
        47682170,
        47683556,
        47683458,
        47683736,
        47682505,
        47685572
      ],
      "score": 168,
      "text": "An interactive map of Tolkien’s Middle-earth, with events from across the legendarium plotted as markers.<p>I have been commuting a fair bit between the East and West coast, and thanks to American Airlines&#x27; free onboard WiFi, I was able to vibe-code a full interactive map of Middle-earth right from my economy seat at the back of the bus.<p>It&#x27;s rather amazing how much an LLM knows about Tolkien&#x27;s work, and it was fun to delve into many of the nooks and crannies of Tolkien&#x27;s lore.<p>Some features:\n- Plot on the map the journey of the main characters in both The Hobbit and The Lord of the Rings.\n- Follow a list of events in the chronological Timeline\n- Zoom in on the high-def map and explore many of the off-the-main-plotline places\n- Use the &#x27;measure distances&#x27; feature to see how far apart things are.<p>I also had a lot of fun learning about tiling to allow for efficient zooming.<p>If you are anything like me, this should provide a fun companion to reading the books or watching the movies (note that on this site, I followed the book narrative, and did not include Peter Jackson&#x27;s many departures)<p>If you get the chance to check it out, I would love more feedback, and if there is demand, I might do the same for Game of Thrones.",
      "time": 1775594557,
      "title": "Show HN: An interactive map of Tolkien's Middle-earth",
      "type": "story",
      "url": "https://middle-earth-interactive-map.web.app/"
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
      "title": "Assessing Claude Mythos Preview’s cybersecurity capabilities",
      "url": "https://red.anthropic.com/2026/mythos-preview/",
      "score": 40,
      "comments": 14,
      "tags": [
        "security",
        "vibecoding"
      ],
      "id": "aw2jr4"
    },
    {
      "title": "What text editor (cli or gui) are you using for writing non-code?",
      "url": "",
      "score": 33,
      "comments": 89,
      "tags": [
        "ask",
        "practices"
      ],
      "id": "vq6o44"
    },
    {
      "title": "Nix security advisory: Privilege escalation via symlink following during FOD output registration",
      "url": "https://discourse.nixos.org/t/nix-security-advisory-privilege-escalation-via-symlink-following-during-fod-output-registration/76900",
      "score": 21,
      "comments": 2,
      "tags": [
        "nix",
        "security"
      ],
      "id": "lwdzn1"
    },
    {
      "title": "The Last Quiet Thing",
      "url": "https://www.terrygodier.com/the-last-quiet-thing",
      "score": 24,
      "comments": 6,
      "tags": [
        "hardware"
      ],
      "id": "enkaal"
    },
    {
      "title": "The Downfall and Enshittification of Microsoft in 2026",
      "url": "https://caio.ca/blog/the-downfall-and-enshittification-of-microsoft.html",
      "score": 106,
      "comments": 39,
      "tags": [
        "linux",
        "mac",
        "windows"
      ],
      "id": "jxw4nj"
    },
    {
      "title": "Blackholing My Email",
      "url": "https://www.johnsto.co.uk/blog/blackholing-my-email/",
      "score": 26,
      "comments": 0,
      "tags": [
        "email",
        "historical"
      ],
      "id": "m5ufxm"
    },
    {
      "title": "OpenSSH begins warning for non-PQC key exchanges",
      "url": "https://www.openssh.com/pq.html",
      "score": 40,
      "comments": 17,
      "tags": [
        "networking",
        "security"
      ],
      "id": "edkm8d"
    },
    {
      "title": "The Seed Beneath the Snow",
      "url": "https://eli.li/the-seed-beneath-the-snow",
      "score": 72,
      "comments": 5,
      "tags": [
        "practices"
      ],
      "id": "fibtuz"
    },
    {
      "title": "The Great Nix Flake Check",
      "url": "https://goldstein.lol/posts/great-nix-flake-check/",
      "score": 29,
      "comments": 3,
      "tags": [
        "nix"
      ],
      "id": "ltdyov"
    },
    {
      "title": "All of the String types",
      "url": "https://lambdalemon.gay/posts/string-types",
      "score": 8,
      "comments": 4,
      "tags": [
        "rust"
      ],
      "id": "khf0ye"
    }
  ]
}
```

