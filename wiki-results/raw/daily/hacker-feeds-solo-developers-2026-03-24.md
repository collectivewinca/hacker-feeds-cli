# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-24 06:39:02 UTC

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
      "forks": 1304,
      "added_stars": 10479,
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
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need - A nano claude code–like 「agent harness」, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5925,
      "added_stars": 7880,
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
      "author": "alibaba",
      "repo": "page-agent",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/page-agent",
      "desc": "JavaScript in-page GUI agent. Control web interfaces with natural language.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1039,
      "added_stars": 4261,
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
      "author": "google-labs-code",
      "repo": "stitch-skills",
      "avatar": "https://github.com/google-labs-code.png",
      "repo_link": "https://github.com/google-labs-code/stitch-skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 348,
      "added_stars": 659,
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
      "author": "abhigyanpatwari",
      "repo": "GitNexus",
      "avatar": "https://github.com/abhigyanpatwari.png",
      "repo_link": "https://github.com/abhigyanpatwari/GitNexus",
      "desc": "GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a GitHub repo or ZIP file, and get an interactive knowledge graph wit a built in Graph RAG Agent. Perfect for code exploration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2222,
      "added_stars": 3840,
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
          "username": "zander-raycraft",
          "href": "https://github.com/zander-raycraft",
          "avatar": "https://avatars.githubusercontent.com/u/99677330"
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
      "forks": 2562,
      "added_stars": 1356,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2940,
      "added_stars": 3495,
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
          "username": "rodboev",
          "href": "https://github.com/rodboev",
          "avatar": "https://avatars.githubusercontent.com/u/106971"
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
      "forks": 228,
      "added_stars": 764,
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
      "forks": 1220,
      "added_stars": 6002,
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
      "forks": 1806,
      "added_stars": 3102,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1637,
      "added_stars": 5078,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 708,
      "added_stars": 1689,
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
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "CyberStrikeAI is an AI-native security testing platform built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 505,
      "added_stars": 2226,
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
      "author": "m1k1o",
      "repo": "neko",
      "avatar": "https://github.com/m1k1o.png",
      "repo_link": "https://github.com/m1k1o/neko",
      "desc": "A self hosted virtual browser that runs in docker and uses WebRTC.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1422,
      "added_stars": 3038,
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
      "author": "asheshgoplani",
      "repo": "agent-deck",
      "avatar": "https://github.com/asheshgoplani.png",
      "repo_link": "https://github.com/asheshgoplani/agent-deck",
      "desc": "Terminal session manager for AI coding agents. One TUI for Claude, Gemini, OpenCode, Codex, and more.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 178,
      "added_stars": 663,
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
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 321,
      "added_stars": 538,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8145,
      "added_stars": 889,
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
      "author": "dlvhdr",
      "repo": "gh-dash",
      "avatar": "https://github.com/dlvhdr.png",
      "repo_link": "https://github.com/dlvhdr/gh-dash",
      "desc": "A rich terminal UI for GitHub that doesn't break your flow.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 361,
      "added_stars": 919,
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
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 Take full control of your VPS with 1Panel. Deploy OpenClaw in one click.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3061,
      "added_stars": 1034,
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
      "repo": "bubbletea",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/bubbletea",
      "desc": "A powerful little TUI framework 🏗",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1138,
      "added_stars": 1413,
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
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2629,
      "added_stars": 2317,
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
      "author": "mostlygeek",
      "repo": "llama-swap",
      "avatar": "https://github.com/mostlygeek.png",
      "repo_link": "https://github.com/mostlygeek/llama-swap",
      "desc": "Reliable model swapping for any local OpenAI/Anthropic compatible server - llama.cpp, vllm, etc",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 210,
      "added_stars": 454,
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
      "author": "gofr-dev",
      "repo": "gofr",
      "avatar": "https://github.com/gofr-dev.png",
      "repo_link": "https://github.com/gofr-dev/gofr",
      "desc": "An opinionated GoLang framework for accelerated microservice development. Built in support for databases and observability.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1755,
      "added_stars": 4100,
      "builtBy": [
        {
          "username": "Umang01-hash",
          "href": "https://github.com/Umang01-hash",
          "avatar": "https://avatars.githubusercontent.com/u/55635734"
        },
        {
          "username": "coolwednesday",
          "href": "https://github.com/coolwednesday",
          "avatar": "https://avatars.githubusercontent.com/u/98943137"
        },
        {
          "username": "aryanmehrotra",
          "href": "https://github.com/aryanmehrotra",
          "avatar": "https://avatars.githubusercontent.com/u/44036979"
        },
        {
          "username": "srijan-27",
          "href": "https://github.com/srijan-27",
          "avatar": "https://avatars.githubusercontent.com/u/44723623"
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
      "forks": 799,
      "added_stars": 243,
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
      "author": "charmbracelet",
      "repo": "glow",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/glow",
      "desc": "Render markdown on the CLI, with pizzazz! 💅🏻",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 615,
      "added_stars": 967,
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
      "forks": 5602,
      "added_stars": 36337,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2574,
      "added_stars": 22321,
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
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4761,
      "added_stars": 17399,
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
      "forks": 1270,
      "added_stars": 14893,
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
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "Secure, Fast, and Extensible Sandbox runtime for AI agents.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 696,
      "added_stars": 8008,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "+192 Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 782,
      "added_stars": 4576,
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
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "Give your agents the power of the Hugging Face ecosystem",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 598,
      "added_stars": 6493,
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
      "author": "langchain-ai",
      "repo": "open-swe",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/open-swe",
      "desc": "An Open-Source Asynchronous Coding Agent",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 968,
      "added_stars": 2936,
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
      "forks": 2403,
      "added_stars": 3786,
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
      "forks": 3150,
      "added_stars": 8007,
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
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 916,
      "added_stars": 5017,
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
      "forks": 1826,
      "added_stars": 9280,
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
      "author": "ZhuLinsen",
      "repo": "daily_stock_analysis",
      "avatar": "https://github.com/ZhuLinsen.png",
      "repo_link": "https://github.com/ZhuLinsen/daily_stock_analysis",
      "desc": "LLM驱动的 A/H/美股智能分析器：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送，零成本定时运行，纯白嫖. LLM-powered stock analysis system for A/H/US markets.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 25618,
      "added_stars": 12201,
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
      "author": "langchain-ai",
      "repo": "deepagents",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/deepagents",
      "desc": "Agent harness built with LangChain and LangGraph. Equipped with a planning tool, a filesystem backend, and the ability to spawn subagents - well-equipped to handle complex agentic tasks.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2423,
      "added_stars": 7573,
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
        },
        {
          "username": "sydney-runkle",
          "href": "https://github.com/sydney-runkle",
          "avatar": "https://avatars.githubusercontent.com/u/54324534"
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
      "forks": 1674,
      "added_stars": 7282,
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
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7377,
      "added_stars": 8509,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1484,
      "added_stars": 6152,
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
          "username": "ThariqS",
          "href": "https://github.com/ThariqS",
          "avatar": "https://avatars.githubusercontent.com/u/140827"
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
      "forks": 7409,
      "added_stars": 4221,
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
      "desc": "Unsloth Studio is a web UI for training and running open models like Qwen, DeepSeek, gpt-oss and Gemma locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4877,
      "added_stars": 5268,
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
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 484,
      "added_stars": 3569,
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
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 44999,
      "added_stars": 16157,
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
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8611,
      "added_stars": 3805,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
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
    },
    {
      "title": "Cool Github Copilot Metrics Dashboard",
      "url": "https://github.com/zahhar/ghcp-dashboard",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-16T15:43:03.000Z"
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
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-1bec",
      "tags": "discuss, watercooler, jokes",
      "reactions": 30,
      "comments": 19,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Building a Weather Station Using an Old Raspberry Pi",
      "description": "For a long time I wanted to build a weather station at home because I like meteorology and for the...",
      "url": "https://dev.to/nandofm/building-a-weather-station-using-an-old-raspberry-pi-5333",
      "tags": "raspberrypi, sideprojects, learning, community",
      "reactions": 16,
      "comments": 1,
      "reading_time": 3,
      "author": "nandofm"
    },
    {
      "title": "I Talk to AI While I Code. Here's What Works, What Fails, and Where I Stop.",
      "description": "I'll be honest. A year ago, if you told me I'd be having full conversations with an AI while building...",
      "url": "https://dev.to/sudodevesh/i-talk-to-ai-while-i-code-heres-what-works-what-fails-and-where-i-stop-22jk",
      "tags": "ai, programming, coding, webdev",
      "reactions": 8,
      "comments": 4,
      "reading_time": 3,
      "author": "sudodevesh"
    },
    {
      "title": "Get Started on Dev.to! A Beginner's Guide to Engage with the Community!",
      "description": "All Images are own by the Pokemon Company!  Important Information: This post is an Unofficial Dev.to...",
      "url": "https://dev.to/francistrdev/get-started-on-devto-a-beginners-guide-to-engage-with-the-community-4ach",
      "tags": "discuss, community, beginners, howtodevto",
      "reactions": 65,
      "comments": 34,
      "reading_time": 6,
      "author": "francistrdev"
    },
    {
      "title": "Testing Antigravity: Building a Data-Intensive POC at 300km/h",
      "description": "Introduction   Last week, I spent a few hours on a Frecciarossa train from Rome to Calabria....",
      "url": "https://dev.to/gde/testing-antigravity-building-a-data-intensive-poc-at-300kmh-4c57",
      "tags": "antigravity, googlecloud, gemini, dataengineering",
      "reactions": 5,
      "comments": 0,
      "reading_time": 3,
      "author": "patitonav"
    },
    {
      "title": "What was your win this week??",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-35ja",
      "tags": "weeklyretro, discuss",
      "reactions": 50,
      "comments": 80,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Introducing Aerostack: Workflows, MCPs, and Intelligent Bots on the Edge",
      "description": "The Problem   It starts with configuration sprawl.  I was building a project and kept...",
      "url": "https://dev.to/aerostack/introducing-aerostack-workflows-mcps-and-intelligent-bots-on-the-edge-4pla",
      "tags": "ai, mcp, cloudflarechallenge, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 8,
      "author": "aerostack"
    },
    {
      "title": "Are you paying attention to your token use?",
      "description": "Or do you just use AI tools freely?",
      "url": "https://dev.to/missamarakay/are-you-paying-attention-to-your-token-use-5h5n",
      "tags": "ai, discuss",
      "reactions": 19,
      "comments": 34,
      "reading_time": 1,
      "author": "missamarakay"
    },
    {
      "title": "AI context management across Claude, Cursor, Kiro, Gemini and custom agents",
      "description": "If you use more than one AI coding agent, you've probably noticed that each one wants its own context...",
      "url": "https://dev.to/madeburo/ai-context-management-across-claude-cursor-kiro-gemini-and-custom-agents-2n1f",
      "tags": "ai, opensource, cli, agents",
      "reactions": 4,
      "comments": 0,
      "reading_time": 3,
      "author": "madeburo"
    },
    {
      "title": "Duct tape enough services together and you can cache APT packages",
      "description": "APT repositories are just HTTP file servers, doesn't seem like something that should require a custom piece of software.",
      "url": "https://dev.to/dhandspikerwade/duct-tape-enough-services-together-and-you-can-cache-apt-packages-2iml",
      "tags": "docker, debian, ubuntu, nginx",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "dhandspikerwade"
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
      "title": "pystd: A self-written C++ standard library",
      "url": "https://github.com/jpakkane/pystd",
      "score": 1,
      "comments": 0,
      "tags": [
        "c++",
        "python"
      ],
      "id": "sunwsz"
    },
    {
      "title": "Can it Resolve DOOM? Game Engine in 2,000 DNS Records – blog.rice.is",
      "url": "https://blog.rice.is/post/doom-over-dns/",
      "score": 3,
      "comments": 0,
      "tags": [
        "networking"
      ],
      "id": "aewrgf"
    },
    {
      "title": "Rails 7.2 to 8.1 Upgrade: What Actually Breaks and How to Fix It",
      "url": "https://piechowski.io/post/rails-7-to-8-upgrade-what-actually-breaks/",
      "score": 1,
      "comments": 0,
      "tags": [
        "ruby"
      ],
      "id": "8tnhsb"
    },
    {
      "title": "IRIX 3dfx Voodoo driver + glide2x IRIX port",
      "url": "https://sdz-mods.com/index.php/2026/03/23/irix-3dfx-voodoo-driver-glide2x-irix-port/",
      "score": 1,
      "comments": 0,
      "tags": [
        "graphics",
        "retrocomputing"
      ],
      "id": "i9oxi2"
    },
    {
      "title": "Bombadil - property-based testing for web UIs",
      "url": "https://antithesishq.github.io/bombadil/1-introduction.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "testing"
      ],
      "id": "kklqbv"
    },
    {
      "title": "A Study on the Performance Implications of AArch64 Atomics",
      "url": "https://www.researchgate.net/publication/370682772_A_Study_on_the_Performance_Implications_of_AArch64_Atomics",
      "score": 1,
      "comments": 0,
      "tags": [
        "hardware",
        "pdf",
        "performance"
      ],
      "id": "cqtotg"
    },
    {
      "title": "The Mouse Programming Language on CP/M",
      "url": "https://techtinkering.com/articles/the-mouse-programming-language-on-cpm/",
      "score": 10,
      "comments": 0,
      "tags": [
        "concatenative"
      ],
      "id": "g53l7b"
    },
    {
      "title": "Building ATS2 from Source in 2026",
      "url": "https://bluishcoder.co.nz/2026/03/23/building-ats2-from-source-in-2026/",
      "score": 5,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "9qmuj9"
    },
    {
      "title": "Building a Reader for the World’s Smallest Hard Drive",
      "url": "https://www.willwhang.dev/Reading-MK4001MTD/",
      "score": 3,
      "comments": 0,
      "tags": [
        "hardware",
        "vibecoding"
      ],
      "id": "jllakp"
    },
    {
      "title": "Box of secrets: Discreetly modding an apartment intercom with Matter",
      "url": "https://www.jackhogan.me/blog/box-of-secrets",
      "score": 1,
      "comments": 0,
      "tags": [
        "hardware",
        "reversing",
        "rust"
      ],
      "id": "izjoyg"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "jackhogan11",
      "descendants": 8,
      "id": 47488686,
      "kids": [
        47498886,
        47499115,
        47499044,
        47499121,
        47499182
      ],
      "score": 49,
      "time": 1774269720,
      "title": "Box of Secrets: Discreetly modding an apartment intercom to work with Apple Home",
      "type": "story",
      "url": "https://www.jackhogan.me/blog/box-of-secrets/"
    },
    {
      "by": "in-silico",
      "descendants": 167,
      "id": 47497757,
      "kids": [
        47498568,
        47498401,
        47498412,
        47498791,
        47498700,
        47498113,
        47498388,
        47498422,
        47499054,
        47498289,
        47499221,
        47498822,
        47498392,
        47498273,
        47498477,
        47498501,
        47498526,
        47499055,
        47498563,
        47498290,
        47498684,
        47498660
      ],
      "score": 248,
      "time": 1774317189,
      "title": "Epoch confirms GPT5.4 Pro solved a frontier math open problem",
      "type": "story",
      "url": "https://epoch.ai/frontiermath/open-problems/ramsey-hypergraphs"
    },
    {
      "by": "wiradikusuma",
      "descendants": 4,
      "id": 47498924,
      "kids": [
        47499235,
        47499215,
        47499185
      ],
      "score": 22,
      "time": 1774330373,
      "title": "Log File Viewer for the Terminal",
      "type": "story",
      "url": "https://lnav.org/"
    },
    {
      "by": "hasheddan",
      "descendants": 4,
      "id": 47469744,
      "kids": [
        47474819,
        47470913,
        47485747,
        47499125
      ],
      "score": 18,
      "time": 1774117261,
      "title": "BIO – The Bao I/O Co-Processor",
      "type": "story",
      "url": "https://www.crowdsupply.com/baochip/dabao/updates/bio-the-bao-i-o-co-processor"
    },
    {
      "by": "ykumards",
      "descendants": 72,
      "id": 47493460,
      "kids": [
        47493879,
        47493871,
        47498739,
        47493957,
        47494297,
        47493988,
        47494104,
        47493841,
        47498656,
        47494551,
        47494404,
        47494761,
        47495737,
        47493927,
        47494896,
        47495366,
        47493882,
        47495238,
        47496097,
        47494597,
        47495352,
        47498371,
        47494964,
        47495743,
        47496750,
        47494511,
        47494566,
        47496021,
        47493869
      ],
      "score": 333,
      "time": 1774291258,
      "title": "Autoresearch on an old research idea",
      "type": "story",
      "url": "https://ykumar.me/blog/eclip-autoresearch/"
    },
    {
      "by": "moonka",
      "descendants": 188,
      "id": 47495344,
      "kids": [
        47499282,
        47496185,
        47496404,
        47496226,
        47496214,
        47496102,
        47496278,
        47497964,
        47496372,
        47498468,
        47497606,
        47497317,
        47497004,
        47498676,
        47497073,
        47497289,
        47498462,
        47496470,
        47496115,
        47496990,
        47497012,
        47498255,
        47496176,
        47497210,
        47497897,
        47497126,
        47497204,
        47498475,
        47496853,
        47496420,
        47496342,
        47497660,
        47496101,
        47496517
      ],
      "score": 280,
      "text": "<a href=\"https:&#x2F;&#x2F;docs.fcc.gov&#x2F;public&#x2F;attachments&#x2F;DOC-420034A1.pdf\" rel=\"nofollow\">https:&#x2F;&#x2F;docs.fcc.gov&#x2F;public&#x2F;attachments&#x2F;DOC-420034A1.pdf</a><p><a href=\"https:&#x2F;&#x2F;www.fcc.gov&#x2F;document&#x2F;fcc-adds-routers-produced-foreign-countries-covered-list\" rel=\"nofollow\">https:&#x2F;&#x2F;www.fcc.gov&#x2F;document&#x2F;fcc-adds-routers-produced-forei...</a><p><a href=\"https:&#x2F;&#x2F;docs.fcc.gov&#x2F;public&#x2F;attachments&#x2F;DA-26-278A1.pdf\" rel=\"nofollow\">https:&#x2F;&#x2F;docs.fcc.gov&#x2F;public&#x2F;attachments&#x2F;DA-26-278A1.pdf</a><p><a href=\"https:&#x2F;&#x2F;www.bbc.com&#x2F;news&#x2F;articles&#x2F;c74787w149zo\" rel=\"nofollow\">https:&#x2F;&#x2F;www.bbc.com&#x2F;news&#x2F;articles&#x2F;c74787w149zo</a><p><a href=\"https:&#x2F;&#x2F;www.cnet.com&#x2F;home&#x2F;internet&#x2F;fcc-bans-foreign-made-routers-as-national-security-risk&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.cnet.com&#x2F;home&#x2F;internet&#x2F;fcc-bans-foreign-made-rou...</a>",
      "time": 1774301282,
      "title": "FCC updates covered list to include foreign-made consumer routers",
      "type": "story",
      "url": "https://www.fcc.gov/document/fcc-updates-covered-list-include-foreign-made-consumer-routers"
    },
    {
      "by": "anemll",
      "descendants": 257,
      "id": 47490070,
      "kids": [
        47490489,
        47493785,
        47496808,
        47492962,
        47493863,
        47490576,
        47498585,
        47493599,
        47498658,
        47498155,
        47491138,
        47494952,
        47490865,
        47494840,
        47492827,
        47492518,
        47491963,
        47491718,
        47494658,
        47498042,
        47495552,
        47494432,
        47494973,
        47494329,
        47490422,
        47493222,
        47497281,
        47492561,
        47493205,
        47495925,
        47497523,
        47494385,
        47492961,
        47490982,
        47495809,
        47492957,
        47492564,
        47493034,
        47498853,
        47490781,
        47497007,
        47493128,
        47495998,
        47490071,
        47490732,
        47495017,
        47490431,
        47493190,
        47495769
      ],
      "score": 559,
      "text": "<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;anemll&#x2F;status&#x2F;2035901335984611412\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;anemll&#x2F;status&#x2F;2035901335984611412</a>",
      "time": 1774276210,
      "title": "iPhone 17 Pro Demonstrated Running a 400B LLM",
      "type": "story",
      "url": "https://twitter.com/anemll/status/2035901335984611412"
    },
    {
      "by": "digital55",
      "descendants": 2,
      "id": 47444387,
      "kids": [
        47448176,
        47498918,
        47446347
      ],
      "score": 19,
      "time": 1773947556,
      "title": "Gerd Faltings, who proved the Mordell conjecture, wins the Abel Prize",
      "type": "story",
      "url": "https://www.scientificamerican.com/article/gerd-faltings-mathematician-who-proved-the-mordell-conjecture-wins-the-abel/"
    },
    {
      "by": "pseudolus",
      "descendants": 12,
      "id": 47453398,
      "kids": [
        47497739
      ],
      "score": 61,
      "time": 1774008120,
      "title": "Pompeii's battle scars linked to an ancient 'machine gun'",
      "type": "story",
      "url": "https://phys.org/news/2026-03-pompeii-scars-linked-ancient-machine.html"
    },
    {
      "by": "peteski22",
      "descendants": 32,
      "id": 47491466,
      "kids": [
        47496687,
        47497534,
        47499260,
        47496796,
        47496833,
        47496640,
        47497753,
        47496934,
        47496831,
        47497061,
        47497743,
        47498671,
        47496477,
        47497813,
        47496738,
        47496615,
        47496347
      ],
      "score": 113,
      "text": "Hi all, I&#x27;m Peter at Staff Engineer and Mozilla.ai and I want to share our idea for a standard for shared agent learning, conceptually it seemed to fit easily in my mental model as a Stack Overflow for agents.<p>The project is trying to see if we can get agents (any agent, any model) to propose &#x27;knowledge units&#x27; (KUs) as a standard schema based on gotchas it runs into during use, and proactively query for existing KUs in order to get insights which it can verify and confirm if they prove useful.<p>It&#x27;s currently very much a PoC with a more lofty proposal in the repo, we&#x27;re trying to iterate from local use, up to team level, and ideally eventually have some kind of public commons.<p>At the team level (see our Docker compose example) and your coding agent configured to point to the API address for the team to send KUs there instead - where they can be reviewed by a human in the loop (HITL) via a UI in the browser, before they&#x27;re allowed to appear in queries by other agents in your team.<p>We&#x27;re learning a lot even from using it locally on various repos internally, not just in the kind of KUs it generates, but also from a UX perspective on trying to make it easy to get using it and approving KUs in the browser dashboard. There are bigger, complex problems to solve in the future around data privacy, governance etc. but for now we&#x27;re super focussed on getting something that people can see some value from really quickly in their day-to-day.<p>Tech stack:<p>* Skills - markdown<p>* Local Python MCP server (FastMCP) - managing a local SQLite knowledge store<p>* Optional team API (FastAPI, Docker) for sharing knowledge across an org<p>* Installs as a Claude Code plugin or OpenCode MCP server<p>* Local-first by default; your knowledge stays on your machine unless you opt into team sync by setting the address in config<p>* OSS (Apache 2.0 licensed)<p>Here&#x27;s an example of something which seemed straight forward, when asking Claude Code to write a GitHub action it often used actions that were multiple major versions out of date because of its training data. In this case I told the agent what I saw when I reviewed the GitHub action YAML file it created and it proposed the knowledge unit to be persisted. Next time in a completely different repo using OpenCode and an OpenAI model, the cq skill was used up front before it started the task and it got the information about the gotcha on major versions in training data and checked GitHub proactively, using the correct, latest major versions. It then confirmed the KU, increasing the confidence score.<p>I guess some folks might say: well there&#x27;s a CLAUDE.md in your repo, or in ~&#x2F;.claude&#x2F; but we&#x27;re looking further than that, we want this to be available to all agents, to all models, and maybe more importantly we don&#x27;t want to stuff AGENTS.md or CLAUDE.md with loads of rules that lead to unpredictable behaviour, this is targetted information on a particular task and seems a lot more useful.<p>Right now it can be installed locally as a plugin for Claude Code and OpenCode:<p>claude plugin marketplace add mozilla-ai&#x2F;cq\nclaude plugin install cq<p>This allows you to capture data in your local ~&#x2F;.cq&#x2F;local.db (the data doesn&#x27;t get sent anywhere else).<p>We&#x27;d love feedback on this, the repo is open and public - so GitHub issues are welcome. We&#x27;ve posted on some of our social media platforms with a link to the blog post (below) so feel free to reply to us if you found it useful, or ran into friction, we want to make this something that&#x27;s accessible to everyone.<p>Blog post with the full story: <a href=\"https:&#x2F;&#x2F;blog.mozilla.ai&#x2F;cq-stack-overflow-for-agents&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;blog.mozilla.ai&#x2F;cq-stack-overflow-for-agents&#x2F;</a>\nGitHub repo: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;mozilla-ai&#x2F;cq\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;mozilla-ai&#x2F;cq</a><p>Thanks again for your time.",
      "time": 1774282263,
      "title": "Show HN: Cq – Stack Overflow for AI coding agents",
      "type": "story",
      "url": "https://blog.mozilla.ai/cq-stack-overflow-for-agents/"
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
      "title": "The Most Painful Career Lesson My Best Job Taught Me",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience     The most toxic job I...",
      "url": "https://dev.to/canro91/the-most-painful-career-lesson-my-best-job-taught-me-ca2",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 20,
      "comments": 13,
      "reading_time": 2,
      "author": "canro91"
    },
    {
      "title": "When 100.00 Means Nothing: Gaming Coding Assessments",
      "description": "I recently worked on a machine learning challenge on HackerRank and got a strong score with a real...",
      "url": "https://dev.to/realactioner/when-10000-means-nothing-gaming-coding-assessments-3e4l",
      "tags": "career, discuss, interview, machinelearning",
      "reactions": 20,
      "comments": 1,
      "reading_time": 3,
      "author": "realactioner"
    },
    {
      "title": "SQL Interviews in the Age of LLMs: Patterns Over Queries",
      "description": "At this point most of us don't really write SQL from scratch anymore. We describe what we need, tweak...",
      "url": "https://dev.to/olgabraginskaya/sql-interviews-in-the-age-of-llms-patterns-over-queries-13n1",
      "tags": "sql, interview, career",
      "reactions": 8,
      "comments": 2,
      "reading_time": 25,
      "author": "olgabraginskaya"
    },
    {
      "title": "What are your goals for the week? #171",
      "description": "What are your goals for the week?    What are you building this week? What do you want to...",
      "url": "https://dev.to/jarvisscript/what-are-your-goals-for-the-week-171-5232",
      "tags": "career, devjournal, discuss, productivity",
      "reactions": 7,
      "comments": 1,
      "reading_time": 1,
      "author": "jarvisscript"
    },
    {
      "title": "Why Students Fail Interviews (And How to Fix It in 2026)",
      "description": "Every year, thousands of students enter the job market with the right qualifications, good academic...",
      "url": "https://dev.to/mahendar_kumar_722d578a48/why-students-fail-interviews-and-how-to-fix-it-in-2026-34ie",
      "tags": "ai, career, msbuild, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "mahendar_kumar_722d578a48"
    },
    {
      "title": "From Engineering Floor to App Store: What 10 Years as a Manufacturing Engineer Taught Me About Building Software",
      "description": "No CS degree. No bootcamp. Just 10 years on factory floors and a stubborn belief that the software I...",
      "url": "https://dev.to/wong2kim/i-spent-10-years-in-manufacturing-now-i-build-ios-apps-with-ai-1mea",
      "tags": "beginners, ai, career, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "wong2kim"
    },
    {
      "title": "45,000 Layoffs in March. Companies Blamed AI. The Numbers Say Otherwise.",
      "description": "Oracle plans to lay off up to 45,000 people. Atlassian axed 1,600. And both say it's because of...",
      "url": "https://dev.to/adioof/45000-layoffs-in-march-companies-blamed-ai-the-numbers-say-otherwise-4pmj",
      "tags": "ai, discuss, career, programming",
      "reactions": 4,
      "comments": 1,
      "reading_time": 2,
      "author": "adioof"
    },
    {
      "title": "What I’m Learning About Writing Better Structured Code: A Learning Series",
      "description": "After working as a mobile developer and iOS developer for more than two years, I started seeing the...",
      "url": "https://dev.to/cakoko/what-im-learning-about-writing-better-structured-code-a-learning-series-k5l",
      "tags": "softwaredevelopment, career, swift, architecture",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "cakoko"
    },
    {
      "title": "Engineering Team Red Flags and What They Mean",
      "description": "We’ve all seen stressed-out and poorly performing Engineering organizations. Over my years in...",
      "url": "https://dev.to/willbarrett/engineering-team-red-flags-and-what-they-mean-419l",
      "tags": "career, leadership, management, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "willbarrett"
    },
    {
      "title": "I Spent a Year Building AI for 236 People. Here's What Actually Works.",
      "description": "I Spent a Year Building AI for 236 People. Here's What Actually Works   It was 2 AM on a...",
      "url": "https://dev.to/ale_santini_c2c79b33a953a/i-spent-a-year-building-ai-for-236-people-heres-what-actually-works-2fb8",
      "tags": "ai, career, production, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "ale_santini_c2c79b33a953a"
    }
  ]
}
```

