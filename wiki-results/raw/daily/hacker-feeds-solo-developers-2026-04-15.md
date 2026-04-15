# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-15 06:54:23 UTC

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
      "forks": 1569,
      "added_stars": 9823,
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
      "forks": 2829,
      "added_stars": 4024,
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
      "forks": 4544,
      "added_stars": 8742,
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
      "author": "YishenTu",
      "repo": "claudian",
      "avatar": "https://github.com/YishenTu.png",
      "repo_link": "https://github.com/YishenTu/claudian",
      "desc": "An Obsidian plugin that embeds Claude Code as an AI collaborator in your vault",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 473,
      "added_stars": 1699,
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
      "author": "ResearAI",
      "repo": "DeepScientist",
      "avatar": "https://github.com/ResearAI.png",
      "repo_link": "https://github.com/ResearAI/DeepScientist",
      "desc": "Now, Stronger AI Pushes Frontiers, Stronger Our Shared Future.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 239,
      "added_stars": 400,
      "builtBy": [
        {
          "username": "ResearAI",
          "href": "https://github.com/ResearAI",
          "avatar": "https://avatars.githubusercontent.com/u/205890474"
        },
        {
          "username": "zhu-minjun",
          "href": "https://github.com/zhu-minjun",
          "avatar": "https://avatars.githubusercontent.com/u/69579532"
        },
        {
          "username": "netizenXuan",
          "href": "https://github.com/netizenXuan",
          "avatar": "https://avatars.githubusercontent.com/u/180856450"
        },
        {
          "username": "zhwxv",
          "href": "https://github.com/zhwxv",
          "avatar": "https://avatars.githubusercontent.com/u/156294497"
        },
        {
          "username": "gaofeng21cn",
          "href": "https://github.com/gaofeng21cn",
          "avatar": "https://avatars.githubusercontent.com/u/5626387"
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
      "forks": 1344,
      "added_stars": 2223,
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
      "author": "siddharthvaddem",
      "repo": "openscreen",
      "avatar": "https://github.com/siddharthvaddem.png",
      "repo_link": "https://github.com/siddharthvaddem/openscreen",
      "desc": "Create stunning demos for free. Open-source, no subscriptions, no watermarks, and free for commercial use. An alternative to Screen Studio.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2027,
      "added_stars": 4765,
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
      "author": "tradingview",
      "repo": "lightweight-charts",
      "avatar": "https://github.com/tradingview.png",
      "repo_link": "https://github.com/tradingview/lightweight-charts",
      "desc": "Performant financial charts built with HTML5 canvas",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2341,
      "added_stars": 904,
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
      "author": "hicccc77",
      "repo": "WeFlow",
      "avatar": "https://github.com/hicccc77.png",
      "repo_link": "https://github.com/hicccc77/WeFlow",
      "desc": "WeFlow - 一个本地的微信聊天记录导出和年度报告应用",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1936,
      "added_stars": 1099,
      "builtBy": [
        {
          "username": "hicccc77",
          "href": "https://github.com/hicccc77",
          "avatar": "https://avatars.githubusercontent.com/u/98377878"
        },
        {
          "username": "xunchahaha",
          "href": "https://github.com/xunchahaha",
          "avatar": "https://avatars.githubusercontent.com/u/102988462"
        },
        {
          "username": "aits2026",
          "href": "https://github.com/aits2026",
          "avatar": "https://avatars.githubusercontent.com/u/263311168"
        },
        {
          "username": "Jasonzhu1207",
          "href": "https://github.com/Jasonzhu1207",
          "avatar": "https://avatars.githubusercontent.com/u/159670257"
        },
        {
          "username": "H3CoF6",
          "href": "https://github.com/H3CoF6",
          "avatar": "https://avatars.githubusercontent.com/u/190114211"
        }
      ]
    },
    {
      "author": "open-metadata",
      "repo": "OpenMetadata",
      "avatar": "https://github.com/open-metadata.png",
      "repo_link": "https://github.com/open-metadata/OpenMetadata",
      "desc": "OpenMetadata is a unified metadata platform for data discovery, data observability, and data governance powered by a central metadata repository, in-depth column level lineage, and seamless team collaboration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1866,
      "added_stars": 915,
      "builtBy": [
        {
          "username": "pmbrull",
          "href": "https://github.com/pmbrull",
          "avatar": "https://avatars.githubusercontent.com/u/35870520"
        },
        {
          "username": "harshach",
          "href": "https://github.com/harshach",
          "avatar": "https://avatars.githubusercontent.com/u/38649"
        },
        {
          "username": "ShaileshParmar11",
          "href": "https://github.com/ShaileshParmar11",
          "avatar": "https://avatars.githubusercontent.com/u/71748675"
        },
        {
          "username": "chirag-madlani",
          "href": "https://github.com/chirag-madlani",
          "avatar": "https://avatars.githubusercontent.com/u/12962843"
        },
        {
          "username": "Sachin-chaurasiya",
          "href": "https://github.com/Sachin-chaurasiya",
          "avatar": "https://avatars.githubusercontent.com/u/59080942"
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
      "forks": 230,
      "added_stars": 158,
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
      "author": "fosrl",
      "repo": "pangolin",
      "avatar": "https://github.com/fosrl.png",
      "repo_link": "https://github.com/fosrl/pangolin",
      "desc": "Identity-aware VPN and reverse proxy for remote access",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 643,
      "added_stars": 325,
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
      "forks": 2135,
      "added_stars": 7235,
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
      "forks": 5514,
      "added_stars": 6214,
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
      "forks": 3954,
      "added_stars": 1975,
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
      "forks": 434,
      "added_stars": 883,
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
      "forks": 1972,
      "added_stars": 5511,
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
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2997,
      "added_stars": 1192,
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
      "forks": 344,
      "added_stars": 924,
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
      "author": "wavetermdev",
      "repo": "waveterm",
      "avatar": "https://github.com/wavetermdev.png",
      "repo_link": "https://github.com/wavetermdev/waveterm",
      "desc": "An open-source, AI-integrated, cross-platform terminal for seamless workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 899,
      "added_stars": 1481,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3840,
      "added_stars": 1380,
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
      "author": "googleapis",
      "repo": "mcp-toolbox",
      "avatar": "https://github.com/googleapis.png",
      "repo_link": "https://github.com/googleapis/mcp-toolbox",
      "desc": "MCP Toolbox for Databases is an open source MCP server for databases.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1462,
      "added_stars": 1198,
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
      "forks": 243,
      "added_stars": 348,
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
      "author": "openimsdk",
      "repo": "open-im-server",
      "avatar": "https://github.com/openimsdk.png",
      "repo_link": "https://github.com/openimsdk/open-im-server",
      "desc": "IM Chat OpenClaw",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2861,
      "added_stars": 391,
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
      "author": "NoFxAiOS",
      "repo": "nofx",
      "avatar": "https://github.com/NoFxAiOS.png",
      "repo_link": "https://github.com/NoFxAiOS/nofx",
      "desc": "Your personal AI trading assistant. Any market. Any model. Pay with USDC, not API keys.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2931,
      "added_stars": 2324,
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
      "author": "smtg-ai",
      "repo": "claude-squad",
      "avatar": "https://github.com/smtg-ai.png",
      "repo_link": "https://github.com/smtg-ai/claude-squad",
      "desc": "Manage multiple AI terminal agents like Claude Code, Codex, OpenCode, and Amp.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 494,
      "added_stars": 689,
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
      "forks": 5181,
      "added_stars": 1324,
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
      "added_stars": 568,
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
    },
    {
      "author": "trufflesecurity",
      "repo": "trufflehog",
      "avatar": "https://github.com/trufflesecurity.png",
      "repo_link": "https://github.com/trufflesecurity/trufflehog",
      "desc": "Find, verify, and analyze leaked credentials",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2323,
      "added_stars": 783,
      "builtBy": [
        {
          "username": "lonmarsDev",
          "href": "https://github.com/lonmarsDev",
          "avatar": "https://avatars.githubusercontent.com/u/28698778"
        },
        {
          "username": "roxanne-tampus",
          "href": "https://github.com/roxanne-tampus",
          "avatar": "https://avatars.githubusercontent.com/u/51393035"
        },
        {
          "username": "ahrav",
          "href": "https://github.com/ahrav",
          "avatar": "https://avatars.githubusercontent.com/u/21311841"
        },
        {
          "username": "dustin-decker",
          "href": "https://github.com/dustin-decker",
          "avatar": "https://avatars.githubusercontent.com/u/6031416"
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
      "forks": 11694,
      "added_stars": 76339,
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
      "forks": 3174,
      "added_stars": 14719,
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
      "forks": 7928,
      "added_stars": 31482,
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
      "forks": 1795,
      "added_stars": 17814,
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
      "forks": 9124,
      "added_stars": 18642,
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
      "forks": 1068,
      "added_stars": 4290,
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
      "author": "microsoft",
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4603,
      "added_stars": 16017,
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
      "author": "microsoft",
      "repo": "markitdown",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/markitdown",
      "desc": "Python tool for converting files and office documents to Markdown.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6910,
      "added_stars": 17711,
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
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3601,
      "added_stars": 9340,
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
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8326,
      "added_stars": 32325,
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
      "author": "shiyu-coder",
      "repo": "Kronos",
      "avatar": "https://github.com/shiyu-coder.png",
      "repo_link": "https://github.com/shiyu-coder/Kronos",
      "desc": "Kronos: A Foundation Model for the Language of Financial Markets",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3328,
      "added_stars": 6599,
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
      "author": "hacksider",
      "repo": "Deep-Live-Cam",
      "avatar": "https://github.com/hacksider.png",
      "repo_link": "https://github.com/hacksider/Deep-Live-Cam",
      "desc": "real time face swap and one-click video deepfake with only a single image",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13175,
      "added_stars": 10945,
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
      "forks": 2397,
      "added_stars": 7482,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1666,
      "added_stars": 7231,
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
      "author": "OpenBMB",
      "repo": "VoxCPM",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/VoxCPM",
      "desc": "VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and True-to-Life Cloning",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1536,
      "added_stars": 6758,
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
          "username": "AbrahamSanders",
          "href": "https://github.com/AbrahamSanders",
          "avatar": "https://avatars.githubusercontent.com/u/29312744"
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
      "forks": 1433,
      "added_stars": 6064,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Unsloth Studio is a web UI for training and running open models like Gemma 4, Qwen3.5, DeepSeek, gpt-oss locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5335,
      "added_stars": 7826,
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
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3185,
      "added_stars": 10772,
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
      "author": "langchain-ai",
      "repo": "deepagents",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/deepagents",
      "desc": "Agent harness built with LangChain and LangGraph. Equipped with a planning tool, a filesystem backend, and the ability to spawn subagents - well-equipped to handle complex agentic tasks.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2884,
      "added_stars": 10079,
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
      "comments": "0",
      "created": "2026-04-15T05:20:29.000Z"
    },
    {
      "title": "280+ modern replacements for classic Unix tools, organized by what they replace | Awesome Modern CLI",
      "url": "https://github.com/thegdsks/awesome-modern-cli",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-04-15T04:44:04.000Z"
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
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-5e38",
      "tags": "top7, discuss",
      "reactions": 32,
      "comments": 9,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Things You're Overengineering in Your AI Agent (The LLM Already Handles Them)",
      "description": "I've been building AI agents in production for the past two years. Not demos. Not weekend projects....",
      "url": "https://dev.to/serhiip/things-youre-overengineering-in-your-ai-agent-the-llm-already-handles-them-2lop",
      "tags": "ai, llm, javascript",
      "reactions": 4,
      "comments": 3,
      "reading_time": 6,
      "author": "serhiip"
    },
    {
      "title": "Your AI Memory System Can't Tell a River Bank from a Savings Account",
      "description": "Regex-based safety classification fails in both directions. It flags \"the bank of the river\" as...",
      "url": "https://dev.to/eyepaq/your-ai-memory-system-cant-tell-a-river-bank-from-a-savings-account-34j",
      "tags": "ai, machinelearning, nlp, rag",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "eyepaq"
    },
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
      "title": "What Karpathy's LLM Wiki Is Missing (And How to Fix It)",
      "description": "Andrej Karpathy's LLM Wiki pattern went viral this month. 5,000+ stars, 3,700 forks, dozens of...",
      "url": "https://dev.to/penfieldlabs/what-karpathys-llm-wiki-is-missing-and-how-to-fix-it-1988",
      "tags": "ai, aimemory, wiki, obsidian",
      "reactions": 35,
      "comments": 2,
      "reading_time": 8,
      "author": "penfieldlabs"
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
      "title": "We Had 6 Hours, a Dying API, and I'm Ran rm -rf. We Still Won. 🏆",
      "description": "By Md. Habibullah Sharif — CSE Student, Northern University Bangladesh | Assistant Robotics...",
      "url": "https://dev.to/md8_habibullah/we-had-6-hours-a-dying-api-and-im-ran-rm-rf-we-still-won-gdf",
      "tags": "hackathon, bangladesh, ai, buildinpublic",
      "reactions": 12,
      "comments": 1,
      "reading_time": 9,
      "author": "md8_habibullah"
    },
    {
      "title": "Building a Privacy-First Voice-Controlled AI Agent with Local LLMs 🎙️->🤖",
      "description": "The era of shipping all your personal data to cloud APIs just to turn down the thermostat or write a...",
      "url": "https://dev.to/deep_bartaria/building-a-privacy-first-voice-controlled-ai-agent-with-local-llms--15j0",
      "tags": "webdev, ai, openai",
      "reactions": 14,
      "comments": 2,
      "reading_time": 4,
      "author": "deep_bartaria"
    },
    {
      "title": "Multi-Agent A2A with the Agent Development Kit(ADK), Cloud Run, Agent Skills, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Multi-Agent...",
      "url": "https://dev.to/gde/multi-agent-a2a-with-the-agent-development-kitadk-cloud-run-agent-skills-and-gemini-cli-4n1h",
      "tags": "googlecloudrun, googleadk, a2aprotocol, gemini",
      "reactions": 3,
      "comments": 0,
      "reading_time": 29,
      "author": "xbill"
    },
    {
      "title": "FastAPI Async+Pytest, Event Loop Trap",
      "description": "Async FastAPI tests fail with different loop errors due to connection pool behavior. Here is what actually works.",
      "url": "https://dev.to/neerajkansal9/fastapi-asyncpytest-event-loop-trap-295c",
      "tags": "python, fastapi, pytest, asyncio",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "neerajkansal9"
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
      "title": "Uses for nested promises – The If Works",
      "url": "https://blog.jcoglan.com/2026/03/23/uses-for-nested-promises/",
      "score": 1,
      "comments": 0,
      "tags": [
        "javascript",
        "web"
      ],
      "id": "im8jhc"
    },
    {
      "title": "Fixing a 20-year-old bug in Enlightenment E16",
      "url": "https://iczelia.net/posts/e16-20-year-old-bug/",
      "score": 2,
      "comments": 1,
      "tags": [
        "c"
      ],
      "id": "orvtly"
    },
    {
      "title": "Completion is a Substrate, not a UI",
      "url": "https://www.chiply.dev/post-icr-primer#fn.10",
      "score": 1,
      "comments": 0,
      "tags": [
        "design"
      ],
      "id": "0fgmja"
    },
    {
      "title": "I don't care that it's X times faster",
      "url": "https://tinkering.xyz/faster/",
      "score": 4,
      "comments": 0,
      "tags": [
        "performance",
        "rant"
      ],
      "id": "vb70md"
    },
    {
      "title": "The Quiet Colossus — On Ada, Its Design, and the Language That Built the Languages",
      "url": "https://www.iqiipi.com/the-quiet-colossus.html",
      "score": 2,
      "comments": 0,
      "tags": [
        "plt"
      ],
      "id": "rxkubk"
    },
    {
      "title": "What Really Happened in Y2K?",
      "url": "https://www.gresham.ac.uk/sites/default/files/2017-04-04-MartynThomas_Y2K-T.pdf",
      "score": 2,
      "comments": 1,
      "tags": [
        "historical",
        "pdf"
      ],
      "id": "1v94sk"
    },
    {
      "title": "My PR has been waiting a year, or the exponential curve behind open source backlogs",
      "url": "https://armanckeser.com/writing/jellyfin-flow",
      "score": 1,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "nfelvb"
    },
    {
      "title": "One Developer, Two Dozen Agents, Zero Alignment",
      "url": "https://maggieappleton.com/zero-alignment",
      "score": 1,
      "comments": 0,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "v6y83t"
    },
    {
      "title": "Saying Goodbye to Agile",
      "url": "https://lewiscampbell.tech/blog/260414.html",
      "score": 13,
      "comments": 2,
      "tags": [
        "practices"
      ],
      "id": "zubxux"
    },
    {
      "title": "Single Module Lambda Calculus from Simply Typed to Martin Lof Type Theory",
      "url": "https://github.com/solomon-b/lambda-calculus-hs",
      "score": 2,
      "comments": 0,
      "tags": [
        "haskell",
        "plt"
      ],
      "id": "fwvw1q"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "snoofydude",
      "descendants": 12,
      "id": 47774789,
      "kids": [
        47775442,
        47775450,
        47775492,
        47775449,
        47775424,
        47775222,
        47775163
      ],
      "score": 48,
      "time": 1776228420,
      "title": "Fixing a 20-year-old bug in Enlightenment E16",
      "type": "story",
      "url": "https://iczelia.net/posts/e16-20-year-old-bug/"
    },
    {
      "by": "matthieu_bl",
      "descendants": 335,
      "id": 47768133,
      "kids": [
        47769425,
        47768821,
        47775570,
        47770354,
        47769149,
        47768517,
        47775317,
        47768592,
        47768834,
        47773911,
        47769196,
        47771371,
        47775311,
        47770642,
        47775117,
        47768583,
        47774605,
        47774598,
        47774708,
        47773985,
        47774418,
        47768693,
        47770152,
        47768557,
        47772912,
        47772293,
        47768715,
        47774515,
        47774940,
        47773018,
        47774342,
        47775472,
        47768661,
        47769631,
        47773585,
        47772535,
        47774791,
        47775264,
        47772070,
        47769656,
        47769741,
        47768848,
        47770742,
        47771464,
        47769090,
        47769682,
        47770261,
        47772008,
        47773656,
        47774491,
        47768926,
        47774646,
        47769484,
        47768791,
        47769873,
        47773701,
        47773481,
        47769481,
        47772534,
        47768665,
        47772711,
        47772415,
        47769470,
        47768856,
        47768853,
        47768561,
        47768954,
        47771446,
        47771902,
        47775348,
        47771373,
        47773190,
        47769888,
        47770324,
        47770112,
        47770374,
        47772783,
        47771669,
        47768645
      ],
      "score": 565,
      "time": 1776185673,
      "title": "Claude Code Routines",
      "type": "story",
      "url": "https://code.claude.com/docs/en/routines"
    },
    {
      "by": "pabs3",
      "descendants": 43,
      "id": 47773812,
      "kids": [
        47774745,
        47774897,
        47774942,
        47775411,
        47774783,
        47774752,
        47774741,
        47774883,
        47775104,
        47775106,
        47774809,
        47774739,
        47774779,
        47775479,
        47774728,
        47775290,
        47774686,
        47774921,
        47774770,
        47775066,
        47774567,
        47775235,
        47775093,
        47774947,
        47774995,
        47775242,
        47774687
      ],
      "score": 82,
      "time": 1776218592,
      "title": "Dependency cooldowns turn you into a free-rider",
      "type": "story",
      "url": "https://calpaterson.com/deps.html"
    },
    {
      "by": "mmastrac",
      "descendants": 39,
      "id": 47773788,
      "kids": [
        47775052,
        47775138,
        47774908,
        47775278,
        47775558,
        47774847,
        47775032,
        47774917,
        47775084,
        47775105
      ],
      "score": 69,
      "time": 1776218358,
      "title": "Not all elementary functions can be expressed with exp-minus-log",
      "type": "story",
      "url": "https://www.stylewarning.com/posts/not-all-elementary/"
    },
    {
      "by": "jrm-veris",
      "descendants": 178,
      "id": 47765604,
      "kids": [
        47767452,
        47766076,
        47766262,
        47766202,
        47775327,
        47767279,
        47767004,
        47773002,
        47766765,
        47767776,
        47771561,
        47767013,
        47772741,
        47766642,
        47766595,
        47766018,
        47770334,
        47767488,
        47770478,
        47766391,
        47773776,
        47766099,
        47770588,
        47768482,
        47767733,
        47769211,
        47771131,
        47768088,
        47772983,
        47773397,
        47766701,
        47767088,
        47767045,
        47766621,
        47767785,
        47770338,
        47769059,
        47766787,
        47771340,
        47769625,
        47768009,
        47772211,
        47766039
      ],
      "score": 610,
      "time": 1776174391,
      "title": "Rare concert recordings are landing on the Internet Archive",
      "type": "story",
      "url": "https://techcrunch.com/2026/04/13/thousands-of-rare-concert-recordings-are-landing-on-the-internet-archive-listen-now/"
    },
    {
      "by": "vjay15",
      "descendants": 2,
      "id": 47739278,
      "kids": [
        47775491,
        47739279
      ],
      "score": 14,
      "time": 1775999865,
      "title": "My adventure in designing API keys",
      "type": "story",
      "url": "https://vjay15.github.io/blog/apikeys/"
    },
    {
      "by": "homarp",
      "descendants": 2,
      "id": 47775183,
      "kids": [
        47775421
      ],
      "score": 25,
      "time": 1776232469,
      "title": "Amazon to acquire Globalstar and expand Amazon Leo satellite network",
      "type": "story",
      "url": "https://www.businesswire.com/news/home/20260414237496/en/Amazon-to-Acquire-Globalstar-and-Expand-Amazon-Leo-Satellite-Network"
    },
    {
      "by": "djfergus",
      "descendants": 7,
      "id": 47725897,
      "kids": [
        47775512,
        47774766,
        47774592,
        47774772,
        47774343
      ],
      "score": 30,
      "time": 1775868426,
      "title": "Installing OpenBSD on the Pomera DM250 Writerdeck",
      "type": "story",
      "url": "https://jcs.org/2026/04/09/openbsd-dm250"
    },
    {
      "by": "rcarmo",
      "descendants": 121,
      "id": 47732535,
      "kids": [
        47735468,
        47773695,
        47771922,
        47771725,
        47772084,
        47771572,
        47772197,
        47733034,
        47772127,
        47772356
      ],
      "score": 173,
      "time": 1775929682,
      "title": "The Orange Pi 6 Plus",
      "type": "story",
      "url": "https://taoofmac.com/space/reviews/2026/04/11/1900"
    },
    {
      "by": "major4x",
      "descendants": 19,
      "id": 47724571,
      "kids": [
        47775513,
        47774415,
        47775082,
        47775270,
        47774997,
        47774731,
        47775277,
        47775412,
        47775275,
        47773236,
        47774227
      ],
      "score": 128,
      "time": 1775860584,
      "title": "A communist Apple II and fourteen years of not knowing what you're testing",
      "type": "story",
      "url": "https://llama.gs/blog/index.php/2026/04/10/friday-archaeology-a-communist-apple-ii-and-fourteen-years-of-not-knowing-what-youre-testing/"
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
      "title": "Preparing for the Terraform Associate Exam: Key Resources and Tips",
      "description": "As I move deeper into Terraform exam preparation, I realized that success is not just about building...",
      "url": "https://dev.to/stephanie_makori_845bb2c0/preparing-for-the-terraform-associate-exam-key-resources-and-tips-45mc",
      "tags": "career, devops, learning, terraform",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "stephanie_makori_845bb2c0"
    },
    {
      "title": "Buildspace shut down. AI got better. Developers are still not shipping.",
      "description": "In August 2024, Buildspace shut down.  Buildspace wasn't a course. It wasn't an accelerator. It was a...",
      "url": "https://dev.to/energetekk/buildspace-shut-down-ai-got-better-developers-are-still-not-shipping-124l",
      "tags": "productivity, career, ai, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "energetekk"
    },
    {
      "title": "Job market is crazy so i decided to hop on the hackattic.com challenge",
      "description": "# Redis RDB Binary Parser &amp; Data Extractor           📌 Project Overview   This project is a...",
      "url": "https://dev.to/nkwochamaureen/job-market-is-crazy-so-i-decided-to-hop-on-the-hackatticcom-challenge-42gh",
      "tags": "backend, career, database, showdev",
      "reactions": 0,
      "comments": 1,
      "reading_time": 2,
      "author": "nkwochamaureen"
    },
    {
      "title": "The Uncomfortable Truth About Loyalty At Your First Job 💸",
      "description": "You know that feeling when you’ve been at a company for two years, you’re doing great work, and your...",
      "url": "https://dev.to/sonika_onboardedhq/the-uncomfortable-truth-about-loyalty-at-your-first-job-28gb",
      "tags": "software, career, womenintech, careerdevelopment",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "sonika_onboardedhq"
    },
    {
      "title": "Tech Job Market 2026: What Skills Companies Are Actually Hiring For",
      "description": "The tech job market in 2026 is sending contradictory signals. Nearly 79,000 workers were laid off in...",
      "url": "https://dev.to/jintukumardas/tech-job-market-2026-what-skills-companies-are-actually-hiring-for-54ll",
      "tags": "career, software, ai, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "jintukumardas"
    },
    {
      "title": "Resume Objective Examples for 2026 (When and How to Use One)",
      "description": "A resume objective and a resume summary are not the same thing.  Summary: \"Here's what I've done that...",
      "url": "https://dev.to/sarah_m/resume-objective-examples-for-2026-when-and-how-to-use-one-3mfh",
      "tags": "career, resume, beginners, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "sarah_m"
    },
    {
      "title": "From Side Projects to 116 Repositories: How I Built an Open-Source AI Portfolio While Working Full-Time at Microsoft",
      "description": "Two years ago, I had a handful of GitHub repositories — mostly experimental scripts and weekend...",
      "url": "https://dev.to/kennedyraju55/from-side-projects-to-116-repositories-how-i-built-an-open-source-ai-portfolio-while-working-1c8f",
      "tags": "ai, career, opensource, sideprojects",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "kennedyraju55"
    },
    {
      "title": "I built a free salary lookup tool for the Canadian federal government",
      "description": "The Canadian federal government employs over 300,000 people across 60+ classification groups. Every...",
      "url": "https://dev.to/sotwdata/i-built-a-free-salary-lookup-tool-for-the-canadian-federal-government-1ghp",
      "tags": "webdev, nextjs, opensource, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "sotwdata"
    },
    {
      "title": "Amazon Software Engineer Interview Guide 2026",
      "description": "Amazon's Software Engineer interview is hard for a simple reason: you are being evaluated on two...",
      "url": "https://dev.to/feng_zhang_cedb4581bee881/amazon-software-engineer-interview-guide-2026-1ko4",
      "tags": "interview, amazon, softwareengineer, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "feng_zhang_cedb4581bee881"
    },
    {
      "title": "The Spark Is Leaving Before the Code Breaks",
      "description": "The spark is leaving before the code breaks.  I had a conversation with an engineer last week who...",
      "url": "https://dev.to/jonoherrington/the-spark-is-leaving-before-the-code-breaks-4kj3",
      "tags": "career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "jonoherrington"
    }
  ]
}
```

