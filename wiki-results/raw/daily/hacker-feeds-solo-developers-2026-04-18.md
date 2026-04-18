# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-18 06:41:46 UTC

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
      "forks": 1931,
      "added_stars": 10056,
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
      "forks": 2895,
      "added_stars": 3745,
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
      "forks": 5125,
      "added_stars": 14033,
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
      "author": "jamiepine",
      "repo": "voicebox",
      "avatar": "https://github.com/jamiepine.png",
      "repo_link": "https://github.com/jamiepine/voicebox",
      "desc": "The open-source voice synthesis studio",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2293,
      "added_stars": 5007,
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
      "author": "rowboatlabs",
      "repo": "rowboat",
      "avatar": "https://github.com/rowboatlabs.png",
      "repo_link": "https://github.com/rowboatlabs/rowboat",
      "desc": "Open-source AI coworker, with memory",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1218,
      "added_stars": 1124,
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
      "author": "diegosouzapw",
      "repo": "OmniRoute",
      "avatar": "https://github.com/diegosouzapw.png",
      "repo_link": "https://github.com/diegosouzapw/OmniRoute",
      "desc": "OmniRoute is an AI gateway for multi-provider LLMs: an OpenAI-compatible endpoint with smart routing, load balancing, retries, and fallbacks. Add policies, rate limits, caching, and observability for reliable, cost-aware inference.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 472,
      "added_stars": 866,
      "builtBy": [
        {
          "username": "diegosouzapw",
          "href": "https://github.com/diegosouzapw",
          "avatar": "https://avatars.githubusercontent.com/u/8016841"
        },
        {
          "username": "christopher-s",
          "href": "https://github.com/christopher-s",
          "avatar": "https://avatars.githubusercontent.com/u/3751981"
        },
        {
          "username": "rdself",
          "href": "https://github.com/rdself",
          "avatar": "https://avatars.githubusercontent.com/u/55005611"
        },
        {
          "username": "oyi77",
          "href": "https://github.com/oyi77",
          "avatar": "https://avatars.githubusercontent.com/u/14921983"
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
      "forks": 638,
      "added_stars": 555,
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
      "author": "tradingview",
      "repo": "lightweight-charts",
      "avatar": "https://github.com/tradingview.png",
      "repo_link": "https://github.com/tradingview/lightweight-charts",
      "desc": "Performant financial charts built with HTML5 canvas",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2351,
      "added_stars": 605,
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
      "author": "codeforreal1",
      "repo": "compressO",
      "avatar": "https://github.com/codeforreal1.png",
      "repo_link": "https://github.com/codeforreal1/compressO",
      "desc": "Convert any video/image into a tiny size. 100% free & open-source. Available for Mac, Windows & Linux.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 297,
      "added_stars": 492,
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
      "author": "fosrl",
      "repo": "pangolin",
      "avatar": "https://github.com/fosrl.png",
      "repo_link": "https://github.com/fosrl/pangolin",
      "desc": "Identity-aware VPN and reverse proxy for remote access",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 647,
      "added_stars": 233,
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
      "author": "snarktank",
      "repo": "ralph",
      "avatar": "https://github.com/snarktank.png",
      "repo_link": "https://github.com/snarktank/ralph",
      "desc": "Ralph is an autonomous AI agent loop that runs repeatedly until all PRD items are complete.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1707,
      "added_stars": 2052,
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
      "author": "letta-ai",
      "repo": "letta-code",
      "avatar": "https://github.com/letta-ai.png",
      "repo_link": "https://github.com/letta-ai/letta-code",
      "desc": "The memory-first coding agent",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 232,
      "added_stars": 157,
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
      "author": "gitroomhq",
      "repo": "postiz-app",
      "avatar": "https://github.com/gitroomhq.png",
      "repo_link": "https://github.com/gitroomhq/postiz-app",
      "desc": "📨 The ultimate social media scheduling tool, with a bunch of AI 🤖",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5159,
      "added_stars": 912,
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
      "forks": 2225,
      "added_stars": 1126,
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
      "forks": 2270,
      "added_stars": 7094,
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
      "forks": 5650,
      "added_stars": 6209,
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
      "forks": 346,
      "added_stars": 793,
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
      "forks": 284,
      "added_stars": 1119,
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
      "forks": 448,
      "added_stars": 921,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2014,
      "added_stars": 5279,
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
      "author": "mudler",
      "repo": "LocalAI",
      "avatar": "https://github.com/mudler.png",
      "repo_link": "https://github.com/mudler/LocalAI",
      "desc": "LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3961,
      "added_stars": 1881,
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
      "author": "googleapis",
      "repo": "mcp-toolbox",
      "avatar": "https://github.com/googleapis.png",
      "repo_link": "https://github.com/googleapis/mcp-toolbox",
      "desc": "MCP Toolbox for Databases is an open source MCP server for databases.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1475,
      "added_stars": 1259,
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
      "forks": 3012,
      "added_stars": 1357,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3855,
      "added_stars": 1408,
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
      "author": "steipete",
      "repo": "wacli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/wacli",
      "desc": "WhatsApp CLI",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 218,
      "added_stars": 1158,
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
      "author": "masterking32",
      "repo": "MasterDnsVPN",
      "avatar": "https://github.com/masterking32.png",
      "repo_link": "https://github.com/masterking32/MasterDnsVPN",
      "desc": "Advanced DNS tunneling VPN for censorship bypass, optimized beyond DNSTT and SlipStream with low-overhead ARQ, resolver load balancing, high packet-loss stability and speed.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 65,
      "added_stars": 586,
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
      "author": "guohuiyuan",
      "repo": "go-music-dl",
      "avatar": "https://github.com/guohuiyuan.png",
      "repo_link": "https://github.com/guohuiyuan/go-music-dl",
      "desc": "一个基于 Go 语言的全网音乐搜索与下载工具。支持 CLI 命令行与 Web 服务双模式，内置网易云、QQ、酷狗、Bilibili、汽水音乐等 10+ 个主流平台，支持多源并发搜索与无损音质解析。music-dl交流群：1074285005",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 187,
      "added_stars": 1759,
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
      "author": "mostlygeek",
      "repo": "llama-swap",
      "avatar": "https://github.com/mostlygeek.png",
      "repo_link": "https://github.com/mostlygeek/llama-swap",
      "desc": "Reliable model swapping for any local OpenAI/Anthropic compatible server - llama.cpp, vllm, etc",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 251,
      "added_stars": 537,
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
      "author": "wavetermdev",
      "repo": "waveterm",
      "avatar": "https://github.com/wavetermdev.png",
      "repo_link": "https://github.com/wavetermdev/waveterm",
      "desc": "An open-source, AI-integrated, cross-platform terminal for seamless workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 898,
      "added_stars": 1554,
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
      "author": "goharbor",
      "repo": "harbor",
      "avatar": "https://github.com/goharbor.png",
      "repo_link": "https://github.com/goharbor/harbor",
      "desc": "An open source trusted cloud native registry project that stores, signs, and scans content.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5197,
      "added_stars": 595,
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
      "author": "NoFxAiOS",
      "repo": "nofx",
      "avatar": "https://github.com/NoFxAiOS.png",
      "repo_link": "https://github.com/NoFxAiOS/nofx",
      "desc": "Your personal AI trading assistant. Any market. Any model. Pay with USDC, not API keys.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2952,
      "added_stars": 2389,
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
      "forks": 5192,
      "added_stars": 1335,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 720,
      "added_stars": 927,
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
      "forks": 13719,
      "added_stars": 88177,
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
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8054,
      "added_stars": 31324,
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
      "author": "FujiwaraChoki",
      "repo": "MoneyPrinterV2",
      "avatar": "https://github.com/FujiwaraChoki.png",
      "repo_link": "https://github.com/FujiwaraChoki/MoneyPrinterV2",
      "desc": "Automate the process of making money online.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3199,
      "added_stars": 15049,
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
      "author": "mvanhorn",
      "repo": "last30days-skill",
      "avatar": "https://github.com/mvanhorn.png",
      "repo_link": "https://github.com/mvanhorn/last30days-skill",
      "desc": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1841,
      "added_stars": 18294,
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
      "author": "microsoft",
      "repo": "markitdown",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/markitdown",
      "desc": "Python tool for converting files and office documents to Markdown.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7155,
      "added_stars": 20572,
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
      "author": "shiyu-coder",
      "repo": "Kronos",
      "avatar": "https://github.com/shiyu-coder.png",
      "repo_link": "https://github.com/shiyu-coder/Kronos",
      "desc": "Kronos: A Foundation Model for the Language of Financial Markets",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3487,
      "added_stars": 7863,
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
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9252,
      "added_stars": 19008,
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
      "author": "microsoft",
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4654,
      "added_stars": 16556,
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
      "author": "OpenBMB",
      "repo": "VoxCPM",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/VoxCPM",
      "desc": "VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and True-to-Life Cloning",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1705,
      "added_stars": 7961,
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "\"DeepTutor: Agent-Native Personalized Learning Assistant\"",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2575,
      "added_stars": 8319,
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
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3650,
      "added_stars": 9610,
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
      "forks": 13249,
      "added_stars": 11223,
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
      "forks": 783,
      "added_stars": 3406,
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
      "forks": 1740,
      "added_stars": 8027,
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
      "author": "openai",
      "repo": "parameter-golf",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/parameter-golf",
      "desc": "Train the smallest LM you can that fits in 16MB. Best model wins!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3208,
      "added_stars": 4919,
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
      "author": "hugohe3",
      "repo": "ppt-master",
      "avatar": "https://github.com/hugohe3.png",
      "repo_link": "https://github.com/hugohe3/ppt-master",
      "desc": "AI generates natively editable PPTX from any document — real PowerPoint shapes, not images — no design skills needed",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 681,
      "added_stars": 3755,
      "builtBy": [
        {
          "username": "hugohe3",
          "href": "https://github.com/hugohe3",
          "avatar": "https://avatars.githubusercontent.com/u/188330578"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shandianchengzi",
          "href": "https://github.com/shandianchengzi",
          "avatar": "https://avatars.githubusercontent.com/u/58585665"
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
      "forks": 1507,
      "added_stars": 6138,
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
      "forks": 3254,
      "added_stars": 10789,
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
      "forks": 9709,
      "added_stars": 6895,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "claude-alloy – 14 Claude Code sub-agents, no wrapper or runtime",
      "url": "https://github.com/OMARVII/claude-alloy",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-04-17T20:12:01.000Z"
    },
    {
      "title": "47 Cursor Rules for 16 Frameworks — Open Source .cursorrules Collection",
      "url": "https://github.com/survivorforge/cursor-rules",
      "upvotes": "1",
      "comments": "0",
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
      "title": "What was your win this week?!",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-28fb",
      "tags": "discuss, weeklyretro",
      "reactions": 50,
      "comments": 17,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Congrats to the Notion MCP Challenge Winners!",
      "description": "The results are in!  We're thrilled to announce our winners for the Notion MCP Challenge! From...",
      "url": "https://dev.to/devteam/congrats-to-the-notion-mcp-challenge-winners-28ab",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 69,
      "comments": 9,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "AI Doesn't Fix Weak Engineering. It Just Speeds It Up.",
      "description": "\"Weak engineers with AI still produce weak output. Just faster.\" That was the whole point. AI changes...",
      "url": "https://dev.to/jonoherrington/ai-doesnt-fix-weak-engineering-it-just-speeds-it-up-5bak",
      "tags": "ai, leadership, discuss",
      "reactions": 58,
      "comments": 36,
      "reading_time": 5,
      "author": "jonoherrington"
    },
    {
      "title": "Join the OpenClaw Challenge: $1,200 Prize Pool!",
      "description": "If you've spent any time on the internet, you know OpenClaw has been making waves lately. We recently...",
      "url": "https://dev.to/devteam/join-the-openclaw-challenge-1200-prize-pool-5682",
      "tags": "devchallenge, openclawchallenge, openclaw, ai",
      "reactions": 100,
      "comments": 14,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Congrats to the 2026 WeCoded Challenge Winners!",
      "description": "The results are in! We are thrilled to announce the winners of the 2026 WeCoded Challenge.  Over the...",
      "url": "https://dev.to/devteam/congrats-to-the-2026-wecoded-challenge-winners-2pee",
      "tags": "devchallenge, wecoded, frontend, career",
      "reactions": 65,
      "comments": 16,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Join our DEV Weekend Challenge — $1,000 in Prizes Across TEN winners! Submissions Due April 20 at 6:59 AM UTC.",
      "description": "We're excited to kick off another DEV Weekend Challenge, a short bite-sized challenge planned to fit...",
      "url": "https://dev.to/devteam/join-our-dev-weekend-challenge-1000-in-prizes-across-ten-winners-submissions-due-april-20-at-47i1",
      "tags": "devchallenge, weekendchallenge",
      "reactions": 72,
      "comments": 31,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Intro to tc Cloud Functors: A Graph-First Mental Model for the Modern Cloud",
      "description": "This is the first part of a multipart series introducing _tc Cloud Functors_",
      "url": "https://dev.to/functors/intro-to-tc-cloud-functors-a-graph-first-mental-model-for-the-modern-cloud-3o17",
      "tags": "aws, serverless, devops, sre",
      "reactions": 5,
      "comments": 0,
      "reading_time": 8,
      "author": "rberger"
    },
    {
      "title": "Watching RubyGems.org in Real Time",
      "description": "RubyGems.org published its first public roadmap this week. That's new, and it's worth noticing.  I've...",
      "url": "https://dev.to/cseeman/watching-rubygemsorg-in-real-time-11o",
      "tags": "ruby, rails",
      "reactions": 42,
      "comments": 1,
      "reading_time": 3,
      "author": "cseeman"
    },
    {
      "title": "100 Daily Challenges to Learn Web3 and Solana",
      "description": "Learn Web3 by building with Solana. A 100-day challenge for developers covering transactions, accounts, programs, and real applications.",
      "url": "https://dev.to/100daysofsolana/100-daily-challenges-to-learn-web3-and-solana-3g2i",
      "tags": "web3, solana, programming, blockchain",
      "reactions": 62,
      "comments": 2,
      "reading_time": 2,
      "author": "matthewrevell"
    },
    {
      "title": "GheiaGrid: Reimagining Decentralized Urban Farming & Carbon Mining",
      "description": "This is a submission for Weekend Challenge: Earth Day Edition           What I Built   GheiaGrid is a...",
      "url": "https://dev.to/kheai/gheiagrid-reimagining-decentralized-urban-farming-carbon-mining-934",
      "tags": "devchallenge, weekendchallenge, agriculture, ai",
      "reactions": 8,
      "comments": 2,
      "reading_time": 5,
      "author": "kheai"
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
      "title": "Lenses in Rust and My Solution",
      "url": "https://lambdalemon.gay/posts/grist-lens",
      "score": 2,
      "comments": 0,
      "tags": [
        "plt",
        "rust"
      ],
      "id": "i0tuyd"
    },
    {
      "title": "Deleteduser.com —a $15 PII Magnet",
      "url": "https://mike-sheward.medium.com/deleteduser-com-a-15-pii-magnet-c4396eb21061",
      "score": 27,
      "comments": 3,
      "tags": [
        "security"
      ],
      "id": "muofgb"
    },
    {
      "title": "It Is Time to Ban the Sale of Precise Geolocation Data",
      "url": "https://www.lawfaremedia.org/article/it-is-time-to-ban-the-sale-of-precise-geolocation",
      "score": 9,
      "comments": 0,
      "tags": [
        "privacy"
      ],
      "id": "a6ztsz"
    },
    {
      "title": "Terminator: The Story of the 6502 Code You See Onscreen",
      "url": "https://www.youtube.com/watch?v=NebvccLHutQ",
      "score": 3,
      "comments": 0,
      "tags": [
        "assembly",
        "video"
      ],
      "id": "mrgqmz"
    },
    {
      "title": "Building ezli.me, a link shortener in Rust",
      "url": "https://rustunit.com/blog/2026/04-17-ezlime-link-shortener-in-rust/",
      "score": 2,
      "comments": 5,
      "tags": [
        "api",
        "release",
        "rust"
      ],
      "id": "tyxxnd"
    },
    {
      "title": "Why is IPv6 so complicated?",
      "url": "https://github.com/becarpenter/misc/blob/main/why6why.md",
      "score": 14,
      "comments": 7,
      "tags": [
        "networking"
      ],
      "id": "m0c78b"
    },
    {
      "title": "A simplified model of Fil-C",
      "url": "https://www.corsix.org/content/simplified-model-of-fil-c",
      "score": 25,
      "comments": 2,
      "tags": [
        "c"
      ],
      "id": "rp1yrv"
    },
    {
      "title": "AppArmor's experimental permissions prompting (2024)",
      "url": "https://discourse.ubuntu.com/t/ubuntu-desktop-s-24-10-dev-cycle-part-5-introducing-permissions-prompting/47963",
      "score": 4,
      "comments": 2,
      "tags": [
        "linux",
        "security"
      ],
      "id": "u1fill"
    },
    {
      "title": "The lost thesis of Dennis Ritchie",
      "url": "https://archive.computerhistory.org/resources/access/text/2020/05/102790971/Ritchie_dissertation.pdf",
      "score": 11,
      "comments": 2,
      "tags": [
        "pdf",
        "unix"
      ],
      "id": "my3lu9"
    },
    {
      "title": "Reflections on 30 Years of HPC Programming: So many hardware advances, so little adoption of new languages",
      "url": "https://chapel-lang.org/blog/posts/30years/",
      "score": 10,
      "comments": 0,
      "tags": [
        "performance",
        "plt"
      ],
      "id": "b75v6m"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "fouronnes3",
      "descendants": 7,
      "id": 47812341,
      "kids": [
        47812435,
        47813659,
        47813354,
        47813296,
        47813477
      ],
      "score": 82,
      "text": "I&#x27;ve been studying interval arithmetic for the past few weeks and it&#x27;s a really interesting field because while there is a ton of super interesting research published over the past decades, it has never really gotten the recognition that it deserves, IMO.<p>One reason for this is that standard interval arithmetic has really poor handling of division by intervals containing zero. If you compute 1 &#x2F; [-1, 2] in regular interval arithmetic, you get either [-∞, +∞], or you have to say that the operation is undefined. Both solutions are virtually useless. The real answer of course is [-∞, -1] U [0.5, +∞]: i.e. a union of two disjoint intervals.<p>This is useful because you can confidently exclude a non empty set of the real numbers ([-1, 0.5]) from the set of possible values that you can get by dividing 1 by a number between -1 and 2.<p>But this definition of interval division yields a value that is not an interval. This is a problem if you want to define a closed arithmetic system, where you can build and evaluate arbitrary expression over interval values.<p>(This behavior extends to any non continuous function like tan() for example, which is implemented in my project - not without difficulties!)<p>Well the obvious solution is to define your arithmetic over disjoint unions of intervals. This is the subject of a 2017 paper called &quot;Interval Unions&quot; by by Schichl, H., Domes, F., Montanher, T. and Kofler, K..<p>This open-source project I made implements interval union arithmetic in TypeScript in the form of a simple interactive calculator, so you can try it out for yourself! The underlying TypeScript library is dependency free and implements interval union arithmetic over IEEE 754 double precision floats (JS native number type) with outward rounding. This guarantees accuracy of interval results in the presence of rounding issue inherent to floating point.",
      "time": 1776474943,
      "title": "Show HN: I made a calculator that works over disjoint sets of intervals",
      "type": "story",
      "url": "https://victorpoughon.github.io/interval-calculator/"
    },
    {
      "by": "meetpateltech",
      "descendants": 644,
      "id": 47806725,
      "kids": [
        47807009,
        47808004,
        47807224,
        47808702,
        47807073,
        47807406,
        47810698,
        47807982,
        47809968,
        47812920,
        47808081,
        47812819,
        47808895,
        47809572,
        47806939,
        47813260,
        47807238,
        47810201,
        47807003,
        47807100,
        47807297,
        47812672,
        47807220,
        47811323,
        47810929,
        47807008,
        47812991,
        47812791,
        47808015,
        47807671,
        47810791,
        47807021,
        47807246,
        47813514,
        47811247,
        47807017,
        47808629,
        47809587,
        47809499,
        47807749,
        47808394,
        47811559,
        47808830,
        47807148,
        47813058,
        47808068,
        47807188,
        47807697,
        47812022,
        47808379,
        47809048,
        47806887,
        47810372,
        47811934,
        47807419,
        47811594,
        47809285,
        47809251,
        47807250,
        47808741,
        47806953,
        47807559,
        47808270,
        47808599,
        47807706,
        47807101,
        47812654,
        47807658,
        47809017,
        47809659,
        47809016,
        47807527,
        47808496,
        47807255,
        47810259,
        47808532,
        47807728,
        47813034,
        47808666,
        47809566,
        47808522,
        47807487,
        47808186,
        47809995,
        47809455,
        47809636,
        47811067,
        47807243,
        47807596,
        47807721,
        47806879,
        47811892,
        47810619,
        47808704,
        47807639,
        47808847,
        47808568,
        47808208,
        47811827,
        47813174,
        47807504,
        47813667,
        47807136,
        47807581,
        47807917,
        47811404,
        47806995,
        47808519,
        47807166,
        47808282,
        47807534,
        47813572,
        47812787,
        47807156,
        47811507,
        47810413,
        47807601,
        47809739,
        47807885,
        47807703,
        47806992,
        47807414
      ],
      "score": 980,
      "text": "Related: <a href=\"https:&#x2F;&#x2F;x.com&#x2F;flomerboy&#x2F;status&#x2F;2045162321589252458\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;flomerboy&#x2F;status&#x2F;2045162321589252458</a> (<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;flomerboy&#x2F;status&#x2F;2045162321589252458\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;flomerboy&#x2F;status&#x2F;2045162321589252458</a>)",
      "time": 1776438249,
      "title": "Claude Design",
      "type": "story",
      "url": "https://www.anthropic.com/news/claude-design-anthropic-labs"
    },
    {
      "by": "eshelyaron",
      "descendants": 8,
      "id": 47778938,
      "kids": [
        47813194,
        47812769,
        47813400,
        47812692,
        47812895,
        47813435,
        47813580
      ],
      "score": 80,
      "time": 1776260955,
      "title": "Towards trust in Emacs",
      "type": "story",
      "url": "https://eshelyaron.com/posts/2026-04-15-towards-trust-in-emacs.html"
    },
    {
      "by": "aray07",
      "descendants": 405,
      "id": 47807006,
      "kids": [
        47807499,
        47810256,
        47807766,
        47808371,
        47807974,
        47808052,
        47809879,
        47808423,
        47807179,
        47810204,
        47812823,
        47807590,
        47807843,
        47813391,
        47808335,
        47808538,
        47808094,
        47808709,
        47807904,
        47807633,
        47807497,
        47807936,
        47808333,
        47808083,
        47808113,
        47809798,
        47808079,
        47808563,
        47812326,
        47808459,
        47807951,
        47810584,
        47809525,
        47807660,
        47810836,
        47811929,
        47812700,
        47810067,
        47809851,
        47808727,
        47813132,
        47812716,
        47808733,
        47807949,
        47808720,
        47808159,
        47809883,
        47807663,
        47808442,
        47807422,
        47810120,
        47808143,
        47807965,
        47809758,
        47808362,
        47808827,
        47808508,
        47809054,
        47809825,
        47808374,
        47810477,
        47807942,
        47808286,
        47809071,
        47810487,
        47807673,
        47809822,
        47809063,
        47809043,
        47809011,
        47809005,
        47807738,
        47810042,
        47807696,
        47813096,
        47810443,
        47810192,
        47808285,
        47809810,
        47811602,
        47808274,
        47812601,
        47807938,
        47809617,
        47807839,
        47807523
      ],
      "score": 584,
      "time": 1776439776,
      "title": "Measuring Claude 4.7's tokenizer costs",
      "type": "story",
      "url": "https://www.claudecodecamp.com/p/i-measured-claude-4-7-s-new-tokenizer-here-s-what-it-costs-you"
    },
    {
      "by": "cybermango",
      "descendants": 175,
      "id": 47808913,
      "kids": [
        47809790,
        47809377,
        47809667,
        47811048,
        47811920,
        47809358,
        47812519,
        47809256,
        47811122,
        47809919,
        47812386,
        47809217,
        47809826,
        47812468,
        47809630,
        47812817,
        47810655,
        47809835,
        47809391,
        47812814,
        47810689,
        47810268,
        47809367,
        47809267,
        47809506
      ],
      "score": 302,
      "time": 1776449821,
      "title": "All 12 moonwalkers had \"lunar hay fever\" from dust smelling like gunpowder (2018)",
      "type": "story",
      "url": "https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/The_toxic_side_of_the_Moon"
    },
    {
      "by": "evakhoury",
      "descendants": 185,
      "id": 47807583,
      "kids": [
        47811531,
        47813654,
        47811182,
        47812405,
        47811124,
        47810748,
        47811528,
        47810827,
        47811883,
        47811337,
        47811509,
        47812508,
        47811896,
        47811619,
        47811212,
        47811299,
        47811846,
        47811700,
        47811485,
        47811205,
        47811052,
        47811204,
        47811350,
        47813094,
        47811444,
        47811848,
        47810947,
        47810749,
        47811686,
        47811311,
        47810890
      ],
      "score": 178,
      "time": 1776442793,
      "title": "Spending 3 months coding by hand",
      "type": "story",
      "url": "https://miguelconner.substack.com/p/im-coding-by-hand"
    },
    {
      "by": "aw1621107",
      "descendants": 77,
      "id": 47810872,
      "kids": [
        47812309,
        47811261,
        47811514
      ],
      "score": 154,
      "time": 1776461900,
      "title": "A simplified model of Fil-C",
      "type": "story",
      "url": "https://www.corsix.org/content/simplified-model-of-fil-c"
    },
    {
      "by": "louiereederson",
      "descendants": 41,
      "id": 47778922,
      "kids": [
        47813353,
        47812415,
        47810923,
        47811985,
        47811696,
        47813412,
        47812156,
        47812286,
        47812826,
        47812742,
        47813594,
        47813492,
        47811711,
        47811684
      ],
      "score": 174,
      "time": 1776260878,
      "title": "Are the costs of AI agents also rising exponentially? (2025)",
      "type": "story",
      "url": "https://www.tobyord.com/writing/hourly-costs-for-ai-agents"
    },
    {
      "by": "ColinWright",
      "descendants": 274,
      "id": 47804965,
      "kids": [
        47805910,
        47806420,
        47812972,
        47805326,
        47806066,
        47811068,
        47807367,
        47805441,
        47808056,
        47807463,
        47810773,
        47809370,
        47805487,
        47806185,
        47805569,
        47805837,
        47812863,
        47805557,
        47808073,
        47806084,
        47811284,
        47807039,
        47805416,
        47812898,
        47811470,
        47805752,
        47806392,
        47808610,
        47812387,
        47811722,
        47808150,
        47808418,
        47807352,
        47808869,
        47810341,
        47806320,
        47806482,
        47807960,
        47811884,
        47809953,
        47807514,
        47808540,
        47812176,
        47806559,
        47807682,
        47808922,
        47805826,
        47805674,
        47806032,
        47810200,
        47806466,
        47809491,
        47805329,
        47806665,
        47806738,
        47809553,
        47808091,
        47811829,
        47806502,
        47811186,
        47807505,
        47807261,
        47805522,
        47808940,
        47806461,
        47812985,
        47809379,
        47806077,
        47812604,
        47806610,
        47811928,
        47813288,
        47805389
      ],
      "score": 695,
      "time": 1776427279,
      "title": "Isaac Asimov: The Last Question (1956)",
      "type": "story",
      "url": "https://hex.ooo/library/last_question.html"
    },
    {
      "by": "atomfinger",
      "descendants": 4,
      "id": 47756320,
      "kids": [
        47813637,
        47813547,
        47813456,
        47813632
      ],
      "score": 30,
      "time": 1776106195,
      "title": "Brunost: The Nynorsk Programming Language",
      "type": "story",
      "url": "https://lindbakk.com/blog/introducing-brunost"
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
      "reactions": 65,
      "comments": 16,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "The Developer Who Reviews Everything and Ships Nothing",
      "description": "You've seen this person. Maybe you've worked with them for years.  They leave 40 comments on your PR....",
      "url": "https://dev.to/adamthedeveloper/the-developer-who-reviews-everything-and-ships-nothing-1e28",
      "tags": "productivity, programming, career, learning",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "adamthedeveloper"
    },
    {
      "title": "I Stopped Taking AI Advice Seriously, and It Helped",
      "description": "I’ve been using AI for months now. Not casually — seriously. And I’ve started noticing something...",
      "url": "https://dev.to/jaideepparashar/i-stopped-taking-ai-advice-seriously-and-it-helped-4nfi",
      "tags": "ai, webdev, devops, career",
      "reactions": 10,
      "comments": 2,
      "reading_time": 2,
      "author": "jaideepparashar"
    },
    {
      "title": "From Blueprints to Battlegrounds: My Experience as a Cybersecurity Intern at Anonymous India",
      "description": "The jump from building tools in a home lab to working within a professional security framework is a...",
      "url": "https://dev.to/zerocool_2012/from-blueprints-to-battlegrounds-my-experience-as-a-cybersecurity-intern-at-anonymous-india-1jpb",
      "tags": "cybersecurity, internship, career, infosec",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "zerocool_2012"
    },
    {
      "title": "From Weekend Hackathon to AWS Global Finalist: Building an AI Tutor That Actually Works Offline",
      "description": "Six months ago, I was debugging a React component at 2 AM when my little sister called from our...",
      "url": "https://dev.to/zeshama/from-weekend-hackathon-to-aws-global-finalist-building-an-ai-tutor-that-actually-works-offline-3864",
      "tags": "ai, career, startup, motivation",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "zeshama"
    },
    {
      "title": "I Did 2 Months of Work for a 2-Week Price — Here’s What I learned",
      "description": "It started with a simple request.  “Can you build us a website Nothing fancy. Just a clean design,...",
      "url": "https://dev.to/kenzicode/i-did-2-months-of-work-for-a-2-week-price-heres-what-i-learned-45gf",
      "tags": "freelance, webdev, career, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "kenzicode"
    },
    {
      "title": "The One Mindset Shift That Separates People Who Use AI From People Who Get Left Behind",
      "description": "Most people accept friction in their lives without questioning it. The ones thriving in the AI era don't have better tools. They have better questions.",
      "url": "https://dev.to/serhiip/the-one-mindset-shift-that-separates-people-who-use-ai-from-people-who-get-left-behind-31ao",
      "tags": "ai, productivity, career, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "serhiip"
    },
    {
      "title": "From AZ-204 to AI-200: What Changed and Why It Matters",
      "description": "Comparing the AZ-204 skill outline against the AI-200 course structure, roughly 60% of AZ-204 carries...",
      "url": "https://dev.to/martin_oehlert/from-az-204-to-ai-200-what-changed-and-why-it-matters-5glh",
      "tags": "azure, certification, career, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "martin_oehlert"
    },
    {
      "title": "Will AI take your job? Developers on the future of IT 🔥",
      "description": "How do you see AI, the job market, and the future of the industry? 🔥  I launched a short survey for...",
      "url": "https://dev.to/bykowski/how-do-you-see-ai-the-job-market-and-the-future-of-the-industry-survey-for-devs-especially-41no",
      "tags": "career, ai, survey, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "bykowski"
    },
    {
      "title": "CCA-001 study guide: how to pass the Claude Certified Architect exam in 2026",
      "description": "The Claude Certified Architect Foundations (CCA-001) is Anthropic's first official technical...",
      "url": "https://dev.to/ajbuilds/cca-001-study-guide-how-to-pass-the-claude-certified-architect-exam-in-2026-h7p",
      "tags": "ai, aws, career, cloud",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "ajbuilds"
    }
  ]
}
```

