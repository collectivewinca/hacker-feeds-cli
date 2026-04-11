# Hacker Feeds Outcomes - Creators

Generated on: 2026-04-11 06:38:19 UTC

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
      "title": "You’re a Real Software Developer Only If…",
      "description": "Uff, I’m finally done with my talk at jsDay 2026!  And honestly? It went at least good. People showed...",
      "url": "https://dev.to/sylwia-lask/youre-a-real-software-developer-only-if-2mo8",
      "tags": "jokes, devlive",
      "reactions": 119,
      "comments": 68,
      "reading_time": 3,
      "author": "sylwia-lask"
    },
    {
      "title": "What was your win this week??",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-3df3",
      "tags": "discuss, weeklyretro",
      "reactions": 22,
      "comments": 23,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "I tried to make DevFest Ireland accessible - and ended up building a SaaS",
      "description": "The email I couldn't ignore   A few months into organising DevFest Ireland 2025, I received...",
      "url": "https://dev.to/gdg/i-tried-to-make-devfest-ireland-accessible-and-ended-up-building-a-saas-1o87",
      "tags": "a11y, saas, showdev, startup",
      "reactions": 19,
      "comments": 3,
      "reading_time": 5,
      "author": "jouwdan"
    },
    {
      "title": "Building a Multimodal Cross Cloud Live Agent with ADK, Azure Fabric, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build cross cloud...",
      "url": "https://dev.to/gde/building-a-multimodal-cross-cloud-live-agent-with-adk-azure-fabric-and-gemini-cli-3k4a",
      "tags": "googlecloudplatform, adk, gemini, azure",
      "reactions": 4,
      "comments": 0,
      "reading_time": 7,
      "author": "xbill"
    },
    {
      "title": "What is an LLM actually doing when it's \"thinking\"?",
      "description": "Ever wondered what an LLM is doing when it's \"thinking\"?  In this episode of Release Notes Explained,...",
      "url": "https://dev.to/googleai/what-is-an-llm-actually-doing-when-its-thinking-5do5",
      "tags": "gemini, llm, ai, machinelearning",
      "reactions": 20,
      "comments": 1,
      "reading_time": 1,
      "author": "nikitamaia"
    },
    {
      "title": "Building a Multimodal Cross Cloud Live Agent with ADK, Amazon ECS Express, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build cross cloud...",
      "url": "https://dev.to/gde/building-a-multimodal-cross-cloud-live-agent-with-adk-amazon-ecs-express-and-gemini-cli-30a8",
      "tags": "geminilive, python, gemini, googleadk",
      "reactions": 10,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
    },
    {
      "title": "Cross Cloud Multi Agent Comic Builder with ADK, Amazon EKS, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build low code...",
      "url": "https://dev.to/gde/cross-cloud-multi-agent-comic-builder-with-adk-amazon-eks-and-gemini-cli-4o10",
      "tags": "gemini, googleadk, python, aws",
      "reactions": 3,
      "comments": 0,
      "reading_time": 7,
      "author": "xbill"
    },
    {
      "title": "Cross Cloud Multi Agent Comic Builder with ADK, Amazon ECS Express, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build low code...",
      "url": "https://dev.to/gde/cross-cloud-multi-agent-comic-builder-with-adk-amazon-ecs-express-and-gemini-cli-41me",
      "tags": "google, gemini, ecsexpress, python",
      "reactions": 3,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
    },
    {
      "title": "I Keep Telling Claude the Same Things. So He Started Writing Them Down Himself.",
      "description": "A small moment that changed how I think about AI coding tools.     If you've used Claude Code for...",
      "url": "https://dev.to/eli_coding/i-keep-telling-claude-the-same-things-so-he-started-writing-them-down-himself-1i9",
      "tags": "angular, ai, claude, webdev",
      "reactions": 2,
      "comments": 7,
      "reading_time": 4,
      "author": "eli_coding"
    },
    {
      "title": "Tracking, Propagation Attacks, and What We Found in Real Email Traffic",
      "description": "A few weeks ago I posted about finding the same per-recipient identifier in three independent places...",
      "url": "https://dev.to/wadco/tracking-propagation-attacks-and-what-we-found-in-real-traffic-4pc2",
      "tags": "privacy, security, webdev",
      "reactions": 11,
      "comments": 0,
      "reading_time": 7,
      "author": "wadco"
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
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Connect All AI Code Tools (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) to 40+ AI Providers & 100+ Models",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 566,
      "added_stars": 543,
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
      "author": "Anil-matcha",
      "repo": "Open-Higgsfield-AI",
      "avatar": "https://github.com/Anil-matcha.png",
      "repo_link": "https://github.com/Anil-matcha/Open-Higgsfield-AI",
      "desc": "Open-source alternative to Higgsfield AI — Free AI image generation & cinema studio with 20+ models (Flux, SDXL, Midjourney, Ideogram). Self-hosted, customizable, MIT licensed.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 751,
      "added_stars": 1381,
      "builtBy": [
        {
          "username": "Anil-matcha",
          "href": "https://github.com/Anil-matcha",
          "avatar": "https://avatars.githubusercontent.com/u/4326215"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "vadootvpeer",
          "href": "https://github.com/vadootvpeer",
          "avatar": "https://avatars.githubusercontent.com/u/64298579"
        },
        {
          "username": "jaiprasad04",
          "href": "https://github.com/jaiprasad04",
          "avatar": "https://avatars.githubusercontent.com/u/114457757"
        },
        {
          "username": "taherfattahi",
          "href": "https://github.com/taherfattahi",
          "avatar": "https://avatars.githubusercontent.com/u/14248281"
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
      "forks": 1292,
      "added_stars": 610,
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
      "author": "jo-inc",
      "repo": "camofox-browser",
      "avatar": "https://github.com/jo-inc.png",
      "repo_link": "https://github.com/jo-inc/camofox-browser",
      "desc": "Headless browser automation server for AI agents to visit sites that are usually blocked",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 173,
      "added_stars": 599,
      "builtBy": [
        {
          "username": "skyfallsin",
          "href": "https://github.com/skyfallsin",
          "avatar": "https://avatars.githubusercontent.com/u/998"
        },
        {
          "username": "Microck",
          "href": "https://github.com/Microck",
          "avatar": "https://avatars.githubusercontent.com/u/45483921"
        },
        {
          "username": "mihado",
          "href": "https://github.com/mihado",
          "avatar": "https://avatars.githubusercontent.com/u/940981"
        },
        {
          "username": "imtylervo",
          "href": "https://github.com/imtylervo",
          "avatar": "https://avatars.githubusercontent.com/u/13073663"
        },
        {
          "username": "BuffMcBigHuge",
          "href": "https://github.com/BuffMcBigHuge",
          "avatar": "https://avatars.githubusercontent.com/u/20268348"
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
      "forks": 614,
      "added_stars": 293,
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
      "forks": 6274,
      "added_stars": 542,
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
      "author": "sub-store-org",
      "repo": "Sub-Store",
      "avatar": "https://github.com/sub-store-org.png",
      "repo_link": "https://github.com/sub-store-org/Sub-Store",
      "desc": "Advanced Subscription Manager for QX, Loon, Surge, Stash, Egern and Shadowrocket!",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1072,
      "added_stars": 107,
      "builtBy": [
        {
          "username": "xream",
          "href": "https://github.com/xream",
          "avatar": "https://avatars.githubusercontent.com/u/1210282"
        },
        {
          "username": "Peng-YM",
          "href": "https://github.com/Peng-YM",
          "avatar": "https://avatars.githubusercontent.com/u/21050064"
        },
        {
          "username": "Keywos",
          "href": "https://github.com/Keywos",
          "avatar": "https://avatars.githubusercontent.com/u/104524788"
        },
        {
          "username": "Aritro37",
          "href": "https://github.com/Aritro37",
          "avatar": "https://avatars.githubusercontent.com/u/85866469"
        },
        {
          "username": "Ariesly",
          "href": "https://github.com/Ariesly",
          "avatar": "https://avatars.githubusercontent.com/u/12808484"
        }
      ]
    },
    {
      "author": "stephengpope",
      "repo": "thepopebot",
      "avatar": "https://github.com/stephengpope.png",
      "repo_link": "https://github.com/stephengpope/thepopebot",
      "desc": "The Pope Bot is an autonomous AI agent that you can configure and build to do just about anything you want, all day, everyday, 24/7.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 625,
      "added_stars": 228,
      "builtBy": [
        {
          "username": "stephengpope",
          "href": "https://github.com/stephengpope",
          "avatar": "https://avatars.githubusercontent.com/u/1420454"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 126,
      "added_stars": 110,
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
      "author": "phaserjs",
      "repo": "phaser",
      "avatar": "https://github.com/phaserjs.png",
      "repo_link": "https://github.com/phaserjs/phaser",
      "desc": "Phaser is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7130,
      "added_stars": 75,
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
          "username": "BenjaminDRichards",
          "href": "https://github.com/BenjaminDRichards",
          "avatar": "https://avatars.githubusercontent.com/u/4408552"
        }
      ]
    },
    {
      "author": "sveltejs",
      "repo": "svelte",
      "avatar": "https://github.com/sveltejs.png",
      "repo_link": "https://github.com/sveltejs/svelte",
      "desc": "web development for the rest of us",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4885,
      "added_stars": 184,
      "builtBy": [
        {
          "username": "Rich-Harris",
          "href": "https://github.com/Rich-Harris",
          "avatar": "https://avatars.githubusercontent.com/u/1162160"
        },
        {
          "username": "dummdidumm",
          "href": "https://github.com/dummdidumm",
          "avatar": "https://avatars.githubusercontent.com/u/5968653"
        },
        {
          "username": "Conduitry",
          "href": "https://github.com/Conduitry",
          "avatar": "https://avatars.githubusercontent.com/u/16696352"
        },
        {
          "username": "trueadm",
          "href": "https://github.com/trueadm",
          "avatar": "https://avatars.githubusercontent.com/u/1519870"
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
      "forks": 23280,
      "added_stars": 14569,
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
      "author": "vercel",
      "repo": "next.js",
      "avatar": "https://github.com/vercel.png",
      "repo_link": "https://github.com/vercel/next.js",
      "desc": "The React Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 30864,
      "added_stars": 314,
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
      "title": "The Formula Was Exact. The Assumption Was Wrong. That's Not an AI Problem.",
      "description": "Your geology will always govern your geophysics.   My lecturer said it once. I wrote it down. I...",
      "url": "https://dev.to/dannwaneri/the-formula-was-exact-the-assumption-was-wrong-thats-not-an-ai-problem-58dm",
      "tags": "ai, webdev, career, python",
      "reactions": 11,
      "comments": 1,
      "reading_time": 5,
      "author": "dannwaneri"
    },
    {
      "title": "I got mass-flagged by GPTZero for my own writing. So I built an open-source alternative in pure Python.",
      "description": "Every AI text detector is either paid or closed-source.  GPTZero charges $15/month. Originality.ai...",
      "url": "https://dev.to/wd400/i-got-mass-flagged-by-gptzero-for-my-own-writing-so-i-built-an-open-source-alternative-in-pure-5aj2",
      "tags": "python, ai, opensource, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "wd400"
    },
    {
      "title": "I Keep Telling Claude the Same Things. So He Started Writing Them Down Himself.",
      "description": "A small moment that changed how I think about AI coding tools.     If you've used Claude Code for...",
      "url": "https://dev.to/eli_coding/i-keep-telling-claude-the-same-things-so-he-started-writing-them-down-himself-1i9",
      "tags": "angular, ai, claude, webdev",
      "reactions": 2,
      "comments": 7,
      "reading_time": 4,
      "author": "eli_coding"
    },
    {
      "title": "From Cardboard to Code",
      "description": "The design challenge isn't understanding board games. It's turning prose rules into structures a...",
      "url": "https://dev.to/sebs/from-cardboard-to-code-29d5",
      "tags": "ai, gamedev, gamedesign",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sebs"
    },
    {
      "title": "G-Force: The Quantum Gravity UI Spec (Parody)",
      "description": "What I Built   I built G-Force: The Quantum Gravity UI, a satirical project showcasing the...",
      "url": "https://dev.to/basant_nema31/g-force-the-quantum-gravity-ui-spec-parody-47k",
      "tags": "418challenge, devchallenge, showdev, ai",
      "reactions": 1,
      "comments": 0,
      "reading_time": 1,
      "author": "basant_nema31"
    },
    {
      "title": "Every Trending AI Agent Project Is Reinventing Something Humans Already Built",
      "description": "Every Trending AI Agent Project Is Reinventing Something Humans Already Built   I've been...",
      "url": "https://dev.to/willamhou/every-trending-ai-agent-project-is-reinventing-something-humans-already-built-469e",
      "tags": "ai, security, agents, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "willamhou"
    },
    {
      "title": "I Replaced 12 Kitchen Managers Guessing \"How Much Chicken Do We Need\" With 3 ML Models. Here's the Entire Architecture.",
      "description": "This is a case study: AI in Supply Chain Every restaurant chain has the same dirty secret. Nobody...",
      "url": "https://dev.to/dhaivat_jambudia/i-replaced-12-kitchen-managers-guessing-how-much-chicken-do-we-need-with-3-ml-models-heres-the-421e",
      "tags": "ai, machinelearning, llm, agents",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "dhaivat_jambudia"
    },
    {
      "title": "When does a difference engine become a search for truth?",
      "description": "Scout had a seizure during her overnight training window.  I don't know a better way to put it.  I...",
      "url": "https://dev.to/treytomes/when-does-a-difference-engine-become-a-search-for-truth-jcf",
      "tags": "ai, devjournal, llm, machinelearning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "treytomes"
    },
    {
      "title": "WordPress 7.0: The Good, the AI, and the Still Missing",
      "description": "WordPress 7.0 was supposed to launch yesterday at WordCamp Asia. It didn't. On March 31st, the core...",
      "url": "https://dev.to/adamgreenough/wordpress-70-the-good-the-ai-and-the-still-missing-4oa8",
      "tags": "wordpress, ai, webdev, opensource",
      "reactions": 5,
      "comments": 0,
      "reading_time": 6,
      "author": "adamgreenough"
    },
    {
      "title": "Detecting architecture drift during system design",
      "description": "A team ships a feature. Weeks later, a security flaw surfaces. Not a bug in the code — a flaw in the...",
      "url": "https://dev.to/archrad_architect/detecting-architecture-drift-3pie",
      "tags": "architecture, opensource, ai, enterprise",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "archrad_architect"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "cperciva",
      "descendants": 5,
      "id": 47727711,
      "kids": [
        47727990,
        47727965,
        47727959
      ],
      "score": 62,
      "time": 1775885470,
      "title": "20 Years on AWS and Never Not My Job",
      "type": "story",
      "url": "https://www.daemonology.net/blog/2026-04-11-20-years-on-AWS-and-never-not-my-job.html"
    },
    {
      "by": "normanvalentine",
      "descendants": 335,
      "id": 47724352,
      "kids": [
        47728071,
        47726595,
        47727641,
        47725701,
        47725725,
        47724910,
        47724815,
        47725745,
        47724847,
        47725939,
        47724846,
        47724667,
        47725347,
        47725779,
        47724820,
        47724854,
        47727667,
        47727843,
        47727770,
        47725378,
        47727738,
        47724721,
        47727957,
        47724894,
        47724953,
        47727695,
        47727687,
        47724827,
        47726962,
        47726805,
        47725177,
        47727247,
        47727363,
        47724693,
        47724678,
        47726713,
        47727528,
        47724706,
        47725694,
        47726110,
        47725565,
        47725999,
        47725808,
        47725279,
        47726642,
        47726882,
        47726129,
        47727041,
        47725872,
        47724954,
        47725141,
        47725395,
        47725056,
        47727043,
        47725069,
        47726312,
        47725379,
        47726150,
        47724800,
        47725032,
        47725971,
        47726981,
        47724895,
        47725838,
        47727266,
        47725291,
        47724958,
        47725271,
        47727452,
        47724858,
        47725383,
        47724828,
        47725391,
        47725679,
        47726388,
        47725564,
        47725257,
        47727431,
        47727383,
        47726214,
        47725213,
        47727264,
        47727162,
        47724837,
        47725666,
        47724903,
        47727074,
        47725845,
        47726763,
        47724938,
        47724836,
        47726158,
        47724890,
        47726052,
        47725955,
        47725471,
        47725401,
        47725139,
        47724863,
        47724664,
        47724853,
        47725804,
        47725956,
        47726070,
        47725535,
        47724753,
        47724838,
        47726669,
        47725543,
        47725190
      ],
      "score": 636,
      "time": 1775859400,
      "title": "Filing the corners off my MacBooks",
      "type": "story",
      "url": "https://kentwalters.com/posts/corners/"
    },
    {
      "by": "areoform",
      "descendants": 253,
      "id": 47725583,
      "kids": [
        47725663,
        47726166,
        47726338,
        47725721,
        47725840,
        47725824,
        47726124,
        47725729,
        47725727,
        47725599,
        47727226,
        47727526,
        47726306,
        47725928,
        47725619,
        47727389,
        47725747,
        47726261,
        47726399,
        47725769,
        47726100,
        47726073,
        47727545,
        47726157,
        47725806,
        47726094,
        47727803,
        47725686,
        47726054,
        47725616,
        47726703,
        47727379,
        47726949,
        47726331,
        47726071,
        47726064,
        47725647,
        47726933,
        47725710,
        47726443,
        47726637,
        47725854,
        47725938,
        47727063
      ],
      "score": 749,
      "time": 1775866251,
      "title": "Artemis II safely splashes down",
      "type": "story",
      "url": "https://www.cbsnews.com/live-updates/artemis-ii-splashdown-return/"
    },
    {
      "by": "burnt-resistor",
      "descendants": 137,
      "id": 47719740,
      "kids": [
        47728050,
        47721597,
        47720716,
        47721829,
        47722508,
        47720357,
        47723984,
        47727938,
        47720803,
        47722421,
        47720652,
        47727243,
        47721279,
        47720380,
        47725801,
        47722980,
        47726238,
        47727842,
        47720319,
        47726074,
        47722174,
        47720679,
        47725655,
        47725331,
        47723056,
        47721552,
        47721738,
        47720764,
        47720814,
        47723341,
        47720461,
        47725610,
        47721537,
        47725433,
        47721610,
        47723290,
        47723434,
        47725106,
        47721505,
        47720560,
        47722300,
        47720946,
        47721341,
        47720958,
        47723181,
        47723156,
        47723037,
        47725857,
        47720259,
        47724734,
        47723152,
        47719983,
        47722619,
        47722369,
        47723293,
        47723500,
        47727950,
        47723656,
        47722377,
        47721450,
        47720617,
        47720604
      ],
      "score": 760,
      "time": 1775835448,
      "title": "1D Chess",
      "type": "story",
      "url": "https://rowan441.github.io/1dchess/chess.html"
    },
    {
      "by": "neversaydie",
      "descendants": 161,
      "id": 47722333,
      "kids": [
        47723365,
        47722837,
        47726577,
        47722830,
        47724519,
        47723584,
        47722818,
        47727245,
        47724230,
        47727633,
        47723655,
        47723084,
        47723562,
        47724381,
        47724102,
        47726367,
        47727913,
        47723433,
        47727595,
        47725063,
        47724456,
        47725513,
        47726217,
        47724438,
        47723279,
        47724884,
        47723266,
        47722552
      ],
      "score": 300,
      "time": 1775848222,
      "title": "Chimpanzees in Uganda locked in eight-year 'civil war', say researchers",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/cr71lkzv49po"
    },
    {
      "by": "RohanAdwankar",
      "descendants": 31,
      "id": 47724118,
      "kids": [
        47728062,
        47726171,
        47727823,
        47724874,
        47724814,
        47725059,
        47727494,
        47725536,
        47725431,
        47724911,
        47726688,
        47726474,
        47725998,
        47725100,
        47725969
      ],
      "score": 291,
      "time": 1775858193,
      "title": "Installing every* Firefox extension",
      "type": "story",
      "url": "https://jack.cab/blog/every-firefox-extension"
    },
    {
      "by": "iceberger2001",
      "descendants": 20,
      "id": 47698455,
      "kids": [
        47728024,
        47728066,
        47728045,
        47727524,
        47727826,
        47727978,
        47727625,
        47727874,
        47727933,
        47727717,
        47728011,
        47727653,
        47698646,
        47727833,
        47727961,
        47727714,
        47727765,
        47698777,
        47698456
      ],
      "score": 44,
      "time": 1775699567,
      "title": "Starfling: A one-tap endless orbital slingshot game in a single HTML file",
      "type": "story",
      "url": "https://playstarfling.com"
    },
    {
      "by": "zx2c4",
      "descendants": 125,
      "id": 47719942,
      "kids": [
        47720228,
        47720391,
        47727820,
        47727064,
        47727646,
        47721949,
        47722922,
        47723669,
        47720471,
        47722128,
        47720244,
        47725762,
        47720203,
        47726800,
        47720993,
        47722936,
        47722482,
        47722580,
        47723192,
        47721859,
        47722225
      ],
      "score": 446,
      "text": "Recent and related: <i>Microsoft terminated the account VeraCrypt used to sign Windows drivers</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47686549\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47686549</a>",
      "time": 1775836192,
      "title": "WireGuard makes new Windows release following Microsoft signing resolution",
      "type": "story",
      "url": "https://lists.zx2c4.com/pipermail/wireguard/2026-April/009561.html"
    },
    {
      "by": "GenericCanadian",
      "descendants": 10,
      "id": 47698111,
      "kids": [
        47727986,
        47727979,
        47727639,
        47727708,
        47727186,
        47726790
      ],
      "score": 62,
      "time": 1775696327,
      "title": "Bevy game development tutorials and in-depth resources",
      "type": "story",
      "url": "https://taintedcoders.com/"
    },
    {
      "by": "1659447091",
      "descendants": 3,
      "id": 47727575,
      "kids": [
        47728072,
        47727972
      ],
      "score": 6,
      "time": 1775883857,
      "title": "Great at gaming? US air traffic control wants you to apply",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/ce84rvx0e6do"
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
      "by": "cperciva",
      "descendants": 5,
      "id": 47727711,
      "kids": [
        47727990,
        47727965,
        47727959
      ],
      "score": 62,
      "time": 1775885470,
      "title": "20 Years on AWS and Never Not My Job",
      "type": "story",
      "url": "https://www.daemonology.net/blog/2026-04-11-20-years-on-AWS-and-never-not-my-job.html"
    },
    {
      "by": "normanvalentine",
      "descendants": 335,
      "id": 47724352,
      "kids": [
        47728071,
        47726595,
        47727641,
        47725701,
        47725725,
        47724910,
        47724815,
        47725745,
        47724847,
        47725939,
        47724846,
        47724667,
        47725347,
        47725779,
        47724820,
        47724854,
        47727667,
        47727843,
        47727770,
        47725378,
        47727738,
        47724721,
        47727957,
        47724894,
        47724953,
        47727695,
        47727687,
        47724827,
        47726962,
        47726805,
        47725177,
        47727247,
        47727363,
        47724693,
        47724678,
        47726713,
        47727528,
        47724706,
        47725694,
        47726110,
        47725565,
        47725999,
        47725808,
        47725279,
        47726642,
        47726882,
        47726129,
        47727041,
        47725872,
        47724954,
        47725141,
        47725395,
        47725056,
        47727043,
        47725069,
        47726312,
        47725379,
        47726150,
        47724800,
        47725032,
        47725971,
        47726981,
        47724895,
        47725838,
        47727266,
        47725291,
        47724958,
        47725271,
        47727452,
        47724858,
        47725383,
        47724828,
        47725391,
        47725679,
        47726388,
        47725564,
        47725257,
        47727431,
        47727383,
        47726214,
        47725213,
        47727264,
        47727162,
        47724837,
        47725666,
        47724903,
        47727074,
        47725845,
        47726763,
        47724938,
        47724836,
        47726158,
        47724890,
        47726052,
        47725955,
        47725471,
        47725401,
        47725139,
        47724863,
        47724664,
        47724853,
        47725804,
        47725956,
        47726070,
        47725535,
        47724753,
        47724838,
        47726669,
        47725543,
        47725190
      ],
      "score": 636,
      "time": 1775859400,
      "title": "Filing the corners off my MacBooks",
      "type": "story",
      "url": "https://kentwalters.com/posts/corners/"
    },
    {
      "by": "areoform",
      "descendants": 253,
      "id": 47725583,
      "kids": [
        47725663,
        47726166,
        47726338,
        47725721,
        47725840,
        47725824,
        47726124,
        47725729,
        47725727,
        47725599,
        47727226,
        47727526,
        47726306,
        47725928,
        47725619,
        47727389,
        47725747,
        47726261,
        47726399,
        47725769,
        47726100,
        47726073,
        47727545,
        47726157,
        47725806,
        47726094,
        47727803,
        47725686,
        47726054,
        47725616,
        47726703,
        47727379,
        47726949,
        47726331,
        47726071,
        47726064,
        47725647,
        47726933,
        47725710,
        47726443,
        47726637,
        47725854,
        47725938,
        47727063
      ],
      "score": 749,
      "time": 1775866251,
      "title": "Artemis II safely splashes down",
      "type": "story",
      "url": "https://www.cbsnews.com/live-updates/artemis-ii-splashdown-return/"
    },
    {
      "by": "burnt-resistor",
      "descendants": 137,
      "id": 47719740,
      "kids": [
        47728050,
        47721597,
        47720716,
        47721829,
        47722508,
        47720357,
        47723984,
        47727938,
        47720803,
        47722421,
        47720652,
        47727243,
        47721279,
        47720380,
        47725801,
        47722980,
        47726238,
        47727842,
        47720319,
        47726074,
        47722174,
        47720679,
        47725655,
        47725331,
        47723056,
        47721552,
        47721738,
        47720764,
        47720814,
        47723341,
        47720461,
        47725610,
        47721537,
        47725433,
        47721610,
        47723290,
        47723434,
        47725106,
        47721505,
        47720560,
        47722300,
        47720946,
        47721341,
        47720958,
        47723181,
        47723156,
        47723037,
        47725857,
        47720259,
        47724734,
        47723152,
        47719983,
        47722619,
        47722369,
        47723293,
        47723500,
        47727950,
        47723656,
        47722377,
        47721450,
        47720617,
        47720604
      ],
      "score": 760,
      "time": 1775835448,
      "title": "1D Chess",
      "type": "story",
      "url": "https://rowan441.github.io/1dchess/chess.html"
    },
    {
      "by": "neversaydie",
      "descendants": 161,
      "id": 47722333,
      "kids": [
        47723365,
        47722837,
        47726577,
        47722830,
        47724519,
        47723584,
        47722818,
        47727245,
        47724230,
        47727633,
        47723655,
        47723084,
        47723562,
        47724381,
        47724102,
        47726367,
        47727913,
        47723433,
        47727595,
        47725063,
        47724456,
        47725513,
        47726217,
        47724438,
        47723279,
        47724884,
        47723266,
        47722552
      ],
      "score": 300,
      "time": 1775848222,
      "title": "Chimpanzees in Uganda locked in eight-year 'civil war', say researchers",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/cr71lkzv49po"
    },
    {
      "by": "RohanAdwankar",
      "descendants": 31,
      "id": 47724118,
      "kids": [
        47728062,
        47726171,
        47727823,
        47724874,
        47724814,
        47725059,
        47727494,
        47725536,
        47725431,
        47724911,
        47726688,
        47726474,
        47725998,
        47725100,
        47725969
      ],
      "score": 291,
      "time": 1775858193,
      "title": "Installing every* Firefox extension",
      "type": "story",
      "url": "https://jack.cab/blog/every-firefox-extension"
    },
    {
      "by": "iceberger2001",
      "descendants": 20,
      "id": 47698455,
      "kids": [
        47728024,
        47728066,
        47728045,
        47727524,
        47727826,
        47727978,
        47727625,
        47727874,
        47727933,
        47727717,
        47728011,
        47727653,
        47698646,
        47727833,
        47727961,
        47727714,
        47727765,
        47698777,
        47698456
      ],
      "score": 44,
      "time": 1775699567,
      "title": "Starfling: A one-tap endless orbital slingshot game in a single HTML file",
      "type": "story",
      "url": "https://playstarfling.com"
    },
    {
      "by": "zx2c4",
      "descendants": 125,
      "id": 47719942,
      "kids": [
        47720228,
        47720391,
        47727820,
        47727064,
        47727646,
        47721949,
        47722922,
        47723669,
        47720471,
        47722128,
        47720244,
        47725762,
        47720203,
        47726800,
        47720993,
        47722936,
        47722482,
        47722580,
        47723192,
        47721859,
        47722225
      ],
      "score": 446,
      "text": "Recent and related: <i>Microsoft terminated the account VeraCrypt used to sign Windows drivers</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47686549\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47686549</a>",
      "time": 1775836192,
      "title": "WireGuard makes new Windows release following Microsoft signing resolution",
      "type": "story",
      "url": "https://lists.zx2c4.com/pipermail/wireguard/2026-April/009561.html"
    },
    {
      "by": "GenericCanadian",
      "descendants": 10,
      "id": 47698111,
      "kids": [
        47727986,
        47727979,
        47727639,
        47727708,
        47727186,
        47726790
      ],
      "score": 62,
      "time": 1775696327,
      "title": "Bevy game development tutorials and in-depth resources",
      "type": "story",
      "url": "https://taintedcoders.com/"
    },
    {
      "by": "1659447091",
      "descendants": 3,
      "id": 47727575,
      "kids": [
        47728072,
        47727972
      ],
      "score": 6,
      "time": 1775883857,
      "title": "Great at gaming? US air traffic control wants you to apply",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/ce84rvx0e6do"
    },
    {
      "by": "stingraycharles",
      "descendants": 108,
      "id": 47720419,
      "kids": [
        47723437,
        47721394,
        47721156,
        47721260,
        47722213,
        47720673,
        47720440,
        47722543,
        47723313,
        47722524,
        47723354,
        47721147,
        47722777,
        47723407,
        47723071,
        47723916,
        47721920,
        47724132,
        47721453,
        47721562,
        47721455,
        47720651,
        47720801,
        47725248
      ],
      "score": 346,
      "time": 1775838146,
      "title": "Industrial design files for Keychron keyboards and mice",
      "type": "story",
      "url": "https://github.com/Keychron/Keychron-Keyboards-Hardware-Design"
    },
    {
      "by": "hmokiguess",
      "descendants": 173,
      "id": 47721953,
      "kids": [
        47722942,
        47724021,
        47722935,
        47723315,
        47727730,
        47723015,
        47727867,
        47723134,
        47727787,
        47723170,
        47727548,
        47724692,
        47724139,
        47727328,
        47723668,
        47724587,
        47723245,
        47722877,
        47723756,
        47725612,
        47723631,
        47727096,
        47724425,
        47725818,
        47722798,
        47723277,
        47723861
      ],
      "score": 263,
      "time": 1775846121,
      "title": "AI assistance when contributing to the Linux kernel",
      "type": "story",
      "url": "https://github.com/torvalds/linux/blob/master/Documentation/process/coding-assistants.rst"
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
      "title": "Put your SSH keys in your TPM chip",
      "url": "https://raymii.org/s/tutorials/Put_your_SSH_keys_in_your_TPM_chip.html",
      "score": 29,
      "comments": 7,
      "tags": [
        "linux",
        "security"
      ],
      "id": "ggum7f"
    },
    {
      "title": "Why Aren't We uv Yet?",
      "url": "https://aleyan.com/blog/2026-why-arent-we-uv-yet",
      "score": 29,
      "comments": 35,
      "tags": [
        "python"
      ],
      "id": "xfbwic"
    },
    {
      "title": "Meet Kiki - an array language",
      "url": "https://eli.li/kiki",
      "score": 28,
      "comments": 8,
      "tags": [
        "apl",
        "plt"
      ],
      "id": "cwxvlh"
    },
    {
      "title": "The Honest Climate Case for AI",
      "url": "https://dev.to/dcc/the-honest-climate-case-for-ai-5hg5",
      "score": 15,
      "comments": 17,
      "tags": [
        "vibecoding"
      ],
      "id": "kfm1ph"
    },
    {
      "title": "Installing every* Firefox extension",
      "url": "https://jack.cab/blog/every-firefox-extension/",
      "score": 58,
      "comments": 4,
      "tags": [
        "browsers"
      ],
      "id": "3ukqqt"
    },
    {
      "title": "Favorite programmer website?",
      "url": "",
      "score": 37,
      "comments": 32,
      "tags": [
        "ask",
        "programming"
      ],
      "id": "iq7i4f"
    },
    {
      "title": "A bet on whether ML-KEM-768 or X25519 will break first",
      "url": "https://github.com/FiloSottile/ecc-vs-lattices-long-bet",
      "score": 12,
      "comments": 1,
      "tags": [
        "cryptography"
      ],
      "id": "sxvq6g"
    },
    {
      "title": "The difficulty of making sure your website is broken",
      "url": "https://letsencrypt.org/2026/04/10/test-sites.html",
      "score": 16,
      "comments": 1,
      "tags": [
        "web"
      ],
      "id": "k11wgv"
    },
    {
      "title": "Advanced Mac Substitute",
      "url": "https://www.v68k.org/advanced-mac-substitute/",
      "score": 3,
      "comments": 2,
      "tags": [
        "retrocomputing"
      ],
      "id": "yysxis"
    },
    {
      "title": "Capsicum vs seccomp: Process Sandboxing",
      "url": "https://vivianvoss.net/blog/capsicum-vs-seccomp",
      "score": 9,
      "comments": 7,
      "tags": [
        "freebsd",
        "linux",
        "security"
      ],
      "id": "hbirya"
    }
  ]
}
```

