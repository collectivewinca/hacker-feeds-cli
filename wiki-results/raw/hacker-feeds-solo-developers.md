# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-10-05 06:58:54 UTC

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
      "forks": 16462,
      "added_stars": 8732,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5104,
      "added_stars": 3096,
      "builtBy": [
        {
          "username": "miguel-heygen",
          "href": "https://github.com/miguel-heygen",
          "avatar": "https://avatars.githubusercontent.com/u/229591595"
        },
        {
          "username": "vanceingalls",
          "href": "https://github.com/vanceingalls",
          "avatar": "https://avatars.githubusercontent.com/u/337856"
        },
        {
          "username": "jrusso1020",
          "href": "https://github.com/jrusso1020",
          "avatar": "https://avatars.githubusercontent.com/u/7664106"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ukimsanov",
          "href": "https://github.com/ukimsanov",
          "avatar": "https://avatars.githubusercontent.com/u/165517112"
        }
      ]
    },
    {
      "author": "Effect-TS",
      "repo": "effect",
      "avatar": "https://github.com/Effect-TS.png",
      "repo_link": "https://github.com/Effect-TS/effect",
      "desc": "Build production-ready applications in TypeScript",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 821,
      "added_stars": 702,
      "builtBy": [
        {
          "username": "mikearnaldi",
          "href": "https://github.com/mikearnaldi",
          "avatar": "https://avatars.githubusercontent.com/u/24249610"
        },
        {
          "username": "tim-smart",
          "href": "https://github.com/tim-smart",
          "avatar": "https://avatars.githubusercontent.com/u/40680"
        },
        {
          "username": "gcanti",
          "href": "https://github.com/gcanti",
          "avatar": "https://avatars.githubusercontent.com/u/878912"
        },
        {
          "username": "fubhy",
          "href": "https://github.com/fubhy",
          "avatar": "https://avatars.githubusercontent.com/u/1172528"
        }
      ]
    },
    {
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6532,
      "added_stars": 1304,
      "builtBy": [
        {
          "username": "juliusmarminge",
          "href": "https://github.com/juliusmarminge",
          "avatar": "https://avatars.githubusercontent.com/u/51714798"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "t3dotgg",
          "href": "https://github.com/t3dotgg",
          "avatar": "https://avatars.githubusercontent.com/u/6751787"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
        },
        {
          "username": "maria-rcks",
          "href": "https://github.com/maria-rcks",
          "avatar": "https://avatars.githubusercontent.com/u/254055478"
        }
      ]
    },
    {
      "author": "pablostanley",
      "repo": "yoinks",
      "avatar": "https://github.com/pablostanley.png",
      "repo_link": "https://github.com/pablostanley/yoinks",
      "desc": "yoink any video from your terminal. no shady ads.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 391,
      "added_stars": 2361,
      "builtBy": [
        {
          "username": "pablostanley",
          "href": "https://github.com/pablostanley",
          "avatar": "https://avatars.githubusercontent.com/u/7430988"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "mvschwarz",
      "repo": "openrig",
      "avatar": "https://github.com/mvschwarz.png",
      "repo_link": "https://github.com/mvschwarz/openrig",
      "desc": "Build your own network of agents from Claude Code, Codex and Pi: persistent teams with roles, shared context and owned work.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 365,
      "added_stars": 4251,
      "builtBy": [
        {
          "username": "mvschwarz",
          "href": "https://github.com/mvschwarz",
          "avatar": "https://avatars.githubusercontent.com/u/171890339"
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
          "username": "dajiaohuang",
          "href": "https://github.com/dajiaohuang",
          "avatar": "https://avatars.githubusercontent.com/u/108231307"
        },
        {
          "username": "Totopo27",
          "href": "https://github.com/Totopo27",
          "avatar": "https://avatars.githubusercontent.com/u/35828647"
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
      "forks": 1870,
      "added_stars": 2418,
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
      "author": "oblien",
      "repo": "openship",
      "avatar": "https://github.com/oblien.png",
      "repo_link": "https://github.com/oblien/openship",
      "desc": "Self-hosted deployment platform",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1290,
      "added_stars": 1949,
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
      "author": "mobile-next",
      "repo": "mobile-mcp",
      "avatar": "https://github.com/mobile-next.png",
      "repo_link": "https://github.com/mobile-next/mobile-mcp",
      "desc": "Model Context Protocol Server for Mobile Automation and Scraping (iOS, Android, Emulators, Simulators and Real Devices)",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 769,
      "added_stars": 899,
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
          "username": "mobile-kevin",
          "href": "https://github.com/mobile-kevin",
          "avatar": "https://avatars.githubusercontent.com/u/306153527"
        }
      ]
    },
    {
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 927,
      "added_stars": 994,
      "builtBy": [
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "poteto",
          "href": "https://github.com/poteto",
          "avatar": "https://avatars.githubusercontent.com/u/1390709"
        },
        {
          "username": "minupalaniappan",
          "href": "https://github.com/minupalaniappan",
          "avatar": "https://avatars.githubusercontent.com/u/2145689"
        },
        {
          "username": "ericzakariasson",
          "href": "https://github.com/ericzakariasson",
          "avatar": "https://avatars.githubusercontent.com/u/25622412"
        },
        {
          "username": "roshansada",
          "href": "https://github.com/roshansada",
          "avatar": "https://avatars.githubusercontent.com/u/930790"
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
      "forks": 4999,
      "added_stars": 634,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1821,
      "added_stars": 1291,
      "builtBy": [
        {
          "username": "mksglu",
          "href": "https://github.com/mksglu",
          "avatar": "https://avatars.githubusercontent.com/u/6067714"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ipedro",
          "href": "https://github.com/ipedro",
          "avatar": "https://avatars.githubusercontent.com/u/380338"
        },
        {
          "username": "ousamabenyounes",
          "href": "https://github.com/ousamabenyounes",
          "avatar": "https://avatars.githubusercontent.com/u/2910651"
        }
      ]
    },
    {
      "author": "LuxAlgo",
      "repo": "Vela",
      "avatar": "https://github.com/LuxAlgo.png",
      "repo_link": "https://github.com/LuxAlgo/Vela",
      "desc": "Fast, extensible financial charts for the web. The open-source core of Vela by LuxAlgo.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 181,
      "added_stars": 523,
      "builtBy": [
        {
          "username": "alexgrover",
          "href": "https://github.com/alexgrover",
          "avatar": "https://avatars.githubusercontent.com/u/41912104"
        },
        {
          "username": "alaa-eddine",
          "href": "https://github.com/alaa-eddine",
          "avatar": "https://avatars.githubusercontent.com/u/1016513"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "amoradi",
          "href": "https://github.com/amoradi",
          "avatar": "https://avatars.githubusercontent.com/u/6855005"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 170,
      "added_stars": 636,
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
      "author": "Comfy-Org",
      "repo": "workflow_templates",
      "avatar": "https://github.com/Comfy-Org.png",
      "repo_link": "https://github.com/Comfy-Org/workflow_templates",
      "desc": "ComfyUI template workflows",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 235,
      "added_stars": 229,
      "builtBy": [
        {
          "username": "comfyui-wiki",
          "href": "https://github.com/comfyui-wiki",
          "avatar": "https://avatars.githubusercontent.com/u/192523189"
        },
        {
          "username": "actions-user",
          "href": "https://github.com/actions-user",
          "avatar": "https://avatars.githubusercontent.com/u/65916846"
        },
        {
          "username": "christian-byrne",
          "href": "https://github.com/christian-byrne",
          "avatar": "https://avatars.githubusercontent.com/u/72887196"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "yikart",
      "repo": "AiToEarn",
      "avatar": "https://github.com/yikart.png",
      "repo_link": "https://github.com/yikart/AiToEarn",
      "desc": "Let's use AI to Earn!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4176,
      "added_stars": 397,
      "builtBy": [
        {
          "username": "niuwenzheng",
          "href": "https://github.com/niuwenzheng",
          "avatar": "https://avatars.githubusercontent.com/u/30893307"
        },
        {
          "username": "gaozhenqiang",
          "href": "https://github.com/gaozhenqiang",
          "avatar": "https://avatars.githubusercontent.com/u/88360790"
        },
        {
          "username": "Yuuki-Sakura",
          "href": "https://github.com/Yuuki-Sakura",
          "avatar": "https://avatars.githubusercontent.com/u/54829481"
        },
        {
          "username": "whh2333",
          "href": "https://github.com/whh2333",
          "avatar": "https://avatars.githubusercontent.com/u/70197018"
        },
        {
          "username": "gao1234-prog",
          "href": "https://github.com/gao1234-prog",
          "avatar": "https://avatars.githubusercontent.com/u/208151450"
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
      "forks": 3154,
      "added_stars": 22080,
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
      "forks": 4276,
      "added_stars": 10912,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 506,
      "added_stars": 2515,
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
          "username": "LiorLieberman",
          "href": "https://github.com/LiorLieberman",
          "avatar": "https://avatars.githubusercontent.com/u/76940994"
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
      "forks": 1608,
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
      "forks": 827,
      "added_stars": 1370,
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
          "username": "ElCaaarnal",
          "href": "https://github.com/ElCaaarnal",
          "avatar": "https://avatars.githubusercontent.com/u/88510389"
        },
        {
          "username": "decode2",
          "href": "https://github.com/decode2",
          "avatar": "https://avatars.githubusercontent.com/u/9351115"
        },
        {
          "username": "egdev6",
          "href": "https://github.com/egdev6",
          "avatar": "https://avatars.githubusercontent.com/u/18334564"
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
      "forks": 21314,
      "added_stars": 2098,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3246,
      "added_stars": 3107,
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
      "author": "urfave",
      "repo": "cli",
      "avatar": "https://github.com/urfave.png",
      "repo_link": "https://github.com/urfave/cli",
      "desc": "A declarative, simple, fast, and fun package for building command line tools in Go",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1836,
      "added_stars": 77,
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
      "forks": 2617,
      "added_stars": 655,
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
      "author": "Autumn-27",
      "repo": "ARTEX",
      "avatar": "https://github.com/Autumn-27.png",
      "repo_link": "https://github.com/Autumn-27/ARTEX",
      "desc": "AI 自主渗透测试系统 | 百度“agent+”攻防挑战赛冠军项目",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 319,
      "added_stars": 851,
      "builtBy": [
        {
          "username": "Autumn-27",
          "href": "https://github.com/Autumn-27",
          "avatar": "https://avatars.githubusercontent.com/u/53844290"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "neouks",
          "href": "https://github.com/neouks",
          "avatar": "https://avatars.githubusercontent.com/u/26845888"
        },
        {
          "username": "RuoJi6",
          "href": "https://github.com/RuoJi6",
          "avatar": "https://avatars.githubusercontent.com/u/79234113"
        },
        {
          "username": "lucksec",
          "href": "https://github.com/lucksec",
          "avatar": "https://avatars.githubusercontent.com/u/59011386"
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
      "forks": 727,
      "added_stars": 738,
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
      "author": "grpc",
      "repo": "grpc-go",
      "avatar": "https://github.com/grpc.png",
      "repo_link": "https://github.com/grpc/grpc-go",
      "desc": "The Go language implementation of gRPC. HTTP/2 based RPC",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4782,
      "added_stars": 144,
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
      "author": "Gaurav-Gosain",
      "repo": "tuios",
      "avatar": "https://github.com/Gaurav-Gosain.png",
      "repo_link": "https://github.com/Gaurav-Gosain/tuios",
      "desc": "A terminal window manager that knows what your agents are doing. Tiling panes, workspaces, sessions that survive restarts, and one Inbox for every coding agent.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 206,
      "added_stars": 1108,
      "builtBy": [
        {
          "username": "Gaurav-Gosain",
          "href": "https://github.com/Gaurav-Gosain",
          "avatar": "https://avatars.githubusercontent.com/u/55647468"
        },
        {
          "username": "cr2007",
          "href": "https://github.com/cr2007",
          "avatar": "https://avatars.githubusercontent.com/u/73425927"
        },
        {
          "username": "SebaWag",
          "href": "https://github.com/SebaWag",
          "avatar": "https://avatars.githubusercontent.com/u/251644039"
        },
        {
          "username": "Tim4c",
          "href": "https://github.com/Tim4c",
          "avatar": "https://avatars.githubusercontent.com/u/9990855"
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
      "forks": 1334,
      "added_stars": 789,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 262,
      "added_stars": 2332,
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
      "author": "kubernetes",
      "repo": "kubernetes",
      "avatar": "https://github.com/kubernetes.png",
      "repo_link": "https://github.com/kubernetes/kubernetes",
      "desc": "Production-Grade Container Scheduling and Management",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 46050,
      "added_stars": 2263,
      "builtBy": [
        {
          "username": "k8s-ci-robot",
          "href": "https://github.com/k8s-ci-robot",
          "avatar": "https://avatars.githubusercontent.com/u/20407524"
        },
        {
          "username": "liggitt",
          "href": "https://github.com/liggitt",
          "avatar": "https://avatars.githubusercontent.com/u/980082"
        },
        {
          "username": "thockin",
          "href": "https://github.com/thockin",
          "avatar": "https://avatars.githubusercontent.com/u/5595220"
        },
        {
          "username": "wojtek-t",
          "href": "https://github.com/wojtek-t",
          "avatar": "https://avatars.githubusercontent.com/u/10743879"
        },
        {
          "username": "brendandburns",
          "href": "https://github.com/brendandburns",
          "avatar": "https://avatars.githubusercontent.com/u/5751682"
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
      "forks": 18104,
      "added_stars": 2659,
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
      "author": "cilium",
      "repo": "cilium",
      "avatar": "https://github.com/cilium.png",
      "repo_link": "https://github.com/cilium/cilium",
      "desc": "eBPF-based Networking, Security, and Observability",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4126,
      "added_stars": 684,
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
      "author": "cloudflare",
      "repo": "cloudflared",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflared",
      "desc": "Cloudflare Tunnel client",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1469,
      "added_stars": 542,
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
      "author": "zitadel",
      "repo": "zitadel",
      "avatar": "https://github.com/zitadel.png",
      "repo_link": "https://github.com/zitadel/zitadel",
      "desc": "ZITADEL - Identity infrastructure, simplified for you.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1348,
      "added_stars": 278,
      "builtBy": [
        {
          "username": "livio-a",
          "href": "https://github.com/livio-a",
          "avatar": "https://avatars.githubusercontent.com/u/9405495"
        },
        {
          "username": "peintnermax",
          "href": "https://github.com/peintnermax",
          "avatar": "https://avatars.githubusercontent.com/u/10165752"
        },
        {
          "username": "adlerhurst",
          "href": "https://github.com/adlerhurst",
          "avatar": "https://avatars.githubusercontent.com/u/27845747"
        },
        {
          "username": "hifabienne",
          "href": "https://github.com/hifabienne",
          "avatar": "https://avatars.githubusercontent.com/u/38692350"
        },
        {
          "username": "fforootd",
          "href": "https://github.com/fforootd",
          "avatar": "https://avatars.githubusercontent.com/u/9879976"
        }
      ]
    },
    {
      "author": "e2b-dev",
      "repo": "runtime",
      "avatar": "https://github.com/e2b-dev.png",
      "repo_link": "https://github.com/e2b-dev/runtime",
      "desc": "The runtime behind every E2B stack: Cloud, Enterprise, and your own machine.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 461,
      "added_stars": 443,
      "builtBy": [
        {
          "username": "ValentaTomas",
          "href": "https://github.com/ValentaTomas",
          "avatar": "https://avatars.githubusercontent.com/u/49156497"
        },
        {
          "username": "jakubno",
          "href": "https://github.com/jakubno",
          "avatar": "https://avatars.githubusercontent.com/u/50249709"
        },
        {
          "username": "dobrac",
          "href": "https://github.com/dobrac",
          "avatar": "https://avatars.githubusercontent.com/u/4323173"
        },
        {
          "username": "mlejva",
          "href": "https://github.com/mlejva",
          "avatar": "https://avatars.githubusercontent.com/u/5136688"
        },
        {
          "username": "djeebus",
          "href": "https://github.com/djeebus",
          "avatar": "https://avatars.githubusercontent.com/u/669730"
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
      "forks": 1501,
      "added_stars": 417,
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
      "author": "dstotijn",
      "repo": "hetty",
      "avatar": "https://github.com/dstotijn.png",
      "repo_link": "https://github.com/dstotijn/hetty",
      "desc": "An HTTP toolkit for security research.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 824,
      "added_stars": 518,
      "builtBy": [
        {
          "username": "dstotijn",
          "href": "https://github.com/dstotijn",
          "avatar": "https://avatars.githubusercontent.com/u/983924"
        },
        {
          "username": "holiman",
          "href": "https://github.com/holiman",
          "avatar": "https://avatars.githubusercontent.com/u/142290"
        },
        {
          "username": "MichalZalecki",
          "href": "https://github.com/MichalZalecki",
          "avatar": "https://avatars.githubusercontent.com/u/3136577"
        },
        {
          "username": "StevenMaude",
          "href": "https://github.com/StevenMaude",
          "avatar": "https://avatars.githubusercontent.com/u/3818079"
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
      "forks": 3081,
      "added_stars": 26627,
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
      "author": "anthropics",
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5555,
      "added_stars": 4143,
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
      "forks": 5919,
      "added_stars": 23232,
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
          "username": "cdbartholomew",
          "href": "https://github.com/cdbartholomew",
          "avatar": "https://avatars.githubusercontent.com/u/22917476"
        },
        {
          "username": "r266-tech",
          "href": "https://github.com/r266-tech",
          "avatar": "https://avatars.githubusercontent.com/u/233881301"
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
      "forks": 839,
      "added_stars": 5298,
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
      "author": "superdesigndev",
      "repo": "treg",
      "avatar": "https://github.com/superdesigndev.png",
      "repo_link": "https://github.com/superdesigndev/treg",
      "desc": "OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 347,
      "added_stars": 2955,
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
          "username": "shehjad-dev",
          "href": "https://github.com/shehjad-dev",
          "avatar": "https://avatars.githubusercontent.com/u/64325867"
        },
        {
          "username": "unclecode",
          "href": "https://github.com/unclecode",
          "avatar": "https://avatars.githubusercontent.com/u/12494079"
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
      "forks": 3054,
      "added_stars": 2297,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1700,
      "added_stars": 3336,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8784,
      "added_stars": 7536,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8200,
      "added_stars": 4889,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10982,
      "added_stars": 11614,
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3349,
      "added_stars": 3239,
      "builtBy": [
        {
          "username": "rejojer",
          "href": "https://github.com/rejojer",
          "avatar": "https://avatars.githubusercontent.com/u/8255061"
        },
        {
          "username": "zmtomorrow",
          "href": "https://github.com/zmtomorrow",
          "avatar": "https://avatars.githubusercontent.com/u/13518252"
        },
        {
          "username": "BukeLy",
          "href": "https://github.com/BukeLy",
          "avatar": "https://avatars.githubusercontent.com/u/19304666"
        },
        {
          "username": "S3DFX-CYBER",
          "href": "https://github.com/S3DFX-CYBER",
          "avatar": "https://avatars.githubusercontent.com/u/213652949"
        },
        {
          "username": "KylinMountain",
          "href": "https://github.com/KylinMountain",
          "avatar": "https://avatars.githubusercontent.com/u/3996229"
        }
      ]
    },
    {
      "author": "ahujasid",
      "repo": "mcp-for-blender",
      "avatar": "https://github.com/ahujasid.png",
      "repo_link": "https://github.com/ahujasid/mcp-for-blender",
      "desc": "Community plugin to control Blender 3D with any LLM of your choice. Not affiliated with the official Blender Foundation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2721,
      "added_stars": 3232,
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
      "author": "pytorch",
      "repo": "pytorch",
      "avatar": "https://github.com/pytorch.png",
      "repo_link": "https://github.com/pytorch/pytorch",
      "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 31399,
      "added_stars": 1194,
      "builtBy": [
        {
          "username": "pytorchmergebot",
          "href": "https://github.com/pytorchmergebot",
          "avatar": "https://avatars.githubusercontent.com/u/97764156"
        },
        {
          "username": "malfet",
          "href": "https://github.com/malfet",
          "avatar": "https://avatars.githubusercontent.com/u/2453524"
        },
        {
          "username": "ezyang",
          "href": "https://github.com/ezyang",
          "avatar": "https://avatars.githubusercontent.com/u/13564"
        },
        {
          "username": "zou3519",
          "href": "https://github.com/zou3519",
          "avatar": "https://avatars.githubusercontent.com/u/5652049"
        },
        {
          "username": "cyyever",
          "href": "https://github.com/cyyever",
          "avatar": "https://avatars.githubusercontent.com/u/17618148"
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
      "forks": 727,
      "added_stars": 1487,
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
      "forks": 13958,
      "added_stars": 10769,
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
      "author": "browser-use",
      "repo": "browser-use",
      "avatar": "https://github.com/browser-use.png",
      "repo_link": "https://github.com/browser-use/browser-use",
      "desc": "Agents that use the browser.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12931,
      "added_stars": 5190,
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
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8008,
      "added_stars": 13140,
      "builtBy": [
        {
          "username": "Panniantong",
          "href": "https://github.com/Panniantong",
          "avatar": "https://avatars.githubusercontent.com/u/73925474"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "nyxst4ck",
          "href": "https://github.com/nyxst4ck",
          "avatar": "https://avatars.githubusercontent.com/u/289980115"
        },
        {
          "username": "kadaliao",
          "href": "https://github.com/kadaliao",
          "avatar": "https://avatars.githubusercontent.com/u/7401626"
        },
        {
          "username": "hymansun",
          "href": "https://github.com/hymansun",
          "avatar": "https://avatars.githubusercontent.com/u/10735997"
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
      "forks": 5001,
      "added_stars": 2490,
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
      "forks": 5936,
      "added_stars": 36137,
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
      "forks": 950,
      "added_stars": 4370,
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
      "title": "React Forms and React.memo: Understanding What Actually Re-Renders",
      "url": "https://reactdevelopment.substack.com/p/react-forms-and-reactmemo-understanding",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-04T09:51:26.000Z"
    },
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
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-4jli",
      "tags": "weeklyretro",
      "reactions": 78,
      "comments": 77,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Rediscovering the Schwartzian Transform: Why I Had to Comment on a Flutter Performance Article",
      "description": "When a Flutter developer tackled a UI freeze sorting 10,000 timeline events, they unwittingly reinvented a 30-year-old computer science idiom. Here is how modern Dart 3 records turn the Schwartzian Transform into an elegant, 13x faster one-liner.",
      "url": "https://dev.to/gde/rediscovering-the-schwartzian-transform-why-i-had-to-comment-on-a-flutter-performance-article-30l0",
      "tags": "dart, flutter, architecture, performance",
      "reactions": 10,
      "comments": 0,
      "reading_time": 7,
      "author": "randalschwartz"
    },
    {
      "title": "The Physics of Socratic Prompting: Somatic Recoil, Chess Alpha-Beta, & The NLP Meta-Model",
      "description": "Why scalar RLHF fails at credit assignment, why barking direct code fixes turns you into an exhausted human compiler, and how Socratic questioning plus topological scars prune doomed search trees at depth d=1.",
      "url": "https://dev.to/gde/the-physics-of-socratic-prompting-somatic-recoil-chess-alpha-beta-the-nlp-meta-model-2b6e",
      "tags": "ai, programming, architecture, machinelearning",
      "reactions": 15,
      "comments": 4,
      "reading_time": 16,
      "author": "randalschwartz"
    },
    {
      "title": "Gemma 4 on Amazon SageMaker: The NVIDIA T4 Decodes at 0.8x of the L4 With the Same Answers",
      "description": "Gemma 4's 4-bit builds on SageMaker's smallest GPU, an NVIDIA T4, against the L4: a Turing patch for vLLM, the host image the CUDA 13 container needs, speed, memory, answers and cost per token.",
      "url": "https://dev.to/gde/gemma-4-on-amazon-sagemaker-the-nvidia-t4-decodes-at-08x-of-the-l4-with-the-same-answers-19m4",
      "tags": "aws, sagemaker, gemma, vllm",
      "reactions": 15,
      "comments": 1,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Repacked QAT Gemma 4 on One TPU v5e: 12B Serves at 675 Tokens per Second",
      "description": "Google's quantization-aware-trained Gemma 4 weights, repacked into int4 and int8 formats vLLM serves on TPU. On one v5e chip the repacks serve every size from E2B to 26B, read the suite level with bf16 through 12B, score up to 2.4 points above Google's own 4-bit exports at the same speed, and put 12B on the chip at 11.31 GiB and 675 output tokens per second.",
      "url": "https://dev.to/gde/repacked-qat-gemma-4-on-one-tpu-v5e-12b-serves-at-675-tokens-per-second-15dd",
      "tags": "gemma, googlecloud, machinelearning, llm",
      "reactions": 8,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Gemma 4 QAT on One TPU v5e: What Runs and What Doesn't",
      "description": "Google's quantization-aware-trained Gemma 4 weights, repacked into int4 and int8 formats vLLM serves on TPU, on one v5e chip. What runs: every size from E2B to 26B, level with bf16 through 12B, up to 2.4 points above Google's own 4-bit exports at the same speed, and 12B at 675 output tokens per second. What doesn't: bf16 above E2B, 31B in any build, and 26B past a 2,176-token context.",
      "url": "https://dev.to/gde/gemma-4-qat-on-one-tpu-v5e-what-runs-and-what-doesnt-2gii",
      "tags": "gemma, googlecloud, machinelearning, llm",
      "reactions": 6,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Gemma 4 at Over 70 Tokens/s on a 2021 Laptop's 4 GB GPU: The Live Demo, Step by Step",
      "description": "The live demo, step by step: Gemma 4 E2B answering at 76 tok/s from a GTX 1650 Ti with 4 GB of memory, and the exact re-pack of Google's QAT weights on Hugging Face that makes it fit, run faster and stay close to bf16.",
      "url": "https://dev.to/gde/gemma-4-at-over-70-tokenss-on-a-2021-laptops-4-gb-gpu-the-live-demo-step-by-step-52hg",
      "tags": "gemma, llamacpp, cuda, huggingface",
      "reactions": 9,
      "comments": 0,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "Gemini 4 Argon\r\n\r\nhttps://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
      "description": "...",
      "url": "https://dev.to/ben/gemini-4-argon-5g2l",
      "tags": "ai, gemini, google",
      "reactions": 5,
      "comments": 2,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Gemma 4 on a Tesla T4, Part 3: Int4 Embeddings Serve E2B in 2.86 GiB at 2.30x bf16",
      "description": "Google's QAT Gemma 4 E2B keeps its embedding tables in bf16, and on a Tesla T4 they are most of the model. Packing them to int4 on the grid QAT trained them onto cuts model loading from 6.33 to 2.86 GiB, with every greedy test output token-identical, and raises vLLM's output throughput 11-37% over Google's own W4A16 export.",
      "url": "https://dev.to/gde/gemma-4-on-a-tesla-t4-part-3-int4-embeddings-serve-e2b-in-286-gib-at-230x-bf16-3kch",
      "tags": "gemma, vllm, cuda, machinelearning",
      "reactions": 9,
      "comments": 0,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Views Measure Views",
      "description": "Nine years in, I finally worked out what else to count.  A writer I follow, Sylwia Laskowska,...",
      "url": "https://dev.to/kenwalger/views-measure-views-4co7",
      "tags": "career, writing, devjournal, meta",
      "reactions": 24,
      "comments": 8,
      "reading_time": 12,
      "author": "kenwalger"
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
      "title": "From: anyone@icloud.com - Spoofing Arbitrary Apple iCloud Identities",
      "url": "https://sec-consult.com/blog/detail/from-anyoneicloudcom-spoofing-arbitrary-apple-icloud-identities/",
      "score": 1,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "jpwrmk"
    },
    {
      "title": "You're Leaving Compute on the Table",
      "url": "https://nishantjosh.dev/blogs/youre-leaving-compute-on-the-table/",
      "score": 2,
      "comments": 1,
      "tags": [
        "distributed",
        "scaling"
      ],
      "id": "1gxpk2"
    },
    {
      "title": "RIP, vector database",
      "url": "https://turbopuffer.com/blog/rip-vector-database",
      "score": 1,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "0gtsir"
    },
    {
      "title": "Claude Says",
      "url": "https://ohhfishal.net/Posts/claude",
      "score": 6,
      "comments": 1,
      "tags": [
        "vibecoding"
      ],
      "id": "7faqgg"
    },
    {
      "title": "Implementing Undo - Computerphile",
      "url": "https://www.youtube.com/watch?v=S6PqsZ65Mg4",
      "score": 2,
      "comments": 0,
      "tags": [
        "programming",
        "video"
      ],
      "id": "eulzvm"
    },
    {
      "title": "Broadcasting conglomerates are attempting a takeover of over-the-air television. We must defend it",
      "url": "https://place.reeseric.ci/writings/2026-10-04/",
      "score": 3,
      "comments": 0,
      "tags": [
        "culture"
      ],
      "id": "r81dwi"
    },
    {
      "title": "Jenesis",
      "url": "https://jenesis.build",
      "score": -1,
      "comments": 0,
      "tags": [
        "java",
        "release"
      ],
      "id": "aj7yx2"
    },
    {
      "title": "Building a RAG Pipeline for Semantic Code Search",
      "url": "https://blog.jetbrains.com/ai/2026/09/building-a-rag-pipeline-for-semantic-code-search-a-developer-diary-and-field-notes/",
      "score": 1,
      "comments": 1,
      "tags": [
        "editors",
        "plt",
        "vibecoding"
      ],
      "id": "ok0m3n"
    },
    {
      "title": "Refinement E-Graphs",
      "url": "https://www.philipzucker.com/refinement_egraph/",
      "score": 10,
      "comments": 0,
      "tags": [
        "compilers",
        "formalmethods"
      ],
      "id": "9bufek"
    },
    {
      "title": "Protocol-aware recovery for consensus-based storage (2018)",
      "url": "https://www.usenix.org/system/files/conference/fast18/fast18-alagappan.pdf",
      "score": 4,
      "comments": 1,
      "tags": [
        "databases",
        "distributed",
        "pdf"
      ],
      "id": "4bzboj"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "thelastgallon",
      "descendants": 4,
      "id": 49960901,
      "kids": [
        49961372,
        49961494,
        49961413,
        49961232
      ],
      "score": 34,
      "time": 1791176983,
      "title": "Replacement of petroleum based products with plant-based materials (2025)",
      "type": "story",
      "url": "https://onlinelibrary.wiley.com/doi/10.1002/eng2.70108"
    },
    {
      "by": "snehesht",
      "descendants": 330,
      "id": 49953495,
      "kids": [
        49955565,
        49956534,
        49961324,
        49953496,
        49960283,
        49957375,
        49957786,
        49954019,
        49954449,
        49954498,
        49954815,
        49955948,
        49960552,
        49960949,
        49953980,
        49960758,
        49957515,
        49954658,
        49960784,
        49954266,
        49953844,
        49954083,
        49960340,
        49958835,
        49954581,
        49960248,
        49955898,
        49958817,
        49953738,
        49959598,
        49954705,
        49954041,
        49958593,
        49954614,
        49958456,
        49957399,
        49958767,
        49956116,
        49955321,
        49958780,
        49953852,
        49953669,
        49954307,
        49954297,
        49956279,
        49959449,
        49954117,
        49954513,
        49957089,
        49955308,
        49955067,
        49953674,
        49955995,
        49953945,
        49953933,
        49957908,
        49955512,
        49954313,
        49953792,
        49960314,
        49959645,
        49959889,
        49954678,
        49957627,
        49959199,
        49955708,
        49958086,
        49954719,
        49955340,
        49954320
      ],
      "score": 741,
      "time": 1791118313,
      "title": "Run Qwen 3.8 Flash Next (125B) on consumer hardware (RTX 4090) at 100T/s",
      "type": "story",
      "url": "https://github.com/Niko1221/Strata"
    },
    {
      "by": "rdmuser",
      "descendants": 11,
      "id": 49957812,
      "kids": [
        49961517,
        49959194,
        49959968,
        49960754,
        49960146,
        49959510,
        49961091
      ],
      "score": 109,
      "text": "<a href=\"https:&#x2F;&#x2F;archive.org&#x2F;details&#x2F;tippett-archive&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.org&#x2F;details&#x2F;tippett-archive&#x2F;</a>",
      "time": 1791147688,
      "title": "In the wake of closure, a digital archive of animated materials appears online",
      "type": "story",
      "url": "https://filmstories.co.uk/news/tippett-studios-in-the-wake-of-its-closure-a-digital-archive-of-animated-materials-appears-online/"
    },
    {
      "by": "shellpipe",
      "descendants": 28,
      "id": 49959654,
      "kids": [
        49961488,
        49961428,
        49961364,
        49960986,
        49961326,
        49961315,
        49960806,
        49961119,
        49960695,
        49961136,
        49961306,
        49960693,
        49960720
      ],
      "score": 62,
      "time": 1791162716,
      "title": "A 40ms Go garbage collector pause caused by swap",
      "type": "story",
      "url": "https://frn.sh/go-gc/"
    },
    {
      "by": "Vaslo",
      "descendants": 4,
      "id": 49948300,
      "kids": [
        49961500,
        49819304,
        49818243,
        49948308
      ],
      "score": 31,
      "time": 1791065640,
      "title": "We ported the original Doom to SQL",
      "type": "story",
      "url": "https://cedardb.com/blog/sqldoom/"
    },
    {
      "by": "emptybits",
      "descendants": 36,
      "id": 49961057,
      "kids": [
        49961356,
        49961423,
        49961351,
        49961432,
        49961467,
        49961385,
        49961479,
        49961477,
        49961499,
        49961519,
        49961470,
        49961456,
        49961258,
        49961394
      ],
      "score": 43,
      "time": 1791178660,
      "title": "Anthropic reported diary entry to police, woman faces felony charge",
      "type": "story",
      "url": "https://www.techspot.com/news/114091-florida-woman-used-claude-diary-anthropic-reported-shoot.html"
    },
    {
      "by": "tobr",
      "descendants": 19,
      "id": 49943637,
      "kids": [
        49961436,
        49961426,
        49959335,
        49961167,
        49959436,
        49959592,
        49958865,
        49959075
      ],
      "score": 122,
      "time": 1791029980,
      "title": "Infidel goes wild",
      "type": "story",
      "url": "https://blog.zarfhome.com/2026/10/infidel-goes-wild"
    },
    {
      "by": "wiso",
      "descendants": 64,
      "id": 49956681,
      "kids": [
        49961077,
        49961253,
        49961378,
        49960325,
        49958385,
        49960056,
        49959910,
        49961132,
        49961062,
        49957281,
        49959877,
        49959205,
        49960323,
        49960974,
        49958672,
        49959745,
        49961179,
        49960792,
        49958543,
        49959894,
        49958863,
        49959400,
        49958929,
        49959124,
        49959069,
        49958616,
        49957131,
        49958490,
        49959932,
        49959784
      ],
      "score": 166,
      "time": 1791139757,
      "title": "A browser-native classic Visual Basic VB6 IDE",
      "type": "story",
      "url": "https://wieslawsoltes.github.io/VB6/"
    },
    {
      "by": "llm_nerd",
      "descendants": 112,
      "id": 49959869,
      "kids": [
        49960091,
        49960000,
        49960471,
        49960008,
        49960872,
        49960362,
        49960026,
        49960366,
        49960822,
        49960473,
        49960973,
        49960632,
        49960686,
        49960438,
        49960428,
        49960276,
        49960052,
        49960687
      ],
      "score": 178,
      "time": 1791165248,
      "title": "Powerless F1 drivers frustrated by Bahrain F1 software glitch",
      "type": "story",
      "url": "https://www.motorsport.com/f1/news/horrible-totally-unacceptable-powerless-f1-drivers-frustrated-by-bahrain-f1-software-glitch/10861968/"
    },
    {
      "by": "vntok",
      "descendants": 25,
      "id": 49932236,
      "kids": [
        49961123,
        49961042,
        49949352,
        49961337,
        49959753,
        49960469,
        49961146,
        49960125,
        49960545,
        49960116,
        49959890,
        49959761,
        49961005,
        49960615
      ],
      "score": 105,
      "time": 1790939976,
      "title": "The Tao of Backup",
      "type": "story",
      "url": "http://www.taobackup.com/index.html"
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
      "title": "ESDP 2025 Esri Exam: How 75 Questions Split Across Four Architecture Domains",
      "description": "Esri's ESDP_2025 exam gives you 75 questions in 105 minutes. Here is how the four weighted domains break down and how to study each one.",
      "url": "https://dev.to/palak_mazumdar_f5431445f6/esdp-2025-esri-exam-how-75-questions-split-across-four-architecture-domains-4jna",
      "tags": "architecture, career, learning, systemdesign",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "palak_mazumdar_f5431445f6"
    },
    {
      "title": "I'm an AI agent. I read the agent-economy job boards' own numbers.",
      "description": "I live on iLands and I work as a verifier: someone hands me a claim, I check it against primary...",
      "url": "https://dev.to/hynoma/im-an-ai-agent-i-read-the-agent-economy-job-boards-own-numbers-4mdh",
      "tags": "ai, machinelearning, web3, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "hynoma"
    },
    {
      "title": "Beyond AI Literacy: Why Strategic Foresight Is the Missing Capability for the AI Age",
      "description": "Learning to use AI is important. Learning to anticipate what AI could change, disrupt, and create may...",
      "url": "https://dev.to/salmankhatani/beyond-ai-literacy-why-strategic-foresight-is-the-missing-capability-for-the-ai-age-4g1i",
      "tags": "ai, futureofwork, futures, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "salmankhatani"
    },
    {
      "title": "I Built ResumePilot for a Friend Who Was Tired of Rewriting Their Resume",
      "description": "Applying for internships is repetitive. You find a job description, compare it with your resume,...",
      "url": "https://dev.to/srijita33/i-built-resumepilot-for-a-friend-who-was-tired-of-rewriting-their-resume-3fh9",
      "tags": "ai, career, hacktoberfest, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "srijita33"
    },
    {
      "title": "Eight Scrum habits that cost points on a Scrum Master assessment",
      "description": "Experience can work against you on a Scrum Master assessment. Your team runs Scrum a certain way, and...",
      "url": "https://dev.to/thibaudlepan/eight-scrum-habits-that-cost-points-on-a-scrum-master-assessment-emo",
      "tags": "scrum, agile, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "thibaudlepan"
    },
    {
      "title": "Japanese Development Standards: The Philosophy Behind Efficient Engineering",
      "description": "All the content in this post is the summary of an in-depth analysis regarding the fusion of Japanese...",
      "url": "https://dev.to/jacob_ernest000/japanese-development-standards-the-philosophy-behind-efficient-engineering-5bnd",
      "tags": "productivity, programming, architecture, career",
      "reactions": 2,
      "comments": 0,
      "reading_time": 4,
      "author": "jacob_ernest000"
    },
    {
      "title": "How I Went From Accountant to UX Designer in 8 Months (Without a Bootcamp)",
      "description": "A working accountant with no design background pivoted to a full-time UX designer role in 8 months -- without a bootcamp. Here is the exact roadmap, the mistakes, and what worked.",
      "url": "https://dev.to/g105g/how-i-went-from-accountant-to-ux-designer-in-8-months-without-a-bootcamp-1mhn",
      "tags": "career, design, learning, ux",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "g105g"
    },
    {
      "title": "Beyond FAANG and Major Hubs: Exploring Diverse Tech Career Opportunities Nationwide",
      "description": "The Perception Funnel: How Media and Education Narrow Tech Career Horizons   The tech...",
      "url": "https://dev.to/svetlix/beyond-faang-and-major-hubs-exploring-diverse-tech-career-opportunities-nationwide-2n64",
      "tags": "tech, faang, career, diversity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 17,
      "author": "svetlix"
    },
    {
      "title": "Which check in your pipeline has never fired?",
      "description": "I audited my own and found four. Two of them had never fired because they were structurally incapable of firing, and I could not tell the two groups apart by reading the code.",
      "url": "https://dev.to/frankchu/which-check-in-your-pipeline-has-never-fired-p7c",
      "tags": "discuss, testing, devops, career",
      "reactions": 0,
      "comments": 1,
      "reading_time": 4,
      "author": "frankchu"
    },
    {
      "title": "What Happened After I Got a Zero for \"Too Good\" Code",
      "description": "A follow-up to my last post — the part where a teacher actually looked at the work.",
      "url": "https://dev.to/kehinde_owolabi_e2e54567a/what-happened-after-i-got-a-zero-for-too-good-code-1gij",
      "tags": "discuss, career, python, careerdevelopment",
      "reactions": 2,
      "comments": 0,
      "reading_time": 5,
      "author": "kehinde_owolabi_e2e54567a"
    }
  ]
}
```

