# Hacker Feeds Outcomes - Creators

Generated on: 2026-11-27 06:27:38 UTC

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
      "title": "The mental toll of working in tech",
      "description": "Hi folks! 👋 It's been a while since I last wrote here. As some of you may remember, some time ago I...",
      "url": "https://dev.to/klaudiagrz/the-mental-toll-of-working-in-tech-2m6k",
      "tags": "mentalhealth, discuss, career",
      "reactions": 89,
      "comments": 26,
      "reading_time": 7,
      "author": "klaudiagrz"
    },
    {
      "title": "Home Office Nightmare",
      "description": "I Constantly Try to Survive Reality  Maybe that's why I built an entire universe, including a...",
      "url": "https://dev.to/thethirdcup/home-office-nightmare-2ja0",
      "tags": "discuss, mentalhealth, productivity",
      "reactions": 55,
      "comments": 11,
      "reading_time": 2,
      "author": "pengeszikra"
    },
    {
      "title": "Prompt Pad: The Brain and the Workshop Behind Your AI Agent",
      "description": "When you build an AI agent, you're actually using two separate things, not one.  In this episode of...",
      "url": "https://blog.mlh.com/prompt-pad-the-brain-and-the-workshop-behind-your-ai-agent-359h",
      "tags": "ai, agents, llm, beginners",
      "reactions": 8,
      "comments": 0,
      "reading_time": 1,
      "author": "mlhacks"
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
      "title": "Welcome Thread - v403",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v403-1o39",
      "tags": "welcome",
      "reactions": 33,
      "comments": 163,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "Proofreader vs. Rewriter vs. Prompt API: Test the Task, Not the Demo",
      "description": "“Make this message better” is not one task. It can mean correcting a spelling mistake, changing the...",
      "url": "https://dev.to/gde/proofreader-vs-rewriter-vs-prompt-api-test-the-task-not-the-demo-pi9",
      "tags": "webdev, ai, typescript, testing",
      "reactions": 43,
      "comments": 45,
      "reading_time": 4,
      "author": "raju_dandigam"
    },
    {
      "title": "Tell us your story, and we might read it on the CodeNewbie Podcast 🎙️",
      "description": "Hi! I’m Lauren 👩🏼‍💻, the new host of the CodeNewbie Podcast, and I’d love to hear your...",
      "url": "https://dev.to/codenewbie/tell-us-your-story-and-we-might-read-it-on-the-codenewbie-podcast-2840",
      "tags": "codenewbie, ai, beginners, codenewbiestory",
      "reactions": 59,
      "comments": 44,
      "reading_time": 4,
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
      "title": "E2B, E4B or 12B? On an 8 GB RTX 3050, Serve Gemma 4 E4B",
      "description": "The 12B is the largest Gemma 4 that fits on an 8 GB RTX 3050 and the most accurate with thinking off. E4B is the one to serve: with thinking on and Google's sampling settings it matched the 12B on the first 157 GSM8K problems, 153 each, in 0.55 hours against 0.96, with the full context on the card. At temperature 0 the 12B with thinking on loops.",
      "url": "https://dev.to/gde/e2b-e4b-or-12b-on-an-8-gb-rtx-3050-serve-gemma-4-e4b-1eji",
      "tags": "gemma, llm, benchmark, ai",
      "reactions": 27,
      "comments": 5,
      "reading_time": 14,
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
      "author": "Anil-matcha",
      "repo": "Open-Generative-AI",
      "avatar": "https://github.com/Anil-matcha.png",
      "repo_link": "https://github.com/Anil-matcha/Open-Generative-AI",
      "desc": "Uncensored AI Image & Video Generator — Free AI image & video generation studio with 800+ models (Flux, Midjourney, Kling, Sora, Veo). No content filters. Self-hosted, MIT licensed.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7002,
      "added_stars": 1060,
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
      "desc": "江山时序 · 中国历史交互地图时间轴 (403 BCE – Present) | Interactive Historical Atlas of China across 18 dynasties, 200+ territory snapshots, ancient-to-modern place genealogy & classical poetry routes",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1176,
      "added_stars": 950,
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
      "forks": 9185,
      "added_stars": 1373,
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
      "forks": 20635,
      "added_stars": 231,
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
      "forks": 45750,
      "added_stars": 4301,
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
      "forks": 6079,
      "added_stars": 518,
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
      "forks": 8897,
      "added_stars": 319,
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
      "forks": 12553,
      "added_stars": 1530,
      "builtBy": [
        {
          "username": "addyosmani",
          "href": "https://github.com/addyosmani",
          "avatar": "https://avatars.githubusercontent.com/u/110953"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ayobamiseun",
          "href": "https://github.com/ayobamiseun",
          "avatar": "https://avatars.githubusercontent.com/u/66267222"
        },
        {
          "username": "nucliweb",
          "href": "https://github.com/nucliweb",
          "avatar": "https://avatars.githubusercontent.com/u/1307927"
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
      "forks": 3058,
      "added_stars": 461,
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
      "forks": 1730,
      "added_stars": 119,
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
      "forks": 9807,
      "added_stars": 61,
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
      "title": "Nostalgia and the AI Productivity Paradox",
      "description": "There is something strangely nostalgic about November 2026.  GTA VI has finally arrived after 13...",
      "url": "https://dev.to/gramli/nostalgia-and-the-ai-productivity-paradox-4f33",
      "tags": "ai, productivity, watercooler, discuss",
      "reactions": 64,
      "comments": 43,
      "reading_time": 3,
      "author": "gramli"
    },
    {
      "title": "I Built AI Test Automation. Today, I Went Back to Manual Testing.",
      "description": "Today, I manually tested a project.  It doesn't sound like anything special.  After all, I've been...",
      "url": "https://dev.to/thethirdcup/i-built-ai-test-automation-today-i-went-back-to-manual-testing-mlh",
      "tags": "discuss, testing, ai, watercooler",
      "reactions": 87,
      "comments": 82,
      "reading_time": 3,
      "author": "xulingfeng"
    },
    {
      "title": "Stop AI Agents Acting on Bluffs? A Strands Decider 2B Tool Gate Test",
      "description": "I tested Strands Decider 2B as an AI agent tool gate on 16 refund cases against Nova Pro as a judge: accuracy, thresholds, injection, latency, cost.",
      "url": "https://dev.to/aws-builders/stop-ai-agents-acting-on-bluffs-a-strands-decider-2b-tool-gate-test-5004",
      "tags": "ai, aws, agents, discuss",
      "reactions": 28,
      "comments": 28,
      "reading_time": 11,
      "author": "sarvar_04"
    },
    {
      "title": "Before You Trust the Canary, Plant a Bug",
      "description": "Part 2 of The Art of the Canary in the Age of AI. Still no new agent results. This one is...",
      "url": "https://dev.to/copyleftdev/before-you-trust-the-canary-plant-a-bug-1k5a",
      "tags": "ai, testing, rust, programming",
      "reactions": 12,
      "comments": 7,
      "reading_time": 10,
      "author": "copyleftdev"
    },
    {
      "title": "My Simulation Exaggerated the Cost of My Own Safety Feature",
      "description": "In my last post, I wrote that checking every sentence before showing it made my RAG system worse...",
      "url": "https://dev.to/ayush_singh321/my-simulation-exaggerated-the-cost-of-my-own-safety-feature-565p",
      "tags": "ai, discuss, rag, productivity",
      "reactions": 24,
      "comments": 13,
      "reading_time": 6,
      "author": "ayush_singh321"
    },
    {
      "title": "On reviewing AI-generated code",
      "description": "I see a lot of posts from developers who insist on reviewing every single line of code that AI agents...",
      "url": "https://dev.to/nfrankel/on-reviewing-ai-generated-code-3olj",
      "tags": "ai, codereview, opinion, codingassistants",
      "reactions": 21,
      "comments": 17,
      "reading_time": 5,
      "author": "nfrankel"
    },
    {
      "title": "Benchmarking Gemma 4 E2B with Long Contexts",
      "description": "Gemma 4 E2B loses most of a long document: as served on an 8 GB RTX 3050 it found 52 of 80 hidden facts at 16k tokens and 14 at 32k. Thinking on helps and still leaves it short. Keep its documents under 16k tokens, or use the 12B.",
      "url": "https://dev.to/gde/benchmarking-gemma-4-e2b-with-long-contexts-1jb9",
      "tags": "gemma, llm, benchmark, ai",
      "reactions": 10,
      "comments": 0,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "Claude Code `--resume` and Session Persistence in 2026: Picking Up Long Refactors Where You Left Off",
      "description": "Learn when to resume Claude Code sessions versus starting fresh, how session state differs from conclusions, and the cost implications of long-running contexts in production workflows.",
      "url": "https://dev.to/jsmanifest/claude-code-resume-and-session-persistence-in-2026-picking-up-long-refactors-where-you-left-off-5fei",
      "tags": "typescript, ai, javascript, webdev",
      "reactions": 0,
      "comments": 4,
      "reading_time": 12,
      "author": "jsmanifest"
    },
    {
      "title": "Your Coding Agent Shouldn't Be Able to Close Its Own Ticket, Part 2: What the Comments Changed",
      "description": "Part one split the agent's claim from the decision. Readers found the gaps it left. Here's what they pointed out, what got built because of it, and the second agent that now reads every claim.",
      "url": "https://dev.to/steve-o/your-coding-agent-shouldnt-be-able-to-close-its-own-ticket-part-2-what-the-comments-changed-466d",
      "tags": "ai, discuss, programming, productivity",
      "reactions": 3,
      "comments": 13,
      "reading_time": 9,
      "author": "steve-o"
    },
    {
      "title": "From a feed full of Fable 5.2 demos to a 20-episode Indian epic: how I built \"The Eighteen Days\"",
      "description": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥  You have a right to...",
      "url": "https://dev.to/amananandrai/from-a-feed-full-of-fable-52-demos-to-a-20-episode-indian-epic-how-i-built-the-eighteen-days-14mm",
      "tags": "python, ai, animation, showdev",
      "reactions": 11,
      "comments": 6,
      "reading_time": 22,
      "author": "amananandrai"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "jlelse",
      "descendants": 260,
      "id": 50660180,
      "kids": [
        50660901,
        50660442,
        50661522,
        50663429,
        50663424,
        50661092,
        50662965,
        50663391,
        50660400,
        50663267,
        50661896,
        50661274,
        50663262,
        50663202,
        50660888,
        50660745,
        50662215,
        50662303,
        50661102,
        50660363,
        50660456,
        50660587,
        50661055,
        50661425,
        50662505,
        50662055,
        50660360,
        50661475,
        50661025,
        50662124,
        50660895,
        50662305,
        50661109,
        50662458,
        50662564,
        50662360,
        50660650,
        50662669,
        50661935,
        50662269,
        50662189,
        50661275,
        50661139,
        50661729,
        50660709,
        50662475,
        50661493,
        50660889,
        50661662,
        50661924,
        50660478,
        50661492,
        50660549,
        50661300,
        50660569,
        50662552,
        50660392,
        50661577,
        50660726,
        50660457,
        50663210,
        50661875,
        50661405,
        50660381,
        50661172,
        50661149,
        50663014,
        50660607,
        50660612,
        50660887,
        50660498,
        50662745,
        50662073,
        50661219,
        50660947,
        50660317,
        50661990,
        50663347,
        50663442,
        50663085,
        50662288,
        50661101,
        50661309,
        50661052,
        50661080,
        50661249,
        50661295,
        50660371,
        50660383,
        50661395
      ],
      "score": 523,
      "time": 1795729665,
      "title": "AI made self-hosting fun again",
      "type": "story",
      "url": "https://janlukas.blog/posts/ai-self-hosting"
    },
    {
      "by": "todsacerdoti",
      "descendants": 5,
      "id": 50663089,
      "kids": [
        50663382,
        50663473,
        50663245
      ],
      "score": 19,
      "time": 1795756926,
      "title": "The need for a formally verifiable mainstream programming language",
      "type": "story",
      "url": "https://blainehansen.me/post/mainstream-verifiable-language/"
    },
    {
      "by": "zdw",
      "descendants": 158,
      "id": 50661646,
      "kids": [
        50662602,
        50662119,
        50663100,
        50663384,
        50662139,
        50662804,
        50662114,
        50662906,
        50662495,
        50662615,
        50663076,
        50662113,
        50662897,
        50662608,
        50663259,
        50663048,
        50662816,
        50662272,
        50662738,
        50662584,
        50662325,
        50662435,
        50662292,
        50662448,
        50663281,
        50663450,
        50663095,
        50662482,
        50662131,
        50663098,
        50663018,
        50662823,
        50662510,
        50662329,
        50662459,
        50663204,
        50662508,
        50662245,
        50662541,
        50662330,
        50663194,
        50662638,
        50662421,
        50662385,
        50662191,
        50662414,
        50662336
      ],
      "score": 244,
      "time": 1795742029,
      "title": "Hard Drive pricing has gotten bad",
      "type": "story",
      "url": "https://blog.ktz.me/black-friday-hard-drive-prices-are-messed-up/"
    },
    {
      "by": "iantongeorge",
      "descendants": 406,
      "id": 50657530,
      "kids": [
        50657695,
        50658916,
        50658552,
        50657728,
        50662907,
        50663216,
        50663170,
        50658052,
        50658121,
        50657730,
        50663082,
        50657895,
        50661373,
        50658870,
        50657676,
        50662228,
        50658077,
        50659622,
        50659994,
        50657930,
        50660953,
        50658925,
        50660851,
        50657943,
        50661308,
        50658261,
        50662089,
        50657785,
        50660483,
        50658176,
        50662521,
        50659248,
        50662236,
        50657752,
        50659304,
        50661191,
        50658650,
        50659888,
        50658430,
        50658070,
        50657914,
        50662130,
        50658764,
        50661250,
        50661524,
        50660610,
        50658265,
        50660201,
        50659053,
        50659393,
        50657775,
        50657531,
        50659047,
        50659068,
        50660129,
        50662047,
        50657913,
        50657821,
        50660015,
        50657745
      ],
      "score": 340,
      "time": 1795714607,
      "title": "YouTube Ad Punisher – Auto-reloads YouTube pages when an ad plays",
      "type": "story",
      "url": "https://github.com/antonpictures/youtube-punisher"
    },
    {
      "by": "dverlaeckt80",
      "descendants": 76,
      "id": 50659841,
      "kids": [
        50660935,
        50660678,
        50660948,
        50660831,
        50660795,
        50660899,
        50661296,
        50661913,
        50660437,
        50660845,
        50661818,
        50661012,
        50660147,
        50660376,
        50660588,
        50661271,
        50660937,
        50660941,
        50660166,
        50660347,
        50660994,
        50660409,
        50660192,
        50660226,
        50660123,
        50660020
      ],
      "score": 329,
      "time": 1795727285,
      "title": "Kamil Khan Mumtaz: Pakistani architect, admired at home, almost invisible abroad",
      "type": "story",
      "url": "https://worksinprogress.co/issue/the-greatest-architect-youve-never-heard-of-is-in-pakistan/"
    },
    {
      "by": "julianlam",
      "descendants": 79,
      "id": 50657265,
      "kids": [
        50657791,
        50657591,
        50659700,
        50658571,
        50657417,
        50657426,
        50658431,
        50658990,
        50661591,
        50657526,
        50662785,
        50661741,
        50658949,
        50657386,
        50659978,
        50657758,
        50659581,
        50658142,
        50658667,
        50659647,
        50660796,
        50661781,
        50657794
      ],
      "score": 329,
      "time": 1795713089,
      "title": "AMD-specific fork of llama.cpp",
      "type": "story",
      "url": "https://devnull.land/amd-specific-llama-cpp"
    },
    {
      "by": "Bender",
      "descendants": 114,
      "id": 50657645,
      "kids": [
        50659653,
        50658367,
        50660319,
        50658789,
        50657797,
        50658045,
        50663287,
        50658167,
        50658541,
        50658276,
        50659836,
        50663044,
        50659055,
        50657967,
        50658920,
        50658618
      ],
      "score": 247,
      "time": 1795715265,
      "title": "CTO of 'RansomwareHelp' indicted for wire fraud",
      "type": "story",
      "url": "https://krebsonsecurity.com/2026/11/cto-of-ransomwarehelp-indicted-for-wire-fraud/"
    },
    {
      "by": "liamg",
      "descendants": 107,
      "id": 50659640,
      "kids": [
        50662624,
        50663467,
        50662397,
        50663428,
        50661994,
        50663266,
        50661334,
        50662467,
        50661096,
        50661882,
        50663415,
        50661888,
        50661563,
        50660289,
        50662741,
        50660943,
        50661968,
        50662158,
        50661318,
        50660857,
        50660245,
        50662855,
        50661058,
        50662300,
        50662157,
        50662502,
        50660695,
        50661981,
        50662075,
        50662949,
        50662895,
        50662019,
        50660978,
        50660266
      ],
      "score": 240,
      "time": 1795726189,
      "title": "Company Culture = Slack Emoji ÷ √Headcount",
      "type": "story",
      "url": "https://lia.mg/posts/measuring-company-culture-with-slack-emoji/"
    },
    {
      "by": "saikatsg",
      "descendants": 248,
      "id": 50653667,
      "kids": [
        50656649,
        50654149,
        50654057,
        50655506,
        50662540,
        50653821,
        50653958,
        50655516,
        50663403,
        50654397,
        50662027,
        50655903,
        50653920,
        50654582,
        50659468,
        50657237,
        50654282,
        50655617,
        50654195,
        50654191,
        50655069,
        50654482,
        50662815,
        50654294,
        50655173,
        50653912,
        50653919,
        50654649,
        50655624,
        50653805,
        50656721,
        50657950,
        50653725,
        50654979,
        50659472,
        50654874,
        50658307,
        50657026,
        50655381,
        50654693,
        50655168,
        50656652,
        50656339,
        50659378,
        50653940,
        50656978,
        50653933,
        50662087,
        50656236,
        50655075,
        50658061,
        50655290,
        50660359,
        50655058,
        50660070,
        50653848,
        50657623,
        50654733,
        50657116,
        50656814,
        50656423,
        50656235,
        50656044,
        50654214,
        50658368,
        50654622,
        50654945,
        50657805,
        50653947,
        50658301,
        50654758,
        50654358,
        50657278,
        50655096,
        50658312,
        50654049
      ],
      "score": 498,
      "time": 1795687861,
      "title": "Intel One Mono font (2023)",
      "type": "story",
      "url": "https://github.com/intel/intel-one-mono"
    },
    {
      "by": "chrhenning",
      "descendants": 1,
      "id": 50658498,
      "kids": [
        50663012,
        50662373,
        50661918
      ],
      "score": 51,
      "time": 1795719890,
      "title": "An introduction to uncertainty in machine learning",
      "type": "story",
      "url": "https://chrhenning.com/blog/2026/introduction-to-uncertainty/"
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
      "by": "jlelse",
      "descendants": 260,
      "id": 50660180,
      "kids": [
        50660901,
        50660442,
        50661522,
        50663429,
        50663424,
        50661092,
        50662965,
        50663391,
        50660400,
        50663267,
        50661896,
        50661274,
        50663262,
        50663202,
        50660888,
        50660745,
        50662215,
        50662303,
        50661102,
        50660363,
        50660456,
        50660587,
        50661055,
        50661425,
        50662505,
        50662055,
        50660360,
        50661475,
        50661025,
        50662124,
        50660895,
        50662305,
        50661109,
        50662458,
        50662564,
        50662360,
        50660650,
        50662669,
        50661935,
        50662269,
        50662189,
        50661275,
        50661139,
        50661729,
        50660709,
        50662475,
        50661493,
        50660889,
        50661662,
        50661924,
        50660478,
        50661492,
        50660549,
        50661300,
        50660569,
        50662552,
        50660392,
        50661577,
        50660726,
        50660457,
        50663210,
        50661875,
        50661405,
        50660381,
        50661172,
        50661149,
        50663014,
        50660607,
        50660612,
        50660887,
        50660498,
        50662745,
        50662073,
        50661219,
        50660947,
        50660317,
        50661990,
        50663347,
        50663442,
        50663085,
        50662288,
        50661101,
        50661309,
        50661052,
        50661080,
        50661249,
        50661295,
        50660371,
        50660383,
        50661395
      ],
      "score": 523,
      "time": 1795729665,
      "title": "AI made self-hosting fun again",
      "type": "story",
      "url": "https://janlukas.blog/posts/ai-self-hosting"
    },
    {
      "by": "todsacerdoti",
      "descendants": 5,
      "id": 50663089,
      "kids": [
        50663382,
        50663473,
        50663245
      ],
      "score": 19,
      "time": 1795756926,
      "title": "The need for a formally verifiable mainstream programming language",
      "type": "story",
      "url": "https://blainehansen.me/post/mainstream-verifiable-language/"
    },
    {
      "by": "zdw",
      "descendants": 158,
      "id": 50661646,
      "kids": [
        50662602,
        50662119,
        50663100,
        50663384,
        50662139,
        50662804,
        50662114,
        50662906,
        50662495,
        50662615,
        50663076,
        50662113,
        50662897,
        50662608,
        50663259,
        50663048,
        50662816,
        50662272,
        50662738,
        50662584,
        50662325,
        50662435,
        50662292,
        50662448,
        50663281,
        50663450,
        50663095,
        50662482,
        50662131,
        50663098,
        50663018,
        50662823,
        50662510,
        50662329,
        50662459,
        50663204,
        50662508,
        50662245,
        50662541,
        50662330,
        50663194,
        50662638,
        50662421,
        50662385,
        50662191,
        50662414,
        50662336
      ],
      "score": 244,
      "time": 1795742029,
      "title": "Hard Drive pricing has gotten bad",
      "type": "story",
      "url": "https://blog.ktz.me/black-friday-hard-drive-prices-are-messed-up/"
    },
    {
      "by": "iantongeorge",
      "descendants": 406,
      "id": 50657530,
      "kids": [
        50657695,
        50658916,
        50658552,
        50657728,
        50662907,
        50663216,
        50663170,
        50658052,
        50658121,
        50657730,
        50663082,
        50657895,
        50661373,
        50658870,
        50657676,
        50662228,
        50658077,
        50659622,
        50659994,
        50657930,
        50660953,
        50658925,
        50660851,
        50657943,
        50661308,
        50658261,
        50662089,
        50657785,
        50660483,
        50658176,
        50662521,
        50659248,
        50662236,
        50657752,
        50659304,
        50661191,
        50658650,
        50659888,
        50658430,
        50658070,
        50657914,
        50662130,
        50658764,
        50661250,
        50661524,
        50660610,
        50658265,
        50660201,
        50659053,
        50659393,
        50657775,
        50657531,
        50659047,
        50659068,
        50660129,
        50662047,
        50657913,
        50657821,
        50660015,
        50657745
      ],
      "score": 340,
      "time": 1795714607,
      "title": "YouTube Ad Punisher – Auto-reloads YouTube pages when an ad plays",
      "type": "story",
      "url": "https://github.com/antonpictures/youtube-punisher"
    },
    {
      "by": "dverlaeckt80",
      "descendants": 76,
      "id": 50659841,
      "kids": [
        50660935,
        50660678,
        50660948,
        50660831,
        50660795,
        50660899,
        50661296,
        50661913,
        50660437,
        50660845,
        50661818,
        50661012,
        50660147,
        50660376,
        50660588,
        50661271,
        50660937,
        50660941,
        50660166,
        50660347,
        50660994,
        50660409,
        50660192,
        50660226,
        50660123,
        50660020
      ],
      "score": 329,
      "time": 1795727285,
      "title": "Kamil Khan Mumtaz: Pakistani architect, admired at home, almost invisible abroad",
      "type": "story",
      "url": "https://worksinprogress.co/issue/the-greatest-architect-youve-never-heard-of-is-in-pakistan/"
    },
    {
      "by": "julianlam",
      "descendants": 79,
      "id": 50657265,
      "kids": [
        50657791,
        50657591,
        50659700,
        50658571,
        50657417,
        50657426,
        50658431,
        50658990,
        50661591,
        50657526,
        50662785,
        50661741,
        50658949,
        50657386,
        50659978,
        50657758,
        50659581,
        50658142,
        50658667,
        50659647,
        50660796,
        50661781,
        50657794
      ],
      "score": 329,
      "time": 1795713089,
      "title": "AMD-specific fork of llama.cpp",
      "type": "story",
      "url": "https://devnull.land/amd-specific-llama-cpp"
    },
    {
      "by": "Bender",
      "descendants": 114,
      "id": 50657645,
      "kids": [
        50659653,
        50658367,
        50660319,
        50658789,
        50657797,
        50658045,
        50663287,
        50658167,
        50658541,
        50658276,
        50659836,
        50663044,
        50659055,
        50657967,
        50658920,
        50658618
      ],
      "score": 247,
      "time": 1795715265,
      "title": "CTO of 'RansomwareHelp' indicted for wire fraud",
      "type": "story",
      "url": "https://krebsonsecurity.com/2026/11/cto-of-ransomwarehelp-indicted-for-wire-fraud/"
    },
    {
      "by": "liamg",
      "descendants": 107,
      "id": 50659640,
      "kids": [
        50662624,
        50663467,
        50662397,
        50663428,
        50661994,
        50663266,
        50661334,
        50662467,
        50661096,
        50661882,
        50663415,
        50661888,
        50661563,
        50660289,
        50662741,
        50660943,
        50661968,
        50662158,
        50661318,
        50660857,
        50660245,
        50662855,
        50661058,
        50662300,
        50662157,
        50662502,
        50660695,
        50661981,
        50662075,
        50662949,
        50662895,
        50662019,
        50660978,
        50660266
      ],
      "score": 240,
      "time": 1795726189,
      "title": "Company Culture = Slack Emoji ÷ √Headcount",
      "type": "story",
      "url": "https://lia.mg/posts/measuring-company-culture-with-slack-emoji/"
    },
    {
      "by": "saikatsg",
      "descendants": 248,
      "id": 50653667,
      "kids": [
        50656649,
        50654149,
        50654057,
        50655506,
        50662540,
        50653821,
        50653958,
        50655516,
        50663403,
        50654397,
        50662027,
        50655903,
        50653920,
        50654582,
        50659468,
        50657237,
        50654282,
        50655617,
        50654195,
        50654191,
        50655069,
        50654482,
        50662815,
        50654294,
        50655173,
        50653912,
        50653919,
        50654649,
        50655624,
        50653805,
        50656721,
        50657950,
        50653725,
        50654979,
        50659472,
        50654874,
        50658307,
        50657026,
        50655381,
        50654693,
        50655168,
        50656652,
        50656339,
        50659378,
        50653940,
        50656978,
        50653933,
        50662087,
        50656236,
        50655075,
        50658061,
        50655290,
        50660359,
        50655058,
        50660070,
        50653848,
        50657623,
        50654733,
        50657116,
        50656814,
        50656423,
        50656235,
        50656044,
        50654214,
        50658368,
        50654622,
        50654945,
        50657805,
        50653947,
        50658301,
        50654758,
        50654358,
        50657278,
        50655096,
        50658312,
        50654049
      ],
      "score": 498,
      "time": 1795687861,
      "title": "Intel One Mono font (2023)",
      "type": "story",
      "url": "https://github.com/intel/intel-one-mono"
    },
    {
      "by": "chrhenning",
      "descendants": 1,
      "id": 50658498,
      "kids": [
        50663012,
        50662373,
        50661918
      ],
      "score": 51,
      "time": 1795719890,
      "title": "An introduction to uncertainty in machine learning",
      "type": "story",
      "url": "https://chrhenning.com/blog/2026/introduction-to-uncertainty/"
    },
    {
      "by": "leafingensemble",
      "descendants": 12,
      "id": 50660273,
      "kids": [
        50661701,
        50662695,
        50661171,
        50662105,
        50663172,
        50661121,
        50661498,
        50661142
      ],
      "score": 80,
      "time": 1795730359,
      "title": "Novita, StreamLake, etc. are ByteDance Ark wrappers",
      "type": "story",
      "url": "https://kendell.dev/blog/arkwrapper/"
    },
    {
      "by": "Mond_",
      "descendants": 15,
      "id": 50662933,
      "kids": [
        50663455,
        50663251,
        50663337,
        50663273,
        50663272,
        50663221
      ],
      "score": 53,
      "time": 1795755378,
      "title": "\"What's Claude's Fursona?\" and Other Questions",
      "type": "story",
      "url": "https://herecomesthemoon.net/2026/11/whats-claudes-fursona/"
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
      "title": "Taking Email Back",
      "url": "http://www.linux-magazine.com/Online/Features/Taking-Email-Back",
      "score": 25,
      "comments": 4,
      "tags": [
        "email"
      ],
      "id": "afxeri"
    },
    {
      "title": "Slow Ubuntu security response times",
      "url": "https://www.openwall.com/lists/oss-security/2026/11/25/9",
      "score": 111,
      "comments": 17,
      "tags": [
        "linux",
        "security"
      ],
      "id": "wzlzlh"
    },
    {
      "title": "Garage v2.6.0 released with web admin, v1.x EoL & other news",
      "url": "https://garagehq.deuxfleurs.fr/blog/2026-11-webadmin-release/",
      "score": 40,
      "comments": 3,
      "tags": [
        "distributed",
        "release",
        "web"
      ],
      "id": "2gfpu3"
    },
    {
      "title": "In defense of lock poisoning in Rust (2025)",
      "url": "https://sunshowers.io/posts/on-poisoning/",
      "score": 26,
      "comments": 11,
      "tags": [
        "rust"
      ],
      "id": "wpylec"
    },
    {
      "title": "The need for a formally verifiable mainstream programming language",
      "url": "https://blainehansen.me/post/mainstream-verifiable-language/",
      "score": 9,
      "comments": 6,
      "tags": [
        "ai",
        "building-ai-tooling",
        "formalmethods",
        "plt"
      ],
      "id": "byfdgn"
    },
    {
      "title": "Entering the Geminispace",
      "url": "https://jmmv.dev/2026/11/entering-the-geminispace.html",
      "score": 43,
      "comments": 33,
      "tags": [
        "web"
      ],
      "id": "8rgqmw"
    },
    {
      "title": "How WinHelp files work",
      "url": "https://quin.fyi/posts/how-winhelp-files-work.html",
      "score": 18,
      "comments": 8,
      "tags": [
        "programming",
        "reversing",
        "rust",
        "show"
      ],
      "id": "w4kxiz"
    },
    {
      "title": "AI made self-hosting fun again",
      "url": "https://janlukas.blog/posts/ai-self-hosting",
      "score": 5,
      "comments": 1,
      "tags": [
        "ai",
        "devops"
      ],
      "id": "xsjwvi"
    },
    {
      "title": "Scott Aaronson on recent complexity theory AI achievements",
      "url": "https://scottaaronson.blog/?p=10379",
      "score": 57,
      "comments": 53,
      "tags": [
        "compsci",
        "math"
      ],
      "id": "ilit8q"
    },
    {
      "title": "Generalized Riemann Hypothesis proof in Lean 4, in 76k lines (down from 17M)",
      "url": "https://leanprover.zulipchat.com/#narrow/channel/658556-Riemann-Hypothesis/topic/Cleaning.20up.20the.20proof/near/643702366",
      "score": 51,
      "comments": 25,
      "tags": [
        "math"
      ],
      "id": "tlwot6"
    }
  ]
}
```

