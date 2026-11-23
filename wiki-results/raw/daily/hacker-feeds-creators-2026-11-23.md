# Hacker Feeds Outcomes - Creators

Generated on: 2026-11-23 06:35:05 UTC

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
      "reactions": 41,
      "comments": 7,
      "reading_time": 4,
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
      "title": "Zombie Sweep on Google Cloud: A Daily Waste Report on AlloyDB Express, With a Database Bill You Can Predict",
      "description": "Cloud Scheduler, Workflows and Cloud Run sweep a project every day with zombiescan's 20 checks beside Google's idle-resource recommenders, store the findings in AlloyDB Express, and an ADK agent writes a briefing from SQL. The database scales to zero, caps its own storage and has a monthly ceiling you can work out in advance.",
      "url": "https://dev.to/gde/zombie-sweep-on-google-cloud-a-daily-waste-report-on-alloydb-express-with-a-database-bill-you-can-305g",
      "tags": "googlecloud, postgres, finops, serverless",
      "reactions": 29,
      "comments": 5,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "I can't believe the podcast I learned to code with is back!",
      "description": "Hi friends! 👋   Okay, storytime 🎬 Felt the urge to share this here too, since DEV is where it all...",
      "url": "https://dev.to/codenewbie/i-cant-believe-the-podcast-i-learned-to-code-with-is-back-2gi5",
      "tags": "codenewbie, podcast, ai",
      "reactions": 32,
      "comments": 2,
      "reading_time": 1,
      "author": "lolocoding"
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
      "title": "The CodeNewbie Podcast is Back for Season 28!",
      "description": "Hi friends! 👋 The CodeNewbie Podcast is back for season 28, and I’m so excited to be the one hosting...",
      "url": "https://dev.to/codenewbie/the-codenewbie-podcast-is-back-for-season-28-2484",
      "tags": "codenewbie, ai, podcast, vibecoding",
      "reactions": 90,
      "comments": 12,
      "reading_time": 4,
      "author": "lolocoding"
    },
    {
      "title": "Gemma 4 on a Hosted Colab TPU: The QAT Repack, Served in Two Minutes",
      "description": "One notebook loads the Gemma 4 E2B QAT repack onto a Colab v5e-1, serves it behind an OpenAI-compatible endpoint with a chat page, and steps through thinking, sampling, stop sequences, long prompts and a CPU comparison.",
      "url": "https://dev.to/gde/gemma-4-on-a-hosted-colab-tpu-the-qat-repack-served-in-two-minutes-360j",
      "tags": "gemma, tpu, jax, colab",
      "reactions": 23,
      "comments": 0,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "How did you end up in tech, and are you staying?",
      "description": "Last week you showed me where you code. This week I want to know how you ended up there in the first...",
      "url": "https://dev.to/maame-codes/how-did-you-end-up-in-tech-and-are-you-staying-4l9b",
      "tags": "discuss, career, beginners, watercooler",
      "reactions": 162,
      "comments": 77,
      "reading_time": 3,
      "author": "maame-codes"
    },
    {
      "title": "Agentic engineering a smart home energy system with Antigravity and Gemini 4",
      "description": "Running rooftop solar, a home battery, two electric vehicles (EVs), and dynamic hourly electricity...",
      "url": "https://dev.to/googleai/agentic-engineering-a-smart-home-energy-system-with-antigravity-and-gemini-4-53md",
      "tags": "ai, antigravity, smarthome, energy",
      "reactions": 30,
      "comments": 6,
      "reading_time": 9,
      "author": "rsamborski"
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
      "forks": 6878,
      "added_stars": 954,
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
      "forks": 1093,
      "added_stars": 2533,
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
          "username": "HEOJUNFO",
          "href": "https://github.com/HEOJUNFO",
          "avatar": "https://avatars.githubusercontent.com/u/100739943"
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
      "forks": 9072,
      "added_stars": 1554,
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
      "forks": 20644,
      "added_stars": 624,
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
      "forks": 45486,
      "added_stars": 5444,
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
      "forks": 6132,
      "added_stars": 1795,
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
      "forks": 8877,
      "added_stars": 408,
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
      "forks": 12453,
      "added_stars": 1994,
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
      "forks": 3027,
      "added_stars": 655,
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
      "forks": 1725,
      "added_stars": 102,
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
      "forks": 9802,
      "added_stars": 86,
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
      "title": "I Made My RAG Safer. It Got Worse Under Load",
      "description": "RAG isn't dead, but unverified RAG should be. Here's what checking every sentence actually cost me on...",
      "url": "https://dev.to/ayush_singh_9b0d83152be5b/i-made-my-rag-safer-it-got-worse-under-load-3olm",
      "tags": "ai, rag, discuss, productivity",
      "reactions": 34,
      "comments": 45,
      "reading_time": 7,
      "author": "ayush_singh_9b0d83152be5b"
    },
    {
      "title": "Dead Keys: I Brought Back the Typing Games. Kiro Did the Heavy Lifting.",
      "description": "The keys you miss become the lesson.   TL;DR: Dead Keys is my entry for the Kiroween 2026 hackathon,...",
      "url": "https://dev.to/earlgreyhot1701d/dead-keys-i-brought-back-the-typing-games-kiro-did-the-heavy-lifting-5gc2",
      "tags": "ai, kiro, gamedev, buildinpublic",
      "reactions": 43,
      "comments": 21,
      "reading_time": 9,
      "author": "earlgreyhot1701d"
    },
    {
      "title": "The $2,400 Auto Repair Estimate Nobody Can Read. I Built the Decoder That Doesn't Guess Prices.",
      "description": "The $2,400 Auto Repair Estimate Nobody Can Read. I Built the Decoder That Doesn't Guess...",
      "url": "https://dev.to/debashish_ghosal/the-2400-auto-repair-estimate-nobody-can-read-i-built-the-decoder-that-doesnt-guess-prices-295p",
      "tags": "discuss, ai, showdev, productivity",
      "reactions": 12,
      "comments": 2,
      "reading_time": 13,
      "author": "debashish_ghosal"
    },
    {
      "title": "AI Audit Evidence, Part 7: A Status Is Not a Receipt",
      "description": "We build a runtime that lets AI agents take real write actions inside enterprise systems: create a...",
      "url": "https://dev.to/rain6fish/ai-audit-evidence-part-7-a-status-is-not-a-receipt-2hl4",
      "tags": "ai, security, agents",
      "reactions": 2,
      "comments": 11,
      "reading_time": 5,
      "author": "rain6fish"
    },
    {
      "title": "3Draft: Five Percent — 30 Minutes to Deadline",
      "description": "This is probably the most improvised demo video I've ever made.  I recorded it roughly 30 minutes...",
      "url": "https://dev.to/pengeszikra/3draft-five-percent-30-minutes-to-deadline-1kfk",
      "tags": "ai, opensource, showdev, tools",
      "reactions": 21,
      "comments": 6,
      "reading_time": 2,
      "author": "pengeszikra"
    },
    {
      "title": "Enterprise Agent Permission Matrix: 12 Controls Before Production API Access",
      "description": "Calling an unauthorized booking “AI autonomy” is reckless. On November 18, 2026, Reuters reported...",
      "url": "https://dev.to/quokkalabs/enterprise-agent-permission-matrix-12-controls-before-production-api-access-34hn",
      "tags": "ai, security, devops, api",
      "reactions": 6,
      "comments": 0,
      "reading_time": 4,
      "author": "dhruvjoshi9"
    },
    {
      "title": "I Said AI Could Build a Cow Detector in 15 Minutes. So I timed it.",
      "description": "A few days ago, I was having a discussion with a friend about computer vision.   We were reminiscing...",
      "url": "https://dev.to/xmkx/i-said-ai-could-build-a-cow-detector-in-15-minutes-so-i-timed-it-3j4e",
      "tags": "ai, computervision, machinelearning, programming",
      "reactions": 1,
      "comments": 1,
      "reading_time": 13,
      "author": "xmkx"
    },
    {
      "title": "I fault-injected 60 live MCP tool failures: LLMs lied, my verifier hit a 38% false-positive wall, and here is what fixed both",
      "description": "(Paper now live on arXiv: arXiv:2611.27095. All code, fault-injection harnesses, SHA-256 osaudit...",
      "url": "https://dev.to/rollsolo/i-fault-injected-60-live-mcp-tool-failures-llms-lied-my-verifier-hit-a-38-false-positive-wall-4iac",
      "tags": "ai, security, python, mcp",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "rollsolo"
    },
    {
      "title": "Beyond Chatbots: Building an Observable Multi-Agent Study Coach with Gemini, Google ADK & Docker",
      "description": "Build. Learn. Evaluate. Observe.  What if an AI study assistant could do more than answer...",
      "url": "https://dev.to/hjangid/beyond-chatbots-building-an-observable-multi-agent-study-coach-with-gemini-google-adk-docker-460e",
      "tags": "googlecloud, gemini, ai, docker",
      "reactions": 1,
      "comments": 1,
      "reading_time": 6,
      "author": "hjangid"
    },
    {
      "title": "When the Model Doesn't Know",
      "description": "Eight copies of the heater model fitted on resampled logs, the spread of their forecasts drawn as a band, and the planner from 107 told the coldest of the eight. Where the band is wide, where it is not, and what it cannot see.",
      "url": "https://dev.to/stepinto/when-the-model-doesnt-know-2a0n",
      "tags": "ai, worldmodels, typescript, machinelearning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 14,
      "author": "stepinto"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "SockThief",
      "descendants": 53,
      "id": 50606192,
      "kids": [
        50607807,
        50606801,
        50607667,
        50606807,
        50606913,
        50607757,
        50608109,
        50608080,
        50607950,
        50606681,
        50606682,
        50606936,
        50606674,
        50607178,
        50607152,
        50606921,
        50606550,
        50607392,
        50607702,
        50607496,
        50607699,
        50607646,
        50606594,
        50606861,
        50606732,
        50606632,
        50606591,
        50607301,
        50606932,
        50607359,
        50607221,
        50606430,
        50607311,
        50607145,
        50607419,
        50608104,
        50607447,
        50607731
      ],
      "score": 351,
      "time": 1795396431,
      "title": "Free alternative TV network built from the Internet Archive's forgotten videos",
      "type": "story",
      "url": "https://spelunkr.tv"
    },
    {
      "by": "mmastrac",
      "descendants": 59,
      "id": 50607261,
      "kids": [
        50607734,
        50607873,
        50607693,
        50607851,
        50607611,
        50607928,
        50607826,
        50607941,
        50607497,
        50607555,
        50607729,
        50607575,
        50608201,
        50607626
      ],
      "score": 129,
      "time": 1795405764,
      "title": "XNU Linux: Full OS X GUI Userspace on Linux",
      "type": "story",
      "url": "https://github.com/AFK-surf/xnulinux"
    },
    {
      "by": "xiaoyu2006",
      "descendants": 81,
      "id": 50598441,
      "kids": [
        50606852,
        50607192,
        50607154,
        50607461
      ],
      "score": 164,
      "time": 1795345196,
      "title": "Masullo on the Riemann Hypothesis",
      "type": "story",
      "url": "https://johncarlosbaez.wordpress.com/2026/11/22/masullo-on-the-riemann-hypothesis/"
    },
    {
      "by": "Retell15",
      "descendants": 157,
      "id": 50603845,
      "kids": [
        50604818,
        50606063,
        50606773,
        50604786,
        50606757,
        50605549,
        50606795,
        50606510,
        50607121,
        50606487,
        50606480,
        50604879,
        50606653,
        50605813,
        50604455,
        50606116,
        50606851,
        50604696,
        50607214,
        50606588,
        50608178,
        50607983,
        50605283,
        50604606,
        50604572,
        50604479,
        50604638,
        50605614,
        50606482,
        50608188,
        50607793,
        50607059,
        50605519,
        50607314,
        50606226,
        50606365,
        50606416,
        50606086,
        50605947,
        50606563,
        50604729
      ],
      "score": 396,
      "time": 1795381276,
      "title": "A Beginner's Guide to Local AI with Inkling, Qwen, and Unsloth",
      "type": "story",
      "url": "https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth"
    },
    {
      "by": "measurablefunc",
      "descendants": 0,
      "id": 50607627,
      "score": 17,
      "time": 1795409508,
      "title": "A Partial Evaluator for C",
      "type": "story",
      "url": "https://phoenix.labri.fr/software/tempo/"
    },
    {
      "by": "gaws",
      "descendants": 223,
      "id": 50602843,
      "kids": [
        50605476,
        50603498,
        50605313,
        50604869,
        50603592,
        50605673,
        50606848,
        50603957,
        50607047,
        50604584,
        50603500,
        50604367,
        50605791,
        50603567,
        50603855,
        50603473,
        50604528,
        50603759,
        50603634,
        50605515,
        50606341,
        50605134,
        50603773,
        50604041,
        50603534
      ],
      "score": 441,
      "time": 1795374634,
      "title": "The Birds of GTA 6: A Field Guide to Vice City and Leonida's Wildlife",
      "type": "story",
      "url": "https://www.audubon.org/magazine/birds-of-gta-6-field-guide-vice-city-wildlife"
    },
    {
      "by": "graemep",
      "descendants": 38,
      "id": 50547698,
      "kids": [
        50606412,
        50607998,
        50607499,
        50606154,
        50606334,
        50606788,
        50607428,
        50607511,
        50607721,
        50605438
      ],
      "score": 181,
      "time": 1795016609,
      "title": "Cathedral floor emerges in Sudan, revealing one of the biggest medieval churches",
      "type": "story",
      "url": "https://apnews.com/article/sudan-antiquities-nubia-cathedral-1b16f67da881ee5592de4481ee55c527"
    },
    {
      "by": "kakadu",
      "descendants": 5,
      "id": 50569505,
      "kids": [
        50608176,
        50608074,
        50569549,
        50607732
      ],
      "score": 29,
      "time": 1795142448,
      "title": "LittleBit: Ultra Low-Bit Quantization via Latent Factorization (2025)",
      "type": "story",
      "url": "https://arxiv.org/abs/2506.13771"
    },
    {
      "by": "gregsadetsky",
      "descendants": 71,
      "id": 50604988,
      "kids": [
        50605836,
        50605891,
        50605133,
        50605116,
        50605291,
        50607327,
        50605691,
        50606809,
        50605200,
        50606020,
        50607380,
        50606272,
        50606525,
        50605833,
        50605491,
        50607573
      ],
      "score": 156,
      "time": 1795388797,
      "title": "GL.iNet Security Notice 2026-11-20",
      "type": "story",
      "url": "https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20"
    },
    {
      "by": "dutilh",
      "descendants": 85,
      "id": 50603589,
      "kids": [
        50608171,
        50608103,
        50608177,
        50604357,
        50607283,
        50606640,
        50604446,
        50604892,
        50604705,
        50606906,
        50606466,
        50606972,
        50604305,
        50604070,
        50604906,
        50605443,
        50607060,
        50603956,
        50603954,
        50605653,
        50604514,
        50605309,
        50604279,
        50604277,
        50604821,
        50604566,
        50606557,
        50606475,
        50605466,
        50604963,
        50604652,
        50606241,
        50606506,
        50604182,
        50604113,
        50605495,
        50604649,
        50604619,
        50606380,
        50606585,
        50604273
      ],
      "score": 224,
      "time": 1795379603,
      "title": "A miniature San Francisco with live buses, planes and boats",
      "type": "story",
      "url": "https://smallsf.com/"
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
      "by": "SockThief",
      "descendants": 53,
      "id": 50606192,
      "kids": [
        50607807,
        50606801,
        50607667,
        50606807,
        50606913,
        50607757,
        50608109,
        50608080,
        50607950,
        50606681,
        50606682,
        50606936,
        50606674,
        50607178,
        50607152,
        50606921,
        50606550,
        50607392,
        50607702,
        50607496,
        50607699,
        50607646,
        50606594,
        50606861,
        50606732,
        50606632,
        50606591,
        50607301,
        50606932,
        50607359,
        50607221,
        50606430,
        50607311,
        50607145,
        50607419,
        50608104,
        50607447,
        50607731
      ],
      "score": 351,
      "time": 1795396431,
      "title": "Free alternative TV network built from the Internet Archive's forgotten videos",
      "type": "story",
      "url": "https://spelunkr.tv"
    },
    {
      "by": "mmastrac",
      "descendants": 59,
      "id": 50607261,
      "kids": [
        50607734,
        50607873,
        50607693,
        50607851,
        50607611,
        50607928,
        50607826,
        50607941,
        50607497,
        50607555,
        50607729,
        50607575,
        50608201,
        50607626
      ],
      "score": 129,
      "time": 1795405764,
      "title": "XNU Linux: Full OS X GUI Userspace on Linux",
      "type": "story",
      "url": "https://github.com/AFK-surf/xnulinux"
    },
    {
      "by": "xiaoyu2006",
      "descendants": 81,
      "id": 50598441,
      "kids": [
        50606852,
        50607192,
        50607154,
        50607461
      ],
      "score": 164,
      "time": 1795345196,
      "title": "Masullo on the Riemann Hypothesis",
      "type": "story",
      "url": "https://johncarlosbaez.wordpress.com/2026/11/22/masullo-on-the-riemann-hypothesis/"
    },
    {
      "by": "Retell15",
      "descendants": 157,
      "id": 50603845,
      "kids": [
        50604818,
        50606063,
        50606773,
        50604786,
        50606757,
        50605549,
        50606795,
        50606510,
        50607121,
        50606487,
        50606480,
        50604879,
        50606653,
        50605813,
        50604455,
        50606116,
        50606851,
        50604696,
        50607214,
        50606588,
        50608178,
        50607983,
        50605283,
        50604606,
        50604572,
        50604479,
        50604638,
        50605614,
        50606482,
        50608188,
        50607793,
        50607059,
        50605519,
        50607314,
        50606226,
        50606365,
        50606416,
        50606086,
        50605947,
        50606563,
        50604729
      ],
      "score": 396,
      "time": 1795381276,
      "title": "A Beginner's Guide to Local AI with Inkling, Qwen, and Unsloth",
      "type": "story",
      "url": "https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth"
    },
    {
      "by": "measurablefunc",
      "descendants": 0,
      "id": 50607627,
      "score": 17,
      "time": 1795409508,
      "title": "A Partial Evaluator for C",
      "type": "story",
      "url": "https://phoenix.labri.fr/software/tempo/"
    },
    {
      "by": "gaws",
      "descendants": 223,
      "id": 50602843,
      "kids": [
        50605476,
        50603498,
        50605313,
        50604869,
        50603592,
        50605673,
        50606848,
        50603957,
        50607047,
        50604584,
        50603500,
        50604367,
        50605791,
        50603567,
        50603855,
        50603473,
        50604528,
        50603759,
        50603634,
        50605515,
        50606341,
        50605134,
        50603773,
        50604041,
        50603534
      ],
      "score": 441,
      "time": 1795374634,
      "title": "The Birds of GTA 6: A Field Guide to Vice City and Leonida's Wildlife",
      "type": "story",
      "url": "https://www.audubon.org/magazine/birds-of-gta-6-field-guide-vice-city-wildlife"
    },
    {
      "by": "graemep",
      "descendants": 38,
      "id": 50547698,
      "kids": [
        50606412,
        50607998,
        50607499,
        50606154,
        50606334,
        50606788,
        50607428,
        50607511,
        50607721,
        50605438
      ],
      "score": 181,
      "time": 1795016609,
      "title": "Cathedral floor emerges in Sudan, revealing one of the biggest medieval churches",
      "type": "story",
      "url": "https://apnews.com/article/sudan-antiquities-nubia-cathedral-1b16f67da881ee5592de4481ee55c527"
    },
    {
      "by": "kakadu",
      "descendants": 5,
      "id": 50569505,
      "kids": [
        50608176,
        50608074,
        50569549,
        50607732
      ],
      "score": 29,
      "time": 1795142448,
      "title": "LittleBit: Ultra Low-Bit Quantization via Latent Factorization (2025)",
      "type": "story",
      "url": "https://arxiv.org/abs/2506.13771"
    },
    {
      "by": "gregsadetsky",
      "descendants": 71,
      "id": 50604988,
      "kids": [
        50605836,
        50605891,
        50605133,
        50605116,
        50605291,
        50607327,
        50605691,
        50606809,
        50605200,
        50606020,
        50607380,
        50606272,
        50606525,
        50605833,
        50605491,
        50607573
      ],
      "score": 156,
      "time": 1795388797,
      "title": "GL.iNet Security Notice 2026-11-20",
      "type": "story",
      "url": "https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20"
    },
    {
      "by": "dutilh",
      "descendants": 85,
      "id": 50603589,
      "kids": [
        50608171,
        50608103,
        50608177,
        50604357,
        50607283,
        50606640,
        50604446,
        50604892,
        50604705,
        50606906,
        50606466,
        50606972,
        50604305,
        50604070,
        50604906,
        50605443,
        50607060,
        50603956,
        50603954,
        50605653,
        50604514,
        50605309,
        50604279,
        50604277,
        50604821,
        50604566,
        50606557,
        50606475,
        50605466,
        50604963,
        50604652,
        50606241,
        50606506,
        50604182,
        50604113,
        50605495,
        50604649,
        50604619,
        50606380,
        50606585,
        50604273
      ],
      "score": 224,
      "time": 1795379603,
      "title": "A miniature San Francisco with live buses, planes and boats",
      "type": "story",
      "url": "https://smallsf.com/"
    },
    {
      "by": "dshacker",
      "descendants": 69,
      "id": 50603143,
      "kids": [
        50604679,
        50606551,
        50605584,
        50605287,
        50608011,
        50607814,
        50607543,
        50605558,
        50608072,
        50605966,
        50607480,
        50605453,
        50605398,
        50607015,
        50606900,
        50604935,
        50606250,
        50607138,
        50605214,
        50607046,
        50604744,
        50608049,
        50607609,
        50607894,
        50606962,
        50607007,
        50606654,
        50607966,
        50605012,
        50605397,
        50606347,
        50604815,
        50606645,
        50607227,
        50606799,
        50604851,
        50607477,
        50607230,
        50607811,
        50606313,
        50603264
      ],
      "score": 141,
      "time": 1795376490,
      "title": "Assume People Are Not Interested in Your Blog Post",
      "type": "story",
      "url": "https://danielsada.tech/blog/assume-people-are-not-interested-in-your-blog-post/"
    },
    {
      "by": "gscott",
      "descendants": 11,
      "id": 50607498,
      "kids": [
        50608215,
        50607816,
        50608057,
        50608099,
        50607537,
        50608077,
        50608034,
        50608200,
        50607967
      ],
      "score": 66,
      "time": 1795408292,
      "title": "DeFlock Amerca Facebook Group Suspended as a Dangerous Organization",
      "type": "story",
      "url": "https://www.facebook.com/shugvermonte/posts/the-deflock-america-group-with-over-840k-members-has-been-suspended-by-meta-what/10165140280736049/"
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
      "title": "GitHub Actions accepts invalid YAML",
      "url": "https://yossarian.net/til/post/github-actions-accepts-invalid-yaml/",
      "score": 42,
      "comments": 11,
      "tags": [
        "programming"
      ],
      "id": "leqwqu"
    },
    {
      "title": "Gliver completes the Guix desktop",
      "url": "https://dustycloud.org/blog/gliver-completes-the-guix-desktop/",
      "score": 32,
      "comments": 4,
      "tags": [
        "linux",
        "lisp"
      ],
      "id": "wc8fla"
    },
    {
      "title": "Researcher plants 2m canaries into the AI supply chain. A privacy disaster surfaced",
      "url": "https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/",
      "score": 123,
      "comments": 19,
      "tags": [
        "security"
      ],
      "id": "32rhzb"
    },
    {
      "title": "Falsehoods Programmers Believe About ATProto",
      "url": "https://reiver.link/atproto/falsehoods-programmers-believe/",
      "score": 29,
      "comments": 4,
      "tags": [
        "api"
      ],
      "id": "bjoete"
    },
    {
      "title": "Good morning and welcome to my idea of a new web",
      "url": "https://dave.writersweb.org/index.md",
      "score": 5,
      "comments": 5,
      "tags": [
        "web"
      ],
      "id": "l8u1tj"
    },
    {
      "title": "scriptura: a cozy corner for your scripts",
      "url": "https://alanpearce.eu/post/scriptura/",
      "score": 12,
      "comments": 3,
      "tags": [
        "programming"
      ],
      "id": "oeamed"
    },
    {
      "title": "NixOS bring-up on an Alibaba RISC-V board",
      "url": "https://feyor.sh/blog/nixos-bringup-on-an-alibaba-riscv-board/",
      "score": 34,
      "comments": 11,
      "tags": [
        "hardware",
        "nix"
      ],
      "id": "6jloca"
    },
    {
      "title": "Calculate radio link placement and node amount for your city's mesh network",
      "url": "https://meshcoveragecalculator.lalala.ing/",
      "score": 5,
      "comments": 3,
      "tags": [
        "hardware"
      ],
      "id": "e89tey"
    },
    {
      "title": "My Monitor Was Cutting My Download Speed by 75%",
      "url": "https://blog.tymscar.com/posts/studiodisplayethernet/",
      "score": 126,
      "comments": 9,
      "tags": [
        "networking"
      ],
      "id": "qzerls"
    },
    {
      "title": "Testing Terraform with AWS Emulator",
      "url": "https://notes.hatedabamboo.me/terraform-tests-with-aws-emulator/",
      "score": 6,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "g5msf2"
    }
  ]
}
```

