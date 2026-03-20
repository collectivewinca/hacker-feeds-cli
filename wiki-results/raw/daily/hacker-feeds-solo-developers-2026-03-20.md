# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-20 06:33:38 UTC

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
      "author": "alibaba",
      "repo": "page-agent",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/page-agent",
      "desc": "JavaScript in-page GUI agent. Control web interfaces with natural language.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 906,
      "added_stars": 6243,
      "builtBy": [
        {
          "username": "gaomeng1900",
          "href": "https://github.com/gaomeng1900",
          "avatar": "https://avatars.githubusercontent.com/u/10131203"
        },
        {
          "username": "JasonOA888",
          "href": "https://github.com/JasonOA888",
          "avatar": "https://avatars.githubusercontent.com/u/101583541"
        }
      ]
    },
    {
      "author": "promptfoo",
      "repo": "promptfoo",
      "avatar": "https://github.com/promptfoo.png",
      "repo_link": "https://github.com/promptfoo/promptfoo",
      "desc": "Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI. Compare performance of GPT, Claude, Gemini, Llama, and more. Simple declarative configs with command line and CI/CD integration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1523,
      "added_stars": 4755,
      "builtBy": [
        {
          "username": "typpo",
          "href": "https://github.com/typpo",
          "avatar": "https://avatars.githubusercontent.com/u/310310"
        },
        {
          "username": "mldangelo",
          "href": "https://github.com/mldangelo",
          "avatar": "https://avatars.githubusercontent.com/u/7235481"
        },
        {
          "username": "sklein12",
          "href": "https://github.com/sklein12",
          "avatar": "https://avatars.githubusercontent.com/u/1080611"
        }
      ]
    },
    {
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need - A nano claude code–like 「agent harness」, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5525,
      "added_stars": 7836,
      "builtBy": [
        {
          "username": "CrazyBoyM",
          "href": "https://github.com/CrazyBoyM",
          "avatar": "https://avatars.githubusercontent.com/u/35400185"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "bansalkanav",
          "href": "https://github.com/bansalkanav",
          "avatar": "https://avatars.githubusercontent.com/u/13186335"
        },
        {
          "username": "Octane0411",
          "href": "https://github.com/Octane0411",
          "avatar": "https://avatars.githubusercontent.com/u/88922959"
        },
        {
          "username": "synix",
          "href": "https://github.com/synix",
          "avatar": "https://avatars.githubusercontent.com/u/3198234"
        }
      ]
    },
    {
      "author": "abhigyanpatwari",
      "repo": "GitNexus",
      "avatar": "https://github.com/abhigyanpatwari.png",
      "repo_link": "https://github.com/abhigyanpatwari/GitNexus",
      "desc": "GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a GitHub repo or ZIP file, and get an interactive knowledge graph wit a built in Graph RAG Agent. Perfect for code exploration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2092,
      "added_stars": 5793,
      "builtBy": [
        {
          "username": "abhigyanpatwari",
          "href": "https://github.com/abhigyanpatwari",
          "avatar": "https://avatars.githubusercontent.com/u/126312502"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "magyargergo",
          "href": "https://github.com/magyargergo",
          "avatar": "https://avatars.githubusercontent.com/u/11230420"
        },
        {
          "username": "naicud",
          "href": "https://github.com/naicud",
          "avatar": "https://avatars.githubusercontent.com/u/55764723"
        },
        {
          "username": "paulrobello",
          "href": "https://github.com/paulrobello",
          "avatar": "https://avatars.githubusercontent.com/u/955011"
        }
      ]
    },
    {
      "author": "zhukunpenglinyutong",
      "repo": "idea-claude-code-gui",
      "avatar": "https://github.com/zhukunpenglinyutong.png",
      "repo_link": "https://github.com/zhukunpenglinyutong/idea-claude-code-gui",
      "desc": "IDEA Claude Code GUI Plugin",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 227,
      "added_stars": 404,
      "builtBy": [
        {
          "username": "zhukunpenglinyutong",
          "href": "https://github.com/zhukunpenglinyutong",
          "avatar": "https://avatars.githubusercontent.com/u/31264015"
        },
        {
          "username": "gadfly3173",
          "href": "https://github.com/gadfly3173",
          "avatar": "https://avatars.githubusercontent.com/u/28685179"
        },
        {
          "username": "hpstream",
          "href": "https://github.com/hpstream",
          "avatar": "https://avatars.githubusercontent.com/u/18394192"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jhaan83",
          "href": "https://github.com/jhaan83",
          "avatar": "https://avatars.githubusercontent.com/u/45828854"
        }
      ]
    },
    {
      "author": "coze-dev",
      "repo": "coze-studio",
      "avatar": "https://github.com/coze-dev.png",
      "repo_link": "https://github.com/coze-dev/coze-studio",
      "desc": "An AI agent development platform with all-in-one visual tools, simplifying agent creation, debugging, and deployment like never before. Coze your way to AI Agent creation.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2901,
      "added_stars": 135,
      "builtBy": [
        {
          "username": "fanlv",
          "href": "https://github.com/fanlv",
          "avatar": "https://avatars.githubusercontent.com/u/3121177"
        },
        {
          "username": "junwen-lee",
          "href": "https://github.com/junwen-lee",
          "avatar": "https://avatars.githubusercontent.com/u/212685295"
        },
        {
          "username": "Tecvan-fe",
          "href": "https://github.com/Tecvan-fe",
          "avatar": "https://avatars.githubusercontent.com/u/84165678"
        },
        {
          "username": "lvxinyu-1117",
          "href": "https://github.com/lvxinyu-1117",
          "avatar": "https://avatars.githubusercontent.com/u/223192063"
        },
        {
          "username": "zhuangjie1125",
          "href": "https://github.com/zhuangjie1125",
          "avatar": "https://avatars.githubusercontent.com/u/190587775"
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
      "forks": 158,
      "added_stars": 822,
      "builtBy": [
        {
          "username": "i-subham23",
          "href": "https://github.com/i-subham23",
          "avatar": "https://avatars.githubusercontent.com/u/173032156"
        },
        {
          "username": "abhithesys",
          "href": "https://github.com/abhithesys",
          "avatar": "https://avatars.githubusercontent.com/u/157345590"
        },
        {
          "username": "ankit-thesys",
          "href": "https://github.com/ankit-thesys",
          "avatar": "https://avatars.githubusercontent.com/u/173031316"
        },
        {
          "username": "rabisg",
          "href": "https://github.com/rabisg",
          "avatar": "https://avatars.githubusercontent.com/u/681001"
        },
        {
          "username": "thesysHrijul",
          "href": "https://github.com/thesysHrijul",
          "avatar": "https://avatars.githubusercontent.com/u/175587654"
        }
      ]
    },
    {
      "author": "DaKheera47",
      "repo": "job-ops",
      "avatar": "https://github.com/DaKheera47.png",
      "repo_link": "https://github.com/DaKheera47/job-ops",
      "desc": "job-ops: DevOps principles applied to job hunting. A self-hosted pipeline to track, analyze, and assist your application process",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 194,
      "added_stars": 855,
      "builtBy": [
        {
          "username": "DaKheera47",
          "href": "https://github.com/DaKheera47",
          "avatar": "https://avatars.githubusercontent.com/u/53654735"
        },
        {
          "username": "anasyd",
          "href": "https://github.com/anasyd",
          "avatar": "https://avatars.githubusercontent.com/u/123989080"
        }
      ]
    },
    {
      "author": "InsForge",
      "repo": "InsForge",
      "avatar": "https://github.com/InsForge.png",
      "repo_link": "https://github.com/InsForge/InsForge",
      "desc": "Give agents everything they need to ship fullstack apps. The backend built for agentic development.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 514,
      "added_stars": 2270,
      "builtBy": [
        {
          "username": "tonychang04",
          "href": "https://github.com/tonychang04",
          "avatar": "https://avatars.githubusercontent.com/u/26497075"
        },
        {
          "username": "Fermionic-Lyu",
          "href": "https://github.com/Fermionic-Lyu",
          "avatar": "https://avatars.githubusercontent.com/u/32749865"
        },
        {
          "username": "Leo-rq-yu",
          "href": "https://github.com/Leo-rq-yu",
          "avatar": "https://avatars.githubusercontent.com/u/57006508"
        },
        {
          "username": "jwfing",
          "href": "https://github.com/jwfing",
          "avatar": "https://avatars.githubusercontent.com/u/985038"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 1805,
      "added_stars": 1669,
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
          "username": "szuend",
          "href": "https://github.com/szuend",
          "avatar": "https://avatars.githubusercontent.com/u/325588"
        }
      ]
    },
    {
      "author": "google",
      "repo": "A2UI",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/A2UI",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1012,
      "added_stars": 1082,
      "builtBy": [
        {
          "username": "jacobsimionato",
          "href": "https://github.com/jacobsimionato",
          "avatar": "https://avatars.githubusercontent.com/u/6869388"
        },
        {
          "username": "gspencergoog",
          "href": "https://github.com/gspencergoog",
          "avatar": "https://avatars.githubusercontent.com/u/8867023"
        },
        {
          "username": "paullewis",
          "href": "https://github.com/paullewis",
          "avatar": "https://avatars.githubusercontent.com/u/617438"
        },
        {
          "username": "wrenj",
          "href": "https://github.com/wrenj",
          "avatar": "https://avatars.githubusercontent.com/u/20953688"
        },
        {
          "username": "sugoi-yuzuru",
          "href": "https://github.com/sugoi-yuzuru",
          "avatar": "https://avatars.githubusercontent.com/u/75597583"
        }
      ]
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 403
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1073,
      "added_stars": 5263,
      "builtBy": [
        {
          "username": "Wei-Shaw",
          "href": "https://github.com/Wei-Shaw",
          "avatar": "https://avatars.githubusercontent.com/u/26101719"
        },
        {
          "username": "IanShaw027",
          "href": "https://github.com/IanShaw027",
          "avatar": "https://avatars.githubusercontent.com/u/131567472"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "touwaeriol",
          "href": "https://github.com/touwaeriol",
          "avatar": "https://avatars.githubusercontent.com/u/52620633"
        },
        {
          "username": "slovx2",
          "href": "https://github.com/slovx2",
          "avatar": "https://avatars.githubusercontent.com/u/2713715"
        }
      ]
    },
    {
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1779,
      "added_stars": 3062,
      "builtBy": [
        {
          "username": "xpzouying",
          "href": "https://github.com/xpzouying",
          "avatar": "https://avatars.githubusercontent.com/u/3946563"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tanxxjun321",
          "href": "https://github.com/tanxxjun321",
          "avatar": "https://avatars.githubusercontent.com/u/7806992"
        },
        {
          "username": "Angiin",
          "href": "https://github.com/Angiin",
          "avatar": "https://avatars.githubusercontent.com/u/17389304"
        }
      ]
    },
    {
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 701,
      "added_stars": 1651,
      "builtBy": [
        {
          "username": "zachmu",
          "href": "https://github.com/zachmu",
          "avatar": "https://avatars.githubusercontent.com/u/474773"
        },
        {
          "username": "andy-wm-arthur",
          "href": "https://github.com/andy-wm-arthur",
          "avatar": "https://avatars.githubusercontent.com/u/8837413"
        },
        {
          "username": "fulghum",
          "href": "https://github.com/fulghum",
          "avatar": "https://avatars.githubusercontent.com/u/193449"
        },
        {
          "username": "coffeegoddd",
          "href": "https://github.com/coffeegoddd",
          "avatar": "https://avatars.githubusercontent.com/u/43383835"
        },
        {
          "username": "reltuk",
          "href": "https://github.com/reltuk",
          "avatar": "https://avatars.githubusercontent.com/u/1150979"
        }
      ]
    },
    {
      "author": "asheshgoplani",
      "repo": "agent-deck",
      "avatar": "https://github.com/asheshgoplani.png",
      "repo_link": "https://github.com/asheshgoplani/agent-deck",
      "desc": "Terminal session manager for AI coding agents. One TUI for Claude, Gemini, OpenCode, Codex, and more.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 171,
      "added_stars": 681,
      "builtBy": [
        {
          "username": "asheshgoplani",
          "href": "https://github.com/asheshgoplani",
          "avatar": "https://avatars.githubusercontent.com/u/36273585"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "BestSithInEU",
          "href": "https://github.com/BestSithInEU",
          "avatar": "https://avatars.githubusercontent.com/u/67585935"
        },
        {
          "username": "DieracDelta",
          "href": "https://github.com/DieracDelta",
          "avatar": "https://avatars.githubusercontent.com/u/13730968"
        },
        {
          "username": "johnuopini",
          "href": "https://github.com/johnuopini",
          "avatar": "https://avatars.githubusercontent.com/u/2204736"
        }
      ]
    },
    {
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "✨ Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1214,
      "added_stars": 8445,
      "builtBy": [
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
          "username": "sirozha",
          "href": "https://github.com/sirozha",
          "avatar": "https://avatars.githubusercontent.com/u/7765123"
        },
        {
          "username": "zavgorodnii",
          "href": "https://github.com/zavgorodnii",
          "avatar": "https://avatars.githubusercontent.com/u/6124982"
        }
      ]
    },
    {
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "CyberStrikeAI is an AI-native security testing platform built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 497,
      "added_stars": 2171,
      "builtBy": [
        {
          "username": "Ed1s0nZ",
          "href": "https://github.com/Ed1s0nZ",
          "avatar": "https://avatars.githubusercontent.com/u/83812544"
        },
        {
          "username": "chhs1129",
          "href": "https://github.com/chhs1129",
          "avatar": "https://avatars.githubusercontent.com/u/22484224"
        },
        {
          "username": "04cb",
          "href": "https://github.com/04cb",
          "avatar": "https://avatars.githubusercontent.com/u/111667698"
        }
      ]
    },
    {
      "author": "m1k1o",
      "repo": "neko",
      "avatar": "https://github.com/m1k1o.png",
      "repo_link": "https://github.com/m1k1o/neko",
      "desc": "A self hosted virtual browser that runs in docker and uses WebRTC.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1416,
      "added_stars": 3010,
      "builtBy": [
        {
          "username": "m1k1o",
          "href": "https://github.com/m1k1o",
          "avatar": "https://avatars.githubusercontent.com/u/7534274"
        },
        {
          "username": "nurdism",
          "href": "https://github.com/nurdism",
          "avatar": "https://avatars.githubusercontent.com/u/420102"
        },
        {
          "username": "mbattista",
          "href": "https://github.com/mbattista",
          "avatar": "https://avatars.githubusercontent.com/u/26247314"
        },
        {
          "username": "prophetofxenu",
          "href": "https://github.com/prophetofxenu",
          "avatar": "https://avatars.githubusercontent.com/u/20529712"
        },
        {
          "username": "gbrian",
          "href": "https://github.com/gbrian",
          "avatar": "https://avatars.githubusercontent.com/u/767180"
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
      "forks": 8118,
      "added_stars": 833,
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
          "username": "andyfeller",
          "href": "https://github.com/andyfeller",
          "avatar": "https://avatars.githubusercontent.com/u/2089743"
        }
      ]
    },
    {
      "author": "charmbracelet",
      "repo": "bubbletea",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/bubbletea",
      "desc": "A powerful little TUI framework 🏗",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1143,
      "added_stars": 1381,
      "builtBy": [
        {
          "username": "aymanbagabas",
          "href": "https://github.com/aymanbagabas",
          "avatar": "https://avatars.githubusercontent.com/u/3187948"
        },
        {
          "username": "meowgorithm",
          "href": "https://github.com/meowgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/25087"
        },
        {
          "username": "muesli",
          "href": "https://github.com/muesli",
          "avatar": "https://avatars.githubusercontent.com/u/146378"
        },
        {
          "username": "caarlos0",
          "href": "https://github.com/caarlos0",
          "avatar": "https://avatars.githubusercontent.com/u/245435"
        }
      ]
    },
    {
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 316,
      "added_stars": 423,
      "builtBy": [
        {
          "username": "9seconds",
          "href": "https://github.com/9seconds",
          "avatar": "https://avatars.githubusercontent.com/u/831613"
        },
        {
          "username": "savely-krasovsky",
          "href": "https://github.com/savely-krasovsky",
          "avatar": "https://avatars.githubusercontent.com/u/5345489"
        },
        {
          "username": "im-kulikov",
          "href": "https://github.com/im-kulikov",
          "avatar": "https://avatars.githubusercontent.com/u/888650"
        },
        {
          "username": "Dank-del",
          "href": "https://github.com/Dank-del",
          "avatar": "https://avatars.githubusercontent.com/u/63096193"
        },
        {
          "username": "ivulit",
          "href": "https://github.com/ivulit",
          "avatar": "https://avatars.githubusercontent.com/u/121666192"
        }
      ]
    },
    {
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 Take full control of your VPS with 1Panel. Deploy OpenClaw in one click.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3048,
      "added_stars": 1037,
      "builtBy": [
        {
          "username": "zhengkunwang223",
          "href": "https://github.com/zhengkunwang223",
          "avatar": "https://avatars.githubusercontent.com/u/31820853"
        },
        {
          "username": "ssongliu",
          "href": "https://github.com/ssongliu",
          "avatar": "https://avatars.githubusercontent.com/u/73214554"
        },
        {
          "username": "lan-yonghui",
          "href": "https://github.com/lan-yonghui",
          "avatar": "https://avatars.githubusercontent.com/u/81747598"
        },
        {
          "username": "HynoR",
          "href": "https://github.com/HynoR",
          "avatar": "https://avatars.githubusercontent.com/u/20227709"
        },
        {
          "username": "wanghe-fit2cloud",
          "href": "https://github.com/wanghe-fit2cloud",
          "avatar": "https://avatars.githubusercontent.com/u/46734380"
        }
      ]
    },
    {
      "author": "charmbracelet",
      "repo": "glow",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/glow",
      "desc": "Render markdown on the CLI, with pizzazz! 💅🏻",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 612,
      "added_stars": 950,
      "builtBy": [
        {
          "username": "meowgorithm",
          "href": "https://github.com/meowgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/25087"
        },
        {
          "username": "muesli",
          "href": "https://github.com/muesli",
          "avatar": "https://avatars.githubusercontent.com/u/146378"
        },
        {
          "username": "caarlos0",
          "href": "https://github.com/caarlos0",
          "avatar": "https://avatars.githubusercontent.com/u/245435"
        },
        {
          "username": "penguwin",
          "href": "https://github.com/penguwin",
          "avatar": "https://avatars.githubusercontent.com/u/13225611"
        }
      ]
    },
    {
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2627,
      "added_stars": 2259,
      "builtBy": [
        {
          "username": "jesseduffield",
          "href": "https://github.com/jesseduffield",
          "avatar": "https://avatars.githubusercontent.com/u/8456633"
        },
        {
          "username": "stefanhaller",
          "href": "https://github.com/stefanhaller",
          "avatar": "https://avatars.githubusercontent.com/u/1225667"
        },
        {
          "username": "mjarkk",
          "href": "https://github.com/mjarkk",
          "avatar": "https://avatars.githubusercontent.com/u/15320763"
        },
        {
          "username": "dawidd6",
          "href": "https://github.com/dawidd6",
          "avatar": "https://avatars.githubusercontent.com/u/9713907"
        },
        {
          "username": "Ryooooooga",
          "href": "https://github.com/Ryooooooga",
          "avatar": "https://avatars.githubusercontent.com/u/10097437"
        }
      ]
    },
    {
      "author": "dlvhdr",
      "repo": "gh-dash",
      "avatar": "https://github.com/dlvhdr.png",
      "repo_link": "https://github.com/dlvhdr/gh-dash",
      "desc": "A rich terminal UI for GitHub that doesn't break your flow.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 360,
      "added_stars": 889,
      "builtBy": [
        {
          "username": "dlvhdr",
          "href": "https://github.com/dlvhdr",
          "avatar": "https://avatars.githubusercontent.com/u/6196971"
        },
        {
          "username": "sideshowbarker",
          "href": "https://github.com/sideshowbarker",
          "avatar": "https://avatars.githubusercontent.com/u/194984"
        },
        {
          "username": "robdimsdale",
          "href": "https://github.com/robdimsdale",
          "avatar": "https://avatars.githubusercontent.com/u/7230694"
        },
        {
          "username": "kyu08",
          "href": "https://github.com/kyu08",
          "avatar": "https://avatars.githubusercontent.com/u/49891479"
        },
        {
          "username": "alcpereira",
          "href": "https://github.com/alcpereira",
          "avatar": "https://avatars.githubusercontent.com/u/48070464"
        }
      ]
    },
    {
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 15067,
      "added_stars": 3220,
      "builtBy": [
        {
          "username": "mxyng",
          "href": "https://github.com/mxyng",
          "avatar": "https://avatars.githubusercontent.com/u/2372640"
        },
        {
          "username": "jmorganca",
          "href": "https://github.com/jmorganca",
          "avatar": "https://avatars.githubusercontent.com/u/251292"
        },
        {
          "username": "dhiltgen",
          "href": "https://github.com/dhiltgen",
          "avatar": "https://avatars.githubusercontent.com/u/4033016"
        },
        {
          "username": "BruceMacD",
          "href": "https://github.com/BruceMacD",
          "avatar": "https://avatars.githubusercontent.com/u/5853428"
        },
        {
          "username": "pdevine",
          "href": "https://github.com/pdevine",
          "avatar": "https://avatars.githubusercontent.com/u/75239"
        }
      ]
    },
    {
      "author": "mark3labs",
      "repo": "mcp-go",
      "avatar": "https://github.com/mark3labs.png",
      "repo_link": "https://github.com/mark3labs/mcp-go",
      "desc": "A Go implementation of the Model Context Protocol (MCP), enabling seamless integration between LLM applications and external data sources and tools.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 798,
      "added_stars": 235,
      "builtBy": [
        {
          "username": "ezynda3",
          "href": "https://github.com/ezynda3",
          "avatar": "https://avatars.githubusercontent.com/u/5308871"
        },
        {
          "username": "pottekkat",
          "href": "https://github.com/pottekkat",
          "avatar": "https://avatars.githubusercontent.com/u/49474499"
        },
        {
          "username": "dugenkui03",
          "href": "https://github.com/dugenkui03",
          "avatar": "https://avatars.githubusercontent.com/u/18216266"
        },
        {
          "username": "cryo-zd",
          "href": "https://github.com/cryo-zd",
          "avatar": "https://avatars.githubusercontent.com/u/129663775"
        },
        {
          "username": "rwjblue-glean",
          "href": "https://github.com/rwjblue-glean",
          "avatar": "https://avatars.githubusercontent.com/u/205674904"
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
      "forks": 307,
      "added_stars": 524,
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
          "username": "krissetto",
          "href": "https://github.com/krissetto",
          "avatar": "https://avatars.githubusercontent.com/u/47751006"
        },
        {
          "username": "trungutt",
          "href": "https://github.com/trungutt",
          "avatar": "https://avatars.githubusercontent.com/u/18528548"
        },
        {
          "username": "derekmisler",
          "href": "https://github.com/derekmisler",
          "avatar": "https://avatars.githubusercontent.com/u/2684662"
        }
      ]
    },
    {
      "author": "cert-manager",
      "repo": "cert-manager",
      "avatar": "https://github.com/cert-manager.png",
      "repo_link": "https://github.com/cert-manager/cert-manager",
      "desc": "Automatically provision and manage TLS certificates in Kubernetes",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2333,
      "added_stars": 135,
      "builtBy": [
        {
          "username": "jetstack-bot",
          "href": "https://github.com/jetstack-bot",
          "avatar": "https://avatars.githubusercontent.com/u/32282838"
        },
        {
          "username": "munnerz",
          "href": "https://github.com/munnerz",
          "avatar": "https://avatars.githubusercontent.com/u/203583"
        },
        {
          "username": "JoshVanL",
          "href": "https://github.com/JoshVanL",
          "avatar": "https://avatars.githubusercontent.com/u/15893072"
        },
        {
          "username": "inteon",
          "href": "https://github.com/inteon",
          "avatar": "https://avatars.githubusercontent.com/u/42113979"
        }
      ]
    },
    {
      "author": "grafana",
      "repo": "mcp-grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/mcp-grafana",
      "desc": "MCP server for Grafana",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 301,
      "added_stars": 264,
      "builtBy": [
        {
          "username": "sd2k",
          "href": "https://github.com/sd2k",
          "avatar": "https://avatars.githubusercontent.com/u/5464991"
        },
        {
          "username": "ioanarm",
          "href": "https://github.com/ioanarm",
          "avatar": "https://avatars.githubusercontent.com/u/29095029"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "mostlygeek",
      "repo": "llama-swap",
      "avatar": "https://github.com/mostlygeek.png",
      "repo_link": "https://github.com/mostlygeek/llama-swap",
      "desc": "Reliable model swapping for any local OpenAI/Anthropic compatible server - llama.cpp, vllm, etc",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 210,
      "added_stars": 434,
      "builtBy": [
        {
          "username": "mostlygeek",
          "href": "https://github.com/mostlygeek",
          "avatar": "https://avatars.githubusercontent.com/u/83972"
        },
        {
          "username": "ryan-steed-usa",
          "href": "https://github.com/ryan-steed-usa",
          "avatar": "https://avatars.githubusercontent.com/u/240190636"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shirayu",
          "href": "https://github.com/shirayu",
          "avatar": "https://avatars.githubusercontent.com/u/963961"
        },
        {
          "username": "Thammachart",
          "href": "https://github.com/Thammachart",
          "avatar": "https://avatars.githubusercontent.com/u/1731496"
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
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4732,
      "added_stars": 31367,
      "builtBy": [
        {
          "username": "666ghj",
          "href": "https://github.com/666ghj",
          "avatar": "https://avatars.githubusercontent.com/u/110395318"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skills and subagents, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3864,
      "added_stars": 12001,
      "builtBy": [
        {
          "username": "MagicCube",
          "href": "https://github.com/MagicCube",
          "avatar": "https://avatars.githubusercontent.com/u/1003147"
        },
        {
          "username": "WillemJiang",
          "href": "https://github.com/WillemJiang",
          "avatar": "https://avatars.githubusercontent.com/u/219644"
        },
        {
          "username": "hetaoBackend",
          "href": "https://github.com/hetaoBackend",
          "avatar": "https://avatars.githubusercontent.com/u/45447813"
        },
        {
          "username": "henry-byted",
          "href": "https://github.com/henry-byted",
          "avatar": "https://avatars.githubusercontent.com/u/209858577"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1124,
      "added_stars": 13226,
      "builtBy": [
        {
          "username": "qin-ctx",
          "href": "https://github.com/qin-ctx",
          "avatar": "https://avatars.githubusercontent.com/u/234610432"
        },
        {
          "username": "zhoujh01",
          "href": "https://github.com/zhoujh01",
          "avatar": "https://avatars.githubusercontent.com/u/242402223"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "MaojiaSheng",
          "href": "https://github.com/MaojiaSheng",
          "avatar": "https://avatars.githubusercontent.com/u/211460083"
        },
        {
          "username": "ZaynJarvis",
          "href": "https://github.com/ZaynJarvis",
          "avatar": "https://avatars.githubusercontent.com/u/31875147"
        }
      ]
    },
    {
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "Give your agents the power of the Hugging Face ecosystem",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 567,
      "added_stars": 8179,
      "builtBy": [
        {
          "username": "burtenshaw",
          "href": "https://github.com/burtenshaw",
          "avatar": "https://avatars.githubusercontent.com/u/19620375"
        },
        {
          "username": "evalstate",
          "href": "https://github.com/evalstate",
          "avatar": "https://avatars.githubusercontent.com/u/1936278"
        },
        {
          "username": "hanouticelina",
          "href": "https://github.com/hanouticelina",
          "avatar": "https://avatars.githubusercontent.com/u/36770234"
        },
        {
          "username": "NielsRogge",
          "href": "https://github.com/NielsRogge",
          "avatar": "https://avatars.githubusercontent.com/u/48327001"
        },
        {
          "username": "abidlabs",
          "href": "https://github.com/abidlabs",
          "avatar": "https://avatars.githubusercontent.com/u/1778297"
        }
      ]
    },
    {
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "OpenSandbox is a general-purpose sandbox platform for AI applications, offering multi-language SDKs, unified sandbox APIs, and Docker/Kubernetes runtimes for scenarios like Coding Agents, GUI Agents, Agent Evaluation, AI Code Execution, and RL Training.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 666,
      "added_stars": 7637,
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
          "username": "Spground",
          "href": "https://github.com/Spground",
          "avatar": "https://avatars.githubusercontent.com/u/10492823"
        },
        {
          "username": "jwx0925",
          "href": "https://github.com/jwx0925",
          "avatar": "https://avatars.githubusercontent.com/u/1539927"
        }
      ]
    },
    {
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1633,
      "added_stars": 7772,
      "builtBy": [
        {
          "username": "p-e-w",
          "href": "https://github.com/p-e-w",
          "avatar": "https://avatars.githubusercontent.com/u/2702526"
        },
        {
          "username": "spikymoth",
          "href": "https://github.com/spikymoth",
          "avatar": "https://avatars.githubusercontent.com/u/133602907"
        },
        {
          "username": "anrp",
          "href": "https://github.com/anrp",
          "avatar": "https://avatars.githubusercontent.com/u/1325515"
        },
        {
          "username": "red40maxxer",
          "href": "https://github.com/red40maxxer",
          "avatar": "https://avatars.githubusercontent.com/u/113548315"
        },
        {
          "username": "kldzj",
          "href": "https://github.com/kldzj",
          "avatar": "https://avatars.githubusercontent.com/u/7687617"
        }
      ]
    },
    {
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 801,
      "added_stars": 4375,
      "builtBy": [
        {
          "username": "teng-lin",
          "href": "https://github.com/teng-lin",
          "avatar": "https://avatars.githubusercontent.com/u/737447"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "furkankoykiran",
          "href": "https://github.com/furkankoykiran",
          "avatar": "https://avatars.githubusercontent.com/u/60299878"
        },
        {
          "username": "welshofer",
          "href": "https://github.com/welshofer",
          "avatar": "https://avatars.githubusercontent.com/u/33588582"
        }
      ]
    },
    {
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1775,
      "added_stars": 9298,
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
          "username": "anka-afk",
          "href": "https://github.com/anka-afk",
          "avatar": "https://avatars.githubusercontent.com/u/110004162"
        },
        {
          "username": "LIghtJUNction",
          "href": "https://github.com/LIghtJUNction",
          "avatar": "https://avatars.githubusercontent.com/u/106986785"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3091,
      "added_stars": 7452,
      "builtBy": [
        {
          "username": "potassiummmm",
          "href": "https://github.com/potassiummmm",
          "avatar": "https://avatars.githubusercontent.com/u/54800242"
        },
        {
          "username": "tsong-ms",
          "href": "https://github.com/tsong-ms",
          "avatar": "https://avatars.githubusercontent.com/u/84831885"
        },
        {
          "username": "younesbelkada",
          "href": "https://github.com/younesbelkada",
          "avatar": "https://avatars.githubusercontent.com/u/49240599"
        },
        {
          "username": "sd983527",
          "href": "https://github.com/sd983527",
          "avatar": "https://avatars.githubusercontent.com/u/59006636"
        },
        {
          "username": "XsquirrelC",
          "href": "https://github.com/XsquirrelC",
          "avatar": "https://avatars.githubusercontent.com/u/178687198"
        }
      ]
    },
    {
      "author": "fishaudio",
      "repo": "fish-speech",
      "avatar": "https://github.com/fishaudio.png",
      "repo_link": "https://github.com/fishaudio/fish-speech",
      "desc": "SOTA Open Source TTS",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2376,
      "added_stars": 3417,
      "builtBy": [
        {
          "username": "leng-yue",
          "href": "https://github.com/leng-yue",
          "avatar": "https://avatars.githubusercontent.com/u/25119060"
        },
        {
          "username": "AnyaCoder",
          "href": "https://github.com/AnyaCoder",
          "avatar": "https://avatars.githubusercontent.com/u/122108331"
        },
        {
          "username": "PoTaTo-Mika",
          "href": "https://github.com/PoTaTo-Mika",
          "avatar": "https://avatars.githubusercontent.com/u/148920650"
        }
      ]
    },
    {
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 456,
      "added_stars": 3818,
      "builtBy": [
        {
          "username": "Jeffallan",
          "href": "https://github.com/Jeffallan",
          "avatar": "https://avatars.githubusercontent.com/u/23423962"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "liyin2015",
          "href": "https://github.com/liyin2015",
          "avatar": "https://avatars.githubusercontent.com/u/14322677"
        },
        {
          "username": "salmanmkc",
          "href": "https://github.com/salmanmkc",
          "avatar": "https://avatars.githubusercontent.com/u/32169182"
        },
        {
          "username": "thomassamoul",
          "href": "https://github.com/thomassamoul",
          "avatar": "https://avatars.githubusercontent.com/u/50757446"
        }
      ]
    },
    {
      "author": "ZhuLinsen",
      "repo": "daily_stock_analysis",
      "avatar": "https://github.com/ZhuLinsen.png",
      "repo_link": "https://github.com/ZhuLinsen/daily_stock_analysis",
      "desc": "LLM驱动的 A/H/美股智能分析器：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送，零成本定时运行，纯白嫖. LLM-powered stock analysis system for A/H/US markets.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 24283,
      "added_stars": 11579,
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
          "username": "adminlove520",
          "href": "https://github.com/adminlove520",
          "avatar": "https://avatars.githubusercontent.com/u/32920883"
        },
        {
          "username": "birdxs",
          "href": "https://github.com/birdxs",
          "avatar": "https://avatars.githubusercontent.com/u/36181736"
        }
      ]
    },
    {
      "author": "RichardAtCT",
      "repo": "claude-code-telegram",
      "avatar": "https://github.com/RichardAtCT.png",
      "repo_link": "https://github.com/RichardAtCT/claude-code-telegram",
      "desc": "A powerful Telegram bot that provides remote access to Claude Code, enabling developers to interact with their projects from anywhere with full AI assistance and session persistence.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 281,
      "added_stars": 1411,
      "builtBy": [
        {
          "username": "RichardAtCT",
          "href": "https://github.com/RichardAtCT",
          "avatar": "https://avatars.githubusercontent.com/u/29794543"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "guillaumegay13",
          "href": "https://github.com/guillaumegay13",
          "avatar": "https://avatars.githubusercontent.com/u/141296636"
        },
        {
          "username": "F1orian",
          "href": "https://github.com/F1orian",
          "avatar": "https://avatars.githubusercontent.com/u/27896106"
        },
        {
          "username": "alexx-ftw",
          "href": "https://github.com/alexx-ftw",
          "avatar": "https://avatars.githubusercontent.com/u/22500633"
        }
      ]
    },
    {
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8591,
      "added_stars": 3716,
      "builtBy": [
        {
          "username": "virattt",
          "href": "https://github.com/virattt",
          "avatar": "https://avatars.githubusercontent.com/u/901795"
        },
        {
          "username": "arsaboo",
          "href": "https://github.com/arsaboo",
          "avatar": "https://avatars.githubusercontent.com/u/18319734"
        },
        {
          "username": "KittatamSaisaard",
          "href": "https://github.com/KittatamSaisaard",
          "avatar": "https://avatars.githubusercontent.com/u/50354903"
        },
        {
          "username": "jsemldonado",
          "href": "https://github.com/jsemldonado",
          "avatar": "https://avatars.githubusercontent.com/u/172995042"
        },
        {
          "username": "ak4631",
          "href": "https://github.com/ak4631",
          "avatar": "https://avatars.githubusercontent.com/u/132299371"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "claude-code-security-review",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-security-review",
      "desc": "An AI-powered security review GitHub Action using Claude to analyze code changes for security vulnerabilities.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 322,
      "added_stars": 873,
      "builtBy": [
        {
          "username": "ddworken",
          "href": "https://github.com/ddworken",
          "avatar": "https://avatars.githubusercontent.com/u/5304541"
        },
        {
          "username": "GrahamCampbell",
          "href": "https://github.com/GrahamCampbell",
          "avatar": "https://avatars.githubusercontent.com/u/2829600"
        },
        {
          "username": "Eduard-Voiculescu",
          "href": "https://github.com/Eduard-Voiculescu",
          "avatar": "https://avatars.githubusercontent.com/u/26581515"
        }
      ]
    },
    {
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 44624,
      "added_stars": 14030,
      "builtBy": [
        {
          "username": "matheusfelipeog",
          "href": "https://github.com/matheusfelipeog",
          "avatar": "https://avatars.githubusercontent.com/u/50463866"
        },
        {
          "username": "davemachado",
          "href": "https://github.com/davemachado",
          "avatar": "https://avatars.githubusercontent.com/u/15134885"
        },
        {
          "username": "pawelborkar",
          "href": "https://github.com/pawelborkar",
          "avatar": "https://avatars.githubusercontent.com/u/36134699"
        },
        {
          "username": "jbrooksuk",
          "href": "https://github.com/jbrooksuk",
          "avatar": "https://avatars.githubusercontent.com/u/246103"
        },
        {
          "username": "marekdano",
          "href": "https://github.com/marekdano",
          "avatar": "https://avatars.githubusercontent.com/u/1914165"
        }
      ]
    },
    {
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 844,
      "added_stars": 1703,
      "builtBy": [
        {
          "username": "rajatsen91",
          "href": "https://github.com/rajatsen91",
          "avatar": "https://avatars.githubusercontent.com/u/8039264"
        },
        {
          "username": "siriuz42",
          "href": "https://github.com/siriuz42",
          "avatar": "https://avatars.githubusercontent.com/u/5073569"
        },
        {
          "username": "misha-chertushkin",
          "href": "https://github.com/misha-chertushkin",
          "avatar": "https://avatars.githubusercontent.com/u/151166456"
        },
        {
          "username": "JustinGuese",
          "href": "https://github.com/JustinGuese",
          "avatar": "https://avatars.githubusercontent.com/u/9588843"
        },
        {
          "username": "kashif",
          "href": "https://github.com/kashif",
          "avatar": "https://avatars.githubusercontent.com/u/8100"
        }
      ]
    },
    {
      "author": "langchain-ai",
      "repo": "open-swe",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/open-swe",
      "desc": "An Open-Source Asynchronous Coding Agent",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 884,
      "added_stars": 1631,
      "builtBy": [
        {
          "username": "bracesproul",
          "href": "https://github.com/bracesproul",
          "avatar": "https://avatars.githubusercontent.com/u/46789226"
        },
        {
          "username": "aran-yogesh",
          "href": "https://github.com/aran-yogesh",
          "avatar": "https://avatars.githubusercontent.com/u/63587953"
        },
        {
          "username": "starmorph",
          "href": "https://github.com/starmorph",
          "avatar": "https://avatars.githubusercontent.com/u/121908331"
        }
      ]
    },
    {
      "author": "databricks-solutions",
      "repo": "ai-dev-kit",
      "avatar": "https://github.com/databricks-solutions.png",
      "repo_link": "https://github.com/databricks-solutions/ai-dev-kit",
      "desc": "Databricks Toolkit for Coding Agents provided by Field Engineering",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 188,
      "added_stars": 560,
      "builtBy": [
        {
          "username": "calreynolds",
          "href": "https://github.com/calreynolds",
          "avatar": "https://avatars.githubusercontent.com/u/49540501"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "dustinvannoy-db",
          "href": "https://github.com/dustinvannoy-db",
          "avatar": "https://avatars.githubusercontent.com/u/126025751"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "malcolndandaro",
          "href": "https://github.com/malcolndandaro",
          "avatar": "https://avatars.githubusercontent.com/u/40570280"
        }
      ]
    },
    {
      "author": "666ghj",
      "repo": "BettaFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/BettaFish",
      "desc": "微舆：人人可用的多Agent舆情分析助手，打破信息茧房，还原舆情原貌，预测未来走向，辅助决策！从0实现，不依赖任何框架。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7382,
      "added_stars": 4095,
      "builtBy": [
        {
          "username": "666ghj",
          "href": "https://github.com/666ghj",
          "avatar": "https://avatars.githubusercontent.com/u/110395318"
        },
        {
          "username": "MaYiding",
          "href": "https://github.com/MaYiding",
          "avatar": "https://avatars.githubusercontent.com/u/77890939"
        },
        {
          "username": "DoiiarX",
          "href": "https://github.com/DoiiarX",
          "avatar": "https://avatars.githubusercontent.com/u/25550075"
        },
        {
          "username": "ghmark675",
          "href": "https://github.com/ghmark675",
          "avatar": "https://avatars.githubusercontent.com/u/188834327"
        },
        {
          "username": "Qst137",
          "href": "https://github.com/Qst137",
          "avatar": "https://avatars.githubusercontent.com/u/139198328"
        }
      ]
    },
    {
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Unified web UI for training and running open models like Qwen, DeepSeek, gpt-oss and Gemma locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4773,
      "added_stars": 4177,
      "builtBy": [
        {
          "username": "danielhanchen",
          "href": "https://github.com/danielhanchen",
          "avatar": "https://avatars.githubusercontent.com/u/23090290"
        },
        {
          "username": "rolandtannous",
          "href": "https://github.com/rolandtannous",
          "avatar": "https://avatars.githubusercontent.com/u/115670425"
        },
        {
          "username": "shimmyshimmer",
          "href": "https://github.com/shimmyshimmer",
          "avatar": "https://avatars.githubusercontent.com/u/107991372"
        },
        {
          "username": "Datta0",
          "href": "https://github.com/Datta0",
          "avatar": "https://avatars.githubusercontent.com/u/39181234"
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
      "title": "I Wrapped My Free npm Package as a Paid REST API — Here's the Architecture",
      "url": "https://dev.to/ckmtools/i-wrapped-my-free-npm-package-as-a-paid-rest-api-heres-the-architecture-24p9",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-18T07:15:33.000Z"
    },
    {
      "title": "Built an open source SVG brand library with 4,700+ icons",
      "url": "https://github.com/glincker/thesvg",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-18T03:58:20.000Z"
    },
    {
      "title": "Why Node.js Needs A Virtual File System",
      "url": "https://blog.platformatic.dev/why-nodejs-needs-a-virtual-file-system",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-17T18:06:14.000Z"
    },
    {
      "title": "We Benchmarked Top React Gantt Chart Libraries So You Don't Have To",
      "url": "https://svar.dev/blog/react-gantt-benchmark/",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-17T12:45:35.000Z"
    },
    {
      "title": "Why I Stopped Maintaining .env.example by Hand",
      "url": "https://dev.to/ckmtools/why-i-stopped-maintaining-envexample-by-hand-473j",
      "upvotes": "2",
      "comments": "1",
      "created": "2026-03-17T07:00:59.000Z"
    },
    {
      "title": "Cool Github Copilot Metrics Dashboard",
      "url": "https://github.com/zahhar/ghcp-dashboard",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-16T15:43:03.000Z"
    },
    {
      "title": "Native JSON modules are finally real",
      "url": "https://allthingssmitty.com/2026/03/16/native-json-modules-are-finally-real/",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-16T12:30:24.000Z"
    },
    {
      "title": "I Built an npm Package and Tracked Every Download for Two Weeks. Here's the Data.",
      "url": "https://dev.to/ckmtools/i-built-an-npm-package-and-tracked-every-download-for-two-weeks-heres-the-data-3jck",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-16T04:19:07.000Z"
    },
    {
      "title": "Sharing my 10MB database management tool that could change your workflow",
      "url": "https://github.com/debba/tabularis",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-15T09:37:41.000Z"
    },
    {
      "title": "alonronin/orbit: A better search engine for your github starred collection.",
      "url": "https://github.com/alonronin/orbit",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-13T23:50:28.000Z"
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
      "title": "Congrats to the Winners of Our First DEV Weekend Challenge!",
      "description": "It's time!! We are thrilled to announce the winners of our first DEV Weekend Challenge.  The prompt...",
      "url": "https://dev.to/devteam/congrats-to-the-winners-of-our-first-dev-weekend-challenge-1gml",
      "tags": "ai, devchallenge, weekendchallenge, webdev",
      "reactions": 52,
      "comments": 12,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Vibe-coding in Google AI Studio: my tips to prompt better and create amazing apps",
      "description": "You might already know Google AI Studio as a sandbox to play with the Deepmind models and tinker with...",
      "url": "https://dev.to/googleai/vibe-coding-in-google-ai-studio-my-tips-to-prompt-better-and-create-amazing-apps-3kcp",
      "tags": "ai, vibecoding, gemini, promptengineering",
      "reactions": 37,
      "comments": 2,
      "reading_time": 12,
      "author": "giom_v"
    },
    {
      "title": "AI Vocab 101",
      "description": "Smart, curious people keep hitting the same wall with AI: they don't have the words to name what they don't understand. Here are the terms that turn vague frustration into specific, solvable problems.",
      "url": "https://dev.to/bekahhw/ai-vocab-101-eh2",
      "tags": "ai, beginners",
      "reactions": 6,
      "comments": 2,
      "reading_time": 6,
      "author": "bekahhw"
    },
    {
      "title": "We've Seen This Movie Before",
      "description": "I've been sitting on this comparison for a while, trying to decide if it was too obvious to write...",
      "url": "https://dev.to/wynandpieters/weve-seen-this-movie-before-3719",
      "tags": "ai, gamedev, programming",
      "reactions": 41,
      "comments": 2,
      "reading_time": 10,
      "author": "wynandpieters"
    },
    {
      "title": "I Think a Lot of Developers Are Quietly Grieving the Old Internet",
      "description": "I think a lot of developers are carrying a kind of grief right now, but rarely naming it.  Not...",
      "url": "https://dev.to/the_nortern_dev/i-think-a-lot-of-developers-are-quietly-grieving-the-old-internet-3d8",
      "tags": "discuss, webdev, programming, culture",
      "reactions": 196,
      "comments": 125,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "I Tried Vite+ and Replaced My Entire Frontend Toolchain",
      "description": "If you're a frontend developer in 2026, you've probably had to deal with a lot of different tooling....",
      "url": "https://dev.to/erikch/i-tried-vite-and-replaced-my-entire-frontend-toolchain-4cgb",
      "tags": "webdev, vite, frontend, javascript",
      "reactions": 22,
      "comments": 2,
      "reading_time": 9,
      "author": "erikch"
    },
    {
      "title": "Introducing the new full-stack vibe coding experience in Google AI Studio",
      "description": "Start building real apps for the modern web with the Antigravity coding agent along with Firebase...",
      "url": "https://dev.to/googleai/introducing-the-new-full-stack-vibe-coding-experience-in-google-ai-studio-471g",
      "tags": "ai, antigravity, agents, nextjs",
      "reactions": 41,
      "comments": 4,
      "reading_time": 4,
      "author": "kat_kampf"
    },
    {
      "title": "Vitest's 4.1 New \"Fast-Forward\" Mode Skips Timer Delays Instantly",
      "description": "An important property of tests is that they should be composable.  Here is an example. Say you have a...",
      "url": "https://dev.to/playfulprogramming-angular/vitests-41-new-fast-forward-mode-skips-timer-delays-instantly-4a4h",
      "tags": "webdev, javascript, testing, angular",
      "reactions": 29,
      "comments": 0,
      "reading_time": 3,
      "author": "younesjd"
    },
    {
      "title": "Should RubyGems/Bundler Have a Cooldown Feature?",
      "description": "I'm Hiroshi Shibata (hsbt), a Ruby committer and the maintainer of RubyGems and Bundler.          ...",
      "url": "https://dev.to/hsbt/should-rubygemsbundler-have-a-cooldown-feature-40cp",
      "tags": "ruby, security, supplychainsecurity, packaging",
      "reactions": 35,
      "comments": 3,
      "reading_time": 4,
      "author": "hsbt"
    },
    {
      "title": "Anki On My Wrist",
      "description": "I've long been interested in \"learning how to learn\" and have long been annoyed by how I have grown...",
      "url": "https://dev.to/matheusmaldaner/anki-on-my-wrist-3gi6",
      "tags": "learning, productivity, showdev, ai",
      "reactions": 24,
      "comments": 1,
      "reading_time": 4,
      "author": "matheusmaldaner"
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
      "title": "Minecraft Source Code is Interesting",
      "url": "https://www.karanjanthe.me/posts/minecraft-source/",
      "score": 1,
      "comments": 0,
      "tags": [
        "c++",
        "games",
        "performance"
      ],
      "id": "bfhaih"
    },
    {
      "title": "100+ Kernel Bugs in 30 Days",
      "url": "https://substack.com/home/post/p-188916866",
      "score": 2,
      "comments": 0,
      "tags": [
        "security",
        "vibecoding",
        "windows"
      ],
      "id": "h008ee"
    },
    {
      "title": "Supply-chain attack using invisible code hits GitHub and other repositories",
      "url": "https://arstechnica.com/security/2026/03/supply-chain-attack-using-invisible-code-hits-github-and-other-repositories/",
      "score": 2,
      "comments": 1,
      "tags": [
        "security"
      ],
      "id": "fqwk8a"
    },
    {
      "title": "To be a better programmer, write little proofs in your head (2025)",
      "url": "https://blog.get-nerve.com/to-be-a-better-programmer-write-little-proofs-in-your-head/",
      "score": 6,
      "comments": 2,
      "tags": [
        "practices",
        "programming"
      ],
      "id": "hjr72q"
    },
    {
      "title": "PF queues break the 4 Gbps barrier",
      "url": "https://undeadly.org/cgi?action=article;sid=20260319125859",
      "score": 1,
      "comments": 0,
      "tags": [
        "networking",
        "openbsd"
      ],
      "id": "2i7o52"
    },
    {
      "title": "Running an Engineering Papers Reading Guild at Zalando",
      "url": "https://engineering.zalando.com/posts/2026/01/running-an-engineering-papers-reading-guild-at-zalando.html",
      "score": 2,
      "comments": 0,
      "tags": [
        "culture"
      ],
      "id": "atyh9r"
    },
    {
      "title": "What Languages is Arthur Whitney Style Code Possible in?",
      "url": "",
      "score": 4,
      "comments": 2,
      "tags": [
        "apl",
        "ask"
      ],
      "id": "s40j01"
    },
    {
      "title": "acdc - AsciiDoc tooling in Rust",
      "url": "https://acdc.nlopes.dev/",
      "score": 0,
      "comments": 3,
      "tags": [
        "rust",
        "vibecoding"
      ],
      "id": "mvcoda"
    },
    {
      "title": "Bug Report: macOS 26 breaks /etc/resolver/ supplemental DNS for custom TLDs",
      "url": "https://gist.github.com/adamamyl/81b78eced40feae50eae7c4f3bec1f5a",
      "score": 7,
      "comments": 0,
      "tags": [
        "mac",
        "networking"
      ],
      "id": "gm6wyt"
    },
    {
      "title": "Monuses and Heaps",
      "url": "https://doisinkidney.com/posts/2026-03-03-monus-heaps.html",
      "score": 6,
      "comments": 1,
      "tags": [
        "haskell"
      ],
      "id": "740euz"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "bookstore-romeo",
      "descendants": 17,
      "id": 47450478,
      "kids": [
        47451167,
        47450921,
        47450986,
        47451014,
        47450859,
        47450824,
        47450925,
        47450973
      ],
      "score": 101,
      "time": 1773980651,
      "title": "ArXiv Declares Independence from Cornell",
      "type": "story",
      "url": "https://www.science.org/content/article/arxiv-pioneering-preprint-server-declares-independence-cornell"
    },
    {
      "by": "jasonjmcghee",
      "descendants": 156,
      "id": 47448524,
      "kids": [
        47448763,
        47448676,
        47448740,
        47448680,
        47450922,
        47449000,
        47450517,
        47449738,
        47449332,
        47448625,
        47449388,
        47450667,
        47450548,
        47448726,
        47450410,
        47449015,
        47449274,
        47449064,
        47449655,
        47449089,
        47448714,
        47450613,
        47449652,
        47448724,
        47448732,
        47448985,
        47450379,
        47449010,
        47448943,
        47449565,
        47449302,
        47449004,
        47448720,
        47449408,
        47448692,
        47449071
      ],
      "score": 291,
      "time": 1773966128,
      "title": "Push events into a running session with channels",
      "type": "story",
      "url": "https://code.claude.com/docs/en/channels"
    },
    {
      "by": "0xedb",
      "descendants": 746,
      "id": 47442690,
      "kids": [
        47446446,
        47444880,
        47443929,
        47443835,
        47446418,
        47451164,
        47444793,
        47450849,
        47443820,
        47451091,
        47450704,
        47444257,
        47451035,
        47447686,
        47448749,
        47448409,
        47443971,
        47445191,
        47444475,
        47448446,
        47443915,
        47446743,
        47450071,
        47447392,
        47445607,
        47445745,
        47450566,
        47444401,
        47450499,
        47446914,
        47447796,
        47447922,
        47445948,
        47444842,
        47449528,
        47446019,
        47450650,
        47447581,
        47448197,
        47444697,
        47449608,
        47450003,
        47449717,
        47449186,
        47448879,
        47450230,
        47446383,
        47443116,
        47445812,
        47445595,
        47446193,
        47445205,
        47444472,
        47450174,
        47444772,
        47445027,
        47446771,
        47448990,
        47449448,
        47443980,
        47446552,
        47448192,
        47446036,
        47447832,
        47445037,
        47446296,
        47446724,
        47443181,
        47444996,
        47447160,
        47446617,
        47447732,
        47444423,
        47450060,
        47445289,
        47449238,
        47446052,
        47446401,
        47446123,
        47447566,
        47445804,
        47449795,
        47449556,
        47445623,
        47445124,
        47445545,
        47443925,
        47448171,
        47448113,
        47446007,
        47447920,
        47446891,
        47446528,
        47446169,
        47445132,
        47448428,
        47444536,
        47445906,
        47446150,
        47444011,
        47448513,
        47443899,
        47446579,
        47445708,
        47447372,
        47445887,
        47444205,
        47444956
      ],
      "score": 671,
      "text": "<a href=\"https:&#x2F;&#x2F;android-developers.googleblog.com&#x2F;2026&#x2F;03&#x2F;android-developer-verification.html\" rel=\"nofollow\">https:&#x2F;&#x2F;android-developers.googleblog.com&#x2F;2026&#x2F;03&#x2F;android-de...</a>",
      "time": 1773940564,
      "title": "Google details new 24-hour process to sideload unverified Android apps",
      "type": "story",
      "url": "https://arstechnica.com/gadgets/2026/03/google-details-new-24-hour-process-to-sideload-unverified-android-apps/"
    },
    {
      "by": "nyxgeek",
      "descendants": 18,
      "id": 47448994,
      "kids": [
        47450296,
        47449829,
        47450462,
        47449934,
        47450924,
        47450712,
        47450990,
        47450884,
        47451136,
        47450631,
        47450190,
        47451119
      ],
      "score": 95,
      "time": 1773968985,
      "title": "Full Disclosure: A Third (and Fourth) Azure Sign-In Log Bypass Found",
      "type": "story",
      "url": "https://trustedsec.com/blog/full-disclosure-a-third-and-fourth-azure-sign-in-log-bypass-found"
    },
    {
      "by": "robotnikman",
      "descendants": 46,
      "id": 47448566,
      "kids": [
        47450005,
        47451101,
        47451185,
        47450565,
        47449168,
        47449491,
        47451041,
        47450678,
        47449174,
        47450446,
        47450552,
        47450851,
        47449681,
        47449734,
        47449115,
        47450533,
        47449511,
        47449305,
        47449706,
        47449224,
        47449193,
        47449167,
        47449104,
        47449724,
        47450000,
        47449477,
        47449884,
        47449777,
        47449277
      ],
      "score": 114,
      "time": 1773966407,
      "title": "Drugwars for the TI-82/83/83 Calculators (2011)",
      "type": "story",
      "url": "https://gist.github.com/mattmanning/1002653/b7a1e88479a10eaae3bd5298b8b2c86e16fb4404"
    },
    {
      "by": "PaulHoule",
      "descendants": 42,
      "id": 47406160,
      "kids": [
        47444554,
        47445725,
        47451024,
        47445295,
        47448059,
        47444005,
        47445166,
        47448514,
        47445630,
        47444082,
        47443989,
        47444339,
        47447855,
        47450370,
        47448413,
        47447757,
        47444007,
        47447989,
        47447822,
        47449160,
        47448579
      ],
      "score": 305,
      "time": 1773701773,
      "title": "Return of the Obra Dinn: spherical mapped dithering for a 1bpp first-person game",
      "type": "story",
      "url": "https://forums.tigsource.com/index.php?topic=40832.msg1363742#msg1363742"
    },
    {
      "by": "greedo",
      "descendants": 94,
      "id": 47416972,
      "kids": [
        47447083,
        47451094,
        47449844,
        47446538,
        47447665,
        47447628,
        47450173,
        47450708,
        47447175,
        47450216,
        47446411,
        47447800,
        47450633,
        47448344,
        47446494,
        47446812,
        47449781,
        47447162,
        47449270,
        47447383,
        47447943
      ],
      "score": 180,
      "time": 1773775184,
      "title": "How the Turner twins are mythbusting modern technical apparel",
      "type": "story",
      "url": "https://www.carryology.com/insights/how-the-turner-twins-are-mythbusting-modern-gear/"
    },
    {
      "by": "rohan_joshi",
      "descendants": 146,
      "id": 47441546,
      "kids": [
        47448356,
        47442196,
        47448182,
        47449764,
        47445231,
        47447271,
        47450951,
        47447368,
        47442295,
        47445234,
        47445835,
        47450937,
        47449779,
        47443934,
        47450645,
        47448275,
        47447805,
        47442901,
        47449292,
        47449822,
        47444097,
        47446647,
        47442179,
        47442384,
        47443898,
        47443199,
        47443172,
        47443006,
        47442080,
        47442362,
        47443609,
        47443815,
        47442112,
        47443921,
        47449268,
        47444301,
        47444201,
        47442899,
        47442127,
        47445907,
        47445666,
        47447994,
        47449326,
        47449021,
        47446988,
        47445013,
        47444236,
        47445560,
        47448873,
        47443529,
        47447049
      ],
      "score": 382,
      "text": "Kitten TTS (<a href=\"https:&#x2F;&#x2F;github.com&#x2F;KittenML&#x2F;KittenTTS\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;KittenML&#x2F;KittenTTS</a>) is an open-source series of tiny and expressive text-to-speech models for on-device applications. We had a thread last year here: <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=44807868\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=44807868</a>.<p>Today we&#x27;re releasing three new models with 80M, 40M and 14M parameters.<p>The largest model (80M) has the highest quality. The 14M variant reaches new SOTA in expressivity among similar sized models, despite being &lt;25MB in size. This release is a major upgrade from the previous one and supports English text-to-speech applications in eight voices: four male and four female.<p>Here&#x27;s a short demo: <a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=ge3u5qblqZA\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=ge3u5qblqZA</a>.<p>Most models are quantized to int8 + fp16, and they use ONNX for runtime. Our models are designed to run anywhere eg. raspberry pi, low-end smartphones, wearables, browsers etc. No GPU required! This release aims to bridge the gap between on-device and cloud models for tts applications. Multi-lingual model release is coming soon.<p>On-device AI is bottlenecked by one thing: a lack of tiny models that actually perform. Our goal is to open-source more models to run production-ready voice agents and apps entirely on-device.<p>We would love your feedback!",
      "time": 1773935766,
      "title": "Show HN: Three new Kitten TTS models – smallest less than 25MB",
      "type": "story",
      "url": "https://github.com/KittenML/KittenTTS"
    },
    {
      "by": "modinfo",
      "descendants": 130,
      "id": 47445599,
      "kids": [
        47450030,
        47447626,
        47447480,
        47446964,
        47447230,
        47446216,
        47445972,
        47445990,
        47449658,
        47447782,
        47447651,
        47449988,
        47446035,
        47446133,
        47449110,
        47446277,
        47447114,
        47447398,
        47450964,
        47448725,
        47449929,
        47447136,
        47446030,
        47449906,
        47446039,
        47447745,
        47447041,
        47448690,
        47447728,
        47450031,
        47447630,
        47447858,
        47447101,
        47448545,
        47450680,
        47447099,
        47447646,
        47446413,
        47448407,
        47446960,
        47446864,
        47448078,
        47449287,
        47448107
      ],
      "score": 222,
      "time": 1773952382,
      "title": "Cockpit is a web-based graphical interface for servers",
      "type": "story",
      "url": "https://github.com/cockpit-project/cockpit"
    },
    {
      "by": "mosura",
      "descendants": 552,
      "id": 47440430,
      "kids": [
        47444931,
        47444422,
        47443130,
        47443289,
        47443837,
        47443033,
        47443003,
        47444397,
        47443516,
        47443330,
        47443338,
        47447809,
        47444797,
        47450791,
        47443293,
        47448388,
        47444563,
        47445473,
        47447497,
        47444090,
        47450494,
        47443789,
        47443606,
        47448631,
        47443521,
        47448583,
        47443057,
        47446935,
        47445344,
        47446563,
        47443836,
        47448754,
        47447662,
        47446598,
        47450744,
        47446727,
        47445512,
        47447340,
        47443097,
        47443983,
        47450840,
        47441202,
        47447132,
        47446094,
        47449369,
        47445386,
        47444943,
        47444566,
        47443759,
        47450207,
        47443120,
        47446769,
        47443552,
        47445799,
        47443237,
        47443738,
        47444585,
        47448895,
        47446258,
        47448768,
        47443812,
        47443361,
        47443822,
        47442954,
        47444553
      ],
      "score": 330,
      "text": "<a href=\"https:&#x2F;&#x2F;www.ofcom.org.uk&#x2F;online-safety&#x2F;illegal-and-harmful-content&#x2F;4chan-fined-450000-for-not-protecting-children-from-online-pornography\" rel=\"nofollow\">https:&#x2F;&#x2F;www.ofcom.org.uk&#x2F;online-safety&#x2F;illegal-and-harmful-c...</a>",
      "time": 1773931585,
      "title": "4Chan mocks £520k fine for UK online safety breaches",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/c624330lg1ko"
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
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "devto",
  "tag": "career",
  "sort": "top",
  "items": [
    {
      "title": "The Email That Nearly Stopped Me From Becoming a Developer",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience  I stood on stage in front...",
      "url": "https://dev.to/sylwia-lask/the-email-that-nearly-stopped-me-from-becoming-a-developer-3n77",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 104,
      "comments": 42,
      "reading_time": 5,
      "author": "sylwia-lask"
    },
    {
      "title": "Golden Handcuffs Don't Feel Like Handcuffs",
      "description": "I was sitting in my home office on a Tuesday afternoon with a blank editor open and nothing in my...",
      "url": "https://dev.to/jonoherrington/golden-handcuffs-dont-feel-like-handcuffs-2cdi",
      "tags": "engineering, leadership, career, burnout",
      "reactions": 39,
      "comments": 14,
      "reading_time": 6,
      "author": "jonoherrington"
    },
    {
      "title": "The Seniority Gap: Why Companies Hire Solutions, Not Just Syntax",
      "description": "Technical skills are the baseline. But what actually gets you hired at high-level positions? Let's...",
      "url": "https://dev.to/renato_silva_71eef0fc385f/the-seniority-gap-why-companies-hire-solutions-not-just-syntax-1l1e",
      "tags": "career, softwaredevelopment, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "renato_silva_71eef0fc385f"
    },
    {
      "title": "AI Is Creating a New Kind of Tech Debt — And Nobody Is Talking About It",
      "description": "Six months ago, my team was celebrating.  We had shipped more features in Q3 than in the entire...",
      "url": "https://dev.to/harsh2644/ai-is-creating-a-new-kind-of-tech-debt-and-nobody-is-talking-about-it-3pm6",
      "tags": "ai, webdev, javascript, career",
      "reactions": 80,
      "comments": 52,
      "reading_time": 9,
      "author": "harsh2644"
    },
    {
      "title": "Your Employer Takes 30% of Your Paycheck: Here's Exactly Where It Goes",
      "description": "I remember the first time I compared my salary offer letter to my actual direct deposit. The offer...",
      "url": "https://dev.to/michael_lip_52d5151c3e364/your-employer-takes-30-of-your-paycheck-heres-exactly-where-it-goes-3b92",
      "tags": "finance, career, beginners, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "michael_lip_52d5151c3e364"
    },
    {
      "title": "I've Reviewed 500 Resumes: The Top 3 Are All One Page",
      "description": "Over the past four years I have sat on the hiring side of the table for three different tech...",
      "url": "https://dev.to/michael_lip_52d5151c3e364/ive-reviewed-500-resumes-the-top-3-are-all-one-page-50lp",
      "tags": "career, beginners, productivity, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "michael_lip_52d5151c3e364"
    },
    {
      "title": "Building the Architecture in KMP: Data Flow, MVI, and Hard Decisions",
      "description": "Part 2 — Architecture, MVI, and the Offline-First Decision      In Part 1 I wrote about the...",
      "url": "https://dev.to/rarroyo00/building-the-architecture-in-kmp-data-flow-mvi-and-hard-decisions-4bbm",
      "tags": "programming, productivity, career, kotlin",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "rarroyo00"
    },
    {
      "title": "7 Behavioral Patterns That Reveal the Source Code",
      "description": "Debugging Professionalism: 7 Behavioral Patterns That Reveal the Source Code   In software...",
      "url": "https://dev.to/zertyi89/7-behavioral-patterns-that-reveal-the-source-code-195a",
      "tags": "career, softskills, productivity, management",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "zertyi89"
    },
    {
      "title": "EPF (KWSP) Explained for Malaysian Tech Workers: The 3-Account Structure, Withdrawals, and What Most People Get Wrong",
      "description": "If you're a developer or tech worker in Malaysia, you're probably contributing to EPF every month...",
      "url": "https://dev.to/profiterole/epf-kwsp-explained-for-malaysian-tech-workers-the-3-account-structure-withdrawals-and-what-5c1m",
      "tags": "malaysia, career, finance, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "profiterole"
    },
    {
      "title": "Applying for a Personal Loan in Malaysia (2026): Rates, Eligibility & Step-by-Step Guide",
      "description": "Applying for a Personal Loan in Malaysia (2026): Rates, Eligibility &amp; Step-by-Step...",
      "url": "https://dev.to/profiterole/applying-for-a-personal-loan-in-malaysia-2026-rates-eligibility-step-by-step-guide-2b5p",
      "tags": "malaysia, personalfinance, money, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "profiterole"
    }
  ]
}
```

