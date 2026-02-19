# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-02-19 07:15:48 UTC

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
      "stars": 3704,
      "forks": 233,
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
      "stars": 8828,
      "forks": 1209,
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
      "stars": 25947,
      "forks": 1526,
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
      "stars": 10725,
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
      "stars": 13599,
      "forks": 1374,
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
      "stars": 1582,
      "forks": 160,
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
      "stars": 21275,
      "forks": 1266,
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
      "stars": 9461,
      "forks": 619,
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
      "stars": 9199,
      "forks": 724,
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
      "stars": 83745,
      "forks": 6081,
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
      "stars": 8759,
      "forks": 1246,
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
      "stars": 4126,
      "forks": 332,
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
      "stars": 162894,
      "forks": 14610,
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
      "stars": 35058,
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
      "stars": 9735,
      "forks": 752,
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
      "stars": 22694,
      "forks": 1110,
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
      "forks": 9973,
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
      "stars": 1830,
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
      "stars": 15258,
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
      "stars": 32001,
      "forks": 2951,
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
      "stars": 2327,
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
      "stars": 42584,
      "forks": 7953,
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
      "stars": 16666,
      "forks": 1009,
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
      "stars": 3351,
      "forks": 309,
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
      "stars": 35534,
      "forks": 1905,
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
      "stars": 10586,
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
      "stars": 39584,
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
      "stars": 28473,
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
      "stars": 3176,
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
      "stars": 15537,
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
      "stars": 8962,
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
      "stars": 71601,
      "forks": 7300,
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
      "stars": 6483,
      "forks": 621,
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
      "stars": 5217,
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
      "stars": 9403,
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
      "stars": 8151,
      "forks": 821,
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
      "stars": 28510,
      "forks": 2334,
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
      "stars": 31022,
      "forks": 3822,
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
      "stars": 3080,
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
      "stars": 33117,
      "forks": 2210,
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
      "author": "Shubhamsaboo",
      "repo": "awesome-llm-apps",
      "avatar": "https://github.com/Shubhamsaboo.png",
      "repo_link": "https://github.com/Shubhamsaboo/awesome-llm-apps",
      "desc": "Collection of awesome LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and opensource models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 95972,
      "forks": 13920,
      "added_stars": 8068,
      "builtBy": [
        {
          "username": "Shubhamsaboo",
          "href": "https://github.com/Shubhamsaboo",
          "avatar": "https://avatars.githubusercontent.com/u/31396011"
        },
        {
          "username": "Madhuvod",
          "href": "https://github.com/Madhuvod",
          "avatar": "https://avatars.githubusercontent.com/u/124294538"
        },
        {
          "username": "libw0430",
          "href": "https://github.com/libw0430",
          "avatar": "https://avatars.githubusercontent.com/u/102198332"
        },
        {
          "username": "awesomekoder",
          "href": "https://github.com/awesomekoder",
          "avatar": "https://avatars.githubusercontent.com/u/258367783"
        },
        {
          "username": "AndrewHoh",
          "href": "https://github.com/AndrewHoh",
          "avatar": "https://avatars.githubusercontent.com/u/774516"
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
      "stars": 15000,
      "forks": 1273,
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
      "stars": 35792,
      "forks": 3480,
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
      "stars": 1863,
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
      "stars": 4647,
      "forks": 631,
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
      "stars": 17231,
      "forks": 3642,
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
      "stars": 4311,
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
      "title": "Window Tinting McAllen, TX | Tint-On-Wheels",
      "url": "https://tintonwheels.info/",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-02-19T06:45:40.000Z"
    },
    {
      "title": "20 Design Reference Platforms Beyond Dribbble",
      "url": "https://jsdevspace.substack.com/p/20-design-reference-platforms-beyond",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-19T06:15:16.000Z"
    },
    {
      "title": "Mini Logo interpreter in ~120 lines of pure JS",
      "url": "https://slicker.me/javascript/logo/logo_interpreter.htm",
      "upvotes": "4",
      "comments": "2",
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
      "reactions": 256,
      "comments": 56,
      "reading_time": 6,
      "author": "ben"
    },
    {
      "title": "The Future of Software Has a Lot More Builders. They’re Going to Need a Home.",
      "description": "I have some big news to share today: Major League Hacking has acquired DEV (dev.to), the developer...",
      "url": "https://dev.to/mlh/the-future-of-software-has-a-lot-more-builders-theyre-going-to-need-a-home-1k65",
      "tags": "discuss, news, ai, programming",
      "reactions": 64,
      "comments": 15,
      "reading_time": 4,
      "author": "jonmarkgo"
    },
    {
      "title": "The most valuable skill in 2026 isn't writing code. It is deleting it.",
      "description": "We are currently living through the greatest inflation of software in history.  With the AI tools we...",
      "url": "https://dev.to/the_nortern_dev/the-most-valuable-skill-in-2026-isnt-writing-code-it-is-deleting-it-53j1",
      "tags": "softwareengineering, career, productivity, discuss",
      "reactions": 50,
      "comments": 42,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "Introducing Our Next DEV Education Track: \"Build Multi-Agent Systems with ADK\"",
      "description": "Hundreds of developers have already completed our first DEV Education Track, and today we're excited...",
      "url": "https://dev.to/devteam/introducing-our-next-dev-education-track-build-multi-agent-systems-with-adk-4bg8",
      "tags": "agents, gemini, ai, buildmultiagents",
      "reactions": 90,
      "comments": 9,
      "reading_time": 3,
      "author": "jess"
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
      "reactions": 15,
      "comments": 0,
      "reading_time": 4,
      "author": "shirmeirlador"
    },
    {
      "title": "If Writing still Matters, How to Do it Right and Avoid AI Suspicion?",
      "description": "Does writing still matter? Does anyone still care? I care. I write. Because it matters.  \"Still\"...",
      "url": "https://dev.to/ingosteinke/if-writing-still-matters-how-to-do-it-right-and-avoid-ai-suspicion-2nac",
      "tags": "writing, ai, watercooler, nanobanana",
      "reactions": 19,
      "comments": 0,
      "reading_time": 9,
      "author": "ingosteinke"
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
      "title": "Monitoring Data-Dependent Temporal Patterns",
      "url": "https://imiron.io/post/fotl/",
      "score": 1,
      "comments": 0,
      "tags": [
        "formalmethods"
      ],
      "id": "fe3ecz"
    },
    {
      "title": "C++26: std::is_within_lifetime",
      "url": "https://www.sandordargo.com/blog/2026/02/18/cpp26-std_is_within_lifetime",
      "score": 5,
      "comments": 0,
      "tags": [
        "c++"
      ],
      "id": "j73dzq"
    },
    {
      "title": "Full Disclosure of Security Vulnerabilities a 'Damned Good Idea' (2007)",
      "url": "https://www.schneier.com/essays/archives/2007/01/schneier_full_disclo.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "hn4w0f"
    },
    {
      "title": "how openai, the US government, and persona built an identity surveillance machine that files reports on you to the feds",
      "url": "https://vmfunc.re/blog/persona/",
      "score": 35,
      "comments": 4,
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
      "score": 52,
      "comments": 14,
      "tags": [
        "culture",
        "practices",
        "privacy"
      ],
      "id": "qvjp07"
    },
    {
      "title": "CEL by Example",
      "url": "https://celbyexample.com",
      "score": 6,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "3h5gd4"
    },
    {
      "title": "Self-hosting my websites using bootable containers",
      "url": "https://yorickpeterse.com/articles/self-hosting-my-websites-using-bootable-containers/",
      "score": 3,
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
      "score": 7,
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
      "comments": 2,
      "tags": [
        "games"
      ],
      "id": "shh36u"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "puppion",
      "descendants": 89,
      "id": 47070142,
      "kids": [
        47070465,
        47070715,
        47070388,
        47070421,
        47070782,
        47070405,
        47070443,
        47070467,
        47070544,
        47070383,
        47070572,
        47070394,
        47070582,
        47070617,
        47070542,
        47070419
      ],
      "score": 147,
      "time": 1771477657,
      "title": "European Tech Alternatives",
      "type": "story",
      "url": "https://eutechmap.com/map"
    },
    {
      "by": "zdw",
      "descendants": 232,
      "id": 47066552,
      "kids": [
        47067188,
        47070303,
        47067519,
        47067205,
        47067287,
        47070315,
        47069511,
        47067464,
        47070352,
        47067568,
        47067247,
        47067413,
        47067044,
        47070611,
        47067104,
        47068339,
        47068071,
        47067424,
        47069308,
        47067367,
        47068121,
        47067158,
        47067437,
        47069334,
        47070490,
        47067660,
        47068994,
        47067366,
        47069328,
        47067871,
        47067124,
        47067134,
        47067786,
        47069899,
        47067167,
        47067281,
        47067150,
        47069016,
        47068022,
        47067382,
        47067163,
        47068153,
        47067401,
        47067283,
        47067170,
        47068072,
        47067126,
        47068986
      ],
      "score": 452,
      "time": 1771449500,
      "title": "Sizing chaos",
      "type": "story",
      "url": "https://pudding.cool/2026/02/womens-sizing/"
    },
    {
      "by": "surprisetalk",
      "descendants": 143,
      "id": 47066241,
      "kids": [
        47067816,
        47067622,
        47067483,
        47067501,
        47069108,
        47069518,
        47070614,
        47067442,
        47067239,
        47067295,
        47070463,
        47070667,
        47069670,
        47067173,
        47067809,
        47068100,
        47069231,
        47069104,
        47070578,
        47067637,
        47069349,
        47067383,
        47067515,
        47069620,
        47067362,
        47069310,
        47067763,
        47067264,
        47067742,
        47067676,
        47067899,
        47070506,
        47067438
      ],
      "score": 280,
      "time": 1771448071,
      "title": "27-year-old Apple iBooks can connect to Wi-Fi and download official updates",
      "type": "story",
      "url": "https://old.reddit.com/r/MacOS/comments/1r8900z/macos_which_officially_supports_27_year_old/"
    },
    {
      "by": "fp64enjoyer",
      "descendants": 26,
      "id": 47068890,
      "kids": [
        47069424,
        47069822,
        47070839,
        47069802,
        47069479,
        47070554,
        47070612,
        47070015,
        47070025
      ],
      "score": 82,
      "time": 1771465567,
      "title": "15 years of FP64 segmentation, and why the Blackwell Ultra breaks the pattern",
      "type": "story",
      "url": "https://nicolasdickenmann.com/blog/the-great-fp64-divide.html"
    },
    {
      "by": "theahura",
      "descendants": 261,
      "id": 47069299,
      "kids": [
        47070852,
        47070518,
        47069629,
        47069488,
        47069775,
        47069726,
        47069903,
        47070164,
        47069643,
        47070825,
        47070764,
        47070531,
        47070613,
        47070448,
        47070449,
        47070229,
        47070089,
        47069719,
        47070696,
        47069494,
        47069667,
        47069300,
        47069561,
        47069483,
        47070211,
        47069677,
        47069649,
        47069883,
        47069759,
        47069916,
        47069606,
        47069539,
        47069720,
        47069740,
        47069808,
        47069570,
        47070276,
        47070481,
        47069697,
        47069772,
        47069713,
        47070400,
        47069960,
        47069565,
        47069766,
        47070049,
        47069756,
        47069495
      ],
      "score": 250,
      "time": 1771469546,
      "title": "Anthropic officially bans using subscription auth for third party use",
      "type": "story",
      "url": "https://code.claude.com/docs/en/legal-and-compliance"
    },
    {
      "by": "jfantl",
      "descendants": 108,
      "id": 47064490,
      "kids": [
        47065241,
        47070040,
        47066342,
        47069590,
        47070523,
        47065053,
        47065023,
        47069971,
        47065778,
        47065865,
        47065187,
        47067829,
        47068399,
        47069398,
        47067734,
        47068186,
        47065571,
        47065159,
        47068901,
        47065526,
        47065547,
        47066107,
        47066991,
        47068369,
        47066698,
        47065494,
        47068987,
        47067620,
        47069109,
        47068424,
        47066930,
        47066153
      ],
      "score": 345,
      "time": 1771439842,
      "title": "Cosmologically Unique IDs",
      "type": "story",
      "url": "https://jasonfantl.com/posts/Universal-Unique-IDs/"
    },
    {
      "by": "kristianp",
      "descendants": 11,
      "id": 47069179,
      "kids": [
        47069184,
        47069582,
        47070128,
        47070629,
        47070073
      ],
      "score": 40,
      "time": 1771468320,
      "title": "Step 3.5 Flash: Fast Enough to Think. Reliable Enough to Act",
      "type": "story",
      "url": "https://static.stepfun.com/blog/step-3.5-flash/"
    },
    {
      "by": "thunderseethe",
      "descendants": 10,
      "id": 47025885,
      "kids": [
        47069526,
        47069377,
        47070366,
        47069595
      ],
      "score": 82,
      "time": 1771178864,
      "title": "How to Choose Between Hindley-Milner and Bidirectional Typing",
      "type": "story",
      "url": "https://thunderseethe.dev/posts/how-to-choose-between-hm-and-bidir/"
    },
    {
      "by": "murat3ok",
      "descendants": 0,
      "id": 47070446,
      "score": 6,
      "time": 1771481398,
      "title": "Stoolap/Node: A Native Node.js Driver That's Surprisingly Fast",
      "type": "story",
      "url": "https://stoolap.io/blog/2026/02/19/introducing-stoolap-node/"
    },
    {
      "by": "sz4kerto",
      "descendants": 190,
      "id": 47063005,
      "kids": [
        47065206,
        47063590,
        47063593,
        47070292,
        47066760,
        47067447,
        47066809,
        47070256,
        47066294,
        47067781,
        47064620,
        47064866,
        47067144,
        47066205,
        47067628,
        47066755,
        47063713,
        47069237,
        47063775,
        47064003,
        47065114,
        47063781,
        47064605,
        47064181,
        47070052,
        47063757
      ],
      "score": 381,
      "time": 1771433172,
      "title": "Tailscale Peer Relays is now generally available",
      "type": "story",
      "url": "https://tailscale.com/blog/peer-relays-ga"
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
      "reactions": 50,
      "comments": 42,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "Final Round AI Alternatives in 2026: What Engineers Should Actually Pay Attention To",
      "description": "Search for “Final Round AI alternatives”, and you’ll find plenty of comparison posts. Most of them...",
      "url": "https://dev.to/finalroundai/final-round-ai-alternatives-in-2026-what-engineers-should-actually-pay-attention-to-41oc",
      "tags": "ai, productivity, career, interview",
      "reactions": 6,
      "comments": 0,
      "reading_time": 7,
      "author": "hadil"
    },
    {
      "title": "Software Is About to Get Cheap. Here's What That Actually Means.",
      "description": "Last week I wrote about AI coming for white-collar jobs. That post was about employment. But there's...",
      "url": "https://dev.to/maniishbhusal/software-is-about-to-get-cheap-heres-what-that-actually-means-182j",
      "tags": "ai, saas, webdev, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "maniishbhusal"
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
      "title": "How I calculate my minimum hourly rate before every new client",
      "description": "I've been freelancing for about 6 years. The single biggest mistake I made early on was setting my...",
      "url": "https://dev.to/mattkallaway/how-i-calculate-my-minimum-hourly-rate-before-every-new-client-2k98",
      "tags": "career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "mattkallaway"
    },
    {
      "title": "7 Web Development Truths Nobody Tells You (Until It's Too Late)",
      "description": "Discover the 7 critical web development truths that experienced developers wish they'd learned earlier. From framework choices to performance, accessibility, and testing—lessons that will change how you build for the web.",
      "url": "https://dev.to/iniyarajan86/7-web-development-truths-nobody-tells-you-until-its-too-late-1l2",
      "tags": "webdev, javascript, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "iniyarajan86"
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
      "title": "I Deleted 17 Items From My To-Do List. Here Is What Actually Mattered",
      "description": "I tracked my to-do list for 3 months. The data was humbling.           The experiment   Every day I...",
      "url": "https://dev.to/sergheipogor/i-deleted-17-items-from-my-to-do-list-here-is-what-actually-mattered-dop",
      "tags": "productivity, career, beginners, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "sergheipogor"
    }
  ]
}
```

