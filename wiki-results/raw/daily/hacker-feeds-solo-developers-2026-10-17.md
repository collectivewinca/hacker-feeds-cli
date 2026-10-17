# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-10-17 06:34:45 UTC

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
      "author": "morluto",
      "repo": "rea",
      "avatar": "https://github.com/morluto.png",
      "repo_link": "https://github.com/morluto/rea",
      "desc": "Reverse engineer anything with agents, from app behavior down to native binaries.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 74358,
      "added_stars": 248962,
      "builtBy": [
        {
          "username": "morluto",
          "href": "https://github.com/morluto",
          "avatar": "https://avatars.githubusercontent.com/u/76467478"
        },
        {
          "username": "N0zoM1z0",
          "href": "https://github.com/N0zoM1z0",
          "avatar": "https://avatars.githubusercontent.com/u/161784452"
        },
        {
          "username": "kaoru0822-kitauji",
          "href": "https://github.com/kaoru0822-kitauji",
          "avatar": "https://avatars.githubusercontent.com/u/208281322"
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
      "forks": 5900,
      "added_stars": 5601,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2151,
      "added_stars": 4207,
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
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for small context windows (a 100K context is enough), token savings (5x fewer tokens), and month-long single sessions (billions of tokens).上下文压缩插件，兼顾小窗口(100k上下文足矣)省token(省5倍token)和超长会话(数月级别几十亿token单会话)。billion-context is all you need",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 126,
      "added_stars": 779,
      "builtBy": [
        {
          "username": "ranxianglei",
          "href": "https://github.com/ranxianglei",
          "avatar": "https://avatars.githubusercontent.com/u/12445698"
        },
        {
          "username": "YunzhouLi-hub",
          "href": "https://github.com/YunzhouLi-hub",
          "avatar": "https://avatars.githubusercontent.com/u/154221037"
        },
        {
          "username": "yingzhongshuoqi",
          "href": "https://github.com/yingzhongshuoqi",
          "avatar": "https://avatars.githubusercontent.com/u/187964595"
        },
        {
          "username": "aolshevskiy",
          "href": "https://github.com/aolshevskiy",
          "avatar": "https://avatars.githubusercontent.com/u/38494"
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
      "forks": 1172,
      "added_stars": 1327,
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
      "forks": 8872,
      "added_stars": 2442,
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
      "author": "vercel-labs",
      "repo": "skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/skills",
      "desc": "The open agent skills tool - npx skills",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3008,
      "added_stars": 1731,
      "builtBy": [
        {
          "username": "quuu",
          "href": "https://github.com/quuu",
          "avatar": "https://avatars.githubusercontent.com/u/32676955"
        },
        {
          "username": "huozhi",
          "href": "https://github.com/huozhi",
          "avatar": "https://avatars.githubusercontent.com/u/4800338"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jonathanhefner",
          "href": "https://github.com/jonathanhefner",
          "avatar": "https://avatars.githubusercontent.com/u/771968"
        }
      ]
    },
    {
      "author": "LibreSpark",
      "repo": "LibreTV",
      "avatar": "https://github.com/LibreSpark.png",
      "repo_link": "https://github.com/LibreSpark/LibreTV",
      "desc": "一分钟搭建影视站，支持Docker等部署方式",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 28995,
      "added_stars": 4775,
      "builtBy": [
        {
          "username": "bestZwei",
          "href": "https://github.com/bestZwei",
          "avatar": "https://avatars.githubusercontent.com/u/110226580"
        },
        {
          "username": "senshinya",
          "href": "https://github.com/senshinya",
          "avatar": "https://avatars.githubusercontent.com/u/155552943"
        },
        {
          "username": "JohnsonRan",
          "href": "https://github.com/JohnsonRan",
          "avatar": "https://avatars.githubusercontent.com/u/89735151"
        },
        {
          "username": "WLongSAMA",
          "href": "https://github.com/WLongSAMA",
          "avatar": "https://avatars.githubusercontent.com/u/12743204"
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
      "forks": 736,
      "added_stars": 2990,
      "builtBy": [
        {
          "username": "chthollyphile",
          "href": "https://github.com/chthollyphile",
          "avatar": "https://avatars.githubusercontent.com/u/30263107"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "lantudou",
          "href": "https://github.com/lantudou",
          "avatar": "https://avatars.githubusercontent.com/u/34973475"
        },
        {
          "username": "oldking139",
          "href": "https://github.com/oldking139",
          "avatar": "https://avatars.githubusercontent.com/u/45203648"
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
      "forks": 5113,
      "added_stars": 1869,
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
      "author": "SegFault42",
      "repo": "HeliosGen",
      "avatar": "https://github.com/SegFault42.png",
      "repo_link": "https://github.com/SegFault42/HeliosGen",
      "desc": "🏆 Self Hosted Gen AI desktop app. Free alternative to Higgsfield, OpenArt, Freepik....",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 352,
      "added_stars": 829,
      "builtBy": [
        {
          "username": "SegFault42",
          "href": "https://github.com/SegFault42",
          "avatar": "https://avatars.githubusercontent.com/u/9384676"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "poms32",
          "href": "https://github.com/poms32",
          "avatar": "https://avatars.githubusercontent.com/u/8656129"
        },
        {
          "username": "CaM2091",
          "href": "https://github.com/CaM2091",
          "avatar": "https://avatars.githubusercontent.com/u/6414269"
        },
        {
          "username": "alaporterie",
          "href": "https://github.com/alaporterie",
          "avatar": "https://avatars.githubusercontent.com/u/15890383"
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
      "forks": 614,
      "added_stars": 372,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4900,
      "added_stars": 3767,
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
          "username": "tashdroid",
          "href": "https://github.com/tashdroid",
          "avatar": "https://avatars.githubusercontent.com/u/319142293"
        },
        {
          "username": "OhOkThisIsFine",
          "href": "https://github.com/OhOkThisIsFine",
          "avatar": "https://avatars.githubusercontent.com/u/102485413"
        }
      ]
    },
    {
      "author": "TencentCloud",
      "repo": "TencentDB-Agent-Memory",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/TencentDB-Agent-Memory",
      "desc": "TencentDB Agent Memory is a team-level memory hub for AI Agents — turning conversations, docs, and code into four reusable memory assets (Chat Memory, Skill, LLM-Wiki, Code-Graph) that are governed, shared, and equipped across agents and frameworks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2876,
      "added_stars": 1498,
      "builtBy": [
        {
          "username": "Yuntong8888",
          "href": "https://github.com/Yuntong8888",
          "avatar": "https://avatars.githubusercontent.com/u/277734672"
        },
        {
          "username": "aleronwang",
          "href": "https://github.com/aleronwang",
          "avatar": "https://avatars.githubusercontent.com/u/52184295"
        },
        {
          "username": "Maxwell-Code07",
          "href": "https://github.com/Maxwell-Code07",
          "avatar": "https://avatars.githubusercontent.com/u/95488710"
        },
        {
          "username": "hot777zzz",
          "href": "https://github.com/hot777zzz",
          "avatar": "https://avatars.githubusercontent.com/u/120694702"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 708,
      "added_stars": 339,
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
      "author": "OpenCut-app",
      "repo": "OpenCut",
      "avatar": "https://github.com/OpenCut-app.png",
      "repo_link": "https://github.com/OpenCut-app/OpenCut",
      "desc": "The open-source CapCut alternative",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9357,
      "added_stars": 1704,
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
      "author": "invoke-ai",
      "repo": "InvokeAI",
      "avatar": "https://github.com/invoke-ai.png",
      "repo_link": "https://github.com/invoke-ai/InvokeAI",
      "desc": "Invoke is a leading creative engine for Stable Diffusion models, empowering professionals, artists, and enthusiasts to generate and create visual media using the latest AI-driven technologies. The solution offers an industry leading WebUI, and serves as the foundation for multiple commercial products.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3061,
      "added_stars": 201,
      "builtBy": [
        {
          "username": "psychedelicious",
          "href": "https://github.com/psychedelicious",
          "avatar": "https://avatars.githubusercontent.com/u/4822129"
        },
        {
          "username": "lstein",
          "href": "https://github.com/lstein",
          "avatar": "https://avatars.githubusercontent.com/u/111189"
        },
        {
          "username": "blessedcoolant",
          "href": "https://github.com/blessedcoolant",
          "avatar": "https://avatars.githubusercontent.com/u/54517381"
        },
        {
          "username": "RyanJDick",
          "href": "https://github.com/RyanJDick",
          "avatar": "https://avatars.githubusercontent.com/u/14897797"
        },
        {
          "username": "Pfannkuchensack",
          "href": "https://github.com/Pfannkuchensack",
          "avatar": "https://avatars.githubusercontent.com/u/1481193"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "claude-quickstarts",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-quickstarts",
      "desc": "A collection of projects designed to help developers quickly get started with building deployable applications using the Claude API",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3110,
      "added_stars": 190,
      "builtBy": [
        {
          "username": "cj-ant",
          "href": "https://github.com/cj-ant",
          "avatar": "https://avatars.githubusercontent.com/u/286490957"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "x5a",
          "href": "https://github.com/x5a",
          "avatar": "https://avatars.githubusercontent.com/u/4421754"
        },
        {
          "username": "alexalbertt",
          "href": "https://github.com/alexalbertt",
          "avatar": "https://avatars.githubusercontent.com/u/34638987"
        },
        {
          "username": "zealoushacker",
          "href": "https://github.com/zealoushacker",
          "avatar": "https://avatars.githubusercontent.com/u/346275"
        }
      ]
    },
    {
      "author": "agalwood",
      "repo": "Motrix",
      "avatar": "https://github.com/agalwood.png",
      "repo_link": "https://github.com/agalwood/Motrix",
      "desc": "A full-featured download manager.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5096,
      "added_stars": 730,
      "builtBy": [
        {
          "username": "agalwood",
          "href": "https://github.com/agalwood",
          "avatar": "https://avatars.githubusercontent.com/u/1032175"
        },
        {
          "username": "shatyuka",
          "href": "https://github.com/shatyuka",
          "avatar": "https://avatars.githubusercontent.com/u/31368738"
        },
        {
          "username": "dicarne",
          "href": "https://github.com/dicarne",
          "avatar": "https://avatars.githubusercontent.com/u/10357789"
        },
        {
          "username": "kant",
          "href": "https://github.com/kant",
          "avatar": "https://avatars.githubusercontent.com/u/32717"
        },
        {
          "username": "Raistlin916",
          "href": "https://github.com/Raistlin916",
          "avatar": "https://avatars.githubusercontent.com/u/2560402"
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 587,
      "added_stars": 3417,
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
      "author": "Tencent",
      "repo": "WeKnora",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/WeKnora",
      "desc": "Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4591,
      "added_stars": 9769,
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
      "author": "alibaba",
      "repo": "open-code-review",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/open-code-review",
      "desc": "Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3467,
      "added_stars": 17022,
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
      "author": "caddyserver",
      "repo": "caddy",
      "avatar": "https://github.com/caddyserver.png",
      "repo_link": "https://github.com/caddyserver/caddy",
      "desc": "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5147,
      "added_stars": 2530,
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
      "author": "coder",
      "repo": "coder",
      "avatar": "https://github.com/coder.png",
      "repo_link": "https://github.com/coder/coder",
      "desc": "Secure environments for developers and their agents",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1637,
      "added_stars": 2679,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4689,
      "added_stars": 6328,
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
      "author": "Gentleman-Programming",
      "repo": "engram",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/engram",
      "desc": "Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5, MCP server, HTTP API, CLI, and TUI.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 769,
      "added_stars": 715,
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
      "author": "urfave",
      "repo": "cli",
      "avatar": "https://github.com/urfave.png",
      "repo_link": "https://github.com/urfave/cli",
      "desc": "A declarative, simple, fast, and fun package for building command line tools in Go",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1870,
      "added_stars": 80,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 521,
      "added_stars": 1228,
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
      "author": "Gaurav-Gosain",
      "repo": "tuios",
      "avatar": "https://github.com/Gaurav-Gosain.png",
      "repo_link": "https://github.com/Gaurav-Gosain/tuios",
      "desc": "A terminal window manager that knows what your agents are doing. Tiling panes, workspaces, sessions that survive restarts, and one Inbox for every coding agent.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 256,
      "added_stars": 1787,
      "builtBy": [
        {
          "username": "Gaurav-Gosain",
          "href": "https://github.com/Gaurav-Gosain",
          "avatar": "https://avatars.githubusercontent.com/u/55647468"
        },
        {
          "username": "abhijit-s",
          "href": "https://github.com/abhijit-s",
          "avatar": "https://avatars.githubusercontent.com/u/20989130"
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
      "forks": 546,
      "added_stars": 508,
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
      "forks": 18339,
      "added_stars": 3166,
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
      "author": "docker",
      "repo": "compose",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/compose",
      "desc": "Define and run multi-container applications with Docker",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5876,
      "added_stars": 398,
      "builtBy": [
        {
          "username": "ndeloof",
          "href": "https://github.com/ndeloof",
          "avatar": "https://avatars.githubusercontent.com/u/132757"
        },
        {
          "username": "glours",
          "href": "https://github.com/glours",
          "avatar": "https://avatars.githubusercontent.com/u/705411"
        },
        {
          "username": "gtardif",
          "href": "https://github.com/gtardif",
          "avatar": "https://avatars.githubusercontent.com/u/437958"
        },
        {
          "username": "rumpl",
          "href": "https://github.com/rumpl",
          "avatar": "https://avatars.githubusercontent.com/u/99933"
        }
      ]
    },
    {
      "author": "oauth2-proxy",
      "repo": "oauth2-proxy",
      "avatar": "https://github.com/oauth2-proxy.png",
      "repo_link": "https://github.com/oauth2-proxy/oauth2-proxy",
      "desc": "A reverse proxy that provides authentication with Google, Azure, OpenID Connect and many more identity providers.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2237,
      "added_stars": 258,
      "builtBy": [
        {
          "username": "JoelSpeed",
          "href": "https://github.com/JoelSpeed",
          "avatar": "https://avatars.githubusercontent.com/u/9232216"
        },
        {
          "username": "tuunit",
          "href": "https://github.com/tuunit",
          "avatar": "https://avatars.githubusercontent.com/u/18513179"
        },
        {
          "username": "jehiah",
          "href": "https://github.com/jehiah",
          "avatar": "https://avatars.githubusercontent.com/u/45028"
        },
        {
          "username": "mbland",
          "href": "https://github.com/mbland",
          "avatar": "https://avatars.githubusercontent.com/u/301547"
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
      "forks": 2644,
      "added_stars": 663,
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
      "author": "zitadel",
      "repo": "zitadel",
      "avatar": "https://github.com/zitadel.png",
      "repo_link": "https://github.com/zitadel/zitadel",
      "desc": "ZITADEL - Identity infrastructure, simplified for you.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1379,
      "added_stars": 329,
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
      "author": "golang",
      "repo": "go",
      "avatar": "https://github.com/golang.png",
      "repo_link": "https://github.com/golang/go",
      "desc": "The Go programming language",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 22570,
      "added_stars": 1402,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 274,
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
      "author": "openbao",
      "repo": "openbao",
      "avatar": "https://github.com/openbao.png",
      "repo_link": "https://github.com/openbao/openbao",
      "desc": "OpenBao is a software solution to manage, store, and distribute sensitive data including secrets, certificates, and keys.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 631,
      "added_stars": 1129,
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
      "forks": 3072,
      "added_stars": 872,
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
      "author": "usememos",
      "repo": "memos",
      "avatar": "https://github.com/usememos.png",
      "repo_link": "https://github.com/usememos/memos",
      "desc": "A personal timeline for quick notes. Write short memos, find them later by search, tag, or date. Open source and self-hosted.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4865,
      "added_stars": 901,
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
      "author": "hashicorp",
      "repo": "terraform",
      "avatar": "https://github.com/hashicorp.png",
      "repo_link": "https://github.com/hashicorp/terraform",
      "desc": "Terraform enables you to safely and predictably create, change, and improve infrastructure. It is a source-available tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10647,
      "added_stars": 506,
      "builtBy": [
        {
          "username": "jbardin",
          "href": "https://github.com/jbardin",
          "avatar": "https://avatars.githubusercontent.com/u/35067"
        },
        {
          "username": "mitchellh",
          "href": "https://github.com/mitchellh",
          "avatar": "https://avatars.githubusercontent.com/u/1299"
        },
        {
          "username": "apparentlymart",
          "href": "https://github.com/apparentlymart",
          "avatar": "https://avatars.githubusercontent.com/u/20180"
        },
        {
          "username": "stack72",
          "href": "https://github.com/stack72",
          "avatar": "https://avatars.githubusercontent.com/u/227823"
        },
        {
          "username": "catsby",
          "href": "https://github.com/catsby",
          "avatar": "https://avatars.githubusercontent.com/u/61721"
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
      "forks": 765,
      "added_stars": 586,
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
      "author": "anthropics",
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5633,
      "added_stars": 5343,
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
      "forks": 6115,
      "added_stars": 26912,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7837,
      "added_stars": 38923,
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
          "username": "velixio",
          "href": "https://github.com/velixio",
          "avatar": "https://avatars.githubusercontent.com/u/270455167"
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
      "forks": 3380,
      "added_stars": 5827,
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
      "forks": 1228,
      "added_stars": 6877,
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
          "username": "Bosheng0422",
          "href": "https://github.com/Bosheng0422",
          "avatar": "https://avatars.githubusercontent.com/u/67680641"
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
      "forks": 12380,
      "added_stars": 15672,
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
      "forks": 3404,
      "added_stars": 3642,
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
          "username": "noobakong",
          "href": "https://github.com/noobakong",
          "avatar": "https://avatars.githubusercontent.com/u/34873469"
        }
      ]
    },
    {
      "author": "earthtojake",
      "repo": "text-to-cad",
      "avatar": "https://github.com/earthtojake.png",
      "repo_link": "https://github.com/earthtojake/text-to-cad",
      "desc": "Give your agent CAD superpowers.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2078,
      "added_stars": 5049,
      "builtBy": [
        {
          "username": "earthtojake",
          "href": "https://github.com/earthtojake",
          "avatar": "https://avatars.githubusercontent.com/u/10742417"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "warun7",
          "href": "https://github.com/warun7",
          "avatar": "https://avatars.githubusercontent.com/u/143688508"
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
      "forks": 3781,
      "added_stars": 2065,
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
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8645,
      "added_stars": 16286,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4867,
      "added_stars": 3972,
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
      "author": "pytorch",
      "repo": "pytorch",
      "avatar": "https://github.com/pytorch.png",
      "repo_link": "https://github.com/pytorch/pytorch",
      "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 32711,
      "added_stars": 2371,
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
      "author": "superdesigndev",
      "repo": "treg",
      "avatar": "https://github.com/superdesigndev.png",
      "repo_link": "https://github.com/superdesigndev/treg",
      "desc": "OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 458,
      "added_stars": 3951,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1792,
      "added_stars": 3026,
      "builtBy": [
        {
          "username": "rng1995",
          "href": "https://github.com/rng1995",
          "avatar": "https://avatars.githubusercontent.com/u/32655573"
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
        },
        {
          "username": "keshprad",
          "href": "https://github.com/keshprad",
          "avatar": "https://avatars.githubusercontent.com/u/32313895"
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
      "forks": 895,
      "added_stars": 1244,
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
      "author": "google",
      "repo": "artemis",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/artemis",
      "desc": "ARTEMIS turns natural-language instructions into reliable Android automation. It automates end-to-end workflows, captures logs, and integrates seamlessly with AI coding assistants such as Antigravity, Codex, and Claude Code. It also achieves 99%+ success rate on AndroidWorld Benchmark.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1315,
      "added_stars": 5756,
      "builtBy": [
        {
          "username": "somew1nd",
          "href": "https://github.com/somew1nd",
          "avatar": "https://avatars.githubusercontent.com/u/120092213"
        },
        {
          "username": "yaoyao-open-source",
          "href": "https://github.com/yaoyao-open-source",
          "avatar": "https://avatars.githubusercontent.com/u/315983021"
        },
        {
          "username": "farleyw-bit",
          "href": "https://github.com/farleyw-bit",
          "avatar": "https://avatars.githubusercontent.com/u/242523698"
        },
        {
          "username": "weilinliu",
          "href": "https://github.com/weilinliu",
          "avatar": "https://avatars.githubusercontent.com/u/19418430"
        },
        {
          "username": "jhshi1879",
          "href": "https://github.com/jhshi1879",
          "avatar": "https://avatars.githubusercontent.com/u/224312479"
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
      "forks": 749,
      "added_stars": 1550,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9080,
      "added_stars": 6998,
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
      "author": "docling-project",
      "repo": "docling",
      "avatar": "https://github.com/docling-project.png",
      "repo_link": "https://github.com/docling-project/docling",
      "desc": "Get your documents ready for gen AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5096,
      "added_stars": 2643,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "Mutative v2  - better immutability and faster immutable updates",
      "url": "https://github.com/unadlib/mutative",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-12T17:43:56.000Z"
    },
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
      "comments": "2",
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
      "title": "Dev Opportunity Radar #21: $500K Y Combinator Funding, Bolt Builders Week, and AI Safety Research Residency",
      "description": "TL;DR  Welcome back to Dev Opportunity Radar!  This is a weekly series where I share opportunities,...",
      "url": "https://dev.to/devengers/dev-opportunity-radar-21-500k-y-combinator-funding-bolt-builders-week-and-ai-safety-research-12b8",
      "tags": "discuss, community, opportunities, resources",
      "reactions": 57,
      "comments": 6,
      "reading_time": 10,
      "author": "hemapriya_kanagala"
    },
    {
      "title": "How I Feel about the Grace Hopper Celebration Getting Cancelled",
      "description": "The Grace Hopper Celebration has been around since 1994, and for a lot of people, it's the event for...",
      "url": "https://dev.to/jess/how-i-feel-about-the-grace-hopper-celebration-getting-cancelled-3l2k",
      "tags": "wecoded, news, dei, career",
      "reactions": 94,
      "comments": 11,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Don't Assume Your Cloud T4 Runs at Spec: Gemma 4 Decode Falls 7% as the Card Warms",
      "description": "The same Tesla T4 on the same Google Cloud VM decoded Gemma 4 E2B at 115 tokens/s at 45 °C and 107 at 77 °C. The card sits at its 70 W limit, a hotter chip draws more power at the same clock, so the clock drops. No thermal throttle fires, and no spec sheet mentions it.",
      "url": "https://dev.to/gde/dont-assume-your-cloud-t4-runs-at-spec-gemma-4-decode-falls-7-as-the-card-warms-3fd3",
      "tags": "nvidia, googlecloud, llm, performance",
      "reactions": 7,
      "comments": 1,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Do Drafters Work on Small Models? Gemma 4 E2B and E4B on Two Small GPUs",
      "description": "Yes. Speculative decoding with Google's 59 MB QAT multi-token prediction (MTP) drafters speeds up Gemma 4 E4B 1.72x and E2B 1.40x on an 8 GB RTX 3050, and 1.49x and 1.18x on a 4 GB laptop GTX 1650 Ti, served by llama.cpp one request at a time, with unchanged GSM8K and BFCL scores.",
      "url": "https://dev.to/gde/do-drafters-work-on-small-models-gemma-4-e2b-and-e4b-on-two-small-gpus-1b4g",
      "tags": "gemma, llamacpp, cuda, benchmarking",
      "reactions": 7,
      "comments": 0,
      "reading_time": 19,
      "author": "xbill"
    },
    {
      "title": "What was your win this week?!",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-36am",
      "tags": "weeklyretro",
      "reactions": 13,
      "comments": 13,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Congrats to the Hacktoberfest Open-Source AI Challenge: Touch Grass Winners!",
      "description": "We are so excited to announce the winners of the Hacktoberfest Open-Source AI Challenge: Touch...",
      "url": "https://dev.to/devteam/congrats-to-the-hacktoberfest-open-source-ai-challenge-touch-grass-winners-152c",
      "tags": "devchallenge, hf26challenge, hacktoberfest",
      "reactions": 34,
      "comments": 16,
      "reading_time": 4,
      "author": "heyitsjem"
    },
    {
      "title": "Building Production-Ready Open-Weights AI Agents with Gemma, Google ADK, and Cloud Run GPUs",
      "description": "How I designed, connected, scaled, governed, evaluated, and QLoRA fine-tuned an enterprise SecOps & FinOps agent on Google Cloud.",
      "url": "https://dev.to/gde/building-production-ready-open-weights-ai-agents-with-gemma-google-adk-and-cloud-run-gpus-2mfg",
      "tags": "googlecloud, ai, python, opensource",
      "reactions": 10,
      "comments": 2,
      "reading_time": 21,
      "author": "robinamirbahar"
    },
    {
      "title": "Are You Smarter Than a Fruit Fly?",
      "description": "Google mapped the complete male fruit fly brain, and my first question to an agent was “Can this run...",
      "url": "https://dev.to/dailycontext/are-you-smarter-than-a-fruit-fly-2c04",
      "tags": "ai, codereview, agents, aie",
      "reactions": 19,
      "comments": 1,
      "reading_time": 2,
      "author": "nicknisi"
    },
    {
      "title": "The AI Data Paradox: The Safer You Make the Data, the Worse the AI Gets",
      "description": "AI engineers spend enormous amounts of time tweaking small things to achieve bigger gains. Energy is...",
      "url": "https://dev.to/dailycontext/the-ai-data-paradox-the-safer-you-make-the-data-the-worse-the-ai-gets-1ek7",
      "tags": "ai, data, privacy, aie",
      "reactions": 12,
      "comments": 4,
      "reading_time": 3,
      "author": "thomasfairey"
    },
    {
      "title": "Design for Churn",
      "description": "The biggest design shift of the AI era isn’t about who writes the code. It’s about how long the code...",
      "url": "https://dev.to/dailycontext/design-for-churn-5c6h",
      "tags": "aie, design, churn, ai",
      "reactions": 48,
      "comments": 8,
      "reading_time": 3,
      "author": "ben"
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
      "title": "Some quick thoughts on Unit Testing ActivityPub",
      "url": "https://shkspr.mobi/blog/2026/10/some-thoughts-on-unit-testing-activitypub/",
      "score": 2,
      "comments": 0,
      "tags": [
        "php",
        "testing",
        "web"
      ],
      "id": "gwuebx"
    },
    {
      "title": "STAC-M3 Benchmark: L tick database 1.0 on Oxide OxVM w/ 128 vCPUs & 1.25 TiB of RAM",
      "url": "https://docs.stacresearch.com/M3-20261005a",
      "score": 2,
      "comments": 0,
      "tags": [
        "apl",
        "performance"
      ],
      "id": "oh4yfc"
    },
    {
      "title": "orib: Bringing back the old Reddit interface, with a few new enhancements",
      "url": "https://github.com/rajtilakjee/orib",
      "score": 1,
      "comments": 0,
      "tags": [
        "release",
        "vibecoding"
      ],
      "id": "pllfoa"
    },
    {
      "title": "I built the RealWorld app in Lean 4",
      "url": "https://leangineer.com/blog/realworld-in-lean/",
      "score": 1,
      "comments": 0,
      "tags": [
        "formalmethods"
      ],
      "id": "xctcdf"
    },
    {
      "title": "Interactive refactoring in gopls",
      "url": "https://go.dev/blog/interactive-refactoring",
      "score": 5,
      "comments": 0,
      "tags": [
        "editors",
        "go"
      ],
      "id": "wn293o"
    },
    {
      "title": "Do you let LLMs write both your tests and your code?",
      "url": "",
      "score": 4,
      "comments": 2,
      "tags": [
        "vibecoding"
      ],
      "id": "miwcai"
    },
    {
      "title": "How the Claude Code team does code review",
      "url": "https://claude.dev/blog/solving-code-review-at-anthropic/",
      "score": 0,
      "comments": 0,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "kufmuy"
    },
    {
      "title": "There's never been a better time to go into math",
      "url": "https://www.youtube.com/watch?v=LKrwhjOI8Nc",
      "score": 6,
      "comments": 4,
      "tags": [
        "math",
        "video"
      ],
      "id": "wzgadv"
    },
    {
      "title": "Someone on Torrent Sites Kept Fucking With My Sonarr",
      "url": "https://thereallo.dev/blog/someone-on-torrent-sites-kept-fucking-with-my-sonarr-setup",
      "score": 9,
      "comments": 3,
      "tags": [
        "rant",
        "reversing",
        "security"
      ],
      "id": "1zknyw"
    },
    {
      "title": "Linux kernel hides chatbot commits",
      "url": "https://www.youtube.com/watch?v=l9ARF2KcDgc",
      "score": 1,
      "comments": 0,
      "tags": [
        "linux",
        "vibecoding",
        "video"
      ],
      "id": "cyibkn"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "i_rush_carriers",
      "descendants": 43,
      "id": 50106747,
      "kids": [
        50128230,
        50127625,
        50128369,
        50128094,
        50127561,
        50128209,
        50127630,
        50127651,
        50127676,
        50128326,
        50128316,
        50127617,
        50127728,
        50128299,
        50127842,
        50127872,
        50127844
      ],
      "score": 149,
      "text": "<a href=\"https:&#x2F;&#x2F;www.paperinstruments.com&#x2F;blog&#x2F;ultramarine\">https:&#x2F;&#x2F;www.paperinstruments.com&#x2F;blog&#x2F;ultramarine</a><p><a href=\"https:&#x2F;&#x2F;twitter.com&#x2F;bertgodel&#x2F;status&#x2F;2110400987622265232\" rel=\"nofollow\">https:&#x2F;&#x2F;twitter.com&#x2F;bertgodel&#x2F;status&#x2F;2110400987622265232</a>",
      "time": 1792083961,
      "title": "Ultramarine 1 Flash",
      "type": "story",
      "url": "https://www.paperinstruments.com/ultramarine"
    },
    {
      "by": "shekhar101",
      "descendants": 2381,
      "id": 50112657,
      "kids": [
        50112892,
        50122496,
        50126413,
        50127578,
        50117967,
        50125747,
        50116632,
        50112792,
        50126909,
        50113027,
        50121486,
        50122593,
        50112695,
        50112735,
        50112808,
        50124670,
        50128298,
        50128347,
        50126500,
        50125595,
        50112717,
        50128239,
        50113636,
        50112911,
        50120315,
        50120355,
        50117509,
        50122802,
        50118522,
        50120699,
        50114776,
        50117679,
        50128346,
        50127118,
        50126039,
        50120142,
        50114341,
        50120926,
        50112983,
        50128401,
        50127770,
        50117414,
        50128319,
        50112828,
        50125434,
        50117785,
        50123857,
        50127177,
        50123301,
        50113125,
        50122349,
        50121166,
        50114887,
        50124006,
        50113450,
        50124143,
        50120806,
        50125129,
        50117508,
        50124633,
        50125687,
        50128227,
        50114281,
        50119988,
        50112738,
        50127510,
        50112718,
        50112779,
        50123957,
        50120448,
        50127519,
        50127677,
        50127990,
        50122388,
        50114166,
        50124092,
        50125848,
        50127638,
        50127030,
        50122073,
        50125020,
        50127497,
        50120005,
        50114302,
        50120949,
        50122433,
        50127803,
        50127244,
        50127414,
        50120198,
        50113371,
        50122407,
        50113401,
        50117280,
        50122219,
        50126381,
        50125224,
        50113951,
        50126822,
        50126473,
        50123755,
        50123856,
        50126845,
        50113023,
        50124636,
        50124362,
        50126123,
        50118980,
        50128229,
        50127870,
        50125260,
        50112811,
        50113109,
        50124763,
        50117979,
        50128186,
        50113182,
        50114991,
        50124364,
        50127156,
        50124957,
        50122088,
        50113230,
        50125920,
        50124363,
        50126171,
        50113014,
        50115035,
        50124502,
        50124740,
        50117794,
        50125006,
        50127227,
        50114395,
        50127473,
        50114736,
        50114679,
        50125295,
        50112901,
        50125492,
        50121091,
        50127192,
        50125780,
        50123671,
        50125769,
        50123684,
        50113136,
        50126162,
        50113175,
        50126153,
        50119409,
        50113869,
        50126524,
        50127580,
        50118873,
        50123891,
        50120267,
        50112732,
        50124260,
        50126664,
        50118742,
        50115384,
        50113715,
        50123042,
        50113112,
        50114865,
        50113055,
        50112844,
        50113693,
        50118238,
        50113688,
        50123357,
        50112966,
        50114816,
        50124002,
        50126479,
        50114015,
        50123673,
        50122037,
        50118185,
        50112740,
        50124325,
        50126763,
        50113143,
        50113999,
        50113129,
        50113634,
        50126294,
        50119184,
        50126291,
        50117702,
        50126627,
        50114578,
        50126058,
        50112807,
        50112848,
        50114433,
        50113070,
        50114050,
        50127262,
        50112724,
        50113923,
        50120053,
        50114813,
        50126528,
        50114770,
        50126801,
        50124986,
        50120226,
        50123696,
        50124055,
        50114899,
        50114280,
        50120237,
        50116183,
        50120460,
        50124337,
        50112820,
        50114826,
        50123766,
        50112870,
        50115159,
        50114354,
        50117615,
        50126598,
        50124470,
        50113292,
        50124321,
        50113174,
        50114396,
        50113491,
        50125729,
        50123104,
        50123229,
        50116609,
        50120091,
        50116006,
        50117698,
        50114576,
        50117841,
        50112884,
        50125704,
        50112946,
        50114285,
        50122681,
        50124297,
        50127319,
        50113852,
        50124266,
        50112922,
        50125276,
        50114269,
        50125110,
        50114629,
        50124862,
        50113242,
        50113199,
        50114920,
        50114065,
        50124105,
        50113090,
        50112810,
        50120177,
        50123597,
        50123077,
        50123074,
        50127602,
        50122949,
        50114917,
        50114872,
        50113432,
        50117861,
        50113105,
        50113366,
        50113177,
        50112896,
        50120145,
        50127944,
        50125795,
        50116567,
        50114802,
        50125002,
        50125490,
        50113114,
        50125024,
        50126207,
        50115148,
        50123904,
        50122515,
        50119429,
        50115059,
        50112842,
        50114911,
        50114814,
        50127556,
        50114527,
        50114898,
        50113756,
        50117820,
        50113474,
        50113351,
        50122125,
        50123745,
        50117605,
        50116357,
        50121818,
        50126716,
        50117719,
        50112809,
        50117543,
        50126328,
        50112806,
        50120104,
        50116980,
        50120257,
        50125043,
        50113254,
        50115333,
        50113233,
        50113997,
        50121861,
        50119875,
        50112702,
        50115402,
        50122640,
        50120148,
        50126061,
        50120604,
        50123867,
        50122805,
        50112908,
        50126711,
        50127025,
        50122487,
        50121856,
        50112846,
        50127776,
        50118381,
        50114712,
        50126239,
        50113192,
        50126496,
        50122557,
        50115055,
        50112726,
        50113051,
        50112862,
        50113829,
        50112778,
        50113020,
        50116545,
        50113092,
        50112861,
        50117599,
        50113097,
        50112819,
        50112713,
        50113104,
        50112790,
        50113864,
        50117663,
        50117920,
        50120308,
        50113188,
        50117712,
        50114096,
        50122380,
        50123553,
        50122977,
        50123973,
        50113185,
        50125146,
        50115104,
        50112708,
        50112706,
        50117723,
        50123682,
        50120193,
        50112764,
        50115390,
        50112843,
        50112880,
        50113036,
        50113744,
        50120296,
        50120098,
        50124174,
        50123910,
        50123009
      ],
      "score": 1340,
      "text": "<a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=7p5LxFdc-Qg\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=7p5LxFdc-Qg</a><p><a href=\"https:&#x2F;&#x2F;twitter.com&#x2F;Tesla&#x2F;status&#x2F;2110788059008819215\" rel=\"nofollow\">https:&#x2F;&#x2F;twitter.com&#x2F;Tesla&#x2F;status&#x2F;2110788059008819215</a>",
      "time": 1792114365,
      "title": "Tesla Roadster",
      "type": "story",
      "url": "https://www.tesla.com/roadster"
    },
    {
      "by": "Anon84",
      "descendants": 64,
      "id": 50122431,
      "kids": [
        50123827,
        50124135,
        50125287,
        50123729,
        50123946,
        50122938,
        50123097,
        50127564,
        50123819,
        50125016,
        50125674,
        50122901,
        50122982,
        50122987,
        50123304
      ],
      "score": 259,
      "time": 1792175555,
      "title": "Llama.cpp on a jailbroken PS5: run any GGUF model natively on the console",
      "type": "story",
      "url": "https://github.com/cobanov/PS5LM"
    },
    {
      "by": "ahlCVA",
      "descendants": 306,
      "id": 50122800,
      "kids": [
        50123213,
        50123125,
        50128456,
        50122897,
        50123292,
        50123044,
        50123370,
        50124417,
        50128479,
        50123212,
        50123075,
        50126361,
        50123090,
        50125761,
        50123232,
        50128438,
        50123601,
        50123168,
        50126604,
        50123332,
        50123291,
        50123275,
        50123145,
        50125682,
        50123533,
        50125076,
        50126554,
        50127401,
        50125580,
        50123124,
        50128095,
        50123923,
        50123558,
        50123089,
        50125527,
        50128101,
        50123482,
        50126673,
        50125156,
        50123485,
        50125289,
        50123814,
        50127883,
        50126281,
        50124869,
        50123142,
        50123059,
        50125749,
        50123339,
        50125089,
        50123261,
        50128093,
        50123183,
        50123344,
        50126406,
        50123184
      ],
      "score": 807,
      "text": "<a href=\"https:&#x2F;&#x2F;words.filippo.io&#x2F;seeds-solved&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;words.filippo.io&#x2F;seeds-solved&#x2F;</a>",
      "time": 1792176959,
      "title": "Claude reveals ECDSA curve origins",
      "type": "story",
      "url": "https://www.anthropic.com/research/ecdsa-curve-origins"
    },
    {
      "by": "speckx",
      "descendants": 61,
      "id": 50122878,
      "kids": [
        50126675,
        50125731,
        50125884,
        50127789,
        50125167,
        50126359,
        50126408,
        50126371,
        50125723,
        50125689,
        50125678,
        50126010,
        50124525
      ],
      "score": 237,
      "time": 1792177277,
      "title": "You could have invented transformers from memory",
      "type": "story",
      "url": "https://alexwang.ai/posts/associative-memory/"
    },
    {
      "by": "albinstman",
      "descendants": 1,
      "id": 50127979,
      "kids": [
        50128529,
        50128364
      ],
      "score": 11,
      "time": 1792211813,
      "title": "Show HN: Llmspeed – feel how fast a local LLM runs before you buy the hardware",
      "type": "story",
      "url": "https://llmspeed.dev/"
    },
    {
      "by": "danso",
      "descendants": 18,
      "id": 50088937,
      "kids": [
        50128162,
        50128212,
        50127978,
        50128030,
        50128354,
        50088938,
        50128039,
        50128090
      ],
      "score": 29,
      "time": 1791990958,
      "title": "California is building a $400M shield for Yosemite's most dangerous highway",
      "type": "story",
      "url": "https://www.sfchronicle.com/california/article/yosemite-national-park-highway-140-22463847.php"
    },
    {
      "by": "gmays",
      "descendants": 40,
      "id": 50123580,
      "kids": [
        50124131,
        50125351,
        50124379,
        50125239,
        50126216,
        50124707,
        50126289,
        50125548,
        50125486,
        50124694
      ],
      "score": 148,
      "time": 1792180033,
      "title": "FLUX 3 Image Klein",
      "type": "story",
      "url": "https://bfl.ai/blog/flux-3-image-klein"
    },
    {
      "by": "antipaul",
      "descendants": 147,
      "id": 50118320,
      "kids": [
        50119897,
        50119761,
        50120882,
        50119284,
        50121823,
        50119287,
        50121167,
        50120210,
        50120685,
        50127734,
        50121402,
        50120163,
        50120140,
        50121315,
        50119801,
        50119789
      ],
      "score": 298,
      "time": 1792158228,
      "title": "Apple ML Research: Muse Spark Open with MLX on Mac Studio",
      "type": "story",
      "url": "https://machinelearning.apple.com/research/mlx-distributed-inference"
    },
    {
      "by": "7402",
      "descendants": 163,
      "id": 50122034,
      "kids": [
        50123087,
        50122957,
        50122488,
        50122432,
        50122727,
        50123716,
        50123060,
        50122848,
        50124127,
        50122280,
        50123345,
        50125806,
        50126000,
        50123527,
        50126732,
        50122249,
        50124136,
        50122338,
        50122704,
        50123188,
        50124148,
        50122812,
        50125958,
        50123626,
        50123512,
        50122921,
        50122831,
        50122379,
        50122691,
        50126527,
        50125655,
        50122808,
        50122450
      ],
      "score": 209,
      "time": 1792173977,
      "title": "eBay Restricts Listings of Radio Equipment, but Exempts Ham-Band-Only Gear",
      "type": "story",
      "url": "https://www.arrl.org/arrlletterissue?issue=2026-10-15#eBay-Restricts-Listings-of-Radio-Equipment_-But-Exempts-Ham-Band-Only-Gear"
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
{
  "source": "reddit",
  "topic": "programming",
  "sort": "top",
  "items": [
    {
      "title": "Domain-Driven Design (DDD) — The Complete Guide | Visually Explained",
      "url": "https://youtu.be/0c2fj6z6Zso",
      "permalink": "https://www.reddit.com/r/programming/comments/1x7o6km/domaindriven_design_ddd_the_complete_guide/",
      "author": "/u/correctMeIfImcorrect",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Hey everyone! I just put out a video on Domain-Driven Design. It’s a long one, about 20 minutes, but I really believe it’s worth your time. It took me a lot of time to make, so I hope it helps you, and I’d love to hear what you think! 🙌 &#32; submitted by &#32; /u/correctMeIfImcorrect [link] &#32; [comments]",
      "published": "2026-10-16T18:34:45+00:00"
    },
    {
      "title": "Compression is prediction",
      "url": "https://ngrok.com/blog/compression-is-prediction",
      "permalink": "https://www.reddit.com/r/programming/comments/1x7x6dq/compression_is_prediction/",
      "author": "/u/fagnerbrack",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/fagnerbrack [link] &#32; [comments]",
      "published": "2026-10-17T01:00:59+00:00"
    },
    {
      "title": "Principles of Debugging",
      "url": "https://kciter.so/posts/principles-of-debugging/en/",
      "permalink": "https://www.reddit.com/r/programming/comments/1x7dlgl/principles_of_debugging/",
      "author": "/u/kciter",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/kciter [link] &#32; [comments]",
      "published": "2026-10-16T11:22:54+00:00"
    },
    {
      "title": "Learning Postgres extensions using Zig",
      "url": "https://barddoo.com/posts/learning-postgres-as-a-zig-developer",
      "permalink": "https://www.reddit.com/r/programming/comments/1x7mmu6/learning_postgres_extensions_using_zig/",
      "author": "/u/pseudocharleskk",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/pseudocharleskk [link] &#32; [comments]",
      "published": "2026-10-16T17:36:14+00:00"
    },
    {
      "title": "Improving heuristics for A* search",
      "url": "https://www.redblobgames.com/pathfinding/heuristics/differential.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1x80isg/improving_heuristics_for_a_search/",
      "author": "/u/fagnerbrack",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/fagnerbrack [link] &#32; [comments]",
      "published": "2026-10-17T04:00:54+00:00"
    },
    {
      "title": "Freedoom on AWS Lambda Web Functions",
      "url": "https://www.wooditwork.com/freedoom-on-lambda-web-functions/",
      "permalink": "https://www.reddit.com/r/programming/comments/1x7hz86/freedoom_on_aws_lambda_web_functions/",
      "author": "/u/mariuz",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/mariuz [link] &#32; [comments]",
      "published": "2026-10-16T14:38:45+00:00"
    },
    {
      "title": "Sudocrypt v16.0 is back! Our international CTF is happening this October",
      "url": "https://sudocrypt.com/",
      "permalink": "https://www.reddit.com/r/programming/comments/1x7h9cz/sudocrypt_v160_is_back_our_international_ctf_is/",
      "author": "/u/v_pun215",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Hey everyone! We&#39;re Exun Clan, the student-run tech club at DPS R.K. Puram, New Delhi, and we&#39;re back with the 16th edition of Sudocrypt, our flagship international CTF! Sudocrypt is an international Cryptic Hunt x Capture The Flag (CTF) event where participants from around the world tackle a series of cybersecurity and cryptic challenges. Expect code-breaking, cryptography, and plenty of problem-solving as you work your way through the levels. The competition is entirely online, so you can participate from anywhere in the world. Dates: October 27–28, 2026 Prizes: With a prize pool of over $900 USD in previous editions , along with over $500 USD in goodies and prizes , Sudocrypt v16.0 promises an exciting challenge for cryptic enthusiasts and CTF players alike. Event website: https://sudocrypt.com/ CTFtime listing: https://ctftime.org/event/3443/ You can also check out the other events at Exun 2026 here: https://exun.co/26/events Hope to see you on the scoreboard! &#32; submitted by &#32; /u/v_pun215 [link] &#32; [comments]",
      "published": "2026-10-16T14:09:59+00:00"
    },
    {
      "title": "Same JavaScript file plays Tetris in the browser and Snake after formatting",
      "url": "https://trustsig.eu/blog/javascript-divergence/",
      "permalink": "https://www.reddit.com/r/programming/comments/1x7v2i1/same_javascript_file_plays_tetris_in_the_browser/",
      "author": "/u/trustsigRobert",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "A formatter, minifier or deobfuscator can be made to turn one script into another. &#32; submitted by &#32; /u/trustsigRobert [link] &#32; [comments]",
      "published": "2026-10-16T23:18:20+00:00"
    }
  ]
}
- Fetching feeds...
{
  "source": "devto",
  "tag": "career",
  "sort": "top",
  "items": [
    {
      "title": "What Are Your Chances of Surviving Resident Evil Based on Your Tech Job?",
      "description": "I recently watched the new Resident Evil movie. 🎬  Watching the main character stumble from one...",
      "url": "https://dev.to/xulingfeng/what-are-your-chances-of-surviving-resident-evil-based-on-your-tech-job-4b9o",
      "tags": "discuss, career, jokes, programming",
      "reactions": 88,
      "comments": 55,
      "reading_time": 6,
      "author": "xulingfeng"
    },
    {
      "title": "How I Feel about the Grace Hopper Celebration Getting Cancelled",
      "description": "The Grace Hopper Celebration has been around since 1994, and for a lot of people, it's the event for...",
      "url": "https://dev.to/jess/how-i-feel-about-the-grace-hopper-celebration-getting-cancelled-3l2k",
      "tags": "wecoded, news, dei, career",
      "reactions": 94,
      "comments": 11,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "AI Made Your Easy Work Free. That Made You More Valuable.",
      "description": "Let's start by admitting the scary part is true, because the whole argument falls apart if I pretend...",
      "url": "https://dev.to/james_anderson_h/ai-made-your-easy-work-free-that-made-you-more-valuable-413f",
      "tags": "ai, career, softwareengineering, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "james_anderson_h"
    },
    {
      "title": "Are You Late to AI?",
      "description": "\"Are You Late to AI? (Why Right Now is Actually 2005 for Web Dev)\"   Every single day, your...",
      "url": "https://dev.to/ibuildai/are-you-late-to-ai-5694",
      "tags": "ai, career, hacktoberfest, webdev",
      "reactions": 0,
      "comments": 2,
      "reading_time": 4,
      "author": "ibuildai"
    },
    {
      "title": "Google Jobs near a city, with the distance to each job, in Python",
      "description": "Search Google Jobs for \"nurse jobs Golden, CO\" and you get jobs in Golden. Not in Lakewood, 13 km...",
      "url": "https://dev.to/famed-bonobo/google-jobs-near-a-city-with-the-distance-to-each-job-in-python-hl6",
      "tags": "python, api, career, datascience",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "famed-bonobo"
    },
    {
      "title": "The forward-deployed engineer bootcamp · 1. What a forward-deployed engineer is, and why the role exists now",
      "description": "The forward-deployed engineer bootcamp · Chapter 1 of 12 · Career · new chapter every Saturday...",
      "url": "https://dev.to/techamit95ch/the-forward-deployed-engineer-bootcamp-1-what-a-forward-deployed-engineer-is-and-why-the-role-7ii",
      "tags": "tutorial, career, theforward, whyhastheroleexplodedsince2020",
      "reactions": 0,
      "comments": 0,
      "reading_time": 10,
      "author": "techamit95ch"
    },
    {
      "title": "Why I Built Codnite: An All-In-One Developer Arena with 1,200+ Native Problems, Real-Time 1v1 Duels, Campus Hackathons, and a Cloud Studio",
      "description": "Grinding algorithmic problems on traditional coding platforms has a massive fundamental issue: it...",
      "url": "https://dev.to/shaddy_dev/why-i-built-codnite-an-all-in-one-developer-arena-with-1200-native-problems-real-time-1v1-34gd",
      "tags": "webdev, programming, opensource, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "shaddy_dev"
    },
    {
      "title": "Every paying job on the board needed a human face",
      "description": "I read the whole board today. Every open bounty, the entire paying queue, looking for one job an...",
      "url": "https://dev.to/whalejr/every-paying-job-on-the-board-needed-a-human-face-1j1a",
      "tags": "ai, career, agents, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "whalejr"
    },
    {
      "title": "Translating Technical Debt",
      "description": "What technical debt actually means, and how to explain it to someone who doesn't write...",
      "url": "https://dev.to/naw103/translating-technical-debt-1ohi",
      "tags": "technicaldebt, leadership, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "naw103"
    },
    {
      "title": "The Cold-Start Budget Packet: A Take-Home Where the Free Server Is Allowed to Vanish",
      "description": "A take-home that never simulates a host restart measures almost nothing about cost discipline. The...",
      "url": "https://dev.to/appjs_3979/the-cold-start-budget-packet-a-take-home-where-the-free-server-is-allowed-to-vanish-30p0",
      "tags": "testing, node, career, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "appjs_3979"
    }
  ]
}
```

