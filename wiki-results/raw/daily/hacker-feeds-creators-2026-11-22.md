# Hacker Feeds Outcomes - Creators

Generated on: 2026-11-22 06:24:55 UTC

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
      "title": "Tell us your story, and we might read it on the CodeNewbie Podcast 🎙️",
      "description": "Hi! I’m Lauren 👩🏼‍💻, the new host of the CodeNewbie Podcast, and I’d love to hear your...",
      "url": "https://dev.to/codenewbie/tell-us-your-story-and-we-might-read-it-on-the-codenewbie-podcast-2840",
      "tags": "codenewbie, ai, beginners, podcast",
      "reactions": 39,
      "comments": 7,
      "reading_time": 4,
      "author": "lolocoding"
    },
    {
      "title": "The CodeNewbie Podcast is Back for Season 28!",
      "description": "Hi friends! 👋 The CodeNewbie Podcast is back for season 28, and I’m so excited to be the one hosting...",
      "url": "https://dev.to/codenewbie/the-codenewbie-podcast-is-back-for-season-28-2484",
      "tags": "codenewbie, ai, podcast, vibecoding",
      "reactions": 88,
      "comments": 12,
      "reading_time": 4,
      "author": "lolocoding"
    },
    {
      "title": "I can't believe the podcast I learned to code with is back!",
      "description": "Hi friends! 👋   Okay, storytime 🎬 Felt the urge to share this here too, since DEV is where it all...",
      "url": "https://dev.to/codenewbie/i-cant-believe-the-podcast-i-learned-to-code-with-is-back-2gi5",
      "tags": "codenewbie, podcast, ai",
      "reactions": 31,
      "comments": 1,
      "reading_time": 1,
      "author": "lolocoding"
    },
    {
      "title": "NYC: Escape the IVR at Twilio Assemble (Dec 8, Brooklyn)",
      "description": "If you're building AI agents in New York, this one's worth a weeknight.  Twilio Assemble, Twilio's...",
      "url": "https://dev.to/twilio/nyc-escape-the-ivr-at-twilio-assemble-dec-8-brooklyn-2dmb",
      "tags": "ai, events, nyc, agents",
      "reactions": 16,
      "comments": 0,
      "reading_time": 2,
      "author": "twiliodevs"
    },
    {
      "title": "Major League Hacking and SpaceXSI Come Together to Support the Next Generation of Builders",
      "description": "This initiative  will give thousands of students in the Major League Hacking (MLH) community access...",
      "url": "https://blog.mlh.com/major-league-hacking-and-spacexsi-come-together-to-support-the-next-generation-of-builders-feh",
      "tags": "ai, hackathon, grok, news",
      "reactions": 34,
      "comments": 1,
      "reading_time": 2,
      "author": "mlhacks"
    },
    {
      "title": "Agentic engineering a smart home energy system with Antigravity and Gemini 4",
      "description": "Running rooftop solar, a home battery, two electric vehicles (EVs), and dynamic hourly electricity...",
      "url": "https://dev.to/googleai/agentic-engineering-a-smart-home-energy-system-with-antigravity-and-gemini-4-53md",
      "tags": "ai, antigravity, smarthome, energy",
      "reactions": 28,
      "comments": 5,
      "reading_time": 9,
      "author": "rsamborski"
    },
    {
      "title": "Where Agents Fail: Part 1",
      "description": "AI models are smarter than ever, yet they still make obvious mistakes. Part 1 of a new series analyzing real coding sessions to find recurring agent failure patterns and test whether they're fixable.",
      "url": "https://dev.to/googleai/where-agents-fail-part-1-54hg",
      "tags": "ai, googlecloud, agents, coding",
      "reactions": 38,
      "comments": 8,
      "reading_time": 2,
      "author": "patrickjohnkelly"
    },
    {
      "title": "Making Offline Web AI RAG Universal: Introducing SourceDesk AI & Replaceable Subject Packs",
      "description": "How to turn a single-course offline RAG exam assistant into a universal, subject-agnostic platform—supporting Markdown, PDF, DOCX, and HTML with 1-command subject updates.",
      "url": "https://dev.to/gde/making-offline-web-ai-rag-universal-introducing-sourcedesk-ai-replaceable-subject-packs-4lbd",
      "tags": "webai, rag, gemma, webgpu",
      "reactions": 14,
      "comments": 0,
      "reading_time": 5,
      "author": "cyruswong"
    },
    {
      "title": "Building an Autonomous LinkedIn Portfolio & Recommendation Agent with Gemini Computer Use on Google Cloud",
      "description": "Learn how to harness Gemini 3.8 Flash Computer Use on Vertex AI with Playwright CDP attach to build an autonomous agent that navigates authenticated web sessions and generates evidence-backed portfolios.",
      "url": "https://dev.to/gde/building-an-autonomous-linkedin-portfolio-recommendation-agent-with-gemini-computer-use-on-google-jen",
      "tags": "googlecloud, gemini, ai, python",
      "reactions": 16,
      "comments": 0,
      "reading_time": 9,
      "author": "cyruswong"
    },
    {
      "title": "What team-wide AI adoption actually takes",
      "description": "I've tried nearly every way to make AI practical at work: new models, routers, agent frameworks,...",
      "url": "https://dev.to/peter/what-team-wide-ai-adoption-actually-takes-1gbh",
      "tags": "ai, productivity, discuss",
      "reactions": 55,
      "comments": 15,
      "reading_time": 4,
      "author": "peter"
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
      "author": "Anil-matcha",
      "repo": "Open-Generative-AI",
      "avatar": "https://github.com/Anil-matcha.png",
      "repo_link": "https://github.com/Anil-matcha/Open-Generative-AI",
      "desc": "Uncensored Open-source alternative to AI video platforms — Free AI image & video generation studio with 800+ models (Flux, Midjourney, Kling, Sora, Veo). No content filters. Self-hosted, MIT licensed.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6851,
      "added_stars": 1018,
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
      "author": "DeanChensj",
      "repo": "jiangshan-map",
      "avatar": "https://github.com/DeanChensj.png",
      "repo_link": "https://github.com/DeanChensj/jiangshan-map",
      "desc": "江山时序 · 中国历史交互地图时间轴 (403 BCE – Present) | Interactive Historical Atlas of China across 18 dynasties, 198 territory snapshots, ancient-to-modern place genealogy & classical poetry routes",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1066,
      "added_stars": 2805,
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
          "username": "mathieuwang",
          "href": "https://github.com/mathieuwang",
          "avatar": "https://avatars.githubusercontent.com/u/14016345"
        },
        {
          "username": "xcv58",
          "href": "https://github.com/xcv58",
          "avatar": "https://avatars.githubusercontent.com/u/503123"
        },
        {
          "username": "zsc8917zsc",
          "href": "https://github.com/zsc8917zsc",
          "avatar": "https://avatars.githubusercontent.com/u/3294106"
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
      "forks": 9040,
      "added_stars": 1601,
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
      "author": "jquery",
      "repo": "jquery",
      "avatar": "https://github.com/jquery.png",
      "repo_link": "https://github.com/jquery/jquery",
      "desc": "jQuery JavaScript Library",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 20641,
      "added_stars": 526,
      "builtBy": [
        {
          "username": "jeresig",
          "href": "https://github.com/jeresig",
          "avatar": "https://avatars.githubusercontent.com/u/1615"
        },
        {
          "username": "timmywil",
          "href": "https://github.com/timmywil",
          "avatar": "https://avatars.githubusercontent.com/u/192451"
        },
        {
          "username": "dmethvin",
          "href": "https://github.com/dmethvin",
          "avatar": "https://avatars.githubusercontent.com/u/157858"
        },
        {
          "username": "mgol",
          "href": "https://github.com/mgol",
          "avatar": "https://avatars.githubusercontent.com/u/1758366"
        },
        {
          "username": "jzaefferer",
          "href": "https://github.com/jzaefferer",
          "avatar": "https://avatars.githubusercontent.com/u/52585"
        }
      ]
    },
    {
      "author": "affaan-m",
      "repo": "ECC",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/ECC",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 45392,
      "added_stars": 5685,
      "builtBy": [
        {
          "username": "affaan-m",
          "href": "https://github.com/affaan-m",
          "avatar": "https://avatars.githubusercontent.com/u/124439313"
        },
        {
          "username": "haelyra",
          "href": "https://github.com/haelyra",
          "avatar": "https://avatars.githubusercontent.com/u/49814733"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "montjeffrey",
          "href": "https://github.com/montjeffrey",
          "avatar": "https://avatars.githubusercontent.com/u/24193489"
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
      "forks": 6131,
      "added_stars": 1740,
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
      "author": "louislam",
      "repo": "uptime-kuma",
      "avatar": "https://github.com/louislam.png",
      "repo_link": "https://github.com/louislam/uptime-kuma",
      "desc": "A fancy self-hosted monitoring tool",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 8867,
      "added_stars": 619,
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
      "author": "addyosmani",
      "repo": "agent-skills",
      "avatar": "https://github.com/addyosmani.png",
      "repo_link": "https://github.com/addyosmani/agent-skills",
      "desc": "Production-grade engineering skills for AI coding agents.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 12437,
      "added_stars": 2147,
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
      "author": "vercel-labs",
      "repo": "agent-skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/agent-skills",
      "desc": "Vercel's official collection of agent skills",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3021,
      "added_stars": 630,
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
      "author": "saadeghi",
      "repo": "daisyui",
      "avatar": "https://github.com/saadeghi.png",
      "repo_link": "https://github.com/saadeghi/daisyui",
      "desc": "🌼 🌼 🌼 🌼 🌼  The most popular, free and open-source Tailwind CSS component library",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1726,
      "added_stars": 111,
      "builtBy": [
        {
          "username": "saadeghi",
          "href": "https://github.com/saadeghi",
          "avatar": "https://avatars.githubusercontent.com/u/7342023"
        },
        {
          "username": "sulimanbenhalim",
          "href": "https://github.com/sulimanbenhalim",
          "avatar": "https://avatars.githubusercontent.com/u/44615499"
        },
        {
          "username": "pdanpdan",
          "href": "https://github.com/pdanpdan",
          "avatar": "https://avatars.githubusercontent.com/u/118764"
        },
        {
          "username": "JamBalaya56562",
          "href": "https://github.com/JamBalaya56562",
          "avatar": "https://avatars.githubusercontent.com/u/88115388"
        },
        {
          "username": "withden",
          "href": "https://github.com/withden",
          "avatar": "https://avatars.githubusercontent.com/u/57515871"
        }
      ]
    },
    {
      "author": "GoogleChrome",
      "repo": "lighthouse",
      "avatar": "https://github.com/GoogleChrome.png",
      "repo_link": "https://github.com/GoogleChrome/lighthouse",
      "desc": "Automated auditing, performance metrics, and best practices for the web.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 9801,
      "added_stars": 108,
      "builtBy": [
        {
          "username": "connorjclark",
          "href": "https://github.com/connorjclark",
          "avatar": "https://avatars.githubusercontent.com/u/4071474"
        },
        {
          "username": "paulirish",
          "href": "https://github.com/paulirish",
          "avatar": "https://avatars.githubusercontent.com/u/39191"
        },
        {
          "username": "brendankenny",
          "href": "https://github.com/brendankenny",
          "avatar": "https://avatars.githubusercontent.com/u/316891"
        },
        {
          "username": "patrickhulce",
          "href": "https://github.com/patrickhulce",
          "avatar": "https://avatars.githubusercontent.com/u/2301202"
        },
        {
          "username": "adamraine",
          "href": "https://github.com/adamraine",
          "avatar": "https://avatars.githubusercontent.com/u/6752989"
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
      "title": "Is Coding with AI Actually Faster and Cheaper?",
      "description": "How has AI actually changed the way we work? Are coding agents really making us remarkably faster?...",
      "url": "https://dev.to/sylwia-lask/is-coding-with-ai-actually-faster-and-cheaper-2810",
      "tags": "ai, programming, productivity, agents",
      "reactions": 229,
      "comments": 195,
      "reading_time": 6,
      "author": "sylwia-lask"
    },
    {
      "title": "Tell us your story, and we might read it on the CodeNewbie Podcast 🎙️",
      "description": "Hi! I’m Lauren 👩🏼‍💻, the new host of the CodeNewbie Podcast, and I’d love to hear your...",
      "url": "https://dev.to/codenewbie/tell-us-your-story-and-we-might-read-it-on-the-codenewbie-podcast-2840",
      "tags": "codenewbie, ai, beginners, podcast",
      "reactions": 39,
      "comments": 7,
      "reading_time": 4,
      "author": "lolocoding"
    },
    {
      "title": "Dead Keys: I Brought Back the Typing Games. Kiro Did the Heavy Lifting.",
      "description": "The keys you miss become the lesson.   TL;DR: Dead Keys is my entry for the Kiroween 2026 hackathon,...",
      "url": "https://dev.to/earlgreyhot1701d/dead-keys-i-brought-back-the-typing-games-kiro-did-the-heavy-lifting-5gc2",
      "tags": "ai, kiro, gamedev, buildinpublic",
      "reactions": 22,
      "comments": 7,
      "reading_time": 9,
      "author": "earlgreyhot1701d"
    },
    {
      "title": "The Chairs Are Back. The Coffee Is On. ☕",
      "description": "Welcome to The Third Cup.           The Renovation Is Done. We're Open Again!   Finally, the...",
      "url": "https://dev.to/thethirdcup/the-chairs-are-back-the-coffee-is-on-243p",
      "tags": "community, discuss, ai, writing",
      "reactions": 94,
      "comments": 38,
      "reading_time": 5,
      "author": "xulingfeng"
    },
    {
      "title": "The CodeNewbie Podcast is Back for Season 28!",
      "description": "Hi friends! 👋 The CodeNewbie Podcast is back for season 28, and I’m so excited to be the one hosting...",
      "url": "https://dev.to/codenewbie/the-codenewbie-podcast-is-back-for-season-28-2484",
      "tags": "codenewbie, ai, podcast, vibecoding",
      "reactions": 88,
      "comments": 12,
      "reading_time": 4,
      "author": "lolocoding"
    },
    {
      "title": "I Made My RAG Safer. It Got Worse Under Load",
      "description": "RAG isn't dead, but unverified RAG should be. Here's what checking every sentence actually cost me on...",
      "url": "https://dev.to/ayush_singh_9b0d83152be5b/i-made-my-rag-safer-it-got-worse-under-load-3olm",
      "tags": "ai, rag, discuss, productivity",
      "reactions": 15,
      "comments": 4,
      "reading_time": 7,
      "author": "ayush_singh_9b0d83152be5b"
    },
    {
      "title": "I can't believe the podcast I learned to code with is back!",
      "description": "Hi friends! 👋   Okay, storytime 🎬 Felt the urge to share this here too, since DEV is where it all...",
      "url": "https://dev.to/codenewbie/i-cant-believe-the-podcast-i-learned-to-code-with-is-back-2gi5",
      "tags": "codenewbie, podcast, ai",
      "reactions": 31,
      "comments": 1,
      "reading_time": 1,
      "author": "lolocoding"
    },
    {
      "title": "A VS Code extension to turn ANY free chatbot website into an AI agent (kind of)",
      "description": "If you've ever pasted ten files into ChatGPT, asked for a fix, then manually copied the result back...",
      "url": "https://dev.to/effessdev/a-vs-code-extension-to-turn-any-free-chatbot-website-into-an-ai-agent-kind-of-1n21",
      "tags": "ai, programming, opensource, productivity",
      "reactions": 40,
      "comments": 42,
      "reading_time": 7,
      "author": "effessdev"
    },
    {
      "title": "[Herdr Hands-on] Building Kalamos: A Typora-style macOS Markdown Editor in 3 Days with Claude Code as PM, Parallel Development,",
      "description": "Previously   In the previous three Herdr practical articles (First time using Herdr, Using...",
      "url": "https://dev.to/gde/herdr-hands-on-building-kalamos-a-typora-style-macos-markdown-editor-in-3-days-with-claude-code-9bn",
      "tags": "ai, claude, programming, showdev",
      "reactions": 0,
      "comments": 2,
      "reading_time": 17,
      "author": "evanlin"
    },
    {
      "title": "Orivra: The Keyboard That Types My Way",
      "description": "I love Gboard. I want to say that first, because it's true.  So when I say my own keyboard, Orivra,...",
      "url": "https://dev.to/javs713/orivra-the-keyboard-that-types-my-way-283h",
      "tags": "android, buildinpublic, ai, showdev",
      "reactions": 0,
      "comments": 4,
      "reading_time": 6,
      "author": "javs713"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "zdw",
      "descendants": 106,
      "id": 50596133,
      "kids": [
        50596395,
        50596443,
        50596409,
        50596550,
        50596473,
        50596295,
        50596656,
        50596288,
        50596810,
        50596641,
        50596323,
        50596372,
        50596362,
        50596571,
        50596393,
        50596601,
        50596277,
        50596358,
        50596313,
        50596530,
        50596250
      ],
      "score": 217,
      "time": 1795320296,
      "title": "Toyota, Nissan, and Honda to standardize parts to lower costs",
      "type": "story",
      "url": "https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/"
    },
    {
      "by": "rafaelc",
      "descendants": 198,
      "id": 50582069,
      "kids": [
        50593925,
        50593199,
        50596783,
        50596842,
        50593125,
        50593470,
        50594563,
        50596183,
        50596210,
        50593544,
        50593393,
        50594378,
        50595049,
        50595579,
        50594245,
        50595242,
        50594031,
        50596267,
        50595772,
        50594068,
        50594154,
        50595491
      ],
      "score": 854,
      "time": 1795208592,
      "title": "Pill to treat pancreatic cancer hailed as 'biggest breakthrough in decades'",
      "type": "story",
      "url": "https://www.theguardian.com/society/2026/nov/20/pill-pancreatic-cancer-breakthrough-daraxonrasib"
    },
    {
      "by": "g-b-r",
      "descendants": 802,
      "id": 50589618,
      "kids": [
        50590943,
        50591494,
        50590575,
        50590700,
        50590388,
        50596829,
        50590679,
        50590552,
        50593566,
        50590558,
        50590003,
        50594698,
        50591296,
        50594680,
        50590245,
        50596512,
        50591841,
        50590699,
        50591834,
        50590031,
        50593762,
        50594105,
        50590569,
        50592679,
        50592516,
        50590502,
        50590905,
        50591004,
        50594577,
        50593066,
        50590452,
        50590854,
        50590653,
        50590445,
        50590948,
        50591279,
        50595921,
        50591516,
        50593265,
        50590474,
        50595397,
        50594428,
        50590559,
        50592017,
        50591927,
        50590385,
        50592310,
        50591560,
        50590832,
        50590769,
        50590048,
        50591331,
        50590754,
        50590336,
        50591302,
        50594247,
        50590612,
        50591375,
        50595104,
        50590322,
        50590277,
        50590098,
        50592145,
        50589619
      ],
      "score": 939,
      "time": 1795271805,
      "title": "Lean verification of the Riemann Hypothesis",
      "type": "story",
      "url": "https://leanprover-community.github.io/blog/posts/riemann-hypothesis/"
    },
    {
      "by": "subdomain",
      "descendants": 52,
      "id": 50594911,
      "kids": [
        50596216,
        50595485,
        50596726,
        50595352,
        50595499,
        50596099,
        50595734,
        50595803,
        50595607,
        50595507,
        50596018,
        50595617,
        50595887,
        50595571,
        50596616,
        50596497,
        50596650,
        50596177,
        50595516,
        50596627,
        50595562,
        50595900,
        50595600,
        50595952,
        50595745,
        50595855,
        50595312
      ],
      "score": 131,
      "time": 1795306079,
      "title": "Sandwich Simulator",
      "type": "story",
      "url": "https://stulle.app/"
    },
    {
      "by": "k__",
      "descendants": 106,
      "id": 50591853,
      "kids": [
        50593478,
        50592561,
        50596389,
        50592987,
        50592726,
        50594799,
        50592135,
        50593754,
        50592509,
        50592574,
        50592929,
        50592296,
        50593119,
        50593310
      ],
      "score": 423,
      "time": 1795284139,
      "title": "Inkling-2-Mini in 5.4 GB Memory",
      "type": "story",
      "url": "https://github.com/ShinMegamiBoson/lookatmyquant"
    },
    {
      "by": "sdko",
      "descendants": 31,
      "id": 50595554,
      "kids": [
        50596004,
        50595608,
        50596189,
        50596135,
        50595781,
        50595848,
        50596047,
        50596480,
        50595760,
        50596126,
        50595704,
        50596179,
        50596467,
        50596038,
        50595766
      ],
      "score": 85,
      "time": 1795313654,
      "title": "Data Processing Incidents on Inference Providers",
      "type": "story",
      "url": "https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/"
    },
    {
      "by": "beginning_end",
      "descendants": 377,
      "id": 50588982,
      "kids": [
        50596145,
        50591155,
        50592101,
        50589677,
        50590342,
        50589505,
        50589231,
        50594790,
        50590626,
        50589409,
        50590167,
        50591869,
        50589873,
        50593961,
        50589863,
        50591824,
        50592029,
        50595210,
        50593493,
        50591879,
        50592389,
        50589340,
        50591074,
        50595823,
        50591441,
        50589286,
        50589805,
        50590220,
        50589277,
        50590478,
        50589696,
        50590347,
        50591958,
        50595696,
        50589529,
        50590258,
        50589404,
        50590399,
        50589266,
        50592568,
        50590384,
        50590213,
        50589669,
        50589364,
        50591157,
        50589603,
        50590222,
        50589536,
        50589436,
        50591420,
        50591739,
        50589777,
        50589765
      ],
      "score": 581,
      "time": 1795267394,
      "title": "Detonating a pile of lead azide",
      "type": "story",
      "url": "https://www.science.org/content/blog-post/detonating-huge-pile-lead-azide-really"
    },
    {
      "by": "jger15",
      "descendants": 70,
      "id": 50583028,
      "kids": [
        50593640,
        50596124,
        50593930,
        50593432,
        50594357,
        50594440,
        50596679,
        50593581,
        50596031,
        50593542,
        50595335,
        50596678,
        50593654,
        50594673,
        50594239,
        50594111,
        50593534,
        50593537,
        50595629,
        50594506,
        50593921,
        50593402,
        50594485,
        50594257
      ],
      "score": 226,
      "time": 1795212665,
      "title": "Getting the mind to steer the body to steer you",
      "type": "story",
      "url": "https://notnottalmud.substack.com/p/getting-the-mind-to-steer-the-body"
    },
    {
      "by": "sebaandrada",
      "descendants": 9,
      "id": 50594132,
      "kids": [
        50594611,
        50594432,
        50595763,
        50595538,
        50595702,
        50594888,
        50594133
      ],
      "score": 97,
      "time": 1795298998,
      "title": "PcapAnalyzer – self-hosted pcap analyzer with 27 problem detectors",
      "type": "story",
      "url": "https://github.com/sebaandrada-cell/PcapAnalyzer"
    },
    {
      "by": "soheilpro",
      "descendants": 264,
      "id": 50587875,
      "kids": [
        50589046,
        50590071,
        50589442,
        50589575,
        50592887,
        50589578,
        50591357,
        50591966,
        50593783,
        50595792,
        50588459,
        50590219,
        50592070,
        50592004,
        50592303,
        50589763,
        50595951,
        50592694,
        50590069,
        50593153,
        50589525,
        50588826,
        50593814,
        50592276,
        50590999,
        50588610,
        50591584,
        50593780,
        50588864,
        50593289,
        50591943,
        50590848,
        50594148,
        50592185,
        50595214,
        50594899,
        50593917,
        50590009,
        50594198,
        50594733,
        50590099,
        50588852,
        50589216,
        50591145,
        50590719,
        50589292,
        50589166,
        50594871,
        50588915,
        50590148,
        50589595,
        50589400,
        50591299,
        50591187,
        50589254,
        50589303
      ],
      "score": 546,
      "time": 1795257392,
      "title": "My monitor was cutting my download speed by 75%",
      "type": "story",
      "url": "https://blog.tymscar.com/posts/studiodisplayethernet/"
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
Request error: Request failed with status code 404
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
      "descendants": 106,
      "id": 50596133,
      "kids": [
        50596395,
        50596443,
        50596409,
        50596550,
        50596473,
        50596295,
        50596656,
        50596288,
        50596810,
        50596641,
        50596323,
        50596372,
        50596362,
        50596571,
        50596393,
        50596601,
        50596277,
        50596358,
        50596313,
        50596530,
        50596250
      ],
      "score": 217,
      "time": 1795320296,
      "title": "Toyota, Nissan, and Honda to standardize parts to lower costs",
      "type": "story",
      "url": "https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/"
    },
    {
      "by": "rafaelc",
      "descendants": 198,
      "id": 50582069,
      "kids": [
        50593925,
        50593199,
        50596783,
        50596842,
        50593125,
        50593470,
        50594563,
        50596183,
        50596210,
        50593544,
        50593393,
        50594378,
        50595049,
        50595579,
        50594245,
        50595242,
        50594031,
        50596267,
        50595772,
        50594068,
        50594154,
        50595491
      ],
      "score": 854,
      "time": 1795208592,
      "title": "Pill to treat pancreatic cancer hailed as 'biggest breakthrough in decades'",
      "type": "story",
      "url": "https://www.theguardian.com/society/2026/nov/20/pill-pancreatic-cancer-breakthrough-daraxonrasib"
    },
    {
      "by": "g-b-r",
      "descendants": 802,
      "id": 50589618,
      "kids": [
        50590943,
        50591494,
        50590575,
        50590700,
        50590388,
        50596829,
        50590679,
        50590552,
        50593566,
        50590558,
        50590003,
        50594698,
        50591296,
        50594680,
        50590245,
        50596512,
        50591841,
        50590699,
        50591834,
        50590031,
        50593762,
        50594105,
        50590569,
        50592679,
        50592516,
        50590502,
        50590905,
        50591004,
        50594577,
        50593066,
        50590452,
        50590854,
        50590653,
        50590445,
        50590948,
        50591279,
        50595921,
        50591516,
        50593265,
        50590474,
        50595397,
        50594428,
        50590559,
        50592017,
        50591927,
        50590385,
        50592310,
        50591560,
        50590832,
        50590769,
        50590048,
        50591331,
        50590754,
        50590336,
        50591302,
        50594247,
        50590612,
        50591375,
        50595104,
        50590322,
        50590277,
        50590098,
        50592145,
        50589619
      ],
      "score": 939,
      "time": 1795271805,
      "title": "Lean verification of the Riemann Hypothesis",
      "type": "story",
      "url": "https://leanprover-community.github.io/blog/posts/riemann-hypothesis/"
    },
    {
      "by": "subdomain",
      "descendants": 52,
      "id": 50594911,
      "kids": [
        50596216,
        50595485,
        50596726,
        50595352,
        50595499,
        50596099,
        50595734,
        50595803,
        50595607,
        50595507,
        50596018,
        50595617,
        50595887,
        50595571,
        50596616,
        50596497,
        50596650,
        50596177,
        50595516,
        50596627,
        50595562,
        50595900,
        50595600,
        50595952,
        50595745,
        50595855,
        50595312
      ],
      "score": 131,
      "time": 1795306079,
      "title": "Sandwich Simulator",
      "type": "story",
      "url": "https://stulle.app/"
    },
    {
      "by": "k__",
      "descendants": 106,
      "id": 50591853,
      "kids": [
        50593478,
        50592561,
        50596389,
        50592987,
        50592726,
        50594799,
        50592135,
        50593754,
        50592509,
        50592574,
        50592929,
        50592296,
        50593119,
        50593310
      ],
      "score": 423,
      "time": 1795284139,
      "title": "Inkling-2-Mini in 5.4 GB Memory",
      "type": "story",
      "url": "https://github.com/ShinMegamiBoson/lookatmyquant"
    },
    {
      "by": "sdko",
      "descendants": 31,
      "id": 50595554,
      "kids": [
        50596004,
        50595608,
        50596189,
        50596135,
        50595781,
        50595848,
        50596047,
        50596480,
        50595760,
        50596126,
        50595704,
        50596179,
        50596467,
        50596038,
        50595766
      ],
      "score": 85,
      "time": 1795313654,
      "title": "Data Processing Incidents on Inference Providers",
      "type": "story",
      "url": "https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/"
    },
    {
      "by": "beginning_end",
      "descendants": 377,
      "id": 50588982,
      "kids": [
        50596145,
        50591155,
        50592101,
        50589677,
        50590342,
        50589505,
        50589231,
        50594790,
        50590626,
        50589409,
        50590167,
        50591869,
        50589873,
        50593961,
        50589863,
        50591824,
        50592029,
        50595210,
        50593493,
        50591879,
        50592389,
        50589340,
        50591074,
        50595823,
        50591441,
        50589286,
        50589805,
        50590220,
        50589277,
        50590478,
        50589696,
        50590347,
        50591958,
        50595696,
        50589529,
        50590258,
        50589404,
        50590399,
        50589266,
        50592568,
        50590384,
        50590213,
        50589669,
        50589364,
        50591157,
        50589603,
        50590222,
        50589536,
        50589436,
        50591420,
        50591739,
        50589777,
        50589765
      ],
      "score": 581,
      "time": 1795267394,
      "title": "Detonating a pile of lead azide",
      "type": "story",
      "url": "https://www.science.org/content/blog-post/detonating-huge-pile-lead-azide-really"
    },
    {
      "by": "jger15",
      "descendants": 70,
      "id": 50583028,
      "kids": [
        50593640,
        50596124,
        50593930,
        50593432,
        50594357,
        50594440,
        50596679,
        50593581,
        50596031,
        50593542,
        50595335,
        50596678,
        50593654,
        50594673,
        50594239,
        50594111,
        50593534,
        50593537,
        50595629,
        50594506,
        50593921,
        50593402,
        50594485,
        50594257
      ],
      "score": 226,
      "time": 1795212665,
      "title": "Getting the mind to steer the body to steer you",
      "type": "story",
      "url": "https://notnottalmud.substack.com/p/getting-the-mind-to-steer-the-body"
    },
    {
      "by": "sebaandrada",
      "descendants": 9,
      "id": 50594132,
      "kids": [
        50594611,
        50594432,
        50595763,
        50595538,
        50595702,
        50594888,
        50594133
      ],
      "score": 97,
      "time": 1795298998,
      "title": "PcapAnalyzer – self-hosted pcap analyzer with 27 problem detectors",
      "type": "story",
      "url": "https://github.com/sebaandrada-cell/PcapAnalyzer"
    },
    {
      "by": "soheilpro",
      "descendants": 264,
      "id": 50587875,
      "kids": [
        50589046,
        50590071,
        50589442,
        50589575,
        50592887,
        50589578,
        50591357,
        50591966,
        50593783,
        50595792,
        50588459,
        50590219,
        50592070,
        50592004,
        50592303,
        50589763,
        50595951,
        50592694,
        50590069,
        50593153,
        50589525,
        50588826,
        50593814,
        50592276,
        50590999,
        50588610,
        50591584,
        50593780,
        50588864,
        50593289,
        50591943,
        50590848,
        50594148,
        50592185,
        50595214,
        50594899,
        50593917,
        50590009,
        50594198,
        50594733,
        50590099,
        50588852,
        50589216,
        50591145,
        50590719,
        50589292,
        50589166,
        50594871,
        50588915,
        50590148,
        50589595,
        50589400,
        50591299,
        50591187,
        50589254,
        50589303
      ],
      "score": 546,
      "time": 1795257392,
      "title": "My monitor was cutting my download speed by 75%",
      "type": "story",
      "url": "https://blog.tymscar.com/posts/studiodisplayethernet/"
    },
    {
      "by": "cisc",
      "descendants": 28,
      "id": 50595725,
      "kids": [
        50596120,
        50596163,
        50596075,
        50596674,
        50596556,
        50596298,
        50596128,
        50596802,
        50596700,
        50596575,
        50596214,
        50596320,
        50596759
      ],
      "score": 20,
      "time": 1795315638,
      "title": "The Most Popular Car Colors in America",
      "type": "story",
      "url": "https://www.iseecars.com/most-popular-car-colors-study"
    },
    {
      "by": "Anon84",
      "descendants": 55,
      "id": 50595537,
      "kids": [
        50596035,
        50596225,
        50596813,
        50596032,
        50595871,
        50596477,
        50596024,
        50596280,
        50596655,
        50596300,
        50596392,
        50596371,
        50595982,
        50596040,
        50596773,
        50596448
      ],
      "score": 25,
      "time": 1795313402,
      "title": "The Mythology of Conscious AI",
      "type": "story",
      "url": "https://www.noemamag.com/the-mythology-of-conscious-ai/"
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
      "title": "My Monitor Was Cutting My Download Speed by 75%",
      "url": "https://blog.tymscar.com/posts/studiodisplayethernet/",
      "score": 85,
      "comments": 7,
      "tags": [
        "networking"
      ],
      "id": "qzerls"
    },
    {
      "title": "TODOs JJ Style",
      "url": "https://bwc9876.dev/blog/jj_todo/",
      "score": 47,
      "comments": 9,
      "tags": [
        "vcs"
      ],
      "id": "qxzs4y"
    },
    {
      "title": "NixOS bring-up on an Alibaba RISC-V board",
      "url": "https://feyor.sh/blog/nixos-bringup-on-an-alibaba-riscv-board/",
      "score": 9,
      "comments": 1,
      "tags": [
        "hardware",
        "nix"
      ],
      "id": "6jloca"
    },
    {
      "title": "Advice for the next 100 Rust GUIs",
      "url": "https://linebender.org/blog/next-100-guis/",
      "score": 11,
      "comments": 2,
      "tags": [
        "rust"
      ],
      "id": "inhlo2"
    },
    {
      "title": "Researcher plants 2m canaries into the AI supply chain. A privacy disaster surfaced",
      "url": "https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/",
      "score": 8,
      "comments": 3,
      "tags": [
        "ai",
        "security"
      ],
      "id": "32rhzb"
    },
    {
      "title": "How I Got Postgres into a Single Binary",
      "url": "https://progrium.xyz/articles/2026/single-binary-postgres",
      "score": 12,
      "comments": 3,
      "tags": [
        "databases"
      ],
      "id": "pvylnk"
    },
    {
      "title": "C++26 is done (again)! — Trip report: November 2026 ISO C++ standards meeting (Búzios, Brazil)",
      "url": "https://herbsutter.com/2026/11/21/c26-is-done-again-trip-report-november-2026-iso-c-standards-meeting-buzios-brazil/",
      "score": 16,
      "comments": 23,
      "tags": [
        "c++"
      ],
      "id": "fjueso"
    },
    {
      "title": "port scanning for mojang",
      "url": "https://sipacid.com/blog/port-scanning-for-mojang/",
      "score": 18,
      "comments": 1,
      "tags": [
        "rant"
      ],
      "id": "et5q0q"
    },
    {
      "title": "Probabilistic data structures in Go, part 2",
      "url": "https://antonz.org/probabilistic-data-structures-2/",
      "score": 26,
      "comments": 1,
      "tags": [
        "go"
      ],
      "id": "hcofqi"
    },
    {
      "title": "Microsoft 365 Outage - Post Incident Report",
      "url": "https://tianyin.github.io/misc/pir_microsoft_365_11-12-2026.pdf",
      "score": 14,
      "comments": 7,
      "tags": [
        "distributed",
        "pdf"
      ],
      "id": "becitz"
    }
  ]
}
```

