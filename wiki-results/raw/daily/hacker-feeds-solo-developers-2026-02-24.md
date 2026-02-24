# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-02-24 07:15:49 UTC

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
      "stars": 9729,
      "forks": 637,
      "added_stars": 792,
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
      "author": "cloudflare",
      "repo": "agents",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/agents",
      "desc": "Build and deploy AI Agents on Cloudflare",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 4092,
      "forks": 421,
      "added_stars": 696,
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
      "author": "rowboatlabs",
      "repo": "rowboat",
      "avatar": "https://github.com/rowboatlabs.png",
      "repo_link": "https://github.com/rowboatlabs/rowboat",
      "desc": "Open-source AI coworker, with memory",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 8560,
      "forks": 733,
      "added_stars": 1388,
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
      "author": "badlogic",
      "repo": "pi-mono",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-mono",
      "desc": "AI agent toolkit: coding agent CLI, unified LLM API, TUI & web UI libraries, Slack bot, vLLM pods",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 15402,
      "forks": 1612,
      "added_stars": 2253,
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
      "author": "steipete",
      "repo": "summarize",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/summarize",
      "desc": "Point at any URL/YouTube/Podcast or file. Get the gist. CLI and Chrome Extension.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 4280,
      "forks": 261,
      "added_stars": 1061,
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
      "author": "OpenCTI-Platform",
      "repo": "opencti",
      "avatar": "https://github.com/OpenCTI-Platform.png",
      "repo_link": "https://github.com/OpenCTI-Platform/opencti",
      "desc": "Open Cyber Threat Intelligence Platform",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 8866,
      "forks": 1264,
      "added_stars": 635,
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
      "author": "cinnyapp",
      "repo": "cinny",
      "avatar": "https://github.com/cinnyapp.png",
      "repo_link": "https://github.com/cinnyapp/cinny",
      "desc": "Yet another matrix client",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 3264,
      "forks": 441,
      "added_stars": 139,
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
      "author": "stan-smith",
      "repo": "FossFLOW",
      "avatar": "https://github.com/stan-smith.png",
      "repo_link": "https://github.com/stan-smith/FossFLOW",
      "desc": "Make beautiful isometric infrastructure diagrams",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 18627,
      "forks": 1201,
      "added_stars": 1066,
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
      "author": "ComposioHQ",
      "repo": "composio",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/composio",
      "desc": "Composio powers 1000+ toolkits, tool search, context management, authentication, and a sandboxed workbench to help you build AI agents that turn intent into action.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 27149,
      "forks": 4452,
      "added_stars": 586,
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
      "author": "microsoft",
      "repo": "data-formulator",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/data-formulator",
      "desc": "🪄 Create rich visualizations with AI",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 15049,
      "forks": 1368,
      "added_stars": 167,
      "builtBy": [
        {
          "username": "Chenglong-MS",
          "href": "https://github.com/Chenglong-MS",
          "avatar": "https://avatars.githubusercontent.com/u/93549116"
        },
        {
          "username": "danmarshall",
          "href": "https://github.com/danmarshall",
          "avatar": "https://avatars.githubusercontent.com/u/11507384"
        }
      ]
    },
    {
      "author": "QwenLM",
      "repo": "qwen-code",
      "avatar": "https://github.com/QwenLM.png",
      "repo_link": "https://github.com/QwenLM/qwen-code",
      "desc": "An open-source AI agent that lives in your terminal.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 19312,
      "forks": 1682,
      "added_stars": 831,
      "builtBy": [
        {
          "username": "tanzhenxin",
          "href": "https://github.com/tanzhenxin",
          "avatar": "https://avatars.githubusercontent.com/u/480123"
        },
        {
          "username": "yiliang114",
          "href": "https://github.com/yiliang114",
          "avatar": "https://avatars.githubusercontent.com/u/11473889"
        },
        {
          "username": "Mingholy",
          "href": "https://github.com/Mingholy",
          "avatar": "https://avatars.githubusercontent.com/u/14246397"
        },
        {
          "username": "pomelo-nwu",
          "href": "https://github.com/pomelo-nwu",
          "avatar": "https://avatars.githubusercontent.com/u/10703060"
        },
        {
          "username": "jacob314",
          "href": "https://github.com/jacob314",
          "avatar": "https://avatars.githubusercontent.com/u/1226812"
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
      "stars": 18119,
      "forks": 977,
      "added_stars": 583,
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
      "stars": 4819,
      "forks": 368,
      "added_stars": 4187,
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
      "stars": 163237,
      "forks": 14648,
      "added_stars": 3366,
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
      "stars": 35099,
      "forks": 4602,
      "added_stars": 1274,
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
      "stars": 22989,
      "forks": 1122,
      "added_stars": 1794,
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
      "stars": 10770,
      "forks": 9989,
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
      "author": "juanfont",
      "repo": "headscale",
      "avatar": "https://github.com/juanfont.png",
      "repo_link": "https://github.com/juanfont/headscale",
      "desc": "An open source, self-hosted implementation of the Tailscale control server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 35745,
      "forks": 1918,
      "added_stars": 1314,
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 1952,
      "forks": 409,
      "added_stars": 995,
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
      "stars": 42724,
      "forks": 7984,
      "added_stars": 687,
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
      "author": "navidrome",
      "repo": "navidrome",
      "avatar": "https://github.com/navidrome.png",
      "repo_link": "https://github.com/navidrome/navidrome",
      "desc": "🎧☁️ Your Personal Streaming Service",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 19469,
      "forks": 1380,
      "added_stars": 778,
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
      "author": "charmbracelet",
      "repo": "lipgloss",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/lipgloss",
      "desc": "Style definitions for nice terminal layouts 👄",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 10625,
      "forks": 311,
      "added_stars": 245,
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
      "author": "grafana",
      "repo": "mcp-grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/mcp-grafana",
      "desc": "MCP server for Grafana",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 2372,
      "forks": 274,
      "added_stars": 204,
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
      "stars": 39788,
      "forks": 1094,
      "added_stars": 1222,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 3235,
      "forks": 438,
      "added_stars": 531,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The to-do app to organize your life.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 3401,
      "forks": 318,
      "added_stars": 309,
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
      "author": "steveyegge",
      "repo": "gastown",
      "avatar": "https://github.com/steveyegge.png",
      "repo_link": "https://github.com/steveyegge/gastown",
      "desc": "Gas Town - multi-agent workspace manager",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 10149,
      "forks": 803,
      "added_stars": 4642,
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
      "author": "asheshgoplani",
      "repo": "agent-deck",
      "avatar": "https://github.com/asheshgoplani.png",
      "repo_link": "https://github.com/asheshgoplani/agent-deck",
      "desc": "Terminal session manager for AI coding agents. One TUI for Claude, Gemini, OpenCode, Codex, and more.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 1035,
      "forks": 98,
      "added_stars": 485,
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
      "stars": 32225,
      "forks": 2969,
      "added_stars": 1197,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 20005,
      "forks": 635,
      "added_stars": 401,
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
      "stars": 27111,
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
      "author": "argoproj",
      "repo": "argo-cd",
      "avatar": "https://github.com/argoproj.png",
      "repo_link": "https://github.com/argoproj/argo-cd",
      "desc": "Declarative Continuous Deployment for Kubernetes",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 22121,
      "forks": 6860,
      "added_stars": 343,
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
    },
    {
      "author": "autobrr",
      "repo": "qui",
      "avatar": "https://github.com/autobrr.png",
      "repo_link": "https://github.com/autobrr/qui",
      "desc": "A fast, single-binary qBittorrent web UI: manage multiple instances, automate torrent workflows, and cross-seed across trackers.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 3269,
      "forks": 96,
      "added_stars": 929,
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
      "stars": 9524,
      "forks": 537,
      "added_stars": 7560,
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
      "stars": 9415,
      "forks": 934,
      "added_stars": 5040,
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
      "stars": 10291,
      "forks": 770,
      "added_stars": 5078,
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
      "stars": 6687,
      "forks": 641,
      "added_stars": 2763,
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 16971,
      "forks": 1208,
      "added_stars": 10025,
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
      "stars": 74325,
      "forks": 7652,
      "added_stars": 23487,
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
      "author": "google",
      "repo": "langextract",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/langextract",
      "desc": "A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 33596,
      "forks": 2243,
      "added_stars": 10127,
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
      "stars": 28579,
      "forks": 2347,
      "added_stars": 2854,
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
      "stars": 31165,
      "forks": 3849,
      "added_stars": 2239,
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
      "stars": 3133,
      "forks": 566,
      "added_stars": 1035,
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
      "stars": 96801,
      "forks": 14080,
      "added_stars": 8057,
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
      "author": "Blaizzy",
      "repo": "mlx-audio",
      "avatar": "https://github.com/Blaizzy.png",
      "repo_link": "https://github.com/Blaizzy/mlx-audio",
      "desc": "A text-to-speech (TTS), speech-to-text (STT) and speech-to-speech (STS) library built on Apple's MLX framework, providing efficient speech analysis on Apple Silicon.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 6038,
      "forks": 452,
      "added_stars": 2742,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 9600,
      "forks": 801,
      "added_stars": 1878,
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
      "stars": 8207,
      "forks": 799,
      "added_stars": 3460,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 17680,
      "forks": 1347,
      "added_stars": 2481,
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
      "stars": 36688,
      "forks": 5940,
      "added_stars": 2359,
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
      "stars": 1503,
      "forks": 463,
      "added_stars": 315,
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
      "author": "ranaroussi",
      "repo": "yfinance",
      "avatar": "https://github.com/ranaroussi.png",
      "repo_link": "https://github.com/ranaroussi/yfinance",
      "desc": "Download market data from Yahoo! Finance's API",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 21753,
      "forks": 3098,
      "added_stars": 814,
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
      "title": "swagent – Convert OpenAPI specs to llms.txt so AI agents can consume your API (75% token reduction)",
      "url": "https://swagent.dev",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-24T02:57:51.000Z"
    },
    {
      "title": "TypeScript “object” doesn’t make sense",
      "url": "https://medium.com/ekino-france/typescript-object-doesnt-make-sense-fc95b6c663f9",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-23T14:10:53.000Z"
    },
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
      "upvotes": "2",
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
      "title": "First DEV Weekend Challenge Launches on Feb 26 - Mar 2. Mark Your Calendar!",
      "description": "We're launching something brand new: our first-ever DEV Weekend Challenge! 🎉  This is a short...",
      "url": "https://dev.to/devteam/first-dev-weekend-challenge-launches-on-feb-26-mar-2-mark-your-calendar-5dc3",
      "tags": "weekendchallenge, devchallenge, hackathon, programming",
      "reactions": 32,
      "comments": 3,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "A Quick Recovery Guide for AI-Dependent Coders",
      "description": "Technology makes us lazy.  That's not an opinion but a fact. We can't do mental math, find addresses,...",
      "url": "https://dev.to/canro91/a-quick-recovery-guide-for-ai-dependent-coders-4112",
      "tags": "beginners, ai, coding, softwaredevelopment",
      "reactions": 36,
      "comments": 9,
      "reading_time": 4,
      "author": "canro91"
    },
    {
      "title": "Just shipped framework detection in cursor-lint — auto-detects your stack and suggests matching rule presets. Different rules for different setups. https://github.com/nedcodes-ok/cursor-lint",
      "description": "...",
      "url": "https://dev.to/nedcodes/just-shipped-framework-detection-in-cursor-lint-auto-detects-your-stack-and-suggests-matching-5gf7",
      "tags": "codequality, opensource, showdev, tooling",
      "reactions": 3,
      "comments": 4,
      "reading_time": 1,
      "author": "nedcodes"
    },
    {
      "title": "I Said Yes to Everything for a Year. Here's What It Cost Me.",
      "description": "It is 3:14 AM on a Tuesday, and your heart is beating with the rhythmic intensity of a kick drum in a...",
      "url": "https://dev.to/chandravijayagr/i-said-yes-to-everything-for-a-year-heres-what-it-cost-me-35ib",
      "tags": "personal",
      "reactions": 8,
      "comments": 0,
      "reading_time": 9,
      "author": "chandravijayagr"
    },
    {
      "title": "We Ran 180 AI Agent Shopping Sessions Across 11 Models and 20 Stores. Here's What We Found",
      "description": "Postman didn't become essential by testing APIs. It became essential by showing developers what was...",
      "url": "https://dev.to/benjifisher/we-ran-180-ai-agent-shopping-sessions-across-11-models-and-20-stores-heres-what-we-found-2884",
      "tags": "ucp, postman, playground, agents",
      "reactions": 5,
      "comments": 0,
      "reading_time": 10,
      "author": "benjifisher"
    },
    {
      "title": "Sorting algorithms visualized",
      "description": "Wanted an excuse to play with the new Gemini 3.1 Pro so I vibe-coded this sorting visualization...",
      "url": "https://dev.to/peter/sorting-algorithms-visualized-5oh",
      "tags": "sorting, visualization, data, gemini",
      "reactions": 31,
      "comments": 3,
      "reading_time": 1,
      "author": "peter"
    },
    {
      "title": "I Left My First Hackathon at 8 PM — And it Was a Massive Success!",
      "description": "Most hackathon stories start with \"We stayed up for 36 hours and drank 10 Red Bulls.\"  Mine is...",
      "url": "https://dev.to/maame-codes/i-left-my-first-hackathon-at-8-pm-and-it-was-a-massive-success-1hme",
      "tags": "hackathon, mlh, watercooler",
      "reactions": 91,
      "comments": 9,
      "reading_time": 4,
      "author": "maame-codes"
    },
    {
      "title": "Domain-First Nx Monorepos: Using `packages/` to Make Ownership and Boundaries Obvious",
      "description": "Where should this go? Which apps are using this library?  Those two questions are plaguing my team as...",
      "url": "https://dev.to/codenamegrant/domain-first-nx-monorepos-using-packages-to-make-ownership-and-boundaries-obvious-4h5g",
      "tags": "nx, typescript, architecture, monorepo",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "codenamegrant"
    },
    {
      "title": "I built a CSS framework where every class name is an emoji",
      "description": "BEMoji is a fully featured BEM framework that uses emoji as class names. It's stupid. It works. It's on npm.",
      "url": "https://dev.to/tomhayes/i-built-a-css-framework-where-every-class-name-is-an-emoji-1h3",
      "tags": "css, jokes, tailwindcss, bem",
      "reactions": 5,
      "comments": 0,
      "reading_time": 3,
      "author": "tomhayes"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-5a3g",
      "tags": "weeklyretro, discuss",
      "reactions": 39,
      "comments": 70,
      "reading_time": 1,
      "author": "jess"
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
      "title": "Speeding up HTML generation by 2000%",
      "url": "https://bobrubbens.nl/post/speeding-up-html-generation-2000/",
      "score": 1,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "r0z04d"
    },
    {
      "title": "trolley: Run terminal apps anywhere",
      "url": "https://github.com/weedonandscott/trolley",
      "score": 2,
      "comments": 0,
      "tags": [
        "rust"
      ],
      "id": "ed1qpa"
    },
    {
      "title": "Compiler Education Deserves a Revolution",
      "url": "https://thunderseethe.dev/posts/compiler-education-deserves-a-revoluation/",
      "score": 4,
      "comments": 0,
      "tags": [
        "compilers",
        "education"
      ],
      "id": "hrw1mi"
    },
    {
      "title": "Huntarr - Your passwords and your entire arr stack's API keys are exposed to anyone on your network, or worse, the internet",
      "url": "https://reddit.com/r/selfhosted/comments/1rckopd/huntarr_your_passwords_and_your_entire_arr_stacks/",
      "score": 12,
      "comments": 3,
      "tags": [
        "devops",
        "security",
        "vibecoding"
      ],
      "id": "lq1dxr"
    },
    {
      "title": "x86CSS - An x86 CPU emulator written in CSS",
      "url": "https://lyra.horse/x86css/",
      "score": 30,
      "comments": 4,
      "tags": [
        "css",
        "show"
      ],
      "id": "rhgsiy"
    },
    {
      "title": "Hacklog: Diffing and Comparing Guix Derivations Using Breadth-first Search & Jaccard",
      "url": "https://me.literatelisp.eu/hacklog-diffing-and-comparing-guix-derivations-using-breadth-first-search--jaccard.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "lisp",
        "nix"
      ],
      "id": "6audzp"
    },
    {
      "title": "C Enum Sizes; or, How MSVC Ignores The Standard Once Again",
      "url": "https://ettolrach.com/blog/c_enum_msvc.html",
      "score": 7,
      "comments": 3,
      "tags": [
        "c"
      ],
      "id": "ttkuj8"
    },
    {
      "title": "Signed, Sealed, Stolen: How We Patched Critical Vulnerabilities Under Fire",
      "url": "https://www.youtube.com/watch?v=CZ4nk9aWzYM",
      "score": 6,
      "comments": 2,
      "tags": [
        "security",
        "video"
      ],
      "id": "aeuhf7"
    },
    {
      "title": "I ported Coreboot to the Thinkpad X270",
      "url": "https://dork.dev/posts/2026-02-20-ported-coreboot/",
      "score": 11,
      "comments": 0,
      "tags": [
        "hardware"
      ],
      "id": "xrtjlq"
    },
    {
      "title": "On Free Software, Free Hardware, and the firmware in between",
      "url": "https://grep.be/blog//en/computer/cluebat/On_Free_Software_Hardware_Firmware/",
      "score": 3,
      "comments": 0,
      "tags": [
        "law"
      ],
      "id": "sc9xje"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "shaunpud",
      "descendants": 37,
      "id": 47133313,
      "kids": [
        47133813,
        47133786,
        47133864,
        47133807,
        47133833,
        47133577,
        47133775,
        47133648,
        47133587,
        47133727,
        47133631,
        47133567,
        47133633,
        47133697,
        47133601,
        47133604,
        47133514
      ],
      "score": 85,
      "time": 1771912043,
      "title": "Firefox 148 Launches with AI Kill Switch Feature and More Enhancements",
      "type": "story",
      "url": "https://serverhost.com/blog/firefox-148-launches-with-exciting-ai-kill-switch-feature-and-more-enhancements/"
    },
    {
      "by": "gurjeet",
      "descendants": 52,
      "id": 47123689,
      "kids": [
        47133049,
        47133097,
        47133632,
        47132818,
        47133374,
        47133795,
        47133378,
        47133406,
        47133530,
        47133542,
        47132806,
        47133083,
        47133473,
        47133426,
        47132992,
        47132756,
        47133330
      ],
      "score": 182,
      "time": 1771861010,
      "title": "Terence Tao, at 8 years old (1984) [pdf]",
      "type": "story",
      "url": "https://gwern.net/doc/iq/high/smpy/1984-clements.pdf"
    },
    {
      "by": "wglb",
      "descendants": 62,
      "id": 47132388,
      "kids": [
        47133867,
        47133614,
        47133740,
        47132603,
        47133447,
        47132397,
        47132807,
        47133581,
        47132889,
        47132878,
        47132582
      ],
      "score": 183,
      "time": 1771902616,
      "title": "Blood test boosts Alzheimer's diagnosis accuracy to 94.5%, clinical study shows",
      "type": "story",
      "url": "https://medicalxpress.com/news/2026-02-blood-boosts-alzheimer-diagnosis-accuracy.html"
    },
    {
      "by": "todsacerdoti",
      "descendants": 25,
      "id": 47130860,
      "kids": [
        47133856,
        47131935,
        47132497,
        47133529,
        47132489,
        47132234,
        47131845,
        47132457
      ],
      "score": 141,
      "time": 1771891125,
      "title": "I Ported Coreboot to the ThinkPad X270",
      "type": "story",
      "url": "https://dork.dev/posts/2026-02-20-ported-coreboot/"
    },
    {
      "by": "rebane2001",
      "descendants": 24,
      "id": 47132102,
      "kids": [
        47133824,
        47133427,
        47133504,
        47133500,
        47132667,
        47132691,
        47132669,
        47132810,
        47133549,
        47132783,
        47132994,
        47132458
      ],
      "score": 84,
      "time": 1771900034,
      "title": "Show HN: X86CSS – An x86 CPU emulator written in CSS",
      "type": "story",
      "url": "https://lyra.horse/x86css/"
    },
    {
      "by": "oldnetguy",
      "descendants": 1051,
      "id": 47122715,
      "kids": [
        47125799,
        47123507,
        47124633,
        47132867,
        47123950,
        47123721,
        47124438,
        47126419,
        47123851,
        47133762,
        47123418,
        47123722,
        47123250,
        47125186,
        47126593,
        47125701,
        47130999,
        47123761,
        47126288,
        47125051,
        47123393,
        47127524,
        47123145,
        47125681,
        47123617,
        47129211,
        47129876,
        47124072,
        47124607,
        47130555,
        47132568,
        47130495,
        47127004,
        47132668,
        47131638,
        47124132,
        47123416,
        47125145,
        47131056,
        47127252,
        47124166,
        47126332,
        47126137,
        47132286,
        47131314,
        47127870,
        47123357,
        47126242,
        47123937,
        47123881,
        47124150,
        47128474,
        47131724,
        47127516,
        47123959,
        47123773,
        47125304,
        47124254,
        47130369,
        47124822,
        47124897,
        47127024,
        47124056,
        47127065,
        47125996,
        47128565,
        47124304,
        47123247,
        47126149,
        47123997,
        47123409,
        47128844,
        47124485,
        47127327,
        47128447,
        47131819,
        47127814,
        47130905,
        47123905,
        47126513,
        47126429,
        47123502,
        47123307,
        47131462,
        47124909,
        47123283,
        47128881,
        47125929,
        47124512,
        47124811,
        47125856,
        47124530,
        47124267,
        47124260,
        47124209,
        47124122,
        47123817,
        47126794,
        47127777,
        47123746,
        47124760,
        47123173,
        47123874,
        47131092,
        47123529,
        47129336,
        47127679,
        47126686,
        47125708,
        47125411,
        47125191,
        47124809,
        47127493,
        47131998,
        47123177,
        47123546,
        47124771,
        47126758,
        47123284,
        47129826,
        47124169,
        47124271,
        47123337,
        47125506,
        47124042
      ],
      "score": 1387,
      "time": 1771856559,
      "title": "The Age Verification Trap: Verifying age undermines everyone's data protection",
      "type": "story",
      "url": "https://spectrum.ieee.org/age-verification"
    },
    {
      "by": "parkaboy",
      "descendants": 13,
      "id": 47133055,
      "kids": [
        47133573,
        47133721,
        47133690,
        47133804,
        47133711,
        47133534,
        47133599,
        47133637,
        47133258,
        47133367,
        47133544
      ],
      "score": 21,
      "time": 1771909490,
      "title": "Show HN: enveil – hide your .env secrets from prAIng eyes",
      "type": "story",
      "url": "https://github.com/GreatScott/enveil"
    },
    {
      "by": "beardyw",
      "descendants": 12,
      "id": 47079208,
      "kids": [
        47132793,
        47133750,
        47132814,
        47133564,
        47133058,
        47133433
      ],
      "score": 41,
      "time": 1771534512,
      "title": "Baby chicks pass the bouba-kiki test, challenging a theory of language evolution",
      "type": "story",
      "url": "https://www.scientificamerican.com/article/baby-chicks-pass-the-bouba-kiki-test-challenging-a-theory-of-language/"
    },
    {
      "by": "adebayoj",
      "descendants": 15,
      "id": 47131225,
      "kids": [
        47133075,
        47133129,
        47132478,
        47132471,
        47132635,
        47133178,
        47133560,
        47132502
      ],
      "score": 111,
      "time": 1771893482,
      "title": "Show HN: Steerling-8B, a language model that can explain any token it generates",
      "type": "story",
      "url": "https://www.guidelabs.ai/post/steerling-8b-base-model-release/"
    },
    {
      "by": "surprisetalk",
      "descendants": 69,
      "id": 47129727,
      "kids": [
        47133675,
        47132408,
        47133201,
        47133261,
        47131154,
        47131734,
        47132015,
        47131085,
        47133015,
        47130805,
        47132548,
        47131645,
        47132789,
        47132941,
        47132718,
        47131939
      ],
      "score": 135,
      "time": 1771884694,
      "title": "Making Wolfram Tech Available as a Foundation Tool for LLM Systems",
      "type": "story",
      "url": "https://writings.stephenwolfram.com/2026/02/making-wolfram-tech-available-as-a-foundation-tool-for-llm-systems/"
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
      "title": "Second-Order Thinking: The Skill Most People Never Learn",
      "description": "First-order thinking asks 'What happens next?' Second-order thinking asks 'And then what?' This distinction separates good engineers from great ones.",
      "url": "https://dev.to/_b8d89ece3338719863cb03/second-order-thinking-the-skill-most-people-never-learn-p6p",
      "tags": "mentalmodels, decisionmaking, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "_b8d89ece3338719863cb03"
    },
    {
      "title": "I Reviewed Final Round AI for Technical Interviews: Here’s What Actually Matters in 2026",
      "description": "The interview copilot market is growing quickly.  Every few months, a new tool promises to make...",
      "url": "https://dev.to/finalroundai/i-reviewed-final-round-ai-for-technical-interviews-heres-what-actually-matters-in-2026-47gd",
      "tags": "career, programming, ai, interview",
      "reactions": 18,
      "comments": 4,
      "reading_time": 6,
      "author": "hadil"
    },
    {
      "title": "AI is a lot of things, but it's a Lever.",
      "description": "One thought I had on AI recently was sparked by simple machines.  Basically the \"force multiplier\"...",
      "url": "https://dev.to/regnard/ai-is-a-lot-of-things-but-its-a-lever-1fao",
      "tags": "ai, career, productivity, discuss",
      "reactions": 3,
      "comments": 0,
      "reading_time": 1,
      "author": "regnard"
    },
    {
      "title": "From Junior to Senior: The Decision-Making Skills Nobody Teaches You",
      "description": "The gap between junior and senior engineers isn't technical knowledge — it's decision quality. Here are the specific decision-making skills that define seniority, and how to develop them deliberately.",
      "url": "https://dev.to/_b8d89ece3338719863cb03/from-junior-to-senior-the-decision-making-skills-nobody-teaches-you-37nd",
      "tags": "career, programming, beginners, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "_b8d89ece3338719863cb03"
    },
    {
      "title": "I Tracked Every Technical Decision for 6 Months. Here's What I Learned",
      "description": "183 decisions logged, reviewed, and analyzed. The patterns I found changed how I think about technical judgment and completely reshaped my approach to architecture reviews.",
      "url": "https://dev.to/_b8d89ece3338719863cb03/i-tracked-every-technical-decision-for-6-months-heres-what-i-learned-804",
      "tags": "programming, productivity, career, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "_b8d89ece3338719863cb03"
    },
    {
      "title": "From Zero to AI Agent: Your First Python Project Guide",
      "description": "Kickstart your AI career with a practical Python agent project. Perfect for beginners and career switchers.",
      "url": "https://dev.to/klement_gunndu/from-zero-to-ai-agent-your-first-python-project-guide-g93",
      "tags": "ai, beginners, python, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "klement_gunndu"
    },
    {
      "title": "Build Your First AI Agent: Ace Your Dev Job Search",
      "description": "Build your first AI agent project to stand out and ace your dev job search. Step-by-step for new grads.",
      "url": "https://dev.to/klement_gunndu/build-your-first-ai-agent-ace-your-dev-job-search-23ia",
      "tags": "ai, career, python, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 11,
      "author": "klement_gunndu"
    },
    {
      "title": "I tried Python. Something felt wrong. Then I touched the Linux kernel — and everything clicked.",
      "description": "Some journeys don't start with tutorials. Mine started with one random question at 2am.   \"How does a...",
      "url": "https://dev.to/jillravaliya/i-tried-python-something-felt-wrong-then-i-touched-the-linux-kernel-and-everything-clicked-4ag2",
      "tags": "linux, kernel, career, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "jillravaliya"
    },
    {
      "title": "7 Mental Models That Made Me a Better Software Architect",
      "description": "Charlie Munger's latticework of mental models isn't just for investors. Here's how applying cross-disciplinary thinking transformed my system design decisions.",
      "url": "https://dev.to/_b8d89ece3338719863cb03/7-mental-models-that-made-me-a-better-software-architect-30d8",
      "tags": "programming, career, productivity, architecture",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "_b8d89ece3338719863cb03"
    },
    {
      "title": "Decision Trees: A Developer's Guide to Life Choices",
      "description": "You use decision trees in code every day. Here's how to apply the same structured logic to career moves, financial choices, and life decisions.",
      "url": "https://dev.to/_b8d89ece3338719863cb03/decision-trees-a-developers-guide-to-life-choices-bbe",
      "tags": "decisionmaking, programming, career, mentalmodels",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "_b8d89ece3338719863cb03"
    }
  ]
}
```

