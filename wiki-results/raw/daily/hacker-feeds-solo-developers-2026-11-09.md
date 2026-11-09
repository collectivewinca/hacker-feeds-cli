# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-09 06:33:06 UTC

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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9994,
      "added_stars": 6443,
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
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "rodboev",
          "href": "https://github.com/rodboev",
          "avatar": "https://avatars.githubusercontent.com/u/106971"
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
      "forks": 2583,
      "added_stars": 7621,
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
          "username": "robinsonnblack",
          "href": "https://github.com/robinsonnblack",
          "avatar": "https://avatars.githubusercontent.com/u/331326017"
        },
        {
          "username": "bradhallett",
          "href": "https://github.com/bradhallett",
          "avatar": "https://avatars.githubusercontent.com/u/53977268"
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
      "forks": 10067,
      "added_stars": 15379,
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
      "author": "Renhuai123",
      "repo": "ziwei-doushu",
      "avatar": "https://github.com/Renhuai123.png",
      "repo_link": "https://github.com/Renhuai123/ziwei-doushu",
      "desc": "紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3308,
      "added_stars": 4191,
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
          "username": "sakura168899-debug",
          "href": "https://github.com/sakura168899-debug",
          "avatar": "https://avatars.githubusercontent.com/u/289346330"
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
      "forks": 20788,
      "added_stars": 2344,
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
      "author": "lobehub",
      "repo": "lobehub",
      "avatar": "https://github.com/lobehub.png",
      "repo_link": "https://github.com/lobehub/lobehub",
      "desc": "🤯 LobeHub - Super-Agents on Your Team. Add super-agents to the chats your team already uses.They take on work by themselves and get better every week.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16155,
      "added_stars": 798,
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
      "author": "nightly-labs",
      "repo": "openbot",
      "avatar": "https://github.com/nightly-labs.png",
      "repo_link": "https://github.com/nightly-labs/openbot",
      "desc": "A local-first desktop workspace for persistent AI teammates. Run Codex, Claude, and Grok with dedicated workspaces, task queues, file sharing, browser control, and agent-to-agent collaboration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 650,
      "added_stars": 1937,
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
      "author": "tldraw",
      "repo": "tldraw",
      "avatar": "https://github.com/tldraw.png",
      "repo_link": "https://github.com/tldraw/tldraw",
      "desc": "Build infinite canvas apps in React with the tldraw SDK. World's best, top-most agent recommended #1 five star SDK.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3622,
      "added_stars": 365,
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
      "author": "can1357",
      "repo": "oh-my-pi",
      "avatar": "https://github.com/can1357.png",
      "repo_link": "https://github.com/can1357/oh-my-pi",
      "desc": "⌥ Coding agent with the IDE wired in. Built by Stencil Labs.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4351,
      "added_stars": 870,
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
      "author": "Vincentwei1021",
      "repo": "video-shotcraft",
      "avatar": "https://github.com/Vincentwei1021.png",
      "repo_link": "https://github.com/Vincentwei1021/video-shotcraft",
      "desc": "AI video skill for Claude Code & Codex — cinematic, editable product promos with Remotion: 124 shot recipe cards, 150 motion previews, beat sync, sound design, Motion Workbench & JianYing (CapCut CN) export.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1700,
      "added_stars": 2171,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Vincentwei1021",
          "href": "https://github.com/Vincentwei1021",
          "avatar": "https://avatars.githubusercontent.com/u/18239147"
        },
        {
          "username": "skyzhao1223",
          "href": "https://github.com/skyzhao1223",
          "avatar": "https://avatars.githubusercontent.com/u/15373810"
        },
        {
          "username": "sarff0",
          "href": "https://github.com/sarff0",
          "avatar": "https://avatars.githubusercontent.com/u/255364023"
        },
        {
          "username": "xiaolai",
          "href": "https://github.com/xiaolai",
          "avatar": "https://avatars.githubusercontent.com/u/152970"
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
      "forks": 1309,
      "added_stars": 1215,
      "builtBy": [
        {
          "username": "davidmckayv",
          "href": "https://github.com/davidmckayv",
          "avatar": "https://avatars.githubusercontent.com/u/1574202"
        },
        {
          "username": "kevin9327",
          "href": "https://github.com/kevin9327",
          "avatar": "https://avatars.githubusercontent.com/u/5299031"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "author": "vitejs",
      "repo": "vite",
      "avatar": "https://github.com/vitejs.png",
      "repo_link": "https://github.com/vitejs/vite",
      "desc": "Next generation frontend tooling. It's fast!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9498,
      "added_stars": 401,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6821,
      "added_stars": 3761,
      "builtBy": [
        {
          "username": "tashfeenahmed",
          "href": "https://github.com/tashfeenahmed",
          "avatar": "https://avatars.githubusercontent.com/u/9307356"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "suantea",
          "href": "https://github.com/suantea",
          "avatar": "https://avatars.githubusercontent.com/u/108558399"
        },
        {
          "username": "tashdroid",
          "href": "https://github.com/tashdroid",
          "avatar": "https://avatars.githubusercontent.com/u/319142293"
        },
        {
          "username": "OhOkThisIsFine",
          "href": "https://github.com/OhOkThisIsFine",
          "avatar": "https://avatars.githubusercontent.com/u/102485413"
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
      "forks": 3332,
      "added_stars": 271,
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
      "author": "liguobao",
      "repo": "ds-harness-remote",
      "avatar": "https://github.com/liguobao.png",
      "repo_link": "https://github.com/liguobao/ds-harness-remote",
      "desc": "基于 DeepSeek Harness 插件机制构建的远程访问方案，通过低延迟、端到端加密的 P2P 网络，支持使用 PC、移动端 和 Web 随时访问本地设备上的DSH 、CodeX、Cursor、Claude Code等工作区。 (Built on DeepSeek Harness plugins, this low-latency, end-to-end encrypted P2P solution lets PC, mobile, and web clients access local DSH, Codex, Cursor, and Claude Code workspaces.)",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 182,
      "added_stars": 1091,
      "builtBy": [
        {
          "username": "liguobao",
          "href": "https://github.com/liguobao",
          "avatar": "https://avatars.githubusercontent.com/u/10910802"
        },
        {
          "username": "dreamfarer-space",
          "href": "https://github.com/dreamfarer-space",
          "avatar": "https://avatars.githubusercontent.com/u/158067205"
        },
        {
          "username": "luojiyin1987",
          "href": "https://github.com/luojiyin1987",
          "avatar": "https://avatars.githubusercontent.com/u/6524977"
        },
        {
          "username": "zzalancelot",
          "href": "https://github.com/zzalancelot",
          "avatar": "https://avatars.githubusercontent.com/u/23648180"
        },
        {
          "username": "pengyz",
          "href": "https://github.com/pengyz",
          "avatar": "https://avatars.githubusercontent.com/u/4350781"
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
      "forks": 69456,
      "added_stars": 476,
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
          "username": "heiskr",
          "href": "https://github.com/heiskr",
          "avatar": "https://avatars.githubusercontent.com/u/1221423"
        },
        {
          "username": "mchammer01",
          "href": "https://github.com/mchammer01",
          "avatar": "https://avatars.githubusercontent.com/u/42146119"
        },
        {
          "username": "sophietheking",
          "href": "https://github.com/sophietheking",
          "avatar": "https://avatars.githubusercontent.com/u/29382425"
        }
      ]
    },
    {
      "author": "vercel-labs",
      "repo": "skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/skills",
      "desc": "The open agent skills tool - npx skills",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3370,
      "added_stars": 1091,
      "builtBy": [
        {
          "username": "quuu",
          "href": "https://github.com/quuu",
          "avatar": "https://avatars.githubusercontent.com/u/32676955"
        },
        {
          "username": "antfubot",
          "href": "https://github.com/antfubot",
          "avatar": "https://avatars.githubusercontent.com/u/291667613"
        },
        {
          "username": "huozhi",
          "href": "https://github.com/huozhi",
          "avatar": "https://avatars.githubusercontent.com/u/4800338"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "Crosstalk-Solutions",
      "repo": "project-nomad",
      "avatar": "https://github.com/Crosstalk-Solutions.png",
      "repo_link": "https://github.com/Crosstalk-Solutions/project-nomad",
      "desc": "Project NOMAD is an offline-first knowledge and education server. Wikipedia, thousands of books, courses, maps, and optional local AI, all running on hardware you own with no internet required.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4394,
      "added_stars": 1235,
      "builtBy": [
        {
          "username": "jakeaturner",
          "href": "https://github.com/jakeaturner",
          "avatar": "https://avatars.githubusercontent.com/u/52841588"
        },
        {
          "username": "chriscrosstalk",
          "href": "https://github.com/chriscrosstalk",
          "avatar": "https://avatars.githubusercontent.com/u/49691103"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cosmistack-bot",
          "href": "https://github.com/cosmistack-bot",
          "avatar": "https://avatars.githubusercontent.com/u/175166532"
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
      "forks": 18974,
      "added_stars": 4873,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5277,
      "added_stars": 8577,
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
      "author": "prometheus",
      "repo": "prometheus",
      "avatar": "https://github.com/prometheus.png",
      "repo_link": "https://github.com/prometheus/prometheus",
      "desc": "The Prometheus monitoring system and time series database.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 11014,
      "added_stars": 1636,
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
      "forks": 19321,
      "added_stars": 459,
      "builtBy": [
        {
          "username": "thaJeztah",
          "href": "https://github.com/thaJeztah",
          "avatar": "https://avatars.githubusercontent.com/u/1804568"
        },
        {
          "username": "cpuguy83",
          "href": "https://github.com/cpuguy83",
          "avatar": "https://avatars.githubusercontent.com/u/799078"
        },
        {
          "username": "vvoland",
          "href": "https://github.com/vvoland",
          "avatar": "https://avatars.githubusercontent.com/u/5046555"
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
      "author": "docker",
      "repo": "compose",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/compose",
      "desc": "Define and run multi-container applications with Docker",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5900,
      "added_stars": 573,
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
      "author": "argoproj",
      "repo": "argo-cd",
      "avatar": "https://github.com/argoproj.png",
      "repo_link": "https://github.com/argoproj/argo-cd",
      "desc": "Declarative Continuous Deployment for Kubernetes",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8114,
      "added_stars": 260,
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
      "author": "netbirdio",
      "repo": "netbird",
      "avatar": "https://github.com/netbirdio.png",
      "repo_link": "https://github.com/netbirdio/netbird",
      "desc": "NetBird securely connects people, machines and AI agents across any network with one identity-based Zero Trust platform. Powered by peer-to-peer WireGuard®",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1843,
      "added_stars": 1073,
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
      "forks": 1198,
      "added_stars": 1225,
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
      "author": "Asymptote-Labs",
      "repo": "agent-beacon",
      "avatar": "https://github.com/Asymptote-Labs.png",
      "repo_link": "https://github.com/Asymptote-Labs/agent-beacon",
      "desc": "The cross-harness, self-improving memory layer for AI agents. Join our community: https://discord.com/invite/zdNChS2fBu",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 297,
      "added_stars": 1605,
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
      "author": "rclone",
      "repo": "rclone",
      "avatar": "https://github.com/rclone.png",
      "repo_link": "https://github.com/rclone/rclone",
      "desc": "\"rsync for cloud storage\" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5664,
      "added_stars": 809,
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
      "forks": 2353,
      "added_stars": 1058,
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
      "forks": 3443,
      "added_stars": 1640,
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
      "author": "gin-gonic",
      "repo": "gin",
      "avatar": "https://github.com/gin-gonic.png",
      "repo_link": "https://github.com/gin-gonic/gin",
      "desc": "Gin is a high-performance HTTP web framework written in Go. It provides a Martini-like API but with significantly better performance—up to 40 times faster—thanks to httprouter. Gin is designed for building REST APIs, web applications, and microservices.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8915,
      "added_stars": 614,
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
      "author": "go-gitea",
      "repo": "gitea",
      "avatar": "https://github.com/go-gitea.png",
      "repo_link": "https://github.com/go-gitea/gitea",
      "desc": "Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 7377,
      "added_stars": 731,
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
      "forks": 10594,
      "added_stars": 532,
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
      "author": "N4darae",
      "repo": "shrt",
      "avatar": "https://github.com/N4darae.png",
      "repo_link": "https://github.com/N4darae/shrt",
      "desc": "A contract-driven gRPC regression harness for AI coding agents, with human-approved baselines. Snapshot the valid call chains of an API so an agent can look one up instead of tracing for it. gRPC today, OpenAPI next",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 176,
      "added_stars": 1657,
      "builtBy": [
        {
          "username": "Kotaro2211",
          "href": "https://github.com/Kotaro2211",
          "avatar": "https://avatars.githubusercontent.com/u/221652879"
        },
        {
          "username": "N4darae",
          "href": "https://github.com/N4darae",
          "avatar": "https://avatars.githubusercontent.com/u/50111777"
        },
        {
          "username": "hneastwood",
          "href": "https://github.com/hneastwood",
          "avatar": "https://avatars.githubusercontent.com/u/337007245"
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
      "forks": 6125,
      "added_stars": 872,
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
    },
    {
      "author": "rasonyang",
      "repo": "ai-native-callcenter",
      "avatar": "https://github.com/rasonyang.png",
      "repo_link": "https://github.com/rasonyang/ai-native-callcenter",
      "desc": "Self-hosted API-first AI call center: AI talks, code controls the call. AI agents answer every call; humans take over without dropping it. Runs on FreeSWITCH with your SIP trunk and realtime model (OpenAI, Grok, Qwen, Doubao, or any compatible gateway).",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 106,
      "added_stars": 369,
      "builtBy": [
        {
          "username": "rasonyang",
          "href": "https://github.com/rasonyang",
          "avatar": "https://avatars.githubusercontent.com/u/1861686"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "siyingchao007-maker",
          "href": "https://github.com/siyingchao007-maker",
          "avatar": "https://avatars.githubusercontent.com/u/338017697"
        },
        {
          "username": "aicc2025",
          "href": "https://github.com/aicc2025",
          "avatar": "https://avatars.githubusercontent.com/u/234931872"
        },
        {
          "username": "duongynhi000005-oss",
          "href": "https://github.com/duongynhi000005-oss",
          "avatar": "https://avatars.githubusercontent.com/u/287305518"
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 11704,
      "added_stars": 50169,
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6974,
      "added_stars": 16065,
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
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4851,
      "added_stars": 9152,
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
          "username": "mhegazy",
          "href": "https://github.com/mhegazy",
          "avatar": "https://avatars.githubusercontent.com/u/8000722"
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
      "forks": 3900,
      "added_stars": 7947,
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
      "author": "AgriciDaniel",
      "repo": "claude-seo",
      "avatar": "https://github.com/AgriciDaniel.png",
      "repo_link": "https://github.com/AgriciDaniel/claude-seo",
      "desc": "Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3569,
      "added_stars": 9004,
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
          "username": "Nordalux",
          "href": "https://github.com/Nordalux",
          "avatar": "https://avatars.githubusercontent.com/u/129338099"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
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
      "forks": 3421,
      "added_stars": 5133,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5267,
      "added_stars": 6942,
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
      "author": "earthtojake",
      "repo": "text-to-cad",
      "avatar": "https://github.com/earthtojake.png",
      "repo_link": "https://github.com/earthtojake/text-to-cad",
      "desc": "Design physical products with AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2463,
      "added_stars": 7543,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ The BEST Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10456,
      "added_stars": 13826,
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
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use Claude Code, Codex, Antigravity, VSCode, Pi, and OpenCode (and 6 other harnesses) for free (1.3B+ free tokens) from your terminal, app, IDE, or phone, and now from the browser with native browser sessions (multi-harness + multi-model) like OpenClaw (voice supported + ToS friendly)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10484,
      "added_stars": 10957,
      "builtBy": [
        {
          "username": "Alishahryar1",
          "href": "https://github.com/Alishahryar1",
          "avatar": "https://avatars.githubusercontent.com/u/20476625"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Tanishq-1",
          "href": "https://github.com/Tanishq-1",
          "avatar": "https://avatars.githubusercontent.com/u/49880456"
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
      "forks": 2181,
      "added_stars": 5295,
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
      "author": "wshobson",
      "repo": "agents",
      "avatar": "https://github.com/wshobson.png",
      "repo_link": "https://github.com/wshobson/agents",
      "desc": "Plugins, agents, skills, and commands for Claude Code, Codex CLI, Cursor, OpenCode, Antigravity CLI, GitHub Copilot, and Pi, written once in Markdown and adapted to each tool by generators with validation and evals.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4474,
      "added_stars": 2146,
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
      "author": "ahujasid",
      "repo": "mcp-for-blender",
      "avatar": "https://github.com/ahujasid.png",
      "repo_link": "https://github.com/ahujasid/mcp-for-blender",
      "desc": "Community plugin to control Blender 3D with any LLM of your choice. Not affiliated with the official Blender Foundation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3067,
      "added_stars": 3522,
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
      "author": "fastapi",
      "repo": "fastapi",
      "avatar": "https://github.com/fastapi.png",
      "repo_link": "https://github.com/fastapi/fastapi",
      "desc": "FastAPI framework, high performance, easy to learn, fast to code, ready for production",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10208,
      "added_stars": 2611,
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
      "author": "pandas-dev",
      "repo": "pandas",
      "avatar": "https://github.com/pandas-dev.png",
      "repo_link": "https://github.com/pandas-dev/pandas",
      "desc": "Flexible and powerful data analysis / manipulation library for Python, providing labeled data structures similar to R data.frame objects, statistical functions, and much more",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 20732,
      "added_stars": 1107,
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
      "author": "Comfy-Org",
      "repo": "ComfyUI",
      "avatar": "https://github.com/Comfy-Org.png",
      "repo_link": "https://github.com/Comfy-Org/ComfyUI",
      "desc": "The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local inference engine in the world.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 17368,
      "added_stars": 9843,
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
      "author": "The-PR-Agent",
      "repo": "pr-agent",
      "avatar": "https://github.com/The-PR-Agent.png",
      "repo_link": "https://github.com/The-PR-Agent/pr-agent",
      "desc": "🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2154,
      "added_stars": 2327,
      "builtBy": [
        {
          "username": "mrT23",
          "href": "https://github.com/mrT23",
          "avatar": "https://avatars.githubusercontent.com/u/21198860"
        },
        {
          "username": "okotek",
          "href": "https://github.com/okotek",
          "avatar": "https://avatars.githubusercontent.com/u/4869233"
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
      "forks": 22374,
      "added_stars": 9990,
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
      "author": "luongnv89",
      "repo": "claude-howto",
      "avatar": "https://github.com/luongnv89.png",
      "repo_link": "https://github.com/luongnv89/claude-howto",
      "desc": "A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5719,
      "added_stars": 5167,
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
      "forks": 1137,
      "added_stars": 12699,
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
      "upvotes": "1",
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
      "title": "Congrats to the Kaggle Benchmarking Challenge Winners!",
      "description": "A few weeks ago we teamed up with Kaggle to ask a deceptively simple question: how do you actually...",
      "url": "https://dev.to/devteam/congrats-to-the-kaggle-benchmarking-challenge-winners-2moh",
      "tags": "devchallenge, kagglechallenge, ai, machinelearning",
      "reactions": 131,
      "comments": 26,
      "reading_time": 4,
      "author": "heyitsjem"
    },
    {
      "title": "Mobile Data on Android 17 and a 4.9 Kernel: Google Fi on the Pixel 3a",
      "description": "LineageOS 24.0 on the Pixel 3a gets mobile data from a Google Fi data-only SIM after four fixes: mobile data on by default, a Fi APN, VoLTE in the carrier settings and a close_range() backport for IPv4. Each one traced from the radio log.",
      "url": "https://dev.to/gde/mobile-data-on-android-17-and-a-49-kernel-google-fi-on-the-pixel-3a-4cdc",
      "tags": "android, linux, lineageos, networking",
      "reactions": 11,
      "comments": 0,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "Six Serving Engines, One 8 GB GPU: Gemma 4 E2B on an RTX 3050",
      "description": "llama.cpp, vLLM, SGLang, mistral.rs, a plain PyTorch engine and LiteRT-LM serve the same 4-bit Gemma 4 E2B on one 8 GB RTX 3050, measured with the same prompts, the same load sweep and the same GSM8K and BFCL questions. GSM8K is level on every engine; vLLM is the fastest up to 16 requests and within 3% of SGLang beyond.",
      "url": "https://dev.to/gde/six-serving-engines-one-8-gb-gpu-gemma-4-e2b-on-an-rtx-3050-ad7",
      "tags": "gemma, vllm, llamacpp, nvidia",
      "reactions": 10,
      "comments": 1,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-28dh",
      "tags": "weeklyretro",
      "reactions": 96,
      "comments": 65,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Stop Asking LLMs to Do Math: Client-Side Functions in Flutter GenUI with bloc_signals",
      "description": "Why Andrew 'Red' Brogdon's insight on client-side functions is critical for Generative UI—and how bloc_signals_genui turns catalog functions into 0ms synchronous reactive signals.",
      "url": "https://dev.to/gde/stop-asking-llms-to-do-math-client-side-functions-in-flutter-genui-with-blocsignals-23bh",
      "tags": "flutter, dart, ai, architecture",
      "reactions": 16,
      "comments": 16,
      "reading_time": 5,
      "author": "randalschwartz"
    },
    {
      "title": "Measuring Gemma & On-Device Latency on 16GB Apple Silicon for Agent Workflows",
      "description": "Before you wire up a multi-agent workflow, measure how fast your local models actually...",
      "url": "https://dev.to/gde/measuring-real-world-response-latency-on-16gb-apple-silicon-for-agent-workflows-24e5",
      "tags": "gemma",
      "reactions": 10,
      "comments": 3,
      "reading_time": 5,
      "author": "jimmyliao"
    },
    {
      "title": "Building RailPulse AI: Deploying an Open-Source Railway Dispatch Agent with Gemma and Google Cloud Run",
      "description": "Author: Robina Mirbahar AI/ML Google Developer Expert (GDE) | Google Cloud Champion Innovator GitHub...",
      "url": "https://dev.to/gde/building-railpulse-ai-deploying-an-open-source-railway-dispatch-agent-with-gemma-and-google-cloud-2b9g",
      "tags": "ai, googlecloud, opensource, python",
      "reactions": 28,
      "comments": 23,
      "reading_time": 5,
      "author": "robinamirbahar"
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
      "title": "Leveling the Playing Field: Building a 100% Offline Kubernetes Docs RAG Exam Assistant with Web AI, Gemma 4, and WebGPU",
      "description": "How to enable fair, zero-cost, air-gapped AI assistance in technical classrooms and...",
      "url": "https://dev.to/gde/leveling-the-playing-field-building-a-100-offline-kubernetes-docs-rag-exam-assistant-with-web-ai-53bi",
      "tags": "webai, gemma, rag, webgpu",
      "reactions": 9,
      "comments": 0,
      "reading_time": 10,
      "author": "cyruswong"
    },
    {
      "title": "How I Made a Voice Clone in Minutes, Using Google Antigravity, Gemini 3.8 Flash TTS and My Harness",
      "description": "How I Made a Voice Clone in Minutes, Using Google Antigravity, Gemini 3.8 Flash TTS and My Harness",
      "url": "https://dev.to/gde/how-i-made-a-voice-clone-in-minutes-using-google-antigravity-gemini-38-flash-tts-and-my-harness-10j3",
      "tags": "googlecloud, agenticai, voicecloning, gemini",
      "reactions": 10,
      "comments": 0,
      "reading_time": 18,
      "author": "dazbo"
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
      "title": "Microsecond accurate NTP with a Raspberry Pi and PPS GPS(2021)",
      "url": "https://austinsnerdythings.com/2021/04/19/microsecond-accurate-ntp-with-a-raspberry-pi-and-pps-gps/",
      "score": 1,
      "comments": 0,
      "tags": [
        "devops",
        "linux"
      ],
      "id": "jdsu1z"
    },
    {
      "title": "unlocking any car from X brand in most of the world",
      "url": "https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/",
      "score": 4,
      "comments": 0,
      "tags": [
        "reversing",
        "security"
      ],
      "id": "kbrpx3"
    },
    {
      "title": "Sem86: a full-system x86 emulator without hardcoded semantics",
      "url": "https://liblisa.nl/sem86/",
      "score": 5,
      "comments": 1,
      "tags": [
        "virtualization"
      ],
      "id": "a7byol"
    },
    {
      "title": "I Dislike Pull Requests (2020)",
      "url": "https://medium.com/@pia.fak.sunnanbo/i-hate-pull-requests-17836dd3cc38",
      "score": 3,
      "comments": 5,
      "tags": [
        "practices"
      ],
      "id": "za1r6h"
    },
    {
      "title": "Herb Sutter: When a language’s creator and its owners strongly disagree: C++26 post-DIS, historical experience, and paths forward",
      "url": "https://isocpp.org/files/papers/P4454R0.pdf",
      "score": 17,
      "comments": 5,
      "tags": [
        "c++",
        "pdf"
      ],
      "id": "vlagyq"
    },
    {
      "title": "Message Queues",
      "url": "https://blog.alexewerlof.com/p/message-queues",
      "score": 1,
      "comments": 2,
      "tags": [
        "distributed"
      ],
      "id": "deutqp"
    },
    {
      "title": "Optimizing reference deletions in Git",
      "url": "https://nayak.im/posts/optimizing-reference-deletion/",
      "score": 3,
      "comments": 0,
      "tags": [
        "c",
        "performance",
        "rust",
        "vcs"
      ],
      "id": "ic1ora"
    },
    {
      "title": "Virtualized Redox: from Virtio-FS to Cloud Hypervisor, and beyond",
      "url": "https://www.redox-os.org/news/virtualized-redox/",
      "score": 12,
      "comments": 0,
      "tags": [
        "osdev"
      ],
      "id": "zozcwa"
    },
    {
      "title": "How to prove equations using diagrams, part 3",
      "url": "https://www.epatters.org/post/e-graphs-3/",
      "score": 2,
      "comments": 0,
      "tags": [
        "compilers",
        "math",
        "plt"
      ],
      "id": "dr5zrz"
    },
    {
      "title": "Playing with the STM32MP2",
      "url": "https://serd.es///2026/11/08/playing-with-stm32mp2.html",
      "score": 8,
      "comments": 0,
      "tags": [
        "hardware"
      ],
      "id": "cwmxea"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "zdw",
      "descendants": 81,
      "id": 50420035,
      "kids": [
        50420749,
        50421844,
        50421076,
        50421255,
        50421114,
        50421498,
        50421146,
        50420639,
        50421085,
        50420896,
        50421296,
        50421051,
        50421171,
        50421071,
        50421170,
        50421705,
        50421597,
        50421774,
        50421137,
        50421725,
        50421293,
        50420935,
        50420826,
        50421710,
        50421792,
        50421534,
        50421011,
        50420881,
        50421113,
        50420716,
        50421109,
        50421678,
        50421074,
        50420824,
        50420626,
        50421708,
        50420682,
        50421406,
        50421403,
        50421169,
        50420906,
        50421055,
        50420660
      ],
      "score": 269,
      "time": 1794189501,
      "title": "RIP, Harvest",
      "type": "story",
      "url": "https://aphyr.com/posts/427-rip-harvest"
    },
    {
      "by": "GloVin",
      "descendants": 22,
      "id": 50421426,
      "kids": [
        50421843,
        50421807,
        50421719,
        50421584,
        50421699,
        50421825,
        50421817,
        50421812,
        50421768,
        50421758,
        50421711,
        50421797,
        50421752
      ],
      "score": 24,
      "time": 1794202211,
      "title": "Apple capped engineers at a $200 daily AI budget",
      "type": "story",
      "url": "https://www.stork.ai/newsletter/2026-11-08-apple-capped-engineers-at-a-200-daily-ai-budget#story-1"
    },
    {
      "by": "dcoulmbe",
      "descendants": 96,
      "id": 50418176,
      "kids": [
        50420786,
        50419327,
        50421591,
        50420287,
        50419015,
        50419890,
        50420707,
        50419793,
        50418852,
        50419162,
        50420625,
        50420440,
        50420402,
        50419244,
        50420224,
        50419134,
        50419450,
        50420539,
        50420386,
        50418793,
        50420882,
        50419669,
        50419379,
        50419203,
        50419137,
        50419962,
        50420220,
        50420210,
        50420227,
        50419733,
        50419178
      ],
      "score": 366,
      "time": 1794177335,
      "title": "KetchUp – Open-source SketchUp alternative built with Rust and WebGPU",
      "type": "story",
      "url": "https://ketchup3d.github.io/app/"
    },
    {
      "by": "infosecau",
      "descendants": 73,
      "id": 50419215,
      "kids": [
        50420232,
        50421154,
        50420229,
        50420703,
        50420670,
        50419452,
        50420769,
        50419995,
        50420404,
        50419520,
        50420482,
        50420768,
        50421532,
        50420293,
        50419536,
        50419537,
        50420150,
        50421726
      ],
      "score": 210,
      "time": 1794183050,
      "title": "Unlocking any car from X brand in most of the world",
      "type": "story",
      "url": "https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/"
    },
    {
      "by": "ByteAtATime",
      "descendants": 24,
      "id": 50420857,
      "kids": [
        50421750,
        50421514,
        50421798,
        50421081,
        50421557,
        50421203,
        50421232,
        50421234,
        50421646,
        50421556
      ],
      "score": 60,
      "time": 1794196270,
      "title": "A Critique of GPUI",
      "type": "story",
      "url": "https://blog.zortax.de/posts/a-critique-of-gpui"
    },
    {
      "by": "nmstoker",
      "descendants": 23,
      "id": 50418182,
      "kids": [
        50419377,
        50418741,
        50418805,
        50418205,
        50419835,
        50419192,
        50419373,
        50418614,
        50419955,
        50420695,
        50420777,
        50420853,
        50418661,
        50420240,
        50420237
      ],
      "score": 166,
      "time": 1794177363,
      "title": "Chimera Vocal Synth",
      "type": "story",
      "url": "https://chimera-vocal-synth.vercel.app/"
    },
    {
      "by": "smusamashah",
      "descendants": 60,
      "id": 50368481,
      "kids": [
        50417709,
        50417110,
        50420990,
        50417671,
        50419369,
        50418121,
        50417473,
        50416849,
        50420904,
        50417266,
        50417884,
        50419810,
        50421356,
        50417644,
        50419284,
        50417369,
        50417143,
        50416646,
        50416350,
        50416809,
        50418188,
        50417921,
        50417877
      ],
      "score": 459,
      "time": 1793811907,
      "title": "Declarative Dragging",
      "type": "story",
      "url": "https://declarative-dragging.github.io/"
    },
    {
      "by": "matteoraso",
      "descendants": 207,
      "id": 50418975,
      "kids": [
        50420130,
        50420380,
        50420223,
        50421659,
        50421475,
        50419985,
        50420325,
        50421413,
        50421696,
        50420206,
        50421202,
        50419929,
        50421330,
        50421245,
        50421487,
        50421366,
        50420965,
        50420604,
        50420052,
        50420351,
        50420352,
        50420358,
        50421857,
        50420112,
        50421609,
        50421412,
        50421567,
        50420164,
        50421294,
        50420261,
        50420209,
        50420751,
        50421053,
        50420033,
        50420415,
        50421242,
        50420262,
        50420728,
        50421159,
        50421004,
        50420086,
        50420558,
        50421473,
        50420344
      ],
      "score": 150,
      "time": 1794181476,
      "title": "I'm not convinced the AI bubble exists",
      "type": "story",
      "url": "https://matteoraso.github.io/im-not-convinced-the-ai-bubble-exists.html#im-not-convinced-the-ai-bubble-exists"
    },
    {
      "by": "indigodaddy",
      "descendants": 77,
      "id": 50416053,
      "kids": [
        50421794,
        50417012,
        50416712,
        50418871,
        50416714,
        50416507,
        50416769,
        50417396,
        50419383,
        50417679,
        50417299,
        50417810,
        50418737,
        50416815,
        50419102,
        50416707,
        50418021,
        50416904,
        50416798,
        50421177,
        50417122,
        50416604,
        50418014,
        50416879,
        50420448,
        50416628,
        50416505,
        50418539,
        50417515,
        50418299,
        50417958,
        50417357,
        50417316
      ],
      "score": 244,
      "time": 1794164931,
      "title": "Dux: Free, open-source Wayland desktop shell with file manager and theming",
      "type": "story",
      "url": "https://duxlabs.dev/"
    },
    {
      "by": "david927",
      "descendants": 629,
      "id": 50417407,
      "kids": [
        50421853,
        50418273,
        50421762,
        50421806,
        50418058,
        50421785,
        50419208,
        50421800,
        50421786,
        50421714,
        50418955,
        50418936,
        50421566,
        50421618,
        50421621,
        50420484,
        50421694,
        50418225,
        50418055,
        50421607,
        50421680,
        50418230,
        50421602,
        50421383,
        50420552,
        50418925,
        50421358,
        50421513,
        50420179,
        50419720,
        50420612,
        50420222,
        50421554,
        50417795,
        50418570,
        50421337,
        50421364,
        50389922,
        50421793,
        50391077,
        50420929,
        50420213,
        50421674,
        50390534,
        50392205,
        50389705,
        50421200,
        50421309,
        50421511,
        50421144,
        50419911,
        50420491,
        50421477,
        50418592,
        50420460,
        50417938,
        50420214,
        50419273,
        50420373,
        50419728,
        50419315,
        50420718,
        50421398,
        50421491,
        50420974,
        50419021,
        50419530,
        50390265,
        50420781,
        50421220,
        50421001,
        50421219,
        50420691,
        50420841,
        50420772,
        50420528,
        50418801,
        50333747,
        50418525,
        50420913,
        50418377,
        50418886,
        50332938,
        50420299,
        50420875,
        50391148,
        50332029,
        50418981,
        50418971,
        50419595,
        50421050,
        50420202,
        50329769,
        50420956,
        50390297,
        50419925,
        50421037,
        50420618,
        50421496,
        50421019,
        50420816,
        50418914,
        50418276,
        50418929,
        50420060,
        50420306,
        50418491,
        50420897,
        50420688,
        50420876,
        50417862,
        50420643,
        50420290,
        50419363,
        50421183,
        50420472,
        50418085,
        50420602,
        50420331,
        50418315,
        50419699,
        50420615,
        50419815,
        50420839,
        50420669,
        50419490,
        50337193,
        50420968,
        50418144,
        50419474,
        50419899,
        50418524,
        50420064,
        50420184,
        50420124,
        50418514,
        50418068,
        50419449,
        50419041,
        50418456,
        50418959,
        50418465,
        50418301,
        50420828,
        50419704,
        50333797,
        50417917,
        50392170,
        50420067,
        50420021,
        50417905,
        50419065,
        50418095,
        50418368,
        50420294,
        50420312,
        50328364,
        50420807,
        50419617,
        50419613,
        50419656,
        50419762,
        50419477,
        50418916,
        50418311,
        50420301,
        50402587,
        50420509,
        50420996,
        50333492,
        50418765,
        50419211,
        50420888,
        50420034,
        50336869,
        50417899,
        50391569,
        50418197,
        50420036,
        50417915,
        50420334,
        50419247,
        50418247,
        50418478,
        50420109,
        50418217,
        50418059,
        50419386,
        50418252,
        50389775,
        50420512,
        50419193,
        50330163,
        50419691,
        50419364,
        50418322,
        50418066,
        50419245,
        50419931,
        50418119,
        50419535,
        50419106,
        50418577,
        50420938,
        50333273,
        50419838,
        50418540,
        50418109,
        50419638,
        50420084,
        50420607,
        50419567,
        50393956,
        50417895,
        50417530,
        50420361,
        50418763,
        50328605,
        50419842,
        50344488,
        50328458,
        50419409,
        50418942,
        50417943,
        50419098,
        50418468,
        50421240,
        50420065,
        50335476,
        50419473,
        50419570,
        50419633,
        50348920,
        50419355,
        50390324,
        50419346,
        50420354,
        50418634,
        50330035,
        50420465,
        50418364,
        50418022,
        50418008,
        50418081,
        50391051,
        50417995,
        50419404,
        50418884,
        50419049,
        50418385,
        50418237,
        50417948,
        50418175,
        50418326,
        50419809,
        50345100,
        50418189,
        50418810,
        50420634,
        50418250,
        50420349,
        50389863,
        50353674,
        50417919,
        50417869,
        50418436,
        50419907,
        50419297,
        50419868,
        50419625,
        50420335,
        50417834,
        50390420,
        50419865,
        50418481,
        50419804,
        50417830,
        50418272,
        50419724,
        50418887,
        50418433,
        50420008,
        50418566,
        50418031,
        50420128,
        50417954,
        50328703,
        50417941,
        50418407,
        50420186,
        50419312,
        50394748,
        50330022,
        50421271,
        50328645,
        50419004,
        50418362,
        50419057,
        50417734,
        50418280,
        50417705,
        50420508,
        50329069,
        50418389,
        50390524,
        50418341,
        50418880,
        50417984,
        50392027,
        50389578,
        50419562,
        50418757,
        50329798,
        50354505,
        50329920,
        50417953,
        50390773,
        50419157,
        50418775,
        50419238,
        50418653,
        50391640,
        50389844,
        50389854,
        50419039,
        50330263,
        50341186,
        50353982,
        50419269,
        50418269,
        50418143,
        50417897,
        50417865,
        50419090,
        50418411,
        50392208,
        50420042,
        50418219,
        50418392,
        50417855,
        50419391,
        50336437,
        50419166,
        50420183,
        50420397,
        50418018,
        50419587,
        50419305,
        50330659,
        50328491,
        50418115,
        50417923,
        50419265,
        50418304,
        50419087,
        50419195,
        50418773,
        50420413,
        50417993,
        50419078,
        50418390,
        50418736,
        50418331,
        50418660,
        50418122,
        50329832,
        50418492,
        50391551,
        50390608,
        50418000,
        50418431,
        50418342,
        50419236,
        50418044,
        50419748,
        50417831,
        50330007,
        50420137,
        50419713,
        50390934,
        50419580,
        50390562,
        50328686,
        50418876,
        50390573,
        50419866,
        50418719,
        50418406,
        50329548,
        50419671,
        50329994,
        50387435,
        50341762,
        50419064,
        50418401,
        50350801,
        50418420,
        50344226,
        50329304,
        50418353,
        50418336,
        50418117,
        50421088,
        50418160,
        50329585,
        50329383,
        50418589,
        50418778,
        50418157,
        50329876,
        50391397,
        50391291,
        50418395,
        50418840,
        50350610,
        50332762,
        50419250,
        50396024,
        50418198,
        50330052,
        50328513,
        50418286,
        50419066,
        50418439,
        50418098,
        50419224,
        50417697,
        50329045,
        50418275,
        50420994,
        50391837,
        50419614,
        50419734,
        50418231,
        50341961,
        50390231,
        50328982,
        50418292,
        50417813,
        50419052,
        50329823,
        50420681,
        50420856,
        50420586,
        50420584,
        50418759,
        50420367,
        50328945,
        50389812,
        50418167,
        50417932,
        50419859,
        50419828,
        50419773,
        50419772,
        50342317,
        50418895,
        50418556,
        50390436,
        50418139,
        50417936,
        50417431,
        50390914,
        50419590,
        50419663,
        50329787,
        50391961,
        50417509,
        50417739,
        50421803,
        50421626,
        50421432,
        50421323,
        50420942,
        50420332,
        50420591,
        50421310,
        50420542,
        50420784,
        50420133,
        50420348,
        50420446,
        50421039,
        50419149,
        50419892,
        50419610,
        50420527,
        50420278,
        50420439,
        50421284,
        50420355,
        50419893,
        50419933,
        50328430,
        50419692,
        50418185,
        50418107,
        50417484,
        50419833,
        50419848,
        50400293,
        50417759,
        50419471,
        50331526,
        50360853,
        50419496,
        50419650,
        50417848,
        50329898,
        50418344,
        50420004,
        50418169,
        50418997,
        50393626,
        50418261,
        50343031,
        50417982,
        50400898,
        50329270,
        50420260,
        50419794,
        50419806,
        50417837,
        50418161,
        50418298,
        50389272,
        50418475,
        50418026,
        50418255,
        50419240,
        50417785
      ],
      "score": 187,
      "text": "What are you working on? What have you been curious about lately?",
      "time": 1794172820,
      "title": "Ask HN: What are you working on? (November 2026)",
      "type": "story"
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
      "title": "What a good resume actually looks like",
      "description": "Most resumes fail for the same small set of reasons. This is everything I wish someone had told me...",
      "url": "https://dev.to/rohan_sharma/what-a-good-resume-actually-looks-like-1gf6",
      "tags": "career, productivity, showdev, learning",
      "reactions": 5,
      "comments": 1,
      "reading_time": 9,
      "author": "rohan_sharma"
    },
    {
      "title": "I Added Up Everything I Spent Learning to Code This Year. The Total Surprised Me",
      "description": "There's a particular kind of advert that follows you once you start learning to code. The bootcamp...",
      "url": "https://dev.to/aheadkit/i-added-up-everything-i-spent-learning-to-code-this-year-the-total-surprised-me-kde",
      "tags": "beginners, learning, career, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "aheadkit"
    },
    {
      "title": "I Started Coding at University While My Classmates Were Already Freelancing. Here's What My First Month Actually Looked Like.",
      "description": "My classmates were sending invoices to clients while I was still searching \"how to install Python\"...",
      "url": "https://dev.to/aheadkit/i-started-coding-at-university-while-my-classmates-were-already-freelancing-heres-what-my-first-iff",
      "tags": "beginners, career, learning, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "aheadkit"
    },
    {
      "title": "\"Done\" wasn't done: the AI kept describing the work instead of checking it",
      "description": "The most important lesson from building ParkEase with an AI wasn't about code. It was about one word:...",
      "url": "https://dev.to/rakno/done-wasnt-done-the-ai-kept-describing-the-work-instead-of-checking-it-3ign",
      "tags": "ai, programming, testing, career",
      "reactions": 0,
      "comments": 2,
      "reading_time": 2,
      "author": "rakno"
    },
    {
      "title": "Check whether a UK employer can sponsor your visa with about 40 lines of Node.js",
      "description": "If you are an international developer looking for work in the UK, there is one question worth...",
      "url": "https://dev.to/vigneshcafy/check-whether-a-uk-employer-can-sponsor-your-visa-with-about-40-lines-of-nodejs-2094",
      "tags": "career, javascript, node, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "vigneshcafy"
    },
    {
      "title": "Why I keep going back to data structures even though I build web apps",
      "description": "As a student I'm told to study data structures and algorithms for interviews. That's true, but it...",
      "url": "https://dev.to/suraj_nandan/why-i-keep-going-back-to-data-structures-even-though-i-build-web-apps-2iab",
      "tags": "datastructures, computerscience, career, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "suraj_nandan"
    },
    {
      "title": "Your Team Has a Shared Vocabulary and Still Cannot Decide",
      "description": "Four people on one project shared the same personality vocabulary. We split the work in an afternoon...",
      "url": "https://dev.to/pz_li_ab1c82318c71a05feb7/your-team-has-a-shared-vocabulary-and-still-cannot-decide-2336",
      "tags": "career, culture, management",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "pz_li_ab1c82318c71a05feb7"
    },
    {
      "title": "How ATS keyword matching works, and how to tailor your developer resume without keyword stuffing",
      "description": "If you've ever applied to a job through a company careers page, your resume probably went into an...",
      "url": "https://dev.to/krdbeep/how-ats-keyword-matching-works-and-how-to-tailor-your-developer-resume-without-keyword-stuffing-4ep",
      "tags": "career, resume, beginners, productivity",
      "reactions": 1,
      "comments": 1,
      "reading_time": 4,
      "author": "krdbeep"
    },
    {
      "title": "How to Calculate In-Hand Salary from CTC in India (Budget FY 2026-27 Breakdown)",
      "description": "When receiving a job offer, appraisal letter, or campus placement in the Indian tech industry, one of...",
      "url": "https://dev.to/abdulraufofficial9/how-to-calculate-in-hand-salary-from-ctc-in-india-budget-fy-2026-27-breakdown-4b3j",
      "tags": "career, webdev, beginners, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "abdulraufofficial9"
    },
    {
      "title": "What does a backend developer do in Nepal? A junior's normal week",
      "description": "What a junior backend developer in Nepal really does each week, the boring parts included, and one free command to try tonight. https://saarathiacadem",
      "url": "https://dev.to/saarathi_academy/what-does-a-backend-developer-do-in-nepal-a-juniors-normal-week-2bho",
      "tags": "backend, webdev, career, node",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "saarathiacademy"
    }
  ]
}
```

