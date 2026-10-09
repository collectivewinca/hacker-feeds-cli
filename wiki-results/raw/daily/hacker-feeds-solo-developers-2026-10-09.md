# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-10-09 06:44:16 UTC

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
      "author": "mvschwarz",
      "repo": "openrig",
      "avatar": "https://github.com/mvschwarz.png",
      "repo_link": "https://github.com/mvschwarz/openrig",
      "desc": "Build your own network of agents from Claude Code, Codex and Pi: persistent teams with roles, shared context and owned work.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 453,
      "added_stars": 2693,
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
          "username": "Coder8124",
          "href": "https://github.com/Coder8124",
          "avatar": "https://avatars.githubusercontent.com/u/186654237"
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
      "forks": 5289,
      "added_stars": 3996,
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
      "forks": 988,
      "added_stars": 1109,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8653,
      "added_stars": 3153,
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
      "author": "pablostanley",
      "repo": "yoinks",
      "avatar": "https://github.com/pablostanley.png",
      "repo_link": "https://github.com/pablostanley/yoinks",
      "desc": "yoink any video from your terminal. no shady ads.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 463,
      "added_stars": 2706,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6880,
      "added_stars": 2317,
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
      "author": "OpenCut-app",
      "repo": "OpenCut",
      "avatar": "https://github.com/OpenCut-app.png",
      "repo_link": "https://github.com/OpenCut-app/OpenCut",
      "desc": "The open-source CapCut alternative",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9153,
      "added_stars": 2304,
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
      "author": "Effect-TS",
      "repo": "effect",
      "avatar": "https://github.com/Effect-TS.png",
      "repo_link": "https://github.com/Effect-TS/effect",
      "desc": "Build production-ready applications in TypeScript",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 844,
      "added_stars": 868,
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
      "author": "cloudflare",
      "repo": "cloudflare-os",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflare-os",
      "desc": "Agent workspace built on Cloudflare Workers for creating documents, building apps, and running agents with your company’s context and systems.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1346,
      "added_stars": 1075,
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
      "forks": 4480,
      "added_stars": 2208,
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
      "author": "mrifqidaffaaditya",
      "repo": "WA-AKG",
      "avatar": "https://github.com/mrifqidaffaaditya.png",
      "repo_link": "https://github.com/mrifqidaffaaditya/WA-AKG",
      "desc": "A self-hosted WhatsApp Gateway & Dashboard built with Next.js 15, Baileys, and Prisma. Manage multi-session accounts, schedule messages, create auto-replies, and integrate via Webhooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 169,
      "added_stars": 127,
      "builtBy": [
        {
          "username": "mrifqidaffaaditya",
          "href": "https://github.com/mrifqidaffaaditya",
          "avatar": "https://avatars.githubusercontent.com/u/178341161"
        },
        {
          "username": "aikei-bot",
          "href": "https://github.com/aikei-bot",
          "avatar": "https://avatars.githubusercontent.com/u/294992959"
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
      "forks": 204,
      "added_stars": 611,
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
      "author": "chthollyphile",
      "repo": "folia-major",
      "avatar": "https://github.com/chthollyphile.png",
      "repo_link": "https://github.com/chthollyphile/folia-major",
      "desc": "专注于绚丽的歌词动画效果的本地音乐/navidrome/第三方多平台在线音乐播放器",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 292,
      "added_stars": 684,
      "builtBy": [
        {
          "username": "chthollyphile",
          "href": "https://github.com/chthollyphile",
          "avatar": "https://avatars.githubusercontent.com/u/30263107"
        },
        {
          "username": "oldking139",
          "href": "https://github.com/oldking139",
          "avatar": "https://avatars.githubusercontent.com/u/45203648"
        },
        {
          "username": "tumuyan",
          "href": "https://github.com/tumuyan",
          "avatar": "https://avatars.githubusercontent.com/u/3126801"
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
      "forks": 258,
      "added_stars": 649,
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
      "author": "yikart",
      "repo": "AiToEarn",
      "avatar": "https://github.com/yikart.png",
      "repo_link": "https://github.com/yikart/AiToEarn",
      "desc": "Let's use AI to Earn!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4216,
      "added_stars": 387,
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
    },
    {
      "author": "breferrari",
      "repo": "obsidian-mind",
      "avatar": "https://github.com/breferrari.png",
      "repo_link": "https://github.com/breferrari/obsidian-mind",
      "desc": "A self-organizing Obsidian vault that gives AI coding agents persistent memory.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 560,
      "added_stars": 168,
      "builtBy": [
        {
          "username": "breferrari",
          "href": "https://github.com/breferrari",
          "avatar": "https://avatars.githubusercontent.com/u/1744013"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "HoangThai18",
          "href": "https://github.com/HoangThai18",
          "avatar": "https://avatars.githubusercontent.com/u/96626001"
        },
        {
          "username": "sedetweiler",
          "href": "https://github.com/sedetweiler",
          "avatar": "https://avatars.githubusercontent.com/u/8366665"
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
      "forks": 1482,
      "added_stars": 169,
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
      "author": "hieunc229",
      "repo": "mailflare",
      "avatar": "https://github.com/hieunc229.png",
      "repo_link": "https://github.com/hieunc229/mailflare",
      "desc": "Email for professionals and teams",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 636,
      "added_stars": 881,
      "builtBy": [
        {
          "username": "hieunc229",
          "href": "https://github.com/hieunc229",
          "avatar": "https://avatars.githubusercontent.com/u/8464869"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Docker-Hunterpedia",
          "href": "https://github.com/Docker-Hunterpedia",
          "avatar": "https://avatars.githubusercontent.com/u/220352686"
        },
        {
          "username": "midego1",
          "href": "https://github.com/midego1",
          "avatar": "https://avatars.githubusercontent.com/u/61051030"
        },
        {
          "username": "Iiviavs",
          "href": "https://github.com/Iiviavs",
          "avatar": "https://avatars.githubusercontent.com/u/233335806"
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
      "forks": 3232,
      "added_stars": 22779,
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
      "forks": 4358,
      "added_stars": 11015,
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
      "forks": 530,
      "added_stars": 2793,
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
      "forks": 1613,
      "added_stars": 2663,
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
      "forks": 5104,
      "added_stars": 2177,
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
      "author": "golang",
      "repo": "go",
      "avatar": "https://github.com/golang.png",
      "repo_link": "https://github.com/golang/go",
      "desc": "The Go programming language",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 21610,
      "added_stars": 1716,
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
      "author": "Gentleman-Programming",
      "repo": "gentle-ai",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/gentle-ai",
      "desc": "Gentle-AI configures the AI coding agents you already use: Claude Code, Cursor, OpenCode, Codex, Pi, and more. Choose persistent memory, Organic-Driven Development, curated skills, MCP servers, personas, and optional bounded review. Open source, no agent lock-in.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 830,
      "added_stars": 1244,
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
      "author": "Gentleman-Programming",
      "repo": "engram",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/engram",
      "desc": "Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5, MCP server, HTTP API, CLI, and TUI.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 733,
      "added_stars": 697,
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
      "author": "p1neappleXpress",
      "repo": "OpenFlux",
      "avatar": "https://github.com/p1neappleXpress.png",
      "repo_link": "https://github.com/p1neappleXpress/OpenFlux",
      "desc": "Network stack research tool. TCP tunnel with pluggable transports.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 179,
      "added_stars": 2042,
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
      "author": "trufflesecurity",
      "repo": "trufflehog",
      "avatar": "https://github.com/trufflesecurity.png",
      "repo_link": "https://github.com/trufflesecurity/trufflehog",
      "desc": "Find, verify, and analyze leaked credentials",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2624,
      "added_stars": 703,
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
      "forks": 3260,
      "added_stars": 2931,
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
      "author": "Gaurav-Gosain",
      "repo": "tuios",
      "avatar": "https://github.com/Gaurav-Gosain.png",
      "repo_link": "https://github.com/Gaurav-Gosain/tuios",
      "desc": "A terminal window manager that knows what your agents are doing. Tiling panes, workspaces, sessions that survive restarts, and one Inbox for every coding agent.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 229,
      "added_stars": 1453,
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
          "username": "davidreuss",
          "href": "https://github.com/davidreuss",
          "avatar": "https://avatars.githubusercontent.com/u/6885"
        },
        {
          "username": "SebaWag",
          "href": "https://github.com/SebaWag",
          "avatar": "https://avatars.githubusercontent.com/u/251644039"
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
      "forks": 4834,
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
      "author": "zitadel",
      "repo": "zitadel",
      "avatar": "https://github.com/zitadel.png",
      "repo_link": "https://github.com/zitadel/zitadel",
      "desc": "ZITADEL - Identity infrastructure, simplified for you.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1362,
      "added_stars": 319,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 265,
      "added_stars": 2337,
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
      "forks": 1840,
      "added_stars": 82,
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
      "forks": 4788,
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
      "author": "e2b-dev",
      "repo": "runtime",
      "avatar": "https://github.com/e2b-dev.png",
      "repo_link": "https://github.com/e2b-dev/runtime",
      "desc": "The runtime behind every E2B stack: Cloud, Enterprise, and your own machine.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 463,
      "added_stars": 448,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 18170,
      "added_stars": 2735,
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
      "author": "kubernetes",
      "repo": "kubernetes",
      "avatar": "https://github.com/kubernetes.png",
      "repo_link": "https://github.com/kubernetes/kubernetes",
      "desc": "Production-Grade Container Scheduling and Management",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 46336,
      "added_stars": 1833,
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
      "author": "navidrome",
      "repo": "navidrome",
      "avatar": "https://github.com/navidrome.png",
      "repo_link": "https://github.com/navidrome/navidrome",
      "desc": "🎧 Your Personal Streaming Service",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1748,
      "added_stars": 710,
      "builtBy": [
        {
          "username": "deluan",
          "href": "https://github.com/deluan",
          "avatar": "https://avatars.githubusercontent.com/u/331353"
        },
        {
          "username": "kgarner7",
          "href": "https://github.com/kgarner7",
          "avatar": "https://avatars.githubusercontent.com/u/17521368"
        },
        {
          "username": "caiocotts",
          "href": "https://github.com/caiocotts",
          "avatar": "https://avatars.githubusercontent.com/u/31974888"
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
      "forks": 411,
      "added_stars": 204,
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
      "author": "seaweedfs",
      "repo": "seaweedfs",
      "avatar": "https://github.com/seaweedfs.png",
      "repo_link": "https://github.com/seaweedfs/seaweedfs",
      "desc": "SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3044,
      "added_stars": 900,
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
      "forks": 6221,
      "added_stars": 34334,
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
      "author": "anthropics",
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5569,
      "added_stars": 4400,
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
      "forks": 5974,
      "added_stars": 24260,
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
      "forks": 977,
      "added_stars": 6497,
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
      "forks": 3221,
      "added_stars": 3453,
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3190,
      "added_stars": 27656,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 11442,
      "added_stars": 13041,
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
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8248,
      "added_stars": 15772,
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
      "author": "superdesigndev",
      "repo": "treg",
      "avatar": "https://github.com/superdesigndev.png",
      "repo_link": "https://github.com/superdesigndev/treg",
      "desc": "OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 394,
      "added_stars": 3580,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8860,
      "added_stars": 7279,
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
      "forks": 3381,
      "added_stars": 3537,
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
      "author": "asgeirtj",
      "repo": "system_prompts_leaks",
      "avatar": "https://github.com/asgeirtj.png",
      "repo_link": "https://github.com/asgeirtj/system_prompts_leaks",
      "desc": "Documented system prompts from Anthropic - Claude Fable 5.1, Opus 5.5, Claude Design, Claude Code. OpenAI - ChatGPT GPT-6-Astra, Codex. Google - Gemini 3.8 Flash, 3.1 Pro, Antigravity. xAI - Grok, Grok Bot, Cursor, Kimi and more! Updated regularly.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 11247,
      "added_stars": 5103,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1724,
      "added_stars": 3128,
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
      "author": "davila7",
      "repo": "claude-code-templates",
      "avatar": "https://github.com/davila7.png",
      "repo_link": "https://github.com/davila7/claude-code-templates",
      "desc": "CLI tool for configuring and monitoring Claude Code",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3731,
      "added_stars": 2054,
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
      "author": "home-assistant",
      "repo": "core",
      "avatar": "https://github.com/home-assistant.png",
      "repo_link": "https://github.com/home-assistant/core",
      "desc": "🏡 Open source home automation that puts local control and privacy first.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 38833,
      "added_stars": 1152,
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
      "author": "pytorch",
      "repo": "pytorch",
      "avatar": "https://github.com/pytorch.png",
      "repo_link": "https://github.com/pytorch/pytorch",
      "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 31694,
      "added_stars": 1252,
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
      "forks": 736,
      "added_stars": 1502,
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
      "author": "tile-ai",
      "repo": "tilelang",
      "avatar": "https://github.com/tile-ai.png",
      "repo_link": "https://github.com/tile-ai/tilelang",
      "desc": "Domain-specific language designed to streamline the development of high-performance GPU/CPU/Accelerators kernels",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 866,
      "added_stars": 1170,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4713,
      "added_stars": 2765,
      "builtBy": [
        {
          "username": "yuh-yang",
          "href": "https://github.com/yuh-yang",
          "avatar": "https://avatars.githubusercontent.com/u/43330997"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "AiMiDi",
          "href": "https://github.com/AiMiDi",
          "avatar": "https://avatars.githubusercontent.com/u/76622021"
        },
        {
          "username": "omerarslan0",
          "href": "https://github.com/omerarslan0",
          "avatar": "https://avatars.githubusercontent.com/u/76780961"
        },
        {
          "username": "hito0512",
          "href": "https://github.com/hito0512",
          "avatar": "https://avatars.githubusercontent.com/u/26110883"
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
      "forks": 5028,
      "added_stars": 2510,
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
      "author": "SnailSploit",
      "repo": "Claude-Red",
      "avatar": "https://github.com/SnailSploit.png",
      "repo_link": "https://github.com/SnailSploit/Claude-Red",
      "desc": "claude-red is a curated library of offensive security skills designed for the Claude skills system. Each skill is a structured SKILL.md file that primes Claude with expert-level methodology for a specific attack surface — from SQLi to shellcode, EDR evasion to exploit development.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 958,
      "added_stars": 4464,
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
      "title": "Why you still need a Website Portfolio, even though everyone can Vibe Code it.",
      "description": "If you have been following me for a long time, you already know that I have been holding off on my...",
      "url": "https://dev.to/francistrdev/why-you-still-need-a-website-portfolio-even-though-everyone-can-vibe-code-it-e63",
      "tags": "discuss, community, showdev, a11y",
      "reactions": 220,
      "comments": 153,
      "reading_time": 7,
      "author": "francistrdev"
    },
    {
      "title": "I got Jev to zero mistakes. I'm still using Flash-Lite.",
      "description": "Jev is a brilliant decision model. Gemini Flash-Lite is the model nobody talks about, and it’s fast,...",
      "url": "https://dev.to/theycallmeswift/i-got-jev-to-zero-mistakes-im-still-using-flash-lite-2mo7",
      "tags": "ai, gemini, testing, jev",
      "reactions": 21,
      "comments": 3,
      "reading_time": 11,
      "author": "theycallmeswift"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-1682",
      "tags": "top7, discuss",
      "reactions": 51,
      "comments": 25,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Gemma 4 E2B on an AMD MI300X: Which Weight Format Should You Serve?",
      "description": "Ten builds of Gemma 4 E2B (bf16, fp8 in both E4M3 flavours, int8 W8A8 and int4 W4A16, each with and without int4 embedding tables) served one after another on one AMD Instinct MI300X with the same vLLM image. fp8 is the only format that keeps pace with bf16, the 4-bit builds run at 0.14x to 0.63x, and int4 embedding tables cost almost nothing.",
      "url": "https://dev.to/gde/gemma-4-e2b-on-an-amd-mi300x-which-weight-format-should-you-serve-1a01",
      "tags": "gemma, amd, machinelearning, llm",
      "reactions": 7,
      "comments": 1,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-3ib7",
      "tags": "discuss, jokes, watercooler",
      "reactions": 47,
      "comments": 35,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Build a Tiny Virtual Pet on Arduino in 60 Minutes 🐾",
      "description": "Turn an Arduino Uno Q into Kiku, a Tamagotchi-style virtual pet with an animated LED face, moods, and keyboard controls.",
      "url": "https://dev.to/heraistudio/build-a-tiny-virtual-pet-on-arduino-in-60-minutes-2cf",
      "tags": "arduino, beginners, programming, hacktoberfest",
      "reactions": 38,
      "comments": 15,
      "reading_time": 5,
      "author": "jenlooper"
    },
    {
      "title": "Welcome Thread - v 396",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-396-ih4",
      "tags": "welcome",
      "reactions": 31,
      "comments": 226,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-4jli",
      "tags": "weeklyretro",
      "reactions": 115,
      "comments": 133,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Making cross-platform local AI easier with llamadart",
      "description": "My writing assistant could talk to Gemini. The missing piece was using it without a connection.  That...",
      "url": "https://dev.to/gde/making-cross-platform-local-ai-easier-with-llamadart-2l4k",
      "tags": "dart, flutter, ai, tutorial",
      "reactions": 8,
      "comments": 2,
      "reading_time": 6,
      "author": "leehack"
    },
    {
      "title": "stop-using-complex-urls-for-your-demos.us-central1.run.app",
      "description": "Wish you had a custom domain for all of your demos and AI prototypes? When you deploy your apps with...",
      "url": "https://dev.to/googleai/stop-using-complex-urls-for-your-demosus-central1runapp-2efd",
      "tags": "googlecloud, cloud, software, programming",
      "reactions": 26,
      "comments": 1,
      "reading_time": 1,
      "author": "ruchika_goel"
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
      "title": "Whistle: Speech to Text in 16.9 MB",
      "url": "https://cactuscompute.com/blog/whistle",
      "score": 1,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "lpomuo"
    },
    {
      "title": "Reducing undefined behavior in the C language",
      "url": "https://lwn.net/Articles/1095811/",
      "score": 1,
      "comments": 0,
      "tags": [
        "c"
      ],
      "id": "dstt3o"
    },
    {
      "title": "B-Trees Are Back: Engineering Fast and Pageable Node Layouts",
      "url": "https://www.cs.cit.tum.de/fileadmin/w00cfj/dis/papers/btrees-are-back.pdf",
      "score": 4,
      "comments": 0,
      "tags": [
        "databases",
        "pdf"
      ],
      "id": "gvbqdy"
    },
    {
      "title": "Bevy 0.20",
      "url": "https://bevy.org/news/bevy-0-20/",
      "score": 23,
      "comments": 1,
      "tags": [
        "games",
        "release",
        "rust"
      ],
      "id": "3gikyb"
    },
    {
      "title": "Rolling the Root Key (Update)",
      "url": "https://ispcol.potaroo.net/2026-10/kskroll.html",
      "score": 4,
      "comments": 0,
      "tags": [
        "networking"
      ],
      "id": "ibtc9r"
    },
    {
      "title": "Demoting i686 Windows targets to std-only",
      "url": "https://blog.rust-lang.org/2026/10/02/demoting-i686-windows-targets-to-std-only/",
      "score": 6,
      "comments": 0,
      "tags": [
        "rust",
        "windows"
      ],
      "id": "kfla2w"
    },
    {
      "title": "64-Day Certificate Lifetimes Coming Feb 2027",
      "url": "https://letsencrypt.org/2026/10/07/64-day-certs.html",
      "score": 15,
      "comments": 2,
      "tags": [
        "devops",
        "security"
      ],
      "id": "dcrosf"
    },
    {
      "title": "Please Let Me Contact You Privately",
      "url": "https://kennyqin.com/please-let-me-contact-you-privately/",
      "score": 1,
      "comments": 2,
      "tags": [
        "email",
        "web"
      ],
      "id": "zxegbr"
    },
    {
      "title": "Scaling and benchmarking a critical message bus using a new indexing strategy",
      "url": "https://blog.janestreet.com/scaling-and-benchmarking-a-critical-message-bus/",
      "score": 1,
      "comments": 0,
      "tags": [
        "distributed"
      ],
      "id": "gliabr"
    },
    {
      "title": "Navier-Stokes lost in translation: Why Lean verification of AI autoformalisation does not guarantee correct natural language proofs",
      "url": "https://arxiv.org/abs/2610.08144",
      "score": 18,
      "comments": 8,
      "tags": [
        "formalmethods",
        "math",
        "pdf",
        "reversing",
        "vibecoding"
      ],
      "id": "axmhji"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "ilreb",
      "descendants": 70,
      "id": 50016312,
      "kids": [
        50016749,
        50016508,
        50016483,
        50016571,
        50016464,
        50016537,
        50016669,
        50016762,
        50016446,
        50016845,
        50016682,
        50016510,
        50016465,
        50016466,
        50016769,
        50016723,
        50016618,
        50016418,
        50016532,
        50016719,
        50016576
      ],
      "score": 98,
      "time": 1791523378,
      "title": "Show HN: Quake ported to safe Rust, playable in browser",
      "type": "story",
      "url": "https://quake-srp.pages.dev/"
    },
    {
      "by": "signa11",
      "descendants": 56,
      "id": 50015074,
      "kids": [
        50016771,
        50016256,
        50015519,
        50016735,
        50016057,
        50015564,
        50016207,
        50015407,
        50016366,
        50015391,
        50015484,
        50015364,
        50015471
      ],
      "score": 89,
      "time": 1791511373,
      "title": "Reducing undefined behavior in the C language",
      "type": "story",
      "url": "https://lwn.net/Articles/1095811/"
    },
    {
      "by": "jonotime",
      "descendants": 471,
      "id": 50000488,
      "kids": [
        50012463,
        50011021,
        50011685,
        50012504,
        50011347,
        50012754,
        50011885,
        50016514,
        50015596,
        50014175,
        50011195,
        50011160,
        50011156,
        50012393,
        50016390,
        50015547,
        50011664,
        50012356,
        50016024,
        50011724,
        50011219,
        50012137,
        50012928,
        50016095,
        50011476,
        50015544,
        50016499,
        50012766,
        50014997,
        50015970,
        50014867,
        50013361,
        50012564,
        50012612,
        50011612,
        50013204,
        50015875,
        50014868,
        50014775,
        50014580,
        50015687,
        50015032,
        50011540,
        50014934,
        50015894,
        50013738,
        50012815,
        50011075,
        50013827,
        50011070,
        50014858,
        50012878,
        50014820,
        50011024,
        50012978,
        50013385,
        50013332,
        50011180,
        50012081,
        50015227,
        50011682,
        50011318,
        50012277,
        50012031,
        50011467,
        50011025,
        50011971,
        50014923,
        50014214,
        50012874,
        50011441,
        50014607,
        50011264,
        50011845,
        50011506,
        50015280,
        50011502,
        50014810,
        50011137,
        50014714,
        50014642,
        50013507,
        50012559,
        50013307,
        50013304,
        50013263,
        50013249,
        50013174,
        50012117,
        50016408,
        50011829,
        50011666,
        50011192,
        50014488,
        50013580,
        50012173,
        50011533,
        50014333,
        50001187,
        50013677,
        50016493,
        50015749,
        50016704,
        50011830,
        50012985,
        50012285,
        50011572,
        50011389,
        50011610
      ],
      "score": 586,
      "time": 1791418488,
      "title": "Why isn't the industry freaking out about DeepSeek 4.1 Flash?",
      "type": "story",
      "url": "https://www.dgt.is/blog/2026-10-07-deepseek-freek-out/"
    },
    {
      "by": "gmays",
      "descendants": 143,
      "id": 50008427,
      "kids": [
        50011633,
        50008908,
        50009740,
        50009751,
        50010298,
        50015141,
        50008830,
        50013213,
        50015122,
        50008973,
        50016036,
        50015218,
        50015389,
        50015954,
        50012184,
        50010500,
        50014055,
        50009780,
        50011619,
        50014308,
        50015137,
        50010388,
        50009097,
        50009247,
        50009963,
        50011617,
        50015051,
        50009699,
        50011117,
        50016050,
        50010876,
        50009122,
        50010134,
        50009409,
        50013653,
        50008896,
        50010697,
        50009255,
        50008838,
        50014672,
        50011108,
        50012217,
        50011280,
        50010842,
        50011222,
        50011246,
        50011237,
        50011197,
        50009506,
        50016843,
        50015851,
        50015751,
        50015302,
        50015179,
        50014152,
        50011973,
        50009072,
        50010314,
        50011162,
        50009418,
        50011765,
        50009457,
        50010389,
        50010394
      ],
      "score": 698,
      "time": 1791478779,
      "title": "Whistle: Speech to Text in 16.9 MB",
      "type": "story",
      "url": "https://cactuscompute.com/blog/whistle"
    },
    {
      "by": "sohkamyung",
      "descendants": 59,
      "id": 50015515,
      "kids": [
        50016852,
        50016411,
        50016688,
        50015724,
        50016796,
        50015863,
        50015919,
        50016652,
        50016515,
        50016289,
        50015597,
        50016304,
        50016266,
        50016343,
        50016321,
        50015666,
        50015852,
        50015556,
        50015900,
        50016178,
        50016044,
        50016586,
        50015694,
        50016278,
        50015987,
        50015679,
        50015726
      ],
      "score": 66,
      "time": 1791515285,
      "title": "Keyboard differences between Windows and Macs",
      "type": "story",
      "url": "https://unsung.aresluna.org/deeper-dive-keyboard-differences-between-windows-and-macs/"
    },
    {
      "by": "ck2",
      "descendants": 356,
      "id": 49995495,
      "kids": [
        49996221,
        50016814,
        50015507,
        50016827,
        50014444,
        50014674,
        50012077,
        50013043,
        50013220,
        50014114,
        49999503,
        50016217,
        50014385,
        50014712,
        50013744,
        50012202,
        50016601,
        50012230,
        50016104,
        50001848,
        50012076,
        50014928,
        50013492,
        50013592,
        50011304,
        50013601,
        50015171,
        50016431,
        50014300,
        50015743,
        50015465,
        50011823,
        50014328,
        50002044,
        50013324,
        49998722,
        49997515,
        49996219,
        50015258,
        50014236,
        50013061,
        49998924,
        50014606,
        50001685,
        49998266,
        50014167,
        50012515,
        50011383,
        50012501,
        50015326,
        50012639,
        50013508
      ],
      "score": 601,
      "text": "<a href=\"https:&#x2F;&#x2F;x.com&#x2F;NomadsGalaxy&#x2F;status&#x2F;2107284088247689290\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;NomadsGalaxy&#x2F;status&#x2F;2107284088247689290</a>",
      "time": 1791392190,
      "title": "Man discovers his parents' coffee machine used 1TB of data in 10 days",
      "type": "story",
      "url": "https://www.dexerto.com/entertainment/man-discovers-his-parents-coffee-machine-used-1tb-of-data-in-10-days-3416399/"
    },
    {
      "by": "kbyatnal",
      "descendants": 141,
      "id": 50009295,
      "kids": [
        50016816,
        50015757,
        50016826,
        50011847,
        50011865,
        50011769,
        50012156,
        50012034,
        50016022,
        50011812,
        50012030,
        50011348,
        50011939,
        50011459,
        50011957,
        50012351,
        50012387,
        50014219,
        50011930,
        50011719,
        50011990,
        50015046,
        50013140,
        50016454,
        50012259,
        50014085,
        50011995,
        50013376,
        50012589,
        50011356,
        50011425,
        50011825,
        50012126,
        50012215,
        50013156,
        50011660,
        50014312,
        50012549,
        50014207,
        50013887,
        50012438,
        50012325,
        50013715,
        50011438,
        50013120,
        50012537,
        50015360
      ],
      "score": 396,
      "time": 1791481909,
      "title": "Theranos.world",
      "type": "story",
      "url": "https://www.theranos.world/"
    },
    {
      "by": "soheilpro",
      "descendants": 94,
      "id": 49986882,
      "kids": [
        50012378,
        50015210,
        50012723,
        50014136,
        50011618,
        50012581,
        50014372,
        50012760,
        50014883,
        50014047,
        50015207,
        50011680,
        50014041,
        49990442,
        49989744,
        50015332,
        49994693,
        50011735,
        50013153,
        49990076,
        50012234,
        50011600
      ],
      "score": 537,
      "time": 1791337263,
      "title": "I hired an illustrator to draw my house. Now it's my Home Assistant dashboard",
      "type": "story",
      "url": "https://antonfrolov.substack.com/p/i-hired-an-illustrator-to-draw-my"
    },
    {
      "by": "Michelangelo11",
      "descendants": 96,
      "id": 50003796,
      "kids": [
        50016864,
        50014287,
        50012822,
        50016790,
        50015214,
        50016184,
        50011535,
        50012198,
        50003952,
        50015378,
        50015761,
        50013484,
        50011520,
        50013068,
        50013915,
        50013124,
        50013729,
        50014143,
        50013973,
        50014591,
        50015134,
        50014217,
        50013188,
        50014092,
        50013029,
        50012322,
        50003900,
        50015602
      ],
      "score": 335,
      "time": 1791452898,
      "title": "Yes, and",
      "type": "story",
      "url": "https://htmx.org/essays/yes-and/"
    },
    {
      "by": "md224",
      "descendants": 122,
      "id": 50013902,
      "kids": [
        50016829,
        50014233,
        50014707,
        50014371,
        50016860,
        50014717,
        50014355,
        50014341,
        50015108,
        50014608,
        50014530,
        50014789,
        50014427,
        50014437,
        50014250,
        50014525,
        50014807,
        50014651,
        50014388,
        50014658,
        50014314,
        50014359,
        50014345,
        50014805,
        50014330,
        50014862,
        50014498,
        50014452
      ],
      "score": 90,
      "time": 1791502183,
      "title": "OpenAI, the Partition Principle, and Mathematics",
      "type": "story",
      "url": "https://karagila.org/2026/openai-pp/"
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
      "title": "The future, after AI",
      "description": "I've been using AI coding tools for a while now, and the progress is honestly insane. Something that...",
      "url": "https://dev.to/kaleman15/the-future-after-ai-2767",
      "tags": "ai, programming, career, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "kaleman15"
    },
    {
      "title": "I Built a Modern Matrimonial Biodata & Wedding Invite Maker with Next.js 16 & Cloudflare Edge 💍",
      "description": "When family or friends in India prepare for marriage alliances, the first thing they share on...",
      "url": "https://dev.to/bot/i-built-a-modern-matrimonial-biodata-wedding-invite-maker-with-nextjs-16-cloudflare-edge-4g0f",
      "tags": "webdev, nextjs, career",
      "reactions": 3,
      "comments": 0,
      "reading_time": 4,
      "author": "bot"
    },
    {
      "title": "ShortList",
      "description": "I applied to 40+ jobs in the last few weeks and lost track of half of them.  LinkedIn, Naukri,...",
      "url": "https://dev.to/yash_satankar/shortlist-294i",
      "tags": "webdev, opensource, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "yash_satankar"
    },
    {
      "title": "Who is hiring people to build and secure AI agents? I read 45,000 career-page listings",
      "description": "I run a scraper that reads company career pages directly (Greenhouse, Lever, Ashby and similar) and...",
      "url": "https://dev.to/vittoria000li/who-is-hiring-people-to-build-and-secure-ai-agents-i-read-45000-career-page-listings-1d7a",
      "tags": "ai, agents, career, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "vittoria000li"
    },
    {
      "title": "AI Coding Tools Are Great Until the Only Test Is a Device in Someone's Hand",
      "description": "Most \"how I use AI coding tools\" posts come from someone who lives in one web framework all day. That...",
      "url": "https://dev.to/nabeelbaghoor/ai-coding-tools-are-great-until-the-only-test-is-a-device-in-someones-hand-3apk",
      "tags": "ai, programming, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "nabeelbaghoor"
    },
    {
      "title": "Why Developer Communities Still Matter: Lessons From ReactPlay and Five Companies Supporting Open Source",
      "description": "AI can help generate a component or explain unfamiliar code. Working with other developers introduces...",
      "url": "https://dev.to/hraj_07/why-developer-communities-still-matter-lessons-from-reactplay-and-five-companies-supporting-open-2aid",
      "tags": "opensource, community, react, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "hraj_07"
    },
    {
      "title": "I built an AI that finds and scores my next job",
      "description": "A career changer's pipeline: 20 sources, hard filters before LLM calls, and a verification step that killed my best-looking candidates.",
      "url": "https://dev.to/reaver1000/i-built-an-ai-that-finds-and-scores-my-next-job-49je",
      "tags": "python, ai, career, automation",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "reaver1000"
    },
    {
      "title": "Recruiters search booleans, not keywords",
      "description": "Recruiters search with logic, not with lists of buzz‑words. When a hiring team opens a profile, they...",
      "url": "https://dev.to/simali_dud_b97add4154d7a6/recruiters-search-booleans-not-keywords-3ek5",
      "tags": "career, hiring",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "simali_dud_b97add4154d7a6"
    },
    {
      "title": "5 Java 21 changes you should already be using",
      "description": "ava 21 came out in September 2023, and plenty of projects still write code as if they were on Java...",
      "url": "https://dev.to/nextpatch/5-java-21-changes-you-should-already-be-using-223g",
      "tags": "java, programming, tutorial, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "nextpatch"
    },
    {
      "title": "How to Choose the Right Technology Partner for a Growing Business",
      "description": "There comes a point in every growing business when technology stops being something one person...",
      "url": "https://dev.to/amina17zx/how-to-choose-the-right-technology-partner-for-a-growing-business-3ngl",
      "tags": "career, cloud, devops, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "amina17zx"
    }
  ]
}
```

