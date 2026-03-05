# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-05 07:10:34 UTC

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
      "author": "abhigyanpatwari",
      "repo": "GitNexus",
      "avatar": "https://github.com/abhigyanpatwari.png",
      "repo_link": "https://github.com/abhigyanpatwari/GitNexus",
      "desc": "GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a GitHub repo or ZIP file, and get an interactive knowledge graph wit a built in Graph RAG Agent. Perfect for code exploration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1182,
      "added_stars": 6262,
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
      "author": "moeru-ai",
      "repo": "airi",
      "avatar": "https://github.com/moeru-ai.png",
      "repo_link": "https://github.com/moeru-ai/airi",
      "desc": "💖🧸 Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2397,
      "added_stars": 6228,
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
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need - A nano Claude Code–like agent, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4175,
      "added_stars": 3402,
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
      "forks": 2098,
      "added_stars": 4245,
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
      "forks": 302,
      "added_stars": 2805,
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
      "forks": 441,
      "added_stars": 599,
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
      "forks": 3283,
      "added_stars": 1592,
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
      "forks": 988,
      "added_stars": 779,
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
      "forks": 1471,
      "added_stars": 3594,
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
      "forks": 277,
      "added_stars": 3441,
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
      "forks": 432,
      "added_stars": 4124,
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
      "forks": 1572,
      "added_stars": 1717,
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
      "forks": 14767,
      "added_stars": 2841,
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
      "forks": 132,
      "added_stars": 623,
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
          "username": "artwist-polyakov",
          "href": "https://github.com/artwist-polyakov",
          "avatar": "https://avatars.githubusercontent.com/u/42345388"
        },
        {
          "username": "mtparet",
          "href": "https://github.com/mtparet",
          "avatar": "https://avatars.githubusercontent.com/u/754770"
        },
        {
          "username": "amir-jakoby",
          "href": "https://github.com/amir-jakoby",
          "avatar": "https://avatars.githubusercontent.com/u/7036401"
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
      "added_stars": 539,
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
      "forks": 597,
      "added_stars": 779,
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 532,
      "added_stars": 1479,
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
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1940,
      "added_stars": 445,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8020,
      "added_stars": 675,
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
      "author": "grafana",
      "repo": "mcp-grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/mcp-grafana",
      "desc": "MCP server for Grafana",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 283,
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
      "author": "abiosoft",
      "repo": "colima",
      "avatar": "https://github.com/abiosoft.png",
      "repo_link": "https://github.com/abiosoft/colima",
      "desc": "Container runtimes on macOS (and Linux) with minimal setup",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 543,
      "added_stars": 708,
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
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 281,
      "added_stars": 636,
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
      "author": "juanfont",
      "repo": "headscale",
      "avatar": "https://github.com/juanfont.png",
      "repo_link": "https://github.com/juanfont/headscale",
      "desc": "An open source, self-hosted implementation of the Tailscale control server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1937,
      "added_stars": 1264,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 651,
      "added_stars": 813,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The to-do app to organize your life.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 334,
      "added_stars": 322,
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
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2557,
      "added_stars": 1982,
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
      "author": "steipete",
      "repo": "wacli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/wacli",
      "desc": "WhatsApp CLI",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 100,
      "added_stars": 267,
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
      "author": "open-telemetry",
      "repo": "opentelemetry-collector-contrib",
      "avatar": "https://github.com/open-telemetry.png",
      "repo_link": "https://github.com/open-telemetry/opentelemetry-collector-contrib",
      "desc": "Contrib repository for the OpenTelemetry Collector",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3400,
      "added_stars": 150,
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
      "author": "crossplane",
      "repo": "crossplane",
      "avatar": "https://github.com/crossplane.png",
      "repo_link": "https://github.com/crossplane/crossplane",
      "desc": "The Cloud Native Control Plane",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1146,
      "added_stars": 114,
      "builtBy": [
        {
          "username": "negz",
          "href": "https://github.com/negz",
          "avatar": "https://avatars.githubusercontent.com/u/1049349"
        },
        {
          "username": "hasheddan",
          "href": "https://github.com/hasheddan",
          "avatar": "https://avatars.githubusercontent.com/u/31777345"
        },
        {
          "username": "jbw976",
          "href": "https://github.com/jbw976",
          "avatar": "https://avatars.githubusercontent.com/u/4313439"
        },
        {
          "username": "phisco",
          "href": "https://github.com/phisco",
          "avatar": "https://avatars.githubusercontent.com/u/5697904"
        },
        {
          "username": "turkenh",
          "href": "https://github.com/turkenh",
          "avatar": "https://avatars.githubusercontent.com/u/9900707"
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
      "forks": 306,
      "added_stars": 4296,
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
      "author": "openai",
      "repo": "skills",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/skills",
      "desc": "Skills Catalog for Codex",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 601,
      "added_stars": 7347,
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
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 485,
      "added_stars": 6989,
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
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skills and subagents, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2899,
      "added_stars": 4839,
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
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "OpenSandbox is a general-purpose sandbox platform for AI applications, offering multi-language SDKs, unified sandbox APIs, and Docker/Kubernetes runtimes for scenarios like Coding Agents, GUI Agents, Agent Evaluation, AI Code Execution, and RL Training.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 444,
      "added_stars": 4741,
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
      "author": "google",
      "repo": "langextract",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/langextract",
      "desc": "A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2294,
      "added_stars": 10426,
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
      "forks": 1546,
      "added_stars": 7263,
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
      "author": "NevaMind-AI",
      "repo": "memU",
      "avatar": "https://github.com/NevaMind-AI.png",
      "repo_link": "https://github.com/NevaMind-AI/memU",
      "desc": "Memory for 24/7 proactive agents like openclaw (moltbot, clawdbot).",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 916,
      "added_stars": 5075,
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
      "author": "Shubhamsaboo",
      "repo": "awesome-llm-apps",
      "avatar": "https://github.com/Shubhamsaboo.png",
      "repo_link": "https://github.com/Shubhamsaboo/awesome-llm-apps",
      "desc": "Collection of awesome LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and opensource models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 14496,
      "added_stars": 7759,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 823,
      "added_stars": 2266,
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
      "forks": 6162,
      "added_stars": 2616,
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
      "author": "OpenBMB",
      "repo": "ChatDev",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/ChatDev",
      "desc": "ChatDev 2.0: Dev All through LLM-powered Multi-Agent Collaboration",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3879,
      "added_stars": 1523,
      "builtBy": [
        {
          "username": "thinkwee",
          "href": "https://github.com/thinkwee",
          "avatar": "https://avatars.githubusercontent.com/u/11889052"
        },
        {
          "username": "Alphamasterliu",
          "href": "https://github.com/Alphamasterliu",
          "avatar": "https://avatars.githubusercontent.com/u/110011045"
        },
        {
          "username": "NA-Wen",
          "href": "https://github.com/NA-Wen",
          "avatar": "https://avatars.githubusercontent.com/u/92134380"
        },
        {
          "username": "LaansDole",
          "href": "https://github.com/LaansDole",
          "avatar": "https://avatars.githubusercontent.com/u/85084360"
        },
        {
          "username": "qianc62",
          "href": "https://github.com/qianc62",
          "avatar": "https://avatars.githubusercontent.com/u/48988402"
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
      "forks": 498,
      "added_stars": 379,
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
      "forks": 1411,
      "added_stars": 3450,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "A Collection of Skills for Claude Code and Claude AI for real-world Usage. Including Claude Code Subagents, Claude Code Commnads",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 318,
      "added_stars": 796,
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
          "username": "ikala-shawn",
          "href": "https://github.com/ikala-shawn",
          "avatar": "https://avatars.githubusercontent.com/u/111341595"
        },
        {
          "username": "stitch840607",
          "href": "https://github.com/stitch840607",
          "avatar": "https://avatars.githubusercontent.com/u/259224742"
        }
      ]
    },
    {
      "author": "hsliuping",
      "repo": "TradingAgents-CN",
      "avatar": "https://github.com/hsliuping.png",
      "repo_link": "https://github.com/hsliuping/TradingAgents-CN",
      "desc": "基于多智能体LLM的中文金融交易框架 - TradingAgents中文增强版",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3886,
      "added_stars": 2641,
      "builtBy": [
        {
          "username": "hsliuping",
          "href": "https://github.com/hsliuping",
          "avatar": "https://avatars.githubusercontent.com/u/128790537"
        },
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
          "username": "ZeroAct",
          "href": "https://github.com/ZeroAct",
          "avatar": "https://avatars.githubusercontent.com/u/46982469"
        },
        {
          "username": "BG8CFB",
          "href": "https://github.com/BG8CFB",
          "avatar": "https://avatars.githubusercontent.com/u/50827102"
        }
      ]
    },
    {
      "author": "disler",
      "repo": "claude-code-hooks-mastery",
      "avatar": "https://github.com/disler.png",
      "repo_link": "https://github.com/disler/claude-code-hooks-mastery",
      "desc": "Master Claude Code Hooks",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 573,
      "added_stars": 941,
      "builtBy": [
        {
          "username": "disler",
          "href": "https://github.com/disler",
          "avatar": "https://avatars.githubusercontent.com/u/7570811"
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
  "source": "echojs",
  "sort": "latest",
  "items": [
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
    },
    {
      "title": "TypeScript “object” doesn’t make sense",
      "url": "https://medium.com/ekino-france/typescript-object-doesnt-make-sense-fc95b6c663f9",
      "upvotes": "2",
      "comments": "1",
      "created": "2026-02-23T14:10:53.000Z"
    },
    {
      "title": "Coaction v1.0 – Effortless multithreading for high-performance web apps",
      "url": "https://github.com/unadlib/coaction",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-02-21T14:44:11.000Z"
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
      "reactions": 43,
      "comments": 12,
      "reading_time": 3,
      "author": "jonmarkgo"
    },
    {
      "title": "What’s the Worst Advice AI Has Given You? Here’s Mine.",
      "description": "I recently saw a meme about terrible legacy code on platform X and it gave me an idea for a...",
      "url": "https://dev.to/gramli/whats-the-worst-advice-ai-has-given-you-heres-mine-58j4",
      "tags": "discuss, ai, chatgpt, security",
      "reactions": 33,
      "comments": 18,
      "reading_time": 2,
      "author": "gramli"
    },
    {
      "title": "React: Singletons aren't as evil as you think",
      "description": "In the world of React, the humble singleton gets a bit of a bad rap. It is often dismissed as a messy...",
      "url": "https://dev.to/link2twenty/react-singletons-arent-as-evil-as-you-think-44m8",
      "tags": "react, webdev, singleton",
      "reactions": 26,
      "comments": 1,
      "reading_time": 6,
      "author": "link2twenty"
    },
    {
      "title": "I Plugged Gemini Into My 10,000-Line Rental Platform. Here's What Happened.",
      "description": "This is a submission for the Built with Google Gemini: Writing Challenge           What I Built with...",
      "url": "https://dev.to/wilhelm_tell/i-plugged-gemini-into-my-10000-line-rental-platform-heres-what-happened-2epi",
      "tags": "devchallenge, geminireflections, gemini",
      "reactions": 4,
      "comments": 0,
      "reading_time": 7,
      "author": "wilhelm_tell"
    },
    {
      "title": "I Shipped Broken Code and Wrote an Article About It",
      "description": "This is part of a series on what AI actually changes in software development. Previous pieces: The...",
      "url": "https://dev.to/dannwaneri/i-shipped-broken-code-and-wrote-an-article-about-it-98p",
      "tags": "ai, opensource, webdev, productivity",
      "reactions": 27,
      "comments": 2,
      "reading_time": 5,
      "author": "dannwaneri"
    },
    {
      "title": "I used Google Gemini for the First Time. A Deep Analysis of my Experience so far! ✨",
      "description": "This is a submission for the Built with Google Gemini: Writing Challenge   Front Cover is from...",
      "url": "https://dev.to/francistrdev/i-used-google-gemini-for-the-first-time-a-deep-analysis-of-my-experience-so-far-2n12",
      "tags": "devchallenge, geminireflections, gemini, bash",
      "reactions": 26,
      "comments": 6,
      "reading_time": 11,
      "author": "francistrdev"
    },
    {
      "title": "Retention Over Clicks: A Surprising Lesson from Browser Game Analytics",
      "description": "Retention Matters More Than Traffic   In this series, I discuss various aspects of...",
      "url": "https://dev.to/sebhoek/retention-over-clicks-a-surprising-lesson-from-browser-game-analytics-3o86",
      "tags": "webdev, programming, analytics",
      "reactions": 8,
      "comments": 4,
      "reading_time": 4,
      "author": "sebhoek"
    },
    {
      "title": "SQLite as an MCP context saver: stop cramming raw API data into your LLM",
      "description": "Most MCP servers dump raw API responses into the conversation. I've been using SQLite as a dependency...",
      "url": "https://dev.to/richardbaxter/sqlite-as-an-mcp-context-saver-stop-cramming-raw-api-data-into-your-llm-2oj4",
      "tags": "ai, mcp, sql",
      "reactions": 13,
      "comments": 3,
      "reading_time": 9,
      "author": "richardbaxter"
    },
    {
      "title": "Get started with GitHub Copilot SDK",
      "description": "This article explains what GitHub Copilot SDK is and why use it",
      "url": "https://dev.to/azure/get-started-with-github-copilot-sdk-1ijm",
      "tags": "githubcopilot, python, ai, programming",
      "reactions": 13,
      "comments": 0,
      "reading_time": 3,
      "author": "softchris"
    },
    {
      "title": "How to Fix the NVM for Windows `NVM_SYMLINK` Activation Error",
      "description": "If you're using NVM for Windows and see the following error:    nvm enabled activation...",
      "url": "https://dev.to/trivedivatsal/fixing-the-nvmsymlink-is-set-to-a-physical-filedirectory-error-on-windows-21hp",
      "tags": "javascript, node, tooling, tutorial",
      "reactions": 7,
      "comments": 0,
      "reading_time": 2,
      "author": "trivedivatsal"
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
      "title": "FFmpeg at Meta: Media Processing at Scale",
      "url": "https://engineering.fb.com/2026/03/02/video-engineering/ffmpeg-at-meta-media-processing-at-scale",
      "score": 1,
      "comments": 0,
      "tags": [
        "programming"
      ],
      "id": "cpvvmz"
    },
    {
      "title": "Relicensing with AI-assisted rewrite",
      "url": "https://tuananh.net/2026/03/05/relicensing-with-ai-assisted-rewrite/",
      "score": 6,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "jr3zym"
    },
    {
      "title": "your ai slop bores me",
      "url": "https://www.youraislopbores.me/",
      "score": 9,
      "comments": 0,
      "tags": [
        "ai",
        "culture",
        "vibecoding"
      ],
      "id": "ma7lsz"
    },
    {
      "title": "How does AI change Software Engineering?",
      "url": "https://dlants.me/ai-se.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "5uwt0u"
    },
    {
      "title": "Pony Networking, Take Two",
      "url": "https://www.ponylang.io/blog/2026/03/pony-networking-take-two/",
      "score": 2,
      "comments": 0,
      "tags": [
        "networking"
      ],
      "id": "r5uioq"
    },
    {
      "title": "Just Use Postgres",
      "url": "http://amattn.com/p/just_use_postgres.html",
      "score": 5,
      "comments": 0,
      "tags": [
        "databases"
      ],
      "id": "kjb4gb"
    },
    {
      "title": "A grand vision for Rust",
      "url": "https://blog.yoshuawuyts.com/a-grand-vision-for-rust/",
      "score": 13,
      "comments": 2,
      "tags": [
        "plt",
        "rust"
      ],
      "id": "xhoyg7"
    },
    {
      "title": "Making Firefox’s right-click not suck with about:config",
      "url": "https://joshua.hu/firefox-making-right-click-not-suck",
      "score": 1,
      "comments": 2,
      "tags": [
        "browsers"
      ],
      "id": "1akrkj"
    },
    {
      "title": "Google and Epic announce settlement to end app store antitrust case",
      "url": "https://arstechnica.com/gadgets/2026/03/google-and-epic-look-to-bury-the-hatchet-with-new-app-store-settlement/",
      "score": 7,
      "comments": 0,
      "tags": [
        "android",
        "law"
      ],
      "id": "3vnl2v"
    },
    {
      "title": "Introducing wgsl-rs",
      "url": "https://renderling.xyz/articles/introducing-wgsl-rs.html",
      "score": 19,
      "comments": 2,
      "tags": [
        "games",
        "graphics",
        "rust"
      ],
      "id": "1rh6f3"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "gonzalovargas",
      "descendants": 156,
      "id": 47255881,
      "kids": [
        47258504,
        47256748,
        47258173,
        47257253,
        47256648,
        47257863,
        47256780,
        47256603,
        47258403,
        47257660,
        47256685,
        47257907,
        47257180,
        47256447,
        47258400,
        47256991,
        47258202,
        47257096,
        47257416,
        47256356,
        47258137,
        47256919,
        47257197,
        47258091,
        47257102,
        47256804,
        47257052,
        47256483,
        47256895,
        47258428,
        47256636,
        47256620,
        47256945,
        47257193,
        47256926,
        47256440,
        47257015,
        47256868,
        47256408,
        47256544,
        47256518,
        47257254,
        47257896,
        47256719,
        47256995
      ],
      "score": 433,
      "time": 1772670129,
      "title": "Google Workspace CLI",
      "type": "story",
      "url": "https://github.com/googleworkspace/cli"
    },
    {
      "by": "djnaraps",
      "descendants": 18,
      "id": 47257637,
      "kids": [
        47258067,
        47258476,
        47258323,
        47258050,
        47258087,
        47257986,
        47258008,
        47258446,
        47257982
      ],
      "score": 76,
      "time": 1772685463,
      "title": "You Just Reveived",
      "type": "story",
      "url": "https://dylan.gr/1772520728"
    },
    {
      "by": "dm",
      "descendants": 2014,
      "id": 47247645,
      "kids": [
        47252471,
        47248919,
        47248588,
        47252457,
        47258515,
        47248197,
        47248700,
        47248768,
        47247769,
        47247748,
        47248864,
        47247917,
        47249290,
        47247942,
        47249247,
        47248130,
        47249292,
        47253085,
        47247965,
        47248787,
        47247885,
        47249824,
        47248098,
        47248415,
        47254559,
        47258499,
        47248217,
        47248982,
        47248859,
        47250403,
        47248126,
        47248174,
        47248016,
        47247905,
        47248973,
        47258153,
        47257533,
        47252698,
        47251923,
        47248032,
        47248234,
        47249622,
        47247777,
        47250022,
        47247921,
        47247795,
        47247861,
        47249124,
        47253682,
        47251386,
        47249464,
        47248213,
        47247740,
        47250122,
        47247671,
        47249792,
        47250828,
        47247799,
        47251389,
        47255534,
        47250465,
        47256419,
        47249552,
        47251121,
        47256339,
        47256937,
        47256034,
        47252805,
        47248317,
        47248210,
        47255953,
        47256143,
        47248509,
        47256580,
        47253946,
        47254155,
        47257841,
        47253390,
        47252709,
        47248139,
        47248525,
        47248687,
        47247870,
        47248697,
        47248289,
        47248413,
        47252164,
        47256572,
        47249663,
        47247880,
        47248282,
        47248204,
        47249094,
        47249376,
        47248554,
        47255553,
        47249427,
        47248029,
        47247887,
        47248390,
        47247931,
        47255745,
        47254368,
        47247941,
        47248017,
        47248835,
        47252721,
        47257110,
        47257584,
        47249027,
        47249678,
        47248817,
        47248144,
        47256224,
        47251475,
        47251865,
        47250171,
        47251217,
        47250432,
        47251199,
        47248764,
        47248545,
        47248157,
        47256738,
        47250925,
        47255451,
        47251783,
        47248209,
        47247996,
        47248935,
        47247781,
        47247872,
        47258304,
        47253485,
        47252758,
        47254777,
        47248814,
        47251373,
        47247828,
        47248579,
        47251646,
        47251571,
        47247892,
        47247907,
        47248506,
        47249188,
        47249393,
        47248020,
        47255213,
        47252556,
        47249687,
        47249605,
        47251922,
        47256712,
        47248009,
        47253930,
        47250391,
        47248311,
        47251942,
        47252603,
        47247949,
        47251935,
        47248510,
        47251700,
        47249179,
        47251008,
        47254018,
        47257724,
        47248398,
        47253454,
        47248839,
        47247961,
        47255348,
        47250059,
        47248003,
        47249523,
        47252862,
        47250800,
        47248272,
        47251745,
        47248301,
        47255847,
        47248333,
        47248283,
        47247873,
        47247944,
        47247819,
        47248541,
        47253278,
        47251663,
        47247785,
        47248536,
        47247850,
        47256716,
        47248578,
        47253825,
        47248463,
        47251376,
        47253334,
        47248322,
        47248354,
        47251172,
        47249336,
        47251918,
        47248050,
        47247954,
        47247987,
        47253249,
        47253967,
        47248780,
        47251469,
        47249217,
        47248208,
        47253728,
        47249379,
        47248043,
        47247938,
        47253103,
        47247808,
        47247916,
        47249564,
        47254070,
        47252688,
        47252586,
        47249949,
        47248055,
        47251819,
        47252778,
        47255027,
        47247837,
        47249384,
        47248180,
        47247886,
        47251827,
        47248364,
        47248207,
        47247945,
        47248778,
        47247955,
        47253422,
        47247922,
        47252908,
        47248437,
        47248994,
        47248589,
        47252872,
        47250068,
        47247847,
        47248639,
        47248928,
        47247797,
        47251736,
        47251340,
        47250511,
        47248240,
        47249565,
        47247834,
        47248297,
        47251118,
        47255088,
        47252907,
        47248783,
        47254381,
        47254343,
        47254312,
        47249438,
        47254240,
        47256548,
        47252658,
        47252424,
        47252252,
        47247773,
        47252009,
        47251115,
        47251705,
        47252429,
        47251520,
        47251171,
        47250922,
        47249193,
        47250747,
        47250502,
        47249834,
        47247830,
        47249100,
        47248942,
        47248382,
        47248216,
        47248143,
        47248005,
        47250456,
        47254064,
        47248701,
        47248785,
        47247970,
        47250880,
        47249941,
        47248775,
        47247825,
        47249348,
        47256068,
        47250508,
        47252450,
        47248567,
        47249892,
        47248158,
        47258077,
        47255702,
        47253270,
        47248629,
        47255279,
        47248079,
        47247742,
        47249847,
        47247783,
        47248114,
        47248750,
        47253089,
        47248915
      ],
      "score": 1719,
      "text": "<a href=\"https:&#x2F;&#x2F;www.apple.com&#x2F;macbook-neo&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.apple.com&#x2F;macbook-neo&#x2F;</a>",
      "time": 1772633801,
      "title": "MacBook Neo",
      "type": "story",
      "url": "https://www.apple.com/newsroom/2026/03/say-hello-to-macbook-neo/"
    },
    {
      "by": "justinwp",
      "descendants": 24,
      "id": 47252459,
      "kids": [
        47258360,
        47258513,
        47258095,
        47258529,
        47258345,
        47257946,
        47258481,
        47258340,
        47252460,
        47258138,
        47258465,
        47258247,
        47257908,
        47258046,
        47258277,
        47258037
      ],
      "score": 55,
      "time": 1772652003,
      "title": "You need to rewrite your CLI for AI agents",
      "type": "story",
      "url": "https://justin.poehnelt.com/posts/rewrite-your-cli-for-ai-agents/"
    },
    {
      "by": "TechPlasma",
      "descendants": 135,
      "id": 47253177,
      "kids": [
        47254184,
        47255182,
        47256167,
        47254108,
        47256154,
        47257335,
        47255738,
        47255461,
        47255285,
        47256195,
        47254206,
        47255812,
        47256099,
        47255075,
        47257144,
        47257805,
        47256317,
        47257764,
        47257211,
        47257056,
        47254146,
        47255634,
        47253593,
        47254844,
        47256096,
        47257686,
        47256287,
        47254958,
        47255473,
        47255430,
        47254828,
        47255651,
        47256315,
        47256502,
        47255302,
        47258034,
        47255409,
        47254399
      ],
      "score": 496,
      "time": 1772655363,
      "title": "Building a new Flash",
      "type": "story",
      "url": "https://bill.newgrounds.com/news/post/1607118"
    },
    {
      "by": "mahirhiro",
      "descendants": 16,
      "id": 47257352,
      "kids": [
        47258484,
        47258179,
        47257976,
        47258074,
        47258099,
        47258260,
        47258020,
        47258480,
        47257989,
        47257983,
        47257975,
        47257995,
        47257897
      ],
      "score": 61,
      "text": "I built Poppy as a side project to help people keep in touch more intentionally. Would love feedback on onboarding, reminders, and overall UX. Happy to answer questions.",
      "time": 1772682998,
      "title": "Show HN: Poppy – a simple app to stay intentional with relationships",
      "type": "story",
      "url": "https://poppy-connection-keeper.netlify.app/"
    },
    {
      "by": "Bender",
      "descendants": 25,
      "id": 47216825,
      "kids": [
        47258184,
        47258471,
        47258266,
        47258377,
        47258055,
        47258079,
        47258416,
        47216937,
        47258332
      ],
      "score": 30,
      "time": 1772452317,
      "title": "AMD will bring its \"Ryzen AI\" processors to standard desktop PCs for first time",
      "type": "story",
      "url": "https://arstechnica.com/gadgets/2026/03/amd-ryzen-ai-400-cpus-will-bring-upgraded-graphics-to-socket-am5-desktops/"
    },
    {
      "by": "keyle",
      "descendants": 1,
      "id": 47258064,
      "kids": [
        47258519
      ],
      "score": 10,
      "time": 1772690377,
      "title": "Zed new terms required to be 18 years old",
      "type": "story",
      "url": "https://zed.dev/terms"
    },
    {
      "by": "goodoldneon",
      "descendants": 22,
      "id": 47256923,
      "kids": [
        47257336,
        47258272,
        47257204,
        47257243,
        47258189,
        47257822,
        47257482,
        47257199,
        47257136,
        47257165
      ],
      "score": 37,
      "time": 1772679357,
      "title": "What Python's asyncio primitives get wrong about shared state",
      "type": "story",
      "url": "https://www.inngest.com/blog/no-lost-updates-python-asyncio"
    },
    {
      "by": "simonw",
      "descendants": 280,
      "id": 47249343,
      "kids": [
        47249782,
        47251232,
        47249818,
        47252866,
        47253610,
        47249593,
        47257471,
        47249805,
        47250655,
        47255370,
        47251207,
        47253053,
        47255131,
        47252317,
        47249693,
        47256556,
        47250419,
        47249735,
        47252541,
        47249557,
        47250156,
        47249953,
        47251728,
        47257988,
        47251755,
        47250015,
        47250020
      ],
      "score": 628,
      "time": 1772639734,
      "title": "Something is afoot in the land of Qwen",
      "type": "story",
      "url": "https://simonwillison.net/2026/Mar/4/qwen/"
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
      "reactions": 12,
      "comments": 0,
      "reading_time": 4,
      "author": "maame-codes"
    },
    {
      "title": "How I Prepare for Software Engineering Interviews in 6 Days (Without Burning Out)",
      "description": "I’ve failed interviews I was technically qualified for. Not because I didn’t know the answers. But...",
      "url": "https://dev.to/finalroundai/how-i-prepare-for-software-engineering-interviews-in-6-days-without-burning-out-1kb2",
      "tags": "webdev, career, programming, ai",
      "reactions": 5,
      "comments": 0,
      "reading_time": 6,
      "author": "hadil"
    },
    {
      "title": "The Overengineering Trap: You're Building a Spaceship When You Need a Bicycle",
      "description": "You sit down to build a simple app. A to-do list, maybe. A personal dashboard. A small SaaS.  Three...",
      "url": "https://dev.to/ruhidibadli/the-overengineering-trap-youre-building-a-spaceship-when-you-need-a-bicycle-292m",
      "tags": "webdev, programming, beginners, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "ruhidibadli"
    },
    {
      "title": "🤖 Stop. Breathe. You Don't Need Every AI Tool.",
      "description": "A brutally honest guide to navigating the AI chaos in 2026 — and actually getting work...",
      "url": "https://dev.to/shashi_kiran_bcfdbb223140/stop-breathe-you-dont-need-every-ai-tool-hoi",
      "tags": "ai, productivity, discuss, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "shashi_kiran_bcfdbb223140"
    },
    {
      "title": "I Built a Job Search Tool That Pulls Directly From Company ATS Systems (Not Job Boards)",
      "description": "By the time a job appears on LinkedIn or Indeed, it has often been live on the company's ATS for...",
      "url": "https://dev.to/tinonet/i-built-a-job-search-tool-that-pulls-directly-from-company-ats-systems-not-job-boards-2l6d",
      "tags": "career, python, ai, buildinpublic",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "tinonet"
    },
    {
      "title": "Why Senior Devs Do One Thing at a Time (And You Should Too)",
      "description": "Context switching is killing your output. Here's how single-tasking transforms your code, your reviews, and your engineering career.",
      "url": "https://dev.to/tirthdoshi009/why-senior-devs-do-one-thing-at-a-time-and-you-should-too-14da",
      "tags": "productivity, programming, career, softskills",
      "reactions": 2,
      "comments": 0,
      "reading_time": 4,
      "author": "tirthdoshi009"
    },
    {
      "title": "The Samurai and the Syntax: Why AI is a Sword, Not a Magic Wand ⚔️",
      "description": "There is a lot of panic right now about AI writing code, replacing developers, and taking over the...",
      "url": "https://dev.to/chadders13/the-samurai-and-the-syntax-why-ai-is-a-sword-not-a-magic-wand-4bdc",
      "tags": "ai, programming, career, leadership",
      "reactions": 3,
      "comments": 1,
      "reading_time": 2,
      "author": "chadders13"
    },
    {
      "title": "Is It Just Me, or Is \"Dev Anxiety\" Hitting Different Lately?",
      "description": "I’ll be honest: my Code &amp; Crayons balance has felt a little lopsided lately. And not because the...",
      "url": "https://dev.to/code_and_crayons/is-it-just-me-or-is-dev-anxiety-hitting-different-lately-p3k",
      "tags": "ai, mentalhealth, career, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "code_and_crayons"
    },
    {
      "title": "The Résumé Is Not Broken. The Search Is.",
      "description": "Why finding the right job has never been harder — and why the answer might not be a better...",
      "url": "https://dev.to/soumia_g_9dc322fc4404cecd/the-resume-is-not-broken-the-search-is-3ba9",
      "tags": "career, ai, llm, buildinginpublic",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "soumia_g_9dc322fc4404cecd"
    },
    {
      "title": "JAVA INTERVIEW QUESTION REVISION",
      "description": "1 DIFF B/W INTERFACE AND ABSTRACT     Feature Interface Abstract Class     Purpose Defines a...",
      "url": "https://dev.to/bhu_kalki/java-interview-question-revision-387",
      "tags": "beginners, career, interview, java",
      "reactions": 1,
      "comments": 0,
      "reading_time": 1,
      "author": "bhu_kalki"
    }
  ]
}
```

