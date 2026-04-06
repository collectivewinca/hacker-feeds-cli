# Hacker Feeds Outcomes - Creators

Generated on: 2026-04-06 06:54:10 UTC

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
      "title": "From Broken Docker Containers to a Working AI Agent: The Full OpenClaw Journey",
      "description": "Every blocker, every fix, and why bare metal is the sweet spot for a personal AI agent...",
      "url": "https://dev.to/sir_alexander_t/from-broken-docker-containers-to-a-working-ai-agent-the-full-openclaw-journey-3mc0",
      "tags": "agents, ai, docker, openclaw",
      "reactions": 4,
      "comments": 1,
      "reading_time": 7,
      "author": "sir_alexander_t"
    },
    {
      "title": "Building a Continuous Voice Interface with the OpenAI Realtime API",
      "description": "A technical walkthrough of how the ABD Assistant voice command system works end-to-end, from raw...",
      "url": "https://dev.to/diran_adeola/building-a-continuous-voice-interface-with-the-openai-realtime-api-2pn",
      "tags": "ai, javascript, openai, tutorial",
      "reactions": 4,
      "comments": 0,
      "reading_time": 3,
      "author": "diran_adeola"
    },
    {
      "title": "Master-Class: Understanding Database Replication (Single, Multi, and Leaderless)",
      "description": "A deep dive into Single Leader, Multi-Leader, and Leaderless replication algorithms for distributed systems.",
      "url": "https://dev.to/piyush6348/master-class-understanding-database-replication-single-multi-and-leaderless-hhm",
      "tags": "systemdesign, backend, database, distributedsystems",
      "reactions": 2,
      "comments": 0,
      "reading_time": 3,
      "author": "piyush6348"
    },
    {
      "title": "MCP Development with Python, and Azure Kubernates Service (AKS)",
      "description": "Leveraging Gemini CLI and the underlying Gemini LLM to build Model Context Protocol (MCP) AI...",
      "url": "https://dev.to/gde/mcp-development-with-python-and-azure-kubernates-service-aks-2in7",
      "tags": "gemini, mcpserver, python, ak",
      "reactions": 4,
      "comments": 0,
      "reading_time": 8,
      "author": "xbill"
    },
    {
      "title": "0. Why I’m Growing HAID in Public, Not Building in Public",
      "description": "I'm a runner and triathlete, and for years I've been frustrated by the same thing: there's no single place I can call home for my fitness data.",
      "url": "https://dev.to/shadowlik/0-why-im-growing-haid-in-public-not-building-in-public-1d0l",
      "tags": "app, development, growth, product",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "shadowlik"
    },
    {
      "title": "Building a Production-Ready Serverless App on Google Cloud (Part 2: The Data Contract)",
      "description": "This is Part 2 of a 3-part series on building production-ready, data-intensive applications on Google...",
      "url": "https://dev.to/gde/building-a-production-ready-serverless-app-on-google-cloud-part-2-the-data-contract-3hpa",
      "tags": "ai, dataengineering, python, googlecloud",
      "reactions": 3,
      "comments": 0,
      "reading_time": 4,
      "author": "patitonav"
    },
    {
      "title": "Page Numbers Lie: Offset vs Cursor Pagination",
      "description": "From Interview Notes To Production Reality   While I was preparing for interviews, I came...",
      "url": "https://dev.to/mandy8055/page-numbers-lie-offset-vs-cursor-pagination-39f4",
      "tags": "graphql, typescript, javascript, api",
      "reactions": 3,
      "comments": 0,
      "reading_time": 7,
      "author": "mandy8055"
    },
    {
      "title": "Scaling Product Discovery: Orchestrating AI Agent Workflows with Google Opal",
      "description": "Introduction: The Challenge of Relevance in Software Development  Developing an application is one...",
      "url": "https://dev.to/gdg/scaling-product-discovery-orchestrating-ai-agent-workflows-with-google-opal-2982",
      "tags": "ai, startup, opal",
      "reactions": 6,
      "comments": 0,
      "reading_time": 4,
      "author": "smoreira"
    },
    {
      "title": "Building a Multimodal Cross Cloud Live Agent with ADK, Azure ACA, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build cross cloud...",
      "url": "https://dev.to/gde/building-a-multimodal-cross-cloud-live-agent-with-adk-azure-aca-and-gemini-cli-57a1",
      "tags": "googleadk, python, gemini, azureaca",
      "reactions": 3,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
    },
    {
      "title": "Building a Multimodal Cross Cloud Live Agent with ADK, Azure ACI, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build cross cloud...",
      "url": "https://dev.to/gde/building-a-multimodal-cross-cloud-live-agent-with-adk-azure-aci-and-gemini-cli-3g4",
      "tags": "azure, python, gemini, iac",
      "reactions": 4,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
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
      "forks": 11599,
      "added_stars": 480,
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
      "author": "affaan-m",
      "repo": "everything-claude-code",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/everything-claude-code",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 21303,
      "added_stars": 24270,
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
      "author": "ComposioHQ",
      "repo": "open-claude-cowork",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/open-claude-cowork",
      "desc": "Open Source version of Claude Cowork with 500+ SaaS app integrations",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 567,
      "added_stars": 455,
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
      "author": "Mintplex-Labs",
      "repo": "anything-llm",
      "avatar": "https://github.com/Mintplex-Labs.png",
      "repo_link": "https://github.com/Mintplex-Labs/anything-llm",
      "desc": "The all-in-one AI productivity accelerator. On device and privacy first with no annoying setup or configuration.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6234,
      "added_stars": 713,
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
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Connect All AI Code Tools (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) to 40+ AI Providers & 100+ Models",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 478,
      "added_stars": 406,
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
      "author": "maboloshi",
      "repo": "github-chinese",
      "avatar": "https://github.com/maboloshi.png",
      "repo_link": "https://github.com/maboloshi/github-chinese",
      "desc": "GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1252,
      "added_stars": 455,
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
      "author": "ChrisWiles",
      "repo": "claude-code-showcase",
      "avatar": "https://github.com/ChrisWiles.png",
      "repo_link": "https://github.com/ChrisWiles/claude-code-showcase",
      "desc": "Comprehensive Claude Code project configuration example with hooks, skills, agents, commands, and GitHub Actions workflows",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 511,
      "added_stars": 129,
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
      "author": "rohitg00",
      "repo": "awesome-claude-code-toolkit",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/awesome-claude-code-toolkit",
      "desc": "The most comprehensive toolkit for Claude Code -- 135 agents, 35 curated skills (+400,000 via SkillKit), 42 commands, 150+ plugins, 19 hooks, 15 rules, 7 templates, 8 MCP configs, and more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 302,
      "added_stars": 148,
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
      "author": "npm",
      "repo": "cli",
      "avatar": "https://github.com/npm.png",
      "repo_link": "https://github.com/npm/cli",
      "desc": "the package manager for JavaScript",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4264,
      "added_stars": 26,
      "builtBy": [
        {
          "username": "isaacs",
          "href": "https://github.com/isaacs",
          "avatar": "https://avatars.githubusercontent.com/u/9287"
        },
        {
          "username": "iarna",
          "href": "https://github.com/iarna",
          "avatar": "https://avatars.githubusercontent.com/u/983798"
        },
        {
          "username": "wraithgar",
          "href": "https://github.com/wraithgar",
          "avatar": "https://avatars.githubusercontent.com/u/36607"
        },
        {
          "username": "othiym23",
          "href": "https://github.com/othiym23",
          "avatar": "https://avatars.githubusercontent.com/u/418097"
        },
        {
          "username": "zkat",
          "href": "https://github.com/zkat",
          "avatar": "https://avatars.githubusercontent.com/u/17535"
        }
      ]
    },
    {
      "author": "CodeWithHarry",
      "repo": "Sigma-Web-Dev-Course",
      "avatar": "https://github.com/CodeWithHarry.png",
      "repo_link": "https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",
      "desc": "Source Code for Sigma Web Development Course",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3064,
      "added_stars": 66,
      "builtBy": [
        {
          "username": "CodeWithHarry",
          "href": "https://github.com/CodeWithHarry",
          "avatar": "https://avatars.githubusercontent.com/u/48705673"
        },
        {
          "username": "it-is-Aman",
          "href": "https://github.com/it-is-Aman",
          "avatar": "https://avatars.githubusercontent.com/u/125397128"
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
      "title": "From Broken Docker Containers to a Working AI Agent: The Full OpenClaw Journey",
      "description": "Every blocker, every fix, and why bare metal is the sweet spot for a personal AI agent...",
      "url": "https://dev.to/sir_alexander_t/from-broken-docker-containers-to-a-working-ai-agent-the-full-openclaw-journey-3mc0",
      "tags": "agents, ai, docker, openclaw",
      "reactions": 4,
      "comments": 1,
      "reading_time": 7,
      "author": "sir_alexander_t"
    },
    {
      "title": "I Built a Self-Hosted AI Agent That Runs on a Raspberry Pi",
      "description": "profClaw is an open-source AI agent engine that runs on your hardware. 35 providers, 72 tools, 22 chat channels, and a full TUI.",
      "url": "https://dev.to/thegdsks/i-built-a-self-hosted-ai-agent-that-runs-on-a-raspberry-pi-161e",
      "tags": "ai, opensource, devtools, selfhosted",
      "reactions": 6,
      "comments": 0,
      "reading_time": 5,
      "author": "thegdsks"
    },
    {
      "title": "Building a Continuous Voice Interface with the OpenAI Realtime API",
      "description": "A technical walkthrough of how the ABD Assistant voice command system works end-to-end, from raw...",
      "url": "https://dev.to/diran_adeola/building-a-continuous-voice-interface-with-the-openai-realtime-api-2pn",
      "tags": "ai, javascript, openai, tutorial",
      "reactions": 4,
      "comments": 0,
      "reading_time": 3,
      "author": "diran_adeola"
    },
    {
      "title": "Zero Data Loss Migration: Moving Billions of Rows from SQL Server to Aurora RDS — Architecture, Predictive CDC Monitoring & Lessons from Production",
      "description": "Migrating a live financial database with billions of rows, zero tolerance for data loss, and a strict...",
      "url": "https://dev.to/ajaydevineni/zero-data-loss-migration-moving-billions-of-rows-from-sql-server-to-aurora-rds-architecture-4g56",
      "tags": "ai, aws, database, sre",
      "reactions": 1,
      "comments": 1,
      "reading_time": 7,
      "author": "ajaydevineni"
    },
    {
      "title": "6 Claude Code Permission Traps I Found Answering GitHub Issues This Week",
      "description": "I answered 57 GitHub Issues this week about Claude Code permissions not working as expected. Here are...",
      "url": "https://dev.to/yurukusa/6-claude-code-permission-traps-i-found-answering-github-issues-this-week-3ja2",
      "tags": "claudecode, ai, devtools, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "yurukusa"
    },
    {
      "title": "How I Found $1,240/Month in Wasted LLM API Costs (And Built a Tool to Find Yours)",
      "description": "I was spending about $2,000/month on OpenAI and Anthropic APIs across a few projects.  I knew some of...",
      "url": "https://dev.to/buildwithabid/how-i-found-1240month-in-wasted-llm-api-costs-and-built-a-tool-to-find-yours-3041",
      "tags": "ai, tutorial, python, opensource",
      "reactions": 6,
      "comments": 0,
      "reading_time": 4,
      "author": "buildwithabid"
    },
    {
      "title": "How I Built an Islamic Storytelling App with AI, Audio Narration & 8 Languages",
      "description": "How I Built an Islamic Storytelling App with AI, Audio Narration &amp; 8 Languages   An...",
      "url": "https://dev.to/bb_apps_4ba0440b392baf96f/how-i-built-an-islamic-storytelling-app-with-ai-audio-narration-8-languages-190p",
      "tags": "ai, ios, showdev, sideprojects",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "bb_apps_4ba0440b392baf96f"
    },
    {
      "title": "Stop Prompting; Use the Design-Log Method to Build Predictable Tools",
      "description": "The article by Yoav Abrahami introduces the Design-Log Methodology, a structured approach to using AI...",
      "url": "https://dev.to/cypheroxide/stop-prompting-use-the-design-log-method-to-build-predictable-tools-2773",
      "tags": "ai, devops, cybersecurity, machinelearning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "cypheroxide"
    },
    {
      "title": "Scaling Product Discovery: Orchestrating AI Agent Workflows with Google Opal",
      "description": "Introduction: The Challenge of Relevance in Software Development  Developing an application is one...",
      "url": "https://dev.to/gdg/scaling-product-discovery-orchestrating-ai-agent-workflows-with-google-opal-2982",
      "tags": "ai, startup, opal",
      "reactions": 6,
      "comments": 0,
      "reading_time": 4,
      "author": "smoreira"
    },
    {
      "title": "18 Specific Tutorial Ideas for AI Voice Integration Using Vapi and Twilio",
      "description": "18 Specific Tutorial Ideas for AI Voice Integration Using Vapi and Twilio           ...",
      "url": "https://dev.to/callstacktech/18-specific-tutorial-ideas-for-ai-voice-integration-using-vapi-and-twilio-32i3",
      "tags": "ai, voicetech, webdev, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 12,
      "author": "callstacktech"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "0x1997",
      "descendants": 1,
      "id": 47657699,
      "kids": [
        47657715
      ],
      "score": 6,
      "time": 1775458182,
      "title": "SideX – A Tauri-based port of Visual Studio Code",
      "type": "story",
      "url": "https://github.com/Sidenai/sidex"
    },
    {
      "by": "armanified",
      "descendants": 26,
      "id": 47655408,
      "kids": [
        47657431,
        47656472,
        47657516,
        47657381,
        47657643,
        47657236,
        47656569,
        47657319,
        47657270,
        47656687,
        47656684,
        47656768,
        47657440,
        47656073,
        47656191,
        47657245,
        47657185,
        47656263,
        47656594,
        47656209,
        47656884,
        47656699,
        47657037,
        47656360,
        47657218,
        47657214,
        47656815
      ],
      "score": 315,
      "text": "Built a ~9M param LLM from scratch to understand how they actually work. Vanilla transformer, 60K synthetic conversations, ~130 lines of PyTorch. Trains in 5 min on a free Colab T4. The fish thinks the meaning of life is food.<p>Fork it and swap the personality for your own character.",
      "time": 1775434812,
      "title": "Show HN: I built a tiny LLM to demystify how language models work",
      "type": "story",
      "url": "https://github.com/arman-bd/guppylm"
    },
    {
      "by": "janandonly",
      "descendants": 144,
      "id": 47652561,
      "kids": [
        47653053,
        47653752,
        47657671,
        47653080,
        47653629,
        47653182,
        47656452,
        47654443,
        47654065,
        47653702,
        47656614,
        47656145,
        47656099,
        47652982,
        47653379,
        47653671,
        47656830,
        47653275,
        47655954,
        47655922,
        47653647,
        47654721,
        47654763,
        47656382,
        47654323,
        47655113,
        47656375,
        47654952,
        47653227,
        47653750,
        47655221,
        47655386,
        47654151,
        47653728,
        47653906,
        47653770,
        47653934,
        47655831,
        47652769,
        47657033,
        47654748,
        47655650
      ],
      "score": 557,
      "time": 1775414753,
      "title": "Gemma 4 on iPhone",
      "type": "story",
      "url": "https://apps.apple.com/nl/app/google-ai-edge-gallery/id6749645337"
    },
    {
      "by": "nevernothing",
      "descendants": 116,
      "id": 47655392,
      "kids": [
        47656008,
        47657457,
        47655915,
        47657689,
        47656075,
        47656882,
        47657403,
        47656148,
        47655789,
        47657535,
        47656042,
        47656495,
        47657579,
        47656842,
        47656405,
        47656921,
        47657485,
        47656129,
        47657248,
        47656296,
        47656252,
        47656244,
        47656642,
        47657479,
        47656960,
        47656253,
        47657264,
        47656660,
        47656494,
        47656152,
        47655651,
        47657493,
        47656140,
        47656264,
        47656299,
        47656619,
        47656810
      ],
      "score": 192,
      "time": 1775434706,
      "title": "Show HN: I made a YouTube search form with advanced filters",
      "type": "story",
      "url": "https://playlists.at/youtube/search/"
    },
    {
      "by": "keepamovin",
      "descendants": 18,
      "id": 47656501,
      "kids": [
        47657126,
        47657132,
        47657301,
        47656646,
        47657097,
        47656781,
        47656898,
        47657321,
        47657573,
        47657136,
        47657232
      ],
      "score": 50,
      "time": 1775444602,
      "title": "The 1987 game “The Last Ninja” was 40 kilobytes",
      "type": "story",
      "url": "https://twitter.com/exQUIZitely/status/2040777977521398151"
    },
    {
      "by": "hillcrestenigma",
      "descendants": 12,
      "id": 47656622,
      "kids": [
        47657345,
        47657032,
        47657069
      ],
      "score": 53,
      "time": 1775445762,
      "title": "An open-source 240-antenna array to bounce signals off the Moon",
      "type": "story",
      "url": "https://moonrf.com/"
    },
    {
      "by": "naves",
      "descendants": 196,
      "id": 47651703,
      "kids": [
        47656541,
        47656224,
        47655065,
        47655139,
        47653811,
        47652219,
        47653508,
        47653462,
        47657558,
        47654772,
        47655215,
        47653424,
        47655456,
        47656778,
        47653536,
        47654005,
        47655248,
        47657254,
        47656379,
        47655506,
        47655068,
        47657234,
        47654228,
        47653484,
        47655324,
        47655190,
        47657189,
        47654015,
        47656478,
        47657171,
        47655939,
        47653522,
        47656524,
        47653742,
        47656857,
        47655496,
        47654247,
        47653774,
        47657603,
        47655247,
        47653844,
        47654909,
        47655014,
        47656558,
        47654924,
        47656977,
        47654166,
        47656250,
        47655607,
        47653756,
        47654904,
        47657203,
        47653981,
        47656920,
        47656635,
        47656591,
        47655564,
        47655518,
        47655479,
        47654807,
        47654730,
        47653806,
        47653672,
        47653400,
        47657050,
        47654234,
        47653641,
        47657048
      ],
      "score": 355,
      "text": "See also <a href=\"https:&#x2F;&#x2F;x.com&#x2F;stevesi&#x2F;status&#x2F;2036921223150440542\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;stevesi&#x2F;status&#x2F;2036921223150440542</a> (<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;stevesi&#x2F;status&#x2F;2036921223150440542\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;stevesi&#x2F;status&#x2F;2036921223150440542</a>)",
      "time": 1775410061,
      "title": "Microsoft hasn't had a coherent GUI strategy since Petzold",
      "type": "story",
      "url": "https://www.jsnover.com/blog/2026/03/13/microsoft-hasnt-had-a-coherent-gui-strategy-since-petzold/"
    },
    {
      "by": "karimf",
      "descendants": 2,
      "id": 47652007,
      "kids": [
        47657363,
        47657413
      ],
      "score": 37,
      "text": "Related: <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47653752\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47653752</a>",
      "time": 1775411599,
      "title": "Show HN: Real-time AI (audio/video in, voice out) on an M3 Pro with Gemma E2B",
      "type": "story",
      "url": "https://github.com/fikrikarim/parlor"
    },
    {
      "by": "cl3misch",
      "descendants": 105,
      "id": 47637377,
      "kids": [
        47653240,
        47655563,
        47653090,
        47653625,
        47653161,
        47653305,
        47653257,
        47657058,
        47653631,
        47657199,
        47655574,
        47653973,
        47655307,
        47653106,
        47655153,
        47653206,
        47654462,
        47655546,
        47654859,
        47656320,
        47654554,
        47653690,
        47653962
      ],
      "score": 271,
      "time": 1775294434,
      "title": "LÖVE: 2D Game Framework for Lua",
      "type": "story",
      "url": "https://github.com/love2d/love"
    },
    {
      "by": "zdw",
      "descendants": 3,
      "id": 47656682,
      "kids": [
        47657312,
        47657688,
        47657546
      ],
      "score": 30,
      "time": 1775446343,
      "title": "Winners of the 2026 Kokuyo Design Awards",
      "type": "story",
      "url": "https://spoon-tamago.com/winners-of-the-2026-kokuyo-design-awards/"
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
      "by": "0x1997",
      "descendants": 1,
      "id": 47657699,
      "kids": [
        47657715
      ],
      "score": 6,
      "time": 1775458182,
      "title": "SideX – A Tauri-based port of Visual Studio Code",
      "type": "story",
      "url": "https://github.com/Sidenai/sidex"
    },
    {
      "by": "armanified",
      "descendants": 26,
      "id": 47655408,
      "kids": [
        47657431,
        47656472,
        47657516,
        47657381,
        47657643,
        47657236,
        47656569,
        47657319,
        47657270,
        47656687,
        47656684,
        47656768,
        47657440,
        47656073,
        47656191,
        47657245,
        47657185,
        47656263,
        47656594,
        47656209,
        47656884,
        47656699,
        47657037,
        47656360,
        47657218,
        47657214,
        47656815
      ],
      "score": 315,
      "text": "Built a ~9M param LLM from scratch to understand how they actually work. Vanilla transformer, 60K synthetic conversations, ~130 lines of PyTorch. Trains in 5 min on a free Colab T4. The fish thinks the meaning of life is food.<p>Fork it and swap the personality for your own character.",
      "time": 1775434812,
      "title": "Show HN: I built a tiny LLM to demystify how language models work",
      "type": "story",
      "url": "https://github.com/arman-bd/guppylm"
    },
    {
      "by": "janandonly",
      "descendants": 144,
      "id": 47652561,
      "kids": [
        47653053,
        47653752,
        47657671,
        47653080,
        47653629,
        47653182,
        47656452,
        47654443,
        47654065,
        47653702,
        47656614,
        47656145,
        47656099,
        47652982,
        47653379,
        47653671,
        47656830,
        47653275,
        47655954,
        47655922,
        47653647,
        47654721,
        47654763,
        47656382,
        47654323,
        47655113,
        47656375,
        47654952,
        47653227,
        47653750,
        47655221,
        47655386,
        47654151,
        47653728,
        47653906,
        47653770,
        47653934,
        47655831,
        47652769,
        47657033,
        47654748,
        47655650
      ],
      "score": 557,
      "time": 1775414753,
      "title": "Gemma 4 on iPhone",
      "type": "story",
      "url": "https://apps.apple.com/nl/app/google-ai-edge-gallery/id6749645337"
    },
    {
      "by": "nevernothing",
      "descendants": 116,
      "id": 47655392,
      "kids": [
        47656008,
        47657457,
        47655915,
        47657689,
        47656075,
        47656882,
        47657403,
        47656148,
        47655789,
        47657535,
        47656042,
        47656495,
        47657579,
        47656842,
        47656405,
        47656921,
        47657485,
        47656129,
        47657248,
        47656296,
        47656252,
        47656244,
        47656642,
        47657479,
        47656960,
        47656253,
        47657264,
        47656660,
        47656494,
        47656152,
        47655651,
        47657493,
        47656140,
        47656264,
        47656299,
        47656619,
        47656810
      ],
      "score": 192,
      "time": 1775434706,
      "title": "Show HN: I made a YouTube search form with advanced filters",
      "type": "story",
      "url": "https://playlists.at/youtube/search/"
    },
    {
      "by": "keepamovin",
      "descendants": 18,
      "id": 47656501,
      "kids": [
        47657126,
        47657132,
        47657301,
        47656646,
        47657097,
        47656781,
        47656898,
        47657321,
        47657573,
        47657136,
        47657232
      ],
      "score": 50,
      "time": 1775444602,
      "title": "The 1987 game “The Last Ninja” was 40 kilobytes",
      "type": "story",
      "url": "https://twitter.com/exQUIZitely/status/2040777977521398151"
    },
    {
      "by": "hillcrestenigma",
      "descendants": 12,
      "id": 47656622,
      "kids": [
        47657345,
        47657032,
        47657069
      ],
      "score": 53,
      "time": 1775445762,
      "title": "An open-source 240-antenna array to bounce signals off the Moon",
      "type": "story",
      "url": "https://moonrf.com/"
    },
    {
      "by": "naves",
      "descendants": 196,
      "id": 47651703,
      "kids": [
        47656541,
        47656224,
        47655065,
        47655139,
        47653811,
        47652219,
        47653508,
        47653462,
        47657558,
        47654772,
        47655215,
        47653424,
        47655456,
        47656778,
        47653536,
        47654005,
        47655248,
        47657254,
        47656379,
        47655506,
        47655068,
        47657234,
        47654228,
        47653484,
        47655324,
        47655190,
        47657189,
        47654015,
        47656478,
        47657171,
        47655939,
        47653522,
        47656524,
        47653742,
        47656857,
        47655496,
        47654247,
        47653774,
        47657603,
        47655247,
        47653844,
        47654909,
        47655014,
        47656558,
        47654924,
        47656977,
        47654166,
        47656250,
        47655607,
        47653756,
        47654904,
        47657203,
        47653981,
        47656920,
        47656635,
        47656591,
        47655564,
        47655518,
        47655479,
        47654807,
        47654730,
        47653806,
        47653672,
        47653400,
        47657050,
        47654234,
        47653641,
        47657048
      ],
      "score": 355,
      "text": "See also <a href=\"https:&#x2F;&#x2F;x.com&#x2F;stevesi&#x2F;status&#x2F;2036921223150440542\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;stevesi&#x2F;status&#x2F;2036921223150440542</a> (<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;stevesi&#x2F;status&#x2F;2036921223150440542\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;stevesi&#x2F;status&#x2F;2036921223150440542</a>)",
      "time": 1775410061,
      "title": "Microsoft hasn't had a coherent GUI strategy since Petzold",
      "type": "story",
      "url": "https://www.jsnover.com/blog/2026/03/13/microsoft-hasnt-had-a-coherent-gui-strategy-since-petzold/"
    },
    {
      "by": "karimf",
      "descendants": 2,
      "id": 47652007,
      "kids": [
        47657363,
        47657413
      ],
      "score": 37,
      "text": "Related: <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47653752\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47653752</a>",
      "time": 1775411599,
      "title": "Show HN: Real-time AI (audio/video in, voice out) on an M3 Pro with Gemma E2B",
      "type": "story",
      "url": "https://github.com/fikrikarim/parlor"
    },
    {
      "by": "cl3misch",
      "descendants": 105,
      "id": 47637377,
      "kids": [
        47653240,
        47655563,
        47653090,
        47653625,
        47653161,
        47653305,
        47653257,
        47657058,
        47653631,
        47657199,
        47655574,
        47653973,
        47655307,
        47653106,
        47655153,
        47653206,
        47654462,
        47655546,
        47654859,
        47656320,
        47654554,
        47653690,
        47653962
      ],
      "score": 271,
      "time": 1775294434,
      "title": "LÖVE: 2D Game Framework for Lua",
      "type": "story",
      "url": "https://github.com/love2d/love"
    },
    {
      "by": "zdw",
      "descendants": 3,
      "id": 47656682,
      "kids": [
        47657312,
        47657688,
        47657546
      ],
      "score": 30,
      "time": 1775446343,
      "title": "Winners of the 2026 Kokuyo Design Awards",
      "type": "story",
      "url": "https://spoon-tamago.com/winners-of-the-2026-kokuyo-design-awards/"
    },
    {
      "by": "salt4034",
      "descendants": 5,
      "id": 47656303,
      "kids": [
        47657692,
        47657388,
        47657615,
        47657355,
        47657334
      ],
      "score": 42,
      "time": 1775442520,
      "title": "Case study: recovery of a corrupted 12 TB multi-device pool",
      "type": "story",
      "url": "https://github.com/kdave/btrfs-progs/issues/1107"
    },
    {
      "by": "ikessler",
      "descendants": 9,
      "id": 47655367,
      "kids": [
        47657648,
        47656317,
        47657642,
        47656889,
        47656923,
        47656601
      ],
      "score": 54,
      "text": "Gemma Gem is a Chrome extension that loads Google&#x27;s Gemma 4 (2B) through WebGPU in an offscreen document and gives it tools to interact with any webpage: read content, take screenshots, click elements, type text, scroll, and run JavaScript.<p>You get a small chat overlay on every page. Ask it about the page and it (usually) figures out which tools to call. It has a thinking mode that shows chain-of-thought reasoning as it works.<p>It&#x27;s a 2B model in a browser. It works for simple page questions and running JavaScript, but multi-step tool chains are unreliable and it sometimes ignores its tools entirely. The agent loop has zero external dependencies and can be extracted as a standalone library if anyone wants to experiment with it.",
      "time": 1775434477,
      "title": "Show HN: Gemma Gem – AI model embedded in a browser – no API keys, no cloud",
      "type": "story",
      "url": "https://github.com/kessler/gemma-gem"
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
      "title": "Stamp It! All Programs Must Report Their Version",
      "url": "https://michael.stapelberg.ch/posts/2026-04-05-stamp-it-all-programs-must-report-their-version/",
      "score": 51,
      "comments": 9,
      "tags": [
        "go",
        "nix"
      ],
      "id": "faksz1"
    },
    {
      "title": "Eight years of wanting, three months of building with AI",
      "url": "https://lalitm.com/post/building-syntaqlite-ai/",
      "score": 55,
      "comments": 7,
      "tags": [
        "vibecoding"
      ],
      "id": "gpqkcx"
    },
    {
      "title": "Best Paper Awards in Computer Science over the past 30 years",
      "url": "https://jeffhuang.com/best_paper_awards/",
      "score": 10,
      "comments": 1,
      "tags": [
        "compsci"
      ],
      "id": "ufd7j8"
    },
    {
      "title": "neomd: A minimal email TUI where you read with Markdown and write in Neovim",
      "url": "https://github.com/ssp-data/neomd",
      "score": 18,
      "comments": 1,
      "tags": [
        "email",
        "vibecoding",
        "vim"
      ],
      "id": "vw7mod"
    },
    {
      "title": "A tail-call interpreter in (nightly) Rust",
      "url": "https://www.mattkeeter.com/blog/2026-04-05-tailcall/",
      "score": 32,
      "comments": 10,
      "tags": [
        "plt",
        "rust"
      ],
      "id": "ektobz"
    },
    {
      "title": "Endian wars and anti-portability",
      "url": "https://dalmatian.life/2026/04/03/endian-wars-and-anti-portability-this-again/",
      "score": 6,
      "comments": 10,
      "tags": [
        "practices"
      ],
      "id": "g0kwsq"
    },
    {
      "title": "Size matters, even on very fast connections",
      "url": "https://maurycyz.com/misc/13kb/",
      "score": 3,
      "comments": 1,
      "tags": [
        "networking",
        "web"
      ],
      "id": "cwbgnf"
    },
    {
      "title": "The nvim-treesitter repository was archived",
      "url": "https://github.com/nvim-treesitter/nvim-treesitter",
      "score": 137,
      "comments": 97,
      "tags": [
        "editors",
        "programming",
        "vim"
      ],
      "id": "jr4acs"
    },
    {
      "title": "If you thought the speed of writing code was your problem - you have bigger problems",
      "url": "https://debuggingleadership.com/blog/if-you-thought-the-speed-of-writing-code-was-your-problem-you-have-bigger-problems",
      "score": 56,
      "comments": 16,
      "tags": [
        "vibecoding"
      ],
      "id": "05o8yu"
    },
    {
      "title": "unnix: Reproducible Nix environments without installing Nix",
      "url": "https://github.com/figsoda/unnix",
      "score": 12,
      "comments": 3,
      "tags": [
        "nix"
      ],
      "id": "itmyc4"
    }
  ]
}
```

