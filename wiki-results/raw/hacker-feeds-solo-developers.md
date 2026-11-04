# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-04 06:26:00 UTC

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
      "forks": 9757,
      "added_stars": 7995,
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
      "forks": 9286,
      "added_stars": 12542,
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
      "forks": 449,
      "added_stars": 3898,
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
      "forks": 1578,
      "added_stars": 2485,
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
      "forks": 1239,
      "added_stars": 2671,
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
      "author": "vercel-labs",
      "repo": "skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/skills",
      "desc": "The open agent skills tool - npx skills",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3290,
      "added_stars": 1136,
      "builtBy": [
        {
          "username": "quuu",
          "href": "https://github.com/quuu",
          "avatar": "https://avatars.githubusercontent.com/u/32676955"
        },
        {
          "username": "huozhi",
          "href": "https://github.com/huozhi",
          "avatar": "https://avatars.githubusercontent.com/u/4800338"
        },
        {
          "username": "antfubot",
          "href": "https://github.com/antfubot",
          "avatar": "https://avatars.githubusercontent.com/u/291667613"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7224,
      "added_stars": 4546,
      "builtBy": [
        {
          "username": "miguel-heygen",
          "href": "https://github.com/miguel-heygen",
          "avatar": "https://avatars.githubusercontent.com/u/229591595"
        },
        {
          "username": "vanceingalls",
          "href": "https://github.com/vanceingalls",
          "avatar": "https://avatars.githubusercontent.com/u/337856"
        },
        {
          "username": "jrusso1020",
          "href": "https://github.com/jrusso1020",
          "avatar": "https://avatars.githubusercontent.com/u/7664106"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ukimsanov",
          "href": "https://github.com/ukimsanov",
          "avatar": "https://avatars.githubusercontent.com/u/165517112"
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
      "forks": 1622,
      "added_stars": 5990,
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
      "forks": 2956,
      "added_stars": 6595,
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
      "forks": 542,
      "added_stars": 2898,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6449,
      "added_stars": 4414,
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
      "author": "makecindy",
      "repo": "cindy",
      "avatar": "https://github.com/makecindy.png",
      "repo_link": "https://github.com/makecindy/cindy",
      "desc": "Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1118,
      "added_stars": 1747,
      "builtBy": [
        {
          "username": "dashhuang",
          "href": "https://github.com/dashhuang",
          "avatar": "https://avatars.githubusercontent.com/u/125997726"
        },
        {
          "username": "zqchris",
          "href": "https://github.com/zqchris",
          "avatar": "https://avatars.githubusercontent.com/u/4436110"
        },
        {
          "username": "MagicLizi",
          "href": "https://github.com/MagicLizi",
          "avatar": "https://avatars.githubusercontent.com/u/17176223"
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
      "forks": 5952,
      "added_stars": 1419,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5806,
      "added_stars": 2250,
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
      "author": "lfnovo",
      "repo": "open-notebook",
      "avatar": "https://github.com/lfnovo.png",
      "repo_link": "https://github.com/lfnovo/open-notebook",
      "desc": "An Open Source implementation of Notebook LM with more flexibility and features",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4772,
      "added_stars": 906,
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
      "author": "spotify",
      "repo": "portal-ai-plugins",
      "avatar": "https://github.com/spotify.png",
      "repo_link": "https://github.com/spotify/portal-ai-plugins",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 240,
      "added_stars": 518,
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
      "author": "Crosstalk-Solutions",
      "repo": "project-nomad",
      "avatar": "https://github.com/Crosstalk-Solutions.png",
      "repo_link": "https://github.com/Crosstalk-Solutions/project-nomad",
      "desc": "Project NOMAD is an offline-first knowledge and education server. Wikipedia, thousands of books, courses, maps, and optional local AI, all running on hardware you own with no internet required.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4304,
      "added_stars": 1051,
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
      "forks": 18874,
      "added_stars": 4771,
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
      "forks": 5184,
      "added_stars": 8181,
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
      "author": "Agent-Field",
      "repo": "CodeAF",
      "avatar": "https://github.com/Agent-Field.png",
      "repo_link": "https://github.com/Agent-Field/CodeAF",
      "desc": "Open-Source Software factory for Open Models",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 73,
      "added_stars": 361,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1134,
      "added_stars": 997,
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
      "author": "docker",
      "repo": "compose",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/compose",
      "desc": "Define and run multi-container applications with Docker",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5901,
      "added_stars": 510,
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
      "author": "caddyserver",
      "repo": "caddy",
      "avatar": "https://github.com/caddyserver.png",
      "repo_link": "https://github.com/caddyserver/caddy",
      "desc": "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5230,
      "added_stars": 2635,
      "builtBy": [
        {
          "username": "mholt",
          "href": "https://github.com/mholt",
          "avatar": "https://avatars.githubusercontent.com/u/1128849"
        },
        {
          "username": "francislavoie",
          "href": "https://github.com/francislavoie",
          "avatar": "https://avatars.githubusercontent.com/u/2111701"
        },
        {
          "username": "mohammed90",
          "href": "https://github.com/mohammed90",
          "avatar": "https://avatars.githubusercontent.com/u/2636183"
        },
        {
          "username": "WeidiDeng",
          "href": "https://github.com/WeidiDeng",
          "avatar": "https://avatars.githubusercontent.com/u/28780594"
        },
        {
          "username": "dunglas",
          "href": "https://github.com/dunglas",
          "avatar": "https://avatars.githubusercontent.com/u/57224"
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
      "added_stars": 2937,
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
      "author": "Asymptote-Labs",
      "repo": "agent-beacon",
      "avatar": "https://github.com/Asymptote-Labs.png",
      "repo_link": "https://github.com/Asymptote-Labs/agent-beacon",
      "desc": "The cross-harness, self-improving memory layer for AI agents. Join our community: https://discord.com/invite/zdNChS2fBu",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 288,
      "added_stars": 1495,
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
      "author": "llm-d",
      "repo": "llm-d-router",
      "avatar": "https://github.com/llm-d.png",
      "repo_link": "https://github.com/llm-d/llm-d-router",
      "desc": "llm-d Router: The intelligent entry point for inference requests",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 507,
      "added_stars": 75,
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
      "added_stars": 1711,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 549,
      "added_stars": 1292,
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
      "author": "golang",
      "repo": "go",
      "avatar": "https://github.com/golang.png",
      "repo_link": "https://github.com/golang/go",
      "desc": "The Go programming language",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 21020,
      "added_stars": 1969,
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
      "author": "lharries",
      "repo": "whatsapp-mcp",
      "avatar": "https://github.com/lharries.png",
      "repo_link": "https://github.com/lharries/whatsapp-mcp",
      "desc": "WhatsApp MCP server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1476,
      "added_stars": 436,
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
      "author": "kubernetes",
      "repo": "kubernetes",
      "avatar": "https://github.com/kubernetes.png",
      "repo_link": "https://github.com/kubernetes/kubernetes",
      "desc": "Production-Grade Container Scheduling and Management",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 45748,
      "added_stars": 1856,
      "builtBy": [
        {
          "username": "k8s-ci-robot",
          "href": "https://github.com/k8s-ci-robot",
          "avatar": "https://avatars.githubusercontent.com/u/20407524"
        },
        {
          "username": "liggitt",
          "href": "https://github.com/liggitt",
          "avatar": "https://avatars.githubusercontent.com/u/980082"
        },
        {
          "username": "thockin",
          "href": "https://github.com/thockin",
          "avatar": "https://avatars.githubusercontent.com/u/5595220"
        },
        {
          "username": "wojtek-t",
          "href": "https://github.com/wojtek-t",
          "avatar": "https://avatars.githubusercontent.com/u/10743879"
        },
        {
          "username": "brendandburns",
          "href": "https://github.com/brendandburns",
          "avatar": "https://avatars.githubusercontent.com/u/5751682"
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
      "forks": 15409,
      "added_stars": 662,
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
      "author": "keploy",
      "repo": "keploy",
      "avatar": "https://github.com/keploy.png",
      "repo_link": "https://github.com/keploy/keploy",
      "desc": "Open-source platform for creating safe, isolated production sandboxes for API, integration, and E2E testing.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2448,
      "added_stars": 849,
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
      "author": "slavakurilyak",
      "repo": "awesome-ai-agents",
      "avatar": "https://github.com/slavakurilyak.png",
      "repo_link": "https://github.com/slavakurilyak/awesome-ai-agents",
      "desc": "Awesome list of 300+ agentic AI resources",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 745,
      "added_stars": 587,
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
      "author": "rasonyang",
      "repo": "ai-native-callcenter",
      "avatar": "https://github.com/rasonyang.png",
      "repo_link": "https://github.com/rasonyang/ai-native-callcenter",
      "desc": "Self-hosted API-first AI call center: AI talks, code controls the call. AI agents answer every call; humans take over without dropping it. Runs on FreeSWITCH with your SIP trunk and realtime model (OpenAI, Grok, Qwen, Doubao, or any compatible gateway).",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 98,
      "added_stars": 332,
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
          "username": "aicc2025",
          "href": "https://github.com/aicc2025",
          "avatar": "https://avatars.githubusercontent.com/u/234931872"
        },
        {
          "username": "duongynhi000005-oss",
          "href": "https://github.com/duongynhi000005-oss",
          "avatar": "https://avatars.githubusercontent.com/u/287305518"
        },
        {
          "username": "javayou13131",
          "href": "https://github.com/javayou13131",
          "avatar": "https://avatars.githubusercontent.com/u/16834699"
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
      "forks": 6102,
      "added_stars": 836,
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
      "author": "Gaurav-Gosain",
      "repo": "tuios",
      "avatar": "https://github.com/Gaurav-Gosain.png",
      "repo_link": "https://github.com/Gaurav-Gosain/tuios",
      "desc": "A terminal window manager that knows what your agents are doing. Tiling panes, workspaces, sessions that survive restarts, and one Inbox for every coding agent. Official only at tuios.dev and this repo. tuios has no X/Twitter account.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 302,
      "added_stars": 1756,
      "builtBy": [
        {
          "username": "Gaurav-Gosain",
          "href": "https://github.com/Gaurav-Gosain",
          "avatar": "https://avatars.githubusercontent.com/u/55647468"
        },
        {
          "username": "abhijit-s",
          "href": "https://github.com/abhijit-s",
          "avatar": "https://avatars.githubusercontent.com/u/20989130"
        },
        {
          "username": "Gsirawan",
          "href": "https://github.com/Gsirawan",
          "avatar": "https://avatars.githubusercontent.com/u/7770085"
        },
        {
          "username": "davidreuss",
          "href": "https://github.com/davidreuss",
          "avatar": "https://avatars.githubusercontent.com/u/6885"
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
      "forks": 5646,
      "added_stars": 802,
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
      "forks": 11109,
      "added_stars": 48168,
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
      "forks": 3831,
      "added_stars": 8685,
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
      "forks": 2402,
      "added_stars": 8708,
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
      "forks": 4790,
      "added_stars": 8845,
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
      "author": "AgriciDaniel",
      "repo": "claude-seo",
      "avatar": "https://github.com/AgriciDaniel.png",
      "repo_link": "https://github.com/AgriciDaniel/claude-seo",
      "desc": "Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3437,
      "added_stars": 8108,
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
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9684,
      "added_stars": 19446,
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6708,
      "added_stars": 14236,
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
      "author": "calesthio",
      "repo": "OpenMontage",
      "avatar": "https://github.com/calesthio.png",
      "repo_link": "https://github.com/calesthio/OpenMontage",
      "desc": "World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10086,
      "added_stars": 13622,
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
      "forks": 3368,
      "added_stars": 4731,
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
      "forks": 5237,
      "added_stars": 6960,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2088,
      "added_stars": 5054,
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
      "author": "wshobson",
      "repo": "agents",
      "avatar": "https://github.com/wshobson.png",
      "repo_link": "https://github.com/wshobson/agents",
      "desc": "Multi-harness agentic plugin marketplace for Claude Code, Codex, Cursor, OpenCode, GitHub Copilot, Google Antigravity, and Pi",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4457,
      "added_stars": 2094,
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
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use Claude Code, Codex, Antigravity, VSCode, Pi, and OpenCode (and 6 other harnesses) for free (1.3B+ free tokens) from your terminal, app, IDE, or phone, and now from the browser with native browser sessions (multi-harness + multi-model) like OpenClaw (voice supported + ToS friendly)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10317,
      "added_stars": 10288,
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
      "author": "luongnv89",
      "repo": "claude-howto",
      "avatar": "https://github.com/luongnv89.png",
      "repo_link": "https://github.com/luongnv89/claude-howto",
      "desc": "A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5701,
      "added_stars": 4938,
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
      "author": "beenuar",
      "repo": "AiSOC",
      "avatar": "https://github.com/beenuar.png",
      "repo_link": "https://github.com/beenuar/AiSOC",
      "desc": "Open-source AI Security Operations Center: alert fusion, LLM-agent triage, MITRE ATT&CK investigation, and a replayable decision ledger for every agent step. Self-hostable, runs with no API keys, MIT licensed. Ships an MCP server for Claude, Cursor and Continue.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 724,
      "added_stars": 4934,
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
      "reactions": 54,
      "comments": 10,
      "reading_time": 2,
      "author": "maame-codes"
    },
    {
      "title": "Gemma 4 in Rust on TorchTPU: A Native TPU Rig With PyO3 and MCP",
      "description": "Gemma 4 E2B with the model in Rust, served from a TPU v5e-1 VM through PyO3 and a C++ shim over ATen, with no tch and no pinned PyTorch, an OpenAI endpoint, an MCP server and a local chat UI.",
      "url": "https://dev.to/gde/gemma-4-in-rust-on-torchtpu-a-native-tpu-rig-with-pyo3-and-mcp-47j1",
      "tags": "rust, pytorch, tpu, mcp",
      "reactions": 13,
      "comments": 1,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Prompt Pad: Lock Your AI's Output Schema in Google AI Studio",
      "description": "If you've ever tried to parse an LLM response in code, you know the pain: the format changes slightly...",
      "url": "https://blog.mlh.com/prompt-pad-lock-your-ais-output-schema-in-google-ai-studio-53io",
      "tags": "ai, gemini, promptengineering, tutorial",
      "reactions": 11,
      "comments": 1,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "Prompt Pad: Frame Your Persona for Better AI Answers",
      "description": "Want better answers from AI? Start by telling it who to be.  In this episode of Prompt Pad,...",
      "url": "https://blog.mlh.com/prompt-pad-frame-your-persona-for-better-ai-answers-eg3",
      "tags": "ai, promptengineering, llm, beginners",
      "reactions": 18,
      "comments": 0,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-cio",
      "tags": "top7, discuss",
      "reactions": 18,
      "comments": 11,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Gemma 4 in Rust on TorchTPU: Hands On With Colab",
      "description": "A Rust crate reads the checkpoint, runs all 35 layers of Gemma 4 E2B and drives the decode loop on one TPU v5e chip in Colab, with every operation a TorchTPU kernel and the same tokens as compiled Python.",
      "url": "https://dev.to/gde/gemma-4-in-rust-on-torchtpu-hands-on-with-colab-44hi",
      "tags": "rust, pytorch, tpu, gemma",
      "reactions": 8,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "[Agent Platform in Action (7)] When ADK Go Graph Workflow Meets Google Research Harness (Part 1): Two-Layer Recursive Agent Fram",
      "description": "Foreword: After the AI Agent Goes Online, What is the Next Bottleneck?   Welcome back to...",
      "url": "https://dev.to/gde/agent-platform-in-action-7-when-adk-go-graph-workflow-meets-google-research-harness-part-1-28c1",
      "tags": "agents, ai, architecture, go",
      "reactions": 7,
      "comments": 0,
      "reading_time": 12,
      "author": "evanlin"
    },
    {
      "title": "Profile Sprawl: Solving a Problem You Didn't Know You Had",
      "description": "Every public profile you own says something slightly different about you. A step by step guide to treating your bio as source code, with one file, one tracker and an agent skill that checks the live sites.",
      "url": "https://dev.to/gde/profile-sprawl-solving-a-problem-you-didnt-know-you-had-19k5",
      "tags": "ai, devtools, productivity, opensource",
      "reactions": 9,
      "comments": 0,
      "reading_time": 7,
      "author": "xbill"
    },
    {
      "title": "From `main.js` Leaks to Hidden Tailwind CSS v4 Bloat — How I Built `angular-bundle-guard` with Antigravity `/learn` [GDE]",
      "description": "Day 33: From main.js Leaks to Hidden Tailwind CSS v4 Bloat — How I Built...",
      "url": "https://dev.to/gde/from-mainjs-leaks-to-hidden-tailwind-css-v4-bloat-how-i-built-angular-bundle-guard-with-geg",
      "tags": "angular, antigravity, gemini, performance",
      "reactions": 6,
      "comments": 0,
      "reading_time": 13,
      "author": "railsstudent"
    },
    {
      "title": "Securing an Angular Firebase AI App with Email/Password Authentication (Part 1: Emulator, AuthService, and Route Guard) [GDE]",
      "description": "Anyone with the public URL can use my tokens to perform image analysis and text-to-speech, which can...",
      "url": "https://dev.to/gde/securing-an-angular-firebase-ai-app-with-emailpassword-authentication-part-1-emulator-4jm",
      "tags": "angular, firebase, webdev",
      "reactions": 7,
      "comments": 9,
      "reading_time": 7,
      "author": "railsstudent"
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
      "title": "Mac at any scale",
      "url": "https://namespace.so/blog/mac-at-any-scale",
      "score": 1,
      "comments": 0,
      "tags": [
        "hardware",
        "networking"
      ],
      "id": "j1twhe"
    },
    {
      "title": "The valley of webhooks",
      "url": "https://weli.dev/blog/the-valley-of-webhooks/",
      "score": 3,
      "comments": 2,
      "tags": [
        "api"
      ],
      "id": "in86vn"
    },
    {
      "title": "Observations from Running stealmybitcoin.com",
      "url": "https://pavursec.com/blog/stealmybitcoin/",
      "score": 27,
      "comments": 0,
      "tags": [
        "php",
        "security"
      ],
      "id": "fgucra"
    },
    {
      "title": "Gist of Go: Concurrency",
      "url": "https://antonz.org/go-concurrency/",
      "score": 6,
      "comments": 0,
      "tags": [
        "go"
      ],
      "id": "erkjnx"
    },
    {
      "title": "Postgres 19 REPACK: Built-In Online Table Bloat Cleanup",
      "url": "https://www.snowflake.com/en/blog/engineering/postgres-19-repack-table-bloat/",
      "score": 4,
      "comments": 0,
      "tags": [
        "databases"
      ],
      "id": "uutnr5"
    },
    {
      "title": "Announcing NetBSD 11.1",
      "url": "https://www.netbsd.org/releases/formal-11/NetBSD-11.1.html",
      "score": 23,
      "comments": 1,
      "tags": [
        "netbsd",
        "release"
      ],
      "id": "siqsg7"
    },
    {
      "title": "macOS 27 Golden Gate does not actually support CoreStorage volumes",
      "url": "https://wadetregaskis.com/macos-27-golden-gate-does-not-actually-support-corestorage-or-hfs-volumes/",
      "score": 4,
      "comments": 0,
      "tags": [
        "mac"
      ],
      "id": "1zetje"
    },
    {
      "title": "mine",
      "url": "https://coalton-lang.github.io/mine/",
      "score": 7,
      "comments": 0,
      "tags": [
        "editors",
        "lisp"
      ],
      "id": "znbrpn"
    },
    {
      "title": "Would you believe it's jank?",
      "url": "https://www.youtube.com/watch?v=tHgApFhevrQ",
      "score": 15,
      "comments": 6,
      "tags": [
        "c++",
        "clojure",
        "video"
      ],
      "id": "xbmjlj"
    },
    {
      "title": "Common Beliefs About DNSSEC Put to the Test: An Invitation to Fact-Check Your Assumptions",
      "url": "https://circleid.com/posts/common-beliefs-about-dnssec-put-to-the-test-an-invitation-to-fact-check-your-assumptions",
      "score": 5,
      "comments": 1,
      "tags": [
        "networking",
        "security"
      ],
      "id": "qvpzfa"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "memalign",
      "descendants": 16,
      "id": 50361268,
      "kids": [
        50361809,
        50361725,
        50361944,
        50361913,
        50361872,
        50361687,
        50361719,
        50362027,
        50361994
      ],
      "score": 82,
      "time": 1793763650,
      "title": "Jelly Sheet",
      "type": "story",
      "url": "https://mrdoob.github.io/codevember-2026/01/"
    },
    {
      "by": "thatxliner",
      "descendants": 100,
      "id": 50360164,
      "kids": [
        50361334,
        50361756,
        50361939,
        50361206,
        50361242,
        50361378,
        50361469,
        50362040,
        50361501,
        50361674,
        50361341,
        50361735,
        50361859,
        50361630,
        50361140,
        50361741,
        50361730,
        50361338,
        50361083,
        50361144,
        50361273,
        50361158,
        50361345,
        50361811,
        50361397
      ],
      "score": 206,
      "time": 1793752402,
      "title": "C++26 Disapproved",
      "type": "story",
      "url": "https://andreasfertig.com/blog/2026/11/cpp26-dis-failed-how-does-cpp-survive/"
    },
    {
      "by": "gmays",
      "descendants": 1,
      "id": 50361154,
      "kids": [
        50361660
      ],
      "score": 47,
      "time": 1793762413,
      "title": "Distinct cellular and genetic differences in colorectal cancer in young patients",
      "type": "story",
      "url": "https://www.dana-farber.org/newsroom/news-releases/2026/study-reveals-distinct-cellular-and-genetic-differences-in-colorectal-cancer-in-younger-patients"
    },
    {
      "by": "ibobev",
      "descendants": 13,
      "id": 50358702,
      "kids": [
        50361063,
        50359266,
        50361046,
        50361076,
        50360879,
        50361038
      ],
      "score": 221,
      "time": 1793742666,
      "title": "The Internals of PostgreSQL",
      "type": "story",
      "url": "https://www.interdb.jp/pg/index.html"
    },
    {
      "by": "xx_ns",
      "descendants": 295,
      "id": 50339288,
      "kids": [
        50353939,
        50355141,
        50355134,
        50354057,
        50353866,
        50354306,
        50361680,
        50361685,
        50354657,
        50355355,
        50357851,
        50354274,
        50360072,
        50354695,
        50353489,
        50354739,
        50357461,
        50359331,
        50354520,
        50358672,
        50356817,
        50353583,
        50356201,
        50356330,
        50359470,
        50355175,
        50357919,
        50354318,
        50361252,
        50354810,
        50354416,
        50357291,
        50354307,
        50358761,
        50359914,
        50354935,
        50359216,
        50358403,
        50354380,
        50355908,
        50356079,
        50355205,
        50355064,
        50354609,
        50354093,
        50361873,
        50360717,
        50360932,
        50354885,
        50354635
      ],
      "score": 721,
      "time": 1793636959,
      "title": "Jailbreaking my car's navigation system just so I can change the time",
      "type": "story",
      "url": "https://blog.nns.ee/2026/11/02/renault-hack/"
    },
    {
      "by": "nharada",
      "descendants": 173,
      "id": 50354358,
      "kids": [
        50358075,
        50359580,
        50356275,
        50358463,
        50359365,
        50356619,
        50361929,
        50356706,
        50359351,
        50361770,
        50356823,
        50361545,
        50356221,
        50356696,
        50356147,
        50356628,
        50357039,
        50357547,
        50361788,
        50358108,
        50357579,
        50360726,
        50357694,
        50357607,
        50357434,
        50357161,
        50358906,
        50356779,
        50356363,
        50359619,
        50357617,
        50357375,
        50358498,
        50359758,
        50356701,
        50356140,
        50359517,
        50358278,
        50356453,
        50356559,
        50356737,
        50359308,
        50356662,
        50357827,
        50357698,
        50357341,
        50357838
      ],
      "score": 497,
      "time": 1793724449,
      "title": "Stringman, an $800 open-source room scale gripper robot",
      "type": "story",
      "url": "https://neufangled.com/"
    },
    {
      "by": "gmays",
      "descendants": 5,
      "id": 50360573,
      "kids": [
        50361402,
        50361607,
        50362045
      ],
      "score": 63,
      "time": 1793756442,
      "title": "Giant canyon on Mars is still tectonically active",
      "type": "story",
      "url": "https://lamont.columbia.edu/news/giant-canyon-mars-still-tectonically-active-today"
    },
    {
      "by": "dsalzman",
      "descendants": 54,
      "id": 50346755,
      "kids": [
        50361320,
        50361633,
        50361060,
        50361193,
        50361722,
        50360980,
        50361701,
        50357819,
        50360223,
        50360696,
        50360711,
        50359853,
        50361145,
        50361856,
        50359671,
        50359095,
        50359996,
        50358980,
        50358747,
        50361477,
        50359690,
        50358892,
        50358574,
        50359753,
        50359571,
        50358662,
        50358267,
        50359071,
        50357839,
        50358456,
        50360558,
        50359462,
        50359738,
        50361135,
        50360055,
        50359884,
        50360231,
        50359859,
        50358651
      ],
      "score": 266,
      "text": "I saw HackerTube (<a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50319510\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50319510</a>) a few days ago, the YouTube videos HN keeps\nrecommending, pulled from 19 years of comments. It made me want to flip\nthrough them instead of picking, so I built a TV for it. I have Algo fatigue.<p>Each topic area is a channel (DEVTV, SOLDER, RETRO, ORBIT, ...), plus HN Prime\n(the top 400), a music channel, and Late Night on ch 99, which only broadcasts\n11pm-5am your local time and shows color bars otherwise.<p>Similar to HackerTube it was built with Claude Code in a few hours.<p>All credit for the data goes to HackerTube. Happy to hear channel ideas.",
      "time": 1793668689,
      "title": "Show HN: HackerTV – HN's most-recommended Youtube videos as 24/7 TV channels",
      "type": "story",
      "url": "https://hackertv.org"
    },
    {
      "by": "passkey1510",
      "descendants": 8,
      "id": 50358352,
      "kids": [
        50362035,
        50361965,
        50361234,
        50361178
      ],
      "score": 20,
      "text": "To give you some context on the project. I&#x27;m a solo founder and I use AI heavily in my work. The idea came from wanting players to discover cities. Each city has its own history, so every case is set in a real city with real public places. The crime and the people are on other hand invented. The part that I care most is the playable aspect of the game, a model plays the detective and must solve the case before it goes live.<p>As of today: it&#x27;s free on Android, the iOS version is still waiting to be reviewed by Apple. It&#x27;s available in six popular languages, but adding more languages is just a matter of time and demand.My long term vision if it takes off: weekly cases, private parties like a team-building escape game, an MCP so a game master can build their own scenario from ChatGPT or Claude, and maybe tourism offices since players travel the world.",
      "time": 1793740803,
      "title": "Show HN: Uncracked City, detective game where you question LLM suspects that lie",
      "type": "story",
      "url": "https://uncracked.city"
    },
    {
      "by": "bookofjoe",
      "descendants": 181,
      "id": 50336918,
      "kids": [
        50353433,
        50356684,
        50352954,
        50354106,
        50361740,
        50354630,
        50355255,
        50353077,
        50357956,
        50352891,
        50361613,
        50353720,
        50353368,
        50354127,
        50357964,
        50353544,
        50354473,
        50353840,
        50353434,
        50355485,
        50356895,
        50355126,
        50357467,
        50354685,
        50359727,
        50353275,
        50355638,
        50358030,
        50353285,
        50353379,
        50356190
      ],
      "score": 435,
      "time": 1793628162,
      "title": "Fujifilm to boost tape production 5x as AI fuels archiving demand",
      "type": "story",
      "url": "https://arstechnica.com/gadgets/2026/10/fujifilm-to-boost-tape-production-5x-as-ai-fuels-archiving-demand/"
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
      "title": "Building a Career Network When You Don't Know a Single Person in Tech",
      "description": "No industry contacts, no referrals, no \"my uncle works at Google\"? Here's a practical, non-cringe guide for students to build real connections from absolute zero.",
      "url": "https://dev.to/adhikareeprayush/building-a-career-network-when-you-dont-know-a-single-person-in-tech-1fpn",
      "tags": "career, beginners, networking, students",
      "reactions": 2,
      "comments": 1,
      "reading_time": 6,
      "author": "adhikareeprayush"
    },
    {
      "title": "3 mistakes I kept seeing on fresher software developer resumes, and one fixed example",
      "description": "While building ResumeForge, I spent a lot of time looking at how fresher resumes fail. The same three...",
      "url": "https://dev.to/ganesh_e/3-mistakes-i-kept-seeing-on-fresher-software-developer-resumes-and-one-fixed-example-10fh",
      "tags": "career, beginners, webdev, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "ganesh_e"
    },
    {
      "title": "How to Prepare for a Junior Backend Developer Interview Using One Project",
      "description": "Preparing for your first backend developer interview can become overwhelming very quickly.  One job...",
      "url": "https://dev.to/bestkaam_bk_c22e62652fb83/how-to-prepare-for-a-junior-backend-developer-interview-using-one-project-p72",
      "tags": "backend, career, interview, softwaredevelopment",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "bestkaam_bk_c22e62652fb83"
    },
    {
      "title": "How to Become a Front-End Developer: A Simple Beginner Roadmap",
      "description": "Learn how to become a front-end developer with a simple roadmap: HTML, CSS, JavaScript, Git, React, projects, a portfolio and tips for your first job.",
      "url": "https://dev.to/kushkrg/how-to-become-a-front-end-developer-a-simple-beginner-roadmap-4phg",
      "tags": "career, webdev, javascript, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "kushkrg"
    },
    {
      "title": "AI interview assistants in 2026: what they actually cost (prices checked 4 Nov)",
      "description": "Disclosure: I build Nail My Interview, one of the tools below. I've tried to keep this fair: every...",
      "url": "https://dev.to/akeed_rifza_622572aeb6d61/ai-interview-assistants-in-2026-what-they-actually-cost-prices-checked-4-nov-5855",
      "tags": "career, ai, interview, jobs",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "akeed_rifza_622572aeb6d61"
    },
    {
      "title": "Job Hunting in Bangalore in Late 2026: What’s Actually Working",
      "description": "Intro     If you’ve been job hunting in Bengaluru over the last year, you know it’s been a...",
      "url": "https://dev.to/satyabs9/job-hunting-in-bangalore-in-late-2026-whats-actually-working-2a12",
      "tags": "career, hiring, beginners, jobsearch",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "satyabs9"
    },
    {
      "title": "Microsoft DP-900 vs PL-300: Which First for a Data Career?",
      "description": "If you want a Microsoft certification for a data career, two exams often come up first: DP-900,...",
      "url": "https://dev.to/sajeevsebastian/microsoft-dp-900-vs-pl-300-which-first-for-a-data-career-35pi",
      "tags": "azure, powerbi, certification, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sajeevsebastian"
    },
    {
      "title": "How to safely run a take-home coding test (fake recruiter red flags after the Binance case)",
      "description": "A take-home test is normal. Cloning a stranger's repo and running it on your work laptop should not...",
      "url": "https://dev.to/renandlsantos_ai/how-to-safely-run-a-take-home-coding-test-fake-recruiter-red-flags-after-the-binance-case-577b",
      "tags": "security, career, javascript, interview",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "renandlsantos_ai"
    },
    {
      "title": "The Best AI in the World Just Scored 12% on Real Work",
      "description": "Twelve percent.  That is the best score any frontier AI model achieved on a new benchmark built to...",
      "url": "https://dev.to/itimpress/the-best-ai-in-the-world-just-scored-12-on-real-work-3lp4",
      "tags": "ai, productivity, business, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "itimpress"
    },
    {
      "title": "Pricing freelance dev work: from hourly rate to a project quote",
      "description": "If you freelance as a developer, you'll probably be asked for an hourly rate, a sprint price, a...",
      "url": "https://dev.to/anthany_wingo_195f7057a9e/pricing-freelance-dev-work-from-hourly-rate-to-a-project-quote-1fne",
      "tags": "freelance, webdev, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "anthany_wingo_195f7057a9e"
    }
  ]
}
```

