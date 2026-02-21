# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-02-21 07:01:19 UTC

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
      "stars": 8011,
      "forks": 686,
      "added_stars": 2530,
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
      "stars": 3890,
      "forks": 240,
      "added_stars": 2171,
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
      "stars": 26205,
      "forks": 1539,
      "added_stars": 1556,
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
      "stars": 14290,
      "forks": 1463,
      "added_stars": 2656,
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
      "author": "danielmiessler",
      "repo": "Personal_AI_Infrastructure",
      "avatar": "https://github.com/danielmiessler.png",
      "repo_link": "https://github.com/danielmiessler/Personal_AI_Infrastructure",
      "desc": "Agentic AI Infrastructure for magnifying HUMAN capabilities.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 8975,
      "forks": 1230,
      "added_stars": 1034,
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
      "author": "tambo-ai",
      "repo": "tambo",
      "avatar": "https://github.com/tambo-ai.png",
      "repo_link": "https://github.com/tambo-ai/tambo",
      "desc": "Generative UI SDK for React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 10830,
      "forks": 525,
      "added_stars": 1506,
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
      "author": "letta-ai",
      "repo": "letta-code",
      "avatar": "https://github.com/letta-ai.png",
      "repo_link": "https://github.com/letta-ai/letta-code",
      "desc": "The memory-first coding agent",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 1612,
      "forks": 162,
      "added_stars": 562,
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
      "author": "OpenCTI-Platform",
      "repo": "opencti",
      "avatar": "https://github.com/OpenCTI-Platform.png",
      "repo_link": "https://github.com/OpenCTI-Platform/opencti",
      "desc": "Open Cyber Threat Intelligence Platform",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 8834,
      "forks": 1256,
      "added_stars": 623,
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
      "author": "ComposioHQ",
      "repo": "composio",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/composio",
      "desc": "Composio powers 1000+ toolkits, tool search, context management, authentication, and a sandboxed workbench to help you build AI agents that turn intent into action.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 27053,
      "forks": 4443,
      "added_stars": 452,
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
      "author": "chartdb",
      "repo": "chartdb",
      "avatar": "https://github.com/chartdb.png",
      "repo_link": "https://github.com/chartdb/chartdb",
      "desc": "Database diagrams editor that allows you to visualize and design your DB with a single query.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 21300,
      "forks": 1269,
      "added_stars": 137,
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
      "stars": 9534,
      "forks": 625,
      "added_stars": 983,
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
      "author": "cinnyapp",
      "repo": "cinny",
      "avatar": "https://github.com/cinnyapp.png",
      "repo_link": "https://github.com/cinnyapp/cinny",
      "desc": "Yet another matrix client",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 3203,
      "forks": 433,
      "added_stars": 241,
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
      "author": "getmaxun",
      "repo": "maxun",
      "avatar": "https://github.com/getmaxun.png",
      "repo_link": "https://github.com/getmaxun/maxun",
      "desc": "✨ The open-source no-code platform for web scraping, crawling, search and AI data extraction • Turn websites into structured APIs in minutes ✨",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 15077,
      "forks": 1220,
      "added_stars": 233,
      "builtBy": [
        {
          "username": "amhsirak",
          "href": "https://github.com/amhsirak",
          "avatar": "https://avatars.githubusercontent.com/u/76456498"
        },
        {
          "username": "RohitR311",
          "href": "https://github.com/RohitR311",
          "avatar": "https://avatars.githubusercontent.com/u/70875861"
        },
        {
          "username": "AmitChauhan63390",
          "href": "https://github.com/AmitChauhan63390",
          "avatar": "https://avatars.githubusercontent.com/u/36507878"
        },
        {
          "username": "naveenpan09",
          "href": "https://github.com/naveenpan09",
          "avatar": "https://avatars.githubusercontent.com/u/182222691"
        },
        {
          "username": "ninja-programmer",
          "href": "https://github.com/ninja-programmer",
          "avatar": "https://avatars.githubusercontent.com/u/84878205"
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
      "stars": 4406,
      "forks": 343,
      "added_stars": 3800,
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
      "stars": 163038,
      "forks": 14633,
      "added_stars": 3507,
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
      "stars": 35070,
      "forks": 4600,
      "added_stars": 1279,
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
      "stars": 9908,
      "forks": 777,
      "added_stars": 5056,
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
      "stars": 22825,
      "forks": 1117,
      "added_stars": 1676,
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
      "stars": 10758,
      "forks": 9980,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 42668,
      "forks": 7968,
      "added_stars": 654,
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 1884,
      "forks": 401,
      "added_stars": 1026,
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
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 32132,
      "forks": 2958,
      "added_stars": 1083,
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
      "author": "charmbracelet",
      "repo": "bubbletea",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/bubbletea",
      "desc": "A powerful little TUI framework 🏗",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 39703,
      "forks": 1094,
      "added_stars": 1317,
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
      "author": "grafana",
      "repo": "mcp-grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/mcp-grafana",
      "desc": "MCP server for Grafana",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 2346,
      "forks": 268,
      "added_stars": 205,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The to-do app to organize your life.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 3372,
      "forks": 312,
      "added_stars": 296,
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
      "author": "putyy",
      "repo": "res-downloader",
      "avatar": "https://github.com/putyy.png",
      "repo_link": "https://github.com/putyy/res-downloader",
      "desc": "视频号、小程序、抖音、快手、小红书、直播流、m3u8、酷狗、QQ音乐等常见网络资源下载!",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 15275,
      "forks": 1898,
      "added_stars": 1878,
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
      "author": "steveyegge",
      "repo": "beads",
      "avatar": "https://github.com/steveyegge.png",
      "repo_link": "https://github.com/steveyegge/beads",
      "desc": "Beads - A memory upgrade for your coding agent",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 16849,
      "forks": 1035,
      "added_stars": 5411,
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
      "author": "charmbracelet",
      "repo": "glow",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/glow",
      "desc": "Render markdown on the CLI, with pizzazz! 💅🏻",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 22930,
      "forks": 578,
      "added_stars": 638,
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
      "author": "tailscale",
      "repo": "tailscale",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailscale",
      "desc": "The easiest, most secure way to use WireGuard and 2FA.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 28584,
      "forks": 2294,
      "added_stars": 1278,
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
      "stars": 27053,
      "forks": 537,
      "added_stars": 683,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 3202,
      "forks": 436,
      "added_stars": 511,
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
      "author": "evanw",
      "repo": "esbuild",
      "avatar": "https://github.com/evanw.png",
      "repo_link": "https://github.com/evanw/esbuild",
      "desc": "An extremely fast bundler for the web",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 39792,
      "forks": 1287,
      "added_stars": 207,
      "builtBy": [
        {
          "username": "evanw",
          "href": "https://github.com/evanw",
          "avatar": "https://avatars.githubusercontent.com/u/406394"
        },
        {
          "username": "rtsao",
          "href": "https://github.com/rtsao",
          "avatar": "https://avatars.githubusercontent.com/u/780408"
        },
        {
          "username": "magic-akari",
          "href": "https://github.com/magic-akari",
          "avatar": "https://avatars.githubusercontent.com/u/7829098"
        },
        {
          "username": "jridgewell",
          "href": "https://github.com/jridgewell",
          "avatar": "https://avatars.githubusercontent.com/u/112982"
        },
        {
          "username": "viankakrisna",
          "href": "https://github.com/viankakrisna",
          "avatar": "https://avatars.githubusercontent.com/u/9636410"
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
      "stars": 29523,
      "forks": 7493,
      "added_stars": 245,
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
      "author": "korotovsky",
      "repo": "slack-mcp-server",
      "avatar": "https://github.com/korotovsky.png",
      "repo_link": "https://github.com/korotovsky/slack-mcp-server",
      "desc": "The most powerful MCP Slack Server with no permission requirements, Apps support, GovSlack, DMs, Group DMs and smart history fetch logic.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 1383,
      "forks": 240,
      "added_stars": 228,
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
      "repo": "lipgloss",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/lipgloss",
      "desc": "Style definitions for nice terminal layouts 👄",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 10601,
      "forks": 311,
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
      "author": "argoproj",
      "repo": "argo-cd",
      "avatar": "https://github.com/argoproj.png",
      "repo_link": "https://github.com/argoproj/argo-cd",
      "desc": "Declarative Continuous Deployment for Kubernetes",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 22096,
      "forks": 6841,
      "added_stars": 344,
      "builtBy": [
        {
          "username": "alexmt",
          "href": "https://github.com/alexmt",
          "avatar": "https://avatars.githubusercontent.com/u/426437"
        },
        {
          "username": "crenshaw-dev",
          "href": "https://github.com/crenshaw-dev",
          "avatar": "https://avatars.githubusercontent.com/u/350466"
        },
        {
          "username": "jannfis",
          "href": "https://github.com/jannfis",
          "avatar": "https://avatars.githubusercontent.com/u/3942683"
        },
        {
          "username": "jessesuen",
          "href": "https://github.com/jessesuen",
          "avatar": "https://avatars.githubusercontent.com/u/12677113"
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
      "stars": 9169,
      "forks": 511,
      "added_stars": 7345,
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
      "stars": 15700,
      "forks": 1133,
      "added_stars": 9905,
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
      "author": "anthropics",
      "repo": "skills",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/skills",
      "desc": "Public repository for Agent Skills",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 72542,
      "forks": 7426,
      "added_stars": 26079,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 8788,
      "forks": 877,
      "added_stars": 4475,
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
      "stars": 9596,
      "forks": 729,
      "added_stars": 4736,
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
      "author": "MoonshotAI",
      "repo": "kimi-cli",
      "avatar": "https://github.com/MoonshotAI.png",
      "repo_link": "https://github.com/MoonshotAI/kimi-cli",
      "desc": "Kimi Code CLI is your next CLI agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 6550,
      "forks": 625,
      "added_stars": 2660,
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
      "stars": 5226,
      "forks": 369,
      "added_stars": 2825,
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
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 28540,
      "forks": 2339,
      "added_stars": 2834,
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
      "author": "google",
      "repo": "langextract",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/langextract",
      "desc": "A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 33395,
      "forks": 2227,
      "added_stars": 10466,
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
      "author": "OpenBMB",
      "repo": "ChatDev",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/ChatDev",
      "desc": "ChatDev 2.0: Dev All through LLM-powered Multi-Agent Collaboration",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 31060,
      "forks": 3831,
      "added_stars": 2232,
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
      "stars": 3100,
      "forks": 560,
      "added_stars": 1020,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 7943,
      "forks": 778,
      "added_stars": 3408,
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
      "author": "Free-TV",
      "repo": "IPTV",
      "avatar": "https://github.com/Free-TV.png",
      "repo_link": "https://github.com/Free-TV/IPTV",
      "desc": "M3U Playlist for free TV channels",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 14062,
      "forks": 2046,
      "added_stars": 3040,
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
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 36458,
      "forks": 5903,
      "added_stars": 2341,
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
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need. A nano Claude Code–like agent, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 17307,
      "forks": 3665,
      "added_stars": 2610,
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
      "stars": 4343,
      "forks": 931,
      "added_stars": 325,
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
    },
    {
      "author": "ranaroussi",
      "repo": "yfinance",
      "avatar": "https://github.com/ranaroussi.png",
      "repo_link": "https://github.com/ranaroussi/yfinance",
      "desc": "Download market data from Yahoo! Finance's API",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 21659,
      "forks": 3091,
      "added_stars": 802,
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
      "reactions": 342,
      "comments": 85,
      "reading_time": 6,
      "author": "ben"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-5a3g",
      "tags": "weeklyretro, discuss",
      "reactions": 21,
      "comments": 30,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Congrats to the \"New Year, New You\" Portfolio Challenge Winners and Runner-Ups!",
      "description": "The results are in! We are thrilled to announce the winners of the New Year, New You Portfolio...",
      "url": "https://dev.to/devteam/congrats-to-the-new-year-new-you-portfolio-challenge-winners-and-runner-ups-1l9h",
      "tags": "devchallenge, googleaichallenge, gemini, career",
      "reactions": 74,
      "comments": 30,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Why did you become a Developer?",
      "description": "We all have our origin stories. Maybe you were born to become a programmer or you started off when...",
      "url": "https://dev.to/francistrdev/why-did-you-become-a-developer-57ea",
      "tags": "discuss, community, programming, mentalhealth",
      "reactions": 46,
      "comments": 42,
      "reading_time": 2,
      "author": "francistrdev"
    },
    {
      "title": "What does MLH stand for?",
      "description": "Come up with incorrect expansions of the MLH initialism",
      "url": "https://dev.to/mellen/what-does-mlh-stand-for-2cbg",
      "tags": "jokes, watercooler, discuss, mlh",
      "reactions": 13,
      "comments": 14,
      "reading_time": 1,
      "author": "mellen"
    },
    {
      "title": "What Do You Want to Know About Antigravity?",
      "description": "Last week Jack Wotherspoon and @greggyb dove into skills, hooks, and Plan Mode on Google Cloud Live....",
      "url": "https://dev.to/devteam/what-do-you-want-to-know-about-antigravity-1o7a",
      "tags": "antigravity, discuss, gemini, ai",
      "reactions": 10,
      "comments": 1,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "The Meter Was Always Running",
      "description": "On the All-In podcast (episode #261), Jason Calacanis revealed his AI agents cost $300 a day. Each....",
      "url": "https://dev.to/dannwaneri/the-meter-was-always-running-44c4",
      "tags": "ai, webdev, career, discuss",
      "reactions": 16,
      "comments": 6,
      "reading_time": 5,
      "author": "dannwaneri"
    },
    {
      "title": "Suffering from BUGS: How I Almost Deleted My Entire Project",
      "description": "You know that iconic DJ Khaled album, \"Suffering from Success\"? The one where he looks overwhelmed by...",
      "url": "https://dev.to/maame-codes/suffering-from-bugs-how-i-almost-deleted-my-entire-project-1eef",
      "tags": "showdev, devops, python, typescript",
      "reactions": 83,
      "comments": 31,
      "reading_time": 5,
      "author": "maame-codes"
    },
    {
      "title": "Optimizing Shared GitLab Pipelines: Flexibility and Maintainability",
      "description": "Optimizing shared GitLab pipelines enhances flexibility and maintainability. Users can easily customize pipeline behavior by implementing variables as configuration points without compromising the original intent. While temporary workarounds exist, contributing to open-source projects to improve shared pipeline structures is highly recommended, especially during events like Hacktoberfest.",
      "url": "https://dev.to/rlespinasse/optimizing-shared-gitlab-pipelines-flexibility-and-maintainability-7p8",
      "tags": "gitlab, cicd",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "rlespinasse"
    },
    {
      "title": "Exploring Olympic Downhill Results with PHP Statistics",
      "description": "When Franjo von Allmen crossed the finish line in 111.61 seconds at the 2026 Olympic Downhill, he...",
      "url": "https://dev.to/robertobutti/exploring-olympic-downhill-results-with-php-statistics-3eo1",
      "tags": "php, statistics, programming, tutorial",
      "reactions": 1,
      "comments": 0,
      "reading_time": 7,
      "author": "robertobutti"
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
      "title": "ajail: a basic jail for programs you don't completely trust",
      "url": "https://github.com/jtolio/ajail",
      "score": 1,
      "comments": 0,
      "tags": [
        "linux",
        "show"
      ],
      "id": "rcewff"
    },
    {
      "title": "Process Isolation on NetBSD with chroot",
      "url": "https://overeducated-redneck.net/blurgh/netbsd-chroot-isolation.html",
      "score": 3,
      "comments": 0,
      "tags": [
        "netbsd",
        "security"
      ],
      "id": "bfzbim"
    },
    {
      "title": "Linux 7.0 is coming, and it could be one of the biggest updates in years",
      "url": "https://www.xda-developers.com/linux-7-coming-could-be-biggest-update-years/",
      "score": 1,
      "comments": 0,
      "tags": [
        "linux"
      ],
      "id": "tckuhn"
    },
    {
      "title": "The Rise and Fall of Scala: A Love Letter to the Language That Broke My Heart",
      "url": "https://medium.com/@naveensky/the-language-that-made-me-feel-like-a-genius-until-it-didnt-my-breakup-with-scala-075a2ccfb24e",
      "score": 1,
      "comments": 1,
      "tags": [
        "historical",
        "programming",
        "scala"
      ],
      "id": "ax5slr"
    },
    {
      "title": "joinirc.at: Link to your IRC server on any client to onboard new users",
      "url": "https://joinirc.at",
      "score": 6,
      "comments": 3,
      "tags": [
        "show",
        "web"
      ],
      "id": "slfm4t"
    },
    {
      "title": "How to review an AUR package",
      "url": "https://bertptrs.nl/2026/01/30/how-to-review-an-aur-package.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "linux",
        "security"
      ],
      "id": "eemgu1"
    },
    {
      "title": "Whats the Max Valid Length (in bytes) of an Emoji? (2023)",
      "url": "https://machs.space/posts/whats-the-max-valid-length-of-an-emoji/",
      "score": 1,
      "comments": 0,
      "tags": [
        "programming",
        "web"
      ],
      "id": "wohtrd"
    },
    {
      "title": "Web Components: The Framework-Free Renaissance",
      "url": "https://www.caimito.net/en/blog/2026/02/17/web-components-the-framework-free-renaissance.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "web"
      ],
      "id": "gknpn2"
    },
    {
      "title": "Naked Objects (2004)",
      "url": "http://downloads.nakedobjects.net/resources/Pawson%20thesis.pdf",
      "score": 2,
      "comments": 0,
      "tags": [
        "compsci",
        "pdf"
      ],
      "id": "qii1i7"
    },
    {
      "title": "homelab: A K8s homelab on public VPS",
      "url": "https://github.com/tograu/homelab",
      "score": 3,
      "comments": 0,
      "tags": [
        "devops"
      ],
      "id": "wqnqlc"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "LorenDB",
      "descendants": 502,
      "id": 47091419,
      "kids": [
        47091612,
        47092274,
        47092480,
        47092304,
        47091638,
        47091614,
        47097259,
        47092407,
        47095110,
        47091576,
        47095003,
        47096638,
        47091893,
        47096322,
        47097237,
        47096748,
        47095689,
        47096497,
        47096703,
        47097403,
        47094421,
        47096827,
        47093882,
        47093535,
        47094292,
        47096910,
        47094415,
        47095063,
        47094414,
        47093885,
        47096332,
        47094517,
        47092627,
        47094097,
        47092621,
        47094168,
        47091896,
        47091581,
        47094648,
        47094024,
        47093097,
        47094549,
        47092345,
        47095763,
        47093728,
        47091538,
        47092111,
        47093720,
        47093707,
        47095729,
        47095727,
        47097594,
        47092662,
        47091943
      ],
      "score": 1321,
      "time": 1771610331,
      "title": "Keep Android Open",
      "type": "story",
      "url": "https://f-droid.org/2026/02/20/twif.html"
    },
    {
      "by": "zenincognito",
      "descendants": 33,
      "id": 47097502,
      "kids": [
        47098107,
        47098204,
        47098201,
        47098174,
        47098066,
        47097972,
        47098076,
        47098149,
        47098017,
        47097963,
        47098044,
        47098115,
        47098098,
        47097974,
        47098090,
        47098046,
        47098095,
        47097985,
        47098091,
        47098011
      ],
      "score": 74,
      "time": 1771648180,
      "title": "Meta Deployed AI and It Is Killing Our Agency",
      "type": "story",
      "url": "https://mojodojo.io/blog/meta-is-systematically-killing-our-agency/"
    },
    {
      "by": "todsacerdoti",
      "descendants": 100,
      "id": 47094192,
      "kids": [
        47094795,
        47094651,
        47098178,
        47095402,
        47095058,
        47095265,
        47096282,
        47094519,
        47094661,
        47095621,
        47094742,
        47094817,
        47095427,
        47095044,
        47094897,
        47096055,
        47094599,
        47096045,
        47096221,
        47096648,
        47094526,
        47094562,
        47094758,
        47097517,
        47095239,
        47096281,
        47096047
      ],
      "score": 384,
      "time": 1771622741,
      "title": "Turn Dependabot Off",
      "type": "story",
      "url": "https://words.filippo.io/dependabot/"
    },
    {
      "by": "toomuchtodo",
      "descendants": 204,
      "id": 47092578,
      "kids": [
        47094181,
        47097670,
        47094876,
        47093656,
        47093066,
        47093570,
        47095267,
        47096036,
        47095307,
        47096008,
        47093738,
        47094076,
        47095859,
        47094259,
        47093026,
        47097475,
        47093334,
        47094830,
        47093275,
        47098180,
        47093416,
        47093294,
        47094922,
        47094467,
        47095747,
        47094908,
        47096257,
        47094931,
        47094336,
        47096954,
        47096390,
        47093955,
        47093067,
        47093758,
        47096375,
        47093833,
        47095971,
        47093453,
        47095589,
        47093037,
        47096051,
        47093861,
        47093914,
        47094759,
        47093842,
        47093074,
        47095847,
        47096315,
        47096065,
        47093558,
        47097488
      ],
      "score": 484,
      "time": 1771615198,
      "title": "I found a Vulnerability. They found a Lawyer",
      "type": "story",
      "url": "https://dixken.de/blog/i-found-a-vulnerability-they-found-a-lawyer"
    },
    {
      "by": "npilk",
      "descendants": 539,
      "id": 47091748,
      "kids": [
        47093428,
        47093470,
        47091961,
        47091862,
        47092400,
        47091985,
        47098120,
        47096489,
        47092327,
        47093123,
        47093390,
        47094584,
        47098124,
        47097620,
        47092148,
        47097894,
        47095374,
        47091922,
        47092178,
        47097654,
        47097084,
        47096297,
        47092085,
        47097944,
        47095940,
        47097875,
        47097632,
        47097559,
        47097917,
        47097886,
        47091895,
        47091869,
        47093240,
        47092109,
        47097970,
        47096095,
        47093880,
        47095431,
        47094971,
        47093424,
        47092663,
        47092288,
        47097391,
        47093750,
        47096159,
        47096752,
        47093202,
        47093229,
        47091965,
        47095741,
        47091957,
        47093322,
        47095579,
        47092978,
        47095716,
        47094468,
        47092167,
        47092191,
        47093902,
        47095865,
        47095629,
        47097451,
        47092285,
        47092611,
        47094219,
        47095094,
        47097040,
        47097968,
        47095989,
        47093371,
        47092112,
        47095683,
        47092287,
        47095768,
        47094118,
        47091889,
        47095023,
        47091760,
        47092151,
        47093234,
        47092164,
        47097510,
        47091984,
        47097302,
        47091873,
        47094992,
        47094109,
        47091955,
        47092012,
        47092608,
        47092610,
        47094401,
        47094307,
        47094041,
        47093311,
        47092563,
        47096866,
        47094494,
        47092923,
        47092250,
        47093206,
        47096461,
        47094253,
        47097273,
        47096029,
        47092861,
        47096374,
        47091989,
        47094035,
        47094506,
        47093247,
        47095356,
        47094532,
        47094202,
        47094065,
        47094656,
        47095066,
        47094947,
        47095743,
        47092329,
        47094653,
        47094939,
        47096214,
        47091880,
        47093516,
        47093151,
        47093062,
        47095724,
        47093221,
        47095164,
        47095988,
        47094933,
        47094573,
        47091977,
        47094700,
        47092697,
        47094487,
        47093983,
        47093948,
        47092107,
        47094749,
        47093464,
        47093309,
        47091969,
        47093041,
        47092717,
        47092715,
        47092912,
        47096453,
        47092588,
        47091913,
        47092205,
        47092595,
        47092713,
        47091942,
        47096480,
        47092899,
        47092573,
        47092297,
        47091921,
        47091870,
        47093162,
        47093081,
        47092973,
        47092188,
        47092116,
        47092712,
        47093779,
        47095634,
        47096130,
        47096884,
        47092096,
        47092844
      ],
      "score": 953,
      "time": 1771611907,
      "title": "Facebook is cooked",
      "type": "story",
      "url": "https://pilk.website/3/facebook-is-absolutely-cooked"
    },
    {
      "by": "todsacerdoti",
      "descendants": 0,
      "id": 47047936,
      "score": 10,
      "time": 1771338979,
      "title": "The Evolution of x86 SIMD: From SSE to AVX-512",
      "type": "story",
      "url": "https://bgslabs.org/blog/evolution-of-x86-simd/"
    },
    {
      "by": "lairv",
      "descendants": 177,
      "id": 47088037,
      "kids": [
        47088506,
        47090880,
        47097816,
        47088312,
        47090563,
        47088236,
        47089605,
        47096411,
        47088499,
        47088771,
        47092403,
        47088541,
        47095842,
        47088233,
        47093514,
        47088764,
        47093312,
        47094984,
        47093383,
        47089525,
        47090696,
        47089042,
        47088735,
        47089643,
        47088416,
        47088261,
        47093682,
        47094296,
        47088836,
        47094667,
        47090012,
        47090517,
        47094491,
        47096288,
        47090642,
        47093950,
        47088277,
        47088225
      ],
      "score": 713,
      "time": 1771595464,
      "title": "Ggml.ai joins Hugging Face to ensure the long-term progress of Local AI",
      "type": "story",
      "url": "https://github.com/ggml-org/llama.cpp/discussions/19759"
    },
    {
      "by": "tylerdane",
      "descendants": 50,
      "id": 47095429,
      "kids": [
        47098152,
        47096633,
        47096057,
        47095430,
        47097514,
        47096712,
        47096041,
        47095705,
        47097002,
        47096894,
        47095919,
        47097175,
        47095648,
        47096898
      ],
      "score": 144,
      "time": 1771629552,
      "title": "CERN rebuilt the original browser from 1989 (2019)",
      "type": "story",
      "url": "https://worldwideweb.cern.ch"
    },
    {
      "by": "nobody9999",
      "descendants": 226,
      "id": 47092006,
      "kids": [
        47094695,
        47092909,
        47096564,
        47094574,
        47093712,
        47095907,
        47096739,
        47095480,
        47094078,
        47096366,
        47096528,
        47095877,
        47094919,
        47097384,
        47094244,
        47095248,
        47095518,
        47094387,
        47093659,
        47097531,
        47092142,
        47095326,
        47094303,
        47093110,
        47092648,
        47094636,
        47093273,
        47095214,
        47094555,
        47095288,
        47094001,
        47093771,
        47093515,
        47092351
      ],
      "score": 386,
      "text": "Related:<p><i>Archive.today is directing a DDoS attack against my blog</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=46843805\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=46843805</a> - Feb 2026 (168 comments)<p><i>Ask HN: Weird archive.today behavior?</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=46624740\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=46624740</a> - Jan 2026 (69 comments)",
      "time": 1771612941,
      "title": "Wikipedia deprecates Archive.today, starts removing archive links",
      "type": "story",
      "url": "https://arstechnica.com/tech-policy/2026/02/wikipedia-bans-archive-today-after-site-executed-ddos-and-altered-web-captures/"
    },
    {
      "by": "gnabgib",
      "descendants": 14,
      "id": 47065729,
      "kids": [
        47066820,
        47098096,
        47065762,
        47098127,
        47098173,
        47098157,
        47066029,
        47066976,
        47098050,
        47066191
      ],
      "score": 28,
      "time": 1771445533,
      "title": "Microsoft team creates 'revolutionary' data storage system that lasts millennia",
      "type": "story",
      "url": "https://www.nature.com/articles/d41586-026-00502-2"
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
      "reactions": 74,
      "comments": 30,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "The Meter Was Always Running",
      "description": "On the All-In podcast (episode #261), Jason Calacanis revealed his AI agents cost $300 a day. Each....",
      "url": "https://dev.to/dannwaneri/the-meter-was-always-running-44c4",
      "tags": "ai, webdev, career, discuss",
      "reactions": 16,
      "comments": 6,
      "reading_time": 5,
      "author": "dannwaneri"
    },
    {
      "title": "I’ve Mentored 37 Junior Developers. Here’s What They All Get Wrong (And Why It’s Not Their Fault)",
      "description": "I’ve been writing code long enough to remember when Stack Overflow didn’t exist.  If you didn’t know...",
      "url": "https://dev.to/art_light/ive-mentored-37-junior-developers-heres-what-they-all-get-wrong-and-why-its-not-their-fault-hdn",
      "tags": "career, programming, discuss, beginners",
      "reactions": 56,
      "comments": 24,
      "reading_time": 3,
      "author": "art_light"
    },
    {
      "title": "You're not falling behind - «Tend and Befriend» Theory",
      "description": "Breathe.  Just breathe.   Yes, my bookmarks in the AI folder keep growing. Actually, the first ones...",
      "url": "https://dev.to/manuartero/youre-not-falling-behind-theory-3mnc",
      "tags": "ai, programming, career, mentalhealth",
      "reactions": 2,
      "comments": 3,
      "reading_time": 3,
      "author": "manuartero"
    },
    {
      "title": "The most valuable skill in 2026 isn't writing code. It is deleting it.",
      "description": "We are currently living through the greatest inflation of software in history.  With the AI tools we...",
      "url": "https://dev.to/the_nortern_dev/the-most-valuable-skill-in-2026-isnt-writing-code-it-is-deleting-it-53j1",
      "tags": "softwareengineering, career, productivity, discuss",
      "reactions": 92,
      "comments": 95,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "Who's hiring — February 2026",
      "description": "Product engineers, Developer advocates, or Community builders?  Let's kick this year off to a great...",
      "url": "https://dev.to/fmerian/whos-hiring-february-2026-2ci9",
      "tags": "career, devrel, opensource, startup",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "fmerian"
    },
    {
      "title": "The Job Isn't Writing Code. It's Knowing When the AI Is Wrong.",
      "description": "I use an AI coding agent for almost everything on my job board GlobalRemote. It writes my scrapers,...",
      "url": "https://dev.to/dalleyne/the-job-isnt-writing-code-its-knowing-when-the-ai-is-wrong-4fek",
      "tags": "agents, ai, career, coding",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "dalleyne"
    },
    {
      "title": "How I Turned an AI Skeptic and a 13-Year-Old Into Believers",
      "description": "Two conversion stories that prove AI literacy isn't about technical skills—it's about showing people the right use case.",
      "url": "https://dev.to/htekdev/how-i-turned-an-ai-skeptic-and-a-13-year-old-into-believers-2661",
      "tags": "ai, github, devex, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "htekdev"
    },
    {
      "title": "Why Your Resume Gets Rejected Before a Human Sees It (And How to Fix It)",
      "description": "Why Your Resume Gets Rejected Before a Human Sees It (And How to Fix It)   You spent three...",
      "url": "https://dev.to/sira_ai/why-your-resume-gets-rejected-before-a-human-sees-it-and-how-to-fix-it-79h",
      "tags": "career, productivity, beginners, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "sira_ai"
    },
    {
      "title": "I Tracked Every Dollar I Spent on AI Coding Tools for 90 Days. Here's What I Found.",
      "description": "Three months ago I started logging every AI tool charge that hit my credit card. The number at the...",
      "url": "https://dev.to/matthewhou/i-tracked-every-dollar-i-spent-on-ai-coding-tools-for-90-days-heres-what-i-found-3acl",
      "tags": "ai, productivity, webdev, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "matthewhou"
    }
  ]
}
```

