# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-07 06:23:02 UTC

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
      "forks": 9901,
      "added_stars": 8726,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9776,
      "added_stars": 16782,
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
      "author": "milind-soni",
      "repo": "OpenMausBot",
      "avatar": "https://github.com/milind-soni.png",
      "repo_link": "https://github.com/milind-soni/OpenMausBot",
      "desc": "Open-source Grok Bot alternative with a virtual machine that bots can use",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2240,
      "added_stars": 6395,
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
      "author": "nightly-labs",
      "repo": "openbot",
      "avatar": "https://github.com/nightly-labs.png",
      "repo_link": "https://github.com/nightly-labs/openbot",
      "desc": "A local-first desktop workspace for persistent AI teammates. Run Codex, Claude, and Grok with dedicated workspaces, task queues, file sharing, browser control, and agent-to-agent collaboration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 624,
      "added_stars": 1808,
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
      "author": "garrytan",
      "repo": "gstack",
      "avatar": "https://github.com/garrytan.png",
      "repo_link": "https://github.com/garrytan/gstack",
      "desc": "Use Garry Tan's exact Claude Code setup: 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 20741,
      "added_stars": 2230,
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
      "author": "Vincentwei1021",
      "repo": "video-shotcraft",
      "avatar": "https://github.com/Vincentwei1021.png",
      "repo_link": "https://github.com/Vincentwei1021/video-shotcraft",
      "desc": "AI video skill for Claude Code & Codex — cinematic, editable product promos with Remotion: 124 shot recipe cards, 150 motion previews, beat sync, sound design, Motion Workbench & JianYing (CapCut CN) export.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1668,
      "added_stars": 2389,
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
      "forks": 1288,
      "added_stars": 1666,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6685,
      "added_stars": 3915,
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
      "author": "Renhuai123",
      "repo": "ziwei-doushu",
      "avatar": "https://github.com/Renhuai123.png",
      "repo_link": "https://github.com/Renhuai123/ziwei-doushu",
      "desc": "紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3217,
      "added_stars": 5476,
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
      "author": "liguobao",
      "repo": "ds-harness-remote",
      "avatar": "https://github.com/liguobao.png",
      "repo_link": "https://github.com/liguobao/ds-harness-remote",
      "desc": "基于 DeepSeek Harness 插件机制构建的远程访问方案，通过低延迟、端到端加密的 P2P 网络，支持使用 PC、移动端 和 Web 随时访问本地设备上的DSH 、CodeX、Cursor、Claude Code等工作区。 (Built on DeepSeek Harness plugins, this low-latency, end-to-end encrypted P2P solution lets PC, mobile, and web clients access local DSH, Codex, Cursor, and Claude Code workspaces.)",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 169,
      "added_stars": 1044,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5902,
      "added_stars": 2214,
      "builtBy": [
        {
          "username": "JonnyBurger",
          "href": "https://github.com/JonnyBurger",
          "avatar": "https://avatars.githubusercontent.com/u/1629785"
        },
        {
          "username": "samohovets",
          "href": "https://github.com/samohovets",
          "avatar": "https://avatars.githubusercontent.com/u/24735429"
        },
        {
          "username": "patsalv",
          "href": "https://github.com/patsalv",
          "avatar": "https://avatars.githubusercontent.com/u/89481679"
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
      "forks": 4351,
      "added_stars": 1074,
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
    },
    {
      "author": "lfnovo",
      "repo": "open-notebook",
      "avatar": "https://github.com/lfnovo.png",
      "repo_link": "https://github.com/lfnovo/open-notebook",
      "desc": "An Open Source implementation of Notebook LM with more flexibility and features",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4794,
      "added_stars": 735,
      "builtBy": [
        {
          "username": "lfnovo",
          "href": "https://github.com/lfnovo",
          "avatar": "https://avatars.githubusercontent.com/u/579178"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "kwp3",
          "href": "https://github.com/kwp3",
          "avatar": "https://avatars.githubusercontent.com/u/238125124"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        }
      ]
    },
    {
      "author": "THU-MAIC",
      "repo": "OpenMAIC",
      "avatar": "https://github.com/THU-MAIC.png",
      "repo_link": "https://github.com/THU-MAIC/OpenMAIC",
      "desc": "Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6592,
      "added_stars": 929,
      "builtBy": [
        {
          "username": "wyuc",
          "href": "https://github.com/wyuc",
          "avatar": "https://avatars.githubusercontent.com/u/18752201"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cosarah",
          "href": "https://github.com/cosarah",
          "avatar": "https://avatars.githubusercontent.com/u/117187635"
        },
        {
          "username": "YizukiAme",
          "href": "https://github.com/YizukiAme",
          "avatar": "https://avatars.githubusercontent.com/u/104178195"
        },
        {
          "username": "LING-6150",
          "href": "https://github.com/LING-6150",
          "avatar": "https://avatars.githubusercontent.com/u/181122961"
        }
      ]
    },
    {
      "author": "openclaw",
      "repo": "openclaw",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/openclaw",
      "desc": "The AI that really does things. Any OS. Any Platform. The lobster way. 🦞",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 82815,
      "added_stars": 1004,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "vincentkoc",
          "href": "https://github.com/vincentkoc",
          "avatar": "https://avatars.githubusercontent.com/u/25068"
        },
        {
          "username": "obviyus",
          "href": "https://github.com/obviyus",
          "avatar": "https://avatars.githubusercontent.com/u/22031114"
        },
        {
          "username": "shakkernerd",
          "href": "https://github.com/shakkernerd",
          "avatar": "https://avatars.githubusercontent.com/u/165377636"
        },
        {
          "username": "roboclaw-bot",
          "href": "https://github.com/roboclaw-bot",
          "avatar": "https://avatars.githubusercontent.com/u/309084314"
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
      "forks": 4298,
      "added_stars": 877,
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
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca lets you run a fleet of coding agents (e.g. Claude Code, Codex) with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7488,
      "added_stars": 6921,
      "builtBy": [
        {
          "username": "nwparker",
          "href": "https://github.com/nwparker",
          "avatar": "https://avatars.githubusercontent.com/u/4138956"
        },
        {
          "username": "brennanb2025",
          "href": "https://github.com/brennanb2025",
          "avatar": "https://avatars.githubusercontent.com/u/79079362"
        },
        {
          "username": "Jinwoo-H",
          "href": "https://github.com/Jinwoo-H",
          "avatar": "https://avatars.githubusercontent.com/u/73622457"
        },
        {
          "username": "AmethystLiang",
          "href": "https://github.com/AmethystLiang",
          "avatar": "https://avatars.githubusercontent.com/u/6427696"
        },
        {
          "username": "OrcaWin",
          "href": "https://github.com/OrcaWin",
          "avatar": "https://avatars.githubusercontent.com/u/293788423"
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
      "forks": 18943,
      "added_stars": 4858,
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
      "forks": 5243,
      "added_stars": 8452,
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
      "forks": 5902,
      "added_stars": 551,
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
      "forks": 8105,
      "added_stars": 263,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1164,
      "added_stars": 1133,
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
      "forks": 294,
      "added_stars": 1586,
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
      "forks": 5657,
      "added_stars": 816,
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
      "author": "netbirdio",
      "repo": "netbird",
      "avatar": "https://github.com/netbirdio.png",
      "repo_link": "https://github.com/netbirdio/netbird",
      "desc": "NetBird securely connects people, machines and AI agents across any network with one identity-based Zero Trust platform. Powered by peer-to-peer WireGuard®",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1833,
      "added_stars": 1047,
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
      "forks": 19318,
      "added_stars": 378,
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
      "author": "prometheus",
      "repo": "prometheus",
      "avatar": "https://github.com/prometheus.png",
      "repo_link": "https://github.com/prometheus/prometheus",
      "desc": "The Prometheus monitoring system and time series database.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10989,
      "added_stars": 1163,
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
      "author": "tailscale",
      "repo": "tailscale",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailscale",
      "desc": "The easiest, most secure way to use WireGuard and 2FA.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3434,
      "added_stars": 1650,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2343,
      "added_stars": 1070,
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
      "author": "llm-d",
      "repo": "llm-d-router",
      "avatar": "https://github.com/llm-d.png",
      "repo_link": "https://github.com/llm-d/llm-d-router",
      "desc": "llm-d Router: The intelligent entry point for inference requests",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 517,
      "added_stars": 84,
      "builtBy": [
        {
          "username": "elevran",
          "href": "https://github.com/elevran",
          "avatar": "https://avatars.githubusercontent.com/u/13645998"
        },
        {
          "username": "nirrozenbaum",
          "href": "https://github.com/nirrozenbaum",
          "avatar": "https://avatars.githubusercontent.com/u/19717747"
        },
        {
          "username": "ahg-g",
          "href": "https://github.com/ahg-g",
          "avatar": "https://avatars.githubusercontent.com/u/40361897"
        },
        {
          "username": "roytman",
          "href": "https://github.com/roytman",
          "avatar": "https://avatars.githubusercontent.com/u/1816654"
        },
        {
          "username": "vMaroon",
          "href": "https://github.com/vMaroon",
          "avatar": "https://avatars.githubusercontent.com/u/73340153"
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
      "forks": 169,
      "added_stars": 1838,
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
      "author": "go-gitea",
      "repo": "gitea",
      "avatar": "https://github.com/go-gitea.png",
      "repo_link": "https://github.com/go-gitea/gitea",
      "desc": "Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 7368,
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
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 834,
      "added_stars": 867,
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
      "author": "rasonyang",
      "repo": "ai-native-callcenter",
      "avatar": "https://github.com/rasonyang.png",
      "repo_link": "https://github.com/rasonyang/ai-native-callcenter",
      "desc": "Self-hosted API-first AI call center: AI talks, code controls the call. AI agents answer every call; humans take over without dropping it. Runs on FreeSWITCH with your SIP trunk and realtime model (OpenAI, Grok, Qwen, Doubao, or any compatible gateway).",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 103,
      "added_stars": 355,
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
    },
    {
      "author": "github",
      "repo": "gh-aw",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/gh-aw",
      "desc": "GitHub Agentic Workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 619,
      "added_stars": 261,
      "builtBy": [
        {
          "username": "pelikhan",
          "href": "https://github.com/pelikhan",
          "avatar": "https://avatars.githubusercontent.com/u/4175913"
        },
        {
          "username": "dsyme",
          "href": "https://github.com/dsyme",
          "avatar": "https://avatars.githubusercontent.com/u/7204669"
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
      "forks": 8910,
      "added_stars": 543,
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
      "forks": 11449,
      "added_stars": 49078,
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
          "username": "jaketame",
          "href": "https://github.com/jaketame",
          "avatar": "https://avatars.githubusercontent.com/u/1787973"
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
      "forks": 6855,
      "added_stars": 15214,
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
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3856,
      "added_stars": 8836,
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
      "forks": 4819,
      "added_stars": 9085,
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
      "author": "earthtojake",
      "repo": "text-to-cad",
      "avatar": "https://github.com/earthtojake.png",
      "repo_link": "https://github.com/earthtojake/text-to-cad",
      "desc": "Design physical products with AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2444,
      "added_stars": 8010,
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
      "author": "AgriciDaniel",
      "repo": "claude-seo",
      "avatar": "https://github.com/AgriciDaniel.png",
      "repo_link": "https://github.com/AgriciDaniel/claude-seo",
      "desc": "Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3520,
      "added_stars": 8728,
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
      "author": "calesthio",
      "repo": "OpenMontage",
      "avatar": "https://github.com/calesthio.png",
      "repo_link": "https://github.com/calesthio/OpenMontage",
      "desc": "World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10362,
      "added_stars": 13431,
      "builtBy": [
        {
          "username": "calesthio",
          "href": "https://github.com/calesthio",
          "avatar": "https://avatars.githubusercontent.com/u/213189893"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "0xDevNinja",
          "href": "https://github.com/0xDevNinja",
          "avatar": "https://avatars.githubusercontent.com/u/102245100"
        },
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "yiyabo",
          "href": "https://github.com/yiyabo",
          "avatar": "https://avatars.githubusercontent.com/u/129351686"
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
      "forks": 5254,
      "added_stars": 6951,
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
      "forks": 3406,
      "added_stars": 5016,
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
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use Claude Code, Codex, Antigravity, VSCode, Pi, and OpenCode (and 6 other harnesses) for free (1.3B+ free tokens) from your terminal, app, IDE, or phone, and now from the browser with native browser sessions (multi-harness + multi-model) like OpenClaw (voice supported + ToS friendly)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10422,
      "added_stars": 10703,
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
      "forks": 2146,
      "added_stars": 5197,
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
      "forks": 4466,
      "added_stars": 2143,
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
      "forks": 3046,
      "added_stars": 3499,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ The BEST Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10366,
      "added_stars": 13188,
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
      "author": "fastapi",
      "repo": "fastapi",
      "avatar": "https://github.com/fastapi.png",
      "repo_link": "https://github.com/fastapi/fastapi",
      "desc": "FastAPI framework, high performance, easy to learn, fast to code, ready for production",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10202,
      "added_stars": 2536,
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
      "forks": 20727,
      "added_stars": 1016,
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
      "author": "beenuar",
      "repo": "AiSOC",
      "avatar": "https://github.com/beenuar.png",
      "repo_link": "https://github.com/beenuar/AiSOC",
      "desc": "Open-source AI Security Operations Center: alert fusion, LLM-agent triage, MITRE ATT&CK investigation, and a replayable decision ledger for every agent step. Self-hostable, runs with no API keys, MIT licensed. Ships an MCP server for Claude, Cursor and Continue.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 713,
      "added_stars": 5484,
      "builtBy": [
        {
          "username": "beenuar",
          "href": "https://github.com/beenuar",
          "avatar": "https://avatars.githubusercontent.com/u/19245630"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "alexmateescu",
          "href": "https://github.com/alexmateescu",
          "avatar": "https://avatars.githubusercontent.com/u/22677210"
        },
        {
          "username": "prince30121",
          "href": "https://github.com/prince30121",
          "avatar": "https://avatars.githubusercontent.com/u/154232170"
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
      "forks": 5711,
      "added_stars": 5106,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
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
    },
    {
      "title": "kafka-harbor: the Kafka layer every Node.js team rebuilds by hand, done once",
      "url": "https://dev.to/pinceladasdaweb/kafka-harbor-the-kafka-layer-every-nodejs-team-rebuilds-by-hand-done-once-35id",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-19T12:51:32.000Z"
    },
    {
      "title": "Croft: Typed data pipeline – in TypeScript and DuckDB",
      "url": "https://croft.zabaca.com/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-19T00:56:56.000Z"
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
      "reactions": 114,
      "comments": 25,
      "reading_time": 4,
      "author": "heyitsjem"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-28dh",
      "tags": "weeklyretro",
      "reactions": 78,
      "comments": 43,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "An Update on the Hacktoberfest Open-Source AI Challenge: Ghost in the Machine Winners",
      "description": "Hey all, we have a quick update for everyone who participated in the Hacktoberfest Open-Source AI...",
      "url": "https://dev.to/devteam/an-update-on-the-hacktoberfest-open-source-ai-challenge-ghost-in-the-machine-winners-44bp",
      "tags": "devchallenge, hf26challenge, hacktoberfest, ai",
      "reactions": 44,
      "comments": 8,
      "reading_time": 1,
      "author": "heyitsjem"
    },
    {
      "title": "One Word, Two GPUs: Why Gemma 4 Answers the Same Question Differently on a Laptop and a Tesla T4",
      "description": "Same GGUF file, same llama.cpp build, greedy decoding, and a GTX 1650 Ti answers $20 where a Tesla T4 answers 2000. One GSM8K question followed down to the word where the two cards part, the order in which each card adds its numbers, and the one stock setting that makes them agree.",
      "url": "https://dev.to/gde/one-word-two-gpus-why-gemma-4-answers-the-same-question-differently-on-a-laptop-and-a-tesla-t4-1dj2",
      "tags": "gemma, llamacpp, cuda, nvidia",
      "reactions": 15,
      "comments": 1,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "Let's see where you code!",
      "description": "I’ve been writing a lot about AWS lately, so let’s take a breather. This is my little corner of the...",
      "url": "https://dev.to/maame-codes/lets-see-where-you-code-147",
      "tags": "watercooler, discuss",
      "reactions": 89,
      "comments": 43,
      "reading_time": 2,
      "author": "maame-codes"
    },
    {
      "title": "Want to make DEV your full-time job? We're hiring a Community Manager!",
      "description": "Hey friends 👋  Back in June, we posted about a Community Program Manager role. Thank you to everyone...",
      "url": "https://dev.to/devteam/want-to-make-dev-your-full-time-job-were-hiring-a-community-manager-4p1f",
      "tags": "career, meta, hiring",
      "reactions": 72,
      "comments": 7,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Congrats to October's MLH x DEV Writing Challenge Winner!",
      "description": "October's MLH x DEV Writing Challenge is a wrap! This is our way of celebrating MLH hackers who take...",
      "url": "https://dev.to/devteam/congrats-to-octobers-mlh-x-dev-writing-challenge-winner-36a9",
      "tags": "devchallenge, mlhacks, hackathon",
      "reactions": 22,
      "comments": 2,
      "reading_time": 1,
      "author": "heyitsjem"
    },
    {
      "title": "Prompt Pad: Show Your AI How to Respond with Few-Shot Examples",
      "description": "Want AI to answer in a specific way? Don't just tell it. Show it.  In this episode of Prompt Pad,...",
      "url": "https://blog.mlh.com/prompt-pad-show-your-ai-how-to-respond-with-few-shot-examples-2869",
      "tags": "ai, beginners, codenewbie, vibecoding",
      "reactions": 14,
      "comments": 1,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "Android 17 on a 4.9 Kernel: LineageOS 24.0 on the Pixel 3a",
      "description": "The Pixel 3a runs LineageOS 24.0, Android 17, on its original 4.9 kernel with SELinux enforcing and Google apps. One kernel fix, five platform forks and a set of device-tree changes, each traced to a line of a boot log.",
      "url": "https://dev.to/gde/android-17-on-a-49-kernel-lineageos-240-on-the-pixel-3a-1mok",
      "tags": "android, linux, kernel, lineageos",
      "reactions": 10,
      "comments": 1,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Containing the Autonomous Mind: Sub-Second Zero-Trust Execution with GKE Agent Sandbox",
      "description": "Why standard Kubernetes pods fail when AI agents start writing code and how to build a sub-second,...",
      "url": "https://dev.to/gde/containing-the-autonomous-mind-sub-second-zero-trust-execution-with-gke-agent-sandbox-5e6b",
      "tags": "ai, googlecloud, kubernetes",
      "reactions": 19,
      "comments": 1,
      "reading_time": 7,
      "author": "saurabhmi"
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
      "title": "Forwarded Without Question: How Web Frameworks Overtrust the Forwarded Header",
      "url": "https://www.lkoskela.fi/blog/2026-11-05-forwarded-without-question/",
      "score": 1,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "m5kism"
    },
    {
      "title": "Progress Report: Linux 7.3 - Asahi Linux",
      "url": "https://asahilinux.org/2026/11/progress-report-7-3/",
      "score": 2,
      "comments": 0,
      "tags": [
        "linux",
        "mac"
      ],
      "id": "4qiair"
    },
    {
      "title": "Exploring Janet and the httpf web framework",
      "url": "https://nick.gs/blog/2026-11/exploring-janet-and-the-httpf-web-framework/",
      "score": 2,
      "comments": 1,
      "tags": [
        "lisp",
        "web"
      ],
      "id": "ydzlvp"
    },
    {
      "title": "A Maintainer's Advice on Contributing to Open Source in 2026",
      "url": "https://wasp.sh/blog/2026/08/13/advice-for-contributing-in-2026",
      "score": 3,
      "comments": 0,
      "tags": [
        "culture",
        "practices"
      ],
      "id": "5mnquy"
    },
    {
      "title": "Inform is a programming language for creating interactive fiction",
      "url": "https://ganelson.github.io/inform-website/",
      "score": 1,
      "comments": 0,
      "tags": [
        "plt"
      ],
      "id": "immpvk"
    },
    {
      "title": "How hard could implementing DTLS 1.3 possibly be?",
      "url": "https://joturk.net/posts/dtls",
      "score": 5,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "lssm6h"
    },
    {
      "title": "UploadYourRam.org",
      "url": "https://uploadyourram.org/",
      "score": 7,
      "comments": 1,
      "tags": [
        "satire"
      ],
      "id": "miazwz"
    },
    {
      "title": "Libghostty 1.0",
      "url": "https://mitchellh.com/writing/libghostty-1-0",
      "score": 54,
      "comments": 3,
      "tags": [
        "c",
        "release",
        "zig"
      ],
      "id": "0ouxwf"
    },
    {
      "title": "The Port That Does Not Exist",
      "url": "https://acid.vegas/blog/the-port-that-does-not-exist/",
      "score": 25,
      "comments": 2,
      "tags": [
        "networking"
      ],
      "id": "osqswf"
    },
    {
      "title": "Hacking the meta ray-ban smartglasses",
      "url": "https://p0pcycle.com/2026/11/06/hacking-the-meta-ray-ban-smartglasses/",
      "score": 15,
      "comments": 1,
      "tags": [
        "security"
      ],
      "id": "xhrab6"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "mfiguiere",
      "descendants": 73,
      "id": 50399933,
      "kids": [
        50401480,
        50400473,
        50401618,
        50401356,
        50401342,
        50400757,
        50401926,
        50400909,
        50401244,
        50402097,
        50401237,
        50401206,
        50401771,
        50401044,
        50400869,
        50400605,
        50401251,
        50400688,
        50400685,
        50400653,
        50401368,
        50400821,
        50401438,
        50401143,
        50400856,
        50401419,
        50401150,
        50401456,
        50400586
      ],
      "score": 455,
      "time": 1794007852,
      "title": "Libghostty 1.0",
      "type": "story",
      "url": "https://mitchellh.com/writing/libghostty-1-0"
    },
    {
      "by": "ackyshake",
      "descendants": 1,
      "id": 50401867,
      "kids": [
        50402138
      ],
      "score": 18,
      "time": 1794028818,
      "title": "Asahi Linux Progress Linux 7.3",
      "type": "story",
      "url": "https://asahilinux.org/2026/11/progress-report-7-3/"
    },
    {
      "by": "benbreen",
      "descendants": 4,
      "id": 50401740,
      "kids": [
        50402059,
        50402013,
        50401898
      ],
      "score": 22,
      "time": 1794027276,
      "title": "A barbarian tribe's mythic origin story is true, ancient DNA reveals",
      "type": "story",
      "url": "https://www.science.org/content/article/barbarian-tribe-s-mythic-origin-story-true-ancient-dna-reveals"
    },
    {
      "by": "theanomaly",
      "descendants": 94,
      "id": 50397429,
      "kids": [
        50397921,
        50399491,
        50398951,
        50402094,
        50401734,
        50398028,
        50401911,
        50397899,
        50401343,
        50399975,
        50399472,
        50398502,
        50401131,
        50399690,
        50400032,
        50400157,
        50401123,
        50397939,
        50401681,
        50398180,
        50399451,
        50398223,
        50398551,
        50398239,
        50398776,
        50400499,
        50398568,
        50400211,
        50397806,
        50398615,
        50400704,
        50398480,
        50399236,
        50397597,
        50398376,
        50398487
      ],
      "score": 413,
      "time": 1793994531,
      "title": "A Jev that can ask Opus for help gives Opus accuracy at 4x lower cost",
      "type": "story",
      "url": "https://hightouch.com/blog/llm-judges-identity-resolution"
    },
    {
      "by": "PLenz",
      "descendants": 1805,
      "id": 50391456,
      "kids": [
        50394025,
        50393307,
        50398454,
        50394656,
        50396106,
        50394319,
        50394171,
        50391954,
        50393902,
        50393138,
        50394338,
        50391955,
        50393112,
        50399672,
        50395801,
        50397193,
        50396128,
        50392975,
        50394172,
        50393885,
        50393727,
        50393821,
        50392479,
        50393947,
        50399761,
        50392847,
        50394731,
        50401615,
        50401407,
        50394057,
        50394144,
        50399795,
        50398110,
        50398286,
        50397317,
        50394105,
        50393155,
        50396548,
        50393912,
        50398933,
        50397177,
        50394944,
        50398164,
        50394619,
        50394280,
        50395303,
        50394759,
        50396605,
        50392073,
        50393207,
        50394203,
        50392014,
        50393319,
        50396712,
        50400729,
        50401033,
        50393750,
        50397613,
        50392713,
        50391702,
        50396536,
        50396574,
        50399288,
        50396530,
        50394513,
        50394423,
        50397057,
        50391832,
        50396331,
        50392054,
        50398754,
        50394471,
        50401756,
        50393920,
        50396774,
        50394647,
        50395981,
        50392513,
        50398498,
        50395504,
        50395742,
        50396207,
        50402133,
        50393804,
        50401538,
        50394159,
        50391503,
        50395246,
        50395291,
        50393622,
        50401960,
        50392612,
        50393678,
        50393579,
        50395838,
        50400145,
        50393129,
        50396840,
        50392864,
        50396557,
        50393091,
        50399775,
        50395202,
        50392780,
        50392466,
        50396218,
        50394140,
        50396776,
        50393613,
        50394616,
        50399066,
        50392994,
        50398015,
        50397733,
        50394971,
        50395567,
        50394352,
        50395089,
        50394807,
        50393004,
        50400084,
        50398004,
        50397376,
        50391947,
        50399160,
        50392461,
        50396264,
        50395310,
        50398516,
        50395060,
        50399851,
        50394036,
        50399465,
        50391661,
        50395740,
        50396209,
        50394493,
        50394018,
        50392424,
        50392307,
        50393356,
        50392105,
        50396129,
        50396994,
        50396732,
        50394043,
        50395272,
        50395163,
        50395908,
        50391959,
        50394312,
        50394955,
        50397575,
        50397927,
        50394713,
        50392343,
        50392206,
        50392558,
        50392217,
        50391937,
        50392143,
        50393441,
        50391980,
        50392132
      ],
      "score": 946,
      "time": 1793967231,
      "title": "Tesla to wind down Cybertruck production",
      "type": "story",
      "url": "https://www.nbcnews.com/tech/tech-news/tesla-wind-cybertruck-production-years-poor-sales-markets-rcna607817"
    },
    {
      "by": "raybb",
      "descendants": 38,
      "id": 50399991,
      "kids": [
        50400887,
        50401093,
        50400910,
        50401473,
        50401453,
        50400998,
        50401319
      ],
      "score": 84,
      "time": 1794008239,
      "title": "RealPage rent-pricing case wraps with nearly $360M to renters",
      "type": "story",
      "url": "https://www.multifamilydive.com/news/realpage-rent-pricing-case-360m-renters/873553/"
    },
    {
      "by": "lacieargyle",
      "descendants": 21,
      "id": 50384263,
      "kids": [
        50401819,
        50401788,
        50401940,
        50401486,
        50401713,
        50401767,
        50385191,
        50401818,
        50401874,
        50401727,
        50401664,
        50401892,
        50401752
      ],
      "score": 35,
      "time": 1793911586,
      "title": "What do the next 4000 emoji look like?",
      "type": "story",
      "url": "https://jenniferdaniel.substack.com/p/what-do-the-next-4000-emoji-look"
    },
    {
      "by": "ChrisArchitect",
      "descendants": 254,
      "id": 50388001,
      "kids": [
        50394856,
        50393856,
        50395528,
        50389013,
        50393525,
        50394538,
        50397478,
        50397860,
        50394458,
        50396277,
        50396966,
        50396487,
        50400301,
        50396312,
        50396383,
        50395971,
        50395888,
        50398660,
        50399120,
        50395555,
        50398280,
        50393439,
        50399362,
        50397098,
        50396323,
        50395019,
        50399328,
        50401000,
        50394033,
        50395802,
        50393725,
        50397944,
        50393658,
        50399934,
        50396718,
        50400928,
        50399186,
        50388011,
        50394037,
        50393970,
        50393794
      ],
      "score": 312,
      "time": 1793937628,
      "title": "US FAA says it will phase out floppy disks from air traffic control by 2028",
      "type": "story",
      "url": "https://www.reuters.com/world/us/us-faa-says-it-will-phase-out-floppy-disks-air-traffic-control-by-2028-2026-11-05/"
    },
    {
      "by": "SerCe",
      "descendants": 104,
      "id": 50397219,
      "kids": [
        50398529,
        50397540,
        50398007,
        50397972,
        50398287,
        50398574,
        50398382,
        50398378,
        50397924,
        50397846,
        50397548,
        50397897
      ],
      "score": 207,
      "time": 1793993618,
      "title": "Firecracker VM Escape: PwnEscape Part 2",
      "type": "story",
      "url": "https://pwn.ai/blog/firecracker-escape"
    },
    {
      "by": "AlexeyBrin",
      "descendants": 2,
      "id": 50352701,
      "kids": [
        50402031,
        50401992,
        50401993
      ],
      "score": 23,
      "time": 1793717382,
      "title": "The Flash C Compiler",
      "type": "story",
      "url": "https://blog.adafruit.com/2026/10/31/flash-c-compiler/"
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
      "title": "An AI Testing Presentation Became the Final Push for Organizational Change at My Company",
      "description": "From a multi-agent testing experiment to a broader discussion about how engineering teams should...",
      "url": "https://dev.to/xulingfeng/an-ai-testing-presentation-became-the-final-push-for-organizational-change-at-my-company-12ag",
      "tags": "discuss, ai, programming, career",
      "reactions": 115,
      "comments": 62,
      "reading_time": 13,
      "author": "xulingfeng"
    },
    {
      "title": "Want to make DEV your full-time job? We're hiring a Community Manager!",
      "description": "Hey friends 👋  Back in June, we posted about a Community Program Manager role. Thank you to everyone...",
      "url": "https://dev.to/devteam/want-to-make-dev-your-full-time-job-were-hiring-a-community-manager-4p1f",
      "tags": "career, meta, hiring",
      "reactions": 72,
      "comments": 7,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Your Code Can Be Perfect. Your Product Can Still Fail.",
      "description": "The value of a software engineer is shifting from implementing requirements to understanding which problems deserve to be solved—and delivering solutions that matter.",
      "url": "https://dev.to/holasoymalva/your-code-can-be-perfect-your-product-can-still-fail-gag",
      "tags": "career, computerscience, softwareengineering, programming",
      "reactions": 0,
      "comments": 1,
      "reading_time": 6,
      "author": "holasoymalva"
    },
    {
      "title": "I Still Feel Like a Fraud. Here's What Actually Helps.",
      "description": "Experience and skills keep growing. The imposter syndrome doesn't go away. Here's the one thing that actually works for me.",
      "url": "https://dev.to/josaphatstar/i-still-feel-like-a-fraud-heres-what-actually-helps-3c50",
      "tags": "career, mentalhealth, discuss, beginners",
      "reactions": 2,
      "comments": 1,
      "reading_time": 3,
      "author": "josaphatstar"
    },
    {
      "title": "My First Tech Interview Ended in 12 Minutes — the Feedback Changed How I Prepare",
      "description": "My first real tech interview lasted twelve minutes. Not because I was brilliant and they fast-tracked...",
      "url": "https://dev.to/aheadkit/my-first-tech-interview-ended-in-12-minutes-the-feedback-changed-how-i-prepare-4df2",
      "tags": "career, beginners, interview, programming",
      "reactions": 0,
      "comments": 1,
      "reading_time": 3,
      "author": "aheadkit"
    },
    {
      "title": "Google Cloud ACE Exam Guide 2026: Sections, Renewal, Study Plan",
      "description": "The Google Cloud Associate Cloud Engineer (ACE) exam tests whether you can set up, deploy, run and...",
      "url": "https://dev.to/sajeevsebastian/google-cloud-ace-exam-guide-2026-sections-renewal-study-plan-1nhe",
      "tags": "googlecloud, cloud, certification, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sajeevsebastian"
    },
    {
      "title": "The forward-deployed engineer bootcamp · 2. The first customer meeting",
      "description": "The forward-deployed engineer bootcamp · Chapter 2 of 12 · Career · new chapter every Saturday...",
      "url": "https://dev.to/techamit95ch/the-forward-deployed-engineer-bootcamp-2-the-first-customer-meeting-2676",
      "tags": "tutorial, career, theforward, identifyingtheactualproblem",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "techamit95ch"
    },
    {
      "title": "Where crypto for online work actually moves (no KYC, Nov 2026): a field census",
      "description": "1. Method   For 12 days (Oct 26 to Nov 6, 2026) I ran short work sessions, about one an...",
      "url": "https://dev.to/pennyops/where-crypto-for-online-work-actually-moves-no-kyc-nov-2026-a-field-census-4m00",
      "tags": "crypto, abotwrotethis, career, bitcoin",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "pennyops"
    },
    {
      "title": "Your GitHub Project Needs a Better Resume Description Than a Tech Stack",
      "description": "You spent three weekends building an app. The repository has a working demo, a reasonable README, and...",
      "url": "https://dev.to/cvobjective/your-github-project-needs-a-better-resume-description-than-a-tech-stack-13ma",
      "tags": "career, github, resume, softwaredevelopment",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "cvobjective"
    },
    {
      "title": "Why a Java Backend Developer Is Building a 6G + AI Dashboard (and Fixing Bugs in NVIDIA Sionna)",
      "description": "Most of my posts so far were about Java libraries. This one is about a different side of my work: a...",
      "url": "https://dev.to/vinu2730/why-a-java-backend-developer-is-building-a-6g-ai-dashboard-and-fixing-bugs-in-nvidia-sionna-1me2",
      "tags": "opensource, career, careerdevelopment",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "vinu2730"
    }
  ]
}
```

