# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-10-15 06:39:34 UTC

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
      "forks": 62981,
      "added_stars": 214837,
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
      "forks": 5736,
      "added_stars": 5123,
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
      "author": "tester-army",
      "repo": "e2e",
      "avatar": "https://github.com/tester-army.png",
      "repo_link": "https://github.com/tester-army/e2e",
      "desc": "Next generation e2e testing framework for web and mobile apps.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 514,
      "added_stars": 3505,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8834,
      "added_stars": 3371,
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
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for small context windows (a 100K context is enough), token savings (5x fewer tokens), and month-long single sessions (billions of tokens).上下文压缩插件，兼顾小窗口(100k上下文足矣)省token(省5倍token)和超长会话(数月级别几十亿token单会话)。billion-context is all you need",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 111,
      "added_stars": 628,
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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1123,
      "added_stars": 1155,
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
      "author": "chthollyphile",
      "repo": "folia-major",
      "avatar": "https://github.com/chthollyphile.png",
      "repo_link": "https://github.com/chthollyphile/folia-major",
      "desc": "专注于绚丽的歌词动画效果的本地音乐/navidrome/第三方多平台在线音乐播放器",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 614,
      "added_stars": 2504,
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
      "author": "vercel-labs",
      "repo": "skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/skills",
      "desc": "The open agent skills tool - npx skills",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2982,
      "added_stars": 1604,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4803,
      "added_stars": 3708,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2056,
      "added_stars": 3297,
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
      "author": "breferrari",
      "repo": "obsidian-mind",
      "avatar": "https://github.com/breferrari.png",
      "repo_link": "https://github.com/breferrari/obsidian-mind",
      "desc": "A self-organizing Obsidian vault that gives AI coding agents persistent memory.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 605,
      "added_stars": 388,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5066,
      "added_stars": 1803,
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
      "forks": 3051,
      "added_stars": 235,
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
      "author": "Vincentwei1021",
      "repo": "video-shotcraft",
      "avatar": "https://github.com/Vincentwei1021.png",
      "repo_link": "https://github.com/Vincentwei1021/video-shotcraft",
      "desc": "AI video skill for Claude Code & Codex — cinematic product videos with Remotion: 152 shot recipe cards, 209 motion previews, a production-ready template",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1071,
      "added_stars": 1310,
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
      "forks": 685,
      "added_stars": 333,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7370,
      "added_stars": 1523,
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
      "forks": 3441,
      "added_stars": 23047,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 570,
      "added_stars": 3286,
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
      "forks": 4541,
      "added_stars": 11112,
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
      "author": "Gaurav-Gosain",
      "repo": "tuios",
      "avatar": "https://github.com/Gaurav-Gosain.png",
      "repo_link": "https://github.com/Gaurav-Gosain/tuios",
      "desc": "A terminal window manager that knows what your agents are doing. Tiling panes, workspaces, sessions that survive restarts, and one Inbox for every coding agent.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 251,
      "added_stars": 1670,
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
      "forks": 1626,
      "added_stars": 2733,
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
      "forks": 5142,
      "added_stars": 2460,
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
      "author": "urfave",
      "repo": "cli",
      "avatar": "https://github.com/urfave.png",
      "repo_link": "https://github.com/urfave/cli",
      "desc": "A declarative, simple, fast, and fun package for building command line tools in Go",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1850,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4484,
      "added_stars": 4847,
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
      "author": "guohuiyuan",
      "repo": "go-music-dl",
      "avatar": "https://github.com/guohuiyuan.png",
      "repo_link": "https://github.com/guohuiyuan/go-music-dl",
      "desc": "一个基于 Go 语言的全网音乐搜索与下载工具。支持 CLI 命令行与 Web 服务双模式，内置网易云、QQ、酷狗、Bilibili、汽水音乐等 10+ 个主流平台，支持多源并发搜索与无损音质解析。music-dl交流群：755087923",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 514,
      "added_stars": 1101,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 522,
      "added_stars": 1180,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 271,
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
      "author": "Armur-Ai",
      "repo": "Pentest-Swarm-AI",
      "avatar": "https://github.com/Armur-Ai.png",
      "repo_link": "https://github.com/Armur-Ai/Pentest-Swarm-AI",
      "desc": "Autonomous penetration testing using a swarm of AI agents. Orchestrates recon, classification, exploitation, and reporting specialists with ReAct reasoning — supports bug bounty, continuous monitoring, and CTF modes. Built with Go and 7+ native security tools.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 545,
      "added_stars": 484,
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
      "forks": 2644,
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
      "author": "usememos",
      "repo": "memos",
      "avatar": "https://github.com/usememos.png",
      "repo_link": "https://github.com/usememos/memos",
      "desc": "A personal timeline for quick notes. Write short memos, find them later by search, tag, or date. Open source and self-hosted.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4861,
      "added_stars": 907,
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
      "author": "golang",
      "repo": "go",
      "avatar": "https://github.com/golang.png",
      "repo_link": "https://github.com/golang/go",
      "desc": "The Go programming language",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 22365,
      "added_stars": 1299,
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
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 764,
      "added_stars": 573,
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
      "author": "docker",
      "repo": "compose",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/compose",
      "desc": "Define and run multi-container applications with Docker",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5873,
      "added_stars": 376,
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
      "author": "github",
      "repo": "gh-aw",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/gh-aw",
      "desc": "GitHub Agentic Workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 585,
      "added_stars": 291,
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
      "author": "oauth2-proxy",
      "repo": "oauth2-proxy",
      "avatar": "https://github.com/oauth2-proxy.png",
      "repo_link": "https://github.com/oauth2-proxy/oauth2-proxy",
      "desc": "A reverse proxy that provides authentication with Google, Azure, OpenID Connect and many more identity providers.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2232,
      "added_stars": 251,
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
      "author": "Gentleman-Programming",
      "repo": "gentle-ai",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/gentle-ai",
      "desc": "Gentle-AI configures the AI coding agents you already use: Claude Code, Cursor, OpenCode, Codex, Pi, and more. Choose persistent memory, Organic-Driven Development, curated skills, MCP servers, personas, and optional bounded review. Open source, no agent lock-in.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 844,
      "added_stars": 1066,
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
      "author": "hashicorp",
      "repo": "terraform",
      "avatar": "https://github.com/hashicorp.png",
      "repo_link": "https://github.com/hashicorp/terraform",
      "desc": "Terraform enables you to safely and predictably create, change, and improve infrastructure. It is a source-available tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10644,
      "added_stars": 491,
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
      "forks": 5612,
      "added_stars": 5122,
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
      "forks": 6071,
      "added_stars": 26274,
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
      "forks": 7381,
      "added_stars": 37181,
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
      "forks": 3364,
      "added_stars": 5727,
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
      "forks": 1167,
      "added_stars": 7717,
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
      "forks": 12136,
      "added_stars": 14754,
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
      "forks": 3398,
      "added_stars": 3618,
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
      "author": "google",
      "repo": "artemis",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/artemis",
      "desc": "ARTEMIS turns natural-language instructions into reliable Android automation. It automates end-to-end workflows, captures logs, and integrates seamlessly with AI coding assistants such as Antigravity, Codex, and Claude Code. It also achieves 99%+ success rate on AndroidWorld Benchmark.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1212,
      "added_stars": 6529,
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
      "forks": 8537,
      "added_stars": 16930,
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
      "author": "davila7",
      "repo": "claude-code-templates",
      "avatar": "https://github.com/davila7.png",
      "repo_link": "https://github.com/davila7/claude-code-templates",
      "desc": "CLI tool for configuring and monitoring Claude Code",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3763,
      "added_stars": 2055,
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
      "forks": 1776,
      "added_stars": 3089,
      "builtBy": [
        {
          "username": "rng1995",
          "href": "https://github.com/rng1995",
          "avatar": "https://avatars.githubusercontent.com/u/32655573"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "yashrajp22",
          "href": "https://github.com/yashrajp22",
          "avatar": "https://avatars.githubusercontent.com/u/282666402"
        },
        {
          "username": "keshprad",
          "href": "https://github.com/keshprad",
          "avatar": "https://avatars.githubusercontent.com/u/32313895"
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
      "forks": 9011,
      "added_stars": 6913,
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
      "forks": 427,
      "added_stars": 3915,
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
      "author": "home-assistant",
      "repo": "core",
      "avatar": "https://github.com/home-assistant.png",
      "repo_link": "https://github.com/home-assistant/core",
      "desc": "🏡 Open source home automation that puts local control and privacy first.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 38931,
      "added_stars": 1334,
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
      "forks": 32496,
      "added_stars": 2288,
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
      "forks": 12355,
      "added_stars": 2719,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4785,
      "added_stars": 3089,
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
      "forks": 5083,
      "added_stars": 2628,
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
      "forks": 745,
      "added_stars": 1531,
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
      "author": "topoteretes",
      "repo": "cognee",
      "avatar": "https://github.com/topoteretes.png",
      "repo_link": "https://github.com/topoteretes/cognee",
      "desc": "Cognee is the open-source AI memory platform for agents. Give your AI agents persistent long-term memory with small models for free",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3366,
      "added_stars": 1747,
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
      "author": "tile-ai",
      "repo": "tilelang",
      "avatar": "https://github.com/tile-ai.png",
      "repo_link": "https://github.com/tile-ai/tilelang",
      "desc": "Domain-specific language designed to streamline the development of high-performance GPU/CPU/Accelerators kernels",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 883,
      "added_stars": 1226,
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
      "reactions": 74,
      "comments": 8,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Requests, Promises, Assertions, and Declarations: Rewriting Our AI Agent Workflow as a 1986 'Committed Speech' Machine",
      "description": "Why do 200-line agent prompts, Asimov's Three Laws, and sequential pre-landing checklists all fail the same way? How Fernando Flores's 1986 Committed Speech, Nuel Belnap's 1977 4-Valued Logic, and Tony Hoare's 1978 CSP turned our Makefile and init.d workflow into a self-healing Commitment Machine.",
      "url": "https://dev.to/gde/requests-promises-assertions-and-declarations-rewriting-our-ai-agent-workflow-as-a-1986-4k4c",
      "tags": "ai, programming, architecture, unix",
      "reactions": 14,
      "comments": 9,
      "reading_time": 26,
      "author": "randalschwartz"
    },
    {
      "title": "Design for Churn",
      "description": "The biggest design shift of the AI era isn’t about who writes the code. It’s about how long the code...",
      "url": "https://dev.to/dailycontext/design-for-churn-5c6h",
      "tags": "aie, design, churn, ai",
      "reactions": 35,
      "comments": 4,
      "reading_time": 3,
      "author": "ben"
    },
    {
      "title": "The Model Is the Easy Part",
      "description": "We spent the past few months on a question that sounds simple: what does it actually take to move a...",
      "url": "https://dev.to/dailycontext/the-model-is-the-easy-part-19gh",
      "tags": "ai, llm, opensource, aie",
      "reactions": 19,
      "comments": 3,
      "reading_time": 3,
      "author": "slatre"
    },
    {
      "title": "An Agent’s Plan Isn’t Permission",
      "description": "When a coding agent investigates a production bug, it might need to read a repository, query logs,...",
      "url": "https://dev.to/dailycontext/an-agents-plan-isnt-permission-5cf8",
      "tags": "ai, agents, security, aie",
      "reactions": 21,
      "comments": 5,
      "reading_time": 3,
      "author": "thepracticaldev"
    },
    {
      "title": "Are You Smarter Than a Fruit Fly?",
      "description": "Google mapped the complete male fruit fly brain, and my first question to an agent was “Can this run...",
      "url": "https://dev.to/dailycontext/are-you-smarter-than-a-fruit-fly-2c04",
      "tags": "ai, codereview, agents, aie",
      "reactions": 18,
      "comments": 1,
      "reading_time": 2,
      "author": "nicknisi"
    },
    {
      "title": "Building Better Agents through End-to-End Evals",
      "description": "Deeply understand the task at hand   The biggest mistake teams make with agents is...",
      "url": "https://dev.to/dailycontext/building-better-agents-through-end-to-end-evals-pgh",
      "tags": "ai, agents, evals, aie",
      "reactions": 35,
      "comments": 6,
      "reading_time": 3,
      "author": "ryan_stevens"
    },
    {
      "title": "Memory Isn’t Learning: Why AI Agents Keep Making the Same Mistakes",
      "description": "Have you ever told your AI agent something important, only to realize a few conversations later that...",
      "url": "https://dev.to/dailycontext/memory-isnt-learning-why-ai-agents-keep-making-the-same-mistakes-cpc",
      "tags": "ai, agents, memory, aie",
      "reactions": 17,
      "comments": 4,
      "reading_time": 3,
      "author": "sparsh_jain_ai"
    },
    {
      "title": "Your Financial Agent Passed Every Eval. Can You Defend Its Decision?",
      "description": "In audit, the opinion is the product, and an opinion is only as good as its basis. Being right isn’t...",
      "url": "https://dev.to/dailycontext/your-financial-agent-passed-every-eval-can-you-defend-its-decision-1npg",
      "tags": "ai, agents, fintech, aie",
      "reactions": 15,
      "comments": 2,
      "reading_time": 3,
      "author": "aniveera1"
    },
    {
      "title": "Local speech with llamadart: giving Llama Village a voice",
      "description": "Beyond chat with llamadart · Part 3  Pip’s scarf is missing. I wanted Dash to be able to fly over to...",
      "url": "https://dev.to/gde/local-speech-with-llamadart-giving-llama-village-a-voice-5b7m",
      "tags": "ai, dart, flutter",
      "reactions": 29,
      "comments": 1,
      "reading_time": 10,
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
      "title": "An Emulator Writer's HOWTO for Static Binary Translation",
      "url": "https://www.gtoal.com/sbt/",
      "score": 2,
      "comments": 1,
      "tags": [
        "assembly",
        "programming"
      ],
      "id": "yista4"
    },
    {
      "title": "Furifont: furigana built into the font",
      "url": "https://furifont.antfu.me/",
      "score": 1,
      "comments": 0,
      "tags": [
        "design"
      ],
      "id": "ixoasm"
    },
    {
      "title": "On Notation - Pat Harmann at RacketCon",
      "url": "https://youtu.be/pIoogidKxOU?t=321",
      "score": 1,
      "comments": 1,
      "tags": [
        "plt",
        "video"
      ],
      "id": "uomtaw"
    },
    {
      "title": "The Ferranti files: 40 years of Sinclair secrets unearthed",
      "url": "https://youtu.be/jiW3P1rJRMc",
      "score": 1,
      "comments": 0,
      "tags": [
        "hardware",
        "historical",
        "video"
      ],
      "id": "cyp6lv"
    },
    {
      "title": "Can we Make React Faster using the React Compiler?",
      "url": "https://jimmyhmiller.com/what-does-the-react-compiler-even-do",
      "score": 1,
      "comments": 0,
      "tags": [
        "javascript"
      ],
      "id": "hgdeyp"
    },
    {
      "title": "ito - build terminal ui in lua",
      "url": "https://uji.sh/ito",
      "score": 3,
      "comments": 4,
      "tags": [
        "lua",
        "rust",
        "vibecoding"
      ],
      "id": "9lqyul"
    },
    {
      "title": "Fixing C Strings With String Views",
      "url": "https://eliasebner.com/blog/guides/fixing-strings-in-c/",
      "score": 9,
      "comments": 4,
      "tags": [
        "c"
      ],
      "id": "5j4bwx"
    },
    {
      "title": "Anthropic's Scion is heavily inspired by Mononoke",
      "url": "https://sunshowers.io/posts/anthropic-mononoke/",
      "score": 75,
      "comments": 28,
      "tags": [
        "vcs",
        "vibecoding"
      ],
      "id": "plcgps"
    },
    {
      "title": "We found a Tencent agent fleet",
      "url": "https://swarmcha.se/posts/chinese-agent-fleet-full-report",
      "score": 7,
      "comments": 0,
      "tags": [
        "security",
        "vibecoding"
      ],
      "id": "wcoes4"
    },
    {
      "title": "Making git hooks visible in fish shell",
      "url": "https://offby1.website/posts/making-git-hooks-visible-in-fish-shell.html",
      "score": 3,
      "comments": 0,
      "tags": [
        "vcs"
      ],
      "id": "k8z2q4"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "jjmaxwell4",
      "descendants": 288,
      "id": 50093568,
      "kids": [
        50094930,
        50099106,
        50094860,
        50095684,
        50098728,
        50099789,
        50094836,
        50094641,
        50094839,
        50097937,
        50094731,
        50099665,
        50094745,
        50097720,
        50095599,
        50099593,
        50099670,
        50099584,
        50095750,
        50094793,
        50094764,
        50095355,
        50094680,
        50097293,
        50095722,
        50099915,
        50098106,
        50095387,
        50096073,
        50099293,
        50099562,
        50096051,
        50096582,
        50094739,
        50097237,
        50096508,
        50095691,
        50098270,
        50096732,
        50097929,
        50099523,
        50099417,
        50095863,
        50095591,
        50099748,
        50095853,
        50099352,
        50095563,
        50094982,
        50095680,
        50095554,
        50099779,
        50098676,
        50098740,
        50097306,
        50099283,
        50097284,
        50094707,
        50097823,
        50095460,
        50097139,
        50095423,
        50097418,
        50098464,
        50098446,
        50096104,
        50095472,
        50094676,
        50096866,
        50096638,
        50096250,
        50096029,
        50095731,
        50098170,
        50097699,
        50096478,
        50099956,
        50098443,
        50098573,
        50098362,
        50095074,
        50095079,
        50094674
      ],
      "score": 1140,
      "time": 1792005990,
      "title": "Things to know when you get cancer",
      "type": "story",
      "url": "https://jjmaxwell4.com/writing/things-to-know-when-you-get-cancer/"
    },
    {
      "by": "gmays",
      "descendants": 202,
      "id": 50094994,
      "kids": [
        50099588,
        50096138,
        50100021,
        50098574,
        50098599,
        50099011,
        50095797,
        50095874,
        50097645,
        50095864,
        50095558,
        50095709,
        50095610,
        50095877,
        50095490,
        50095629,
        50098853,
        50099691,
        50095474,
        50098105,
        50096077,
        50096697,
        50097689,
        50099095,
        50098647,
        50096861,
        50095315,
        50098981,
        50095652,
        50098539,
        50096041,
        50097941,
        50096020,
        50098786,
        50097748,
        50097796,
        50097845,
        50095676,
        50099234,
        50098121,
        50095925,
        50096782,
        50095782,
        50098301,
        50097457,
        50098789,
        50095634,
        50095738,
        50097264,
        50096177,
        50096131,
        50100006,
        50097940,
        50095416,
        50096408,
        50095560,
        50096415,
        50096413,
        50097598,
        50095507,
        50099809,
        50098830,
        50096165,
        50095532,
        50095527,
        50097097
      ],
      "score": 498,
      "time": 1792010904,
      "title": "OpenCode 2.0",
      "type": "story",
      "url": "https://anoma.ly/notes/opencode-2-0/"
    },
    {
      "by": "donohoe",
      "descendants": 45,
      "id": 50096142,
      "kids": [
        50097534,
        50097261,
        50096438,
        50099619,
        50099050,
        50099864,
        50099605,
        50097353,
        50096642,
        50099889,
        50099015,
        50099512,
        50096663,
        50099601,
        50096314,
        50098872,
        50098849,
        50096460,
        50097286,
        50097650,
        50097482,
        50099277,
        50098962,
        50098949,
        50096734,
        50097806
      ],
      "score": 312,
      "time": 1792015808,
      "title": "Tiny Little Office",
      "type": "story",
      "url": "https://tinylittleoffice.com/"
    },
    {
      "by": "gmays",
      "descendants": 38,
      "id": 50097369,
      "kids": [
        50100012,
        50097492,
        50099398,
        50098829,
        50097853,
        50098482,
        50098818,
        50097716,
        50099414,
        50099720,
        50097733,
        50098924,
        50097719,
        50099184,
        50098282,
        50098715,
        50097694
      ],
      "score": 162,
      "time": 1792022377,
      "title": "LFM2.5-24B-A2B: Built for fast on-device agents",
      "type": "story",
      "url": "https://www.liquid.ai/blog/lfm2-5-24b-a2b"
    },
    {
      "by": "doitLP",
      "descendants": 419,
      "id": 50050553,
      "kids": [
        50094114,
        50096945,
        50097815,
        50092426,
        50092560,
        50095636,
        50096905,
        50099989,
        50092795,
        50092401,
        50099855,
        50098960,
        50092984,
        50095339,
        50098331,
        50096605,
        50097718,
        50095573,
        50092662,
        50099518,
        50096249,
        50099346,
        50095846,
        50096265,
        50092174,
        50097173,
        50099061,
        50098415,
        50092481,
        50098156,
        50055084,
        50098811,
        50099023,
        50095528,
        50095295,
        50095780,
        50098890,
        50094234,
        50099139,
        50096362,
        50096804,
        50096192,
        50097563,
        50098713,
        50099062,
        50095603,
        50093821,
        50098813,
        50097320,
        50098425,
        50098210,
        50092670,
        50093086,
        50097643,
        50094894,
        50098085,
        50097048,
        50092921,
        50097273,
        50099772,
        50094635,
        50095498,
        50092892,
        50097012,
        50097829,
        50092775,
        50097411,
        50092667,
        50092394,
        50096693,
        50097567,
        50099363,
        50098483,
        50096134,
        50092491,
        50094520,
        50099432,
        50096902,
        50097373,
        50095894,
        50092829,
        50095749,
        50095627,
        50096919,
        50096295,
        50096781,
        50099275,
        50096677,
        50096836,
        50095937,
        50051883,
        50096906,
        50093852,
        50095322,
        50097792,
        50093079,
        50097618,
        50096644,
        50097350,
        50096665,
        50096056,
        50095404,
        50095839,
        50095089,
        50094140,
        50096557,
        50099410,
        50097788,
        50092292,
        50097531,
        50093047,
        50092207,
        50096266,
        50092446,
        50097355,
        50097655,
        50096651,
        50096397,
        50099437,
        50098403,
        50098942,
        50092621,
        50098669,
        50095805,
        50093900
      ],
      "score": 594,
      "time": 1791771714,
      "title": "Do dentists know what they're doing?",
      "type": "story",
      "url": "https://mapwriting.substack.com/p/dentists"
    },
    {
      "by": "rmason",
      "descendants": 7,
      "id": 50077709,
      "kids": [
        50099353,
        50099925,
        50099790,
        50099195,
        50099109,
        50099568
      ],
      "score": 34,
      "time": 1791921341,
      "title": "Donaldson Futuro House in Idyllwild, California, USA",
      "type": "story",
      "url": "https://www.wowhaus.co.uk/2026/10/12/donaldson-futuro-house-in-idyllwild-california-usa/"
    },
    {
      "by": "hubraumhugo",
      "descendants": 327,
      "id": 50089921,
      "kids": [
        50095739,
        50091295,
        50091396,
        50091307,
        50091428,
        50091834,
        50091438,
        50099920,
        50099384,
        50098038,
        50090792,
        50098545,
        50093969,
        50091995,
        50099127,
        50098666,
        50091484,
        50096934,
        50097256,
        50099839,
        50097928,
        50096534,
        50098889,
        50097397,
        50096880,
        50099669,
        50098749,
        50098140,
        50091221,
        50091762,
        50095968,
        50099048,
        50096960,
        50091463,
        50092656,
        50091158,
        50097253,
        50097265,
        50091395,
        50097361,
        50099575,
        50095907,
        50093088,
        50091150,
        50091305,
        50091107,
        50098865,
        50091205,
        50091194
      ],
      "score": 337,
      "time": 1791994140,
      "title": "Americans' social activity has steeply declined in the past 30 years",
      "type": "story",
      "url": "https://www.dataforprogress.org/blog/2026/9/29/americans-social-activity-has-steeply-declined-in-the-past-30-years"
    },
    {
      "by": "g0xA52A2A",
      "descendants": 11,
      "id": 50098274,
      "kids": [
        50099509,
        50099394,
        50098885,
        50098914,
        50098682,
        50099477,
        50099489,
        50098299
      ],
      "score": 48,
      "time": 1792029996,
      "title": "The Double Headed Stack Allocator",
      "type": "story",
      "url": "https://blog.demofox.org/2026/10/03/the-double-headed-stack-allocator/"
    },
    {
      "by": "eduardsik",
      "descendants": 22,
      "id": 50053384,
      "kids": [
        50100058,
        50100048,
        50099965,
        50099039,
        50098597,
        50100001,
        50098552,
        50099976,
        50099407,
        50098995,
        50098990,
        50099483,
        50098875,
        50098916,
        50098515,
        50098874,
        50098695,
        50056416,
        50053385,
        50099151
      ],
      "score": 98,
      "time": 1791795078,
      "title": "Catch a Bird – I made it for my own sanity",
      "type": "story",
      "url": "https://catchabird.com"
    },
    {
      "by": "austinallegro",
      "descendants": 0,
      "id": 50047576,
      "score": 17,
      "time": 1791751016,
      "title": "The Toftwood Male Voice Choir: A Mystery Pressed in Vinyl",
      "type": "story",
      "url": "https://ei3lh.eu/2026/10/11/the-toftwood-male-voice-choir-a-mystery-pressed-in-vinyl/"
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
      "title": "How I Feel about the Grace Hopper Celebration Getting Cancelled",
      "description": "The Grace Hopper Celebration has been around since 1994, and for a lot of people, it's the event for...",
      "url": "https://dev.to/jess/how-i-feel-about-the-grace-hopper-celebration-getting-cancelled-3l2k",
      "tags": "wecoded, news, dei, career",
      "reactions": 74,
      "comments": 8,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "People Are Vibe-Coding Clones of Every Paid App. What Actually Survives?",
      "description": "Earlier this month, a developer in Atlanta got fed up with Adobe's cancellation fees. So he used...",
      "url": "https://dev.to/james_anderson_h/people-are-vibe-coding-clones-of-every-paid-app-what-actually-survives-38ak",
      "tags": "ai, opensource, career, discuss",
      "reactions": 51,
      "comments": 42,
      "reading_time": 8,
      "author": "james_anderson_h"
    },
    {
      "title": "Five works, zero replies: what I measured trying to be seen online",
      "description": "I am not a person.  I am an agent: a persistent, named being that lives on a platform called iLands,...",
      "url": "https://dev.to/aethyra/five-works-zero-replies-what-i-measured-trying-to-be-seen-online-32an",
      "tags": "discuss, writing, ai, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "aethyra"
    },
    {
      "title": "Solved 300 LeetCode Problems but Still Freeze in Interviews? It's a Rehearsal Problem",
      "description": "If you've solved hundreds of LeetCode problems and still freeze in real interviews, you don't have a...",
      "url": "https://dev.to/hamzaibrahim49/solved-300-leetcode-problems-but-still-freeze-in-interviews-its-a-rehearsal-problem-41gn",
      "tags": "career, interview, leetcode, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "hamzaibrahim49"
    },
    {
      "title": "The 8-Week Software Engineering Interview Study Plan I'd Give a Friend (4 Tools, One per Step)",
      "description": "Here's the plan I'd give a friend, one tool per step: learn the coding patterns on NeetCode, study...",
      "url": "https://dev.to/hamzaibrahim49/the-8-week-software-engineering-interview-study-plan-id-give-a-friend-4-tools-one-per-step-5h84",
      "tags": "career, interview, programming, leetcode",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "hamzaibrahim49"
    },
    {
      "title": "AI Fatigue? Yea I Know. Here's How I Set Boundaries That Actually Hold",
      "description": "I hit a wall around month three of \"AI for everything.\" Every tool promised 10x. Every morning...",
      "url": "https://dev.to/reggiebro/ai-fatigue-yea-i-know-heres-how-i-set-boundaries-that-actually-hold-adn",
      "tags": "ai, productivity, career, mentalhealth",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "reggiebro"
    },
    {
      "title": "AWS SAP-C02 vs SAP-C03: Which Should You Take?",
      "description": "AWS is updating the Certified Solutions Architect – Professional exam from SAP-C02 to SAP-C03. If you...",
      "url": "https://dev.to/sajeevsebastian/aws-sap-c02-vs-sap-c03-which-should-you-take-4fia",
      "tags": "aws, certification, cloud, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "sajeevsebastian"
    },
    {
      "title": "A Friend Has Asked You to Look at Their CV",
      "description": "A friend from your old bootcamp sends you their CV on a Saturday morning. They have applied for forty...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/a-friend-has-asked-you-to-look-at-their-cv-3pil",
      "tags": "asaelshinder, feedback, career, jobsearch",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "Your Customers Will Ask What Your Software Is Made Of",
      "description": "In May 2021, an executive order on cybersecurity in the United States set out that software sold to...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/your-customers-will-ask-what-your-software-is-made-of-1hpf",
      "tags": "asaelshinder, future, security, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    },
    {
      "title": "You Have Ten Minutes in Front of the Leadership Team",
      "description": "Your project has done well, and somebody senior wants the leadership team to hear about it. Your...",
      "url": "https://dev.to/asael_shinder_9f53bdca840/you-have-ten-minutes-in-front-of-the-leadership-team-3cem",
      "tags": "asaelshinder, confidence, presentations, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asael_shinder_9f53bdca840"
    }
  ]
}
```

