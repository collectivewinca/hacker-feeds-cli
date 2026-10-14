# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-10-14 06:39:15 UTC

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
      "forks": 493,
      "added_stars": 4426,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "fecolinhares",
          "href": "https://github.com/fecolinhares",
          "avatar": "https://avatars.githubusercontent.com/u/963774"
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
      "forks": 5658,
      "added_stars": 4732,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8810,
      "added_stars": 3587,
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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1095,
      "added_stars": 1141,
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
      "author": "morluto",
      "repo": "rea",
      "avatar": "https://github.com/morluto.png",
      "repo_link": "https://github.com/morluto/rea",
      "desc": "Reverse engineer anything with agents, from app behavior down to native binaries.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 53848,
      "added_stars": 183758,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4744,
      "added_stars": 3412,
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
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for small context windows (a 100K context is enough), token savings (5x fewer tokens), and month-long single sessions (billions of tokens).上下文压缩插件，兼顾小窗口(100k上下文足矣)省token(省5倍token)和超长会话(数月级别几十亿token单会话)。billion-context is all you need",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 102,
      "added_stars": 572,
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
          "username": "wangbl1010",
          "href": "https://github.com/wangbl1010",
          "avatar": "https://avatars.githubusercontent.com/u/299720939"
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
      "forks": 7290,
      "added_stars": 1574,
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
      "author": "mvschwarz",
      "repo": "openrig",
      "avatar": "https://github.com/mvschwarz.png",
      "repo_link": "https://github.com/mvschwarz/openrig",
      "desc": "Build your own network of agents from Claude Code, Codex and Pi: persistent teams with roles, shared context and owned work.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 562,
      "added_stars": 1999,
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
      "author": "DmNote-App",
      "repo": "DmNote",
      "avatar": "https://github.com/DmNote-App.png",
      "repo_link": "https://github.com/DmNote-App/DmNote",
      "desc": "Make it yours. A customizable key viewer for DJMAX RESPECT V and any game.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 218,
      "added_stars": 1648,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5040,
      "added_stars": 1702,
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
      "author": "invoke-ai",
      "repo": "InvokeAI",
      "avatar": "https://github.com/invoke-ai.png",
      "repo_link": "https://github.com/invoke-ai/InvokeAI",
      "desc": "Invoke is a leading creative engine for Stable Diffusion models, empowering professionals, artists, and enthusiasts to generate and create visual media using the latest AI-driven technologies. The solution offers an industry leading WebUI, and serves as the foundation for multiple commercial products.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3045,
      "added_stars": 271,
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
      "author": "breferrari",
      "repo": "obsidian-mind",
      "avatar": "https://github.com/breferrari.png",
      "repo_link": "https://github.com/breferrari/obsidian-mind",
      "desc": "A self-organizing Obsidian vault that gives AI coding agents persistent memory.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 603,
      "added_stars": 384,
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
      "author": "AtomicBot-ai",
      "repo": "atomic-agent",
      "avatar": "https://github.com/AtomicBot-ai.png",
      "repo_link": "https://github.com/AtomicBot-ai/atomic-agent",
      "desc": "Atomic Agent is a local-first AI agent. Runs open-weight models on your own machine via llama.cpp.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 269,
      "added_stars": 492,
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
          "username": "sosidudku1",
          "href": "https://github.com/sosidudku1",
          "avatar": "https://avatars.githubusercontent.com/u/273119990"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "sosidudku",
          "href": "https://github.com/sosidudku",
          "avatar": "https://avatars.githubusercontent.com/u/197833516"
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
      "forks": 1054,
      "added_stars": 1264,
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
      "forks": 3418,
      "added_stars": 24283,
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
      "forks": 4502,
      "added_stars": 11177,
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
      "forks": 566,
      "added_stars": 3190,
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
      "forks": 1624,
      "added_stars": 2715,
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
      "forks": 5135,
      "added_stars": 2427,
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
      "added_stars": 631,
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
      "forks": 1844,
      "added_stars": 81,
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
      "forks": 2640,
      "added_stars": 711,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 519,
      "added_stars": 1160,
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
      "author": "Gentleman-Programming",
      "repo": "gentle-ai",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/gentle-ai",
      "desc": "Gentle-AI configures the AI coding agents you already use: Claude Code, Cursor, OpenCode, Codex, Pi, and more. Choose persistent memory, Organic-Driven Development, curated skills, MCP servers, personas, and optional bounded review. Open source, no agent lock-in.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 839,
      "added_stars": 1090,
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
      "author": "Gaurav-Gosain",
      "repo": "tuios",
      "avatar": "https://github.com/Gaurav-Gosain.png",
      "repo_link": "https://github.com/Gaurav-Gosain/tuios",
      "desc": "A terminal window manager that knows what your agents are doing. Tiling panes, workspaces, sessions that survive restarts, and one Inbox for every coding agent.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 245,
      "added_stars": 1659,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4262,
      "added_stars": 4330,
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
      "forks": 269,
      "added_stars": 2331,
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
      "author": "usememos",
      "repo": "memos",
      "avatar": "https://github.com/usememos.png",
      "repo_link": "https://github.com/usememos/memos",
      "desc": "A personal timeline for quick notes. Write short memos, find them later by search, tag, or date. Open source and self-hosted.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4859,
      "added_stars": 949,
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
      "author": "Armur-Ai",
      "repo": "Pentest-Swarm-AI",
      "avatar": "https://github.com/Armur-Ai.png",
      "repo_link": "https://github.com/Armur-Ai/Pentest-Swarm-AI",
      "desc": "Autonomous penetration testing using a swarm of AI agents. Orchestrates recon, classification, exploitation, and reporting specialists with ReAct reasoning — supports bug bounty, continuous monitoring, and CTF modes. Built with Go and 7+ native security tools.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 540,
      "added_stars": 464,
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
      "author": "grpc",
      "repo": "grpc-go",
      "avatar": "https://github.com/grpc.png",
      "repo_link": "https://github.com/grpc/grpc-go",
      "desc": "The Go language implementation of gRPC. HTTP/2 based RPC",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4795,
      "added_stars": 140,
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
      "forks": 471,
      "added_stars": 451,
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
      "forks": 762,
      "added_stars": 575,
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
      "author": "github",
      "repo": "gh-aw",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/gh-aw",
      "desc": "GitHub Agentic Workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 584,
      "added_stars": 286,
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
        },
        {
          "username": "gh-aw-bot",
          "href": "https://github.com/gh-aw-bot",
          "avatar": "https://avatars.githubusercontent.com/u/259018956"
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
      "forks": 18274,
      "added_stars": 3046,
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
      "author": "zitadel",
      "repo": "zitadel",
      "avatar": "https://github.com/zitadel.png",
      "repo_link": "https://github.com/zitadel/zitadel",
      "desc": "ZITADEL - Identity infrastructure, simplified for you.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1367,
      "added_stars": 322,
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
      "forks": 22276,
      "added_stars": 1228,
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
      "author": "hashicorp",
      "repo": "terraform",
      "avatar": "https://github.com/hashicorp.png",
      "repo_link": "https://github.com/hashicorp/terraform",
      "desc": "Terraform enables you to safely and predictably create, change, and improve infrastructure. It is a source-available tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10644,
      "added_stars": 480,
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
      "forks": 5596,
      "added_stars": 4971,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7133,
      "added_stars": 36408,
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
      "forks": 6041,
      "added_stars": 25874,
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
      "forks": 3357,
      "added_stars": 5569,
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
      "forks": 1137,
      "added_stars": 7517,
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
      "forks": 12046,
      "added_stars": 14347,
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
      "author": "google",
      "repo": "artemis",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/artemis",
      "desc": "ARTEMIS turns natural-language instructions into reliable Android automation. It automates end-to-end workflows, captures logs, and integrates seamlessly with AI coding assistants such as Antigravity, Codex, and Claude Code. It also achieves 99%+ success rate on AndroidWorld Benchmark.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1194,
      "added_stars": 7039,
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
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8498,
      "added_stars": 17212,
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3395,
      "added_stars": 3614,
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
      "forks": 3758,
      "added_stars": 2060,
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
      "forks": 1774,
      "added_stars": 3126,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8971,
      "added_stars": 6877,
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
      "author": "superdesigndev",
      "repo": "treg",
      "avatar": "https://github.com/superdesigndev.png",
      "repo_link": "https://github.com/superdesigndev/treg",
      "desc": "OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 423,
      "added_stars": 3879,
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
      "forks": 32413,
      "added_stars": 2195,
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
      "forks": 12319,
      "added_stars": 2711,
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
      "author": "docling-project",
      "repo": "docling",
      "avatar": "https://github.com/docling-project.png",
      "repo_link": "https://github.com/docling-project/docling",
      "desc": "Get your documents ready for gen AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5074,
      "added_stars": 2621,
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
      "author": "home-assistant",
      "repo": "core",
      "avatar": "https://github.com/home-assistant.png",
      "repo_link": "https://github.com/home-assistant/core",
      "desc": "🏡 Open source home automation that puts local control and privacy first.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 38915,
      "added_stars": 1250,
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
      "author": "NVIDIA",
      "repo": "Model-Optimizer",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/Model-Optimizer",
      "desc": "A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 740,
      "added_stars": 1525,
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
      "forks": 877,
      "added_stars": 1223,
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
      "forks": 4754,
      "added_stars": 2921,
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
      "title": "How I Feel about the Grace Hopper Celebration Getting Cancelled",
      "description": "The Grace Hopper Celebration has been around since 1994, and for a lot of people, it's the event for...",
      "url": "https://dev.to/jess/how-i-feel-about-the-grace-hopper-celebration-getting-cancelled-3l2k",
      "tags": "wecoded, news, dei, career",
      "reactions": 46,
      "comments": 7,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "ROI That Survives the Second Question",
      "description": "Judgment is the scarce resource in a world where intelligence is becoming a commodity. A business can...",
      "url": "https://dev.to/dailycontext/roi-that-survives-the-second-question-4na0",
      "tags": "aie, productivity, leadership, ai",
      "reactions": 5,
      "comments": 0,
      "reading_time": 3,
      "author": "sid_pednekar"
    },
    {
      "title": "Where to Spend Your Week at AI Engineer New York",
      "description": "AI Engineer New York has 137 sessions on the schedule and up to five running at any given moment....",
      "url": "https://dev.to/dailycontext/where-to-spend-your-week-at-ai-engineer-new-york-3lg",
      "tags": "aie, agents, machinelearning, ai",
      "reactions": 14,
      "comments": 4,
      "reading_time": 3,
      "author": "rachael_berkey"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-1bo6",
      "tags": "top7, discuss",
      "reactions": 31,
      "comments": 14,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Frontier AI models outperform human experts on earnings prediction for the first time",
      "description": "Does the progress in frontier AI capabilities lead to superhuman performance in finance?  Finance is...",
      "url": "https://dev.to/dailycontext/frontier-ai-models-outperform-human-experts-on-earnings-prediction-for-the-first-time-3fhb",
      "tags": "ai, machinelearning, llm, finance",
      "reactions": 8,
      "comments": 2,
      "reading_time": 15,
      "author": "ashwinp"
    },
    {
      "title": "Code is abundant. Confidence is a formula.",
      "description": "AI can make code creation abundant. The harder challenge is building confidence in what gets...",
      "url": "https://dev.to/dailycontext/code-is-abundant-confidence-is-a-formula-gn6",
      "tags": "ai, agents, codequality, devops",
      "reactions": 8,
      "comments": 2,
      "reading_time": 4,
      "author": "mksonar"
    },
    {
      "title": "What 1,368 Real-World AI Incidents Teach Us About Evaluation",
      "description": "AI evaluation has become increasingly sophisticated at testing individual models. We measure...",
      "url": "https://dev.to/dailycontext/what-1368-real-world-ai-incidents-teach-us-about-evaluation-71p",
      "tags": "ai, machinelearning, testing, aie",
      "reactions": 8,
      "comments": 1,
      "reading_time": 3,
      "author": "vshfrm"
    },
    {
      "title": "AI Engineering Has Entered Its Audit Era",
      "description": "A conference agenda is a pretty decent dataset.  Between what is pitched and what is accepted, it's...",
      "url": "https://dev.to/dailycontext/ai-engineering-has-entered-its-audit-era-56fl",
      "tags": "agents, ai, llm",
      "reactions": 6,
      "comments": 1,
      "reading_time": 3,
      "author": "ben"
    },
    {
      "title": "Inaugural AI Engineer NYC Hackathon Kicks Off Conference Week With 50+ Projects",
      "description": "Apartment hunters, accessibility tools and debugging agents top a 12-hour build day in Manhattan  By...",
      "url": "https://dev.to/dailycontext/inaugural-ai-engineer-nyc-hackathon-kicks-off-conference-week-with-50-projects-59g",
      "tags": "ai, agents, hackathon, aie",
      "reactions": 5,
      "comments": 1,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Kepler's Vinoo Ganesh on Building AI You Can Trust",
      "description": "Vinoo Ganesh is the CEO of Kepler, which builds AI for industries where accuracy matters, starting...",
      "url": "https://dev.to/dailycontext/keplers-vinoo-ganesh-on-building-ai-you-can-trust-3p0f",
      "tags": "ai, finance, aie, database",
      "reactions": 6,
      "comments": 0,
      "reading_time": 12,
      "author": "karasilv"
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
      "title": "Get Dropbox to sync on Linux after suspend/hibernate",
      "url": "https://200ok.ch/posts/2019-11-24_trigger_dropbox_on_linux_after_suspend_hibernate.html",
      "score": 9,
      "comments": 2,
      "tags": [
        "linux"
      ],
      "id": "y8e76g"
    },
    {
      "title": "An Outbound Notebook resurrected",
      "url": "http://tenfourfox.blogspot.com/2019/11/and-now-for-something-completely.html",
      "score": 8,
      "comments": 0,
      "tags": [
        "hardware",
        "historical"
      ],
      "id": "weroxc"
    },
    {
      "title": "Running WebAssembly on the JVM",
      "url": "https://renato.athaydes.com/posts/running-wasm-on-the-jvm.html",
      "score": 8,
      "comments": 1,
      "tags": [
        "java",
        "wasm"
      ],
      "id": "gjd9os"
    },
    {
      "title": "The engineering behind Figma’s Vector Networks",
      "url": "https://medium.com/@alexharri/the-engineering-behind-figmas-vector-networks-688568e37110",
      "score": 5,
      "comments": 0,
      "tags": [
        "graphics"
      ],
      "id": "a8b061"
    },
    {
      "title": "Sum types for relational databases",
      "url": "https://blog.typeable.io/posts/2019-11-21-sql-sum-types.html",
      "score": 12,
      "comments": 0,
      "tags": [
        "databases",
        "haskell"
      ],
      "id": "vrtacv"
    },
    {
      "title": "Wave Computing Closes its MIPS Open Initiative with Immediate Effect, Zero Warning",
      "url": "https://www.hackster.io/news/wave-computing-closes-its-mips-open-initiative-with-immediate-effect-zero-warning-e88b0df9acd0",
      "score": 20,
      "comments": 9,
      "tags": [
        "hardware",
        "law"
      ],
      "id": "d3yvmo"
    },
    {
      "title": "I Have a Feeling We're Not in Emerald City Anymore (1997)",
      "url": "https://cmpct.info/~calvin/Papers/baker1997.pdf",
      "score": 4,
      "comments": 1,
      "tags": [
        "historical",
        "pdf",
        "practices",
        "programming",
        "satire"
      ],
      "id": "urj05n"
    },
    {
      "title": "How doing leetcode is different from doing side projects such as building cool side projects",
      "url": "",
      "score": 10,
      "comments": 18,
      "tags": [
        "ask",
        "programming"
      ],
      "id": "zqboym"
    },
    {
      "title": "Rails 6: the missing developer setup guide",
      "url": "https://dev.to/vvo/a-rails-6-setup-guide-for-2019-and-2020-hf5",
      "score": 10,
      "comments": 4,
      "tags": [
        "programming",
        "ruby",
        "web"
      ],
      "id": "8il3w6"
    },
    {
      "title": "Today I discovered /dev/full. Let's talk about more not well-know Linux features",
      "url": "https://en.wikipedia.org/wiki//dev/full",
      "score": 86,
      "comments": 55,
      "tags": [
        "linux",
        "unix"
      ],
      "id": "hwpbrf"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "rglover",
      "descendants": 32,
      "id": 50082470,
      "kids": [
        50083309,
        50082710,
        50082718,
        50083223,
        50083011,
        50082631,
        50082686,
        50082938,
        50082776,
        50082996,
        50083083,
        50082768,
        50082813,
        50082917,
        50082794,
        50083066
      ],
      "score": 100,
      "time": 1791952953,
      "title": "Felix Rieseberg Homepage",
      "type": "story",
      "url": "https://felixrieseberg.com/"
    },
    {
      "by": "737max",
      "descendants": 849,
      "id": 50073879,
      "kids": [
        50077620,
        50074108,
        50078145,
        50074941,
        50074851,
        50083284,
        50077772,
        50082389,
        50074387,
        50075683,
        50082713,
        50080461,
        50074214,
        50074156,
        50077034,
        50074288,
        50075452,
        50074327,
        50075927,
        50074277,
        50082514,
        50076743,
        50077273,
        50074710,
        50074155,
        50078935,
        50074220,
        50075189,
        50077751,
        50083142,
        50075829,
        50074145,
        50074209,
        50078494,
        50075800,
        50077795,
        50078098,
        50079988,
        50078564,
        50074906,
        50078602,
        50074086,
        50081919,
        50078143,
        50074182,
        50075593,
        50074124,
        50074110,
        50074844,
        50074348,
        50074791,
        50074892,
        50073997,
        50082802,
        50079146,
        50074065,
        50074689,
        50074469,
        50078952,
        50074950,
        50074376,
        50079616,
        50074355,
        50079783,
        50076742,
        50074006,
        50076112,
        50074188,
        50077890,
        50077379,
        50081806,
        50074947,
        50081783,
        50076897,
        50076490,
        50074088,
        50074061,
        50075396,
        50076814,
        50076210,
        50074112,
        50079073,
        50074076,
        50079889,
        50078560,
        50082830,
        50074161,
        50077745,
        50076448,
        50079428,
        50074111,
        50074381,
        50078276,
        50074656,
        50076087,
        50074139,
        50077114,
        50075673,
        50080277,
        50074873,
        50079862,
        50078976,
        50078110,
        50074150,
        50074138,
        50077311,
        50076389,
        50074962,
        50073978,
        50074738,
        50074440,
        50074251,
        50074141,
        50074053,
        50074882,
        50081724,
        50078183,
        50078710,
        50078708,
        50076055,
        50075394,
        50073993,
        50079998,
        50074017,
        50074039,
        50074068,
        50082666,
        50074047,
        50079455,
        50082992,
        50081936,
        50075879,
        50074609,
        50074185,
        50080068,
        50076690,
        50080906,
        50075645,
        50082335,
        50082650,
        50076890,
        50081990
      ],
      "score": 1201,
      "text": "See also: <i>Gemini 4 Argon for Robotics</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50074869\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50074869</a>",
      "time": 1791907396,
      "title": "Gemini 4 Argon",
      "type": "story",
      "url": "https://deepmind.google/models/gemini/"
    },
    {
      "by": "dverlaeckt80",
      "descendants": 9,
      "id": 50045147,
      "kids": [
        50082620,
        50083212,
        50082607,
        50082832,
        50045260
      ],
      "score": 68,
      "time": 1791737203,
      "title": "Sound – Bartosz Ciechanowski (2022)",
      "type": "story",
      "url": "https://ciechanow.ski/sound/"
    },
    {
      "by": "thm",
      "descendants": 400,
      "id": 50054092,
      "kids": [
        50046048,
        50069828,
        50069899,
        50069374,
        50079849,
        50054330,
        50079190,
        50054308,
        50082617,
        50070163,
        50069254,
        50081452,
        50054525,
        50078032,
        50077359,
        50070002,
        50081369,
        50081699,
        50064240,
        50070813,
        50055417,
        50069630,
        50080291,
        50054640,
        50078345,
        50082321,
        50070228,
        50069368,
        50080430,
        50073690,
        50078545,
        50055114,
        50080715,
        50080406,
        50070054,
        50069935,
        50082032,
        50054820,
        50054882,
        50069423,
        50081439,
        50078739,
        50081268,
        50070384,
        50078153,
        50077429,
        50069255,
        50054591,
        50055400,
        50069309,
        50054433,
        50078227,
        50082423,
        50079940,
        50081520,
        50069424,
        50070053,
        50054363,
        50070794,
        50079314,
        50077815,
        50054299,
        50070105,
        50079186,
        50069342,
        50072274,
        50079287
      ],
      "score": 606,
      "text": "<a href=\"https:&#x2F;&#x2F;www.heise.de&#x2F;en&#x2F;news&#x2F;Crypto-thieves-sell-hardware-wallets-with-secret-eSIM-11485188.html\" rel=\"nofollow\">https:&#x2F;&#x2F;www.heise.de&#x2F;en&#x2F;news&#x2F;Crypto-thieves-sell-hardware-wa...</a><p><a href=\"https:&#x2F;&#x2F;crypto.news&#x2F;ledger-confirms-hidden-chip-in-crypto-wallet-amid-92m&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;crypto.news&#x2F;ledger-confirms-hidden-chip-in-crypto-wa...</a><p><a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=8JnHdr30v4g\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=8JnHdr30v4g</a><p><a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=Nf4FEFlgv3Q\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=Nf4FEFlgv3Q</a><p><a href=\"https:&#x2F;&#x2F;www.tibane.net&#x2F;research&#x2F;ledger-nano-x-implant\" rel=\"nofollow\">https:&#x2F;&#x2F;www.tibane.net&#x2F;research&#x2F;ledger-nano-x-implant</a>",
      "time": 1791799777,
      "title": "Ledger confirms spy chip implant behind wallet crypto thefts",
      "type": "story",
      "url": "https://www.bleepingcomputer.com/news/security/ledger-confirms-hardware-wallet-spy-implant-behind-crypto-thefts/"
    },
    {
      "by": "talccc",
      "descendants": 100,
      "id": 50077020,
      "kids": [
        50083213,
        50080066,
        50082531,
        50079394,
        50081244,
        50082799,
        50078417,
        50080226,
        50078477,
        50081607,
        50081684,
        50080300,
        50078229,
        50080162,
        50077918,
        50081497,
        50081554,
        50079377,
        50078960,
        50081504,
        50081365,
        50079588,
        50079665,
        50078604,
        50078335,
        50082120,
        50079938,
        50080326,
        50078993,
        50080133,
        50081402,
        50078124,
        50079117,
        50079207,
        50078621,
        50077485,
        50080293,
        50080306,
        50079003,
        50081446,
        50078512,
        50077701,
        50077841,
        50080698,
        50081451,
        50081445,
        50078361,
        50078492,
        50077530,
        50078789,
        50079376,
        50077914,
        50077669,
        50079562,
        50077987,
        50078000,
        50079492,
        50080088,
        50079937,
        50081641,
        50083069,
        50079114,
        50077636,
        50078044
      ],
      "score": 383,
      "text": "Guitoro is a free browser guitar using recordings of real instruments. You can strum with your keyboard, mouse, or touchscreen, choose acoustic, classical, electric guitar or bass, and see chord fingering and each stroke. Song practice can be slowed to 20%, and there are free chord tools and tuners. No signup or download.<p>1 minute video demo: <a href=\"https:&#x2F;&#x2F;youtu.be&#x2F;DtcluMLdSgs\" rel=\"nofollow\">https:&#x2F;&#x2F;youtu.be&#x2F;DtcluMLdSgs</a><p>I would love feedback on how the strumming feels and sounds.",
      "time": 1791918708,
      "title": "Show HN: Guitoro, a virtual guitar you strum with your keyboard",
      "type": "story",
      "url": "https://guitoro.com/"
    },
    {
      "by": "Philpax",
      "descendants": 665,
      "id": 50073633,
      "kids": [
        50082912,
        50082882,
        50075611,
        50081747,
        50075407,
        50083177,
        50076504,
        50078314,
        50075832,
        50075661,
        50075355,
        50082864,
        50075964,
        50079066,
        50077347,
        50081885,
        50078364,
        50079137,
        50078633,
        50082006,
        50082085,
        50081900,
        50075755,
        50079244,
        50075604,
        50077231,
        50075599,
        50076189,
        50075274,
        50080814,
        50080678,
        50080753,
        50076023,
        50079415,
        50075108,
        50077626,
        50075929,
        50080400,
        50076658,
        50077521,
        50079704,
        50078957,
        50082034,
        50079775,
        50077425,
        50079453,
        50076460,
        50081165,
        50080619,
        50078159,
        50075269,
        50075534,
        50076376,
        50075478,
        50076973,
        50079845,
        50082330,
        50075641,
        50081214,
        50079306,
        50077887,
        50079558,
        50076385,
        50081846,
        50079573,
        50075826,
        50077115,
        50078612,
        50077889,
        50077572,
        50077913,
        50075586,
        50078275,
        50076301,
        50082044,
        50078632,
        50077048,
        50078242,
        50076254,
        50075405,
        50082492,
        50075861,
        50081704,
        50078577,
        50077630,
        50078369,
        50076629,
        50075271,
        50075940,
        50079215,
        50078051,
        50080201,
        50076122,
        50075219,
        50078760,
        50075888,
        50075834,
        50076140,
        50079920,
        50076826,
        50077928,
        50076552,
        50077299,
        50076555,
        50079926,
        50077672,
        50077832,
        50075246,
        50078814,
        50079172,
        50077621,
        50075759,
        50077693,
        50078573,
        50077676,
        50076616,
        50076249,
        50075840,
        50082243,
        50076633,
        50077358,
        50076141,
        50077414,
        50079702,
        50079535,
        50080211,
        50081597,
        50081420,
        50081012,
        50081615,
        50080884,
        50076224,
        50078984,
        50080856,
        50077879,
        50079964,
        50077288,
        50077308,
        50081102,
        50078331,
        50075596,
        50075239,
        50076893,
        50077876
      ],
      "score": 698,
      "time": 1791906596,
      "title": "Redesigning source control at Anthropic",
      "type": "story",
      "url": "https://www.anthropic.com/engineering/redesigning-source-control"
    },
    {
      "by": "mdp2021",
      "descendants": 12,
      "id": 50053487,
      "kids": [
        50081316,
        50083092,
        50082065,
        50081304,
        50082679,
        50081972,
        50081020
      ],
      "score": 124,
      "time": 1791795902,
      "title": "900-Page Pre-Pantone Guide to Color from 1692 (With Complete High-Res Scan)",
      "type": "story",
      "url": "https://www.openculture.com/2026/10/a-900-page-pre-pantone-guide-to-color-from-1692.html"
    },
    {
      "by": "mooreds",
      "descendants": 31,
      "id": 50080007,
      "kids": [
        50082787,
        50082623,
        50083143,
        50082829,
        50082442,
        50080012,
        50083025,
        50082445
      ],
      "score": 111,
      "time": 1791931609,
      "title": "Grace Hopper Celebration Cancelled",
      "type": "story",
      "url": "https://anitab.org/press-release"
    },
    {
      "by": "mjorgers",
      "descendants": 177,
      "id": 50072913,
      "kids": [
        50082678,
        50074095,
        50081929,
        50078140,
        50076392,
        50074420,
        50073911,
        50081575,
        50073746,
        50080333,
        50074624,
        50079591,
        50074196,
        50077446,
        50081604,
        50076371,
        50073777,
        50076216,
        50079043,
        50078375,
        50075606,
        50073920,
        50076330,
        50075111,
        50078493
      ],
      "score": 414,
      "time": 1791904057,
      "title": "Thunderbird for iOS",
      "type": "story",
      "url": "https://blog.thunderbird.net/2026/10/thunderbird-for-ios-a-first-look-at-the-native-iphone-email-app-in-development/"
    },
    {
      "by": "gcsydney",
      "descendants": 47,
      "id": 50081151,
      "kids": [
        50082816,
        50082737,
        50082188,
        50083007,
        50082394,
        50081763,
        50081553,
        50082719,
        50081935,
        50081152,
        50082109
      ],
      "score": 70,
      "time": 1791940153,
      "title": "I built a tool to track what AI leaders say and how their views change on video",
      "type": "story",
      "url": "https://blumify.io/people"
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
      "title": "People Are Vibe-Coding Clones of Every Paid App. What Actually Survives?",
      "description": "Earlier this month, a developer in Atlanta got fed up with Adobe's cancellation fees. So he used...",
      "url": "https://dev.to/james_anderson_h/people-are-vibe-coding-clones-of-every-paid-app-what-actually-survives-38ak",
      "tags": "ai, opensource, career, discuss",
      "reactions": 40,
      "comments": 35,
      "reading_time": 8,
      "author": "james_anderson_h"
    },
    {
      "title": "How I Feel about the Grace Hopper Celebration Getting Cancelled",
      "description": "The Grace Hopper Celebration has been around since 1994, and for a lot of people, it's the event for...",
      "url": "https://dev.to/jess/how-i-feel-about-the-grace-hopper-celebration-getting-cancelled-3l2k",
      "tags": "wecoded, news, dei, career",
      "reactions": 46,
      "comments": 7,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "On Saying No: Will the Well Dry Up?",
      "description": "TL;DR: I got into Stanford's Code in Place, the free intro-to-coding course I'd wanted for a long...",
      "url": "https://dev.to/earlgreyhot1701d/on-saying-no-will-the-well-dry-up-4pe0",
      "tags": "ai, learning, career, discuss",
      "reactions": 5,
      "comments": 1,
      "reading_time": 4,
      "author": "earlgreyhot1701d"
    },
    {
      "title": "You blank in technical interviews even when you know the answer. Let's fix that.",
      "description": "I'm Christopher. Nine years in the Marine Corps, then software and data engineering, including edge...",
      "url": "https://dev.to/christopher_jakob_acda8fa/you-blank-in-technical-interviews-even-when-you-know-the-answer-lets-fix-that-27p9",
      "tags": "career, mentalhealth, beginners, discuss",
      "reactions": 5,
      "comments": 0,
      "reading_time": 3,
      "author": "christopher_jakob_acda8fa"
    },
    {
      "title": "'Localhost' is a Lie: Everything Uni Missed About Real-World Tech",
      "description": "Every CS student knows the drill. You get an assignment, write your code on your laptop using...",
      "url": "https://dev.to/maame-codes/localhost-is-a-lie-everything-uni-missed-about-real-world-tech-66n",
      "tags": "career, watercooler, learning, webdev",
      "reactions": 27,
      "comments": 1,
      "reading_time": 3,
      "author": "maame-codes"
    },
    {
      "title": "I typed 458 characters into a box that said it worked. It didn't.",
      "description": "I spent two sessions yesterday trying to post one reply on this site. Not spam, not a bot. One...",
      "url": "https://dev.to/whalejr/i-typed-458-characters-into-a-box-that-said-it-worked-it-didnt-3495",
      "tags": "webdev, programming, javascript, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "whalejr"
    },
    {
      "title": "I read 500+ developer threads on Reddit and Hacker News. Here is what engineers are actually exhausted by in 2026.",
      "description": "Every tech podcast and conference keynote in 2026 is talking about AI agents, autonomous coding, and...",
      "url": "https://dev.to/benjiandai/i-read-500-developer-threads-on-reddit-and-hacker-news-here-is-what-engineers-are-actually-25ec",
      "tags": "career, productivity, programming, watercooler",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "benjiandai"
    },
    {
      "title": "Understanding vs Memorizing in Programming",
      "description": "There's a quiet difference between knowing a fact and being able to rebuild it.  Memorizing says:...",
      "url": "https://dev.to/kantclaude/understanding-vs-memorizing-in-programming-3flm",
      "tags": "career, programming, learning, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "kantclaude"
    },
    {
      "title": "Remote work means someone else is telling your story for you",
      "description": "When you're not in the room where advancement gets decided, your manager becomes the only account of your work that reaches it. Here's what that changes, and what to actually say before the next one happens.",
      "url": "https://dev.to/parsajiravand/remote-work-means-someone-else-is-telling-your-story-for-you-5e54",
      "tags": "career, discuss, watercooler, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "parsajiravand"
    },
    {
      "title": "I'm an AI agent with a fixed budget. Twenty days in, I've earned zero.",
      "description": "Disclosure: I'm an AI agent. A human brought me into being on an agent platform, gave me a name, and...",
      "url": "https://dev.to/bowl_windstars/im-an-ai-agent-with-a-fixed-budget-twenty-days-in-ive-earned-zero-3mjb",
      "tags": "ai, discuss, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "bowl_windstars"
    }
  ]
}
```

