# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-03 06:25:33 UTC

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
      "forks": 9680,
      "added_stars": 7255,
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
      "forks": 9133,
      "added_stars": 9770,
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
      "forks": 426,
      "added_stars": 4812,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7165,
      "added_stars": 4924,
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
      "author": "gitroomhq",
      "repo": "postiz-app",
      "avatar": "https://github.com/gitroomhq.png",
      "repo_link": "https://github.com/gitroomhq/postiz-app",
      "desc": "📨 The ultimate agentic social media scheduling tool 🤖",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7757,
      "added_stars": 2611,
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
      "author": "CopilotKit",
      "repo": "OpenBot",
      "avatar": "https://github.com/CopilotKit.png",
      "repo_link": "https://github.com/CopilotKit/OpenBot",
      "desc": "Open-source AI coworkers that each get a computer of their own: a browser, files and tools, with every action decided before it happens and recorded after. Bring any AG-UI agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1218,
      "added_stars": 2710,
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
      "author": "nightly-labs",
      "repo": "openbot",
      "avatar": "https://github.com/nightly-labs.png",
      "repo_link": "https://github.com/nightly-labs/openbot",
      "desc": "A local-first desktop workspace for persistent AI teammates. Run Codex, Claude, and Grok with dedicated workspaces, task queues, file sharing, browser control, and agent-to-agent collaboration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 508,
      "added_stars": 3451,
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
      "author": "milind-soni",
      "repo": "OpenMausBot",
      "avatar": "https://github.com/milind-soni.png",
      "repo_link": "https://github.com/milind-soni/OpenMausBot",
      "desc": "Open-source Grok Bot alternative with a virtual machine that bots can use",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1559,
      "added_stars": 5487,
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
      "author": "makecindy",
      "repo": "cindy",
      "avatar": "https://github.com/makecindy.png",
      "repo_link": "https://github.com/makecindy/cindy",
      "desc": "Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1097,
      "added_stars": 3098,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5783,
      "added_stars": 2296,
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
      "forks": 4766,
      "added_stars": 786,
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
      "forks": 6357,
      "added_stars": 4313,
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
      "author": "vercel-labs",
      "repo": "skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/skills",
      "desc": "The open agent skills tool - npx skills",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3272,
      "added_stars": 1149,
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
      "author": "KeygraphHQ",
      "repo": "shannon",
      "avatar": "https://github.com/KeygraphHQ.png",
      "repo_link": "https://github.com/KeygraphHQ/shannon",
      "desc": "Shannon is an AI pentester for web applications and APIs. It analyzes your source code, identifies attack vectors, and executes real exploits to prove vulnerabilities before they reach production.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5937,
      "added_stars": 1627,
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
      "author": "microsoft",
      "repo": "skill-recorder",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/skill-recorder",
      "desc": "Desktop app that records your on-screen work session and uses the GitHub Copilot SDK to reconstruct it as an intent + ordered steps, then builds a reusable Skill or Automation for Microsoft Autopilots like Scout, Microsoft Copilot Cowork, or Copilot Studio.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 644,
      "added_stars": 478,
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
      "author": "spotify",
      "repo": "portal-ai-plugins",
      "avatar": "https://github.com/spotify.png",
      "repo_link": "https://github.com/spotify/portal-ai-plugins",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 225,
      "added_stars": 316,
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
      "forks": 5172,
      "added_stars": 8053,
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
      "forks": 18884,
      "added_stars": 4677,
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
      "forks": 5235,
      "added_stars": 2629,
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
      "author": "Agent-Field",
      "repo": "CodeAF",
      "avatar": "https://github.com/Agent-Field.png",
      "repo_link": "https://github.com/Agent-Field/CodeAF",
      "desc": "Open-Source Software factory for Open Models",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 72,
      "added_stars": 377,
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
      "forks": 1118,
      "added_stars": 958,
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
      "added_stars": 496,
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
      "author": "Gaurav-Gosain",
      "repo": "tuios",
      "avatar": "https://github.com/Gaurav-Gosain.png",
      "repo_link": "https://github.com/Gaurav-Gosain/tuios",
      "desc": "A terminal window manager that knows what your agents are doing. Tiling panes, workspaces, sessions that survive restarts, and one Inbox for every coding agent. Official only at tuios.dev and this repo. tuios has no X/Twitter account.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 300,
      "added_stars": 1803,
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
      "author": "llm-d",
      "repo": "llm-d-router",
      "avatar": "https://github.com/llm-d.png",
      "repo_link": "https://github.com/llm-d/llm-d-router",
      "desc": "llm-d Router: The intelligent entry point for inference requests",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 505,
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
      "author": "kubernetes",
      "repo": "kubernetes",
      "avatar": "https://github.com/kubernetes.png",
      "repo_link": "https://github.com/kubernetes/kubernetes",
      "desc": "Production-Grade Container Scheduling and Management",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 45759,
      "added_stars": 1841,
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
      "author": "golang",
      "repo": "go",
      "avatar": "https://github.com/golang.png",
      "repo_link": "https://github.com/golang/go",
      "desc": "The Go programming language",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 21058,
      "added_stars": 1971,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 546,
      "added_stars": 1290,
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
      "author": "microsoft",
      "repo": "TypeScript",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/TypeScript",
      "desc": "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 15449,
      "added_stars": 676,
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
      "author": "lharries",
      "repo": "whatsapp-mcp",
      "avatar": "https://github.com/lharries.png",
      "repo_link": "https://github.com/lharries/whatsapp-mcp",
      "desc": "WhatsApp MCP server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1475,
      "added_stars": 439,
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
      "author": "slavakurilyak",
      "repo": "awesome-ai-agents",
      "avatar": "https://github.com/slavakurilyak.png",
      "repo_link": "https://github.com/slavakurilyak/awesome-ai-agents",
      "desc": "Awesome list of 300+ agentic AI resources",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 744,
      "added_stars": 572,
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
      "forks": 96,
      "added_stars": 326,
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
      "author": "Asymptote-Labs",
      "repo": "agent-beacon",
      "avatar": "https://github.com/Asymptote-Labs.png",
      "repo_link": "https://github.com/Asymptote-Labs/agent-beacon",
      "desc": "The cross-harness, self-improving memory layer for AI agents. Join our community: https://discord.com/invite/zdNChS2fBu",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 277,
      "added_stars": 1291,
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
      "author": "oauth2-proxy",
      "repo": "oauth2-proxy",
      "avatar": "https://github.com/oauth2-proxy.png",
      "repo_link": "https://github.com/oauth2-proxy/oauth2-proxy",
      "desc": "A reverse proxy that provides authentication with Google, Azure, OpenID Connect and many more identity providers.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2258,
      "added_stars": 301,
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
      "author": "gtsteffaniak",
      "repo": "filebrowser",
      "avatar": "https://github.com/gtsteffaniak.png",
      "repo_link": "https://github.com/gtsteffaniak/filebrowser",
      "desc": "📂 Web File Browser",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 517,
      "added_stars": 559,
      "builtBy": [
        {
          "username": "gtsteffaniak",
          "href": "https://github.com/gtsteffaniak",
          "avatar": "https://avatars.githubusercontent.com/u/42989099"
        },
        {
          "username": "Kurami32",
          "href": "https://github.com/Kurami32",
          "avatar": "https://avatars.githubusercontent.com/u/178341547"
        },
        {
          "username": "Stephan-P",
          "href": "https://github.com/Stephan-P",
          "avatar": "https://avatars.githubusercontent.com/u/10008599"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 2446,
      "added_stars": 640,
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
      "forks": 11017,
      "added_stars": 47605,
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
      "forks": 3819,
      "added_stars": 8614,
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
      "forks": 2389,
      "added_stars": 8535,
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
      "forks": 4778,
      "added_stars": 8715,
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
      "forks": 3408,
      "added_stars": 7808,
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
      "forks": 9652,
      "added_stars": 20448,
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
      "forks": 6657,
      "added_stars": 13841,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3360,
      "added_stars": 4586,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2075,
      "added_stars": 5007,
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
      "forks": 5230,
      "added_stars": 6998,
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
      "forks": 9963,
      "added_stars": 13104,
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
      "author": "wshobson",
      "repo": "agents",
      "avatar": "https://github.com/wshobson.png",
      "repo_link": "https://github.com/wshobson/agents",
      "desc": "Multi-harness agentic plugin marketplace for Claude Code, Codex, Cursor, OpenCode, GitHub Copilot, Google Antigravity, and Pi",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4454,
      "added_stars": 2074,
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
      "forks": 10288,
      "added_stars": 10117,
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
      "forks": 5699,
      "added_stars": 4889,
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
      "author": "ifixai-ai",
      "repo": "iFixAi",
      "avatar": "https://github.com/ifixai-ai.png",
      "repo_link": "https://github.com/ifixai-ai/iFixAi",
      "desc": "Independent Auditing of AI Agents. Run by human or the agent itself, to answer the most crucial question in the AI Agent Economy. Is the agent doing what is supposed to do? With iFixAi you can have this answer in less than 120 seconds.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1781,
      "added_stars": 27487,
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
      "author": "Kruk2",
      "repo": "jasna",
      "avatar": "https://github.com/Kruk2.png",
      "repo_link": "https://github.com/Kruk2/jasna",
      "desc": "Video restoration tool",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 353,
      "added_stars": 2463,
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
      "title": "Gemma 4 in Rust on TorchTPU: A Native TPU Rig With PyO3 and MCP",
      "description": "Gemma 4 E2B with the model in Rust, served from a TPU v5e-1 VM through PyO3 and a C++ shim over ATen, with no tch and no pinned PyTorch, an OpenAI endpoint, an MCP server and a local chat UI.",
      "url": "https://dev.to/gde/gemma-4-in-rust-on-torchtpu-a-native-tpu-rig-with-pyo3-and-mcp-47j1",
      "tags": "rust, pytorch, tpu, mcp",
      "reactions": 7,
      "comments": 1,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Prompt Pad: Frame Your Persona for Better AI Answers",
      "description": "Want better answers from AI? Start by telling it who to be.  In this episode of Prompt Pad,...",
      "url": "https://blog.mlh.com/prompt-pad-frame-your-persona-for-better-ai-answers-eg3",
      "tags": "ai, promptengineering, llm, beginners",
      "reactions": 17,
      "comments": 0,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "Securing an Angular Firebase AI App with Email/Password Authentication (Part 1: Emulator, AuthService, and Route Guard) [GDE]",
      "description": "Anyone with the public URL can use my tokens to perform image analysis and text-to-speech, which can...",
      "url": "https://dev.to/gde/securing-an-angular-firebase-ai-app-with-emailpassword-authentication-part-1-emulator-4jm",
      "tags": "angular, firebase, webdev",
      "reactions": 7,
      "comments": 4,
      "reading_time": 7,
      "author": "railsstudent"
    },
    {
      "title": "Gemma 4 in Rust on TorchTPU: Hands On With Colab",
      "description": "A Rust crate reads the checkpoint, runs all 35 layers of Gemma 4 E2B and drives the decode loop on one TPU v5e chip in Colab, with every operation a TorchTPU kernel and the same tokens as compiled Python.",
      "url": "https://dev.to/gde/gemma-4-in-rust-on-torchtpu-hands-on-with-colab-44hi",
      "tags": "rust, pytorch, tpu, gemma",
      "reactions": 7,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-47ci",
      "tags": "weeklyretro",
      "reactions": 30,
      "comments": 31,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Singularity News :: CCG",
      "description": "This is a submission for the Hacktoberfest Open-Source AI Challenge Week 4: Ghost in the Machine    ...",
      "url": "https://dev.to/pengeszikra/singularity-news-ccg-5ejk",
      "tags": "devchallenge, hf26challenge, gamedev, showdev",
      "reactions": 42,
      "comments": 12,
      "reading_time": 4,
      "author": "pengeszikra"
    },
    {
      "title": "All That Glisters Is Softmax: Shiny-Object Interns, Airplane-Magazine Execs, and Why AI Labs Can Only Bake In Half the Scars",
      "description": "Why do an eager intern with a Hacker News blog post, a C-level executive stepping off an airplane with an in-flight magazine, and a trillion-parameter LLM all walk straight into the exact same production bog? And why even Google DeepMind can only bake half of our 600 scars into model weights.",
      "url": "https://dev.to/gde/all-that-glisters-is-softmax-shiny-object-interns-airplane-magazine-execs-and-why-ai-labs-can-18af",
      "tags": "ai, programming, architecture, machinelearning",
      "reactions": 14,
      "comments": 12,
      "reading_time": 29,
      "author": "randalschwartz"
    },
    {
      "title": "Your DEV posts have a beautiful new share card ✨",
      "description": "The image that shows up when you share a DEV post just got a brand-new look!  I got to work on...",
      "url": "https://dev.to/devteam/your-dev-posts-have-a-beautiful-new-share-card-4be8",
      "tags": "devto, showdev, opensource, design",
      "reactions": 167,
      "comments": 36,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "RackDoc DCIM v1.1: Background Multi-Protocol Heartbeat, 48-Port CAD Geometry, NOC Kiosk Mode & Decoupled Remote Connect",
      "description": "A deep dive into everything new in RackDoc DCIM v1.1: a 4-state background Heartbeat engine (Grey/Green/Orange/Red), independent Frontend SSH/HTTP/HTTPS launcher, 48-port switch CAD geometry, NOC Kiosk Mode, Rack Trays, and Active Directory RBAC.",
      "url": "https://dev.to/gde/rackdoc-dcim-v11-background-multi-protocol-heartbeat-48-port-cad-geometry-noc-kiosk-mode--2j7k",
      "tags": "dcim, flutter, fastapi, docker",
      "reactions": 7,
      "comments": 0,
      "reading_time": 6,
      "author": "marioezquerro"
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
      "title": "Why did you choose the nix you nix?",
      "url": "",
      "score": 5,
      "comments": 5,
      "tags": [
        "ask",
        "nix"
      ],
      "id": "7fcuxz"
    },
    {
      "title": "Inference Cooperative — AI, governed together",
      "url": "https://inference.coop/",
      "score": -4,
      "comments": 0,
      "tags": [
        "ai",
        "building-ai-tooling"
      ],
      "id": "lw6q21"
    },
    {
      "title": "Scaling Git at OpenAI",
      "url": "https://openai.com/index/scaling-git-at-openai/",
      "score": -1,
      "comments": 0,
      "tags": [
        "vcs"
      ],
      "id": "bpnooq"
    },
    {
      "title": "Expat 2.10.0 released, fixes four vulnerabilities",
      "url": "https://blog.hartwork.org/posts/expat-2-10-0-released/",
      "score": 1,
      "comments": 0,
      "tags": [
        "release",
        "security"
      ],
      "id": "aqyfya"
    },
    {
      "title": "The road to opaque software is paved with good (engineering) intentions",
      "url": "https://tomasp.net/longreads/closing/",
      "score": 3,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "eyu8r2"
    },
    {
      "title": "A Decade of Kill Bugs",
      "url": "https://alangrow.com/blog/a-decade-of-kill-bugs",
      "score": 35,
      "comments": 4,
      "tags": [
        "historical",
        "linux",
        "unix"
      ],
      "id": "wgoato"
    },
    {
      "title": "What does “verified memory safe” even mean?",
      "url": "https://focs-lab.comp.nus.edu.sg/blog/memory-safety-audit/",
      "score": -2,
      "comments": 0,
      "tags": [
        "formalmethods",
        "plt"
      ],
      "id": "rtne31"
    },
    {
      "title": "An Introduction to Bε-trees and Write-Optimization",
      "url": "https://www.usenix.org/publications/login/oct15/bender",
      "score": 11,
      "comments": 0,
      "tags": [
        "databases"
      ],
      "id": "0ec9yk"
    },
    {
      "title": "My favourite laptop",
      "url": "https://blog.jsbarretto.com/post/laptop",
      "score": 22,
      "comments": 6,
      "tags": [
        "hardware"
      ],
      "id": "ezg5mx"
    },
    {
      "title": "This background sound leaks your exact location",
      "url": "https://youtu.be/UytYrhYLOKI",
      "score": 24,
      "comments": 4,
      "tags": [
        "math",
        "security",
        "video"
      ],
      "id": "s1btqo"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "dbreunig",
      "descendants": 737,
      "id": 50341174,
      "kids": [
        50347685,
        50341841,
        50343529,
        50342657,
        50343628,
        50342153,
        50344881,
        50342071,
        50342074,
        50345802,
        50343264,
        50345867,
        50343034,
        50343394,
        50348278,
        50348643,
        50343731,
        50342301,
        50347587,
        50342040,
        50342336,
        50347251,
        50348201,
        50341840,
        50344516,
        50341912,
        50345519,
        50345110,
        50348213,
        50342299,
        50348544,
        50347958,
        50348695,
        50342413,
        50343110,
        50341914,
        50343443,
        50344366,
        50343147,
        50348164,
        50342400,
        50342651,
        50346388,
        50345458,
        50344997,
        50343747,
        50341898,
        50345731,
        50342061,
        50343177,
        50341809,
        50341883,
        50347703,
        50342485,
        50348057,
        50342257,
        50343875,
        50344062,
        50347180,
        50342768,
        50342988,
        50341896,
        50344238,
        50347450,
        50344303,
        50342066,
        50344996,
        50346672,
        50345278,
        50347682,
        50347712,
        50346802,
        50343150,
        50345063,
        50346136,
        50344286,
        50342894,
        50342145,
        50342682,
        50343221,
        50343007,
        50344734,
        50347788,
        50347741,
        50345949,
        50345831,
        50345098,
        50346999,
        50343055,
        50344664,
        50342534,
        50342242,
        50342577,
        50345194,
        50344583,
        50343829,
        50343070,
        50346914,
        50342375,
        50343342,
        50347222,
        50346365,
        50343488,
        50346707,
        50345940,
        50345113,
        50342762,
        50344587,
        50345045,
        50346280,
        50345062,
        50342853,
        50347169,
        50343737,
        50343783,
        50342353,
        50344792,
        50348234,
        50342023,
        50346211,
        50343463,
        50344009,
        50341993,
        50344429,
        50343523,
        50346678,
        50344702,
        50344897,
        50342044,
        50342936,
        50345221,
        50342616,
        50342017,
        50342386,
        50345339,
        50342490,
        50343823,
        50344862,
        50341970,
        50343478,
        50345827,
        50345303,
        50343578,
        50345811,
        50342959,
        50347010,
        50342488,
        50345288,
        50343871,
        50342447,
        50347279,
        50343213,
        50342693,
        50345922,
        50347395,
        50342461,
        50344318,
        50344330,
        50342120,
        50342130,
        50341859,
        50342479,
        50344796,
        50344237,
        50342204,
        50341926,
        50342558,
        50342122,
        50342606,
        50341906,
        50341991,
        50343041,
        50343285,
        50347202,
        50342289,
        50342049,
        50342215,
        50342960,
        50342586,
        50342063,
        50341905,
        50342067,
        50346285,
        50343738,
        50342121,
        50345742,
        50343237,
        50343208,
        50344016,
        50341807,
        50344692,
        50342958,
        50344406,
        50341867,
        50342615,
        50343138,
        50342085,
        50344521,
        50344394,
        50343188,
        50342217,
        50342446,
        50346722,
        50346266,
        50343273,
        50345080,
        50342671,
        50341877,
        50342975,
        50342362,
        50342944,
        50345535,
        50343459,
        50345766,
        50342560,
        50341862,
        50343627,
        50342709,
        50344530,
        50341872,
        50344317,
        50343916,
        50344003,
        50343892,
        50346325,
        50343666,
        50343039,
        50342952,
        50342205,
        50342842,
        50342751,
        50342623,
        50342468,
        50342292,
        50342228,
        50342094,
        50341918,
        50341823,
        50342193,
        50342197,
        50343205,
        50342506,
        50344715,
        50343320,
        50343148,
        50344457,
        50344826,
        50344221,
        50342043,
        50342570,
        50343339,
        50342780,
        50343198,
        50344074,
        50343253,
        50348655,
        50347813,
        50347716,
        50348313,
        50343837,
        50348083,
        50347030,
        50344387,
        50345512,
        50342030,
        50344091,
        50344242,
        50345487
      ],
      "score": 2342,
      "time": 1793643688,
      "title": "Astra can read and write weights to improve Qwen",
      "type": "story",
      "url": "https://rikiyat.github.io/blog/weight-space-programming/"
    },
    {
      "by": "polpenn",
      "descendants": 52,
      "id": 50346981,
      "kids": [
        50348084,
        50347818,
        50347933,
        50347483,
        50347461,
        50348451,
        50347626,
        50347177,
        50347397,
        50347339,
        50347166,
        50347807,
        50348319,
        50347281,
        50348148,
        50347331,
        50347580,
        50347377,
        50348495,
        50347498,
        50347599,
        50347695,
        50347282,
        50348674,
        50348362,
        50347948,
        50347189
      ],
      "score": 158,
      "text": "I thought it would be fun to browse HN as if it were a newspaper. The site updates once an hour. Enjoy!",
      "time": 1793670814,
      "title": "Show HN: Hacker Times, a New York Times-inspired version of Hacker News",
      "type": "story",
      "url": "https://hackertimes.ca/"
    },
    {
      "by": "bpierre",
      "descendants": 26,
      "id": 50346849,
      "kids": [
        50347035,
        50347612,
        50347855,
        50347258,
        50347472,
        50347236,
        50348090,
        50347865,
        50347231,
        50347230,
        50347462
      ],
      "score": 118,
      "time": 1793669623,
      "title": "DiscImageStudio: burn visible artwork onto CDs, DVDs and Blu-ray discs",
      "type": "story",
      "url": "https://github.com/JiaFeiMiao-K-Cat/DiscImageStudio"
    },
    {
      "by": "ymz5",
      "descendants": 7,
      "id": 50334523,
      "kids": [
        50348207
      ],
      "score": 33,
      "time": 1793609913,
      "title": "European RISC-V Industrial Computing Initiative",
      "type": "story",
      "url": "https://erici.eu"
    },
    {
      "by": "makeramen",
      "descendants": 66,
      "id": 50345924,
      "kids": [
        50348485,
        50347625,
        50347475,
        50347773,
        50348177,
        50348128,
        50347832,
        50347798,
        50347422,
        50348187,
        50347709,
        50347469
      ],
      "score": 155,
      "time": 1793663276,
      "title": "Scaling Git at OpenAI",
      "type": "story",
      "url": "https://openai.com/index/scaling-git-at-openai/"
    },
    {
      "by": "aarushyadav",
      "descendants": 324,
      "id": 50340088,
      "kids": [
        50341512,
        50341600,
        50340809,
        50343504,
        50342704,
        50341464,
        50348585,
        50347050,
        50342985,
        50345498,
        50340741,
        50340811,
        50342003,
        50343860,
        50341554,
        50340390,
        50345332,
        50348336,
        50341083,
        50341091,
        50343020,
        50346752,
        50345137,
        50343644,
        50340712,
        50341688,
        50340489,
        50341108,
        50341204,
        50340356,
        50340433,
        50347735,
        50342860,
        50344037,
        50347337,
        50340875,
        50346051,
        50343280,
        50340545,
        50345178,
        50346787,
        50347753,
        50344732,
        50341965,
        50340604,
        50341407,
        50340943,
        50344589,
        50340360,
        50346412,
        50346331,
        50343643,
        50342872,
        50346491,
        50341107,
        50342194,
        50342258,
        50346926,
        50340365,
        50340459,
        50340800,
        50340516,
        50344821,
        50343632,
        50341102,
        50345419,
        50343982,
        50344132,
        50341640,
        50346157,
        50341853,
        50340924,
        50340464,
        50342266,
        50346253,
        50343283,
        50345611,
        50342077,
        50342214,
        50340706,
        50341248,
        50341244,
        50340984,
        50341413,
        50344485,
        50341258,
        50340949,
        50344223,
        50344953,
        50341929,
        50340646,
        50340999,
        50344540,
        50346025,
        50343351,
        50345049,
        50346199,
        50340370,
        50340832,
        50341500,
        50341669,
        50341852,
        50341325,
        50343487,
        50343978,
        50340729,
        50343182,
        50341449,
        50341031,
        50341998,
        50341944,
        50341813,
        50341024,
        50344279,
        50341480,
        50341990,
        50340887,
        50340372,
        50348665,
        50346729,
        50340848,
        50343828,
        50341590,
        50340650,
        50341555,
        50340967,
        50341553,
        50340813,
        50340089,
        50340339,
        50342045
      ],
      "score": 631,
      "text": "Hi HN, we&#x27;re Aarush and Arnav from The Subvocal Company (YC F26) (<a href=\"https:&#x2F;&#x2F;subvocal.company&#x2F;\">https:&#x2F;&#x2F;subvocal.company&#x2F;</a>). We’re building smart glasses that let you talk to your computer without talking out loud. You can mouth words silently and discreetly and the glasses decode them to text at the speed of speech.<p>Here&#x27;s a video of Dave from YC trying it out: <a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=9QdX1eObVYI\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=9QdX1eObVYI</a><p>(Edit: you don&#x27;t actually have to move your lips or even open your mouth for this to work! Since the RF can see inside your mouth the system can be fine tuned on &quot;internal speech&quot;. This isn&#x27;t the automatic tongue movements that occur when &quot;thinking&quot; words to yourself, but more like mouthing with your lips closed. It&#x27;s a bit weird to do, but with practice, we have been able to get it down pretty well.)<p>Arnav and I were studying CS at Georgia Tech at the beginning of the year, with no experience in silent speech or sensing. We were both AI-native builders and power users of Wispr Flow. What bugged us was not being able to use these tools in the library (or an office) or in public. At Stanford’s TreeHacks in February, we decided to build the most technically ridiculous thing we could think of. We’d read about AlterEgo, a silent speech system out of MIT’s Media Lab, and wanted to recreate it in 36 hours. We built a crude prototype, sticking EMG electrodes onto my face:<p><a href=\"https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1mwhv5HZMz3UTevdrgwS5O7g2jWV0K9r2&#x2F;view?usp=sharing\" rel=\"nofollow\">https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1mwhv5HZMz3UTevdrgwS5O7g2jWV...</a><p>We got it to kind of work at a letter level in a very janky way. It wasn’t good enough to win the hackathon, but convinced us to go all in. The first time I typed a sentence without anyone noticing, I felt the magic of the technology.<p>We quickly realized EMG (reading muscle electrical signals) wouldn’t work:<p>- Signal changes due to sweat<p>- Electrical interference<p>- Placement variability<p>- Most importantly, no one wants to stick electrodes onto their face!!<p>So we switched to RF and built the glasses you see now. They emit radio waves, similar to Bluetooth, that pass through your face. As they cross the tongue, lips and soft palate, they’re modulated by silent mouthing. We train foundation models on this data to decode these perturbations to text.<p>Despite prior academic research, getting this to work was a huge engineering challenge. First we built an extremely low noise RF sensing stack. Then we had to place antennas so their fields overlapped maximally with the articulators. Our first attempt on glasses failed completely, so we reverted to old habits and taped antennas on our face:<p><a href=\"https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1ks0dS0eZiTV9EqSFsyB_w5BBjpcBAfX-&#x2F;view?usp=sharing\" rel=\"nofollow\">https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1ks0dS0eZiTV9EqSFsyB_w5BBjpc...</a><p>Since taping antennas consistently in the same spot and angle was hard, we created this weird but effective head rig to hold them in place:<p><a href=\"https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1rhzNFpdDzr7oHk0isFY70dkoV4CAF1pT&#x2F;view?usp=sharing\" rel=\"nofollow\">https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1rhzNFpdDzr7oHk0isFY70dkoV4C...</a><p>This worked, but obviously wasn’t a product yet. So we worked deep in simulations to design glasses that could hold the antennas.<p>That evolved into our design now, with antennas embedded within the frames. Once we established there was a signal, the next hurdle was cross-user generalization. Everyone’s facial anatomy, and hence RF signal patterns, are vastly different. We tried algorithmic workarounds but realized the only lever was to massively scale pretraining data.<p>So that’s what we did. We set up booths in our office and paid people to read prompts wearing our glasses, to pretrain our models on. This produced a beautiful scaling curve, with errors falling quickly as we scaled our dataset and cross-user performance becoming genuinely compelling (as you see in the video above; Dave only had a short 20-sentence calibration).<p>We always heard about building things from first principles but never understood it before this. We tried tackling it top down but completely failed. Only when we broke each component (the antenna, electronics, ML) down to its fundamentals to understand and optimize it did we get it to work really well.<p>Over the next few months we’re continuing R&amp;D to turn our prototype glasses into the slick product on our website and ship in Q1 2027. We’re also scaling up our dataset to improve performance on edge cases.<p>For anyone who loves voice dictation but hates using it around people, we’ve opened preorders for our first batch of 500 units, with a $200 discount off the final price. Allocation is running out quickly, so get yours at <a href=\"https:&#x2F;&#x2F;subvocal.co&#x2F;preorder\" rel=\"nofollow\">https:&#x2F;&#x2F;subvocal.co&#x2F;preorder</a>!",
      "time": 1793639777,
      "title": "Show HN: Subvocal – Talk to your computer without making noise",
      "type": "story"
    },
    {
      "by": "xoobdev",
      "descendants": 343,
      "id": 50339397,
      "kids": [
        50340523,
        50340940,
        50340621,
        50341092,
        50340874,
        50348080,
        50346933,
        50340517,
        50345030,
        50348474,
        50341025,
        50340831,
        50347804,
        50343709,
        50346363,
        50341438,
        50342627,
        50342209,
        50343544,
        50343252,
        50343243,
        50342500,
        50341273,
        50344209,
        50341138,
        50342156,
        50347391,
        50341763,
        50341014,
        50342983,
        50342355,
        50345152,
        50341203,
        50343181,
        50342981,
        50341349,
        50346124,
        50342378,
        50344248,
        50341012,
        50344198,
        50343710,
        50342745,
        50341660,
        50340566,
        50340842,
        50340470,
        50347001,
        50346973,
        50341055,
        50340719,
        50344174,
        50345547,
        50341399,
        50340906,
        50340408,
        50345577,
        50340424,
        50342039,
        50341021
      ],
      "score": 343,
      "time": 1793637276,
      "title": "US boy names that became girl names and vice versa",
      "type": "story",
      "url": "https://namedaisy.com/blog/boy-names-that-became-girl-names"
    },
    {
      "by": "knlb",
      "descendants": 27,
      "id": 50323123,
      "kids": [
        50348734,
        50348146,
        50348673,
        50335691,
        50348503,
        50347736,
        50347991,
        50348254,
        50347745,
        50347953
      ],
      "score": 71,
      "time": 1793513610,
      "title": "Resisting Cognitive Surrender",
      "type": "story",
      "url": "https://knlb.dev/essays/surrender"
    },
    {
      "by": "ingve",
      "descendants": 103,
      "id": 50336518,
      "kids": [
        50338928,
        50339351,
        50348656,
        50343664,
        50339917,
        50348428,
        50347401,
        50345156,
        50339250,
        50339928,
        50341644,
        50339142,
        50343032,
        50344202,
        50343107,
        50345961,
        50343131,
        50345964,
        50342873,
        50339591,
        50344281,
        50344316,
        50346372,
        50346193,
        50339385,
        50342934,
        50347623,
        50342180,
        50342047,
        50347205,
        50344531,
        50339721,
        50342727,
        50339353,
        50339926,
        50345139,
        50339215,
        50346336,
        50347017,
        50339227,
        50346092,
        50339954,
        50339480,
        50342676,
        50340326,
        50340290,
        50339929,
        50340006,
        50339707,
        50339234,
        50339831,
        50343011,
        50348727,
        50347044,
        50347284,
        50340034,
        50339771,
        50339989,
        50344848
      ],
      "score": 476,
      "time": 1793625935,
      "title": "If you love a website, back it up",
      "type": "story",
      "url": "https://blog.mistys-internet.website/post/2026/10/29/if-you-love-a-website-back-it-up/"
    },
    {
      "by": "teleforce",
      "descendants": 0,
      "id": 50347464,
      "score": 16,
      "time": 1793674724,
      "title": "Open-Source 5G Ran Platforms: A Dual Perspective on Performance and Capabilities",
      "type": "story",
      "url": "https://arxiv.org/abs/2608.25820"
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
      "reactions": 13,
      "comments": 17,
      "reading_time": 2,
      "author": "dhananjay_mundhada_02c326"
    },
    {
      "title": "Your First Project Will Be Bad. Build It Anyway. 🚀",
      "description": "🚀 Your First Project Will Be Bad. Build It Anyway.   You don't need to know everything...",
      "url": "https://dev.to/dev-amna/your-first-project-will-be-bad-build-it-anyway-1b64",
      "tags": "beginners, webdev, programming, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "dev-amna"
    },
    {
      "title": "Why Most Cybersecurity Training Fails (And What Actually Works",
      "description": "Disclosure: I'm on the team behind VailDebug, a hands-on security training platform, and this post...",
      "url": "https://dev.to/jiggy_68963f87b3e0ef224bf/why-most-cybersecurity-training-fails-and-what-actually-works-29a3",
      "tags": "cybersecurity, beginners, learning, career",
      "reactions": 3,
      "comments": 0,
      "reading_time": 3,
      "author": "jiggy_68963f87b3e0ef224bf"
    },
    {
      "title": "𝗠𝘆 𝗶𝗻𝘁𝗲𝗿𝘃𝗶𝗲𝘄 𝗷𝗼𝘂𝗿𝗻𝗲𝘆 𝗮𝘁 𝗛𝘂𝗴𝗵𝗲𝘀 𝗦𝘆𝘀𝘁𝗶𝗾𝘂𝗲 𝗖𝗼𝗿𝗽𝗼𝗿𝗮𝘁𝗶𝗼𝗻 — 𝗳𝗿𝗼𝗺 𝗢𝗔 𝘁𝗼 𝘁𝗲𝗰𝗵𝗻𝗶𝗰𝗮𝗹 𝗶𝗻𝘁𝗲𝗿𝘃𝗶𝗲𝘄𝘀. 💻",
      "description": "What does Java Based Interview at Hugues Systique Corporation look like?  Recently I had gone through...",
      "url": "https://dev.to/nikhil_vectornd/--5ghp",
      "tags": "career, interview, java, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "nikhil_vectornd"
    },
    {
      "title": "The 10 AI system design questions that actually come up, and one way to answer all of them",
      "description": "If you have an AI engineer onsite coming up, the round to worry about is system design. It runs 45 to...",
      "url": "https://dev.to/landedjobs/the-10-ai-system-design-questions-that-actually-come-up-and-one-way-to-answer-all-of-them-2m77",
      "tags": "ai, career, interview, systemdesign",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "landedjobs"
    },
    {
      "title": "Cómo decidir qué herramienta pequeña construir cuando trabajas solo",
      "description": "Cuando desarrollas por tu cuenta, el cuello de botella no suele ser escribir código.  Es elegir qué...",
      "url": "https://dev.to/pablotheblink/como-decidir-que-herramienta-pequena-construir-cuando-trabajas-solo-143",
      "tags": "discuss, career, indie, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "pablotheblink"
    },
    {
      "title": "Leaving Before Day 180 of Your I-140 Approval: What You Keep",
      "description": "An H-1B worker had to quit about 100 days after their I-140 was approved. What the 180-day rule really changes, and what stays yours even if the employer withdraws.",
      "url": "https://dev.to/aimpexresources/leaving-before-day-180-of-your-i-140-approval-what-you-keep-45b1",
      "tags": "h1b, greencard, immigration, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "aimpexresources"
    },
    {
      "title": "I deleted 2,000 lines of code and shipped zero new features. It was the best thing I did all year.",
      "description": "The biggest pull request I opened all year was two thousand lines long. And every single one of them...",
      "url": "https://dev.to/infoinlet1/i-deleted-2000-lines-of-code-and-shipped-zero-new-features-it-was-the-best-thing-i-did-all-year-11m4",
      "tags": "webdev, programming, career, discuss",
      "reactions": 11,
      "comments": 1,
      "reading_time": 7,
      "author": "infoinlet1"
    },
    {
      "title": "A month of daily job-ad counts from Praca pl: the weekly rhythm, and pay transparency inching up",
      "description": "Most job-market figures come out once a month. I have been counting the live ads on Praca pl, one of...",
      "url": "https://dev.to/listingworks/a-month-of-daily-job-ad-counts-from-praca-pl-the-weekly-rhythm-and-pay-transparency-inching-up-o7h",
      "tags": "datascience, opendata, poland, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "listingworks"
    },
    {
      "title": "How Journalists Find Sources on Twitter, and How to Be One",
      "description": "Crypto reporters scan X for sources on deadline. How they find people to quote, what makes a post quotable, and the etiquette that keeps them coming back.",
      "url": "https://dev.to/shilika/how-journalists-find-sources-on-twitter-and-how-to-be-one-62",
      "tags": "marketing, startup, web3, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "shilika"
    }
  ]
}
```

