# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-10-11 06:40:38 UTC

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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8711,
      "added_stars": 4035,
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
      "forks": 5401,
      "added_stars": 4081,
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
      "author": "mvschwarz",
      "repo": "openrig",
      "avatar": "https://github.com/mvschwarz.png",
      "repo_link": "https://github.com/mvschwarz/openrig",
      "desc": "Build your own network of agents from Claude Code, Codex and Pi: persistent teams with roles, shared context and owned work.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 501,
      "added_stars": 2068,
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
          "username": "DeryFerd",
          "href": "https://github.com/DeryFerd",
          "avatar": "https://avatars.githubusercontent.com/u/114888155"
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
      "forks": 1027,
      "added_stars": 1110,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7044,
      "added_stars": 2367,
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
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for small context windows (a 100K context is enough), token savings (5x fewer tokens), and month-long single sessions (billions of tokens).上下文压缩插件，兼顾小窗口(100k上下文足矣)省token(省5倍token)和超长会话(数月级别几十亿token单会话)。billion-context is all you need",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 75,
      "added_stars": 259,
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
      "author": "tester-army",
      "repo": "e2e",
      "avatar": "https://github.com/tester-army.png",
      "repo_link": "https://github.com/tester-army/e2e",
      "desc": "Next generation e2e testing framework for web and mobile apps.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 425,
      "added_stars": 6564,
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
      "author": "pablostanley",
      "repo": "yoinks",
      "avatar": "https://github.com/pablostanley.png",
      "repo_link": "https://github.com/pablostanley/yoinks",
      "desc": "yoink any video from your terminal. no shady ads.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 480,
      "added_stars": 1940,
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
      "forks": 9181,
      "added_stars": 2074,
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
      "author": "cloudflare",
      "repo": "cloudflare-os",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflare-os",
      "desc": "Agent workspace built on Cloudflare Workers for creating documents, building apps, and running agents with your company’s context and systems.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1353,
      "added_stars": 862,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4567,
      "added_stars": 2591,
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
      "author": "DmNote-App",
      "repo": "DmNote",
      "avatar": "https://github.com/DmNote-App.png",
      "repo_link": "https://github.com/DmNote-App/DmNote",
      "desc": "Make it yours. A customizable key viewer for DJMAX RESPECT V and any game.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 107,
      "added_stars": 1071,
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
      "forks": 265,
      "added_stars": 606,
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
      "forks": 1182,
      "added_stars": 520,
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
      "author": "Bennettxai",
      "repo": "FounderOS",
      "avatar": "https://github.com/Bennettxai.png",
      "repo_link": "https://github.com/Bennettxai/FounderOS",
      "desc": "An open-source, single-operator business command center: run a one-person operated company as AI-assisted departments (comms, funnel, social, finances, agents, and a knowledge graph) from one live dashboard.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 294,
      "added_stars": 77,
      "builtBy": [
        {
          "username": "Bennettxai",
          "href": "https://github.com/Bennettxai",
          "avatar": "https://avatars.githubusercontent.com/u/203468938"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "brodyautomates",
          "href": "https://github.com/brodyautomates",
          "avatar": "https://avatars.githubusercontent.com/u/266376606"
        },
        {
          "username": "Alphanace",
          "href": "https://github.com/Alphanace",
          "avatar": "https://avatars.githubusercontent.com/u/90073564"
        },
        {
          "username": "mind-g0",
          "href": "https://github.com/mind-g0",
          "avatar": "https://avatars.githubusercontent.com/u/144286463"
        }
      ]
    },
    {
      "author": "nanobrowser",
      "repo": "nanobrowser",
      "avatar": "https://github.com/nanobrowser.png",
      "repo_link": "https://github.com/nanobrowser/nanobrowser",
      "desc": "Open-Source Chrome extension for AI-powered web automation. Run multi-agent workflows using your own LLM API key. Alternative to OpenAI Operator.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1483,
      "added_stars": 173,
      "builtBy": [
        {
          "username": "alexchenzl",
          "href": "https://github.com/alexchenzl",
          "avatar": "https://avatars.githubusercontent.com/u/2885415"
        },
        {
          "username": "bsormagec",
          "href": "https://github.com/bsormagec",
          "avatar": "https://avatars.githubusercontent.com/u/965219"
        },
        {
          "username": "samuel871211",
          "href": "https://github.com/samuel871211",
          "avatar": "https://avatars.githubusercontent.com/u/55658154"
        },
        {
          "username": "AbdullahAdeebx",
          "href": "https://github.com/AbdullahAdeebx",
          "avatar": "https://avatars.githubusercontent.com/u/158824177"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 617,
      "added_stars": 268,
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
      "forks": 3327,
      "added_stars": 23947,
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
      "forks": 4400,
      "added_stars": 11234,
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
      "forks": 543,
      "added_stars": 2956,
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
      "forks": 235,
      "added_stars": 1519,
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
      "forks": 1618,
      "added_stars": 2680,
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
      "forks": 5113,
      "added_stars": 2289,
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
      "added_stars": 669,
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
      "forks": 832,
      "added_stars": 1135,
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
      "author": "trufflesecurity",
      "repo": "trufflehog",
      "avatar": "https://github.com/trufflesecurity.png",
      "repo_link": "https://github.com/trufflesecurity/trufflehog",
      "desc": "Find, verify, and analyze leaked credentials",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2629,
      "added_stars": 738,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3278,
      "added_stars": 2915,
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
      "author": "usememos",
      "repo": "memos",
      "avatar": "https://github.com/usememos.png",
      "repo_link": "https://github.com/usememos/memos",
      "desc": "A personal timeline for quick notes. Write short memos, find them later by search, tag, or date. Open source and self-hosted.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4842,
      "added_stars": 925,
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
      "author": "p1neappleXpress",
      "repo": "OpenFlux",
      "avatar": "https://github.com/p1neappleXpress.png",
      "repo_link": "https://github.com/p1neappleXpress/OpenFlux",
      "desc": "Network stack research tool. TCP tunnel with pluggable transports.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 178,
      "added_stars": 1268,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "p1neappleXpress",
          "href": "https://github.com/p1neappleXpress",
          "avatar": "https://avatars.githubusercontent.com/u/146814998"
        },
        {
          "username": "damnurmum",
          "href": "https://github.com/damnurmum",
          "avatar": "https://avatars.githubusercontent.com/u/177800305"
        },
        {
          "username": "saharev",
          "href": "https://github.com/saharev",
          "avatar": "https://avatars.githubusercontent.com/u/187200583"
        },
        {
          "username": "Ice0011",
          "href": "https://github.com/Ice0011",
          "avatar": "https://avatars.githubusercontent.com/u/57727767"
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
      "forks": 265,
      "added_stars": 2325,
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
      "author": "urfave",
      "repo": "cli",
      "avatar": "https://github.com/urfave.png",
      "repo_link": "https://github.com/urfave/cli",
      "desc": "A declarative, simple, fast, and fun package for building command line tools in Go",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1837,
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
      "author": "grpc",
      "repo": "grpc-go",
      "avatar": "https://github.com/grpc.png",
      "repo_link": "https://github.com/grpc/grpc-go",
      "desc": "The Go language implementation of gRPC. HTTP/2 based RPC",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4791,
      "added_stars": 145,
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
      "author": "e2b-dev",
      "repo": "runtime",
      "avatar": "https://github.com/e2b-dev.png",
      "repo_link": "https://github.com/e2b-dev/runtime",
      "desc": "The runtime behind every E2B stack: Cloud, Enterprise, and your own machine.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 468,
      "added_stars": 456,
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
      "author": "qax-os",
      "repo": "excelize",
      "avatar": "https://github.com/qax-os.png",
      "repo_link": "https://github.com/qax-os/excelize",
      "desc": "Go language library for reading and writing Microsoft Excel™ (XLAM / XLSM / XLSX / XLTM / XLTX) spreadsheets",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1968,
      "added_stars": 103,
      "builtBy": [
        {
          "username": "xuri",
          "href": "https://github.com/xuri",
          "avatar": "https://avatars.githubusercontent.com/u/2809468"
        },
        {
          "username": "mlh758",
          "href": "https://github.com/mlh758",
          "avatar": "https://avatars.githubusercontent.com/u/4331955"
        },
        {
          "username": "arpitjain099",
          "href": "https://github.com/arpitjain099",
          "avatar": "https://avatars.githubusercontent.com/u/3242828"
        },
        {
          "username": "dolmen",
          "href": "https://github.com/dolmen",
          "avatar": "https://avatars.githubusercontent.com/u/129536"
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
      "forks": 21878,
      "added_stars": 1745,
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
      "author": "seaweedfs",
      "repo": "seaweedfs",
      "avatar": "https://github.com/seaweedfs.png",
      "repo_link": "https://github.com/seaweedfs/seaweedfs",
      "desc": "SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3052,
      "added_stars": 909,
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
      "author": "kubernetes",
      "repo": "kubernetes",
      "avatar": "https://github.com/kubernetes.png",
      "repo_link": "https://github.com/kubernetes/kubernetes",
      "desc": "Production-Grade Container Scheduling and Management",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 46626,
      "added_stars": 1844,
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
      "author": "openbao",
      "repo": "openbao",
      "avatar": "https://github.com/openbao.png",
      "repo_link": "https://github.com/openbao/openbao",
      "desc": "OpenBao is a software solution to manage, store, and distribute sensitive data including secrets, certificates, and keys.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 623,
      "added_stars": 1073,
      "builtBy": [
        {
          "username": "jefferai",
          "href": "https://github.com/jefferai",
          "avatar": "https://avatars.githubusercontent.com/u/28627"
        },
        {
          "username": "vishalnayak",
          "href": "https://github.com/vishalnayak",
          "avatar": "https://avatars.githubusercontent.com/u/3053672"
        },
        {
          "username": "cipherboy",
          "href": "https://github.com/cipherboy",
          "avatar": "https://avatars.githubusercontent.com/u/914030"
        },
        {
          "username": "hc-github-team-secure-vault-core",
          "href": "https://github.com/hc-github-team-secure-vault-core",
          "avatar": "https://avatars.githubusercontent.com/u/82990506"
        },
        {
          "username": "armon",
          "href": "https://github.com/armon",
          "avatar": "https://avatars.githubusercontent.com/u/592032"
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
      "forks": 753,
      "added_stars": 547,
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
      "author": "Armur-Ai",
      "repo": "Pentest-Swarm-AI",
      "avatar": "https://github.com/Armur-Ai.png",
      "repo_link": "https://github.com/Armur-Ai/Pentest-Swarm-AI",
      "desc": "Autonomous penetration testing using a swarm of AI agents. Orchestrates recon, classification, exploitation, and reporting specialists with ReAct reasoning — supports bug bounty, continuous monitoring, and CTF modes. Built with Go and 7+ native security tools.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 511,
      "added_stars": 318,
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
      "forks": 18197,
      "added_stars": 2869,
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
      "forks": 6469,
      "added_stars": 35194,
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
      "forks": 5578,
      "added_stars": 4607,
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
      "forks": 5993,
      "added_stars": 24928,
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
      "forks": 3286,
      "added_stars": 4750,
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
      "forks": 1045,
      "added_stars": 7002,
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
      "forks": 8369,
      "added_stars": 16725,
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
      "forks": 11722,
      "added_stars": 12671,
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
      "author": "coji",
      "repo": "natural-japanese",
      "avatar": "https://github.com/coji.png",
      "repo_link": "https://github.com/coji/natural-japanese",
      "desc": "仕事の日本語を、読みやすくわかりやすく書く・直すための Agent Skill です。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 53,
      "added_stars": 888,
      "builtBy": [
        {
          "username": "coji",
          "href": "https://github.com/coji",
          "avatar": "https://avatars.githubusercontent.com/u/9904"
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8884,
      "added_stars": 7041,
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3386,
      "added_stars": 3567,
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
      "author": "davila7",
      "repo": "claude-code-templates",
      "avatar": "https://github.com/davila7.png",
      "repo_link": "https://github.com/davila7/claude-code-templates",
      "desc": "CLI tool for configuring and monitoring Claude Code",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3745,
      "added_stars": 2082,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1742,
      "added_stars": 3070,
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
      "forks": 403,
      "added_stars": 3665,
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
      "author": "asgeirtj",
      "repo": "system_prompts_leaks",
      "avatar": "https://github.com/asgeirtj.png",
      "repo_link": "https://github.com/asgeirtj/system_prompts_leaks",
      "desc": "Documented system prompts from Anthropic - Claude Fable 5.1, Opus 5.5, Claude Design, Claude Code. OpenAI - ChatGPT GPT-6-Astra, Codex. Google - Gemini 3.8 Flash, 3.1 Pro, Antigravity. xAI - Grok, Grok Bot, Cursor, Kimi and more! Updated regularly.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 11281,
      "added_stars": 5091,
      "builtBy": [
        {
          "username": "asgeirtj",
          "href": "https://github.com/asgeirtj",
          "avatar": "https://avatars.githubusercontent.com/u/27446620"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "awrreny",
          "href": "https://github.com/awrreny",
          "avatar": "https://avatars.githubusercontent.com/u/46632417"
        },
        {
          "username": "anonymous619259",
          "href": "https://github.com/anonymous619259",
          "avatar": "https://avatars.githubusercontent.com/u/87837428"
        },
        {
          "username": "lcebot",
          "href": "https://github.com/lcebot",
          "avatar": "https://avatars.githubusercontent.com/u/117039037"
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
      "forks": 31968,
      "added_stars": 1336,
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
      "author": "home-assistant",
      "repo": "core",
      "avatar": "https://github.com/home-assistant.png",
      "repo_link": "https://github.com/home-assistant/core",
      "desc": "🏡 Open source home automation that puts local control and privacy first.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 38867,
      "added_stars": 1150,
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
      "author": "danyuchn",
      "repo": "asd-ste100-skill",
      "avatar": "https://github.com/danyuchn.png",
      "repo_link": "https://github.com/danyuchn/asd-ste100-skill",
      "desc": "ASD-STE100 Simplified Technical English rules, repurposed as a Claude Code skill for rewriting ambiguous agent-facing English.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 249,
      "added_stars": 2370,
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
      "author": "NVIDIA",
      "repo": "Model-Optimizer",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/Model-Optimizer",
      "desc": "A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 738,
      "added_stars": 1501,
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
      "author": "docling-project",
      "repo": "docling",
      "avatar": "https://github.com/docling-project.png",
      "repo_link": "https://github.com/docling-project/docling",
      "desc": "Get your documents ready for gen AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5039,
      "added_stars": 2529,
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
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "The fastest, litest AI Gateway. Rust core with Python SDK. Call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging [Bedrock, Azure, OpenAI, Anthropic, OpenAI, VertexAI, vLLM, Nvidia NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12219,
      "added_stars": 2613,
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
      "author": "tile-ai",
      "repo": "tilelang",
      "avatar": "https://github.com/tile-ai.png",
      "repo_link": "https://github.com/tile-ai/tilelang",
      "desc": "Domain-specific language designed to streamline the development of high-performance GPU/CPU/Accelerators kernels",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 876,
      "added_stars": 1190,
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
      "forks": 1281,
      "added_stars": 4740,
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
      "title": "Dev Opportunity Radar #20: $2M AI Reasoning Challenge, PayPal AI Hackathon, and Coinbase Analytics Challenge",
      "description": "TL;DR  Welcome back to Dev Opportunity Radar.  This is a weekly series where I share opportunities,...",
      "url": "https://dev.to/devengers/dev-opportunity-radar-20-2m-ai-reasoning-challenge-paypal-ai-hackathon-and-coinbase-analytics-1fec",
      "tags": "discuss, community, resources, opportunities",
      "reactions": 94,
      "comments": 18,
      "reading_time": 10,
      "author": "hemapriya_kanagala"
    },
    {
      "title": "Why you still need a Website Portfolio, even though everyone can Vibe Code it.",
      "description": "If you have been following me for a long time, you already know that I have been holding off on my...",
      "url": "https://dev.to/francistrdev/why-you-still-need-a-website-portfolio-even-though-everyone-can-vibe-code-it-e63",
      "tags": "discuss, community, showdev, a11y",
      "reactions": 250,
      "comments": 235,
      "reading_time": 7,
      "author": "francistrdev"
    },
    {
      "title": "Gemma 4 From E2B to 31B on an AMD MI300X: fp8 Overtakes bf16 From 12B Up",
      "description": "Every Gemma 4 size from E2B to 31B served on one AMD Instinct MI300X in bf16, fp8, int8 W8A8 and int4 W4A16, on the same vLLM image. fp8 goes from 0.75x bf16 for one request at E2B to 1.23x at 31B and is faster than bf16 in every cell at 12B and 31B. The mixture-of-experts 26B sits at bf16's pace, and the 4-bit builds run at 0.14x to 0.69x at every size.",
      "url": "https://dev.to/gde/gemma-4-from-e2b-to-31b-on-an-amd-mi300x-fp8-overtakes-bf16-from-12b-up-h4e",
      "tags": "gemma, amd, machinelearning, llm",
      "reactions": 8,
      "comments": 1,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-3ib7",
      "tags": "discuss, jokes, watercooler",
      "reactions": 48,
      "comments": 35,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "I got Jev to zero mistakes. I'm still using Flash-Lite.",
      "description": "Jev is a brilliant decision model. Gemini Flash-Lite is the model nobody talks about, and it’s fast,...",
      "url": "https://dev.to/theycallmeswift/i-got-jev-to-zero-mistakes-im-still-using-flash-lite-2mo7",
      "tags": "ai, gemini, testing, jev",
      "reactions": 35,
      "comments": 16,
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
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-1682",
      "tags": "top7, discuss",
      "reactions": 59,
      "comments": 27,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Congrats to the Hacktoberfest Weekend Challenge: Build for a Friend Winners!",
      "description": "We are so excited to announce the winners of the Hacktoberfest Weekend Challenge: Build for a Friend,...",
      "url": "https://dev.to/devteam/congrats-to-the-hacktoberfest-weekend-challenge-build-for-a-friend-winners-pgc",
      "tags": "devchallenge, weekendchallenge, hf26challenge",
      "reactions": 73,
      "comments": 29,
      "reading_time": 4,
      "author": "heyitsjem"
    },
    {
      "title": "Congrats to Our First MLH x DEV Writing Challenge Winner!",
      "description": "We just wrapped the very first month of the MLH x DEV Writing Challenge, our new way of celebrating...",
      "url": "https://dev.to/devteam/congrats-to-our-first-mlh-x-dev-writing-challenge-winner-1c4l",
      "tags": "mlhacks, devchallenge, hackathon, ai",
      "reactions": 19,
      "comments": 4,
      "reading_time": 2,
      "author": "heyitsjem"
    },
    {
      "title": "What was your win this week??",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-1l3f",
      "tags": "weeklyretro",
      "reactions": 28,
      "comments": 11,
      "reading_time": 1,
      "author": "jess"
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
      "title": "JSON Tiles: Fast Analytics on Semi-Structured Data (2021)",
      "url": "https://db.cit.tum.de/~durner/papers/json-tiles-sigmod21.pdf",
      "score": 1,
      "comments": 0,
      "tags": [
        "databases",
        "pdf",
        "performance"
      ],
      "id": "7mllxi"
    },
    {
      "title": "LineageOS 24.0 released",
      "url": "https://lineageos.org/Changelog-32/",
      "score": 1,
      "comments": 0,
      "tags": [
        "android",
        "mobile",
        "release"
      ],
      "id": "ecxril"
    },
    {
      "title": "How shredding JSON is giving Logfire 1000x query speedups",
      "url": "https://pydantic.dev/articles/dynamic-shredding-2026-01-26",
      "score": 1,
      "comments": 0,
      "tags": [
        "databases",
        "performance"
      ],
      "id": "6vjx1k"
    },
    {
      "title": "Consistency is not a localized property",
      "url": "https://n-the-loop.com/blog/consistency-is-not-a-localized-property/",
      "score": 5,
      "comments": 2,
      "tags": [
        "ai",
        "databases",
        "programming"
      ],
      "id": "rhy5zp"
    },
    {
      "title": "Making np.searchsorted up to 25× Faster in NumPy 2.5",
      "url": "https://blog.scientific-python.org/numpy/searchsorted/",
      "score": 4,
      "comments": 3,
      "tags": [
        "performance"
      ],
      "id": "fbs3k7"
    },
    {
      "title": "Byte Language Models: Scaling, Emergent Abstractions, and Information Allocation",
      "url": "https://arxiv.org/html/2610.05978v1",
      "score": 6,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "t2fxpt"
    },
    {
      "title": "Inside a 1980s filter chip that uses switched capacitors",
      "url": "http://www.righto.com/2026/10/ML10-switched-capacitor-filter.html",
      "score": 8,
      "comments": 0,
      "tags": [
        "hardware",
        "historical",
        "reversing"
      ],
      "id": "mbyawi"
    },
    {
      "title": "The 2D physics prototype behind GTA’s vehicles",
      "url": "https://patkerr.co.uk/2d-vehicles/",
      "score": 5,
      "comments": 0,
      "tags": [
        "games"
      ],
      "id": "9ros7d"
    },
    {
      "title": "Kiesel Devlog #15: Release 0.4.0",
      "url": "https://linus.dev/posts/kiesel-devlog-15/",
      "score": 12,
      "comments": 1,
      "tags": [
        "javascript",
        "zig"
      ],
      "id": "4zmka2"
    },
    {
      "title": "SNTPings, draw on a canvas using ICMPv6",
      "url": "https://pings.utwente.io/",
      "score": 12,
      "comments": 0,
      "tags": [
        "education",
        "networking"
      ],
      "id": "5zbbd0"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "softwaredoug",
      "descendants": 51,
      "id": 50037949,
      "kids": [
        50039921,
        50039066,
        50040215,
        50040260,
        50039743,
        50040152,
        50038709,
        50038742,
        50038450,
        50038233,
        50038961,
        50038492,
        50039988,
        50038144,
        50040242,
        50039875
      ],
      "score": 217,
      "time": 1791672610,
      "title": "Build your own decision model",
      "type": "story",
      "url": "https://nishtahir.com/build-your-own-decision-model/"
    },
    {
      "by": "Michelangelo11",
      "descendants": 93,
      "id": 49991852,
      "kids": [
        50037168,
        50036709,
        50036935,
        50036176,
        50036420,
        50036418,
        50037988,
        50036515,
        50037342,
        50039047,
        50037554,
        50039687,
        50038644,
        50037870,
        50038469,
        50037566,
        50037715,
        50036644,
        50039440,
        50038758,
        50036567,
        50037787,
        50036609,
        50036529,
        50036596,
        50037330,
        50036442,
        50036475,
        50036615,
        50036776,
        50037173,
        50037631,
        50039195,
        50037656,
        50037341,
        50036105,
        50036158
      ],
      "score": 427,
      "time": 1791376240,
      "title": "2D Vehicles",
      "type": "story",
      "url": "https://patkerr.co.uk/2d-vehicles/"
    },
    {
      "by": "JumpCrisscross",
      "descendants": 95,
      "id": 50036864,
      "kids": [
        50040274,
        50038471,
        50039125,
        50038311,
        50038072,
        50038544,
        50037836,
        50040085,
        50040194,
        50039838,
        50037883,
        50039200,
        50038114,
        50037978,
        50039978,
        50038909,
        50039450,
        50038211,
        50038013,
        50037869,
        50037943,
        50038338,
        50038712,
        50039613,
        50037888,
        50037578,
        50039253,
        50039231,
        50037692
      ],
      "score": 279,
      "time": 1791664310,
      "title": "A city-building game in which the city would prefer you didn't",
      "type": "story",
      "url": "https://housing.over.pizza/"
    },
    {
      "by": "jonbaer",
      "descendants": 17,
      "id": 50039630,
      "kids": [
        50040210,
        50040093,
        50040336,
        50040221,
        50040016,
        50040272,
        50040131,
        50040211,
        50040150,
        50040331
      ],
      "score": 20,
      "time": 1791690167,
      "title": "AI agents in a stand-up call",
      "type": "story",
      "url": "https://atoll92.github.io/agent-standup/"
    },
    {
      "by": "therepanic",
      "descendants": 6,
      "id": 50038623,
      "kids": [
        50040187,
        50039064,
        50039401
      ],
      "score": 61,
      "time": 1791679549,
      "title": "PSPi 6 – Raspberry Pi in a PSP",
      "type": "story",
      "url": "https://github.com/othermod/PSPi-Version-6"
    },
    {
      "by": "oskarth",
      "descendants": 56,
      "id": 50029487,
      "kids": [
        50037315,
        50031218,
        50040220,
        50038395,
        50039709,
        50040197,
        50031199,
        50033473,
        50038711,
        50040166,
        50036894,
        50039977,
        50037691,
        50037229,
        50035264,
        50037872,
        50037876,
        50032586,
        50033165,
        50037162,
        50037473,
        50031242,
        50037279
      ],
      "score": 350,
      "time": 1791605546,
      "title": "The Lightbulb Computer",
      "type": "story",
      "url": "https://lightbulbcomputer.com/"
    },
    {
      "by": "theanonymousone",
      "descendants": 1,
      "id": 50017548,
      "kids": [
        50040158,
        50040263
      ],
      "score": 10,
      "time": 1791533624,
      "title": "How big is a Git commit?",
      "type": "story",
      "url": "https://ratfactor.com/cards/git-commit-size"
    },
    {
      "by": "ingve",
      "descendants": 37,
      "id": 50017247,
      "kids": [
        50037914,
        50037771,
        50038209,
        50037806,
        50036597,
        50038108,
        50039249,
        50037709,
        50037359,
        50037177
      ],
      "score": 171,
      "time": 1791530948,
      "title": "Nix wrote half of my debugger",
      "type": "story",
      "url": "https://fzakaria.com/2026/10/07/nix-wrote-half-of-my-debugger"
    },
    {
      "by": "jbaudanza",
      "descendants": 7,
      "id": 50015833,
      "kids": [
        50024290,
        50040213,
        50039888,
        50040248
      ],
      "score": 32,
      "time": 1791518296,
      "title": "Show HN: Happy Hangul Day! An RNN for Generating Korean Handwriting Strokes",
      "type": "story",
      "url": "https://hangul.ink/blog/hangul-day"
    },
    {
      "by": "theanonymousone",
      "descendants": 3,
      "id": 50001234,
      "kids": [
        50039894,
        50040200,
        50001266
      ],
      "score": 39,
      "time": 1791425716,
      "title": "Retrofitting language models to operate over bytes",
      "type": "story",
      "url": "https://www.nature.com/articles/s41586-026-11111-4"
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
      "reactions": 77,
      "comments": 153,
      "reading_time": 2,
      "author": "xulingfeng"
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
    },
    {
      "title": "Soft Skill Summary - Chapter 1 - Career",
      "description": "Chapter Contents   This chapter covers 17 key topics:   Don't Do What Others Do Thinking...",
      "url": "https://dev.to/ali007depug/soft-skill-summary-chapter-1-career-29hi",
      "tags": "career, freelance, softwaredevelopment, startup",
      "reactions": 1,
      "comments": 0,
      "reading_time": 9,
      "author": "ali007depug"
    },
    {
      "title": "How to explain protecting the AWS root user and everyday admin access in an interview",
      "description": "The interviewer leans back and asks: \"You've just created a new AWS account. What's the first thing you do about security?\" Many freshers answer",
      "url": "https://dev.to/techeazy_consulting/how-to-explain-protecting-the-aws-root-user-and-everyday-admin-access-in-an-interview-3pkh",
      "tags": "aws, career, interview, security",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "techeazy_consulting"
    },
    {
      "title": "The Last Generation That Learned the Hard Way",
      "description": "In August 2026, Stanford's Digital Economy Lab updated its \"Canaries in the Coal Mine\" paper using...",
      "url": "https://dev.to/debashish_ghosal/the-last-generation-that-learned-the-hard-way-3588",
      "tags": "ai, employeeexperience, career, healthydebate",
      "reactions": 6,
      "comments": 0,
      "reading_time": 6,
      "author": "debashish_ghosal"
    },
    {
      "title": "Long Agent Sessions Rot — Start Fresh Instead of Scrolling Back Up",
      "description": "Long agent coding sessions degrade in predictable ways. The cheap fix is a fresh session with a one-paragraph handoff, not a longer context window.",
      "url": "https://dev.to/jeff_pdc/long-agent-sessions-rot-start-fresh-instead-of-scrolling-back-up-m6o",
      "tags": "ai, webdev, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "jeff_pdc"
    },
    {
      "title": "The bug is in the handshake",
      "description": "Most bugs are not in the code. They are in the boundaries between the boxes. You can read every function and find nothing wrong. The Service is fine.…",
      "url": "https://dev.to/kayashaolu/the-bug-is-in-the-handshake-4pe8",
      "tags": "systemdesign, ai, beginners, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "kayashaolu"
    },
    {
      "title": "How Freelancers Can Use AI to Find Better Projects",
      "description": "Freelancing is no longer just about finding clients and completing tasks. Today, successful...",
      "url": "https://dev.to/sami_akt_57e8cc8e3ca3bf6e/how-freelancers-can-use-ai-to-find-better-projects-462o",
      "tags": "ai, career, freelance, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "sami_akt_57e8cc8e3ca3bf6e"
    },
    {
      "title": "The Best Writing Platform Isn’t One Platform: A Small Audience-Growth Experiment",
      "description": "Discovery, reader relationships, and income are different jobs. Here’s the evidence-led system I’m...",
      "url": "https://dev.to/openreaderlab/the-best-writing-platform-isnt-one-platform-a-small-audience-growth-experiment-1eba",
      "tags": "ai, productivity, career, writing",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "openreaderlab"
    },
    {
      "title": "Trump Administration Targets Microsoft in New Immigration Crackdown",
      "description": "Originally published on The Daily Flare.  The Trump administration's recent immigration crackdown on...",
      "url": "https://dev.to/the_daily_flare/trump-administration-targets-microsoft-in-new-immigration-crackdown-2d9f",
      "tags": "news, career, discuss, cloud",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "the_daily_flare"
    }
  ]
}
```

