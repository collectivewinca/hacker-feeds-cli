# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-07 06:46:38 UTC

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
      "author": "siddharthvaddem",
      "repo": "openscreen",
      "avatar": "https://github.com/siddharthvaddem.png",
      "repo_link": "https://github.com/siddharthvaddem/openscreen",
      "desc": "Create stunning demos for free. Open-source, no subscriptions, no watermarks, and free for commercial use. An alternative to Screen Studio.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1629,
      "added_stars": 14396,
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
      "forks": 2321,
      "added_stars": 7832,
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
      "forks": 745,
      "added_stars": 1632,
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
      "author": "vadimdemedes",
      "repo": "ink",
      "avatar": "https://github.com/vadimdemedes.png",
      "repo_link": "https://github.com/vadimdemedes/ink",
      "desc": "🌈 React for interactive command-line apps",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 940,
      "added_stars": 1422,
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
      "forks": 4852,
      "added_stars": 553,
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
      "author": "yamadashy",
      "repo": "repomix",
      "avatar": "https://github.com/yamadashy.png",
      "repo_link": "https://github.com/yamadashy/repomix",
      "desc": "📦 Repomix is a powerful tool that packs your entire repository into a single, AI-friendly file. Perfect for when you need to feed your codebase to Large Language Models (LLMs) or other AI tools like Claude, ChatGPT, DeepSeek, Perplexity, Gemini, Gemma, Llama, Grok, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1108,
      "added_stars": 439,
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
      "desc": "Official Compound Engineering plugin for Claude Code, Codex, and more",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1013,
      "added_stars": 1405,
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
      "forks": 44156,
      "added_stars": 2604,
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
      "forks": 1249,
      "added_stars": 594,
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
      "author": "simstudioai",
      "repo": "sim",
      "avatar": "https://github.com/simstudioai.png",
      "repo_link": "https://github.com/simstudioai/sim",
      "desc": "Build, deploy, and orchestrate AI agents. Sim is the central intelligence layer for your AI workforce.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3497,
      "added_stars": 414,
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
      "forks": 3868,
      "added_stars": 4025,
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
      "forks": 1718,
      "added_stars": 7552,
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
      "forks": 5040,
      "added_stars": 5846,
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
      "forks": 1836,
      "added_stars": 5226,
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
      "forks": 731,
      "added_stars": 1449,
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
      "forks": 1430,
      "added_stars": 3142,
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
      "forks": 340,
      "added_stars": 860,
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
      "forks": 2950,
      "added_stars": 728,
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
      "forks": 3865,
      "added_stars": 1772,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 334,
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
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 391,
      "added_stars": 822,
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
      "forks": 479,
      "added_stars": 661,
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
      "forks": 367,
      "added_stars": 2047,
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
      "forks": 2853,
      "added_stars": 453,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3775,
      "added_stars": 1229,
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
      "added_stars": 1504,
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
      "author": "projectdiscovery",
      "repo": "katana",
      "avatar": "https://github.com/projectdiscovery.png",
      "repo_link": "https://github.com/projectdiscovery/katana",
      "desc": "A next-generation crawling and spidering framework.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1073,
      "added_stars": 799,
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
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1899,
      "added_stars": 2163,
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
      "author": "kubernetes-sigs",
      "repo": "agent-sandbox",
      "avatar": "https://github.com/kubernetes-sigs.png",
      "repo_link": "https://github.com/kubernetes-sigs/agent-sandbox",
      "desc": "agent-sandbox enables easy management of isolated, stateful, singleton workloads, ideal for use cases like AI agent runtimes.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 186,
      "added_stars": 566,
      "builtBy": [
        {
          "username": "k8s-ci-robot",
          "href": "https://github.com/k8s-ci-robot",
          "avatar": "https://avatars.githubusercontent.com/u/20407524"
        },
        {
          "username": "janetkuo",
          "href": "https://github.com/janetkuo",
          "avatar": "https://avatars.githubusercontent.com/u/4876867"
        },
        {
          "username": "justinsb",
          "href": "https://github.com/justinsb",
          "avatar": "https://avatars.githubusercontent.com/u/100893"
        },
        {
          "username": "barney-s",
          "href": "https://github.com/barney-s",
          "avatar": "https://avatars.githubusercontent.com/u/6457279"
        },
        {
          "username": "vicentefb",
          "href": "https://github.com/vicentefb",
          "avatar": "https://avatars.githubusercontent.com/u/47219931"
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
      "forks": 8205,
      "added_stars": 977,
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
      "forks": 7525,
      "added_stars": 45905,
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
      "forks": 3792,
      "added_stars": 25584,
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
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7390,
      "added_stars": 33924,
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
      "forks": 3094,
      "added_stars": 13858,
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
      "forks": 1564,
      "added_stars": 15405,
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
      "forks": 8711,
      "added_stars": 16606,
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
      "added_stars": 4011,
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
      "forks": 1524,
      "added_stars": 16565,
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
      "forks": 1205,
      "added_stars": 7217,
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
      "author": "langchain-ai",
      "repo": "deepagents",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/deepagents",
      "desc": "Agent harness built with LangChain and LangGraph. Equipped with a planning tool, a filesystem backend, and the ability to spawn subagents - well-equipped to handle complex agentic tasks.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2732,
      "added_stars": 9595,
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
      "forks": 3280,
      "added_stars": 8740,
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
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3409,
      "added_stars": 7767,
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
      "forks": 2456,
      "added_stars": 4075,
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
      "forks": 4257,
      "added_stars": 13385,
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
      "author": "hacksider",
      "repo": "Deep-Live-Cam",
      "avatar": "https://github.com/hacksider.png",
      "repo_link": "https://github.com/hacksider/Deep-Live-Cam",
      "desc": "real time face swap and one-click video deepfake with only a single image",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12953,
      "added_stars": 9578,
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
      "author": "vectorize-io",
      "repo": "hindsight",
      "avatar": "https://github.com/vectorize-io.png",
      "repo_link": "https://github.com/vectorize-io/hindsight",
      "desc": "Hindsight: Agent Memory That Learns",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 469,
      "added_stars": 5269,
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
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2950,
      "added_stars": 10485,
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
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1224,
      "added_stars": 6213,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Unsloth Studio is a web UI for training and running open models like Qwen3.5, Gemma 4, DeepSeek, gpt-oss locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5094,
      "added_stars": 6477,
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
      "forks": 1822,
      "added_stars": 6979,
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
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-4idc",
      "tags": "top7, discuss",
      "reactions": 33,
      "comments": 8,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Observability at Scale: Mastering ADK Callbacks for Cost, Latency, and Auditability [GDE]",
      "description": "AI orchestrators receive significant attention; however, when deployments become latent and costly,...",
      "url": "https://dev.to/gde/observability-at-scale-mastering-adk-callbacks-for-cost-latency-and-auditability-1mo5",
      "tags": "agents, tutorial, ai, typescript",
      "reactions": 12,
      "comments": 2,
      "reading_time": 12,
      "author": "railsstudent"
    },
    {
      "title": "Move over, Vibe-Coding: I built an AI editor for STRESS-CODING",
      "description": "This is a submission for the DEV April Fools Challenge  Quantum Collapse is a React editor that...",
      "url": "https://dev.to/phalkmin/move-over-vibe-coding-i-built-an-ai-editor-for-stress-coding-4243",
      "tags": "devchallenge, 418challenge, showdev",
      "reactions": 27,
      "comments": 3,
      "reading_time": 3,
      "author": "phalkmin"
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
      "title": "How to Use Auth0 Agent Skills in Claude Code & AI Coding Assistants",
      "description": "Tired of your AI coding assistant hallucinating APIs or writing insecure auth patterns? In this...",
      "url": "https://dev.to/auth0/how-to-use-auth0-agent-skills-in-claude-code-ai-coding-assistants-56e5",
      "tags": "ai, claude, productivity, tooling",
      "reactions": 5,
      "comments": 1,
      "reading_time": 1,
      "author": "jesstemporal"
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
      "title": "What are your goals for the week? #173",
      "description": "It's full on Spring here. Stuff is blooming and things are covered in pollen. Our sprouts are getting...",
      "url": "https://dev.to/jarvisscript/what-are-your-goals-for-the-week-173-597n",
      "tags": "discuss, motivation, writing",
      "reactions": 18,
      "comments": 0,
      "reading_time": 2,
      "author": "jarvisscript"
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
      "title": "Join our April Fools Challenge for a chance at TEA-RRIFIC prizes!!!",
      "description": "Hello, and let’s get this out of the way right now: this is no joke!!  Tired of building...",
      "url": "https://dev.to/devteam/join-our-april-fools-challenge-for-a-chance-at-tea-rrific-prizes-1ofa",
      "tags": "devchallenge, 418challenge, jokes",
      "reactions": 307,
      "comments": 80,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-2on5",
      "tags": "discuss, weeklyretro",
      "reactions": 15,
      "comments": 39,
      "reading_time": 1,
      "author": "jess"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 502
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "MattHart88",
      "descendants": 147,
      "id": 47666024,
      "kids": [
        47668726,
        47671460,
        47667921,
        47667734,
        47666315,
        47669076,
        47666186,
        47667062,
        47667271,
        47666394,
        47669774,
        47666292,
        47670185,
        47669179,
        47670166,
        47670423,
        47668845,
        47667473,
        47670903,
        47666755,
        47670311,
        47667743,
        47666947,
        47668137,
        47669791,
        47670232,
        47668044,
        47669046,
        47667257,
        47667016,
        47667494,
        47669619,
        47667233,
        47666980,
        47668774,
        47668978,
        47668488,
        47667671,
        47670716,
        47669787,
        47671343,
        47671145,
        47669916,
        47668960,
        47669628,
        47667935,
        47666999,
        47667704
      ],
      "score": 342,
      "text": "I built this because I wanted to see how far I could get with a voice-to-text app that used 100% local models so no data left my computer. I&#x27;ve been using a ton for coding and emails. Experimenting with using it as a voice interface for my other agents too. 100% open-source MIT license, would love feedback, PRs, and ideas on where to take it.",
      "time": 1775505016,
      "title": "Show HN: Ghost Pepper – Local hold-to-talk speech-to-text for macOS",
      "type": "story",
      "url": "https://github.com/matthartman/ghost-pepper"
    },
    {
      "by": "TheWiggles",
      "descendants": 24,
      "id": 47669337,
      "kids": [
        47670443,
        47669897,
        47671507,
        47670968,
        47671360,
        47669910,
        47671492,
        47670026,
        47670987,
        47671250,
        47670321,
        47671128,
        47670116,
        47670301,
        47671140
      ],
      "score": 97,
      "time": 1775522881,
      "title": "Solod – A subset of Go that translates to C",
      "type": "story",
      "url": "https://github.com/solod-dev/solod"
    },
    {
      "by": "benswerd",
      "descendants": 137,
      "id": 47663147,
      "kids": [
        47665887,
        47667273,
        47671104,
        47671055,
        47664499,
        47665917,
        47666254,
        47664910,
        47664587,
        47670122,
        47667719,
        47670695,
        47664302,
        47663754,
        47668764,
        47666516,
        47663474,
        47666602,
        47664315,
        47671254,
        47665924,
        47667286,
        47665609,
        47669242,
        47670525,
        47668619,
        47670587,
        47666423,
        47664666,
        47666929,
        47664441,
        47663864,
        47664844,
        47667001,
        47665301,
        47667224,
        47665454,
        47664925,
        47671444,
        47670771,
        47664335,
        47668964,
        47668435,
        47668245,
        47664299,
        47664082,
        47664674,
        47666333,
        47664480,
        47668399,
        47670445
      ],
      "score": 254,
      "text": "We’re Ben and Jacob, cofounders of Freestyle (<a href=\"https:&#x2F;&#x2F;freestyle.sh\">https:&#x2F;&#x2F;freestyle.sh</a>). We’re building a cloud for  Coding Agents.<p>For the first generation of agents it looked like workflows with minimal tools. 2 years ago we published a package to let AI work in SQL, at that time GPT-4 could write simple scripts. Soon after the first AI App Builders started using AI to make whole websites; we supported that with a serverless deploy system.<p>But the current generation is going much further, instead of minimal tools and basic serverless apps AI can utilize the full power of a computer (“sandbox”). We’re building sandboxes that are interchangeable with EC2s from your agents perspective, with bonus features:<p>1. We’ve figured out how to fork a sandbox horizontally without more than a 400ms pause in it. That&#x27;s not forking the filesystem, we mean forking the whole memory of it. If you’re half way down a browser page with animations running, they’ll be in the same place in all the forks. If you’re running a minecraft server every block and player will be in the same place on the forks. If you’re running a local environment and an error comes up in process that error will be there in all the forks. This works for snapshotting as well, you can save your place and come back weeks later.<p>2. Our sandboxes start in ~500ms.<p>Demo: <a href=\"https:&#x2F;&#x2F;www.loom.com&#x2F;share&#x2F;8b3d294d515442f296aecde1f42f5524\" rel=\"nofollow\">https:&#x2F;&#x2F;www.loom.com&#x2F;share&#x2F;8b3d294d515442f296aecde1f42f5524</a><p>Compared with other sandboxes, our goal is to be the most powerful. We support full Linux + hardware-virtualization, eBPF, Fuse, etc. We run full Debian with multiple users and we use a systemd init instead of runc. Whatever your AI expects to work on debian should work on these vms, and if it doesn’t send a bug report.<p>In order to make this possible, we’ve moved to our own bare metal racks. Early in our testing we realized that moving VMs across cloud nodes would not have acceptable performance properties. We asked Google Cloud and AWS for a quote on their bare metal nodes and found that the monthly cost was equivalent to the total cost of the hardware so we did that.<p>Our goal is to build the necessary infrastructure to replicate the human devloop on the massively multi-tenant scale of AI, so these VMs should be as powerful as the ones you’re used to, while also being available to provision in seconds.",
      "time": 1775493131,
      "title": "Launch HN: Freestyle – Sandboxes for Coding Agents",
      "type": "story",
      "url": "https://www.freestyle.sh/"
    },
    {
      "by": "StanAngeloff",
      "descendants": 542,
      "id": 47660925,
      "kids": [
        47664442,
        47664246,
        47662808,
        47663676,
        47663194,
        47671465,
        47663016,
        47667926,
        47662820,
        47663267,
        47663444,
        47671384,
        47664160,
        47664098,
        47663138,
        47668259,
        47667686,
        47663704,
        47663907,
        47663550,
        47664401,
        47663037,
        47664038,
        47663753,
        47671412,
        47667200,
        47663119,
        47663301,
        47665756,
        47662803,
        47666489,
        47663152,
        47664247,
        47669664,
        47663209,
        47664608,
        47663390,
        47664922,
        47664029,
        47668291,
        47664637,
        47663320,
        47662948,
        47664114,
        47668273,
        47663494,
        47667188,
        47665073,
        47662829,
        47664313,
        47662962,
        47664311,
        47663050,
        47662998,
        47664006,
        47671177,
        47667762,
        47666937,
        47663523,
        47661327,
        47665567,
        47660970,
        47663644,
        47663647,
        47669797,
        47663329,
        47670134,
        47664277,
        47666428,
        47663477,
        47666839,
        47670206,
        47663582,
        47663045,
        47665075,
        47664131,
        47663999,
        47664814,
        47664301,
        47664631,
        47664453,
        47667698,
        47662882,
        47662890,
        47663801,
        47664866,
        47664142,
        47663302,
        47664612,
        47664558,
        47663690,
        47663497,
        47662902,
        47667274,
        47663181,
        47665337,
        47663528,
        47663186,
        47671437,
        47670835,
        47670696,
        47669865,
        47669975,
        47668229,
        47664457,
        47664097,
        47663034,
        47669922,
        47663486,
        47663941,
        47663067,
        47665474,
        47662864,
        47666884
      ],
      "score": 961,
      "time": 1775483435,
      "title": "Issue: Claude Code is unusable for complex engineering tasks with Feb updates",
      "type": "story",
      "url": "https://github.com/anthropics/claude-code/issues/42796"
    },
    {
      "by": "thadt",
      "descendants": 172,
      "id": 47662234,
      "kids": [
        47664342,
        47665042,
        47663625,
        47668571,
        47665446,
        47664388,
        47665157,
        47665354,
        47670340,
        47670676,
        47669058,
        47666591,
        47669447,
        47665177,
        47664634,
        47667542,
        47666471,
        47669314,
        47664986,
        47670847,
        47665557,
        47664903,
        47663356,
        47666173,
        47664067,
        47664601,
        47671041,
        47664409,
        47667357,
        47668967,
        47670819,
        47664859,
        47665560,
        47663580,
        47664079,
        47668660,
        47664216,
        47664233
      ],
      "score": 430,
      "time": 1775489480,
      "title": "A cryptography engineer's perspective on quantum computing timelines",
      "type": "story",
      "url": "https://words.filippo.io/crqc-timeline/"
    },
    {
      "by": "adrianhon",
      "descendants": 468,
      "id": 47659135,
      "kids": [
        47660332,
        47671325,
        47670337,
        47670724,
        47667992,
        47670422,
        47670945,
        47662398,
        47671425,
        47667463,
        47669105,
        47668140,
        47668868,
        47668770,
        47668568,
        47671143,
        47660241,
        47671288,
        47661471,
        47668016,
        47664790,
        47668426,
        47661896,
        47669643,
        47668557,
        47669297,
        47668476,
        47669059,
        47670618,
        47667968,
        47670420,
        47671357,
        47668863,
        47668761,
        47664713,
        47668349,
        47668635,
        47669414,
        47670603,
        47670592,
        47670080,
        47660771,
        47669421,
        47661490,
        47669783,
        47666316,
        47669298,
        47669549,
        47669357,
        47668821,
        47667574,
        47663489,
        47669029,
        47668583,
        47667385,
        47667844,
        47670372,
        47662139,
        47662826,
        47668417,
        47669812,
        47669792,
        47669647,
        47668324,
        47668458,
        47669870,
        47670672,
        47669079,
        47660611,
        47669880,
        47670006,
        47669395,
        47670779,
        47669025,
        47660515,
        47663368,
        47669502,
        47660492,
        47665148,
        47668516,
        47660058,
        47659685,
        47668796,
        47660653,
        47670536,
        47661382,
        47667972,
        47660445,
        47660421,
        47668468,
        47668820,
        47664665,
        47667546,
        47660409,
        47668504,
        47660450,
        47667685,
        47669040,
        47660398,
        47668058,
        47668362,
        47660460,
        47660345,
        47668587,
        47668075,
        47668222,
        47660396,
        47660401,
        47660406,
        47667560,
        47670127,
        47668298,
        47668194,
        47668646
      ],
      "score": 1219,
      "time": 1775471817,
      "title": "Sam Altman may control our future – can he be trusted?",
      "type": "story",
      "url": "https://www.newyorker.com/magazine/2026/04/13/sam-altman-may-control-our-future-can-he-be-trusted"
    },
    {
      "by": "mariuz",
      "descendants": 4,
      "id": 47641528,
      "kids": [
        47671184,
        47671481,
        47671144,
        47671448
      ],
      "score": 25,
      "time": 1775325535,
      "title": "Apollo Guidance Computer restoration videos",
      "type": "story",
      "url": "https://www.curiousmarc.com/space/apollo-guidance-computer"
    },
    {
      "by": "Bender",
      "descendants": 139,
      "id": 47660954,
      "kids": [
        47663148,
        47661443,
        47670458,
        47668637,
        47664981,
        47662303,
        47663887,
        47664791,
        47665724,
        47662433,
        47664437,
        47662450,
        47661045,
        47661978,
        47667449
      ],
      "score": 288,
      "time": 1775483557,
      "title": "German police name alleged leaders of GandCrab and REvil ransomware groups",
      "type": "story",
      "url": "https://krebsonsecurity.com/2026/04/germany-doxes-unkn-head-of-ru-ransomware-gangs-revil-gandcrab/"
    },
    {
      "by": "player_piano",
      "descendants": 73,
      "id": 47662945,
      "kids": [
        47665431,
        47666420,
        47664280,
        47666896,
        47671044,
        47666906,
        47668968,
        47665338,
        47665219,
        47664931,
        47669700,
        47664148,
        47665822,
        47667098,
        47669065,
        47665109,
        47666851,
        47664475,
        47666023,
        47664545,
        47664585,
        47663327,
        47667914,
        47666871,
        47665739,
        47665599,
        47670836,
        47671088,
        47668566
      ],
      "score": 260,
      "text": "I&#x27;ve long been into finding deals on government auction sites (seizures, surplus sales etc.) - right now for example San Diego DHS is selling 26 tons of lead shot, with bidding starting at $1,000 ¯\\_(ツ)_&#x2F;¯<p>It has historically been extremely tedious though: scanning dozens of janky sites which have interminable page loading times; back buttons take you all the way back to the homepage etc.<p>The site I built - GovAuctions - lets you search every government surplus auction at once. You can filter by location, category, and price, save items to a watchlist, and get alerts when new auctions match what you&#x27;re looking for.<p>Let me know what you think, if you have any suggestions, and if you find any deals in your area!",
      "time": 1775492506,
      "title": "Show HN: GovAuctions lets you browse government auctions at once",
      "type": "story",
      "url": "https://www.govauctions.app/"
    },
    {
      "by": "A_D_E_P_T",
      "descendants": 139,
      "id": 47667321,
      "kids": [
        47668271,
        47671400,
        47667987,
        47667393,
        47668074,
        47668088,
        47671285,
        47668202,
        47667598,
        47667915,
        47667952,
        47670114,
        47667984,
        47668381,
        47667722
      ],
      "score": 108,
      "time": 1775510523,
      "title": "Peptides: where to begin?",
      "type": "story",
      "url": "https://www.science.org/content/blog-post/ah-peptides-where-begin"
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
      "title": "Why India produces 1.5 million engineers but most aren't job-ready",
      "description": "Every year, India produces approximately 1.5 million engineering graduates — more than the United...",
      "url": "https://dev.to/skyrekon/why-india-produces-15-million-engineers-but-most-arent-job-ready-89e",
      "tags": "career, beginners, india, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "skyrekon"
    },
    {
      "title": "Converting Tacit Knowledge into AI Skills: A Deep Dive into Teammate-Skill",
      "description": "Converting Tacit Knowledge into AI Skills: A Deep Dive into Teammate-Skill   LeoYeAI...",
      "url": "https://dev.to/timmyzinin/converting-tacit-knowledge-into-ai-skills-a-deep-dive-into-teammate-skill-29jk",
      "tags": "career, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "timmyzinin"
    },
    {
      "title": "Data Engineering Interviews Are Broken (Here's Proof)",
      "description": "LeetCode for pipeline roles, 10-hour take-homes, and AI tools that replaced the skills being tested. The DE interview is failing everyone.",
      "url": "https://dev.to/datadriven/data-engineering-interviews-are-broken-heres-proof-4b6c",
      "tags": "dataengineering, career, interview, python",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "datadriven"
    },
    {
      "title": "We Built Systems Too Complex to Survive Layoffs, SpaceX Wouldn’t",
      "description": "SpaceX didn’t win by adding more technology. They won by removing complexity. Here’s why that mindset might be exactly what software engineering needs right now.",
      "url": "https://dev.to/holasoymalva/we-built-systems-too-complex-to-survive-layoffs-spacex-wouldnt-323k",
      "tags": "softwareengineering, architecture, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "holasoymalva"
    },
    {
      "title": "Resume Skills Section: Best Layout + Examples (2026)",
      "description": "Your skills section is the most-scanned part of your resume after your name and current title. ATS...",
      "url": "https://dev.to/sarah_m/resume-skills-section-best-layout-examples-2026-5b98",
      "tags": "career, resume, beginners, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sarah_m"
    },
    {
      "title": "The 6-Month Clock Ran Out — Are Companies Full AI Yet?",
      "description": "So during this year, many changes have been introduced in software development. A big disruption is...",
      "url": "https://dev.to/krlz/the-6-month-clock-ran-out-are-companies-full-ai-yet-4ai2",
      "tags": "ai, career, discuss, softwaredevelopment",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "krlz"
    },
    {
      "title": "How I Stay Sharp as a Senior Dev (Without Burning Out)",
      "description": "Five years in and honestly, the thing I didn't expect to fight against is comfort.  You get to a...",
      "url": "https://dev.to/abdulmalik_muhammad/how-i-stay-sharp-as-a-senior-dev-without-burning-out-2jgo",
      "tags": "career, typescript, productivity, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "abdulmalik_muhammad"
    },
    {
      "title": "The Quiet Burnout: When You're Exhausted but Can't Explain Why",
      "description": "There's a version of burnout that doesn't look dramatic.  You're not crying in the bathroom. You're...",
      "url": "https://dev.to/coach4life/the-quiet-burnout-when-youre-exhausted-but-cant-explain-why-5bp4",
      "tags": "productivity, career, selfimprovement, mentalhealth",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "coach4life"
    },
    {
      "title": "Side Hustle Taxes 2026: What You Actually Owe the IRS (The Math Nobody Shows You)",
      "description": "You made $10,000 driving Uber last year. You think you owe about $1,200 in taxes. The actual number?...",
      "url": "https://dev.to/techpulselab/side-hustle-taxes-2026-what-you-actually-owe-the-irs-the-math-nobody-shows-you-4399",
      "tags": "freelancing, money, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "techpulselab"
    },
    {
      "title": "We didn’t have a coding problem - We had a “where do I even start?” problem",
      "description": "Problem   A lot of our tasks started the same way:   unclear Jira description  20–30 minutes...",
      "url": "https://dev.to/bgdnvarlamov/we-didnt-have-a-coding-problem-we-had-a-where-do-i-even-start-problem-4ap2",
      "tags": "softwaredevelopment, ai, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "bgdnvarlamov"
    }
  ]
}
```

