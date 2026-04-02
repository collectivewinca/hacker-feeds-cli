# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-02 06:42:45 UTC

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
      "author": "Yeachan-Heo",
      "repo": "oh-my-claudecode",
      "avatar": "https://github.com/Yeachan-Heo.png",
      "repo_link": "https://github.com/Yeachan-Heo/oh-my-claudecode",
      "desc": "Teams-first Multi-agent orchestration for Claude Code",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1831,
      "added_stars": 8991,
      "builtBy": [
        {
          "username": "Yeachan-Heo",
          "href": "https://github.com/Yeachan-Heo",
          "avatar": "https://avatars.githubusercontent.com/u/54757707"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "riftzen-bit",
          "href": "https://github.com/riftzen-bit",
          "avatar": "https://avatars.githubusercontent.com/u/139470135"
        },
        {
          "username": "devseunggwan",
          "href": "https://github.com/devseunggwan",
          "avatar": "https://avatars.githubusercontent.com/u/60123681"
        },
        {
          "username": "shaun0927",
          "href": "https://github.com/shaun0927",
          "avatar": "https://avatars.githubusercontent.com/u/70629228"
        }
      ]
    },
    {
      "author": "pascalorg",
      "repo": "editor",
      "avatar": "https://github.com/pascalorg.png",
      "repo_link": "https://github.com/pascalorg/editor",
      "desc": "Create and share 3D architectural projects.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1175,
      "added_stars": 2507,
      "builtBy": [
        {
          "username": "wass08",
          "href": "https://github.com/wass08",
          "avatar": "https://avatars.githubusercontent.com/u/6551176"
        },
        {
          "username": "Aymericr",
          "href": "https://github.com/Aymericr",
          "avatar": "https://avatars.githubusercontent.com/u/4444492"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "anton-pascal",
          "href": "https://github.com/anton-pascal",
          "avatar": "https://avatars.githubusercontent.com/u/257628774"
        },
        {
          "username": "open-pascal",
          "href": "https://github.com/open-pascal",
          "avatar": "https://avatars.githubusercontent.com/u/271033448"
        }
      ]
    },
    {
      "author": "twentyhq",
      "repo": "twenty",
      "avatar": "https://github.com/twentyhq.png",
      "repo_link": "https://github.com/twentyhq/twenty",
      "desc": "Building a modern alternative to Salesforce, powered by the community.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5774,
      "added_stars": 2592,
      "builtBy": [
        {
          "username": "charlesBochet",
          "href": "https://github.com/charlesBochet",
          "avatar": "https://avatars.githubusercontent.com/u/12035771"
        },
        {
          "username": "FelixMalfait",
          "href": "https://github.com/FelixMalfait",
          "avatar": "https://avatars.githubusercontent.com/u/6399865"
        },
        {
          "username": "lucasbordeau",
          "href": "https://github.com/lucasbordeau",
          "avatar": "https://avatars.githubusercontent.com/u/26528466"
        },
        {
          "username": "Weiko",
          "href": "https://github.com/Weiko",
          "avatar": "https://avatars.githubusercontent.com/u/1834158"
        }
      ]
    },
    {
      "author": "virattt",
      "repo": "dexter",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/dexter",
      "desc": "An autonomous agent for deep financial research",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2487,
      "added_stars": 2265,
      "builtBy": [
        {
          "username": "virattt",
          "href": "https://github.com/virattt",
          "avatar": "https://avatars.githubusercontent.com/u/901795"
        },
        {
          "username": "MkDev11",
          "href": "https://github.com/MkDev11",
          "avatar": "https://avatars.githubusercontent.com/u/94194147"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "gupta-8",
          "href": "https://github.com/gupta-8",
          "avatar": "https://avatars.githubusercontent.com/u/215169640"
        },
        {
          "username": "sjhddh",
          "href": "https://github.com/sjhddh",
          "avatar": "https://avatars.githubusercontent.com/u/5778228"
        }
      ]
    },
    {
      "author": "vas3k",
      "repo": "TaxHacker",
      "avatar": "https://github.com/vas3k.png",
      "repo_link": "https://github.com/vas3k/TaxHacker",
      "desc": "Self-hosted AI accounting app. LLM analyzer for receipts, invoices, transactions with custom prompts and categories",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 630,
      "added_stars": 1591,
      "builtBy": [
        {
          "username": "vas3k",
          "href": "https://github.com/vas3k",
          "avatar": "https://avatars.githubusercontent.com/u/176344"
        },
        {
          "username": "H1D",
          "href": "https://github.com/H1D",
          "avatar": "https://avatars.githubusercontent.com/u/697625"
        },
        {
          "username": "danfimov",
          "href": "https://github.com/danfimov",
          "avatar": "https://avatars.githubusercontent.com/u/32870032"
        },
        {
          "username": "mmplisskin",
          "href": "https://github.com/mmplisskin",
          "avatar": "https://avatars.githubusercontent.com/u/7832832"
        }
      ]
    },
    {
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need - A nano claude code–like 「agent harness」, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7410,
      "added_stars": 7776,
      "builtBy": [
        {
          "username": "CrazyBoyM",
          "href": "https://github.com/CrazyBoyM",
          "avatar": "https://avatars.githubusercontent.com/u/35400185"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "bansalkanav",
          "href": "https://github.com/bansalkanav",
          "avatar": "https://avatars.githubusercontent.com/u/13186335"
        },
        {
          "username": "chablino",
          "href": "https://github.com/chablino",
          "avatar": "https://avatars.githubusercontent.com/u/31083461"
        },
        {
          "username": "Octane0411",
          "href": "https://github.com/Octane0411",
          "avatar": "https://avatars.githubusercontent.com/u/88922959"
        }
      ]
    },
    {
      "author": "supermemoryai",
      "repo": "supermemory",
      "avatar": "https://github.com/supermemoryai.png",
      "repo_link": "https://github.com/supermemoryai/supermemory",
      "desc": "Memory engine and app that is extremely fast, scalable. The Memory API for the AI era.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1901,
      "added_stars": 1798,
      "builtBy": [
        {
          "username": "Dhravya",
          "href": "https://github.com/Dhravya",
          "avatar": "https://avatars.githubusercontent.com/u/63950637"
        },
        {
          "username": "MaheshtheDev",
          "href": "https://github.com/MaheshtheDev",
          "avatar": "https://avatars.githubusercontent.com/u/38828053"
        },
        {
          "username": "yxshv",
          "href": "https://github.com/yxshv",
          "avatar": "https://avatars.githubusercontent.com/u/93475253"
        },
        {
          "username": "CodeTorso",
          "href": "https://github.com/CodeTorso",
          "avatar": "https://avatars.githubusercontent.com/u/129188028"
        },
        {
          "username": "Kinfe123",
          "href": "https://github.com/Kinfe123",
          "avatar": "https://avatars.githubusercontent.com/u/65047246"
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
      "forks": 3349,
      "added_stars": 3938,
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
          "username": "rodboev",
          "href": "https://github.com/rodboev",
          "avatar": "https://avatars.githubusercontent.com/u/106971"
        }
      ]
    },
    {
      "author": "7836246",
      "repo": "cursor2api",
      "avatar": "https://github.com/7836246.png",
      "repo_link": "https://github.com/7836246/cursor2api",
      "desc": "将 Cursor Web Docs 免费 API 转换为 OpenAI/Anthropic 兼容格式的代理服务。提供 Claude Code工具及图片支持。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 489,
      "added_stars": 422,
      "builtBy": [
        {
          "username": "7836246",
          "href": "https://github.com/7836246",
          "avatar": "https://avatars.githubusercontent.com/u/65436665"
        },
        {
          "username": "huangzt",
          "href": "https://github.com/huangzt",
          "avatar": "https://avatars.githubusercontent.com/u/4033637"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "majorcheng",
          "href": "https://github.com/majorcheng",
          "avatar": "https://avatars.githubusercontent.com/u/2588345"
        },
        {
          "username": "guoyongchang",
          "href": "https://github.com/guoyongchang",
          "avatar": "https://avatars.githubusercontent.com/u/10484506"
        }
      ]
    },
    {
      "author": "EveryInc",
      "repo": "compound-engineering-plugin",
      "avatar": "https://github.com/EveryInc.png",
      "repo_link": "https://github.com/EveryInc/compound-engineering-plugin",
      "desc": "Office Compound Engineering plugin for Claude Code, Codex, and more",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 956,
      "added_stars": 1336,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "kieranklaassen",
          "href": "https://github.com/kieranklaassen",
          "avatar": "https://avatars.githubusercontent.com/u/209089"
        },
        {
          "username": "tmchow",
          "href": "https://github.com/tmchow",
          "avatar": "https://avatars.githubusercontent.com/u/517103"
        },
        {
          "username": "semantic-release-bot",
          "href": "https://github.com/semantic-release-bot",
          "avatar": "https://avatars.githubusercontent.com/u/32174276"
        }
      ]
    },
    {
      "author": "freeCodeCamp",
      "repo": "freeCodeCamp",
      "avatar": "https://github.com/freeCodeCamp.png",
      "repo_link": "https://github.com/freeCodeCamp/freeCodeCamp",
      "desc": "freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 43955,
      "added_stars": 1760,
      "builtBy": [
        {
          "username": "ojeytonwilliams",
          "href": "https://github.com/ojeytonwilliams",
          "avatar": "https://avatars.githubusercontent.com/u/15801806"
        },
        {
          "username": "raisedadead",
          "href": "https://github.com/raisedadead",
          "avatar": "https://avatars.githubusercontent.com/u/1884376"
        },
        {
          "username": "camperbot",
          "href": "https://github.com/camperbot",
          "avatar": "https://avatars.githubusercontent.com/u/13561988"
        },
        {
          "username": "renovate-bot",
          "href": "https://github.com/renovate-bot",
          "avatar": "https://avatars.githubusercontent.com/u/25180681"
        }
      ]
    },
    {
      "author": "siddharthvaddem",
      "repo": "openscreen",
      "avatar": "https://github.com/siddharthvaddem.png",
      "repo_link": "https://github.com/siddharthvaddem/openscreen",
      "desc": "Create stunning demos for free. Open-source, no subscriptions, no watermarks, and free for commercial use. An alternative to Screen Studio.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 963,
      "added_stars": 3613,
      "builtBy": [
        {
          "username": "siddharthvaddem",
          "href": "https://github.com/siddharthvaddem",
          "avatar": "https://avatars.githubusercontent.com/u/70214527"
        },
        {
          "username": "prayaslashkari",
          "href": "https://github.com/prayaslashkari",
          "avatar": "https://avatars.githubusercontent.com/u/25193916"
        },
        {
          "username": "marcusschiesser",
          "href": "https://github.com/marcusschiesser",
          "avatar": "https://avatars.githubusercontent.com/u/17126"
        },
        {
          "username": "FabLrc",
          "href": "https://github.com/FabLrc",
          "avatar": "https://avatars.githubusercontent.com/u/86679051"
        },
        {
          "username": "solnikhil",
          "href": "https://github.com/solnikhil",
          "avatar": "https://avatars.githubusercontent.com/u/183397187"
        }
      ]
    },
    {
      "author": "stan-smith",
      "repo": "FossFLOW",
      "avatar": "https://github.com/stan-smith.png",
      "repo_link": "https://github.com/stan-smith/FossFLOW",
      "desc": "Make beautiful isometric infrastructure diagrams",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1285,
      "added_stars": 278,
      "builtBy": [
        {
          "username": "markmanx",
          "href": "https://github.com/markmanx",
          "avatar": "https://avatars.githubusercontent.com/u/1769678"
        },
        {
          "username": "stan-smith",
          "href": "https://github.com/stan-smith",
          "avatar": "https://avatars.githubusercontent.com/u/37673863"
        },
        {
          "username": "semantic-release-bot",
          "href": "https://github.com/semantic-release-bot",
          "avatar": "https://avatars.githubusercontent.com/u/32174276"
        },
        {
          "username": "abhinav-1305",
          "href": "https://github.com/abhinav-1305",
          "avatar": "https://avatars.githubusercontent.com/u/113254225"
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
      "forks": 1537,
      "added_stars": 7269,
      "builtBy": [
        {
          "username": "Wei-Shaw",
          "href": "https://github.com/Wei-Shaw",
          "avatar": "https://avatars.githubusercontent.com/u/26101719"
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
          "username": "touwaeriol",
          "href": "https://github.com/touwaeriol",
          "avatar": "https://avatars.githubusercontent.com/u/52620633"
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
      "forks": 4811,
      "added_stars": 5713,
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
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 227,
      "added_stars": 2574,
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
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1871,
      "added_stars": 2907,
      "builtBy": [
        {
          "username": "xpzouying",
          "href": "https://github.com/xpzouying",
          "avatar": "https://avatars.githubusercontent.com/u/3946563"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tanxxjun321",
          "href": "https://github.com/tanxxjun321",
          "avatar": "https://avatars.githubusercontent.com/u/7806992"
        },
        {
          "username": "Angiin",
          "href": "https://github.com/Angiin",
          "avatar": "https://avatars.githubusercontent.com/u/17389304"
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
      "forks": 1757,
      "added_stars": 5331,
      "builtBy": [
        {
          "username": "asdek",
          "href": "https://github.com/asdek",
          "avatar": "https://avatars.githubusercontent.com/u/4257336"
        },
        {
          "username": "hhktony",
          "href": "https://github.com/hhktony",
          "avatar": "https://avatars.githubusercontent.com/u/1276702"
        },
        {
          "username": "kaikreuzer",
          "href": "https://github.com/kaikreuzer",
          "avatar": "https://avatars.githubusercontent.com/u/3244965"
        },
        {
          "username": "PeterDaveHello",
          "href": "https://github.com/PeterDaveHello",
          "avatar": "https://avatars.githubusercontent.com/u/3691490"
        },
        {
          "username": "stoykovstoyk",
          "href": "https://github.com/stoykovstoyk",
          "avatar": "https://avatars.githubusercontent.com/u/4581315"
        }
      ]
    },
    {
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "CyberStrikeAI is an AI-native security testing platform built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 528,
      "added_stars": 2320,
      "builtBy": [
        {
          "username": "Ed1s0nZ",
          "href": "https://github.com/Ed1s0nZ",
          "avatar": "https://avatars.githubusercontent.com/u/83812544"
        },
        {
          "username": "chhs1129",
          "href": "https://github.com/chhs1129",
          "avatar": "https://avatars.githubusercontent.com/u/22484224"
        },
        {
          "username": "huajinping",
          "href": "https://github.com/huajinping",
          "avatar": "https://avatars.githubusercontent.com/u/38647963"
        },
        {
          "username": "04cb",
          "href": "https://github.com/04cb",
          "avatar": "https://avatars.githubusercontent.com/u/111667698"
        },
        {
          "username": "Amywith",
          "href": "https://github.com/Amywith",
          "avatar": "https://avatars.githubusercontent.com/u/113870835"
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
      "forks": 471,
      "added_stars": 623,
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
      "author": "m1k1o",
      "repo": "neko",
      "avatar": "https://github.com/m1k1o.png",
      "repo_link": "https://github.com/m1k1o/neko",
      "desc": "A self hosted virtual browser that runs in docker and uses WebRTC.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1426,
      "added_stars": 3099,
      "builtBy": [
        {
          "username": "m1k1o",
          "href": "https://github.com/m1k1o",
          "avatar": "https://avatars.githubusercontent.com/u/7534274"
        },
        {
          "username": "nurdism",
          "href": "https://github.com/nurdism",
          "avatar": "https://avatars.githubusercontent.com/u/420102"
        },
        {
          "username": "mbattista",
          "href": "https://github.com/mbattista",
          "avatar": "https://avatars.githubusercontent.com/u/26247314"
        },
        {
          "username": "prophetofxenu",
          "href": "https://github.com/prophetofxenu",
          "avatar": "https://avatars.githubusercontent.com/u/20529712"
        },
        {
          "username": "gbrian",
          "href": "https://github.com/gbrian",
          "avatar": "https://avatars.githubusercontent.com/u/767180"
        }
      ]
    },
    {
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 719,
      "added_stars": 1583,
      "builtBy": [
        {
          "username": "zachmu",
          "href": "https://github.com/zachmu",
          "avatar": "https://avatars.githubusercontent.com/u/474773"
        },
        {
          "username": "andy-wm-arthur",
          "href": "https://github.com/andy-wm-arthur",
          "avatar": "https://avatars.githubusercontent.com/u/8837413"
        },
        {
          "username": "fulghum",
          "href": "https://github.com/fulghum",
          "avatar": "https://avatars.githubusercontent.com/u/193449"
        },
        {
          "username": "coffeegoddd",
          "href": "https://github.com/coffeegoddd",
          "avatar": "https://avatars.githubusercontent.com/u/43383835"
        },
        {
          "username": "reltuk",
          "href": "https://github.com/reltuk",
          "avatar": "https://avatars.githubusercontent.com/u/1150979"
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
      "forks": 327,
      "added_stars": 708,
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
          "username": "krissetto",
          "href": "https://github.com/krissetto",
          "avatar": "https://avatars.githubusercontent.com/u/47751006"
        },
        {
          "username": "trungutt",
          "href": "https://github.com/trungutt",
          "avatar": "https://avatars.githubusercontent.com/u/18528548"
        },
        {
          "username": "derekmisler",
          "href": "https://github.com/derekmisler",
          "avatar": "https://avatars.githubusercontent.com/u/2684662"
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
      "forks": 2935,
      "added_stars": 579,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8192,
      "added_stars": 1003,
      "builtBy": [
        {
          "username": "mislav",
          "href": "https://github.com/mislav",
          "avatar": "https://avatars.githubusercontent.com/u/887"
        },
        {
          "username": "vilmibm",
          "href": "https://github.com/vilmibm",
          "avatar": "https://avatars.githubusercontent.com/u/98482"
        },
        {
          "username": "BagToad",
          "href": "https://github.com/BagToad",
          "avatar": "https://avatars.githubusercontent.com/u/47394200"
        },
        {
          "username": "williammartin",
          "href": "https://github.com/williammartin",
          "avatar": "https://avatars.githubusercontent.com/u/1611510"
        },
        {
          "username": "andyfeller",
          "href": "https://github.com/andyfeller",
          "avatar": "https://avatars.githubusercontent.com/u/2089743"
        }
      ]
    },
    {
      "author": "projectdiscovery",
      "repo": "katana",
      "avatar": "https://github.com/projectdiscovery.png",
      "repo_link": "https://github.com/projectdiscovery/katana",
      "desc": "A next-generation crawling and spidering framework.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1071,
      "added_stars": 805,
      "builtBy": [
        {
          "username": "Mzack9999",
          "href": "https://github.com/Mzack9999",
          "avatar": "https://avatars.githubusercontent.com/u/13421144"
        },
        {
          "username": "dogancanbakir",
          "href": "https://github.com/dogancanbakir",
          "avatar": "https://avatars.githubusercontent.com/u/65292895"
        },
        {
          "username": "ehsandeep",
          "href": "https://github.com/ehsandeep",
          "avatar": "https://avatars.githubusercontent.com/u/8293321"
        },
        {
          "username": "RamanaReddy0M",
          "href": "https://github.com/RamanaReddy0M",
          "avatar": "https://avatars.githubusercontent.com/u/90540245"
        }
      ]
    },
    {
      "author": "dlvhdr",
      "repo": "gh-dash",
      "avatar": "https://github.com/dlvhdr.png",
      "repo_link": "https://github.com/dlvhdr/gh-dash",
      "desc": "A rich terminal UI for GitHub that doesn't break your flow.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 367,
      "added_stars": 957,
      "builtBy": [
        {
          "username": "dlvhdr",
          "href": "https://github.com/dlvhdr",
          "avatar": "https://avatars.githubusercontent.com/u/6196971"
        },
        {
          "username": "sideshowbarker",
          "href": "https://github.com/sideshowbarker",
          "avatar": "https://avatars.githubusercontent.com/u/194984"
        },
        {
          "username": "robdimsdale",
          "href": "https://github.com/robdimsdale",
          "avatar": "https://avatars.githubusercontent.com/u/7230694"
        },
        {
          "username": "kyu08",
          "href": "https://github.com/kyu08",
          "avatar": "https://avatars.githubusercontent.com/u/49891479"
        },
        {
          "username": "alcpereira",
          "href": "https://github.com/alcpereira",
          "avatar": "https://avatars.githubusercontent.com/u/48070464"
        }
      ]
    },
    {
      "author": "GopeedLab",
      "repo": "gopeed",
      "avatar": "https://github.com/GopeedLab.png",
      "repo_link": "https://github.com/GopeedLab/gopeed",
      "desc": "A fast, modern download manager for HTTP, BitTorrent, Magnet, and ED2K. Cross-platform, built with Golang and Flutter.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1605,
      "added_stars": 854,
      "builtBy": [
        {
          "username": "monkeyWie",
          "href": "https://github.com/monkeyWie",
          "avatar": "https://avatars.githubusercontent.com/u/13160176"
        },
        {
          "username": "pugaizai",
          "href": "https://github.com/pugaizai",
          "avatar": "https://avatars.githubusercontent.com/u/85693457"
        },
        {
          "username": "hugetiny",
          "href": "https://github.com/hugetiny",
          "avatar": "https://avatars.githubusercontent.com/u/19659202"
        },
        {
          "username": "ElliotCHEN37",
          "href": "https://github.com/ElliotCHEN37",
          "avatar": "https://avatars.githubusercontent.com/u/109361374"
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
      "forks": 877,
      "added_stars": 1624,
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
      "author": "fengshao1227",
      "repo": "ccg-workflow",
      "avatar": "https://github.com/fengshao1227.png",
      "repo_link": "https://github.com/fengshao1227/ccg-workflow",
      "desc": "多模型协作开发系统 - Claude 编排 + Codex 后端 + Gemini 前端，28 个命令覆盖开发全流程，一键安装零配置",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 347,
      "added_stars": 2023,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "fengshao1227",
          "href": "https://github.com/fengshao1227",
          "avatar": "https://avatars.githubusercontent.com/u/177014058"
        },
        {
          "username": "RebornQ",
          "href": "https://github.com/RebornQ",
          "avatar": "https://avatars.githubusercontent.com/u/43238557"
        },
        {
          "username": "SXP-Simon",
          "href": "https://github.com/SXP-Simon",
          "avatar": "https://avatars.githubusercontent.com/u/177809507"
        },
        {
          "username": "GGzili",
          "href": "https://github.com/GGzili",
          "avatar": "https://avatars.githubusercontent.com/u/130820016"
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
      "forks": 218,
      "added_stars": 515,
      "builtBy": [
        {
          "username": "mostlygeek",
          "href": "https://github.com/mostlygeek",
          "avatar": "https://avatars.githubusercontent.com/u/83972"
        },
        {
          "username": "ryan-steed-usa",
          "href": "https://github.com/ryan-steed-usa",
          "avatar": "https://avatars.githubusercontent.com/u/240190636"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6879,
      "added_stars": 43285,
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
      "author": "NousResearch",
      "repo": "hermes-agent",
      "avatar": "https://github.com/NousResearch.png",
      "repo_link": "https://github.com/NousResearch/hermes-agent",
      "desc": "The agent that grows with you",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2727,
      "added_stars": 19901,
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
          "username": "aydnOktay",
          "href": "https://github.com/aydnOktay",
          "avatar": "https://avatars.githubusercontent.com/u/113846926"
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
      "forks": 6881,
      "added_stars": 33397,
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
      "forks": 1407,
      "added_stars": 13982,
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
          "username": "phjlljp",
          "href": "https://github.com/phjlljp",
          "avatar": "https://avatars.githubusercontent.com/u/76761332"
        },
        {
          "username": "iliaal",
          "href": "https://github.com/iliaal",
          "avatar": "https://avatars.githubusercontent.com/u/158724"
        }
      ]
    },
    {
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "220+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1056,
      "added_stars": 6513,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1445,
      "added_stars": 16183,
      "builtBy": [
        {
          "username": "qin-ctx",
          "href": "https://github.com/qin-ctx",
          "avatar": "https://avatars.githubusercontent.com/u/234610432"
        },
        {
          "username": "zhoujh01",
          "href": "https://github.com/zhoujh01",
          "avatar": "https://avatars.githubusercontent.com/u/242402223"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "MaojiaSheng",
          "href": "https://github.com/MaojiaSheng",
          "avatar": "https://avatars.githubusercontent.com/u/211460083"
        },
        {
          "username": "ZaynJarvis",
          "href": "https://github.com/ZaynJarvis",
          "avatar": "https://avatars.githubusercontent.com/u/31875147"
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
      "forks": 1031,
      "added_stars": 3725,
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
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8307,
      "added_stars": 14751,
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
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3230,
      "added_stars": 8442,
      "builtBy": [
        {
          "username": "potassiummmm",
          "href": "https://github.com/potassiummmm",
          "avatar": "https://avatars.githubusercontent.com/u/54800242"
        },
        {
          "username": "tsong-ms",
          "href": "https://github.com/tsong-ms",
          "avatar": "https://avatars.githubusercontent.com/u/84831885"
        },
        {
          "username": "younesbelkada",
          "href": "https://github.com/younesbelkada",
          "avatar": "https://avatars.githubusercontent.com/u/49240599"
        },
        {
          "username": "sd983527",
          "href": "https://github.com/sd983527",
          "avatar": "https://avatars.githubusercontent.com/u/59006636"
        },
        {
          "username": "XsquirrelC",
          "href": "https://github.com/XsquirrelC",
          "avatar": "https://avatars.githubusercontent.com/u/178687198"
        }
      ]
    },
    {
      "author": "langchain-ai",
      "repo": "deepagents",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/deepagents",
      "desc": "Agent harness built with LangChain and LangGraph. Equipped with a planning tool, a filesystem backend, and the ability to spawn subagents - well-equipped to handle complex agentic tasks.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2600,
      "added_stars": 8863,
      "builtBy": [
        {
          "username": "mdrxy",
          "href": "https://github.com/mdrxy",
          "avatar": "https://avatars.githubusercontent.com/u/61371264"
        },
        {
          "username": "eyurtsev",
          "href": "https://github.com/eyurtsev",
          "avatar": "https://avatars.githubusercontent.com/u/3205522"
        },
        {
          "username": "vtrivedy",
          "href": "https://github.com/vtrivedy",
          "avatar": "https://avatars.githubusercontent.com/u/28938224"
        },
        {
          "username": "hwchase17",
          "href": "https://github.com/hwchase17",
          "avatar": "https://avatars.githubusercontent.com/u/11986836"
        }
      ]
    },
    {
      "author": "fishaudio",
      "repo": "fish-speech",
      "avatar": "https://github.com/fishaudio.png",
      "repo_link": "https://github.com/fishaudio/fish-speech",
      "desc": "SOTA Open Source TTS",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2437,
      "added_stars": 4026,
      "builtBy": [
        {
          "username": "leng-yue",
          "href": "https://github.com/leng-yue",
          "avatar": "https://avatars.githubusercontent.com/u/25119060"
        },
        {
          "username": "AnyaCoder",
          "href": "https://github.com/AnyaCoder",
          "avatar": "https://avatars.githubusercontent.com/u/122108331"
        },
        {
          "username": "PoTaTo-Mika",
          "href": "https://github.com/PoTaTo-Mika",
          "avatar": "https://avatars.githubusercontent.com/u/148920650"
        }
      ]
    },
    {
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用AI大模型，一键生成高清短视频 Generate short videos with one click using AI LLM.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7752,
      "added_stars": 5246,
      "builtBy": [
        {
          "username": "harry0703",
          "href": "https://github.com/harry0703",
          "avatar": "https://avatars.githubusercontent.com/u/4928832"
        },
        {
          "username": "yyhhyyyyyy",
          "href": "https://github.com/yyhhyyyyyy",
          "avatar": "https://avatars.githubusercontent.com/u/95077259"
        },
        {
          "username": "vuisme",
          "href": "https://github.com/vuisme",
          "avatar": "https://avatars.githubusercontent.com/u/96235876"
        },
        {
          "username": "KevinZhang19870314",
          "href": "https://github.com/KevinZhang19870314",
          "avatar": "https://avatars.githubusercontent.com/u/13794286"
        },
        {
          "username": "garylab",
          "href": "https://github.com/garylab",
          "avatar": "https://avatars.githubusercontent.com/u/3072379"
        }
      ]
    },
    {
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1092,
      "added_stars": 6330,
      "builtBy": [
        {
          "username": "teng-lin",
          "href": "https://github.com/teng-lin",
          "avatar": "https://avatars.githubusercontent.com/u/737447"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "furkankoykiran",
          "href": "https://github.com/furkankoykiran",
          "avatar": "https://avatars.githubusercontent.com/u/60299878"
        },
        {
          "username": "voidborne-d",
          "href": "https://github.com/voidborne-d",
          "avatar": "https://avatars.githubusercontent.com/u/258577966"
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
      "forks": 8666,
      "added_stars": 4062,
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
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2732,
      "added_stars": 9870,
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
      "desc": "Unsloth Studio is a web UI for training and running open models like Qwen, DeepSeek, gpt-oss and Gemma locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4996,
      "added_stars": 6137,
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
      "forks": 1742,
      "added_stars": 7055,
      "builtBy": [
        {
          "username": "tobinsouth",
          "href": "https://github.com/tobinsouth",
          "avatar": "https://avatars.githubusercontent.com/u/32489862"
        },
        {
          "username": "k6l3",
          "href": "https://github.com/k6l3",
          "avatar": "https://avatars.githubusercontent.com/u/111803974"
        },
        {
          "username": "noahzweben",
          "href": "https://github.com/noahzweben",
          "avatar": "https://avatars.githubusercontent.com/u/12701358"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "dicksontsai",
          "href": "https://github.com/dicksontsai",
          "avatar": "https://avatars.githubusercontent.com/u/3757768"
        }
      ]
    },
    {
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1801,
      "added_stars": 8216,
      "builtBy": [
        {
          "username": "p-e-w",
          "href": "https://github.com/p-e-w",
          "avatar": "https://avatars.githubusercontent.com/u/2702526"
        },
        {
          "username": "spikymoth",
          "href": "https://github.com/spikymoth",
          "avatar": "https://avatars.githubusercontent.com/u/133602907"
        },
        {
          "username": "anrp",
          "href": "https://github.com/anrp",
          "avatar": "https://avatars.githubusercontent.com/u/1325515"
        },
        {
          "username": "red40maxxer",
          "href": "https://github.com/red40maxxer",
          "avatar": "https://avatars.githubusercontent.com/u/113548315"
        },
        {
          "username": "kldzj",
          "href": "https://github.com/kldzj",
          "avatar": "https://avatars.githubusercontent.com/u/7687617"
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
      "forks": 388,
      "added_stars": 4818,
      "builtBy": [
        {
          "username": "nicoloboschi",
          "href": "https://github.com/nicoloboschi",
          "avatar": "https://avatars.githubusercontent.com/u/23314389"
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
          "username": "benfrank241",
          "href": "https://github.com/benfrank241",
          "avatar": "https://avatars.githubusercontent.com/u/62250174"
        },
        {
          "username": "slayoffer",
          "href": "https://github.com/slayoffer",
          "avatar": "https://avatars.githubusercontent.com/u/78427278"
        }
      ]
    },
    {
      "author": "666ghj",
      "repo": "BettaFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/BettaFish",
      "desc": "微舆：人人可用的多Agent舆情分析助手，打破信息茧房，还原舆情原貌，预测未来走向，辅助决策！从0实现，不依赖任何框架。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7451,
      "added_stars": 4391,
      "builtBy": [
        {
          "username": "666ghj",
          "href": "https://github.com/666ghj",
          "avatar": "https://avatars.githubusercontent.com/u/110395318"
        },
        {
          "username": "MaYiding",
          "href": "https://github.com/MaYiding",
          "avatar": "https://avatars.githubusercontent.com/u/77890939"
        },
        {
          "username": "DoiiarX",
          "href": "https://github.com/DoiiarX",
          "avatar": "https://avatars.githubusercontent.com/u/25550075"
        },
        {
          "username": "ghmark675",
          "href": "https://github.com/ghmark675",
          "avatar": "https://avatars.githubusercontent.com/u/188834327"
        },
        {
          "username": "Qst137",
          "href": "https://github.com/Qst137",
          "avatar": "https://avatars.githubusercontent.com/u/139198328"
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
      "title": "oh-my-hi: Visual dashboard for your Claude Code harness",
      "url": "https://github.com/netil/oh-my-hi",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-31T12:06:10.000Z"
    },
    {
      "title": "Auth library with AI agent identity and MCP OAuth 2.1",
      "url": "https://github.com/kavachos/kavachos",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-30T20:06:45.000Z"
    },
    {
      "title": "Your options for preloading images with JavaScript",
      "url": "https://macarthur.me/posts/preloading-images/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-30T16:57:57.000Z"
    },
    {
      "title": "You probably don't need to lift state",
      "url": "https://allthingssmitty.com/2026/03/30/you-probably-dont-need-to-lift-that-state/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-30T12:53:30.000Z"
    },
    {
      "title": "Polpelmi - Open-source file upload security",
      "url": "https://pompelmi.github.io/pompelmi/",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-29T08:01:48.000Z"
    },
    {
      "title": "A simple physics engine in around 100 lines of pure JS",
      "url": "https://slicker.me/javascript/physics/physics_engine.htm",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-03-28T02:15:05.000Z"
    },
    {
      "title": "Heat.js v5.1.0 - New line/point line support! Improved dynamic colors! Fixes!",
      "url": "https://www.heatjs.com/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-27T15:35:33.000Z"
    },
    {
      "title": "[AI] webpage-mcp: Turn your existing webpages into an MCP server for agent control",
      "url": "https://github.com/mcpland/webpage-mcp",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-24T17:43:13.000Z"
    },
    {
      "title": "Bun is Fast. Your Event Loop is Not.",
      "url": "https://howtocenterdiv.com/beyond-the-div/bun-is-fast-your-event-loop-is-not",
      "upvotes": "1",
      "comments": "3",
      "created": "2026-03-22T00:41:52.000Z"
    },
    {
      "title": "[AI] Kuberna Labs – Open-source SDK for autonomous cross-chain AI agents",
      "url": "https://github.com/kawacukennedy/kuberna-labs",
      "upvotes": "1",
      "comments": "2",
      "created": "2026-03-21T10:03:00.000Z"
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
      "title": "Join our April Fools Challenge for a chance at TEA-RRIFIC prizes!!!",
      "description": "Hello, and let’s get this out of the way right now: this is no joke!!  Tired of building...",
      "url": "https://dev.to/devteam/join-our-april-fools-challenge-for-a-chance-at-tea-rrific-prizes-1ofa",
      "tags": "devchallenge, 418challenge, jokes",
      "reactions": 142,
      "comments": 35,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "A Year of Change and Persistence",
      "description": "This marks the ninth year of our WeCoded celebration. While each year has had its highs and lows,...",
      "url": "https://dev.to/jess/a-year-of-change-and-persistence-19cf",
      "tags": "devchallenge, wecoded, career, dei",
      "reactions": 67,
      "comments": 18,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "🌪️ Proof of Work: The To-Do List of Infinite Regret",
      "description": "**           What I Built   ** I built a productivity app for people who hate being productive. Proof...",
      "url": "https://dev.to/malik_sohaib_iqbal/proof-of-work-the-to-do-list-of-infinite-regret-48le",
      "tags": "devchallenge, 418challenge, showdev, webdev",
      "reactions": 15,
      "comments": 0,
      "reading_time": 2,
      "author": "malik_sohaib_iqbal"
    },
    {
      "title": "BrewOps: I built a production-grade HTCPCP server because nobody else would",
      "description": "This is a submission for the DEV April Fools Challenge           What I built   We identified a...",
      "url": "https://dev.to/axrisi/brewops-i-built-a-production-grade-htcpcp-server-because-nobody-else-would-3clh",
      "tags": "devchallenge, 418challenge, showdev, jokes",
      "reactions": 17,
      "comments": 1,
      "reading_time": 8,
      "author": "axrisi"
    },
    {
      "title": "The Curated, Automated Open Source Portfolio: How It’s Going",
      "description": "A few months ago, I shared a story about building an automated open source portfolio using just my...",
      "url": "https://dev.to/adiatiayu/the-curated-automated-open-source-portfolio-how-its-going-5f98",
      "tags": "opensource, ai, vibecoding",
      "reactions": 14,
      "comments": 7,
      "reading_time": 5,
      "author": "adiatiayu"
    },
    {
      "title": "3 Takeaways from All Things AI: 80/20 Rule, Non-Deterministic Humans, and Why We're Still Early",
      "description": "Last week, I attended All Things AI in Durham, NC. The event was geared toward technical AI...",
      "url": "https://dev.to/thisisryanswift/3-takeaways-from-all-things-ai-8020-rule-non-deterministic-humans-and-why-were-still-early-2mln",
      "tags": "ai, discuss, mlh, opensource",
      "reactions": 37,
      "comments": 2,
      "reading_time": 3,
      "author": "thisisryanswift"
    },
    {
      "title": "I built a machine-readable UK Chart of Accounts for Python (because one didn't exist)",
      "description": "Table Of Contents    What it does Quick example Why VAT treatments matter The LLM use...",
      "url": "https://dev.to/billkhiz/i-built-a-machine-readable-uk-chart-of-accounts-for-python-because-one-didnt-exist-30m6",
      "tags": "python, accounting, opensource, fintech",
      "reactions": 3,
      "comments": 1,
      "reading_time": 3,
      "author": "billkhiz"
    },
    {
      "title": "I've been building software for 40 years. But I want *you* to tell me about dev in 1986...",
      "description": "It's 2026 and I started professional software development in 1986 when I took a Summer internship...",
      "url": "https://dev.to/johnmunsch/ive-been-building-software-for-40-years-but-i-want-you-to-tell-me-about-dev-in-1986-1pmj",
      "tags": "programming, discuss, development, watercooler",
      "reactions": 17,
      "comments": 9,
      "reading_time": 1,
      "author": "johnmunsch"
    },
    {
      "title": "Antigravity: My Approach to Deliver the Most Assured Value for the Least Money",
      "description": "As I'm not a professional developer but a guy who needs to use automation to get things done, I...",
      "url": "https://dev.to/gdg/antigravity-my-approach-to-deliver-the-most-assured-value-for-the-least-money-3iip",
      "tags": "antigravity, development, automation, responsibleai",
      "reactions": 10,
      "comments": 1,
      "reading_time": 4,
      "author": "alexandertyutin"
    },
    {
      "title": "Authorizer v2 Is Here: Self-Hosted Auth, Rebuilt From the Ground Up",
      "description": "We just shipped Authorizer v2 — a major rewrite of our open-source, self-hosted authentication and...",
      "url": "https://dev.to/lakhansamani/authorizer-v2-is-here-self-hosted-auth-rebuilt-from-the-ground-up-184a",
      "tags": "webdev, ai, opensource, authentication",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "lakhansamani"
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
      "title": "APL 25 Year Perspective Panel (1991)",
      "url": "https://www.youtube.com/watch?v=i_gj-NBxlpA",
      "score": 1,
      "comments": 0,
      "tags": [
        "apl",
        "historical",
        "video"
      ],
      "id": "k0vfoo"
    },
    {
      "title": "Libinput Hit By Worrying Security Issues With Its Lua Plug-In System",
      "url": "https://www.phoronix.com/news/Libinput-Lua-Security-Issues",
      "score": 1,
      "comments": 0,
      "tags": [
        "linux",
        "security"
      ],
      "id": "es2tfh"
    },
    {
      "title": "Splatting: A Parallel, Feed-Forward Volume Rendering Algorithm (1991)",
      "url": "https://www.cs.unc.edu/techreports/91-029.pdf",
      "score": 1,
      "comments": 0,
      "tags": [
        "graphics",
        "pdf"
      ],
      "id": "xk45g5"
    },
    {
      "title": "Ruby 3.2 Is EOL: What You Actually Need to Do",
      "url": "https://piechowski.io/post/ruby-3-2-eol/",
      "score": 2,
      "comments": 1,
      "tags": [
        "ruby"
      ],
      "id": "kpizkt"
    },
    {
      "title": "Quantum computing bombshells that are not April Fools",
      "url": "https://scottaaronson.blog/?p=9665",
      "score": 4,
      "comments": 0,
      "tags": [
        "cryptography"
      ],
      "id": "mrtzbt"
    },
    {
      "title": "knitout and kniterate (part 1)",
      "url": "https://soup.agnescameron.info/2025/09/20/kniterate.html",
      "score": 1,
      "comments": 1,
      "tags": [
        "art",
        "hardware"
      ],
      "id": "9pwgf0"
    },
    {
      "title": "Python Yet Reforged Entirely",
      "url": "https://pyre-lang.org/",
      "score": 9,
      "comments": 5,
      "tags": [
        "compilers",
        "python",
        "rust",
        "vibecoding"
      ],
      "id": "phjtbx"
    },
    {
      "title": "Do Agents Dream of Electronic Dag?",
      "url": "https://xavier.xfaang.com/blog/do-agents-dream.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "audio",
        "culture",
        "philosophy",
        "transcript",
        "vibecoding"
      ],
      "id": "bngvzi"
    },
    {
      "title": "ppb: A non-allocating lexer for protocol buffers",
      "url": "https://github.com/pkhuong/ppb",
      "score": 2,
      "comments": 0,
      "tags": [
        "c"
      ],
      "id": "iysabm"
    },
    {
      "title": "Email obfuscation: What works in 2026?",
      "url": "https://spencermortensen.com/articles/email-obfuscation/",
      "score": 14,
      "comments": 3,
      "tags": [
        "practices",
        "privacy"
      ],
      "id": "m3b3fk"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "apitman",
      "descendants": 735,
      "id": 47603657,
      "kids": [
        47607684,
        47605635,
        47604028,
        47607791,
        47604551,
        47610235,
        47604563,
        47607619,
        47607512,
        47606861,
        47603814,
        47610126,
        47607837,
        47605185,
        47607609,
        47605146,
        47607469,
        47608354,
        47604376,
        47609759,
        47610189,
        47609987,
        47607611,
        47609516,
        47608588,
        47609158,
        47609878,
        47603923,
        47608605,
        47607669,
        47604048,
        47609262,
        47608811,
        47607982,
        47605728,
        47605599,
        47606033,
        47607533,
        47607840,
        47607740,
        47605299,
        47607644,
        47606656,
        47608534,
        47606331,
        47607688,
        47607632,
        47605591,
        47606606,
        47608439,
        47609177,
        47609519,
        47608436,
        47604571,
        47605151,
        47608369,
        47607495,
        47607779,
        47607444,
        47606867,
        47604243,
        47604174,
        47605150,
        47605585,
        47608447,
        47608198,
        47605926,
        47610023,
        47608210,
        47608992,
        47607807,
        47608930,
        47604595,
        47609705,
        47608996,
        47607680,
        47607808,
        47603839,
        47608036,
        47608248,
        47607972,
        47607718,
        47608471,
        47604817,
        47607268,
        47604167,
        47605870
      ],
      "score": 817,
      "text": "<a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;live&#x2F;Tf_UjBMIzNo\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;live&#x2F;Tf_UjBMIzNo</a>",
      "time": 1775063491,
      "title": "Live: Artemis II Launch Day Updates",
      "type": "story",
      "url": "https://www.nasa.gov/blogs/missions/2026/04/01/live-artemis-ii-launch-day-updates/"
    },
    {
      "by": "homelessdino",
      "descendants": 42,
      "id": 47609882,
      "kids": [
        47610397,
        47610203,
        47610366,
        47610337,
        47610226,
        47610129,
        47610283,
        47610537,
        47610159,
        47610413,
        47610230,
        47610286
      ],
      "score": 66,
      "time": 1775102885,
      "title": "Subscription bombing and how to mitigate it",
      "type": "story",
      "url": "https://bytemash.net/posts/subscription-bombing-your-signup-form-is-a-weapon/"
    },
    {
      "by": "mergesort",
      "descendants": 55,
      "id": 47609294,
      "kids": [
        47609858,
        47610102,
        47610389,
        47609734,
        47609821,
        47610717,
        47609816,
        47610582,
        47610660,
        47610697,
        47610541,
        47610483,
        47610072,
        47610435,
        47610489,
        47610284,
        47610079,
        47610381,
        47610625,
        47610118,
        47609931,
        47610240,
        47610576,
        47609863
      ],
      "score": 99,
      "time": 1775096765,
      "title": "The Claude Code Leak",
      "type": "story",
      "url": "https://build.ms/2026/4/1/the-claude-code-leak/"
    },
    {
      "by": "Strilanc",
      "descendants": 36,
      "id": 47608495,
      "kids": [
        47610749,
        47610243,
        47609453,
        47610542,
        47609617,
        47609368,
        47609744,
        47609593,
        47609721
      ],
      "score": 115,
      "time": 1775089483,
      "title": "Quantum computing bombshells that are not April Fools",
      "type": "story",
      "url": "https://scottaaronson.blog/?p=9665"
    },
    {
      "by": "cryptoz",
      "descendants": 38,
      "id": 47610336,
      "kids": [
        47610750,
        47610575,
        47610391,
        47610665,
        47610373,
        47610756,
        47610500,
        47610718,
        47610712,
        47610692,
        47610588,
        47610450,
        47610392,
        47610374,
        47610531,
        47610414
      ],
      "score": 69,
      "time": 1775108000,
      "title": "r/programming bans all discussion of LLM programming",
      "type": "story",
      "url": "https://old.reddit.com/r/programming/comments/1s9jkzi/announcement_temporary_llm_content_ban/"
    },
    {
      "by": "hkmaxpro",
      "descendants": 63,
      "id": 47609564,
      "kids": [
        47610768,
        47609818,
        47609887,
        47609796,
        47609889,
        47610503,
        47610277,
        47609873,
        47610375,
        47609924,
        47609874,
        47610400,
        47610287,
        47609914,
        47609708,
        47609970,
        47609920,
        47610233
      ],
      "score": 173,
      "time": 1775099544,
      "title": "Steam on Linux Use Skyrocketed Above 5% in March",
      "type": "story",
      "url": "https://www.phoronix.com/news/Steam-On-Linux-Tops-5p"
    },
    {
      "by": "jaden",
      "descendants": 5,
      "id": 47609694,
      "kids": [
        47610508,
        47610441,
        47610421,
        47610524,
        47610620
      ],
      "score": 33,
      "time": 1775100933,
      "title": "Email obfuscation: What works in 2026?",
      "type": "story",
      "url": "https://spencermortensen.com/articles/email-obfuscation/"
    },
    {
      "by": "glittershark",
      "descendants": 12,
      "id": 47608058,
      "kids": [
        47608258,
        47610302,
        47610583,
        47609985,
        47609015,
        47608632,
        47608301,
        47608814
      ],
      "score": 149,
      "time": 1775086502,
      "title": "A new C++ back end for ocamlc",
      "type": "story",
      "url": "https://github.com/ocaml/ocaml/pull/14701"
    },
    {
      "by": "elithrar",
      "descendants": 373,
      "id": 47602832,
      "kids": [
        47603112,
        47606147,
        47607571,
        47610559,
        47604294,
        47609668,
        47603526,
        47605699,
        47603398,
        47603999,
        47610147,
        47604024,
        47603920,
        47609359,
        47606896,
        47609838,
        47605025,
        47606340,
        47610282,
        47608907,
        47605979,
        47605426,
        47604696,
        47604242,
        47604925,
        47604700,
        47603525,
        47603081,
        47604164,
        47608430,
        47609953,
        47603323,
        47606939,
        47603060,
        47609869,
        47603162,
        47606994,
        47604273,
        47609296,
        47607485,
        47606414,
        47605622,
        47609557,
        47607735,
        47608927,
        47603450,
        47603931,
        47605027,
        47603585,
        47606177,
        47606654,
        47605562,
        47603330,
        47606992,
        47609332,
        47603493,
        47604118,
        47606905,
        47607233,
        47605067,
        47602926,
        47603404,
        47604045,
        47606234,
        47604034,
        47603384,
        47604929,
        47605237,
        47605032,
        47603786,
        47604154,
        47606591,
        47604576,
        47605917,
        47603108,
        47606046,
        47606755,
        47602897,
        47608949,
        47605106,
        47607254,
        47605604,
        47604837,
        47606433,
        47605517,
        47604504,
        47603861,
        47608470,
        47603666,
        47603612,
        47603507,
        47603465,
        47603378,
        47603401,
        47603245,
        47604658,
        47604032,
        47604877,
        47604529,
        47606276,
        47605508,
        47605463,
        47604873,
        47603410,
        47610048,
        47609183,
        47607633,
        47606744,
        47608356,
        47609159,
        47608802,
        47604750,
        47603922,
        47604412,
        47603746,
        47606181,
        47603414,
        47605378,
        47604766
      ],
      "score": 537,
      "time": 1775060078,
      "title": "EmDash – A spiritual successor to WordPress that solves plugin security",
      "type": "story",
      "url": "https://blog.cloudflare.com/emdash-wordpress/"
    },
    {
      "by": "ingve",
      "descendants": 341,
      "id": 47606840,
      "kids": [
        47608294,
        47610423,
        47607703,
        47609520,
        47607342,
        47607135,
        47608980,
        47607437,
        47607173,
        47609168,
        47607151,
        47610186,
        47607575,
        47608708,
        47610405,
        47609099,
        47607587,
        47607818,
        47608933,
        47607538,
        47607763,
        47609852,
        47607785,
        47607417,
        47607537,
        47609016,
        47609510,
        47607292,
        47607907,
        47607238,
        47609244,
        47609737,
        47609959,
        47608237,
        47608125,
        47607774,
        47607682,
        47606931,
        47607522,
        47607793,
        47608239,
        47607374,
        47608325,
        47607847,
        47607766,
        47607743,
        47607142,
        47607216,
        47609701,
        47608954,
        47609022,
        47609186,
        47607242,
        47607126
      ],
      "score": 423,
      "time": 1775079401,
      "title": "DRAM pricing is killing the hobbyist SBC market",
      "type": "story",
      "url": "https://www.jeffgeerling.com/blog/2026/dram-pricing-is-killing-the-hobbyist-sbc-market/"
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
      "title": "Trading My Body for Logic: The Physical Decay We Ignore",
      "description": "It burns behind my eyelids. Not the normal kind of tired, but a sharp, constant ache. It feels like...",
      "url": "https://dev.to/the_nortern_dev/trading-my-body-for-logic-the-physical-decay-we-ignore-3c4i",
      "tags": "discuss, mentalhealth, career, webdev",
      "reactions": 31,
      "comments": 30,
      "reading_time": 3,
      "author": "the_nortern_dev"
    },
    {
      "title": "A Year of Change and Persistence",
      "description": "This marks the ninth year of our WeCoded celebration. While each year has had its highs and lows,...",
      "url": "https://dev.to/jess/a-year-of-change-and-persistence-19cf",
      "tags": "devchallenge, wecoded, career, dei",
      "reactions": 67,
      "comments": 18,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Why Software Engineers Burn Out Differently And What To Do About It",
      "description": "There's a specific kind of exhaustion that software engineers know well.  It's not the kind where you...",
      "url": "https://dev.to/recharge/why-software-engineers-burn-out-differently-and-what-to-do-about-it-5bee",
      "tags": "career, mentalhealth, productivity, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "recharge"
    },
    {
      "title": "Why Most QA Engineers Can't Practice Their Core Skill — and How Mutation Testing Changes That",
      "description": "QA Engineers spend years on LeetCode sharpening algorithm skills — but that's not what QA is about. Mutation testing is the practice method that actually trains your bug-finding instincts.",
      "url": "https://dev.to/sdetcode/why-most-qa-engineers-cant-practice-their-core-skill-and-how-mutation-testing-changes-that-1k7n",
      "tags": "testing, qa, python, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sdetcode"
    },
    {
      "title": "Del aprendizaje a la práctica: Por qué decidí dejar de estudiar en privado y empezar a compartir 🚀",
      "description": "¡Hola a todos! 👋  Llevo mucho tiempo sumergido en cursos, laboratorios y documentación. Durante meses...",
      "url": "https://dev.to/exegol/del-aprendizaje-a-la-practica-por-que-decidi-dejar-de-estudiar-en-privado-y-empezar-a-compartir-298g",
      "tags": "career, datascience, learning, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "exegol"
    },
    {
      "title": "What is a GTM Engineer and Why Your Company Needs One",
      "description": "In today’s fast-paced, AI-driven sales landscape, the role of a GTM Engineer is becoming...",
      "url": "https://dev.to/riteshrajpurohit/what-is-a-gtm-engineer-and-why-your-company-needs-one-5g62",
      "tags": "ai, productivity, career, automation",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "riteshrajpurohit"
    },
    {
      "title": "From 10x Developer to 10x Multiplier: Surviving the Lead/Principal Glow-Up 🚀",
      "description": "The mindset shift from senior to principal engineer — architecture decisions, mentoring, stakeholder management, and why your code output should go DOWN as your impact goes UP.",
      "url": "https://dev.to/sanjaysundarmurthy/from-10x-developer-to-10x-multiplier-surviving-the-leadprincipal-glow-up-3580",
      "tags": "leadership, career, devops, architecture",
      "reactions": 4,
      "comments": 0,
      "reading_time": 8,
      "author": "sanjaysundarmurthy"
    },
    {
      "title": "Q1: Learning to Build with AI",
      "description": "Zero revenue. Zero launches. Zero regrets.  I wrapped up Q1 with zero revenue and zero launched...",
      "url": "https://dev.to/marvec/q1-learning-to-build-with-ai-c64",
      "tags": "ai, career, sideprojects, startup",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "marvec"
    },
    {
      "title": "My Creative Learning Journey",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience   Come with me and you′ll...",
      "url": "https://dev.to/whykay/my-creative-learning-journey-1g1j",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "whykay"
    },
    {
      "title": "What are your goals for the week? #172",
      "description": "Had an increase in responses last week. Thanks to @francistrdev for the shout out in their posts. I...",
      "url": "https://dev.to/jarvisscript/what-are-your-goals-for-the-week-55nm",
      "tags": "career, discuss, productivity, watercooler",
      "reactions": 32,
      "comments": 51,
      "reading_time": 2,
      "author": "jarvisscript"
    }
  ]
}
```

