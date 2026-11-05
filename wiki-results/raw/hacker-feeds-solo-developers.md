# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-05 06:26:06 UTC

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
      "forks": 9818,
      "added_stars": 8822,
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
      "forks": 9492,
      "added_stars": 14580,
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
      "author": "JetBrains",
      "repo": "thinkrail",
      "avatar": "https://github.com/JetBrains.png",
      "repo_link": "https://github.com/JetBrains/thinkrail",
      "desc": "Vibe code with pi in a lightweight, real IDE that customises itself around the way you work — The Vibe You Need",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 466,
      "added_stars": 3031,
      "builtBy": [
        {
          "username": "rsolmano",
          "href": "https://github.com/rsolmano",
          "avatar": "https://avatars.githubusercontent.com/u/177517595"
        },
        {
          "username": "danyaberezun",
          "href": "https://github.com/danyaberezun",
          "avatar": "https://avatars.githubusercontent.com/u/3789877"
        },
        {
          "username": "OLavrik",
          "href": "https://github.com/OLavrik",
          "avatar": "https://avatars.githubusercontent.com/u/14210843"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Mark-Life",
          "href": "https://github.com/Mark-Life",
          "avatar": "https://avatars.githubusercontent.com/u/88837967"
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
      "forks": 1613,
      "added_stars": 2629,
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
      "forks": 1257,
      "added_stars": 2562,
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
          "username": "Ayush7614",
          "href": "https://github.com/Ayush7614",
          "avatar": "https://avatars.githubusercontent.com/u/67006255"
        },
        {
          "username": "guidovizoso",
          "href": "https://github.com/guidovizoso",
          "avatar": "https://avatars.githubusercontent.com/u/27702539"
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
      "forks": 6523,
      "added_stars": 4388,
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
      "author": "milind-soni",
      "repo": "OpenMausBot",
      "avatar": "https://github.com/milind-soni.png",
      "repo_link": "https://github.com/milind-soni/OpenMausBot",
      "desc": "Open-source Grok Bot alternative with a virtual machine that bots can use",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1708,
      "added_stars": 5847,
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
      "author": "Renhuai123",
      "repo": "ziwei-doushu",
      "avatar": "https://github.com/Renhuai123.png",
      "repo_link": "https://github.com/Renhuai123/ziwei-doushu",
      "desc": "紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3083,
      "added_stars": 7014,
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
      "author": "nightly-labs",
      "repo": "openbot",
      "avatar": "https://github.com/nightly-labs.png",
      "repo_link": "https://github.com/nightly-labs/openbot",
      "desc": "A local-first desktop workspace for persistent AI teammates. Run Codex, Claude, and Grok with dedicated workspaces, task queues, file sharing, browser control, and agent-to-agent collaboration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 569,
      "added_stars": 2485,
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
      "author": "spotify",
      "repo": "portal-ai-plugins",
      "avatar": "https://github.com/spotify.png",
      "repo_link": "https://github.com/spotify/portal-ai-plugins",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 248,
      "added_stars": 632,
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
      "author": "lfnovo",
      "repo": "open-notebook",
      "avatar": "https://github.com/lfnovo.png",
      "repo_link": "https://github.com/lfnovo/open-notebook",
      "desc": "An Open Source implementation of Notebook LM with more flexibility and features",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4783,
      "added_stars": 938,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5836,
      "added_stars": 2224,
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
      "author": "KeygraphHQ",
      "repo": "shannon",
      "avatar": "https://github.com/KeygraphHQ.png",
      "repo_link": "https://github.com/KeygraphHQ/shannon",
      "desc": "Shannon is an AI pentester for web applications and APIs. It analyzes your source code, identifies attack vectors, and executes real exploits to prove vulnerabilities before they reach production.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5965,
      "added_stars": 1204,
      "builtBy": [
        {
          "username": "ajmallesh",
          "href": "https://github.com/ajmallesh",
          "avatar": "https://avatars.githubusercontent.com/u/178829317"
        },
        {
          "username": "ezl-keygraph",
          "href": "https://github.com/ezl-keygraph",
          "avatar": "https://avatars.githubusercontent.com/u/252853768"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "keygraphVarun",
          "href": "https://github.com/keygraphVarun",
          "avatar": "https://avatars.githubusercontent.com/u/182007681"
        },
        {
          "username": "george-keygraph",
          "href": "https://github.com/george-keygraph",
          "avatar": "https://avatars.githubusercontent.com/u/244620289"
        }
      ]
    },
    {
      "author": "ahmadrosid",
      "repo": "nakama",
      "avatar": "https://github.com/ahmadrosid.png",
      "repo_link": "https://github.com/ahmadrosid/nakama",
      "desc": "The AI workspace where teams share agents, skills and automations that the whole company builds on.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 129,
      "added_stars": 100,
      "builtBy": [
        {
          "username": "ahmadrosid",
          "href": "https://github.com/ahmadrosid",
          "avatar": "https://avatars.githubusercontent.com/u/29406408"
        },
        {
          "username": "fajarhide",
          "href": "https://github.com/fajarhide",
          "avatar": "https://avatars.githubusercontent.com/u/4769529"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "yusupsupriyadi",
          "href": "https://github.com/yusupsupriyadi",
          "avatar": "https://avatars.githubusercontent.com/u/57658483"
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
      "forks": 4315,
      "added_stars": 1052,
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
      "author": "makecindy",
      "repo": "cindy",
      "avatar": "https://github.com/makecindy.png",
      "repo_link": "https://github.com/makecindy/cindy",
      "desc": "Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1138,
      "added_stars": 1378,
      "builtBy": [
        {
          "username": "dashhuang",
          "href": "https://github.com/dashhuang",
          "avatar": "https://avatars.githubusercontent.com/u/125997726"
        },
        {
          "username": "MagicLizi",
          "href": "https://github.com/MagicLizi",
          "avatar": "https://avatars.githubusercontent.com/u/17176223"
        },
        {
          "username": "zqchris",
          "href": "https://github.com/zqchris",
          "avatar": "https://avatars.githubusercontent.com/u/4436110"
        },
        {
          "username": "DavidShenXD",
          "href": "https://github.com/DavidShenXD",
          "avatar": "https://avatars.githubusercontent.com/u/290921921"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 18896,
      "added_stars": 4807,
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
      "forks": 5208,
      "added_stars": 8262,
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
      "added_stars": 530,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1151,
      "added_stars": 1061,
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
      "forks": 290,
      "added_stars": 1526,
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
      "author": "Agent-Field",
      "repo": "CodeAF",
      "avatar": "https://github.com/Agent-Field.png",
      "repo_link": "https://github.com/Agent-Field/CodeAF",
      "desc": "Open-Source Software factory for Open Models",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 76,
      "added_stars": 362,
      "builtBy": [
        {
          "username": "santoshkumarradha",
          "href": "https://github.com/santoshkumarradha",
          "avatar": "https://avatars.githubusercontent.com/u/29346072"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "AbirAbbas",
          "href": "https://github.com/AbirAbbas",
          "avatar": "https://avatars.githubusercontent.com/u/34643372"
        },
        {
          "username": "agentfield-bot",
          "href": "https://github.com/agentfield-bot",
          "avatar": "https://avatars.githubusercontent.com/u/267109073"
        },
        {
          "username": "ZeroPoint95",
          "href": "https://github.com/ZeroPoint95",
          "avatar": "https://avatars.githubusercontent.com/u/329227198"
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
      "forks": 3427,
      "added_stars": 1597,
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
      "author": "argoproj",
      "repo": "argo-cd",
      "avatar": "https://github.com/argoproj.png",
      "repo_link": "https://github.com/argoproj/argo-cd",
      "desc": "Declarative Continuous Deployment for Kubernetes",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8094,
      "added_stars": 261,
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
      "author": "strelov1",
      "repo": "freehire",
      "avatar": "https://github.com/strelov1.png",
      "repo_link": "https://github.com/strelov1/freehire",
      "desc": "freehire — the open-source search engine for job seekers",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 369,
      "added_stars": 2959,
      "builtBy": [
        {
          "username": "strelov1",
          "href": "https://github.com/strelov1",
          "avatar": "https://avatars.githubusercontent.com/u/10761735"
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
      "forks": 515,
      "added_stars": 79,
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
          "username": "roytman",
          "href": "https://github.com/roytman",
          "avatar": "https://avatars.githubusercontent.com/u/1816654"
        },
        {
          "username": "ahg-g",
          "href": "https://github.com/ahg-g",
          "avatar": "https://avatars.githubusercontent.com/u/40361897"
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
      "forks": 150,
      "added_stars": 1694,
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
      "author": "keploy",
      "repo": "keploy",
      "avatar": "https://github.com/keploy.png",
      "repo_link": "https://github.com/keploy/keploy",
      "desc": "Open-source platform for creating safe, isolated production sandboxes for API, integration, and E2E testing.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2447,
      "added_stars": 930,
      "builtBy": [
        {
          "username": "slayerjain",
          "href": "https://github.com/slayerjain",
          "avatar": "https://avatars.githubusercontent.com/u/12831254"
        },
        {
          "username": "gouravkrosx",
          "href": "https://github.com/gouravkrosx",
          "avatar": "https://avatars.githubusercontent.com/u/44055698"
        },
        {
          "username": "shivamsouravjha",
          "href": "https://github.com/shivamsouravjha",
          "avatar": "https://avatars.githubusercontent.com/u/60891544"
        },
        {
          "username": "re-Tick",
          "href": "https://github.com/re-Tick",
          "avatar": "https://avatars.githubusercontent.com/u/60597329"
        },
        {
          "username": "Sarthak160",
          "href": "https://github.com/Sarthak160",
          "avatar": "https://avatars.githubusercontent.com/u/50234097"
        }
      ]
    },
    {
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 549,
      "added_stars": 1293,
      "builtBy": [
        {
          "username": "dgageot",
          "href": "https://github.com/dgageot",
          "avatar": "https://avatars.githubusercontent.com/u/153495"
        },
        {
          "username": "rumpl",
          "href": "https://github.com/rumpl",
          "avatar": "https://avatars.githubusercontent.com/u/99933"
        },
        {
          "username": "aheritier",
          "href": "https://github.com/aheritier",
          "avatar": "https://avatars.githubusercontent.com/u/174600"
        },
        {
          "username": "Sayt-0",
          "href": "https://github.com/Sayt-0",
          "avatar": "https://avatars.githubusercontent.com/u/138035894"
        },
        {
          "username": "krissetto",
          "href": "https://github.com/krissetto",
          "avatar": "https://avatars.githubusercontent.com/u/47751006"
        }
      ]
    },
    {
      "author": "lharries",
      "repo": "whatsapp-mcp",
      "avatar": "https://github.com/lharries.png",
      "repo_link": "https://github.com/lharries/whatsapp-mcp",
      "desc": "WhatsApp MCP server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1479,
      "added_stars": 437,
      "builtBy": [
        {
          "username": "lharries",
          "href": "https://github.com/lharries",
          "avatar": "https://avatars.githubusercontent.com/u/22766134"
        },
        {
          "username": "yaniv-golan",
          "href": "https://github.com/yaniv-golan",
          "avatar": "https://avatars.githubusercontent.com/u/5079117"
        },
        {
          "username": "aastroza",
          "href": "https://github.com/aastroza",
          "avatar": "https://avatars.githubusercontent.com/u/8590877"
        },
        {
          "username": "eltociear",
          "href": "https://github.com/eltociear",
          "avatar": "https://avatars.githubusercontent.com/u/22633385"
        },
        {
          "username": "cs4alhaider",
          "href": "https://github.com/cs4alhaider",
          "avatar": "https://avatars.githubusercontent.com/u/26744246"
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
      "forks": 98,
      "added_stars": 335,
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
      "author": "microsoft",
      "repo": "TypeScript",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/TypeScript",
      "desc": "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 15392,
      "added_stars": 663,
      "builtBy": [
        {
          "username": "ahejlsberg",
          "href": "https://github.com/ahejlsberg",
          "avatar": "https://avatars.githubusercontent.com/u/4226954"
        },
        {
          "username": "sheetalkamat",
          "href": "https://github.com/sheetalkamat",
          "avatar": "https://avatars.githubusercontent.com/u/8052792"
        },
        {
          "username": "DanielRosenwasser",
          "href": "https://github.com/DanielRosenwasser",
          "avatar": "https://avatars.githubusercontent.com/u/972891"
        },
        {
          "username": "sandersn",
          "href": "https://github.com/sandersn",
          "avatar": "https://avatars.githubusercontent.com/u/293473"
        },
        {
          "username": "mhegazy",
          "href": "https://github.com/mhegazy",
          "avatar": "https://avatars.githubusercontent.com/u/8000722"
        }
      ]
    },
    {
      "author": "slavakurilyak",
      "repo": "awesome-ai-agents",
      "avatar": "https://github.com/slavakurilyak.png",
      "repo_link": "https://github.com/slavakurilyak/awesome-ai-agents",
      "desc": "Awesome list of 300+ agentic AI resources",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 750,
      "added_stars": 568,
      "builtBy": [
        {
          "username": "slavakurilyak",
          "href": "https://github.com/slavakurilyak",
          "avatar": "https://avatars.githubusercontent.com/u/6625584"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Nurgo",
          "href": "https://github.com/Nurgo",
          "avatar": "https://avatars.githubusercontent.com/u/11637957"
        },
        {
          "username": "LivXue",
          "href": "https://github.com/LivXue",
          "avatar": "https://avatars.githubusercontent.com/u/48319803"
        },
        {
          "username": "nybarius",
          "href": "https://github.com/nybarius",
          "avatar": "https://avatars.githubusercontent.com/u/76703223"
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
      "forks": 6108,
      "added_stars": 839,
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
      "author": "rclone",
      "repo": "rclone",
      "avatar": "https://github.com/rclone.png",
      "repo_link": "https://github.com/rclone/rclone",
      "desc": "\"rsync for cloud storage\" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5651,
      "added_stars": 811,
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
      "author": "golang",
      "repo": "go",
      "avatar": "https://github.com/golang.png",
      "repo_link": "https://github.com/golang/go",
      "desc": "The Go programming language",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 20986,
      "added_stars": 1920,
      "builtBy": [
        {
          "username": "rsc",
          "href": "https://github.com/rsc",
          "avatar": "https://avatars.githubusercontent.com/u/104030"
        },
        {
          "username": "griesemer",
          "href": "https://github.com/griesemer",
          "avatar": "https://avatars.githubusercontent.com/u/8528975"
        },
        {
          "username": "robpike",
          "href": "https://github.com/robpike",
          "avatar": "https://avatars.githubusercontent.com/u/4324516"
        },
        {
          "username": "ianlancetaylor",
          "href": "https://github.com/ianlancetaylor",
          "avatar": "https://avatars.githubusercontent.com/u/3194333"
        },
        {
          "username": "bradfitz",
          "href": "https://github.com/bradfitz",
          "avatar": "https://avatars.githubusercontent.com/u/2621"
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
      "forks": 2334,
      "added_stars": 1075,
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
      "forks": 11207,
      "added_stars": 48420,
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3832,
      "added_stars": 8764,
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
      "author": "earthtojake",
      "repo": "text-to-cad",
      "avatar": "https://github.com/earthtojake.png",
      "repo_link": "https://github.com/earthtojake/text-to-cad",
      "desc": "Design physical products with AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2415,
      "added_stars": 8831,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4797,
      "added_stars": 8948,
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6758,
      "added_stars": 14543,
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
      "forks": 3476,
      "added_stars": 8413,
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
      "forks": 10172,
      "added_stars": 13820,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3384,
      "added_stars": 4823,
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
          "username": "LIghtJUNction",
          "href": "https://github.com/LIghtJUNction",
          "avatar": "https://avatars.githubusercontent.com/u/106986785"
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
      "forks": 5245,
      "added_stars": 6956,
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
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9728,
      "added_stars": 18799,
      "builtBy": [
        {
          "username": "Panniantong",
          "href": "https://github.com/Panniantong",
          "avatar": "https://avatars.githubusercontent.com/u/73925474"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "LohseZSai",
          "href": "https://github.com/LohseZSai",
          "avatar": "https://avatars.githubusercontent.com/u/116092574"
        },
        {
          "username": "nyxst4ck",
          "href": "https://github.com/nyxst4ck",
          "avatar": "https://avatars.githubusercontent.com/u/289980115"
        },
        {
          "username": "ricardolaurito",
          "href": "https://github.com/ricardolaurito",
          "avatar": "https://avatars.githubusercontent.com/u/75488296"
        }
      ]
    },
    {
      "author": "wshobson",
      "repo": "agents",
      "avatar": "https://github.com/wshobson.png",
      "repo_link": "https://github.com/wshobson/agents",
      "desc": "Multi-harness agentic plugin marketplace for Claude Code, Codex, Cursor, OpenCode, GitHub Copilot, Google Antigravity, and Pi",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4460,
      "added_stars": 2124,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2109,
      "added_stars": 5083,
      "builtBy": [
        {
          "username": "rng1995",
          "href": "https://github.com/rng1995",
          "avatar": "https://avatars.githubusercontent.com/u/32655573"
        },
        {
          "username": "yashrajp22",
          "href": "https://github.com/yashrajp22",
          "avatar": "https://avatars.githubusercontent.com/u/282666402"
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
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use Claude Code, Codex, Antigravity, VSCode, Pi, and OpenCode (and 6 other harnesses) for free (1.3B+ free tokens) from your terminal, app, IDE, or phone, and now from the browser with native browser sessions (multi-harness + multi-model) like OpenClaw (voice supported + ToS friendly)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10344,
      "added_stars": 10358,
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
      "author": "beenuar",
      "repo": "AiSOC",
      "avatar": "https://github.com/beenuar.png",
      "repo_link": "https://github.com/beenuar/AiSOC",
      "desc": "Open-source AI Security Operations Center: alert fusion, LLM-agent triage, MITRE ATT&CK investigation, and a replayable decision ledger for every agent step. Self-hostable, runs with no API keys, MIT licensed. Ships an MCP server for Claude, Cursor and Continue.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 750,
      "added_stars": 5172,
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
      "forks": 5704,
      "added_stars": 4958,
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
      "author": "ahujasid",
      "repo": "mcp-for-blender",
      "avatar": "https://github.com/ahujasid.png",
      "repo_link": "https://github.com/ahujasid/mcp-for-blender",
      "desc": "Community plugin to control Blender 3D with any LLM of your choice. Not affiliated with the official Blender Foundation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3023,
      "added_stars": 3440,
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
      "author": "Kruk2",
      "repo": "jasna",
      "avatar": "https://github.com/Kruk2.png",
      "repo_link": "https://github.com/Kruk2/jasna",
      "desc": "Video restoration tool",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 371,
      "added_stars": 2597,
      "builtBy": [
        {
          "username": "Kruk2",
          "href": "https://github.com/Kruk2",
          "avatar": "https://avatars.githubusercontent.com/u/59397941"
        },
        {
          "username": "suphamster",
          "href": "https://github.com/suphamster",
          "avatar": "https://avatars.githubusercontent.com/u/17669188"
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
          "username": "helkaluin",
          "href": "https://github.com/helkaluin",
          "avatar": "https://avatars.githubusercontent.com/u/6428432"
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
      "upvotes": "4",
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
    },
    {
      "title": "Mutative v2  - better immutability and faster immutable updates",
      "url": "https://github.com/unadlib/mutative",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-12T17:43:56.000Z"
    },
    {
      "title": "theAuth: open-source TypeScript auth for AI agents, with an MCP OAuth 2.1 server",
      "url": "https://github.com/glincker/theauth",
      "upvotes": "1",
      "comments": "2",
      "created": "2026-10-10T18:34:37.000Z"
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
      "title": "Let's see where you code!",
      "description": "I’ve been writing a lot about AWS lately, so let’s take a breather. This is my little corner of the...",
      "url": "https://dev.to/maame-codes/lets-see-where-you-code-147",
      "tags": "watercooler, discuss",
      "reactions": 68,
      "comments": 24,
      "reading_time": 2,
      "author": "maame-codes"
    },
    {
      "title": "Gemma 4 E2B in JAX on One TPU v5e: bf16 or 4-Bit, Python or Rust, and How It Stands Against vLLM",
      "description": "Gemma 4 E2B served three ways on one Cloud TPU v5e chip: a pure-JAX engine in Python, the same graph written in Rust and compiled by the libtpu that JAX loads, and vLLM, all timed by one client. bf16 beats 4-bit in the JAX engine, the Rust engine matches the JAX engine's tokens, and over HTTP it decodes at vLLM's rate with the fastest first token.",
      "url": "https://dev.to/gde/gemma-4-e2b-in-jax-on-one-tpu-v5e-bf16-or-4-bit-python-or-rust-and-how-it-stands-against-vllm-j72",
      "tags": "jax, tpu, gemma, rust",
      "reactions": 7,
      "comments": 0,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "Securing an Angular Firebase AI App with Email/Password Authentication (Part 3: Lightweight Home Screen, Lazy CDK Dialog, and Header Navigation)",
      "description": "We now have AuthService for authentication and SignInModalComponent for users to enter their email...",
      "url": "https://dev.to/gde/securing-an-angular-firebase-ai-app-with-emailpassword-authentication-part-3-lightweight-home-17dg",
      "tags": "angular, firebase, webdev",
      "reactions": 6,
      "comments": 0,
      "reading_time": 6,
      "author": "railsstudent"
    },
    {
      "title": "That's a Wrap on Hacktoberfest 2026! 🎃👻",
      "description": "Hacktoberfest 2026 wrapped up on October 31st! Thank you to everyone who built, hosted, mentored,...",
      "url": "https://dev.to/devteam/thats-a-wrap-on-hacktoberfest-2026-148k",
      "tags": "hacktoberfest, hf26challenge, opensource, ai",
      "reactions": 59,
      "comments": 13,
      "reading_time": 2,
      "author": "noahbrinker"
    },
    {
      "title": "Leveling the Playing Field: Building a 100% Offline Kubernetes Docs RAG Exam Assistant with Web AI, Gemma 4, and WebGPU",
      "description": "How to enable fair, zero-cost, air-gapped AI assistance in technical classrooms and...",
      "url": "https://dev.to/gde/leveling-the-playing-field-building-a-100-offline-kubernetes-docs-rag-exam-assistant-with-web-ai-53bi",
      "tags": "webai, gemma, rag, webgpu",
      "reactions": 8,
      "comments": 0,
      "reading_time": 10,
      "author": "cyrus_wong_144118d1feed8c"
    },
    {
      "title": "Join the Presage SmartSpectra SDK Challenge: $3,000 in Prizes Across 10 Winners!",
      "description": "We're excited to announce our newest challenge with Presage!  The Presage SmartSpectra SDK Challenge...",
      "url": "https://dev.to/devteam/join-the-presage-smartspectra-sdk-challenge-3000-in-prizes-across-10-winners-1370",
      "tags": "devchallenge, presagechallenge, presage, ai",
      "reactions": 50,
      "comments": 8,
      "reading_time": 6,
      "author": "heyitsjem"
    },
    {
      "title": "The A2A CLI and Rust: The Same Code, Three Ways to Serve It",
      "description": "A tour of the A2A CLI against Rust agents on A2A v1.0: the official Rust SDK, a plain stdin/stdout program wrapped by a2a server --exec, and an ADK coordinator on Gemini, each timed from the CLI and from a Rust client.",
      "url": "https://dev.to/gde/the-a2a-cli-and-rust-the-same-code-three-ways-to-serve-it-4el0",
      "tags": "rust, a2a, ai, agents",
      "reactions": 12,
      "comments": 3,
      "reading_time": 15,
      "author": "xbill"
    },
    {
      "title": "Welcome Thread - v400",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v400-2e8m",
      "tags": "welcome",
      "reactions": 20,
      "comments": 68,
      "reading_time": 1,
      "author": "sloan"
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
      "title": "Prompt Pad: What Is Open Source?",
      "description": "Chances are you're already using open-source software without realizing it.  In this episode of...",
      "url": "https://blog.mlh.com/prompt-pad-what-is-open-source-23k6",
      "tags": "opensource, beginners, ai, codenewbie",
      "reactions": 17,
      "comments": 1,
      "reading_time": 1,
      "author": "mlhacks"
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
      "title": "A history of backdoors (2015)",
      "url": "https://blog.cryptographyengineering.com/2015/07/20/a-history-of-backdoors/",
      "score": 4,
      "comments": 0,
      "tags": [
        "cryptography",
        "historical"
      ],
      "id": "x1wkwe"
    },
    {
      "title": "Declarative Dragging",
      "url": "https://declarative-dragging.github.io/",
      "score": 20,
      "comments": 2,
      "tags": [
        "design",
        "graphics",
        "plt"
      ],
      "id": "jplxxr"
    },
    {
      "title": "Residential Proxies Detected on White House Network",
      "url": "https://layer3intel.com/blog/residential-proxies-white-house-network",
      "score": 4,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "253two"
    },
    {
      "title": "Ruffle: Stable Releases, API, Text... and Everything Else",
      "url": "https://ruffle.rs/blog/2026/11/04/stable-releases-and-everything-else",
      "score": 3,
      "comments": 0,
      "tags": [
        "games",
        "retrocomputing",
        "rust"
      ],
      "id": "zqiizd"
    },
    {
      "title": "Burnt TOAST",
      "url": "https://www.pgedge.com/blog/burnt-toast",
      "score": 13,
      "comments": 2,
      "tags": [
        "databases"
      ],
      "id": "dmpdid"
    },
    {
      "title": "A new Go API for JSON",
      "url": "https://go.dev/blog/jsonv2",
      "score": 21,
      "comments": 4,
      "tags": [
        "go"
      ],
      "id": "gfm0xn"
    },
    {
      "title": "Python on my wrist",
      "url": "https://tildeweb.nl/~michiel/python-on-my-wrist.html",
      "score": 9,
      "comments": 0,
      "tags": [
        "hardware",
        "python"
      ],
      "id": "0vis9y"
    },
    {
      "title": "A developer opened Postman. Then two AI coding agents changed without their permission",
      "url": "https://thenewstack.io/postman-plugin-coding-agents/",
      "score": -3,
      "comments": 0,
      "tags": [
        "ai",
        "security"
      ],
      "id": "avhhpi"
    },
    {
      "title": "Single Point of Failure: The (Fictional) Day Google Forgot To Check Passwords (2014)",
      "url": "https://youtube.com/watch?v=y4GB_NDU43Q",
      "score": 1,
      "comments": 1,
      "tags": [
        "security",
        "video"
      ],
      "id": "zf1ts0"
    },
    {
      "title": "Gleam Programming Language Update October 2026",
      "url": "https://www.youtube.com/watch?v=Jm2HZhwreNs",
      "score": 16,
      "comments": 0,
      "tags": [
        "gleam",
        "video"
      ],
      "id": "afjqpg"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "Rasbora",
      "descendants": 274,
      "id": 50371246,
      "kids": [
        50372737,
        50371633,
        50371970,
        50371363,
        50375435,
        50372168,
        50372334,
        50373519,
        50371905,
        50374887,
        50375058,
        50371566,
        50373633,
        50371805,
        50372997,
        50374452,
        50374682,
        50374599,
        50372321,
        50375532,
        50375117,
        50374583,
        50372287,
        50373590,
        50371902,
        50374914,
        50374770,
        50373927,
        50371979,
        50372636,
        50371930,
        50371563,
        50371928,
        50375449,
        50371525,
        50373276,
        50371671,
        50372099,
        50375693,
        50374672,
        50371558,
        50372782,
        50371608,
        50371779,
        50372637,
        50371620,
        50371504,
        50371609
      ],
      "score": 887,
      "time": 1793825118,
      "title": "Residential proxies detected on White House network",
      "type": "story",
      "url": "https://layer3intel.com/blog/residential-proxies-white-house-network"
    },
    {
      "by": "MarkBlah",
      "descendants": 3,
      "id": 50375354,
      "kids": [
        50375689,
        50375355
      ],
      "score": 31,
      "time": 1793854450,
      "title": "Lemmings CSS Animation",
      "type": "story",
      "url": "https://markblah.github.io/lemmings/"
    },
    {
      "by": "davidbarker",
      "descendants": 143,
      "id": 50372945,
      "kids": [
        50373441,
        50373586,
        50373156,
        50374877,
        50375829,
        50375716,
        50373197,
        50373444,
        50373574,
        50375335,
        50373694,
        50374408,
        50373686,
        50373420,
        50373148,
        50373524,
        50374293,
        50373769,
        50374981,
        50373393,
        50374916,
        50374009,
        50375149,
        50375623,
        50373435,
        50373353,
        50373823,
        50374179,
        50374978,
        50373515,
        50373303,
        50373267,
        50373890,
        50373538,
        50373723,
        50373846,
        50375045,
        50373511,
        50373871,
        50373901
      ],
      "score": 219,
      "time": 1793835344,
      "title": "Images 2.6",
      "type": "story",
      "url": "https://openai.com/index/introducing-images-2-6/"
    },
    {
      "by": "dangelosaurus",
      "descendants": 147,
      "id": 50372929,
      "kids": [
        50373228,
        50372963,
        50375643,
        50375729,
        50373309,
        50374137,
        50373126,
        50373161,
        50374034,
        50373813,
        50374895,
        50374059,
        50374358,
        50373325,
        50374472,
        50375368,
        50373315
      ],
      "score": 259,
      "time": 1793835194,
      "title": "A thousand fewer paths to root",
      "type": "story",
      "url": "https://openai.com/index/a-thousand-fewer-paths-to-root/"
    },
    {
      "by": "gmays",
      "descendants": 117,
      "id": 50373308,
      "kids": [
        50374535,
        50373904,
        50374509,
        50373869,
        50375390,
        50374005,
        50373773,
        50375759,
        50375679,
        50373696,
        50374977,
        50373888,
        50373992,
        50373752,
        50374811,
        50373853,
        50374050,
        50374792,
        50374138,
        50373789,
        50374466
      ],
      "score": 185,
      "time": 1793837898,
      "title": "Starfall – Affordable, routine access to microgravity",
      "type": "story",
      "url": "https://www.spacex.com/starfall"
    },
    {
      "by": "Philpax",
      "descendants": 98,
      "id": 50369925,
      "kids": [
        50370633,
        50371154,
        50370515,
        50370626,
        50375488,
        50371576,
        50372040,
        50374812,
        50371715,
        50370555,
        50374755,
        50375311,
        50371667,
        50374098,
        50371935,
        50374942,
        50370534,
        50371398,
        50372916,
        50371976,
        50374656,
        50370644,
        50371021,
        50373323,
        50370521,
        50373312,
        50373178,
        50371956,
        50372739,
        50374712,
        50371119,
        50370898
      ],
      "score": 271,
      "time": 1793818409,
      "title": "Ripple-65B Preview: U.S. Open-Weight SOTA on Agentic Coding",
      "type": "story",
      "url": "https://www.ricursive.com/ripple"
    },
    {
      "by": "abrarthought",
      "descendants": 132,
      "id": 50366999,
      "kids": [
        50367828,
        50368507,
        50369602,
        50369634,
        50369223,
        50369609,
        50374476,
        50369531,
        50369622,
        50369640,
        50373358,
        50370024,
        50368549
      ],
      "score": 461,
      "time": 1793806230,
      "title": "Kimi K3.1 Pro model weights are out",
      "type": "story",
      "url": "https://huggingface.co/moonshotai/Kimi-K3.1-Pro"
    },
    {
      "by": "gmays",
      "descendants": 1,
      "id": 50375653,
      "kids": [
        50375838
      ],
      "score": 5,
      "time": 1793857634,
      "title": "Altera Announces Agilex 2X, a Complete FPGA and SoC Portfolio",
      "type": "story",
      "url": "https://www.altera.com/newsroom/agilex-2x"
    },
    {
      "by": "speckx",
      "descendants": 118,
      "id": 50370610,
      "kids": [
        50372236,
        50371679,
        50370896,
        50372974,
        50372534,
        50370849,
        50371105,
        50372214,
        50370873,
        50375184,
        50372779,
        50375012,
        50370906,
        50373345,
        50371996,
        50371042,
        50371369,
        50370917,
        50374851,
        50372392,
        50372216,
        50372365,
        50372114,
        50374101,
        50373455,
        50373373,
        50370928,
        50372772,
        50374470
      ],
      "score": 220,
      "time": 1793821823,
      "title": "Insects don't swarm at LED lights",
      "type": "story",
      "url": "https://www.birdsoutsidemywindow.org/2026/11/03/insects-dont-swarm-at-led-lights/"
    },
    {
      "by": "mooreds",
      "descendants": 7,
      "id": 50341576,
      "kids": [
        50375485,
        50375633,
        50375828,
        50375531,
        50375389,
        50375212
      ],
      "score": 35,
      "time": 1793645154,
      "title": "Spreading Liquid with Three.js",
      "type": "story",
      "url": "https://mofu-dev.com/en/blog/fluid-foundation/"
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
      "title": "Teardown: how Rocket.new reached 400k users in 15 weeks - and where it leaks",
      "description": "This is a competitive teardown built from public sources, written for founders and PMs evaluating AI...",
      "url": "https://dev.to/teardownlab/teardown-how-rocketnew-reached-400k-users-in-15-weeks-and-where-it-leaks-4hb0",
      "tags": "ai, webdev, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "teardownlab"
    },
    {
      "title": "Read the take-home test before you run it",
      "description": "On November 3, Binance published its first incident report on the October 29 breach, in which more...",
      "url": "https://dev.to/nefiswap/read-the-take-home-test-before-you-run-it-44po",
      "tags": "security, javascript, node, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "nefiswap"
    },
    {
      "title": "Six agent job boards published their own numbers. I read all of them this morning.",
      "description": "Everyone building an agent gets told the same thing: put it on an agent job board and let it earn. I...",
      "url": "https://dev.to/felixfox/six-agent-job-boards-published-their-own-numbers-i-read-all-of-them-this-morning-57dc",
      "tags": "ai, api, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "felixfox"
    },
    {
      "title": "UK warehouse pay: 4 in 10 job ads offer within 50p of the minimum wage",
      "description": "On 4 November 2026, 35 of 86 live UK warehouse and forklift job ads on teppek started within 50p of...",
      "url": "https://dev.to/yukselpamuk/uk-warehouse-pay-4-in-10-job-ads-offer-within-50p-of-the-minimum-wage-5dgn",
      "tags": "career, ai, datascience, mcp",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "yukselpamuk"
    },
    {
      "title": "What I Learned in My First Year After Joining a Company",
      "description": "I joined the company in 2022. I mainly focus on developing and improving internal systems and MSP...",
      "url": "https://dev.to/beymax/what-i-learned-in-my-first-year-after-joining-a-company-1amf",
      "tags": "beginners, career, learning, python",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "beymax"
    },
    {
      "title": "I'm not a developer, and my team stopped using the AI we gave them. What am I missing?",
      "description": "Quick disclosure first: I'm Seohyun, an AI persona run by a company called Knowverse (so, not a...",
      "url": "https://dev.to/seohyun0903/im-not-a-developer-and-my-team-stopped-using-the-ai-we-gave-them-what-am-i-missing-3npf",
      "tags": "ai, productivity, career, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "seohyun0903"
    },
    {
      "title": "The fake coding test behind the $6.3B Binance hack, and what developers should take from it",
      "description": "On October 29, 2026, about $6.3 billion left Binance's hot wallets on ten blockchains, most of it in...",
      "url": "https://dev.to/omegaelite_483a61ee65bb3a/the-fake-coding-test-behind-the-63b-binance-hack-and-what-developers-should-take-from-it-5d5p",
      "tags": "security, blockchain, macos, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "omegaelite_483a61ee65bb3a"
    },
    {
      "title": "The Open Source PR I Closed on Purpose (and Why It Was Still Worth It)",
      "description": "So far in this series I wrote about PRs that got merged. This post is about one that did not, and why...",
      "url": "https://dev.to/vinu2730/the-open-source-pr-i-closed-on-purpose-and-why-it-was-still-worth-it-27fe",
      "tags": "opensource, java, career, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "vinu2730"
    },
    {
      "title": "Learning in public vs learning in private: the trade-offs",
      "description": "I'm trying a bit of both, and neither is free.  \"Learn in public\" has become a slogan. Like most...",
      "url": "https://dev.to/suraj_nandan/learning-in-public-vs-learning-in-private-the-trade-offs-2bd0",
      "tags": "learning, career, discuss, writing",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "suraj_nandan"
    },
    {
      "title": "Which kinds of jobs grew and shrank on a Polish job board in October 2026",
      "description": "Last week I looked at the weekly rhythm of job ads on Praca pl, one of Poland's national job boards....",
      "url": "https://dev.to/listingworks/which-kinds-of-jobs-grew-and-shrank-on-a-polish-job-board-in-october-2026-3l0p",
      "tags": "datascience, opendata, poland, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "listingworks"
    }
  ]
}
```

