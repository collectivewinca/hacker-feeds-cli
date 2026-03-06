# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-06 07:07:41 UTC

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
      "forks": 2657,
      "added_stars": 8822,
      "builtBy": [
        {
          "username": "nekomeowww",
          "href": "https://github.com/nekomeowww",
          "avatar": "https://avatars.githubusercontent.com/u/11081491"
        },
        {
          "username": "luoling8192",
          "href": "https://github.com/luoling8192",
          "avatar": "https://avatars.githubusercontent.com/u/44741987"
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
      "author": "abhigyanpatwari",
      "repo": "GitNexus",
      "avatar": "https://github.com/abhigyanpatwari.png",
      "repo_link": "https://github.com/abhigyanpatwari/GitNexus",
      "desc": "GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a GitHub repo or ZIP file, and get an interactive knowledge graph wit a built in Graph RAG Agent. Perfect for code exploration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1256,
      "added_stars": 5308,
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
          "username": "paulrobello",
          "href": "https://github.com/paulrobello",
          "avatar": "https://avatars.githubusercontent.com/u/955011"
        },
        {
          "username": "magyargergo",
          "href": "https://github.com/magyargergo",
          "avatar": "https://avatars.githubusercontent.com/u/11230420"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 4227,
      "added_stars": 3049,
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
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The leading agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features enterprise-grade architecture, distributed swarm intelligence, RAG integration, and native Claude Code / Codex Integration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2151,
      "added_stars": 4330,
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
      "author": "superset-sh",
      "repo": "superset",
      "avatar": "https://github.com/superset-sh.png",
      "repo_link": "https://github.com/superset-sh/superset",
      "desc": "IDE for the AI Agents Era - Run an army of Claude Code, Codex, etc. on your machine",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 314,
      "added_stars": 2930,
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
      "author": "CodebuffAI",
      "repo": "codebuff",
      "avatar": "https://github.com/CodebuffAI.png",
      "repo_link": "https://github.com/CodebuffAI/codebuff",
      "desc": "Generate code from the terminal!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 461,
      "added_stars": 864,
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
      "author": "ItzCrazyKns",
      "repo": "Perplexica",
      "avatar": "https://github.com/ItzCrazyKns.png",
      "repo_link": "https://github.com/ItzCrazyKns/Perplexica",
      "desc": "Perplexica is an AI-powered answering engine.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3333,
      "added_stars": 2162,
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
      "author": "siteboon",
      "repo": "claudecodeui",
      "avatar": "https://github.com/siteboon.png",
      "repo_link": "https://github.com/siteboon/claudecodeui",
      "desc": "Use Claude Code, Cursor CLI or Codex on mobile and web with CloudCLI (aka Claude Code UI). CloudCLI is a free open source webui/GUI that helps you manage your Claude Code session and projects remotely",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 997,
      "added_stars": 649,
      "builtBy": [
        {
          "username": "viper151",
          "href": "https://github.com/viper151",
          "avatar": "https://avatars.githubusercontent.com/u/7479045"
        },
        {
          "username": "blackmammoth",
          "href": "https://github.com/blackmammoth",
          "avatar": "https://avatars.githubusercontent.com/u/118998054"
        },
        {
          "username": "EricBlanquer",
          "href": "https://github.com/EricBlanquer",
          "avatar": "https://avatars.githubusercontent.com/u/1058958"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "unsystemizer",
          "href": "https://github.com/unsystemizer",
          "avatar": "https://avatars.githubusercontent.com/u/13134193"
        }
      ]
    },
    {
      "author": "farion1231",
      "repo": "cc-switch",
      "avatar": "https://github.com/farion1231.png",
      "repo_link": "https://github.com/farion1231/cc-switch",
      "desc": "A cross-platform desktop All-in-One assistant tool for Claude Code, Codex, OpenCode, openclaw & Gemini CLI.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1500,
      "added_stars": 3648,
      "builtBy": [
        {
          "username": "farion1231",
          "href": "https://github.com/farion1231",
          "avatar": "https://avatars.githubusercontent.com/u/44939412"
        },
        {
          "username": "yovinchen",
          "href": "https://github.com/yovinchen",
          "avatar": "https://avatars.githubusercontent.com/u/76760071"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "TinsFox",
          "href": "https://github.com/TinsFox",
          "avatar": "https://avatars.githubusercontent.com/u/33956589"
        },
        {
          "username": "tianrking",
          "href": "https://github.com/tianrking",
          "avatar": "https://avatars.githubusercontent.com/u/10758833"
        }
      ]
    },
    {
      "author": "vercel",
      "repo": "chat",
      "avatar": "https://github.com/vercel.png",
      "repo_link": "https://github.com/vercel/chat",
      "desc": "A unified TypeScript SDK for building chat bots across Slack, Microsoft Teams, Google Chat, Discord, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 77,
      "added_stars": 289,
      "builtBy": [
        {
          "username": "cramforce",
          "href": "https://github.com/cramforce",
          "avatar": "https://avatars.githubusercontent.com/u/89679"
        },
        {
          "username": "haydenbleasel",
          "href": "https://github.com/haydenbleasel",
          "avatar": "https://avatars.githubusercontent.com/u/4142719"
        },
        {
          "username": "nandorojo",
          "href": "https://github.com/nandorojo",
          "avatar": "https://avatars.githubusercontent.com/u/13172299"
        },
        {
          "username": "visyat",
          "href": "https://github.com/visyat",
          "avatar": "https://avatars.githubusercontent.com/u/135551666"
        },
        {
          "username": "JohnPhamous",
          "href": "https://github.com/JohnPhamous",
          "avatar": "https://avatars.githubusercontent.com/u/16027268"
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
      "forks": 437,
      "added_stars": 4243,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "salmonumbrella",
          "href": "https://github.com/salmonumbrella",
          "avatar": "https://avatars.githubusercontent.com/u/182032677"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 1599,
      "added_stars": 1861,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 14790,
      "added_stars": 2822,
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
          "username": "jessegross",
          "href": "https://github.com/jessegross",
          "avatar": "https://avatars.githubusercontent.com/u/6468499"
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
      "forks": 135,
      "added_stars": 642,
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
          "username": "artwist-polyakov",
          "href": "https://github.com/artwist-polyakov",
          "avatar": "https://avatars.githubusercontent.com/u/42345388"
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
      "forks": 552,
      "added_stars": 1552,
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
          "username": "slovx2",
          "href": "https://github.com/slovx2",
          "avatar": "https://avatars.githubusercontent.com/u/2713715"
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
      "forks": 448,
      "added_stars": 543,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8024,
      "added_stars": 682,
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
      "forks": 1945,
      "added_stars": 462,
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
      "forks": 597,
      "added_stars": 788,
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
      "forks": 544,
      "added_stars": 721,
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
      "forks": 285,
      "added_stars": 239,
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
      "author": "github",
      "repo": "gh-aw",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/gh-aw",
      "desc": "GitHub Agentic Workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 277,
      "added_stars": 3481,
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
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 286,
      "added_stars": 651,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 653,
      "added_stars": 883,
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
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2561,
      "added_stars": 1988,
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
      "author": "juanfont",
      "repo": "headscale",
      "avatar": "https://github.com/juanfont.png",
      "repo_link": "https://github.com/juanfont/headscale",
      "desc": "An open source, self-hosted implementation of the Tailscale control server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1940,
      "added_stars": 1267,
      "builtBy": [
        {
          "username": "kradalby",
          "href": "https://github.com/kradalby",
          "avatar": "https://avatars.githubusercontent.com/u/98431"
        },
        {
          "username": "juanfont",
          "href": "https://github.com/juanfont",
          "avatar": "https://avatars.githubusercontent.com/u/181059"
        },
        {
          "username": "nblock",
          "href": "https://github.com/nblock",
          "avatar": "https://avatars.githubusercontent.com/u/131119"
        },
        {
          "username": "restanrm",
          "href": "https://github.com/restanrm",
          "avatar": "https://avatars.githubusercontent.com/u/4344371"
        }
      ]
    },
    {
      "author": "charmbracelet",
      "repo": "gum",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/gum",
      "desc": "A tool for glamorous shell scripts 🎀",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 468,
      "added_stars": 535,
      "builtBy": [
        {
          "username": "maaslalani",
          "href": "https://github.com/maaslalani",
          "avatar": "https://avatars.githubusercontent.com/u/42545625"
        },
        {
          "username": "caarlos0",
          "href": "https://github.com/caarlos0",
          "avatar": "https://avatars.githubusercontent.com/u/245435"
        },
        {
          "username": "aymanbagabas",
          "href": "https://github.com/aymanbagabas",
          "avatar": "https://avatars.githubusercontent.com/u/3187948"
        },
        {
          "username": "meowgorithm",
          "href": "https://github.com/meowgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/25087"
        }
      ]
    },
    {
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The to-do app to organize your life.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 335,
      "added_stars": 320,
      "builtBy": [
        {
          "username": "kolaente",
          "href": "https://github.com/kolaente",
          "avatar": "https://avatars.githubusercontent.com/u/13721712"
        },
        {
          "username": "dpschen",
          "href": "https://github.com/dpschen",
          "avatar": "https://avatars.githubusercontent.com/u/6173598"
        },
        {
          "username": "vikunja-bot",
          "href": "https://github.com/vikunja-bot",
          "avatar": "https://avatars.githubusercontent.com/u/45438395"
        },
        {
          "username": "Elscrux",
          "href": "https://github.com/Elscrux",
          "avatar": "https://avatars.githubusercontent.com/u/34755314"
        }
      ]
    },
    {
      "author": "steipete",
      "repo": "wacli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/wacli",
      "desc": "WhatsApp CLI",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 100,
      "added_stars": 271,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "plattenschieber",
          "href": "https://github.com/plattenschieber",
          "avatar": "https://avatars.githubusercontent.com/u/1213794"
        },
        {
          "username": "zats",
          "href": "https://github.com/zats",
          "avatar": "https://avatars.githubusercontent.com/u/2688806"
        },
        {
          "username": "nitinalabur",
          "href": "https://github.com/nitinalabur",
          "avatar": "https://avatars.githubusercontent.com/u/1986214"
        },
        {
          "username": "ramarivera",
          "href": "https://github.com/ramarivera",
          "avatar": "https://avatars.githubusercontent.com/u/7547875"
        }
      ]
    },
    {
      "author": "open-telemetry",
      "repo": "opentelemetry-collector-contrib",
      "avatar": "https://github.com/open-telemetry.png",
      "repo_link": "https://github.com/open-telemetry/opentelemetry-collector-contrib",
      "desc": "Contrib repository for the OpenTelemetry Collector",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3404,
      "added_stars": 104,
      "builtBy": [
        {
          "username": "bogdandrutu",
          "href": "https://github.com/bogdandrutu",
          "avatar": "https://avatars.githubusercontent.com/u/1373887"
        },
        {
          "username": "opentelemetrybot",
          "href": "https://github.com/opentelemetrybot",
          "avatar": "https://avatars.githubusercontent.com/u/107717825"
        },
        {
          "username": "atoulme",
          "href": "https://github.com/atoulme",
          "avatar": "https://avatars.githubusercontent.com/u/16758"
        }
      ]
    },
    {
      "author": "majd",
      "repo": "ipatool",
      "avatar": "https://github.com/majd.png",
      "repo_link": "https://github.com/majd/ipatool",
      "desc": "Command-line tool that allows searching and downloading app packages (known as ipa files) from the iOS App Store",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 729,
      "added_stars": 371,
      "builtBy": [
        {
          "username": "majd",
          "href": "https://github.com/majd",
          "avatar": "https://avatars.githubusercontent.com/u/1644696"
        },
        {
          "username": "ViRb3",
          "href": "https://github.com/ViRb3",
          "avatar": "https://avatars.githubusercontent.com/u/2650170"
        },
        {
          "username": "tux-mind",
          "href": "https://github.com/tux-mind",
          "avatar": "https://avatars.githubusercontent.com/u/1824153"
        },
        {
          "username": "testwill",
          "href": "https://github.com/testwill",
          "avatar": "https://avatars.githubusercontent.com/u/8717479"
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
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 329,
      "added_stars": 4664,
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
      "forks": 490,
      "added_stars": 7112,
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
          "username": "abidlabs",
          "href": "https://github.com/abidlabs",
          "avatar": "https://avatars.githubusercontent.com/u/1778297"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "irangareddy",
          "href": "https://github.com/irangareddy",
          "avatar": "https://avatars.githubusercontent.com/u/60821111"
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
      "forks": 1064,
      "added_stars": 5869,
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
      "forks": 366,
      "added_stars": 3762,
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
          "username": "ZaynJarvis",
          "href": "https://github.com/ZaynJarvis",
          "avatar": "https://avatars.githubusercontent.com/u/31875147"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 2947,
      "added_stars": 5103,
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
      "author": "openai",
      "repo": "skills",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/skills",
      "desc": "Skills Catalog for Codex",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 627,
      "added_stars": 6886,
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
          "username": "ae-openai",
          "href": "https://github.com/ae-openai",
          "avatar": "https://avatars.githubusercontent.com/u/173195103"
        },
        {
          "username": "edward-bayes",
          "href": "https://github.com/edward-bayes",
          "avatar": "https://avatars.githubusercontent.com/u/191618473"
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
      "forks": 462,
      "added_stars": 5322,
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
      "author": "databricks-solutions",
      "repo": "ai-dev-kit",
      "avatar": "https://github.com/databricks-solutions.png",
      "repo_link": "https://github.com/databricks-solutions/ai-dev-kit",
      "desc": "Databricks Toolkit for Coding Agents provided by Field Engineering",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 146,
      "added_stars": 665,
      "builtBy": [
        {
          "username": "calreynolds",
          "href": "https://github.com/calreynolds",
          "avatar": "https://avatars.githubusercontent.com/u/49540501"
        },
        {
          "username": "dustinvannoy-db",
          "href": "https://github.com/dustinvannoy-db",
          "avatar": "https://avatars.githubusercontent.com/u/126025751"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "author": "google",
      "repo": "langextract",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/langextract",
      "desc": "A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2298,
      "added_stars": 10437,
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1572,
      "added_stars": 7082,
      "builtBy": [
        {
          "username": "rejojer",
          "href": "https://github.com/rejojer",
          "avatar": "https://avatars.githubusercontent.com/u/8255061"
        },
        {
          "username": "zmtomorrow",
          "href": "https://github.com/zmtomorrow",
          "avatar": "https://avatars.githubusercontent.com/u/13518252"
        },
        {
          "username": "BukeLy",
          "href": "https://github.com/BukeLy",
          "avatar": "https://avatars.githubusercontent.com/u/19304666"
        },
        {
          "username": "clarenceluo78",
          "href": "https://github.com/clarenceluo78",
          "avatar": "https://avatars.githubusercontent.com/u/71917860"
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
      "forks": 824,
      "added_stars": 2273,
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
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6195,
      "added_stars": 2743,
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
      "author": "NevaMind-AI",
      "repo": "memU",
      "avatar": "https://github.com/NevaMind-AI.png",
      "repo_link": "https://github.com/NevaMind-AI/memU",
      "desc": "Memory for 24/7 proactive agents like openclaw (moltbot, clawdbot).",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 919,
      "added_stars": 4904,
      "builtBy": [
        {
          "username": "sairin1202",
          "href": "https://github.com/sairin1202",
          "avatar": "https://avatars.githubusercontent.com/u/5654879"
        },
        {
          "username": "evan-ak",
          "href": "https://github.com/evan-ak",
          "avatar": "https://avatars.githubusercontent.com/u/33013709"
        },
        {
          "username": "ankaisen",
          "href": "https://github.com/ankaisen",
          "avatar": "https://avatars.githubusercontent.com/u/51148505"
        },
        {
          "username": "Koimiao-zz",
          "href": "https://github.com/Koimiao-zz",
          "avatar": "https://avatars.githubusercontent.com/u/224523934"
        }
      ]
    },
    {
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "A Collection of Skills for Claude Code and Claude AI for real-world Usage. Including Claude Code Subagents, Claude Code Commnads",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 329,
      "added_stars": 880,
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
      "author": "taylorwilsdon",
      "repo": "google_workspace_mcp",
      "avatar": "https://github.com/taylorwilsdon.png",
      "repo_link": "https://github.com/taylorwilsdon/google_workspace_mcp",
      "desc": "Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search & Drive with AI - Comprehensive Google Workspace / G Suite MCP Server & CLI Tool",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 499,
      "added_stars": 399,
      "builtBy": [
        {
          "username": "taylorwilsdon",
          "href": "https://github.com/taylorwilsdon",
          "avatar": "https://avatars.githubusercontent.com/u/6508528"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shawnzhu",
          "href": "https://github.com/shawnzhu",
          "avatar": "https://avatars.githubusercontent.com/u/1059372"
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
      "forks": 1424,
      "added_stars": 3630,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "Fun little elevator simulator",
      "url": "https://elevators.ltd",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-05T23:22:25.000Z"
    },
    {
      "title": "GPT‑5.3 Instant System Card",
      "url": "https://openai.com/index/gpt-5-3-instant-system-card/",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-05T14:18:45.000Z"
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
    },
    {
      "title": "[AI] Getting Started with the Vercel AI SDK in Node.js",
      "url": "https://thecodebarbarian.com/getting-started-with-the-vercel-ai-sdk-in-nodejs.html",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-02-24T16:07:07.000Z"
    },
    {
      "title": "From instanceof to Error.isError: safer error checking in JavaScript",
      "url": "https://allthingssmitty.com/2026/02/23/from-instanceof-to-error-iserror-safer-error-checking-in-javascript/",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-02-24T13:34:27.000Z"
    },
    {
      "title": "[AI] swagent – Convert OpenAPI specs to llms.txt",
      "url": "https://swagent.dev",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-24T02:57:51.000Z"
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
      "title": "Share, Embed, and Curate Agent Sessions on DEV [Beta]",
      "description": "Authors can now upload Agent Session transcripts to their DEV account. Those transcripts can be...",
      "url": "https://dev.to/devteam/share-embed-and-curate-agent-sessions-on-dev-beta-5bj6",
      "tags": "ai, forem, devto, gemini",
      "reactions": 51,
      "comments": 13,
      "reading_time": 3,
      "author": "jonmarkgo"
    },
    {
      "title": "React: Singletons aren't as evil as you think",
      "description": "In the world of React, the humble singleton gets a bit of a bad rap. It is often dismissed as a messy...",
      "url": "https://dev.to/link2twenty/react-singletons-arent-as-evil-as-you-think-44m8",
      "tags": "react, webdev, singleton",
      "reactions": 30,
      "comments": 1,
      "reading_time": 6,
      "author": "link2twenty"
    },
    {
      "title": "How Claude Skills Replaced Our Documentation",
      "description": "Why encoding codebase patterns as AI instructions works better than writing docs nobody...",
      "url": "https://dev.to/magnusrodseth/how-claude-skills-replaced-our-documentation-emi",
      "tags": "webdev, ai, documentation, productivity",
      "reactions": 23,
      "comments": 3,
      "reading_time": 6,
      "author": "magnusrodseth"
    },
    {
      "title": "Retention Over Clicks: A Surprising Lesson from Browser Game Analytics",
      "description": "Retention Matters More Than Traffic   In this series, I discuss various aspects of...",
      "url": "https://dev.to/sebhoek/retention-over-clicks-a-surprising-lesson-from-browser-game-analytics-3o86",
      "tags": "webdev, programming, analytics",
      "reactions": 29,
      "comments": 7,
      "reading_time": 4,
      "author": "sebhoek"
    },
    {
      "title": "The Old Seniority Definition Is Collapsing",
      "description": "For a long time, “senior developer” was a fairly consistent signal. You expected someone who could...",
      "url": "https://dev.to/marcosomma/the-old-seniority-definition-is-collapsing-12lj",
      "tags": "ai, programming, python, javascript",
      "reactions": 18,
      "comments": 4,
      "reading_time": 5,
      "author": "marcosomma"
    },
    {
      "title": "The Silent Behavioral Shift: Why GPT-5.4 Exposes the UI's Fragile Dependence on Backend Semantics",
      "description": "The release of GPT-5.4 isn't just another incremental LLM update; it's a stark reminder of a...",
      "url": "https://dev.to/sovereignrevenueguard/the-silent-behavioral-shift-why-gpt-54-exposes-the-uis-fragile-dependence-on-backend-semantics-1lkl",
      "tags": "observability, webdev, monitoring, devops",
      "reactions": 4,
      "comments": 0,
      "reading_time": 4,
      "author": "sovereignrevenueguard"
    },
    {
      "title": "I built a tiny Linux tool that shouts “FAHH” when I type the wrong command",
      "description": "I built a tiny Linux tool that shouts “FAHH” when I type the wrong command   A few weeks ago...",
      "url": "https://dev.to/hamzatopo/i-built-a-tiny-linux-tool-that-shouts-fahh-when-i-type-the-wrong-command-3fio",
      "tags": "cli, linux, showdev, tooling",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "hamzatopo"
    },
    {
      "title": "i built a social platform where everything vanishes after 24 hours",
      "description": "genjutsu is a fast-paced, developer-focused social network where everything vanishes every 24 hours....",
      "url": "https://dev.to/iamovi/i-built-a-social-platform-where-everything-vanishes-after-24-hours-3imk",
      "tags": "socialmedia, showdev, webdev, typescript",
      "reactions": 66,
      "comments": 36,
      "reading_time": 2,
      "author": "iamovi"
    },
    {
      "title": "What’s the Worst Advice AI Has Given You? Here’s Mine.",
      "description": "I recently saw a meme about terrible legacy code on platform X and it gave me an idea for a...",
      "url": "https://dev.to/gramli/whats-the-worst-advice-ai-has-given-you-heres-mine-58j4",
      "tags": "discuss, ai, chatgpt, security",
      "reactions": 40,
      "comments": 21,
      "reading_time": 2,
      "author": "gramli"
    },
    {
      "title": "I Shipped Broken Code and Wrote an Article About It",
      "description": "This is part of a series on what AI actually changes in software development. Previous pieces: The...",
      "url": "https://dev.to/dannwaneri/i-shipped-broken-code-and-wrote-an-article-about-it-98p",
      "tags": "ai, opensource, webdev, productivity",
      "reactions": 36,
      "comments": 5,
      "reading_time": 5,
      "author": "dannwaneri"
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
      "title": "Fixing a major evaluation order footgun in Rye 0.2",
      "url": "https://ryelang.org/blog/posts/rye-0.2-whats-new/",
      "score": 1,
      "comments": 0,
      "tags": [
        "plt",
        "release"
      ],
      "id": "wp02oa"
    },
    {
      "title": "10% of Firefox crashes are caused by bitflips",
      "url": "https://mas.to/@gabrielesvelto/116171750653898304",
      "score": 2,
      "comments": 1,
      "tags": [
        "hardware"
      ],
      "id": "e5vqyc"
    },
    {
      "title": "Howard Abrams' Literate Programming with Org Mode",
      "url": "https://www.youtube.com/watch?v=OUuz9-CtCwY",
      "score": 3,
      "comments": 0,
      "tags": [
        "emacs",
        "lisp",
        "practices",
        "video"
      ],
      "id": "ssnawm"
    },
    {
      "title": "Play the New York Times Connections puzzle with DuckDB",
      "url": "https://github.com/tomjakubowski/connections.duckdb",
      "score": 3,
      "comments": 0,
      "tags": [
        "databases",
        "games",
        "show"
      ],
      "id": "weq6xq"
    },
    {
      "title": "rustc-php: A Rust compiler with ownership checking, written in PHP",
      "url": "https://github.com/mrconter1/rustc-php",
      "score": 3,
      "comments": 0,
      "tags": [
        "php",
        "rust"
      ],
      "id": "zi8gx5"
    },
    {
      "title": "The Lisp Machine: Noble Experiment or Fabulous Failure? (1991)",
      "url": "https://www.chai.uni-hamburg.de/~moeller/symbolics-info/literature/LispM.pdf",
      "score": 1,
      "comments": 0,
      "tags": [
        "historical",
        "lisp",
        "osdev",
        "pdf"
      ],
      "id": "8hysy0"
    },
    {
      "title": "How to Install and Start Using LineageOS on your Phone",
      "url": "https://lockywolf.net/2026-02-19_How-to-install-and-start-using-LineageOS-on-your-phone.d/index.html",
      "score": 5,
      "comments": 0,
      "tags": [
        "osdev",
        "reversing"
      ],
      "id": "fhhg1v"
    },
    {
      "title": "Ladybird browser update (February 2026)",
      "url": "https://www.youtube.com/watch?v=Y3tteHSrJlY",
      "score": 13,
      "comments": 2,
      "tags": [
        "browsers",
        "video"
      ],
      "id": "iqfdk8"
    },
    {
      "title": "Async Programming Is Just @Inject Time",
      "url": "https://willhbr.net/2026/03/02/async-inject-and-effects/",
      "score": 7,
      "comments": 0,
      "tags": [
        "compilers",
        "plt",
        "programming"
      ],
      "id": "t429kz"
    },
    {
      "title": "ascend : run Python functions on Kubernetes",
      "url": "https://ocramz.github.io/posts/2026-03-05-ascend.html",
      "score": 1,
      "comments": 1,
      "tags": [
        "devops",
        "distributed",
        "python",
        "scaling"
      ],
      "id": "i7hyhy"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "LorenDB",
      "descendants": 84,
      "id": 47270784,
      "kids": [
        47271273,
        47271401,
        47271722,
        47271869,
        47271866,
        47271288,
        47271805,
        47271593,
        47271506,
        47271780,
        47271353,
        47271766,
        47271645,
        47271723,
        47271478,
        47271753,
        47271656,
        47271679,
        47271512,
        47271244,
        47271486,
        47271347,
        47271280,
        47271542,
        47271694,
        47271317,
        47271269,
        47271250
      ],
      "score": 138,
      "time": 1772770346,
      "title": "System76 on Age Verification Laws",
      "type": "story",
      "url": "https://blog.system76.com/post/system76-on-age-verification/"
    },
    {
      "by": "mudkipdev",
      "descendants": 636,
      "id": 47265045,
      "kids": [
        47265146,
        47267414,
        47266377,
        47267463,
        47267148,
        47265249,
        47265143,
        47265507,
        47265543,
        47267056,
        47267296,
        47266654,
        47265322,
        47265330,
        47268556,
        47271297,
        47265768,
        47265144,
        47265256,
        47265254,
        47271419,
        47267327,
        47271776,
        47265490,
        47270129,
        47266787,
        47267607,
        47265497,
        47267053,
        47266609,
        47271315,
        47265672,
        47265295,
        47269007,
        47265644,
        47270490,
        47271021,
        47265534,
        47270287,
        47265692,
        47270712,
        47271363,
        47265539,
        47266139,
        47265713,
        47269500,
        47265833,
        47266554,
        47269078,
        47265457,
        47265764,
        47266659,
        47267398,
        47267264,
        47268165,
        47265343,
        47265884,
        47267618,
        47265261,
        47265422,
        47267355,
        47269397,
        47265550,
        47265401,
        47266720,
        47269585,
        47269595,
        47270633,
        47270263,
        47270178,
        47269615,
        47265389,
        47265746,
        47267140,
        47269043,
        47267144,
        47268393,
        47270305,
        47267760,
        47265405,
        47266730,
        47265347,
        47268254,
        47268177,
        47267828,
        47269232,
        47267251,
        47266453,
        47265742,
        47265643,
        47265629,
        47265609,
        47265464,
        47265728,
        47265030,
        47267976,
        47267581,
        47270407,
        47265350,
        47265954,
        47271871,
        47271808,
        47265263,
        47271547,
        47270425,
        47270904,
        47269196,
        47268234,
        47265267,
        47266081,
        47267410,
        47265253,
        47265410,
        47265732,
        47265602,
        47266092,
        47265891,
        47267182
      ],
      "score": 769,
      "text": "<a href=\"https:&#x2F;&#x2F;openai.com&#x2F;index&#x2F;gpt-5-4-thinking-system-card&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;openai.com&#x2F;index&#x2F;gpt-5-4-thinking-system-card&#x2F;</a><p><a href=\"https:&#x2F;&#x2F;x.com&#x2F;OpenAI&#x2F;status&#x2F;2029620619743219811\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;OpenAI&#x2F;status&#x2F;2029620619743219811</a>",
      "time": 1772734090,
      "title": "GPT-5.4",
      "type": "story",
      "url": "https://openai.com/index/introducing-gpt-5-4/"
    },
    {
      "by": "marvinborner",
      "descendants": 233,
      "id": 47252971,
      "kids": [
        47258500,
        47268906,
        47271844,
        47256495,
        47271820,
        47270831,
        47268443,
        47253870,
        47271132,
        47271862,
        47254476,
        47256746,
        47270329,
        47268641,
        47271285,
        47269103,
        47268664,
        47269756,
        47270962,
        47269527,
        47254523,
        47268982,
        47256060,
        47270306,
        47269056,
        47254550,
        47270661,
        47270364,
        47270085,
        47255251,
        47268672,
        47260060,
        47269040,
        47269337,
        47254869,
        47254840,
        47268773,
        47268681,
        47268981,
        47268885,
        47268552,
        47268415,
        47269731,
        47253065,
        47255086,
        47255145
      ],
      "score": 467,
      "time": 1772654304,
      "title": "10% of Firefox crashes are caused by bitflips",
      "type": "story",
      "url": "https://mas.to/@gabrielesvelto/116171750653898304"
    },
    {
      "by": "gz09",
      "descendants": 59,
      "id": 47225655,
      "kids": [
        47271048,
        47270919,
        47270397,
        47271748,
        47271768,
        47271696,
        47271629,
        47271122,
        47270871,
        47270803,
        47270544,
        47270763,
        47271067,
        47271055,
        47270876
      ],
      "score": 89,
      "time": 1772493380,
      "title": "Nobody ever got fired for using a struct",
      "type": "story",
      "url": "https://www.feldera.com/blog/nobody-ever-got-fired-for-using-a-struct"
    },
    {
      "by": "surprisetalk",
      "descendants": 381,
      "id": 47269263,
      "kids": [
        47269515,
        47270015,
        47269541,
        47269492,
        47269577,
        47270577,
        47271758,
        47269395,
        47271463,
        47270698,
        47269426,
        47271480,
        47270031,
        47270019,
        47270694,
        47269587,
        47269797,
        47271077,
        47270400,
        47269790,
        47269446,
        47270838,
        47269535,
        47269653,
        47269721,
        47269360,
        47271128,
        47270144,
        47269510,
        47269877,
        47269524,
        47271560,
        47270004,
        47269737,
        47271233,
        47271134,
        47269949,
        47269575,
        47270974,
        47269480,
        47269740,
        47271658,
        47270513,
        47270489,
        47269757,
        47269514,
        47269444,
        47269566,
        47269679,
        47269843,
        47269447,
        47270170,
        47269493,
        47269695,
        47270639
      ],
      "score": 378,
      "time": 1772757641,
      "title": "Where things stand with the Department of War",
      "type": "story",
      "url": "https://www.anthropic.com/news/where-stand-department-war"
    },
    {
      "by": "sanketc",
      "id": 47271858,
      "score": 1,
      "time": 1772780528,
      "title": "Stardex (YC S21) is hiring customer success engineers",
      "type": "job",
      "url": "https://www.ycombinator.com/companies/stardex/jobs/lag1C1P-customer-success-engineer-ai-data-migration"
    },
    {
      "by": "jjwiseman",
      "descendants": 205,
      "id": 47268391,
      "kids": [
        47271246,
        47269055,
        47270294,
        47268897,
        47268745,
        47268875,
        47271150,
        47269631,
        47271733,
        47268944,
        47269213,
        47271500,
        47268848,
        47270582,
        47271158,
        47268651,
        47269523,
        47269275,
        47270142,
        47271385,
        47269351,
        47268845,
        47270743,
        47269050,
        47269004,
        47268716,
        47268809,
        47268741,
        47268987
      ],
      "score": 146,
      "time": 1772751301,
      "title": "Labor market impacts of AI: A new measure and early evidence",
      "type": "story",
      "url": "https://www.anthropic.com/research/labor-market-impacts"
    },
    {
      "by": "bigwheels",
      "descendants": 251,
      "id": 47264756,
      "kids": [
        47271367,
        47266311,
        47271688,
        47265889,
        47270056,
        47265750,
        47266354,
        47271148,
        47266457,
        47271066,
        47271725,
        47268055,
        47267311,
        47265899,
        47266476,
        47267083,
        47270872,
        47270327,
        47268296,
        47266261,
        47268138,
        47268057,
        47269989,
        47267988,
        47269802,
        47271715,
        47268194,
        47270755,
        47267201,
        47266911,
        47266469,
        47266850,
        47268420,
        47267556,
        47269207,
        47267270,
        47271113,
        47267329,
        47265822,
        47266611,
        47266921,
        47267364,
        47267217,
        47267749,
        47266589,
        47266197,
        47266637,
        47266474,
        47269948,
        47266437,
        47270006,
        47268069,
        47266285,
        47269047,
        47268780,
        47266392,
        47266948,
        47265795,
        47270452,
        47265519,
        47266965,
        47265506,
        47265503,
        47264930,
        47266481
      ],
      "score": 313,
      "time": 1772732650,
      "title": "The Brand Age",
      "type": "story",
      "url": "https://paulgraham.com/brandage.html"
    },
    {
      "by": "jithinraj",
      "descendants": 12,
      "id": 47271187,
      "kids": [
        47271493,
        47271397,
        47271442,
        47271581
      ],
      "score": 32,
      "time": 1772774410,
      "title": "TeX Live 2026 is available for download now",
      "type": "story",
      "url": "https://www.tug.org/texlive/acquire.html"
    },
    {
      "by": "armandhammer10",
      "descendants": 9,
      "id": 47270807,
      "kids": [
        47270990,
        47270963,
        47271276,
        47271256,
        47271283
      ],
      "score": 30,
      "text": "We built an ant colony simulation as an internal hiring challenge at Moment and decided to open it up publicly.<p>You write a program in a custom assembly-like (we call it ant-ssembly) instruction set that controls 200 ants. Each ant can sense nearby cells (food, pheromones, home, other ants) but has no global view. The only coordination mechanism is pheromone trails, which ants can emit and sense them, but that&#x27;s it. Your program runs identically on every ant.<p>The goal is to collect the highest percentage of food across a set of maps. Different map layouts (clustered food, scattered, obstacles) reward very different strategies. The leaderboard is live.<p>Grand prize is a trip to Maui for two paid for by Moment. Challenge closes March 12.<p>Curious what strategies people discover. We&#x27;ve seen some surprisingly clever emergent behavior internally.",
      "time": 1772770540,
      "title": "Show HN: Swarm – Program a colony of 200 ants using a custom assembly language",
      "type": "story",
      "url": "https://dev.moment.com/"
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
      "title": "How My \"Illegal\" Visit to Tech Show London Turned Into a Summer Internship Win",
      "description": "I officially became a \"Tech Outlaw\" today. 😂  Don't worry I didn't do anything malicious. I just...",
      "url": "https://dev.to/maame-codes/how-my-illegal-visit-to-tech-show-london-turned-into-a-summer-internship-win-336o",
      "tags": "devops, networking, cloudcomputing, career",
      "reactions": 48,
      "comments": 16,
      "reading_time": 4,
      "author": "maame-codes"
    },
    {
      "title": "Accenture Trained 550,000 Employees on AI. Now It's Checking Who Actually Uses It.",
      "description": "Accenture told its senior managers and associate directors this month that regular use of the firm's...",
      "url": "https://dev.to/mothasa/accenture-trained-550000-employees-on-ai-now-its-checking-who-actually-uses-it-bd0",
      "tags": "ai, career, management, business",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "mothasa"
    },
    {
      "title": "My Bartending Job Taught Me More About Software Than School Did",
      "description": "Seven years slinging drinks taught me skills my CS degree never touched",
      "url": "https://dev.to/liztacular/my-bartending-job-taught-me-more-about-software-than-school-did-1iap",
      "tags": "career, beginners, discuss, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "liztacular"
    },
    {
      "title": "I audited a codebase written by Devin 3.0. It was a nightmare.",
      "description": "We aren't just shipping features faster; we are shipping technical debt faster. If you treat AI as an...",
      "url": "https://dev.to/saqibshahdev/i-audited-a-codebase-written-by-devin-30-it-was-a-nightmare-ppb",
      "tags": "webdev, ai, discuss, career",
      "reactions": 10,
      "comments": 10,
      "reading_time": 4,
      "author": "saqibshahdev"
    },
    {
      "title": "I Watched GPT and Claude Fight Over the Same Code. Here's What I Learned.",
      "description": "A developer's honest account of watching LLMs go head-to-head on VibeCode Arena — and what it...",
      "url": "https://dev.to/sukriti_singh/i-watched-gpt-and-claude-fight-over-the-same-code-heres-what-i-learned-2ebe",
      "tags": "ai, career, webdev, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "sukriti_singh"
    },
    {
      "title": "AI Interview Prep in 2026 Is Broken. Here's What Nobody Wants to Admit.",
      "description": "A brutally honest look at AI interview prep tools in 2026 — what's actually broken, what people complain about, and what the industry refuses to fix.",
      "url": "https://dev.to/gurachek/ai-interview-prep-in-2026-is-broken-heres-what-nobody-wants-to-admit-1a57",
      "tags": "career, ai, interview, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "gurachek"
    },
    {
      "title": "The \"AI Sandwich\" of Future Tech Jobs",
      "description": "Ten years ago, I co-founded a startup called CubbySpot and it created a platform that helped parents...",
      "url": "https://dev.to/regnard/the-ai-sandwich-of-future-tech-jobs-370i",
      "tags": "ai, productivity, career, devops",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "regnard"
    },
    {
      "title": "Honest question for devs: have you ever been beaten by AI on something you thought was your strength?",
      "description": "I just published a piece about competing against LLMs on VibeCode Arena same prompt, same scoring...",
      "url": "https://dev.to/sukriti_singh/honest-question-for-devs-have-you-ever-been-beaten-by-ai-on-something-you-thought-was-your-2417",
      "tags": "discuss, ai, career, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "sukriti_singh"
    },
    {
      "title": "Buuuongiorno devs 👋",
      "description": "Sono Gavin Cettolo, sviluppatore full stack dal 2017. Lavoro con React e Next.js, credo nel Clean Code, uso l'AI con criterio e ho concluso un MBA con il massimo dei voti per capire meglio il lato business del software.",
      "url": "https://dev.to/gavincettolo/buuuongiorno-devs-nn9",
      "tags": "react, nextjs, cleancode, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "gavincettolo"
    },
    {
      "title": "How to Actually Tailor Your Resume Without Losing Your Mind",
      "description": "``Everyone says you should tailor your resume for every job application. And they're right. But...",
      "url": "https://dev.to/pedroven/how-to-actually-tailor-your-resume-without-losing-your-mind-24kf",
      "tags": "resume, career, webdev, beginners",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "pedroven"
    }
  ]
}
```

