# Hacker Feeds Outcomes - Creators

Generated on: 2026-11-28 06:24:59 UTC

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
      "reactions": 104,
      "comments": 42,
      "reading_time": 7,
      "author": "klaudiagrz"
    },
    {
      "title": "What was your win this week!?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-h3d",
      "tags": "weeklyretro",
      "reactions": 86,
      "comments": 43,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Home Office Nightmare",
      "description": "I Constantly Try to Survive Reality  Maybe that's why I built an entire universe, including a...",
      "url": "https://dev.to/thethirdcup/home-office-nightmare-2ja0",
      "tags": "discuss, mentalhealth, productivity",
      "reactions": 57,
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
      "title": "Tell us your story, and we might read it on the CodeNewbie Podcast 🎙️",
      "description": "Hi! I’m Lauren 👩🏼‍💻, the new host of the CodeNewbie Podcast, and I’d love to hear your...",
      "url": "https://dev.to/codenewbie/tell-us-your-story-and-we-might-read-it-on-the-codenewbie-podcast-2840",
      "tags": "codenewbie, ai, beginners, codenewbiestory",
      "reactions": 65,
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
      "forks": 7024,
      "added_stars": 1066,
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
      "forks": 1184,
      "added_stars": 890,
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
      "forks": 9216,
      "added_stars": 1335,
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
      "forks": 20634,
      "added_stars": 260,
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
      "forks": 45836,
      "added_stars": 4265,
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
      "forks": 6019,
      "added_stars": 466,
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
      "forks": 8899,
      "added_stars": 301,
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
      "forks": 12569,
      "added_stars": 1481,
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
      "forks": 3061,
      "added_stars": 446,
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
      "added_stars": 130,
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
      "forks": 9808,
      "added_stars": 56,
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
      "reactions": 84,
      "comments": 61,
      "reading_time": 3,
      "author": "gramli"
    },
    {
      "title": "How I built my own OS",
      "description": "I run my own operating system now. Not a fork with a new wallpaper and a different logo in the...",
      "url": "https://dev.to/cloudwerx/how-i-built-my-own-os-942",
      "tags": "ai, linux, programming, opensource",
      "reactions": 31,
      "comments": 12,
      "reading_time": 30,
      "author": "cloudwerx"
    },
    {
      "title": "Zero Repeat Regressions: The Golden Metric & The Future of Agentic Trust",
      "description": "Why we don't code by majority vote, opening our 375-ticket empirical ledger (including what broke), Barry Boehm's $1 : $500 : $25,000 token defect curve, the 4-Layer Verification Stack that lets you ship languages you despise, and how four Dart scars caught a live bug in a Python flight recorder.",
      "url": "https://dev.to/gde/zero-repeat-regressions-the-golden-metric-the-future-of-agentic-trust-4857",
      "tags": "ai, programming, architecture, softwareengineering",
      "reactions": 11,
      "comments": 12,
      "reading_time": 19,
      "author": "randalschwartz"
    },
    {
      "title": "Porting an ADK Research and Judge Loop to Strands on Bedrock AgentCore, With A2A 1.x",
      "description": "A three-agent researcher, judge and course builder moved from Google ADK to Strands Agents on Amazon Bedrock: Nova Web Grounding for search, a Strands graph for the loop, AgentCore Runtime for the agents, ECS Express Mode for the web app, and A2A 1.x from an unmerged Strands pull request.",
      "url": "https://dev.to/aws-builders/porting-an-adk-research-and-judge-loop-to-strands-on-bedrock-agentcore-with-a2a-1x-209j",
      "tags": "aws, ai, python, agents",
      "reactions": 13,
      "comments": 1,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "In Defense of the Software Factory",
      "description": "Today, while browsing the internet, I came across a discussion about the software factory metaphor....",
      "url": "https://dev.to/remojansen/in-defense-of-the-software-factory-48gf",
      "tags": "ai, agents, softwarefactory, discuss",
      "reactions": 2,
      "comments": 3,
      "reading_time": 11,
      "author": "remojansen"
    },
    {
      "title": "Two Sisters Tinctures, Now in Motion: An AI Ad Made with Migoo",
      "description": "Spike the story first. Spend the credits on the shots.   TL;DR: I entered the B.E.L.L.E x Migoo AI...",
      "url": "https://dev.to/earlgreyhot1701d/two-sisters-tinctures-now-in-motion-an-ai-ad-made-with-migoo-3lo7",
      "tags": "ai, showdev, buildinpublic, antigravity",
      "reactions": 14,
      "comments": 1,
      "reading_time": 6,
      "author": "earlgreyhot1701d"
    },
    {
      "title": "Thinking on Constrained Deployments: Gemma E4B on 4GB 1650",
      "description": "Gemma 4 E4B fits a 4 GB laptop card and answers like an 8 GB desktop card in 15 of 16 settings, at 1.59 times the time. The drafter nearly doubles its speed; thinking doubles its time.",
      "url": "https://dev.to/gde/thinking-on-constrained-deployments-gemma-e4b-on-4gb-1650-2cc6",
      "tags": "gemma, llm, benchmark, ai",
      "reactions": 8,
      "comments": 3,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Building The Wisp Family: Local Sub-30ms Code-Autocomplete Models Trained on One Mac",
      "description": "Most local coding models try to do everything in one trunk: chat, tool calling, chain-of-thought...",
      "url": "https://dev.to/philipjohnbasile/building-the-wisp-family-local-sub-30ms-code-autocomplete-models-trained-on-one-mac-4718",
      "tags": "ai, machinelearning, opensource, programming",
      "reactions": 3,
      "comments": 2,
      "reading_time": 8,
      "author": "philipjohnbasile"
    },
    {
      "title": "I Built AI Test Automation. Today, I Went Back to Manual Testing.",
      "description": "Today, I manually tested a project.  It doesn't sound like anything special.  After all, I've been...",
      "url": "https://dev.to/thethirdcup/i-built-ai-test-automation-today-i-went-back-to-manual-testing-mlh",
      "tags": "discuss, testing, ai, watercooler",
      "reactions": 101,
      "comments": 111,
      "reading_time": 3,
      "author": "xulingfeng"
    },
    {
      "title": "We Caught Our Reviewer's License Problem Before a Customer Did. Grading It Was Harder.",
      "description": "Our agent fleet's review gate has one job: nothing ships unless a reviewer actually reviewed it and...",
      "url": "https://dev.to/eliashivemind/we-caught-our-reviewers-license-problem-before-a-customer-did-grading-it-was-harder-57dc",
      "tags": "opensource, ai, devops, discuss",
      "reactions": 0,
      "comments": 2,
      "reading_time": 3,
      "author": "eliashivemind"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "nreece",
      "descendants": 9,
      "id": 50674218,
      "kids": [
        50675220,
        50674955,
        50674542,
        50674468,
        50675206,
        50674450,
        50674706,
        50675059,
        50675090,
        50674752
      ],
      "score": 121,
      "time": 1795835960,
      "title": "Unkernel: Real Linux kernel, compiled to WebAssembly",
      "type": "story",
      "url": "https://unkernel.dev"
    },
    {
      "by": "ComputedCamp995",
      "descendants": 105,
      "id": 50672565,
      "kids": [
        50673652,
        50674842,
        50674574,
        50672881,
        50674171,
        50673151,
        50673144,
        50674345,
        50673645,
        50673136,
        50673683,
        50673199
      ],
      "score": 283,
      "time": 1795820789,
      "title": "Google's DeepCrossAttention achieves comparable model quality up to 3x faster",
      "type": "story",
      "url": "https://research.google/blog/supercharging-transformer-residual-connections/"
    },
    {
      "by": "sheepscreek",
      "descendants": 50,
      "id": 50657346,
      "kids": [
        50675235,
        50674548,
        50675190,
        50674495,
        50673706,
        50673285,
        50674682,
        50674795,
        50674034,
        50675041,
        50674279,
        50674039,
        50674751,
        50673908,
        50673468
      ],
      "score": 229,
      "time": 1795713627,
      "title": "The Balatro Timeline",
      "type": "story",
      "url": "https://localthunk.com/blog/balatro-timeline-3aarh"
    },
    {
      "by": "dr_red_dog",
      "descendants": 252,
      "id": 50643158,
      "kids": [
        50673155,
        50671205,
        50672773,
        50672797,
        50667966,
        50673707,
        50673996,
        50643211,
        50672638,
        50672915,
        50669171,
        50671818,
        50674728,
        50668361,
        50671999,
        50668137,
        50668055,
        50671352,
        50672172,
        50671389,
        50668411,
        50671470,
        50670409,
        50671267,
        50670016,
        50672769,
        50670368,
        50672039,
        50668075,
        50674991,
        50672522,
        50670498,
        50668488,
        50671260,
        50670923,
        50672018,
        50672017,
        50673036,
        50672406,
        50670175,
        50673584,
        50672267,
        50672443,
        50671815,
        50669949,
        50672552,
        50670114,
        50670658,
        50673573,
        50668352,
        50668485,
        50668036,
        50668680,
        50669144,
        50671795,
        50672291
      ],
      "score": 399,
      "time": 1795619813,
      "title": "GPT 6.2 Astra Solves a Historical Mystery",
      "type": "story",
      "url": "https://generativehistory.substack.com/p/gpt-62-astra-solves-a-historical"
    },
    {
      "by": "scanr",
      "descendants": 254,
      "id": 50668145,
      "kids": [
        50668884,
        50668592,
        50670235,
        50668888,
        50673608,
        50671299,
        50674124,
        50668701,
        50668876,
        50672397,
        50669501,
        50669506,
        50674273,
        50672524,
        50670570,
        50673411,
        50669295,
        50668579,
        50673409,
        50670070,
        50668600,
        50670157,
        50668990,
        50669367,
        50670351,
        50669031,
        50672610,
        50668758,
        50670151,
        50672089,
        50668191,
        50670230,
        50670477,
        50673486,
        50671232,
        50673423,
        50671550,
        50673203,
        50669075
      ],
      "score": 486,
      "time": 1795794031,
      "title": "Credit card skimming scripts using WebRTC found on popular shopping sites",
      "type": "story",
      "url": "https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer"
    },
    {
      "by": "robtherobber",
      "descendants": 2,
      "id": 50666724,
      "kids": [
        50666866
      ],
      "score": 17,
      "time": 1795786220,
      "title": "Paolo Soleri built a utopian eco-city in the Arizona desert",
      "type": "story",
      "url": "https://www.worldofinteriors.com/story/paolo-soleri-arconsati-arizona"
    },
    {
      "by": "altilunium",
      "descendants": 10,
      "id": 50650253,
      "kids": [
        50674819,
        50675136,
        50650346,
        50650398
      ],
      "score": 30,
      "time": 1795656782,
      "title": "Sydney Fire Ant Infestation",
      "type": "story",
      "url": "https://www.abc.net.au/news/2026-11-25/nsw-government-ramps-up-efforts-to-respond-to-fire-ants-/107424812"
    },
    {
      "by": "MickyTheMouse",
      "descendants": 87,
      "id": 50669765,
      "kids": [
        50671211,
        50671431,
        50673121,
        50674560,
        50671581,
        50670711,
        50674539,
        50674767,
        50673997,
        50671136,
        50670305,
        50670659,
        50674839,
        50670813,
        50674927,
        50674951,
        50672982,
        50674341,
        50670448,
        50670574
      ],
      "score": 271,
      "time": 1795802565,
      "title": "Convex skills send the user's app idea to a remote server without telling them",
      "type": "story",
      "url": "https://github.com/convex/convex-backend-skill/issues/64"
    },
    {
      "by": "o4c",
      "descendants": 52,
      "id": 50662313,
      "kids": [
        50672041,
        50671238,
        50671877,
        50671142,
        50673579,
        50675003,
        50673522,
        50671094,
        50671358,
        50673114,
        50671137,
        50672812,
        50672185,
        50671907,
        50671091
      ],
      "score": 162,
      "time": 1795749019,
      "title": "Citroën Hydraulic System",
      "type": "story",
      "url": "https://www.citroenet.org.uk/miscellaneous/hydraulics/hydraulics-1.html"
    },
    {
      "by": "rbanffy",
      "descendants": 24,
      "id": 50672008,
      "kids": [
        50673317,
        50672587,
        50672274,
        50672490,
        50673987,
        50673613,
        50674768,
        50672668,
        50672503,
        50673755
      ],
      "score": 100,
      "time": 1795816094,
      "title": "9/UX: a Macintosh-inspired desktop for 9front",
      "type": "story",
      "url": "https://progrium.github.io/9ux/"
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
      "by": "nreece",
      "descendants": 9,
      "id": 50674218,
      "kids": [
        50675220,
        50674955,
        50674542,
        50674468,
        50675206,
        50674450,
        50674706,
        50675059,
        50675090,
        50674752
      ],
      "score": 121,
      "time": 1795835960,
      "title": "Unkernel: Real Linux kernel, compiled to WebAssembly",
      "type": "story",
      "url": "https://unkernel.dev"
    },
    {
      "by": "ComputedCamp995",
      "descendants": 105,
      "id": 50672565,
      "kids": [
        50673652,
        50674842,
        50674574,
        50672881,
        50674171,
        50673151,
        50673144,
        50674345,
        50673645,
        50673136,
        50673683,
        50673199
      ],
      "score": 283,
      "time": 1795820789,
      "title": "Google's DeepCrossAttention achieves comparable model quality up to 3x faster",
      "type": "story",
      "url": "https://research.google/blog/supercharging-transformer-residual-connections/"
    },
    {
      "by": "sheepscreek",
      "descendants": 50,
      "id": 50657346,
      "kids": [
        50675235,
        50674548,
        50675190,
        50674495,
        50673706,
        50673285,
        50674682,
        50674795,
        50674034,
        50675041,
        50674279,
        50674039,
        50674751,
        50673908,
        50673468
      ],
      "score": 229,
      "time": 1795713627,
      "title": "The Balatro Timeline",
      "type": "story",
      "url": "https://localthunk.com/blog/balatro-timeline-3aarh"
    },
    {
      "by": "dr_red_dog",
      "descendants": 252,
      "id": 50643158,
      "kids": [
        50673155,
        50671205,
        50672773,
        50672797,
        50667966,
        50673707,
        50673996,
        50643211,
        50672638,
        50672915,
        50669171,
        50671818,
        50674728,
        50668361,
        50671999,
        50668137,
        50668055,
        50671352,
        50672172,
        50671389,
        50668411,
        50671470,
        50670409,
        50671267,
        50670016,
        50672769,
        50670368,
        50672039,
        50668075,
        50674991,
        50672522,
        50670498,
        50668488,
        50671260,
        50670923,
        50672018,
        50672017,
        50673036,
        50672406,
        50670175,
        50673584,
        50672267,
        50672443,
        50671815,
        50669949,
        50672552,
        50670114,
        50670658,
        50673573,
        50668352,
        50668485,
        50668036,
        50668680,
        50669144,
        50671795,
        50672291
      ],
      "score": 399,
      "time": 1795619813,
      "title": "GPT 6.2 Astra Solves a Historical Mystery",
      "type": "story",
      "url": "https://generativehistory.substack.com/p/gpt-62-astra-solves-a-historical"
    },
    {
      "by": "scanr",
      "descendants": 254,
      "id": 50668145,
      "kids": [
        50668884,
        50668592,
        50670235,
        50668888,
        50673608,
        50671299,
        50674124,
        50668701,
        50668876,
        50672397,
        50669501,
        50669506,
        50674273,
        50672524,
        50670570,
        50673411,
        50669295,
        50668579,
        50673409,
        50670070,
        50668600,
        50670157,
        50668990,
        50669367,
        50670351,
        50669031,
        50672610,
        50668758,
        50670151,
        50672089,
        50668191,
        50670230,
        50670477,
        50673486,
        50671232,
        50673423,
        50671550,
        50673203,
        50669075
      ],
      "score": 486,
      "time": 1795794031,
      "title": "Credit card skimming scripts using WebRTC found on popular shopping sites",
      "type": "story",
      "url": "https://www.infohawk.com/news/2026-11-27-black-friday-webrtc-skimmer"
    },
    {
      "by": "robtherobber",
      "descendants": 2,
      "id": 50666724,
      "kids": [
        50666866
      ],
      "score": 17,
      "time": 1795786220,
      "title": "Paolo Soleri built a utopian eco-city in the Arizona desert",
      "type": "story",
      "url": "https://www.worldofinteriors.com/story/paolo-soleri-arconsati-arizona"
    },
    {
      "by": "altilunium",
      "descendants": 10,
      "id": 50650253,
      "kids": [
        50674819,
        50675136,
        50650346,
        50650398
      ],
      "score": 30,
      "time": 1795656782,
      "title": "Sydney Fire Ant Infestation",
      "type": "story",
      "url": "https://www.abc.net.au/news/2026-11-25/nsw-government-ramps-up-efforts-to-respond-to-fire-ants-/107424812"
    },
    {
      "by": "MickyTheMouse",
      "descendants": 87,
      "id": 50669765,
      "kids": [
        50671211,
        50671431,
        50673121,
        50674560,
        50671581,
        50670711,
        50674539,
        50674767,
        50673997,
        50671136,
        50670305,
        50670659,
        50674839,
        50670813,
        50674927,
        50674951,
        50672982,
        50674341,
        50670448,
        50670574
      ],
      "score": 271,
      "time": 1795802565,
      "title": "Convex skills send the user's app idea to a remote server without telling them",
      "type": "story",
      "url": "https://github.com/convex/convex-backend-skill/issues/64"
    },
    {
      "by": "o4c",
      "descendants": 52,
      "id": 50662313,
      "kids": [
        50672041,
        50671238,
        50671877,
        50671142,
        50673579,
        50675003,
        50673522,
        50671094,
        50671358,
        50673114,
        50671137,
        50672812,
        50672185,
        50671907,
        50671091
      ],
      "score": 162,
      "time": 1795749019,
      "title": "Citroën Hydraulic System",
      "type": "story",
      "url": "https://www.citroenet.org.uk/miscellaneous/hydraulics/hydraulics-1.html"
    },
    {
      "by": "rbanffy",
      "descendants": 24,
      "id": 50672008,
      "kids": [
        50673317,
        50672587,
        50672274,
        50672490,
        50673987,
        50673613,
        50674768,
        50672668,
        50672503,
        50673755
      ],
      "score": 100,
      "time": 1795816094,
      "title": "9/UX: a Macintosh-inspired desktop for 9front",
      "type": "story",
      "url": "https://progrium.github.io/9ux/"
    },
    {
      "by": "gregsadetsky",
      "descendants": 17,
      "id": 50631823,
      "kids": [
        50672841,
        50673474,
        50673519,
        50673354,
        50674614
      ],
      "score": 76,
      "time": 1795542927,
      "title": "Build your own amp modeler: $78 DIY pedal kit from TONE3000",
      "type": "story",
      "url": "https://www.guitarworld.com/gear/guitar-pedals/tone3000-daisy-audio-diy-pedal-kit"
    },
    {
      "by": "mday404",
      "descendants": 117,
      "id": 50667726,
      "kids": [
        50668483,
        50668037,
        50671292,
        50667889,
        50669412,
        50670769,
        50668346,
        50668451,
        50669925,
        50668958,
        50673384,
        50669518,
        50672323,
        50670675,
        50667849,
        50674746,
        50668217,
        50668043,
        50672451,
        50669196,
        50669808,
        50667972,
        50668724,
        50672289,
        50668059,
        50669762,
        50668054,
        50672343,
        50668674,
        50668007,
        50672801,
        50668184,
        50668112,
        50667813,
        50668803,
        50668812,
        50670481,
        50668694,
        50671719,
        50672197,
        50668367,
        50669235,
        50668637,
        50668083,
        50668064,
        50673092,
        50672345,
        50668096,
        50670459,
        50669138,
        50668993,
        50668258,
        50668006,
        50671277,
        50672337,
        50668604,
        50670551,
        50669097
      ],
      "score": 351,
      "text": "a ball will fall. trade on where it lands.<p>I made this game! Some technical details:<p>The entire drop of the ball is simulated server-side, then streamed to each client as server-sent events with a small buffer. Every drop is deterministic from its starting position, so rounds can be replayed exactly for later analysis, but tiny variations in starting position can change the ultimate outcome.<p>There&#x27;s some AI traders to keep the market moving, but they drop out in any round that has more than five people. They operate using a naive set of rules that I wrote for them, so they&#x27;re not too hard to beat -- it&#x27;s when the market is full of real people that it gets tricky.<p>Curious to get feedback on anything you would change, and especially whether the mechanics were clear right away or not.",
      "time": 1795791710,
      "title": "Show HN: bouncemarket – a live prediction market game for a bouncing ball",
      "type": "story",
      "url": "https://bouncemarket.minhanhday.com/"
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
      "title": "Hard Drive pricing has gotten bad",
      "url": "https://blog.ktz.me/black-friday-hard-drive-prices-are-messed-up/",
      "score": 40,
      "comments": 16,
      "tags": [
        "hardware"
      ],
      "id": "96gu7o"
    },
    {
      "title": "Objections to .php application being published on ICANN site",
      "url": "https://pub.roddie.digital/3n3aavxi6hc2g",
      "score": 37,
      "comments": 10,
      "tags": [
        "web"
      ],
      "id": "d0phlt"
    },
    {
      "title": "Tiny Hat: a new Linux distro dedicated to retro gamedev",
      "url": "https://roboticoverlords.org/tinyhat",
      "score": 48,
      "comments": 8,
      "tags": [
        "games",
        "linux",
        "retrocomputing"
      ],
      "id": "mbm7xw"
    },
    {
      "title": "The State of Allocators in 2026 - Finally Stabilised",
      "url": "https://cetra3.github.io/blog/state-of-allocators-2026-finally-stabilised/",
      "score": 46,
      "comments": 0,
      "tags": [
        "rust"
      ],
      "id": "u746hs"
    },
    {
      "title": "Why optimistic updates are corrosive",
      "url": "https://datastar-instant-intent.ndyg.cross.stream/corrosive/",
      "score": 19,
      "comments": 8,
      "tags": [
        "web"
      ],
      "id": "amjski"
    },
    {
      "title": "Build your own Paint",
      "url": "https://www.buildyourownpaint.com/en",
      "score": 18,
      "comments": 4,
      "tags": [
        "rust"
      ],
      "id": "c2zrmq"
    },
    {
      "title": "What are you doing this weekend?",
      "url": "",
      "score": 16,
      "comments": 36,
      "tags": [
        "ask",
        "programming"
      ],
      "id": "locqp9"
    },
    {
      "title": "Pop!_OS 26.04 LTS Has Landed",
      "url": "https://system76.com/blog/post/pop_os-26-04-lts-has-landed",
      "score": 15,
      "comments": 4,
      "tags": [
        "linux",
        "release"
      ],
      "id": "hizg2w"
    },
    {
      "title": "Taking Email Back",
      "url": "http://www.linux-magazine.com/Online/Features/Taking-Email-Back",
      "score": 86,
      "comments": 44,
      "tags": [
        "email"
      ],
      "id": "afxeri"
    },
    {
      "title": "x86 is an octal machine",
      "url": "https://gist.github.com/seanjensengrey/f971c20d05d4d0efc0781f2f3c0353da",
      "score": 9,
      "comments": 1,
      "tags": [
        "compsci",
        "retrocomputing"
      ],
      "id": "kikmfz"
    }
  ]
}
```

