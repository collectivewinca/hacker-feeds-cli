# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-10-19 06:50:41 UTC

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
      "forks": 82720,
      "added_stars": 229268,
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
      "forks": 2297,
      "added_stars": 4138,
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
      "forks": 6072,
      "added_stars": 5883,
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
      "forks": 1266,
      "added_stars": 1717,
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
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for small context windows (a 100K context is enough), token savings (5x fewer tokens), and month-long single sessions (billions of tokens).上下文压缩插件，兼顾小窗口(100k上下文足矣)省token(省5倍token)和超长会话(数月级别几十亿token单会话)。billion-context is all you need",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 163,
      "added_stars": 1001,
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
      "author": "vercel-labs",
      "repo": "skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/skills",
      "desc": "The open agent skills tool - npx skills",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3033,
      "added_stars": 1734,
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
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9066,
      "added_stars": 2117,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8934,
      "added_stars": 2131,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5025,
      "added_stars": 3815,
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
      "author": "chthollyphile",
      "repo": "folia-major",
      "avatar": "https://github.com/chthollyphile.png",
      "repo_link": "https://github.com/chthollyphile/folia-major",
      "desc": "专注于绚丽的歌词动画效果的本地音乐/navidrome/第三方多平台在线音乐播放器",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 835,
      "added_stars": 3083,
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
      "forks": 128,
      "added_stars": 904,
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
      "author": "SegFault42",
      "repo": "HeliosGen",
      "avatar": "https://github.com/SegFault42.png",
      "repo_link": "https://github.com/SegFault42/HeliosGen",
      "desc": "🏆 Self Hosted Gen AI desktop app. Free alternative to Higgsfield, OpenArt, Freepik....",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 355,
      "added_stars": 628,
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
      "author": "CopilotKit",
      "repo": "OpenIntelligentUI",
      "avatar": "https://github.com/CopilotKit.png",
      "repo_link": "https://github.com/CopilotKit/OpenIntelligentUI",
      "desc": "Open-Source Generative UI Framework",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 385,
      "added_stars": 857,
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
      "author": "TencentCloud",
      "repo": "TencentDB-Agent-Memory",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/TencentDB-Agent-Memory",
      "desc": "TencentDB Agent Memory is a team-level memory hub for AI Agents — turning conversations, docs, and code into four reusable memory assets (Chat Memory, Skill, LLM-Wiki, Code-Graph) that are governed, shared, and equipped across agents and frameworks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2967,
      "added_stars": 1673,
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
      "author": "krillinai",
      "repo": "OpenCreator",
      "avatar": "https://github.com/krillinai.png",
      "repo_link": "https://github.com/krillinai/OpenCreator",
      "desc": "Formerly KrillinAI, VideoTranslation and Dubbing Tool. Open-source AI workspace for creators, powered by Codex. Video downloading, video translation, create videos, images, voice, avatars, and edits with Agents in one place. Suitable for your Social Media like YouTube, TikTok, Instagram, etc.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1501,
      "added_stars": 994,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5174,
      "added_stars": 1785,
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
      "author": "elie222",
      "repo": "rakazo",
      "avatar": "https://github.com/elie222.png",
      "repo_link": "https://github.com/elie222/rakazo",
      "desc": "Open-source Grok Bot alternative. Choose your own model and sandbox.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 843,
      "added_stars": 850,
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
      "forks": 605,
      "added_stars": 3533,
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
      "forks": 4612,
      "added_stars": 7906,
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
      "forks": 5151,
      "added_stars": 2452,
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
      "forks": 775,
      "added_stars": 772,
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
      "forks": 18399,
      "added_stars": 3254,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4913,
      "added_stars": 6583,
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
      "forks": 1921,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 520,
      "added_stars": 1241,
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
      "author": "coder",
      "repo": "coder",
      "avatar": "https://github.com/coder.png",
      "repo_link": "https://github.com/coder/coder",
      "desc": "Secure environments for developers and their agents",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1635,
      "added_stars": 2023,
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
      "author": "Gaurav-Gosain",
      "repo": "tuios",
      "avatar": "https://github.com/Gaurav-Gosain.png",
      "repo_link": "https://github.com/Gaurav-Gosain/tuios",
      "desc": "A terminal window manager that knows what your agents are doing. Tiling panes, workspaces, sessions that survive restarts, and one Inbox for every coding agent.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 258,
      "added_stars": 1831,
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
      "forks": 553,
      "added_stars": 525,
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
      "author": "guohuiyuan",
      "repo": "go-music-dl",
      "avatar": "https://github.com/guohuiyuan.png",
      "repo_link": "https://github.com/guohuiyuan/go-music-dl",
      "desc": "一个基于 Go 语言的全网音乐搜索与下载工具。支持 CLI 命令行与 Web 服务双模式，内置网易云、QQ、酷狗、Bilibili、汽水音乐等 10+ 个主流平台，支持多源并发搜索与无损音质解析。music-dl交流群：755087923",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 521,
      "added_stars": 1110,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "nannyu",
          "href": "https://github.com/nannyu",
          "avatar": "https://avatars.githubusercontent.com/u/31527323"
        },
        {
          "username": "yuanxiao1225",
          "href": "https://github.com/yuanxiao1225",
          "avatar": "https://avatars.githubusercontent.com/u/41892193"
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
      "forks": 2650,
      "added_stars": 664,
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
      "author": "oauth2-proxy",
      "repo": "oauth2-proxy",
      "avatar": "https://github.com/oauth2-proxy.png",
      "repo_link": "https://github.com/oauth2-proxy/oauth2-proxy",
      "desc": "A reverse proxy that provides authentication with Google, Azure, OpenID Connect and many more identity providers.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2238,
      "added_stars": 260,
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
      "author": "github",
      "repo": "gh-aw",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/gh-aw",
      "desc": "GitHub Agentic Workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 596,
      "added_stars": 302,
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
      "author": "golang",
      "repo": "go",
      "avatar": "https://github.com/golang.png",
      "repo_link": "https://github.com/golang/go",
      "desc": "The Go programming language",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 22668,
      "added_stars": 1389,
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
      "author": "openbao",
      "repo": "openbao",
      "avatar": "https://github.com/openbao.png",
      "repo_link": "https://github.com/openbao/openbao",
      "desc": "OpenBao is a software solution to manage, store, and distribute sensitive data including secrets, certificates, and keys.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 633,
      "added_stars": 1117,
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
      "author": "zitadel",
      "repo": "zitadel",
      "avatar": "https://github.com/zitadel.png",
      "repo_link": "https://github.com/zitadel/zitadel",
      "desc": "ZITADEL - Identity infrastructure, simplified for you.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1387,
      "added_stars": 333,
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
      "author": "docker",
      "repo": "compose",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/compose",
      "desc": "Define and run multi-container applications with Docker",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5874,
      "added_stars": 396,
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
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6009,
      "added_stars": 641,
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
      "author": "prometheus",
      "repo": "prometheus",
      "avatar": "https://github.com/prometheus.png",
      "repo_link": "https://github.com/prometheus/prometheus",
      "desc": "The Prometheus monitoring system and time series database.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10927,
      "added_stars": 815,
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
      "author": "kubernetes",
      "repo": "kubernetes",
      "avatar": "https://github.com/kubernetes.png",
      "repo_link": "https://github.com/kubernetes/kubernetes",
      "desc": "Production-Grade Container Scheduling and Management",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 47404,
      "added_stars": 1256,
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
      "author": "hashicorp",
      "repo": "terraform",
      "avatar": "https://github.com/hashicorp.png",
      "repo_link": "https://github.com/hashicorp/terraform",
      "desc": "Terraform enables you to safely and predictably create, change, and improve infrastructure. It is a source-available tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10648,
      "added_stars": 501,
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
      "forks": 3072,
      "added_stars": 821,
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
      "forks": 8328,
      "added_stars": 42036,
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
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5654,
      "added_stars": 5498,
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
      "forks": 6156,
      "added_stars": 27550,
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
      "forks": 3426,
      "added_stars": 5493,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn AI Engineering! Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12515,
      "added_stars": 16300,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4545,
      "added_stars": 6015,
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
      "author": "TencentCloud",
      "repo": "Octop",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/Octop",
      "desc": "A smarter, self-hosted AI assistant — multi-user, multi-agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1279,
      "added_stars": 6138,
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3411,
      "added_stars": 3678,
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
      "forks": 2128,
      "added_stars": 5476,
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
      "forks": 4955,
      "added_stars": 5051,
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
      "author": "davila7",
      "repo": "claude-code-templates",
      "avatar": "https://github.com/davila7.png",
      "repo_link": "https://github.com/davila7/claude-code-templates",
      "desc": "CLI tool for configuring and monitoring Claude Code",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3795,
      "added_stars": 2089,
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
      "forks": 8747,
      "added_stars": 16509,
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
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1397,
      "added_stars": 1545,
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
      "forks": 32835,
      "added_stars": 2391,
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
      "forks": 484,
      "added_stars": 4127,
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
      "forks": 902,
      "added_stars": 1242,
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
      "author": "NVIDIA",
      "repo": "Model-Optimizer",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/Model-Optimizer",
      "desc": "A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 755,
      "added_stars": 1555,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1804,
      "added_stars": 2840,
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
      "author": "topoteretes",
      "repo": "cognee",
      "avatar": "https://github.com/topoteretes.png",
      "repo_link": "https://github.com/topoteretes/cognee",
      "desc": "Cognee is the open-source AI memory platform for agents. Give your AI agents persistent long-term memory with small models for free",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3400,
      "added_stars": 1835,
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
      "forks": 2968,
      "added_stars": 2658,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
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
      "reactions": 119,
      "comments": 57,
      "reading_time": 25,
      "author": "georgekobaidze"
    },
    {
      "title": "Dev Opportunity Radar #21: $500K Y Combinator Funding, Bolt Builders Week, and AI Safety Research Residency",
      "description": "TL;DR  Welcome back to Dev Opportunity Radar!  This is a weekly series where I share opportunities,...",
      "url": "https://dev.to/devengers/dev-opportunity-radar-21-500k-y-combinator-funding-bolt-builders-week-and-ai-safety-research-12b8",
      "tags": "discuss, community, opportunities, resources",
      "reactions": 88,
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
    },
    {
      "title": "Building ora-tui with Google Antigravity & Gemini 4 Argon: An MS-DOS Retro TUI & OpenTelemetry Exporter for Oracle RAC, DB & SAN Multipath",
      "description": "How I pair-programmed with Google Antigravity powered by Gemini 4 Argon to build a zero-dependency Go TUI and OpenTelemetry/Prometheus observability stack for Oracle Databases and Linux SAN storage.",
      "url": "https://dev.to/gde/building-ora-tui-with-google-antigravity-gemini-4-argon-an-ms-dos-retro-tui-opentelemetry-4d02",
      "tags": "oracle, go, opentelemetry, ai",
      "reactions": 8,
      "comments": 0,
      "reading_time": 7,
      "author": "marioezquerro"
    },
    {
      "title": "DuckLess: serverless DuckDB on Google Cloud, in your own project",
      "description": "Serverless DuckDB on Google Cloud, in your own project. Files on GCS, tables in BigQuery (read and write), what I measured, and what I learned.",
      "url": "https://dev.to/gde/duckless-serverless-duckdb-on-google-cloud-in-your-own-project-4o5a",
      "tags": "duckdb, googlecloud, dataengineering, opensource",
      "reactions": 11,
      "comments": 1,
      "reading_time": 10,
      "author": "mazlum_tosun"
    },
    {
      "title": "Nobody’s winning the AI race yet",
      "description": "By Ryan Swift  Yesterday, Google finally released its Gemini 4 Argon model for public use. It’s...",
      "url": "https://dev.to/dailycontext/nobodys-winning-the-ai-race-yet-24h4",
      "tags": "ai, gemini, llm, aie",
      "reactions": 17,
      "comments": 2,
      "reading_time": 2,
      "author": "thisisryanswift"
    },
    {
      "title": "Gemini 4 Under the Microscope: Red-Teaming AI Agents and Deterministic Dual-Port Remote Control Gemini 4 Architecture Banner",
      "description": "🎯 What You'll Learn     Gemini 4 Native Architecture Leap: How to leverage Deep Reasoning...",
      "url": "https://dev.to/gde/gemini-4-under-the-microscope-red-teaming-ai-agents-and-deterministic-dual-port-remote-control-4567",
      "tags": "gemini, agents, security, devsecops",
      "reactions": 20,
      "comments": 0,
      "reading_time": 9,
      "author": "jimmyliao"
    },
    {
      "title": "Six Months After Cloud Next ‘26: A Builder’s Tour of the Gemini Enterprise Agent Platform",
      "description": "What actually shipped across Build, Scale, Govern, and Optimize — and what I'd tell a team starting...",
      "url": "https://dev.to/gde/six-months-after-cloud-next-26-a-builders-tour-of-the-gemini-enterprise-agent-platform-3hib",
      "tags": "googlecloud, ai, agents, gemini",
      "reactions": 7,
      "comments": 0,
      "reading_time": 10,
      "author": "jonathan_zhuo_ae7e5c02dec"
    },
    {
      "title": "AlphaEvolve and Gemini: Autonomous Algorithm Discovery for Unified Disaster Prediction",
      "description": "📄 Published Paper (Open Access on Zenodo): Autonomous Discovery of Unified Multi-Hazard Prediction...",
      "url": "https://dev.to/gde/alphaevolve-and-gemini-autonomous-algorithm-discovery-for-unified-disaster-prediction-20f4",
      "tags": "ai, gemini, iot, algorithms",
      "reactions": 18,
      "comments": 0,
      "reading_time": 26,
      "author": "tanaike"
    },
    {
      "title": "What was your win this week?!",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-36am",
      "tags": "weeklyretro",
      "reactions": 22,
      "comments": 27,
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
      "title": "Crawlers, floods and fleets: a year of keeping our digital collections open",
      "url": "https://stacks.wellcomecollection.org/crawlers-floods-and-fleets-a-year-of-keeping-our-digital-collections-open-10af777199c4",
      "score": 1,
      "comments": 1,
      "tags": [
        "performance",
        "security"
      ],
      "id": "4sgimt"
    },
    {
      "title": "Programming Language Fundamentals in Agda",
      "url": "https://plfa.github.io/",
      "score": 1,
      "comments": 1,
      "tags": [
        "math",
        "plt"
      ],
      "id": "dtwbpu"
    },
    {
      "title": "Composite objects and C++26 the std::polymorphic type",
      "url": "https://mariusbancila.ro/blog/2026/10/18/composite-objects-and-cpp26-the-stdpolymorphic-type/",
      "score": 1,
      "comments": 0,
      "tags": [
        "c++"
      ],
      "id": "ijz3v0"
    },
    {
      "title": "Why is GitOps so good?",
      "url": "https://thorsell.io/2026/10/16/gitops.html",
      "score": -1,
      "comments": 0,
      "tags": [
        "devops"
      ],
      "id": "bt7ehs"
    },
    {
      "title": "Efficient Extraction for Effectful E-graphs",
      "url": "https://ztatlock.net/pubs/2026-oopsla-eggcc/",
      "score": 1,
      "comments": 0,
      "tags": [
        "compilers",
        "plt"
      ],
      "id": "mhy9id"
    },
    {
      "title": "A response to claims about flatpak being insecure",
      "url": "https://oro.gay/posts/flatpak-an-insecurity-nightmare/",
      "score": 2,
      "comments": 0,
      "tags": [
        "linux",
        "security"
      ],
      "id": "jdjtqt"
    },
    {
      "title": "What the heck is /pkg?",
      "url": "https://anderegg.ca/2026/10/18/what-the-heck-is-pkg",
      "score": 7,
      "comments": 1,
      "tags": [
        "mac",
        "unix"
      ],
      "id": "w6xosj"
    },
    {
      "title": "What requirements don't you have?",
      "url": "https://www.seangoedecke.com/what-requirements-dont-you-have/",
      "score": 3,
      "comments": 2,
      "tags": [
        "ai-tooling",
        "practices"
      ],
      "id": "nuepys"
    },
    {
      "title": "Updates to site guidelines and AI/LLM tags",
      "url": "",
      "score": 106,
      "comments": 65,
      "tags": [
        "announce",
        "meta"
      ],
      "id": "h0eate"
    },
    {
      "title": "BBC Master Pi 1MHz Domesday",
      "url": "https://youtu.be/UAWSOCOTjIU",
      "score": 2,
      "comments": 0,
      "tags": [
        "retrocomputing",
        "video"
      ],
      "id": "82vulz"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "allinonai",
      "descendants": 163,
      "id": 50145337,
      "kids": [
        50147908,
        50145696,
        50147768,
        50146255,
        50148928,
        50146496,
        50146330,
        50145990,
        50145678,
        50146820,
        50145692,
        50146204,
        50146427,
        50146809,
        50145677,
        50146572,
        50146373,
        50147842,
        50147502,
        50145872,
        50146628,
        50145878,
        50145751,
        50145525,
        50146437,
        50146765,
        50146729,
        50146459,
        50148751,
        50147382,
        50148777,
        50146123,
        50147762,
        50145580,
        50145488,
        50148249,
        50146262
      ],
      "score": 340,
      "text": "<a href=\"https:&#x2F;&#x2F;x.com&#x2F;Jiaru_Zou&#x2F;status&#x2F;2110400256647340476\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;Jiaru_Zou&#x2F;status&#x2F;2110400256647340476</a><p><a href=\"https:&#x2F;&#x2F;github.com&#x2F;togethercomputer&#x2F;HybridAgent\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;togethercomputer&#x2F;HybridAgent</a><p><a href=\"https:&#x2F;&#x2F;huggingface.co&#x2F;collections&#x2F;togethercomputer&#x2F;hybridagent\" rel=\"nofollow\">https:&#x2F;&#x2F;huggingface.co&#x2F;collections&#x2F;togethercomputer&#x2F;hybridag...</a><p>Evaluations: <a href=\"https:&#x2F;&#x2F;arxiv.org&#x2F;html&#x2F;2610.18861v1#S5\" rel=\"nofollow\">https:&#x2F;&#x2F;arxiv.org&#x2F;html&#x2F;2610.18861v1#S5</a>",
      "time": 1792356494,
      "title": "Hybrid Reasoning Agents: LLM agents that think in latent space, act through text",
      "type": "story",
      "url": "https://arxiv.org/abs/2610.18861"
    },
    {
      "by": "samizdis",
      "descendants": 5,
      "id": 50131315,
      "kids": [
        50149073,
        50148941
      ],
      "score": 27,
      "time": 1792246056,
      "title": "Rabbits were a medieval royal luxury in England until the Black Death",
      "type": "story",
      "url": "https://phys.org/news/2026-10-rabbits-medieval-royal-luxury-england.html"
    },
    {
      "by": "Eric_Gullichsen",
      "descendants": 41,
      "id": 50146625,
      "kids": [
        50147401,
        50149055,
        50147869,
        50148207,
        50147165,
        50148427,
        50146629,
        50147787,
        50146800,
        50148604
      ],
      "score": 140,
      "time": 1792366677,
      "title": "William Gibson and the trademarking of cyberspace",
      "type": "story",
      "url": "https://colo.to/cyberspace.html"
    },
    {
      "by": "mdp2021",
      "descendants": 357,
      "id": 50136150,
      "kids": [
        50148867,
        50147337,
        50148085,
        50148922,
        50146707,
        50145948,
        50145901,
        50147498,
        50148619,
        50148640,
        50148430,
        50148242,
        50147418,
        50146030,
        50146530,
        50146916,
        50145723,
        50147341,
        50147036,
        50147439,
        50146620,
        50145756,
        50146174,
        50145876,
        50148498,
        50145830,
        50148265,
        50146505,
        50147338,
        50147733,
        50146767,
        50147344,
        50146794,
        50147426,
        50146550,
        50147635
      ],
      "score": 300,
      "time": 1792279595,
      "title": "There's never been a better time to go into math (by: 3blue1brown) [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=LKrwhjOI8Nc"
    },
    {
      "by": "iheatuchriswogu",
      "descendants": 24,
      "id": 50147492,
      "kids": [
        50149140,
        50148169,
        50148299,
        50148485,
        50148587,
        50148164,
        50148075,
        50147896,
        50148335,
        50147493,
        50148029,
        50147929,
        50148283,
        50147967,
        50147991,
        50148210,
        50148016
      ],
      "score": 52,
      "time": 1792375276,
      "title": "Superlite: A Faster Alternatie to Superpowers",
      "type": "story",
      "url": "https://contextfirst.blog/superlite-hand-an-agent-a-spec/"
    },
    {
      "by": "tosh",
      "descendants": 157,
      "id": 50142573,
      "kids": [
        50149037,
        50142865,
        50144694,
        50144352,
        50145335,
        50148705,
        50143549,
        50144334,
        50143486,
        50147275,
        50148368,
        50147102,
        50149027,
        50143903,
        50147288,
        50144320,
        50146185,
        50143219,
        50145360,
        50144150,
        50144956,
        50145627,
        50147028,
        50144450,
        50143311,
        50148508,
        50143655,
        50144566,
        50147294,
        50145539,
        50148350,
        50142872,
        50145522,
        50146362,
        50143362,
        50143545,
        50142831,
        50144750,
        50144876,
        50144265,
        50143978,
        50146226,
        50144028,
        50145069,
        50143618,
        50143606,
        50143387,
        50143356,
        50142882,
        50145617,
        50144394,
        50145512,
        50144670,
        50148687,
        50145480,
        50146144,
        50145586,
        50145720,
        50145365
      ],
      "score": 396,
      "time": 1792341120,
      "title": "Someone behind the software",
      "type": "story",
      "url": "https://karrisaarinen.com/posts/someone-behind-the-software/"
    },
    {
      "by": "nanochess",
      "descendants": 37,
      "id": 50111537,
      "kids": [
        50149112,
        50148924,
        50147207,
        50147361,
        50147101,
        50147187,
        50147504,
        50147711,
        50111568,
        50148684,
        50147248,
        50147659,
        50147274,
        50147813
      ],
      "score": 91,
      "time": 1792104983,
      "title": "Laptop Based on 6502 CPU",
      "type": "story",
      "url": "https://www.maddox.pro/?p=448"
    },
    {
      "by": "greyface-",
      "descendants": 12,
      "id": 50148441,
      "kids": [
        50148852,
        50148910,
        50148810,
        50148778,
        50148844,
        50148884,
        50148815
      ],
      "score": 52,
      "time": 1792384818,
      "title": "Verisign .com Domain Name Registry Consumer Class Action",
      "type": "story",
      "url": "https://www.hbsslaw.com/cases/verisign-com-domain-name-registry-consumer-class-action"
    },
    {
      "by": "amrrs",
      "descendants": 77,
      "id": 50145507,
      "kids": [
        50148000,
        50147314,
        50147381,
        50147182,
        50147631,
        50147059,
        50148151,
        50148594,
        50147291,
        50147740,
        50147725,
        50147996,
        50147147,
        50147769,
        50148165,
        50147281,
        50145711,
        50147741,
        50147840,
        50147509,
        50147936,
        50147538,
        50147121,
        50148977,
        50147384,
        50147695,
        50147811,
        50147013,
        50148198
      ],
      "score": 111,
      "time": 1792357752,
      "title": "If you don't run your own LLM proxy, how do you know whats going on?",
      "type": "story",
      "url": "https://jrdsgl.com/if-you-dont-run-your-own-llm-proxy-how-the-fuck-do-you-even-know-whats-going-on/"
    },
    {
      "by": "RobotToaster",
      "descendants": 57,
      "id": 50141076,
      "kids": [
        50143355,
        50141336,
        50141271,
        50143199,
        50141674,
        50142645,
        50141842,
        50141628,
        50141677,
        50143275,
        50143787,
        50145083,
        50141540,
        50141316,
        50145320,
        50141395
      ],
      "score": 369,
      "time": 1792331328,
      "title": "RepRapMicron",
      "type": "story",
      "url": "https://github.com/VikOlliver/RepRapMicron/wiki"
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
      "title": "It's still OK to enjoy programming",
      "url": "https://chriskiehl.com/article/it-is-still-ok-to-enjoy-programming",
      "permalink": "https://www.reddit.com/r/programming/comments/1x97lsb/its_still_ok_to_enjoy_programming/",
      "author": "/u/chriskiehl",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/chriskiehl [link] &#32; [comments]",
      "published": "2026-10-18T16:33:28+00:00"
    },
    {
      "title": "How Containers Work: Building a Docker-like Container From Scratch",
      "url": "https://labs.iximiuz.com/tutorials/container-filesystem-from-scratch",
      "permalink": "https://www.reddit.com/r/programming/comments/1x97kbr/how_containers_work_building_a_dockerlike/",
      "author": "/u/iximiuz",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/iximiuz [link] &#32; [comments]",
      "published": "2026-10-18T16:31:47+00:00"
    },
    {
      "title": "A New Way to Think About Borrow Checking (In Reverse)",
      "url": "https://verdagon.dev/blog/reverse-borrow-checking",
      "permalink": "https://www.reddit.com/r/programming/comments/1x92rhh/a_new_way_to_think_about_borrow_checking_in/",
      "author": "/u/verdagon",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/verdagon [link] &#32; [comments]",
      "published": "2026-10-18T13:05:40+00:00"
    },
    {
      "title": "How tough can emoji be?",
      "url": "https://totaldraw.com/blog/emoji/",
      "permalink": "https://www.reddit.com/r/programming/comments/1x9ecjd/how_tough_can_emoji_be/",
      "author": "/u/Rupour",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Turns out, quite tough! &#32; submitted by &#32; /u/Rupour [link] &#32; [comments]",
      "published": "2026-10-18T21:03:23+00:00"
    },
    {
      "title": "ANN: Free Pascal Compiler Now Has Dynamic Package Support",
      "url": "https://www.getlazarus.org/dynamic/",
      "permalink": "https://www.reddit.com/r/programming/comments/1x9av5j/ann_free_pascal_compiler_now_has_dynamic_package/",
      "author": "/u/sysrpl",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/sysrpl [link] &#32; [comments]",
      "published": "2026-10-18T18:43:38+00:00"
    },
    {
      "title": "What is the best book or resource for system design?",
      "url": "https://en.wikipedia.org/wiki/Systems_design",
      "permalink": "https://www.reddit.com/r/programming/comments/1x9hvrt/what_is_the_best_book_or_resource_for_system/",
      "author": "/u/mixsrc",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/mixsrc [link] &#32; [comments]",
      "published": "2026-10-18T23:43:45+00:00"
    },
    {
      "title": "Automated Accessibility Testing at Slack",
      "url": "https://slack.engineering/automated-accessibility-testing-at-slack/",
      "permalink": "https://www.reddit.com/r/programming/comments/1x966u5/automated_accessibility_testing_at_slack/",
      "author": "/u/Ok_Stomach6651",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Ok_Stomach6651 [link] &#32; [comments]",
      "published": "2026-10-18T15:36:30+00:00"
    },
    {
      "title": "This Website Is Now Made in Swift",
      "url": "https://sindresorhus.com/blog/swift-website",
      "permalink": "https://www.reddit.com/r/programming/comments/1x9oosc/this_website_is_now_made_in_swift/",
      "author": "/u/sindresorhus",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/sindresorhus [link] &#32; [comments]",
      "published": "2026-10-19T05:43:15+00:00"
    },
    {
      "title": "Trials and Tribulation of Native Lua Compilation",
      "url": "https://samyeyo.github.io/clx/blog.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1x97ww8/trials_and_tribulation_of_native_lua_compilation/",
      "author": "/u/_SamT",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Here is an article I wrote about what I’ve been going through while attempting to compile Lua into multiplatform C++, and what that actually requires. It covers the semantic constraints of Lua, the runtime behavior that needs to be preserved, and how those pieces map onto generated C++ code across different toolchains. It might be a good read for anyone interested in language implementation or compiler design. &#32; submitted by &#32; /u/_SamT [link] &#32; [comments]",
      "published": "2026-10-18T16:46:08+00:00"
    },
    {
      "title": "Durable workflows without replay: freezing the VM instead of re-running the code",
      "url": "https://qoqi.dev/blog/durable-workflows-without-replay",
      "permalink": "https://www.reddit.com/r/programming/comments/1x9akv3/durable_workflows_without_replay_freezing_the_vm/",
      "author": "/u/dani-but-g",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/dani-but-g [link] &#32; [comments]",
      "published": "2026-10-18T18:32:03+00:00"
    },
    {
      "title": "Modern software doesn't need to use servers for everything. How to create offline-first apps to earn trust in SaaS era",
      "url": "https://blog.geckocode.pl/2026/10/18/privacy-first-apps.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1x90utt/modern_software_doesnt_need_to_use_servers_for/",
      "author": "/u/MilessEdgeworth",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "These are my thoughts on modern software development. Everything is subscription based software as a service, even if there is no clear benefits of it being in the cloud (for the user). Writing offline-first apps also provide a way to prove that you are not going to sell user data. In the article I propose how to do it and how anyone can verify that their data is relatively safe. &#32; submitted by &#32; /u/MilessEdgeworth [link] &#32; [comments]",
      "published": "2026-10-18T11:25:18+00:00"
    },
    {
      "title": "A Subtle Github Bug: Where Did My Merged Code Went Missing?",
      "url": "https://medium.com/@elye-project/a-subtle-github-bug-where-did-my-merged-code-went-missing-d10dadc0f111?sk=04e89ff2ac8f1358b18318b16f1e71e5",
      "permalink": "https://www.reddit.com/r/programming/comments/1x9095f/a_subtle_github_bug_where_did_my_merged_code_went/",
      "author": "/u/ElyeProj",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/ElyeProj [link] &#32; [comments]",
      "published": "2026-10-18T10:50:19+00:00"
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
      "title": "AI Took Me to Three Stages. I Still Don't Like Public Speaking.",
      "description": "A year of building with AI put me on three stages. I liked the message more than the...",
      "url": "https://dev.to/earlgreyhot1701d/ai-took-me-to-three-stages-i-still-dont-like-public-speaking-1g38",
      "tags": "ai, career, learning, discuss",
      "reactions": 23,
      "comments": 13,
      "reading_time": 6,
      "author": "earlgreyhot1701d"
    },
    {
      "title": "applyfit: score job postings offline and draft a tailored CV from your own files",
      "description": "A Python CLI and MCP server that keeps your profile and every job posting as plain files, scores fit offline from 0 to 100, and only calls a model to draft the CV, cover letter, and interview prep.",
      "url": "https://dev.to/bayuh85/applyfit-score-job-postings-offline-and-draft-a-tailored-cv-from-your-own-files-29e3",
      "tags": "ai, python, opensource, career",
      "reactions": 0,
      "comments": 1,
      "reading_time": 5,
      "author": "bayuh85"
    },
    {
      "title": "5 Best and 5 Worst Remote Job Boards",
      "description": "Quality vs. Quantity   Not all remote job boards are created equal. Some help you find your...",
      "url": "https://dev.to/alex-kos-443/5-best-and-5-worst-remote-job-boards-2knj",
      "tags": "remote, career, webdev, hiring",
      "reactions": 0,
      "comments": 0,
      "reading_time": 11,
      "author": "alex-kos-443"
    },
    {
      "title": "How we turn \"how much for a website?\" into a quote you can defend: a developer's scoping checklist",
      "description": "By the Brightcode team, a small web agency in Delhi NCR. Reviewed by Gaurav Khokkar, Founder.  If you...",
      "url": "https://dev.to/brightcode/how-we-turn-how-much-for-a-website-into-a-quote-you-can-defend-a-developers-scoping-checklist-1pd2",
      "tags": "webdev, wordpress, freelancing, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "brightcode"
    },
    {
      "title": "You Have Been Asked to Shadow a Senior Engineer for a Week",
      "description": "Your lead has set it up. For the next five days you will sit with one of the most experienced...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/you-have-been-asked-to-shadow-a-senior-engineer-for-a-week-2m8i",
      "tags": "asaelshinder, learning, mentorship, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "Your Mentee Has Fallen Out With Someone on Their Team",
      "description": "Your mentee spends the first twenty minutes of the call on one person. A teammate who rewrote their...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/your-mentee-has-fallen-out-with-someone-on-their-team-4fja",
      "tags": "asaelshinder, mentorship, teamwork, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "You Have Been Offered a Six Month Secondment",
      "description": "Your manager calls you into a quick chat. The data platform group needs someone with your background...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/you-have-been-offered-a-six-month-secondment-2b8d",
      "tags": "asaelshinder, career, growth, teamwork",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "Software Is About to Be Treated Like Any Other Product That Causes Harm",
      "description": "In November 2024 the European Union published a new Product Liability Directive, replacing rules that...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/software-is-about-to-be-treated-like-any-other-product-that-causes-harm-1050",
      "tags": "asaelshinder, future, law, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "A 30-Day DSA Plan for Placements, Built Around Patterns (Not Problem Counts)",
      "description": "A 30-day placement DSA plan organised by patterns, with a working Python template for each core pattern.",
      "url": "https://dev.to/realdev9868/a-30-day-dsa-plan-for-placements-built-around-patterns-not-problem-counts-5fn1",
      "tags": "dsa, algorithms, python, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "realdev9868"
    },
    {
      "title": "He Sent an AI to His Job Interview. The Company Sent One Too. Nobody Got Hired.",
      "description": "He Sent an AI to His Job Interview. The Company Sent One Too. Nobody Got Hired.   The job...",
      "url": "https://dev.to/shakeelahmed/he-sent-an-ai-to-his-job-interview-the-company-sent-one-too-nobody-got-hired-175k",
      "tags": "ai, hiring, futureofwork, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "shakeelahmed"
    }
  ]
}
```

