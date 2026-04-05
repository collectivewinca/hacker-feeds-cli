# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-05 06:40:22 UTC

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
      "repo": "oh-my-codex",
      "avatar": "https://github.com/Yeachan-Heo.png",
      "repo_link": "https://github.com/Yeachan-Heo/oh-my-codex",
      "desc": "OmX - Oh My codeX: Your codex is not alone. Add hooks, agent teams, HUDs, and so much more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1503,
      "added_stars": 12108,
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
          "username": "HaD0Yun",
          "href": "https://github.com/HaD0Yun",
          "avatar": "https://avatars.githubusercontent.com/u/102889891"
        },
        {
          "username": "junhoyeo",
          "href": "https://github.com/junhoyeo",
          "avatar": "https://avatars.githubusercontent.com/u/32605822"
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
      "forks": 1417,
      "added_stars": 9913,
      "builtBy": [
        {
          "username": "siddharthvaddem",
          "href": "https://github.com/siddharthvaddem",
          "avatar": "https://avatars.githubusercontent.com/u/70214527"
        },
        {
          "username": "EtienneLescot",
          "href": "https://github.com/EtienneLescot",
          "avatar": "https://avatars.githubusercontent.com/u/215859519"
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
        }
      ]
    },
    {
      "author": "Yeachan-Heo",
      "repo": "oh-my-claudecode",
      "avatar": "https://github.com/Yeachan-Heo.png",
      "repo_link": "https://github.com/Yeachan-Heo/oh-my-claudecode",
      "desc": "Teams-first Multi-agent orchestration for Claude Code",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2185,
      "added_stars": 9232,
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
          "username": "blue-int",
          "href": "https://github.com/blue-int",
          "avatar": "https://avatars.githubusercontent.com/u/42234614"
        },
        {
          "username": "devseunggwan",
          "href": "https://github.com/devseunggwan",
          "avatar": "https://avatars.githubusercontent.com/u/60123681"
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
      "forks": 711,
      "added_stars": 2054,
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
        },
        {
          "username": "penggaolai",
          "href": "https://github.com/penggaolai",
          "avatar": "https://avatars.githubusercontent.com/u/44097312"
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
      "forks": 997,
      "added_stars": 1489,
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
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need - A nano claude code–like 「agent harness」, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7798,
      "added_stars": 6766,
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
      "author": "yamadashy",
      "repo": "repomix",
      "avatar": "https://github.com/yamadashy.png",
      "repo_link": "https://github.com/yamadashy/repomix",
      "desc": "📦 Repomix is a powerful tool that packs your entire repository into a single, AI-friendly file. Perfect for when you need to feed your codebase to Large Language Models (LLMs) or other AI tools like Claude, ChatGPT, DeepSeek, Perplexity, Gemini, Gemma, Llama, Grok, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1101,
      "added_stars": 348,
      "builtBy": [
        {
          "username": "yamadashy",
          "href": "https://github.com/yamadashy",
          "avatar": "https://avatars.githubusercontent.com/u/5019072"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "dreamhunter2333",
      "repo": "cloudflare_temp_email",
      "avatar": "https://github.com/dreamhunter2333.png",
      "repo_link": "https://github.com/dreamhunter2333/cloudflare_temp_email",
      "desc": "CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4776,
      "added_stars": 606,
      "builtBy": [
        {
          "username": "dreamhunter2333",
          "href": "https://github.com/dreamhunter2333",
          "avatar": "https://avatars.githubusercontent.com/u/32295532"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Bowl42",
          "href": "https://github.com/Bowl42",
          "avatar": "https://avatars.githubusercontent.com/u/250666564"
        },
        {
          "username": "oneisall8955",
          "href": "https://github.com/oneisall8955",
          "avatar": "https://avatars.githubusercontent.com/u/44989283"
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
      "forks": 44061,
      "added_stars": 2154,
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
      "author": "simstudioai",
      "repo": "sim",
      "avatar": "https://github.com/simstudioai.png",
      "repo_link": "https://github.com/simstudioai/sim",
      "desc": "Build, deploy, and orchestrate AI agents. Sim is the central intelligence layer for your AI workforce.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3493,
      "added_stars": 360,
      "builtBy": [
        {
          "username": "waleedlatif1",
          "href": "https://github.com/waleedlatif1",
          "avatar": "https://avatars.githubusercontent.com/u/40672544"
        },
        {
          "username": "icecrasher321",
          "href": "https://github.com/icecrasher321",
          "avatar": "https://avatars.githubusercontent.com/u/17950982"
        },
        {
          "username": "emir-karabeg",
          "href": "https://github.com/emir-karabeg",
          "avatar": "https://avatars.githubusercontent.com/u/78010029"
        },
        {
          "username": "Sg312",
          "href": "https://github.com/Sg312",
          "avatar": "https://avatars.githubusercontent.com/u/33737564"
        },
        {
          "username": "aadamgough",
          "href": "https://github.com/aadamgough",
          "avatar": "https://avatars.githubusercontent.com/u/77861281"
        }
      ]
    },
    {
      "author": "HenryNdubuaku",
      "repo": "maths-cs-ai-compendium",
      "avatar": "https://github.com/HenryNdubuaku.png",
      "repo_link": "https://github.com/HenryNdubuaku/maths-cs-ai-compendium",
      "desc": "Become a cracked AI/ML Research Engineer",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 418,
      "added_stars": 1113,
      "builtBy": [
        {
          "username": "HenryNdubuaku",
          "href": "https://github.com/HenryNdubuaku",
          "avatar": "https://avatars.githubusercontent.com/u/26547576"
        },
        {
          "username": "KDachev4",
          "href": "https://github.com/KDachev4",
          "avatar": "https://avatars.githubusercontent.com/u/68513852"
        }
      ]
    },
    {
      "author": "vadimdemedes",
      "repo": "ink",
      "avatar": "https://github.com/vadimdemedes.png",
      "repo_link": "https://github.com/vadimdemedes/ink",
      "desc": "🌈 React for interactive command-line apps",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 936,
      "added_stars": 1342,
      "builtBy": [
        {
          "username": "sindresorhus",
          "href": "https://github.com/sindresorhus",
          "avatar": "https://avatars.githubusercontent.com/u/170270"
        },
        {
          "username": "vadimdemedes",
          "href": "https://github.com/vadimdemedes",
          "avatar": "https://avatars.githubusercontent.com/u/697676"
        },
        {
          "username": "costajohnt",
          "href": "https://github.com/costajohnt",
          "avatar": "https://avatars.githubusercontent.com/u/14304404"
        },
        {
          "username": "clicktodev",
          "href": "https://github.com/clicktodev",
          "avatar": "https://avatars.githubusercontent.com/u/34947993"
        },
        {
          "username": "LitoMore",
          "href": "https://github.com/LitoMore",
          "avatar": "https://avatars.githubusercontent.com/u/8186898"
        }
      ]
    },
    {
      "author": "smol-ai",
      "repo": "GodMode",
      "avatar": "https://github.com/smol-ai.png",
      "repo_link": "https://github.com/smol-ai/GodMode",
      "desc": "AI Chat Browser: Fast, Full webapp access to ChatGPT / Claude / Bard / Bing / Llama2! I use this 20 times a day.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 438,
      "added_stars": 305,
      "builtBy": [
        {
          "username": "swyxio",
          "href": "https://github.com/swyxio",
          "avatar": "https://avatars.githubusercontent.com/u/6764957"
        },
        {
          "username": "seanoliver",
          "href": "https://github.com/seanoliver",
          "avatar": "https://avatars.githubusercontent.com/u/882952"
        },
        {
          "username": "chriscarrollsmith",
          "href": "https://github.com/chriscarrollsmith",
          "avatar": "https://avatars.githubusercontent.com/u/75859865"
        },
        {
          "username": "jmxo",
          "href": "https://github.com/jmxo",
          "avatar": "https://avatars.githubusercontent.com/u/90765930"
        },
        {
          "username": "mwyywm",
          "href": "https://github.com/mwyywm",
          "avatar": "https://avatars.githubusercontent.com/u/31932525"
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
      "forks": 1651,
      "added_stars": 7494,
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
          "username": "touwaeriol",
          "href": "https://github.com/touwaeriol",
          "avatar": "https://avatars.githubusercontent.com/u/52620633"
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
      "forks": 4956,
      "added_stars": 5917,
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
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "CyberStrikeAI is an AI-native security testing platform built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 536,
      "added_stars": 2086,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1776,
      "added_stars": 5178,
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
      "added_stars": 3116,
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
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1886,
      "added_stars": 2480,
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
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 337,
      "added_stars": 822,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 723,
      "added_stars": 1511,
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
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2944,
      "added_stars": 683,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 330,
      "added_stars": 706,
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
      "author": "smtg-ai",
      "repo": "claude-squad",
      "avatar": "https://github.com/smtg-ai.png",
      "repo_link": "https://github.com/smtg-ai/claude-squad",
      "desc": "Manage multiple AI terminal agents like Claude Code, Codex, OpenCode, and Amp.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 476,
      "added_stars": 648,
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
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 379,
      "added_stars": 848,
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
      "author": "fengshao1227",
      "repo": "ccg-workflow",
      "avatar": "https://github.com/fengshao1227.png",
      "repo_link": "https://github.com/fengshao1227/ccg-workflow",
      "desc": "多模型协作开发系统 - Claude 编排 + Codex 后端 + Gemini 前端，28 个命令覆盖开发全流程，一键安装零配置",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 360,
      "added_stars": 2062,
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
      "author": "canopy-network",
      "repo": "canopy",
      "avatar": "https://github.com/canopy-network.png",
      "repo_link": "https://github.com/canopy-network/canopy",
      "desc": "The official go implementation of the Canopy Network protocol",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 12485,
      "added_stars": 7677,
      "builtBy": [
        {
          "username": "andrewnguyen22",
          "href": "https://github.com/andrewnguyen22",
          "avatar": "https://avatars.githubusercontent.com/u/18633790"
        },
        {
          "username": "rem1niscence",
          "href": "https://github.com/rem1niscence",
          "avatar": "https://avatars.githubusercontent.com/u/3951338"
        },
        {
          "username": "pablocampogo",
          "href": "https://github.com/pablocampogo",
          "avatar": "https://avatars.githubusercontent.com/u/38480731"
        },
        {
          "username": "ECHOAD",
          "href": "https://github.com/ECHOAD",
          "avatar": "https://avatars.githubusercontent.com/u/61519310"
        },
        {
          "username": "ezeike",
          "href": "https://github.com/ezeike",
          "avatar": "https://avatars.githubusercontent.com/u/12902351"
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
      "forks": 1072,
      "added_stars": 820,
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
      "author": "GopeedLab",
      "repo": "gopeed",
      "avatar": "https://github.com/GopeedLab.png",
      "repo_link": "https://github.com/GopeedLab/gopeed",
      "desc": "A fast, modern download manager for HTTP, BitTorrent, Magnet, and ED2K. Cross-platform, built with Golang and Flutter.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1607,
      "added_stars": 863,
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
      "author": "mudler",
      "repo": "LocalAI",
      "avatar": "https://github.com/mudler.png",
      "repo_link": "https://github.com/mudler/LocalAI",
      "desc": "LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3862,
      "added_stars": 1778,
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
      "author": "openimsdk",
      "repo": "open-im-server",
      "avatar": "https://github.com/openimsdk.png",
      "repo_link": "https://github.com/openimsdk/open-im-server",
      "desc": "IM Chat OpenClaw",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2849,
      "added_stars": 445,
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
      "author": "wavetermdev",
      "repo": "waveterm",
      "avatar": "https://github.com/wavetermdev.png",
      "repo_link": "https://github.com/wavetermdev/waveterm",
      "desc": "An open-source, AI-integrated, cross-platform terminal for seamless workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 881,
      "added_stars": 1578,
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
      "forks": 7238,
      "added_stars": 45023,
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
      "forks": 3292,
      "added_stars": 22900,
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
          "username": "erosika",
          "href": "https://github.com/erosika",
          "avatar": "https://avatars.githubusercontent.com/u/56565191"
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
      "forks": 7204,
      "added_stars": 33651,
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
      "forks": 3055,
      "added_stars": 14451,
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
      "forks": 1485,
      "added_stars": 14994,
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
      "author": "langchain-ai",
      "repo": "open-swe",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/open-swe",
      "desc": "An Open-Source Asynchronous Coding Agent",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1047,
      "added_stars": 3908,
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
      "forks": 8562,
      "added_stars": 15924,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1478,
      "added_stars": 16417,
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
      "desc": "220+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1158,
      "added_stars": 7028,
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
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3270,
      "added_stars": 8657,
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
      "forks": 2681,
      "added_stars": 9288,
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
      "forks": 2447,
      "added_stars": 4059,
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
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1167,
      "added_stars": 6311,
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
      "author": "microsoft",
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4133,
      "added_stars": 12552,
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
          "username": "MSJwyu",
          "href": "https://github.com/MSJwyu",
          "avatar": "https://avatars.githubusercontent.com/u/39176643"
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
      "forks": 2878,
      "added_stars": 10318,
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
      "author": "vectorize-io",
      "repo": "hindsight",
      "avatar": "https://github.com/vectorize-io.png",
      "repo_link": "https://github.com/vectorize-io/hindsight",
      "desc": "Hindsight: Agent Memory That Learns",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 420,
      "added_stars": 5109,
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
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8680,
      "added_stars": 4137,
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
      "desc": "Unsloth Studio is a web UI for training and running open models like Qwen3.5, Gemma 4, DeepSeek, gpt-oss locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5044,
      "added_stars": 6423,
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
      "author": "hacksider",
      "repo": "Deep-Live-Cam",
      "avatar": "https://github.com/hacksider.png",
      "repo_link": "https://github.com/hacksider/Deep-Live-Cam",
      "desc": "real time face swap and one-click video deepfake with only a single image",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12855,
      "added_stars": 8669,
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
          "username": "laurigates",
          "href": "https://github.com/laurigates",
          "avatar": "https://avatars.githubusercontent.com/u/13014001"
        },
        {
          "username": "pereiraroland26",
          "href": "https://github.com/pereiraroland26",
          "avatar": "https://avatars.githubusercontent.com/u/52257639"
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
      "forks": 1787,
      "added_stars": 7064,
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
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3277,
      "added_stars": 6160,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "easy-live2d v0.4.0: A Milestone Release for Live2D on the Web",
      "url": "https://github.com/Panzer-Jack/easy-live2d",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-04-04T14:56:44.000Z"
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
      "reactions": 293,
      "comments": 75,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "LoreKit - AI That GMs Full TTRPG Campaigns",
      "description": "An open-source engine that turns AI into a real Game Master - with deterministic dice, persistent NPCs, and full campaign tracking.",
      "url": "https://dev.to/matluz/i-built-an-ai-that-gms-full-ttrpg-campaigns-774",
      "tags": "opensource, python, ai, gamedev",
      "reactions": 2,
      "comments": 0,
      "reading_time": 4,
      "author": "matluz"
    },
    {
      "title": "Deploying ADK Agents on Azure ACI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Agents in...",
      "url": "https://dev.to/gde/deploying-adk-agents-on-azure-aci-2jk6",
      "tags": "geminillm, agents, python, azureaci",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Deploy Gemma 4 on Cloud Run: Pay Only When You Actually Use It",
      "description": "Last year, Google flew me to Paris for the announcement of Gemma 3. It was an exciting event. The...",
      "url": "https://dev.to/gde/deploy-gemma-4-on-cloud-run-pay-only-when-you-actually-use-it-9ln",
      "tags": "gemma, cloudrun, cloud, ai",
      "reactions": 5,
      "comments": 2,
      "reading_time": 18,
      "author": "kulaone"
    },
    {
      "title": "Observability from Day One: What We Got Wrong in v1 and How We Fixed It in v2",
      "description": "The worst kind of production incident is the one where you're staring at a broken system and you have...",
      "url": "https://dev.to/oliverke/observability-from-day-one-what-we-got-wrong-in-v1-and-how-we-fixed-it-in-v2-36lc",
      "tags": "webdev, productivity, devops, architecture",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "oliverke"
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
      "title": "Deploying ADK Agents on Azure ACA (Azure Container Apps)",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Agents in...",
      "url": "https://dev.to/gde/deploying-adk-agents-on-azure-aca-azure-container-apps-3kb7",
      "tags": "gemini, azurecontainerapps, agents, googleadk",
      "reactions": 3,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "I Analyzed AI Coding Mistakes and Built an ESLint Plugin to Catch Them",
      "description": "After reviewing empirical studies on LLM-generated bugs, I built eslint-plugin-llm-core — 20 rules designed to catch the mistakes AI coding assistants make most often.",
      "url": "https://dev.to/pertrai1/i-analyzed-500-ai-coding-mistakes-and-built-an-eslint-plugin-to-catch-them-jme",
      "tags": "typescript, eslint, ai, llm",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "pertrai1"
    },
    {
      "title": "How to create your own Radio Station using a dynamic ip domain.",
      "description": "In previous posts “Steps to configure Dehydrated for ZeroSSL and Let’s Encrypt” and “Steps to...",
      "url": "https://dev.to/djemos/how-to-create-your-own-radio-station-using-a-dynamic-ip-domain-ini",
      "tags": "",
      "reactions": 4,
      "comments": 0,
      "reading_time": 13,
      "author": "djemos"
    },
    {
      "title": "You don't need to deal with code to understand Playwright",
      "description": "Trywright is a local control panel that gives you a live Playwright session in your browser — no code, no IDE, no project setup.",
      "url": "https://dev.to/abhivaikar/you-dont-need-to-deal-with-code-to-understand-playwright-39nk",
      "tags": "playwright, testing, webdev, devtools",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "abhivaikar"
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
      "title": "Writing Lisp is AI Resistant and I'm Sad — Dan's Musings",
      "url": "https://blog.djhaskin.com/blog/writing-lisp-is-ai-resistant-and-im-sad/",
      "score": 2,
      "comments": 0,
      "tags": [
        "lisp",
        "vibecoding"
      ],
      "id": "hfwu86"
    },
    {
      "title": "If you thought the speed of writing code was your problem - you have bigger problems",
      "url": "https://debuggingleadership.com/blog/if-you-thought-the-speed-of-writing-code-was-your-problem-you-have-bigger-problems",
      "score": 4,
      "comments": 2,
      "tags": [
        "practices"
      ],
      "id": "05o8yu"
    },
    {
      "title": "setting up the atkey.pro usb fingerprint reader in linux -- this should also work for any fido2 u2p usb fingerprint reader; maybe even those $20 ones",
      "url": "https://gist.github.com/charmparticle/a3f3ccb804f9f79115e9d88892363e7f",
      "score": 3,
      "comments": 0,
      "tags": [
        "hardware",
        "linux"
      ],
      "id": "uai6zz"
    },
    {
      "title": "What are Senders Good For, Anyway? (2024)",
      "url": "https://ericniebler.com/2024/02/04/what-are-senders-good-for-anyway/",
      "score": 2,
      "comments": 0,
      "tags": [
        "c++"
      ],
      "id": "uvd41y"
    },
    {
      "title": "Making Gamedev Tooling For Windows 3.1 in Turbo C++",
      "url": "https://www.youtube.com/watch?v=-7mc-D5V4L8",
      "score": 4,
      "comments": 0,
      "tags": [
        "games",
        "programming",
        "retrocomputing",
        "video"
      ],
      "id": "gx4ato"
    },
    {
      "title": "Value numbering",
      "url": "https://bernsteinbear.com/blog/value-numbering/",
      "score": 15,
      "comments": 0,
      "tags": [
        "compilers"
      ],
      "id": "fqjzje"
    },
    {
      "title": "The Cathedral, the Bazaar, and the Winchester Mystery House",
      "url": "https://www.dbreunig.com/2026/03/26/winchester-mystery-house.html",
      "score": 4,
      "comments": 3,
      "tags": [
        "vibecoding"
      ],
      "id": "5kuph5"
    },
    {
      "title": "Mathematical methods and human thought in the age of AI",
      "url": "https://arxiv.org/pdf/2603.26524",
      "score": 1,
      "comments": 0,
      "tags": [
        "ai",
        "culture",
        "philosophy"
      ],
      "id": "tdjklb"
    },
    {
      "title": "CVA6-CFI: A First Glance at RISC-V Control-Flow Integrity Extensions",
      "url": "https://arxiv.org/pdf/2602.04991",
      "score": 4,
      "comments": 0,
      "tags": [
        "hardware",
        "pdf",
        "security"
      ],
      "id": "o7ulwh"
    },
    {
      "title": "The nvim-treesitter repository was archived",
      "url": "https://github.com/nvim-treesitter/nvim-treesitter",
      "score": 62,
      "comments": 34,
      "tags": [
        "editors",
        "programming",
        "vim"
      ],
      "id": "jr4acs"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "luu",
      "descendants": 29,
      "id": 47645432,
      "kids": [
        47645643,
        47646592,
        47645821,
        47645854,
        47645638,
        47645710,
        47646019,
        47645770,
        47645760,
        47645949,
        47645766
      ],
      "score": 121,
      "time": 1775354069,
      "title": "Introduction to Computer Music (2009) [pdf]",
      "type": "story",
      "url": "https://composerprogrammer.com/introductiontocomputermusic.pdf"
    },
    {
      "by": "Jaso1024",
      "descendants": 147,
      "id": 47640728,
      "kids": [
        47642019,
        47642123,
        47646677,
        47642066,
        47645792,
        47641469,
        47645711,
        47642357,
        47644431,
        47642452,
        47641520,
        47641452,
        47646125,
        47642918,
        47643117,
        47645088,
        47645578,
        47642085,
        47644890,
        47642664,
        47641285,
        47644620,
        47644671,
        47642600,
        47643602,
        47642937,
        47642318,
        47641823,
        47642473,
        47642777,
        47642319,
        47645178,
        47641510,
        47641129,
        47642622,
        47643221,
        47642046,
        47644004,
        47641389,
        47644479,
        47643500,
        47641276,
        47642680,
        47641392,
        47641769,
        47641529,
        47643212,
        47642563,
        47641048,
        47642415,
        47643189,
        47642614,
        47641236,
        47644705,
        47642433,
        47641681,
        47642686,
        47642100,
        47646547,
        47642475,
        47642270,
        47640816,
        47642192
      ],
      "score": 627,
      "text": "Thought the resources for GPU arch were lacking, so here we are",
      "time": 1775321154,
      "title": "Show HN: A game where you build a GPU",
      "type": "story",
      "url": "https://jaso1024.com/mvidia/"
    },
    {
      "by": "jskopek",
      "descendants": 35,
      "id": 47595695,
      "kids": [
        47646647,
        47645554,
        47645804,
        47646586,
        47646489,
        47646500,
        47644651,
        47645291,
        47645765,
        47644734,
        47645906,
        47645134,
        47644674,
        47644791,
        47644600,
        47644933,
        47644730
      ],
      "score": 204,
      "time": 1775007106,
      "title": "OpenScreen is an open-source alternative to Screen Studio",
      "type": "story",
      "url": "https://github.com/siddharthvaddem/openscreen"
    },
    {
      "by": "tamnd",
      "descendants": 38,
      "id": 47640875,
      "kids": [
        47646750,
        47645480,
        47646499,
        47644888,
        47644949,
        47646623,
        47645545,
        47645086,
        47645350,
        47646357,
        47646170,
        47645149,
        47644650,
        47646122,
        47644789,
        47644398,
        47646294
      ],
      "score": 139,
      "text": "<a href=\"https:&#x2F;&#x2F;x.com&#x2F;karpathy&#x2F;status&#x2F;2040470801506541998\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;karpathy&#x2F;status&#x2F;2040470801506541998</a><p><a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;karpathy&#x2F;status&#x2F;2040470801506541998\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;karpathy&#x2F;status&#x2F;2040470801506541998</a>",
      "time": 1775321865,
      "title": "LLM Wiki – example of an \"idea file\"",
      "type": "story",
      "url": "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"
    },
    {
      "by": "DyslexicAtheist",
      "descendants": 66,
      "id": 47644406,
      "kids": [
        47646749,
        47645118,
        47645045,
        47645257,
        47646709,
        47644736,
        47644689,
        47646737,
        47645210,
        47644708,
        47644684,
        47644905,
        47644634,
        47644861,
        47644681
      ],
      "score": 106,
      "time": 1775343464,
      "title": "German implementation of eIDAS will require an Apple/Google account to function",
      "type": "story",
      "url": "https://bmi.usercontent.opencode.de/eudi-wallet/wallet-development-documentation-public/latest/architecture-concept/06-mobile-devices/02-mdvm/"
    },
    {
      "by": "steeve",
      "descendants": 3,
      "id": 47587089,
      "kids": [
        47646479,
        47587416
      ],
      "score": 15,
      "time": 1774963793,
      "title": "Zml-smi: universal monitoring tool for GPUs, TPUs and NPUs",
      "type": "story",
      "url": "https://zml.ai/posts/zml-smi/"
    },
    {
      "by": "petalmind",
      "descendants": 0,
      "id": 47598835,
      "score": 20,
      "time": 1775037258,
      "title": "Rubysyn: Clarifying Ruby's Syntax and Semantics",
      "type": "story",
      "url": "https://github.com/squadette/rubysyn/blob/master/README.md"
    },
    {
      "by": "gpi",
      "descendants": 266,
      "id": 47642569,
      "kids": [
        47646084,
        47646690,
        47643738,
        47643042,
        47643167,
        47643022,
        47646545,
        47643825,
        47643106,
        47643328,
        47644018,
        47646177,
        47643024,
        47646321,
        47646430,
        47644424,
        47643039,
        47643138,
        47646451,
        47643038,
        47646448,
        47643146,
        47643375,
        47645811,
        47643134,
        47646163,
        47646137,
        47643811,
        47644844,
        47644976,
        47645212,
        47644875,
        47643539,
        47644214,
        47645030,
        47646307,
        47643287,
        47643019,
        47644593,
        47644925,
        47642994,
        47643122,
        47644510,
        47643465,
        47642944,
        47646133,
        47642949,
        47643009,
        47643755,
        47645498,
        47643086,
        47644832,
        47646026,
        47643817,
        47644273,
        47645577,
        47643545,
        47643249,
        47643081,
        47645753,
        47643017,
        47643096
      ],
      "score": 547,
      "time": 1775331583,
      "title": "How many products does Microsoft have named 'Copilot'?",
      "type": "story",
      "url": "https://teybannerman.com/strategy/2026/03/31/how-many-microsoft-copilot-are-there.html"
    },
    {
      "by": "crcastle",
      "descendants": 52,
      "id": 47644864,
      "kids": [
        47644993,
        47645053,
        47645356,
        47645465,
        47645527,
        47645499,
        47646634,
        47646445,
        47645228,
        47645023,
        47646155,
        47645665
      ],
      "score": 224,
      "text": "<a href=\"https:&#x2F;&#x2F;lore.kernel.org&#x2F;lkml&#x2F;yr3inlzesdb45n6i6lpbimwr7b25kqkn37qzlvvzgad5hfd7ut@xv4cihno76wu&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;lore.kernel.org&#x2F;lkml&#x2F;yr3inlzesdb45n6i6lpbimwr7b25kqk...</a>",
      "time": 1775348035,
      "title": "AWS engineer reports PostgreSQL perf halved by Linux 7.0, fix may not be easy",
      "type": "story",
      "url": "https://www.phoronix.com/news/Linux-7.0-AWS-PostgreSQL-Drop"
    },
    {
      "by": "syedmsawaid",
      "descendants": 2,
      "id": 47613118,
      "kids": [
        47646461,
        47646380
      ],
      "score": 16,
      "text": "Hi everyone. I am built a small application on top of FSI German basic course and I need some feedback regarding it.<p>It is a small web app. Currently only Unit 01 is available. I will feed in the rest of the units later down the road as I use it myself.<p>Some of the features includes<p>- Slow and fast audio with every single word and sentence in this app. You can play them with a click of a button. No need to rewind a tap back and forth.\n- Flashcards with keyboard control to quickly go through the material and drill them out.<p>You can access the website at <a href=\"https:&#x2F;&#x2F;detawk.com&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;detawk.com&#x2F;</a> . There is a demo video on the landing page. Give it a look before signing up.<p>If you have any questions or feedback for me, let me know. I hope you like the app.",
      "time": 1775130241,
      "title": "Show HN: I built a small app for FSI German Course",
      "type": "story",
      "url": "https://detawk.com/"
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
      "title": "The Unseen Cartographers: A Hybid Report on Underrepresented Voices in Tech",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience     There is a story I...",
      "url": "https://dev.to/narnaiezzsshaa/the-unseen-cartographers-a-hybid-report-on-underrepresented-voices-in-tech-2gif",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 5,
      "comments": 1,
      "reading_time": 3,
      "author": "narnaiezzsshaa"
    },
    {
      "title": "Personal Branding Is Not About Being Famous. It’s About Being Found",
      "description": "Most people think personal branding means having thousands of followers. It doesn’t.  Personal...",
      "url": "https://dev.to/akelabhai/personal-branding-is-not-about-being-famous-its-about-being-found-2hh0",
      "tags": "webdev, career, ai, buildinpublic",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "akelabhai"
    },
    {
      "title": "Day 3 - Added Security, Authentication and Jwt Tokens in REST API Project",
      "description": "I restarted my coding journey with a simple rule:  Improve 1% every day.  The features I worked on...",
      "url": "https://dev.to/bharathdhana/day-3-added-security-authentication-and-jwt-tokens-in-rest-api-project-3kal",
      "tags": "programming, career, java",
      "reactions": 0,
      "comments": 1,
      "reading_time": 1,
      "author": "bharathdhana"
    },
    {
      "title": "## The Interview Arms Race Nobody Talks About",
      "description": "The Interview Arms Race Nobody Talks About   Last spring I bombed a system design round at a...",
      "url": "https://dev.to/karuha/-the-interview-arms-race-nobody-talks-about-4f05",
      "tags": "interview, career, jobsearch, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "karuha"
    },
    {
      "title": "## The Interview You Keep Failing Without Knowing Why",
      "description": "The Interview You Keep Failing Without Knowing Why   A friend of mine — genuinely one of the...",
      "url": "https://dev.to/karuha/-the-interview-you-keep-failing-without-knowing-why-2l5h",
      "tags": "interview, career, jobsearch, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "karuha"
    },
    {
      "title": "I Cheated on My Google Interview (Sort Of)",
      "description": "Last spring I had a final round with a mid-sized fintech company — four Zoom calls back to back,...",
      "url": "https://dev.to/karuha/i-cheated-on-my-google-interview-sort-of-3ilk",
      "tags": "interview, career, jobsearch, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "karuha"
    },
    {
      "title": "Scarcity Captures the Mind",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience   “Scarcity captures the...",
      "url": "https://dev.to/odiong/scarcity-captures-the-mind-4pe7",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "odiong"
    },
    {
      "title": "The Day I Stopped Saying “This Isn’t My Job”",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience  I was hired as a full...",
      "url": "https://dev.to/glnurltn/the-day-i-stopped-saying-this-isnt-my-job-e8n",
      "tags": "devchallenge, wecoded, career",
      "reactions": 1,
      "comments": 1,
      "reading_time": 3,
      "author": "glnurltn"
    },
    {
      "title": "My Last Few Months",
      "description": "Nobody told me that doing everything at once was going to feel like this.  Exams last month. A...",
      "url": "https://dev.to/coder0214h/my-last-few-months-306p",
      "tags": "career, devjournal, learning, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "coder0214h"
    },
    {
      "title": "I Had Every Advantage in My CS Programme",
      "description": "That's Exactly the Problem   This is a submission for the 2026 WeCoded Challenge: Echoes of...",
      "url": "https://dev.to/aggrey_paintsil_51e08385d/i-had-every-advantage-in-my-cs-programme-1hg4",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 0,
      "comments": 1,
      "reading_time": 5,
      "author": "aggrey_paintsil_51e08385d"
    }
  ]
}
```

