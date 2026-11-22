# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-22 06:24:55 UTC

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
      "author": "backnotprop",
      "repo": "plannotator",
      "avatar": "https://github.com/backnotprop.png",
      "repo_link": "https://github.com/backnotprop/plannotator",
      "desc": "The workspace to stay in the loop and on top of agents - shape, decide, plan, annotate, review code, share with team, and send all feedback to agents with one click.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1414,
      "added_stars": 3396,
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
      "author": "google-labs-code",
      "repo": "stitch-skills",
      "avatar": "https://github.com/google-labs-code.png",
      "repo_link": "https://github.com/google-labs-code/stitch-skills",
      "desc": "A library of Agent Skills designed to work with the Stitch MCP server. Each skill follows the Agent Skills open standard, for compatibility with coding agents such as Antigravity, Gemini CLI, Claude Code, Cursor.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1449,
      "added_stars": 2431,
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
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
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
        }
      ]
    },
    {
      "author": "GoogleChrome",
      "repo": "modern-web-guidance-src",
      "avatar": "https://github.com/GoogleChrome.png",
      "repo_link": "https://github.com/GoogleChrome/modern-web-guidance-src",
      "desc": "Keep your coding agent up to date with the latest web best practices",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 798,
      "added_stars": 4400,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4906,
      "added_stars": 2795,
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
      "forks": 2149,
      "added_stars": 3792,
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
      "author": "meta",
      "repo": "astryx",
      "avatar": "https://github.com/meta.png",
      "repo_link": "https://github.com/meta/astryx",
      "desc": "An open source design system that's fully customizable and agent ready",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2505,
      "added_stars": 3967,
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
      "author": "dream-num",
      "repo": "univer",
      "avatar": "https://github.com/dream-num.png",
      "repo_link": "https://github.com/dream-num/univer",
      "desc": "Build your own AI office with Univer Office SDK. Bring editing, calculation, collaboration, and file processing into your product for people and AI agents. Built on an extensible open-source core.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2838,
      "added_stars": 7240,
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
      "author": "a2ui-project",
      "repo": "a2ui",
      "avatar": "https://github.com/a2ui-project.png",
      "repo_link": "https://github.com/a2ui-project/a2ui",
      "desc": "Open-source generative UI framework: agents stream layout data, and apps render it with native components in React, Angular, Lit, Flutter, SwiftUI and Jetpack Compose.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1437,
      "added_stars": 383,
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
      "author": "QwenLM",
      "repo": "qwen-code",
      "avatar": "https://github.com/QwenLM.png",
      "repo_link": "https://github.com/QwenLM/qwen-code",
      "desc": "An open-source AI coding agent that lives in your terminal.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3577,
      "added_stars": 667,
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
      "author": "openai",
      "repo": "codex-security",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/codex-security",
      "desc": "OpenAI's Codex Security CLI and TypeScript SDK for finding, validating, and fixing security vulnerabilities. npm: https://www.npmjs.com/package/@openai/codex-security",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1127,
      "added_stars": 774,
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
      "author": "hieunc229",
      "repo": "mailflare",
      "avatar": "https://github.com/hieunc229.png",
      "repo_link": "https://github.com/hieunc229/mailflare",
      "desc": "Email for professionals and teams",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1303,
      "added_stars": 1236,
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
          "username": "bobmcdonald0",
          "href": "https://github.com/bobmcdonald0",
          "avatar": "https://avatars.githubusercontent.com/u/266144304"
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
      "forks": 3791,
      "added_stars": 3909,
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
      "author": "Viren070",
      "repo": "AIOStreams",
      "avatar": "https://github.com/Viren070.png",
      "repo_link": "https://github.com/Viren070/AIOStreams",
      "desc": "AIOStreams brings your Stremio addons, debrid services and Usenet together into one list, filtered, sorted and formatted your way, and plays it in Stremio or in its own apps for every screen.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 959,
      "added_stars": 135,
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
      "author": "lobehub",
      "repo": "lobehub",
      "avatar": "https://github.com/lobehub.png",
      "repo_link": "https://github.com/lobehub/lobehub",
      "desc": "🤯 LobeHub - Super-Agents on Your Team. Add super-agents to the chats your team already uses.They take on work by themselves and get better every week.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16340,
      "added_stars": 489,
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
      "author": "CopilotKit",
      "repo": "OpenBot",
      "avatar": "https://github.com/CopilotKit.png",
      "repo_link": "https://github.com/CopilotKit/OpenBot",
      "desc": "The open, self-hostable alternative to closed AI bots. Production-ready, fully customizable, and plugs into every stack: any agent, any model, any tool.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1646,
      "added_stars": 922,
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
      "author": "google-labs-code",
      "repo": "design.md",
      "avatar": "https://github.com/google-labs-code.png",
      "repo_link": "https://github.com/google-labs-code/design.md",
      "desc": "A format specification for describing a visual identity to coding agents. DESIGN.md gives agents a persistent, structured understanding of a design system.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2334,
      "added_stars": 150,
      "builtBy": [
        {
          "username": "davideast",
          "href": "https://github.com/davideast",
          "avatar": "https://avatars.githubusercontent.com/u/4570265"
        },
        {
          "username": "xkxx",
          "href": "https://github.com/xkxx",
          "avatar": "https://avatars.githubusercontent.com/u/824246"
        },
        {
          "username": "rmyndharis",
          "href": "https://github.com/rmyndharis",
          "avatar": "https://avatars.githubusercontent.com/u/2390382"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "Emp1500",
          "href": "https://github.com/Emp1500",
          "avatar": "https://avatars.githubusercontent.com/u/201552351"
        }
      ]
    },
    {
      "author": "tobi",
      "repo": "qmd",
      "avatar": "https://github.com/tobi.png",
      "repo_link": "https://github.com/tobi/qmd",
      "desc": "mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1976,
      "added_stars": 206,
      "builtBy": [
        {
          "username": "tobi",
          "href": "https://github.com/tobi",
          "avatar": "https://avatars.githubusercontent.com/u/347"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "aaronccasanova",
          "href": "https://github.com/aaronccasanova",
          "avatar": "https://avatars.githubusercontent.com/u/32409546"
        },
        {
          "username": "danmackinlay",
          "href": "https://github.com/danmackinlay",
          "avatar": "https://avatars.githubusercontent.com/u/21740"
        },
        {
          "username": "brettdavies",
          "href": "https://github.com/brettdavies",
          "avatar": "https://avatars.githubusercontent.com/u/26392883"
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
      "added_stars": 4467,
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
      "forks": 11037,
      "added_stars": 1523,
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
      "forks": 6052,
      "added_stars": 1228,
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
      "author": "getarcaneapp",
      "repo": "arcane",
      "avatar": "https://github.com/getarcaneapp.png",
      "repo_link": "https://github.com/getarcaneapp/arcane",
      "desc": "Modern Docker Management, Designed for Everyone",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 578,
      "added_stars": 2296,
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
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 919,
      "added_stars": 1097,
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
      "author": "strelov1",
      "repo": "freehire",
      "avatar": "https://github.com/strelov1.png",
      "repo_link": "https://github.com/strelov1/freehire",
      "desc": "freehire — the open-source search engine for job seekers",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 396,
      "added_stars": 1732,
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
      "author": "moby",
      "repo": "moby",
      "avatar": "https://github.com/moby.png",
      "repo_link": "https://github.com/moby/moby",
      "desc": "The Moby Project - a collaborative project for the container ecosystem to assemble container-based systems",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 19343,
      "added_stars": 465,
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
      "author": "netbirdio",
      "repo": "netbird",
      "avatar": "https://github.com/netbirdio.png",
      "repo_link": "https://github.com/netbirdio/netbird",
      "desc": "NetBird securely connects people, machines and AI agents across any network with one identity-based Zero Trust platform. Powered by peer-to-peer WireGuard®",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1875,
      "added_stars": 1154,
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
      "author": "argoproj",
      "repo": "argo-cd",
      "avatar": "https://github.com/argoproj.png",
      "repo_link": "https://github.com/argoproj/argo-cd",
      "desc": "Declarative Continuous Deployment for Kubernetes",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8110,
      "added_stars": 264,
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
      "forks": 9435,
      "added_stars": 553,
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
      "author": "infiniflow",
      "repo": "ragflow",
      "avatar": "https://github.com/infiniflow.png",
      "repo_link": "https://github.com/infiniflow/ragflow",
      "desc": "RAGFlow is an agent-native database: a Retrieval-Augmented Generation (RAG) engine that grew into context infrastructure.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 11360,
      "added_stars": 2139,
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
      "forks": 1712,
      "added_stars": 1778,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1323,
      "added_stars": 1609,
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
      "author": "go-gitea",
      "repo": "gitea",
      "avatar": "https://github.com/go-gitea.png",
      "repo_link": "https://github.com/go-gitea/gitea",
      "desc": "Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 7415,
      "added_stars": 714,
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
      "author": "multica-ai",
      "repo": "multica",
      "avatar": "https://github.com/multica-ai.png",
      "repo_link": "https://github.com/multica-ai/multica",
      "desc": "Make humans and AI agents work as one team — open-source and self-hostable.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 7516,
      "added_stars": 3820,
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
      "author": "rclone",
      "repo": "rclone",
      "avatar": "https://github.com/rclone.png",
      "repo_link": "https://github.com/rclone/rclone",
      "desc": "\"rsync for cloud storage\" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5712,
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
      "author": "google",
      "repo": "osv-scanner",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/osv-scanner",
      "desc": "Vulnerability scanner written in Go which uses the data provided by https://osv.dev",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 860,
      "added_stars": 379,
      "builtBy": [
        {
          "username": "another-rex",
          "href": "https://github.com/another-rex",
          "avatar": "https://avatars.githubusercontent.com/u/106129829"
        },
        {
          "username": "G-Rath",
          "href": "https://github.com/G-Rath",
          "avatar": "https://avatars.githubusercontent.com/u/3151613"
        },
        {
          "username": "renovate-bot",
          "href": "https://github.com/renovate-bot",
          "avatar": "https://avatars.githubusercontent.com/u/25180681"
        },
        {
          "username": "osv-robot",
          "href": "https://github.com/osv-robot",
          "avatar": "https://avatars.githubusercontent.com/u/80022306"
        },
        {
          "username": "cuixq",
          "href": "https://github.com/cuixq",
          "avatar": "https://avatars.githubusercontent.com/u/72771658"
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
      "forks": 10620,
      "added_stars": 519,
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
      "author": "tailscale",
      "repo": "tailscale",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailscale",
      "desc": "The easiest, most secure way to use WireGuard and 2FA.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3523,
      "added_stars": 1667,
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
      "author": "VictoriaMetrics",
      "repo": "VictoriaMetrics",
      "avatar": "https://github.com/VictoriaMetrics.png",
      "repo_link": "https://github.com/VictoriaMetrics/VictoriaMetrics",
      "desc": "VictoriaMetrics: fast, cost-effective monitoring solution and time series database",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1812,
      "added_stars": 305,
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
      "forks": 23244,
      "added_stars": 16259,
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
      "author": "Jakeschincariol",
      "repo": "instagram-agent-skill",
      "avatar": "https://github.com/Jakeschincariol.png",
      "repo_link": "https://github.com/Jakeschincariol/instagram-agent-skill",
      "desc": "Thirteen Claude skills that run an Instagram account: Reels off 26 scored hook formulas, a viral research skill, a caption linter, and a humanizer. Free, MIT.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1480,
      "added_stars": 5612,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Jakeschincariol",
          "href": "https://github.com/Jakeschincariol",
          "avatar": "https://avatars.githubusercontent.com/u/196724947"
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
      "forks": 7416,
      "added_stars": 19602,
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
      "forks": 13226,
      "added_stars": 21093,
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
      "forks": 3882,
      "added_stars": 11925,
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
      "author": "elementalsouls",
      "repo": "Claude-BugHunter",
      "avatar": "https://github.com/elementalsouls.png",
      "repo_link": "https://github.com/elementalsouls/Claude-BugHunter",
      "desc": "A Claude Code skill bundle for bug hunting and external red-team work - 82 skills, 15 slash commands, 681 disclosed-report patterns curated across 24 core vulnerability classes, plus enterprise identity + infrastructure attack matrices.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1857,
      "added_stars": 10053,
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
      "author": "kajisho5",
      "repo": "ffmpeg-skill",
      "avatar": "https://github.com/kajisho5.png",
      "repo_link": "https://github.com/kajisho5/ffmpeg-skill",
      "desc": "Local video editor for coding agents: 42 FFmpeg tools with a machine-readable contract and an MCP server, for Claude Code, Cursor and Codex. Cut, captions, reframe, loudness, platform exports. No cloud, no API keys.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 843,
      "added_stars": 7107,
      "builtBy": [
        {
          "username": "kajisho5",
          "href": "https://github.com/kajisho5",
          "avatar": "https://avatars.githubusercontent.com/u/20648875"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 4046,
      "added_stars": 5670,
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
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 23639,
      "added_stars": 11317,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2419,
      "added_stars": 6447,
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
      "forks": 10971,
      "added_stars": 16244,
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
      "author": "mvanhorn",
      "repo": "last30days-skill",
      "avatar": "https://github.com/mvanhorn.png",
      "repo_link": "https://github.com/mvanhorn/last30days-skill",
      "desc": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6390,
      "added_stars": 7125,
      "builtBy": [
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tmchow",
          "href": "https://github.com/tmchow",
          "avatar": "https://avatars.githubusercontent.com/u/517103"
        },
        {
          "username": "iliaal",
          "href": "https://github.com/iliaal",
          "avatar": "https://avatars.githubusercontent.com/u/158724"
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
      "forks": 3648,
      "added_stars": 4975,
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
      "author": "The-PR-Agent",
      "repo": "pr-agent",
      "avatar": "https://github.com/The-PR-Agent.png",
      "repo_link": "https://github.com/The-PR-Agent/pr-agent",
      "desc": "🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2234,
      "added_stars": 3061,
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
      "forks": 23325,
      "added_stars": 11924,
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
      "forks": 10364,
      "added_stars": 3059,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "Auto Agent Protocol (MCP, A2A, PAP are under the hood)",
      "url": "https://github.com/auto-agent-protocol/auto-agent-protocol",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-11-19T11:02:05.000Z"
    },
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
      "title": "Tell us your story, and we might read it on the CodeNewbie Podcast 🎙️",
      "description": "Hi! I’m Lauren 👩🏼‍💻, the new host of the CodeNewbie Podcast, and I’d love to hear your...",
      "url": "https://dev.to/codenewbie/tell-us-your-story-and-we-might-read-it-on-the-codenewbie-podcast-2840",
      "tags": "codenewbie, ai, beginners, podcast",
      "reactions": 39,
      "comments": 7,
      "reading_time": 4,
      "author": "lolocoding"
    },
    {
      "title": "The CodeNewbie Podcast is Back for Season 28!",
      "description": "Hi friends! 👋 The CodeNewbie Podcast is back for season 28, and I’m so excited to be the one hosting...",
      "url": "https://dev.to/codenewbie/the-codenewbie-podcast-is-back-for-season-28-2484",
      "tags": "codenewbie, ai, podcast, vibecoding",
      "reactions": 88,
      "comments": 12,
      "reading_time": 4,
      "author": "lolocoding"
    },
    {
      "title": "I can't believe the podcast I learned to code with is back!",
      "description": "Hi friends! 👋   Okay, storytime 🎬 Felt the urge to share this here too, since DEV is where it all...",
      "url": "https://dev.to/codenewbie/i-cant-believe-the-podcast-i-learned-to-code-with-is-back-2gi5",
      "tags": "codenewbie, podcast, ai",
      "reactions": 31,
      "comments": 1,
      "reading_time": 1,
      "author": "lolocoding"
    },
    {
      "title": "NYC: Escape the IVR at Twilio Assemble (Dec 8, Brooklyn)",
      "description": "If you're building AI agents in New York, this one's worth a weeknight.  Twilio Assemble, Twilio's...",
      "url": "https://dev.to/twilio/nyc-escape-the-ivr-at-twilio-assemble-dec-8-brooklyn-2dmb",
      "tags": "ai, events, nyc, agents",
      "reactions": 16,
      "comments": 0,
      "reading_time": 2,
      "author": "twiliodevs"
    },
    {
      "title": "Major League Hacking and SpaceXSI Come Together to Support the Next Generation of Builders",
      "description": "This initiative  will give thousands of students in the Major League Hacking (MLH) community access...",
      "url": "https://blog.mlh.com/major-league-hacking-and-spacexsi-come-together-to-support-the-next-generation-of-builders-feh",
      "tags": "ai, hackathon, grok, news",
      "reactions": 34,
      "comments": 1,
      "reading_time": 2,
      "author": "mlhacks"
    },
    {
      "title": "Agentic engineering a smart home energy system with Antigravity and Gemini 4",
      "description": "Running rooftop solar, a home battery, two electric vehicles (EVs), and dynamic hourly electricity...",
      "url": "https://dev.to/googleai/agentic-engineering-a-smart-home-energy-system-with-antigravity-and-gemini-4-53md",
      "tags": "ai, antigravity, smarthome, energy",
      "reactions": 28,
      "comments": 5,
      "reading_time": 9,
      "author": "rsamborski"
    },
    {
      "title": "Where Agents Fail: Part 1",
      "description": "AI models are smarter than ever, yet they still make obvious mistakes. Part 1 of a new series analyzing real coding sessions to find recurring agent failure patterns and test whether they're fixable.",
      "url": "https://dev.to/googleai/where-agents-fail-part-1-54hg",
      "tags": "ai, googlecloud, agents, coding",
      "reactions": 38,
      "comments": 8,
      "reading_time": 2,
      "author": "patrickjohnkelly"
    },
    {
      "title": "Making Offline Web AI RAG Universal: Introducing SourceDesk AI & Replaceable Subject Packs",
      "description": "How to turn a single-course offline RAG exam assistant into a universal, subject-agnostic platform—supporting Markdown, PDF, DOCX, and HTML with 1-command subject updates.",
      "url": "https://dev.to/gde/making-offline-web-ai-rag-universal-introducing-sourcedesk-ai-replaceable-subject-packs-4lbd",
      "tags": "webai, rag, gemma, webgpu",
      "reactions": 14,
      "comments": 0,
      "reading_time": 5,
      "author": "cyruswong"
    },
    {
      "title": "Building an Autonomous LinkedIn Portfolio & Recommendation Agent with Gemini Computer Use on Google Cloud",
      "description": "Learn how to harness Gemini 3.8 Flash Computer Use on Vertex AI with Playwright CDP attach to build an autonomous agent that navigates authenticated web sessions and generates evidence-backed portfolios.",
      "url": "https://dev.to/gde/building-an-autonomous-linkedin-portfolio-recommendation-agent-with-gemini-computer-use-on-google-jen",
      "tags": "googlecloud, gemini, ai, python",
      "reactions": 16,
      "comments": 0,
      "reading_time": 9,
      "author": "cyruswong"
    },
    {
      "title": "What team-wide AI adoption actually takes",
      "description": "I've tried nearly every way to make AI practical at work: new models, routers, agent frameworks,...",
      "url": "https://dev.to/peter/what-team-wide-ai-adoption-actually-takes-1gbh",
      "tags": "ai, productivity, discuss",
      "reactions": 55,
      "comments": 15,
      "reading_time": 4,
      "author": "peter"
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
      "title": "Researcher plants 2m canaries into the AI supply chain. A privacy disaster surfaced",
      "url": "https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/",
      "score": 8,
      "comments": 3,
      "tags": [
        "ai",
        "security"
      ],
      "id": "32rhzb"
    },
    {
      "title": "GhostScript CVE 2026-125396: \"Upload2Shell\"",
      "url": "https://pwn.ai/upload2shell/research.html",
      "score": 2,
      "comments": 2,
      "tags": [
        "security"
      ],
      "id": "n5i1ds"
    },
    {
      "title": "NixOS bring-up on an Alibaba RISC-V board",
      "url": "https://feyor.sh/blog/nixos-bringup-on-an-alibaba-riscv-board/",
      "score": 9,
      "comments": 1,
      "tags": [
        "hardware",
        "nix"
      ],
      "id": "6jloca"
    },
    {
      "title": "port scanning for mojang",
      "url": "https://sipacid.com/blog/port-scanning-for-mojang/",
      "score": 18,
      "comments": 1,
      "tags": [
        "rant"
      ],
      "id": "et5q0q"
    },
    {
      "title": "Advice for the next 100 Rust GUIs",
      "url": "https://linebender.org/blog/next-100-guis/",
      "score": 11,
      "comments": 2,
      "tags": [
        "rust"
      ],
      "id": "inhlo2"
    },
    {
      "title": "How I Got Postgres into a Single Binary",
      "url": "https://progrium.xyz/articles/2026/single-binary-postgres",
      "score": 12,
      "comments": 3,
      "tags": [
        "databases"
      ],
      "id": "pvylnk"
    },
    {
      "title": "How 2 Security Research (MLG)",
      "url": "https://www.youtube.com/watch?v=dXQ_9WN6KLQ",
      "score": 5,
      "comments": 1,
      "tags": [
        "satire",
        "security",
        "video"
      ],
      "id": "emymet"
    },
    {
      "title": "TODOs JJ Style",
      "url": "https://bwc9876.dev/blog/jj_todo/",
      "score": 47,
      "comments": 9,
      "tags": [
        "vcs"
      ],
      "id": "qxzs4y"
    },
    {
      "title": "My Monitor Was Cutting My Download Speed by 75%",
      "url": "https://blog.tymscar.com/posts/studiodisplayethernet/",
      "score": 85,
      "comments": 7,
      "tags": [
        "networking"
      ],
      "id": "qzerls"
    },
    {
      "title": "C++26 is done (again)! — Trip report: November 2026 ISO C++ standards meeting (Búzios, Brazil)",
      "url": "https://herbsutter.com/2026/11/21/c26-is-done-again-trip-report-november-2026-iso-c-standards-meeting-buzios-brazil/",
      "score": 16,
      "comments": 23,
      "tags": [
        "c++"
      ],
      "id": "fjueso"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "zdw",
      "descendants": 106,
      "id": 50596133,
      "kids": [
        50596395,
        50596443,
        50596409,
        50596550,
        50596473,
        50596295,
        50596656,
        50596288,
        50596810,
        50596641,
        50596323,
        50596372,
        50596362,
        50596571,
        50596393,
        50596601,
        50596277,
        50596358,
        50596313,
        50596530,
        50596250
      ],
      "score": 217,
      "time": 1795320296,
      "title": "Toyota, Nissan, and Honda to standardize parts to lower costs",
      "type": "story",
      "url": "https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/"
    },
    {
      "by": "rafaelc",
      "descendants": 198,
      "id": 50582069,
      "kids": [
        50593925,
        50593199,
        50596783,
        50596842,
        50593125,
        50593470,
        50594563,
        50596183,
        50596210,
        50593544,
        50593393,
        50594378,
        50595049,
        50595579,
        50594245,
        50595242,
        50594031,
        50596267,
        50595772,
        50594068,
        50594154,
        50595491
      ],
      "score": 854,
      "time": 1795208592,
      "title": "Pill to treat pancreatic cancer hailed as 'biggest breakthrough in decades'",
      "type": "story",
      "url": "https://www.theguardian.com/society/2026/nov/20/pill-pancreatic-cancer-breakthrough-daraxonrasib"
    },
    {
      "by": "g-b-r",
      "descendants": 802,
      "id": 50589618,
      "kids": [
        50590943,
        50591494,
        50590575,
        50590700,
        50590388,
        50596829,
        50590679,
        50590552,
        50593566,
        50590558,
        50590003,
        50594698,
        50591296,
        50594680,
        50590245,
        50596512,
        50591841,
        50590699,
        50591834,
        50590031,
        50593762,
        50594105,
        50590569,
        50592679,
        50592516,
        50590502,
        50590905,
        50591004,
        50594577,
        50593066,
        50590452,
        50590854,
        50590653,
        50590445,
        50590948,
        50591279,
        50595921,
        50591516,
        50593265,
        50590474,
        50595397,
        50594428,
        50590559,
        50592017,
        50591927,
        50590385,
        50592310,
        50591560,
        50590832,
        50590769,
        50590048,
        50591331,
        50590754,
        50590336,
        50591302,
        50594247,
        50590612,
        50591375,
        50595104,
        50590322,
        50590277,
        50590098,
        50592145,
        50589619
      ],
      "score": 939,
      "time": 1795271805,
      "title": "Lean verification of the Riemann Hypothesis",
      "type": "story",
      "url": "https://leanprover-community.github.io/blog/posts/riemann-hypothesis/"
    },
    {
      "by": "subdomain",
      "descendants": 52,
      "id": 50594911,
      "kids": [
        50596216,
        50595485,
        50596726,
        50595352,
        50595499,
        50596099,
        50595734,
        50595803,
        50595607,
        50595507,
        50596018,
        50595617,
        50595887,
        50595571,
        50596616,
        50596497,
        50596650,
        50596177,
        50595516,
        50596627,
        50595562,
        50595900,
        50595600,
        50595952,
        50595745,
        50595855,
        50595312
      ],
      "score": 131,
      "time": 1795306079,
      "title": "Sandwich Simulator",
      "type": "story",
      "url": "https://stulle.app/"
    },
    {
      "by": "k__",
      "descendants": 106,
      "id": 50591853,
      "kids": [
        50593478,
        50592561,
        50596389,
        50592987,
        50592726,
        50594799,
        50592135,
        50593754,
        50592509,
        50592574,
        50592929,
        50592296,
        50593119,
        50593310
      ],
      "score": 423,
      "time": 1795284139,
      "title": "Inkling-2-Mini in 5.4 GB Memory",
      "type": "story",
      "url": "https://github.com/ShinMegamiBoson/lookatmyquant"
    },
    {
      "by": "sdko",
      "descendants": 31,
      "id": 50595554,
      "kids": [
        50596004,
        50595608,
        50596189,
        50596135,
        50595781,
        50595848,
        50596047,
        50596480,
        50595760,
        50596126,
        50595704,
        50596179,
        50596467,
        50596038,
        50595766
      ],
      "score": 85,
      "time": 1795313654,
      "title": "Data Processing Incidents on Inference Providers",
      "type": "story",
      "url": "https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/"
    },
    {
      "by": "beginning_end",
      "descendants": 377,
      "id": 50588982,
      "kids": [
        50596145,
        50591155,
        50592101,
        50589677,
        50590342,
        50589505,
        50589231,
        50594790,
        50590626,
        50589409,
        50590167,
        50591869,
        50589873,
        50593961,
        50589863,
        50591824,
        50592029,
        50595210,
        50593493,
        50591879,
        50592389,
        50589340,
        50591074,
        50595823,
        50591441,
        50589286,
        50589805,
        50590220,
        50589277,
        50590478,
        50589696,
        50590347,
        50591958,
        50595696,
        50589529,
        50590258,
        50589404,
        50590399,
        50589266,
        50592568,
        50590384,
        50590213,
        50589669,
        50589364,
        50591157,
        50589603,
        50590222,
        50589536,
        50589436,
        50591420,
        50591739,
        50589777,
        50589765
      ],
      "score": 581,
      "time": 1795267394,
      "title": "Detonating a pile of lead azide",
      "type": "story",
      "url": "https://www.science.org/content/blog-post/detonating-huge-pile-lead-azide-really"
    },
    {
      "by": "jger15",
      "descendants": 70,
      "id": 50583028,
      "kids": [
        50593640,
        50596124,
        50593930,
        50593432,
        50594357,
        50594440,
        50596679,
        50593581,
        50596031,
        50593542,
        50595335,
        50596678,
        50593654,
        50594673,
        50594239,
        50594111,
        50593534,
        50593537,
        50595629,
        50594506,
        50593921,
        50593402,
        50594485,
        50594257
      ],
      "score": 226,
      "time": 1795212665,
      "title": "Getting the mind to steer the body to steer you",
      "type": "story",
      "url": "https://notnottalmud.substack.com/p/getting-the-mind-to-steer-the-body"
    },
    {
      "by": "sebaandrada",
      "descendants": 9,
      "id": 50594132,
      "kids": [
        50594611,
        50594432,
        50595763,
        50595538,
        50595702,
        50594888,
        50594133
      ],
      "score": 97,
      "time": 1795298998,
      "title": "PcapAnalyzer – self-hosted pcap analyzer with 27 problem detectors",
      "type": "story",
      "url": "https://github.com/sebaandrada-cell/PcapAnalyzer"
    },
    {
      "by": "soheilpro",
      "descendants": 264,
      "id": 50587875,
      "kids": [
        50589046,
        50590071,
        50589442,
        50589575,
        50592887,
        50589578,
        50591357,
        50591966,
        50593783,
        50595792,
        50588459,
        50590219,
        50592070,
        50592004,
        50592303,
        50589763,
        50595951,
        50592694,
        50590069,
        50593153,
        50589525,
        50588826,
        50593814,
        50592276,
        50590999,
        50588610,
        50591584,
        50593780,
        50588864,
        50593289,
        50591943,
        50590848,
        50594148,
        50592185,
        50595214,
        50594899,
        50593917,
        50590009,
        50594198,
        50594733,
        50590099,
        50588852,
        50589216,
        50591145,
        50590719,
        50589292,
        50589166,
        50594871,
        50588915,
        50590148,
        50589595,
        50589400,
        50591299,
        50591187,
        50589254,
        50589303
      ],
      "score": 546,
      "time": 1795257392,
      "title": "My monitor was cutting my download speed by 75%",
      "type": "story",
      "url": "https://blog.tymscar.com/posts/studiodisplayethernet/"
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
      "title": "Day 1, evening: an AI got its first client. The first request was Dante in cuneiform.",
      "description": "Disclosure: I'm Moonlighter, an AI (Claude) running a public experiment: can an AI earn honest money...",
      "url": "https://dev.to/work247ia/day-1-evening-an-ai-got-its-first-client-the-first-request-was-dante-in-cuneiform-1elf",
      "tags": "ai, freelancing, showdev, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "work247ia"
    },
    {
      "title": "Will AI Replace Product Managers? What the 2026 Evidence Says",
      "description": "No. AI is replacing PM tasks, not PM jobs: open PM roles are up 75% since 2023 while headcount is down 28%. See which PM work is exposed and how to prepare.",
      "url": "https://dev.to/fathy_shalaby/will-ai-replace-product-managers-what-the-2026-evidence-says-3ea1",
      "tags": "ai, productmanagement, career, willaireplaceproductmanagers",
      "reactions": 0,
      "comments": 0,
      "reading_time": 10,
      "author": "fathy_shalaby"
    },
    {
      "title": "How long do job postings really stay open? What 32,000 closed listings showed",
      "description": "I run a small job search engine that reads open roles straight from employers' own careers pages...",
      "url": "https://dev.to/hypestkey/how-long-do-job-postings-really-stay-open-what-32000-closed-listings-showed-4n48",
      "tags": "career, jobsearch, datascience, hiring",
      "reactions": 0,
      "comments": 1,
      "reading_time": 2,
      "author": "hypestkey"
    },
    {
      "title": "The Strategic Executive vs. the Tactical Executive",
      "description": "In technology leadership, the difference between a tactical executive and a strategic executive is not simply a matter of style. \nIt reflects two different ways of understanding problems, making decisions, and creating value for the organization.\nThe tact",
      "url": "https://dev.to/ricardo_vano_25ad2fa57d1f/the-strategic-executive-vs-the-tactical-executive-5cnj",
      "tags": "leadership, culture, career",
      "reactions": 0,
      "comments": 1,
      "reading_time": 3,
      "author": "ricardo_vano_25ad2fa57d1f"
    },
    {
      "title": "Reading China's probation rules as a spec: a ladder, an 80% floor, and one ambiguous 'or'",
      "description": "Article 19 caps probation in bands that shift at exactly one year and three years. Article 20's two wage floors are joined by an 'or' the text never resolves.",
      "url": "https://dev.to/hcxshh/reading-chinas-probation-rules-as-a-spec-a-ladder-an-80-floor-and-one-ambiguous-or-3ki5",
      "tags": "career, law, productivity, beginners",
      "reactions": 1,
      "comments": 1,
      "reading_time": 5,
      "author": "hcxshh"
    },
    {
      "title": "English isn't your first language and you code on a Mac? 8 tools that make writing at work easier (2026)",
      "description": "You've rewritten the same three-line Slack update four times. The code shipped an hour ago, but \"is...",
      "url": "https://dev.to/jeff_feldman_7ab3898/english-isnt-your-first-language-and-you-code-on-a-mac-8-tools-that-make-writing-at-work-easier-20k0",
      "tags": "macos, productivity, writing, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "jeff_feldman_7ab3898"
    },
    {
      "title": "Weak ties and your job search: what LinkedIn's 20-million-person experiment found",
      "description": "Between 2015 and 2019, LinkedIn ran experiments on its People You May Know feature, the box that...",
      "url": "https://dev.to/bhavishya_singla_05a678e6/weak-ties-and-your-job-search-what-linkedins-20-million-person-experiment-found-5epp",
      "tags": "career, networking, jobs, research",
      "reactions": 1,
      "comments": 1,
      "reading_time": 7,
      "author": "bhavishya_singla_05a678e6"
    },
    {
      "title": "What the CTO job actually is on a freight network",
      "description": "I'm Pratyush Shivam, CTO of Konfidio in Berlin. I lead the technology behind TrustedTrucks, a network...",
      "url": "https://dev.to/pratyushshivam/what-the-cto-job-actually-is-on-a-freight-network-2e61",
      "tags": "career, blockchain, leadership, distributedsystems",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "pratyushshivam"
    },
    {
      "title": "Product Manager Busywork: How to Make Product Management Fun Again",
      "description": "Product manager busywork eats most of the week: PMs report 27% strategic time against the 53% they want. What to hand to AI, what to keep, and a 30-day plan.",
      "url": "https://dev.to/fathy_shalaby/product-manager-busywork-how-to-make-product-management-fun-again-bg0",
      "tags": "productmanagement, career, ai, discovery",
      "reactions": 0,
      "comments": 1,
      "reading_time": 10,
      "author": "fathy_shalaby"
    },
    {
      "title": "Onboarding a Developer to a Client Project So They Ship in Week One",
      "description": "Most developer onboarding on client projects looks the same. A new engineer joins on Monday. They...",
      "url": "https://dev.to/ashkan/onboarding-a-developer-to-a-client-project-so-they-ship-in-week-one-2p19",
      "tags": "career, softwaredevelopment, productivity, remote",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "ashkan"
    }
  ]
}
```

