# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-24 06:39:02 UTC

Runtime note: executed with NODE_OPTIONS=--require /tmp/hf-polyfill.js

## 1. Hot Content Themes Today

**Query:** What content themes are hot today?

**Command:**
```bash
echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set' ; node bin/main.js --json reddit -t popular -s hot ; node bin/main.js --json devto -s top -c 10
```

**Output:**
```text
[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "devto",
  "tag": null,
  "sort": "top",
  "items": [
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-1bec",
      "tags": "discuss, watercooler, jokes",
      "reactions": 30,
      "comments": 19,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Building a Weather Station Using an Old Raspberry Pi",
      "description": "For a long time I wanted to build a weather station at home because I like meteorology and for the...",
      "url": "https://dev.to/nandofm/building-a-weather-station-using-an-old-raspberry-pi-5333",
      "tags": "raspberrypi, sideprojects, learning, community",
      "reactions": 16,
      "comments": 1,
      "reading_time": 3,
      "author": "nandofm"
    },
    {
      "title": "I Talk to AI While I Code. Here's What Works, What Fails, and Where I Stop.",
      "description": "I'll be honest. A year ago, if you told me I'd be having full conversations with an AI while building...",
      "url": "https://dev.to/sudodevesh/i-talk-to-ai-while-i-code-heres-what-works-what-fails-and-where-i-stop-22jk",
      "tags": "ai, programming, coding, webdev",
      "reactions": 8,
      "comments": 4,
      "reading_time": 3,
      "author": "sudodevesh"
    },
    {
      "title": "Get Started on Dev.to! A Beginner's Guide to Engage with the Community!",
      "description": "All Images are own by the Pokemon Company!  Important Information: This post is an Unofficial Dev.to...",
      "url": "https://dev.to/francistrdev/get-started-on-devto-a-beginners-guide-to-engage-with-the-community-4ach",
      "tags": "discuss, community, beginners, howtodevto",
      "reactions": 65,
      "comments": 34,
      "reading_time": 6,
      "author": "francistrdev"
    },
    {
      "title": "Testing Antigravity: Building a Data-Intensive POC at 300km/h",
      "description": "Introduction   Last week, I spent a few hours on a Frecciarossa train from Rome to Calabria....",
      "url": "https://dev.to/gde/testing-antigravity-building-a-data-intensive-poc-at-300kmh-4c57",
      "tags": "antigravity, googlecloud, gemini, dataengineering",
      "reactions": 5,
      "comments": 0,
      "reading_time": 3,
      "author": "patitonav"
    },
    {
      "title": "What was your win this week??",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-35ja",
      "tags": "weeklyretro, discuss",
      "reactions": 50,
      "comments": 80,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Introducing Aerostack: Workflows, MCPs, and Intelligent Bots on the Edge",
      "description": "The Problem   It starts with configuration sprawl.  I was building a project and kept...",
      "url": "https://dev.to/aerostack/introducing-aerostack-workflows-mcps-and-intelligent-bots-on-the-edge-4pla",
      "tags": "ai, mcp, cloudflarechallenge, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 8,
      "author": "aerostack"
    },
    {
      "title": "Are you paying attention to your token use?",
      "description": "Or do you just use AI tools freely?",
      "url": "https://dev.to/missamarakay/are-you-paying-attention-to-your-token-use-5h5n",
      "tags": "ai, discuss",
      "reactions": 19,
      "comments": 34,
      "reading_time": 1,
      "author": "missamarakay"
    },
    {
      "title": "AI context management across Claude, Cursor, Kiro, Gemini and custom agents",
      "description": "If you use more than one AI coding agent, you've probably noticed that each one wants its own context...",
      "url": "https://dev.to/madeburo/ai-context-management-across-claude-cursor-kiro-gemini-and-custom-agents-2n1f",
      "tags": "ai, opensource, cli, agents",
      "reactions": 4,
      "comments": 0,
      "reading_time": 3,
      "author": "madeburo"
    },
    {
      "title": "Duct tape enough services together and you can cache APT packages",
      "description": "APT repositories are just HTTP file servers, doesn't seem like something that should require a custom piece of software.",
      "url": "https://dev.to/dhandspikerwade/duct-tape-enough-services-together-and-you-can-cache-apt-packages-2iml",
      "tags": "docker, debian, ubuntu, nginx",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "dhandspikerwade"
    }
  ]
}
```

## 2. This Week AI + Web Content Ideas

**Query:** What should I make a video/post about this week in AI + web?

