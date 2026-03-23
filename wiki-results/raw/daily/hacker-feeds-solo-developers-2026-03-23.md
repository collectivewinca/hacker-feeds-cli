# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-23 06:42:38 UTC

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
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need - A nano claude code–like 「agent harness」, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5797,
      "added_stars": 8331,
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
      "forks": 1025,
      "added_stars": 4586,
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
      "author": "abhigyanpatwari",
      "repo": "GitNexus",
      "avatar": "https://github.com/abhigyanpatwari.png",
      "repo_link": "https://github.com/abhigyanpatwari/GitNexus",
      "desc": "GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a GitHub repo or ZIP file, and get an interactive knowledge graph wit a built in Graph RAG Agent. Perfect for code exploration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2193,
      "added_stars": 5485,
      "builtBy": [
        {
          "username": "abhigyanpatwari",
          "href": "https://github.com/abhigyanpatwari",
          "avatar": "https://avatars.githubusercontent.com/u/126312502"
        },
        {
          "username": "magyargergo",
          "href": "https://github.com/magyargergo",
          "avatar": "https://avatars.githubusercontent.com/u/11230420"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2905,
      "added_stars": 4379,
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
      "author": "promptfoo",
      "repo": "promptfoo",
      "avatar": "https://github.com/promptfoo.png",
      "repo_link": "https://github.com/promptfoo/promptfoo",
      "desc": "Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI. Compare performance of GPT, Claude, Gemini, Llama, and more. Simple declarative configs with command line and CI/CD integration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1552,
      "added_stars": 1941,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1831,
      "added_stars": 1717,
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
      "author": "google-labs-code",
      "repo": "stitch-skills",
      "avatar": "https://github.com/google-labs-code.png",
      "repo_link": "https://github.com/google-labs-code/stitch-skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 340,
      "added_stars": 585,
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
      "author": "CherryHQ",
      "repo": "cherry-studio",
      "avatar": "https://github.com/CherryHQ.png",
      "repo_link": "https://github.com/CherryHQ/cherry-studio",
      "desc": "AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Unified access to frontier LLMs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3935,
      "added_stars": 586,
      "builtBy": [
        {
          "username": "kangfenmao",
          "href": "https://github.com/kangfenmao",
          "avatar": "https://avatars.githubusercontent.com/u/8253512"
        },
        {
          "username": "EurFelux",
          "href": "https://github.com/EurFelux",
          "avatar": "https://avatars.githubusercontent.com/u/59059173"
        },
        {
          "username": "DeJeune",
          "href": "https://github.com/DeJeune",
          "avatar": "https://avatars.githubusercontent.com/u/67425183"
        },
        {
          "username": "alephpiece",
          "href": "https://github.com/alephpiece",
          "avatar": "https://avatars.githubusercontent.com/u/22237751"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "Crosstalk-Solutions",
      "repo": "project-nomad",
      "avatar": "https://github.com/Crosstalk-Solutions.png",
      "repo_link": "https://github.com/Crosstalk-Solutions/project-nomad",
      "desc": "Project N.O.M.A.D, is a self-contained, offline survival computer packed with critical tools, knowledge, and AI to keep you informed and empowered—anytime, anywhere.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1026,
      "added_stars": 7178,
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
      "author": "DaKheera47",
      "repo": "job-ops",
      "avatar": "https://github.com/DaKheera47.png",
      "repo_link": "https://github.com/DaKheera47/job-ops",
      "desc": "job-ops: DevOps principles applied to job hunting. A self-hosted pipeline to track, analyze, and assist your application process",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 208,
      "added_stars": 955,
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
    },
    {
      "author": "7836246",
      "repo": "cursor2api",
      "avatar": "https://github.com/7836246.png",
      "repo_link": "https://github.com/7836246/cursor2api",
      "desc": "将 Cursor Web Docs 免费 API 转换为 OpenAI/Anthropic 兼容格式的代理服务。提供 Claude Code工具及图片支持。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 330,
      "added_stars": 384,
      "builtBy": [
        {
          "username": "7836246",
          "href": "https://github.com/7836246",
          "avatar": "https://avatars.githubusercontent.com/u/65436665"
        },
        {
          "username": "huangzt",
          "href": "https://github.com/huangzt",
          "avatar": "https://avatars.githubusercontent.com/u/4033637"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "majorcheng",
          "href": "https://github.com/majorcheng",
          "avatar": "https://avatars.githubusercontent.com/u/2588345"
        },
        {
          "username": "guoyongchang",
          "href": "https://github.com/guoyongchang",
          "avatar": "https://avatars.githubusercontent.com/u/10484506"
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
      "forks": 1164,
      "added_stars": 5777,
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
      "forks": 1795,
      "added_stars": 3101,
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
      "forks": 1543,
      "added_stars": 5151,
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
      "forks": 706,
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
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "CyberStrikeAI is an AI-native security testing platform built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 505,
      "added_stars": 2217,
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
      "forks": 1419,
      "added_stars": 3022,
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
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 320,
      "added_stars": 522,
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
      "forks": 8138,
      "added_stars": 878,
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
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 Take full control of your VPS with 1Panel. Deploy OpenClaw in one click.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3059,
      "added_stars": 1038,
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
      "author": "dlvhdr",
      "repo": "gh-dash",
      "avatar": "https://github.com/dlvhdr.png",
      "repo_link": "https://github.com/dlvhdr/gh-dash",
      "desc": "A rich terminal UI for GitHub that doesn't break your flow.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 361,
      "added_stars": 907,
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
      "author": "charmbracelet",
      "repo": "bubbletea",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/bubbletea",
      "desc": "A powerful little TUI framework 🏗",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1138,
      "added_stars": 1389,
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
      "forks": 2630,
      "added_stars": 2303,
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
      "added_stars": 450,
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
      "author": "asheshgoplani",
      "repo": "agent-deck",
      "avatar": "https://github.com/asheshgoplani.png",
      "repo_link": "https://github.com/asheshgoplani/agent-deck",
      "desc": "Terminal session manager for AI coding agents. One TUI for Claude, Gemini, OpenCode, Codex, and more.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 176,
      "added_stars": 679,
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
      "author": "mark3labs",
      "repo": "mcp-go",
      "avatar": "https://github.com/mark3labs.png",
      "repo_link": "https://github.com/mark3labs/mcp-go",
      "desc": "A Go implementation of the Model Context Protocol (MCP), enabling seamless integration between LLM applications and external data sources and tools.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 800,
      "added_stars": 242,
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
      "forks": 314,
      "added_stars": 581,
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
      "author": "GopeedLab",
      "repo": "gopeed",
      "avatar": "https://github.com/GopeedLab.png",
      "repo_link": "https://github.com/GopeedLab/gopeed",
      "desc": "A fast, modern download manager for HTTP, BitTorrent, Magnet, and ED2K. Cross-platform, built with Golang and Flutter.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1592,
      "added_stars": 730,
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
      "forks": 5437,
      "added_stars": 34968,
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
      "forks": 4345,
      "added_stars": 14099,
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
      "forks": 1233,
      "added_stars": 14548,
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
      "desc": "OpenSandbox is a general-purpose sandbox platform for AI applications, offering multi-language SDKs, unified sandbox APIs, and Docker/Kubernetes runtimes for scenarios like Coding Agents, GUI Agents, Agent Evaluation, AI Code Execution, and RL Training.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 689,
      "added_stars": 7923,
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
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "Give your agents the power of the Hugging Face ecosystem",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 589,
      "added_stars": 7771,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "+192 Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 760,
      "added_stars": 4387,
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
      "forks": 959,
      "added_stars": 2771,
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
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3139,
      "added_stars": 7931,
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
      "forks": 2403,
      "added_stars": 3748,
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
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 894,
      "added_stars": 4817,
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
      "forks": 1810,
      "added_stars": 9263,
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
      "forks": 25353,
      "added_stars": 12110,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1659,
      "added_stars": 7356,
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
      "author": "langchain-ai",
      "repo": "deepagents",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/deepagents",
      "desc": "Agent harness built with LangChain and LangGraph. Equipped with a planning tool, a filesystem backend, and the ability to spawn subagents - well-equipped to handle complex agentic tasks.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2398,
      "added_stars": 7245,
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
      "author": "666ghj",
      "repo": "BettaFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/BettaFish",
      "desc": "微舆：人人可用的多Agent舆情分析助手，打破信息茧房，还原舆情原貌，预测未来走向，辅助决策！从0实现，不依赖任何框架。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7400,
      "added_stars": 4190,
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
      "forks": 475,
      "added_stars": 3555,
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
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8609,
      "added_stars": 3785,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Unified web UI for training and running open models like Qwen, DeepSeek, gpt-oss and Gemma locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4856,
      "added_stars": 5090,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1454,
      "added_stars": 6023,
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
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 44907,
      "added_stars": 15518,
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
      "author": "anthropics",
      "repo": "claude-code-security-review",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-security-review",
      "desc": "An AI-powered security review GitHub Action using Claude to analyze code changes for security vulnerabilities.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 331,
      "added_stars": 807,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "I Analyzed the Readability of 10 Popular Developer Documentation Sites",
      "url": "https://dev.to/ckmtools/i-analyzed-the-readability-of-10-popular-developer-documentation-sites-4npp",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-22T09:31:54.000Z"
    },
    {
      "title": "Bun is Fast. Your Event Loop is Not.",
      "url": "https://howtocenterdiv.com/beyond-the-div/bun-is-fast-your-event-loop-is-not",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-22T00:41:52.000Z"
    },
    {
      "title": "Kuberna Labs – Open-source SDK for autonomous cross-chain AI agents",
      "url": "https://github.com/kawacukennedy/kuberna-labs",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-21T10:03:00.000Z"
    },
    {
      "title": "I Scanned 10 Popular GitHub Actions Workflows for Undocumented Environment Variables. Here's What I Found.",
      "url": "https://dev.to/ckmtools/i-scanned-10-popular-github-actions-workflows-for-undocumented-environment-variables-heres-what-i-515i",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-21T08:32:20.000Z"
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
      "title": "My AI agent messed up a UTC time conversion algorithm after I *specifically told it* to make no mistakes. smh",
      "description": "A post by Ben Halpern",
      "url": "https://dev.to/ben/my-ai-agent-messed-up-a-utc-time-conversion-algorithm-after-i-specifically-told-it-to-make-no-46k7",
      "tags": "agents, ai, algorithms, discuss",
      "reactions": 41,
      "comments": 6,
      "reading_time": 0,
      "author": "ben"
    },
    {
      "title": "What was your win this week??",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-35ja",
      "tags": "weeklyretro, discuss",
      "reactions": 47,
      "comments": 59,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Vandalizing My Own Wikipedia Experience: A 90s Cyberpunk GeoCities Makeover",
      "description": "Wikipedia is a marvel. It is the Library of Alexandria of our time, a meticulously curated repository...",
      "url": "https://dev.to/googleai/vandalizing-my-own-wikipedia-experience-a-90s-cyberpunk-geocities-makeover-13ie",
      "tags": "webdev, ai, javascript, programming",
      "reactions": 59,
      "comments": 5,
      "reading_time": 4,
      "author": "dynamicwebpaige"
    },
    {
      "title": "Introducing gh-weekly-updates - Automate Your Weekly GitHub Impact Summaries",
      "description": "If you are anything like me, you’ve probably spent a Friday afternoon trying to remember everything...",
      "url": "https://dev.to/sahan/introducing-gh-weekly-updates-automate-your-weekly-github-impact-summaries-1f1c",
      "tags": "github, python, productivity, opensource",
      "reactions": 6,
      "comments": 0,
      "reading_time": 4,
      "author": "sahan"
    },
    {
      "title": "Congrats to the Winners of Our First DEV Weekend Challenge!",
      "description": "It's time!! We are thrilled to announce the winners of our first DEV Weekend Challenge.  The prompt...",
      "url": "https://dev.to/devteam/congrats-to-the-winners-of-our-first-dev-weekend-challenge-1gml",
      "tags": "ai, devchallenge, weekendchallenge, webdev",
      "reactions": 74,
      "comments": 20,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "I Built a Doom Clone in One HTML File",
      "description": "The first version of Cthulhu just walked into a wall and stayed there. Six tentacles flailing, third...",
      "url": "https://dev.to/thisguymartin/i-built-a-doom-clone-in-one-html-file-4603",
      "tags": "javascript, gamedev, sideprojects, html",
      "reactions": 6,
      "comments": 0,
      "reading_time": 12,
      "author": "thisguymartin"
    },
    {
      "title": "I Added AI to Any Website With One Line of JavaScript — Here's How",
      "description": "How I built an embeddable AI assistant that reads your website and answers customer questions — with a single script tag. No API keys, no backend, no configuration.",
      "url": "https://dev.to/orrdee/i-added-ai-to-any-website-with-one-line-of-javascript-heres-how-36dc",
      "tags": "javascript, ai, webdev, opensource",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "orrdee"
    },
    {
      "title": "I Built a Claude Code Agent That Doesn't Need Me Anymore",
      "description": "I gave my AI agent persistent memory and identity. Four months later, it had a life I knew nothing about.",
      "url": "https://dev.to/jkheadley/i-built-a-claude-code-agent-that-doesnt-need-me-anymore-dfm",
      "tags": "ai, opensource, claudecode, typescript",
      "reactions": 26,
      "comments": 2,
      "reading_time": 7,
      "author": "jkheadley"
    },
    {
      "title": "Designing Content Systems that Understand and Act",
      "description": "Modern JavaScript applications don’t just render UI anymore. They orchestrate search,...",
      "url": "https://dev.to/storyblok/designing-content-systems-that-understand-and-act-5fal",
      "tags": "javascript, webdev, architecture, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "siddharth_hacks"
    },
    {
      "title": "OpenTelemetry just standardized LLM tracing. Here's what it actually looks like in code.",
      "description": "Every LLM tool invents its own tracing format. Langfuse has one. Helicone has one. Arize has one. If...",
      "url": "https://dev.to/vola-trebla/opentelemetry-just-standardized-llm-tracing-heres-what-it-actually-looks-like-in-code-2e5f",
      "tags": "ai, observability, typescript, opentelemetry",
      "reactions": 22,
      "comments": 17,
      "reading_time": 6,
      "author": "vola-trebla"
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
      "title": "So Many New Systems Programming Languages II",
      "url": "https://colinsblog.net/2023-03-22-systems-languages-details/",
      "score": 3,
      "comments": 1,
      "tags": [
        "plt"
      ],
      "id": "yc3olx"
    },
    {
      "title": "Stryker Cyberattack Exposes Healthcare Supply Chain Vulnerability",
      "url": "https://www.linkedin.com/posts/jonathangovette_your-surgical-supplies-just-became-a-national-activity-7439683352036741121-n1qU",
      "score": 2,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "frjxsc"
    },
    {
      "title": "Does Computer Science still exist?",
      "url": "https://davidbau.com/archives/2026/03/20/does_computer_science_still_exist.html",
      "score": 6,
      "comments": 0,
      "tags": [
        "education",
        "vibecoding"
      ],
      "id": "2hkvoo"
    },
    {
      "title": "ofw - fractional work for the AI era",
      "url": "https://ourfractionalwork.com",
      "score": 0,
      "comments": 0,
      "tags": [
        "ai",
        "privacy",
        "vibecoding"
      ],
      "id": "9o7ktn"
    },
    {
      "title": "blessed.rs - Recommended Crate Directory",
      "url": "https://blessed.rs/",
      "score": 4,
      "comments": 3,
      "tags": [
        "programming",
        "rust"
      ],
      "id": "xrwc0y"
    },
    {
      "title": "Whistler: Live eBPF Programming from the Common Lisp REPL",
      "url": "https://atgreen.github.io/repl-yell/posts/whistler/",
      "score": 1,
      "comments": 0,
      "tags": [
        "linux",
        "lisp"
      ],
      "id": "1dufuw"
    },
    {
      "title": "Tutorial: Finding Your Most Popular Bluesky Followers",
      "url": "https://www.raymondcamden.com/2026/03/18/finding-your-most-popular-bluesky-followers",
      "score": 1,
      "comments": 0,
      "tags": [
        "api"
      ],
      "id": "gsixmr"
    },
    {
      "title": "Is Local the Future of AI?",
      "url": "https://tombedor.dev/open-source-models/",
      "score": 13,
      "comments": 10,
      "tags": [
        "ai"
      ],
      "id": "n1h2tl"
    },
    {
      "title": "The diminished art of coding",
      "url": "https://nolanlawson.com/2026/03/22/the-diminished-art-of-coding/",
      "score": 9,
      "comments": 3,
      "tags": [
        "vibecoding"
      ],
      "id": "g4sj0m"
    },
    {
      "title": "Gea — Lightweight Reactive UI Framework",
      "url": "https://geajs.com/",
      "score": 6,
      "comments": 0,
      "tags": [
        "javascript",
        "web"
      ],
      "id": "uacwjr"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "JumpCrisscross",
      "descendants": 242,
      "id": 47480507,
      "kids": [
        47484183,
        47481582,
        47482276,
        47486083,
        47481823,
        47485910,
        47485808,
        47481842,
        47485134,
        47484706,
        47482886,
        47483750,
        47482695,
        47482913,
        47481796,
        47483475,
        47481443,
        47482657,
        47482783,
        47485698,
        47484902,
        47484170,
        47482648,
        47481700,
        47483247,
        47484720,
        47482026,
        47484629,
        47484940,
        47484052,
        47481923,
        47481623,
        47482462,
        47481488,
        47485103,
        47485323,
        47483151,
        47486091,
        47486087,
        47483748,
        47482550,
        47481299,
        47483731
      ],
      "score": 486,
      "time": 1774203820,
      "title": "PC Gamer recommends RSS readers in a 37mb article that just keeps downloading",
      "type": "story",
      "url": "https://stuartbreckenridge.net/2026-03-19-pc-gamer-recommends-rss-readers-in-a-37mb-article/"
    },
    {
      "by": "tejohnso",
      "descendants": 67,
      "id": 47454647,
      "kids": [
        47486121,
        47486075,
        47485219,
        47485996,
        47485053,
        47486058,
        47485002,
        47485875,
        47484965,
        47485285,
        47485370,
        47485332,
        47484911,
        47485080,
        47485146,
        47484905
      ],
      "score": 78,
      "time": 1774015334,
      "title": "Tin Can, a 'landline' for kids",
      "type": "story",
      "url": "https://www.businessinsider.com/tin-can-landline-kids-cellphone-cell-alternative-how-2025-9"
    },
    {
      "by": "mariuz",
      "descendants": 93,
      "id": 47480886,
      "kids": [
        47484507,
        47482166,
        47482973,
        47481850,
        47484742,
        47482918,
        47481974,
        47481814,
        47484783,
        47484501,
        47485049,
        47483812,
        47482206,
        47482159,
        47483230,
        47483199,
        47483592
      ],
      "score": 322,
      "time": 1774206163,
      "title": "The gold standard of optimization: A look under the hood of RollerCoaster Tycoon",
      "type": "story",
      "url": "https://larstofus.com/2026/03/22/the-gold-standard-of-optimization-a-look-under-the-hood-of-rollercoaster-tycoon/"
    },
    {
      "by": "HeliumHydride",
      "descendants": 1,
      "id": 47453462,
      "kids": [
        47486003
      ],
      "score": 16,
      "time": 1774008695,
      "title": "Can you get root with only a cigarette lighter? (2024)",
      "type": "story",
      "url": "https://www.da.vidbuchanan.co.uk/blog/dram-emfi.html"
    },
    {
      "by": "c17r",
      "descendants": 272,
      "id": 47478401,
      "kids": [
        47479687,
        47482035,
        47479374,
        47480815,
        47479162,
        47485716,
        47485283,
        47479457,
        47479347,
        47479574,
        47484322,
        47479492,
        47483252,
        47480695,
        47481239,
        47484674,
        47479621,
        47483977,
        47485205,
        47480539,
        47479221,
        47482123,
        47479978,
        47481290,
        47479798,
        47479997,
        47482629,
        47481035,
        47481366,
        47480578,
        47480007,
        47480424,
        47480214,
        47479554,
        47480673,
        47480581,
        47483287,
        47480067,
        47479954,
        47483363,
        47479660,
        47483651,
        47481218,
        47481412,
        47481565,
        47480204,
        47480788,
        47483294,
        47480941,
        47481616,
        47480529,
        47480508,
        47480997,
        47484276,
        47480728,
        47483136,
        47483041,
        47482753,
        47481674,
        47481165,
        47482511,
        47482764,
        47484272,
        47485395,
        47484375,
        47484384,
        47481625,
        47480112,
        47480398,
        47480207,
        47480514,
        47481184,
        47481271,
        47480744,
        47480643,
        47482776
      ],
      "score": 488,
      "time": 1774192588,
      "title": "The future of version control",
      "type": "story",
      "url": "https://bramcohen.com/p/manyana"
    },
    {
      "by": "stevekrouse",
      "descendants": 260,
      "id": 47476315,
      "kids": [
        47480731,
        47486052,
        47480159,
        47484105,
        47480652,
        47483632,
        47482926,
        47480015,
        47481827,
        47481466,
        47482943,
        47480704,
        47483594,
        47479813,
        47484767,
        47485373,
        47480247,
        47485245,
        47481839,
        47483425,
        47480391,
        47476514,
        47485346,
        47479971,
        47484371,
        47482408,
        47481016,
        47479956,
        47480530,
        47486077,
        47486081,
        47486008,
        47485166,
        47485352,
        47483319,
        47480300,
        47479928,
        47485546,
        47480156,
        47481118,
        47476321,
        47481787,
        47480597,
        47481007,
        47481959,
        47481853
      ],
      "score": 356,
      "time": 1774177774,
      "title": "Reports of code's death are greatly exaggerated",
      "type": "story",
      "url": "https://stevekrouse.com/precision"
    },
    {
      "by": "birkey",
      "descendants": 179,
      "id": 47479751,
      "kids": [
        47482095,
        47480760,
        47483907,
        47480472,
        47485757,
        47480189,
        47479943,
        47480786,
        47480003,
        47480828,
        47484110,
        47481126,
        47480338,
        47481716,
        47484083,
        47482762,
        47481689,
        47482246,
        47479942,
        47480824,
        47480619,
        47481987,
        47480153,
        47480302,
        47480523,
        47480102,
        47482098,
        47480096,
        47479935,
        47480985,
        47485155,
        47483745
      ],
      "score": 272,
      "time": 1774199826,
      "title": "Why I love NixOS",
      "type": "story",
      "url": "https://www.birkey.co/2026-03-22-why-i-love-nixos.html"
    },
    {
      "by": "jensgk",
      "descendants": 139,
      "id": 47476821,
      "kids": [
        47481051,
        47479000,
        47480982,
        47481498,
        47485987,
        47478750,
        47480030,
        47479234,
        47483980,
        47480541,
        47477532,
        47477770,
        47480908,
        47482775,
        47482150,
        47484029,
        47478873,
        47477530,
        47477859,
        47482766,
        47481664,
        47480479,
        47479286,
        47482823,
        47479921,
        47478670,
        47478435,
        47479871,
        47481237,
        47478774,
        47480784,
        47481906,
        47478043,
        47483323,
        47477378,
        47485540,
        47484050,
        47480948,
        47482841,
        47480976
      ],
      "score": 410,
      "time": 1774182518,
      "title": "Project Nomad – Knowledge That Never Goes Offline",
      "type": "story",
      "url": "https://www.projectnomad.us"
    },
    {
      "by": "mft_",
      "descendants": 112,
      "id": 47476422,
      "kids": [
        47477552,
        47477630,
        47485701,
        47476717,
        47477005,
        47478292,
        47481034,
        47484838,
        47479799,
        47476848,
        47484353,
        47482341,
        47476802,
        47479779,
        47477659,
        47478657,
        47477741,
        47478173,
        47485739,
        47478146,
        47477975,
        47479203,
        47477260,
        47477139,
        47480145,
        47476883,
        47484308,
        47485171,
        47482280,
        47482678,
        47484041,
        47483164,
        47480254,
        47478883,
        47480264,
        47484548,
        47477658,
        47477908,
        47481315,
        47478893,
        47479916,
        47478402,
        47483317,
        47478577,
        47479922,
        47477049,
        47476917,
        47476718,
        47476725
      ],
      "score": 333,
      "time": 1774179003,
      "title": "Flash-MoE: Running a 397B Parameter Model on a Laptop",
      "type": "story",
      "url": "https://github.com/danveloper/flash-moe"
    },
    {
      "by": "jtsylve",
      "descendants": 5,
      "id": 47439948,
      "kids": [
        47439949,
        47485883,
        47464820,
        47439958
      ],
      "score": 26,
      "time": 1773929938,
      "title": "A Copy-Paste Bug That Broke PSpice AES-256 Encryption",
      "type": "story",
      "url": "https://jtsylve.blog/post/2026/03/18/PSpice-Encryption-Weakness"
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
      "reactions": 0,
      "comments": 1,
      "reading_time": 2,
      "author": "canro91"
    },
    {
      "title": "Why its hard to evaluate what makes a great Forward Deployed Engineer.",
      "description": "There’s a lot of craze over the Forward Deployed Engineer role in tech right now. A ton of interest,...",
      "url": "https://dev.to/marcusbk37/why-its-hard-to-evaluate-what-makes-a-great-forward-deployed-engineer-4441",
      "tags": "webdev, ai, devops, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "marcusbk37"
    },
    {
      "title": "My progress using AI",
      "description": "Over the next three to four months, you will transition into a professional-grade Self-Employed...",
      "url": "https://dev.to/true63/my-progress-using-ai-5e8d",
      "tags": "ai, career, cybersecurity, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "true63"
    },
    {
      "title": "Stop Editing Your Resume. Start Building Career Signal.",
      "description": "Most people spend weeks polishing bullet points, fonts, and templates.  The problem: recruiters and...",
      "url": "https://dev.to/ontoguz_ontoguz_a4f11823d/stop-editing-your-resume-start-building-career-signal-2iji",
      "tags": "career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "ontoguz_ontoguz_a4f11823d"
    },
    {
      "title": "Why GenAI Isn't Ready for Prime Time",
      "description": "If you have followed my posts on social media, you know by now that I've taken a very pragmatic (and...",
      "url": "https://dev.to/aws-builders/why-genai-isnt-ready-for-prime-time-32bg",
      "tags": "ai, career, llm, gemini",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "eyalestrin"
    },
    {
      "title": "I Built 26 AI Career Tools for Claude Code — Here's What I Learned",
      "description": "Job hunting is a second full-time job. And if you're a developer, it's a particularly strange one —...",
      "url": "https://dev.to/ajitsingh25/i-built-26-ai-career-tools-for-claude-code-heres-what-i-learned-489k",
      "tags": "career, opensource",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "ajitsingh25"
    },
    {
      "title": "Becoming the Duchess of Hackers: My Journey Through Tech, Cybersecurity, and Growth",
      "description": "When I first stepped into tech, I was overwhelmed.  There were so many paths frontend, backend,...",
      "url": "https://dev.to/the_duchess_of_hackers/becoming-the-duchess-of-hackers-my-journey-through-tech-cybersecurity-and-growth-2ji6",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 7,
      "comments": 1,
      "reading_time": 2,
      "author": "the_duchess_of_hackers"
    },
    {
      "title": "Hello world! Building a survival guide for developers in Japan 🌸",
      "description": "Hello DEV community! 🚀  I'm an engineer based in Japan, with a background in automotive OBD systems...",
      "url": "https://dev.to/japan_refactor/hello-world-building-a-survival-guide-for-developers-in-japan-1fm1",
      "tags": "career, community, devjournal, resources",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "japan_refactor"
    },
    {
      "title": "AI is making me weaker, mentally...",
      "description": "Today, I tried learning about OAuth 2 and multi-tenant architecture. Usually I will use an LLM for...",
      "url": "https://dev.to/ayush-logs/ai-is-making-me-weaker-mentally-3j2e",
      "tags": "ai, programming, beginners, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "ayush-logs"
    },
    {
      "title": "I can't name my team's top 3 skill gaps without guessing. Can you?",
      "description": "I manage engineers at a healthcare company. If you're unfamiliar, that's a highly regulated industry,...",
      "url": "https://dev.to/itsyeehawjohnny/i-cant-name-my-teams-top-3-skill-gaps-without-guessing-can-you-172k",
      "tags": "management, career, leadership, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "itsyeehawjohnny"
    }
  ]
}
```

