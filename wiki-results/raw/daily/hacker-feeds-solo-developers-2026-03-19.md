# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-19 06:36:43 UTC

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
      "forks": 869,
      "added_stars": 6794,
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
      "forks": 1510,
      "added_stars": 5060,
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
      "forks": 5380,
      "added_stars": 6715,
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
      "author": "zhukunpenglinyutong",
      "repo": "idea-claude-code-gui",
      "avatar": "https://github.com/zhukunpenglinyutong.png",
      "repo_link": "https://github.com/zhukunpenglinyutong/idea-claude-code-gui",
      "desc": "IDEA Claude Code GUI Plugin",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 224,
      "added_stars": 401,
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
      "author": "backnotprop",
      "repo": "plannotator",
      "avatar": "https://github.com/backnotprop.png",
      "repo_link": "https://github.com/backnotprop/plannotator",
      "desc": "Annotate and review coding agent plans and code diffs visually, share with your team, send feedback to agents with one click.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 198,
      "added_stars": 526,
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
          "username": "flex-yj-kim",
          "href": "https://github.com/flex-yj-kim",
          "avatar": "https://avatars.githubusercontent.com/u/105265001"
        },
        {
          "username": "dgrissen2",
          "href": "https://github.com/dgrissen2",
          "avatar": "https://avatars.githubusercontent.com/u/123790187"
        },
        {
          "username": "grubmanItay",
          "href": "https://github.com/grubmanItay",
          "avatar": "https://avatars.githubusercontent.com/u/93986984"
        }
      ]
    },
    {
      "author": "sirmalloc",
      "repo": "ccstatusline",
      "avatar": "https://github.com/sirmalloc.png",
      "repo_link": "https://github.com/sirmalloc/ccstatusline",
      "desc": "🚀 Beautiful highly customizable statusline for Claude Code CLI with powerline support, themes, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 221,
      "added_stars": 598,
      "builtBy": [
        {
          "username": "sirmalloc",
          "href": "https://github.com/sirmalloc",
          "avatar": "https://avatars.githubusercontent.com/u/2913994"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jackall3n",
          "href": "https://github.com/jackall3n",
          "avatar": "https://avatars.githubusercontent.com/u/38332643"
        },
        {
          "username": "alex-on-java",
          "href": "https://github.com/alex-on-java",
          "avatar": "https://avatars.githubusercontent.com/u/10196978"
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
      "forks": 2016,
      "added_stars": 5611,
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
      "author": "InsForge",
      "repo": "InsForge",
      "avatar": "https://github.com/InsForge.png",
      "repo_link": "https://github.com/InsForge/InsForge",
      "desc": "Give agents everything they need to ship fullstack apps. The backend built for agentic development.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 509,
      "added_stars": 2482,
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
      "author": "google",
      "repo": "A2UI",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/A2UI",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1006,
      "added_stars": 1276,
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
      "forks": 191,
      "added_stars": 807,
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
      "author": "shadcn-ui",
      "repo": "ui",
      "avatar": "https://github.com/shadcn-ui.png",
      "repo_link": "https://github.com/shadcn-ui/ui",
      "desc": "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8254,
      "added_stars": 897,
      "builtBy": [
        {
          "username": "shadcn",
          "href": "https://github.com/shadcn",
          "avatar": "https://avatars.githubusercontent.com/u/124599"
        },
        {
          "username": "kapishdima",
          "href": "https://github.com/kapishdima",
          "avatar": "https://avatars.githubusercontent.com/u/23422228"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 2898,
      "added_stars": 131,
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
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1771,
      "added_stars": 3014,
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1020,
      "added_stars": 4980,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 699,
      "added_stars": 1654,
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
      "forks": 167,
      "added_stars": 697,
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
      "forks": 1205,
      "added_stars": 8478,
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
      "forks": 492,
      "added_stars": 2152,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8116,
      "added_stars": 892,
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
      "author": "m1k1o",
      "repo": "neko",
      "avatar": "https://github.com/m1k1o.png",
      "repo_link": "https://github.com/m1k1o/neko",
      "desc": "A self hosted virtual browser that runs in docker and uses WebRTC.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1414,
      "added_stars": 3001,
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
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 315,
      "added_stars": 383,
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
      "added_stars": 1028,
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
      "forks": 2621,
      "added_stars": 2307,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 15051,
      "added_stars": 3201,
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
      "author": "charmbracelet",
      "repo": "bubbletea",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/bubbletea",
      "desc": "A powerful little TUI framework 🏗",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1140,
      "added_stars": 1421,
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
      "author": "mark3labs",
      "repo": "mcp-go",
      "avatar": "https://github.com/mark3labs.png",
      "repo_link": "https://github.com/mark3labs/mcp-go",
      "desc": "A Go implementation of the Model Context Protocol (MCP), enabling seamless integration between LLM applications and external data sources and tools.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 797,
      "added_stars": 226,
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
      "forks": 305,
      "added_stars": 521,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1963,
      "added_stars": 548,
      "builtBy": [
        {
          "username": "zricethezav",
          "href": "https://github.com/zricethezav",
          "avatar": "https://avatars.githubusercontent.com/u/15034943"
        },
        {
          "username": "rgmz",
          "href": "https://github.com/rgmz",
          "avatar": "https://avatars.githubusercontent.com/u/32133502"
        },
        {
          "username": "w0rmr1d3r",
          "href": "https://github.com/w0rmr1d3r",
          "avatar": "https://avatars.githubusercontent.com/u/20722014"
        },
        {
          "username": "petegallagher",
          "href": "https://github.com/petegallagher",
          "avatar": "https://avatars.githubusercontent.com/u/688331"
        },
        {
          "username": "bufferoverflow",
          "href": "https://github.com/bufferoverflow",
          "avatar": "https://avatars.githubusercontent.com/u/378909"
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
      "added_stars": 881,
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
      "author": "grafana",
      "repo": "mcp-grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/mcp-grafana",
      "desc": "MCP server for Grafana",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 300,
      "added_stars": 262,
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
      "forks": 4463,
      "added_stars": 29769,
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
      "forks": 3844,
      "added_stars": 11827,
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
      "forks": 1081,
      "added_stars": 12986,
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
          "username": "MaojiaSheng",
          "href": "https://github.com/MaojiaSheng",
          "avatar": "https://avatars.githubusercontent.com/u/211460083"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 561,
      "added_stars": 8080,
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
      "forks": 654,
      "added_stars": 7444,
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
      "forks": 684,
      "added_stars": 3846,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1621,
      "added_stars": 8191,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1759,
      "added_stars": 9297,
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
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 783,
      "added_stars": 4299,
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
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3056,
      "added_stars": 7149,
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
      "forks": 2352,
      "added_stars": 3285,
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
      "forks": 448,
      "added_stars": 3911,
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
      "forks": 8579,
      "added_stars": 3676,
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
      "forks": 321,
      "added_stars": 859,
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
      "author": "ZhuLinsen",
      "repo": "daily_stock_analysis",
      "avatar": "https://github.com/ZhuLinsen.png",
      "repo_link": "https://github.com/ZhuLinsen/daily_stock_analysis",
      "desc": "LLM驱动的 A/H/美股智能分析器：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送，零成本定时运行，纯白嫖. LLM-powered stock analysis system for A/H/US markets.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 23721,
      "added_stars": 11041,
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
      "author": "databricks-solutions",
      "repo": "ai-dev-kit",
      "avatar": "https://github.com/databricks-solutions.png",
      "repo_link": "https://github.com/databricks-solutions/ai-dev-kit",
      "desc": "Databricks Toolkit for Coding Agents provided by Field Engineering",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 184,
      "added_stars": 587,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 843,
      "added_stars": 2337,
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
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 44562,
      "added_stars": 13787,
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
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1236,
      "added_stars": 5071,
      "builtBy": [
        {
          "username": "tobinsouth",
          "href": "https://github.com/tobinsouth",
          "avatar": "https://avatars.githubusercontent.com/u/32489862"
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
        },
        {
          "username": "dicksontsai",
          "href": "https://github.com/dicksontsai",
          "avatar": "https://avatars.githubusercontent.com/u/3757768"
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
      "forks": 7367,
      "added_stars": 3998,
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
      "author": "chenyme",
      "repo": "grok2api",
      "avatar": "https://github.com/chenyme.png",
      "repo_link": "https://github.com/chenyme/grok2api",
      "desc": "基于 FastAPI 构建的 Grok2API，全面适配 OpenAI 兼容的调用格式，支持流式/非流式对话、图像生成、图像编辑、视频生成、工具调用、语音聊天、一键NSFW、号池并发与自动负载均衡一体化。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1109,
      "added_stars": 1652,
      "builtBy": [
        {
          "username": "chenyme",
          "href": "https://github.com/chenyme",
          "avatar": "https://avatars.githubusercontent.com/u/118253778"
        },
        {
          "username": "lijirou12",
          "href": "https://github.com/lijirou12",
          "avatar": "https://avatars.githubusercontent.com/u/121499347"
        },
        {
          "username": "piexian",
          "href": "https://github.com/piexian",
          "avatar": "https://avatars.githubusercontent.com/u/64474352"
        },
        {
          "username": "qoomezhu",
          "href": "https://github.com/qoomezhu",
          "avatar": "https://avatars.githubusercontent.com/u/194384232"
        },
        {
          "username": "timerring",
          "href": "https://github.com/timerring",
          "avatar": "https://avatars.githubusercontent.com/u/89397553"
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
      "title": "What's in your headphones when you code? 🎧",
      "description": "Let's revisit this conversation!  What music, soundtracks, podcasts, etc do you listen to and is...",
      "url": "https://dev.to/ben/whats-in-your-headphones-when-you-code-51i4",
      "tags": "discuss, watercooler",
      "reactions": 66,
      "comments": 46,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "How to Stop Babysitting Your AI Agents",
      "description": "Define focused LLM agents in plain text. Run them from anywhere. Chain them with pipes.",
      "url": "https://dev.to/jrswab/how-to-stop-babysitting-your-ai-agents-4376",
      "tags": "llmagents, cli, devtools, go",
      "reactions": 44,
      "comments": 6,
      "reading_time": 3,
      "author": "jrswab"
    },
    {
      "title": "I Think a Lot of Developers Are Quietly Grieving the Old Internet",
      "description": "I think a lot of developers are carrying a kind of grief right now, but rarely naming it.  Not...",
      "url": "https://dev.to/the_nortern_dev/i-think-a-lot-of-developers-are-quietly-grieving-the-old-internet-3d8",
      "tags": "discuss, webdev, programming, culture",
      "reactions": 158,
      "comments": 115,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "When Projects Fail: Why Companies Should Treat Open Source as Infrastructure",
      "description": "Maintaining an open source project is hard. It requires managing a group of people who are largely...",
      "url": "https://dev.to/katcosgrove/when-projects-fail-why-companies-should-treat-open-source-as-infrastructure-32c0",
      "tags": "opensource, security, kubernetes, devops",
      "reactions": 43,
      "comments": 3,
      "reading_time": 4,
      "author": "katcosgrove"
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
      "title": "Confident and Wrong",
      "description": "For a long time, I have been seeing AI in coding as something that enables me, amplifies my...",
      "url": "https://dev.to/maxrimue/confident-and-wrong-107o",
      "tags": "ai, swift, programming, learning",
      "reactions": 39,
      "comments": 3,
      "reading_time": 7,
      "author": "maxrimue"
    },
    {
      "title": "Notion MCP Challenge: Badges Revealed + A New Prize! 🏆 😻",
      "description": "The Notion MCP Challenge badges have landed! Aren't they just lovely?    To get one of these badges...",
      "url": "https://dev.to/devteam/notion-mcp-challenge-badges-revealed-a-new-prize-324k",
      "tags": "devchallenge, notionchallenge",
      "reactions": 25,
      "comments": 8,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Supercharge your workflow with AI dev tools",
      "description": "As developers, we’re no longer just writing lines of code; we’re orchestrating systems. The...",
      "url": "https://dev.to/googleai/supercharge-your-workflow-with-ai-dev-tools-199e",
      "tags": "googlecloud, serverless, ai, productivity",
      "reactions": 33,
      "comments": 1,
      "reading_time": 2,
      "author": "martinomander"
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
      "title": "FE/BE - Unite Them!",
      "description": "tl;dr;   Teams should agree upon and understand the source of truth domain, working together and...",
      "url": "https://dev.to/danieluhl/febe-unite-them-3kh3",
      "tags": "",
      "reactions": 33,
      "comments": 0,
      "reading_time": 3,
      "author": "danieluhl"
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
      "title": "Turning Chinese Character Structure into a Strategy Game",
      "url": "https://store.steampowered.com/app/4218330/WordJoy/",
      "score": -1,
      "comments": 1,
      "tags": [
        "games"
      ],
      "id": "8e6kdv"
    },
    {
      "title": "No Semicolons Needed",
      "url": "https://terts.dev/blog/no-semicolons-needed/",
      "score": 8,
      "comments": 1,
      "tags": [
        "plt"
      ],
      "id": "09wmcz"
    },
    {
      "title": "Data is Code (2016)",
      "url": "https://haskellforall.com/2016/04/data-is-code",
      "score": 1,
      "comments": 0,
      "tags": [
        "plt"
      ],
      "id": "oeqmbx"
    },
    {
      "title": "The 49MB Web Page",
      "url": "https://thatshubham.com/blog/news-audit",
      "score": 1,
      "comments": 0,
      "tags": [
        "web"
      ],
      "id": "vba3az"
    },
    {
      "title": "CVE-2026-3888: Snap Flaw, Local Privilege Escalation to Root",
      "url": "https://blog.qualys.com/vulnerabilities-threat-research/2026/03/17/cve-2026-3888-important-snap-flaw-enables-local-privilege-escalation-to-root",
      "score": 2,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "ccys1t"
    },
    {
      "title": "TOR-Based Cryptojacking Attack Expands Through Misconfigured Docker APIs",
      "url": "https://thehackernews.com/2025/09/tor-based-cryptojacking-attack-expands.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "xyqdgj"
    },
    {
      "title": "The Flawed Ephemeral Software Hypothesis",
      "url": "https://www.blackhc.net/essays/future_of_software/",
      "score": 1,
      "comments": 0,
      "tags": [
        "ai",
        "vibecoding"
      ],
      "id": "hhob5r"
    },
    {
      "title": "Very lightweight NixOS router/server flow data collector",
      "url": "https://discourse.nixos.org/t/very-lightweight-nixos-router-server-flow-data-collector/76309",
      "score": 5,
      "comments": 0,
      "tags": [
        "linux",
        "networking"
      ],
      "id": "tioyif"
    },
    {
      "title": "Nvidia greenboost: transparently extend GPU VRAM using system RAM/NVMe",
      "url": "https://gitlab.com/IsolatedOctopi/nvidia_greenboost",
      "score": 8,
      "comments": 1,
      "tags": [
        "ai",
        "release",
        "vibecoding"
      ],
      "id": "vuk8lc"
    },
    {
      "title": "How Electron went Wayland-native, and what it means for your apps",
      "url": "https://electronjs.org/blog/tech-talk-wayland",
      "score": 1,
      "comments": 0,
      "tags": [
        "javascript",
        "linux",
        "web"
      ],
      "id": "ntx1nw"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "signa11",
      "descendants": 70,
      "id": 47434047,
      "kids": [
        47435238,
        47434846,
        47435680,
        47435666,
        47435511,
        47435377,
        47435430,
        47435306,
        47435556,
        47435246,
        47435677,
        47435617,
        47435539,
        47434754,
        47434752,
        47435285,
        47435236,
        47435195,
        47435085,
        47434651,
        47434817,
        47435547,
        47435056,
        47435538,
        47434993,
        47435263,
        47434829,
        47435402,
        47435596
      ],
      "score": 169,
      "time": 1773886997,
      "title": "A sufficiently detailed spec is code",
      "type": "story",
      "url": "https://haskellforall.com/2026/03/a-sufficiently-detailed-spec-is-code"
    },
    {
      "by": "staticvar",
      "descendants": 27,
      "id": 47434024,
      "kids": [
        47435659,
        47434964,
        47435574,
        47434751,
        47434399,
        47435461,
        47434984,
        47435214,
        47434780,
        47434678,
        47434503,
        47434384,
        47435153,
        47434900,
        47434848,
        47434385,
        47434896
      ],
      "score": 126,
      "time": 1773886834,
      "title": "Cook: A simple CLI for orchestrating Claude Code",
      "type": "story",
      "url": "https://rjcorwin.github.io/cook/"
    },
    {
      "by": "dsr12",
      "descendants": 35,
      "id": 47435156,
      "kids": [
        47435462,
        47435429,
        47435520,
        47435610,
        47435383,
        47435371,
        47435622,
        47435485,
        47435358,
        47435568,
        47435650,
        47435399,
        47435349
      ],
      "score": 54,
      "time": 1773896456,
      "title": "What 81,000 people want from AI",
      "type": "story",
      "url": "https://www.anthropic.com/features/81k-interviews"
    },
    {
      "by": "mmastrac",
      "descendants": 48,
      "id": 47388658,
      "kids": [
        47432620,
        47433081,
        47432379,
        47432863,
        47432995,
        47432495,
        47433302,
        47432452,
        47432046,
        47432312,
        47434143,
        47433708,
        47432696,
        47391321,
        47435164,
        47395028,
        47432707,
        47433028,
        47432071
      ],
      "score": 248,
      "time": 1773590349,
      "title": "Nvidia greenboost: transparently extend GPU VRAM using system RAM/NVMe",
      "type": "story",
      "url": "https://gitlab.com/IsolatedOctopi/nvidia_greenboost"
    },
    {
      "by": "Stwerner",
      "descendants": 157,
      "id": 47431237,
      "kids": [
        47432695,
        47435655,
        47432734,
        47431841,
        47432539,
        47431982,
        47435433,
        47435507,
        47435339,
        47419472,
        47435318,
        47434523,
        47434714,
        47433423,
        47419474,
        47433641,
        47432795,
        47431909,
        47433275,
        47434045,
        47419608,
        47419751,
        47424659,
        47419372,
        47433709,
        47419211,
        47432877,
        47431872,
        47433614,
        47433161,
        47433150,
        47432254,
        47419274,
        47419457,
        47419212,
        47433064,
        47434220,
        47419632,
        47431522,
        47419596,
        47433061,
        47419245,
        47433084,
        47435583,
        47435580,
        47432284,
        47433284,
        47432043,
        47433382,
        47432465
      ],
      "score": 275,
      "text": "As an experiment I started asking Claude to explain things to me with a fiction story and it ended up being really good, so I started seeing how far I could take it and what it would take to polish it enough to share publicly.<p>Over the last couple months, I&#x27;ve been building world bibles, writing and visual style guides, and other documents for this project… think the fiction equivalent of all the markdown files we use for agentic development now. After that, this was about two weeks of additional polish work to cut out a lot of fluff and a lot of the LLM-isms. Happy to answer any questions about the process too if that would be interesting to anybody.",
      "time": 1773866754,
      "title": "Warranty Void If Regenerated",
      "type": "story",
      "url": "https://nearzero.software/p/warranty-void-if-regenerated"
    },
    {
      "by": "matthest",
      "descendants": 504,
      "id": 47433058,
      "kids": [
        47433792,
        47433166,
        47433130,
        47433113,
        47433594,
        47433147,
        47433198,
        47435392,
        47433670,
        47434519,
        47434191,
        47433135,
        47435420,
        47434773,
        47433146,
        47434978,
        47434763,
        47433224,
        47434276,
        47433259,
        47433149,
        47435197,
        47433434,
        47433691,
        47433379,
        47434885,
        47434983,
        47433695,
        47433758,
        47434434,
        47433332,
        47435325,
        47433172,
        47433933,
        47434409,
        47433168,
        47433588,
        47433659,
        47433652,
        47435448,
        47433258,
        47433249,
        47433899,
        47434432,
        47434186,
        47433102,
        47433210,
        47433743,
        47433169,
        47433987
      ],
      "score": 461,
      "time": 1773879339,
      "title": "Austin’s surge of new housing construction drove down rents",
      "type": "story",
      "url": "https://www.pew.org/en/research-and-analysis/articles/2026/03/18/austins-surge-of-new-housing-construction-drove-down-rents"
    },
    {
      "by": "zeristor",
      "descendants": 89,
      "id": 47386703,
      "kids": [
        47430372,
        47435571,
        47430389,
        47431833,
        47432086,
        47428290,
        47434823,
        47428790,
        47429846,
        47428141,
        47430780,
        47434014,
        47428432,
        47421587,
        47429872,
        47428206,
        47430332,
        47428143,
        47431239,
        47428442,
        47430919,
        47431991,
        47430603,
        47428134,
        47433419
      ],
      "score": 486,
      "time": 1773577214,
      "title": "OpenRocket",
      "type": "story",
      "url": "https://openrocket.info/"
    },
    {
      "by": "surprisetalk",
      "descendants": 2,
      "id": 47434732,
      "kids": [
        47435625,
        47435192
      ],
      "score": 26,
      "time": 1773892503,
      "title": "Conway's Game of Life, in real life",
      "type": "story",
      "url": "https://lcamtuf.substack.com/p/conways-game-of-life-in-real-life"
    },
    {
      "by": "chaisan",
      "descendants": 15,
      "id": 47433265,
      "kids": [
        47434007,
        47433930,
        47435637,
        47435388,
        47434202,
        47434778,
        47435216,
        47434695
      ],
      "score": 89,
      "time": 1773880832,
      "title": "Autoresearch for SAT Solvers",
      "type": "story",
      "url": "https://github.com/iliazintchenko/agent-sat"
    },
    {
      "by": "vismit2000",
      "descendants": 427,
      "id": 47423647,
      "kids": [
        47427687,
        47427730,
        47425049,
        47430469,
        47426781,
        47425553,
        47426304,
        47424167,
        47431167,
        47427836,
        47424923,
        47431376,
        47428763,
        47424282,
        47428668,
        47427292,
        47425020,
        47426186,
        47435361,
        47423907,
        47426546,
        47424306,
        47426776,
        47424436,
        47434542,
        47425300,
        47427222,
        47427575,
        47427683,
        47434938,
        47429389,
        47424666,
        47427863,
        47427798,
        47426885,
        47424104,
        47432817,
        47432694,
        47432402,
        47427700,
        47426191,
        47429402,
        47424004,
        47427179,
        47434942,
        47426535,
        47426366,
        47425648,
        47429517,
        47426803,
        47425024,
        47430852,
        47426247,
        47424457,
        47424522,
        47424101,
        47426602,
        47432479,
        47424896,
        47426539,
        47427997,
        47433533,
        47425529,
        47426528,
        47424180,
        47432394,
        47426357,
        47430381,
        47424489,
        47426628,
        47426485,
        47424251,
        47426261,
        47429981,
        47425744,
        47424875,
        47426367,
        47431781,
        47431127,
        47431541,
        47424464,
        47428759,
        47431201,
        47434128,
        47432631,
        47424618,
        47424099,
        47426701,
        47426883,
        47427587,
        47424997,
        47426306,
        47427881,
        47424401,
        47425660,
        47424030
      ],
      "score": 908,
      "time": 1773827994,
      "title": "Rob Pike’s Rules of Programming (1989)",
      "type": "story",
      "url": "https://www.cs.unc.edu/~stotts/COMP590-059-f24/robsrules.html"
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
      "reactions": 68,
      "comments": 30,
      "reading_time": 5,
      "author": "sylwia-lask"
    },
    {
      "title": "AI Is Creating a New Kind of Tech Debt — And Nobody Is Talking About It",
      "description": "Six months ago, my team was celebrating.  We had shipped more features in Q3 than in the entire...",
      "url": "https://dev.to/harsh2644/ai-is-creating-a-new-kind-of-tech-debt-and-nobody-is-talking-about-it-3pm6",
      "tags": "ai, webdev, javascript, career",
      "reactions": 41,
      "comments": 25,
      "reading_time": 9,
      "author": "harsh2644"
    },
    {
      "title": "Golden Handcuffs Don't Feel Like Handcuffs",
      "description": "I was sitting in my home office on a Tuesday afternoon with a blank editor open and nothing in my...",
      "url": "https://dev.to/jonoherrington/golden-handcuffs-dont-feel-like-handcuffs-2cdi",
      "tags": "engineering, leadership, career, burnout",
      "reactions": 25,
      "comments": 8,
      "reading_time": 6,
      "author": "jonoherrington"
    },
    {
      "title": "The Mental Model I Use Before Touching Any Codebase",
      "description": "After 25+ years in the IT industry, here's the structured thinking framework I use before writing a single line of code — and why skipping it is the most expensive mistake junior developers make.",
      "url": "https://dev.to/lessonsfromproduction/the-mental-model-i-use-before-touching-any-codebase-10bj",
      "tags": "webdev, beginners, career, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "lessonsfromproduction"
    },
    {
      "title": "I Came Back to Kotlin for KMP — Here’s What Broke First",
      "description": "Part 1 — Why KMP, Why Now, and the First Walls   I've been building mobile apps since 2011....",
      "url": "https://dev.to/rarroyo00/i-came-back-to-kotlin-for-kmp-heres-what-broke-first-hfn",
      "tags": "programming, productivity, career, kotlin",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "rarroyo00"
    },
    {
      "title": "I built a feature that appears on its own — and now it is hard to keep up with the job matches",
      "description": "Neural Void Walker has a feature called the Synthetic Profile. You don't configure it. You don't turn...",
      "url": "https://dev.to/tinonet/i-built-a-feature-that-appears-on-its-own-and-now-it-is-hard-to-keep-up-with-the-job-matches-27e2",
      "tags": "ai, jobsearch, career, machinelearning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "tinonet"
    },
    {
      "title": "You're Too Critical to Move Teams",
      "description": "One of the best engineers I ever managed came to me in a one-on-one and said   \"I want to try...",
      "url": "https://dev.to/jonoherrington/youre-too-critical-to-move-teams-17nl",
      "tags": "engineering, leadership, career, retention",
      "reactions": 4,
      "comments": 0,
      "reading_time": 6,
      "author": "jonoherrington"
    },
    {
      "title": "How Software Development Changes in the AI Era",
      "description": "TL;DR    AI drastically reduces implementation cost, but it does not make software...",
      "url": "https://dev.to/tom-takeru/how-software-development-changes-in-the-ai-era-2bdo",
      "tags": "ai, softwaredevelopment, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "tom-takeru"
    },
    {
      "title": "From Curiosity to Creation: My Tech Journey",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience           My Journey in...",
      "url": "https://dev.to/syedahmershah/from-curiosity-to-creation-my-tech-journey-3713",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "syedahmershah"
    },
    {
      "title": "I Built a SaaS Solo. Then Someone Trademarked My Name and Tried to Steal It.",
      "description": "I'm George.   I'm a solo developer from the UK.   Last year I started building ApplyArc —&gt; an...",
      "url": "https://dev.to/buildwithgeorge/i-built-a-saas-solo-then-someone-trademarked-my-name-and-tried-to-steal-it-b8b",
      "tags": "startup, webdev, career, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "buildwithgeorge"
    }
  ]
}
```

