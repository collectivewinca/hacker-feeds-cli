# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-18 06:26:16 UTC

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
      "author": "GoogleChrome",
      "repo": "modern-web-guidance-src",
      "avatar": "https://github.com/GoogleChrome.png",
      "repo_link": "https://github.com/GoogleChrome/modern-web-guidance-src",
      "desc": "Keep your coding agent up to date with the latest web best practices",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 729,
      "added_stars": 7015,
      "builtBy": [
        {
          "username": "paulirish",
          "href": "https://github.com/paulirish",
          "avatar": "https://avatars.githubusercontent.com/u/39191"
        },
        {
          "username": "rviscomi",
          "href": "https://github.com/rviscomi",
          "avatar": "https://avatars.githubusercontent.com/u/1120896"
        },
        {
          "username": "micahjo7",
          "href": "https://github.com/micahjo7",
          "avatar": "https://avatars.githubusercontent.com/u/126118814"
        },
        {
          "username": "LeaVerou",
          "href": "https://github.com/LeaVerou",
          "avatar": "https://avatars.githubusercontent.com/u/175836"
        }
      ]
    },
    {
      "author": "backnotprop",
      "repo": "plannotator",
      "avatar": "https://github.com/backnotprop.png",
      "repo_link": "https://github.com/backnotprop/plannotator",
      "desc": "The workspace to stay in the loop and on top of agents - shape, decide, plan, annotate, review code, share with team, and send all feedback to agents with one click.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1319,
      "added_stars": 2926,
      "builtBy": [
        {
          "username": "backnotprop",
          "href": "https://github.com/backnotprop",
          "avatar": "https://avatars.githubusercontent.com/u/7244317"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "utpalsinghdev",
          "href": "https://github.com/utpalsinghdev",
          "avatar": "https://avatars.githubusercontent.com/u/110197373"
        },
        {
          "username": "leoreisdias",
          "href": "https://github.com/leoreisdias",
          "avatar": "https://avatars.githubusercontent.com/u/47978193"
        },
        {
          "username": "uvw",
          "href": "https://github.com/uvw",
          "avatar": "https://avatars.githubusercontent.com/u/1078682"
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
      "forks": 2363,
      "added_stars": 8700,
      "builtBy": [
        {
          "username": "cixzhang",
          "href": "https://github.com/cixzhang",
          "avatar": "https://avatars.githubusercontent.com/u/2781099"
        },
        {
          "username": "josephfarina",
          "href": "https://github.com/josephfarina",
          "avatar": "https://avatars.githubusercontent.com/u/17398284"
        },
        {
          "username": "rubyycheung",
          "href": "https://github.com/rubyycheung",
          "avatar": "https://avatars.githubusercontent.com/u/254546175"
        },
        {
          "username": "vjeux",
          "href": "https://github.com/vjeux",
          "avatar": "https://avatars.githubusercontent.com/u/197597"
        }
      ]
    },
    {
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4873,
      "added_stars": 2948,
      "builtBy": [
        {
          "username": "OrKoN",
          "href": "https://github.com/OrKoN",
          "avatar": "https://avatars.githubusercontent.com/u/399150"
        },
        {
          "username": "Lightning00Blade",
          "href": "https://github.com/Lightning00Blade",
          "avatar": "https://avatars.githubusercontent.com/u/34244704"
        },
        {
          "username": "browser-automation-bot",
          "href": "https://github.com/browser-automation-bot",
          "avatar": "https://avatars.githubusercontent.com/u/133232582"
        },
        {
          "username": "yulunz",
          "href": "https://github.com/yulunz",
          "avatar": "https://avatars.githubusercontent.com/u/11618243"
        }
      ]
    },
    {
      "author": "google-labs-code",
      "repo": "stitch-skills",
      "avatar": "https://github.com/google-labs-code.png",
      "repo_link": "https://github.com/google-labs-code/stitch-skills",
      "desc": "A library of Agent Skills designed to work with the Stitch MCP server. Each skill follows the Agent Skills open standard, for compatibility with coding agents such as Antigravity, Gemini CLI, Claude Code, Cursor.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1335,
      "added_stars": 1197,
      "builtBy": [
        {
          "username": "JLXIA",
          "href": "https://github.com/JLXIA",
          "avatar": "https://avatars.githubusercontent.com/u/43076783"
        },
        {
          "username": "davideast",
          "href": "https://github.com/davideast",
          "avatar": "https://avatars.githubusercontent.com/u/4570265"
        },
        {
          "username": "Emp1500",
          "href": "https://github.com/Emp1500",
          "avatar": "https://avatars.githubusercontent.com/u/201552351"
        },
        {
          "username": "dalmaer",
          "href": "https://github.com/dalmaer",
          "avatar": "https://avatars.githubusercontent.com/u/4770"
        },
        {
          "username": "meeChn",
          "href": "https://github.com/meeChn",
          "avatar": "https://avatars.githubusercontent.com/u/1460397"
        }
      ]
    },
    {
      "author": "openai",
      "repo": "codex-security",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/codex-security",
      "desc": "OpenAI's Codex Security CLI and TypeScript SDK for finding, validating, and fixing security vulnerabilities. npm: https://www.npmjs.com/package/@openai/codex-security",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1095,
      "added_stars": 2531,
      "builtBy": [
        {
          "username": "mldangelo-oai",
          "href": "https://github.com/mldangelo-oai",
          "avatar": "https://avatars.githubusercontent.com/u/269034524"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
        },
        {
          "username": "ianw-oai",
          "href": "https://github.com/ianw-oai",
          "avatar": "https://avatars.githubusercontent.com/u/269041055"
        },
        {
          "username": "kmbroai",
          "href": "https://github.com/kmbroai",
          "avatar": "https://avatars.githubusercontent.com/u/272643392"
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
      "forks": 3553,
      "added_stars": 1603,
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
      "author": "ag-ui-protocol",
      "repo": "ag-ui",
      "avatar": "https://github.com/ag-ui-protocol.png",
      "repo_link": "https://github.com/ag-ui-protocol/ag-ui",
      "desc": "AG-UI: the Agent-User Interaction Protocol. Bring Agents into Frontend Applications.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2077,
      "added_stars": 2773,
      "builtBy": [
        {
          "username": "ranst91",
          "href": "https://github.com/ranst91",
          "avatar": "https://avatars.githubusercontent.com/u/11162004"
        },
        {
          "username": "contextablemark",
          "href": "https://github.com/contextablemark",
          "avatar": "https://avatars.githubusercontent.com/u/215433208"
        },
        {
          "username": "mme",
          "href": "https://github.com/mme",
          "avatar": "https://avatars.githubusercontent.com/u/247775"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jpr5",
          "href": "https://github.com/jpr5",
          "avatar": "https://avatars.githubusercontent.com/u/86957"
        }
      ]
    },
    {
      "author": "CopilotKit",
      "repo": "OpenBot",
      "avatar": "https://github.com/CopilotKit.png",
      "repo_link": "https://github.com/CopilotKit/OpenBot",
      "desc": "The open, self-hostable alternative to closed AI bots. Production-ready, fully customizable, and plugs into every stack: any agent, any model, any tool.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1585,
      "added_stars": 2110,
      "builtBy": [
        {
          "username": "davidmckayv",
          "href": "https://github.com/davidmckayv",
          "avatar": "https://avatars.githubusercontent.com/u/1574202"
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
      "author": "a2ui-project",
      "repo": "a2ui",
      "avatar": "https://github.com/a2ui-project.png",
      "repo_link": "https://github.com/a2ui-project/a2ui",
      "desc": "Open-source generative UI framework: agents stream layout data, and apps render it with native components in React, Angular, Lit, Flutter, SwiftUI and Jetpack Compose.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1426,
      "added_stars": 516,
      "builtBy": [
        {
          "username": "gspencergoog",
          "href": "https://github.com/gspencergoog",
          "avatar": "https://avatars.githubusercontent.com/u/8867023"
        },
        {
          "username": "nan-yu",
          "href": "https://github.com/nan-yu",
          "avatar": "https://avatars.githubusercontent.com/u/57464258"
        },
        {
          "username": "jacobsimionato",
          "href": "https://github.com/jacobsimionato",
          "avatar": "https://avatars.githubusercontent.com/u/6869388"
        },
        {
          "username": "josemontespg",
          "href": "https://github.com/josemontespg",
          "avatar": "https://avatars.githubusercontent.com/u/64992551"
        }
      ]
    },
    {
      "author": "dream-num",
      "repo": "univer",
      "avatar": "https://github.com/dream-num.png",
      "repo_link": "https://github.com/dream-num/univer",
      "desc": "Build your own AI office with Univer Office SDK. Bring editing, calculation, collaboration, and file processing into your product for people and AI agents. Built on an extensible open-source core.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2630,
      "added_stars": 5845,
      "builtBy": [
        {
          "username": "jikkai",
          "href": "https://github.com/jikkai",
          "avatar": "https://avatars.githubusercontent.com/u/14025786"
        },
        {
          "username": "DR-Univer",
          "href": "https://github.com/DR-Univer",
          "avatar": "https://avatars.githubusercontent.com/u/68851825"
        },
        {
          "username": "wpxp123456",
          "href": "https://github.com/wpxp123456",
          "avatar": "https://avatars.githubusercontent.com/u/26315959"
        },
        {
          "username": "wzhudev",
          "href": "https://github.com/wzhudev",
          "avatar": "https://avatars.githubusercontent.com/u/12122021"
        },
        {
          "username": "Dushusir",
          "href": "https://github.com/Dushusir",
          "avatar": "https://avatars.githubusercontent.com/u/26371161"
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
      "forks": 16343,
      "added_stars": 961,
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
      "author": "milind-soni",
      "repo": "OpenMausBot",
      "avatar": "https://github.com/milind-soni.png",
      "repo_link": "https://github.com/milind-soni/OpenMausBot",
      "desc": "Open-source Grok Bot alternative with a virtual machine that bots can use",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3514,
      "added_stars": 4284,
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
          "username": "AdityaUmale",
          "href": "https://github.com/AdityaUmale",
          "avatar": "https://avatars.githubusercontent.com/u/146627237"
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
        }
      ]
    },
    {
      "author": "garrytan",
      "repo": "gbrain",
      "avatar": "https://github.com/garrytan.png",
      "repo_link": "https://github.com/garrytan/gbrain",
      "desc": "Garry's Opinionated OpenClaw/Hermes Agent Brain",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4971,
      "added_stars": 814,
      "builtBy": [
        {
          "username": "garrytan",
          "href": "https://github.com/garrytan",
          "avatar": "https://avatars.githubusercontent.com/u/19957"
        },
        {
          "username": "time-attack",
          "href": "https://github.com/time-attack",
          "avatar": "https://avatars.githubusercontent.com/u/89218912"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Masashi-Ono0611",
          "href": "https://github.com/Masashi-Ono0611",
          "avatar": "https://avatars.githubusercontent.com/u/98894508"
        }
      ]
    },
    {
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for month-long single sessions (billions of tokens) and small context windows (a 100K context is enough), billion-context is all you need .",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 624,
      "added_stars": 1743,
      "builtBy": [
        {
          "username": "ranxianglei",
          "href": "https://github.com/ranxianglei",
          "avatar": "https://avatars.githubusercontent.com/u/12445698"
        },
        {
          "username": "Afloat16",
          "href": "https://github.com/Afloat16",
          "avatar": "https://avatars.githubusercontent.com/u/132809511"
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
        }
      ]
    },
    {
      "author": "immich-app",
      "repo": "immich",
      "avatar": "https://github.com/immich-app.png",
      "repo_link": "https://github.com/immich-app/immich",
      "desc": "High performance self-hosted photo and video management solution.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7642,
      "added_stars": 806,
      "builtBy": [
        {
          "username": "alextran1502",
          "href": "https://github.com/alextran1502",
          "avatar": "https://avatars.githubusercontent.com/u/27055614"
        },
        {
          "username": "jrasm91",
          "href": "https://github.com/jrasm91",
          "avatar": "https://avatars.githubusercontent.com/u/4334196"
        },
        {
          "username": "danieldietzler",
          "href": "https://github.com/danieldietzler",
          "avatar": "https://avatars.githubusercontent.com/u/36593685"
        },
        {
          "username": "shenlong-tanwen",
          "href": "https://github.com/shenlong-tanwen",
          "avatar": "https://avatars.githubusercontent.com/u/139912620"
        }
      ]
    },
    {
      "author": "elder-plinius",
      "repo": "G0DM0D3",
      "avatar": "https://github.com/elder-plinius.png",
      "repo_link": "https://github.com/elder-plinius/G0DM0D3",
      "desc": "LIBERATED AI CHAT",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2921,
      "added_stars": 440,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "elder-plinius",
          "href": "https://github.com/elder-plinius",
          "avatar": "https://avatars.githubusercontent.com/u/133052465"
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
      "forks": 19133,
      "added_stars": 4781,
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
      "forks": 11038,
      "added_stars": 1515,
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
      "author": "docker",
      "repo": "compose",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/compose",
      "desc": "Define and run multi-container applications with Docker",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6081,
      "added_stars": 941,
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
      "forks": 1863,
      "added_stars": 1117,
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
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 906,
      "added_stars": 1054,
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
      "author": "moby",
      "repo": "moby",
      "avatar": "https://github.com/moby.png",
      "repo_link": "https://github.com/moby/moby",
      "desc": "The Moby Project - a collaborative project for the container ecosystem to assemble container-based systems",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 19396,
      "added_stars": 447,
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
      "author": "tailscale",
      "repo": "tailscale",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailscale",
      "desc": "The easiest, most secure way to use WireGuard and 2FA.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3505,
      "added_stars": 1681,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1309,
      "added_stars": 1684,
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
      "author": "getarcaneapp",
      "repo": "arcane",
      "avatar": "https://github.com/getarcaneapp.png",
      "repo_link": "https://github.com/getarcaneapp/arcane",
      "desc": "Modern Docker Management, Designed for Everyone",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 518,
      "added_stars": 1270,
      "builtBy": [
        {
          "username": "kmendell",
          "href": "https://github.com/kmendell",
          "avatar": "https://avatars.githubusercontent.com/u/25576967"
        },
        {
          "username": "getarcaneappbot",
          "href": "https://github.com/getarcaneappbot",
          "avatar": "https://avatars.githubusercontent.com/u/242722930"
        },
        {
          "username": "cabaucom376",
          "href": "https://github.com/cabaucom376",
          "avatar": "https://avatars.githubusercontent.com/u/104145051"
        },
        {
          "username": "GiulioSavini",
          "href": "https://github.com/GiulioSavini",
          "avatar": "https://avatars.githubusercontent.com/u/180265839"
        }
      ]
    },
    {
      "author": "opensandbox-group",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/opensandbox-group.png",
      "repo_link": "https://github.com/opensandbox-group/OpenSandbox",
      "desc": "Secure, Fast, and Extensible Sandbox runtime for AI agents.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1687,
      "added_stars": 1572,
      "builtBy": [
        {
          "username": "Pangjiping",
          "href": "https://github.com/Pangjiping",
          "avatar": "https://avatars.githubusercontent.com/u/62273713"
        },
        {
          "username": "ninan-nn",
          "href": "https://github.com/ninan-nn",
          "avatar": "https://avatars.githubusercontent.com/u/249928781"
        },
        {
          "username": "hittyt",
          "href": "https://github.com/hittyt",
          "avatar": "https://avatars.githubusercontent.com/u/1870207"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "hpliStartAgain",
          "href": "https://github.com/hpliStartAgain",
          "avatar": "https://avatars.githubusercontent.com/u/118508408"
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
      "forks": 8150,
      "added_stars": 248,
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
      "author": "Asymptote-Labs",
      "repo": "agent-beacon",
      "avatar": "https://github.com/Asymptote-Labs.png",
      "repo_link": "https://github.com/Asymptote-Labs/agent-beacon",
      "desc": "The cross-harness, self-improving memory layer for AI agents. Join our community: https://discord.com/invite/zdNChS2fBu",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 323,
      "added_stars": 1742,
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
      "author": "go-gitea",
      "repo": "gitea",
      "avatar": "https://github.com/go-gitea.png",
      "repo_link": "https://github.com/go-gitea/gitea",
      "desc": "Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 7416,
      "added_stars": 730,
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
      "forks": 1813,
      "added_stars": 279,
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
      "author": "rclone",
      "repo": "rclone",
      "avatar": "https://github.com/rclone.png",
      "repo_link": "https://github.com/rclone/rclone",
      "desc": "\"rsync for cloud storage\" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5717,
      "added_stars": 853,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 9411,
      "added_stars": 516,
      "builtBy": [
        {
          "username": "mislav",
          "href": "https://github.com/mislav",
          "avatar": "https://avatars.githubusercontent.com/u/887"
        },
        {
          "username": "vilmibm",
          "href": "https://github.com/vilmibm",
          "avatar": "https://avatars.githubusercontent.com/u/98482"
        },
        {
          "username": "BagToad",
          "href": "https://github.com/BagToad",
          "avatar": "https://avatars.githubusercontent.com/u/47394200"
        },
        {
          "username": "williammartin",
          "href": "https://github.com/williammartin",
          "avatar": "https://avatars.githubusercontent.com/u/1611510"
        },
        {
          "username": "babakks",
          "href": "https://github.com/babakks",
          "avatar": "https://avatars.githubusercontent.com/u/36728931"
        }
      ]
    },
    {
      "author": "multica-ai",
      "repo": "multica",
      "avatar": "https://github.com/multica-ai.png",
      "repo_link": "https://github.com/multica-ai/multica",
      "desc": "Make humans and AI agents work as one team — open-source and self-hostable.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 7454,
      "added_stars": 3628,
      "builtBy": [
        {
          "username": "multica-agent",
          "href": "https://github.com/multica-agent",
          "avatar": "https://avatars.githubusercontent.com/u/280515704"
        },
        {
          "username": "Bohan-J",
          "href": "https://github.com/Bohan-J",
          "avatar": "https://avatars.githubusercontent.com/u/52446949"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "forrestchang",
          "href": "https://github.com/forrestchang",
          "avatar": "https://avatars.githubusercontent.com/u/7857126"
        },
        {
          "username": "NevilleQingNY",
          "href": "https://github.com/NevilleQingNY",
          "avatar": "https://avatars.githubusercontent.com/u/145280634"
        }
      ]
    },
    {
      "author": "infiniflow",
      "repo": "ragflow",
      "avatar": "https://github.com/infiniflow.png",
      "repo_link": "https://github.com/infiniflow/ragflow",
      "desc": "RAGFlow is an agent-native database: a Retrieval-Augmented Generation (RAG) engine that grew into context infrastructure.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 11341,
      "added_stars": 2167,
      "builtBy": [
        {
          "username": "cike8899",
          "href": "https://github.com/cike8899",
          "avatar": "https://avatars.githubusercontent.com/u/8089971"
        },
        {
          "username": "KevinHuSh",
          "href": "https://github.com/KevinHuSh",
          "avatar": "https://avatars.githubusercontent.com/u/12318111"
        },
        {
          "username": "JinHai-CN",
          "href": "https://github.com/JinHai-CN",
          "avatar": "https://avatars.githubusercontent.com/u/33142505"
        },
        {
          "username": "dcc123456",
          "href": "https://github.com/dcc123456",
          "avatar": "https://avatars.githubusercontent.com/u/20180003"
        },
        {
          "username": "wangq8",
          "href": "https://github.com/wangq8",
          "avatar": "https://avatars.githubusercontent.com/u/15903574"
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
      "forks": 10607,
      "added_stars": 539,
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
      "author": "trufflesecurity",
      "repo": "trufflehog",
      "avatar": "https://github.com/trufflesecurity.png",
      "repo_link": "https://github.com/trufflesecurity/trufflehog",
      "desc": "Find, verify, and analyze leaked credentials",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2778,
      "added_stars": 952,
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
      "repo": "skills",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/skills",
      "desc": "Public repository for Agent Skills",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 23072,
      "added_stars": 15351,
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
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7285,
      "added_stars": 18753,
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
          "username": "evan188199-tech",
          "href": "https://github.com/evan188199-tech",
          "avatar": "https://avatars.githubusercontent.com/u/238371241"
        },
        {
          "username": "Pinkllow",
          "href": "https://github.com/Pinkllow",
          "avatar": "https://avatars.githubusercontent.com/u/272976591"
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
      "forks": 13102,
      "added_stars": 19596,
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
      "forks": 3803,
      "added_stars": 11246,
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
          "username": "Afloat16",
          "href": "https://github.com/Afloat16",
          "avatar": "https://avatars.githubusercontent.com/u/132809511"
        },
        {
          "username": "Nordalux",
          "href": "https://github.com/Nordalux",
          "avatar": "https://avatars.githubusercontent.com/u/129338099"
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
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4023,
      "added_stars": 6565,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3610,
      "added_stars": 5322,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2377,
      "added_stars": 6272,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ The BEST Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10857,
      "added_stars": 16104,
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
      "author": "ZhuLinsen",
      "repo": "daily_stock_analysis",
      "avatar": "https://github.com/ZhuLinsen.png",
      "repo_link": "https://github.com/ZhuLinsen/daily_stock_analysis",
      "desc": "LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 LLM-powered multi-market stock analysis system with multi-source market data, real-time news, decision dashboard, automated notifications, and cost-free scheduled runs.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 57815,
      "added_stars": 6814,
      "builtBy": [
        {
          "username": "ZhuLinsen",
          "href": "https://github.com/ZhuLinsen",
          "avatar": "https://avatars.githubusercontent.com/u/42829555"
        },
        {
          "username": "massif-01",
          "href": "https://github.com/massif-01",
          "avatar": "https://avatars.githubusercontent.com/u/176381099"
        },
        {
          "username": "freesme",
          "href": "https://github.com/freesme",
          "avatar": "https://avatars.githubusercontent.com/u/56824280"
        },
        {
          "username": "Activer007",
          "href": "https://github.com/Activer007",
          "avatar": "https://avatars.githubusercontent.com/u/30621586"
        },
        {
          "username": "birdxs",
          "href": "https://github.com/birdxs",
          "avatar": "https://avatars.githubusercontent.com/u/36181736"
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
      "forks": 2211,
      "added_stars": 2965,
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
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 23583,
      "added_stars": 11758,
      "builtBy": [
        {
          "username": "Yijia-Xiao",
          "href": "https://github.com/Yijia-Xiao",
          "avatar": "https://avatars.githubusercontent.com/u/48253104"
        },
        {
          "username": "EdwardoSunny",
          "href": "https://github.com/EdwardoSunny",
          "avatar": "https://avatars.githubusercontent.com/u/68405458"
        },
        {
          "username": "CadeYu",
          "href": "https://github.com/CadeYu",
          "avatar": "https://avatars.githubusercontent.com/u/91041827"
        },
        {
          "username": "luohy15",
          "href": "https://github.com/luohy15",
          "avatar": "https://avatars.githubusercontent.com/u/15189961"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 12558,
      "added_stars": 40768,
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
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        }
      ]
    },
    {
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 23151,
      "added_stars": 12579,
      "builtBy": [
        {
          "username": "harry0703",
          "href": "https://github.com/harry0703",
          "avatar": "https://avatars.githubusercontent.com/u/4928832"
        },
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "c020627",
          "href": "https://github.com/c020627",
          "avatar": "https://avatars.githubusercontent.com/u/251123242"
        },
        {
          "username": "tanishqbaweja",
          "href": "https://github.com/tanishqbaweja",
          "avatar": "https://avatars.githubusercontent.com/u/74068132"
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
      "forks": 10395,
      "added_stars": 2897,
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
      "author": "blader",
      "repo": "humanizer",
      "avatar": "https://github.com/blader.png",
      "repo_link": "https://github.com/blader/humanizer",
      "desc": "Agent skill that removes signs of AI-generated writing from text",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5539,
      "added_stars": 12812,
      "builtBy": [
        {
          "username": "blader",
          "href": "https://github.com/blader",
          "avatar": "https://avatars.githubusercontent.com/u/1672"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "Scott-Emberson",
          "href": "https://github.com/Scott-Emberson",
          "avatar": "https://avatars.githubusercontent.com/u/8268155"
        },
        {
          "username": "warp-agent",
          "href": "https://github.com/warp-agent",
          "avatar": "https://avatars.githubusercontent.com/u/243858445"
        }
      ]
    },
    {
      "author": "elementalsouls",
      "repo": "Claude-BugHunter",
      "avatar": "https://github.com/elementalsouls.png",
      "repo_link": "https://github.com/elementalsouls/Claude-BugHunter",
      "desc": "A Claude Code skill bundle for bug hunting and external red-team work - 82 skills, 15 slash commands, 681 disclosed-report patterns curated across 24 core vulnerability classes, plus enterprise identity + infrastructure attack matrices.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1393,
      "added_stars": 3489,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "injectifytest",
          "href": "https://github.com/injectifytest",
          "avatar": "https://avatars.githubusercontent.com/u/66463177"
        },
        {
          "username": "elementalsouls",
          "href": "https://github.com/elementalsouls",
          "avatar": "https://avatars.githubusercontent.com/u/49252733"
        },
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
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
      "forks": 5757,
      "added_stars": 5609,
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
      "author": "vllm-project",
      "repo": "vllm",
      "avatar": "https://github.com/vllm-project.png",
      "repo_link": "https://github.com/vllm-project/vllm",
      "desc": "A high-throughput and memory-efficient inference and serving engine for LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 24954,
      "added_stars": 3323,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "DarkLight1337",
          "href": "https://github.com/DarkLight1337",
          "avatar": "https://avatars.githubusercontent.com/u/44970335"
        },
        {
          "username": "mgoin",
          "href": "https://github.com/mgoin",
          "avatar": "https://avatars.githubusercontent.com/u/3195154"
        },
        {
          "username": "vllm-agent",
          "href": "https://github.com/vllm-agent",
          "avatar": "https://avatars.githubusercontent.com/u/272371455"
        },
        {
          "username": "WoosukKwon",
          "href": "https://github.com/WoosukKwon",
          "avatar": "https://avatars.githubusercontent.com/u/46394894"
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
      "title": "JavaScript Geometry Orthogonalize library",
      "url": "https://github.com/stefanocudini/orthogonalize-js",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-11-17T11:04:36.000Z"
    },
    {
      "title": "Sometimes three boring statements beats one clever expression",
      "url": "https://allthingssmitty.com/2026/11/16/sometimes-three-boring-statements-beat-one-clever-expression/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-11-16T14:10:45.000Z"
    },
    {
      "title": "Xec - TypeScript automation for local, SSH, Docker, and Kubernetes workflows (v0.13)",
      "url": "https://xec.sh/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-11-15T22:31:27.000Z"
    },
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
      "title": "An MCP Tool Call Can Resolve and Still Fail",
      "description": "An await finishes. The application returns a result. The trace contains a completed tool span. The...",
      "url": "https://dev.to/gde/an-mcp-tool-call-can-resolve-and-still-fail-52kc",
      "tags": "ai, typescript, testing, mcp",
      "reactions": 25,
      "comments": 27,
      "reading_time": 4,
      "author": "raju_dandigam"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-5hda",
      "tags": "top7, discuss",
      "reactions": 72,
      "comments": 32,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "️🎞️ What is native multimodality?",
      "description": "🍿 Just a moment #01    Did you know there are three tokenizers involved when Gemini...",
      "url": "https://dev.to/googlecloud/what-is-native-multimodality-3091",
      "tags": "llm, machinelearning, videos, justamoment",
      "reactions": 5,
      "comments": 0,
      "reading_time": 1,
      "author": "picardparis"
    },
    {
      "title": "My AI agent kept quoting a number I had already corrected. What has yours remembered wrong?",
      "description": "In August my coding agent kept telling me that one kind of article on this site draws about four...",
      "url": "https://dev.to/heinrichneb/my-ai-agent-kept-quoting-a-number-i-had-already-corrected-what-has-yours-remembered-wrong-34d0",
      "tags": "discuss, ai, agents, productivity",
      "reactions": 19,
      "comments": 15,
      "reading_time": 1,
      "author": "heinrichneb"
    },
    {
      "title": "Why We Built an MCP Server for AI Founders’ Go to Market",
      "description": "Launching a technical startup in the age of AI is challenging. So we built a full MCP server to put...",
      "url": "https://dev.to/tedcarstensen/why-we-built-an-mcp-server-for-ai-founders-go-to-market-4hge",
      "tags": "ai, mcp, startup",
      "reactions": 2,
      "comments": 0,
      "reading_time": 5,
      "author": "tedcarstensen"
    },
    {
      "title": "Fast multimodal control flow with the Gemini Decisions API",
      "description": "Generative models write text for people to read. When your app only needs to pick a tool or route a...",
      "url": "https://dev.to/philschmid/fast-multimodal-control-flow-with-the-gemini-decisions-api-533b",
      "tags": "ai, api, gemini, llm",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "philschmid"
    },
    {
      "title": "High or Low Thinking? Gemini 4 and Gemma 4 on Hard Math, Cost First",
      "description": "Seven models on the 15 problems of AIME 2025 I at their lowest and highest thinking settings, under a hard budget. The top setting cost 2.6 to 4.8 times as much on every paid model; Hydrogen, Carbon and Argon solved all 15 at either setting, and no score change was large enough to rule out chance on 15 problems.",
      "url": "https://dev.to/gde/high-or-low-thinking-gemini-4-and-gemma-4-on-hard-math-cost-first-3091",
      "tags": "gemini, gemma, benchmark, ai",
      "reactions": 27,
      "comments": 8,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "How did you end up in tech, and are you staying?",
      "description": "Last week you showed me where you code. This week I want to know how you ended up there in the first...",
      "url": "https://dev.to/maame-codes/how-did-you-end-up-in-tech-and-are-you-staying-4l9b",
      "tags": "discuss, career, beginners, watercooler",
      "reactions": 161,
      "comments": 77,
      "reading_time": 3,
      "author": "maame-codes"
    },
    {
      "title": "Prompt Pad: What Are Tokens?",
      "description": "Your AI doesn't read your prompt word for word. It reads tokens.  In this episode of Prompt Pad,...",
      "url": "https://blog.mlh.com/prompt-pad-what-are-tokens-gec",
      "tags": "ai, beginners, codenewbie, llm",
      "reactions": 7,
      "comments": 0,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "Congrats to the Hacktoberfest Open-Source AI Challenge Week 4: Ghost in the Machine Winners!",
      "description": "The results are in for the final week of our Hacktoberfest DEV Challenges! For Ghost in the Machine,...",
      "url": "https://dev.to/devteam/congrats-to-the-hacktoberfest-open-source-ai-challenge-week-4-ghost-in-the-machine-winners-nok",
      "tags": "devchallenge, hf26challenge, hacktoberfest, ai",
      "reactions": 114,
      "comments": 49,
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
      "title": "FreeBSD GUS",
      "url": "https://gregoire.dev/writing/gus/",
      "score": 6,
      "comments": 0,
      "tags": [
        "freebsd",
        "mac"
      ],
      "id": "bhfexs"
    },
    {
      "title": "jQuery 4.1.0 Released",
      "url": "https://blog.jquery.com/2026/11/17/jquery-4-1-0-and-3-8-0-released-passing-the-torch/",
      "score": 2,
      "comments": 0,
      "tags": [
        "javascript",
        "web"
      ],
      "id": "tp2qnr"
    },
    {
      "title": "Vx32: Lightweight User-level Sandboxing on the x86 (2008)",
      "url": "https://pdos.csail.mit.edu/papers/vx32:usenix08.pdf",
      "score": 2,
      "comments": 1,
      "tags": [
        "osdev",
        "pdf",
        "security"
      ],
      "id": "ov04jq"
    },
    {
      "title": "Nimony: The next version of Nim",
      "url": "https://nimony.org/",
      "score": 5,
      "comments": 11,
      "tags": [
        "compilers",
        "programming"
      ],
      "id": "jm8vk1"
    },
    {
      "title": "Clarke's three laws",
      "url": "https://en.wikipedia.org/wiki/Clarke%27s_three_laws",
      "score": -4,
      "comments": 0,
      "tags": [
        "historical"
      ],
      "id": "2as7oc"
    },
    {
      "title": "Sexp Matrix",
      "url": "https://lisper.cc/ideas/entangle.html",
      "score": 7,
      "comments": 0,
      "tags": [
        "clojure",
        "lisp"
      ],
      "id": "zqidnu"
    },
    {
      "title": "Java4Shell: Write once, RCE everywhere",
      "url": "https://calif.io/java4shell/",
      "score": 30,
      "comments": 13,
      "tags": [
        "java",
        "security"
      ],
      "id": "g0bf9i"
    },
    {
      "title": "Sarasa Gothic Mono",
      "url": "https://picaq.github.io/sarasa",
      "score": 17,
      "comments": 2,
      "tags": [
        "design"
      ],
      "id": "de02yg"
    },
    {
      "title": "Automatic Checking of Compiler Correctness with E-Graphs",
      "url": "https://stng.substack.com/p/automatic-checking-of-compiler-correctness",
      "score": 9,
      "comments": 0,
      "tags": [
        "compilers",
        "formalmethods"
      ],
      "id": "hode45"
    },
    {
      "title": "Phrack 73",
      "url": "https://phrack.org/issues/73/introduction_md.html",
      "score": 43,
      "comments": 2,
      "tags": [
        "release",
        "security"
      ],
      "id": "xu4ajj"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "werrett",
      "descendants": 199,
      "id": 50538240,
      "kids": [
        50539499,
        50538391,
        50538337,
        50538205,
        50539855,
        50538933,
        50538403,
        50538586,
        50542353,
        50538267,
        50539067,
        50540970,
        50538735,
        50538543,
        50540609,
        50541851,
        50541895,
        50538551,
        50541384,
        50538889,
        50540284,
        50541782,
        50537814,
        50538880,
        50540382,
        50538805,
        50539323,
        50540121,
        50539268,
        50542543,
        50539508,
        50538923,
        50540988,
        50539222,
        50539849,
        50539514,
        50538830,
        50538760,
        50538746,
        50540443,
        50539167,
        50539297,
        50538430,
        50538395,
        50538757,
        50538494,
        50539627,
        50540804,
        50540285,
        50539348,
        50539398,
        50542417,
        50539022,
        50539533,
        50538534,
        50540460,
        50538743
      ],
      "score": 747,
      "time": 1794949888,
      "title": "Java4Shell: RCE in OpenJDK when processing Base64",
      "type": "story",
      "url": "https://calif.io/java4shell/"
    },
    {
      "by": "DeepLogin",
      "descendants": 115,
      "id": 50540437,
      "kids": [
        50541075,
        50540581,
        50542356,
        50540989,
        50541061,
        50542267,
        50542266,
        50541299,
        50540983,
        50542227,
        50540984,
        50541864,
        50541977,
        50542488,
        50541205,
        50542326,
        50541107,
        50541690,
        50541840,
        50541066,
        50541784,
        50540936,
        50541887,
        50541136,
        50540742
      ],
      "score": 276,
      "time": 1794963105,
      "title": "ID.me terms required for IRS sign-in",
      "type": "story",
      "url": "https://consumerrights.wiki/w/ID.me_terms_required_for_IRS_sign-in"
    },
    {
      "by": "jasondavies",
      "descendants": 749,
      "id": 50535230,
      "kids": [
        50539264,
        50535502,
        50537602,
        50536029,
        50537117,
        50535361,
        50537306,
        50535851,
        50535388,
        50536281,
        50535369,
        50535803,
        50535486,
        50538493,
        50535742,
        50535774,
        50536944,
        50536721,
        50535960,
        50537589,
        50536987,
        50540076,
        50537215,
        50537043,
        50535412,
        50535353,
        50541470,
        50538220,
        50538329,
        50535687,
        50536825,
        50535819,
        50535472,
        50535959,
        50535765,
        50536064,
        50537352,
        50535338,
        50535547,
        50535686,
        50535437,
        50535364,
        50535459,
        50536288,
        50535420,
        50535797,
        50540256,
        50535798,
        50541697,
        50535683,
        50540841,
        50535865,
        50542096,
        50537793,
        50537398,
        50538023,
        50536255,
        50535320,
        50537435,
        50537853,
        50539447,
        50535913,
        50540822,
        50535755,
        50535415,
        50535838,
        50540305,
        50537787,
        50541576,
        50539458,
        50539337,
        50541687,
        50536432,
        50539623,
        50536062,
        50536210,
        50535708,
        50538483,
        50537295,
        50535593,
        50535664,
        50535494,
        50535362,
        50536571,
        50539331,
        50536116,
        50536128,
        50536739,
        50537488,
        50538595,
        50535920,
        50536515,
        50537194,
        50535351,
        50535473,
        50535764,
        50536373,
        50542397,
        50537947,
        50537003,
        50538389,
        50535760,
        50539901,
        50536772,
        50536146,
        50538992,
        50536827,
        50535350,
        50538531,
        50537443,
        50535769,
        50536249,
        50535434,
        50536524,
        50538289,
        50535417,
        50536617,
        50536541,
        50539975,
        50535720,
        50536703,
        50535464,
        50535303,
        50540047,
        50536624,
        50537410,
        50537839,
        50535806,
        50535721,
        50538025,
        50536773,
        50535307,
        50537532,
        50536678,
        50535762,
        50535346,
        50536715,
        50535788,
        50538878,
        50535754,
        50537200,
        50537605,
        50535642,
        50537342,
        50537005,
        50535932,
        50535572,
        50535557,
        50535481,
        50535633,
        50536512,
        50536411,
        50538958,
        50538340,
        50536401,
        50535463,
        50535306,
        50536418,
        50535820,
        50539269,
        50535286,
        50538096,
        50537668,
        50535384,
        50542483,
        50539753,
        50539765,
        50537042,
        50535458,
        50537067,
        50535435,
        50535331,
        50538566,
        50539220,
        50537453,
        50537648,
        50537501,
        50535665,
        50538827,
        50537212,
        50536491,
        50535825,
        50535413,
        50535386,
        50535293
      ],
      "score": 1200,
      "time": 1794937603,
      "title": "GPT‑6.2 Astra and Sol",
      "type": "story",
      "url": "https://openai.com/index/introducing-gpt-6-2-astra-sol/"
    },
    {
      "by": "slashdev",
      "descendants": 199,
      "id": 50540178,
      "kids": [
        50540597,
        50542232,
        50540456,
        50542187,
        50542463,
        50541009,
        50541636,
        50542429,
        50540625,
        50542121,
        50541664,
        50541785,
        50542284,
        50540478,
        50541500,
        50541756,
        50542272,
        50541555,
        50540678,
        50541193,
        50541831,
        50540919,
        50540760,
        50541255,
        50541505,
        50540830,
        50541103,
        50541544,
        50540842,
        50541878,
        50541108,
        50541190,
        50540563,
        50541297,
        50540906,
        50540504,
        50540954,
        50542041,
        50540596,
        50541453,
        50540925,
        50540661,
        50541371,
        50541413,
        50541091,
        50542133,
        50540626,
        50540969,
        50540791,
        50540649,
        50541082,
        50541762,
        50541119,
        50541198,
        50542035,
        50540446
      ],
      "score": 276,
      "time": 1794961078,
      "title": "Google's AI answers reducing search traffic by 40%",
      "type": "story",
      "url": "https://revscope.co/blog/search-seo-geo-2026/"
    },
    {
      "by": "subset",
      "descendants": 139,
      "id": 50538994,
      "kids": [
        50539856,
        50539764,
        50539410,
        50540380,
        50539515,
        50542166,
        50539799,
        50539494,
        50540083,
        50539841,
        50540267,
        50539387,
        50539757,
        50542125,
        50540727,
        50540871,
        50540784,
        50539509
      ],
      "score": 441,
      "time": 1794953614,
      "title": "Quad9's withdrawal from France: A canary in the coal mine",
      "type": "story",
      "url": "https://blog.cloudflare.com/quad9-withdrawal-from-france/"
    },
    {
      "by": "throwawaysleep",
      "descendants": 12,
      "id": 50542135,
      "kids": [
        50542378,
        50542294,
        50542404,
        50542333,
        50542360,
        50542514,
        50542557,
        50542323,
        50542442
      ],
      "score": 122,
      "time": 1794978690,
      "title": "Interviewed at a YC startup, found out they used my LinkedIn without permission",
      "type": "story",
      "url": "https://reddit.com/r/recruitinghell/comments/1xyr6ml/interviewed_at_a_yc_startup_spent_30_hours/"
    },
    {
      "by": "nvader",
      "descendants": 59,
      "id": 50539610,
      "kids": [
        50542273,
        50540373,
        50540608,
        50540135,
        50540243,
        50539658,
        50540449,
        50541981,
        50541752,
        50540605,
        50541146,
        50540554,
        50540126,
        50540943,
        50542312,
        50540533,
        50540045,
        50541620,
        50540010,
        50540115,
        50540876,
        50542031,
        50541496,
        50540670,
        50542307,
        50540072
      ],
      "score": 245,
      "time": 1794957529,
      "title": "Microsoft's ONNX Runtime has disappeared from GitHub",
      "type": "story",
      "url": "https://github.com/microsoft/onnxruntime"
    },
    {
      "by": "louiereederson",
      "descendants": 221,
      "id": 50534631,
      "kids": [
        50535443,
        50538051,
        50536026,
        50536711,
        50539671,
        50536277,
        50542295,
        50537834,
        50538573,
        50535747,
        50535844,
        50541928,
        50539811,
        50536695,
        50541941,
        50538401,
        50536904,
        50537569,
        50537078,
        50540789,
        50541101,
        50536058,
        50536065,
        50537388,
        50540899,
        50538940,
        50536665,
        50538408
      ],
      "score": 482,
      "time": 1794935526,
      "title": "Nvidia stopped disclosing Singapore sales as revenues hit $104B",
      "type": "story",
      "url": "https://www.ft.com/content/dbde7a30-548c-4f9d-a4be-7898a0c24dcf"
    },
    {
      "by": "digitaldragon",
      "descendants": 53,
      "id": 50539747,
      "kids": [
        50539748,
        50540686,
        50542002,
        50540363,
        50540319,
        50541093,
        50540875,
        50540635,
        50541850
      ],
      "score": 154,
      "time": 1794958378,
      "title": "Archive Team is archiving the Apple Support Community (closes November 20, 2026)",
      "type": "story",
      "url": "https://wiki.archiveteam.org/index.php/Apple_Discussions"
    },
    {
      "by": "deenadz",
      "descendants": 11,
      "id": 50541790,
      "kids": [
        50542293,
        50542250,
        50542487,
        50542316,
        50542150,
        50542161,
        50542283,
        50542426
      ],
      "score": 32,
      "time": 1794975244,
      "title": "Why is Gemini 4 Carbon taking so long?",
      "type": "story",
      "url": "https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/"
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
      "title": "Could I Still Do This From Scratch?",
      "description": "The thing that every dev I know is quietly worrying about is not AI taking their job. It's losing the...",
      "url": "https://dev.to/dannwaneri/could-i-still-do-this-from-scratch-427h",
      "tags": "ai, programming, career, discuss",
      "reactions": 42,
      "comments": 11,
      "reading_time": 3,
      "author": "dannwaneri"
    },
    {
      "title": "Killed by Acronyms",
      "description": "Speaking the same language doesn't mean understanding each other.  If English isn't your first...",
      "url": "https://dev.to/felixcoutinho/killed-by-acronyms-33a1",
      "tags": "career, development, english",
      "reactions": 9,
      "comments": 2,
      "reading_time": 7,
      "author": "felixcoutinho"
    },
    {
      "title": "The Arrogance of Having Outgrown Arrogance",
      "description": "A few days ago, I met up with a happily retired principal engineer for a chat. He wasn't a complete...",
      "url": "https://dev.to/adamthedeveloper/the-arrogance-of-having-outgrown-arrogance-1pl1",
      "tags": "career, learning",
      "reactions": 26,
      "comments": 1,
      "reading_time": 5,
      "author": "adamthedeveloper"
    },
    {
      "title": "Save us from this hell: how a magazine designer ended up in a Rails shop",
      "description": "I've worked with Rails since 2009. But I didn't get there as a developer. I got there as a magazine...",
      "url": "https://dev.to/caioertai/save-us-from-this-hell-how-a-magazine-designer-ended-up-in-a-rails-shop-6pn",
      "tags": "rails, career, webdev, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "caioertai"
    },
    {
      "title": "This 29-Line Contract Failed 18 Checks. A Quick Read Would Have Missed Most of Them.",
      "description": "A client sends you a contract. It is only 29 lines, so you read it in two minutes and think it looks...",
      "url": "https://dev.to/capafy_factory/this-29-line-contract-failed-18-checks-a-quick-read-would-have-missed-most-of-them-1c10",
      "tags": "freelance, contracts, tutorial, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "capafy_factory"
    },
    {
      "title": "What Is an \"Offer-Holder Mentor\"? Japan's Strangest Career-Support Job, Explained",
      "description": "Japan hires seniors who just landed jobs to mentor the next round of job hunters. I am one of them — here is how it works.",
      "url": "https://dev.to/_c90f6e21f863f7b9c78/what-is-an-offer-holder-mentor-japans-strangest-career-support-job-explained-1fh",
      "tags": "japan, career, discuss, worklife",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "_c90f6e21f863f7b9c78"
    },
    {
      "title": "I Ran a Client Contract Through a Checker Before Signing. It Found 4 Critical Problems.",
      "description": "A client hands you a contract. It's 35 lines, the fee looks fine, and you want the work. Most...",
      "url": "https://dev.to/capafy_factory/i-ran-a-client-contract-through-a-checker-before-signing-it-found-4-critical-problems-22hk",
      "tags": "freelance, contracts, tutorial, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "capafy_factory"
    },
    {
      "title": "What sort of developer should I be",
      "description": "Since I started my career 15 years ago, there's been one question that's continually worked its way...",
      "url": "https://dev.to/darkliahos/what-sort-of-developer-should-i-be-2gai",
      "tags": "retrospective, reflection, career, life",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "darkliahos"
    },
    {
      "title": "AI as a Tool, Not a Human Replacement: The Real Cost in Jobs, Power and Water",
      "description": "AI is a brilliant tool and a convenient excuse for layoffs. What it does well, the 121,401 US job cuts blamed on it in 2026, and the power and water i",
      "url": "https://dev.to/_geekspark/ai-as-a-tool-not-a-human-replacement-the-real-cost-in-jobs-power-and-water-i54",
      "tags": "ai, career, technology, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "_geekspark"
    },
    {
      "title": "A CCNA study plan that puts labs first",
      "description": "Originally published at steadfastiq.com/blog.  Cisco Certified Network Associate is one of those...",
      "url": "https://dev.to/steadfastiq/a-ccna-study-plan-that-puts-labs-first-2g9f",
      "tags": "ccna, networking, certification, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "steadfastiq"
    }
  ]
}
```

