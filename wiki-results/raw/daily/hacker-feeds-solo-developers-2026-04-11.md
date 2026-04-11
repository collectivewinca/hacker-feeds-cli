# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-11 06:38:19 UTC

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
      "forks": 825,
      "added_stars": 3512,
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
          "username": "ldnvnbl",
          "href": "https://github.com/ldnvnbl",
          "avatar": "https://avatars.githubusercontent.com/u/3798479"
        },
        {
          "username": "Bohan-J",
          "href": "https://github.com/Bohan-J",
          "avatar": "https://avatars.githubusercontent.com/u/52446949"
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
      "forks": 1859,
      "added_stars": 10077,
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
      "author": "YishenTu",
      "repo": "claudian",
      "avatar": "https://github.com/YishenTu.png",
      "repo_link": "https://github.com/YishenTu/claudian",
      "desc": "An Obsidian plugin that embeds Claude Code as an AI collaborator in your vault",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 430,
      "added_stars": 1454,
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
      "author": "yamadashy",
      "repo": "repomix",
      "avatar": "https://github.com/yamadashy.png",
      "repo_link": "https://github.com/yamadashy/repomix",
      "desc": "📦 Repomix is a powerful tool that packs your entire repository into a single, AI-friendly file. Perfect for when you need to feed your codebase to Large Language Models (LLMs) or other AI tools like Claude, ChatGPT, DeepSeek, Perplexity, Gemini, Gemma, Llama, Grok, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1124,
      "added_stars": 414,
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
      "author": "tobi",
      "repo": "qmd",
      "avatar": "https://github.com/tobi.png",
      "repo_link": "https://github.com/tobi/qmd",
      "desc": "mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1270,
      "added_stars": 3018,
      "builtBy": [
        {
          "username": "tobi",
          "href": "https://github.com/tobi",
          "avatar": "https://avatars.githubusercontent.com/u/347"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "danmackinlay",
          "href": "https://github.com/danmackinlay",
          "avatar": "https://avatars.githubusercontent.com/u/21740"
        },
        {
          "username": "shreyaskarnik",
          "href": "https://github.com/shreyaskarnik",
          "avatar": "https://avatars.githubusercontent.com/u/311217"
        },
        {
          "username": "burke",
          "href": "https://github.com/burke",
          "avatar": "https://avatars.githubusercontent.com/u/1284"
        }
      ]
    },
    {
      "author": "obsidianmd",
      "repo": "obsidian-clipper",
      "avatar": "https://github.com/obsidianmd.png",
      "repo_link": "https://github.com/obsidianmd/obsidian-clipper",
      "desc": "Highlight and capture the web in your favorite browser. The official Web Clipper extension for Obsidian.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 384,
      "added_stars": 180,
      "builtBy": [
        {
          "username": "kepano",
          "href": "https://github.com/kepano",
          "avatar": "https://avatars.githubusercontent.com/u/10565871"
        },
        {
          "username": "Quorafind",
          "href": "https://github.com/Quorafind",
          "avatar": "https://avatars.githubusercontent.com/u/13215013"
        },
        {
          "username": "d-kaue",
          "href": "https://github.com/d-kaue",
          "avatar": "https://avatars.githubusercontent.com/u/25023130"
        },
        {
          "username": "imadreamerboy",
          "href": "https://github.com/imadreamerboy",
          "avatar": "https://avatars.githubusercontent.com/u/48453988"
        },
        {
          "username": "voi-tech",
          "href": "https://github.com/voi-tech",
          "avatar": "https://avatars.githubusercontent.com/u/81070582"
        }
      ]
    },
    {
      "author": "immich-app",
      "repo": "immich",
      "avatar": "https://github.com/immich-app.png",
      "repo_link": "https://github.com/immich-app/immich",
      "desc": "High performance self-hosted photo and video management solution.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5355,
      "added_stars": 1360,
      "builtBy": [
        {
          "username": "alextran1502",
          "href": "https://github.com/alextran1502",
          "avatar": "https://avatars.githubusercontent.com/u/27055614"
        },
        {
          "username": "jrasm91",
          "href": "https://github.com/jrasm91",
          "avatar": "https://avatars.githubusercontent.com/u/4334196"
        },
        {
          "username": "mertalev",
          "href": "https://github.com/mertalev",
          "avatar": "https://avatars.githubusercontent.com/u/101130780"
        },
        {
          "username": "danieldietzler",
          "href": "https://github.com/danieldietzler",
          "avatar": "https://avatars.githubusercontent.com/u/36593685"
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
      "forks": 1104,
      "added_stars": 2271,
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
      "forks": 1914,
      "added_stars": 7325,
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
      "forks": 5271,
      "added_stars": 6215,
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
      "forks": 1930,
      "added_stars": 5485,
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
      "forks": 3913,
      "added_stars": 1916,
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
      "forks": 413,
      "added_stars": 874,
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
      "author": "openimsdk",
      "repo": "open-im-server",
      "avatar": "https://github.com/openimsdk.png",
      "repo_link": "https://github.com/openimsdk/open-im-server",
      "desc": "IM Chat OpenClaw",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2857,
      "added_stars": 433,
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
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2971,
      "added_stars": 941,
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
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 341,
      "added_stars": 901,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3811,
      "added_stars": 1336,
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
      "author": "smtg-ai",
      "repo": "claude-squad",
      "avatar": "https://github.com/smtg-ai.png",
      "repo_link": "https://github.com/smtg-ai/claude-squad",
      "desc": "Manage multiple AI terminal agents like Claude Code, Codex, OpenCode, and Amp.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 491,
      "added_stars": 693,
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
      "author": "wavetermdev",
      "repo": "waveterm",
      "avatar": "https://github.com/wavetermdev.png",
      "repo_link": "https://github.com/wavetermdev/waveterm",
      "desc": "An open-source, AI-integrated, cross-platform terminal for seamless workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 896,
      "added_stars": 1536,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 735,
      "added_stars": 1423,
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
      "author": "XTLS",
      "repo": "RealiTLScanner",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/RealiTLScanner",
      "desc": "A TLS server scanner for Reality",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 239,
      "added_stars": 330,
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
      "forks": 2743,
      "added_stars": 2619,
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
      "author": "supabase",
      "repo": "cli",
      "avatar": "https://github.com/supabase.png",
      "repo_link": "https://github.com/supabase/cli",
      "desc": "Supabase CLI. Manage postgres migrations, run Supabase locally, deploy edge functions. Postgres backups. Generating types from your database schema.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 423,
      "added_stars": 491,
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
      "forks": 5167,
      "added_stars": 1268,
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
      "author": "junegunn",
      "repo": "fzf",
      "avatar": "https://github.com/junegunn.png",
      "repo_link": "https://github.com/junegunn/fzf",
      "desc": "🌸 A command-line fuzzy finder",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2761,
      "added_stars": 1320,
      "builtBy": [
        {
          "username": "junegunn",
          "href": "https://github.com/junegunn",
          "avatar": "https://avatars.githubusercontent.com/u/700826"
        },
        {
          "username": "bitraid",
          "href": "https://github.com/bitraid",
          "avatar": "https://avatars.githubusercontent.com/u/4866740"
        },
        {
          "username": "janlazo",
          "href": "https://github.com/janlazo",
          "avatar": "https://avatars.githubusercontent.com/u/8740057"
        },
        {
          "username": "LangLangBart",
          "href": "https://github.com/LangLangBart",
          "avatar": "https://avatars.githubusercontent.com/u/92653266"
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
      "forks": 7029,
      "added_stars": 46639,
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
      "author": "FujiwaraChoki",
      "repo": "MoneyPrinterV2",
      "avatar": "https://github.com/FujiwaraChoki.png",
      "repo_link": "https://github.com/FujiwaraChoki/MoneyPrinterV2",
      "desc": "Automate the process of making money online.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3142,
      "added_stars": 14315,
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
      "forks": 7675,
      "added_stars": 32590,
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
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7984,
      "added_stars": 40273,
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
      "author": "mvanhorn",
      "repo": "last30days-skill",
      "avatar": "https://github.com/mvanhorn.png",
      "repo_link": "https://github.com/mvanhorn/last30days-skill",
      "desc": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1675,
      "added_stars": 16503,
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
      "forks": 8932,
      "added_stars": 17751,
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
      "forks": 1062,
      "added_stars": 4187,
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
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3517,
      "added_stars": 8661,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1583,
      "added_stars": 16520,
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
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4433,
      "added_stars": 14865,
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
      "author": "langchain-ai",
      "repo": "deepagents",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/deepagents",
      "desc": "Agent harness built with LangChain and LangGraph. Equipped with a planning tool, a filesystem backend, and the ability to spawn subagents - well-equipped to handle complex agentic tasks.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2814,
      "added_stars": 10114,
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
          "username": "sydney-runkle",
          "href": "https://github.com/sydney-runkle",
          "avatar": "https://avatars.githubusercontent.com/u/54324534"
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
      "forks": 13008,
      "added_stars": 10005,
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
      "forks": 522,
      "added_stars": 6408,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Unsloth Studio is a web UI for training and running open models like Gemma 4, Qwen3.5, DeepSeek, gpt-oss locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5257,
      "added_stars": 7472,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1516,
      "added_stars": 6288,
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
      "forks": 3071,
      "added_stars": 10742,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1914,
      "added_stars": 6995,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "noahzweben",
          "href": "https://github.com/noahzweben",
          "avatar": "https://avatars.githubusercontent.com/u/12701358"
        },
        {
          "username": "ThariqS",
          "href": "https://github.com/ThariqS",
          "avatar": "https://avatars.githubusercontent.com/u/140827"
        }
      ]
    },
    {
      "author": "datalab-to",
      "repo": "chandra",
      "avatar": "https://github.com/datalab-to.png",
      "repo_link": "https://github.com/datalab-to/chandra",
      "desc": "OCR model that handles complex tables, forms, handwriting with full layout.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 872,
      "added_stars": 3647,
      "builtBy": [
        {
          "username": "VikParuchuri",
          "href": "https://github.com/VikParuchuri",
          "avatar": "https://avatars.githubusercontent.com/u/913340"
        },
        {
          "username": "sandy0kwon",
          "href": "https://github.com/sandy0kwon",
          "avatar": "https://avatars.githubusercontent.com/u/78377296"
        },
        {
          "username": "zanussbaum",
          "href": "https://github.com/zanussbaum",
          "avatar": "https://avatars.githubusercontent.com/u/33707069"
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
      "title": "You’re a Real Software Developer Only If…",
      "description": "Uff, I’m finally done with my talk at jsDay 2026!  And honestly? It went at least good. People showed...",
      "url": "https://dev.to/sylwia-lask/youre-a-real-software-developer-only-if-2mo8",
      "tags": "jokes, devlive",
      "reactions": 119,
      "comments": 68,
      "reading_time": 3,
      "author": "sylwia-lask"
    },
    {
      "title": "What was your win this week??",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-3df3",
      "tags": "discuss, weeklyretro",
      "reactions": 22,
      "comments": 23,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "I tried to make DevFest Ireland accessible - and ended up building a SaaS",
      "description": "The email I couldn't ignore   A few months into organising DevFest Ireland 2025, I received...",
      "url": "https://dev.to/gdg/i-tried-to-make-devfest-ireland-accessible-and-ended-up-building-a-saas-1o87",
      "tags": "a11y, saas, showdev, startup",
      "reactions": 19,
      "comments": 3,
      "reading_time": 5,
      "author": "jouwdan"
    },
    {
      "title": "Building a Multimodal Cross Cloud Live Agent with ADK, Azure Fabric, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build cross cloud...",
      "url": "https://dev.to/gde/building-a-multimodal-cross-cloud-live-agent-with-adk-azure-fabric-and-gemini-cli-3k4a",
      "tags": "googlecloudplatform, adk, gemini, azure",
      "reactions": 4,
      "comments": 0,
      "reading_time": 7,
      "author": "xbill"
    },
    {
      "title": "What is an LLM actually doing when it's \"thinking\"?",
      "description": "Ever wondered what an LLM is doing when it's \"thinking\"?  In this episode of Release Notes Explained,...",
      "url": "https://dev.to/googleai/what-is-an-llm-actually-doing-when-its-thinking-5do5",
      "tags": "gemini, llm, ai, machinelearning",
      "reactions": 20,
      "comments": 1,
      "reading_time": 1,
      "author": "nikitamaia"
    },
    {
      "title": "Building a Multimodal Cross Cloud Live Agent with ADK, Amazon ECS Express, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build cross cloud...",
      "url": "https://dev.to/gde/building-a-multimodal-cross-cloud-live-agent-with-adk-amazon-ecs-express-and-gemini-cli-30a8",
      "tags": "geminilive, python, gemini, googleadk",
      "reactions": 10,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
    },
    {
      "title": "Cross Cloud Multi Agent Comic Builder with ADK, Amazon EKS, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build low code...",
      "url": "https://dev.to/gde/cross-cloud-multi-agent-comic-builder-with-adk-amazon-eks-and-gemini-cli-4o10",
      "tags": "gemini, googleadk, python, aws",
      "reactions": 3,
      "comments": 0,
      "reading_time": 7,
      "author": "xbill"
    },
    {
      "title": "Cross Cloud Multi Agent Comic Builder with ADK, Amazon ECS Express, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build low code...",
      "url": "https://dev.to/gde/cross-cloud-multi-agent-comic-builder-with-adk-amazon-ecs-express-and-gemini-cli-41me",
      "tags": "google, gemini, ecsexpress, python",
      "reactions": 3,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
    },
    {
      "title": "I Keep Telling Claude the Same Things. So He Started Writing Them Down Himself.",
      "description": "A small moment that changed how I think about AI coding tools.     If you've used Claude Code for...",
      "url": "https://dev.to/eli_coding/i-keep-telling-claude-the-same-things-so-he-started-writing-them-down-himself-1i9",
      "tags": "angular, ai, claude, webdev",
      "reactions": 2,
      "comments": 7,
      "reading_time": 4,
      "author": "eli_coding"
    },
    {
      "title": "Tracking, Propagation Attacks, and What We Found in Real Email Traffic",
      "description": "A few weeks ago I posted about finding the same per-recipient identifier in three independent places...",
      "url": "https://dev.to/wadco/tracking-propagation-attacks-and-what-we-found-in-real-traffic-4pc2",
      "tags": "privacy, security, webdev",
      "reactions": 11,
      "comments": 0,
      "reading_time": 7,
      "author": "wadco"
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
      "title": "With AI, you barely need a frontend framework",
      "url": "https://dlants.me/vamp.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "vibecoding",
        "web"
      ],
      "id": "qywh3s"
    },
    {
      "title": "Advanced Mac Substitute",
      "url": "https://www.v68k.org/advanced-mac-substitute/",
      "score": 3,
      "comments": 2,
      "tags": [
        "retrocomputing"
      ],
      "id": "yysxis"
    },
    {
      "title": "A bet on whether ML-KEM-768 or X25519 will break first",
      "url": "https://github.com/FiloSottile/ecc-vs-lattices-long-bet",
      "score": 12,
      "comments": 1,
      "tags": [
        "cryptography"
      ],
      "id": "sxvq6g"
    },
    {
      "title": "In defense of GitHub's poor uptime",
      "url": "https://evanhahn.com/in-defense-of-githubs-poor-uptime/",
      "score": 15,
      "comments": 8,
      "tags": [
        "culture",
        "devops"
      ],
      "id": "gh1rks"
    },
    {
      "title": "The difficulty of making sure your website is broken",
      "url": "https://letsencrypt.org/2026/04/10/test-sites.html",
      "score": 16,
      "comments": 1,
      "tags": [
        "web"
      ],
      "id": "k11wgv"
    },
    {
      "title": "Put your SSH keys in your TPM chip",
      "url": "https://raymii.org/s/tutorials/Put_your_SSH_keys_in_your_TPM_chip.html",
      "score": 29,
      "comments": 7,
      "tags": [
        "linux",
        "security"
      ],
      "id": "ggum7f"
    },
    {
      "title": "Meet Kiki - an array language",
      "url": "https://eli.li/kiki",
      "score": 28,
      "comments": 8,
      "tags": [
        "apl",
        "plt"
      ],
      "id": "cwxvlh"
    },
    {
      "title": "Deterministic Primality Testing for Limited Bit Width",
      "url": "https://www.jeremykun.com/2026/04/07/deterministic-miller-rabin/",
      "score": 2,
      "comments": 0,
      "tags": [
        "math"
      ],
      "id": "ilmasz"
    },
    {
      "title": "Ursa - a new Iceberg-first storage engine for Kafka",
      "url": "https://topicpartition.io/blog/ursa-a-new-lakehouse-first-storage-engine-for-kafka",
      "score": 4,
      "comments": 0,
      "tags": [
        "distributed"
      ],
      "id": "lnicis"
    },
    {
      "title": "Capsicum vs seccomp: Process Sandboxing",
      "url": "https://vivianvoss.net/blog/capsicum-vs-seccomp",
      "score": 9,
      "comments": 7,
      "tags": [
        "freebsd",
        "linux",
        "security"
      ],
      "id": "hbirya"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "cperciva",
      "descendants": 5,
      "id": 47727711,
      "kids": [
        47727990,
        47727965,
        47727959
      ],
      "score": 62,
      "time": 1775885470,
      "title": "20 Years on AWS and Never Not My Job",
      "type": "story",
      "url": "https://www.daemonology.net/blog/2026-04-11-20-years-on-AWS-and-never-not-my-job.html"
    },
    {
      "by": "normanvalentine",
      "descendants": 335,
      "id": 47724352,
      "kids": [
        47728071,
        47726595,
        47727641,
        47725701,
        47725725,
        47724910,
        47724815,
        47725745,
        47724847,
        47725939,
        47724846,
        47724667,
        47725347,
        47725779,
        47724820,
        47724854,
        47727667,
        47727843,
        47727770,
        47725378,
        47727738,
        47724721,
        47727957,
        47724894,
        47724953,
        47727695,
        47727687,
        47724827,
        47726962,
        47726805,
        47725177,
        47727247,
        47727363,
        47724693,
        47724678,
        47726713,
        47727528,
        47724706,
        47725694,
        47726110,
        47725565,
        47725999,
        47725808,
        47725279,
        47726642,
        47726882,
        47726129,
        47727041,
        47725872,
        47724954,
        47725141,
        47725395,
        47725056,
        47727043,
        47725069,
        47726312,
        47725379,
        47726150,
        47724800,
        47725032,
        47725971,
        47726981,
        47724895,
        47725838,
        47727266,
        47725291,
        47724958,
        47725271,
        47727452,
        47724858,
        47725383,
        47724828,
        47725391,
        47725679,
        47726388,
        47725564,
        47725257,
        47727431,
        47727383,
        47726214,
        47725213,
        47727264,
        47727162,
        47724837,
        47725666,
        47724903,
        47727074,
        47725845,
        47726763,
        47724938,
        47724836,
        47726158,
        47724890,
        47726052,
        47725955,
        47725471,
        47725401,
        47725139,
        47724863,
        47724664,
        47724853,
        47725804,
        47725956,
        47726070,
        47725535,
        47724753,
        47724838,
        47726669,
        47725543,
        47725190
      ],
      "score": 636,
      "time": 1775859400,
      "title": "Filing the corners off my MacBooks",
      "type": "story",
      "url": "https://kentwalters.com/posts/corners/"
    },
    {
      "by": "areoform",
      "descendants": 253,
      "id": 47725583,
      "kids": [
        47725663,
        47726166,
        47726338,
        47725721,
        47725840,
        47725824,
        47726124,
        47725729,
        47725727,
        47725599,
        47727226,
        47727526,
        47726306,
        47725928,
        47725619,
        47727389,
        47725747,
        47726261,
        47726399,
        47725769,
        47726100,
        47726073,
        47727545,
        47726157,
        47725806,
        47726094,
        47727803,
        47725686,
        47726054,
        47725616,
        47726703,
        47727379,
        47726949,
        47726331,
        47726071,
        47726064,
        47725647,
        47726933,
        47725710,
        47726443,
        47726637,
        47725854,
        47725938,
        47727063
      ],
      "score": 749,
      "time": 1775866251,
      "title": "Artemis II safely splashes down",
      "type": "story",
      "url": "https://www.cbsnews.com/live-updates/artemis-ii-splashdown-return/"
    },
    {
      "by": "burnt-resistor",
      "descendants": 137,
      "id": 47719740,
      "kids": [
        47728050,
        47721597,
        47720716,
        47721829,
        47722508,
        47720357,
        47723984,
        47727938,
        47720803,
        47722421,
        47720652,
        47727243,
        47721279,
        47720380,
        47725801,
        47722980,
        47726238,
        47727842,
        47720319,
        47726074,
        47722174,
        47720679,
        47725655,
        47725331,
        47723056,
        47721552,
        47721738,
        47720764,
        47720814,
        47723341,
        47720461,
        47725610,
        47721537,
        47725433,
        47721610,
        47723290,
        47723434,
        47725106,
        47721505,
        47720560,
        47722300,
        47720946,
        47721341,
        47720958,
        47723181,
        47723156,
        47723037,
        47725857,
        47720259,
        47724734,
        47723152,
        47719983,
        47722619,
        47722369,
        47723293,
        47723500,
        47727950,
        47723656,
        47722377,
        47721450,
        47720617,
        47720604
      ],
      "score": 760,
      "time": 1775835448,
      "title": "1D Chess",
      "type": "story",
      "url": "https://rowan441.github.io/1dchess/chess.html"
    },
    {
      "by": "neversaydie",
      "descendants": 161,
      "id": 47722333,
      "kids": [
        47723365,
        47722837,
        47726577,
        47722830,
        47724519,
        47723584,
        47722818,
        47727245,
        47724230,
        47727633,
        47723655,
        47723084,
        47723562,
        47724381,
        47724102,
        47726367,
        47727913,
        47723433,
        47727595,
        47725063,
        47724456,
        47725513,
        47726217,
        47724438,
        47723279,
        47724884,
        47723266,
        47722552
      ],
      "score": 300,
      "time": 1775848222,
      "title": "Chimpanzees in Uganda locked in eight-year 'civil war', say researchers",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/cr71lkzv49po"
    },
    {
      "by": "RohanAdwankar",
      "descendants": 31,
      "id": 47724118,
      "kids": [
        47728062,
        47726171,
        47727823,
        47724874,
        47724814,
        47725059,
        47727494,
        47725536,
        47725431,
        47724911,
        47726688,
        47726474,
        47725998,
        47725100,
        47725969
      ],
      "score": 291,
      "time": 1775858193,
      "title": "Installing every* Firefox extension",
      "type": "story",
      "url": "https://jack.cab/blog/every-firefox-extension"
    },
    {
      "by": "iceberger2001",
      "descendants": 20,
      "id": 47698455,
      "kids": [
        47728024,
        47728066,
        47728045,
        47727524,
        47727826,
        47727978,
        47727625,
        47727874,
        47727933,
        47727717,
        47728011,
        47727653,
        47698646,
        47727833,
        47727961,
        47727714,
        47727765,
        47698777,
        47698456
      ],
      "score": 44,
      "time": 1775699567,
      "title": "Starfling: A one-tap endless orbital slingshot game in a single HTML file",
      "type": "story",
      "url": "https://playstarfling.com"
    },
    {
      "by": "zx2c4",
      "descendants": 125,
      "id": 47719942,
      "kids": [
        47720228,
        47720391,
        47727820,
        47727064,
        47727646,
        47721949,
        47722922,
        47723669,
        47720471,
        47722128,
        47720244,
        47725762,
        47720203,
        47726800,
        47720993,
        47722936,
        47722482,
        47722580,
        47723192,
        47721859,
        47722225
      ],
      "score": 446,
      "text": "Recent and related: <i>Microsoft terminated the account VeraCrypt used to sign Windows drivers</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47686549\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47686549</a>",
      "time": 1775836192,
      "title": "WireGuard makes new Windows release following Microsoft signing resolution",
      "type": "story",
      "url": "https://lists.zx2c4.com/pipermail/wireguard/2026-April/009561.html"
    },
    {
      "by": "GenericCanadian",
      "descendants": 10,
      "id": 47698111,
      "kids": [
        47727986,
        47727979,
        47727639,
        47727708,
        47727186,
        47726790
      ],
      "score": 62,
      "time": 1775696327,
      "title": "Bevy game development tutorials and in-depth resources",
      "type": "story",
      "url": "https://taintedcoders.com/"
    },
    {
      "by": "1659447091",
      "descendants": 3,
      "id": 47727575,
      "kids": [
        47728072,
        47727972
      ],
      "score": 6,
      "time": 1775883857,
      "title": "Great at gaming? US air traffic control wants you to apply",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/ce84rvx0e6do"
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
      "title": "I'm a bit lost.",
      "description": "The job market sucks enough without being disabled.",
      "url": "https://dev.to/hubedav/im-a-bit-lost-2dko",
      "tags": "jobs, career, jobmarket, discuss",
      "reactions": 8,
      "comments": 10,
      "reading_time": 4,
      "author": "hubedav"
    },
    {
      "title": "The Formula Was Exact. The Assumption Was Wrong. That's Not an AI Problem.",
      "description": "Your geology will always govern your geophysics.   My lecturer said it once. I wrote it down. I...",
      "url": "https://dev.to/dannwaneri/the-formula-was-exact-the-assumption-was-wrong-thats-not-an-ai-problem-58dm",
      "tags": "ai, webdev, career, python",
      "reactions": 11,
      "comments": 1,
      "reading_time": 5,
      "author": "dannwaneri"
    },
    {
      "title": "The XY Problem: How to spot it, stop it, and ask better questions",
      "description": "A client emails you on a Friday afternoon. \"Quick one. How do I change the font size on just one word...",
      "url": "https://dev.to/adamgreenough/the-xy-problem-how-to-spot-it-stop-it-and-ask-better-questions-4ied",
      "tags": "discuss, productivity, programming, career",
      "reactions": 5,
      "comments": 1,
      "reading_time": 6,
      "author": "adamgreenough"
    },
    {
      "title": "AI Job Hunt Match Agent in n8n (Using AI_Job_Hunt_Agent_N8N)",
      "description": "I updated my workflow to use the AI_Job_Hunt_Agent_N8N file as the source of truth.  Instead of...",
      "url": "https://dev.to/parupati/ai-job-hunt-match-agent-in-n8n-using-aijobhuntagentn8n-1fnh",
      "tags": "ai, automation, career, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "parupati"
    },
    {
      "title": "Backend Developer Resume Example (APIs & Microservices) 2026",
      "description": "Backend roles are evaluated on three things: can you build reliable systems, can you build them at...",
      "url": "https://dev.to/sarah_m/backend-developer-resume-example-apis-microservices-2026-5337",
      "tags": "backend, career, resume, javascript",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sarah_m"
    },
    {
      "title": "DevOps Engineer Resume Example (Docker, Kubernetes, Terraform) 2026",
      "description": "DevOps hiring managers scan resumes for two things: the tools you use and the outcomes you delivered....",
      "url": "https://dev.to/sarah_m/devops-engineer-resume-example-docker-kubernetes-terraform-2026-28nh",
      "tags": "devops, career, resume, kubernetes",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "sarah_m"
    },
    {
      "title": "I replaced my job search spreadsheet with a simpler CV workflow",
      "description": "I replaced my job search spreadsheet with a simpler CV workflow   My spreadsheet worked,...",
      "url": "https://dev.to/silas_c/i-replaced-my-job-search-spreadsheet-with-a-simpler-cv-workflow-14pf",
      "tags": "career, productivity, webdev, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "silas_c"
    },
    {
      "title": "Mastering the \"Sorted Subsequence of Size 3\" Problem: Two Efficient Java Approaches",
      "description": "Finding a sorted subsequence of a specific size is a classic algorithmic challenge that tests your...",
      "url": "https://dev.to/partners_dsa_823760c83281/mastering-the-sorted-subsequence-of-size-3-problem-two-efficient-java-approaches-44ba",
      "tags": "softwareengineering, career, java, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "partners_dsa_823760c83281"
    },
    {
      "title": "I sent 50 job applications with no response. Here's the embarrassingly simple thing I was doing wrong.",
      "description": "This is a little embarrassing to admit.  I'm a developer with 3 years of experience. I know my stuff....",
      "url": "https://dev.to/abhijeet_singh_cf3f1d1595/i-sent-50-job-applications-with-no-response-heres-the-embarrassingly-simple-thing-i-was-doing-4glf",
      "tags": "webdev, career, javascript, jobsearch",
      "reactions": 1,
      "comments": 1,
      "reading_time": 2,
      "author": "abhijeet_singh_cf3f1d1595"
    },
    {
      "title": "macOS Just Admitted Its Privacy Settings Cannot Be Trusted",
      "description": "macOS just admitted its Privacy settings can't be trusted.  The fix requires a Terminal command...",
      "url": "https://dev.to/adioof/macos-just-admitted-its-privacy-settings-cannot-be-trusted-3eca",
      "tags": "discuss, javascript, career, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "adioof"
    }
  ]
}
```

