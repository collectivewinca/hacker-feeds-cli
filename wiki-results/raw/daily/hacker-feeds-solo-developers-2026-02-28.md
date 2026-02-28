# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-02-28 06:56:57 UTC

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
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skills and subagents, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2690,
      "added_stars": 1607,
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
      "author": "cloudflare",
      "repo": "agents",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/agents",
      "desc": "Build and deploy AI Agents on Cloudflare",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 437,
      "added_stars": 1104,
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
      "author": "semperai",
      "repo": "amica",
      "avatar": "https://github.com/semperai.png",
      "repo_link": "https://github.com/semperai/amica",
      "desc": "Amica is an open source interface for interactive communication with 3D characters with voice synthesis and speech recognition.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 241,
      "added_stars": 99,
      "builtBy": [
        {
          "username": "kasumi-1",
          "href": "https://github.com/kasumi-1",
          "avatar": "https://avatars.githubusercontent.com/u/90275229"
        },
        {
          "username": "flukexp",
          "href": "https://github.com/flukexp",
          "avatar": "https://avatars.githubusercontent.com/u/108891942"
        },
        {
          "username": "slowsynapse",
          "href": "https://github.com/slowsynapse",
          "avatar": "https://avatars.githubusercontent.com/u/33094058"
        },
        {
          "username": "danyyil-pelekhatyi",
          "href": "https://github.com/danyyil-pelekhatyi",
          "avatar": "https://avatars.githubusercontent.com/u/5165046"
        },
        {
          "username": "snowyu",
          "href": "https://github.com/snowyu",
          "avatar": "https://avatars.githubusercontent.com/u/327887"
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
      "stars": 0,
      "forks": 1861,
      "added_stars": 3449,
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
      "author": "seerr-team",
      "repo": "seerr",
      "avatar": "https://github.com/seerr-team.png",
      "repo_link": "https://github.com/seerr-team/seerr",
      "desc": "Open-source media request and discovery manager for Jellyfin, Plex, and Emby.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 648,
      "added_stars": 393,
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
      "author": "siteboon",
      "repo": "claudecodeui",
      "avatar": "https://github.com/siteboon.png",
      "repo_link": "https://github.com/siteboon/claudecodeui",
      "desc": "Use Claude Code, Cursor CLI or Codex on mobile and web with CloudCLI (aka Claude Code UI). CloudCLI is a free open source webui/GUI that helps you manage your Claude Code session and projects remotely",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 926,
      "added_stars": 936,
      "builtBy": [
        {
          "username": "viper151",
          "href": "https://github.com/viper151",
          "avatar": "https://avatars.githubusercontent.com/u/7479045"
        },
        {
          "username": "blackmammoth",
          "href": "https://github.com/blackmammoth",
          "avatar": "https://avatars.githubusercontent.com/u/118998054"
        },
        {
          "username": "EricBlanquer",
          "href": "https://github.com/EricBlanquer",
          "avatar": "https://avatars.githubusercontent.com/u/1058958"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "unsystemizer",
          "href": "https://github.com/unsystemizer",
          "avatar": "https://avatars.githubusercontent.com/u/13134193"
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
      "forks": 580,
      "added_stars": 5349,
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
          "username": "paulrobello",
          "href": "https://github.com/paulrobello",
          "avatar": "https://avatars.githubusercontent.com/u/955011"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "L1nusB",
          "href": "https://github.com/L1nusB",
          "avatar": "https://avatars.githubusercontent.com/u/47142578"
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
      "stars": 0,
      "forks": 2191,
      "added_stars": 544,
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
      "author": "stan-smith",
      "repo": "FossFLOW",
      "avatar": "https://github.com/stan-smith.png",
      "repo_link": "https://github.com/stan-smith/FossFLOW",
      "desc": "Make beautiful isometric infrastructure diagrams",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1222,
      "added_stars": 1330,
      "builtBy": [
        {
          "username": "markmanx",
          "href": "https://github.com/markmanx",
          "avatar": "https://avatars.githubusercontent.com/u/1769678"
        },
        {
          "username": "stan-smith",
          "href": "https://github.com/stan-smith",
          "avatar": "https://avatars.githubusercontent.com/u/37673863"
        },
        {
          "username": "semantic-release-bot",
          "href": "https://github.com/semantic-release-bot",
          "avatar": "https://avatars.githubusercontent.com/u/32174276"
        },
        {
          "username": "abhinav-1305",
          "href": "https://github.com/abhinav-1305",
          "avatar": "https://avatars.githubusercontent.com/u/113254225"
        },
        {
          "username": "Abrar74774",
          "href": "https://github.com/Abrar74774",
          "avatar": "https://avatars.githubusercontent.com/u/52873468"
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
      "stars": 0,
      "forks": 390,
      "added_stars": 4392,
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
      "stars": 0,
      "forks": 14698,
      "added_stars": 3300,
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
      "author": "steipete",
      "repo": "wacli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/wacli",
      "desc": "WhatsApp CLI",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 96,
      "added_stars": 382,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "plattenschieber",
          "href": "https://github.com/plattenschieber",
          "avatar": "https://avatars.githubusercontent.com/u/1213794"
        },
        {
          "username": "zats",
          "href": "https://github.com/zats",
          "avatar": "https://avatars.githubusercontent.com/u/2688806"
        },
        {
          "username": "nitinalabur",
          "href": "https://github.com/nitinalabur",
          "avatar": "https://avatars.githubusercontent.com/u/1986214"
        },
        {
          "username": "ramarivera",
          "href": "https://github.com/ramarivera",
          "avatar": "https://avatars.githubusercontent.com/u/7547875"
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
      "stars": 0,
      "forks": 105,
      "added_stars": 533,
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
          "username": "mtparet",
          "href": "https://github.com/mtparet",
          "avatar": "https://avatars.githubusercontent.com/u/754770"
        },
        {
          "username": "amir-jakoby",
          "href": "https://github.com/amir-jakoby",
          "avatar": "https://avatars.githubusercontent.com/u/7036401"
        }
      ]
    },
    {
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1486,
      "added_stars": 1131,
      "builtBy": [
        {
          "username": "xpzouying",
          "href": "https://github.com/xpzouying",
          "avatar": "https://avatars.githubusercontent.com/u/3946563"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tanxxjun321",
          "href": "https://github.com/tanxxjun321",
          "avatar": "https://avatars.githubusercontent.com/u/7806992"
        },
        {
          "username": "BiboyQG",
          "href": "https://github.com/BiboyQG",
          "avatar": "https://avatars.githubusercontent.com/u/125724218"
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
      "stars": 0,
      "forks": 448,
      "added_stars": 1171,
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
          "username": "touwaeriol",
          "href": "https://github.com/touwaeriol",
          "avatar": "https://avatars.githubusercontent.com/u/52620633"
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
      "stars": 0,
      "forks": 445,
      "added_stars": 543,
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
      "author": "netbirdio",
      "repo": "netbird",
      "avatar": "https://github.com/netbirdio.png",
      "repo_link": "https://github.com/netbirdio/netbird",
      "desc": "Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and granular access controls.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1137,
      "added_stars": 1862,
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
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2979,
      "added_stars": 1224,
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
      "author": "abiosoft",
      "repo": "colima",
      "avatar": "https://github.com/abiosoft.png",
      "repo_link": "https://github.com/abiosoft/colima",
      "desc": "Container runtimes on macOS (and Linux) with minimal setup",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 543,
      "added_stars": 732,
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
      "author": "charmbracelet",
      "repo": "glow",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/glow",
      "desc": "Render markdown on the CLI, with pizzazz! 💅🏻",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 588,
      "added_stars": 701,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8003,
      "added_stars": 675,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The to-do app to organize your life.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 326,
      "added_stars": 325,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 641,
      "added_stars": 630,
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
      "author": "juanfont",
      "repo": "headscale",
      "avatar": "https://github.com/juanfont.png",
      "repo_link": "https://github.com/juanfont/headscale",
      "desc": "An open source, self-hosted implementation of the Tailscale control server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1930,
      "added_stars": 1376,
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
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2546,
      "added_stars": 2059,
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
      "author": "grafana",
      "repo": "mcp-grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/mcp-grafana",
      "desc": "MCP server for Grafana",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 278,
      "added_stars": 245,
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
      "author": "k3s-io",
      "repo": "k3s",
      "avatar": "https://github.com/k3s-io.png",
      "repo_link": "https://github.com/k3s-io/k3s",
      "desc": "Lightweight Kubernetes",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2603,
      "added_stars": 353,
      "builtBy": [
        {
          "username": "brandond",
          "href": "https://github.com/brandond",
          "avatar": "https://avatars.githubusercontent.com/u/370103"
        },
        {
          "username": "erikwilson",
          "href": "https://github.com/erikwilson",
          "avatar": "https://avatars.githubusercontent.com/u/1999874"
        },
        {
          "username": "dereknola",
          "href": "https://github.com/dereknola",
          "avatar": "https://avatars.githubusercontent.com/u/11727736"
        },
        {
          "username": "ibuildthecloud",
          "href": "https://github.com/ibuildthecloud",
          "avatar": "https://avatars.githubusercontent.com/u/1754002"
        },
        {
          "username": "galal-hussein",
          "href": "https://github.com/galal-hussein",
          "avatar": "https://avatars.githubusercontent.com/u/3309968"
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
      "forks": 5000,
      "added_stars": 1045,
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
      "author": "crossplane",
      "repo": "crossplane",
      "avatar": "https://github.com/crossplane.png",
      "repo_link": "https://github.com/crossplane/crossplane",
      "desc": "The Cloud Native Control Plane",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1143,
      "added_stars": 131,
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
      "author": "hashicorp",
      "repo": "terraform-provider-aws",
      "avatar": "https://github.com/hashicorp.png",
      "repo_link": "https://github.com/hashicorp/terraform-provider-aws",
      "desc": "The AWS Provider enables Terraform to manage AWS resources.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 9999,
      "added_stars": 80,
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
      "author": "hashicorp",
      "repo": "vault",
      "avatar": "https://github.com/hashicorp.png",
      "repo_link": "https://github.com/hashicorp/vault",
      "desc": "A tool for secrets management, encryption as a service, and privileged access management",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4606,
      "added_stars": 1235,
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
      "stars": 0,
      "forks": 568,
      "added_stars": 7982,
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
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 435,
      "added_stars": 6185,
      "builtBy": [
        {
          "username": "burtenshaw",
          "href": "https://github.com/burtenshaw",
          "avatar": "https://avatars.githubusercontent.com/u/19620375"
        },
        {
          "username": "evalstate",
          "href": "https://github.com/evalstate",
          "avatar": "https://avatars.githubusercontent.com/u/1936278"
        },
        {
          "username": "abidlabs",
          "href": "https://github.com/abidlabs",
          "avatar": "https://avatars.githubusercontent.com/u/1778297"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "Madhu3456",
          "href": "https://github.com/Madhu3456",
          "avatar": "https://avatars.githubusercontent.com/u/108209860"
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
      "stars": 0,
      "forks": 1414,
      "added_stars": 8810,
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
        },
        {
          "username": "matiasinsaurralde",
          "href": "https://github.com/matiasinsaurralde",
          "avatar": "https://avatars.githubusercontent.com/u/20110"
        },
        {
          "username": "mooncos",
          "href": "https://github.com/mooncos",
          "avatar": "https://avatars.githubusercontent.com/u/11057853"
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
      "stars": 0,
      "forks": 826,
      "added_stars": 6258,
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
          "username": "ankaisen",
          "href": "https://github.com/ankaisen",
          "avatar": "https://avatars.githubusercontent.com/u/51148505"
        },
        {
          "username": "Koimiao-zz",
          "href": "https://github.com/Koimiao-zz",
          "avatar": "https://avatars.githubusercontent.com/u/224523934"
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
      "stars": 0,
      "forks": 2266,
      "added_stars": 10341,
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
      "stars": 0,
      "forks": 3864,
      "added_stars": 2324,
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
      "stars": 0,
      "forks": 570,
      "added_stars": 1059,
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
      "author": "MoonshotAI",
      "repo": "kimi-cli",
      "avatar": "https://github.com/MoonshotAI.png",
      "repo_link": "https://github.com/MoonshotAI/kimi-cli",
      "desc": "Kimi Code CLI is your next CLI agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 661,
      "added_stars": 2824,
      "builtBy": [
        {
          "username": "stdrc",
          "href": "https://github.com/stdrc",
          "avatar": "https://avatars.githubusercontent.com/u/5317095"
        },
        {
          "username": "RealKai42",
          "href": "https://github.com/RealKai42",
          "avatar": "https://avatars.githubusercontent.com/u/44634134"
        },
        {
          "username": "xxchan",
          "href": "https://github.com/xxchan",
          "avatar": "https://avatars.githubusercontent.com/u/37948597"
        },
        {
          "username": "Epsirom",
          "href": "https://github.com/Epsirom",
          "avatar": "https://avatars.githubusercontent.com/u/3744223"
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
      "forks": 2355,
      "added_stars": 2871,
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
      "author": "Shubhamsaboo",
      "repo": "awesome-llm-apps",
      "avatar": "https://github.com/Shubhamsaboo.png",
      "repo_link": "https://github.com/Shubhamsaboo/awesome-llm-apps",
      "desc": "Collection of awesome LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and opensource models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 14255,
      "added_stars": 7918,
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
          "username": "onestardao",
          "href": "https://github.com/onestardao",
          "avatar": "https://avatars.githubusercontent.com/u/212544643"
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
      "forks": 811,
      "added_stars": 2226,
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
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6031,
      "added_stars": 2641,
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
      "author": "taylorwilsdon",
      "repo": "google_workspace_mcp",
      "avatar": "https://github.com/taylorwilsdon.png",
      "repo_link": "https://github.com/taylorwilsdon/google_workspace_mcp",
      "desc": "Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search & Drive with AI - Comprehensive Google Workspace / G Suite MCP Server & CLI Tool",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 478,
      "added_stars": 353,
      "builtBy": [
        {
          "username": "taylorwilsdon",
          "href": "https://github.com/taylorwilsdon",
          "avatar": "https://avatars.githubusercontent.com/u/6508528"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shawnzhu",
          "href": "https://github.com/shawnzhu",
          "avatar": "https://avatars.githubusercontent.com/u/1059372"
        },
        {
          "username": "cfdude",
          "href": "https://github.com/cfdude",
          "avatar": "https://avatars.githubusercontent.com/u/1118320"
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
      "forks": 836,
      "added_stars": 3500,
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
          "username": "dicksontsai",
          "href": "https://github.com/dicksontsai",
          "avatar": "https://avatars.githubusercontent.com/u/3757768"
        },
        {
          "username": "kencheeto",
          "href": "https://github.com/kencheeto",
          "avatar": "https://avatars.githubusercontent.com/u/279406"
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
      "stars": 0,
      "forks": 959,
      "added_stars": 341,
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
          "username": "hteichmann-strato",
          "href": "https://github.com/hteichmann-strato",
          "avatar": "https://avatars.githubusercontent.com/u/151167293"
        },
        {
          "username": "major",
          "href": "https://github.com/major",
          "avatar": "https://avatars.githubusercontent.com/u/89910"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "stars": 0,
      "forks": 1381,
      "added_stars": 3061,
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
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5941,
      "added_stars": 2433,
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
          "username": "ZeroAct",
          "href": "https://github.com/ZeroAct",
          "avatar": "https://avatars.githubusercontent.com/u/46982469"
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
      "stars": 0,
      "forks": 1307,
      "added_stars": 985,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "[AI] Renderify: Executing LLM-generated JSX/TSX directly in the browser, no build step",
      "url": "https://github.com/webllm/renderify",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-26T17:41:12.000Z"
    },
    {
      "title": "[AI] Getting Started with the Vercel AI SDK in Node.js",
      "url": "https://thecodebarbarian.com/getting-started-with-the-vercel-ai-sdk-in-nodejs.html",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-02-24T16:07:07.000Z"
    },
    {
      "title": "From instanceof to Error.isError: safer error checking in JavaScript",
      "url": "https://allthingssmitty.com/2026/02/23/from-instanceof-to-error-iserror-safer-error-checking-in-javascript/",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-02-24T13:34:27.000Z"
    },
    {
      "title": "[AI] swagent – Convert OpenAPI specs to llms.txt",
      "url": "https://swagent.dev",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-24T02:57:51.000Z"
    },
    {
      "title": "TypeScript “object” doesn’t make sense",
      "url": "https://medium.com/ekino-france/typescript-object-doesnt-make-sense-fc95b6c663f9",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-02-23T14:10:53.000Z"
    },
    {
      "title": "Coaction v1.0 – Effortless multithreading for high-performance web apps",
      "url": "https://github.com/unadlib/coaction",
      "upvotes": "1",
      "comments": "1",
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
      "title": "[AI] Nice try dear AI. Now let's talk about production.",
      "url": "https://krasimirtsonev.com/blog/article/nice-try-dear-ai-now-lets-talk-production",
      "upvotes": "2",
      "comments": "2",
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
      "title": "What was your win this week?!",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-5h33",
      "tags": "weeklyretro, discuss",
      "reactions": 32,
      "comments": 30,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "The Token Economy",
      "description": "In 2161, time is money. Literally.  When you are born, a clock starts on your arm. One year. When it...",
      "url": "https://dev.to/dannwaneri/the-token-economy-3cd9",
      "tags": "ai, webdev, career, discuss",
      "reactions": 45,
      "comments": 38,
      "reading_time": 4,
      "author": "dannwaneri"
    },
    {
      "title": "Happening Now: DEV Weekend Challenge!! Submissions due March 2 at 7:59am UTC.",
      "description": "Good morning! Good afternoon! Good Evening!   Welcome to our first DEV Weekend Challenge, a short...",
      "url": "https://dev.to/devteam/happening-now-dev-weekend-challenge-submissions-due-march-2-at-759am-utc-5fg8",
      "tags": "devchallenge, weekendchallenge, webdev, ai",
      "reactions": 138,
      "comments": 25,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "AI Ate the Homework: What Communities Are Actually For Now",
      "description": "Communities used to be where you went to ask questions and get help. Now that AI can answer most of those questions, what are communities actually for? Here's what the shift means for community builders and members.",
      "url": "https://dev.to/bekahhw/ai-ate-the-homework-what-communities-are-actually-for-now-11hi",
      "tags": "ai, community",
      "reactions": 6,
      "comments": 2,
      "reading_time": 6,
      "author": "bekahhw"
    },
    {
      "title": "Join the \"Built with Google Gemini: Writing Challenge\" Presented by Major League Hacking (MLH). Win a Raspberry Pi AI Kit!",
      "description": "Last week, we announced that DEV has joined Major League Hacking. To kick things off, we're launching...",
      "url": "https://dev.to/devteam/join-the-built-with-google-gemini-writing-challenge-presented-by-major-league-hacking-mlh-win-17pk",
      "tags": "devchallenge, geminireflections, gemini, ai",
      "reactions": 101,
      "comments": 28,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Upgraded embed experience and new embed types in DEV posts",
      "description": "When you paste a URL into your DEV post, if it is embeddable, you now get a handy little tooltip to...",
      "url": "https://dev.to/devteam/upgraded-embed-experience-and-new-embed-types-in-dev-posts-1kho",
      "tags": "news, devto, forem",
      "reactions": 41,
      "comments": 3,
      "reading_time": 1,
      "author": "jonmarkgo"
    },
    {
      "title": "Using tox to Test a Django App Across Multiple Django Versions",
      "description": "Recently, I developed a reusable Django app django-clearplaintext for normalizing plain text in...",
      "url": "https://dev.to/djangotricks/using-tox-to-test-a-django-app-across-multiple-django-versions-28g9",
      "tags": "django, python, tox, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 7,
      "author": "djangotricks"
    },
    {
      "title": "Why I stopped overthinking the Livewire vs. Inertia debate (and how to pick one)",
      "description": "The Laravel ecosystem is spoiled for choice. When building a modern web app, the first big decision...",
      "url": "https://dev.to/hamizulfaiz/why-i-stopped-overthinking-the-livewire-vs-inertia-debate-and-how-to-pick-one-5h67",
      "tags": "webdev, livewire, inertiajs, laravel",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "hamizulfaiz"
    },
    {
      "title": "Data Pseudonymization: When You Can't Just Delete Everything",
      "description": "Here's a problem I run into all the time: you need to track that \"cust_47832\" who made a purchase...",
      "url": "https://dev.to/manualwise/data-pseudonymization-when-you-cant-just-delete-everything-4goa",
      "tags": "data, dataengineering",
      "reactions": 2,
      "comments": 0,
      "reading_time": 9,
      "author": "manualwise"
    },
    {
      "title": "How Do You Actually Know If AI Is Working On Your Team?",
      "description": "Productivity percentages and acceptance rates don't tell you much. Here's a more concrete metric: AI functional coverage.",
      "url": "https://dev.to/dionysos/how-do-you-actually-know-if-ai-is-working-on-your-team-2b02",
      "tags": "ai, engineering, productivity, dx",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "dionysos"
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
      "title": "Can you compile WINE's notepad.exe for Windows?",
      "url": "https://aus.social/@voltagex/116145579055338126",
      "score": 1,
      "comments": 0,
      "tags": [
        "linux",
        "windows"
      ],
      "id": "0lulpp"
    },
    {
      "title": "The inner workings of TCP zero-copy",
      "url": "https://blog.tohojo.dk/2026/02/the-inner-workings-of-tcp-zero-copy.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "linux",
        "networking"
      ],
      "id": "9xieqh"
    },
    {
      "title": "What's cooking in git.git (Feb 2026, #11)",
      "url": "https://lore.kernel.org/git/xmqq8qcdof3f.fsf@gitster.g/",
      "score": 3,
      "comments": 0,
      "tags": [
        "vcs"
      ],
      "id": "moy2ld"
    },
    {
      "title": "Offlining a Live Game With .NET Native AOT",
      "url": "https://sephnewman.substack.com/p/offlining-a-live-game-with-net-native",
      "score": 2,
      "comments": 0,
      "tags": [
        "dotnet",
        "games"
      ],
      "id": "mhifoh"
    },
    {
      "title": "An AI agent coding skeptic tries AI agent coding, in excessive detail",
      "url": "https://minimaxir.com/2026/02/ai-agent-coding/",
      "score": 5,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "ykwb2z"
    },
    {
      "title": "elementary OS 8.1.1 Available Now",
      "url": "https://blog.elementary.io/os-8-1-1-available-now/",
      "score": 3,
      "comments": 0,
      "tags": [
        "linux",
        "release"
      ],
      "id": "lf1hbk"
    },
    {
      "title": "Stop Putting Secrets in .env Files",
      "url": "https://jonmagic.com/posts/stop-putting-secrets-in-dotenv-files/",
      "score": 5,
      "comments": 6,
      "tags": [
        "security"
      ],
      "id": "eai9st"
    },
    {
      "title": "Cultivating a robust and efficient quantum-safe HTTPS",
      "url": "https://security.googleblog.com/2026/02/cultivating-robust-and-efficient.html",
      "score": 7,
      "comments": 0,
      "tags": [
        "browsers",
        "cryptography",
        "security"
      ],
      "id": "wvjyad"
    },
    {
      "title": "Disrupting malicious uses of our [OpenAI] models",
      "url": "https://cdn.openai.com/pdf/df438d70-e3fe-4a6c-a403-ff632def8f79/disrupting-malicious-uses-of-ai.pdf",
      "score": 3,
      "comments": 1,
      "tags": [
        "pdf",
        "vibecoding"
      ],
      "id": "spoqxt"
    },
    {
      "title": "Please stop using passkeys for encrypting user data",
      "url": "https://blog.timcappalli.me/p/passkeys-prf-warning/",
      "score": 25,
      "comments": 28,
      "tags": [
        "cryptography"
      ],
      "id": "tf8j5h"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "BloondAndDoom",
      "descendants": 432,
      "id": 47188473,
      "kids": [
        47190662,
        47188929,
        47189594,
        47189518,
        47189190,
        47190847,
        47189261,
        47188682,
        47189438,
        47189166,
        47191133,
        47189636,
        47188812,
        47191377,
        47189418,
        47189657,
        47188623,
        47188839,
        47189120,
        47190381,
        47191007,
        47190506,
        47190819,
        47189216,
        47190035,
        47189496,
        47190445,
        47190181,
        47189584,
        47190961,
        47189465,
        47188628,
        47189875,
        47189530,
        47189222,
        47188739,
        47188681,
        47190192,
        47188947,
        47189200,
        47188709,
        47188707,
        47190236,
        47190392,
        47190963,
        47189208,
        47178525,
        47189420,
        47189497,
        47188653,
        47190719,
        47183575,
        47191080,
        47190578,
        47190503,
        47190143,
        47190484,
        47190241,
        47189228,
        47190066,
        47188873,
        47189921,
        47190526,
        47191185,
        47188646,
        47189479,
        47189311,
        47189288,
        47189405,
        47188988,
        47190685,
        47188649,
        47190524,
        47188604,
        47190389,
        47189793,
        47189612,
        47189540,
        47189197,
        47188912,
        47189313,
        47189966,
        47190229,
        47191242,
        47190300,
        47189437,
        47189149,
        47189045,
        47188713,
        47189001,
        47188784,
        47188789,
        47189407,
        47188701,
        47189803,
        47188734,
        47190992
      ],
      "score": 1183,
      "time": 1772240093,
      "title": "We Will Not Be Divided",
      "type": "story",
      "url": "https://notdivided.org"
    },
    {
      "by": "tobr",
      "descendants": 23,
      "id": 47190997,
      "kids": [
        47191258,
        47191401,
        47191325,
        47191380,
        47191388,
        47191364,
        47191275,
        47191293,
        47191128,
        47191272,
        47191310
      ],
      "score": 160,
      "time": 1772258101,
      "title": "How do I cancel my ChatGPT subscription?",
      "type": "story",
      "url": "https://help.openai.com/en/articles/7232927-how-do-i-cancel-my-chatgpt-subscription"
    },
    {
      "by": "toomuchtodo",
      "descendants": 14,
      "id": 47189535,
      "kids": [
        47190618,
        47191211,
        47190807,
        47191245,
        47189581
      ],
      "score": 134,
      "time": 1772246896,
      "title": "Croatia declared free of landmines after 31 years",
      "type": "story",
      "url": "https://glashrvatske.hrt.hr/en/domestic/croatia-declared-free-of-landmines-after-31-years-12593533"
    },
    {
      "by": "zdw",
      "descendants": 51,
      "id": 47189749,
      "kids": [
        47190414,
        47190619,
        47190321,
        47190191,
        47190124,
        47191122,
        47190218,
        47190135,
        47190317,
        47190100,
        47190230,
        47190641,
        47190231
      ],
      "score": 108,
      "time": 1772248300,
      "title": "Don't use passkeys for encrypting user data",
      "type": "story",
      "url": "https://blog.timcappalli.me/p/passkeys-prf-warning/"
    },
    {
      "by": "zdw",
      "descendants": 1,
      "id": 47190806,
      "kids": [
        47191210,
        47191161
      ],
      "score": 26,
      "time": 1772256081,
      "title": "Cash issuing terminals",
      "type": "story",
      "url": "https://computer.rip/2026-02-27-ibm-atm.html"
    },
    {
      "by": "eoskx",
      "descendants": 226,
      "id": 47189650,
      "kids": [
        47189970,
        47191321,
        47190708,
        47191273,
        47190420,
        47190063,
        47190970,
        47190671,
        47189862,
        47190103,
        47190595,
        47190729,
        47189879,
        47190131,
        47190368,
        47190351,
        47189851,
        47190674,
        47190867,
        47189937,
        47190021,
        47190140,
        47190270,
        47190025,
        47191195,
        47191017,
        47190707,
        47191306,
        47190723,
        47190401,
        47190403,
        47191169,
        47190225,
        47190171,
        47190072,
        47190163,
        47190112,
        47190540,
        47190232,
        47190887,
        47190306,
        47190869,
        47190197,
        47190019,
        47189975,
        47190331,
        47190615,
        47191247,
        47190283,
        47189959,
        47190220,
        47190079,
        47189997,
        47191214,
        47190444,
        47190634,
        47190453,
        47189964,
        47188741,
        47190290,
        47190137,
        47190910,
        47190279,
        47189960,
        47190201,
        47190210,
        47190168,
        47189705,
        47190274,
        47189835,
        47190110,
        47190228,
        47190363,
        47190264,
        47190147,
        47189923
      ],
      "score": 396,
      "text": "<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;sama&#x2F;status&#x2F;2027578652477821175\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;sama&#x2F;status&#x2F;2027578652477821175</a><p><a href=\"https:&#x2F;&#x2F;fortune.com&#x2F;2026&#x2F;02&#x2F;27&#x2F;openai-in-talks-with-pentagon-after-anthropic-blowup&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;fortune.com&#x2F;2026&#x2F;02&#x2F;27&#x2F;openai-in-talks-with-pentagon...</a>",
      "time": 1772247542,
      "title": "OpenAI agrees with Dept. of War to deploy models in their classified network",
      "type": "story",
      "url": "https://twitter.com/sama/status/2027578652477821175"
    },
    {
      "by": "maloyan",
      "descendants": 13,
      "id": 47155375,
      "kids": [
        47191370,
        47191142,
        47191043,
        47190877,
        47190638,
        47190479,
        47190466,
        47190469,
        47191092
      ],
      "score": 65,
      "text": "Hi HN, I&#x27;m Narek. I built Manim-Web, a TypeScript&#x2F;JavaScript port of 3Blue1Brown’s popular Manim math animation engine.<p>The Problem: Like many here, I love Manim&#x27;s visual style. But setting it up locally is notoriously painful - it requires Python, FFmpeg, Cairo, and a full LaTeX distribution. It creates a massive barrier to entry, especially for students or people who just want to quickly visualize a concept.<p>The Solution: I wanted to make it zero-setup, so I ported the engine to TypeScript. Manim-Web runs entirely client-side in the browser. No Python, no servers, no install. It runs animations in real-time at 60fps.<p>How it works underneath:\n- Rendering: Uses Canvas API &#x2F; WebGL (via Three.js for 3D scenes).\n- LaTeX: Rendered and animated via MathJax&#x2F;KaTeX (no LaTeX install needed!).\n- API: I kept the API almost identical to the Python version (e.g., scene.play(new Transform(square, circle))), meaning existing Manim knowledge transfers over directly.\n- Reactivity: Updaters and ValueTrackers follow the exact same reactive pattern as the Python original.<p>Because it&#x27;s web-native, the animations are now inherently interactive (objects can be draggable&#x2F;clickable) and can be embedded directly into React&#x2F;Vue apps, interactive textbooks, or blogs. I also included a py2ts converter to help migrate existing scripts.<p>Live Demo: <a href=\"https:&#x2F;&#x2F;maloyan.github.io&#x2F;manim-web&#x2F;examples\" rel=\"nofollow\">https:&#x2F;&#x2F;maloyan.github.io&#x2F;manim-web&#x2F;examples</a>\nGitHub: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;maloyan&#x2F;manim-web\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;maloyan&#x2F;manim-web</a><p>It&#x27;s open-source (MIT). I&#x27;m still actively building out feature parity with the Python version, but core animations, geometry, plotting, and 3D orbiting are working great. I would love to hear your feedback, and I&#x27;ll be hanging around to answer any technical questions about rendering math in the browser!",
      "time": 1772043307,
      "title": "Show HN: I ported Manim to TypeScript (run 3b1B math animations in the browser)",
      "type": "story",
      "url": "https://github.com/maloyan/manim-web"
    },
    {
      "by": "zlatkov",
      "descendants": 501,
      "id": 47181211,
      "kids": [
        47181631,
        47185747,
        47181452,
        47186113,
        47185571,
        47181613,
        47180830,
        47182151,
        47182111,
        47186948,
        47190654,
        47186278,
        47180865,
        47185316,
        47187052,
        47189740,
        47180875,
        47181350,
        47181752,
        47187787,
        47189674,
        47180895,
        47180831,
        47180767,
        47185664,
        47181060,
        47182519,
        47187961,
        47181406,
        47185839,
        47181409,
        47188938,
        47181930,
        47186585,
        47185574,
        47181697,
        47182168,
        47185958,
        47180957,
        47181783,
        47181445,
        47181500,
        47181536,
        47180910,
        47181202,
        47186137,
        47182133,
        47182368,
        47182011,
        47181012,
        47187687,
        47182392,
        47180961,
        47185630,
        47180851,
        47181495,
        47182127,
        47185170,
        47181860,
        47180896,
        47181705,
        47182024,
        47188573,
        47188256,
        47181340,
        47182235,
        47181939,
        47181438,
        47180696,
        47183421
      ],
      "score": 461,
      "text": "<a href=\"https:&#x2F;&#x2F;openai.com&#x2F;index&#x2F;scaling-ai-for-everyone&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;openai.com&#x2F;index&#x2F;scaling-ai-for-everyone&#x2F;</a><p><a href=\"https:&#x2F;&#x2F;x.com&#x2F;sama&#x2F;status&#x2F;2027386252555919386\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;sama&#x2F;status&#x2F;2027386252555919386</a><p><a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;sama&#x2F;status&#x2F;2027386252555919386\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;sama&#x2F;status&#x2F;2027386252555919386</a>",
      "time": 1772204165,
      "title": "OpenAI raises $110B on $730B pre-money valuation",
      "type": "story",
      "url": "https://techcrunch.com/2026/02/27/openai-raises-110b-in-one-of-the-largest-private-funding-rounds-in-history/"
    },
    {
      "by": "ks2048",
      "descendants": 53,
      "id": 47170030,
      "kids": [
        47191323,
        47189502,
        47191170,
        47188254,
        47191039,
        47189742,
        47190660,
        47188770,
        47191040,
        47188514,
        47189214,
        47188802,
        47190982,
        47189195,
        47189138,
        47190093,
        47189207,
        47191400,
        47190508,
        47189307,
        47189565
      ],
      "score": 131,
      "time": 1772130596,
      "title": "Smallest transformer that can add two 10-digit numbers",
      "type": "story",
      "url": "https://github.com/anadim/AdderBoard"
    },
    {
      "by": "WalterSobchak",
      "descendants": 496,
      "id": 47181208,
      "kids": [
        47191379,
        47187802,
        47184488,
        47187277,
        47189744,
        47183691,
        47182908,
        47184721,
        47191107,
        47189805,
        47181385,
        47186797,
        47186181,
        47184622,
        47190703,
        47183542,
        47185846,
        47183620,
        47190611,
        47186427,
        47186433,
        47181949,
        47186820,
        47191205,
        47188304,
        47187893,
        47191318,
        47184443,
        47186733,
        47183121,
        47188383,
        47189874,
        47181921,
        47185946,
        47183247,
        47187124,
        47186838,
        47187706,
        47189037,
        47187882,
        47189669,
        47189542,
        47190994,
        47186827,
        47189094,
        47183498,
        47187854,
        47189722,
        47182800,
        47187110,
        47189990,
        47187083,
        47188189,
        47187864,
        47188515,
        47186520,
        47190699,
        47188257,
        47184033,
        47187656,
        47189218,
        47189555,
        47189656,
        47187248,
        47186784,
        47188783,
        47191154,
        47190024,
        47187826,
        47183760,
        47185543,
        47188965,
        47182586,
        47186243,
        47188040,
        47183664,
        47185634,
        47190432,
        47185894,
        47190246,
        47185344,
        47190121,
        47190527,
        47185622,
        47187619,
        47183610,
        47186642,
        47184899,
        47188476,
        47185586,
        47183588,
        47182965,
        47185534,
        47186799,
        47183741,
        47186172,
        47187722,
        47186054,
        47182703,
        47184541,
        47183488,
        47188475,
        47186326,
        47187956,
        47185555,
        47187452,
        47185998,
        47188495,
        47186891,
        47183315,
        47187938,
        47189987
      ],
      "score": 521,
      "time": 1772204149,
      "title": "A new California law says all operating systems need to have age verification",
      "type": "story",
      "url": "https://www.pcgamer.com/software/operating-systems/a-new-california-law-says-all-operating-systems-including-linux-need-to-have-some-form-of-age-verification-at-account-setup/"
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
      "title": "The Token Economy",
      "description": "In 2161, time is money. Literally.  When you are born, a clock starts on your arm. One year. When it...",
      "url": "https://dev.to/dannwaneri/the-token-economy-3cd9",
      "tags": "ai, webdev, career, discuss",
      "reactions": 45,
      "comments": 38,
      "reading_time": 4,
      "author": "dannwaneri"
    },
    {
      "title": "When Past Team Failures Become Your Team's Problem",
      "description": "I want to tell you about a situation I'm currently navigating as a team lead.  A senior technical...",
      "url": "https://dev.to/adamthedeveloper/when-past-team-failures-become-your-teams-problem-5cf3",
      "tags": "webdev, programming, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "adamthedeveloper"
    },
    {
      "title": "The Hardest Part of Being a Developer Isn’t Coding. It’s Disappearing Quietly.",
      "description": "A weird thing happens when you become a developer. You can go days without anyone needing you in a...",
      "url": "https://dev.to/the_nortern_dev/the-hardest-part-of-being-a-developer-isnt-coding-its-disappearing-quietly-52l",
      "tags": "discuss, mentalhealth, webdev, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "Freelancing vs Job vs Startup – My Honest Developer Perspective",
      "description": "1️⃣ The Question Every Developer Eventually Faces   The first time I earned money from code,...",
      "url": "https://dev.to/raajaryan/freelancing-vs-job-vs-startup-my-honest-developer-perspective-35f8",
      "tags": "webdev, startup, career, freelance",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "raajaryan"
    },
    {
      "title": "On AI and Other Drugs",
      "description": "\"Being a specialist is what I am, and maybe that is why I was so angry about the whole thing in the...",
      "url": "https://dev.to/rdatwd/on-ai-and-other-drugs-5hm2",
      "tags": "ai, programming, productivity, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 8,
      "author": "rdatwd"
    },
    {
      "title": "Фриланс для разработчиков в России в 2026: полный гайд",
      "description": "Фриланс в России в 2026 году выглядит совсем не так, как пять лет назад. Биржи типа FL.ru никуда не...",
      "url": "https://dev.to/__be2942592/frilans-dlia-razrabotchikov-v-rossii-v-2026-polnyi-ghaid-37gj",
      "tags": "career, beginners, programming, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "__be2942592"
    },
    {
      "title": "Top 30 iOS Interview Questions and Answers (2026 Edition)",
      "description": "iOS interviews in 2026 are different from what they were even two years ago. Companies now expect you...",
      "url": "https://dev.to/__be2942592/top-30-ios-interview-questions-and-answers-2026-edition-4695",
      "tags": "ios, swift, career, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "__be2942592"
    },
    {
      "title": "Best Free Notion Templates for Developers in 2026",
      "description": "Every developer I know has the same problem: too many things to track and no system to track...",
      "url": "https://dev.to/__be2942592/best-free-notion-templates-for-developers-in-2026-3j04",
      "tags": "productivity, programming, beginners, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "__be2942592"
    },
    {
      "title": "How to Write an ATS-Friendly Resume That Actually Gets Read (2026 Guide)",
      "description": "Here is a stat that should make you angry: up to 75% of resumes never reach a human recruiter. They...",
      "url": "https://dev.to/__be2942592/how-to-write-an-ats-friendly-resume-that-actually-gets-read-2026-guide-1gg0",
      "tags": "career, beginners, jobs, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "__be2942592"
    },
    {
      "title": "AI заберёт твою работу? Нет. Но вот что заберёт точно.",
      "description": "Каждый день я вижу одни и те же заголовки: \"AI заменит программистов через 5 лет\", \"ChatGPT пишет код...",
      "url": "https://dev.to/__be2942592/ai-zabieriot-tvoiu-rabotu-niet-no-vot-chto-zabieriot-tochno-2dlf",
      "tags": "ai, career, programming, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "__be2942592"
    }
  ]
}
```

