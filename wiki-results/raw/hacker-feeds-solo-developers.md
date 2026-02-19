# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-02-19 02:34:25 UTC

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
      "author": "steipete",
      "repo": "summarize",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/summarize",
      "desc": "Point at any URL/YouTube/Podcast or file. Get the gist. CLI and Chrome Extension.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 3684,
      "forks": 232,
      "added_stars": 1971,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "mvance",
          "href": "https://github.com/mvance",
          "avatar": "https://avatars.githubusercontent.com/u/82473"
        },
        {
          "username": "vlnd0",
          "href": "https://github.com/vlnd0",
          "avatar": "https://avatars.githubusercontent.com/u/42946292"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "philippb",
          "href": "https://github.com/philippb",
          "avatar": "https://avatars.githubusercontent.com/u/374326"
        }
      ]
    },
    {
      "author": "danielmiessler",
      "repo": "Personal_AI_Infrastructure",
      "avatar": "https://github.com/danielmiessler.png",
      "repo_link": "https://github.com/danielmiessler/Personal_AI_Infrastructure",
      "desc": "Agentic AI Infrastructure for magnifying HUMAN capabilities.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 8792,
      "forks": 1208,
      "added_stars": 1900,
      "builtBy": [
        {
          "username": "danielmiessler",
          "href": "https://github.com/danielmiessler",
          "avatar": "https://avatars.githubusercontent.com/u/50654"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "kaimagnus",
          "href": "https://github.com/kaimagnus",
          "avatar": "https://avatars.githubusercontent.com/u/260860065"
        },
        {
          "username": "ksylvan",
          "href": "https://github.com/ksylvan",
          "avatar": "https://avatars.githubusercontent.com/u/1226059"
        },
        {
          "username": "mvoehringer",
          "href": "https://github.com/mvoehringer",
          "avatar": "https://avatars.githubusercontent.com/u/2719466"
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
      "stars": 25915,
      "forks": 1524,
      "added_stars": 2113,
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
      "author": "tambo-ai",
      "repo": "tambo",
      "avatar": "https://github.com/tambo-ai.png",
      "repo_link": "https://github.com/tambo-ai/tambo",
      "desc": "Generative UI SDK for React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 10711,
      "forks": 519,
      "added_stars": 2257,
      "builtBy": [
        {
          "username": "alecf",
          "href": "https://github.com/alecf",
          "avatar": "https://avatars.githubusercontent.com/u/135340"
        },
        {
          "username": "MichaelMilstead",
          "href": "https://github.com/MichaelMilstead",
          "avatar": "https://avatars.githubusercontent.com/u/8498335"
        },
        {
          "username": "tambo-bot",
          "href": "https://github.com/tambo-bot",
          "avatar": "https://avatars.githubusercontent.com/u/230265268"
        },
        {
          "username": "akhileshrangani4",
          "href": "https://github.com/akhileshrangani4",
          "avatar": "https://avatars.githubusercontent.com/u/70284178"
        }
      ]
    },
    {
      "author": "badlogic",
      "repo": "pi-mono",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-mono",
      "desc": "AI agent toolkit: coding agent CLI, unified LLM API, TUI & web UI libraries, Slack bot, vLLM pods",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 13528,
      "forks": 1368,
      "added_stars": 2812,
      "builtBy": [
        {
          "username": "badlogic",
          "href": "https://github.com/badlogic",
          "avatar": "https://avatars.githubusercontent.com/u/514052"
        },
        {
          "username": "hjanuschka",
          "href": "https://github.com/hjanuschka",
          "avatar": "https://avatars.githubusercontent.com/u/2891702"
        },
        {
          "username": "markusylisiurunen",
          "href": "https://github.com/markusylisiurunen",
          "avatar": "https://avatars.githubusercontent.com/u/8409947"
        },
        {
          "username": "aliou",
          "href": "https://github.com/aliou",
          "avatar": "https://avatars.githubusercontent.com/u/980367"
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
      "stars": 1577,
      "forks": 159,
      "added_stars": 555,
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
          "username": "kl2806",
          "href": "https://github.com/kl2806",
          "avatar": "https://avatars.githubusercontent.com/u/9100255"
        }
      ]
    },
    {
      "author": "chartdb",
      "repo": "chartdb",
      "avatar": "https://github.com/chartdb.png",
      "repo_link": "https://github.com/chartdb/chartdb",
      "desc": "Database diagrams editor that allows you to visualize and design your DB with a single query.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 21272,
      "forks": 1265,
      "added_stars": 156,
      "builtBy": [
        {
          "username": "guyb1",
          "href": "https://github.com/guyb1",
          "avatar": "https://avatars.githubusercontent.com/u/6676322"
        },
        {
          "username": "johnnyfish",
          "href": "https://github.com/johnnyfish",
          "avatar": "https://avatars.githubusercontent.com/u/9851076"
        },
        {
          "username": "origranot",
          "href": "https://github.com/origranot",
          "avatar": "https://avatars.githubusercontent.com/u/48911144"
        },
        {
          "username": "GuyMoses",
          "href": "https://github.com/GuyMoses",
          "avatar": "https://avatars.githubusercontent.com/u/9597234"
        },
        {
          "username": "ilyaLibin",
          "href": "https://github.com/ilyaLibin",
          "avatar": "https://avatars.githubusercontent.com/u/12880486"
        }
      ]
    },
    {
      "author": "seerr-team",
      "repo": "seerr",
      "avatar": "https://github.com/seerr-team.png",
      "repo_link": "https://github.com/seerr-team/seerr",
      "desc": "Open-source media request and discovery manager for Jellyfin, Plex, and Emby.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 9450,
      "forks": 617,
      "added_stars": 934,
      "builtBy": [
        {
          "username": "fallenbagel",
          "href": "https://github.com/fallenbagel",
          "avatar": "https://avatars.githubusercontent.com/u/98979876"
        },
        {
          "username": "sct",
          "href": "https://github.com/sct",
          "avatar": "https://avatars.githubusercontent.com/u/234213"
        },
        {
          "username": "TheCatLady",
          "href": "https://github.com/TheCatLady",
          "avatar": "https://avatars.githubusercontent.com/u/52870424"
        },
        {
          "username": "gauthier-th",
          "href": "https://github.com/gauthier-th",
          "avatar": "https://avatars.githubusercontent.com/u/37781713"
        }
      ]
    },
    {
      "author": "EveryInc",
      "repo": "compound-engineering-plugin",
      "avatar": "https://github.com/EveryInc.png",
      "repo_link": "https://github.com/EveryInc/compound-engineering-plugin",
      "desc": "Official Claude Code compound engineering plugin",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 9189,
      "forks": 723,
      "added_stars": 825,
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
          "username": "brayanjuls",
          "href": "https://github.com/brayanjuls",
          "avatar": "https://avatars.githubusercontent.com/u/7233005"
        },
        {
          "username": "julik",
          "href": "https://github.com/julik",
          "avatar": "https://avatars.githubusercontent.com/u/16446"
        }
      ]
    },
    {
      "author": "element-hq",
      "repo": "element-web",
      "avatar": "https://github.com/element-hq.png",
      "repo_link": "https://github.com/element-hq/element-web",
      "desc": "A glossy Matrix collaboration client for the web.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 12667,
      "forks": 2453,
      "added_stars": 105,
      "builtBy": [
        {
          "username": "RiotRobot",
          "href": "https://github.com/RiotRobot",
          "avatar": "https://avatars.githubusercontent.com/u/24480685"
        },
        {
          "username": "dbkr",
          "href": "https://github.com/dbkr",
          "avatar": "https://avatars.githubusercontent.com/u/986903"
        },
        {
          "username": "t3chguy",
          "href": "https://github.com/t3chguy",
          "avatar": "https://avatars.githubusercontent.com/u/2403652"
        },
        {
          "username": "ara4n",
          "href": "https://github.com/ara4n",
          "avatar": "https://avatars.githubusercontent.com/u/1294269"
        }
      ]
    },
    {
      "author": "firecrawl",
      "repo": "firecrawl",
      "avatar": "https://github.com/firecrawl.png",
      "repo_link": "https://github.com/firecrawl/firecrawl",
      "desc": "🔥 The Web Data API for AI - Turn entire websites into LLM-ready markdown or structured data",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 83688,
      "forks": 6077,
      "added_stars": 2170,
      "builtBy": [
        {
          "username": "nickscamara",
          "href": "https://github.com/nickscamara",
          "avatar": "https://avatars.githubusercontent.com/u/20311743"
        },
        {
          "username": "mogery",
          "href": "https://github.com/mogery",
          "avatar": "https://avatars.githubusercontent.com/u/66118807"
        },
        {
          "username": "rafaelsideguide",
          "href": "https://github.com/rafaelsideguide",
          "avatar": "https://avatars.githubusercontent.com/u/150964962"
        },
        {
          "username": "abimaelmartell",
          "href": "https://github.com/abimaelmartell",
          "avatar": "https://avatars.githubusercontent.com/u/1450169"
        },
        {
          "username": "amplitudesxd",
          "href": "https://github.com/amplitudesxd",
          "avatar": "https://avatars.githubusercontent.com/u/62763456"
        }
      ]
    },
    {
      "author": "OpenCTI-Platform",
      "repo": "opencti",
      "avatar": "https://github.com/OpenCTI-Platform.png",
      "repo_link": "https://github.com/OpenCTI-Platform/opencti",
      "desc": "Open Cyber Threat Intelligence Platform",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 8707,
      "forks": 1243,
      "added_stars": 408,
      "builtBy": [
        {
          "username": "SamuelHassine",
          "href": "https://github.com/SamuelHassine",
          "avatar": "https://avatars.githubusercontent.com/u/1334279"
        },
        {
          "username": "richard-julien",
          "href": "https://github.com/richard-julien",
          "avatar": "https://avatars.githubusercontent.com/u/285555"
        },
        {
          "username": "Archidoit",
          "href": "https://github.com/Archidoit",
          "avatar": "https://avatars.githubusercontent.com/u/75783086"
        },
        {
          "username": "Filigran-Automation",
          "href": "https://github.com/Filigran-Automation",
          "avatar": "https://avatars.githubusercontent.com/u/130652934"
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
      "author": "steipete",
      "repo": "gogcli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/gogcli",
      "desc": "Google Suite CLI: Gmail, GCal, GDrive, GContacts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 4105,
      "forks": 330,
      "added_stars": 3536,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "salmonumbrella",
          "href": "https://github.com/salmonumbrella",
          "avatar": "https://avatars.githubusercontent.com/u/182032677"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jeanregisser",
          "href": "https://github.com/jeanregisser",
          "avatar": "https://avatars.githubusercontent.com/u/57791"
        },
        {
          "username": "antons",
          "href": "https://github.com/antons",
          "avatar": "https://avatars.githubusercontent.com/u/129705"
        }
      ]
    },
    {
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 162872,
      "forks": 14611,
      "added_stars": 3555,
      "builtBy": [
        {
          "username": "mxyng",
          "href": "https://github.com/mxyng",
          "avatar": "https://avatars.githubusercontent.com/u/2372640"
        },
        {
          "username": "jmorganca",
          "href": "https://github.com/jmorganca",
          "avatar": "https://avatars.githubusercontent.com/u/251292"
        },
        {
          "username": "dhiltgen",
          "href": "https://github.com/dhiltgen",
          "avatar": "https://avatars.githubusercontent.com/u/4033016"
        },
        {
          "username": "BruceMacD",
          "href": "https://github.com/BruceMacD",
          "avatar": "https://avatars.githubusercontent.com/u/5853428"
        },
        {
          "username": "pdevine",
          "href": "https://github.com/pdevine",
          "avatar": "https://avatars.githubusercontent.com/u/75239"
        }
      ]
    },
    {
      "author": "hashicorp",
      "repo": "vault",
      "avatar": "https://github.com/hashicorp.png",
      "repo_link": "https://github.com/hashicorp/vault",
      "desc": "A tool for secrets management, encryption as a service, and privileged access management",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 35056,
      "forks": 4598,
      "added_stars": 1272,
      "builtBy": [
        {
          "username": "jefferai",
          "href": "https://github.com/jefferai",
          "avatar": "https://avatars.githubusercontent.com/u/28627"
        },
        {
          "username": "vishalnayak",
          "href": "https://github.com/vishalnayak",
          "avatar": "https://avatars.githubusercontent.com/u/3053672"
        },
        {
          "username": "hc-github-team-secure-vault-core",
          "href": "https://github.com/hc-github-team-secure-vault-core",
          "avatar": "https://avatars.githubusercontent.com/u/82990506"
        },
        {
          "username": "armon",
          "href": "https://github.com/armon",
          "avatar": "https://avatars.githubusercontent.com/u/592032"
        },
        {
          "username": "ncabatoff",
          "href": "https://github.com/ncabatoff",
          "avatar": "https://avatars.githubusercontent.com/u/5587236"
        }
      ]
    },
    {
      "author": "steveyegge",
      "repo": "gastown",
      "avatar": "https://github.com/steveyegge.png",
      "repo_link": "https://github.com/steveyegge/gastown",
      "desc": "Gas Town - multi-agent workspace manager",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 9725,
      "forks": 751,
      "added_stars": 5354,
      "builtBy": [
        {
          "username": "steveyegge",
          "href": "https://github.com/steveyegge",
          "avatar": "https://avatars.githubusercontent.com/u/613744"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "julianknutsen",
          "href": "https://github.com/julianknutsen",
          "avatar": "https://avatars.githubusercontent.com/u/8082291"
        },
        {
          "username": "seanbearden",
          "href": "https://github.com/seanbearden",
          "avatar": "https://avatars.githubusercontent.com/u/72461227"
        },
        {
          "username": "aleiby",
          "href": "https://github.com/aleiby",
          "avatar": "https://avatars.githubusercontent.com/u/3761351"
        }
      ]
    },
    {
      "author": "netbirdio",
      "repo": "netbird",
      "avatar": "https://github.com/netbirdio.png",
      "repo_link": "https://github.com/netbirdio/netbird",
      "desc": "Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and granular access controls.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 22681,
      "forks": 1109,
      "added_stars": 1576,
      "builtBy": [
        {
          "username": "mlsmaycon",
          "href": "https://github.com/mlsmaycon",
          "avatar": "https://avatars.githubusercontent.com/u/7747744"
        },
        {
          "username": "pascal-fischer",
          "href": "https://github.com/pascal-fischer",
          "avatar": "https://avatars.githubusercontent.com/u/32096965"
        },
        {
          "username": "braginini",
          "href": "https://github.com/braginini",
          "avatar": "https://avatars.githubusercontent.com/u/700848"
        },
        {
          "username": "lixmal",
          "href": "https://github.com/lixmal",
          "avatar": "https://avatars.githubusercontent.com/u/17948409"
        },
        {
          "username": "pappz",
          "href": "https://github.com/pappz",
          "avatar": "https://avatars.githubusercontent.com/u/7756831"
        }
      ]
    },
    {
      "author": "hashicorp",
      "repo": "terraform-provider-aws",
      "avatar": "https://github.com/hashicorp.png",
      "repo_link": "https://github.com/hashicorp/terraform-provider-aws",
      "desc": "The AWS Provider enables Terraform to manage AWS resources.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 10754,
      "forks": 9970,
      "added_stars": 75,
      "builtBy": [
        {
          "username": "ewbankkit",
          "href": "https://github.com/ewbankkit",
          "avatar": "https://avatars.githubusercontent.com/u/2404182"
        },
        {
          "username": "YakDriver",
          "href": "https://github.com/YakDriver",
          "avatar": "https://avatars.githubusercontent.com/u/31492422"
        },
        {
          "username": "gdavison",
          "href": "https://github.com/gdavison",
          "avatar": "https://avatars.githubusercontent.com/u/1148298"
        },
        {
          "username": "bflad",
          "href": "https://github.com/bflad",
          "avatar": "https://avatars.githubusercontent.com/u/189114"
        },
        {
          "username": "jar-b",
          "href": "https://github.com/jar-b",
          "avatar": "https://avatars.githubusercontent.com/u/14969179"
        }
      ]
    },
    {
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 1826,
      "forks": 395,
      "added_stars": 1048,
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
          "username": "slovx2",
          "href": "https://github.com/slovx2",
          "avatar": "https://avatars.githubusercontent.com/u/2713715"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cyhhao",
          "href": "https://github.com/cyhhao",
          "avatar": "https://avatars.githubusercontent.com/u/5381613"
        }
      ]
    },
    {
      "author": "putyy",
      "repo": "res-downloader",
      "avatar": "https://github.com/putyy.png",
      "repo_link": "https://github.com/putyy/res-downloader",
      "desc": "视频号、小程序、抖音、快手、小红书、直播流、m3u8、酷狗、QQ音乐等常见网络资源下载!",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 15254,
      "forks": 1894,
      "added_stars": 1906,
      "builtBy": [
        {
          "username": "putyy",
          "href": "https://github.com/putyy",
          "avatar": "https://avatars.githubusercontent.com/u/31536789"
        },
        {
          "username": "taotieren",
          "href": "https://github.com/taotieren",
          "avatar": "https://avatars.githubusercontent.com/u/13965460"
        },
        {
          "username": "claviering",
          "href": "https://github.com/claviering",
          "avatar": "https://avatars.githubusercontent.com/u/16227832"
        },
        {
          "username": "qiuzhiqian",
          "href": "https://github.com/qiuzhiqian",
          "avatar": "https://avatars.githubusercontent.com/u/19386888"
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
      "stars": 31993,
      "forks": 2950,
      "added_stars": 1037,
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
      "author": "grafana",
      "repo": "mcp-grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/mcp-grafana",
      "desc": "MCP server for Grafana",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 2324,
      "forks": 263,
      "added_stars": 198,
      "builtBy": [
        {
          "username": "sd2k",
          "href": "https://github.com/sd2k",
          "avatar": "https://avatars.githubusercontent.com/u/5464991"
        },
        {
          "username": "ioanarm",
          "href": "https://github.com/ioanarm",
          "avatar": "https://avatars.githubusercontent.com/u/29095029"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "stars": 42570,
      "forks": 7950,
      "added_stars": 569,
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
      "author": "steveyegge",
      "repo": "beads",
      "avatar": "https://github.com/steveyegge.png",
      "repo_link": "https://github.com/steveyegge/beads",
      "desc": "Beads - A memory upgrade for your coding agent",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 16652,
      "forks": 1006,
      "added_stars": 5828,
      "builtBy": [
        {
          "username": "steveyegge",
          "href": "https://github.com/steveyegge",
          "avatar": "https://avatars.githubusercontent.com/u/613744"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ampcode-com",
          "href": "https://github.com/ampcode-com",
          "avatar": "https://avatars.githubusercontent.com/u/220109460"
        },
        {
          "username": "maphew",
          "href": "https://github.com/maphew",
          "avatar": "https://avatars.githubusercontent.com/u/486200"
        }
      ]
    },
    {
      "author": "AlexxIT",
      "repo": "go2rtc",
      "avatar": "https://github.com/AlexxIT.png",
      "repo_link": "https://github.com/AlexxIT/go2rtc",
      "desc": "Ultimate camera streaming application",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 12351,
      "forks": 953,
      "added_stars": 1142,
      "builtBy": [
        {
          "username": "AlexxIT",
          "href": "https://github.com/AlexxIT",
          "avatar": "https://avatars.githubusercontent.com/u/511909"
        },
        {
          "username": "seydx",
          "href": "https://github.com/seydx",
          "avatar": "https://avatars.githubusercontent.com/u/34152761"
        },
        {
          "username": "skrashevich",
          "href": "https://github.com/skrashevich",
          "avatar": "https://avatars.githubusercontent.com/u/15078499"
        },
        {
          "username": "felipecrs",
          "href": "https://github.com/felipecrs",
          "avatar": "https://avatars.githubusercontent.com/u/29582865"
        },
        {
          "username": "robvanoostenrijk",
          "href": "https://github.com/robvanoostenrijk",
          "avatar": "https://avatars.githubusercontent.com/u/6480052"
        }
      ]
    },
    {
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The to-do app to organize your life.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 3350,
      "forks": 310,
      "added_stars": 293,
      "builtBy": [
        {
          "username": "kolaente",
          "href": "https://github.com/kolaente",
          "avatar": "https://avatars.githubusercontent.com/u/13721712"
        },
        {
          "username": "dpschen",
          "href": "https://github.com/dpschen",
          "avatar": "https://avatars.githubusercontent.com/u/6173598"
        },
        {
          "username": "vikunja-bot",
          "href": "https://github.com/vikunja-bot",
          "avatar": "https://avatars.githubusercontent.com/u/45438395"
        },
        {
          "username": "Elscrux",
          "href": "https://github.com/Elscrux",
          "avatar": "https://avatars.githubusercontent.com/u/34755314"
        }
      ]
    },
    {
      "author": "juanfont",
      "repo": "headscale",
      "avatar": "https://github.com/juanfont.png",
      "repo_link": "https://github.com/juanfont/headscale",
      "desc": "An open source, self-hosted implementation of the Tailscale control server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 35523,
      "forks": 1906,
      "added_stars": 1206,
      "builtBy": [
        {
          "username": "kradalby",
          "href": "https://github.com/kradalby",
          "avatar": "https://avatars.githubusercontent.com/u/98431"
        },
        {
          "username": "juanfont",
          "href": "https://github.com/juanfont",
          "avatar": "https://avatars.githubusercontent.com/u/181059"
        },
        {
          "username": "nblock",
          "href": "https://github.com/nblock",
          "avatar": "https://avatars.githubusercontent.com/u/131119"
        },
        {
          "username": "restanrm",
          "href": "https://github.com/restanrm",
          "avatar": "https://avatars.githubusercontent.com/u/4344371"
        }
      ]
    },
    {
      "author": "charmbracelet",
      "repo": "lipgloss",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/lipgloss",
      "desc": "Style definitions for nice terminal layouts 👄",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 10585,
      "forks": 310,
      "added_stars": 239,
      "builtBy": [
        {
          "username": "meowgorithm",
          "href": "https://github.com/meowgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/25087"
        },
        {
          "username": "aymanbagabas",
          "href": "https://github.com/aymanbagabas",
          "avatar": "https://avatars.githubusercontent.com/u/3187948"
        },
        {
          "username": "muesli",
          "href": "https://github.com/muesli",
          "avatar": "https://avatars.githubusercontent.com/u/146378"
        },
        {
          "username": "bashbunni",
          "href": "https://github.com/bashbunni",
          "avatar": "https://avatars.githubusercontent.com/u/15822994"
        }
      ]
    },
    {
      "author": "kyverno",
      "repo": "kyverno",
      "avatar": "https://github.com/kyverno.png",
      "repo_link": "https://github.com/kyverno/kyverno",
      "desc": "Cloud Native Policy Management",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 7409,
      "forks": 1236,
      "added_stars": 131,
      "builtBy": [
        {
          "username": "realshuting",
          "href": "https://github.com/realshuting",
          "avatar": "https://avatars.githubusercontent.com/u/25727662"
        },
        {
          "username": "eddycharly",
          "href": "https://github.com/eddycharly",
          "avatar": "https://avatars.githubusercontent.com/u/47974576"
        },
        {
          "username": "JimBugwadia",
          "href": "https://github.com/JimBugwadia",
          "avatar": "https://avatars.githubusercontent.com/u/5489990"
        },
        {
          "username": "MariamFahmy98",
          "href": "https://github.com/MariamFahmy98",
          "avatar": "https://avatars.githubusercontent.com/u/55502281"
        }
      ]
    },
    {
      "author": "korotovsky",
      "repo": "slack-mcp-server",
      "avatar": "https://github.com/korotovsky.png",
      "repo_link": "https://github.com/korotovsky/slack-mcp-server",
      "desc": "The most powerful MCP Slack Server with no permission requirements, Apps support, GovSlack, DMs, Group DMs and smart history fetch logic.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 1374,
      "forks": 240,
      "added_stars": 233,
      "builtBy": [
        {
          "username": "korotovsky",
          "href": "https://github.com/korotovsky",
          "avatar": "https://avatars.githubusercontent.com/u/104727"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Flare576",
          "href": "https://github.com/Flare576",
          "avatar": "https://avatars.githubusercontent.com/u/15177870"
        },
        {
          "username": "aron-muon",
          "href": "https://github.com/aron-muon",
          "avatar": "https://avatars.githubusercontent.com/u/202663813"
        },
        {
          "username": "JAORMX",
          "href": "https://github.com/JAORMX",
          "avatar": "https://avatars.githubusercontent.com/u/145564"
        }
      ]
    },
    {
      "author": "charmbracelet",
      "repo": "bubbletea",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/bubbletea",
      "desc": "A powerful little TUI framework 🏗",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 39576,
      "forks": 1094,
      "added_stars": 1236,
      "builtBy": [
        {
          "username": "meowgorithm",
          "href": "https://github.com/meowgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/25087"
        },
        {
          "username": "muesli",
          "href": "https://github.com/muesli",
          "avatar": "https://avatars.githubusercontent.com/u/146378"
        },
        {
          "username": "aymanbagabas",
          "href": "https://github.com/aymanbagabas",
          "avatar": "https://avatars.githubusercontent.com/u/3187948"
        },
        {
          "username": "caarlos0",
          "href": "https://github.com/caarlos0",
          "avatar": "https://avatars.githubusercontent.com/u/245435"
        }
      ]
    },
    {
      "author": "tailscale",
      "repo": "tailscale",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailscale",
      "desc": "The easiest, most secure way to use WireGuard and 2FA.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 28459,
      "forks": 2289,
      "added_stars": 1190,
      "builtBy": [
        {
          "username": "bradfitz",
          "href": "https://github.com/bradfitz",
          "avatar": "https://avatars.githubusercontent.com/u/2621"
        },
        {
          "username": "danderson",
          "href": "https://github.com/danderson",
          "avatar": "https://avatars.githubusercontent.com/u/1918"
        },
        {
          "username": "josharian",
          "href": "https://github.com/josharian",
          "avatar": "https://avatars.githubusercontent.com/u/67496"
        },
        {
          "username": "andrew-d",
          "href": "https://github.com/andrew-d",
          "avatar": "https://avatars.githubusercontent.com/u/1079173"
        },
        {
          "username": "raggi",
          "href": "https://github.com/raggi",
          "avatar": "https://avatars.githubusercontent.com/u/348"
        }
      ]
    },
    {
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 3174,
      "forks": 431,
      "added_stars": 492,
      "builtBy": [
        {
          "username": "gosom",
          "href": "https://github.com/gosom",
          "avatar": "https://avatars.githubusercontent.com/u/454718"
        },
        {
          "username": "dredozubov",
          "href": "https://github.com/dredozubov",
          "avatar": "https://avatars.githubusercontent.com/u/131368"
        },
        {
          "username": "Lucifer-02",
          "href": "https://github.com/Lucifer-02",
          "avatar": "https://avatars.githubusercontent.com/u/84069686"
        },
        {
          "username": "lucifer-vcb",
          "href": "https://github.com/lucifer-vcb",
          "avatar": "https://avatars.githubusercontent.com/u/170999809"
        },
        {
          "username": "bugkerb",
          "href": "https://github.com/bugkerb",
          "avatar": "https://avatars.githubusercontent.com/u/8428579"
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 15521,
      "forks": 1124,
      "added_stars": 10034,
      "builtBy": [
        {
          "username": "rejojer",
          "href": "https://github.com/rejojer",
          "avatar": "https://avatars.githubusercontent.com/u/8255061"
        },
        {
          "username": "zmtomorrow",
          "href": "https://github.com/zmtomorrow",
          "avatar": "https://avatars.githubusercontent.com/u/13518252"
        },
        {
          "username": "clarenceluo78",
          "href": "https://github.com/clarenceluo78",
          "avatar": "https://avatars.githubusercontent.com/u/71917860"
        }
      ]
    },
    {
      "author": "openai",
      "repo": "skills",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/skills",
      "desc": "Skills Catalog for Codex",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 8943,
      "forks": 499,
      "added_stars": 7232,
      "builtBy": [
        {
          "username": "gverma-openai",
          "href": "https://github.com/gverma-openai",
          "avatar": "https://avatars.githubusercontent.com/u/235382312"
        },
        {
          "username": "dkundel-openai",
          "href": "https://github.com/dkundel-openai",
          "avatar": "https://avatars.githubusercontent.com/u/200841172"
        },
        {
          "username": "vb-openai",
          "href": "https://github.com/vb-openai",
          "avatar": "https://avatars.githubusercontent.com/u/250380837"
        },
        {
          "username": "ae-openai",
          "href": "https://github.com/ae-openai",
          "avatar": "https://avatars.githubusercontent.com/u/173195103"
        },
        {
          "username": "edward-bayes",
          "href": "https://github.com/edward-bayes",
          "avatar": "https://avatars.githubusercontent.com/u/191618473"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "skills",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/skills",
      "desc": "Public repository for Agent Skills",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 71514,
      "forks": 7290,
      "added_stars": 27403,
      "builtBy": [
        {
          "username": "klazuka",
          "href": "https://github.com/klazuka",
          "avatar": "https://avatars.githubusercontent.com/u/84525"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "maheshmurag",
          "href": "https://github.com/maheshmurag",
          "avatar": "https://avatars.githubusercontent.com/u/5667029"
        },
        {
          "username": "mattpic-ant",
          "href": "https://github.com/mattpic-ant",
          "avatar": "https://avatars.githubusercontent.com/u/227474486"
        },
        {
          "username": "camaris",
          "href": "https://github.com/camaris",
          "avatar": "https://avatars.githubusercontent.com/u/1184736"
        }
      ]
    },
    {
      "author": "MoonshotAI",
      "repo": "kimi-cli",
      "avatar": "https://github.com/MoonshotAI.png",
      "repo_link": "https://github.com/MoonshotAI/kimi-cli",
      "desc": "Kimi Code CLI is your next CLI agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 6481,
      "forks": 620,
      "added_stars": 2627,
      "builtBy": [
        {
          "username": "stdrc",
          "href": "https://github.com/stdrc",
          "avatar": "https://avatars.githubusercontent.com/u/5317095"
        },
        {
          "username": "xxchan",
          "href": "https://github.com/xxchan",
          "avatar": "https://avatars.githubusercontent.com/u/37948597"
        },
        {
          "username": "RealKai42",
          "href": "https://github.com/RealKai42",
          "avatar": "https://avatars.githubusercontent.com/u/44634134"
        },
        {
          "username": "Epsirom",
          "href": "https://github.com/Epsirom",
          "avatar": "https://avatars.githubusercontent.com/u/3744223"
        }
      ]
    },
    {
      "author": "OpenBMB",
      "repo": "UltraRAG",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/UltraRAG",
      "desc": "A Low-Code MCP Framework for Building Complex and Innovative RAG Pipelines",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 5215,
      "forks": 367,
      "added_stars": 2827,
      "builtBy": [
        {
          "username": "mssssss123",
          "href": "https://github.com/mssssss123",
          "avatar": "https://avatars.githubusercontent.com/u/56372416"
        },
        {
          "username": "xhd0728",
          "href": "https://github.com/xhd0728",
          "avatar": "https://avatars.githubusercontent.com/u/77320781"
        },
        {
          "username": "gdw439",
          "href": "https://github.com/gdw439",
          "avatar": "https://avatars.githubusercontent.com/u/23526166"
        },
        {
          "username": "Kaguya-19",
          "href": "https://github.com/Kaguya-19",
          "avatar": "https://avatars.githubusercontent.com/u/50143482"
        },
        {
          "username": "ChenYX24",
          "href": "https://github.com/ChenYX24",
          "avatar": "https://avatars.githubusercontent.com/u/90974567"
        }
      ]
    },
    {
      "author": "NevaMind-AI",
      "repo": "memU",
      "avatar": "https://github.com/NevaMind-AI.png",
      "repo_link": "https://github.com/NevaMind-AI/memU",
      "desc": "Memory for 24/7 proactive agents like openclaw (moltbot, clawdbot).",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 9393,
      "forks": 723,
      "added_stars": 4636,
      "builtBy": [
        {
          "username": "sairin1202",
          "href": "https://github.com/sairin1202",
          "avatar": "https://avatars.githubusercontent.com/u/5654879"
        },
        {
          "username": "evan-ak",
          "href": "https://github.com/evan-ak",
          "avatar": "https://avatars.githubusercontent.com/u/33013709"
        },
        {
          "username": "Koimiao-zz",
          "href": "https://github.com/Koimiao-zz",
          "avatar": "https://avatars.githubusercontent.com/u/224523934"
        },
        {
          "username": "ankaisen",
          "href": "https://github.com/ankaisen",
          "avatar": "https://avatars.githubusercontent.com/u/51148505"
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
      "stars": 8060,
      "forks": 813,
      "added_stars": 3621,
      "builtBy": [
        {
          "username": "p-e-w",
          "href": "https://github.com/p-e-w",
          "avatar": "https://avatars.githubusercontent.com/u/2702526"
        },
        {
          "username": "anrp",
          "href": "https://github.com/anrp",
          "avatar": "https://avatars.githubusercontent.com/u/1325515"
        },
        {
          "username": "spikymoth",
          "href": "https://github.com/spikymoth",
          "avatar": "https://avatars.githubusercontent.com/u/133602907"
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
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 28505,
      "forks": 2332,
      "added_stars": 2821,
      "builtBy": [
        {
          "username": "potassiummmm",
          "href": "https://github.com/potassiummmm",
          "avatar": "https://avatars.githubusercontent.com/u/54800242"
        },
        {
          "username": "younesbelkada",
          "href": "https://github.com/younesbelkada",
          "avatar": "https://avatars.githubusercontent.com/u/49240599"
        },
        {
          "username": "tsong-ms",
          "href": "https://github.com/tsong-ms",
          "avatar": "https://avatars.githubusercontent.com/u/84831885"
        },
        {
          "username": "XsquirrelC",
          "href": "https://github.com/XsquirrelC",
          "avatar": "https://avatars.githubusercontent.com/u/178687198"
        },
        {
          "username": "dawnmsg",
          "href": "https://github.com/dawnmsg",
          "avatar": "https://avatars.githubusercontent.com/u/23658399"
        }
      ]
    },
    {
      "author": "OpenBMB",
      "repo": "ChatDev",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/ChatDev",
      "desc": "ChatDev 2.0: Dev All through LLM-powered Multi-Agent Collaboration",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 31019,
      "forks": 3821,
      "added_stars": 2305,
      "builtBy": [
        {
          "username": "thinkwee",
          "href": "https://github.com/thinkwee",
          "avatar": "https://avatars.githubusercontent.com/u/11889052"
        },
        {
          "username": "Alphamasterliu",
          "href": "https://github.com/Alphamasterliu",
          "avatar": "https://avatars.githubusercontent.com/u/110011045"
        },
        {
          "username": "NA-Wen",
          "href": "https://github.com/NA-Wen",
          "avatar": "https://avatars.githubusercontent.com/u/92134380"
        },
        {
          "username": "LaansDole",
          "href": "https://github.com/LaansDole",
          "avatar": "https://avatars.githubusercontent.com/u/85084360"
        },
        {
          "username": "qianc62",
          "href": "https://github.com/qianc62",
          "avatar": "https://avatars.githubusercontent.com/u/48988402"
        }
      ]
    },
    {
      "author": "disler",
      "repo": "claude-code-hooks-mastery",
      "avatar": "https://github.com/disler.png",
      "repo_link": "https://github.com/disler/claude-code-hooks-mastery",
      "desc": "Master Claude Code Hooks",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 3079,
      "forks": 554,
      "added_stars": 1010,
      "builtBy": [
        {
          "username": "disler",
          "href": "https://github.com/disler",
          "avatar": "https://avatars.githubusercontent.com/u/7570811"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "google",
      "repo": "langextract",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/langextract",
      "desc": "A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 33071,
      "forks": 2208,
      "added_stars": 11256,
      "builtBy": [
        {
          "username": "aksg87",
          "href": "https://github.com/aksg87",
          "avatar": "https://avatars.githubusercontent.com/u/19271735"
        },
        {
          "username": "kleeena",
          "href": "https://github.com/kleeena",
          "avatar": "https://avatars.githubusercontent.com/u/62442533"
        },
        {
          "username": "mariano",
          "href": "https://github.com/mariano",
          "avatar": "https://avatars.githubusercontent.com/u/18598"
        },
        {
          "username": "tonebeta",
          "href": "https://github.com/tonebeta",
          "avatar": "https://avatars.githubusercontent.com/u/4890246"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "agent-lightning",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/agent-lightning",
      "desc": "The absolute trainer to light up AI agents.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 14989,
      "forks": 1272,
      "added_stars": 4714,
      "builtBy": [
        {
          "username": "actions-user",
          "href": "https://github.com/actions-user",
          "avatar": "https://avatars.githubusercontent.com/u/65916846"
        },
        {
          "username": "ultmaster",
          "href": "https://github.com/ultmaster",
          "avatar": "https://avatars.githubusercontent.com/u/8463288"
        },
        {
          "username": "acured",
          "href": "https://github.com/acured",
          "avatar": "https://avatars.githubusercontent.com/u/10276763"
        },
        {
          "username": "wizardlancet",
          "href": "https://github.com/wizardlancet",
          "avatar": "https://avatars.githubusercontent.com/u/5806609"
        }
      ]
    },
    {
      "author": "ComposioHQ",
      "repo": "awesome-claude-skills",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/awesome-claude-skills",
      "desc": "A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 35753,
      "forks": 3476,
      "added_stars": 14735,
      "builtBy": [
        {
          "username": "Prat011",
          "href": "https://github.com/Prat011",
          "avatar": "https://avatars.githubusercontent.com/u/67639393"
        },
        {
          "username": "sohamganatra",
          "href": "https://github.com/sohamganatra",
          "avatar": "https://avatars.githubusercontent.com/u/7982102"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "sanjay3290",
          "href": "https://github.com/sanjay3290",
          "avatar": "https://avatars.githubusercontent.com/u/24948667"
        },
        {
          "username": "mellson",
          "href": "https://github.com/mellson",
          "avatar": "https://avatars.githubusercontent.com/u/167574"
        }
      ]
    },
    {
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "A Collection of Skills for Claude Code and Claude AI for real-world Usage. Including Claude Code Subagents, Claude Code Commnads",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 1857,
      "forks": 223,
      "added_stars": 1080,
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
          "username": "ikala-shawn",
          "href": "https://github.com/ikala-shawn",
          "avatar": "https://avatars.githubusercontent.com/u/111341595"
        },
        {
          "username": "stitch840607",
          "href": "https://github.com/stitch840607",
          "avatar": "https://avatars.githubusercontent.com/u/259224742"
        }
      ]
    },
    {
      "author": "KellerJordan",
      "repo": "modded-nanogpt",
      "avatar": "https://github.com/KellerJordan.png",
      "repo_link": "https://github.com/KellerJordan/modded-nanogpt",
      "desc": "NanoGPT (124M) in 2 minutes",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 4646,
      "forks": 630,
      "added_stars": 505,
      "builtBy": [
        {
          "username": "KellerJordan",
          "href": "https://github.com/KellerJordan",
          "avatar": "https://avatars.githubusercontent.com/u/18433116"
        },
        {
          "username": "ClassicLarry",
          "href": "https://github.com/ClassicLarry",
          "avatar": "https://avatars.githubusercontent.com/u/42926649"
        },
        {
          "username": "YouJiacheng",
          "href": "https://github.com/YouJiacheng",
          "avatar": "https://avatars.githubusercontent.com/u/83971976"
        },
        {
          "username": "varunneal",
          "href": "https://github.com/varunneal",
          "avatar": "https://avatars.githubusercontent.com/u/32204417"
        },
        {
          "username": "leloykun",
          "href": "https://github.com/leloykun",
          "avatar": "https://avatars.githubusercontent.com/u/14250344"
        }
      ]
    },
    {
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need. A nano Claude Code–like agent, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 17225,
      "forks": 3638,
      "added_stars": 2765,
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
      "author": "sooperset",
      "repo": "mcp-atlassian",
      "avatar": "https://github.com/sooperset.png",
      "repo_link": "https://github.com/sooperset/mcp-atlassian",
      "desc": "MCP server for Atlassian tools (Confluence, Jira)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 4310,
      "forks": 923,
      "added_stars": 315,
      "builtBy": [
        {
          "username": "sooperset",
          "href": "https://github.com/sooperset",
          "avatar": "https://avatars.githubusercontent.com/u/32061883"
        },
        {
          "username": "cutekibry",
          "href": "https://github.com/cutekibry",
          "avatar": "https://avatars.githubusercontent.com/u/16778504"
        },
        {
          "username": "major",
          "href": "https://github.com/major",
          "avatar": "https://avatars.githubusercontent.com/u/89910"
        },
        {
          "username": "Otoris",
          "href": "https://github.com/Otoris",
          "avatar": "https://avatars.githubusercontent.com/u/360427"
        },
        {
          "username": "zparnold",
          "href": "https://github.com/zparnold",
          "avatar": "https://avatars.githubusercontent.com/u/5190984"
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
      "title": "Mini Logo interpreter in ~120 lines of pure JS",
      "url": "https://slicker.me/javascript/logo/logo_interpreter.htm",
      "upvotes": "4",
      "comments": "1",
      "created": "2026-02-18T04:01:03.000Z"
    },
    {
      "title": "SVAR React Gantt customizable, high-performance Gantt chart React component",
      "url": "https://github.com/svar-widgets/react-gantt",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-16T14:02:49.000Z"
    },
    {
      "title": "Aurora OS.js - An open source hacking simulator game",
      "url": "https://github.com/mental-os/Aurora-OS.js",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-14T22:59:01.000Z"
    },
    {
      "title": "A MCP server for GitLab with powerful, safe, policy-controlled access",
      "url": "https://github.com/mcpland/gitlab-mcp",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-13T21:13:21.000Z"
    },
    {
      "title": "Webix Grid - high-performance JavaScript component (GPLv3)",
      "url": "https://github.com/webix-hub/grid",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-13T07:48:12.000Z"
    },
    {
      "title": "Simple way to do radial gauge with SVG",
      "url": "https://codepen.io/pakastin/pen/JoKxEZx",
      "upvotes": "2",
      "comments": "2",
      "created": "2026-02-12T18:38:28.000Z"
    },
    {
      "title": "Visual Agentic Dev: Click any React component to edit code with AI (Open Source)",
      "url": "https://github.com/brucetoo/visual-agentic-dev",
      "upvotes": "1",
      "comments": "2",
      "created": "2026-02-11T02:50:53.000Z"
    },
    {
      "title": "mockingoose - A package for mocking Mongoose models",
      "url": "https://github.com/alonronin/mockingoose",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-10T22:23:40.000Z"
    },
    {
      "title": "UEFI Bindings for JavaScript (Proof of Concept)",
      "url": "https://codeberg.org/smnx/promethee",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-09T21:13:24.000Z"
    },
    {
      "title": "browser-use for Node.js v0.2.0 — TypeScript AI browser automation with parity to Python browser-use v0.5.11",
      "url": "https://github.com/webllm/browser-use",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-02-07T13:08:44.000Z"
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
      "title": "A New Chapter: DEV is Joining Forces with Major League Hacking (MLH)",
      "description": "Hey everyone,  I have some massive news to share today, and I couldn't be more excited to finally...",
      "url": "https://dev.to/devteam/a-new-chapter-dev-is-joining-forces-with-major-league-hacking-mlh-3kfd",
      "tags": "news, devto, hackathon, discuss",
      "reactions": 243,
      "comments": 50,
      "reading_time": 6,
      "author": "ben"
    },
    {
      "title": "The Future of Software Has a Lot More Builders. They’re Going to Need a Home.",
      "description": "I have some big news to share today: Major League Hacking has acquired DEV (dev.to), the developer...",
      "url": "https://dev.to/mlh/the-future-of-software-has-a-lot-more-builders-theyre-going-to-need-a-home-1k65",
      "tags": "discuss, news, ai, programming",
      "reactions": 63,
      "comments": 14,
      "reading_time": 4,
      "author": "jonmarkgo"
    },
    {
      "title": "The most valuable skill in 2026 isn't writing code. It is deleting it.",
      "description": "We are currently living through the greatest inflation of software in history.  With the AI tools we...",
      "url": "https://dev.to/the_nortern_dev/the-most-valuable-skill-in-2026-isnt-writing-code-it-is-deleting-it-53j1",
      "tags": "softwareengineering, career, productivity, discuss",
      "reactions": 49,
      "comments": 37,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "Ran out of Cursor tokens and switched to GitHub Copilot: Side-by-Side",
      "description": "DISCLAIMER! The best AI coding tool is the one available to you, that gives you the best model and...",
      "url": "https://dev.to/maximsaplin/ran-out-of-cursor-tokens-and-switched-to-github-copilot-side-by-side-2n5p",
      "tags": "ai, githubcopilot, programming, productivity",
      "reactions": 20,
      "comments": 5,
      "reading_time": 9,
      "author": "maximsaplin"
    },
    {
      "title": "How I Turned an Ugly Spreadsheet into an AI Assisted App with Antigravity",
      "description": "I have a confession to make.  Up until now, I wasn’t that much into “vibe coding.” I used AI all the...",
      "url": "https://dev.to/googleai/how-i-turned-an-ugly-spreadsheet-into-an-ai-assisted-app-with-antigravity-3j52",
      "tags": "antigravity, ai, gemini, googlecloud",
      "reactions": 14,
      "comments": 0,
      "reading_time": 4,
      "author": "shirmeirlador"
    },
    {
      "title": "If Writing still Matters, How to Do it Right and Avoid AI Suspicion?",
      "description": "Does writing still matter? Does anyone still care? I care. I write. Because it matters.  \"Still\"...",
      "url": "https://dev.to/ingosteinke/if-writing-still-matters-how-to-do-it-right-and-avoid-ai-suspicion-2nac",
      "tags": "writing, ai, watercooler, nanobanana",
      "reactions": 18,
      "comments": 0,
      "reading_time": 9,
      "author": "ingosteinke"
    },
    {
      "title": "Introducing Our Next DEV Education Track: \"Build Multi-Agent Systems with ADK\"",
      "description": "Hundreds of developers have already completed our first DEV Education Track, and today we're excited...",
      "url": "https://dev.to/devteam/introducing-our-next-dev-education-track-build-multi-agent-systems-with-adk-4bg8",
      "tags": "agents, gemini, ai, buildmultiagents",
      "reactions": 89,
      "comments": 9,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Can you order a pizza on my site? ❌ 99% Can't 😤",
      "description": "99% of you will rage quit before checkout. Order a pizza if you think you have patience. 🧘‍♂️     I...",
      "url": "https://dev.to/jacksonkasi/can-you-order-a-pizza-on-this-site-99-cant-30pd",
      "tags": "webdev, programming, discuss, showdev",
      "reactions": 16,
      "comments": 10,
      "reading_time": 1,
      "author": "jacksonkasi"
    },
    {
      "title": "I'm Done With Magic. Here's What I Built Instead.",
      "description": "The JavaScript ecosystem has a magic problem.  Not the fun kind. The kind where you stare at your...",
      "url": "https://dev.to/iceonfire/im-done-with-magic-heres-what-i-built-instead-988",
      "tags": "javascript, webdev, architecture, redux",
      "reactions": 1,
      "comments": 2,
      "reading_time": 6,
      "author": "iceonfire"
    },
    {
      "title": "Stacking Multiple Dialogs in React Without Hooks or Effects",
      "description": "Managing z-index across multiple stacked dialogs in React gets messy fast. I ran this problem through...",
      "url": "https://dev.to/9thquadrant/stacking-multiple-dialogs-in-react-without-hooks-or-effects-4enj",
      "tags": "javascript, react, ui, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "9thquadrant"
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
      "title": "how openai, the US government, and persona built an identity surveillance machine that files reports on you to the feds",
      "url": "https://vmfunc.re/blog/persona/",
      "score": 8,
      "comments": 3,
      "tags": [
        "reversing",
        "security"
      ],
      "id": "yyqxg6"
    },
    {
      "title": "r3: ColorForth inspired",
      "url": "https://github.com/phreda4/r3",
      "score": 1,
      "comments": 0,
      "tags": [
        "concatenative"
      ],
      "id": "f8kjl7"
    },
    {
      "title": "Ditching Discord",
      "url": "https://wiki.alopex.li/DitchingDiscord",
      "score": 12,
      "comments": 2,
      "tags": [
        "networking"
      ],
      "id": "qvjp07"
    },
    {
      "title": "CEL by Example",
      "url": "https://celbyexample.com",
      "score": 3,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "3h5gd4"
    },
    {
      "title": "Self-hosting my websites using bootable containers",
      "url": "https://yorickpeterse.com/articles/self-hosting-my-websites-using-bootable-containers/",
      "score": 2,
      "comments": 0,
      "tags": [
        "devops",
        "linux"
      ],
      "id": "axp2rt"
    },
    {
      "title": "Rust on CHERIoT: Status update #0",
      "url": "https://rust.cheriot.org/2026/02/15/status-update.html",
      "score": 3,
      "comments": 0,
      "tags": [
        "compilers",
        "rust"
      ],
      "id": "es58bi"
    },
    {
      "title": "Top 20 worldwide with social-engineering and a cheat that's still undetected",
      "url": "https://ud2.rip/blog/vsrg/",
      "score": 3,
      "comments": 1,
      "tags": [
        "games"
      ],
      "id": "shh36u"
    },
    {
      "title": "Bashtorio - Unix Pipe Factory",
      "url": "https://bashtorio.xyz/",
      "score": 1,
      "comments": 0,
      "tags": [
        "games",
        "unix"
      ],
      "id": "fb6ssd"
    },
    {
      "title": "Analysis of reported issues in vodozemac",
      "url": "https://matrix.org/blog/2026/02/analysis-of-reported-issues-in-vodozemac/",
      "score": 1,
      "comments": 0,
      "tags": [
        "cryptography"
      ],
      "id": "e8ibyr"
    },
    {
      "title": "Why I don't think AGI is imminent",
      "url": "https://dlants.me/agi-not-imminent.html",
      "score": 9,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "rrlcfb"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "zdw",
      "descendants": 172,
      "id": 47066552,
      "kids": [
        47067871,
        47067188,
        47067519,
        47067464,
        47068994,
        47067287,
        47067247,
        47067413,
        47068339,
        47068071,
        47067568,
        47067660,
        47067424,
        47068121,
        47067044,
        47067367,
        47067104,
        47069016,
        47067437,
        47067366,
        47068153,
        47067158,
        47067124,
        47067205,
        47067167,
        47067281,
        47067134,
        47067150,
        47068022,
        47067382,
        47067163,
        47068072,
        47067401,
        47067283,
        47067170,
        47067126,
        47067786,
        47068986
      ],
      "score": 294,
      "time": 1771449500,
      "title": "Sizing chaos",
      "type": "story",
      "url": "https://pudding.cool/2026/02/womens-sizing/"
    },
    {
      "by": "thewavelength",
      "descendants": 149,
      "id": 47067678,
      "kids": [
        47068856,
        47067890,
        47068035,
        47069150,
        47068488,
        47067830,
        47067885,
        47068002,
        47069073,
        47068031,
        47068967,
        47067758,
        47068657,
        47068256,
        47068814,
        47068456
      ],
      "score": 196,
      "time": 1771456118,
      "title": "Ladybird: Closing this as we are no longer pursuing Swift adoption",
      "type": "story",
      "url": "https://github.com/LadybirdBrowser/ladybird/issues/933"
    },
    {
      "by": "surprisetalk",
      "descendants": 78,
      "id": 47066241,
      "kids": [
        47067816,
        47067622,
        47069104,
        47067483,
        47069108,
        47067501,
        47067239,
        47067442,
        47067295,
        47068100,
        47067173,
        47067809,
        47067742,
        47067383,
        47067515,
        47067763,
        47067637,
        47067264,
        47067676,
        47067362,
        47067899,
        47067438
      ],
      "score": 154,
      "time": 1771448071,
      "title": "27-year-old Apple iBooks can connect to Wi-Fi and download official updates",
      "type": "story",
      "url": "https://old.reddit.com/r/MacOS/comments/1r8900z/macos_which_officially_supports_27_year_old/"
    },
    {
      "by": "jfantl",
      "descendants": 83,
      "id": 47064490,
      "kids": [
        47065241,
        47066342,
        47065053,
        47065023,
        47068424,
        47067829,
        47068399,
        47065778,
        47065865,
        47068901,
        47065187,
        47068186,
        47067734,
        47065571,
        47065159,
        47065526,
        47065547,
        47066107,
        47066991,
        47068987,
        47068369,
        47066698,
        47065494,
        47067620,
        47069109,
        47066930,
        47066153
      ],
      "score": 283,
      "time": 1771439842,
      "title": "Cosmologically Unique IDs",
      "type": "story",
      "url": "https://jasonfantl.com/posts/Universal-Unique-IDs/"
    },
    {
      "by": "sz4kerto",
      "descendants": 172,
      "id": 47063005,
      "kids": [
        47065206,
        47063590,
        47063593,
        47066760,
        47067781,
        47066294,
        47066809,
        47067447,
        47067144,
        47064620,
        47067628,
        47066205,
        47066755,
        47064866,
        47063713,
        47063775,
        47064003,
        47065114,
        47063781,
        47064605,
        47064181,
        47063757
      ],
      "score": 328,
      "time": 1771433172,
      "title": "Tailscale Peer Relays is now generally available",
      "type": "story",
      "url": "https://tailscale.com/blog/peer-relays-ga"
    },
    {
      "by": "idoxer",
      "descendants": 137,
      "id": 47062748,
      "kids": [
        47063074,
        47066807,
        47069048,
        47063053,
        47069093,
        47065270,
        47063206,
        47068302,
        47063859,
        47063587,
        47065102,
        47062749,
        47063165,
        47063766,
        47065032,
        47064265,
        47062786,
        47063290,
        47063106
      ],
      "score": 258,
      "time": 1771432099,
      "title": "Zero-day CSS: CVE-2026-2441 exists in the wild",
      "type": "story",
      "url": "https://chromereleases.googleblog.com/2026/02/stable-channel-update-for-desktop_13.html"
    },
    {
      "by": "todsacerdoti",
      "descendants": 97,
      "id": 47064047,
      "kids": [
        47069134,
        47066072,
        47064841,
        47067142,
        47066215,
        47066365,
        47068372,
        47068995,
        47066673,
        47069002,
        47067983,
        47066751,
        47066723,
        47065717,
        47066157,
        47066163,
        47065345,
        47065810,
        47065105,
        47068701,
        47066303,
        47065851,
        47067472,
        47066106,
        47065749,
        47066313,
        47065308,
        47067225,
        47065746
      ],
      "score": 202,
      "time": 1771437853,
      "title": "DNS-Persist-01: A New Model for DNS-Based Challenge Validation",
      "type": "story",
      "url": "https://letsencrypt.org/2026/02/18/dns-persist-01.html"
    },
    {
      "by": "tuananh",
      "descendants": 7,
      "id": 47068948,
      "kids": [
        47069168,
        47069122,
        47069107,
        47069173
      ],
      "score": 33,
      "time": 1771466133,
      "title": "Minecraft Java is switching from OpenGL to Vulkan",
      "type": "story",
      "url": "https://www.gamingonlinux.com/2026/02/minecraft-java-is-switching-from-opengl-to-vulkan-for-the-vibrant-visuals-update/"
    },
    {
      "by": "thunderseethe",
      "descendants": 0,
      "id": 47025885,
      "score": 20,
      "time": 1771178864,
      "title": "How to Choose Between Hindley-Milner and Bidirectional Typing",
      "type": "story",
      "url": "https://thunderseethe.dev/posts/how-to-choose-between-hm-and-bidir/"
    },
    {
      "by": "tosh",
      "descendants": 9,
      "id": 47065179,
      "kids": [
        47069018,
        47065658,
        47067015,
        47066063
      ],
      "score": 59,
      "time": 1771442939,
      "title": "R3forth: A concatenative language derived from ColorForth",
      "type": "story",
      "url": "https://github.com/phreda4/r3/blob/main/doc/r3forth_tutorial.md"
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
      "title": "The most valuable skill in 2026 isn't writing code. It is deleting it.",
      "description": "We are currently living through the greatest inflation of software in history.  With the AI tools we...",
      "url": "https://dev.to/the_nortern_dev/the-most-valuable-skill-in-2026-isnt-writing-code-it-is-deleting-it-53j1",
      "tags": "softwareengineering, career, productivity, discuss",
      "reactions": 49,
      "comments": 37,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "21. C# (while Loop 2)",
      "description": "Goal    Ask the user to enter a word If the word length is less than 15 Keep appending...",
      "url": "https://dev.to/sabin_sim/21-c-while-loop-2-5fd3",
      "tags": "csharp, programming, learning, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "sabin_sim"
    },
    {
      "title": "One Month Into My Java Journey – Honest Course Feedback",
      "description": "The Truth I Never Admitted  Before joining this course, I didn’t know anything about...",
      "url": "https://dev.to/kesavarthini/one-month-into-my-java-journey-honest-course-feedback-5gh3",
      "tags": "beginners, career, codenewbie, java",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "kesavarthini"
    },
    {
      "title": "The LinkedIn Easy Apply Trap: Why 200 Applications Gets You 3 Callbacks",
      "description": "I'll be honest with you — when I was building SIRA, I kept seeing the same pattern over and over....",
      "url": "https://dev.to/sira_ai/the-linkedin-easy-apply-trap-why-200-applications-gets-you-3-callbacks-nfo",
      "tags": "career, resume, beginners, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sira_ai"
    },
    {
      "title": "In Praise of “Hobbyist Languages”: The Unsung Heroes of Software Development",
      "description": "First published on design﹢code  It started with a simple message posted to a Usenet group in...",
      "url": "https://dev.to/lucianofedericopereira/in-praise-of-hobbyist-languages-the-unsung-heroes-of-software-development-k2c",
      "tags": "opensource, community, motivation, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "lucianofedericopereira"
    },
    {
      "title": "[Boost]",
      "description": "Your Plumber Has More Job Security Than You: AI Threat Levels...",
      "url": "https://dev.to/willzmu/-3j8n",
      "tags": "ai, career, devops, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "willzmu"
    },
    {
      "title": "7 years, no senior. So what?",
      "description": "7 years ago I started learning to code.  I didn't become a senior at 22. I didn't get into Google. I...",
      "url": "https://dev.to/whoammi_who_39a247fb5ab0d/7-years-no-senior-so-what-4mb0",
      "tags": "career, cpp, devjournal, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "whoammi_who_39a247fb5ab0d"
    },
    {
      "title": "The Country of Geniuses That Doesn’t Exist",
      "description": "Why AI won’t replace white-collar workers anytime soon — and what actually matters for your career.",
      "url": "https://dev.to/razoorka/the-country-of-geniuses-that-doesnt-exist-5dkh",
      "tags": "ai, career, productivity, discuss",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "razoorka"
    },
    {
      "title": "Tech Background of Abdullah Arafat Issah",
      "description": "Meet Abdullah Arafat Issah stage name Onlembeh King Black,  a driven IT Support &amp; Networking...",
      "url": "https://dev.to/jimclinton/tech-background-of-abdullah-arafat-issah-2d0k",
      "tags": "career, learning, monitoring, networking",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "jimclinton"
    },
    {
      "title": "5 Most Asked Spring Interview Questions",
      "description": "✅ 1. What is the Spring Framework and why is it used?  Answer:  Spring is a powerful Java framework...",
      "url": "https://dev.to/quipoin_a9cb84280f6225b1e/5-most-asked-spring-interview-questions-1hon",
      "tags": "spring, webdev, career, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "quipoin_a9cb84280f6225b1e"
    }
  ]
}
```

