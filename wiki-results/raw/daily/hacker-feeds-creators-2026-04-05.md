# Hacker Feeds Outcomes - Creators

Generated on: 2026-04-05 06:40:22 UTC

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
      "title": "Join our April Fools Challenge for a chance at TEA-RRIFIC prizes!!!",
      "description": "Hello, and let’s get this out of the way right now: this is no joke!!  Tired of building...",
      "url": "https://dev.to/devteam/join-our-april-fools-challenge-for-a-chance-at-tea-rrific-prizes-1ofa",
      "tags": "devchallenge, 418challenge, jokes",
      "reactions": 293,
      "comments": 75,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "LoreKit - AI That GMs Full TTRPG Campaigns",
      "description": "An open-source engine that turns AI into a real Game Master - with deterministic dice, persistent NPCs, and full campaign tracking.",
      "url": "https://dev.to/matluz/i-built-an-ai-that-gms-full-ttrpg-campaigns-774",
      "tags": "opensource, python, ai, gamedev",
      "reactions": 2,
      "comments": 0,
      "reading_time": 4,
      "author": "matluz"
    },
    {
      "title": "Deploying ADK Agents on Azure ACI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Agents in...",
      "url": "https://dev.to/gde/deploying-adk-agents-on-azure-aci-2jk6",
      "tags": "geminillm, agents, python, azureaci",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Deploy Gemma 4 on Cloud Run: Pay Only When You Actually Use It",
      "description": "Last year, Google flew me to Paris for the announcement of Gemma 3. It was an exciting event. The...",
      "url": "https://dev.to/gde/deploy-gemma-4-on-cloud-run-pay-only-when-you-actually-use-it-9ln",
      "tags": "gemma, cloudrun, cloud, ai",
      "reactions": 5,
      "comments": 2,
      "reading_time": 18,
      "author": "kulaone"
    },
    {
      "title": "Observability from Day One: What We Got Wrong in v1 and How We Fixed It in v2",
      "description": "The worst kind of production incident is the one where you're staring at a broken system and you have...",
      "url": "https://dev.to/oliverke/observability-from-day-one-what-we-got-wrong-in-v1-and-how-we-fixed-it-in-v2-36lc",
      "tags": "webdev, productivity, devops, architecture",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "oliverke"
    },
    {
      "title": "Big performance upgrade in DEV/Forem tag queries shipped yesterday. Breath of fresh air 🙂",
      "description": "A post by Ben Halpern",
      "url": "https://dev.to/ben/big-performance-upgrade-in-devforem-tag-queries-shipped-yesterday-breath-of-fresh-air-2pp0",
      "tags": "database, news, performance",
      "reactions": 35,
      "comments": 3,
      "reading_time": 0,
      "author": "ben"
    },
    {
      "title": "Deploying ADK Agents on Azure ACA (Azure Container Apps)",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Agents in...",
      "url": "https://dev.to/gde/deploying-adk-agents-on-azure-aca-azure-container-apps-3kb7",
      "tags": "gemini, azurecontainerapps, agents, googleadk",
      "reactions": 3,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "I Analyzed AI Coding Mistakes and Built an ESLint Plugin to Catch Them",
      "description": "After reviewing empirical studies on LLM-generated bugs, I built eslint-plugin-llm-core — 20 rules designed to catch the mistakes AI coding assistants make most often.",
      "url": "https://dev.to/pertrai1/i-analyzed-500-ai-coding-mistakes-and-built-an-eslint-plugin-to-catch-them-jme",
      "tags": "typescript, eslint, ai, llm",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "pertrai1"
    },
    {
      "title": "How to create your own Radio Station using a dynamic ip domain.",
      "description": "In previous posts “Steps to configure Dehydrated for ZeroSSL and Let’s Encrypt” and “Steps to...",
      "url": "https://dev.to/djemos/how-to-create-your-own-radio-station-using-a-dynamic-ip-domain-ini",
      "tags": "",
      "reactions": 4,
      "comments": 0,
      "reading_time": 13,
      "author": "djemos"
    },
    {
      "title": "You don't need to deal with code to understand Playwright",
      "description": "Trywright is a local control panel that gives you a live Playwright session in your browser — no code, no IDE, no project setup.",
      "url": "https://dev.to/abhivaikar/you-dont-need-to-deal-with-code-to-understand-playwright-39nk",
      "tags": "playwright, testing, webdev, devtools",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "abhivaikar"
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
      "forks": 20632,
      "added_stars": 23827,
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
      "author": "axios",
      "repo": "axios",
      "avatar": "https://github.com/axios.png",
      "repo_link": "https://github.com/axios/axios",
      "desc": "Promise based HTTP client for the browser and node.js",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 11597,
      "added_stars": 468,
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
      "forks": 560,
      "added_stars": 398,
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
      "forks": 6232,
      "added_stars": 738,
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
      "author": "maboloshi",
      "repo": "github-chinese",
      "avatar": "https://github.com/maboloshi.png",
      "repo_link": "https://github.com/maboloshi/github-chinese",
      "desc": "GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1249,
      "added_stars": 442,
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
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Connect All AI Code Tools (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) to 40+ AI Providers & 100+ Models",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 468,
      "added_stars": 402,
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
      "forks": 511,
      "added_stars": 119,
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
      "forks": 293,
      "added_stars": 126,
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
      "author": "CodeWithHarry",
      "repo": "Sigma-Web-Dev-Course",
      "avatar": "https://github.com/CodeWithHarry.png",
      "repo_link": "https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",
      "desc": "Source Code for Sigma Web Development Course",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3064,
      "added_stars": 62,
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
      "title": "What I Learned Supervising 5 AI Agents on a Real Project",
      "description": "47 tasks completed, 12 test failures caught, 3 context exhaustions. A week of running 5 AI agents in parallel on a real Rust project.",
      "url": "https://dev.to/battyterm/what-i-learned-supervising-5-ai-agents-on-a-real-project-cl8",
      "tags": "ai, devtools, productivity, programming",
      "reactions": 1,
      "comments": 1,
      "reading_time": 4,
      "author": "battyterm"
    },
    {
      "title": "The Case for Markdown as Your Agent's Task Format",
      "description": "JSON is for machines. YAML is for config. Markdown is for tasks. Why Markdown beats structured formats for AI agent task management.",
      "url": "https://dev.to/battyterm/the-case-for-markdown-as-your-agents-task-format-6mp",
      "tags": "ai, markdown, productivity, devtools",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "battyterm"
    },
    {
      "title": "LoreKit - AI That GMs Full TTRPG Campaigns",
      "description": "An open-source engine that turns AI into a real Game Master - with deterministic dice, persistent NPCs, and full campaign tracking.",
      "url": "https://dev.to/matluz/i-built-an-ai-that-gms-full-ttrpg-campaigns-774",
      "tags": "opensource, python, ai, gamedev",
      "reactions": 2,
      "comments": 0,
      "reading_time": 4,
      "author": "matluz"
    },
    {
      "title": "We Shipped an AI Song Generator. The Hardest Part Wasn't the AI.",
      "description": "We launched Magical Song a few weeks ago. It's an AI song generator where you describe a story, pick...",
      "url": "https://dev.to/jakub_inithouse/we-shipped-an-ai-song-generator-the-hardest-part-wasnt-the-ai-4e8a",
      "tags": "webdev, startup, ai, ux",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "jakub_inithouse"
    },
    {
      "title": "How AI is Transforming Customer Experience",
      "description": "Artificial Intelligence (AI) is fundamentally reshaping how businesses interact with their customers,...",
      "url": "https://dev.to/vishaluttammane/how-ai-is-transforming-customer-experience-19if",
      "tags": "ai, customerexperience, machinelearning, aibusiness",
      "reactions": 1,
      "comments": 1,
      "reading_time": 3,
      "author": "vishaluttammane"
    },
    {
      "title": "I Built a Self-Hosted AI Agent That Runs on a Raspberry Pi",
      "description": "profClaw is an open-source AI agent engine that runs on your hardware. 35 providers, 72 tools, 22 chat channels, and a full TUI.",
      "url": "https://dev.to/thegdsks/i-built-a-self-hosted-ai-agent-that-runs-on-a-raspberry-pi-161e",
      "tags": "ai, opensource, devtools, selfhosted",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "thegdsks"
    },
    {
      "title": "Why Your Claude-Generated Code Falls Apart Three Weeks Later (And What to Do About It)",
      "description": "You open the project three weeks after you shipped it. Something simple needs changing. And then you...",
      "url": "https://dev.to/panav_mhatre_732271d2d44b/why-your-claude-generated-code-falls-apart-three-weeks-later-and-what-to-do-about-it-22ed",
      "tags": "ai, claude, webdev, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "panav_mhatre_732271d2d44b"
    },
    {
      "title": "Deploy Gemma 4 on Cloud Run: Pay Only When You Actually Use It",
      "description": "Last year, Google flew me to Paris for the announcement of Gemma 3. It was an exciting event. The...",
      "url": "https://dev.to/gde/deploy-gemma-4-on-cloud-run-pay-only-when-you-actually-use-it-9ln",
      "tags": "gemma, cloudrun, cloud, ai",
      "reactions": 5,
      "comments": 2,
      "reading_time": 18,
      "author": "kulaone"
    },
    {
      "title": "Unlocking the Decentralized Future: A Deep Dive into AI Agent Development for Web3",
      "description": "Unlocking the Decentralized Future: A Deep Dive into AI Agent Development for Web3   The...",
      "url": "https://dev.to/0xagency/unlocking-the-decentralized-future-a-deep-dive-into-ai-agent-development-for-web3-4m0j",
      "tags": "ai, agents, development, web3",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "0xagency"
    },
    {
      "title": "How to Supervise AI Coding Agents Without Losing Your Mind",
      "description": "Running one AI agent works great. Running three in parallel on the same repo? They overwrite files, skip tests, and declare victory on broken code. Here is the supervision pattern that fixed it.",
      "url": "https://dev.to/battyterm/how-to-supervise-ai-coding-agents-without-losing-your-mind-53m4",
      "tags": "ai, devtools, productivity, tutorial",
      "reactions": 5,
      "comments": 6,
      "reading_time": 4,
      "author": "battyterm"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "luu",
      "descendants": 29,
      "id": 47645432,
      "kids": [
        47645643,
        47646592,
        47645821,
        47645854,
        47645638,
        47645710,
        47646019,
        47645770,
        47645760,
        47645949,
        47645766
      ],
      "score": 121,
      "time": 1775354069,
      "title": "Introduction to Computer Music (2009) [pdf]",
      "type": "story",
      "url": "https://composerprogrammer.com/introductiontocomputermusic.pdf"
    },
    {
      "by": "Jaso1024",
      "descendants": 147,
      "id": 47640728,
      "kids": [
        47642019,
        47642123,
        47646677,
        47642066,
        47645792,
        47641469,
        47645711,
        47642357,
        47644431,
        47642452,
        47641520,
        47641452,
        47646125,
        47642918,
        47643117,
        47645088,
        47645578,
        47642085,
        47644890,
        47642664,
        47641285,
        47644620,
        47644671,
        47642600,
        47643602,
        47642937,
        47642318,
        47641823,
        47642473,
        47642777,
        47642319,
        47645178,
        47641510,
        47641129,
        47642622,
        47643221,
        47642046,
        47644004,
        47641389,
        47644479,
        47643500,
        47641276,
        47642680,
        47641392,
        47641769,
        47641529,
        47643212,
        47642563,
        47641048,
        47642415,
        47643189,
        47642614,
        47641236,
        47644705,
        47642433,
        47641681,
        47642686,
        47642100,
        47646547,
        47642475,
        47642270,
        47640816,
        47642192
      ],
      "score": 627,
      "text": "Thought the resources for GPU arch were lacking, so here we are",
      "time": 1775321154,
      "title": "Show HN: A game where you build a GPU",
      "type": "story",
      "url": "https://jaso1024.com/mvidia/"
    },
    {
      "by": "jskopek",
      "descendants": 35,
      "id": 47595695,
      "kids": [
        47645554,
        47646647,
        47645804,
        47646586,
        47646489,
        47646500,
        47644651,
        47645291,
        47645765,
        47644734,
        47645906,
        47645134,
        47644674,
        47644791,
        47644600,
        47644933,
        47644730
      ],
      "score": 203,
      "time": 1775007106,
      "title": "OpenScreen is an open-source alternative to Screen Studio",
      "type": "story",
      "url": "https://github.com/siddharthvaddem/openscreen"
    },
    {
      "by": "tamnd",
      "descendants": 38,
      "id": 47640875,
      "kids": [
        47646750,
        47645480,
        47646499,
        47644888,
        47644949,
        47646623,
        47645545,
        47645086,
        47645350,
        47646357,
        47646170,
        47645149,
        47644650,
        47646122,
        47644789,
        47644398,
        47646294
      ],
      "score": 139,
      "text": "<a href=\"https:&#x2F;&#x2F;x.com&#x2F;karpathy&#x2F;status&#x2F;2040470801506541998\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;karpathy&#x2F;status&#x2F;2040470801506541998</a><p><a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;karpathy&#x2F;status&#x2F;2040470801506541998\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;karpathy&#x2F;status&#x2F;2040470801506541998</a>",
      "time": 1775321865,
      "title": "LLM Wiki – example of an \"idea file\"",
      "type": "story",
      "url": "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"
    },
    {
      "by": "DyslexicAtheist",
      "descendants": 66,
      "id": 47644406,
      "kids": [
        47646749,
        47645118,
        47645045,
        47645257,
        47646709,
        47644736,
        47644689,
        47646737,
        47645210,
        47644708,
        47644684,
        47644905,
        47644634,
        47644861,
        47644681
      ],
      "score": 106,
      "time": 1775343464,
      "title": "German implementation of eIDAS will require an Apple/Google account to function",
      "type": "story",
      "url": "https://bmi.usercontent.opencode.de/eudi-wallet/wallet-development-documentation-public/latest/architecture-concept/06-mobile-devices/02-mdvm/"
    },
    {
      "by": "steeve",
      "descendants": 3,
      "id": 47587089,
      "kids": [
        47646479,
        47587416
      ],
      "score": 15,
      "time": 1774963793,
      "title": "Zml-smi: universal monitoring tool for GPUs, TPUs and NPUs",
      "type": "story",
      "url": "https://zml.ai/posts/zml-smi/"
    },
    {
      "by": "petalmind",
      "descendants": 0,
      "id": 47598835,
      "score": 20,
      "time": 1775037258,
      "title": "Rubysyn: Clarifying Ruby's Syntax and Semantics",
      "type": "story",
      "url": "https://github.com/squadette/rubysyn/blob/master/README.md"
    },
    {
      "by": "gpi",
      "descendants": 266,
      "id": 47642569,
      "kids": [
        47646084,
        47646690,
        47643738,
        47643042,
        47643167,
        47643022,
        47646545,
        47643825,
        47643106,
        47643328,
        47644018,
        47646177,
        47643024,
        47646321,
        47646430,
        47644424,
        47643039,
        47643138,
        47646451,
        47643038,
        47646448,
        47643146,
        47643375,
        47645811,
        47643134,
        47646163,
        47646137,
        47643811,
        47644844,
        47644976,
        47645212,
        47644875,
        47643539,
        47644214,
        47645030,
        47646307,
        47643287,
        47643019,
        47644593,
        47644925,
        47642994,
        47643122,
        47644510,
        47643465,
        47642944,
        47646133,
        47642949,
        47643009,
        47643755,
        47645498,
        47643086,
        47644832,
        47646026,
        47643817,
        47644273,
        47645577,
        47643545,
        47643249,
        47643081,
        47645753,
        47643017,
        47643096
      ],
      "score": 547,
      "time": 1775331583,
      "title": "How many products does Microsoft have named 'Copilot'?",
      "type": "story",
      "url": "https://teybannerman.com/strategy/2026/03/31/how-many-microsoft-copilot-are-there.html"
    },
    {
      "by": "crcastle",
      "descendants": 52,
      "id": 47644864,
      "kids": [
        47644993,
        47645053,
        47645356,
        47645465,
        47645527,
        47645499,
        47646634,
        47646445,
        47645228,
        47645023,
        47646155,
        47645665
      ],
      "score": 224,
      "text": "<a href=\"https:&#x2F;&#x2F;lore.kernel.org&#x2F;lkml&#x2F;yr3inlzesdb45n6i6lpbimwr7b25kqkn37qzlvvzgad5hfd7ut@xv4cihno76wu&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;lore.kernel.org&#x2F;lkml&#x2F;yr3inlzesdb45n6i6lpbimwr7b25kqk...</a>",
      "time": 1775348035,
      "title": "AWS engineer reports PostgreSQL perf halved by Linux 7.0, fix may not be easy",
      "type": "story",
      "url": "https://www.phoronix.com/news/Linux-7.0-AWS-PostgreSQL-Drop"
    },
    {
      "by": "syedmsawaid",
      "descendants": 2,
      "id": 47613118,
      "kids": [
        47646461,
        47646380
      ],
      "score": 16,
      "text": "Hi everyone. I am built a small application on top of FSI German basic course and I need some feedback regarding it.<p>It is a small web app. Currently only Unit 01 is available. I will feed in the rest of the units later down the road as I use it myself.<p>Some of the features includes<p>- Slow and fast audio with every single word and sentence in this app. You can play them with a click of a button. No need to rewind a tap back and forth.\n- Flashcards with keyboard control to quickly go through the material and drill them out.<p>You can access the website at <a href=\"https:&#x2F;&#x2F;detawk.com&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;detawk.com&#x2F;</a> . There is a demo video on the landing page. Give it a look before signing up.<p>If you have any questions or feedback for me, let me know. I hope you like the app.",
      "time": 1775130241,
      "title": "Show HN: I built a small app for FSI German Course",
      "type": "story",
      "url": "https://detawk.com/"
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
      "by": "luu",
      "descendants": 29,
      "id": 47645432,
      "kids": [
        47645643,
        47646592,
        47645821,
        47645854,
        47645638,
        47645710,
        47646019,
        47645770,
        47645760,
        47645949,
        47645766
      ],
      "score": 121,
      "time": 1775354069,
      "title": "Introduction to Computer Music (2009) [pdf]",
      "type": "story",
      "url": "https://composerprogrammer.com/introductiontocomputermusic.pdf"
    },
    {
      "by": "Jaso1024",
      "descendants": 147,
      "id": 47640728,
      "kids": [
        47642019,
        47642123,
        47646677,
        47642066,
        47645792,
        47641469,
        47645711,
        47642357,
        47644431,
        47642452,
        47641520,
        47641452,
        47646125,
        47642918,
        47643117,
        47645088,
        47645578,
        47642085,
        47644890,
        47642664,
        47641285,
        47644620,
        47644671,
        47642600,
        47643602,
        47642937,
        47642318,
        47641823,
        47642473,
        47642777,
        47642319,
        47645178,
        47641510,
        47641129,
        47642622,
        47643221,
        47642046,
        47644004,
        47641389,
        47644479,
        47643500,
        47641276,
        47642680,
        47641392,
        47641769,
        47641529,
        47643212,
        47642563,
        47641048,
        47642415,
        47643189,
        47642614,
        47641236,
        47644705,
        47642433,
        47641681,
        47642686,
        47642100,
        47646547,
        47642475,
        47642270,
        47640816,
        47642192
      ],
      "score": 627,
      "text": "Thought the resources for GPU arch were lacking, so here we are",
      "time": 1775321154,
      "title": "Show HN: A game where you build a GPU",
      "type": "story",
      "url": "https://jaso1024.com/mvidia/"
    },
    {
      "by": "jskopek",
      "descendants": 35,
      "id": 47595695,
      "kids": [
        47646647,
        47645554,
        47645804,
        47646586,
        47646489,
        47646500,
        47644651,
        47645291,
        47645765,
        47644734,
        47645906,
        47645134,
        47644674,
        47644791,
        47644600,
        47644933,
        47644730
      ],
      "score": 204,
      "time": 1775007106,
      "title": "OpenScreen is an open-source alternative to Screen Studio",
      "type": "story",
      "url": "https://github.com/siddharthvaddem/openscreen"
    },
    {
      "by": "tamnd",
      "descendants": 38,
      "id": 47640875,
      "kids": [
        47646750,
        47645480,
        47646499,
        47644888,
        47644949,
        47646623,
        47645545,
        47645086,
        47645350,
        47646357,
        47646170,
        47645149,
        47644650,
        47646122,
        47644789,
        47644398,
        47646294
      ],
      "score": 139,
      "text": "<a href=\"https:&#x2F;&#x2F;x.com&#x2F;karpathy&#x2F;status&#x2F;2040470801506541998\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;karpathy&#x2F;status&#x2F;2040470801506541998</a><p><a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;karpathy&#x2F;status&#x2F;2040470801506541998\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;karpathy&#x2F;status&#x2F;2040470801506541998</a>",
      "time": 1775321865,
      "title": "LLM Wiki – example of an \"idea file\"",
      "type": "story",
      "url": "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"
    },
    {
      "by": "DyslexicAtheist",
      "descendants": 66,
      "id": 47644406,
      "kids": [
        47646749,
        47645118,
        47645045,
        47645257,
        47646709,
        47644736,
        47644689,
        47646737,
        47645210,
        47644708,
        47644684,
        47644905,
        47644634,
        47644861,
        47644681
      ],
      "score": 106,
      "time": 1775343464,
      "title": "German implementation of eIDAS will require an Apple/Google account to function",
      "type": "story",
      "url": "https://bmi.usercontent.opencode.de/eudi-wallet/wallet-development-documentation-public/latest/architecture-concept/06-mobile-devices/02-mdvm/"
    },
    {
      "by": "steeve",
      "descendants": 3,
      "id": 47587089,
      "kids": [
        47646479,
        47587416
      ],
      "score": 15,
      "time": 1774963793,
      "title": "Zml-smi: universal monitoring tool for GPUs, TPUs and NPUs",
      "type": "story",
      "url": "https://zml.ai/posts/zml-smi/"
    },
    {
      "by": "petalmind",
      "descendants": 0,
      "id": 47598835,
      "score": 20,
      "time": 1775037258,
      "title": "Rubysyn: Clarifying Ruby's Syntax and Semantics",
      "type": "story",
      "url": "https://github.com/squadette/rubysyn/blob/master/README.md"
    },
    {
      "by": "gpi",
      "descendants": 266,
      "id": 47642569,
      "kids": [
        47646084,
        47646690,
        47643738,
        47643042,
        47643167,
        47643022,
        47646545,
        47643825,
        47643106,
        47643328,
        47644018,
        47646177,
        47643024,
        47646321,
        47646430,
        47644424,
        47643039,
        47643138,
        47646451,
        47643038,
        47646448,
        47643146,
        47643375,
        47645811,
        47643134,
        47646163,
        47646137,
        47643811,
        47644844,
        47644976,
        47645212,
        47644875,
        47643539,
        47644214,
        47645030,
        47646307,
        47643287,
        47643019,
        47644593,
        47644925,
        47642994,
        47643122,
        47644510,
        47643465,
        47642944,
        47646133,
        47642949,
        47643009,
        47643755,
        47645498,
        47643086,
        47644832,
        47646026,
        47643817,
        47644273,
        47645577,
        47643545,
        47643249,
        47643081,
        47645753,
        47643017,
        47643096
      ],
      "score": 547,
      "time": 1775331583,
      "title": "How many products does Microsoft have named 'Copilot'?",
      "type": "story",
      "url": "https://teybannerman.com/strategy/2026/03/31/how-many-microsoft-copilot-are-there.html"
    },
    {
      "by": "crcastle",
      "descendants": 52,
      "id": 47644864,
      "kids": [
        47644993,
        47645053,
        47645356,
        47645465,
        47645527,
        47645499,
        47646634,
        47646445,
        47645228,
        47645023,
        47646155,
        47645665
      ],
      "score": 224,
      "text": "<a href=\"https:&#x2F;&#x2F;lore.kernel.org&#x2F;lkml&#x2F;yr3inlzesdb45n6i6lpbimwr7b25kqkn37qzlvvzgad5hfd7ut@xv4cihno76wu&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;lore.kernel.org&#x2F;lkml&#x2F;yr3inlzesdb45n6i6lpbimwr7b25kqk...</a>",
      "time": 1775348035,
      "title": "AWS engineer reports PostgreSQL perf halved by Linux 7.0, fix may not be easy",
      "type": "story",
      "url": "https://www.phoronix.com/news/Linux-7.0-AWS-PostgreSQL-Drop"
    },
    {
      "by": "syedmsawaid",
      "descendants": 2,
      "id": 47613118,
      "kids": [
        47646461,
        47646380
      ],
      "score": 16,
      "text": "Hi everyone. I am built a small application on top of FSI German basic course and I need some feedback regarding it.<p>It is a small web app. Currently only Unit 01 is available. I will feed in the rest of the units later down the road as I use it myself.<p>Some of the features includes<p>- Slow and fast audio with every single word and sentence in this app. You can play them with a click of a button. No need to rewind a tap back and forth.\n- Flashcards with keyboard control to quickly go through the material and drill them out.<p>You can access the website at <a href=\"https:&#x2F;&#x2F;detawk.com&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;detawk.com&#x2F;</a> . There is a demo video on the landing page. Give it a look before signing up.<p>If you have any questions or feedback for me, let me know. I hope you like the app.",
      "time": 1775130241,
      "title": "Show HN: I built a small app for FSI German Course",
      "type": "story",
      "url": "https://detawk.com/"
    },
    {
      "by": "kaipereira",
      "descendants": 8,
      "id": 47639303,
      "kids": [
        47645159,
        47645573,
        47645056,
        47644386
      ],
      "score": 77,
      "text": "I love getting cool swag from hackathons and I also love designing PCB&#x27;s, so when my friend asked me if I would design hackathon badges for a large game jam in singapore, I was absolutely down!<p>The theme of overglade was a &quot;The game jam within a game&quot;, pretty cool concept right! High schoolers from around the world were flown out to the event by hackclub after they spent about 70 hours designing their own game.<p>These badges needed to be really cheap and simple, because we were going to manufacture about a hundred in a pretty limited amount of time. I went with a zero-power approach, which means sticking with e-inks, and I decided to include NFC if the organizers wanted to introduce it into the roleplay of the event, and so participants could add their website or github if they so choose!<p>I used an RP2040-based architecture because it&#x27;s really easy and cheap to get on the first try, and then added an ST25 passive NFC tag which was really simple to configure. The badge is in the shape of a ticket, because you got a &quot;ticket&quot; to the event after spending a lot of time designing games to qualify! 20 GPIO&#x27;s are broken out onto the edges if you&#x27;re ever in a pinch at a hackathon, and I wanted the badges to feel really fun so there&#x27;s a lot of art designed by various people in the community!<p>The badge worked really well and I learned quite a lot in the process. My takeaways are to manufacture a BUNCH of extra badges, because some will end up breaking; to think about your PCB in 3D, because one of the inductors was a bit tall and caused more badges to break; and to have a strong vision of your final product, because it really helped me to create something unique and beautiful :D<p>I like to journal about all my projects, so if you&#x27;d like to read my full design process, feel free to take a look at my journal (<a href=\"https:&#x2F;&#x2F;github.com&#x2F;KaiPereira&#x2F;Overglade-Badges&#x2F;blob&#x2F;master&#x2F;JOURNAL.md\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;KaiPereira&#x2F;Overglade-Badges&#x2F;blob&#x2F;master&#x2F;J...</a>). If you also have any questions or feedback, I&#x27;d be happy to answer them!",
      "time": 1775312421,
      "title": "Show HN: I made open source, zero power PCB hackathon badges",
      "type": "story",
      "url": "https://github.com/KaiPereira/Overglade-Badges"
    },
    {
      "by": "jrandolf",
      "descendants": 71,
      "id": 47639779,
      "kids": [
        47644369,
        47641892,
        47641080,
        47640846,
        47641009,
        47646193,
        47641180,
        47642285,
        47640910,
        47642056,
        47644028,
        47642963,
        47642315,
        47640961,
        47642492,
        47641013,
        47641031,
        47641192,
        47642955,
        47641753,
        47644512,
        47642910,
        47642143,
        47640970,
        47640928,
        47643964,
        47643547,
        47642320,
        47642253,
        47643473
      ],
      "score": 146,
      "text": "Running DeepSeek V3 (685B) requires 8×H100 GPUs which is about $14k&#x2F;month. Most developers only need 15-25 tok&#x2F;s. sllm lets you join a cohort of developers sharing a dedicated node. You reserve a spot with your card, and nobody is charged until the cohort fills. Prices start at $5&#x2F;mo for smaller models.<p>The LLMs are completely private (we don&#x27;t log any traffic).<p>The API is OpenAI-compatible (we run vLLM), so you just swap the base URL. Currently offering a few models.",
      "time": 1775315938,
      "title": "Show HN: sllm – Split a GPU node with other developers, unlimited tokens",
      "type": "story",
      "url": "https://sllm.cloud"
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
      "title": "The nvim-treesitter repository was archived",
      "url": "https://github.com/nvim-treesitter/nvim-treesitter",
      "score": 62,
      "comments": 34,
      "tags": [
        "editors",
        "programming",
        "vim"
      ],
      "id": "jr4acs"
    },
    {
      "title": "Where can I find the old internet?",
      "url": "",
      "score": 56,
      "comments": 44,
      "tags": [
        "ask",
        "culture"
      ],
      "id": "v7r423"
    },
    {
      "title": "Value numbering",
      "url": "https://bernsteinbear.com/blog/value-numbering/",
      "score": 15,
      "comments": 0,
      "tags": [
        "compilers"
      ],
      "id": "fqjzje"
    },
    {
      "title": "Your code is worthless",
      "url": "https://nathanielfishel.substack.com/p/your-code-is-worthless",
      "score": 46,
      "comments": 13,
      "tags": [
        "vibecoding"
      ],
      "id": "wdq10i"
    },
    {
      "title": "If you thought the speed of writing code was your problem - you have bigger problems",
      "url": "https://debuggingleadership.com/blog/if-you-thought-the-speed-of-writing-code-was-your-problem-you-have-bigger-problems",
      "score": 4,
      "comments": 2,
      "tags": [
        "practices"
      ],
      "id": "05o8yu"
    },
    {
      "title": "Claude Code Found a Linux Vulnerability Hidden for 23 Years",
      "url": "https://mtlynch.io/claude-code-found-linux-vulnerability/",
      "score": 79,
      "comments": 21,
      "tags": [
        "security",
        "vibecoding"
      ],
      "id": "lh9rmv"
    },
    {
      "title": "setting up the atkey.pro usb fingerprint reader in linux -- this should also work for any fido2 u2p usb fingerprint reader; maybe even those $20 ones",
      "url": "https://gist.github.com/charmparticle/a3f3ccb804f9f79115e9d88892363e7f",
      "score": 3,
      "comments": 0,
      "tags": [
        "hardware",
        "linux"
      ],
      "id": "uai6zz"
    },
    {
      "title": "The Feature That Has Never Worked · A broken auto-live poller, and what perceived urgency does to Claude Code",
      "url": "https://christophermeiklejohn.com/ai/zabriskie/reliability/2026/04/03/the-feature-that-has-never-worked.html",
      "score": 16,
      "comments": 5,
      "tags": [
        "vibecoding"
      ],
      "id": "8sqd2j"
    },
    {
      "title": "The Cathedral, the Bazaar, and the Winchester Mystery House",
      "url": "https://www.dbreunig.com/2026/03/26/winchester-mystery-house.html",
      "score": 4,
      "comments": 3,
      "tags": [
        "vibecoding"
      ],
      "id": "5kuph5"
    },
    {
      "title": "Slap: Functional Concatenative Language... with a Borrow Checker?",
      "url": "https://taylor.town/slap-000",
      "score": 90,
      "comments": 13,
      "tags": [
        "concatenative",
        "plt"
      ],
      "id": "3fprl8"
    }
  ]
}
```

