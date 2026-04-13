# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-13 07:02:35 UTC

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
      "forks": 1250,
      "added_stars": 6846,
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
      "author": "coleam00",
      "repo": "Archon",
      "avatar": "https://github.com/coleam00.png",
      "repo_link": "https://github.com/coleam00/Archon",
      "desc": "The first open-source harness builder for AI coding. Make AI coding deterministic and repeatable.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2732,
      "added_stars": 2962,
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
      "author": "siddharthvaddem",
      "repo": "openscreen",
      "avatar": "https://github.com/siddharthvaddem.png",
      "repo_link": "https://github.com/siddharthvaddem/openscreen",
      "desc": "Create stunning demos for free. Open-source, no subscriptions, no watermarks, and free for commercial use. An alternative to Screen Studio.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1966,
      "added_stars": 6776,
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
      "author": "tobi",
      "repo": "qmd",
      "avatar": "https://github.com/tobi.png",
      "repo_link": "https://github.com/tobi/qmd",
      "desc": "mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1308,
      "added_stars": 3146,
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
      "author": "YishenTu",
      "repo": "claudian",
      "avatar": "https://github.com/YishenTu.png",
      "repo_link": "https://github.com/YishenTu/claudian",
      "desc": "An Obsidian plugin that embeds Claude Code as an AI collaborator in your vault",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 458,
      "added_stars": 1647,
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
      "author": "abhigyanpatwari",
      "repo": "GitNexus",
      "avatar": "https://github.com/abhigyanpatwari.png",
      "repo_link": "https://github.com/abhigyanpatwari/GitNexus",
      "desc": "GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a GitHub repo or ZIP file, and get an interactive knowledge graph wit a built in Graph RAG Agent. Perfect for code exploration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3053,
      "added_stars": 4600,
      "builtBy": [
        {
          "username": "abhigyanpatwari",
          "href": "https://github.com/abhigyanpatwari",
          "avatar": "https://avatars.githubusercontent.com/u/126312502"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "magyargergo",
          "href": "https://github.com/magyargergo",
          "avatar": "https://avatars.githubusercontent.com/u/11230420"
        },
        {
          "username": "naicud",
          "href": "https://github.com/naicud",
          "avatar": "https://avatars.githubusercontent.com/u/55764723"
        },
        {
          "username": "zander-raycraft",
          "href": "https://github.com/zander-raycraft",
          "avatar": "https://avatars.githubusercontent.com/u/99677330"
        }
      ]
    },
    {
      "author": "campfirein",
      "repo": "byterover-cli",
      "avatar": "https://github.com/campfirein.png",
      "repo_link": "https://github.com/campfirein/byterover-cli",
      "desc": "ByteRover CLI (brv) - The portable memory layer for autonomous coding agents (formerly Cipher)",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 430,
      "added_stars": 296,
      "builtBy": [
        {
          "username": "bao-byterover",
          "href": "https://github.com/bao-byterover",
          "avatar": "https://avatars.githubusercontent.com/u/244459964"
        },
        {
          "username": "RyanNg1403",
          "href": "https://github.com/RyanNg1403",
          "avatar": "https://avatars.githubusercontent.com/u/143022215"
        },
        {
          "username": "leehpham",
          "href": "https://github.com/leehpham",
          "avatar": "https://avatars.githubusercontent.com/u/16496282"
        },
        {
          "username": "ngduyanhece",
          "href": "https://github.com/ngduyanhece",
          "avatar": "https://avatars.githubusercontent.com/u/10491651"
        },
        {
          "username": "billcache",
          "href": "https://github.com/billcache",
          "avatar": "https://avatars.githubusercontent.com/u/108576106"
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
      "forks": 5373,
      "added_stars": 1351,
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
      "author": "obsidianmd",
      "repo": "obsidian-clipper",
      "avatar": "https://github.com/obsidianmd.png",
      "repo_link": "https://github.com/obsidianmd/obsidian-clipper",
      "desc": "Highlight and capture the web in your favorite browser. The official Web Clipper extension for Obsidian.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 404,
      "added_stars": 253,
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
      "author": "open-metadata",
      "repo": "OpenMetadata",
      "avatar": "https://github.com/open-metadata.png",
      "repo_link": "https://github.com/open-metadata/OpenMetadata",
      "desc": "OpenMetadata is a unified metadata platform for data discovery, data observability, and data governance powered by a central metadata repository, in-depth column level lineage, and seamless team collaboration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1829,
      "added_stars": 611,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4016,
      "added_stars": 3534,
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
      "author": "rowboatlabs",
      "repo": "rowboat",
      "avatar": "https://github.com/rowboatlabs.png",
      "repo_link": "https://github.com/rowboatlabs/rowboat",
      "desc": "Open-source AI coworker, with memory",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1144,
      "added_stars": 2864,
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
      "forks": 2012,
      "added_stars": 7222,
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
      "forks": 5356,
      "added_stars": 6058,
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
      "forks": 1956,
      "added_stars": 5477,
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
      "forks": 3938,
      "added_stars": 1959,
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
      "forks": 420,
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
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2984,
      "added_stars": 1024,
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
      "forks": 343,
      "added_stars": 920,
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
      "forks": 3818,
      "added_stars": 1358,
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
      "forks": 898,
      "added_stars": 1540,
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
      "author": "smtg-ai",
      "repo": "claude-squad",
      "avatar": "https://github.com/smtg-ai.png",
      "repo_link": "https://github.com/smtg-ai/claude-squad",
      "desc": "Manage multiple AI terminal agents like Claude Code, Codex, OpenCode, and Amp.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 491,
      "added_stars": 685,
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
      "author": "goharbor",
      "repo": "harbor",
      "avatar": "https://github.com/goharbor.png",
      "repo_link": "https://github.com/goharbor/harbor",
      "desc": "An open source trusted cloud native registry project that stores, signs, and scans content.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5194,
      "added_stars": 562,
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
      "author": "XTLS",
      "repo": "RealiTLScanner",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/RealiTLScanner",
      "desc": "A TLS server scanner for Reality",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 239,
      "added_stars": 334,
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
      "forks": 2750,
      "added_stars": 2571,
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
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5173,
      "added_stars": 1303,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 709,
      "added_stars": 999,
      "builtBy": [
        {
          "username": "henrygd",
          "href": "https://github.com/henrygd",
          "avatar": "https://avatars.githubusercontent.com/u/8519632"
        },
        {
          "username": "svenvg93",
          "href": "https://github.com/svenvg93",
          "avatar": "https://avatars.githubusercontent.com/u/4511676"
        },
        {
          "username": "a-mnich",
          "href": "https://github.com/a-mnich",
          "avatar": "https://avatars.githubusercontent.com/u/56564725"
        },
        {
          "username": "stanol",
          "href": "https://github.com/stanol",
          "avatar": "https://avatars.githubusercontent.com/u/27770896"
        },
        {
          "username": "arsfy",
          "href": "https://github.com/arsfy",
          "avatar": "https://avatars.githubusercontent.com/u/93700457"
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
      "forks": 2767,
      "added_stars": 1296,
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
      "forks": 2914,
      "added_stars": 2263,
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
      "forks": 9491,
      "added_stars": 57410,
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
      "forks": 3160,
      "added_stars": 14458,
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
      "forks": 7806,
      "added_stars": 31459,
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
      "forks": 8176,
      "added_stars": 36731,
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
      "forks": 1726,
      "added_stars": 16903,
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
      "forks": 9032,
      "added_stars": 18178,
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
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3566,
      "added_stars": 8985,
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
      "forks": 4523,
      "added_stars": 15464,
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
      "forks": 2845,
      "added_stars": 9971,
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
      "forks": 13089,
      "added_stars": 10260,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1578,
      "added_stars": 6452,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "232+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1367,
      "added_stars": 6299,
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
      "forks": 5290,
      "added_stars": 7610,
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
      "author": "microsoft",
      "repo": "markitdown",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/markitdown",
      "desc": "Python tool for converting files and office documents to Markdown.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6628,
      "added_stars": 13187,
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "\"DeepTutor: Agent-Native Personalized Learning Assistant\"",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2284,
      "added_stars": 6526,
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
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3134,
      "added_stars": 10755,
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
      "author": "datalab-to",
      "repo": "chandra",
      "avatar": "https://github.com/datalab-to.png",
      "repo_link": "https://github.com/datalab-to/chandra",
      "desc": "OCR model that handles complex tables, forms, handwriting with full layout.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 876,
      "added_stars": 3663,
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
      "forks": 1608,
      "added_stars": 16299,
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
      "author": "vectorize-io",
      "repo": "hindsight",
      "avatar": "https://github.com/vectorize-io.png",
      "repo_link": "https://github.com/vectorize-io/hindsight",
      "desc": "Hindsight: Agent Memory That Learns",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 538,
      "added_stars": 6323,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "A minimal Node.js wrapper around ClamAV that scans any file and returns a plain string: Clean, Malicious, or ScanError.",
      "url": "https://pompelmi.app/index.html",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-04-12T09:55:40.000Z"
    },
    {
      "title": "VertexMods — Premium FiveM Scripts, MLOs & Vehicles Marketplace (2,200+ Resources)",
      "url": "https://vertexmods.com",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-04-12T02:10:30.000Z"
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
      "reactions": 174,
      "comments": 130,
      "reading_time": 3,
      "author": "sylwia-lask"
    },
    {
      "title": "The Final 1% of Every GitHub Project: Sealing It Properly",
      "description": "Table of Contents    Introduction What Does It Mean to \"Seal\" a Project?  The Release...",
      "url": "https://dev.to/georgekobaidze/the-final-1-of-every-github-project-sealing-it-properly-2app",
      "tags": "github, opensource, development, repository",
      "reactions": 29,
      "comments": 19,
      "reading_time": 12,
      "author": "georgekobaidze"
    },
    {
      "title": "Building a Multimodal Agent with the ADK, Amazon ECS Express, and Gemini Flash Live 3.1",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Agentic apps...",
      "url": "https://dev.to/gde/building-a-multimodal-agent-with-the-adk-amazon-ecs-express-and-gemini-flash-live-31-15ek",
      "tags": "googleadk, gemini, geminilive, python",
      "reactions": 0,
      "comments": 0,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "Building a Multimodal Agent with the ADK, Amazon Lightsail, and Gemini Flash Live 3.1",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Agentic apps...",
      "url": "https://dev.to/gde/building-a-multimodal-agent-with-the-adk-amazon-lightsail-and-gemini-flash-live-31-4p6j",
      "tags": "python, geminilive, adk, gemini",
      "reactions": 0,
      "comments": 0,
      "reading_time": 11,
      "author": "xbill"
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
      "title": "Why I’m Afraid to Ship Code I Haven’t Read",
      "description": "I’ve been watching the rapid rise of \"vibe coding\" and agentic engineering over the last few months,...",
      "url": "https://dev.to/distalx/why-im-afraid-to-ship-code-i-havent-read-53ha",
      "tags": "softwareengineering, agenticcoding, techdebt, cybersecurity",
      "reactions": 6,
      "comments": 1,
      "reading_time": 2,
      "author": "distalx"
    },
    {
      "title": "Cross Cloud Multi Agent Comic Builder with ADK, Amazon ECS Express, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build low code...",
      "url": "https://dev.to/gde/cross-cloud-multi-agent-comic-builder-with-adk-amazon-ecs-express-and-gemini-cli-41me",
      "tags": "google, gemini, ecsexpress, python",
      "reactions": 5,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
    },
    {
      "title": "Cross Cloud Multi Agent Comic Builder with ADK, Amazon EKS, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build low code...",
      "url": "https://dev.to/gde/cross-cloud-multi-agent-comic-builder-with-adk-amazon-eks-and-gemini-cli-4o10",
      "tags": "gemini, googleadk, python, aws",
      "reactions": 5,
      "comments": 0,
      "reading_time": 7,
      "author": "xbill"
    },
    {
      "title": "A Go + React monorepo starter with auth and multi-tenancy",
      "description": "A full-stack starter with Go/Gin, React 19, auth and multi-tenancy already done — so you can jump straight into business logic.",
      "url": "https://dev.to/calebeaires/a-go-react-monorepo-starter-with-auth-and-multi-tenancy-57f7",
      "tags": "go, react, webdev, opensource",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "calebeaires"
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
      "title": "Did you notice the command error exit in the shell?",
      "url": "https://monzool.net/blog/2026/04/10/error-banner-in-shell/",
      "score": 2,
      "comments": 2,
      "tags": [
        "linux"
      ],
      "id": "eqawpx"
    },
    {
      "title": "The Global API Injection Pattern",
      "url": "https://www.elbeno.com/blog/?p=1831",
      "score": 2,
      "comments": 0,
      "tags": [
        "c++",
        "testing"
      ],
      "id": "ixvtox"
    },
    {
      "title": "Introduction to Spherical Harmonics for Graphics Programmers",
      "url": "https://gpfault.net/posts/sph.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "graphics"
      ],
      "id": "ky0igg"
    },
    {
      "title": "SQL Has Problems. We Can Fix Them: Pipe Syntax In SQL (2024)",
      "url": "https://research.google/pubs/sql-has-problems-we-can-fix-them-pipe-syntax-in-sql/",
      "score": 4,
      "comments": 2,
      "tags": [
        "databases",
        "pdf"
      ],
      "id": "yiiupr"
    },
    {
      "title": "Native Raspberry Pi 3b version of the Oberon System 3",
      "url": "https://github.com/rochus-keller/OberonSystem3Native/releases/tag/2026-04-10",
      "score": 7,
      "comments": 0,
      "tags": [
        "retrocomputing"
      ],
      "id": "6wxsq3"
    },
    {
      "title": "An undocumented bug in the Apollo 11 guidance computer code",
      "url": "https://www.juxt.pro/blog/a-bug-on-the-dark-side-of-the-moon/",
      "score": 8,
      "comments": 3,
      "tags": [
        "testing"
      ],
      "id": "pel3uq"
    },
    {
      "title": "Mark’s Magic Multiply",
      "url": "https://wren.wtf/shower-thoughts/marks-magic-multiply/",
      "score": 10,
      "comments": 0,
      "tags": [
        "assembly"
      ],
      "id": "kulbhu"
    },
    {
      "title": "I want a better [build] action graph serialization",
      "url": "https://jyn.dev/i-want-a-better-action-graph-serialization/",
      "score": 4,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "tphqlg"
    },
    {
      "title": "The Business Case for Vanilla JS",
      "url": "https://lewiscampbell.tech/blog/250430.html",
      "score": 19,
      "comments": 2,
      "tags": [
        "javascript"
      ],
      "id": "9ihinj"
    },
    {
      "title": "48 hours ago lobste.rs surpassed 20,000 users",
      "url": "",
      "score": 79,
      "comments": 10,
      "tags": [
        "meta"
      ],
      "id": "7fhahl"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "kiyanwang",
      "descendants": 2,
      "id": 47748064,
      "kids": [
        47748634,
        47748606,
        47748635
      ],
      "score": 34,
      "time": 1776059132,
      "title": "The Economics of Software Teams: Why Most Engineering Orgs Are Flying Blind",
      "type": "story",
      "url": "https://www.viktorcessan.com/the-economics-of-software-teams/"
    },
    {
      "by": "pizza",
      "descendants": 80,
      "id": 47746610,
      "kids": [
        47748637,
        47747467,
        47747537,
        47748426,
        47747539,
        47748011,
        47747965,
        47747490,
        47747456,
        47748466,
        47747933,
        47747354,
        47748175,
        47747888,
        47747150,
        47747255,
        47747236,
        47747123,
        47747268,
        47747857,
        47747159,
        47747127,
        47746835,
        47747544,
        47747292
      ],
      "score": 257,
      "time": 1776044972,
      "title": "All elementary functions from a single binary operator",
      "type": "story",
      "url": "https://arxiv.org/abs/2603.21852"
    },
    {
      "by": "mindcrime",
      "descendants": 100,
      "id": 47745284,
      "kids": [
        47745792,
        47748555,
        47746653,
        47748538,
        47746481,
        47748591,
        47747650,
        47747485,
        47746221,
        47747836,
        47746291,
        47746289,
        47746517,
        47745611,
        47745926,
        47746142,
        47746356,
        47745728,
        47747751,
        47747927,
        47746852,
        47745588,
        47747130
      ],
      "score": 137,
      "time": 1776033525,
      "title": "Taking on CUDA with ROCm: 'One Step After Another'",
      "type": "story",
      "url": "https://www.eetimes.com/taking-on-cuda-with-rocm-one-step-after-another/"
    },
    {
      "by": "a-ve",
      "descendants": 185,
      "id": 47742200,
      "kids": [
        47742559,
        47742616,
        47742734,
        47747824,
        47743992,
        47742920,
        47742621,
        47748253,
        47742565,
        47743122,
        47748083,
        47742719,
        47742771,
        47742497,
        47748471,
        47742554,
        47748368,
        47746615,
        47744102,
        47742716,
        47742591,
        47742528,
        47743306,
        47747598,
        47747964,
        47747252,
        47742914,
        47743274,
        47743759,
        47747302,
        47746558,
        47743706,
        47746174,
        47745163,
        47742571,
        47744372,
        47743311,
        47743431,
        47743200,
        47742744,
        47743361,
        47743105,
        47746018,
        47746107,
        47744931,
        47743494,
        47746040,
        47747029,
        47742929,
        47748043,
        47744291,
        47744396,
        47742699,
        47743739,
        47747435,
        47747566,
        47743626,
        47744377,
        47743301,
        47744116,
        47743178,
        47742626,
        47742556,
        47743305,
        47742704,
        47742505,
        47743140,
        47742788,
        47742414,
        47743623,
        47745054,
        47742501,
        47748412,
        47747755,
        47747643,
        47746952,
        47743231,
        47747166,
        47743769
      ],
      "score": 332,
      "text": "Hi HN!<p>I recently switched from a Fedora&#x2F;GNOME laptop to a MacBook Air. My old setup served me well as a portable workstation, but I’ve started traveling more while working remotely and needed something with similar performance but better battery life. The main thing I missed was a simple taskbar that shows the windows in the current workspace instead of a Dock that mixes everything together.<p>I built boringBar so I would not have to use the Dock. It shows only the windows in the current Space, lets you switch Spaces by scrolling on the bar, and adds a desktop switcher so you can jump directly to any Space. You can also hide the system Dock, pin apps, preview windows with thumbnails, and launch apps from a searchable menu (I keep Spotlight disabled because for some reason it uses a lot of system resources on my machine).<p>I’ve been dogfooding it for a few months now, and it finally felt polished enough to share.<p>It’s for people who like macOS but want window management to feel a bit more like GNOME, Windows, or a traditional taskbar. It’s also for people like me who wanted an easier transition to macOS, especially now that Windows feels increasingly user-hostile.<p>I’d love feedback on the UX, bugs, and whether this solves the same Dock&#x2F;Spaces pain for anyone else.<p>P.S. It might also appeal to people who feel nostalgic for the GNOME 2 desktop of yore. I started my Linux journey with it, and boringBar brings back some of that feeling for me.",
      "time": 1776014744,
      "title": "Show HN: boringBar – a taskbar-style dock replacement for macOS",
      "type": "story",
      "url": "https://boringbar.app/"
    },
    {
      "by": "phil294",
      "descendants": 285,
      "id": 47738827,
      "kids": [
        47741481,
        47740455,
        47748612,
        47740863,
        47740150,
        47739831,
        47739618,
        47742965,
        47746461,
        47739418,
        47741693,
        47742851,
        47743727,
        47744704,
        47747589,
        47741586,
        47740862,
        47742625,
        47747394,
        47746574,
        47744702,
        47743886,
        47740749,
        47744974,
        47742596,
        47745500,
        47740722,
        47742306,
        47743736,
        47739879,
        47743309,
        47746438,
        47745377,
        47741852,
        47743649,
        47740703,
        47739980,
        47742521,
        47740442,
        47740076,
        47741630,
        47741901,
        47742130,
        47740843,
        47739914,
        47743619,
        47741149,
        47742539,
        47745432,
        47739530,
        47743330,
        47741850,
        47746982,
        47740770,
        47745127,
        47744602,
        47748152,
        47742426,
        47747237,
        47740745
      ],
      "score": 523,
      "time": 1775996486,
      "title": "Bring Back Idiomatic Design (2023)",
      "type": "story",
      "url": "https://essays.johnloeber.com/p/4-bring-back-idiomatic-design"
    },
    {
      "by": "mpweiher",
      "descendants": 7,
      "id": 47737542,
      "kids": [
        47748097,
        47747683,
        47748329,
        47747945,
        47748356,
        47748062,
        47747579
      ],
      "score": 57,
      "time": 1775985270,
      "title": "Optimization of 32-bit Unsigned Division by Constants on 64-bit Targets",
      "type": "story",
      "url": "https://arxiv.org/abs/2604.07902"
    },
    {
      "by": "_Microft",
      "descendants": 94,
      "id": 47741701,
      "kids": [
        47744268,
        47744471,
        47745498,
        47743906,
        47748271,
        47745137,
        47747915,
        47743804,
        47744074,
        47743289,
        47743037,
        47745364,
        47744178,
        47746300,
        47742736,
        47743646,
        47746528,
        47745442,
        47744496,
        47745121,
        47745883,
        47746241,
        47745044,
        47743086,
        47745078,
        47744485,
        47744476,
        47744772,
        47748149
      ],
      "score": 367,
      "time": 1776011923,
      "title": "DIY Soft Drinks",
      "type": "story",
      "url": "https://blinry.org/diy-soft-drinks/"
    },
    {
      "by": "david927",
      "descendants": 578,
      "id": 47741527,
      "kids": [
        47748628,
        47748627,
        47748623,
        47748629,
        47748615,
        47747939,
        47748594,
        47748592,
        47748580,
        47748578,
        47745676,
        47748560,
        47745000,
        47746957,
        47744920,
        47748552,
        47748427,
        47748280,
        47746348,
        47747415,
        47744257,
        47748504,
        47745627,
        47748442,
        47748401,
        47748476,
        47748474,
        47748573,
        47746809,
        47748379,
        47743578,
        47748168,
        47746922,
        47748372,
        47748177,
        47744501,
        47746195,
        47748311,
        47747454,
        47745785,
        47748521,
        47748218,
        47748517,
        47743609,
        47743448,
        47748140,
        47747864,
        47748254,
        47748102,
        47744799,
        47748230,
        47746165,
        47744672,
        47748023,
        47748119,
        47744694,
        47748296,
        47748294,
        47747967,
        47748336,
        47748135,
        47744566,
        47745559,
        47748184,
        47748266,
        47747958,
        47743460,
        47748051,
        47747911,
        47745590,
        47742659,
        47747676,
        47748072,
        47744494,
        47747984,
        47745347,
        47748145,
        47747839,
        47747425,
        47744199,
        47743601,
        47748077,
        47746023,
        47744843,
        47742123,
        47746705,
        47742161,
        47746692,
        47743538,
        47747900,
        47745536,
        47744278,
        47747412,
        47747768,
        47747085,
        47747663,
        47743441,
        47746683,
        47746662,
        47747423,
        47745096,
        47747494,
        47748264,
        47747874,
        47747118,
        47747628,
        47746752,
        47747515,
        47744912,
        47746815,
        47747949,
        47744402,
        47747100,
        47747921,
        47747661,
        47747510,
        47747383,
        47745692,
        47747060,
        47746778,
        47746529,
        47747216,
        47747826,
        47747654,
        47748300,
        47747208,
        47747260,
        47747741,
        47746869,
        47746497,
        47746983,
        47745855,
        47744946,
        47747140,
        47747369,
        47745428,
        47747804,
        47747640,
        47746298,
        47747387,
        47744358,
        47747779,
        47746390,
        47747106,
        47746408,
        47743559,
        47747135,
        47746090,
        47747288,
        47744586,
        47747611,
        47743836,
        47747973,
        47745803,
        47747400,
        47747827,
        47746965,
        47747041,
        47744651,
        47743411,
        47746373,
        47746846,
        47746507,
        47747310,
        47745539,
        47747895,
        47745385,
        47743417,
        47746939,
        47746084,
        47747003,
        47745937,
        47745240,
        47745625,
        47745431,
        47745547,
        47746056,
        47744271,
        47741642,
        47746878,
        47747193,
        47746478,
        47745418,
        47746994,
        47746719,
        47746612,
        47746751,
        47747413,
        47746490,
        47747022,
        47747154,
        47745400,
        47746150,
        47745124,
        47745174,
        47745724,
        47744806,
        47745207,
        47747865,
        47747289,
        47745994,
        47743863,
        47747033,
        47747567,
        47746911,
        47747399,
        47744144,
        47747129,
        47745850,
        47745340,
        47745052,
        47743732,
        47743478,
        47746162,
        47746182,
        47746754,
        47746980,
        47745370,
        47745114,
        47747271,
        47745237,
        47746989,
        47746166,
        47745190,
        47746147,
        47745665,
        47746598,
        47747491,
        47745972,
        47745290,
        47744884,
        47745146,
        47747259,
        47745720,
        47746343,
        47744470,
        47746410,
        47746534,
        47745910,
        47746104,
        47745416,
        47744275,
        47746437,
        47745084,
        47746600,
        47744439,
        47746389,
        47745410,
        47748268,
        47744877,
        47748134,
        47746207,
        47743663,
        47746151,
        47744573,
        47743576,
        47746728,
        47745598,
        47745405,
        47746211,
        47745734,
        47744954,
        47745521,
        47745494,
        47747298,
        47746377,
        47746531,
        47744948,
        47747475,
        47746109,
        47744283,
        47746053,
        47743912,
        47745192,
        47744446,
        47745941,
        47744447,
        47746189,
        47746230,
        47745746,
        47745109,
        47744893,
        47745635,
        47745037,
        47746409,
        47745281,
        47742940,
        47746395,
        47746931,
        47744637,
        47746544,
        47743249,
        47747639,
        47746555,
        47745540,
        47744819,
        47744696,
        47745313,
        47743787,
        47745402,
        47745378,
        47744887,
        47746721,
        47744310,
        47745376,
        47744829,
        47744611,
        47744800,
        47745072,
        47745165,
        47744532,
        47745141,
        47745571,
        47744662,
        47745556,
        47745401,
        47746233,
        47745642,
        47744813,
        47744580,
        47744740,
        47745909,
        47743667,
        47745009,
        47744474,
        47745491,
        47744624,
        47746157,
        47745129,
        47744959,
        47743354,
        47741718,
        47745485,
        47745435,
        47744935,
        47745256,
        47744888,
        47744441,
        47744524,
        47747430,
        47743632,
        47746129,
        47746647,
        47743518,
        47744965,
        47747182,
        47743561,
        47746101,
        47745550,
        47745480,
        47744499,
        47743540,
        47745483,
        47745122,
        47743468,
        47744777,
        47744988,
        47743692,
        47745115,
        47741909,
        47744330,
        47744508,
        47744687,
        47745706,
        47744556,
        47744505,
        47743560,
        47743701,
        47746521,
        47745027,
        47745198,
        47743451,
        47744574,
        47745633,
        47744437,
        47746735,
        47745519,
        47744718,
        47746117,
        47745064,
        47743397,
        47746021,
        47748074,
        47744774,
        47745870,
        47746105,
        47743696,
        47744678,
        47744408,
        47745534,
        47744643,
        47744214,
        47746193,
        47742593,
        47744480,
        47744691,
        47746795,
        47745527,
        47744262,
        47745589,
        47743410,
        47743428,
        47745985,
        47744550,
        47747723,
        47747005,
        47744415,
        47744001,
        47746629,
        47744953,
        47747536,
        47745997,
        47746550,
        47745621,
        47743375,
        47745464,
        47747375,
        47747299,
        47744663,
        47747108,
        47747125,
        47746413,
        47746930,
        47746808,
        47746803,
        47746729,
        47744359,
        47746568,
        47743314,
        47745223,
        47745060,
        47746444,
        47744919,
        47744910,
        47744705,
        47744242,
        47743756,
        47746436,
        47744459,
        47743635,
        47748611,
        47745818,
        47744579,
        47745042,
        47748486,
        47748395,
        47748290,
        47748429,
        47747802,
        47748045,
        47746792,
        47745978,
        47747637,
        47746450,
        47745438,
        47745613,
        47745449,
        47746077,
        47747376,
        47745992,
        47747524,
        47745238,
        47747569,
        47746228,
        47744397,
        47743241,
        47745456,
        47746828,
        47746283,
        47747873,
        47745843,
        47746753,
        47744555
      ],
      "score": 193,
      "text": "What are you working on?  Any new ideas that you&#x27;re thinking about?",
      "time": 1776011083,
      "title": "Ask HN: What Are You Working On? (April 2026)",
      "type": "story"
    },
    {
      "by": "yuppiemephisto",
      "descendants": 36,
      "id": 47744540,
      "kids": [
        47746948,
        47746672,
        47748430,
        47748114,
        47747880,
        47746640,
        47747440,
        47745554,
        47748352,
        47746037,
        47747265,
        47746742,
        47746757,
        47745429
      ],
      "score": 103,
      "time": 1776028284,
      "title": "A perfectable programming language",
      "type": "story",
      "url": "https://alok.github.io/lean-pages/perfectable-lean/"
    },
    {
      "by": "surprisetalk",
      "descendants": 94,
      "id": 47702887,
      "kids": [
        47746936,
        47742533,
        47743101,
        47742770,
        47747557,
        47745524,
        47743587,
        47747722,
        47742785,
        47743562,
        47745650,
        47746962,
        47742774,
        47748232,
        47747775,
        47745687,
        47743102,
        47745236,
        47744945,
        47742529,
        47743224,
        47742988,
        47744056,
        47745040,
        47744049,
        47744222,
        47743581,
        47745195,
        47746050,
        47744609
      ],
      "score": 319,
      "time": 1775738120,
      "title": "Most people can't juggle one ball",
      "type": "story",
      "url": "https://www.lesswrong.com/posts/jTGbKKGqs5EdyYoRc/most-people-can-t-juggle-one-ball"
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

