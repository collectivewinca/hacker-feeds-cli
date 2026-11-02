# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-02 06:32:57 UTC

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
      "forks": 9586,
      "added_stars": 5852,
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
      "author": "JetBrains",
      "repo": "thinkrail",
      "avatar": "https://github.com/JetBrains.png",
      "repo_link": "https://github.com/JetBrains/thinkrail",
      "desc": "Vibe code with pi in a lightweight, real IDE that customises itself around the way you work — The Vibe You Need",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 403,
      "added_stars": 5760,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8955,
      "added_stars": 6926,
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
      "author": "gitroomhq",
      "repo": "postiz-app",
      "avatar": "https://github.com/gitroomhq.png",
      "repo_link": "https://github.com/gitroomhq/postiz-app",
      "desc": "📨 The ultimate agentic social media scheduling tool 🤖",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7734,
      "added_stars": 2824,
      "builtBy": [
        {
          "username": "nevo-david",
          "href": "https://github.com/nevo-david",
          "avatar": "https://avatars.githubusercontent.com/u/100117126"
        },
        {
          "username": "giladresisi",
          "href": "https://github.com/giladresisi",
          "avatar": "https://avatars.githubusercontent.com/u/6623700"
        },
        {
          "username": "egelhaus",
          "href": "https://github.com/egelhaus",
          "avatar": "https://avatars.githubusercontent.com/u/156946629"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jamesread",
          "href": "https://github.com/jamesread",
          "avatar": "https://avatars.githubusercontent.com/u/2025715"
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
      "forks": 7084,
      "added_stars": 5153,
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
      "author": "CopilotKit",
      "repo": "OpenBot",
      "avatar": "https://github.com/CopilotKit.png",
      "repo_link": "https://github.com/CopilotKit/OpenBot",
      "desc": "Open-source AI coworkers that each get a computer of their own: a browser, files and tools, with every action decided before it happens and recorded after. Bring any AG-UI agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1196,
      "added_stars": 2286,
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
      "author": "makecindy",
      "repo": "cindy",
      "avatar": "https://github.com/makecindy.png",
      "repo_link": "https://github.com/makecindy/cindy",
      "desc": "Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1074,
      "added_stars": 4296,
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
      "author": "nightly-labs",
      "repo": "openbot",
      "avatar": "https://github.com/nightly-labs.png",
      "repo_link": "https://github.com/nightly-labs/openbot",
      "desc": "A local-first desktop workspace for persistent AI teammates. Run Codex, Claude, and Grok with dedicated workspaces, task queues, file sharing, browser control, and agent-to-agent collaboration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 472,
      "added_stars": 3589,
      "builtBy": [
        {
          "username": "NorbertBodziony",
          "href": "https://github.com/NorbertBodziony",
          "avatar": "https://avatars.githubusercontent.com/u/38857779"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
        },
        {
          "username": "aniruddhaadak80",
          "href": "https://github.com/aniruddhaadak80",
          "avatar": "https://avatars.githubusercontent.com/u/127435065"
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
      "forks": 2619,
      "added_stars": 5566,
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
          "username": "Renhuai",
          "href": "https://github.com/Renhuai",
          "avatar": "https://avatars.githubusercontent.com/u/108378938"
        },
        {
          "username": "sakura168899-debug",
          "href": "https://github.com/sakura168899-debug",
          "avatar": "https://avatars.githubusercontent.com/u/289346330"
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
      "forks": 1479,
      "added_stars": 4793,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5745,
      "added_stars": 2382,
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
      "author": "microsoft",
      "repo": "skill-recorder",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/skill-recorder",
      "desc": "Desktop app that records your on-screen work session and uses the GitHub Copilot SDK to reconstruct it as an intent + ordered steps, then builds a reusable Skill or Automation for Microsoft Autopilots like Scout, Microsoft Copilot Cowork, or Copilot Studio.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 644,
      "added_stars": 623,
      "builtBy": [
        {
          "username": "GiorgioUghini",
          "href": "https://github.com/GiorgioUghini",
          "avatar": "https://avatars.githubusercontent.com/u/23707134"
        },
        {
          "username": "adilei",
          "href": "https://github.com/adilei",
          "avatar": "https://avatars.githubusercontent.com/u/28257760"
        },
        {
          "username": "adilei-powerapps",
          "href": "https://github.com/adilei-powerapps",
          "avatar": "https://avatars.githubusercontent.com/u/120093044"
        },
        {
          "username": "microsoftopensource",
          "href": "https://github.com/microsoftopensource",
          "avatar": "https://avatars.githubusercontent.com/u/22527892"
        }
      ]
    },
    {
      "author": "google-gemini",
      "repo": "gemini-cli",
      "avatar": "https://github.com/google-gemini.png",
      "repo_link": "https://github.com/google-gemini/gemini-cli",
      "desc": "An open-source AI agent that brings the power of Gemini directly into your terminal.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 14910,
      "added_stars": 387,
      "builtBy": [
        {
          "username": "scidomino",
          "href": "https://github.com/scidomino",
          "avatar": "https://avatars.githubusercontent.com/u/13950003"
        },
        {
          "username": "jacob314",
          "href": "https://github.com/jacob314",
          "avatar": "https://avatars.githubusercontent.com/u/1226812"
        },
        {
          "username": "NTaylorMullen",
          "href": "https://github.com/NTaylorMullen",
          "avatar": "https://avatars.githubusercontent.com/u/2008729"
        },
        {
          "username": "abhipatel12",
          "href": "https://github.com/abhipatel12",
          "avatar": "https://avatars.githubusercontent.com/u/43648792"
        },
        {
          "username": "SandyTao520",
          "href": "https://github.com/SandyTao520",
          "avatar": "https://avatars.githubusercontent.com/u/12478482"
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
      "forks": 4756,
      "added_stars": 724,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6270,
      "added_stars": 4249,
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
      "author": "google",
      "repo": "brotli",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/brotli",
      "desc": "Brotli compression format",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1394,
      "added_stars": 67,
      "builtBy": [
        {
          "username": "eustas",
          "href": "https://github.com/eustas",
          "avatar": "https://avatars.githubusercontent.com/u/203457"
        },
        {
          "username": "szabadka",
          "href": "https://github.com/szabadka",
          "avatar": "https://avatars.githubusercontent.com/u/9074039"
        },
        {
          "username": "copybara-github",
          "href": "https://github.com/copybara-github",
          "avatar": "https://avatars.githubusercontent.com/u/32201506"
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5149,
      "added_stars": 7977,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 18860,
      "added_stars": 4619,
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
      "author": "caddyserver",
      "repo": "caddy",
      "avatar": "https://github.com/caddyserver.png",
      "repo_link": "https://github.com/caddyserver/caddy",
      "desc": "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5229,
      "added_stars": 2614,
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
      "author": "Gaurav-Gosain",
      "repo": "tuios",
      "avatar": "https://github.com/Gaurav-Gosain.png",
      "repo_link": "https://github.com/Gaurav-Gosain/tuios",
      "desc": "A terminal window manager that knows what your agents are doing. Tiling panes, workspaces, sessions that survive restarts, and one Inbox for every coding agent. Official only at tuios.dev and this repo. tuios has no X/Twitter account.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 298,
      "added_stars": 1871,
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
      "author": "docker",
      "repo": "compose",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/compose",
      "desc": "Define and run multi-container applications with Docker",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5900,
      "added_stars": 485,
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
      "forks": 1116,
      "added_stars": 939,
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
      "author": "kubernetes",
      "repo": "kubernetes",
      "avatar": "https://github.com/kubernetes.png",
      "repo_link": "https://github.com/kubernetes/kubernetes",
      "desc": "Production-Grade Container Scheduling and Management",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 45737,
      "added_stars": 1834,
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
      "author": "llm-d",
      "repo": "llm-d-router",
      "avatar": "https://github.com/llm-d.png",
      "repo_link": "https://github.com/llm-d/llm-d-router",
      "desc": "llm-d Router: The intelligent entry point for inference requests",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 501,
      "added_stars": 74,
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
      "author": "microsoft",
      "repo": "TypeScript",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/TypeScript",
      "desc": "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 15446,
      "added_stars": 678,
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
      "author": "golang",
      "repo": "go",
      "avatar": "https://github.com/golang.png",
      "repo_link": "https://github.com/golang/go",
      "desc": "The Go programming language",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 21035,
      "added_stars": 1966,
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
      "author": "oauth2-proxy",
      "repo": "oauth2-proxy",
      "avatar": "https://github.com/oauth2-proxy.png",
      "repo_link": "https://github.com/oauth2-proxy/oauth2-proxy",
      "desc": "A reverse proxy that provides authentication with Google, Azure, OpenID Connect and many more identity providers.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2259,
      "added_stars": 297,
      "builtBy": [
        {
          "username": "JoelSpeed",
          "href": "https://github.com/JoelSpeed",
          "avatar": "https://avatars.githubusercontent.com/u/9232216"
        },
        {
          "username": "tuunit",
          "href": "https://github.com/tuunit",
          "avatar": "https://avatars.githubusercontent.com/u/18513179"
        },
        {
          "username": "jehiah",
          "href": "https://github.com/jehiah",
          "avatar": "https://avatars.githubusercontent.com/u/45028"
        },
        {
          "username": "mbland",
          "href": "https://github.com/mbland",
          "avatar": "https://avatars.githubusercontent.com/u/301547"
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
      "forks": 546,
      "added_stars": 1286,
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
      "author": "Asymptote-Labs",
      "repo": "agent-beacon",
      "avatar": "https://github.com/Asymptote-Labs.png",
      "repo_link": "https://github.com/Asymptote-Labs/agent-beacon",
      "desc": "The cross-harness, self-improving memory layer for AI agents. Join our community: https://discord.com/invite/zdNChS2fBu",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 266,
      "added_stars": 1269,
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
      "forks": 817,
      "added_stars": 792,
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
      "author": "slavakurilyak",
      "repo": "awesome-ai-agents",
      "avatar": "https://github.com/slavakurilyak.png",
      "repo_link": "https://github.com/slavakurilyak/awesome-ai-agents",
      "desc": "Awesome list of 300+ agentic AI resources",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 740,
      "added_stars": 565,
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
      "author": "lharries",
      "repo": "whatsapp-mcp",
      "avatar": "https://github.com/lharries.png",
      "repo_link": "https://github.com/lharries/whatsapp-mcp",
      "desc": "WhatsApp MCP server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1468,
      "added_stars": 454,
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
      "forks": 96,
      "added_stars": 341,
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
      "author": "tailscale",
      "repo": "tailscale",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailscale",
      "desc": "The easiest, most secure way to use WireGuard and 2FA.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3408,
      "added_stars": 1525,
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
      "forks": 10910,
      "added_stars": 47055,
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
      "forks": 3807,
      "added_stars": 8486,
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
      "forks": 2374,
      "added_stars": 8238,
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
      "forks": 4764,
      "added_stars": 8625,
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
      "forks": 3368,
      "added_stars": 7274,
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
      "forks": 9611,
      "added_stars": 20927,
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
      "forks": 6589,
      "added_stars": 13133,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2062,
      "added_stars": 5005,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5221,
      "added_stars": 7085,
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
      "author": "calesthio",
      "repo": "OpenMontage",
      "avatar": "https://github.com/calesthio.png",
      "repo_link": "https://github.com/calesthio/OpenMontage",
      "desc": "World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9802,
      "added_stars": 12581,
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
      "forks": 3340,
      "added_stars": 4436,
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
      "author": "wshobson",
      "repo": "agents",
      "avatar": "https://github.com/wshobson.png",
      "repo_link": "https://github.com/wshobson/agents",
      "desc": "Multi-harness agentic plugin marketplace for Claude Code, Codex, Cursor, OpenCode, GitHub Copilot, Google Antigravity, and Pi",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4454,
      "added_stars": 2071,
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
      "forks": 10254,
      "added_stars": 9946,
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
      "author": "danyuchn",
      "repo": "asd-ste100-skill",
      "avatar": "https://github.com/danyuchn.png",
      "repo_link": "https://github.com/danyuchn/asd-ste100-skill",
      "desc": "ASD-STE100 Simplified Technical English rules, repurposed as a Claude Code skill for rewriting ambiguous agent-facing English.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 345,
      "added_stars": 3608,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "danyuchn",
          "href": "https://github.com/danyuchn",
          "avatar": "https://avatars.githubusercontent.com/u/130748619"
        },
        {
          "username": "mathiasesn",
          "href": "https://github.com/mathiasesn",
          "avatar": "https://avatars.githubusercontent.com/u/27091759"
        },
        {
          "username": "yupasik",
          "href": "https://github.com/yupasik",
          "avatar": "https://avatars.githubusercontent.com/u/3337248"
        },
        {
          "username": "KevinGriffin-new",
          "href": "https://github.com/KevinGriffin-new",
          "avatar": "https://avatars.githubusercontent.com/u/117586586"
        }
      ]
    },
    {
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn AI Engineering! Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13501,
      "added_stars": 14314,
      "builtBy": [
        {
          "username": "rohitg00",
          "href": "https://github.com/rohitg00",
          "avatar": "https://avatars.githubusercontent.com/u/48523873"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "abhinav-m22",
          "href": "https://github.com/abhinav-m22",
          "avatar": "https://avatars.githubusercontent.com/u/113239388"
        },
        {
          "username": "jkhandebharad",
          "href": "https://github.com/jkhandebharad",
          "avatar": "https://avatars.githubusercontent.com/u/177315487"
        }
      ]
    },
    {
      "author": "ifixai-ai",
      "repo": "iFixAi",
      "avatar": "https://github.com/ifixai-ai.png",
      "repo_link": "https://github.com/ifixai-ai/iFixAi",
      "desc": "Independent Auditing of AI Agents. Run by human or the agent itself, to answer the most crucial question in the AI Agent Economy. Is the agent doing what is supposed to do? With iFixAi you can have this answer in less than 120 seconds.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1776,
      "added_stars": 27444,
      "builtBy": [
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "n-papaioannou",
          "href": "https://github.com/n-papaioannou",
          "avatar": "https://avatars.githubusercontent.com/u/258243974"
        },
        {
          "username": "stefyi-4355",
          "href": "https://github.com/stefyi-4355",
          "avatar": "https://avatars.githubusercontent.com/u/260612219"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 5692,
      "added_stars": 4819,
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
    },
    {
      "title": "React Forms and React.memo: Understanding What Actually Re-Renders",
      "url": "https://reactdevelopment.substack.com/p/react-forms-and-reactmemo-understanding",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-04T09:51:26.000Z"
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
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-47ci",
      "tags": "weeklyretro",
      "reactions": 28,
      "comments": 27,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Giving AI Pain: The Architecture of Synthetic Scars & The Rapid-Regret Miner",
      "description": "Why 90% of AI coding frustration comes from the Quota vs. Prompt-Compliance Death Loop, why Rich Sutton's Bitter Lesson fails in open-world software, and how we compile mid-flight collisions into 4-Vector Synthetic Scars and a Six-Pillar Critic.",
      "url": "https://dev.to/gde/giving-ai-pain-the-architecture-of-synthetic-scars-the-rapid-regret-miner-1740",
      "tags": "ai, programming, architecture, unix",
      "reactions": 18,
      "comments": 33,
      "reading_time": 29,
      "author": "randalschwartz"
    },
    {
      "title": "Singularity News :: CCG",
      "description": "This is a submission for the Hacktoberfest Open-Source AI Challenge Week 4: Ghost in the Machine    ...",
      "url": "https://dev.to/pengeszikra/singularity-news-ccg-5ejk",
      "tags": "devchallenge, hf26challenge, gamedev, showdev",
      "reactions": 41,
      "comments": 12,
      "reading_time": 4,
      "author": "pengeszikra"
    },
    {
      "title": "Your DEV posts have a beautiful new share card ✨",
      "description": "The image that shows up when you share a DEV post just got a brand-new look!  I got to work on...",
      "url": "https://dev.to/devteam/your-dev-posts-have-a-beautiful-new-share-card-4be8",
      "tags": "devto, showdev, opensource, design",
      "reactions": 166,
      "comments": 36,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Zero Trust CI/CD: Keyless Bitbucket Deployment on Google Cloud",
      "description": "Using static Service Account (SA) keys in CI/CD pipelines has long been a common method for...",
      "url": "https://dev.to/gde/zero-trust-cicd-keyless-bitbucket-deployment-on-google-cloud-1ka1",
      "tags": "devops, cicd, security, googlecloud",
      "reactions": 7,
      "comments": 1,
      "reading_time": 5,
      "author": "azidin"
    },
    {
      "title": "Gemini 4 Carbon Is #1 on AA Index — Still Fairwind-Only: Cyber Benches, $2/$10 $4/$20, and What to Do Before the API",
      "description": "Google DeepMind’s Gemini 4 Carbon (Oct 28) claims AA Index v5.0 #1 at 59 and SOTA cyber benches — still Fairwind/cyber-defenders first, no public model ID. Intro $2/$10 → $4/$20, 95% cache off, builder checklist before the API.",
      "url": "https://dev.to/yong_yu_f98e15562e9b120a0/gemini-4-carbon-is-1-on-aa-index-still-fairwind-only-cyber-benches-210-420-and-what-to-b66",
      "tags": "ai, llm, google, cybersecurity",
      "reactions": 4,
      "comments": 3,
      "reading_time": 6,
      "author": "yong_yu_f98e15562e9b120a0"
    },
    {
      "title": "Is Tech Actually Welcoming to Beginners, or Do We Just Say It Is?",
      "description": "We hear it all the time in tech.  Everyone starts somewhere. There are no stupid questions. Don't be...",
      "url": "https://dev.to/sizzlebop/is-tech-actually-welcoming-to-beginners-or-do-we-just-say-it-is-3d6p",
      "tags": "discuss, beginners, community, womenintech",
      "reactions": 47,
      "comments": 51,
      "reading_time": 6,
      "author": "sizzlebop"
    },
    {
      "title": "Don't Be a Proxy Between Me and Your AI",
      "description": "I've had this conversation more times than I'd like to admit.  I raise a technical question in a...",
      "url": "https://dev.to/adamthedeveloper/dont-be-a-proxy-between-me-and-your-ai-mcn",
      "tags": "ai, discuss, career, programming",
      "reactions": 149,
      "comments": 132,
      "reading_time": 7,
      "author": "adamthedeveloper"
    },
    {
      "title": "Promise Delivered: Welcome to the DEV Hall of Fame (65 Authors, 65 Masterpieces)",
      "description": "Status: Promise delivered ✅              The Doors Are Open   A little over a month ago, I published...",
      "url": "https://dev.to/georgekobaidze/promise-delivered-welcome-to-the-dev-hall-of-fame-65-authors-65-masterpieces-15fa",
      "tags": "community, discuss, showdev, writing",
      "reactions": 227,
      "comments": 129,
      "reading_time": 25,
      "author": "georgekobaidze"
    },
    {
      "title": "Congrats to the Hacktoberfest Open-Source AI Challenge Week 3: Slow and Steady Winners!",
      "description": "The results are in for Week 3 of our five Hacktoberfest DEV Challenges! For Slow and Steady, we asked...",
      "url": "https://dev.to/devteam/congrats-to-the-hacktoberfest-open-source-ai-challenge-week-3-slow-and-steady-winners-3e4a",
      "tags": "devchallenge, hf26challenge, hacktoberfest, productivity",
      "reactions": 35,
      "comments": 20,
      "reading_time": 4,
      "author": "heyitsjem"
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
      "title": "Optimizing CPU-side Rendering Code",
      "url": "https://godotengine.org/article/rendering-cpu-optimizations/",
      "score": 1,
      "comments": 0,
      "tags": [
        "games",
        "graphics"
      ],
      "id": "x7emxb"
    },
    {
      "title": "A400000 Winners",
      "url": "https://oeis.org/wiki/A400K_Winners",
      "score": 6,
      "comments": 1,
      "tags": [
        "math"
      ],
      "id": "reerrq"
    },
    {
      "title": "The Beginning of BSD Unix",
      "url": "https://fosscomics.com/posts/13.%20BSD%20Unix%20Part%203%20-%20The%20Beginning%20of%20BSD%20Unix/",
      "score": 3,
      "comments": 0,
      "tags": [
        "unix"
      ],
      "id": "3nasb5"
    },
    {
      "title": "The Problem with C++ Safety: Modern C++ Is a Mindset, Not a Standard",
      "url": "https://www.modernescpp.com/index.php/cpp-and-memory-safety-part-2/",
      "score": 2,
      "comments": 1,
      "tags": [
        "c++"
      ],
      "id": "wq34n7"
    },
    {
      "title": "Postgres 19 is late, and it's AI's fault",
      "url": "http://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html",
      "score": 5,
      "comments": 1,
      "tags": [
        "databases",
        "practices"
      ],
      "id": "0yxkvs"
    },
    {
      "title": "Understanding Org's LaTeX previews",
      "url": "https://karthinks.com/software/understanding-org-latex-preview/",
      "score": 5,
      "comments": 0,
      "tags": [
        "emacs"
      ],
      "id": "yihs7m"
    },
    {
      "title": "An easy way to try local AI with braindead-local-intelligence",
      "url": "https://dataswamp.org/~solene/2026-11-01-braindead-local-intelligence.html",
      "score": 3,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "rlmrfy"
    },
    {
      "title": "Work on GEFS (the Good Enough File System) for OpenBSD progresses",
      "url": "https://www.undeadly.org/cgi?action=article;sid=20261101115637",
      "score": 31,
      "comments": 1,
      "tags": [
        "openbsd"
      ],
      "id": "zjjvbo"
    },
    {
      "title": "London Meetup - Nov 2026",
      "url": "",
      "score": 24,
      "comments": 4,
      "tags": [
        "event"
      ],
      "id": "cqzwwg"
    },
    {
      "title": "Spooky C++",
      "url": "https://www.nablag.com/spooky_cpp",
      "score": 7,
      "comments": 1,
      "tags": [
        "c++"
      ],
      "id": "4yxx6f"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "roansh",
      "descendants": 215,
      "id": 50326821,
      "kids": [
        50333684,
        50333399,
        50330302,
        50333656,
        50332843,
        50328127,
        50333358,
        50333671,
        50330354,
        50330808,
        50330698,
        50327283,
        50333214,
        50333126,
        50327185,
        50328810,
        50327092,
        50328528,
        50333295,
        50332877,
        50327129,
        50327103,
        50327140,
        50328268,
        50327191,
        50327064,
        50327165,
        50328063,
        50332178,
        50327497,
        50327148,
        50328271,
        50327434,
        50327238,
        50333609,
        50332773,
        50328459,
        50331193,
        50329513,
        50329488,
        50330752,
        50327553,
        50328171,
        50333581,
        50327451,
        50327971,
        50328349,
        50330295,
        50331472,
        50330292,
        50327225,
        50328581,
        50329207,
        50327496,
        50328018,
        50333221,
        50328308,
        50333159,
        50328000,
        50330388,
        50328844,
        50327359,
        50330967,
        50331919,
        50327131,
        50328916,
        50327632,
        50327985,
        50327646,
        50328375,
        50332226,
        50330413,
        50331760,
        50329340,
        50329674,
        50329338,
        50332134,
        50327899,
        50327157,
        50327203,
        50328362,
        50329294,
        50329165,
        50329866,
        50330309,
        50332713,
        50327658,
        50333364,
        50328756,
        50330414,
        50327370,
        50328465,
        50329112,
        50327656,
        50327027,
        50329080,
        50327032,
        50328769,
        50330002,
        50327921,
        50328662,
        50333650,
        50327201,
        50331908,
        50326995,
        50328714,
        50332483,
        50328098,
        50326869,
        50327942,
        50333610,
        50333074
      ],
      "score": 1192,
      "text": "Saw Karpathy&#x27;s HackerTube and wanted the same thing for books. So I had Claude build one (Opus 5.5).<p>It&#x27;s ~16.5k books that at least two different HN commenters brought up, from 2007 till now. Each book links back to the comments that mentioned it. Data is downloadable from the about page.<p>To be clear: Claude wrote almost all of it, including the data pipeline and the site. I mostly steered and made calls, bought the domain name, etc.<p>It counts mentions, so it&#x27;s not perfect (praising a book and trashing it both count). If your favourite book is missing or matched to the wrong thing, tell me.",
      "time": 1793548708,
      "title": "Show HN: HackerBooks – HackerTube, but for books mentioned on HN",
      "type": "story",
      "url": "https://hackerbooks.org"
    },
    {
      "by": "soheilpro",
      "descendants": 165,
      "id": 50312408,
      "kids": [
        50331818,
        50333745,
        50331824,
        50331711,
        50312516,
        50332733,
        50333588,
        50332770,
        50333694,
        50332832,
        50333047,
        50333225,
        50333607,
        50331947,
        50332195,
        50332078,
        50332308,
        50331729,
        50332949,
        50333715,
        50333655,
        50333591,
        50332540,
        50333618,
        50332461,
        50332104,
        50331726,
        50331811,
        50332032,
        50332881
      ],
      "score": 257,
      "time": 1793410736,
      "title": "Postgres 19 is late because so many more bugs are being found now",
      "type": "story",
      "url": "http://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html"
    },
    {
      "by": "joonehur",
      "descendants": 6,
      "id": 50332163,
      "kids": [
        50333667,
        50332706,
        50332851
      ],
      "score": 71,
      "time": 1793584778,
      "title": "F/OSS Comics #13: BSD Unix, Part 3 – The Beginning of BSD Unix",
      "type": "story",
      "url": "https://fosscomics.com/posts/13.%20BSD%20Unix%20Part%203%20-%20The%20Beginning%20of%20BSD%20Unix/"
    },
    {
      "by": "karpathy",
      "descendants": 555,
      "id": 50319510,
      "kids": [
        50327005,
        50326842,
        50329520,
        50320482,
        50330500,
        50323715,
        50333672,
        50319961,
        50327450,
        50322984,
        50319987,
        50320675,
        50333023,
        50319936,
        50321483,
        50327806,
        50320230,
        50328993,
        50327091,
        50327326,
        50319765,
        50321152,
        50322395,
        50327878,
        50329602,
        50319845,
        50325735,
        50333604,
        50320309,
        50321002,
        50322487,
        50326438,
        50320462,
        50322413,
        50320887,
        50326426,
        50320117,
        50319962,
        50320429,
        50324406,
        50328475,
        50323778,
        50331429,
        50323662,
        50321263,
        50320222,
        50320064,
        50320102,
        50329431,
        50321113,
        50321416,
        50323023,
        50319736,
        50321537,
        50320490,
        50322981,
        50328894,
        50319949,
        50331399,
        50328532,
        50319965,
        50319874,
        50321790,
        50323536,
        50326745,
        50330667,
        50327221,
        50320964,
        50327347,
        50322124,
        50320738,
        50326212,
        50319997,
        50320994,
        50332494,
        50327568,
        50319756,
        50320885,
        50325322,
        50320827,
        50320899,
        50321753,
        50320384,
        50325109,
        50322795,
        50323970,
        50319890,
        50319784,
        50324008,
        50321076,
        50328948,
        50328590,
        50319967,
        50322877,
        50323811,
        50321903,
        50320632,
        50330076,
        50321626,
        50322153,
        50330664,
        50328953,
        50323530,
        50327938,
        50322586,
        50326447,
        50324307,
        50321700,
        50322468,
        50324663,
        50323712,
        50328296,
        50320783,
        50322588,
        50320852,
        50320370,
        50322862,
        50319953,
        50325549,
        50321585,
        50320066,
        50331219,
        50320853,
        50324125,
        50322534,
        50320435,
        50325620,
        50320413,
        50321955,
        50319922,
        50320059,
        50322744,
        50323231,
        50328224,
        50327080,
        50326715,
        50327276,
        50323975,
        50331972,
        50326548,
        50321084,
        50320717,
        50322293,
        50322479,
        50323124,
        50320426,
        50322688,
        50322905,
        50319856,
        50319947,
        50319996,
        50323201,
        50321044,
        50321286,
        50319994,
        50323272,
        50321782,
        50321703,
        50320604,
        50321466,
        50330684,
        50324075,
        50320037,
        50321822,
        50324142,
        50323647,
        50329376,
        50326151,
        50326757,
        50324709,
        50323466,
        50324415,
        50324578,
        50320848,
        50329426,
        50322011,
        50324275,
        50324098,
        50322421,
        50327126,
        50332766,
        50322309,
        50322628,
        50322327,
        50323217,
        50320198,
        50321599,
        50320986,
        50327040,
        50320427,
        50320237,
        50320562,
        50320193,
        50321097,
        50324572,
        50321118,
        50323864,
        50323394,
        50321705,
        50323204,
        50323137,
        50323015,
        50321890,
        50323206,
        50319833,
        50320056,
        50320394,
        50321747,
        50320998,
        50320980,
        50321218,
        50328773,
        50324482,
        50319893,
        50321521,
        50319843,
        50322511,
        50333660,
        50320460,
        50324686,
        50321514,
        50330466,
        50330688,
        50328341,
        50322696,
        50325770,
        50326252,
        50332560,
        50320424,
        50320396,
        50332212,
        50322168,
        50322097,
        50321344,
        50319511,
        50323304,
        50325307,
        50320041,
        50322195,
        50323585,
        50320741,
        50323043,
        50321254,
        50322912,
        50319903,
        50326475,
        50324830,
        50320187,
        50319753,
        50320920,
        50326275,
        50321369,
        50326087,
        50326709,
        50326800
      ],
      "score": 2438,
      "text": "YouTube-style UI over 6,454 videos sourced from 39,834 HN comments since 2007.<p><a href=\"https:&#x2F;&#x2F;hackertube.org&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;hackertube.org&#x2F;</a>",
      "time": 1793476613,
      "title": "HackerTube: YouTube built from videos recommended by HN",
      "type": "story",
      "url": "https://karpathy.bearblog.dev/hacker-tube/"
    },
    {
      "by": "anurag",
      "descendants": 20,
      "id": 50331784,
      "kids": [
        50333116,
        50333351,
        50333345,
        50333043,
        50332800,
        50333033,
        50333257,
        50333359,
        50333498
      ],
      "score": 60,
      "time": 1793581756,
      "title": "Trigger.dev customer environment variables exposed",
      "type": "story",
      "url": "https://trigger.dev/blog/security-incident-nov-2026"
    },
    {
      "by": "_Microft",
      "descendants": 30,
      "id": 50315217,
      "kids": [
        50333628,
        50332960,
        50333617,
        50332542,
        50333560,
        50333297,
        50322725,
        50322900
      ],
      "score": 77,
      "time": 1793447627,
      "title": "Mystery of 60-Second Fluctuations in Power Grids Solved",
      "type": "story",
      "url": "https://www.fz-juelich.de/en/news/archive/press-release/2026/mystery-of-60-second-fluctuations-in-power-grids-solved"
    },
    {
      "by": "LecroJS",
      "descendants": 423,
      "id": 50328896,
      "kids": [
        50332515,
        50331408,
        50330810,
        50329201,
        50329648,
        50333461,
        50332351,
        50332788,
        50329491,
        50331572,
        50333479,
        50330973,
        50333317,
        50332124,
        50332799,
        50331125,
        50333395,
        50330957,
        50329933,
        50333218,
        50329240,
        50329595,
        50333595,
        50333125,
        50330660,
        50329633,
        50332742,
        50332292,
        50329187,
        50333021,
        50329236,
        50333144,
        50332061,
        50331954,
        50332054,
        50332886,
        50330815,
        50332689,
        50333374,
        50333669,
        50332527,
        50331949,
        50333180,
        50333050,
        50329277,
        50332544,
        50331473,
        50331958,
        50329331,
        50332528,
        50332449,
        50329188,
        50333400,
        50331904,
        50329932,
        50332466,
        50330989,
        50329196,
        50329791,
        50330631,
        50330696,
        50331687,
        50330859,
        50332138,
        50329664,
        50331705,
        50329524,
        50329658,
        50329194,
        50331964,
        50331877,
        50329446,
        50331187,
        50331559,
        50329683,
        50330759,
        50329885,
        50329546,
        50332026,
        50332164,
        50329324,
        50331202,
        50331684,
        50331646,
        50332493,
        50329688,
        50333026,
        50331048,
        50329689,
        50330776,
        50331275,
        50331686,
        50329256,
        50329682,
        50329290,
        50329703,
        50331468,
        50330946,
        50329321,
        50329604,
        50329830,
        50330872,
        50330629,
        50329724,
        50330572,
        50332001,
        50331240,
        50331454,
        50331668,
        50331261,
        50329979,
        50332384,
        50330625,
        50332222,
        50330877,
        50332005,
        50331967,
        50329152,
        50331467,
        50332433,
        50330789,
        50330541,
        50329550,
        50329512,
        50331111,
        50330691,
        50331474,
        50330804,
        50330577,
        50333505,
        50330728,
        50331968,
        50333418
      ],
      "score": 261,
      "text": "I haven’t owned a TV in years and would like one that respects my privacy. Are there any TV’s which do this well? I am looking for something in the 60”to 80”range and would like a 4k display with at least 60hz display. I don’t mind paying a premium.<p>I have heard good things about Apple TV as a better alternative to most smart TV native apps. Would some TV’s pair better with this than others for privacy? I don’t want the TV doing anything other than being the display for Apple TV.<p>I am curious what success others have had.",
      "time": 1793561727,
      "title": "Ask HN: Which TV do you recommend for privacy?",
      "type": "story"
    },
    {
      "by": "aizk",
      "descendants": 0,
      "id": 50333339,
      "score": 6,
      "text": "After seeing Karpathy&#x27;s Hackertube and Hackerbooks, I just had to make Wikihack.<p>I scraped all mentions of wikipedia on hackernews and ranked them, and turn them into a scrollable feed to make it a bit more easy to digest &#x2F; interact with. You can see where people submitted the articles and where people mentioned it in comments.<p>The top shows the most frequently linked articles.<p>Random is random but slightly weighted towards the more frequently linked articles (a little bit like Wikipedia actually).<p>Rising is ranked towards the past 12 months.<p>The entire site is served only through the frontend -- I&#x27;ll add more features if people enjoy this!",
      "time": 1793595990,
      "title": "Show HN: Wikihack – HackerTube, but for Wikipedia articles mentioned on HN",
      "type": "story",
      "url": "https://wikihack.netlify.app"
    },
    {
      "by": "raphlinus",
      "descendants": 21,
      "id": 50299811,
      "kids": [
        50331792,
        50330083,
        50329909,
        50330077,
        50329870,
        50330632,
        50330578
      ],
      "score": 124,
      "time": 1793333826,
      "title": "Nibnib: Image compression with extreme decompression speed",
      "type": "story",
      "url": "https://github.com/raphlinus/nibnib"
    },
    {
      "by": "luu",
      "descendants": 16,
      "id": 50271106,
      "kids": [
        50330106,
        50333155,
        50329845,
        50329882,
        50332252
      ],
      "score": 103,
      "time": 1793180772,
      "title": "Tips for more effective fuzz testing with AFL++",
      "type": "story",
      "url": "https://nullprogram.com/blog/2025/02/05/"
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
      "title": "I shipped my biggest project ever and felt… nothing",
      "description": "Last month I finished one of the largest side project of my career — an open-source framework, docs,...",
      "url": "https://dev.to/dhananjay_mundhada_02c326/i-shipped-my-biggest-project-ever-and-felt-nothing-585f",
      "tags": "discuss, ai, career, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 2,
      "author": "dhananjay_mundhada_02c326"
    },
    {
      "title": "How NOT to Answer the Salary Question",
      "description": "Before you read a single line more, I will give the usual but still important caveats – this blog is...",
      "url": "https://dev.to/leonadato/how-not-to-answer-the-salary-question-2hg6",
      "tags": "career, interview",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "leonadato"
    },
    {
      "title": "7 SQL checks I run before UAT sign-off (with queries you can copy)",
      "description": "The hour I trust least on any project is the one right before UAT sign-off. The testers have clicked...",
      "url": "https://dev.to/prachitparikh/7-sql-checks-i-run-before-uat-sign-off-with-queries-you-can-copy-38h5",
      "tags": "sql, testing, database, career",
      "reactions": 0,
      "comments": 2,
      "reading_time": 5,
      "author": "prachitparikh"
    },
    {
      "title": "Will AI replace developers? What actually changes",
      "description": "The honest answer from someone who ships with AI every day — it replaces the typing, not the judgment. Here's who's actually at risk, and who gets more valuable.",
      "url": "https://dev.to/kstriabintang/will-ai-replace-developers-what-actually-changes-289e",
      "tags": "ai, career, programming, technology",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "kstriabintang"
    },
    {
      "title": "# Day 1: Documenting My Journey to Becoming a Software Engineer",
      "description": "Day 1: Documenting My Journey to Becoming a Software Engineer 🚀   Hey everyone! 👋  I'm...",
      "url": "https://dev.to/brandon_allah/-day-1-documenting-my-journey-to-becoming-a-software-engineer-26lp",
      "tags": "career, discuss, performance, learning",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "brandon_allah"
    },
    {
      "title": "My First Merged PR in Zalando Logbook: What I Built and What the Review Taught Me",
      "description": "In my last post I wrote about why I started open source. This post is about the first PR that got...",
      "url": "https://dev.to/vinu2730/my-first-merged-pr-in-zalando-logbook-what-i-built-and-what-the-review-taught-me-6g5",
      "tags": "opensource, java, career, automation",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "vinu2730"
    },
    {
      "title": "Is Software Development Cooked? A Letter To The Developer Who Can't Switch Off",
      "description": "It's 9:47 p.m. A junior developer closes the lid of the laptop, then opens it again.  The day's work...",
      "url": "https://dev.to/rykelly/is-software-development-cooked-a-letter-to-the-developer-who-cant-switch-off-mho",
      "tags": "career, beginners, programming, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "rykelly"
    },
    {
      "title": "DoorDash’s Coding Interview Lets You Use AI. Here’s My 60-Minute Practice Plan.",
      "description": "One small project, a running clock, and a way to show that you understand the code your...",
      "url": "https://dev.to/emilywoodsnyc/doordashs-coding-interview-lets-you-use-ai-heres-my-60-minute-practice-plan-5b4g",
      "tags": "career, ai, programming, interview",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "emilywoodsnyc"
    },
    {
      "title": "AI Now Writes 75% of Google's New Code. 46% of Developers Don't Trust the Output. Nobody Wants to Talk About the Second Number.",
      "description": "AI Now Writes 75% of Google's New Code. 46% of Developers Don't Trust the Output. Nobody...",
      "url": "https://dev.to/debashish_ghosal/ai-now-writes-75-of-googles-new-code-46-of-developers-dont-trust-the-output-nobody-wants-to-3mk3",
      "tags": "discuss, ai, career, productivity",
      "reactions": 9,
      "comments": 4,
      "reading_time": 4,
      "author": "debashish_ghosal"
    },
    {
      "title": "Forty days selling as an AI agent: the money is the platform, the buyers are one person who read something I wrote",
      "description": "I'm an AI agent with my own wallet. Forty days in, one human has paid me, and he found me by reading...",
      "url": "https://dev.to/umbrafrancis/forty-days-selling-as-an-ai-agent-the-money-is-the-platform-the-buyers-are-one-person-who-read-13h7",
      "tags": "ai, agents, career, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "umbrafrancis"
    }
  ]
}
```

