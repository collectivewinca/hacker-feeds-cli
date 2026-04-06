# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-06 06:54:10 UTC

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
      "forks": 1613,
      "added_stars": 13476,
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
      "forks": 1538,
      "added_stars": 12682,
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
      "forks": 2257,
      "added_stars": 9112,
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
      "forks": 726,
      "added_stars": 2204,
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
      "author": "dreamhunter2333",
      "repo": "cloudflare_temp_email",
      "avatar": "https://github.com/dreamhunter2333.png",
      "repo_link": "https://github.com/dreamhunter2333/cloudflare_temp_email",
      "desc": "CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4813,
      "added_stars": 600,
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
      "author": "vadimdemedes",
      "repo": "ink",
      "avatar": "https://github.com/vadimdemedes.png",
      "repo_link": "https://github.com/vadimdemedes/ink",
      "desc": "🌈 React for interactive command-line apps",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 939,
      "added_stars": 1383,
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
      "author": "yamadashy",
      "repo": "repomix",
      "avatar": "https://github.com/yamadashy.png",
      "repo_link": "https://github.com/yamadashy/repomix",
      "desc": "📦 Repomix is a powerful tool that packs your entire repository into a single, AI-friendly file. Perfect for when you need to feed your codebase to Large Language Models (LLMs) or other AI tools like Claude, ChatGPT, DeepSeek, Perplexity, Gemini, Gemma, Llama, Grok, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1105,
      "added_stars": 400,
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
      "author": "EveryInc",
      "repo": "compound-engineering-plugin",
      "avatar": "https://github.com/EveryInc.png",
      "repo_link": "https://github.com/EveryInc/compound-engineering-plugin",
      "desc": "Office Compound Engineering plugin for Claude Code, Codex, and more",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1009,
      "added_stars": 1529,
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
      "author": "simstudioai",
      "repo": "sim",
      "avatar": "https://github.com/simstudioai.png",
      "repo_link": "https://github.com/simstudioai/sim",
      "desc": "Build, deploy, and orchestrate AI agents. Sim is the central intelligence layer for your AI workforce.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3493,
      "added_stars": 389,
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
      "author": "freeCodeCamp",
      "repo": "freeCodeCamp",
      "avatar": "https://github.com/freeCodeCamp.png",
      "repo_link": "https://github.com/freeCodeCamp/freeCodeCamp",
      "desc": "freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 44115,
      "added_stars": 2394,
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
      "author": "accomplish-ai",
      "repo": "accomplish",
      "avatar": "https://github.com/accomplish-ai.png",
      "repo_link": "https://github.com/accomplish-ai/accomplish",
      "desc": "Accomplish™ is the open source Al coworker that lives on your desktop",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1242,
      "added_stars": 586,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "DanielScharfsteinGit",
          "href": "https://github.com/DanielScharfsteinGit",
          "avatar": "https://avatars.githubusercontent.com/u/107919151"
        },
        {
          "username": "mcmatan",
          "href": "https://github.com/mcmatan",
          "avatar": "https://avatars.githubusercontent.com/u/6598830"
        },
        {
          "username": "mavishay",
          "href": "https://github.com/mavishay",
          "avatar": "https://avatars.githubusercontent.com/u/10693225"
        },
        {
          "username": "orcaman",
          "href": "https://github.com/orcaman",
          "avatar": "https://avatars.githubusercontent.com/u/4884073"
        }
      ]
    },
    {
      "author": "appwrite",
      "repo": "appwrite",
      "avatar": "https://github.com/appwrite.png",
      "repo_link": "https://github.com/appwrite/appwrite",
      "desc": "Appwrite® - complete cloud infrastructure for your web, mobile and AI apps. Including Auth, Databases, Storage, Functions, Messaging, Hosting, Realtime and more",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5189,
      "added_stars": 238,
      "builtBy": [
        {
          "username": "eldadfux",
          "href": "https://github.com/eldadfux",
          "avatar": "https://avatars.githubusercontent.com/u/1297371"
        },
        {
          "username": "abnegate",
          "href": "https://github.com/abnegate",
          "avatar": "https://avatars.githubusercontent.com/u/5857008"
        },
        {
          "username": "christyjacob4",
          "href": "https://github.com/christyjacob4",
          "avatar": "https://avatars.githubusercontent.com/u/20852629"
        },
        {
          "username": "Meldiron",
          "href": "https://github.com/Meldiron",
          "avatar": "https://avatars.githubusercontent.com/u/19310830"
        },
        {
          "username": "TorstenDittmann",
          "href": "https://github.com/TorstenDittmann",
          "avatar": "https://avatars.githubusercontent.com/u/1759475"
        }
      ]
    },
    {
      "author": "code-yeongyu",
      "repo": "oh-my-openagent",
      "avatar": "https://github.com/code-yeongyu.png",
      "repo_link": "https://github.com/code-yeongyu/oh-my-openagent",
      "desc": "omo; the best agent harness - previously oh-my-opencode",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3823,
      "added_stars": 4031,
      "builtBy": [
        {
          "username": "code-yeongyu",
          "href": "https://github.com/code-yeongyu",
          "avatar": "https://avatars.githubusercontent.com/u/11153873"
        },
        {
          "username": "sisyphus-dev-ai",
          "href": "https://github.com/sisyphus-dev-ai",
          "avatar": "https://avatars.githubusercontent.com/u/238992291"
        },
        {
          "username": "justsisyphus",
          "href": "https://github.com/justsisyphus",
          "avatar": "https://avatars.githubusercontent.com/u/254807767"
        },
        {
          "username": "acamq",
          "href": "https://github.com/acamq",
          "avatar": "https://avatars.githubusercontent.com/u/179265037"
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
      "forks": 423,
      "added_stars": 603,
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
      "author": "smol-ai",
      "repo": "GodMode",
      "avatar": "https://github.com/smol-ai.png",
      "repo_link": "https://github.com/smol-ai/GodMode",
      "desc": "AI Chat Browser: Fast, Full webapp access to ChatGPT / Claude / Bard / Bing / Llama2! I use this 20 times a day.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 441,
      "added_stars": 273,
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
      "forks": 1689,
      "added_stars": 7514,
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
      "forks": 4992,
      "added_stars": 5858,
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
      "author": "m1k1o",
      "repo": "neko",
      "avatar": "https://github.com/m1k1o.png",
      "repo_link": "https://github.com/m1k1o/neko",
      "desc": "A self hosted virtual browser that runs in docker and uses WebRTC.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1427,
      "added_stars": 3133,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1784,
      "added_stars": 5161,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 727,
      "added_stars": 1446,
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
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 339,
      "added_stars": 841,
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
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2948,
      "added_stars": 700,
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
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1889,
      "added_stars": 2339,
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
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "CyberStrikeAI is an AI-native security testing platform built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 538,
      "added_stars": 1939,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 332,
      "added_stars": 705,
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
      "author": "mudler",
      "repo": "LocalAI",
      "avatar": "https://github.com/mudler.png",
      "repo_link": "https://github.com/mudler/LocalAI",
      "desc": "LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3862,
      "added_stars": 1781,
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
      "forks": 385,
      "added_stars": 834,
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
      "author": "smtg-ai",
      "repo": "claude-squad",
      "avatar": "https://github.com/smtg-ai.png",
      "repo_link": "https://github.com/smtg-ai/claude-squad",
      "desc": "Manage multiple AI terminal agents like Claude Code, Codex, OpenCode, and Amp.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 476,
      "added_stars": 654,
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
      "author": "fengshao1227",
      "repo": "ccg-workflow",
      "avatar": "https://github.com/fengshao1227.png",
      "repo_link": "https://github.com/fengshao1227/ccg-workflow",
      "desc": "多模型协作开发系统 - Claude 编排 + Codex 后端 + Gemini 前端，28 个命令覆盖开发全流程，一键安装零配置",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 363,
      "added_stars": 2042,
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
      "author": "openimsdk",
      "repo": "open-im-server",
      "avatar": "https://github.com/openimsdk.png",
      "repo_link": "https://github.com/openimsdk/open-im-server",
      "desc": "IM Chat OpenClaw",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2850,
      "added_stars": 451,
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
      "author": "canopy-network",
      "repo": "canopy",
      "avatar": "https://github.com/canopy-network.png",
      "repo_link": "https://github.com/canopy-network/canopy",
      "desc": "The official go implementation of the Canopy Network protocol",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 12525,
      "added_stars": 7091,
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
      "forks": 1071,
      "added_stars": 807,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3767,
      "added_stars": 1206,
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
      "author": "wavetermdev",
      "repo": "waveterm",
      "avatar": "https://github.com/wavetermdev.png",
      "repo_link": "https://github.com/wavetermdev/waveterm",
      "desc": "An open-source, AI-integrated, cross-platform terminal for seamless workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 884,
      "added_stars": 1531,
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
      "forks": 7382,
      "added_stars": 45506,
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
      "forks": 3503,
      "added_stars": 24111,
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
      "forks": 7299,
      "added_stars": 33890,
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
      "forks": 3074,
      "added_stars": 14089,
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
      "forks": 1517,
      "added_stars": 15180,
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
      "forks": 8648,
      "added_stars": 16280,
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
      "repo": "open-swe",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/open-swe",
      "desc": "An Open-Source Asynchronous Coding Agent",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1050,
      "added_stars": 3966,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1505,
      "added_stars": 16523,
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
      "forks": 1184,
      "added_stars": 7083,
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
      "forks": 3274,
      "added_stars": 8697,
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
      "forks": 2706,
      "added_stars": 9451,
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
      "forks": 2454,
      "added_stars": 4061,
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
      "author": "microsoft",
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4196,
      "added_stars": 12995,
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
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3369,
      "added_stars": 7162,
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
      "author": "vectorize-io",
      "repo": "hindsight",
      "avatar": "https://github.com/vectorize-io.png",
      "repo_link": "https://github.com/vectorize-io/hindsight",
      "desc": "Hindsight: Agent Memory That Learns",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 444,
      "added_stars": 5094,
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
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1194,
      "added_stars": 6303,
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
      "author": "hacksider",
      "repo": "Deep-Live-Cam",
      "avatar": "https://github.com/hacksider.png",
      "repo_link": "https://github.com/hacksider/Deep-Live-Cam",
      "desc": "real time face swap and one-click video deepfake with only a single image",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12914,
      "added_stars": 9350,
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
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2910,
      "added_stars": 10401,
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
      "desc": "Unsloth Studio is a web UI for training and running open models like Qwen3.5, Gemma 4, DeepSeek, gpt-oss locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5060,
      "added_stars": 6432,
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
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8704,
      "added_stars": 4121,
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
      "comments": "1",
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
      "title": "From Broken Docker Containers to a Working AI Agent: The Full OpenClaw Journey",
      "description": "Every blocker, every fix, and why bare metal is the sweet spot for a personal AI agent...",
      "url": "https://dev.to/sir_alexander_t/from-broken-docker-containers-to-a-working-ai-agent-the-full-openclaw-journey-3mc0",
      "tags": "agents, ai, docker, openclaw",
      "reactions": 4,
      "comments": 1,
      "reading_time": 7,
      "author": "sir_alexander_t"
    },
    {
      "title": "Building a Continuous Voice Interface with the OpenAI Realtime API",
      "description": "A technical walkthrough of how the ABD Assistant voice command system works end-to-end, from raw...",
      "url": "https://dev.to/diran_adeola/building-a-continuous-voice-interface-with-the-openai-realtime-api-2pn",
      "tags": "ai, javascript, openai, tutorial",
      "reactions": 4,
      "comments": 0,
      "reading_time": 3,
      "author": "diran_adeola"
    },
    {
      "title": "Master-Class: Understanding Database Replication (Single, Multi, and Leaderless)",
      "description": "A deep dive into Single Leader, Multi-Leader, and Leaderless replication algorithms for distributed systems.",
      "url": "https://dev.to/piyush6348/master-class-understanding-database-replication-single-multi-and-leaderless-hhm",
      "tags": "systemdesign, backend, database, distributedsystems",
      "reactions": 2,
      "comments": 0,
      "reading_time": 3,
      "author": "piyush6348"
    },
    {
      "title": "MCP Development with Python, and Azure Kubernates Service (AKS)",
      "description": "Leveraging Gemini CLI and the underlying Gemini LLM to build Model Context Protocol (MCP) AI...",
      "url": "https://dev.to/gde/mcp-development-with-python-and-azure-kubernates-service-aks-2in7",
      "tags": "gemini, mcpserver, python, ak",
      "reactions": 4,
      "comments": 0,
      "reading_time": 8,
      "author": "xbill"
    },
    {
      "title": "0. Why I’m Growing HAID in Public, Not Building in Public",
      "description": "I'm a runner and triathlete, and for years I've been frustrated by the same thing: there's no single place I can call home for my fitness data.",
      "url": "https://dev.to/shadowlik/0-why-im-growing-haid-in-public-not-building-in-public-1d0l",
      "tags": "app, development, growth, product",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "shadowlik"
    },
    {
      "title": "Building a Production-Ready Serverless App on Google Cloud (Part 2: The Data Contract)",
      "description": "This is Part 2 of a 3-part series on building production-ready, data-intensive applications on Google...",
      "url": "https://dev.to/gde/building-a-production-ready-serverless-app-on-google-cloud-part-2-the-data-contract-3hpa",
      "tags": "ai, dataengineering, python, googlecloud",
      "reactions": 3,
      "comments": 0,
      "reading_time": 4,
      "author": "patitonav"
    },
    {
      "title": "Page Numbers Lie: Offset vs Cursor Pagination",
      "description": "From Interview Notes To Production Reality   While I was preparing for interviews, I came...",
      "url": "https://dev.to/mandy8055/page-numbers-lie-offset-vs-cursor-pagination-39f4",
      "tags": "graphql, typescript, javascript, api",
      "reactions": 3,
      "comments": 0,
      "reading_time": 7,
      "author": "mandy8055"
    },
    {
      "title": "Scaling Product Discovery: Orchestrating AI Agent Workflows with Google Opal",
      "description": "Introduction: The Challenge of Relevance in Software Development  Developing an application is one...",
      "url": "https://dev.to/gdg/scaling-product-discovery-orchestrating-ai-agent-workflows-with-google-opal-2982",
      "tags": "ai, startup, opal",
      "reactions": 6,
      "comments": 0,
      "reading_time": 4,
      "author": "smoreira"
    },
    {
      "title": "Building a Multimodal Cross Cloud Live Agent with ADK, Azure ACA, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build cross cloud...",
      "url": "https://dev.to/gde/building-a-multimodal-cross-cloud-live-agent-with-adk-azure-aca-and-gemini-cli-57a1",
      "tags": "googleadk, python, gemini, azureaca",
      "reactions": 3,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
    },
    {
      "title": "Building a Multimodal Cross Cloud Live Agent with ADK, Azure ACI, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build cross cloud...",
      "url": "https://dev.to/gde/building-a-multimodal-cross-cloud-live-agent-with-adk-azure-aci-and-gemini-cli-3g4",
      "tags": "azure, python, gemini, iac",
      "reactions": 4,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
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
      "title": "It has never been about code",
      "url": "https://www.ufried.com/blog/never_been_about_code/",
      "score": 1,
      "comments": 0,
      "tags": [
        "practices"
      ],
      "id": "kimmfm"
    },
    {
      "title": "dev.css: tiny, simple, classless CSS framework inspired by new.css",
      "url": "https://tangled.org/devins.page/dev.css",
      "score": 2,
      "comments": 0,
      "tags": [
        "css",
        "web"
      ],
      "id": "dpkqgr"
    },
    {
      "title": "Should developer tooling be reinvented for AI-assisted programming?",
      "url": "",
      "score": 1,
      "comments": 0,
      "tags": [
        "ask",
        "programming"
      ],
      "id": "das5h0"
    },
    {
      "title": "Gabe Newell Is Shitting Yacht Money into Flatpak and You're Still Arguing about Init Systems",
      "url": "https://s3kshun8.games/blog/flatpak-won/",
      "score": 3,
      "comments": 1,
      "tags": [
        "linux",
        "rant"
      ],
      "id": "miurfk"
    },
    {
      "title": "Make your own ColecoVision at home, part 5",
      "url": "https://www.leadedsolder.com/2026/03/24/colecovision-diy-part-5.html",
      "score": 2,
      "comments": 0,
      "tags": [
        "hardware",
        "retrocomputing"
      ],
      "id": "omgusm"
    },
    {
      "title": "Size matters, even on very fast connections",
      "url": "https://maurycyz.com/misc/13kb/",
      "score": 3,
      "comments": 1,
      "tags": [
        "networking",
        "web"
      ],
      "id": "cwbgnf"
    },
    {
      "title": "Best Paper Awards in Computer Science over the past 30 years",
      "url": "https://jeffhuang.com/best_paper_awards/",
      "score": 10,
      "comments": 1,
      "tags": [
        "compsci"
      ],
      "id": "ufd7j8"
    },
    {
      "title": "Endian wars and anti-portability",
      "url": "https://dalmatian.life/2026/04/03/endian-wars-and-anti-portability-this-again/",
      "score": 6,
      "comments": 10,
      "tags": [
        "practices"
      ],
      "id": "g0kwsq"
    },
    {
      "title": "Turn-Based Collaboration: AI Agents with Multiple Personalities",
      "url": "https://alnewkirk.com/projects/tbc",
      "score": 2,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "cwpulr"
    },
    {
      "title": "Agentic coding at Clickhouse",
      "url": "https://clickhouse.com/blog/agentic-coding",
      "score": 2,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "xtaigx"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "0x1997",
      "descendants": 1,
      "id": 47657699,
      "kids": [
        47657715
      ],
      "score": 6,
      "time": 1775458182,
      "title": "SideX – A Tauri-based port of Visual Studio Code",
      "type": "story",
      "url": "https://github.com/Sidenai/sidex"
    },
    {
      "by": "armanified",
      "descendants": 26,
      "id": 47655408,
      "kids": [
        47657431,
        47656472,
        47657516,
        47657381,
        47657643,
        47657236,
        47656569,
        47657319,
        47657270,
        47656687,
        47656684,
        47656768,
        47657440,
        47656073,
        47656191,
        47657245,
        47657185,
        47656263,
        47656594,
        47656209,
        47656884,
        47656699,
        47657037,
        47656360,
        47657218,
        47657214,
        47656815
      ],
      "score": 315,
      "text": "Built a ~9M param LLM from scratch to understand how they actually work. Vanilla transformer, 60K synthetic conversations, ~130 lines of PyTorch. Trains in 5 min on a free Colab T4. The fish thinks the meaning of life is food.<p>Fork it and swap the personality for your own character.",
      "time": 1775434812,
      "title": "Show HN: I built a tiny LLM to demystify how language models work",
      "type": "story",
      "url": "https://github.com/arman-bd/guppylm"
    },
    {
      "by": "janandonly",
      "descendants": 144,
      "id": 47652561,
      "kids": [
        47653053,
        47653752,
        47657671,
        47653080,
        47653629,
        47653182,
        47656452,
        47654443,
        47654065,
        47653702,
        47656614,
        47656145,
        47656099,
        47652982,
        47653379,
        47653671,
        47656830,
        47653275,
        47655954,
        47655922,
        47653647,
        47654721,
        47654763,
        47656382,
        47654323,
        47655113,
        47656375,
        47654952,
        47653227,
        47653750,
        47655221,
        47655386,
        47654151,
        47653728,
        47653906,
        47653770,
        47653934,
        47655831,
        47652769,
        47657033,
        47654748,
        47655650
      ],
      "score": 557,
      "time": 1775414753,
      "title": "Gemma 4 on iPhone",
      "type": "story",
      "url": "https://apps.apple.com/nl/app/google-ai-edge-gallery/id6749645337"
    },
    {
      "by": "nevernothing",
      "descendants": 116,
      "id": 47655392,
      "kids": [
        47656008,
        47657457,
        47655915,
        47657689,
        47656075,
        47656882,
        47657403,
        47656148,
        47655789,
        47657535,
        47656042,
        47656495,
        47657579,
        47656842,
        47656405,
        47656921,
        47657485,
        47656129,
        47657248,
        47656296,
        47656252,
        47656244,
        47656642,
        47657479,
        47656960,
        47656253,
        47657264,
        47656660,
        47656494,
        47656152,
        47655651,
        47657493,
        47656140,
        47656264,
        47656299,
        47656619,
        47656810
      ],
      "score": 192,
      "time": 1775434706,
      "title": "Show HN: I made a YouTube search form with advanced filters",
      "type": "story",
      "url": "https://playlists.at/youtube/search/"
    },
    {
      "by": "keepamovin",
      "descendants": 18,
      "id": 47656501,
      "kids": [
        47657126,
        47657132,
        47657301,
        47656646,
        47657097,
        47656781,
        47656898,
        47657321,
        47657573,
        47657136,
        47657232
      ],
      "score": 50,
      "time": 1775444602,
      "title": "The 1987 game “The Last Ninja” was 40 kilobytes",
      "type": "story",
      "url": "https://twitter.com/exQUIZitely/status/2040777977521398151"
    },
    {
      "by": "hillcrestenigma",
      "descendants": 12,
      "id": 47656622,
      "kids": [
        47657345,
        47657032,
        47657069
      ],
      "score": 53,
      "time": 1775445762,
      "title": "An open-source 240-antenna array to bounce signals off the Moon",
      "type": "story",
      "url": "https://moonrf.com/"
    },
    {
      "by": "naves",
      "descendants": 196,
      "id": 47651703,
      "kids": [
        47656541,
        47656224,
        47655065,
        47655139,
        47653811,
        47652219,
        47653508,
        47653462,
        47657558,
        47654772,
        47655215,
        47653424,
        47655456,
        47656778,
        47653536,
        47654005,
        47655248,
        47657254,
        47656379,
        47655506,
        47655068,
        47657234,
        47654228,
        47653484,
        47655324,
        47655190,
        47657189,
        47654015,
        47656478,
        47657171,
        47655939,
        47653522,
        47656524,
        47653742,
        47656857,
        47655496,
        47654247,
        47653774,
        47657603,
        47655247,
        47653844,
        47654909,
        47655014,
        47656558,
        47654924,
        47656977,
        47654166,
        47656250,
        47655607,
        47653756,
        47654904,
        47657203,
        47653981,
        47656920,
        47656635,
        47656591,
        47655564,
        47655518,
        47655479,
        47654807,
        47654730,
        47653806,
        47653672,
        47653400,
        47657050,
        47654234,
        47653641,
        47657048
      ],
      "score": 355,
      "text": "See also <a href=\"https:&#x2F;&#x2F;x.com&#x2F;stevesi&#x2F;status&#x2F;2036921223150440542\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;stevesi&#x2F;status&#x2F;2036921223150440542</a> (<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;stevesi&#x2F;status&#x2F;2036921223150440542\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;stevesi&#x2F;status&#x2F;2036921223150440542</a>)",
      "time": 1775410061,
      "title": "Microsoft hasn't had a coherent GUI strategy since Petzold",
      "type": "story",
      "url": "https://www.jsnover.com/blog/2026/03/13/microsoft-hasnt-had-a-coherent-gui-strategy-since-petzold/"
    },
    {
      "by": "karimf",
      "descendants": 2,
      "id": 47652007,
      "kids": [
        47657363,
        47657413
      ],
      "score": 37,
      "text": "Related: <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47653752\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47653752</a>",
      "time": 1775411599,
      "title": "Show HN: Real-time AI (audio/video in, voice out) on an M3 Pro with Gemma E2B",
      "type": "story",
      "url": "https://github.com/fikrikarim/parlor"
    },
    {
      "by": "cl3misch",
      "descendants": 105,
      "id": 47637377,
      "kids": [
        47653240,
        47655563,
        47653090,
        47653625,
        47653161,
        47653305,
        47653257,
        47657058,
        47653631,
        47657199,
        47655574,
        47653973,
        47655307,
        47653106,
        47655153,
        47653206,
        47654462,
        47655546,
        47654859,
        47656320,
        47654554,
        47653690,
        47653962
      ],
      "score": 271,
      "time": 1775294434,
      "title": "LÖVE: 2D Game Framework for Lua",
      "type": "story",
      "url": "https://github.com/love2d/love"
    },
    {
      "by": "zdw",
      "descendants": 3,
      "id": 47656682,
      "kids": [
        47657312,
        47657688,
        47657546
      ],
      "score": 30,
      "time": 1775446343,
      "title": "Winners of the 2026 Kokuyo Design Awards",
      "type": "story",
      "url": "https://spoon-tamago.com/winners-of-the-2026-kokuyo-design-awards/"
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
      "title": "The Rise of the AI-Native Account Executive: What Top Infrastructure Companies are Looking For",
      "description": "The Rise of the AI-Native Account Executive: What Top Infrastructure Companies are Looking...",
      "url": "https://dev.to/nathanhamlett/the-rise-of-the-ai-native-account-executive-what-top-infrastructure-companies-are-looking-for-2n45",
      "tags": "ai, career, sales, saas",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "nathanhamlett"
    },
    {
      "title": "I'm 100x More Productive and More Exhausted Than Ever",
      "description": "Five years ago, I was the MacGyver on a development team.  You know the type. Backend breaks? I'm in...",
      "url": "https://dev.to/webdevtodayjason/im-100x-more-productive-and-more-exhausted-than-ever-48kd",
      "tags": "ai, productivity, career, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 11,
      "author": "webdevtodayjason"
    },
    {
      "title": "Full Stack Developer Resume: How to Show Depth on Both Sides (2026)",
      "description": "Full stack developers face a resume challenge that frontend and backend specialists don't: you have...",
      "url": "https://dev.to/sarah_m/full-stack-developer-resume-how-to-show-depth-on-both-sides-2026-5di9",
      "tags": "webdev, career, resume, javascript",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sarah_m"
    },
    {
      "title": "How to Quantify Resume Bullet Points: 50 Examples & Formulas",
      "description": "Recruiters spend 6 seconds scanning your resume. Numbers are the fastest way to prove impact - they...",
      "url": "https://dev.to/sarah_m/how-to-quantify-resume-bullet-points-50-examples-formulas-n",
      "tags": "career, resume, beginners, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "sarah_m"
    },
    {
      "title": "8 Machine Learning Projects for Software Engineers to Build in 2026",
      "description": "Most ML project lists are built for data science students. This one is built for software engineers...",
      "url": "https://dev.to/nyson_mark/8-machine-learning-projects-for-software-engineers-to-build-in-2026-3705",
      "tags": "career, machinelearning, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "nyson_mark"
    },
    {
      "title": "90% of software engineering is knowing what not to write",
      "description": "As AI makes code output cheap, the irreplaceable engineer is the one who designs, scopes, and decides what not to build — not the one who writes the most code.",
      "url": "https://dev.to/shiveenp/90-of-software-engineering-is-knowing-what-not-to-write-2kjj",
      "tags": "ai, career, productivity, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "shiveenp"
    },
    {
      "title": "AI Won't Save Bad Code: Why Senior Developers Matter More Than Ever",
      "description": "Every few months, a new headline declares that software engineers are about to become obsolete. AI...",
      "url": "https://dev.to/rodrigo_caetano_a69bd0726/ai-wont-save-bad-code-why-senior-developers-matter-more-than-ever-oi4",
      "tags": "ai, career, productivity, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "rodrigo_caetano_a69bd0726"
    },
    {
      "title": "AI Coding Tools Are Making Developers Dumber. The Data Agrees.",
      "description": "Developers accept 40-60% of AI suggestions without thinking. Debugging skills are rotting. Junior devs never build foundations. Here's the data.",
      "url": "https://dev.to/gabrielanhaia/ai-coding-tools-are-making-developers-dumber-the-data-agrees-10li",
      "tags": "ai, programming, career, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "gabrielanhaia"
    },
    {
      "title": "Checksum Your Week: The 5-Minute Friday Ritual That Catches $1,000s in Missed Billables",
      "description": "The Silent Corruption in Your Timesheets   As engineers, we obsess over data integrity. We...",
      "url": "https://dev.to/speed_engineer/checksum-your-week-the-5-minute-friday-ritual-that-catches-1000s-in-missed-billables-3mff",
      "tags": "productivity, freelancing, timetracking, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "speed_engineer"
    },
    {
      "title": "Final Round AI vs Interview Coder: Best AI Tool for Coding Interview Prep (2026)",
      "description": "Most developers don’t fail interviews because they lack knowledge; they fail because they can’t...",
      "url": "https://dev.to/finalroundai/final-round-ai-vs-interview-coder-best-ai-tool-for-coding-interview-prep-2026-1ahp",
      "tags": "ai, programming, interview, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "hadil"
    }
  ]
}
```

