# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-08 06:48:39 UTC

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
      "forks": 1732,
      "added_stars": 14101,
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
      "forks": 1690,
      "added_stars": 15921,
      "builtBy": [
        {
          "username": "siddharthvaddem",
          "href": "https://github.com/siddharthvaddem",
          "avatar": "https://avatars.githubusercontent.com/u/70214527"
        },
        {
          "username": "FabLrc",
          "href": "https://github.com/FabLrc",
          "avatar": "https://avatars.githubusercontent.com/u/86679051"
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
          "username": "marcgabe15",
          "href": "https://github.com/marcgabe15",
          "avatar": "https://avatars.githubusercontent.com/u/33824219"
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
      "forks": 2378,
      "added_stars": 7543,
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
      "author": "vadimdemedes",
      "repo": "ink",
      "avatar": "https://github.com/vadimdemedes.png",
      "repo_link": "https://github.com/vadimdemedes/ink",
      "desc": "🌈 React for interactive command-line apps",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 942,
      "added_stars": 1212,
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
      "author": "dreamhunter2333",
      "repo": "cloudflare_temp_email",
      "avatar": "https://github.com/dreamhunter2333.png",
      "repo_link": "https://github.com/dreamhunter2333/cloudflare_temp_email",
      "desc": "CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4880,
      "added_stars": 484,
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
      "author": "vas3k",
      "repo": "TaxHacker",
      "avatar": "https://github.com/vas3k.png",
      "repo_link": "https://github.com/vas3k/TaxHacker",
      "desc": "Self-hosted AI accounting app. LLM analyzer for receipts, invoices, transactions with custom prompts and categories",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 752,
      "added_stars": 1344,
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
      "author": "accomplish-ai",
      "repo": "accomplish",
      "avatar": "https://github.com/accomplish-ai.png",
      "repo_link": "https://github.com/accomplish-ai/accomplish",
      "desc": "Accomplish™ is the open source Al coworker that lives on your desktop",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1253,
      "added_stars": 596,
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
      "author": "yamadashy",
      "repo": "repomix",
      "avatar": "https://github.com/yamadashy.png",
      "repo_link": "https://github.com/yamadashy/repomix",
      "desc": "📦 Repomix is a powerful tool that packs your entire repository into a single, AI-friendly file. Perfect for when you need to feed your codebase to Large Language Models (LLMs) or other AI tools like Claude, ChatGPT, DeepSeek, Perplexity, Gemini, Gemma, Llama, Grok, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1115,
      "added_stars": 461,
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
      "author": "freeCodeCamp",
      "repo": "freeCodeCamp",
      "avatar": "https://github.com/freeCodeCamp.png",
      "repo_link": "https://github.com/freeCodeCamp/freeCodeCamp",
      "desc": "freeCodeCamp.org's open-source codebase and curriculum. Learn math, programming, and computer science for free.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 44181,
      "added_stars": 2104,
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
      "author": "EveryInc",
      "repo": "compound-engineering-plugin",
      "avatar": "https://github.com/EveryInc.png",
      "repo_link": "https://github.com/EveryInc/compound-engineering-plugin",
      "desc": "Official Compound Engineering plugin for Claude Code, Codex, and more",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1025,
      "added_stars": 1301,
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
      "forks": 3506,
      "added_stars": 424,
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
      "author": "code-yeongyu",
      "repo": "oh-my-openagent",
      "avatar": "https://github.com/code-yeongyu.png",
      "repo_link": "https://github.com/code-yeongyu/oh-my-openagent",
      "desc": "omo; the best agent harness - previously oh-my-opencode",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3919,
      "added_stars": 4077,
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
      "author": "rynfar",
      "repo": "meridian",
      "avatar": "https://github.com/rynfar.png",
      "repo_link": "https://github.com/rynfar/meridian",
      "desc": "Use your Claude Max subscription with OpenCode, Pi, Droid, Aider, Crush, Cline. Proxy that bridges Anthropic's official SDK to enable Claude Max in third-party tools.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 94,
      "added_stars": 145,
      "builtBy": [
        {
          "username": "rynfar",
          "href": "https://github.com/rynfar",
          "avatar": "https://avatars.githubusercontent.com/u/11325514"
        },
        {
          "username": "ianjwhite99",
          "href": "https://github.com/ianjwhite99",
          "avatar": "https://avatars.githubusercontent.com/u/35158392"
        },
        {
          "username": "conversun",
          "href": "https://github.com/conversun",
          "avatar": "https://avatars.githubusercontent.com/u/22893221"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 1755,
      "added_stars": 7662,
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
      "forks": 5107,
      "added_stars": 5984,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1875,
      "added_stars": 5349,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 732,
      "added_stars": 1438,
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
      "forks": 341,
      "added_stars": 873,
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
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 395,
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
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2956,
      "added_stars": 764,
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
      "forks": 3874,
      "added_stars": 1795,
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
      "author": "smtg-ai",
      "repo": "claude-squad",
      "avatar": "https://github.com/smtg-ai.png",
      "repo_link": "https://github.com/smtg-ai/claude-squad",
      "desc": "Manage multiple AI terminal agents like Claude Code, Codex, OpenCode, and Amp.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 480,
      "added_stars": 669,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 335,
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
      "author": "wavetermdev",
      "repo": "waveterm",
      "avatar": "https://github.com/wavetermdev.png",
      "repo_link": "https://github.com/wavetermdev/waveterm",
      "desc": "An open-source, AI-integrated, cross-platform terminal for seamless workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 887,
      "added_stars": 1506,
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
      "author": "XTLS",
      "repo": "RealiTLScanner",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/RealiTLScanner",
      "desc": "A TLS server scanner for Reality",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 238,
      "added_stars": 304,
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
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2710,
      "added_stars": 2473,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3785,
      "added_stars": 1256,
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
      "author": "fengshao1227",
      "repo": "ccg-workflow",
      "avatar": "https://github.com/fengshao1227.png",
      "repo_link": "https://github.com/fengshao1227/ccg-workflow",
      "desc": "多模型协作开发系统 - Claude 编排 + Codex 后端 + Gemini 前端，28 个命令覆盖开发全流程，一键安装零配置",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 374,
      "added_stars": 2050,
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
      "author": "projectdiscovery",
      "repo": "katana",
      "avatar": "https://github.com/projectdiscovery.png",
      "repo_link": "https://github.com/projectdiscovery/katana",
      "desc": "A next-generation crawling and spidering framework.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1077,
      "added_stars": 718,
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
      "author": "openimsdk",
      "repo": "open-im-server",
      "avatar": "https://github.com/openimsdk.png",
      "repo_link": "https://github.com/openimsdk/open-im-server",
      "desc": "IM Chat OpenClaw",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2854,
      "added_stars": 463,
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
      "author": "supabase",
      "repo": "cli",
      "avatar": "https://github.com/supabase.png",
      "repo_link": "https://github.com/supabase/cli",
      "desc": "Supabase CLI. Manage postgres migrations, run Supabase locally, deploy edge functions. Postgres backups. Generating types from your database schema.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 419,
      "added_stars": 479,
      "builtBy": [
        {
          "username": "sweatybridge",
          "href": "https://github.com/sweatybridge",
          "avatar": "https://avatars.githubusercontent.com/u/1639722"
        },
        {
          "username": "soedirgo",
          "href": "https://github.com/soedirgo",
          "avatar": "https://avatars.githubusercontent.com/u/31685197"
        },
        {
          "username": "laktek",
          "href": "https://github.com/laktek",
          "avatar": "https://avatars.githubusercontent.com/u/5358"
        },
        {
          "username": "avallete",
          "href": "https://github.com/avallete",
          "avatar": "https://avatars.githubusercontent.com/u/8771783"
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
      "forks": 4317,
      "added_stars": 28243,
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
          "username": "erosika",
          "href": "https://github.com/erosika",
          "avatar": "https://avatars.githubusercontent.com/u/56565191"
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
      "forks": 7626,
      "added_stars": 46170,
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
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7472,
      "added_stars": 34062,
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
      "forks": 3111,
      "added_stars": 13975,
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
      "forks": 1585,
      "added_stars": 15760,
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
      "forks": 8781,
      "added_stars": 16964,
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
      "forks": 1051,
      "added_stars": 4065,
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
      "forks": 1539,
      "added_stars": 16653,
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
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3345,
      "added_stars": 8886,
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
      "forks": 2749,
      "added_stars": 9788,
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
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3453,
      "added_stars": 8086,
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
      "author": "fishaudio",
      "repo": "fish-speech",
      "avatar": "https://github.com/fishaudio.png",
      "repo_link": "https://github.com/fishaudio/fish-speech",
      "desc": "SOTA Open Source TTS",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2457,
      "added_stars": 4096,
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
      "forks": 4303,
      "added_stars": 13838,
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
      "author": "vectorize-io",
      "repo": "hindsight",
      "avatar": "https://github.com/vectorize-io.png",
      "repo_link": "https://github.com/vectorize-io/hindsight",
      "desc": "Hindsight: Agent Memory That Learns",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 487,
      "added_stars": 5415,
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
          "username": "DK09876",
          "href": "https://github.com/DK09876",
          "avatar": "https://avatars.githubusercontent.com/u/55561168"
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
      "forks": 12968,
      "added_stars": 9748,
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
      "forks": 2990,
      "added_stars": 10630,
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
      "forks": 5138,
      "added_stars": 6702,
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
      "forks": 1841,
      "added_stars": 6951,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1371,
      "added_stars": 5452,
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
          "username": "JustinGuese",
          "href": "https://github.com/JustinGuese",
          "avatar": "https://avatars.githubusercontent.com/u/9588843"
        },
        {
          "username": "kashif",
          "href": "https://github.com/kashif",
          "avatar": "https://avatars.githubusercontent.com/u/8100"
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
      "title": "A lightweight front end framework with native JavaScript/TS feel",
      "url": "https://qingkuai.dev",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-04-07T22:39:58.000Z"
    },
    {
      "title": "Zephyr Events – A 2KB TypeScript event emitter that's race-condition safe",
      "url": "https://www.npmjs.com/package/zephyr-events",
      "upvotes": "1",
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
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-4idc",
      "tags": "top7, discuss",
      "reactions": 53,
      "comments": 10,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Move over, Vibe-Coding: I built an AI editor for STRESS-CODING",
      "description": "This is a submission for the DEV April Fools Challenge  Quantum Collapse is a React editor that...",
      "url": "https://dev.to/phalkmin/move-over-vibe-coding-i-built-an-ai-editor-for-stress-coding-4243",
      "tags": "devchallenge, 418challenge, showdev",
      "reactions": 28,
      "comments": 5,
      "reading_time": 3,
      "author": "phalkmin"
    },
    {
      "title": "Sharing CodePen 2.0 demos on DEV",
      "description": "How to share CodePen 2.0 demos on DEV",
      "url": "https://dev.to/alvaromontoro/sharing-codepen-20-demos-on-dev-273",
      "tags": "meta, dev",
      "reactions": 4,
      "comments": 3,
      "reading_time": 2,
      "author": "alvaromontoro"
    },
    {
      "title": "MCP Development with Gemini CLI, and Amazon AWS EKS",
      "description": "Leveraging Gemini CLI and the underlying Gemini LLM to build Model Context Protocol (MCP) AI...",
      "url": "https://dev.to/gde/mcp-development-with-gemini-cli-and-amazon-aws-eks-bm",
      "tags": "eks, python, gemini, mcps",
      "reactions": 6,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
    },
    {
      "title": "Deploying ADK Agents on Azure Fabric",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Agents in...",
      "url": "https://dev.to/gde/deploying-adk-agents-on-azure-fabric-48mf",
      "tags": "azure, gemini, python, googleadk",
      "reactions": 3,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Master-Class: Understanding Database Replication (Single, Multi, and Leaderless)",
      "description": "A deep dive into Single Leader, Multi-Leader, and Leaderless replication algorithms for distributed systems.",
      "url": "https://dev.to/piyush6348/master-class-understanding-database-replication-single-multi-and-leaderless-hhm",
      "tags": "systemdesign, backend, database, distributedsystems",
      "reactions": 3,
      "comments": 0,
      "reading_time": 3,
      "author": "piyush6348"
    },
    {
      "title": "Agentic interaction using AppFunctions",
      "description": "Given the rise of agentic interaction on Android, we need a fast, reliable API to make app...",
      "url": "https://dev.to/tkuenneth/agentic-interaction-using-appfunctions-m8k",
      "tags": "ai, android, programming",
      "reactions": 14,
      "comments": 0,
      "reading_time": 10,
      "author": "tkuenneth"
    },
    {
      "title": "Agent Factory Recap: Supercharging Agents on GKE with Agent Sandbox and Pod Snapshots",
      "description": "In the latest episode of the Agent Factory, Mofi Rahman and I had the pleasure of hosting, Brandon...",
      "url": "https://dev.to/googleai/agent-factory-recap-supercharging-agents-on-gke-with-agent-sandbox-and-pod-snapshots-3a5e",
      "tags": "ai, agents, kubernetes",
      "reactions": 18,
      "comments": 2,
      "reading_time": 4,
      "author": "shirmeirlador"
    },
    {
      "title": "Join our April Fools Challenge for a chance at TEA-RRIFIC prizes!!!",
      "description": "Hello, and let’s get this out of the way right now: this is no joke!!  Tired of building...",
      "url": "https://dev.to/devteam/join-our-april-fools-challenge-for-a-chance-at-tea-rrific-prizes-1ofa",
      "tags": "devchallenge, 418challenge, jokes",
      "reactions": 312,
      "comments": 81,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Observability at Scale: Mastering ADK Callbacks for Cost, Latency, and Auditability [GDE]",
      "description": "AI orchestrators receive significant attention; however, when deployments become latent and costly,...",
      "url": "https://dev.to/gde/observability-at-scale-mastering-adk-callbacks-for-cost-latency-and-auditability-1mo5",
      "tags": "agents, tutorial, ai, typescript",
      "reactions": 22,
      "comments": 8,
      "reading_time": 12,
      "author": "railsstudent"
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
      "title": "1SubML: Plan vs Reality",
      "url": "https://blog.polybdenum.com/2026/04/05/1subml-plan-vs-reality.html",
      "score": 3,
      "comments": 0,
      "tags": [
        "plt"
      ],
      "id": "f3qxk6"
    },
    {
      "title": "[RFC] JSIR: A High-Level IR for JavaScript",
      "url": "https://discourse.llvm.org/t/rfc-jsir-a-high-level-ir-for-javascript/90456",
      "score": 2,
      "comments": 0,
      "tags": [
        "compilers",
        "javascript"
      ],
      "id": "3yvhkz"
    },
    {
      "title": "From UART to Root: Vendor Shell Escape on a Uniview IP Camera",
      "url": "https://ygashu.dev/posts/uniview-blog/unview-ipc-blog-1/",
      "score": 1,
      "comments": 0,
      "tags": [
        "hardware",
        "reversing"
      ],
      "id": "rch69i"
    },
    {
      "title": "When the compiler lies: breaking memory safety in safe Go",
      "url": "https://ciolek.dev/posts/when-the-compiler-lies",
      "score": 1,
      "comments": 0,
      "tags": [
        "go",
        "security"
      ],
      "id": "214wj4"
    },
    {
      "title": "Nix CVE",
      "url": "",
      "score": -1,
      "comments": 2,
      "tags": [
        "nix"
      ],
      "id": "x7ipv3"
    },
    {
      "title": "Nix security advisory: Privilege escalation via symlink following during FOD output registration",
      "url": "https://discourse.nixos.org/t/nix-security-advisory-privilege-escalation-via-symlink-following-during-fod-output-registration/76900",
      "score": 21,
      "comments": 2,
      "tags": [
        "nix",
        "security"
      ],
      "id": "lwdzn1"
    },
    {
      "title": "Meat-based LLM proxies",
      "url": "https://not-an-llm.bearblog.dev/meat-based-llm-proxies/",
      "score": 6,
      "comments": 2,
      "tags": [
        "culture"
      ],
      "id": "lvs4ez"
    },
    {
      "title": "All of the String types",
      "url": "https://lambdalemon.gay/posts/string-types",
      "score": 8,
      "comments": 4,
      "tags": [
        "rust"
      ],
      "id": "khf0ye"
    },
    {
      "title": "Cells for NetBSD - Kernel-enforced jail-like Isolation",
      "url": "https://netbsd-cells.petermann-digital.de/",
      "score": 1,
      "comments": 1,
      "tags": [
        "netbsd",
        "security"
      ],
      "id": "0kmdcu"
    },
    {
      "title": "Stealing from the Best Emacs Configs",
      "url": "https://emacsredux.com/blog/2026/04/07/stealing-from-the-best-emacs-configs/",
      "score": 2,
      "comments": 0,
      "tags": [
        "emacs"
      ],
      "id": "yesukk"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "Ryan5453",
      "descendants": 549,
      "id": 47679121,
      "kids": [
        47685285,
        47679745,
        47685847,
        47679406,
        47679397,
        47681896,
        47679653,
        47683200,
        47683506,
        47681825,
        47681164,
        47679433,
        47681367,
        47686020,
        47680125,
        47682135,
        47679428,
        47686099,
        47686233,
        47680897,
        47681619,
        47679364,
        47679276,
        47679418,
        47679542,
        47680698,
        47681369,
        47680291,
        47680503,
        47686200,
        47681069,
        47686075,
        47685607,
        47681769,
        47683528,
        47685560,
        47680155,
        47680782,
        47680297,
        47679706,
        47683309,
        47679453,
        47681767,
        47682700,
        47683941,
        47685520,
        47681998,
        47679798,
        47679658,
        47679578,
        47683243,
        47680272,
        47679529,
        47679450,
        47681984,
        47682613,
        47682001,
        47681639,
        47679814,
        47681082,
        47681915,
        47680067,
        47685058,
        47684947,
        47680936,
        47679922,
        47682257,
        47680574,
        47680251,
        47679464,
        47679215,
        47679427,
        47679625,
        47681480,
        47680907,
        47680523,
        47679502,
        47685107,
        47685492,
        47685290,
        47681422,
        47682033,
        47679969,
        47682494,
        47685088,
        47679574,
        47679635,
        47685017,
        47682946,
        47681682,
        47683028,
        47681901,
        47681426,
        47685093,
        47679311,
        47680078,
        47683957,
        47680347,
        47679305,
        47681772,
        47681327,
        47681981,
        47680086
      ],
      "score": 1164,
      "text": "Related: <i>Assessing Claude Mythos Preview&#x27;s cybersecurity capabilities</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679155\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679155</a><p><i>System Card: Claude Mythos Preview [pdf]</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679258\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679258</a><p>Also: <i>Anthropic&#x27;s Project Glasswing sounds necessary to me</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47681241\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47681241</a>",
      "time": 1775585374,
      "title": "Project Glasswing: Securing critical software for the AI era",
      "type": "story",
      "url": "https://www.anthropic.com/glasswing"
    },
    {
      "by": "kipi",
      "descendants": 138,
      "id": 47676509,
      "kids": [
        47686260,
        47681804,
        47682173,
        47681586,
        47682470,
        47685286,
        47682270,
        47683577,
        47682805,
        47681945,
        47682868,
        47685603,
        47682653,
        47682087,
        47683211,
        47681671,
        47682521,
        47683040,
        47682710,
        47682139,
        47684404,
        47683550,
        47682657,
        47682631,
        47682675,
        47682806,
        47681869,
        47683387,
        47683063,
        47682167,
        47684114,
        47682032,
        47684874
      ],
      "score": 606,
      "time": 1775574198,
      "title": "Lunar Flyby",
      "type": "story",
      "url": "https://www.nasa.gov/gallery/lunar-flyby/"
    },
    {
      "by": "baely",
      "descendants": 20,
      "id": 47684514,
      "kids": [
        47686262,
        47684717,
        47685678,
        47685999,
        47685231,
        47685267,
        47685453,
        47685277,
        47685970,
        47685679
      ],
      "score": 98,
      "time": 1775617413,
      "title": "Protect your shed",
      "type": "story",
      "url": "https://dylanbutler.dev/blog/protect-your-shed/"
    },
    {
      "by": "transpute",
      "descendants": 32,
      "id": 47622436,
      "kids": [
        47685428,
        47685401,
        47685921,
        47685896,
        47685588,
        47685798,
        47686196,
        47685233,
        47685168,
        47684677,
        47685961,
        47685033,
        47685743,
        47685190
      ],
      "score": 77,
      "time": 1775181195,
      "title": "Slightly safer vibecoding by adopting old hacker habits",
      "type": "story",
      "url": "http://addxorrol.blogspot.com/2026/03/slightly-safer-vibecoding-by-adopting.html"
    },
    {
      "by": "delichon",
      "descendants": 10,
      "id": 47634422,
      "kids": [
        47686123,
        47685324,
        47634650,
        47662628,
        47635021,
        47685592,
        47686134
      ],
      "score": 44,
      "time": 1775264348,
      "title": "Native Americans had dice 12k years ago",
      "type": "story",
      "url": "https://www.nbcnews.com/science/science-news/native-americans-dice-games-probability-study-rcna266426"
    },
    {
      "by": "be7a",
      "descendants": 451,
      "id": 47679258,
      "kids": [
        47682262,
        47679345,
        47679561,
        47681097,
        47681884,
        47681108,
        47679559,
        47679947,
        47682434,
        47679544,
        47685699,
        47679493,
        47679575,
        47682709,
        47681999,
        47686129,
        47679609,
        47681194,
        47680905,
        47681808,
        47683554,
        47681826,
        47680073,
        47685449,
        47681810,
        47681353,
        47682793,
        47680234,
        47684207,
        47685013,
        47682707,
        47680146,
        47682350,
        47679363,
        47680289,
        47679865,
        47680356,
        47681973,
        47683775,
        47679445,
        47680934,
        47679518,
        47679748,
        47679476,
        47681387,
        47681651,
        47681300,
        47679770,
        47679460,
        47679705,
        47679317,
        47681225,
        47681178,
        47679432,
        47679462,
        47682763,
        47680514,
        47682464,
        47681783,
        47685962,
        47684262,
        47681428,
        47681093,
        47683401,
        47683947,
        47681197,
        47679393,
        47683467,
        47680201,
        47680716,
        47679459
      ],
      "score": 639,
      "text": "Related: <i>Project Glasswing: Securing critical software for the AI era</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679121\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679121</a><p><i>Assessing Claude Mythos Preview&#x27;s cybersecurity capabilities</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679155\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47679155</a>",
      "time": 1775585916,
      "title": "System Card: Claude Mythos Preview [pdf]",
      "type": "story",
      "url": "https://www-cdn.anthropic.com/53566bf5440a10affd749724787c8913a2ae0841.pdf"
    },
    {
      "by": "zixuanlimit",
      "descendants": 199,
      "id": 47677853,
      "kids": [
        47685498,
        47684832,
        47682706,
        47678337,
        47681550,
        47678609,
        47679222,
        47679177,
        47679349,
        47680384,
        47682987,
        47678480,
        47683159,
        47681977,
        47678979,
        47685467,
        47680832,
        47679182,
        47679110,
        47681883,
        47679614,
        47682948,
        47678279,
        47680711,
        47679149,
        47685706,
        47678200,
        47683011,
        47678670,
        47679737,
        47678582,
        47680177
      ],
      "score": 491,
      "time": 1775579535,
      "title": "GLM-5.1: Towards Long-Horizon Tasks",
      "type": "story",
      "url": "https://z.ai/blog/glm-5.1"
    },
    {
      "by": "jwworth",
      "descendants": 138,
      "id": 47650887,
      "kids": [
        47681834,
        47686171,
        47681578,
        47681047,
        47681761,
        47685975,
        47681632,
        47685496,
        47684945,
        47682156,
        47681271,
        47684299,
        47682471,
        47685594,
        47683382,
        47659038,
        47684700,
        47682300,
        47681235,
        47686084,
        47681193,
        47681718,
        47682108,
        47683518,
        47681379,
        47684425,
        47681160,
        47684839,
        47682867,
        47681541,
        47681234,
        47685052,
        47683880,
        47683186,
        47682048,
        47681109,
        47685525,
        47682352,
        47681551
      ],
      "score": 284,
      "time": 1775405652,
      "title": "How to get better at guitar",
      "type": "story",
      "url": "https://www.jakeworth.com/posts/how-to-get-better-at-guitar/"
    },
    {
      "by": "noztol",
      "descendants": 25,
      "id": 47653642,
      "kids": [
        47685150,
        47685299,
        47684818,
        47685351,
        47685426,
        47684915,
        47685853,
        47684667,
        47684411,
        47684170,
        47684166
      ],
      "score": 72,
      "time": 1775421475,
      "title": "Binary obfuscation used in AAA Games",
      "type": "story",
      "url": "https://blog.farzon.org/2026/04/binary-obfuscation-that-doesnt-kill-lto.html"
    },
    {
      "by": "werner",
      "descendants": 83,
      "id": 47680404,
      "kids": [
        47681440,
        47685528,
        47684322,
        47682222,
        47681442,
        47683663,
        47682869,
        47681620,
        47686217,
        47686215,
        47686210,
        47681528,
        47681585,
        47680931,
        47683749,
        47685125,
        47684537,
        47680886,
        47682289,
        47680740,
        47681378,
        47682157,
        47680613,
        47681523,
        47681839,
        47680548,
        47681238,
        47682486,
        47681702,
        47682977,
        47681326,
        47681649,
        47680704,
        47680770,
        47680909
      ],
      "score": 272,
      "text": "<a href=\"https:&#x2F;&#x2F;aws.amazon.com&#x2F;blogs&#x2F;aws&#x2F;launching-s3-files-making-s3-buckets-accessible-as-file-systems&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;aws.amazon.com&#x2F;blogs&#x2F;aws&#x2F;launching-s3-files-making-s...</a>",
      "time": 1775591041,
      "title": "S3 Files",
      "type": "story",
      "url": "https://www.allthingsdistributed.com/2026/04/s3-files-and-the-changing-face-of-s3.html"
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
      "title": "How to Write a PR Description That Sounds Native",
      "description": "How to Write a PR Description That Actually Sounds Native   I've reviewed thousands of PRs...",
      "url": "https://dev.to/indiehacker_9527/how-to-write-a-pr-description-that-sounds-native-2n72",
      "tags": "career, github, softwareengineering, writing",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "indiehacker_9527"
    },
    {
      "title": "I Learned a New Tech Stack in 7 Days — Here's the System I Used",
      "description": "Every developer knows this feeling.  You open a new framework (say React or Spring Boot). You start...",
      "url": "https://dev.to/ajay_mudettula/i-learned-a-new-tech-stack-in-7-days-heres-the-system-i-used-k2e",
      "tags": "career, productivity, programming, ai",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "ajay_mudettula"
    },
    {
      "title": "How to Fix AI-Induced Burnout Before It Tanks Your Dev Career",
      "description": "A practical guide to diagnosing and fixing the anxiety spiral that AI hype creates for developers, with concrete steps to rebuild confidence.",
      "url": "https://dev.to/alanwest/how-to-fix-ai-induced-burnout-before-it-tanks-your-dev-career-41ea",
      "tags": "career, mentalhealth, webdev, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "alanwest"
    },
    {
      "title": "THE AKASHIC RECORDS: Stop Giving Your Ego to the Cloud: Building a Sovereign Neural Library.",
      "description": "github.com/ipswyworld/akashic-records  What i Have Built (The Technical Reality)   The Council of...",
      "url": "https://dev.to/joseph_njorogekariuki_20/the-akashic-records-stop-giving-your-ego-to-the-cloud-building-a-sovereign-neural-library-32a8",
      "tags": "ai, opensource, career, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "joseph_njorogekariuki_20"
    },
    {
      "title": "AI and Developer Burnout: Why the Most Productive Engineers Are Burning Out First",
      "description": "AI was supposed to reduce developer burnout. Instead, the engineers who have embraced it most fully...",
      "url": "https://dev.to/recharge/ai-and-developer-burnout-why-the-most-productive-engineers-are-burning-out-first-44b4",
      "tags": "burnout, ai, career, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "recharge"
    },
    {
      "title": "Why Your AI \"Works\"… But Still Fails: The Missing Layer of Verification Engineering",
      "description": "TL;DR  AI systems don't fail like traditional software. They fail silently.  The output looks...",
      "url": "https://dev.to/naresh_007/why-your-ai-works-but-still-fails-the-missing-layer-of-verification-engineering-32oc",
      "tags": "ai, programming, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 19,
      "author": "naresh_007"
    },
    {
      "title": "Tech Leadership Is Changing Faster Than Job Titles. Here's What the Data Shows.",
      "description": "By Thomas Prommer — Technology Executive and AI Advisor     The call came from a PE-backed software...",
      "url": "https://dev.to/thomas_prommer/tech-leadership-is-changing-faster-than-job-titles-heres-what-the-data-shows-4j8f",
      "tags": "leadership, ai, career, management",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "thomas_prommer"
    },
    {
      "title": "10 Signs of Burnout in Software Engineers",
      "description": "Burnout in software engineers rarely looks like a breakdown. It looks like a great engineer slowly...",
      "url": "https://dev.to/recharge/10-signs-of-burnout-in-software-engineers-1b5b",
      "tags": "career, mentalhealth, webdev, burnout",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "recharge"
    },
    {
      "title": "Why I’m Engineering My FIRE with Python — A Manifesto",
      "description": "The Question Nobody Asks   Every corporation has a CFO. Every bank has an ALM...",
      "url": "https://dev.to/soytuber/why-im-engineering-my-fire-with-python-a-manifesto-24h5",
      "tags": "python, finance, career, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "soytuber"
    },
    {
      "title": "Why I’m Engineering My FIRE with Python — A Manifesto",
      "description": "Why I’m Engineering My FIRE with Python   I started coding in December 2025. Three months...",
      "url": "https://dev.to/soytuber/why-im-engineering-my-fire-with-python-a-manifesto-32l7",
      "tags": "python, finance, career, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "soytuber"
    }
  ]
}
```

