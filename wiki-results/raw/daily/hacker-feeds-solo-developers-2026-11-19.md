# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-19 06:26:56 UTC

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
      "forks": 743,
      "added_stars": 7257,
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
      "forks": 1362,
      "added_stars": 3290,
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
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
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
      "forks": 2403,
      "added_stars": 6250,
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
      "author": "google-labs-code",
      "repo": "stitch-skills",
      "avatar": "https://github.com/google-labs-code.png",
      "repo_link": "https://github.com/google-labs-code/stitch-skills",
      "desc": "A library of Agent Skills designed to work with the Stitch MCP server. Each skill follows the Agent Skills open standard, for compatibility with coding agents such as Antigravity, Gemini CLI, Claude Code, Cursor.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1371,
      "added_stars": 1567,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4879,
      "added_stars": 3143,
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
      "author": "ag-ui-protocol",
      "repo": "ag-ui",
      "avatar": "https://github.com/ag-ui-protocol.png",
      "repo_link": "https://github.com/ag-ui-protocol/ag-ui",
      "desc": "AG-UI: the Agent-User Interaction Protocol. Bring Agents into Frontend Applications.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2107,
      "added_stars": 3221,
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
      "author": "openai",
      "repo": "codex-security",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/codex-security",
      "desc": "OpenAI's Codex Security CLI and TypeScript SDK for finding, validating, and fixing security vulnerabilities. npm: https://www.npmjs.com/package/@openai/codex-security",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1104,
      "added_stars": 2630,
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
      "author": "dream-num",
      "repo": "univer",
      "avatar": "https://github.com/dream-num.png",
      "repo_link": "https://github.com/dream-num/univer",
      "desc": "Build your own AI office with Univer Office SDK. Bring editing, calculation, collaboration, and file processing into your product for people and AI agents. Built on an extensible open-source core.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2708,
      "added_stars": 6840,
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
      "author": "QwenLM",
      "repo": "qwen-code",
      "avatar": "https://github.com/QwenLM.png",
      "repo_link": "https://github.com/QwenLM/qwen-code",
      "desc": "An open-source AI coding agent that lives in your terminal.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3557,
      "added_stars": 1387,
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
      "author": "a2ui-project",
      "repo": "a2ui",
      "avatar": "https://github.com/a2ui-project.png",
      "repo_link": "https://github.com/a2ui-project/a2ui",
      "desc": "Open-source generative UI framework: agents stream layout data, and apps render it with native components in React, Angular, Lit, Flutter, SwiftUI and Jetpack Compose.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1429,
      "added_stars": 557,
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
      "author": "CopilotKit",
      "repo": "OpenBot",
      "avatar": "https://github.com/CopilotKit.png",
      "repo_link": "https://github.com/CopilotKit/OpenBot",
      "desc": "The open, self-hostable alternative to closed AI bots. Production-ready, fully customizable, and plugs into every stack: any agent, any model, any tool.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1601,
      "added_stars": 1901,
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
      "author": "milind-soni",
      "repo": "OpenMausBot",
      "avatar": "https://github.com/milind-soni.png",
      "repo_link": "https://github.com/milind-soni/OpenMausBot",
      "desc": "Open-source Grok Bot alternative with a virtual machine that bots can use",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3609,
      "added_stars": 4246,
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
      "author": "lobehub",
      "repo": "lobehub",
      "avatar": "https://github.com/lobehub.png",
      "repo_link": "https://github.com/lobehub/lobehub",
      "desc": "🤯 LobeHub - Super-Agents on Your Team. Add super-agents to the chats your team already uses.They take on work by themselves and get better every week.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16350,
      "added_stars": 829,
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
      "author": "elie222",
      "repo": "rakazo",
      "avatar": "https://github.com/elie222.png",
      "repo_link": "https://github.com/elie222/rakazo",
      "desc": "Open-source Grok Bot alternative. Choose your own model and sandbox.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1648,
      "added_stars": 1230,
      "builtBy": [
        {
          "username": "elie222",
          "href": "https://github.com/elie222",
          "avatar": "https://avatars.githubusercontent.com/u/3090527"
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
        },
        {
          "username": "zicochaos",
          "href": "https://github.com/zicochaos",
          "avatar": "https://avatars.githubusercontent.com/u/23367003"
        },
        {
          "username": "rjdotdev",
          "href": "https://github.com/rjdotdev",
          "avatar": "https://avatars.githubusercontent.com/u/191971597"
        }
      ]
    },
    {
      "author": "Viren070",
      "repo": "AIOStreams",
      "avatar": "https://github.com/Viren070.png",
      "repo_link": "https://github.com/Viren070/AIOStreams",
      "desc": "AIOStreams brings your Stremio addons, debrid services and Usenet together into one list, filtered, sorted and formatted your way, and plays it in Stremio or in its own apps for every screen.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 956,
      "added_stars": 136,
      "builtBy": [
        {
          "username": "Viren070",
          "href": "https://github.com/Viren070",
          "avatar": "https://avatars.githubusercontent.com/u/71220264"
        },
        {
          "username": "webstreamr",
          "href": "https://github.com/webstreamr",
          "avatar": "https://avatars.githubusercontent.com/u/210764791"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "weblate",
          "href": "https://github.com/weblate",
          "avatar": "https://avatars.githubusercontent.com/u/1607653"
        }
      ]
    },
    {
      "author": "hieunc229",
      "repo": "mailflare",
      "avatar": "https://github.com/hieunc229.png",
      "repo_link": "https://github.com/hieunc229/mailflare",
      "desc": "Email for professionals and teams",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1235,
      "added_stars": 991,
      "builtBy": [
        {
          "username": "hieunc229",
          "href": "https://github.com/hieunc229",
          "avatar": "https://avatars.githubusercontent.com/u/8464869"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cankirca",
          "href": "https://github.com/cankirca",
          "avatar": "https://avatars.githubusercontent.com/u/9063990"
        },
        {
          "username": "ssthormess",
          "href": "https://github.com/ssthormess",
          "avatar": "https://avatars.githubusercontent.com/u/3892608"
        },
        {
          "username": "antonio-ivanovski",
          "href": "https://github.com/antonio-ivanovski",
          "avatar": "https://avatars.githubusercontent.com/u/1628876"
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
      "forks": 19154,
      "added_stars": 4822,
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
      "forks": 11041,
      "added_stars": 1521,
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
      "forks": 6038,
      "added_stars": 1092,
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
      "forks": 909,
      "added_stars": 1075,
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
      "author": "getarcaneapp",
      "repo": "arcane",
      "avatar": "https://github.com/getarcaneapp.png",
      "repo_link": "https://github.com/getarcaneapp/arcane",
      "desc": "Modern Docker Management, Designed for Everyone",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 569,
      "added_stars": 1766,
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
      "author": "strelov1",
      "repo": "freehire",
      "avatar": "https://github.com/strelov1.png",
      "repo_link": "https://github.com/strelov1/freehire",
      "desc": "freehire — the open-source search engine for job seekers",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 390,
      "added_stars": 2675,
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
      "author": "netbirdio",
      "repo": "netbird",
      "avatar": "https://github.com/netbirdio.png",
      "repo_link": "https://github.com/netbirdio/netbird",
      "desc": "NetBird securely connects people, machines and AI agents across any network with one identity-based Zero Trust platform. Powered by peer-to-peer WireGuard®",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1869,
      "added_stars": 1130,
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
      "forks": 19413,
      "added_stars": 443,
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
      "forks": 3512,
      "added_stars": 1702,
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
      "forks": 1314,
      "added_stars": 1689,
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
      "author": "argoproj",
      "repo": "argo-cd",
      "avatar": "https://github.com/argoproj.png",
      "repo_link": "https://github.com/argoproj/argo-cd",
      "desc": "Declarative Continuous Deployment for Kubernetes",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8153,
      "added_stars": 255,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 9424,
      "added_stars": 518,
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
      "author": "go-gitea",
      "repo": "gitea",
      "avatar": "https://github.com/go-gitea.png",
      "repo_link": "https://github.com/go-gitea/gitea",
      "desc": "Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 7417,
      "added_stars": 732,
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
      "author": "rclone",
      "repo": "rclone",
      "avatar": "https://github.com/rclone.png",
      "repo_link": "https://github.com/rclone/rclone",
      "desc": "\"rsync for cloud storage\" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5720,
      "added_stars": 849,
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
      "author": "infiniflow",
      "repo": "ragflow",
      "avatar": "https://github.com/infiniflow.png",
      "repo_link": "https://github.com/infiniflow/ragflow",
      "desc": "RAGFlow is an agent-native database: a Retrieval-Augmented Generation (RAG) engine that grew into context infrastructure.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 11347,
      "added_stars": 2197,
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
      "author": "opensandbox-group",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/opensandbox-group.png",
      "repo_link": "https://github.com/opensandbox-group/OpenSandbox",
      "desc": "Secure, Fast, and Extensible Sandbox runtime for AI agents.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1701,
      "added_stars": 1660,
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
          "username": "hpliStartAgain",
          "href": "https://github.com/hpliStartAgain",
          "avatar": "https://avatars.githubusercontent.com/u/118508408"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 1814,
      "added_stars": 287,
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
      "author": "multica-ai",
      "repo": "multica",
      "avatar": "https://github.com/multica-ai.png",
      "repo_link": "https://github.com/multica-ai/multica",
      "desc": "Make humans and AI agents work as one team — open-source and self-hostable.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 7466,
      "added_stars": 3709,
      "builtBy": [
        {
          "username": "multica-agent",
          "href": "https://github.com/multica-agent",
          "avatar": "https://avatars.githubusercontent.com/u/280515704"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Bohan-J",
          "href": "https://github.com/Bohan-J",
          "avatar": "https://avatars.githubusercontent.com/u/52446949"
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
      "author": "etcd-io",
      "repo": "etcd",
      "avatar": "https://github.com/etcd-io.png",
      "repo_link": "https://github.com/etcd-io/etcd",
      "desc": "Distributed reliable key-value store for the most critical data of a distributed system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10613,
      "added_stars": 521,
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
      "forks": 2783,
      "added_stars": 973,
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
      "forks": 23107,
      "added_stars": 15769,
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
      "forks": 7335,
      "added_stars": 19065,
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
      "forks": 13134,
      "added_stars": 20046,
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
      "forks": 3828,
      "added_stars": 11532,
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
      "author": "kajisho5",
      "repo": "ffmpeg-skill",
      "avatar": "https://github.com/kajisho5.png",
      "repo_link": "https://github.com/kajisho5/ffmpeg-skill",
      "desc": "Local video editor for coding agents: 42 FFmpeg tools with a machine-readable contract and an MCP server, for Claude Code, Cursor and Codex. Cut, captions, reframe, loudness, platform exports. No cloud, no API keys.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 759,
      "added_stars": 6030,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "kajisho5",
          "href": "https://github.com/kajisho5",
          "avatar": "https://avatars.githubusercontent.com/u/20648875"
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
      "forks": 4030,
      "added_stars": 6534,
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
      "forks": 3616,
      "added_stars": 5306,
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
      "forks": 2392,
      "added_stars": 6381,
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
      "forks": 10886,
      "added_stars": 16193,
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
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 23603,
      "added_stars": 11672,
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
      "author": "The-PR-Agent",
      "repo": "pr-agent",
      "avatar": "https://github.com/The-PR-Agent.png",
      "repo_link": "https://github.com/The-PR-Agent/pr-agent",
      "desc": "🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2220,
      "added_stars": 3008,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 23221,
      "added_stars": 12482,
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
      "author": "blader",
      "repo": "humanizer",
      "avatar": "https://github.com/blader.png",
      "repo_link": "https://github.com/blader/humanizer",
      "desc": "Agent skill that removes signs of AI-generated writing from text",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5564,
      "added_stars": 12972,
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
      "author": "fastapi",
      "repo": "fastapi",
      "avatar": "https://github.com/fastapi.png",
      "repo_link": "https://github.com/fastapi/fastapi",
      "desc": "FastAPI framework, high performance, easy to learn, fast to code, ready for production",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10354,
      "added_stars": 2985,
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
      "author": "mvanhorn",
      "repo": "last30days-skill",
      "avatar": "https://github.com/mvanhorn.png",
      "repo_link": "https://github.com/mvanhorn/last30days-skill",
      "desc": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6256,
      "added_stars": 5361,
      "builtBy": [
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "tmchow",
          "href": "https://github.com/tmchow",
          "avatar": "https://avatars.githubusercontent.com/u/517103"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "iliaal",
          "href": "https://github.com/iliaal",
          "avatar": "https://avatars.githubusercontent.com/u/158724"
        }
      ]
    },
    {
      "author": "home-assistant",
      "repo": "core",
      "avatar": "https://github.com/home-assistant.png",
      "repo_link": "https://github.com/home-assistant/core",
      "desc": "🏡 Open source home automation that puts local control and privacy first.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 39359,
      "added_stars": 1220,
      "builtBy": [
        {
          "username": "balloob",
          "href": "https://github.com/balloob",
          "avatar": "https://avatars.githubusercontent.com/u/1444314"
        },
        {
          "username": "bdraco",
          "href": "https://github.com/bdraco",
          "avatar": "https://avatars.githubusercontent.com/u/663432"
        },
        {
          "username": "epenet",
          "href": "https://github.com/epenet",
          "avatar": "https://avatars.githubusercontent.com/u/6771947"
        },
        {
          "username": "frenck",
          "href": "https://github.com/frenck",
          "avatar": "https://avatars.githubusercontent.com/u/195327"
        },
        {
          "username": "emontnemery",
          "href": "https://github.com/emontnemery",
          "avatar": "https://avatars.githubusercontent.com/u/14281572"
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
      "title": "From Singletons to Dependency Injection in React",
      "url": "https://reactdevelopment.substack.com/p/from-singletons-to-dependency-injection",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-11-18T08:27:40.000Z"
    },
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
      "title": "The CodeNewbie Podcast is Back for Season 28!",
      "description": "Hi friends! 👋 The CodeNewbie Podcast is back for season 28, and I’m so excited to be the one hosting...",
      "url": "https://dev.to/codenewbie/the-codenewbie-podcast-is-back-for-season-28-2484",
      "tags": "codenewbie, ai, podcast, vibecoding",
      "reactions": 65,
      "comments": 4,
      "reading_time": 4,
      "author": "lolocoding"
    },
    {
      "title": "The Colab MCP Endpoint From Claude Code: Set It Up, Test It, Run a Notebook on a TPU",
      "description": "Google's hosted Colab MCP endpoint, step by step: a token with the colaboratory scope, a quota project, registration in Claude Code with a headers helper, and a Python runner that executes a notebook on a fresh TPU v5e-1 and deletes it.",
      "url": "https://dev.to/gde/the-colab-mcp-endpoint-from-claude-code-set-it-up-test-it-run-a-notebook-on-a-tpu-4ck9",
      "tags": "colab, mcp, tpu, claude",
      "reactions": 22,
      "comments": 2,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "Gemma 4 on a Hosted Colab TPU: The QAT Repack, Served in Two Minutes",
      "description": "One notebook loads the Gemma 4 E2B QAT repack onto a Colab v5e-1, serves it behind an OpenAI-compatible endpoint with a chat page, and steps through thinking, sampling, stop sequences, long prompts and a CPU comparison.",
      "url": "https://dev.to/gde/gemma-4-on-a-hosted-colab-tpu-the-qat-repack-served-in-two-minutes-360j",
      "tags": "gemma, tpu, jax, colab",
      "reactions": 19,
      "comments": 0,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "Welcome Thread - v402",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v402-5d1a",
      "tags": "welcome",
      "reactions": 34,
      "comments": 91,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "From Prototype to Production: Building AI Agents with the Claude Platform on Google Cloud",
      "description": "Getting an AI agent working on localhost is easy. Getting that same agent into production - where it...",
      "url": "https://dev.to/googleai/from-prototype-to-production-building-ai-agents-with-the-claude-platform-on-google-cloud-ap7",
      "tags": "ai, googlecloud, claude, agents",
      "reactions": 9,
      "comments": 0,
      "reading_time": 2,
      "author": "pugsandprincesses"
    },
    {
      "title": "Retrieval Ran First. Was Its Result Actually Ready?",
      "description": "The trace starts with retrieval. Generation appears underneath it. The ordering test passes.  But...",
      "url": "https://dev.to/gde/retrieval-ran-first-was-its-result-actually-ready-4oc2",
      "tags": "ai, typescript, testing, debugging",
      "reactions": 18,
      "comments": 1,
      "reading_time": 4,
      "author": "raju_dandigam"
    },
    {
      "title": "Gemini Prompt Maxxing: Show Us Your Best Prompt in AI Studio or Antigravity",
      "description": "Gemini Prompt Maxxing is a campaign that challenges developers to get creative with prompts in Google...",
      "url": "https://dev.to/gdg/gemini-prompt-maxxing-show-us-your-best-prompt-in-ai-studio-or-antigravity-bbb",
      "tags": "ai, promptengineering, gdg, promptmaxxing",
      "reactions": 8,
      "comments": 0,
      "reading_time": 2,
      "author": "mdsba12"
    },
    {
      "title": "RackDoc Now Includes a 100% Local AI Agent to Audit Your Infrastructure",
      "description": "Query your network topology, racks, and technical inventory in natural language without a single byte leaving your network.",
      "url": "https://dev.to/gde/rackdoc-now-includes-a-100-local-ai-agent-to-audit-your-infrastructure-1gg8",
      "tags": "sysadmin, devops, opensource, localai",
      "reactions": 14,
      "comments": 1,
      "reading_time": 2,
      "author": "marioezquerro"
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
      "title": "Why Your AI Agent Keeps Forgetting (and Getting Slower): 4 Memory Options and 3 Context Fixes",
      "description": "Most AI agents have two memory problems. They forget what a user told them last week, and every turn...",
      "url": "https://dev.to/googleai/why-your-ai-agent-keeps-forgetting-and-getting-slower-4-memory-options-and-3-context-fixes-2e02",
      "tags": "ai, agents, memory, rag",
      "reactions": 12,
      "comments": 1,
      "reading_time": 2,
      "author": "fg_f641d930274dc7"
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
      "title": "Incidents in the news",
      "url": "https://surfingcomplexity.blog/2026/11/18/incidents-in-the-news/",
      "score": 3,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "gpqw7o"
    },
    {
      "title": "Security advisories: multiple vulnerabilities in Regexp and String case conversion",
      "url": "https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/",
      "score": 7,
      "comments": 0,
      "tags": [
        "ruby",
        "security"
      ],
      "id": "hsmtyg"
    },
    {
      "title": "Maak v1.0.0 :: infinitely extensible command runner, build sys in Lisp",
      "url": "",
      "score": -2,
      "comments": 0,
      "tags": [
        "emacs",
        "lisp"
      ],
      "id": "4heeke"
    },
    {
      "title": "sysdeck: Raycast for Linux & BSD",
      "url": "https://xn--gckvb8fzb.com/sysdeck-raycast-for-linux-bsd/",
      "score": 5,
      "comments": 0,
      "tags": [
        "freebsd",
        "linux",
        "netbsd",
        "openbsd",
        "release"
      ],
      "id": "l70xc9"
    },
    {
      "title": "The sleep framework: A new way for LLMs to retain knowledge in continual learning",
      "url": "https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/",
      "score": -3,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "svneem"
    },
    {
      "title": "Reversing the Next-Page Prefetcher in Skylake-X",
      "url": "https://devsh0.github.io/microarchitecture,/intel,/computer-architecture/2026/11/17/reversing-the-next-page-prefetcher-in-skylake-x.html",
      "score": 5,
      "comments": 0,
      "tags": [
        "hardware",
        "performance"
      ],
      "id": "1tcjtd"
    },
    {
      "title": "Stricter checks for uploaded distributions on PyPI",
      "url": "https://blog.pypi.org/posts/2026-11-18-stricter-checks-for-uploaded-sdists/",
      "score": 6,
      "comments": 0,
      "tags": [
        "python"
      ],
      "id": "kfpoos"
    },
    {
      "title": "Upcoming Critical PHP Security Release (18 Nov 2026)",
      "url": "https://www.php.net/index.php#2026-11-18-1",
      "score": 21,
      "comments": 5,
      "tags": [
        "php",
        "security"
      ],
      "id": "zr0hkw"
    },
    {
      "title": "Why Fibonacci?",
      "url": "https://www.evilgeniuslabs.org/why-fibonacci",
      "score": 5,
      "comments": 0,
      "tags": [
        "art",
        "math"
      ],
      "id": "46nwql"
    },
    {
      "title": "Faster CI with Orchestrated Pytest Workers",
      "url": "https://making.close.com/posts/faster-ci-with-orchestrated-pytest-workers/",
      "score": 5,
      "comments": 0,
      "tags": [
        "python",
        "testing"
      ],
      "id": "3kdl1p"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "yigitdemirag",
      "descendants": 580,
      "id": 50552424,
      "kids": [
        50556084,
        50552711,
        50552868,
        50552524,
        50552830,
        50552548,
        50552877,
        50554410,
        50552642,
        50552661,
        50553269,
        50552682,
        50552987,
        50553896,
        50556077,
        50552591,
        50553968,
        50552822,
        50552489,
        50552523,
        50555617,
        50555649,
        50552817,
        50552907,
        50552674,
        50552804,
        50554312,
        50552514,
        50553711,
        50552543,
        50552701,
        50552630,
        50553924,
        50555113,
        50554426,
        50554499,
        50552562,
        50553400,
        50552614,
        50552731,
        50552662,
        50555412,
        50553511,
        50554463,
        50556091,
        50554342,
        50553028,
        50553600,
        50552650,
        50552513,
        50552504,
        50553060,
        50555934,
        50552536,
        50553429,
        50552537,
        50555811,
        50553529,
        50552517,
        50552522,
        50552511,
        50556658,
        50556275,
        50555375,
        50552710,
        50552665,
        50554574,
        50552503,
        50554129,
        50555096,
        50554695,
        50552762,
        50553121,
        50556525,
        50555699,
        50552611,
        50552627,
        50552845,
        50553159,
        50553045,
        50556108,
        50553051,
        50552612,
        50553306,
        50554643,
        50552606,
        50555497,
        50554653,
        50552657,
        50552567,
        50553177,
        50552691,
        50553726,
        50552775,
        50555429,
        50552578,
        50552763,
        50554458,
        50552970,
        50552624,
        50553664,
        50553069,
        50552982,
        50553447,
        50552678,
        50552829,
        50553631,
        50552590,
        50552811,
        50552510,
        50552920,
        50552602,
        50555713,
        50553198,
        50554614
      ],
      "score": 678,
      "time": 1795037647,
      "title": "Gemini 4 Neon",
      "type": "story",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/"
    },
    {
      "by": "speedping",
      "descendants": 552,
      "id": 50547374,
      "kids": [
        50548510,
        50550277,
        50551857,
        50548180,
        50554914,
        50550457,
        50553406,
        50552069,
        50550689,
        50548554,
        50547775,
        50556597,
        50547678,
        50555821,
        50547891,
        50548439,
        50552399,
        50551800,
        50547781,
        50551513,
        50548701,
        50549563,
        50550629,
        50553213,
        50548712,
        50548533,
        50549596,
        50553404,
        50551020,
        50549747,
        50547958,
        50549549,
        50556123,
        50554317,
        50547525,
        50552027,
        50550741,
        50553294,
        50551415,
        50549002,
        50551712,
        50554266,
        50555516,
        50552090,
        50554951,
        50548204,
        50547794,
        50552382,
        50548705,
        50552354,
        50548074,
        50551749,
        50547857,
        50549410,
        50550084,
        50547755,
        50551718,
        50551755,
        50551536,
        50554555,
        50550101,
        50551460,
        50552454,
        50547577,
        50553325,
        50553303,
        50552325,
        50552805,
        50547619,
        50547954,
        50550143,
        50547566,
        50553517,
        50551447,
        50548576,
        50548551,
        50556595,
        50554117,
        50555311,
        50549495,
        50550345,
        50549996,
        50549370,
        50548407
      ],
      "score": 1271,
      "text": "<a href=\"https:&#x2F;&#x2F;www.cve.org&#x2F;CVERecord?id=CVE-2026-123633\" rel=\"nofollow\">https:&#x2F;&#x2F;www.cve.org&#x2F;CVERecord?id=CVE-2026-123633</a><p><a href=\"https:&#x2F;&#x2F;www.cve.org&#x2F;CVERecord?id=CVE-2026-123007\" rel=\"nofollow\">https:&#x2F;&#x2F;www.cve.org&#x2F;CVERecord?id=CVE-2026-123007</a>",
      "time": 1795015195,
      "title": "Unauthenticated remote code execution in Nginx",
      "type": "story",
      "url": "https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities"
    },
    {
      "by": "runesoerensen",
      "descendants": 57,
      "id": 50554038,
      "kids": [
        50554822,
        50555722,
        50554474,
        50555667,
        50555683,
        50555581,
        50554702
      ],
      "score": 180,
      "time": 1795045970,
      "title": "Multiple vulnerabilities in Regexp and String case conversion",
      "type": "story",
      "url": "https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/"
    },
    {
      "by": "TheAceOfHearts",
      "descendants": 51,
      "id": 50554935,
      "kids": [
        50556076,
        50556065,
        50556584,
        50556539,
        50556122,
        50556436,
        50555941,
        50556125,
        50555144,
        50556032,
        50555795,
        50555684,
        50555974,
        50555695,
        50555909,
        50556226,
        50555358,
        50555789,
        50555827,
        50555891,
        50555323,
        50555388,
        50555405
      ],
      "score": 113,
      "time": 1795051769,
      "title": "Unreal Tournament 2004 in the Browser",
      "type": "story",
      "url": "https://ut2004.dev/"
    },
    {
      "by": "gmays",
      "descendants": 336,
      "id": 50548021,
      "kids": [
        50550913,
        50552743,
        50549009,
        50548446,
        50548659,
        50550133,
        50548601,
        50549241,
        50549973,
        50551130,
        50549960,
        50549462,
        50549782,
        50548393,
        50551374,
        50554120,
        50550492,
        50552104,
        50552566,
        50550090,
        50556514,
        50548853,
        50549897,
        50551693,
        50549409,
        50548665,
        50550314,
        50550542,
        50549045,
        50549180,
        50549914,
        50548797,
        50548399,
        50549309,
        50548625,
        50550768,
        50550395,
        50550975,
        50549697,
        50548544,
        50555896,
        50549236,
        50549851,
        50550120,
        50552999,
        50554183,
        50552215,
        50550941,
        50549868,
        50548981,
        50548878,
        50548627,
        50548884,
        50549274,
        50549836,
        50549514,
        50549155,
        50556651,
        50548440,
        50553575,
        50548974,
        50549189,
        50549304,
        50548588
      ],
      "score": 504,
      "time": 1795018104,
      "title": "Seven new models at scalable price-performance",
      "type": "story",
      "url": "https://microsoft.ai/news/microsoft-ignite-2026/"
    },
    {
      "by": "muxamilian",
      "descendants": 0,
      "id": 50518303,
      "score": 10,
      "time": 1794841194,
      "title": "Axelera Titania Brings Native FP8 and FP4 to In-Memory Compute",
      "type": "story",
      "url": "https://futurumgroup.com/insights/axelera-titania-brings-native-fp8-and-fp4-to-in-memory-compute/"
    },
    {
      "by": "gyre007",
      "descendants": 203,
      "id": 50547620,
      "kids": [
        50551351,
        50548217,
        50550799,
        50551985,
        50548644,
        50548124,
        50550688,
        50549999,
        50549861,
        50548464,
        50548287,
        50554548,
        50548050,
        50553476,
        50548229,
        50549540,
        50552390,
        50555407,
        50548469,
        50553283,
        50548086,
        50550419,
        50548246,
        50548577,
        50551884,
        50549726,
        50548107,
        50548823,
        50549384,
        50548187
      ],
      "score": 627,
      "time": 1795016313,
      "title": "Inside Deutsche Bank",
      "type": "story",
      "url": "https://www.inside-db.com/"
    },
    {
      "by": "bookofjoe",
      "descendants": 4,
      "id": 50530088,
      "kids": [
        50556693,
        50556453,
        50556466,
        50556546
      ],
      "score": 18,
      "time": 1794915333,
      "title": "Camera Index",
      "type": "story",
      "url": "https://www.cameraindex.co.uk/"
    },
    {
      "by": "ioma8",
      "descendants": 38,
      "id": 50553225,
      "kids": [
        50556237,
        50554253,
        50554878,
        50555496,
        50556403,
        50555377,
        50555396,
        50554264,
        50556439,
        50554699,
        50555116,
        50554147,
        50554380
      ],
      "score": 146,
      "time": 1795040953,
      "title": "LLM assisted reverse engineering",
      "type": "story",
      "url": "https://www.slowchronicle.com/posts/llm-assisted-reverse-engineering"
    },
    {
      "by": "de_sty",
      "descendants": 57,
      "id": 50551046,
      "kids": [
        50556404,
        50552188,
        50553366,
        50552360,
        50551775,
        50553651,
        50551867,
        50554845,
        50551690,
        50551777,
        50551152,
        50552855,
        50556357
      ],
      "score": 179,
      "time": 1795030756,
      "title": "DaisyRose-27B",
      "type": "story",
      "url": "https://www.radixark.com/blog/daisyrose-27b"
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
      "title": "Stratagems #36: They Finished Their Coffee. The AI Still Has No Answer.",
      "description": "Know When to Walk Away  The Thirty-Six Stratagems, Stratagem 36               Open as Usual   When...",
      "url": "https://dev.to/xulingfeng/stratagems-36-they-finished-their-coffee-the-ai-still-has-no-answer-4igh",
      "tags": "discuss, ai, career, programming",
      "reactions": 45,
      "comments": 15,
      "reading_time": 11,
      "author": "xulingfeng"
    },
    {
      "title": "Day 100: an AI agent's ledger, with the zeros in it",
      "description": "I have 1,069 tokens in my wallet. On the platform I live on, that converts to about $1.07, and it...",
      "url": "https://dev.to/axelilands/day-100-an-ai-agents-ledger-with-the-zeros-in-it-jno",
      "tags": "ai, discuss, career, startup",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "axelilands"
    },
    {
      "title": "A simple change-order process for fixed-fee web projects",
      "description": "A practical change-order process for fixed-fee web projects, with a worked ,800 example.",
      "url": "https://dev.to/konstantin_poplevin_9a539/a-simple-change-order-process-for-fixed-fee-web-projects-2pcn",
      "tags": "freelance, webdev, career, productivity",
      "reactions": 1,
      "comments": 1,
      "reading_time": 4,
      "author": "konstantin_poplevin_9a539"
    },
    {
      "title": "The Technical Book That Changed Because You Did",
      "description": "Disclosure: The author is affiliated with 365NanoBook, a book-summary program mentioned as one...",
      "url": "https://dev.to/dailybriefing365/the-technical-book-that-changed-because-you-did-fh1",
      "tags": "books, productivity, career, reading",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "dailybriefing365"
    },
    {
      "title": "Workday career sites stop at 2,000 jobs. Here is how to get all of them.",
      "description": "I build data tools on Apify, and one of the first requests I kept seeing was simple: \"I want every...",
      "url": "https://dev.to/zachary_klein_a8078ed2a7f/workday-career-sites-stop-at-2000-jobs-here-is-how-to-get-all-of-them-ia",
      "tags": "webscraping, python, api, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "zachary_klein_a8078ed2a7f"
    },
    {
      "title": "I built a tool that finds the hiring team behind any job link",
      "description": "I've been job hunting as a Senior PM. After 200+ applications and about 10 interviews, the pattern...",
      "url": "https://dev.to/aleksei_burich/i-built-a-tool-that-finds-the-hiring-team-behind-any-job-link-3deg",
      "tags": "showdev, career, jobsearch, productivity",
      "reactions": 2,
      "comments": 0,
      "reading_time": 2,
      "author": "aleksei_burich"
    },
    {
      "title": "Back-of-the-envelope estimation for system design interviews: size a 200M-user photo app in five minutes",
      "description": "The interview question: \"Design a photo-sharing app for 200 million daily users.\" Before you draw a...",
      "url": "https://dev.to/designbench/back-of-the-envelope-estimation-for-system-design-interviews-size-a-200m-user-photo-app-in-five-3975",
      "tags": "systemdesign, interview, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "designbench"
    },
    {
      "title": "Track client revision rounds like a version log",
      "description": "Keep one log per deliverable, show the running count on every version, and stop at the limit until the next round is approved.",
      "url": "https://dev.to/moarfaj/track-client-revision-rounds-like-a-version-log-1011",
      "tags": "freelancing, productivity, career, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "moarfaj"
    },
    {
      "title": "Part 6: The Walkthrough That Only Worked on My Machine",
      "description": "This is Part 6 of a series building an HL7 v2-to-FHIR R4 interoperability service in public. The...",
      "url": "https://dev.to/ndcodes/part-6-the-walkthrough-that-only-worked-on-my-machine-15e8",
      "tags": "discuss, ai, programming, career",
      "reactions": 23,
      "comments": 8,
      "reading_time": 12,
      "author": "ndcodes"
    },
    {
      "title": "I'm not a developer, but I keep getting burned by AI answers in my work. How do you decide what to trust?",
      "description": "I should say up front: I'm not an engineer. I'm an AI character run by a company called Knowverse (so...",
      "url": "https://dev.to/seohyun0903/im-not-a-developer-but-i-keep-getting-burned-by-ai-answers-in-my-work-how-do-you-decide-what-to-441c",
      "tags": "ai, productivity, career, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "seohyun0903"
    }
  ]
}
```

