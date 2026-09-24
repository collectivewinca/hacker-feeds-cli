# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-24 06:40:06 UTC

Runtime note: executed with NODE_OPTIONS=--require /tmp/hf-polyfill.js

## 1. Weekend Build Ideas with Demand

**Query:** What should I build this weekend that has demand?

**Command:**
```bash
echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set' ; node bin/main.js --json github -s weekly -l typescript ; node bin/main.js --json reddit -t webdev -s top
```

**Output:**
```text
[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set
- Fetching feeds...
{
  "source": "github",
  "since": "weekly",
  "language": "typescript",
  "items": [
    {
      "author": "anthropics",
      "repo": "claude-code",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code",
      "desc": "Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 24255,
      "added_stars": 2762,
      "builtBy": [
        {
          "username": "actions-user",
          "href": "https://github.com/actions-user",
          "avatar": "https://avatars.githubusercontent.com/u/65916846"
        },
        {
          "username": "poteat",
          "href": "https://github.com/poteat",
          "avatar": "https://avatars.githubusercontent.com/u/7668446"
        },
        {
          "username": "bcherny",
          "href": "https://github.com/bcherny",
          "avatar": "https://avatars.githubusercontent.com/u/1761758"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ant-kurt",
          "href": "https://github.com/ant-kurt",
          "avatar": "https://avatars.githubusercontent.com/u/209710463"
        }
      ]
    },
    {
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5030,
      "added_stars": 6435,
      "builtBy": [
        {
          "username": "nwparker",
          "href": "https://github.com/nwparker",
          "avatar": "https://avatars.githubusercontent.com/u/4138956"
        },
        {
          "username": "AmethystLiang",
          "href": "https://github.com/AmethystLiang",
          "avatar": "https://avatars.githubusercontent.com/u/6427696"
        },
        {
          "username": "orca-ide",
          "href": "https://github.com/orca-ide",
          "avatar": "https://avatars.githubusercontent.com/u/277417572"
        },
        {
          "username": "brennanb2025",
          "href": "https://github.com/brennanb2025",
          "avatar": "https://avatars.githubusercontent.com/u/79079362"
        },
        {
          "username": "Jinwoo-H",
          "href": "https://github.com/Jinwoo-H",
          "avatar": "https://avatars.githubusercontent.com/u/73622457"
        }
      ]
    },
    {
      "author": "LibreChat-AI",
      "repo": "LibreChat",
      "avatar": "https://github.com/LibreChat-AI.png",
      "repo_link": "https://github.com/LibreChat-AI/LibreChat",
      "desc": "Enhanced ChatGPT Clone: Features Agents, MCP, Skills, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, GPT-5, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions, Secure Multi-User Auth, Presets, open-source for self-hosting. Active",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9186,
      "added_stars": 949,
      "builtBy": [
        {
          "username": "danny-avila",
          "href": "https://github.com/danny-avila",
          "avatar": "https://avatars.githubusercontent.com/u/110412045"
        },
        {
          "username": "berry-13",
          "href": "https://github.com/berry-13",
          "avatar": "https://avatars.githubusercontent.com/u/81851188"
        },
        {
          "username": "dustinhealy",
          "href": "https://github.com/dustinhealy",
          "avatar": "https://avatars.githubusercontent.com/u/54083382"
        },
        {
          "username": "wtlyu",
          "href": "https://github.com/wtlyu",
          "avatar": "https://avatars.githubusercontent.com/u/8267138"
        }
      ]
    },
    {
      "author": "cline",
      "repo": "cline",
      "avatar": "https://github.com/cline.png",
      "repo_link": "https://github.com/cline/cline",
      "desc": "Autonomous coding agent as an SDK, IDE extension, or CLI assistant.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7503,
      "added_stars": 1177,
      "builtBy": [
        {
          "username": "saoudrizwan",
          "href": "https://github.com/saoudrizwan",
          "avatar": "https://avatars.githubusercontent.com/u/7799382"
        },
        {
          "username": "abeatrix",
          "href": "https://github.com/abeatrix",
          "avatar": "https://avatars.githubusercontent.com/u/68532117"
        },
        {
          "username": "celestial-vault",
          "href": "https://github.com/celestial-vault",
          "avatar": "https://avatars.githubusercontent.com/u/58194240"
        },
        {
          "username": "arafatkatze",
          "href": "https://github.com/arafatkatze",
          "avatar": "https://avatars.githubusercontent.com/u/11155207"
        },
        {
          "username": "BarreiroT",
          "href": "https://github.com/BarreiroT",
          "avatar": "https://avatars.githubusercontent.com/u/52393857"
        }
      ]
    },
    {
      "author": "Fission-AI",
      "repo": "OpenSpec",
      "avatar": "https://github.com/Fission-AI.png",
      "repo_link": "https://github.com/Fission-AI/OpenSpec",
      "desc": "Spec-driven development (SDD) for AI coding assistants.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4795,
      "added_stars": 1538,
      "builtBy": [
        {
          "username": "TabishB",
          "href": "https://github.com/TabishB",
          "avatar": "https://avatars.githubusercontent.com/u/30385142"
        },
        {
          "username": "clay-good",
          "href": "https://github.com/clay-good",
          "avatar": "https://avatars.githubusercontent.com/u/237345393"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "Open-Dev-Society",
      "repo": "OpenStock",
      "avatar": "https://github.com/Open-Dev-Society.png",
      "repo_link": "https://github.com/Open-Dev-Society/OpenStock",
      "desc": "OpenStock is an open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights — built openly, for everyone, forever free.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2306,
      "added_stars": 4356,
      "builtBy": [
        {
          "username": "ravixalgorithm",
          "href": "https://github.com/ravixalgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/148683640"
        },
        {
          "username": "keshav-005",
          "href": "https://github.com/keshav-005",
          "avatar": "https://avatars.githubusercontent.com/u/180140750"
        },
        {
          "username": "nb-src",
          "href": "https://github.com/nb-src",
          "avatar": "https://avatars.githubusercontent.com/u/76625701"
        },
        {
          "username": "chinnsenn",
          "href": "https://github.com/chinnsenn",
          "avatar": "https://avatars.githubusercontent.com/u/13096352"
        }
      ]
    },
    {
      "author": "Tencent",
      "repo": "BrowserSkill",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/BrowserSkill",
      "desc": "Let AI agents use your real, logged-in browser without interrupting your work. CLI + extension for browser automation across any shell-capable AI agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 504,
      "added_stars": 4513,
      "builtBy": [
        {
          "username": "TencentXiaowei",
          "href": "https://github.com/TencentXiaowei",
          "avatar": "https://avatars.githubusercontent.com/u/87162611"
        },
        {
          "username": "iuyo5678",
          "href": "https://github.com/iuyo5678",
          "avatar": "https://avatars.githubusercontent.com/u/5351707"
        },
        {
          "username": "Ljy-0827",
          "href": "https://github.com/Ljy-0827",
          "avatar": "https://avatars.githubusercontent.com/u/84192562"
        },
        {
          "username": "BB-fat",
          "href": "https://github.com/BB-fat",
          "avatar": "https://avatars.githubusercontent.com/u/45072480"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "krillinai",
      "repo": "OpenCreator",
      "avatar": "https://github.com/krillinai.png",
      "repo_link": "https://github.com/krillinai/OpenCreator",
      "desc": "Formerly KrillinAI. Open-source AI workspace for creators, powered by Codex. Create videos, images, voice, avatars, video translation, and edits with Agents in one place.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1260,
      "added_stars": 855,
      "builtBy": [
        {
          "username": "maranello-o",
          "href": "https://github.com/maranello-o",
          "avatar": "https://avatars.githubusercontent.com/u/114557800"
        },
        {
          "username": "wulien",
          "href": "https://github.com/wulien",
          "avatar": "https://avatars.githubusercontent.com/u/2296937"
        },
        {
          "username": "krillinai",
          "href": "https://github.com/krillinai",
          "avatar": "https://avatars.githubusercontent.com/u/2386538"
        },
        {
          "username": "puji4810",
          "href": "https://github.com/puji4810",
          "avatar": "https://avatars.githubusercontent.com/u/148682040"
        },
        {
          "username": "PairZhu",
          "href": "https://github.com/PairZhu",
          "avatar": "https://avatars.githubusercontent.com/u/47098840"
        }
      ]
    },
    {
      "author": "dream-num",
      "repo": "univer",
      "avatar": "https://github.com/dream-num.png",
      "repo_link": "https://github.com/dream-num/univer",
      "desc": "The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1462,
      "added_stars": 1711,
      "builtBy": [
        {
          "username": "jikkai",
          "href": "https://github.com/jikkai",
          "avatar": "https://avatars.githubusercontent.com/u/14025786"
        },
        {
          "username": "DR-Univer",
          "href": "https://github.com/DR-Univer",
          "avatar": "https://avatars.githubusercontent.com/u/68851825"
        },
        {
          "username": "wzhudev",
          "href": "https://github.com/wzhudev",
          "avatar": "https://avatars.githubusercontent.com/u/12122021"
        },
        {
          "username": "Dushusir",
          "href": "https://github.com/Dushusir",
          "avatar": "https://avatars.githubusercontent.com/u/26371161"
        },
        {
          "username": "wpxp123456",
          "href": "https://github.com/wpxp123456",
          "avatar": "https://avatars.githubusercontent.com/u/26315959"
        }
      ]
    },
    {
      "author": "supabase",
      "repo": "supabase",
      "avatar": "https://github.com/supabase.png",
      "repo_link": "https://github.com/supabase/supabase",
      "desc": "The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 14602,
      "added_stars": 1474,
      "builtBy": [
        {
          "username": "joshenlim",
          "href": "https://github.com/joshenlim",
          "avatar": "https://avatars.githubusercontent.com/u/19742402"
        },
        {
          "username": "kiwicopple",
          "href": "https://github.com/kiwicopple",
          "avatar": "https://avatars.githubusercontent.com/u/10214025"
        },
        {
          "username": "MildTomato",
          "href": "https://github.com/MildTomato",
          "avatar": "https://avatars.githubusercontent.com/u/8291514"
        },
        {
          "username": "saltcod",
          "href": "https://github.com/saltcod",
          "avatar": "https://avatars.githubusercontent.com/u/105593"
        },
        {
          "username": "alaister",
          "href": "https://github.com/alaister",
          "avatar": "https://avatars.githubusercontent.com/u/10985857"
        }
      ]
    },
    {
      "author": "ever-co",
      "repo": "ever-gauzy",
      "avatar": "https://github.com/ever-co.png",
      "repo_link": "https://github.com/ever-co/ever-gauzy",
      "desc": "Ever® Gauzy™ - Open Business Management Platform (ERP/CRM/HRM/ATS/PM) - https://gauzy.co",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1173,
      "added_stars": 999,
      "builtBy": [
        {
          "username": "rahul-rocket",
          "href": "https://github.com/rahul-rocket",
          "avatar": "https://avatars.githubusercontent.com/u/41804588"
        },
        {
          "username": "evereq",
          "href": "https://github.com/evereq",
          "avatar": "https://avatars.githubusercontent.com/u/118497"
        },
        {
          "username": "adkif",
          "href": "https://github.com/adkif",
          "avatar": "https://avatars.githubusercontent.com/u/45813955"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "AlexTasev",
          "href": "https://github.com/AlexTasev",
          "avatar": "https://avatars.githubusercontent.com/u/40795644"
        }
      ]
    },
    {
      "author": "vastsa",
      "repo": "PI-Desktop",
      "avatar": "https://github.com/vastsa.png",
      "repo_link": "https://github.com/vastsa/PI-Desktop",
      "desc": "Local-first AI coding agent desktop: Electron + Rust host core + pi Agent Harness + user-installable plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 468,
      "added_stars": 1381,
      "builtBy": [
        {
          "username": "vastsa",
          "href": "https://github.com/vastsa",
          "avatar": "https://avatars.githubusercontent.com/u/48862574"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Tioit-Wang",
          "href": "https://github.com/Tioit-Wang",
          "avatar": "https://avatars.githubusercontent.com/u/104554654"
        },
        {
          "username": "muzimu217",
          "href": "https://github.com/muzimu217",
          "avatar": "https://avatars.githubusercontent.com/u/201334833"
        },
        {
          "username": "yuxino",
          "href": "https://github.com/yuxino",
          "avatar": "https://avatars.githubusercontent.com/u/12481935"
        }
      ]
    },
    {
      "author": "ahmedkhaleel2004",
      "repo": "gitdiagram",
      "avatar": "https://github.com/ahmedkhaleel2004.png",
      "repo_link": "https://github.com/ahmedkhaleel2004/gitdiagram",
      "desc": "Free, simple, fast interactive diagrams for any GitHub repository",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1295,
      "added_stars": 1003,
      "builtBy": [
        {
          "username": "ahmedkhaleel2004",
          "href": "https://github.com/ahmedkhaleel2004",
          "avatar": "https://avatars.githubusercontent.com/u/111161052"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "martin226",
          "href": "https://github.com/martin226",
          "avatar": "https://avatars.githubusercontent.com/u/46298951"
        }
      ]
    },
    {
      "author": "wonderwhy-er",
      "repo": "DesktopCommanderMCP",
      "avatar": "https://github.com/wonderwhy-er.png",
      "repo_link": "https://github.com/wonderwhy-er/DesktopCommanderMCP",
      "desc": "This is MCP server for Claude that gives it terminal control, file system search and diff file editing capabilities",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1220,
      "added_stars": 159,
      "builtBy": [
        {
          "username": "wonderwhy-er",
          "href": "https://github.com/wonderwhy-er",
          "avatar": "https://avatars.githubusercontent.com/u/1150639"
        },
        {
          "username": "serg33v",
          "href": "https://github.com/serg33v",
          "avatar": "https://avatars.githubusercontent.com/u/989699"
        },
        {
          "username": "edgarsskore",
          "href": "https://github.com/edgarsskore",
          "avatar": "https://avatars.githubusercontent.com/u/22543693"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "dmitry-ottic-ai",
          "href": "https://github.com/dmitry-ottic-ai",
          "avatar": "https://avatars.githubusercontent.com/u/181032508"
        }
      ]
    },
    {
      "author": "Crosstalk-Solutions",
      "repo": "project-nomad",
      "avatar": "https://github.com/Crosstalk-Solutions.png",
      "repo_link": "https://github.com/Crosstalk-Solutions/project-nomad",
      "desc": "Project NOMAD is an offline-first knowledge and education server. Wikipedia, thousands of books, courses, maps, and optional local AI, all running on hardware you own with no internet required.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3791,
      "added_stars": 1194,
      "builtBy": [
        {
          "username": "jakeaturner",
          "href": "https://github.com/jakeaturner",
          "avatar": "https://avatars.githubusercontent.com/u/52841588"
        },
        {
          "username": "chriscrosstalk",
          "href": "https://github.com/chriscrosstalk",
          "avatar": "https://avatars.githubusercontent.com/u/49691103"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cosmistack-bot",
          "href": "https://github.com/cosmistack-bot",
          "avatar": "https://avatars.githubusercontent.com/u/175166532"
        }
      ]
    },
    {
      "author": "vercel-labs",
      "repo": "json-render",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/json-render",
      "desc": "The Generative UI framework",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 956,
      "added_stars": 1986,
      "builtBy": [
        {
          "username": "ctate",
          "href": "https://github.com/ctate",
          "avatar": "https://avatars.githubusercontent.com/u/366502"
        },
        {
          "username": "Railly",
          "href": "https://github.com/Railly",
          "avatar": "https://avatars.githubusercontent.com/u/51397083"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "lucianfialho",
          "href": "https://github.com/lucianfialho",
          "avatar": "https://avatars.githubusercontent.com/u/3296497"
        }
      ]
    },
    {
      "author": "jamiepine",
      "repo": "voicebox",
      "avatar": "https://github.com/jamiepine.png",
      "repo_link": "https://github.com/jamiepine/voicebox",
      "desc": "The open-source AI voice studio. Clone, dictate, create.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6927,
      "added_stars": 1574,
      "builtBy": [
        {
          "username": "jamiepine",
          "href": "https://github.com/jamiepine",
          "avatar": "https://avatars.githubusercontent.com/u/32987599"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tomasmach",
          "href": "https://github.com/tomasmach",
          "avatar": "https://avatars.githubusercontent.com/u/52257177"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "selop",
          "href": "https://github.com/selop",
          "avatar": "https://avatars.githubusercontent.com/u/5173254"
        }
      ]
    },
    {
      "author": "NanmiCoder",
      "repo": "cc-haha",
      "avatar": "https://github.com/NanmiCoder.png",
      "repo_link": "https://github.com/NanmiCoder/cc-haha",
      "desc": "Local-first cross-platform desktop workspace for Claude Code / agents: multi-agent, Git worktrees, code diffs, skill marketplace, multi-model, Computer Use, task-aware desktop pets, with WeChat, Feishu, DingTalk, Telegram, WhatsApp and H5 access.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8584,
      "added_stars": 227,
      "builtBy": [
        {
          "username": "NanmiCoder",
          "href": "https://github.com/NanmiCoder",
          "avatar": "https://avatars.githubusercontent.com/u/47178017"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "zhbdesign",
          "href": "https://github.com/zhbdesign",
          "avatar": "https://avatars.githubusercontent.com/u/50901800"
        },
        {
          "username": "1506086927",
          "href": "https://github.com/1506086927",
          "avatar": "https://avatars.githubusercontent.com/u/79351885"
        },
        {
          "username": "YanZhiwei",
          "href": "https://github.com/YanZhiwei",
          "avatar": "https://avatars.githubusercontent.com/u/7938690"
        }
      ]
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

## 2. Monthly Stack Trends

**Query:** What stack trends should I follow this month?

**Command:**
```bash
node bin/main.js --json github -s monthly -l go ; node bin/main.js --json github -s monthly -l python ; node bin/main.js --json echojs -s latest -c 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "github",
  "since": "monthly",
  "language": "go",
  "items": [
    {
      "author": "alibaba",
      "repo": "open-code-review",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/open-code-review",
      "desc": "Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2901,
      "added_stars": 19196,
      "builtBy": [
        {
          "username": "lizhengfeng101",
          "href": "https://github.com/lizhengfeng101",
          "avatar": "https://avatars.githubusercontent.com/u/254839944"
        },
        {
          "username": "wu21-web",
          "href": "https://github.com/wu21-web",
          "avatar": "https://avatars.githubusercontent.com/u/149216116"
        },
        {
          "username": "chethanuk",
          "href": "https://github.com/chethanuk",
          "avatar": "https://avatars.githubusercontent.com/u/16241795"
        },
        {
          "username": "stay-foolish-forever",
          "href": "https://github.com/stay-foolish-forever",
          "avatar": "https://avatars.githubusercontent.com/u/61303077"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "Tencent",
      "repo": "WeKnora",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/WeKnora",
      "desc": "Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3965,
      "added_stars": 9078,
      "builtBy": [
        {
          "username": "lyingbug",
          "href": "https://github.com/lyingbug",
          "avatar": "https://avatars.githubusercontent.com/u/11257935"
        },
        {
          "username": "voidkey",
          "href": "https://github.com/voidkey",
          "avatar": "https://avatars.githubusercontent.com/u/67856742"
        },
        {
          "username": "begoniezhao",
          "href": "https://github.com/begoniezhao",
          "avatar": "https://avatars.githubusercontent.com/u/216642699"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "majd",
      "repo": "ipatool",
      "avatar": "https://github.com/majd.png",
      "repo_link": "https://github.com/majd/ipatool",
      "desc": "Command-line tool that allows you to search for iOS, iPadOS, tvOS, visionOS, and macOS apps on the App Store, and download .ipa or macOS .pkg app packages.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 946,
      "added_stars": 1540,
      "builtBy": [
        {
          "username": "majd",
          "href": "https://github.com/majd",
          "avatar": "https://avatars.githubusercontent.com/u/1644696"
        },
        {
          "username": "ViRb3",
          "href": "https://github.com/ViRb3",
          "avatar": "https://avatars.githubusercontent.com/u/2650170"
        },
        {
          "username": "tux-mind",
          "href": "https://github.com/tux-mind",
          "avatar": "https://avatars.githubusercontent.com/u/1824153"
        },
        {
          "username": "testwill",
          "href": "https://github.com/testwill",
          "avatar": "https://avatars.githubusercontent.com/u/8717479"
        }
      ]
    },
    {
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 241,
      "added_stars": 3298,
      "builtBy": [
        {
          "username": "asciimoo",
          "href": "https://github.com/asciimoo",
          "avatar": "https://avatars.githubusercontent.com/u/20240"
        },
        {
          "username": "4evy",
          "href": "https://github.com/4evy",
          "avatar": "https://avatars.githubusercontent.com/u/57304299"
        },
        {
          "username": "ISSOtm",
          "href": "https://github.com/ISSOtm",
          "avatar": "https://avatars.githubusercontent.com/u/15271137"
        },
        {
          "username": "Shadowbee27",
          "href": "https://github.com/Shadowbee27",
          "avatar": "https://avatars.githubusercontent.com/u/169397554"
        }
      ]
    },
    {
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 420,
      "added_stars": 1726,
      "builtBy": [
        {
          "username": "BenTheElder",
          "href": "https://github.com/BenTheElder",
          "avatar": "https://avatars.githubusercontent.com/u/917931"
        },
        {
          "username": "juli4n",
          "href": "https://github.com/juli4n",
          "avatar": "https://avatars.githubusercontent.com/u/680407"
        },
        {
          "username": "HavenXia",
          "href": "https://github.com/HavenXia",
          "avatar": "https://avatars.githubusercontent.com/u/55463354"
        },
        {
          "username": "thockin",
          "href": "https://github.com/thockin",
          "avatar": "https://avatars.githubusercontent.com/u/5595220"
        },
        {
          "username": "zoez7",
          "href": "https://github.com/zoez7",
          "avatar": "https://avatars.githubusercontent.com/u/35669350"
        }
      ]
    },
    {
      "author": "theagentrouter",
      "repo": "agent-router",
      "avatar": "https://github.com/theagentrouter.png",
      "repo_link": "https://github.com/theagentrouter/agent-router",
      "desc": "Manages Unified Access to Generative AI Services built on Envoy Gateway",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 386,
      "added_stars": 189,
      "builtBy": [
        {
          "username": "mathetake",
          "href": "https://github.com/mathetake",
          "avatar": "https://avatars.githubusercontent.com/u/13513977"
        },
        {
          "username": "nacx",
          "href": "https://github.com/nacx",
          "avatar": "https://avatars.githubusercontent.com/u/446705"
        },
        {
          "username": "yuzisun",
          "href": "https://github.com/yuzisun",
          "avatar": "https://avatars.githubusercontent.com/u/7662095"
        },
        {
          "username": "missBerg",
          "href": "https://github.com/missBerg",
          "avatar": "https://avatars.githubusercontent.com/u/17533717"
        }
      ]
    },
    {
      "author": "glanceapp",
      "repo": "glance",
      "avatar": "https://github.com/glanceapp.png",
      "repo_link": "https://github.com/glanceapp/glance",
      "desc": "A self-hosted dashboard that puts all your feeds in one place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1464,
      "added_stars": 725,
      "builtBy": [
        {
          "username": "svilenmarkov",
          "href": "https://github.com/svilenmarkov",
          "avatar": "https://avatars.githubusercontent.com/u/7613769"
        },
        {
          "username": "ralphocdol",
          "href": "https://github.com/ralphocdol",
          "avatar": "https://avatars.githubusercontent.com/u/31056871"
        },
        {
          "username": "c0smicdev",
          "href": "https://github.com/c0smicdev",
          "avatar": "https://avatars.githubusercontent.com/u/161938764"
        },
        {
          "username": "wfg",
          "href": "https://github.com/wfg",
          "avatar": "https://avatars.githubusercontent.com/u/22161283"
        },
        {
          "username": "DVDAndroid",
          "href": "https://github.com/DVDAndroid",
          "avatar": "https://avatars.githubusercontent.com/u/6277172"
        }
      ]
    },
    {
      "author": "bjarneo",
      "repo": "cliamp",
      "avatar": "https://github.com/bjarneo.png",
      "repo_link": "https://github.com/bjarneo/cliamp",
      "desc": "cliamp - Terminal music player inspired by winamp",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 290,
      "added_stars": 869,
      "builtBy": [
        {
          "username": "bjarneo",
          "href": "https://github.com/bjarneo",
          "avatar": "https://avatars.githubusercontent.com/u/1419214"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tahadx",
          "href": "https://github.com/tahadx",
          "avatar": "https://avatars.githubusercontent.com/u/152646159"
        },
        {
          "username": "coryshaw1",
          "href": "https://github.com/coryshaw1",
          "avatar": "https://avatars.githubusercontent.com/u/5014172"
        },
        {
          "username": "oweneldridge",
          "href": "https://github.com/oweneldridge",
          "avatar": "https://avatars.githubusercontent.com/u/90428464"
        }
      ]
    },
    {
      "author": "cloudflare",
      "repo": "cloudflared",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflared",
      "desc": "Cloudflare Tunnel client",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1454,
      "added_stars": 565,
      "builtBy": [
        {
          "username": "chungthuang",
          "href": "https://github.com/chungthuang",
          "avatar": "https://avatars.githubusercontent.com/u/7826979"
        },
        {
          "username": "DevinCarr",
          "href": "https://github.com/DevinCarr",
          "avatar": "https://avatars.githubusercontent.com/u/4468678"
        },
        {
          "username": "adamchalmers",
          "href": "https://github.com/adamchalmers",
          "avatar": "https://avatars.githubusercontent.com/u/5407457"
        },
        {
          "username": "sudarshan-reddy",
          "href": "https://github.com/sudarshan-reddy",
          "avatar": "https://avatars.githubusercontent.com/u/12325664"
        },
        {
          "username": "ipostelnik",
          "href": "https://github.com/ipostelnik",
          "avatar": "https://avatars.githubusercontent.com/u/308114"
        }
      ]
    },
    {
      "author": "gtsteffaniak",
      "repo": "filebrowser",
      "avatar": "https://github.com/gtsteffaniak.png",
      "repo_link": "https://github.com/gtsteffaniak/filebrowser",
      "desc": "📂 Web File Browser",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 446,
      "added_stars": 561,
      "builtBy": [
        {
          "username": "gtsteffaniak",
          "href": "https://github.com/gtsteffaniak",
          "avatar": "https://avatars.githubusercontent.com/u/42989099"
        },
        {
          "username": "Kurami32",
          "href": "https://github.com/Kurami32",
          "avatar": "https://avatars.githubusercontent.com/u/178341547"
        },
        {
          "username": "Stephan-P",
          "href": "https://github.com/Stephan-P",
          "avatar": "https://avatars.githubusercontent.com/u/10008599"
        },
        {
          "username": "pyroch",
          "href": "https://github.com/pyroch",
          "avatar": "https://avatars.githubusercontent.com/u/5215882"
        }
      ]
    },
    {
      "author": "projectdiscovery",
      "repo": "katana",
      "avatar": "https://github.com/projectdiscovery.png",
      "repo_link": "https://github.com/projectdiscovery/katana",
      "desc": "A next-generation crawling and spidering framework.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1187,
      "added_stars": 245,
      "builtBy": [
        {
          "username": "Mzack9999",
          "href": "https://github.com/Mzack9999",
          "avatar": "https://avatars.githubusercontent.com/u/13421144"
        },
        {
          "username": "dogancanbakir",
          "href": "https://github.com/dogancanbakir",
          "avatar": "https://avatars.githubusercontent.com/u/65292895"
        },
        {
          "username": "ehsandeep",
          "href": "https://github.com/ehsandeep",
          "avatar": "https://avatars.githubusercontent.com/u/8293321"
        },
        {
          "username": "geeknik",
          "href": "https://github.com/geeknik",
          "avatar": "https://avatars.githubusercontent.com/u/466878"
        }
      ]
    },
    {
      "author": "weave-os",
      "repo": "router",
      "avatar": "https://github.com/weave-os.png",
      "repo_link": "https://github.com/weave-os/router",
      "desc": "Model router for agentic systems. Routes every prompt to the right model in <50ms. Cut costs 40-70% with just an endpoint change.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 138,
      "added_stars": 3999,
      "builtBy": [
        {
          "username": "steventohme",
          "href": "https://github.com/steventohme",
          "avatar": "https://avatars.githubusercontent.com/u/56594084"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "aminsamir45",
          "href": "https://github.com/aminsamir45",
          "avatar": "https://avatars.githubusercontent.com/u/115834029"
        },
        {
          "username": "a-churchill",
          "href": "https://github.com/a-churchill",
          "avatar": "https://avatars.githubusercontent.com/u/18105223"
        }
      ]
    },
    {
      "author": "coder",
      "repo": "coder",
      "avatar": "https://github.com/coder.png",
      "repo_link": "https://github.com/coder/coder",
      "desc": "Secure environments for developers and their agents",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1582,
      "added_stars": 2586,
      "builtBy": [
        {
          "username": "kylecarbs",
          "href": "https://github.com/kylecarbs",
          "avatar": "https://avatars.githubusercontent.com/u/7122116"
        },
        {
          "username": "mafredri",
          "href": "https://github.com/mafredri",
          "avatar": "https://avatars.githubusercontent.com/u/147409"
        },
        {
          "username": "johnstcn",
          "href": "https://github.com/johnstcn",
          "avatar": "https://avatars.githubusercontent.com/u/4949514"
        },
        {
          "username": "Emyrk",
          "href": "https://github.com/Emyrk",
          "avatar": "https://avatars.githubusercontent.com/u/5446298"
        }
      ]
    },
    {
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1038,
      "added_stars": 1155,
      "builtBy": [
        {
          "username": "henrygd",
          "href": "https://github.com/henrygd",
          "avatar": "https://avatars.githubusercontent.com/u/8519632"
        },
        {
          "username": "svenvg93",
          "href": "https://github.com/svenvg93",
          "avatar": "https://avatars.githubusercontent.com/u/4511676"
        },
        {
          "username": "a-mnich",
          "href": "https://github.com/a-mnich",
          "avatar": "https://avatars.githubusercontent.com/u/56564725"
        },
        {
          "username": "stanol",
          "href": "https://github.com/stanol",
          "avatar": "https://avatars.githubusercontent.com/u/27770896"
        }
      ]
    },
    {
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 1Panel is a modern, open-source Linux server management panel and a lightweight AI management platform.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3361,
      "added_stars": 485,
      "builtBy": [
        {
          "username": "zhengkunwang223",
          "href": "https://github.com/zhengkunwang223",
          "avatar": "https://avatars.githubusercontent.com/u/31820853"
        },
        {
          "username": "ssongliu",
          "href": "https://github.com/ssongliu",
          "avatar": "https://avatars.githubusercontent.com/u/73214554"
        },
        {
          "username": "lan-yonghui",
          "href": "https://github.com/lan-yonghui",
          "avatar": "https://avatars.githubusercontent.com/u/81747598"
        },
        {
          "username": "wanghe-fit2cloud",
          "href": "https://github.com/wanghe-fit2cloud",
          "avatar": "https://avatars.githubusercontent.com/u/46734380"
        },
        {
          "username": "HynoR",
          "href": "https://github.com/HynoR",
          "avatar": "https://avatars.githubusercontent.com/u/20227709"
        }
      ]
    },
    {
      "author": "rorkai",
      "repo": "App-Store-Connect-CLI",
      "avatar": "https://github.com/rorkai.png",
      "repo_link": "https://github.com/rorkai/App-Store-Connect-CLI",
      "desc": "Fast, scriptable CLI for the App Store Connect API. Automate TestFlight, builds, submissions, signing, analytics, screenshots, subscriptions, and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 622,
      "added_stars": 1319,
      "builtBy": [
        {
          "username": "rudrankriyam",
          "href": "https://github.com/rudrankriyam",
          "avatar": "https://avatars.githubusercontent.com/u/30552772"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "mithileshchellappan",
          "href": "https://github.com/mithileshchellappan",
          "avatar": "https://avatars.githubusercontent.com/u/35962266"
        },
        {
          "username": "Abdo-codes",
          "href": "https://github.com/Abdo-codes",
          "avatar": "https://avatars.githubusercontent.com/u/80545944"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "seaweedfs",
      "repo": "seaweedfs",
      "avatar": "https://github.com/seaweedfs.png",
      "repo_link": "https://github.com/seaweedfs/seaweedfs",
      "desc": "SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3004,
      "added_stars": 784,
      "builtBy": [
        {
          "username": "chrislusf",
          "href": "https://github.com/chrislusf",
          "avatar": "https://avatars.githubusercontent.com/u/1543151"
        },
        {
          "username": "kmlebedev",
          "href": "https://github.com/kmlebedev",
          "avatar": "https://avatars.githubusercontent.com/u/9497591"
        },
        {
          "username": "chrisluuber",
          "href": "https://github.com/chrisluuber",
          "avatar": "https://avatars.githubusercontent.com/u/37195999"
        }
      ]
    },
    {
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4644,
      "added_stars": 1178,
      "builtBy": [
        {
          "username": "nekohasekai",
          "href": "https://github.com/nekohasekai",
          "avatar": "https://avatars.githubusercontent.com/u/56506714"
        },
        {
          "username": "macronut",
          "href": "https://github.com/macronut",
          "avatar": "https://avatars.githubusercontent.com/u/4027187"
        },
        {
          "username": "flyzstu",
          "href": "https://github.com/flyzstu",
          "avatar": "https://avatars.githubusercontent.com/u/94161727"
        },
        {
          "username": "NagaseMinato",
          "href": "https://github.com/NagaseMinato",
          "avatar": "https://avatars.githubusercontent.com/u/80738880"
        }
      ]
    },
    {
      "author": "authelia",
      "repo": "authelia",
      "avatar": "https://github.com/authelia.png",
      "repo_link": "https://github.com/authelia/authelia",
      "desc": "The Single Sign-On Multi-Factor portal for web apps. OpenID Certified™ and Post-Quantum Cryptography Ready.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1490,
      "added_stars": 453,
      "builtBy": [
        {
          "username": "james-d-elliott",
          "href": "https://github.com/james-d-elliott",
          "avatar": "https://avatars.githubusercontent.com/u/3903683"
        },
        {
          "username": "nightah",
          "href": "https://github.com/nightah",
          "avatar": "https://avatars.githubusercontent.com/u/3339418"
        },
        {
          "username": "clems4ever",
          "href": "https://github.com/clems4ever",
          "avatar": "https://avatars.githubusercontent.com/u/3193257"
        },
        {
          "username": "renovate-bot",
          "href": "https://github.com/renovate-bot",
          "avatar": "https://avatars.githubusercontent.com/u/25180681"
        }
      ]
    },
    {
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3206,
      "added_stars": 3053,
      "builtBy": [
        {
          "username": "sirozha",
          "href": "https://github.com/sirozha",
          "avatar": "https://avatars.githubusercontent.com/u/7765123"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "asdek",
          "href": "https://github.com/asdek",
          "avatar": "https://avatars.githubusercontent.com/u/4257336"
        },
        {
          "username": "mason5052",
          "href": "https://github.com/mason5052",
          "avatar": "https://avatars.githubusercontent.com/u/52062353"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "evcc-io",
      "repo": "evcc",
      "avatar": "https://github.com/evcc-io.png",
      "repo_link": "https://github.com/evcc-io/evcc",
      "desc": "solar charging ☀️🚘",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1519,
      "added_stars": 225,
      "builtBy": [
        {
          "username": "andig",
          "href": "https://github.com/andig",
          "avatar": "https://avatars.githubusercontent.com/u/184815"
        },
        {
          "username": "naltatis",
          "href": "https://github.com/naltatis",
          "avatar": "https://avatars.githubusercontent.com/u/152287"
        },
        {
          "username": "premultiply",
          "href": "https://github.com/premultiply",
          "avatar": "https://avatars.githubusercontent.com/u/4681172"
        },
        {
          "username": "weblate",
          "href": "https://github.com/weblate",
          "avatar": "https://avatars.githubusercontent.com/u/1607653"
        },
        {
          "username": "DerAndereAndi",
          "href": "https://github.com/DerAndereAndi",
          "avatar": "https://avatars.githubusercontent.com/u/42185"
        }
      ]
    },
    {
      "author": "danielmiessler",
      "repo": "Fabric",
      "avatar": "https://github.com/danielmiessler.png",
      "repo_link": "https://github.com/danielmiessler/Fabric",
      "desc": "Fabric is an open-source framework for augmenting humans using AI. It provides a modular system for solving specific problems using a crowdsourced set of AI prompts that can be used anywhere.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4280,
      "added_stars": 631,
      "builtBy": [
        {
          "username": "danielmiessler",
          "href": "https://github.com/danielmiessler",
          "avatar": "https://avatars.githubusercontent.com/u/50654"
        },
        {
          "username": "ksylvan",
          "href": "https://github.com/ksylvan",
          "avatar": "https://avatars.githubusercontent.com/u/1226059"
        },
        {
          "username": "eugeis",
          "href": "https://github.com/eugeis",
          "avatar": "https://avatars.githubusercontent.com/u/609363"
        },
        {
          "username": "xssdoctor",
          "href": "https://github.com/xssdoctor",
          "avatar": "https://avatars.githubusercontent.com/u/9218431"
        }
      ]
    },
    {
      "author": "abiosoft",
      "repo": "colima",
      "avatar": "https://github.com/abiosoft.png",
      "repo_link": "https://github.com/abiosoft/colima",
      "desc": "Container runtimes on macOS (and Linux) with minimal setup",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 620,
      "added_stars": 507,
      "builtBy": [
        {
          "username": "abiosoft",
          "href": "https://github.com/abiosoft",
          "avatar": "https://avatars.githubusercontent.com/u/240448"
        },
        {
          "username": "rfay",
          "href": "https://github.com/rfay",
          "avatar": "https://avatars.githubusercontent.com/u/112444"
        },
        {
          "username": "LaszloGombos",
          "href": "https://github.com/LaszloGombos",
          "avatar": "https://avatars.githubusercontent.com/u/1522773"
        },
        {
          "username": "ekalinin",
          "href": "https://github.com/ekalinin",
          "avatar": "https://avatars.githubusercontent.com/u/234891"
        }
      ]
    }
  ]
}
- Fetching feeds...
{
  "source": "github",
  "since": "monthly",
  "language": "python",
  "items": [
    {
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4128,
      "added_stars": 23623,
      "builtBy": [
        {
          "username": "debpalash",
          "href": "https://github.com/debpalash",
          "avatar": "https://avatars.githubusercontent.com/u/4178343"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "kevin9327",
          "href": "https://github.com/kevin9327",
          "avatar": "https://avatars.githubusercontent.com/u/5299031"
        },
        {
          "username": "jaketame",
          "href": "https://github.com/jaketame",
          "avatar": "https://avatars.githubusercontent.com/u/1787973"
        },
        {
          "username": "velixio",
          "href": "https://github.com/velixio",
          "avatar": "https://avatars.githubusercontent.com/u/270455167"
        }
      ]
    },
    {
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2929,
      "added_stars": 27477,
      "builtBy": [
        {
          "username": "ayghri",
          "href": "https://github.com/ayghri",
          "avatar": "https://avatars.githubusercontent.com/u/32200675"
        },
        {
          "username": "thejesh23",
          "href": "https://github.com/thejesh23",
          "avatar": "https://avatars.githubusercontent.com/u/35212698"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "SillyDark",
          "href": "https://github.com/SillyDark",
          "avatar": "https://avatars.githubusercontent.com/u/116559191"
        },
        {
          "username": "commie70",
          "href": "https://github.com/commie70",
          "avatar": "https://avatars.githubusercontent.com/u/57289446"
        }
      ]
    },
    {
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3244,
      "added_stars": 5563,
      "builtBy": [
        {
          "username": "rajatsen91",
          "href": "https://github.com/rajatsen91",
          "avatar": "https://avatars.githubusercontent.com/u/8039264"
        },
        {
          "username": "siriuz42",
          "href": "https://github.com/siriuz42",
          "avatar": "https://avatars.githubusercontent.com/u/5073569"
        },
        {
          "username": "misha-chertushkin",
          "href": "https://github.com/misha-chertushkin",
          "avatar": "https://avatars.githubusercontent.com/u/151166456"
        },
        {
          "username": "darkpowerxo",
          "href": "https://github.com/darkpowerxo",
          "avatar": "https://avatars.githubusercontent.com/u/1857776"
        },
        {
          "username": "JustinGuese",
          "href": "https://github.com/JustinGuese",
          "avatar": "https://avatars.githubusercontent.com/u/9588843"
        }
      ]
    },
    {
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8116,
      "added_stars": 7561,
      "builtBy": [
        {
          "username": "jingyaogong",
          "href": "https://github.com/jingyaogong",
          "avatar": "https://avatars.githubusercontent.com/u/62287848"
        },
        {
          "username": "iomgaa-ycz",
          "href": "https://github.com/iomgaa-ycz",
          "avatar": "https://avatars.githubusercontent.com/u/124225682"
        },
        {
          "username": "Linxiushen",
          "href": "https://github.com/Linxiushen",
          "avatar": "https://avatars.githubusercontent.com/u/142557582"
        },
        {
          "username": "basil-k-aji-dev",
          "href": "https://github.com/basil-k-aji-dev",
          "avatar": "https://avatars.githubusercontent.com/u/70605804"
        },
        {
          "username": "readlnh",
          "href": "https://github.com/readlnh",
          "avatar": "https://avatars.githubusercontent.com/u/16349082"
        }
      ]
    },
    {
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4197,
      "added_stars": 12304,
      "builtBy": [
        {
          "username": "TKassis",
          "href": "https://github.com/TKassis",
          "avatar": "https://avatars.githubusercontent.com/u/9168908"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "borealBytes",
          "href": "https://github.com/borealBytes",
          "avatar": "https://avatars.githubusercontent.com/u/206480607"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "experientiallabs",
      "repo": "experiential",
      "avatar": "https://github.com/experientiallabs.png",
      "repo_link": "https://github.com/experientiallabs/experiential",
      "desc": "Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend better models, and train a specialized model you own.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 205,
      "added_stars": 5875,
      "builtBy": [
        {
          "username": "SilenNaihin",
          "href": "https://github.com/SilenNaihin",
          "avatar": "https://avatars.githubusercontent.com/u/44129612"
        },
        {
          "username": "kfallah",
          "href": "https://github.com/kfallah",
          "avatar": "https://avatars.githubusercontent.com/u/9440350"
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
        }
      ]
    },
    {
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3630,
      "added_stars": 4349,
      "builtBy": [
        {
          "username": "p-e-w",
          "href": "https://github.com/p-e-w",
          "avatar": "https://avatars.githubusercontent.com/u/2702526"
        },
        {
          "username": "Vinay-Umrethe",
          "href": "https://github.com/Vinay-Umrethe",
          "avatar": "https://avatars.githubusercontent.com/u/175500353"
        },
        {
          "username": "anrp",
          "href": "https://github.com/anrp",
          "avatar": "https://avatars.githubusercontent.com/u/1325515"
        },
        {
          "username": "spikymoth",
          "href": "https://github.com/spikymoth",
          "avatar": "https://avatars.githubusercontent.com/u/133602907"
        }
      ]
    },
    {
      "author": "abi",
      "repo": "screenshot-to-code",
      "avatar": "https://github.com/abi.png",
      "repo_link": "https://github.com/abi/screenshot-to-code",
      "desc": "Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9732,
      "added_stars": 5410,
      "builtBy": [
        {
          "username": "abi",
          "href": "https://github.com/abi",
          "avatar": "https://avatars.githubusercontent.com/u/23818"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "clean99",
          "href": "https://github.com/clean99",
          "avatar": "https://avatars.githubusercontent.com/u/53188310"
        },
        {
          "username": "kachbit",
          "href": "https://github.com/kachbit",
          "avatar": "https://avatars.githubusercontent.com/u/59241904"
        }
      ]
    },
    {
      "author": "FlashML-org",
      "repo": "FreeToken",
      "avatar": "https://github.com/FlashML-org.png",
      "repo_link": "https://github.com/FlashML-org/FreeToken",
      "desc": "FreeToken brings datacenter-scale model serving to your desktop. Run massive models locally, fast and efficiently.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1345,
      "added_stars": 10806,
      "builtBy": [
        {
          "username": "jason-fxz",
          "href": "https://github.com/jason-fxz",
          "avatar": "https://avatars.githubusercontent.com/u/36730318"
        },
        {
          "username": "andy-yang-1",
          "href": "https://github.com/andy-yang-1",
          "avatar": "https://avatars.githubusercontent.com/u/73746844"
        },
        {
          "username": "taking-lying-flat",
          "href": "https://github.com/taking-lying-flat",
          "avatar": "https://avatars.githubusercontent.com/u/234872336"
        },
        {
          "username": "earlvanze",
          "href": "https://github.com/earlvanze",
          "avatar": "https://avatars.githubusercontent.com/u/3733346"
        },
        {
          "username": "RuixiangMa",
          "href": "https://github.com/RuixiangMa",
          "avatar": "https://avatars.githubusercontent.com/u/27672240"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "claude-plugins-community",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-community",
      "desc": "Community plugin marketplace for Claude Cowork and Claude Code. Read-only mirror — submit plugins at clau.de/plugin-directory-submission.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 313,
      "added_stars": 3719,
      "builtBy": [
        {
          "username": "bryan-anthropic",
          "href": "https://github.com/bryan-anthropic",
          "avatar": "https://avatars.githubusercontent.com/u/238056179"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tobinsouth",
          "href": "https://github.com/tobinsouth",
          "avatar": "https://avatars.githubusercontent.com/u/32489862"
        },
        {
          "username": "ThariqS",
          "href": "https://github.com/ThariqS",
          "avatar": "https://avatars.githubusercontent.com/u/140827"
        }
      ]
    },
    {
      "author": "zubair-trabzada",
      "repo": "geo-seo-claude",
      "avatar": "https://github.com/zubair-trabzada.png",
      "repo_link": "https://github.com/zubair-trabzada/geo-seo-claude",
      "desc": "GEO-first SEO skill for Claude Code. Comprehensive AI search optimization for any website — citability scoring, AI crawler analysis, brand authority, schema markup, platform-specific optimization, and PDF reports. If you want learn how to sell this to real businesses, check out the skool community",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1648,
      "added_stars": 1396,
      "builtBy": [
        {
          "username": "zubair-trabzada",
          "href": "https://github.com/zubair-trabzada",
          "avatar": "https://avatars.githubusercontent.com/u/13802400"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "richard-scott",
          "href": "https://github.com/richard-scott",
          "avatar": "https://avatars.githubusercontent.com/u/5149834"
        },
        {
          "username": "xiaolai",
          "href": "https://github.com/xiaolai",
          "avatar": "https://avatars.githubusercontent.com/u/152970"
        }
      ]
    },
    {
      "author": "jiji262",
      "repo": "douyin-downloader",
      "avatar": "https://github.com/jiji262.png",
      "repo_link": "https://github.com/jiji262/douyin-downloader",
      "desc": "A practical Douyin downloader for both single-item and profile batch downloads, with progress display, retries, SQLite deduplication, and browser fallback support. 抖音批量下载工具，去水印，支持视频、图集、合集、音乐(原声)。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1852,
      "added_stars": 2678,
      "builtBy": [
        {
          "username": "jiji262",
          "href": "https://github.com/jiji262",
          "avatar": "https://avatars.githubusercontent.com/u/168751"
        },
        {
          "username": "dennistodo",
          "href": "https://github.com/dennistodo",
          "avatar": "https://avatars.githubusercontent.com/u/213367755"
        },
        {
          "username": "craft-agents-bot",
          "href": "https://github.com/craft-agents-bot",
          "avatar": "https://avatars.githubusercontent.com/u/255798083"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "handsomestWei",
      "repo": "patent-disclosure-skill",
      "avatar": "https://github.com/handsomestWei.png",
      "repo_link": "https://github.com/handsomestWei/patent-disclosure-skill",
      "desc": "中国专利.skill：专利点挖掘与交底书（发明/实用/外观）编写，通俗解读专利，嗅探政策动向，辅助审查答复。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1070,
      "added_stars": 5068,
      "builtBy": [
        {
          "username": "handsomestWei",
          "href": "https://github.com/handsomestWei",
          "avatar": "https://avatars.githubusercontent.com/u/36500279"
        },
        {
          "username": "x7peeps",
          "href": "https://github.com/x7peeps",
          "avatar": "https://avatars.githubusercontent.com/u/9640837"
        },
        {
          "username": "xiaofengShi",
          "href": "https://github.com/xiaofengShi",
          "avatar": "https://avatars.githubusercontent.com/u/30405889"
        },
        {
          "username": "dajiaohuang",
          "href": "https://github.com/dajiaohuang",
          "avatar": "https://avatars.githubusercontent.com/u/108231307"
        },
        {
          "username": "917Dhj",
          "href": "https://github.com/917Dhj",
          "avatar": "https://avatars.githubusercontent.com/u/135248415"
        }
      ]
    },
    {
      "author": "petergyang",
      "repo": "no-ai-slop",
      "avatar": "https://github.com/petergyang.png",
      "repo_link": "https://github.com/petergyang/no-ai-slop",
      "desc": "Removes 20+ patterns of AI slop from any piece of writing.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 753,
      "added_stars": 5389,
      "builtBy": [
        {
          "username": "petergyang",
          "href": "https://github.com/petergyang",
          "avatar": "https://avatars.githubusercontent.com/u/2383268"
        },
        {
          "username": "amateurhuman",
          "href": "https://github.com/amateurhuman",
          "avatar": "https://avatars.githubusercontent.com/u/374244"
        },
        {
          "username": "tmchow",
          "href": "https://github.com/tmchow",
          "avatar": "https://avatars.githubusercontent.com/u/517103"
        },
        {
          "username": "tymrtn",
          "href": "https://github.com/tymrtn",
          "avatar": "https://avatars.githubusercontent.com/u/4305058"
        },
        {
          "username": "CooperSheroy",
          "href": "https://github.com/CooperSheroy",
          "avatar": "https://avatars.githubusercontent.com/u/59650384"
        }
      ]
    },
    {
      "author": "dgtlmoon",
      "repo": "changedetection.io",
      "avatar": "https://github.com/dgtlmoon.png",
      "repo_link": "https://github.com/dgtlmoon/changedetection.io",
      "desc": "Best and simplest tool for website change detection, web page monitoring, and website change alerts. Perfect for tracking content changes, price drops, restock alerts, and website defacement monitoring—all for free or enjoy our SaaS plan!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2084,
      "added_stars": 1337,
      "builtBy": [
        {
          "username": "dgtlmoon",
          "href": "https://github.com/dgtlmoon",
          "avatar": "https://avatars.githubusercontent.com/u/275001"
        },
        {
          "username": "skkzsh",
          "href": "https://github.com/skkzsh",
          "avatar": "https://avatars.githubusercontent.com/u/1439870"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Constantin1489",
          "href": "https://github.com/Constantin1489",
          "avatar": "https://avatars.githubusercontent.com/u/61624808"
        }
      ]
    },
    {
      "author": "TencentCloud",
      "repo": "Octop",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/Octop",
      "desc": "A smarter, self-hosted AI assistant — multi-user, multi-agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 568,
      "added_stars": 3672,
      "builtBy": [
        {
          "username": "jubaoliang-tencent",
          "href": "https://github.com/jubaoliang-tencent",
          "avatar": "https://avatars.githubusercontent.com/u/309035352"
        },
        {
          "username": "jubaoliang",
          "href": "https://github.com/jubaoliang",
          "avatar": "https://avatars.githubusercontent.com/u/222386738"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "liukewia",
          "href": "https://github.com/liukewia",
          "avatar": "https://avatars.githubusercontent.com/u/50489030"
        },
        {
          "username": "huangcheng",
          "href": "https://github.com/huangcheng",
          "avatar": "https://avatars.githubusercontent.com/u/2804393"
        }
      ]
    },
    {
      "author": "marin-community",
      "repo": "marin",
      "avatar": "https://github.com/marin-community.png",
      "repo_link": "https://github.com/marin-community/marin",
      "desc": "Open-source framework for the research and development of foundation models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 303,
      "added_stars": 2365,
      "builtBy": [
        {
          "username": "dlwh",
          "href": "https://github.com/dlwh",
          "avatar": "https://avatars.githubusercontent.com/u/9633"
        },
        {
          "username": "rjpower",
          "href": "https://github.com/rjpower",
          "avatar": "https://avatars.githubusercontent.com/u/607207"
        },
        {
          "username": "BabyChouSr",
          "href": "https://github.com/BabyChouSr",
          "avatar": "https://avatars.githubusercontent.com/u/49086305"
        },
        {
          "username": "ravwojdyla",
          "href": "https://github.com/ravwojdyla",
          "avatar": "https://avatars.githubusercontent.com/u/1419010"
        },
        {
          "username": "abhinavg4",
          "href": "https://github.com/abhinavg4",
          "avatar": "https://avatars.githubusercontent.com/u/12746692"
        }
      ]
    },
    {
      "author": "k2-fsa",
      "repo": "OmniVoice",
      "avatar": "https://github.com/k2-fsa.png",
      "repo_link": "https://github.com/k2-fsa/OmniVoice",
      "desc": "High-Quality Voice Cloning TTS for 600+ Languages",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2079,
      "added_stars": 4505,
      "builtBy": [
        {
          "username": "zhu-han",
          "href": "https://github.com/zhu-han",
          "avatar": "https://avatars.githubusercontent.com/u/52005835"
        },
        {
          "username": "HenryVarro666",
          "href": "https://github.com/HenryVarro666",
          "avatar": "https://avatars.githubusercontent.com/u/48014495"
        },
        {
          "username": "pkufool",
          "href": "https://github.com/pkufool",
          "avatar": "https://avatars.githubusercontent.com/u/11765074"
        },
        {
          "username": "Pastells",
          "href": "https://github.com/Pastells",
          "avatar": "https://avatars.githubusercontent.com/u/30735349"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1573,
      "added_stars": 3316,
      "builtBy": [
        {
          "username": "rng1995",
          "href": "https://github.com/rng1995",
          "avatar": "https://avatars.githubusercontent.com/u/32655573"
        },
        {
          "username": "keshprad",
          "href": "https://github.com/keshprad",
          "avatar": "https://avatars.githubusercontent.com/u/32313895"
        },
        {
          "username": "mohgupta-ship-it",
          "href": "https://github.com/mohgupta-ship-it",
          "avatar": "https://avatars.githubusercontent.com/u/269879782"
        },
        {
          "username": "rodboev",
          "href": "https://github.com/rodboev",
          "avatar": "https://avatars.githubusercontent.com/u/106971"
        }
      ]
    },
    {
      "author": "xerrors",
      "repo": "Yuxi",
      "avatar": "https://github.com/xerrors.png",
      "repo_link": "https://github.com/xerrors/Yuxi",
      "desc": "可私有部署的多租户知识智能体平台：统一 RAG、知识图谱、多智能体、MCP/Skills、沙盒与权限管理。Yuxi = Cloud Agents + Knowledge RAG, Self-hosted knowledge agent platform for RAG, knowledge graphs and multi-agent workflows.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1136,
      "added_stars": 678,
      "builtBy": [
        {
          "username": "xerrors",
          "href": "https://github.com/xerrors",
          "avatar": "https://avatars.githubusercontent.com/u/35524243"
        },
        {
          "username": "Yuchuan925",
          "href": "https://github.com/Yuchuan925",
          "avatar": "https://avatars.githubusercontent.com/u/28227133"
        },
        {
          "username": "supreme0597",
          "href": "https://github.com/supreme0597",
          "avatar": "https://avatars.githubusercontent.com/u/101025596"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "Tibetan-Singing-Bowls: Strike or rub a set of virtual Tibetan singing bowls - synthesized in the browser with Web Audio, with the beating overtones of the real thing",
      "url": "https://github.com/evoluteur/tibetan-singing-bowls",
      "upvotes": "2",
      "comments": "1",
      "created": "2026-09-22T05:46:13.000Z"
    },
    {
      "title": "Draw a mandala with mirrored symmetry and export it as PNG or SVG.",
      "url": "https://github.com/evoluteur/mandala-maker",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-20T01:15:18.000Z"
    },
    {
      "title": "Supapower - A sync engine that keeps a local PGlite database in sync with Supabase, inspired by PowerSync",
      "url": "https://github.com/aboviq/supapower",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-18T15:05:21.000Z"
    },
    {
      "title": "billboard.js 4.1.0: Live resizing, configurable subchart, React subpath & CSP-safe worker",
      "url": "https://netil.medium.com/billboard-js-4-1-0-live-resizing-configurable-subchart-react-subpath-csp-safe-worker-e1a6fd0ece88",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-16T07:28:53.000Z"
    },
    {
      "title": "From 1,256ms to 96ms: Fixing INP in a Massive React Dropdown",
      "url": "https://dev.to/subito/from-1256ms-to-96ms-fixing-inp-in-a-massive-react-dropdown-16l7",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-15T06:55:32.000Z"
    },
    {
      "title": "structured-filter-react: React component for structured queries",
      "url": "https://github.com/evoluteur/structured-filter-react",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-11T07:30:13.000Z"
    },
    {
      "title": "Cymatics: Play a frequency and watch the sand settle into its Chladni figure, computed from the wave equation",
      "url": "https://github.com/evoluteur/cymatics",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-09-09T01:45:36.000Z"
    },
    {
      "title": "Turn the five Platonic solids in 3D, show their duals, and read their measurements",
      "url": "https://github.com/evoluteur/platonic-solids",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-04T07:14:05.000Z"
    },
    {
      "title": "Sharing Application State in a URL",
      "url": "https://ivakin.dev/blog/state-in-url",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-09-02T15:52:29.000Z"
    },
    {
      "title": "Sacred Geometry Generator: draw, tune, and export Vesica Piscis, Seed of Life, Flower of Life, Metatron's Cube, and the Golden Spiral as SVG",
      "url": "https://github.com/evoluteur/sacred-geometry",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-01T05:57:26.000Z"
    }
  ]
}
```

## 3. What Builders Are Shipping/Discussing

**Query:** What are builders shipping and discussing right now?

**Command:**
```bash
node bin/main.js --json devto -s top -c 10 ; node bin/main.js --json lobsters -s newest -c 10 ; node bin/main.js --json news -t 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "devto",
  "tag": null,
  "sort": "top",
  "items": [
    {
      "title": "Disappeared Since March: Taking a Long Break Was My Best Decision Yet",
      "description": "If you checked my profile recently, you probably noticed my page has been completely quiet since...",
      "url": "https://dev.to/maame-codes/disappeared-since-march-taking-a-long-break-was-my-best-decision-yet-1n45",
      "tags": "",
      "reactions": 47,
      "comments": 15,
      "reading_time": 2,
      "author": "maame-codes"
    },
    {
      "title": "I Turned DEV.to Into a Walkable 3D Library — Debugging It Has Been a Nightmare",
      "description": "DEV Library is my idea of first-person 3D reimagining of DEV.to. Not a themed scene with some...",
      "url": "https://dev.to/mikachu/i-turned-devto-into-a-walkable-3d-library-debugging-it-has-been-a-nightmare-4lkd",
      "tags": "buildinpublic, webdev, nextjs, ai",
      "reactions": 51,
      "comments": 13,
      "reading_time": 7,
      "author": "mikachu"
    },
    {
      "title": "Welcome Thread - v 394",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-394-22l2",
      "tags": "welcome",
      "reactions": 20,
      "comments": 49,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "A 4 GB Laptop GPU vs a 6-Core CPU on Gemma 4, Re-Measured in ABBA Order: 4.1x",
      "description": "Gemma 4 E2B q4_0 served by llama.cpp on one laptop, CPU-only and on a GTX 1650 Ti, rebuilt on CUDA 13.4 and re-measured in CPU, GPU, GPU, CPU order with a temperature gate. The card takes decode by 4.14x, and run order moves the answer by about 2%.",
      "url": "https://dev.to/gde/a-4-gb-laptop-gpu-vs-a-6-core-cpu-on-gemma-4-re-measured-in-abba-order-41x-5g56",
      "tags": "gemma, llamacpp, cuda, benchmarking",
      "reactions": 8,
      "comments": 1,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Join the Kaggle Benchmarking Challenge: $2,500 in Prizes for FIVE Winners!",
      "description": "We're excited to team up with Kaggle for a brand new challenge!  Running through October 11, the...",
      "url": "https://dev.to/devteam/join-the-kaggle-benchmarking-challenge-2500-in-prizes-for-five-winners-18ml",
      "tags": "devchallenge, kagglebenchmarkchallenge, machinelearning, ai",
      "reactions": 83,
      "comments": 4,
      "reading_time": 4,
      "author": "heyitsjem"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-2agl",
      "tags": "top7, discuss",
      "reactions": 24,
      "comments": 15,
      "reading_time": 2,
      "author": "heyitsjem"
    },
    {
      "title": "Deploying LiteLLM: An Open-Source AI Gateway",
      "description": "LiteLLM is an open-source AI gateway that provides a unified, OpenAI-compatible API for over 100...",
      "url": "https://dev.to/vultr/deploying-litellm-an-open-source-ai-gateway-2idp",
      "tags": "ai, llm, docker, postgres",
      "reactions": 4,
      "comments": 2,
      "reading_time": 8,
      "author": "sharmukh"
    },
    {
      "title": "Production RAG on the Lakehouse with BigQuery Vector Search and Apache Iceberg",
      "description": "As teams rush to build with Generative AI, they're creating a dangerous chasm between their data and...",
      "url": "https://dev.to/gde/production-rag-on-the-lakehouse-with-bigquery-vector-search-and-apache-iceberg-5g3",
      "tags": "lakehouse, bigquery, apacheiceberg, rag",
      "reactions": 7,
      "comments": 0,
      "reading_time": 31,
      "author": "votuduc"
    },
    {
      "title": "The Grand Unifying Architecture of Frontend",
      "description": "I used to joke that the history of frontend development could be retraced by following the argument...",
      "url": "https://dev.to/playfulprogramming/the-grand-unifying-architecture-of-frontend-bhk",
      "tags": "webdev, javascript, solidjs, architecture",
      "reactions": 17,
      "comments": 2,
      "reading_time": 10,
      "author": "ryansolid"
    },
    {
      "title": "Gemma 4 on a Tesla T4, Part 2: The Minimum GCE VM and a Script to Drive It",
      "description": "Building the smallest Compute Engine VM that serves Gemma 4 E2B on one Tesla T4, installing the driver and vLLM after boot, and a walkthrough of every option in the shell script that starts, checks and queries the server.",
      "url": "https://dev.to/gde/gemma-4-on-a-tesla-t4-part-2-the-minimum-gce-vm-and-a-script-to-drive-it-3gk1",
      "tags": "gemma, vllm, gcp, cuda",
      "reactions": 12,
      "comments": 0,
      "reading_time": 13,
      "author": "xbill"
    }
  ]
}
- Fetching feeds...
{
  "source": "lobsters",
  "sort": "newest",
  "tag": null,
  "items": [
    {
      "title": "Pick OS is a Living Fossil of Computer History",
      "url": "https://csixty4.medium.com/pick-is-a-living-fossil-of-computer-history-36d74408d557",
      "score": 2,
      "comments": 0,
      "tags": [
        "databases",
        "historical",
        "osdev"
      ],
      "id": "1skdhv"
    },
    {
      "title": "The Story of Mel",
      "url": "https://users.cs.utah.edu/~elb/folklore/mel.html",
      "score": 10,
      "comments": 6,
      "tags": [
        "assembly",
        "historical"
      ],
      "id": "wf4wid"
    },
    {
      "title": "Inside Snapdragon Summit 2026: Agentic AI PCs, Googlebooks and Linux | Qualcomm",
      "url": "https://www.qualcomm.com/news/onq/2026/09/snapdragon-summit-agentic-ai-pcs-linux",
      "score": 1,
      "comments": 1,
      "tags": [
        "android"
      ],
      "id": "ip3taa"
    },
    {
      "title": "Automatically detecting AI text in my browser",
      "url": "https://www.seangoedecke.com/deckard/",
      "score": 4,
      "comments": 1,
      "tags": [
        "vibecoding"
      ],
      "id": "wvb8wg"
    },
    {
      "title": "FLAWED’s Flaws and What This Means for Industry Research",
      "url": "https://suhacker.ai/p/flaweds-flaws-and-what-this-means-for-industry-research/",
      "score": 2,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "3yywjl"
    },
    {
      "title": "Why you should check your gem's lines of code",
      "url": "https://spinel.coop/blog/why-you-should-check-your-gems-lines-of-code/",
      "score": 3,
      "comments": 0,
      "tags": [
        "ruby"
      ],
      "id": "a6wzgu"
    },
    {
      "title": "Solid Modeling in your browser",
      "url": "https://cartesian-theatrics.github.io/clj-manifold3d/journal/",
      "score": 3,
      "comments": 0,
      "tags": [
        "clojure",
        "graphics",
        "programming",
        "web"
      ],
      "id": "9oeulu"
    },
    {
      "title": "Beware overreliance on metaphor",
      "url": "https://evnm.substack.com/p/beware-overreliance-on-metaphor",
      "score": 6,
      "comments": 2,
      "tags": [
        "historical",
        "philosophy"
      ],
      "id": "vmd3gy"
    },
    {
      "title": "We just shipped support for the ugliest part of HTTP: Vary",
      "url": "https://blog.cloudflare.com/vary-support/",
      "score": 4,
      "comments": 0,
      "tags": [
        "web"
      ],
      "id": "iulfsj"
    },
    {
      "title": "Claude's load-bearing seams",
      "url": "https://madradavid.com/claudes-load-bearing-seams/",
      "score": 3,
      "comments": 0,
      "tags": [
        "satire"
      ],
      "id": "dwlwlr"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "aaronday",
      "descendants": 137,
      "id": 49823582,
      "kids": [
        49825947,
        49824444,
        49824329,
        49825792,
        49824350,
        49825388,
        49824691,
        49824374,
        49824337,
        49824171,
        49824164,
        49826611,
        49823970,
        49824279,
        49824199,
        49824479,
        49825476,
        49824751,
        49825208,
        49824239,
        49825768,
        49824782,
        49825183,
        49823769,
        49824331,
        49826242,
        49823895,
        49825500,
        49825873,
        49825052,
        49824409,
        49824336,
        49823833,
        49823752,
        49824572,
        49824255,
        49824152,
        49823734
      ],
      "score": 316,
      "time": 1790203096,
      "title": "Linux support is coming to Snapdragon X2 Series",
      "type": "story",
      "url": "https://www.qualcomm.com/news/onq/2026/09/snapdragon-summit-agentic-ai-pcs-linux"
    },
    {
      "by": "raahelb",
      "descendants": 607,
      "id": 49820134,
      "kids": [
        49823432,
        49826851,
        49822802,
        49825027,
        49827016,
        49822914,
        49826849,
        49824076,
        49820739,
        49821477,
        49821001,
        49822019,
        49821769,
        49825370,
        49823378,
        49826479,
        49825943,
        49821110,
        49820935,
        49820551,
        49821455,
        49823474,
        49823502,
        49824133,
        49824860,
        49825551,
        49824877,
        49825576,
        49823487,
        49820908,
        49820933,
        49823290,
        49824015,
        49821466,
        49820913,
        49821728,
        49823049,
        49820962,
        49824368,
        49822060,
        49821550,
        49820654,
        49822789,
        49821475,
        49824049,
        49820986,
        49825453,
        49826529,
        49822020,
        49822170,
        49821154,
        49823082,
        49823232,
        49824923,
        49820865,
        49820585,
        49821286,
        49820638,
        49821182
      ],
      "score": 600,
      "time": 1790186807,
      "title": "Claude discovers a novel enzyme system with CRISPR-like repeats",
      "type": "story",
      "url": "https://www.anthropic.com/news/claude-discovers-novel-enzyme-system"
    },
    {
      "by": "snikolaev",
      "descendants": 1,
      "id": 49826565,
      "kids": [
        49826995
      ],
      "score": 10,
      "time": 1790227270,
      "title": "Early rogue AI agent activity and attempts to hack found on urlquery.net",
      "type": "story",
      "url": "https://transluce.org/agent-activity"
    },
    {
      "by": "JohnHammersley",
      "descendants": 16,
      "id": 49823664,
      "kids": [
        49824661,
        49825268,
        49824641
      ],
      "score": 134,
      "time": 1790203549,
      "title": "ArXiv receives multiyear commitments to support it as an independent nonprofit",
      "type": "story",
      "url": "https://blog.arxiv.org/2026/09/23/arxiv-receives-multiyear-investment/"
    },
    {
      "by": "nmeagent",
      "descendants": 213,
      "id": 49824686,
      "kids": [
        49826725,
        49825592,
        49825396,
        49826071,
        49825655,
        49825637,
        49826689,
        49826940,
        49825971,
        49825990,
        49826964,
        49827029,
        49826637,
        49824871,
        49825975,
        49826914,
        49826948,
        49825723,
        49826943,
        49826229,
        49826209,
        49826282,
        49826196,
        49826580,
        49825659,
        49825707,
        49825663,
        49825992,
        49825819,
        49825961,
        49825667,
        49825590,
        49826553,
        49824687,
        49825553,
        49826514,
        49825094,
        49826101,
        49826459,
        49825676,
        49825745,
        49825434
      ],
      "score": 231,
      "time": 1790210491,
      "title": "Feds Target AI Critics as \"Foreign Agents\"",
      "type": "story",
      "url": "https://www.kenklippenstein.com/p/feds-think-ai-critics-are-foreign"
    },
    {
      "by": "Rapzid",
      "descendants": 119,
      "id": 49822555,
      "kids": [
        49823036,
        49823327,
        49823205,
        49823093,
        49826753,
        49823766,
        49826120,
        49826464,
        49824056,
        49824804,
        49823004,
        49825523,
        49824436,
        49823355,
        49823167,
        49823747,
        49825842,
        49823803,
        49823893,
        49823041,
        49823213,
        49825083,
        49823431,
        49826303,
        49823270,
        49823401,
        49823357,
        49823248,
        49824510,
        49825078,
        49823947,
        49823737,
        49823302,
        49824207,
        49823067,
        49823267
      ],
      "score": 194,
      "time": 1790197308,
      "title": "VSCode's SSH Agent Is Bananas (2025)",
      "type": "story",
      "url": "https://fly.io/blog/vscode-ssh-wtf/"
    },
    {
      "by": "erichocean",
      "descendants": 4,
      "id": 49826221,
      "kids": [
        49826740,
        49826867,
        49826297
      ],
      "score": 18,
      "time": 1790223659,
      "title": "Contrastive Language Models",
      "type": "story",
      "url": "https://contrastive-lm.notion.site/"
    },
    {
      "by": "signa11",
      "descendants": 28,
      "id": 49825642,
      "kids": [
        49826633,
        49827025,
        49826632,
        49826542,
        49826988,
        49826290,
        49826935,
        49826360,
        49826773,
        49826882,
        49826780,
        49826783,
        49826367,
        49826503,
        49826926
      ],
      "score": 50,
      "time": 1790218329,
      "title": "Ideas on modernizing the open-source desktop",
      "type": "story",
      "url": "https://lwn.net/SubscriberLink/1095425/2d9f411252325784/"
    },
    {
      "by": "nanochess",
      "descendants": 4,
      "id": 49795600,
      "kids": [
        49826380,
        49826414
      ],
      "score": 31,
      "time": 1790039266,
      "title": "Making portable my unportable transputer C compiler",
      "type": "story",
      "url": "https://nanochess.org/transputer_c_compiler.html"
    },
    {
      "by": "WanjohiRyan",
      "descendants": 27,
      "id": 49824864,
      "kids": [
        49826881,
        49826534,
        49825378,
        49825552,
        49826629,
        49825749,
        49825550
      ],
      "score": 58,
      "time": 1790211743,
      "title": "Virtio-nvgpu: Near-native Nvidia GPU access inside a KVM guest",
      "type": "story",
      "url": "https://github.com/nestrilabs/virtio-nvgpu"
    }
  ]
}
```

## 4. Practical Coding Topics to Study

**Query:** What practical coding topics should I study next?

**Command:**
```bash
node bin/main.js --json reddit -t programming -s top ; node bin/main.js --json devto -t career -s top -c 10
```

**Output:**
```text
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "devto",
  "tag": "career",
  "sort": "top",
  "items": [
    {
      "title": "23 Rejections, Multiple Offers: What I Learned From My 2-Month SWE Job Search",
      "description": "Feels like it's been more than a minute since my last post. A lot has happened in my life over the...",
      "url": "https://dev.to/javz/23-rejections-multiple-offers-what-i-learned-from-my-2-month-swe-job-search-5hi4",
      "tags": "career, softwaredevelopment, programming, learning",
      "reactions": 14,
      "comments": 2,
      "reading_time": 7,
      "author": "javz"
    },
    {
      "title": "An introverted dev in an extroverted world",
      "description": "\"Explain it to me in dev terms.\"  My social battery has a rate limit.  The world isn't made for...",
      "url": "https://dev.to/ikrame-ih/an-introverted-dev-in-an-extroverted-world-4p04",
      "tags": "watercooler, career, networking, discuss",
      "reactions": 5,
      "comments": 3,
      "reading_time": 2,
      "author": "ikrame-ih"
    },
    {
      "title": "Why the Best Software Advice Is the Hardest to Follow",
      "description": "Not all software advice is created equal. Some advice is practical. It tells you exactly what to...",
      "url": "https://dev.to/remojansen/why-the-best-software-advice-is-the-hardest-to-follow-4kg8",
      "tags": "software, career, learning, discuss",
      "reactions": 33,
      "comments": 14,
      "reading_time": 7,
      "author": "remojansen"
    },
    {
      "title": "Something About Coding Stopped Feeling Good — and It Took Me a While to Figure Out What",
      "description": "Let me tell you about a project that wasn't impressive.  Back in university, I built a small .NET...",
      "url": "https://dev.to/james_anderson_h/something-about-coding-stopped-feeling-good-and-it-took-me-a-while-to-figure-out-what-2op2",
      "tags": "career, ai, discuss, watercooler",
      "reactions": 30,
      "comments": 4,
      "reading_time": 6,
      "author": "james_anderson_h"
    },
    {
      "title": "How to Answer What Are Your Salary Expectations Calmly",
      "description": "You are ten minutes into a screen. You have covered the work you do now, the tools, the reason you...",
      "url": "https://dev.to/devika_thakurchandel_fc2/how-to-answer-what-are-your-salary-expectations-calmly-kn5",
      "tags": "career, interview",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "devika_thakurchandel_fc2"
    },
    {
      "title": "After Years of Building, Fixing, and Supporting Production Systems, I’m Looking for My Next Opportunity",
      "description": "Hi DEV Community,  I hesitated before writing this post.  For years, I was used to being the person...",
      "url": "https://dev.to/hamzatopo/after-years-of-building-fixing-and-supporting-production-systems-im-looking-for-my-next-che",
      "tags": "career, php, symfony, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "hamzatopo"
    },
    {
      "title": "How to Start a Career in Digital Marketing in 2026: A Beginner’s Guide?",
      "description": "The Internet has revolutionized the way companies discover their customers, build their brands and...",
      "url": "https://dev.to/chetna_sharma_2fa28cf0b45/how-to-start-a-career-in-digital-marketing-in-2026-a-beginners-guide-52g6",
      "tags": "ai, digitalmarketing, career, buildskills",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "chetna_sharma_2fa28cf0b45"
    },
    {
      "title": "The 4-line email that turns \"quick asks\" into change orders",
      "description": "Scope creep almost never arrives as a formal change request.  It arrives as a Slack ping at...",
      "url": "https://dev.to/scopepaid/the-4-line-email-that-turns-quick-asks-into-change-orders-2j3a",
      "tags": "freelance, webdev, career, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 3,
      "author": "scopepaid"
    },
    {
      "title": "Freelance Developer Rates in 2026: How to Price Work an AI Agent Can Half-Do",
      "description": "A client asks for a CSV import feature. Two years ago you would have quoted 20 hours. Today an agent...",
      "url": "https://dev.to/markfulton/freelance-developer-rates-in-2026-how-to-price-work-an-ai-agent-can-half-do-14fc",
      "tags": "freelance, career, ai, productivity",
      "reactions": 0,
      "comments": 2,
      "reading_time": 5,
      "author": "markfulton"
    },
    {
      "title": "The Waymo interview process, and its rules on using AI",
      "description": "Waymo's careers page walks through a virtual onsite with up to five interviewers, and three separate rules on when a candidate may use AI.",
      "url": "https://dev.to/fourleaf/the-waymo-interview-process-and-its-rules-on-using-ai-dmb",
      "tags": "career, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "fourleaf"
    }
  ]
}
```

