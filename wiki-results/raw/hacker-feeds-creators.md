# Hacker Feeds Outcomes - Creators

Generated on: 2026-11-20 06:26:02 UTC

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
      "title": "The CodeNewbie Podcast is Back for Season 28!",
      "description": "Hi friends! 👋 The CodeNewbie Podcast is back for season 28, and I’m so excited to be the one hosting...",
      "url": "https://dev.to/codenewbie/the-codenewbie-podcast-is-back-for-season-28-2484",
      "tags": "codenewbie, ai, podcast, vibecoding",
      "reactions": 71,
      "comments": 10,
      "reading_time": 4,
      "author": "lolocoding"
    },
    {
      "title": "What team-wide AI adoption actually takes",
      "description": "I've tried nearly every way to make AI practical at work: new models, routers, agent frameworks,...",
      "url": "https://dev.to/peter/what-team-wide-ai-adoption-actually-takes-1gbh",
      "tags": "ai, productivity, discuss",
      "reactions": 28,
      "comments": 2,
      "reading_time": 4,
      "author": "peter"
    },
    {
      "title": "Thinking On or Off? Gemma 4 E4B on an 8 GB RTX 3050",
      "description": "Gemma 4 E4B on a local RTX 3050 with thinking off and on, two QAT 4-bit builds, with and without a drafter, on all 1,319 GSM8K problems and the 30 problems of AIME 2025. E4B scored 0.927 to 0.944 on GSM8K; thinking took 2.24 to 2.47 times as long for at most 16 more problems; the drafter cut the time by 1.38 to 2.39 times and changed no score.",
      "url": "https://dev.to/gde/thinking-on-or-off-gemma-4-e4b-on-an-8-gb-rtx-3050-5d5",
      "tags": "gemma, llm, benchmark, ai",
      "reactions": 14,
      "comments": 3,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "NYC: Escape the IVR at Twilio Assemble (Dec 8, Brooklyn)",
      "description": "If you're building AI agents in New York, this one's worth a weeknight.  Twilio Assemble, Twilio's...",
      "url": "https://dev.to/twilio/nyc-escape-the-ivr-at-twilio-assemble-dec-8-brooklyn-2dmb",
      "tags": "ai, events, nyc, agents",
      "reactions": 8,
      "comments": 0,
      "reading_time": 2,
      "author": "twiliodevs"
    },
    {
      "title": "Tool Names Are Identifiers. Don't Autocorrect Them.",
      "description": "An agent contract requires retrieve_policy. The trace seems to contain retrieve_policy. The evaluator...",
      "url": "https://dev.to/gde/tool-names-are-identifiers-dont-autocorrect-them-33g9",
      "tags": "ai, typescript, debugging, security",
      "reactions": 12,
      "comments": 6,
      "reading_time": 4,
      "author": "raju_dandigam"
    },
    {
      "title": "Publishing Markdown to a LinkedIn Article from an Agent Skill",
      "description": "LinkedIn's article editor saves two heading levels and no inline code, and its page cannot parse HTML. A step by step walk-through of the LinkedIn article destination in publishing-kit, tested by publishing the kit's own walk-through through it.",
      "url": "https://dev.to/gde/publishing-markdown-to-a-linkedin-article-from-an-agent-skill-1hbj",
      "tags": "linkedin, writing, devtools, ai",
      "reactions": 10,
      "comments": 2,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "Major League Hacking and SpaceXSI Come Together to Support the Next Generation of Builders",
      "description": "This initiative  will give thousands of students in the Major League Hacking (MLH) community access...",
      "url": "https://blog.mlh.com/major-league-hacking-and-spacexsi-come-together-to-support-the-next-generation-of-builders-feh",
      "tags": "ai, hackathon, grok, news",
      "reactions": 32,
      "comments": 1,
      "reading_time": 2,
      "author": "mlhacks"
    },
    {
      "title": "5 agent orchestration patterns backed by research",
      "description": "A lot of developers run teams of agents and agent orchestration by vibe, but is it actually...",
      "url": "https://dev.to/googlecloud/5-agent-orchestration-patterns-backed-by-research-2l43",
      "tags": "agents, antigravity, gemini, claude",
      "reactions": 10,
      "comments": 0,
      "reading_time": 5,
      "author": "ykdap"
    },
    {
      "title": "Exploring Decision Models, Part 1: Putting Gemini Decision 1 to the Test",
      "description": "Most AI systems waste time and tokens calling a full LLM for a simple true or false. I tested Google's Gemini Decision 1 across 800 real scenarios to see where single-pass decision models shine and where they fall below a coin flip.",
      "url": "https://dev.to/googleai/exploring-decision-models-part-1-putting-gemini-decision-1-to-the-test-50f0",
      "tags": "ai, googlecloud, gemini, agents",
      "reactions": 22,
      "comments": 1,
      "reading_time": 4,
      "author": "patrickjohnkelly"
    },
    {
      "title": "Adopt Pre-Existing Docker Containers with Zero Downtime: Reverse-Engineering docker-compose.yml in Gubernator v4.0",
      "description": "How Gubernator v4.0 discovers pre-existing Docker containers on production hosts, reverse-engineers clean docker-compose.yml files via docker inspect, and adopts them as managed Stacks with zero downtime.",
      "url": "https://dev.to/gde/adopt-pre-existing-docker-containers-with-zero-downtime-reverse-engineering-docker-composeyml-in-3cic",
      "tags": "devops, docker, opensource, infrastructure",
      "reactions": 13,
      "comments": 2,
      "reading_time": 4,
      "author": "marioezquerro"
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
      "forks": 6805,
      "added_stars": 1168,
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
      "forks": 1046,
      "added_stars": 2960,
      "builtBy": [
        {
          "username": "DeanChensj",
          "href": "https://github.com/DeanChensj",
          "avatar": "https://avatars.githubusercontent.com/u/9414763"
        },
        {
          "username": "mathieuwang",
          "href": "https://github.com/mathieuwang",
          "avatar": "https://avatars.githubusercontent.com/u/14016345"
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
      "forks": 8979,
      "added_stars": 1572,
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
      "forks": 20715,
      "added_stars": 523,
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
      "forks": 45245,
      "added_stars": 5598,
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
      "forks": 6212,
      "added_stars": 1669,
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
      "forks": 8887,
      "added_stars": 1146,
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
      "forks": 12411,
      "added_stars": 2765,
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
      "forks": 3008,
      "added_stars": 613,
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
      "added_stars": 107,
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
      "forks": 9799,
      "added_stars": 115,
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
      "reactions": 169,
      "comments": 145,
      "reading_time": 6,
      "author": "sylwia-lask"
    },
    {
      "title": "The CodeNewbie Podcast is Back for Season 28!",
      "description": "Hi friends! 👋 The CodeNewbie Podcast is back for season 28, and I’m so excited to be the one hosting...",
      "url": "https://dev.to/codenewbie/the-codenewbie-podcast-is-back-for-season-28-2484",
      "tags": "codenewbie, ai, podcast, vibecoding",
      "reactions": 71,
      "comments": 10,
      "reading_time": 4,
      "author": "lolocoding"
    },
    {
      "title": "What team-wide AI adoption actually takes",
      "description": "I've tried nearly every way to make AI practical at work: new models, routers, agent frameworks,...",
      "url": "https://dev.to/peter/what-team-wide-ai-adoption-actually-takes-1gbh",
      "tags": "ai, productivity, discuss",
      "reactions": 29,
      "comments": 2,
      "reading_time": 4,
      "author": "peter"
    },
    {
      "title": "NYC: Escape the IVR at Twilio Assemble (Dec 8, Brooklyn)",
      "description": "If you're building AI agents in New York, this one's worth a weeknight.  Twilio Assemble, Twilio's...",
      "url": "https://dev.to/twilio/nyc-escape-the-ivr-at-twilio-assemble-dec-8-brooklyn-2dmb",
      "tags": "ai, events, nyc, agents",
      "reactions": 8,
      "comments": 0,
      "reading_time": 2,
      "author": "twiliodevs"
    },
    {
      "title": "Spec-Driven Development: The New Waterfall, and It's a Good Thing",
      "description": "It's been almost a year now since I stepped into the world of agentic coding and Spec-Driven...",
      "url": "https://dev.to/zyxist/spec-driven-development-the-new-waterfall-and-its-a-good-thing-4fm5",
      "tags": "ai, architecture, softwaredevelopment",
      "reactions": 7,
      "comments": 3,
      "reading_time": 5,
      "author": "zyxist"
    },
    {
      "title": "Publishing Markdown to a LinkedIn Article from an Agent Skill",
      "description": "LinkedIn's article editor saves two heading levels and no inline code, and its page cannot parse HTML. A step by step walk-through of the LinkedIn article destination in publishing-kit, tested by publishing the kit's own walk-through through it.",
      "url": "https://dev.to/gde/publishing-markdown-to-a-linkedin-article-from-an-agent-skill-1hbj",
      "tags": "linkedin, writing, devtools, ai",
      "reactions": 15,
      "comments": 2,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "After the Thirty-Six Stratagems: Three Questions",
      "description": "The Laptop Behind the Bar   There were no customers left in the café.  The Man sat behind...",
      "url": "https://dev.to/xulingfeng/after-the-thirty-six-stratagems-three-questions-gb1",
      "tags": "discuss, ai, career, programming",
      "reactions": 47,
      "comments": 17,
      "reading_time": 4,
      "author": "xulingfeng"
    },
    {
      "title": "Major League Hacking and SpaceXSI Come Together to Support the Next Generation of Builders",
      "description": "This initiative  will give thousands of students in the Major League Hacking (MLH) community access...",
      "url": "https://blog.mlh.com/major-league-hacking-and-spacexsi-come-together-to-support-the-next-generation-of-builders-feh",
      "tags": "ai, hackathon, grok, news",
      "reactions": 32,
      "comments": 1,
      "reading_time": 2,
      "author": "mlhacks"
    },
    {
      "title": "Stop Paying LLM Prices for an if Statement: A Field Guide to Decision Models in Late 2026",
      "description": "I keep coming back to one small question: why do we ask a model to write a paragraph when all our...",
      "url": "https://dev.to/amananandrai/stop-paying-llm-prices-for-an-if-statement-a-field-guide-to-decision-models-in-late-2026-4d24",
      "tags": "ai, llm, agents, machinelearning",
      "reactions": 15,
      "comments": 11,
      "reading_time": 16,
      "author": "amananandrai"
    },
    {
      "title": "I Built a Ghibli-Style Mughal-Tudor Palace With World Labs Atlas (Chisel). Here's What It Can Do for 3D, Games and Video",
      "description": "Last week World Labs opened Atlas, its world model, to everyone. I wanted to see what it could...",
      "url": "https://dev.to/amananandrai/i-built-a-ghibli-style-mughal-tudor-palace-with-world-labs-atlas-chisel-heres-what-it-can-do-l21",
      "tags": "ai, gamedev, 3d, webdev",
      "reactions": 5,
      "comments": 0,
      "reading_time": 11,
      "author": "amananandrai"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "qtqtqt",
      "descendants": 48,
      "id": 50569985,
      "kids": [
        50570602,
        50570467,
        50570639,
        50570355,
        50570736,
        50570578,
        50570525,
        50570845,
        50570797,
        50570837,
        50570685,
        50570861,
        50570532
      ],
      "score": 67,
      "time": 1795147224,
      "title": "GIMP now has UI tests",
      "type": "story",
      "url": "https://www.gimp.org/news/2026/11/16/gimp-ui-tests/"
    },
    {
      "by": "JacobHenner",
      "descendants": 60,
      "id": 50569226,
      "kids": [
        50569705,
        50569917,
        50570653,
        50570120,
        50569529,
        50569578,
        50569564,
        50569928,
        50569869,
        50569857,
        50569670,
        50569962
      ],
      "score": 114,
      "time": 1795140069,
      "title": "OpenSSL: Buffer overflow in EVP_EncodeBlock() (CVE-2026-121481, CVSS 9.8)",
      "type": "story",
      "url": "https://github.com/openssl/openssl/pull/33652"
    },
    {
      "by": "mraniki",
      "descendants": 10,
      "id": 50570479,
      "kids": [
        50570746,
        50570689,
        50570645,
        50570529,
        50570677,
        50570808,
        50570831,
        50570728,
        50570733
      ],
      "score": 111,
      "time": 1795152062,
      "title": "Google is pushing OEMs against GrapheneOS and bootloader unlocking",
      "type": "story",
      "url": "https://grapheneos.social/@GrapheneOS/117645038299496084"
    },
    {
      "by": "craigkerstiens",
      "descendants": 6,
      "id": 50569516,
      "kids": [
        50570850,
        50570379,
        50570575,
        50570542
      ],
      "score": 50,
      "time": 1795142629,
      "title": "Postgres 19 Repack: Faster, Built-In Table Bloat Cleanup",
      "type": "story",
      "url": "https://www.snowflake.com/en/blog/engineering/postgres-19-repack-table-bloat/"
    },
    {
      "by": "emot",
      "descendants": 24,
      "id": 50568861,
      "kids": [
        50570832,
        50568911,
        50569636,
        50570390,
        50570621,
        50570183,
        50568862
      ],
      "score": 76,
      "time": 1795136772,
      "title": "Vint Cerf on why TCP/IP was never patented",
      "type": "story",
      "url": "https://seremot.com/p/vint-cerf-on-why-tcpip-was-never"
    },
    {
      "by": "cybermango",
      "descendants": 217,
      "id": 50563148,
      "kids": [
        50565922,
        50565562,
        50563740,
        50570738,
        50563604,
        50565702,
        50563474,
        50563841,
        50565763,
        50570655,
        50565708,
        50566805,
        50567768,
        50563600,
        50570192,
        50570865,
        50566071,
        50568062,
        50565784,
        50570131,
        50568610,
        50563756,
        50564370,
        50570289,
        50564752,
        50566894,
        50570307,
        50563480,
        50569413,
        50564666,
        50565397,
        50568621,
        50565572,
        50566852,
        50566840,
        50566937,
        50565759,
        50565441,
        50567298,
        50565979,
        50565437,
        50563542
      ],
      "score": 456,
      "time": 1795109444,
      "title": "Claude solves two open problems in the physics of black holes",
      "type": "story",
      "url": "https://www.anthropic.com/research/claude-black-hole-physics"
    },
    {
      "by": "gyan",
      "descendants": 8,
      "id": 50569998,
      "kids": [
        50569999,
        50570667,
        50570545
      ],
      "score": 30,
      "time": 1795147359,
      "title": "FFmpeg 9.1 'Gauss'",
      "type": "story",
      "url": "https://ffmpeg.org/download.html#release_9.1"
    },
    {
      "by": "efren6",
      "descendants": 0,
      "id": 50521512,
      "score": 9,
      "time": 1794855876,
      "title": "Bit Shifting in Basic",
      "type": "story",
      "url": "https://subethasoftware.com/2020/06/11/bit-shifting-in-basic/"
    },
    {
      "by": "o4c",
      "descendants": 62,
      "id": 50528119,
      "kids": [
        50569326,
        50568146,
        50570480,
        50568397,
        50567996,
        50567828,
        50553323,
        50568597,
        50569628,
        50569550,
        50569391,
        50568047,
        50567769,
        50568429,
        50569685,
        50568931,
        50568837,
        50569176
      ],
      "score": 211,
      "time": 1794896997,
      "title": "How to CAD Almost Anything",
      "type": "story",
      "url": "https://ocw.mit.edu/courses/res-16-002-how-to-cad-almost-anything-january-iap-2024/"
    },
    {
      "by": "harrisonpage",
      "descendants": 343,
      "id": 50519231,
      "kids": [
        50564683,
        50560281,
        50558842,
        50560311,
        50560195,
        50560695,
        50559270,
        50560080,
        50560092,
        50560764,
        50561225,
        50565383,
        50563265,
        50560765,
        50569347,
        50559557,
        50560680,
        50559855,
        50559788,
        50558972,
        50563609,
        50563416,
        50560570,
        50558803,
        50561579,
        50561141,
        50569448,
        50559027,
        50560192,
        50569031,
        50562860,
        50560588,
        50561486,
        50519232,
        50563280,
        50562449,
        50568486,
        50566739,
        50561198,
        50561555,
        50561223,
        50561155,
        50561233,
        50559775,
        50562126,
        50561303,
        50562254,
        50560323,
        50564086,
        50559663,
        50559123,
        50565179,
        50559637,
        50563131,
        50561880,
        50562750,
        50560949,
        50561445,
        50564715,
        50564273,
        50563449,
        50562199,
        50560856,
        50564964,
        50562194,
        50559556,
        50569842,
        50563487,
        50559772,
        50562294,
        50560550,
        50562654,
        50561480,
        50563326,
        50558706,
        50560619,
        50563989,
        50561331,
        50560981,
        50568521,
        50559499,
        50560792,
        50558999,
        50561684,
        50561020,
        50565361,
        50563903,
        50560106,
        50560759,
        50561519,
        50561805,
        50569688,
        50563323,
        50561093
      ],
      "score": 820,
      "time": 1794845616,
      "title": "Garage Door Spam",
      "type": "story",
      "url": "https://blog.harrison.page/garage-door-spam/"
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
      "by": "qtqtqt",
      "descendants": 48,
      "id": 50569985,
      "kids": [
        50570602,
        50570467,
        50570639,
        50570355,
        50570736,
        50570578,
        50570525,
        50570845,
        50570797,
        50570837,
        50570685,
        50570861,
        50570532
      ],
      "score": 67,
      "time": 1795147224,
      "title": "GIMP now has UI tests",
      "type": "story",
      "url": "https://www.gimp.org/news/2026/11/16/gimp-ui-tests/"
    },
    {
      "by": "JacobHenner",
      "descendants": 60,
      "id": 50569226,
      "kids": [
        50569705,
        50569917,
        50570653,
        50570120,
        50569529,
        50569578,
        50569564,
        50569928,
        50569869,
        50569857,
        50569670,
        50569962
      ],
      "score": 114,
      "time": 1795140069,
      "title": "OpenSSL: Buffer overflow in EVP_EncodeBlock() (CVE-2026-121481, CVSS 9.8)",
      "type": "story",
      "url": "https://github.com/openssl/openssl/pull/33652"
    },
    {
      "by": "mraniki",
      "descendants": 10,
      "id": 50570479,
      "kids": [
        50570746,
        50570689,
        50570645,
        50570529,
        50570677,
        50570808,
        50570831,
        50570728,
        50570733
      ],
      "score": 111,
      "time": 1795152062,
      "title": "Google is pushing OEMs against GrapheneOS and bootloader unlocking",
      "type": "story",
      "url": "https://grapheneos.social/@GrapheneOS/117645038299496084"
    },
    {
      "by": "craigkerstiens",
      "descendants": 6,
      "id": 50569516,
      "kids": [
        50570850,
        50570379,
        50570575,
        50570542
      ],
      "score": 50,
      "time": 1795142629,
      "title": "Postgres 19 Repack: Faster, Built-In Table Bloat Cleanup",
      "type": "story",
      "url": "https://www.snowflake.com/en/blog/engineering/postgres-19-repack-table-bloat/"
    },
    {
      "by": "emot",
      "descendants": 24,
      "id": 50568861,
      "kids": [
        50570832,
        50568911,
        50569636,
        50570390,
        50570621,
        50570183,
        50568862
      ],
      "score": 76,
      "time": 1795136772,
      "title": "Vint Cerf on why TCP/IP was never patented",
      "type": "story",
      "url": "https://seremot.com/p/vint-cerf-on-why-tcpip-was-never"
    },
    {
      "by": "cybermango",
      "descendants": 217,
      "id": 50563148,
      "kids": [
        50565922,
        50565562,
        50563740,
        50570738,
        50563604,
        50565702,
        50563474,
        50563841,
        50565763,
        50570655,
        50565708,
        50566805,
        50567768,
        50563600,
        50570192,
        50570865,
        50566071,
        50568062,
        50565784,
        50570131,
        50568610,
        50563756,
        50564370,
        50570289,
        50564752,
        50566894,
        50570307,
        50563480,
        50569413,
        50564666,
        50565397,
        50568621,
        50565572,
        50566852,
        50566840,
        50566937,
        50565759,
        50565441,
        50567298,
        50565979,
        50565437,
        50563542
      ],
      "score": 456,
      "time": 1795109444,
      "title": "Claude solves two open problems in the physics of black holes",
      "type": "story",
      "url": "https://www.anthropic.com/research/claude-black-hole-physics"
    },
    {
      "by": "gyan",
      "descendants": 8,
      "id": 50569998,
      "kids": [
        50569999,
        50570667,
        50570545
      ],
      "score": 30,
      "time": 1795147359,
      "title": "FFmpeg 9.1 'Gauss'",
      "type": "story",
      "url": "https://ffmpeg.org/download.html#release_9.1"
    },
    {
      "by": "efren6",
      "descendants": 0,
      "id": 50521512,
      "score": 9,
      "time": 1794855876,
      "title": "Bit Shifting in Basic",
      "type": "story",
      "url": "https://subethasoftware.com/2020/06/11/bit-shifting-in-basic/"
    },
    {
      "by": "o4c",
      "descendants": 62,
      "id": 50528119,
      "kids": [
        50569326,
        50568146,
        50570480,
        50568397,
        50567996,
        50567828,
        50553323,
        50568597,
        50569628,
        50569550,
        50569391,
        50568047,
        50567769,
        50568429,
        50569685,
        50568931,
        50568837,
        50569176
      ],
      "score": 211,
      "time": 1794896997,
      "title": "How to CAD Almost Anything",
      "type": "story",
      "url": "https://ocw.mit.edu/courses/res-16-002-how-to-cad-almost-anything-january-iap-2024/"
    },
    {
      "by": "harrisonpage",
      "descendants": 343,
      "id": 50519231,
      "kids": [
        50564683,
        50560281,
        50558842,
        50560311,
        50560195,
        50560695,
        50559270,
        50560080,
        50560092,
        50560764,
        50561225,
        50565383,
        50563265,
        50560765,
        50569347,
        50559557,
        50560680,
        50559855,
        50559788,
        50558972,
        50563609,
        50563416,
        50560570,
        50558803,
        50561579,
        50561141,
        50569448,
        50559027,
        50560192,
        50569031,
        50562860,
        50560588,
        50561486,
        50519232,
        50563280,
        50562449,
        50568486,
        50566739,
        50561198,
        50561555,
        50561223,
        50561155,
        50561233,
        50559775,
        50562126,
        50561303,
        50562254,
        50560323,
        50564086,
        50559663,
        50559123,
        50565179,
        50559637,
        50563131,
        50561880,
        50562750,
        50560949,
        50561445,
        50564715,
        50564273,
        50563449,
        50562199,
        50560856,
        50564964,
        50562194,
        50559556,
        50569842,
        50563487,
        50559772,
        50562294,
        50560550,
        50562654,
        50561480,
        50563326,
        50558706,
        50560619,
        50563989,
        50561331,
        50560981,
        50568521,
        50559499,
        50560792,
        50558999,
        50561684,
        50561020,
        50565361,
        50563903,
        50560106,
        50560759,
        50561519,
        50561805,
        50569688,
        50563323,
        50561093
      ],
      "score": 820,
      "time": 1794845616,
      "title": "Garage Door Spam",
      "type": "story",
      "url": "https://blog.harrison.page/garage-door-spam/"
    },
    {
      "by": "renehsz",
      "descendants": 0,
      "id": 50570628,
      "score": 5,
      "time": 1795153561,
      "title": "Jujutsu Primer",
      "type": "story",
      "url": "https://ethanlowman.com/posts/jj-primer/"
    },
    {
      "by": "lexandstuff",
      "descendants": 3,
      "id": 50538977,
      "kids": [
        50570663,
        50570385,
        50569480
      ],
      "score": 51,
      "time": 1794953506,
      "title": "Weight-Space Programming builds neural networks like a 1990s researcher",
      "type": "story",
      "url": "https://notesbylex.com/weight-space-programming-1990s"
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
      "title": "Design for Understandability",
      "url": "https://jschuster.org/blog/2026/11/19/design-for-understandability/",
      "score": 34,
      "comments": 20,
      "tags": [
        "api",
        "plt",
        "practices",
        "slides"
      ],
      "id": "qsrnot"
    },
    {
      "title": "PostgreSQL 19 Released",
      "url": "https://www.postgresql.org/about/news/postgresql-19-released-3449/",
      "score": 64,
      "comments": 3,
      "tags": [
        "databases",
        "release"
      ],
      "id": "pqyuhk"
    },
    {
      "title": "We Need Smart People Who Give a Shit",
      "url": "https://violetpixel.com/blog/2026-11-17-we-need-smart-people-who-give-a-shit/",
      "score": 149,
      "comments": 55,
      "tags": [
        "culture"
      ],
      "id": "rzuasm"
    },
    {
      "title": "Mutex poisoning is not for everyone",
      "url": "https://bertptrs.nl/2026/11/16/mutex-poisoning-is-not-for-everyone.html",
      "score": 30,
      "comments": 8,
      "tags": [
        "rust"
      ],
      "id": "uzn2t6"
    },
    {
      "title": "15 million web servers on one VM - smoltcp, DPDK, AF_XDP",
      "url": "https://kapteko.com/15-million-webservers/",
      "score": 40,
      "comments": 1,
      "tags": [
        "networking",
        "rust"
      ],
      "id": "elmy67"
    },
    {
      "title": "Hiring a Systems Programmer for Boxem",
      "url": "",
      "score": 15,
      "comments": 7,
      "tags": [
        "c",
        "job"
      ],
      "id": "pnfs5p"
    },
    {
      "title": "Ruby2Shell (GHSA-34m4-m9fh-gqp5)",
      "url": "https://verialabs.com/ruby2shell/",
      "score": 25,
      "comments": 6,
      "tags": [
        "ruby",
        "security"
      ],
      "id": "usdf7t"
    },
    {
      "title": "Garage Door Spam",
      "url": "https://blog.harrison.page/garage-door-spam/",
      "score": 3,
      "comments": 2,
      "tags": [
        "hardware"
      ],
      "id": "tr5ghf"
    },
    {
      "title": "Codeberg's domain suddenly disappeared from their account, site is unreachable",
      "url": "https://social.anoxinon.de/@Codeberg/117636454915265360",
      "score": 223,
      "comments": 73,
      "tags": [
        "vcs"
      ],
      "id": "spmgsd"
    },
    {
      "title": "Distributed, high-performance blob storage on SQLite",
      "url": "https://zerodha.tech/blog/high-performance-distributed-blob-storage/",
      "score": 27,
      "comments": 3,
      "tags": [
        "distributed",
        "rust"
      ],
      "id": "bk5nfs"
    }
  ]
}
```

