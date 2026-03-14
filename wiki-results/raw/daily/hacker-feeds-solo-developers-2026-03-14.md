# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-14 07:06:00 UTC

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
      "author": "promptfoo",
      "repo": "promptfoo",
      "avatar": "https://github.com/promptfoo.png",
      "repo_link": "https://github.com/promptfoo/promptfoo",
      "desc": "Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI. Compare performance of GPT, Claude, Gemini, Llama, and more. Simple declarative configs with command line and CI/CD integration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1369,
      "added_stars": 3846,
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
      "author": "moeru-ai",
      "repo": "airi",
      "avatar": "https://github.com/moeru-ai.png",
      "repo_link": "https://github.com/moeru-ai/airi",
      "desc": "💖🧸 Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3292,
      "added_stars": 4392,
      "builtBy": [
        {
          "username": "nekomeowww",
          "href": "https://github.com/nekomeowww",
          "avatar": "https://avatars.githubusercontent.com/u/11081491"
        },
        {
          "username": "shinohara-rin",
          "href": "https://github.com/shinohara-rin",
          "avatar": "https://avatars.githubusercontent.com/u/25588514"
        },
        {
          "username": "LemonNekoGH",
          "href": "https://github.com/LemonNekoGH",
          "avatar": "https://avatars.githubusercontent.com/u/17664845"
        },
        {
          "username": "sumimakito",
          "href": "https://github.com/sumimakito",
          "avatar": "https://avatars.githubusercontent.com/u/5277268"
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
      "forks": 4696,
      "added_stars": 3852,
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
      "forks": 247,
      "added_stars": 893,
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
      "author": "ItzCrazyKns",
      "repo": "Vane",
      "avatar": "https://github.com/ItzCrazyKns.png",
      "repo_link": "https://github.com/ItzCrazyKns/Vane",
      "desc": "Vane is an AI-powered answering engine.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3546,
      "added_stars": 1446,
      "builtBy": [
        {
          "username": "ItzCrazyKns",
          "href": "https://github.com/ItzCrazyKns",
          "avatar": "https://avatars.githubusercontent.com/u/95534749"
        },
        {
          "username": "WanQuanXie",
          "href": "https://github.com/WanQuanXie",
          "avatar": "https://avatars.githubusercontent.com/u/8021137"
        },
        {
          "username": "OmarElKadri",
          "href": "https://github.com/OmarElKadri",
          "avatar": "https://avatars.githubusercontent.com/u/118303871"
        },
        {
          "username": "sjiampojamarn",
          "href": "https://github.com/sjiampojamarn",
          "avatar": "https://avatars.githubusercontent.com/u/18257803"
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
      "forks": 8174,
      "added_stars": 1774,
      "builtBy": [
        {
          "username": "shadcn",
          "href": "https://github.com/shadcn",
          "avatar": "https://avatars.githubusercontent.com/u/124599"
        },
        {
          "username": "iaingymware",
          "href": "https://github.com/iaingymware",
          "avatar": "https://avatars.githubusercontent.com/u/74924033"
        },
        {
          "username": "jaem0629",
          "href": "https://github.com/jaem0629",
          "avatar": "https://avatars.githubusercontent.com/u/91131509"
        }
      ]
    },
    {
      "author": "toeverything",
      "repo": "AFFiNE",
      "avatar": "https://github.com/toeverything.png",
      "repo_link": "https://github.com/toeverything/AFFiNE",
      "desc": "There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4598,
      "added_stars": 1835,
      "builtBy": [
        {
          "username": "himself65",
          "href": "https://github.com/himself65",
          "avatar": "https://avatars.githubusercontent.com/u/14026360"
        },
        {
          "username": "darkskygit",
          "href": "https://github.com/darkskygit",
          "avatar": "https://avatars.githubusercontent.com/u/25152247"
        },
        {
          "username": "pengx17",
          "href": "https://github.com/pengx17",
          "avatar": "https://avatars.githubusercontent.com/u/584378"
        },
        {
          "username": "JimmFly",
          "href": "https://github.com/JimmFly",
          "avatar": "https://avatars.githubusercontent.com/u/102217452"
        },
        {
          "username": "EYHN",
          "href": "https://github.com/EYHN",
          "avatar": "https://avatars.githubusercontent.com/u/13579374"
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
      "forks": 2428,
      "added_stars": 781,
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
      "author": "openclaw",
      "repo": "clawhub",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/clawhub",
      "desc": "Skill Directory for OpenClaw",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 919,
      "added_stars": 1403,
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
          "username": "thewilloftheshadow",
          "href": "https://github.com/thewilloftheshadow",
          "avatar": "https://avatars.githubusercontent.com/u/35580099"
        },
        {
          "username": "sethconvex",
          "href": "https://github.com/sethconvex",
          "avatar": "https://avatars.githubusercontent.com/u/239661579"
        },
        {
          "username": "magicseth",
          "href": "https://github.com/magicseth",
          "avatar": "https://avatars.githubusercontent.com/u/15504"
        }
      ]
    },
    {
      "author": "aidenybai",
      "repo": "react-grab",
      "avatar": "https://github.com/aidenybai.png",
      "repo_link": "https://github.com/aidenybai/react-grab",
      "desc": "Select context for coding agents directly from your website",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 304,
      "added_stars": 695,
      "builtBy": [
        {
          "username": "aidenybai",
          "href": "https://github.com/aidenybai",
          "avatar": "https://avatars.githubusercontent.com/u/38025074"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "ben-million",
          "href": "https://github.com/ben-million",
          "avatar": "https://avatars.githubusercontent.com/u/210088851"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 892,
      "added_stars": 184,
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
    },
    {
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2872,
      "added_stars": 1118,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
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
      "author": "steipete",
      "repo": "gogcli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/gogcli",
      "desc": "Google Suite CLI: Gmail, GCal, GDrive, GContacts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 470,
      "added_stars": 4563,
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
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1724,
      "added_stars": 2816,
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
      "author": "github",
      "repo": "gh-aw",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/gh-aw",
      "desc": "GitHub Agentic Workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 292,
      "added_stars": 2046,
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 822,
      "added_stars": 3433,
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
          "username": "slovx2",
          "href": "https://github.com/slovx2",
          "avatar": "https://avatars.githubusercontent.com/u/2713715"
        },
        {
          "username": "touwaeriol",
          "href": "https://github.com/touwaeriol",
          "avatar": "https://avatars.githubusercontent.com/u/52620633"
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
      "forks": 675,
      "added_stars": 1177,
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
      "author": "entireio",
      "repo": "cli",
      "avatar": "https://github.com/entireio.png",
      "repo_link": "https://github.com/entireio/cli",
      "desc": "Entire is a new developer platform that hooks into your git workflow to capture AI agent sessions on every push, unifying your code with its context and reasoning.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 254,
      "added_stars": 1414,
      "builtBy": [
        {
          "username": "khaong",
          "href": "https://github.com/khaong",
          "avatar": "https://avatars.githubusercontent.com/u/351934"
        },
        {
          "username": "Soph",
          "href": "https://github.com/Soph",
          "avatar": "https://avatars.githubusercontent.com/u/70741"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "gtrrz-victor",
          "href": "https://github.com/gtrrz-victor",
          "avatar": "https://avatars.githubusercontent.com/u/881031"
        },
        {
          "username": "squishykid",
          "href": "https://github.com/squishykid",
          "avatar": "https://avatars.githubusercontent.com/u/2177912"
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
      "forks": 152,
      "added_stars": 742,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 454,
      "added_stars": 592,
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
          "username": "Lucifer-02",
          "href": "https://github.com/Lucifer-02",
          "avatar": "https://avatars.githubusercontent.com/u/84069686"
        },
        {
          "username": "lucifer-vcb",
          "href": "https://github.com/lucifer-vcb",
          "avatar": "https://avatars.githubusercontent.com/u/170999809"
        },
        {
          "username": "bugkerb",
          "href": "https://github.com/bugkerb",
          "avatar": "https://avatars.githubusercontent.com/u/8428579"
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
      "forks": 606,
      "added_stars": 877,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1955,
      "added_stars": 511,
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
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "CyberStrikeAI is an AI-native security testing platform built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 459,
      "added_stars": 2011,
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
      "author": "grafana",
      "repo": "mcp-grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/mcp-grafana",
      "desc": "MCP server for Grafana",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 294,
      "added_stars": 258,
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
      "author": "m1k1o",
      "repo": "neko",
      "avatar": "https://github.com/m1k1o.png",
      "repo_link": "https://github.com/m1k1o/neko",
      "desc": "A self hosted virtual browser that runs in docker and uses WebRTC.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1397,
      "added_stars": 2822,
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
      "forks": 8076,
      "added_stars": 834,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 14963,
      "added_stars": 2995,
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
      "author": "dapr",
      "repo": "dapr",
      "avatar": "https://github.com/dapr.png",
      "repo_link": "https://github.com/dapr/dapr",
      "desc": "Dapr is a portable runtime for building distributed applications across cloud and edge, combining event-driven architecture with workflow orchestration.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2054,
      "added_stars": 148,
      "builtBy": [
        {
          "username": "yaron2",
          "href": "https://github.com/yaron2",
          "avatar": "https://avatars.githubusercontent.com/u/16295283"
        },
        {
          "username": "JoshVanL",
          "href": "https://github.com/JoshVanL",
          "avatar": "https://avatars.githubusercontent.com/u/15893072"
        },
        {
          "username": "artursouza",
          "href": "https://github.com/artursouza",
          "avatar": "https://avatars.githubusercontent.com/u/130954"
        },
        {
          "username": "dapr-bot",
          "href": "https://github.com/dapr-bot",
          "avatar": "https://avatars.githubusercontent.com/u/56698301"
        },
        {
          "username": "ItalyPaleAle",
          "href": "https://github.com/ItalyPaleAle",
          "avatar": "https://avatars.githubusercontent.com/u/43508"
        }
      ]
    },
    {
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 309,
      "added_stars": 602,
      "builtBy": [
        {
          "username": "akshaydeo",
          "href": "https://github.com/akshaydeo",
          "avatar": "https://avatars.githubusercontent.com/u/1050029"
        },
        {
          "username": "Pratham-Mishra04",
          "href": "https://github.com/Pratham-Mishra04",
          "avatar": "https://avatars.githubusercontent.com/u/99235987"
        },
        {
          "username": "TejasGhatte",
          "href": "https://github.com/TejasGhatte",
          "avatar": "https://avatars.githubusercontent.com/u/64637256"
        },
        {
          "username": "Radheshg04",
          "href": "https://github.com/Radheshg04",
          "avatar": "https://avatars.githubusercontent.com/u/61974742"
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
      "forks": 3026,
      "added_stars": 999,
      "builtBy": [
        {
          "username": "ssongliu",
          "href": "https://github.com/ssongliu",
          "avatar": "https://avatars.githubusercontent.com/u/73214554"
        },
        {
          "username": "zhengkunwang223",
          "href": "https://github.com/zhengkunwang223",
          "avatar": "https://avatars.githubusercontent.com/u/31820853"
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
      "forks": 2595,
      "added_stars": 2054,
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
      "author": "abiosoft",
      "repo": "colima",
      "avatar": "https://github.com/abiosoft.png",
      "repo_link": "https://github.com/abiosoft/colima",
      "desc": "Container runtimes on macOS (and Linux) with minimal setup",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 555,
      "added_stars": 679,
      "builtBy": [
        {
          "username": "abiosoft",
          "href": "https://github.com/abiosoft",
          "avatar": "https://avatars.githubusercontent.com/u/240448"
        },
        {
          "username": "rfay",
          "href": "https://github.com/rfay",
          "avatar": "https://avatars.githubusercontent.com/u/112444"
        },
        {
          "username": "LaszloGombos",
          "href": "https://github.com/LaszloGombos",
          "avatar": "https://avatars.githubusercontent.com/u/1522773"
        },
        {
          "username": "artygus",
          "href": "https://github.com/artygus",
          "avatar": "https://avatars.githubusercontent.com/u/4974968"
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
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skills and subagents, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3669,
      "added_stars": 10463,
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
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 537,
      "added_stars": 7760,
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
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2450,
      "added_stars": 17090,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1334,
      "added_stars": 7591,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 646,
      "added_stars": 6972,
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
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "OpenSandbox is a general-purpose sandbox platform for AI applications, offering multi-language SDKs, unified sandbox APIs, and Docker/Kubernetes runtimes for scenarios like Coding Agents, GUI Agents, Agent Evaluation, AI Code Execution, and RL Training.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 575,
      "added_stars": 6654,
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
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 420,
      "added_stars": 4534,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1641,
      "added_stars": 7831,
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
          "username": "zouyonghe",
          "href": "https://github.com/zouyonghe",
          "avatar": "https://avatars.githubusercontent.com/u/62183434"
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
      "forks": 685,
      "added_stars": 3539,
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
      "author": "databricks-solutions",
      "repo": "ai-dev-kit",
      "avatar": "https://github.com/databricks-solutions.png",
      "repo_link": "https://github.com/databricks-solutions/ai-dev-kit",
      "desc": "Databricks Toolkit for Coding Agents provided by Field Engineering",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 171,
      "added_stars": 639,
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
      "forks": 311,
      "added_stars": 786,
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
      "forks": 834,
      "added_stars": 2324,
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
      "author": "inclusionAI",
      "repo": "AReaL",
      "avatar": "https://github.com/inclusionAI.png",
      "repo_link": "https://github.com/inclusionAI/AReaL",
      "desc": "Lightning-Fast RL for LLM Reasoning and Agents. Made Simple & Flexible.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 405,
      "added_stars": 1251,
      "builtBy": [
        {
          "username": "garrett4wade",
          "href": "https://github.com/garrett4wade",
          "avatar": "https://avatars.githubusercontent.com/u/36355462"
        },
        {
          "username": "rchardx",
          "href": "https://github.com/rchardx",
          "avatar": "https://avatars.githubusercontent.com/u/1036136"
        },
        {
          "username": "nuzant",
          "href": "https://github.com/nuzant",
          "avatar": "https://avatars.githubusercontent.com/u/23146120"
        },
        {
          "username": "fishcrap",
          "href": "https://github.com/fishcrap",
          "avatar": "https://avatars.githubusercontent.com/u/55312295"
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
      "forks": 8512,
      "added_stars": 3125,
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
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2892,
      "added_stars": 5265,
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
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1844,
      "added_stars": 4362,
      "builtBy": [
        {
          "username": "hesreallyhim",
          "href": "https://github.com/hesreallyhim",
          "avatar": "https://avatars.githubusercontent.com/u/172150522"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tninja",
          "href": "https://github.com/tninja",
          "avatar": "https://avatars.githubusercontent.com/u/714625"
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
      "forks": 703,
      "added_stars": 1285,
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
      "forks": 6396,
      "added_stars": 3124,
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
      "author": "ZhuLinsen",
      "repo": "daily_stock_analysis",
      "avatar": "https://github.com/ZhuLinsen.png",
      "repo_link": "https://github.com/ZhuLinsen/daily_stock_analysis",
      "desc": "LLM驱动的 A/H/美股智能分析器，多数据源行情 + 实时新闻 + Gemini 决策仪表盘 + 多渠道推送，零成本，纯白嫖，定时运行",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 20234,
      "added_stars": 8218,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
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
    },
    {
      "title": "theSVG - 3800+ brand SVG icons with npm, React, CLI and CDN",
      "url": "https://github.com/GLINCKER/thesvg",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-09T04:59:57.000Z"
    },
    {
      "title": "Haptic feedback for the mobile web",
      "url": "https://haptics.lochie.me",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-07T13:57:52.000Z"
    },
    {
      "title": "React Compiler and Beyond: Capability Boundaries of Compiler-Driven UI Frameworks",
      "url": "https://dev.to/unadlib/react-compiler-and-beyond-capability-boundaries-of-compiler-driven-ui-frameworks-4928",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-04T18:09:32.000Z"
    },
    {
      "title": "tsonic - Compile TS to native code via NativeAOT",
      "url": "https://github.com/tsoniclang/tsonic",
      "upvotes": "2",
      "comments": "1",
      "created": "2026-03-03T16:46:46.000Z"
    },
    {
      "title": "Why your Vitest test suite is slow (and how to fix it)",
      "url": "https://medium.com/ekino-france/why-your-vitest-test-suite-is-slow-and-how-to-fix-it-068fbaf6d6eb",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-02T13:44:07.000Z"
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
      "title": "What was your win this week?!",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-ilf",
      "tags": "weeklyretro, discuss",
      "reactions": 32,
      "comments": 59,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Why Are We Still Doing GPU Work in JavaScript? (Live WebGPU Benchmark & Demo🚀)",
      "description": "JavaScript has been the main language of the web for years. Its popularity probably surprised even...",
      "url": "https://dev.to/sylwia-lask/why-are-we-still-doing-gpu-work-in-javascript-live-webgpu-benchmark-demo-4j6i",
      "tags": "webdev, javascript, typescript, webgpu",
      "reactions": 46,
      "comments": 53,
      "reading_time": 6,
      "author": "sylwia-lask"
    },
    {
      "title": "Deployments made easy: Cloud Run 101",
      "description": "The distance between \"it works on my machine\" and \"it's live for the world\" can often feel like a...",
      "url": "https://dev.to/googleai/deployments-made-easy-cloud-run-101-11ma",
      "tags": "googlecloud, serverless, beginners, cloud",
      "reactions": 29,
      "comments": 3,
      "reading_time": 2,
      "author": "martinomander"
    },
    {
      "title": "AI did a good job... and almost deleted everything",
      "description": "I would like to share an experience I had today.  TLDR:   AI finds minor security problem: danger of...",
      "url": "https://dev.to/eecolor/ai-did-a-good-job-and-almost-deleted-everything-1g8g",
      "tags": "",
      "reactions": 27,
      "comments": 0,
      "reading_time": 3,
      "author": "eecolor"
    },
    {
      "title": "We built a video recording API at $0.01/min. Here's the tech that made it possible.",
      "description": "Most video recording APIs charge $0.02-0.03 per minute. We built one for $0.01/min — 62% cheaper —...",
      "url": "https://dev.to/danger_cris/we-built-a-video-recording-api-at-001min-heres-the-tech-that-made-it-possible-872",
      "tags": "webdev, javascript, saas, video",
      "reactions": 13,
      "comments": 0,
      "reading_time": 3,
      "author": "danger_cris"
    },
    {
      "title": "Your AI code reviewer has no one to disagree with",
      "description": "Why single-pass AI code review is fundamentally broken and what happens when you make AI reviewers argue with each other first.",
      "url": "https://dev.to/spencermarx/your-ai-code-reviewer-has-no-one-to-disagree-with-f1j",
      "tags": "opensource, ai, codereview, claudecode",
      "reactions": 36,
      "comments": 1,
      "reading_time": 5,
      "author": "spencermarx"
    },
    {
      "title": "Por qué pusimos un CDN frente a nuestro balanceador de carga (y por qué las cookies fueron el verdadero problema)",
      "description": "Agregar un CDN parece algo obvio. Hasta que es lo único que se interpone entre tú y un deployment...",
      "url": "https://dev.to/davidcuy/por-que-pusimos-un-cdn-frente-a-nuestro-balanceador-de-carga-y-por-que-las-cookies-fueron-el-4mfh",
      "tags": "arquitecturacloud, decisionesdearquitec",
      "reactions": 30,
      "comments": 0,
      "reading_time": 3,
      "author": "davidcuy"
    },
    {
      "title": "I Built EchoHR: The HR System That Doesn’t Ghost You",
      "description": "This is a submission for the Notion MCP Challenge  Rejections hurt. But ghosting hurts even...",
      "url": "https://dev.to/ujja/i-built-echohr-the-hr-system-that-doesnt-ghost-you-1c2i",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 30,
      "comments": 39,
      "reading_time": 5,
      "author": "ujja"
    },
    {
      "title": "The Internet Is Getting Quieter - Who Will Feed the Next Generation of AI?",
      "description": "Stack Overflow helped train the AI models that are now making it irrelevant. As developers solve problems privately with AI assistants, the public knowledge commons is quietly starving. This is an underrated problem.",
      "url": "https://dev.to/sag1v/the-internet-is-getting-quieter-who-will-feed-the-next-generation-of-ai-4bl1",
      "tags": "ai, knowledgesharing, stackoverflow, opinion",
      "reactions": 32,
      "comments": 19,
      "reading_time": 5,
      "author": "sag1v"
    },
    {
      "title": "I Built and Authorized a Planning Agent with MCP and Keycard",
      "description": "My workday is scattered across many disconnected tools: Google Calendar, Linear, Gmail, Google Docs,...",
      "url": "https://dev.to/kimmaida/i-built-a-secure-planning-agent-with-mcp-and-keycard-324a",
      "tags": "agents, mcp, productivity, showdev",
      "reactions": 46,
      "comments": 9,
      "reading_time": 12,
      "author": "kimmaida"
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
      "title": "Torturing rustc by Emulating HKTs, Causing an Inductive Cycle and Borking the Compiler",
      "url": "https://www.harudagondi.space/blog/torturing-rustc-by-emulating-hkts/",
      "score": 1,
      "comments": 0,
      "tags": [
        "rust"
      ],
      "id": "ec6xnf"
    },
    {
      "title": "The Annoying Usefulness of Emacs",
      "url": "https://www.youtube.com/watch?v=DMbrNhx2zWQ",
      "score": 1,
      "comments": 0,
      "tags": [
        "emacs",
        "video"
      ],
      "id": "trb3gw"
    },
    {
      "title": "AI Agents Are Recruiting Humans To Observe The Offline World",
      "url": "https://www.noemamag.com/ai-agents-are-recruiting-humans-to-observe-the-offline-world",
      "score": 2,
      "comments": 1,
      "tags": [
        "ai",
        "philosophy"
      ],
      "id": "y4es5f"
    },
    {
      "title": "Plans to possibly retire the big-endian PowerPC/POWER platforms",
      "url": "https://chimera-linux.org/news/2026/03/retiring-powerpc.html",
      "score": 4,
      "comments": 0,
      "tags": [
        "linux",
        "retrocomputing"
      ],
      "id": "vo4mb2"
    },
    {
      "title": "Libadwaita 1.9",
      "url": "https://nyaa.place/blog/libadwaita-1-9/",
      "score": 8,
      "comments": 0,
      "tags": [
        "graphics",
        "release"
      ],
      "id": "twup3y"
    },
    {
      "title": "Running gVisor on Raspberry Pi 5: A Kernel Configuration Adventure",
      "url": "https://nubificus.co.uk/blog/gvisor-rpi5/",
      "score": 1,
      "comments": 0,
      "tags": [
        "linux"
      ],
      "id": "bs4rfp"
    },
    {
      "title": "An ode to bzip",
      "url": "https://purplesyringa.moe/blog/an-ode-to-bzip/",
      "score": 10,
      "comments": 0,
      "tags": [
        "compsci",
        "programming"
      ],
      "id": "ub7a5k"
    },
    {
      "title": "I beg you to follow Crocker's Rules, even if you will be rude to me",
      "url": "https://lr0.org/blog/p/crocker/",
      "score": 11,
      "comments": 11,
      "tags": [
        "culture",
        "practices"
      ],
      "id": "rb8pas"
    },
    {
      "title": "Fundamental Theorem Of Developing FLOSS",
      "url": "https://fedoraproject.org/wiki/User:Duffy/FundamentalTheoremOfDevelopingFLOSS",
      "score": 4,
      "comments": 0,
      "tags": [
        "culture"
      ],
      "id": "tsftqy"
    },
    {
      "title": "5 Server Side Programming Languages Every Programmer Should Know",
      "url": "https://www.linode.com/docs/guides/server-side-programming-languages/",
      "score": -2,
      "comments": 0,
      "tags": [
        "nodejs",
        "php",
        "ruby"
      ],
      "id": "oqlkks"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "meetpateltech",
      "descendants": 227,
      "id": 47367129,
      "kids": [
        47368651,
        47373315,
        47374072,
        47373075,
        47368975,
        47368938,
        47372047,
        47373795,
        47371823,
        47373896,
        47373921,
        47372570,
        47372159,
        47373658,
        47372980,
        47373357,
        47372132,
        47372379,
        47372126,
        47367360,
        47373155,
        47372845,
        47373094,
        47372467,
        47372561,
        47372012,
        47372045,
        47372527,
        47373559,
        47371992,
        47371838,
        47373057,
        47372746,
        47373369,
        47372174,
        47372122,
        47372716,
        47373973,
        47373978,
        47373316,
        47372358,
        47372761,
        47372801,
        47373381
      ],
      "score": 566,
      "time": 1773422341,
      "title": "1M context is now generally available for Opus 4.6 and Sonnet 4.6",
      "type": "story",
      "url": "https://claude.com/blog/1m-context-ga"
    },
    {
      "by": "ricardbejarano",
      "descendants": 281,
      "id": 47363754,
      "kids": [
        47367770,
        47367200,
        47368057,
        47366487,
        47372550,
        47366284,
        47366742,
        47372114,
        47369834,
        47367771,
        47368473,
        47367002,
        47366375,
        47371107,
        47367654,
        47371751,
        47373273,
        47373268,
        47367197,
        47370473,
        47367130,
        47372497,
        47369625,
        47372975,
        47365956,
        47369209,
        47366318,
        47368524,
        47369123,
        47370700,
        47371010,
        47369597,
        47369154,
        47373881,
        47370478,
        47367387,
        47367918,
        47369644,
        47367834,
        47369574,
        47367027,
        47372539,
        47370333,
        47369489,
        47371229,
        47371189,
        47372015,
        47367373,
        47366887,
        47367357,
        47369870,
        47368191,
        47372505,
        47366713,
        47366560,
        47368744,
        47366503,
        47371883,
        47366738,
        47367873,
        47371291,
        47370143,
        47366454,
        47366608,
        47366571,
        47370662,
        47368208,
        47369050,
        47367565,
        47369423,
        47368661,
        47372424,
        47367273,
        47367013,
        47370518,
        47367267,
        47369724,
        47368055,
        47367348,
        47367760,
        47369630,
        47368515,
        47372356,
        47366556,
        47367093,
        47366586,
        47366562,
        47371430,
        47368023,
        47368311,
        47369638,
        47368782,
        47366392,
        47367991,
        47367448,
        47367178,
        47367248,
        47370237,
        47368203,
        47370869,
        47367951,
        47366813,
        47373039,
        47368127,
        47371411,
        47368134,
        47368657,
        47367269,
        47368119,
        47368129,
        47367841,
        47366799,
        47367038,
        47371274
      ],
      "score": 1145,
      "time": 1773405970,
      "title": "Can I run AI locally?",
      "type": "story",
      "url": "https://www.canirun.ai/"
    },
    {
      "by": "vismit2000",
      "descendants": 9,
      "id": 47318386,
      "kids": [
        47374031,
        47374004,
        47373909,
        47373666,
        47373715
      ],
      "score": 38,
      "time": 1773109011,
      "title": "A Survival Guide to a PhD (2016)",
      "type": "story",
      "url": "http://karpathy.github.io/2016/09/07/phd/"
    },
    {
      "by": "johnbarron",
      "descendants": 458,
      "id": 47363584,
      "kids": [
        47368494,
        47369895,
        47372554,
        47370110,
        47369974,
        47373814,
        47373984,
        47371828,
        47366274,
        47372440,
        47373500,
        47369177,
        47364775,
        47364030,
        47372088,
        47373481,
        47364129,
        47369827,
        47371169,
        47370692,
        47372977,
        47370321,
        47368780,
        47371701,
        47364684,
        47366172,
        47364166,
        47364583,
        47369550,
        47363987,
        47363820,
        47370008,
        47368168,
        47368231,
        47363743,
        47369839,
        47364236
      ],
      "score": 516,
      "time": 1773405069,
      "title": "Qatar helium shutdown puts chip supply chain on a two-week clock",
      "type": "story",
      "url": "https://www.tomshardware.com/tech-industry/qatar-helium-shutdown-puts-chip-supply-chain-on-a-two-week-clock"
    },
    {
      "by": "psibi",
      "descendants": 16,
      "id": 47319071,
      "kids": [
        47374032,
        47373991,
        47373797,
        47373660,
        47373968,
        47373972,
        47373489,
        47373735,
        47373333,
        47373828,
        47328270,
        47373284,
        47373930
      ],
      "score": 80,
      "time": 1773116492,
      "title": "Emacs and Vim in the Age of AI",
      "type": "story",
      "url": "https://batsov.com/articles/2026/03/09/emacs-and-vim-in-the-age-of-ai/"
    },
    {
      "by": "kilroy123",
      "descendants": 144,
      "id": 47336100,
      "kids": [
        47369759,
        47366824,
        47367398,
        47370668,
        47373447,
        47366854,
        47367616,
        47371479,
        47368634,
        47368196,
        47366582,
        47366720,
        47368702,
        47368549,
        47370183,
        47366674,
        47367974,
        47367031,
        47367564,
        47366721,
        47367702,
        47371599,
        47367889,
        47369758,
        47368904,
        47372758,
        47367251,
        47368267,
        47370334,
        47367272,
        47369866,
        47368252,
        47370720,
        47369782,
        47372435,
        47369179,
        47370216,
        47368786,
        47368514,
        47367592,
        47370677,
        47367824,
        47367133,
        47373554,
        47367350,
        47367123,
        47369462,
        47368295,
        47371670,
        47368713,
        47366862,
        47368619,
        47366942,
        47367851,
        47370629,
        47369711,
        47367324,
        47368684,
        47366622,
        47367688,
        47370254,
        47366842,
        47370710,
        47368759,
        47370057,
        47367734,
        47367550,
        47370125,
        47368091,
        47368270,
        47367444
      ],
      "score": 474,
      "text": "I know, it&#x27;s a very first-world problem. But in my house, we have a hard time deciding what to watch. Too many options!<p>So I made this to recreate Cable TV for YouTube. I made it so it runs in the browser. Quickly import your subscriptions in the browser via a bookmarklet. No accounts, no sign-ins. Just quickly import your data locally.",
      "time": 1773239697,
      "title": "Show HN: Channel Surfer – Watch YouTube like it’s cable TV",
      "type": "story",
      "url": "https://channelsurfer.tv"
    },
    {
      "by": "mondobe",
      "descendants": 1,
      "id": 47339403,
      "kids": [
        47373767
      ],
      "score": 16,
      "time": 1773254139,
      "title": "Atari 2600 BASIC Programming (2015)",
      "type": "story",
      "url": "https://huguesjohnson.com/programming/atari-2600-basic/"
    },
    {
      "by": "kernelrocks",
      "descendants": 26,
      "id": 47371064,
      "kids": [
        47374082,
        47372720,
        47371406,
        47371361,
        47371962,
        47371245,
        47371078,
        47373313,
        47373279,
        47373405,
        47371926,
        47371287
      ],
      "score": 113,
      "time": 1773442325,
      "title": "I found 39 Algolia admin keys exposed across open source documentation sites",
      "type": "story",
      "url": "https://benzimmermann.dev/blog/algolia-docsearch-admin-keys"
    },
    {
      "by": "surprisetalk",
      "descendants": 1,
      "id": 47323625,
      "kids": [
        47373911
      ],
      "score": 17,
      "time": 1773152301,
      "title": "You gotta think outside the hypercube",
      "type": "story",
      "url": "https://lcamtuf.substack.com/p/you-gotta-think-outside-the-hypercube"
    },
    {
      "by": "avionics-guy",
      "descendants": 78,
      "id": 47368033,
      "kids": [
        47370544,
        47369289,
        47369213,
        47373975,
        47370480,
        47369018,
        47371967,
        47369162,
        47373720,
        47373307,
        47369430,
        47372518,
        47369819,
        47369575,
        47372924,
        47371504,
        47372002,
        47371006,
        47369977,
        47370337,
        47372242,
        47370469,
        47370315,
        47369969,
        47370438,
        47369732,
        47372844,
        47371294,
        47372565,
        47371315,
        47370221
      ],
      "score": 270,
      "text": "I discovered this project because all-of-a-sudden Logi Options Plus software updater started taking 40-60% of my Intel Macbook Pro until I killed the process (of course it restarts). In my searches I ended up at a reddit discussion where I found other people with same issues.<p>I&#x27;m a minor contributor to this project but it aims to reduce&#x2F;eliminate the need to use Logitech proprietary software and telemetry. We could use help if other people are interested.<p>Please check out the github link for more detailed motivations (eliminating telemetry) as a part of this project.   Here is link: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;TomBadash&#x2F;MouseControl\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;TomBadash&#x2F;MouseControl</a>",
      "time": 1773427374,
      "title": "Mouser: An open source alternative to Logi-Plus mouse software",
      "type": "story",
      "url": "https://github.com/TomBadash/MouseControl"
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
      "title": "I Was One Day Away From Quitting — And Then My Career Took An Unexpected Turn",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience     Here's a story from my...",
      "url": "https://dev.to/dev-in-progress/i-was-one-day-away-from-quitting-and-then-my-career-took-an-unexpected-turn-o1k",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 44,
      "comments": 23,
      "reading_time": 4,
      "author": "dev-in-progress"
    },
    {
      "title": "Everyone Is Sleeping on Vibe Coding. Here's Why That's a Mistake.",
      "description": "It's not a trend. It's not a shortcut. It's the skill that's quietly separating the developers who...",
      "url": "https://dev.to/sukriti_singh/andrej-karpathy-just-said-vibe-coding-is-already-dead-heres-what-comes-next-53i1",
      "tags": "ai, career, discuss, nocode",
      "reactions": 3,
      "comments": 2,
      "reading_time": 3,
      "author": "sukriti_singh"
    },
    {
      "title": "Three Months of Code: What a Patent Lawyer Built from Zero",
      "description": "I built a multi-engine shogi AI, deployed it to rated games on Floodgate, and watched it lose to...",
      "url": "https://dev.to/soytuber/three-months-of-code-what-a-patent-lawyer-built-from-zero-3dnp",
      "tags": "programming, career, beginners",
      "reactions": 0,
      "comments": 1,
      "reading_time": 5,
      "author": "soytuber"
    },
    {
      "title": "Echoes of Experience",
      "description": "🌱 Echoes of Experience: Finding My Voice in Tech I didn’t grow up imagining myself in tech. For a...",
      "url": "https://dev.to/dan52242644dan/echoes-of-experience-2pi9",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "dan52242644dan"
    },
    {
      "title": "You can't prompt what you don't know exists",
      "description": "Two in the morning. Coffee rings dried. Fingertips raw. The language model and I are bleeding clock...",
      "url": "https://dev.to/jord0cmd/you-cant-prompt-what-you-dont-know-exists-16g1",
      "tags": "ai, career, discuss, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 7,
      "author": "jord0cmd"
    },
    {
      "title": "The “Jurassic World” Rule is simple: Don’t try to outrun the raptor. Train it.",
      "description": "In Jurassic World, there’s that iconic scene where Owen Grady (Chris Pratt) stands in a cage with...",
      "url": "https://dev.to/itsmeramc/the-jurassic-world-rule-is-simple-dont-try-to-outrun-the-raptor-train-it-2be3",
      "tags": "agents, ai, career, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 5,
      "author": "itsmeramc"
    },
    {
      "title": "Your 2026 PTO Cheat Sheet: Exactly Which Days to Take Off",
      "description": "Your 2026 PTO Cheat Sheet: Exactly Which Days to Take Off  You have a limited number of PTO days....",
      "url": "https://dev.to/eastkap/your-2026-pto-cheat-sheet-exactly-which-days-to-take-off-4eki",
      "tags": "productivity, career, webdev, opensource",
      "reactions": 2,
      "comments": 0,
      "reading_time": 5,
      "author": "eastkap"
    },
    {
      "title": "Git Archaeology #3 — Two Paths to Architect: How Engineers Evolve Differently",
      "description": "Chapter 3 of Engineering Impact Score. Architects don't come from one mold — inheritance vs. emergence, and why cold numbers tell the most human stories.",
      "url": "https://dev.to/machuz/two-paths-to-architect-how-engineers-evolve-differently-1ga",
      "tags": "opensource, productivity, git, career",
      "reactions": 1,
      "comments": 1,
      "reading_time": 8,
      "author": "machuz"
    },
    {
      "title": "Talent Blooms When You Stop Relying on \"Motivation\": 7 Insights on the \"Spring Mind\" Left by Genius Mathematician Kiyoshi Oka",
      "description": "Why Are We Betrayed by the Mirage of \"Motivation\"?   Living in the modern era, we are caught...",
      "url": "https://dev.to/soytuber/talent-blooms-when-you-stop-relying-on-motivation-7-insights-on-the-spring-mind-left-by-genius-4nko",
      "tags": "programming, career, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "soytuber"
    },
    {
      "title": "When Your Team Becomes the Unofficial Support Group for Every Unqualified Tech Lead",
      "description": "There's a pattern I keep running into and every senior engineer I've talked to recognizes it...",
      "url": "https://dev.to/ghostinit0x/when-your-team-becomes-the-unofficial-support-group-for-every-unqualified-tech-lead-1fo0",
      "tags": "career, discuss, leadership, management",
      "reactions": 0,
      "comments": 2,
      "reading_time": 3,
      "author": "ghostinit0x"
    }
  ]
}
```

