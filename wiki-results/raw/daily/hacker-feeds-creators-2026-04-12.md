# Hacker Feeds Outcomes - Creators

Generated on: 2026-04-12 06:47:41 UTC

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
      "reactions": 146,
      "comments": 84,
      "reading_time": 3,
      "author": "sylwia-lask"
    },
    {
      "title": "The Final 1% of Every GitHub Project: Sealing It Properly",
      "description": "Table of Contents    Introduction What Does It Mean to \"Seal\" a Project?  The Release...",
      "url": "https://dev.to/georgekobaidze/the-final-1-of-every-github-project-sealing-it-properly-2app",
      "tags": "github, opensource, development, repository",
      "reactions": 11,
      "comments": 3,
      "reading_time": 12,
      "author": "georgekobaidze"
    },
    {
      "title": "What was your win this week??",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-3df3",
      "tags": "discuss, weeklyretro",
      "reactions": 24,
      "comments": 31,
      "reading_time": 1,
      "author": "jess"
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
      "title": "I Keep Telling Claude the Same Things. So He Started Writing Them Down Himself.",
      "description": "A small moment that changed how I think about AI coding tools.     If you've used Claude Code for...",
      "url": "https://dev.to/eli_coding/i-keep-telling-claude-the-same-things-so-he-started-writing-them-down-himself-1i9",
      "tags": "angular, ai, claude, webdev",
      "reactions": 3,
      "comments": 8,
      "reading_time": 4,
      "author": "eli_coding"
    },
    {
      "title": "I'm a bit lost.",
      "description": "The job market sucks enough without being disabled.",
      "url": "https://dev.to/hubedav/im-a-bit-lost-2dko",
      "tags": "jobs, career, jobmarket, discuss",
      "reactions": 25,
      "comments": 16,
      "reading_time": 4,
      "author": "hubedav"
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
    },
    {
      "title": "Your AI Is Lying to You Because You Trained It to and a New Study Proves It",
      "description": "I asked ChatGPT to review some code last week that I knew had a pretty bad architectural decision in...",
      "url": "https://dev.to/serkingiii/your-ai-is-lying-to-you-because-you-trained-it-to-and-a-new-study-proves-it-4gc5",
      "tags": "ai, programming, discuss, productivity",
      "reactions": 3,
      "comments": 1,
      "reading_time": 4,
      "author": "serkingiii"
    },
    {
      "title": "Building a Multimodal Cross Cloud Live Agent with ADK, Amazon EKS, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build cross cloud...",
      "url": "https://dev.to/gde/building-a-multimodal-cross-cloud-live-agent-with-adk-amazon-eks-and-gemini-cli-4gp8",
      "tags": "python, awseks, gemini, googleadk",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
    },
    {
      "title": "On-Device AI with the Google AI Edge Gallery and Gemma 4",
      "description": "Until recently, running an LLM on your phone meant one thing: chat. You could have a conversation or...",
      "url": "https://dev.to/googleai/on-device-ai-with-the-google-ai-edge-gallery-and-gemma-4-ena",
      "tags": "aiondevice, android, ios, gemma",
      "reactions": 21,
      "comments": 0,
      "reading_time": 6,
      "author": "kweinmeister"
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
      "author": "jo-inc",
      "repo": "camofox-browser",
      "avatar": "https://github.com/jo-inc.png",
      "repo_link": "https://github.com/jo-inc/camofox-browser",
      "desc": "Headless browser automation server for AI agents to visit sites that are usually blocked",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 181,
      "added_stars": 683,
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
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Connect All AI Code Tools (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) to 40+ AI Providers & 100+ Models",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 576,
      "added_stars": 553,
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
      "forks": 798,
      "added_stars": 1595,
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
      "author": "badlogic",
      "repo": "pi-skills",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-skills",
      "desc": "Skills for pi coding agent (compatible with Claude Code and Codex CLI)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 127,
      "added_stars": 115,
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
      "author": "maboloshi",
      "repo": "github-chinese",
      "avatar": "https://github.com/maboloshi.png",
      "repo_link": "https://github.com/maboloshi/github-chinese",
      "desc": "GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1302,
      "added_stars": 633,
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
      "author": "vercel",
      "repo": "next.js",
      "avatar": "https://github.com/vercel.png",
      "repo_link": "https://github.com/vercel/next.js",
      "desc": "The React Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 30869,
      "added_stars": 326,
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
      "forks": 628,
      "added_stars": 236,
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
      "author": "sub-store-org",
      "repo": "Sub-Store",
      "avatar": "https://github.com/sub-store-org.png",
      "repo_link": "https://github.com/sub-store-org/Sub-Store",
      "desc": "Advanced Subscription Manager for QX, Loon, Surge, Stash, Egern and Shadowrocket!",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1072,
      "added_stars": 112,
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
      "author": "phaserjs",
      "repo": "phaser",
      "avatar": "https://github.com/phaserjs.png",
      "repo_link": "https://github.com/phaserjs/phaser",
      "desc": "Phaser is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7130,
      "added_stars": 65,
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
      "author": "Mintplex-Labs",
      "repo": "anything-llm",
      "avatar": "https://github.com/Mintplex-Labs.png",
      "repo_link": "https://github.com/Mintplex-Labs/anything-llm",
      "desc": "The all-in-one AI productivity accelerator. On device and privacy first with no annoying setup or configuration.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6278,
      "added_stars": 517,
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
      "author": "mui",
      "repo": "material-ui",
      "avatar": "https://github.com/mui.png",
      "repo_link": "https://github.com/mui/material-ui",
      "desc": "Material UI: Comprehensive React component library that implements Google's Material Design. Free forever.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 32693,
      "added_stars": 160,
      "builtBy": [
        {
          "username": "oliviertassinari",
          "href": "https://github.com/oliviertassinari",
          "avatar": "https://avatars.githubusercontent.com/u/3165635"
        },
        {
          "username": "dmtrKovalenko",
          "href": "https://github.com/dmtrKovalenko",
          "avatar": "https://avatars.githubusercontent.com/u/16926049"
        },
        {
          "username": "eps1lon",
          "href": "https://github.com/eps1lon",
          "avatar": "https://avatars.githubusercontent.com/u/12292047"
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
      "forks": 4886,
      "added_stars": 182,
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
      "author": "ComposioHQ",
      "repo": "open-claude-cowork",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/open-claude-cowork",
      "desc": "Open Source version of Claude Cowork with 500+ SaaS app integrations",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 620,
      "added_stars": 230,
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
      "title": "I built a Telegram bot that reads 70 arXiv papers a day so I don't have to",
      "description": "I built a Telegram bot that reads 70 arXiv papers a day so I don't have to            The...",
      "url": "https://dev.to/landigf/i-built-a-telegram-bot-that-reads-70-arxiv-papers-a-day-so-i-dont-have-to-19b5",
      "tags": "telegram, gemini, ai, indiehackers",
      "reactions": 0,
      "comments": 1,
      "reading_time": 6,
      "author": "landigf"
    },
    {
      "title": "I built a local screen reader that reads your screen aloud — no cloud, no API keys",
      "description": "I got tired of switching between reading and listening, so I built sttts — a local pipeline that...",
      "url": "https://dev.to/paradisecy/i-built-a-local-screen-reader-that-reads-your-screen-aloud-no-cloud-no-api-keys-m9",
      "tags": "python, ai, opensource, a11y",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "paradisecy"
    },
    {
      "title": "I picked a 5ms keyword router over an LLM meta-router for my AI app. Here's the math.",
      "description": "I picked a 5ms keyword router over an LLM meta-router for my AI app. Here's the...",
      "url": "https://dev.to/samarth0211/i-picked-a-5ms-keyword-router-over-an-llm-meta-router-for-my-ai-app-heres-the-math-23p2",
      "tags": "ai, electron, javascript, showdev",
      "reactions": 0,
      "comments": 2,
      "reading_time": 5,
      "author": "samarth0211"
    },
    {
      "title": "Building Cipher: Where We Are, What Broke, and What’s Coming Next",
      "description": "Most AI tools stop at generating code.  Cipher doesn’t.  It walks straight into Unreal Engine and...",
      "url": "https://dev.to/rezzzdev/building-cipher-where-we-are-what-broke-and-whats-coming-next-3enl",
      "tags": "ai, gamedev, programming, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "rezzzdev"
    },
    {
      "title": "I Built an Open-Source n8n Alternative with AI Agents — Here's What I Learned",
      "description": "I've been working on workflow automation tools for a while, and I always felt something was missing —...",
      "url": "https://dev.to/sibercoder/i-built-an-open-source-n8n-alternative-with-ai-agents-heres-what-i-learned-5hlp",
      "tags": "opensource, ai, webdev, selfhosted",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "sibercoder"
    },
    {
      "title": "Why Cursor Keeps Generating Wildcard CORS -- And How to Fix It",
      "description": "TL;DR    AI editors almost always default to cors() with no config -- which sets...",
      "url": "https://dev.to/chandan_karn_fb750e731394/why-cursor-keeps-generating-wildcard-cors-and-how-to-fix-it-3ef",
      "tags": "security, webdev, ai, devsecops",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "chandan_karn_fb750e731394"
    },
    {
      "title": "🚀 I Built an Open Source AI Code Assistant (OpenWorkbench-AI)",
      "description": "AI is rapidly changing how we write code.  From autocomplete tools to full-blown AI agents,...",
      "url": "https://dev.to/upendra_manike_821e67595e/i-built-an-open-source-ai-code-assistant-openworkbench-ai-56d8",
      "tags": "ai, opensource, programming, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "upendra_manike_821e67595e"
    },
    {
      "title": "I Built a Free Browser Video Editor with WebGPU, WebCodecs & Optional AI Generation",
      "description": "KubeezCut is an MIT-licensed, multi-track video editor that runs entirely in your browser. No uploads, no subscriptions, no installs. GPU-accelerated effects, pro export formats, and optional AI media generation.",
      "url": "https://dev.to/sebyx07/i-built-a-free-browser-video-editor-with-webgpu-webcodecs-optional-ai-generation-2eo0",
      "tags": "webdev, opensource, javascript, ai",
      "reactions": 16,
      "comments": 4,
      "reading_time": 3,
      "author": "sebyx07"
    },
    {
      "title": "5 .cursorrules Patterns That Make Cursor Actually Reliable",
      "description": "5 .cursorrules Patterns That Make Cursor Actually Reliable   If you're using Cursor (or VS...",
      "url": "https://dev.to/olivia_craft/5-cursorrules-patterns-that-make-cursor-actually-reliable-39h0",
      "tags": "cursor, cursorrules, ai, devtools",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "olivia_craft"
    },
    {
      "title": "The 90%-Done Paradox",
      "description": "The last 10% of any software project always takes 90% of the time. Here are the four mindsets every engineer evolves through — and why most of us get stuck before the finish line.",
      "url": "https://dev.to/js402/the-90-done-paradox-31e1",
      "tags": "programming, productivity, ai, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "js402"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "ValentineC",
      "descendants": 69,
      "id": 47735535,
      "kids": [
        47736601,
        47735873,
        47735775,
        47736690,
        47735815,
        47735733,
        47735812,
        47736581,
        47735794,
        47736482,
        47736762,
        47735744,
        47735649,
        47735879,
        47736747,
        47736472,
        47736198,
        47736495,
        47735841,
        47735808,
        47735835,
        47735660,
        47736252,
        47736168,
        47735648
      ],
      "score": 125,
      "time": 1775958948,
      "title": "The End of Eleventy",
      "type": "story",
      "url": "https://brennan.day/the-end-of-eleventy/"
    },
    {
      "by": "dominicq",
      "descendants": 267,
      "id": 47732020,
      "kids": [
        47732337,
        47732254,
        47732350,
        47732340,
        47735605,
        47732549,
        47736732,
        47735019,
        47732343,
        47732441,
        47736694,
        47736656,
        47732273,
        47732325,
        47733021,
        47733030,
        47736713,
        47733127,
        47735588,
        47732515,
        47732446,
        47735761,
        47732301,
        47733303,
        47735763,
        47735310,
        47733151,
        47733047,
        47732568,
        47732354,
        47732591,
        47734986,
        47734577,
        47732347,
        47733050,
        47732638,
        47733300,
        47732537,
        47734647,
        47732567,
        47734461,
        47732251,
        47732295,
        47734841,
        47735062,
        47735107,
        47733686,
        47735656,
        47734586,
        47733081,
        47733002,
        47734087,
        47732777,
        47735130,
        47732021,
        47732316,
        47734853,
        47732357,
        47732558,
        47733475,
        47733394,
        47733262,
        47733804,
        47732454,
        47733020,
        47734993,
        47736360,
        47733487,
        47733168,
        47735602,
        47732299,
        47732246,
        47732427,
        47734052
      ],
      "score": 981,
      "time": 1775926048,
      "title": "Small models also found the vulnerabilities that Mythos found",
      "type": "story",
      "url": "https://aisle.com/blog/ai-cybersecurity-after-mythos-the-jagged-frontier"
    },
    {
      "by": "Jimmc414",
      "descendants": 36,
      "id": 47736298,
      "kids": [
        47736397,
        47736670,
        47736367,
        47736355,
        47736505,
        47736354,
        47736365
      ],
      "score": 67,
      "time": 1775970483,
      "title": "US appeals court declares 158-year-old home distilling ban unconstitutional",
      "type": "story",
      "url": "https://www.theguardian.com/law/2026/apr/11/appeals-court-ruling-home-distilling-ban-unconstitutional"
    },
    {
      "by": "Anon84",
      "descendants": 86,
      "id": 47733217,
      "kids": [
        47733441,
        47734204,
        47733670,
        47736392,
        47736312,
        47733462,
        47733875,
        47735804,
        47734848,
        47736190,
        47733927,
        47735071,
        47734886,
        47734027,
        47735172,
        47733559,
        47734113,
        47736118,
        47735170,
        47736174,
        47734706,
        47733466,
        47734242,
        47733832,
        47733848,
        47733617,
        47736335,
        47734843,
        47735066,
        47733820,
        47735450
      ],
      "score": 331,
      "time": 1775934956,
      "title": "How We Broke Top AI Agent Benchmarks: And What Comes Next",
      "type": "story",
      "url": "https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/"
    },
    {
      "by": "speckx",
      "descendants": 15,
      "id": 47673171,
      "kids": [
        47735623,
        47736677,
        47736381,
        47735564,
        47735929
      ],
      "score": 87,
      "time": 1775558695,
      "title": "How Complex is my Code?",
      "type": "story",
      "url": "https://philodev.one/posts/2026-04-code-complexity/"
    },
    {
      "by": "iliatoli",
      "descendants": 97,
      "id": 47733561,
      "kids": [
        47734973,
        47734810,
        47734723,
        47734179,
        47734318,
        47734220,
        47734313,
        47736274,
        47734524,
        47734929,
        47734098,
        47734958,
        47735036,
        47735168,
        47734229,
        47734157,
        47735988
      ],
      "score": 193,
      "time": 1775938126,
      "title": "447 TB/cm² at zero retention energy – atomic-scale memory on fluorographane",
      "type": "story",
      "url": "https://zenodo.org/records/19513269"
    },
    {
      "by": "evo_9",
      "descendants": 21,
      "id": 47733521,
      "kids": [
        47735014,
        47733919,
        47735463,
        47735432,
        47736028,
        47734868,
        47733953,
        47734755,
        47735074,
        47735684,
        47734997,
        47735086,
        47734726,
        47734152
      ],
      "score": 169,
      "time": 1775937719,
      "title": "Dark Castle",
      "type": "story",
      "url": "https://darkcastle.co.uk/"
    },
    {
      "by": "ibobev",
      "descendants": 0,
      "id": 47672718,
      "score": 10,
      "time": 1775554857,
      "title": "Tofolli gates are all you need",
      "type": "story",
      "url": "https://www.johndcook.com/blog/2026/04/06/tofolli-gates/"
    },
    {
      "by": "1659447091",
      "descendants": 1,
      "id": 47735581,
      "kids": [
        47735875
      ],
      "score": 26,
      "time": 1775959753,
      "title": "How a dancer with ALS used brainwaves to perform live",
      "type": "story",
      "url": "https://www.electronicspecifier.com/products/sensors/how-a-dancer-with-als-used-brainwaves-to-perform-live/"
    },
    {
      "by": "kouosi",
      "descendants": 22,
      "id": 47672941,
      "kids": [
        47735824,
        47734718,
        47734326,
        47734354,
        47734628,
        47735546,
        47734950
      ],
      "score": 121,
      "time": 1775556998,
      "title": "Pijul a FOSS distributed version control system",
      "type": "story",
      "url": "https://pijul.org/"
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
      "by": "ValentineC",
      "descendants": 69,
      "id": 47735535,
      "kids": [
        47736601,
        47735873,
        47735775,
        47736690,
        47735815,
        47735733,
        47735812,
        47736581,
        47735794,
        47736482,
        47736762,
        47735744,
        47735649,
        47735879,
        47736747,
        47736472,
        47736198,
        47736495,
        47735841,
        47735808,
        47735835,
        47735660,
        47736252,
        47736168,
        47735648
      ],
      "score": 125,
      "time": 1775958948,
      "title": "The End of Eleventy",
      "type": "story",
      "url": "https://brennan.day/the-end-of-eleventy/"
    },
    {
      "by": "dominicq",
      "descendants": 267,
      "id": 47732020,
      "kids": [
        47732337,
        47732254,
        47732350,
        47732340,
        47735605,
        47732549,
        47736732,
        47735019,
        47732343,
        47732441,
        47736694,
        47736656,
        47732273,
        47732325,
        47733021,
        47733030,
        47736713,
        47733127,
        47735588,
        47732515,
        47732446,
        47735761,
        47732301,
        47733303,
        47735763,
        47735310,
        47733151,
        47733047,
        47732568,
        47732354,
        47732591,
        47734986,
        47734577,
        47732347,
        47733050,
        47732638,
        47733300,
        47732537,
        47734647,
        47732567,
        47734461,
        47732251,
        47732295,
        47734841,
        47735062,
        47735107,
        47733686,
        47735656,
        47734586,
        47733081,
        47733002,
        47734087,
        47732777,
        47735130,
        47732021,
        47732316,
        47734853,
        47732357,
        47732558,
        47733475,
        47733394,
        47733262,
        47733804,
        47732454,
        47733020,
        47734993,
        47736360,
        47733487,
        47733168,
        47735602,
        47732299,
        47732246,
        47732427,
        47734052
      ],
      "score": 981,
      "time": 1775926048,
      "title": "Small models also found the vulnerabilities that Mythos found",
      "type": "story",
      "url": "https://aisle.com/blog/ai-cybersecurity-after-mythos-the-jagged-frontier"
    },
    {
      "by": "Jimmc414",
      "descendants": 36,
      "id": 47736298,
      "kids": [
        47736397,
        47736670,
        47736367,
        47736355,
        47736505,
        47736354,
        47736365
      ],
      "score": 67,
      "time": 1775970483,
      "title": "US appeals court declares 158-year-old home distilling ban unconstitutional",
      "type": "story",
      "url": "https://www.theguardian.com/law/2026/apr/11/appeals-court-ruling-home-distilling-ban-unconstitutional"
    },
    {
      "by": "Anon84",
      "descendants": 86,
      "id": 47733217,
      "kids": [
        47733441,
        47734204,
        47733670,
        47736392,
        47736312,
        47733462,
        47733875,
        47735804,
        47734848,
        47736190,
        47733927,
        47735071,
        47734886,
        47734027,
        47735172,
        47733559,
        47734113,
        47736118,
        47735170,
        47736174,
        47734706,
        47733466,
        47734242,
        47733832,
        47733848,
        47733617,
        47736335,
        47734843,
        47735066,
        47733820,
        47735450
      ],
      "score": 331,
      "time": 1775934956,
      "title": "How We Broke Top AI Agent Benchmarks: And What Comes Next",
      "type": "story",
      "url": "https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/"
    },
    {
      "by": "speckx",
      "descendants": 15,
      "id": 47673171,
      "kids": [
        47735623,
        47736677,
        47736381,
        47735564,
        47735929
      ],
      "score": 87,
      "time": 1775558695,
      "title": "How Complex is my Code?",
      "type": "story",
      "url": "https://philodev.one/posts/2026-04-code-complexity/"
    },
    {
      "by": "iliatoli",
      "descendants": 97,
      "id": 47733561,
      "kids": [
        47734973,
        47734810,
        47734723,
        47734179,
        47734318,
        47734220,
        47734313,
        47736274,
        47734524,
        47734929,
        47734098,
        47734958,
        47735036,
        47735168,
        47734229,
        47734157,
        47735988
      ],
      "score": 193,
      "time": 1775938126,
      "title": "447 TB/cm² at zero retention energy – atomic-scale memory on fluorographane",
      "type": "story",
      "url": "https://zenodo.org/records/19513269"
    },
    {
      "by": "evo_9",
      "descendants": 21,
      "id": 47733521,
      "kids": [
        47735014,
        47733919,
        47735463,
        47735432,
        47736028,
        47734868,
        47733953,
        47734755,
        47735074,
        47735684,
        47734997,
        47735086,
        47734726,
        47734152
      ],
      "score": 169,
      "time": 1775937719,
      "title": "Dark Castle",
      "type": "story",
      "url": "https://darkcastle.co.uk/"
    },
    {
      "by": "ibobev",
      "descendants": 0,
      "id": 47672718,
      "score": 10,
      "time": 1775554857,
      "title": "Tofolli gates are all you need",
      "type": "story",
      "url": "https://www.johndcook.com/blog/2026/04/06/tofolli-gates/"
    },
    {
      "by": "1659447091",
      "descendants": 1,
      "id": 47735581,
      "kids": [
        47735875
      ],
      "score": 26,
      "time": 1775959753,
      "title": "How a dancer with ALS used brainwaves to perform live",
      "type": "story",
      "url": "https://www.electronicspecifier.com/products/sensors/how-a-dancer-with-als-used-brainwaves-to-perform-live/"
    },
    {
      "by": "kouosi",
      "descendants": 22,
      "id": 47672941,
      "kids": [
        47735824,
        47734718,
        47734326,
        47734354,
        47734628,
        47735546,
        47734950
      ],
      "score": 121,
      "time": 1775556998,
      "title": "Pijul a FOSS distributed version control system",
      "type": "story",
      "url": "https://pijul.org/"
    },
    {
      "by": "momentmaker",
      "descendants": 6,
      "id": 47735810,
      "kids": [
        47736414,
        47736370
      ],
      "score": 16,
      "time": 1775963045,
      "title": "Why meaningful days look like nothing while you are living them",
      "type": "story",
      "url": "https://pilgrima.ge/p/the-grand-line"
    },
    {
      "by": "krackers",
      "descendants": 128,
      "id": 47733971,
      "kids": [
        47734130,
        47735290,
        47734246,
        47734211,
        47734159,
        47735226,
        47734852,
        47734201,
        47734547,
        47734700,
        47734186
      ],
      "score": 181,
      "time": 1775941128,
      "title": "Apple Silicon and Virtual Machines: Beating the 2 VM Limit (2023)",
      "type": "story",
      "url": "https://khronokernel.com/macos/2023/08/08/AS-VM.html"
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
      "title": "No one owes you supply-chain security",
      "url": "https://purplesyringa.moe/blog/no-one-owes-you-supply-chain-security/",
      "score": 30,
      "comments": 10,
      "tags": [
        "security"
      ],
      "id": "cxwidw"
    },
    {
      "title": "Brocards for vulnerability triage",
      "url": "https://blog.yossarian.net/2026/04/11/Brocards-for-vulnerability-triage",
      "score": 21,
      "comments": 4,
      "tags": [
        "security"
      ],
      "id": "0ddkvb"
    },
    {
      "title": "I Just Want Simple S3",
      "url": "https://blog.feld.me/posts/2026/04/i-just-want-simple-s3/",
      "score": 57,
      "comments": 16,
      "tags": [
        "osdev",
        "scaling"
      ],
      "id": "t1uxjh"
    },
    {
      "title": "SQLite 3.53.0",
      "url": "https://sqlite.org/releaselog/3_53_0.html",
      "score": 60,
      "comments": 8,
      "tags": [
        "databases",
        "release"
      ],
      "id": "sqsb24"
    },
    {
      "title": "Surely there must be a way to make container secrets less dangerous?",
      "url": "https://dalmatian.life/2026/04/11/surely-there-must-be-a-way-to-make-container-secrets-less-dangerous/",
      "score": 4,
      "comments": 7,
      "tags": [
        "devops",
        "security"
      ],
      "id": "66gclj"
    },
    {
      "title": "Git fixup is magic (and Magit is too)",
      "url": "https://arialdomartini.github.io/git-fixup",
      "score": 25,
      "comments": 10,
      "tags": [
        "emacs",
        "vcs"
      ],
      "id": "2urycz"
    },
    {
      "title": "20 Years on AWS and Never Not My Job",
      "url": "https://www.daemonology.net/blog/2026-04-11-20-years-on-AWS-and-never-not-my-job.html",
      "score": 43,
      "comments": 5,
      "tags": [
        "freebsd"
      ],
      "id": "lynvme"
    },
    {
      "title": "Writing design docs",
      "url": "https://blog.ceejbot.com/posts/design-docs/",
      "score": 14,
      "comments": 1,
      "tags": [
        "practices"
      ],
      "id": "dbm3sa"
    },
    {
      "title": "High-Level Rust: Getting 80% of the Benefits with 20% of the Pain",
      "url": "https://hamy.xyz/blog/2026-01_high-level-rust",
      "score": 14,
      "comments": 8,
      "tags": [
        "rust",
        "vibecoding"
      ],
      "id": "ubqgew"
    },
    {
      "title": "Windows Defender is being used to hack Windows",
      "url": "https://hackingpassion.com/bluehammer-windows-defender-zero-day/",
      "score": 30,
      "comments": 0,
      "tags": [
        "security",
        "windows"
      ],
      "id": "hihcnv"
    }
  ]
}
```

