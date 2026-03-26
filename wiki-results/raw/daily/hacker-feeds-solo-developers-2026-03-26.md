# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-26 06:41:31 UTC

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
      "author": "Crosstalk-Solutions",
      "repo": "project-nomad",
      "avatar": "https://github.com/Crosstalk-Solutions.png",
      "repo_link": "https://github.com/Crosstalk-Solutions/project-nomad",
      "desc": "Project N.O.M.A.D, is a self-contained, offline survival computer packed with critical tools, knowledge, and AI to keep you informed and empowered—anytime, anywhere.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1602,
      "added_stars": 13848,
      "builtBy": [
        {
          "username": "jakeaturner",
          "href": "https://github.com/jakeaturner",
          "avatar": "https://avatars.githubusercontent.com/u/52841588"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "chriscrosstalk",
          "href": "https://github.com/chriscrosstalk",
          "avatar": "https://avatars.githubusercontent.com/u/49691103"
        },
        {
          "username": "cosmistack-bot",
          "href": "https://github.com/cosmistack-bot",
          "avatar": "https://avatars.githubusercontent.com/u/175166532"
        }
      ]
    },
    {
      "author": "supermemoryai",
      "repo": "supermemory",
      "avatar": "https://github.com/supermemoryai.png",
      "repo_link": "https://github.com/supermemoryai/supermemory",
      "desc": "Memory engine and app that is extremely fast, scalable. The Memory API for the AI era.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1816,
      "added_stars": 2064,
      "builtBy": [
        {
          "username": "Dhravya",
          "href": "https://github.com/Dhravya",
          "avatar": "https://avatars.githubusercontent.com/u/63950637"
        },
        {
          "username": "MaheshtheDev",
          "href": "https://github.com/MaheshtheDev",
          "avatar": "https://avatars.githubusercontent.com/u/38828053"
        },
        {
          "username": "yxshv",
          "href": "https://github.com/yxshv",
          "avatar": "https://avatars.githubusercontent.com/u/93475253"
        },
        {
          "username": "CodeTorso",
          "href": "https://github.com/CodeTorso",
          "avatar": "https://avatars.githubusercontent.com/u/129188028"
        },
        {
          "username": "Kinfe123",
          "href": "https://github.com/Kinfe123",
          "avatar": "https://avatars.githubusercontent.com/u/65047246"
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
      "forks": 6121,
      "added_stars": 6849,
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
      "author": "DayuanJiang",
      "repo": "next-ai-draw-io",
      "avatar": "https://github.com/DayuanJiang.png",
      "repo_link": "https://github.com/DayuanJiang/next-ai-draw-io",
      "desc": "A next.js web application that integrates AI capabilities with draw.io diagrams. This app allows you to create, modify, and enhance diagrams through natural language commands and AI-assisted visualization.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2605,
      "added_stars": 1647,
      "builtBy": [
        {
          "username": "DayuanJiang",
          "href": "https://github.com/DayuanJiang",
          "avatar": "https://avatars.githubusercontent.com/u/34411969"
        },
        {
          "username": "Biki-dev",
          "href": "https://github.com/Biki-dev",
          "avatar": "https://avatars.githubusercontent.com/u/86558912"
        },
        {
          "username": "ElshadHu",
          "href": "https://github.com/ElshadHu",
          "avatar": "https://avatars.githubusercontent.com/u/216122679"
        }
      ]
    },
    {
      "author": "alibaba",
      "repo": "page-agent",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/page-agent",
      "desc": "JavaScript in-page GUI agent. Control web interfaces with natural language.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1074,
      "added_stars": 2768,
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
      "author": "letta-ai",
      "repo": "claude-subconscious",
      "avatar": "https://github.com/letta-ai.png",
      "repo_link": "https://github.com/letta-ai/claude-subconscious",
      "desc": "Give Claude Code a subconscious",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 116,
      "added_stars": 366,
      "builtBy": [
        {
          "username": "cpfiffer",
          "href": "https://github.com/cpfiffer",
          "avatar": "https://avatars.githubusercontent.com/u/422990"
        },
        {
          "username": "letta-code",
          "href": "https://github.com/letta-code",
          "avatar": "https://avatars.githubusercontent.com/u/248085862"
        },
        {
          "username": "scrossle",
          "href": "https://github.com/scrossle",
          "avatar": "https://avatars.githubusercontent.com/u/50788941"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cpacker",
          "href": "https://github.com/cpacker",
          "avatar": "https://avatars.githubusercontent.com/u/5475622"
        }
      ]
    },
    {
      "author": "Open-Dev-Society",
      "repo": "OpenStock",
      "avatar": "https://github.com/Open-Dev-Society.png",
      "repo_link": "https://github.com/Open-Dev-Society/OpenStock",
      "desc": "OpenStock is an open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights — built openly, for everyone, forever free.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1335,
      "added_stars": 618,
      "builtBy": [
        {
          "username": "ravixalgorithm",
          "href": "https://github.com/ravixalgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/148683640"
        },
        {
          "username": "koevoet1221",
          "href": "https://github.com/koevoet1221",
          "avatar": "https://avatars.githubusercontent.com/u/76625701"
        },
        {
          "username": "chinnsenn",
          "href": "https://github.com/chinnsenn",
          "avatar": "https://avatars.githubusercontent.com/u/13096352"
        }
      ]
    },
    {
      "author": "google-labs-code",
      "repo": "stitch-skills",
      "avatar": "https://github.com/google-labs-code.png",
      "repo_link": "https://github.com/google-labs-code/stitch-skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 360,
      "added_stars": 722,
      "builtBy": [
        {
          "username": "davideast",
          "href": "https://github.com/davideast",
          "avatar": "https://avatars.githubusercontent.com/u/4570265"
        },
        {
          "username": "JLXIA",
          "href": "https://github.com/JLXIA",
          "avatar": "https://avatars.githubusercontent.com/u/43076783"
        },
        {
          "username": "dalmaer",
          "href": "https://github.com/dalmaer",
          "avatar": "https://avatars.githubusercontent.com/u/4770"
        },
        {
          "username": "vinothsubramanian",
          "href": "https://github.com/vinothsubramanian",
          "avatar": "https://avatars.githubusercontent.com/u/7145760"
        },
        {
          "username": "jedborovik",
          "href": "https://github.com/jedborovik",
          "avatar": "https://avatars.githubusercontent.com/u/1231882"
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
      "forks": 1865,
      "added_stars": 1495,
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
      "author": "DaKheera47",
      "repo": "job-ops",
      "avatar": "https://github.com/DaKheera47.png",
      "repo_link": "https://github.com/DaKheera47/job-ops",
      "desc": "job-ops: DevOps principles applied to job hunting. A self-hosted pipeline to track, analyze, and assist your application process",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 236,
      "added_stars": 433,
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
        },
        {
          "username": "0x1355",
          "href": "https://github.com/0x1355",
          "avatar": "https://avatars.githubusercontent.com/u/4979897"
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
      "forks": 1315,
      "added_stars": 6414,
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
      "forks": 1820,
      "added_stars": 3042,
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
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "CyberStrikeAI is an AI-native security testing platform built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 509,
      "added_stars": 2254,
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
          "username": "huajinping",
          "href": "https://github.com/huajinping",
          "avatar": "https://avatars.githubusercontent.com/u/38647963"
        },
        {
          "username": "04cb",
          "href": "https://github.com/04cb",
          "avatar": "https://avatars.githubusercontent.com/u/111667698"
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
      "forks": 183,
      "added_stars": 660,
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
      "author": "m1k1o",
      "repo": "neko",
      "avatar": "https://github.com/m1k1o.png",
      "repo_link": "https://github.com/m1k1o/neko",
      "desc": "A self hosted virtual browser that runs in docker and uses WebRTC.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1423,
      "added_stars": 3054,
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
      "forks": 8159,
      "added_stars": 895,
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
      "author": "smtg-ai",
      "repo": "claude-squad",
      "avatar": "https://github.com/smtg-ai.png",
      "repo_link": "https://github.com/smtg-ai/claude-squad",
      "desc": "Manage multiple AI terminal agents like Claude Code, Codex, OpenCode, and Amp.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 462,
      "added_stars": 509,
      "builtBy": [
        {
          "username": "mufeez-amjad",
          "href": "https://github.com/mufeez-amjad",
          "avatar": "https://avatars.githubusercontent.com/u/19630228"
        },
        {
          "username": "jayshrivastava",
          "href": "https://github.com/jayshrivastava",
          "avatar": "https://avatars.githubusercontent.com/u/18633281"
        },
        {
          "username": "jennings",
          "href": "https://github.com/jennings",
          "avatar": "https://avatars.githubusercontent.com/u/24511"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "bzbetty",
          "href": "https://github.com/bzbetty",
          "avatar": "https://avatars.githubusercontent.com/u/533131"
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
      "forks": 327,
      "added_stars": 584,
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
      "author": "dlvhdr",
      "repo": "gh-dash",
      "avatar": "https://github.com/dlvhdr.png",
      "repo_link": "https://github.com/dlvhdr/gh-dash",
      "desc": "A rich terminal UI for GitHub that doesn't break your flow.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 362,
      "added_stars": 917,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 709,
      "added_stars": 1687,
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
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 Take full control of your VPS with 1Panel. Deploy OpenClaw in one click.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3064,
      "added_stars": 998,
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
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2636,
      "added_stars": 2326,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 319,
      "added_stars": 649,
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
      "author": "mostlygeek",
      "repo": "llama-swap",
      "avatar": "https://github.com/mostlygeek.png",
      "repo_link": "https://github.com/mostlygeek/llama-swap",
      "desc": "Reliable model swapping for any local OpenAI/Anthropic compatible server - llama.cpp, vllm, etc",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 211,
      "added_stars": 462,
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
      "forks": 1138,
      "added_stars": 1400,
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
      "author": "GopeedLab",
      "repo": "gopeed",
      "avatar": "https://github.com/GopeedLab.png",
      "repo_link": "https://github.com/GopeedLab/gopeed",
      "desc": "A fast, modern download manager for HTTP, BitTorrent, Magnet, and ED2K. Cross-platform, built with Golang and Flutter.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1596,
      "added_stars": 775,
      "builtBy": [
        {
          "username": "monkeyWie",
          "href": "https://github.com/monkeyWie",
          "avatar": "https://avatars.githubusercontent.com/u/13160176"
        },
        {
          "username": "pugaizai",
          "href": "https://github.com/pugaizai",
          "avatar": "https://avatars.githubusercontent.com/u/85693457"
        },
        {
          "username": "hugetiny",
          "href": "https://github.com/hugetiny",
          "avatar": "https://avatars.githubusercontent.com/u/19659202"
        },
        {
          "username": "ElliotCHEN37",
          "href": "https://github.com/ElliotCHEN37",
          "avatar": "https://avatars.githubusercontent.com/u/109361374"
        }
      ]
    },
    {
      "author": "projectdiscovery",
      "repo": "katana",
      "avatar": "https://github.com/projectdiscovery.png",
      "repo_link": "https://github.com/projectdiscovery/katana",
      "desc": "A next-generation crawling and spidering framework.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1062,
      "added_stars": 735,
      "builtBy": [
        {
          "username": "Mzack9999",
          "href": "https://github.com/Mzack9999",
          "avatar": "https://avatars.githubusercontent.com/u/13421144"
        },
        {
          "username": "dogancanbakir",
          "href": "https://github.com/dogancanbakir",
          "avatar": "https://avatars.githubusercontent.com/u/65292895"
        },
        {
          "username": "ehsandeep",
          "href": "https://github.com/ehsandeep",
          "avatar": "https://avatars.githubusercontent.com/u/8293321"
        },
        {
          "username": "RamanaReddy0M",
          "href": "https://github.com/RamanaReddy0M",
          "avatar": "https://avatars.githubusercontent.com/u/90540245"
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
      "forks": 5927,
      "added_stars": 38193,
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
      "desc": "An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5582,
      "added_stars": 25279,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2640,
      "added_stars": 17662,
      "builtBy": [
        {
          "username": "D4Vinci",
          "href": "https://github.com/D4Vinci",
          "avatar": "https://avatars.githubusercontent.com/u/20604835"
        },
        {
          "username": "mhillebrand",
          "href": "https://github.com/mhillebrand",
          "avatar": "https://avatars.githubusercontent.com/u/286198"
        },
        {
          "username": "rostchri",
          "href": "https://github.com/rostchri",
          "avatar": "https://avatars.githubusercontent.com/u/2398834"
        },
        {
          "username": "marksmayo",
          "href": "https://github.com/marksmayo",
          "avatar": "https://avatars.githubusercontent.com/u/14829262"
        },
        {
          "username": "ImgBotApp",
          "href": "https://github.com/ImgBotApp",
          "avatar": "https://avatars.githubusercontent.com/u/31427850"
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
      "forks": 1319,
      "added_stars": 15198,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "+192 Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 836,
      "added_stars": 4906,
      "builtBy": [
        {
          "username": "alirezarezvani",
          "href": "https://github.com/alirezarezvani",
          "avatar": "https://avatars.githubusercontent.com/u/5697919"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "olgasafonova",
          "href": "https://github.com/olgasafonova",
          "avatar": "https://avatars.githubusercontent.com/u/23409189"
        },
        {
          "username": "fernandezbaptiste",
          "href": "https://github.com/fernandezbaptiste",
          "avatar": "https://avatars.githubusercontent.com/u/83458751"
        },
        {
          "username": "ikala-shawn",
          "href": "https://github.com/ikala-shawn",
          "avatar": "https://avatars.githubusercontent.com/u/111341595"
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
      "forks": 989,
      "added_stars": 3160,
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
      "author": "fishaudio",
      "repo": "fish-speech",
      "avatar": "https://github.com/fishaudio.png",
      "repo_link": "https://github.com/fishaudio/fish-speech",
      "desc": "SOTA Open Source TTS",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2416,
      "added_stars": 3854,
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
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3177,
      "added_stars": 8138,
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
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7690,
      "added_stars": 11157,
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
          "username": "luohy15",
          "href": "https://github.com/luohy15",
          "avatar": "https://avatars.githubusercontent.com/u/15189961"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ZeroAct",
          "href": "https://github.com/ZeroAct",
          "avatar": "https://avatars.githubusercontent.com/u/46982469"
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
      "forks": 942,
      "added_stars": 5293,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1550,
      "added_stars": 6329,
      "builtBy": [
        {
          "username": "tobinsouth",
          "href": "https://github.com/tobinsouth",
          "avatar": "https://avatars.githubusercontent.com/u/32489862"
        },
        {
          "username": "k6l3",
          "href": "https://github.com/k6l3",
          "avatar": "https://avatars.githubusercontent.com/u/111803974"
        },
        {
          "username": "noahzweben",
          "href": "https://github.com/noahzweben",
          "avatar": "https://avatars.githubusercontent.com/u/12701358"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "dhollman",
          "href": "https://github.com/dhollman",
          "avatar": "https://avatars.githubusercontent.com/u/100382"
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
      "forks": 1855,
      "added_stars": 9591,
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
      "author": "openclaw",
      "repo": "skills",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/skills",
      "desc": "All versions of all skills that are on clawhub.com archived",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 977,
      "added_stars": 1970,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "thewilloftheshadow",
          "href": "https://github.com/thewilloftheshadow",
          "avatar": "https://avatars.githubusercontent.com/u/35580099"
        }
      ]
    },
    {
      "author": "langchain-ai",
      "repo": "deepagents",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/deepagents",
      "desc": "Agent harness built with LangChain and LangGraph. Equipped with a planning tool, a filesystem backend, and the ability to spawn subagents - well-equipped to handle complex agentic tasks.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2457,
      "added_stars": 7922,
      "builtBy": [
        {
          "username": "mdrxy",
          "href": "https://github.com/mdrxy",
          "avatar": "https://avatars.githubusercontent.com/u/61371264"
        },
        {
          "username": "eyurtsev",
          "href": "https://github.com/eyurtsev",
          "avatar": "https://avatars.githubusercontent.com/u/3205522"
        },
        {
          "username": "vtrivedy",
          "href": "https://github.com/vtrivedy",
          "avatar": "https://avatars.githubusercontent.com/u/28938224"
        },
        {
          "username": "hwchase17",
          "href": "https://github.com/hwchase17",
          "avatar": "https://avatars.githubusercontent.com/u/11986836"
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
      "forks": 26450,
      "added_stars": 12353,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用AI大模型，一键生成高清短视频 Generate short videos with one click using AI LLM.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7522,
      "added_stars": 3703,
      "builtBy": [
        {
          "username": "harry0703",
          "href": "https://github.com/harry0703",
          "avatar": "https://avatars.githubusercontent.com/u/4928832"
        },
        {
          "username": "yyhhyyyyyy",
          "href": "https://github.com/yyhhyyyyyy",
          "avatar": "https://avatars.githubusercontent.com/u/95077259"
        },
        {
          "username": "vuisme",
          "href": "https://github.com/vuisme",
          "avatar": "https://avatars.githubusercontent.com/u/96235876"
        },
        {
          "username": "KevinZhang19870314",
          "href": "https://github.com/KevinZhang19870314",
          "avatar": "https://avatars.githubusercontent.com/u/13794286"
        },
        {
          "username": "garylab",
          "href": "https://github.com/garylab",
          "avatar": "https://avatars.githubusercontent.com/u/3072379"
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
      "forks": 45111,
      "added_stars": 16764,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Unsloth Studio is a web UI for training and running open models like Qwen, DeepSeek, gpt-oss and Gemma locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4915,
      "added_stars": 5603,
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
      "forks": 7420,
      "added_stars": 4280,
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
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 504,
      "added_stars": 3590,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1725,
      "added_stars": 7597,
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
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8616,
      "added_stars": 3810,
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
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "Give your agents the power of the Hugging Face ecosystem",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 604,
      "added_stars": 3774,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "[AI] webpage-mcp: Turn your existing webpages into an MCP server for agent control",
      "url": "https://github.com/mcpland/webpage-mcp",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-24T17:43:13.000Z"
    },
    {
      "title": "Bun is Fast. Your Event Loop is Not.",
      "url": "https://howtocenterdiv.com/beyond-the-div/bun-is-fast-your-event-loop-is-not",
      "upvotes": "1",
      "comments": "3",
      "created": "2026-03-22T00:41:52.000Z"
    },
    {
      "title": "[AI] Kuberna Labs – Open-source SDK for autonomous cross-chain AI agents",
      "url": "https://github.com/kawacukennedy/kuberna-labs",
      "upvotes": "1",
      "comments": "2",
      "created": "2026-03-21T10:03:00.000Z"
    },
    {
      "title": "Web UI to play the frequencies of various sets of tuning forks using the Web Audio API",
      "url": "https://github.com/evoluteur/healing-frequencies",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-21T00:51:13.000Z"
    },
    {
      "title": "I Scanned 6 Popular Node.js Repos for Undocumented Environment Variables. Here's What I Found.",
      "url": "https://dev.to/ckmtools/i-scanned-6-popular-nodejs-repos-for-undocumented-environment-variables-heres-what-i-found-5478",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-20T08:16:25.000Z"
    },
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
      "comments": "2",
      "created": "2026-03-17T12:45:35.000Z"
    },
    {
      "title": "Why I Stopped Maintaining .env.example by Hand",
      "url": "https://dev.to/ckmtools/why-i-stopped-maintaining-envexample-by-hand-473j",
      "upvotes": "2",
      "comments": "1",
      "created": "2026-03-17T07:00:59.000Z"
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
      "title": "your agent can think. it can't remember.",
      "description": "TLDR: ghost gives your agent instant, ephemeral postgres databases. unlimited databases, unlimited...",
      "url": "https://dev.to/ghostbuild/your-agent-can-think-it-cant-remember-5e1o",
      "tags": "ai, mcp, postgres, agents",
      "reactions": 122,
      "comments": 24,
      "reading_time": 7,
      "author": "ghostdotbuild"
    },
    {
      "title": "Check Up with Each Other",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience     Over the last year, It...",
      "url": "https://dev.to/francistrdev/check-up-with-each-other-2ogc",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 48,
      "comments": 17,
      "reading_time": 4,
      "author": "francistrdev"
    },
    {
      "title": "AI Didn't Break Your Culture. It Exposed It.",
      "description": "An engineer pushes back on a decision. The response: \"ChatGPT recommended something else.\" The tell...",
      "url": "https://dev.to/jonoherrington/ai-didnt-break-your-culture-it-exposed-it-2729",
      "tags": "ai, webdev, leadership, programming",
      "reactions": 19,
      "comments": 9,
      "reading_time": 6,
      "author": "jonoherrington"
    },
    {
      "title": "Beyond n8n for Workflow Automation: Agent Graphs as Your Universal Agent Harness",
      "description": "Original article published on March 20, 2025  Hardcoded multi-agent orchestration is brittle:...",
      "url": "https://dev.to/launchdarkly/beyond-n8n-for-workflow-automation-agent-graphs-as-your-universal-agent-harness-4lic",
      "tags": "agents, ai, aiops, architecture",
      "reactions": 6,
      "comments": 0,
      "reading_time": 14,
      "author": "sattensil888"
    },
    {
      "title": "The software industry is ready to grow",
      "description": "I don't spend a lot of time on the X these days, but I think this perspective is worth...",
      "url": "https://dev.to/ben/the-software-industry-is-ready-to-grow-4ie4",
      "tags": "ai, career, agents",
      "reactions": 14,
      "comments": 4,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Tend (and about Vibe Coding)",
      "description": "It’s been a while since I’ve coded for myself. I did push an update on Ssstyles and JSSynth every now...",
      "url": "https://dev.to/iamschulz/tend-and-about-vibe-coding-2501",
      "tags": "frontend, vue, docker, vibecoding",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "iamschulz"
    },
    {
      "title": "Generating an aerial view of your project with OpenRewrite",
      "description": "Read it in french here   In the previous article, we discussed (well, I wrote, you read) Scanning...",
      "url": "https://dev.to/onepoint/generating-an-aerial-view-of-your-project-with-openrewrite-49kk",
      "tags": "java, jreleaser, openrewrite, graph",
      "reactions": 3,
      "comments": 0,
      "reading_time": 5,
      "author": "jtama"
    },
    {
      "title": "AI Crash Course: Hallucinations",
      "description": "While we can’t eliminate hallucinations entirely, there are still things we can do to reduce the chances of hallucinations showing up in our model’s responses.",
      "url": "https://dev.to/kathryngrayson/ai-crash-course-hallucinations-1jeg",
      "tags": "ai, beginners",
      "reactions": 9,
      "comments": 1,
      "reading_time": 6,
      "author": "kathryngrayson"
    },
    {
      "title": "PageSpeed 35 to 90: What I Got Wrong, Then Right",
      "description": "How I Took My PageSpeed Score from 35 to 90 (And What I Got Wrong First)   Have you ever...",
      "url": "https://dev.to/genuineswe/pagespeed-35-to-90-what-i-got-wrong-then-right-1o2m",
      "tags": "performance, frontend, webdev, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "genuineswe"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-4ig2",
      "tags": "top7, discuss",
      "reactions": 43,
      "comments": 6,
      "reading_time": 2,
      "author": "jess"
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
      "title": "Large-scale online deanonymization with LLMs",
      "url": "https://arxiv.org/abs/2602.16800",
      "score": 2,
      "comments": 0,
      "tags": [
        "privacy"
      ],
      "id": "wxl81t"
    },
    {
      "title": "Lines of code are useful",
      "url": "https://entropicthoughts.com/lines-of-code",
      "score": 1,
      "comments": 0,
      "tags": [
        "practices",
        "science"
      ],
      "id": "cibkd8"
    },
    {
      "title": "Vim Racing",
      "url": "https://www.vimgym.app/",
      "score": 4,
      "comments": 0,
      "tags": [
        "vim"
      ],
      "id": "quxmzz"
    },
    {
      "title": "Rendering complex scripts in terminal and OSC 66",
      "url": "https://thottingal.in/blog/2026/03/22/complex-scripts-in-terminal/",
      "score": 1,
      "comments": 0,
      "tags": [
        "historical",
        "unix"
      ],
      "id": "ot4tbk"
    },
    {
      "title": "Zero-copy protobuf and ConnectRPC for Rust",
      "url": "https://medium.com/@iainmcgin/zero-copy-protobuf-and-connectrpc-for-rust-69bda8ac0f02",
      "score": 1,
      "comments": 0,
      "tags": [
        "api",
        "networking",
        "performance",
        "rust"
      ],
      "id": "w15igx"
    },
    {
      "title": "Why pylock.toml includes digital attestations",
      "url": "https://snarky.ca/why-pylock-toml-includes-digital-attestations/",
      "score": 1,
      "comments": 0,
      "tags": [
        "python"
      ],
      "id": "sayudv"
    },
    {
      "title": "My DIY FPGA board can run Quake II (part 4)",
      "url": "https://blog.mikhe.ch/quake2-on-fpga/part4.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "hardware"
      ],
      "id": "telahn"
    },
    {
      "title": "A Verilog to Factorio compiler and simulator (working RISC-V CPU)",
      "url": "https://www.reddit.com/r/rust/comments/1s03w2o/my_first_rust_project_a_verilog_to_factorio/",
      "score": 4,
      "comments": 0,
      "tags": [
        "games",
        "rust"
      ],
      "id": "cug5gu"
    },
    {
      "title": "The reports of age verification in Linux are greatly exaggerated, for now",
      "url": "https://www.osnews.com/story/144653/the-reports-of-age-verification-in-linux-are-greatly-exaggerated-for-now/",
      "score": 2,
      "comments": 0,
      "tags": [
        "law",
        "linux"
      ],
      "id": "xft2mo"
    },
    {
      "title": "Electric Motorcycles are a Security Nightmare",
      "url": "https://persephonekarnstein.github.io/post/zero-days/",
      "score": 10,
      "comments": 2,
      "tags": [
        "reversing",
        "security"
      ],
      "id": "vyixek"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "driesdep",
      "descendants": 150,
      "id": 47523330,
      "kids": [
        47525493,
        47524415,
        47524069,
        47524558,
        47523953,
        47527232,
        47525841,
        47525034,
        47524669,
        47526196,
        47524753,
        47524722,
        47526623,
        47524927,
        47524711,
        47524833,
        47524601,
        47524015,
        47524111,
        47524401,
        47525403,
        47524440,
        47525173,
        47525384,
        47524608,
        47524133,
        47525653,
        47523887,
        47525690,
        47524032,
        47527282,
        47525757,
        47525217,
        47525320
      ],
      "score": 526,
      "time": 1774473117,
      "title": "Running Tesla Model 3's computer on my desk using parts from crashed cars",
      "type": "story",
      "url": "https://bugs.xdavidhu.me/tesla/2026/03/23/running-tesla-model-3s-computer-on-my-desk-using-parts-from-crashed-cars/"
    },
    {
      "by": "lairv",
      "descendants": 217,
      "id": 47521150,
      "kids": [
        47522597,
        47522623,
        47524668,
        47525778,
        47522415,
        47523062,
        47526684,
        47526791,
        47524291,
        47523463,
        47523704,
        47522389,
        47526309,
        47523017,
        47522706,
        47522580,
        47524950,
        47522765,
        47526561,
        47522855,
        47522680,
        47524970,
        47525595,
        47523065,
        47524805,
        47524005,
        47524766,
        47522480,
        47522556,
        47522518,
        47525654,
        47523611,
        47523960,
        47522563,
        47523505,
        47522429,
        47521307,
        47522423,
        47523782,
        47526198,
        47522305
      ],
      "score": 348,
      "text": "<a href=\"https:&#x2F;&#x2F;arcprize.org&#x2F;media&#x2F;ARC_AGI_3_Technical_Report.pdf\">https:&#x2F;&#x2F;arcprize.org&#x2F;media&#x2F;ARC_AGI_3_Technical_Report.pdf</a>",
      "time": 1774462563,
      "title": "ARC-AGI-3",
      "type": "story",
      "url": "https://arcprize.org/arc-agi/3"
    },
    {
      "by": "wallflower",
      "descendants": 193,
      "id": 47477873,
      "kids": [
        47520340,
        47517383,
        47517161,
        47517180,
        47517279,
        47526985,
        47523251,
        47517133,
        47519017,
        47520499,
        47520283,
        47521219,
        47519711,
        47526846,
        47517284,
        47517907,
        47519035,
        47518740,
        47521469,
        47498304,
        47518075,
        47519572,
        47517811,
        47519545,
        47521535,
        47517309,
        47519110,
        47517459,
        47516960,
        47489777,
        47517282
      ],
      "score": 810,
      "time": 1774189686,
      "title": "My astrophotography in the movie Project Hail Mary",
      "type": "story",
      "url": "https://rpastro.square.site/s/stories/phm"
    },
    {
      "by": "Brajeshwar",
      "descendants": 59,
      "id": 47517606,
      "kids": [
        47526801,
        47524287,
        47526139,
        47520045,
        47523980,
        47523834,
        47525051,
        47526007,
        47525297,
        47517898,
        47524116,
        47523897
      ],
      "score": 146,
      "text": "<a href=\"https:&#x2F;&#x2F;www.science.org&#x2F;doi&#x2F;10.1126&#x2F;science.aec0970\" rel=\"nofollow\">https:&#x2F;&#x2F;www.science.org&#x2F;doi&#x2F;10.1126&#x2F;science.aec0970</a>",
      "time": 1774447924,
      "title": "Earthquake scientists reveal how overplowing weakens soil at experimental farm",
      "type": "story",
      "url": "https://www.washington.edu/news/2026/03/19/earthquake-scientists-reveal-how-overplowing-weakens-soil-at-experimental-farm/"
    },
    {
      "by": "hmpc",
      "descendants": 4,
      "id": 47478599,
      "kids": [
        47527068,
        47526651,
        47527214
      ],
      "score": 57,
      "time": 1774193684,
      "title": "Two studies in compiler optimisations",
      "type": "story",
      "url": "https://www.hmpcabral.com/2026/03/20/two-studies-in-compiler-optimisations/"
    },
    {
      "by": "qsi",
      "descendants": 83,
      "id": 47525378,
      "kids": [
        47527281,
        47527197,
        47527099,
        47527246,
        47526702,
        47526687,
        47526533,
        47526009,
        47526463,
        47527063,
        47525717,
        47526327,
        47526484,
        47525974,
        47526111,
        47525533,
        47525814,
        47526240,
        47526728,
        47525943,
        47525960
      ],
      "score": 235,
      "time": 1774485991,
      "title": "False claims in a widely-cited paper",
      "type": "story",
      "url": "https://statmodeling.stat.columbia.edu/2026/03/24/false-claims-in-a-published-no-corrections-no-consequences-welcome-to-the-business-school/"
    },
    {
      "by": "sznio",
      "descendants": 37,
      "id": 47483286,
      "kids": [
        47525745,
        47527042,
        47524321,
        47526180,
        47525041,
        47524954,
        47527177,
        47524396,
        47487745,
        47525528,
        47483301,
        47525463,
        47525905,
        47524664,
        47525857,
        47526038
      ],
      "score": 112,
      "time": 1774220817,
      "title": "My DIY FPGA board can run Quake II",
      "type": "story",
      "url": "https://blog.mikhe.ch/quake2-on-fpga/part4.html"
    },
    {
      "by": "MrBruh",
      "descendants": 251,
      "id": 47522709,
      "kids": [
        47523220,
        47527293,
        47522862,
        47523013,
        47522940,
        47523829,
        47526972,
        47522786,
        47526625,
        47522837,
        47524377,
        47527059,
        47523039,
        47526612,
        47524716,
        47522710,
        47523201,
        47524043,
        47524938,
        47523152,
        47525490,
        47523532,
        47522999,
        47522952,
        47522865,
        47526093,
        47522921,
        47523471,
        47523649,
        47525270,
        47525367,
        47525143,
        47525073,
        47524477,
        47525955,
        47523155,
        47523364,
        47523396,
        47523930,
        47522754,
        47522968,
        47523647,
        47523874,
        47526957,
        47525028
      ],
      "score": 927,
      "time": 1774470423,
      "title": "The EU still wants to scan  your private messages and photos",
      "type": "story",
      "url": "https://fightchatcontrol.eu/?foo=bar"
    },
    {
      "by": "louiereederson",
      "descendants": 146,
      "id": 47521157,
      "kids": [
        47522974,
        47523456,
        47522858,
        47525140,
        47523261,
        47523414,
        47527138,
        47524609,
        47522840,
        47525215,
        47525838,
        47526917,
        47522807,
        47524000,
        47523926,
        47523035,
        47527131,
        47525985,
        47523144,
        47523238,
        47524010,
        47526782,
        47525228,
        47525834,
        47523798,
        47524033,
        47523295,
        47522691,
        47524701,
        47523030,
        47525543,
        47525692,
        47524240,
        47524405,
        47524526,
        47526445,
        47525818,
        47523712,
        47522895,
        47523617,
        47524298,
        47522925,
        47527182,
        47525567,
        47524672,
        47525844,
        47523924,
        47526340,
        47522927,
        47523752,
        47523134,
        47521158
      ],
      "score": 241,
      "time": 1774462600,
      "title": "90% of Claude-linked output going to GitHub repos w <2 stars",
      "type": "story",
      "url": "https://www.claudescode.dev/?window=since_launch"
    },
    {
      "by": "c420",
      "descendants": 24,
      "id": 47473673,
      "kids": [
        47526630,
        47526926,
        47526902,
        47526775,
        47476308,
        47526966,
        47526540,
        47527057,
        47526699,
        47474958,
        47526518
      ],
      "score": 62,
      "time": 1774144703,
      "title": "The truth that haunts the Ramones: 'They sold more T-shirts than records'",
      "type": "story",
      "url": "https://english.elpais.com/culture/2026-03-17/the-uncomfortable-truth-that-will-always-haunt-the-ramones-they-sold-more-t-shirts-than-records.html"
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
      "title": "Check Up with Each Other",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience     Over the last year, It...",
      "url": "https://dev.to/francistrdev/check-up-with-each-other-2ogc",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 49,
      "comments": 17,
      "reading_time": 4,
      "author": "francistrdev"
    },
    {
      "title": "The software industry is ready to grow",
      "description": "I don't spend a lot of time on the X these days, but I think this perspective is worth...",
      "url": "https://dev.to/ben/the-software-industry-is-ready-to-grow-4ie4",
      "tags": "ai, career, agents",
      "reactions": 14,
      "comments": 4,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Why hiring junior developers pays off more than you think (I’ve lived it firsthand)",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience           A trip down...",
      "url": "https://dev.to/javz/why-hiring-junior-developers-pays-off-more-than-you-think-ive-lived-it-firsthand-1lg2",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 47,
      "comments": 21,
      "reading_time": 4,
      "author": "javz"
    },
    {
      "title": "600 Articles Later — The 4 Title Patterns That Actually Get Views on Dev.to",
      "description": "I have published 600+ technical articles. Most got 10-20 views. A few hit 50-120. Here are the...",
      "url": "https://dev.to/0012303/600-articles-later-the-4-title-patterns-that-actually-get-views-on-devto-8le",
      "tags": "writing, productivity, devto, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "0012303"
    },
    {
      "title": "90% of Claude Code Output Goes to Repos Nobody Stars. That's the Wrong Problem.",
      "description": "90% of Claude Code output goes to repos with less than 2 stars. A dashboard called claudescode.dev...",
      "url": "https://dev.to/adioof/90-of-claude-code-output-goes-to-repos-nobody-stars-thats-the-wrong-problem-nac",
      "tags": "discuss, career, programming, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "adioof"
    },
    {
      "title": "How to Write Daily Standup Updates That Your Manager Actually Reads",
      "description": "Last Tuesday, my skip-level manager pulled me aside after a sprint review. \"I just want to say,\" she...",
      "url": "https://dev.to/belal_zahran/how-to-write-daily-standup-updates-that-your-manager-actually-reads-3cgn",
      "tags": "agile, productivity, career, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "belal_zahran"
    },
    {
      "title": "Ser dev latinoamericano en 2026: lo que nadie te cuenta",
      "description": "Nadie te lo explica cuando empiezas. No hay manual. No hay curso que te diga \"oye, trabajar en tech...",
      "url": "https://dev.to/maurosues/ser-dev-latinoamericano-en-2026-lo-que-nadie-te-cuenta-498e",
      "tags": "spanish, career, productivity, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "maurosues"
    },
    {
      "title": "The Exact Email Template That Got Me a $25K Salary Increase",
      "description": "In 2024, I accepted a job offer without negotiating. I left $18,000 on the table. I know this because...",
      "url": "https://dev.to/belal_zahran/the-exact-email-template-that-got-me-a-25k-salary-increase-4ej",
      "tags": "career, salary, jobsearch, beginners",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "belal_zahran"
    },
    {
      "title": "The Perfect Cover Letter Formula for 2026 (With AI Help)",
      "description": "I used to think cover letters were dead. Then I started hiring.  After reviewing over 500...",
      "url": "https://dev.to/belal_zahran/the-perfect-cover-letter-formula-for-2026-with-ai-help-2gkj",
      "tags": "career, jobsearch, ai, writing",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "belal_zahran"
    },
    {
      "title": "Stop Treating Side Projects Like Startups. Do This Instead.",
      "description": "Most side projects do not fail because the idea is bad.  They fail because the developer secretly...",
      "url": "https://dev.to/__be2942592/stop-treating-side-projects-like-startups-do-this-instead-3057",
      "tags": "programming, career, startup, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "__be2942592"
    }
  ]
}
```

