# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-18 06:39:30 UTC

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
      "forks": 823,
      "added_stars": 7000,
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
      "forks": 1494,
      "added_stars": 5473,
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
      "forks": 5211,
      "added_stars": 5582,
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
      "author": "backnotprop",
      "repo": "plannotator",
      "avatar": "https://github.com/backnotprop.png",
      "repo_link": "https://github.com/backnotprop/plannotator",
      "desc": "Annotate and review coding agent plans and code diffs visually, share with your team, send feedback to agents with one click.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 195,
      "added_stars": 537,
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
      "author": "zhukunpenglinyutong",
      "repo": "idea-claude-code-gui",
      "avatar": "https://github.com/zhukunpenglinyutong.png",
      "repo_link": "https://github.com/zhukunpenglinyutong/idea-claude-code-gui",
      "desc": "IDEA Claude Code GUI Plugin",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 219,
      "added_stars": 368,
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
      "author": "sirmalloc",
      "repo": "ccstatusline",
      "avatar": "https://github.com/sirmalloc.png",
      "repo_link": "https://github.com/sirmalloc/ccstatusline",
      "desc": "🚀 Beautiful highly customizable statusline for Claude Code CLI with powerline support, themes, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 213,
      "added_stars": 561,
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
      "author": "openclaw",
      "repo": "clawhub",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/clawhub",
      "desc": "Skill Directory for OpenClaw",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 972,
      "added_stars": 972,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "sethconvex",
          "href": "https://github.com/sethconvex",
          "avatar": "https://avatars.githubusercontent.com/u/239661579"
        },
        {
          "username": "thewilloftheshadow",
          "href": "https://github.com/thewilloftheshadow",
          "avatar": "https://avatars.githubusercontent.com/u/35580099"
        },
        {
          "username": "magicseth",
          "href": "https://github.com/magicseth",
          "avatar": "https://avatars.githubusercontent.com/u/15504"
        }
      ]
    },
    {
      "author": "clash-verge-rev",
      "repo": "clash-verge-rev",
      "avatar": "https://github.com/clash-verge-rev.png",
      "repo_link": "https://github.com/clash-verge-rev/clash-verge-rev",
      "desc": "A modern GUI client based on Tauri, designed to run in Windows, macOS and Linux for tailored proxy experience",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7534,
      "added_stars": 1837,
      "builtBy": [
        {
          "username": "zzzgydi",
          "href": "https://github.com/zzzgydi",
          "avatar": "https://avatars.githubusercontent.com/u/27361820"
        },
        {
          "username": "Tunglies",
          "href": "https://github.com/Tunglies",
          "avatar": "https://avatars.githubusercontent.com/u/77394545"
        },
        {
          "username": "huzibaca",
          "href": "https://github.com/huzibaca",
          "avatar": "https://avatars.githubusercontent.com/u/179569293"
        },
        {
          "username": "wonfen",
          "href": "https://github.com/wonfen",
          "avatar": "https://avatars.githubusercontent.com/u/96291150"
        },
        {
          "username": "MystiPanda",
          "href": "https://github.com/MystiPanda",
          "avatar": "https://avatars.githubusercontent.com/u/152463842"
        }
      ]
    },
    {
      "author": "nuxt",
      "repo": "nuxt",
      "avatar": "https://github.com/nuxt.png",
      "repo_link": "https://github.com/nuxt/nuxt",
      "desc": "The Full-Stack Vue Framework.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5575,
      "added_stars": 119,
      "builtBy": [
        {
          "username": "danielroe",
          "href": "https://github.com/danielroe",
          "avatar": "https://avatars.githubusercontent.com/u/28706372"
        },
        {
          "username": "pi0",
          "href": "https://github.com/pi0",
          "avatar": "https://avatars.githubusercontent.com/u/5158436"
        },
        {
          "username": "renovate-bot",
          "href": "https://github.com/renovate-bot",
          "avatar": "https://avatars.githubusercontent.com/u/25180681"
        },
        {
          "username": "antfu",
          "href": "https://github.com/antfu",
          "avatar": "https://avatars.githubusercontent.com/u/11247099"
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
      "forks": 503,
      "added_stars": 2803,
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
      "forks": 1001,
      "added_stars": 1479,
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
      "forks": 1763,
      "added_stars": 2981,
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
      "forks": 969,
      "added_stars": 4570,
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
      "forks": 698,
      "added_stars": 1653,
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
      "forks": 163,
      "added_stars": 720,
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
          "username": "DieracDelta",
          "href": "https://github.com/DieracDelta",
          "avatar": "https://avatars.githubusercontent.com/u/13730968"
        },
        {
          "username": "AlanRezende",
          "href": "https://github.com/AlanRezende",
          "avatar": "https://avatars.githubusercontent.com/u/7322595"
        },
        {
          "username": "ruiheng",
          "href": "https://github.com/ruiheng",
          "avatar": "https://avatars.githubusercontent.com/u/1283599"
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
      "forks": 484,
      "added_stars": 2135,
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
      "forks": 1415,
      "added_stars": 2984,
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
      "forks": 8107,
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
      "author": "steipete",
      "repo": "gogcli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/gogcli",
      "desc": "Google Suite CLI: Gmail, GCal, GDrive, GContacts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 478,
      "added_stars": 2620,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "visionik",
          "href": "https://github.com/visionik",
          "avatar": "https://avatars.githubusercontent.com/u/52174"
        },
        {
          "username": "jeanregisser",
          "href": "https://github.com/jeanregisser",
          "avatar": "https://avatars.githubusercontent.com/u/57791"
        },
        {
          "username": "antons",
          "href": "https://github.com/antons",
          "avatar": "https://avatars.githubusercontent.com/u/129705"
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
      "forks": 3047,
      "added_stars": 1022,
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
      "forks": 2617,
      "added_stars": 2267,
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
      "forks": 611,
      "added_stars": 938,
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
      "forks": 311,
      "added_stars": 365,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 15027,
      "added_stars": 3153,
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
      "forks": 1141,
      "added_stars": 1441,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1959,
      "added_stars": 534,
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
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 305,
      "added_stars": 516,
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
      "forks": 2331,
      "added_stars": 133,
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
      "author": "dlvhdr",
      "repo": "gh-dash",
      "avatar": "https://github.com/dlvhdr.png",
      "repo_link": "https://github.com/dlvhdr/gh-dash",
      "desc": "A rich terminal UI for GitHub that doesn't break your flow.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 360,
      "added_stars": 845,
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
      "forks": 4207,
      "added_stars": 27746,
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
      "forks": 3812,
      "added_stars": 11584,
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
      "forks": 1037,
      "added_stars": 12866,
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
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 555,
      "added_stars": 8002,
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
          "username": "abidlabs",
          "href": "https://github.com/abidlabs",
          "avatar": "https://avatars.githubusercontent.com/u/1778297"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 638,
      "added_stars": 6945,
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
      "forks": 657,
      "added_stars": 3753,
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
      "author": "sickn33",
      "repo": "antigravity-awesome-skills",
      "avatar": "https://github.com/sickn33.png",
      "repo_link": "https://github.com/sickn33/antigravity-awesome-skills",
      "desc": "The Ultimate Collection of 1000+ Agentic Skills for Claude Code/Antigravity/Cursor. Battle-tested, high-performance skills for AI agents including official skills from Anthropic and Vercel.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4351,
      "added_stars": 14787,
      "builtBy": [
        {
          "username": "sck000",
          "href": "https://github.com/sck000",
          "avatar": "https://avatars.githubusercontent.com/u/188885273"
        },
        {
          "username": "sickn33",
          "href": "https://github.com/sickn33",
          "avatar": "https://avatars.githubusercontent.com/u/184072420"
        },
        {
          "username": "munir-abbasi",
          "href": "https://github.com/munir-abbasi",
          "avatar": "https://avatars.githubusercontent.com/u/22575093"
        },
        {
          "username": "Mohammad-Faiz-Cloud-Engineer",
          "href": "https://github.com/Mohammad-Faiz-Cloud-Engineer",
          "avatar": "https://avatars.githubusercontent.com/u/205180664"
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
      "forks": 1599,
      "added_stars": 8961,
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
      "forks": 1747,
      "added_stars": 9295,
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
      "forks": 773,
      "added_stars": 4162,
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
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 443,
      "added_stars": 3985,
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
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3018,
      "added_stars": 6788,
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
      "forks": 2339,
      "added_stars": 3115,
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
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8573,
      "added_stars": 3581,
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
      "author": "databricks-solutions",
      "repo": "ai-dev-kit",
      "avatar": "https://github.com/databricks-solutions.png",
      "repo_link": "https://github.com/databricks-solutions/ai-dev-kit",
      "desc": "Databricks Toolkit for Coding Agents provided by Field Engineering",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 181,
      "added_stars": 614,
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
      "author": "anthropics",
      "repo": "claude-code-security-review",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-security-review",
      "desc": "An AI-powered security review GitHub Action using Claude to analyze code changes for security vulnerabilities.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 320,
      "added_stars": 840,
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
      "forks": 22875,
      "added_stars": 10254,
      "builtBy": [
        {
          "username": "ZhuLinsen",
          "href": "https://github.com/ZhuLinsen",
          "avatar": "https://avatars.githubusercontent.com/u/42829555"
        },
        {
          "username": "freesme",
          "href": "https://github.com/freesme",
          "avatar": "https://avatars.githubusercontent.com/u/56824280"
        },
        {
          "username": "massif-01",
          "href": "https://github.com/massif-01",
          "avatar": "https://avatars.githubusercontent.com/u/176381099"
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
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 44517,
      "added_stars": 13527,
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
      "forks": 843,
      "added_stars": 2356,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1213,
      "added_stars": 4946,
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
      "author": "chenyme",
      "repo": "grok2api",
      "avatar": "https://github.com/chenyme.png",
      "repo_link": "https://github.com/chenyme/grok2api",
      "desc": "基于 FastAPI 构建的 Grok2API，全面适配 OpenAI 兼容的调用格式，支持流式/非流式对话、图像生成、图像编辑、视频生成、工具调用、语音聊天、一键NSFW、号池并发与自动负载均衡一体化。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1064,
      "added_stars": 1594,
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
    },
    {
      "author": "mihail911",
      "repo": "modern-software-dev-assignments",
      "avatar": "https://github.com/mihail911.png",
      "repo_link": "https://github.com/mihail911/modern-software-dev-assignments",
      "desc": "Assignments for CS146S: The Modern Software Dev (Stanford University Fall 2025)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 730,
      "added_stars": 1346,
      "builtBy": [
        {
          "username": "mihail911",
          "href": "https://github.com/mihail911",
          "avatar": "https://avatars.githubusercontent.com/u/2789441"
        },
        {
          "username": "febielin",
          "href": "https://github.com/febielin",
          "avatar": "https://avatars.githubusercontent.com/u/133082422"
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
      "title": "Built an open source SVG brand library with 4,700+ icons",
      "url": "https://github.com/glincker/thesvg",
      "upvotes": "1",
      "comments": "0",
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
    },
    {
      "title": "HTML and web page minification benchmarks",
      "url": "https://github.com/j9t/minifier-benchmarks",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-12T15:42:33.000Z"
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
      "title": "I Think a Lot of Developers Are Quietly Grieving the Old Internet",
      "description": "I think a lot of developers are carrying a kind of grief right now, but rarely naming it.  Not...",
      "url": "https://dev.to/the_nortern_dev/i-think-a-lot-of-developers-are-quietly-grieving-the-old-internet-3d8",
      "tags": "discuss, webdev, programming, culture",
      "reactions": 129,
      "comments": 82,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "What's in your headphones when you code? 🎧",
      "description": "Let's revisit this conversation!  What music, soundtracks, podcasts, etc do you listen to and is...",
      "url": "https://dev.to/ben/whats-in-your-headphones-when-you-code-51i4",
      "tags": "discuss, watercooler",
      "reactions": 49,
      "comments": 29,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Announcing the Colab MCP Server: Connect Any AI Agent to Google Colab",
      "description": "When you’re prototyping locally with AI agents like Gemini CLI, Claude Code, or your own agent, their...",
      "url": "https://dev.to/googleai/announcing-the-colab-mcp-server-connect-any-ai-agent-to-google-colab-308o",
      "tags": "cloud, agents, mcp, ai",
      "reactions": 34,
      "comments": 6,
      "reading_time": 3,
      "author": "jmew"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-cc9",
      "tags": "discuss, watercooler, jokes",
      "reactions": 56,
      "comments": 27,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Drop Your Challenge Submission Here",
      "description": "Built something for a DEV Challenge but feel like not enough people saw it?  This post is for exactly...",
      "url": "https://dev.to/axrisi/drop-your-challenge-submission-here-mej",
      "tags": "notionchallenge, weekendchallenge, geminireflections, wecoded",
      "reactions": 42,
      "comments": 25,
      "reading_time": 1,
      "author": "axrisi"
    },
    {
      "title": "Full Circle: Giving My AI's Knowledge Graph a Notion Interface using MCP",
      "description": "This is a submission for the Notion MCP Challenge  When I started building AI tools for my wife, it...",
      "url": "https://dev.to/juandastic/full-circle-giving-my-ais-knowledge-graph-a-notion-interface-using-mcp-2dmp",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 30,
      "comments": 11,
      "reading_time": 5,
      "author": "juandastic"
    },
    {
      "title": "Confident and Wrong",
      "description": "For a long time, I have been seeing AI in coding as something that enables me, amplifies my...",
      "url": "https://dev.to/maxrimue/confident-and-wrong-107o",
      "tags": "ai, swift, programming, learning",
      "reactions": 12,
      "comments": 1,
      "reading_time": 7,
      "author": "maxrimue"
    },
    {
      "title": "I built a cognitive layer for AI agents that learns without LLM calls",
      "description": "The problem   Every time your agent starts a conversation, it starts from zero.  Sure, you...",
      "url": "https://dev.to/teolex2020/i-built-a-cognitive-layer-for-ai-agents-that-learns-without-llm-calls-33no",
      "tags": "ai, memory, rust, python",
      "reactions": 20,
      "comments": 6,
      "reading_time": 2,
      "author": "teolex2020"
    },
    {
      "title": "I Built a Claude Code Agent That Doesn't Need Me Anymore",
      "description": "I gave my AI agent persistent memory and identity. Four months later, it had a life I knew nothing about.",
      "url": "https://dev.to/jkheadley/i-built-a-claude-code-agent-that-doesnt-need-me-anymore-dfm",
      "tags": "ai, opensource, claudecode, typescript",
      "reactions": 7,
      "comments": 1,
      "reading_time": 7,
      "author": "jkheadley"
    },
    {
      "title": "Path of Discovery",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience  A bit personal, a bit all...",
      "url": "https://dev.to/annavi11arrea1/path-of-discovery-1aoi",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 31,
      "comments": 7,
      "reading_time": 4,
      "author": "annavi11arrea1"
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
      "title": "AI - Assassinating Intelligence",
      "url": "https://yashgarg.dev/posts/ai-slop/",
      "score": 5,
      "comments": 1,
      "tags": [
        "rant",
        "vibecoding"
      ],
      "id": "dsi02i"
    },
    {
      "title": "The Most Important Software Innovations",
      "url": "https://dwheeler.com/innovation/innovation.html",
      "score": 6,
      "comments": 6,
      "tags": [
        "historical"
      ],
      "id": "j5m4fq"
    },
    {
      "title": "Language that doesn't stink (2024)",
      "url": "https://buttondown.com/zdsmith/archive/language-that-doesnt-stink/",
      "score": 3,
      "comments": 0,
      "tags": [
        "person",
        "programming"
      ],
      "id": "nqzoyv"
    },
    {
      "title": "First package written in Algol 68 lands in Gentoo",
      "url": "https://jemarch.net/20260205-gentoo-algol68.html",
      "score": 10,
      "comments": 0,
      "tags": [
        "linux"
      ],
      "id": "ldjzqh"
    },
    {
      "title": "Undone Computer Science",
      "url": "https://www.undonecs.org",
      "score": 2,
      "comments": 0,
      "tags": [
        "compsci",
        "event",
        "philosophy"
      ],
      "id": "kdfmxw"
    },
    {
      "title": "hugo2nostr bridge",
      "url": "https://github.com/delirehberi/hugo2nostr",
      "score": 2,
      "comments": 0,
      "tags": [
        "web"
      ],
      "id": "14dsoq"
    },
    {
      "title": "LHCb Collaboration discovers new proton-like particle",
      "url": "https://home.cern/news/news/physics/lhcb-collaboration-discovers-new-proton-particle",
      "score": 7,
      "comments": 0,
      "tags": [
        "science"
      ],
      "id": "u5gqg6"
    },
    {
      "title": "Methods in Languages for Systems Programming (2023)",
      "url": "https://blog.xoria.org/methods/",
      "score": 5,
      "comments": 2,
      "tags": [
        "plt"
      ],
      "id": "8t1bpx"
    },
    {
      "title": "The joy of reading the code",
      "url": "https://www.pdole.ga/p/the-joy-of-reading-the-code",
      "score": 0,
      "comments": 0,
      "tags": [
        "elixir"
      ],
      "id": "fdtvsa"
    },
    {
      "title": "OpenShell: OpenShell is the safe, private runtime for autonomous AI agents",
      "url": "https://github.com/NVIDIA/OpenShell",
      "score": 0,
      "comments": 1,
      "tags": [
        "vibecoding"
      ],
      "id": "ue8e11"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "asukachikaru",
      "descendants": 71,
      "id": 47421442,
      "kids": [
        47422274,
        47421793,
        47422262,
        47422180,
        47421922,
        47422158,
        47422169,
        47422110,
        47422060,
        47422126,
        47422149,
        47421722,
        47421994,
        47422074,
        47422115,
        47422209,
        47422088,
        47421803,
        47422067,
        47421949,
        47421918,
        47422113,
        47422010,
        47421539,
        47421723,
        47421729,
        47421694,
        47421885
      ],
      "score": 155,
      "time": 1773806022,
      "title": "Have a Fucking Website",
      "type": "story",
      "url": "https://www.otherstrangeness.com/2026/03/14/have-a-fucking-website/"
    },
    {
      "by": "mwkaufma",
      "descendants": 47,
      "id": 47416736,
      "kids": [
        47417208,
        47418161,
        47419078,
        47421404,
        47417818,
        47420450,
        47418420,
        47420189,
        47420774,
        47418030,
        47417621,
        47418830,
        47418294,
        47420095,
        47419339,
        47418826,
        47418584,
        47417840,
        47417441,
        47420248,
        47417611,
        47420322,
        47420721
      ],
      "score": 535,
      "text": "<a href=\"https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260317185928&#x2F;https:&#x2F;&#x2F;terathon.com&#x2F;blog&#x2F;decade-slug.html\" rel=\"nofollow\">https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260317185928&#x2F;https:&#x2F;&#x2F;terathon....</a>",
      "time": 1773773990,
      "title": "A Decade of Slug",
      "type": "story",
      "url": "https://terathon.com/blog/decade-slug.html"
    },
    {
      "by": "crtasm",
      "descendants": 220,
      "id": 47413876,
      "kids": [
        47415701,
        47414568,
        47414564,
        47414830,
        47415901,
        47414636,
        47416060,
        47415715,
        47422098,
        47419284,
        47419448,
        47414926,
        47417807,
        47417254,
        47416988,
        47418886,
        47416957,
        47417315,
        47414893,
        47417738,
        47417830,
        47420409,
        47414546,
        47415885,
        47416295,
        47416006,
        47414794,
        47417795,
        47414459
      ],
      "score": 623,
      "time": 1773760589,
      "title": "Microsoft's 'unhackable' Xbox One has been hacked by 'Bliss'",
      "type": "story",
      "url": "https://www.tomshardware.com/video-games/console-gaming/microsofts-unhackable-xbox-one-has-been-hacked-by-bliss-the-2013-console-finally-fell-to-voltage-glitching-allowing-the-loading-of-unsigned-code-at-every-level"
    },
    {
      "by": "iosifnicolae2",
      "descendants": 12,
      "id": 47369883,
      "kids": [
        47421183,
        47421955,
        47422030,
        47420830,
        47421860,
        47421509,
        47421537,
        47421141
      ],
      "score": 152,
      "time": 1773435875,
      "title": "More than 135 open hardware devices flashable with your own firmware",
      "type": "story",
      "url": "https://openhardware.directory"
    },
    {
      "by": "pember",
      "descendants": 46,
      "id": 47418295,
      "kids": [
        47422272,
        47421831,
        47422222,
        47420023,
        47421200,
        47419819,
        47422043,
        47420520,
        47420744,
        47419912,
        47420557,
        47421177,
        47420507,
        47421925,
        47420946,
        47420483,
        47420777,
        47418496,
        47421155
      ],
      "score": 273,
      "time": 1773781466,
      "title": "Mistral AI Releases Forge",
      "type": "story",
      "url": "https://mistral.ai/news/forge"
    },
    {
      "by": "apitman",
      "descendants": 41,
      "id": 47421828,
      "kids": [
        47422075,
        47422237,
        47421984,
        47422087,
        47421890,
        47421979,
        47422207,
        47422271,
        47421959,
        47421972,
        47422245,
        47421889,
        47422214,
        47422159,
        47422154,
        47422041
      ],
      "score": 60,
      "time": 1773811082,
      "title": "SSH has no Host header",
      "type": "story",
      "url": "https://blog.exe.dev/ssh-host-header"
    },
    {
      "by": "guidoiaquinti",
      "descendants": 155,
      "id": 47416486,
      "kids": [
        47421339,
        47418043,
        47419401,
        47419755,
        47419522,
        47417799,
        47419727,
        47417919,
        47419735,
        47419994,
        47418261,
        47418293,
        47418415,
        47419777,
        47420055,
        47420612,
        47418902,
        47418448,
        47417993,
        47419817
      ],
      "score": 337,
      "time": 1773772647,
      "title": "Python 3.15's JIT is now back on track",
      "type": "story",
      "url": "https://fidget-spinner.github.io/posts/jit-on-track.html"
    },
    {
      "by": "stefankuehnel",
      "descendants": 141,
      "id": 47417804,
      "kids": [
        47422065,
        47418626,
        47420236,
        47418177,
        47419760,
        47419476,
        47421174,
        47418296,
        47420772,
        47419539,
        47422091,
        47418427,
        47419626,
        47419559,
        47418148,
        47418147,
        47419290,
        47419580,
        47419806,
        47418851,
        47420983,
        47418650,
        47421006,
        47419801,
        47419510,
        47422032,
        47418128,
        47420059,
        47418759,
        47419535,
        47419793,
        47418860,
        47418071,
        47419048,
        47419976,
        47419678,
        47419421,
        47420741,
        47420551,
        47419890,
        47421102,
        47418141,
        47421900,
        47420624,
        47419229
      ],
      "score": 285,
      "time": 1773779019,
      "title": "Get Shit Done: A meta-prompting, context engineering and spec-driven dev system",
      "type": "story",
      "url": "https://github.com/gsd-build/get-shit-done"
    },
    {
      "by": "adammiribyan",
      "descendants": 24,
      "id": 47412569,
      "kids": [
        47420878,
        47422034,
        47420684,
        47420839,
        47420508,
        47421263,
        47420820,
        47420711,
        47421087,
        47420521,
        47420810,
        47420340,
        47421663,
        47420889,
        47422210
      ],
      "score": 114,
      "text": "I wanted to see how fast an isolated code sandbox could start if I never had to boot a fresh VM.<p>So instead of launching a new microVM per execution, I boot Firecracker once with Python and numpy already loaded, then snapshot the full VM state. Every execution after that creates a new KVM VM backed by a `MAP_PRIVATE` mapping of the snapshot memory, so Linux gives me copy-on-write pages automatically.<p>That means each sandbox starts from an already-running Python process inside a real VM, runs the code, and exits.<p>These are real KVM VMs, not containers: separate guest kernel, separate guest memory, separate page tables. When a VM writes to memory, it gets a private copy of that page.<p>The hard part was not CoW itself. The hard part was resuming the snapshotted VM correctly.<p>Rust, Apache 2.0.",
      "time": 1773755024,
      "title": "Show HN: Sub-millisecond VM sandboxes using CoW memory forking",
      "type": "story",
      "url": "https://github.com/adammiribyan/zeroboot"
    },
    {
      "by": "NaOH",
      "descendants": 23,
      "id": 47420432,
      "kids": [
        47422231,
        47421116,
        47421416,
        47420920,
        47421292,
        47421947,
        47421743,
        47421334,
        47421020,
        47420891
      ],
      "score": 70,
      "time": 1773795645,
      "title": "The pleasures of poor product design",
      "type": "story",
      "url": "https://www.inconspicuous.info/p/the-pleasures-of-poor-product-design"
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
      "title": "De Estagiário de TI a ...",
      "description": "A Síndrome do Esforço Invisível Oi, gente! Me chamo Lucas e hoje quero compartilhar um desabafo e uma...",
      "url": "https://dev.to/melanolachef/de-estagiario-de-ti-a--17cf",
      "tags": "career, datascience, braziliandevs, mentalhealth",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "melanolachef"
    },
    {
      "title": "Path of Discovery",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience  A bit personal, a bit all...",
      "url": "https://dev.to/annavi11arrea1/path-of-discovery-1aoi",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 31,
      "comments": 7,
      "reading_time": 4,
      "author": "annavi11arrea1"
    },
    {
      "title": "Git Archaeology #0 — What If Git History Could Tell You Who Your Strongest Engineers Are?",
      "description": "A 3-minute intro to Engineering Impact Score — an OSS CLI that quantifies engineering impact from git log and git blame alone. No API keys, no AI tokens.",
      "url": "https://dev.to/machuz/git-archaeology-0-what-if-git-history-could-tell-you-who-your-strongest-engineers-are-5397",
      "tags": "opensource, productivity, git, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "machuz"
    },
    {
      "title": "The Loneliness of Being the Only Dev in the Room",
      "description": "Nobody writes about this. Maybe because the people who live it are too busy being the only ones who...",
      "url": "https://dev.to/_boweii/the-loneliness-of-being-the-only-dev-in-the-room-fe2",
      "tags": "webdev, career, devjournal, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "_boweii"
    },
    {
      "title": "Beyond the Mnemonic: The 3 Triangles of System Design",
      "description": "If you’re preparing for a System Design interview or leading a new project, stop trying to build the...",
      "url": "https://dev.to/shipra_shakya_5ebf9808e2a/beyond-the-mnemonic-the-3-triangles-of-system-design-be",
      "tags": "systemdesign, developers, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "shipra_shakya_5ebf9808e2a"
    },
    {
      "title": "I Tracked 3,570 Job Listings With an AI. Here's Which Job Boards Are Actually Worth Your Time.",
      "description": "Originally published at nathanhamlett.com        Most job search advice is anecdotal. \"I got hired...",
      "url": "https://dev.to/nathanhamlett/i-tracked-3570-job-listings-with-an-ai-heres-which-job-boards-are-actually-worth-your-time-3bph",
      "tags": "career, jobsearch, ai, productivity",
      "reactions": 1,
      "comments": 1,
      "reading_time": 4,
      "author": "nathanhamlett"
    },
    {
      "title": "The Shift in How We Actually Build Software in 2026",
      "description": "The way developers build software is changing — not in a loud, conference-keynote way, but in the...",
      "url": "https://dev.to/boehner/the-shift-in-how-we-actually-build-software-in-2026-570o",
      "tags": "webdev, productivity, career, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "boehner"
    },
    {
      "title": "Top 12 SRE Jobs March 2026 -- Meta, Google, Nvidia, and more",
      "description": "Senior infrastructure engineers changing jobs in 2026 face an odd problem: the best SRE roles are...",
      "url": "https://dev.to/ethan_finkel_5383afd058ff/top-12-sre-jobs-march-2026-meta-google-nvidia-and-more-3nc4",
      "tags": "career, hiring, devops",
      "reactions": 6,
      "comments": 1,
      "reading_time": 12,
      "author": "ethan_finkel_5383afd058ff"
    },
    {
      "title": "How to Prepare for the Claude Certified Architect Exam: A Technical Roadmap",
      "description": "Anthropic launched its first official technical certification — the Claude Certified Architect,...",
      "url": "https://dev.to/mcrolly/how-to-prepare-for-the-claude-certified-architect-exam-a-technical-roadmap-2jgi",
      "tags": "ai, architecture, career, llm",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "mcrolly"
    },
    {
      "title": "\"The 5:18 Formula: How 5 PTO Days Become 18 Consecutive Days Off in 2026\"",
      "description": "Every January, millions of workers stare at their PTO balance and think: \"That's not enough.\" They're...",
      "url": "https://dev.to/eastkap/the-518-formula-how-5-pto-days-become-18-consecutive-days-off-in-2026-1f39",
      "tags": "productivit, career, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "eastkap"
    }
  ]
}
```

