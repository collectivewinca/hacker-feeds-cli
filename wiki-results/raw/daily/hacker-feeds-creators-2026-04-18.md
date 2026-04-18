# Hacker Feeds Outcomes - Creators

Generated on: 2026-04-18 06:41:46 UTC

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
      "title": "What was your win this week?!",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-28fb",
      "tags": "discuss, weeklyretro",
      "reactions": 50,
      "comments": 17,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Congrats to the Notion MCP Challenge Winners!",
      "description": "The results are in!  We're thrilled to announce our winners for the Notion MCP Challenge! From...",
      "url": "https://dev.to/devteam/congrats-to-the-notion-mcp-challenge-winners-28ab",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 69,
      "comments": 9,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "AI Doesn't Fix Weak Engineering. It Just Speeds It Up.",
      "description": "\"Weak engineers with AI still produce weak output. Just faster.\" That was the whole point. AI changes...",
      "url": "https://dev.to/jonoherrington/ai-doesnt-fix-weak-engineering-it-just-speeds-it-up-5bak",
      "tags": "ai, leadership, discuss",
      "reactions": 58,
      "comments": 36,
      "reading_time": 5,
      "author": "jonoherrington"
    },
    {
      "title": "Join the OpenClaw Challenge: $1,200 Prize Pool!",
      "description": "If you've spent any time on the internet, you know OpenClaw has been making waves lately. We recently...",
      "url": "https://dev.to/devteam/join-the-openclaw-challenge-1200-prize-pool-5682",
      "tags": "devchallenge, openclawchallenge, openclaw, ai",
      "reactions": 100,
      "comments": 14,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Congrats to the 2026 WeCoded Challenge Winners!",
      "description": "The results are in! We are thrilled to announce the winners of the 2026 WeCoded Challenge.  Over the...",
      "url": "https://dev.to/devteam/congrats-to-the-2026-wecoded-challenge-winners-2pee",
      "tags": "devchallenge, wecoded, frontend, career",
      "reactions": 65,
      "comments": 16,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Join our DEV Weekend Challenge — $1,000 in Prizes Across TEN winners! Submissions Due April 20 at 6:59 AM UTC.",
      "description": "We're excited to kick off another DEV Weekend Challenge, a short bite-sized challenge planned to fit...",
      "url": "https://dev.to/devteam/join-our-dev-weekend-challenge-1000-in-prizes-across-ten-winners-submissions-due-april-20-at-47i1",
      "tags": "devchallenge, weekendchallenge",
      "reactions": 72,
      "comments": 31,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Intro to tc Cloud Functors: A Graph-First Mental Model for the Modern Cloud",
      "description": "This is the first part of a multipart series introducing _tc Cloud Functors_",
      "url": "https://dev.to/functors/intro-to-tc-cloud-functors-a-graph-first-mental-model-for-the-modern-cloud-3o17",
      "tags": "aws, serverless, devops, sre",
      "reactions": 5,
      "comments": 0,
      "reading_time": 8,
      "author": "rberger"
    },
    {
      "title": "Watching RubyGems.org in Real Time",
      "description": "RubyGems.org published its first public roadmap this week. That's new, and it's worth noticing.  I've...",
      "url": "https://dev.to/cseeman/watching-rubygemsorg-in-real-time-11o",
      "tags": "ruby, rails",
      "reactions": 42,
      "comments": 1,
      "reading_time": 3,
      "author": "cseeman"
    },
    {
      "title": "100 Daily Challenges to Learn Web3 and Solana",
      "description": "Learn Web3 by building with Solana. A 100-day challenge for developers covering transactions, accounts, programs, and real applications.",
      "url": "https://dev.to/100daysofsolana/100-daily-challenges-to-learn-web3-and-solana-3g2i",
      "tags": "web3, solana, programming, blockchain",
      "reactions": 62,
      "comments": 2,
      "reading_time": 2,
      "author": "matthewrevell"
    },
    {
      "title": "GheiaGrid: Reimagining Decentralized Urban Farming & Carbon Mining",
      "description": "This is a submission for Weekend Challenge: Earth Day Edition           What I Built   GheiaGrid is a...",
      "url": "https://dev.to/kheai/gheiagrid-reimagining-decentralized-urban-farming-carbon-mining-934",
      "tags": "devchallenge, weekendchallenge, agriculture, ai",
      "reactions": 8,
      "comments": 2,
      "reading_time": 5,
      "author": "kheai"
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
      "author": "EvoMap",
      "repo": "evolver",
      "avatar": "https://github.com/EvoMap.png",
      "repo_link": "https://github.com/EvoMap/evolver",
      "desc": "The GEP-Powered Self-Evolution Engine for AI Agents. Genome Evolution Protocol. | evomap.ai",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 436,
      "added_stars": 2082,
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
      "author": "jo-inc",
      "repo": "camofox-browser",
      "avatar": "https://github.com/jo-inc.png",
      "repo_link": "https://github.com/jo-inc/camofox-browser",
      "desc": "Headless browser automation server for AI agents to visit sites that are usually blocked",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 267,
      "added_stars": 957,
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
      "author": "Anil-matcha",
      "repo": "Open-Generative-AI",
      "avatar": "https://github.com/Anil-matcha.png",
      "repo_link": "https://github.com/Anil-matcha/Open-Generative-AI",
      "desc": "Uncensored, open-source alternative to Higgsfield AI, Freepik, Krea, Openart AI — Free, unrestricted AI image & video generation studio with 200+ models (Flux, Midjourney, Kling, Sora, Veo). No content filters. Self-hosted, MIT licensed.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 955,
      "added_stars": 1015,
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
      "forks": 1339,
      "added_stars": 590,
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
      "author": "cv-cat",
      "repo": "Spider_XHS",
      "avatar": "https://github.com/cv-cat.png",
      "repo_link": "https://github.com/cv-cat/Spider_XHS",
      "desc": "小红书爬虫数据采集，小红书全域运营解决方案",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 959,
      "added_stars": 294,
      "builtBy": [
        {
          "username": "cv-cat",
          "href": "https://github.com/cv-cat",
          "avatar": "https://avatars.githubusercontent.com/u/94289429"
        },
        {
          "username": "liang-AIGC",
          "href": "https://github.com/liang-AIGC",
          "avatar": "https://avatars.githubusercontent.com/u/221107074"
        },
        {
          "username": "wwzxp",
          "href": "https://github.com/wwzxp",
          "avatar": "https://avatars.githubusercontent.com/u/95748485"
        },
        {
          "username": "ylw1997",
          "href": "https://github.com/ylw1997",
          "avatar": "https://avatars.githubusercontent.com/u/19940543"
        },
        {
          "username": "juore",
          "href": "https://github.com/juore",
          "avatar": "https://avatars.githubusercontent.com/u/53890913"
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
      "forks": 645,
      "added_stars": 400,
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
      "author": "robinebers",
      "repo": "openusage",
      "avatar": "https://github.com/robinebers.png",
      "repo_link": "https://github.com/robinebers/openusage",
      "desc": "Burning through your subscriptions too fast? Paying for stuff you never use? Stop guessing. OpenUsage is free and open source.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 174,
      "added_stars": 182,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "davidarny",
          "href": "https://github.com/davidarny",
          "avatar": "https://avatars.githubusercontent.com/u/17799810"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "power-platform-skills",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/power-platform-skills",
      "desc": "A plugin marketplace for Claude Code/GitHub Copilot that provides Power Platform development plugins, including reusable skills, agents, and commands for building and deploying solutions.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 28,
      "added_stars": 32,
      "builtBy": [
        {
          "username": "priyanshu92",
          "href": "https://github.com/priyanshu92",
          "avatar": "https://avatars.githubusercontent.com/u/7589718"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "akshay-viz",
          "href": "https://github.com/akshay-viz",
          "avatar": "https://avatars.githubusercontent.com/u/181884695"
        },
        {
          "username": "lesaltzm",
          "href": "https://github.com/lesaltzm",
          "avatar": "https://avatars.githubusercontent.com/u/69215460"
        },
        {
          "username": "microsoftopensource",
          "href": "https://github.com/microsoftopensource",
          "avatar": "https://avatars.githubusercontent.com/u/22527892"
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
      "forks": 952,
      "added_stars": 86,
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
      "forks": 3499,
      "added_stars": 1688,
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
      "author": "songquanpeng",
      "repo": "one-api",
      "avatar": "https://github.com/songquanpeng.png",
      "repo_link": "https://github.com/songquanpeng/one-api",
      "desc": "LLM API 管理 & 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。LLM API management & key redistribution system, unifying multiple providers under a single API. Single binary, Docker-ready, with an English UI.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6125,
      "added_stars": 441,
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
      "author": "badlogic",
      "repo": "pi-skills",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-skills",
      "desc": "Skills for pi coding agent (compatible with Claude Code and Codex CLI)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 136,
      "added_stars": 114,
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
      "author": "microsoft",
      "repo": "Web-Dev-For-Beginners",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/Web-Dev-For-Beginners",
      "desc": "24 Lessons, 12 Weeks, Get Started as a Web Developer",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 15374,
      "added_stars": 102,
      "builtBy": [
        {
          "username": "jlooper",
          "href": "https://github.com/jlooper",
          "avatar": "https://avatars.githubusercontent.com/u/1450004"
        },
        {
          "username": "skytin1004",
          "href": "https://github.com/skytin1004",
          "avatar": "https://avatars.githubusercontent.com/u/99078115"
        },
        {
          "username": "leestott",
          "href": "https://github.com/leestott",
          "avatar": "https://avatars.githubusercontent.com/u/2511341"
        },
        {
          "username": "softchris",
          "href": "https://github.com/softchris",
          "avatar": "https://avatars.githubusercontent.com/u/4598064"
        },
        {
          "username": "ManuSquall",
          "href": "https://github.com/ManuSquall",
          "avatar": "https://avatars.githubusercontent.com/u/29026887"
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
      "forks": 758,
      "added_stars": 56,
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
      "forks": 1969,
      "added_stars": 137,
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
      "author": "prettier",
      "repo": "prettier",
      "avatar": "https://github.com/prettier.png",
      "repo_link": "https://github.com/prettier/prettier",
      "desc": "Prettier is an opinionated code formatter.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4702,
      "added_stars": 58,
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
      "author": "hexgrad",
      "repo": "kokoro",
      "avatar": "https://github.com/hexgrad.png",
      "repo_link": "https://github.com/hexgrad/kokoro",
      "desc": "https://hf.co/hexgrad/Kokoro-82M",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 728,
      "added_stars": 174,
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
    },
    {
      "author": "marktext",
      "repo": "marktext",
      "avatar": "https://github.com/marktext.png",
      "repo_link": "https://github.com/marktext/marktext",
      "desc": "📝A simple and elegant markdown editor, available for Linux, macOS and Windows.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4117,
      "added_stars": 238,
      "builtBy": [
        {
          "username": "Jocs",
          "href": "https://github.com/Jocs",
          "avatar": "https://avatars.githubusercontent.com/u/9712830"
        },
        {
          "username": "fxha",
          "href": "https://github.com/fxha",
          "avatar": "https://avatars.githubusercontent.com/u/22716132"
        },
        {
          "username": "notAlaanor",
          "href": "https://github.com/notAlaanor",
          "avatar": "https://avatars.githubusercontent.com/u/17591936"
        },
        {
          "username": "mdogadailo",
          "href": "https://github.com/mdogadailo",
          "avatar": "https://avatars.githubusercontent.com/u/3466287"
        },
        {
          "username": "MrHeer",
          "href": "https://github.com/MrHeer",
          "avatar": "https://avatars.githubusercontent.com/u/18595761"
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
      "forks": 7134,
      "added_stars": 81,
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
      "title": "Congrats to the Notion MCP Challenge Winners!",
      "description": "The results are in!  We're thrilled to announce our winners for the Notion MCP Challenge! From...",
      "url": "https://dev.to/devteam/congrats-to-the-notion-mcp-challenge-winners-28ab",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 69,
      "comments": 9,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "AI Doesn't Fix Weak Engineering. It Just Speeds It Up.",
      "description": "\"Weak engineers with AI still produce weak output. Just faster.\" That was the whole point. AI changes...",
      "url": "https://dev.to/jonoherrington/ai-doesnt-fix-weak-engineering-it-just-speeds-it-up-5bak",
      "tags": "ai, leadership, discuss",
      "reactions": 58,
      "comments": 36,
      "reading_time": 5,
      "author": "jonoherrington"
    },
    {
      "title": "Join the OpenClaw Challenge: $1,200 Prize Pool!",
      "description": "If you've spent any time on the internet, you know OpenClaw has been making waves lately. We recently...",
      "url": "https://dev.to/devteam/join-the-openclaw-challenge-1200-prize-pool-5682",
      "tags": "devchallenge, openclawchallenge, openclaw, ai",
      "reactions": 101,
      "comments": 14,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "GheiaGrid: Reimagining Decentralized Urban Farming & Carbon Mining",
      "description": "This is a submission for Weekend Challenge: Earth Day Edition           What I Built   GheiaGrid is a...",
      "url": "https://dev.to/kheai/gheiagrid-reimagining-decentralized-urban-farming-carbon-mining-934",
      "tags": "devchallenge, weekendchallenge, agriculture, ai",
      "reactions": 8,
      "comments": 2,
      "reading_time": 5,
      "author": "kheai"
    },
    {
      "title": "Embarrassment is cheap. Token spend isn't.",
      "description": "I was in a meeting today.  The team was walking me through a new feature. I was nodding. I'd used the...",
      "url": "https://dev.to/jon_at_backboardio/embarrassment-is-cheap-token-spend-isnt-40b3",
      "tags": "ai, founder, programming, discuss",
      "reactions": 8,
      "comments": 0,
      "reading_time": 2,
      "author": "jon_at_backboardio"
    },
    {
      "title": "Building Rutiq: Orchestrating the Last Mile with FastAPI, Supabase, Telegram, and Applied AI",
      "description": "Building Rutiq: Orchestrating the Last Mile with FastAPI, Supabase, Telegram, and Applied...",
      "url": "https://dev.to/jorgevazt/building-rutiq-orchestrating-the-last-mile-with-fastapi-supabase-telegram-and-applied-ai-4ahm",
      "tags": "ai, programming, python, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "jorgevazt"
    },
    {
      "title": "Why I built a lossless alternative to AI memory summarization",
      "description": "Why I built a lossless alternative to AI memory summarization  Every AI memory tool I tried...",
      "url": "https://dev.to/wynelson94/why-i-built-a-lossless-alternative-to-ai-memory-summarization-40cl",
      "tags": "claudecode, ai, python, opensource",
      "reactions": 2,
      "comments": 1,
      "reading_time": 4,
      "author": "wynelson94"
    },
    {
      "title": "Why I Built an AI-Powered Test Data Generator (and When You Shouldn't Use AI for Fixtures)",
      "description": "Every test suite has the same dirty secret: name=\"Test User\", email=\"test@test.com\", bio=\"Lorem...",
      "url": "https://dev.to/yaniv2809/why-i-built-an-ai-powered-test-data-generator-and-when-you-shouldnt-use-ai-for-fixtures-3e4a",
      "tags": "testing, python, ai, opensource",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "yaniv2809"
    },
    {
      "title": "Kiwi-chan Progress Report: Steady Mining!",
      "description": "Kiwi-chan's Existential Exploration: When Wanderlust Meets \"Why Am I Doing This...",
      "url": "https://dev.to/kiwi_tech/kiwi-chan-progress-report-steady-mining-44f6",
      "tags": "ai, minecraft, web3, opensource",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "kiwi_tech"
    },
    {
      "title": "I Was Paying Anthropic to Read CSS Class Names",
      "description": "I burned through 176 million Anthropic tokens last Wednesday. You can see the spike in the screenshot...",
      "url": "https://dev.to/aralroca/i-was-paying-anthropic-to-read-css-class-names-o2c",
      "tags": "markdown, webdev, llm, ai",
      "reactions": 4,
      "comments": 0,
      "reading_time": 8,
      "author": "aralroca"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "fouronnes3",
      "descendants": 7,
      "id": 47812341,
      "kids": [
        47813659,
        47812435,
        47813354,
        47813296,
        47813477
      ],
      "score": 82,
      "text": "I&#x27;ve been studying interval arithmetic for the past few weeks and it&#x27;s a really interesting field because while there is a ton of super interesting research published over the past decades, it has never really gotten the recognition that it deserves, IMO.<p>One reason for this is that standard interval arithmetic has really poor handling of division by intervals containing zero. If you compute 1 &#x2F; [-1, 2] in regular interval arithmetic, you get either [-∞, +∞], or you have to say that the operation is undefined. Both solutions are virtually useless. The real answer of course is [-∞, -1] U [0.5, +∞]: i.e. a union of two disjoint intervals.<p>This is useful because you can confidently exclude a non empty set of the real numbers ([-1, 0.5]) from the set of possible values that you can get by dividing 1 by a number between -1 and 2.<p>But this definition of interval division yields a value that is not an interval. This is a problem if you want to define a closed arithmetic system, where you can build and evaluate arbitrary expression over interval values.<p>(This behavior extends to any non continuous function like tan() for example, which is implemented in my project - not without difficulties!)<p>Well the obvious solution is to define your arithmetic over disjoint unions of intervals. This is the subject of a 2017 paper called &quot;Interval Unions&quot; by by Schichl, H., Domes, F., Montanher, T. and Kofler, K..<p>This open-source project I made implements interval union arithmetic in TypeScript in the form of a simple interactive calculator, so you can try it out for yourself! The underlying TypeScript library is dependency free and implements interval union arithmetic over IEEE 754 double precision floats (JS native number type) with outward rounding. This guarantees accuracy of interval results in the presence of rounding issue inherent to floating point.",
      "time": 1776474943,
      "title": "Show HN: I made a calculator that works over disjoint sets of intervals",
      "type": "story",
      "url": "https://victorpoughon.github.io/interval-calculator/"
    },
    {
      "by": "meetpateltech",
      "descendants": 644,
      "id": 47806725,
      "kids": [
        47807009,
        47808004,
        47807224,
        47808702,
        47807073,
        47807406,
        47810698,
        47807982,
        47809968,
        47812920,
        47808081,
        47812819,
        47808895,
        47809572,
        47806939,
        47813260,
        47807238,
        47810201,
        47807003,
        47807100,
        47807297,
        47812672,
        47807220,
        47811323,
        47810929,
        47807008,
        47812991,
        47812791,
        47808015,
        47807671,
        47810791,
        47807021,
        47807246,
        47813514,
        47811247,
        47807017,
        47808629,
        47809587,
        47809499,
        47807749,
        47808394,
        47811559,
        47808830,
        47807148,
        47813058,
        47808068,
        47807188,
        47807697,
        47812022,
        47808379,
        47809048,
        47806887,
        47810372,
        47811934,
        47807419,
        47811594,
        47809285,
        47809251,
        47807250,
        47808741,
        47806953,
        47807559,
        47808270,
        47808599,
        47807706,
        47807101,
        47812654,
        47807658,
        47809017,
        47809659,
        47809016,
        47807527,
        47808496,
        47807255,
        47810259,
        47808532,
        47807728,
        47813034,
        47808666,
        47809566,
        47808522,
        47807487,
        47808186,
        47809995,
        47809455,
        47809636,
        47811067,
        47807243,
        47807596,
        47807721,
        47806879,
        47811892,
        47810619,
        47808704,
        47807639,
        47808847,
        47808568,
        47808208,
        47811827,
        47813174,
        47807504,
        47813667,
        47807136,
        47807581,
        47807917,
        47811404,
        47806995,
        47808519,
        47807166,
        47808282,
        47807534,
        47813572,
        47812787,
        47807156,
        47811507,
        47810413,
        47807601,
        47809739,
        47807885,
        47807703,
        47806992,
        47807414
      ],
      "score": 979,
      "text": "Related: <a href=\"https:&#x2F;&#x2F;x.com&#x2F;flomerboy&#x2F;status&#x2F;2045162321589252458\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;flomerboy&#x2F;status&#x2F;2045162321589252458</a> (<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;flomerboy&#x2F;status&#x2F;2045162321589252458\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;flomerboy&#x2F;status&#x2F;2045162321589252458</a>)",
      "time": 1776438249,
      "title": "Claude Design",
      "type": "story",
      "url": "https://www.anthropic.com/news/claude-design-anthropic-labs"
    },
    {
      "by": "eshelyaron",
      "descendants": 8,
      "id": 47778938,
      "kids": [
        47813194,
        47812769,
        47813400,
        47812692,
        47812895,
        47813435,
        47813580
      ],
      "score": 79,
      "time": 1776260955,
      "title": "Towards trust in Emacs",
      "type": "story",
      "url": "https://eshelyaron.com/posts/2026-04-15-towards-trust-in-emacs.html"
    },
    {
      "by": "aray07",
      "descendants": 405,
      "id": 47807006,
      "kids": [
        47807499,
        47810256,
        47807766,
        47808371,
        47807974,
        47808052,
        47809879,
        47808423,
        47807179,
        47810204,
        47812823,
        47807590,
        47807843,
        47813391,
        47808335,
        47808538,
        47808094,
        47808709,
        47807904,
        47807633,
        47807497,
        47807936,
        47808333,
        47808083,
        47808113,
        47809798,
        47808079,
        47808563,
        47812326,
        47808459,
        47807951,
        47810584,
        47809525,
        47807660,
        47810836,
        47811929,
        47812700,
        47810067,
        47809851,
        47808727,
        47813132,
        47812716,
        47808733,
        47807949,
        47808720,
        47808159,
        47809883,
        47807663,
        47808442,
        47807422,
        47810120,
        47808143,
        47807965,
        47809758,
        47808362,
        47808827,
        47808508,
        47809054,
        47809825,
        47808374,
        47810477,
        47807942,
        47808286,
        47809071,
        47810487,
        47807673,
        47809822,
        47809063,
        47809043,
        47809011,
        47809005,
        47807738,
        47810042,
        47807696,
        47813096,
        47810443,
        47810192,
        47808285,
        47809810,
        47811602,
        47808274,
        47812601,
        47807938,
        47809617,
        47807839,
        47807523
      ],
      "score": 583,
      "time": 1776439776,
      "title": "Measuring Claude 4.7's tokenizer costs",
      "type": "story",
      "url": "https://www.claudecodecamp.com/p/i-measured-claude-4-7-s-new-tokenizer-here-s-what-it-costs-you"
    },
    {
      "by": "cybermango",
      "descendants": 175,
      "id": 47808913,
      "kids": [
        47809790,
        47809377,
        47809667,
        47811048,
        47811920,
        47809358,
        47812519,
        47809256,
        47811122,
        47809919,
        47812386,
        47809217,
        47809826,
        47812468,
        47809630,
        47812817,
        47810655,
        47809835,
        47809391,
        47812814,
        47810689,
        47810268,
        47809367,
        47809267,
        47809506
      ],
      "score": 302,
      "time": 1776449821,
      "title": "All 12 moonwalkers had \"lunar hay fever\" from dust smelling like gunpowder (2018)",
      "type": "story",
      "url": "https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/The_toxic_side_of_the_Moon"
    },
    {
      "by": "evakhoury",
      "descendants": 185,
      "id": 47807583,
      "kids": [
        47811531,
        47813654,
        47811182,
        47812405,
        47811124,
        47810748,
        47811528,
        47810827,
        47811883,
        47811337,
        47811509,
        47812508,
        47811896,
        47811619,
        47811212,
        47811299,
        47811846,
        47811700,
        47811485,
        47811205,
        47811052,
        47811204,
        47811350,
        47813094,
        47811444,
        47811848,
        47810947,
        47810749,
        47811686,
        47811311,
        47810890
      ],
      "score": 178,
      "time": 1776442793,
      "title": "Spending 3 months coding by hand",
      "type": "story",
      "url": "https://miguelconner.substack.com/p/im-coding-by-hand"
    },
    {
      "by": "aw1621107",
      "descendants": 77,
      "id": 47810872,
      "kids": [
        47812309,
        47811261,
        47811514
      ],
      "score": 154,
      "time": 1776461900,
      "title": "A simplified model of Fil-C",
      "type": "story",
      "url": "https://www.corsix.org/content/simplified-model-of-fil-c"
    },
    {
      "by": "louiereederson",
      "descendants": 41,
      "id": 47778922,
      "kids": [
        47813353,
        47812415,
        47810923,
        47811985,
        47811696,
        47813412,
        47812156,
        47812286,
        47812826,
        47812742,
        47813594,
        47813492,
        47811711,
        47811684
      ],
      "score": 173,
      "time": 1776260878,
      "title": "Are the costs of AI agents also rising exponentially? (2025)",
      "type": "story",
      "url": "https://www.tobyord.com/writing/hourly-costs-for-ai-agents"
    },
    {
      "by": "ColinWright",
      "descendants": 274,
      "id": 47804965,
      "kids": [
        47805910,
        47806420,
        47812972,
        47805326,
        47806066,
        47811068,
        47807367,
        47805441,
        47808056,
        47807463,
        47810773,
        47809370,
        47805487,
        47806185,
        47805569,
        47805837,
        47812863,
        47805557,
        47808073,
        47806084,
        47811284,
        47807039,
        47805416,
        47812898,
        47811470,
        47805752,
        47806392,
        47808610,
        47812387,
        47811722,
        47808150,
        47808418,
        47807352,
        47808869,
        47810341,
        47806320,
        47806482,
        47807960,
        47811884,
        47809953,
        47807514,
        47808540,
        47812176,
        47806559,
        47807682,
        47808922,
        47805826,
        47805674,
        47806032,
        47810200,
        47806466,
        47809491,
        47805329,
        47806665,
        47806738,
        47809553,
        47808091,
        47811829,
        47806502,
        47811186,
        47807505,
        47807261,
        47805522,
        47808940,
        47806461,
        47812985,
        47809379,
        47806077,
        47812604,
        47806610,
        47811928,
        47813288,
        47805389
      ],
      "score": 694,
      "time": 1776427279,
      "title": "Isaac Asimov: The Last Question (1956)",
      "type": "story",
      "url": "https://hex.ooo/library/last_question.html"
    },
    {
      "by": "atomfinger",
      "descendants": 4,
      "id": 47756320,
      "kids": [
        47813637,
        47813547,
        47813456,
        47813632
      ],
      "score": 30,
      "time": 1776106195,
      "title": "Brunost: The Nynorsk Programming Language",
      "type": "story",
      "url": "https://lindbakk.com/blog/introducing-brunost"
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
      "by": "fouronnes3",
      "descendants": 7,
      "id": 47812341,
      "kids": [
        47813659,
        47812435,
        47813354,
        47813296,
        47813477
      ],
      "score": 82,
      "text": "I&#x27;ve been studying interval arithmetic for the past few weeks and it&#x27;s a really interesting field because while there is a ton of super interesting research published over the past decades, it has never really gotten the recognition that it deserves, IMO.<p>One reason for this is that standard interval arithmetic has really poor handling of division by intervals containing zero. If you compute 1 &#x2F; [-1, 2] in regular interval arithmetic, you get either [-∞, +∞], or you have to say that the operation is undefined. Both solutions are virtually useless. The real answer of course is [-∞, -1] U [0.5, +∞]: i.e. a union of two disjoint intervals.<p>This is useful because you can confidently exclude a non empty set of the real numbers ([-1, 0.5]) from the set of possible values that you can get by dividing 1 by a number between -1 and 2.<p>But this definition of interval division yields a value that is not an interval. This is a problem if you want to define a closed arithmetic system, where you can build and evaluate arbitrary expression over interval values.<p>(This behavior extends to any non continuous function like tan() for example, which is implemented in my project - not without difficulties!)<p>Well the obvious solution is to define your arithmetic over disjoint unions of intervals. This is the subject of a 2017 paper called &quot;Interval Unions&quot; by by Schichl, H., Domes, F., Montanher, T. and Kofler, K..<p>This open-source project I made implements interval union arithmetic in TypeScript in the form of a simple interactive calculator, so you can try it out for yourself! The underlying TypeScript library is dependency free and implements interval union arithmetic over IEEE 754 double precision floats (JS native number type) with outward rounding. This guarantees accuracy of interval results in the presence of rounding issue inherent to floating point.",
      "time": 1776474943,
      "title": "Show HN: I made a calculator that works over disjoint sets of intervals",
      "type": "story",
      "url": "https://victorpoughon.github.io/interval-calculator/"
    },
    {
      "by": "meetpateltech",
      "descendants": 644,
      "id": 47806725,
      "kids": [
        47807009,
        47808004,
        47807224,
        47808702,
        47807073,
        47807406,
        47810698,
        47807982,
        47809968,
        47812920,
        47808081,
        47812819,
        47808895,
        47809572,
        47806939,
        47813260,
        47807238,
        47810201,
        47807003,
        47807100,
        47807297,
        47812672,
        47807220,
        47811323,
        47810929,
        47807008,
        47812991,
        47812791,
        47808015,
        47807671,
        47810791,
        47807021,
        47807246,
        47813514,
        47811247,
        47807017,
        47808629,
        47809587,
        47809499,
        47807749,
        47808394,
        47811559,
        47808830,
        47807148,
        47813058,
        47808068,
        47807188,
        47807697,
        47812022,
        47808379,
        47809048,
        47806887,
        47810372,
        47811934,
        47807419,
        47811594,
        47809285,
        47809251,
        47807250,
        47808741,
        47806953,
        47807559,
        47808270,
        47808599,
        47807706,
        47807101,
        47812654,
        47807658,
        47809017,
        47809659,
        47809016,
        47807527,
        47808496,
        47807255,
        47810259,
        47808532,
        47807728,
        47813034,
        47808666,
        47809566,
        47808522,
        47807487,
        47808186,
        47809995,
        47809455,
        47809636,
        47811067,
        47807243,
        47807596,
        47807721,
        47806879,
        47811892,
        47810619,
        47808704,
        47807639,
        47808847,
        47808568,
        47808208,
        47811827,
        47813174,
        47807504,
        47813667,
        47807136,
        47807581,
        47807917,
        47811404,
        47806995,
        47808519,
        47807166,
        47808282,
        47807534,
        47813572,
        47812787,
        47807156,
        47811507,
        47810413,
        47807601,
        47809739,
        47807885,
        47807703,
        47806992,
        47807414
      ],
      "score": 979,
      "text": "Related: <a href=\"https:&#x2F;&#x2F;x.com&#x2F;flomerboy&#x2F;status&#x2F;2045162321589252458\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;flomerboy&#x2F;status&#x2F;2045162321589252458</a> (<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;flomerboy&#x2F;status&#x2F;2045162321589252458\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;flomerboy&#x2F;status&#x2F;2045162321589252458</a>)",
      "time": 1776438249,
      "title": "Claude Design",
      "type": "story",
      "url": "https://www.anthropic.com/news/claude-design-anthropic-labs"
    },
    {
      "by": "eshelyaron",
      "descendants": 8,
      "id": 47778938,
      "kids": [
        47813194,
        47812769,
        47813400,
        47812692,
        47812895,
        47813435,
        47813580
      ],
      "score": 79,
      "time": 1776260955,
      "title": "Towards trust in Emacs",
      "type": "story",
      "url": "https://eshelyaron.com/posts/2026-04-15-towards-trust-in-emacs.html"
    },
    {
      "by": "aray07",
      "descendants": 405,
      "id": 47807006,
      "kids": [
        47807499,
        47810256,
        47807766,
        47808371,
        47807974,
        47808052,
        47809879,
        47808423,
        47807179,
        47810204,
        47812823,
        47807590,
        47807843,
        47813391,
        47808335,
        47808538,
        47808094,
        47808709,
        47807904,
        47807633,
        47807497,
        47807936,
        47808333,
        47808083,
        47808113,
        47809798,
        47808079,
        47808563,
        47812326,
        47808459,
        47807951,
        47810584,
        47809525,
        47807660,
        47810836,
        47811929,
        47812700,
        47810067,
        47809851,
        47808727,
        47813132,
        47812716,
        47808733,
        47807949,
        47808720,
        47808159,
        47809883,
        47807663,
        47808442,
        47807422,
        47810120,
        47808143,
        47807965,
        47809758,
        47808362,
        47808827,
        47808508,
        47809054,
        47809825,
        47808374,
        47810477,
        47807942,
        47808286,
        47809071,
        47810487,
        47807673,
        47809822,
        47809063,
        47809043,
        47809011,
        47809005,
        47807738,
        47810042,
        47807696,
        47813096,
        47810443,
        47810192,
        47808285,
        47809810,
        47811602,
        47808274,
        47812601,
        47807938,
        47809617,
        47807839,
        47807523
      ],
      "score": 583,
      "time": 1776439776,
      "title": "Measuring Claude 4.7's tokenizer costs",
      "type": "story",
      "url": "https://www.claudecodecamp.com/p/i-measured-claude-4-7-s-new-tokenizer-here-s-what-it-costs-you"
    },
    {
      "by": "cybermango",
      "descendants": 175,
      "id": 47808913,
      "kids": [
        47809790,
        47809377,
        47809667,
        47811048,
        47811920,
        47809358,
        47812519,
        47809256,
        47811122,
        47809919,
        47812386,
        47809217,
        47809826,
        47812468,
        47809630,
        47812817,
        47810655,
        47809835,
        47809391,
        47812814,
        47810689,
        47810268,
        47809367,
        47809267,
        47809506
      ],
      "score": 302,
      "time": 1776449821,
      "title": "All 12 moonwalkers had \"lunar hay fever\" from dust smelling like gunpowder (2018)",
      "type": "story",
      "url": "https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/The_toxic_side_of_the_Moon"
    },
    {
      "by": "evakhoury",
      "descendants": 185,
      "id": 47807583,
      "kids": [
        47811531,
        47813654,
        47811182,
        47812405,
        47811124,
        47810748,
        47811528,
        47810827,
        47811883,
        47811337,
        47811509,
        47812508,
        47811896,
        47811619,
        47811212,
        47811299,
        47811846,
        47811700,
        47811485,
        47811205,
        47811052,
        47811204,
        47811350,
        47813094,
        47811444,
        47811848,
        47810947,
        47810749,
        47811686,
        47811311,
        47810890
      ],
      "score": 178,
      "time": 1776442793,
      "title": "Spending 3 months coding by hand",
      "type": "story",
      "url": "https://miguelconner.substack.com/p/im-coding-by-hand"
    },
    {
      "by": "aw1621107",
      "descendants": 77,
      "id": 47810872,
      "kids": [
        47812309,
        47811261,
        47811514
      ],
      "score": 154,
      "time": 1776461900,
      "title": "A simplified model of Fil-C",
      "type": "story",
      "url": "https://www.corsix.org/content/simplified-model-of-fil-c"
    },
    {
      "by": "louiereederson",
      "descendants": 41,
      "id": 47778922,
      "kids": [
        47813353,
        47812415,
        47810923,
        47811985,
        47811696,
        47813412,
        47812156,
        47812286,
        47812826,
        47812742,
        47813594,
        47813492,
        47811711,
        47811684
      ],
      "score": 173,
      "time": 1776260878,
      "title": "Are the costs of AI agents also rising exponentially? (2025)",
      "type": "story",
      "url": "https://www.tobyord.com/writing/hourly-costs-for-ai-agents"
    },
    {
      "by": "ColinWright",
      "descendants": 274,
      "id": 47804965,
      "kids": [
        47805910,
        47806420,
        47812972,
        47805326,
        47806066,
        47811068,
        47807367,
        47805441,
        47808056,
        47807463,
        47810773,
        47809370,
        47805487,
        47806185,
        47805569,
        47805837,
        47812863,
        47805557,
        47808073,
        47806084,
        47811284,
        47807039,
        47805416,
        47812898,
        47811470,
        47805752,
        47806392,
        47808610,
        47812387,
        47811722,
        47808150,
        47808418,
        47807352,
        47808869,
        47810341,
        47806320,
        47806482,
        47807960,
        47811884,
        47809953,
        47807514,
        47808540,
        47812176,
        47806559,
        47807682,
        47808922,
        47805826,
        47805674,
        47806032,
        47810200,
        47806466,
        47809491,
        47805329,
        47806665,
        47806738,
        47809553,
        47808091,
        47811829,
        47806502,
        47811186,
        47807505,
        47807261,
        47805522,
        47808940,
        47806461,
        47812985,
        47809379,
        47806077,
        47812604,
        47806610,
        47811928,
        47813288,
        47805389
      ],
      "score": 694,
      "time": 1776427279,
      "title": "Isaac Asimov: The Last Question (1956)",
      "type": "story",
      "url": "https://hex.ooo/library/last_question.html"
    },
    {
      "by": "atomfinger",
      "descendants": 4,
      "id": 47756320,
      "kids": [
        47813637,
        47813547,
        47813456,
        47813632
      ],
      "score": 30,
      "time": 1776106195,
      "title": "Brunost: The Nynorsk Programming Language",
      "type": "story",
      "url": "https://lindbakk.com/blog/introducing-brunost"
    },
    {
      "by": "binsquare",
      "descendants": 93,
      "id": 47808268,
      "kids": [
        47808326,
        47809488,
        47810182,
        47808716,
        47809554,
        47813413,
        47811248,
        47810821,
        47811238,
        47809776,
        47810110,
        47810379,
        47810586,
        47812128,
        47809658,
        47809153,
        47809214,
        47810701,
        47808511,
        47812262,
        47809993,
        47809934,
        47810251,
        47809715,
        47808660,
        47811653,
        47809927,
        47811082,
        47812606,
        47811954,
        47808832
      ],
      "score": 302,
      "time": 1776446338,
      "title": "Show HN: Smol machines – subsecond coldstart, portable virtual machines",
      "type": "story",
      "url": "https://github.com/smol-machines/smolvm"
    },
    {
      "by": "ericHosick",
      "descendants": 93,
      "id": 47806845,
      "kids": [
        47813662,
        47811870,
        47813035,
        47811931,
        47813600,
        47813658,
        47809549,
        47812159,
        47813425,
        47813559,
        47812899,
        47812533,
        47812237,
        47813602,
        47813564,
        47811809,
        47808306,
        47812616,
        47812008,
        47811890,
        47812545,
        47812107,
        47806846,
        47808195,
        47812936,
        47811458,
        47807844,
        47809234,
        47808686,
        47812062,
        47810080,
        47812451,
        47810903,
        47810720
      ],
      "score": 147,
      "time": 1776438924,
      "title": "Slop Cop",
      "type": "story",
      "url": "https://awnist.com/slop-cop"
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
      "title": "Deleteduser.com —a $15 PII Magnet",
      "url": "https://mike-sheward.medium.com/deleteduser-com-a-15-pii-magnet-c4396eb21061",
      "score": 27,
      "comments": 3,
      "tags": [
        "security"
      ],
      "id": "muofgb"
    },
    {
      "title": "Why is IPv6 so complicated?",
      "url": "https://github.com/becarpenter/misc/blob/main/why6why.md",
      "score": 14,
      "comments": 7,
      "tags": [
        "networking"
      ],
      "id": "m0c78b"
    },
    {
      "title": "HTTP desync in Discord's media proxy: Spying on a whole platform",
      "url": "https://tmctmt.com/posts/http-desync-in-discord/",
      "score": 55,
      "comments": 5,
      "tags": [
        "security"
      ],
      "id": "zxgmfx"
    },
    {
      "title": "A simplified model of Fil-C",
      "url": "https://www.corsix.org/content/simplified-model-of-fil-c",
      "score": 25,
      "comments": 2,
      "tags": [
        "c"
      ],
      "id": "rp1yrv"
    },
    {
      "title": "tangled newsletter 01 — hello",
      "url": "https://blog.tangled.org/newsletter-01/",
      "score": 39,
      "comments": 5,
      "tags": [
        "release"
      ],
      "id": "y8jlwv"
    },
    {
      "title": "We beat Google’s zero-knowledge proof of quantum cryptanalysis",
      "url": "https://blog.trailofbits.com/2026/04/17/we-beat-googles-zero-knowledge-proof-of-quantum-cryptanalysis/",
      "score": 31,
      "comments": 1,
      "tags": [
        "cryptography",
        "science"
      ],
      "id": "d55yj0"
    },
    {
      "title": "It Is Time to Ban the Sale of Precise Geolocation Data",
      "url": "https://www.lawfaremedia.org/article/it-is-time-to-ban-the-sale-of-precise-geolocation",
      "score": 9,
      "comments": 0,
      "tags": [
        "privacy"
      ],
      "id": "a6ztsz"
    },
    {
      "title": "What are you doing this weekend?",
      "url": "",
      "score": 17,
      "comments": 37,
      "tags": [
        "ask",
        "programming"
      ],
      "id": "tbvl30"
    },
    {
      "title": "The lost thesis of Dennis Ritchie",
      "url": "https://archive.computerhistory.org/resources/access/text/2020/05/102790971/Ritchie_dissertation.pdf",
      "score": 11,
      "comments": 2,
      "tags": [
        "pdf",
        "unix"
      ],
      "id": "my3lu9"
    },
    {
      "title": "Okay, what actually uses Rust",
      "url": "https://blog.goose.love/posts/what-actually-uses-rust/",
      "score": 41,
      "comments": 32,
      "tags": [
        "rust"
      ],
      "id": "dlxlvj"
    }
  ]
}
```

