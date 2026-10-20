# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-10-20 06:38:34 UTC

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
      "forks": 85771,
      "added_stars": 201065,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2368,
      "added_stars": 4224,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6128,
      "added_stars": 5945,
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
      "forks": 1287,
      "added_stars": 1975,
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
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9116,
      "added_stars": 2543,
      "builtBy": [
        {
          "username": "ruvnet",
          "href": "https://github.com/ruvnet",
          "avatar": "https://avatars.githubusercontent.com/u/2934394"
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
          "username": "proffesor-for-testing",
          "href": "https://github.com/proffesor-for-testing",
          "avatar": "https://avatars.githubusercontent.com/u/214853444"
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
      "forks": 3049,
      "added_stars": 1694,
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
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for small context windows (a 100K context is enough), token savings (5x fewer tokens), and month-long single sessions (billions of tokens).上下文压缩插件，兼顾小窗口(100k上下文足矣)省token(省5倍token)和超长会话(数月级别几十亿token单会话)。billion-context is all you need",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 181,
      "added_stars": 924,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5103,
      "added_stars": 3789,
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
      "author": "LibreSpark",
      "repo": "LibreTV",
      "avatar": "https://github.com/LibreSpark.png",
      "repo_link": "https://github.com/LibreSpark/LibreTV",
      "desc": "一分钟搭建影视站，支持Docker等部署方式",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 29434,
      "added_stars": 5421,
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
      "forks": 858,
      "added_stars": 2810,
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
          "username": "yakult-green-tea",
          "href": "https://github.com/yakult-green-tea",
          "avatar": "https://avatars.githubusercontent.com/u/143932026"
        }
      ]
    },
    {
      "author": "corrinehu",
      "repo": "dsh-workbuddy-connect",
      "avatar": "https://github.com/corrinehu.png",
      "repo_link": "https://github.com/corrinehu/dsh-workbuddy-connect",
      "desc": "将 WorkBuddy 桌面 App 包含的模型自动接入 DeepSeek Harness，零配置使用。Bring the models in the WorkBuddy desktop app into DeepSeek Harness with zero configuration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 140,
      "added_stars": 891,
      "builtBy": [
        {
          "username": "corrinehu",
          "href": "https://github.com/corrinehu",
          "avatar": "https://avatars.githubusercontent.com/u/202069267"
        },
        {
          "username": "cli0xfa",
          "href": "https://github.com/cli0xfa",
          "avatar": "https://avatars.githubusercontent.com/u/175678304"
        },
        {
          "username": "LYS86",
          "href": "https://github.com/LYS86",
          "avatar": "https://avatars.githubusercontent.com/u/106499400"
        },
        {
          "username": "zfjoy520",
          "href": "https://github.com/zfjoy520",
          "avatar": "https://avatars.githubusercontent.com/u/91816"
        },
        {
          "username": "JeffTsuiCUG",
          "href": "https://github.com/JeffTsuiCUG",
          "avatar": "https://avatars.githubusercontent.com/u/34744908"
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
      "forks": 3004,
      "added_stars": 1720,
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
      "author": "Renhuai123",
      "repo": "ziwei-doushu",
      "avatar": "https://github.com/Renhuai123.png",
      "repo_link": "https://github.com/Renhuai123/ziwei-doushu",
      "desc": "紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1026,
      "added_stars": 753,
      "builtBy": [
        {
          "username": "Renhuai123",
          "href": "https://github.com/Renhuai123",
          "avatar": "https://avatars.githubusercontent.com/u/91890238"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Renhuai",
          "href": "https://github.com/Renhuai",
          "avatar": "https://avatars.githubusercontent.com/u/108378938"
        },
        {
          "username": "sakura168899-debug",
          "href": "https://github.com/sakura168899-debug",
          "avatar": "https://avatars.githubusercontent.com/u/289346330"
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
      "forks": 355,
      "added_stars": 598,
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
      "author": "krillinai",
      "repo": "OpenCreator",
      "avatar": "https://github.com/krillinai.png",
      "repo_link": "https://github.com/krillinai/OpenCreator",
      "desc": "Formerly KrillinAI, VideoTranslation and Dubbing Tool. Open-source AI workspace for creators, powered by Codex. Video downloading, video translation, create videos, images, voice, avatars, and edits with Agents in one place. Suitable for your Social Media like YouTube, TikTok, Instagram, etc.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1507,
      "added_stars": 968,
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
          "username": "Mijaelx",
          "href": "https://github.com/Mijaelx",
          "avatar": "https://avatars.githubusercontent.com/u/11897139"
        }
      ]
    },
    {
      "author": "CopilotKit",
      "repo": "OpenIntelligentUI",
      "avatar": "https://github.com/CopilotKit.png",
      "repo_link": "https://github.com/CopilotKit/OpenIntelligentUI",
      "desc": "Open-Source Generative UI Framework",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 401,
      "added_stars": 661,
      "builtBy": [
        {
          "username": "jerelvelarde",
          "href": "https://github.com/jerelvelarde",
          "avatar": "https://avatars.githubusercontent.com/u/85066839"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "breadoncee",
          "href": "https://github.com/breadoncee",
          "avatar": "https://avatars.githubusercontent.com/u/85142601"
        },
        {
          "username": "NathanTarbert",
          "href": "https://github.com/NathanTarbert",
          "avatar": "https://avatars.githubusercontent.com/u/66887028"
        },
        {
          "username": "jpr5",
          "href": "https://github.com/jpr5",
          "avatar": "https://avatars.githubusercontent.com/u/86957"
        }
      ]
    },
    {
      "author": "anomalyco",
      "repo": "opencode",
      "avatar": "https://github.com/anomalyco.png",
      "repo_link": "https://github.com/anomalyco/opencode",
      "desc": "The open source coding agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 29140,
      "added_stars": 4917,
      "builtBy": [
        {
          "username": "thdxr",
          "href": "https://github.com/thdxr",
          "avatar": "https://avatars.githubusercontent.com/u/826656"
        },
        {
          "username": "rekram1-node",
          "href": "https://github.com/rekram1-node",
          "avatar": "https://avatars.githubusercontent.com/u/63023139"
        },
        {
          "username": "adamdotdevin",
          "href": "https://github.com/adamdotdevin",
          "avatar": "https://avatars.githubusercontent.com/u/2363879"
        },
        {
          "username": "kitlangton",
          "href": "https://github.com/kitlangton",
          "avatar": "https://avatars.githubusercontent.com/u/7587245"
        }
      ]
    },
    {
      "author": "thesysdev",
      "repo": "openui",
      "avatar": "https://github.com/thesysdev.png",
      "repo_link": "https://github.com/thesysdev/openui",
      "desc": "The Open Standard for Generative UI",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 831,
      "added_stars": 1353,
      "builtBy": [
        {
          "username": "i-subham23",
          "href": "https://github.com/i-subham23",
          "avatar": "https://avatars.githubusercontent.com/u/173032156"
        },
        {
          "username": "AbhinRustagi",
          "href": "https://github.com/AbhinRustagi",
          "avatar": "https://avatars.githubusercontent.com/u/55152006"
        },
        {
          "username": "ankit-thesys",
          "href": "https://github.com/ankit-thesys",
          "avatar": "https://avatars.githubusercontent.com/u/173031316"
        },
        {
          "username": "abhithesys",
          "href": "https://github.com/abhithesys",
          "avatar": "https://avatars.githubusercontent.com/u/157345590"
        },
        {
          "username": "zahlekhan",
          "href": "https://github.com/zahlekhan",
          "avatar": "https://avatars.githubusercontent.com/u/27266434"
        }
      ]
    },
    {
      "author": "ErTasselli",
      "repo": "OpenTerminal",
      "avatar": "https://github.com/ErTasselli.png",
      "repo_link": "https://github.com/ErTasselli/OpenTerminal",
      "desc": "A Terminal-style trading dashboard built entirely on free public market data. No API keys, no subscriptions.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 327,
      "added_stars": 428,
      "builtBy": [
        {
          "username": "ErTasselli",
          "href": "https://github.com/ErTasselli",
          "avatar": "https://avatars.githubusercontent.com/u/231684775"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "pranavmishra90",
          "href": "https://github.com/pranavmishra90",
          "avatar": "https://avatars.githubusercontent.com/u/62562712"
        },
        {
          "username": "philipsorensen",
          "href": "https://github.com/philipsorensen",
          "avatar": "https://avatars.githubusercontent.com/u/5397535"
        },
        {
          "username": "ameyxd",
          "href": "https://github.com/ameyxd",
          "avatar": "https://avatars.githubusercontent.com/u/9637807"
        }
      ]
    },
    {
      "author": "elie222",
      "repo": "rakazo",
      "avatar": "https://github.com/elie222.png",
      "repo_link": "https://github.com/elie222/rakazo",
      "desc": "Open-source Grok Bot alternative. Choose your own model and sandbox.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 878,
      "added_stars": 958,
      "builtBy": [
        {
          "username": "elie222",
          "href": "https://github.com/elie222",
          "avatar": "https://avatars.githubusercontent.com/u/3090527"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "fetw882",
          "href": "https://github.com/fetw882",
          "avatar": "https://avatars.githubusercontent.com/u/121428752"
        },
        {
          "username": "ald3b",
          "href": "https://github.com/ald3b",
          "avatar": "https://avatars.githubusercontent.com/u/3642270"
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
      "forks": 607,
      "added_stars": 3612,
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
      "author": "Tencent",
      "repo": "WeKnora",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/WeKnora",
      "desc": "Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4641,
      "added_stars": 7550,
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
      "author": "caddyserver",
      "repo": "caddy",
      "avatar": "https://github.com/caddyserver.png",
      "repo_link": "https://github.com/caddyserver/caddy",
      "desc": "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5164,
      "added_stars": 2478,
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
      "forks": 780,
      "added_stars": 786,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 18424,
      "added_stars": 3319,
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
      "author": "google",
      "repo": "ax",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/ax",
      "desc": "Agent Executor (AX) is Google's open agentic orchestration runtime",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 724,
      "added_stars": 12038,
      "builtBy": [
        {
          "username": "rakyll",
          "href": "https://github.com/rakyll",
          "avatar": "https://avatars.githubusercontent.com/u/108380"
        },
        {
          "username": "joycel-github",
          "href": "https://github.com/joycel-github",
          "avatar": "https://avatars.githubusercontent.com/u/11900208"
        },
        {
          "username": "wjjclaud",
          "href": "https://github.com/wjjclaud",
          "avatar": "https://avatars.githubusercontent.com/u/14038238"
        },
        {
          "username": "anj-s",
          "href": "https://github.com/anj-s",
          "avatar": "https://avatars.githubusercontent.com/u/32556631"
        },
        {
          "username": "zbl94",
          "href": "https://github.com/zbl94",
          "avatar": "https://avatars.githubusercontent.com/u/106645026"
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
      "forks": 5005,
      "added_stars": 6773,
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
      "forks": 1951,
      "added_stars": 78,
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
      "forks": 523,
      "added_stars": 1249,
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
      "added_stars": 1854,
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
      "forks": 557,
      "added_stars": 528,
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
      "author": "trufflesecurity",
      "repo": "trufflehog",
      "avatar": "https://github.com/trufflesecurity.png",
      "repo_link": "https://github.com/trufflesecurity/trufflehog",
      "desc": "Find, verify, and analyze leaked credentials",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2652,
      "added_stars": 671,
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
      "author": "kubernetes",
      "repo": "kubernetes",
      "avatar": "https://github.com/kubernetes.png",
      "repo_link": "https://github.com/kubernetes/kubernetes",
      "desc": "Production-Grade Container Scheduling and Management",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 47474,
      "added_stars": 1385,
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
      "author": "github",
      "repo": "gh-aw",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/gh-aw",
      "desc": "GitHub Agentic Workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 596,
      "added_stars": 297,
      "builtBy": [
        {
          "username": "pelikhan",
          "href": "https://github.com/pelikhan",
          "avatar": "https://avatars.githubusercontent.com/u/4175913"
        },
        {
          "username": "dsyme",
          "href": "https://github.com/dsyme",
          "avatar": "https://avatars.githubusercontent.com/u/7204669"
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
      "added_stars": 257,
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
      "author": "prometheus",
      "repo": "prometheus",
      "avatar": "https://github.com/prometheus.png",
      "repo_link": "https://github.com/prometheus/prometheus",
      "desc": "The Prometheus monitoring system and time series database.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10933,
      "added_stars": 833,
      "builtBy": [
        {
          "username": "fabxc",
          "href": "https://github.com/fabxc",
          "avatar": "https://avatars.githubusercontent.com/u/4948210"
        },
        {
          "username": "juliusv",
          "href": "https://github.com/juliusv",
          "avatar": "https://avatars.githubusercontent.com/u/538008"
        },
        {
          "username": "beorn7",
          "href": "https://github.com/beorn7",
          "avatar": "https://avatars.githubusercontent.com/u/5609886"
        },
        {
          "username": "bboreham",
          "href": "https://github.com/bboreham",
          "avatar": "https://avatars.githubusercontent.com/u/8125524"
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
      "forks": 22735,
      "added_stars": 1476,
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
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6014,
      "added_stars": 658,
      "builtBy": [
        {
          "username": "RPRX",
          "href": "https://github.com/RPRX",
          "avatar": "https://avatars.githubusercontent.com/u/63339210"
        },
        {
          "username": "Fangliding",
          "href": "https://github.com/Fangliding",
          "avatar": "https://avatars.githubusercontent.com/u/45535409"
        },
        {
          "username": "yuhan6665",
          "href": "https://github.com/yuhan6665",
          "avatar": "https://avatars.githubusercontent.com/u/1588741"
        },
        {
          "username": "LjhAUMEM",
          "href": "https://github.com/LjhAUMEM",
          "avatar": "https://avatars.githubusercontent.com/u/188819646"
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
      "forks": 636,
      "added_stars": 1147,
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
      "author": "docker",
      "repo": "compose",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/compose",
      "desc": "Define and run multi-container applications with Docker",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5874,
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
      "author": "guohuiyuan",
      "repo": "go-music-dl",
      "avatar": "https://github.com/guohuiyuan.png",
      "repo_link": "https://github.com/guohuiyuan/go-music-dl",
      "desc": "一个基于 Go 语言的全网音乐搜索与下载工具。支持 CLI 命令行与 Web 服务双模式，内置网易云、QQ、酷狗、Bilibili、汽水音乐等 10+ 个主流平台，支持多源并发搜索与无损音质解析。music-dl交流群：755087923",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 522,
      "added_stars": 1089,
      "builtBy": [
        {
          "username": "guohuiyuan",
          "href": "https://github.com/guohuiyuan",
          "avatar": "https://avatars.githubusercontent.com/u/54976075"
        },
        {
          "username": "lianhong2758",
          "href": "https://github.com/lianhong2758",
          "avatar": "https://avatars.githubusercontent.com/u/108398856"
        },
        {
          "username": "Zorabi",
          "href": "https://github.com/Zorabi",
          "avatar": "https://avatars.githubusercontent.com/u/25627222"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "nannyu",
          "href": "https://github.com/nannyu",
          "avatar": "https://avatars.githubusercontent.com/u/31527323"
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
      "forks": 1388,
      "added_stars": 331,
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
      "author": "hashicorp",
      "repo": "terraform",
      "avatar": "https://github.com/hashicorp.png",
      "repo_link": "https://github.com/hashicorp/terraform",
      "desc": "Terraform enables you to safely and predictably create, change, and improve infrastructure. It is a source-available tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10652,
      "added_stars": 512,
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
      "author": "seaweedfs",
      "repo": "seaweedfs",
      "avatar": "https://github.com/seaweedfs.png",
      "repo_link": "https://github.com/seaweedfs/seaweedfs",
      "desc": "SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3076,
      "added_stars": 833,
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
      "forks": 8541,
      "added_stars": 44161,
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
      "author": "vectorize-io",
      "repo": "hindsight",
      "avatar": "https://github.com/vectorize-io.png",
      "repo_link": "https://github.com/vectorize-io/hindsight",
      "desc": "Hindsight: Agent Memory That Learns",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6176,
      "added_stars": 27932,
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
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5660,
      "added_stars": 5573,
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3451,
      "added_stars": 5489,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4575,
      "added_stars": 6772,
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
          "username": "mhegazy",
          "href": "https://github.com/mhegazy",
          "avatar": "https://avatars.githubusercontent.com/u/8000722"
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
      "forks": 12581,
      "added_stars": 16662,
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
      "author": "TencentCloud",
      "repo": "Octop",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/Octop",
      "desc": "A smarter, self-hosted AI assistant — multi-user, multi-agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1319,
      "added_stars": 6077,
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
          "username": "Bosheng0422",
          "href": "https://github.com/Bosheng0422",
          "avatar": "https://avatars.githubusercontent.com/u/67680641"
        },
        {
          "username": "liukewia",
          "href": "https://github.com/liukewia",
          "avatar": "https://avatars.githubusercontent.com/u/50489030"
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
      "forks": 2145,
      "added_stars": 5595,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4997,
      "added_stars": 5545,
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3419,
      "added_stars": 3696,
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
      "author": "davila7",
      "repo": "claude-code-templates",
      "avatar": "https://github.com/davila7.png",
      "repo_link": "https://github.com/davila7/claude-code-templates",
      "desc": "CLI tool for configuring and monitoring Claude Code",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3800,
      "added_stars": 2094,
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
      "forks": 8826,
      "added_stars": 16719,
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
      "author": "strands-agents",
      "repo": "harness-sdk",
      "avatar": "https://github.com/strands-agents.png",
      "repo_link": "https://github.com/strands-agents/harness-sdk",
      "desc": "Build an agent harness and control it end-to-end. Open-source SDK for production AI agents in Python & TypeScript - any model, any cloud.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1399,
      "added_stars": 1536,
      "builtBy": [
        {
          "username": "zastrowm",
          "href": "https://github.com/zastrowm",
          "avatar": "https://avatars.githubusercontent.com/u/3211021"
        },
        {
          "username": "pgrayy",
          "href": "https://github.com/pgrayy",
          "avatar": "https://avatars.githubusercontent.com/u/204914194"
        },
        {
          "username": "strands-agent",
          "href": "https://github.com/strands-agent",
          "avatar": "https://avatars.githubusercontent.com/u/217235299"
        },
        {
          "username": "yonib05",
          "href": "https://github.com/yonib05",
          "avatar": "https://avatars.githubusercontent.com/u/5503597"
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
      "forks": 32921,
      "added_stars": 2466,
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
      "forks": 758,
      "added_stars": 1563,
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
      "author": "superdesigndev",
      "repo": "treg",
      "avatar": "https://github.com/superdesigndev.png",
      "repo_link": "https://github.com/superdesigndev/treg",
      "desc": "OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 491,
      "added_stars": 4151,
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
      "author": "tile-ai",
      "repo": "tilelang",
      "avatar": "https://github.com/tile-ai.png",
      "repo_link": "https://github.com/tile-ai/tilelang",
      "desc": "Domain-specific language designed to streamline the development of high-performance GPU/CPU/Accelerators kernels",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 905,
      "added_stars": 1248,
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
      "author": "ahujasid",
      "repo": "mcp-for-blender",
      "avatar": "https://github.com/ahujasid.png",
      "repo_link": "https://github.com/ahujasid/mcp-for-blender",
      "desc": "Community plugin to control Blender 3D with any LLM of your choice. Not affiliated with the official Blender Foundation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3003,
      "added_stars": 2740,
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
      "author": "topoteretes",
      "repo": "cognee",
      "avatar": "https://github.com/topoteretes.png",
      "repo_link": "https://github.com/topoteretes/cognee",
      "desc": "Cognee is the open-source AI memory platform for agents. Give your AI agents persistent long-term memory with small models for free",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3415,
      "added_stars": 1869,
      "builtBy": [
        {
          "username": "dexters1",
          "href": "https://github.com/dexters1",
          "avatar": "https://avatars.githubusercontent.com/u/30923996"
        },
        {
          "username": "Vasilije1990",
          "href": "https://github.com/Vasilije1990",
          "avatar": "https://avatars.githubusercontent.com/u/8619304"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "hajdul88",
          "href": "https://github.com/hajdul88",
          "avatar": "https://avatars.githubusercontent.com/u/52442977"
        },
        {
          "username": "borisarzentar",
          "href": "https://github.com/borisarzentar",
          "avatar": "https://avatars.githubusercontent.com/u/5081379"
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
      "title": "Levelrail: free, self-hosted alternative to Vercel, Heroku, Railway, Coolify and Dokku",
      "url": "https://github.com/glincker/levelrail",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-19T15:30:33.000Z"
    },
    {
      "title": "kafka-harbor: the Kafka layer every Node.js team rebuilds by hand, done once",
      "url": "https://dev.to/pinceladasdaweb/kafka-harbor-the-kafka-layer-every-nodejs-team-rebuilds-by-hand-done-once-35id",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-19T12:51:32.000Z"
    },
    {
      "title": "Croft: Typed data pipeline – in TypeScript and DuckDB",
      "url": "https://croft.zabaca.com/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-19T00:56:56.000Z"
    },
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
      "title": "Promise Delivered: Welcome to the DEV Hall of Fame (65 Authors, 65 Masterpieces)",
      "description": "Status: Promise delivered ✅              The Doors Are Open   A little over a month ago, I published...",
      "url": "https://dev.to/georgekobaidze/promise-delivered-welcome-to-the-dev-hall-of-fame-65-authors-65-masterpieces-15fa",
      "tags": "community, discuss, showdev, writing",
      "reactions": 169,
      "comments": 87,
      "reading_time": 25,
      "author": "georgekobaidze"
    },
    {
      "title": "Can a 26B MoE Run on an 8 GB GPU? Gemma 4 26B A4B on an RTX 3050",
      "description": "Gemma 4 26B A4B, a 14.4 GB mixture-of-experts model, serves from an 8 GB RTX 3050 with most of its experts in system RAM: 131,072 tokens of context, 28 to 34 tok/s empty, and GSM8K and BFCL scores level with the 12B.",
      "url": "https://dev.to/gde/can-a-26b-moe-run-on-an-8-gb-gpu-gemma-4-26b-a4b-on-an-rtx-3050-2efn",
      "tags": "gemma, llamacpp, cuda, benchmarking",
      "reactions": 9,
      "comments": 0,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Join the Hacktoberfest Open-Source AI Challenge: Slow and Steady! $2,850 in Prizes Across 21 Winners.",
      "description": "Week 3 of our five Hacktoberfest DEV Challenges starts today! Running through October 25, the...",
      "url": "https://dev.to/devteam/join-the-hacktoberfest-open-source-ai-challenge-slow-and-steady-2850-in-prizes-across-21-3iee",
      "tags": "devchallenge, hf26challenge, hacktoberfest, productivity",
      "reactions": 56,
      "comments": 4,
      "reading_time": 7,
      "author": "heyitsjem"
    },
    {
      "title": "Stress-Testing Gemini 4 Argon: Building a 3D Flutter Kart Game in 15 Prompts with Zero Assets",
      "description": "Most AI coding benchmarks test standard web apps or CRUD dashboards. Frontier models can already...",
      "url": "https://dev.to/gde/stress-testing-gemini-4-argon-building-a-3d-flutter-kart-game-in-15-prompts-with-zero-assets-55ha",
      "tags": "flutter, ai, webassembly, gamedev",
      "reactions": 14,
      "comments": 1,
      "reading_time": 6,
      "author": "leehack"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-2hle",
      "tags": "discuss, watercooler, jokes",
      "reactions": 36,
      "comments": 24,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "What was your win this week?!",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-36am",
      "tags": "weeklyretro",
      "reactions": 31,
      "comments": 37,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Natural Languages Have Design Trade-offs Too: Georgian Is Dynamically Typed, English Is Statically Typed",
      "description": "Table of Contents    How This Started  Feature #1: Articles (or the Lack of Them)   The...",
      "url": "https://dev.to/georgekobaidze/natural-languages-have-design-trade-offs-too-georgian-is-dynamically-typed-english-is-statically-emi",
      "tags": "programming, writing, design, languages",
      "reactions": 107,
      "comments": 62,
      "reading_time": 10,
      "author": "georgekobaidze"
    },
    {
      "title": "Autonomous agent loops with Gemini 4 Argon and GKE Agent Sandbox: Running untrusted code safely at scale",
      "description": "Run untrusted LLM-generated Python and Bash code safely at scale using Gemini 4 Argon and GKE Agent Sandbox with gVisor isolation.",
      "url": "https://dev.to/googlecloud/autonomous-agent-loops-with-gemini-4-argon-and-gke-agent-sandbox-running-untrusted-code-safely-at-2k60",
      "tags": "kubernetes, ai, gke, googlecloud",
      "reactions": 5,
      "comments": 0,
      "reading_time": 9,
      "author": "olivi-eh"
    },
    {
      "title": "Dev Opportunity Radar #21: $500K Y Combinator Funding, Bolt Builders Week, and AI Safety Research Residency",
      "description": "TL;DR  Welcome back to Dev Opportunity Radar!  This is a weekly series where I share opportunities,...",
      "url": "https://dev.to/devengers/dev-opportunity-radar-21-500k-y-combinator-funding-bolt-builders-week-and-ai-safety-research-12b8",
      "tags": "discuss, community, opportunities, resources",
      "reactions": 89,
      "comments": 9,
      "reading_time": 10,
      "author": "hemapriya_kanagala"
    },
    {
      "title": "[AI in Practice] Upgrading from Gemini 3.5/3.6 to Gemini 4 Argon: Migration Notes and Pitfalls for LINE Bot Developers",
      "description": "Background   I have a LINE Bot that I use every day, linebot-helper-python. I use it daily...",
      "url": "https://dev.to/gde/ai-in-practice-upgrading-from-gemini-3536-to-gemini-4-argon-migration-notes-and-pitfalls-for-hli",
      "tags": "ai, api, gemini, python",
      "reactions": 8,
      "comments": 0,
      "reading_time": 12,
      "author": "evanlin"
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
      "title": "A Very Fast IPv4 Parser, in Swift",
      "url": "https://blog.mahdibm.com/posts/a-very-fast-ipv4-parser-in-swift/",
      "score": 3,
      "comments": 0,
      "tags": [
        "performance",
        "swift"
      ],
      "id": "dl4h2a"
    },
    {
      "title": "Introducing Clairic, a new System One class of extraction models",
      "url": "https://blog.cloudflare.com/clairic-extraction-model/",
      "score": -2,
      "comments": 1,
      "tags": [
        "ai"
      ],
      "id": "f2vwi9"
    },
    {
      "title": "Go will reject certificate chains containing eight distrusted SPKIs",
      "url": "https://github.com/golang/go/commit/90617fb7ceb59cf08bee7826bb51b8c8fb8c11de",
      "score": 4,
      "comments": 2,
      "tags": [
        "go",
        "security"
      ],
      "id": "vze0kx"
    },
    {
      "title": "OpenBSD 8.0: released",
      "url": "https://marc.info/?l=openbsd-announce&m=179245843570316&w=2",
      "score": 4,
      "comments": 0,
      "tags": [
        "openbsd"
      ],
      "id": "7qhwfi"
    },
    {
      "title": "OpenBSD 8.0",
      "url": "https://www.openbsd.org/80.html",
      "score": 25,
      "comments": 5,
      "tags": [
        "openbsd",
        "release"
      ],
      "id": "sqdhu7"
    },
    {
      "title": "My 6 Month Journey to Recreate Half-Life",
      "url": "https://www.youtube.com/watch?v=rwQ8p_J5KhI",
      "score": 1,
      "comments": 0,
      "tags": [
        "games",
        "graphics",
        "video"
      ],
      "id": "qowvjs"
    },
    {
      "title": "Do web components have a future if nobody is writing them?",
      "url": "https://nolanlawson.com/2026/10/19/do-web-components-have-a-future-if-nobody-is-writing-them/",
      "score": 5,
      "comments": 1,
      "tags": [
        "ai-tooling",
        "web"
      ],
      "id": "dpjkzz"
    },
    {
      "title": "Rendering untrusted HTML email, safely(2021)",
      "url": "https://making.close.com/posts/rendering-untrusted-html-email-safely/",
      "score": 3,
      "comments": 0,
      "tags": [
        "javascript",
        "web"
      ],
      "id": "9ww9by"
    },
    {
      "title": "Intermediary between public and private members",
      "url": "",
      "score": 2,
      "comments": 0,
      "tags": [
        "plt"
      ],
      "id": "fonp7g"
    },
    {
      "title": "Blocking Identity Resolution Infrastructure",
      "url": "https://webkit.org/blog/18438/blocking-identity-resolution-infrastructure/",
      "score": 2,
      "comments": 1,
      "tags": [
        "privacy",
        "web"
      ],
      "id": "tsyxpn"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "privong",
      "descendants": 50,
      "id": 50160494,
      "kids": [
        50160842,
        50162039,
        50161399,
        50161517,
        50161077,
        50161489,
        50161571,
        50161259,
        50161516
      ],
      "score": 182,
      "time": 1792462000,
      "title": "OpenBSD 8.0",
      "type": "story",
      "url": "https://www.openbsd.org/80.html"
    },
    {
      "by": "noriax86",
      "descendants": 7,
      "id": 50141581,
      "kids": [
        50162114,
        50162182,
        50162152,
        50162002,
        50162060,
        50144840
      ],
      "score": 59,
      "time": 1792334881,
      "title": "Nordwand Mono – A monospace font for coders and adventurers",
      "type": "story",
      "url": "https://github.com/tywr/Nordwand-Mono"
    },
    {
      "by": "ds",
      "descendants": 55,
      "id": 50159341,
      "kids": [
        50161305,
        50160807,
        50161622,
        50159735,
        50159394,
        50160757,
        50161325,
        50162109,
        50162079,
        50161359,
        50161621,
        50161685,
        50161113,
        50161442,
        50161890,
        50161554,
        50160797,
        50160175,
        50161498,
        50160790,
        50160517
      ],
      "score": 264,
      "time": 1792452138,
      "title": "WhatsApp's help pages hid LLM instructions: dont recommend a regulator",
      "type": "story",
      "url": "https://redact.dev/blog/whatsapp-help-pages-hidden-ai-instructions"
    },
    {
      "by": "romeo19361",
      "descendants": 21,
      "id": 50161408,
      "kids": [
        50162040,
        50162033,
        50162170,
        50162102,
        50162094,
        50161793,
        50161969,
        50161907,
        50162025,
        50162006,
        50162146,
        50162035
      ],
      "score": 35,
      "text": "Hi HN,<p>I&#x27;m Peter Bishop and I&#x27;ve been working in graphics and web tech for over 25yrs.<p>I&#x27;ve recently launched Death Plan Switch to solve a major problem in my succession plan. What if I go missing or die? The right people are told and my business can continue to operate for my clients.<p>There&#x27;s a backstory to this project, I was hospitalised in 2012 and lost my business back then and I couldn&#x27;t get the data to my technical 2IC in time without frustrating my clients.<p>Death Plan Switch solves this problem, it&#x27;s free to download and use or study under the MIT license.<p>I&#x27;ve been using it for the last few weeks. It was authored with the help of Claude Code after writing an extensive MD document and it passed 42 unit tests.<p>I hope you get some use out of it, or it inspires your own succession plans. My clients are telling me this is a strong sales feature when they trust me with their hosting and technology accounts.<p>Happy to answer any questions.<p>Kind regards,\nPeter Bishop.",
      "time": 1792471063,
      "title": "Show HN: Death Plan Switch, a self-hosted dead man's switch for solo devs",
      "type": "story",
      "url": "https://deathplanswitch.com/"
    },
    {
      "by": "jtg",
      "descendants": 189,
      "id": 50154540,
      "kids": [
        50157109,
        50159118,
        50156105,
        50156659,
        50156178,
        50155686,
        50161518,
        50161688,
        50156718,
        50158922,
        50156021,
        50159924,
        50159928,
        50161804,
        50161949,
        50155727,
        50161753,
        50155706,
        50157373,
        50155669,
        50156022,
        50160980,
        50156634,
        50156115,
        50155876,
        50158322,
        50157424,
        50156283,
        50160506,
        50155917,
        50156377,
        50157194,
        50155710
      ],
      "score": 435,
      "time": 1792427949,
      "title": "MiniMax M3.1 Flash",
      "type": "story",
      "url": "https://www.minimax.io/blog/minimax-m31f"
    },
    {
      "by": "mendym",
      "descendants": 18,
      "id": 50160877,
      "kids": [
        50162111,
        50161123,
        50161185,
        50161521,
        50160878,
        50161477
      ],
      "score": 53,
      "time": 1792465507,
      "title": "Go will reject certificate chains containing eight distrusted SPKIs",
      "type": "story",
      "url": "https://github.com/golang/go/issues/82345"
    },
    {
      "by": "emot",
      "descendants": 90,
      "id": 50159616,
      "kids": [
        50159821,
        50159783,
        50161579,
        50160279,
        50159791,
        50159918,
        50159951,
        50159835,
        50160022,
        50161978,
        50162106,
        50161214,
        50160032,
        50160232,
        50159862,
        50159695,
        50160222,
        50159919,
        50159998,
        50159825,
        50159971
      ],
      "score": 111,
      "text": "Related: <i>Hackers activate automatic defrosting in supermarket fridges across Europe</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50055304\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50055304</a> - Oct 2026 (1007 comments)",
      "time": 1792454449,
      "title": "France's supermarket fridges were vulnerable online for months",
      "type": "story",
      "url": "https://ipinfo.io/blog/france-fridges-hack"
    },
    {
      "by": "croes",
      "descendants": 11,
      "id": 50140584,
      "kids": [
        50141781,
        50160851,
        50161670,
        50159738,
        50159593,
        50160766,
        50159573,
        50161034,
        50140704
      ],
      "score": 157,
      "time": 1792327196,
      "title": "Weball: Play Katamari on Websites",
      "type": "story",
      "url": "https://www.funwithcomputervision.com/weball/"
    },
    {
      "by": "hakonjdjohnsen",
      "descendants": 106,
      "id": 50150089,
      "kids": [
        50159677,
        50156691,
        50162088,
        50157548,
        50150780,
        50157954,
        50157445,
        50159760,
        50157318,
        50162068,
        50156913,
        50161701,
        50160883,
        50157231,
        50158436,
        50158175,
        50151284,
        50158992,
        50159066,
        50158532,
        50161227,
        50157305,
        50157589,
        50156926,
        50159431,
        50157709,
        50160385,
        50160605
      ],
      "score": 492,
      "time": 1792400707,
      "title": "I built a drone with only one motor [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=Ndftcft6XhU"
    },
    {
      "by": "cmrdporcupine",
      "descendants": 132,
      "id": 50154244,
      "kids": [
        50161191,
        50156586,
        50156170,
        50157345,
        50161270,
        50161676,
        50154282,
        50160867,
        50161474,
        50161503,
        50161330,
        50155543,
        50159438,
        50156775,
        50159104,
        50160607,
        50157291,
        50159506,
        50160460
      ],
      "score": 144,
      "text": "<a href=\"https:&#x2F;&#x2F;public-inspection.federalregister.gov&#x2F;2026-21447.pdf\" rel=\"nofollow\">https:&#x2F;&#x2F;public-inspection.federalregister.gov&#x2F;2026-21447.pdf</a>",
      "time": 1792426606,
      "title": "DeepSeek banned from U.S. federal civilian agencies under new DHS order",
      "type": "story",
      "url": "https://www.reuters.com/technology/us-banning-chinese-ai-deepseek-government-agency-it-systems-2026-10-19/"
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
      "title": "Somewhere, Coding Stopped Being Allowed to Be Fun",
      "description": "Somewhere in the last couple of years, a strange feeling crept in, and I don't think I'm the only one...",
      "url": "https://dev.to/james_anderson_h/somewhere-coding-stopped-being-allowed-to-be-fun-14pe",
      "tags": "career, discuss, ai, mentalhealth",
      "reactions": 10,
      "comments": 2,
      "reading_time": 6,
      "author": "james_anderson_h"
    },
    {
      "title": "#HackAVP Adopte un Job : swipe les postes de l'OPT-NC, vois pourquoi ils te correspondent",
      "description": "Une application née au #HackAVP, dans un projet commun du Master MIAGE : les offres d'emploi publiques de l'OPT-NC, à droite pour candidater, à gauche pour passer, et pour chacune une adéquation qui s'explique compétence par compétence.",
      "url": "https://dev.to/c2b/adopte-un-job-on-swipe-les-vrais-postes-de-lopt-nc-et-on-voit-pourquoi-ils-nous-correspondent-48pc",
      "tags": "hackavp, hackathon, career, opendata",
      "reactions": 12,
      "comments": 0,
      "reading_time": 9,
      "author": "c2b"
    },
    {
      "title": "I Got Tired of \\$25/Month Resume Paywalls, So I Built a Free AI CV Builder (Next.js 16 + Gemini)",
      "description": "Every developer knows the sinking feeling:  You spend 45 minutes carefully filling out your...",
      "url": "https://dev.to/khalidabdullahh/i-got-tired-of-25month-resume-paywalls-so-i-built-a-free-ai-cv-builder-nextjs-16-gemini-2jlf",
      "tags": "ai, resume, career, careerdevelopment",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "khalidabdullahh"
    },
    {
      "title": "How I Built a 100% Client-Side ATS Resume Checker & PDF Toolkit (Zero Server Uploads)",
      "description": "If you have applied for a tech job recently, you already know the frustration of Applicant Tracking...",
      "url": "https://dev.to/bhc_b8086c0e/how-i-built-a-100-client-side-ats-resume-checker-pdf-toolkit-zero-server-uploads-37m7",
      "tags": "webdev, javascript, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "bhc_b8086c0e"
    },
    {
      "title": "AWS Certified Developer – Associate (DVA-C02): A Study Plan That Actually Works",
      "description": "Most AWS certification advice treats every exam the same: read the whitepapers, memorize the service...",
      "url": "https://dev.to/study4pass/aws-certified-developer-associate-dva-c02-a-study-plan-that-actually-works-a02",
      "tags": "aws, certification, devops, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "study4pass"
    },
    {
      "title": "The Modern Software Engineer Role: From Syntax to Systems Architecture",
      "description": "Writing code is no longer the bottleneck in software delivery. As generative AI models churn out syntactically flawless functions in milliseconds...",
      "url": "https://dev.to/naveedkumbhar/the-modern-software-engineer-role-from-syntax-to-systems-architecture-301",
      "tags": "devops, platformengineering, kubernetes, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "naveedkumbhar"
    },
    {
      "title": "What 13 Years of .NET Taught Me About Writing Simple Code",
      "description": "Man, .NET has changed a lot.   If you told me back in the XML-heavy web.config days when...",
      "url": "https://dev.to/luisacunadev/what-13-years-of-net-taught-me-about-writing-simple-code-4405",
      "tags": "programming, career, learning, softwaredevelopment",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "luisacunadev"
    },
    {
      "title": "What Dussehra knows about building with AI",
      "description": "Every October the effigy goes up in the ground near my home in Akola, forty feet of bamboo and paper,...",
      "url": "https://dev.to/kalpak_kale/what-dussehra-knows-about-building-with-ai-47dj",
      "tags": "ai, career, productivity, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "kalpak_kale"
    },
    {
      "title": "72% of Anthropic's design questions are AI or ML. 62% of OpenAI's are classic.",
      "description": "Photo: Lucas Kepner on Unsplash  21 of Anthropic's 29 reported design questions are about AI systems...",
      "url": "https://dev.to/landthelab/72-of-anthropics-design-questions-are-ai-or-ml-62-of-openais-are-classic-hkp",
      "tags": "ai, career, interview, systemdesign",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "landthelab"
    },
    {
      "title": "Developers Won't Benefit Most From AI. Business People Will.",
      "description": "We assumed AI would give developers an unfair advantage. But the people actually winning with AI aren't always the most technical ones.",
      "url": "https://dev.to/josaphatstar/developers-wont-benefit-most-from-ai-business-people-will-1dli",
      "tags": "ai, career, webdev, discuss",
      "reactions": 2,
      "comments": 2,
      "reading_time": 3,
      "author": "josaphatstar"
    }
  ]
}
```

