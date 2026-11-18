# Hacker Feeds Outcomes - Creators

Generated on: 2026-11-18 06:26:16 UTC

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
Request error: Request failed with status code 404
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "devto",
  "tag": null,
  "sort": "top",
  "items": [
    {
      "title": "An MCP Tool Call Can Resolve and Still Fail",
      "description": "An await finishes. The application returns a result. The trace contains a completed tool span. The...",
      "url": "https://dev.to/gde/an-mcp-tool-call-can-resolve-and-still-fail-52kc",
      "tags": "ai, typescript, testing, mcp",
      "reactions": 25,
      "comments": 27,
      "reading_time": 4,
      "author": "raju_dandigam"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-5hda",
      "tags": "top7, discuss",
      "reactions": 72,
      "comments": 32,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "️🎞️ What is native multimodality?",
      "description": "🍿 Just a moment #01    Did you know there are three tokenizers involved when Gemini...",
      "url": "https://dev.to/googlecloud/what-is-native-multimodality-3091",
      "tags": "llm, machinelearning, videos, justamoment",
      "reactions": 5,
      "comments": 0,
      "reading_time": 1,
      "author": "picardparis"
    },
    {
      "title": "My AI agent kept quoting a number I had already corrected. What has yours remembered wrong?",
      "description": "In August my coding agent kept telling me that one kind of article on this site draws about four...",
      "url": "https://dev.to/heinrichneb/my-ai-agent-kept-quoting-a-number-i-had-already-corrected-what-has-yours-remembered-wrong-34d0",
      "tags": "discuss, ai, agents, productivity",
      "reactions": 19,
      "comments": 15,
      "reading_time": 1,
      "author": "heinrichneb"
    },
    {
      "title": "Why We Built an MCP Server for AI Founders’ Go to Market",
      "description": "Launching a technical startup in the age of AI is challenging. So we built a full MCP server to put...",
      "url": "https://dev.to/tedcarstensen/why-we-built-an-mcp-server-for-ai-founders-go-to-market-4hge",
      "tags": "ai, mcp, startup",
      "reactions": 2,
      "comments": 0,
      "reading_time": 5,
      "author": "tedcarstensen"
    },
    {
      "title": "Fast multimodal control flow with the Gemini Decisions API",
      "description": "Generative models write text for people to read. When your app only needs to pick a tool or route a...",
      "url": "https://dev.to/philschmid/fast-multimodal-control-flow-with-the-gemini-decisions-api-533b",
      "tags": "ai, api, gemini, llm",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "philschmid"
    },
    {
      "title": "High or Low Thinking? Gemini 4 and Gemma 4 on Hard Math, Cost First",
      "description": "Seven models on the 15 problems of AIME 2025 I at their lowest and highest thinking settings, under a hard budget. The top setting cost 2.6 to 4.8 times as much on every paid model; Hydrogen, Carbon and Argon solved all 15 at either setting, and no score change was large enough to rule out chance on 15 problems.",
      "url": "https://dev.to/gde/high-or-low-thinking-gemini-4-and-gemma-4-on-hard-math-cost-first-3091",
      "tags": "gemini, gemma, benchmark, ai",
      "reactions": 27,
      "comments": 8,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "How did you end up in tech, and are you staying?",
      "description": "Last week you showed me where you code. This week I want to know how you ended up there in the first...",
      "url": "https://dev.to/maame-codes/how-did-you-end-up-in-tech-and-are-you-staying-4l9b",
      "tags": "discuss, career, beginners, watercooler",
      "reactions": 161,
      "comments": 77,
      "reading_time": 3,
      "author": "maame-codes"
    },
    {
      "title": "Prompt Pad: What Are Tokens?",
      "description": "Your AI doesn't read your prompt word for word. It reads tokens.  In this episode of Prompt Pad,...",
      "url": "https://blog.mlh.com/prompt-pad-what-are-tokens-gec",
      "tags": "ai, beginners, codenewbie, llm",
      "reactions": 7,
      "comments": 0,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "Congrats to the Hacktoberfest Open-Source AI Challenge Week 4: Ghost in the Machine Winners!",
      "description": "The results are in for the final week of our Hacktoberfest DEV Challenges! For Ghost in the Machine,...",
      "url": "https://dev.to/devteam/congrats-to-the-hacktoberfest-open-source-ai-challenge-week-4-ghost-in-the-machine-winners-nok",
      "tags": "devchallenge, hf26challenge, hacktoberfest, ai",
      "reactions": 114,
      "comments": 49,
      "reading_time": 4,
      "author": "heyitsjem"
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
      "author": "addyosmani",
      "repo": "agent-skills",
      "avatar": "https://github.com/addyosmani.png",
      "repo_link": "https://github.com/addyosmani/agent-skills",
      "desc": "Production-grade engineering skills for AI coding agents.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 12378,
      "added_stars": 3884,
      "builtBy": [
        {
          "username": "addyosmani",
          "href": "https://github.com/addyosmani",
          "avatar": "https://avatars.githubusercontent.com/u/110953"
        },
        {
          "username": "nucliweb",
          "href": "https://github.com/nucliweb",
          "avatar": "https://avatars.githubusercontent.com/u/1307927"
        },
        {
          "username": "ayobamiseun",
          "href": "https://github.com/ayobamiseun",
          "avatar": "https://avatars.githubusercontent.com/u/66267222"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
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
      "forks": 8905,
      "added_stars": 1476,
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
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "aaronbeashel",
          "href": "https://github.com/aaronbeashel",
          "avatar": "https://avatars.githubusercontent.com/u/93219218"
        },
        {
          "username": "FekyBaz",
          "href": "https://github.com/FekyBaz",
          "avatar": "https://avatars.githubusercontent.com/u/97516177"
        }
      ]
    },
    {
      "author": "Anil-matcha",
      "repo": "Open-Generative-AI",
      "avatar": "https://github.com/Anil-matcha.png",
      "repo_link": "https://github.com/Anil-matcha/Open-Generative-AI",
      "desc": "Uncensored Open-source alternative to AI video platforms — Free AI image & video generation studio with 800+ models (Flux, Midjourney, Kling, Sora, Veo). No content filters. Self-hosted, MIT licensed.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6763,
      "added_stars": 1340,
      "builtBy": [
        {
          "username": "Anil-matcha",
          "href": "https://github.com/Anil-matcha",
          "avatar": "https://avatars.githubusercontent.com/u/4326215"
        },
        {
          "username": "jaiprasad04",
          "href": "https://github.com/jaiprasad04",
          "avatar": "https://avatars.githubusercontent.com/u/114457757"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "WhiteRaven11",
          "href": "https://github.com/WhiteRaven11",
          "avatar": "https://avatars.githubusercontent.com/u/95498438"
        },
        {
          "username": "NgoQuocViet2001",
          "href": "https://github.com/NgoQuocViet2001",
          "avatar": "https://avatars.githubusercontent.com/u/123613986"
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
      "stars": 0,
      "forks": 8866,
      "added_stars": 1144,
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
      "author": "Leonxlnx",
      "repo": "taste-skill",
      "avatar": "https://github.com/Leonxlnx.png",
      "repo_link": "https://github.com/Leonxlnx/taste-skill",
      "desc": "Agent skills that give coding agents taste: art direction, reference images and a browser check instead of generic AI pages",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7891,
      "added_stars": 4805,
      "builtBy": [
        {
          "username": "Leonxlnx",
          "href": "https://github.com/Leonxlnx",
          "avatar": "https://avatars.githubusercontent.com/u/219127460"
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
          "username": "HugoSpy",
          "href": "https://github.com/HugoSpy",
          "avatar": "https://avatars.githubusercontent.com/u/122161868"
        },
        {
          "username": "bougieL",
          "href": "https://github.com/bougieL",
          "avatar": "https://avatars.githubusercontent.com/u/36102904"
        }
      ]
    },
    {
      "author": "DeanChensj",
      "repo": "jiangshan-map",
      "avatar": "https://github.com/DeanChensj.png",
      "repo_link": "https://github.com/DeanChensj/jiangshan-map",
      "desc": "江山时序 · 中国历史交互地图时间轴 (403 BCE – Present) | Interactive Historical Atlas of China across 18 dynasties, 198 territory snapshots, ancient-to-modern place genealogy & classical poetry routes",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 928,
      "added_stars": 2397,
      "builtBy": [
        {
          "username": "DeanChensj",
          "href": "https://github.com/DeanChensj",
          "avatar": "https://avatars.githubusercontent.com/u/9414763"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "xcv58",
          "href": "https://github.com/xcv58",
          "avatar": "https://avatars.githubusercontent.com/u/503123"
        },
        {
          "username": "mathieuwang",
          "href": "https://github.com/mathieuwang",
          "avatar": "https://avatars.githubusercontent.com/u/14016345"
        },
        {
          "username": "zsc8917zsc",
          "href": "https://github.com/zsc8917zsc",
          "avatar": "https://avatars.githubusercontent.com/u/3294106"
        }
      ]
    },
    {
      "author": "mrdoob",
      "repo": "three.js",
      "avatar": "https://github.com/mrdoob.png",
      "repo_link": "https://github.com/mrdoob/three.js",
      "desc": "JavaScript 3D Library.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 37024,
      "added_stars": 725,
      "builtBy": [
        {
          "username": "mrdoob",
          "href": "https://github.com/mrdoob",
          "avatar": "https://avatars.githubusercontent.com/u/97088"
        },
        {
          "username": "Mugen87",
          "href": "https://github.com/Mugen87",
          "avatar": "https://avatars.githubusercontent.com/u/12612165"
        },
        {
          "username": "sunag",
          "href": "https://github.com/sunag",
          "avatar": "https://avatars.githubusercontent.com/u/502810"
        },
        {
          "username": "alteredq",
          "href": "https://github.com/alteredq",
          "avatar": "https://avatars.githubusercontent.com/u/438022"
        },
        {
          "username": "WestLangley",
          "href": "https://github.com/WestLangley",
          "avatar": "https://avatars.githubusercontent.com/u/1000017"
        }
      ]
    },
    {
      "author": "ConardLi",
      "repo": "garden-skills",
      "avatar": "https://github.com/ConardLi.png",
      "repo_link": "https://github.com/ConardLi/garden-skills",
      "desc": "ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1745,
      "added_stars": 500,
      "builtBy": [
        {
          "username": "ConardLi",
          "href": "https://github.com/ConardLi",
          "avatar": "https://avatars.githubusercontent.com/u/30708545"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "eltociear",
          "href": "https://github.com/eltociear",
          "avatar": "https://avatars.githubusercontent.com/u/22633385"
        },
        {
          "username": "Aliciawque",
          "href": "https://github.com/Aliciawque",
          "avatar": "https://avatars.githubusercontent.com/u/166712943"
        }
      ]
    },
    {
      "author": "vercel-labs",
      "repo": "agent-skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/agent-skills",
      "desc": "Vercel's official collection of agent skills",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2993,
      "added_stars": 511,
      "builtBy": [
        {
          "username": "aurorascharff",
          "href": "https://github.com/aurorascharff",
          "avatar": "https://avatars.githubusercontent.com/u/66901228"
        },
        {
          "username": "shuding",
          "href": "https://github.com/shuding",
          "avatar": "https://avatars.githubusercontent.com/u/3676859"
        },
        {
          "username": "quuu",
          "href": "https://github.com/quuu",
          "avatar": "https://avatars.githubusercontent.com/u/32676955"
        },
        {
          "username": "nandorojo",
          "href": "https://github.com/nandorojo",
          "avatar": "https://avatars.githubusercontent.com/u/13172299"
        },
        {
          "username": "JohnPhamous",
          "href": "https://github.com/JohnPhamous",
          "avatar": "https://avatars.githubusercontent.com/u/16027268"
        }
      ]
    },
    {
      "author": "expressjs",
      "repo": "express",
      "avatar": "https://github.com/expressjs.png",
      "repo_link": "https://github.com/expressjs/express",
      "desc": "Fast, unopinionated, minimalist web framework for node.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 25679,
      "added_stars": 375,
      "builtBy": [
        {
          "username": "tj",
          "href": "https://github.com/tj",
          "avatar": "https://avatars.githubusercontent.com/u/25254"
        },
        {
          "username": "dougwilson",
          "href": "https://github.com/dougwilson",
          "avatar": "https://avatars.githubusercontent.com/u/67512"
        },
        {
          "username": "jonathanong",
          "href": "https://github.com/jonathanong",
          "avatar": "https://avatars.githubusercontent.com/u/643505"
        },
        {
          "username": "defunctzombie",
          "href": "https://github.com/defunctzombie",
          "avatar": "https://avatars.githubusercontent.com/u/84792"
        },
        {
          "username": "UlisesGascon",
          "href": "https://github.com/UlisesGascon",
          "avatar": "https://avatars.githubusercontent.com/u/5110813"
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
      "title": "AI agents open 17 million pull requests a month. I built a gate that rejects the ones that lie.",
      "description": "AI agents now open pull requests on their own. I gave Amazon Nova Pro a real GitHub bug, then built a deterministic Python gate that rejects it when it cannot prove the fix. No model grades the model.",
      "url": "https://dev.to/aws-builders/ai-agents-open-17-million-pull-requests-a-month-i-built-a-gate-that-rejects-the-ones-that-lie-46n7",
      "tags": "ai, aws, devops, discuss",
      "reactions": 28,
      "comments": 18,
      "reading_time": 6,
      "author": "sarvar_04"
    },
    {
      "title": "Ghost Rovers: I Called 12 Machines NASA Left Behind. One Picked Up.",
      "description": "A 1969 Mission Control console for kids. Built in one day for NASA Space Apps 2026.   TL;DR: For NASA...",
      "url": "https://dev.to/earlgreyhot1701d/ghost-rovers-i-called-12-machines-nasa-left-behind-one-picked-up-2575",
      "tags": "ai, webdev, hackathon, showdev",
      "reactions": 66,
      "comments": 22,
      "reading_time": 9,
      "author": "earlgreyhot1701d"
    },
    {
      "title": "Could I Still Do This From Scratch?",
      "description": "The thing that every dev I know is quietly worrying about is not AI taking their job. It's losing the...",
      "url": "https://dev.to/dannwaneri/could-i-still-do-this-from-scratch-427h",
      "tags": "ai, programming, career, discuss",
      "reactions": 43,
      "comments": 11,
      "reading_time": 3,
      "author": "dannwaneri"
    },
    {
      "title": "Five Palaces, One Model: Testing Google’s Gemini 4 Hydrogen in AI Studio",
      "description": "Last week Google shipped Gemini 4 Hydrogen, and within hours my X timeline was nothing but 3D scenes,...",
      "url": "https://dev.to/amananandrai/i-built-5-interactive-3d-palaces-with-googles-new-gemini-4-hydrogen-in-ai-studio-5g8h",
      "tags": "gemini, ai, threejs, webdev",
      "reactions": 16,
      "comments": 4,
      "reading_time": 7,
      "author": "amananandrai"
    },
    {
      "title": "Matt Pocock's Agent Skills: The Markdown Files Everyone's Installing (and Whether They Still Matter)",
      "description": "Quick confession: I rolled my eyes when \"a folder of Markdown files\" started topping GitHub trending....",
      "url": "https://dev.to/amananandrai/matt-pococks-agent-skills-the-markdown-files-everyones-installing-and-whether-they-still-matter-122a",
      "tags": "ai, claudecode, productivity, webdev",
      "reactions": 8,
      "comments": 0,
      "reading_time": 6,
      "author": "amananandrai"
    },
    {
      "title": "A reader found a hole in our AI inbox. Postgres closes it now",
      "description": "An approved AI proposal can still be wrong if the data moved while it waited. How we stamp a base into every proposal and refuse a stale approval inside the database.",
      "url": "https://dev.to/appwebseo/a-reader-found-a-hole-in-our-ai-inbox-postgres-closes-it-now-10lm",
      "tags": "postgres, ai, mcp, concurrency",
      "reactions": 5,
      "comments": 6,
      "reading_time": 6,
      "author": "appwebseo"
    },
    {
      "title": "This is a strange phenomenon I am observing myself. I am productive with AI, but it makes me restless and leaves me fragmented. Anyone else? What are you doing about it?",
      "description": "When Friction Disappears: How AI Is Quietly Fragmenting High Performers                        ...",
      "url": "https://dev.to/debashish_ghosal/this-is-a-strange-phenomenon-i-am-observing-myself-i-am-productive-with-ai-but-it-makes-me-5gg4",
      "tags": "ai, discuss, productivity",
      "reactions": 5,
      "comments": 0,
      "reading_time": 1,
      "author": "debashish_ghosal"
    },
    {
      "title": "When Friction Disappears: How AI Is Quietly Fragmenting High Performers",
      "description": "Observations: The Wired High-Achiever   For the past few months, I’ve been watching a...",
      "url": "https://dev.to/debashish_ghosal/when-friction-disappears-how-ai-is-quietly-fragmenting-high-performers-3pio",
      "tags": "ai, productivity, mentalhealth, discuss",
      "reactions": 10,
      "comments": 0,
      "reading_time": 3,
      "author": "debashish_ghosal"
    },
    {
      "title": "From GPT-3 to Agents: How AI Rewired Software in Six Years (2020-2026)",
      "description": "If you had told a developer in early 2020 that by the end of 2026 most of their peers would use AI...",
      "url": "https://dev.to/akhourianmolkumar/from-gpt-3-to-agents-how-ai-rewired-software-in-six-years-2020-2026-5al1",
      "tags": "ai, webdev, productivity, css",
      "reactions": 23,
      "comments": 2,
      "reading_time": 8,
      "author": "akhourianmolkumar"
    },
    {
      "title": "Stop the action, not the injection",
      "description": "2026's agent attacks are one bug. The fix isn't a smarter model — it's a signed limit at the tool call, outside the agent. Four runnable demos.",
      "url": "https://dev.to/cleiton_augusto_/stop-the-action-not-the-injection-14jo",
      "tags": "security, ai, opensource, rust",
      "reactions": 1,
      "comments": 2,
      "reading_time": 4,
      "author": "cleiton_augusto_"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "werrett",
      "descendants": 199,
      "id": 50538240,
      "kids": [
        50539499,
        50538391,
        50538337,
        50538205,
        50539855,
        50538933,
        50538403,
        50538586,
        50542353,
        50538267,
        50539067,
        50540970,
        50538735,
        50538543,
        50540609,
        50541851,
        50541895,
        50538551,
        50541384,
        50538889,
        50540284,
        50541782,
        50537814,
        50538880,
        50540382,
        50538805,
        50539323,
        50540121,
        50539268,
        50542543,
        50539508,
        50538923,
        50540988,
        50539222,
        50539849,
        50539514,
        50538830,
        50538760,
        50538746,
        50540443,
        50539167,
        50539297,
        50538430,
        50538395,
        50538757,
        50538494,
        50539627,
        50540804,
        50540285,
        50539348,
        50539398,
        50542417,
        50539022,
        50539533,
        50538534,
        50540460,
        50538743
      ],
      "score": 747,
      "time": 1794949888,
      "title": "Java4Shell: RCE in OpenJDK when processing Base64",
      "type": "story",
      "url": "https://calif.io/java4shell/"
    },
    {
      "by": "DeepLogin",
      "descendants": 115,
      "id": 50540437,
      "kids": [
        50541075,
        50540581,
        50542356,
        50540989,
        50541061,
        50542267,
        50542266,
        50541299,
        50540983,
        50542227,
        50540984,
        50541864,
        50541977,
        50542488,
        50541205,
        50542326,
        50541107,
        50541690,
        50541840,
        50541066,
        50541784,
        50540936,
        50541887,
        50541136,
        50540742
      ],
      "score": 276,
      "time": 1794963105,
      "title": "ID.me terms required for IRS sign-in",
      "type": "story",
      "url": "https://consumerrights.wiki/w/ID.me_terms_required_for_IRS_sign-in"
    },
    {
      "by": "jasondavies",
      "descendants": 748,
      "id": 50535230,
      "kids": [
        50539264,
        50535502,
        50537602,
        50536029,
        50537117,
        50535361,
        50537306,
        50535851,
        50535388,
        50536281,
        50535369,
        50535803,
        50535486,
        50538493,
        50535742,
        50535774,
        50536944,
        50536721,
        50535960,
        50537589,
        50536987,
        50540076,
        50537215,
        50537043,
        50535412,
        50535353,
        50541470,
        50538220,
        50538329,
        50535687,
        50536825,
        50535819,
        50535472,
        50535959,
        50535765,
        50536064,
        50537352,
        50535338,
        50535547,
        50535686,
        50535437,
        50535364,
        50535459,
        50536288,
        50535420,
        50535797,
        50540256,
        50535798,
        50541697,
        50535683,
        50540841,
        50535865,
        50542096,
        50537793,
        50537398,
        50538023,
        50536255,
        50535320,
        50537435,
        50537853,
        50539447,
        50535913,
        50540822,
        50535755,
        50535415,
        50535838,
        50540305,
        50537787,
        50541576,
        50539458,
        50539337,
        50541687,
        50536432,
        50539623,
        50536062,
        50536210,
        50535708,
        50538483,
        50537295,
        50535593,
        50535664,
        50535494,
        50535362,
        50536571,
        50539331,
        50536116,
        50536128,
        50536739,
        50537488,
        50538595,
        50535920,
        50536515,
        50537194,
        50535351,
        50535473,
        50535764,
        50536373,
        50542397,
        50537947,
        50537003,
        50538389,
        50535760,
        50539901,
        50536772,
        50536146,
        50538992,
        50536827,
        50535350,
        50538531,
        50537443,
        50535769,
        50536249,
        50535434,
        50536524,
        50538289,
        50535417,
        50536617,
        50536541,
        50539975,
        50535720,
        50536703,
        50535464,
        50535303,
        50540047,
        50536624,
        50537410,
        50537839,
        50535806,
        50535721,
        50538025,
        50536773,
        50535307,
        50537532,
        50536678,
        50535762,
        50535346,
        50536715,
        50535788,
        50538878,
        50535754,
        50537200,
        50537605,
        50535642,
        50537342,
        50537005,
        50535932,
        50535572,
        50535557,
        50535481,
        50535633,
        50536512,
        50536411,
        50538958,
        50538340,
        50536401,
        50535463,
        50535306,
        50536418,
        50535820,
        50539269,
        50535286,
        50538096,
        50537668,
        50535384,
        50542483,
        50539753,
        50539765,
        50537042,
        50535458,
        50537067,
        50535435,
        50535331,
        50538566,
        50539220,
        50537453,
        50537648,
        50537501,
        50535665,
        50538827,
        50537212,
        50536491,
        50535825,
        50535413,
        50535386,
        50535293
      ],
      "score": 1200,
      "time": 1794937603,
      "title": "GPT‑6.2 Astra and Sol",
      "type": "story",
      "url": "https://openai.com/index/introducing-gpt-6-2-astra-sol/"
    },
    {
      "by": "slashdev",
      "descendants": 200,
      "id": 50540178,
      "kids": [
        50540597,
        50542232,
        50540456,
        50542187,
        50542463,
        50541009,
        50541636,
        50542429,
        50540625,
        50542121,
        50541664,
        50541785,
        50542284,
        50540478,
        50541500,
        50541756,
        50542272,
        50541555,
        50540678,
        50541193,
        50541831,
        50540919,
        50540760,
        50541255,
        50541505,
        50540830,
        50541103,
        50541544,
        50540842,
        50541878,
        50541108,
        50541190,
        50540563,
        50541297,
        50540906,
        50540504,
        50540954,
        50542041,
        50540596,
        50541453,
        50540925,
        50540661,
        50541371,
        50541413,
        50541091,
        50542133,
        50540626,
        50540969,
        50540791,
        50540649,
        50541082,
        50541762,
        50541119,
        50541198,
        50542035,
        50540446
      ],
      "score": 276,
      "time": 1794961078,
      "title": "Google's AI answers reducing search traffic by 40%",
      "type": "story",
      "url": "https://revscope.co/blog/search-seo-geo-2026/"
    },
    {
      "by": "subset",
      "descendants": 139,
      "id": 50538994,
      "kids": [
        50539856,
        50539764,
        50539410,
        50540380,
        50539515,
        50542166,
        50539799,
        50539494,
        50540083,
        50539841,
        50540267,
        50539387,
        50539757,
        50542125,
        50540727,
        50540871,
        50540784,
        50539509
      ],
      "score": 441,
      "time": 1794953614,
      "title": "Quad9's withdrawal from France: A canary in the coal mine",
      "type": "story",
      "url": "https://blog.cloudflare.com/quad9-withdrawal-from-france/"
    },
    {
      "by": "throwawaysleep",
      "descendants": 11,
      "id": 50542135,
      "kids": [
        50542378,
        50542294,
        50542404,
        50542333,
        50542360,
        50542514,
        50542323,
        50542442
      ],
      "score": 118,
      "time": 1794978690,
      "title": "Interviewed at a YC startup, found out they used my LinkedIn without permission",
      "type": "story",
      "url": "https://reddit.com/r/recruitinghell/comments/1xyr6ml/interviewed_at_a_yc_startup_spent_30_hours/"
    },
    {
      "by": "nvader",
      "descendants": 59,
      "id": 50539610,
      "kids": [
        50542273,
        50540373,
        50540608,
        50540135,
        50540243,
        50539658,
        50540449,
        50541981,
        50541752,
        50540605,
        50541146,
        50540554,
        50540126,
        50540943,
        50542312,
        50540533,
        50540045,
        50541620,
        50540010,
        50540115,
        50540876,
        50542031,
        50541496,
        50540670,
        50542307,
        50540072
      ],
      "score": 244,
      "time": 1794957529,
      "title": "Microsoft's ONNX Runtime has disappeared from GitHub",
      "type": "story",
      "url": "https://github.com/microsoft/onnxruntime"
    },
    {
      "by": "louiereederson",
      "descendants": 221,
      "id": 50534631,
      "kids": [
        50535443,
        50538051,
        50536026,
        50536711,
        50539671,
        50536277,
        50542295,
        50537834,
        50538573,
        50535747,
        50535844,
        50541928,
        50539811,
        50536695,
        50541941,
        50538401,
        50536904,
        50537569,
        50537078,
        50540789,
        50541101,
        50536058,
        50536065,
        50537388,
        50540899,
        50538940,
        50536665,
        50538408
      ],
      "score": 482,
      "time": 1794935526,
      "title": "Nvidia stopped disclosing Singapore sales as revenues hit $104B",
      "type": "story",
      "url": "https://www.ft.com/content/dbde7a30-548c-4f9d-a4be-7898a0c24dcf"
    },
    {
      "by": "digitaldragon",
      "descendants": 53,
      "id": 50539747,
      "kids": [
        50539748,
        50540686,
        50542002,
        50540363,
        50540319,
        50541093,
        50540875,
        50540635,
        50541850
      ],
      "score": 154,
      "time": 1794958378,
      "title": "Archive Team is archiving the Apple Support Community (closes November 20, 2026)",
      "type": "story",
      "url": "https://wiki.archiveteam.org/index.php/Apple_Discussions"
    },
    {
      "by": "deenadz",
      "descendants": 11,
      "id": 50541790,
      "kids": [
        50542293,
        50542250,
        50542487,
        50542316,
        50542150,
        50542161,
        50542283,
        50542426
      ],
      "score": 32,
      "time": 1794975244,
      "title": "Why is Gemini 4 Carbon taking so long?",
      "type": "story",
      "url": "https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/"
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
Request error: Request failed with status code 429
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
      "by": "werrett",
      "descendants": 199,
      "id": 50538240,
      "kids": [
        50539499,
        50538391,
        50538337,
        50538205,
        50539855,
        50538933,
        50538403,
        50538586,
        50542353,
        50538267,
        50539067,
        50540970,
        50538735,
        50538543,
        50540609,
        50541851,
        50541895,
        50538551,
        50541384,
        50538889,
        50540284,
        50541782,
        50537814,
        50538880,
        50540382,
        50538805,
        50539323,
        50540121,
        50539268,
        50542543,
        50539508,
        50538923,
        50540988,
        50539222,
        50539849,
        50539514,
        50538830,
        50538760,
        50538746,
        50540443,
        50539167,
        50539297,
        50538430,
        50538395,
        50538757,
        50538494,
        50539627,
        50540804,
        50540285,
        50539348,
        50539398,
        50542417,
        50539022,
        50539533,
        50538534,
        50540460,
        50538743
      ],
      "score": 747,
      "time": 1794949888,
      "title": "Java4Shell: RCE in OpenJDK when processing Base64",
      "type": "story",
      "url": "https://calif.io/java4shell/"
    },
    {
      "by": "DeepLogin",
      "descendants": 115,
      "id": 50540437,
      "kids": [
        50541075,
        50540581,
        50542356,
        50540989,
        50541061,
        50542267,
        50542266,
        50541299,
        50540983,
        50542227,
        50540984,
        50541864,
        50541977,
        50542488,
        50541205,
        50542326,
        50541107,
        50541690,
        50541840,
        50541066,
        50541784,
        50540936,
        50541887,
        50541136,
        50540742
      ],
      "score": 276,
      "time": 1794963105,
      "title": "ID.me terms required for IRS sign-in",
      "type": "story",
      "url": "https://consumerrights.wiki/w/ID.me_terms_required_for_IRS_sign-in"
    },
    {
      "by": "jasondavies",
      "descendants": 748,
      "id": 50535230,
      "kids": [
        50539264,
        50535502,
        50537602,
        50536029,
        50537117,
        50535361,
        50537306,
        50535851,
        50535388,
        50536281,
        50535369,
        50535803,
        50535486,
        50538493,
        50535742,
        50535774,
        50536944,
        50536721,
        50535960,
        50537589,
        50536987,
        50540076,
        50537215,
        50537043,
        50535412,
        50535353,
        50541470,
        50538220,
        50538329,
        50535687,
        50536825,
        50535819,
        50535472,
        50535959,
        50535765,
        50536064,
        50537352,
        50535338,
        50535547,
        50535686,
        50535437,
        50535364,
        50535459,
        50536288,
        50535420,
        50535797,
        50540256,
        50535798,
        50541697,
        50535683,
        50540841,
        50535865,
        50542096,
        50537793,
        50537398,
        50538023,
        50536255,
        50535320,
        50537435,
        50537853,
        50539447,
        50535913,
        50540822,
        50535755,
        50535415,
        50535838,
        50540305,
        50537787,
        50541576,
        50539458,
        50539337,
        50541687,
        50536432,
        50539623,
        50536062,
        50536210,
        50535708,
        50538483,
        50537295,
        50535593,
        50535664,
        50535494,
        50535362,
        50536571,
        50539331,
        50536116,
        50536128,
        50536739,
        50537488,
        50538595,
        50535920,
        50536515,
        50537194,
        50535351,
        50535473,
        50535764,
        50536373,
        50542397,
        50537947,
        50537003,
        50538389,
        50535760,
        50539901,
        50536772,
        50536146,
        50538992,
        50536827,
        50535350,
        50538531,
        50537443,
        50535769,
        50536249,
        50535434,
        50536524,
        50538289,
        50535417,
        50536617,
        50536541,
        50539975,
        50535720,
        50536703,
        50535464,
        50535303,
        50540047,
        50536624,
        50537410,
        50537839,
        50535806,
        50535721,
        50538025,
        50536773,
        50535307,
        50537532,
        50536678,
        50535762,
        50535346,
        50536715,
        50535788,
        50538878,
        50535754,
        50537200,
        50537605,
        50535642,
        50537342,
        50537005,
        50535932,
        50535572,
        50535557,
        50535481,
        50535633,
        50536512,
        50536411,
        50538958,
        50538340,
        50536401,
        50535463,
        50535306,
        50536418,
        50535820,
        50539269,
        50535286,
        50538096,
        50537668,
        50535384,
        50542483,
        50539753,
        50539765,
        50537042,
        50535458,
        50537067,
        50535435,
        50535331,
        50538566,
        50539220,
        50537453,
        50537648,
        50537501,
        50535665,
        50538827,
        50537212,
        50536491,
        50535825,
        50535413,
        50535386,
        50535293
      ],
      "score": 1200,
      "time": 1794937603,
      "title": "GPT‑6.2 Astra and Sol",
      "type": "story",
      "url": "https://openai.com/index/introducing-gpt-6-2-astra-sol/"
    },
    {
      "by": "slashdev",
      "descendants": 200,
      "id": 50540178,
      "kids": [
        50540597,
        50542232,
        50540456,
        50542187,
        50542463,
        50541009,
        50541636,
        50542429,
        50540625,
        50542121,
        50541664,
        50541785,
        50542284,
        50540478,
        50541500,
        50541756,
        50542272,
        50541555,
        50540678,
        50541193,
        50541831,
        50540919,
        50540760,
        50541255,
        50541505,
        50540830,
        50541103,
        50541544,
        50540842,
        50541878,
        50541108,
        50541190,
        50540563,
        50541297,
        50540906,
        50540504,
        50540954,
        50542041,
        50540596,
        50541453,
        50540925,
        50540661,
        50541371,
        50541413,
        50541091,
        50542133,
        50540626,
        50540969,
        50540791,
        50540649,
        50541082,
        50541762,
        50541119,
        50541198,
        50542035,
        50540446
      ],
      "score": 276,
      "time": 1794961078,
      "title": "Google's AI answers reducing search traffic by 40%",
      "type": "story",
      "url": "https://revscope.co/blog/search-seo-geo-2026/"
    },
    {
      "by": "subset",
      "descendants": 139,
      "id": 50538994,
      "kids": [
        50539856,
        50539764,
        50539410,
        50540380,
        50539515,
        50542166,
        50539799,
        50539494,
        50540083,
        50539841,
        50540267,
        50539387,
        50539757,
        50542125,
        50540727,
        50540871,
        50540784,
        50539509
      ],
      "score": 441,
      "time": 1794953614,
      "title": "Quad9's withdrawal from France: A canary in the coal mine",
      "type": "story",
      "url": "https://blog.cloudflare.com/quad9-withdrawal-from-france/"
    },
    {
      "by": "throwawaysleep",
      "descendants": 11,
      "id": 50542135,
      "kids": [
        50542378,
        50542294,
        50542404,
        50542333,
        50542360,
        50542514,
        50542323,
        50542442
      ],
      "score": 118,
      "time": 1794978690,
      "title": "Interviewed at a YC startup, found out they used my LinkedIn without permission",
      "type": "story",
      "url": "https://reddit.com/r/recruitinghell/comments/1xyr6ml/interviewed_at_a_yc_startup_spent_30_hours/"
    },
    {
      "by": "nvader",
      "descendants": 59,
      "id": 50539610,
      "kids": [
        50542273,
        50540373,
        50540608,
        50540135,
        50540243,
        50539658,
        50540449,
        50541981,
        50541752,
        50540605,
        50541146,
        50540554,
        50540126,
        50540943,
        50542312,
        50540533,
        50540045,
        50541620,
        50540010,
        50540115,
        50540876,
        50542031,
        50541496,
        50540670,
        50542307,
        50540072
      ],
      "score": 244,
      "time": 1794957529,
      "title": "Microsoft's ONNX Runtime has disappeared from GitHub",
      "type": "story",
      "url": "https://github.com/microsoft/onnxruntime"
    },
    {
      "by": "louiereederson",
      "descendants": 221,
      "id": 50534631,
      "kids": [
        50535443,
        50538051,
        50536026,
        50536711,
        50539671,
        50536277,
        50542295,
        50537834,
        50538573,
        50535747,
        50535844,
        50541928,
        50539811,
        50536695,
        50541941,
        50538401,
        50536904,
        50537569,
        50537078,
        50540789,
        50541101,
        50536058,
        50536065,
        50537388,
        50540899,
        50538940,
        50536665,
        50538408
      ],
      "score": 482,
      "time": 1794935526,
      "title": "Nvidia stopped disclosing Singapore sales as revenues hit $104B",
      "type": "story",
      "url": "https://www.ft.com/content/dbde7a30-548c-4f9d-a4be-7898a0c24dcf"
    },
    {
      "by": "digitaldragon",
      "descendants": 53,
      "id": 50539747,
      "kids": [
        50539748,
        50540686,
        50542002,
        50540363,
        50540319,
        50541093,
        50540875,
        50540635,
        50541850
      ],
      "score": 154,
      "time": 1794958378,
      "title": "Archive Team is archiving the Apple Support Community (closes November 20, 2026)",
      "type": "story",
      "url": "https://wiki.archiveteam.org/index.php/Apple_Discussions"
    },
    {
      "by": "deenadz",
      "descendants": 11,
      "id": 50541790,
      "kids": [
        50542293,
        50542250,
        50542487,
        50542316,
        50542150,
        50542161,
        50542283,
        50542426
      ],
      "score": 32,
      "time": 1794975244,
      "title": "Why is Gemini 4 Carbon taking so long?",
      "type": "story",
      "url": "https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/"
    },
    {
      "by": "monkeydust",
      "descendants": 624,
      "id": 50532849,
      "kids": [
        50536044,
        50535617,
        50533394,
        50536605,
        50534352,
        50539300,
        50541561,
        50536740,
        50533962,
        50534089,
        50538266,
        50540960,
        50536894,
        50537518,
        50534055,
        50541381,
        50533493,
        50536097,
        50539974,
        50534373,
        50533646,
        50536417,
        50538978,
        50542203,
        50535733,
        50533652,
        50534632,
        50534161,
        50534088,
        50538667,
        50534012,
        50534099,
        50533123,
        50534418,
        50534752,
        50534856,
        50535965,
        50535821,
        50535368,
        50534729,
        50537338,
        50539949,
        50537457,
        50534694,
        50533767,
        50535681,
        50536533,
        50535734,
        50535219,
        50542451,
        50535144,
        50533562,
        50534211,
        50535540,
        50537557,
        50533684,
        50533099,
        50537454,
        50539850,
        50536881,
        50534806,
        50532935,
        50536819,
        50534722,
        50534524,
        50535143,
        50535678,
        50535928,
        50533963,
        50540282,
        50536527,
        50536891,
        50533311,
        50535580,
        50535222,
        50534855,
        50533224,
        50535135,
        50534441,
        50536250,
        50533570,
        50534275,
        50535326,
        50536922,
        50536293,
        50533485,
        50534145,
        50536115,
        50532920,
        50533804,
        50533683,
        50533176,
        50534294,
        50533452,
        50533521,
        50534192,
        50533878
      ],
      "score": 543,
      "text": "<a href=\"https:&#x2F;&#x2F;www.reuters.com&#x2F;technology&#x2F;highly-classified-us-national-security-communications-network-is-down-cnn-2026-11-17&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.reuters.com&#x2F;technology&#x2F;highly-classified-us-nati...</a>",
      "time": 1794929908,
      "title": "Highly classified US national security communications network goes down",
      "type": "story",
      "url": "https://www.cnn.com/2026/11/17/politics/highly-classified-national-security-communications-network-goes-down"
    },
    {
      "by": "davidchl",
      "id": 50541538,
      "score": 1,
      "time": 1794972947,
      "title": "GoGoGrandparent (YC S16) Is a Front End JavaScript / TypeScript Engineer",
      "type": "job",
      "url": "https://www.ycombinator.com/companies/gogograndparent/jobs/05woouL-front-end-javascript-typescript-engineer"
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
      "title": "Actual curl rewrites in rust",
      "url": "https://daniel.haxx.se/blog/2026/11/17/actual-curl-rewrites-in-rust/",
      "score": 87,
      "comments": 53,
      "tags": [
        "rust"
      ],
      "id": "1dj9w1"
    },
    {
      "title": "Java4Shell: Write once, RCE everywhere",
      "url": "https://calif.io/java4shell/",
      "score": 30,
      "comments": 13,
      "tags": [
        "java",
        "security"
      ],
      "id": "g0bf9i"
    },
    {
      "title": "Phrack 73",
      "url": "https://phrack.org/issues/73/introduction_md.html",
      "score": 43,
      "comments": 2,
      "tags": [
        "release",
        "security"
      ],
      "id": "xu4ajj"
    },
    {
      "title": "Redict is deprecated",
      "url": "https://redict.io/posts/2026-11-17-redict-deprecated/",
      "score": 70,
      "comments": 9,
      "tags": [
        "databases"
      ],
      "id": "z4rhlt"
    },
    {
      "title": "Steve Jobs Core Animation demo from WWDC 2007",
      "url": "https://lucas.love/100/058",
      "score": 21,
      "comments": 10,
      "tags": [
        "graphics",
        "mac",
        "video"
      ],
      "id": "yqmfzq"
    },
    {
      "title": "FreeBSD GUS",
      "url": "https://gregoire.dev/writing/gus/",
      "score": 6,
      "comments": 0,
      "tags": [
        "freebsd",
        "mac"
      ],
      "id": "bhfexs"
    },
    {
      "title": "Github Redesign (2019)",
      "url": "https://tonsky.me/blog/github-redesign/",
      "score": 39,
      "comments": 10,
      "tags": [
        "design"
      ],
      "id": "kseyz1"
    },
    {
      "title": "How to Bypass Rust's Orphan Rule",
      "url": "https://edvong.com/bypass-orphan-rule/",
      "score": 17,
      "comments": 7,
      "tags": [
        "rust"
      ],
      "id": "oj87qu"
    },
    {
      "title": "Sarasa Gothic Mono",
      "url": "https://picaq.github.io/sarasa",
      "score": 17,
      "comments": 2,
      "tags": [
        "design"
      ],
      "id": "de02yg"
    },
    {
      "title": "Nimony: The next version of Nim",
      "url": "https://nimony.org/",
      "score": 5,
      "comments": 11,
      "tags": [
        "compilers",
        "programming"
      ],
      "id": "jm8vk1"
    }
  ]
}
```

