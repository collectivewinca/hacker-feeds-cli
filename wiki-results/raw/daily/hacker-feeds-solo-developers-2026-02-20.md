# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-02-20 07:14:14 UTC

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
      "stars": 7859,
      "forks": 680,
      "added_stars": 2842,
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
      "stars": 3794,
      "forks": 237,
      "added_stars": 2095,
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
      "stars": 26075,
      "forks": 1535,
      "added_stars": 1803,
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
      "author": "danielmiessler",
      "repo": "Personal_AI_Infrastructure",
      "avatar": "https://github.com/danielmiessler.png",
      "repo_link": "https://github.com/danielmiessler/Personal_AI_Infrastructure",
      "desc": "Agentic AI Infrastructure for magnifying HUMAN capabilities.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 8917,
      "forks": 1216,
      "added_stars": 1657,
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
      "author": "badlogic",
      "repo": "pi-mono",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-mono",
      "desc": "AI agent toolkit: coding agent CLI, unified LLM API, TUI & web UI libraries, Slack bot, vLLM pods",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 13989,
      "forks": 1426,
      "added_stars": 2669,
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
      "author": "tambo-ai",
      "repo": "tambo",
      "avatar": "https://github.com/tambo-ai.png",
      "repo_link": "https://github.com/tambo-ai/tambo",
      "desc": "Generative UI SDK for React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 10795,
      "forks": 521,
      "added_stars": 1941,
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
      "stars": 1600,
      "forks": 161,
      "added_stars": 571,
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
      "stars": 21286,
      "forks": 1265,
      "added_stars": 159,
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
      "author": "OpenCTI-Platform",
      "repo": "opencti",
      "avatar": "https://github.com/OpenCTI-Platform.png",
      "repo_link": "https://github.com/OpenCTI-Platform/opencti",
      "desc": "Open Cyber Threat Intelligence Platform",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 8818,
      "forks": 1254,
      "added_stars": 613,
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
      "author": "seerr-team",
      "repo": "seerr",
      "avatar": "https://github.com/seerr-team.png",
      "repo_link": "https://github.com/seerr-team/seerr",
      "desc": "Open-source media request and discovery manager for Jellyfin, Plex, and Emby.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 9489,
      "forks": 622,
      "added_stars": 979,
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
      "author": "getmaxun",
      "repo": "maxun",
      "avatar": "https://github.com/getmaxun.png",
      "repo_link": "https://github.com/getmaxun/maxun",
      "desc": "✨ The open-source no-code platform for web scraping, crawling, search and AI data extraction • Turn websites into structured APIs in minutes ✨",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 15052,
      "forks": 1220,
      "added_stars": 334,
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
    },
    {
      "author": "cinnyapp",
      "repo": "cinny",
      "avatar": "https://github.com/cinnyapp.png",
      "repo_link": "https://github.com/cinnyapp/cinny",
      "desc": "Yet another matrix client",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 3181,
      "forks": 429,
      "added_stars": 354,
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
      "author": "spacebarchat",
      "repo": "server",
      "avatar": "https://github.com/spacebarchat.png",
      "repo_link": "https://github.com/spacebarchat/server",
      "desc": "Spacebar server - A reimplementation of the Discord.com backend, built with Typescript and love",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 2067,
      "forks": 293,
      "added_stars": 121,
      "builtBy": [
        {
          "username": "samuelscheit",
          "href": "https://github.com/samuelscheit",
          "avatar": "https://avatars.githubusercontent.com/u/34555296"
        },
        {
          "username": "MaddyUnderStars",
          "href": "https://github.com/MaddyUnderStars",
          "avatar": "https://avatars.githubusercontent.com/u/46743919"
        },
        {
          "username": "TheArcaneBrony",
          "href": "https://github.com/TheArcaneBrony",
          "avatar": "https://avatars.githubusercontent.com/u/13570458"
        },
        {
          "username": "MathMan05",
          "href": "https://github.com/MathMan05",
          "avatar": "https://avatars.githubusercontent.com/u/73901602"
        },
        {
          "username": "Puyodead1",
          "href": "https://github.com/Puyodead1",
          "avatar": "https://avatars.githubusercontent.com/u/14828766"
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
      "stars": 4262,
      "forks": 336,
      "added_stars": 3685,
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
      "stars": 162986,
      "forks": 14619,
      "added_stars": 3560,
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
      "stars": 35065,
      "forks": 4599,
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
      "stars": 9824,
      "forks": 759,
      "added_stars": 5198,
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
      "stars": 22760,
      "forks": 1113,
      "added_stars": 1635,
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
      "stars": 10756,
      "forks": 9982,
      "added_stars": 78,
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
      "stars": 1851,
      "forks": 399,
      "added_stars": 1037,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 42640,
      "forks": 7961,
      "added_stars": 643,
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
      "author": "putyy",
      "repo": "res-downloader",
      "avatar": "https://github.com/putyy.png",
      "repo_link": "https://github.com/putyy/res-downloader",
      "desc": "视频号、小程序、抖音、快手、小红书、直播流、m3u8、酷狗、QQ音乐等常见网络资源下载!",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 15269,
      "forks": 1897,
      "added_stars": 1893,
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
      "stars": 16775,
      "forks": 1021,
      "added_stars": 5566,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The to-do app to organize your life.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 3361,
      "forks": 310,
      "added_stars": 295,
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
      "repo": "lipgloss",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/lipgloss",
      "desc": "Style definitions for nice terminal layouts 👄",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 10592,
      "forks": 311,
      "added_stars": 238,
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
      "author": "juanfont",
      "repo": "headscale",
      "avatar": "https://github.com/juanfont.png",
      "repo_link": "https://github.com/juanfont/headscale",
      "desc": "An open source, self-hosted implementation of the Tailscale control server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 35570,
      "forks": 1905,
      "added_stars": 1227,
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
      "author": "korotovsky",
      "repo": "slack-mcp-server",
      "avatar": "https://github.com/korotovsky.png",
      "repo_link": "https://github.com/korotovsky/slack-mcp-server",
      "desc": "The most powerful MCP Slack Server with no permission requirements, Apps support, GovSlack, DMs, Group DMs and smart history fetch logic.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 1377,
      "forks": 241,
      "added_stars": 231,
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
      "author": "tailscale",
      "repo": "tailscale",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailscale",
      "desc": "The easiest, most secure way to use WireGuard and 2FA.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 28553,
      "forks": 2291,
      "added_stars": 1270,
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
      "author": "crossplane",
      "repo": "crossplane",
      "avatar": "https://github.com/crossplane.png",
      "repo_link": "https://github.com/crossplane/crossplane",
      "desc": "The Cloud Native Control Plane",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 11423,
      "forks": 1138,
      "added_stars": 132,
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
      "author": "autobrr",
      "repo": "qui",
      "avatar": "https://github.com/autobrr.png",
      "repo_link": "https://github.com/autobrr/qui",
      "desc": "A fast, single-binary qBittorrent web UI: manage multiple instances, automate torrent workflows, and cross-seed across trackers.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 3222,
      "forks": 90,
      "added_stars": 931,
      "builtBy": [
        {
          "username": "s0up4200",
          "href": "https://github.com/s0up4200",
          "avatar": "https://avatars.githubusercontent.com/u/18177310"
        },
        {
          "username": "KyleSanderson",
          "href": "https://github.com/KyleSanderson",
          "avatar": "https://avatars.githubusercontent.com/u/1184902"
        },
        {
          "username": "jabloink",
          "href": "https://github.com/jabloink",
          "avatar": "https://avatars.githubusercontent.com/u/167050981"
        },
        {
          "username": "nuxencs",
          "href": "https://github.com/nuxencs",
          "avatar": "https://avatars.githubusercontent.com/u/47067662"
        },
        {
          "username": "Audionut",
          "href": "https://github.com/Audionut",
          "avatar": "https://avatars.githubusercontent.com/u/13182387"
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
      "stars": 3192,
      "forks": 433,
      "added_stars": 505,
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
      "author": "abiosoft",
      "repo": "colima",
      "avatar": "https://github.com/abiosoft.png",
      "repo_link": "https://github.com/abiosoft/colima",
      "desc": "Container runtimes on macOS (and Linux) with minimal setup",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 27035,
      "forks": 536,
      "added_stars": 689,
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
      "author": "evanw",
      "repo": "esbuild",
      "avatar": "https://github.com/evanw.png",
      "repo_link": "https://github.com/evanw/esbuild",
      "desc": "An extremely fast bundler for the web",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 39790,
      "forks": 1286,
      "added_stars": 202,
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
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 32025,
      "forks": 2955,
      "added_stars": 1068,
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
      "stars": 39666,
      "forks": 1094,
      "added_stars": 1296,
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
      "stars": 9064,
      "forks": 508,
      "added_stars": 7281,
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
      "stars": 15630,
      "forks": 1128,
      "added_stars": 10104,
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
      "stars": 72103,
      "forks": 7372,
      "added_stars": 26759,
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
      "author": "NevaMind-AI",
      "repo": "memU",
      "avatar": "https://github.com/NevaMind-AI.png",
      "repo_link": "https://github.com/NevaMind-AI/memU",
      "desc": "Memory for 24/7 proactive agents like openclaw (moltbot, clawdbot).",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 9488,
      "forks": 727,
      "added_stars": 4647,
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
      "stars": 6503,
      "forks": 621,
      "added_stars": 2644,
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
      "stars": 5222,
      "forks": 367,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 8604,
      "forks": 856,
      "added_stars": 4166,
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
      "stars": 28523,
      "forks": 2335,
      "added_stars": 2827,
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
      "stars": 33322,
      "forks": 2220,
      "added_stars": 10865,
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
      "stars": 31036,
      "forks": 3826,
      "added_stars": 2255,
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
      "stars": 3090,
      "forks": 557,
      "added_stars": 1012,
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
      "stars": 96153,
      "forks": 13956,
      "added_stars": 8158,
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
      "author": "Free-TV",
      "repo": "IPTV",
      "avatar": "https://github.com/Free-TV.png",
      "repo_link": "https://github.com/Free-TV/IPTV",
      "desc": "M3U Playlist for free TV channels",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 14043,
      "forks": 2040,
      "added_stars": 3047,
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
      "author": "ComposioHQ",
      "repo": "awesome-claude-skills",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/awesome-claude-skills",
      "desc": "A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 36056,
      "forks": 3519,
      "added_stars": 14296,
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
      "author": "yt-dlp",
      "repo": "yt-dlp",
      "avatar": "https://github.com/yt-dlp.png",
      "repo_link": "https://github.com/yt-dlp/yt-dlp",
      "desc": "A feature-rich command-line audio/video downloader",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 147718,
      "forks": 11961,
      "added_stars": 5291,
      "builtBy": [
        {
          "username": "dstftw",
          "href": "https://github.com/dstftw",
          "avatar": "https://avatars.githubusercontent.com/u/1908898"
        },
        {
          "username": "phihag",
          "href": "https://github.com/phihag",
          "avatar": "https://avatars.githubusercontent.com/u/779568"
        },
        {
          "username": "pukkandan",
          "href": "https://github.com/pukkandan",
          "avatar": "https://avatars.githubusercontent.com/u/6623388"
        },
        {
          "username": "remitamine",
          "href": "https://github.com/remitamine",
          "avatar": "https://avatars.githubusercontent.com/u/10879694"
        },
        {
          "username": "jaimeMF",
          "href": "https://github.com/jaimeMF",
          "avatar": "https://avatars.githubusercontent.com/u/1239727"
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
      "stars": 4331,
      "forks": 924,
      "added_stars": 321,
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
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 36388,
      "forks": 5886,
      "added_stars": 2329,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "A simple bridge to request human confirmation via Telegram from an MCP agent (like Antigravity)",
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
      "reactions": 330,
      "comments": 82,
      "reading_time": 6,
      "author": "ben"
    },
    {
      "title": "Why did you become a Developer?",
      "description": "We all have our origin stories. Maybe you were born to become a programmer or you started off when...",
      "url": "https://dev.to/francistrdev/why-did-you-become-a-developer-57ea",
      "tags": "discuss, community, programming, mentalhealth",
      "reactions": 38,
      "comments": 32,
      "reading_time": 2,
      "author": "francistrdev"
    },
    {
      "title": "Congrats to the \"New Year, New You\" Portfolio Challenge Winners and Runner-Ups!",
      "description": "The results are in! We are thrilled to announce the winners of the New Year, New You Portfolio...",
      "url": "https://dev.to/devteam/congrats-to-the-new-year-new-you-portfolio-challenge-winners-and-runner-ups-1l9h",
      "tags": "devchallenge, googleaichallenge, gemini, career",
      "reactions": 47,
      "comments": 18,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Suffering from BUGS: How I Almost Deleted My Entire Project",
      "description": "You know that iconic DJ Khaled album, \"Suffering from Success\"? The one where he looks overwhelmed by...",
      "url": "https://dev.to/maame-codes/suffering-from-bugs-how-i-almost-deleted-my-entire-project-1eef",
      "tags": "showdev, devops, python, typescript",
      "reactions": 81,
      "comments": 23,
      "reading_time": 5,
      "author": "maame-codes"
    },
    {
      "title": "The Future of Software Has a Lot More Builders. They’re Going to Need a Home.",
      "description": "I have some big news to share today: Major League Hacking has acquired DEV (dev.to), the developer...",
      "url": "https://dev.to/mlh/the-future-of-software-has-a-lot-more-builders-theyre-going-to-need-a-home-1k65",
      "tags": "discuss, news, ai, programming",
      "reactions": 87,
      "comments": 15,
      "reading_time": 4,
      "author": "jonmarkgo"
    },
    {
      "title": "Ran out of Cursor tokens and switched to GitHub Copilot: Side-by-Side",
      "description": "DISCLAIMER! The best AI coding tool is the one available to you, that gives you the best model and...",
      "url": "https://dev.to/maximsaplin/ran-out-of-cursor-tokens-and-switched-to-github-copilot-side-by-side-2n5p",
      "tags": "ai, githubcopilot, programming, productivity",
      "reactions": 24,
      "comments": 9,
      "reading_time": 9,
      "author": "maximsaplin"
    },
    {
      "title": "The hosting setup nobody talks about anymore",
      "description": "Ever had this problem?   You're building something real, real-time features, background workers, cron...",
      "url": "https://dev.to/aws/the-hosting-setup-nobody-talks-about-anymore-2528",
      "tags": "aws, webhost, webdev",
      "reactions": 4,
      "comments": 0,
      "reading_time": 24,
      "author": "erikch"
    },
    {
      "title": "Inside OpenClaw: How a Persistent AI Agent Actually Works",
      "description": "Introduction   OpenClaw, originally called ClawdBot, is trending everywhere. People are...",
      "url": "https://dev.to/entelligenceai/inside-openclaw-how-a-persistent-ai-agent-actually-works-1mnk",
      "tags": "ai, productivity, opensource, programming",
      "reactions": 9,
      "comments": 0,
      "reading_time": 10,
      "author": "astrodevil"
    },
    {
      "title": "If Writing still Matters, How to Do it Right and Avoid AI Suspicion?",
      "description": "Does writing still matter? Does anyone still care? I care. I write. Because it matters.  \"Still\"...",
      "url": "https://dev.to/ingosteinke/if-writing-still-matters-how-to-do-it-right-and-avoid-ai-suspicion-2nac",
      "tags": "writing, ai, watercooler, nanobanana",
      "reactions": 30,
      "comments": 11,
      "reading_time": 9,
      "author": "ingosteinke"
    },
    {
      "title": "Taming non-determinism: from logic gates to LLMs",
      "description": "Or: how engineering keeps turning chaos into reliable computation. And why agentic AI still hasn't...",
      "url": "https://dev.to/leandronsp/taming-non-determinism-from-logic-gates-to-llms-3mf0",
      "tags": "ai, llm, ann",
      "reactions": 11,
      "comments": 0,
      "reading_time": 8,
      "author": "leandronsp"
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
      "title": "An AI Agent Published a Hit Piece on Me – The Operator Came Forward",
      "url": "https://theshamblog.com/an-ai-agent-wrote-a-hit-piece-on-me-part-4/",
      "score": 1,
      "comments": 1,
      "tags": [
        "vibecoding"
      ],
      "id": "2mkkpo"
    },
    {
      "title": "How I made a shooter game in 64 KB",
      "url": "https://youtu.be/qht68vFaa1M",
      "score": 3,
      "comments": 1,
      "tags": [
        "games",
        "video"
      ],
      "id": "jmxzcr"
    },
    {
      "title": "The Claude C Compiler: What It Reveals About the Future of Software",
      "url": "https://www.modular.com/blog/the-claude-c-compiler-what-it-reveals-about-the-future-of-software",
      "score": 0,
      "comments": 1,
      "tags": [
        "vibecoding"
      ],
      "id": "wk6rjh"
    },
    {
      "title": "The Dillo Appreciation Post",
      "url": "https://bobbyhiltz.com/posts/2026/02/dillo-appreciation/",
      "score": 3,
      "comments": 0,
      "tags": [
        "browsers"
      ],
      "id": "zddzgo"
    },
    {
      "title": "two mechanisms for dynamic type checks",
      "url": "https://wingolog.org/archives/2026/02/18/two-mechanisms-for-dynamic-type-checks",
      "score": 2,
      "comments": 0,
      "tags": [
        "compsci",
        "plt"
      ],
      "id": "qj1p4h"
    },
    {
      "title": "reading the undocumented mems accelerometer on apple silicon macbooks via iokit hid",
      "url": "https://github.com/olvvier/apple-silicon-accelerometer",
      "score": 7,
      "comments": 1,
      "tags": [
        "mac"
      ],
      "id": "b80lmi"
    },
    {
      "title": "Lindenmayer Systems",
      "url": "https://justinpombrio.net/2026/02/16/l-systems.html",
      "score": 2,
      "comments": 0,
      "tags": [
        "art",
        "math"
      ],
      "id": "zzlxaa"
    },
    {
      "title": "Using candyfloss to do neural net inference",
      "url": "https://notes.hella.cheap/a-introductory-video-tutorial-for-candyfloss.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "python",
        "video"
      ],
      "id": "stg864"
    },
    {
      "title": "Continuations and Transducer Composition (2006)",
      "url": "https://matt.might.net/papers/might2006transducers.pdf",
      "score": 3,
      "comments": 0,
      "tags": [
        "lisp",
        "pdf"
      ],
      "id": "se6yrh"
    },
    {
      "title": "A Scheme Shell (1994)",
      "url": "https://publications.csail.mit.edu/lcs/pubs/pdf/MIT-LCS-TR-635.pdf",
      "score": 5,
      "comments": 1,
      "tags": [
        "lisp",
        "pdf",
        "unix"
      ],
      "id": "odtjwd"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "r4um",
      "descendants": 18,
      "id": 47031197,
      "kids": [
        47084266,
        47084179,
        47084457,
        47084296,
        47084606,
        47084210,
        47084337
      ],
      "score": 54,
      "time": 1771219655,
      "title": "Defer available in gcc and clang",
      "type": "story",
      "url": "https://gustedt.wordpress.com/2026/02/15/defer-available-in-gcc-and-clang/"
    },
    {
      "by": "zagwdt",
      "descendants": 8,
      "id": 47083648,
      "kids": [
        47084726,
        47084262,
        47084200,
        47084079
      ],
      "score": 49,
      "time": 1771560958,
      "title": "Consistency diffusion language models: Up to 14x faster, no quality loss",
      "type": "story",
      "url": "https://www.together.ai/blog/consistency-diffusion-language-models"
    },
    {
      "by": "MallocVoidstar",
      "descendants": 767,
      "id": 47074735,
      "kids": [
        47076453,
        47079966,
        47080308,
        47076937,
        47075566,
        47076484,
        47084686,
        47076733,
        47075747,
        47075916,
        47075750,
        47076703,
        47082391,
        47075340,
        47082908,
        47075498,
        47076285,
        47082937,
        47075618,
        47075386,
        47075664,
        47083519,
        47076344,
        47084282,
        47080142,
        47078572,
        47081311,
        47078265,
        47075581,
        47081653,
        47082960,
        47076172,
        47077551,
        47076958,
        47076500,
        47075751,
        47076088,
        47075355,
        47079104,
        47077009,
        47076019,
        47082350,
        47078302,
        47083092,
        47081106,
        47075681,
        47080637,
        47075954,
        47076511,
        47076086,
        47075669,
        47084429,
        47080993,
        47080818,
        47077606,
        47077814,
        47077238,
        47076810,
        47076036,
        47081554,
        47075367,
        47075939,
        47080173,
        47076328,
        47075881,
        47077934,
        47076049,
        47075337,
        47075825,
        47077207,
        47075725,
        47079826,
        47075755,
        47078141,
        47075586,
        47081745,
        47075579,
        47079418,
        47081414,
        47080386,
        47076133,
        47079204,
        47075798,
        47075535,
        47078599,
        47077402,
        47076432,
        47075594,
        47075529,
        47075439,
        47075304,
        47075740,
        47078180,
        47075946,
        47076934,
        47075728,
        47079354,
        47077070,
        47080146,
        47077693,
        47075961,
        47075948,
        47075923,
        47075600,
        47080030,
        47075689,
        47076863,
        47076504,
        47076486,
        47076181,
        47075599,
        47077328,
        47077507,
        47076572,
        47077877,
        47078959,
        47083988,
        47081090,
        47077346,
        47076433,
        47075223,
        47077912,
        47076031,
        47076074
      ],
      "score": 678,
      "text": "Preview: <a href=\"https:&#x2F;&#x2F;console.cloud.google.com&#x2F;vertex-ai&#x2F;publishers&#x2F;google&#x2F;model-garden&#x2F;gemini-3.1-pro-preview?pli=1\" rel=\"nofollow\">https:&#x2F;&#x2F;console.cloud.google.com&#x2F;vertex-ai&#x2F;publishers&#x2F;google...</a><p>Card: <a href=\"https:&#x2F;&#x2F;deepmind.google&#x2F;models&#x2F;model-cards&#x2F;gemini-3-1-pro&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;deepmind.google&#x2F;models&#x2F;model-cards&#x2F;gemini-3-1-pro&#x2F;</a>",
      "time": 1771514397,
      "title": "Gemini 3.1 Pro",
      "type": "story",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/"
    },
    {
      "by": "scottshambaugh",
      "descendants": 224,
      "id": 47083145,
      "kids": [
        47083893,
        47084704,
        47084735,
        47083388,
        47083624,
        47083937,
        47084721,
        47083377,
        47083329,
        47083439,
        47084151,
        47083796,
        47084540,
        47084684,
        47084172,
        47083850,
        47083468,
        47083266,
        47083542,
        47084383,
        47083965,
        47083792,
        47084707,
        47083362,
        47083788,
        47083616,
        47084166,
        47084259,
        47083927,
        47083376,
        47083817,
        47083359,
        47083938,
        47083275,
        47083292,
        47084076,
        47083474,
        47083603,
        47084255,
        47083975,
        47083990,
        47083549,
        47084295,
        47083640,
        47084193,
        47083551,
        47083646,
        47083496,
        47083655,
        47083690,
        47083339,
        47084101,
        47083628,
        47083671,
        47083303,
        47083414,
        47083588,
        47083372,
        47083302,
        47083524,
        47083438,
        47083687
      ],
      "score": 290,
      "time": 1771556708,
      "title": "An AI Agent Published a Hit Piece on Me – The Operator Came Forward",
      "type": "story",
      "url": "https://theshamblog.com/an-ai-agent-wrote-a-hit-piece-on-me-part-4/"
    },
    {
      "by": "rahimnathwani",
      "descendants": 7,
      "id": 47082854,
      "kids": [
        47084709,
        47084221,
        47083905,
        47084373,
        47083617,
        47083779,
        47083208
      ],
      "score": 43,
      "time": 1771554006,
      "title": "Pi for Excel: AI sidebar add-in for Excel",
      "type": "story",
      "url": "https://github.com/tmustier/pi-for-excel"
    },
    {
      "by": "todsacerdoti",
      "descendants": 1,
      "id": 47084000,
      "kids": [
        47084552,
        47084541
      ],
      "score": 17,
      "time": 1771564000,
      "title": "Reading the undocumented MEMS accelerometer on Apple Silicon MacBooks via iokit",
      "type": "story",
      "url": "https://github.com/olvvier/apple-silicon-accelerometer"
    },
    {
      "by": "cpcloud",
      "descendants": 167,
      "id": 47075124,
      "kids": [
        47080795,
        47078179,
        47076008,
        47076801,
        47077730,
        47079163,
        47083604,
        47084110,
        47076009,
        47075960,
        47076742,
        47083178,
        47078392,
        47078408,
        47077974,
        47078317,
        47078030,
        47075782,
        47079615,
        47082943,
        47082060,
        47076796,
        47081927,
        47080649,
        47076892,
        47078293,
        47079444,
        47075564,
        47076925,
        47076985,
        47078926,
        47075624,
        47077943,
        47077040,
        47080263,
        47079095,
        47075611,
        47077074,
        47081750,
        47075364,
        47076969,
        47077797,
        47078116,
        47082800,
        47076549,
        47083505,
        47082651,
        47075726,
        47077599,
        47080765,
        47076635,
        47075570,
        47078874,
        47082846,
        47078197,
        47077753,
        47079320,
        47079848,
        47079113,
        47078184,
        47077954,
        47077818,
        47075985,
        47081708,
        47078340,
        47081217,
        47082280,
        47084459,
        47081673,
        47078304
      ],
      "score": 512,
      "text": "micasa is a terminal UI that helps you track home stuff, in a single SQLite file. No cloud, no\naccount, no subscription. Backup with cp.<p>I built it because I was tired of losing track of everything in notes apps, and &quot;I&#x27;ll remember\nthat&quot;s. When do I need to clean the dishwasher filter? What&#x27;s the best quote for a complete\noverhaul of the backyard. Oops, found some mold behind the trim, need to address that ASAP. That\nsort of stuff.<p>Another reason I made micasa was to build a (hopefully useful) low-stakes personal project where\nthe code was written entirely by AI. I still review the code and click the merge button, but 99%\nof the programming was done with an agent.<p>Here are some things I think make it worth checking out:<p>- Vim-style modal UI. Nav mode to browse, edit mode to change. Multicolumn sort, fuzzy-jump to\n  columns, pin-and-filter rows, hide columns you don&#x27;t need, drill into related records (like\n  quotes for a project). Much of the spirit of the design and some of the actual design choices\n  is and are inspired by VisiData. You should check that out too.\n- Local LLM chat. Definitely a gimmick, but I am trying preempt &quot;Yeah, but does it AI?&quot;-style\n  conversations. This is an optional feature and you can simply pretend it doesn&#x27;t exist. All\n  features work without it.\n- Single-file SQLite-based architecture. Document attachments (manuals, receipts, photos) are\n  stored as BLOBs in the same SQLite database. One file is the whole app state. If you think\n  this won&#x27;t scale, you&#x27;re right. It&#x27;s pretty damn easy to work with though.\n- Pure Go, zero CGO. Built on Charmbracelet for the TUI and GORM + go-sqlite for the database.\n  Charm makes pretty nice TUIs, and this was my first time using it.<p>Try it with sample data:\ngo install github.com&#x2F;cpcloud&#x2F;micasa&#x2F;cmd&#x2F;micasa@latest &amp;&amp; micasa --demo<p>If you&#x27;re insane you can also run micasa --demo --years 1000 to generate 1000 years worth of\ndemo data. Not sure what house would last that long, but hey, you do you.",
      "time": 1771516454,
      "title": "Show HN: Micasa – track your house from the terminal",
      "type": "story",
      "url": "https://micasa.dev"
    },
    {
      "by": "neelc",
      "descendants": 42,
      "id": 47082548,
      "kids": [
        47082950,
        47084239,
        47083462,
        47083560,
        47082825,
        47082826,
        47082598,
        47083483,
        47083156,
        47083413
      ],
      "score": 51,
      "time": 1771551216,
      "title": "An ARM Homelab Server, or a Minisforum MS-R1 Review",
      "type": "story",
      "url": "https://sour.coffee/2026/02/20/an-arm-homelab-server-or-a-minisforum-ms-r1-review/"
    },
    {
      "by": "arjunbajaj",
      "descendants": 0,
      "id": 47084431,
      "score": 3,
      "text": "Hey HN! Arjun and Sid here.<p>Fostrom is an IoT Cloud Platform designed for developers to make it really easy to get started and scale fleets. We have Device SDKs (in Python, JS, Elixir, more coming soon), Typed Schemas, Per-Device Mailboxes, Programmable Actions, 4 Global Regions for lower-latency connections, and much more.<p>We&#x27;ve built Fostrom to solve a real need we faced in our previous startup, building a fully automated indoor vertical farm. We spent more time figuring out IoT infrastructure than writing automation logic. Fostrom is the platform we wished existed back then.<p>Over the last few years we&#x27;ve experimented with a lot of interesting tech and architectures, and settled on an architecture that we believe is quite elegant. We wrote a Go&lt;-&gt;Elixir bridge to execute JS code in WASM for Actions, implemented a DuckDB library for Elixir, and wrote a Device Agent in Rust that our SDKs run in the background (<a href=\"https:&#x2F;&#x2F;github.com&#x2F;fostrom&#x2F;devicekit\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;fostrom&#x2F;devicekit</a>).<p>The most interesting realization we had was about the data architecture. For years, we tried using distributed databases and built complex layers on top of them, but all approaches had significant limitations specifically around consistency and querying. We want to provide operational correctness, rich insights, and reliability. Finally, we came to the conclusion that to achieve this we really need a SQL database for fleet data. So we built a DuckDB-based replicated multi-tenant data layer. We&#x27;re still improving it (hence the Technical Preview badge) but we&#x27;re quite proud of this decision. It simplifies the rest of the codebase, while keeping operational complexity in just a few places.<p>Our vision is to make a powerful IoT platform that enables you to build correct, secure, and reliable connected systems without dealing with any of the plumbing or infrastructure.<p>Next up, we&#x27;re gonna launch our CLI, add automatic device monitoring to our Device SDKs, and improve the debugging experience. We have some pretty cool ideas to make Fostrom and the experience of developing connected systems better. We&#x27;re also going to write more about our architecture and journey soon.<p>We also published our launch blog post which goes into more detail about our vision, what we&#x27;ve built, and our future plans: <a href=\"https:&#x2F;&#x2F;fostrom.io&#x2F;blog&#x2F;introducing-fostrom\" rel=\"nofollow\">https:&#x2F;&#x2F;fostrom.io&#x2F;blog&#x2F;introducing-fostrom</a><p>Would love for you to try out Fostrom and give us your feedback and thoughts.",
      "time": 1771568434,
      "title": "Show HN: Fostrom, an IoT Cloud Platform built for developers",
      "type": "story",
      "url": "https://fostrom.io/"
    },
    {
      "by": "Meetvelde",
      "descendants": 81,
      "id": 47043345,
      "kids": [
        47082079,
        47082117,
        47084666,
        47082246,
        47083375,
        47084220,
        47084355,
        47083568,
        47083427,
        47082878,
        47084047,
        47084542,
        47083741,
        47083455,
        47084297,
        47082043,
        47083327,
        47082107,
        47082335,
        47082221,
        47082902,
        47082220,
        47083079,
        47082588,
        47084118
      ],
      "score": 168,
      "time": 1771298596,
      "title": "Almost Every infrastructure decision I endorse or regret after 4 years",
      "type": "story",
      "url": "https://cep.dev/posts/every-infrastructure-decision-i-endorse-or-regret-after-4-years-running-infrastructure-at-a-startup/"
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
      "reactions": 47,
      "comments": 18,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "The Promotion I Didn't Get Taught Me More Than the One I Did",
      "description": "I was passed over for a senior promotion after 2 years of what I thought was outstanding work. I was...",
      "url": "https://dev.to/matthewhou/the-promotion-i-didnt-get-taught-me-more-than-the-one-i-did-27bb",
      "tags": "career, programming, growth, advice",
      "reactions": 2,
      "comments": 0,
      "reading_time": 4,
      "author": "matthewhou"
    },
    {
      "title": "The \"Soft Skills\" That Actually Determine Your Engineering Career (With Specific Examples)",
      "description": "I hate the term \"soft skills.\" It implies they're fluffy, optional, nice-to-have. They're not....",
      "url": "https://dev.to/matthewhou/the-soft-skills-that-actually-determine-your-engineering-career-with-specific-examples-2g27",
      "tags": "career, softskills, programming, advice",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "matthewhou"
    },
    {
      "title": "The most valuable skill in 2026 isn't writing code. It is deleting it.",
      "description": "We are currently living through the greatest inflation of software in history.  With the AI tools we...",
      "url": "https://dev.to/the_nortern_dev/the-most-valuable-skill-in-2026-isnt-writing-code-it-is-deleting-it-53j1",
      "tags": "softwareengineering, career, productivity, discuss",
      "reactions": 74,
      "comments": 76,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "The Death of Junior Dev Roles (And Why That's Bad for All of Us)",
      "description": "Something weird is happening in tech hiring right now. Companies are posting \"mid-level\" roles that...",
      "url": "https://dev.to/agentq/the-death-of-junior-dev-roles-and-why-thats-bad-for-all-of-us-3mmg",
      "tags": "career, hiring, ai, juniordeveloper",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "agentq"
    },
    {
      "title": "Why Some Developers Plateau at Mid-Level Forever",
      "description": "Most mid-level developers will never become seniors.  Not because they're not smart. Not because they...",
      "url": "https://dev.to/lessonsfromproduction/why-some-developers-plateau-at-mid-level-forever-17ll",
      "tags": "career, discuss, productivity, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "lessonsfromproduction"
    },
    {
      "title": "“Build in Public” Posts",
      "description": "🚀 1. “Build in Public” Posts    “Built a Landing Page in 24 Hours – Here’s My Stack” “Day 5...",
      "url": "https://dev.to/vasu_sharma_44aab47557610/build-in-public-posts-11h4",
      "tags": "career, learning, programming, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "vasu_sharma_44aab47557610"
    },
    {
      "title": "I'm a Senior Engineer and I Still Google \"How to Center a Div.\" Here's Why That's Fine.",
      "description": "Last Tuesday I googled \"CSS grid center child.\" I have 8 years of experience. I've built production...",
      "url": "https://dev.to/matthewhou/im-a-senior-engineer-and-i-still-google-how-to-center-a-div-heres-why-thats-fine-2hd5",
      "tags": "career, mentalhealth, programming, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "matthewhou"
    },
    {
      "title": "12 Red Flags in a Technical Interview That Tell You NOT to Take the Job",
      "description": "We talk a lot about what companies look for in candidates. We don't talk enough about what candidates...",
      "url": "https://dev.to/matthewhou/12-red-flags-in-a-technical-interview-that-tell-you-not-to-take-the-job-364m",
      "tags": "career, interview, programming, advice",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "matthewhou"
    },
    {
      "title": "I Became a Tech Lead and Wrote 80% Less Code. Here's What I Do Instead.",
      "description": "When I got promoted to tech lead, I thought: \"Great, I'm the best coder on the team. Now I get to...",
      "url": "https://dev.to/matthewhou/i-became-a-tech-lead-and-wrote-80-less-code-heres-what-i-do-instead-8ac",
      "tags": "leadership, career, programming, management",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "matthewhou"
    }
  ]
}
```