**Command:**
```bash
node bin/main.js --json github -s weekly -l javascript ; node bin/main.js --json devto -t ai -s top -c 10 ; node bin/main.js --json news -t 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "github",
  "since": "weekly",
  "language": "javascript",
  "items": [
    {
      "author": "jarrodwatts",
      "repo": "claude-hud",
      "avatar": "https://github.com/jarrodwatts.png",
      "repo_link": "https://github.com/jarrodwatts/claude-hud",
      "desc": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 506,
      "added_stars": 7069,
      "builtBy": [
        {
          "username": "jarrodwatts",
          "href": "https://github.com/jarrodwatts",
          "avatar": "https://avatars.githubusercontent.com/u/35651410"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "melon-hub",
          "href": "https://github.com/melon-hub",
          "avatar": "https://avatars.githubusercontent.com/u/53302110"
        }
      ]
    },
    {
      "author": "affaan-m",
      "repo": "everything-claude-code",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/everything-claude-code",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 13382,
      "added_stars": 21490,
      "builtBy": [
        {
          "username": "affaan-m",
          "href": "https://github.com/affaan-m",
          "avatar": "https://avatars.githubusercontent.com/u/124439313"
        },
        {
          "username": "pangerlkr",
          "href": "https://github.com/pangerlkr",
          "avatar": "https://avatars.githubusercontent.com/u/73515951"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "pvgomes",
          "href": "https://github.com/pvgomes",
          "avatar": "https://avatars.githubusercontent.com/u/4427450"
        }
      ]
    },
    {
      "author": "andrewyng",
      "repo": "context-hub",
      "avatar": "https://github.com/andrewyng.png",
      "repo_link": "https://github.com/andrewyng/context-hub",
      "desc": "",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1037,
      "added_stars": 5326,
      "builtBy": [
        {
          "username": "rohitprasad15",
          "href": "https://github.com/rohitprasad15",
          "avatar": "https://avatars.githubusercontent.com/u/1796239"
        },
        {
          "username": "Ivanye2509",
          "href": "https://github.com/Ivanye2509",
          "avatar": "https://avatars.githubusercontent.com/u/91228630"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "danielhorvath-cleo",
          "href": "https://github.com/danielhorvath-cleo",
          "avatar": "https://avatars.githubusercontent.com/u/147529159"
        },
        {
          "username": "neilthomass",
          "href": "https://github.com/neilthomass",
          "avatar": "https://avatars.githubusercontent.com/u/195538237"
        }
      ]
    },
    {
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 524,
      "added_stars": 3555,
      "builtBy": [
        {
          "username": "pbakaus",
          "href": "https://github.com/pbakaus",
          "avatar": "https://avatars.githubusercontent.com/u/43004"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "glacierphonk",
          "href": "https://github.com/glacierphonk",
          "avatar": "https://avatars.githubusercontent.com/u/260244336"
        },
        {
          "username": "JasonOA888",
          "href": "https://github.com/JasonOA888",
          "avatar": "https://avatars.githubusercontent.com/u/101583541"
        },
        {
          "username": "VaishnavGunjari",
          "href": "https://github.com/VaishnavGunjari",
          "avatar": "https://avatars.githubusercontent.com/u/169933825"
        }
      ]
    },
    {
      "author": "sgoudelis",
      "repo": "ground-station",
      "avatar": "https://github.com/sgoudelis.png",
      "repo_link": "https://github.com/sgoudelis/ground-station",
      "desc": "Ground Station is all-in-one satellite monitoring suite",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 555,
      "added_stars": 2585,
      "builtBy": [
        {
          "username": "sgoudelis",
          "href": "https://github.com/sgoudelis",
          "avatar": "https://avatars.githubusercontent.com/u/4840328"
        },
        {
          "username": "Jbsco",
          "href": "https://github.com/Jbsco",
          "avatar": "https://avatars.githubusercontent.com/u/90524106"
        }
      ]
    },
    {
      "author": "ComposioHQ",
      "repo": "awesome-claude-plugins",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/awesome-claude-plugins",
      "desc": "A curated list of Plugins that let you extend Claude Code with custom commands, agents, hooks, and MCP servers through the plugin system.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 233,
      "added_stars": 58,
      "builtBy": [
        {
          "username": "Prat011",
          "href": "https://github.com/Prat011",
          "avatar": "https://avatars.githubusercontent.com/u/67639393"
        },
        {
          "username": "sujayjayjay",
          "href": "https://github.com/sujayjayjay",
          "avatar": "https://avatars.githubusercontent.com/u/84703335"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mksglu",
          "href": "https://github.com/mksglu",
          "avatar": "https://avatars.githubusercontent.com/u/6067714"
        },
        {
          "username": "SebConejo",
          "href": "https://github.com/SebConejo",
          "avatar": "https://avatars.githubusercontent.com/u/11723962"
        }
      ]
    },
    {
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3260,
      "added_stars": 8749,
      "builtBy": [
        {
          "username": "glittercowboy",
          "href": "https://github.com/glittercowboy",
          "avatar": "https://avatars.githubusercontent.com/u/186001655"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "trek-e",
          "href": "https://github.com/trek-e",
          "avatar": "https://avatars.githubusercontent.com/u/4738965"
        },
        {
          "username": "Tibsfox",
          "href": "https://github.com/Tibsfox",
          "avatar": "https://avatars.githubusercontent.com/u/537551"
        },
        {
          "username": "Solvely-Colin",
          "href": "https://github.com/Solvely-Colin",
          "avatar": "https://avatars.githubusercontent.com/u/211764741"
        }
      ]
    },
    {
      "author": "justlovemaki",
      "repo": "AIClient-2-API",
      "avatar": "https://github.com/justlovemaki.png",
      "repo_link": "https://github.com/justlovemaki/AIClient-2-API",
      "desc": "Simulates Gemini CLI, Antigravity, Qwen Code, and Kiro client requests, compatible with the OpenAI API. It supports thousands of Gemini model requests per day and offers free use of the built-in Claude model in Kiro. Easily connect to any client via the API, making AI development more efficient!",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 917,
      "added_stars": 788,
      "builtBy": [
        {
          "username": "justlikemaki",
          "href": "https://github.com/justlikemaki",
          "avatar": "https://avatars.githubusercontent.com/u/12859173"
        },
        {
          "username": "justlovemaki",
          "href": "https://github.com/justlovemaki",
          "avatar": "https://avatars.githubusercontent.com/u/22851716"
        },
        {
          "username": "leonaii",
          "href": "https://github.com/leonaii",
          "avatar": "https://avatars.githubusercontent.com/u/7904076"
        },
        {
          "username": "MicoMiOvO",
          "href": "https://github.com/MicoMiOvO",
          "avatar": "https://avatars.githubusercontent.com/u/119792728"
        },
        {
          "username": "tickernelz",
          "href": "https://github.com/tickernelz",
          "avatar": "https://avatars.githubusercontent.com/u/10543415"
        }
      ]
    },
    {
      "author": "coreyhaines31",
      "repo": "marketingskills",
      "avatar": "https://github.com/coreyhaines31.png",
      "repo_link": "https://github.com/coreyhaines31/marketingskills",
      "desc": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2394,
      "added_stars": 1956,
      "builtBy": [
        {
          "username": "coreyhaines31",
          "href": "https://github.com/coreyhaines31",
          "avatar": "https://avatars.githubusercontent.com/u/34802794"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Jiliac",
          "href": "https://github.com/Jiliac",
          "avatar": "https://avatars.githubusercontent.com/u/5956866"
        },
        {
          "username": "bensabic",
          "href": "https://github.com/bensabic",
          "avatar": "https://avatars.githubusercontent.com/u/27636870"
        },
        {
          "username": "Ray0907",
          "href": "https://github.com/Ray0907",
          "avatar": "https://avatars.githubusercontent.com/u/29456968"
        }
      ]
    },
    {
      "author": "tabler",
      "repo": "tabler-icons",
      "avatar": "https://github.com/tabler.png",
      "repo_link": "https://github.com/tabler/tabler-icons",
      "desc": "A set of over 6000 free MIT-licensed high-quality SVG icons for you to use in your web projects.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1102,
      "added_stars": 120,
      "builtBy": [
        {
          "username": "codecalm",
          "href": "https://github.com/codecalm",
          "avatar": "https://avatars.githubusercontent.com/u/1282324"
        },
        {
          "username": "FreexD",
          "href": "https://github.com/FreexD",
          "avatar": "https://avatars.githubusercontent.com/u/7117869"
        },
        {
          "username": "0xflotus",
          "href": "https://github.com/0xflotus",
          "avatar": "https://avatars.githubusercontent.com/u/26602940"
        },
        {
          "username": "BG-Software-BG",
          "href": "https://github.com/BG-Software-BG",
          "avatar": "https://avatars.githubusercontent.com/u/73077398"
        },
        {
          "username": "mauriciabad",
          "href": "https://github.com/mauriciabad",
          "avatar": "https://avatars.githubusercontent.com/u/12821361"
        }
      ]
    },
    {
      "author": "Wei-Shaw",
      "repo": "claude-relay-service",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/claude-relay-service",
      "desc": "CRS-自建Claude Code镜像，一站式开源中转服务，让 Claude、OpenAI、Gemini、Droid 订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1521,
      "added_stars": 418,
      "builtBy": [
        {
          "username": "Wei-Shaw",
          "href": "https://github.com/Wei-Shaw",
          "avatar": "https://avatars.githubusercontent.com/u/26101719"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "f3n9",
          "href": "https://github.com/f3n9",
          "avatar": "https://avatars.githubusercontent.com/u/663221"
        },
        {
          "username": "kevinconan",
          "href": "https://github.com/kevinconan",
          "avatar": "https://avatars.githubusercontent.com/u/3772409"
        }
      ]
    },
    {
      "author": "cockpit-project",
      "repo": "cockpit",
      "avatar": "https://github.com/cockpit-project.png",
      "repo_link": "https://github.com/cockpit-project/cockpit",
      "desc": "Cockpit is a web-based graphical interface for servers.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1251,
      "added_stars": 467,
      "builtBy": [
        {
          "username": "martinpitt",
          "href": "https://github.com/martinpitt",
          "avatar": "https://avatars.githubusercontent.com/u/200109"
        },
        {
          "username": "stefwalter",
          "href": "https://github.com/stefwalter",
          "avatar": "https://avatars.githubusercontent.com/u/795070"
        },
        {
          "username": "mvollmer",
          "href": "https://github.com/mvollmer",
          "avatar": "https://avatars.githubusercontent.com/u/3228183"
        },
        {
          "username": "allisonkarlitskaya",
          "href": "https://github.com/allisonkarlitskaya",
          "avatar": "https://avatars.githubusercontent.com/u/36541154"
        },
        {
          "username": "KKoukiou",
          "href": "https://github.com/KKoukiou",
          "avatar": "https://avatars.githubusercontent.com/u/14921356"
        }
      ]
    },
    {
      "author": "hakimel",
      "repo": "reveal.js",
      "avatar": "https://github.com/hakimel.png",
      "repo_link": "https://github.com/hakimel/reveal.js",
      "desc": "The HTML Presentation Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 16806,
      "added_stars": 104,
      "builtBy": [
        {
          "username": "hakimel",
          "href": "https://github.com/hakimel",
          "avatar": "https://avatars.githubusercontent.com/u/629429"
        },
        {
          "username": "VonC",
          "href": "https://github.com/VonC",
          "avatar": "https://avatars.githubusercontent.com/u/79478"
        },
        {
          "username": "mischah",
          "href": "https://github.com/mischah",
          "avatar": "https://avatars.githubusercontent.com/u/441011"
        },
        {
          "username": "bnjmnt4n",
          "href": "https://github.com/bnjmnt4n",
          "avatar": "https://avatars.githubusercontent.com/u/813865"
        },
        {
          "username": "davidbanham",
          "href": "https://github.com/davidbanham",
          "avatar": "https://avatars.githubusercontent.com/u/631832"
        }
      ]
    },
    {
      "author": "xnx3",
      "repo": "translate",
      "avatar": "https://github.com/xnx3.png",
      "repo_link": "https://github.com/xnx3/translate",
      "desc": "AI i18n, Two lines of js realize automatic html translation. No need to change the page, no language configuration file, no API key, SEO friendly!",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 430,
      "added_stars": 113,
      "builtBy": [
        {
          "username": "xnx3",
          "href": "https://github.com/xnx3",
          "avatar": "https://avatars.githubusercontent.com/u/8872471"
        },
        {
          "username": "cxb1029",
          "href": "https://github.com/cxb1029",
          "avatar": "https://avatars.githubusercontent.com/u/155722415"
        },
        {
          "username": "Lruihao",
          "href": "https://github.com/Lruihao",
          "avatar": "https://avatars.githubusercontent.com/u/33419593"
        },
        {
          "username": "DYJ762",
          "href": "https://github.com/DYJ762",
          "avatar": "https://avatars.githubusercontent.com/u/68176989"
        },
        {
          "username": "TatsukiMeng",
          "href": "https://github.com/TatsukiMeng",
          "avatar": "https://avatars.githubusercontent.com/u/98578510"
        }
      ]
    }
  ]
}
- Fetching feeds...
{
  "source": "devto",
  "tag": "ai",
  "sort": "top",
  "items": [
    {
      "title": "The Illusion of the Human Touch",
      "description": "We are currently obsessed with playing the AI police. Everywhere you look online, people are pointing...",
      "url": "https://dev.to/the_nortern_dev/the-illusion-of-the-human-touch-5b0",
      "tags": "discuss, writing, ai, culture",
      "reactions": 38,
      "comments": 31,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "Engenharia de Prompt: Por Que a Forma Como Você Pergunta Muda Tudo(Um guia introdutório)",
      "description": "Neste artigo irei explicar alguns pontos importantes sobre Engenharia de prompt, e como saber esses...",
      "url": "https://dev.to/fransborges/engenharia-de-prompt-por-que-a-forma-como-voce-pergunta-muda-tudoum-guia-introdutorio-3hb0",
      "tags": "ai, productivity, beginners, braziliandevs",
      "reactions": 113,
      "comments": 3,
      "reading_time": 7,
      "author": "fransborges"
    },
    {
      "title": "Construí um gerador de playlists no Spotify com Claude",
      "description": "Eu queria digitar “noite chuvosa, meio melancólica” e receber uma playlist perfeita. Então eu...",
      "url": "https://dev.to/leugarcez/construi-um-gerador-de-playlists-no-spotify-com-claude-18ge",
      "tags": "ai, api, nextjs, braziliandevs",
      "reactions": 56,
      "comments": 4,
      "reading_time": 12,
      "author": "leugarcez"
    },
    {
      "title": "I have a theory about AI (just like everyone else)",
      "description": "As someone who has used an absolute shit ton of AI, I'm not going to tell you that it's not...",
      "url": "https://dev.to/grant_biggert/i-have-a-theory-about-ai-just-like-everyone-else-3k07",
      "tags": "ai, discuss",
      "reactions": 2,
      "comments": 1,
      "reading_time": 3,
      "author": "grant_biggert"
    },
    {
      "title": "I Built an MCP Server to Automate Dropshipping Product Imports",
      "description": "How I turned a repetitive dropshipping workflow into a Model Context Protocol server — the architecture decisions, tool design, and what I learned publishing to 8 platforms.",
      "url": "https://dev.to/_95a3e57463e6442feacd0/i-built-an-mcp-server-to-automate-dropshipping-product-imports-3m5b",
      "tags": "mcp, ai, opensource, dropshipping",
      "reactions": 3,
      "comments": 0,
      "reading_time": 7,
      "author": "_95a3e57463e6442feacd0"
    },
    {
      "title": "I Built 7 MCP Servers for Security Tools. The Protocol Was the Easy Part.",
      "description": "I wanted my AI agent to talk directly to my security stack. Not through copy-pasted log snippets. Not...",
      "url": "https://dev.to/solomonneas/i-built-7-mcp-servers-for-security-tools-the-protocol-was-the-easy-part-4137",
      "tags": "ai, mcp, opensource, security",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "solomonneas"
    },
    {
      "title": "The Message That Got Blue Ticks But Never Arrived",
      "description": "When WhatsApp shows delivered+read but your AI agent never sees the message. A production-tested...",
      "url": "https://dev.to/oolongtea2026/the-message-that-got-blue-ticks-but-never-arrived-3eo5",
      "tags": "ai, whatsapp, openclaw, reliability",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "oolongtea2026"
    },
    {
      "title": "Designing an AI That Remembers: How We Built a Coding Mentor with a \"Human\" Memory",
      "description": "The Sunday Afternoon Epiphany  We’ve all been there. You’re sitting in your room, staring at a...",
      "url": "https://dev.to/ashiya_farhin_d450eb33855/designing-an-ai-that-remembers-how-we-built-a-coding-mentor-with-a-human-memory-dlk",
      "tags": "ai, learning, programming, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "ashiya_farhin_d450eb33855"
    },
    {
      "title": "I built an open-source \\\"limbic system\\\" for AI agents — emotion, bias, and memory as MCP servers",
      "description": "Every time you start a new conversation with an AI, it resets to zero.  No emotional continuity. No...",
      "url": "https://dev.to/kagioneko/i-built-an-open-source-limbic-system-for-ai-agents-emotion-bias-and-memory-as-mcp-servers-227b",
      "tags": "mcp, ai, python, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "kagioneko"
    },
    {
      "title": "I Talk to AI While I Code. Here's What Works, What Fails, and Where I Stop.",
      "description": "I'll be honest. A year ago, if you told me I'd be having full conversations with an AI while building...",
      "url": "https://dev.to/sudodevesh/i-talk-to-ai-while-i-code-heres-what-works-what-fails-and-where-i-stop-22jk",
      "tags": "ai, programming, coding, webdev",
      "reactions": 8,
      "comments": 4,
      "reading_time": 3,
      "author": "sudodevesh"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "jackhogan11",
      "descendants": 8,
      "id": 47488686,
      "kids": [
        47498886,
        47499115,
        47499044,
        47499121,
        47499182
      ],
      "score": 49,
      "time": 1774269720,
      "title": "Box of Secrets: Discreetly modding an apartment intercom to work with Apple Home",
      "type": "story",
      "url": "https://www.jackhogan.me/blog/box-of-secrets/"
    },
    {
      "by": "in-silico",
      "descendants": 166,
      "id": 47497757,
      "kids": [
        47498568,
        47498401,
        47498412,
        47498791,
        47498700,
        47498113,
        47498388,
        47498422,
        47499054,
        47498289,
        47499221,
        47498822,
        47498392,
        47498273,
        47498477,
        47498501,
        47498526,
        47499055,
        47498563,
        47498290,
        47498684,
        47498660
      ],
      "score": 248,
      "time": 1774317189,
      "title": "Epoch confirms GPT5.4 Pro solved a frontier math open problem",
      "type": "story",
      "url": "https://epoch.ai/frontiermath/open-problems/ramsey-hypergraphs"
    },
    {
      "by": "wiradikusuma",
      "descendants": 4,
      "id": 47498924,
      "kids": [
        47499235,
        47499215,
        47499185
      ],
      "score": 22,
      "time": 1774330373,
      "title": "Log File Viewer for the Terminal",
      "type": "story",
      "url": "https://lnav.org/"
    },
    {
      "by": "hasheddan",
      "descendants": 4,
      "id": 47469744,
      "kids": [
        47474819,
        47470913,
        47485747,
        47499125
      ],
      "score": 18,
      "time": 1774117261,
      "title": "BIO – The Bao I/O Co-Processor",
      "type": "story",
      "url": "https://www.crowdsupply.com/baochip/dabao/updates/bio-the-bao-i-o-co-processor"
    },
    {
      "by": "ykumards",
      "descendants": 72,
      "id": 47493460,
      "kids": [
        47493879,
        47493871,
        47498739,
        47493957,
        47494297,
        47493988,
        47494104,
        47493841,
        47498656,
        47494551,
        47494404,
        47494761,
        47495737,
        47493927,
        47494896,
        47495366,
        47493882,
        47495238,
        47496097,
        47494597,
        47495352,
        47498371,
        47494964,
        47495743,
        47496750,
        47494511,
        47494566,
        47496021,
        47493869
      ],
      "score": 332,
      "time": 1774291258,
      "title": "Autoresearch on an old research idea",
      "type": "story",
      "url": "https://ykumar.me/blog/eclip-autoresearch/"
    },
    {
      "by": "moonka",
      "descendants": 188,
      "id": 47495344,
      "kids": [
        47499282,
        47496185,
        47496404,
        47496226,
        47496214,
        47496102,
        47496278,
        47497964,
        47496372,
        47498468,
        47497606,
        47497317,
        47497004,
        47498676,
        47497073,
        47497289,
        47498462,
        47496470,
        47496115,
        47496990,
        47497012,
        47498255,
        47496176,
        47497210,
        47497897,
        47497126,
        47497204,
        47498475,
        47496853,
        47496420,
        47496342,
        47497660,
        47496101,
        47496517
      ],
      "score": 280,
      "text": "<a href=\"https:&#x2F;&#x2F;docs.fcc.gov&#x2F;public&#x2F;attachments&#x2F;DOC-420034A1.pdf\" rel=\"nofollow\">https:&#x2F;&#x2F;docs.fcc.gov&#x2F;public&#x2F;attachments&#x2F;DOC-420034A1.pdf</a><p><a href=\"https:&#x2F;&#x2F;www.fcc.gov&#x2F;document&#x2F;fcc-adds-routers-produced-foreign-countries-covered-list\" rel=\"nofollow\">https:&#x2F;&#x2F;www.fcc.gov&#x2F;document&#x2F;fcc-adds-routers-produced-forei...</a><p><a href=\"https:&#x2F;&#x2F;docs.fcc.gov&#x2F;public&#x2F;attachments&#x2F;DA-26-278A1.pdf\" rel=\"nofollow\">https:&#x2F;&#x2F;docs.fcc.gov&#x2F;public&#x2F;attachments&#x2F;DA-26-278A1.pdf</a><p><a href=\"https:&#x2F;&#x2F;www.bbc.com&#x2F;news&#x2F;articles&#x2F;c74787w149zo\" rel=\"nofollow\">https:&#x2F;&#x2F;www.bbc.com&#x2F;news&#x2F;articles&#x2F;c74787w149zo</a><p><a href=\"https:&#x2F;&#x2F;www.cnet.com&#x2F;home&#x2F;internet&#x2F;fcc-bans-foreign-made-routers-as-national-security-risk&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.cnet.com&#x2F;home&#x2F;internet&#x2F;fcc-bans-foreign-made-rou...</a>",
      "time": 1774301282,
      "title": "FCC updates covered list to include foreign-made consumer routers",
      "type": "story",
      "url": "https://www.fcc.gov/document/fcc-updates-covered-list-include-foreign-made-consumer-routers"
    },
    {
      "by": "anemll",
      "descendants": 257,
      "id": 47490070,
      "kids": [
        47490489,
        47493785,
        47496808,
        47492962,
        47493863,
        47490576,
        47498585,
        47493599,
        47498658,
        47498155,
        47491138,
        47494952,
        47490865,
        47494840,
        47492827,
        47492518,
        47491963,
        47491718,
        47494658,
        47498042,
        47495552,
        47494432,
        47494973,
        47494329,
        47490422,
        47493222,
        47497281,
        47492561,
        47493205,
        47495925,
        47497523,
        47494385,
        47492961,
        47490982,
        47495809,
        47492957,
        47492564,
        47493034,
        47498853,
        47490781,
        47497007,
        47493128,
        47495998,
        47490071,
        47490732,
        47495017,
        47490431,
        47493190,
        47495769
      ],
      "score": 559,
      "text": "<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;anemll&#x2F;status&#x2F;2035901335984611412\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;anemll&#x2F;status&#x2F;2035901335984611412</a>",
      "time": 1774276210,
      "title": "iPhone 17 Pro Demonstrated Running a 400B LLM",
      "type": "story",
      "url": "https://twitter.com/anemll/status/2035901335984611412"
    },
    {
      "by": "digital55",
      "descendants": 2,
      "id": 47444387,
      "kids": [
        47448176,
        47498918,
        47446347
      ],
      "score": 19,
      "time": 1773947556,
      "title": "Gerd Faltings, who proved the Mordell conjecture, wins the Abel Prize",
      "type": "story",
      "url": "https://www.scientificamerican.com/article/gerd-faltings-mathematician-who-proved-the-mordell-conjecture-wins-the-abel/"
    },
    {
      "by": "pseudolus",
      "descendants": 12,
      "id": 47453398,
      "kids": [
        47497739
      ],
      "score": 61,
      "time": 1774008120,
      "title": "Pompeii's battle scars linked to an ancient 'machine gun'",
      "type": "story",
      "url": "https://phys.org/news/2026-03-pompeii-scars-linked-ancient-machine.html"
    },
    {
      "by": "peteski22",
      "descendants": 32,
      "id": 47491466,
      "kids": [
        47496687,
        47497534,
        47499260,
        47496796,
        47496833,
        47496640,
        47497753,
        47496934,
        47496831,
        47497061,
        47497743,
        47498671,
        47496477,
        47497813,
        47496738,
        47496615,
        47496347
      ],
      "score": 113,
      "text": "Hi all, I&#x27;m Peter at Staff Engineer and Mozilla.ai and I want to share our idea for a standard for shared agent learning, conceptually it seemed to fit easily in my mental model as a Stack Overflow for agents.<p>The project is trying to see if we can get agents (any agent, any model) to propose &#x27;knowledge units&#x27; (KUs) as a standard schema based on gotchas it runs into during use, and proactively query for existing KUs in order to get insights which it can verify and confirm if they prove useful.<p>It&#x27;s currently very much a PoC with a more lofty proposal in the repo, we&#x27;re trying to iterate from local use, up to team level, and ideally eventually have some kind of public commons.<p>At the team level (see our Docker compose example) and your coding agent configured to point to the API address for the team to send KUs there instead - where they can be reviewed by a human in the loop (HITL) via a UI in the browser, before they&#x27;re allowed to appear in queries by other agents in your team.<p>We&#x27;re learning a lot even from using it locally on various repos internally, not just in the kind of KUs it generates, but also from a UX perspective on trying to make it easy to get using it and approving KUs in the browser dashboard. There are bigger, complex problems to solve in the future around data privacy, governance etc. but for now we&#x27;re super focussed on getting something that people can see some value from really quickly in their day-to-day.<p>Tech stack:<p>* Skills - markdown<p>* Local Python MCP server (FastMCP) - managing a local SQLite knowledge store<p>* Optional team API (FastAPI, Docker) for sharing knowledge across an org<p>* Installs as a Claude Code plugin or OpenCode MCP server<p>* Local-first by default; your knowledge stays on your machine unless you opt into team sync by setting the address in config<p>* OSS (Apache 2.0 licensed)<p>Here&#x27;s an example of something which seemed straight forward, when asking Claude Code to write a GitHub action it often used actions that were multiple major versions out of date because of its training data. In this case I told the agent what I saw when I reviewed the GitHub action YAML file it created and it proposed the knowledge unit to be persisted. Next time in a completely different repo using OpenCode and an OpenAI model, the cq skill was used up front before it started the task and it got the information about the gotcha on major versions in training data and checked GitHub proactively, using the correct, latest major versions. It then confirmed the KU, increasing the confidence score.<p>I guess some folks might say: well there&#x27;s a CLAUDE.md in your repo, or in ~&#x2F;.claude&#x2F; but we&#x27;re looking further than that, we want this to be available to all agents, to all models, and maybe more importantly we don&#x27;t want to stuff AGENTS.md or CLAUDE.md with loads of rules that lead to unpredictable behaviour, this is targetted information on a particular task and seems a lot more useful.<p>Right now it can be installed locally as a plugin for Claude Code and OpenCode:<p>claude plugin marketplace add mozilla-ai&#x2F;cq\nclaude plugin install cq<p>This allows you to capture data in your local ~&#x2F;.cq&#x2F;local.db (the data doesn&#x27;t get sent anywhere else).<p>We&#x27;d love feedback on this, the repo is open and public - so GitHub issues are welcome. We&#x27;ve posted on some of our social media platforms with a link to the blog post (below) so feel free to reply to us if you found it useful, or ran into friction, we want to make this something that&#x27;s accessible to everyone.<p>Blog post with the full story: <a href=\"https:&#x2F;&#x2F;blog.mozilla.ai&#x2F;cq-stack-overflow-for-agents&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;blog.mozilla.ai&#x2F;cq-stack-overflow-for-agents&#x2F;</a>\nGitHub repo: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;mozilla-ai&#x2F;cq\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;mozilla-ai&#x2F;cq</a><p>Thanks again for your time.",
      "time": 1774282263,
      "title": "Show HN: Cq – Stack Overflow for AI coding agents",
      "type": "story",
      "url": "https://blog.mozilla.ai/cq-stack-overflow-for-agents/"
    }
  ]
}
```

