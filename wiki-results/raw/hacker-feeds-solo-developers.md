# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-11 06:26:04 UTC

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
      "forks": 2890,
      "added_stars": 8951,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 10053,
      "added_stars": 4473,
      "builtBy": [
        {
          "username": "thedotmack",
          "href": "https://github.com/thedotmack",
          "avatar": "https://avatars.githubusercontent.com/u/683968"
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
          "username": "Afloat16",
          "href": "https://github.com/Afloat16",
          "avatar": "https://avatars.githubusercontent.com/u/132809511"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 10377,
      "added_stars": 11979,
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
          "username": "t3dotgg",
          "href": "https://github.com/t3dotgg",
          "avatar": "https://avatars.githubusercontent.com/u/6751787"
        },
        {
          "username": "maria-rcks",
          "href": "https://github.com/maria-rcks",
          "avatar": "https://avatars.githubusercontent.com/u/254055478"
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
      "repo": "gstack",
      "avatar": "https://github.com/garrytan.png",
      "repo_link": "https://github.com/garrytan/gstack",
      "desc": "Use Garry Tan's exact Claude Code setup: 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 20830,
      "added_stars": 2411,
      "builtBy": [
        {
          "username": "garrytan",
          "href": "https://github.com/garrytan",
          "avatar": "https://avatars.githubusercontent.com/u/19957"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "test22345",
          "href": "https://github.com/test22345",
          "avatar": "https://avatars.githubusercontent.com/u/17983607"
        },
        {
          "username": "szsunyuan",
          "href": "https://github.com/szsunyuan",
          "avatar": "https://avatars.githubusercontent.com/u/3579304"
        }
      ]
    },
    {
      "author": "Renhuai123",
      "repo": "ziwei-doushu",
      "avatar": "https://github.com/Renhuai123.png",
      "repo_link": "https://github.com/Renhuai123/ziwei-doushu",
      "desc": "紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3408,
      "added_stars": 2631,
      "builtBy": [
        {
          "username": "Renhuai123",
          "href": "https://github.com/Renhuai123",
          "avatar": "https://avatars.githubusercontent.com/u/91890238"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "HelloWorld3326",
          "href": "https://github.com/HelloWorld3326",
          "avatar": "https://avatars.githubusercontent.com/u/189696476"
        },
        {
          "username": "tyk-bitt",
          "href": "https://github.com/tyk-bitt",
          "avatar": "https://avatars.githubusercontent.com/u/263388032"
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
      "forks": 16218,
      "added_stars": 1139,
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
      "author": "can1357",
      "repo": "oh-my-pi",
      "avatar": "https://github.com/can1357.png",
      "repo_link": "https://github.com/can1357/oh-my-pi",
      "desc": "⌥ Coding agent with the IDE wired in. Built by Stencil Labs.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4395,
      "added_stars": 932,
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
      "author": "tldraw",
      "repo": "tldraw",
      "avatar": "https://github.com/tldraw.png",
      "repo_link": "https://github.com/tldraw/tldraw",
      "desc": "Build infinite canvas apps in React with the tldraw SDK. World's best, top-most agent recommended #1 five star SDK.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3620,
      "added_stars": 360,
      "builtBy": [
        {
          "username": "steveruizok",
          "href": "https://github.com/steveruizok",
          "avatar": "https://avatars.githubusercontent.com/u/23072548"
        },
        {
          "username": "mimecuvalo",
          "href": "https://github.com/mimecuvalo",
          "avatar": "https://avatars.githubusercontent.com/u/469604"
        },
        {
          "username": "MitjaBezensek",
          "href": "https://github.com/MitjaBezensek",
          "avatar": "https://avatars.githubusercontent.com/u/2523721"
        },
        {
          "username": "ds300",
          "href": "https://github.com/ds300",
          "avatar": "https://avatars.githubusercontent.com/u/1242537"
        },
        {
          "username": "SomeHats",
          "href": "https://github.com/SomeHats",
          "avatar": "https://avatars.githubusercontent.com/u/1489520"
        }
      ]
    },
    {
      "author": "spotify",
      "repo": "portal-ai-plugins",
      "avatar": "https://github.com/spotify.png",
      "repo_link": "https://github.com/spotify/portal-ai-plugins",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 254,
      "added_stars": 242,
      "builtBy": [
        {
          "username": "djamaile",
          "href": "https://github.com/djamaile",
          "avatar": "https://avatars.githubusercontent.com/u/15789670"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "javoire",
          "href": "https://github.com/javoire",
          "avatar": "https://avatars.githubusercontent.com/u/642869"
        },
        {
          "username": "sorantis",
          "href": "https://github.com/sorantis",
          "avatar": "https://avatars.githubusercontent.com/u/1685068"
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
      "forks": 1852,
      "added_stars": 8384,
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
      "author": "QwenLM",
      "repo": "qwen-code",
      "avatar": "https://github.com/QwenLM.png",
      "repo_link": "https://github.com/QwenLM/qwen-code",
      "desc": "An open-source AI coding agent that lives in your terminal.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3346,
      "added_stars": 237,
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
      "author": "nightly-labs",
      "repo": "openbot",
      "avatar": "https://github.com/nightly-labs.png",
      "repo_link": "https://github.com/nightly-labs/openbot",
      "desc": "A local-first desktop workspace for persistent AI teammates. Run Codex, Claude, and Grok with dedicated workspaces, task queues, file sharing, browser control, and agent-to-agent collaboration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 698,
      "added_stars": 1688,
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
      "author": "ParadevAI",
      "repo": "Paradev",
      "avatar": "https://github.com/ParadevAI.png",
      "repo_link": "https://github.com/ParadevAI/Paradev",
      "desc": "Paradev is an open-source Codex App and Conductor alternative. Orchestrate an army coding agents in parallel with your own subscriptions.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1453,
      "added_stars": 340,
      "builtBy": [
        {
          "username": "Kitenite",
          "href": "https://github.com/Kitenite",
          "avatar": "https://avatars.githubusercontent.com/u/31864905"
        },
        {
          "username": "saddlepaddle",
          "href": "https://github.com/saddlepaddle",
          "avatar": "https://avatars.githubusercontent.com/u/14907857"
        },
        {
          "username": "AviPeltz",
          "href": "https://github.com/AviPeltz",
          "avatar": "https://avatars.githubusercontent.com/u/11849162"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "harshithmullapudi",
          "href": "https://github.com/harshithmullapudi",
          "avatar": "https://avatars.githubusercontent.com/u/17528887"
        }
      ]
    },
    {
      "author": "vitejs",
      "repo": "vite",
      "avatar": "https://github.com/vitejs.png",
      "repo_link": "https://github.com/vitejs/vite",
      "desc": "Next generation frontend tooling. It's fast!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9716,
      "added_stars": 405,
      "builtBy": [
        {
          "username": "sapphi-red",
          "href": "https://github.com/sapphi-red",
          "avatar": "https://avatars.githubusercontent.com/u/49056869"
        },
        {
          "username": "yyx990803",
          "href": "https://github.com/yyx990803",
          "avatar": "https://avatars.githubusercontent.com/u/499550"
        },
        {
          "username": "patak-cat",
          "href": "https://github.com/patak-cat",
          "avatar": "https://avatars.githubusercontent.com/u/583075"
        },
        {
          "username": "bluwy",
          "href": "https://github.com/bluwy",
          "avatar": "https://avatars.githubusercontent.com/u/34116392"
        }
      ]
    },
    {
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for month-long single sessions (billions of tokens) ,small context windows (a 100K context is enough) and token savings (5x fewer tokens) .上下文压缩插件，月级长会话会话， 兼顾小窗口(100k上下文足矣)省token(省5倍token) . billion-context is all you need",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 537,
      "added_stars": 2290,
      "builtBy": [
        {
          "username": "ranxianglei",
          "href": "https://github.com/ranxianglei",
          "avatar": "https://avatars.githubusercontent.com/u/12445698"
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
        },
        {
          "username": "yanhuojiyusheng",
          "href": "https://github.com/yanhuojiyusheng",
          "avatar": "https://avatars.githubusercontent.com/u/98598692"
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
      "forks": 1425,
      "added_stars": 1016,
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
          "username": "ald3b",
          "href": "https://github.com/ald3b",
          "avatar": "https://avatars.githubusercontent.com/u/3642270"
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
      "forks": 19012,
      "added_stars": 4871,
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
      "forks": 11020,
      "added_stars": 1652,
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
      "author": "moby",
      "repo": "moby",
      "avatar": "https://github.com/moby.png",
      "repo_link": "https://github.com/moby/moby",
      "desc": "The Moby Project - a collaborative project for the container ecosystem to assemble container-based systems",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 19328,
      "added_stars": 452,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5321,
      "added_stars": 8659,
      "builtBy": [
        {
          "username": "sirozha",
          "href": "https://github.com/sirozha",
          "avatar": "https://avatars.githubusercontent.com/u/7765123"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "asdek",
          "href": "https://github.com/asdek",
          "avatar": "https://avatars.githubusercontent.com/u/4257336"
        },
        {
          "username": "mason5052",
          "href": "https://github.com/mason5052",
          "avatar": "https://avatars.githubusercontent.com/u/52062353"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 5909,
      "added_stars": 548,
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
      "forks": 1846,
      "added_stars": 1114,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1238,
      "added_stars": 1499,
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
      "forks": 8134,
      "added_stars": 265,
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
      "forks": 5674,
      "added_stars": 820,
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
      "author": "Asymptote-Labs",
      "repo": "agent-beacon",
      "avatar": "https://github.com/Asymptote-Labs.png",
      "repo_link": "https://github.com/Asymptote-Labs/agent-beacon",
      "desc": "The cross-harness, self-improving memory layer for AI agents. Join our community: https://discord.com/invite/zdNChS2fBu",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 303,
      "added_stars": 1625,
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
      "author": "gin-gonic",
      "repo": "gin",
      "avatar": "https://github.com/gin-gonic.png",
      "repo_link": "https://github.com/gin-gonic/gin",
      "desc": "Gin is a high-performance HTTP web framework written in Go. It provides a Martini-like API but with significantly better performance—up to 40 times faster—thanks to httprouter. Gin is designed for building REST APIs, web applications, and microservices.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8917,
      "added_stars": 601,
      "builtBy": [
        {
          "username": "manucorporat",
          "href": "https://github.com/manucorporat",
          "avatar": "https://avatars.githubusercontent.com/u/127379"
        },
        {
          "username": "appleboy",
          "href": "https://github.com/appleboy",
          "avatar": "https://avatars.githubusercontent.com/u/21979"
        },
        {
          "username": "javierprovecho",
          "href": "https://github.com/javierprovecho",
          "avatar": "https://avatars.githubusercontent.com/u/2457529"
        },
        {
          "username": "thinkerou",
          "href": "https://github.com/thinkerou",
          "avatar": "https://avatars.githubusercontent.com/u/4488261"
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
      "forks": 2362,
      "added_stars": 1106,
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
      "author": "tailscale",
      "repo": "tailscale",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailscale",
      "desc": "The easiest, most secure way to use WireGuard and 2FA.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3461,
      "added_stars": 1652,
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
      "author": "etcd-io",
      "repo": "etcd",
      "avatar": "https://github.com/etcd-io.png",
      "repo_link": "https://github.com/etcd-io/etcd",
      "desc": "Distributed reliable key-value store for the most critical data of a distributed system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10596,
      "added_stars": 542,
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
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 850,
      "added_stars": 928,
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
      "author": "JuliusBrussee",
      "repo": "caveman",
      "avatar": "https://github.com/JuliusBrussee.png",
      "repo_link": "https://github.com/JuliusBrussee/caveman",
      "desc": "🪨 why use many token when few token do trick. Viral skill + proxy for coding agents that cuts 65% of tokens by talking like a caveman.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6919,
      "added_stars": 8566,
      "builtBy": [
        {
          "username": "JuliusBrussee",
          "href": "https://github.com/JuliusBrussee",
          "avatar": "https://avatars.githubusercontent.com/u/104168679"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "nikpushkarski",
          "href": "https://github.com/nikpushkarski",
          "avatar": "https://avatars.githubusercontent.com/u/11289396"
        },
        {
          "username": "AmirF194",
          "href": "https://github.com/AmirF194",
          "avatar": "https://avatars.githubusercontent.com/u/26088029"
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
      "forks": 7385,
      "added_stars": 721,
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
      "author": "VictoriaMetrics",
      "repo": "VictoriaMetrics",
      "avatar": "https://github.com/VictoriaMetrics.png",
      "repo_link": "https://github.com/VictoriaMetrics/VictoriaMetrics",
      "desc": "VictoriaMetrics: fast, cost-effective monitoring solution and time series database",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1806,
      "added_stars": 263,
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
      "author": "istio",
      "repo": "istio",
      "avatar": "https://github.com/istio.png",
      "repo_link": "https://github.com/istio/istio",
      "desc": "Connect, secure, control, and observe services.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8443,
      "added_stars": 96,
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
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6138,
      "added_stars": 890,
      "builtBy": [
        {
          "username": "RPRX",
          "href": "https://github.com/RPRX",
          "avatar": "https://avatars.githubusercontent.com/u/63339210"
        },
        {
          "username": "Fangliding",
          "href": "https://github.com/Fangliding",
          "avatar": "https://avatars.githubusercontent.com/u/45535409"
        },
        {
          "username": "yuhan6665",
          "href": "https://github.com/yuhan6665",
          "avatar": "https://avatars.githubusercontent.com/u/1588741"
        },
        {
          "username": "LjhAUMEM",
          "href": "https://github.com/LjhAUMEM",
          "avatar": "https://avatars.githubusercontent.com/u/188819646"
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
      "forks": 7070,
      "added_stars": 17107,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 11910,
      "added_stars": 50753,
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
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4865,
      "added_stars": 9346,
      "builtBy": [
        {
          "username": "jordanecker-ant",
          "href": "https://github.com/jordanecker-ant",
          "avatar": "https://avatars.githubusercontent.com/u/305637556"
        },
        {
          "username": "mhegazy",
          "href": "https://github.com/mhegazy",
          "avatar": "https://avatars.githubusercontent.com/u/8000722"
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3920,
      "added_stars": 6844,
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
      "author": "sherlock-project",
      "repo": "sherlock",
      "avatar": "https://github.com/sherlock-project.png",
      "repo_link": "https://github.com/sherlock-project/sherlock",
      "desc": "Hunt down social media accounts by username across social networks",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12691,
      "added_stars": 15143,
      "builtBy": [
        {
          "username": "sdushantha",
          "href": "https://github.com/sdushantha",
          "avatar": "https://avatars.githubusercontent.com/u/27065646"
        },
        {
          "username": "hoadlck",
          "href": "https://github.com/hoadlck",
          "avatar": "https://avatars.githubusercontent.com/u/1666888"
        },
        {
          "username": "ppfeister",
          "href": "https://github.com/ppfeister",
          "avatar": "https://avatars.githubusercontent.com/u/33327613"
        },
        {
          "username": "TheYahya",
          "href": "https://github.com/TheYahya",
          "avatar": "https://avatars.githubusercontent.com/u/15307244"
        },
        {
          "username": "Czechball",
          "href": "https://github.com/Czechball",
          "avatar": "https://avatars.githubusercontent.com/u/13371865"
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
      "forks": 3625,
      "added_stars": 9322,
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
      "repo": "skills",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/skills",
      "desc": "Public repository for Agent Skills",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 22670,
      "added_stars": 12271,
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
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5279,
      "added_stars": 6931,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3498,
      "added_stars": 5210,
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
      "forks": 10565,
      "added_stars": 14773,
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
      "author": "earthtojake",
      "repo": "text-to-cad",
      "avatar": "https://github.com/earthtojake.png",
      "repo_link": "https://github.com/earthtojake/text-to-cad",
      "desc": "Design physical products with AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2473,
      "added_stars": 7170,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2212,
      "added_stars": 5414,
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
      "forks": 2173,
      "added_stars": 2560,
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
      "author": "fastapi",
      "repo": "fastapi",
      "avatar": "https://github.com/fastapi.png",
      "repo_link": "https://github.com/fastapi/fastapi",
      "desc": "FastAPI framework, high performance, easy to learn, fast to code, ready for production",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10216,
      "added_stars": 2572,
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
      "author": "ahujasid",
      "repo": "mcp-for-blender",
      "avatar": "https://github.com/ahujasid.png",
      "repo_link": "https://github.com/ahujasid/mcp-for-blender",
      "desc": "Community plugin to control Blender 3D with any LLM of your choice. Not affiliated with the official Blender Foundation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3096,
      "added_stars": 3596,
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
      "author": "wshobson",
      "repo": "agents",
      "avatar": "https://github.com/wshobson.png",
      "repo_link": "https://github.com/wshobson/agents",
      "desc": "Plugins, agents, skills, and commands for Claude Code, Codex CLI, Cursor, OpenCode, Antigravity CLI, GitHub Copilot, and Pi, written once in Markdown and adapted to each tool by generators with validation and evals.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4482,
      "added_stars": 2188,
      "builtBy": [
        {
          "username": "wshobson",
          "href": "https://github.com/wshobson",
          "avatar": "https://avatars.githubusercontent.com/u/553618"
        },
        {
          "username": "web-flow",
          "href": "https://github.com/web-flow",
          "avatar": "https://avatars.githubusercontent.com/u/19864447"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jau123",
          "href": "https://github.com/jau123",
          "avatar": "https://avatars.githubusercontent.com/u/130447398"
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
      "forks": 17411,
      "added_stars": 9885,
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
      "forks": 20745,
      "added_stars": 1082,
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
      "author": "luongnv89",
      "repo": "claude-howto",
      "avatar": "https://github.com/luongnv89.png",
      "repo_link": "https://github.com/luongnv89/claude-howto",
      "desc": "A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5729,
      "added_stars": 5249,
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
      "author": "elayadesign",
      "repo": "ai-design-skills",
      "avatar": "https://github.com/elayadesign.png",
      "repo_link": "https://github.com/elayadesign/ai-design-skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1161,
      "added_stars": 12807,
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
      "title": "How did you end up in tech, and are you staying?",
      "description": "Last week you showed me where you code. This week I want to know how you ended up there in the first...",
      "url": "https://dev.to/maame-codes/how-did-you-end-up-in-tech-and-are-you-staying-4l9b",
      "tags": "discuss, career, beginners, watercooler",
      "reactions": 99,
      "comments": 37,
      "reading_time": 3,
      "author": "maame-codes"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-432g",
      "tags": "top7, discuss",
      "reactions": 29,
      "comments": 14,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Stop Asking LLMs to Do Math: Client-Side Functions in Flutter GenUI with bloc_signals",
      "description": "Why Andrew 'Red' Brogdon's insight on client-side functions is critical for Generative UI—and how bloc_signals_genui turns catalog functions into 0ms synchronous reactive signals.",
      "url": "https://dev.to/gde/stop-asking-llms-to-do-math-client-side-functions-in-flutter-genui-with-blocsignals-23bh",
      "tags": "flutter, dart, ai, architecture",
      "reactions": 27,
      "comments": 42,
      "reading_time": 5,
      "author": "randalschwartz"
    },
    {
      "title": "Prompt Pad: What Are Open-Weight Models?",
      "description": "When people call an AI model \"open,\" they don't always mean the same thing.  On this week's Prompt...",
      "url": "https://blog.mlh.com/prompt-pad-what-are-open-weight-models-1ghh",
      "tags": "opensource, ai, beginners, codenewbie",
      "reactions": 12,
      "comments": 0,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "What I Learned Managing a Full Project with Antigravity",
      "description": "How my workflow evolved from solo prompting in AI Studio to managing a multi-model AI team, running...",
      "url": "https://dev.to/gde/what-i-learned-managing-a-full-project-with-antigravity-1ppc",
      "tags": "antigravity, gemini, ai, discuss",
      "reactions": 9,
      "comments": 0,
      "reading_time": 8,
      "author": "patitonav"
    },
    {
      "title": "Containing the Autonomous Mind: Sub-Second Zero-Trust Execution with GKE Agent Sandbox",
      "description": "Why standard Kubernetes pods fail when AI agents start writing code and how to build a sub-second,...",
      "url": "https://dev.to/gde/containing-the-autonomous-mind-sub-second-zero-trust-execution-with-gke-agent-sandbox-5e6b",
      "tags": "ai, googlecloud, kubernetes",
      "reactions": 23,
      "comments": 1,
      "reading_time": 7,
      "author": "saurabhmi"
    },
    {
      "title": "Prompt Pad: Show Your AI How to Respond with Few-Shot Examples",
      "description": "Want AI to answer in a specific way? Don't just tell it. Show it.  In this episode of Prompt Pad,...",
      "url": "https://blog.mlh.com/prompt-pad-show-your-ai-how-to-respond-with-few-shot-examples-2869",
      "tags": "ai, beginners, codenewbie, vibecoding",
      "reactions": 15,
      "comments": 1,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "Who is building solutions with documents?",
      "description": "Digital transformation, anyone? ",
      "url": "https://dev.to/missamarakay/who-is-building-solutions-for-documents-4d58",
      "tags": "discuss",
      "reactions": 6,
      "comments": 3,
      "reading_time": 2,
      "author": "missamarakay"
    },
    {
      "title": "Take Claude Code Above Average: Let Antigravity Review It",
      "description": "In November 2026, I spent a day building a small tool with Claude Code: a bridge that lets a second...",
      "url": "https://dev.to/gde/take-claude-code-above-average-let-antigravity-review-it-1f3g",
      "tags": "agents, ai, softwaredevelopment, tools",
      "reactions": 22,
      "comments": 9,
      "reading_time": 18,
      "author": "kulaone"
    },
    {
      "title": "Find the production agent failures that every health check misses",
      "description": "AQuA is an open-source quality agent that surfaces the production failures your health checks miss and, when you ask, traces a failure to the line of code behind it. Try its dashboard locally.",
      "url": "https://dev.to/googlecloud/find-the-production-agent-failures-that-every-health-check-misses-39j8",
      "tags": "agents, ai, debugging, testing",
      "reactions": 10,
      "comments": 4,
      "reading_time": 6,
      "author": "eliasecchi"
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
      "title": "Modding Linux to use SIGKILL on every process",
      "url": "https://vulpinecitrus.info/blog/what-if-you-could-handle-sigkill/",
      "score": 1,
      "comments": 0,
      "tags": [
        "linux"
      ],
      "id": "5wrucm"
    },
    {
      "title": "Wake me up when AI can",
      "url": "https://stoppels.ch/2026/10/03/wake-me-up-when-ai-can.html",
      "score": -1,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "zbskej"
    },
    {
      "title": "JetBrains Renews its Platinum Sponsorship of the Godot Foundation",
      "url": "https://godotengine.org/article/partners_jetbrains_sponsorship_renewal_2027/",
      "score": -2,
      "comments": 0,
      "tags": [
        "editors",
        "games"
      ],
      "id": "8c9tcm"
    },
    {
      "title": "The best algebras are spinny",
      "url": "https://www.youtube.com/watch?v=-k-Dnw0F3kc",
      "score": 2,
      "comments": 0,
      "tags": [
        "math",
        "video"
      ],
      "id": "idexoh"
    },
    {
      "title": "30 years of Internet transfers with curl",
      "url": "https://daniel.haxx.se/blog/2026/11/11/30-years-of-internet-transfers-with-curl/",
      "score": 11,
      "comments": 5,
      "tags": [
        "historical"
      ],
      "id": "x4kaac"
    },
    {
      "title": "What is Functional Programming?",
      "url": "https://www.youtube.com/watch?v=bQlH49krwbk",
      "score": 4,
      "comments": 1,
      "tags": [
        "apl",
        "plt",
        "video"
      ],
      "id": "k5oycn"
    },
    {
      "title": "Rendering in batches with glimmer and Datastar",
      "url": "https://yogthos.net/posts/2026-11-10-glimmer-datastar.html",
      "score": 2,
      "comments": 3,
      "tags": [
        "clojure",
        "programming",
        "web"
      ],
      "id": "zi6dg1"
    },
    {
      "title": "Go Turns 17",
      "url": "https://go.dev/blog/17years",
      "score": 12,
      "comments": 0,
      "tags": [
        "go"
      ],
      "id": "idktfu"
    },
    {
      "title": "Finding a vulnerability in Star Wars Episode I: Racer",
      "url": "https://synacktiv.com/en/publications/star-wars-episode-i-racer",
      "score": 3,
      "comments": 1,
      "tags": [
        "c",
        "security"
      ],
      "id": "rfacq5"
    },
    {
      "title": "I deleted all my SSH keys",
      "url": "https://blog.infected.systems/posts/2026-11-03-i-deleted-all-my-ssh-keys/",
      "score": 23,
      "comments": 4,
      "tags": [
        "hardware",
        "security"
      ],
      "id": "sdtcvv"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "js2",
      "descendants": 20,
      "id": 50449748,
      "kids": [
        50450079,
        50450027,
        50449973,
        50449914,
        50449857,
        50449924,
        50449954,
        50450119
      ],
      "score": 67,
      "time": 1794371337,
      "title": "Protecting SSH Keys with macOS Secure Enclave",
      "type": "story",
      "url": "https://gatezh.com/posts/macos-secure-enclave-ssh-keys/"
    },
    {
      "by": "d3Xt3r",
      "descendants": 4,
      "id": 50450007,
      "kids": [
        50450230,
        50450176
      ],
      "score": 24,
      "time": 1794374754,
      "title": "Greg Kurtzer's Ginux is now a userspace kernel",
      "type": "story",
      "url": "https://github.com/gmkurtzer/ginux"
    },
    {
      "by": "NaOH",
      "descendants": 288,
      "id": 50445401,
      "kids": [
        50447336,
        50447138,
        50446600,
        50447211,
        50446653,
        50446847,
        50446571,
        50449744,
        50447919,
        50448420,
        50447777,
        50448435,
        50447306,
        50448311,
        50448411,
        50447164,
        50446890,
        50448058,
        50446632,
        50447084,
        50446661,
        50448272,
        50447166,
        50448845,
        50447193,
        50448200,
        50448325,
        50446431,
        50446440,
        50447247,
        50449492,
        50446725,
        50446825,
        50448109,
        50447841,
        50448210,
        50447570,
        50446749,
        50446813,
        50447714,
        50447140,
        50447681,
        50448484,
        50447095,
        50447186,
        50448576,
        50447046,
        50448008,
        50447783,
        50447390,
        50446603,
        50446454,
        50448834,
        50448171,
        50446719,
        50446554,
        50446676,
        50448051,
        50447720,
        50446804
      ],
      "score": 426,
      "time": 1794340246,
      "title": "Scion is back and is going to sell a kei truck in America",
      "type": "story",
      "url": "https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/"
    },
    {
      "by": "p4bl0",
      "descendants": 169,
      "id": 50442736,
      "kids": [
        50443236,
        50443986,
        50445781,
        50448941,
        50442975,
        50443287,
        50450035,
        50446028,
        50442990,
        50446263,
        50449142,
        50445844,
        50446117,
        50446822,
        50443848,
        50443183,
        50445656,
        50443059,
        50446611,
        50442749,
        50444615,
        50445093,
        50445104,
        50448140,
        50447686,
        50447748,
        50443742,
        50445328,
        50443674,
        50446049,
        50443541,
        50449173,
        50449084,
        50446736,
        50445232,
        50443820,
        50443312,
        50445902,
        50445036,
        50448387,
        50444364,
        50443682,
        50445612,
        50443178,
        50447219
      ],
      "score": 757,
      "text": "Previously: <i>.name Termination</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49550772\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=49550772</a> - Sept 2026 (547 comments)",
      "time": 1794328664,
      "title": ".name Grandfathered",
      "type": "story",
      "url": "https://neil.fraser.name/news/2026/11/10/"
    },
    {
      "by": "skittleson",
      "descendants": 299,
      "id": 50441707,
      "kids": [
        50443286,
        50443914,
        50442644,
        50450287,
        50450124,
        50446355,
        50442516,
        50448617,
        50443511,
        50447457,
        50443875,
        50448038,
        50449465,
        50444192,
        50446491,
        50450050,
        50449290,
        50446042,
        50442969,
        50445579,
        50446337,
        50447471,
        50446867,
        50445478,
        50443406,
        50446803,
        50443828,
        50448406,
        50444268,
        50444019,
        50441708,
        50443207,
        50443705,
        50444005,
        50445671,
        50446659,
        50444237,
        50444377,
        50442395,
        50444671,
        50443870,
        50444458,
        50446377,
        50446981,
        50444225,
        50443942,
        50443576,
        50446324,
        50443347,
        50446815,
        50444243,
        50443599,
        50443486,
        50443008,
        50446120,
        50445041,
        50444768,
        50444387,
        50443419,
        50442917,
        50442513,
        50445621,
        50447719,
        50446044,
        50447218,
        50443822,
        50447320,
        50446196,
        50442640,
        50445329,
        50444365,
        50442812
      ],
      "score": 838,
      "time": 1794324320,
      "title": "Smart home devices should work without the internet",
      "type": "story",
      "url": "https://docodethatmatters.com/home-automation-overnight-success/"
    },
    {
      "by": "palsecam",
      "descendants": 14,
      "id": 50448921,
      "kids": [
        50449284,
        50450054,
        50450008,
        50449149,
        50449365,
        50449532,
        50449858,
        50449222,
        50449807,
        50449382,
        50449261,
        50449513,
        50449141,
        50449194,
        50449202
      ],
      "score": 94,
      "time": 1794362191,
      "title": "A great old-timey game-programming hack (2013)",
      "type": "story",
      "url": "https://blog.moertel.com/posts/2013-12-14-great-old-timey-game-programming-hack.html"
    },
    {
      "by": "Metacelsus",
      "descendants": 26,
      "id": 50449275,
      "kids": [
        50450002,
        50449754,
        50449535,
        50450256,
        50449456,
        50449559,
        50449921
      ],
      "score": 52,
      "time": 1794365828,
      "title": "To deter bioterrorism, U.S. imposes new rules on ordering synthetic DNA",
      "type": "story",
      "url": "https://www.science.org/content/article/deter-bioterrorism-u-s-imposes-new-rules-ordering-synthetic-dna"
    },
    {
      "by": "digital55",
      "descendants": 36,
      "id": 50446246,
      "kids": [
        50447564,
        50448212,
        50447136,
        50449520,
        50449556,
        50446368,
        50450108,
        50448457,
        50447889,
        50447666,
        50449797,
        50446700,
        50446742,
        50446604
      ],
      "score": 201,
      "time": 1794344324,
      "title": "Six Math Essentials",
      "type": "story",
      "url": "https://teorth.github.io/tao-web/six-math-essentials.html"
    },
    {
      "by": "speckx",
      "descendants": 210,
      "id": 50443824,
      "kids": [
        50450265,
        50444851,
        50444959,
        50444793,
        50444813,
        50445866,
        50444676,
        50444847,
        50444349,
        50447403,
        50446305,
        50444607,
        50447576,
        50445539,
        50446931,
        50444954,
        50446408,
        50448303,
        50445418,
        50447693,
        50444352,
        50445105,
        50444720,
        50450022,
        50450196,
        50449727,
        50445991,
        50448280,
        50449946,
        50447435,
        50449525,
        50447848,
        50448120,
        50447784,
        50448329,
        50445606,
        50449640,
        50446625,
        50444292,
        50444444,
        50445498,
        50448635,
        50448279,
        50445694
      ],
      "score": 356,
      "time": 1794333722,
      "title": "Synaptics patent claims stop work on DisplayLink drivers",
      "type": "story",
      "url": "https://lwn.net/SubscriberLink/1102549/acbc92e00cee3a3f/"
    },
    {
      "by": "robertjfclarke",
      "descendants": 365,
      "id": 50444129,
      "kids": [
        50449670,
        50446074,
        50447954,
        50446614,
        50444693,
        50445092,
        50448595,
        50448980,
        50445603,
        50445156,
        50445471,
        50449200,
        50445426,
        50444783,
        50446099,
        50447330,
        50445316,
        50444667,
        50449612,
        50448626,
        50445465,
        50445522,
        50445127,
        50448860,
        50449074,
        50447279,
        50446190,
        50446168,
        50445829,
        50445953,
        50444803,
        50445311,
        50449942,
        50445330,
        50449464,
        50446279,
        50448940,
        50446189,
        50445912,
        50444902,
        50448309
      ],
      "score": 359,
      "time": 1794334952,
      "title": "Starlink Mini 2",
      "type": "story",
      "url": "https://starlink.com/mini-2"
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
      "title": "How do you truly stand out in Tech?",
      "description": "I am not going to lie to you, the market has been rough out there. There are layoffs across different...",
      "url": "https://dev.to/francistrdev/how-do-you-truly-stand-out-in-tech-478a",
      "tags": "discuss, community, productivity, career",
      "reactions": 130,
      "comments": 70,
      "reading_time": 8,
      "author": "francistrdev"
    },
    {
      "title": "How did you end up in tech, and are you staying?",
      "description": "Last week you showed me where you code. This week I want to know how you ended up there in the first...",
      "url": "https://dev.to/maame-codes/how-did-you-end-up-in-tech-and-are-you-staying-4l9b",
      "tags": "discuss, career, beginners, watercooler",
      "reactions": 99,
      "comments": 37,
      "reading_time": 3,
      "author": "maame-codes"
    },
    {
      "title": "Kent C. Dodds Hasn't Looked at His Code All Year",
      "description": "At the start of this year, Kent C. Dodds gave a coding agent a link to a GitHub issue he had been...",
      "url": "https://dev.to/dailycontext/kent-c-dodds-hasnt-looked-at-his-code-all-year-gd5",
      "tags": "ai, agents, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 17,
      "author": "karasilv"
    },
    {
      "title": "Your README Is the Interview You Don't Know You're Giving",
      "description": "A reader named Gautam put it better than I did, in a comment on my own article: the README is the...",
      "url": "https://dev.to/aheadkit/your-readme-is-the-interview-you-dont-know-youre-giving-49c",
      "tags": "career, beginners, programming, github",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "aheadkit"
    },
    {
      "title": "Most Resume Builders Start With a Template. Mine Starts With an Experience Library.",
      "description": "Most Resume Builders Start With a Template. Mine Starts With an Experience Library.   Every...",
      "url": "https://dev.to/_8b9f989e3bd077f5726863/most-resume-builders-start-with-a-template-mine-starts-with-an-experience-library-4o21",
      "tags": "showdev, webdev, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "_8b9f989e3bd077f5726863"
    },
    {
      "title": "Should Developers Apply for Jobs in November and December? (Yes, and Here's Why)",
      "description": "Every year around this time you hear it. \"Nobody hires in December.\" \"Code freeze, budget freeze,...",
      "url": "https://dev.to/mybee_team_efdb884f233a84/should-developers-apply-for-jobs-in-november-and-december-yes-and-heres-why-3jj7",
      "tags": "career, hiring, beginners, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "mybee_team_efdb884f233a84"
    },
    {
      "title": "Before You Solve Another Interview Question, Try This 45 Minute Mock",
      "description": "One complete attempt, a useful debrief, and a much clearer idea of what to practice...",
      "url": "https://dev.to/emilywoodsnyc/before-you-solve-another-interview-question-try-this-45-minute-mock-fjg",
      "tags": "career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "emilywoodsnyc"
    },
    {
      "title": "Is AI Changing What It Means to Be a Software Developer in 2026?",
      "description": "AI is changing software development faster than most of us expected.  With tools like GitHub Copilot,...",
      "url": "https://dev.to/kevinjames/is-ai-changing-what-it-means-to-be-a-software-developer-in-2026-5c29",
      "tags": "ai, career, softwaredevelopment, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "kevinjames"
    },
    {
      "title": "When the Model Writes the First Draft, Who Still Owns the Reasoning?",
      "description": "A practical review method for engineering teams that let an AI assistant write the first draft of their code, before they roll the tool out to everyone.",
      "url": "https://dev.to/romainbailleul/when-the-model-writes-the-first-draft-who-still-owns-the-reasoning-oo1",
      "tags": "ai, programming, career, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 6,
      "author": "romainbailleul"
    },
    {
      "title": "From Senior Engineer to Tech Lead: Skills You Need",
      "description": "From Senior Engineer to Tech Lead: The Skills Code Doesn't Teach You   For the first five to...",
      "url": "https://dev.to/uzairxdev/from-senior-engineer-to-tech-lead-skills-you-need-14c2",
      "tags": "career, leadership, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "uzairxdev"
    }
  ]
}
```

