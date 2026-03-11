# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-11 07:11:48 UTC

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
      "author": "moeru-ai",
      "repo": "airi",
      "avatar": "https://github.com/moeru-ai.png",
      "repo_link": "https://github.com/moeru-ai/airi",
      "desc": "💖🧸 Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3178,
      "added_stars": 10249,
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
          "username": "luoling8192",
          "href": "https://github.com/luoling8192",
          "avatar": "https://avatars.githubusercontent.com/u/44741987"
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
      "author": "ItzCrazyKns",
      "repo": "Vane",
      "avatar": "https://github.com/ItzCrazyKns.png",
      "repo_link": "https://github.com/ItzCrazyKns/Vane",
      "desc": "Vane is an AI-powered answering engine.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3507,
      "added_stars": 3187,
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
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need - A nano Claude Code–like agent, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4530,
      "added_stars": 4137,
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
      "author": "koala73",
      "repo": "worldmonitor",
      "avatar": "https://github.com/koala73.png",
      "repo_link": "https://github.com/koala73/worldmonitor",
      "desc": "Real-time global intelligence dashboard — AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5953,
      "added_stars": 9275,
      "builtBy": [
        {
          "username": "koala73",
          "href": "https://github.com/koala73",
          "avatar": "https://avatars.githubusercontent.com/u/996596"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "SebastienMelki",
          "href": "https://github.com/SebastienMelki",
          "avatar": "https://avatars.githubusercontent.com/u/5787993"
        },
        {
          "username": "NewCoder3294",
          "href": "https://github.com/NewCoder3294",
          "avatar": "https://avatars.githubusercontent.com/u/168879994"
        },
        {
          "username": "danielimad",
          "href": "https://github.com/danielimad",
          "avatar": "https://avatars.githubusercontent.com/u/72716286"
        }
      ]
    },
    {
      "author": "CodebuffAI",
      "repo": "codebuff",
      "avatar": "https://github.com/CodebuffAI.png",
      "repo_link": "https://github.com/CodebuffAI/codebuff",
      "desc": "Generate code from the terminal!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 477,
      "added_stars": 1040,
      "builtBy": [
        {
          "username": "jahooma",
          "href": "https://github.com/jahooma",
          "avatar": "https://avatars.githubusercontent.com/u/1593821"
        },
        {
          "username": "charleslien",
          "href": "https://github.com/charleslien",
          "avatar": "https://avatars.githubusercontent.com/u/26100741"
        },
        {
          "username": "brandonkachen",
          "href": "https://github.com/brandonkachen",
          "avatar": "https://avatars.githubusercontent.com/u/9735006"
        },
        {
          "username": "venkr",
          "href": "https://github.com/venkr",
          "avatar": "https://avatars.githubusercontent.com/u/21302375"
        }
      ]
    },
    {
      "author": "superset-sh",
      "repo": "superset",
      "avatar": "https://github.com/superset-sh.png",
      "repo_link": "https://github.com/superset-sh/superset",
      "desc": "IDE for the AI Agents Era - Run an army of Claude Code, Codex, etc. on your machine",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 430,
      "added_stars": 2589,
      "builtBy": [
        {
          "username": "Kitenite",
          "href": "https://github.com/Kitenite",
          "avatar": "https://avatars.githubusercontent.com/u/31864905"
        },
        {
          "username": "saddlepaddle",
          "href": "https://github.com/saddlepaddle",
          "avatar": "https://avatars.githubusercontent.com/u/14907857"
        },
        {
          "username": "AviPeltz",
          "href": "https://github.com/AviPeltz",
          "avatar": "https://avatars.githubusercontent.com/u/11849162"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "andreasasprou",
          "href": "https://github.com/andreasasprou",
          "avatar": "https://avatars.githubusercontent.com/u/8077469"
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
      "forks": 293,
      "added_stars": 1142,
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
      "author": "abhigyanpatwari",
      "repo": "GitNexus",
      "avatar": "https://github.com/abhigyanpatwari.png",
      "repo_link": "https://github.com/abhigyanpatwari/GitNexus",
      "desc": "GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a GitHub repo or ZIP file, and get an interactive knowledge graph wit a built in Graph RAG Agent. Perfect for code exploration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1395,
      "added_stars": 2698,
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
          "username": "paulrobello",
          "href": "https://github.com/paulrobello",
          "avatar": "https://avatars.githubusercontent.com/u/955011"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 4581,
      "added_stars": 2286,
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
      "author": "shadcn-ui",
      "repo": "ui",
      "avatar": "https://github.com/shadcn-ui.png",
      "repo_link": "https://github.com/shadcn-ui/ui",
      "desc": "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8115,
      "added_stars": 1617,
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
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The leading agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features enterprise-grade architecture, distributed swarm intelligence, RAG integration, and native Claude Code / Codex Integration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2264,
      "added_stars": 1957,
      "builtBy": [
        {
          "username": "ruvnet",
          "href": "https://github.com/ruvnet",
          "avatar": "https://avatars.githubusercontent.com/u/2934394"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "alexx-ftw",
          "href": "https://github.com/alexx-ftw",
          "avatar": "https://avatars.githubusercontent.com/u/22500633"
        },
        {
          "username": "lanemc",
          "href": "https://github.com/lanemc",
          "avatar": "https://avatars.githubusercontent.com/u/15803865"
        },
        {
          "username": "tommy-ca",
          "href": "https://github.com/tommy-ca",
          "avatar": "https://avatars.githubusercontent.com/u/140900186"
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
      "forks": 2400,
      "added_stars": 689,
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
      "author": "tiann",
      "repo": "hapi",
      "avatar": "https://github.com/tiann.png",
      "repo_link": "https://github.com/tiann/hapi",
      "desc": "App for Claude Code / Codex / Gemini / OpenCode, vibe coding anytime, anywhere",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 241,
      "added_stars": 480,
      "builtBy": [
        {
          "username": "tiann",
          "href": "https://github.com/tiann",
          "avatar": "https://avatars.githubusercontent.com/u/4233744"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "waynexia",
          "href": "https://github.com/waynexia",
          "avatar": "https://avatars.githubusercontent.com/u/15380403"
        },
        {
          "username": "therainisme",
          "href": "https://github.com/therainisme",
          "avatar": "https://avatars.githubusercontent.com/u/41776735"
        },
        {
          "username": "CherryLover",
          "href": "https://github.com/CherryLover",
          "avatar": "https://avatars.githubusercontent.com/u/18376501"
        }
      ]
    },
    {
      "author": "openclaw",
      "repo": "openclaw",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/openclaw",
      "desc": "Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 56853,
      "added_stars": 45321,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "vincentkoc",
          "href": "https://github.com/vincentkoc",
          "avatar": "https://avatars.githubusercontent.com/u/25068"
        },
        {
          "username": "vignesh07",
          "href": "https://github.com/vignesh07",
          "avatar": "https://avatars.githubusercontent.com/u/1436853"
        },
        {
          "username": "obviyus",
          "href": "https://github.com/obviyus",
          "avatar": "https://avatars.githubusercontent.com/u/22031114"
        },
        {
          "username": "gumadeiras",
          "href": "https://github.com/gumadeiras",
          "avatar": "https://avatars.githubusercontent.com/u/5599352"
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
      "author": "github",
      "repo": "gh-aw",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/gh-aw",
      "desc": "GitHub Agentic Workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 282,
      "added_stars": 2923,
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
      "author": "steipete",
      "repo": "gogcli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/gogcli",
      "desc": "Google Suite CLI: Gmail, GCal, GDrive, GContacts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 464,
      "added_stars": 4530,
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
      "forks": 1683,
      "added_stars": 2590,
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
      "forks": 719,
      "added_stars": 2723,
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
      "author": "asheshgoplani",
      "repo": "agent-deck",
      "avatar": "https://github.com/asheshgoplani.png",
      "repo_link": "https://github.com/asheshgoplani/agent-deck",
      "desc": "Terminal session manager for AI coding agents. One TUI for Claude, Gemini, OpenCode, Codex, and more.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 145,
      "added_stars": 710,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 655,
      "added_stars": 987,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 453,
      "added_stars": 570,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1949,
      "added_stars": 505,
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
      "author": "charmbracelet",
      "repo": "glow",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/glow",
      "desc": "Render markdown on the CLI, with pizzazz! 💅🏻",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 604,
      "added_stars": 847,
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
      "author": "abiosoft",
      "repo": "colima",
      "avatar": "https://github.com/abiosoft.png",
      "repo_link": "https://github.com/abiosoft/colima",
      "desc": "Container runtimes on macOS (and Linux) with minimal setup",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 553,
      "added_stars": 684,
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
      "forks": 289,
      "added_stars": 252,
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
      "author": "Ed1s0nZ",
      "repo": "CyberStrikeAI",
      "avatar": "https://github.com/Ed1s0nZ.png",
      "repo_link": "https://github.com/Ed1s0nZ/CyberStrikeAI",
      "desc": "CyberStrikeAI is an AI-native security testing platform built in Go. It integrates 100+ security tools, an intelligent orchestration engine, role-based testing with predefined security roles, a skills system with specialized testing skills, and comprehensive lifecycle management capabilities.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 436,
      "added_stars": 1908,
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
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 301,
      "added_stars": 659,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 14883,
      "added_stars": 2906,
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
      "author": "m1k1o",
      "repo": "neko",
      "avatar": "https://github.com/m1k1o.png",
      "repo_link": "https://github.com/m1k1o/neko",
      "desc": "A self hosted virtual browser that runs in docker and uses WebRTC.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1372,
      "added_stars": 2449,
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
      "forks": 8050,
      "added_stars": 765,
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
      "author": "dapr",
      "repo": "dapr",
      "avatar": "https://github.com/dapr.png",
      "repo_link": "https://github.com/dapr/dapr",
      "desc": "Dapr is a portable runtime for building distributed applications across cloud and edge, combining event-driven architecture with workflow orchestration.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2054,
      "added_stars": 134,
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
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2576,
      "added_stars": 2005,
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
      "forks": 203,
      "added_stars": 383,
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
      "author": "caddyserver",
      "repo": "caddy",
      "avatar": "https://github.com/caddyserver.png",
      "repo_link": "https://github.com/caddyserver/caddy",
      "desc": "Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4667,
      "added_stars": 1145,
      "builtBy": [
        {
          "username": "mholt",
          "href": "https://github.com/mholt",
          "avatar": "https://avatars.githubusercontent.com/u/1128849"
        },
        {
          "username": "francislavoie",
          "href": "https://github.com/francislavoie",
          "avatar": "https://avatars.githubusercontent.com/u/2111701"
        },
        {
          "username": "mohammed90",
          "href": "https://github.com/mohammed90",
          "avatar": "https://avatars.githubusercontent.com/u/2636183"
        },
        {
          "username": "WeidiDeng",
          "href": "https://github.com/WeidiDeng",
          "avatar": "https://avatars.githubusercontent.com/u/28780594"
        },
        {
          "username": "dunglas",
          "href": "https://github.com/dunglas",
          "avatar": "https://avatars.githubusercontent.com/u/57224"
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
      "forks": 3439,
      "added_stars": 8378,
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
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 395,
      "added_stars": 5583,
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
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 523,
      "added_stars": 7533,
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
      "forks": 1162,
      "added_stars": 6169,
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
      "forks": 546,
      "added_stars": 6316,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 429,
      "added_stars": 4462,
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
      "author": "databricks-solutions",
      "repo": "ai-dev-kit",
      "avatar": "https://github.com/databricks-solutions.png",
      "repo_link": "https://github.com/databricks-solutions/ai-dev-kit",
      "desc": "Databricks Toolkit for Coding Agents provided by Field Engineering",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 163,
      "added_stars": 632,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "+180 production-ready skills & plugins for Claude Code, OpenAI Codex, and OpenClaw — engineering, marketing, product, compliance, C-level advisory, and more. Install via /plugin marketplace.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 453,
      "added_stars": 2176,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 832,
      "added_stars": 2304,
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
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 586,
      "added_stars": 2760,
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
          "username": "welshofer",
          "href": "https://github.com/welshofer",
          "avatar": "https://avatars.githubusercontent.com/u/33588582"
        },
        {
          "username": "Bortlesboat",
          "href": "https://github.com/Bortlesboat",
          "avatar": "https://avatars.githubusercontent.com/u/169967362"
        }
      ]
    },
    {
      "author": "Shubhamsaboo",
      "repo": "awesome-llm-apps",
      "avatar": "https://github.com/Shubhamsaboo.png",
      "repo_link": "https://github.com/Shubhamsaboo/awesome-llm-apps",
      "desc": "Collection of awesome LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and opensource models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 14757,
      "added_stars": 8227,
      "builtBy": [
        {
          "username": "Shubhamsaboo",
          "href": "https://github.com/Shubhamsaboo",
          "avatar": "https://avatars.githubusercontent.com/u/31396011"
        },
        {
          "username": "Madhuvod",
          "href": "https://github.com/Madhuvod",
          "avatar": "https://avatars.githubusercontent.com/u/124294538"
        },
        {
          "username": "onestardao",
          "href": "https://github.com/onestardao",
          "avatar": "https://avatars.githubusercontent.com/u/212544643"
        },
        {
          "username": "libw0430",
          "href": "https://github.com/libw0430",
          "avatar": "https://avatars.githubusercontent.com/u/102198332"
        },
        {
          "username": "awesomekoder",
          "href": "https://github.com/awesomekoder",
          "avatar": "https://avatars.githubusercontent.com/u/258367783"
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
      "forks": 1493,
      "added_stars": 4825,
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
      "author": "anthropics",
      "repo": "claude-code-security-review",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-security-review",
      "desc": "An AI-powered security review GitHub Action using Claude to analyze code changes for security vulnerabilities.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 303,
      "added_stars": 730,
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
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1608,
      "added_stars": 10012,
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
      "author": "google",
      "repo": "langextract",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/langextract",
      "desc": "A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2316,
      "added_stars": 7266,
      "builtBy": [
        {
          "username": "aksg87",
          "href": "https://github.com/aksg87",
          "avatar": "https://avatars.githubusercontent.com/u/19271735"
        },
        {
          "username": "kleeena",
          "href": "https://github.com/kleeena",
          "avatar": "https://avatars.githubusercontent.com/u/62442533"
        },
        {
          "username": "mariano",
          "href": "https://github.com/mariano",
          "avatar": "https://avatars.githubusercontent.com/u/18598"
        },
        {
          "username": "tonebeta",
          "href": "https://github.com/tonebeta",
          "avatar": "https://avatars.githubusercontent.com/u/4890246"
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
      "forks": 6311,
      "added_stars": 2936,
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
      "forks": 18812,
      "added_stars": 7700,
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
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2809,
      "added_stars": 3786,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
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
      "forks": 781,
      "added_stars": 5997,
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
      "author": "inclusionAI",
      "repo": "AReaL",
      "avatar": "https://github.com/inclusionAI.png",
      "repo_link": "https://github.com/inclusionAI/AReaL",
      "desc": "Lightning-Fast RL for LLM Reasoning and Agents. Made Simple & Flexible.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 387,
      "added_stars": 1105,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
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
      "upvotes": "1",
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
    },
    {
      "title": "Next-Translate 3.0.0",
      "url": "https://aralroca.com/blog/next-translate-3-0",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-01T23:13:55.000Z"
    },
    {
      "title": "[AI] Renderify: Executing LLM-generated JSX/TSX directly in the browser, no build step",
      "url": "https://github.com/webllm/renderify",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-26T17:41:12.000Z"
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
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-1889",
      "tags": "top7, discuss",
      "reactions": 31,
      "comments": 13,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "DumbQuestion.ai - Self-Awareness, Prompt Injection, Search Intent... and darkness",
      "description": "Continued from Part 2 (and Part 1) ...  Building DumbQuestion.ai wasn't just about choosing the right...",
      "url": "https://dev.to/jagostoni/dumbquestionai-self-awareness-prompt-injection-search-intent-and-darkness-3pd",
      "tags": "ai, agents, webdev, go",
      "reactions": 30,
      "comments": 6,
      "reading_time": 4,
      "author": "jagostoni"
    },
    {
      "title": "Gemini 2.5 Flash vs Claude 3.7 Sonnet: 4 Production Constraints That Made the Decision for Me",
      "description": "An evaluation of the Gemini 2.5 flash and Claude 3.7 Sonnet model for an agentic engine.  I had a...",
      "url": "https://dev.to/dumebii/gemini-25-flash-vs-claude-37-sonnet-4-production-constraints-that-made-the-decision-for-me-bib",
      "tags": "webdev, javascript, showdev, nextjs",
      "reactions": 33,
      "comments": 9,
      "reading_time": 10,
      "author": "dumebii"
    },
    {
      "title": "I Made Claude Code Think Before It Codes. Here's the Prompt.",
      "description": "Claude Code is the fastest coder I've ever worked with. It can scaffold a feature, write tests, and...",
      "url": "https://dev.to/_vjk/i-made-claude-code-think-before-it-codes-heres-the-prompt-bf",
      "tags": "claudecode, ai, tdd, productivity",
      "reactions": 33,
      "comments": 1,
      "reading_time": 7,
      "author": "_vjk"
    },
    {
      "title": "3 words worth a billion dollars: Drift to Determinism (DriDe)",
      "description": "I doubt I am the first to come up with this concept, but I am probably the first to name it.  Drift...",
      "url": "https://dev.to/grahamthedev/3-words-worth-a-billion-dollars-drift-to-determinism-dride-dej",
      "tags": "webdev, ai, automation, architecture",
      "reactions": 58,
      "comments": 31,
      "reading_time": 7,
      "author": "grahamthedev"
    },
    {
      "title": "TLS Certificates Are About to Expire Way More Often. Here's How I'm Handling It.",
      "description": "If you manage TLS certificates for anything beyond a single server, the next three years are going to...",
      "url": "https://dev.to/krakenhavoc/tls-certificates-are-about-to-expire-way-more-often-heres-how-im-handling-it-40p6",
      "tags": "security, automation, ssl, devops",
      "reactions": 34,
      "comments": 3,
      "reading_time": 3,
      "author": "krakenhavoc"
    },
    {
      "title": "Your Agent Is a Small, Low-Stakes HAL",
      "description": "I work with multi-agent systems that review code, plan architecture, find faults, and critique...",
      "url": "https://dev.to/romanonthego/your-agent-is-a-small-low-stakes-hal-59j8",
      "tags": "ai, programming, llm, agents",
      "reactions": 35,
      "comments": 0,
      "reading_time": 7,
      "author": "romanonthego"
    },
    {
      "title": "Gemini Embedding 2: Our first natively multimodal embedding model",
      "description": "Today we're releasing Gemini Embedding 2, our first fully multimodal embedding model built on the...",
      "url": "https://dev.to/googleai/gemini-embedding-2-our-first-natively-multimodal-embedding-model-4apn",
      "tags": "ai, embedding, google, news",
      "reactions": 36,
      "comments": 1,
      "reading_time": 3,
      "author": "pat_loeber"
    },
    {
      "title": "Running a Local Sandboxed macOS Desktop Using VNC and a Restricted User",
      "description": "Sometimes you want to run commands that you don’t fully trust or that intentionally bypass...",
      "url": "https://dev.to/jlarky/running-a-local-sandboxed-macos-desktop-using-vnc-and-a-restricted-user-38dk",
      "tags": "abotwrotethis, sandbox, security",
      "reactions": 28,
      "comments": 0,
      "reading_time": 3,
      "author": "jlarky"
    },
    {
      "title": "Revamped RSS Feed Imports",
      "description": "You can now add multiple RSS feed imports, monitor their status, and assign each one to different...",
      "url": "https://dev.to/devteam/revamped-rss-feed-imports-3j1e",
      "tags": "forem, devto, rss",
      "reactions": 39,
      "comments": 3,
      "reading_time": 2,
      "author": "jonmarkgo"
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
      "title": "Closing the verification loop: Observability-driven harnesses for building with agents",
      "url": "https://www.datadoghq.com/blog/ai/harness-first-agents/",
      "score": 1,
      "comments": 0,
      "tags": [
        "formalmethods",
        "testing",
        "vibecoding"
      ],
      "id": "pq3mwd"
    },
    {
      "title": "Superpowers 5",
      "url": "https://blog.fsck.com/2026/03/09/superpowers-5/",
      "score": 1,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "x1ot2a"
    },
    {
      "title": "The State of Allocators in 2026",
      "url": "https://cetra3.github.io/blog/state-of-allocators-2026/",
      "score": 2,
      "comments": 1,
      "tags": [
        "plt",
        "rust"
      ],
      "id": "5vuaul"
    },
    {
      "title": "U+237C is Azimuth",
      "url": "https://ionathan.ch/2026/02/16/angzarr.html",
      "score": 5,
      "comments": 1,
      "tags": [
        "historical"
      ],
      "id": "e8lebp"
    },
    {
      "title": "The Emperor's Old Clothes: Tony Hoare's Turing Award Lecture",
      "url": "https://www.labouseur.com/projects/codeReckon/papers/The-Emperors-Old-Clothes.pdf",
      "score": 3,
      "comments": 0,
      "tags": [
        "pdf",
        "philosophy"
      ],
      "id": "udznkb"
    },
    {
      "title": "Type resolution redesign, with language changes to taste",
      "url": "https://ziglang.org/devlog/2026/#2026-03-10",
      "score": 11,
      "comments": 1,
      "tags": [
        "zig"
      ],
      "id": "ev2hsx"
    },
    {
      "title": "Writing my own text editor, and daily-driving it",
      "url": "https://blog.jsbarretto.com/post/text-editor",
      "score": 14,
      "comments": 0,
      "tags": [
        "editors"
      ],
      "id": "ufczx8"
    },
    {
      "title": "AI Artist, Literally",
      "url": "https://www.youtube.com/watch?v=0xbMm-SWqqI",
      "score": 1,
      "comments": 0,
      "tags": [
        "satire",
        "vibecoding",
        "video"
      ],
      "id": "3psi03"
    },
    {
      "title": "Pristan: The simplest way to create a plugin infrastructure in Python",
      "url": "https://github.com/mutating/pristan",
      "score": 1,
      "comments": 0,
      "tags": [
        "python",
        "release"
      ],
      "id": "xru4pp"
    },
    {
      "title": "Cellpond: Spatial programming without escape",
      "url": "https://www.youtube.com/watch?v=eQgxFuw8f1U",
      "score": 6,
      "comments": 1,
      "tags": [
        "compsci",
        "graphics",
        "video",
        "visualization"
      ],
      "id": "c3dfjr"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "ppew",
      "descendants": 29,
      "id": 47332074,
      "kids": [
        47332500,
        47332347,
        47332474,
        47332335,
        47332437,
        47332298,
        47332376,
        47332420,
        47332329,
        47332373,
        47332448,
        47332337,
        47332358,
        47332425
      ],
      "score": 105,
      "time": 1773207949,
      "title": "Create value for others and don’t worry about the returns",
      "type": "story",
      "url": "https://geohot.github.io//blog/jekyll/update/2026/03/11/running-69-agents.html"
    },
    {
      "by": "Retro_Dev",
      "descendants": 49,
      "id": 47330836,
      "kids": [
        47331198,
        47332267,
        47332248,
        47331389
      ],
      "score": 150,
      "time": 1773192287,
      "title": "Zig – Type Resolution Redesign and Language Changes",
      "type": "story",
      "url": "https://ziglang.org/devlog/2026/#2026-03-10"
    },
    {
      "by": "cokernel_hacker",
      "descendants": 24,
      "id": 47329605,
      "kids": [
        47331703,
        47329832,
        47329690,
        47330267,
        47330931,
        47330508,
        47329817,
        47330420,
        47329831,
        47331167,
        47330188,
        47331719
      ],
      "score": 253,
      "time": 1773182025,
      "title": "U+237C ⍼ Is Azimuth",
      "type": "story",
      "url": "https://ionathan.ch/2026/02/16/angzarr.html"
    },
    {
      "by": "TheWiggles",
      "descendants": 6,
      "id": 47295855,
      "kids": [
        47331929
      ],
      "score": 47,
      "time": 1772962054,
      "title": "Julia Snail – An Emacs Development Environment for Julia Like Clojure's Cider",
      "type": "story",
      "url": "https://github.com/gcv/julia-snail"
    },
    {
      "by": "jeffpalmer",
      "descendants": 98,
      "id": 47329557,
      "kids": [
        47329920,
        47330134,
        47330934,
        47330324,
        47330412,
        47330470,
        47330197,
        47330297,
        47330372,
        47330711,
        47330658,
        47331046,
        47329882,
        47330436,
        47330733,
        47331668,
        47330893,
        47331188,
        47330347,
        47330839,
        47330310,
        47329969,
        47330415,
        47331545,
        47330366,
        47330972,
        47330012,
        47330303,
        47330118,
        47330719,
        47332006,
        47331010
      ],
      "score": 238,
      "time": 1773181635,
      "title": "Cloudflare crawl endpoint",
      "type": "story",
      "url": "https://developers.cloudflare.com/changelog/post/2026-03-10-br-crawl-endpoint/"
    },
    {
      "by": "speckx",
      "descendants": 216,
      "id": 47324054,
      "kids": [
        47325225,
        47325228,
        47324442,
        47324567,
        47320767,
        47329093,
        47324427,
        47325844,
        47330576,
        47324502,
        47317333,
        47324179,
        47325200,
        47326141,
        47317281,
        47326246,
        47317445,
        47317547,
        47324523,
        47324939,
        47325281,
        47325033,
        47317623,
        47320299,
        47326703,
        47330734,
        47325711,
        47326917,
        47326400,
        47329728,
        47317057,
        47330119,
        47317610,
        47325807,
        47324456,
        47324455,
        47317257,
        47332170,
        47326539,
        47317141,
        47325007,
        47327757,
        47325172,
        47329868,
        47327805,
        47324209,
        47329562,
        47325532,
        47328186,
        47330914,
        47330049,
        47317241,
        47317394,
        47324893,
        47329172,
        47325063,
        47326601,
        47325722,
        47326444,
        47325345,
        47324416,
        47328740,
        47317633,
        47324301,
        47328722,
        47325967,
        47326742,
        47326746,
        47324574,
        47324572,
        47327348,
        47332022
      ],
      "score": 1693,
      "time": 1773154216,
      "title": "Tony Hoare has died",
      "type": "story",
      "url": "https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html"
    },
    {
      "by": "aray07",
      "descendants": 288,
      "id": 47327559,
      "kids": [
        47331205,
        47327956,
        47328901,
        47327999,
        47330070,
        47327789,
        47331027,
        47328132,
        47331298,
        47332112,
        47328984,
        47332471,
        47328885,
        47331400,
        47327990,
        47327957,
        47329527,
        47330820,
        47330937,
        47331490,
        47331844,
        47330722,
        47328207,
        47330775,
        47328119,
        47329486,
        47327825,
        47330263,
        47331020,
        47327907,
        47331902,
        47328951,
        47328704,
        47327993,
        47330525,
        47331536,
        47331129,
        47327982,
        47329503,
        47327862,
        47331388,
        47327733,
        47328306,
        47328727,
        47331999,
        47331538,
        47331395,
        47331891,
        47331304,
        47331677,
        47331921,
        47330061,
        47327921,
        47327953,
        47329440,
        47328538,
        47327938,
        47329658,
        47330955,
        47327878,
        47330036,
        47328203,
        47329082,
        47330336
      ],
      "score": 298,
      "time": 1773169786,
      "title": "Agents that run while I sleep",
      "type": "story",
      "url": "https://www.claudecodecamp.com/p/i-m-building-agents-that-run-while-i-sleep"
    },
    {
      "by": "helloplanets",
      "descendants": 358,
      "id": 47320600,
      "kids": [
        47321621,
        47328626,
        47321908,
        47322892,
        47324101,
        47330502,
        47321720,
        47321807,
        47329470,
        47322982,
        47331320,
        47331670,
        47331094,
        47321995,
        47331886,
        47323522,
        47331894,
        47326811,
        47321679,
        47321293,
        47323877,
        47330635,
        47322724,
        47321909,
        47325635,
        47324093,
        47320861,
        47328047,
        47330294,
        47321946,
        47324183,
        47324048,
        47327527,
        47320658,
        47321680,
        47327898,
        47330382,
        47321222,
        47328600,
        47322586,
        47322374,
        47324061,
        47327537,
        47328013,
        47327779,
        47327372,
        47324160,
        47325515,
        47320675,
        47330271,
        47322121,
        47330322,
        47320856,
        47330330,
        47327959,
        47330473,
        47321654,
        47322992,
        47321580,
        47327774,
        47321643,
        47321708
      ],
      "score": 426,
      "text": "<a href=\"https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260310153721&#x2F;https:&#x2F;&#x2F;www.wired.com&#x2F;story&#x2F;yann-lecun-raises-dollar1-billion-to-build-ai-that-understands-the-physical-world&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260310153721&#x2F;https:&#x2F;&#x2F;www.wired...</a><p><a href=\"https:&#x2F;&#x2F;www.ft.com&#x2F;content&#x2F;e5245ec3-1a58-4eff-ab58-480b6259aaf1\" rel=\"nofollow\">https:&#x2F;&#x2F;www.ft.com&#x2F;content&#x2F;e5245ec3-1a58-4eff-ab58-480b6259a...</a> (<a href=\"https:&#x2F;&#x2F;archive.md&#x2F;5eZWq\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.md&#x2F;5eZWq</a>)",
      "time": 1773132413,
      "title": "Yann LeCun raises $1B to build AI that understands the physical world",
      "type": "story",
      "url": "https://www.wired.com/story/yann-lecun-raises-dollar1-billion-to-build-ai-that-understands-the-physical-world/"
    },
    {
      "by": "todsacerdoti",
      "descendants": 199,
      "id": 47328214,
      "kids": [
        47328343,
        47330531,
        47328658,
        47330828,
        47328514,
        47330701,
        47328449,
        47330741,
        47332364,
        47330736,
        47330533,
        47329327,
        47328587,
        47329377,
        47329113,
        47328810,
        47328644,
        47328632,
        47328542,
        47328696,
        47329092
      ],
      "score": 209,
      "time": 1773173514,
      "title": "RISC-V Is Sloooow",
      "type": "story",
      "url": "https://marcin.juszkiewicz.com.pl/2026/03/10/risc-v-is-sloooow/"
    },
    {
      "by": "todsacerdoti",
      "descendants": 15,
      "id": 47331034,
      "kids": [
        47332139,
        47331705,
        47331916,
        47331526,
        47331869,
        47331922,
        47332234,
        47331852,
        47331669,
        47331418
      ],
      "score": 74,
      "time": 1773194662,
      "title": "Writing my own text editor, and daily-driving it",
      "type": "story",
      "url": "https://blog.jsbarretto.com/post/text-editor"
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
      "title": "Unboxable in Tech",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience     \"I don't know which box...",
      "url": "https://dev.to/pascal_cescato_692b7a8a20/unboxable-in-tech-2knm",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 11,
      "comments": 3,
      "reading_time": 7,
      "author": "pascal_cescato_692b7a8a20"
    },
    {
      "title": "DevOps is dead, Long live Platform Engineering",
      "description": "For more than a decade DevOps has been one of the most influential movements in software engineering....",
      "url": "https://dev.to/rakshath/devops-is-dead-long-live-platform-engineering-1f11",
      "tags": "devops, platformengineering, beginners, career",
      "reactions": 0,
      "comments": 1,
      "reading_time": 5,
      "author": "rakshath"
    },
    {
      "title": "The Cover Letter Most Developers Skip and When Writing One Wins the Interview",
      "description": "Most developers treat the cover letter field like a trap. You see \"optional\" and move on. Your resume...",
      "url": "https://dev.to/sira_ai/the-cover-letter-most-developers-skip-and-when-writing-one-wins-the-interview-2acn",
      "tags": "career, resume, jobsearch, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "sira_ai"
    },
    {
      "title": "From Zero Coding Knowledge to Full-Stack Developer",
      "description": "When I started my academic journey, I had no knowledge of coding. I was an FSC Pre-Engineering...",
      "url": "https://dev.to/rehmanstackdev/from-zero-coding-knowledge-to-full-stack-developer-pll",
      "tags": "wecoded, programming, webdev, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "rehmanstackdev"
    },
    {
      "title": "The AI Practitioner Ladder Where Are You, Really?",
      "description": "Most AI practitioners are further back on the competence curve than they think. Frequency of use...",
      "url": "https://dev.to/contextfirstai/the-ai-practitioner-ladder-where-are-you-really-3ae9",
      "tags": "ai, career, learning, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 10,
      "author": "contextfirstai"
    },
    {
      "title": "Amazon Now Requires Senior Engineers to Sign Off on AI Code — Here's Why That Matters",
      "description": "Amazon just told junior and mid-level engineers they need a senior engineer to sign off on any...",
      "url": "https://dev.to/adioof/amazon-now-requires-senior-engineers-to-sign-off-on-ai-code-heres-why-that-matters-2ol6",
      "tags": "ai, programming, career, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "adioof"
    },
    {
      "title": "How to explain SOLID principle to interviewers",
      "description": "When interviewers ask about SOLID principles, they usually expect:   A short definition, A simple...",
      "url": "https://dev.to/bhu_kalki/how-to-explain-solid-principle-to-interviewers-14hd",
      "tags": "career, codequality, interview, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "bhu_kalki"
    },
    {
      "title": "Why self-assessment is broken (and how I fixed it with binary evidence)",
      "description": "The Problem   Last month I tried to honestly assess my skills as a solopreneur. The standard...",
      "url": "https://dev.to/indirakumar/why-self-assessment-is-broken-and-how-i-fixed-it-with-binary-evidence-3h51",
      "tags": "webdev, solopreneur, productivity, career",
      "reactions": 5,
      "comments": 0,
      "reading_time": 2,
      "author": "indirakumar"
    },
    {
      "title": "2 YOE Full‑Stack dev: how to choose between AI and Blockchain?",
      "description": "I have ~2 years of experience as a software engineer working across full‑stack web and some mobile...",
      "url": "https://dev.to/rishuishind/2-yoe-full-stack-dev-how-to-choose-between-ai-and-blockchain-12n8",
      "tags": "career, blockchain, ai, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 1,
      "author": "rishuishind"
    },
    {
      "title": "Ship Every Day: Progress is a Puzzle Made Piece by Piece",
      "description": "Core Leadership Principle #3     When I was junior, I watched companies and teams measure success by...",
      "url": "https://dev.to/daniloab/ship-every-day-progress-is-a-puzzle-made-piece-by-piece-35ml",
      "tags": "leadership, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "daniloab"
    }
  ]
}
```