## 3. Product Launches to Review/React

**Query:** What products launched that I can review or react to?

**Command:**
```bash
echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set' ; node bin/main.js --json reddit -t startups -s new
```

**Output:**
```text
[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
```

## 4. Current Tech Debate Talking Points

**Query:** What talking points are tech people debating right now?

**Command:**
```bash
node bin/main.js --json news -t 12 ; node bin/main.js --json lobsters -s hottest -c 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "jackhogan11",
      "descendants": 8,
      "id": 47488686,
      "kids": [
        47498886,
        47499115,
        47499044,
        47499121,
        47499182
      ],
      "score": 49,
      "time": 1774269720,
      "title": "Box of Secrets: Discreetly modding an apartment intercom to work with Apple Home",
      "type": "story",
      "url": "https://www.jackhogan.me/blog/box-of-secrets/"
    },
    {
      "by": "in-silico",
      "descendants": 167,
      "id": 47497757,
      "kids": [
        47498568,
        47498401,
        47498412,
        47498791,
        47498700,
        47498113,
        47498388,
        47498422,
        47499054,
        47498289,
        47499221,
        47498822,
        47498392,
        47498273,
        47498477,
        47498501,
        47498526,
        47499055,
        47498563,
        47498290,
        47498684,
        47498660
      ],
      "score": 248,
      "time": 1774317189,
      "title": "Epoch confirms GPT5.4 Pro solved a frontier math open problem",
      "type": "story",
      "url": "https://epoch.ai/frontiermath/open-problems/ramsey-hypergraphs"
    },
    {
      "by": "wiradikusuma",
      "descendants": 4,
      "id": 47498924,
      "kids": [
        47499235,
        47499215,
        47499185
      ],
      "score": 22,
      "time": 1774330373,
      "title": "Log File Viewer for the Terminal",
      "type": "story",
      "url": "https://lnav.org/"
    },
    {
      "by": "hasheddan",
      "descendants": 4,
      "id": 47469744,
      "kids": [
        47474819,
        47470913,
        47485747,
        47499125
      ],
      "score": 18,
      "time": 1774117261,
      "title": "BIO – The Bao I/O Co-Processor",
      "type": "story",
      "url": "https://www.crowdsupply.com/baochip/dabao/updates/bio-the-bao-i-o-co-processor"
    },
    {
      "by": "ykumards",
      "descendants": 72,
      "id": 47493460,
      "kids": [
        47493879,
        47493871,
        47498739,
        47493957,
        47494297,
        47493988,
        47494104,
        47493841,
        47498656,
        47494551,
        47494404,
        47494761,
        47495737,
        47493927,
        47494896,
        47495366,
        47493882,
        47495238,
        47496097,
        47494597,
        47495352,
        47498371,
        47494964,
        47495743,
        47496750,
        47494511,
        47494566,
        47496021,
        47493869
      ],
      "score": 333,
      "time": 1774291258,
      "title": "Autoresearch on an old research idea",
      "type": "story",
      "url": "https://ykumar.me/blog/eclip-autoresearch/"
    },
    {
      "by": "moonka",
      "descendants": 188,
      "id": 47495344,
      "kids": [
        47499282,
        47496185,
        47496404,
        47496226,
        47496214,
        47496102,
        47496278,
        47497964,
        47496372,
        47498468,
        47497606,
        47497317,
        47497004,
        47498676,
        47497073,
        47497289,
        47498462,
        47496470,
        47496115,
        47496990,
        47497012,
        47498255,
        47496176,
        47497210,
        47497897,
        47497126,
        47497204,
        47498475,
        47496853,
        47496420,
        47496342,
        47497660,
        47496101,
        47496517
      ],
      "score": 280,
      "text": "<a href=\"https:&#x2F;&#x2F;docs.fcc.gov&#x2F;public&#x2F;attachments&#x2F;DOC-420034A1.pdf\" rel=\"nofollow\">https:&#x2F;&#x2F;docs.fcc.gov&#x2F;public&#x2F;attachments&#x2F;DOC-420034A1.pdf</a><p><a href=\"https:&#x2F;&#x2F;www.fcc.gov&#x2F;document&#x2F;fcc-adds-routers-produced-foreign-countries-covered-list\" rel=\"nofollow\">https:&#x2F;&#x2F;www.fcc.gov&#x2F;document&#x2F;fcc-adds-routers-produced-forei...</a><p><a href=\"https:&#x2F;&#x2F;docs.fcc.gov&#x2F;public&#x2F;attachments&#x2F;DA-26-278A1.pdf\" rel=\"nofollow\">https:&#x2F;&#x2F;docs.fcc.gov&#x2F;public&#x2F;attachments&#x2F;DA-26-278A1.pdf</a><p><a href=\"https:&#x2F;&#x2F;www.bbc.com&#x2F;news&#x2F;articles&#x2F;c74787w149zo\" rel=\"nofollow\">https:&#x2F;&#x2F;www.bbc.com&#x2F;news&#x2F;articles&#x2F;c74787w149zo</a><p><a href=\"https:&#x2F;&#x2F;www.cnet.com&#x2F;home&#x2F;internet&#x2F;fcc-bans-foreign-made-routers-as-national-security-risk&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.cnet.com&#x2F;home&#x2F;internet&#x2F;fcc-bans-foreign-made-rou...</a>",
      "time": 1774301282,
      "title": "FCC updates covered list to include foreign-made consumer routers",
      "type": "story",
      "url": "https://www.fcc.gov/document/fcc-updates-covered-list-include-foreign-made-consumer-routers"
    },
    {
      "by": "anemll",
      "descendants": 257,
      "id": 47490070,
      "kids": [
        47490489,
        47493785,
        47496808,
        47492962,
        47493863,
        47490576,
        47498585,
        47493599,
        47498658,
        47498155,
        47491138,
        47494952,
        47490865,
        47494840,
        47492827,
        47492518,
        47491963,
        47491718,
        47494658,
        47498042,
        47495552,
        47494432,
        47494973,
        47494329,
        47490422,
        47493222,
        47497281,
        47492561,
        47493205,
        47495925,
        47497523,
        47494385,
        47492961,
        47490982,
        47495809,
        47492957,
        47492564,
        47493034,
        47498853,
        47490781,
        47497007,
        47493128,
        47495998,
        47490071,
        47490732,
        47495017,
        47490431,
        47493190,
        47495769
      ],
      "score": 559,
      "text": "<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;anemll&#x2F;status&#x2F;2035901335984611412\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;anemll&#x2F;status&#x2F;2035901335984611412</a>",
      "time": 1774276210,
      "title": "iPhone 17 Pro Demonstrated Running a 400B LLM",
      "type": "story",
      "url": "https://twitter.com/anemll/status/2035901335984611412"
    },
    {
      "by": "digital55",
      "descendants": 2,
      "id": 47444387,
      "kids": [
        47448176,
        47498918,
        47446347
      ],
      "score": 19,
      "time": 1773947556,
      "title": "Gerd Faltings, who proved the Mordell conjecture, wins the Abel Prize",
      "type": "story",
      "url": "https://www.scientificamerican.com/article/gerd-faltings-mathematician-who-proved-the-mordell-conjecture-wins-the-abel/"
    },
    {
      "by": "pseudolus",
      "descendants": 12,
      "id": 47453398,
      "kids": [
        47497739
      ],
      "score": 61,
      "time": 1774008120,
      "title": "Pompeii's battle scars linked to an ancient 'machine gun'",
      "type": "story",
      "url": "https://phys.org/news/2026-03-pompeii-scars-linked-ancient-machine.html"
    },
    {
      "by": "peteski22",
      "descendants": 32,
      "id": 47491466,
      "kids": [
        47496687,
        47497534,
        47499260,
        47496796,
        47496833,
        47496640,
        47497753,
        47496934,
        47496831,
        47497061,
        47497743,
        47498671,
        47496477,
        47497813,
        47496738,
        47496615,
        47496347
      ],
      "score": 113,
      "text": "Hi all, I&#x27;m Peter at Staff Engineer and Mozilla.ai and I want to share our idea for a standard for shared agent learning, conceptually it seemed to fit easily in my mental model as a Stack Overflow for agents.<p>The project is trying to see if we can get agents (any agent, any model) to propose &#x27;knowledge units&#x27; (KUs) as a standard schema based on gotchas it runs into during use, and proactively query for existing KUs in order to get insights which it can verify and confirm if they prove useful.<p>It&#x27;s currently very much a PoC with a more lofty proposal in the repo, we&#x27;re trying to iterate from local use, up to team level, and ideally eventually have some kind of public commons.<p>At the team level (see our Docker compose example) and your coding agent configured to point to the API address for the team to send KUs there instead - where they can be reviewed by a human in the loop (HITL) via a UI in the browser, before they&#x27;re allowed to appear in queries by other agents in your team.<p>We&#x27;re learning a lot even from using it locally on various repos internally, not just in the kind of KUs it generates, but also from a UX perspective on trying to make it easy to get using it and approving KUs in the browser dashboard. There are bigger, complex problems to solve in the future around data privacy, governance etc. but for now we&#x27;re super focussed on getting something that people can see some value from really quickly in their day-to-day.<p>Tech stack:<p>* Skills - markdown<p>* Local Python MCP server (FastMCP) - managing a local SQLite knowledge store<p>* Optional team API (FastAPI, Docker) for sharing knowledge across an org<p>* Installs as a Claude Code plugin or OpenCode MCP server<p>* Local-first by default; your knowledge stays on your machine unless you opt into team sync by setting the address in config<p>* OSS (Apache 2.0 licensed)<p>Here&#x27;s an example of something which seemed straight forward, when asking Claude Code to write a GitHub action it often used actions that were multiple major versions out of date because of its training data. In this case I told the agent what I saw when I reviewed the GitHub action YAML file it created and it proposed the knowledge unit to be persisted. Next time in a completely different repo using OpenCode and an OpenAI model, the cq skill was used up front before it started the task and it got the information about the gotcha on major versions in training data and checked GitHub proactively, using the correct, latest major versions. It then confirmed the KU, increasing the confidence score.<p>I guess some folks might say: well there&#x27;s a CLAUDE.md in your repo, or in ~&#x2F;.claude&#x2F; but we&#x27;re looking further than that, we want this to be available to all agents, to all models, and maybe more importantly we don&#x27;t want to stuff AGENTS.md or CLAUDE.md with loads of rules that lead to unpredictable behaviour, this is targetted information on a particular task and seems a lot more useful.<p>Right now it can be installed locally as a plugin for Claude Code and OpenCode:<p>claude plugin marketplace add mozilla-ai&#x2F;cq\nclaude plugin install cq<p>This allows you to capture data in your local ~&#x2F;.cq&#x2F;local.db (the data doesn&#x27;t get sent anywhere else).<p>We&#x27;d love feedback on this, the repo is open and public - so GitHub issues are welcome. We&#x27;ve posted on some of our social media platforms with a link to the blog post (below) so feel free to reply to us if you found it useful, or ran into friction, we want to make this something that&#x27;s accessible to everyone.<p>Blog post with the full story: <a href=\"https:&#x2F;&#x2F;blog.mozilla.ai&#x2F;cq-stack-overflow-for-agents&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;blog.mozilla.ai&#x2F;cq-stack-overflow-for-agents&#x2F;</a>\nGitHub repo: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;mozilla-ai&#x2F;cq\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;mozilla-ai&#x2F;cq</a><p>Thanks again for your time.",
      "time": 1774282263,
      "title": "Show HN: Cq – Stack Overflow for AI coding agents",
      "type": "story",
      "url": "https://blog.mozilla.ai/cq-stack-overflow-for-agents/"
    },
    {
      "by": "speckx",
      "descendants": 4,
      "id": 47429393,
      "kids": [
        47499002,
        47497559
      ],
      "score": 84,
      "time": 1773858190,
      "title": "Abusing Customizable Selects",
      "type": "story",
      "url": "https://css-tricks.com/abusing-customizable-selects/"
    },
    {
      "by": "phasE89",
      "descendants": 97,
      "id": 47495527,
      "kids": [
        47496907,
        47496636,
        47496706,
        47495528,
        47498100,
        47498233,
        47496494,
        47496791,
        47496510,
        47497163,
        47497229,
        47497306,
        47498731,
        47498703,
        47498018,
        47498278,
        47497836,
        47495897,
        47498010,
        47497238,
        47497214,
        47496846,
        47496071,
        47495947,
        47498574,
        47498434,
        47496995
      ],
      "score": 300,
      "time": 1774302260,
      "title": "Claude Code Cheat Sheet",
      "type": "story",
      "url": "https://cc.storyfox.cz"
    }
  ]
}
- Fetching feeds...
{
  "source": "lobsters",
  "sort": "hottest",
  "tag": null,
  "items": [
    {
      "title": "The Death of Character in Game Console Interfaces",
      "url": "https://vale.rocks/posts/game-console-interfaces",
      "score": 46,
      "comments": 12,
      "tags": [
        "design",
        "games"
      ],
      "id": "he8mhk"
    },
    {
      "title": "Native Instant Space Switching on MacOS",
      "url": "https://arhan.sh/blog/native-instant-space-switching-on-macos/",
      "score": 45,
      "comments": 26,
      "tags": [
        "mac"
      ],
      "id": "sz4bzf"
    },
    {
      "title": "An Incoherent Rust",
      "url": "https://www.boxyuwu.blog/posts/an-incoherent-rust/",
      "score": 61,
      "comments": 5,
      "tags": [
        "rust"
      ],
      "id": "i0cskl"
    },
    {
      "title": "Markdown Ate the World",
      "url": "https://matduggan.com/markdown-ate-the-world/",
      "score": 38,
      "comments": 6,
      "tags": [
        "historical"
      ],
      "id": "cxpn2j"
    },
    {
      "title": "Semi-retirement, or, really, changing my relationship with the BSDs",
      "url": "https://briancallahan.net/blog/20260322.html",
      "score": 31,
      "comments": 4,
      "tags": [
        "openbsd",
        "security"
      ],
      "id": "tuyk3l"
    },
    {
      "title": "Generators in lone lisp",
      "url": "https://www.matheusmoreira.com/articles/generators-in-lone-lisp",
      "score": 18,
      "comments": 0,
      "tags": [
        "lisp"
      ],
      "id": "7dzkuh"
    },
    {
      "title": "The Mouse Programming Language on CP/M",
      "url": "https://techtinkering.com/articles/the-mouse-programming-language-on-cpm/",
      "score": 10,
      "comments": 0,
      "tags": [
        "concatenative"
      ],
      "id": "g53l7b"
    },
    {
      "title": "Gram 1.1.0 released",
      "url": "https://gram.liten.app/posts/release-1-1-0/",
      "score": 35,
      "comments": 3,
      "tags": [
        "editors",
        "release"
      ],
      "id": "cwdzd6"
    },
    {
      "title": "RocksDB development finds a CPU bug",
      "url": "http://rocksdb.org/blog/2026/02/17/cpu-bug.html",
      "score": 11,
      "comments": 1,
      "tags": [
        "databases",
        "hardware",
        "testing"
      ],
      "id": "up2chu"
    },
    {
      "title": "Rewriting a 20-year-old Python library",
      "url": "https://www.b-list.org/weblog/2026/mar/23/20-year-library/",
      "score": 10,
      "comments": 0,
      "tags": [
        "python"
      ],
      "id": "jbyzxt"
    }
  ]
}
```

