# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-15 07:12:57 UTC

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
      "forks": 1405,
      "added_stars": 4825,
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
      "forks": 4802,
      "added_stars": 3782,
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
      "author": "shadcn-ui",
      "repo": "ui",
      "avatar": "https://github.com/shadcn-ui.png",
      "repo_link": "https://github.com/shadcn-ui/ui",
      "desc": "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8182,
      "added_stars": 1622,
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
          "username": "iaingymware",
          "href": "https://github.com/iaingymware",
          "avatar": "https://avatars.githubusercontent.com/u/74924033"
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
      "forks": 253,
      "added_stars": 987,
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
      "author": "yikart",
      "repo": "AiToEarn",
      "avatar": "https://github.com/yikart.png",
      "repo_link": "https://github.com/yikart/AiToEarn",
      "desc": "Let's use AI to Earn!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2440,
      "added_stars": 676,
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
      "forks": 933,
      "added_stars": 1348,
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
          "username": "ngutman",
          "href": "https://github.com/ngutman",
          "avatar": "https://avatars.githubusercontent.com/u/1540134"
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
      "forks": 3552,
      "added_stars": 1058,
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
      "author": "toeverything",
      "repo": "AFFiNE",
      "avatar": "https://github.com/toeverything.png",
      "repo_link": "https://github.com/toeverything/AFFiNE",
      "desc": "There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4604,
      "added_stars": 1590,
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
      "author": "moeru-ai",
      "repo": "airi",
      "avatar": "https://github.com/moeru-ai.png",
      "repo_link": "https://github.com/moeru-ai/airi",
      "desc": "💖🧸 Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3335,
      "added_stars": 3230,
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
      "author": "web-infra-dev",
      "repo": "midscene",
      "avatar": "https://github.com/web-infra-dev.png",
      "repo_link": "https://github.com/web-infra-dev/midscene",
      "desc": "AI-powered, vision-driven UI automation for every platform.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 894,
      "added_stars": 189,
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
      "forks": 2885,
      "added_stars": 1139,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
        }
      ]
    },
    {
      "author": "dreamhunter2333",
      "repo": "cloudflare_temp_email",
      "avatar": "https://github.com/dreamhunter2333.png",
      "repo_link": "https://github.com/dreamhunter2333/cloudflare_temp_email",
      "desc": "CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3468,
      "added_stars": 279,
      "builtBy": [
        {
          "username": "dreamhunter2333",
          "href": "https://github.com/dreamhunter2333",
          "avatar": "https://avatars.githubusercontent.com/u/32295532"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Bowl42",
          "href": "https://github.com/Bowl42",
          "avatar": "https://avatars.githubusercontent.com/u/250666564"
        },
        {
          "username": "oneisall8955",
          "href": "https://github.com/oneisall8955",
          "avatar": "https://avatars.githubusercontent.com/u/44989283"
        },
        {
          "username": "Zyx-A",
          "href": "https://github.com/Zyx-A",
          "avatar": "https://avatars.githubusercontent.com/u/18498974"
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
      "forks": 473,
      "added_stars": 4056,
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
      "forks": 1730,
      "added_stars": 2842,
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
      "forks": 295,
      "added_stars": 1857,
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
      "forks": 853,
      "added_stars": 3698,
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
      "forks": 691,
      "added_stars": 1521,
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
      "forks": 153,
      "added_stars": 735,
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
      "forks": 455,
      "added_stars": 446,
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
      "forks": 607,
      "added_stars": 896,
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
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "CyberStrikeAI is an AI-native security testing platform built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 465,
      "added_stars": 2025,
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
      "author": "entireio",
      "repo": "cli",
      "avatar": "https://github.com/entireio.png",
      "repo_link": "https://github.com/entireio/cli",
      "desc": "Entire is a new developer platform that hooks into your git workflow to capture AI agent sessions on every push, unifying your code with its context and reasoning.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 255,
      "added_stars": 1282,
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
      "author": "m1k1o",
      "repo": "neko",
      "avatar": "https://github.com/m1k1o.png",
      "repo_link": "https://github.com/m1k1o/neko",
      "desc": "A self hosted virtual browser that runs in docker and uses WebRTC.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1403,
      "added_stars": 2856,
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
      "forks": 8084,
      "added_stars": 841,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1958,
      "added_stars": 519,
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
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2604,
      "added_stars": 2103,
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
      "forks": 3031,
      "added_stars": 1000,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 14979,
      "added_stars": 2989,
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
      "author": "grafana",
      "repo": "mcp-grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/mcp-grafana",
      "desc": "MCP server for Grafana",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 295,
      "added_stars": 245,
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
      "author": "mark3labs",
      "repo": "mcp-go",
      "avatar": "https://github.com/mark3labs.png",
      "repo_link": "https://github.com/mark3labs/mcp-go",
      "desc": "A Go implementation of the Model Context Protocol (MCP), enabling seamless integration between LLM applications and external data sources and tools.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 789,
      "added_stars": 207,
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
      "forks": 302,
      "added_stars": 468,
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
      "forks": 3698,
      "added_stars": 10699,
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
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2898,
      "added_stars": 19005,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 750,
      "added_stars": 8317,
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
      "forks": 542,
      "added_stars": 7807,
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
      "forks": 1428,
      "added_stars": 8165,
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
      "forks": 581,
      "added_stars": 6722,
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
      "forks": 424,
      "added_stars": 4339,
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
      "forks": 1673,
      "added_stars": 8583,
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
          "username": "advent259141",
          "href": "https://github.com/advent259141",
          "avatar": "https://avatars.githubusercontent.com/u/197440256"
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
      "forks": 707,
      "added_stars": 3683,
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
      "forks": 2924,
      "added_stars": 6216,
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
      "forks": 172,
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
      "author": "anthropics",
      "repo": "claude-code-security-review",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-security-review",
      "desc": "An AI-powered security review GitHub Action using Claude to analyze code changes for security vulnerabilities.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 314,
      "added_stars": 796,
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
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8535,
      "added_stars": 3256,
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
      "author": "inclusionAI",
      "repo": "AReaL",
      "avatar": "https://github.com/inclusionAI.png",
      "repo_link": "https://github.com/inclusionAI/AReaL",
      "desc": "Lightning-Fast RL for LLM Reasoning and Agents. Made Simple & Flexible.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 407,
      "added_stars": 1258,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 837,
      "added_stars": 2332,
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
      "author": "chenyme",
      "repo": "grok2api",
      "avatar": "https://github.com/chenyme.png",
      "repo_link": "https://github.com/chenyme/grok2api",
      "desc": "基于 FastAPI 构建的 Grok2API，全面适配 OpenAI 兼容的调用格式，支持流式/非流式对话、图像生成、图像编辑、视频生成、工具调用、语音聊天、一键NSFW、号池并发与自动负载均衡一体化。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 987,
      "added_stars": 1451,
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
      "forks": 6408,
      "added_stars": 3158,
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
      "author": "fishaudio",
      "repo": "fish-speech",
      "avatar": "https://github.com/fishaudio.png",
      "repo_link": "https://github.com/fishaudio/fish-speech",
      "desc": "SOTA Open Source TTS",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2283,
      "added_stars": 2268,
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
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1856,
      "added_stars": 4502,
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
      "author": "openai",
      "repo": "skills",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/skills",
      "desc": "Skills Catalog for Codex",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 814,
      "added_stars": 5795,
      "builtBy": [
        {
          "username": "gverma-openai",
          "href": "https://github.com/gverma-openai",
          "avatar": "https://avatars.githubusercontent.com/u/235382312"
        },
        {
          "username": "dkundel-openai",
          "href": "https://github.com/dkundel-openai",
          "avatar": "https://avatars.githubusercontent.com/u/200841172"
        },
        {
          "username": "vb-openai",
          "href": "https://github.com/vb-openai",
          "avatar": "https://avatars.githubusercontent.com/u/250380837"
        },
        {
          "username": "edward-bayes",
          "href": "https://github.com/edward-bayes",
          "avatar": "https://avatars.githubusercontent.com/u/191618473"
        },
        {
          "username": "ae-openai",
          "href": "https://github.com/ae-openai",
          "avatar": "https://avatars.githubusercontent.com/u/173195103"
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
      "forks": 706,
      "added_stars": 1294,
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
      "title": "90% of Code Will Be AI-Generated — So What the Hell Do We Actually Do?",
      "description": "I read the headline at 11pm on a random Wednesday.  \"Anthropic CEO predicts 90% of all code will be...",
      "url": "https://dev.to/harsh2644/90-of-code-will-be-ai-generated-so-what-the-hell-do-we-actually-do-2kg3",
      "tags": "ai, career, webdev, javascript",
      "reactions": 31,
      "comments": 20,
      "reading_time": 7,
      "author": "harsh2644"
    },
    {
      "title": "What was your win this week?!",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-ilf",
      "tags": "weeklyretro, discuss",
      "reactions": 42,
      "comments": 96,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "I Built EchoHR: The HR System That Doesn’t Ghost You",
      "description": "This is a submission for the Notion MCP Challenge  Rejections hurt. But ghosting hurts even...",
      "url": "https://dev.to/ujja/i-built-echohr-the-hr-system-that-doesnt-ghost-you-1c2i",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 35,
      "comments": 50,
      "reading_time": 5,
      "author": "ujja"
    },
    {
      "title": "Why Are We Still Doing GPU Work in JavaScript? (Live WebGPU Benchmark & Demo🚀)",
      "description": "JavaScript has been the main language of the web for years. Its popularity probably surprised even...",
      "url": "https://dev.to/sylwia-lask/why-are-we-still-doing-gpu-work-in-javascript-live-webgpu-benchmark-demo-4j6i",
      "tags": "webdev, javascript, typescript, webgpu",
      "reactions": 56,
      "comments": 60,
      "reading_time": 6,
      "author": "sylwia-lask"
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
      "title": "I'm frozen and I cannot move",
      "description": "This text is 100% handmade, like the code I am writing...  Recent developments in the AI realm made...",
      "url": "https://dev.to/jankapunkt/im-frozen-and-i-cannot-move-547g",
      "tags": "ai, programming, productivity",
      "reactions": 2,
      "comments": 1,
      "reading_time": 2,
      "author": "jankapunkt"
    },
    {
      "title": "The Internet Is Getting Quieter - Who Will Feed the Next Generation of AI?",
      "description": "Stack Overflow helped train the AI models that are now making it irrelevant. As developers solve problems privately with AI assistants, the public knowledge commons is quietly starving. This is an underrated problem.",
      "url": "https://dev.to/sag1v/the-internet-is-getting-quieter-who-will-feed-the-next-generation-of-ai-4bl1",
      "tags": "ai, knowledgesharing, stackoverflow, opinion",
      "reactions": 37,
      "comments": 20,
      "reading_time": 5,
      "author": "sag1v"
    },
    {
      "title": "Параллелизм в ruby 1: создаем потоки",
      "description": "я бы хотел бы поставить точки над i в тему тредов и ракторов, как минимум сам для себя; посмотреть какие задачи на параллелизм решаются в других языках, что можно оттуда подчеркнуть и перенести в Ruby",
      "url": "https://dev.to/kopylov_vlad/parallielizm-v-ruby-1-sozdaiem-potoki-2i83",
      "tags": "ruby, rails, thread",
      "reactions": 2,
      "comments": 0,
      "reading_time": 4,
      "author": "kopylov_vlad"
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
      "title": "Summary - Rust Project Perspectives on AI",
      "url": "https://nikomatsakis.github.io/rust-project-perspectives-on-ai/feb27-summary.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "rust",
        "vibecoding"
      ],
      "id": "mizmno"
    },
    {
      "title": "Changes to OpenTTD distribution on Steam",
      "url": "https://www.openttd.org/news/2026/03/14/steam-changes",
      "score": 4,
      "comments": 2,
      "tags": [
        "games"
      ],
      "id": "nc3c14"
    },
    {
      "title": "A Gentle Introduction to Mercury",
      "url": "https://bctnry.github.io/gentle-introduction-to-mercury/",
      "score": 3,
      "comments": 0,
      "tags": [
        "logiclangs",
        "pdf"
      ],
      "id": "xnfsd4"
    },
    {
      "title": "LotusNotes",
      "url": "https://computer.rip/2026-03-14-lotusnotes.html",
      "score": 2,
      "comments": 0,
      "tags": [
        "historical"
      ],
      "id": "dvynxz"
    },
    {
      "title": "tree-style invite systems reduce AI slop",
      "url": "https://abyss.fish/tree-style_invite_systems_reduce_AI_slop",
      "score": 16,
      "comments": 4,
      "tags": [
        "culture"
      ],
      "id": "dw0hx5"
    },
    {
      "title": "StorageReview Sets New Pi Record: 314 Trillion Digits on a Dell PowerEdge R7725",
      "url": "https://www.storagereview.com/review/storagereview-sets-new-pi-record-314-trillion-digits-on-a-dell-poweredge-r7725",
      "score": 2,
      "comments": 1,
      "tags": [
        "hardware",
        "performance"
      ],
      "id": "wcncyj"
    },
    {
      "title": "Ageless Linux — Software for Humans of Indeterminate Age",
      "url": "https://agelesslinux.org/",
      "score": 6,
      "comments": 0,
      "tags": [
        "law",
        "linux"
      ],
      "id": "cxiddw"
    },
    {
      "title": "Docker Does Not Guarantee Reproducibility",
      "url": "https://arxiv.org/pdf/2601.12811",
      "score": 1,
      "comments": 0,
      "tags": [
        "virtualization"
      ],
      "id": "r6w9pj"
    },
    {
      "title": "Microslop",
      "url": "https://www.s-config.com/microslop/",
      "score": 4,
      "comments": 0,
      "tags": [
        "rant"
      ],
      "id": "4hmjs7"
    },
    {
      "title": "54kb minecraft clone made without a graphics library",
      "url": "https://www.youtube.com/watch?v=JO8EnzNfEk4",
      "score": 2,
      "comments": 0,
      "tags": [
        "c",
        "games",
        "programming",
        "video"
      ],
      "id": "feireu"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "cdrnsf",
      "descendants": 18,
      "id": 47384352,
      "kids": [
        47384793,
        47384822,
        47384548,
        47384814,
        47384844,
        47384691,
        47384600,
        47384613,
        47384903,
        47384573,
        47384766
      ],
      "score": 82,
      "time": 1773548623,
      "title": "Rack-mount hydroponics",
      "type": "story",
      "url": "https://sa.lj.am/rack-mount-hydroponics/"
    },
    {
      "by": "tartoran",
      "descendants": 57,
      "id": 47383804,
      "kids": [
        47385002,
        47384950,
        47384136,
        47384106,
        47384127,
        47384086,
        47383856,
        47384224,
        47384029,
        47383991,
        47383990,
        47384056,
        47383984
      ],
      "score": 59,
      "time": 1773542913,
      "title": "Treasure hunter freed from jail after refusing to turn over shipwreck gold",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/cg4g7kn99q3o"
    },
    {
      "by": "davikr",
      "descendants": 91,
      "id": 47382791,
      "kids": [
        47383625,
        47384838,
        47384269,
        47383607,
        47384668,
        47383950,
        47383347,
        47384245,
        47383921,
        47384020
      ],
      "score": 118,
      "time": 1773533710,
      "title": "How kernel anti-cheats work",
      "type": "story",
      "url": "https://s4dbrd.github.io/posts/how-kernel-anti-cheats-work/"
    },
    {
      "by": "xodn348",
      "descendants": 87,
      "id": 47381382,
      "kids": [
        47383386,
        47382219,
        47382747,
        47382246,
        47382765,
        47384290,
        47382790,
        47383450,
        47381772,
        47382348,
        47383946,
        47383111,
        47384366,
        47383189,
        47382498,
        47383383,
        47382806,
        47382365,
        47382930,
        47383080,
        47383509,
        47382272,
        47383261,
        47382656,
        47382635,
        47382899,
        47382832,
        47384017,
        47382451,
        47381630,
        47381993
      ],
      "score": 151,
      "text": "A few weeks ago I saw a post about someone converting an entire C++ codebase to Rust using AI in under two weeks.<p>That inspired me — if AI can rewrite a whole language stack that fast, I wanted to try building a programming language from scratch with AI assistance.<p>I&#x27;ve also been noticing growing global interest in Korean language and culture, and I wondered: what would a programming language look like if every keyword was in Hangul (the Korean writing system)?<p>Han is the result. It&#x27;s a statically-typed language written in Rust with a full compiler pipeline (lexer → parser → AST → interpreter + LLVM IR codegen).<p>It supports arrays, structs with impl blocks, closures, pattern matching, try&#x2F;catch, file I&#x2F;O, module imports, a REPL, and a basic LSP server.<p>This is a side project, not a &quot;you should use this instead of Python&quot; pitch. \nFeedback on language design, compiler architecture, or the Korean keyword choices is very welcome.<p><a href=\"https:&#x2F;&#x2F;github.com&#x2F;xodn348&#x2F;han\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;xodn348&#x2F;han</a>",
      "time": 1773523653,
      "title": "Show HN: Han – A Korean programming language written in Rust",
      "type": "story",
      "url": "https://github.com/xodn348/han"
    },
    {
      "by": "Uptrenda",
      "descendants": 6,
      "id": 47384032,
      "kids": [
        47384956,
        47384626,
        47384953,
        47384599
      ],
      "score": 39,
      "time": 1773545357,
      "title": "A most elegant TCP hole punching algorithm",
      "type": "story",
      "url": "https://robertsdotpm.github.io/cryptography/tcp_hole_punching.html"
    },
    {
      "by": "picafrost",
      "descendants": 2,
      "id": 47374924,
      "kids": [
        47384120,
        47384713,
        47384211
      ],
      "score": 57,
      "time": 1773481117,
      "title": "Mathematics Distillation Challenge – Equational Theories",
      "type": "story",
      "url": "https://terrytao.wordpress.com/2026/03/13/mathematics-distillation-challenge-equational-theories/"
    },
    {
      "by": "nateb2022",
      "descendants": 340,
      "id": 47381791,
      "kids": [
        47382416,
        47383909,
        47382336,
        47382773,
        47382467,
        47383407,
        47383065,
        47382318,
        47383550,
        47382963,
        47382860,
        47384779,
        47384118,
        47382530,
        47382315,
        47383067,
        47383716,
        47384733,
        47382356,
        47382342,
        47383118,
        47383158,
        47383967,
        47383308,
        47382431,
        47382340,
        47384129,
        47383961,
        47383615,
        47384391,
        47382444,
        47384074,
        47383695,
        47383624,
        47382328,
        47382876,
        47382711,
        47384275,
        47382448,
        47383055,
        47382426
      ],
      "score": 526,
      "time": 1773526226,
      "title": "Ageless Linux – Software for humans of indeterminate age",
      "type": "story",
      "url": "https://agelesslinux.org/"
    },
    {
      "by": "at2005",
      "descendants": 3,
      "id": 47383059,
      "kids": [
        47384806,
        47384331,
        47384016,
        47383644
      ],
      "score": 49,
      "time": 1773535915,
      "title": "Tree Search Distillation for Language Models Using PPO",
      "type": "story",
      "url": "https://ayushtambde.com/blog/tree-search-distillation-for-language-models-using-ppo/"
    },
    {
      "by": "sebi_io",
      "descendants": 31,
      "id": 47381736,
      "kids": [
        47384875,
        47384464,
        47384961,
        47384159,
        47383778,
        47384560,
        47384774,
        47384353,
        47384544,
        47384659,
        47384676,
        47384658,
        47384003,
        47384443,
        47384871,
        47384105,
        47384194
      ],
      "score": 97,
      "time": 1773525827,
      "title": "Allow me to get to know you, mistakes and all",
      "type": "story",
      "url": "https://sebi.io/posts/2026-03-14-allow-me-to-get-to-know-you-mistakes-and-all/"
    },
    {
      "by": "anonzzzies",
      "descendants": 13,
      "id": 47382398,
      "kids": [
        47384693,
        47384503,
        47384813,
        47383008,
        47383871,
        47384631,
        47384317,
        47382933
      ],
      "score": 73,
      "time": 1773530559,
      "title": "SBCL Fibers – Lightweight Cooperative Threads",
      "type": "story",
      "url": "https://atgreen.github.io/repl-yell/posts/sbcl-fibers/"
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
      "title": "90% of Code Will Be AI-Generated — So What the Hell Do We Actually Do?",
      "description": "I read the headline at 11pm on a random Wednesday.  \"Anthropic CEO predicts 90% of all code will be...",
      "url": "https://dev.to/harsh2644/90-of-code-will-be-ai-generated-so-what-the-hell-do-we-actually-do-2kg3",
      "tags": "ai, career, webdev, javascript",
      "reactions": 31,
      "comments": 20,
      "reading_time": 7,
      "author": "harsh2644"
    },
    {
      "title": "Developers Are Invisible, But Forg.to Wants to Change That",
      "description": "The modern developer’s identity is scattered across the web, hidden in fragments that never tell the...",
      "url": "https://dev.to/kislay/developers-are-invisible-but-forgto-wants-to-change-that-44ha",
      "tags": "career, developer, socialmedia, startup",
      "reactions": 6,
      "comments": 0,
      "reading_time": 2,
      "author": "kislay"
    },
    {
      "title": "The Hidden Skill of Reading Code",
      "description": "Many developers spend most of their learning time focused on writing code. Tutorials, courses, and...",
      "url": "https://dev.to/gustavowoltmann18/the-hidden-skill-of-reading-code-1dmd",
      "tags": "beginners, career, learning, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "gustavowoltmann18"
    },
    {
      "title": "Future Of Manual Testers in Age of AI",
      "description": "The future of manual testing in the age of AI is changing, but it is not disappearing. Artificial...",
      "url": "https://dev.to/balajee_venkatachalam_3b7/future-of-manual-testers-in-age-of-ai-573a",
      "tags": "ai, automation, career, testing",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "balajee_venkatachalam_3b7"
    },
    {
      "title": "The Easter Bridge: 4 PTO Days to 10 Consecutive Days Off (April 2026)",
      "description": "The Easter Bridge: 4 PTO Days → 10 Consecutive Days Off (April 2026)   If you live in a...",
      "url": "https://dev.to/eastkap/the-easter-bridge-4-pto-days-to-10-consecutive-days-off-april-2026-50d8",
      "tags": "productivity, career, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "eastkap"
    },
    {
      "title": "Stop Learning AI — Start Upgrading YOUR Role: A Guide for Every Software Discipline",
      "description": "If \"learn AI\" advice has felt overwhelming and vague, you're not alone. The AI territory has already...",
      "url": "https://dev.to/neerazz/stop-learning-ai-start-upgrading-your-role-a-guide-for-every-software-discipline-4pkm",
      "tags": "ai, career, beginners, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "neerazz"
    },
    {
      "title": "A client owes me £4,200 and won't respond. Here's my escalation playbook.",
      "description": "It happens to almost every freelancer eventually. You deliver the work, send the invoice, and......",
      "url": "https://dev.to/landolio/a-client-owes-me-ps4200-and-wont-respond-heres-my-escalation-playbook-9j9",
      "tags": "freelancing, career, beginners, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "landolio"
    },
    {
      "title": "Who Was the Software Built to Survive?",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience .  When people talk about...",
      "url": "https://dev.to/crisiscoresystems/who-was-the-software-built-to-survive-42ed",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 0,
      "comments": 1,
      "reading_time": 6,
      "author": "crisiscoresystems"
    },
    {
      "title": "I track every hour I work as a freelancer. Here's what the data says after 2 years.",
      "description": "Two years ago I started logging every working hour — client work, admin, chasing payments, marketing,...",
      "url": "https://dev.to/landolio/i-track-every-hour-i-work-as-a-freelancer-heres-what-the-data-says-after-2-years-2cbi",
      "tags": "freelancing, career, productivity, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "landolio"
    },
    {
      "title": "The exact email sequence that gets freelance invoices paid (with templates)",
      "description": "Getting paid on time is the biggest pain point in freelancing. After years of chasing invoices across...",
      "url": "https://dev.to/landolio/the-exact-email-sequence-that-gets-freelance-invoices-paid-with-templates-3iap",
      "tags": "freelancing, career, productivity, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "landolio"
    }
  ]
}
```

