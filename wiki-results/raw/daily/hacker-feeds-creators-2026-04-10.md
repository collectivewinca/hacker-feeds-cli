# Hacker Feeds Outcomes - Creators

Generated on: 2026-04-10 06:53:45 UTC

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
      "reactions": 49,
      "comments": 24,
      "reading_time": 3,
      "author": "sylwia-lask"
    },
    {
      "title": "Unlocking Casual Fun: AI-Powered 'Vibe Coding' for Quick, Niche Apps",
      "description": "I recently heard the comparison that AI is the smartphone of our generation.   Smartphones made...",
      "url": "https://dev.to/maria_from_mlh/unlocking-casual-fun-ai-powered-vibe-coding-for-quick-niche-apps-ml5",
      "tags": "sideprojects, ai, vibecoding, gemini",
      "reactions": 42,
      "comments": 6,
      "reading_time": 4,
      "author": "maria_from_mlh"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-4idc",
      "tags": "top7, discuss",
      "reactions": 65,
      "comments": 15,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "On-Device AI with the Google AI Edge Gallery and Gemma 4",
      "description": "Until recently, running an LLM on your phone meant one thing: chat. You could have a conversation or...",
      "url": "https://dev.to/googleai/on-device-ai-with-the-google-ai-edge-gallery-and-gemma-4-ena",
      "tags": "aiondevice, android, ios, gemma",
      "reactions": 20,
      "comments": 0,
      "reading_time": 6,
      "author": "kweinmeister"
    },
    {
      "title": "Mastering Error Handling in Go",
      "description": "Error handling is one of the most distinctive aspects of Go. Unlike languages that use exceptions, Go...",
      "url": "https://dev.to/adi73/mastering-error-handling-in-go-400g",
      "tags": "go, programming, tutorial, security",
      "reactions": 0,
      "comments": 1,
      "reading_time": 5,
      "author": "adi73"
    },
    {
      "title": "Skills Are the New CLI",
      "description": "Every developer tool follows the same pattern: parse flags, run logic, print output. git commit -m...",
      "url": "https://dev.to/helderberto/skills-are-the-new-cli-225e",
      "tags": "ai, development, software, programming",
      "reactions": 7,
      "comments": 1,
      "reading_time": 8,
      "author": "helderberto"
    },
    {
      "title": "TigerFS: A Filesystem Backed by PostgreSQL",
      "description": "TigerFS is a filesystem backed by PostgreSQL, built by the Timescale team. It mounts a database as a...",
      "url": "https://dev.to/polliog/tigerfs-a-filesystem-backed-by-postgresql-50i",
      "tags": "postgres, database, devtools, ai",
      "reactions": 15,
      "comments": 0,
      "reading_time": 5,
      "author": "polliog"
    },
    {
      "title": "When Your UX Only Fits Two Sizes",
      "description": "A few years ago, right before the pandemic hit, I was trying to buy clothes online. Nothing fancy,...",
      "url": "https://dev.to/phalkmin/when-your-ux-only-fits-two-sizes-3a1e",
      "tags": "watercooler, dei, career",
      "reactions": 7,
      "comments": 0,
      "reading_time": 5,
      "author": "phalkmin"
    },
    {
      "title": "The \"Stateless\" AI Era is a Massive Engineering Tax",
      "description": "We have spent a decade watching hackers grind through the same 48-hour cycle at MLH: build something...",
      "url": "https://dev.to/mlh/the-stateless-ai-era-is-a-massive-engineering-tax-49ic",
      "tags": "ai, architecture, llm, softwareengineering",
      "reactions": 46,
      "comments": 9,
      "reading_time": 2,
      "author": "mlhacks"
    },
    {
      "title": "Fine-Tuning Gemma 3 with Cloud Run Jobs: Serverless GPUs (NVIDIA RTX 6000 Pro) for pet breed classification 🐈🐕",
      "description": "Architectural worklow: fine tuning Gemma 3 27B on Cloud Run Jobs     Recently, I was inspired by a...",
      "url": "https://dev.to/googleai/fine-tuning-gemma-3-with-cloud-run-jobs-serverless-gpus-nvidia-rtx-6000-pro-for-pet-breed-248b",
      "tags": "nvidia, ai, gemma, serverless",
      "reactions": 5,
      "comments": 0,
      "reading_time": 14,
      "author": "shirmeirlador"
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
      "author": "ComposioHQ",
      "repo": "open-claude-cowork",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/open-claude-cowork",
      "desc": "Open Source version of Claude Cowork with 500+ SaaS app integrations",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 606,
      "added_stars": 443,
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
      "author": "axios",
      "repo": "axios",
      "avatar": "https://github.com/axios.png",
      "repo_link": "https://github.com/axios/axios",
      "desc": "Promise based HTTP client for the browser and node.js",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 11612,
      "added_stars": 158,
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
      "author": "Anil-matcha",
      "repo": "Open-Higgsfield-AI",
      "avatar": "https://github.com/Anil-matcha.png",
      "repo_link": "https://github.com/Anil-matcha/Open-Higgsfield-AI",
      "desc": "Open-source alternative to Higgsfield AI — Free AI image generation & cinema studio with 20+ models (Flux, SDXL, Midjourney, Ideogram). Self-hosted, customizable, MIT licensed.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 718,
      "added_stars": 1135,
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
          "username": "taherfattahi",
          "href": "https://github.com/taherfattahi",
          "avatar": "https://avatars.githubusercontent.com/u/14248281"
        },
        {
          "username": "AliceOh",
          "href": "https://github.com/AliceOh",
          "avatar": "https://avatars.githubusercontent.com/u/16508601"
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
      "forks": 1282,
      "added_stars": 568,
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
      "author": "lodash",
      "repo": "lodash",
      "avatar": "https://github.com/lodash.png",
      "repo_link": "https://github.com/lodash/lodash",
      "desc": "A modern JavaScript utility library delivering modularity, performance, & extras.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7128,
      "added_stars": 19,
      "builtBy": [
        {
          "username": "jdalton",
          "href": "https://github.com/jdalton",
          "avatar": "https://avatars.githubusercontent.com/u/4303"
        },
        {
          "username": "jashkenas",
          "href": "https://github.com/jashkenas",
          "avatar": "https://avatars.githubusercontent.com/u/4732"
        },
        {
          "username": "falsyvalues",
          "href": "https://github.com/falsyvalues",
          "avatar": "https://avatars.githubusercontent.com/u/1199350"
        },
        {
          "username": "greenkeeperio-bot",
          "href": "https://github.com/greenkeeperio-bot",
          "avatar": "https://avatars.githubusercontent.com/u/14790466"
        },
        {
          "username": "bnjmnt4n",
          "href": "https://github.com/bnjmnt4n",
          "avatar": "https://avatars.githubusercontent.com/u/813865"
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
      "added_stars": 72,
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
      "author": "badlogic",
      "repo": "pi-skills",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-skills",
      "desc": "Skills for pi coding agent (compatible with Claude Code and Codex CLI)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 123,
      "added_stars": 103,
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
      "author": "Mintplex-Labs",
      "repo": "anything-llm",
      "avatar": "https://github.com/Mintplex-Labs.png",
      "repo_link": "https://github.com/Mintplex-Labs/anything-llm",
      "desc": "The all-in-one AI productivity accelerator. On device and privacy first with no annoying setup or configuration.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6270,
      "added_stars": 590,
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
      "forks": 547,
      "added_stars": 513,
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
      "author": "sub-store-org",
      "repo": "Sub-Store",
      "avatar": "https://github.com/sub-store-org.png",
      "repo_link": "https://github.com/sub-store-org/Sub-Store",
      "desc": "Advanced Subscription Manager for QX, Loon, Surge, Stash, Egern and Shadowrocket!",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1070,
      "added_stars": 113,
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
      "author": "greensock",
      "repo": "GSAP",
      "avatar": "https://github.com/greensock.png",
      "repo_link": "https://github.com/greensock/GSAP",
      "desc": "GSAP (GreenSock Animation Platform), a JavaScript animation library for the modern web",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1954,
      "added_stars": 116,
      "builtBy": [
        {
          "username": "jackdoyle",
          "href": "https://github.com/jackdoyle",
          "avatar": "https://avatars.githubusercontent.com/u/2389714"
        },
        {
          "username": "PeterDaveHello",
          "href": "https://github.com/PeterDaveHello",
          "avatar": "https://avatars.githubusercontent.com/u/3691490"
        }
      ]
    },
    {
      "author": "qeeqbox",
      "repo": "social-analyzer",
      "avatar": "https://github.com/qeeqbox.png",
      "repo_link": "https://github.com/qeeqbox/social-analyzer",
      "desc": "API, CLI, and Web App for analyzing and finding a person's profile in 1000 social media \\ websites",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2143,
      "added_stars": 144,
      "builtBy": [
        {
          "username": "giga-a",
          "href": "https://github.com/giga-a",
          "avatar": "https://avatars.githubusercontent.com/u/52905881"
        },
        {
          "username": "qb-auto",
          "href": "https://github.com/qb-auto",
          "avatar": "https://avatars.githubusercontent.com/u/81345102"
        },
        {
          "username": "SethFalco",
          "href": "https://github.com/SethFalco",
          "avatar": "https://avatars.githubusercontent.com/u/22801583"
        },
        {
          "username": "supersourlemons",
          "href": "https://github.com/supersourlemons",
          "avatar": "https://avatars.githubusercontent.com/u/210174607"
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
      "title": "Unlocking Casual Fun: AI-Powered 'Vibe Coding' for Quick, Niche Apps",
      "description": "I recently heard the comparison that AI is the smartphone of our generation.   Smartphones made...",
      "url": "https://dev.to/maria_from_mlh/unlocking-casual-fun-ai-powered-vibe-coding-for-quick-niche-apps-ml5",
      "tags": "sideprojects, ai, vibecoding, gemini",
      "reactions": 42,
      "comments": 6,
      "reading_time": 4,
      "author": "maria_from_mlh"
    },
    {
      "title": "A simple React hook for running local LLMs via WebGPU",
      "description": "Running AI inference natively in the browser is the holy grail for reducing API costs and keeping...",
      "url": "https://dev.to/rahul_80cfa43302b/a-simple-react-hook-for-running-local-llms-via-webgpu-5234",
      "tags": "ai, webdev, react, api",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "rahul_80cfa43302b"
    },
    {
      "title": "Candy Barbecue and the Universal Problem of Metric Corruption",
      "description": "Johnny Trigger has won the World BBQ Championship twice. His competition ribs are legendary — glossy,...",
      "url": "https://dev.to/vibeagentmaking/candy-barbecue-and-the-universal-problem-of-metric-corruption-2lgf",
      "tags": "ai, machinelearning, analytics, alignment",
      "reactions": 1,
      "comments": 0,
      "reading_time": 8,
      "author": "vibeagentmaking"
    },
    {
      "title": "Skills Are the New CLI",
      "description": "Every developer tool follows the same pattern: parse flags, run logic, print output. git commit -m...",
      "url": "https://dev.to/helderberto/skills-are-the-new-cli-225e",
      "tags": "ai, development, software, programming",
      "reactions": 7,
      "comments": 1,
      "reading_time": 8,
      "author": "helderberto"
    },
    {
      "title": "TigerFS: A Filesystem Backed by PostgreSQL",
      "description": "TigerFS is a filesystem backed by PostgreSQL, built by the Timescale team. It mounts a database as a...",
      "url": "https://dev.to/polliog/tigerfs-a-filesystem-backed-by-postgresql-50i",
      "tags": "postgres, database, devtools, ai",
      "reactions": 16,
      "comments": 0,
      "reading_time": 5,
      "author": "polliog"
    },
    {
      "title": "Experimenting with AI subagents",
      "description": "I like to analyze codebases I start working on, or that I left for months. I ask my coding assistant,...",
      "url": "https://dev.to/nfrankel/experimenting-with-ai-subagents-pc7",
      "tags": "ai, agents, subagents, softwareengineering",
      "reactions": 21,
      "comments": 4,
      "reading_time": 4,
      "author": "nfrankel"
    },
    {
      "title": "Why Prompt-Only Moderation Failed in My AI Generation App",
      "description": "When I first added moderation to my AI generation app, I treated it as a text problem.  That seemed...",
      "url": "https://dev.to/jsxyzb/why-prompt-only-moderation-failed-in-my-ai-generation-app-1m11",
      "tags": "ai, productivity, security, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "jsxyzb"
    },
    {
      "title": "How I Made Claude Code 10x More Reliable With a Plugin Methodology",
      "description": "Claude Code is powerful. But without structure, it's chaos.  It skips tests. Commits untested code....",
      "url": "https://dev.to/dmitry_hihol_c9a59c1522e8/how-i-made-claude-code-10x-more-reliable-with-a-plugin-methodology-617",
      "tags": "ai, opensource, productivity, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "dmitry_hihol_c9a59c1522e8"
    },
    {
      "title": "The \"Stateless\" AI Era is a Massive Engineering Tax",
      "description": "We have spent a decade watching hackers grind through the same 48-hour cycle at MLH: build something...",
      "url": "https://dev.to/mlh/the-stateless-ai-era-is-a-massive-engineering-tax-49ic",
      "tags": "ai, architecture, llm, softwareengineering",
      "reactions": 46,
      "comments": 9,
      "reading_time": 2,
      "author": "mlhacks"
    },
    {
      "title": "The Tool Harness Meta Didnt Tell You About",
      "description": "Meta just dropped Muse Spark, their first major model release in a year. The benchmarks show it...",
      "url": "https://dev.to/o96a/the-tool-harness-meta-didnt-tell-you-about-92h",
      "tags": "ai, meta, agents, tools",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "o96a"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "speckx",
      "descendants": 91,
      "id": 47704804,
      "kids": [
        47711967,
        47713548,
        47712888,
        47712482,
        47714320,
        47713379,
        47713936,
        47712348,
        47705155,
        47712278,
        47713261,
        47713749,
        47713686,
        47712697,
        47714460,
        47714007,
        47712021
      ],
      "score": 274,
      "time": 1775747560,
      "title": "How NASA built Artemis II’s fault-tolerant computer",
      "type": "story",
      "url": "https://cacm.acm.org/news/how-nasa-built-artemis-iis-fault-tolerant-computer/"
    },
    {
      "by": "PaulHoule",
      "descendants": 204,
      "id": 47708818,
      "kids": [
        47710293,
        47712299,
        47710172,
        47713976,
        47710002,
        47710227,
        47710296,
        47709420,
        47709230,
        47714238,
        47711733,
        47710908,
        47709745,
        47714081,
        47710351,
        47709880,
        47713555,
        47710750,
        47709852,
        47712310,
        47711461,
        47713118,
        47712298,
        47713141,
        47709098,
        47713264,
        47709100,
        47712584,
        47712279,
        47714065,
        47713391,
        47710055,
        47710529,
        47710048,
        47711034,
        47710705,
        47710977,
        47714068,
        47710682,
        47710219,
        47711867,
        47711028,
        47710554,
        47711764,
        47711396,
        47711197,
        47709433,
        47711692,
        47710101,
        47710029,
        47712351,
        47710454,
        47709791,
        47709254,
        47713101,
        47710592,
        47710619,
        47713078,
        47712403,
        47710847,
        47710819,
        47710265,
        47712399,
        47708904,
        47712192,
        47711328,
        47711601,
        47710147,
        47710455,
        47709743,
        47710250,
        47709661,
        47710309,
        47710344
      ],
      "score": 441,
      "time": 1775764106,
      "title": "Native Instant Space Switching on macOS",
      "type": "story",
      "url": "https://arhan.sh/blog/native-instant-space-switching-on-macos/"
    },
    {
      "by": "volatilityfund",
      "descendants": 1,
      "id": 47714239,
      "kids": [
        47714473
      ],
      "score": 8,
      "time": 1775801387,
      "title": "The tool that won't let AI say anything it can't cite",
      "type": "story",
      "url": "https://github.com/grainulation/grainulator"
    },
    {
      "by": "gmays",
      "descendants": 73,
      "id": 47712718,
      "kids": [
        47713089,
        47713065,
        47713172,
        47712816,
        47714383,
        47713042,
        47713491,
        47713076,
        47713571,
        47713604,
        47713199,
        47713541,
        47713592,
        47713412,
        47713638,
        47713603,
        47713369,
        47713205,
        47713278,
        47713568,
        47713145,
        47713225,
        47712983,
        47713330,
        47714313
      ],
      "score": 70,
      "time": 1775786508,
      "title": "I still prefer MCP over skills",
      "type": "story",
      "url": "https://david.coffee/i-still-prefer-mcp-over-skills/"
    },
    {
      "by": "evakhoury",
      "descendants": 24,
      "id": 47675906,
      "kids": [
        47713183,
        47713080,
        47714166,
        47713242,
        47713189,
        47713201,
        47714236,
        47713585,
        47713536,
        47712881,
        47713711,
        47714220,
        47713293,
        47714137
      ],
      "score": 98,
      "time": 1775571923,
      "title": "Generative art over the years",
      "type": "story",
      "url": "https://blog.veitheller.de/Generative_art_over_the_years.html"
    },
    {
      "by": "ellieh",
      "descendants": 88,
      "id": 47712656,
      "kids": [
        47713454,
        47714447,
        47714456,
        47713641,
        47713460,
        47714451,
        47713351,
        47713523,
        47714437,
        47713432,
        47712848,
        47713550,
        47714400,
        47714398,
        47714336,
        47714158,
        47713479,
        47713597,
        47713502,
        47713455,
        47713404,
        47713230,
        47713607,
        47713509,
        47713891,
        47713355,
        47713323
      ],
      "score": 60,
      "time": 1775785978,
      "title": "We've raised $17M to build what comes after Git",
      "type": "story",
      "url": "https://blog.gitbutler.com/series-a"
    },
    {
      "by": "zdw",
      "descendants": 4,
      "id": 47675731,
      "kids": [
        47714229,
        47714134,
        47714217,
        47714252
      ],
      "score": 37,
      "time": 1775571239,
      "title": "Principles of Mechanical Sympathy",
      "type": "story",
      "url": "https://martinfowler.com/articles/mechanical-sympathy-principles.html"
    },
    {
      "by": "rickcarlino",
      "descendants": 34,
      "id": 47709158,
      "kids": [
        47710516,
        47714295,
        47711498,
        47709887,
        47711176,
        47713081,
        47711917,
        47712898,
        47711904,
        47713897,
        47711120,
        47711980,
        47713708,
        47712780,
        47711048,
        47711902,
        47712818,
        47711264,
        47712633,
        47712878,
        47711841,
        47710163,
        47711948,
        47711098,
        47711314,
        47712051
      ],
      "score": 190,
      "time": 1775765527,
      "title": "Charcuterie – Visual similarity Unicode explorer",
      "type": "story",
      "url": "https://charcuterie.elastiq.ch/"
    },
    {
      "by": "surprisetalk",
      "descendants": 23,
      "id": 47680005,
      "kids": [
        47713075,
        47713255,
        47714448,
        47712991,
        47713682,
        47714024,
        47713382,
        47713813,
        47713846,
        47713090,
        47682870
      ],
      "score": 152,
      "time": 1775589272,
      "title": "RAM Has a Design Flaw from 1966. I Bypassed It [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=KKbgulTp3FE"
    },
    {
      "by": "OBrien_1107",
      "id": 47713744,
      "score": 1,
      "time": 1775796185,
      "title": "CollectWise (YC F24) Is Hiring",
      "type": "job",
      "url": "https://www.ycombinator.com/companies/collectwise/jobs/Ktc6m6o-ai-agent-engineer"
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
      "by": "speckx",
      "descendants": 91,
      "id": 47704804,
      "kids": [
        47711967,
        47713548,
        47712888,
        47712482,
        47714320,
        47713379,
        47713936,
        47712348,
        47705155,
        47712278,
        47713261,
        47713749,
        47713686,
        47712697,
        47714460,
        47714007,
        47712021
      ],
      "score": 274,
      "time": 1775747560,
      "title": "How NASA built Artemis II’s fault-tolerant computer",
      "type": "story",
      "url": "https://cacm.acm.org/news/how-nasa-built-artemis-iis-fault-tolerant-computer/"
    },
    {
      "by": "PaulHoule",
      "descendants": 204,
      "id": 47708818,
      "kids": [
        47710293,
        47712299,
        47710172,
        47713976,
        47710002,
        47710227,
        47710296,
        47709420,
        47709230,
        47714238,
        47711733,
        47710908,
        47709745,
        47714081,
        47710351,
        47709880,
        47713555,
        47710750,
        47709852,
        47712310,
        47711461,
        47713118,
        47712298,
        47713141,
        47709098,
        47713264,
        47709100,
        47712584,
        47712279,
        47714065,
        47713391,
        47710055,
        47710529,
        47710048,
        47711034,
        47710705,
        47710977,
        47714068,
        47710682,
        47710219,
        47711867,
        47711028,
        47710554,
        47711764,
        47711396,
        47711197,
        47709433,
        47711692,
        47710101,
        47710029,
        47712351,
        47710454,
        47709791,
        47709254,
        47713101,
        47710592,
        47710619,
        47713078,
        47712403,
        47710847,
        47710819,
        47710265,
        47712399,
        47708904,
        47712192,
        47711328,
        47711601,
        47710147,
        47710455,
        47709743,
        47710250,
        47709661,
        47710309,
        47710344
      ],
      "score": 441,
      "time": 1775764106,
      "title": "Native Instant Space Switching on macOS",
      "type": "story",
      "url": "https://arhan.sh/blog/native-instant-space-switching-on-macos/"
    },
    {
      "by": "volatilityfund",
      "descendants": 1,
      "id": 47714239,
      "kids": [
        47714473
      ],
      "score": 8,
      "time": 1775801387,
      "title": "The tool that won't let AI say anything it can't cite",
      "type": "story",
      "url": "https://github.com/grainulation/grainulator"
    },
    {
      "by": "gmays",
      "descendants": 73,
      "id": 47712718,
      "kids": [
        47713089,
        47713065,
        47713172,
        47712816,
        47714383,
        47713042,
        47713491,
        47713076,
        47713571,
        47713604,
        47713199,
        47713541,
        47713592,
        47713412,
        47713638,
        47713603,
        47713369,
        47713205,
        47713278,
        47713568,
        47713145,
        47713225,
        47712983,
        47713330,
        47714313
      ],
      "score": 70,
      "time": 1775786508,
      "title": "I still prefer MCP over skills",
      "type": "story",
      "url": "https://david.coffee/i-still-prefer-mcp-over-skills/"
    },
    {
      "by": "evakhoury",
      "descendants": 24,
      "id": 47675906,
      "kids": [
        47713183,
        47713080,
        47714166,
        47713242,
        47713189,
        47713201,
        47714236,
        47713585,
        47713536,
        47712881,
        47713711,
        47714220,
        47713293,
        47714137
      ],
      "score": 98,
      "time": 1775571923,
      "title": "Generative art over the years",
      "type": "story",
      "url": "https://blog.veitheller.de/Generative_art_over_the_years.html"
    },
    {
      "by": "ellieh",
      "descendants": 88,
      "id": 47712656,
      "kids": [
        47713454,
        47714447,
        47714456,
        47713641,
        47713460,
        47714451,
        47713351,
        47713523,
        47714437,
        47713432,
        47712848,
        47713550,
        47714400,
        47714398,
        47714336,
        47714158,
        47713479,
        47713597,
        47713502,
        47713455,
        47713404,
        47713230,
        47713607,
        47713509,
        47713891,
        47713355,
        47713323
      ],
      "score": 60,
      "time": 1775785978,
      "title": "We've raised $17M to build what comes after Git",
      "type": "story",
      "url": "https://blog.gitbutler.com/series-a"
    },
    {
      "by": "zdw",
      "descendants": 4,
      "id": 47675731,
      "kids": [
        47714229,
        47714134,
        47714217,
        47714252
      ],
      "score": 37,
      "time": 1775571239,
      "title": "Principles of Mechanical Sympathy",
      "type": "story",
      "url": "https://martinfowler.com/articles/mechanical-sympathy-principles.html"
    },
    {
      "by": "rickcarlino",
      "descendants": 34,
      "id": 47709158,
      "kids": [
        47710516,
        47714295,
        47711498,
        47709887,
        47711176,
        47713081,
        47711917,
        47712898,
        47711904,
        47713897,
        47711120,
        47711980,
        47713708,
        47712780,
        47711048,
        47711902,
        47712818,
        47711264,
        47712633,
        47712878,
        47711841,
        47710163,
        47711948,
        47711098,
        47711314,
        47712051
      ],
      "score": 190,
      "time": 1775765527,
      "title": "Charcuterie – Visual similarity Unicode explorer",
      "type": "story",
      "url": "https://charcuterie.elastiq.ch/"
    },
    {
      "by": "surprisetalk",
      "descendants": 23,
      "id": 47680005,
      "kids": [
        47713075,
        47713255,
        47714448,
        47712991,
        47713682,
        47714024,
        47713382,
        47713813,
        47713846,
        47713090,
        47682870
      ],
      "score": 152,
      "time": 1775589272,
      "title": "RAM Has a Design Flaw from 1966. I Bypassed It [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=KKbgulTp3FE"
    },
    {
      "by": "OBrien_1107",
      "id": 47713744,
      "score": 1,
      "time": 1775796185,
      "title": "CollectWise (YC F24) Is Hiring",
      "type": "job",
      "url": "https://www.ycombinator.com/companies/collectwise/jobs/Ktc6m6o-ai-agent-engineer"
    },
    {
      "by": "mellosouls",
      "descendants": 10,
      "id": 47713584,
      "kids": [
        47714103,
        47714374,
        47713781,
        47713906,
        47713831
      ],
      "score": 75,
      "time": 1775794648,
      "title": "Afrika Bambaataa, hip-hop pioneer, has died",
      "type": "story",
      "url": "https://www.bbc.co.uk/news/articles/c2evppm30p7o"
    },
    {
      "by": "rickcarlino",
      "descendants": 30,
      "id": 47708041,
      "kids": [
        47709020,
        47710039,
        47713709,
        47709301,
        47710074,
        47711309,
        47709441,
        47712643,
        47713151,
        47709718,
        47709304,
        47709587,
        47712922,
        47708591,
        47709679,
        47710274
      ],
      "score": 177,
      "time": 1775760800,
      "title": "PicoZ80 – Drop-In Z80 Replacement",
      "type": "story",
      "url": "https://eaw.app/picoz80/"
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
      "title": "What are your programming \"hunches\" you haven't yet investigated?",
      "url": "",
      "score": 106,
      "comments": 185,
      "tags": [
        "ask",
        "programming"
      ],
      "id": "gns27z"
    },
    {
      "title": "Let’s talk about LLMs",
      "url": "https://www.b-list.org/weblog/2026/apr/09/llms/",
      "score": 40,
      "comments": 23,
      "tags": [
        "vibecoding"
      ],
      "id": "j2l2ya"
    },
    {
      "title": "TIL that Helix and Typst are a match made in heaven",
      "url": "https://ergaster.org/til/helix-typst-match-in-heaven/",
      "score": 38,
      "comments": 17,
      "tags": [
        "editors"
      ],
      "id": "1iwyg7"
    },
    {
      "title": "Elastic tabstops (2006)",
      "url": "https://nick-gravgaard.com/elastic-tabstops/",
      "score": 17,
      "comments": 6,
      "tags": [
        "practices"
      ],
      "id": "pli6nn"
    },
    {
      "title": "You can absolutely have an RSS dependent website in 2026",
      "url": "https://matduggan.com/you-can-absolutely-have-an-rss-dependent-website-in-2026/",
      "score": 37,
      "comments": 5,
      "tags": [
        "web"
      ],
      "id": "s51wss"
    },
    {
      "title": "Incremental compilation with LLVM",
      "url": "https://ziglang.org/devlog/2026/#2026-04-08",
      "score": 9,
      "comments": 1,
      "tags": [
        "zig"
      ],
      "id": "tbud4j"
    },
    {
      "title": "Little Snitch for Linux",
      "url": "https://obdev.at/blog/little-snitch-for-linux/",
      "score": 140,
      "comments": 16,
      "tags": [
        "linux",
        "release",
        "security"
      ],
      "id": "2zrhn4"
    },
    {
      "title": "The AI Great Leap Forward",
      "url": "https://leehanchung.github.io/blogs/2026/04/05/the-ai-great-leap-forward/",
      "score": 41,
      "comments": 15,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "nmhkdl"
    },
    {
      "title": "But what about K?",
      "url": "https://tony-zorman.com/posts/whitney-k.html",
      "score": 36,
      "comments": 2,
      "tags": [
        "apl",
        "c"
      ],
      "id": "nfrinx"
    },
    {
      "title": "I made a productivity device for less than 50 bucks",
      "url": "https://thelibre.news/i-made-the-ultimate-productivity-device/",
      "score": 21,
      "comments": 7,
      "tags": [
        "hardware"
      ],
      "id": "vuphp4"
    }
  ]
}
```

