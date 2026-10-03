# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-10-03 06:46:10 UTC

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
      "forks": 16326,
      "added_stars": 12825,
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
      "forks": 5041,
      "added_stars": 2661,
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
      "author": "anthropics",
      "repo": "claude-code-action",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-action",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2184,
      "added_stars": 417,
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
      "author": "pablostanley",
      "repo": "yoinks",
      "avatar": "https://github.com/pablostanley.png",
      "repo_link": "https://github.com/pablostanley/yoinks",
      "desc": "yoink any video from your terminal. no shady ads.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 316,
      "added_stars": 1415,
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
      "author": "dream-num",
      "repo": "univer",
      "avatar": "https://github.com/dream-num.png",
      "repo_link": "https://github.com/dream-num/univer",
      "desc": "The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1870,
      "added_stars": 4208,
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
      "author": "mobile-next",
      "repo": "mobile-mcp",
      "avatar": "https://github.com/mobile-next.png",
      "repo_link": "https://github.com/mobile-next/mobile-mcp",
      "desc": "Model Context Protocol Server for Mobile Automation and Scraping (iOS, Android, Emulators, Simulators and Real Devices)",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 757,
      "added_stars": 1648,
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
      "author": "oblien",
      "repo": "openship",
      "avatar": "https://github.com/oblien.png",
      "repo_link": "https://github.com/oblien/openship",
      "desc": "Self-hosted deployment platform",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1285,
      "added_stars": 1902,
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
      "author": "vercel-labs",
      "repo": "scriptc",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/scriptc",
      "desc": "TypeScript-to-Native Compiler",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 166,
      "added_stars": 880,
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
      "author": "satnaing",
      "repo": "shadcn-admin",
      "avatar": "https://github.com/satnaing.png",
      "repo_link": "https://github.com/satnaing/shadcn-admin",
      "desc": "Admin Dashboard UI built with Shadcn and Vite.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2349,
      "added_stars": 1253,
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
      "author": "moeru-ai",
      "repo": "airi",
      "avatar": "https://github.com/moeru-ai.png",
      "repo_link": "https://github.com/moeru-ai/airi",
      "desc": "💖🧸 Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4980,
      "added_stars": 600,
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
      "author": "openclaw",
      "repo": "openclaw",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/openclaw",
      "desc": "The AI that really does things. Any OS. Any Platform. The lobster way. 🦞",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 82231,
      "added_stars": 1170,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "vincentkoc",
          "href": "https://github.com/vincentkoc",
          "avatar": "https://avatars.githubusercontent.com/u/25068"
        },
        {
          "username": "shakkernerd",
          "href": "https://github.com/shakkernerd",
          "avatar": "https://avatars.githubusercontent.com/u/165377636"
        },
        {
          "username": "obviyus",
          "href": "https://github.com/obviyus",
          "avatar": "https://avatars.githubusercontent.com/u/22031114"
        }
      ]
    },
    {
      "author": "adewaskar",
      "repo": "jarvis",
      "avatar": "https://github.com/adewaskar.png",
      "repo_link": "https://github.com/adewaskar/jarvis",
      "desc": "J.A.R.V.I.S for automating your daily tasks using Claude Code",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 145,
      "added_stars": 119,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "adityadewz",
          "href": "https://github.com/adityadewz",
          "avatar": "https://avatars.githubusercontent.com/u/34622770"
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
      "forks": 1359,
      "added_stars": 654,
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
      "author": "FxEmbed",
      "repo": "FxEmbed",
      "avatar": "https://github.com/FxEmbed.png",
      "repo_link": "https://github.com/FxEmbed/FxEmbed",
      "desc": "Fix X/Twitter and Bluesky embeds! Use multiple images, videos, polls, translations and more on Discord, Telegram and others",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 268,
      "added_stars": 221,
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
      "author": "vega-org",
      "repo": "vega-app",
      "avatar": "https://github.com/vega-org.png",
      "repo_link": "https://github.com/vega-org/vega-app",
      "desc": "A app to Play, Stream or Cast Media for andorid.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 204,
      "added_stars": 71,
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
          "username": "jaydeep-pipaliya",
          "href": "https://github.com/jaydeep-pipaliya",
          "avatar": "https://avatars.githubusercontent.com/u/71074587"
        },
        {
          "username": "OshekharO",
          "href": "https://github.com/OshekharO",
          "avatar": "https://avatars.githubusercontent.com/u/95137948"
        }
      ]
    },
    {
      "author": "cloudflare",
      "repo": "vinext",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/vinext",
      "desc": "Vite plugin that reimplements the Next.js API surface — deploy anywhere",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 427,
      "added_stars": 236,
      "builtBy": [
        {
          "username": "james-elicx",
          "href": "https://github.com/james-elicx",
          "avatar": "https://avatars.githubusercontent.com/u/10815538"
        },
        {
          "username": "NathanDrake2406",
          "href": "https://github.com/NathanDrake2406",
          "avatar": "https://avatars.githubusercontent.com/u/146415969"
        },
        {
          "username": "southpolesteve",
          "href": "https://github.com/southpolesteve",
          "avatar": "https://avatars.githubusercontent.com/u/471400"
        },
        {
          "username": "Divkix",
          "href": "https://github.com/Divkix",
          "avatar": "https://avatars.githubusercontent.com/u/23524935"
        },
        {
          "username": "shulaoda",
          "href": "https://github.com/shulaoda",
          "avatar": "https://avatars.githubusercontent.com/u/165626830"
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
      "forks": 3126,
      "added_stars": 21821,
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
      "forks": 4246,
      "added_stars": 10794,
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
      "forks": 1605,
      "added_stars": 2650,
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
      "forks": 824,
      "added_stars": 1415,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 18086,
      "added_stars": 2699,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 495,
      "added_stars": 2453,
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
      "author": "cilium",
      "repo": "cilium",
      "avatar": "https://github.com/cilium.png",
      "repo_link": "https://github.com/cilium/cilium",
      "desc": "eBPF-based Networking, Security, and Observability",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4124,
      "added_stars": 690,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3240,
      "added_stars": 3094,
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
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1323,
      "added_stars": 806,
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
      "author": "Autumn-27",
      "repo": "ARTEX",
      "avatar": "https://github.com/Autumn-27.png",
      "repo_link": "https://github.com/Autumn-27/ARTEX",
      "desc": "AI 自主渗透测试系统 | 百度“agent+”攻防挑战赛冠军项目",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 254,
      "added_stars": 785,
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
      "author": "urfave",
      "repo": "cli",
      "avatar": "https://github.com/urfave.png",
      "repo_link": "https://github.com/urfave/cli",
      "desc": "A declarative, simple, fast, and fun package for building command line tools in Go",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1833,
      "added_stars": 73,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 258,
      "added_stars": 2334,
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
      "author": "Gaurav-Gosain",
      "repo": "tuios",
      "avatar": "https://github.com/Gaurav-Gosain.png",
      "repo_link": "https://github.com/Gaurav-Gosain/tuios",
      "desc": "A terminal window manager that knows what your agents are doing. Tiling panes, workspaces, sessions that survive restarts, and one Inbox for every coding agent.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 203,
      "added_stars": 971,
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
      "author": "grpc",
      "repo": "grpc-go",
      "avatar": "https://github.com/grpc.png",
      "repo_link": "https://github.com/grpc/grpc-go",
      "desc": "The Go language implementation of gRPC. HTTP/2 based RPC",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4778,
      "added_stars": 138,
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
      "author": "Gentleman-Programming",
      "repo": "engram",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/engram",
      "desc": "Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5, MCP server, HTTP API, CLI, and TUI.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 722,
      "added_stars": 742,
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
      "author": "golang",
      "repo": "go",
      "avatar": "https://github.com/golang.png",
      "repo_link": "https://github.com/golang/go",
      "desc": "The Go programming language",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 21109,
      "added_stars": 2374,
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
      "author": "trufflesecurity",
      "repo": "trufflehog",
      "avatar": "https://github.com/trufflesecurity.png",
      "repo_link": "https://github.com/trufflesecurity/trufflehog",
      "desc": "Find, verify, and analyze leaked credentials",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2619,
      "added_stars": 646,
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
      "author": "openai",
      "repo": "tunnel-client",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/tunnel-client",
      "desc": "Customer-run client for Secure MCP Tunnel: connect private or localhost MCP servers to ChatGPT, Codex, the Responses API, and AgentKit without exposing them to the public internet.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 106,
      "added_stars": 190,
      "builtBy": [
        {
          "username": "hintz-openai",
          "href": "https://github.com/hintz-openai",
          "avatar": "https://avatars.githubusercontent.com/u/201815723"
        },
        {
          "username": "denyska-oai",
          "href": "https://github.com/denyska-oai",
          "avatar": "https://avatars.githubusercontent.com/u/226171314"
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
      "forks": 1467,
      "added_stars": 541,
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
      "author": "vllm-project",
      "repo": "semantic-router",
      "avatar": "https://github.com/vllm-project.png",
      "repo_link": "https://github.com/vllm-project/semantic-router",
      "desc": "A programmable Mixture-of-Models router for heterogeneous LLM inference",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 998,
      "added_stars": 518,
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
          "username": "wilsonwu",
          "href": "https://github.com/wilsonwu",
          "avatar": "https://avatars.githubusercontent.com/u/1269496"
        },
        {
          "username": "AayushSaini101",
          "href": "https://github.com/AayushSaini101",
          "avatar": "https://avatars.githubusercontent.com/u/60972989"
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
      "forks": 2405,
      "added_stars": 610,
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
      "author": "e2b-dev",
      "repo": "runtime",
      "avatar": "https://github.com/e2b-dev.png",
      "repo_link": "https://github.com/e2b-dev/runtime",
      "desc": "The runtime behind every E2B stack: Cloud, Enterprise, and your own machine.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 457,
      "added_stars": 439,
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
      "author": "kubernetes-sigs",
      "repo": "agent-sandbox",
      "avatar": "https://github.com/kubernetes-sigs.png",
      "repo_link": "https://github.com/kubernetes-sigs/agent-sandbox",
      "desc": "agent-sandbox enables easy management of isolated, stateful, singleton workloads, ideal for use cases like AI agent runtimes and reinforcement learning (RL).",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 540,
      "added_stars": 504,
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
      "forks": 3051,
      "added_stars": 26537,
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
      "forks": 5537,
      "added_stars": 3991,
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
      "author": "superdesigndev",
      "repo": "treg",
      "avatar": "https://github.com/superdesigndev.png",
      "repo_link": "https://github.com/superdesigndev/treg",
      "desc": "OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 336,
      "added_stars": 3055,
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
      "author": "vectorize-io",
      "repo": "hindsight",
      "avatar": "https://github.com/vectorize-io.png",
      "repo_link": "https://github.com/vectorize-io/hindsight",
      "desc": "Hindsight: Agent Memory That Learns",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5872,
      "added_stars": 22756,
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
      "forks": 794,
      "added_stars": 5017,
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3052,
      "added_stars": 2238,
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
      "forks": 1667,
      "added_stars": 3495,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8191,
      "added_stars": 5569,
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
      "author": "ahujasid",
      "repo": "mcp-for-blender",
      "avatar": "https://github.com/ahujasid.png",
      "repo_link": "https://github.com/ahujasid/mcp-for-blender",
      "desc": "Community plugin to control Blender 3D with any LLM of your choice. Not affiliated with the official Blender Foundation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2713,
      "added_stars": 3273,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8739,
      "added_stars": 7458,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10725,
      "added_stars": 10928,
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
      "author": "petergyang",
      "repo": "no-ai-slop",
      "avatar": "https://github.com/petergyang.png",
      "repo_link": "https://github.com/petergyang/no-ai-slop",
      "desc": "Removes 20+ patterns of AI slop from any piece of writing.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 804,
      "added_stars": 5124,
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
      "author": "microsoft",
      "repo": "markitdown",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/markitdown",
      "desc": "Python tool for converting files and office documents to Markdown.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13920,
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
      "author": "NVIDIA",
      "repo": "Model-Optimizer",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/Model-Optimizer",
      "desc": "A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 721,
      "added_stars": 1495,
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
      "author": "browser-use",
      "repo": "browser-use",
      "avatar": "https://github.com/browser-use.png",
      "repo_link": "https://github.com/browser-use/browser-use",
      "desc": "Agents that use the browser.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12911,
      "added_stars": 5266,
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
      "forks": 4988,
      "added_stars": 2524,
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
      "forks": 5800,
      "added_stars": 37858,
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
      "forks": 946,
      "added_stars": 4318,
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
    },
    {
      "author": "SWE-agent",
      "repo": "mini-swe-agent",
      "avatar": "https://github.com/SWE-agent.png",
      "repo_link": "https://github.com/SWE-agent/mini-swe-agent",
      "desc": "The 100 line AI agent that solves GitHub issues or helps you in your command line. Radically simple, no huge configs, no giant monorepo—but scores >74% on SWE-bench verified!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1121,
      "added_stars": 1263,
      "builtBy": [
        {
          "username": "klieret",
          "href": "https://github.com/klieret",
          "avatar": "https://avatars.githubusercontent.com/u/13602468"
        },
        {
          "username": "Chesars",
          "href": "https://github.com/Chesars",
          "avatar": "https://avatars.githubusercontent.com/u/128240629"
        },
        {
          "username": "closji",
          "href": "https://github.com/closji",
          "avatar": "https://avatars.githubusercontent.com/u/8196527"
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
      "forks": 219,
      "added_stars": 6939,
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
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-4jli",
      "tags": "weeklyretro",
      "reactions": 49,
      "comments": 36,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Rediscovering the Schwartzian Transform: Why I Had to Comment on a Flutter Performance Article",
      "description": "When a Flutter developer tackled a UI freeze sorting 10,000 timeline events, they unwittingly reinvented a 30-year-old computer science idiom. Here is how modern Dart 3 records turn the Schwartzian Transform into an elegant, 13x faster one-liner.",
      "url": "https://dev.to/gde/rediscovering-the-schwartzian-transform-why-i-had-to-comment-on-a-flutter-performance-article-30l0",
      "tags": "dart, flutter, architecture, performance",
      "reactions": 8,
      "comments": 0,
      "reading_time": 7,
      "author": "randalschwartz"
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
      "reactions": 4,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Building Sarrera: Self-Hosted Enterprise AI Inference Gateway with RBAC, Token Quotas & Telemetry",
      "description": "How to deploy a private, local AI gateway for engineering teams using LiteLLM, Caddy, Langfuse, and Open WebUI with multi-tier quotas.",
      "url": "https://dev.to/gde/building-sarrera-self-hosted-enterprise-ai-inference-gateway-with-rbac-token-quotas-telemetry-316o",
      "tags": "ai, devops, docker, opensource",
      "reactions": 8,
      "comments": 0,
      "reading_time": 5,
      "author": "marioezquerro"
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
      "title": "A wine cellar that remembers what you used to believe",
      "description": "This is a submission for the Sanity Challenge, Path Two: Vibe-Code Something Strange           What I...",
      "url": "https://dev.to/kenwalger/a-wine-cellar-that-remembers-what-you-used-to-believe-4i55",
      "tags": "sanitychallenge, devchallenge, ai, sanity",
      "reactions": 28,
      "comments": 2,
      "reading_time": 20,
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
      "title": "The nadir of surveillance (Den Digitale Prvevagt)",
      "url": "https://vmcall.github.io/reversal/2019/03/07/exam-surveillance.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "reversing"
      ],
      "id": "jt2f08"
    },
    {
      "title": "Graying Out",
      "url": "https://www.tbray.org/ongoing/When/201x/2019/03/11/Lights-Going-Out",
      "score": 16,
      "comments": 2,
      "tags": [
        "culture"
      ],
      "id": "bp4k09"
    },
    {
      "title": "How a Bitcoin Evangelist Made Himself Vanish, in 15 (Not So Easy) Steps",
      "url": "https://www.nytimes.com/2019/03/12/technology/how-to-disappear-surveillance-state.html",
      "score": -3,
      "comments": 6,
      "tags": [
        "privacy"
      ],
      "id": "5ualh7"
    },
    {
      "title": "How I Made A Chicken Play Tic-Tac-Toe",
      "url": "https://steemit.com/life/@creatr/how-i-made-a-chicken-play-tic-tac-toe-a-true-story",
      "score": 4,
      "comments": 0,
      "tags": [
        "historical"
      ],
      "id": "kaujzk"
    },
    {
      "title": "How to Use Grouping Sets in Django",
      "url": "https://hakibenita.com/how-to-use-grouping-sets-in-django",
      "score": 4,
      "comments": 0,
      "tags": [
        "databases",
        "python"
      ],
      "id": "vorx19"
    },
    {
      "title": "What I don't like in your repo",
      "url": "https://medium.com/@olegkovalov/what-i-dont-like-in-your-repo-a602577a526b",
      "score": 10,
      "comments": 20,
      "tags": [
        "practices",
        "vcs"
      ],
      "id": "6gixqw"
    },
    {
      "title": "Why is no one signing their emails?",
      "url": "https://arp242.net/weblog/signing-emails.html",
      "score": 42,
      "comments": 34,
      "tags": [
        "practices",
        "security"
      ],
      "id": "1cxqho"
    },
    {
      "title": "The New Economics by Edwards Deming",
      "url": "http://beza1e1.tuxen.de/the_new_economics.html",
      "score": 2,
      "comments": 0,
      "tags": [
        "book",
        "practices"
      ],
      "id": "mtqiaw"
    },
    {
      "title": "The Power of Types in Idris",
      "url": "https://www.azavea.com/blog/2019/03/11/the-power-of-types-in-idris/",
      "score": 37,
      "comments": 5,
      "tags": [
        "plt"
      ],
      "id": "drw8uh"
    },
    {
      "title": "Context-Sensitive Fencing: Securing Speculative Execution via Microcode Customization",
      "url": "https://www.cs.virginia.edu/~av6ds/papers/asplos2019.pdf",
      "score": 3,
      "comments": 0,
      "tags": [
        "pdf",
        "security"
      ],
      "id": "ogjhfh"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "azhenley",
      "descendants": 38,
      "id": 49940394,
      "kids": [
        49941189,
        49941334,
        49941434,
        49941768,
        49941230,
        49941231,
        49941432,
        49941065,
        49941149,
        49941650,
        49941038,
        49941470,
        49941580,
        49941158,
        49941708,
        49941816,
        49941212,
        49941325,
        49941121
      ],
      "score": 153,
      "time": 1790988925,
      "title": "Newgrounds.com – A community of games, music, and art",
      "type": "story",
      "url": "https://www.newgrounds.com/"
    },
    {
      "by": "34679",
      "descendants": 25,
      "id": 49941114,
      "kids": [
        49941426,
        49941514,
        49941890,
        49941736,
        49941456,
        49941825,
        49941793,
        49941640,
        49941623,
        49941539,
        49941412,
        49941602,
        49941701,
        49941504
      ],
      "score": 110,
      "time": 1790997550,
      "title": "Extra Big Ass Intelligence",
      "type": "story",
      "url": "https://www.extrabigassintelligence.com/"
    },
    {
      "by": "hn_acker",
      "descendants": 257,
      "id": 49927754,
      "kids": [
        49935866,
        49935956,
        49941239,
        49938433,
        49935815,
        49937077,
        49936527,
        49937613,
        49936511,
        49938188,
        49936630,
        49936553,
        49937060,
        49941579,
        49941669,
        49936933,
        49936991,
        49936331
      ],
      "score": 591,
      "time": 1790893387,
      "title": "Court agrees with EFF: Utah's VPN law demands a technical impossibility",
      "type": "story",
      "url": "https://www.eff.org/deeplinks/2026/10/court-agrees-eff-utahs-vpn-law-demands-technical-impossibility"
    },
    {
      "by": "signa11",
      "descendants": 104,
      "id": 49933869,
      "kids": [
        49940241,
        49941466,
        49940141,
        49940194,
        49940331
      ],
      "score": 183,
      "time": 1790950932,
      "title": "The Forgetful CPU (Linux on M4)",
      "type": "story",
      "url": "https://yuka.dev/blog-2026-10-02-linux-m4.html"
    },
    {
      "by": "weaksauce",
      "descendants": 4,
      "id": 49937540,
      "kids": [
        49941127,
        49941847,
        49940318
      ],
      "score": 17,
      "time": 1790969347,
      "title": "Make Tmux the OS",
      "type": "story",
      "url": "https://matduggan.com/what-does-my-dream-os-ui-look-like/"
    },
    {
      "by": "CoryOndrejka",
      "descendants": 102,
      "id": 49925184,
      "kids": [
        49938227,
        49937705,
        49937715,
        49938926,
        49938701,
        49941786,
        49941870,
        49938146,
        49937409,
        49939343,
        49937462,
        49941613,
        49941731,
        49937359,
        49940993,
        49940436,
        49939878,
        49940069,
        49941463,
        49937358,
        49940805,
        49941851,
        49929036,
        49938004,
        49940776,
        49940187
      ],
      "score": 408,
      "text": "<a href=\"https:&#x2F;&#x2F;archive.ph&#x2F;Kv6yS\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.ph&#x2F;Kv6yS</a><p><a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=_h_pQ1-5iQg\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=_h_pQ1-5iQg</a><p><a href=\"https:&#x2F;&#x2F;www.theguardian.com&#x2F;sport&#x2F;2026&#x2F;oct&#x2F;01&#x2F;mike-tomlin-minecraft-city\" rel=\"nofollow\">https:&#x2F;&#x2F;www.theguardian.com&#x2F;sport&#x2F;2026&#x2F;oct&#x2F;01&#x2F;mike-tomlin-mi...</a>",
      "time": 1790878818,
      "title": "Mike Tomlin spent 12 years building a Minecraft city",
      "type": "story",
      "url": "https://www.nytimes.com/athletic/7648198/2026/10/01/mike-tomlin-minecraft-nfl-coach/"
    },
    {
      "by": "est",
      "descendants": 10,
      "id": 49941091,
      "kids": [
        49941349,
        49941484,
        49941575,
        49941347,
        49941614
      ],
      "score": 45,
      "time": 1790997305,
      "title": "Cloudflare OHTTP gateway",
      "type": "story",
      "url": "https://blog.cloudflare.com/announcing-cloudflare-ohttp-gateway/"
    },
    {
      "by": "soheilpro",
      "descendants": 238,
      "id": 49937276,
      "kids": [
        49938157,
        49940447,
        49938171,
        49937954,
        49939336,
        49937466,
        49937494,
        49937634,
        49937513,
        49939851,
        49937644,
        49937621,
        49941553,
        49939722,
        49938237,
        49937526,
        49938965,
        49941615,
        49938236,
        49938062,
        49937905,
        49940056,
        49938653,
        49938054,
        49940376,
        49938771,
        49938636,
        49937906,
        49937493,
        49941339,
        49938709,
        49937522
      ],
      "score": 389,
      "time": 1790968016,
      "title": "Apple Pass Designer",
      "type": "story",
      "url": "https://developer.apple.com/pass-designer/"
    },
    {
      "by": "mariuz",
      "descendants": 53,
      "id": 49932147,
      "kids": [
        49938855,
        49939175,
        49933657,
        49939335,
        49938425,
        49938610,
        49938612,
        49937308,
        49940462,
        49937830,
        49938429,
        49937966,
        49940699,
        49938113,
        49939344,
        49938091
      ],
      "score": 248,
      "time": 1790939237,
      "title": "A 12-year sequence of telescope images of a star and four planets orbiting",
      "type": "story",
      "url": "https://bsky.app/profile/theplanetaryguy.com/post/3mwucf5ert22f"
    },
    {
      "by": "bookofjoe",
      "descendants": 66,
      "id": 49926411,
      "kids": [
        49941840,
        49938439,
        49937041,
        49940875,
        49939019,
        49939257,
        49937218,
        49940812,
        49939801
      ],
      "score": 222,
      "time": 1790884977,
      "title": "Loss of cell identity drives human aging: Two new papers",
      "type": "story",
      "url": "https://erictopol.substack.com/p/loss-of-cell-identity-drives-human"
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
      "title": "A junior asked me how I knew the code was wrong. I couldn't answer him.",
      "description": "We were pairing on a Thursday. Nothing dramatic. A junior on my team, maybe eight months in, sharp,...",
      "url": "https://dev.to/infoinlet1/a-junior-asked-me-how-i-knew-the-code-was-wrong-i-couldnt-answer-him-1m1i",
      "tags": "ai, webdev, career, discuss",
      "reactions": 6,
      "comments": 0,
      "reading_time": 7,
      "author": "infoinlet1"
    },
    {
      "title": "A live job search over 10,000 company career sites, built from public links (HN + the Internet Archive)",
      "description": "Most companies publish jobs through public ATS APIs. The hard part is knowing which companies use which board. Here's how I found 10,000+ live boards from public data, and how one daily snapshot keeps searches fast.",
      "url": "https://dev.to/swiftkit_dev/a-live-job-search-over-10000-company-career-sites-built-from-public-links-hn-the-internet-2oa7",
      "tags": "javascript, node, career, api",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "swiftkit_dev"
    },
    {
      "title": "What 99 merged pull requests taught me about contributing to big open source projects",
      "description": "I recently passed 99 merged pull requests across 41 organizations: Google, Microsoft, Apple, Meta,...",
      "url": "https://dev.to/kwy404/what-99-merged-pull-requests-taught-me-about-contributing-to-big-open-source-projects-439b",
      "tags": "opensource, github, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "kwy404"
    },
    {
      "title": "Prove the bug before you fix it",
      "description": "A model handed a bug will hand you back a plausible fix and a green test suite in about a minute. That tells you almost nothing.",
      "url": "https://dev.to/phpboyscout/prove-the-bug-before-you-fix-it-6of",
      "tags": "ai, career, agents, testing",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "phpboyscout"
    },
    {
      "title": "My best-looking resume template scored 0 of 7 in the text layer",
      "description": "\"Keep it simple so the ATS can parse it\" is the most repeated advice in job search and the...",
      "url": "https://dev.to/monkeyrun/my-best-looking-resume-template-scored-0-of-7-in-the-text-layer-40o4",
      "tags": "career, resume",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "monkeyrun"
    },
    {
      "title": "I said the certificate was a receipt. Then I collected four of them in two months",
      "description": "Four Atlassian ACPs in two months and an ACE at the end. The method: harvest every dump site, then believe nothing until the docs confirm it.",
      "url": "https://dev.to/mihai_leanzero/i-said-the-certificate-was-a-receipt-then-i-collected-four-of-them-in-two-months-131k",
      "tags": "atlassian, certification, jira, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "mihai_leanzero"
    },
    {
      "title": "This Spring Boot Endpoint Has 3 Bugs. Can You Find Them?",
      "description": "Most backend interview practice asks you to write code.  Let's do the opposite.  You're reviewing a...",
      "url": "https://dev.to/anas404/this-spring-boot-endpoint-has-3-bugs-can-you-find-them-2kj2",
      "tags": "java, springboot, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "anas404"
    },
    {
      "title": "Don't forget about AI. But build real skills first. Then leverage AI — in that order.",
      "description": "Dear Coder: Open This If You're Feeling AI FOMO            Timeless fundamentals beat endless...",
      "url": "https://dev.to/canro91/dont-forget-about-ai-but-build-real-skills-first-then-leverage-ai-in-that-order-4ch",
      "tags": "ai, beginners, career, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "canro91"
    },
    {
      "title": "I Put 3 Bugs in This Pull Request. How Many Can You Catch?",
      "description": "Most coding interview practice asks you to write code.  But here's a different test:  Can you spot...",
      "url": "https://dev.to/anas404/i-put-3-bugs-in-this-pull-request-how-many-can-you-catch-32e6",
      "tags": "ai, programming, webdev, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "anas404"
    },
    {
      "title": "I built a free extension that applies to jobs for me. It got me 5 interviews in one week.",
      "description": "I'm a junior developer looking for a job. I was fed up with browsing job ads on several sites,...",
      "url": "https://dev.to/yousseftalibi/i-built-a-free-extension-that-applies-to-jobs-for-me-it-got-me-5-interviews-in-one-week-18fp",
      "tags": "showdev, career, productivity, chrome",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "yousseftalibi"
    }
  ]
}
```

