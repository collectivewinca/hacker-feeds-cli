# Hacker Feeds Outcomes - Creators

Generated on: 2026-04-16 06:54:54 UTC

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
      "title": "How I Built an Autonomous Dataset Generator with CrewAI + Ollama (72-hour run, 1,065 entries)",
      "description": "Background   I needed high-quality instruction datasets for fine-tuning local LLMs, but...",
      "url": "https://dev.to/robopilingui/how-i-built-an-autonomous-dataset-generator-with-crewai-ollama-72-hour-run-1065-entries-2280",
      "tags": "ai, automation, llm, machinelearning",
      "reactions": 3,
      "comments": 0,
      "reading_time": 8,
      "author": "robopilingui"
    },
    {
      "title": "Lost in the AI Hype, I Started Small",
      "description": "And it helped me get back into tech without drowning    TL;DR at the end     Coming back to...",
      "url": "https://dev.to/aws/lost-in-the-ai-hype-i-started-small-2a72",
      "tags": "ai, beginners, productivity, aws",
      "reactions": 22,
      "comments": 5,
      "reading_time": 7,
      "author": "rohini_gaonkar"
    },
    {
      "title": "Building with the Google Cloud Run MCP Server for Multi-Agent A2A Deployment",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Multi-Agent...",
      "url": "https://dev.to/gde/building-with-the-google-cloud-run-mcp-server-for-multi-agent-a2a-deployment-fop",
      "tags": "mcpserver, adk, a2aprotocol, googlecloudrun",
      "reactions": 3,
      "comments": 0,
      "reading_time": 13,
      "author": "xbill"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-5e38",
      "tags": "top7, discuss",
      "reactions": 42,
      "comments": 12,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Multi-Agent A2A with the Agent Development Kit(ADK), Azure AKS, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Multi-Agent...",
      "url": "https://dev.to/gde/multi-agent-a2a-with-the-agent-development-kitadk-azure-aks-and-gemini-cli-231o",
      "tags": "ak, googleadk, gemini, a2a",
      "reactions": 3,
      "comments": 0,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "Local AI Will Save Us All (The Math Says So, Trust Me)",
      "description": "Every few weeks a take goes viral in tech circles making the case for ditching cloud AI and running...",
      "url": "https://dev.to/sebs/local-ai-will-save-us-all-the-math-says-so-trust-me-4m22",
      "tags": "ai, mba, operations",
      "reactions": 8,
      "comments": 1,
      "reading_time": 3,
      "author": "sebs"
    },
    {
      "title": "How to prompt Gemini 3.1's new text to speech model",
      "description": "Gemini 3.1 Flash text to speech (TTS) is a new model that you can direct to get the precise audio...",
      "url": "https://dev.to/googleai/how-to-prompt-gemini-31s-new-text-to-speech-model-24bb",
      "tags": "ai, gemini, promptengineering, tutorial",
      "reactions": 28,
      "comments": 0,
      "reading_time": 7,
      "author": "fofr"
    },
    {
      "title": "How I'm using ASTs and Gemini to solve the \"Codebase Onboarding\" problem 🧠",
      "description": "Hi everyone! 👋  I’m Tara, a Senior Software Engineer and Consultant. Over the years, I've jumped...",
      "url": "https://dev.to/tworrell/how-im-using-asts-and-gemini-to-solve-the-codebase-onboarding-problem-bca",
      "tags": "ai, gemini, productivity, showdev",
      "reactions": 5,
      "comments": 0,
      "reading_time": 3,
      "author": "tworrell"
    },
    {
      "title": "Steer GitHub Copilot CLI Sessions Remotely from Any Device",
      "description": "Start a Copilot CLI session on your workstation, then monitor and steer it from the browser or your phone.",
      "url": "https://dev.to/pwd9000/steer-github-copilot-cli-sessions-remotely-from-any-device-3mee",
      "tags": "githubcopilot, ai, tutorial, devops",
      "reactions": 6,
      "comments": 1,
      "reading_time": 9,
      "author": "pwd9000"
    },
    {
      "title": "How I'm using ASTs and Gemini to solve the \"Codebase Onboarding\" problem 🧠",
      "description": "Hi everyone! 👋  I’m Tara, a Senior Software Engineer and Consultant. Over the years, I've jumped...",
      "url": "https://dev.to/tworrell/how-im-using-asts-and-gemini-to-solve-the-codebase-onboarding-problem-1la9",
      "tags": "ai, productivity, webdev, showdev",
      "reactions": 11,
      "comments": 0,
      "reading_time": 3,
      "author": "tworrell"
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
      "forks": 250,
      "added_stars": 1278,
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
      "author": "rohitg00",
      "repo": "pro-workflow",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/pro-workflow",
      "desc": "Claude Code learns from your corrections: self-correcting memory that compounds over 50+ sessions. Context engineering, parallel worktrees, agent teams, and 17 battle-tested skills.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 171,
      "added_stars": 103,
      "builtBy": [
        {
          "username": "rohitg00",
          "href": "https://github.com/rohitg00",
          "avatar": "https://avatars.githubusercontent.com/u/48523873"
        },
        {
          "username": "popey",
          "href": "https://github.com/popey",
          "avatar": "https://avatars.githubusercontent.com/u/1841272"
        },
        {
          "username": "neilkuan",
          "href": "https://github.com/neilkuan",
          "avatar": "https://avatars.githubusercontent.com/u/46012524"
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
      "forks": 625,
      "added_stars": 511,
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
      "forks": 910,
      "added_stars": 1410,
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
      "author": "zen-browser",
      "repo": "desktop",
      "avatar": "https://github.com/zen-browser.png",
      "repo_link": "https://github.com/zen-browser/desktop",
      "desc": "Welcome to a calmer internet",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1449,
      "added_stars": 289,
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
      "author": "maboloshi",
      "repo": "github-chinese",
      "avatar": "https://github.com/maboloshi.png",
      "repo_link": "https://github.com/maboloshi/github-chinese",
      "desc": "GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1331,
      "added_stars": 655,
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
      "author": "vercel",
      "repo": "next.js",
      "avatar": "https://github.com/vercel.png",
      "repo_link": "https://github.com/vercel/next.js",
      "desc": "The React Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 30908,
      "added_stars": 272,
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
      "author": "robinebers",
      "repo": "openusage",
      "avatar": "https://github.com/robinebers.png",
      "repo_link": "https://github.com/robinebers/openusage",
      "desc": "Burning through your subscriptions too fast? Paying for stuff you never use? Stop guessing. OpenUsage is free and open source.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 171,
      "added_stars": 176,
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
      "author": "songquanpeng",
      "repo": "one-api",
      "avatar": "https://github.com/songquanpeng.png",
      "repo_link": "https://github.com/songquanpeng/one-api",
      "desc": "LLM API 管理 & 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。LLM API management & key redistribution system, unifying multiple providers under a single API. Single binary, Docker-ready, with an English UI.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6113,
      "added_stars": 419,
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
      "author": "Acode-Foundation",
      "repo": "Acode",
      "avatar": "https://github.com/Acode-Foundation.png",
      "repo_link": "https://github.com/Acode-Foundation/Acode",
      "desc": "Acode - powerful text/code editor for android",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 948,
      "added_stars": 88,
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
      "author": "mui",
      "repo": "material-ui",
      "avatar": "https://github.com/mui.png",
      "repo_link": "https://github.com/mui/material-ui",
      "desc": "Material UI: Comprehensive React component library that implements Google's Material Design. Free forever.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 32683,
      "added_stars": 156,
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
      "author": "facebook",
      "repo": "hermes",
      "avatar": "https://github.com/facebook.png",
      "repo_link": "https://github.com/facebook/hermes",
      "desc": "A JavaScript engine optimized for running React Native.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 757,
      "added_stars": 60,
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
      "author": "coreyhaines31",
      "repo": "marketingskills",
      "avatar": "https://github.com/coreyhaines31.png",
      "repo_link": "https://github.com/coreyhaines31/marketingskills",
      "desc": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3427,
      "added_stars": 1736,
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
      "author": "hexgrad",
      "repo": "kokoro",
      "avatar": "https://github.com/hexgrad.png",
      "repo_link": "https://github.com/hexgrad/kokoro",
      "desc": "https://hf.co/hexgrad/Kokoro-82M",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 726,
      "added_stars": 164,
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
      "author": "hotheadhacker",
      "repo": "no-as-a-service",
      "avatar": "https://github.com/hotheadhacker.png",
      "repo_link": "https://github.com/hotheadhacker/no-as-a-service",
      "desc": "No-as-a-Service (NaaS) is a simple API that returns a random rejection reason. Use it when you need a realistic excuse, a fun “no,” or want to simulate being turned down in style.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 424,
      "added_stars": 615,
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
      "author": "cv-cat",
      "repo": "Spider_XHS",
      "avatar": "https://github.com/cv-cat.png",
      "repo_link": "https://github.com/cv-cat/Spider_XHS",
      "desc": "小红书爬虫数据采集，小红书全域运营解决方案",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 947,
      "added_stars": 286,
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
      "title": "How I Built an Autonomous Dataset Generator with CrewAI + Ollama (72-hour run, 1,065 entries)",
      "description": "Background   I needed high-quality instruction datasets for fine-tuning local LLMs, but...",
      "url": "https://dev.to/robopilingui/how-i-built-an-autonomous-dataset-generator-with-crewai-ollama-72-hour-run-1065-entries-2280",
      "tags": "ai, automation, llm, machinelearning",
      "reactions": 3,
      "comments": 0,
      "reading_time": 8,
      "author": "robopilingui"
    },
    {
      "title": "Lost in the AI Hype, I Started Small",
      "description": "And it helped me get back into tech without drowning    TL;DR at the end     Coming back to...",
      "url": "https://dev.to/aws/lost-in-the-ai-hype-i-started-small-2a72",
      "tags": "ai, beginners, productivity, aws",
      "reactions": 22,
      "comments": 5,
      "reading_time": 7,
      "author": "rohini_gaonkar"
    },
    {
      "title": "I Built a Dead Simple App Because Claude Code Couldn't Hear Me",
      "description": "I use Claude Code through Bedrock at work. That version doesn't give the AI access to your...",
      "url": "https://dev.to/vientapps/i-built-a-dead-simple-app-because-claude-code-couldnt-hear-me-2l90",
      "tags": "claude, ai, programming, ios",
      "reactions": 2,
      "comments": 1,
      "reading_time": 4,
      "author": "vientapps"
    },
    {
      "title": "Local AI Will Save Us All (The Math Says So, Trust Me)",
      "description": "Every few weeks a take goes viral in tech circles making the case for ditching cloud AI and running...",
      "url": "https://dev.to/sebs/local-ai-will-save-us-all-the-math-says-so-trust-me-4m22",
      "tags": "ai, mba, operations",
      "reactions": 8,
      "comments": 1,
      "reading_time": 3,
      "author": "sebs"
    },
    {
      "title": "How to prompt Gemini 3.1's new text to speech model",
      "description": "Gemini 3.1 Flash text to speech (TTS) is a new model that you can direct to get the precise audio...",
      "url": "https://dev.to/googleai/how-to-prompt-gemini-31s-new-text-to-speech-model-24bb",
      "tags": "ai, gemini, promptengineering, tutorial",
      "reactions": 28,
      "comments": 0,
      "reading_time": 7,
      "author": "fofr"
    },
    {
      "title": "How I'm using ASTs and Gemini to solve the \"Codebase Onboarding\" problem 🧠",
      "description": "Hi everyone! 👋  I’m Tara, a Senior Software Engineer and Consultant. Over the years, I've jumped...",
      "url": "https://dev.to/tworrell/how-im-using-asts-and-gemini-to-solve-the-codebase-onboarding-problem-bca",
      "tags": "ai, gemini, productivity, showdev",
      "reactions": 5,
      "comments": 0,
      "reading_time": 3,
      "author": "tworrell"
    },
    {
      "title": "🧹 repomeld v1.1: Finally, a Tool That Knows What NOT to Include",
      "description": "Stop polluting your AI context with jQuery, Bootstrap, and 47MB of vendor code.              The...",
      "url": "https://dev.to/sakshsky_89/repomeld-v11-finally-a-tool-that-knows-what-not-to-include-39kh",
      "tags": "ai, chatgpt, claude",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sakshsky_89"
    },
    {
      "title": "Steer GitHub Copilot CLI Sessions Remotely from Any Device",
      "description": "Start a Copilot CLI session on your workstation, then monitor and steer it from the browser or your phone.",
      "url": "https://dev.to/pwd9000/steer-github-copilot-cli-sessions-remotely-from-any-device-3mee",
      "tags": "githubcopilot, ai, tutorial, devops",
      "reactions": 6,
      "comments": 1,
      "reading_time": 9,
      "author": "pwd9000"
    },
    {
      "title": "How I'm using ASTs and Gemini to solve the \"Codebase Onboarding\" problem 🧠",
      "description": "Hi everyone! 👋  I’m Tara, a Senior Software Engineer and Consultant. Over the years, I've jumped...",
      "url": "https://dev.to/tworrell/how-im-using-asts-and-gemini-to-solve-the-codebase-onboarding-problem-1la9",
      "tags": "ai, productivity, webdev, showdev",
      "reactions": 11,
      "comments": 0,
      "reading_time": 3,
      "author": "tworrell"
    },
    {
      "title": "Garbage collecting OpenCode's 2.4 GB session database",
      "description": "I've been using OpenCode from time to time for about a month, mainly working on a single side project...",
      "url": "https://dev.to/whtsky/garbage-collecting-opencodes-24-gb-session-database-7b5",
      "tags": "opencode, ai, sqlite, ocgc",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "whtsky"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "twapi",
      "descendants": 72,
      "id": 47788542,
      "kids": [
        47789171,
        47788769,
        47788762,
        47788813,
        47788852,
        47789502,
        47789329,
        47789376,
        47788781,
        47789004,
        47788841,
        47788914,
        47789257,
        47788829,
        47789220,
        47789260,
        47789213,
        47788771,
        47788776,
        47789406,
        47788738,
        47788932,
        47788747,
        47789278
      ],
      "score": 132,
      "time": 1776312399,
      "title": "Darkbloom – Private inference on idle Macs",
      "type": "story",
      "url": "https://darkbloom.dev"
    },
    {
      "by": "pabs3",
      "descendants": 40,
      "id": 47788424,
      "kids": [
        47789272,
        47788998,
        47789048,
        47788921,
        47788501,
        47788981
      ],
      "score": 89,
      "time": 1776311078,
      "title": "FSF trying to contact Google about spammer sending 10k+ mails from Gmail account",
      "type": "story",
      "url": "https://daedal.io/@thomzane/116410863009847575"
    },
    {
      "by": "the-mitr",
      "descendants": 37,
      "id": 47788845,
      "kids": [
        47789550,
        47789181,
        47789194,
        47789382,
        47789303,
        47789294,
        47789144,
        47789270,
        47789209,
        47789304,
        47789496,
        47789442,
        47789484,
        47789170,
        47789195,
        47789192,
        47789160
      ],
      "score": 39,
      "time": 1776315944,
      "title": "Sal Khan's AI revolution hasn't happened yet",
      "type": "story",
      "url": "https://www.chalkbeat.org/2026/04/09/sal-khan-reflects-on-ai-in-schools-and-khanmigo/"
    },
    {
      "by": "airhangerf15",
      "descendants": 9,
      "id": 47788473,
      "kids": [
        47789377,
        47789279,
        47789392,
        47788971
      ],
      "score": 53,
      "time": 1776311661,
      "title": "RedSun: System user access on Win 11/10 and Server with the April 2026 Update",
      "type": "story",
      "url": "https://github.com/Nightmare-Eclipse/RedSun"
    },
    {
      "by": "Zetaphor",
      "descendants": 22,
      "id": 47788385,
      "kids": [
        47789485,
        47789458,
        47789364,
        47788835,
        47789429,
        47789481,
        47788389,
        47789393,
        47789322,
        47789319,
        47789350,
        47789339
      ],
      "score": 106,
      "time": 1776310511,
      "title": "Stop Using Ollama",
      "type": "story",
      "url": "https://sleepingrobots.com/dreams/stop-using-ollama/"
    },
    {
      "by": "jmarbach",
      "descendants": 5,
      "id": 47788818,
      "kids": [
        47789313,
        47789492,
        47789415,
        47789420,
        47789202
      ],
      "score": 22,
      "text": "Full disclosure - I formerly worked for Grafana Labs.<p>The size of this Grafana Mimir deployment would rank it in the top echelon of customers. The irony is that this may be a $0 revenue user for Grafana Labs.",
      "time": 1776315665,
      "title": "Moving a large-scale metrics pipeline from StatsD to OpenTelemetry / Prometheus",
      "type": "story",
      "url": "https://medium.com/airbnb-engineering/building-a-high-volume-metrics-pipeline-with-opentelemetry-and-vmagent-c714d6910b45"
    },
    {
      "by": "jsomers",
      "descendants": 20,
      "id": 47747770,
      "kids": [
        47788736,
        47789486,
        47788634,
        47788549,
        47789384,
        47789311,
        47788667,
        47788714,
        47788718,
        47788632,
        47789189,
        47788456,
        47788671
      ],
      "score": 109,
      "time": 1776056268,
      "title": "The paper computer",
      "type": "story",
      "url": "https://jsomers.net/blog/the-paper-computer"
    },
    {
      "by": "pwim",
      "descendants": 3,
      "id": 47788633,
      "kids": [
        47789471,
        47789432,
        47788858,
        47789465
      ],
      "score": 25,
      "time": 1776313376,
      "title": "A Look into NaviDial, Japan's Legacy Phone Service",
      "type": "story",
      "url": "https://www.tokyodev.com/articles/a-look-into-navidial-japan-s-legacy-phone-service"
    },
    {
      "by": "dbreunig",
      "descendants": 125,
      "id": 47769089,
      "kids": [
        47785275,
        47785461,
        47785203,
        47785458,
        47787695,
        47786696,
        47785247,
        47788333,
        47785264,
        47788933,
        47788226,
        47785395,
        47785349,
        47787662,
        47785423,
        47785452,
        47787166,
        47787187,
        47788249,
        47789368,
        47787246,
        47788417,
        47786967,
        47789094,
        47785568,
        47786485,
        47785731,
        47785386,
        47786956,
        47786473,
        47785219,
        47788312,
        47785258,
        47785526,
        47786989,
        47786375,
        47786383,
        47787145,
        47786126,
        47785987,
        47785846,
        47785783,
        47786805,
        47785325,
        47788486,
        47786241,
        47785725,
        47785909,
        47788451,
        47785505,
        47786062,
        47788248,
        47786979,
        47786278,
        47787045,
        47786405,
        47788423,
        47787619,
        47785732
      ],
      "score": 360,
      "time": 1776190094,
      "title": "Cybersecurity looks like proof of work now",
      "type": "story",
      "url": "https://www.dbreunig.com/2026/04/14/cybersecurity-is-proof-of-work-now.html"
    },
    {
      "by": "Aaronmacaron",
      "descendants": 4,
      "id": 47777894,
      "kids": [
        47789519,
        47789527,
        47789395,
        47780722
      ],
      "score": 19,
      "time": 1776254389,
      "title": "IPv6 traffic crosses the 50% mark",
      "type": "story",
      "url": "https://www.google.com/intl/en/ipv6/statistics.html?yzh=28197"
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
      "by": "twapi",
      "descendants": 72,
      "id": 47788542,
      "kids": [
        47789171,
        47788769,
        47788762,
        47788813,
        47788852,
        47789502,
        47789329,
        47789376,
        47788781,
        47789004,
        47788841,
        47788914,
        47789257,
        47788829,
        47789220,
        47789260,
        47789213,
        47788771,
        47788776,
        47789406,
        47788738,
        47788932,
        47788747,
        47789278
      ],
      "score": 132,
      "time": 1776312399,
      "title": "Darkbloom – Private inference on idle Macs",
      "type": "story",
      "url": "https://darkbloom.dev"
    },
    {
      "by": "pabs3",
      "descendants": 40,
      "id": 47788424,
      "kids": [
        47789272,
        47788998,
        47789048,
        47788921,
        47788501,
        47788981
      ],
      "score": 89,
      "time": 1776311078,
      "title": "FSF trying to contact Google about spammer sending 10k+ mails from Gmail account",
      "type": "story",
      "url": "https://daedal.io/@thomzane/116410863009847575"
    },
    {
      "by": "the-mitr",
      "descendants": 37,
      "id": 47788845,
      "kids": [
        47789550,
        47789181,
        47789194,
        47789382,
        47789303,
        47789294,
        47789144,
        47789270,
        47789209,
        47789304,
        47789496,
        47789442,
        47789484,
        47789170,
        47789195,
        47789192,
        47789160
      ],
      "score": 39,
      "time": 1776315944,
      "title": "Sal Khan's AI revolution hasn't happened yet",
      "type": "story",
      "url": "https://www.chalkbeat.org/2026/04/09/sal-khan-reflects-on-ai-in-schools-and-khanmigo/"
    },
    {
      "by": "airhangerf15",
      "descendants": 9,
      "id": 47788473,
      "kids": [
        47789377,
        47789279,
        47789392,
        47788971
      ],
      "score": 53,
      "time": 1776311661,
      "title": "RedSun: System user access on Win 11/10 and Server with the April 2026 Update",
      "type": "story",
      "url": "https://github.com/Nightmare-Eclipse/RedSun"
    },
    {
      "by": "Zetaphor",
      "descendants": 22,
      "id": 47788385,
      "kids": [
        47789485,
        47789458,
        47789364,
        47788835,
        47789429,
        47789481,
        47788389,
        47789393,
        47789322,
        47789319,
        47789350,
        47789339
      ],
      "score": 106,
      "time": 1776310511,
      "title": "Stop Using Ollama",
      "type": "story",
      "url": "https://sleepingrobots.com/dreams/stop-using-ollama/"
    },
    {
      "by": "jmarbach",
      "descendants": 5,
      "id": 47788818,
      "kids": [
        47789313,
        47789492,
        47789415,
        47789420,
        47789202
      ],
      "score": 22,
      "text": "Full disclosure - I formerly worked for Grafana Labs.<p>The size of this Grafana Mimir deployment would rank it in the top echelon of customers. The irony is that this may be a $0 revenue user for Grafana Labs.",
      "time": 1776315665,
      "title": "Moving a large-scale metrics pipeline from StatsD to OpenTelemetry / Prometheus",
      "type": "story",
      "url": "https://medium.com/airbnb-engineering/building-a-high-volume-metrics-pipeline-with-opentelemetry-and-vmagent-c714d6910b45"
    },
    {
      "by": "jsomers",
      "descendants": 20,
      "id": 47747770,
      "kids": [
        47788736,
        47789486,
        47788634,
        47788549,
        47789384,
        47789311,
        47788667,
        47788714,
        47788718,
        47788632,
        47789189,
        47788456,
        47788671
      ],
      "score": 109,
      "time": 1776056268,
      "title": "The paper computer",
      "type": "story",
      "url": "https://jsomers.net/blog/the-paper-computer"
    },
    {
      "by": "pwim",
      "descendants": 3,
      "id": 47788633,
      "kids": [
        47789471,
        47789432,
        47788858,
        47789465
      ],
      "score": 25,
      "time": 1776313376,
      "title": "A Look into NaviDial, Japan's Legacy Phone Service",
      "type": "story",
      "url": "https://www.tokyodev.com/articles/a-look-into-navidial-japan-s-legacy-phone-service"
    },
    {
      "by": "dbreunig",
      "descendants": 125,
      "id": 47769089,
      "kids": [
        47785275,
        47785461,
        47785203,
        47785458,
        47787695,
        47786696,
        47785247,
        47788333,
        47785264,
        47788933,
        47788226,
        47785395,
        47785349,
        47787662,
        47785423,
        47785452,
        47787166,
        47787187,
        47788249,
        47789368,
        47787246,
        47788417,
        47786967,
        47789094,
        47785568,
        47786485,
        47785731,
        47785386,
        47786956,
        47786473,
        47785219,
        47788312,
        47785258,
        47785526,
        47786989,
        47786375,
        47786383,
        47787145,
        47786126,
        47785987,
        47785846,
        47785783,
        47786805,
        47785325,
        47788486,
        47786241,
        47785725,
        47785909,
        47788451,
        47785505,
        47786062,
        47788248,
        47786979,
        47786278,
        47787045,
        47786405,
        47788423,
        47787619,
        47785732
      ],
      "score": 360,
      "time": 1776190094,
      "title": "Cybersecurity looks like proof of work now",
      "type": "story",
      "url": "https://www.dbreunig.com/2026/04/14/cybersecurity-is-proof-of-work-now.html"
    },
    {
      "by": "Aaronmacaron",
      "descendants": 4,
      "id": 47777894,
      "kids": [
        47789519,
        47789527,
        47789395,
        47780722
      ],
      "score": 19,
      "time": 1776254389,
      "title": "IPv6 traffic crosses the 50% mark",
      "type": "story",
      "url": "https://www.google.com/intl/en/ipv6/statistics.html?yzh=28197"
    },
    {
      "by": "armcat",
      "descendants": 125,
      "id": 47785397,
      "kids": [
        47786185,
        47789499,
        47788461,
        47786461,
        47786942,
        47789349,
        47786296,
        47786155,
        47786745,
        47789255,
        47786582,
        47788916,
        47788798,
        47786854,
        47786501,
        47786449,
        47787311,
        47786940,
        47786764,
        47786853,
        47788745,
        47788763,
        47788579,
        47786364,
        47786761,
        47787517,
        47786991,
        47786747,
        47786115,
        47786707,
        47786271,
        47786498
      ],
      "score": 173,
      "time": 1776288065,
      "title": "ChatGPT for Excel",
      "type": "story",
      "url": "https://chatgpt.com/apps/spreadsheets/"
    },
    {
      "by": "sebg",
      "descendants": 2,
      "id": 47738673,
      "kids": [
        47789532,
        47789387
      ],
      "score": 29,
      "time": 1775995243,
      "title": "Fast and Easy Levenshtein distance using a Trie",
      "type": "story",
      "url": "https://stevehanov.ca/blog/fast-and-easy-levenshtein-distance-using-a-trie"
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
      "title": "You cannot use the GNU (A)GPL to take software freedom away",
      "url": "https://www.fsf.org/blogs/licensing/agpl-is-not-a-tool-for-taking-freedom-away",
      "score": 56,
      "comments": 6,
      "tags": [
        "law"
      ],
      "id": "nihbc8"
    },
    {
      "title": "Retrofitting JIT Compilers into C Interpreters",
      "url": "https://tratt.net/laurie/blog/2026/retrofitting_jit_compilers_into_c_interpreters.html",
      "score": 58,
      "comments": 16,
      "tags": [
        "compilers"
      ],
      "id": "q6j2fu"
    },
    {
      "title": "Things you didn't know about indexes",
      "url": "https://jon.chrt.dev/2026/04/15/things-you-didnt-know-about-indexes.html",
      "score": 45,
      "comments": 18,
      "tags": [
        "databases"
      ],
      "id": "otzxqs"
    },
    {
      "title": "SDL3 - Add DOS platform support",
      "url": "https://bsky.app/profile/dosnostalgic.bsky.social/post/3mjfdos7iok2o",
      "score": 35,
      "comments": 9,
      "tags": [
        "c",
        "games",
        "programming",
        "retrocomputing"
      ],
      "id": "jbyxup"
    },
    {
      "title": "AI Assistance Reduces Persistence and Hurts Independent Performance",
      "url": "https://arxiv.org/pdf/2604.04721",
      "score": 19,
      "comments": 6,
      "tags": [
        "ai",
        "practices"
      ],
      "id": "r4dspa"
    },
    {
      "title": "Xata: Open source Postgres platform with copy-on-write branching and scale-to-zero",
      "url": "https://github.com/xataio/xata",
      "score": 13,
      "comments": 2,
      "tags": [
        "databases"
      ],
      "id": "8disen"
    },
    {
      "title": "I don't care that it's X times faster",
      "url": "https://tinkering.xyz/faster/",
      "score": 63,
      "comments": 15,
      "tags": [
        "performance",
        "rant"
      ],
      "id": "vb70md"
    },
    {
      "title": "Direct Win32 API, Weird-Shaped Windows, and Why They Mostly Disappeared",
      "url": "https://warped3.substack.com/p/direct-win32-api-weird-shaped-windows",
      "score": 25,
      "comments": 6,
      "tags": [
        "windows"
      ],
      "id": "hphrhd"
    },
    {
      "title": "Zig 0.16.0 Release Notes",
      "url": "https://ziglang.org/download/0.16.0/release-notes.html",
      "score": 147,
      "comments": 41,
      "tags": [
        "zig"
      ],
      "id": "4vvozb"
    },
    {
      "title": "Not all elementary functions can be expressed with exp-minus-log",
      "url": "https://www.stylewarning.com/posts/not-all-elementary/",
      "score": 11,
      "comments": 4,
      "tags": [
        "math"
      ],
      "id": "inohss"
    }
  ]
}
```

