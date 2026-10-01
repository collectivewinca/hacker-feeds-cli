# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-10-01 06:43:33 UTC

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
      "author": "paperclipai",
      "repo": "paperclip",
      "avatar": "https://github.com/paperclipai.png",
      "repo_link": "https://github.com/paperclipai/paperclip",
      "desc": "The open-source app everyone uses to manage agents at work",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16193,
      "added_stars": 13855,
      "builtBy": [
        {
          "username": "cryppadotta",
          "href": "https://github.com/cryppadotta",
          "avatar": "https://avatars.githubusercontent.com/u/34892728"
        },
        {
          "username": "Paperclip-Paperclip",
          "href": "https://github.com/Paperclip-Paperclip",
          "avatar": "https://avatars.githubusercontent.com/u/271391591"
        },
        {
          "username": "devinfoley",
          "href": "https://github.com/devinfoley",
          "avatar": "https://avatars.githubusercontent.com/u/139239"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "nickyleach",
          "href": "https://github.com/nickyleach",
          "avatar": "https://avatars.githubusercontent.com/u/331803"
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
      "forks": 5360,
      "added_stars": 5987,
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
          "username": "brennanb2025",
          "href": "https://github.com/brennanb2025",
          "avatar": "https://avatars.githubusercontent.com/u/79079362"
        },
        {
          "username": "orca-ide",
          "href": "https://github.com/orca-ide",
          "avatar": "https://avatars.githubusercontent.com/u/277417572"
        },
        {
          "username": "Jinwoo-H",
          "href": "https://github.com/Jinwoo-H",
          "avatar": "https://avatars.githubusercontent.com/u/73622457"
        }
      ]
    },
    {
      "author": "FxEmbed",
      "repo": "FxEmbed",
      "avatar": "https://github.com/FxEmbed.png",
      "repo_link": "https://github.com/FxEmbed/FxEmbed",
      "desc": "Fix X/Twitter and Bluesky embeds! Use multiple images, videos, polls, translations and more on Discord, Telegram and others",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 268,
      "added_stars": 520,
      "builtBy": [
        {
          "username": "dangeredwolf",
          "href": "https://github.com/dangeredwolf",
          "avatar": "https://avatars.githubusercontent.com/u/2636265"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "Wazbat",
          "href": "https://github.com/Wazbat",
          "avatar": "https://avatars.githubusercontent.com/u/6253896"
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
      "forks": 1869,
      "added_stars": 6091,
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
      "author": "anthropics",
      "repo": "claude-code-action",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-action",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2181,
      "added_stars": 329,
      "builtBy": [
        {
          "username": "actions-user",
          "href": "https://github.com/actions-user",
          "avatar": "https://avatars.githubusercontent.com/u/65916846"
        },
        {
          "username": "ashwin-ant",
          "href": "https://github.com/ashwin-ant",
          "avatar": "https://avatars.githubusercontent.com/u/178951676"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ltawfik",
          "href": "https://github.com/ltawfik",
          "avatar": "https://avatars.githubusercontent.com/u/11431944"
        }
      ]
    },
    {
      "author": "mobile-next",
      "repo": "mobile-mcp",
      "avatar": "https://github.com/mobile-next.png",
      "repo_link": "https://github.com/mobile-next/mobile-mcp",
      "desc": "Model Context Protocol Server for Mobile Automation and Scraping (iOS, Android, Emulators, Simulators and Real Devices)",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 744,
      "added_stars": 1646,
      "builtBy": [
        {
          "username": "gmegidish",
          "href": "https://github.com/gmegidish",
          "avatar": "https://avatars.githubusercontent.com/u/2457607"
        },
        {
          "username": "krismuhi",
          "href": "https://github.com/krismuhi",
          "avatar": "https://avatars.githubusercontent.com/u/38224019"
        },
        {
          "username": "benlmyers",
          "href": "https://github.com/benlmyers",
          "avatar": "https://avatars.githubusercontent.com/u/41796709"
        },
        {
          "username": "tomoya0x00",
          "href": "https://github.com/tomoya0x00",
          "avatar": "https://avatars.githubusercontent.com/u/5106629"
        },
        {
          "username": "aluedeke",
          "href": "https://github.com/aluedeke",
          "avatar": "https://avatars.githubusercontent.com/u/311702"
        }
      ]
    },
    {
      "author": "vercel-labs",
      "repo": "scriptc",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/scriptc",
      "desc": "TypeScript-to-Native Compiler",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 159,
      "added_stars": 956,
      "builtBy": [
        {
          "username": "ctate",
          "href": "https://github.com/ctate",
          "avatar": "https://avatars.githubusercontent.com/u/366502"
        },
        {
          "username": "jimmyhmiller",
          "href": "https://github.com/jimmyhmiller",
          "avatar": "https://avatars.githubusercontent.com/u/6071338"
        },
        {
          "username": "HagegeR",
          "href": "https://github.com/HagegeR",
          "avatar": "https://avatars.githubusercontent.com/u/20857346"
        },
        {
          "username": "mmamedel",
          "href": "https://github.com/mmamedel",
          "avatar": "https://avatars.githubusercontent.com/u/23098414"
        },
        {
          "username": "ryoppippi",
          "href": "https://github.com/ryoppippi",
          "avatar": "https://avatars.githubusercontent.com/u/1560508"
        }
      ]
    },
    {
      "author": "vega-org",
      "repo": "vega-app",
      "avatar": "https://github.com/vega-org.png",
      "repo_link": "https://github.com/vega-org/vega-app",
      "desc": "A media streaming app for android.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 204,
      "added_stars": 99,
      "builtBy": [
        {
          "username": "himanshu8443",
          "href": "https://github.com/himanshu8443",
          "avatar": "https://avatars.githubusercontent.com/u/99420590"
        },
        {
          "username": "Zenda-Cross",
          "href": "https://github.com/Zenda-Cross",
          "avatar": "https://avatars.githubusercontent.com/u/143804558"
        },
        {
          "username": "Anshu08787",
          "href": "https://github.com/Anshu08787",
          "avatar": "https://avatars.githubusercontent.com/u/152717151"
        },
        {
          "username": "OshekharO",
          "href": "https://github.com/OshekharO",
          "avatar": "https://avatars.githubusercontent.com/u/95137948"
        },
        {
          "username": "thewahab07",
          "href": "https://github.com/thewahab07",
          "avatar": "https://avatars.githubusercontent.com/u/114085078"
        }
      ]
    },
    {
      "author": "oblien",
      "repo": "openship",
      "avatar": "https://github.com/oblien.png",
      "repo_link": "https://github.com/oblien/openship",
      "desc": "Self-hosted deployment platform",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1272,
      "added_stars": 1781,
      "builtBy": [
        {
          "username": "Hydralerne",
          "href": "https://github.com/Hydralerne",
          "avatar": "https://avatars.githubusercontent.com/u/162022179"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Rish-it",
          "href": "https://github.com/Rish-it",
          "avatar": "https://avatars.githubusercontent.com/u/104666906"
        },
        {
          "username": "shuvamk",
          "href": "https://github.com/shuvamk",
          "avatar": "https://avatars.githubusercontent.com/u/145355204"
        },
        {
          "username": "DiogoDuart3",
          "href": "https://github.com/DiogoDuart3",
          "avatar": "https://avatars.githubusercontent.com/u/31131606"
        }
      ]
    },
    {
      "author": "satnaing",
      "repo": "shadcn-admin",
      "avatar": "https://github.com/satnaing.png",
      "repo_link": "https://github.com/satnaing/shadcn-admin",
      "desc": "Admin Dashboard UI built with Shadcn and Vite.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2345,
      "added_stars": 1154,
      "builtBy": [
        {
          "username": "satnaing",
          "href": "https://github.com/satnaing",
          "avatar": "https://avatars.githubusercontent.com/u/53733092"
        },
        {
          "username": "rakrisi",
          "href": "https://github.com/rakrisi",
          "avatar": "https://avatars.githubusercontent.com/u/48623037"
        },
        {
          "username": "unclebay143",
          "href": "https://github.com/unclebay143",
          "avatar": "https://avatars.githubusercontent.com/u/58919619"
        },
        {
          "username": "devshinthant",
          "href": "https://github.com/devshinthant",
          "avatar": "https://avatars.githubusercontent.com/u/94442302"
        }
      ]
    },
    {
      "author": "ahmedkhaleel2004",
      "repo": "gitdiagram",
      "avatar": "https://github.com/ahmedkhaleel2004.png",
      "repo_link": "https://github.com/ahmedkhaleel2004/gitdiagram",
      "desc": "Visualize any GitHub codebase: free interactive architecture diagrams and one-minute explainer videos. Replace 'hub' with 'diagram' in any GitHub URL.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1349,
      "added_stars": 622,
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
        }
      ]
    },
    {
      "author": "moeru-ai",
      "repo": "airi",
      "avatar": "https://github.com/moeru-ai.png",
      "repo_link": "https://github.com/moeru-ai/airi",
      "desc": "💖🧸 Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4979,
      "added_stars": 583,
      "builtBy": [
        {
          "username": "nekomeowww",
          "href": "https://github.com/nekomeowww",
          "avatar": "https://avatars.githubusercontent.com/u/11081491"
        },
        {
          "username": "luoling8192",
          "href": "https://github.com/luoling8192",
          "avatar": "https://avatars.githubusercontent.com/u/44741987"
        },
        {
          "username": "shinohara-rin",
          "href": "https://github.com/shinohara-rin",
          "avatar": "https://avatars.githubusercontent.com/u/25588514"
        },
        {
          "username": "sumimakito",
          "href": "https://github.com/sumimakito",
          "avatar": "https://avatars.githubusercontent.com/u/5277268"
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
      "forks": 2392,
      "added_stars": 837,
      "builtBy": [
        {
          "username": "ravixalgorithm",
          "href": "https://github.com/ravixalgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/148683640"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
        }
      ]
    },
    {
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4736,
      "added_stars": 1159,
      "builtBy": [
        {
          "username": "JonnyBurger",
          "href": "https://github.com/JonnyBurger",
          "avatar": "https://avatars.githubusercontent.com/u/1629785"
        },
        {
          "username": "samohovets",
          "href": "https://github.com/samohovets",
          "avatar": "https://avatars.githubusercontent.com/u/24735429"
        },
        {
          "username": "patsalv",
          "href": "https://github.com/patsalv",
          "avatar": "https://avatars.githubusercontent.com/u/89481679"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "freeCodeCamp",
      "repo": "freeCodeCamp",
      "avatar": "https://github.com/freeCodeCamp.png",
      "repo_link": "https://github.com/freeCodeCamp/freeCodeCamp",
      "desc": "freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 47859,
      "added_stars": 675,
      "builtBy": [
        {
          "username": "ojeytonwilliams",
          "href": "https://github.com/ojeytonwilliams",
          "avatar": "https://avatars.githubusercontent.com/u/15801806"
        },
        {
          "username": "raisedadead",
          "href": "https://github.com/raisedadead",
          "avatar": "https://avatars.githubusercontent.com/u/1884376"
        },
        {
          "username": "camperbot",
          "href": "https://github.com/camperbot",
          "avatar": "https://avatars.githubusercontent.com/u/13561988"
        },
        {
          "username": "renovate-bot",
          "href": "https://github.com/renovate-bot",
          "avatar": "https://avatars.githubusercontent.com/u/25180681"
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
      "forks": 3095,
      "added_stars": 21460,
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
          "username": "Qiyuanqiii",
          "href": "https://github.com/Qiyuanqiii",
          "avatar": "https://avatars.githubusercontent.com/u/267806965"
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
      "forks": 4210,
      "added_stars": 10658,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "begoniezhao",
          "href": "https://github.com/begoniezhao",
          "avatar": "https://avatars.githubusercontent.com/u/216642699"
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
      "forks": 1602,
      "added_stars": 2639,
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
      "author": "Gentleman-Programming",
      "repo": "gentle-ai",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/gentle-ai",
      "desc": "Gentle-AI configures the AI coding agents you already use: Claude Code, Cursor, OpenCode, Codex, Pi, and more. Choose persistent memory, Organic-Driven Development, curated skills, MCP servers, personas, and optional bounded review. Open source, no agent lock-in.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 817,
      "added_stars": 1392,
      "builtBy": [
        {
          "username": "Alan-TheGentleman",
          "href": "https://github.com/Alan-TheGentleman",
          "avatar": "https://avatars.githubusercontent.com/u/6935240"
        },
        {
          "username": "dnlrsls",
          "href": "https://github.com/dnlrsls",
          "avatar": "https://avatars.githubusercontent.com/u/111561081"
        },
        {
          "username": "decode2",
          "href": "https://github.com/decode2",
          "avatar": "https://avatars.githubusercontent.com/u/9351115"
        },
        {
          "username": "ElCaaarnal",
          "href": "https://github.com/ElCaaarnal",
          "avatar": "https://avatars.githubusercontent.com/u/88510389"
        },
        {
          "username": "egdev6",
          "href": "https://github.com/egdev6",
          "avatar": "https://avatars.githubusercontent.com/u/18334564"
        }
      ]
    },
    {
      "author": "cilium",
      "repo": "cilium",
      "avatar": "https://github.com/cilium.png",
      "repo_link": "https://github.com/cilium/cilium",
      "desc": "eBPF-based Networking, Security, and Observability",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4120,
      "added_stars": 695,
      "builtBy": [
        {
          "username": "aanm",
          "href": "https://github.com/aanm",
          "avatar": "https://avatars.githubusercontent.com/u/5714066"
        },
        {
          "username": "tgraf",
          "href": "https://github.com/tgraf",
          "avatar": "https://avatars.githubusercontent.com/u/1417913"
        },
        {
          "username": "joestringer",
          "href": "https://github.com/joestringer",
          "avatar": "https://avatars.githubusercontent.com/u/1243336"
        },
        {
          "username": "tklauser",
          "href": "https://github.com/tklauser",
          "avatar": "https://avatars.githubusercontent.com/u/539708"
        },
        {
          "username": "jrajahalme",
          "href": "https://github.com/jrajahalme",
          "avatar": "https://avatars.githubusercontent.com/u/6518235"
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
      "forks": 484,
      "added_stars": 2348,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 18062,
      "added_stars": 2743,
      "builtBy": [
        {
          "username": "mxyng",
          "href": "https://github.com/mxyng",
          "avatar": "https://avatars.githubusercontent.com/u/2372640"
        },
        {
          "username": "dhiltgen",
          "href": "https://github.com/dhiltgen",
          "avatar": "https://avatars.githubusercontent.com/u/4033016"
        },
        {
          "username": "jmorganca",
          "href": "https://github.com/jmorganca",
          "avatar": "https://avatars.githubusercontent.com/u/251292"
        },
        {
          "username": "BruceMacD",
          "href": "https://github.com/BruceMacD",
          "avatar": "https://avatars.githubusercontent.com/u/5853428"
        },
        {
          "username": "jessegross",
          "href": "https://github.com/jessegross",
          "avatar": "https://avatars.githubusercontent.com/u/6468499"
        }
      ]
    },
    {
      "author": "Autumn-27",
      "repo": "ARTEX",
      "avatar": "https://github.com/Autumn-27.png",
      "repo_link": "https://github.com/Autumn-27/ARTEX",
      "desc": "AI 自主渗透测试系统 | 百度“agent+”攻防挑战赛冠军项目",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 200,
      "added_stars": 749,
      "builtBy": [
        {
          "username": "Autumn-27",
          "href": "https://github.com/Autumn-27",
          "avatar": "https://avatars.githubusercontent.com/u/53844290"
        },
        {
          "username": "neouks",
          "href": "https://github.com/neouks",
          "avatar": "https://avatars.githubusercontent.com/u/26845888"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "RuoJi6",
          "href": "https://github.com/RuoJi6",
          "avatar": "https://avatars.githubusercontent.com/u/79234113"
        },
        {
          "username": "lornlee",
          "href": "https://github.com/lornlee",
          "avatar": "https://avatars.githubusercontent.com/u/14086127"
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
      "forks": 3237,
      "added_stars": 3081,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 257,
      "added_stars": 2447,
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
      "author": "livekit",
      "repo": "livekit",
      "avatar": "https://github.com/livekit.png",
      "repo_link": "https://github.com/livekit/livekit",
      "desc": "End-to-end realtime stack for connecting humans and AI",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2402,
      "added_stars": 620,
      "builtBy": [
        {
          "username": "boks1971",
          "href": "https://github.com/boks1971",
          "avatar": "https://avatars.githubusercontent.com/u/6278212"
        },
        {
          "username": "davidzhao",
          "href": "https://github.com/davidzhao",
          "avatar": "https://avatars.githubusercontent.com/u/320582"
        },
        {
          "username": "cnderrauber",
          "href": "https://github.com/cnderrauber",
          "avatar": "https://avatars.githubusercontent.com/u/7847818"
        },
        {
          "username": "paulwe",
          "href": "https://github.com/paulwe",
          "avatar": "https://avatars.githubusercontent.com/u/125901"
        }
      ]
    },
    {
      "author": "vllm-project",
      "repo": "semantic-router",
      "avatar": "https://github.com/vllm-project.png",
      "repo_link": "https://github.com/vllm-project/semantic-router",
      "desc": "A programmable Mixture-of-Models router for heterogeneous LLM inference",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 993,
      "added_stars": 552,
      "builtBy": [
        {
          "username": "Xunzhuo",
          "href": "https://github.com/Xunzhuo",
          "avatar": "https://avatars.githubusercontent.com/u/48784001"
        },
        {
          "username": "rootfs",
          "href": "https://github.com/rootfs",
          "avatar": "https://avatars.githubusercontent.com/u/7062400"
        },
        {
          "username": "AayushSaini101",
          "href": "https://github.com/AayushSaini101",
          "avatar": "https://avatars.githubusercontent.com/u/60972989"
        },
        {
          "username": "wilsonwu",
          "href": "https://github.com/wilsonwu",
          "avatar": "https://avatars.githubusercontent.com/u/1269496"
        }
      ]
    },
    {
      "author": "grpc",
      "repo": "grpc-go",
      "avatar": "https://github.com/grpc.png",
      "repo_link": "https://github.com/grpc/grpc-go",
      "desc": "The Go language implementation of gRPC. HTTP/2 based RPC",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4777,
      "added_stars": 139,
      "builtBy": [
        {
          "username": "iamqizhao",
          "href": "https://github.com/iamqizhao",
          "avatar": "https://avatars.githubusercontent.com/u/10121772"
        },
        {
          "username": "menghanl",
          "href": "https://github.com/menghanl",
          "avatar": "https://avatars.githubusercontent.com/u/960845"
        },
        {
          "username": "easwars",
          "href": "https://github.com/easwars",
          "avatar": "https://avatars.githubusercontent.com/u/1638487"
        },
        {
          "username": "dfawley",
          "href": "https://github.com/dfawley",
          "avatar": "https://avatars.githubusercontent.com/u/26072277"
        },
        {
          "username": "zasweq",
          "href": "https://github.com/zasweq",
          "avatar": "https://avatars.githubusercontent.com/u/39203661"
        }
      ]
    },
    {
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1316,
      "added_stars": 812,
      "builtBy": [
        {
          "username": "akshaydeo",
          "href": "https://github.com/akshaydeo",
          "avatar": "https://avatars.githubusercontent.com/u/1050029"
        },
        {
          "username": "Pratham-Mishra04",
          "href": "https://github.com/Pratham-Mishra04",
          "avatar": "https://avatars.githubusercontent.com/u/99235987"
        },
        {
          "username": "impoiler",
          "href": "https://github.com/impoiler",
          "avatar": "https://avatars.githubusercontent.com/u/83772622"
        },
        {
          "username": "TejasGhatte",
          "href": "https://github.com/TejasGhatte",
          "avatar": "https://avatars.githubusercontent.com/u/64637256"
        }
      ]
    },
    {
      "author": "urfave",
      "repo": "cli",
      "avatar": "https://github.com/urfave.png",
      "repo_link": "https://github.com/urfave/cli",
      "desc": "A declarative, simple, fast, and fun package for building command line tools in Go",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1830,
      "added_stars": 70,
      "builtBy": [
        {
          "username": "dearchap",
          "href": "https://github.com/dearchap",
          "avatar": "https://avatars.githubusercontent.com/u/3200486"
        },
        {
          "username": "meatballhat",
          "href": "https://github.com/meatballhat",
          "avatar": "https://avatars.githubusercontent.com/u/45143"
        },
        {
          "username": "jszwedko",
          "href": "https://github.com/jszwedko",
          "avatar": "https://avatars.githubusercontent.com/u/316880"
        },
        {
          "username": "coilysiren",
          "href": "https://github.com/coilysiren",
          "avatar": "https://avatars.githubusercontent.com/u/5768468"
        },
        {
          "username": "asahasrabuddhe",
          "href": "https://github.com/asahasrabuddhe",
          "avatar": "https://avatars.githubusercontent.com/u/25657923"
        }
      ]
    },
    {
      "author": "trufflesecurity",
      "repo": "trufflehog",
      "avatar": "https://github.com/trufflesecurity.png",
      "repo_link": "https://github.com/trufflesecurity/trufflehog",
      "desc": "Find, verify, and analyze leaked credentials",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2612,
      "added_stars": 631,
      "builtBy": [
        {
          "username": "lonmarsDev",
          "href": "https://github.com/lonmarsDev",
          "avatar": "https://avatars.githubusercontent.com/u/28698778"
        },
        {
          "username": "roxanne-tampus",
          "href": "https://github.com/roxanne-tampus",
          "avatar": "https://avatars.githubusercontent.com/u/51393035"
        },
        {
          "username": "ahrav",
          "href": "https://github.com/ahrav",
          "avatar": "https://avatars.githubusercontent.com/u/21311841"
        },
        {
          "username": "dustin-decker",
          "href": "https://github.com/dustin-decker",
          "avatar": "https://avatars.githubusercontent.com/u/6031416"
        }
      ]
    },
    {
      "author": "Gentleman-Programming",
      "repo": "engram",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/engram",
      "desc": "Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5, MCP server, HTTP API, CLI, and TUI.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 719,
      "added_stars": 734,
      "builtBy": [
        {
          "username": "Alan-TheGentleman",
          "href": "https://github.com/Alan-TheGentleman",
          "avatar": "https://avatars.githubusercontent.com/u/6935240"
        },
        {
          "username": "dnlrsls",
          "href": "https://github.com/dnlrsls",
          "avatar": "https://avatars.githubusercontent.com/u/111561081"
        },
        {
          "username": "danielgap",
          "href": "https://github.com/danielgap",
          "avatar": "https://avatars.githubusercontent.com/u/5764171"
        },
        {
          "username": "egdev6",
          "href": "https://github.com/egdev6",
          "avatar": "https://avatars.githubusercontent.com/u/18334564"
        },
        {
          "username": "Reaan06",
          "href": "https://github.com/Reaan06",
          "avatar": "https://avatars.githubusercontent.com/u/231132982"
        }
      ]
    },
    {
      "author": "putyy",
      "repo": "res-downloader",
      "avatar": "https://github.com/putyy.png",
      "repo_link": "https://github.com/putyy/res-downloader",
      "desc": "视频号、小程序、抖音、快手、小红书、直播流、m3u8、酷狗、QQ音乐等常见网络资源下载!",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2522,
      "added_stars": 749,
      "builtBy": [
        {
          "username": "putyy",
          "href": "https://github.com/putyy",
          "avatar": "https://avatars.githubusercontent.com/u/31536789"
        },
        {
          "username": "taotieren",
          "href": "https://github.com/taotieren",
          "avatar": "https://avatars.githubusercontent.com/u/13965460"
        },
        {
          "username": "claviering",
          "href": "https://github.com/claviering",
          "avatar": "https://avatars.githubusercontent.com/u/16227832"
        },
        {
          "username": "qiuzhiqian",
          "href": "https://github.com/qiuzhiqian",
          "avatar": "https://avatars.githubusercontent.com/u/19386888"
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
      "forks": 1500,
      "added_stars": 433,
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
      "author": "golang",
      "repo": "go",
      "avatar": "https://github.com/golang.png",
      "repo_link": "https://github.com/golang/go",
      "desc": "The Go programming language",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 20963,
      "added_stars": 2596,
      "builtBy": [
        {
          "username": "rsc",
          "href": "https://github.com/rsc",
          "avatar": "https://avatars.githubusercontent.com/u/104030"
        },
        {
          "username": "griesemer",
          "href": "https://github.com/griesemer",
          "avatar": "https://avatars.githubusercontent.com/u/8528975"
        },
        {
          "username": "robpike",
          "href": "https://github.com/robpike",
          "avatar": "https://avatars.githubusercontent.com/u/4324516"
        },
        {
          "username": "ianlancetaylor",
          "href": "https://github.com/ianlancetaylor",
          "avatar": "https://avatars.githubusercontent.com/u/3194333"
        },
        {
          "username": "bradfitz",
          "href": "https://github.com/bradfitz",
          "avatar": "https://avatars.githubusercontent.com/u/2621"
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
      "forks": 1465,
      "added_stars": 545,
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
      "author": "kubernetes-sigs",
      "repo": "agent-sandbox",
      "avatar": "https://github.com/kubernetes-sigs.png",
      "repo_link": "https://github.com/kubernetes-sigs/agent-sandbox",
      "desc": "agent-sandbox enables easy management of isolated, stateful, singleton workloads, ideal for use cases like AI agent runtimes and reinforcement learning (RL).",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 539,
      "added_stars": 502,
      "builtBy": [
        {
          "username": "janetkuo",
          "href": "https://github.com/janetkuo",
          "avatar": "https://avatars.githubusercontent.com/u/4876867"
        },
        {
          "username": "justinsb",
          "href": "https://github.com/justinsb",
          "avatar": "https://avatars.githubusercontent.com/u/100893"
        },
        {
          "username": "aditya-shantanu",
          "href": "https://github.com/aditya-shantanu",
          "avatar": "https://avatars.githubusercontent.com/u/11148185"
        },
        {
          "username": "k8s-ci-robot",
          "href": "https://github.com/k8s-ci-robot",
          "avatar": "https://avatars.githubusercontent.com/u/20407524"
        },
        {
          "username": "shrutiyam-glitch",
          "href": "https://github.com/shrutiyam-glitch",
          "avatar": "https://avatars.githubusercontent.com/u/237342122"
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3024,
      "added_stars": 26622,
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
      "author": "superdesigndev",
      "repo": "treg",
      "avatar": "https://github.com/superdesigndev.png",
      "repo_link": "https://github.com/superdesigndev/treg",
      "desc": "OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 327,
      "added_stars": 3214,
      "builtBy": [
        {
          "username": "JayZeeDesign",
          "href": "https://github.com/JayZeeDesign",
          "avatar": "https://avatars.githubusercontent.com/u/22532527"
        },
        {
          "username": "stonexer",
          "href": "https://github.com/stonexer",
          "avatar": "https://avatars.githubusercontent.com/u/6255130"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "unclecode",
          "href": "https://github.com/unclecode",
          "avatar": "https://avatars.githubusercontent.com/u/12494079"
        },
        {
          "username": "shehjad-dev",
          "href": "https://github.com/shehjad-dev",
          "avatar": "https://avatars.githubusercontent.com/u/64325867"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5526,
      "added_stars": 3839,
      "builtBy": [
        {
          "username": "mihilmy",
          "href": "https://github.com/mihilmy",
          "avatar": "https://avatars.githubusercontent.com/u/5457787"
        },
        {
          "username": "cxyback",
          "href": "https://github.com/cxyback",
          "avatar": "https://avatars.githubusercontent.com/u/174142461"
        },
        {
          "username": "manar-ant",
          "href": "https://github.com/manar-ant",
          "avatar": "https://avatars.githubusercontent.com/u/250030384"
        },
        {
          "username": "tobinsouth",
          "href": "https://github.com/tobinsouth",
          "avatar": "https://avatars.githubusercontent.com/u/32489862"
        },
        {
          "username": "viveknair",
          "href": "https://github.com/viveknair",
          "avatar": "https://avatars.githubusercontent.com/u/1203039"
        }
      ]
    },
    {
      "author": "vectorize-io",
      "repo": "hindsight",
      "avatar": "https://github.com/vectorize-io.png",
      "repo_link": "https://github.com/vectorize-io/hindsight",
      "desc": "Hindsight: Agent Memory That Learns",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5853,
      "added_stars": 21957,
      "builtBy": [
        {
          "username": "nicoloboschi",
          "href": "https://github.com/nicoloboschi",
          "avatar": "https://avatars.githubusercontent.com/u/23314389"
        },
        {
          "username": "benfrank241",
          "href": "https://github.com/benfrank241",
          "avatar": "https://avatars.githubusercontent.com/u/62250174"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "r266-tech",
          "href": "https://github.com/r266-tech",
          "avatar": "https://avatars.githubusercontent.com/u/233881301"
        },
        {
          "username": "cdbartholomew",
          "href": "https://github.com/cdbartholomew",
          "avatar": "https://avatars.githubusercontent.com/u/22917476"
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
      "forks": 8183,
      "added_stars": 7328,
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
      "author": "TencentCloud",
      "repo": "Octop",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/Octop",
      "desc": "A smarter, self-hosted AI assistant — multi-user, multi-agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 777,
      "added_stars": 4729,
      "builtBy": [
        {
          "username": "jubaoliang-tencent",
          "href": "https://github.com/jubaoliang-tencent",
          "avatar": "https://avatars.githubusercontent.com/u/309035352"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "jubaoliang",
          "href": "https://github.com/jubaoliang",
          "avatar": "https://avatars.githubusercontent.com/u/222386738"
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1643,
      "added_stars": 3388,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3049,
      "added_stars": 2225,
      "builtBy": [
        {
          "username": "jordanecker-ant",
          "href": "https://github.com/jordanecker-ant",
          "avatar": "https://avatars.githubusercontent.com/u/305637556"
        },
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
          "username": "mattpic-ant",
          "href": "https://github.com/mattpic-ant",
          "avatar": "https://avatars.githubusercontent.com/u/227474486"
        }
      ]
    },
    {
      "author": "ahujasid",
      "repo": "mcp-for-blender",
      "avatar": "https://github.com/ahujasid.png",
      "repo_link": "https://github.com/ahujasid/mcp-for-blender",
      "desc": "Community plugin to control Blender 3D with any LLM of your choice",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2708,
      "added_stars": 3265,
      "builtBy": [
        {
          "username": "ahujasid",
          "href": "https://github.com/ahujasid",
          "avatar": "https://avatars.githubusercontent.com/u/11807284"
        },
        {
          "username": "ElgoogUdiab",
          "href": "https://github.com/ElgoogUdiab",
          "avatar": "https://avatars.githubusercontent.com/u/28426666"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "siddikisahil47",
          "href": "https://github.com/siddikisahil47",
          "avatar": "https://avatars.githubusercontent.com/u/134954614"
        },
        {
          "username": "harrywang",
          "href": "https://github.com/harrywang",
          "avatar": "https://avatars.githubusercontent.com/u/595772"
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
      "forks": 794,
      "added_stars": 5133,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8677,
      "added_stars": 7408,
      "builtBy": [
        {
          "username": "D4Vinci",
          "href": "https://github.com/D4Vinci",
          "avatar": "https://avatars.githubusercontent.com/u/20604835"
        },
        {
          "username": "yetval",
          "href": "https://github.com/yetval",
          "avatar": "https://avatars.githubusercontent.com/u/102706514"
        },
        {
          "username": "AbdullahY36",
          "href": "https://github.com/AbdullahY36",
          "avatar": "https://avatars.githubusercontent.com/u/52079299"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mhillebrand",
          "href": "https://github.com/mhillebrand",
          "avatar": "https://avatars.githubusercontent.com/u/286198"
        }
      ]
    },
    {
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 250,000+ scientists worldwide. 168 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4275,
      "added_stars": 6916,
      "builtBy": [
        {
          "username": "timothykassis",
          "href": "https://github.com/timothykassis",
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10637,
      "added_stars": 10841,
      "builtBy": [
        {
          "username": "rohitg00",
          "href": "https://github.com/rohitg00",
          "avatar": "https://avatars.githubusercontent.com/u/48523873"
        },
        {
          "username": "abhinav-m22",
          "href": "https://github.com/abhinav-m22",
          "avatar": "https://avatars.githubusercontent.com/u/113239388"
        },
        {
          "username": "thereisnotime",
          "href": "https://github.com/thereisnotime",
          "avatar": "https://avatars.githubusercontent.com/u/37583483"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "Imbad0202",
      "repo": "academic-research-skills",
      "avatar": "https://github.com/Imbad0202.png",
      "repo_link": "https://github.com/Imbad0202/academic-research-skills",
      "desc": "Academic Research Skills for Claude Code: research → write → review → revise → finalize",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3862,
      "added_stars": 5743,
      "builtBy": [
        {
          "username": "Imbad0202",
          "href": "https://github.com/Imbad0202",
          "avatar": "https://avatars.githubusercontent.com/u/132531341"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "2023Anita",
          "href": "https://github.com/2023Anita",
          "avatar": "https://avatars.githubusercontent.com/u/126993554"
        },
        {
          "username": "didacrios",
          "href": "https://github.com/didacrios",
          "avatar": "https://avatars.githubusercontent.com/u/211009"
        },
        {
          "username": "madtriceps",
          "href": "https://github.com/madtriceps",
          "avatar": "https://avatars.githubusercontent.com/u/115035770"
        }
      ]
    },
    {
      "author": "NVIDIA",
      "repo": "Model-Optimizer",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/Model-Optimizer",
      "desc": "A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 711,
      "added_stars": 1472,
      "builtBy": [
        {
          "username": "kevalmorabia97",
          "href": "https://github.com/kevalmorabia97",
          "avatar": "https://avatars.githubusercontent.com/u/28916987"
        },
        {
          "username": "shengliangxu",
          "href": "https://github.com/shengliangxu",
          "avatar": "https://avatars.githubusercontent.com/u/106840466"
        },
        {
          "username": "cjluo-nv",
          "href": "https://github.com/cjluo-nv",
          "avatar": "https://avatars.githubusercontent.com/u/108829653"
        },
        {
          "username": "h-guo18",
          "href": "https://github.com/h-guo18",
          "avatar": "https://avatars.githubusercontent.com/u/67671475"
        },
        {
          "username": "ajrasane",
          "href": "https://github.com/ajrasane",
          "avatar": "https://avatars.githubusercontent.com/u/131806219"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "markitdown",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/markitdown",
      "desc": "Python tool for converting files and office documents to Markdown.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13886,
      "added_stars": 10905,
      "builtBy": [
        {
          "username": "afourney",
          "href": "https://github.com/afourney",
          "avatar": "https://avatars.githubusercontent.com/u/4017093"
        },
        {
          "username": "gagb",
          "href": "https://github.com/gagb",
          "avatar": "https://avatars.githubusercontent.com/u/13227607"
        },
        {
          "username": "sugatoray",
          "href": "https://github.com/sugatoray",
          "avatar": "https://avatars.githubusercontent.com/u/10201242"
        },
        {
          "username": "PetrAPConsulting",
          "href": "https://github.com/PetrAPConsulting",
          "avatar": "https://avatars.githubusercontent.com/u/173082609"
        }
      ]
    },
    {
      "author": "sgl-project",
      "repo": "sglang",
      "avatar": "https://github.com/sgl-project.png",
      "repo_link": "https://github.com/sgl-project/sglang",
      "desc": "SGLang is a high-performance serving framework for large language models and multimodal models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9246,
      "added_stars": 3783,
      "builtBy": [
        {
          "username": "merrymercy",
          "href": "https://github.com/merrymercy",
          "avatar": "https://avatars.githubusercontent.com/u/15100009"
        },
        {
          "username": "hnyls2002",
          "href": "https://github.com/hnyls2002",
          "avatar": "https://avatars.githubusercontent.com/u/95566987"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mickqian",
          "href": "https://github.com/mickqian",
          "avatar": "https://avatars.githubusercontent.com/u/30898949"
        },
        {
          "username": "fzyzcjy",
          "href": "https://github.com/fzyzcjy",
          "avatar": "https://avatars.githubusercontent.com/u/5236035"
        }
      ]
    },
    {
      "author": "browser-use",
      "repo": "browser-use",
      "avatar": "https://github.com/browser-use.png",
      "repo_link": "https://github.com/browser-use/browser-use",
      "desc": "Agents that use the browser.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12890,
      "added_stars": 5303,
      "builtBy": [
        {
          "username": "MagMueller",
          "href": "https://github.com/MagMueller",
          "avatar": "https://avatars.githubusercontent.com/u/67061560"
        },
        {
          "username": "pirate",
          "href": "https://github.com/pirate",
          "avatar": "https://avatars.githubusercontent.com/u/511499"
        },
        {
          "username": "mertunsall",
          "href": "https://github.com/mertunsall",
          "avatar": "https://avatars.githubusercontent.com/u/22038471"
        },
        {
          "username": "sauravpanda",
          "href": "https://github.com/sauravpanda",
          "avatar": "https://avatars.githubusercontent.com/u/12201824"
        },
        {
          "username": "gregpr07",
          "href": "https://github.com/gregpr07",
          "avatar": "https://avatars.githubusercontent.com/u/36313686"
        }
      ]
    },
    {
      "author": "docling-project",
      "repo": "docling",
      "avatar": "https://github.com/docling-project.png",
      "repo_link": "https://github.com/docling-project/docling",
      "desc": "Get your documents ready for gen AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4970,
      "added_stars": 2521,
      "builtBy": [
        {
          "username": "dolfim-ibm",
          "href": "https://github.com/dolfim-ibm",
          "avatar": "https://avatars.githubusercontent.com/u/97102151"
        },
        {
          "username": "cau-git",
          "href": "https://github.com/cau-git",
          "avatar": "https://avatars.githubusercontent.com/u/60343111"
        },
        {
          "username": "ceberam",
          "href": "https://github.com/ceberam",
          "avatar": "https://avatars.githubusercontent.com/u/75900930"
        },
        {
          "username": "vagenas",
          "href": "https://github.com/vagenas",
          "avatar": "https://avatars.githubusercontent.com/u/35837085"
        }
      ]
    },
    {
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5627,
      "added_stars": 37756,
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
      "author": "SnailSploit",
      "repo": "Claude-Red",
      "avatar": "https://github.com/SnailSploit.png",
      "repo_link": "https://github.com/SnailSploit/Claude-Red",
      "desc": "claude-red is a curated library of offensive security skills designed for the Claude skills system. Each skill is a structured SKILL.md file that primes Claude with expert-level methodology for a specific attack surface — from SQLi to shellcode, EDR evasion to exploit development.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 939,
      "added_stars": 4267,
      "builtBy": [
        {
          "username": "SnailSploit",
          "href": "https://github.com/SnailSploit",
          "avatar": "https://avatars.githubusercontent.com/u/95986478"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "halilkirazkaya",
          "href": "https://github.com/halilkirazkaya",
          "avatar": "https://avatars.githubusercontent.com/u/90972683"
        },
        {
          "username": "LvL23HT",
          "href": "https://github.com/LvL23HT",
          "avatar": "https://avatars.githubusercontent.com/u/130660521"
        },
        {
          "username": "yogesh-tessl",
          "href": "https://github.com/yogesh-tessl",
          "avatar": "https://avatars.githubusercontent.com/u/246077594"
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
      "title": "Type-safe OpenAPI requests that follow your document exactly",
      "url": "https://github.com/jskits/openapi-chain",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-29T11:50:33.000Z"
    },
    {
      "title": "Vite+ 1.0 is out",
      "url": "https://voidzero.dev/posts/announcing-vite-plus-1-0",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-28T10:10:33.000Z"
    },
    {
      "title": "Node.JS Built-Ins That Replaced NPM Packages",
      "url": "https://flaviocopes.com/node-builtins/",
      "upvotes": "3",
      "comments": "1",
      "created": "2026-09-24T23:00:59.000Z"
    },
    {
      "title": "Tibetan-Singing-Bowls: Strike or rub a set of virtual Tibetan singing bowls - synthesized in the browser with Web Audio, with the beating overtones of the real thing",
      "url": "https://github.com/evoluteur/tibetan-singing-bowls",
      "upvotes": "3",
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
      "upvotes": "2",
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
      "upvotes": "2",
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
      "title": "Gemma 4 on Amazon SageMaker: The NVIDIA T4 Decodes at 0.8x of the L4 With the Same Answers",
      "description": "Gemma 4's 4-bit builds on SageMaker's smallest GPU, an NVIDIA T4, against the L4: a Turing patch for vLLM, the host image the CUDA 13 container needs, speed, memory, answers and cost per token.",
      "url": "https://dev.to/gde/gemma-4-on-amazon-sagemaker-the-nvidia-t4-decodes-at-08x-of-the-l4-with-the-same-answers-19m4",
      "tags": "aws, sagemaker, gemma, vllm",
      "reactions": 14,
      "comments": 1,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Join Us Live: Hacktoberfest 2026 Launch with Exclusive Swag! 🎃🚀",
      "description": "Hacktoberfest officially kicks off October 1st! To celebrate, we are hosting an official launch...",
      "url": "https://dev.to/devteam/join-us-live-hacktoberfest-2026-launch-with-exclusive-swag-1e25",
      "tags": "hacktoberfest, hf26challenge, opensource, ai",
      "reactions": 23,
      "comments": 2,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Gemini 4 Argon\r\n\r\nhttps://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
      "description": "...",
      "url": "https://dev.to/ben/gemini-4-argon-5g2l",
      "tags": "ai, gemini, google",
      "reactions": 4,
      "comments": 1,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Welcome Thread - v 395",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-395-55m",
      "tags": "welcome",
      "reactions": 19,
      "comments": 60,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "Gemma 4 on a Tesla T4, Part 3: Int4 Embeddings Serve E2B in 2.86 GiB at 2.30x bf16",
      "description": "Google's QAT Gemma 4 E2B keeps its embedding tables in bf16, and on a Tesla T4 they are most of the model. Packing them to int4 on the grid QAT trained them onto cuts model loading from 6.33 to 2.86 GiB, with every greedy test output token-identical, and raises vLLM's output throughput 11-37% over Google's own W4A16 export.",
      "url": "https://dev.to/gde/gemma-4-on-a-tesla-t4-part-3-int4-embeddings-serve-e2b-in-286-gib-at-230x-bf16-3kch",
      "tags": "gemma, vllm, cuda, machinelearning",
      "reactions": 8,
      "comments": 0,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-3egf",
      "tags": "top7, discuss",
      "reactions": 43,
      "comments": 11,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Count It or Compute It: When a Tool Returns Rows, the Models That Count Them Right Spend the Tokens",
      "description": "A Kaggle benchmark of the step agents rarely test: counting what a tool returns. Ten models, 68 questions, one tool that returns the count and one that returns the rows. With the count, every model is right at a flat cost. With the rows, models that reason through the list count 330 ids right and spend 6 to 26 times the tokens doing it; models that answer straight away get 0 to 10 of 21.",
      "url": "https://dev.to/gde/count-it-or-compute-it-when-a-tool-returns-rows-the-models-that-count-them-right-spend-the-tokens-2hae",
      "tags": "devchallenge, kagglechallenge, ai, machinelearning",
      "reactions": 15,
      "comments": 5,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "Claude Sonnet 5.5 is now available on Google Cloud",
      "description": "Designed for coding and knowledge work, it helps you build features, and create clean work...",
      "url": "https://dev.to/googleai/claude-sonnet-55-is-now-available-on-google-cloud-168h",
      "tags": "",
      "reactions": 13,
      "comments": 2,
      "reading_time": 1,
      "author": "pugsandprincesses"
    },
    {
      "title": "7 ways to lock down AI agent sandboxes in production (beyond Docker containers)",
      "description": "Running an autonomous coding or ops agent directly on your laptop feels like a superpower for the...",
      "url": "https://dev.to/googleai/7-ways-to-lock-down-ai-agent-sandboxes-in-production-beyond-docker-containers-2bg3",
      "tags": "agents, sandbox, ai",
      "reactions": 7,
      "comments": 0,
      "reading_time": 5,
      "author": "optimist29"
    },
    {
      "title": "Disappeared Since March: Taking a Long Break Was My Best Decision Yet",
      "description": "If you checked my profile recently, you probably noticed my page has been completely quiet since...",
      "url": "https://dev.to/maame-codes/disappeared-since-march-taking-a-long-break-was-my-best-decision-yet-1n45",
      "tags": "",
      "reactions": 84,
      "comments": 31,
      "reading_time": 2,
      "author": "maame-codes"
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
      "title": "Markov chain keyboard changes as you type",
      "url": "https://github.com/shapr/markovkeyboard",
      "score": 32,
      "comments": 10,
      "tags": [
        "emacs",
        "show"
      ],
      "id": "rxkab9"
    },
    {
      "title": "Semantic is now Open Source",
      "url": "https://github.com/github/semantic",
      "score": 12,
      "comments": 4,
      "tags": [
        "vcs"
      ],
      "id": "kefhtm"
    },
    {
      "title": "Tech veganism",
      "url": "https://nolanlawson.com/2019/05/31/tech-veganism/",
      "score": 69,
      "comments": 70,
      "tags": [
        "culture"
      ],
      "id": "l38lmk"
    },
    {
      "title": "W3C TAG Ethical Web Principles",
      "url": "https://www.w3.org/2001/tag/doc/ethical-web-principles/",
      "score": 10,
      "comments": 5,
      "tags": [
        "philosophy",
        "web"
      ],
      "id": "ewbjna"
    },
    {
      "title": "How to use internal redirects in NGINX",
      "url": "https://clubhouse.io/developer-how-to/how-to-use-internal-redirects-in-nginx/",
      "score": 8,
      "comments": 1,
      "tags": [
        "devops",
        "web"
      ],
      "id": "exvnof"
    },
    {
      "title": "What are you doing this weekend?",
      "url": "",
      "score": 13,
      "comments": 53,
      "tags": [
        "ask",
        "programming"
      ],
      "id": "hox05r"
    },
    {
      "title": "Buying a book that is available in pdf",
      "url": "",
      "score": 17,
      "comments": 33,
      "tags": [
        "ask",
        "book"
      ],
      "id": "bvh914"
    },
    {
      "title": "A history of S_IFMT – Lubutu",
      "url": "http://www.lubutu.com/soso/a-history-of-sifmt",
      "score": 4,
      "comments": 0,
      "tags": [
        "historical",
        "unix"
      ],
      "id": "bkyucr"
    },
    {
      "title": "Announcing the Unity Editor for Linux",
      "url": "https://blogs.unity3d.com/2019/05/30/announcing-the-unity-editor-for-linux/",
      "score": 22,
      "comments": 2,
      "tags": [
        "linux",
        "release"
      ],
      "id": "ybufwx"
    },
    {
      "title": "Hacking IOS Xamarin apps with Frida",
      "url": "https://orangewirelabs.wordpress.com/2019/05/30/hacking-ios-xamarin-apps-with-frida/",
      "score": 3,
      "comments": 0,
      "tags": [
        "dotnet",
        "ios",
        "reversing"
      ],
      "id": "hemjng"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "bradleyg223",
      "descendants": 805,
      "id": 49913571,
      "kids": [
        49913755,
        49913802,
        49913608,
        49913673,
        49918435,
        49913926,
        49914553,
        49914574,
        49915870,
        49913665,
        49914406,
        49914488,
        49916031,
        49913814,
        49913813,
        49913884,
        49913918,
        49913627,
        49917346,
        49913640,
        49913637,
        49917991,
        49913664,
        49913840,
        49915650,
        49913765,
        49913799,
        49914850,
        49917108,
        49913956,
        49914019,
        49914409,
        49917743,
        49915288,
        49914191,
        49913753,
        49914119,
        49917092,
        49914055,
        49914992,
        49914441,
        49916964,
        49914911,
        49914041,
        49914065,
        49914298,
        49917676,
        49917701,
        49914967,
        49914622,
        49915315,
        49916639,
        49914097,
        49913953,
        49913984,
        49914169,
        49914254,
        49918264,
        49918123,
        49917772,
        49913649,
        49914391,
        49914902,
        49917813,
        49914645,
        49917349,
        49915430,
        49915412,
        49914061,
        49913692,
        49916686,
        49914540,
        49914689,
        49915766,
        49914680,
        49914415,
        49914586,
        49914776,
        49915005,
        49915233,
        49914017,
        49917134,
        49913766,
        49914129,
        49913654,
        49918337,
        49915145,
        49913729,
        49914123,
        49913741,
        49915177,
        49913689,
        49914252,
        49913775,
        49914356,
        49913773,
        49914408,
        49914897,
        49916409,
        49916069,
        49914131,
        49916679,
        49914079,
        49913978,
        49913922,
        49913809,
        49916066,
        49916498,
        49914846,
        49915133,
        49915258,
        49914999,
        49914997,
        49914601,
        49914227,
        49913790,
        49913700,
        49913917,
        49913803,
        49916248,
        49916244,
        49914437,
        49913929,
        49916242,
        49916239,
        49918233,
        49918271,
        49918118,
        49917950,
        49914919,
        49915568,
        49915670,
        49915364,
        49913697,
        49913733,
        49913769,
        49913650,
        49913681,
        49916086
      ],
      "score": 1255,
      "text": "See also: <i>Gemini 4 Argon (High): Intelligence, Performance and Price Analysis</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49914236\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49914236</a>",
      "time": 1790798677,
      "title": "Gemini 4 Argon",
      "type": "story",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/"
    },
    {
      "by": "orphereus",
      "descendants": 48,
      "id": 49918161,
      "kids": [
        49918401,
        49918424,
        49918449,
        49918270,
        49918324,
        49918378,
        49918390,
        49918287,
        49918300,
        49918361,
        49918421,
        49918416,
        49918441,
        49918368,
        49918278,
        49918329,
        49918268,
        49918335,
        49918339,
        49918422,
        49918334,
        49918376,
        49918408,
        49918345,
        49918289,
        49918336,
        49918332,
        49918350,
        49918306
      ],
      "score": 45,
      "time": 1790833736,
      "title": "Suits Are Better Tech Than Modern Clothes",
      "type": "story",
      "url": "https://devz.cl/posts/the-lost-tech-in-contemporary-clothing/"
    },
    {
      "by": "Bluestein",
      "descendants": 86,
      "id": 49915082,
      "kids": [
        49915580,
        49917496,
        49915786,
        49915346,
        49916866,
        49915876,
        49916393,
        49917188,
        49916440,
        49915615
      ],
      "score": 192,
      "time": 1790805784,
      "title": "The top secret URSALA, RAQUEL, and FARRAH satellites (2025)",
      "type": "story",
      "url": "https://www.thespacereview.com/article/4951/1"
    },
    {
      "by": "AnodicElegy",
      "descendants": 85,
      "id": 49890732,
      "kids": [
        49917141,
        49918137,
        49915913,
        49917925,
        49915989,
        49918112,
        49915452,
        49915120,
        49903504,
        49915557,
        49914939,
        49917872,
        49915106,
        49916057,
        49915138,
        49916944,
        49916701,
        49917648,
        49915677,
        49914969
      ],
      "score": 172,
      "time": 1790676618,
      "title": "Why the Bronze Age Collapsed",
      "type": "story",
      "url": "https://www.worksinprogress.news/p/why-really-caused-the-bronze-age"
    },
    {
      "by": "0xcrypto",
      "descendants": 16,
      "id": 49917761,
      "kids": [
        49918425,
        49918321,
        49918442,
        49917877,
        49918377,
        49918343,
        49918318,
        49918102
      ],
      "score": 89,
      "time": 1790829158,
      "title": "Fuck Android Developer Verification Program",
      "type": "story",
      "url": "https://twitter.com/0xcrypto/status/2105515822643114182"
    },
    {
      "by": "zdw",
      "descendants": 12,
      "id": 49917378,
      "kids": [
        49918379,
        49918193,
        49918254,
        49918393,
        49918249,
        49918394,
        49917576
      ],
      "score": 17,
      "time": 1790825261,
      "title": "Is sandboxing sufficient to contain rogue agents?",
      "type": "story",
      "url": "https://blog.cryptographyengineering.com/2026/09/30/is-sandboxing-sufficient-to-contain-rogue-agents/"
    },
    {
      "by": "ibobev",
      "descendants": 53,
      "id": 49912955,
      "kids": [
        49914829,
        49918073,
        49913634,
        49913591,
        49915213,
        49913952,
        49916252,
        49915879,
        49913575,
        49914493,
        49915181,
        49913473,
        49915803,
        49915637,
        49913564,
        49913966,
        49913415
      ],
      "score": 165,
      "time": 1790795090,
      "title": "Surprisingly complex waves reveal the brain's inner workings",
      "type": "story",
      "url": "https://www.quantamagazine.org/surprisingly-complex-waves-reveal-the-brains-inner-workings-20260930/"
    },
    {
      "by": "anerli",
      "descendants": 72,
      "id": 49911995,
      "kids": [
        49918132,
        49918283,
        49912394,
        49912331,
        49915207,
        49917914,
        49912862,
        49912533,
        49917856,
        49912423,
        49917355,
        49912157,
        49913270,
        49915740,
        49915610,
        49917886,
        49917287,
        49912559,
        49916227,
        49912629,
        49913203,
        49913488,
        49912193,
        49912148,
        49916309,
        49912900,
        49912162,
        49912071,
        49915874,
        49912242,
        49915733,
        49918082,
        49916313,
        49914583
      ],
      "score": 145,
      "text": "Hey HN, Anders and Tom here. We&#x27;re building Magnitude, an inference engine for agents that optimizes itself to run as fast as possible on your hardware. It works on Mac, Linux, and Windows on any hardware and is up to 2x faster than llama.cpp.<p>We&#x27;re both software engineers and previously built an open source browser agent to 4k+ GH stars and 100k+ downloads. We increasingly wanted to run it on local models, but found that no inference engine worked for our use case.<p>Inference engines today all make a performance tradeoff. They are either:<p>- Built for batched inference on datacenter hardware at the cost of single-session performance (vLLM, SGLang)\n- Designed for broad compatibility instead of optimizing for specific hardware (llama.cpp, Ollama)\n- Specialized for specific hardware or models but lacking engine completeness (oMLX, ds4)<p>Plus none of them are designed for running agents locally. Sessions are long, several often run at once, and you still want to use your computer for other things.<p>Magnitude is built for maximum performance on your hardware and running local agents:<p>- On-device compilation and tuning: Kernels are written with flexible parameters that are tuned on your actual device before the model runs. This gives you broad hardware compatibility with the same performance ceiling as hardware-specific kernels.<p>- Focus on best architectures: We write our tunable, highly efficient kernels for the most popular open-weights families. This allows us to achieve and surpass the performance of hardware or model specialized engines, without forcing ourselves to over-generalize at the cost of performance.<p>- Dynamic memory allocation: Magnitude reserves only enough memory up front to hold model weights. As your agent sessions grow, the memory heap dynamically increases, and frees itself when agents stop. Your hardware can still be used for other stuff while agents run.<p>- Hybrid paged attention: We borrow the best ideas from engines like SGLang to allow concurrent sessions to share prefix caches, but optimize placement for memory-adjacency so single-session performance doesn&#x27;t suffer.<p>Magnitude is fully open source (Apache 2.0). We built it in Rust, including a custom GPU kernel runtime and autotuner. We take inspiration from the best innovations in inference from academics (e.g. FlashAttention, FlashInfer, TurboQuant) as well as other engines (e.g. SGLang radix attention) to reach the performance ceiling.<p>Benchmarked against llama.cpp with Qwen 3.6 35B A3B (4 bit), 64k context, no speculative decoding:<p>Metal (Mac M4 Pro 48 GB)\n- 92% faster decode (30 tok&#x2F;s → 57 tok&#x2F;s)\n- 9% faster prefill (466 tok&#x2F;s → 507 tok&#x2F;s)\n- 28% less per-agent memory usage<p>CUDA (DGX Spark)\n- 19% faster decode (49 tok&#x2F;s → 58 tok&#x2F;s)\n- 23% faster prefill (2,033 tok&#x2F;s → 2,507 tok&#x2F;s)\n- 27% less per-agent memory usage<p>Magnitude ships as a desktop app that you can easily connect with whatever agents you already use (Pi, OpenCode, Hermes, Codex, and more). It automatically runs models on demand when these agents actually need them, and shuts them down after inactivity.\nHere&#x27;s what it looks like: <a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=0qE8BWEZu7o\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=0qE8BWEZu7o</a><p>We&#x27;re excited to push Magnitude further to let you run bigger models on the same hardware while continuing to improve performance. Our plans include:<p>- Expert streaming: store experts on RAM or disk and load them just-in-time. This lets you run models bigger than what otherwise would fit on your GPU.<p>- Kernel compiler: our current kernels tune a few parameters to fit your hardware. We can take this further with a fully custom compiler that automatically chooses how to fuse kernels and which implementations to use, to make it fit to your hardware even better.<p>- Multi-device utilization: Make the best possible use of all hardware on a system (CPU, GPUs, RAM, disk) by detecting these and automatically solving for the best model layout.<p>We&#x27;d love for more people to try it out and give us feedback. Feel free to comment here, we&#x27;ll be around all day!",
      "time": 1790789860,
      "title": "Launch HN: Magnitude (YC S25) – Self-optimizing inference engine for agents",
      "type": "story",
      "url": "https://github.com/magnitudedev/magnitude"
    },
    {
      "by": "iandinwoodie",
      "descendants": 89,
      "id": 49913192,
      "kids": [
        49914423,
        49913404,
        49913825,
        49913356,
        49913891,
        49916149,
        49913748,
        49914760,
        49915756,
        49914115,
        49913402,
        49915808,
        49913815,
        49917022,
        49915153,
        49915767,
        49914514,
        49914545,
        49913493,
        49915834,
        49913296,
        49916372,
        49914950
      ],
      "score": 200,
      "text": "<a href=\"https:&#x2F;&#x2F;github.com&#x2F;edgcpp&#x2F;compiler\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;edgcpp&#x2F;compiler</a>",
      "time": 1790796397,
      "title": "EDG C++ front-end goes public",
      "type": "story",
      "url": "https://edgcpp.org/#transition"
    },
    {
      "by": "luu",
      "descendants": 9,
      "id": 49913350,
      "kids": [
        49917685,
        49914419,
        49914414,
        49914404,
        49914341,
        49913796
      ],
      "score": 113,
      "time": 1790797477,
      "title": "Halfspace experimental IDE for solid modeling with distance fields",
      "type": "story",
      "url": "https://www.mattkeeter.com/projects/halfspace/"
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
      "title": "Are Frontend Developers Cooked? Is Frontend design safe?",
      "description": "I recently put out a video arguing that frontend development is changing. I don't think the work is...",
      "url": "https://dev.to/erikch/are-frontend-developers-cooked-is-frontend-design-safe-nn8",
      "tags": "webdev, frontend, ai, career",
      "reactions": 22,
      "comments": 7,
      "reading_time": 4,
      "author": "erikch"
    },
    {
      "title": "The OSI Model",
      "description": "The OSI Model      Most OSI explanations fail because they teach you seven words to...",
      "url": "https://dev.to/pkbvs1806/the-osi-model-17ib",
      "tags": "networking, cloud, devops, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 13,
      "author": "pkbvs1806"
    },
    {
      "title": "I asked an AI to make my career-switch video. It took 9 versions, 666 frames and no video editor",
      "description": "I'm a software engineer with 16 years behind me, now halfway through a double MSc in AI (EPITA × EM...",
      "url": "https://dev.to/hamdi_laadhari/i-asked-an-ai-to-make-my-career-switch-video-it-took-9-versions-666-frames-and-no-video-editor-3ebf",
      "tags": "ai, claude, career, javascript",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "hamdi_laadhari"
    },
    {
      "title": "My AI-assisted coding interview was a lesson in reading unfamiliar code",
      "description": "The AI assistant was right there in my coding interview. It wasn’t allowed to help me...",
      "url": "https://dev.to/prasad_rane_dev/my-ai-assisted-coding-interview-was-a-lesson-in-reading-unfamiliar-code-1fec",
      "tags": "ai, career, interview, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "prasad_rane_dev"
    },
    {
      "title": "I thought I'd have found my next role by now.",
      "description": "When I finished my degree I thought I might take a break or maybe find a job soon after. I wasn't too...",
      "url": "https://dev.to/bipin_katuwal_1b94a5e4ebb/i-thought-id-have-found-my-next-role-by-now-n41",
      "tags": "career, developers, employment, softwaredevelopment",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "bipin_katuwal_1b94a5e4ebb"
    },
    {
      "title": "What I learned building an AI voice mock-interview tool",
      "description": "Job seekers in China practice interviews the same way most people do everywhere: by reading question...",
      "url": "https://dev.to/makeinterview/what-i-learned-building-an-ai-voice-mock-interview-tool-2p25",
      "tags": "ai, buildinpublic, career, startup",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "makeinterview"
    },
    {
      "title": "Ask Each Person How They Want to Hear From You",
      "description": "Your manager likes a two line message in the morning. The product lead seems to ignore every message...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/ask-each-person-how-they-want-to-hear-from-you-1cmg",
      "tags": "asaelshinder, communication, teamwork, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "Your First Internship: How to Not Feel Completely Lost in Week One",
      "description": "Landed your first internship and terrified of week one? Here's how to read the unwritten rules, ask good questions, and actually make an impression without pretending to know everything.",
      "url": "https://dev.to/adhikareeprayush/your-first-internship-how-to-not-feel-completely-lost-in-week-one-5cb0",
      "tags": "internship, beginners, career, students",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "adhikareeprayush"
    },
    {
      "title": "The Offer Comes With a Two Day Deadline",
      "description": "The call goes well. They want you. The written offer arrives that evening with a friendly sentence at...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/the-offer-comes-with-a-two-day-deadline-4e8o",
      "tags": "asaelshinder, career, jobsearch, negotiation",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "Your Mentee Asks the Same Question Again",
      "description": "Halfway through your session, your mentee asks how they should decide when to split a service. You...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/your-mentee-asks-the-same-question-again-25j1",
      "tags": "asaelshinder, mentorship, learning, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    }
  ]
}
```

