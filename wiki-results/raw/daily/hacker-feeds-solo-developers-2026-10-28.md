# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-10-28 06:29:45 UTC

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
      "forks": 9367,
      "added_stars": 2296,
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
      "forks": 29785,
      "added_stars": 4334,
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
      "forks": 6848,
      "added_stars": 8802,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8270,
      "added_stars": 1988,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6731,
      "added_stars": 5609,
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
      "author": "google-gemini",
      "repo": "gemini-cli",
      "avatar": "https://github.com/google-gemini.png",
      "repo_link": "https://github.com/google-gemini/gemini-cli",
      "desc": "An open-source AI agent that brings the power of Gemini directly into your terminal.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 14856,
      "added_stars": 1248,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5561,
      "added_stars": 2674,
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
      "author": "makecindy",
      "repo": "cindy",
      "avatar": "https://github.com/makecindy.png",
      "repo_link": "https://github.com/makecindy/cindy",
      "desc": "Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 910,
      "added_stars": 4142,
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
      "author": "Renhuai123",
      "repo": "ziwei-doushu",
      "avatar": "https://github.com/Renhuai123.png",
      "repo_link": "https://github.com/Renhuai123/ziwei-doushu",
      "desc": "紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1737,
      "added_stars": 3259,
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
      "forks": 5783,
      "added_stars": 4575,
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
      "forks": 610,
      "added_stars": 1090,
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
      "author": "anthropics",
      "repo": "sandbox-runtime",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/sandbox-runtime",
      "desc": "A lightweight sandboxing tool for enforcing filesystem and network restrictions on arbitrary processes at the OS level, without requiring a container.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 600,
      "added_stars": 1151,
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
      "author": "Vincentwei1021",
      "repo": "video-shotcraft",
      "avatar": "https://github.com/Vincentwei1021.png",
      "repo_link": "https://github.com/Vincentwei1021/video-shotcraft",
      "desc": "AI video skill for Claude Code & Codex — cinematic, editable product promos with Remotion: 124 shot recipe cards, 150 motion previews, beat sync, sound design, Motion Workbench & JianYing (CapCut CN) export.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1322,
      "added_stars": 1440,
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
      "author": "nightly-labs",
      "repo": "openbot",
      "avatar": "https://github.com/nightly-labs.png",
      "repo_link": "https://github.com/nightly-labs/openbot",
      "desc": "A local-first desktop workspace for persistent AI teammates. Run Codex, Claude, and Grok with dedicated workspaces, task queues, file sharing, browser control, and agent-to-agent collaboration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 273,
      "added_stars": 1498,
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
      "author": "thesysdev",
      "repo": "openui",
      "avatar": "https://github.com/thesysdev.png",
      "repo_link": "https://github.com/thesysdev/openui",
      "desc": "The Open Standard for Generative UI",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 936,
      "added_stars": 1735,
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
          "username": "zahlekhan",
          "href": "https://github.com/zahlekhan",
          "avatar": "https://avatars.githubusercontent.com/u/27266434"
        },
        {
          "username": "abhithesys",
          "href": "https://github.com/abhithesys",
          "avatar": "https://avatars.githubusercontent.com/u/157345590"
        }
      ]
    },
    {
      "author": "basketikun",
      "repo": "infinite-canvas",
      "avatar": "https://github.com/basketikun.png",
      "repo_link": "https://github.com/basketikun/infinite-canvas",
      "desc": "面向 AI 创作的开源无限画布工作台，集成 AI 生图、参考图编辑、视频生成、Agent 智能助手、画布编排、对话创作、提示词库与素材管理等能力，支持可视化创作流程与多 Agent 协同工作。兼容 OpenAI 接口生态，支持 chatgpt2api、grok2api、flow2api、newapi 等渠道接入。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2171,
      "added_stars": 1474,
      "builtBy": [
        {
          "username": "basketikun",
          "href": "https://github.com/basketikun",
          "avatar": "https://avatars.githubusercontent.com/u/114481029"
        },
        {
          "username": "yukkcat",
          "href": "https://github.com/yukkcat",
          "avatar": "https://avatars.githubusercontent.com/u/116244751"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "stupid-h4er",
          "href": "https://github.com/stupid-h4er",
          "avatar": "https://avatars.githubusercontent.com/u/66538490"
        },
        {
          "username": "Booome",
          "href": "https://github.com/Booome",
          "avatar": "https://avatars.githubusercontent.com/u/12590691"
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
      "forks": 1386,
      "added_stars": 105,
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
      "forks": 1078,
      "added_stars": 1140,
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
      "author": "gitroomhq",
      "repo": "postiz-app",
      "avatar": "https://github.com/gitroomhq.png",
      "repo_link": "https://github.com/gitroomhq/postiz-app",
      "desc": "📨 The ultimate agentic social media scheduling tool 🤖",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7534,
      "added_stars": 1698,
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
      "author": "vitejs",
      "repo": "vite",
      "avatar": "https://github.com/vitejs.png",
      "repo_link": "https://github.com/vitejs/vite",
      "desc": "Next generation frontend tooling. It's fast!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8954,
      "added_stars": 239,
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
      "forks": 285,
      "added_stars": 2413,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 18668,
      "added_stars": 4257,
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
      "forks": 5193,
      "added_stars": 2546,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5082,
      "added_stars": 7778,
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
      "author": "lharries",
      "repo": "whatsapp-mcp",
      "avatar": "https://github.com/lharries.png",
      "repo_link": "https://github.com/lharries/whatsapp-mcp",
      "desc": "WhatsApp MCP server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1450,
      "added_stars": 445,
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
      "author": "Asymptote-Labs",
      "repo": "agent-beacon",
      "avatar": "https://github.com/Asymptote-Labs.png",
      "repo_link": "https://github.com/Asymptote-Labs/agent-beacon",
      "desc": "The cross-harness, self-improving memory layer for AI agents. Join our community: https://discord.com/invite/zdNChS2fBu",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 262,
      "added_stars": 1294,
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
      "forks": 804,
      "added_stars": 752,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1078,
      "added_stars": 794,
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
      "forks": 46373,
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
      "author": "trufflesecurity",
      "repo": "trufflehog",
      "avatar": "https://github.com/trufflesecurity.png",
      "repo_link": "https://github.com/trufflesecurity/trufflehog",
      "desc": "Find, verify, and analyze leaked credentials",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2671,
      "added_stars": 682,
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
      "author": "Gentleman-Programming",
      "repo": "engram",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/engram",
      "desc": "Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5, MCP server, HTTP API, CLI, and TUI.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 802,
      "added_stars": 797,
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
      "author": "github",
      "repo": "gh-aw",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/gh-aw",
      "desc": "GitHub Agentic Workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 605,
      "added_stars": 324,
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
      "author": "google",
      "repo": "gvisor",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/gvisor",
      "desc": "Application Kernel for Containers",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2039,
      "added_stars": 409,
      "builtBy": [
        {
          "username": "gvisor-bot",
          "href": "https://github.com/gvisor-bot",
          "avatar": "https://avatars.githubusercontent.com/u/51218664"
        },
        {
          "username": "ayushr2",
          "href": "https://github.com/ayushr2",
          "avatar": "https://avatars.githubusercontent.com/u/21375263"
        },
        {
          "username": "avagin",
          "href": "https://github.com/avagin",
          "avatar": "https://avatars.githubusercontent.com/u/1049830"
        },
        {
          "username": "EtiennePerot",
          "href": "https://github.com/EtiennePerot",
          "avatar": "https://avatars.githubusercontent.com/u/1330673"
        },
        {
          "username": "fvoznika",
          "href": "https://github.com/fvoznika",
          "avatar": "https://avatars.githubusercontent.com/u/3537533"
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
      "forks": 21580,
      "added_stars": 1682,
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
      "forks": 6050,
      "added_stars": 713,
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
      "author": "php",
      "repo": "frankenphp",
      "avatar": "https://github.com/php.png",
      "repo_link": "https://github.com/php/frankenphp",
      "desc": "🧟 The modern PHP app server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 503,
      "added_stars": 134,
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
      "author": "Armur-Ai",
      "repo": "Pentest-Swarm-AI",
      "avatar": "https://github.com/Armur-Ai.png",
      "repo_link": "https://github.com/Armur-Ai/Pentest-Swarm-AI",
      "desc": "Autonomous penetration testing using a swarm of AI agents. Orchestrates recon, classification, exploitation, and reporting specialists with ReAct reasoning — supports bug bounty, continuous monitoring, and CTF modes. Built with Go and 7+ native security tools.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 563,
      "added_stars": 450,
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
      "author": "microsoft",
      "repo": "TypeScript",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/TypeScript",
      "desc": "TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 16035,
      "added_stars": 648,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 535,
      "added_stars": 1270,
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
      "author": "rclone",
      "repo": "rclone",
      "avatar": "https://github.com/rclone.png",
      "repo_link": "https://github.com/rclone/rclone",
      "desc": "\"rsync for cloud storage\" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5603,
      "added_stars": 711,
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
      "forks": 10164,
      "added_stars": 52726,
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
      "forks": 3678,
      "added_stars": 7792,
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
      "forks": 2288,
      "added_stars": 7192,
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
      "forks": 4695,
      "added_stars": 8017,
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
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9319,
      "added_stars": 19461,
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
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5177,
      "added_stars": 6879,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn AI Engineering! Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13121,
      "added_stars": 16124,
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3431,
      "added_stars": 4129,
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
      "author": "TencentCloud",
      "repo": "Octop",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/Octop",
      "desc": "A smarter, self-hosted AI assistant — multi-user, multi-agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1458,
      "added_stars": 6102,
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
      "forks": 4441,
      "added_stars": 1971,
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
      "author": "calesthio",
      "repo": "OpenMontage",
      "avatar": "https://github.com/calesthio.png",
      "repo_link": "https://github.com/calesthio/OpenMontage",
      "desc": "World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9464,
      "added_stars": 11332,
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
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use Claude Code, Codex, Antigravity, VSCode, Pi, and OpenCode (and 6 other harnesses) for free (1.3B+ free tokens) from your terminal, app, IDE, or phone, and now from the browser with native browser sessions (multi-harness + multi-model) like OpenClaw (voice supported + ToS friendly)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10046,
      "added_stars": 8820,
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
      "author": "lightseekorg",
      "repo": "tokenspeed",
      "avatar": "https://github.com/lightseekorg.png",
      "repo_link": "https://github.com/lightseekorg/tokenspeed",
      "desc": "TokenSpeed is a speed-of-light LLM inference engine.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 385,
      "added_stars": 642,
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
      "forks": 3243,
      "added_stars": 3270,
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
      "author": "tile-ai",
      "repo": "tilelang",
      "avatar": "https://github.com/tile-ai.png",
      "repo_link": "https://github.com/tile-ai/tilelang",
      "desc": "Domain-specific language designed to streamline the development of high-performance GPU/CPU/Accelerators kernels",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 931,
      "added_stars": 1350,
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
      "forks": 10135,
      "added_stars": 1997,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1974,
      "added_stars": 4353,
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
      "author": "HunxByts",
      "repo": "GhostTrack",
      "avatar": "https://github.com/HunxByts.png",
      "repo_link": "https://github.com/HunxByts/GhostTrack",
      "desc": "Useful tool to track location or mobile number",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2753,
      "added_stars": 5094,
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
      "forks": 5593,
      "added_stars": 4039,
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
      "title": "Your DEV posts have a beautiful new share card ✨",
      "description": "The image that shows up when you share a DEV post just got a brand-new look!  I got to work on...",
      "url": "https://dev.to/devteam/your-dev-posts-have-a-beautiful-new-share-card-4be8",
      "tags": "devto, showdev, opensource, design",
      "reactions": 61,
      "comments": 13,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-2h0f",
      "tags": "top7, discuss",
      "reactions": 56,
      "comments": 17,
      "reading_time": 3,
      "author": "heyitsjem"
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
      "reactions": 146,
      "comments": 123,
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
      "title": "Automated incident triage on GKE with Gemini 4 Argon and Model Context Protocol: Correlating cluster events and VPA logs",
      "description": "Automate root-cause incident triage on GKE by combining Gemini 4 Argon multi-step reasoning with the GKE Model Context Protocol server.",
      "url": "https://dev.to/googlecloud/automated-incident-triage-on-gke-with-gemini-4-argon-and-model-context-protocol-correlating-24eb",
      "tags": "kubernetes, ai, gke, googlecloud",
      "reactions": 5,
      "comments": 0,
      "reading_time": 8,
      "author": "olivi-eh"
    },
    {
      "title": "Generative UI Without the Async Tax: Introducing bloc_signals_genui 1.0",
      "description": "Why we built a pure-Dart, 0ms synchronous Generative UI state machine on top of Google's official A2UI protocol—supporting two-way reactive forms, Riverpod/BLoC interop, Flutter Material 3, and ANSI terminal TUIs.",
      "url": "https://dev.to/gde/generative-ui-without-the-async-tax-introducing-blocsignalsgenui-10-3gge",
      "tags": "flutter, dart, ai, architecture",
      "reactions": 19,
      "comments": 28,
      "reading_time": 8,
      "author": "randalschwartz"
    },
    {
      "title": "Join the Hacktoberfest Open-Source AI Challenge: Ghost in the Machine! $2,850 in Prizes Across 21 Winners.",
      "description": "Week 4 of our Hacktoberfest DEV Challenges starts today, and it's our final challenge of the series!...",
      "url": "https://dev.to/devteam/join-the-hacktoberfest-open-source-ai-challenge-ghost-in-the-machine-2850-in-prizes-across-21-3cho",
      "tags": "devchallenge, hf26challenge, hacktoberfest, ai",
      "reactions": 61,
      "comments": 12,
      "reading_time": 7,
      "author": "heyitsjem"
    },
    {
      "title": "Natural Languages Have Design Trade-offs Too: Georgian Is Dynamically Typed, English Is Statically Typed",
      "description": "Table of Contents    How This Started  Feature #1: Articles (or the Lack of Them)   The...",
      "url": "https://dev.to/georgekobaidze/natural-languages-have-design-trade-offs-too-georgian-is-dynamically-typed-english-is-statically-emi",
      "tags": "programming, writing, design, languages",
      "reactions": 141,
      "comments": 66,
      "reading_time": 10,
      "author": "georgekobaidze"
    },
    {
      "title": "Let It Die: The Lazy Email Agent on TabPFN, Gemma and Temporal",
      "description": "This is a submission for the Hacktoberfest Open-Source AI Challenge Week 3: Slow and Steady          ...",
      "url": "https://dev.to/khushighosh/let-it-die-the-lazy-email-agent-on-tabpfn-gemma-and-temporal-10o0",
      "tags": "devchallenge, hf26challenge, gemma, tabpfn",
      "reactions": 18,
      "comments": 14,
      "reading_time": 6,
      "author": "khushighosh"
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
      "title": "This is not sustainable",
      "url": "https://www.netmeister.org/blog/defense-ddos.html",
      "score": 8,
      "comments": 2,
      "tags": [
        "security"
      ],
      "id": "cpaibp"
    },
    {
      "title": "Tailscale SSH: Investigation and remediation update",
      "url": "https://tailscale.com/ssh-investigation-update",
      "score": 1,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "qmvxuh"
    },
    {
      "title": "Reminder: Lobsters NYC Meetup Tomorrow 5:30 at Walker's",
      "url": "",
      "score": 6,
      "comments": 0,
      "tags": [
        "event"
      ],
      "id": "87iesc"
    },
    {
      "title": "Ghostty 1.4.0",
      "url": "https://ghostty.org/docs/install/release-notes/1-4-0",
      "score": 37,
      "comments": 1,
      "tags": [
        "release"
      ],
      "id": "o6vpqb"
    },
    {
      "title": "I've never been a fan of these calculators",
      "url": "https://www.youtube.com/watch?v=r_Byrs11ccM",
      "score": 2,
      "comments": 0,
      "tags": [
        "ai-tooling",
        "education",
        "math",
        "rant",
        "video"
      ],
      "id": "ho1oj5"
    },
    {
      "title": "Coders’ Rights Project Reverse Engineering FAQ (2017)",
      "url": "https://www.eff.org/issues/coders/reverse-engineering-faq",
      "score": 3,
      "comments": 0,
      "tags": [
        "law",
        "reversing"
      ],
      "id": "3bgocs"
    },
    {
      "title": "Discovering and exploiting vulnerabilities in critical, real-world software with Claude",
      "url": "https://www.anthropic.com/research/discovering-vulnerabilities-with-claude",
      "score": -5,
      "comments": 0,
      "tags": [
        "ai-tooling",
        "security"
      ],
      "id": "qu43bz"
    },
    {
      "title": "Fixing KIO copy to USB stick and network filesystems",
      "url": "https://blogs.kde.org/2026/10/27/fixing-kio-copy-to-usb-stick-and-network-filesystems/",
      "score": 3,
      "comments": 0,
      "tags": [
        "linux"
      ],
      "id": "8thxi2"
    },
    {
      "title": "The next circle of security hell",
      "url": "https://blogs.gentoo.org/mgorny/2026/10/27/the-next-circle-of-security-hell/",
      "score": 4,
      "comments": 0,
      "tags": [
        "linux",
        "security"
      ],
      "id": "f3jpq3"
    },
    {
      "title": "A Second Look at Apple’s Secure Kernel",
      "url": "https://www.antid0te.com/blog/secure-kernel-first-look-erratum.html",
      "score": -2,
      "comments": 0,
      "tags": [
        "ios",
        "mac",
        "security"
      ],
      "id": "4pdsw0"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "alansaber",
      "descendants": 83,
      "id": 50268380,
      "kids": [
        50269424,
        50268920,
        50268915,
        50268822,
        50269545,
        50269327,
        50268848,
        50268900,
        50269049,
        50269385,
        50268684,
        50268847,
        50268768,
        50269587,
        50269871,
        50269413,
        50269543,
        50269104,
        50269177,
        50269183,
        50269437,
        50269184,
        50269364,
        50269566,
        50268894,
        50269524,
        50268855,
        50269126,
        50269262,
        50269135,
        50269687,
        50268750,
        50268654
      ],
      "score": 170,
      "time": 1793152070,
      "title": "Git for the US Code",
      "type": "story",
      "url": "https://lexifina.com/blog/git-for-the-us-code"
    },
    {
      "by": "scooby7430",
      "descendants": 5,
      "id": 50269651,
      "kids": [
        50269805,
        50269859,
        50269818,
        50269825
      ],
      "score": 20,
      "time": 1793165351,
      "title": "Artificial Analysis Intelligence Index v5.0",
      "type": "story",
      "url": "https://artificialanalysis.ai/methodology/intelligence-benchmarking"
    },
    {
      "by": "acossta",
      "descendants": 493,
      "id": 50261319,
      "kids": [
        50266032,
        50269638,
        50265407,
        50265623,
        50262157,
        50265851,
        50261864,
        50263578,
        50262100,
        50268788,
        50261912,
        50265259,
        50261683,
        50261890,
        50262125,
        50261592,
        50264760,
        50268484,
        50262284,
        50263035,
        50268479,
        50265037,
        50262123,
        50262485,
        50261519,
        50263718,
        50263878,
        50268944,
        50263294,
        50265720,
        50262963,
        50262109,
        50266515,
        50264918,
        50261985,
        50267974,
        50263760,
        50262061,
        50261842,
        50261606,
        50265171,
        50261886,
        50264122,
        50263593,
        50262977,
        50261677,
        50262142,
        50261898,
        50261815,
        50265712,
        50268602,
        50261961,
        50261765,
        50261911,
        50266600,
        50263874,
        50267295,
        50266958,
        50264823,
        50261674,
        50265691,
        50264731,
        50266627,
        50262128,
        50266743,
        50267117,
        50269231,
        50267764,
        50267582,
        50263992,
        50267420,
        50262149,
        50263001,
        50266146,
        50264338,
        50265957,
        50264612,
        50262835,
        50263271,
        50262255,
        50262186,
        50261937,
        50261637,
        50261605,
        50263210,
        50266080,
        50263165,
        50266761,
        50265782,
        50261942,
        50263516,
        50261868,
        50265327,
        50263500,
        50262288,
        50262613,
        50261538,
        50269621,
        50267625,
        50267973,
        50265943,
        50261671,
        50269650,
        50268731,
        50261386,
        50261716,
        50261993,
        50262010
      ],
      "score": 823,
      "time": 1793117161,
      "title": "Genie 4",
      "type": "story",
      "url": "https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/"
    },
    {
      "by": "deaux",
      "descendants": 281,
      "id": 50261998,
      "kids": [
        50262760,
        50263647,
        50262524,
        50263519,
        50263389,
        50265981,
        50262764,
        50262762,
        50264242,
        50269026,
        50269331,
        50269366,
        50264012,
        50269362,
        50269137,
        50266436,
        50266575,
        50264474,
        50262884,
        50266995,
        50263484,
        50267213,
        50265786,
        50263007,
        50268091,
        50265464,
        50262783,
        50267847,
        50268123,
        50262576,
        50265882,
        50264396,
        50266641,
        50263618,
        50264202,
        50266826,
        50265820,
        50263598,
        50264134,
        50263418,
        50264329,
        50263633,
        50262768,
        50262740,
        50265096,
        50262859,
        50263645,
        50266401,
        50268656,
        50262677,
        50268499,
        50264086
      ],
      "score": 903,
      "time": 1793119882,
      "title": "Ghostty 1.4",
      "type": "story",
      "url": "https://ghostty.org/docs/install/release-notes/1-4-0"
    },
    {
      "by": "_Microft",
      "descendants": 25,
      "id": 50234796,
      "kids": [
        50269892,
        50268524,
        50268734,
        50268295,
        50268097,
        50267981,
        50268302,
        50269191,
        50269321,
        50269510,
        50268624,
        50269063
      ],
      "score": 163,
      "time": 1792954188,
      "title": "Ink droplets in motion snag top prize in Nikon Small World contest",
      "type": "story",
      "url": "https://arstechnica.com/science/2026/10/meet-the-2026-winner-of-nikons-small-world-photomicrography-contest/"
    },
    {
      "by": "Luc",
      "descendants": 123,
      "id": 50264853,
      "kids": [
        50265871,
        50269851,
        50266979,
        50268301,
        50265144,
        50265503,
        50268236,
        50269355,
        50266094,
        50268967,
        50265508,
        50267915,
        50267468,
        50265336,
        50268681,
        50265163,
        50268465,
        50267044,
        50268890,
        50265182,
        50268140,
        50268705,
        50265588,
        50267660,
        50266038,
        50265737,
        50265703,
        50267303,
        50265914,
        50267226,
        50267662,
        50265228,
        50265130,
        50266136,
        50265311,
        50265281,
        50266904,
        50265950,
        50266139,
        50268969,
        50265522,
        50265208,
        50267267,
        50266505,
        50266167,
        50265974,
        50265498,
        50265896,
        50268388,
        50265706,
        50266529,
        50268450,
        50265893,
        50268259,
        50265969,
        50265668
      ],
      "score": 283,
      "time": 1793130906,
      "title": "Survival LLM: AI assistant and emergency library that runs on your own computer",
      "type": "story",
      "url": "https://www.brangus.io/survival-llm"
    },
    {
      "by": "figmert",
      "descendants": 127,
      "id": 50264857,
      "kids": [
        50266179,
        50266168,
        50267106,
        50265512,
        50269607,
        50266468,
        50267843,
        50265408,
        50265373,
        50265209,
        50266126,
        50266222,
        50265801,
        50267396,
        50265112,
        50269218,
        50268668,
        50266491,
        50265117
      ],
      "score": 255,
      "time": 1793130921,
      "title": "Tailscale SSH: Investigation and remediation update",
      "type": "story",
      "url": "https://tailscale.com/ssh-investigation-update"
    },
    {
      "by": "dataking",
      "descendants": 172,
      "id": 50265609,
      "kids": [
        50268917,
        50266566,
        50269867,
        50267192,
        50265824,
        50266137,
        50269236,
        50266518,
        50266589,
        50266839,
        50266239,
        50268620,
        50269275,
        50269544,
        50269027,
        50266200,
        50267503,
        50268170,
        50266818,
        50266018,
        50268612,
        50267219,
        50266765,
        50269599,
        50266099,
        50266255,
        50269197,
        50267238,
        50266418,
        50266353,
        50268061,
        50267445,
        50267439,
        50269461,
        50269457,
        50266169,
        50268118
      ],
      "score": 197,
      "time": 1793134242,
      "title": "Early progress on accelerating drug development with Claude",
      "type": "story",
      "url": "https://www.anthropic.com/research/early-progress-drug-development"
    },
    {
      "by": "jruohonen",
      "descendants": 5,
      "id": 50219275,
      "kids": [
        50269170,
        50269517,
        50269478,
        50269279
      ],
      "score": 40,
      "time": 1792830632,
      "title": "A Love Letter to the Super Dimension Fortress",
      "type": "story",
      "url": "https://brennan.day/a-love-letter-to-the-super-dimension-fortress/"
    },
    {
      "by": "classichasclass",
      "descendants": 0,
      "id": 50227400,
      "score": 10,
      "time": 1792892391,
      "title": "MacOS Extensions Pack for the Apple Network Server v1.0",
      "type": "story",
      "url": "http://oldvcr.blogspot.com/2026/10/macos-extensions-pack-for-apple-network.html"
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
{
  "source": "reddit",
  "topic": "programming",
  "sort": "top",
  "items": [
    {
      "title": "A few of my favorite software and programming language documentaries",
      "url": "https://nate.spot/software-documentaries/",
      "permalink": "https://www.reddit.com/r/programming/comments/1xgwkhz/a_few_of_my_favorite_software_and_programming/",
      "author": "/u/bigbosmer",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/bigbosmer [link] &#32; [comments]",
      "published": "2026-10-27T16:03:54+00:00"
    },
    {
      "title": "DuckDB.NET 1.5.6.1: Reading Data Up to 12× Faster",
      "url": "https://www.giorgi.dev/database/duckdb-net-1-5-6-1-data-reader-performance/",
      "permalink": "https://www.reddit.com/r/programming/comments/1xgnigv/duckdbnet_1561_reading_data_up_to_12_faster/",
      "author": "/u/mcnamaragio",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/mcnamaragio [link] &#32; [comments]",
      "published": "2026-10-27T09:06:20+00:00"
    },
    {
      "title": "Python jettisons the native JIT, at least for now",
      "url": "https://lwn.net/SubscriberLink/1102102/489e41d80e4966aa/",
      "permalink": "https://www.reddit.com/r/programming/comments/1xhbl06/python_jettisons_the_native_jit_at_least_for_now/",
      "author": "/u/nicholashairs",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "High level summary article More detailed article In June, the Python steering council announced that it was pausing work on the JIT in CPython&#39;s main branch until there was an accepted Python Enhancement Proposal (PEP) that addressed concerns about maintenance, compatibility, and set clear success metrics as well as a timeline for completion. [....] After months of discussion, the JIT maintainers have withdrawn the PEP. For now, it appears that development on the once-promising project has come to an end &#32; submitted by &#32; /u/nicholashairs [link] &#32; [comments]",
      "published": "2026-10-28T01:55:34+00:00"
    },
    {
      "title": "Building confidence in concurrent code with a model checker - Scott Wlaschin - NDC London 2023",
      "url": "https://youtu.be/qs_mmezrOWs?is=v3oxPNQ4EFSdwgZ6",
      "permalink": "https://www.reddit.com/r/programming/comments/1xgqsqf/building_confidence_in_concurrent_code_with_a/",
      "author": "/u/1_more__user___name",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "I have followed Scott for some time because of his contributions to the fsharp learning community. He&#39;s website fsharpforfunandprofit.com is one of the best programming article websites. This talk especially is very good. I think Scott is very good at breaking down complex topics to make them seem approachable. &#32; submitted by &#32; /u/1_more__user___name [link] &#32; [comments]",
      "published": "2026-10-27T12:09:48+00:00"
    },
    {
      "title": "Billion-query-per-second lookup tables in C++",
      "url": "https://x.com/lemire/status/2115046718039306377",
      "permalink": "https://www.reddit.com/r/programming/comments/1xh15vv/billionquerypersecond_lookup_tables_in_c/",
      "author": "/u/alexeyr",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/alexeyr [link] &#32; [comments]",
      "published": "2026-10-27T18:50:27+00:00"
    },
    {
      "title": "Choose Your Backend: Three TLS Bugs in GoAhead",
      "url": "https://foxio.io/blog/choose-your-backend-three-tls-bugs-in-goahead",
      "permalink": "https://www.reddit.com/r/programming/comments/1xh84hz/choose_your_backend_three_tls_bugs_in_goahead/",
      "author": "/u/alexeyr",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/alexeyr [link] &#32; [comments]",
      "published": "2026-10-27T23:20:14+00:00"
    },
    {
      "title": "How I added dynamic social preview images to my site for almost nothing",
      "url": "https://labs.iximiuz.com/blog/adding-dynamic-social-preview-images",
      "permalink": "https://www.reddit.com/r/programming/comments/1xh55mz/how_i_added_dynamic_social_preview_images_to_my/",
      "author": "/u/iximiuz",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/iximiuz [link] &#32; [comments]",
      "published": "2026-10-27T21:19:42+00:00"
    }
  ]
}
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
      "reactions": 68,
      "comments": 35,
      "reading_time": 7,
      "author": "georgekobaidze"
    },
    {
      "title": "Stratagems #32: The AI Logged a Withdrawal. P Took It as Proof.",
      "description": "Make empty what is already empty. Let doubt breed inside doubt. — The 36 Stratagems, The Empty Fort...",
      "url": "https://dev.to/xulingfeng/stratagems-32-the-ai-logged-a-withdrawal-p-took-it-as-proof-2jo2",
      "tags": "ai, discuss, programming, career",
      "reactions": 78,
      "comments": 23,
      "reading_time": 15,
      "author": "xulingfeng"
    },
    {
      "title": "Not the End, but a Shift: How AI Is Pushing Computer Science Toward Deeper Engineering",
      "description": "If you're studying computer science right now, or you just graduated, you've probably heard some...",
      "url": "https://dev.to/james_anderson_h/not-the-end-but-a-shift-how-ai-is-pushing-computer-science-toward-deeper-engineering-47mk",
      "tags": "career, ai, computerscience, software",
      "reactions": 11,
      "comments": 0,
      "reading_time": 5,
      "author": "james_anderson_h"
    },
    {
      "title": "Microsoft’s 60,000-Employee Buyout Offer: What Should Developers Do in the AI Era?",
      "description": "A headline about 60,000 employees is difficult to ignore.  For developers, it raises uncomfortable...",
      "url": "https://dev.to/robertadam987_/microsofts-60000-employee-buyout-offer-what-should-developers-do-in-the-ai-era-48ci",
      "tags": "ai, programming, career, discuss",
      "reactions": 7,
      "comments": 0,
      "reading_time": 6,
      "author": "robertadam987_"
    },
    {
      "title": "When saying no feels like volunteering to be next",
      "description": "Your team is smaller than it was a year ago and the backlog isn't. Saying no to one more thing now reads as a risk, not a boundary. Here's how to turn a no into a trade-off the other person can actually say yes to, and when that move doesn't work at all.",
      "url": "https://dev.to/parsajiravand/when-saying-no-feels-like-volunteering-to-be-next-381d",
      "tags": "career, discuss, productivity, beginners",
      "reactions": 1,
      "comments": 1,
      "reading_time": 6,
      "author": "parsajiravand"
    },
    {
      "title": "Working in Japan? Here's the \"skill sheet\" nobody explains to you",
      "description": "If you take contract or SES (System Engineering Service) work in Japan, sooner or later an agent will...",
      "url": "https://dev.to/sudo-dev/working-in-japan-heres-the-skill-sheet-nobody-explains-to-you-26o4",
      "tags": "career, japan, python, skillsheet",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "sudo-dev"
    },
    {
      "title": "I had to let my team go. Then getting every one of them hired became my full-time job.",
      "description": "At my last startup, Intract, we raised $3 million and grew to about 80 people. I ran product and...",
      "url": "https://dev.to/landedjobs/i-had-to-let-my-team-go-then-getting-every-one-of-them-hired-became-my-full-time-job-3d3n",
      "tags": "career, startup, jobs, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "landedjobs"
    },
    {
      "title": "[Basics] Part 10. Turning a score into a decision: connecting to the business, and communication",
      "description": "Originally published at han-co.com · Part of the \"Basics\" strand of my Credit &amp; Finance Data...",
      "url": "https://dev.to/han-co/basics-part-10-turning-a-score-into-a-decision-connecting-to-the-business-and-communication-1np4",
      "tags": "machinelearning, datascience, jellyfin, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "han-co"
    },
    {
      "title": "Freelancer vs Agency for SaaS Development: A Founder's Decision Framework",
      "description": "\"Should I hire a freelancer or an agency?\" is usually the wrong first question. The right first...",
      "url": "https://dev.to/somnath_khadanga_2e5c2364/freelancer-vs-agency-for-saas-development-a-founders-decision-framework-4c2g",
      "tags": "saas, webdev, startup, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "somnath_khadanga_2e5c2364"
    },
    {
      "title": "SpaceX, Anduril and Databricks jobs API: the Greenhouse board API and the pay ranges it hides",
      "description": "SpaceX (spacex), Anduril (andurilindustries) and Databricks (databricks) post their jobs on...",
      "url": "https://dev.to/glitchbound/spacex-anduril-and-databricks-jobs-api-the-greenhouse-board-api-and-the-pay-ranges-it-hides-4hj6",
      "tags": "api, python, webscraping, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "glitchbound"
    }
  ]
}
```

