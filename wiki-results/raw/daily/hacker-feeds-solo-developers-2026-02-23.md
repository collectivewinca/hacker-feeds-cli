# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-02-23 07:20:49 UTC

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
      "author": "seerr-team",
      "repo": "seerr",
      "avatar": "https://github.com/seerr-team.png",
      "repo_link": "https://github.com/seerr-team/seerr",
      "desc": "Open-source media request and discovery manager for Jellyfin, Plex, and Emby.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 9662,
      "forks": 632,
      "added_stars": 875,
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
      "author": "rowboatlabs",
      "repo": "rowboat",
      "avatar": "https://github.com/rowboatlabs.png",
      "repo_link": "https://github.com/rowboatlabs/rowboat",
      "desc": "Open-source AI coworker, with memory",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 8430,
      "forks": 723,
      "added_stars": 1866,
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
      "stars": 4168,
      "forks": 252,
      "added_stars": 1831,
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
      "author": "cloudflare",
      "repo": "agents",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/agents",
      "desc": "Build and deploy AI Agents on Cloudflare",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 3825,
      "forks": 409,
      "added_stars": 441,
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
      "author": "badlogic",
      "repo": "pi-mono",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-mono",
      "desc": "AI agent toolkit: coding agent CLI, unified LLM API, TUI & web UI libraries, Slack bot, vLLM pods",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 14841,
      "forks": 1535,
      "added_stars": 2432,
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
      "stars": 3248,
      "forks": 441,
      "added_stars": 147,
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
      "stars": 8854,
      "forks": 1258,
      "added_stars": 641,
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
      "stars": 27126,
      "forks": 4448,
      "added_stars": 593,
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
      "author": "evershopcommerce",
      "repo": "evershop",
      "avatar": "https://github.com/evershopcommerce.png",
      "repo_link": "https://github.com/evershopcommerce/evershop",
      "desc": "🛍️ Typescript E-commerce Platform",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 9540,
      "forks": 2159,
      "added_stars": 365,
      "builtBy": [
        {
          "username": "treoden",
          "href": "https://github.com/treoden",
          "avatar": "https://avatars.githubusercontent.com/u/6950941"
        },
        {
          "username": "en1-gma",
          "href": "https://github.com/en1-gma",
          "avatar": "https://avatars.githubusercontent.com/u/77514209"
        },
        {
          "username": "ultimate-tester",
          "href": "https://github.com/ultimate-tester",
          "avatar": "https://avatars.githubusercontent.com/u/580758"
        },
        {
          "username": "GiorgosIlia",
          "href": "https://github.com/GiorgosIlia",
          "avatar": "https://avatars.githubusercontent.com/u/24270247"
        },
        {
          "username": "tszczypinski6",
          "href": "https://github.com/tszczypinski6",
          "avatar": "https://avatars.githubusercontent.com/u/34459148"
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
      "stars": 26434,
      "forks": 1545,
      "added_stars": 1107,
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
      "author": "readest",
      "repo": "readest",
      "avatar": "https://github.com/readest.png",
      "repo_link": "https://github.com/readest/readest",
      "desc": "Readest is a modern, feature-rich ebook reader designed for avid readers offering seamless cross-platform access, powerful tools, and an intuitive interface to elevate your reading experience.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 18021,
      "forks": 969,
      "added_stars": 494,
      "builtBy": [
        {
          "username": "chrox",
          "href": "https://github.com/chrox",
          "avatar": "https://avatars.githubusercontent.com/u/751535"
        },
        {
          "username": "WhiteHades",
          "href": "https://github.com/WhiteHades",
          "avatar": "https://avatars.githubusercontent.com/u/44260523"
        },
        {
          "username": "StepanSad",
          "href": "https://github.com/StepanSad",
          "avatar": "https://avatars.githubusercontent.com/u/93855876"
        },
        {
          "username": "houqp",
          "href": "https://github.com/houqp",
          "avatar": "https://avatars.githubusercontent.com/u/670302"
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
      "stars": 4676,
      "forks": 365,
      "added_stars": 4053,
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
      "author": "hashicorp",
      "repo": "vault",
      "avatar": "https://github.com/hashicorp.png",
      "repo_link": "https://github.com/hashicorp/vault",
      "desc": "A tool for secrets management, encryption as a service, and privileged access management",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 35081,
      "forks": 4600,
      "added_stars": 1270,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 163170,
      "forks": 14642,
      "added_stars": 3425,
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
      "author": "netbirdio",
      "repo": "netbird",
      "avatar": "https://github.com/netbirdio.png",
      "repo_link": "https://github.com/netbirdio/netbird",
      "desc": "Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and granular access controls.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 22932,
      "forks": 1116,
      "added_stars": 1745,
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
      "stars": 10767,
      "forks": 9987,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 42698,
      "forks": 7973,
      "added_stars": 674,
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
      "stars": 1922,
      "forks": 405,
      "added_stars": 993,
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
      "author": "charmbracelet",
      "repo": "bubbletea",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/bubbletea",
      "desc": "A powerful little TUI framework 🏗",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 39751,
      "forks": 1094,
      "added_stars": 1286,
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
      "author": "navidrome",
      "repo": "navidrome",
      "avatar": "https://github.com/navidrome.png",
      "repo_link": "https://github.com/navidrome/navidrome",
      "desc": "🎧☁️ Your Personal Streaming Service",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 19443,
      "forks": 1381,
      "added_stars": 766,
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
    },
    {
      "author": "steveyegge",
      "repo": "gastown",
      "avatar": "https://github.com/steveyegge.png",
      "repo_link": "https://github.com/steveyegge/gastown",
      "desc": "Gas Town - multi-agent workspace manager",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 10066,
      "forks": 800,
      "added_stars": 4799,
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
      "author": "juanfont",
      "repo": "headscale",
      "avatar": "https://github.com/juanfont.png",
      "repo_link": "https://github.com/juanfont/headscale",
      "desc": "An open source, self-hosted implementation of the Tailscale control server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 35701,
      "forks": 1915,
      "added_stars": 1291,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The to-do app to organize your life.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 3385,
      "forks": 316,
      "added_stars": 299,
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
      "stars": 10613,
      "forks": 311,
      "added_stars": 236,
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
      "author": "charmbracelet",
      "repo": "glow",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/glow",
      "desc": "Render markdown on the CLI, with pizzazz! 💅🏻",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 22960,
      "forks": 579,
      "added_stars": 613,
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
      "author": "asheshgoplani",
      "repo": "agent-deck",
      "avatar": "https://github.com/asheshgoplani.png",
      "repo_link": "https://github.com/asheshgoplani/agent-deck",
      "desc": "Terminal session manager for AI coding agents. One TUI for Claude, Gemini, OpenCode, Codex, and more.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 1008,
      "forks": 97,
      "added_stars": 463,
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
      "stars": 32198,
      "forks": 2963,
      "added_stars": 1193,
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
      "author": "ramonvermeulen",
      "repo": "whosthere",
      "avatar": "https://github.com/ramonvermeulen.png",
      "repo_link": "https://github.com/ramonvermeulen/whosthere",
      "desc": "Local Area Network discovery tool with an interactive Terminal User Interface (TUI) written in Go. Discover, explore, and understand your LAN in an intuitive way. Knock Knock.. who's there? 🚪",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 1929,
      "forks": 47,
      "added_stars": 1917,
      "builtBy": [
        {
          "username": "ramonvermeulen",
          "href": "https://github.com/ramonvermeulen",
          "avatar": "https://avatars.githubusercontent.com/u/18006244"
        },
        {
          "username": "Daviey",
          "href": "https://github.com/Daviey",
          "avatar": "https://avatars.githubusercontent.com/u/178214"
        },
        {
          "username": "GUIpsp",
          "href": "https://github.com/GUIpsp",
          "avatar": "https://avatars.githubusercontent.com/u/386686"
        },
        {
          "username": "tomwassenberg",
          "href": "https://github.com/tomwassenberg",
          "avatar": "https://avatars.githubusercontent.com/u/6782150"
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
      "stars": 19977,
      "forks": 634,
      "added_stars": 371,
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
      "author": "abiosoft",
      "repo": "colima",
      "avatar": "https://github.com/abiosoft.png",
      "repo_link": "https://github.com/abiosoft/colima",
      "desc": "Container runtimes on macOS (and Linux) with minimal setup",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 27089,
      "forks": 538,
      "added_stars": 680,
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
      "author": "helm",
      "repo": "helm",
      "avatar": "https://github.com/helm.png",
      "repo_link": "https://github.com/helm/helm",
      "desc": "The Kubernetes Package Manager",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 29538,
      "forks": 7490,
      "added_stars": 239,
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
      "author": "tailscale",
      "repo": "tailscale",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailscale",
      "desc": "The easiest, most secure way to use WireGuard and 2FA.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 28662,
      "forks": 2299,
      "added_stars": 1299,
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
      "stars": 3221,
      "forks": 438,
      "added_stars": 517,
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
      "author": "openai",
      "repo": "skills",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/skills",
      "desc": "Skills Catalog for Codex",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 9383,
      "forks": 526,
      "added_stars": 7482,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 9224,
      "forks": 912,
      "added_stars": 4846,
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 16240,
      "forks": 1168,
      "added_stars": 9582,
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
      "author": "NevaMind-AI",
      "repo": "memU",
      "avatar": "https://github.com/NevaMind-AI.png",
      "repo_link": "https://github.com/NevaMind-AI/memU",
      "desc": "Memory for 24/7 proactive agents like openclaw (moltbot, clawdbot).",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 9833,
      "forks": 749,
      "added_stars": 4918,
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
      "stars": 6639,
      "forks": 635,
      "added_stars": 2725,
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
      "author": "anthropics",
      "repo": "skills",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/skills",
      "desc": "Public repository for Agent Skills",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 73554,
      "forks": 7541,
      "added_stars": 24420,
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
      "author": "Blaizzy",
      "repo": "mlx-audio",
      "avatar": "https://github.com/Blaizzy.png",
      "repo_link": "https://github.com/Blaizzy/mlx-audio",
      "desc": "A text-to-speech (TTS), speech-to-text (STT) and speech-to-speech (STS) library built on Apple's MLX framework, providing efficient speech analysis on Apple Silicon.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 6026,
      "forks": 450,
      "added_stars": 2772,
      "builtBy": [
        {
          "username": "Blaizzy",
          "href": "https://github.com/Blaizzy",
          "avatar": "https://avatars.githubusercontent.com/u/23445657"
        },
        {
          "username": "lucasnewman",
          "href": "https://github.com/lucasnewman",
          "avatar": "https://avatars.githubusercontent.com/u/30198451"
        },
        {
          "username": "rudrankriyam",
          "href": "https://github.com/rudrankriyam",
          "avatar": "https://avatars.githubusercontent.com/u/30552772"
        },
        {
          "username": "beshkenadze",
          "href": "https://github.com/beshkenadze",
          "avatar": "https://avatars.githubusercontent.com/u/167288"
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
      "stars": 33526,
      "forks": 2236,
      "added_stars": 10163,
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
      "stars": 28560,
      "forks": 2341,
      "added_stars": 2844,
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
      "stars": 31120,
      "forks": 3841,
      "added_stars": 2209,
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
      "stars": 3123,
      "forks": 562,
      "added_stars": 1032,
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
      "stars": 96635,
      "forks": 14042,
      "added_stars": 8171,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 8121,
      "forks": 793,
      "added_stars": 3496,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 9473,
      "forks": 786,
      "added_stars": 1707,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 17497,
      "forks": 1337,
      "added_stars": 2311,
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
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 36600,
      "forks": 5922,
      "added_stars": 2356,
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
      "author": "microsoft",
      "repo": "RD-Agent",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/RD-Agent",
      "desc": "Research and development (R&D) is crucial for the enhancement of industrial productivity, especially in the AI era, where the core aspects of R&D are mainly focused on data and models. We are committed to automating these high-value generic R&D processes through R&D-Agent, which lets AI drive data-driven AI. 🔗https://aka.ms/RD-Agent-Tech-Report",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 11322,
      "forks": 1301,
      "added_stars": 977,
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
      "stars": 21722,
      "forks": 3097,
      "added_stars": 799,
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
      "title": "I Left My First Hackathon at 8 PM — And it Was a Massive Success!",
      "description": "Most hackathon stories start with \"We stayed up for 36 hours and drank 10 Red Bulls.\"  Mine is...",
      "url": "https://dev.to/maame-codes/i-left-my-first-hackathon-at-8-pm-and-it-was-a-massive-success-1hme",
      "tags": "hackathon, mlh, watercooler",
      "reactions": 60,
      "comments": 7,
      "reading_time": 4,
      "author": "maame-codes"
    },
    {
      "title": "Congrats to the \"New Year, New You\" Portfolio Challenge Winners and Runner-Ups!",
      "description": "The results are in! We are thrilled to announce the winners of the New Year, New You Portfolio...",
      "url": "https://dev.to/devteam/congrats-to-the-new-year-new-you-portfolio-challenge-winners-and-runner-ups-1l9h",
      "tags": "devchallenge, googleaichallenge, gemini, career",
      "reactions": 99,
      "comments": 33,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Get React out of my terminal: a case for headless mode",
      "description": "Code agents are fun. I use them every day. They fit neatly into the tools I already use: Bash,...",
      "url": "https://dev.to/antonmry/get-react-out-of-my-terminal-a-case-for-headless-mode-44ie",
      "tags": "agents, ai, cli, performance",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "antonmry"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-5a3g",
      "tags": "weeklyretro, discuss",
      "reactions": 35,
      "comments": 64,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Why did you become a Developer?",
      "description": "We all have our origin stories. Maybe you were born to become a programmer or you started off when...",
      "url": "https://dev.to/francistrdev/why-did-you-become-a-developer-57ea",
      "tags": "discuss, community, programming, mentalhealth",
      "reactions": 50,
      "comments": 51,
      "reading_time": 2,
      "author": "francistrdev"
    },
    {
      "title": "Hello World with Agent Skills",
      "description": "After hearing about Agent skills, I thought I would try it out and where better to start than Hello...",
      "url": "https://dev.to/daveu1983/hello-world-with-agent-skills-ngj",
      "tags": "ai, beginners, agents",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "daveu1983"
    },
    {
      "title": "Stop Rebuilding Modals: A Deep Dive into the <dialog> Element",
      "description": "Introduction   For more than a decade, building modals on the web meant re-implementing...",
      "url": "https://dev.to/anjab/stop-rebuilding-modals-a-deep-dive-into-the-element-gko",
      "tags": "webdev, frontend, a11y, html",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "anjab"
    },
    {
      "title": "A New Chapter: DEV is Joining Forces with Major League Hacking (MLH)",
      "description": "Hey everyone,  I have some massive news to share today, and I couldn't be more excited to finally...",
      "url": "https://dev.to/devteam/a-new-chapter-dev-is-joining-forces-with-major-league-hacking-mlh-3kfd",
      "tags": "news, devto, hackathon, discuss",
      "reactions": 379,
      "comments": 94,
      "reading_time": 6,
      "author": "ben"
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
      "title": "The Meter Was Always Running",
      "description": "On the All-In podcast (episode #261), Jason Calacanis revealed his AI agents cost $300 a day. Each....",
      "url": "https://dev.to/dannwaneri/the-meter-was-always-running-44c4",
      "tags": "ai, webdev, career, discuss",
      "reactions": 21,
      "comments": 16,
      "reading_time": 5,
      "author": "dannwaneri"
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
      "title": "Using The New Bridges of FreeBSD 15",
      "url": "https://blog.feld.me/posts/2026/02/using-new-bridges-freebsd-15/",
      "score": 2,
      "comments": 0,
      "tags": [
        "freebsd",
        "networking"
      ],
      "id": "dnyzhk"
    },
    {
      "title": "Efficient and ACID Compliant Vector Search Indexes in Firebolt",
      "url": "https://www.firebolt.io/blog/technical-deep-dive-efficient-and-acid-compliant-vector-search-indexes-in-firebolt",
      "score": -1,
      "comments": 0,
      "tags": [
        "databases"
      ],
      "id": "qhoikt"
    },
    {
      "title": "Using nsnotifyd with a PowerDNS Secondary",
      "url": "https://blog.feld.me/posts/2026/02/nsnotifyd-with-powerdns-secondary/",
      "score": 2,
      "comments": 1,
      "tags": [
        "networking"
      ],
      "id": "5rrpem"
    },
    {
      "title": "Fast starting Clojure runtime built with GraalVM native-image + Crema",
      "url": "https://github.com/borkdude/cream",
      "score": 4,
      "comments": 0,
      "tags": [
        "clojure",
        "programming"
      ],
      "id": "bysfi9"
    },
    {
      "title": "Official specification and reference code for Fast Lightweight Online Encryption (FLOE)",
      "url": "https://github.com/Snowflake-Labs/floe-specification",
      "score": 3,
      "comments": 0,
      "tags": [
        "cryptography"
      ],
      "id": "biattx"
    },
    {
      "title": "jit: A header-only, cross-platform JIT compiler library in C. Targets x86-32, x86-64, ARM32 and ARM64",
      "url": "https://github.com/abdimoallim/jit",
      "score": 7,
      "comments": 1,
      "tags": [
        "c",
        "compilers",
        "programming"
      ],
      "id": "zbirtc"
    },
    {
      "title": "Simulating fusion reactors in C++",
      "url": "https://www.youtube.com/watch?v=IaiYxnLrs_8",
      "score": 1,
      "comments": 0,
      "tags": [
        "c++",
        "programming",
        "video"
      ],
      "id": "3wi2ww"
    },
    {
      "title": "codespelunker - CLI code search tool that understands code structure and ranks results by relevance. No indexing required",
      "url": "https://github.com/boyter/cs",
      "score": 18,
      "comments": 3,
      "tags": [
        "go",
        "programming"
      ],
      "id": "nddlyy"
    },
    {
      "title": "Comparing C/C++ unity build with regular build on a large codebase (2024)",
      "url": "https://hereket.com/posts/cpp-unity-compile-inkscape/",
      "score": 3,
      "comments": 0,
      "tags": [
        "c",
        "c++",
        "performance"
      ],
      "id": "0eqbn3"
    },
    {
      "title": "Swift Import Declarations (2019)",
      "url": "https://nshipster.com/import/",
      "score": 2,
      "comments": 0,
      "tags": [
        "swift"
      ],
      "id": "zyv3xz"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "saeedesmaili",
      "descendants": 231,
      "id": 47113728,
      "kids": [
        47119087,
        47114207,
        47115874,
        47118686,
        47114448,
        47114494,
        47115831,
        47114413,
        47114324,
        47116654,
        47116662,
        47114506,
        47118663,
        47117263,
        47118580,
        47117672,
        47118861,
        47116446,
        47114943,
        47114910,
        47117138,
        47115351,
        47116507,
        47116739,
        47114909,
        47114308,
        47114897,
        47117904,
        47114490,
        47114366,
        47117401,
        47117258,
        47114935,
        47116762,
        47117303,
        47114708,
        47116481,
        47114761,
        47116378,
        47114663,
        47114563,
        47116000,
        47118746,
        47114752,
        47115198,
        47115312,
        47114459,
        47115682,
        47114333,
        47116136,
        47114584,
        47115308,
        47116129,
        47117367,
        47115223,
        47114529,
        47117575,
        47115665,
        47117295,
        47114723,
        47114527,
        47114496,
        47116283,
        47116060,
        47115224,
        47115959,
        47114893,
        47116631,
        47115410
      ],
      "score": 937,
      "time": 1771787551,
      "title": "I built Timeframe, our family e-paper dashboard",
      "type": "story",
      "url": "https://hawksley.org/2026/02/17/timeframe.html"
    },
    {
      "by": "modinfo",
      "descendants": 29,
      "id": 47117459,
      "kids": [
        47118208,
        47118997,
        47118581,
        47118528,
        47118875,
        47118339,
        47118292,
        47119022,
        47118346,
        47118586,
        47118236,
        47117700,
        47118830,
        47118468
      ],
      "score": 111,
      "time": 1771814956,
      "title": "The JavaScript Oxidation Compiler",
      "type": "story",
      "url": "https://oxc.rs/"
    },
    {
      "by": "MilkMp",
      "descendants": 69,
      "id": 47114530,
      "kids": [
        47118696,
        47118374,
        47118427,
        47117745,
        47115651,
        47118378,
        47118086,
        47116383,
        47117088,
        47116786,
        47115529,
        47118408,
        47115472,
        47116801,
        47115624,
        47116028,
        47117618,
        47116548,
        47115584,
        47118949,
        47115699,
        47116165,
        47115974
      ],
      "score": 277,
      "text": "A structured archive of CIA World Factbook data spanning 1990–2025.\nIt currently includes:\n36 editions\n281 entities\n~1.06M parsed fields\nfull-text + boolean search\ncountry&#x2F;year comparisons\nmap&#x2F;trend&#x2F;ranking analysis views\nCSV&#x2F;XLSX&#x2F;PDF export\nThe goal is to preserve long-horizon public-domain government data and make cross-year analysis practical.\nLive: <a href=\"https:&#x2F;&#x2F;cia-factbook-archive.fly.dev\" rel=\"nofollow\">https:&#x2F;&#x2F;cia-factbook-archive.fly.dev</a>\nAbout&#x2F;method details: <a href=\"https:&#x2F;&#x2F;cia-factbook-archive.fly.dev&#x2F;about\" rel=\"nofollow\">https:&#x2F;&#x2F;cia-factbook-archive.fly.dev&#x2F;about</a>\nData source is the CIA World Factbook (public domain).\nNot affiliated with the CIA or U.S. Government.",
      "time": 1771793423,
      "title": "Show HN: CIA World Factbook Archive (1990–2025), searchable and exportable",
      "type": "story",
      "url": "https://cia-factbook-archive.fly.dev/"
    },
    {
      "by": "jonbaer",
      "descendants": 7,
      "id": 47078112,
      "kids": [
        47119085,
        47119090,
        47118984,
        47118920,
        47118967
      ],
      "score": 33,
      "time": 1771529820,
      "title": "0 A.D. Release 28: Boiorix",
      "type": "story",
      "url": "https://play0ad.com/new-release-0-a-d-release-28-boiorix/"
    },
    {
      "by": "Gooblebrai",
      "descendants": 214,
      "id": 47113618,
      "kids": [
        47118568,
        47117215,
        47118328,
        47115638,
        47117418,
        47117187,
        47118075,
        47117617,
        47118840,
        47118878,
        47116800,
        47115226,
        47116965,
        47115166,
        47114840,
        47118982,
        47117469,
        47117853,
        47115107,
        47115431,
        47117402,
        47115859,
        47117161,
        47117357,
        47115033,
        47116893,
        47115225,
        47114899,
        47118527,
        47115981,
        47117360,
        47114788,
        47114874,
        47116242,
        47116822,
        47115277,
        47114953,
        47116293,
        47116839,
        47115484,
        47115426,
        47115792,
        47114832,
        47116245,
        47115120,
        47114781,
        47114844,
        47115282,
        47116142,
        47116452,
        47116182,
        47118130
      ],
      "score": 364,
      "time": 1771786600,
      "title": "Loops is a federated, open-source TikTok",
      "type": "story",
      "url": "https://joinloops.org/"
    },
    {
      "by": "jstanley",
      "descendants": 36,
      "id": 47067031,
      "kids": [
        47119097,
        47117954,
        47118309,
        47118361,
        47118975,
        47117809,
        47118770,
        47119073,
        47118937,
        47118572,
        47117799,
        47118437,
        47117922
      ],
      "score": 174,
      "time": 1771451946,
      "title": "My journey to the microwave alternate timeline",
      "type": "story",
      "url": "https://www.lesswrong.com/posts/8m6AM5qtPMjgTkEeD/my-journey-to-the-microwave-alternate-timeline"
    },
    {
      "by": "slederer",
      "id": 47118990,
      "score": 1,
      "time": 1771830080,
      "title": "Bitmovin (YC S15) Is Hiring Interns in AI for Summer 2026 in Austria",
      "type": "job",
      "url": "https://bitmovin.com/careers/8023403002/"
    },
    {
      "by": "matt_d",
      "descendants": 7,
      "id": 47066446,
      "kids": [
        47117982,
        47118424,
        47118994,
        47118405
      ],
      "score": 36,
      "time": 1771449009,
      "title": "How to train your program verifier",
      "type": "story",
      "url": "https://risemsr.github.io/blog/2026-02-16-halleyyoung-a3/"
    },
    {
      "by": "srigi",
      "descendants": 426,
      "id": 47115805,
      "kids": [
        47117825,
        47116205,
        47117704,
        47117345,
        47116427,
        47116892,
        47116243,
        47116643,
        47117130,
        47116685,
        47116451,
        47118888,
        47117110,
        47116255,
        47118905,
        47116915,
        47118783,
        47116756,
        47117227,
        47118603,
        47118847,
        47117113,
        47116152,
        47117202,
        47117312,
        47118521,
        47118667,
        47118510,
        47119011,
        47116469,
        47116566,
        47117042,
        47116219,
        47116430,
        47117212,
        47117436,
        47116564,
        47116262,
        47118147,
        47117645,
        47116894,
        47116193,
        47116521,
        47117347,
        47117013,
        47118673,
        47117968,
        47118014,
        47117917,
        47118848,
        47116138,
        47116678,
        47116300,
        47116008,
        47116538,
        47116332,
        47117319,
        47117774,
        47116143,
        47118013,
        47116311,
        47116532,
        47117508,
        47117022,
        47116625,
        47116272,
        47118501,
        47117103,
        47117341,
        47117279,
        47117641,
        47117768,
        47118223,
        47118221,
        47118156,
        47116628,
        47116863,
        47116749,
        47116192,
        47117286,
        47117817,
        47117192,
        47116259,
        47118220,
        47118133,
        47116498,
        47116264,
        47116109,
        47116835,
        47116299,
        47116733,
        47117095
      ],
      "score": 517,
      "time": 1771801675,
      "title": "Google restricting Google AI Pro/Ultra subscribers for using OpenClaw",
      "type": "story",
      "url": "https://discuss.ai.google.dev/t/account-restricted-without-warning-google-ai-ultra-oauth-via-openclaw/122778"
    },
    {
      "by": "digital55",
      "descendants": 36,
      "id": 47113796,
      "kids": [
        47118858,
        47115467,
        47113797,
        47118377,
        47116979,
        47116929,
        47116399,
        47118743,
        47115298,
        47118489,
        47116818,
        47115526
      ],
      "score": 185,
      "time": 1771788081,
      "title": "Six Math Essentials",
      "type": "story",
      "url": "https://terrytao.wordpress.com/2026/02/16/six-math-essentials/"
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
      "reactions": 99,
      "comments": 33,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Who Said What to Whom",
      "description": "On February 20th, a developer posted a screenshot on X.  He had submitted an error message to Claude...",
      "url": "https://dev.to/dannwaneri/who-said-what-to-whom-5914",
      "tags": "ai, webdev, career, discuss",
      "reactions": 19,
      "comments": 11,
      "reading_time": 4,
      "author": "dannwaneri"
    },
    {
      "title": "How Many Direct Reports Should an Engineering Manager Have?",
      "description": "The research says 5-9. Reality is messier.     Every engineering manager eventually asks this...",
      "url": "https://dev.to/amy_vereda_ai/how-many-direct-reports-should-an-engineering-manager-have-39la",
      "tags": "discuss, career, management",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "amy_vereda_ai"
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
      "title": "Why You're Not Trusted With Bigger Projects Yet",
      "description": "After 25 years in software engineering, here's the hard truth about why senior devs don't hand junior and mid-level engineers the big stuff — and exactly what to change.",
      "url": "https://dev.to/lessonsfromproduction/why-youre-not-trusted-with-bigger-projects-yet-93f",
      "tags": "career, beginners, productivity, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "lessonsfromproduction"
    },
    {
      "title": "DSA, Web Dev, or AI — What Should Beginners REALLY Learn First?",
      "description": "Introduction: The Beginner’s Confusion   If you’re new to tech, you’ve probably heard these...",
      "url": "https://dev.to/debuggingwithsim/dsa-web-dev-or-ai-what-should-beginners-really-learn-first-32dg",
      "tags": "beginners, career, learning, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "debuggingwithsim"
    },
    {
      "title": "The Meter Was Always Running",
      "description": "On the All-In podcast (episode #261), Jason Calacanis revealed his AI agents cost $300 a day. Each....",
      "url": "https://dev.to/dannwaneri/the-meter-was-always-running-44c4",
      "tags": "ai, webdev, career, discuss",
      "reactions": 21,
      "comments": 16,
      "reading_time": 5,
      "author": "dannwaneri"
    },
    {
      "title": "Por que estou migrando da Roblox para o desenvolvimento web",
      "description": "Introdução   Conheci a Roblox quando tinha por volta de 7 anos. Hoje tenho 16 e faço 17 este...",
      "url": "https://dev.to/cayasde/por-que-estou-migrando-da-roblox-para-o-desenvolvimento-web-48h1",
      "tags": "career, devjournal, gamedev, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "cayasde"
    },
    {
      "title": "Why Your \"Clean Code\" is Actually Unmaintainable Rubbish",
      "description": "The ratio of time spent reading code versus writing it can reach 7:1 or even higher. Whether you’re...",
      "url": "https://dev.to/oyminirole/why-your-clean-code-is-actually-unmaintainable-rubbish-eoc",
      "tags": "programming, cleancode, career, softwaredevelopment",
      "reactions": 2,
      "comments": 0,
      "reading_time": 6,
      "author": "oyminirole"
    },
    {
      "title": "A vantagem competitiva de um subdomínio principal não é necessariamente técnica",
      "description": "Eu sei, parece contraintuitivo. A gente passa anos estudando linguagens, frameworks, padrões de...",
      "url": "https://dev.to/fabiodeandrade/a-vantagem-competitiva-de-um-subdominio-principal-nao-e-necessariamente-tecnica-2j5e",
      "tags": "architecture, career, softwareengineering, systemdesign",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "fabiodeandrade"
    }
  ]
}
```

