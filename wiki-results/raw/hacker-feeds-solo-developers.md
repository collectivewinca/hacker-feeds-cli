# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-10-12 07:00:14 UTC

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
      "author": "tester-army",
      "repo": "e2e",
      "avatar": "https://github.com/tester-army.png",
      "repo_link": "https://github.com/tester-army/e2e",
      "desc": "Next generation e2e testing framework for web and mobile apps.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 442,
      "added_stars": 6440,
      "builtBy": [
        {
          "username": "okwasniewski",
          "href": "https://github.com/okwasniewski",
          "avatar": "https://avatars.githubusercontent.com/u/52801365"
        },
        {
          "username": "kacperkapusciak",
          "href": "https://github.com/kacperkapusciak",
          "avatar": "https://avatars.githubusercontent.com/u/39658211"
        },
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "szymonrybczak",
          "href": "https://github.com/szymonrybczak",
          "avatar": "https://avatars.githubusercontent.com/u/63900941"
        },
        {
          "username": "DeryFerd",
          "href": "https://github.com/DeryFerd",
          "avatar": "https://avatars.githubusercontent.com/u/114888155"
        }
      ]
    },
    {
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8752,
      "added_stars": 3803,
      "builtBy": [
        {
          "username": "thedotmack",
          "href": "https://github.com/thedotmack",
          "avatar": "https://avatars.githubusercontent.com/u/683968"
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
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "rodboev",
          "href": "https://github.com/rodboev",
          "avatar": "https://avatars.githubusercontent.com/u/106971"
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
      "forks": 5475,
      "added_stars": 4223,
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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1055,
      "added_stars": 1140,
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
      "author": "mvschwarz",
      "repo": "openrig",
      "avatar": "https://github.com/mvschwarz.png",
      "repo_link": "https://github.com/mvschwarz/openrig",
      "desc": "Build your own network of agents from Claude Code, Codex and Pi: persistent teams with roles, shared context and owned work.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 531,
      "added_stars": 2028,
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
          "username": "Coder8124",
          "href": "https://github.com/Coder8124",
          "avatar": "https://avatars.githubusercontent.com/u/186654237"
        }
      ]
    },
    {
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for small context windows (a 100K context is enough), token savings (5x fewer tokens), and month-long single sessions (billions of tokens).上下文压缩插件，兼顾小窗口(100k上下文足矣)省token(省5倍token)和超长会话(数月级别几十亿token单会话)。billion-context is all you need",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 86,
      "added_stars": 337,
      "builtBy": [
        {
          "username": "ranxianglei",
          "href": "https://github.com/ranxianglei",
          "avatar": "https://avatars.githubusercontent.com/u/12445698"
        },
        {
          "username": "yingzhongshuoqi",
          "href": "https://github.com/yingzhongshuoqi",
          "avatar": "https://avatars.githubusercontent.com/u/187964595"
        },
        {
          "username": "wangbl1010",
          "href": "https://github.com/wangbl1010",
          "avatar": "https://avatars.githubusercontent.com/u/299720939"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 7106,
      "added_stars": 1980,
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
      "forks": 487,
      "added_stars": 1515,
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
      "author": "OpenCut-app",
      "repo": "OpenCut",
      "avatar": "https://github.com/OpenCut-app.png",
      "repo_link": "https://github.com/OpenCut-app/OpenCut",
      "desc": "The open-source CapCut alternative",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9191,
      "added_stars": 1734,
      "builtBy": [
        {
          "username": "mazeincoding",
          "href": "https://github.com/mazeincoding",
          "avatar": "https://avatars.githubusercontent.com/u/167211895"
        },
        {
          "username": "izadoesdev",
          "href": "https://github.com/izadoesdev",
          "avatar": "https://avatars.githubusercontent.com/u/59828082"
        },
        {
          "username": "anwarulislam",
          "href": "https://github.com/anwarulislam",
          "avatar": "https://avatars.githubusercontent.com/u/26295990"
        },
        {
          "username": "khanguyen74",
          "href": "https://github.com/khanguyen74",
          "avatar": "https://avatars.githubusercontent.com/u/50540913"
        },
        {
          "username": "DevloperAmanSingh",
          "href": "https://github.com/DevloperAmanSingh",
          "avatar": "https://avatars.githubusercontent.com/u/80804989"
        }
      ]
    },
    {
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4614,
      "added_stars": 2765,
      "builtBy": [
        {
          "username": "tashfeenahmed",
          "href": "https://github.com/tashfeenahmed",
          "avatar": "https://avatars.githubusercontent.com/u/9307356"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "suantea",
          "href": "https://github.com/suantea",
          "avatar": "https://avatars.githubusercontent.com/u/108558399"
        },
        {
          "username": "OhOkThisIsFine",
          "href": "https://github.com/OhOkThisIsFine",
          "avatar": "https://avatars.githubusercontent.com/u/102485413"
        }
      ]
    },
    {
      "author": "cloudflare",
      "repo": "cloudflare-os",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflare-os",
      "desc": "Agent workspace built on Cloudflare Workers for creating documents, building apps, and running agents with your company’s context and systems.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1360,
      "added_stars": 615,
      "builtBy": [
        {
          "username": "kentonv",
          "href": "https://github.com/kentonv",
          "avatar": "https://avatars.githubusercontent.com/u/4001805"
        },
        {
          "username": "ndisidore",
          "href": "https://github.com/ndisidore",
          "avatar": "https://avatars.githubusercontent.com/u/1103087"
        },
        {
          "username": "jonesphillip",
          "href": "https://github.com/jonesphillip",
          "avatar": "https://avatars.githubusercontent.com/u/7978631"
        },
        {
          "username": "Maximo-Guk",
          "href": "https://github.com/Maximo-Guk",
          "avatar": "https://avatars.githubusercontent.com/u/62088388"
        },
        {
          "username": "bjesus",
          "href": "https://github.com/bjesus",
          "avatar": "https://avatars.githubusercontent.com/u/55081"
        }
      ]
    },
    {
      "author": "DmNote-App",
      "repo": "DmNote",
      "avatar": "https://github.com/DmNote-App.png",
      "repo_link": "https://github.com/DmNote-App/DmNote",
      "desc": "Make it yours. A customizable key viewer for DJMAX RESPECT V and any game.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 134,
      "added_stars": 1062,
      "builtBy": [
        {
          "username": "lee-sihun",
          "href": "https://github.com/lee-sihun",
          "avatar": "https://avatars.githubusercontent.com/u/111095268"
        },
        {
          "username": "eun-yeon",
          "href": "https://github.com/eun-yeon",
          "avatar": "https://avatars.githubusercontent.com/u/173552527"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "AtomicBot-ai",
      "repo": "atomic-agent",
      "avatar": "https://github.com/AtomicBot-ai.png",
      "repo_link": "https://github.com/AtomicBot-ai/atomic-agent",
      "desc": "Atomic Agent is a local-first AI agent. Runs open-weight models on your own machine via llama.cpp.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 268,
      "added_stars": 579,
      "builtBy": [
        {
          "username": "plombeer31",
          "href": "https://github.com/plombeer31",
          "avatar": "https://avatars.githubusercontent.com/u/19537764"
        },
        {
          "username": "Ooooze",
          "href": "https://github.com/Ooooze",
          "avatar": "https://avatars.githubusercontent.com/u/50599367"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "sosidudku1",
          "href": "https://github.com/sosidudku1",
          "avatar": "https://avatars.githubusercontent.com/u/273119990"
        },
        {
          "username": "sosidudku",
          "href": "https://github.com/sosidudku",
          "avatar": "https://avatars.githubusercontent.com/u/197833516"
        }
      ]
    },
    {
      "author": "reconurge",
      "repo": "flowsint",
      "avatar": "https://github.com/reconurge.png",
      "repo_link": "https://github.com/reconurge/flowsint",
      "desc": "A modern platform for visual, flexible, and extensible graph-based investigations. For cybersecurity analysts and investigators.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1189,
      "added_stars": 543,
      "builtBy": [
        {
          "username": "dextmorgn",
          "href": "https://github.com/dextmorgn",
          "avatar": "https://avatars.githubusercontent.com/u/64375473"
        },
        {
          "username": "Ghraven",
          "href": "https://github.com/Ghraven",
          "avatar": "https://avatars.githubusercontent.com/u/115199279"
        },
        {
          "username": "gustavorps",
          "href": "https://github.com/gustavorps",
          "avatar": "https://avatars.githubusercontent.com/u/516827"
        },
        {
          "username": "rachit367",
          "href": "https://github.com/rachit367",
          "avatar": "https://avatars.githubusercontent.com/u/185813792"
        },
        {
          "username": "z3rodaycve",
          "href": "https://github.com/z3rodaycve",
          "avatar": "https://avatars.githubusercontent.com/u/241736084"
        }
      ]
    },
    {
      "author": "hicccc77",
      "repo": "WeFlow",
      "avatar": "https://github.com/hicccc77.png",
      "repo_link": "https://github.com/hicccc77/WeFlow",
      "desc": "WeFlow - 一个本地的微信聊天记录导出和年度报告应用",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 632,
      "added_stars": 269,
      "builtBy": [
        {
          "username": "hicccc77",
          "href": "https://github.com/hicccc77",
          "avatar": "https://avatars.githubusercontent.com/u/98377878"
        },
        {
          "username": "xunchahaha",
          "href": "https://github.com/xunchahaha",
          "avatar": "https://avatars.githubusercontent.com/u/102988462"
        },
        {
          "username": "aits2026",
          "href": "https://github.com/aits2026",
          "avatar": "https://avatars.githubusercontent.com/u/263311168"
        },
        {
          "username": "Jasonzhu1207",
          "href": "https://github.com/Jasonzhu1207",
          "avatar": "https://avatars.githubusercontent.com/u/159670257"
        },
        {
          "username": "H3CoF6",
          "href": "https://github.com/H3CoF6",
          "avatar": "https://avatars.githubusercontent.com/u/190114211"
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
      "forks": 851,
      "added_stars": 303,
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
      "author": "Vincentwei1021",
      "repo": "video-shotcraft",
      "avatar": "https://github.com/Vincentwei1021.png",
      "repo_link": "https://github.com/Vincentwei1021/video-shotcraft",
      "desc": "AI video skill for Claude Code & Codex — cinematic product videos with Remotion: 152 shot recipe cards, 209 motion previews, a production-ready template",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1015,
      "added_stars": 1011,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Vincentwei1021",
          "href": "https://github.com/Vincentwei1021",
          "avatar": "https://avatars.githubusercontent.com/u/18239147"
        },
        {
          "username": "skyzhao1223",
          "href": "https://github.com/skyzhao1223",
          "avatar": "https://avatars.githubusercontent.com/u/15373810"
        },
        {
          "username": "sarff0",
          "href": "https://github.com/sarff0",
          "avatar": "https://avatars.githubusercontent.com/u/255364023"
        },
        {
          "username": "xiaolai",
          "href": "https://github.com/xiaolai",
          "avatar": "https://avatars.githubusercontent.com/u/152970"
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
      "forks": 3364,
      "added_stars": 24146,
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
      "forks": 4444,
      "added_stars": 11116,
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
      "forks": 550,
      "added_stars": 3014,
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
      "author": "Gaurav-Gosain",
      "repo": "tuios",
      "avatar": "https://github.com/Gaurav-Gosain.png",
      "repo_link": "https://github.com/Gaurav-Gosain/tuios",
      "desc": "A terminal window manager that knows what your agents are doing. Tiling panes, workspaces, sessions that survive restarts, and one Inbox for every coding agent.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 242,
      "added_stars": 1595,
      "builtBy": [
        {
          "username": "Gaurav-Gosain",
          "href": "https://github.com/Gaurav-Gosain",
          "avatar": "https://avatars.githubusercontent.com/u/55647468"
        },
        {
          "username": "davidreuss",
          "href": "https://github.com/davidreuss",
          "avatar": "https://avatars.githubusercontent.com/u/6885"
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
      "forks": 1620,
      "added_stars": 2695,
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
      "author": "caddyserver",
      "repo": "caddy",
      "avatar": "https://github.com/caddyserver.png",
      "repo_link": "https://github.com/caddyserver/caddy",
      "desc": "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5121,
      "added_stars": 2306,
      "builtBy": [
        {
          "username": "mholt",
          "href": "https://github.com/mholt",
          "avatar": "https://avatars.githubusercontent.com/u/1128849"
        },
        {
          "username": "francislavoie",
          "href": "https://github.com/francislavoie",
          "avatar": "https://avatars.githubusercontent.com/u/2111701"
        },
        {
          "username": "mohammed90",
          "href": "https://github.com/mohammed90",
          "avatar": "https://avatars.githubusercontent.com/u/2636183"
        },
        {
          "username": "WeidiDeng",
          "href": "https://github.com/WeidiDeng",
          "avatar": "https://avatars.githubusercontent.com/u/28780594"
        },
        {
          "username": "dunglas",
          "href": "https://github.com/dunglas",
          "avatar": "https://avatars.githubusercontent.com/u/57224"
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
      "forks": 740,
      "added_stars": 640,
      "builtBy": [
        {
          "username": "dnlrsls",
          "href": "https://github.com/dnlrsls",
          "avatar": "https://avatars.githubusercontent.com/u/111561081"
        },
        {
          "username": "Alan-TheGentleman",
          "href": "https://github.com/Alan-TheGentleman",
          "avatar": "https://avatars.githubusercontent.com/u/6935240"
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
      "author": "Gentleman-Programming",
      "repo": "gentle-ai",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/gentle-ai",
      "desc": "Gentle-AI configures the AI coding agents you already use: Claude Code, Cursor, OpenCode, Codex, Pi, and more. Choose persistent memory, Organic-Driven Development, curated skills, MCP servers, personas, and optional bounded review. Open source, no agent lock-in.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 833,
      "added_stars": 1114,
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
      "author": "usememos",
      "repo": "memos",
      "avatar": "https://github.com/usememos.png",
      "repo_link": "https://github.com/usememos/memos",
      "desc": "A personal timeline for quick notes. Write short memos, find them later by search, tag, or date. Open source and self-hosted.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4847,
      "added_stars": 933,
      "builtBy": [
        {
          "username": "boojack",
          "href": "https://github.com/boojack",
          "avatar": "https://avatars.githubusercontent.com/u/24653555"
        },
        {
          "username": "johnnyjoygh",
          "href": "https://github.com/johnnyjoygh",
          "avatar": "https://avatars.githubusercontent.com/u/172508201"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "athurg",
          "href": "https://github.com/athurg",
          "avatar": "https://avatars.githubusercontent.com/u/126313"
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
      "forks": 2633,
      "added_stars": 715,
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
      "author": "urfave",
      "repo": "cli",
      "avatar": "https://github.com/urfave.png",
      "repo_link": "https://github.com/urfave/cli",
      "desc": "A declarative, simple, fast, and fun package for building command line tools in Go",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1838,
      "added_stars": 83,
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
      "forks": 267,
      "added_stars": 2301,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3299,
      "added_stars": 2655,
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
      "author": "grpc",
      "repo": "grpc-go",
      "avatar": "https://github.com/grpc.png",
      "repo_link": "https://github.com/grpc/grpc-go",
      "desc": "The Go language implementation of gRPC. HTTP/2 based RPC",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4792,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1008,
      "added_stars": 618,
      "builtBy": [
        {
          "username": "gosom",
          "href": "https://github.com/gosom",
          "avatar": "https://avatars.githubusercontent.com/u/454718"
        },
        {
          "username": "dredozubov",
          "href": "https://github.com/dredozubov",
          "avatar": "https://avatars.githubusercontent.com/u/131368"
        },
        {
          "username": "sbOogway",
          "href": "https://github.com/sbOogway",
          "avatar": "https://avatars.githubusercontent.com/u/92176188"
        },
        {
          "username": "fidalgo",
          "href": "https://github.com/fidalgo",
          "avatar": "https://avatars.githubusercontent.com/u/22743"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 466,
      "added_stars": 455,
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
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 755,
      "added_stars": 550,
      "builtBy": [
        {
          "username": "knqyf263",
          "href": "https://github.com/knqyf263",
          "avatar": "https://avatars.githubusercontent.com/u/2253692"
        },
        {
          "username": "DmitriyLewen",
          "href": "https://github.com/DmitriyLewen",
          "avatar": "https://avatars.githubusercontent.com/u/91113035"
        },
        {
          "username": "nikpivkin",
          "href": "https://github.com/nikpivkin",
          "avatar": "https://avatars.githubusercontent.com/u/100182843"
        },
        {
          "username": "simar7",
          "href": "https://github.com/simar7",
          "avatar": "https://avatars.githubusercontent.com/u/1254783"
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
      "forks": 22064,
      "added_stars": 1416,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 512,
      "added_stars": 1115,
      "builtBy": [
        {
          "username": "dgageot",
          "href": "https://github.com/dgageot",
          "avatar": "https://avatars.githubusercontent.com/u/153495"
        },
        {
          "username": "rumpl",
          "href": "https://github.com/rumpl",
          "avatar": "https://avatars.githubusercontent.com/u/99933"
        },
        {
          "username": "aheritier",
          "href": "https://github.com/aheritier",
          "avatar": "https://avatars.githubusercontent.com/u/174600"
        },
        {
          "username": "Sayt-0",
          "href": "https://github.com/Sayt-0",
          "avatar": "https://avatars.githubusercontent.com/u/138035894"
        },
        {
          "username": "krissetto",
          "href": "https://github.com/krissetto",
          "avatar": "https://avatars.githubusercontent.com/u/47751006"
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
      "forks": 1366,
      "added_stars": 309,
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
      "author": "openai",
      "repo": "tunnel-client",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/tunnel-client",
      "desc": "Customer-run client for Secure MCP Tunnel: connect private or localhost MCP servers to ChatGPT, Codex, the Responses API, and AgentKit without exposing them to the public internet.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 111,
      "added_stars": 183,
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
      "author": "seaweedfs",
      "repo": "seaweedfs",
      "avatar": "https://github.com/seaweedfs.png",
      "repo_link": "https://github.com/seaweedfs/seaweedfs",
      "desc": "SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3055,
      "added_stars": 913,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "chrisluuber",
          "href": "https://github.com/chrisluuber",
          "avatar": "https://avatars.githubusercontent.com/u/37195999"
        }
      ]
    },
    {
      "author": "Armur-Ai",
      "repo": "Pentest-Swarm-AI",
      "avatar": "https://github.com/Armur-Ai.png",
      "repo_link": "https://github.com/Armur-Ai/Pentest-Swarm-AI",
      "desc": "Autonomous penetration testing using a swarm of AI agents. Orchestrates recon, classification, exploitation, and reporting specialists with ReAct reasoning — supports bug bounty, continuous monitoring, and CTF modes. Built with Go and 7+ native security tools.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 524,
      "added_stars": 339,
      "builtBy": [
        {
          "username": "AkhilSharma90",
          "href": "https://github.com/AkhilSharma90",
          "avatar": "https://avatars.githubusercontent.com/u/26513717"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Kuro0911",
          "href": "https://github.com/Kuro0911",
          "avatar": "https://avatars.githubusercontent.com/u/71404936"
        },
        {
          "username": "siwacarn",
          "href": "https://github.com/siwacarn",
          "avatar": "https://avatars.githubusercontent.com/u/52309794"
        },
        {
          "username": "akhilairi",
          "href": "https://github.com/akhilairi",
          "avatar": "https://avatars.githubusercontent.com/u/165267987"
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
      "forks": 6638,
      "added_stars": 36012,
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
          "username": "velixio",
          "href": "https://github.com/velixio",
          "avatar": "https://avatars.githubusercontent.com/u/270455167"
        },
        {
          "username": "jaketame",
          "href": "https://github.com/jaketame",
          "avatar": "https://avatars.githubusercontent.com/u/1787973"
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
      "forks": 5587,
      "added_stars": 4698,
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
      "forks": 6007,
      "added_stars": 25187,
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3312,
      "added_stars": 5173,
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
      "author": "TencentCloud",
      "repo": "Octop",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/Octop",
      "desc": "A smarter, self-hosted AI assistant — multi-user, multi-agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1072,
      "added_stars": 7118,
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
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8424,
      "added_stars": 16862,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn AI Engineering! Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 11864,
      "added_stars": 13378,
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
      "author": "davila7",
      "repo": "claude-code-templates",
      "avatar": "https://github.com/davila7.png",
      "repo_link": "https://github.com/davila7/claude-code-templates",
      "desc": "CLI tool for configuring and monitoring Claude Code",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3747,
      "added_stars": 2115,
      "builtBy": [
        {
          "username": "davila7",
          "href": "https://github.com/davila7",
          "avatar": "https://avatars.githubusercontent.com/u/6216945"
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
      "forks": 3389,
      "added_stars": 3574,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8902,
      "added_stars": 6863,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1753,
      "added_stars": 3054,
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
          "username": "yashrajp22",
          "href": "https://github.com/yashrajp22",
          "avatar": "https://avatars.githubusercontent.com/u/282666402"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 405,
      "added_stars": 3649,
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
      "author": "pytorch",
      "repo": "pytorch",
      "avatar": "https://github.com/pytorch.png",
      "repo_link": "https://github.com/pytorch/pytorch",
      "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 32185,
      "added_stars": 1707,
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
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "The fastest, litest AI Gateway. Rust core with Python SDK. Call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging [Bedrock, Azure, OpenAI, Anthropic, OpenAI, VertexAI, vLLM, Nvidia NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12238,
      "added_stars": 2632,
      "builtBy": [
        {
          "username": "ishaan-jaff",
          "href": "https://github.com/ishaan-jaff",
          "avatar": "https://avatars.githubusercontent.com/u/29436595"
        },
        {
          "username": "mateo-berri",
          "href": "https://github.com/mateo-berri",
          "avatar": "https://avatars.githubusercontent.com/u/277851410"
        },
        {
          "username": "yuneng-berri",
          "href": "https://github.com/yuneng-berri",
          "avatar": "https://avatars.githubusercontent.com/u/264297931"
        },
        {
          "username": "Sameerlite",
          "href": "https://github.com/Sameerlite",
          "avatar": "https://avatars.githubusercontent.com/u/231518212"
        }
      ]
    },
    {
      "author": "danyuchn",
      "repo": "asd-ste100-skill",
      "avatar": "https://github.com/danyuchn.png",
      "repo_link": "https://github.com/danyuchn/asd-ste100-skill",
      "desc": "ASD-STE100 Simplified Technical English rules, repurposed as a Claude Code skill for rewriting ambiguous agent-facing English.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 266,
      "added_stars": 2436,
      "builtBy": [
        {
          "username": "danyuchn",
          "href": "https://github.com/danyuchn",
          "avatar": "https://avatars.githubusercontent.com/u/130748619"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "KevinGriffin-new",
          "href": "https://github.com/KevinGriffin-new",
          "avatar": "https://avatars.githubusercontent.com/u/117586586"
        },
        {
          "username": "couimet",
          "href": "https://github.com/couimet",
          "avatar": "https://avatars.githubusercontent.com/u/3306418"
        },
        {
          "username": "meehownow",
          "href": "https://github.com/meehownow",
          "avatar": "https://avatars.githubusercontent.com/u/131767147"
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
      "forks": 5051,
      "added_stars": 2544,
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
      "author": "NVIDIA",
      "repo": "Model-Optimizer",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/Model-Optimizer",
      "desc": "A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 738,
      "added_stars": 1507,
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
      "author": "home-assistant",
      "repo": "core",
      "avatar": "https://github.com/home-assistant.png",
      "repo_link": "https://github.com/home-assistant/core",
      "desc": "🏡 Open source home automation that puts local control and privacy first.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 38880,
      "added_stars": 1164,
      "builtBy": [
        {
          "username": "balloob",
          "href": "https://github.com/balloob",
          "avatar": "https://avatars.githubusercontent.com/u/1444314"
        },
        {
          "username": "bdraco",
          "href": "https://github.com/bdraco",
          "avatar": "https://avatars.githubusercontent.com/u/663432"
        },
        {
          "username": "epenet",
          "href": "https://github.com/epenet",
          "avatar": "https://avatars.githubusercontent.com/u/6771947"
        },
        {
          "username": "frenck",
          "href": "https://github.com/frenck",
          "avatar": "https://avatars.githubusercontent.com/u/195327"
        },
        {
          "username": "emontnemery",
          "href": "https://github.com/emontnemery",
          "avatar": "https://avatars.githubusercontent.com/u/14281572"
        }
      ]
    },
    {
      "author": "tile-ai",
      "repo": "tilelang",
      "avatar": "https://github.com/tile-ai.png",
      "repo_link": "https://github.com/tile-ai/tilelang",
      "desc": "Domain-specific language designed to streamline the development of high-performance GPU/CPU/Accelerators kernels",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 875,
      "added_stars": 1203,
      "builtBy": [
        {
          "username": "LeiWang1999",
          "href": "https://github.com/LeiWang1999",
          "avatar": "https://avatars.githubusercontent.com/u/34334180"
        },
        {
          "username": "chengyupku",
          "href": "https://github.com/chengyupku",
          "avatar": "https://avatars.githubusercontent.com/u/54519279"
        },
        {
          "username": "SiriusNEO",
          "href": "https://github.com/SiriusNEO",
          "avatar": "https://avatars.githubusercontent.com/u/41781658"
        },
        {
          "username": "Rachmanino",
          "href": "https://github.com/Rachmanino",
          "avatar": "https://avatars.githubusercontent.com/u/109033598"
        },
        {
          "username": "xwhzz",
          "href": "https://github.com/xwhzz",
          "avatar": "https://avatars.githubusercontent.com/u/132904306"
        }
      ]
    },
    {
      "author": "multimodal-art-projection",
      "repo": "YuE",
      "avatar": "https://github.com/multimodal-art-projection.png",
      "repo_link": "https://github.com/multimodal-art-projection/YuE",
      "desc": "YuE2: frontier music generation with symbolic planning, zero-shot covers, and agentic music editing.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1326,
      "added_stars": 4856,
      "builtBy": [
        {
          "username": "a43992899",
          "href": "https://github.com/a43992899",
          "avatar": "https://avatars.githubusercontent.com/u/30723625"
        },
        {
          "username": "hf-lin",
          "href": "https://github.com/hf-lin",
          "avatar": "https://avatars.githubusercontent.com/u/153443201"
        },
        {
          "username": "instr3",
          "href": "https://github.com/instr3",
          "avatar": "https://avatars.githubusercontent.com/u/13694510"
        },
        {
          "username": "Yiming-Liang",
          "href": "https://github.com/Yiming-Liang",
          "avatar": "https://avatars.githubusercontent.com/u/154485721"
        },
        {
          "username": "fengshi-cherish",
          "href": "https://github.com/fengshi-cherish",
          "avatar": "https://avatars.githubusercontent.com/u/22573687"
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
      "forks": 967,
      "added_stars": 4315,
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
      "author": "HunxByts",
      "repo": "GhostTrack",
      "avatar": "https://github.com/HunxByts.png",
      "repo_link": "https://github.com/HunxByts/GhostTrack",
      "desc": "Useful tool to track location or mobile number",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2494,
      "added_stars": 3231,
      "builtBy": [
        {
          "username": "HunxByts",
          "href": "https://github.com/HunxByts",
          "avatar": "https://avatars.githubusercontent.com/u/130666567"
        },
        {
          "username": "bakaemon",
          "href": "https://github.com/bakaemon",
          "avatar": "https://avatars.githubusercontent.com/u/69375806"
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
      "title": "theAuth: open-source TypeScript auth for AI agents, with an MCP OAuth 2.1 server",
      "url": "https://github.com/glincker/theauth",
      "upvotes": "1",
      "comments": "2",
      "created": "2026-10-10T18:34:37.000Z"
    },
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
      "upvotes": "2",
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
      "title": "Your Guide to AI Engineer New York 2026",
      "description": "AI Engineer New York is here! This conference built for Wall Street. Banking, hedge funds, fintech,...",
      "url": "https://dev.to/dailycontext/your-guide-to-ai-engineer-new-york-2026-2aol",
      "tags": "aie, ai, events, agents",
      "reactions": 9,
      "comments": 3,
      "reading_time": 2,
      "author": "rachael_berkey"
    },
    {
      "title": "Where to Spend Your Week at AI Engineer New York",
      "description": "AI Engineer New York has 137 sessions on the schedule and up to five running at any given moment....",
      "url": "https://dev.to/dailycontext/where-to-spend-your-week-at-ai-engineer-new-york-3lg",
      "tags": "aie, agents, machinelearning, ai",
      "reactions": 7,
      "comments": 1,
      "reading_time": 3,
      "author": "rachael_berkey"
    },
    {
      "title": "What LLMs 'Know' That You Don't Know They Know: Stop Inventing Prompt DSLs and Ride 50 Years of Unix Pre-Training Gravity",
      "description": "Why did a 1976 Makefile (Part 3.6) and a 1983 Unix init.d directory (Part 3.7) outperform 2,000 lines of English prompt rules? Because prompt engineering is static symbol linkage against 50 years of pre-trained computer science canon.",
      "url": "https://dev.to/gde/what-llms-know-that-you-dont-know-they-know-stop-inventing-prompt-dsls-and-ride-50-years-of-2bl6",
      "tags": "ai, programming, unix, architecture",
      "reactions": 15,
      "comments": 22,
      "reading_time": 22,
      "author": "randalschwartz"
    },
    {
      "title": "Does your agent have ID?",
      "description": "Last month, an AI agent in Denmark booked a coffee tasting and paid for it. Danske Bank and...",
      "url": "https://dev.to/dailycontext/does-your-agent-have-id-58ok",
      "tags": "aie, ai, agents, security",
      "reactions": 5,
      "comments": 0,
      "reading_time": 1,
      "author": "rachael_berkey"
    },
    {
      "title": "Banks Are Renting Their Agents. These Two Built One.",
      "description": "Most banks aren't building their own agents. They're renting them.  Bank Director's 2026 Technology...",
      "url": "https://dev.to/dailycontext/banks-are-renting-their-agents-these-two-built-one-j96",
      "tags": "aie, ai, agents, fintech",
      "reactions": 7,
      "comments": 1,
      "reading_time": 1,
      "author": "rachael_berkey"
    },
    {
      "title": "Why you still need a Website Portfolio, even though everyone can Vibe Code it.",
      "description": "If you have been following me for a long time, you already know that I have been holding off on my...",
      "url": "https://dev.to/francistrdev/why-you-still-need-a-website-portfolio-even-though-everyone-can-vibe-code-it-e63",
      "tags": "discuss, community, showdev, a11y",
      "reactions": 252,
      "comments": 237,
      "reading_time": 7,
      "author": "francistrdev"
    },
    {
      "title": "Dev Opportunity Radar #20: $2M AI Reasoning Challenge, PayPal AI Hackathon, and Coinbase Analytics Challenge",
      "description": "TL;DR  Welcome back to Dev Opportunity Radar.  This is a weekly series where I share opportunities,...",
      "url": "https://dev.to/devengers/dev-opportunity-radar-20-2m-ai-reasoning-challenge-paypal-ai-hackathon-and-coinbase-analytics-1fec",
      "tags": "discuss, community, resources, opportunities",
      "reactions": 96,
      "comments": 21,
      "reading_time": 10,
      "author": "hemapriya_kanagala"
    },
    {
      "title": "The Epistemology of Quality",
      "description": "How do we know code is correct, and what role does human code review play in knowing it?",
      "url": "https://dev.to/cheetah100/the-epistemology-of-quality-4cmi",
      "tags": "ai, codereview, codequality, testing",
      "reactions": 10,
      "comments": 1,
      "reading_time": 10,
      "author": "cheetah100"
    },
    {
      "title": "I got Jev to zero mistakes. I'm still using Flash-Lite.",
      "description": "Jev is a brilliant decision model. Gemini Flash-Lite is the model nobody talks about, and it’s fast,...",
      "url": "https://dev.to/theycallmeswift/i-got-jev-to-zero-mistakes-im-still-using-flash-lite-2mo7",
      "tags": "ai, gemini, testing, jev",
      "reactions": 40,
      "comments": 17,
      "reading_time": 11,
      "author": "theycallmeswift"
    },
    {
      "title": "Making cross-platform local AI easier with llamadart",
      "description": "My writing assistant could talk to Gemini. The missing piece was using it without a connection.  That...",
      "url": "https://dev.to/gde/making-cross-platform-local-ai-easier-with-llamadart-2l4k",
      "tags": "dart, flutter, ai, tutorial",
      "reactions": 8,
      "comments": 5,
      "reading_time": 6,
      "author": "leehack"
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
      "title": "3-2-1 Backup Strategy with restic and Backblaze B2",
      "url": "https://chuck.is/paranoid/",
      "score": 1,
      "comments": 0,
      "tags": [
        "devops",
        "linux"
      ],
      "id": "9zcxev"
    },
    {
      "title": "When LLM Decompilers Recompile More and Preserve Less",
      "url": "https://arxiv.org/abs/2609.05370",
      "score": 3,
      "comments": 0,
      "tags": [
        "reversing",
        "vibecoding"
      ],
      "id": "uzfa4k"
    },
    {
      "title": "Refurb weekend II: Alpha Micro Eagle 300 and friends",
      "url": "https://oldvcr.blogspot.com/2026/10/refurb-weekend-ii-alpha-micro-eagle-300.html",
      "score": 2,
      "comments": 0,
      "tags": [
        "retrocomputing"
      ],
      "id": "cthze7"
    },
    {
      "title": "CSS for underlines",
      "url": "https://www.rubenerd.au/css-for-underlines/",
      "score": 4,
      "comments": 0,
      "tags": [
        "css"
      ],
      "id": "ezucf0"
    },
    {
      "title": "'AI' is Not a Tool",
      "url": "https://www.linkedin.com/pulse/ai-tool-rich-hickey-kjl8e",
      "score": 16,
      "comments": 4,
      "tags": [
        "vibecoding"
      ],
      "id": "ikk8ie"
    },
    {
      "title": "Highlights from \"I spent 6 years developing a game in Rust and it just shipped, AMA\" (2024)",
      "url": "https://gamesbymason.com/blog/2024/6-years-in-rust-ama/#what-made-you-decide-to-use-rust",
      "score": 11,
      "comments": 1,
      "tags": [
        "games",
        "rust"
      ],
      "id": "dodzdb"
    },
    {
      "title": "Tello's GameSir T1d controller as a Linux Xbox controller",
      "url": "https://blog.jacq.cc/guides/gamesir-t1d-linux-gamepad/",
      "score": 2,
      "comments": 0,
      "tags": [
        "linux",
        "python"
      ],
      "id": "dxftjg"
    },
    {
      "title": "Reviewing code in the agent era",
      "url": "https://linear.app/now/reviewing-code-in-the-agent-era",
      "score": -1,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "foynmj"
    },
    {
      "title": "D-Bus Hell",
      "url": "https://dbushell.com/2026/10/11/d-bus-hell/",
      "score": 55,
      "comments": 6,
      "tags": [
        "person",
        "satire"
      ],
      "id": "qgybwb"
    },
    {
      "title": "The next-gen borrow checker, a drop-in replacement for Rust borrow checking",
      "url": "https://gist.github.com/FlameyosSnowy/a49a35ba006238be55d8c3e410c31061",
      "score": 8,
      "comments": 0,
      "tags": [
        "compilers",
        "plt",
        "rust"
      ],
      "id": "sqftld"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "lukaslalinsky",
      "descendants": 24,
      "id": 50051573,
      "kids": [
        50052361,
        50052323,
        50051874,
        50051808,
        50051667,
        50051865
      ],
      "score": 52,
      "time": 1791781354,
      "title": "Type-safe HTML templating in Zig",
      "type": "story",
      "url": "https://lalinsky.com/2026/10/11/type-safe-html-templating-in-zig.html"
    },
    {
      "by": "amosbatto",
      "descendants": 54,
      "id": 50051530,
      "kids": [
        50052240,
        50052002,
        50052162,
        50051981,
        50051948,
        50051991,
        50051879,
        50052328,
        50052272,
        50052196,
        50051723,
        50051896,
        50051974,
        50052216,
        50051990,
        50052270,
        50051829,
        50052283
      ],
      "score": 75,
      "time": 1791780840,
      "title": "Will Linux phones become a viable alternative to the Android/iOS duopoly?",
      "type": "story",
      "url": "https://amosbbatto.wordpress.com/2026/10/05/linux-phones-alternative/"
    },
    {
      "by": "royfish",
      "descendants": 131,
      "id": 50048642,
      "kids": [
        50051253,
        50050925,
        50050312,
        50049686,
        50051536,
        50051798,
        50049554,
        50049135,
        50050187,
        50051783,
        50050715,
        50051638,
        50049248,
        50049148,
        50050224,
        50051489,
        50049405,
        50049154,
        50051203,
        50051194,
        50050018,
        50051658,
        50050892,
        50051171,
        50049573,
        50051107,
        50051345,
        50049810,
        50050164,
        50050227
      ],
      "score": 280,
      "time": 1791758019,
      "title": "Fingerprints are the new cookies",
      "type": "story",
      "url": "https://royfish.dev/fingerprints-are-the-new-cookies"
    },
    {
      "by": "jttnr",
      "descendants": 189,
      "id": 50045984,
      "kids": [
        50046412,
        50046675,
        50047141,
        50046607,
        50046541,
        50046698,
        50052223,
        50048077,
        50046426,
        50046557,
        50046424,
        50051570,
        50046335,
        50051144,
        50046411,
        50051094,
        50047671,
        50050133,
        50046713,
        50046623,
        50048378,
        50048626,
        50046443,
        50049142,
        50050605,
        50046513,
        50048142,
        50046569,
        50046717,
        50046676,
        50046835,
        50046697,
        50048334,
        50049196,
        50049967,
        50047997,
        50046406,
        50046417,
        50050891,
        50049322,
        50047471,
        50046756,
        50046383,
        50046446,
        50047002,
        50048145,
        50047567,
        50046400,
        50047407,
        50047653,
        50046481,
        50047468,
        50047349
      ],
      "score": 456,
      "time": 1791741887,
      "title": "Total Annihilation, rebuilt for modern computers",
      "type": "story",
      "url": "https://nanolathe.gg"
    },
    {
      "by": "cainxinth",
      "descendants": 52,
      "id": 50049411,
      "kids": [
        50051458,
        50050087,
        50049669,
        50049629,
        50050061,
        50049658,
        50050430,
        50049631,
        50051102,
        50050229,
        50051045,
        50050525,
        50050908,
        50050065,
        50049636,
        50049856,
        50050721,
        50050105,
        50051685,
        50051091
      ],
      "score": 108,
      "time": 1791762634,
      "title": "Whatever became of holography? (2011)",
      "type": "story",
      "url": "https://www.americanscientist.org/article/whatever-became-of-holography"
    },
    {
      "by": "subset",
      "descendants": 2,
      "id": 50034206,
      "kids": [
        50052338,
        50034207
      ],
      "score": 79,
      "time": 1791647992,
      "title": "Calculus with Julia",
      "type": "story",
      "url": "https://jverzani.github.io/CalculusWithJuliaNotes.jl/"
    },
    {
      "by": "edent",
      "descendants": 42,
      "id": 50047091,
      "kids": [
        50048866,
        50047901,
        50048893,
        50050669,
        50048748,
        50047589,
        50048964,
        50047752,
        50050656,
        50047685,
        50048377,
        50047779,
        50048773,
        50047942,
        50048791,
        50050722,
        50049069,
        50049764,
        50051759
      ],
      "score": 232,
      "time": 1791748000,
      "title": "Cartographers of North Korea (2019)",
      "type": "story",
      "url": "https://cartographers-nk.wonyoung.so/"
    },
    {
      "by": "signa11",
      "descendants": 21,
      "id": 50034001,
      "kids": [
        50051893,
        50051772,
        50051477,
        50051518,
        50051357,
        50051606,
        50051498
      ],
      "score": 29,
      "time": 1791646770,
      "title": "No portable way to detect string-to-float conversion errors in standard C",
      "type": "story",
      "url": "https://sebsite.pw/w/20261009-strtod.html"
    },
    {
      "by": "acley",
      "descendants": 18,
      "id": 50049872,
      "kids": [
        50051494,
        50051552,
        50051221,
        50051151
      ],
      "score": 83,
      "time": 1791766107,
      "title": "Doory – Open-Source Canva",
      "type": "story",
      "url": "https://github.com/shaongitbd/doory"
    },
    {
      "by": "zdw",
      "descendants": 14,
      "id": 50038088,
      "kids": [
        50052188,
        50038158
      ],
      "score": 15,
      "time": 1791673975,
      "title": "Every US Electrical Outlet Explained [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=n_1wzYQwnts"
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
      "title": "What Do You Drink While You Work?",
      "description": "I wrote a fiction series with six characters. Each one drinks a different coffee.  I didn't plan it...",
      "url": "https://dev.to/xulingfeng/what-do-you-drink-while-you-work-17bm",
      "tags": "discuss, career, programming, webdev",
      "reactions": 92,
      "comments": 171,
      "reading_time": 2,
      "author": "xulingfeng"
    },
    {
      "title": "Which tests would you cut when the bill arrives?",
      "description": "The runner fleet cost $270 I didn't have, so it went off. The tests stayed on, and the savings came from everything I'd been paying for twice.",
      "url": "https://dev.to/phpboyscout/which-tests-would-you-cut-when-the-bill-arrives-16h8",
      "tags": "career, testing, cicd, selfhosting",
      "reactions": 0,
      "comments": 1,
      "reading_time": 5,
      "author": "phpboyscout"
    },
    {
      "title": "My learning path to software engineer",
      "description": "Since the COVID-19 pandemic, I've become interested in software engineering. Even though I'm an...",
      "url": "https://dev.to/gusanchedev/my-learning-path-to-software-engineer-2lb",
      "tags": "career, learning, softwaredevelopment, softwareengineering",
      "reactions": 0,
      "comments": 1,
      "reading_time": 5,
      "author": "gusanchedev"
    },
    {
      "title": "Do you want to become a Coder, a Developer, or a Software Engineer?",
      "description": "Here’s a question.  Imagine you wake up tomorrow, and coding is completely solved.  You tell an AI...",
      "url": "https://dev.to/ngawangcodes365/do-you-want-to-become-a-coder-a-developer-or-a-software-engineer-1dfj",
      "tags": "career, coding, learning, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "ngawangcodes365"
    },
    {
      "title": "Your Mentee's Review Came Back Lower Than They Expected",
      "description": "The message arrives on the afternoon the reviews are released. Can we talk this week? It does not say...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/your-mentees-review-came-back-lower-than-they-expected-4fk9",
      "tags": "asaelshinder, mentorship, career, feedback",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "Your Manager Is Away for Three Months and You Are Covering",
      "description": "Your lead is going on parental leave, or a long medical break, or a secondment to another part of the...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/your-manager-is-away-for-three-months-and-you-are-covering-3mbe",
      "tags": "asaelshinder, career, careerdevelopment, leadership",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "Your Team Needs You Certified by the End of the Quarter",
      "description": "The company is becoming a partner of a cloud provider, or a large customer wants named certified...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/your-team-needs-you-certified-by-the-end-of-the-quarter-ck",
      "tags": "asaelshinder, learning, career, cloud",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "Scam Emails Targeting Developers With Public Presence — A Real Case Study",
      "description": "I received this email last Sunday: From: Jessica Davis Subject: Writing collaboration opportunity  Hi...",
      "url": "https://dev.to/hoang_nguyen_ad2c9fbdd6db/scam-emails-targeting-developers-with-public-presence-a-real-case-study-3n0l",
      "tags": "security, career, discuss, programming",
      "reactions": 0,
      "comments": 1,
      "reading_time": 4,
      "author": "hoang_nguyen_ad2c9fbdd6db"
    },
    {
      "title": "High Tech Life Any More?",
      "description": "Current Milestone of Career   For the year of 2026, I really wonder how much demand of...",
      "url": "https://dev.to/bgsan6009/high-tech-life-any-more-3aaf",
      "tags": "webdev, hightech, career, software",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "bgsan6009"
    },
    {
      "title": "Why Learn Rust in 2026? A Developer's Guide",
      "description": "Let's be honest.  There are already too many programming languages.  If you want to build websites,...",
      "url": "https://dev.to/moibra/why-learn-rust-in-2026-a-developers-guide-3pko",
      "tags": "rust, programming, productivity, career",
      "reactions": 6,
      "comments": 3,
      "reading_time": 7,
      "author": "moibra"
    }
  ]
}
```

