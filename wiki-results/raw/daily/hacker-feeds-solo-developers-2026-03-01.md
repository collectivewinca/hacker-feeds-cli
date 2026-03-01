# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-03-01 07:03:59 UTC

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
      "forks": 633,
      "added_stars": 5747,
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
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "jandyx",
          "href": "https://github.com/jandyx",
          "avatar": "https://avatars.githubusercontent.com/u/17286731"
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
      "forks": 2729,
      "added_stars": 2445,
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
      "author": "cloudflare",
      "repo": "agents",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/agents",
      "desc": "Build and deploy AI Agents on Cloudflare",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 440,
      "added_stars": 1038,
      "builtBy": [
        {
          "username": "threepointone",
          "href": "https://github.com/threepointone",
          "avatar": "https://avatars.githubusercontent.com/u/18808"
        },
        {
          "username": "whoiskatrin",
          "href": "https://github.com/whoiskatrin",
          "avatar": "https://avatars.githubusercontent.com/u/8017908"
        },
        {
          "username": "mattzcarey",
          "href": "https://github.com/mattzcarey",
          "avatar": "https://avatars.githubusercontent.com/u/77928207"
        },
        {
          "username": "deathbyknowledge",
          "href": "https://github.com/deathbyknowledge",
          "avatar": "https://avatars.githubusercontent.com/u/37671466"
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
      "forks": 1892,
      "added_stars": 3706,
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
      "author": "semperai",
      "repo": "amica",
      "avatar": "https://github.com/semperai.png",
      "repo_link": "https://github.com/semperai/amica",
      "desc": "Amica is an open source interface for interactive communication with 3D characters with voice synthesis and speech recognition.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 241,
      "added_stars": 95,
      "builtBy": [
        {
          "username": "kasumi-1",
          "href": "https://github.com/kasumi-1",
          "avatar": "https://avatars.githubusercontent.com/u/90275229"
        },
        {
          "username": "flukexp",
          "href": "https://github.com/flukexp",
          "avatar": "https://avatars.githubusercontent.com/u/108891942"
        },
        {
          "username": "slowsynapse",
          "href": "https://github.com/slowsynapse",
          "avatar": "https://avatars.githubusercontent.com/u/33094058"
        },
        {
          "username": "danyyil-pelekhatyi",
          "href": "https://github.com/danyyil-pelekhatyi",
          "avatar": "https://avatars.githubusercontent.com/u/5165046"
        },
        {
          "username": "snowyu",
          "href": "https://github.com/snowyu",
          "avatar": "https://avatars.githubusercontent.com/u/327887"
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
      "forks": 16617,
      "added_stars": 66,
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
      "author": "evershopcommerce",
      "repo": "evershop",
      "avatar": "https://github.com/evershopcommerce.png",
      "repo_link": "https://github.com/evershopcommerce/evershop",
      "desc": "🛍️ Typescript E-commerce Platform",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2193,
      "added_stars": 555,
      "builtBy": [
        {
          "username": "treoden",
          "href": "https://github.com/treoden",
          "avatar": "https://avatars.githubusercontent.com/u/6950941"
        },
        {
          "username": "en1-gma",
          "href": "https://github.com/en1-gma",
          "avatar": "https://avatars.githubusercontent.com/u/77514209"
        },
        {
          "username": "ultimate-tester",
          "href": "https://github.com/ultimate-tester",
          "avatar": "https://avatars.githubusercontent.com/u/580758"
        },
        {
          "username": "GiorgosIlia",
          "href": "https://github.com/GiorgosIlia",
          "avatar": "https://avatars.githubusercontent.com/u/24270247"
        },
        {
          "username": "tszczypinski6",
          "href": "https://github.com/tszczypinski6",
          "avatar": "https://avatars.githubusercontent.com/u/34459148"
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
      "forks": 1858,
      "added_stars": 1660,
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
      "author": "siteboon",
      "repo": "claudecodeui",
      "avatar": "https://github.com/siteboon.png",
      "repo_link": "https://github.com/siteboon/claudecodeui",
      "desc": "Use Claude Code, Cursor CLI or Codex on mobile and web with CloudCLI (aka Claude Code UI). CloudCLI is a free open source webui/GUI that helps you manage your Claude Code session and projects remotely",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 948,
      "added_stars": 1027,
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
      "author": "jupyterlab",
      "repo": "jupyterlab",
      "avatar": "https://github.com/jupyterlab.png",
      "repo_link": "https://github.com/jupyterlab/jupyterlab",
      "desc": "JupyterLab computational environment.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3916,
      "added_stars": 21,
      "builtBy": [
        {
          "username": "blink1073",
          "href": "https://github.com/blink1073",
          "avatar": "https://avatars.githubusercontent.com/u/2096628"
        },
        {
          "username": "afshin",
          "href": "https://github.com/afshin",
          "avatar": "https://avatars.githubusercontent.com/u/159529"
        },
        {
          "username": "jasongrout",
          "href": "https://github.com/jasongrout",
          "avatar": "https://avatars.githubusercontent.com/u/192614"
        },
        {
          "username": "jtpio",
          "href": "https://github.com/jtpio",
          "avatar": "https://avatars.githubusercontent.com/u/591645"
        },
        {
          "username": "ian-r-rose",
          "href": "https://github.com/ian-r-rose",
          "avatar": "https://avatars.githubusercontent.com/u/5728311"
        }
      ]
    },
    {
      "author": "github",
      "repo": "docs",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/docs",
      "desc": "The open-source repo for docs.github.com",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 66184,
      "added_stars": 72,
      "builtBy": [
        {
          "username": "Octomerger",
          "href": "https://github.com/Octomerger",
          "avatar": "https://avatars.githubusercontent.com/u/63058869"
        },
        {
          "username": "docs-bot",
          "href": "https://github.com/docs-bot",
          "avatar": "https://avatars.githubusercontent.com/u/77750099"
        },
        {
          "username": "mchammer01",
          "href": "https://github.com/mchammer01",
          "avatar": "https://avatars.githubusercontent.com/u/42146119"
        },
        {
          "username": "heiskr",
          "href": "https://github.com/heiskr",
          "avatar": "https://avatars.githubusercontent.com/u/1221423"
        },
        {
          "username": "sarahs",
          "href": "https://github.com/sarahs",
          "avatar": "https://avatars.githubusercontent.com/u/821071"
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
      "forks": 1891,
      "added_stars": 2037,
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
      "forks": 395,
      "added_stars": 3997,
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
      "forks": 14709,
      "added_stars": 2887,
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
      "forks": 108,
      "added_stars": 523,
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
      "author": "xpzouying",
      "repo": "xiaohongshu-mcp",
      "avatar": "https://github.com/xpzouying.png",
      "repo_link": "https://github.com/xpzouying/xiaohongshu-mcp",
      "desc": "MCP for xiaohongshu.com",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1495,
      "added_stars": 1186,
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
      "author": "netbirdio",
      "repo": "netbird",
      "avatar": "https://github.com/netbirdio.png",
      "repo_link": "https://github.com/netbirdio/netbird",
      "desc": "Connect your devices into a secure WireGuard®-based overlay network with SSO, MFA and granular access controls.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1138,
      "added_stars": 1804,
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
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 446,
      "added_stars": 526,
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
      "forks": 588,
      "added_stars": 683,
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
      "author": "cli",
      "repo": "cli",
      "avatar": "https://github.com/cli.png",
      "repo_link": "https://github.com/cli/cli",
      "desc": "GitHub’s official command line tool",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8001,
      "added_stars": 599,
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
      "forks": 326,
      "added_stars": 297,
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
      "author": "abiosoft",
      "repo": "colima",
      "avatar": "https://github.com/abiosoft.png",
      "repo_link": "https://github.com/abiosoft/colima",
      "desc": "Container runtimes on macOS (and Linux) with minimal setup",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 543,
      "added_stars": 697,
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
      "forks": 279,
      "added_stars": 223,
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
      "author": "steipete",
      "repo": "wacli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/wacli",
      "desc": "WhatsApp CLI",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 97,
      "added_stars": 311,
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
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 644,
      "added_stars": 650,
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
      "forks": 2550,
      "added_stars": 1913,
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
      "forks": 1933,
      "added_stars": 1290,
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
      "author": "open-telemetry",
      "repo": "opentelemetry-collector-contrib",
      "avatar": "https://github.com/open-telemetry.png",
      "repo_link": "https://github.com/open-telemetry/opentelemetry-collector-contrib",
      "desc": "Contrib repository for the OpenTelemetry Collector",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3382,
      "added_stars": 145,
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
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 Take full control of your VPS with 1Panel. Deploy OpenClaw in one click.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2988,
      "added_stars": 717,
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
      "author": "k3s-io",
      "repo": "k3s",
      "avatar": "https://github.com/k3s-io.png",
      "repo_link": "https://github.com/k3s-io/k3s",
      "desc": "Lightweight Kubernetes",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2605,
      "added_stars": 338,
      "builtBy": [
        {
          "username": "brandond",
          "href": "https://github.com/brandond",
          "avatar": "https://avatars.githubusercontent.com/u/370103"
        },
        {
          "username": "erikwilson",
          "href": "https://github.com/erikwilson",
          "avatar": "https://avatars.githubusercontent.com/u/1999874"
        },
        {
          "username": "dereknola",
          "href": "https://github.com/dereknola",
          "avatar": "https://avatars.githubusercontent.com/u/11727736"
        },
        {
          "username": "ibuildthecloud",
          "href": "https://github.com/ibuildthecloud",
          "avatar": "https://avatars.githubusercontent.com/u/1754002"
        },
        {
          "username": "galal-hussein",
          "href": "https://github.com/galal-hussein",
          "avatar": "https://avatars.githubusercontent.com/u/3309968"
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
      "forks": 467,
      "added_stars": 1141,
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
      "author": "crossplane",
      "repo": "crossplane",
      "avatar": "https://github.com/crossplane.png",
      "repo_link": "https://github.com/crossplane/crossplane",
      "desc": "The Cloud Native Control Plane",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1143,
      "added_stars": 113,
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
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5006,
      "added_stars": 971,
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
      "forks": 237,
      "added_stars": 3668,
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
      "forks": 570,
      "added_stars": 7974,
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
      "forks": 450,
      "added_stars": 6379,
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
          "username": "Madhu3456",
          "href": "https://github.com/Madhu3456",
          "avatar": "https://avatars.githubusercontent.com/u/108209860"
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
      "forks": 1445,
      "added_stars": 8276,
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
          "username": "clarenceluo78",
          "href": "https://github.com/clarenceluo78",
          "avatar": "https://avatars.githubusercontent.com/u/71917860"
        },
        {
          "username": "matiasinsaurralde",
          "href": "https://github.com/matiasinsaurralde",
          "avatar": "https://avatars.githubusercontent.com/u/20110"
        },
        {
          "username": "mooncos",
          "href": "https://github.com/mooncos",
          "avatar": "https://avatars.githubusercontent.com/u/11057853"
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
      "forks": 2274,
      "added_stars": 10316,
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
      "author": "OpenBMB",
      "repo": "ChatDev",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/ChatDev",
      "desc": "ChatDev 2.0: Dev All through LLM-powered Multi-Agent Collaboration",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3870,
      "added_stars": 2305,
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
      "author": "NevaMind-AI",
      "repo": "memU",
      "avatar": "https://github.com/NevaMind-AI.png",
      "repo_link": "https://github.com/NevaMind-AI/memU",
      "desc": "Memory for 24/7 proactive agents like openclaw (moltbot, clawdbot).",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 866,
      "added_stars": 5039,
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
      "author": "disler",
      "repo": "claude-code-hooks-mastery",
      "avatar": "https://github.com/disler.png",
      "repo_link": "https://github.com/disler/claude-code-hooks-mastery",
      "desc": "Master Claude Code Hooks",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 571,
      "added_stars": 1052,
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
      "forks": 14314,
      "added_stars": 6995,
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
      "forks": 817,
      "added_stars": 2224,
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
      "author": "MoonshotAI",
      "repo": "kimi-cli",
      "avatar": "https://github.com/MoonshotAI.png",
      "repo_link": "https://github.com/MoonshotAI/kimi-cli",
      "desc": "Kimi Code CLI is your next CLI agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 663,
      "added_stars": 1461,
      "builtBy": [
        {
          "username": "stdrc",
          "href": "https://github.com/stdrc",
          "avatar": "https://avatars.githubusercontent.com/u/5317095"
        },
        {
          "username": "RealKai42",
          "href": "https://github.com/RealKai42",
          "avatar": "https://avatars.githubusercontent.com/u/44634134"
        },
        {
          "username": "xxchan",
          "href": "https://github.com/xxchan",
          "avatar": "https://avatars.githubusercontent.com/u/37948597"
        },
        {
          "username": "Epsirom",
          "href": "https://github.com/Epsirom",
          "avatar": "https://avatars.githubusercontent.com/u/3744223"
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
      "forks": 6049,
      "added_stars": 2462,
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
      "author": "taylorwilsdon",
      "repo": "google_workspace_mcp",
      "avatar": "https://github.com/taylorwilsdon.png",
      "repo_link": "https://github.com/taylorwilsdon/google_workspace_mcp",
      "desc": "Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search & Drive with AI - Comprehensive Google Workspace / G Suite MCP Server & CLI Tool",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 485,
      "added_stars": 329,
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
      "author": "sooperset",
      "repo": "mcp-atlassian",
      "avatar": "https://github.com/sooperset.png",
      "repo_link": "https://github.com/sooperset/mcp-atlassian",
      "desc": "MCP server for Atlassian tools (Confluence, Jira)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 960,
      "added_stars": 316,
      "builtBy": [
        {
          "username": "sooperset",
          "href": "https://github.com/sooperset",
          "avatar": "https://avatars.githubusercontent.com/u/32061883"
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
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 847,
      "added_stars": 2899,
      "builtBy": [
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
        },
        {
          "username": "kencheeto",
          "href": "https://github.com/kencheeto",
          "avatar": "https://avatars.githubusercontent.com/u/279406"
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
      "forks": 1388,
      "added_stars": 2987,
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
          "username": "anka-afk",
          "href": "https://github.com/anka-afk",
          "avatar": "https://avatars.githubusercontent.com/u/110004162"
        },
        {
          "username": "advent259141",
          "href": "https://github.com/advent259141",
          "avatar": "https://avatars.githubusercontent.com/u/197440256"
        },
        {
          "username": "RC-CHN",
          "href": "https://github.com/RC-CHN",
          "avatar": "https://avatars.githubusercontent.com/u/67079377"
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
      "upvotes": "1",
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
    },
    {
      "title": "[AI] MCP agent to Telegram bridge bot for action confirmations",
      "url": "https://github.com/aralroca/telegram-bot-mcp",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-02-19T16:58:48.000Z"
    },
    {
      "title": "Mini Logo interpreter in ~120 lines of pure JS",
      "url": "https://slicker.me/javascript/logo/logo_interpreter.htm",
      "upvotes": "4",
      "comments": "2",
      "created": "2026-02-18T04:01:03.000Z"
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
      "title": "🐾 FurEver Log — The App I Built After Losing Abu",
      "description": "The Community    This app is built for pet owners who suddenly become full-time caregivers.  The ones...",
      "url": "https://dev.to/siti_aisyahmatzainal_73/furever-log-the-app-i-built-after-losing-abu-4agn",
      "tags": "devchallenge, weekendchallenge, showdev, catloss",
      "reactions": 15,
      "comments": 2,
      "reading_time": 4,
      "author": "siti_aisyahmatzainal_73"
    },
    {
      "title": "Join the \"Built with Google Gemini: Writing Challenge\" Presented by Major League Hacking (MLH). Win a Raspberry Pi AI Kit!",
      "description": "Last week, we announced that DEV has joined Major League Hacking. To kick things off, we're launching...",
      "url": "https://dev.to/devteam/join-the-built-with-google-gemini-writing-challenge-presented-by-major-league-hacking-mlh-win-17pk",
      "tags": "devchallenge, geminireflections, gemini, ai",
      "reactions": 115,
      "comments": 37,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Upgraded embed experience and new embed types in DEV posts",
      "description": "When you paste a URL into your DEV post, if it is embeddable, you now get a handy little tooltip to...",
      "url": "https://dev.to/devteam/upgraded-embed-experience-and-new-embed-types-in-dev-posts-1kho",
      "tags": "news, devto, forem",
      "reactions": 42,
      "comments": 3,
      "reading_time": 1,
      "author": "jonmarkgo"
    },
    {
      "title": "An App where you can Train your Own Hand Pose Model for your Project! 🤌",
      "description": "This is a submission for the DEV Weekend Challenge: Community           The Community   This targets...",
      "url": "https://dev.to/francistrdev/an-app-where-you-can-train-your-own-hand-pose-model-for-your-project-58ib",
      "tags": "devchallenge, weekendchallenge, showdev, javascript",
      "reactions": 52,
      "comments": 4,
      "reading_time": 3,
      "author": "francistrdev"
    },
    {
      "title": "Bringing up an AmpereOne system",
      "description": "I decided to buy something quite large since my workstations are aging and I wanted to build stuff...",
      "url": "https://dev.to/luzero/bringing-up-an-ampereone-system-1ln6",
      "tags": "gentoo, ampere",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "luzero"
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
      "title": "What was your win this week?!",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-5h33",
      "tags": "weeklyretro, discuss",
      "reactions": 37,
      "comments": 48,
      "reading_time": 1,
      "author": "jess"
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
      "title": "The Token Economy",
      "description": "In 2161, time is money. Literally.  When you are born, a clock starts on your arm. One year. When it...",
      "url": "https://dev.to/dannwaneri/the-token-economy-3cd9",
      "tags": "ai, webdev, career, discuss",
      "reactions": 53,
      "comments": 40,
      "reading_time": 4,
      "author": "dannwaneri"
    },
    {
      "title": "Happening Now: DEV Weekend Challenge!! Submissions due March 2 at 7:59am UTC.",
      "description": "Good morning! Good afternoon! Good Evening!   Welcome to our first DEV Weekend Challenge, a short...",
      "url": "https://dev.to/devteam/happening-now-dev-weekend-challenge-submissions-due-march-2-at-759am-utc-5fg8",
      "tags": "devchallenge, weekendchallenge, webdev, ai",
      "reactions": 162,
      "comments": 32,
      "reading_time": 3,
      "author": "jess"
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
      "title": "A Poet with No Verse",
      "url": "https://akshay.fyi/posts/a-poet-with-no-verse/",
      "score": 2,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "3bdydz"
    },
    {
      "title": "Triangle of Power (2016)",
      "url": "https://www.youtube.com/watch?v=sULa9Lc4pck",
      "score": 5,
      "comments": 0,
      "tags": [
        "math",
        "video"
      ],
      "id": "j2gprn"
    },
    {
      "title": "Cash issuing terminals",
      "url": "https://computer.rip/2026-02-27-ibm-atm.html",
      "score": 12,
      "comments": 0,
      "tags": [
        "historical"
      ],
      "id": "98pmg9"
    },
    {
      "title": "Apache Iggy's migration journey to thread-per-core architecture powered by io_uring",
      "url": "https://iggy.apache.org/blogs/2026/02/27/thread-per-core-io_uring/",
      "score": 2,
      "comments": 0,
      "tags": [
        "rust"
      ],
      "id": "uftmc7"
    },
    {
      "title": "Custom Data Structures in E-Graphs",
      "url": "https://uwplse.org/2026/02/24/egglog-containers.html",
      "score": 7,
      "comments": 1,
      "tags": [
        "logiclangs",
        "plt",
        "python"
      ],
      "id": "szaazg"
    },
    {
      "title": "Thinking Deeply About Theming and Color Naming",
      "url": "https://css-tricks.com/thinking-deeply-about-theming-and-color-naming/",
      "score": 7,
      "comments": 1,
      "tags": [
        "css",
        "design",
        "web"
      ],
      "id": "kkslov"
    },
    {
      "title": "The Science of Detecting LLM-Generated Text",
      "url": "https://dl.acm.org/doi/10.1145/3624725",
      "score": 7,
      "comments": 2,
      "tags": [
        "ai"
      ],
      "id": "ctxxsx"
    },
    {
      "title": "Block the “Upgrade to Tahoe” alerts",
      "url": "https://robservatory.com/block-the-upgrade-to-tahoe-alerts-and-system-settings-indicator/",
      "score": 21,
      "comments": 12,
      "tags": [
        "mac"
      ],
      "id": "kch6lb"
    },
    {
      "title": "Verified Spec-Driven Development (VSDD)",
      "url": "https://gist.github.com/dollspace-gay/d8d3bc3ecf4188df049d7a4726bb2a00",
      "score": 1,
      "comments": 0,
      "tags": [
        "ai",
        "practices",
        "vibecoding"
      ],
      "id": "va5c7k"
    },
    {
      "title": "Breeze QtWidgets style changes to help us prepare for Union",
      "url": "https://akselmo.dev/posts/breeze-and-union-preparing/",
      "score": 9,
      "comments": 1,
      "tags": [
        "c++",
        "linux"
      ],
      "id": "gzqqun"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "tambourine_man",
      "descendants": 90,
      "id": 47202708,
      "kids": [
        47203987,
        47203703,
        47204191,
        47203786,
        47203702,
        47204303,
        47204123,
        47204188,
        47204061,
        47204151,
        47203192,
        47202976,
        47203653,
        47203236,
        47204051,
        47203465,
        47203796,
        47203592,
        47203044,
        47203705,
        47203423,
        47203247,
        47202895,
        47203222
      ],
      "score": 528,
      "time": 1772329166,
      "title": "Microgpt",
      "type": "story",
      "url": "http://karpathy.github.io/2026/02/12/microgpt/"
    },
    {
      "by": "golfer",
      "descendants": 206,
      "id": 47200420,
      "kids": [
        47201779,
        47202878,
        47204355,
        47202880,
        47202700,
        47202705,
        47202593,
        47204025,
        47203193,
        47203086,
        47202561,
        47200742,
        47201018,
        47202342,
        47202930,
        47203526,
        47204238,
        47201846,
        47202982,
        47203205,
        47202819,
        47203810,
        47204185,
        47202259,
        47202989,
        47202485,
        47203709,
        47202964,
        47202805,
        47203872,
        47201644,
        47203566,
        47201647,
        47201703,
        47202907,
        47201852,
        47202809,
        47203284,
        47202582,
        47202542,
        47202756,
        47202283,
        47201731,
        47202438,
        47202800,
        47203894,
        47202752,
        47202688,
        47202885,
        47202199
      ],
      "score": 454,
      "time": 1772313856,
      "title": "We do not think Anthropic should be designated as a supply chain risk",
      "type": "story",
      "url": "https://twitter.com/OpenAI/status/2027846016423321831"
    },
    {
      "by": "ksec",
      "descendants": 132,
      "id": 47200904,
      "kids": [
        47201788,
        47201474,
        47201511,
        47202356,
        47202621,
        47203294,
        47204150,
        47202699,
        47204194,
        47201499,
        47201332,
        47201900,
        47201700,
        47201549,
        47201521,
        47202318
      ],
      "score": 222,
      "time": 1772317176,
      "title": "The Windows 95 user interface: A case study in usability engineering (1996)",
      "type": "story",
      "url": "https://dl.acm.org/doi/fullHtml/10.1145/238386.238611"
    },
    {
      "by": "zdw",
      "descendants": 8,
      "id": 47152448,
      "kids": [
        47204165,
        47204035
      ],
      "score": 34,
      "time": 1772031680,
      "title": "Sub-second volumetric 3D printing by synthesis of holographic light fields",
      "type": "story",
      "url": "https://www.nature.com/articles/s41586-026-10114-5"
    },
    {
      "by": "bewal416",
      "descendants": 218,
      "id": 47161759,
      "kids": [
        47199926,
        47199531,
        47199743,
        47204067,
        47199108,
        47202544,
        47202710,
        47199844,
        47198937,
        47199300,
        47199344,
        47199730,
        47199974,
        47201680,
        47203069,
        47199957,
        47203601,
        47203289,
        47200118,
        47203282,
        47200105,
        47200064,
        47201178,
        47201925,
        47203561,
        47200937,
        47200275,
        47201225,
        47199945,
        47198865,
        47199325,
        47203927,
        47202348,
        47201800,
        47199372,
        47200279
      ],
      "score": 432,
      "time": 1772079227,
      "title": "The happiest I've ever been",
      "type": "story",
      "url": "https://ben-mini.com/2026/the-happiest-ive-ever-been"
    },
    {
      "by": "adilmoujahid",
      "descendants": 154,
      "id": 47197267,
      "kids": [
        47197627,
        47198321,
        47204092,
        47198426,
        47200196,
        47200484,
        47197433,
        47204101,
        47200666,
        47198043,
        47202445,
        47201047,
        47197391,
        47199063,
        47200225,
        47197991,
        47198915,
        47197588,
        47200223,
        47199872,
        47202021,
        47200282,
        47200685,
        47198997,
        47197484,
        47199717,
        47198375,
        47197666,
        47200387,
        47198301,
        47200235,
        47197697,
        47200750,
        47197679,
        47197445,
        47201442
      ],
      "score": 451,
      "time": 1772296313,
      "title": "Obsidian Sync now has a headless client",
      "type": "story",
      "url": "https://help.obsidian.md/sync/headless"
    },
    {
      "by": "mrngm",
      "descendants": 14,
      "id": 47163779,
      "kids": [
        47203743,
        47203740,
        47203190,
        47203312,
        47202894,
        47186205
      ],
      "score": 64,
      "time": 1772097537,
      "title": "H-Bomb: A Frank Lloyd Wright Typographic Mystery",
      "type": "story",
      "url": "https://www.inconspicuous.info/p/h-bomb-a-frank-lloyd-wright-typographic"
    },
    {
      "by": "todsacerdoti",
      "descendants": 87,
      "id": 47198977,
      "kids": [
        47200608,
        47202649,
        47201799,
        47204334,
        47202780,
        47201441,
        47200936,
        47200802,
        47202458,
        47202707,
        47200418,
        47203491,
        47201215,
        47203354,
        47203316,
        47203769,
        47203434,
        47202480,
        47201660,
        47204103,
        47200850,
        47200972,
        47201367,
        47200845,
        47200978,
        47203349,
        47200624
      ],
      "score": 191,
      "time": 1772305441,
      "title": "Block the “Upgrade to Tahoe” Alerts",
      "type": "story",
      "url": "https://robservatory.com/block-the-upgrade-to-tahoe-alerts-and-system-settings-indicator/"
    },
    {
      "by": "jawiggins",
      "descendants": 38,
      "id": 47201816,
      "kids": [
        47204178,
        47202718,
        47203883,
        47202576,
        47202832,
        47202423,
        47203756,
        47202495,
        47202464,
        47203325,
        47203435,
        47202420
      ],
      "score": 54,
      "text": "Recently several AI labs have published experiments where they tried to get AI coding agents to complete large software projects.<p>- Cursor attempted to make a browser from scratch: <a href=\"https:&#x2F;&#x2F;cursor.com&#x2F;blog&#x2F;scaling-agents\" rel=\"nofollow\">https:&#x2F;&#x2F;cursor.com&#x2F;blog&#x2F;scaling-agents</a><p>- Anthropic attempted to make a C Compiler: <a href=\"https:&#x2F;&#x2F;www.anthropic.com&#x2F;engineering&#x2F;building-c-compiler\" rel=\"nofollow\">https:&#x2F;&#x2F;www.anthropic.com&#x2F;engineering&#x2F;building-c-compiler</a><p>I have been wondering if there are software packages that can be easily reproduced by taking the available test suites and tasking agents to work on projects until the existing test suites pass.<p>After playing with this concept by having Claude Code reproduce redis and sqlite, I began looking for software packages where an agent-made reproduction might actually be useful.<p>I found libxml2, a widely used, open-source C language library designed for parsing, creating, and manipulating XML and HTML documents. Three months ago it became unmaintained with the update, &quot;This project is unmaintained and has\n[known security issues](<a href=\"https:&#x2F;&#x2F;gitlab.gnome.org&#x2F;GNOME&#x2F;libxml2&#x2F;-&#x2F;issues&#x2F;346\" rel=\"nofollow\">https:&#x2F;&#x2F;gitlab.gnome.org&#x2F;GNOME&#x2F;libxml2&#x2F;-&#x2F;issues&#x2F;346</a>). It is foolish to use this software to process untrusted data.&quot;.<p>With a few days of work, I was able to create xmloxide, a memory safe rust replacement for libxml2 which passes the compatibility suite as well as the W3C XML Conformance Test Suite. Performance is similar on most parsing operations and better on serialization. It comes with a C API so that it can be a replacement for existing uses of libxml2.<p>- crates.io: <a href=\"https:&#x2F;&#x2F;crates.io&#x2F;crates&#x2F;xmloxide\" rel=\"nofollow\">https:&#x2F;&#x2F;crates.io&#x2F;crates&#x2F;xmloxide</a><p>- GitHub release: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;jonwiggins&#x2F;xmloxide&#x2F;releases&#x2F;tag&#x2F;v0.1.0\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;jonwiggins&#x2F;xmloxide&#x2F;releases&#x2F;tag&#x2F;v0.1.0</a><p>While I don&#x27;t expect people to cut over to this new and unproven package, I do think there is something interesting to think about here in how coding agents like Claude Code can quickly iterate given a test suite. It&#x27;s possible the legacy code problem that COBOL and other systems present will go away as rewrites become easier. The problem of ongoing maintenance to fix CVEs and update to later package versions becomes a larger percentage of software package management work.",
      "time": 1772322281,
      "title": "Show HN: Xmloxide – an agent made rust replacement for libxml2",
      "type": "story",
      "url": "https://github.com/jonwiggins/xmloxide"
    },
    {
      "by": "rmoff",
      "descendants": 0,
      "id": 47167432,
      "score": 12,
      "time": 1772119899,
      "title": "Hardwood: A New Parser for Apache Parquet",
      "type": "story",
      "url": "https://www.morling.dev/blog/hardwood-new-parser-for-apache-parquet/"
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
      "title": "The Hardest Part of Being a Developer Isn’t Coding. It’s Disappearing Quietly.",
      "description": "A weird thing happens when you become a developer. You can go days without anyone needing you in a...",
      "url": "https://dev.to/the_nortern_dev/the-hardest-part-of-being-a-developer-isnt-coding-its-disappearing-quietly-52l",
      "tags": "discuss, mentalhealth, webdev, career",
      "reactions": 21,
      "comments": 12,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "5 Side Hustles That Pay Better Than Your Dev Job",
      "description": "I'm going to be honest with you. I'm 19 and I already make more from side hustles than most junior...",
      "url": "https://dev.to/__be2942592/5-side-hustles-that-pay-better-than-your-dev-job-3nhb",
      "tags": "career, programming, beginners, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "__be2942592"
    },
    {
      "title": "Синдром самозванца у разработчиков: как я перестал думать что я тупой",
      "description": "Мне 19 лет. Я пишу код уже несколько лет. И знаете что? Почти каждый день я просыпаюсь с мыслью, что...",
      "url": "https://dev.to/__be2942592/sindrom-samozvantsa-u-razrabotchikov-kak-ia-pieriestal-dumat-chto-ia-tupoi-5cp7",
      "tags": "career, beginners, programming, motivation",
      "reactions": 1,
      "comments": 0,
      "reading_time": 1,
      "author": "__be2942592"
    },
    {
      "title": "Before the Week Begins",
      "description": "I don’t assume I’m the smartest person in the room. But I know I’m one of the most reliable.  Skills...",
      "url": "https://dev.to/programmer_gamer_c856712c/before-the-week-begins-bl0",
      "tags": "programming, dataengineering, learning, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 1,
      "author": "programmer_gamer_c856712c"
    },
    {
      "title": "I Spent 15 Years as an Engineer, Designer, and Business Owner. Here's Why AI Made All Three Essential.",
      "description": "From mission-critical systems to P&amp;L ownership to design thinking — why the GenAI era rewards...",
      "url": "https://dev.to/s3atoshi_leading_ai/beyond-the-specialist-why-the-ai-era-demands-a-triangular-architect-1dng",
      "tags": "ai, career, architecture, designthinking",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "s3atoshi_leading_ai"
    },
    {
      "title": "Cracking the Tech Interview: My Master List of 10+ Interview Experiences 🚀",
      "description": "Navigating the tech interview process can feel overwhelming. Over the years, I’ve interviewed for...",
      "url": "https://dev.to/freeze_francis/cracking-the-tech-interview-my-master-list-of-10-interview-experiences-466g",
      "tags": "interview, coding, systemdesign, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "freeze_francis"
    },
    {
      "title": "New way to get portfolio inspirations",
      "description": "If you’re searching for portfolio inspiration, developer portfolio examples, or designer portfolio...",
      "url": "https://dev.to/areeburrub/new-way-to-get-portfolio-inspirations-2730",
      "tags": "webdev, productivity, discuss, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "areeburrub"
    },
    {
      "title": "How to Build a Developer Portfolio That Actually Gets You Hired (2026)",
      "description": "I've reviewed about 200 developer portfolios in the last year. As someone who hires freelancers and...",
      "url": "https://dev.to/__be2942592/how-to-build-a-developer-portfolio-that-actually-gets-you-hired-2026-6kn",
      "tags": "career, beginners, webdev, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "__be2942592"
    },
    {
      "title": "Crisis-Proof Communication: The Operational Skill That Turns Chaos Into Credibility",
      "description": "Most reputations don’t collapse because of one bad event; they collapse because people feel misled,...",
      "url": "https://dev.to/sonia_bobrik_1939cdddd79d/crisis-proof-communication-the-operational-skill-that-turns-chaos-into-credibility-59o9",
      "tags": "career, leadership, management, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "sonia_bobrik_1939cdddd79d"
    },
    {
      "title": "IBM Tripled Its Junior Hiring Because of AI. The Jobs Don't Look Like Jobs Anymore.",
      "description": "IBM Tripled Its Junior Hiring Because of AI. The Jobs Don't Look Like Jobs Anymore.   Every...",
      "url": "https://dev.to/mothasa/ibm-tripled-its-junior-hiring-because-of-ai-the-jobs-dont-look-like-jobs-anymore-1f5l",
      "tags": "ai, career, technology, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "mothasa"
    }
  ]
}
```

