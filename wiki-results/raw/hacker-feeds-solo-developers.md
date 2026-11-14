# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-14 06:23:13 UTC

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
      "author": "milind-soni",
      "repo": "OpenMausBot",
      "avatar": "https://github.com/milind-soni.png",
      "repo_link": "https://github.com/milind-soni/OpenMausBot",
      "desc": "Open-source Grok Bot alternative with a virtual machine that bots can use",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3102,
      "added_stars": 7763,
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
      "author": "lobehub",
      "repo": "lobehub",
      "avatar": "https://github.com/lobehub.png",
      "repo_link": "https://github.com/lobehub/lobehub",
      "desc": "🤯 LobeHub - Super-Agents on Your Team. Add super-agents to the chats your team already uses.They take on work by themselves and get better every week.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16302,
      "added_stars": 1126,
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
      "author": "openai",
      "repo": "codex-security",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/codex-security",
      "desc": "OpenAI's Codex Security CLI and TypeScript SDK for finding, validating, and fixing security vulnerabilities. npm: https://www.npmjs.com/package/@openai/codex-security",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1027,
      "added_stars": 1712,
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
      "author": "CopilotKit",
      "repo": "OpenBot",
      "avatar": "https://github.com/CopilotKit.png",
      "repo_link": "https://github.com/CopilotKit/OpenBot",
      "desc": "Open-source AI coworkers that each get a computer of their own: a browser, files and tools, with every action decided before it happens and recorded after. Bring any AG-UI agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1491,
      "added_stars": 1774,
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
      "forks": 7593,
      "added_stars": 747,
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
      "author": "can1357",
      "repo": "oh-my-pi",
      "avatar": "https://github.com/can1357.png",
      "repo_link": "https://github.com/can1357/oh-my-pi",
      "desc": "⌥ Coding agent with the IDE wired in. Built by Stencil Labs.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4451,
      "added_stars": 973,
      "builtBy": [
        {
          "username": "can1357",
          "href": "https://github.com/can1357",
          "avatar": "https://avatars.githubusercontent.com/u/11807264"
        },
        {
          "username": "roboomp",
          "href": "https://github.com/roboomp",
          "avatar": "https://avatars.githubusercontent.com/u/284758152"
        },
        {
          "username": "badlogic",
          "href": "https://github.com/badlogic",
          "avatar": "https://avatars.githubusercontent.com/u/514052"
        },
        {
          "username": "H4vC",
          "href": "https://github.com/H4vC",
          "avatar": "https://avatars.githubusercontent.com/u/10531428"
        },
        {
          "username": "will-bogusz",
          "href": "https://github.com/will-bogusz",
          "avatar": "https://avatars.githubusercontent.com/u/24197106"
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
      "forks": 3869,
      "added_stars": 1012,
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
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for month-long single sessions (billions of tokens) and small context windows (a 100K context is enough), billion-context is all you need .",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 602,
      "added_stars": 3008,
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
      "author": "backnotprop",
      "repo": "plannotator",
      "avatar": "https://github.com/backnotprop.png",
      "repo_link": "https://github.com/backnotprop/plannotator",
      "desc": "The workspace to stay in the loop and on top of agents - shape, decide, plan, annotate, review code, share with team, and send all feedback to agents with one click.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 791,
      "added_stars": 511,
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
      "author": "humanlayer",
      "repo": "skills",
      "avatar": "https://github.com/humanlayer.png",
      "repo_link": "https://github.com/humanlayer/skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 205,
      "added_stars": 138,
      "builtBy": [
        {
          "username": "dexhorthy",
          "href": "https://github.com/dexhorthy",
          "avatar": "https://avatars.githubusercontent.com/u/3730605"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "K-Mistele",
          "href": "https://github.com/K-Mistele",
          "avatar": "https://avatars.githubusercontent.com/u/18430555"
        },
        {
          "username": "LuisGot",
          "href": "https://github.com/LuisGot",
          "avatar": "https://avatars.githubusercontent.com/u/161772233"
        }
      ]
    },
    {
      "author": "getpaseo",
      "repo": "paseo",
      "avatar": "https://github.com/getpaseo.png",
      "repo_link": "https://github.com/getpaseo/paseo",
      "desc": "Orchestrate multiple coding agents from desktop and mobile",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2949,
      "added_stars": 743,
      "builtBy": [
        {
          "username": "boudra",
          "href": "https://github.com/boudra",
          "avatar": "https://avatars.githubusercontent.com/u/711886"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cleiter",
          "href": "https://github.com/cleiter",
          "avatar": "https://avatars.githubusercontent.com/u/135764"
        }
      ]
    },
    {
      "author": "meta",
      "repo": "astryx",
      "avatar": "https://github.com/meta.png",
      "repo_link": "https://github.com/meta/astryx",
      "desc": "An open source design system that's fully customizable and agent ready",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2137,
      "added_stars": 13375,
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
      "author": "GoogleChrome",
      "repo": "modern-web-guidance-src",
      "avatar": "https://github.com/GoogleChrome.png",
      "repo_link": "https://github.com/GoogleChrome/modern-web-guidance-src",
      "desc": "Keep your coding agent up to date with the latest web best practices",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 277,
      "added_stars": 3377,
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
      "author": "elie222",
      "repo": "rakazo",
      "avatar": "https://github.com/elie222.png",
      "repo_link": "https://github.com/elie222/rakazo",
      "desc": "Open-source Grok Bot alternative. Choose your own model and sandbox.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1498,
      "added_stars": 975,
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
      "author": "nightly-labs",
      "repo": "openbot",
      "avatar": "https://github.com/nightly-labs.png",
      "repo_link": "https://github.com/nightly-labs/openbot",
      "desc": "A local-first desktop workspace for persistent AI teammates. Run Codex, Claude, and Grok with dedicated workspaces, task queues, file sharing, browser control, and agent-to-agent collaboration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 763,
      "added_stars": 1509,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "NorbertBodziony",
          "href": "https://github.com/NorbertBodziony",
          "avatar": "https://avatars.githubusercontent.com/u/38857779"
        },
        {
          "username": "Sniezka1927",
          "href": "https://github.com/Sniezka1927",
          "avatar": "https://avatars.githubusercontent.com/u/48182795"
        },
        {
          "username": "nrb-dev",
          "href": "https://github.com/nrb-dev",
          "avatar": "https://avatars.githubusercontent.com/u/90916274"
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
      "forks": 10830,
      "added_stars": 10130,
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
      "forks": 4908,
      "added_stars": 1307,
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
      "forks": 19075,
      "added_stars": 4827,
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
      "forks": 11021,
      "added_stars": 1535,
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
      "forks": 5943,
      "added_stars": 652,
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
      "added_stars": 1124,
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
      "forks": 19308,
      "added_stars": 445,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1266,
      "added_stars": 1618,
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
      "author": "argoproj",
      "repo": "argo-cd",
      "avatar": "https://github.com/argoproj.png",
      "repo_link": "https://github.com/argoproj/argo-cd",
      "desc": "Declarative Continuous Deployment for Kubernetes",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8139,
      "added_stars": 253,
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
      "author": "rclone",
      "repo": "rclone",
      "avatar": "https://github.com/rclone.png",
      "repo_link": "https://github.com/rclone/rclone",
      "desc": "\"rsync for cloud storage\" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5693,
      "added_stars": 839,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2373,
      "added_stars": 1164,
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
      "author": "VictoriaMetrics",
      "repo": "VictoriaMetrics",
      "avatar": "https://github.com/VictoriaMetrics.png",
      "repo_link": "https://github.com/VictoriaMetrics/VictoriaMetrics",
      "desc": "VictoriaMetrics: fast, cost-effective monitoring solution and time series database",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1810,
      "added_stars": 284,
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
      "author": "Asymptote-Labs",
      "repo": "agent-beacon",
      "avatar": "https://github.com/Asymptote-Labs.png",
      "repo_link": "https://github.com/Asymptote-Labs/agent-beacon",
      "desc": "The cross-harness, self-improving memory layer for AI agents. Join our community: https://discord.com/invite/zdNChS2fBu",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 304,
      "added_stars": 1647,
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
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 872,
      "added_stars": 958,
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
      "author": "opensandbox-group",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/opensandbox-group.png",
      "repo_link": "https://github.com/opensandbox-group/OpenSandbox",
      "desc": "Secure, Fast, and Extensible Sandbox runtime for AI agents.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1643,
      "added_stars": 1480,
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
          "username": "hpliStartAgain",
          "href": "https://github.com/hpliStartAgain",
          "avatar": "https://avatars.githubusercontent.com/u/118508408"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "istio",
      "repo": "istio",
      "avatar": "https://github.com/istio.png",
      "repo_link": "https://github.com/istio/istio",
      "desc": "Connect, secure, control, and observe services.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8443,
      "added_stars": 100,
      "builtBy": [
        {
          "username": "istio-testing",
          "href": "https://github.com/istio-testing",
          "avatar": "https://avatars.githubusercontent.com/u/25311884"
        },
        {
          "username": "howardjohn",
          "href": "https://github.com/howardjohn",
          "avatar": "https://avatars.githubusercontent.com/u/623453"
        },
        {
          "username": "hzxuzhonghu",
          "href": "https://github.com/hzxuzhonghu",
          "avatar": "https://avatars.githubusercontent.com/u/13374016"
        },
        {
          "username": "ramaraochavali",
          "href": "https://github.com/ramaraochavali",
          "avatar": "https://avatars.githubusercontent.com/u/17204904"
        },
        {
          "username": "kyessenov",
          "href": "https://github.com/kyessenov",
          "avatar": "https://avatars.githubusercontent.com/u/9537734"
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
      "forks": 7391,
      "added_stars": 726,
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
      "author": "etcd-io",
      "repo": "etcd",
      "avatar": "https://github.com/etcd-io.png",
      "repo_link": "https://github.com/etcd-io/etcd",
      "desc": "Distributed reliable key-value store for the most critical data of a distributed system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10598,
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
      "forks": 3481,
      "added_stars": 1722,
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
      "author": "php",
      "repo": "frankenphp",
      "avatar": "https://github.com/php.png",
      "repo_link": "https://github.com/php/frankenphp",
      "desc": "🧟 The modern PHP app server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 515,
      "added_stars": 147,
      "builtBy": [
        {
          "username": "dunglas",
          "href": "https://github.com/dunglas",
          "avatar": "https://avatars.githubusercontent.com/u/57224"
        },
        {
          "username": "henderkes",
          "href": "https://github.com/henderkes",
          "avatar": "https://avatars.githubusercontent.com/u/7896469"
        },
        {
          "username": "alexandre-daubois",
          "href": "https://github.com/alexandre-daubois",
          "avatar": "https://avatars.githubusercontent.com/u/2144837"
        },
        {
          "username": "AlliBalliBaba",
          "href": "https://github.com/AlliBalliBaba",
          "avatar": "https://avatars.githubusercontent.com/u/45872305"
        },
        {
          "username": "withinboredom",
          "href": "https://github.com/withinboredom",
          "avatar": "https://avatars.githubusercontent.com/u/1883296"
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
      "added_stars": 2521,
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
      "author": "traefik",
      "repo": "traefik",
      "avatar": "https://github.com/traefik.png",
      "repo_link": "https://github.com/traefik/traefik",
      "desc": "The Cloud Native Application Proxy",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6315,
      "added_stars": 510,
      "builtBy": [
        {
          "username": "ldez",
          "href": "https://github.com/ldez",
          "avatar": "https://avatars.githubusercontent.com/u/5674651"
        },
        {
          "username": "emilevauge",
          "href": "https://github.com/emilevauge",
          "avatar": "https://avatars.githubusercontent.com/u/6207234"
        },
        {
          "username": "rtribotte",
          "href": "https://github.com/rtribotte",
          "avatar": "https://avatars.githubusercontent.com/u/13045437"
        },
        {
          "username": "kevinpollet",
          "href": "https://github.com/kevinpollet",
          "avatar": "https://avatars.githubusercontent.com/u/299142"
        },
        {
          "username": "mmatur",
          "href": "https://github.com/mmatur",
          "avatar": "https://avatars.githubusercontent.com/u/1776972"
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7161,
      "added_stars": 17913,
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
      "author": "anthropics",
      "repo": "skills",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/skills",
      "desc": "Public repository for Agent Skills",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 22850,
      "added_stars": 13734,
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
      "author": "AgriciDaniel",
      "repo": "claude-seo",
      "avatar": "https://github.com/AgriciDaniel.png",
      "repo_link": "https://github.com/AgriciDaniel/claude-seo",
      "desc": "Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3705,
      "added_stars": 10190,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12204,
      "added_stars": 48848,
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3950,
      "added_stars": 6311,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4901,
      "added_stars": 9580,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3562,
      "added_stars": 5279,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ The BEST Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10680,
      "added_stars": 15639,
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
      "forks": 2300,
      "added_stars": 5808,
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
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12975,
      "added_stars": 6983,
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
      "forks": 10248,
      "added_stars": 2627,
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
      "author": "The-PR-Agent",
      "repo": "pr-agent",
      "avatar": "https://github.com/The-PR-Agent.png",
      "repo_link": "https://github.com/The-PR-Agent/pr-agent",
      "desc": "🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2193,
      "added_stars": 2776,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5286,
      "added_stars": 6843,
      "builtBy": [
        {
          "username": "yuh-yang",
          "href": "https://github.com/yuh-yang",
          "avatar": "https://avatars.githubusercontent.com/u/43330997"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "AiMiDi",
          "href": "https://github.com/AiMiDi",
          "avatar": "https://avatars.githubusercontent.com/u/76622021"
        },
        {
          "username": "omerarslan0",
          "href": "https://github.com/omerarslan0",
          "avatar": "https://avatars.githubusercontent.com/u/76780961"
        },
        {
          "username": "hito0512",
          "href": "https://github.com/hito0512",
          "avatar": "https://avatars.githubusercontent.com/u/26110883"
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
      "forks": 3128,
      "added_stars": 3770,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 22950,
      "added_stars": 13471,
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
      "author": "Comfy-Org",
      "repo": "ComfyUI",
      "avatar": "https://github.com/Comfy-Org.png",
      "repo_link": "https://github.com/Comfy-Org/ComfyUI",
      "desc": "The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local inference engine in the world.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 17496,
      "added_stars": 9850,
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
      "author": "luongnv89",
      "repo": "claude-howto",
      "avatar": "https://github.com/luongnv89.png",
      "repo_link": "https://github.com/luongnv89/claude-howto",
      "desc": "A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5745,
      "added_stars": 5483,
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
      "author": "earthtojake",
      "repo": "text-to-cad",
      "avatar": "https://github.com/earthtojake.png",
      "repo_link": "https://github.com/earthtojake/text-to-cad",
      "desc": "Design physical products with AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2497,
      "added_stars": 6489,
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
      "author": "pandas-dev",
      "repo": "pandas",
      "avatar": "https://github.com/pandas-dev.png",
      "repo_link": "https://github.com/pandas-dev/pandas",
      "desc": "Flexible and powerful data analysis / manipulation library for Python, providing labeled data structures similar to R data.frame objects, statistical functions, and much more",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 20737,
      "added_stars": 1069,
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
      "author": "elayadesign",
      "repo": "ai-design-skills",
      "avatar": "https://github.com/elayadesign.png",
      "repo_link": "https://github.com/elayadesign/ai-design-skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1188,
      "added_stars": 12943,
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
      "reactions": 71,
      "comments": 34,
      "reading_time": 4,
      "author": "heyitsjem"
    },
    {
      "title": "Long Live Rails",
      "description": "When DHH took the stage at Rails World 2026 and talked openly about going \"pencils down\" on...",
      "url": "https://dev.to/ben/long-live-rails-3p21",
      "tags": "rails, ruby, rust, ai",
      "reactions": 120,
      "comments": 18,
      "reading_time": 5,
      "author": "ben"
    },
    {
      "title": "Ultimate AI Roast! 😂😹",
      "description": "I asked my favorite AI to Roast me. Thanks @trickell for this idea.   You need to try this with your...",
      "url": "https://dev.to/annavi11arrea1/ultimate-ai-roast-168b",
      "tags": "ai, webdev, claude, cli",
      "reactions": 61,
      "comments": 22,
      "reading_time": 4,
      "author": "annavi11arrea1"
    },
    {
      "title": "Can't Beat Free: Gemma 4 31B on AMD Token Lab, with a Local Chat Page and an ADK Agent",
      "description": "AMD Token Lab is a free OpenAI-compatible API on AMD GPUs that comes with the AMD AI Developer Program. How to sign up, a local chat page that keeps the key off the browser, a terminal client, and a small ADK agent that calls Gemma 4 31B through it.",
      "url": "https://dev.to/gde/cant-beat-free-gemma-4-31b-on-amd-token-lab-with-a-local-chat-page-and-an-adk-agent-c5b",
      "tags": "gemma, amd, adk, ai",
      "reactions": 19,
      "comments": 12,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Six Serving Engines on Four Accelerators: Gemma 4 E2B on an RTX 3050, a T4, an L4 and a TPU v5e",
      "description": "The same Gemma 4 E2B, prompts, load sweep and GSM8K and BFCL questions through the same serving engines on an 8 GB RTX 3050, a Tesla T4, an NVIDIA L4 and one TPU v5e chip. Answers hold on every chip; vLLM with its drafter leads on all three GPUs, and SGLang-JAX leads on the TPU.",
      "url": "https://dev.to/gde/six-serving-engines-on-four-accelerators-gemma-4-e2b-on-an-rtx-3050-a-t4-an-l4-and-a-tpu-v5e-1a0e",
      "tags": "gemma, vllm, nvidia, tpu",
      "reactions": 14,
      "comments": 1,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Scope WebMCP Tools to the Open React Workflow",
      "description": "On the Events list, the browser discovered zero WebMCP tools. Opening an event draft exposed four....",
      "url": "https://dev.to/gde/scope-webmcp-tools-to-the-open-react-workflow-262o",
      "tags": "typescript, webmcp, webdev, react",
      "reactions": 18,
      "comments": 3,
      "reading_time": 4,
      "author": "raju_dandigam"
    },
    {
      "title": "Make the most of your hackathon",
      "description": "Every time I attend a conference like AI Engineer Code Summit, I wish I had a space to try what I...",
      "url": "https://dev.to/thisisryanswift/make-the-most-of-your-hackathon-3914",
      "tags": "aie, hackathon",
      "reactions": 8,
      "comments": 0,
      "reading_time": 2,
      "author": "thisisryanswift"
    },
    {
      "title": "Keeping a software factory stable at 1,000 PRs a week",
      "description": "By Zejiang (Joe) Guo, Bolin Chen, and Zezhen Xu. Originally published on Kiro on October 26,...",
      "url": "https://dev.to/dailycontext/keeping-a-software-factory-stable-at-1000-prs-a-week-363j",
      "tags": "agents, automation, devops, softwareengineering",
      "reactions": 2,
      "comments": 1,
      "reading_time": 14,
      "author": "iamwhatever"
    },
    {
      "title": "From Prompt to Production: Building a Serverless Cloud Pipeline with Google Antigravity",
      "description": "If you've watched an AI coding agent build a to-do app in two minutes, you've probably asked yourself...",
      "url": "https://dev.to/gdg/from-prompt-to-production-building-a-serverless-cloud-pipeline-with-google-antigravity-264l",
      "tags": "ai, googlecloud, serverless, tutorial",
      "reactions": 8,
      "comments": 0,
      "reading_time": 10,
      "author": "duffigoogle"
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
      "title": "What happened to 3com?",
      "url": "https://dfarq.homeip.net/what-happened-to-3com/",
      "score": 2,
      "comments": 0,
      "tags": [
        "hardware",
        "historical",
        "retrocomputing"
      ],
      "id": "pgmw6b"
    },
    {
      "title": "The Little Book of Generative AI Foundations: An Intuitive Mathematical Primer",
      "url": "https://arxiv.org/abs/2605.29713",
      "score": 1,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "0aungk"
    },
    {
      "title": "You could have invented transformers from memory",
      "url": "https://alexwang.ai/posts/associative-memory/",
      "score": 0,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "u2h9as"
    },
    {
      "title": "Writing a DSL for high performance parallel programming in OxCaml",
      "url": "https://blog.janestreet.com/writing-a-dsl-for-high-performance-parallel-programming-in-oxcaml/",
      "score": 1,
      "comments": 0,
      "tags": [
        "performance",
        "plt"
      ],
      "id": "kh9fri"
    },
    {
      "title": "Someone's impersonating this blog",
      "url": "https://mattbee.mataroa.blog/p/someones-impersonating-this-blog/",
      "score": 15,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "wqml56"
    },
    {
      "title": "Don't bother patching: multiple remote code execution vulnerabilities in Danfoss AK-SM800A",
      "url": "https://www.midnightblue.nl/blog/multiple-rce-danfoss-aksm800a",
      "score": 4,
      "comments": 1,
      "tags": [
        "linux",
        "security"
      ],
      "id": "rpd05t"
    },
    {
      "title": "Kildall's algorithm",
      "url": "https://bike.github.io/posts/kildall.html",
      "score": 9,
      "comments": 0,
      "tags": [
        "compilers",
        "lisp"
      ],
      "id": "1nmzz6"
    },
    {
      "title": "Pointer Provenance in Rust vs C++",
      "url": "https://sofiabelen.github.io/projects/pointer-provenance-in-rust-vs-cpp/",
      "score": 9,
      "comments": 0,
      "tags": [
        "c++",
        "rust"
      ],
      "id": "xmtjzq"
    },
    {
      "title": "Link Previews and You",
      "url": "https://sable.moe/en/blog/link-previews-and-you/",
      "score": 11,
      "comments": 4,
      "tags": [
        "privacy",
        "web"
      ],
      "id": "0rmq2f"
    },
    {
      "title": "Fixing a WebKit bug to see if promises are made of train tracks",
      "url": "https://alistair.sh/thenables",
      "score": 15,
      "comments": 2,
      "tags": [
        "browsers",
        "javascript"
      ],
      "id": "yxvn7j"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "cobychapple",
      "descendants": 28,
      "id": 50493062,
      "kids": [
        50494080,
        50493523,
        50493873,
        50493787,
        50494350,
        50494448,
        50494332,
        50494309,
        50493892,
        50493697
      ],
      "score": 140,
      "time": 1794623309,
      "title": "Ggml v1.0.0",
      "type": "story",
      "url": "https://github.com/ggml-org/ggml/releases/tag/v1.0.0"
    },
    {
      "by": "speckx",
      "descendants": 149,
      "id": 50493251,
      "kids": [
        50494181,
        50493598,
        50494233,
        50493773,
        50494487,
        50494429,
        50493975,
        50493945,
        50493591,
        50493861,
        50494148,
        50494467,
        50494117,
        50494515,
        50494242,
        50493560,
        50494272,
        50494346,
        50494266,
        50493839,
        50493954,
        50494104,
        50493711,
        50494443,
        50494186,
        50494198,
        50493805,
        50494333,
        50494212,
        50494158,
        50493924,
        50494000,
        50494038,
        50493467,
        50493896,
        50493871,
        50494364
      ],
      "score": 294,
      "time": 1794624779,
      "title": "Nvidia Allegedly Engineered Scarcity by Funding AI Startups to Buy Its GPUs",
      "type": "story",
      "url": "https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus"
    },
    {
      "by": "zulln",
      "descendants": 1131,
      "id": 50489641,
      "kids": [
        50493456,
        50491855,
        50490819,
        50492971,
        50490711,
        50490420,
        50490698,
        50490016,
        50492603,
        50490285,
        50489883,
        50490091,
        50490095,
        50490935,
        50489849,
        50491813,
        50493385,
        50490219,
        50490211,
        50492807,
        50492746,
        50490300,
        50492068,
        50492640,
        50494178,
        50491265,
        50493367,
        50490696,
        50489908,
        50492343,
        50490071,
        50490049,
        50492619,
        50493408,
        50490241,
        50490402,
        50493849,
        50491165,
        50491167,
        50490471,
        50493226,
        50492988,
        50490432,
        50491687,
        50493196,
        50493878,
        50492092,
        50494162,
        50490635,
        50490110,
        50491017,
        50490026,
        50493397,
        50491369,
        50491039,
        50492147,
        50490079,
        50490893,
        50492372,
        50490725,
        50491069,
        50490993,
        50491012,
        50493035,
        50489861,
        50491897,
        50493104,
        50490055,
        50492998,
        50490435,
        50492724,
        50491546,
        50491601,
        50491728,
        50491342,
        50490308,
        50489997,
        50490869,
        50490043,
        50492209,
        50492276,
        50491438,
        50491693,
        50491525,
        50492483,
        50490827,
        50492020,
        50490536,
        50490681,
        50490454,
        50492607,
        50491018,
        50492578,
        50491887,
        50489950,
        50490327,
        50490680,
        50491481,
        50489707,
        50490316,
        50491180,
        50490677,
        50490704,
        50491425,
        50492903,
        50490354,
        50489879,
        50493393,
        50491163,
        50490250,
        50491314,
        50490555,
        50490679,
        50490627,
        50490487,
        50490062,
        50489885,
        50492916,
        50492155,
        50491013,
        50490876,
        50489926,
        50489982,
        50489910,
        50490194,
        50492904,
        50492703,
        50490491,
        50490449,
        50492795,
        50490744,
        50492925,
        50490917,
        50492901,
        50492762,
        50492841,
        50490385,
        50493349,
        50493597,
        50492669,
        50490503,
        50492992,
        50493054,
        50492834,
        50492421,
        50493228,
        50490137,
        50491608,
        50493949,
        50492049,
        50492996,
        50490953,
        50491913,
        50489932,
        50491480,
        50490988,
        50491319,
        50492311,
        50490654,
        50494112,
        50491323,
        50490092,
        50491162,
        50490714,
        50492582,
        50491663,
        50489944,
        50492667,
        50492906,
        50491468,
        50490186,
        50491121,
        50490418,
        50491457,
        50492424,
        50490284,
        50490705,
        50490409,
        50491950,
        50490273,
        50492663,
        50493260,
        50491519,
        50490554,
        50491286,
        50490898,
        50492957,
        50490683,
        50492781,
        50489984,
        50492401,
        50493136,
        50492138,
        50490720,
        50491630,
        50491612,
        50491441,
        50491056,
        50490923,
        50490403,
        50491351,
        50490997,
        50490692,
        50490648,
        50491957,
        50491032,
        50490999,
        50491263,
        50490970,
        50490567,
        50491148,
        50490425,
        50492211,
        50490375,
        50492363,
        50491931,
        50492426,
        50489996,
        50491188,
        50490585,
        50491214,
        50491141,
        50493201,
        50490077,
        50489940,
        50490820,
        50493050,
        50489823,
        50490193,
        50490133,
        50491147,
        50492709,
        50490562,
        50493051,
        50489942,
        50493022,
        50490441,
        50490975,
        50490369,
        50492017,
        50491547
      ],
      "score": 1468,
      "text": "<a href=\"https:&#x2F;&#x2F;www.fly.faa.gov&#x2F;adv&#x2F;adv_otherdis?adv_date=11132026&amp;advn=111\" rel=\"nofollow\">https:&#x2F;&#x2F;www.fly.faa.gov&#x2F;adv&#x2F;adv_otherdis?adv_date=11132026&amp;a...</a><p><a href=\"https:&#x2F;&#x2F;www.fly.faa.gov&#x2F;adv&#x2F;adv_otherdis?adv_date=11142026&amp;advn=5\" rel=\"nofollow\">https:&#x2F;&#x2F;www.fly.faa.gov&#x2F;adv&#x2F;adv_otherdis?adv_date=11142026&amp;a...</a><p><a href=\"https:&#x2F;&#x2F;www.nytimes.com&#x2F;live&#x2F;2026&#x2F;11&#x2F;13&#x2F;us&#x2F;ground-stop-nationwide-flights-faa&#x2F;d2ae2ce1-ac6b-59ad-ad8d-daef4e181b34\" rel=\"nofollow\">https:&#x2F;&#x2F;www.nytimes.com&#x2F;live&#x2F;2026&#x2F;11&#x2F;13&#x2F;us&#x2F;ground-stop-natio...</a>",
      "time": 1794603953,
      "title": "FAA issues national ground stop – lifted 4.5 hours later",
      "type": "story",
      "url": "https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247"
    },
    {
      "by": "vinhnx",
      "descendants": 81,
      "id": 50491423,
      "kids": [
        50491778,
        50491720,
        50492598,
        50493761,
        50493939,
        50491626,
        50494493,
        50492587,
        50493473,
        50491642,
        50493993,
        50491858,
        50492462,
        50492673,
        50494041,
        50493702,
        50492857,
        50493328,
        50492386,
        50493428,
        50493180,
        50493319,
        50492263,
        50491755,
        50493290,
        50494143,
        50493340,
        50491727
      ],
      "score": 177,
      "time": 1794611200,
      "title": "Terminal borders that don't cost a cell",
      "type": "story",
      "url": "https://www.joshka.net/cell-borders/"
    },
    {
      "by": "Retro_Dev",
      "descendants": 13,
      "id": 50491980,
      "kids": [
        50494524,
        50493948,
        50493615,
        50494294,
        50494089,
        50493318,
        50493020,
        50493573
      ],
      "score": 84,
      "time": 1794614764,
      "title": "Unsloth Qwen3.8-27B Quantizations – Dynamic v3.1 Update",
      "type": "story",
      "url": "https://unsloth.ai/docs/models/qwen3.8"
    },
    {
      "by": "gvsi",
      "descendants": 11,
      "id": 50491545,
      "kids": [
        50492774,
        50492661,
        50493215,
        50493454,
        50492496,
        50492566
      ],
      "score": 106,
      "time": 1794611859,
      "title": "Show HN: Live map of U.S. flights during tonight's FAA nationwide ground stop",
      "type": "story",
      "url": "https://grounds.top/"
    },
    {
      "by": "gvieri",
      "descendants": 58,
      "id": 50491830,
      "kids": [
        50492650,
        50492199,
        50493103,
        50493145,
        50493323,
        50493057,
        50493572,
        50493320,
        50492888,
        50491917,
        50492824,
        50492306,
        50492351,
        50493122,
        50492563,
        50493822,
        50493047,
        50492174,
        50492159
      ],
      "score": 107,
      "time": 1794613739,
      "title": "What Happened to 3Com?",
      "type": "story",
      "url": "https://dfarq.homeip.net/what-happened-to-3com/"
    },
    {
      "by": "mmaunder",
      "descendants": 56,
      "id": 50490593,
      "kids": [
        50491176,
        50491296,
        50491113,
        50491869,
        50493630,
        50491221,
        50491177,
        50491745,
        50491149,
        50490987,
        50491996,
        50491023,
        50492425,
        50491689,
        50491977,
        50491416,
        50490972
      ],
      "score": 246,
      "time": 1794607464,
      "title": "Live airband on all frequencies from KORS. Victoria, CA also ground stopped",
      "type": "story",
      "url": "https://orcasairband.com/"
    },
    {
      "by": "simonebrunozzi",
      "descendants": 137,
      "id": 50488325,
      "kids": [
        50488801,
        50488870,
        50488608,
        50488747,
        50489042,
        50488748,
        50493227,
        50489151,
        50489162,
        50490114,
        50489221,
        50488832,
        50489424,
        50489625,
        50492589,
        50491982,
        50491047,
        50490192,
        50492122,
        50488678,
        50490522,
        50490948,
        50489561,
        50489071,
        50489330,
        50489337
      ],
      "score": 214,
      "time": 1794597242,
      "title": "FM-1 Workbench",
      "type": "story",
      "url": "https://open.m-vave.com/fm1-workbench"
    },
    {
      "by": "gumby",
      "descendants": 26,
      "id": 50488470,
      "kids": [
        50489327,
        50491235,
        50489925,
        50494384,
        50489842,
        50489022
      ],
      "score": 170,
      "time": 1794597921,
      "title": "Found: A protein that drives ageing without unleashing inflammation",
      "type": "story",
      "url": "https://www.nature.com/articles/d41586-026-03638-3"
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
      "title": "Four Applications and One Ask. Guess Which One Scared Me.",
      "description": "Waitlisted once. Applied again anyway.   TL;DR: In one day I sent four applications: three AI...",
      "url": "https://dev.to/earlgreyhot1701d/four-applications-and-one-ask-guess-which-one-scared-me-2ia3",
      "tags": "ai, career, womenintech, discuss",
      "reactions": 27,
      "comments": 24,
      "reading_time": 4,
      "author": "earlgreyhot1701d"
    },
    {
      "title": "Is WordPress Still a Good Choice for a New Client Site in 2026? Be Honest.",
      "description": "Here's a number that surprised me. According to W3Techs, WordPress ran 43.0% of all websites on 1...",
      "url": "https://dev.to/hannanshoukat/is-wordpress-still-a-good-choice-for-a-new-client-site-in-2026-be-honest-dhe",
      "tags": "discuss, wordpress, webdev, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "hannanshoukat"
    },
    {
      "title": "Auto-applying to jobs: the hard part wasn't CAPTCHAs, it was select fields",
      "description": "I'm building G3 Apply, a copilot that finds jobs on official career pages and fills out the...",
      "url": "https://dev.to/rodrigo_araujo_f7676e5ef0/auto-applying-to-jobs-the-hard-part-wasnt-captchas-it-was-select-fields-3o7a",
      "tags": "webdev, typescript, automation, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "rodrigo_araujo_f7676e5ef0"
    },
    {
      "title": "Your side project doesn’t have to make money",
      "description": "Tell someone you’re building something in the evenings, and watch the question arrive almost...",
      "url": "https://dev.to/she_builds_within/your-side-project-doesnt-have-to-make-money-5aaj",
      "tags": "sideprojects, career, productivity, discuss",
      "reactions": 2,
      "comments": 12,
      "reading_time": 5,
      "author": "she_builds_within"
    },
    {
      "title": "Python Day 7 – The / and * in Function Definitions",
      "description": "First, positional vs keyword arguments   Positional arguments are matched by their position...",
      "url": "https://dev.to/sridhar_n_96b25a5dbb1f468/python-day-7-the-and-in-function-definitions-plus-a-career-chat-32dk",
      "tags": "python, career, function, arguments",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "sridhar_n_96b25a5dbb1f468"
    },
    {
      "title": "Promotions at One Employer: How ATS Parses Stacked Roles",
      "description": "List promotions at one company so ATS keeps every role: stacked layouts, Workday rows, parser output, weak vs optimized rewrites and a checklist.",
      "url": "https://dev.to/muhammadalimughal/promotions-at-one-employer-how-ats-parses-stacked-roles-ha3",
      "tags": "career, resume, jobs, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "muhammadalimughal"
    },
    {
      "title": "Why You Blank on Easy Commands During an Outage (Your Brain Has a Stress Switch)",
      "description": "Stress doesn't erase what you know. It locks the door to it.  You've probably felt this. Production...",
      "url": "https://dev.to/spartanrich430/why-you-blank-on-easy-commands-during-an-outage-your-brain-has-a-stress-switch-3m73",
      "tags": "productivity, learning, career, devops",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "spartanrich430"
    },
    {
      "title": "The Diff I Will Stop Reading",
      "description": "A compiler translates. An agent also fills the&nbsp;gaps.  This autumn I worked on a private project,...",
      "url": "https://dev.to/remuslazar/the-diff-i-will-stop-reading-2ig3",
      "tags": "ai, career, productivity, codereview",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "remuslazar"
    },
    {
      "title": "My Second Dance with Hacktoberfest (2026)",
      "description": "It all started with a sticker.  Two years ago, I saw an MLH sticker on a friend's laptop 💻, looked up...",
      "url": "https://dev.to/hotragn/my-second-dance-with-hacktoberfest-2026-1epp",
      "tags": "hacktoberfest, opensource, ai, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "hotragn"
    },
    {
      "title": "New Hampshire's Mini-WARN Act — 60 Days' Notice, a Lower Layoff Trigger, and a Law With No Public Filings",
      "description": "New Hampshire's Mini-WARN Act — 60 Days' Notice, a Lower Layoff Trigger, and a Law With No...",
      "url": "https://dev.to/layoffatlas/new-hampshires-mini-warn-act-60-days-notice-a-lower-layoff-trigger-and-a-law-with-no-public-26fa",
      "tags": "career, news, data, hiring",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "layoffatlas"
    }
  ]
}
```

