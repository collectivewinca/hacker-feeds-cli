# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-17 06:55:29 UTC

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
      "author": "multica-ai",
      "repo": "multica",
      "avatar": "https://github.com/multica-ai.png",
      "repo_link": "https://github.com/multica-ai/multica",
      "desc": "The open-source managed agents platform. Turn coding agents into real teammates — assign tasks, track progress, compound skills.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1837,
      "added_stars": 10588,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "forrestchang",
          "href": "https://github.com/forrestchang",
          "avatar": "https://avatars.githubusercontent.com/u/7857126"
        },
        {
          "username": "NevilleQingNY",
          "href": "https://github.com/NevilleQingNY",
          "avatar": "https://avatars.githubusercontent.com/u/145280634"
        },
        {
          "username": "Bohan-J",
          "href": "https://github.com/Bohan-J",
          "avatar": "https://avatars.githubusercontent.com/u/52446949"
        },
        {
          "username": "ldnvnbl",
          "href": "https://github.com/ldnvnbl",
          "avatar": "https://avatars.githubusercontent.com/u/3798479"
        }
      ]
    },
    {
      "author": "coleam00",
      "repo": "Archon",
      "avatar": "https://github.com/coleam00.png",
      "repo_link": "https://github.com/coleam00/Archon",
      "desc": "The first open-source harness builder for AI coding. Make AI coding deterministic and repeatable.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2885,
      "added_stars": 4309,
      "builtBy": [
        {
          "username": "Wirasm",
          "href": "https://github.com/Wirasm",
          "avatar": "https://avatars.githubusercontent.com/u/152263317"
        },
        {
          "username": "coleam00",
          "href": "https://github.com/coleam00",
          "avatar": "https://avatars.githubusercontent.com/u/47287758"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "leex279",
          "href": "https://github.com/leex279",
          "avatar": "https://avatars.githubusercontent.com/u/6664492"
        }
      ]
    },
    {
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4989,
      "added_stars": 12366,
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
          "username": "ousamabenyounes",
          "href": "https://github.com/ousamabenyounes",
          "avatar": "https://avatars.githubusercontent.com/u/2910651"
        },
        {
          "username": "rodboev",
          "href": "https://github.com/rodboev",
          "avatar": "https://avatars.githubusercontent.com/u/106971"
        }
      ]
    },
    {
      "author": "rowboatlabs",
      "repo": "rowboat",
      "avatar": "https://github.com/rowboatlabs.png",
      "repo_link": "https://github.com/rowboatlabs/rowboat",
      "desc": "Open-source AI coworker, with memory",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1190,
      "added_stars": 1603,
      "builtBy": [
        {
          "username": "ramnique",
          "href": "https://github.com/ramnique",
          "avatar": "https://avatars.githubusercontent.com/u/30795890"
        },
        {
          "username": "arkml",
          "href": "https://github.com/arkml",
          "avatar": "https://avatars.githubusercontent.com/u/6592213"
        },
        {
          "username": "akhisud3195",
          "href": "https://github.com/akhisud3195",
          "avatar": "https://avatars.githubusercontent.com/u/55130408"
        },
        {
          "username": "tusharmagar",
          "href": "https://github.com/tusharmagar",
          "avatar": "https://avatars.githubusercontent.com/u/47842976"
        }
      ]
    },
    {
      "author": "jamiepine",
      "repo": "voicebox",
      "avatar": "https://github.com/jamiepine.png",
      "repo_link": "https://github.com/jamiepine/voicebox",
      "desc": "The open-source voice synthesis studio",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2223,
      "added_stars": 4196,
      "builtBy": [
        {
          "username": "jamiepine",
          "href": "https://github.com/jamiepine",
          "avatar": "https://avatars.githubusercontent.com/u/32987599"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tomasmach",
          "href": "https://github.com/tomasmach",
          "avatar": "https://avatars.githubusercontent.com/u/52257177"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "selop",
          "href": "https://github.com/selop",
          "avatar": "https://avatars.githubusercontent.com/u/5173254"
        }
      ]
    },
    {
      "author": "sparkjsdev",
      "repo": "spark",
      "avatar": "https://github.com/sparkjsdev.png",
      "repo_link": "https://github.com/sparkjsdev/spark",
      "desc": "✨ An advanced 3D Gaussian Splatting renderer for THREE.js",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 238,
      "added_stars": 420,
      "builtBy": [
        {
          "username": "dmarcos",
          "href": "https://github.com/dmarcos",
          "avatar": "https://avatars.githubusercontent.com/u/39342"
        },
        {
          "username": "asundqui",
          "href": "https://github.com/asundqui",
          "avatar": "https://avatars.githubusercontent.com/u/1168753"
        },
        {
          "username": "mrxz",
          "href": "https://github.com/mrxz",
          "avatar": "https://avatars.githubusercontent.com/u/8823461"
        },
        {
          "username": "alex-mcneilly",
          "href": "https://github.com/alex-mcneilly",
          "avatar": "https://avatars.githubusercontent.com/u/115044628"
        },
        {
          "username": "feiss",
          "href": "https://github.com/feiss",
          "avatar": "https://avatars.githubusercontent.com/u/359872"
        }
      ]
    },
    {
      "author": "tradingview",
      "repo": "lightweight-charts",
      "avatar": "https://github.com/tradingview.png",
      "repo_link": "https://github.com/tradingview/lightweight-charts",
      "desc": "Performant financial charts built with HTML5 canvas",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2351,
      "added_stars": 929,
      "builtBy": [
        {
          "username": "timocov",
          "href": "https://github.com/timocov",
          "avatar": "https://avatars.githubusercontent.com/u/3112183"
        },
        {
          "username": "SlicedSilver",
          "href": "https://github.com/SlicedSilver",
          "avatar": "https://avatars.githubusercontent.com/u/3482679"
        },
        {
          "username": "eugene-korobko",
          "href": "https://github.com/eugene-korobko",
          "avatar": "https://avatars.githubusercontent.com/u/7079444"
        },
        {
          "username": "edew",
          "href": "https://github.com/edew",
          "avatar": "https://avatars.githubusercontent.com/u/7424084"
        },
        {
          "username": "kirchet",
          "href": "https://github.com/kirchet",
          "avatar": "https://avatars.githubusercontent.com/u/1572087"
        }
      ]
    },
    {
      "author": "YishenTu",
      "repo": "claudian",
      "avatar": "https://github.com/YishenTu.png",
      "repo_link": "https://github.com/YishenTu/claudian",
      "desc": "An Obsidian plugin that embeds Claude Code as an AI collaborator in your vault",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 492,
      "added_stars": 1619,
      "builtBy": [
        {
          "username": "YishenTu",
          "href": "https://github.com/YishenTu",
          "avatar": "https://avatars.githubusercontent.com/u/134207149"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "summerKK",
          "href": "https://github.com/summerKK",
          "avatar": "https://avatars.githubusercontent.com/u/19187969"
        },
        {
          "username": "AlexSuprun",
          "href": "https://github.com/AlexSuprun",
          "avatar": "https://avatars.githubusercontent.com/u/3644296"
        }
      ]
    },
    {
      "author": "fosrl",
      "repo": "pangolin",
      "avatar": "https://github.com/fosrl.png",
      "repo_link": "https://github.com/fosrl/pangolin",
      "desc": "Identity-aware VPN and reverse proxy for remote access",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 647,
      "added_stars": 327,
      "builtBy": [
        {
          "username": "oschwartz10612",
          "href": "https://github.com/oschwartz10612",
          "avatar": "https://avatars.githubusercontent.com/u/4999704"
        },
        {
          "username": "miloschwartz",
          "href": "https://github.com/miloschwartz",
          "avatar": "https://avatars.githubusercontent.com/u/6850869"
        },
        {
          "username": "Fredkiss3",
          "href": "https://github.com/Fredkiss3",
          "avatar": "https://avatars.githubusercontent.com/u/38298743"
        },
        {
          "username": "Lokowitz",
          "href": "https://github.com/Lokowitz",
          "avatar": "https://avatars.githubusercontent.com/u/127591405"
        }
      ]
    },
    {
      "author": "letta-ai",
      "repo": "letta-code",
      "avatar": "https://github.com/letta-ai.png",
      "repo_link": "https://github.com/letta-ai/letta-code",
      "desc": "The memory-first coding agent",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 232,
      "added_stars": 163,
      "builtBy": [
        {
          "username": "cpacker",
          "href": "https://github.com/cpacker",
          "avatar": "https://avatars.githubusercontent.com/u/5475622"
        },
        {
          "username": "letta-code",
          "href": "https://github.com/letta-code",
          "avatar": "https://avatars.githubusercontent.com/u/248085862"
        },
        {
          "username": "jnjpng",
          "href": "https://github.com/jnjpng",
          "avatar": "https://avatars.githubusercontent.com/u/13899997"
        },
        {
          "username": "devanshrj",
          "href": "https://github.com/devanshrj",
          "avatar": "https://avatars.githubusercontent.com/u/31609257"
        }
      ]
    },
    {
      "author": "snarktank",
      "repo": "ralph",
      "avatar": "https://github.com/snarktank.png",
      "repo_link": "https://github.com/snarktank/ralph",
      "desc": "Ralph is an autonomous AI agent loop that runs repeatedly until all PRD items are complete.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1698,
      "added_stars": 2184,
      "builtBy": [
        {
          "username": "denen99",
          "href": "https://github.com/denen99",
          "avatar": "https://avatars.githubusercontent.com/u/128247"
        },
        {
          "username": "snarktank",
          "href": "https://github.com/snarktank",
          "avatar": "https://avatars.githubusercontent.com/u/152063952"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "manav148",
          "href": "https://github.com/manav148",
          "avatar": "https://avatars.githubusercontent.com/u/1429961"
        },
        {
          "username": "S1M0N38",
          "href": "https://github.com/S1M0N38",
          "avatar": "https://avatars.githubusercontent.com/u/22257750"
        }
      ]
    },
    {
      "author": "gitroomhq",
      "repo": "postiz-app",
      "avatar": "https://github.com/gitroomhq.png",
      "repo_link": "https://github.com/gitroomhq/postiz-app",
      "desc": "📨 The ultimate social media scheduling tool, with a bunch of AI 🤖",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5147,
      "added_stars": 844,
      "builtBy": [
        {
          "username": "nevo-david",
          "href": "https://github.com/nevo-david",
          "avatar": "https://avatars.githubusercontent.com/u/100117126"
        },
        {
          "username": "egelhaus",
          "href": "https://github.com/egelhaus",
          "avatar": "https://avatars.githubusercontent.com/u/156946629"
        },
        {
          "username": "jamesread",
          "href": "https://github.com/jamesread",
          "avatar": "https://avatars.githubusercontent.com/u/2025715"
        },
        {
          "username": "jonathan-irvin",
          "href": "https://github.com/jonathan-irvin",
          "avatar": "https://avatars.githubusercontent.com/u/2481437"
        },
        {
          "username": "weblate",
          "href": "https://github.com/weblate",
          "avatar": "https://avatars.githubusercontent.com/u/1607653"
        }
      ]
    },
    {
      "author": "QwenLM",
      "repo": "qwen-code",
      "avatar": "https://github.com/QwenLM.png",
      "repo_link": "https://github.com/QwenLM/qwen-code",
      "desc": "An open-source AI agent that lives in your terminal.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2215,
      "added_stars": 1248,
      "builtBy": [
        {
          "username": "tanzhenxin",
          "href": "https://github.com/tanzhenxin",
          "avatar": "https://avatars.githubusercontent.com/u/480123"
        },
        {
          "username": "qwencoder",
          "href": "https://github.com/qwencoder",
          "avatar": "https://avatars.githubusercontent.com/u/224605497"
        },
        {
          "username": "yiliang114",
          "href": "https://github.com/yiliang114",
          "avatar": "https://avatars.githubusercontent.com/u/11473889"
        },
        {
          "username": "Mingholy",
          "href": "https://github.com/Mingholy",
          "avatar": "https://avatars.githubusercontent.com/u/14246397"
        },
        {
          "username": "LaZzyMan",
          "href": "https://github.com/LaZzyMan",
          "avatar": "https://avatars.githubusercontent.com/u/23273105"
        }
      ]
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 403
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2231,
      "added_stars": 7210,
      "builtBy": [
        {
          "username": "Wei-Shaw",
          "href": "https://github.com/Wei-Shaw",
          "avatar": "https://avatars.githubusercontent.com/u/26101719"
        },
        {
          "username": "touwaeriol",
          "href": "https://github.com/touwaeriol",
          "avatar": "https://avatars.githubusercontent.com/u/52620633"
        },
        {
          "username": "IanShaw027",
          "href": "https://github.com/IanShaw027",
          "avatar": "https://avatars.githubusercontent.com/u/131567472"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "slovx2",
          "href": "https://github.com/slovx2",
          "avatar": "https://avatars.githubusercontent.com/u/2713715"
        }
      ]
    },
    {
      "author": "QuantumNous",
      "repo": "new-api",
      "avatar": "https://github.com/QuantumNous.png",
      "repo_link": "https://github.com/QuantumNous/new-api",
      "desc": "A unified AI model hub for aggregation & distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemini-compatible formats. A centralized gateway for personal and enterprise model management. 🍥",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5612,
      "added_stars": 6296,
      "builtBy": [
        {
          "username": "Calcium-Ion",
          "href": "https://github.com/Calcium-Ion",
          "avatar": "https://avatars.githubusercontent.com/u/61247483"
        },
        {
          "username": "seefs001",
          "href": "https://github.com/seefs001",
          "avatar": "https://avatars.githubusercontent.com/u/40468931"
        },
        {
          "username": "t0ng7u",
          "href": "https://github.com/t0ng7u",
          "avatar": "https://avatars.githubusercontent.com/u/133845290"
        },
        {
          "username": "songquanpeng",
          "href": "https://github.com/songquanpeng",
          "avatar": "https://avatars.githubusercontent.com/u/39998050"
        }
      ]
    },
    {
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 344,
      "added_stars": 858,
      "builtBy": [
        {
          "username": "9seconds",
          "href": "https://github.com/9seconds",
          "avatar": "https://avatars.githubusercontent.com/u/831613"
        },
        {
          "username": "dolonet",
          "href": "https://github.com/dolonet",
          "avatar": "https://avatars.githubusercontent.com/u/86595509"
        },
        {
          "username": "savely-krasovsky",
          "href": "https://github.com/savely-krasovsky",
          "avatar": "https://avatars.githubusercontent.com/u/5345489"
        },
        {
          "username": "im-kulikov",
          "href": "https://github.com/im-kulikov",
          "avatar": "https://avatars.githubusercontent.com/u/888650"
        },
        {
          "username": "Dank-del",
          "href": "https://github.com/Dank-del",
          "avatar": "https://avatars.githubusercontent.com/u/63096193"
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
      "forks": 280,
      "added_stars": 1144,
      "builtBy": [
        {
          "username": "Alan-TheGentleman",
          "href": "https://github.com/Alan-TheGentleman",
          "avatar": "https://avatars.githubusercontent.com/u/6935240"
        },
        {
          "username": "egdev6",
          "href": "https://github.com/egdev6",
          "avatar": "https://avatars.githubusercontent.com/u/18334564"
        },
        {
          "username": "Twinber",
          "href": "https://github.com/Twinber",
          "avatar": "https://avatars.githubusercontent.com/u/5513621"
        },
        {
          "username": "SantiagoBobrik",
          "href": "https://github.com/SantiagoBobrik",
          "avatar": "https://avatars.githubusercontent.com/u/43079605"
        },
        {
          "username": "sanurb",
          "href": "https://github.com/sanurb",
          "avatar": "https://avatars.githubusercontent.com/u/60886336"
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
      "forks": 447,
      "added_stars": 909,
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
          "username": "TejasGhatte",
          "href": "https://github.com/TejasGhatte",
          "avatar": "https://avatars.githubusercontent.com/u/64637256"
        },
        {
          "username": "Radheshg04",
          "href": "https://github.com/Radheshg04",
          "avatar": "https://avatars.githubusercontent.com/u/61974742"
        }
      ]
    },
    {
      "author": "mudler",
      "repo": "LocalAI",
      "avatar": "https://github.com/mudler.png",
      "repo_link": "https://github.com/mudler/LocalAI",
      "desc": "LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3957,
      "added_stars": 1916,
      "builtBy": [
        {
          "username": "mudler",
          "href": "https://github.com/mudler",
          "avatar": "https://avatars.githubusercontent.com/u/2420543"
        },
        {
          "username": "localai-bot",
          "href": "https://github.com/localai-bot",
          "avatar": "https://avatars.githubusercontent.com/u/139863280"
        },
        {
          "username": "dave-gray101",
          "href": "https://github.com/dave-gray101",
          "avatar": "https://avatars.githubusercontent.com/u/15875595"
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
      "forks": 2005,
      "added_stars": 5312,
      "builtBy": [
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
          "username": "sirozha",
          "href": "https://github.com/sirozha",
          "avatar": "https://avatars.githubusercontent.com/u/7765123"
        },
        {
          "username": "hhktony",
          "href": "https://github.com/hhktony",
          "avatar": "https://avatars.githubusercontent.com/u/1276702"
        }
      ]
    },
    {
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3852,
      "added_stars": 1398,
      "builtBy": [
        {
          "username": "nekohasekai",
          "href": "https://github.com/nekohasekai",
          "avatar": "https://avatars.githubusercontent.com/u/56506714"
        },
        {
          "username": "dyhkwong",
          "href": "https://github.com/dyhkwong",
          "avatar": "https://avatars.githubusercontent.com/u/50692134"
        },
        {
          "username": "H1JK",
          "href": "https://github.com/H1JK",
          "avatar": "https://avatars.githubusercontent.com/u/106379370"
        },
        {
          "username": "arm64v8a",
          "href": "https://github.com/arm64v8a",
          "avatar": "https://avatars.githubusercontent.com/u/48624112"
        }
      ]
    },
    {
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3012,
      "added_stars": 1335,
      "builtBy": [
        {
          "username": "johannesHarness",
          "href": "https://github.com/johannesHarness",
          "avatar": "https://avatars.githubusercontent.com/u/98799615"
        },
        {
          "username": "marko-gacesa",
          "href": "https://github.com/marko-gacesa",
          "avatar": "https://avatars.githubusercontent.com/u/1862257"
        },
        {
          "username": "cjlee01",
          "href": "https://github.com/cjlee01",
          "avatar": "https://avatars.githubusercontent.com/u/92757601"
        },
        {
          "username": "shivanand-harness",
          "href": "https://github.com/shivanand-harness",
          "avatar": "https://avatars.githubusercontent.com/u/148759765"
        },
        {
          "username": "tan-nhu",
          "href": "https://github.com/tan-nhu",
          "avatar": "https://avatars.githubusercontent.com/u/29714664"
        }
      ]
    },
    {
      "author": "wavetermdev",
      "repo": "waveterm",
      "avatar": "https://github.com/wavetermdev.png",
      "repo_link": "https://github.com/wavetermdev/waveterm",
      "desc": "An open-source, AI-integrated, cross-platform terminal for seamless workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 898,
      "added_stars": 1487,
      "builtBy": [
        {
          "username": "sawka",
          "href": "https://github.com/sawka",
          "avatar": "https://avatars.githubusercontent.com/u/2722291"
        },
        {
          "username": "esimkowitz",
          "href": "https://github.com/esimkowitz",
          "avatar": "https://avatars.githubusercontent.com/u/16651283"
        },
        {
          "username": "oneirocosm",
          "href": "https://github.com/oneirocosm",
          "avatar": "https://avatars.githubusercontent.com/u/107814465"
        }
      ]
    },
    {
      "author": "googleapis",
      "repo": "mcp-toolbox",
      "avatar": "https://github.com/googleapis.png",
      "repo_link": "https://github.com/googleapis/mcp-toolbox",
      "desc": "MCP Toolbox for Databases is an open source MCP server for databases.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1474,
      "added_stars": 1243,
      "builtBy": [
        {
          "username": "Yuan325",
          "href": "https://github.com/Yuan325",
          "avatar": "https://avatars.githubusercontent.com/u/45984206"
        },
        {
          "username": "twishabansal",
          "href": "https://github.com/twishabansal",
          "avatar": "https://avatars.githubusercontent.com/u/58483338"
        },
        {
          "username": "averikitsch",
          "href": "https://github.com/averikitsch",
          "avatar": "https://avatars.githubusercontent.com/u/6519888"
        },
        {
          "username": "duwenxin99",
          "href": "https://github.com/duwenxin99",
          "avatar": "https://avatars.githubusercontent.com/u/117315983"
        }
      ]
    },
    {
      "author": "guohuiyuan",
      "repo": "go-music-dl",
      "avatar": "https://github.com/guohuiyuan.png",
      "repo_link": "https://github.com/guohuiyuan/go-music-dl",
      "desc": "一个基于 Go 语言的全网音乐搜索与下载工具。支持 CLI 命令行与 Web 服务双模式，内置网易云、QQ、酷狗、Bilibili、汽水音乐等 10+ 个主流平台，支持多源并发搜索与无损音质解析。music-dl交流群：1074285005",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 183,
      "added_stars": 1753,
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
        }
      ]
    },
    {
      "author": "steipete",
      "repo": "wacli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/wacli",
      "desc": "WhatsApp CLI",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 205,
      "added_stars": 970,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "draix",
          "href": "https://github.com/draix",
          "avatar": "https://avatars.githubusercontent.com/u/270983"
        },
        {
          "username": "dinakars777",
          "href": "https://github.com/dinakars777",
          "avatar": "https://avatars.githubusercontent.com/u/250428393"
        },
        {
          "username": "plattenschieber",
          "href": "https://github.com/plattenschieber",
          "avatar": "https://avatars.githubusercontent.com/u/1213794"
        },
        {
          "username": "zats",
          "href": "https://github.com/zats",
          "avatar": "https://avatars.githubusercontent.com/u/2688806"
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
      "forks": 5192,
      "added_stars": 1338,
      "builtBy": [
        {
          "username": "RPRX",
          "href": "https://github.com/RPRX",
          "avatar": "https://avatars.githubusercontent.com/u/63339210"
        },
        {
          "username": "yuhan6665",
          "href": "https://github.com/yuhan6665",
          "avatar": "https://avatars.githubusercontent.com/u/1588741"
        },
        {
          "username": "Fangliding",
          "href": "https://github.com/Fangliding",
          "avatar": "https://avatars.githubusercontent.com/u/45535409"
        },
        {
          "username": "mmmray",
          "href": "https://github.com/mmmray",
          "avatar": "https://avatars.githubusercontent.com/u/142015632"
        }
      ]
    },
    {
      "author": "NoFxAiOS",
      "repo": "nofx",
      "avatar": "https://github.com/NoFxAiOS.png",
      "repo_link": "https://github.com/NoFxAiOS/nofx",
      "desc": "Your personal AI trading assistant. Any market. Any model. Pay with USDC, not API keys.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2946,
      "added_stars": 2393,
      "builtBy": [
        {
          "username": "tinkle-community",
          "href": "https://github.com/tinkle-community",
          "avatar": "https://avatars.githubusercontent.com/u/240652709"
        },
        {
          "username": "icyouo",
          "href": "https://github.com/icyouo",
          "avatar": "https://avatars.githubusercontent.com/u/228341237"
        },
        {
          "username": "the-dev-z",
          "href": "https://github.com/the-dev-z",
          "avatar": "https://avatars.githubusercontent.com/u/128128010"
        },
        {
          "username": "0xEmberZz",
          "href": "https://github.com/0xEmberZz",
          "avatar": "https://avatars.githubusercontent.com/u/15190419"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "openimsdk",
      "repo": "open-im-server",
      "avatar": "https://github.com/openimsdk.png",
      "repo_link": "https://github.com/openimsdk/open-im-server",
      "desc": "IM Chat OpenClaw",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2865,
      "added_stars": 374,
      "builtBy": [
        {
          "username": "cubxxw",
          "href": "https://github.com/cubxxw",
          "avatar": "https://avatars.githubusercontent.com/u/86140903"
        },
        {
          "username": "skiffer-git",
          "href": "https://github.com/skiffer-git",
          "avatar": "https://avatars.githubusercontent.com/u/72860476"
        },
        {
          "username": "FGadvancer",
          "href": "https://github.com/FGadvancer",
          "avatar": "https://avatars.githubusercontent.com/u/46924906"
        },
        {
          "username": "wangchuxiao-dev",
          "href": "https://github.com/wangchuxiao-dev",
          "avatar": "https://avatars.githubusercontent.com/u/58578570"
        },
        {
          "username": "withchao",
          "href": "https://github.com/withchao",
          "avatar": "https://avatars.githubusercontent.com/u/48119764"
        }
      ]
    },
    {
      "author": "smtg-ai",
      "repo": "claude-squad",
      "avatar": "https://github.com/smtg-ai.png",
      "repo_link": "https://github.com/smtg-ai/claude-squad",
      "desc": "Manage multiple AI terminal agents like Claude Code, Codex, OpenCode, and Amp.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 493,
      "added_stars": 693,
      "builtBy": [
        {
          "username": "mufeez-amjad",
          "href": "https://github.com/mufeez-amjad",
          "avatar": "https://avatars.githubusercontent.com/u/19630228"
        },
        {
          "username": "jayshrivastava",
          "href": "https://github.com/jayshrivastava",
          "avatar": "https://avatars.githubusercontent.com/u/18633281"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jennings",
          "href": "https://github.com/jennings",
          "avatar": "https://avatars.githubusercontent.com/u/24511"
        },
        {
          "username": "bzbetty",
          "href": "https://github.com/bzbetty",
          "avatar": "https://avatars.githubusercontent.com/u/533131"
        }
      ]
    },
    {
      "author": "goharbor",
      "repo": "harbor",
      "avatar": "https://github.com/goharbor.png",
      "repo_link": "https://github.com/goharbor/harbor",
      "desc": "An open source trusted cloud native registry project that stores, signs, and scans content.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5198,
      "added_stars": 583,
      "builtBy": [
        {
          "username": "ywk253100",
          "href": "https://github.com/ywk253100",
          "avatar": "https://avatars.githubusercontent.com/u/5835782"
        },
        {
          "username": "reasonerjt",
          "href": "https://github.com/reasonerjt",
          "avatar": "https://avatars.githubusercontent.com/u/2390463"
        },
        {
          "username": "wy65701436",
          "href": "https://github.com/wy65701436",
          "avatar": "https://avatars.githubusercontent.com/u/2841473"
        },
        {
          "username": "steven-zou",
          "href": "https://github.com/steven-zou",
          "avatar": "https://avatars.githubusercontent.com/u/5753287"
        },
        {
          "username": "wknet123",
          "href": "https://github.com/wknet123",
          "avatar": "https://avatars.githubusercontent.com/u/5027302"
        }
      ]
    },
    {
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 717,
      "added_stars": 935,
      "builtBy": [
        {
          "username": "henrygd",
          "href": "https://github.com/henrygd",
          "avatar": "https://avatars.githubusercontent.com/u/8519632"
        },
        {
          "username": "svenvg93",
          "href": "https://github.com/svenvg93",
          "avatar": "https://avatars.githubusercontent.com/u/4511676"
        },
        {
          "username": "a-mnich",
          "href": "https://github.com/a-mnich",
          "avatar": "https://avatars.githubusercontent.com/u/56564725"
        },
        {
          "username": "stanol",
          "href": "https://github.com/stanol",
          "avatar": "https://avatars.githubusercontent.com/u/27770896"
        },
        {
          "username": "arsfy",
          "href": "https://github.com/arsfy",
          "avatar": "https://avatars.githubusercontent.com/u/93700457"
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
      "author": "NousResearch",
      "repo": "hermes-agent",
      "avatar": "https://github.com/NousResearch.png",
      "repo_link": "https://github.com/NousResearch/hermes-agent",
      "desc": "The agent that grows with you",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13237,
      "added_stars": 84964,
      "builtBy": [
        {
          "username": "teknium1",
          "href": "https://github.com/teknium1",
          "avatar": "https://avatars.githubusercontent.com/u/127238744"
        },
        {
          "username": "0xbyt4",
          "href": "https://github.com/0xbyt4",
          "avatar": "https://avatars.githubusercontent.com/u/35742124"
        },
        {
          "username": "kshitijk4poor",
          "href": "https://github.com/kshitijk4poor",
          "avatar": "https://avatars.githubusercontent.com/u/82637225"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "alt-glitch",
          "href": "https://github.com/alt-glitch",
          "avatar": "https://avatars.githubusercontent.com/u/52913345"
        }
      ]
    },
    {
      "author": "FujiwaraChoki",
      "repo": "MoneyPrinterV2",
      "avatar": "https://github.com/FujiwaraChoki.png",
      "repo_link": "https://github.com/FujiwaraChoki/MoneyPrinterV2",
      "desc": "Automate the process of making money online.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3194,
      "added_stars": 14953,
      "builtBy": [
        {
          "username": "FujiwaraChoki",
          "href": "https://github.com/FujiwaraChoki",
          "avatar": "https://avatars.githubusercontent.com/u/78088687"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "supperfreddo",
          "href": "https://github.com/supperfreddo",
          "avatar": "https://avatars.githubusercontent.com/u/9703184"
        },
        {
          "username": "SaroAntonelloLovito",
          "href": "https://github.com/SaroAntonelloLovito",
          "avatar": "https://avatars.githubusercontent.com/u/91974562"
        },
        {
          "username": "TomyDiNero",
          "href": "https://github.com/TomyDiNero",
          "avatar": "https://avatars.githubusercontent.com/u/151256852"
        }
      ]
    },
    {
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8020,
      "added_stars": 31402,
      "builtBy": [
        {
          "username": "MagicCube",
          "href": "https://github.com/MagicCube",
          "avatar": "https://avatars.githubusercontent.com/u/1003147"
        },
        {
          "username": "WillemJiang",
          "href": "https://github.com/WillemJiang",
          "avatar": "https://avatars.githubusercontent.com/u/219644"
        },
        {
          "username": "hetaoBackend",
          "href": "https://github.com/hetaoBackend",
          "avatar": "https://avatars.githubusercontent.com/u/45447813"
        },
        {
          "username": "henry-byted",
          "href": "https://github.com/henry-byted",
          "avatar": "https://avatars.githubusercontent.com/u/209858577"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "openai",
      "repo": "parameter-golf",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/parameter-golf",
      "desc": "Train the smallest LM you can that fits in 16MB. Best model wins!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3204,
      "added_stars": 4851,
      "builtBy": [
        {
          "username": "0hq",
          "href": "https://github.com/0hq",
          "avatar": "https://avatars.githubusercontent.com/u/30643741"
        },
        {
          "username": "cocohearts",
          "href": "https://github.com/cocohearts",
          "avatar": "https://avatars.githubusercontent.com/u/41932135"
        },
        {
          "username": "msisovic",
          "href": "https://github.com/msisovic",
          "avatar": "https://avatars.githubusercontent.com/u/95937882"
        },
        {
          "username": "valerio-oai",
          "href": "https://github.com/valerio-oai",
          "avatar": "https://avatars.githubusercontent.com/u/260776988"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "mvanhorn",
      "repo": "last30days-skill",
      "avatar": "https://github.com/mvanhorn.png",
      "repo_link": "https://github.com/mvanhorn/last30days-skill",
      "desc": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1830,
      "added_stars": 18178,
      "builtBy": [
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "j-sperling",
          "href": "https://github.com/j-sperling",
          "avatar": "https://avatars.githubusercontent.com/u/17969723"
        },
        {
          "username": "pejmanjohn",
          "href": "https://github.com/pejmanjohn",
          "avatar": "https://avatars.githubusercontent.com/u/481729"
        },
        {
          "username": "tmchow",
          "href": "https://github.com/tmchow",
          "avatar": "https://avatars.githubusercontent.com/u/517103"
        }
      ]
    },
    {
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9215,
      "added_stars": 18900,
      "builtBy": [
        {
          "username": "Yijia-Xiao",
          "href": "https://github.com/Yijia-Xiao",
          "avatar": "https://avatars.githubusercontent.com/u/48253104"
        },
        {
          "username": "EdwardoSunny",
          "href": "https://github.com/EdwardoSunny",
          "avatar": "https://avatars.githubusercontent.com/u/68405458"
        },
        {
          "username": "luohy15",
          "href": "https://github.com/luohy15",
          "avatar": "https://avatars.githubusercontent.com/u/15189961"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "CadeYu",
          "href": "https://github.com/CadeYu",
          "avatar": "https://avatars.githubusercontent.com/u/91041827"
        }
      ]
    },
    {
      "author": "shiyu-coder",
      "repo": "Kronos",
      "avatar": "https://github.com/shiyu-coder.png",
      "repo_link": "https://github.com/shiyu-coder/Kronos",
      "desc": "Kronos: A Foundation Model for the Language of Financial Markets",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3457,
      "added_stars": 7496,
      "builtBy": [
        {
          "username": "shiyu-coder",
          "href": "https://github.com/shiyu-coder",
          "avatar": "https://avatars.githubusercontent.com/u/65760973"
        },
        {
          "username": "Luciferbobo",
          "href": "https://github.com/Luciferbobo",
          "avatar": "https://avatars.githubusercontent.com/u/54936491"
        },
        {
          "username": "CharlesJ-ABu",
          "href": "https://github.com/CharlesJ-ABu",
          "avatar": "https://avatars.githubusercontent.com/u/18326516"
        },
        {
          "username": "AnMakc",
          "href": "https://github.com/AnMakc",
          "avatar": "https://avatars.githubusercontent.com/u/1777564"
        },
        {
          "username": "randyy179",
          "href": "https://github.com/randyy179",
          "avatar": "https://avatars.githubusercontent.com/u/129808685"
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
      "forks": 7095,
      "added_stars": 19635,
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
        },
        {
          "username": "l-lumin",
          "href": "https://github.com/l-lumin",
          "avatar": "https://avatars.githubusercontent.com/u/71011125"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4639,
      "added_stars": 16411,
      "builtBy": [
        {
          "username": "YaoyaoChang",
          "href": "https://github.com/YaoyaoChang",
          "avatar": "https://avatars.githubusercontent.com/u/20237658"
        },
        {
          "username": "MSLDCherryPick",
          "href": "https://github.com/MSLDCherryPick",
          "avatar": "https://avatars.githubusercontent.com/u/173002764"
        },
        {
          "username": "pengzhiliang",
          "href": "https://github.com/pengzhiliang",
          "avatar": "https://avatars.githubusercontent.com/u/26346329"
        },
        {
          "username": "jsoref",
          "href": "https://github.com/jsoref",
          "avatar": "https://avatars.githubusercontent.com/u/2119212"
        }
      ]
    },
    {
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3631,
      "added_stars": 9504,
      "builtBy": [
        {
          "username": "Weves",
          "href": "https://github.com/Weves",
          "avatar": "https://avatars.githubusercontent.com/u/25087905"
        },
        {
          "username": "yuhongsun96",
          "href": "https://github.com/yuhongsun96",
          "avatar": "https://avatars.githubusercontent.com/u/32520769"
        },
        {
          "username": "pablonyx",
          "href": "https://github.com/pablonyx",
          "avatar": "https://avatars.githubusercontent.com/u/171597620"
        },
        {
          "username": "jmelahman",
          "href": "https://github.com/jmelahman",
          "avatar": "https://avatars.githubusercontent.com/u/23436978"
        }
      ]
    },
    {
      "author": "OpenBMB",
      "repo": "VoxCPM",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/VoxCPM",
      "desc": "VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and True-to-Life Cloning",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1662,
      "added_stars": 7626,
      "builtBy": [
        {
          "username": "Labmem-Zhouyx",
          "href": "https://github.com/Labmem-Zhouyx",
          "avatar": "https://avatars.githubusercontent.com/u/63361337"
        },
        {
          "username": "VoxInstruct",
          "href": "https://github.com/VoxInstruct",
          "avatar": "https://avatars.githubusercontent.com/u/167593451"
        },
        {
          "username": "liuxin99",
          "href": "https://github.com/liuxin99",
          "avatar": "https://avatars.githubusercontent.com/u/33060143"
        },
        {
          "username": "a710128",
          "href": "https://github.com/a710128",
          "avatar": "https://avatars.githubusercontent.com/u/8132992"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "\"DeepTutor: Agent-Native Personalized Learning Assistant\"",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2497,
      "added_stars": 8075,
      "builtBy": [
        {
          "username": "pancacake",
          "href": "https://github.com/pancacake",
          "avatar": "https://avatars.githubusercontent.com/u/150592536"
        },
        {
          "username": "tusharkhatriofficial",
          "href": "https://github.com/tusharkhatriofficial",
          "avatar": "https://avatars.githubusercontent.com/u/64004539"
        },
        {
          "username": "scrrlt",
          "href": "https://github.com/scrrlt",
          "avatar": "https://avatars.githubusercontent.com/u/235653744"
        },
        {
          "username": "RinZ27",
          "href": "https://github.com/RinZ27",
          "avatar": "https://avatars.githubusercontent.com/u/222222878"
        }
      ]
    },
    {
      "author": "hacksider",
      "repo": "Deep-Live-Cam",
      "avatar": "https://github.com/hacksider.png",
      "repo_link": "https://github.com/hacksider/Deep-Live-Cam",
      "desc": "real time face swap and one-click video deepfake with only a single image",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13219,
      "added_stars": 11147,
      "builtBy": [
        {
          "username": "hacksider",
          "href": "https://github.com/hacksider",
          "avatar": "https://avatars.githubusercontent.com/u/1267200"
        },
        {
          "username": "KRSHH",
          "href": "https://github.com/KRSHH",
          "avatar": "https://avatars.githubusercontent.com/u/136873090"
        },
        {
          "username": "vic4key",
          "href": "https://github.com/vic4key",
          "avatar": "https://avatars.githubusercontent.com/u/5672864"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "laurigates",
          "href": "https://github.com/laurigates",
          "avatar": "https://avatars.githubusercontent.com/u/13014001"
        }
      ]
    },
    {
      "author": "SakanaAI",
      "repo": "AI-Scientist-v2",
      "avatar": "https://github.com/SakanaAI.png",
      "repo_link": "https://github.com/SakanaAI/AI-Scientist-v2",
      "desc": "The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 775,
      "added_stars": 3312,
      "builtBy": [
        {
          "username": "conglu1997",
          "href": "https://github.com/conglu1997",
          "avatar": "https://avatars.githubusercontent.com/u/20336225"
        },
        {
          "username": "kotama7",
          "href": "https://github.com/kotama7",
          "avatar": "https://avatars.githubusercontent.com/u/104612339"
        },
        {
          "username": "runopti",
          "href": "https://github.com/runopti",
          "avatar": "https://avatars.githubusercontent.com/u/6688737"
        },
        {
          "username": "RobertTLange",
          "href": "https://github.com/RobertTLange",
          "avatar": "https://avatars.githubusercontent.com/u/20374662"
        },
        {
          "username": "Shawn-Hwang",
          "href": "https://github.com/Shawn-Hwang",
          "avatar": "https://avatars.githubusercontent.com/u/62516342"
        }
      ]
    },
    {
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1728,
      "added_stars": 7906,
      "builtBy": [
        {
          "username": "rajatsen91",
          "href": "https://github.com/rajatsen91",
          "avatar": "https://avatars.githubusercontent.com/u/8039264"
        },
        {
          "username": "siriuz42",
          "href": "https://github.com/siriuz42",
          "avatar": "https://avatars.githubusercontent.com/u/5073569"
        },
        {
          "username": "misha-chertushkin",
          "href": "https://github.com/misha-chertushkin",
          "avatar": "https://avatars.githubusercontent.com/u/151166456"
        },
        {
          "username": "darkpowerxo",
          "href": "https://github.com/darkpowerxo",
          "avatar": "https://avatars.githubusercontent.com/u/1857776"
        },
        {
          "username": "JustinGuese",
          "href": "https://github.com/JustinGuese",
          "avatar": "https://avatars.githubusercontent.com/u/9588843"
        }
      ]
    },
    {
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "232+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1483,
      "added_stars": 6089,
      "builtBy": [
        {
          "username": "alirezarezvani",
          "href": "https://github.com/alirezarezvani",
          "avatar": "https://avatars.githubusercontent.com/u/5697919"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "olgasafonova",
          "href": "https://github.com/olgasafonova",
          "avatar": "https://avatars.githubusercontent.com/u/23409189"
        },
        {
          "username": "fernandezbaptiste",
          "href": "https://github.com/fernandezbaptiste",
          "avatar": "https://avatars.githubusercontent.com/u/83458751"
        },
        {
          "username": "ikala-shawn",
          "href": "https://github.com/ikala-shawn",
          "avatar": "https://avatars.githubusercontent.com/u/111341595"
        }
      ]
    },
    {
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3229,
      "added_stars": 10748,
      "builtBy": [
        {
          "username": "hesreallyhim",
          "href": "https://github.com/hesreallyhim",
          "avatar": "https://avatars.githubusercontent.com/u/172150522"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tninja",
          "href": "https://github.com/tninja",
          "avatar": "https://avatars.githubusercontent.com/u/714625"
        }
      ]
    },
    {
      "author": "langchain-ai",
      "repo": "open-swe",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/open-swe",
      "desc": "An Open-Source Asynchronous Coding Agent",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1069,
      "added_stars": 4342,
      "builtBy": [
        {
          "username": "bracesproul",
          "href": "https://github.com/bracesproul",
          "avatar": "https://avatars.githubusercontent.com/u/46789226"
        },
        {
          "username": "aran-yogesh",
          "href": "https://github.com/aran-yogesh",
          "avatar": "https://avatars.githubusercontent.com/u/63587953"
        },
        {
          "username": "open-swe",
          "href": "https://github.com/open-swe",
          "avatar": "https://avatars.githubusercontent.com/u/221408880"
        }
      ]
    },
    {
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8457,
      "added_stars": 26895,
      "builtBy": [
        {
          "username": "666ghj",
          "href": "https://github.com/666ghj",
          "avatar": "https://avatars.githubusercontent.com/u/110395318"
        },
        {
          "username": "Ghostubborn",
          "href": "https://github.com/Ghostubborn",
          "avatar": "https://avatars.githubusercontent.com/u/15389158"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "htdt",
      "repo": "godogen",
      "avatar": "https://github.com/htdt.png",
      "repo_link": "https://github.com/htdt/godogen",
      "desc": "Claude Code & Codex skills that build complete Godot projects from a game description",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 266,
      "added_stars": 2711,
      "builtBy": [
        {
          "username": "htdt",
          "href": "https://github.com/htdt",
          "avatar": "https://avatars.githubusercontent.com/u/5243839"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Clancey",
          "href": "https://github.com/Clancey",
          "avatar": "https://avatars.githubusercontent.com/u/256046"
        },
        {
          "username": "gcko",
          "href": "https://github.com/gcko",
          "avatar": "https://avatars.githubusercontent.com/u/521927"
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
      "title": "Letting Product Teams Own SVG Icons (Without Code Changes)",
      "url": "https://dev.to/subito/letting-product-teams-own-svg-icons-without-code-changes-5hll",
      "upvotes": "2",
      "comments": "2",
      "created": "2026-04-15T05:20:29.000Z"
    },
    {
      "title": "New Vue UI components from SVAR: 30+ controls, edit forms, and filtering widgets",
      "url": "https://svar.dev/blog/svar-vue-components-released/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-04-13T13:48:02.000Z"
    },
    {
      "title": "A minimal Node.js wrapper around ClamAV",
      "url": "https://pompelmi.app/index.html",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-04-12T09:55:40.000Z"
    },
    {
      "title": "Soft deletes in a Zustand store via enumerable:false property descriptors",
      "url": "https://dev.to/finom/stop-duplicating-api-state-a-zustand-registry-that-auto-updates-every-component-10if",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-04-09T13:00:31.000Z"
    },
    {
      "title": "Phantom UI – Skeleton that measures your real DOM (Web Component, 8kb)",
      "url": "https://github.com/Aejkatappaja/phantom-ui",
      "upvotes": "1",
      "comments": "6",
      "created": "2026-04-08T21:49:33.000Z"
    },
    {
      "title": "A lightweight front end framework with native JavaScript/TS feel",
      "url": "https://qingkuai.dev",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-04-07T22:39:58.000Z"
    },
    {
      "title": "Zephyr Events – A 2KB TypeScript event emitter that's race-condition safe",
      "url": "https://www.npmjs.com/package/zephyr-events",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-04-07T22:32:27.000Z"
    },
    {
      "title": "easy-live2d v0.4.0: A Milestone Release for Live2D on the Web",
      "url": "https://github.com/Panzer-Jack/easy-live2d",
      "upvotes": "1",
      "comments": "2",
      "created": "2026-04-04T14:56:44.000Z"
    },
    {
      "title": "oh-my-hi: Visual dashboard for your Claude Code harness",
      "url": "https://github.com/netil/oh-my-hi",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-31T12:06:10.000Z"
    },
    {
      "title": "Auth library with AI agent identity and MCP OAuth 2.1",
      "url": "https://github.com/kavachos/kavachos",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-30T20:06:45.000Z"
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
      "title": "Join the OpenClaw Challenge: $1,200 Prize Pool!",
      "description": "If you've spent any time on the internet, you know OpenClaw has been making waves lately. We recently...",
      "url": "https://dev.to/devteam/join-the-openclaw-challenge-1200-prize-pool-5682",
      "tags": "devchallenge, openclawchallenge, openclaw, ai",
      "reactions": 72,
      "comments": 8,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Congrats to the 2026 WeCoded Challenge Winners!",
      "description": "The results are in! We are thrilled to announce the winners of the 2026 WeCoded Challenge.  Over the...",
      "url": "https://dev.to/devteam/congrats-to-the-2026-wecoded-challenge-winners-2pee",
      "tags": "devchallenge, wecoded, frontend, career",
      "reactions": 27,
      "comments": 6,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "What brings you by a conference booth?",
      "description": "What makes you stop by and chat at a booth?",
      "url": "https://dev.to/missamarakay/what-brings-you-by-a-conference-booth-43e3",
      "tags": "discuss",
      "reactions": 31,
      "comments": 10,
      "reading_time": 1,
      "author": "missamarakay"
    },
    {
      "title": "AI Doesn't Fix Weak Engineering. It Just Speeds It Up.",
      "description": "\"Weak engineers with AI still produce weak output. Just faster.\" That was the whole point. AI changes...",
      "url": "https://dev.to/jonoherrington/ai-doesnt-fix-weak-engineering-it-just-speeds-it-up-5bak",
      "tags": "ai, leadership, discuss",
      "reactions": 37,
      "comments": 10,
      "reading_time": 5,
      "author": "jonoherrington"
    },
    {
      "title": "Turning the Raspberry Pi Zero into a Hacking Gadget",
      "description": "Single Board Computers with the ability to run a full-fledged Linux distribution can be used as...",
      "url": "https://dev.to/admantium/turning-the-raspberry-pi-zero-into-a-hacking-gadget-2ekl",
      "tags": "raspberrypi, raspberryzero",
      "reactions": 42,
      "comments": 1,
      "reading_time": 9,
      "author": "admantium"
    },
    {
      "title": "MiniClaw: A Tiny LLM Agent for Mini Micro",
      "description": "Agents are all the rage these days.  Claude Code was one of the first, and perhaps still the most...",
      "url": "https://dev.to/joestrout/miniclaw-a-tiny-llm-agent-for-mini-micro-4akf",
      "tags": "miniscript, minimicro, agents, programming",
      "reactions": 22,
      "comments": 0,
      "reading_time": 8,
      "author": "joestrout"
    },
    {
      "title": "Build a voice-enabled Telegram Bot with the Gemini Interactions API",
      "description": "What if your Telegram bot could listen?  Not just read text — actually understand voice messages,...",
      "url": "https://dev.to/googleai/build-a-voice-enabled-telegram-bot-with-the-gemini-interactions-api-nm5",
      "tags": "ai, gemini, python, tutorial",
      "reactions": 39,
      "comments": 1,
      "reading_time": 10,
      "author": "thorwebdev"
    },
    {
      "title": "Watching RubyGems.org in Real Time",
      "description": "RubyGems.org published its first public roadmap this week. That's new, and it's worth noticing.  I've...",
      "url": "https://dev.to/cseeman/watching-rubygemsorg-in-real-time-11o",
      "tags": "ruby, rails",
      "reactions": 5,
      "comments": 0,
      "reading_time": 3,
      "author": "cseeman"
    },
    {
      "title": "Join our DEV Weekend Challenge — $1,000 in Prizes Across TEN winners! Submissions Due April 20 at 6:59 AM UTC.",
      "description": "We're excited to kick off another DEV Weekend Challenge, a short bite-sized challenge planned to fit...",
      "url": "https://dev.to/devteam/join-our-dev-weekend-challenge-1000-in-prizes-across-ten-winners-submissions-due-april-20-at-47i1",
      "tags": "devchallenge, weekendchallenge",
      "reactions": 17,
      "comments": 3,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Architecture Documentation as a First-Class Engineering Asset",
      "description": "How autonomous AI agents can generate a complete architecture snapshot of your microservices platform...",
      "url": "https://dev.to/gdg/architecture-documentation-as-a-first-class-engineering-asset-4a1j",
      "tags": "architecture, security, ai, agents",
      "reactions": 28,
      "comments": 6,
      "reading_time": 7,
      "author": "alexandertyutin"
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
      "title": "A history of teapots and UNIX",
      "url": "https://discuss.systems/@thalia/116417242648384997",
      "score": 1,
      "comments": 0,
      "tags": [
        "graphics",
        "unix"
      ],
      "id": "ql5jpq"
    },
    {
      "title": "Folk Computer",
      "url": "https://folk.computer/start",
      "score": 2,
      "comments": 0,
      "tags": [
        "art"
      ],
      "id": "yr2mcf"
    },
    {
      "title": "git-kv: Key-value store attached to git commits using Git notes",
      "url": "https://github.com/sebastien/git-kv",
      "score": 2,
      "comments": 0,
      "tags": [
        "devops",
        "unix",
        "vcs"
      ],
      "id": "ygjm5d"
    },
    {
      "title": "RV32I reference",
      "url": "https://hoult.org/rv32i.pdf",
      "score": 1,
      "comments": 0,
      "tags": [
        "assembly",
        "education",
        "hardware",
        "pdf"
      ],
      "id": "ylneci"
    },
    {
      "title": "Casus Belli Engineering",
      "url": "https://marcosmagueta.com/blog/casus-belli-engineering/",
      "score": 3,
      "comments": 0,
      "tags": [
        "programming",
        "rant"
      ],
      "id": "kcqpu5"
    },
    {
      "title": "A Better R Programming Experience Thanks to Tree-sitter",
      "url": "https://ropensci.org/blog/2026/04/02/tree-sitter-overview/",
      "score": 3,
      "comments": 2,
      "tags": [
        "programming"
      ],
      "id": "boluto"
    },
    {
      "title": "Okay, what actually uses Rust",
      "url": "https://blog.goose.love/posts/what-actually-uses-rust/",
      "score": 17,
      "comments": 11,
      "tags": [
        "rust"
      ],
      "id": "dlxlvj"
    },
    {
      "title": "Taming Git complexity with Rust and Gitoxide - FOSDEM 2026",
      "url": "https://www.youtube.com/watch?v=iSAMvE3yzfc",
      "score": 2,
      "comments": 0,
      "tags": [
        "vcs",
        "video"
      ],
      "id": "0rqurl"
    },
    {
      "title": "The Claude Coding Vibes Are Getting Worse",
      "url": "https://blog.matthewbrunelle.com/the-claude-coding-vibes-are-getting-worse/",
      "score": 13,
      "comments": 3,
      "tags": [
        "programming",
        "vibecoding"
      ],
      "id": "xaicu8"
    },
    {
      "title": "Clojure: The Documentary",
      "url": "https://www.youtube.com/watch?v=Y24vK_QDLFg",
      "score": 30,
      "comments": 5,
      "tags": [
        "clojure",
        "video"
      ],
      "id": "nvzsa5"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "meetpateltech",
      "descendants": 1172,
      "id": 47793411,
      "kids": [
        47794768,
        47802834,
        47803128,
        47794908,
        47794755,
        47803074,
        47799909,
        47793749,
        47796699,
        47799123,
        47793579,
        47794728,
        47794800,
        47803120,
        47795270,
        47795947,
        47798387,
        47801558,
        47793692,
        47797378,
        47794081,
        47801557,
        47794000,
        47793917,
        47795735,
        47802606,
        47796472,
        47800337,
        47793619,
        47799866,
        47796869,
        47795738,
        47800974,
        47796360,
        47793791,
        47794706,
        47794204,
        47793822,
        47797637,
        47795079,
        47799521,
        47797184,
        47802487,
        47794874,
        47793653,
        47801841,
        47802029,
        47793929,
        47794581,
        47793634,
        47795886,
        47796969,
        47795526,
        47795530,
        47800823,
        47800933,
        47795684,
        47794491,
        47801214,
        47796106,
        47801316,
        47797722,
        47794043,
        47797110,
        47796060,
        47797167,
        47795118,
        47801396,
        47797401,
        47799969,
        47801608,
        47796704,
        47797980,
        47797867,
        47800945,
        47799223,
        47793771,
        47798249,
        47794078,
        47793849,
        47795460,
        47795110,
        47794223,
        47802598,
        47798923,
        47799049,
        47796073,
        47800454,
        47801291,
        47794421,
        47798870,
        47800193,
        47802768,
        47794784,
        47800673,
        47796043,
        47794428,
        47796307,
        47798186,
        47794290,
        47795154,
        47794363,
        47802710,
        47794916,
        47796931,
        47796439,
        47797414,
        47799534,
        47796629,
        47794366,
        47795195,
        47799752,
        47802042,
        47793801,
        47797737,
        47793594,
        47800667,
        47796408,
        47797316,
        47794485,
        47801853,
        47797560,
        47797697,
        47795442,
        47797191,
        47794962,
        47794437,
        47793904,
        47793790,
        47795517,
        47797618,
        47802293,
        47798531,
        47793646,
        47793606,
        47794894,
        47795480,
        47796746,
        47796535,
        47795447,
        47793553,
        47794748,
        47799904,
        47796424,
        47794791,
        47799124,
        47795635,
        47801518,
        47796979,
        47796502,
        47795250,
        47795862,
        47794667,
        47794055,
        47793765,
        47800937,
        47794944,
        47794212,
        47797693,
        47799366,
        47794843,
        47795964,
        47798574,
        47799050,
        47798804,
        47793928,
        47797748,
        47796678,
        47795284,
        47795580,
        47795140,
        47796038,
        47795054,
        47794722,
        47794054,
        47793875,
        47793693,
        47793905,
        47795230,
        47797649,
        47796120,
        47794282,
        47796058,
        47801445,
        47795894,
        47794711,
        47794497,
        47803035,
        47802956,
        47802908,
        47802275,
        47801361,
        47794920,
        47801531,
        47800798,
        47801910,
        47796936,
        47796934,
        47794650,
        47800499,
        47793781,
        47799254,
        47797689,
        47796126,
        47795767,
        47794108,
        47793684,
        47794819,
        47794794,
        47793729,
        47793860,
        47796613,
        47802678,
        47795022,
        47794032,
        47795292
      ],
      "score": 1652,
      "time": 1776349430,
      "title": "Claude Opus 4.7",
      "type": "story",
      "url": "https://www.anthropic.com/news/claude-opus-4-7"
    },
    {
      "by": "mikeevans",
      "descendants": 402,
      "id": 47796469,
      "kids": [
        47796658,
        47796645,
        47798076,
        47798721,
        47796824,
        47796754,
        47796664,
        47800845,
        47797550,
        47796627,
        47800772,
        47799125,
        47800580,
        47797994,
        47798429,
        47800086,
        47801636,
        47796836,
        47796562,
        47801935,
        47797932,
        47797387,
        47796743,
        47802130,
        47796623,
        47798355,
        47796829,
        47800419,
        47796677,
        47797129,
        47797783,
        47797398,
        47798887,
        47796599,
        47796617,
        47796656,
        47799061,
        47799090,
        47796953,
        47796823,
        47800622,
        47799498,
        47796661,
        47799767,
        47797320,
        47798460,
        47801365,
        47799189,
        47796650,
        47797497,
        47799197,
        47803041,
        47802282,
        47801897,
        47797430,
        47798599,
        47796710,
        47796572,
        47796820,
        47798917,
        47798057,
        47798500
      ],
      "score": 803,
      "time": 1776359539,
      "title": "Codex for almost everything",
      "type": "story",
      "url": "https://openai.com/index/codex-for-almost-everything/"
    },
    {
      "by": "gregsadetsky",
      "descendants": 18,
      "id": 47772725,
      "kids": [
        47802173,
        47802049,
        47802988,
        47801834,
        47803076,
        47802835,
        47801999,
        47801900
      ],
      "score": 111,
      "time": 1776208839,
      "title": "CadQuery is an open-source Python library for building 3D CAD models",
      "type": "story",
      "url": "https://cadquery.github.io/"
    },
    {
      "by": "xk3",
      "descendants": 8,
      "id": 47755261,
      "kids": [
        47802838,
        47802798,
        47803104
      ],
      "score": 32,
      "time": 1776101150,
      "title": "A Python Interpreter Written in Python",
      "type": "story",
      "url": "https://aosabook.org/en/500L/a-python-interpreter-written-in-python.html"
    },
    {
      "by": "scaredpelican",
      "descendants": 33,
      "id": 47800033,
      "kids": [
        47800675,
        47802953,
        47801098,
        47800616,
        47802295,
        47800656,
        47802360,
        47801035,
        47801260,
        47801155,
        47802757,
        47801702,
        47800464,
        47800238,
        47800034,
        47800643
      ],
      "score": 151,
      "time": 1776376597,
      "title": "Guy builds AI driven hardware hacker arm from duct tape, old cam and CNC machine",
      "type": "story",
      "url": "https://github.com/gainsec/autoprober"
    },
    {
      "by": "_fizz_buzz_",
      "descendants": 13,
      "id": 47801255,
      "kids": [
        47803133,
        47803108,
        47802093,
        47802550,
        47802265,
        47802063,
        47801303,
        47802616
      ],
      "score": 61,
      "text": "I built MCP servers for my oscilloscope and SPICE simulator so Claude Code can close the loop between simulation and real hardware.",
      "time": 1776386267,
      "title": "Show HN: SPICE simulation → oscilloscope → verification with Claude Code",
      "type": "story",
      "url": "https://lucasgerads.com/blog/lecroy-mcp-spice-demo/"
    },
    {
      "by": "sebg",
      "descendants": 13,
      "id": 47799573,
      "kids": [
        47801899,
        47803127,
        47801100,
        47800535,
        47801051,
        47801070
      ],
      "score": 118,
      "time": 1776374042,
      "title": "A Better R Programming Experience Thanks to Tree-sitter",
      "type": "story",
      "url": "https://ropensci.org/blog/2026/04/02/tree-sitter-overview/"
    },
    {
      "by": "adityaathalye",
      "descendants": 44,
      "id": 47798345,
      "kids": [
        47803152,
        47799867,
        47802751,
        47801330,
        47800688,
        47800518,
        47801171,
        47799946,
        47800399
      ],
      "score": 169,
      "time": 1776367938,
      "title": "Official Clojure Documentary page with Video, Shownotes, and Links",
      "type": "story",
      "url": "https://clojure.org/about/documentary"
    },
    {
      "by": "rickcarlino",
      "descendants": 5,
      "id": 47750600,
      "kids": [
        47803185,
        47803141,
        47802241,
        47802379
      ],
      "score": 37,
      "time": 1776080352,
      "title": "ReBot-DevArm: open-source Robotic Arm",
      "type": "story",
      "url": "https://github.com/Seeed-Projects/reBot-DevArm"
    },
    {
      "by": "ingve",
      "descendants": 67,
      "id": 47797665,
      "kids": [
        47802214,
        47802235,
        47800405,
        47802089,
        47799415,
        47800331,
        47802116,
        47799835,
        47801546,
        47802080,
        47799653,
        47799385,
        47802788,
        47799265,
        47802206,
        47801903,
        47799583,
        47800553
      ],
      "score": 196,
      "time": 1776364799,
      "title": "Android CLI: Build Android apps 3x faster using any agent",
      "type": "story",
      "url": "https://android-developers.googleblog.com/2026/04/build-android-apps-3x-faster-using-any-agent.html"
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
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "devto",
  "tag": "career",
  "sort": "top",
  "items": [
    {
      "title": "Congrats to the 2026 WeCoded Challenge Winners!",
      "description": "The results are in! We are thrilled to announce the winners of the 2026 WeCoded Challenge.  Over the...",
      "url": "https://dev.to/devteam/congrats-to-the-2026-wecoded-challenge-winners-2pee",
      "tags": "devchallenge, wecoded, frontend, career",
      "reactions": 33,
      "comments": 6,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Building an AI Tutor for Ethiopia: What I Learned Competing in AWS AIdeas 2025",
      "description": "Over 70% of Ethiopian students don't have reliable internet access. Yet here I was, building an AI...",
      "url": "https://dev.to/zeshama/building-an-ai-tutor-for-ethiopia-what-i-learned-competing-in-aws-aideas-2025-gk4",
      "tags": "aws, ai, career, startup",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "zeshama"
    },
    {
      "title": "How to Audit Your Own Job for AI Exposure (Before Someone Else Does It For You)",
      "description": "Anthropic published a study in March 2026 that measured actual AI usage data against 800 occupations....",
      "url": "https://dev.to/deeya_jain_14/how-to-audit-your-own-job-for-ai-exposure-before-someone-else-does-it-for-you-474f",
      "tags": "ai, webdev, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "deeya_jain_14"
    },
    {
      "title": "How I Built an AI-Powered Job Search Pipeline That Tailors My Resume for Every Application",
      "description": "The Problem   Job hunting in 2026 is mostly busywork:   Hours scrolling LinkedIn and job...",
      "url": "https://dev.to/parth-parmar/how-i-built-an-ai-powered-job-search-pipeline-that-tailors-my-resume-for-every-application-22i9",
      "tags": "python, opensource, ai, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "parth-parmar"
    },
    {
      "title": "The Importance of Soft Skills",
      "description": "Technical skills get you in the door, but soft skills help you climb the ladder. Communication and...",
      "url": "https://dev.to/fabiosarmento/the-importance-of-soft-skills-3fn6",
      "tags": "career, leadership",
      "reactions": 1,
      "comments": 1,
      "reading_time": 1,
      "author": "fabiosarmento"
    },
    {
      "title": "Day 8/100: Process Death — What Actually Happens When Android Kills Your App",
      "description": "Process death is the most misunderstood lifecycle event in Android. It's silent, it's unpredictable, and it breaks apps that work perfectly in development. Here's what actually happens — and how to write code that handles it correctly.",
      "url": "https://dev.to/hoangshawn/day-8100-process-death-what-actually-happens-when-android-kills-your-app-3cc3",
      "tags": "android, kotlin, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "hoangshawn"
    },
    {
      "title": "Structure-Driven Engineering Organization Theory #2 — Output as Structure",
      "description": "Measure code not at the moment it's written, but by what happened after. What remains is structure.",
      "url": "https://dev.to/machuz/structure-driven-organization-theory-2-output-as-structure-42ej",
      "tags": "engineering, leadership, git, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "machuz"
    },
    {
      "title": "We Hit 2,500 in 15 Days — And I Want to Make Every Dev Lazier (Productively)",
      "description": "I set a goal at the start of April: reach 2,500 followers on dev.to by April 30th.  We hit 2,631 by...",
      "url": "https://dev.to/freerave/we-hit-2500-in-15-days-and-i-want-to-make-every-dev-lazier-productively-39a3",
      "tags": "webdev, opensource, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "freerave"
    },
    {
      "title": "What Spark Interviews Actually Test (Based on 189 Real Interview Reports)",
      "description": "What Spark Interviews Actually Test (Based on 189 Real Interview Reports)   We scraped...",
      "url": "https://dev.to/datadriven/what-spark-interviews-actually-test-based-on-189-real-interview-reports-46ol",
      "tags": "dataengineering, interview, career, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "datadriven"
    },
    {
      "title": "AI-900 vs AI-102: Which Azure AI Certification is Right for You?",
      "description": "The Azure AI ecosystem is expanding at a relentless pace, and with it comes a familiar dilemma: where...",
      "url": "https://dev.to/datta_kharad_3fd1383b5036/ai-900-vs-ai-102-which-azure-ai-certification-is-right-for-you-11f9",
      "tags": "ai, azure, career, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "datta_kharad_3fd1383b5036"
    }
  ]
}
```

