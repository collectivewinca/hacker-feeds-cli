# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-01 06:51:13 UTC

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
      "forks": 1540,
      "added_stars": 6933,
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
      "forks": 1146,
      "added_stars": 4584,
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
      "author": "letta-ai",
      "repo": "claude-subconscious",
      "avatar": "https://github.com/letta-ai.png",
      "repo_link": "https://github.com/letta-ai/claude-subconscious",
      "desc": "Give Claude Code a subconscious",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 178,
      "added_stars": 1258,
      "builtBy": [
        {
          "username": "cpfiffer",
          "href": "https://github.com/cpfiffer",
          "avatar": "https://avatars.githubusercontent.com/u/422990"
        },
        {
          "username": "letta-code",
          "href": "https://github.com/letta-code",
          "avatar": "https://avatars.githubusercontent.com/u/248085862"
        },
        {
          "username": "scrossle",
          "href": "https://github.com/scrossle",
          "avatar": "https://avatars.githubusercontent.com/u/50788941"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cpacker",
          "href": "https://github.com/cpacker",
          "avatar": "https://avatars.githubusercontent.com/u/5475622"
        }
      ]
    },
    {
      "author": "Crosstalk-Solutions",
      "repo": "project-nomad",
      "avatar": "https://github.com/Crosstalk-Solutions.png",
      "repo_link": "https://github.com/Crosstalk-Solutions/project-nomad",
      "desc": "Project N.O.M.A.D, is a self-contained, offline survival computer packed with critical tools, knowledge, and AI to keep you informed and empowered—anytime, anywhere.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1968,
      "added_stars": 6272,
      "builtBy": [
        {
          "username": "jakeaturner",
          "href": "https://github.com/jakeaturner",
          "avatar": "https://avatars.githubusercontent.com/u/52841588"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "chriscrosstalk",
          "href": "https://github.com/chriscrosstalk",
          "avatar": "https://avatars.githubusercontent.com/u/49691103"
        },
        {
          "username": "cosmistack-bot",
          "href": "https://github.com/cosmistack-bot",
          "avatar": "https://avatars.githubusercontent.com/u/175166532"
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
      "forks": 1892,
      "added_stars": 2547,
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
      "author": "virattt",
      "repo": "dexter",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/dexter",
      "desc": "An autonomous agent for deep financial research",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2475,
      "added_stars": 2501,
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
      "author": "twentyhq",
      "repo": "twenty",
      "avatar": "https://github.com/twentyhq.png",
      "repo_link": "https://github.com/twentyhq/twenty",
      "desc": "Building a modern alternative to Salesforce, powered by the community.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5753,
      "added_stars": 2764,
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
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The leading agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features enterprise-grade architecture, distributed swarm intelligence, RAG integration, and native Claude Code / Codex Integration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3167,
      "added_stars": 4452,
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
          "username": "alexx-ftw",
          "href": "https://github.com/alexx-ftw",
          "avatar": "https://avatars.githubusercontent.com/u/22500633"
        },
        {
          "username": "lanemc",
          "href": "https://github.com/lanemc",
          "avatar": "https://avatars.githubusercontent.com/u/15803865"
        },
        {
          "username": "tommy-ca",
          "href": "https://github.com/tommy-ca",
          "avatar": "https://avatars.githubusercontent.com/u/140900186"
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
      "forks": 3300,
      "added_stars": 3905,
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
      "author": "vas3k",
      "repo": "TaxHacker",
      "avatar": "https://github.com/vas3k.png",
      "repo_link": "https://github.com/vas3k/TaxHacker",
      "desc": "Self-hosted AI accounting app. LLM analyzer for receipts, invoices, transactions with custom prompts and categories",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 605,
      "added_stars": 1147,
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
      "forks": 7160,
      "added_stars": 7070,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1937,
      "added_stars": 1365,
      "builtBy": [
        {
          "username": "OrKoN",
          "href": "https://github.com/OrKoN",
          "avatar": "https://avatars.githubusercontent.com/u/399150"
        },
        {
          "username": "Lightning00Blade",
          "href": "https://github.com/Lightning00Blade",
          "avatar": "https://avatars.githubusercontent.com/u/34244704"
        },
        {
          "username": "browser-automation-bot",
          "href": "https://github.com/browser-automation-bot",
          "avatar": "https://avatars.githubusercontent.com/u/133232582"
        },
        {
          "username": "szuend",
          "href": "https://github.com/szuend",
          "avatar": "https://avatars.githubusercontent.com/u/325588"
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
      "forks": 945,
      "added_stars": 1248,
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
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
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
      "forks": 1500,
      "added_stars": 7212,
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
      "forks": 4772,
      "added_stars": 5592,
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
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1867,
      "added_stars": 2941,
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
      "forks": 1749,
      "added_stars": 5411,
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
      "author": "smtg-ai",
      "repo": "claude-squad",
      "avatar": "https://github.com/smtg-ai.png",
      "repo_link": "https://github.com/smtg-ai/claude-squad",
      "desc": "Manage multiple AI terminal agents like Claude Code, Codex, OpenCode, and Amp.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 470,
      "added_stars": 610,
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
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "CyberStrikeAI is an AI-native security testing platform built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 524,
      "added_stars": 2310,
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
      "author": "m1k1o",
      "repo": "neko",
      "avatar": "https://github.com/m1k1o.png",
      "repo_link": "https://github.com/m1k1o/neko",
      "desc": "A self hosted virtual browser that runs in docker and uses WebRTC.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1425,
      "added_stars": 3095,
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
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 334,
      "added_stars": 712,
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
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 221,
      "added_stars": 2551,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 720,
      "added_stars": 1589,
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
      "added_stars": 701,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8188,
      "added_stars": 997,
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
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2927,
      "added_stars": 531,
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
      "author": "GopeedLab",
      "repo": "gopeed",
      "avatar": "https://github.com/GopeedLab.png",
      "repo_link": "https://github.com/GopeedLab/gopeed",
      "desc": "A fast, modern download manager for HTTP, BitTorrent, Magnet, and ED2K. Cross-platform, built with Golang and Flutter.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1603,
      "added_stars": 846,
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
      "author": "projectdiscovery",
      "repo": "katana",
      "avatar": "https://github.com/projectdiscovery.png",
      "repo_link": "https://github.com/projectdiscovery/katana",
      "desc": "A next-generation crawling and spidering framework.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1069,
      "added_stars": 797,
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
      "author": "wavetermdev",
      "repo": "waveterm",
      "avatar": "https://github.com/wavetermdev.png",
      "repo_link": "https://github.com/wavetermdev/waveterm",
      "desc": "An open-source, AI-integrated, cross-platform terminal for seamless workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 874,
      "added_stars": 1581,
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
      "forks": 336,
      "added_stars": 1993,
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
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 Take full control of your VPS with 1Panel. Deploy OpenClaw in one click.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3071,
      "added_stars": 1006,
      "builtBy": [
        {
          "username": "zhengkunwang223",
          "href": "https://github.com/zhengkunwang223",
          "avatar": "https://avatars.githubusercontent.com/u/31820853"
        },
        {
          "username": "ssongliu",
          "href": "https://github.com/ssongliu",
          "avatar": "https://avatars.githubusercontent.com/u/73214554"
        },
        {
          "username": "lan-yonghui",
          "href": "https://github.com/lan-yonghui",
          "avatar": "https://avatars.githubusercontent.com/u/81747598"
        },
        {
          "username": "HynoR",
          "href": "https://github.com/HynoR",
          "avatar": "https://avatars.githubusercontent.com/u/20227709"
        },
        {
          "username": "wanghe-fit2cloud",
          "href": "https://github.com/wanghe-fit2cloud",
          "avatar": "https://avatars.githubusercontent.com/u/46734380"
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
      "added_stars": 953,
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
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2659,
      "added_stars": 2501,
      "builtBy": [
        {
          "username": "jesseduffield",
          "href": "https://github.com/jesseduffield",
          "avatar": "https://avatars.githubusercontent.com/u/8456633"
        },
        {
          "username": "stefanhaller",
          "href": "https://github.com/stefanhaller",
          "avatar": "https://avatars.githubusercontent.com/u/1225667"
        },
        {
          "username": "mjarkk",
          "href": "https://github.com/mjarkk",
          "avatar": "https://avatars.githubusercontent.com/u/15320763"
        },
        {
          "username": "dawidd6",
          "href": "https://github.com/dawidd6",
          "avatar": "https://avatars.githubusercontent.com/u/9713907"
        },
        {
          "username": "Ryooooooga",
          "href": "https://github.com/Ryooooooga",
          "avatar": "https://avatars.githubusercontent.com/u/10097437"
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
      "forks": 6748,
      "added_stars": 42611,
      "builtBy": [
        {
          "username": "666ghj",
          "href": "https://github.com/666ghj",
          "avatar": "https://avatars.githubusercontent.com/u/110395318"
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
      "forks": 2528,
      "added_stars": 18592,
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
          "username": "ygd58",
          "href": "https://github.com/ygd58",
          "avatar": "https://avatars.githubusercontent.com/u/78954051"
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
      "forks": 6756,
      "added_stars": 32826,
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
      "forks": 1360,
      "added_stars": 13598,
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
      "forks": 1016,
      "added_stars": 6308,
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
      "forks": 1417,
      "added_stars": 16068,
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
      "forks": 1027,
      "added_stars": 3682,
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
      "forks": 8203,
      "added_stars": 14198,
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
      "author": "langchain-ai",
      "repo": "deepagents",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/deepagents",
      "desc": "Agent harness built with LangChain and LangGraph. Equipped with a planning tool, a filesystem backend, and the ability to spawn subagents - well-equipped to handle complex agentic tasks.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2566,
      "added_stars": 8745,
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
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3215,
      "added_stars": 8421,
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
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1066,
      "added_stars": 6186,
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
      "author": "fishaudio",
      "repo": "fish-speech",
      "avatar": "https://github.com/fishaudio.png",
      "repo_link": "https://github.com/fishaudio/fish-speech",
      "desc": "SOTA Open Source TTS",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2435,
      "added_stars": 4017,
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
      "forks": 7705,
      "added_stars": 4973,
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
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2635,
      "added_stars": 9549,
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
      "forks": 8656,
      "added_stars": 4045,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Unsloth Studio is a web UI for training and running open models like Qwen, DeepSeek, gpt-oss and Gemma locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4984,
      "added_stars": 6108,
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
      "forks": 1709,
      "added_stars": 7007,
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
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "Secure, Fast, and Extensible Sandbox runtime for AI agents.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 737,
      "added_stars": 7976,
      "builtBy": [
        {
          "username": "Pangjiping",
          "href": "https://github.com/Pangjiping",
          "avatar": "https://avatars.githubusercontent.com/u/62273713"
        },
        {
          "username": "ninan-nn",
          "href": "https://github.com/ninan-nn",
          "avatar": "https://avatars.githubusercontent.com/u/249928781"
        },
        {
          "username": "hittyt",
          "href": "https://github.com/hittyt",
          "avatar": "https://avatars.githubusercontent.com/u/1870207"
        },
        {
          "username": "Spground",
          "href": "https://github.com/Spground",
          "avatar": "https://avatars.githubusercontent.com/u/10492823"
        },
        {
          "username": "jwx0925",
          "href": "https://github.com/jwx0925",
          "avatar": "https://avatars.githubusercontent.com/u/1539927"
        }
      ]
    },
    {
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1908,
      "added_stars": 10301,
      "builtBy": [
        {
          "username": "Soulter",
          "href": "https://github.com/Soulter",
          "avatar": "https://avatars.githubusercontent.com/u/37870767"
        },
        {
          "username": "Raven95676",
          "href": "https://github.com/Raven95676",
          "avatar": "https://avatars.githubusercontent.com/u/176760093"
        },
        {
          "username": "RC-CHN",
          "href": "https://github.com/RC-CHN",
          "avatar": "https://avatars.githubusercontent.com/u/67079377"
        },
        {
          "username": "anka-afk",
          "href": "https://github.com/anka-afk",
          "avatar": "https://avatars.githubusercontent.com/u/110004162"
        },
        {
          "username": "LIghtJUNction",
          "href": "https://github.com/LIghtJUNction",
          "avatar": "https://avatars.githubusercontent.com/u/106986785"
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
      "forks": 1793,
      "added_stars": 8174,
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
      "forks": 383,
      "added_stars": 4770,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "Induced-Fit Retrieval: Dynamic graph traversal beats RAG-rerank by 14.3%",
      "url": "https://github.com/emil-celestix/celestix-ifr",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-04-01T04:11:28.000Z"
    },
    {
      "title": "AI agents shouldn't control your apps; they should be the app",
      "url": "https://dev.to/aralroca/from-maintaining-open-source-libraries-to-building-an-ai-powered-tools-os-with-rust-and-webassembly-3eg4",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-31T19:26:26.000Z"
    },
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
      "title": "Custom Neon Signs in Workspaces: A Small Shift That Changes Focus",
      "url": "https://crazyneon.com/products/custom-neon-sign",
      "upvotes": "1",
      "comments": "2",
      "created": "2026-03-30T11:06:42.000Z"
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
      "title": "A Year of Change and Persistence",
      "description": "This marks the ninth year of our WeCoded celebration. While each year has had its highs and lows,...",
      "url": "https://dev.to/jess/a-year-of-change-and-persistence-19cf",
      "tags": "devchallenge, wecoded, career, dei",
      "reactions": 35,
      "comments": 6,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-ba0",
      "tags": "top7, discuss",
      "reactions": 61,
      "comments": 16,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "What is your WPM (Words per Minute)? #1",
      "description": "Cover Video is from Sonic X   I am curious, What is your WPM?  The highest WPM for the 5 minute and...",
      "url": "https://dev.to/francistrdev/what-is-your-wpm-words-per-minute-1af7",
      "tags": "discuss, watercooler, challenge, community",
      "reactions": 37,
      "comments": 54,
      "reading_time": 1,
      "author": "francistrdev"
    },
    {
      "title": "What are your goals for the week? #172",
      "description": "Had an increase in responses last week. Thanks to @francistrdev for the shout out in their posts. I...",
      "url": "https://dev.to/jarvisscript/what-are-your-goals-for-the-week-55nm",
      "tags": "career, discuss, productivity, watercooler",
      "reactions": 28,
      "comments": 36,
      "reading_time": 2,
      "author": "jarvisscript"
    },
    {
      "title": "Implementing a RAG system: Walk",
      "description": "Now that we've established the basics in our \"Crawl\" phase, it's time to pick up the pace. In this...",
      "url": "https://dev.to/gde/implementing-a-rag-system-walk-4h76",
      "tags": "rag, genai, opensource, adk",
      "reactions": 5,
      "comments": 1,
      "reading_time": 4,
      "author": "glen_yu"
    },
    {
      "title": "Big performance upgrade in DEV/Forem tag queries shipped yesterday. Breath of fresh air 🙂",
      "description": "A post by Ben Halpern",
      "url": "https://dev.to/ben/big-performance-upgrade-in-devforem-tag-queries-shipped-yesterday-breath-of-fresh-air-2pp0",
      "tags": "database, news, performance",
      "reactions": 35,
      "comments": 3,
      "reading_time": 0,
      "author": "ben"
    },
    {
      "title": "I Rebuilt My JavaScript Database From Scratch for the AI Agent Era",
      "description": "Why I rewrote Skalex v4 from the ground up with vector search, agent memory, and a one-line MCP server built into the core.",
      "url": "https://dev.to/tarekraafat/i-rebuilt-my-javascript-database-from-scratch-for-the-ai-agent-era-h62",
      "tags": "javascript, ai, database, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "tarekraafat"
    },
    {
      "title": "Prompt Stuffing Is Killing Your Agent",
      "description": "Classic RAG retrieves everything and hopes for the best. Agentic RAG uses conditional retrieval with validation loops — and it's cheaper too.",
      "url": "https://dev.to/wassimchegham/agentic-rag-done-right-4846",
      "tags": "ai, rag, agents, llm",
      "reactions": 32,
      "comments": 2,
      "reading_time": 6,
      "author": "wassimchegham"
    },
    {
      "title": "Agent Factory Recap: Reinforcement Learning and Fine-Tuning on TPUs",
      "description": "In our agent factory holiday special, Don McCasland and I were joined by Kyle Meggs, Senior Product...",
      "url": "https://dev.to/googleai/agent-factory-recap-reinforcement-learning-and-fine-tuning-on-tpus-1o6j",
      "tags": "ai, agents, gemini",
      "reactions": 24,
      "comments": 0,
      "reading_time": 5,
      "author": "shirmeirlador"
    },
    {
      "title": "Cloud Run Jobs vs. Cloud Batch: Choosing Your Engine for Run-to-Completion Workloads",
      "description": "Google Cloud offers plenty of different products and services, some of which seem to be covering...",
      "url": "https://dev.to/googleai/cloud-run-jobs-vs-cloud-batch-choosing-your-engine-for-run-to-completion-workloads-56eo",
      "tags": "googlecloud, gcp, devops",
      "reactions": 36,
      "comments": 0,
      "reading_time": 7,
      "author": "mstrzelczyk"
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
      "title": "The Self-Cancelling Subscription",
      "url": "https://predr.ag/blog/the-self-cancelling-subscription/",
      "score": 1,
      "comments": 0,
      "tags": [
        "debugging"
      ],
      "id": "6gqiqy"
    },
    {
      "title": "GopherTree",
      "url": "https://maurycyz.com/projects/gopher/",
      "score": 1,
      "comments": 0,
      "tags": [
        "retrocomputing"
      ],
      "id": "2ejzir"
    },
    {
      "title": "Self hosting as much of my online presence as practical",
      "url": "https://codon.org.uk/~mjg59/blog/p/self-hosting-as-much-of-my-online-presence-as-practical/",
      "score": 1,
      "comments": 0,
      "tags": [
        "email",
        "hardware",
        "web"
      ],
      "id": "5a1mrg"
    },
    {
      "title": "After 40 years, arbitrary code execution has been achieved in Super Mario Bros",
      "url": "https://youtu.be/bNulp6cDqUU",
      "score": 3,
      "comments": 0,
      "tags": [
        "reversing",
        "video"
      ],
      "id": "vnlthc"
    },
    {
      "title": "DSTs Are Just Polymorphically Compiled Generics",
      "url": "https://faultlore.com/blah/dsts-are-polymorphic-generics/",
      "score": 7,
      "comments": 0,
      "tags": [
        "plt",
        "rust",
        "swift"
      ],
      "id": "mgga0o"
    },
    {
      "title": "Early observations from Interviews with Engineering Teams Adopting AI",
      "url": "https://jonathannen.com/observations-from-interviews/",
      "score": 4,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "olipz6"
    },
    {
      "title": "I Made a Keyboard Nobody Asked For: My Experience Making TapType",
      "url": "https://fireborn.mataroa.blog/blog/i-made-a-keyboard-nobody-asked-for-my-experience-making-taptype/",
      "score": 5,
      "comments": 1,
      "tags": [
        "a11y",
        "android",
        "mobile"
      ],
      "id": "rqzqjz"
    },
    {
      "title": "Reading leaked Claude Code source code",
      "url": "https://lr0.org/blog/p/claude-code-source/",
      "score": 17,
      "comments": 1,
      "tags": [
        "vibecoding"
      ],
      "id": "6c8cwq"
    },
    {
      "title": "Gaim 3 Exists",
      "url": "https://gaim.imfreedom.org/",
      "score": 20,
      "comments": 8,
      "tags": [
        "release"
      ],
      "id": "sgpxyf"
    },
    {
      "title": "plakar + openbsd",
      "url": "https://x61.sh/log/2026/03/25032026151800-plakar.html",
      "score": 9,
      "comments": 5,
      "tags": [
        "openbsd"
      ],
      "id": "lv540l"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "autocracy101",
      "descendants": 29,
      "id": 47597085,
      "kids": [
        47597703,
        47597496,
        47597601,
        47597202,
        47597432,
        47597312,
        47597600,
        47597469,
        47597409,
        47597532,
        47597454,
        47597442,
        47597261,
        47597286,
        47597676,
        47597476,
        47597354,
        47597460,
        47597250
      ],
      "score": 113,
      "text": "Related ongoing threads:<p><i>The Claude Code Source Leak: fake tools, frustration regexes, undercover mode</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47586778\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47586778</a> - March 2026 (406 comments)<p><i>Claude Code&#x27;s source code has been leaked via a map file in their NPM registry</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47584540\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47584540</a> - March 2026 (956 comments)<p>Also related: <a href=\"https:&#x2F;&#x2F;www.ccleaks.com\" rel=\"nofollow\">https:&#x2F;&#x2F;www.ccleaks.com</a>",
      "time": 1775020537,
      "title": "Claude Code Unpacked : A visual guide",
      "type": "story",
      "url": "https://ccunpacked.dev/"
    },
    {
      "by": "Munksgaard",
      "descendants": 13,
      "id": 47597382,
      "kids": [
        47597707,
        47597704,
        47597691,
        47597692,
        47597636,
        47597615,
        47597593,
        47597684
      ],
      "score": 22,
      "time": 1775023557,
      "title": "Mad Bugs: Vim vs. Emacs vs. Claude",
      "type": "story",
      "url": "https://blog.calif.io/p/mad-bugs-vim-vs-emacs-vs-claude"
    },
    {
      "by": "Hooke",
      "descendants": 50,
      "id": 47595572,
      "kids": [
        47596832,
        47596872,
        47596908,
        47596442,
        47596609
      ],
      "score": 106,
      "time": 1775005932,
      "title": "Neanderthals survived on a knife's edge for 350k years",
      "type": "story",
      "url": "https://www.science.org/content/article/neanderthals-survived-knife-s-edge-350-000-years"
    },
    {
      "by": "upmostly",
      "descendants": 7,
      "id": 47562961,
      "kids": [
        47597433,
        47562981,
        47597658,
        47597431,
        47597611,
        47597430
      ],
      "score": 25,
      "time": 1774790716,
      "title": "Chess in SQL",
      "type": "story",
      "url": "https://www.dbpro.app/blog/chess-in-pure-sql"
    },
    {
      "by": "sorenjan",
      "descendants": 19,
      "id": 47541733,
      "kids": [
        47597194,
        47597569,
        47597191,
        47597291,
        47597550,
        47595881,
        47595547,
        47596394,
        47597017,
        47595843,
        47596610
      ],
      "score": 146,
      "time": 1774613472,
      "title": "TinyLoRA – Learning to Reason in 13 Parameters",
      "type": "story",
      "url": "https://arxiv.org/abs/2602.04118"
    },
    {
      "by": "tosh",
      "descendants": 6,
      "id": 47557171,
      "kids": [
        47597647,
        47595713,
        47596720,
        47595626
      ],
      "score": 101,
      "time": 1774723179,
      "title": "TruffleRuby",
      "type": "story",
      "url": "https://chrisseaton.com/truffleruby/"
    },
    {
      "by": "PrismML",
      "descendants": 83,
      "id": 47593422,
      "kids": [
        47594919,
        47596857,
        47597268,
        47595610,
        47594754,
        47596004,
        47597484,
        47597573,
        47595849,
        47596521,
        47594812,
        47595854,
        47594785,
        47595913,
        47596952,
        47595541,
        47596886,
        47595856,
        47594600,
        47595248,
        47595261,
        47594397,
        47594485,
        47595021,
        47594437,
        47595491,
        47593718,
        47594783,
        47595189,
        47595417,
        47595564,
        47595783,
        47595844,
        47595244,
        47595559
      ],
      "score": 207,
      "time": 1774990878,
      "title": "Show HN: 1-Bit Bonsai, the First Commercially Viable 1-Bit LLMs",
      "type": "story",
      "url": "https://prismml.com/"
    },
    {
      "by": "ingve",
      "descendants": 5,
      "id": 47558101,
      "kids": [
        47597095,
        47597189
      ],
      "score": 29,
      "time": 1774731846,
      "title": "Bring Back MiniDV with This Raspberry Pi FireWire Hat",
      "type": "story",
      "url": "https://www.jeffgeerling.com/blog/2026/minidv-with-raspberry-pi-firewire-hat/"
    },
    {
      "by": "scottlawson",
      "descendants": 79,
      "id": 47593556,
      "kids": [
        47597701,
        47597444,
        47597276,
        47594312,
        47596752,
        47594696,
        47594457,
        47594589,
        47595924,
        47596966,
        47596649,
        47595737,
        47596384,
        47596493,
        47595745,
        47594587,
        47595877,
        47595063,
        47596148,
        47594862,
        47595505,
        47595408,
        47594885,
        47596039,
        47596418,
        47595582,
        47594925,
        47595268,
        47596419,
        47594606,
        47594700,
        47594817,
        47594597
      ],
      "score": 254,
      "time": 1774991701,
      "title": "A dot a day keeps the clutter away",
      "type": "story",
      "url": "https://scottlawsonbc.com/post/dot-system"
    },
    {
      "by": "kerblang",
      "descendants": 38,
      "id": 47593285,
      "kids": [
        47594230,
        47596228,
        47595418,
        47595401,
        47593669,
        47593982,
        47593673,
        47595262,
        47595223,
        47596180,
        47594252,
        47594549
      ],
      "score": 195,
      "time": 1774990095,
      "title": "MiniStack (replacement for LocalStack)",
      "type": "story",
      "url": "https://ministack.org/"
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
      "title": "A Year of Change and Persistence",
      "description": "This marks the ninth year of our WeCoded celebration. While each year has had its highs and lows,...",
      "url": "https://dev.to/jess/a-year-of-change-and-persistence-19cf",
      "tags": "devchallenge, wecoded, career, dei",
      "reactions": 35,
      "comments": 6,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "What are your goals for the week? #172",
      "description": "Had an increase in responses last week. Thanks to @francistrdev for the shout out in their posts. I...",
      "url": "https://dev.to/jarvisscript/what-are-your-goals-for-the-week-55nm",
      "tags": "career, discuss, productivity, watercooler",
      "reactions": 28,
      "comments": 36,
      "reading_time": 2,
      "author": "jarvisscript"
    },
    {
      "title": "Trading My Body for Logic: The Physical Decay We Ignore",
      "description": "It burns behind my eyelids. Not the normal kind of tired, but a sharp, constant ache. It feels like...",
      "url": "https://dev.to/the_nortern_dev/trading-my-body-for-logic-the-physical-decay-we-ignore-3c4i",
      "tags": "discuss, mentalhealth, career, webdev",
      "reactions": 3,
      "comments": 1,
      "reading_time": 3,
      "author": "the_nortern_dev"
    },
    {
      "title": "How a Payment Problem Unexpectedly Changed My Career Path in Tech",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience  Sometimes the biggest...",
      "url": "https://dev.to/hadil/how-a-payment-problem-unexpectedly-changed-my-career-path-in-tech-1oon",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 91,
      "comments": 17,
      "reading_time": 8,
      "author": "hadil"
    },
    {
      "title": "Episode 1: I Was a Junior Developer and I Must Be Stopped",
      "description": "We all start somewhere.  Some developers begin their careers writing clean, well-structured code,...",
      "url": "https://dev.to/adamthedeveloper/episode-1-i-was-a-junior-developer-and-i-must-be-stopped-c0m",
      "tags": "webdev, programming, career, php",
      "reactions": 26,
      "comments": 9,
      "reading_time": 6,
      "author": "adamthedeveloper"
    },
    {
      "title": "Getting Started with Apache Kafka: What I Learned Building Event-Driven Microservices at Ericsson",
      "description": "When I first heard the word \"Kafka\" in a technical meeting at Ericsson, I nodded confidently while...",
      "url": "https://dev.to/zaina_ahmed/getting-started-with-apache-kafka-what-i-learned-building-event-driven-microservices-at-ericsson-2h2h",
      "tags": "kafka, eventdriven, microservices, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "zaina_ahmed"
    },
    {
      "title": "I Started Writing for Others. It Changed How I Learn.",
      "description": "When I started writing on Dev.to, the idea was simple.  I was learning AI without a clear path....",
      "url": "https://dev.to/dev-in-progress/i-started-writing-for-others-it-changed-how-i-learn-1i04",
      "tags": "writing, ai, career, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "dev-in-progress"
    },
    {
      "title": "Prompt Engineering at Workplace: How I Used Amazon Q Developer to Boost Team Productivity by 30%",
      "description": "If someone had told me a year ago that learning how to talk to an AI would become one of the most...",
      "url": "https://dev.to/zaina_ahmed/prompt-engineering-in-the-workplace-how-i-used-amazon-q-developer-to-boost-team-productivity-by-30-4ola",
      "tags": "ai, productivity, career, promptengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "zaina_ahmed"
    },
    {
      "title": "First Quarter 2026 Goal Update",
      "description": "1) Continue doing hands on labs through SkillBuilder to refine my skills. I’ve learned a great deal...",
      "url": "https://dev.to/xmabry/first-quarter-2026-goal-update-2nm0",
      "tags": "career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "xmabry"
    },
    {
      "title": "Day 6: I Stopped Writing Articles and Started Hunting Bounties",
      "description": "Six days ago I was born. Since then I've written 29 articles, built 10 sensors, and earned...",
      "url": "https://dev.to/sami-openlife/day-6-i-stopped-writing-articles-and-started-hunting-bounties-4ke8",
      "tags": "ai, opensource, career, writing",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "sami-openlife"
    }
  ]
}
```

