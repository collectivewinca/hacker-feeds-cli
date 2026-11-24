# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-24 06:27:05 UTC

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
      "forks": 1428,
      "added_stars": 2395,
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
      "forks": 1518,
      "added_stars": 2572,
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
      "forks": 815,
      "added_stars": 2694,
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
      "forks": 4911,
      "added_stars": 1581,
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
      "forks": 2163,
      "added_stars": 2966,
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
      "forks": 2564,
      "added_stars": 3165,
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
      "forks": 2847,
      "added_stars": 4324,
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
      "forks": 1483,
      "added_stars": 874,
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
      "added_stars": 310,
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
      "author": "ardia-browser",
      "repo": "ardia",
      "avatar": "https://github.com/ardia-browser.png",
      "repo_link": "https://github.com/ardia-browser/ardia",
      "desc": "A free Chromium browser for the Mac: Arc's sidebar, Dia's polish. Chat on Discord: discord.gg/TdhuXrbcA6",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 386,
      "added_stars": 505,
      "builtBy": [
        {
          "username": "mantrakp04",
          "href": "https://github.com/mantrakp04",
          "avatar": "https://avatars.githubusercontent.com/u/87142457"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shivamhwp",
          "href": "https://github.com/shivamhwp",
          "avatar": "https://avatars.githubusercontent.com/u/91240327"
        },
        {
          "username": "araeyn",
          "href": "https://github.com/araeyn",
          "avatar": "https://avatars.githubusercontent.com/u/191039812"
        },
        {
          "username": "luangjokaj",
          "href": "https://github.com/luangjokaj",
          "avatar": "https://avatars.githubusercontent.com/u/6809696"
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
      "forks": 1135,
      "added_stars": 593,
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
      "forks": 1335,
      "added_stars": 866,
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
      "forks": 3882,
      "added_stars": 3093,
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
      "forks": 965,
      "added_stars": 82,
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
      "forks": 16355,
      "added_stars": 485,
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
      "forks": 1661,
      "added_stars": 748,
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
      "forks": 2350,
      "added_stars": 187,
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
      "forks": 1985,
      "added_stars": 315,
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
      "author": "yetone",
      "repo": "magpie",
      "avatar": "https://github.com/yetone.png",
      "repo_link": "https://github.com/yetone/magpie",
      "desc": "Every agent's model. One place. Codex on DeepSeek, Claude Code on Kimi, from the menu bar.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3728,
      "added_stars": 20747,
      "builtBy": [
        {
          "username": "yetone",
          "href": "https://github.com/yetone",
          "avatar": "https://avatars.githubusercontent.com/u/1206493"
        },
        {
          "username": "ggbdpq",
          "href": "https://github.com/ggbdpq",
          "avatar": "https://avatars.githubusercontent.com/u/67929842"
        },
        {
          "username": "yinwu01",
          "href": "https://github.com/yinwu01",
          "avatar": "https://avatars.githubusercontent.com/u/71250493"
        },
        {
          "username": "waitingsnow",
          "href": "https://github.com/waitingsnow",
          "avatar": "https://avatars.githubusercontent.com/u/5812318"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 19161,
      "added_stars": 4364,
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
      "forks": 11039,
      "added_stars": 1479,
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
      "forks": 6050,
      "added_stars": 1380,
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
      "forks": 586,
      "added_stars": 2355,
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
      "forks": 929,
      "added_stars": 1057,
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
      "forks": 402,
      "added_stars": 1036,
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
      "added_stars": 451,
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
      "forks": 1882,
      "added_stars": 1148,
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
      "forks": 8116,
      "added_stars": 262,
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
      "forks": 9439,
      "added_stars": 572,
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
      "forks": 11375,
      "added_stars": 2072,
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
      "forks": 1721,
      "added_stars": 1772,
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
      "forks": 1327,
      "added_stars": 1592,
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
      "forks": 7420,
      "added_stars": 701,
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
      "forks": 7568,
      "added_stars": 4094,
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
      "forks": 5728,
      "added_stars": 858,
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
      "forks": 858,
      "added_stars": 373,
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
      "forks": 10625,
      "added_stars": 503,
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
      "forks": 3541,
      "added_stars": 1643,
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
      "forks": 1816,
      "added_stars": 312,
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
      "forks": 23359,
      "added_stars": 16727,
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
      "forks": 1553,
      "added_stars": 6023,
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
      "forks": 7466,
      "added_stars": 19919,
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
      "forks": 13293,
      "added_stars": 21780,
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
      "forks": 3922,
      "added_stars": 12148,
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
      "desc": "A Claude Code skill bundle for bug hunting and external red-team work - 84 skills, 15 slash commands, 681 disclosed-report patterns curated across 24 core vulnerability classes, plus enterprise identity + infrastructure attack matrices.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2123,
      "added_stars": 13817,
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
      "forks": 902,
      "added_stars": 8031,
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
        },
        {
          "username": "dchaudhari7177",
          "href": "https://github.com/dchaudhari7177",
          "avatar": "https://avatars.githubusercontent.com/u/111210939"
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
      "forks": 4060,
      "added_stars": 4772,
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
      "desc": "TradingAgents: Towards Agentic Finance Research",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 23679,
      "added_stars": 10724,
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
      "forks": 2451,
      "added_stars": 6423,
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
      "forks": 11028,
      "added_stars": 16398,
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
      "forks": 6495,
      "added_stars": 8382,
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
      "forks": 3664,
      "added_stars": 4689,
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
      "forks": 2241,
      "added_stars": 3097,
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
      "forks": 23372,
      "added_stars": 11379,
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
      "forks": 5713,
      "added_stars": 13016,
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
      "forks": 10360,
      "added_stars": 2471,
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
      "title": "Proofreader vs. Rewriter vs. Prompt API: Test the Task, Not the Demo",
      "description": "“Make this message better” is not one task. It can mean correcting a spelling mistake, changing the...",
      "url": "https://dev.to/gde/proofreader-vs-rewriter-vs-prompt-api-test-the-task-not-the-demo-pi9",
      "tags": "webdev, ai, typescript, testing",
      "reactions": 26,
      "comments": 17,
      "reading_time": 4,
      "author": "raju_dandigam"
    },
    {
      "title": "Why millions of agents don't need millions of VMs on Agent Substrate",
      "description": "How stateful agent harnesses run, suspend, and wake in under a second on Agent Substrate 1.0, from one VM to millions of actors.",
      "url": "https://dev.to/googlecloud/why-millions-of-agents-dont-need-millions-of-vms-on-agent-substrate-2ech",
      "tags": "agents, ai, architecture, infrastructure",
      "reactions": 5,
      "comments": 2,
      "reading_time": 9,
      "author": "eliasecchi"
    },
    {
      "title": "Tell us your story, and we might read it on the CodeNewbie Podcast 🎙️",
      "description": "Hi! I’m Lauren 👩🏼‍💻, the new host of the CodeNewbie Podcast, and I’d love to hear your...",
      "url": "https://dev.to/codenewbie/tell-us-your-story-and-we-might-read-it-on-the-codenewbie-podcast-2840",
      "tags": "codenewbie, ai, beginners, codenewbiestory",
      "reactions": 50,
      "comments": 7,
      "reading_time": 4,
      "author": "lolocoding"
    },
    {
      "title": "E2B, E4B or 12B? On an 8 GB RTX 3050, Serve Gemma 4 E4B",
      "description": "The 12B is the largest Gemma 4 that fits on an 8 GB RTX 3050 and the most accurate with thinking off. E4B is the one to serve: with thinking on and Google's sampling settings it matched the 12B on the first 157 GSM8K problems, 153 each, in 0.55 hours against 0.96, with the full context on the card. At temperature 0 the 12B with thinking on loops.",
      "url": "https://dev.to/gde/e2b-e4b-or-12b-on-an-8-gb-rtx-3050-serve-gemma-4-e4b-1eji",
      "tags": "gemma, llm, benchmark, ai",
      "reactions": 21,
      "comments": 4,
      "reading_time": 14,
      "author": "xbill"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-1505",
      "tags": "discuss, jokes, watercooler",
      "reactions": 55,
      "comments": 19,
      "reading_time": 1,
      "author": "ben"
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
      "title": "Build a Multilingual React Editor with Chrome’s Built-In AI",
      "description": "A translation can look polished and still be dangerous to apply. The application may preserve the...",
      "url": "https://dev.to/gde/build-a-multilingual-react-editor-with-chromes-built-in-ai-4863",
      "tags": "webdev, ai, typescript, react",
      "reactions": 19,
      "comments": 2,
      "reading_time": 4,
      "author": "raju_dandigam"
    },
    {
      "title": "One Chat, Three Clouds: An A2UI 1.0 Agent Mesh Over A2A on Google Cloud, AWS and Azure",
      "description": "Three A2UI 1.0 currency agents, one per cloud, joined over A2A behind one AG-UI coordinator. Google ADK and Gemini, Strands and Amazon Nova, Microsoft Agent Framework and Azure OpenAI answer in the same chat, one at a time or all three at once.",
      "url": "https://dev.to/gde/one-chat-three-clouds-an-a2ui-10-agent-mesh-over-a2a-on-google-cloud-aws-and-azure-2j83",
      "tags": "a2ui, a2a, multicloud, agents",
      "reactions": 17,
      "comments": 1,
      "reading_time": 13,
      "author": "xbill"
    },
    {
      "title": "I can't believe the podcast I learned to code with is back!",
      "description": "Hi friends! 👋   Okay, storytime 🎬 Felt the urge to share this here too, since DEV is where it all...",
      "url": "https://dev.to/codenewbie/i-cant-believe-the-podcast-i-learned-to-code-with-is-back-2gi5",
      "tags": "codenewbie, podcast, ai",
      "reactions": 35,
      "comments": 5,
      "reading_time": 1,
      "author": "lolocoding"
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
      "title": "What VP != VNP Means (In 3 Minutes)",
      "url": "https://www.friedgil.com/vpvnp/",
      "score": 16,
      "comments": 0,
      "tags": [
        "math"
      ],
      "id": "2k95fs"
    },
    {
      "title": "the algebra of dependent types (2025)",
      "url": "https://dotat.at/@/2025-05-28-types.html",
      "score": 9,
      "comments": 0,
      "tags": [
        "plt"
      ],
      "id": "n2krd2"
    },
    {
      "title": "Lua for data representation",
      "url": "https://citrons.xyz/journal/2025-07-23",
      "score": 12,
      "comments": 1,
      "tags": [
        "lua"
      ],
      "id": "ezml41"
    },
    {
      "title": "homie: a local voice agent for macOS, 0.43s commands from a 4B model",
      "url": "https://homie-mac.vercel.app/fast",
      "score": -2,
      "comments": 1,
      "tags": [
        "ai",
        "mac",
        "show"
      ],
      "id": "teifll"
    },
    {
      "title": "cgo's pointer check is all over the place",
      "url": "https://theconsensus.dev/p/2026/11/15/cgos-pointer-check.html",
      "score": 5,
      "comments": 1,
      "tags": [
        "go"
      ],
      "id": "fgbvtt"
    },
    {
      "title": "The Strength of the Record",
      "url": "https://web.archive.org/web/20210329070928/https://opencrux.com/blog/crux-strength-of-the-record.html",
      "score": 3,
      "comments": 0,
      "tags": [
        "databases"
      ],
      "id": "rz7m8a"
    },
    {
      "title": "Release: Roto v0.14.0",
      "url": "https://community.nlnetlabs.nl/t/release-roto-v0-14-0/3511",
      "score": 9,
      "comments": 0,
      "tags": [
        "release",
        "rust"
      ],
      "id": "fygpme"
    },
    {
      "title": "Bluetooth2Shell: One tap of pairing is all it takes",
      "url": "https://bluetooth2shell.com/",
      "score": 3,
      "comments": 2,
      "tags": [
        "satire",
        "security"
      ],
      "id": "ik6f4o"
    },
    {
      "title": "Illiterate Programming",
      "url": "https://deadsimpletech.com/blog/illiterate-programming",
      "score": 24,
      "comments": 0,
      "tags": [
        "culture"
      ],
      "id": "xxgezw"
    },
    {
      "title": "UQ researchers send an unblockable message using gravity",
      "url": "https://news.uq.edu.au/2026-11-uq-researchers-send-unblockable-message-using-gravity",
      "score": 20,
      "comments": 0,
      "tags": [
        "compsci",
        "science"
      ],
      "id": "ht8v1g"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "jaz",
      "descendants": 3360,
      "id": 50611576,
      "kids": [
        50612048,
        50620794,
        50616394,
        50612085,
        50612470,
        50612227,
        50612390,
        50613181,
        50611642,
        50612818,
        50615559,
        50612412,
        50614543,
        50611676,
        50612179,
        50612358,
        50612355,
        50620115,
        50613903,
        50619179,
        50623657,
        50618863,
        50624140,
        50614783,
        50611716,
        50613707,
        50612505,
        50611743,
        50613592,
        50611841,
        50614963,
        50611627,
        50612535,
        50612113,
        50611927,
        50612803,
        50612091,
        50614929,
        50613306,
        50615286,
        50611996,
        50614473,
        50612593,
        50612986,
        50613883,
        50611798,
        50623821,
        50613200,
        50623310,
        50614747,
        50615490,
        50614056,
        50613978,
        50619406,
        50623751,
        50614642,
        50619150,
        50618311,
        50613223,
        50615405,
        50617352,
        50622469,
        50612226,
        50611981,
        50612408,
        50620567,
        50612658,
        50616948,
        50617148,
        50614914,
        50617101,
        50622866,
        50621249,
        50616989,
        50612397,
        50615940,
        50614761,
        50613553,
        50613474,
        50613999,
        50621474,
        50612747,
        50620777,
        50615893,
        50611944,
        50613002,
        50613399,
        50621680,
        50611761,
        50620214,
        50612080,
        50612555,
        50619393,
        50612023,
        50623830,
        50623547,
        50617056,
        50613681,
        50612502,
        50611687,
        50612380,
        50615916,
        50614247,
        50611636,
        50611975,
        50621057,
        50623810,
        50623401,
        50614581,
        50617123,
        50614556,
        50620496,
        50614416,
        50620171,
        50614932,
        50613106,
        50615631,
        50615311,
        50612854,
        50613562,
        50616961,
        50611993,
        50612270,
        50614952,
        50611966,
        50612112,
        50612378,
        50614040,
        50613233,
        50621415,
        50614810,
        50612429,
        50620303,
        50616642,
        50622957,
        50613648,
        50619295,
        50613039,
        50612391,
        50611714,
        50611905,
        50622002,
        50616926,
        50611799,
        50612539,
        50612966,
        50616982,
        50620796,
        50613056,
        50620950,
        50621461,
        50616829,
        50615028,
        50614714,
        50616909,
        50612632,
        50615060,
        50616544,
        50612330,
        50612239,
        50611745,
        50612751,
        50612051,
        50621059,
        50613094,
        50613450,
        50613916,
        50620972,
        50614993,
        50612767,
        50612166,
        50620453,
        50612020,
        50613090,
        50615349,
        50619904,
        50621709,
        50613990,
        50614614,
        50613572,
        50616992,
        50616439,
        50616401,
        50617827,
        50617563,
        50611691,
        50611819,
        50616433,
        50617026,
        50616928,
        50616853,
        50612151,
        50613400,
        50616181,
        50615775,
        50612905,
        50611667,
        50614735,
        50615549,
        50615491,
        50616626,
        50611968,
        50615189,
        50615118,
        50612901,
        50615000,
        50614418,
        50614373,
        50613906,
        50614300,
        50614103,
        50612866,
        50612850,
        50612628,
        50612322,
        50611630,
        50613865,
        50618434,
        50612507,
        50619911,
        50614100,
        50611892,
        50612029,
        50614375,
        50611920,
        50612131,
        50622097,
        50611681,
        50616379,
        50622351,
        50612393,
        50613177,
        50611994,
        50611949,
        50611729,
        50614354,
        50615930,
        50614235,
        50613765,
        50613504,
        50613704,
        50612224,
        50612544,
        50612331,
        50611643,
        50614554,
        50612343,
        50617257,
        50611979,
        50614880,
        50615175,
        50613621,
        50616735,
        50616611,
        50618607,
        50611693,
        50623691,
        50615124,
        50622449,
        50624184,
        50612000,
        50615570,
        50613423,
        50612024,
        50622928,
        50620136,
        50616155,
        50614603,
        50612512,
        50612384,
        50614986,
        50613682,
        50615875,
        50615617,
        50624187,
        50620817,
        50616862,
        50612459,
        50612388,
        50615602,
        50616649,
        50617586,
        50611779,
        50616056,
        50611707,
        50611775,
        50612956,
        50611765,
        50611897,
        50611623,
        50611694,
        50611838,
        50611747,
        50611679,
        50613213,
        50611844,
        50611654,
        50623087,
        50611752,
        50612318,
        50613875,
        50611606,
        50623417,
        50611883,
        50611978,
        50611936,
        50615528,
        50611851,
        50611657,
        50622719,
        50611727,
        50611898,
        50614058,
        50612038,
        50624001,
        50612479,
        50611706,
        50618051,
        50611984,
        50622762,
        50619760,
        50624046,
        50619673,
        50611951,
        50611776,
        50612086,
        50618120,
        50613104,
        50611895,
        50620642,
        50615262,
        50613807,
        50611755,
        50612049,
        50620225,
        50612128,
        50623034,
        50622486,
        50611945,
        50616282,
        50612293,
        50612414,
        50620180,
        50612985,
        50611659,
        50612078,
        50620066,
        50615561,
        50620449,
        50616071,
        50612867,
        50613049,
        50614486,
        50612077,
        50611806,
        50613820,
        50611736,
        50612265,
        50612558,
        50612193,
        50614479,
        50617211,
        50618400,
        50614705,
        50612289,
        50612368,
        50611931,
        50612546,
        50614454,
        50611901,
        50614574,
        50615106,
        50618876,
        50613619,
        50611837,
        50611668,
        50619728,
        50611686,
        50620424,
        50619050,
        50612344,
        50615715,
        50617781,
        50611717,
        50611723,
        50611768,
        50612461,
        50615653,
        50613054,
        50613739,
        50613742,
        50617592,
        50615084,
        50612677,
        50617081,
        50612993,
        50612968,
        50617801,
        50614099,
        50612250,
        50613150,
        50615194,
        50613131,
        50612973,
        50614643,
        50619298,
        50624185,
        50612234,
        50614657,
        50611953,
        50613493,
        50611774,
        50614213,
        50612315,
        50612950,
        50612624,
        50616458,
        50612602,
        50615510,
        50622825,
        50614511,
        50612332,
        50614848,
        50612679,
        50614355,
        50617082,
        50612035,
        50613995,
        50615787,
        50612432,
        50616021,
        50611828,
        50616472,
        50619212,
        50612174,
        50619000,
        50611943,
        50620977,
        50613846,
        50612808,
        50614659,
        50612876,
        50615664,
        50611818,
        50612674,
        50611771,
        50613228,
        50614485,
        50611876,
        50619954,
        50615295,
        50611843,
        50611849,
        50611699,
        50611795,
        50615101,
        50620627,
        50613745,
        50612249,
        50612822,
        50611653,
        50612852,
        50612304,
        50619141,
        50622204,
        50611865,
        50616920,
        50617372,
        50612790,
        50617195,
        50611658,
        50617083,
        50616893,
        50615601,
        50611869,
        50615439,
        50612449,
        50622102,
        50615144,
        50620860,
        50614577,
        50613752,
        50611751,
        50615098,
        50613079,
        50612983,
        50612299,
        50612266,
        50616721,
        50612202,
        50612117,
        50612106,
        50611935,
        50611661,
        50611814,
        50611782,
        50611746,
        50613837,
        50611902,
        50612696,
        50613718,
        50617265,
        50614396,
        50612561,
        50612404,
        50617061,
        50613920,
        50614995,
        50613140,
        50613476,
        50612565,
        50612647,
        50612738,
        50611868,
        50612741,
        50615678,
        50615271,
        50615150,
        50611987,
        50611842,
        50616239,
        50612489,
        50613108,
        50611834,
        50611805,
        50611698,
        50612490,
        50612053,
        50612447,
        50612011,
        50614746,
        50612832,
        50619640,
        50618816,
        50622675,
        50616448,
        50616194,
        50611712,
        50615398,
        50614496,
        50612014,
        50611930,
        50611896,
        50611648,
        50614044,
        50613857,
        50615273,
        50616031,
        50613164,
        50611810,
        50623376,
        50621847,
        50617258,
        50622498,
        50613479,
        50616272,
        50612109,
        50620695,
        50615542,
        50611823,
        50611941,
        50611831,
        50613609,
        50613439,
        50615739,
        50614465,
        50612916,
        50615252,
        50614328,
        50613114,
        50615121,
        50612050,
        50612695,
        50611673,
        50611988,
        50611683,
        50611760
      ],
      "score": 2409,
      "text": "<a href=\"https:&#x2F;&#x2F;nvidianews.nvidia.com&#x2F;news&#x2F;nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director\" rel=\"nofollow\">https:&#x2F;&#x2F;nvidianews.nvidia.com&#x2F;news&#x2F;nvidia-board-reinstates-j...</a><p><a href=\"https:&#x2F;&#x2F;www.cnbc.com&#x2F;2026&#x2F;11&#x2F;23&#x2F;nvidia-jensen-huang-congress-trump.html\" rel=\"nofollow\">https:&#x2F;&#x2F;www.cnbc.com&#x2F;2026&#x2F;11&#x2F;23&#x2F;nvidia-jensen-huang-congress...</a>",
      "time": 1795442418,
      "title": "Nvidia Reinstates Jensen Huang as CEO",
      "type": "story",
      "url": "https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html"
    },
    {
      "by": "shaunpud",
      "descendants": 172,
      "id": 50620349,
      "kids": [
        50624418,
        50622997,
        50620882,
        50622524,
        50623955,
        50621266,
        50621299,
        50620717,
        50620771,
        50623797,
        50621567,
        50623572,
        50623120,
        50621043,
        50621063,
        50622274,
        50624069,
        50622371,
        50620865,
        50620872,
        50622705,
        50623990,
        50621580,
        50621147,
        50624043,
        50620853,
        50621050,
        50622123,
        50621692,
        50621328,
        50620874,
        50621006,
        50624360,
        50624029,
        50623504,
        50622874,
        50620671
      ],
      "score": 360,
      "time": 1795473149,
      "title": "Stalwart is now a drop-in replacement for Microsoft Exchange",
      "type": "story",
      "url": "https://stalw.art/blog/microsoft-exchange-replacement/"
    },
    {
      "by": "janvdberg",
      "descendants": 386,
      "id": 50614249,
      "kids": [
        50615429,
        50620189,
        50614419,
        50621612,
        50614592,
        50614718,
        50614907,
        50614803,
        50621945,
        50614426,
        50617713,
        50616527,
        50619554,
        50619719,
        50615944,
        50614683,
        50618308,
        50614446,
        50624281,
        50617727,
        50614564,
        50619983,
        50622060,
        50615128,
        50615746,
        50615346,
        50615985,
        50618738,
        50615862,
        50618255,
        50624348,
        50624128,
        50616348,
        50614710,
        50623465,
        50620003,
        50616788,
        50614647,
        50616921,
        50619177,
        50615698,
        50619074,
        50623058,
        50619062,
        50614670,
        50618929,
        50618579,
        50621496,
        50621070,
        50618087,
        50614519,
        50617383,
        50619042,
        50620193,
        50622174,
        50624347,
        50624011,
        50615039,
        50623106,
        50615301,
        50617222,
        50614679,
        50622081,
        50615518,
        50623368,
        50616180,
        50615878,
        50616980,
        50616617,
        50620268,
        50616285,
        50617732,
        50616269,
        50615461,
        50622901,
        50615952,
        50614743,
        50615057,
        50614975,
        50615354,
        50619786,
        50618267,
        50616670,
        50616224,
        50615817,
        50614499,
        50615873,
        50620235,
        50616753,
        50616451,
        50617897,
        50617411,
        50615248,
        50614767,
        50616034,
        50624215,
        50623969,
        50621406,
        50621133,
        50621105,
        50619645,
        50621867,
        50615083,
        50615236,
        50615392,
        50622187,
        50619094,
        50614837,
        50617197,
        50614696,
        50615719,
        50617933,
        50615463,
        50614742,
        50616726,
        50615838
      ],
      "score": 1677,
      "time": 1795450392,
      "title": "Ladybird is now in alpha",
      "type": "story",
      "url": "https://ladybird.org/posts/alpha/"
    },
    {
      "by": "uptrails",
      "descendants": 12,
      "id": 50623515,
      "kids": [
        50623816,
        50624221,
        50623778,
        50623967,
        50624083
      ],
      "score": 33,
      "time": 1795492828,
      "title": "Drone Maps of Salvage Yards",
      "type": "story",
      "url": "https://salvageyarddrone.wordpress.com/"
    },
    {
      "by": "edward",
      "descendants": 1,
      "id": 50604710,
      "kids": [
        50623964,
        50624115,
        50624452
      ],
      "score": 48,
      "time": 1795387071,
      "title": "Modernizing iperf/iperf3 and introducing fireperf",
      "type": "story",
      "url": "https://blog.daniel-baumann.ch/posts/20261122-1.html"
    },
    {
      "by": "qlte",
      "descendants": 2,
      "id": 50607512,
      "kids": [
        50624460,
        50624465
      ],
      "score": 11,
      "time": 1795408430,
      "title": "Lowering Perplexity Without Scaling",
      "type": "story",
      "url": "https://micjm.com/blog/lowering-perplexity-without-scaling/"
    },
    {
      "by": "EvilGoose",
      "descendants": 79,
      "id": 50619103,
      "kids": [
        50622000,
        50622846,
        50620391,
        50624354,
        50622964,
        50622923,
        50619104,
        50620364,
        50620255,
        50621267,
        50620417,
        50622613,
        50622041,
        50621833,
        50621080
      ],
      "score": 213,
      "time": 1795467174,
      "title": "GPUI is getting its own repository",
      "type": "story",
      "url": "https://github.com/zed-industries/gpui"
    },
    {
      "by": "susam",
      "descendants": 44,
      "id": 50619207,
      "kids": [
        50622159,
        50620339,
        50624197,
        50623939,
        50620310,
        50623581,
        50620095,
        50623861,
        50623768,
        50620712,
        50621230,
        50622786,
        50624084,
        50624270,
        50623978,
        50622414,
        50620527,
        50622960,
        50624407,
        50622939,
        50620857,
        50620382,
        50620159,
        50622396,
        50619960,
        50619918
      ],
      "score": 192,
      "time": 1795467676,
      "title": "Bored.com: Fun, interesting and cool websites to explore when bored",
      "type": "story",
      "url": "https://www.bored.com/"
    },
    {
      "by": "DeepLogin",
      "descendants": 57,
      "id": 50622774,
      "kids": [
        50623487,
        50623584,
        50623532,
        50623281,
        50623400,
        50623326,
        50624466,
        50623903,
        50623523,
        50623489,
        50623363,
        50623442
      ],
      "score": 177,
      "time": 1795487222,
      "title": "New York Bans Subscription and Post-Purchase Fees on Cars",
      "type": "story",
      "url": "https://www.governor.ny.gov/news/money-your-pockets-governor-hochul-signs-bill-restricting-exploitative-vehicle-subscription"
    },
    {
      "by": "andai",
      "descendants": 13,
      "id": 50622934,
      "kids": [
        50624032,
        50623941,
        50624212,
        50623666,
        50623674,
        50623840,
        50623850
      ],
      "score": 37,
      "time": 1795488414,
      "title": "Making a dumb TV just smart enough",
      "type": "story",
      "url": "https://qsantos.fr/2026/11/19/making-a-dumb-tv-just-smart-enough/"
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
      "title": "The Third Cup: Change Never Sleeps",
      "description": "An Ancient Idea in a Digital World     It's 1:30 a.m.  The café is still open, although only a few...",
      "url": "https://dev.to/thethirdcup/the-third-cup-change-never-sleeps-2ldf",
      "tags": "discuss, career, programming, management",
      "reactions": 104,
      "comments": 43,
      "reading_time": 6,
      "author": "xulingfeng"
    },
    {
      "title": "One Man Built Linux in a Bedroom. Another Blew Up Three Rockets. Both Are My Idols. Who's Yours? 🚀🐧",
      "description": "In 1991, a 21-year-old student in Helsinki posted a message online saying he was building a free...",
      "url": "https://dev.to/akhourianmolkumar/one-man-built-linux-in-a-bedroom-another-blew-up-three-rockets-both-are-my-idols-whos-yours-1e09",
      "tags": "discuss, career, opensource, beginners",
      "reactions": 15,
      "comments": 13,
      "reading_time": 3,
      "author": "akhourianmolkumar"
    },
    {
      "title": "Rent the Job. Own the Life.",
      "description": "I own a house. I've also rented a lot of apartments. I treated them very differently. In my...",
      "url": "https://dev.to/aws-heroes/rent-the-job-own-the-life-12g3",
      "tags": "career, productivity",
      "reactions": 6,
      "comments": 1,
      "reading_time": 4,
      "author": "btarbox"
    },
    {
      "title": "My Google Student Ambassador Journey 2026",
      "description": "My Experience as a Google Student Ambassador 2026 🚀   A few months ago, I got the...",
      "url": "https://dev.to/im_ad/my-google-student-ambassador-journey-2026-5nk",
      "tags": "career, community, google, learning",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "im_ad"
    },
    {
      "title": "How to charge for extra revisions: define the round, then price round three",
      "description": "Define one revision round in writing, include a set number, price extras hourly or per round, and get a yes before round three starts.",
      "url": "https://dev.to/moarfaj/how-to-charge-for-extra-revisions-define-the-round-then-price-round-three-3o8h",
      "tags": "freelancing, productivity, career, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "moarfaj"
    },
    {
      "title": "AI doesn't replace engineering management. It changes what managers manage.",
      "description": "I have built four AI systems alongside TechDrift. In every one, the hard part was not the model. It was the management. Six habits that carried over.",
      "url": "https://dev.to/davidwaynebax/ai-doesnt-replace-engineering-management-it-changes-what-managers-manage-68g",
      "tags": "ai, management, career, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 4,
      "author": "davidwaynebax"
    },
    {
      "title": "Workforce Shifts and Validation Deficits: What the 2026 Data Actually Shows",
      "description": "Honest technical leadership requires confronting friction alongside progress. Stanford HAI’s 2026 AI...",
      "url": "https://dev.to/shawdaimarie/workforce-shifts-and-validation-deficits-what-the-2026-data-actually-shows-e4o",
      "tags": "ai, career, leadership, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "shawdaimarie"
    },
    {
      "title": "Beyond the Prompt: If AI Can Write the Code, What Are We Still Learning?",
      "description": "As AI agents take over more of software development, the question is no longer just how much we can...",
      "url": "https://dev.to/lukasrar/beyond-the-prompt-if-ai-can-write-the-code-what-are-we-still-learning-25ic",
      "tags": "ai, programming, productivity, career",
      "reactions": 0,
      "comments": 2,
      "reading_time": 12,
      "author": "lukasrar"
    },
    {
      "title": "We Scraped 2,500+ Ashby & Greenhouse Jobs Across 10 AI & Tech Companies: Salaries, Remote Share & Stack",
      "description": "Job boards like LinkedIn and Indeed are laggy, noisy, and aggressive to scrape. Meanwhile, almost...",
      "url": "https://dev.to/adpulselabs/we-scraped-2500-ashby-greenhouse-jobs-across-10-ai-tech-companies-salaries-remote-share--1m35",
      "tags": "career, dataengineering, hiring, api",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "adpulselabs"
    },
    {
      "title": "Should You Buy a Prompt Library or Write Website Prompts From Scratch?",
      "description": "Disclosure: I work at VibUI, which sells a prompt catalogue for websites. The catalogue appears once,...",
      "url": "https://dev.to/riona_he_211b12cf8ae69e74/should-you-buy-a-prompt-library-or-write-website-prompts-from-scratch-e2e",
      "tags": "webdev, ai, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "riona_he_211b12cf8ae69e74"
    }
  ]
}
```

