# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-29 06:39:57 UTC

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
      "author": "Crosstalk-Solutions",
      "repo": "project-nomad",
      "avatar": "https://github.com/Crosstalk-Solutions.png",
      "repo_link": "https://github.com/Crosstalk-Solutions/project-nomad",
      "desc": "Project N.O.M.A.D, is a self-contained, offline survival computer packed with critical tools, knowledge, and AI to keep you informed and empowered—anytime, anywhere.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1830,
      "added_stars": 13244,
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
      "forks": 1869,
      "added_stars": 3029,
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
      "author": "letta-ai",
      "repo": "claude-subconscious",
      "avatar": "https://github.com/letta-ai.png",
      "repo_link": "https://github.com/letta-ai/claude-subconscious",
      "desc": "Give Claude Code a subconscious",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 154,
      "added_stars": 1112,
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
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The leading agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features enterprise-grade architecture, distributed swarm intelligence, RAG integration, and native Claude Code / Codex Integration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3056,
      "added_stars": 5646,
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
      "author": "DayuanJiang",
      "repo": "next-ai-draw-io",
      "avatar": "https://github.com/DayuanJiang.png",
      "repo_link": "https://github.com/DayuanJiang/next-ai-draw-io",
      "desc": "A next.js web application that integrates AI capabilities with draw.io diagrams. This app allows you to create, modify, and enhance diagrams through natural language commands and AI-assisted visualization.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2653,
      "added_stars": 1492,
      "builtBy": [
        {
          "username": "DayuanJiang",
          "href": "https://github.com/DayuanJiang",
          "avatar": "https://avatars.githubusercontent.com/u/34411969"
        },
        {
          "username": "Biki-dev",
          "href": "https://github.com/Biki-dev",
          "avatar": "https://avatars.githubusercontent.com/u/86558912"
        },
        {
          "username": "ElshadHu",
          "href": "https://github.com/ElshadHu",
          "avatar": "https://avatars.githubusercontent.com/u/216122679"
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
      "forks": 427,
      "added_stars": 390,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1901,
      "added_stars": 1459,
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
      "author": "google-labs-code",
      "repo": "stitch-skills",
      "avatar": "https://github.com/google-labs-code.png",
      "repo_link": "https://github.com/google-labs-code/stitch-skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 383,
      "added_stars": 575,
      "builtBy": [
        {
          "username": "davideast",
          "href": "https://github.com/davideast",
          "avatar": "https://avatars.githubusercontent.com/u/4570265"
        },
        {
          "username": "JLXIA",
          "href": "https://github.com/JLXIA",
          "avatar": "https://avatars.githubusercontent.com/u/43076783"
        },
        {
          "username": "dalmaer",
          "href": "https://github.com/dalmaer",
          "avatar": "https://avatars.githubusercontent.com/u/4770"
        },
        {
          "username": "vinothsubramanian",
          "href": "https://github.com/vinothsubramanian",
          "avatar": "https://avatars.githubusercontent.com/u/7145760"
        },
        {
          "username": "jedborovik",
          "href": "https://github.com/jedborovik",
          "avatar": "https://avatars.githubusercontent.com/u/1231882"
        }
      ]
    },
    {
      "author": "Open-Dev-Society",
      "repo": "OpenStock",
      "avatar": "https://github.com/Open-Dev-Society.png",
      "repo_link": "https://github.com/Open-Dev-Society/OpenStock",
      "desc": "OpenStock is an open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights — built openly, for everyone, forever free.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1345,
      "added_stars": 363,
      "builtBy": [
        {
          "username": "ravixalgorithm",
          "href": "https://github.com/ravixalgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/148683640"
        },
        {
          "username": "koevoet1221",
          "href": "https://github.com/koevoet1221",
          "avatar": "https://avatars.githubusercontent.com/u/76625701"
        },
        {
          "username": "chinnsenn",
          "href": "https://github.com/chinnsenn",
          "avatar": "https://avatars.githubusercontent.com/u/13096352"
        },
        {
          "username": "alexander-schneider",
          "href": "https://github.com/alexander-schneider",
          "avatar": "https://avatars.githubusercontent.com/u/33292100"
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
      "forks": 6498,
      "added_stars": 6588,
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
          "username": "Octane0411",
          "href": "https://github.com/Octane0411",
          "avatar": "https://avatars.githubusercontent.com/u/88922959"
        },
        {
          "username": "synix",
          "href": "https://github.com/synix",
          "avatar": "https://avatars.githubusercontent.com/u/3198234"
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
      "forks": 896,
      "added_stars": 627,
      "builtBy": [
        {
          "username": "kieranklaassen",
          "href": "https://github.com/kieranklaassen",
          "avatar": "https://avatars.githubusercontent.com/u/209089"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 5644,
      "added_stars": 1734,
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
      "forks": 2431,
      "added_stars": 1962,
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
      "forks": 1398,
      "added_stars": 6790,
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
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1839,
      "added_stars": 2916,
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
      "author": "QuantumNous",
      "repo": "new-api",
      "avatar": "https://github.com/QuantumNous.png",
      "repo_link": "https://github.com/QuantumNous/new-api",
      "desc": "A unified AI model hub for aggregation & distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemini-compatible formats. A centralized gateway for personal and enterprise model management. 🍥",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4643,
      "added_stars": 5199,
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
      "author": "smtg-ai",
      "repo": "claude-squad",
      "avatar": "https://github.com/smtg-ai.png",
      "repo_link": "https://github.com/smtg-ai/claude-squad",
      "desc": "Manage multiple AI terminal agents like Claude Code, Codex, OpenCode, and Amp.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 469,
      "added_stars": 555,
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
      "forks": 517,
      "added_stars": 2284,
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
      "forks": 716,
      "added_stars": 1580,
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
      "author": "m1k1o",
      "repo": "neko",
      "avatar": "https://github.com/m1k1o.png",
      "repo_link": "https://github.com/m1k1o/neko",
      "desc": "A self hosted virtual browser that runs in docker and uses WebRTC.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1424,
      "added_stars": 3071,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8176,
      "added_stars": 921,
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
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 330,
      "added_stars": 646,
      "builtBy": [
        {
          "username": "9seconds",
          "href": "https://github.com/9seconds",
          "avatar": "https://avatars.githubusercontent.com/u/831613"
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
        },
        {
          "username": "dolonet",
          "href": "https://github.com/dolonet",
          "avatar": "https://avatars.githubusercontent.com/u/86595509"
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
      "forks": 326,
      "added_stars": 683,
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
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 Take full control of your VPS with 1Panel. Deploy OpenClaw in one click.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3068,
      "added_stars": 962,
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
      "forks": 364,
      "added_stars": 914,
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
      "author": "asheshgoplani",
      "repo": "agent-deck",
      "avatar": "https://github.com/asheshgoplani.png",
      "repo_link": "https://github.com/asheshgoplani/agent-deck",
      "desc": "Terminal session manager for AI coding agents. One TUI for Claude, Gemini, OpenCode, Codex, and more.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 190,
      "added_stars": 676,
      "builtBy": [
        {
          "username": "asheshgoplani",
          "href": "https://github.com/asheshgoplani",
          "avatar": "https://avatars.githubusercontent.com/u/36273585"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "BestSithInEU",
          "href": "https://github.com/BestSithInEU",
          "avatar": "https://avatars.githubusercontent.com/u/67585935"
        },
        {
          "username": "DieracDelta",
          "href": "https://github.com/DieracDelta",
          "avatar": "https://avatars.githubusercontent.com/u/13730968"
        },
        {
          "username": "johnuopini",
          "href": "https://github.com/johnuopini",
          "avatar": "https://avatars.githubusercontent.com/u/2204736"
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
      "forks": 1599,
      "added_stars": 807,
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
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2918,
      "added_stars": 379,
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
      "author": "projectdiscovery",
      "repo": "katana",
      "avatar": "https://github.com/projectdiscovery.png",
      "repo_link": "https://github.com/projectdiscovery/katana",
      "desc": "A next-generation crawling and spidering framework.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1068,
      "added_stars": 759,
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
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2649,
      "added_stars": 2360,
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
      "forks": 212,
      "added_stars": 476,
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
    },
    {
      "author": "looplj",
      "repo": "axonhub",
      "avatar": "https://github.com/looplj.png",
      "repo_link": "https://github.com/looplj/axonhub",
      "desc": "⚡️ Open-source AI Gateway — Use any SDK to call 100+ LLMs. Built-in failover, load balancing, cost control & end-to-end tracing.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 315,
      "added_stars": 715,
      "builtBy": [
        {
          "username": "looplj",
          "href": "https://github.com/looplj",
          "avatar": "https://avatars.githubusercontent.com/u/231043908"
        },
        {
          "username": "djdembeck",
          "href": "https://github.com/djdembeck",
          "avatar": "https://avatars.githubusercontent.com/u/71412966"
        },
        {
          "username": "Silentely",
          "href": "https://github.com/Silentely",
          "avatar": "https://avatars.githubusercontent.com/u/22141172"
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
      "forks": 316,
      "added_stars": 1877,
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
      "author": "coreybutler",
      "repo": "nvm-windows",
      "avatar": "https://github.com/coreybutler.png",
      "repo_link": "https://github.com/coreybutler/nvm-windows",
      "desc": "A node.js version management utility for Windows. Ironically written in Go.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3776,
      "added_stars": 692,
      "builtBy": [
        {
          "username": "coreybutler",
          "href": "https://github.com/coreybutler",
          "avatar": "https://avatars.githubusercontent.com/u/770982"
        },
        {
          "username": "wsobolewski",
          "href": "https://github.com/wsobolewski",
          "avatar": "https://avatars.githubusercontent.com/u/8691776"
        },
        {
          "username": "rahulroy9202",
          "href": "https://github.com/rahulroy9202",
          "avatar": "https://avatars.githubusercontent.com/u/3462467"
        },
        {
          "username": "Excited-ccccly",
          "href": "https://github.com/Excited-ccccly",
          "avatar": "https://avatars.githubusercontent.com/u/5396750"
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
      "forks": 6308,
      "added_stars": 40572,
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
      "forks": 1901,
      "added_stars": 14158,
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
      "forks": 6182,
      "added_stars": 29551,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1372,
      "added_stars": 15560,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "+192 Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 929,
      "added_stars": 5598,
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
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "Secure, Fast, and Extensible Sandbox runtime for AI agents.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 720,
      "added_stars": 8123,
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
      "author": "langchain-ai",
      "repo": "open-swe",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/open-swe",
      "desc": "An Open-Source Asynchronous Coding Agent",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1013,
      "added_stars": 3511,
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
      "author": "mvanhorn",
      "repo": "last30days-skill",
      "avatar": "https://github.com/mvanhorn.png",
      "repo_link": "https://github.com/mvanhorn/last30days-skill",
      "desc": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1148,
      "added_stars": 10394,
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
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7924,
      "added_stars": 12478,
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
          "username": "ZeroAct",
          "href": "https://github.com/ZeroAct",
          "avatar": "https://avatars.githubusercontent.com/u/46982469"
        }
      ]
    },
    {
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2696,
      "added_stars": 16019,
      "builtBy": [
        {
          "username": "D4Vinci",
          "href": "https://github.com/D4Vinci",
          "avatar": "https://avatars.githubusercontent.com/u/20604835"
        },
        {
          "username": "mhillebrand",
          "href": "https://github.com/mhillebrand",
          "avatar": "https://avatars.githubusercontent.com/u/286198"
        },
        {
          "username": "rostchri",
          "href": "https://github.com/rostchri",
          "avatar": "https://avatars.githubusercontent.com/u/2398834"
        },
        {
          "username": "marksmayo",
          "href": "https://github.com/marksmayo",
          "avatar": "https://avatars.githubusercontent.com/u/14829262"
        },
        {
          "username": "ImgBotApp",
          "href": "https://github.com/ImgBotApp",
          "avatar": "https://avatars.githubusercontent.com/u/31427850"
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
      "forks": 2423,
      "added_stars": 3934,
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
      "author": "langchain-ai",
      "repo": "deepagents",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/deepagents",
      "desc": "Agent harness built with LangChain and LangGraph. Equipped with a planning tool, a filesystem backend, and the ability to spawn subagents - well-equipped to handle complex agentic tasks.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2518,
      "added_stars": 8307,
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
      "forks": 3204,
      "added_stars": 8336,
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
      "forks": 1006,
      "added_stars": 5706,
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
          "username": "welshofer",
          "href": "https://github.com/welshofer",
          "avatar": "https://avatars.githubusercontent.com/u/33588582"
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
      "forks": 1891,
      "added_stars": 9902,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用AI大模型，一键生成高清短视频 Generate short videos with one click using AI LLM.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7597,
      "added_stars": 4278,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Unsloth Studio is a web UI for training and running open models like Qwen, DeepSeek, gpt-oss and Gemma locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4954,
      "added_stars": 5894,
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
      "forks": 1643,
      "added_stars": 6655,
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
          "username": "dhollman",
          "href": "https://github.com/dhollman",
          "avatar": "https://avatars.githubusercontent.com/u/100382"
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
      "forks": 2434,
      "added_stars": 8277,
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
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 45269,
      "added_stars": 17261,
      "builtBy": [
        {
          "username": "matheusfelipeog",
          "href": "https://github.com/matheusfelipeog",
          "avatar": "https://avatars.githubusercontent.com/u/50463866"
        },
        {
          "username": "davemachado",
          "href": "https://github.com/davemachado",
          "avatar": "https://avatars.githubusercontent.com/u/15134885"
        },
        {
          "username": "pawelborkar",
          "href": "https://github.com/pawelborkar",
          "avatar": "https://avatars.githubusercontent.com/u/36134699"
        },
        {
          "username": "jbrooksuk",
          "href": "https://github.com/jbrooksuk",
          "avatar": "https://avatars.githubusercontent.com/u/246103"
        },
        {
          "username": "marekdano",
          "href": "https://github.com/marekdano",
          "avatar": "https://avatars.githubusercontent.com/u/1914165"
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
      "forks": 7423,
      "added_stars": 4364,
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
      "forks": 1770,
      "added_stars": 7837,
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
      "author": "ZhuLinsen",
      "repo": "daily_stock_analysis",
      "avatar": "https://github.com/ZhuLinsen.png",
      "repo_link": "https://github.com/ZhuLinsen/daily_stock_analysis",
      "desc": "LLM驱动的 A/H/美股智能分析器：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送，零成本定时运行，纯白嫖. LLM-powered stock analysis system for A/H/US markets.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 27416,
      "added_stars": 12729,
      "builtBy": [
        {
          "username": "ZhuLinsen",
          "href": "https://github.com/ZhuLinsen",
          "avatar": "https://avatars.githubusercontent.com/u/42829555"
        },
        {
          "username": "massif-01",
          "href": "https://github.com/massif-01",
          "avatar": "https://avatars.githubusercontent.com/u/176381099"
        },
        {
          "username": "freesme",
          "href": "https://github.com/freesme",
          "avatar": "https://avatars.githubusercontent.com/u/56824280"
        },
        {
          "username": "adminlove520",
          "href": "https://github.com/adminlove520",
          "avatar": "https://avatars.githubusercontent.com/u/32920883"
        },
        {
          "username": "birdxs",
          "href": "https://github.com/birdxs",
          "avatar": "https://avatars.githubusercontent.com/u/36181736"
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
    },
    {
      "title": "Web UI to play the frequencies of various sets of tuning forks using the Web Audio API",
      "url": "https://github.com/evoluteur/healing-frequencies",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-21T00:51:13.000Z"
    },
    {
      "title": "I Scanned 6 Popular Node.js Repos for Undocumented Environment Variables. Here's What I Found.",
      "url": "https://dev.to/ckmtools/i-scanned-6-popular-nodejs-repos-for-undocumented-environment-variables-heres-what-i-found-5478",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-20T08:16:25.000Z"
    },
    {
      "title": "I Wrapped My Free npm Package as a Paid REST API — Here's the Architecture",
      "url": "https://dev.to/ckmtools/i-wrapped-my-free-npm-package-as-a-paid-rest-api-heres-the-architecture-24p9",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-18T07:15:33.000Z"
    },
    {
      "title": "Built an open source SVG brand library with 4,700+ icons",
      "url": "https://github.com/glincker/thesvg",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-18T03:58:20.000Z"
    },
    {
      "title": "Why Node.js Needs A Virtual File System",
      "url": "https://blog.platformatic.dev/why-nodejs-needs-a-virtual-file-system",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-17T18:06:14.000Z"
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
      "title": "How to use Timberborn 🦫 (yes, the beaver city-building game) as a database 💾",
      "description": "So, one of my favourite games lately, Timberborn, has released its 1.0 version and finally left early...",
      "url": "https://dev.to/thormeier/how-to-use-timberborn-yes-the-beaver-city-building-game-as-a-database-489c",
      "tags": "webdev, programming, javascript, donttrythisathome",
      "reactions": 17,
      "comments": 1,
      "reading_time": 5,
      "author": "thormeier"
    },
    {
      "title": "Why Daily Standups Are Becoming Useless in the AI Era",
      "description": "Daily standups used to be a coordination tool. Today, with better async workflows and AI-assisted status sharing, they often waste engineering time at scale.",
      "url": "https://dev.to/oler/why-daily-standups-are-becoming-useless-in-the-ai-era-iao",
      "tags": "agile, standup, ai, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "oler"
    },
    {
      "title": "How to Store Secrets in the Mac Keychain (and Use Them Like Environment Variables)",
      "description": "I used to keep API keys in .env because it was fast. Then I caught myself grepping my home folder for...",
      "url": "https://dev.to/alsaheem/how-to-store-secrets-in-the-mac-keychain-and-use-them-like-environment-variables-1aj7",
      "tags": "macos, security, keychain, bash",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "alsaheem"
    },
    {
      "title": "your agent can think. it can't remember.",
      "description": "TLDR: ghost gives your agent instant, ephemeral postgres databases. unlimited databases, unlimited...",
      "url": "https://dev.to/ghostbuild/your-agent-can-think-it-cant-remember-5e1o",
      "tags": "ai, mcp, postgres, agents",
      "reactions": 147,
      "comments": 44,
      "reading_time": 7,
      "author": "ghostdotbuild"
    },
    {
      "title": "Stop Writing Custom Importers: Import Multilingual Data in Drupal with Migrate API",
      "description": "Most Drupal developers still write custom importers for external data.  In many cases, that’s...",
      "url": "https://dev.to/baikho/stop-writing-custom-importers-import-multilingual-data-in-drupal-with-migrate-api-m35",
      "tags": "drupal, php, opensource, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "baikho"
    },
    {
      "title": "Cross Cloud Multi Agent Comic Builder with ADK, Amazon Fargate, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build low code...",
      "url": "https://dev.to/gde/cross-cloud-multi-agent-comic-builder-with-adk-amazon-fargate-and-gemini-cli-16k9",
      "tags": "gemini, googleadk, googlecloudplatform, python",
      "reactions": 7,
      "comments": 2,
      "reading_time": 7,
      "author": "xbill"
    },
    {
      "title": "Decoding Bronze Age Paperwork: Modern AI vs. Ancient Assyrian Clay Tablets",
      "description": "Four thousand years ago, Assyrian merchants were doing what people have always done: tracking debts,...",
      "url": "https://dev.to/gde/decoding-bronze-age-paperwork-modern-ai-vs-ancient-assyrian-clay-tablets-5adf",
      "tags": "ai, kaggle, gemini, vertexai",
      "reactions": 14,
      "comments": 4,
      "reading_time": 15,
      "author": "erturul_demir_695474ad8d"
    },
    {
      "title": "Modular Monolith Architecture in .NET: The Pragmatic Middle Ground",
      "description": "The Problem No One Talks About in the Microservices Hype   It's 2019. Your team has just...",
      "url": "https://dev.to/aldacosta/modular-monolith-architecture-in-net-the-pragmatic-middle-ground-2fm5",
      "tags": "dotnet, architecture",
      "reactions": 4,
      "comments": 0,
      "reading_time": 8,
      "author": "aldacosta"
    },
    {
      "title": "Understanding Object-Oriented Programming in JavaScript",
      "description": "Introduction   Hey there, fellow developer!   Imagine building a massive web app where your...",
      "url": "https://dev.to/ritam369/understanding-object-oriented-programming-in-javascript-570e",
      "tags": "javascript, programming, backend, webdev",
      "reactions": 2,
      "comments": 0,
      "reading_time": 4,
      "author": "ritam369"
    },
    {
      "title": "I'm so sick of my editor telling me how great I am. Not that I'm not great.",
      "description": "A post by Ben Halpern",
      "url": "https://dev.to/ben/im-so-sick-of-my-editor-telling-me-how-great-i-am-not-that-im-not-great-2oam",
      "tags": "",
      "reactions": 5,
      "comments": 3,
      "reading_time": 0,
      "author": "ben"
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
      "title": "heerich.js - A tiny engine for 3D voxel scenes rendered to SVG",
      "url": "https://meodai.github.io/heerich",
      "score": 3,
      "comments": 1,
      "tags": [
        "art",
        "javascript"
      ],
      "id": "qqpc7k"
    },
    {
      "title": "libeatmydata - disable fsync and SAVE",
      "url": "https://www.flamingspork.com/projects/libeatmydata/",
      "score": 2,
      "comments": 3,
      "tags": [
        "databases",
        "performance"
      ],
      "id": "dblov3"
    },
    {
      "title": "AI Hot Takes From A Platform Engineer / SRE - Alienchow",
      "url": "https://alienchow.dev/post/ai_takeaways_mar_2026/",
      "score": 0,
      "comments": 0,
      "tags": [
        "devops",
        "vibecoding"
      ],
      "id": "vodhvg"
    },
    {
      "title": "6o6 v1.1: Faster 6502-on-6502 virtualization for a C64/Apple II Apple-1 emulator",
      "url": "http://oldvcr.blogspot.com/2026/03/6o6-v11-faster-6502-on-6502.html",
      "score": 7,
      "comments": 0,
      "tags": [
        "retrocomputing"
      ],
      "id": "sy7ctg"
    },
    {
      "title": "Legacy PC design misery",
      "url": "https://mjg59.livejournal.com/118098.html",
      "score": 8,
      "comments": 0,
      "tags": [
        "retrocomputing"
      ],
      "id": "bywfs1"
    },
    {
      "title": "When All You Can Do Is All or Nothing, Do Nothing",
      "url": "https://csswizardry.com/2026/03/when-all-you-can-do-is-all-or-nothing-do-nothing/",
      "score": 8,
      "comments": 0,
      "tags": [
        "browsers",
        "performance",
        "web"
      ],
      "id": "nzckry"
    },
    {
      "title": "I Decompiled the White House's New App",
      "url": "https://blog.thereallo.dev/blog/decompiling-the-white-house-app",
      "score": 49,
      "comments": 8,
      "tags": [
        "android"
      ],
      "id": "2zvgxm"
    },
    {
      "title": "Learn Something Old Every Day, Part XVIII: How Does FPU Detection Work?",
      "url": "http://www.os2museum.com/wp/learn-something-old-every-day-part-xviii-how-does-fpu-detection-work/",
      "score": 1,
      "comments": 0,
      "tags": [
        "assembly",
        "hardware",
        "historical"
      ],
      "id": "wbzimj"
    },
    {
      "title": "BubbleWrap your dev env and agents",
      "url": "https://dpc.pw/posts/bubblewrap-your-dev-env-and-agents/",
      "score": 14,
      "comments": 8,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "u4bws9"
    },
    {
      "title": "Linux is an interpreter",
      "url": "https://astrid.tech/2026/03/28/0/linux-is-an-interpreter/",
      "score": 26,
      "comments": 0,
      "tags": [
        "linux"
      ],
      "id": "wy4ndf"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "wangzhangwu",
      "descendants": 15,
      "id": 47560380,
      "kids": [
        47560881,
        47560798,
        47560542,
        47560821,
        47560745,
        47560711,
        47560393,
        47560601,
        47560531,
        47560381,
        47560555,
        47560650
      ],
      "score": 53,
      "time": 1774758373,
      "title": "OpenYak – An open-source Cowork that runs any model and owns your filesystem",
      "type": "story",
      "url": "https://github.com/openyak/desktop"
    },
    {
      "by": "bob_theslob646",
      "descendants": 193,
      "id": 47556729,
      "kids": [
        47557260,
        47558260,
        47560794,
        47558681,
        47557038,
        47560766,
        47557106,
        47557780,
        47557494,
        47559859,
        47558051,
        47558970,
        47558252,
        47556934,
        47560295,
        47557022,
        47556872,
        47558312,
        47557019,
        47556975,
        47559012,
        47559222,
        47557150,
        47556907,
        47557107,
        47558804,
        47557528,
        47557543,
        47559071,
        47558708,
        47557129,
        47557577,
        47560124,
        47557461,
        47558527,
        47559585,
        47556887,
        47558489,
        47558539,
        47557692,
        47557326
      ],
      "score": 878,
      "time": 1774719589,
      "title": "Founder of GitLab battles cancer by founding companies",
      "type": "story",
      "url": "https://sytse.com/cancer/"
    },
    {
      "by": "msephton",
      "descendants": 63,
      "id": 47557960,
      "kids": [
        47560880,
        47560823,
        47558631,
        47558242,
        47560421,
        47558097,
        47559047,
        47558852,
        47560737,
        47559617,
        47558083,
        47558087,
        47558395,
        47558861,
        47559428,
        47559417,
        47559580,
        47558121,
        47558296,
        47559592,
        47558806,
        47558376,
        47558228,
        47560618,
        47558311,
        47559102,
        47559181,
        47559629,
        47559715,
        47559499,
        47558541,
        47559754,
        47558678,
        47558027
      ],
      "score": 270,
      "time": 1774730341,
      "title": "CSS is DOOMed",
      "type": "story",
      "url": "https://nielsleenheer.com/articles/2026/css-is-doomed-rendering-doom-in-3d-with-css/"
    },
    {
      "by": "oldfrenchfries",
      "descendants": 448,
      "id": 47554773,
      "kids": [
        47556125,
        47556522,
        47555768,
        47555527,
        47555285,
        47555140,
        47555632,
        47560683,
        47560377,
        47555406,
        47560308,
        47555572,
        47554981,
        47555379,
        47556026,
        47558560,
        47559337,
        47556197,
        47556280,
        47555453,
        47560267,
        47557234,
        47555438,
        47557293,
        47556992,
        47556463,
        47560473,
        47555167,
        47558981,
        47559332,
        47556094,
        47559249,
        47555304,
        47558137,
        47556476,
        47556318,
        47557774,
        47558652,
        47556974,
        47555675,
        47555454,
        47557449,
        47556774,
        47556686,
        47555713,
        47555086,
        47556023,
        47556718,
        47555824,
        47559089,
        47556417,
        47555855,
        47555423,
        47560249,
        47556372,
        47555942,
        47556893,
        47555629,
        47557442,
        47555452,
        47559397,
        47556434,
        47554776,
        47556439,
        47555233,
        47558701,
        47556397,
        47559167,
        47555916,
        47558130,
        47555663,
        47555854,
        47555139,
        47556855,
        47556109,
        47556351,
        47555869,
        47555383,
        47555143,
        47555670,
        47560556,
        47559179,
        47558520,
        47559380,
        47558587,
        47557807,
        47559544,
        47556542,
        47558245,
        47556910,
        47555889,
        47557373,
        47558880,
        47556672,
        47555886,
        47557143,
        47556449,
        47558566,
        47555199,
        47555945,
        47555890,
        47556195,
        47555146,
        47555323,
        47555125,
        47555108
      ],
      "score": 595,
      "text": "<a href=\"https:&#x2F;&#x2F;arxiv.org&#x2F;abs&#x2F;2602.14270\" rel=\"nofollow\">https:&#x2F;&#x2F;arxiv.org&#x2F;abs&#x2F;2602.14270</a><p><a href=\"https:&#x2F;&#x2F;www.science.org&#x2F;doi&#x2F;10.1126&#x2F;science.aec8352\" rel=\"nofollow\">https:&#x2F;&#x2F;www.science.org&#x2F;doi&#x2F;10.1126&#x2F;science.aec8352</a>",
      "time": 1774706913,
      "title": "AI overly affirms users asking for personal advice",
      "type": "story",
      "url": "https://news.stanford.edu/stories/2026/03/ai-advice-sycophantic-models-research"
    },
    {
      "by": "bookofjoe",
      "descendants": 46,
      "id": 47559481,
      "kids": [
        47559685,
        47560469,
        47559763,
        47559988,
        47560299,
        47559701,
        47560539,
        47560451,
        47559688,
        47559729,
        47559898,
        47559907,
        47560364,
        47559751,
        47560182,
        47560189,
        47559714,
        47559698
      ],
      "score": 89,
      "time": 1774745610,
      "title": "Alzheimer's disease mortality among taxi and ambulance drivers (2024)",
      "type": "story",
      "url": "https://www.bmj.com/content/387/bmj-2024-082194"
    },
    {
      "by": "signa11",
      "descendants": 3,
      "id": 47528853,
      "kids": [
        47560047
      ],
      "score": 49,
      "time": 1774522056,
      "title": "A Verilog to Factorio Compiler and Simulator (Working RISC-V CPU)",
      "type": "story",
      "url": "https://github.com/ben-j-c/verilog2factorio"
    },
    {
      "by": "jcmartinezdev",
      "descendants": 15,
      "id": 47508078,
      "kids": [
        47560625,
        47560871,
        47560633,
        47560804,
        47560626,
        47560620,
        47560757
      ],
      "score": 23,
      "time": 1774381796,
      "title": "The case for becoming a manager",
      "type": "story",
      "url": "https://newsletter.thelongcommit.com/p/the-case-for-becoming-a-manager"
    },
    {
      "by": "rbanffy",
      "descendants": 8,
      "id": 47543186,
      "kids": [
        47559408,
        47560519,
        47560306,
        47560316
      ],
      "score": 78,
      "time": 1774622391,
      "title": "OpenBSD on Motorola 88000 Processors",
      "type": "story",
      "url": "http://miod.online.fr/software/openbsd/stories/m88k1.html"
    },
    {
      "by": "Kirkman14",
      "descendants": 1,
      "id": 47536306,
      "kids": [
        47536307
      ],
      "score": 17,
      "time": 1774562058,
      "title": "The ANSI art \"telecomics\" of the 1992 election",
      "type": "story",
      "url": "https://breakintochat.com/blog/2026/03/25/don-lokke-and-mack-the-mouse/"
    },
    {
      "by": "mean_mistreater",
      "descendants": 122,
      "id": 47557166,
      "kids": [
        47558172,
        47558377,
        47560678,
        47558360,
        47558842,
        47558628,
        47557876,
        47558887,
        47557425,
        47558948,
        47558555
      ],
      "score": 186,
      "text": "<i>Knuth Claude&#x27;s Cycles note update: problem now fully solved, by LLMs</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47306926\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47306926</a> - March 2026 (2 comments)<p><a href=\"https:&#x2F;&#x2F;chatgpt.com&#x2F;share&#x2F;69aaab4b-888c-8003-9a02-d1df80f9c791\" rel=\"nofollow\">https:&#x2F;&#x2F;chatgpt.com&#x2F;share&#x2F;69aaab4b-888c-8003-9a02-d1df80f9c7...</a><p><i>Claude&#x27;s Cycles [pdf]</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47230710\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47230710</a> - March 2026 (362 comments)",
      "time": 1774723139,
      "title": "Further human + AI + proof assistant work on Knuth's \"Claude Cycles\" problem",
      "type": "story",
      "url": "https://twitter.com/BoWang87/status/2037648937453232504"
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
      "title": "How I Almost Burned Out Doing Everything “Right”",
      "description": "Today I wanted to write a philosophical essay about AI. Or maybe something more technical. But once...",
      "url": "https://dev.to/sylwia-lask/how-i-almost-burned-out-doing-everything-right-31j6",
      "tags": "discuss, career, productivity, mentalhealth",
      "reactions": 99,
      "comments": 78,
      "reading_time": 6,
      "author": "sylwia-lask"
    },
    {
      "title": "The Day I Realized It Wasn’t Just About Skills",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience  I used to believe...",
      "url": "https://dev.to/samarth28/the-day-i-realized-it-wasnt-just-about-skills-7pn",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 2,
      "comments": 0,
      "reading_time": 2,
      "author": "samarth28"
    },
    {
      "title": "HOW A REQUEST ORGINATES FROM CLIENT AND REACHES THE SERVER?",
      "description": "How a Request Travels from Client to Server  A client is simply the end user who makes a request,...",
      "url": "https://dev.to/ashiq_omar/how-a-request-orginates-from-client-and-reaches-the-server-6b9",
      "tags": "ai, beginners, devops, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "ashiq_omar"
    },
    {
      "title": "Nobody Is Firing Their Doctor Because WebMD Exists. So Why Do People Think AI Will Replace Software Engineers?",
      "description": "Somewhere between ChatGPT writing its first Hello World and the fifteenth LinkedIn post this week...",
      "url": "https://dev.to/szglabs/nobody-is-firing-their-doctor-because-webmd-exists-so-why-do-people-think-ai-will-replace-software-2068",
      "tags": "devops, ai, career, programming",
      "reactions": 1,
      "comments": 1,
      "reading_time": 5,
      "author": "szglabs"
    },
    {
      "title": "SQL: The Foundation you Need",
      "description": "SQL Is a Literacy Skill. Treat It Like One.  If you had a MySpace or other early social media...",
      "url": "https://dev.to/katkeilty/sql-the-foundation-you-need-4i3l",
      "tags": "sql, productivity, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "katkeilty"
    },
    {
      "title": "Your BGP and OSPF Skills Are Worth $150K–$208K in Cloud Architecture — Here's the Career Map",
      "description": "If you're a network engineer who knows BGP path selection, OSPF area design, and IPsec tunnel...",
      "url": "https://dev.to/firstpasslab/your-bgp-and-ospf-skills-are-worth-150k-208k-in-cloud-architecture-heres-the-career-map-1l6j",
      "tags": "networking, cloud, devops, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "firstpasslab"
    },
    {
      "title": "What is vCon and Why Should We Care?",
      "description": "This week, I came across something at Spring vCon 2026 that completely changed how I think about...",
      "url": "https://dev.to/yoditdevn8n/what-is-vcon-and-why-should-we-care-8l2",
      "tags": "ai, career, interview, privacy",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "yoditdevn8n"
    },
    {
      "title": "Why I'm Finally Starting to Write",
      "description": "I've had a Dev.to account for two years. Zero Posts.   Not because I have nothing to say....",
      "url": "https://dev.to/ejlan/why-im-finally-starting-to-write-4cak",
      "tags": "career, rust, systems",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "ejlan"
    },
    {
      "title": "Why an SRE Engineer Built a Product Validation Tool — Bringing Observability Thinking to Product Development",
      "description": "\"Why Would an SRE Build a Product Tool?\"   I get asked this a lot.  By day, I'm an SRE...",
      "url": "https://dev.to/toshipon/why-an-sre-engineer-built-a-product-validation-tool-bringing-observability-thinking-to-product-1iml",
      "tags": "career, webdev, ai, startup",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "toshipon"
    },
    {
      "title": "The Complete Remote Job Search Strategy for Developers in 2026",
      "description": "The remote job market for developers has changed dramatically since the post-pandemic boom. The...",
      "url": "https://dev.to/__be2942592/the-complete-remote-job-search-strategy-for-developers-in-2026-211c",
      "tags": "career, developers, softwaredevelopment, workplace",
      "reactions": 1,
      "comments": 0,
      "reading_time": 12,
      "author": "__be2942592"
    }
  ]
}
```

