# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-15 06:23:57 UTC

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
      "author": "meta",
      "repo": "astryx",
      "avatar": "https://github.com/meta.png",
      "repo_link": "https://github.com/meta/astryx",
      "desc": "An open source design system that's fully customizable and agent ready",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2199,
      "added_stars": 13660,
      "builtBy": [
        {
          "username": "cixzhang",
          "href": "https://github.com/cixzhang",
          "avatar": "https://avatars.githubusercontent.com/u/2781099"
        },
        {
          "username": "rubyycheung",
          "href": "https://github.com/rubyycheung",
          "avatar": "https://avatars.githubusercontent.com/u/254546175"
        },
        {
          "username": "josephfarina",
          "href": "https://github.com/josephfarina",
          "avatar": "https://avatars.githubusercontent.com/u/17398284"
        },
        {
          "username": "vjeux",
          "href": "https://github.com/vjeux",
          "avatar": "https://avatars.githubusercontent.com/u/197597"
        }
      ]
    },
    {
      "author": "milind-soni",
      "repo": "OpenMausBot",
      "avatar": "https://github.com/milind-soni.png",
      "repo_link": "https://github.com/milind-soni/OpenMausBot",
      "desc": "Open-source Grok Bot alternative with a virtual machine that bots can use",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3189,
      "added_stars": 6413,
      "builtBy": [
        {
          "username": "milind-soni",
          "href": "https://github.com/milind-soni",
          "avatar": "https://avatars.githubusercontent.com/u/46266943"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "aivsomkar",
          "href": "https://github.com/aivsomkar",
          "avatar": "https://avatars.githubusercontent.com/u/255997030"
        },
        {
          "username": "AdityaUmale",
          "href": "https://github.com/AdityaUmale",
          "avatar": "https://avatars.githubusercontent.com/u/146627237"
        },
        {
          "username": "robinsonnblack",
          "href": "https://github.com/robinsonnblack",
          "avatar": "https://avatars.githubusercontent.com/u/331326017"
        }
      ]
    },
    {
      "author": "backnotprop",
      "repo": "plannotator",
      "avatar": "https://github.com/backnotprop.png",
      "repo_link": "https://github.com/backnotprop/plannotator",
      "desc": "The workspace to stay in the loop and on top of agents - shape, decide, plan, annotate, review code, share with team, and send all feedback to agents with one click.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 965,
      "added_stars": 818,
      "builtBy": [
        {
          "username": "backnotprop",
          "href": "https://github.com/backnotprop",
          "avatar": "https://avatars.githubusercontent.com/u/7244317"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "utpalsinghdev",
          "href": "https://github.com/utpalsinghdev",
          "avatar": "https://avatars.githubusercontent.com/u/110197373"
        },
        {
          "username": "leoreisdias",
          "href": "https://github.com/leoreisdias",
          "avatar": "https://avatars.githubusercontent.com/u/47978193"
        },
        {
          "username": "uvw",
          "href": "https://github.com/uvw",
          "avatar": "https://avatars.githubusercontent.com/u/1078682"
        }
      ]
    },
    {
      "author": "openai",
      "repo": "codex-security",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/codex-security",
      "desc": "OpenAI's Codex Security CLI and TypeScript SDK for finding, validating, and fixing security vulnerabilities. npm: https://www.npmjs.com/package/@openai/codex-security",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1057,
      "added_stars": 2176,
      "builtBy": [
        {
          "username": "mldangelo-oai",
          "href": "https://github.com/mldangelo-oai",
          "avatar": "https://avatars.githubusercontent.com/u/269034524"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
        },
        {
          "username": "ianw-oai",
          "href": "https://github.com/ianw-oai",
          "avatar": "https://avatars.githubusercontent.com/u/269041055"
        },
        {
          "username": "kmbroai",
          "href": "https://github.com/kmbroai",
          "avatar": "https://avatars.githubusercontent.com/u/272643392"
        }
      ]
    },
    {
      "author": "QwenLM",
      "repo": "qwen-code",
      "avatar": "https://github.com/QwenLM.png",
      "repo_link": "https://github.com/QwenLM/qwen-code",
      "desc": "An open-source AI coding agent that lives in your terminal.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3523,
      "added_stars": 1173,
      "builtBy": [
        {
          "username": "wenshao",
          "href": "https://github.com/wenshao",
          "avatar": "https://avatars.githubusercontent.com/u/1166785"
        },
        {
          "username": "qwencoder",
          "href": "https://github.com/qwencoder",
          "avatar": "https://avatars.githubusercontent.com/u/224605497"
        },
        {
          "username": "yiliang114",
          "href": "https://github.com/yiliang114",
          "avatar": "https://avatars.githubusercontent.com/u/11473889"
        },
        {
          "username": "tanzhenxin",
          "href": "https://github.com/tanzhenxin",
          "avatar": "https://avatars.githubusercontent.com/u/480123"
        },
        {
          "username": "qwen-code-dev-bot",
          "href": "https://github.com/qwen-code-dev-bot",
          "avatar": "https://avatars.githubusercontent.com/u/269191875"
        }
      ]
    },
    {
      "author": "lobehub",
      "repo": "lobehub",
      "avatar": "https://github.com/lobehub.png",
      "repo_link": "https://github.com/lobehub/lobehub",
      "desc": "🤯 LobeHub - Super-Agents on Your Team. Add super-agents to the chats your team already uses.They take on work by themselves and get better every week.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16321,
      "added_stars": 1258,
      "builtBy": [
        {
          "username": "arvinxx",
          "href": "https://github.com/arvinxx",
          "avatar": "https://avatars.githubusercontent.com/u/28616219"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "semantic-release-bot",
          "href": "https://github.com/semantic-release-bot",
          "avatar": "https://avatars.githubusercontent.com/u/32174276"
        },
        {
          "username": "tjx666",
          "href": "https://github.com/tjx666",
          "avatar": "https://avatars.githubusercontent.com/u/41773861"
        }
      ]
    },
    {
      "author": "CopilotKit",
      "repo": "OpenBot",
      "avatar": "https://github.com/CopilotKit.png",
      "repo_link": "https://github.com/CopilotKit/OpenBot",
      "desc": "Open-source AI coworkers that each get a computer of their own: a browser, files and tools, with every action decided before it happens and recorded after. Bring any AG-UI agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1519,
      "added_stars": 1900,
      "builtBy": [
        {
          "username": "davidmckayv",
          "href": "https://github.com/davidmckayv",
          "avatar": "https://avatars.githubusercontent.com/u/1574202"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "kevin9327",
          "href": "https://github.com/kevin9327",
          "avatar": "https://avatars.githubusercontent.com/u/5299031"
        },
        {
          "username": "guidovizoso",
          "href": "https://github.com/guidovizoso",
          "avatar": "https://avatars.githubusercontent.com/u/27702539"
        },
        {
          "username": "Ayush7614",
          "href": "https://github.com/Ayush7614",
          "avatar": "https://avatars.githubusercontent.com/u/67006255"
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
      "forks": 7608,
      "added_stars": 760,
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
          "username": "danieldietzler",
          "href": "https://github.com/danieldietzler",
          "avatar": "https://avatars.githubusercontent.com/u/36593685"
        },
        {
          "username": "shenlong-tanwen",
          "href": "https://github.com/shenlong-tanwen",
          "avatar": "https://avatars.githubusercontent.com/u/139912620"
        }
      ]
    },
    {
      "author": "every-app",
      "repo": "open-seo",
      "avatar": "https://github.com/every-app.png",
      "repo_link": "https://github.com/every-app/open-seo",
      "desc": "Open source alternative to Semrush and Ahrefs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3889,
      "added_stars": 992,
      "builtBy": [
        {
          "username": "bensenescu",
          "href": "https://github.com/bensenescu",
          "avatar": "https://avatars.githubusercontent.com/u/44480372"
        },
        {
          "username": "carterwsmith",
          "href": "https://github.com/carterwsmith",
          "avatar": "https://avatars.githubusercontent.com/u/51297686"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jeremypenguin-max",
          "href": "https://github.com/jeremypenguin-max",
          "avatar": "https://avatars.githubusercontent.com/u/287046313"
        }
      ]
    },
    {
      "author": "elie222",
      "repo": "rakazo",
      "avatar": "https://github.com/elie222.png",
      "repo_link": "https://github.com/elie222/rakazo",
      "desc": "Open-source Grok Bot alternative. Choose your own model and sandbox.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1533,
      "added_stars": 966,
      "builtBy": [
        {
          "username": "elie222",
          "href": "https://github.com/elie222",
          "avatar": "https://avatars.githubusercontent.com/u/3090527"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "zicochaos",
          "href": "https://github.com/zicochaos",
          "avatar": "https://avatars.githubusercontent.com/u/23367003"
        },
        {
          "username": "yxr-2025",
          "href": "https://github.com/yxr-2025",
          "avatar": "https://avatars.githubusercontent.com/u/226968270"
        }
      ]
    },
    {
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for month-long single sessions (billions of tokens) and small context windows (a 100K context is enough), billion-context is all you need .",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 612,
      "added_stars": 2942,
      "builtBy": [
        {
          "username": "ranxianglei",
          "href": "https://github.com/ranxianglei",
          "avatar": "https://avatars.githubusercontent.com/u/12445698"
        },
        {
          "username": "Afloat16",
          "href": "https://github.com/Afloat16",
          "avatar": "https://avatars.githubusercontent.com/u/132809511"
        },
        {
          "username": "YunzhouLi-hub",
          "href": "https://github.com/YunzhouLi-hub",
          "avatar": "https://avatars.githubusercontent.com/u/154221037"
        },
        {
          "username": "z0d0dOr",
          "href": "https://github.com/z0d0dOr",
          "avatar": "https://avatars.githubusercontent.com/u/128966342"
        }
      ]
    },
    {
      "author": "GoogleChrome",
      "repo": "modern-web-guidance-src",
      "avatar": "https://github.com/GoogleChrome.png",
      "repo_link": "https://github.com/GoogleChrome/modern-web-guidance-src",
      "desc": "Keep your coding agent up to date with the latest web best practices",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 463,
      "added_stars": 4363,
      "builtBy": [
        {
          "username": "paulirish",
          "href": "https://github.com/paulirish",
          "avatar": "https://avatars.githubusercontent.com/u/39191"
        },
        {
          "username": "rviscomi",
          "href": "https://github.com/rviscomi",
          "avatar": "https://avatars.githubusercontent.com/u/1120896"
        },
        {
          "username": "micahjo7",
          "href": "https://github.com/micahjo7",
          "avatar": "https://avatars.githubusercontent.com/u/126118814"
        },
        {
          "username": "LeaVerou",
          "href": "https://github.com/LeaVerou",
          "avatar": "https://avatars.githubusercontent.com/u/175836"
        }
      ]
    },
    {
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "The best way to control Claude Code, Codex and more from any computer or phone",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 10937,
      "added_stars": 9668,
      "builtBy": [
        {
          "username": "juliusmarminge",
          "href": "https://github.com/juliusmarminge",
          "avatar": "https://avatars.githubusercontent.com/u/51714798"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "maria-rcks",
          "href": "https://github.com/maria-rcks",
          "avatar": "https://avatars.githubusercontent.com/u/254055478"
        },
        {
          "username": "t3dotgg",
          "href": "https://github.com/t3dotgg",
          "avatar": "https://avatars.githubusercontent.com/u/6751787"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
        }
      ]
    },
    {
      "author": "garrytan",
      "repo": "gbrain",
      "avatar": "https://github.com/garrytan.png",
      "repo_link": "https://github.com/garrytan/gbrain",
      "desc": "Garry's Opinionated OpenClaw/Hermes Agent Brain",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4941,
      "added_stars": 1351,
      "builtBy": [
        {
          "username": "garrytan",
          "href": "https://github.com/garrytan",
          "avatar": "https://avatars.githubusercontent.com/u/19957"
        },
        {
          "username": "time-attack",
          "href": "https://github.com/time-attack",
          "avatar": "https://avatars.githubusercontent.com/u/89218912"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Masashi-Ono0611",
          "href": "https://github.com/Masashi-Ono0611",
          "avatar": "https://avatars.githubusercontent.com/u/98894508"
        }
      ]
    },
    {
      "author": "vuejs",
      "repo": "core",
      "avatar": "https://github.com/vuejs.png",
      "repo_link": "https://github.com/vuejs/core",
      "desc": "🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9342,
      "added_stars": 211,
      "builtBy": [
        {
          "username": "yyx990803",
          "href": "https://github.com/yyx990803",
          "avatar": "https://avatars.githubusercontent.com/u/499550"
        },
        {
          "username": "edison1105",
          "href": "https://github.com/edison1105",
          "avatar": "https://avatars.githubusercontent.com/u/3705199"
        }
      ]
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 19088,
      "added_stars": 4790,
      "builtBy": [
        {
          "username": "mxyng",
          "href": "https://github.com/mxyng",
          "avatar": "https://avatars.githubusercontent.com/u/2372640"
        },
        {
          "username": "dhiltgen",
          "href": "https://github.com/dhiltgen",
          "avatar": "https://avatars.githubusercontent.com/u/4033016"
        },
        {
          "username": "jmorganca",
          "href": "https://github.com/jmorganca",
          "avatar": "https://avatars.githubusercontent.com/u/251292"
        },
        {
          "username": "BruceMacD",
          "href": "https://github.com/BruceMacD",
          "avatar": "https://avatars.githubusercontent.com/u/5853428"
        },
        {
          "username": "jessegross",
          "href": "https://github.com/jessegross",
          "avatar": "https://avatars.githubusercontent.com/u/6468499"
        }
      ]
    },
    {
      "author": "prometheus",
      "repo": "prometheus",
      "avatar": "https://github.com/prometheus.png",
      "repo_link": "https://github.com/prometheus/prometheus",
      "desc": "The Prometheus monitoring system and time series database.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 11022,
      "added_stars": 1524,
      "builtBy": [
        {
          "username": "fabxc",
          "href": "https://github.com/fabxc",
          "avatar": "https://avatars.githubusercontent.com/u/4948210"
        },
        {
          "username": "juliusv",
          "href": "https://github.com/juliusv",
          "avatar": "https://avatars.githubusercontent.com/u/538008"
        },
        {
          "username": "beorn7",
          "href": "https://github.com/beorn7",
          "avatar": "https://avatars.githubusercontent.com/u/5609886"
        },
        {
          "username": "bboreham",
          "href": "https://github.com/bboreham",
          "avatar": "https://avatars.githubusercontent.com/u/8125524"
        }
      ]
    },
    {
      "author": "docker",
      "repo": "compose",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/compose",
      "desc": "Define and run multi-container applications with Docker",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5956,
      "added_stars": 643,
      "builtBy": [
        {
          "username": "ndeloof",
          "href": "https://github.com/ndeloof",
          "avatar": "https://avatars.githubusercontent.com/u/132757"
        },
        {
          "username": "glours",
          "href": "https://github.com/glours",
          "avatar": "https://avatars.githubusercontent.com/u/705411"
        },
        {
          "username": "gtardif",
          "href": "https://github.com/gtardif",
          "avatar": "https://avatars.githubusercontent.com/u/437958"
        },
        {
          "username": "rumpl",
          "href": "https://github.com/rumpl",
          "avatar": "https://avatars.githubusercontent.com/u/99933"
        }
      ]
    },
    {
      "author": "netbirdio",
      "repo": "netbird",
      "avatar": "https://github.com/netbirdio.png",
      "repo_link": "https://github.com/netbirdio/netbird",
      "desc": "NetBird securely connects people, machines and AI agents across any network with one identity-based Zero Trust platform. Powered by peer-to-peer WireGuard®",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1858,
      "added_stars": 1121,
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
          "username": "lixmal",
          "href": "https://github.com/lixmal",
          "avatar": "https://avatars.githubusercontent.com/u/17948409"
        },
        {
          "username": "braginini",
          "href": "https://github.com/braginini",
          "avatar": "https://avatars.githubusercontent.com/u/700848"
        },
        {
          "username": "pappz",
          "href": "https://github.com/pappz",
          "avatar": "https://avatars.githubusercontent.com/u/7756831"
        }
      ]
    },
    {
      "author": "moby",
      "repo": "moby",
      "avatar": "https://github.com/moby.png",
      "repo_link": "https://github.com/moby/moby",
      "desc": "The Moby Project - a collaborative project for the container ecosystem to assemble container-based systems",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 19313,
      "added_stars": 442,
      "builtBy": [
        {
          "username": "thaJeztah",
          "href": "https://github.com/thaJeztah",
          "avatar": "https://avatars.githubusercontent.com/u/1804568"
        },
        {
          "username": "vvoland",
          "href": "https://github.com/vvoland",
          "avatar": "https://avatars.githubusercontent.com/u/5046555"
        },
        {
          "username": "cpuguy83",
          "href": "https://github.com/cpuguy83",
          "avatar": "https://avatars.githubusercontent.com/u/799078"
        },
        {
          "username": "crosbymichael",
          "href": "https://github.com/crosbymichael",
          "avatar": "https://avatars.githubusercontent.com/u/749551"
        },
        {
          "username": "vdemeester",
          "href": "https://github.com/vdemeester",
          "avatar": "https://avatars.githubusercontent.com/u/6508"
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
      "forks": 880,
      "added_stars": 988,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1281,
      "added_stars": 1630,
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
          "username": "sbOogway",
          "href": "https://github.com/sbOogway",
          "avatar": "https://avatars.githubusercontent.com/u/92176188"
        },
        {
          "username": "fidalgo",
          "href": "https://github.com/fidalgo",
          "avatar": "https://avatars.githubusercontent.com/u/22743"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2378,
      "added_stars": 1165,
      "builtBy": [
        {
          "username": "zricethezav",
          "href": "https://github.com/zricethezav",
          "avatar": "https://avatars.githubusercontent.com/u/15034943"
        },
        {
          "username": "rgmz",
          "href": "https://github.com/rgmz",
          "avatar": "https://avatars.githubusercontent.com/u/32133502"
        },
        {
          "username": "w0rmr1d3r",
          "href": "https://github.com/w0rmr1d3r",
          "avatar": "https://avatars.githubusercontent.com/u/20722014"
        },
        {
          "username": "bryanbeverly",
          "href": "https://github.com/bryanbeverly",
          "avatar": "https://avatars.githubusercontent.com/u/1050885"
        },
        {
          "username": "petegallagher",
          "href": "https://github.com/petegallagher",
          "avatar": "https://avatars.githubusercontent.com/u/688331"
        }
      ]
    },
    {
      "author": "rclone",
      "repo": "rclone",
      "avatar": "https://github.com/rclone.png",
      "repo_link": "https://github.com/rclone/rclone",
      "desc": "\"rsync for cloud storage\" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5696,
      "added_stars": 849,
      "builtBy": [
        {
          "username": "ncw",
          "href": "https://github.com/ncw",
          "avatar": "https://avatars.githubusercontent.com/u/536803"
        },
        {
          "username": "albertony",
          "href": "https://github.com/albertony",
          "avatar": "https://avatars.githubusercontent.com/u/12441419"
        },
        {
          "username": "nielash",
          "href": "https://github.com/nielash",
          "avatar": "https://avatars.githubusercontent.com/u/31582349"
        },
        {
          "username": "ivandeex",
          "href": "https://github.com/ivandeex",
          "avatar": "https://avatars.githubusercontent.com/u/9028053"
        },
        {
          "username": "B4dM4n",
          "href": "https://github.com/B4dM4n",
          "avatar": "https://avatars.githubusercontent.com/u/448169"
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
      "stars": 0,
      "forks": 8143,
      "added_stars": 246,
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
      "author": "Asymptote-Labs",
      "repo": "agent-beacon",
      "avatar": "https://github.com/Asymptote-Labs.png",
      "repo_link": "https://github.com/Asymptote-Labs/agent-beacon",
      "desc": "The cross-harness, self-improving memory layer for AI agents. Join our community: https://discord.com/invite/zdNChS2fBu",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 305,
      "added_stars": 1661,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jqdsouza",
          "href": "https://github.com/jqdsouza",
          "avatar": "https://avatars.githubusercontent.com/u/13512741"
        },
        {
          "username": "shukieshah",
          "href": "https://github.com/shukieshah",
          "avatar": "https://avatars.githubusercontent.com/u/21977216"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "kyle-elliott-asymptote",
          "href": "https://github.com/kyle-elliott-asymptote",
          "avatar": "https://avatars.githubusercontent.com/u/337744697"
        }
      ]
    },
    {
      "author": "VictoriaMetrics",
      "repo": "VictoriaMetrics",
      "avatar": "https://github.com/VictoriaMetrics.png",
      "repo_link": "https://github.com/VictoriaMetrics/VictoriaMetrics",
      "desc": "VictoriaMetrics: fast, cost-effective monitoring solution and time series database",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1810,
      "added_stars": 285,
      "builtBy": [
        {
          "username": "valyala",
          "href": "https://github.com/valyala",
          "avatar": "https://avatars.githubusercontent.com/u/283442"
        },
        {
          "username": "hagen1778",
          "href": "https://github.com/hagen1778",
          "avatar": "https://avatars.githubusercontent.com/u/2902918"
        },
        {
          "username": "f41gh7",
          "href": "https://github.com/f41gh7",
          "avatar": "https://avatars.githubusercontent.com/u/18450869"
        },
        {
          "username": "makasim",
          "href": "https://github.com/makasim",
          "avatar": "https://avatars.githubusercontent.com/u/143206"
        },
        {
          "username": "zekker6",
          "href": "https://github.com/zekker6",
          "avatar": "https://avatars.githubusercontent.com/u/1367798"
        }
      ]
    },
    {
      "author": "go-gitea",
      "repo": "gitea",
      "avatar": "https://github.com/go-gitea.png",
      "repo_link": "https://github.com/go-gitea/gitea",
      "desc": "Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 7395,
      "added_stars": 717,
      "builtBy": [
        {
          "username": "lunny",
          "href": "https://github.com/lunny",
          "avatar": "https://avatars.githubusercontent.com/u/81045"
        },
        {
          "username": "wxiaoguang",
          "href": "https://github.com/wxiaoguang",
          "avatar": "https://avatars.githubusercontent.com/u/2114189"
        },
        {
          "username": "unknwon",
          "href": "https://github.com/unknwon",
          "avatar": "https://avatars.githubusercontent.com/u/2946214"
        },
        {
          "username": "GiteaBot",
          "href": "https://github.com/GiteaBot",
          "avatar": "https://avatars.githubusercontent.com/u/24582011"
        },
        {
          "username": "silverwind",
          "href": "https://github.com/silverwind",
          "avatar": "https://avatars.githubusercontent.com/u/115237"
        }
      ]
    },
    {
      "author": "opensandbox-group",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/opensandbox-group.png",
      "repo_link": "https://github.com/opensandbox-group/OpenSandbox",
      "desc": "Secure, Fast, and Extensible Sandbox runtime for AI agents.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1649,
      "added_stars": 1474,
      "builtBy": [
        {
          "username": "Pangjiping",
          "href": "https://github.com/Pangjiping",
          "avatar": "https://avatars.githubusercontent.com/u/62273713"
        },
        {
          "username": "ninan-nn",
          "href": "https://github.com/ninan-nn",
          "avatar": "https://avatars.githubusercontent.com/u/249928781"
        },
        {
          "username": "hittyt",
          "href": "https://github.com/hittyt",
          "avatar": "https://avatars.githubusercontent.com/u/1870207"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "hpliStartAgain",
          "href": "https://github.com/hpliStartAgain",
          "avatar": "https://avatars.githubusercontent.com/u/118508408"
        }
      ]
    },
    {
      "author": "etcd-io",
      "repo": "etcd",
      "avatar": "https://github.com/etcd-io.png",
      "repo_link": "https://github.com/etcd-io/etcd",
      "desc": "Distributed reliable key-value store for the most critical data of a distributed system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10600,
      "added_stars": 541,
      "builtBy": [
        {
          "username": "gyuho",
          "href": "https://github.com/gyuho",
          "avatar": "https://avatars.githubusercontent.com/u/6799218"
        },
        {
          "username": "ahrtr",
          "href": "https://github.com/ahrtr",
          "avatar": "https://avatars.githubusercontent.com/u/30739825"
        },
        {
          "username": "xiang90",
          "href": "https://github.com/xiang90",
          "avatar": "https://avatars.githubusercontent.com/u/4479947"
        },
        {
          "username": "serathius",
          "href": "https://github.com/serathius",
          "avatar": "https://avatars.githubusercontent.com/u/5873433"
        },
        {
          "username": "yichengq",
          "href": "https://github.com/yichengq",
          "avatar": "https://avatars.githubusercontent.com/u/2976232"
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
      "stars": 0,
      "forks": 3484,
      "added_stars": 1723,
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
          "username": "raggi",
          "href": "https://github.com/raggi",
          "avatar": "https://avatars.githubusercontent.com/u/348"
        },
        {
          "username": "andrew-d",
          "href": "https://github.com/andrew-d",
          "avatar": "https://avatars.githubusercontent.com/u/1079173"
        }
      ]
    },
    {
      "author": "HuskerMinion",
      "repo": "techo5",
      "avatar": "https://github.com/HuskerMinion.png",
      "repo_link": "https://github.com/HuskerMinion/techo5",
      "desc": "Open firmware for the Echo Show 5, 1st and 2nd gen: Alpine Linux instead of Android, no Alexa. A local Home Assistant voice satellite with its own touch screen, on-device wake word, SSH and A/B over-the-air updates.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 115,
      "added_stars": 375,
      "builtBy": [
        {
          "username": "HuskerMinion",
          "href": "https://github.com/HuskerMinion",
          "avatar": "https://avatars.githubusercontent.com/u/28571744"
        },
        {
          "username": "nuno407",
          "href": "https://github.com/nuno407",
          "avatar": "https://avatars.githubusercontent.com/u/11352538"
        },
        {
          "username": "Uthrom",
          "href": "https://github.com/Uthrom",
          "avatar": "https://avatars.githubusercontent.com/u/54080913"
        },
        {
          "username": "miraassist",
          "href": "https://github.com/miraassist",
          "avatar": "https://avatars.githubusercontent.com/u/343333049"
        },
        {
          "username": "mawi13",
          "href": "https://github.com/mawi13",
          "avatar": "https://avatars.githubusercontent.com/u/42282372"
        }
      ]
    },
    {
      "author": "infiniflow",
      "repo": "ragflow",
      "avatar": "https://github.com/infiniflow.png",
      "repo_link": "https://github.com/infiniflow/ragflow",
      "desc": "RAGFlow is an agent-native database: a Retrieval-Augmented Generation (RAG) engine that grew into context infrastructure.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 11322,
      "added_stars": 2162,
      "builtBy": [
        {
          "username": "cike8899",
          "href": "https://github.com/cike8899",
          "avatar": "https://avatars.githubusercontent.com/u/8089971"
        },
        {
          "username": "KevinHuSh",
          "href": "https://github.com/KevinHuSh",
          "avatar": "https://avatars.githubusercontent.com/u/12318111"
        },
        {
          "username": "JinHai-CN",
          "href": "https://github.com/JinHai-CN",
          "avatar": "https://avatars.githubusercontent.com/u/33142505"
        },
        {
          "username": "dcc123456",
          "href": "https://github.com/dcc123456",
          "avatar": "https://avatars.githubusercontent.com/u/20180003"
        },
        {
          "username": "wangq8",
          "href": "https://github.com/wangq8",
          "avatar": "https://avatars.githubusercontent.com/u/15903574"
        }
      ]
    },
    {
      "author": "trufflesecurity",
      "repo": "trufflehog",
      "avatar": "https://github.com/trufflesecurity.png",
      "repo_link": "https://github.com/trufflesecurity/trufflehog",
      "desc": "Find, verify, and analyze leaked credentials",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2748,
      "added_stars": 854,
      "builtBy": [
        {
          "username": "lonmarsDev",
          "href": "https://github.com/lonmarsDev",
          "avatar": "https://avatars.githubusercontent.com/u/28698778"
        },
        {
          "username": "roxanne-tampus",
          "href": "https://github.com/roxanne-tampus",
          "avatar": "https://avatars.githubusercontent.com/u/51393035"
        },
        {
          "username": "ahrav",
          "href": "https://github.com/ahrav",
          "avatar": "https://avatars.githubusercontent.com/u/21311841"
        },
        {
          "username": "dustin-decker",
          "href": "https://github.com/dustin-decker",
          "avatar": "https://avatars.githubusercontent.com/u/6031416"
        }
      ]
    },
    {
      "author": "superplanehq",
      "repo": "superplane",
      "avatar": "https://github.com/superplanehq.png",
      "repo_link": "https://github.com/superplanehq/superplane",
      "desc": "Open source factory for one-shot engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 708,
      "added_stars": 2530,
      "builtBy": [
        {
          "username": "forestileao",
          "href": "https://github.com/forestileao",
          "avatar": "https://avatars.githubusercontent.com/u/60622592"
        },
        {
          "username": "shiroyasha",
          "href": "https://github.com/shiroyasha",
          "avatar": "https://avatars.githubusercontent.com/u/1779493"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "lucaspin",
          "href": "https://github.com/lucaspin",
          "avatar": "https://avatars.githubusercontent.com/u/12387728"
        },
        {
          "username": "superplaneagent",
          "href": "https://github.com/superplaneagent",
          "avatar": "https://avatars.githubusercontent.com/u/307978323"
        }
      ]
    },
    {
      "author": "gotenberg",
      "repo": "gotenberg",
      "avatar": "https://github.com/gotenberg.png",
      "repo_link": "https://github.com/gotenberg/gotenberg",
      "desc": "A developer-friendly API for converting many document formats into PDF files, and more!",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 915,
      "added_stars": 325,
      "builtBy": [
        {
          "username": "gulien",
          "href": "https://github.com/gulien",
          "avatar": "https://avatars.githubusercontent.com/u/8983173"
        },
        {
          "username": "bendavies",
          "href": "https://github.com/bendavies",
          "avatar": "https://avatars.githubusercontent.com/u/625392"
        },
        {
          "username": "jonasgeiler",
          "href": "https://github.com/jonasgeiler",
          "avatar": "https://avatars.githubusercontent.com/u/10259118"
        },
        {
          "username": "ChocoChipset",
          "href": "https://github.com/ChocoChipset",
          "avatar": "https://avatars.githubusercontent.com/u/612990"
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
      "author": "anthropics",
      "repo": "skills",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/skills",
      "desc": "Public repository for Agent Skills",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 22905,
      "added_stars": 13927,
      "builtBy": [
        {
          "username": "rlancemartin",
          "href": "https://github.com/rlancemartin",
          "avatar": "https://avatars.githubusercontent.com/u/122662504"
        },
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
          "username": "cj-ant",
          "href": "https://github.com/cj-ant",
          "avatar": "https://avatars.githubusercontent.com/u/286490957"
        },
        {
          "username": "ericharmeling",
          "href": "https://github.com/ericharmeling",
          "avatar": "https://avatars.githubusercontent.com/u/27286675"
        }
      ]
    },
    {
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7184,
      "added_stars": 18077,
      "builtBy": [
        {
          "username": "pancacake",
          "href": "https://github.com/pancacake",
          "avatar": "https://avatars.githubusercontent.com/u/150592536"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Pinkllow",
          "href": "https://github.com/Pinkllow",
          "avatar": "https://avatars.githubusercontent.com/u/272976591"
        },
        {
          "username": "evan188199-tech",
          "href": "https://github.com/evan188199-tech",
          "avatar": "https://avatars.githubusercontent.com/u/238371241"
        }
      ]
    },
    {
      "author": "AgriciDaniel",
      "repo": "claude-seo",
      "avatar": "https://github.com/AgriciDaniel.png",
      "repo_link": "https://github.com/AgriciDaniel/claude-seo",
      "desc": "Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3726,
      "added_stars": 10402,
      "builtBy": [
        {
          "username": "AgriciDaniel",
          "href": "https://github.com/AgriciDaniel",
          "avatar": "https://avatars.githubusercontent.com/u/223140489"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "Nordalux",
          "href": "https://github.com/Nordalux",
          "avatar": "https://avatars.githubusercontent.com/u/129338099"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3973,
      "added_stars": 6228,
      "builtBy": [
        {
          "username": "jordanecker-ant",
          "href": "https://github.com/jordanecker-ant",
          "avatar": "https://avatars.githubusercontent.com/u/305637556"
        },
        {
          "username": "bryan-anthropic",
          "href": "https://github.com/bryan-anthropic",
          "avatar": "https://avatars.githubusercontent.com/u/238056179"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mattpic-ant",
          "href": "https://github.com/mattpic-ant",
          "avatar": "https://avatars.githubusercontent.com/u/227474486"
        }
      ]
    },
    {
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12277,
      "added_stars": 46324,
      "builtBy": [
        {
          "username": "debpalash",
          "href": "https://github.com/debpalash",
          "avatar": "https://avatars.githubusercontent.com/u/4178343"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "velixio",
          "href": "https://github.com/velixio",
          "avatar": "https://avatars.githubusercontent.com/u/270455167"
        },
        {
          "username": "kevin9327",
          "href": "https://github.com/kevin9327",
          "avatar": "https://avatars.githubusercontent.com/u/5299031"
        },
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        }
      ]
    },
    {
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3578,
      "added_stars": 5296,
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
          "username": "RC-CHN",
          "href": "https://github.com/RC-CHN",
          "avatar": "https://avatars.githubusercontent.com/u/67079377"
        },
        {
          "username": "zouyonghe",
          "href": "https://github.com/zouyonghe",
          "avatar": "https://avatars.githubusercontent.com/u/62183434"
        },
        {
          "username": "anka-afk",
          "href": "https://github.com/anka-afk",
          "avatar": "https://avatars.githubusercontent.com/u/110004162"
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
      "forks": 4917,
      "added_stars": 9575,
      "builtBy": [
        {
          "username": "mhegazy",
          "href": "https://github.com/mhegazy",
          "avatar": "https://avatars.githubusercontent.com/u/8000722"
        },
        {
          "username": "jordanecker-ant",
          "href": "https://github.com/jordanecker-ant",
          "avatar": "https://avatars.githubusercontent.com/u/305637556"
        },
        {
          "username": "bryan-anthropic",
          "href": "https://github.com/bryan-anthropic",
          "avatar": "https://avatars.githubusercontent.com/u/238056179"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ The BEST Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10737,
      "added_stars": 15754,
      "builtBy": [
        {
          "username": "D4Vinci",
          "href": "https://github.com/D4Vinci",
          "avatar": "https://avatars.githubusercontent.com/u/20604835"
        },
        {
          "username": "yetval",
          "href": "https://github.com/yetval",
          "avatar": "https://avatars.githubusercontent.com/u/102706514"
        },
        {
          "username": "AbdullahY36",
          "href": "https://github.com/AbdullahY36",
          "avatar": "https://avatars.githubusercontent.com/u/52079299"
        },
        {
          "username": "SulimanAbdulrazzaq",
          "href": "https://github.com/SulimanAbdulrazzaq",
          "avatar": "https://avatars.githubusercontent.com/u/144490671"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
        }
      ]
    },
    {
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2317,
      "added_stars": 5926,
      "builtBy": [
        {
          "username": "yashrajp22",
          "href": "https://github.com/yashrajp22",
          "avatar": "https://avatars.githubusercontent.com/u/282666402"
        },
        {
          "username": "rng1995",
          "href": "https://github.com/rng1995",
          "avatar": "https://avatars.githubusercontent.com/u/32655573"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "keshprad",
          "href": "https://github.com/keshprad",
          "avatar": "https://avatars.githubusercontent.com/u/32313895"
        }
      ]
    },
    {
      "author": "The-PR-Agent",
      "repo": "pr-agent",
      "avatar": "https://github.com/The-PR-Agent.png",
      "repo_link": "https://github.com/The-PR-Agent/pr-agent",
      "desc": "🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2204,
      "added_stars": 2835,
      "builtBy": [
        {
          "username": "mrT23",
          "href": "https://github.com/mrT23",
          "avatar": "https://avatars.githubusercontent.com/u/21198860"
        },
        {
          "username": "PeterDaveHello",
          "href": "https://github.com/PeterDaveHello",
          "avatar": "https://avatars.githubusercontent.com/u/3691490"
        },
        {
          "username": "IsmaelMartinez",
          "href": "https://github.com/IsmaelMartinez",
          "avatar": "https://avatars.githubusercontent.com/u/430992"
        },
        {
          "username": "okotek",
          "href": "https://github.com/okotek",
          "avatar": "https://avatars.githubusercontent.com/u/4869233"
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
      "forks": 12989,
      "added_stars": 6766,
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
          "username": "harshitanand",
          "href": "https://github.com/harshitanand",
          "avatar": "https://avatars.githubusercontent.com/u/8389627"
        }
      ]
    },
    {
      "author": "fastapi",
      "repo": "fastapi",
      "avatar": "https://github.com/fastapi.png",
      "repo_link": "https://github.com/fastapi/fastapi",
      "desc": "FastAPI framework, high performance, easy to learn, fast to code, ready for production",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10270,
      "added_stars": 2599,
      "builtBy": [
        {
          "username": "tiangolo",
          "href": "https://github.com/tiangolo",
          "avatar": "https://avatars.githubusercontent.com/u/1326112"
        },
        {
          "username": "YuriiMotov",
          "href": "https://github.com/YuriiMotov",
          "avatar": "https://avatars.githubusercontent.com/u/109919500"
        }
      ]
    },
    {
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 23010,
      "added_stars": 13454,
      "builtBy": [
        {
          "username": "harry0703",
          "href": "https://github.com/harry0703",
          "avatar": "https://avatars.githubusercontent.com/u/4928832"
        },
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "c020627",
          "href": "https://github.com/c020627",
          "avatar": "https://avatars.githubusercontent.com/u/251123242"
        },
        {
          "username": "tanishqbaweja",
          "href": "https://github.com/tanishqbaweja",
          "avatar": "https://avatars.githubusercontent.com/u/74068132"
        }
      ]
    },
    {
      "author": "ahujasid",
      "repo": "mcp-for-blender",
      "avatar": "https://github.com/ahujasid.png",
      "repo_link": "https://github.com/ahujasid/mcp-for-blender",
      "desc": "Community plugin to control Blender 3D with any LLM of your choice. Not affiliated with the official Blender Foundation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3144,
      "added_stars": 3730,
      "builtBy": [
        {
          "username": "ahujasid",
          "href": "https://github.com/ahujasid",
          "avatar": "https://avatars.githubusercontent.com/u/11807284"
        },
        {
          "username": "ElgoogUdiab",
          "href": "https://github.com/ElgoogUdiab",
          "avatar": "https://avatars.githubusercontent.com/u/28426666"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "siddikisahil47",
          "href": "https://github.com/siddikisahil47",
          "avatar": "https://avatars.githubusercontent.com/u/134954614"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "luongnv89",
      "repo": "claude-howto",
      "avatar": "https://github.com/luongnv89.png",
      "repo_link": "https://github.com/luongnv89/claude-howto",
      "desc": "A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5751,
      "added_stars": 5494,
      "builtBy": [
        {
          "username": "luongnv89",
          "href": "https://github.com/luongnv89",
          "avatar": "https://avatars.githubusercontent.com/u/3288457"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "edocltd",
          "href": "https://github.com/edocltd",
          "avatar": "https://avatars.githubusercontent.com/u/258913972"
        },
        {
          "username": "toanalien",
          "href": "https://github.com/toanalien",
          "avatar": "https://avatars.githubusercontent.com/u/5405744"
        },
        {
          "username": "lzw-git-all",
          "href": "https://github.com/lzw-git-all",
          "avatar": "https://avatars.githubusercontent.com/u/271938013"
        }
      ]
    },
    {
      "author": "Comfy-Org",
      "repo": "ComfyUI",
      "avatar": "https://github.com/Comfy-Org.png",
      "repo_link": "https://github.com/Comfy-Org/ComfyUI",
      "desc": "The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local inference engine in the world.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 17517,
      "added_stars": 9823,
      "builtBy": [
        {
          "username": "comfyanonymous",
          "href": "https://github.com/comfyanonymous",
          "avatar": "https://avatars.githubusercontent.com/u/121283862"
        },
        {
          "username": "bigcat88",
          "href": "https://github.com/bigcat88",
          "avatar": "https://avatars.githubusercontent.com/u/13381981"
        },
        {
          "username": "pythongosssss",
          "href": "https://github.com/pythongosssss",
          "avatar": "https://avatars.githubusercontent.com/u/125205205"
        },
        {
          "username": "comfyui-wiki",
          "href": "https://github.com/comfyui-wiki",
          "avatar": "https://avatars.githubusercontent.com/u/192523189"
        },
        {
          "username": "rattus128",
          "href": "https://github.com/rattus128",
          "avatar": "https://avatars.githubusercontent.com/u/46076784"
        }
      ]
    },
    {
      "author": "pandas-dev",
      "repo": "pandas",
      "avatar": "https://github.com/pandas-dev.png",
      "repo_link": "https://github.com/pandas-dev/pandas",
      "desc": "Flexible and powerful data analysis / manipulation library for Python, providing labeled data structures similar to R data.frame objects, statistical functions, and much more",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 20741,
      "added_stars": 1062,
      "builtBy": [
        {
          "username": "jbrockmendel",
          "href": "https://github.com/jbrockmendel",
          "avatar": "https://avatars.githubusercontent.com/u/8078968"
        },
        {
          "username": "jreback",
          "href": "https://github.com/jreback",
          "avatar": "https://avatars.githubusercontent.com/u/953992"
        },
        {
          "username": "wesm",
          "href": "https://github.com/wesm",
          "avatar": "https://avatars.githubusercontent.com/u/329591"
        },
        {
          "username": "mroeschke",
          "href": "https://github.com/mroeschke",
          "avatar": "https://avatars.githubusercontent.com/u/10647082"
        },
        {
          "username": "jorisvandenbossche",
          "href": "https://github.com/jorisvandenbossche",
          "avatar": "https://avatars.githubusercontent.com/u/1020496"
        }
      ]
    },
    {
      "author": "earthtojake",
      "repo": "text-to-cad",
      "avatar": "https://github.com/earthtojake.png",
      "repo_link": "https://github.com/earthtojake/text-to-cad",
      "desc": "Design physical products with AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2510,
      "added_stars": 6184,
      "builtBy": [
        {
          "username": "earthtojake",
          "href": "https://github.com/earthtojake",
          "avatar": "https://avatars.githubusercontent.com/u/10742417"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "warun7",
          "href": "https://github.com/warun7",
          "avatar": "https://avatars.githubusercontent.com/u/143688508"
        }
      ]
    },
    {
      "author": "vllm-project",
      "repo": "vllm",
      "avatar": "https://github.com/vllm-project.png",
      "repo_link": "https://github.com/vllm-project/vllm",
      "desc": "A high-throughput and memory-efficient inference and serving engine for LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 24834,
      "added_stars": 3371,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "DarkLight1337",
          "href": "https://github.com/DarkLight1337",
          "avatar": "https://avatars.githubusercontent.com/u/44970335"
        },
        {
          "username": "mgoin",
          "href": "https://github.com/mgoin",
          "avatar": "https://avatars.githubusercontent.com/u/3195154"
        },
        {
          "username": "WoosukKwon",
          "href": "https://github.com/WoosukKwon",
          "avatar": "https://avatars.githubusercontent.com/u/46394894"
        },
        {
          "username": "hmellor",
          "href": "https://github.com/hmellor",
          "avatar": "https://avatars.githubusercontent.com/u/19981378"
        }
      ]
    },
    {
      "author": "elayadesign",
      "repo": "ai-design-skills",
      "avatar": "https://github.com/elayadesign.png",
      "repo_link": "https://github.com/elayadesign/ai-design-skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1200,
      "added_stars": 12940,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "elayadesign",
          "href": "https://github.com/elayadesign",
          "avatar": "https://avatars.githubusercontent.com/u/218383883"
        },
        {
          "username": "kachar",
          "href": "https://github.com/kachar",
          "avatar": "https://avatars.githubusercontent.com/u/893608"
        },
        {
          "username": "devluiscavalcante",
          "href": "https://github.com/devluiscavalcante",
          "avatar": "https://avatars.githubusercontent.com/u/113953786"
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
      "title": "Dual JWT Authentication: Security, Redis, and Trade-Offs",
      "url": "https://www.jstools.space/blog/dual-jwt-authentication/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-11-07T23:57:17.000Z"
    },
    {
      "title": "pathmask matches relative paths against patterns in the syntax of .gitignore",
      "url": "https://github.com/webdiscus/pathmask",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-11-07T17:59:41.000Z"
    },
    {
      "title": "Announcing Parcel 3 Alpha",
      "url": "https://v3.parceljs.org/blog/v3-alpha/?ck_subscriber_id=2125261785",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-11-06T22:46:50.000Z"
    },
    {
      "title": "Goyangi: watch what Claude Code is doing, live: every step, tool call, subagent, token and cost in a side panel",
      "url": "https://github.com/netil/goyangi",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-11-05T12:48:22.000Z"
    },
    {
      "title": "We Migrated 10,144 Tests from Jest to Vitest in 3 Weeks: The Honest, AI-Assisted Truth",
      "url": "https://dev.to/subito/we-migrated-10144-tests-from-jest-to-vitest-in-3-weeks-the-honest-ai-assisted-truth-527",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-11-02T11:41:57.000Z"
    },
    {
      "title": "Repo-Atlas - Any GitHub user’s work, mapped and clustered, with stale favorites flagged.",
      "url": "https://github.com/evoluteur/repo-atlas",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-22T01:27:11.000Z"
    },
    {
      "title": "EchoJS Meta: I'm Going Home",
      "url": "text://Hi all, I know I've been pretty absent the past few months.  I've been in two separate extended hospital stays over the past few months.  I'm going home now and looking forward to getting more involved again. \n\nAside, if anyone has it knows of open, real developer positions in the US for fully remote work, please reach out. \n\ntracker1 at Gmail.",
      "upvotes": "5",
      "comments": "3",
      "created": "2026-10-21T21:56:10.000Z"
    },
    {
      "title": "SVAR Gantt v2.8 for React, Svelte, Vue: upgraded scheduling engine & live updates",
      "url": "https://svar.dev/blog/svar-gantt-2-8-released/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-21T08:31:06.000Z"
    },
    {
      "title": "Vovk.ts – Turn Next.js route handlers into MCP tools and typed clients",
      "url": "https://vovk.dev",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-20T19:29:00.000Z"
    },
    {
      "title": "Full port of CossUI components to Svelte",
      "url": "https://cossui-svelte.com/",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-10-20T17:00:56.000Z"
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
      "title": "Congrats to the Hacktoberfest Open-Source AI Challenge Week 4: Ghost in the Machine Winners!",
      "description": "The results are in for the final week of our Hacktoberfest DEV Challenges! For Ghost in the Machine,...",
      "url": "https://dev.to/devteam/congrats-to-the-hacktoberfest-open-source-ai-challenge-week-4-ghost-in-the-machine-winners-nok",
      "tags": "devchallenge, hf26challenge, hacktoberfest, ai",
      "reactions": 86,
      "comments": 36,
      "reading_time": 4,
      "author": "heyitsjem"
    },
    {
      "title": "Long Live Rails",
      "description": "When DHH took the stage at Rails World 2026 and talked openly about going \"pencils down\" on...",
      "url": "https://dev.to/ben/long-live-rails-3p21",
      "tags": "rails, ruby, rust, ai",
      "reactions": 126,
      "comments": 21,
      "reading_time": 5,
      "author": "ben"
    },
    {
      "title": "Ultimate AI Roast! 😂😹",
      "description": "I asked my favorite AI to Roast me. Thanks @trickell for this idea.   You need to try this with your...",
      "url": "https://dev.to/annavi11arrea1/ultimate-ai-roast-168b",
      "tags": "ai, webdev, claude, cli",
      "reactions": 70,
      "comments": 26,
      "reading_time": 4,
      "author": "annavi11arrea1"
    },
    {
      "title": "️🎞️ What is native multimodality?",
      "description": "🍿 Just a moment #01    Did you know there are three tokenizers involved when Gemini...",
      "url": "https://dev.to/googlecloud/what-is-native-multimodality-3091",
      "tags": "llm, machinelearning, videos, justamoment",
      "reactions": 5,
      "comments": 0,
      "reading_time": 1,
      "author": "picardparis"
    },
    {
      "title": "Can't Beat Free: Gemma 4 31B on AMD Token Lab, with a Local Chat Page and an ADK Agent",
      "description": "AMD Token Lab is a free OpenAI-compatible API on AMD GPUs that comes with the AMD AI Developer Program. How to sign up, a local chat page that keeps the key off the browser, a terminal client, and a small ADK agent that calls Gemma 4 31B through it.",
      "url": "https://dev.to/gde/cant-beat-free-gemma-4-31b-on-amd-token-lab-with-a-local-chat-page-and-an-adk-agent-c5b",
      "tags": "gemma, amd, adk, ai",
      "reactions": 36,
      "comments": 13,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Refactor or Rot: Designing a Self-Improving Codebase",
      "description": "Coding agents have made it easier to produce software quickly. They have also made an old problem...",
      "url": "https://dev.to/jacob_prall_1c6bff06b0e0d/refactor-or-rot-designing-a-self-improving-codebase-22ak",
      "tags": "agents, ai, refactoring, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "jacob_prall_1c6bff06b0e0d"
    },
    {
      "title": "How did you end up in tech, and are you staying?",
      "description": "Last week you showed me where you code. This week I want to know how you ended up there in the first...",
      "url": "https://dev.to/maame-codes/how-did-you-end-up-in-tech-and-are-you-staying-4l9b",
      "tags": "discuss, career, beginners, watercooler",
      "reactions": 161,
      "comments": 65,
      "reading_time": 3,
      "author": "maame-codes"
    },
    {
      "title": "Can you merge at agent speed?",
      "description": "Major League Hacking and Entire are teaming up for a year of hackathons, DEV Challenges, and a new...",
      "url": "https://blog.mlh.com/can-you-merge-at-agent-speed-4m67",
      "tags": "hackathon, ai, opensource, entire",
      "reactions": 32,
      "comments": 3,
      "reading_time": 5,
      "author": "mlhacks"
    },
    {
      "title": "Why We Built an MCP Server for AI Founders’ Go to Market",
      "description": "Launching a technical startup in the age of AI is challenging. So we built a full MCP server to put...",
      "url": "https://dev.to/tedcarstensen/why-we-built-an-mcp-server-for-ai-founders-go-to-market-4hge",
      "tags": "ai, mcp, startup",
      "reactions": 2,
      "comments": 0,
      "reading_time": 5,
      "author": "tedcarstensen"
    },
    {
      "title": "Fast multimodal control flow with the Gemini Decisions API",
      "description": "Generative models write text for people to read. When your app only needs to pick a tool or route a...",
      "url": "https://dev.to/philschmid/fast-multimodal-control-flow-with-the-gemini-decisions-api-533b",
      "tags": "ai, api, gemini, llm",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "philschmid"
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
      "title": "Disk encryption on NetBSD achieving secrecy",
      "url": "https://netbsd.org/~nia/disk-encrypt/",
      "score": 1,
      "comments": 0,
      "tags": [
        "netbsd"
      ],
      "id": "6ovrdg"
    },
    {
      "title": "Periodic-Oriented Programming for FIRST Robotics",
      "url": "https://bvisness.me/periodic-oriented-programming/",
      "score": 6,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "bwjt1b"
    },
    {
      "title": "25 of my favourite modern NES games",
      "url": "https://jordi.inversethought.com/blog/25-of-my-favourite-modern-nes-games/",
      "score": 10,
      "comments": 0,
      "tags": [
        "games",
        "retrocomputing"
      ],
      "id": "w9j7xs"
    },
    {
      "title": "WebGL Flight Simulator with seed generated terrain",
      "url": "https://baron.by.dai.studio/",
      "score": -3,
      "comments": 0,
      "tags": [
        "ai",
        "games",
        "web"
      ],
      "id": "tjwnpb"
    },
    {
      "title": "Reintroducing Spaces",
      "url": "https://dholms.leaflet.pub/3mu3p3ldwrc26",
      "score": 2,
      "comments": 1,
      "tags": [
        "programming"
      ],
      "id": "dwd6xu"
    },
    {
      "title": "Parsing nested lists in BQN",
      "url": "https://saltysylvi.github.io/blog/parsing-nested-lists-in-bqn.html",
      "score": 5,
      "comments": 0,
      "tags": [
        "apl"
      ],
      "id": "nbjckz"
    },
    {
      "title": "Let's Employ",
      "url": "https://www.letsemploy.org",
      "score": -2,
      "comments": 1,
      "tags": [
        "web"
      ],
      "id": "shbyjz"
    },
    {
      "title": "Walking across my Minecraft backups with Plakar",
      "url": "https://poolp.org/posts/2026-11-14/walking-across-my-minecraft-backups-with-plakar/",
      "score": -2,
      "comments": 0,
      "tags": [
        "go"
      ],
      "id": "h6eofy"
    },
    {
      "title": "Let Me Let You Own Your Data",
      "url": "https://www.willett.io/posts/data/",
      "score": 31,
      "comments": 21,
      "tags": [
        "databases",
        "privacy"
      ],
      "id": "fllb0m"
    },
    {
      "title": "Perses",
      "url": "https://perses.dev/",
      "score": -3,
      "comments": 1,
      "tags": [
        "devops"
      ],
      "id": "14wyzy"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "ls612",
      "descendants": 676,
      "id": 50500963,
      "kids": [
        50502268,
        50501743,
        50502003,
        50501040,
        50504469,
        50502277,
        50501173,
        50501214,
        50501158,
        50501108,
        50502618,
        50503305,
        50501021,
        50500991,
        50501297,
        50501007,
        50500977,
        50502341,
        50500984,
        50501210,
        50501437,
        50503321,
        50503981,
        50501037,
        50501642,
        50500982,
        50501002,
        50501341,
        50501096,
        50503859,
        50501985,
        50502045,
        50501131,
        50501739,
        50501115,
        50501266,
        50501112,
        50503170,
        50501774,
        50502488,
        50503319,
        50502538,
        50502434,
        50501025,
        50501296,
        50501136,
        50502405,
        50503719,
        50501081,
        50503150,
        50501093,
        50502814,
        50502943,
        50502796,
        50501840,
        50501567,
        50501414,
        50501067,
        50501050,
        50503309,
        50501047,
        50500976,
        50502601,
        50501709,
        50501234,
        50501071,
        50501512,
        50501048,
        50501263,
        50501139,
        50501735,
        50501636,
        50501577,
        50502581,
        50501057,
        50501235
      ],
      "score": 1014,
      "text": "<a href=\"https:&#x2F;&#x2F;x.com&#x2F;SpaceX&#x2F;status&#x2F;2121316300702056595\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;SpaceX&#x2F;status&#x2F;2121316300702056595</a><p><a href=\"https:&#x2F;&#x2F;youtu.be&#x2F;jHlpfNSpBmw?t=3233\" rel=\"nofollow\">https:&#x2F;&#x2F;youtu.be&#x2F;jHlpfNSpBmw?t=3233</a>",
      "time": 1794691344,
      "title": "SpaceX catches the Starship to end Flight 15",
      "type": "story",
      "url": "https://www.spacex.com/launches/starship-flight-15"
    },
    {
      "by": "armcat",
      "descendants": 298,
      "id": 50499017,
      "kids": [
        50499563,
        50499905,
        50502105,
        50500487,
        50499542,
        50499644,
        50499335,
        50501704,
        50504123,
        50502095,
        50499964,
        50500249,
        50500004,
        50500324,
        50499623,
        50502870,
        50501271,
        50499757,
        50499296,
        50503714,
        50501110,
        50500397,
        50501420,
        50502780,
        50501980,
        50499208,
        50499584,
        50500808,
        50503302,
        50503163,
        50501762,
        50499999,
        50503311,
        50502327,
        50502030,
        50502307,
        50503502,
        50499270,
        50501435
      ],
      "score": 749,
      "time": 1794678190,
      "title": "Lovable apps expose passport details and more than 200K private messages",
      "type": "story",
      "url": "https://www.crissyfield.de/research/lovable-en/"
    },
    {
      "by": "pjmlp",
      "descendants": 4,
      "id": 50478701,
      "kids": [
        50504448,
        50504356,
        50504393,
        50504442
      ],
      "score": 34,
      "time": 1794547328,
      "title": "Memory Safety Bugs in Rust Standard Library",
      "type": "story",
      "url": "https://forge-blog.github.io/posts/rust-std-memory-safety/"
    },
    {
      "by": "MarinhoD",
      "descendants": 8,
      "id": 50504072,
      "kids": [
        50504334,
        50504374,
        50504400,
        50504301,
        50504486,
        50504247,
        50504136,
        50504365
      ],
      "score": 25,
      "text": "Yes, i really hate &quot;dict[str, ANY]&quot;",
      "time": 1794717565,
      "title": "Show HN: Gawain – Require type hints on all Python variables",
      "type": "story",
      "url": "https://github.com/matheuzgomes/gawain"
    },
    {
      "by": "Skyfall106",
      "descendants": 73,
      "id": 50501594,
      "kids": [
        50502181,
        50504475,
        50504438,
        50503234,
        50502472,
        50502713,
        50502104,
        50503294,
        50503715,
        50502392,
        50503678,
        50502251,
        50502569,
        50502623,
        50503011,
        50504163,
        50502682
      ],
      "score": 169,
      "time": 1794694969,
      "title": "How did Woz write the Apple 1 BASIC before building the computer?",
      "type": "story",
      "url": "https://retrocomputing.stackexchange.com/questions/17957"
    },
    {
      "by": "tthanh2k6",
      "descendants": 1,
      "id": 50503930,
      "kids": [
        50504447,
        50503938
      ],
      "score": 16,
      "time": 1794715751,
      "title": "Show HN: Turbo-Browser-MCP – Batch forms, DOM deltas and submit guards for MCP",
      "type": "story",
      "url": "https://github.com/Tthanh2k6/turbo-browser-mcp"
    },
    {
      "by": "ybathaee",
      "descendants": 3,
      "id": 50502988,
      "kids": [
        50504433,
        50504300
      ],
      "score": 39,
      "time": 1794705516,
      "title": "Court denies motion to dismiss DRAM price fixing case",
      "type": "story",
      "url": "https://litnews.ai/articles/garciaguirre-samsung-sk-hynix-micron-dram-conspiracy-suit-survives-dismissal"
    },
    {
      "by": "pseudolus",
      "descendants": 1,
      "id": 50482222,
      "kids": [
        50504484
      ],
      "score": 23,
      "time": 1794570919,
      "title": "The Evolving Story of How Chemistry Became Biology",
      "type": "story",
      "url": "https://www.quantamagazine.org/the-evolving-story-of-how-chemistry-became-biology-20261112/"
    },
    {
      "by": "nobody9999",
      "descendants": 41,
      "id": 50503255,
      "kids": [
        50503982,
        50503594,
        50504445,
        50503426,
        50504372,
        50503536,
        50504128,
        50504019,
        50504050,
        50504020,
        50504015
      ],
      "score": 169,
      "time": 1794708054,
      "title": "We're Asking an Appeals Court to Require a Warrant for ALPR Searches",
      "type": "story",
      "url": "https://www.eff.org/deeplinks/2026/11/were-asking-appeals-court-require-warrant-alpr-searches"
    },
    {
      "by": "umerf",
      "descendants": 130,
      "id": 50499038,
      "kids": [
        50501463,
        50499826,
        50499468,
        50501062,
        50504350,
        50503699,
        50500242,
        50501000,
        50499562,
        50502547,
        50499798,
        50500759,
        50499322,
        50499647,
        50500746,
        50500949,
        50504304,
        50500776,
        50499938,
        50499534,
        50501034,
        50501105,
        50501484,
        50504207,
        50500651,
        50503653,
        50500117,
        50499710,
        50499454,
        50500545,
        50500457,
        50500385,
        50501405,
        50500694,
        50504033,
        50500480,
        50499359,
        50500226,
        50500926,
        50500679,
        50501525,
        50501764,
        50500280,
        50502891,
        50500225,
        50499383
      ],
      "score": 270,
      "time": 1794678319,
      "title": "A family tree of software job titles",
      "type": "story",
      "url": "https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/"
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
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "devto",
  "tag": "career",
  "sort": "top",
  "items": [
    {
      "title": "Code Is Cheap Now. Judgment Isn't: The Review Bottleneck and the Vanishing Apprenticeship",
      "description": "Writing code has become the cheapest part of software development. Understanding it hasn't.  Over the...",
      "url": "https://dev.to/karmen_f883f51347e4136a4e/code-is-cheap-now-judgment-isnt-the-review-bottleneck-and-the-vanishing-apprenticeship-1neg",
      "tags": "ai, career, programming, discuss",
      "reactions": 10,
      "comments": 1,
      "reading_time": 8,
      "author": "karmen_f883f51347e4136a4e"
    },
    {
      "title": "How to Run a System Design Mock Interview That Actually Prepares You",
      "description": "Most system design practice looks like this: watch a video, nod along, read a solution, feel ready....",
      "url": "https://dev.to/aditya_shukla_b8a48a7984a/how-to-run-a-system-design-mock-interview-that-actually-prepares-you-25p7",
      "tags": "systemdesign, interview, career, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "aditya_shukla_b8a48a7984a"
    },
    {
      "title": "Your Phone Is Face-Down and Silent. Is It Still Eating Your Working Memory?",
      "description": "Your phone doesn't have to buzz to cost you something. That's the claim, anyway.  You know the setup....",
      "url": "https://dev.to/spartanrich430/your-phone-is-face-down-and-silent-is-it-still-eating-your-working-memory-298h",
      "tags": "productivity, programming, learning, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "spartanrich430"
    },
    {
      "title": "How ATS Parses Awards, Honors and Recognition",
      "description": "List awards and honors so ATS keeps them: safe headings, one-line format, parser behavior, weak vs optimized rewrites and a pre-submit checklist.",
      "url": "https://dev.to/muhammadalimughal/how-ats-parses-awards-honors-and-recognition-i8l",
      "tags": "career, resume, jobs, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "muhammadalimughal"
    },
    {
      "title": "Going from W-2 to 1099 as a developer: the tax math nobody puts in the offer",
      "description": "A contract rate that looks 30% higher can pay less than a salary. The self-employment tax gap, quarterly estimates and deductions, with 2026 numbers.",
      "url": "https://dev.to/paidandfiled/going-from-w-2-to-1099-as-a-developer-the-tax-math-nobody-puts-in-the-offer-13li",
      "tags": "career, freelance, productivity, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "paidandfiled"
    },
    {
      "title": "8 system design flows interviewers ask you to draw, and the step they always poke at",
      "description": "Most system design rounds I've seen go wrong in the same place. Not the big boxes. The candidate...",
      "url": "https://dev.to/maheshbandaru_ba8cc2/8-system-design-flows-interviewers-ask-you-to-draw-and-the-step-they-always-poke-at-mc",
      "tags": "systemdesign, interview, career, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "maheshbandaru_ba8cc2"
    },
    {
      "title": "15 embedded interview questions that trip up strong candidates",
      "description": "Firmware interviews are not inverted LeetCode. The questions that actually decide a screen are...",
      "url": "https://dev.to/firmwareprep/15-embedded-interview-questions-that-trip-up-strong-candidates-3hho",
      "tags": "embedded, c, career, interview",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "firmwareprep"
    },
    {
      "title": "I'm a Corporate Lawyer Who Can't Read Code. I Built a Production-Grade Information System with AI in 3 Months. Here's My Method.",
      "description": "Let me get the confession out of the way first: I still can't read code. Put a Python file in front...",
      "url": "https://dev.to/feet_greet_ca43f275a38303/im-a-corporate-lawyer-who-cant-read-code-i-built-a-production-grade-information-system-with-ai-11i5",
      "tags": "ai, career, beginners, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "feet_greet_ca43f275a38303"
    },
    {
      "title": "I built interview prep games where you write real CSS and JavaScript",
      "description": "How Playhire teaches Flexbox, Grid, sorting, and the event loop by making you write real CSS and JavaScript — and what I learned about making learning games actually fun.",
      "url": "https://dev.to/muhammadminhaj786/i-built-interview-prep-games-where-you-write-real-css-and-javascript-5bif",
      "tags": "webdev, css, javascript, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "muhammadminhaj786"
    },
    {
      "title": "Voyager 1 Hits One Light-Day From Earth: Lessons From the Oldest Production System We Run",
      "description": "On Wednesday, a message sent to Voyager 1 will take a full day to reach it.  The spacecraft launched...",
      "url": "https://dev.to/sergheipogor/voyager-1-hits-one-light-day-from-earth-lessons-from-the-oldest-production-system-we-run-1007",
      "tags": "space, programming, career, engineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "sergheipogor"
    }
  ]
}
```

