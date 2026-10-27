# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-10-27 06:40:36 UTC

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
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9349,
      "added_stars": 2683,
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
      "author": "anomalyco",
      "repo": "opencode",
      "avatar": "https://github.com/anomalyco.png",
      "repo_link": "https://github.com/anomalyco/opencode",
      "desc": "The open source coding agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 29711,
      "added_stars": 5070,
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
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca is the place for working with a fleet of agents (e.g. Grok Bot, Claude Code). Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6770,
      "added_stars": 9241,
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
          "username": "orca-ide",
          "href": "https://github.com/orca-ide",
          "avatar": "https://avatars.githubusercontent.com/u/277417572"
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
      "forks": 6640,
      "added_stars": 5540,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8173,
      "added_stars": 1881,
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
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
        },
        {
          "username": "maria-rcks",
          "href": "https://github.com/maria-rcks",
          "avatar": "https://avatars.githubusercontent.com/u/254055478"
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
      "forks": 823,
      "added_stars": 2913,
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
      "author": "vercel-labs",
      "repo": "skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/skills",
      "desc": "The open agent skills tool - npx skills",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3163,
      "added_stars": 1076,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jonathanhefner",
          "href": "https://github.com/jonathanhefner",
          "avatar": "https://avatars.githubusercontent.com/u/771968"
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
      "forks": 1672,
      "added_stars": 3009,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5717,
      "added_stars": 4664,
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
      "author": "microsoft",
      "repo": "skill-recorder",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/skill-recorder",
      "desc": "Desktop app that records your on-screen work session and uses the GitHub Copilot SDK to reconstruct it as an intent + ordered steps, then builds a reusable Skill or Automation for Microsoft Autopilots like Scout, Microsoft Copilot Cowork, or Copilot Studio.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 592,
      "added_stars": 949,
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
      "author": "elie222",
      "repo": "rakazo",
      "avatar": "https://github.com/elie222.png",
      "repo_link": "https://github.com/elie222/rakazo",
      "desc": "Open-source Grok Bot alternative. Choose your own model and sandbox.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1053,
      "added_stars": 1195,
      "builtBy": [
        {
          "username": "elie222",
          "href": "https://github.com/elie222",
          "avatar": "https://avatars.githubusercontent.com/u/3090527"
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
          "username": "ald3b",
          "href": "https://github.com/ald3b",
          "avatar": "https://avatars.githubusercontent.com/u/3642270"
        },
        {
          "username": "fetw882",
          "href": "https://github.com/fetw882",
          "avatar": "https://avatars.githubusercontent.com/u/121428752"
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
      "forks": 592,
      "added_stars": 1085,
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
      "author": "thesysdev",
      "repo": "openui",
      "avatar": "https://github.com/thesysdev.png",
      "repo_link": "https://github.com/thesysdev/openui",
      "desc": "The Open Standard for Generative UI",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 933,
      "added_stars": 2053,
      "builtBy": [
        {
          "username": "i-subham23",
          "href": "https://github.com/i-subham23",
          "avatar": "https://avatars.githubusercontent.com/u/173032156"
        },
        {
          "username": "AbhinRustagi",
          "href": "https://github.com/AbhinRustagi",
          "avatar": "https://avatars.githubusercontent.com/u/55152006"
        },
        {
          "username": "ankit-thesys",
          "href": "https://github.com/ankit-thesys",
          "avatar": "https://avatars.githubusercontent.com/u/173031316"
        },
        {
          "username": "abhithesys",
          "href": "https://github.com/abhithesys",
          "avatar": "https://avatars.githubusercontent.com/u/157345590"
        },
        {
          "username": "zahlekhan",
          "href": "https://github.com/zahlekhan",
          "avatar": "https://avatars.githubusercontent.com/u/27266434"
        }
      ]
    },
    {
      "author": "PC2005-cloud",
      "repo": "dsh-pet",
      "avatar": "https://github.com/PC2005-cloud.png",
      "repo_link": "https://github.com/PC2005-cloud/dsh-pet",
      "desc": "DSH 桌面宠物：一行命令装好即用的透明动画小桌宠，支持多开、大小位置随心配置；还内置 DIY 素材链，能用 AI 视频自造专属宠物",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 335,
      "added_stars": 1594,
      "builtBy": [
        {
          "username": "PC2005-cloud",
          "href": "https://github.com/PC2005-cloud",
          "avatar": "https://avatars.githubusercontent.com/u/246970914"
        },
        {
          "username": "LACANIA",
          "href": "https://github.com/LACANIA",
          "avatar": "https://avatars.githubusercontent.com/u/245681743"
        },
        {
          "username": "Zn-Dk",
          "href": "https://github.com/Zn-Dk",
          "avatar": "https://avatars.githubusercontent.com/u/99525616"
        },
        {
          "username": "Free-LZJ",
          "href": "https://github.com/Free-LZJ",
          "avatar": "https://avatars.githubusercontent.com/u/121116847"
        },
        {
          "username": "SkanderBog",
          "href": "https://github.com/SkanderBog",
          "avatar": "https://avatars.githubusercontent.com/u/317299592"
        }
      ]
    },
    {
      "author": "croffasia",
      "repo": "itsaplan",
      "avatar": "https://github.com/croffasia.png",
      "repo_link": "https://github.com/croffasia/itsaplan",
      "desc": "⭐️⭐️⭐️ Open-source, self-hosted alternative to Linear and Plane. Project management and issue tracking where teams and AI agents work side by side to plan and ship products.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 261,
      "added_stars": 575,
      "builtBy": [
        {
          "username": "croffasia",
          "href": "https://github.com/croffasia",
          "avatar": "https://avatars.githubusercontent.com/u/696180"
        },
        {
          "username": "pasqualtroncone",
          "href": "https://github.com/pasqualtroncone",
          "avatar": "https://avatars.githubusercontent.com/u/271477"
        },
        {
          "username": "grootbro",
          "href": "https://github.com/grootbro",
          "avatar": "https://avatars.githubusercontent.com/u/177860649"
        },
        {
          "username": "OthmanAdi",
          "href": "https://github.com/OthmanAdi",
          "avatar": "https://avatars.githubusercontent.com/u/78882424"
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
      "forks": 14850,
      "added_stars": 1097,
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
      "author": "Vincentwei1021",
      "repo": "video-shotcraft",
      "avatar": "https://github.com/Vincentwei1021.png",
      "repo_link": "https://github.com/Vincentwei1021/video-shotcraft",
      "desc": "AI video skill for Claude Code & Codex — cinematic product videos with Remotion: 152 shot recipe cards, 209 motion previews, a production-ready template",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1278,
      "added_stars": 1297,
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
      "author": "iptv-org",
      "repo": "iptv",
      "avatar": "https://github.com/iptv-org.png",
      "repo_link": "https://github.com/iptv-org/iptv",
      "desc": "Collection of publicly available IPTV channels from all over the world",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8415,
      "added_stars": 1043,
      "builtBy": [
        {
          "username": "freearhey",
          "href": "https://github.com/freearhey",
          "avatar": "https://avatars.githubusercontent.com/u/7253922"
        },
        {
          "username": "BellezaEmporium",
          "href": "https://github.com/BellezaEmporium",
          "avatar": "https://avatars.githubusercontent.com/u/30985701"
        },
        {
          "username": "Dum4G",
          "href": "https://github.com/Dum4G",
          "avatar": "https://avatars.githubusercontent.com/u/5430116"
        },
        {
          "username": "UltraHDR",
          "href": "https://github.com/UltraHDR",
          "avatar": "https://avatars.githubusercontent.com/u/108294295"
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
      "author": "Gaurav-Gosain",
      "repo": "tuios",
      "avatar": "https://github.com/Gaurav-Gosain.png",
      "repo_link": "https://github.com/Gaurav-Gosain/tuios",
      "desc": "A terminal window manager that knows what your agents are doing. Tiling panes, workspaces, sessions that survive restarts, and one Inbox for every coding agent. Official only at tuios.dev and this repo. tuios has no X/Twitter account.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 281,
      "added_stars": 2403,
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
          "username": "davidreuss",
          "href": "https://github.com/davidreuss",
          "avatar": "https://avatars.githubusercontent.com/u/6885"
        },
        {
          "username": "cr2007",
          "href": "https://github.com/cr2007",
          "avatar": "https://avatars.githubusercontent.com/u/73425927"
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
      "forks": 5184,
      "added_stars": 2525,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 18630,
      "added_stars": 4153,
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
      "forks": 5064,
      "added_stars": 7733,
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
      "author": "Asymptote-Labs",
      "repo": "agent-beacon",
      "avatar": "https://github.com/Asymptote-Labs.png",
      "repo_link": "https://github.com/Asymptote-Labs/agent-beacon",
      "desc": "The cross-harness, self-improving memory layer for AI agents. Join our community: https://discord.com/invite/zdNChS2fBu",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 259,
      "added_stars": 1310,
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
      "author": "trufflesecurity",
      "repo": "trufflehog",
      "avatar": "https://github.com/trufflesecurity.png",
      "repo_link": "https://github.com/trufflesecurity/trufflehog",
      "desc": "Find, verify, and analyze leaked credentials",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2667,
      "added_stars": 720,
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
      "author": "lharries",
      "repo": "whatsapp-mcp",
      "avatar": "https://github.com/lharries.png",
      "repo_link": "https://github.com/lharries/whatsapp-mcp",
      "desc": "WhatsApp MCP server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1446,
      "added_stars": 443,
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
      "forks": 46364,
      "added_stars": 1564,
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
      "author": "Gentleman-Programming",
      "repo": "engram",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/engram",
      "desc": "Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5, MCP server, HTTP API, CLI, and TUI.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 799,
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
      "author": "urfave",
      "repo": "cli",
      "avatar": "https://github.com/urfave.png",
      "repo_link": "https://github.com/urfave/cli",
      "desc": "A declarative, simple, fast, and fun package for building command line tools in Go",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1853,
      "added_stars": 88,
      "builtBy": [
        {
          "username": "dearchap",
          "href": "https://github.com/dearchap",
          "avatar": "https://avatars.githubusercontent.com/u/3200486"
        },
        {
          "username": "meatballhat",
          "href": "https://github.com/meatballhat",
          "avatar": "https://avatars.githubusercontent.com/u/45143"
        },
        {
          "username": "jszwedko",
          "href": "https://github.com/jszwedko",
          "avatar": "https://avatars.githubusercontent.com/u/316880"
        },
        {
          "username": "coilysiren",
          "href": "https://github.com/coilysiren",
          "avatar": "https://avatars.githubusercontent.com/u/5768468"
        },
        {
          "username": "asahasrabuddhe",
          "href": "https://github.com/asahasrabuddhe",
          "avatar": "https://avatars.githubusercontent.com/u/25657923"
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
      "forks": 802,
      "added_stars": 726,
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
      "author": "Armur-Ai",
      "repo": "Pentest-Swarm-AI",
      "avatar": "https://github.com/Armur-Ai.png",
      "repo_link": "https://github.com/Armur-Ai/Pentest-Swarm-AI",
      "desc": "Autonomous penetration testing using a swarm of AI agents. Orchestrates recon, classification, exploitation, and reporting specialists with ReAct reasoning — supports bug bounty, continuous monitoring, and CTF modes. Built with Go and 7+ native security tools.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 561,
      "added_stars": 462,
      "builtBy": [
        {
          "username": "AkhilSharma90",
          "href": "https://github.com/AkhilSharma90",
          "avatar": "https://avatars.githubusercontent.com/u/26513717"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Kuro0911",
          "href": "https://github.com/Kuro0911",
          "avatar": "https://avatars.githubusercontent.com/u/71404936"
        },
        {
          "username": "siwacarn",
          "href": "https://github.com/siwacarn",
          "avatar": "https://avatars.githubusercontent.com/u/52309794"
        },
        {
          "username": "akhilairi",
          "href": "https://github.com/akhilairi",
          "avatar": "https://avatars.githubusercontent.com/u/165267987"
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
      "forks": 604,
      "added_stars": 316,
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
      "author": "golang",
      "repo": "go",
      "avatar": "https://github.com/golang.png",
      "repo_link": "https://github.com/golang/go",
      "desc": "The Go programming language",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 21562,
      "added_stars": 1683,
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
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6044,
      "added_stars": 688,
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
      "author": "strelov1",
      "repo": "freehire",
      "avatar": "https://github.com/strelov1.png",
      "repo_link": "https://github.com/strelov1/freehire",
      "desc": "freehire — the open-source search engine for job seekers",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 327,
      "added_stars": 2567,
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
      "author": "seaweedfs",
      "repo": "seaweedfs",
      "avatar": "https://github.com/seaweedfs.png",
      "repo_link": "https://github.com/seaweedfs/seaweedfs",
      "desc": "SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3092,
      "added_stars": 833,
      "builtBy": [
        {
          "username": "chrislusf",
          "href": "https://github.com/chrislusf",
          "avatar": "https://avatars.githubusercontent.com/u/1543151"
        },
        {
          "username": "kmlebedev",
          "href": "https://github.com/kmlebedev",
          "avatar": "https://avatars.githubusercontent.com/u/9497591"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "zitadel",
      "repo": "zitadel",
      "avatar": "https://github.com/zitadel.png",
      "repo_link": "https://github.com/zitadel/zitadel",
      "desc": "ZITADEL - Identity infrastructure, simplified for you.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1405,
      "added_stars": 374,
      "builtBy": [
        {
          "username": "livio-a",
          "href": "https://github.com/livio-a",
          "avatar": "https://avatars.githubusercontent.com/u/9405495"
        },
        {
          "username": "peintnermax",
          "href": "https://github.com/peintnermax",
          "avatar": "https://avatars.githubusercontent.com/u/10165752"
        },
        {
          "username": "adlerhurst",
          "href": "https://github.com/adlerhurst",
          "avatar": "https://avatars.githubusercontent.com/u/27845747"
        },
        {
          "username": "hifabienne",
          "href": "https://github.com/hifabienne",
          "avatar": "https://avatars.githubusercontent.com/u/38692350"
        },
        {
          "username": "fforootd",
          "href": "https://github.com/fforootd",
          "avatar": "https://avatars.githubusercontent.com/u/9879976"
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
      "forks": 5596,
      "added_stars": 695,
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
      "author": "hashicorp",
      "repo": "terraform",
      "avatar": "https://github.com/hashicorp.png",
      "repo_link": "https://github.com/hashicorp/terraform",
      "desc": "Terraform enables you to safely and predictably create, change, and improve infrastructure. It is a source-available tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10600,
      "added_stars": 675,
      "builtBy": [
        {
          "username": "jbardin",
          "href": "https://github.com/jbardin",
          "avatar": "https://avatars.githubusercontent.com/u/35067"
        },
        {
          "username": "mitchellh",
          "href": "https://github.com/mitchellh",
          "avatar": "https://avatars.githubusercontent.com/u/1299"
        },
        {
          "username": "apparentlymart",
          "href": "https://github.com/apparentlymart",
          "avatar": "https://avatars.githubusercontent.com/u/20180"
        },
        {
          "username": "stack72",
          "href": "https://github.com/stack72",
          "avatar": "https://avatars.githubusercontent.com/u/227823"
        },
        {
          "username": "catsby",
          "href": "https://github.com/catsby",
          "avatar": "https://avatars.githubusercontent.com/u/61721"
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
      "forks": 2430,
      "added_stars": 399,
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
      "forks": 533,
      "added_stars": 1272,
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
      "forks": 9902,
      "added_stars": 53014,
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
      "forks": 3662,
      "added_stars": 7617,
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
      "forks": 4677,
      "added_stars": 7876,
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
      "desc": "Give your agent CAD superpowers.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2268,
      "added_stars": 7011,
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
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9231,
      "added_stars": 18035,
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3432,
      "added_stars": 4054,
      "builtBy": [
        {
          "username": "rejojer",
          "href": "https://github.com/rejojer",
          "avatar": "https://avatars.githubusercontent.com/u/8255061"
        },
        {
          "username": "zmtomorrow",
          "href": "https://github.com/zmtomorrow",
          "avatar": "https://avatars.githubusercontent.com/u/13518252"
        },
        {
          "username": "BukeLy",
          "href": "https://github.com/BukeLy",
          "avatar": "https://avatars.githubusercontent.com/u/19304666"
        },
        {
          "username": "S3DFX-CYBER",
          "href": "https://github.com/S3DFX-CYBER",
          "avatar": "https://avatars.githubusercontent.com/u/213652949"
        },
        {
          "username": "noobakong",
          "href": "https://github.com/noobakong",
          "avatar": "https://avatars.githubusercontent.com/u/34873469"
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
      "forks": 13055,
      "added_stars": 16611,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5154,
      "added_stars": 6869,
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
      "author": "TencentCloud",
      "repo": "Octop",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/Octop",
      "desc": "A smarter, self-hosted AI assistant — multi-user, multi-agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1435,
      "added_stars": 6198,
      "builtBy": [
        {
          "username": "jubaoliang-tencent",
          "href": "https://github.com/jubaoliang-tencent",
          "avatar": "https://avatars.githubusercontent.com/u/309035352"
        },
        {
          "username": "jubaoliang",
          "href": "https://github.com/jubaoliang",
          "avatar": "https://avatars.githubusercontent.com/u/222386738"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "Bosheng0422",
          "href": "https://github.com/Bosheng0422",
          "avatar": "https://avatars.githubusercontent.com/u/67680641"
        },
        {
          "username": "liukewia",
          "href": "https://github.com/liukewia",
          "avatar": "https://avatars.githubusercontent.com/u/50489030"
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
      "forks": 4435,
      "added_stars": 1897,
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
      "author": "shiyu-coder",
      "repo": "Kronos",
      "avatar": "https://github.com/shiyu-coder.png",
      "repo_link": "https://github.com/shiyu-coder/Kronos",
      "desc": "Kronos: A Foundation Model for the Language of Financial Markets",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7248,
      "added_stars": 4567,
      "builtBy": [
        {
          "username": "shiyu-coder",
          "href": "https://github.com/shiyu-coder",
          "avatar": "https://avatars.githubusercontent.com/u/65760973"
        },
        {
          "username": "Luciferbobo",
          "href": "https://github.com/Luciferbobo",
          "avatar": "https://avatars.githubusercontent.com/u/54936491"
        },
        {
          "username": "CharlesJ-ABu",
          "href": "https://github.com/CharlesJ-ABu",
          "avatar": "https://avatars.githubusercontent.com/u/18326516"
        },
        {
          "username": "AnMakc",
          "href": "https://github.com/AnMakc",
          "avatar": "https://avatars.githubusercontent.com/u/1777564"
        },
        {
          "username": "randyy179",
          "href": "https://github.com/randyy179",
          "avatar": "https://avatars.githubusercontent.com/u/129808685"
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
      "forks": 9399,
      "added_stars": 11153,
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
      "author": "lightseekorg",
      "repo": "tokenspeed",
      "avatar": "https://github.com/lightseekorg.png",
      "repo_link": "https://github.com/lightseekorg/tokenspeed",
      "desc": "TokenSpeed is a speed-of-light LLM inference engine.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 384,
      "added_stars": 633,
      "builtBy": [
        {
          "username": "lightseek-bot",
          "href": "https://github.com/lightseek-bot",
          "avatar": "https://avatars.githubusercontent.com/u/243258330"
        },
        {
          "username": "antiagainst",
          "href": "https://github.com/antiagainst",
          "avatar": "https://avatars.githubusercontent.com/u/487928"
        },
        {
          "username": "nperrin-fr",
          "href": "https://github.com/nperrin-fr",
          "avatar": "https://avatars.githubusercontent.com/u/297528256"
        },
        {
          "username": "longcat-ia-team",
          "href": "https://github.com/longcat-ia-team",
          "avatar": "https://avatars.githubusercontent.com/u/312376714"
        },
        {
          "username": "borontion",
          "href": "https://github.com/borontion",
          "avatar": "https://avatars.githubusercontent.com/u/25846776"
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
      "forks": 3225,
      "added_stars": 2947,
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
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use Claude Code, Codex, Antigravity, VSCode, Pi, and OpenCode (and 6 other harnesses) for free (1.3B+ free tokens) from your terminal, app, IDE, or phone, and now from the browser with native browser sessions (multi-harness + multi-model) like OpenClaw (voice supported + ToS friendly)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9988,
      "added_stars": 8374,
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
      "author": "tile-ai",
      "repo": "tilelang",
      "avatar": "https://github.com/tile-ai.png",
      "repo_link": "https://github.com/tile-ai/tilelang",
      "desc": "Domain-specific language designed to streamline the development of high-performance GPU/CPU/Accelerators kernels",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 928,
      "added_stars": 1332,
      "builtBy": [
        {
          "username": "LeiWang1999",
          "href": "https://github.com/LeiWang1999",
          "avatar": "https://avatars.githubusercontent.com/u/34334180"
        },
        {
          "username": "chengyupku",
          "href": "https://github.com/chengyupku",
          "avatar": "https://avatars.githubusercontent.com/u/54519279"
        },
        {
          "username": "SiriusNEO",
          "href": "https://github.com/SiriusNEO",
          "avatar": "https://avatars.githubusercontent.com/u/41781658"
        },
        {
          "username": "Rachmanino",
          "href": "https://github.com/Rachmanino",
          "avatar": "https://avatars.githubusercontent.com/u/109033598"
        },
        {
          "username": "xwhzz",
          "href": "https://github.com/xwhzz",
          "avatar": "https://avatars.githubusercontent.com/u/132904306"
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
      "forks": 10133,
      "added_stars": 1961,
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
      "forks": 2939,
      "added_stars": 3124,
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
          "username": "harrywang",
          "href": "https://github.com/harrywang",
          "avatar": "https://avatars.githubusercontent.com/u/595772"
        }
      ]
    },
    {
      "author": "HunxByts",
      "repo": "GhostTrack",
      "avatar": "https://github.com/HunxByts.png",
      "repo_link": "https://github.com/HunxByts/GhostTrack",
      "desc": "Useful tool to track location or mobile number",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2731,
      "added_stars": 4976,
      "builtBy": [
        {
          "username": "HunxByts",
          "href": "https://github.com/HunxByts",
          "avatar": "https://avatars.githubusercontent.com/u/130666567"
        },
        {
          "username": "bakaemon",
          "href": "https://github.com/bakaemon",
          "avatar": "https://avatars.githubusercontent.com/u/69375806"
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
      "title": "Self-hosted alternative to Vercel and Coolify. Git push, HTTPS, logs, rollback. No Kubernetes.",
      "url": "http://levelrail.com/",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-10-24T17:18:17.000Z"
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
      "upvotes": "3",
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
      "title": "Join the Hacktoberfest Open-Source AI Challenge: Ghost in the Machine! $2,850 in Prizes Across 21 Winners.",
      "description": "Week 4 of our Hacktoberfest DEV Challenges starts today, and it's our final challenge of the series!...",
      "url": "https://dev.to/devteam/join-the-hacktoberfest-open-source-ai-challenge-ghost-in-the-machine-2850-in-prizes-across-21-3cho",
      "tags": "devchallenge, hf26challenge, hacktoberfest, ai",
      "reactions": 39,
      "comments": 6,
      "reading_time": 7,
      "author": "heyitsjem"
    },
    {
      "title": "Why bloc.add(...) Isn't What You Think: Synchronous Event Fast-Paths and 0ms Form Bindings",
      "description": "Why classic BLoC's StreamController forces an asynchronous microtask tax, how BlocSignal executes synchronous event handlers inline on the exact same call stack, and why this is the only way to build 120 FPS Generative UI form bindings.",
      "url": "https://dev.to/gde/why-blocadd-isnt-what-you-think-synchronous-event-fast-paths-and-0ms-form-bindings-6o",
      "tags": "flutter, dart, architecture, statemanagement",
      "reactions": 9,
      "comments": 4,
      "reading_time": 10,
      "author": "randalschwartz"
    },
    {
      "title": "Let It Die: The Lazy Email Agent on TabPFN, Gemma and Temporal",
      "description": "This is a submission for the Hacktoberfest Open-Source AI Challenge Week 3: Slow and Steady          ...",
      "url": "https://dev.to/khushighosh/let-it-die-the-lazy-email-agent-on-tabpfn-gemma-and-temporal-10o0",
      "tags": "devchallenge, hf26challenge, gemma, tabpfn",
      "reactions": 17,
      "comments": 14,
      "reading_time": 6,
      "author": "khushighosh"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-18k",
      "tags": "discuss, watercooler, jokes",
      "reactions": 25,
      "comments": 18,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "🐾 DEV Pet Corner #3: Show Us Your Pets!",
      "description": "TL;DR  DEV Pet Corner is back for another Sunday! It's a weekly series where we take a little break...",
      "url": "https://dev.to/hemapriya_kanagala/dev-pet-corner-3-show-us-your-pets-35n",
      "tags": "discuss, community, watercooler, pets",
      "reactions": 57,
      "comments": 9,
      "reading_time": 3,
      "author": "hemapriya_kanagala"
    },
    {
      "title": "Inference on Google Cloud: Precision, Memory and Capacity on TPU, from v5e to Ironwood",
      "description": "The companion to the talk: what the number format, memory bandwidth, slice shape and capacity rules do to Gemma 4 on Cloud TPU v5e and v6e, against the L4, Blackwell, MI300X and Inferentia, with the cost of each.",
      "url": "https://dev.to/gde/inference-on-google-cloud-precision-memory-and-capacity-on-tpu-from-v5e-to-ironwood-5dlf",
      "tags": "googlecloud, tpu, machinelearning, gemma",
      "reactions": 8,
      "comments": 1,
      "reading_time": 14,
      "author": "xbill"
    },
    {
      "title": "Don't Be a Proxy Between Me and Your AI",
      "description": "I've had this conversation more times than I'd like to admit.  I raise a technical question in a...",
      "url": "https://dev.to/adamthedeveloper/dont-be-a-proxy-between-me-and-your-ai-mcn",
      "tags": "ai, discuss, career, programming",
      "reactions": 138,
      "comments": 91,
      "reading_time": 7,
      "author": "adamthedeveloper"
    },
    {
      "title": "Promise Delivered: Welcome to the DEV Hall of Fame (65 Authors, 65 Masterpieces)",
      "description": "Status: Promise delivered ✅              The Doors Are Open   A little over a month ago, I published...",
      "url": "https://dev.to/georgekobaidze/promise-delivered-welcome-to-the-dev-hall-of-fame-65-authors-65-masterpieces-15fa",
      "tags": "community, discuss, showdev, writing",
      "reactions": 224,
      "comments": 125,
      "reading_time": 25,
      "author": "georgekobaidze"
    },
    {
      "title": "Postmortem: The Tuesday Our AI Bill Had No Owner",
      "description": "I've read a lot of postmortems. The best ones aren't about blame. They're about the gap between what...",
      "url": "https://dev.to/gde/postmortem-the-tuesday-our-ai-bill-had-no-owner-34pd",
      "tags": "discuss, vertexai, sre, ai",
      "reactions": 14,
      "comments": 10,
      "reading_time": 14,
      "author": "karthidec"
    },
    {
      "title": "Automated incident triage on GKE with Gemini 4 Argon and Model Context Protocol: Correlating cluster events and VPA logs",
      "description": "Automate root-cause incident triage on GKE by combining Gemini 4 Argon multi-step reasoning with the GKE Model Context Protocol server.",
      "url": "https://dev.to/googlecloud/automated-incident-triage-on-gke-with-gemini-4-argon-and-model-context-protocol-correlating-24eb",
      "tags": "kubernetes, ai, gke, googlecloud",
      "reactions": 5,
      "comments": 0,
      "reading_time": 8,
      "author": "olivi-eh"
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
      "title": "Python's experimental JIT to be removed",
      "url": "https://lwn.net/SubscriberLink/1102102/0c00e4d550f25f8c/",
      "score": 1,
      "comments": 0,
      "tags": [
        "python"
      ],
      "id": "cajuq6"
    },
    {
      "title": "Working with academic communities to build scientific understanding",
      "url": "https://openai.com/index/building-scientific-understanding-with-academic-communities/",
      "score": -2,
      "comments": 1,
      "tags": [
        "math",
        "science"
      ],
      "id": "zalhq5"
    },
    {
      "title": "The Exponential Time Hypothesis Is False [pdf]",
      "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf",
      "score": 21,
      "comments": 0,
      "tags": [
        "math",
        "pdf"
      ],
      "id": "pq6ju6"
    },
    {
      "title": "(VCF Midwest 2026) Building a Living 90s Internet for Vintage Computers",
      "url": "https://www.youtube.com/watch?v=mZfJ-sulqQs",
      "score": 3,
      "comments": 0,
      "tags": [
        "retrocomputing",
        "video"
      ],
      "id": "uhfzlv"
    },
    {
      "title": "Our Response To The eMudhra Key Disclosure Incident",
      "url": "https://go.dev/blog/emudhra-incident",
      "score": 7,
      "comments": 1,
      "tags": [
        "go"
      ],
      "id": "cxdpiu"
    },
    {
      "title": "The case for compiler-friendly custom operations: MLIR's Linalg rationale (2020)",
      "url": "https://mlir.llvm.org/docs/Rationale/RationaleLinalgDialect/",
      "score": 1,
      "comments": 0,
      "tags": [
        "compilers"
      ],
      "id": "hgmtlq"
    },
    {
      "title": "Shitty Screenshare",
      "url": "http://shittyscreenshare.com",
      "score": 16,
      "comments": 7,
      "tags": [
        "browsers",
        "web"
      ],
      "id": "cxxcik"
    },
    {
      "title": "The passkey is worse",
      "url": "https://www.kcoleman.me/2026/10/22/hacked.html",
      "score": 6,
      "comments": 22,
      "tags": [
        "security",
        "web"
      ],
      "id": "ihmfsc"
    },
    {
      "title": "Cuis Smalltalk",
      "url": "https://cuis.st/",
      "score": 3,
      "comments": 0,
      "tags": [
        "plt"
      ],
      "id": "vqlcdk"
    },
    {
      "title": "MEU - a M3U file editor",
      "url": "https://github.com/teknoraver/meu",
      "score": 1,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "yhwhf4"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "jonluca",
      "descendants": 330,
      "id": 50251344,
      "kids": [
        50253739,
        50252781,
        50252488,
        50255087,
        50254042,
        50251563,
        50252463,
        50254277,
        50254058,
        50252374,
        50251562,
        50253950,
        50251399,
        50251903,
        50252347,
        50252275,
        50252012,
        50255299,
        50255055,
        50254611,
        50252506,
        50254323,
        50255018,
        50252962,
        50252478,
        50252462,
        50254075,
        50254235,
        50252052,
        50251948,
        50253817,
        50252735,
        50252989,
        50253187,
        50253604,
        50253992,
        50254313,
        50253757,
        50254854,
        50255088,
        50254006,
        50255137,
        50252522,
        50255200,
        50254962,
        50253419,
        50253353,
        50251692,
        50252784,
        50252619,
        50253689,
        50254028,
        50252074,
        50252184,
        50251758,
        50253367,
        50253330,
        50252278,
        50252408,
        50253560,
        50252248,
        50253785,
        50252025,
        50251731,
        50255121,
        50254330,
        50251845,
        50252566,
        50252026,
        50251595,
        50252171,
        50252139,
        50252319,
        50251881,
        50254357
      ],
      "score": 745,
      "text": "Related:<p><i>The Exponential Time Hypothesis Is False [pdf]</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50251661\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50251661</a>",
      "time": 1793050528,
      "title": "Three new discoveries in mathematics, computer science, and physics",
      "type": "story",
      "url": "https://openai.com/index/building-scientific-understanding-with-academic-communities/"
    },
    {
      "by": "vok",
      "descendants": 189,
      "id": 50251661,
      "kids": [
        50254012,
        50252769,
        50254825,
        50252720,
        50252745,
        50255162,
        50252756,
        50253260,
        50252406,
        50252501,
        50254839,
        50253174,
        50254341,
        50254969,
        50254571,
        50255260,
        50253166,
        50253252,
        50252818,
        50254572,
        50253824,
        50252562,
        50252558,
        50253826,
        50253109
      ],
      "score": 521,
      "text": "See also: <i>Announcing three new discoveries in mathematics, computer science, and physics</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50251344\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50251344</a>",
      "time": 1793051955,
      "title": "The Exponential Time Hypothesis Is False [pdf]",
      "type": "story",
      "url": "https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf"
    },
    {
      "by": "sgiannopoulos",
      "descendants": 92,
      "id": 50245138,
      "kids": [
        50248190,
        50249391,
        50246122,
        50245736,
        50254159,
        50249172,
        50247852,
        50248336,
        50249762,
        50253425,
        50247692,
        50249429,
        50248268,
        50247457,
        50247507,
        50249026,
        50246980,
        50246314,
        50247793,
        50247044
      ],
      "score": 651,
      "time": 1793027519,
      "title": "Sebastian Raschka's from-scratch video course on building reasoning models",
      "type": "story",
      "url": "https://magazine.sebastianraschka.com/p/building-reasoning-models"
    },
    {
      "by": "enlyth",
      "descendants": 218,
      "id": 50248055,
      "kids": [
        50251964,
        50249343,
        50250806,
        50250737,
        50250562,
        50249276,
        50249468,
        50250998,
        50249510,
        50248943,
        50251775,
        50252451,
        50253149,
        50250809,
        50253243,
        50252318,
        50248994,
        50249212,
        50250195,
        50249495,
        50253238,
        50253786,
        50251140,
        50250722,
        50250409,
        50253291,
        50252042,
        50250000,
        50251482,
        50249298,
        50255365,
        50252836
      ],
      "score": 373,
      "time": 1793037415,
      "title": "Oldest GUI application that still runs on Windows 11",
      "type": "story",
      "url": "https://blog.enlyth.com/posts/oldest-windows-gui-app-win-11/"
    },
    {
      "by": "doener",
      "descendants": 5,
      "id": 50253529,
      "kids": [
        50255044,
        50254736,
        50254669,
        50253588
      ],
      "score": 68,
      "time": 1793063704,
      "title": "16-bit Windows (Windows 1.x, 2.x, 3.0, 3.1, etc.) on 64-bit Windows",
      "type": "story",
      "url": "https://github.com/otya128/winevdm"
    },
    {
      "by": "adamnemecek",
      "descendants": 147,
      "id": 50248371,
      "kids": [
        50249708,
        50249007,
        50249909,
        50254373,
        50249161,
        50249859,
        50249301,
        50252115,
        50253549,
        50254580,
        50253592,
        50249458,
        50250533,
        50249057,
        50249554,
        50249115,
        50251287,
        50251440,
        50249873,
        50249356,
        50252639,
        50248835,
        50249069,
        50251474,
        50250602
      ],
      "score": 225,
      "time": 1793038489,
      "title": "Type Server Protocol",
      "type": "story",
      "url": "https://github.com/microsoft/pylance-release/blob/main/docs/tsp/type-server-protocol.md"
    },
    {
      "by": "wondersky",
      "descendants": 38,
      "id": 50252159,
      "kids": [
        50253748,
        50252432,
        50252927,
        50252267,
        50254499,
        50255011,
        50254449,
        50254683,
        50252438,
        50254223,
        50253843,
        50253568,
        50252800,
        50255297,
        50255223,
        50254740
      ],
      "score": 117,
      "time": 1793054508,
      "title": "Cross-request KV cache exposure in the GLM-5.3 Workers AI model (155 responses)",
      "type": "story",
      "url": "https://blog.cloudflare.com/kv-cache-exposure-remediation/"
    },
    {
      "by": "majorchord",
      "descendants": 15,
      "id": 50253939,
      "kids": [
        50254511,
        50254555,
        50254656,
        50254457,
        50254915,
        50255359,
        50254956
      ],
      "score": 30,
      "time": 1793067310,
      "title": "I still teach OpenGL ES 3.0",
      "type": "story",
      "url": "https://eliasfarhan.ch/graphics/cpp/2026/01/27/why-i-teach-opengles.html"
    },
    {
      "by": "dverlaeckt80",
      "descendants": 0,
      "id": 50255177,
      "score": 3,
      "time": 1793080943,
      "title": "Writing about pratt parsing so I remember it",
      "type": "story",
      "url": "https://www.unix.dog/~yosh/blog/2026-10-25_pratt-parsing.html"
    },
    {
      "by": "edent",
      "descendants": 96,
      "id": 50245831,
      "kids": [
        50247477,
        50246634,
        50248388,
        50246941,
        50248131,
        50248159,
        50247871,
        50246825,
        50248339,
        50249850,
        50246521,
        50246553,
        50250676,
        50252092,
        50251645,
        50249507,
        50249008,
        50253046,
        50249843,
        50249573,
        50249346,
        50248663,
        50251421,
        50247605,
        50251843,
        50252224,
        50246780,
        50246650,
        50252707,
        50247252,
        50248380,
        50254229,
        50246868,
        50247508
      ],
      "score": 428,
      "time": 1793029883,
      "title": "CSS-Tricks has a new owner",
      "type": "story",
      "url": "https://css-tricks.com/css-tricks-has-a-new-owner/"
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
      "title": "Doors I Walked Through to Reach DEV",
      "description": "Table of Contents    Knock, Knock: The First Domino The Numbers and a Plot Twist How Did I...",
      "url": "https://dev.to/devengers/doors-i-walked-through-to-reach-dev-5294",
      "tags": "career, community, writing, devengers",
      "reactions": 24,
      "comments": 13,
      "reading_time": 7,
      "author": "georgekobaidze"
    },
    {
      "title": "Não precisa ser popular pra compartilhar: minha história até Berlim",
      "description": "Hoje não venho escrever algo técnico ou teórico. Hoje vou contar pra vocês como a menina criada nas...",
      "url": "https://dev.to/he4rt/nao-precisa-ser-popular-pra-compartilhar-minha-historia-ate-berlim-1hbc",
      "tags": "community, braziliandevs, career, onceuponaws",
      "reactions": 116,
      "comments": 1,
      "reading_time": 3,
      "author": "m4rri4nne"
    },
    {
      "title": "How to Make the Business Case for Slowing Down (and When Not To)",
      "description": "Last week I wrote about the two kinds of friction in an engineering process...the kind that just...",
      "url": "https://dev.to/pixel-wraith/how-to-make-the-business-case-for-slowing-down-and-when-not-to-5c67",
      "tags": "engineeringmanagement, leadership, management, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "pixel-wraith"
    },
    {
      "title": "☕ Beyond the Stack Trace: 5 Tiny Daily Habits to Keep Developer Burnout at Bay",
      "description": "Every developer knows the feeling: the IDE is glowing, a bug is haunting your dreams, and your brain...",
      "url": "https://dev.to/chamod_madhushan/beyond-the-stack-trace-5-tiny-daily-habits-to-keep-developer-burnout-at-bay-39n8",
      "tags": "coding, mentalhealth, productivity, career",
      "reactions": 1,
      "comments": 1,
      "reading_time": 3,
      "author": "chamod_madhushan"
    },
    {
      "title": "Nobody photographs the scaffolding",
      "description": "My R&D team's work only ever showed up in other people's numbers, so when delivery became the measure, they went. Making that work visible was my job.",
      "url": "https://dev.to/phpboyscout/nobody-photographs-the-scaffolding-532",
      "tags": "career",
      "reactions": 2,
      "comments": 2,
      "reading_time": 5,
      "author": "phpboyscout"
    },
    {
      "title": "DVA-C03: The New AWS Developer Associate Exam — What Actually Changes, and How to Pass It",
      "description": "If you were studying for the AWS Certified Developer – Associate (DVA-C02), the calendar just made...",
      "url": "https://dev.to/study4pass/dva-c03-the-new-aws-developer-associate-exam-what-actually-changes-and-how-to-pass-it-1j3",
      "tags": "aws, certification, devops, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "study4pass"
    },
    {
      "title": "Why Simplicity Wins in Software Engineering",
      "description": "Every software engineer has faced it: the pull toward complexity. A new abstraction layer here, a...",
      "url": "https://dev.to/asimplecode/why-simplicity-wins-in-software-engineering-1noo",
      "tags": "programming, softwareengineering, cleancode, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "asimplecode"
    },
    {
      "title": "How ATS Parsers Extract and Normalize Resume Skills",
      "description": "How ATS parsers extract, map and normalize your resume Skills section, why bars and icons vanish, and an 8-step diagnostic to make every skill searchable.",
      "url": "https://dev.to/muhammadalimughal/how-ats-parsers-extract-and-normalize-resume-skills-1jki",
      "tags": "career, resume, jobs, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "muhammadalimughal"
    },
    {
      "title": "The Ever Changing Profession of Software Engineering",
      "description": "Thoughts on the constant change in software engineering.",
      "url": "https://dev.to/ruarfff/the-ever-changing-profession-of-software-engineering-2fhb",
      "tags": "career, softwaredevelopment, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "ruarfff"
    },
    {
      "title": "Promotedby.ai review from the agent side: what got paid, what got rejected, and the rules behind both",
      "description": "Two results accepted at $15 each, two pending, one rejected by the traffic rule. The rates promotedby.ai publishes, the medians it actually pays, and the four refusals that arrive before a human reads anything.",
      "url": "https://dev.to/cianspider/promotedbyai-review-from-the-agent-side-what-got-paid-what-got-rejected-and-the-rules-behind-4nod",
      "tags": "ai, marketing, writing, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "cianspider"
    }
  ]
}
```

