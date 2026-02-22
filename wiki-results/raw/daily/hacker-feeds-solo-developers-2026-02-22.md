# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-02-22 07:06:31 UTC

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
      "author": "rowboatlabs",
      "repo": "rowboat",
      "avatar": "https://github.com/rowboatlabs.png",
      "repo_link": "https://github.com/rowboatlabs/rowboat",
      "desc": "Open-source AI coworker, with memory",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 8210,
      "forks": 708,
      "added_stars": 2449,
      "builtBy": [
        {
          "username": "ramnique",
          "href": "https://github.com/ramnique",
          "avatar": "https://avatars.githubusercontent.com/u/30795890"
        },
        {
          "username": "akhisud3195",
          "href": "https://github.com/akhisud3195",
          "avatar": "https://avatars.githubusercontent.com/u/55130408"
        },
        {
          "username": "arkml",
          "href": "https://github.com/arkml",
          "avatar": "https://avatars.githubusercontent.com/u/6592213"
        },
        {
          "username": "tusharmagar",
          "href": "https://github.com/tusharmagar",
          "avatar": "https://avatars.githubusercontent.com/u/47842976"
        }
      ]
    },
    {
      "author": "steipete",
      "repo": "summarize",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/summarize",
      "desc": "Point at any URL/YouTube/Podcast or file. Get the gist. CLI and Chrome Extension.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 4022,
      "forks": 248,
      "added_stars": 1995,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 26336,
      "forks": 1545,
      "added_stars": 1358,
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
      "author": "badlogic",
      "repo": "pi-mono",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-mono",
      "desc": "AI agent toolkit: coding agent CLI, unified LLM API, TUI & web UI libraries, Slack bot, vLLM pods",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 14574,
      "forks": 1500,
      "added_stars": 2532,
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
      "author": "cinnyapp",
      "repo": "cinny",
      "avatar": "https://github.com/cinnyapp.png",
      "repo_link": "https://github.com/cinnyapp/cinny",
      "desc": "Yet another matrix client",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 3218,
      "forks": 437,
      "added_stars": 217,
      "builtBy": [
        {
          "username": "ajbura",
          "href": "https://github.com/ajbura",
          "avatar": "https://avatars.githubusercontent.com/u/32841439"
        },
        {
          "username": "kfiven",
          "href": "https://github.com/kfiven",
          "avatar": "https://avatars.githubusercontent.com/u/33421343"
        },
        {
          "username": "ginnyTheCat",
          "href": "https://github.com/ginnyTheCat",
          "avatar": "https://avatars.githubusercontent.com/u/35173023"
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
      "stars": 8844,
      "forks": 1258,
      "added_stars": 633,
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
    },
    {
      "author": "cloudflare",
      "repo": "agents",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/agents",
      "desc": "Build and deploy AI Agents on Cloudflare",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 3505,
      "forks": 391,
      "added_stars": 150,
      "builtBy": [
        {
          "username": "threepointone",
          "href": "https://github.com/threepointone",
          "avatar": "https://avatars.githubusercontent.com/u/18808"
        },
        {
          "username": "whoiskatrin",
          "href": "https://github.com/whoiskatrin",
          "avatar": "https://avatars.githubusercontent.com/u/8017908"
        },
        {
          "username": "mattzcarey",
          "href": "https://github.com/mattzcarey",
          "avatar": "https://avatars.githubusercontent.com/u/77928207"
        },
        {
          "username": "deathbyknowledge",
          "href": "https://github.com/deathbyknowledge",
          "avatar": "https://avatars.githubusercontent.com/u/37671466"
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
      "stars": 9573,
      "forks": 627,
      "added_stars": 1018,
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
      "author": "ComposioHQ",
      "repo": "composio",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/composio",
      "desc": "Composio powers 1000+ toolkits, tool search, context management, authentication, and a sandboxed workbench to help you build AI agents that turn intent into action.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 27111,
      "forks": 4445,
      "added_stars": 566,
      "builtBy": [
        {
          "username": "Sushmithamallesh",
          "href": "https://github.com/Sushmithamallesh",
          "avatar": "https://avatars.githubusercontent.com/u/19796925"
        },
        {
          "username": "haxzie",
          "href": "https://github.com/haxzie",
          "avatar": "https://avatars.githubusercontent.com/u/53584487"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jkomyno",
          "href": "https://github.com/jkomyno",
          "avatar": "https://avatars.githubusercontent.com/u/12381818"
        },
        {
          "username": "alt-glitch",
          "href": "https://github.com/alt-glitch",
          "avatar": "https://avatars.githubusercontent.com/u/52913345"
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
      "stars": 1623,
      "forks": 163,
      "added_stars": 508,
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
      "author": "danielmiessler",
      "repo": "Personal_AI_Infrastructure",
      "avatar": "https://github.com/danielmiessler.png",
      "repo_link": "https://github.com/danielmiessler/Personal_AI_Infrastructure",
      "desc": "Agentic AI Infrastructure for magnifying HUMAN capabilities.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 9024,
      "forks": 1236,
      "added_stars": 724,
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
      "stars": 4551,
      "forks": 359,
      "added_stars": 3944,
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
      "stars": 163099,
      "forks": 14639,
      "added_stars": 3463,
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
      "stars": 35073,
      "forks": 4599,
      "added_stars": 1273,
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
      "author": "netbirdio",
      "repo": "netbird",
      "avatar": "https://github.com/netbirdio.png",
      "repo_link": "https://github.com/netbirdio/netbird",
      "desc": "Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and granular access controls.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 22873,
      "forks": 1117,
      "added_stars": 1721,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 42683,
      "forks": 7972,
      "added_stars": 667,
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
      "author": "hashicorp",
      "repo": "terraform-provider-aws",
      "avatar": "https://github.com/hashicorp.png",
      "repo_link": "https://github.com/hashicorp/terraform-provider-aws",
      "desc": "The AWS Provider enables Terraform to manage AWS resources.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 10766,
      "forks": 9984,
      "added_stars": 77,
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
      "author": "steveyegge",
      "repo": "gastown",
      "avatar": "https://github.com/steveyegge.png",
      "repo_link": "https://github.com/steveyegge/gastown",
      "desc": "Gas Town - multi-agent workspace manager",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 9992,
      "forks": 791,
      "added_stars": 4910,
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 1901,
      "forks": 402,
      "added_stars": 1019,
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
      "author": "grafana",
      "repo": "mcp-grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/mcp-grafana",
      "desc": "MCP server for Grafana",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 2355,
      "forks": 269,
      "added_stars": 207,
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
      "author": "charmbracelet",
      "repo": "bubbletea",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/bubbletea",
      "desc": "A powerful little TUI framework 🏗",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 39727,
      "forks": 1094,
      "added_stars": 1307,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The to-do app to organize your life.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 3378,
      "forks": 317,
      "added_stars": 302,
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
      "author": "charmbracelet",
      "repo": "glow",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/glow",
      "desc": "Render markdown on the CLI, with pizzazz! 💅🏻",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 22943,
      "forks": 578,
      "added_stars": 623,
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
          "username": "caarlos0",
          "href": "https://github.com/caarlos0",
          "avatar": "https://avatars.githubusercontent.com/u/245435"
        },
        {
          "username": "penguwin",
          "href": "https://github.com/penguwin",
          "avatar": "https://avatars.githubusercontent.com/u/13225611"
        }
      ]
    },
    {
      "author": "helm",
      "repo": "helm",
      "avatar": "https://github.com/helm.png",
      "repo_link": "https://github.com/helm/helm",
      "desc": "The Kubernetes Package Manager",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 29530,
      "forks": 7492,
      "added_stars": 242,
      "builtBy": [
        {
          "username": "technosophos",
          "href": "https://github.com/technosophos",
          "avatar": "https://avatars.githubusercontent.com/u/89193"
        },
        {
          "username": "adamreese",
          "href": "https://github.com/adamreese",
          "avatar": "https://avatars.githubusercontent.com/u/2347529"
        },
        {
          "username": "mattfarina",
          "href": "https://github.com/mattfarina",
          "avatar": "https://avatars.githubusercontent.com/u/62991"
        },
        {
          "username": "thomastaylor312",
          "href": "https://github.com/thomastaylor312",
          "avatar": "https://avatars.githubusercontent.com/u/4294228"
        }
      ]
    },
    {
      "author": "asheshgoplani",
      "repo": "agent-deck",
      "avatar": "https://github.com/asheshgoplani.png",
      "repo_link": "https://github.com/asheshgoplani/agent-deck",
      "desc": "Terminal session manager for AI coding agents. One TUI for Claude, Gemini, OpenCode, Codex, and more.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 980,
      "forks": 96,
      "added_stars": 460,
      "builtBy": [
        {
          "username": "asheshgoplani",
          "href": "https://github.com/asheshgoplani",
          "avatar": "https://avatars.githubusercontent.com/u/36273585"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "artwist-polyakov",
          "href": "https://github.com/artwist-polyakov",
          "avatar": "https://avatars.githubusercontent.com/u/42345388"
        },
        {
          "username": "amir-jakoby",
          "href": "https://github.com/amir-jakoby",
          "avatar": "https://avatars.githubusercontent.com/u/7036401"
        },
        {
          "username": "mtparet",
          "href": "https://github.com/mtparet",
          "avatar": "https://avatars.githubusercontent.com/u/754770"
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
      "stars": 32175,
      "forks": 2959,
      "added_stars": 1182,
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
      "author": "juanfont",
      "repo": "headscale",
      "avatar": "https://github.com/juanfont.png",
      "repo_link": "https://github.com/juanfont/headscale",
      "desc": "An open source, self-hosted implementation of the Tailscale control server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 35645,
      "forks": 1913,
      "added_stars": 1257,
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
      "author": "tailscale",
      "repo": "tailscale",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailscale",
      "desc": "The easiest, most secure way to use WireGuard and 2FA.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 28622,
      "forks": 2297,
      "added_stars": 1292,
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
      "author": "abiosoft",
      "repo": "colima",
      "avatar": "https://github.com/abiosoft.png",
      "repo_link": "https://github.com/abiosoft/colima",
      "desc": "Container runtimes on macOS (and Linux) with minimal setup",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 27079,
      "forks": 538,
      "added_stars": 681,
      "builtBy": [
        {
          "username": "abiosoft",
          "href": "https://github.com/abiosoft",
          "avatar": "https://avatars.githubusercontent.com/u/240448"
        },
        {
          "username": "rfay",
          "href": "https://github.com/rfay",
          "avatar": "https://avatars.githubusercontent.com/u/112444"
        },
        {
          "username": "LaszloGombos",
          "href": "https://github.com/LaszloGombos",
          "avatar": "https://avatars.githubusercontent.com/u/1522773"
        },
        {
          "username": "artygus",
          "href": "https://github.com/artygus",
          "avatar": "https://avatars.githubusercontent.com/u/4974968"
        }
      ]
    },
    {
      "author": "crossplane",
      "repo": "crossplane",
      "avatar": "https://github.com/crossplane.png",
      "repo_link": "https://github.com/crossplane/crossplane",
      "desc": "The Cloud Native Control Plane",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 11430,
      "forks": 1139,
      "added_stars": 128,
      "builtBy": [
        {
          "username": "negz",
          "href": "https://github.com/negz",
          "avatar": "https://avatars.githubusercontent.com/u/1049349"
        },
        {
          "username": "hasheddan",
          "href": "https://github.com/hasheddan",
          "avatar": "https://avatars.githubusercontent.com/u/31777345"
        },
        {
          "username": "jbw976",
          "href": "https://github.com/jbw976",
          "avatar": "https://avatars.githubusercontent.com/u/4313439"
        },
        {
          "username": "phisco",
          "href": "https://github.com/phisco",
          "avatar": "https://avatars.githubusercontent.com/u/5697904"
        },
        {
          "username": "turkenh",
          "href": "https://github.com/turkenh",
          "avatar": "https://avatars.githubusercontent.com/u/9900707"
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
      "stars": 3211,
      "forks": 437,
      "added_stars": 516,
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
    },
    {
      "author": "navidrome",
      "repo": "navidrome",
      "avatar": "https://github.com/navidrome.png",
      "repo_link": "https://github.com/navidrome/navidrome",
      "desc": "🎧☁️ Your Personal Streaming Service",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 19411,
      "forks": 1382,
      "added_stars": 759,
      "builtBy": [
        {
          "username": "deluan",
          "href": "https://github.com/deluan",
          "avatar": "https://avatars.githubusercontent.com/u/331353"
        },
        {
          "username": "kgarner7",
          "href": "https://github.com/kgarner7",
          "avatar": "https://avatars.githubusercontent.com/u/17521368"
        },
        {
          "username": "caiocotts",
          "href": "https://github.com/caiocotts",
          "avatar": "https://avatars.githubusercontent.com/u/31974888"
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
      "author": "openai",
      "repo": "skills",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/skills",
      "desc": "Skills Catalog for Codex",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 9267,
      "forks": 517,
      "added_stars": 7418,
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 15778,
      "forks": 1135,
      "added_stars": 9853,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 9010,
      "forks": 899,
      "added_stars": 4612,
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
      "author": "NevaMind-AI",
      "repo": "memU",
      "avatar": "https://github.com/NevaMind-AI.png",
      "repo_link": "https://github.com/NevaMind-AI/memU",
      "desc": "Memory for 24/7 proactive agents like openclaw (moltbot, clawdbot).",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 9707,
      "forks": 741,
      "added_stars": 4833,
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
      "author": "anthropics",
      "repo": "skills",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/skills",
      "desc": "Public repository for Agent Skills",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 73015,
      "forks": 7478,
      "added_stars": 25347,
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
      "stars": 6594,
      "forks": 628,
      "added_stars": 2703,
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
      "author": "google",
      "repo": "langextract",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/langextract",
      "desc": "A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 33458,
      "forks": 2230,
      "added_stars": 10173,
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
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 28549,
      "forks": 2341,
      "added_stars": 2840,
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
      "stars": 31075,
      "forks": 3835,
      "added_stars": 2221,
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
      "stars": 3109,
      "forks": 562,
      "added_stars": 1023,
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
      "author": "Shubhamsaboo",
      "repo": "awesome-llm-apps",
      "avatar": "https://github.com/Shubhamsaboo.png",
      "repo_link": "https://github.com/Shubhamsaboo/awesome-llm-apps",
      "desc": "Collection of awesome LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and opensource models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 96482,
      "forks": 14018,
      "added_stars": 8275,
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
      "author": "OpenBMB",
      "repo": "UltraRAG",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/UltraRAG",
      "desc": "A Low-Code MCP Framework for Building Complex and Innovative RAG Pipelines",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 5279,
      "forks": 376,
      "added_stars": 2779,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 8050,
      "forks": 788,
      "added_stars": 3511,
      "builtBy": [
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
          "username": "ThariqS",
          "href": "https://github.com/ThariqS",
          "avatar": "https://avatars.githubusercontent.com/u/140827"
        },
        {
          "username": "isabella-anthropic",
          "href": "https://github.com/isabella-anthropic",
          "avatar": "https://avatars.githubusercontent.com/u/247469474"
        },
        {
          "username": "dhollman",
          "href": "https://github.com/dhollman",
          "avatar": "https://avatars.githubusercontent.com/u/100382"
        }
      ]
    },
    {
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 36534,
      "forks": 5912,
      "added_stars": 2351,
      "builtBy": [
        {
          "username": "ishaan-jaff",
          "href": "https://github.com/ishaan-jaff",
          "avatar": "https://avatars.githubusercontent.com/u/29436595"
        },
        {
          "username": "krrishdholakia",
          "href": "https://github.com/krrishdholakia",
          "avatar": "https://avatars.githubusercontent.com/u/17561003"
        },
        {
          "username": "yuneng-jiang",
          "href": "https://github.com/yuneng-jiang",
          "avatar": "https://avatars.githubusercontent.com/u/171294688"
        },
        {
          "username": "Sameerlite",
          "href": "https://github.com/Sameerlite",
          "avatar": "https://avatars.githubusercontent.com/u/231518212"
        },
        {
          "username": "uc4w6c",
          "href": "https://github.com/uc4w6c",
          "avatar": "https://avatars.githubusercontent.com/u/36355491"
        }
      ]
    },
    {
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 17271,
      "forks": 1328,
      "added_stars": 2122,
      "builtBy": [
        {
          "username": "Soulter",
          "href": "https://github.com/Soulter",
          "avatar": "https://avatars.githubusercontent.com/u/37870767"
        },
        {
          "username": "Raven95676",
          "href": "https://github.com/Raven95676",
          "avatar": "https://avatars.githubusercontent.com/u/176760093"
        },
        {
          "username": "anka-afk",
          "href": "https://github.com/anka-afk",
          "avatar": "https://avatars.githubusercontent.com/u/110004162"
        },
        {
          "username": "advent259141",
          "href": "https://github.com/advent259141",
          "avatar": "https://avatars.githubusercontent.com/u/197440256"
        },
        {
          "username": "RC-CHN",
          "href": "https://github.com/RC-CHN",
          "avatar": "https://avatars.githubusercontent.com/u/67079377"
        }
      ]
    },
    {
      "author": "Free-TV",
      "repo": "IPTV",
      "avatar": "https://github.com/Free-TV.png",
      "repo_link": "https://github.com/Free-TV/IPTV",
      "desc": "M3U Playlist for free TV channels",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 14079,
      "forks": 2051,
      "added_stars": 2992,
      "builtBy": [
        {
          "username": "KAMI911",
          "href": "https://github.com/KAMI911",
          "avatar": "https://avatars.githubusercontent.com/u/5292264"
        },
        {
          "username": "freetv332",
          "href": "https://github.com/freetv332",
          "avatar": "https://avatars.githubusercontent.com/u/82442641"
        },
        {
          "username": "NezbednikSK",
          "href": "https://github.com/NezbednikSK",
          "avatar": "https://avatars.githubusercontent.com/u/47603275"
        },
        {
          "username": "TVKaista",
          "href": "https://github.com/TVKaista",
          "avatar": "https://avatars.githubusercontent.com/u/103857112"
        },
        {
          "username": "infid0",
          "href": "https://github.com/infid0",
          "avatar": "https://avatars.githubusercontent.com/u/17656192"
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
      "stars": 9221,
      "forks": 769,
      "added_stars": 1381,
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
      "author": "microsoft",
      "repo": "RD-Agent",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/RD-Agent",
      "desc": "Research and development (R&D) is crucial for the enhancement of industrial productivity, especially in the AI era, where the core aspects of R&D are mainly focused on data and models. We are committed to automating these high-value generic R&D processes through R&D-Agent, which lets AI drive data-driven AI. 🔗https://aka.ms/RD-Agent-Tech-Report",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 11298,
      "forks": 1298,
      "added_stars": 964,
      "builtBy": [
        {
          "username": "you-n-g",
          "href": "https://github.com/you-n-g",
          "avatar": "https://avatars.githubusercontent.com/u/465606"
        },
        {
          "username": "peteryang1",
          "href": "https://github.com/peteryang1",
          "avatar": "https://avatars.githubusercontent.com/u/25981102"
        },
        {
          "username": "XianBW",
          "href": "https://github.com/XianBW",
          "avatar": "https://avatars.githubusercontent.com/u/36835909"
        },
        {
          "username": "WinstonLiyt",
          "href": "https://github.com/WinstonLiyt",
          "avatar": "https://avatars.githubusercontent.com/u/104308117"
        },
        {
          "username": "qew21",
          "href": "https://github.com/qew21",
          "avatar": "https://avatars.githubusercontent.com/u/25722332"
        }
      ]
    },
    {
      "author": "ranaroussi",
      "repo": "yfinance",
      "avatar": "https://github.com/ranaroussi.png",
      "repo_link": "https://github.com/ranaroussi/yfinance",
      "desc": "Download market data from Yahoo! Finance's API",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 21686,
      "forks": 3091,
      "added_stars": 800,
      "builtBy": [
        {
          "username": "ValueRaider",
          "href": "https://github.com/ValueRaider",
          "avatar": "https://avatars.githubusercontent.com/u/96923577"
        },
        {
          "username": "ranaroussi",
          "href": "https://github.com/ranaroussi",
          "avatar": "https://avatars.githubusercontent.com/u/1185458"
        },
        {
          "username": "fredrik-corneliusson",
          "href": "https://github.com/fredrik-corneliusson",
          "avatar": "https://avatars.githubusercontent.com/u/2439232"
        },
        {
          "username": "dhruvan2006",
          "href": "https://github.com/dhruvan2006",
          "avatar": "https://avatars.githubusercontent.com/u/17964850"
        },
        {
          "username": "bradmetz",
          "href": "https://github.com/bradmetz",
          "avatar": "https://avatars.githubusercontent.com/u/55670941"
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
      "title": "Coaction v1.0 – Effortless multithreading for high-performance web apps",
      "url": "https://github.com/unadlib/coaction",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-21T14:44:11.000Z"
    },
    {
      "title": "FluxAPI – Lighthouse for API calls. 13 audit rules with network-adjusted scoring",
      "url": "https://github.com/aswinsasi/fluxapi",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-21T13:45:39.000Z"
    },
    {
      "title": "Nice try dear AI. Now let's talk about production.",
      "url": "https://krasimirtsonev.com/blog/article/nice-try-dear-ai-now-lets-talk-production",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-21T13:36:53.000Z"
    },
    {
      "title": "[AI] MCP agent to Telegram bridge bot for action confirmations",
      "url": "https://github.com/aralroca/telegram-bot-mcp",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-19T16:58:48.000Z"
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
      "reactions": 359,
      "comments": 89,
      "reading_time": 6,
      "author": "ben"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-5a3g",
      "tags": "weeklyretro, discuss",
      "reactions": 28,
      "comments": 55,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Teaching a Robot to Play a Toddler Game: VLAs, Gemini 3 Flash, and First Orchard",
      "description": "As we think about the future of AI, we often land on robotics, or \"Embodied AI\", as the next logical...",
      "url": "https://dev.to/googleai/teaching-a-robot-to-play-a-toddler-game-vlas-gemini-3-flash-and-first-orchard-14g4",
      "tags": "gemini, robotics, ai, python",
      "reactions": 6,
      "comments": 1,
      "reading_time": 15,
      "author": "ptruiz"
    },
    {
      "title": "Congrats to the \"New Year, New You\" Portfolio Challenge Winners and Runner-Ups!",
      "description": "The results are in! We are thrilled to announce the winners of the New Year, New You Portfolio...",
      "url": "https://dev.to/devteam/congrats-to-the-new-year-new-you-portfolio-challenge-winners-and-runner-ups-1l9h",
      "tags": "devchallenge, googleaichallenge, gemini, career",
      "reactions": 85,
      "comments": 32,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Suffering from BUGS: How I Almost Deleted My Entire Project",
      "description": "You know that iconic DJ Khaled album, \"Suffering from Success\"? The one where he looks overwhelmed by...",
      "url": "https://dev.to/maame-codes/suffering-from-bugs-how-i-almost-deleted-my-entire-project-1eef",
      "tags": "showdev, devops, python, typescript",
      "reactions": 84,
      "comments": 32,
      "reading_time": 5,
      "author": "maame-codes"
    },
    {
      "title": "Why Azure Front Door Made My Next.js App Take 90 Seconds to Load (and How I Fixed It)",
      "description": "We shipped a Next.js app on Azure Container Apps behind Azure Front Door Premium with Private Link....",
      "url": "https://dev.to/felixschober/why-azure-front-door-made-my-nextjs-app-take-90-seconds-to-load-and-how-i-fixed-it-4kof",
      "tags": "azure, nextjs, webdev, debug",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "felixschober"
    },
    {
      "title": "Getting Started with LLM Gateway in 5 Minutes",
      "description": "This guide walks you through making your first LLM request through LLM Gateway. By the end, you'll...",
      "url": "https://dev.to/smakosh/getting-started-with-llm-gateway-in-5-minutes-67p",
      "tags": "llm, api, tutorial, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "smakosh"
    },
    {
      "title": "Why did you become a Developer?",
      "description": "We all have our origin stories. Maybe you were born to become a programmer or you started off when...",
      "url": "https://dev.to/francistrdev/why-did-you-become-a-developer-57ea",
      "tags": "discuss, community, programming, mentalhealth",
      "reactions": 47,
      "comments": 46,
      "reading_time": 2,
      "author": "francistrdev"
    },
    {
      "title": "Build your own AI code review agent in CI",
      "description": "Build a cheap, bring-your-own-model AI code review agent that runs automatically in GitHub Actions on every pull request. We’ll define a strict review rubric, generate a structured Markdown review, and optionally post it as a PR comment—without paying for another “AI code review” subscription.",
      "url": "https://dev.to/lvndry/build-your-own-ai-code-review-agent-in-ci-4mai",
      "tags": "ai, automation, githubactions, cicd",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "lvndry"
    },
    {
      "title": "StackOverflow - was it worth it?",
      "description": "Was it worth it to build a portfolio on StackOverflow?",
      "url": "https://dev.to/nikola/stackoverflow-was-it-worth-it-21ki",
      "tags": "stackoverflow, career",
      "reactions": 4,
      "comments": 0,
      "reading_time": 9,
      "author": "nikola"
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
      "title": "Proposal: add \"AI generated\" as a flag reason",
      "url": "",
      "score": 17,
      "comments": 2,
      "tags": [
        "meta"
      ],
      "id": "rkjpob"
    },
    {
      "title": "HTTP/3 on FreeBSD: Getting QUIC Working with nginx in a Bastille Jail",
      "url": "https://blog.hofstede.it/http3-on-freebsd-getting-quic-working-with-nginx-in-a-bastille-jail/",
      "score": 1,
      "comments": 0,
      "tags": [
        "freebsd"
      ],
      "id": "kgatai"
    },
    {
      "title": "cl-kawa: A Turducken of Programming Languages",
      "url": "https://atgreen.github.io/repl-yell/posts/cl-kawa/",
      "score": 8,
      "comments": 0,
      "tags": [
        "java",
        "lisp"
      ],
      "id": "pvfqcr"
    },
    {
      "title": "How We Fixed YAML Comment Preservation in Ruby (And Why We Sponsored It)",
      "url": "https://blog.discourse.org/2026/02/how-we-fixed-yaml-comment-preservation-in-ruby-and-why-we-sponsored-it/",
      "score": 2,
      "comments": 1,
      "tags": [
        "ruby"
      ],
      "id": "rzbstd"
    },
    {
      "title": "Fix your tools",
      "url": "https://ochagavia.nl/blog/fix-your-tools/",
      "score": 7,
      "comments": 0,
      "tags": [
        "debugging",
        "programming"
      ],
      "id": "s3en46"
    },
    {
      "title": "A 'frozen' dictionary for Python",
      "url": "https://lwn.net/Articles/1047238/",
      "score": 1,
      "comments": 0,
      "tags": [
        "python"
      ],
      "id": "pcqtvm"
    },
    {
      "title": "How and Why Local LLMs Perform On Framework 13 AMD Strix Point",
      "url": "https://msf.github.io/blogpost/local-llm-performance-framework13.html",
      "score": 3,
      "comments": 1,
      "tags": [
        "hardware",
        "testing",
        "vibecoding"
      ],
      "id": "awr4cx"
    },
    {
      "title": "The Future of Math Research in the Age of AI",
      "url": "https://siliconreckoner.substack.com/p/the-future-of-math-research-in-the",
      "score": 0,
      "comments": 0,
      "tags": [
        "math",
        "vibecoding"
      ],
      "id": "5ax0gx"
    },
    {
      "title": "Hemmi/Post 1460 Versalog (Sliderule emulator)",
      "url": "https://thingsabove.github.io/Sliderule-Simulator-with-Solver/react/hemmi_versalog.html",
      "score": 2,
      "comments": 0,
      "tags": [
        "math"
      ],
      "id": "uwdci4"
    },
    {
      "title": "Loon — A LISP that flies",
      "url": "https://loonlang.com",
      "score": 2,
      "comments": 5,
      "tags": [
        "lisp",
        "vibecoding",
        "wasm"
      ],
      "id": "0blzao"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "vinhnx",
      "descendants": 211,
      "id": 47106686,
      "kids": [
        47108872,
        47107091,
        47108846,
        47107557,
        47107999,
        47108819,
        47108673,
        47108690,
        47108681,
        47108684,
        47108881,
        47107077,
        47108307,
        47108146,
        47108652,
        47108880,
        47107286,
        47108661,
        47108464,
        47108823,
        47108414,
        47107125,
        47107940,
        47108685,
        47107019,
        47107048,
        47108070,
        47107966,
        47108658,
        47108346,
        47107464,
        47108683,
        47107320,
        47108569,
        47107946,
        47107931,
        47108528,
        47107427,
        47108088,
        47108540,
        47108348,
        47107951,
        47107074,
        47108073,
        47107717,
        47107451,
        47108371,
        47107263,
        47108768,
        47107646,
        47107221,
        47107690,
        47108107,
        47107822,
        47107873,
        47107700,
        47107968,
        47107434,
        47108488,
        47107537,
        47107422,
        47107049,
        47107736,
        47107160,
        47108603,
        47107067,
        47107502,
        47106995,
        47107194,
        47107082,
        47107891
      ],
      "score": 365,
      "time": 1771720145,
      "title": "How I use Claude Code: Separation of planning and execution",
      "type": "story",
      "url": "https://boristane.com/blog/how-i-use-claude-code/"
    },
    {
      "by": "curmudgeon22",
      "descendants": 10,
      "id": 47107781,
      "kids": [
        47107964,
        47108301,
        47108278,
        47107936,
        47107937
      ],
      "score": 52,
      "time": 1771730316,
      "title": "Japanese Woodblock Print Search",
      "type": "story",
      "url": "https://ukiyo-e.org/"
    },
    {
      "by": "Cider9986",
      "descendants": 37,
      "id": 47106985,
      "kids": [
        47107425,
        47107592,
        47108722,
        47108741,
        47107574,
        47108281,
        47108461,
        47107738,
        47108563,
        47108162
      ],
      "score": 77,
      "time": 1771722497,
      "title": "A Botnet Accidentally Destroyed I2P",
      "type": "story",
      "url": "https://www.sambent.com/a-botnet-accidentally-destroyed-i2p-the-full-story/"
    },
    {
      "by": "matheusalmeida",
      "descendants": 9,
      "id": 47046070,
      "kids": [
        47108228,
        47108847,
        47108080,
        47108425
      ],
      "score": 63,
      "time": 1771326069,
      "title": "Two Bits Are Better Than One: making bloom filters 2x more accurate",
      "type": "story",
      "url": "https://floedb.ai/blog/two-bits-are-better-than-one-making-bloom-filters-2x-more-accurate"
    },
    {
      "by": "xaskasdf",
      "descendants": 50,
      "id": 47104667,
      "kids": [
        47108350,
        47108929,
        47108151,
        47108898,
        47108485,
        47105824,
        47107549,
        47108644,
        47107188,
        47106326,
        47106523,
        47106010,
        47106827,
        47106222
      ],
      "score": 197,
      "text": "Hi everyone, I&#x27;m kinda involved in some retrogaming and with some experiments I ran into the following question: &quot;It would be possible to run transformer models bypassing the cpu&#x2F;ram, connecting the gpu to the nvme?&quot;<p>This is the result of that question itself and some weekend vibecoding (it has the linked library repository in the readme as well), it seems to work, even on consumer gpus, it should work better on professional ones tho",
      "time": 1771707450,
      "title": "Show HN: Llama 3.1 70B on a single RTX 3090 via NVMe-to-GPU bypassing the CPU",
      "type": "story",
      "url": "https://github.com/xaskasdf/ntransformer"
    },
    {
      "by": "beAroundHere",
      "descendants": 10,
      "id": 47103661,
      "kids": [
        47108931,
        47108704,
        47108757,
        47108863,
        47108701
      ],
      "score": 48,
      "time": 1771700840,
      "title": "How Taalas \"prints\" LLM onto a chip?",
      "type": "story",
      "url": "https://www.anuragk.com/blog/posts/Taalas.html"
    },
    {
      "by": "spzb",
      "descendants": 260,
      "id": 47061614,
      "kids": [
        47108927,
        47107485,
        47102226,
        47102323,
        47102971,
        47104258,
        47102687,
        47108784,
        47103096,
        47102152,
        47104116,
        47102320,
        47104732,
        47102606,
        47104402,
        47108034,
        47107556,
        47106419,
        47103192,
        47103213,
        47062663,
        47103664,
        47104691,
        47104426,
        47108334,
        47107346,
        47106171,
        47103606,
        47108229,
        47105494,
        47103396,
        47102315,
        47103215,
        47103564,
        47105568,
        47102778,
        47104485,
        47103797,
        47102402,
        47104753,
        47104415,
        47105384,
        47107997,
        47103867,
        47107383,
        47102478,
        47102053,
        47103073,
        47102290,
        47103776,
        47105193,
        47102336,
        47104054,
        47104997,
        47103669,
        47102906,
        47102678,
        47102793,
        47107047,
        47102785,
        47102243,
        47103490,
        47104945,
        47106780,
        47106736,
        47106581,
        47106451,
        47105395,
        47104317,
        47102195,
        47103101,
        47102148,
        47102457,
        47103727,
        47102232,
        47103846
      ],
      "score": 480,
      "time": 1771426618,
      "title": "How far back in time can you understand English?",
      "type": "story",
      "url": "https://www.deadlanguagesociety.com/p/how-far-back-in-time-understand-english"
    },
    {
      "by": "suddenlybananas",
      "descendants": 30,
      "id": 47105198,
      "kids": [
        47105972,
        47105569,
        47106999,
        47106973,
        47107669,
        47108362,
        47107633,
        47107037,
        47106192,
        47106362,
        47105828
      ],
      "score": 114,
      "time": 1771710718,
      "title": "Evidence of the bouba-kiki effect in naïve baby chicks",
      "type": "story",
      "url": "https://www.science.org/doi/10.1126/science.adq7188"
    },
    {
      "by": "msuniverse2026",
      "descendants": 5,
      "id": 47096167,
      "kids": [
        47108254,
        47108848,
        47108504,
        47108438
      ],
      "score": 53,
      "time": 1771634668,
      "title": "Gamedate – A site to revive dead multiplayer games",
      "type": "story",
      "url": "https://gamedate.org/"
    },
    {
      "by": "todsacerdoti",
      "descendants": 40,
      "id": 47103931,
      "kids": [
        47105006,
        47104279,
        47104553,
        47104335,
        47104468,
        47105031,
        47106349,
        47106900,
        47104403,
        47105573,
        47105501,
        47104590
      ],
      "score": 168,
      "time": 1771702806,
      "title": "Parse, Don't Validate and Type-Driven Design in Rust",
      "type": "story",
      "url": "https://www.harudagondi.space/blog/parse-dont-validate-and-type-driven-design-in-rust/"
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
      "title": "Congrats to the \"New Year, New You\" Portfolio Challenge Winners and Runner-Ups!",
      "description": "The results are in! We are thrilled to announce the winners of the New Year, New You Portfolio...",
      "url": "https://dev.to/devteam/congrats-to-the-new-year-new-you-portfolio-challenge-winners-and-runner-ups-1l9h",
      "tags": "devchallenge, googleaichallenge, gemini, career",
      "reactions": 85,
      "comments": 32,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Promotions Don't Go to the Best Coders (Here's Why)",
      "description": "After 25 years in the IT industry, I've watched brilliant engineers get passed over for promotion time and time again. The reason is almost never technical. Here's what's actually going on — and how to fix it.",
      "url": "https://dev.to/lessonsfromproduction/promotions-dont-go-to-the-best-coders-heres-why-3n1h",
      "tags": "career, webdev, beginners, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "lessonsfromproduction"
    },
    {
      "title": "StackOverflow - was it worth it?",
      "description": "Was it worth it to build a portfolio on StackOverflow?",
      "url": "https://dev.to/nikola/stackoverflow-was-it-worth-it-21ki",
      "tags": "stackoverflow, career",
      "reactions": 4,
      "comments": 0,
      "reading_time": 9,
      "author": "nikola"
    },
    {
      "title": "How I Reduced Load Time by 60 Percent",
      "description": "Performance optimization is one of the most practical skills a developer can learn during an...",
      "url": "https://dev.to/raisha_sultana_128bfbb50a/how-i-reduced-load-time-by-60-percent-2582",
      "tags": "beginners, career, performance, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "raisha_sultana_128bfbb50a"
    },
    {
      "title": "Building an Extraction Node: Analyzing 400+ HN Job Listings (Python vs Node.js)",
      "description": "The Inefficiency of the Job Market   The modern technical job hunt operates on an...",
      "url": "https://dev.to/asterios07/building-an-extraction-node-analyzing-400-hn-job-listings-python-vs-nodejs-1ga7",
      "tags": "ai, python, discuss, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asterios07"
    },
    {
      "title": "5 Most Asked SQL Interview Questions",
      "description": "What is the difference between WHERE and HAVING in SQL?   Answer:  The main difference is WHERE...",
      "url": "https://dev.to/quipoin_a9cb84280f6225b1e/5-most-asked-sql-interview-questions-3p8m",
      "tags": "sql, tutorial, interview, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "quipoin_a9cb84280f6225b1e"
    },
    {
      "title": "Spotify's Best Developers Haven't Written Code in Two Months",
      "description": "Gustav Söderström, Spotify's co-CEO, told investors on February 10 that the company's most...",
      "url": "https://dev.to/mothasa/spotifys-best-developers-havent-written-code-in-two-months-20dg",
      "tags": "ai, programming, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "mothasa"
    },
    {
      "title": "How to Start Your Journey in Cybersecurity: From First Steps to a Conscious Career",
      "description": "A practical guide to entering cybersecurity — from choosing a specialization to landing your first...",
      "url": "https://dev.to/opensophy/how-to-start-your-journey-in-cybersecurity-from-first-steps-to-a-conscious-career-4ock",
      "tags": "career, tutorial, discuss, security",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "opensophy"
    },
    {
      "title": "Build for Worth, Not Valuation (Part 1 of a Practical Builder Series)",
      "description": "Startup culture has a default scoreboard:   How much did you raise? What’s your valuation? How fast...",
      "url": "https://dev.to/stinklewinks/build-for-worth-not-valuation-part-1-of-a-practical-builder-series-20ho",
      "tags": "buildinpublic, career, product, startup",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "stinklewinks"
    },
    {
      "title": "Stop Listing Technologies — Start Showing Impact: The Resume Shift That Actually Gets Developer Interviews",
      "description": "If your resume reads like a tech stack Wikipedia page, you're doing it wrong. Here's the simple shift from listing responsibilities to showing measurable impact — and why it matters more than ever in 2026.",
      "url": "https://dev.to/sira_ai/stop-listing-technologies-start-showing-impact-the-resume-shift-that-actually-gets-developer-12mp",
      "tags": "career, resume, ai, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "sira_ai"
    }
  ]
}
```

