# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-16 06:54:54 UTC

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
      "forks": 1720,
      "added_stars": 10864,
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
      "forks": 2860,
      "added_stars": 4263,
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
      "forks": 4733,
      "added_stars": 10779,
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
      "author": "YishenTu",
      "repo": "claudian",
      "avatar": "https://github.com/YishenTu.png",
      "repo_link": "https://github.com/YishenTu/claudian",
      "desc": "An Obsidian plugin that embeds Claude Code as an AI collaborator in your vault",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 487,
      "added_stars": 1709,
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
      "author": "jamiepine",
      "repo": "voicebox",
      "avatar": "https://github.com/jamiepine.png",
      "repo_link": "https://github.com/jamiepine/voicebox",
      "desc": "The open-source voice synthesis studio",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2150,
      "added_stars": 3391,
      "builtBy": [
        {
          "username": "jamiepine",
          "href": "https://github.com/jamiepine",
          "avatar": "https://avatars.githubusercontent.com/u/32987599"
        },
        {
          "username": "tomasmach",
          "href": "https://github.com/tomasmach",
          "avatar": "https://avatars.githubusercontent.com/u/52257177"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "selop",
          "href": "https://github.com/selop",
          "avatar": "https://avatars.githubusercontent.com/u/5173254"
        },
        {
          "username": "pandego",
          "href": "https://github.com/pandego",
          "avatar": "https://avatars.githubusercontent.com/u/7780875"
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
      "forks": 231,
      "added_stars": 174,
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
      "author": "diegosouzapw",
      "repo": "OmniRoute",
      "avatar": "https://github.com/diegosouzapw.png",
      "repo_link": "https://github.com/diegosouzapw/OmniRoute",
      "desc": "OmniRoute is an AI gateway for multi-provider LLMs: an OpenAI-compatible endpoint with smart routing, load balancing, retries, and fallbacks. Add policies, rate limits, caching, and observability for reliable, cost-aware inference.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 458,
      "added_stars": 881,
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
          "username": "zen0bit",
          "href": "https://github.com/zen0bit",
          "avatar": "https://avatars.githubusercontent.com/u/6384793"
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
      "forks": 2345,
      "added_stars": 912,
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
      "author": "RhysSullivan",
      "repo": "executor",
      "avatar": "https://github.com/RhysSullivan.png",
      "repo_link": "https://github.com/RhysSullivan/executor",
      "desc": "The missing integration layer for AI agents. Let them call any OpenAPI / MCP / GraphQL / custom js functions in secure environment.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 62,
      "added_stars": 213,
      "builtBy": [
        {
          "username": "RhysSullivan",
          "href": "https://github.com/RhysSullivan",
          "avatar": "https://avatars.githubusercontent.com/u/39114868"
        },
        {
          "username": "aryasaatvik",
          "href": "https://github.com/aryasaatvik",
          "avatar": "https://avatars.githubusercontent.com/u/5666379"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mrzmyr",
          "href": "https://github.com/mrzmyr",
          "avatar": "https://avatars.githubusercontent.com/u/746429"
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
      "forks": 646,
      "added_stars": 328,
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
      "author": "rowboatlabs",
      "repo": "rowboat",
      "avatar": "https://github.com/rowboatlabs.png",
      "repo_link": "https://github.com/rowboatlabs/rowboat",
      "desc": "Open-source AI coworker, with memory",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1181,
      "added_stars": 2569,
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
      "author": "tech-leads-club",
      "repo": "agent-skills",
      "avatar": "https://github.com/tech-leads-club.png",
      "repo_link": "https://github.com/tech-leads-club/agent-skills",
      "desc": "The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 245,
      "added_stars": 110,
      "builtBy": [
        {
          "username": "felipfr",
          "href": "https://github.com/felipfr",
          "avatar": "https://avatars.githubusercontent.com/u/99354371"
        },
        {
          "username": "edmarpaulino",
          "href": "https://github.com/edmarpaulino",
          "avatar": "https://avatars.githubusercontent.com/u/76621784"
        },
        {
          "username": "waldemarnt",
          "href": "https://github.com/waldemarnt",
          "avatar": "https://avatars.githubusercontent.com/u/5835706"
        },
        {
          "username": "globsecure",
          "href": "https://github.com/globsecure",
          "avatar": "https://avatars.githubusercontent.com/u/1958192"
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
      "forks": 1687,
      "added_stars": 2315,
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
      "author": "QwenLM",
      "repo": "qwen-code",
      "avatar": "https://github.com/QwenLM.png",
      "repo_link": "https://github.com/QwenLM/qwen-code",
      "desc": "An open-source AI agent that lives in your terminal.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2195,
      "added_stars": 1231,
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
      "forks": 2173,
      "added_stars": 7298,
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
      "forks": 5558,
      "added_stars": 6293,
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
      "author": "mudler",
      "repo": "LocalAI",
      "avatar": "https://github.com/mudler.png",
      "repo_link": "https://github.com/mudler/LocalAI",
      "desc": "LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3956,
      "added_stars": 1943,
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
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 437,
      "added_stars": 899,
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
      "forks": 1990,
      "added_stars": 5536,
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
      "forks": 3845,
      "added_stars": 1391,
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
      "forks": 3004,
      "added_stars": 1255,
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
      "added_stars": 1486,
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
      "author": "guohuiyuan",
      "repo": "go-music-dl",
      "avatar": "https://github.com/guohuiyuan.png",
      "repo_link": "https://github.com/guohuiyuan/go-music-dl",
      "desc": "一个基于 Go 语言的全网音乐搜索与下载工具。支持 CLI 命令行与 Web 服务双模式，内置网易云、QQ、酷狗、Bilibili、汽水音乐等 10+ 个主流平台，支持多源并发搜索与无损音质解析。music-dl交流群：1074285005",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 183,
      "added_stars": 1754,
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
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 344,
      "added_stars": 913,
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
      "author": "googleapis",
      "repo": "mcp-toolbox",
      "avatar": "https://github.com/googleapis.png",
      "repo_link": "https://github.com/googleapis/mcp-toolbox",
      "desc": "MCP Toolbox for Databases is an open source MCP server for databases.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1471,
      "added_stars": 1219,
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
      "author": "XTLS",
      "repo": "RealiTLScanner",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/RealiTLScanner",
      "desc": "A TLS server scanner for Reality",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 248,
      "added_stars": 369,
      "builtBy": [
        {
          "username": "juzeon",
          "href": "https://github.com/juzeon",
          "avatar": "https://avatars.githubusercontent.com/u/12206799"
        },
        {
          "username": "yuhan6665",
          "href": "https://github.com/yuhan6665",
          "avatar": "https://avatars.githubusercontent.com/u/1588741"
        },
        {
          "username": "ghggn",
          "href": "https://github.com/ghggn",
          "avatar": "https://avatars.githubusercontent.com/u/129544540"
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
      "forks": 2942,
      "added_stars": 2348,
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
      "forks": 2863,
      "added_stars": 390,
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
      "added_stars": 694,
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
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5180,
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
      "author": "goharbor",
      "repo": "harbor",
      "avatar": "https://github.com/goharbor.png",
      "repo_link": "https://github.com/goharbor/harbor",
      "desc": "An open source trusted cloud native registry project that stores, signs, and scans content.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5199,
      "added_stars": 572,
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
      "forks": 12509,
      "added_stars": 81412,
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
      "forks": 3184,
      "added_stars": 14848,
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
      "forks": 7981,
      "added_stars": 31460,
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
      "forks": 1812,
      "added_stars": 18023,
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
      "forks": 9176,
      "added_stars": 18792,
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
      "repo": "markitdown",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/markitdown",
      "desc": "Python tool for converting files and office documents to Markdown.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6990,
      "added_stars": 18909,
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
      "forks": 3385,
      "added_stars": 7042,
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
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4624,
      "added_stars": 16228,
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
          "username": "jsoref",
          "href": "https://github.com/jsoref",
          "avatar": "https://avatars.githubusercontent.com/u/2119212"
        },
        {
          "username": "pengzhiliang",
          "href": "https://github.com/pengzhiliang",
          "avatar": "https://avatars.githubusercontent.com/u/26346329"
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
      "forks": 3618,
      "added_stars": 9443,
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
      "author": "langchain-ai",
      "repo": "open-swe",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/open-swe",
      "desc": "An Open-Source Asynchronous Coding Agent",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1072,
      "added_stars": 4338,
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
      "author": "hacksider",
      "repo": "Deep-Live-Cam",
      "avatar": "https://github.com/hacksider.png",
      "repo_link": "https://github.com/hacksider/Deep-Live-Cam",
      "desc": "real time face swap and one-click video deepfake with only a single image",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13189,
      "added_stars": 11079,
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "\"DeepTutor: Agent-Native Personalized Learning Assistant\"",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2440,
      "added_stars": 7765,
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
      "author": "SakanaAI",
      "repo": "AI-Scientist-v2",
      "avatar": "https://github.com/SakanaAI.png",
      "repo_link": "https://github.com/SakanaAI/AI-Scientist-v2",
      "desc": "The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 769,
      "added_stars": 3284,
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
      "author": "OpenBMB",
      "repo": "VoxCPM",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/VoxCPM",
      "desc": "VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and True-to-Life Cloning",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1604,
      "added_stars": 7274,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1711,
      "added_stars": 7733,
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
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8384,
      "added_stars": 29626,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "232+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1457,
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
      "forks": 3202,
      "added_stars": 10747,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Unsloth Studio is a web UI for training and running open models like Gemma 4, Qwen3.5, DeepSeek, gpt-oss locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5342,
      "added_stars": 7890,
      "builtBy": [
        {
          "username": "danielhanchen",
          "href": "https://github.com/danielhanchen",
          "avatar": "https://avatars.githubusercontent.com/u/23090290"
        },
        {
          "username": "rolandtannous",
          "href": "https://github.com/rolandtannous",
          "avatar": "https://avatars.githubusercontent.com/u/115670425"
        },
        {
          "username": "shimmyshimmer",
          "href": "https://github.com/shimmyshimmer",
          "avatar": "https://avatars.githubusercontent.com/u/107991372"
        },
        {
          "username": "Datta0",
          "href": "https://github.com/Datta0",
          "avatar": "https://avatars.githubusercontent.com/u/39181234"
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
      "upvotes": "1",
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
      "title": "How I Built an Autonomous Dataset Generator with CrewAI + Ollama (72-hour run, 1,065 entries)",
      "description": "Background   I needed high-quality instruction datasets for fine-tuning local LLMs, but...",
      "url": "https://dev.to/robopilingui/how-i-built-an-autonomous-dataset-generator-with-crewai-ollama-72-hour-run-1065-entries-2280",
      "tags": "ai, automation, llm, machinelearning",
      "reactions": 3,
      "comments": 0,
      "reading_time": 8,
      "author": "robopilingui"
    },
    {
      "title": "Lost in the AI Hype, I Started Small",
      "description": "And it helped me get back into tech without drowning    TL;DR at the end     Coming back to...",
      "url": "https://dev.to/aws/lost-in-the-ai-hype-i-started-small-2a72",
      "tags": "ai, beginners, productivity, aws",
      "reactions": 22,
      "comments": 5,
      "reading_time": 7,
      "author": "rohini_gaonkar"
    },
    {
      "title": "Building with the Google Cloud Run MCP Server for Multi-Agent A2A Deployment",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Multi-Agent...",
      "url": "https://dev.to/gde/building-with-the-google-cloud-run-mcp-server-for-multi-agent-a2a-deployment-fop",
      "tags": "mcpserver, adk, a2aprotocol, googlecloudrun",
      "reactions": 3,
      "comments": 0,
      "reading_time": 13,
      "author": "xbill"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-5e38",
      "tags": "top7, discuss",
      "reactions": 42,
      "comments": 12,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Multi-Agent A2A with the Agent Development Kit(ADK), Azure AKS, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Multi-Agent...",
      "url": "https://dev.to/gde/multi-agent-a2a-with-the-agent-development-kitadk-azure-aks-and-gemini-cli-231o",
      "tags": "ak, googleadk, gemini, a2a",
      "reactions": 3,
      "comments": 0,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "Local AI Will Save Us All (The Math Says So, Trust Me)",
      "description": "Every few weeks a take goes viral in tech circles making the case for ditching cloud AI and running...",
      "url": "https://dev.to/sebs/local-ai-will-save-us-all-the-math-says-so-trust-me-4m22",
      "tags": "ai, mba, operations",
      "reactions": 8,
      "comments": 1,
      "reading_time": 3,
      "author": "sebs"
    },
    {
      "title": "How to prompt Gemini 3.1's new text to speech model",
      "description": "Gemini 3.1 Flash text to speech (TTS) is a new model that you can direct to get the precise audio...",
      "url": "https://dev.to/googleai/how-to-prompt-gemini-31s-new-text-to-speech-model-24bb",
      "tags": "ai, gemini, promptengineering, tutorial",
      "reactions": 28,
      "comments": 0,
      "reading_time": 7,
      "author": "fofr"
    },
    {
      "title": "How I'm using ASTs and Gemini to solve the \"Codebase Onboarding\" problem 🧠",
      "description": "Hi everyone! 👋  I’m Tara, a Senior Software Engineer and Consultant. Over the years, I've jumped...",
      "url": "https://dev.to/tworrell/how-im-using-asts-and-gemini-to-solve-the-codebase-onboarding-problem-bca",
      "tags": "ai, gemini, productivity, showdev",
      "reactions": 5,
      "comments": 0,
      "reading_time": 3,
      "author": "tworrell"
    },
    {
      "title": "Steer GitHub Copilot CLI Sessions Remotely from Any Device",
      "description": "Start a Copilot CLI session on your workstation, then monitor and steer it from the browser or your phone.",
      "url": "https://dev.to/pwd9000/steer-github-copilot-cli-sessions-remotely-from-any-device-3mee",
      "tags": "githubcopilot, ai, tutorial, devops",
      "reactions": 6,
      "comments": 1,
      "reading_time": 9,
      "author": "pwd9000"
    },
    {
      "title": "How I'm using ASTs and Gemini to solve the \"Codebase Onboarding\" problem 🧠",
      "description": "Hi everyone! 👋  I’m Tara, a Senior Software Engineer and Consultant. Over the years, I've jumped...",
      "url": "https://dev.to/tworrell/how-im-using-asts-and-gemini-to-solve-the-codebase-onboarding-problem-1la9",
      "tags": "ai, productivity, webdev, showdev",
      "reactions": 11,
      "comments": 0,
      "reading_time": 3,
      "author": "tworrell"
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
      "title": "Simdutf Can Now Be Used Without libc++ or libc++abi",
      "url": "https://mitchellh.com/writing/simdutf-no-libcxx",
      "score": 1,
      "comments": 0,
      "tags": [
        "c++"
      ],
      "id": "aaf2z6"
    },
    {
      "title": "Mathematics in the Library of Babel",
      "url": "https://www.daniellitt.com/blog/2026/2/20/mathematics-in-the-library-of-babel",
      "score": 1,
      "comments": 0,
      "tags": [
        "math",
        "vibecoding"
      ],
      "id": "5wgwbz"
    },
    {
      "title": "Zero-Copy Pages in Rust: Or How I Learned To Stop Worrying And Love Lifetimes",
      "url": "https://redixhumayun.github.io/databases/2026/04/14/zero-copy-pages-in-rust.html",
      "score": 2,
      "comments": 0,
      "tags": [
        "databases",
        "linux",
        "rust"
      ],
      "id": "57picr"
    },
    {
      "title": "Internet-Draft Internet Protocol Version 8 (IPv8)",
      "url": "https://datatracker.ietf.org/doc/draft-thain-ipv8/00/",
      "score": 2,
      "comments": 5,
      "tags": [
        "networking"
      ],
      "id": "y8j7by"
    },
    {
      "title": "C++26: Structured bindings in conditions",
      "url": "https://www.sandordargo.com/blog/2026/04/15/cpp26-structured-bindings-condition",
      "score": 3,
      "comments": 0,
      "tags": [
        "c++"
      ],
      "id": "qoexc7"
    },
    {
      "title": "Arguing With Agents",
      "url": "https://blowmage.com/2026/04/14/arguing-with-agents/",
      "score": 2,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "gpjf8h"
    },
    {
      "title": "Cybersecurity Looks Like Proof of Work Now",
      "url": "https://www.dbreunig.com/2026/04/14/cybersecurity-is-proof-of-work-now.html",
      "score": 5,
      "comments": 3,
      "tags": [
        "security",
        "vibecoding"
      ],
      "id": "dzlbeb"
    },
    {
      "title": "Multi-Agent gVisor Isolation",
      "url": "https://gvisor.dev/blog/2026/04/15/magi-multi-agent-gvisor-isolation/",
      "score": 1,
      "comments": 0,
      "tags": [
        "linux",
        "security",
        "virtualization"
      ],
      "id": "z9ccd2"
    },
    {
      "title": "Eternal November - the new influx of users, and why it's way better than the last one",
      "url": "https://sfconservancy.org/blog/2026/apr/15/eternal-november-generative-ai-llm/",
      "score": 1,
      "comments": 0,
      "tags": [
        "culture",
        "programming",
        "vibecoding"
      ],
      "id": "zmilsd"
    },
    {
      "title": "Bad Apple!! but it's running on TIS-100",
      "url": "https://www.youtube.com/watch?v=N3JwU-Kvqpo",
      "score": 2,
      "comments": 0,
      "tags": [
        "games",
        "video"
      ],
      "id": "4hdevm"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "twapi",
      "descendants": 72,
      "id": 47788542,
      "kids": [
        47789171,
        47788769,
        47788762,
        47788813,
        47788852,
        47789502,
        47789329,
        47789376,
        47788781,
        47789004,
        47788841,
        47788914,
        47789257,
        47788829,
        47789220,
        47789260,
        47789213,
        47788771,
        47788776,
        47789406,
        47788738,
        47788932,
        47788747,
        47789278
      ],
      "score": 132,
      "time": 1776312399,
      "title": "Darkbloom – Private inference on idle Macs",
      "type": "story",
      "url": "https://darkbloom.dev"
    },
    {
      "by": "pabs3",
      "descendants": 40,
      "id": 47788424,
      "kids": [
        47789272,
        47788998,
        47789048,
        47788921,
        47788501,
        47788981
      ],
      "score": 89,
      "time": 1776311078,
      "title": "FSF trying to contact Google about spammer sending 10k+ mails from Gmail account",
      "type": "story",
      "url": "https://daedal.io/@thomzane/116410863009847575"
    },
    {
      "by": "the-mitr",
      "descendants": 37,
      "id": 47788845,
      "kids": [
        47789550,
        47789181,
        47789194,
        47789382,
        47789303,
        47789294,
        47789144,
        47789270,
        47789209,
        47789304,
        47789496,
        47789442,
        47789484,
        47789170,
        47789195,
        47789192,
        47789160
      ],
      "score": 39,
      "time": 1776315944,
      "title": "Sal Khan's AI revolution hasn't happened yet",
      "type": "story",
      "url": "https://www.chalkbeat.org/2026/04/09/sal-khan-reflects-on-ai-in-schools-and-khanmigo/"
    },
    {
      "by": "airhangerf15",
      "descendants": 9,
      "id": 47788473,
      "kids": [
        47789377,
        47789279,
        47789392,
        47788971
      ],
      "score": 53,
      "time": 1776311661,
      "title": "RedSun: System user access on Win 11/10 and Server with the April 2026 Update",
      "type": "story",
      "url": "https://github.com/Nightmare-Eclipse/RedSun"
    },
    {
      "by": "Zetaphor",
      "descendants": 22,
      "id": 47788385,
      "kids": [
        47789485,
        47789458,
        47789364,
        47788835,
        47789429,
        47789481,
        47788389,
        47789393,
        47789322,
        47789319,
        47789350,
        47789339
      ],
      "score": 106,
      "time": 1776310511,
      "title": "Stop Using Ollama",
      "type": "story",
      "url": "https://sleepingrobots.com/dreams/stop-using-ollama/"
    },
    {
      "by": "jmarbach",
      "descendants": 5,
      "id": 47788818,
      "kids": [
        47789313,
        47789492,
        47789415,
        47789420,
        47789202
      ],
      "score": 22,
      "text": "Full disclosure - I formerly worked for Grafana Labs.<p>The size of this Grafana Mimir deployment would rank it in the top echelon of customers. The irony is that this may be a $0 revenue user for Grafana Labs.",
      "time": 1776315665,
      "title": "Moving a large-scale metrics pipeline from StatsD to OpenTelemetry / Prometheus",
      "type": "story",
      "url": "https://medium.com/airbnb-engineering/building-a-high-volume-metrics-pipeline-with-opentelemetry-and-vmagent-c714d6910b45"
    },
    {
      "by": "jsomers",
      "descendants": 20,
      "id": 47747770,
      "kids": [
        47788736,
        47789486,
        47788634,
        47788549,
        47789384,
        47789311,
        47788667,
        47788714,
        47788718,
        47788632,
        47789189,
        47788456,
        47788671
      ],
      "score": 109,
      "time": 1776056268,
      "title": "The paper computer",
      "type": "story",
      "url": "https://jsomers.net/blog/the-paper-computer"
    },
    {
      "by": "pwim",
      "descendants": 3,
      "id": 47788633,
      "kids": [
        47789471,
        47789432,
        47788858,
        47789465
      ],
      "score": 25,
      "time": 1776313376,
      "title": "A Look into NaviDial, Japan's Legacy Phone Service",
      "type": "story",
      "url": "https://www.tokyodev.com/articles/a-look-into-navidial-japan-s-legacy-phone-service"
    },
    {
      "by": "dbreunig",
      "descendants": 125,
      "id": 47769089,
      "kids": [
        47785275,
        47785461,
        47785203,
        47785458,
        47787695,
        47786696,
        47785247,
        47788333,
        47785264,
        47788933,
        47788226,
        47785395,
        47785349,
        47787662,
        47785423,
        47785452,
        47787166,
        47787187,
        47788249,
        47789368,
        47787246,
        47788417,
        47786967,
        47789094,
        47785568,
        47786485,
        47785731,
        47785386,
        47786956,
        47786473,
        47785219,
        47788312,
        47785258,
        47785526,
        47786989,
        47786375,
        47786383,
        47787145,
        47786126,
        47785987,
        47785846,
        47785783,
        47786805,
        47785325,
        47788486,
        47786241,
        47785725,
        47785909,
        47788451,
        47785505,
        47786062,
        47788248,
        47786979,
        47786278,
        47787045,
        47786405,
        47788423,
        47787619,
        47785732
      ],
      "score": 360,
      "time": 1776190094,
      "title": "Cybersecurity looks like proof of work now",
      "type": "story",
      "url": "https://www.dbreunig.com/2026/04/14/cybersecurity-is-proof-of-work-now.html"
    },
    {
      "by": "Aaronmacaron",
      "descendants": 4,
      "id": 47777894,
      "kids": [
        47789519,
        47789527,
        47789395,
        47780722
      ],
      "score": 19,
      "time": 1776254389,
      "title": "IPv6 traffic crosses the 50% mark",
      "type": "story",
      "url": "https://www.google.com/intl/en/ipv6/statistics.html?yzh=28197"
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
      "title": "Product Engineering's Job: Deal with Ambiguity",
      "description": "In my most recent roles as a frontend engineer at a $500M DTC meat subscription eCommerce platform...",
      "url": "https://dev.to/tuzmusic/product-engineerings-job-deal-with-ambiguity-53ae",
      "tags": "career, frontend, product, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "tuzmusic"
    },
    {
      "title": "Why 80% of Programmers Are Unhappy (It's Not the Money)",
      "description": "The 2024 Stack Overflow survey found 80% of developers aren't happy at work. Programmer job satisfaction has a deeper problem than salary - here's what it is.",
      "url": "https://dev.to/visesh/why-80-of-programmers-are-unhappy-its-not-the-money-jb3",
      "tags": "career, webdev, programming, mentalhealth",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "visesh"
    },
    {
      "title": "Why 80% of Programmers Are Unhappy (It's Not the Money)",
      "description": "webdev #career #programming #mentalhealth #developerlife            Why 80% of Programmers...",
      "url": "https://dev.to/visesh/why-80-of-programmers-are-unhappy-its-not-the-money-23mg",
      "tags": "webdev, career, programming, mentalhealth",
      "reactions": 0,
      "comments": 0,
      "reading_time": 10,
      "author": "visesh"
    },
    {
      "title": "Do this as a developer to get promoted (and earn way more than you expect)",
      "description": "Not a new framework. not AI. not working longer hours. just learning how promotions actually work...",
      "url": "https://dev.to/dev_tips/do-this-as-a-developer-to-get-promoted-and-earn-way-more-than-you-expect-1fd",
      "tags": "webdev, programming, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 26,
      "author": "dev_tips"
    },
    {
      "title": "The $20/Month Solo Creator Stack: Building and Selling Technical Ebooks with Python and AI",
      "description": "A concrete breakdown of the tools, costs, financial model, and time investment behind publishing technical ebooks as a solo engineer — with Python doing most of the heavy lifting.",
      "url": "https://dev.to/german_yamil_e021eef8710d/the-20month-solo-creator-stack-building-and-selling-technical-ebooks-with-python-and-ai-44f0",
      "tags": "python, productivity, selfpublishing, career",
      "reactions": 1,
      "comments": 1,
      "reading_time": 4,
      "author": "german_yamil_e021eef8710d"
    },
    {
      "title": "Why I Stopped Writing (And What Happened Since)",
      "description": "Twenty-eight posts in nine months, then three and a half years of silence. The work that ate the blog was the foundation for everything I'm building now.",
      "url": "https://dev.to/todd_linnertz_871a076f68e/why-i-stopped-writing-and-what-happened-since-33of",
      "tags": "devops, platformengineering, ai, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "todd_linnertz_871a076f68e"
    },
    {
      "title": "From Prompt Engineer to Agent Engineer: The 7 Skills You Need to Build AI Agents",
      "description": "Discover the key skills you need to build AI agents that thrive in real-world environments, moving...",
      "url": "https://dev.to/manishmshiva/from-prompt-engineer-to-agent-engineer-the-7-skills-you-need-to-build-ai-agents-33o7",
      "tags": "agents, ai, career, promptengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "manishmshiva"
    },
    {
      "title": "I Automated 90% of Manual Workflows: A Backend Engineer's Playbook for Business Impact",
      "description": "In 2023, I was tasked with a seemingly impossible goal: automate 90% of our billing department's...",
      "url": "https://dev.to/gerardo_medina_0126b53724/i-automated-90-of-manual-workflows-a-backend-engineers-playbook-for-business-impact-62c",
      "tags": "automation, backend, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "gerardo_medina_0126b53724"
    },
    {
      "title": "AI Slop vs The New Engineering",
      "description": "The world is divided. Don’t ask me to give exact percentage differentials, but a load of people love...",
      "url": "https://dev.to/thefragiledev/ai-slop-vs-the-new-engineering-5c59",
      "tags": "ai, webdev, productivity, career",
      "reactions": 4,
      "comments": 0,
      "reading_time": 4,
      "author": "thefragiledev"
    },
    {
      "title": "Easy to follow Architecture Framework",
      "description": "Context   When I first opened TOGAF, I got stuck on a basic problem — there's no clear...",
      "url": "https://dev.to/aws-builders/easy-to-follow-architecture-framework-5ckb",
      "tags": "architecture, systemdesign, career, productivity",
      "reactions": 2,
      "comments": 0,
      "reading_time": 3,
      "author": "annpastushko"
    }
  ]
}
```

