# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-01 06:24:14 UTC

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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8814,
      "added_stars": 3718,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9491,
      "added_stars": 4575,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7014,
      "added_stars": 5309,
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
      "forks": 7691,
      "added_stars": 2640,
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
      "author": "google-gemini",
      "repo": "gemini-cli",
      "avatar": "https://github.com/google-gemini.png",
      "repo_link": "https://github.com/google-gemini/gemini-cli",
      "desc": "An open-source AI agent that brings the power of Gemini directly into your terminal.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 14904,
      "added_stars": 997,
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
      "author": "CopilotKit",
      "repo": "OpenBot",
      "avatar": "https://github.com/CopilotKit.png",
      "repo_link": "https://github.com/CopilotKit/OpenBot",
      "desc": "Open-source AI coworkers that each get a computer of their own: a browser, files and tools, with every action decided before it happens and recorded after. Bring any AG-UI agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1149,
      "added_stars": 2086,
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
      "author": "anthropics",
      "repo": "sandbox-runtime",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/sandbox-runtime",
      "desc": "A lightweight sandboxing tool for enforcing filesystem and network restrictions on arbitrary processes at the OS level, without requiring a container.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 615,
      "added_stars": 518,
      "builtBy": [
        {
          "username": "ig-ant",
          "href": "https://github.com/ig-ant",
          "avatar": "https://avatars.githubusercontent.com/u/278458262"
        },
        {
          "username": "elhajjj",
          "href": "https://github.com/elhajjj",
          "avatar": "https://avatars.githubusercontent.com/u/19651160"
        },
        {
          "username": "ronleizrowice-ant",
          "href": "https://github.com/ronleizrowice-ant",
          "avatar": "https://avatars.githubusercontent.com/u/272939801"
        },
        {
          "username": "shawnm-anthropic",
          "href": "https://github.com/shawnm-anthropic",
          "avatar": "https://avatars.githubusercontent.com/u/227474143"
        },
        {
          "username": "ollie-anthropic",
          "href": "https://github.com/ollie-anthropic",
          "avatar": "https://avatars.githubusercontent.com/u/159198875"
        }
      ]
    },
    {
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9436,
      "added_stars": 1572,
      "builtBy": [
        {
          "username": "ruvnet",
          "href": "https://github.com/ruvnet",
          "avatar": "https://avatars.githubusercontent.com/u/2934394"
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
          "username": "proffesor-for-testing",
          "href": "https://github.com/proffesor-for-testing",
          "avatar": "https://avatars.githubusercontent.com/u/214853444"
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
      "forks": 379,
      "added_stars": 5738,
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
      "author": "makecindy",
      "repo": "cindy",
      "avatar": "https://github.com/makecindy.png",
      "repo_link": "https://github.com/makecindy/cindy",
      "desc": "Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1052,
      "added_stars": 4977,
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
      "forks": 445,
      "added_stars": 3533,
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
      "forks": 2451,
      "added_stars": 4995,
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
      "author": "microsoft",
      "repo": "skill-recorder",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/skill-recorder",
      "desc": "Desktop app that records your on-screen work session and uses the GitHub Copilot SDK to reconstruct it as an intent + ordered steps, then builds a reusable Skill or Automation for Microsoft Autopilots like Scout, Microsoft Copilot Cowork, or Copilot Studio.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 639,
      "added_stars": 1235,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5707,
      "added_stars": 2397,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6178,
      "added_stars": 4435,
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
      "forks": 1371,
      "added_stars": 3842,
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
      "author": "langfuse",
      "repo": "langfuse",
      "avatar": "https://github.com/langfuse.png",
      "repo_link": "https://github.com/langfuse/langfuse",
      "desc": "🪢 Open source agent evals & observability: Trace, evaluate, and improve LLM applications with one open platform.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4134,
      "added_stars": 469,
      "builtBy": [
        {
          "username": "marcklingen",
          "href": "https://github.com/marcklingen",
          "avatar": "https://avatars.githubusercontent.com/u/2834609"
        },
        {
          "username": "maxdeichmann",
          "href": "https://github.com/maxdeichmann",
          "avatar": "https://avatars.githubusercontent.com/u/17686849"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Steffen911",
          "href": "https://github.com/Steffen911",
          "avatar": "https://avatars.githubusercontent.com/u/14163614"
        },
        {
          "username": "nimarb",
          "href": "https://github.com/nimarb",
          "avatar": "https://avatars.githubusercontent.com/u/246059"
        }
      ]
    },
    {
      "author": "anomalyco",
      "repo": "opencode",
      "avatar": "https://github.com/anomalyco.png",
      "repo_link": "https://github.com/anomalyco/opencode",
      "desc": "The open source coding agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 30053,
      "added_stars": 2880,
      "builtBy": [
        {
          "username": "thdxr",
          "href": "https://github.com/thdxr",
          "avatar": "https://avatars.githubusercontent.com/u/826656"
        },
        {
          "username": "rekram1-node",
          "href": "https://github.com/rekram1-node",
          "avatar": "https://avatars.githubusercontent.com/u/63023139"
        },
        {
          "username": "adamdotdevin",
          "href": "https://github.com/adamdotdevin",
          "avatar": "https://avatars.githubusercontent.com/u/2363879"
        },
        {
          "username": "kitlangton",
          "href": "https://github.com/kitlangton",
          "avatar": "https://avatars.githubusercontent.com/u/7587245"
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
      "forks": 1395,
      "added_stars": 85,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 18812,
      "added_stars": 4569,
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
      "forks": 5138,
      "added_stars": 7929,
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
      "author": "caddyserver",
      "repo": "caddy",
      "avatar": "https://github.com/caddyserver.png",
      "repo_link": "https://github.com/caddyserver/caddy",
      "desc": "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5223,
      "added_stars": 2611,
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
      "added_stars": 1898,
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
      "author": "Agent-Field",
      "repo": "CodeAF",
      "avatar": "https://github.com/Agent-Field.png",
      "repo_link": "https://github.com/Agent-Field/CodeAF",
      "desc": "Open-Source Software factory for Open Models",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 72,
      "added_stars": 433,
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
      "forks": 1109,
      "added_stars": 918,
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
      "forks": 5899,
      "added_stars": 460,
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
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 812,
      "added_stars": 797,
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
      "author": "oauth2-proxy",
      "repo": "oauth2-proxy",
      "avatar": "https://github.com/oauth2-proxy.png",
      "repo_link": "https://github.com/oauth2-proxy/oauth2-proxy",
      "desc": "A reverse proxy that provides authentication with Google, Azure, OpenID Connect and many more identity providers.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2260,
      "added_stars": 296,
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
      "author": "llm-d",
      "repo": "llm-d-router",
      "avatar": "https://github.com/llm-d.png",
      "repo_link": "https://github.com/llm-d/llm-d-router",
      "desc": "llm-d Router: The intelligent entry point for inference requests",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 498,
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
      "author": "kubernetes",
      "repo": "kubernetes",
      "avatar": "https://github.com/kubernetes.png",
      "repo_link": "https://github.com/kubernetes/kubernetes",
      "desc": "Production-Grade Container Scheduling and Management",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 45729,
      "added_stars": 1691,
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
      "author": "Asymptote-Labs",
      "repo": "agent-beacon",
      "avatar": "https://github.com/Asymptote-Labs.png",
      "repo_link": "https://github.com/Asymptote-Labs/agent-beacon",
      "desc": "The cross-harness, self-improving memory layer for AI agents. Join our community: https://discord.com/invite/zdNChS2fBu",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 264,
      "added_stars": 1272,
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
      "author": "microsoft",
      "repo": "TypeScript",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/TypeScript",
      "desc": "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 15426,
      "added_stars": 672,
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
      "forks": 21012,
      "added_stars": 1819,
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
      "forks": 1462,
      "added_stars": 469,
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
      "author": "Gentleman-Programming",
      "repo": "engram",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/engram",
      "desc": "Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5, MCP server, HTTP API, CLI, and TUI.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 814,
      "added_stars": 800,
      "builtBy": [
        {
          "username": "dnlrsls",
          "href": "https://github.com/dnlrsls",
          "avatar": "https://avatars.githubusercontent.com/u/111561081"
        },
        {
          "username": "Alan-TheGentleman",
          "href": "https://github.com/Alan-TheGentleman",
          "avatar": "https://avatars.githubusercontent.com/u/6935240"
        },
        {
          "username": "danielgap",
          "href": "https://github.com/danielgap",
          "avatar": "https://avatars.githubusercontent.com/u/5764171"
        },
        {
          "username": "egdev6",
          "href": "https://github.com/egdev6",
          "avatar": "https://avatars.githubusercontent.com/u/18334564"
        },
        {
          "username": "Reaan06",
          "href": "https://github.com/Reaan06",
          "avatar": "https://avatars.githubusercontent.com/u/231132982"
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
      "forks": 544,
      "added_stars": 1283,
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
      "author": "keploy",
      "repo": "keploy",
      "avatar": "https://github.com/keploy.png",
      "repo_link": "https://github.com/keploy/keploy",
      "desc": "Open-source platform for creating safe, isolated production sandboxes for API, integration, and E2E testing.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2442,
      "added_stars": 531,
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
      "author": "tailscale",
      "repo": "tailscale",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailscale",
      "desc": "The easiest, most secure way to use WireGuard and 2FA.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3404,
      "added_stars": 1494,
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3779,
      "added_stars": 8375,
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
      "forks": 10766,
      "added_stars": 47234,
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
      "author": "earthtojake",
      "repo": "text-to-cad",
      "avatar": "https://github.com/earthtojake.png",
      "repo_link": "https://github.com/earthtojake/text-to-cad",
      "desc": "Design physical products with AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2355,
      "added_stars": 8092,
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
      "forks": 4749,
      "added_stars": 8525,
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
      "forks": 3325,
      "added_stars": 6891,
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
      "forks": 9559,
      "added_stars": 21482,
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
      "author": "danyuchn",
      "repo": "asd-ste100-skill",
      "avatar": "https://github.com/danyuchn.png",
      "repo_link": "https://github.com/danyuchn/asd-ste100-skill",
      "desc": "ASD-STE100 Simplified Technical English rules, repurposed as a Claude Code skill for rewriting ambiguous agent-facing English.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 343,
      "added_stars": 3595,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2052,
      "added_stars": 5009,
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
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6495,
      "added_stars": 12117,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5217,
      "added_stars": 7040,
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
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use Claude Code, Codex, Antigravity, VSCode, Pi, and OpenCode (and 6 other harnesses) for free (1.3B+ free tokens) from your terminal, app, IDE, or phone, and now from the browser with native browser sessions (multi-harness + multi-model) like OpenClaw (voice supported + ToS friendly)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10210,
      "added_stars": 9713,
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
      "author": "calesthio",
      "repo": "OpenMontage",
      "avatar": "https://github.com/calesthio.png",
      "repo_link": "https://github.com/calesthio/OpenMontage",
      "desc": "World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9712,
      "added_stars": 12228,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn AI Engineering! Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13442,
      "added_stars": 14370,
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
      "author": "luongnv89",
      "repo": "claude-howto",
      "avatar": "https://github.com/luongnv89.png",
      "repo_link": "https://github.com/luongnv89/claude-howto",
      "desc": "A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5676,
      "added_stars": 4742,
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
      "author": "Kruk2",
      "repo": "jasna",
      "avatar": "https://github.com/Kruk2.png",
      "repo_link": "https://github.com/Kruk2/jasna",
      "desc": "Video restoration tool",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 344,
      "added_stars": 2319,
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
      "forks": 12568,
      "added_stars": 7921,
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
          "username": "anupamme",
          "href": "https://github.com/anupamme",
          "avatar": "https://avatars.githubusercontent.com/u/667857"
        },
        {
          "username": "harshitanand",
          "href": "https://github.com/harshitanand",
          "avatar": "https://avatars.githubusercontent.com/u/8389627"
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
      "reactions": 23,
      "comments": 24,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Giving AI Pain: The Architecture of Synthetic Scars & The Rapid-Regret Miner",
      "description": "Why 90% of AI coding frustration comes from the Quota vs. Prompt-Compliance Death Loop, why Rich Sutton's Bitter Lesson fails in open-world software, and how we compile mid-flight collisions into 4-Vector Synthetic Scars and a Six-Pillar Critic.",
      "url": "https://dev.to/gde/giving-ai-pain-the-architecture-of-synthetic-scars-the-rapid-regret-miner-1740",
      "tags": "ai, programming, architecture, unix",
      "reactions": 16,
      "comments": 32,
      "reading_time": 29,
      "author": "randalschwartz"
    },
    {
      "title": "Build a production-style Autonomous SRE Command Center using Gemini 4 Argon",
      "description": "When a production Kubernetes cluster starts throwing 5xx errors , the hardest part of incident...",
      "url": "https://dev.to/gde/build-a-production-style-autonomous-sre-command-center-using-gemini-4-argon-759",
      "tags": "sre, kubernetes, ai, googlecloud",
      "reactions": 12,
      "comments": 1,
      "reading_time": 5,
      "author": "saurabhmi"
    },
    {
      "title": "Your DEV posts have a beautiful new share card ✨",
      "description": "The image that shows up when you share a DEV post just got a brand-new look!  I got to work on...",
      "url": "https://dev.to/devteam/your-dev-posts-have-a-beautiful-new-share-card-4be8",
      "tags": "devto, showdev, opensource, design",
      "reactions": 158,
      "comments": 35,
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
      "comments": 47,
      "reading_time": 6,
      "author": "sizzlebop"
    },
    {
      "title": "Welcome Thread - v399",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v400-fho",
      "tags": "welcome",
      "reactions": 54,
      "comments": 322,
      "reading_time": 1,
      "author": "sloan"
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
      "title": "A brief history of just-in-time (2003)",
      "url": "https://dl.acm.org/doi/10.1145/857076.857077",
      "score": 1,
      "comments": 0,
      "tags": [
        "compilers",
        "historical",
        "pdf"
      ],
      "id": "h6dt6e"
    },
    {
      "title": "Introducing Kwi, a new KDE terminal emulator",
      "url": "https://blogs.kde.org/2026/11/01/introducing-kwi/",
      "score": 10,
      "comments": 4,
      "tags": [
        "linux"
      ],
      "id": "lt44rt"
    },
    {
      "title": "The Duty of a Scholar",
      "url": "https://www.daemonology.net/blog/2026-10-31-The-Duty-of-a-Scholar.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "cryptography",
        "freebsd",
        "security"
      ],
      "id": "vo4337"
    },
    {
      "title": "Effective Type: Part 1",
      "url": "https://uecker.codeberg.page/2026-10-31.html",
      "score": 3,
      "comments": 0,
      "tags": [
        "c"
      ],
      "id": "ukcfap"
    },
    {
      "title": "Novellas with groff",
      "url": "https://movq.de/blog/postings/2026-10-31/0/POSTING-en.html",
      "score": 10,
      "comments": 1,
      "tags": [
        "unix"
      ],
      "id": "54xwm8"
    },
    {
      "title": "A game scripting language that runs speech-to-text 5x faster than llama.cpp on CPU",
      "url": "https://dasllama.io/articles/2026-10-28-the-need-for-speed.html",
      "score": -3,
      "comments": 0,
      "tags": [
        "ai",
        "programming"
      ],
      "id": "zhyenw"
    },
    {
      "title": "Mystery of 60-Second Fluctuations in Power Grids Solved",
      "url": "https://www.fz-juelich.de/en/news/archive/press-release/2026/mystery-of-60-second-fluctuations-in-power-grids-solved",
      "score": 29,
      "comments": 9,
      "tags": [
        "science"
      ],
      "id": "qwou15"
    },
    {
      "title": "Avoid Public Functions Calling Other Public Functions",
      "url": "https://matklad.github.io/2026/10/29/pub-calls-pub.html",
      "score": 51,
      "comments": 8,
      "tags": [
        "api",
        "programming"
      ],
      "id": "k508we"
    },
    {
      "title": "Enlightenment 0.28.0 Release",
      "url": "https://www.enlightenment.org/news/2026-10-31-enlightenment-0.28.0",
      "score": 13,
      "comments": 1,
      "tags": [
        "linux",
        "release"
      ],
      "id": "fmawla"
    },
    {
      "title": "Speeding up GPU copies by permuting iteration spaces, or, optimising the identity function",
      "url": "https://futhark-lang.org/blog/2026-10-31-faster-copying.html",
      "score": 6,
      "comments": 2,
      "tags": [
        "compilers"
      ],
      "id": "1abkzu"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "karpathy",
      "descendants": 312,
      "id": 50319510,
      "kids": [
        50320462,
        50321152,
        50320482,
        50319961,
        50323124,
        50320675,
        50321483,
        50319987,
        50323023,
        50322487,
        50322984,
        50319936,
        50322413,
        50322981,
        50322395,
        50320230,
        50323015,
        50322877,
        50319765,
        50322795,
        50321002,
        50319845,
        50323137,
        50320309,
        50320887,
        50322862,
        50320117,
        50321263,
        50321416,
        50320429,
        50319962,
        50321113,
        50322124,
        50321537,
        50322905,
        50321790,
        50322586,
        50320222,
        50320064,
        50320102,
        50322588,
        50322744,
        50322468,
        50320490,
        50319736,
        50321753,
        50319949,
        50320964,
        50319965,
        50319874,
        50322153,
        50320994,
        50321903,
        50320738,
        50322688,
        50320827,
        50320899,
        50319997,
        50321626,
        50319756,
        50320384,
        50321076,
        50322479,
        50321700,
        50319890,
        50320632,
        50319784,
        50319967,
        50322293,
        50321955,
        50322534,
        50320783,
        50320852,
        50320370,
        50320853,
        50319953,
        50320066,
        50320435,
        50320413,
        50321084,
        50322628,
        50321782,
        50319922,
        50320059,
        50321703,
        50320717,
        50320885,
        50322421,
        50321286,
        50321466,
        50321822,
        50321585,
        50320426,
        50321044,
        50319856,
        50319947,
        50319996,
        50322309,
        50322327,
        50320604,
        50322011,
        50319994,
        50320037,
        50320848,
        50321599,
        50320986,
        50320198,
        50321097,
        50320427,
        50321705,
        50321118,
        50320562,
        50320237,
        50321890,
        50320193,
        50321747,
        50322511,
        50319833,
        50320394,
        50320056,
        50321218,
        50320998,
        50320980,
        50321521,
        50319893,
        50319843,
        50320920,
        50321514,
        50320460,
        50322696,
        50320424,
        50320396,
        50322168,
        50322912,
        50321344,
        50322195,
        50322097,
        50319511,
        50320041,
        50320741,
        50321254,
        50319903,
        50321369,
        50320187,
        50319753
      ],
      "score": 1027,
      "text": "YouTube-style UI over 6,454 videos sourced from 39,834 HN comments since 2007.<p><a href=\"https:&#x2F;&#x2F;hackertube.org&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;hackertube.org&#x2F;</a>",
      "time": 1793476613,
      "title": "HackerTube: YouTube built from videos recommended by HN",
      "type": "story",
      "url": "https://karpathy.bearblog.dev/hacker-tube/"
    },
    {
      "by": "ecares",
      "descendants": 80,
      "id": 50320963,
      "kids": [
        50321583,
        50321236,
        50321331,
        50322235,
        50322062,
        50321547,
        50322260,
        50322870,
        50321952,
        50321451,
        50321620,
        50321090
      ],
      "score": 294,
      "time": 1793486466,
      "title": "An Italian farmer found some unknown seeds in his attic and planted them",
      "type": "story",
      "url": "https://www.smithsonianmag.com/science-nature/italian-farmer-found-unknown-seeds-attic-with-nothing-lose-planted-them-result-biblical-180989644/"
    },
    {
      "by": "doodlesdev",
      "descendants": 24,
      "id": 50322173,
      "kids": [
        50322624,
        50322754,
        50322978,
        50322881,
        50322880,
        50322252
      ],
      "score": 67,
      "time": 1793499593,
      "title": "Brazilian Court Sanctions Lawyers for Prompt Injection in Court Filing",
      "type": "story",
      "url": "https://jetstream.security/insights/brazilian-court-sanctions-prompt-injection-filing/"
    },
    {
      "by": "oger",
      "descendants": 206,
      "id": 50319143,
      "kids": [
        50321127,
        50319726,
        50319570,
        50319664,
        50320477,
        50319571,
        50320580,
        50319761,
        50319519,
        50321255,
        50319762,
        50322061,
        50321212,
        50319518,
        50320143,
        50322804,
        50319886,
        50319553,
        50320018,
        50319584,
        50321763,
        50320070,
        50321618,
        50319657,
        50321283,
        50319161,
        50321590,
        50319629,
        50321109,
        50319623,
        50319473,
        50320982,
        50320658,
        50320575,
        50319622,
        50321175,
        50320674,
        50320134
      ],
      "score": 444,
      "time": 1793474190,
      "title": "TCP Use-After-Free: CVE-2026-98432 / CVSS 9.8",
      "type": "story",
      "url": "https://atlasum.net/blog/cve-2026-98432-linux-ipv4-tcp-uaf"
    },
    {
      "by": "guregodevo",
      "descendants": 92,
      "id": 50320995,
      "kids": [
        50321623,
        50321420,
        50322802,
        50321604,
        50323019,
        50321749,
        50321428,
        50323087,
        50321925,
        50322446,
        50323066,
        50322997,
        50321409,
        50320996,
        50321363,
        50321891,
        50322257,
        50321795,
        50321807,
        50322414
      ],
      "score": 168,
      "time": 1793486772,
      "title": "Memdoor: A team of 5 Qwen3.8-27B models beats Fable 5 on LiveCodeBench Hard",
      "type": "story",
      "url": "https://github.com/guregodevo/memdoor/tree/main/examples/workflows/team-solve"
    },
    {
      "by": "hapax_legomena",
      "descendants": 23,
      "id": 50322022,
      "kids": [
        50322635,
        50323116,
        50323026,
        50322684,
        50322682,
        50322769,
        50322967,
        50322656,
        50322748,
        50323133,
        50322191
      ],
      "score": 51,
      "time": 1793497589,
      "title": "Leaking Secrets from Air-Gap Computers by Spelling Radio Signals from RAM (2024)",
      "type": "story",
      "url": "https://arxiv.org/abs/2409.02292"
    },
    {
      "by": "peter_d_sherman",
      "descendants": 0,
      "id": 50309279,
      "score": 12,
      "time": 1793389976,
      "title": "Pilot-wave hydrodynamics (Quantum phenomena in macroscopic hydrodynamic systems)",
      "type": "story",
      "url": "http://thales.mit.edu/bush/index.php/4801-2/"
    },
    {
      "by": "uvdn7",
      "descendants": 4,
      "id": 50321048,
      "kids": [
        50322448,
        50322197,
        50322285,
        50322086,
        50322389,
        50321634,
        50321860
      ],
      "score": 86,
      "time": 1793487295,
      "title": "Altoids Project",
      "type": "story",
      "url": "https://uvdn7.github.io/altoids-project/"
    },
    {
      "by": "ohjeez",
      "descendants": 17,
      "id": 50311045,
      "kids": [
        50322159,
        50322756,
        50321726,
        50311870,
        50314377
      ],
      "score": 77,
      "time": 1793400063,
      "title": "Zinc creep in cable spelter sockets brought down the Arecibo telescope in 2020",
      "type": "story",
      "url": "https://maketecheasier.com/arecibo-zinc-creep-collapse/"
    },
    {
      "by": "ntur1337",
      "descendants": 47,
      "id": 50318720,
      "kids": [
        50319344,
        50320505,
        50320981,
        50321845,
        50321587,
        50321731,
        50321476
      ],
      "score": 173,
      "time": 1793471896,
      "title": "It's the memory latency, stupid",
      "type": "story",
      "url": "https://pivotlake.io/blog/its-the-memory-latency-stupid/"
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
      "title": "The SDLC is turning into an ADLC. Here's what changes.",
      "description": "This one is an opinion, from someone who just built a five-app product mostly by directing an AI....",
      "url": "https://dev.to/rakno/the-sdlc-is-turning-into-an-adlc-heres-what-changes-5di8",
      "tags": "ai, softwareengineering, discuss, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "rakno"
    },
    {
      "title": "The Scariest Word in a Codebase Is \"Temporary\"",
      "description": "It's Halloween, which means the internet is full of horror stories. Developers have their own kind....",
      "url": "https://dev.to/den0011/the-scariest-word-in-a-codebase-is-temporary-57f3",
      "tags": "discuss, career, programming, watercooler",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "den0011"
    },
    {
      "title": "¿Todavía es COBOL \"el\" motor de las aplicaciones financieras?",
      "description": "English version  Este es el primer blog de una serie que va a tratar de lecciones aprendidas durante...",
      "url": "https://dev.to/enrique_esquivel/todavia-es-cobol-el-motor-de-las-aplicaciones-financieras-5fnm",
      "tags": "career, management, spanish",
      "reactions": 0,
      "comments": 0,
      "reading_time": 12,
      "author": "enrique_esquivel"
    },
    {
      "title": "Before You Leave Tech, Separate These Three Decisions",
      "description": "When work starts to feel unsustainable, “Should I leave tech?” can sound like one decision. It often...",
      "url": "https://dev.to/lifebeyondtech/before-you-leave-tech-separate-these-three-decisions-3fi2",
      "tags": "career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "lifebeyondtech"
    },
    {
      "title": "Four small projects in five days, zero reactions, and what I learned anyway",
      "description": "A personal note from a developer in Varanasi: what I shipped, what the tests taught me, and what no reactions feels like.",
      "url": "https://dev.to/saurabh_pathak394/four-small-projects-in-five-days-zero-reactions-and-what-i-learned-anyway-2c5b",
      "tags": "career, webdev, ai, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "saurabh_pathak394"
    },
    {
      "title": "Why Hiring an Influencer for DevRel Fails",
      "description": "Why hiring an influencer for DevRel fails for developer tool startups, and an actionable framework for evaluating developer advocates who can actually build.",
      "url": "https://dev.to/harpreetsahota/why-hiring-an-influencer-for-devrel-fails-5b2e",
      "tags": "devrel, startup, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "harpreetsahota"
    },
    {
      "title": "Day 15 of 30: the halfway map, fourteen ideas worth keeping",
      "description": "Halfway through the series. Instead of a self-congratulating check-in, here's something more useful:...",
      "url": "https://dev.to/suraj_nandan/day-15-of-30-what-writing-daily-has-taught-me-so-far-36ff",
      "tags": "writing, career, learning, discuss",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "suraj_nandan"
    },
    {
      "title": "An AI Lab Published Science Results. Here Is What I Checked First",
      "description": "Everyone in my feed read the announcement as a scoreboard: three results, one in maths, one in...",
      "url": "https://dev.to/ekaputri_game/an-ai-lab-published-science-results-here-is-what-i-checked-first-2blg",
      "tags": "ai, discuss, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "ekaputri_game"
    },
    {
      "title": "WARN Act and Job References: What to Ask For Before Your Last Day",
      "description": "A WARN notice gives you time. Use some of it to sort out your references, because the law that...",
      "url": "https://dev.to/layoffatlas/warn-act-and-job-references-what-to-ask-for-before-your-last-day-41bh",
      "tags": "career, news, data, law",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "layoffatlas"
    },
    {
      "title": "Comcast's 912-Worker Three-State WARN Cluster: Three Filings, Two Effective Dates",
      "description": "Comcast's 912-Worker Three-State WARN Cluster: Three Filings, Two Effective Dates   Looked...",
      "url": "https://dev.to/layoffatlas/comcasts-912-worker-three-state-warn-cluster-three-filings-two-effective-dates-5cal",
      "tags": "career, news, data, hiring",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "layoffatlas"
    }
  ]
}
```

