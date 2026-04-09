# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-09 06:49:07 UTC

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
      "forks": 1779,
      "added_stars": 11503,
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
      "forks": 1764,
      "added_stars": 13938,
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
      "forks": 2443,
      "added_stars": 5935,
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
          "username": "shaun0927",
          "href": "https://github.com/shaun0927",
          "avatar": "https://avatars.githubusercontent.com/u/70629228"
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
      "added_stars": 794,
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
      "author": "accomplish-ai",
      "repo": "accomplish",
      "avatar": "https://github.com/accomplish-ai.png",
      "repo_link": "https://github.com/accomplish-ai/accomplish",
      "desc": "Accomplish™ is the open source Al coworker that lives on your desktop",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1256,
      "added_stars": 414,
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
      "forks": 1117,
      "added_stars": 476,
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
      "forks": 44197,
      "added_stars": 2027,
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
      "forks": 1808,
      "added_stars": 7699,
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
      "forks": 5170,
      "added_stars": 6157,
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
      "forks": 1902,
      "added_stars": 5425,
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
      "added_stars": 1440,
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
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 400,
      "added_stars": 857,
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
      "forks": 340,
      "added_stars": 888,
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
      "forks": 2961,
      "added_stars": 815,
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
      "forks": 3885,
      "added_stars": 1841,
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
      "forks": 483,
      "added_stars": 675,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3798,
      "added_stars": 1284,
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
      "author": "XTLS",
      "repo": "RealiTLScanner",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/RealiTLScanner",
      "desc": "A TLS server scanner for Reality",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 239,
      "added_stars": 320,
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
      "author": "wavetermdev",
      "repo": "waveterm",
      "avatar": "https://github.com/wavetermdev.png",
      "repo_link": "https://github.com/wavetermdev/waveterm",
      "desc": "An open-source, AI-integrated, cross-platform terminal for seamless workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 891,
      "added_stars": 1517,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 336,
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
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2723,
      "added_stars": 2528,
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
      "author": "projectdiscovery",
      "repo": "katana",
      "avatar": "https://github.com/projectdiscovery.png",
      "repo_link": "https://github.com/projectdiscovery/katana",
      "desc": "A next-generation crawling and spidering framework.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1079,
      "added_stars": 696,
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
      "author": "kagent-dev",
      "repo": "kagent",
      "avatar": "https://github.com/kagent-dev.png",
      "repo_link": "https://github.com/kagent-dev/kagent",
      "desc": "Cloud Native Agentic AI | Discord: https://bit.ly/kagentdiscord",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 502,
      "added_stars": 224,
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
      "author": "openimsdk",
      "repo": "open-im-server",
      "avatar": "https://github.com/openimsdk.png",
      "repo_link": "https://github.com/openimsdk/open-im-server",
      "desc": "IM Chat OpenClaw",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2857,
      "added_stars": 472,
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
      "forks": 5054,
      "added_stars": 33430,
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
      "forks": 7784,
      "added_stars": 45664,
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
      "forks": 7551,
      "added_stars": 34038,
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
      "forks": 3125,
      "added_stars": 14095,
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
      "forks": 1612,
      "added_stars": 15945,
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
      "forks": 8841,
      "added_stars": 17251,
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
      "forks": 1055,
      "added_stars": 4104,
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
      "forks": 1559,
      "added_stars": 16724,
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
      "forks": 3379,
      "added_stars": 9288,
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
      "forks": 2776,
      "added_stars": 9997,
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
      "forks": 3481,
      "added_stars": 8341,
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
      "author": "microsoft",
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4349,
      "added_stars": 14152,
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
      "forks": 12986,
      "added_stars": 9857,
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
      "forks": 503,
      "added_stars": 5961,
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
      "author": "fishaudio",
      "repo": "fish-speech",
      "avatar": "https://github.com/fishaudio.png",
      "repo_link": "https://github.com/fishaudio/fish-speech",
      "desc": "SOTA Open Source TTS",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2461,
      "added_stars": 4121,
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
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3022,
      "added_stars": 10777,
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
      "forks": 5190,
      "added_stars": 6920,
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
      "title": "Phantom UI – Skeleton that measures your real DOM (Web Component, 8kb)",
      "url": "https://github.com/Aejkatappaja/phantom-ui",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-04-08T21:49:33.000Z"
    },
    {
      "title": "Markdown to Medium Guide",
      "url": "https://kitmul.com/en/blog/markdown-to-medium-guide",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-04-08T18:30:36.000Z"
    },
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
      "title": "Converting old home movie DVDs into a private streaming site",
      "description": "A relative sent me a few DVDs containing really old home videos that were at one point saved to DVDs....",
      "url": "https://dev.to/peter/converting-old-home-movie-dvds-into-a-private-streaming-site-5bmb",
      "tags": "tutorial, cloudflare, dvd, ripping",
      "reactions": 18,
      "comments": 6,
      "reading_time": 5,
      "author": "peter"
    },
    {
      "title": "AS’ HTCPCP AI Butler™ — The AI That Brews Chaos, Not Coffee 418% Chaos: Your Useless AI Butler",
      "description": "This is a submission for the DEV April Fools Challenge           🍵 AS’ HTCPCP AI Butler™ 🤖   ...    ...",
      "url": "https://dev.to/asamaes/as-htcpcp-ai-butler-the-ai-that-brews-chaos-not-coffee-418-chaos-your-useless-ai-butler-18m0",
      "tags": "devchallenge, 418challenge, showdev",
      "reactions": 11,
      "comments": 1,
      "reading_time": 3,
      "author": "asamaes"
    },
    {
      "title": "Who's Al and Where's Webfont Legibility?",
      "description": "Have you heard about Al? Al is literally everywhere.           Who's Al?    Al Guidance - How Al uses...",
      "url": "https://dev.to/ingosteinke/whos-al-and-wheres-webfont-legibility-4h7n",
      "tags": "a11y, typography, webdesign, watercooler",
      "reactions": 10,
      "comments": 3,
      "reading_time": 2,
      "author": "ingosteinke"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-4idc",
      "tags": "top7, discuss",
      "reactions": 58,
      "comments": 10,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Clawshier OpenClaw Skill",
      "description": "I've been meaning to take a stab at this idea of automating a process to take a picture of any...",
      "url": "https://dev.to/fdocr/clawshier-openclaw-skill-l1n",
      "tags": "ai, openclaw, opensource, openai",
      "reactions": 17,
      "comments": 1,
      "reading_time": 3,
      "author": "fdocr"
    },
    {
      "title": "Forem (Dev.to) is slow, so I del...optimized it.",
      "description": "This is a submission for the DEV April Fools Challenge   Disclaimer: This post is very very very very...",
      "url": "https://dev.to/francistrdev/forem-is-slow-so-i-deleti-mean-optimized-it-bln",
      "tags": "devchallenge, 418challenge, showdev, discuss",
      "reactions": 41,
      "comments": 13,
      "reading_time": 5,
      "author": "francistrdev"
    },
    {
      "title": "Running Agentic AI at Scale on Google Kubernetes Engine",
      "description": "The AI industry crossed an inflection point. We stopped asking \"can the model answer my question?\"...",
      "url": "https://dev.to/gde/running-agentic-ai-at-scale-on-google-kubernetes-engine-2540",
      "tags": "agents, ai, cloud, kubernetes",
      "reactions": 6,
      "comments": 0,
      "reading_time": 6,
      "author": "saurabhmi"
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
      "title": "Building a Multimodal Cross Cloud Live Agent with ADK, Azure AKS, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build cross cloud...",
      "url": "https://dev.to/gde/building-a-multimodal-cross-cloud-live-agent-with-adk-azure-aks-and-gemini-cli-5g9j",
      "tags": "googleadk, azure, ak, gemini",
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
      "title": "Understanding Traceroute",
      "url": "https://tech.stonecharioteer.com/posts/2026/traceroute/",
      "score": 1,
      "comments": 0,
      "tags": [
        "networking",
        "rust"
      ],
      "id": "nwpcjt"
    },
    {
      "title": "Runahead Execution vs. Conventional Data Prefetching in the IBM POWER6 Microprocessor (2010)",
      "url": "https://pages.cs.wisc.edu/~cain/pubs/cain_ispass10.pdf",
      "score": 1,
      "comments": 0,
      "tags": [
        "hardware",
        "pdf"
      ],
      "id": "btwu8f"
    },
    {
      "title": "WikiMapped – 1.3M geolocated Wikipedia articles on an interactive world map",
      "url": "https://wikimapped.mukul-mehta.in/",
      "score": 1,
      "comments": 0,
      "tags": [
        "visualization",
        "web"
      ],
      "id": "w6bwob"
    },
    {
      "title": "The AI Great Leap Forward",
      "url": "https://leehanchung.github.io/blogs/2026/04/05/the-ai-great-leap-forward/",
      "score": 8,
      "comments": 0,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "nmhkdl"
    },
    {
      "title": "Keychron’s hardware source",
      "url": "https://github.com/Keychron/Keychron-Keyboards-Hardware-Design/tree/main",
      "score": 0,
      "comments": 0,
      "tags": [
        "hardware"
      ],
      "id": "zuakfg"
    },
    {
      "title": "Understanding Pin (for C and C++ Developers) (2019)",
      "url": "https://dpzmick.com/posts/2019-05-25-pin-rs-cpp.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "c++",
        "rust"
      ],
      "id": "u3lz7o"
    },
    {
      "title": "Myth Engine Architecture: Building an SSA-Based Declarative Render Graph",
      "url": "https://github.com/panxinmiao/myth/blob/main/docs/RenderGraph.md",
      "score": 1,
      "comments": 0,
      "tags": [
        "compilers",
        "graphics"
      ],
      "id": "k5np0u"
    },
    {
      "title": "Flatpak: Complete Sandbox Escape",
      "url": "https://github.com/flatpak/flatpak/security/advisories/GHSA-cc2q-qc34-jprg",
      "score": 11,
      "comments": 3,
      "tags": [
        "devops",
        "security"
      ],
      "id": "cjbxsj"
    },
    {
      "title": "Post-Quantum Cryptography for the PHP Community",
      "url": "https://paragonie.com/blog/2026/04/post-quantum-cryptography-for-php-community",
      "score": 2,
      "comments": 0,
      "tags": [
        "cryptography",
        "php",
        "security"
      ],
      "id": "bqbvpd"
    },
    {
      "title": "John Mashey on 64-bit computing (1991)",
      "url": "https://www.bourguet.org/v2/comparch/mashey-byte-1991",
      "score": 1,
      "comments": 1,
      "tags": [
        "historical"
      ],
      "id": "si8f31"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "pluc",
      "descendants": 155,
      "id": 47697870,
      "kids": [
        47700120,
        47700108,
        47698009,
        47697992,
        47700112,
        47700067,
        47700081,
        47699867,
        47698363,
        47698098,
        47698661,
        47699862,
        47699951,
        47699649,
        47699789,
        47699017,
        47699956,
        47698068,
        47698338,
        47699380,
        47697944,
        47699332,
        47698735,
        47699116,
        47699433,
        47698622,
        47698811,
        47698396,
        47698640,
        47698540,
        47697993,
        47698256,
        47699641,
        47698003,
        47699061,
        47699015,
        47698908,
        47698181,
        47700034,
        47698721,
        47698857,
        47698130,
        47699479
      ],
      "score": 485,
      "time": 1775694368,
      "title": "LittleSnitch for Linux",
      "type": "story",
      "url": "https://obdev.at/products/littlesnitch-linux/index.html"
    },
    {
      "by": "vinhnx",
      "descendants": 12,
      "id": 47699181,
      "kids": [
        47699851,
        47700068,
        47700029,
        47699794,
        47699656,
        47699846,
        47700044,
        47699351
      ],
      "score": 102,
      "time": 1775707915,
      "title": "Open Source Security at Astral",
      "type": "story",
      "url": "https://astral.sh/blog/open-source-security-at-astral"
    },
    {
      "by": "blkhp19",
      "descendants": 254,
      "id": 47691730,
      "kids": [
        47692860,
        47692465,
        47697948,
        47700071,
        47692305,
        47696003,
        47695027,
        47692582,
        47694061,
        47697213,
        47699107,
        47694302,
        47692554,
        47694029,
        47693797,
        47698415,
        47699745,
        47692444,
        47694237,
        47699542,
        47696066,
        47694062,
        47692096,
        47695781,
        47694679,
        47692631,
        47698758,
        47694782,
        47696953,
        47699421,
        47694972,
        47696615,
        47696082,
        47695619,
        47692217,
        47695826,
        47692342,
        47694777,
        47699006,
        47697317,
        47692688,
        47693158,
        47693065,
        47693409,
        47692177,
        47694223,
        47694304,
        47696160,
        47698892,
        47695735,
        47695411,
        47692439,
        47696301,
        47692191,
        47692189,
        47697457,
        47698209,
        47692227,
        47694393,
        47695859,
        47692558,
        47693931,
        47693503,
        47697334,
        47692169,
        47692393,
        47694615,
        47695850,
        47694463,
        47696902,
        47692654,
        47692517,
        47693775,
        47692431,
        47692473,
        47693816,
        47695622,
        47693237,
        47694155,
        47695311
      ],
      "score": 1455,
      "time": 1775662800,
      "title": "I ported Mac OS X to the Nintendo Wii",
      "type": "story",
      "url": "https://bryankeller.github.io/2026/04/08/porting-mac-os-x-nintendo-wii.html"
    },
    {
      "by": "Caiero",
      "descendants": 27,
      "id": 47666639,
      "kids": [
        47698847,
        47698802,
        47699972,
        47699448,
        47696752,
        47699949,
        47699124,
        47699825,
        47699382,
        47699169,
        47699021,
        47699589
      ],
      "score": 124,
      "time": 1775507583,
      "title": "The Importance of Being Idle",
      "type": "story",
      "url": "https://theamericanscholar.org/the-importance-of-being-idle/"
    },
    {
      "by": "WerWolv",
      "descendants": 31,
      "id": 47695012,
      "kids": [
        47697239,
        47698608,
        47697211,
        47695592,
        47697265,
        47698612,
        47696334,
        47697076,
        47698173,
        47697548,
        47698202,
        47697404,
        47695809
      ],
      "score": 261,
      "time": 1775676214,
      "title": "USB for Software Developers: An introduction to writing userspace USB drivers",
      "type": "story",
      "url": "https://werwolv.net/posts/usb_for_sw_devs/"
    },
    {
      "by": "alex_be",
      "descendants": 39,
      "id": 47693153,
      "kids": [
        47700015,
        47693178,
        47696676,
        47699658,
        47694877,
        47694756,
        47695094,
        47694605,
        47695715
      ],
      "score": 305,
      "time": 1775668306,
      "title": "Understanding the Kalman filter with a simple radar example",
      "type": "story",
      "url": "https://kalmanfilter.net"
    },
    {
      "by": "jxmorris12",
      "descendants": 4,
      "id": 47678690,
      "kids": [
        47699770,
        47699034,
        47699555,
        47699355
      ],
      "score": 62,
      "time": 1775583253,
      "title": "Six (and a half) intuitions for KL divergence",
      "type": "story",
      "url": "https://www.perfectlynormal.co.uk/blog-kl-divergence"
    },
    {
      "by": "surprisetalk",
      "descendants": 139,
      "id": 47688678,
      "kids": [
        47700002,
        47690939,
        47695005,
        47689874,
        47690123,
        47696303,
        47689862,
        47694629,
        47698840,
        47690442,
        47689787,
        47691324,
        47692693,
        47693672,
        47697061,
        47697651,
        47690283,
        47690418,
        47691999,
        47692658,
        47692510,
        47690535,
        47689878,
        47691340,
        47690987,
        47689752,
        47691264,
        47694459,
        47693115,
        47690740,
        47690374
      ],
      "score": 489,
      "time": 1775647250,
      "title": "They're made out of meat (1991)",
      "type": "story",
      "url": "http://www.terrybisson.com/theyre-made-out-of-meat-2/"
    },
    {
      "by": "chabons",
      "descendants": 322,
      "id": 47692043,
      "kids": [
        47693187,
        47699868,
        47697421,
        47692789,
        47697335,
        47692812,
        47695791,
        47700098,
        47696376,
        47693857,
        47697800,
        47692081,
        47699443,
        47693235,
        47692426,
        47693379,
        47692699,
        47692488,
        47699487,
        47694347,
        47694180,
        47694292,
        47692557,
        47693523,
        47692629,
        47693700,
        47699282,
        47695589,
        47693787,
        47693750,
        47693817,
        47694834,
        47696420,
        47692449,
        47693284,
        47697268,
        47692689,
        47693734,
        47692856,
        47697014,
        47696005,
        47696812,
        47692474,
        47692814,
        47695551,
        47694251,
        47692467,
        47696205,
        47695630,
        47697086,
        47694284,
        47695861,
        47694322,
        47692660,
        47693353,
        47692533,
        47693958,
        47695895,
        47695690,
        47694315,
        47693480,
        47694428,
        47692401,
        47698965,
        47692870,
        47693151,
        47692937,
        47698873,
        47694724,
        47693404,
        47692752,
        47698571,
        47692659,
        47693169,
        47694118,
        47693674,
        47699592,
        47695242,
        47692521,
        47694268,
        47692976,
        47693194
      ],
      "score": 318,
      "text": "<a href=\"https:&#x2F;&#x2F;meta.ai&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;meta.ai&#x2F;</a>",
      "time": 1775664092,
      "title": "Muse Spark: Scaling towards personal superintelligence",
      "type": "story",
      "url": "https://ai.meta.com/blog/introducing-muse-spark-msl/?_fb_noscript=1"
    },
    {
      "by": "jfirebaugh",
      "descendants": 426,
      "id": 47685320,
      "kids": [
        47699182,
        47699771,
        47696618,
        47700121,
        47695123,
        47687739,
        47699115,
        47698080,
        47698726,
        47699047,
        47685479,
        47697250,
        47699149,
        47696517,
        47696668,
        47697328,
        47689029,
        47698957,
        47697987,
        47699889,
        47689645,
        47696655,
        47699081,
        47698591,
        47698712,
        47694386,
        47687532,
        47698852,
        47696671,
        47699298,
        47696118,
        47699774,
        47690778,
        47689410,
        47699979,
        47698697,
        47686723,
        47696711,
        47687059,
        47697137,
        47697208,
        47696927,
        47697468,
        47685723,
        47696915,
        47699736,
        47698657,
        47688515,
        47698212,
        47690881,
        47698283,
        47699524,
        47699477,
        47696549,
        47686606,
        47696432,
        47697113,
        47686996,
        47691335,
        47699256,
        47693554,
        47686577,
        47698804,
        47696233,
        47696538,
        47698198,
        47698007,
        47697695,
        47687189,
        47697415,
        47697413,
        47696770,
        47698987,
        47697064,
        47696352,
        47696251,
        47697671,
        47697664,
        47698522,
        47698511,
        47685971,
        47696688,
        47686298,
        47699730,
        47699721,
        47692621,
        47699500,
        47685804,
        47686776,
        47696315,
        47696849,
        47690500,
        47685420,
        47696636
      ],
      "score": 425,
      "text": "<a href=\"https:&#x2F;&#x2F;archive.is&#x2F;iRBng\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.is&#x2F;iRBng</a>",
      "time": 1775623077,
      "title": "Who is Satoshi Nakamoto? My quest to unmask Bitcoin's creator",
      "type": "story",
      "url": "https://www.nytimes.com/2026/04/08/business/bitcoin-satoshi-nakamoto-identity-adam-back.html"
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
      "title": "Building DevConfessions: Tackling Imposter Syndrome with Anonymous Data",
      "description": "Have you ever pushed code on a Friday at 4:59 PM and spent the entire weekend sweating because you...",
      "url": "https://dev.to/getinfotoyou/building-devconfessions-tackling-imposter-syndrome-with-anonymous-data-4b4j",
      "tags": "android, programming, career, kotlin",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "getinfotoyou"
    },
    {
      "title": "The Art of Saying \"No\" in Code Review",
      "description": "The Art of Saying \"No\" in Code Review: 7 Levels from Soft to Hard   There's a skill that...",
      "url": "https://dev.to/devglish/the-art-of-saying-no-in-code-review-4l7b",
      "tags": "career, codequality, softwaredevelopment, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "devglish"
    },
    {
      "title": "What Building Fintech Apps Taught Me About Writing Better Code",
      "description": "Fintech is unforgiving. You're dealing with real money and real users. A glitch in a social app is a...",
      "url": "https://dev.to/abdulmalik_muhammad/what-building-fintech-apps-taught-me-about-writing-better-code-3bmc",
      "tags": "fintech, javascript, typescript, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "abdulmalik_muhammad"
    },
    {
      "title": "Find me an app or Build me an app?",
      "description": "Why be a developer now?   When I had graduated in 2016, Software Development was at its peak so they...",
      "url": "https://dev.to/shankara_run/find-me-an-app-or-build-me-an-app-1ec0",
      "tags": "career, developer, discuss, softwaredevelopment",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "shankara_run"
    },
    {
      "title": "How to Explain Employment Gaps on Your Resume (2026 Guide)",
      "description": "The hiring landscape has changed. Mass layoffs at major tech companies, a global pandemic that...",
      "url": "https://dev.to/sarah_m/how-to-explain-employment-gaps-on-your-resume-2026-guide-3kan",
      "tags": "career, resume, beginners, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sarah_m"
    },
    {
      "title": "How to Tailor Your Resume for Each Job (10-Minute Method)",
      "description": "Sending the same resume to every job is the single biggest reason qualified candidates get filtered...",
      "url": "https://dev.to/sarah_m/how-to-tailor-your-resume-for-each-job-10-minute-method-299h",
      "tags": "career, resume, beginners, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "sarah_m"
    },
    {
      "title": "System Design Interview - Designing from Invariants",
      "description": "Designing from Invariants   Software architecture is frequently treated as an exercise in...",
      "url": "https://dev.to/tomerbendavid/system-design-interview-designing-from-invariants-3ede",
      "tags": "career, architecture, distributedsystems, systemdesign",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "tomerbendavid"
    },
    {
      "title": "🔐 From 0 Production-Grade Security",
      "description": "“If it works on localhost, hackers say thank you.”   Let’s go from completely insecure →...",
      "url": "https://dev.to/kirazxnxth/from-0-production-grade-security-how-to-actually-secure-a-web-app-d2l",
      "tags": "webdev, programming, security, career",
      "reactions": 2,
      "comments": 0,
      "reading_time": 3,
      "author": "kirazxnxth"
    },
    {
      "title": "Why I built a typing trainer to \"debug\" my hands (and break the 80 WPM plateau)",
      "description": "Hi Everyone!  As a software engineer, my keyboard is my primary instrument. But for the last three...",
      "url": "https://dev.to/youcancallmedustin/why-i-built-a-typing-trainer-to-debug-my-hands-and-break-the-80-wpm-plateau-49jm",
      "tags": "productivity, showdev, career, performance",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "youcancallmedustin"
    },
    {
      "title": "I Switched to Stacked PRs. My Team Reviews Code in Hours, Not Days.",
      "description": "I used to open PRs with 800 lines changed and wonder why my team took two days to review them.  I am...",
      "url": "https://dev.to/adioof/i-switched-to-stacked-prs-my-team-reviews-code-in-hours-not-days-429i",
      "tags": "discuss, programming, webdev, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "adioof"
    }
  ]
}
```

