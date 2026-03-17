# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-17 07:18:56 UTC

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
      "forks": 756,
      "added_stars": 7084,
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
      "forks": 1463,
      "added_stars": 5792,
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
      "desc": "Bash is all you need - A nano Claude Code–like agent, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5058,
      "added_stars": 4705,
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
      "author": "FlorianBruniaux",
      "repo": "claude-code-ultimate-guide",
      "avatar": "https://github.com/FlorianBruniaux.png",
      "repo_link": "https://github.com/FlorianBruniaux/claude-code-ultimate-guide",
      "desc": "A tremendous feat of documentation, this guide covers Claude Code from beginner to power user, with production-ready templates for Claude Code features, guides on agentic workflows, and a lot of great learning materials, including quizzes and a handy \"cheatsheet\". Whether it's the \"ultimate\" guide to Claude Code will be up to the reader :)",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 273,
      "added_stars": 510,
      "builtBy": [
        {
          "username": "FlorianBruniaux",
          "href": "https://github.com/FlorianBruniaux",
          "avatar": "https://avatars.githubusercontent.com/u/3902606"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 958,
      "added_stars": 1134,
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
      "author": "backnotprop",
      "repo": "plannotator",
      "avatar": "https://github.com/backnotprop.png",
      "repo_link": "https://github.com/backnotprop/plannotator",
      "desc": "Annotate and review coding agent plans and code diffs visually, share with your team, send feedback to agents with one click.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 190,
      "added_stars": 659,
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
      "author": "yikart",
      "repo": "AiToEarn",
      "avatar": "https://github.com/yikart.png",
      "repo_link": "https://github.com/yikart/AiToEarn",
      "desc": "Let's use AI to Earn!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2466,
      "added_stars": 516,
      "builtBy": [
        {
          "username": "niuwenzheng",
          "href": "https://github.com/niuwenzheng",
          "avatar": "https://avatars.githubusercontent.com/u/30893307"
        },
        {
          "username": "gaozhenqiang",
          "href": "https://github.com/gaozhenqiang",
          "avatar": "https://avatars.githubusercontent.com/u/88360790"
        },
        {
          "username": "Yuuki-Sakura",
          "href": "https://github.com/Yuuki-Sakura",
          "avatar": "https://avatars.githubusercontent.com/u/54829481"
        },
        {
          "username": "gao1234-prog",
          "href": "https://github.com/gao1234-prog",
          "avatar": "https://avatars.githubusercontent.com/u/208151450"
        },
        {
          "username": "whh2333",
          "href": "https://github.com/whh2333",
          "avatar": "https://avatars.githubusercontent.com/u/70197018"
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
      "forks": 214,
      "added_stars": 265,
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
      "author": "shadcn-ui",
      "repo": "ui",
      "avatar": "https://github.com/shadcn-ui.png",
      "repo_link": "https://github.com/shadcn-ui/ui",
      "desc": "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8211,
      "added_stars": 901,
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
      "author": "sirmalloc",
      "repo": "ccstatusline",
      "avatar": "https://github.com/sirmalloc.png",
      "repo_link": "https://github.com/sirmalloc/ccstatusline",
      "desc": "🚀 Beautiful highly customizable statusline for Claude Code CLI with powerline support, themes, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 211,
      "added_stars": 505,
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
      "author": "web-infra-dev",
      "repo": "midscene",
      "avatar": "https://github.com/web-infra-dev.png",
      "repo_link": "https://github.com/web-infra-dev/midscene",
      "desc": "AI-powered, vision-driven UI automation for every platform.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 901,
      "added_stars": 164,
      "builtBy": [
        {
          "username": "quanru",
          "href": "https://github.com/quanru",
          "avatar": "https://avatars.githubusercontent.com/u/11739753"
        },
        {
          "username": "yuyutaotao",
          "href": "https://github.com/yuyutaotao",
          "avatar": "https://avatars.githubusercontent.com/u/167746126"
        },
        {
          "username": "zhoushaw",
          "href": "https://github.com/zhoushaw",
          "avatar": "https://avatars.githubusercontent.com/u/27547179"
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
      "forks": 1752,
      "added_stars": 2938,
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
      "forks": 922,
      "added_stars": 4210,
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
      "forks": 696,
      "added_stars": 1617,
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
      "author": "steipete",
      "repo": "gogcli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/gogcli",
      "desc": "Google Suite CLI: Gmail, GCal, GDrive, GContacts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 477,
      "added_stars": 3031,
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
      "author": "github",
      "repo": "gh-aw",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/gh-aw",
      "desc": "GitHub Agentic Workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 296,
      "added_stars": 1330,
      "builtBy": [
        {
          "username": "pelikhan",
          "href": "https://github.com/pelikhan",
          "avatar": "https://avatars.githubusercontent.com/u/4175913"
        },
        {
          "username": "dsyme",
          "href": "https://github.com/dsyme",
          "avatar": "https://avatars.githubusercontent.com/u/7204669"
        },
        {
          "username": "mnkiefer",
          "href": "https://github.com/mnkiefer",
          "avatar": "https://avatars.githubusercontent.com/u/8320933"
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
      "forks": 158,
      "added_stars": 741,
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
      "forks": 483,
      "added_stars": 2100,
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
      "added_stars": 2951,
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
      "forks": 8100,
      "added_stars": 880,
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
      "repo": "glow",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/glow",
      "desc": "Render markdown on the CLI, with pizzazz! 💅🏻",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 609,
      "added_stars": 927,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 15010,
      "added_stars": 3122,
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
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2613,
      "added_stars": 2240,
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
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 Take full control of your VPS with 1Panel. Deploy OpenClaw in one click.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3041,
      "added_stars": 1015,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1958,
      "added_stars": 532,
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
      "added_stars": 502,
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
      "author": "mark3labs",
      "repo": "mcp-go",
      "avatar": "https://github.com/mark3labs.png",
      "repo_link": "https://github.com/mark3labs/mcp-go",
      "desc": "A Go implementation of the Model Context Protocol (MCP), enabling seamless integration between LLM applications and external data sources and tools.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 794,
      "added_stars": 218,
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
      "repo": "bubbletea",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/bubbletea",
      "desc": "A powerful little TUI framework 🏗",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1136,
      "added_stars": 1437,
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
      "forks": 3798,
      "added_stars": 25152,
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
      "forks": 3781,
      "added_stars": 11354,
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
      "forks": 994,
      "added_stars": 12011,
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
      "forks": 552,
      "added_stars": 7950,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1555,
      "added_stars": 9042,
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
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "OpenSandbox is a general-purpose sandbox platform for AI applications, offering multi-language SDKs, unified sandbox APIs, and Docker/Kubernetes runtimes for scenarios like Coding Agents, GUI Agents, Agent Evaluation, AI Code Execution, and RL Training.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 595,
      "added_stars": 6867,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1730,
      "added_stars": 9347,
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
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 436,
      "added_stars": 4068,
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
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 755,
      "added_stars": 4056,
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
      "forks": 2982,
      "added_stars": 6540,
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
      "author": "databricks-solutions",
      "repo": "ai-dev-kit",
      "avatar": "https://github.com/databricks-solutions.png",
      "repo_link": "https://github.com/databricks-solutions/ai-dev-kit",
      "desc": "Databricks Toolkit for Coding Agents provided by Field Engineering",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 177,
      "added_stars": 628,
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
      "author": "fishaudio",
      "repo": "fish-speech",
      "avatar": "https://github.com/fishaudio.png",
      "repo_link": "https://github.com/fishaudio/fish-speech",
      "desc": "SOTA Open Source TTS",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2326,
      "added_stars": 2973,
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
      "forks": 8563,
      "added_stars": 3491,
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
      "forks": 318,
      "added_stars": 825,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 840,
      "added_stars": 2345,
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
      "forks": 44448,
      "added_stars": 13191,
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
      "author": "ZhuLinsen",
      "repo": "daily_stock_analysis",
      "avatar": "https://github.com/ZhuLinsen.png",
      "repo_link": "https://github.com/ZhuLinsen/daily_stock_analysis",
      "desc": "LLM驱动的 A/H/美股智能分析器：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送，零成本定时运行，纯白嫖. LLM-powered stock analysis system for A/H/US markets.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 22360,
      "added_stars": 9852,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1187,
      "added_stars": 4852,
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
      "forks": 1027,
      "added_stars": 1543,
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
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6453,
      "added_stars": 3270,
      "builtBy": [
        {
          "username": "ishaan-jaff",
          "href": "https://github.com/ishaan-jaff",
          "avatar": "https://avatars.githubusercontent.com/u/29436595"
        },
        {
          "username": "krrishdholakia",
          "href": "https://github.com/krrishdholakia",
          "avatar": "https://avatars.githubusercontent.com/u/17561003"
        },
        {
          "username": "yuneng-jiang",
          "href": "https://github.com/yuneng-jiang",
          "avatar": "https://avatars.githubusercontent.com/u/171294688"
        },
        {
          "username": "Sameerlite",
          "href": "https://github.com/Sameerlite",
          "avatar": "https://avatars.githubusercontent.com/u/231518212"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 727,
      "added_stars": 1329,
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
      "title": "Why I Stopped Maintaining .env.example by Hand",
      "url": "https://dev.to/ckmtools/why-i-stopped-maintaining-envexample-by-hand-473j",
      "upvotes": "1",
      "comments": "0",
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
    },
    {
      "title": "JavaScript Performance Benchmarking Tool",
      "url": "https://benchmarkstudio.net",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-10T10:59:11.000Z"
    },
    {
      "title": "My 8-Year-Old Open-Source Project (Neutralino.js) was a Victim of a Major Cyber Attack",
      "url": "https://medium.com/gitconnected/my-8-year-old-open-source-project-was-a-victim-of-a-major-cyber-attack-24af7eb3a82b?sk=e58c8c8d6028a7bc2bba14266f2c5d08",
      "upvotes": "2",
      "comments": "1",
      "created": "2026-03-10T09:41:08.000Z"
    },
    {
      "title": "textlens - All-in-one text analysis for Node.js (readability, sentiment, keywords, zero dependencies)",
      "url": "https://github.com/ckmtools/textlens",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-10T00:52:22.000Z"
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
      "reactions": 74,
      "comments": 65,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-cc9",
      "tags": "discuss, watercooler, jokes",
      "reactions": 44,
      "comments": 20,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "The Firebreak",
      "description": "Go-live day has a very specific energy. There's the final pre-launch checks. DNS propagating, smoke...",
      "url": "https://dev.to/davidisnotnull/the-firebreak-1oej",
      "tags": "devex, productmanagement",
      "reactions": 9,
      "comments": 0,
      "reading_time": 4,
      "author": "davidisnotnull"
    },
    {
      "title": "I built an open-source \"focus group simulator\" that spawns 1,000 AI customers to roast your startup idea",
      "description": "The Problem  Every founder has been there: you spend 3 months building something, launch it, and......",
      "url": "https://dev.to/nghiahsgs/i-built-an-open-source-focus-group-simulator-that-spawns-1000-ai-customers-to-roast-your-startup-1c5o",
      "tags": "webdev, opensource",
      "reactions": 12,
      "comments": 2,
      "reading_time": 2,
      "author": "nghiahsgs"
    },
    {
      "title": "I Built a Browser UI for Claude Code — Here's Why",
      "description": "I started using Claude Code a few months ago. Terminal-first, no nonsense, incredibly powerful. But...",
      "url": "https://dev.to/hamed_farag/i-built-a-browser-ui-for-claude-code-heres-why-4959",
      "tags": "claude, ai, opensource, devex",
      "reactions": 17,
      "comments": 5,
      "reading_time": 8,
      "author": "hamed_farag"
    },
    {
      "title": "Rethinking Architecture in the AI Era — Part 1: Repository Management",
      "description": "This is the first installment of a series on software product architecture for the AI age. There's no...",
      "url": "https://dev.to/iktakahiro/rethinking-architecture-in-the-ai-era-part-1-repository-management-2ia4",
      "tags": "webdev, ai, programming",
      "reactions": 16,
      "comments": 1,
      "reading_time": 4,
      "author": "iktakahiro"
    },
    {
      "title": "How I Built Niobe: An AI Waitress with Gemini Live and Google Cloud",
      "description": "Disclaimer: I created this blog post for the purposes of entering the Gemini Live Agent Challenge...",
      "url": "https://dev.to/provydon/how-i-built-niobe-an-ai-waitress-with-gemini-live-and-google-cloud-2o28",
      "tags": "devchallenge, gemini, googlecloud, showdev",
      "reactions": 9,
      "comments": 0,
      "reading_time": 4,
      "author": "provydon"
    },
    {
      "title": "One regex to match them all",
      "description": "Last year I was building a single-page app with SvelteKit. Nothing fancy—a handful of views,...",
      "url": "https://dev.to/ferderer/one-regex-to-match-them-all-228h",
      "tags": "webdev, javascript, typescript, opensource",
      "reactions": 10,
      "comments": 0,
      "reading_time": 3,
      "author": "ferderer"
    },
    {
      "title": "Backstage logbook: Migrating the Catalog Plugin to the New Frontend System",
      "description": "The Backstage new frontend system support is growing, and I figured I needed to carve out some time to really understand it. I took the Catalog plugin migration, from the legacy frontend system to the new one, as my learning ground to see how all the different customisation points work in practice. Here you'll see my process following the migration, step by step.",
      "url": "https://dev.to/sarabadu/backstage-logbook-migrating-the-catalog-plugin-to-the-new-frontend-system-f6",
      "tags": "backstage, nfs, migrations",
      "reactions": 15,
      "comments": 0,
      "reading_time": 9,
      "author": "sarabadu"
    },
    {
      "title": "The Local AI Powerhouse",
      "description": "Introduction   Keeping up with everything AI-related in the recent months has got me...",
      "url": "https://dev.to/amjadmh73/the-local-ai-powerhouse-28j",
      "tags": "ai, qwen, localllm, gptoss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "amjadmh73"
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
      "title": "A few notes about the MacBook Neo",
      "url": "https://morrick.me/archives/10286",
      "score": 1,
      "comments": 1,
      "tags": [
        "hardware",
        "mac"
      ],
      "id": "wa5ghq"
    },
    {
      "title": "The Silent Struggle: Anxiety in Software Development",
      "url": "https://caio.ca/blog/anxiety-software-development.html",
      "score": 5,
      "comments": 0,
      "tags": [
        "culture",
        "education",
        "practices",
        "science"
      ],
      "id": "3sxwnf"
    },
    {
      "title": "Memory Allocation Strategies",
      "url": "https://www.gingerbill.org/series/memory-allocation-strategies/",
      "score": 4,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "gjmri9"
    },
    {
      "title": "Every layer of review makes you 10x slower",
      "url": "https://apenwarr.ca/log/20260316",
      "score": 8,
      "comments": 1,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "elfva4"
    },
    {
      "title": "Happy Coder: Open Source Mobile and Web client for Codex and Claude Code",
      "url": "https://github.com/slopus/happy",
      "score": 0,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "bsykfc"
    },
    {
      "title": "Mercurial at Google",
      "url": "https://mercurial.paris/download/Mercurial%20at%20Google.pdf",
      "score": 1,
      "comments": 0,
      "tags": [
        "pdf",
        "vcs"
      ],
      "id": "3a3hrj"
    },
    {
      "title": "The Road Not Taken: A World Where IPv4 Evolved",
      "url": "https://owl.billpg.com/ipv4x/",
      "score": 1,
      "comments": 0,
      "tags": [
        "networking"
      ],
      "id": "3ezrbn"
    },
    {
      "title": "Jepsen: MariaDB Galera Cluster 12.1.2",
      "url": "https://jepsen.io/analyses/mariadb-galera-cluster-12.1.2",
      "score": 6,
      "comments": 0,
      "tags": [
        "databases",
        "distributed",
        "testing"
      ],
      "id": "7olqjk"
    },
    {
      "title": "MacDoom for the Macintosh SE/30",
      "url": "https://github.com/retrospectmike/MacDoomSE30",
      "score": 0,
      "comments": 2,
      "tags": [
        "games",
        "retrocomputing"
      ],
      "id": "2no1tw"
    },
    {
      "title": "building a software protection system from first principles",
      "url": "https://seg6.space/posts/software-protection-system/",
      "score": 6,
      "comments": 1,
      "tags": [
        "programming",
        "security"
      ],
      "id": "wskuet"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "smitec",
      "descendants": 84,
      "id": 47408703,
      "kids": [
        47408858,
        47409493,
        47408967,
        47408940,
        47409260,
        47409310,
        47408854,
        47409566,
        47409509,
        47409267,
        47409505,
        47409216,
        47409363,
        47409051,
        47409291,
        47409492,
        47409294,
        47409382,
        47409236,
        47408977,
        47408755,
        47409283,
        47409404,
        47409210,
        47409285,
        47409205,
        47409214,
        47409323,
        47409177,
        47409050,
        47409188,
        47409398,
        47409007,
        47409318,
        47409072,
        47408964,
        47409079,
        47409243,
        47409428,
        47409076,
        47408984,
        47409359,
        47409008,
        47409408,
        47409112,
        47409316,
        47409032,
        47409377,
        47409340,
        47409265,
        47409563,
        47409336,
        47409161,
        47409438,
        47409386,
        47408876,
        47409156,
        47409337
      ],
      "score": 323,
      "time": 1773722382,
      "title": "Kagi Translate now supports LinkedIn Speak as an output language",
      "type": "story",
      "url": "https://translate.kagi.com/?from=en&to=LinkedIn+speak"
    },
    {
      "by": "djoldman",
      "descendants": 288,
      "id": 47406779,
      "kids": [
        47407646,
        47407270,
        47407350,
        47407980,
        47407463,
        47409146,
        47409047,
        47407048,
        47407351,
        47407002,
        47407488,
        47409384,
        47406934,
        47407798,
        47408255,
        47407077,
        47407087,
        47407538,
        47406886,
        47407201,
        47408281,
        47406964,
        47406966,
        47406952,
        47407123,
        47406988,
        47408517,
        47407619,
        47408490,
        47407810,
        47407080,
        47407031,
        47407685,
        47406924,
        47407032,
        47406949,
        47408485,
        47408872,
        47407049,
        47406943,
        47409273
      ],
      "score": 532,
      "time": 1773705755,
      "title": "US SEC preparing to scrap quarterly reporting requirement",
      "type": "story",
      "url": "https://www.reuters.com/business/finance/us-sec-preparing-eliminate-quarterly-reporting-requirement-wsj-says-2026-03-16/"
    },
    {
      "by": "aresant",
      "descendants": 20,
      "id": 47408441,
      "kids": [
        47408931,
        47409419,
        47409168,
        47408726,
        47408992,
        47409450,
        47408856,
        47408847
      ],
      "score": 84,
      "time": 1773720028,
      "title": "Monkey Island for Commodore 64 Ground Up",
      "type": "story",
      "url": "https://pixeldust.se/monkey-island-project"
    },
    {
      "by": "greyface-",
      "descendants": 61,
      "id": 47408205,
      "kids": [
        47408934,
        47409548,
        47408874,
        47408720,
        47408640,
        47408704,
        47409179,
        47408878,
        47409287,
        47408705,
        47409457,
        47408718,
        47408699,
        47408748
      ],
      "score": 139,
      "time": 1773717636,
      "title": "Every layer of review makes you 10x slower",
      "type": "story",
      "url": "https://apenwarr.ca/log/20260316"
    },
    {
      "by": "Poudlardo",
      "descendants": 89,
      "id": 47404796,
      "kids": [
        47407461,
        47406685,
        47405846,
        47405507,
        47405328,
        47407262,
        47406371,
        47406282,
        47408650,
        47406446,
        47406982,
        47405506,
        47405900,
        47405654,
        47409190,
        47407014,
        47407815,
        47405492,
        47406277,
        47406119,
        47408215,
        47405625,
        47406624,
        47409082,
        47408072,
        47405557,
        47407181,
        47406520,
        47407129,
        47406246,
        47405914,
        47405688,
        47405319,
        47406481
      ],
      "score": 427,
      "text": "Lean 4 paper (2021): <a href=\"https:&#x2F;&#x2F;dl.acm.org&#x2F;doi&#x2F;10.1007&#x2F;978-3-030-79876-5_37\" rel=\"nofollow\">https:&#x2F;&#x2F;dl.acm.org&#x2F;doi&#x2F;10.1007&#x2F;978-3-030-79876-5_37</a>",
      "time": 1773694780,
      "title": "Leanstral: Open-source agent for trustworthy coding and formal proof engineering",
      "type": "story",
      "url": "https://mistral.ai/news/leanstral"
    },
    {
      "by": "hahahacorn",
      "descendants": 178,
      "id": 47402640,
      "kids": [
        47404107,
        47402981,
        47402995,
        47403015,
        47405547,
        47404076,
        47408957,
        47404266,
        47403164,
        47406234,
        47404422,
        47403531,
        47403992,
        47404368,
        47403141,
        47404533,
        47403953,
        47402860,
        47402996,
        47404689,
        47404096,
        47403422,
        47403070,
        47404535,
        47402900,
        47402870,
        47402910,
        47403705,
        47402877,
        47404777
      ],
      "score": 406,
      "text": "<a href=\"https:&#x2F;&#x2F;github.com&#x2F;jemalloc&#x2F;jemalloc\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;jemalloc&#x2F;jemalloc</a>",
      "time": 1773684752,
      "title": "Meta’s renewed commitment to jemalloc",
      "type": "story",
      "url": "https://engineering.fb.com/2026/03/02/data-infrastructure/investing-in-infrastructure-metas-renewed-commitment-to-jemalloc/"
    },
    {
      "by": "snide",
      "descendants": 3,
      "id": 47365299,
      "kids": [
        47409557,
        47408985,
        47409121,
        47409268
      ],
      "score": 46,
      "time": 1773413590,
      "title": "Claude Tips for 3D Work",
      "type": "story",
      "url": "https://www.davesnider.com/posts/claude-3d"
    },
    {
      "by": "divbzero",
      "descendants": 1,
      "id": 47360293,
      "kids": [
        47409510
      ],
      "score": 13,
      "time": 1773371768,
      "title": "Gitana 18: the new flying Ultim trimaran",
      "type": "story",
      "url": "https://www.boatnews.com/story/50717/gitana-18-radical-technical-choices-for-the-new-flying-ultim-trimaran"
    },
    {
      "by": "speckx",
      "descendants": 163,
      "id": 47401879,
      "kids": [
        47402616,
        47403009,
        47402914,
        47403304,
        47403090,
        47404681,
        47403582,
        47404898,
        47402938,
        47402607,
        47407393,
        47407832,
        47402510,
        47405602,
        47403014,
        47406463,
        47408616,
        47404425,
        47405001,
        47402948,
        47402571,
        47407343,
        47405742,
        47407727,
        47404259,
        47403413,
        47405392,
        47402952,
        47406490,
        47406090,
        47408345,
        47406636,
        47406329,
        47403755,
        47404407,
        47403011
      ],
      "score": 380,
      "time": 1773681477,
      "title": "The “small web” is bigger than you might think",
      "type": "story",
      "url": "https://kevinboone.me/small_web_is_big.html"
    },
    {
      "by": "rexroad",
      "descendants": 275,
      "id": 47401809,
      "kids": [
        47409560,
        47407989,
        47408513,
        47408200,
        47406622,
        47405783,
        47406464,
        47408838,
        47409322,
        47405916,
        47408553,
        47409514,
        47407240,
        47408889,
        47401825,
        47408068,
        47405985,
        47407152,
        47408402,
        47408025,
        47406970,
        47407190,
        47407991,
        47408608,
        47406124,
        47407595,
        47407946,
        47408337,
        47406682,
        47409063,
        47406791,
        47406916,
        47408026,
        47407228,
        47405843,
        47406903,
        47406861,
        47406687,
        47407330,
        47408067,
        47405903,
        47405861,
        47406632,
        47406728,
        47406754
      ],
      "score": 319,
      "time": 1773681207,
      "title": "The American Healthcare Conundrum",
      "type": "story",
      "url": "https://github.com/rexrodeo/american-healthcare-conundrum"
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
      "title": "I Built a Free Freelance Rate Calculator - Here's Why Most Freelancers Undercharge",
      "description": "The Problem   When I started freelancing, I made the classic mistake: I took my desired...",
      "url": "https://dev.to/_84f82f80221994c2ae/i-built-a-free-freelance-rate-calculator-heres-why-most-freelancers-undercharge-ked",
      "tags": "freelance, productivity, career, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 1,
      "author": "_84f82f80221994c2ae"
    },
    {
      "title": "Mistral Small 4：开源 AI 的三合一革命",
      "description": "Mistral Small 4：开源 AI 的三合一革命    2026 年 3 月 16 日，Mistral AI 发布 Small...",
      "url": "https://dev.to/gary_yan_86eb77d35e0070f5/mistral-small-4kai-yuan-ai-de-san-he-ge-ming-3co4",
      "tags": "career",
      "reactions": 1,
      "comments": 1,
      "reading_time": 1,
      "author": "gary_yan_86eb77d35e0070f5"
    },
    {
      "title": "Git Archaeology #15 — AI Creates Stars, Not Gravity",
      "description": "AI creates stars. But it doesn't create gravity. What happens when code universes experience their first starburst?",
      "url": "https://dev.to/machuz/git-archaeology-15-ai-creates-stars-not-gravity-4i05",
      "tags": "ai, opensource, git, career",
      "reactions": 2,
      "comments": 2,
      "reading_time": 16,
      "author": "machuz"
    },
    {
      "title": "What are your goals for the week? #170",
      "description": "Spring Break is over but now the temp has dropped back to the 30s. There are even some flurries....",
      "url": "https://dev.to/jarvisscript/what-are-your-goals-for-the-week-170-f5a",
      "tags": "career, devjournal, discuss, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 1,
      "author": "jarvisscript"
    },
    {
      "title": "Path of Discovery",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience  A bit personal, a bit all...",
      "url": "https://dev.to/annavi11arrea1/path-of-discovery-1aoi",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "annavi11arrea1"
    },
    {
      "title": "I Had No Idea What Coding Was 6 Months Ago. Here's Everything I Wish Someone Had Told Me.",
      "description": "Six months ago, I Googled \"what is coding\" and got seventeen different answers that all assumed I...",
      "url": "https://dev.to/saishankar_dev/i-had-no-idea-what-coding-was-6-months-ago-heres-everything-i-wish-someone-had-told-me-1m17",
      "tags": "webdev, ai, beginners, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "saishankar_dev"
    },
    {
      "title": "Discussion + Career",
      "description": "AI Promised to Automate the Routine. Instead, It Added a New One.   We were told AI would...",
      "url": "https://dev.to/timmyzinin/discussion-career-c8n",
      "tags": "ai, career, discuss, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "timmyzinin"
    },
    {
      "title": "The Secret Notebook of a Dev",
      "description": "Every developer keeps a private layer of the craft that never makes it into documentation, retros, or...",
      "url": "https://dev.to/narnaiezzsshaa/the-secret-notebook-of-a-dev-1b0i",
      "tags": "career, devjournal, productivity, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "narnaiezzsshaa"
    },
    {
      "title": "hello",
      "description": "Building Connections in the Developer Community   Hey developers! As someone who's been in...",
      "url": "https://dev.to/deepika_sharma_f30addac17/hello-1d88",
      "tags": "startup, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "deepika_sharma_f30addac17"
    },
    {
      "title": "How Open Source Can Grow Your Tech Career – A Handbook for Beginners",
      "description": "Many beginners have heard about open source but it may be confusing at first.  When I first started...",
      "url": "https://dev.to/abdultalha08/how-open-source-can-grow-your-tech-career-a-handbook-for-beginners-544g",
      "tags": "beginners, career, learning, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "abdultalha08"
    }
  ]
}
```

