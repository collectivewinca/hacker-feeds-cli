# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-20 07:03:53 UTC

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
      "desc": "A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5337,
      "added_stars": 14556,
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
      "author": "multica-ai",
      "repo": "multica",
      "avatar": "https://github.com/multica-ai.png",
      "repo_link": "https://github.com/multica-ai/multica",
      "desc": "The open-source managed agents platform. Turn coding agents into real teammates — assign tasks, track progress, compound skills.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2102,
      "added_stars": 7831,
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
      "author": "jamiepine",
      "repo": "voicebox",
      "avatar": "https://github.com/jamiepine.png",
      "repo_link": "https://github.com/jamiepine/voicebox",
      "desc": "The open-source voice synthesis studio",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2454,
      "added_stars": 5724,
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
      "author": "coleam00",
      "repo": "Archon",
      "avatar": "https://github.com/coleam00.png",
      "repo_link": "https://github.com/coleam00/Archon",
      "desc": "The first open-source harness builder for AI coding. Make AI coding deterministic and repeatable.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2935,
      "added_stars": 2087,
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
      "author": "lukilabs",
      "repo": "craft-agents-oss",
      "avatar": "https://github.com/lukilabs.png",
      "repo_link": "https://github.com/lukilabs/craft-agents-oss",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 651,
      "added_stars": 675,
      "builtBy": [
        {
          "username": "balintorosz",
          "href": "https://github.com/balintorosz",
          "avatar": "https://avatars.githubusercontent.com/u/2445418"
        },
        {
          "username": "rjulius23",
          "href": "https://github.com/rjulius23",
          "avatar": "https://avatars.githubusercontent.com/u/26127942"
        },
        {
          "username": "eachann1024",
          "href": "https://github.com/eachann1024",
          "avatar": "https://avatars.githubusercontent.com/u/43348055"
        },
        {
          "username": "fagemx",
          "href": "https://github.com/fagemx",
          "avatar": "https://avatars.githubusercontent.com/u/117356295"
        }
      ]
    },
    {
      "author": "diegosouzapw",
      "repo": "OmniRoute",
      "avatar": "https://github.com/diegosouzapw.png",
      "repo_link": "https://github.com/diegosouzapw/OmniRoute",
      "desc": "OmniRoute is an AI gateway for multi-provider LLMs: an OpenAI-compatible endpoint with smart routing, load balancing, retries, and fallbacks. Add policies, rate limits, caching, and observability for reliable, cost-aware inference.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 494,
      "added_stars": 568,
      "builtBy": [
        {
          "username": "diegosouzapw",
          "href": "https://github.com/diegosouzapw",
          "avatar": "https://avatars.githubusercontent.com/u/8016841"
        },
        {
          "username": "rdself",
          "href": "https://github.com/rdself",
          "avatar": "https://avatars.githubusercontent.com/u/55005611"
        },
        {
          "username": "christopher-s",
          "href": "https://github.com/christopher-s",
          "avatar": "https://avatars.githubusercontent.com/u/3751981"
        },
        {
          "username": "oyi77",
          "href": "https://github.com/oyi77",
          "avatar": "https://avatars.githubusercontent.com/u/14921983"
        }
      ]
    },
    {
      "author": "seerr-team",
      "repo": "seerr",
      "avatar": "https://github.com/seerr-team.png",
      "repo_link": "https://github.com/seerr-team/seerr",
      "desc": "Open-source media request and discovery manager for Jellyfin, Plex, and Emby.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 776,
      "added_stars": 172,
      "builtBy": [
        {
          "username": "sct",
          "href": "https://github.com/sct",
          "avatar": "https://avatars.githubusercontent.com/u/234213"
        },
        {
          "username": "fallenbagel",
          "href": "https://github.com/fallenbagel",
          "avatar": "https://avatars.githubusercontent.com/u/98979876"
        },
        {
          "username": "TheCatLady",
          "href": "https://github.com/TheCatLady",
          "avatar": "https://avatars.githubusercontent.com/u/52870424"
        },
        {
          "username": "gauthier-th",
          "href": "https://github.com/gauthier-th",
          "avatar": "https://avatars.githubusercontent.com/u/37781713"
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
      "forks": 5203,
      "added_stars": 1015,
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
      "author": "sparkjsdev",
      "repo": "spark",
      "avatar": "https://github.com/sparkjsdev.png",
      "repo_link": "https://github.com/sparkjsdev/spark",
      "desc": "✨ An advanced 3D Gaussian Splatting renderer for THREE.js",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 254,
      "added_stars": 535,
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
      "author": "snarktank",
      "repo": "ralph",
      "avatar": "https://github.com/snarktank.png",
      "repo_link": "https://github.com/snarktank/ralph",
      "desc": "Ralph is an autonomous AI agent loop that runs repeatedly until all PRD items are complete.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1735,
      "added_stars": 1600,
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
      "author": "codeforreal1",
      "repo": "compressO",
      "avatar": "https://github.com/codeforreal1.png",
      "repo_link": "https://github.com/codeforreal1/compressO",
      "desc": "Convert any video/image into a tiny size. 100% free & open-source. Available for Mac, Windows & Linux.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 302,
      "added_stars": 328,
      "builtBy": [
        {
          "username": "niraj-khatiwada",
          "href": "https://github.com/niraj-khatiwada",
          "avatar": "https://avatars.githubusercontent.com/u/51436631"
        },
        {
          "username": "niraj-wh",
          "href": "https://github.com/niraj-wh",
          "avatar": "https://avatars.githubusercontent.com/u/152840735"
        },
        {
          "username": "mbifulco",
          "href": "https://github.com/mbifulco",
          "avatar": "https://avatars.githubusercontent.com/u/1844496"
        },
        {
          "username": "extraes",
          "href": "https://github.com/extraes",
          "avatar": "https://avatars.githubusercontent.com/u/52384576"
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
      "forks": 2235,
      "added_stars": 819,
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
      "forks": 2354,
      "added_stars": 6739,
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
      "forks": 5761,
      "added_stars": 5941,
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
      "author": "steipete",
      "repo": "wacli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/wacli",
      "desc": "WhatsApp CLI",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 235,
      "added_stars": 1298,
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
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 465,
      "added_stars": 935,
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
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 348,
      "added_stars": 701,
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
      "forks": 291,
      "added_stars": 1080,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3861,
      "added_stars": 1404,
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
      "author": "mostlygeek",
      "repo": "llama-swap",
      "avatar": "https://github.com/mostlygeek.png",
      "repo_link": "https://github.com/mostlygeek/llama-swap",
      "desc": "Reliable model swapping for any local OpenAI/Anthropic compatible server - llama.cpp, vllm, etc",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 261,
      "added_stars": 606,
      "builtBy": [
        {
          "username": "mostlygeek",
          "href": "https://github.com/mostlygeek",
          "avatar": "https://avatars.githubusercontent.com/u/83972"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ryan-steed-usa",
          "href": "https://github.com/ryan-steed-usa",
          "avatar": "https://avatars.githubusercontent.com/u/240190636"
        },
        {
          "username": "shirayu",
          "href": "https://github.com/shirayu",
          "avatar": "https://avatars.githubusercontent.com/u/963961"
        },
        {
          "username": "Thammachart",
          "href": "https://github.com/Thammachart",
          "avatar": "https://avatars.githubusercontent.com/u/1731496"
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
      "forks": 1476,
      "added_stars": 1279,
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
          "username": "duwenxin99",
          "href": "https://github.com/duwenxin99",
          "avatar": "https://avatars.githubusercontent.com/u/117315983"
        },
        {
          "username": "averikitsch",
          "href": "https://github.com/averikitsch",
          "avatar": "https://avatars.githubusercontent.com/u/6519888"
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
      "forks": 3019,
      "added_stars": 1380,
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
      "author": "mudler",
      "repo": "LocalAI",
      "avatar": "https://github.com/mudler.png",
      "repo_link": "https://github.com/mudler/LocalAI",
      "desc": "LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3970,
      "added_stars": 1712,
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
      "author": "masterking32",
      "repo": "MasterDnsVPN",
      "avatar": "https://github.com/masterking32.png",
      "repo_link": "https://github.com/masterking32/MasterDnsVPN",
      "desc": "Advanced DNS tunneling VPN for censorship bypass, optimized beyond DNSTT and SlipStream with low-overhead ARQ, resolver load balancing, high packet-loss stability and speed.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 68,
      "added_stars": 616,
      "builtBy": [
        {
          "username": "masterking32",
          "href": "https://github.com/masterking32",
          "avatar": "https://avatars.githubusercontent.com/u/1076030"
        },
        {
          "username": "abolix",
          "href": "https://github.com/abolix",
          "avatar": "https://avatars.githubusercontent.com/u/20380298"
        },
        {
          "username": "PentSec",
          "href": "https://github.com/PentSec",
          "avatar": "https://avatars.githubusercontent.com/u/11955573"
        },
        {
          "username": "MahdiMirzadeh",
          "href": "https://github.com/MahdiMirzadeh",
          "avatar": "https://avatars.githubusercontent.com/u/63877463"
        },
        {
          "username": "typerhack",
          "href": "https://github.com/typerhack",
          "avatar": "https://avatars.githubusercontent.com/u/22979706"
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
      "forks": 2868,
      "added_stars": 324,
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
      "author": "guohuiyuan",
      "repo": "go-music-dl",
      "avatar": "https://github.com/guohuiyuan.png",
      "repo_link": "https://github.com/guohuiyuan/go-music-dl",
      "desc": "一个基于 Go 语言的全网音乐搜索与下载工具。支持 CLI 命令行与 Web 服务双模式，内置网易云、QQ、酷狗、Bilibili、汽水音乐等 10+ 个主流平台，支持多源并发搜索与无损音质解析。music-dl交流群：1074285005",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 193,
      "added_stars": 1697,
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
      "author": "NoFxAiOS",
      "repo": "nofx",
      "avatar": "https://github.com/NoFxAiOS.png",
      "repo_link": "https://github.com/NoFxAiOS/nofx",
      "desc": "Your personal AI trading assistant. Any market. Any model. Pay with USDC, not API keys.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2963,
      "added_stars": 2450,
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
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5199,
      "added_stars": 1347,
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
      "author": "kagent-dev",
      "repo": "kagent",
      "avatar": "https://github.com/kagent-dev.png",
      "repo_link": "https://github.com/kagent-dev/kagent",
      "desc": "Cloud Native Agentic AI | Discord: https://bit.ly/kagentdiscord",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 520,
      "added_stars": 230,
      "builtBy": [
        {
          "username": "EItanya",
          "href": "https://github.com/EItanya",
          "avatar": "https://avatars.githubusercontent.com/u/4185086"
        },
        {
          "username": "peterj",
          "href": "https://github.com/peterj",
          "avatar": "https://avatars.githubusercontent.com/u/11080940"
        },
        {
          "username": "ilackarms",
          "href": "https://github.com/ilackarms",
          "avatar": "https://avatars.githubusercontent.com/u/5974898"
        },
        {
          "username": "onematchfox",
          "href": "https://github.com/onematchfox",
          "avatar": "https://avatars.githubusercontent.com/u/878612"
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
      "forks": 908,
      "added_stars": 1471,
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
      "author": "anchore",
      "repo": "syft",
      "avatar": "https://github.com/anchore.png",
      "repo_link": "https://github.com/anchore/syft",
      "desc": "CLI tool and library for generating a Software Bill of Materials from container images and filesystems",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 831,
      "added_stars": 251,
      "builtBy": [
        {
          "username": "wagoodman",
          "href": "https://github.com/wagoodman",
          "avatar": "https://avatars.githubusercontent.com/u/590471"
        },
        {
          "username": "spiffcs",
          "href": "https://github.com/spiffcs",
          "avatar": "https://avatars.githubusercontent.com/u/32073428"
        },
        {
          "username": "kzantow",
          "href": "https://github.com/kzantow",
          "avatar": "https://avatars.githubusercontent.com/u/3009477"
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
      "forks": 14733,
      "added_stars": 92374,
      "builtBy": [
        {
          "username": "teknium1",
          "href": "https://github.com/teknium1",
          "avatar": "https://avatars.githubusercontent.com/u/127238744"
        },
        {
          "username": "OutThisLife",
          "href": "https://github.com/OutThisLife",
          "avatar": "https://avatars.githubusercontent.com/u/770929"
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
      "forks": 8131,
      "added_stars": 31326,
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
      "author": "mvanhorn",
      "repo": "last30days-skill",
      "avatar": "https://github.com/mvanhorn.png",
      "repo_link": "https://github.com/mvanhorn/last30days-skill",
      "desc": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1878,
      "added_stars": 18459,
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
      "author": "shiyu-coder",
      "repo": "Kronos",
      "avatar": "https://github.com/shiyu-coder.png",
      "repo_link": "https://github.com/shiyu-coder/Kronos",
      "desc": "Kronos: A Foundation Model for the Language of Financial Markets",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3557,
      "added_stars": 8354,
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
      "forks": 7319,
      "added_stars": 21858,
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
      "author": "OpenBMB",
      "repo": "VoxCPM",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/VoxCPM",
      "desc": "VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and True-to-Life Cloning",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1773,
      "added_stars": 8645,
      "builtBy": [
        {
          "username": "Labmem-Zhouyx",
          "href": "https://github.com/Labmem-Zhouyx",
          "avatar": "https://avatars.githubusercontent.com/u/63361337"
        },
        {
          "username": "liuxin99",
          "href": "https://github.com/liuxin99",
          "avatar": "https://avatars.githubusercontent.com/u/33060143"
        },
        {
          "username": "VoxInstruct",
          "href": "https://github.com/VoxInstruct",
          "avatar": "https://avatars.githubusercontent.com/u/167593451"
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
      "author": "microsoft",
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4672,
      "added_stars": 16777,
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "\"DeepTutor: Agent-Native Personalized Learning Assistant\"",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2733,
      "added_stars": 9299,
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
      "author": "FujiwaraChoki",
      "repo": "MoneyPrinterV2",
      "avatar": "https://github.com/FujiwaraChoki.png",
      "repo_link": "https://github.com/FujiwaraChoki/MoneyPrinterV2",
      "desc": "Automate the process of making money online.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3213,
      "added_stars": 14606,
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
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3683,
      "added_stars": 9827,
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
      "author": "hacksider",
      "repo": "Deep-Live-Cam",
      "avatar": "https://github.com/hacksider.png",
      "repo_link": "https://github.com/hacksider/Deep-Live-Cam",
      "desc": "real time face swap and one-click video deepfake with only a single image",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13287,
      "added_stars": 11416,
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
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9364,
      "added_stars": 18805,
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
      "author": "SakanaAI",
      "repo": "AI-Scientist-v2",
      "avatar": "https://github.com/SakanaAI.png",
      "repo_link": "https://github.com/SakanaAI/AI-Scientist-v2",
      "desc": "The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 791,
      "added_stars": 3445,
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
      "forks": 1767,
      "added_stars": 8144,
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
      "forks": 1573,
      "added_stars": 6060,
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
      "forks": 3294,
      "added_stars": 10755,
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
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9802,
      "added_stars": 7185,
      "builtBy": [
        {
          "username": "virattt",
          "href": "https://github.com/virattt",
          "avatar": "https://avatars.githubusercontent.com/u/901795"
        },
        {
          "username": "arsaboo",
          "href": "https://github.com/arsaboo",
          "avatar": "https://avatars.githubusercontent.com/u/18319734"
        },
        {
          "username": "KittatamSaisaard",
          "href": "https://github.com/KittatamSaisaard",
          "avatar": "https://avatars.githubusercontent.com/u/50354903"
        },
        {
          "username": "jsemldonado",
          "href": "https://github.com/jsemldonado",
          "avatar": "https://avatars.githubusercontent.com/u/172995042"
        },
        {
          "username": "ak4631",
          "href": "https://github.com/ak4631",
          "avatar": "https://avatars.githubusercontent.com/u/132299371"
        }
      ]
    },
    {
      "author": "lsdefine",
      "repo": "GenericAgent",
      "avatar": "https://github.com/lsdefine.png",
      "repo_link": "https://github.com/lsdefine/GenericAgent",
      "desc": "Self-evolving agent: grows skill tree from 3.3K-line seed, achieving full system control with 6x less token consumption",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 499,
      "added_stars": 3744,
      "builtBy": [
        {
          "username": "lsdefine",
          "href": "https://github.com/lsdefine",
          "avatar": "https://avatars.githubusercontent.com/u/3377819"
        },
        {
          "username": "JinyiHan99",
          "href": "https://github.com/JinyiHan99",
          "avatar": "https://avatars.githubusercontent.com/u/154297799"
        },
        {
          "username": "ViviqwerAsd",
          "href": "https://github.com/ViviqwerAsd",
          "avatar": "https://avatars.githubusercontent.com/u/90703326"
        },
        {
          "username": "shenhao-stu",
          "href": "https://github.com/shenhao-stu",
          "avatar": "https://avatars.githubusercontent.com/u/65658684"
        },
        {
          "username": "wjl2023",
          "href": "https://github.com/wjl2023",
          "avatar": "https://avatars.githubusercontent.com/u/126332148"
        }
      ]
    },
    {
      "author": "datalab-to",
      "repo": "chandra",
      "avatar": "https://github.com/datalab-to.png",
      "repo_link": "https://github.com/datalab-to/chandra",
      "desc": "OCR model that handles complex tables, forms, handwriting with full layout.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 975,
      "added_stars": 4229,
      "builtBy": [
        {
          "username": "VikParuchuri",
          "href": "https://github.com/VikParuchuri",
          "avatar": "https://avatars.githubusercontent.com/u/913340"
        },
        {
          "username": "sandy0kwon",
          "href": "https://github.com/sandy0kwon",
          "avatar": "https://avatars.githubusercontent.com/u/78377296"
        },
        {
          "username": "zanussbaum",
          "href": "https://github.com/zanussbaum",
          "avatar": "https://avatars.githubusercontent.com/u/33707069"
        }
      ]
    },
    {
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🚀🚀 「大模型」2小时完全从0训练64M的小参数GPT！🌏 Train a 64M-parameter GPT from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5976,
      "added_stars": 6119,
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
          "username": "readlnh",
          "href": "https://github.com/readlnh",
          "avatar": "https://avatars.githubusercontent.com/u/16349082"
        },
        {
          "username": "wangzhaode",
          "href": "https://github.com/wangzhaode",
          "avatar": "https://avatars.githubusercontent.com/u/8401806"
        },
        {
          "username": "yuyu5333",
          "href": "https://github.com/yuyu5333",
          "avatar": "https://avatars.githubusercontent.com/u/77156718"
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
      "title": "I got tired of wiring the same caching stack every project, so I built LayerCache",
      "url": "https://dev.to/flyingsquirrel0419/i-got-tired-of-wiring-the-same-caching-stack-every-project-so-i-built-layercache-52e2",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-04-19T17:20:09.000Z"
    },
    {
      "title": "EverFern AI",
      "url": "https://everfern.vercel.app",
      "upvotes": "1",
      "comments": "2",
      "created": "2026-04-18T14:58:55.000Z"
    },
    {
      "title": "claude-alloy – 14 Claude Code sub-agents, no wrapper or runtime",
      "url": "https://github.com/OMARVII/claude-alloy",
      "upvotes": "1",
      "comments": "2",
      "created": "2026-04-17T20:12:01.000Z"
    },
    {
      "title": "47 Cursor Rules for 16 Frameworks — Open Source .cursorrules Collection",
      "url": "https://github.com/survivorforge/cursor-rules",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-04-17T17:27:07.000Z"
    },
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
      "comments": "2",
      "created": "2026-04-07T22:39:58.000Z"
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
      "reactions": 119,
      "comments": 22,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Multi-Agent A2A with the Agent Development Kit(ADK), Azure ACI, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Multi-Agent...",
      "url": "https://dev.to/gde/multi-agent-a2a-with-the-agent-development-kitadk-azure-aci-and-gemini-cli-1k84",
      "tags": "googleadk, multiagent, gemini, a2a",
      "reactions": 5,
      "comments": 0,
      "reading_time": 13,
      "author": "xbill"
    },
    {
      "title": "What was your win this week?!",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-28fb",
      "tags": "discuss, weeklyretro",
      "reactions": 59,
      "comments": 32,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Boring code is an organizational tell",
      "description": "If boring code is good, why is it so rare? Clever code is not the result of clever engineers. It's...",
      "url": "https://dev.to/simme/boring-code-is-an-organizational-tell-4gca",
      "tags": "ai, leadership, culture, management",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "simme"
    },
    {
      "title": "Join our DEV Weekend Challenge — $1,000 in Prizes Across TEN winners! Submissions Due April 20 at 6:59 AM UTC.",
      "description": "We're excited to kick off another DEV Weekend Challenge, a short bite-sized challenge planned to fit...",
      "url": "https://dev.to/devteam/join-our-dev-weekend-challenge-1000-in-prizes-across-ten-winners-submissions-due-april-20-at-47i1",
      "tags": "devchallenge, weekendchallenge",
      "reactions": 107,
      "comments": 51,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "AI Doesn't Fix Weak Engineering. It Just Speeds It Up.",
      "description": "\"Weak engineers with AI still produce weak output. Just faster.\" That was the whole point. AI changes...",
      "url": "https://dev.to/jonoherrington/ai-doesnt-fix-weak-engineering-it-just-speeds-it-up-5bak",
      "tags": "ai, leadership, discuss",
      "reactions": 74,
      "comments": 42,
      "reading_time": 5,
      "author": "jonoherrington"
    },
    {
      "title": "Building a Smarter Hiring Engine: AI Recruiter with RAG, Memory & Web Search",
      "description": "This is a submission for Weekend Challenge: Earth Day Edition           Background               ...",
      "url": "https://dev.to/ranjancse/building-a-smarter-hiring-engine-ai-recruiter-with-rag-memory-web-search-4fpe",
      "tags": "devchallenge, weekendchallenge, ai, python",
      "reactions": 9,
      "comments": 0,
      "reading_time": 6,
      "author": "ranjancse"
    },
    {
      "title": "Every climate chatbot is amnesiac. So I built Aura — a stateful climate coach on Backboard + Gemini",
      "description": "Every climate chatbot is amnesiac. So I built Aura — a stateful climate coach on Backboard +...",
      "url": "https://dev.to/dev_rajput_2d46f92f8a3418/every-climate-chatbot-is-amnesiac-so-i-built-aura-a-stateful-climate-coach-on-backboard-gemini-4kih",
      "tags": "weekendchallenge, webdev, ai, devchallenge",
      "reactions": 12,
      "comments": 2,
      "reading_time": 6,
      "author": "dev_rajput_2d46f92f8a3418"
    },
    {
      "title": "The Mental Framework for Unlocking Agentic Workflows",
      "description": "Long-running agentic workflows will inevitably hit a context wall: the context window fills, compaction runs, and layered summaries start replacing the details you still needed. In this article, we discuss the Principle of Least Context and what that looks like in practice, especially towards effective map-reduce workflows.",
      "url": "https://dev.to/somedood/the-mental-framework-for-unlocking-agentic-workflows-cg1",
      "tags": "ai, agents, llm, claude",
      "reactions": 4,
      "comments": 0,
      "reading_time": 11,
      "author": "somedood"
    },
    {
      "title": "Android desktop mode: features, device support, and the OLED screen burn-in problem",
      "description": "A true \"PC in your pocket\" closer to reality",
      "url": "https://dev.to/maxmoffa/android-desktop-mode-features-device-support-and-the-oled-screen-burn-in-problem-5a40",
      "tags": "android, google, mobile, productivity",
      "reactions": 23,
      "comments": 0,
      "reading_time": 7,
      "author": "maxmoffa"
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
      "title": "The Missing Bundler Features",
      "url": "https://byroot.github.io/ruby/bundler/2026/04/20/bundle-features.html",
      "score": 2,
      "comments": 0,
      "tags": [
        "ruby"
      ],
      "id": "cwnraw"
    },
    {
      "title": "Why birds were the only dinosaurs to survive mass extinction",
      "url": "https://www.scientificamerican.com/article/an-asteroid-extinguished-all-the-dinosaurs-except-for-birds-heres-why/",
      "score": -1,
      "comments": 0,
      "tags": [
        "science"
      ],
      "id": "7ivkkf"
    },
    {
      "title": "Claude Desktop installs undocumented browser extensions for Chrome and other browsers",
      "url": "https://www.thatprivacyguy.com/blog/anthropic-spyware/",
      "score": 6,
      "comments": 0,
      "tags": [
        "privacy",
        "vibecoding"
      ],
      "id": "pfqxak"
    },
    {
      "title": "Theseus, a static Windows emulator",
      "url": "https://neugierig.org/software/blog/2026/04/theseus.html",
      "score": 12,
      "comments": 0,
      "tags": [
        "retrocomputing",
        "windows"
      ],
      "id": "dfe90i"
    },
    {
      "title": "This Week in Plasma: Per-Screen Virtual Desktops and Wayland Session Restore",
      "url": "https://blogs.kde.org/2026/04/18/this-week-in-plasma-per-screen-virtual-desktops-and-wayland-session-restore/",
      "score": 9,
      "comments": 1,
      "tags": [
        "linux"
      ],
      "id": "7ovybf"
    },
    {
      "title": "High-performance 2D graphics rendering on the CPU using sparse strips",
      "url": "https://ethz.ch/content/dam/ethz/special-interest/infk/inst-pls/plf-dam/documents/StudentProjects/MasterTheses/2025-Laurenz-Thesis.pdf",
      "score": 5,
      "comments": 1,
      "tags": [
        "graphics",
        "pdf",
        "performance",
        "rust"
      ],
      "id": "0wq9ns"
    },
    {
      "title": "The fastest way to match characters on ARM processors?",
      "url": "https://lemire.me/blog/2026/04/19/the-fastest-way-to-match-characters-on-arm-processors/",
      "score": 3,
      "comments": 0,
      "tags": [
        "assembly",
        "performance"
      ],
      "id": "u1a0fd"
    },
    {
      "title": "Defense in Depth: A Practical Guide to Python Supply Chain Security",
      "url": "https://bernat.tech/posts/securing-python-supply-chain/",
      "score": 2,
      "comments": 0,
      "tags": [
        "python",
        "security"
      ],
      "id": "ghsneu"
    },
    {
      "title": "Stupid RCU Tricks: Corner-Case RCU Implementations",
      "url": "https://people.kernel.org/paulmck/stupid-rcu-tricks-corner-case-rcu-implementations",
      "score": 4,
      "comments": 0,
      "tags": [
        "osdev"
      ],
      "id": "it5xwh"
    },
    {
      "title": "corpus: self-hosted listenbrainz and last.fm frontend",
      "url": "https://github.com/mtmn/corpus",
      "score": 7,
      "comments": 0,
      "tags": [
        "elm",
        "haskell",
        "vibecoding"
      ],
      "id": "qxhzxh"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "neehao",
      "descendants": 5,
      "id": 47819410,
      "kids": [
        47831181,
        47824502,
        47821504,
        47821507,
        47821506
      ],
      "score": 28,
      "time": 1776545315,
      "title": "SDF Public Access Unix System",
      "type": "story",
      "url": "https://sdf.org/?ssh"
    },
    {
      "by": "prismatic",
      "descendants": 1,
      "id": 47789087,
      "kids": [
        47831147
      ],
      "score": 13,
      "time": 1776318189,
      "title": "Ben Lerner's Big Feelings",
      "type": "story",
      "url": "https://www.vulture.com/article/ben-lerner-transcription-interview.html"
    },
    {
      "by": "tibbar",
      "descendants": 0,
      "id": 47830575,
      "score": 12,
      "time": 1776661543,
      "title": "Stripe's Payment APIs: the first 10 years (2020)",
      "type": "story",
      "url": "https://stripe.dev/blog/payment-api-design"
    },
    {
      "by": "colesantiago",
      "descendants": 393,
      "id": 47824463,
      "kids": [
        47829411,
        47826825,
        47826114,
        47831091,
        47825592,
        47831018,
        47826826,
        47826546,
        47824811,
        47830997,
        47824655,
        47831070,
        47825559,
        47825604,
        47830499,
        47824649,
        47826564,
        47826812,
        47830525,
        47825676,
        47825120,
        47827598,
        47825787,
        47825753,
        47827014,
        47825133,
        47826468,
        47829360,
        47828248,
        47826823,
        47826491,
        47824860,
        47827366,
        47824778,
        47830322,
        47827060,
        47824782,
        47826557,
        47825808,
        47825913,
        47824876,
        47825822,
        47824642,
        47826356,
        47827232,
        47824838,
        47829310,
        47829838,
        47829200,
        47828166,
        47829935,
        47829906,
        47825563,
        47827090,
        47827867,
        47829930,
        47824761,
        47826048,
        47825303,
        47827233,
        47826045,
        47827281,
        47827160,
        47825556,
        47824935
      ],
      "score": 694,
      "text": "<a href=\"https:&#x2F;&#x2F;vercel.com&#x2F;kb&#x2F;bulletin&#x2F;vercel-april-2026-security-incident\" rel=\"nofollow\">https:&#x2F;&#x2F;vercel.com&#x2F;kb&#x2F;bulletin&#x2F;vercel-april-2026-security-in...</a>",
      "time": 1776608078,
      "title": "Vercel April 2026 security incident",
      "type": "story",
      "url": "https://www.bleepingcomputer.com/news/security/vercel-confirms-breach-as-hackers-claim-to-be-selling-stolen-data/"
    },
    {
      "by": "vinhnx",
      "descendants": 63,
      "id": 47822734,
      "kids": [
        47829326,
        47829918,
        47829235,
        47829031,
        47822826,
        47830299,
        47829526,
        47829613,
        47829131,
        47829264,
        47829268,
        47829771,
        47830209,
        47829551,
        47829370,
        47828775,
        47829433
      ],
      "score": 161,
      "time": 1776587573,
      "title": "A Brief History of Fish Sauce",
      "type": "story",
      "url": "https://www.legalnomads.com/fish-sauce/"
    },
    {
      "by": "twapi",
      "descendants": 21,
      "id": 47829178,
      "kids": [
        47830475,
        47830716,
        47830455,
        47830083,
        47830248,
        47830950,
        47830522
      ],
      "score": 70,
      "time": 1776646600,
      "title": "Claude Token Counter, now with model comparisons",
      "type": "story",
      "url": "https://simonwillison.net/2026/Apr/20/claude-token-counts/"
    },
    {
      "by": "walterbell",
      "descendants": 52,
      "id": 47827259,
      "kids": [
        47831074,
        47830422,
        47830300,
        47829956,
        47830357,
        47830425,
        47830518,
        47829140,
        47830918,
        47831058,
        47830621,
        47830889,
        47830788,
        47830577,
        47830571,
        47830498,
        47829750,
        47830187,
        47830405,
        47830261
      ],
      "score": 157,
      "time": 1776629349,
      "title": "Stop trying to engineer your way out of listening to people",
      "type": "story",
      "url": "https://ashley.rolfmore.com/stop-trying-to-engineer-your-way-out-of-listening-to-people/"
    },
    {
      "by": "pseudolus",
      "descendants": 6,
      "id": 47804178,
      "kids": [
        47830592,
        47830908
      ],
      "score": 32,
      "time": 1776419453,
      "title": "Monumental ship burial beneath ancient Norwegian mound predates the Viking Age",
      "type": "story",
      "url": "https://phys.org/news/2026-04-monumental-ship-burial-beneath-ancient.html"
    },
    {
      "by": "crescit_eundo",
      "descendants": 96,
      "id": 47826100,
      "kids": [
        47827602,
        47831170,
        47826623,
        47827963,
        47830914,
        47830882,
        47826914,
        47826694,
        47828468,
        47827650,
        47827728,
        47827547,
        47829223,
        47829537,
        47828920,
        47828147,
        47826975,
        47827600,
        47828102,
        47827036,
        47827506
      ],
      "score": 191,
      "time": 1776620643,
      "title": "The Bromine Chokepoint",
      "type": "story",
      "url": "https://warontherocks.com/cogs-of-war/the-bromine-chokepoint-how-strife-in-the-middle-east-could-halt-production-of-the-worlds-memory-chips/"
    },
    {
      "by": "akashwadhwani35",
      "descendants": 30,
      "id": 47780743,
      "kids": [
        47830032,
        47829924,
        47830025,
        47829860,
        47830569,
        47829769,
        47830315,
        47830172,
        47829820,
        47780744,
        47830178,
        47830006,
        47829575,
        47830484
      ],
      "score": 94,
      "time": 1776267945,
      "title": "Mechanical Keyboard Sounds – A listening Museum",
      "type": "story",
      "url": "https://sheets.works/data-viz/keyboard-sounds"
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
      "title": "Da Autoria à Exegese: O Código como Ato de Linguagem na Era da IA",
      "description": "Com o uso diário de IA no trabalho, venho percebendo uma mudança que no começo parecia só...",
      "url": "https://dev.to/nicole_aragao/da-autoria-a-exegese-o-codigo-como-ato-de-linguagem-na-era-da-ia-g37",
      "tags": "ai, career, discuss, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "nicole_aragao"
    },
    {
      "title": "Clearing Your Jira Tickets Isn't Enough",
      "description": "I used to think being a good engineer meant being fast. Pick up a ticket, ship it, grab the next one....",
      "url": "https://dev.to/sanjay_sarvaiya/clearing-your-jira-tickets-isnt-enough-1lmf",
      "tags": "career, programming, productivity, developers",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "sanjay_sarvaiya"
    },
    {
      "title": "When authority doesn't compute",
      "description": "Most people learn early that you don't look an adult in the eyes when you're being told off. For many autistic people, that reflex simply never installed. This post explores why — and what happens to the emotional cost of all that defiance that wasn't actually defiance at all.",
      "url": "https://dev.to/raphink/when-authority-doesnt-compute-4bi7",
      "tags": "mentalhealth, inclusion, community, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "raphink"
    },
    {
      "title": "Why Do I Keep Killing My Side Projects?",
      "description": "Two projects, two deaths. At some point, you need to stop blaming circumstances and start asking harder questions.",
      "url": "https://dev.to/eayurt/why-do-i-keep-killing-my-side-projects-31eh",
      "tags": "sideprojects, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "eayurt"
    },
    {
      "title": "Focus Time: Why 2 Hours of Uninterrupted Code Equals 6 Hours of Fragmented Work",
      "description": "Data shows uninterrupted coding sessions produce 3x more output than fragmented ones. Here's how to protect focus time for your engineering team.",
      "url": "https://dev.to/arthur_pandev/focus-time-why-2-hours-of-uninterrupted-code-equals-6-hours-of-fragmented-work-32bp",
      "tags": "productivity, career, programming, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "arthur_pandev"
    },
    {
      "title": "Monday vs Friday: How Day of Week Affects Developer Productivity",
      "description": "Real data from developers shows Tuesday is the peak productivity day. We break down coding time by day of week across 100+ B2B companies.",
      "url": "https://dev.to/arthur_pandev/monday-vs-friday-how-day-of-week-affects-developer-productivity-6am",
      "tags": "productivity, career, discuss, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "arthur_pandev"
    },
    {
      "title": "5 Data Patterns That Scream 'Your Developer Is Burning Out",
      "description": "Burnout doesn't start with a resignation letter. IDE activity data reveals 5 warning patterns weeks before a developer quits or crashes.",
      "url": "https://dev.to/arthur_pandev/5-data-patterns-that-scream-your-developer-is-burning-out-3d7j",
      "tags": "career, management, productivity, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "arthur_pandev"
    },
    {
      "title": "AI Was Supposed to Reduce Developer Burnout. The Data Says Otherwise.",
      "description": "We launched the State of Developer Burnout 2026 survey recently. Here's what the early data shows.   ...",
      "url": "https://dev.to/recharge/ai-was-supposed-to-reduce-developer-burnout-the-data-says-otherwise-157c",
      "tags": "burnout, career, ai, mentalhealth",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "recharge"
    },
    {
      "title": "The Burnout Signal That Nobody Talks About (Our Data Shows Why)",
      "description": "Every day, engineers and tech workers check in anonymously on Recharge. They rate their energy,...",
      "url": "https://dev.to/recharge/the-burnout-signal-that-nobody-talks-about-our-data-shows-why-db5",
      "tags": "burnout, career, productivity, mentalhealth",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "recharge"
    },
    {
      "title": "I shipped 0 products in 7 years. Then I shipped 2 in 6 months. Here's what changed.",
      "description": "For 7 years, I was the dev companies called when their app was on fire. I'd come in, fix the...",
      "url": "https://dev.to/gammagt/i-shipped-0-products-in-7-years-then-i-shipped-2-in-6-months-heres-what-changed-174m",
      "tags": "webdev, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "gammagt"
    }
  ]
}
```

