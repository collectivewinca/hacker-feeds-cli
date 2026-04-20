# Hacker Feeds Outcomes - Creators

Generated on: 2026-04-20 07:03:53 UTC

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
      "reactions": 119,
      "comments": 22,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Multi-Agent A2A with the Agent Development Kit(ADK), Azure ACI, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Multi-Agent...",
      "url": "https://dev.to/gde/multi-agent-a2a-with-the-agent-development-kitadk-azure-aci-and-gemini-cli-1k84",
      "tags": "googleadk, multiagent, gemini, a2a",
      "reactions": 5,
      "comments": 0,
      "reading_time": 13,
      "author": "xbill"
    },
    {
      "title": "What was your win this week?!",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-28fb",
      "tags": "discuss, weeklyretro",
      "reactions": 59,
      "comments": 32,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Boring code is an organizational tell",
      "description": "If boring code is good, why is it so rare? Clever code is not the result of clever engineers. It's...",
      "url": "https://dev.to/simme/boring-code-is-an-organizational-tell-4gca",
      "tags": "ai, leadership, culture, management",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "simme"
    },
    {
      "title": "Join our DEV Weekend Challenge — $1,000 in Prizes Across TEN winners! Submissions Due April 20 at 6:59 AM UTC.",
      "description": "We're excited to kick off another DEV Weekend Challenge, a short bite-sized challenge planned to fit...",
      "url": "https://dev.to/devteam/join-our-dev-weekend-challenge-1000-in-prizes-across-ten-winners-submissions-due-april-20-at-47i1",
      "tags": "devchallenge, weekendchallenge",
      "reactions": 107,
      "comments": 51,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "AI Doesn't Fix Weak Engineering. It Just Speeds It Up.",
      "description": "\"Weak engineers with AI still produce weak output. Just faster.\" That was the whole point. AI changes...",
      "url": "https://dev.to/jonoherrington/ai-doesnt-fix-weak-engineering-it-just-speeds-it-up-5bak",
      "tags": "ai, leadership, discuss",
      "reactions": 74,
      "comments": 42,
      "reading_time": 5,
      "author": "jonoherrington"
    },
    {
      "title": "Building a Smarter Hiring Engine: AI Recruiter with RAG, Memory & Web Search",
      "description": "This is a submission for Weekend Challenge: Earth Day Edition           Background               ...",
      "url": "https://dev.to/ranjancse/building-a-smarter-hiring-engine-ai-recruiter-with-rag-memory-web-search-4fpe",
      "tags": "devchallenge, weekendchallenge, ai, python",
      "reactions": 9,
      "comments": 0,
      "reading_time": 6,
      "author": "ranjancse"
    },
    {
      "title": "Every climate chatbot is amnesiac. So I built Aura — a stateful climate coach on Backboard + Gemini",
      "description": "Every climate chatbot is amnesiac. So I built Aura — a stateful climate coach on Backboard +...",
      "url": "https://dev.to/dev_rajput_2d46f92f8a3418/every-climate-chatbot-is-amnesiac-so-i-built-aura-a-stateful-climate-coach-on-backboard-gemini-4kih",
      "tags": "weekendchallenge, webdev, ai, devchallenge",
      "reactions": 12,
      "comments": 2,
      "reading_time": 6,
      "author": "dev_rajput_2d46f92f8a3418"
    },
    {
      "title": "The Mental Framework for Unlocking Agentic Workflows",
      "description": "Long-running agentic workflows will inevitably hit a context wall: the context window fills, compaction runs, and layered summaries start replacing the details you still needed. In this article, we discuss the Principle of Least Context and what that looks like in practice, especially towards effective map-reduce workflows.",
      "url": "https://dev.to/somedood/the-mental-framework-for-unlocking-agentic-workflows-cg1",
      "tags": "ai, agents, llm, claude",
      "reactions": 4,
      "comments": 0,
      "reading_time": 11,
      "author": "somedood"
    },
    {
      "title": "Android desktop mode: features, device support, and the OLED screen burn-in problem",
      "description": "A true \"PC in your pocket\" closer to reality",
      "url": "https://dev.to/maxmoffa/android-desktop-mode-features-device-support-and-the-oled-screen-burn-in-problem-5a40",
      "tags": "android, google, mobile, productivity",
      "reactions": 23,
      "comments": 0,
      "reading_time": 7,
      "author": "maxmoffa"
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
      "forks": 549,
      "added_stars": 3434,
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
      "forks": 282,
      "added_stars": 832,
      "builtBy": [
        {
          "username": "skyfallsin",
          "href": "https://github.com/skyfallsin",
          "avatar": "https://avatars.githubusercontent.com/u/998"
        },
        {
          "username": "company8",
          "href": "https://github.com/company8",
          "avatar": "https://avatars.githubusercontent.com/u/135282870"
        },
        {
          "username": "leoneparise",
          "href": "https://github.com/leoneparise",
          "avatar": "https://avatars.githubusercontent.com/u/1442927"
        },
        {
          "username": "Microck",
          "href": "https://github.com/Microck",
          "avatar": "https://avatars.githubusercontent.com/u/45483921"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
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
      "forks": 1032,
      "added_stars": 738,
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
      "author": "microsoft",
      "repo": "power-platform-skills",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/power-platform-skills",
      "desc": "A plugin marketplace for Claude Code/GitHub Copilot that provides Power Platform development plugins, including reusable skills, agents, and commands for building and deploying solutions.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 30,
      "added_stars": 37,
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
      "author": "cv-cat",
      "repo": "Spider_XHS",
      "avatar": "https://github.com/cv-cat.png",
      "repo_link": "https://github.com/cv-cat/Spider_XHS",
      "desc": "小红书爬虫数据采集，小红书全域运营解决方案",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 969,
      "added_stars": 239,
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
      "author": "songquanpeng",
      "repo": "one-api",
      "avatar": "https://github.com/songquanpeng.png",
      "repo_link": "https://github.com/songquanpeng/one-api",
      "desc": "LLM API 管理 & 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。LLM API management & key redistribution system, unifying multiple providers under a single API. Single binary, Docker-ready, with an English UI.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6147,
      "added_stars": 414,
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
      "author": "aandrew-me",
      "repo": "ytDownloader",
      "avatar": "https://github.com/aandrew-me.png",
      "repo_link": "https://github.com/aandrew-me/ytDownloader",
      "desc": "Desktop App for downloading Videos and Audios from hundreds of sites",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 826,
      "added_stars": 278,
      "builtBy": [
        {
          "username": "aandrew-me",
          "href": "https://github.com/aandrew-me",
          "avatar": "https://avatars.githubusercontent.com/u/66430340"
        },
        {
          "username": "albanobattistella",
          "href": "https://github.com/albanobattistella",
          "avatar": "https://avatars.githubusercontent.com/u/34811668"
        },
        {
          "username": "Muxutruk2",
          "href": "https://github.com/Muxutruk2",
          "avatar": "https://avatars.githubusercontent.com/u/156070698"
        },
        {
          "username": "soredake",
          "href": "https://github.com/soredake",
          "avatar": "https://avatars.githubusercontent.com/u/5204968"
        },
        {
          "username": "candrapersada",
          "href": "https://github.com/candrapersada",
          "avatar": "https://avatars.githubusercontent.com/u/36833664"
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
      "forks": 1351,
      "added_stars": 553,
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
      "author": "coreyhaines31",
      "repo": "marketingskills",
      "avatar": "https://github.com/coreyhaines31.png",
      "repo_link": "https://github.com/coreyhaines31/marketingskills",
      "desc": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3591,
      "added_stars": 1590,
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
      "author": "DavidHDev",
      "repo": "react-bits",
      "avatar": "https://github.com/DavidHDev.png",
      "repo_link": "https://github.com/DavidHDev/react-bits",
      "desc": "An open source collection of animated, interactive & fully customizable React components for building memorable websites.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1720,
      "added_stars": 651,
      "builtBy": [
        {
          "username": "DavidHDev",
          "href": "https://github.com/DavidHDev",
          "avatar": "https://avatars.githubusercontent.com/u/48634587"
        },
        {
          "username": "PedroMarianoAlmeida",
          "href": "https://github.com/PedroMarianoAlmeida",
          "avatar": "https://avatars.githubusercontent.com/u/59484474"
        },
        {
          "username": "ieedan",
          "href": "https://github.com/ieedan",
          "avatar": "https://avatars.githubusercontent.com/u/117548273"
        },
        {
          "username": "EnderRomantice",
          "href": "https://github.com/EnderRomantice",
          "avatar": "https://avatars.githubusercontent.com/u/176131572"
        },
        {
          "username": "ipuppyyt",
          "href": "https://github.com/ipuppyyt",
          "avatar": "https://avatars.githubusercontent.com/u/71689062"
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
      "forks": 660,
      "added_stars": 371,
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
      "author": "microsoft",
      "repo": "Web-Dev-For-Beginners",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/Web-Dev-For-Beginners",
      "desc": "24 Lessons, 12 Weeks, Get Started as a Web Developer",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 15378,
      "added_stars": 90,
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
      "author": "koodo-reader",
      "repo": "koodo-reader",
      "avatar": "https://github.com/koodo-reader.png",
      "repo_link": "https://github.com/koodo-reader/koodo-reader",
      "desc": "A modern ebook manager and reader with sync and backup capacities for Windows, macOS, Linux, Android, iOS and Web",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1973,
      "added_stars": 148,
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
      "author": "marktext",
      "repo": "marktext",
      "avatar": "https://github.com/marktext.png",
      "repo_link": "https://github.com/marktext/marktext",
      "desc": "📝A simple and elegant markdown editor, available for Linux, macOS and Windows.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4120,
      "added_stars": 228,
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
      "author": "facebook",
      "repo": "hermes",
      "avatar": "https://github.com/facebook.png",
      "repo_link": "https://github.com/facebook/hermes",
      "desc": "A JavaScript engine optimized for running React Native.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 762,
      "added_stars": 50,
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
      "author": "hotheadhacker",
      "repo": "no-as-a-service",
      "avatar": "https://github.com/hotheadhacker.png",
      "repo_link": "https://github.com/hotheadhacker/no-as-a-service",
      "desc": "No-as-a-Service (NaaS) is a simple API that returns a random rejection reason. Use it when you need a realistic excuse, a fun “no,” or want to simulate being turned down in style.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 441,
      "added_stars": 785,
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
      "author": "xifangczy",
      "repo": "cat-catch",
      "avatar": "https://github.com/xifangczy.png",
      "repo_link": "https://github.com/xifangczy/cat-catch",
      "desc": "猫抓 浏览器资源嗅探扩展 / cat-catch Browser Resource Sniffing Extension",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1670,
      "added_stars": 155,
      "builtBy": [
        {
          "username": "xifangczy",
          "href": "https://github.com/xifangczy",
          "avatar": "https://avatars.githubusercontent.com/u/1239904"
        },
        {
          "username": "Oleada1",
          "href": "https://github.com/Oleada1",
          "avatar": "https://avatars.githubusercontent.com/u/26626786"
        },
        {
          "username": "Havokdan",
          "href": "https://github.com/Havokdan",
          "avatar": "https://avatars.githubusercontent.com/u/6549729"
        },
        {
          "username": "hmaoraze",
          "href": "https://github.com/hmaoraze",
          "avatar": "https://avatars.githubusercontent.com/u/88831788"
        },
        {
          "username": "jetsung",
          "href": "https://github.com/jetsung",
          "avatar": "https://avatars.githubusercontent.com/u/149308191"
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
      "title": "Defluffer - reduce token usage 📉 by 45% using this one simple trick! [Earthday challenge]",
      "description": "This is a submission for Weekend Challenge: Earth Day Edition  Fluffer: someone who helps people \"get...",
      "url": "https://dev.to/grahamthedev/defluffer-reduce-token-usage-by-45-26jj",
      "tags": "devchallenge, weekendchallenge, javascript, ai",
      "reactions": 29,
      "comments": 9,
      "reading_time": 5,
      "author": "grahamthedev"
    },
    {
      "title": "Join the OpenClaw Challenge: $1,200 Prize Pool!",
      "description": "If you've spent any time on the internet, you know OpenClaw has been making waves lately. We recently...",
      "url": "https://dev.to/devteam/join-the-openclaw-challenge-1200-prize-pool-5682",
      "tags": "devchallenge, openclawchallenge, openclaw, ai",
      "reactions": 119,
      "comments": 22,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Da Autoria à Exegese: O Código como Ato de Linguagem na Era da IA",
      "description": "Com o uso diário de IA no trabalho, venho percebendo uma mudança que no começo parecia só...",
      "url": "https://dev.to/nicole_aragao/da-autoria-a-exegese-o-codigo-como-ato-de-linguagem-na-era-da-ia-g37",
      "tags": "ai, career, discuss, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "nicole_aragao"
    },
    {
      "title": "Active Inference — The Learn Arc, Part 50: Series capstone",
      "description": "Fifty posts. Ten chapters. One framework. The Learn Arc closes with a reader's map, a short what-to-keep list, and where to go from here.",
      "url": "https://dev.to/tmdlrg/active-inference-the-learn-arc-part-50-series-capstone-4ha3",
      "tags": "activeinference, pomdp, ai, elixir",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "tmdlrg"
    },
    {
      "title": "Building a Digital Time Machine: How I Created an AR Memory Network That Pins Your Life to Real-World Locations",
      "description": "Building a Digital Time Machine: How I Created an AR Memory Network That Pins Your Life to...",
      "url": "https://dev.to/kevinten10/building-a-digital-time-machine-how-i-created-an-ar-memory-network-that-pins-your-life-to-4cie",
      "tags": "ai, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "kevinten10"
    },
    {
      "title": "Show Dev: Your Face Is Now a Music Generator",
      "description": "The Dumbest Idea I've Shipped This Month   I built a thing called The Mood Ring Playlist. It...",
      "url": "https://dev.to/jeanmmayer/show-dev-your-face-is-now-a-music-generator-4pm7",
      "tags": "showdev, ai, webdev, sideprojects",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "jeanmmayer"
    },
    {
      "title": "Boring code is an organizational tell",
      "description": "If boring code is good, why is it so rare? Clever code is not the result of clever engineers. It's...",
      "url": "https://dev.to/simme/boring-code-is-an-organizational-tell-4gca",
      "tags": "ai, leadership, culture, management",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "simme"
    },
    {
      "title": "I Almost Lost Commerza: The Brutal Reality of Building an Ecommerce System Without a Framework",
      "description": "I am 19 years old. I set out to build a production-grade e-commerce system from scratch. No Laravel....",
      "url": "https://dev.to/syedahmershah/i-almost-lost-commerza-the-brutal-reality-of-building-an-ecommerce-system-without-a-framework-5b78",
      "tags": "coding, vibecoding, ai, programming",
      "reactions": 50,
      "comments": 0,
      "reading_time": 5,
      "author": "syedahmershah"
    },
    {
      "title": "AI Doesn't Fix Weak Engineering. It Just Speeds It Up.",
      "description": "\"Weak engineers with AI still produce weak output. Just faster.\" That was the whole point. AI changes...",
      "url": "https://dev.to/jonoherrington/ai-doesnt-fix-weak-engineering-it-just-speeds-it-up-5bak",
      "tags": "ai, leadership, discuss",
      "reactions": 74,
      "comments": 42,
      "reading_time": 5,
      "author": "jonoherrington"
    },
    {
      "title": "Clinic-CoPilot",
      "description": "I built a clinical assistant that could summarize patient notes pretty well. Then I asked it about...",
      "url": "https://dev.to/dhoni_yedhuru/clinic-copilot-58g5",
      "tags": "ai, webdev, programming, javascript",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "dhoni_yedhuru"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "neehao",
      "descendants": 5,
      "id": 47819410,
      "kids": [
        47831181,
        47824502,
        47821504,
        47821507,
        47821506
      ],
      "score": 28,
      "time": 1776545315,
      "title": "SDF Public Access Unix System",
      "type": "story",
      "url": "https://sdf.org/?ssh"
    },
    {
      "by": "prismatic",
      "descendants": 1,
      "id": 47789087,
      "kids": [
        47831147
      ],
      "score": 13,
      "time": 1776318189,
      "title": "Ben Lerner's Big Feelings",
      "type": "story",
      "url": "https://www.vulture.com/article/ben-lerner-transcription-interview.html"
    },
    {
      "by": "tibbar",
      "descendants": 0,
      "id": 47830575,
      "score": 12,
      "time": 1776661543,
      "title": "Stripe's Payment APIs: the first 10 years (2020)",
      "type": "story",
      "url": "https://stripe.dev/blog/payment-api-design"
    },
    {
      "by": "colesantiago",
      "descendants": 393,
      "id": 47824463,
      "kids": [
        47829411,
        47826825,
        47826114,
        47831091,
        47825592,
        47831018,
        47826826,
        47826546,
        47824811,
        47830997,
        47824655,
        47831070,
        47825559,
        47825604,
        47830499,
        47824649,
        47826564,
        47826812,
        47830525,
        47825676,
        47825120,
        47827598,
        47825787,
        47825753,
        47827014,
        47825133,
        47826468,
        47829360,
        47828248,
        47826823,
        47826491,
        47824860,
        47827366,
        47824778,
        47830322,
        47827060,
        47824782,
        47826557,
        47825808,
        47825913,
        47824876,
        47825822,
        47824642,
        47826356,
        47827232,
        47824838,
        47829310,
        47829838,
        47829200,
        47828166,
        47829935,
        47829906,
        47825563,
        47827090,
        47827867,
        47829930,
        47824761,
        47826048,
        47825303,
        47827233,
        47826045,
        47827281,
        47827160,
        47825556,
        47824935
      ],
      "score": 694,
      "text": "<a href=\"https:&#x2F;&#x2F;vercel.com&#x2F;kb&#x2F;bulletin&#x2F;vercel-april-2026-security-incident\" rel=\"nofollow\">https:&#x2F;&#x2F;vercel.com&#x2F;kb&#x2F;bulletin&#x2F;vercel-april-2026-security-in...</a>",
      "time": 1776608078,
      "title": "Vercel April 2026 security incident",
      "type": "story",
      "url": "https://www.bleepingcomputer.com/news/security/vercel-confirms-breach-as-hackers-claim-to-be-selling-stolen-data/"
    },
    {
      "by": "vinhnx",
      "descendants": 63,
      "id": 47822734,
      "kids": [
        47829326,
        47829918,
        47829235,
        47829031,
        47822826,
        47830299,
        47829526,
        47829613,
        47829131,
        47829264,
        47829268,
        47829771,
        47830209,
        47829551,
        47829370,
        47828775,
        47829433
      ],
      "score": 161,
      "time": 1776587573,
      "title": "A Brief History of Fish Sauce",
      "type": "story",
      "url": "https://www.legalnomads.com/fish-sauce/"
    },
    {
      "by": "twapi",
      "descendants": 21,
      "id": 47829178,
      "kids": [
        47830475,
        47830716,
        47830455,
        47830083,
        47830248,
        47830950,
        47830522
      ],
      "score": 70,
      "time": 1776646600,
      "title": "Claude Token Counter, now with model comparisons",
      "type": "story",
      "url": "https://simonwillison.net/2026/Apr/20/claude-token-counts/"
    },
    {
      "by": "walterbell",
      "descendants": 52,
      "id": 47827259,
      "kids": [
        47831074,
        47830422,
        47830300,
        47829956,
        47830357,
        47830425,
        47830518,
        47829140,
        47830918,
        47831058,
        47830621,
        47830889,
        47830788,
        47830577,
        47830571,
        47830498,
        47829750,
        47830187,
        47830405,
        47830261
      ],
      "score": 157,
      "time": 1776629349,
      "title": "Stop trying to engineer your way out of listening to people",
      "type": "story",
      "url": "https://ashley.rolfmore.com/stop-trying-to-engineer-your-way-out-of-listening-to-people/"
    },
    {
      "by": "pseudolus",
      "descendants": 6,
      "id": 47804178,
      "kids": [
        47830592,
        47830908
      ],
      "score": 32,
      "time": 1776419453,
      "title": "Monumental ship burial beneath ancient Norwegian mound predates the Viking Age",
      "type": "story",
      "url": "https://phys.org/news/2026-04-monumental-ship-burial-beneath-ancient.html"
    },
    {
      "by": "crescit_eundo",
      "descendants": 96,
      "id": 47826100,
      "kids": [
        47827602,
        47831170,
        47826623,
        47827963,
        47830914,
        47830882,
        47826914,
        47826694,
        47828468,
        47827650,
        47827728,
        47827547,
        47829223,
        47829537,
        47828920,
        47828147,
        47826975,
        47827600,
        47828102,
        47827036,
        47827506
      ],
      "score": 191,
      "time": 1776620643,
      "title": "The Bromine Chokepoint",
      "type": "story",
      "url": "https://warontherocks.com/cogs-of-war/the-bromine-chokepoint-how-strife-in-the-middle-east-could-halt-production-of-the-worlds-memory-chips/"
    },
    {
      "by": "akashwadhwani35",
      "descendants": 30,
      "id": 47780743,
      "kids": [
        47830032,
        47829924,
        47830025,
        47829860,
        47830569,
        47829769,
        47830315,
        47830172,
        47829820,
        47780744,
        47830178,
        47830006,
        47829575,
        47830484
      ],
      "score": 94,
      "time": 1776267945,
      "title": "Mechanical Keyboard Sounds – A listening Museum",
      "type": "story",
      "url": "https://sheets.works/data-viz/keyboard-sounds"
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
      "by": "neehao",
      "descendants": 5,
      "id": 47819410,
      "kids": [
        47831181,
        47824502,
        47821504,
        47821507,
        47821506
      ],
      "score": 28,
      "time": 1776545315,
      "title": "SDF Public Access Unix System",
      "type": "story",
      "url": "https://sdf.org/?ssh"
    },
    {
      "by": "prismatic",
      "descendants": 1,
      "id": 47789087,
      "kids": [
        47831147
      ],
      "score": 13,
      "time": 1776318189,
      "title": "Ben Lerner's Big Feelings",
      "type": "story",
      "url": "https://www.vulture.com/article/ben-lerner-transcription-interview.html"
    },
    {
      "by": "tibbar",
      "descendants": 0,
      "id": 47830575,
      "score": 12,
      "time": 1776661543,
      "title": "Stripe's Payment APIs: the first 10 years (2020)",
      "type": "story",
      "url": "https://stripe.dev/blog/payment-api-design"
    },
    {
      "by": "colesantiago",
      "descendants": 393,
      "id": 47824463,
      "kids": [
        47829411,
        47826825,
        47826114,
        47831091,
        47825592,
        47831018,
        47826826,
        47826546,
        47824811,
        47830997,
        47824655,
        47831070,
        47825559,
        47825604,
        47830499,
        47824649,
        47826564,
        47826812,
        47830525,
        47825676,
        47825120,
        47827598,
        47825787,
        47825753,
        47827014,
        47825133,
        47826468,
        47829360,
        47828248,
        47826823,
        47826491,
        47824860,
        47827366,
        47824778,
        47830322,
        47827060,
        47824782,
        47826557,
        47825808,
        47825913,
        47824876,
        47825822,
        47824642,
        47826356,
        47827232,
        47824838,
        47829310,
        47829838,
        47829200,
        47828166,
        47829935,
        47829906,
        47825563,
        47827090,
        47827867,
        47829930,
        47824761,
        47826048,
        47825303,
        47827233,
        47826045,
        47827281,
        47827160,
        47825556,
        47824935
      ],
      "score": 694,
      "text": "<a href=\"https:&#x2F;&#x2F;vercel.com&#x2F;kb&#x2F;bulletin&#x2F;vercel-april-2026-security-incident\" rel=\"nofollow\">https:&#x2F;&#x2F;vercel.com&#x2F;kb&#x2F;bulletin&#x2F;vercel-april-2026-security-in...</a>",
      "time": 1776608078,
      "title": "Vercel April 2026 security incident",
      "type": "story",
      "url": "https://www.bleepingcomputer.com/news/security/vercel-confirms-breach-as-hackers-claim-to-be-selling-stolen-data/"
    },
    {
      "by": "vinhnx",
      "descendants": 63,
      "id": 47822734,
      "kids": [
        47829326,
        47829918,
        47829235,
        47829031,
        47822826,
        47830299,
        47829526,
        47829613,
        47829131,
        47829264,
        47829268,
        47829771,
        47830209,
        47829551,
        47829370,
        47828775,
        47829433
      ],
      "score": 161,
      "time": 1776587573,
      "title": "A Brief History of Fish Sauce",
      "type": "story",
      "url": "https://www.legalnomads.com/fish-sauce/"
    },
    {
      "by": "twapi",
      "descendants": 21,
      "id": 47829178,
      "kids": [
        47830475,
        47830716,
        47830455,
        47830083,
        47830248,
        47830950,
        47830522
      ],
      "score": 70,
      "time": 1776646600,
      "title": "Claude Token Counter, now with model comparisons",
      "type": "story",
      "url": "https://simonwillison.net/2026/Apr/20/claude-token-counts/"
    },
    {
      "by": "walterbell",
      "descendants": 52,
      "id": 47827259,
      "kids": [
        47831074,
        47830422,
        47830300,
        47829956,
        47830357,
        47830425,
        47830518,
        47829140,
        47830918,
        47831058,
        47830621,
        47830889,
        47830788,
        47830577,
        47830571,
        47830498,
        47829750,
        47830187,
        47830405,
        47830261
      ],
      "score": 157,
      "time": 1776629349,
      "title": "Stop trying to engineer your way out of listening to people",
      "type": "story",
      "url": "https://ashley.rolfmore.com/stop-trying-to-engineer-your-way-out-of-listening-to-people/"
    },
    {
      "by": "pseudolus",
      "descendants": 6,
      "id": 47804178,
      "kids": [
        47830592,
        47830908
      ],
      "score": 32,
      "time": 1776419453,
      "title": "Monumental ship burial beneath ancient Norwegian mound predates the Viking Age",
      "type": "story",
      "url": "https://phys.org/news/2026-04-monumental-ship-burial-beneath-ancient.html"
    },
    {
      "by": "crescit_eundo",
      "descendants": 96,
      "id": 47826100,
      "kids": [
        47827602,
        47831170,
        47826623,
        47827963,
        47830914,
        47830882,
        47826914,
        47826694,
        47828468,
        47827650,
        47827728,
        47827547,
        47829223,
        47829537,
        47828920,
        47828147,
        47826975,
        47827600,
        47828102,
        47827036,
        47827506
      ],
      "score": 191,
      "time": 1776620643,
      "title": "The Bromine Chokepoint",
      "type": "story",
      "url": "https://warontherocks.com/cogs-of-war/the-bromine-chokepoint-how-strife-in-the-middle-east-could-halt-production-of-the-worlds-memory-chips/"
    },
    {
      "by": "akashwadhwani35",
      "descendants": 30,
      "id": 47780743,
      "kids": [
        47830032,
        47829924,
        47830025,
        47829860,
        47830569,
        47829769,
        47830315,
        47830172,
        47829820,
        47780744,
        47830178,
        47830006,
        47829575,
        47830484
      ],
      "score": 94,
      "time": 1776267945,
      "title": "Mechanical Keyboard Sounds – A listening Museum",
      "type": "story",
      "url": "https://sheets.works/data-viz/keyboard-sounds"
    },
    {
      "by": "PaulHoule",
      "descendants": 8,
      "id": 47801200,
      "kids": [
        47831174,
        47830981,
        47801280
      ],
      "score": 21,
      "time": 1776385777,
      "title": "Zero-copy protobuf and ConnectRPC for Rust",
      "type": "story",
      "url": "https://medium.com/@iainmcgin/zero-copy-protobuf-and-connectrpc-for-rust-69bda8ac0f02"
    },
    {
      "by": "Brajeshwar",
      "descendants": 170,
      "id": 47825160,
      "kids": [
        47826055,
        47825421,
        47825272,
        47830342,
        47829614,
        47826250,
        47829908,
        47830490,
        47826592,
        47830968,
        47825599,
        47825385,
        47826643,
        47826773,
        47825393,
        47825839,
        47825757,
        47829533,
        47826278,
        47825807,
        47826098,
        47829881
      ],
      "score": 195,
      "time": 1776613720,
      "title": "Turtle WoW classic server announces shutdown after Blizzard wins injunction",
      "type": "story",
      "url": "https://www.pcgamer.com/games/world-of-warcraft/turtle-wow-classic-server-announces-shutdown-after-blizzard-wins-injunction/"
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
      "title": "Yojam: a macOS default-browser shim that routes URLs through a rule engine",
      "url": "https://github.com/fluffypony/yojam",
      "score": 71,
      "comments": 33,
      "tags": [
        "mac",
        "release"
      ],
      "id": "na7cxg"
    },
    {
      "title": "Introducing Glyph Protocol for Terminals",
      "url": "https://rapha.land/introducing-glyph-protocol-for-terminals/",
      "score": 28,
      "comments": 12,
      "tags": [
        "unix"
      ],
      "id": "uevqfc"
    },
    {
      "title": "What we once had (at the height of the XMPP era of the Internet) (2023)",
      "url": "https://www.kirsle.net/what-we-once-had-at-the-height-of-the-xmpp-era-of-the-internet",
      "score": 37,
      "comments": 32,
      "tags": [
        "historical"
      ],
      "id": "ktmwly"
    },
    {
      "title": "waves & particles",
      "url": "https://taylor.town/waves",
      "score": 76,
      "comments": 1,
      "tags": [
        "art"
      ],
      "id": "vt2fxe"
    },
    {
      "title": "Theseus, a static Windows emulator",
      "url": "https://neugierig.org/software/blog/2026/04/theseus.html",
      "score": 12,
      "comments": 0,
      "tags": [
        "retrocomputing",
        "windows"
      ],
      "id": "dfe90i"
    },
    {
      "title": "Vercel April 2026 security incident",
      "url": "https://vercel.com/kb/bulletin/vercel-april-2026-security-incident",
      "score": 26,
      "comments": 2,
      "tags": [
        "security",
        "web"
      ],
      "id": "aaqbdy"
    },
    {
      "title": "This Week in Plasma: Per-Screen Virtual Desktops and Wayland Session Restore",
      "url": "https://blogs.kde.org/2026/04/18/this-week-in-plasma-per-screen-virtual-desktops-and-wayland-session-restore/",
      "score": 9,
      "comments": 1,
      "tags": [
        "linux"
      ],
      "id": "7ovybf"
    },
    {
      "title": "Claude Desktop installs undocumented browser extensions for Chrome and other browsers",
      "url": "https://www.thatprivacyguy.com/blog/anthropic-spyware/",
      "score": 6,
      "comments": 0,
      "tags": [
        "privacy",
        "vibecoding"
      ],
      "id": "pfqxak"
    },
    {
      "title": "SQLite prefixes its temp files with `etilqs_`",
      "url": "https://avi.im/blag/2026/etilqs/",
      "score": 84,
      "comments": 16,
      "tags": [
        "databases"
      ],
      "id": "tttexr"
    },
    {
      "title": "corpus: self-hosted listenbrainz and last.fm frontend",
      "url": "https://github.com/mtmn/corpus",
      "score": 7,
      "comments": 0,
      "tags": [
        "elm",
        "haskell",
        "vibecoding"
      ],
      "id": "qxhzxh"
    }
  ]
}
```

