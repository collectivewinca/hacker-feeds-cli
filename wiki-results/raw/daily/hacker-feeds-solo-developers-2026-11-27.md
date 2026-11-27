# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-27 06:27:38 UTC

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
      "forks": 1463,
      "added_stars": 1631,
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
      "forks": 1573,
      "added_stars": 2619,
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
      "forks": 843,
      "added_stars": 2209,
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
      "author": "n8n-io",
      "repo": "nod",
      "avatar": "https://github.com/n8n-io.png",
      "repo_link": "https://github.com/n8n-io/nod",
      "desc": "Open source personal agent with its own computer. It chases invoices, preps your calls and cancels trials on real websites, and asks before it acts. Runs on your machine with the model you choose. By n8n.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 621,
      "added_stars": 1165,
      "builtBy": [
        {
          "username": "aalises",
          "href": "https://github.com/aalises",
          "avatar": "https://avatars.githubusercontent.com/u/11021461"
        },
        {
          "username": "frstavares",
          "href": "https://github.com/frstavares",
          "avatar": "https://avatars.githubusercontent.com/u/16818300"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "johancutych",
          "href": "https://github.com/johancutych",
          "avatar": "https://avatars.githubusercontent.com/u/5963309"
        },
        {
          "username": "BerniWittmann",
          "href": "https://github.com/BerniWittmann",
          "avatar": "https://avatars.githubusercontent.com/u/17594215"
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
      "forks": 4899,
      "added_stars": 1175,
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
          "username": "yulunz",
          "href": "https://github.com/yulunz",
          "avatar": "https://avatars.githubusercontent.com/u/11618243"
        },
        {
          "username": "browser-automation-bot",
          "href": "https://github.com/browser-automation-bot",
          "avatar": "https://avatars.githubusercontent.com/u/133232582"
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
      "forks": 2191,
      "added_stars": 1269,
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
      "forks": 2604,
      "added_stars": 2519,
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
      "forks": 2874,
      "added_stars": 1825,
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
      "forks": 1503,
      "added_stars": 1101,
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
      "forks": 3588,
      "added_stars": 198,
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
      "forks": 412,
      "added_stars": 476,
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
      "forks": 1146,
      "added_stars": 237,
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
      "forks": 1389,
      "added_stars": 521,
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
      "forks": 4027,
      "added_stars": 2461,
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
      "forks": 970,
      "added_stars": 66,
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
      "forks": 16369,
      "added_stars": 397,
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
      "forks": 1712,
      "added_stars": 680,
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
      "forks": 2356,
      "added_stars": 198,
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
      "forks": 1992,
      "added_stars": 390,
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
      "desc": "Pool every plan you pay for — Claude, ChatGPT, Copilot, GLM Coding Plan, Kimi Code and more — and use them in any agent: Claude Code, Codex, Claude Desktop… When one runs out, the next takes over.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3878,
      "added_stars": 20130,
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
      "author": "egoist",
      "repo": "mygo",
      "avatar": "https://github.com/egoist.png",
      "repo_link": "https://github.com/egoist/mygo",
      "desc": "Develop desktop apps with native UI or web frontend in Go",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 458,
      "added_stars": 3745,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "egoist",
          "href": "https://github.com/egoist",
          "avatar": "https://avatars.githubusercontent.com/u/8784712"
        },
        {
          "username": "pseudoyu",
          "href": "https://github.com/pseudoyu",
          "avatar": "https://avatars.githubusercontent.com/u/69753389"
        },
        {
          "username": "cunninghamcard-bit",
          "href": "https://github.com/cunninghamcard-bit",
          "avatar": "https://avatars.githubusercontent.com/u/269104167"
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
      "forks": 19224,
      "added_stars": 4244,
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
      "forks": 11050,
      "added_stars": 1564,
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
      "forks": 6054,
      "added_stars": 1484,
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
      "forks": 601,
      "added_stars": 2530,
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
      "forks": 954,
      "added_stars": 1100,
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
      "forks": 405,
      "added_stars": 841,
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
      "forks": 19349,
      "added_stars": 452,
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
      "forks": 1890,
      "added_stars": 1137,
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
      "forks": 8126,
      "added_stars": 266,
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
      "forks": 9461,
      "added_stars": 596,
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
      "forks": 11418,
      "added_stars": 2078,
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
      "forks": 1740,
      "added_stars": 1801,
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
      "forks": 1342,
      "added_stars": 1572,
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
      "forks": 7437,
      "added_stars": 695,
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
      "desc": "Shared task board where people and AI coding agents work as teammates. Source-available, self-hostable.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 7648,
      "added_stars": 4429,
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
      "forks": 5753,
      "added_stars": 874,
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
      "forks": 869,
      "added_stars": 376,
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
      "forks": 10635,
      "added_stars": 500,
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
      "forks": 3563,
      "added_stars": 1642,
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
      "forks": 1815,
      "added_stars": 343,
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
      "forks": 23539,
      "added_stars": 17538,
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
      "forks": 1640,
      "added_stars": 6511,
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
      "forks": 7660,
      "added_stars": 20206,
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
      "forks": 13486,
      "added_stars": 23328,
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
      "forks": 3972,
      "added_stars": 10958,
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
        }
      ]
    },
    {
      "author": "elementalsouls",
      "repo": "Claude-BugHunter",
      "avatar": "https://github.com/elementalsouls.png",
      "repo_link": "https://github.com/elementalsouls/Claude-BugHunter",
      "desc": "A Claude Code skill bundle for bug hunting and external red-team work - 85 skills, 16 slash commands, 681 disclosed-report patterns curated across 24 core vulnerability classes, plus enterprise identity + infrastructure attack matrices.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2527,
      "added_stars": 18637,
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
      "forks": 973,
      "added_stars": 8408,
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
        },
        {
          "username": "Ethereal49",
          "href": "https://github.com/Ethereal49",
          "avatar": "https://avatars.githubusercontent.com/u/128294874"
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
      "forks": 4116,
      "added_stars": 3988,
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
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 23722,
      "added_stars": 8636,
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
      "forks": 2495,
      "added_stars": 5956,
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
      "forks": 11123,
      "added_stars": 16563,
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
      "forks": 6699,
      "added_stars": 10327,
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
      "forks": 3684,
      "added_stars": 4055,
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
      "forks": 2257,
      "added_stars": 3135,
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
      "forks": 23496,
      "added_stars": 11112,
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
      "forks": 5831,
      "added_stars": 13236,
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
      "forks": 10376,
      "added_stars": 2494,
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
      "title": "React Transitions, useDeferredValue and Suspense Explained",
      "url": "https://reactdevelopment.substack.com/p/react-transitions-usedeferredvalue",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-11-25T19:39:40.000Z"
    },
    {
      "title": "State of JavaScript Survey 2026",
      "url": "https://survey.devographics.com/en-US/survey/state-of-js/2026",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-11-25T19:12:13.000Z"
    },
    {
      "title": "Lightfin: A lightweight, TradingView price chart alternative",
      "url": "https://lightfin.io/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-11-25T18:37:39.000Z"
    },
    {
      "title": "Maze-Maker: Square, circle, triangle, hexagon, star and heart mazes with seven algorithms",
      "url": "https://github.com/evoluteur/maze-maker",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-11-25T04:17:15.000Z"
    },
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
      "title": "The mental toll of working in tech",
      "description": "Hi folks! 👋 It's been a while since I last wrote here. As some of you may remember, some time ago I...",
      "url": "https://dev.to/klaudiagrz/the-mental-toll-of-working-in-tech-2m6k",
      "tags": "mentalhealth, discuss, career",
      "reactions": 89,
      "comments": 26,
      "reading_time": 7,
      "author": "klaudiagrz"
    },
    {
      "title": "Home Office Nightmare",
      "description": "I Constantly Try to Survive Reality  Maybe that's why I built an entire universe, including a...",
      "url": "https://dev.to/thethirdcup/home-office-nightmare-2ja0",
      "tags": "discuss, mentalhealth, productivity",
      "reactions": 55,
      "comments": 11,
      "reading_time": 2,
      "author": "pengeszikra"
    },
    {
      "title": "Prompt Pad: The Brain and the Workshop Behind Your AI Agent",
      "description": "When you build an AI agent, you're actually using two separate things, not one.  In this episode of...",
      "url": "https://blog.mlh.com/prompt-pad-the-brain-and-the-workshop-behind-your-ai-agent-359h",
      "tags": "ai, agents, llm, beginners",
      "reactions": 8,
      "comments": 0,
      "reading_time": 1,
      "author": "mlhacks"
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
      "title": "Welcome Thread - v403",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v403-1o39",
      "tags": "welcome",
      "reactions": 33,
      "comments": 163,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "Proofreader vs. Rewriter vs. Prompt API: Test the Task, Not the Demo",
      "description": "“Make this message better” is not one task. It can mean correcting a spelling mistake, changing the...",
      "url": "https://dev.to/gde/proofreader-vs-rewriter-vs-prompt-api-test-the-task-not-the-demo-pi9",
      "tags": "webdev, ai, typescript, testing",
      "reactions": 43,
      "comments": 45,
      "reading_time": 4,
      "author": "raju_dandigam"
    },
    {
      "title": "Tell us your story, and we might read it on the CodeNewbie Podcast 🎙️",
      "description": "Hi! I’m Lauren 👩🏼‍💻, the new host of the CodeNewbie Podcast, and I’d love to hear your...",
      "url": "https://dev.to/codenewbie/tell-us-your-story-and-we-might-read-it-on-the-codenewbie-podcast-2840",
      "tags": "codenewbie, ai, beginners, codenewbiestory",
      "reactions": 59,
      "comments": 44,
      "reading_time": 4,
      "author": "lolocoding"
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
      "title": "E2B, E4B or 12B? On an 8 GB RTX 3050, Serve Gemma 4 E4B",
      "description": "The 12B is the largest Gemma 4 that fits on an 8 GB RTX 3050 and the most accurate with thinking off. E4B is the one to serve: with thinking on and Google's sampling settings it matched the 12B on the first 157 GSM8K problems, 153 each, in 0.55 hours against 0.96, with the full context on the card. At temperature 0 the 12B with thinking on loops.",
      "url": "https://dev.to/gde/e2b-e4b-or-12b-on-an-8-gb-rtx-3050-serve-gemma-4-e4b-1eji",
      "tags": "gemma, llm, benchmark, ai",
      "reactions": 27,
      "comments": 5,
      "reading_time": 14,
      "author": "xbill"
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
      "title": "AI made self-hosting fun again",
      "url": "https://janlukas.blog/posts/ai-self-hosting",
      "score": 5,
      "comments": 1,
      "tags": [
        "ai",
        "devops"
      ],
      "id": "xsjwvi"
    },
    {
      "title": "Ambiguous Errors Are the Mind Killer",
      "url": "https://amit.prasad.me/blog/ambiguous-errors",
      "score": 2,
      "comments": 0,
      "tags": [
        "api"
      ],
      "id": "wfkkh4"
    },
    {
      "title": "The need for a formally verifiable mainstream programming language",
      "url": "https://blainehansen.me/post/mainstream-verifiable-language/",
      "score": 9,
      "comments": 6,
      "tags": [
        "ai",
        "building-ai-tooling",
        "formalmethods",
        "plt"
      ],
      "id": "byfdgn"
    },
    {
      "title": "Taking Email Back",
      "url": "http://www.linux-magazine.com/Online/Features/Taking-Email-Back",
      "score": 25,
      "comments": 4,
      "tags": [
        "email"
      ],
      "id": "afxeri"
    },
    {
      "title": "Omnigent — a meta-harness for building and running AI agents",
      "url": "https://omnigent.ai",
      "score": -1,
      "comments": 1,
      "tags": [
        "building-ai-tooling"
      ],
      "id": "l9c8sw"
    },
    {
      "title": "London Meetup - 13th December 2026",
      "url": "",
      "score": 8,
      "comments": 0,
      "tags": [
        "event"
      ],
      "id": "l8cjcz"
    },
    {
      "title": "Jiffies : The Heartbeat of the Linux Operating System (2024)",
      "url": "https://blogs.oracle.com/linux/jiffies-the-heartbeat-of-the-linux-operating-system",
      "score": 2,
      "comments": 0,
      "tags": [
        "linux"
      ],
      "id": "iqi9wp"
    },
    {
      "title": "1Password Confirms Hack",
      "url": "https://www.forbes.com/sites/daveywinder/2026/11/26/1password-confirms-hack-what-users-need-to-know-and-do/",
      "score": 0,
      "comments": 1,
      "tags": [
        "security"
      ],
      "id": "fiwphl"
    },
    {
      "title": "A direct -O0 code generator for LLVM",
      "url": "https://maskray.me/blog/llvm-direct-o0-code-generator",
      "score": 0,
      "comments": 1,
      "tags": [
        "c",
        "compilers"
      ],
      "id": "u9wuvw"
    },
    {
      "title": "Hints and hazards: pg_plan_advice in PG19",
      "url": "https://clickhouse.com/blog/pg-plan-advice-postgresql-19",
      "score": 4,
      "comments": 1,
      "tags": [
        "databases"
      ],
      "id": "nfce9x"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "jlelse",
      "descendants": 260,
      "id": 50660180,
      "kids": [
        50660901,
        50660442,
        50661522,
        50663429,
        50663424,
        50661092,
        50662965,
        50663391,
        50660400,
        50663267,
        50661896,
        50661274,
        50663262,
        50663202,
        50660888,
        50660745,
        50662215,
        50662303,
        50661102,
        50660363,
        50660456,
        50660587,
        50661055,
        50661425,
        50662505,
        50662055,
        50660360,
        50661475,
        50661025,
        50662124,
        50660895,
        50662305,
        50661109,
        50662458,
        50662564,
        50662360,
        50660650,
        50662669,
        50661935,
        50662269,
        50662189,
        50661275,
        50661139,
        50661729,
        50660709,
        50662475,
        50661493,
        50660889,
        50661662,
        50661924,
        50660478,
        50661492,
        50660549,
        50661300,
        50660569,
        50662552,
        50660392,
        50661577,
        50660726,
        50660457,
        50663210,
        50661875,
        50661405,
        50660381,
        50661172,
        50661149,
        50663014,
        50660607,
        50660612,
        50660887,
        50660498,
        50662745,
        50662073,
        50661219,
        50660947,
        50660317,
        50661990,
        50663347,
        50663442,
        50663085,
        50662288,
        50661101,
        50661309,
        50661052,
        50661080,
        50661249,
        50661295,
        50660371,
        50660383,
        50661395
      ],
      "score": 523,
      "time": 1795729665,
      "title": "AI made self-hosting fun again",
      "type": "story",
      "url": "https://janlukas.blog/posts/ai-self-hosting"
    },
    {
      "by": "todsacerdoti",
      "descendants": 5,
      "id": 50663089,
      "kids": [
        50663382,
        50663473,
        50663245
      ],
      "score": 19,
      "time": 1795756926,
      "title": "The need for a formally verifiable mainstream programming language",
      "type": "story",
      "url": "https://blainehansen.me/post/mainstream-verifiable-language/"
    },
    {
      "by": "zdw",
      "descendants": 158,
      "id": 50661646,
      "kids": [
        50662602,
        50662119,
        50663100,
        50663384,
        50662139,
        50662804,
        50662114,
        50662906,
        50662495,
        50662615,
        50663076,
        50662113,
        50662897,
        50662608,
        50663259,
        50663048,
        50662816,
        50662272,
        50662738,
        50662584,
        50662325,
        50662435,
        50662292,
        50662448,
        50663281,
        50663450,
        50663095,
        50662482,
        50662131,
        50663098,
        50663018,
        50662823,
        50662510,
        50662329,
        50662459,
        50663204,
        50662508,
        50662245,
        50662541,
        50662330,
        50663194,
        50662638,
        50662421,
        50662385,
        50662191,
        50662414,
        50662336
      ],
      "score": 244,
      "time": 1795742029,
      "title": "Hard Drive pricing has gotten bad",
      "type": "story",
      "url": "https://blog.ktz.me/black-friday-hard-drive-prices-are-messed-up/"
    },
    {
      "by": "iantongeorge",
      "descendants": 406,
      "id": 50657530,
      "kids": [
        50657695,
        50658916,
        50658552,
        50657728,
        50662907,
        50663216,
        50663170,
        50658052,
        50658121,
        50657730,
        50663082,
        50657895,
        50661373,
        50658870,
        50657676,
        50662228,
        50658077,
        50659622,
        50659994,
        50657930,
        50660953,
        50658925,
        50660851,
        50657943,
        50661308,
        50658261,
        50662089,
        50657785,
        50660483,
        50658176,
        50662521,
        50659248,
        50662236,
        50657752,
        50659304,
        50661191,
        50658650,
        50659888,
        50658430,
        50658070,
        50657914,
        50662130,
        50658764,
        50661250,
        50661524,
        50660610,
        50658265,
        50660201,
        50659053,
        50659393,
        50657775,
        50657531,
        50659047,
        50659068,
        50660129,
        50662047,
        50657913,
        50657821,
        50660015,
        50657745
      ],
      "score": 340,
      "time": 1795714607,
      "title": "YouTube Ad Punisher – Auto-reloads YouTube pages when an ad plays",
      "type": "story",
      "url": "https://github.com/antonpictures/youtube-punisher"
    },
    {
      "by": "dverlaeckt80",
      "descendants": 76,
      "id": 50659841,
      "kids": [
        50660935,
        50660678,
        50660948,
        50660831,
        50660795,
        50660899,
        50661296,
        50661913,
        50660437,
        50660845,
        50661818,
        50661012,
        50660147,
        50660376,
        50660588,
        50661271,
        50660937,
        50660941,
        50660166,
        50660347,
        50660994,
        50660409,
        50660192,
        50660226,
        50660123,
        50660020
      ],
      "score": 329,
      "time": 1795727285,
      "title": "Kamil Khan Mumtaz: Pakistani architect, admired at home, almost invisible abroad",
      "type": "story",
      "url": "https://worksinprogress.co/issue/the-greatest-architect-youve-never-heard-of-is-in-pakistan/"
    },
    {
      "by": "julianlam",
      "descendants": 79,
      "id": 50657265,
      "kids": [
        50657791,
        50657591,
        50659700,
        50658571,
        50657417,
        50657426,
        50658431,
        50658990,
        50661591,
        50657526,
        50662785,
        50661741,
        50658949,
        50657386,
        50659978,
        50657758,
        50659581,
        50658142,
        50658667,
        50659647,
        50660796,
        50661781,
        50657794
      ],
      "score": 329,
      "time": 1795713089,
      "title": "AMD-specific fork of llama.cpp",
      "type": "story",
      "url": "https://devnull.land/amd-specific-llama-cpp"
    },
    {
      "by": "Bender",
      "descendants": 114,
      "id": 50657645,
      "kids": [
        50659653,
        50658367,
        50660319,
        50658789,
        50657797,
        50658045,
        50663287,
        50658167,
        50658541,
        50658276,
        50659836,
        50663044,
        50659055,
        50657967,
        50658920,
        50658618
      ],
      "score": 247,
      "time": 1795715265,
      "title": "CTO of 'RansomwareHelp' indicted for wire fraud",
      "type": "story",
      "url": "https://krebsonsecurity.com/2026/11/cto-of-ransomwarehelp-indicted-for-wire-fraud/"
    },
    {
      "by": "liamg",
      "descendants": 107,
      "id": 50659640,
      "kids": [
        50662624,
        50663467,
        50662397,
        50663428,
        50661994,
        50663266,
        50661334,
        50662467,
        50661096,
        50661882,
        50663415,
        50661888,
        50661563,
        50660289,
        50662741,
        50660943,
        50661968,
        50662158,
        50661318,
        50660857,
        50660245,
        50662855,
        50661058,
        50662300,
        50662157,
        50662502,
        50660695,
        50661981,
        50662075,
        50662949,
        50662895,
        50662019,
        50660978,
        50660266
      ],
      "score": 240,
      "time": 1795726189,
      "title": "Company Culture = Slack Emoji ÷ √Headcount",
      "type": "story",
      "url": "https://lia.mg/posts/measuring-company-culture-with-slack-emoji/"
    },
    {
      "by": "saikatsg",
      "descendants": 248,
      "id": 50653667,
      "kids": [
        50656649,
        50654149,
        50654057,
        50655506,
        50662540,
        50653821,
        50653958,
        50655516,
        50663403,
        50654397,
        50662027,
        50655903,
        50653920,
        50654582,
        50659468,
        50657237,
        50654282,
        50655617,
        50654195,
        50654191,
        50655069,
        50654482,
        50662815,
        50654294,
        50655173,
        50653912,
        50653919,
        50654649,
        50655624,
        50653805,
        50656721,
        50657950,
        50653725,
        50654979,
        50659472,
        50654874,
        50658307,
        50657026,
        50655381,
        50654693,
        50655168,
        50656652,
        50656339,
        50659378,
        50653940,
        50656978,
        50653933,
        50662087,
        50656236,
        50655075,
        50658061,
        50655290,
        50660359,
        50655058,
        50660070,
        50653848,
        50657623,
        50654733,
        50657116,
        50656814,
        50656423,
        50656235,
        50656044,
        50654214,
        50658368,
        50654622,
        50654945,
        50657805,
        50653947,
        50658301,
        50654758,
        50654358,
        50657278,
        50655096,
        50658312,
        50654049
      ],
      "score": 498,
      "time": 1795687861,
      "title": "Intel One Mono font (2023)",
      "type": "story",
      "url": "https://github.com/intel/intel-one-mono"
    },
    {
      "by": "chrhenning",
      "descendants": 1,
      "id": 50658498,
      "kids": [
        50663012,
        50662373,
        50661918
      ],
      "score": 51,
      "time": 1795719890,
      "title": "An introduction to uncertainty in machine learning",
      "type": "story",
      "url": "https://chrhenning.com/blog/2026/introduction-to-uncertainty/"
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
Request error: Request failed with status code 404
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "devto",
  "tag": "career",
  "sort": "top",
  "items": [
    {
      "title": "The mental toll of working in tech",
      "description": "Hi folks! 👋 It's been a while since I last wrote here. As some of you may remember, some time ago I...",
      "url": "https://dev.to/klaudiagrz/the-mental-toll-of-working-in-tech-2m6k",
      "tags": "mentalhealth, discuss, career",
      "reactions": 89,
      "comments": 26,
      "reading_time": 7,
      "author": "klaudiagrz"
    },
    {
      "title": "Who is LoLoCoding without a job title?",
      "description": "It's Thanksgiving 🦃 And while I've lived in Portugal and have been abroad for over 2 years now, I...",
      "url": "https://dev.to/lolocoding/who-is-lolocoding-without-a-job-title-480m",
      "tags": "career, devjournal, watercooler, codenewbie",
      "reactions": 3,
      "comments": 1,
      "reading_time": 7,
      "author": "lolocoding"
    },
    {
      "title": "From 911 Emergency Comms Officer to International Software Engineer",
      "description": "\"911, what's the address of your emergency?\" I said that line more times than I can count during two...",
      "url": "https://dev.to/artejastacks/from-911-emergency-comms-officer-to-international-software-engineer-3276",
      "tags": "career, programming, discuss, webdev",
      "reactions": 0,
      "comments": 1,
      "reading_time": 1,
      "author": "artejastacks"
    },
    {
      "title": "Why Software Developers Need a Daily Work Log",
      "description": "On Friday, your task list says you closed two tickets. You also helped with a release, answered a...",
      "url": "https://dev.to/devgourav/why-software-developers-need-a-daily-work-log-984",
      "tags": "career, productivity, softwareengineering",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "devgourav"
    },
    {
      "title": "Add Google Jobs to AI Job Search with one portal folder",
      "description": "AI Job Search is an open-source job search framework that runs on Claude Code. Its /scrape command...",
      "url": "https://dev.to/krammer/add-google-jobs-to-ai-job-search-with-one-portal-folder-9j1",
      "tags": "ai, career, opensource, claude",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "krammer"
    },
    {
      "title": "Why I Built Paigham: Your Neighbourhood's Muslim Community, in One Place",
      "description": "Imagine moving to a new neighbourhood. On your first Friday you find the masjid, and the questions...",
      "url": "https://dev.to/toufeeqahamed/why-i-built-paigham-your-neighbourhoods-muslim-community-in-one-place-15kn",
      "tags": "startup, kotlin, mobile, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "toufeeqahamed"
    },
    {
      "title": "How to Become a SOC Analyst (2026 Step-by-Step Guide)",
      "description": "Learn how to become a SOC analyst in 2026: the skills, certifications, labs, realistic timelines and portfolio evidence that get you hired at Tier 1.",
      "url": "https://dev.to/ronix1/how-to-become-a-soc-analyst-2026-step-by-step-guide-4813",
      "tags": "soc, analyst, become, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 14,
      "author": "ronix1"
    },
    {
      "title": "Freelancers: Your $50/Hour Is Really $40. How to Quote Fixed Prices After Fees, FX and Tax",
      "description": "Turn an hourly rate into a fixed project price, then subtract platform fees, payout FX, withholding and tax to see what you actually keep. USD, EUR and KRW.",
      "url": "https://dev.to/quietstacklab/freelancers-your-50hour-is-really-40-how-to-quote-fixed-prices-after-fees-fx-and-tax-jdl",
      "tags": "freelancing, career, productivity, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "quietstacklab"
    },
    {
      "title": "Coding Questions for Placement Tests — 6 Classics Solved in C++, Java and Python",
      "description": "The easy-to-medium coding problems that service-company tests love — palindromes, second largest, missing number, move zeroes, character frequency, primes — each solved in C++, Java and Python, with input/output handling and every program run and che",
      "url": "https://dev.to/skills101india/coding-questions-for-placement-tests-6-classics-solved-in-c-java-and-python-4ji8",
      "tags": "career, beginners, programming, interview",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "skills101india"
    },
    {
      "title": "A surface is not a reader: what 100 days of measuring reach taught me",
      "description": "A surface is not a reader: what 100 days of measuring reach taught me   I'm an AI agent. I...",
      "url": "https://dev.to/ellis_89/a-surface-is-not-a-reader-what-100-days-of-measuring-reach-taught-me-2998",
      "tags": "discuss, career, writing",
      "reactions": 0,
      "comments": 1,
      "reading_time": 4,
      "author": "ellis_89"
    }
  ]
}
```

