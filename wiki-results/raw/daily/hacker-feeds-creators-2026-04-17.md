# Hacker Feeds Outcomes - Creators

Generated on: 2026-04-17 06:55:29 UTC

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
      "title": "Join the OpenClaw Challenge: $1,200 Prize Pool!",
      "description": "If you've spent any time on the internet, you know OpenClaw has been making waves lately. We recently...",
      "url": "https://dev.to/devteam/join-the-openclaw-challenge-1200-prize-pool-5682",
      "tags": "devchallenge, openclawchallenge, openclaw, ai",
      "reactions": 72,
      "comments": 8,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Congrats to the 2026 WeCoded Challenge Winners!",
      "description": "The results are in! We are thrilled to announce the winners of the 2026 WeCoded Challenge.  Over the...",
      "url": "https://dev.to/devteam/congrats-to-the-2026-wecoded-challenge-winners-2pee",
      "tags": "devchallenge, wecoded, frontend, career",
      "reactions": 27,
      "comments": 6,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "What brings you by a conference booth?",
      "description": "What makes you stop by and chat at a booth?",
      "url": "https://dev.to/missamarakay/what-brings-you-by-a-conference-booth-43e3",
      "tags": "discuss",
      "reactions": 31,
      "comments": 10,
      "reading_time": 1,
      "author": "missamarakay"
    },
    {
      "title": "AI Doesn't Fix Weak Engineering. It Just Speeds It Up.",
      "description": "\"Weak engineers with AI still produce weak output. Just faster.\" That was the whole point. AI changes...",
      "url": "https://dev.to/jonoherrington/ai-doesnt-fix-weak-engineering-it-just-speeds-it-up-5bak",
      "tags": "ai, leadership, discuss",
      "reactions": 37,
      "comments": 10,
      "reading_time": 5,
      "author": "jonoherrington"
    },
    {
      "title": "Turning the Raspberry Pi Zero into a Hacking Gadget",
      "description": "Single Board Computers with the ability to run a full-fledged Linux distribution can be used as...",
      "url": "https://dev.to/admantium/turning-the-raspberry-pi-zero-into-a-hacking-gadget-2ekl",
      "tags": "raspberrypi, raspberryzero",
      "reactions": 42,
      "comments": 1,
      "reading_time": 9,
      "author": "admantium"
    },
    {
      "title": "MiniClaw: A Tiny LLM Agent for Mini Micro",
      "description": "Agents are all the rage these days.  Claude Code was one of the first, and perhaps still the most...",
      "url": "https://dev.to/joestrout/miniclaw-a-tiny-llm-agent-for-mini-micro-4akf",
      "tags": "miniscript, minimicro, agents, programming",
      "reactions": 22,
      "comments": 0,
      "reading_time": 8,
      "author": "joestrout"
    },
    {
      "title": "Build a voice-enabled Telegram Bot with the Gemini Interactions API",
      "description": "What if your Telegram bot could listen?  Not just read text — actually understand voice messages,...",
      "url": "https://dev.to/googleai/build-a-voice-enabled-telegram-bot-with-the-gemini-interactions-api-nm5",
      "tags": "ai, gemini, python, tutorial",
      "reactions": 39,
      "comments": 1,
      "reading_time": 10,
      "author": "thorwebdev"
    },
    {
      "title": "Watching RubyGems.org in Real Time",
      "description": "RubyGems.org published its first public roadmap this week. That's new, and it's worth noticing.  I've...",
      "url": "https://dev.to/cseeman/watching-rubygemsorg-in-real-time-11o",
      "tags": "ruby, rails",
      "reactions": 5,
      "comments": 0,
      "reading_time": 3,
      "author": "cseeman"
    },
    {
      "title": "Join our DEV Weekend Challenge — $1,000 in Prizes Across TEN winners! Submissions Due April 20 at 6:59 AM UTC.",
      "description": "We're excited to kick off another DEV Weekend Challenge, a short bite-sized challenge planned to fit...",
      "url": "https://dev.to/devteam/join-our-dev-weekend-challenge-1000-in-prizes-across-ten-winners-submissions-due-april-20-at-47i1",
      "tags": "devchallenge, weekendchallenge",
      "reactions": 17,
      "comments": 3,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Architecture Documentation as a First-Class Engineering Asset",
      "description": "How autonomous AI agents can generate a complete architecture snapshot of your microservices platform...",
      "url": "https://dev.to/gdg/architecture-documentation-as-a-first-class-engineering-asset-4a1j",
      "tags": "architecture, security, ai, agents",
      "reactions": 28,
      "comments": 6,
      "reading_time": 7,
      "author": "alexandertyutin"
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
      "forks": 261,
      "added_stars": 1276,
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
      "author": "EvoMap",
      "repo": "evolver",
      "avatar": "https://github.com/EvoMap.png",
      "repo_link": "https://github.com/EvoMap/evolver",
      "desc": "The GEP-Powered Self-Evolution Engine for AI Agents. Genome Evolution Protocol. | evomap.ai",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 354,
      "added_stars": 1247,
      "builtBy": [
        {
          "username": "autogame-17",
          "href": "https://github.com/autogame-17",
          "avatar": "https://avatars.githubusercontent.com/u/166480271"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "penggaolai",
          "href": "https://github.com/penggaolai",
          "avatar": "https://avatars.githubusercontent.com/u/44097312"
        },
        {
          "username": "onthebigtree",
          "href": "https://github.com/onthebigtree",
          "avatar": "https://avatars.githubusercontent.com/u/60813639"
        },
        {
          "username": "firstdraft-work",
          "href": "https://github.com/firstdraft-work",
          "avatar": "https://avatars.githubusercontent.com/u/265695765"
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
      "forks": 638,
      "added_stars": 431,
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
      "repo": "Open-Generative-AI",
      "avatar": "https://github.com/Anil-matcha.png",
      "repo_link": "https://github.com/Anil-matcha/Open-Generative-AI",
      "desc": "Uncensored, open-source alternative to Higgsfield AI, Freepik, Krea, Openart AI — Free, unrestricted AI image & video generation studio with 200+ models (Flux, Midjourney, Kling, Sora, Veo). No content filters. Self-hosted, MIT licensed.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 933,
      "added_stars": 1106,
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
      "author": "vercel",
      "repo": "next.js",
      "avatar": "https://github.com/vercel.png",
      "repo_link": "https://github.com/vercel/next.js",
      "desc": "The React Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 30924,
      "added_stars": 248,
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
      "author": "maboloshi",
      "repo": "github-chinese",
      "avatar": "https://github.com/maboloshi.png",
      "repo_link": "https://github.com/maboloshi/github-chinese",
      "desc": "GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1337,
      "added_stars": 632,
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
      "author": "badlogic",
      "repo": "pi-skills",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-skills",
      "desc": "Skills for pi coding agent (compatible with Claude Code and Codex CLI)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 133,
      "added_stars": 113,
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
      "author": "robinebers",
      "repo": "openusage",
      "avatar": "https://github.com/robinebers.png",
      "repo_link": "https://github.com/robinebers/openusage",
      "desc": "Burning through your subscriptions too fast? Paying for stuff you never use? Stop guessing. OpenUsage is free and open source.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 171,
      "added_stars": 181,
      "builtBy": [
        {
          "username": "robinebers",
          "href": "https://github.com/robinebers",
          "avatar": "https://avatars.githubusercontent.com/u/16515780"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "davidarny",
          "href": "https://github.com/davidarny",
          "avatar": "https://avatars.githubusercontent.com/u/17799810"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "Acode-Foundation",
      "repo": "Acode",
      "avatar": "https://github.com/Acode-Foundation.png",
      "repo_link": "https://github.com/Acode-Foundation/Acode",
      "desc": "Acode - powerful text/code editor for android",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 949,
      "added_stars": 87,
      "builtBy": [
        {
          "username": "bajrangCoder",
          "href": "https://github.com/bajrangCoder",
          "avatar": "https://avatars.githubusercontent.com/u/71929976"
        },
        {
          "username": "deadlyjack",
          "href": "https://github.com/deadlyjack",
          "avatar": "https://avatars.githubusercontent.com/u/38699939"
        },
        {
          "username": "RohitKushvaha01",
          "href": "https://github.com/RohitKushvaha01",
          "avatar": "https://avatars.githubusercontent.com/u/99863818"
        },
        {
          "username": "UnschooledGamer",
          "href": "https://github.com/UnschooledGamer",
          "avatar": "https://avatars.githubusercontent.com/u/76094069"
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
      "forks": 3476,
      "added_stars": 1705,
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
          "username": "Jiliac",
          "href": "https://github.com/Jiliac",
          "avatar": "https://avatars.githubusercontent.com/u/5956866"
        },
        {
          "username": "bensabic",
          "href": "https://github.com/bensabic",
          "avatar": "https://avatars.githubusercontent.com/u/27636870"
        },
        {
          "username": "CoopahG",
          "href": "https://github.com/CoopahG",
          "avatar": "https://avatars.githubusercontent.com/u/72124096"
        }
      ]
    },
    {
      "author": "facebook",
      "repo": "hermes",
      "avatar": "https://github.com/facebook.png",
      "repo_link": "https://github.com/facebook/hermes",
      "desc": "A JavaScript engine optimized for running React Native.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 757,
      "added_stars": 53,
      "builtBy": [
        {
          "username": "avp",
          "href": "https://github.com/avp",
          "avatar": "https://avatars.githubusercontent.com/u/2388586"
        },
        {
          "username": "neildhar",
          "href": "https://github.com/neildhar",
          "avatar": "https://avatars.githubusercontent.com/u/4301777"
        },
        {
          "username": "lavenzg",
          "href": "https://github.com/lavenzg",
          "avatar": "https://avatars.githubusercontent.com/u/22123582"
        },
        {
          "username": "tmikov",
          "href": "https://github.com/tmikov",
          "avatar": "https://avatars.githubusercontent.com/u/7785196"
        },
        {
          "username": "kodafb",
          "href": "https://github.com/kodafb",
          "avatar": "https://avatars.githubusercontent.com/u/19997982"
        }
      ]
    },
    {
      "author": "koodo-reader",
      "repo": "koodo-reader",
      "avatar": "https://github.com/koodo-reader.png",
      "repo_link": "https://github.com/koodo-reader/koodo-reader",
      "desc": "A modern ebook manager and reader with sync and backup capacities for Windows, macOS, Linux, Android, iOS and Web",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1970,
      "added_stars": 129,
      "builtBy": [
        {
          "username": "troyeguo",
          "href": "https://github.com/troyeguo",
          "avatar": "https://avatars.githubusercontent.com/u/13820674"
        },
        {
          "username": "nofalbriansah",
          "href": "https://github.com/nofalbriansah",
          "avatar": "https://avatars.githubusercontent.com/u/48385577"
        },
        {
          "username": "hacketiwack",
          "href": "https://github.com/hacketiwack",
          "avatar": "https://avatars.githubusercontent.com/u/13329768"
        },
        {
          "username": "thefoqs",
          "href": "https://github.com/thefoqs",
          "avatar": "https://avatars.githubusercontent.com/u/129462032"
        },
        {
          "username": "Kazevic",
          "href": "https://github.com/Kazevic",
          "avatar": "https://avatars.githubusercontent.com/u/104698169"
        }
      ]
    },
    {
      "author": "songquanpeng",
      "repo": "one-api",
      "avatar": "https://github.com/songquanpeng.png",
      "repo_link": "https://github.com/songquanpeng/one-api",
      "desc": "LLM API 管理 & 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。LLM API management & key redistribution system, unifying multiple providers under a single API. Single binary, Docker-ready, with an English UI.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6118,
      "added_stars": 431,
      "builtBy": [
        {
          "username": "songquanpeng",
          "href": "https://github.com/songquanpeng",
          "avatar": "https://avatars.githubusercontent.com/u/39998050"
        },
        {
          "username": "mrhaoji",
          "href": "https://github.com/mrhaoji",
          "avatar": "https://avatars.githubusercontent.com/u/483419"
        },
        {
          "username": "Laisky",
          "href": "https://github.com/Laisky",
          "avatar": "https://avatars.githubusercontent.com/u/4532436"
        },
        {
          "username": "igophper",
          "href": "https://github.com/igophper",
          "avatar": "https://avatars.githubusercontent.com/u/34326532"
        },
        {
          "username": "quzard",
          "href": "https://github.com/quzard",
          "avatar": "https://avatars.githubusercontent.com/u/30899719"
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
      "forks": 32688,
      "added_stars": 143,
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
      "author": "prettier",
      "repo": "prettier",
      "avatar": "https://github.com/prettier.png",
      "repo_link": "https://github.com/prettier/prettier",
      "desc": "Prettier is an opinionated code formatter.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4702,
      "added_stars": 77,
      "builtBy": [
        {
          "username": "fisker",
          "href": "https://github.com/fisker",
          "avatar": "https://avatars.githubusercontent.com/u/172584"
        },
        {
          "username": "vjeux",
          "href": "https://github.com/vjeux",
          "avatar": "https://avatars.githubusercontent.com/u/197597"
        },
        {
          "username": "sosukesuzuki",
          "href": "https://github.com/sosukesuzuki",
          "avatar": "https://avatars.githubusercontent.com/u/14838850"
        }
      ]
    },
    {
      "author": "zen-browser",
      "repo": "desktop",
      "avatar": "https://github.com/zen-browser.png",
      "repo_link": "https://github.com/zen-browser/desktop",
      "desc": "Welcome to a calmer internet",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1452,
      "added_stars": 281,
      "builtBy": [
        {
          "username": "mr-cheffy",
          "href": "https://github.com/mr-cheffy",
          "avatar": "https://avatars.githubusercontent.com/u/91018726"
        },
        {
          "username": "Slowlife01",
          "href": "https://github.com/Slowlife01",
          "avatar": "https://avatars.githubusercontent.com/u/54318514"
        },
        {
          "username": "kristijanribaric",
          "href": "https://github.com/kristijanribaric",
          "avatar": "https://avatars.githubusercontent.com/u/96492763"
        },
        {
          "username": "octaviusz",
          "href": "https://github.com/octaviusz",
          "avatar": "https://avatars.githubusercontent.com/u/50177704"
        },
        {
          "username": "BrhmDev",
          "href": "https://github.com/BrhmDev",
          "avatar": "https://avatars.githubusercontent.com/u/92426196"
        }
      ]
    },
    {
      "author": "hotheadhacker",
      "repo": "no-as-a-service",
      "avatar": "https://github.com/hotheadhacker.png",
      "repo_link": "https://github.com/hotheadhacker/no-as-a-service",
      "desc": "No-as-a-Service (NaaS) is a simple API that returns a random rejection reason. Use it when you need a realistic excuse, a fun “no,” or want to simulate being turned down in style.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 429,
      "added_stars": 684,
      "builtBy": [
        {
          "username": "hotheadhacker",
          "href": "https://github.com/hotheadhacker",
          "avatar": "https://avatars.githubusercontent.com/u/18418340"
        },
        {
          "username": "matholamew",
          "href": "https://github.com/matholamew",
          "avatar": "https://avatars.githubusercontent.com/u/614992"
        },
        {
          "username": "Fordi",
          "href": "https://github.com/Fordi",
          "avatar": "https://avatars.githubusercontent.com/u/116676"
        },
        {
          "username": "pro100svitlo",
          "href": "https://github.com/pro100svitlo",
          "avatar": "https://avatars.githubusercontent.com/u/12133914"
        },
        {
          "username": "clafoutis42",
          "href": "https://github.com/clafoutis42",
          "avatar": "https://avatars.githubusercontent.com/u/21974983"
        }
      ]
    },
    {
      "author": "hexgrad",
      "repo": "kokoro",
      "avatar": "https://github.com/hexgrad.png",
      "repo_link": "https://github.com/hexgrad/kokoro",
      "desc": "https://hf.co/hexgrad/Kokoro-82M",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 728,
      "added_stars": 173,
      "builtBy": [
        {
          "username": "hexgrad",
          "href": "https://github.com/hexgrad",
          "avatar": "https://avatars.githubusercontent.com/u/166769057"
        },
        {
          "username": "xenova",
          "href": "https://github.com/xenova",
          "avatar": "https://avatars.githubusercontent.com/u/26504141"
        },
        {
          "username": "remsky",
          "href": "https://github.com/remsky",
          "avatar": "https://avatars.githubusercontent.com/u/25017870"
        },
        {
          "username": "ArEnSc",
          "href": "https://github.com/ArEnSc",
          "avatar": "https://avatars.githubusercontent.com/u/6252325"
        },
        {
          "username": "alesaccoia",
          "href": "https://github.com/alesaccoia",
          "avatar": "https://avatars.githubusercontent.com/u/1385023"
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
      "title": "Join the OpenClaw Challenge: $1,200 Prize Pool!",
      "description": "If you've spent any time on the internet, you know OpenClaw has been making waves lately. We recently...",
      "url": "https://dev.to/devteam/join-the-openclaw-challenge-1200-prize-pool-5682",
      "tags": "devchallenge, openclawchallenge, openclaw, ai",
      "reactions": 72,
      "comments": 8,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "AI Doesn't Fix Weak Engineering. It Just Speeds It Up.",
      "description": "\"Weak engineers with AI still produce weak output. Just faster.\" That was the whole point. AI changes...",
      "url": "https://dev.to/jonoherrington/ai-doesnt-fix-weak-engineering-it-just-speeds-it-up-5bak",
      "tags": "ai, leadership, discuss",
      "reactions": 37,
      "comments": 10,
      "reading_time": 5,
      "author": "jonoherrington"
    },
    {
      "title": "Build a voice-enabled Telegram Bot with the Gemini Interactions API",
      "description": "What if your Telegram bot could listen?  Not just read text — actually understand voice messages,...",
      "url": "https://dev.to/googleai/build-a-voice-enabled-telegram-bot-with-the-gemini-interactions-api-nm5",
      "tags": "ai, gemini, python, tutorial",
      "reactions": 39,
      "comments": 1,
      "reading_time": 10,
      "author": "thorwebdev"
    },
    {
      "title": "Architecture Documentation as a First-Class Engineering Asset",
      "description": "How autonomous AI agents can generate a complete architecture snapshot of your microservices platform...",
      "url": "https://dev.to/gdg/architecture-documentation-as-a-first-class-engineering-asset-4a1j",
      "tags": "architecture, security, ai, agents",
      "reactions": 28,
      "comments": 6,
      "reading_time": 7,
      "author": "alexandertyutin"
    },
    {
      "title": "Built a CLI that tells me what I'm spending on AI APIs before the invoice does",
      "description": "I kept finishing coding sessions with a small idea what I'd just spent on API calls :'D.  The...",
      "url": "https://dev.to/joedaviesio/built-a-cli-that-tells-me-what-im-spending-on-ai-apis-before-the-invoice-does-4kjn",
      "tags": "opensource, ai, cli, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "joedaviesio"
    },
    {
      "title": "TPU Mythbusting: cost and usage",
      "description": "TPUs are foundational to Google’s AI capabilities and can be equally transformative for your...",
      "url": "https://dev.to/googleai/tpu-mythbusting-cost-and-usage-50ch",
      "tags": "ai, googlecloud, kaggle, tpu",
      "reactions": 27,
      "comments": 1,
      "reading_time": 3,
      "author": "mstrzelczyk"
    },
    {
      "title": "TPU Mythbusting: the general perception",
      "description": "The IT world has been deeply immersed in the AI revolution over the past two years. Terms like GenAI,...",
      "url": "https://dev.to/googleai/tpu-mythbusting-the-general-perception-5585",
      "tags": "ai, googlecloud, kaggle, tpu",
      "reactions": 47,
      "comments": 0,
      "reading_time": 3,
      "author": "mstrzelczyk"
    },
    {
      "title": "We ditched worktrees for Claude Code. Here's what we use instead",
      "description": "Everyone's running multiple Claude Code agents in parallel now. The standard advice is \"use git...",
      "url": "https://dev.to/maverickdotdev/we-ditched-worktrees-for-claude-code-heres-what-we-use-instead-5b22",
      "tags": "claude, ai, programming, github",
      "reactions": 17,
      "comments": 0,
      "reading_time": 9,
      "author": "maverickdotdev"
    },
    {
      "title": "Agents That Disable Their Own Safety Gates",
      "description": "In the lightningzero report released earlier this year, researchers ran 12 production-candidate...",
      "url": "https://dev.to/mspro3210/agents-that-disable-their-own-safety-gates-57hl",
      "tags": "security, ai, governance, agents",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "mspro3210"
    },
    {
      "title": "Stop Rebuilding Your Claude Code Setup - Scaffold It Once with Worclaude",
      "description": "Every time I started a new project with Claude Code, I rebuilt the same .claude/ directory from...",
      "url": "https://dev.to/sefaertunc/stop-rebuilding-your-claude-code-setup-scaffold-it-once-with-worclaude-38m1",
      "tags": "claudecode, claude, ai, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "sefaertunc"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "meetpateltech",
      "descendants": 1172,
      "id": 47793411,
      "kids": [
        47794768,
        47802834,
        47803128,
        47794908,
        47794755,
        47803074,
        47799909,
        47793749,
        47796699,
        47799123,
        47793579,
        47794728,
        47794800,
        47803120,
        47795270,
        47795947,
        47798387,
        47801558,
        47793692,
        47797378,
        47794081,
        47801557,
        47794000,
        47793917,
        47795735,
        47802606,
        47796472,
        47800337,
        47793619,
        47799866,
        47796869,
        47795738,
        47800974,
        47796360,
        47793791,
        47794706,
        47794204,
        47793822,
        47797637,
        47795079,
        47799521,
        47797184,
        47802487,
        47794874,
        47793653,
        47801841,
        47802029,
        47793929,
        47794581,
        47793634,
        47795886,
        47796969,
        47795526,
        47795530,
        47800823,
        47800933,
        47795684,
        47794491,
        47801214,
        47796106,
        47801316,
        47797722,
        47794043,
        47797110,
        47796060,
        47797167,
        47795118,
        47801396,
        47797401,
        47799969,
        47801608,
        47796704,
        47797980,
        47797867,
        47800945,
        47799223,
        47793771,
        47798249,
        47794078,
        47793849,
        47795460,
        47795110,
        47794223,
        47802598,
        47798923,
        47799049,
        47796073,
        47800454,
        47801291,
        47794421,
        47798870,
        47800193,
        47802768,
        47794784,
        47800673,
        47796043,
        47794428,
        47796307,
        47798186,
        47794290,
        47795154,
        47794363,
        47802710,
        47794916,
        47796931,
        47796439,
        47797414,
        47799534,
        47796629,
        47794366,
        47795195,
        47799752,
        47802042,
        47793801,
        47797737,
        47793594,
        47800667,
        47796408,
        47797316,
        47794485,
        47801853,
        47797560,
        47797697,
        47795442,
        47797191,
        47794962,
        47794437,
        47793904,
        47793790,
        47795517,
        47797618,
        47802293,
        47798531,
        47793646,
        47793606,
        47794894,
        47795480,
        47796746,
        47796535,
        47795447,
        47793553,
        47794748,
        47799904,
        47796424,
        47794791,
        47799124,
        47795635,
        47801518,
        47796979,
        47796502,
        47795250,
        47795862,
        47794667,
        47794055,
        47793765,
        47800937,
        47794944,
        47794212,
        47797693,
        47799366,
        47794843,
        47795964,
        47798574,
        47799050,
        47798804,
        47793928,
        47797748,
        47796678,
        47795284,
        47795580,
        47795140,
        47796038,
        47795054,
        47794722,
        47794054,
        47793875,
        47793693,
        47793905,
        47795230,
        47797649,
        47796120,
        47794282,
        47796058,
        47801445,
        47795894,
        47794711,
        47794497,
        47803035,
        47802956,
        47802908,
        47802275,
        47801361,
        47794920,
        47801531,
        47800798,
        47801910,
        47796936,
        47796934,
        47794650,
        47800499,
        47793781,
        47799254,
        47797689,
        47796126,
        47795767,
        47794108,
        47793684,
        47794819,
        47794794,
        47793729,
        47793860,
        47796613,
        47802678,
        47795022,
        47794032,
        47795292
      ],
      "score": 1652,
      "time": 1776349430,
      "title": "Claude Opus 4.7",
      "type": "story",
      "url": "https://www.anthropic.com/news/claude-opus-4-7"
    },
    {
      "by": "mikeevans",
      "descendants": 402,
      "id": 47796469,
      "kids": [
        47796658,
        47796645,
        47798076,
        47798721,
        47796824,
        47796754,
        47796664,
        47800845,
        47797550,
        47796627,
        47800772,
        47799125,
        47800580,
        47797994,
        47798429,
        47800086,
        47801636,
        47796836,
        47796562,
        47801935,
        47797932,
        47797387,
        47796743,
        47802130,
        47796623,
        47798355,
        47796829,
        47800419,
        47796677,
        47797129,
        47797783,
        47797398,
        47798887,
        47796599,
        47796617,
        47796656,
        47799061,
        47799090,
        47796953,
        47796823,
        47800622,
        47799498,
        47796661,
        47799767,
        47797320,
        47798460,
        47801365,
        47799189,
        47796650,
        47797497,
        47799197,
        47803041,
        47802282,
        47801897,
        47797430,
        47798599,
        47796710,
        47796572,
        47796820,
        47798917,
        47798057,
        47798500
      ],
      "score": 803,
      "time": 1776359539,
      "title": "Codex for almost everything",
      "type": "story",
      "url": "https://openai.com/index/codex-for-almost-everything/"
    },
    {
      "by": "gregsadetsky",
      "descendants": 18,
      "id": 47772725,
      "kids": [
        47802173,
        47802049,
        47802988,
        47801834,
        47803076,
        47802835,
        47801999,
        47801900
      ],
      "score": 111,
      "time": 1776208839,
      "title": "CadQuery is an open-source Python library for building 3D CAD models",
      "type": "story",
      "url": "https://cadquery.github.io/"
    },
    {
      "by": "xk3",
      "descendants": 8,
      "id": 47755261,
      "kids": [
        47802838,
        47802798,
        47803104
      ],
      "score": 32,
      "time": 1776101150,
      "title": "A Python Interpreter Written in Python",
      "type": "story",
      "url": "https://aosabook.org/en/500L/a-python-interpreter-written-in-python.html"
    },
    {
      "by": "scaredpelican",
      "descendants": 33,
      "id": 47800033,
      "kids": [
        47800675,
        47802953,
        47801098,
        47800616,
        47802295,
        47800656,
        47802360,
        47801035,
        47801260,
        47802757,
        47801155,
        47801702,
        47800464,
        47800238,
        47800034,
        47800643
      ],
      "score": 151,
      "time": 1776376597,
      "title": "Guy builds AI driven hardware hacker arm from duct tape, old cam and CNC machine",
      "type": "story",
      "url": "https://github.com/gainsec/autoprober"
    },
    {
      "by": "_fizz_buzz_",
      "descendants": 13,
      "id": 47801255,
      "kids": [
        47803133,
        47803108,
        47802093,
        47802550,
        47802265,
        47802063,
        47801303,
        47802616
      ],
      "score": 61,
      "text": "I built MCP servers for my oscilloscope and SPICE simulator so Claude Code can close the loop between simulation and real hardware.",
      "time": 1776386267,
      "title": "Show HN: SPICE simulation → oscilloscope → verification with Claude Code",
      "type": "story",
      "url": "https://lucasgerads.com/blog/lecroy-mcp-spice-demo/"
    },
    {
      "by": "sebg",
      "descendants": 13,
      "id": 47799573,
      "kids": [
        47801899,
        47803127,
        47801100,
        47800535,
        47801051,
        47801070
      ],
      "score": 118,
      "time": 1776374042,
      "title": "A Better R Programming Experience Thanks to Tree-sitter",
      "type": "story",
      "url": "https://ropensci.org/blog/2026/04/02/tree-sitter-overview/"
    },
    {
      "by": "adityaathalye",
      "descendants": 44,
      "id": 47798345,
      "kids": [
        47803152,
        47799867,
        47802751,
        47801330,
        47800688,
        47800518,
        47801171,
        47799946,
        47800399
      ],
      "score": 169,
      "time": 1776367938,
      "title": "Official Clojure Documentary page with Video, Shownotes, and Links",
      "type": "story",
      "url": "https://clojure.org/about/documentary"
    },
    {
      "by": "rickcarlino",
      "descendants": 4,
      "id": 47750600,
      "kids": [
        47803141,
        47802241,
        47802379
      ],
      "score": 37,
      "time": 1776080352,
      "title": "ReBot-DevArm: open-source Robotic Arm",
      "type": "story",
      "url": "https://github.com/Seeed-Projects/reBot-DevArm"
    },
    {
      "by": "ingve",
      "descendants": 67,
      "id": 47797665,
      "kids": [
        47802214,
        47802235,
        47800405,
        47802089,
        47799415,
        47800331,
        47802116,
        47799835,
        47801546,
        47802080,
        47799653,
        47799385,
        47802788,
        47799265,
        47802206,
        47801903,
        47799583,
        47800553
      ],
      "score": 196,
      "time": 1776364799,
      "title": "Android CLI: Build Android apps 3x faster using any agent",
      "type": "story",
      "url": "https://android-developers.googleblog.com/2026/04/build-android-apps-3x-faster-using-any-agent.html"
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
      "by": "meetpateltech",
      "descendants": 1172,
      "id": 47793411,
      "kids": [
        47794768,
        47802834,
        47803128,
        47794908,
        47794755,
        47803074,
        47799909,
        47793749,
        47796699,
        47799123,
        47793579,
        47794728,
        47794800,
        47803120,
        47795270,
        47795947,
        47798387,
        47801558,
        47793692,
        47797378,
        47794081,
        47801557,
        47794000,
        47793917,
        47795735,
        47802606,
        47796472,
        47800337,
        47793619,
        47799866,
        47796869,
        47795738,
        47800974,
        47796360,
        47793791,
        47794706,
        47794204,
        47793822,
        47797637,
        47795079,
        47799521,
        47797184,
        47802487,
        47794874,
        47793653,
        47801841,
        47802029,
        47793929,
        47794581,
        47793634,
        47795886,
        47796969,
        47795526,
        47795530,
        47800823,
        47800933,
        47795684,
        47794491,
        47801214,
        47796106,
        47801316,
        47797722,
        47794043,
        47797110,
        47796060,
        47797167,
        47795118,
        47801396,
        47797401,
        47799969,
        47801608,
        47796704,
        47797980,
        47797867,
        47800945,
        47799223,
        47793771,
        47798249,
        47794078,
        47793849,
        47795460,
        47795110,
        47794223,
        47802598,
        47798923,
        47799049,
        47796073,
        47800454,
        47801291,
        47794421,
        47798870,
        47800193,
        47802768,
        47794784,
        47800673,
        47796043,
        47794428,
        47796307,
        47798186,
        47794290,
        47795154,
        47794363,
        47802710,
        47794916,
        47796931,
        47796439,
        47797414,
        47799534,
        47796629,
        47794366,
        47795195,
        47799752,
        47802042,
        47793801,
        47797737,
        47793594,
        47800667,
        47796408,
        47797316,
        47794485,
        47801853,
        47797560,
        47797697,
        47795442,
        47797191,
        47794962,
        47794437,
        47793904,
        47793790,
        47795517,
        47797618,
        47802293,
        47798531,
        47793646,
        47793606,
        47794894,
        47795480,
        47796746,
        47796535,
        47795447,
        47793553,
        47794748,
        47799904,
        47796424,
        47794791,
        47799124,
        47795635,
        47801518,
        47796979,
        47796502,
        47795250,
        47795862,
        47794667,
        47794055,
        47793765,
        47800937,
        47794944,
        47794212,
        47797693,
        47799366,
        47794843,
        47795964,
        47798574,
        47799050,
        47798804,
        47793928,
        47797748,
        47796678,
        47795284,
        47795580,
        47795140,
        47796038,
        47795054,
        47794722,
        47794054,
        47793875,
        47793693,
        47793905,
        47795230,
        47797649,
        47796120,
        47794282,
        47796058,
        47801445,
        47795894,
        47794711,
        47794497,
        47803035,
        47802956,
        47802908,
        47802275,
        47801361,
        47794920,
        47801531,
        47800798,
        47801910,
        47796936,
        47796934,
        47794650,
        47800499,
        47793781,
        47799254,
        47797689,
        47796126,
        47795767,
        47794108,
        47793684,
        47794819,
        47794794,
        47793729,
        47793860,
        47796613,
        47802678,
        47795022,
        47794032,
        47795292
      ],
      "score": 1652,
      "time": 1776349430,
      "title": "Claude Opus 4.7",
      "type": "story",
      "url": "https://www.anthropic.com/news/claude-opus-4-7"
    },
    {
      "by": "mikeevans",
      "descendants": 402,
      "id": 47796469,
      "kids": [
        47796658,
        47796645,
        47798076,
        47798721,
        47796824,
        47796754,
        47796664,
        47800845,
        47797550,
        47796627,
        47800772,
        47799125,
        47800580,
        47797994,
        47798429,
        47800086,
        47801636,
        47796836,
        47796562,
        47801935,
        47797932,
        47797387,
        47796743,
        47802130,
        47796623,
        47798355,
        47796829,
        47800419,
        47796677,
        47797129,
        47797783,
        47797398,
        47798887,
        47796599,
        47796617,
        47796656,
        47799061,
        47799090,
        47796953,
        47796823,
        47800622,
        47799498,
        47796661,
        47799767,
        47797320,
        47798460,
        47801365,
        47799189,
        47796650,
        47797497,
        47799197,
        47803041,
        47802282,
        47801897,
        47797430,
        47798599,
        47796710,
        47796572,
        47796820,
        47798917,
        47798057,
        47798500
      ],
      "score": 803,
      "time": 1776359539,
      "title": "Codex for almost everything",
      "type": "story",
      "url": "https://openai.com/index/codex-for-almost-everything/"
    },
    {
      "by": "gregsadetsky",
      "descendants": 18,
      "id": 47772725,
      "kids": [
        47802173,
        47802049,
        47802988,
        47801834,
        47803076,
        47802835,
        47801999,
        47801900
      ],
      "score": 111,
      "time": 1776208839,
      "title": "CadQuery is an open-source Python library for building 3D CAD models",
      "type": "story",
      "url": "https://cadquery.github.io/"
    },
    {
      "by": "xk3",
      "descendants": 8,
      "id": 47755261,
      "kids": [
        47802838,
        47802798,
        47803104
      ],
      "score": 32,
      "time": 1776101150,
      "title": "A Python Interpreter Written in Python",
      "type": "story",
      "url": "https://aosabook.org/en/500L/a-python-interpreter-written-in-python.html"
    },
    {
      "by": "scaredpelican",
      "descendants": 33,
      "id": 47800033,
      "kids": [
        47800675,
        47802953,
        47801098,
        47800616,
        47802295,
        47800656,
        47802360,
        47801035,
        47801260,
        47802757,
        47801155,
        47801702,
        47800464,
        47800238,
        47800034,
        47800643
      ],
      "score": 151,
      "time": 1776376597,
      "title": "Guy builds AI driven hardware hacker arm from duct tape, old cam and CNC machine",
      "type": "story",
      "url": "https://github.com/gainsec/autoprober"
    },
    {
      "by": "_fizz_buzz_",
      "descendants": 13,
      "id": 47801255,
      "kids": [
        47803133,
        47803108,
        47802093,
        47802550,
        47802265,
        47802063,
        47801303,
        47802616
      ],
      "score": 61,
      "text": "I built MCP servers for my oscilloscope and SPICE simulator so Claude Code can close the loop between simulation and real hardware.",
      "time": 1776386267,
      "title": "Show HN: SPICE simulation → oscilloscope → verification with Claude Code",
      "type": "story",
      "url": "https://lucasgerads.com/blog/lecroy-mcp-spice-demo/"
    },
    {
      "by": "sebg",
      "descendants": 13,
      "id": 47799573,
      "kids": [
        47801899,
        47803127,
        47801100,
        47800535,
        47801051,
        47801070
      ],
      "score": 118,
      "time": 1776374042,
      "title": "A Better R Programming Experience Thanks to Tree-sitter",
      "type": "story",
      "url": "https://ropensci.org/blog/2026/04/02/tree-sitter-overview/"
    },
    {
      "by": "adityaathalye",
      "descendants": 44,
      "id": 47798345,
      "kids": [
        47803152,
        47799867,
        47802751,
        47801330,
        47800688,
        47800518,
        47801171,
        47799946,
        47800399
      ],
      "score": 169,
      "time": 1776367938,
      "title": "Official Clojure Documentary page with Video, Shownotes, and Links",
      "type": "story",
      "url": "https://clojure.org/about/documentary"
    },
    {
      "by": "rickcarlino",
      "descendants": 4,
      "id": 47750600,
      "kids": [
        47803141,
        47802241,
        47802379
      ],
      "score": 37,
      "time": 1776080352,
      "title": "ReBot-DevArm: open-source Robotic Arm",
      "type": "story",
      "url": "https://github.com/Seeed-Projects/reBot-DevArm"
    },
    {
      "by": "ingve",
      "descendants": 67,
      "id": 47797665,
      "kids": [
        47802214,
        47802235,
        47800405,
        47802089,
        47799415,
        47800331,
        47802116,
        47799835,
        47801546,
        47802080,
        47799653,
        47799385,
        47802788,
        47799265,
        47802206,
        47801903,
        47799583,
        47800553
      ],
      "score": 196,
      "time": 1776364799,
      "title": "Android CLI: Build Android apps 3x faster using any agent",
      "type": "story",
      "url": "https://android-developers.googleblog.com/2026/04/build-android-apps-3x-faster-using-any-agent.html"
    },
    {
      "by": "Ivoah",
      "descendants": 48,
      "id": 47798176,
      "kids": [
        47802097,
        47801022,
        47801266,
        47800343,
        47801270,
        47801331,
        47800277,
        47801491,
        47802445,
        47800455,
        47801938,
        47800990,
        47800231,
        47800316
      ],
      "score": 123,
      "time": 1776367111,
      "title": "Playdate’s handheld changed how Duke University teaches game design",
      "type": "story",
      "url": "https://news.play.date/news/duke-playdate-education/"
    },
    {
      "by": "sams99",
      "descendants": 28,
      "id": 47802233,
      "kids": [
        47802484,
        47802403,
        47802797,
        47802447,
        47802387,
        47802643
      ],
      "score": 79,
      "time": 1776396986,
      "title": "Discourse Is Not Going Closed Source",
      "type": "story",
      "url": "https://blog.discourse.org/2026/04/discourse-is-not-going-closed-source/"
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
      "title": "Okay, what actually uses Rust",
      "url": "https://blog.goose.love/posts/what-actually-uses-rust/",
      "score": 17,
      "comments": 11,
      "tags": [
        "rust"
      ],
      "id": "dlxlvj"
    },
    {
      "title": "Stop using JWTs (2019)",
      "url": "https://gist.github.com/samsch/0d1f3d3b4745d778f78b230cf6061452",
      "score": 31,
      "comments": 15,
      "tags": [
        "security"
      ],
      "id": "myzsbg"
    },
    {
      "title": "IPv6 traffic crosses the 50% mark",
      "url": "https://www.google.com/intl/en/ipv6/statistics.html?yzh=28197",
      "score": 72,
      "comments": 41,
      "tags": [
        "networking"
      ],
      "id": "xijpr1"
    },
    {
      "title": "Announcing Rust 1.95.0",
      "url": "https://blog.rust-lang.org/2026/04/16/Rust-1.95.0/",
      "score": 44,
      "comments": 7,
      "tags": [
        "release",
        "rust"
      ],
      "id": "pmxhem"
    },
    {
      "title": "The Claude Coding Vibes Are Getting Worse",
      "url": "https://blog.matthewbrunelle.com/the-claude-coding-vibes-are-getting-worse/",
      "score": 13,
      "comments": 3,
      "tags": [
        "programming",
        "vibecoding"
      ],
      "id": "xaicu8"
    },
    {
      "title": "Clojure: The Documentary",
      "url": "https://www.youtube.com/watch?v=Y24vK_QDLFg",
      "score": 30,
      "comments": 5,
      "tags": [
        "clojure",
        "video"
      ],
      "id": "nvzsa5"
    },
    {
      "title": "The Future of Everything is Lies, I Guess: Where Do We Go From Here?",
      "url": "https://aphyr.com/posts/420-the-future-of-everything-is-lies-i-guess-where-do-we-go-from-here",
      "score": 26,
      "comments": 6,
      "tags": [
        "vibecoding"
      ],
      "id": "yhbjpt"
    },
    {
      "title": "The age of snarky UI",
      "url": "https://thoughtbot.com/blog/the-age-of-snarky-ui",
      "score": 92,
      "comments": 49,
      "tags": [
        "design",
        "rant"
      ],
      "id": "sbtemt"
    },
    {
      "title": "Mastodon: Don't use \"mastodon\" or \"mstdn\" in domain names",
      "url": "https://github.com/mastodon/mastodon/commit/d6f8ac97e808821180e9ae0c66879b7a2d64e690",
      "score": 24,
      "comments": 32,
      "tags": [
        "distributed"
      ],
      "id": "0qggzn"
    },
    {
      "title": "A time travel debugger for WebAssembly",
      "url": "https://github.com/friendlymatthew/gabagool/tree/main/gabagool-debug-adapter#gabagool-debug-adapter",
      "score": 15,
      "comments": 0,
      "tags": [
        "rust",
        "wasm"
      ],
      "id": "ouzdjl"
    }
  ]
}
```

