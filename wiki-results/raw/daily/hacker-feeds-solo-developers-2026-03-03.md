# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-03 07:10:57 UTC

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
      "forks": 1046,
      "added_stars": 6228,
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
      "forks": 2030,
      "added_stars": 3611,
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
      "forks": 4083,
      "added_stars": 2877,
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
      "forks": 2028,
      "added_stars": 3488,
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
      "author": "siteboon",
      "repo": "claudecodeui",
      "avatar": "https://github.com/siteboon.png",
      "repo_link": "https://github.com/siteboon/claudecodeui",
      "desc": "Use Claude Code, Cursor CLI or Codex on mobile and web with CloudCLI (aka Claude Code UI). CloudCLI is a free open source webui/GUI that helps you manage your Claude Code session and projects remotely",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 964,
      "added_stars": 1043,
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
      "desc": "A cross-platform desktop All-in-One assistant tool for Claude Code, Codex, OpenCode & Gemini CLI.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1414,
      "added_stars": 3270,
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
      "author": "juice-shop",
      "repo": "juice-shop",
      "avatar": "https://github.com/juice-shop.png",
      "repo_link": "https://github.com/juice-shop/juice-shop",
      "desc": "OWASP Juice Shop: Probably the most modern and sophisticated insecure web application",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16639,
      "added_stars": 69,
      "builtBy": [
        {
          "username": "bkimminich",
          "href": "https://github.com/bkimminich",
          "avatar": "https://avatars.githubusercontent.com/u/3531020"
        },
        {
          "username": "J12934",
          "href": "https://github.com/J12934",
          "avatar": "https://avatars.githubusercontent.com/u/13718901"
        },
        {
          "username": "Aashish683",
          "href": "https://github.com/Aashish683",
          "avatar": "https://avatars.githubusercontent.com/u/30633088"
        },
        {
          "username": "Scar26",
          "href": "https://github.com/Scar26",
          "avatar": "https://avatars.githubusercontent.com/u/41830515"
        }
      ]
    },
    {
      "author": "badlogic",
      "repo": "pi-mono",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-mono",
      "desc": "AI agent toolkit: coding agent CLI, unified LLM API, TUI & web UI libraries, Slack bot, vLLM pods",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1987,
      "added_stars": 3945,
      "builtBy": [
        {
          "username": "badlogic",
          "href": "https://github.com/badlogic",
          "avatar": "https://avatars.githubusercontent.com/u/514052"
        },
        {
          "username": "hjanuschka",
          "href": "https://github.com/hjanuschka",
          "avatar": "https://avatars.githubusercontent.com/u/2891702"
        },
        {
          "username": "markusylisiurunen",
          "href": "https://github.com/markusylisiurunen",
          "avatar": "https://avatars.githubusercontent.com/u/8409947"
        },
        {
          "username": "aliou",
          "href": "https://github.com/aliou",
          "avatar": "https://avatars.githubusercontent.com/u/980367"
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
      "forks": 7280,
      "added_stars": 1820,
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
      "forks": 409,
      "added_stars": 4014,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 14741,
      "added_stars": 2858,
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
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1532,
      "added_stars": 1354,
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
      "author": "asheshgoplani",
      "repo": "agent-deck",
      "avatar": "https://github.com/asheshgoplani.png",
      "repo_link": "https://github.com/asheshgoplani/agent-deck",
      "desc": "Terminal session manager for AI coding agents. One TUI for Claude, Gemini, OpenCode, Codex, and more.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 121,
      "added_stars": 580,
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
      "forks": 447,
      "added_stars": 537,
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
      "author": "steipete",
      "repo": "wacli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/wacli",
      "desc": "WhatsApp CLI",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 99,
      "added_stars": 297,
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
      "repo": "glow",
      "avatar": "https://github.com/charmbracelet.png",
      "repo_link": "https://github.com/charmbracelet/glow",
      "desc": "Render markdown on the CLI, with pizzazz! 💅🏻",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 591,
      "added_stars": 729,
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
      "forks": 1936,
      "added_stars": 425,
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
      "forks": 8011,
      "added_stars": 625,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The to-do app to organize your life.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 328,
      "added_stars": 313,
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
      "author": "netbirdio",
      "repo": "netbird",
      "avatar": "https://github.com/netbirdio.png",
      "repo_link": "https://github.com/netbirdio/netbird",
      "desc": "Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and granular access controls.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1151,
      "added_stars": 1353,
      "builtBy": [
        {
          "username": "mlsmaycon",
          "href": "https://github.com/mlsmaycon",
          "avatar": "https://avatars.githubusercontent.com/u/7747744"
        },
        {
          "username": "pascal-fischer",
          "href": "https://github.com/pascal-fischer",
          "avatar": "https://avatars.githubusercontent.com/u/32096965"
        },
        {
          "username": "braginini",
          "href": "https://github.com/braginini",
          "avatar": "https://avatars.githubusercontent.com/u/700848"
        },
        {
          "username": "lixmal",
          "href": "https://github.com/lixmal",
          "avatar": "https://avatars.githubusercontent.com/u/17948409"
        },
        {
          "username": "pappz",
          "href": "https://github.com/pappz",
          "avatar": "https://avatars.githubusercontent.com/u/7756831"
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
      "forks": 269,
      "added_stars": 3391,
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
      "author": "abiosoft",
      "repo": "colima",
      "avatar": "https://github.com/abiosoft.png",
      "repo_link": "https://github.com/abiosoft/colima",
      "desc": "Container runtimes on macOS (and Linux) with minimal setup",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 543,
      "added_stars": 693,
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
      "forks": 275,
      "added_stars": 643,
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 497,
      "added_stars": 1326,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 646,
      "added_stars": 701,
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
      "author": "juanfont",
      "repo": "headscale",
      "avatar": "https://github.com/juanfont.png",
      "repo_link": "https://github.com/juanfont/headscale",
      "desc": "An open source, self-hosted implementation of the Tailscale control server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1935,
      "added_stars": 1263,
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
      "author": "grafana",
      "repo": "mcp-grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/mcp-grafana",
      "desc": "MCP server for Grafana",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 280,
      "added_stars": 226,
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
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2553,
      "added_stars": 1965,
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
      "author": "crossplane",
      "repo": "crossplane",
      "avatar": "https://github.com/crossplane.png",
      "repo_link": "https://github.com/crossplane/crossplane",
      "desc": "The Cloud Native Control Plane",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1146,
      "added_stars": 112,
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
      "forks": 3393,
      "added_stars": 146,
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
      "author": "argoproj",
      "repo": "argo-cd",
      "avatar": "https://github.com/argoproj.png",
      "repo_link": "https://github.com/argoproj/argo-cd",
      "desc": "Declarative Continuous Deployment for Kubernetes",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6883,
      "added_stars": 330,
      "builtBy": [
        {
          "username": "alexmt",
          "href": "https://github.com/alexmt",
          "avatar": "https://avatars.githubusercontent.com/u/426437"
        },
        {
          "username": "crenshaw-dev",
          "href": "https://github.com/crenshaw-dev",
          "avatar": "https://avatars.githubusercontent.com/u/350466"
        },
        {
          "username": "jannfis",
          "href": "https://github.com/jannfis",
          "avatar": "https://avatars.githubusercontent.com/u/3942683"
        },
        {
          "username": "jessesuen",
          "href": "https://github.com/jessesuen",
          "avatar": "https://avatars.githubusercontent.com/u/12677113"
        }
      ]
    },
    {
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5012,
      "added_stars": 977,
      "builtBy": [
        {
          "username": "RPRX",
          "href": "https://github.com/RPRX",
          "avatar": "https://avatars.githubusercontent.com/u/63339210"
        },
        {
          "username": "yuhan6665",
          "href": "https://github.com/yuhan6665",
          "avatar": "https://avatars.githubusercontent.com/u/1588741"
        },
        {
          "username": "Fangliding",
          "href": "https://github.com/Fangliding",
          "avatar": "https://avatars.githubusercontent.com/u/45535409"
        },
        {
          "username": "mmmray",
          "href": "https://github.com/mmmray",
          "avatar": "https://avatars.githubusercontent.com/u/142015632"
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
      "forks": 259,
      "added_stars": 3934,
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
      "forks": 587,
      "added_stars": 8148,
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
      "forks": 471,
      "added_stars": 6741,
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
      "forks": 2805,
      "added_stars": 3897,
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
      "author": "google",
      "repo": "langextract",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/langextract",
      "desc": "A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2287,
      "added_stars": 10364,
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
      "forks": 1510,
      "added_stars": 7646,
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
      "forks": 898,
      "added_stars": 5458,
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
      "author": "OpenBMB",
      "repo": "ChatDev",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/ChatDev",
      "desc": "ChatDev 2.0: Dev All through LLM-powered Multi-Agent Collaboration",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3873,
      "added_stars": 2192,
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
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "OpenSandbox is a general-purpose sandbox platform for AI applications, offering multi-language SDKs, unified sandbox APIs, and Docker/Kubernetes runtimes for scenarios like Coding Agents, GUI Agents, Agent Evaluation, AI Code Execution, and RL Training.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 337,
      "added_stars": 3009,
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
          "username": "jwx0925",
          "href": "https://github.com/jwx0925",
          "avatar": "https://avatars.githubusercontent.com/u/1539927"
        },
        {
          "username": "Spground",
          "href": "https://github.com/Spground",
          "avatar": "https://avatars.githubusercontent.com/u/10492823"
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
      "forks": 572,
      "added_stars": 1055,
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
      "forks": 14412,
      "added_stars": 7618,
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
      "forks": 821,
      "added_stars": 2259,
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
      "author": "taylorwilsdon",
      "repo": "google_workspace_mcp",
      "avatar": "https://github.com/taylorwilsdon.png",
      "repo_link": "https://github.com/taylorwilsdon/google_workspace_mcp",
      "desc": "Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search & Drive with AI - Comprehensive Google Workspace / G Suite MCP Server & CLI Tool",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 491,
      "added_stars": 359,
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
        },
        {
          "username": "cfdude",
          "href": "https://github.com/cfdude",
          "avatar": "https://avatars.githubusercontent.com/u/1118320"
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
      "forks": 1401,
      "added_stars": 3186,
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
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6103,
      "added_stars": 2543,
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
          "username": "uc4w6c",
          "href": "https://github.com/uc4w6c",
          "avatar": "https://avatars.githubusercontent.com/u/36355491"
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
      "forks": 5986,
      "added_stars": 2291,
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
      "author": "sooperset",
      "repo": "mcp-atlassian",
      "avatar": "https://github.com/sooperset.png",
      "repo_link": "https://github.com/sooperset/mcp-atlassian",
      "desc": "MCP server for Atlassian tools (Confluence, Jira)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 967,
      "added_stars": 319,
      "builtBy": [
        {
          "username": "sooperset",
          "href": "https://github.com/sooperset",
          "avatar": "https://avatars.githubusercontent.com/u/32061883"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cutekibry",
          "href": "https://github.com/cutekibry",
          "avatar": "https://avatars.githubusercontent.com/u/16778504"
        },
        {
          "username": "hteichmann-strato",
          "href": "https://github.com/hteichmann-strato",
          "avatar": "https://avatars.githubusercontent.com/u/151167293"
        },
        {
          "username": "major",
          "href": "https://github.com/major",
          "avatar": "https://avatars.githubusercontent.com/u/89910"
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
    },
    {
      "title": "FluxAPI – Lighthouse for API calls. 13 audit rules with network-adjusted scoring",
      "url": "https://github.com/aswinsasi/fluxapi",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-21T13:45:39.000Z"
    },
    {
      "title": "[AI] Nice try dear AI. Now let's talk about production.",
      "url": "https://krasimirtsonev.com/blog/article/nice-try-dear-ai-now-lets-talk-production",
      "upvotes": "2",
      "comments": "2",
      "created": "2026-02-21T13:36:53.000Z"
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
      "title": "What should I do and learn in 2026?",
      "description": "Maybe it's not about skills, but tactics.",
      "url": "https://dev.to/missamarakay/what-should-i-do-and-learn-in-2026-4enc",
      "tags": "career, learning, motivation, productivity",
      "reactions": 17,
      "comments": 6,
      "reading_time": 5,
      "author": "missamarakay"
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
      "title": "Meet BlokJS - 9 KB, No Build Step, Standalone, Full FE Framework",
      "description": "BlokJS - Zero-Build, Zero-Dependency, Standalone, Reactive, Lightweight UI Framework   New...",
      "url": "https://dev.to/maleta/meet-blokjs-9-kb-no-build-step-standalone-full-fe-framework-3gfg",
      "tags": "javascript, frontend, webdev, opensource",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "maleta"
    },
    {
      "title": "Flexible Border Element",
      "description": "I recently transitioned from full stack to front end engineer. Front end is what inspired me to...",
      "url": "https://dev.to/lisacee/flexible-border-element-m6e",
      "tags": "css, frontend, tailwindcss, learning",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "lisacee"
    },
    {
      "title": "Why I stopped overthinking the Livewire vs. Inertia debate (and how to pick one)",
      "description": "The Laravel ecosystem is spoiled for choice. When building a modern web app, the first big decision...",
      "url": "https://dev.to/hamizulfaiz/why-i-stopped-overthinking-the-livewire-vs-inertia-debate-and-how-to-pick-one-5h67",
      "tags": "webdev, livewire, inertiajs, laravel",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "hamizulfaiz"
    },
    {
      "title": "DevStretch: The Antiburnout Protocol for Devs Who Forgot They Have Bodies",
      "description": "The Community   Let’s be honest: most of us treat our physical bodies like a deprecated...",
      "url": "https://dev.to/highflyer910/devstretch-the-antiburnout-protocol-for-devs-who-forgot-they-have-bodies-3am",
      "tags": "devchallenge, weekendchallenge, showdev, pwa",
      "reactions": 53,
      "comments": 11,
      "reading_time": 3,
      "author": "highflyer910"
    },
    {
      "title": "How Do You Actually Know If AI Is Working On Your Team?",
      "description": "Productivity percentages and acceptance rates don't tell you much. Here's a more concrete metric: AI functional coverage.",
      "url": "https://dev.to/dionysos/how-do-you-actually-know-if-ai-is-working-on-your-team-2b02",
      "tags": "ai, engineering, productivity, dx",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "dionysos"
    },
    {
      "title": "Coding Agents Are Actually Good at This One Thing",
      "description": "Coding agents aren't magic. But for internal tooling? They've brought back the \"just build the thing\" era I've been missing since Microsoft Access.",
      "url": "https://dev.to/mattstratton/coding-agents-are-actually-good-at-this-one-thing-5dej",
      "tags": "webdev, productivity, ai, beginners",
      "reactions": 1,
      "comments": 3,
      "reading_time": 4,
      "author": "mattstratton"
    },
    {
      "title": "Stop Running Prettier Through ESLint — Here's Why Standalone Is Better",
      "description": "If you've set up a JavaScript project in the last few years, there's a good chance you're running...",
      "url": "https://dev.to/vadim/stop-running-prettier-through-eslint-heres-why-standalone-is-better-78a",
      "tags": "frontend, vite, javascript, typescript",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "vadim"
    },
    {
      "title": "Mastering JavaScript Arrays: A Beginner's Guide to Organize Data Like a Pro",
      "description": "Introduction   Hey there! my fellow code explorer!   Imagine you're planning a weekend road...",
      "url": "https://dev.to/ritam369/mastering-javascript-arrays-a-beginners-guide-to-organize-data-like-a-pro-2dk0",
      "tags": "webdev, programming, javascript, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "ritam369"
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
      "title": "uBlock filter to hide vibecoding tag",
      "url": "",
      "score": 1,
      "comments": 2,
      "tags": [
        "vibecoding"
      ],
      "id": "jqibwu"
    },
    {
      "title": "I Put a Full JVM Inside a Browser Tab",
      "url": "https://bmarti44.substack.com/p/i-put-a-full-jvm-inside-a-browser",
      "score": 4,
      "comments": 1,
      "tags": [
        "java",
        "wasm",
        "web"
      ],
      "id": "0pyshw"
    },
    {
      "title": "Anthropic and Alignment",
      "url": "https://stratechery.com/2026/anthropic-and-alignment/",
      "score": -1,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "wbc5xb"
    },
    {
      "title": "Inside the M4 Apple Neural Engine, Part 1: Reverse Engineering",
      "url": "https://maderix.substack.com/p/inside-the-m4-apple-neural-engine",
      "score": 1,
      "comments": 0,
      "tags": [
        "mac",
        "reversing",
        "vibecoding"
      ],
      "id": "4djjcb"
    },
    {
      "title": "Code Corners",
      "url": "https://codecorners.rknight.me/",
      "score": 1,
      "comments": 0,
      "tags": [
        "css",
        "web"
      ],
      "id": "5gu6jr"
    },
    {
      "title": "xhidecursor: is a minimal X-application which hides the cursor (similar to xbanish)",
      "url": "https://github.com/astier/xhidecursor",
      "score": 2,
      "comments": 0,
      "tags": [
        "linux"
      ],
      "id": "aqhu6a"
    },
    {
      "title": "Detecting LLM-Generated Web Novels Using \"Classical\" Machine Learning (AIGC Text Detection)",
      "url": "https://blog.lyc8503.net/en/post/llm-classifier/",
      "score": 2,
      "comments": 1,
      "tags": [
        "ai"
      ],
      "id": "rygpdk"
    },
    {
      "title": "TUIkit: Terminal UI Framework for Swift",
      "url": "https://tuikit.dev/",
      "score": 1,
      "comments": 0,
      "tags": [
        "swift"
      ],
      "id": "ox4ds1"
    },
    {
      "title": "Evolving Typst",
      "url": "https://laurmaedje.github.io/posts/evolving-typst/",
      "score": 15,
      "comments": 2,
      "tags": [
        "practices"
      ],
      "id": "og7ihk"
    },
    {
      "title": "The 185-Microsecond Type Hint",
      "url": "https://blog.sturdystatistics.com/posts/type_hint/",
      "score": 3,
      "comments": 0,
      "tags": [
        "clojure"
      ],
      "id": "ele3bb"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "sandbach",
      "descendants": 537,
      "id": 47225130,
      "kids": [
        47229108,
        47226301,
        47226922,
        47225454,
        47225384,
        47228588,
        47228996,
        47226006,
        47225468,
        47226944,
        47226756,
        47225345,
        47226942,
        47228475,
        47225943,
        47227073,
        47229023,
        47227220,
        47225343,
        47225485,
        47226210,
        47227864,
        47228273,
        47225926,
        47226633,
        47225887,
        47226008,
        47226887,
        47225517,
        47225921,
        47226037,
        47227954,
        47225380,
        47226994,
        47225804,
        47227602,
        47227076,
        47227722,
        47227196,
        47225850,
        47227807,
        47225700,
        47226308,
        47225350,
        47225633,
        47225327,
        47225374,
        47225279,
        47226618,
        47226560,
        47226520,
        47227389,
        47226161,
        47226122,
        47225852,
        47225649,
        47225835,
        47228536,
        47225701,
        47226324,
        47226989,
        47228211,
        47226779,
        47228649,
        47225705,
        47228151,
        47225257,
        47227484,
        47228766,
        47225274,
        47226675,
        47225414,
        47225780,
        47226071,
        47226928
      ],
      "score": 936,
      "time": 1772490755,
      "title": "Meta’s AI smart glasses and data privacy concerns",
      "type": "story",
      "url": "https://www.svd.se/a/K8nrV4/metas-ai-smart-glasses-and-data-privacy-concerns-workers-say-we-see-everything"
    },
    {
      "by": "ireflect",
      "descendants": 348,
      "id": 47223620,
      "kids": [
        47224234,
        47224500,
        47224052,
        47224584,
        47225640,
        47224326,
        47227053,
        47229021,
        47223814,
        47225132,
        47225781,
        47224506,
        47228183,
        47225048,
        47228794,
        47223745,
        47227566,
        47226793,
        47225055,
        47225354,
        47224297,
        47227667,
        47224710,
        47226802,
        47228185,
        47225332,
        47225224,
        47228127,
        47226406,
        47225996,
        47224294,
        47226223,
        47225111,
        47228125,
        47225178,
        47225494,
        47224152,
        47224790,
        47225202
      ],
      "score": 706,
      "time": 1772483452,
      "title": "British Columbia is permanently adopting daylight time",
      "type": "story",
      "url": "https://www.cbc.ca/news/canada/british-columbia/b-c-adopting-year-round-daylight-time-9.7111657"
    },
    {
      "by": "zdw",
      "descendants": 16,
      "id": 47228390,
      "kids": [
        47229116,
        47229065,
        47228984,
        47229081,
        47228953,
        47228923,
        47228848,
        47228819
      ],
      "score": 45,
      "time": 1772515104,
      "title": "Daily Driving GrapheneOS",
      "type": "story",
      "url": "https://blog.matthewbrunelle.com/8-4-months-of-daily-driving-grapheneos/"
    },
    {
      "by": "danso",
      "descendants": 109,
      "id": 47226608,
      "kids": [
        47228363,
        47228104,
        47228051,
        47229015,
        47228268,
        47228192,
        47228464,
        47228201,
        47227885,
        47228287,
        47228610,
        47228311,
        47228334,
        47228209,
        47228854,
        47228929,
        47228990,
        47228082,
        47228877,
        47228069,
        47228498,
        47228662,
        47227634,
        47228281,
        47228800,
        47227792,
        47228164,
        47227638,
        47228106,
        47227518,
        47228035,
        47228070,
        47228144,
        47228080,
        47227633
      ],
      "score": 192,
      "time": 1772500350,
      "title": "Ars Technica fires reporter after AI controversy involving fabricated quotes",
      "type": "story",
      "url": "https://futurism.com/artificial-intelligence/ars-technica-fires-reporter-ai-quotes"
    },
    {
      "by": "jk_tech",
      "descendants": 17,
      "id": 47201132,
      "kids": [
        47228660,
        47228892,
        47228565,
        47228440,
        47228869,
        47228418,
        47227846,
        47228824,
        47228809,
        47204097
      ],
      "score": 77,
      "time": 1772318493,
      "title": "Simple screw counter",
      "type": "story",
      "url": "https://mitxela.com/projects/screwcounter"
    },
    {
      "by": "littlexsparkee",
      "descendants": 2,
      "id": 47228639,
      "kids": [
        47229088,
        47228921
      ],
      "score": 12,
      "time": 1772517062,
      "title": "Buckle Up for Bumpier Skies",
      "type": "story",
      "url": "https://www.newyorker.com/magazine/2026/03/09/buckle-up-for-bumpier-skies"
    },
    {
      "by": "adamveld12",
      "descendants": 16,
      "id": 47227999,
      "kids": [
        47228875,
        47228383,
        47228989,
        47228681,
        47228479,
        47228482,
        47228768,
        47228684,
        47228718,
        47228692,
        47228622,
        47228038
      ],
      "score": 29,
      "time": 1772511637,
      "title": "Intent-Based Commits",
      "type": "story",
      "url": "https://github.com/adamveld12/ghost"
    },
    {
      "by": "nicktikhonov",
      "descendants": 98,
      "id": 47224295,
      "kids": [
        47226535,
        47226218,
        47225408,
        47228698,
        47225311,
        47224438,
        47225053,
        47228667,
        47225335,
        47227309,
        47228496,
        47228945,
        47227857,
        47225431,
        47227364,
        47225169,
        47228539,
        47227699,
        47227717,
        47225220,
        47224409,
        47228518,
        47228269,
        47226215,
        47227451,
        47227534,
        47225265,
        47227251,
        47226333,
        47227180,
        47227960,
        47226004,
        47224682,
        47226828,
        47226298,
        47227991,
        47226419,
        47225508,
        47226909
      ],
      "score": 334,
      "text": "I built a voice agent from scratch that averages ~400ms end-to-end latency (phone stop → first syllable). That’s with full STT → LLM → TTS in the loop, clean barge-ins, and no precomputed responses.<p>What moved the needle:<p>Voice is a turn-taking problem, not a transcription problem. VAD alone fails; you need semantic end-of-turn detection.<p>The system reduces to one loop: speaking vs listening. The two transitions - cancel instantly on barge-in, respond instantly on end-of-turn - define the experience.<p>STT → LLM → TTS must stream. Sequential pipelines are dead on arrival for natural conversation.<p>TTFT dominates everything. In voice, the first token is the critical path. Groq’s ~80ms TTFT was the single biggest win.<p>Geography matters more than prompts. Colocate everything or you lose before you start.<p>GitHub Repo: \n<a href=\"https:&#x2F;&#x2F;github.com&#x2F;NickTikhonov&#x2F;shuo\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;NickTikhonov&#x2F;shuo</a><p>Follow whatever I next tinker with: <a href=\"https:&#x2F;&#x2F;x.com&#x2F;nick_tikhonov\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;nick_tikhonov</a>",
      "time": 1772486620,
      "title": "Show HN: I built a sub-500ms latency voice agent from scratch",
      "type": "story",
      "url": "https://www.ntik.me/posts/voice-agent"
    },
    {
      "by": "ingve",
      "descendants": 0,
      "id": 47196864,
      "score": 11,
      "time": 1772294448,
      "title": "DOS Memory Management",
      "type": "story",
      "url": "https://www.os2museum.com/wp/dos-memory-management/"
    },
    {
      "by": "almonerthis",
      "descendants": 17,
      "id": 47197858,
      "kids": [
        47229064,
        47228881,
        47228325,
        47229140,
        47228965,
        47228666,
        47228796,
        47228924,
        47228274,
        47228442,
        47229124,
        47197927,
        47228968,
        47228855
      ],
      "score": 30,
      "time": 1772299423,
      "title": "Moldova broke our data pipeline",
      "type": "story",
      "url": "https://www.avraam.dev/blog/moldova-broke-our-pipeline"
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
      "title": "What should I do and learn in 2026?",
      "description": "Maybe it's not about skills, but tactics.",
      "url": "https://dev.to/missamarakay/what-should-i-do-and-learn-in-2026-4enc",
      "tags": "career, learning, motivation, productivity",
      "reactions": 17,
      "comments": 6,
      "reading_time": 5,
      "author": "missamarakay"
    },
    {
      "title": "I Deleted Half My Codebase and Nobody Noticed",
      "description": "Last quarter, I deleted 48% of our backend code.  No new bugs. No outages. No customer...",
      "url": "https://dev.to/thegiansorianodev/i-deleted-half-my-codebase-and-nobody-noticed-549",
      "tags": "programming, softwareengineering, productivity, career",
      "reactions": 35,
      "comments": 3,
      "reading_time": 2,
      "author": "thegiansorianodev"
    },
    {
      "title": "Closing the Gap: How a Mac Mini and AI Reignited 20 Years of Ideas",
      "description": "I've had a notebook full of ideas for two decades. The gap was never imagination — it was execution. Here's what finally closed it.",
      "url": "https://dev.to/charlieseay/closing-the-gap-how-a-mac-mini-and-ai-reignited-20-years-of-ideas-4l6a",
      "tags": "personal, ai, homelab, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "charlieseay"
    },
    {
      "title": "A Look Back at Outsourcing in the Age of AI",
      "description": "A critical look at outsourcing in the age of AI agents, and what companies forget about third-party teams.",
      "url": "https://dev.to/spyke/a-look-back-at-outsourcing-in-the-age-of-ai-3n2l",
      "tags": "ai, agents, career, softwaredevelopment",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "spyke"
    },
    {
      "title": "Everyone Is Using AI in Interviews. No One Is Saying It Out Loud.",
      "description": "A Technical Rebuttal to the “Just Ban AI” Argument  There’s a narrative spreading across engineering...",
      "url": "https://dev.to/aijob/everyone-is-using-ai-in-interviews-no-one-is-saying-it-out-loud-2p1k",
      "tags": "ai, programming, interview, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "aijob"
    },
    {
      "title": "LeetCode in 2026: The Skill Nobody Respects (But Everyone Still Needs)",
      "description": "AI writes code now. So why am I still solving graph problems at night? Because thinking is becoming optional — and that’s dangerous.",
      "url": "https://dev.to/holasoymalva/leetcode-in-2026-the-skill-nobody-respects-but-everyone-still-needs-4oni",
      "tags": "programming, ai, career, discuss",
      "reactions": 3,
      "comments": 0,
      "reading_time": 3,
      "author": "holasoymalva"
    },
    {
      "title": "Best Astrologer, Love Marriage Problems, Vashikaran Mantra, Kala Jadu Black Magic Specialist in India",
      "description": "Website: https://www.kalishaktiastrologer.com  Kali Shakti Astrologer - India's Trusted Astrology,...",
      "url": "https://dev.to/kali264/best-astrologer-love-marriage-problems-vashikaran-mantra-kala-jadu-black-magic-specialist-in-22lj",
      "tags": "webdev, beginners, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "kali264"
    },
    {
      "title": "The Hardest Part of Being a Developer Isn't Coding—It's Staying Visible to Yourself",
      "description": "The original article nailed the diagnosis. Here's the architecture I use to prevent the quiet...",
      "url": "https://dev.to/narnaiezzsshaa/the-hardest-part-of-being-a-developer-isnt-coding-its-staying-visible-to-yourself-33fa",
      "tags": "discuss, mentalhealth, career, webdev",
      "reactions": 8,
      "comments": 1,
      "reading_time": 4,
      "author": "narnaiezzsshaa"
    },
    {
      "title": "How to List AI Tools on Your Developer Resume Without Looking Like Everyone Else",
      "description": "Most developers list AI tools on their resumes the same way. A line in the skills section reads: \"AI...",
      "url": "https://dev.to/sira_ai/how-to-list-ai-tools-on-your-developer-resume-without-looking-like-everyone-else-3mb4",
      "tags": "career, resume, ai, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "sira_ai"
    },
    {
      "title": "What are the technologies i should learn as a python developer in 2026?(Fresher 2027)",
      "description": "I’m currently a pre-final year Computer Science student (graduating in 2027) with a strong focus on...",
      "url": "https://dev.to/gnanesh_99/what-are-the-technologies-i-should-learn-as-a-python-developer-in-2026fresher-2027-2ghm",
      "tags": "career, programming, productivity, python",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "gnanesh_99"
    }
  ]
}
```

