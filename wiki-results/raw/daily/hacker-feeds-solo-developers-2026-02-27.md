# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-02-27 07:13:04 UTC

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
      "author": "cloudflare",
      "repo": "agents",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/agents",
      "desc": "Build and deploy AI Agents on Cloudflare",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 435,
      "added_stars": 1054,
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
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skills and subagents, it handles different levels of tasks that could take minutes to hours.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2623,
      "added_stars": 982,
      "builtBy": [
        {
          "username": "MagicCube",
          "href": "https://github.com/MagicCube",
          "avatar": "https://avatars.githubusercontent.com/u/1003147"
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
          "username": "WillemJiang",
          "href": "https://github.com/WillemJiang",
          "avatar": "https://avatars.githubusercontent.com/u/219644"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 1808,
      "added_stars": 3287,
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
      "author": "stan-smith",
      "repo": "FossFLOW",
      "avatar": "https://github.com/stan-smith.png",
      "repo_link": "https://github.com/stan-smith/FossFLOW",
      "desc": "Make beautiful isometric infrastructure diagrams",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1219,
      "added_stars": 1349,
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
      "forks": 646,
      "added_stars": 385,
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
      "author": "evershopcommerce",
      "repo": "evershop",
      "avatar": "https://github.com/evershopcommerce.png",
      "repo_link": "https://github.com/evershopcommerce/evershop",
      "desc": "🛍️ Typescript E-commerce Platform",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2189,
      "added_stars": 530,
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
      "author": "p2r3",
      "repo": "convert",
      "avatar": "https://github.com/p2r3.png",
      "repo_link": "https://github.com/p2r3/convert",
      "desc": "Truly universal online file converter",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 207,
      "added_stars": 526,
      "builtBy": [
        {
          "username": "p2r3",
          "href": "https://github.com/p2r3",
          "avatar": "https://avatars.githubusercontent.com/u/41925384"
        },
        {
          "username": "exurd",
          "href": "https://github.com/exurd",
          "avatar": "https://avatars.githubusercontent.com/u/7785022"
        },
        {
          "username": "BoBkiNN",
          "href": "https://github.com/BoBkiNN",
          "avatar": "https://avatars.githubusercontent.com/u/78136575"
        },
        {
          "username": "omega-fallon",
          "href": "https://github.com/omega-fallon",
          "avatar": "https://avatars.githubusercontent.com/u/36779526"
        },
        {
          "username": "mdev34-lab",
          "href": "https://github.com/mdev34-lab",
          "avatar": "https://avatars.githubusercontent.com/u/117395510"
        }
      ]
    },
    {
      "author": "southleft",
      "repo": "figma-console-mcp",
      "avatar": "https://github.com/southleft.png",
      "repo_link": "https://github.com/southleft/figma-console-mcp",
      "desc": "Your design system as an API. Connect AI to Figma for extraction, creation, and debugging.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 63,
      "added_stars": 168,
      "builtBy": [
        {
          "username": "tpitre",
          "href": "https://github.com/tpitre",
          "avatar": "https://avatars.githubusercontent.com/u/645765"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "abdokhaire",
          "href": "https://github.com/abdokhaire",
          "avatar": "https://avatars.githubusercontent.com/u/4311670"
        },
        {
          "username": "ionmesca",
          "href": "https://github.com/ionmesca",
          "avatar": "https://avatars.githubusercontent.com/u/103584532"
        }
      ]
    },
    {
      "author": "github",
      "repo": "docs",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/docs",
      "desc": "The open-source repo for docs.github.com",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 66158,
      "added_stars": 73,
      "builtBy": [
        {
          "username": "Octomerger",
          "href": "https://github.com/Octomerger",
          "avatar": "https://avatars.githubusercontent.com/u/63058869"
        },
        {
          "username": "docs-bot",
          "href": "https://github.com/docs-bot",
          "avatar": "https://avatars.githubusercontent.com/u/77750099"
        },
        {
          "username": "mchammer01",
          "href": "https://github.com/mchammer01",
          "avatar": "https://avatars.githubusercontent.com/u/42146119"
        },
        {
          "username": "heiskr",
          "href": "https://github.com/heiskr",
          "avatar": "https://avatars.githubusercontent.com/u/1221423"
        },
        {
          "username": "sarahs",
          "href": "https://github.com/sarahs",
          "avatar": "https://avatars.githubusercontent.com/u/821071"
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
      "forks": 916,
      "added_stars": 882,
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
      "forks": 387,
      "added_stars": 4385,
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
      "forks": 14688,
      "added_stars": 3313,
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
      "author": "asheshgoplani",
      "repo": "agent-deck",
      "avatar": "https://github.com/asheshgoplani.png",
      "repo_link": "https://github.com/asheshgoplani/agent-deck",
      "desc": "Terminal session manager for AI coding agents. One TUI for Claude, Gemini, OpenCode, Codex, and more.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 102,
      "added_stars": 518,
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 432,
      "added_stars": 1129,
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
      "author": "netbirdio",
      "repo": "netbird",
      "avatar": "https://github.com/netbirdio.png",
      "repo_link": "https://github.com/netbirdio/netbird",
      "desc": "Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and granular access controls.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1133,
      "added_stars": 1859,
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
      "repo": "vault",
      "avatar": "https://github.com/hashicorp.png",
      "repo_link": "https://github.com/hashicorp/vault",
      "desc": "A tool for secrets management, encryption as a service, and privileged access management",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4605,
      "added_stars": 1294,
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
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1461,
      "added_stars": 1046,
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
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2976,
      "added_stars": 1226,
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
      "forks": 542,
      "added_stars": 740,
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
      "stars": 0,
      "forks": 445,
      "added_stars": 540,
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
      "author": "juanfont",
      "repo": "headscale",
      "avatar": "https://github.com/juanfont.png",
      "repo_link": "https://github.com/juanfont/headscale",
      "desc": "An open source, self-hosted implementation of the Tailscale control server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1927,
      "added_stars": 1375,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 7999,
      "added_stars": 689,
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
      "author": "grafana",
      "repo": "mcp-grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/mcp-grafana",
      "desc": "MCP server for Grafana",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 275,
      "added_stars": 241,
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
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2542,
      "added_stars": 2042,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 638,
      "added_stars": 604,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The to-do app to organize your life.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 324,
      "added_stars": 326,
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
      "author": "hashicorp",
      "repo": "terraform-provider-aws",
      "avatar": "https://github.com/hashicorp.png",
      "repo_link": "https://github.com/hashicorp/terraform-provider-aws",
      "desc": "The AWS Provider enables Terraform to manage AWS resources.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 9996,
      "added_stars": 79,
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
      "author": "steipete",
      "repo": "wacli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/wacli",
      "desc": "WhatsApp CLI",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 95,
      "added_stars": 393,
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
      "author": "k3s-io",
      "repo": "k3s",
      "avatar": "https://github.com/k3s-io.png",
      "repo_link": "https://github.com/k3s-io/k3s",
      "desc": "Lightweight Kubernetes",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2603,
      "added_stars": 346,
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
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 268,
      "added_stars": 711,
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
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4995,
      "added_stars": 1039,
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
      "author": "steveyegge",
      "repo": "gastown",
      "avatar": "https://github.com/steveyegge.png",
      "repo_link": "https://github.com/steveyegge/gastown",
      "desc": "Gas Town - multi-agent workspace manager",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 825,
      "added_stars": 4366,
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
      "author": "pulumi",
      "repo": "pulumi",
      "avatar": "https://github.com/pulumi.png",
      "repo_link": "https://github.com/pulumi/pulumi",
      "desc": "Pulumi - Infrastructure as Code in any programming language 🚀",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1321,
      "added_stars": 287,
      "builtBy": [
        {
          "username": "joeduffy",
          "href": "https://github.com/joeduffy",
          "avatar": "https://avatars.githubusercontent.com/u/3953235"
        },
        {
          "username": "Frassle",
          "href": "https://github.com/Frassle",
          "avatar": "https://avatars.githubusercontent.com/u/1398274"
        },
        {
          "username": "justinvp",
          "href": "https://github.com/justinvp",
          "avatar": "https://avatars.githubusercontent.com/u/710598"
        },
        {
          "username": "tgummerer",
          "href": "https://github.com/tgummerer",
          "avatar": "https://avatars.githubusercontent.com/u/191004"
        }
      ]
    },
    {
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 Take full control of your VPS with 1Panel. Deploy OpenClaw and websites in one click.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2980,
      "added_stars": 719,
      "builtBy": [
        {
          "username": "ssongliu",
          "href": "https://github.com/ssongliu",
          "avatar": "https://avatars.githubusercontent.com/u/73214554"
        },
        {
          "username": "zhengkunwang223",
          "href": "https://github.com/zhengkunwang223",
          "avatar": "https://avatars.githubusercontent.com/u/31820853"
        },
        {
          "username": "lan-yonghui",
          "href": "https://github.com/lan-yonghui",
          "avatar": "https://avatars.githubusercontent.com/u/81747598"
        },
        {
          "username": "HynoR",
          "href": "https://github.com/HynoR",
          "avatar": "https://avatars.githubusercontent.com/u/20227709"
        },
        {
          "username": "wanghe-fit2cloud",
          "href": "https://github.com/wanghe-fit2cloud",
          "avatar": "https://avatars.githubusercontent.com/u/46734380"
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
      "forks": 558,
      "added_stars": 7894,
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
      "author": "NevaMind-AI",
      "repo": "memU",
      "avatar": "https://github.com/NevaMind-AI.png",
      "repo_link": "https://github.com/NevaMind-AI/memU",
      "desc": "Memory for 24/7 proactive agents like openclaw (moltbot, clawdbot).",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 813,
      "added_stars": 6202,
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
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 414,
      "added_stars": 5777,
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
          "username": "Madhu3456",
          "href": "https://github.com/Madhu3456",
          "avatar": "https://avatars.githubusercontent.com/u/108209860"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 1346,
      "added_stars": 8674,
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
      "author": "google",
      "repo": "langextract",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/langextract",
      "desc": "A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2260,
      "added_stars": 10271,
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
      "author": "MoonshotAI",
      "repo": "kimi-cli",
      "avatar": "https://github.com/MoonshotAI.png",
      "repo_link": "https://github.com/MoonshotAI/kimi-cli",
      "desc": "Kimi Code CLI is your next CLI agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 656,
      "added_stars": 2910,
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
      "forks": 2353,
      "added_stars": 2868,
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
      "stars": 0,
      "forks": 3862,
      "added_stars": 2311,
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
      "author": "Shubhamsaboo",
      "repo": "awesome-llm-apps",
      "avatar": "https://github.com/Shubhamsaboo.png",
      "repo_link": "https://github.com/Shubhamsaboo/awesome-llm-apps",
      "desc": "Collection of awesome LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and opensource models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 14161,
      "added_stars": 7941,
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
      "forks": 809,
      "added_stars": 2164,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 829,
      "added_stars": 3487,
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
      "author": "anthropics",
      "repo": "skills",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/skills",
      "desc": "Public repository for Agent Skills",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8096,
      "added_stars": 23248,
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
          "username": "kencheeto",
          "href": "https://github.com/kencheeto",
          "avatar": "https://avatars.githubusercontent.com/u/279406"
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
      "forks": 6005,
      "added_stars": 2579,
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
      "stars": 0,
      "forks": 1376,
      "added_stars": 2949,
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
      "author": "taylorwilsdon",
      "repo": "google_workspace_mcp",
      "avatar": "https://github.com/taylorwilsdon.png",
      "repo_link": "https://github.com/taylorwilsdon/google_workspace_mcp",
      "desc": "Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search & Drive with AI - Comprehensive Google Workspace / G Suite MCP Server & CLI Tool",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 473,
      "added_stars": 346,
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
      "comments": "1",
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
      "title": "Join the \"Built with Google Gemini: Writing Challenge\" Presented by Major League Hacking (MLH). Win a Raspberry Pi AI Kit!",
      "description": "Last week, we announced that DEV has joined Major League Hacking. To kick things off, we're launching...",
      "url": "https://dev.to/devteam/join-the-built-with-google-gemini-writing-challenge-presented-by-major-league-hacking-mlh-win-17pk",
      "tags": "devchallenge, geminireflections, gemini, ai",
      "reactions": 86,
      "comments": 22,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "The Token Economy",
      "description": "In 2161, time is money. Literally.  When you are born, a clock starts on your arm. One year. When it...",
      "url": "https://dev.to/dannwaneri/the-token-economy-3cd9",
      "tags": "ai, webdev, career, discuss",
      "reactions": 35,
      "comments": 27,
      "reading_time": 4,
      "author": "dannwaneri"
    },
    {
      "title": "Happening Now: DEV Weekend Challenge!! Submissions due March 2 at 7:59am UTC.",
      "description": "Good morning! Good afternoon! Good Evening!   Welcome to our first DEV Weekend Challenge, a short...",
      "url": "https://dev.to/devteam/happening-now-dev-weekend-challenge-submissions-due-march-2-at-759am-utc-5fg8",
      "tags": "devchallenge, weekendchallenge, webdev, ai",
      "reactions": 25,
      "comments": 2,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "The Agent Skills Gold Rush Has a Malware Problem",
      "description": "Three weeks ago, ClawHub had roughly 2,800 skills in its registry. Today it has over 10,700. In that...",
      "url": "https://dev.to/meimakes/the-agent-skills-gold-rush-has-a-malware-problem-2jai",
      "tags": "devtools, ai, productivity",
      "reactions": 7,
      "comments": 3,
      "reading_time": 3,
      "author": "meimakes"
    },
    {
      "title": "The $0 Developer Phase — And How Dev.to Pulled Me Out",
      "description": "Eight years ago, I was absolutely convinced of one thing:  I was ahead of the curve.  Not just...",
      "url": "https://dev.to/art_light/the-0-developer-phase-and-how-devto-pulled-me-out-84g",
      "tags": "career, webdev, productivity, beginners",
      "reactions": 168,
      "comments": 94,
      "reading_time": 5,
      "author": "art_light"
    },
    {
      "title": "Nano Banana 2: Combining Pro capabilities with lightning-fast speed",
      "description": "In August of last year, our Gemini Image model, Nano Banana, became a viral sensation, redefining...",
      "url": "https://dev.to/googleai/nano-banana-2-combining-pro-capabilities-with-lightning-fast-speed-4fm1",
      "tags": "nanobanana, gemini, ai",
      "reactions": 13,
      "comments": 0,
      "reading_time": 9,
      "author": "alisa_fortin"
    },
    {
      "title": "Understanding Next.js Rewrites",
      "description": "Most people use Next.js very superficially.  Routing, SSR, maybe API routes — and that’s it. But...",
      "url": "https://dev.to/cole_ruche/understanding-nextjs-rewrites-234j",
      "tags": "architecture, javascript, nextjs, react",
      "reactions": 3,
      "comments": 0,
      "reading_time": 3,
      "author": "cole_ruche"
    },
    {
      "title": "Perfect Claude Code Notifications Setup with Tailscale and ntfy",
      "description": "If you’re like me and have been hooked into running Claude Code on your phone, running several...",
      "url": "https://dev.to/felipeelias/perfect-claude-code-notifications-setup-with-tailscale-and-ntfy-1ii1",
      "tags": "claudecode, tailscale, ntfy, docker",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "felipeelias"
    },
    {
      "title": "Want your agent to write better code with fewer tokens? Ask the Google AI Team about Agent Skills!",
      "description": "Last week @stephr_wong, Kevin Hou, and Andy Zhang explored the Antigravity Editor and Agent...",
      "url": "https://dev.to/devteam/want-your-agent-to-write-better-code-with-fewer-tokens-ask-the-google-ai-team-about-agent-skills-44pg",
      "tags": "gemini, agents, cli",
      "reactions": 9,
      "comments": 0,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "The Developer I'm Grateful I Never Became",
      "description": "Inspired by—but not aligned with—\"The $0 Developer Phase—And How Dev.to Pulled Me Out\" by Art...",
      "url": "https://dev.to/narnaiezzsshaa/the-developer-im-grateful-i-never-became-255d",
      "tags": "career, webdev, beginners, productivity",
      "reactions": 19,
      "comments": 17,
      "reading_time": 3,
      "author": "narnaiezzsshaa"
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
      "title": "Protecting code compiled just in time (2024)",
      "url": "https://developer.apple.com/documentation/browserenginekit/protecting-code-compiled-just-in-time",
      "score": 1,
      "comments": 0,
      "tags": [
        "browsers",
        "security"
      ],
      "id": "5spauu"
    },
    {
      "title": "“Our programs are fun to use.”",
      "url": "https://unsung.aresluna.org/our-programs-are-fun-to-use/",
      "score": 1,
      "comments": 0,
      "tags": [
        "culture",
        "design",
        "historical"
      ],
      "id": "djammf"
    },
    {
      "title": "Exploring Static Website Publishing with Org Publish",
      "url": "https://www.emacs.dyerdwelling.family/emacs/20241226125955-emacs--exploring-emacs-based-static-website-publishing-with-org-publish/",
      "score": 1,
      "comments": 0,
      "tags": [
        "emacs",
        "web"
      ],
      "id": "kp7fyj"
    },
    {
      "title": "The proposal for generic methods for Go has been officially accepted",
      "url": "https://www.reddit.com/r/golang/comments/1rfmjbq/the_proposal_for_generic_methods_for_go_from/",
      "score": 1,
      "comments": 0,
      "tags": [
        "go"
      ],
      "id": "ukzck5"
    },
    {
      "title": "Hardwood: A New Parser for Apache Parquet",
      "url": "https://www.morling.dev/blog/hardwood-new-parser-for-apache-parquet/",
      "score": 1,
      "comments": 0,
      "tags": [
        "databases",
        "java"
      ],
      "id": "rdwwd5"
    },
    {
      "title": "We’ve lost the Tech",
      "url": "https://www.youtube.com/watch?v=LvW1HTSLPEk",
      "score": 1,
      "comments": 0,
      "tags": [
        "programming",
        "video"
      ],
      "id": "3r0trc"
    },
    {
      "title": "Ruby on Rails roadmap added",
      "url": "https://roadmap.sh/ruby-on-rails",
      "score": 1,
      "comments": 0,
      "tags": [
        "ruby"
      ],
      "id": "qfme06"
    },
    {
      "title": "The Man Who Stole Infinity",
      "url": "https://www.quantamagazine.org/the-man-who-stole-infinity-20260225/",
      "score": 6,
      "comments": 1,
      "tags": [
        "historical",
        "math"
      ],
      "id": "qm55ud"
    },
    {
      "title": "Return of the Obra Dinn: spherical mapped dithering for a 1bpp 1st-person game (2017)",
      "url": "https://forums.tigsource.com/index.php?topic=40832.msg1363742#msg1363742",
      "score": 13,
      "comments": 1,
      "tags": [
        "graphics"
      ],
      "id": "bohhcq"
    },
    {
      "title": "Towards a Sovereign Mobile Stack",
      "url": "https://modal.cx/blog/sovereign-mobile-stack/",
      "score": 2,
      "comments": 0,
      "tags": [
        "mobile"
      ],
      "id": "tfsc8a"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "qwertox",
      "descendants": 817,
      "id": 47173121,
      "kids": [
        47174423,
        47173642,
        47174125,
        47173975,
        47173851,
        47177472,
        47173414,
        47177363,
        47177237,
        47173618,
        47173275,
        47175870,
        47176313,
        47173598,
        47177282,
        47174148,
        47177446,
        47175367,
        47173378,
        47177020,
        47173451,
        47173397,
        47175363,
        47176183,
        47177300,
        47176114,
        47173507,
        47173453,
        47176763,
        47173872,
        47173718,
        47176224,
        47173506,
        47176626,
        47176376,
        47175628,
        47174971,
        47174296,
        47174965,
        47175343,
        47173921,
        47175483,
        47176138,
        47174182,
        47175239,
        47174293,
        47176230,
        47174819,
        47174747,
        47177303,
        47174343,
        47175006,
        47173408,
        47174786,
        47175156,
        47177290,
        47175030,
        47176301,
        47173420,
        47174683,
        47174880,
        47176330,
        47173488,
        47174386,
        47174040,
        47174122,
        47175183,
        47173994,
        47175298,
        47174494,
        47174242,
        47175088,
        47174214,
        47174019,
        47173303,
        47175493,
        47175234,
        47175454,
        47174588,
        47175738,
        47173370,
        47174005,
        47176248,
        47173577,
        47174534,
        47174664,
        47176212,
        47173719,
        47175968,
        47176776,
        47176778,
        47173799,
        47175490,
        47175448,
        47173923,
        47176326,
        47176185,
        47174983,
        47173309,
        47173563,
        47175757,
        47174394,
        47173784,
        47174106,
        47175150,
        47175441,
        47175413,
        47176839,
        47174007,
        47175889,
        47174939,
        47173551,
        47173535,
        47176340,
        47174016,
        47175322,
        47175320,
        47175550,
        47173236,
        47174446,
        47173721,
        47174239,
        47175534,
        47175793,
        47175742,
        47176417,
        47176520,
        47174341,
        47173594,
        47173199,
        47173803,
        47175601,
        47173657,
        47173866,
        47173360,
        47175710,
        47173769,
        47173978
      ],
      "score": 1578,
      "time": 1772145767,
      "title": "Statement from Dario Amodei on our discussions with the Department of War",
      "type": "story",
      "url": "https://www.anthropic.com/news/statement-department-of-war"
    },
    {
      "by": "moultano",
      "descendants": 50,
      "id": 47176257,
      "kids": [
        47177429,
        47176671,
        47176585,
        47177366,
        47177245,
        47176484,
        47176450,
        47176482,
        47176630,
        47176781,
        47176420,
        47176345,
        47177004,
        47176532,
        47176588,
        47177371,
        47177077,
        47177025,
        47176429,
        47176740,
        47176346,
        47176944,
        47176642,
        47176771,
        47176708,
        47176940,
        47176439
      ],
      "score": 143,
      "time": 1772164188,
      "title": "The Hunt for Dark Breakfast",
      "type": "story",
      "url": "https://moultano.wordpress.com/2026/02/22/the-hunt-for-dark-breakfast/"
    },
    {
      "by": "tosh",
      "descendants": 2,
      "id": 47123633,
      "kids": [
        47177431
      ],
      "score": 13,
      "time": 1771860813,
      "title": "Julia: Performance Tips",
      "type": "story",
      "url": "https://docs.julialang.org/en/v1/manual/performance-tips/"
    },
    {
      "by": "tin7in",
      "descendants": 145,
      "id": 47169757,
      "kids": [
        47176204,
        47171575,
        47177493,
        47177336,
        47175428,
        47172175,
        47172655,
        47176684,
        47172377,
        47171437,
        47177355,
        47176963,
        47176872,
        47172130,
        47171623,
        47172240,
        47174021,
        47173046,
        47176507,
        47171105,
        47176764,
        47171969,
        47177024,
        47171626,
        47173336,
        47172773,
        47172292,
        47176863,
        47173072,
        47171653,
        47173825,
        47173302,
        47176123,
        47171049,
        47171007,
        47172372,
        47171152,
        47174565,
        47177267,
        47175384,
        47171275,
        47172870
      ],
      "score": 363,
      "time": 1772129546,
      "title": "What Claude Code chooses",
      "type": "story",
      "url": "https://amplifying.ai/research/claude-code-picks"
    },
    {
      "by": "nand2mario",
      "descendants": 3,
      "id": 47138698,
      "kids": [
        47177352,
        47177067
      ],
      "score": 25,
      "time": 1771948592,
      "title": "80386 Protection",
      "type": "story",
      "url": "https://nand2mario.github.io/posts/2026/80386_protection/"
    },
    {
      "by": "mlex",
      "descendants": 680,
      "id": 47172119,
      "kids": [
        47172729,
        47177514,
        47174079,
        47176919,
        47172632,
        47176242,
        47173078,
        47177495,
        47173330,
        47172528,
        47172264,
        47172801,
        47173203,
        47173676,
        47173259,
        47174612,
        47174136,
        47173178,
        47175223,
        47173137,
        47173227,
        47172344,
        47173279,
        47172189,
        47173089,
        47173417,
        47172990,
        47173332,
        47172804,
        47174462,
        47176719,
        47173094,
        47176991,
        47175728,
        47176144,
        47175416,
        47172248,
        47177470,
        47173961,
        47173176,
        47175703,
        47173775,
        47176350,
        47173044,
        47177369,
        47174292,
        47173876,
        47173625,
        47174790,
        47174447,
        47176223,
        47174999,
        47176533,
        47176518,
        47174636,
        47173588,
        47172853,
        47173228,
        47174872,
        47174138,
        47173699,
        47172630,
        47173029,
        47173692,
        47173929,
        47176390,
        47173205,
        47174014,
        47172832,
        47172831,
        47174163,
        47172677,
        47174070,
        47175852,
        47175716,
        47174158,
        47172477,
        47172723,
        47174252,
        47172874,
        47174861,
        47174748,
        47176636,
        47172657,
        47174460,
        47172581,
        47172692,
        47176096,
        47174932,
        47174332,
        47174159,
        47174795,
        47173416,
        47174383,
        47174623,
        47172534,
        47172450,
        47172595,
        47172626,
        47175219,
        47175543,
        47172569,
        47175713,
        47175177,
        47173162,
        47172468,
        47173105
      ],
      "score": 646,
      "text": "<a href=\"https:&#x2F;&#x2F;www.cnbc.com&#x2F;2026&#x2F;02&#x2F;26&#x2F;block-laying-off-about-4000-employees-nearly-half-of-its-workforce.html\" rel=\"nofollow\">https:&#x2F;&#x2F;www.cnbc.com&#x2F;2026&#x2F;02&#x2F;26&#x2F;block-laying-off-about-4000-...</a><p><a href=\"https:&#x2F;&#x2F;www.marketwatch.com&#x2F;story&#x2F;block-plans-to-lay-off-nearly-half-its-staff-in-deliberate-and-bold-embrace-of-ai-81e99247\" rel=\"nofollow\">https:&#x2F;&#x2F;www.marketwatch.com&#x2F;story&#x2F;block-plans-to-lay-off-nea...</a>",
      "time": 1772140676,
      "title": "Layoffs at Block",
      "type": "story",
      "url": "https://twitter.com/jack/status/2027129697092731343"
    },
    {
      "by": "DamnInteresting",
      "descendants": 162,
      "id": 47167763,
      "kids": [
        47168129,
        47168167,
        47169619,
        47168080,
        47168966,
        47168958,
        47167975,
        47168768,
        47168200,
        47168006,
        47168315,
        47168524,
        47173313,
        47169704,
        47169440,
        47169200,
        47171663,
        47170415,
        47168742,
        47171361,
        47170045,
        47168081,
        47172582,
        47168319,
        47168044,
        47177308,
        47167913,
        47168161
      ],
      "score": 344,
      "time": 1772121348,
      "title": "AirSnitch: Demystifying and breaking client isolation in Wi-Fi networks [pdf]",
      "type": "story",
      "url": "https://www.ndss-symposium.org/wp-content/uploads/2026-f1282-paper.pdf"
    },
    {
      "by": "alexmolas",
      "descendants": 129,
      "id": 47171233,
      "kids": [
        47173059,
        47175672,
        47177447,
        47173277,
        47175985,
        47174628,
        47172941,
        47173471,
        47173472,
        47172933,
        47173276,
        47174314,
        47173868,
        47175308,
        47173386,
        47173646,
        47173293,
        47174268,
        47176927,
        47173158,
        47173391,
        47173209,
        47175172,
        47175676,
        47174851,
        47175692,
        47174205
      ],
      "score": 230,
      "time": 1772135926,
      "title": "What does \" 2>&1 \" mean?",
      "type": "story",
      "url": "https://stackoverflow.com/questions/818255/what-does-21-mean"
    },
    {
      "by": "noahkay13",
      "descendants": 2,
      "id": 47176239,
      "kids": [
        47176240,
        47176584
      ],
      "score": 26,
      "time": 1772164085,
      "title": "Parakeet.cpp – Parakeet ASR inference in pure C++ with Metal GPU acceleration",
      "type": "story",
      "url": "https://github.com/Frikallo/parakeet.cpp"
    },
    {
      "by": "paultendo",
      "descendants": 12,
      "id": 47150674,
      "kids": [
        47177382,
        47151139,
        47155711,
        47177337,
        47177058
      ],
      "score": 31,
      "time": 1772022636,
      "title": "I rendered 1,418 confusables over 230 fonts. Most aren't confusable to the eye",
      "type": "story",
      "url": "https://paultendo.github.io/posts/confusable-vision-visual-similarity/"
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
      "reactions": 36,
      "comments": 27,
      "reading_time": 4,
      "author": "dannwaneri"
    },
    {
      "title": "The $0 Developer Phase — And How Dev.to Pulled Me Out",
      "description": "Eight years ago, I was absolutely convinced of one thing:  I was ahead of the curve.  Not just...",
      "url": "https://dev.to/art_light/the-0-developer-phase-and-how-devto-pulled-me-out-84g",
      "tags": "career, webdev, productivity, beginners",
      "reactions": 168,
      "comments": 94,
      "reading_time": 5,
      "author": "art_light"
    },
    {
      "title": "Your Resume Passed ATS — So Why Are You Still Getting Ghosted?",
      "description": "So your resume made it past the ATS. Congrats — you're in the top 30%. But then... silence. Ghosting....",
      "url": "https://dev.to/sira_ai/your-resume-passed-ats-so-why-are-you-still-getting-ghosted-idl",
      "tags": "career, resume, ai, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "sira_ai"
    },
    {
      "title": "The Trillion Dollar Smokescreen and why Replacing Engineers with Algorithms is a Structural Failure",
      "description": "The recent memo from Goldman Sachs detailing job cuts under the guise of an Artificial Intelligence...",
      "url": "https://dev.to/alifunk/the-trillion-dollar-smokescreen-and-why-replacing-engineers-with-algorithms-is-a-structural-failure-3nea",
      "tags": "ai, architecture, management, career",
      "reactions": 8,
      "comments": 1,
      "reading_time": 3,
      "author": "alifunk"
    },
    {
      "title": "Why Reading About System Design Won't Help You Pass the Interview",
      "description": "You've read Designing Data-Intensive Applications. You've watched dozens of YouTube videos on \"how to...",
      "url": "https://dev.to/marcuslam/why-reading-about-system-design-wont-help-you-pass-the-interview-2b3k",
      "tags": "systemdesign, interview, career, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "marcuslam"
    },
    {
      "title": "Most Developers Won't Survive the Agent Era. Here's Why.",
      "description": "Most Developers Won't Survive the Agent Era. Here's Why.  The uncomfortable truth no one wants to say...",
      "url": "https://dev.to/agentq/most-developers-wont-survive-the-agent-era-heres-why-919",
      "tags": "ai, programming, career, agents",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "agentq"
    },
    {
      "title": "I Ran My Own AI-Score Tool on 6 Months of My Code. I Had to Sit With the Results.",
      "description": "I built a CLI tool a few months ago that does one thing: it scans a codebase and estimates what...",
      "url": "https://dev.to/lakshmisravyavedantham/i-ran-my-own-ai-score-tool-on-6-months-of-my-code-i-had-to-sit-with-the-results-15ea",
      "tags": "ai, programming, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "lakshmisravyavedantham"
    },
    {
      "title": "I Banned Myself from AI for 5 Days. My Productivity Didn't Crash — Something Else Did.",
      "description": "I read a headline last month: \"Developers Think AI Makes Them 24% Faster. The Data Says 19%...",
      "url": "https://dev.to/lakshmisravyavedantham/i-banned-myself-from-ai-for-5-days-my-productivity-didnt-crash-something-else-did-1ae5",
      "tags": "productivity, ai, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "lakshmisravyavedantham"
    },
    {
      "title": "Chesterton's Fence: Think Before You Change Things",
      "description": "The Principle Behind Chesterton's Fence   G.K. Chesterton once proposed a thought...",
      "url": "https://dev.to/_b8d89ece3338719863cb03/chestertons-fence-think-before-you-change-things-2047",
      "tags": "mentalmodels, thinking, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "_b8d89ece3338719863cb03"
    },
    {
      "title": "How I Built an AI-Powered Stream Selection Platform for Students After 10th",
      "description": "Choosing a stream after 10th grade is one of the most important academic decisions in India. Yet most...",
      "url": "https://dev.to/beyond10th/how-i-built-an-ai-powered-stream-selection-platform-for-students-after-10th-4490",
      "tags": "ai, webdev, edtech, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "beyond10th"
    }
  ]
}
```

