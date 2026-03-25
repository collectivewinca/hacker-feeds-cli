# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-25 06:39:04 UTC

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
      "title": "Check Up with Each Other",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience     Over the last year, It...",
      "url": "https://dev.to/francistrdev/check-up-with-each-other-2ogc",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 35,
      "comments": 13,
      "reading_time": 4,
      "author": "francistrdev"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-4ig2",
      "tags": "top7, discuss",
      "reactions": 21,
      "comments": 3,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-1bec",
      "tags": "discuss, watercooler, jokes",
      "reactions": 35,
      "comments": 28,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Implementing a RAG system: Crawl",
      "description": "I'm starting a \"Crawl, walk, run\" series of posts on various topics and decided to start with...",
      "url": "https://dev.to/gde/implementing-a-rag-system-crawl-5li",
      "tags": "rag, genai, opensource, adk",
      "reactions": 6,
      "comments": 3,
      "reading_time": 5,
      "author": "glen_yu"
    },
    {
      "title": "Deploy a Multi Agent ADK Application to Google Cloud Run",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build a multi...",
      "url": "https://dev.to/gde/deploy-a-multi-agent-adk-application-to-google-cloud-run-59on",
      "tags": "gemini, adkui, googlecloudrun, python",
      "reactions": 5,
      "comments": 0,
      "reading_time": 5,
      "author": "xbill"
    },
    {
      "title": "Building a Multimodal Cross Cloud Live Agent with ADK, Amazon Lightsail, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build cross cloud...",
      "url": "https://dev.to/gde/building-a-multimodal-cross-cloud-live-agent-with-adk-amazon-lightsail-and-gemini-cli-4p56",
      "tags": "googleadk, awslightsail, gemini, python",
      "reactions": 5,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
    },
    {
      "title": "AI Writes Code. You Own Quality.",
      "description": "The more I use AI tools like Claude Code, the clearer it becomes: engineering skills are what make AI...",
      "url": "https://dev.to/helderberto/ai-writes-code-you-own-quality-19g0",
      "tags": "ai, software, development, programming",
      "reactions": 15,
      "comments": 11,
      "reading_time": 6,
      "author": "helderberto"
    },
    {
      "title": "Building a Weather Station Using an Old Raspberry Pi",
      "description": "For a long time I wanted to build a weather station at home because I like meteorology and for the...",
      "url": "https://dev.to/nandofm/building-a-weather-station-using-an-old-raspberry-pi-5333",
      "tags": "raspberrypi, sideprojects, learning, community",
      "reactions": 38,
      "comments": 10,
      "reading_time": 3,
      "author": "nandofm"
    },
    {
      "title": "I built a terminal-native Little Snitch alternative for macOS",
      "description": "CLI Snitch monitors every outbound connection from your Mac and lets you allow or deny them with real pfctl firewall rules — all from the terminal.",
      "url": "https://dev.to/nickciolpan/i-built-a-terminal-native-little-snitch-alternative-for-macos-4807",
      "tags": "go, macos, security, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "nickciolpan"
    },
    {
      "title": "I Built a Type-Safe SI Unit Library in Swift — And the Compiler Catches Your Physics Mistakes",
      "description": "SystemeInternational uses phantom types, affine spaces, and zero-cost abstractions to make unit misuse a compile-time error. 306 tests, 8 bytes per quantity, and unit conversions at 3 ns/op in Release.",
      "url": "https://dev.to/moriturus/i-built-a-type-safe-si-unit-library-in-swift-and-the-compiler-catches-your-physics-mistakes-32he",
      "tags": "swift, programming, opensource, types",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "moriturus"
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
      "forks": 529,
      "added_stars": 7304,
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
      "forks": 13722,
      "added_stars": 21932,
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
      "forks": 1043,
      "added_stars": 3047,
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
      "forks": 548,
      "added_stars": 3344,
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
          "username": "shog86",
          "href": "https://github.com/shog86",
          "avatar": "https://avatars.githubusercontent.com/u/19712631"
        },
        {
          "username": "rohan-tessl",
          "href": "https://github.com/rohan-tessl",
          "avatar": "https://avatars.githubusercontent.com/u/246233927"
        },
        {
          "username": "glacierphonk",
          "href": "https://github.com/glacierphonk",
          "avatar": "https://avatars.githubusercontent.com/u/260244336"
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
      "forks": 3329,
      "added_stars": 9109,
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
      "author": "sgoudelis",
      "repo": "ground-station",
      "avatar": "https://github.com/sgoudelis.png",
      "repo_link": "https://github.com/sgoudelis/ground-station",
      "desc": "Ground Station is all-in-one satellite monitoring suite",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 564,
      "added_stars": 2623,
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
      "forks": 235,
      "added_stars": 54,
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
      "author": "coreyhaines31",
      "repo": "marketingskills",
      "avatar": "https://github.com/coreyhaines31.png",
      "repo_link": "https://github.com/coreyhaines31/marketingskills",
      "desc": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2440,
      "added_stars": 1918,
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
      "author": "hakimel",
      "repo": "reveal.js",
      "avatar": "https://github.com/hakimel.png",
      "repo_link": "https://github.com/hakimel/reveal.js",
      "desc": "The HTML Presentation Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 16807,
      "added_stars": 106,
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
      "author": "FreeTubeApp",
      "repo": "FreeTube",
      "avatar": "https://github.com/FreeTubeApp.png",
      "repo_link": "https://github.com/FreeTubeApp/FreeTube",
      "desc": "An Open Source YouTube app for privacy",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1370,
      "added_stars": 98,
      "builtBy": [
        {
          "username": "absidue",
          "href": "https://github.com/absidue",
          "avatar": "https://avatars.githubusercontent.com/u/48293849"
        },
        {
          "username": "PrestonN",
          "href": "https://github.com/PrestonN",
          "avatar": "https://avatars.githubusercontent.com/u/9736046"
        },
        {
          "username": "efb4f5ff-1298-471a-8973-3d47447115dc",
          "href": "https://github.com/efb4f5ff-1298-471a-8973-3d47447115dc",
          "avatar": "https://avatars.githubusercontent.com/u/73130443"
        },
        {
          "username": "PikachuEXE",
          "href": "https://github.com/PikachuEXE",
          "avatar": "https://avatars.githubusercontent.com/u/1018543"
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
      "author": "microsoft",
      "repo": "skills-for-copilot-studio",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/skills-for-copilot-studio",
      "desc": "A skill for AI-coding tools to build and edit Microsoft Copilot Studio agents as YAML — with schema validation, templates, and AI-powered skills. Suited for Claude Code, GitHub Copilot CLI, and more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 24,
      "added_stars": 24,
      "builtBy": [
        {
          "username": "GiorgioUghini",
          "href": "https://github.com/GiorgioUghini",
          "avatar": "https://avatars.githubusercontent.com/u/23707134"
        },
        {
          "username": "ericsche",
          "href": "https://github.com/ericsche",
          "avatar": "https://avatars.githubusercontent.com/u/35633680"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "adilei",
          "href": "https://github.com/adilei",
          "avatar": "https://avatars.githubusercontent.com/u/28257760"
        },
        {
          "username": "purnananda",
          "href": "https://github.com/purnananda",
          "avatar": "https://avatars.githubusercontent.com/u/12234450"
        }
      ]
    },
    {
      "author": "eyaltoledano",
      "repo": "claude-task-master",
      "avatar": "https://github.com/eyaltoledano.png",
      "repo_link": "https://github.com/eyaltoledano/claude-task-master",
      "desc": "An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf, Roo, and others.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2453,
      "added_stars": 203,
      "builtBy": [
        {
          "username": "Crunchyman-ralph",
          "href": "https://github.com/Crunchyman-ralph",
          "avatar": "https://avatars.githubusercontent.com/u/35776126"
        },
        {
          "username": "eyaltoledano",
          "href": "https://github.com/eyaltoledano",
          "avatar": "https://avatars.githubusercontent.com/u/3160046"
        },
        {
          "username": "joedanz",
          "href": "https://github.com/joedanz",
          "avatar": "https://avatars.githubusercontent.com/u/1423777"
        },
        {
          "username": "ben-vargas",
          "href": "https://github.com/ben-vargas",
          "avatar": "https://avatars.githubusercontent.com/u/20713656"
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
      "forks": 431,
      "added_stars": 117,
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
      "title": "The Ultimate Job Finding-Management Tool",
      "description": "I need to go to bed but I want to share my excitement before I crash. I built a tool finally to help...",
      "url": "https://dev.to/annavi11arrea1/the-ultimate-job-finding-managment-tool-522i",
      "tags": "webdev, webscraping, ai, programming",
      "reactions": 26,
      "comments": 13,
      "reading_time": 1,
      "author": "annavi11arrea1"
    },
    {
      "title": "Engenharia de Prompt: Por Que a Forma Como Você Pergunta Muda Tudo(Um guia introdutório)",
      "description": "Neste artigo irei explicar alguns pontos importantes sobre Engenharia de prompt, e como saber esses...",
      "url": "https://dev.to/fransborges/engenharia-de-prompt-por-que-a-forma-como-voce-pergunta-muda-tudoum-guia-introdutorio-3hb0",
      "tags": "ai, productivity, beginners, braziliandevs",
      "reactions": 115,
      "comments": 4,
      "reading_time": 7,
      "author": "fransborges"
    },
    {
      "title": "AI Writes Code. You Own Quality.",
      "description": "The more I use AI tools like Claude Code, the clearer it becomes: engineering skills are what make AI...",
      "url": "https://dev.to/helderberto/ai-writes-code-you-own-quality-19g0",
      "tags": "ai, software, development, programming",
      "reactions": 15,
      "comments": 11,
      "reading_time": 6,
      "author": "helderberto"
    },
    {
      "title": "NotionOps AI — I Built an AI DevOps Brain That Lives Inside Notion 🧠",
      "description": "This is a submission for the Notion MCP Challenge              What I Built   Every developer knows...",
      "url": "https://dev.to/yash_sonawane25/notionops-ai-i-built-an-ai-devops-brain-that-lives-inside-notion-3foh",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 5,
      "comments": 0,
      "reading_time": 3,
      "author": "yash_sonawane25"
    },
    {
      "title": "Bridging Fintech and Agentic AI: Building a Paystack MCP Server in Python",
      "description": "If you’ve been following the AI space lately, you’ve probably heard of the Model Context Protocol...",
      "url": "https://dev.to/thisishaykins/bridging-fintech-and-agentic-ai-building-a-paystack-mcp-server-in-python-43f0",
      "tags": "python, ai, api, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "thisishaykins"
    },
    {
      "title": "Vibe Coding Is Powerful, but Technical Skills Still Matter",
      "description": "Vibe Coding Is Powerful, but Technical Skills Still Matter   AI-assisted development is...",
      "url": "https://dev.to/aichannode/vibe-coding-is-powerful-but-technical-skills-still-matter-4pio",
      "tags": "ai, cryptocurrency, blockchain, cursor",
      "reactions": 15,
      "comments": 1,
      "reading_time": 3,
      "author": "aichannode"
    },
    {
      "title": "I Stopped Writing Code First, And My Productivity Doubled",
      "description": "For most of my career, I followed the same instinct as every developer.  Open the editor. Start...",
      "url": "https://dev.to/jaideepparashar/i-stopped-writing-code-first-and-my-productivity-doubled-3p7p",
      "tags": "ai, programming, devops, productivity",
      "reactions": 11,
      "comments": 3,
      "reading_time": 3,
      "author": "jaideepparashar"
    },
    {
      "title": "Serving MCP and REST from the same TypeScript process",
      "description": "MCP is becoming a standard way agents discover and call tools. Claude Desktop, Cursor, Windsurf, and...",
      "url": "https://dev.to/schrepa/serving-mcp-and-rest-from-the-same-typescript-process-1n41",
      "tags": "mcp, typescript, ai, api",
      "reactions": 2,
      "comments": 0,
      "reading_time": 7,
      "author": "schrepa"
    },
    {
      "title": "🚀 Building AI-Powered Insurance for India’s Gig Workers",
      "description": "India’s gig economy is growing rapidly, powered by delivery partners from platforms like Zomato,...",
      "url": "https://dev.to/saritha_tammana_195e1fbbd/building-ai-powered-insurance-for-indias-gig-workers-30a6",
      "tags": "ai, devchallenge, showdev, startup",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "saritha_tammana_195e1fbbd"
    },
    {
      "title": "I scanned 100 AI-generated apps for security vulnerabilities. Here's what I found.",
      "description": "I've been building a security scanner for the past few months, specifically designed for apps built...",
      "url": "https://dev.to/tgoldi/i-scanned-100-ai-generated-apps-for-security-vulnerabilities-heres-what-i-found-1l5o",
      "tags": "security, ai, programming, webdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "tgoldi"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "ray__",
      "descendants": 0,
      "id": 47513475,
      "score": 40,
      "time": 1774414854,
      "title": "TurboQuant: Redefining AI efficiency with extreme compression",
      "type": "story",
      "url": "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/"
    },
    {
      "by": "felixding",
      "descendants": 26,
      "id": 47512816,
      "kids": [
        47513689,
        47513273,
        47513985,
        47513948,
        47513796,
        47513590,
        47513976,
        47513775,
        47513907,
        47513595,
        47513815,
        47513701,
        47513225,
        47513416,
        47513442,
        47513871
      ],
      "score": 70,
      "time": 1774408626,
      "title": "VitruvianOS – Desktop Linux Inspired by the BeOS",
      "type": "story",
      "url": "https://v-os.dev"
    },
    {
      "by": "skogstokig",
      "descendants": 78,
      "id": 47511589,
      "kids": [
        47512563,
        47513699,
        47513655,
        47513661,
        47511632,
        47511793,
        47512421,
        47513785,
        47513786,
        47513232,
        47513669,
        47511698,
        47512441,
        47512427,
        47513510,
        47512000,
        47511739,
        47511821,
        47513679,
        47511826,
        47512324
      ],
      "score": 247,
      "time": 1774398585,
      "title": "Flighty Airports",
      "type": "story",
      "url": "https://flighty.com/airports"
    },
    {
      "by": "mikeocool",
      "descendants": 432,
      "id": 47508246,
      "kids": [
        47511146,
        47514028,
        47512202,
        47510769,
        47512459,
        47510266,
        47513998,
        47509291,
        47509442,
        47511444,
        47513556,
        47511111,
        47513901,
        47510508,
        47513501,
        47511591,
        47509079,
        47508610,
        47508695,
        47511731,
        47508735,
        47513227,
        47511548,
        47512963,
        47513462,
        47509180,
        47513627,
        47512494,
        47509611,
        47509260,
        47512615,
        47513739,
        47513737,
        47510557,
        47511515,
        47509436,
        47511860,
        47512007,
        47509585,
        47512352,
        47511776,
        47511641,
        47512641,
        47510685,
        47511272,
        47511844,
        47513776,
        47510760,
        47508604,
        47510416,
        47511802,
        47510047,
        47512806,
        47512150,
        47512319,
        47511385,
        47513302,
        47510867,
        47512503,
        47509049,
        47509221,
        47511063,
        47510621,
        47510195,
        47512937,
        47509971,
        47509032,
        47510750,
        47510588,
        47508736,
        47512086,
        47511873,
        47510149,
        47512400,
        47509475,
        47509051,
        47511115,
        47510070,
        47510540,
        47510943,
        47512252,
        47510579,
        47510293,
        47510542,
        47511028,
        47510608,
        47510830,
        47510807,
        47510464,
        47511813,
        47511752,
        47511209,
        47511398,
        47510650,
        47513102,
        47509284,
        47511330,
        47513990,
        47510898,
        47513141,
        47512265,
        47513890,
        47509932,
        47511128,
        47511959,
        47511942,
        47513159,
        47510566,
        47511727,
        47510445,
        47508813,
        47511791,
        47512230
      ],
      "score": 598,
      "text": "<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;soraofficialapp&#x2F;status&#x2F;2036532795984715896\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;soraofficialapp&#x2F;status&#x2F;20365327959847158...</a><p><a href=\"https:&#x2F;&#x2F;www.hollywoodreporter.com&#x2F;business&#x2F;digital&#x2F;openai-shutting-down-sora-ai-video-app-1236546187&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.hollywoodreporter.com&#x2F;business&#x2F;digital&#x2F;openai-sh...</a>, <a href=\"https:&#x2F;&#x2F;archive.ph&#x2F;ABkeI\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.ph&#x2F;ABkeI</a>",
      "time": 1774382465,
      "title": "Goodbye to Sora",
      "type": "story",
      "url": "https://twitter.com/soraofficialapp/status/2036532795984715896"
    },
    {
      "by": "decimalenough",
      "descendants": 27,
      "id": 47513229,
      "kids": [
        47514000,
        47514017,
        47513875,
        47513827,
        47513846,
        47513804,
        47513909,
        47513927,
        47513860,
        47513950,
        47513766
      ],
      "score": 41,
      "time": 1774412834,
      "title": "Miscellanea: The War in Iran",
      "type": "story",
      "url": "https://acoup.blog/2026/03/25/miscellanea-the-war-in-iran/"
    },
    {
      "by": "Heff",
      "descendants": 58,
      "id": 47506713,
      "kids": [
        47513623,
        47513181,
        47513916,
        47511544,
        47513144,
        47511573,
        47510930,
        47511871,
        47512982,
        47511926,
        47512197,
        47510752,
        47510723,
        47512223,
        47512136,
        47510357,
        47510548,
        47510917,
        47513409,
        47511716,
        47511967,
        47513966,
        47511601,
        47511368,
        47513937,
        47512088
      ],
      "score": 319,
      "text": "What do you do when private equity buys your old company and fires the maintainers of the popular open source project you started over a decade ago? You reboot it, and bring along some new friends to do it.<p>Video.js is used by billions of people every month, on sites like Amazon.com, Linkedin, and Dropbox, and yet it wasn’t in great shape. A skeleton crew of maintainers were doing their best with a dated architecture, but it needed more. So Sam from Plyr, Rahim from Vidstack, and Wes and Christain from Media Chrome jumped in to help me rebuild it better, faster, and smaller.<p>It’s in beta now. Please give it a try and tell us what breaks.",
      "time": 1774375428,
      "title": "Show HN: I took back Video.js after 16 years and we rewrote it to be 88% smaller",
      "type": "story",
      "url": "https://videojs.org/blog/videojs-v10-beta-hello-world-again"
    },
    {
      "by": "tezclarke",
      "descendants": 113,
      "id": 47509571,
      "kids": [
        47511583,
        47510230,
        47511402,
        47512454,
        47510180,
        47511023,
        47509924,
        47510055,
        47511870,
        47511540,
        47513525,
        47511073,
        47513467,
        47512052,
        47513163,
        47513241,
        47510819,
        47511647,
        47510598,
        47511053,
        47511456,
        47511726,
        47511050,
        47509930,
        47510160,
        47511422,
        47511612,
        47511165
      ],
      "score": 257,
      "time": 1774387473,
      "title": "I wanted to build vertical SaaS for pest control, so I took a technician job",
      "type": "story",
      "url": "https://www.onhand.pro/p/i-wanted-to-build-vertical-saas-for-pest-control-i-took-a-technician-job-instead"
    },
    {
      "by": "soheilpro",
      "descendants": 344,
      "id": 47504112,
      "kids": [
        47505700,
        47509607,
        47506183,
        47505054,
        47505192,
        47510420,
        47509636,
        47505179,
        47510467,
        47505032,
        47505059,
        47513761,
        47505044,
        47510689,
        47505767,
        47505004,
        47504253,
        47513904,
        47509230,
        47512716,
        47510555,
        47505569,
        47507843,
        47505353,
        47508200,
        47505149,
        47508626,
        47510593,
        47510880,
        47511550,
        47509326,
        47509056,
        47504942,
        47510434,
        47508876,
        47505039,
        47510906,
        47509551,
        47505014,
        47509960,
        47505551,
        47512696,
        47505056,
        47505379,
        47505474,
        47506617,
        47506837,
        47510532,
        47510600,
        47505498,
        47510072,
        47505447,
        47509978,
        47506314,
        47505739,
        47505328,
        47507631,
        47510462,
        47508136,
        47510951,
        47510053,
        47510032,
        47509951,
        47505470,
        47507920,
        47506727,
        47507217,
        47506020,
        47508015,
        47509235,
        47507466,
        47513152,
        47513111,
        47505141,
        47508208,
        47504925,
        47507597
      ],
      "score": 584,
      "time": 1774366181,
      "title": "Apple Business",
      "type": "story",
      "url": "https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/"
    },
    {
      "by": "dot_treo",
      "descendants": 404,
      "id": 47501426,
      "kids": [
        47502858,
        47502785,
        47513932,
        47502402,
        47509479,
        47502085,
        47507089,
        47502459,
        47513787,
        47502920,
        47502350,
        47504118,
        47502034,
        47502548,
        47502493,
        47503114,
        47502769,
        47503196,
        47504121,
        47502619,
        47503580,
        47505844,
        47502297,
        47503842,
        47502008,
        47510350,
        47507836,
        47502002,
        47502301,
        47503373,
        47502346,
        47502839,
        47510471,
        47502260,
        47512083,
        47512863,
        47506165,
        47510246,
        47504191,
        47511296,
        47511845,
        47511696,
        47502412,
        47503065,
        47506618,
        47506200,
        47503031,
        47502237,
        47508422,
        47506858,
        47502586,
        47510301,
        47502568,
        47502109,
        47503270,
        47502731,
        47503343,
        47504387,
        47502447,
        47502309,
        47502440,
        47508281,
        47502380,
        47504933,
        47508315,
        47506974,
        47502604,
        47504102,
        47506099,
        47502454,
        47505215,
        47502955,
        47502529,
        47502549,
        47503590,
        47502319,
        47503725,
        47505713,
        47508540,
        47501928,
        47503685,
        47506350,
        47502355,
        47504732,
        47507593,
        47502925,
        47510199,
        47502296,
        47502906,
        47502353,
        47502980,
        47511188,
        47507548,
        47506658,
        47501993,
        47502063,
        47501432,
        47506076,
        47511907,
        47511149,
        47510846,
        47511671,
        47512080,
        47512178,
        47505214,
        47507545,
        47512165,
        47503702,
        47507550,
        47503106,
        47501856,
        47513129,
        47502272,
        47508055,
        47502434,
        47502798,
        47502856,
        47504719,
        47501658,
        47503281,
        47506347,
        47506701,
        47506356,
        47502542,
        47505992,
        47508120
      ],
      "score": 596,
      "text": "About an hour ago new versions have been deployed to PyPI.<p>I was just setting up a new project, and things behaved weirdly. My laptop ran out of RAM, it looked like a forkbomb was running.<p>I&#x27;ve investigated, and found that a base64 encoded blob has been added to proxy_server.py.<p>It writes and decodes another file which it then runs.<p>I&#x27;m in the process of reporting this upstream, but wanted to give everyone here a headsup.<p>It is also reported in this issue:\n<a href=\"https:&#x2F;&#x2F;github.com&#x2F;BerriAI&#x2F;litellm&#x2F;issues&#x2F;24512\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;BerriAI&#x2F;litellm&#x2F;issues&#x2F;24512</a>",
      "time": 1774353989,
      "title": "Tell HN: Litellm 1.82.7 and 1.82.8 on PyPI are compromised",
      "type": "story",
      "url": "https://github.com/BerriAI/litellm/issues/24512"
    },
    {
      "by": "cigrainger",
      "descendants": 1,
      "id": 47512891,
      "kids": [
        47513207,
        47513429
      ],
      "score": 28,
      "text": "Hey folks! As someone doing hybrid search daily and wishing I could have a pgvector-like experience but with actual prefiltered approximate nearest neighbours, I decided to just take a punt on implementing ACORN on a fork of the DuckDB VSS extension. I had to make some changes to (vendored) usearch that I&#x27;m thinking of submitting upstream. But this does the business. Approximate nearest neighbours with WHERE prefiltering.<p>Edit: Just to clarify, this has been accepted into the community extensions repo. So you can use it like:<p>```<p>INSTALL hnsw_acorn FROM community;<p>LOAD hnsw_acorn;<p>```",
      "time": 1774409284,
      "title": "Show HN: DuckDB community extension for prefiltered HNSW using ACORN-1",
      "type": "story",
      "url": "https://github.com/cigrainger/duckdb-hnsw-acorn"
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
      "by": "ray__",
      "descendants": 0,
      "id": 47513475,
      "score": 40,
      "time": 1774414854,
      "title": "TurboQuant: Redefining AI efficiency with extreme compression",
      "type": "story",
      "url": "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/"
    },
    {
      "by": "felixding",
      "descendants": 26,
      "id": 47512816,
      "kids": [
        47513689,
        47513273,
        47513985,
        47513948,
        47513796,
        47513590,
        47513976,
        47513775,
        47513907,
        47513595,
        47513815,
        47513701,
        47513225,
        47513416,
        47513442,
        47513871
      ],
      "score": 70,
      "time": 1774408626,
      "title": "VitruvianOS – Desktop Linux Inspired by the BeOS",
      "type": "story",
      "url": "https://v-os.dev"
    },
    {
      "by": "skogstokig",
      "descendants": 78,
      "id": 47511589,
      "kids": [
        47512563,
        47513699,
        47513655,
        47513661,
        47511632,
        47511793,
        47512421,
        47513785,
        47513786,
        47513232,
        47513669,
        47511698,
        47512441,
        47512427,
        47513510,
        47512000,
        47511739,
        47511821,
        47513679,
        47511826,
        47512324
      ],
      "score": 247,
      "time": 1774398585,
      "title": "Flighty Airports",
      "type": "story",
      "url": "https://flighty.com/airports"
    },
    {
      "by": "mikeocool",
      "descendants": 432,
      "id": 47508246,
      "kids": [
        47511146,
        47514028,
        47512202,
        47510769,
        47512459,
        47510266,
        47513998,
        47509291,
        47509442,
        47511444,
        47513556,
        47511111,
        47513901,
        47510508,
        47513501,
        47511591,
        47509079,
        47508610,
        47508695,
        47511731,
        47508735,
        47513227,
        47511548,
        47512963,
        47513462,
        47509180,
        47513627,
        47512494,
        47509611,
        47509260,
        47512615,
        47513739,
        47513737,
        47510557,
        47511515,
        47509436,
        47511860,
        47512007,
        47509585,
        47512352,
        47511776,
        47511641,
        47512641,
        47510685,
        47511272,
        47511844,
        47513776,
        47510760,
        47508604,
        47510416,
        47511802,
        47510047,
        47512806,
        47512150,
        47512319,
        47511385,
        47513302,
        47510867,
        47512503,
        47509049,
        47509221,
        47511063,
        47510621,
        47510195,
        47512937,
        47509971,
        47509032,
        47510750,
        47510588,
        47508736,
        47512086,
        47511873,
        47510149,
        47512400,
        47509475,
        47509051,
        47511115,
        47510070,
        47510540,
        47510943,
        47512252,
        47510579,
        47510293,
        47510542,
        47511028,
        47510608,
        47510830,
        47510807,
        47510464,
        47511813,
        47511752,
        47511209,
        47511398,
        47510650,
        47513102,
        47509284,
        47511330,
        47513990,
        47510898,
        47513141,
        47512265,
        47513890,
        47509932,
        47511128,
        47511959,
        47511942,
        47513159,
        47510566,
        47511727,
        47510445,
        47508813,
        47511791,
        47512230
      ],
      "score": 598,
      "text": "<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;soraofficialapp&#x2F;status&#x2F;2036532795984715896\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;soraofficialapp&#x2F;status&#x2F;20365327959847158...</a><p><a href=\"https:&#x2F;&#x2F;www.hollywoodreporter.com&#x2F;business&#x2F;digital&#x2F;openai-shutting-down-sora-ai-video-app-1236546187&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.hollywoodreporter.com&#x2F;business&#x2F;digital&#x2F;openai-sh...</a>, <a href=\"https:&#x2F;&#x2F;archive.ph&#x2F;ABkeI\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.ph&#x2F;ABkeI</a>",
      "time": 1774382465,
      "title": "Goodbye to Sora",
      "type": "story",
      "url": "https://twitter.com/soraofficialapp/status/2036532795984715896"
    },
    {
      "by": "decimalenough",
      "descendants": 27,
      "id": 47513229,
      "kids": [
        47514000,
        47514017,
        47513875,
        47513827,
        47513846,
        47513804,
        47513909,
        47513927,
        47513860,
        47513950,
        47513766
      ],
      "score": 41,
      "time": 1774412834,
      "title": "Miscellanea: The War in Iran",
      "type": "story",
      "url": "https://acoup.blog/2026/03/25/miscellanea-the-war-in-iran/"
    },
    {
      "by": "Heff",
      "descendants": 58,
      "id": 47506713,
      "kids": [
        47513623,
        47513181,
        47513916,
        47511544,
        47513144,
        47511573,
        47510930,
        47511871,
        47512982,
        47511926,
        47512197,
        47510752,
        47510723,
        47512223,
        47512136,
        47510357,
        47510548,
        47510917,
        47513409,
        47511716,
        47511967,
        47513966,
        47511601,
        47511368,
        47513937,
        47512088
      ],
      "score": 319,
      "text": "What do you do when private equity buys your old company and fires the maintainers of the popular open source project you started over a decade ago? You reboot it, and bring along some new friends to do it.<p>Video.js is used by billions of people every month, on sites like Amazon.com, Linkedin, and Dropbox, and yet it wasn’t in great shape. A skeleton crew of maintainers were doing their best with a dated architecture, but it needed more. So Sam from Plyr, Rahim from Vidstack, and Wes and Christain from Media Chrome jumped in to help me rebuild it better, faster, and smaller.<p>It’s in beta now. Please give it a try and tell us what breaks.",
      "time": 1774375428,
      "title": "Show HN: I took back Video.js after 16 years and we rewrote it to be 88% smaller",
      "type": "story",
      "url": "https://videojs.org/blog/videojs-v10-beta-hello-world-again"
    },
    {
      "by": "tezclarke",
      "descendants": 113,
      "id": 47509571,
      "kids": [
        47511583,
        47510230,
        47511402,
        47512454,
        47510180,
        47511023,
        47509924,
        47510055,
        47511870,
        47511540,
        47513525,
        47511073,
        47513467,
        47512052,
        47513163,
        47513241,
        47510819,
        47511647,
        47510598,
        47511053,
        47511456,
        47511726,
        47511050,
        47509930,
        47510160,
        47511422,
        47511612,
        47511165
      ],
      "score": 257,
      "time": 1774387473,
      "title": "I wanted to build vertical SaaS for pest control, so I took a technician job",
      "type": "story",
      "url": "https://www.onhand.pro/p/i-wanted-to-build-vertical-saas-for-pest-control-i-took-a-technician-job-instead"
    },
    {
      "by": "soheilpro",
      "descendants": 344,
      "id": 47504112,
      "kids": [
        47505700,
        47509607,
        47506183,
        47505054,
        47505192,
        47510420,
        47509636,
        47505179,
        47510467,
        47505032,
        47505059,
        47513761,
        47505044,
        47510689,
        47505767,
        47505004,
        47504253,
        47513904,
        47509230,
        47512716,
        47510555,
        47505569,
        47507843,
        47505353,
        47508200,
        47505149,
        47508626,
        47510593,
        47510880,
        47511550,
        47509326,
        47509056,
        47504942,
        47510434,
        47508876,
        47505039,
        47510906,
        47509551,
        47505014,
        47509960,
        47505551,
        47512696,
        47505056,
        47505379,
        47505474,
        47506617,
        47506837,
        47510532,
        47510600,
        47505498,
        47510072,
        47505447,
        47509978,
        47506314,
        47505739,
        47505328,
        47507631,
        47510462,
        47508136,
        47510951,
        47510053,
        47510032,
        47509951,
        47505470,
        47507920,
        47506727,
        47507217,
        47506020,
        47508015,
        47509235,
        47507466,
        47513152,
        47513111,
        47505141,
        47508208,
        47504925,
        47507597
      ],
      "score": 584,
      "time": 1774366181,
      "title": "Apple Business",
      "type": "story",
      "url": "https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/"
    },
    {
      "by": "dot_treo",
      "descendants": 404,
      "id": 47501426,
      "kids": [
        47502858,
        47502785,
        47513932,
        47502402,
        47509479,
        47502085,
        47507089,
        47502459,
        47513787,
        47502920,
        47502350,
        47504118,
        47502034,
        47502548,
        47502493,
        47503114,
        47502769,
        47503196,
        47504121,
        47502619,
        47503580,
        47505844,
        47502297,
        47503842,
        47502008,
        47510350,
        47507836,
        47502002,
        47502301,
        47503373,
        47502346,
        47502839,
        47510471,
        47502260,
        47512083,
        47512863,
        47506165,
        47510246,
        47504191,
        47511296,
        47511845,
        47511696,
        47502412,
        47503065,
        47506618,
        47506200,
        47503031,
        47502237,
        47508422,
        47506858,
        47502586,
        47510301,
        47502568,
        47502109,
        47503270,
        47502731,
        47503343,
        47504387,
        47502447,
        47502309,
        47502440,
        47508281,
        47502380,
        47504933,
        47508315,
        47506974,
        47502604,
        47504102,
        47506099,
        47502454,
        47505215,
        47502955,
        47502529,
        47502549,
        47503590,
        47502319,
        47503725,
        47505713,
        47508540,
        47501928,
        47503685,
        47506350,
        47502355,
        47504732,
        47507593,
        47502925,
        47510199,
        47502296,
        47502906,
        47502353,
        47502980,
        47511188,
        47507548,
        47506658,
        47501993,
        47502063,
        47501432,
        47506076,
        47511907,
        47511149,
        47510846,
        47511671,
        47512080,
        47512178,
        47505214,
        47507545,
        47512165,
        47503702,
        47507550,
        47503106,
        47501856,
        47513129,
        47502272,
        47508055,
        47502434,
        47502798,
        47502856,
        47504719,
        47501658,
        47503281,
        47506347,
        47506701,
        47506356,
        47502542,
        47505992,
        47508120
      ],
      "score": 596,
      "text": "About an hour ago new versions have been deployed to PyPI.<p>I was just setting up a new project, and things behaved weirdly. My laptop ran out of RAM, it looked like a forkbomb was running.<p>I&#x27;ve investigated, and found that a base64 encoded blob has been added to proxy_server.py.<p>It writes and decodes another file which it then runs.<p>I&#x27;m in the process of reporting this upstream, but wanted to give everyone here a headsup.<p>It is also reported in this issue:\n<a href=\"https:&#x2F;&#x2F;github.com&#x2F;BerriAI&#x2F;litellm&#x2F;issues&#x2F;24512\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;BerriAI&#x2F;litellm&#x2F;issues&#x2F;24512</a>",
      "time": 1774353989,
      "title": "Tell HN: Litellm 1.82.7 and 1.82.8 on PyPI are compromised",
      "type": "story",
      "url": "https://github.com/BerriAI/litellm/issues/24512"
    },
    {
      "by": "cigrainger",
      "descendants": 1,
      "id": 47512891,
      "kids": [
        47513207,
        47513429
      ],
      "score": 28,
      "text": "Hey folks! As someone doing hybrid search daily and wishing I could have a pgvector-like experience but with actual prefiltered approximate nearest neighbours, I decided to just take a punt on implementing ACORN on a fork of the DuckDB VSS extension. I had to make some changes to (vendored) usearch that I&#x27;m thinking of submitting upstream. But this does the business. Approximate nearest neighbours with WHERE prefiltering.<p>Edit: Just to clarify, this has been accepted into the community extensions repo. So you can use it like:<p>```<p>INSTALL hnsw_acorn FROM community;<p>LOAD hnsw_acorn;<p>```",
      "time": 1774409284,
      "title": "Show HN: DuckDB community extension for prefiltered HNSW using ACORN-1",
      "type": "story",
      "url": "https://github.com/cigrainger/duckdb-hnsw-acorn"
    },
    {
      "by": "RealityVoid",
      "descendants": 242,
      "id": 47506251,
      "kids": [
        47508062,
        47507563,
        47507519,
        47506467,
        47507630,
        47507269,
        47506252,
        47509121,
        47507045,
        47507035,
        47511359,
        47507740,
        47507981,
        47508694,
        47511154,
        47507951,
        47508049,
        47509220,
        47509236,
        47507676,
        47507826,
        47511922,
        47507088,
        47510545,
        47510452,
        47510101,
        47507405,
        47513315,
        47510507,
        47508260,
        47509362,
        47508896,
        47510778,
        47507846,
        47508472,
        47509219,
        47508038,
        47506957,
        47508635,
        47510037,
        47507721,
        47507892,
        47511176,
        47506976,
        47510525
      ],
      "score": 315,
      "time": 1774373442,
      "title": "Arm AGI CPU",
      "type": "story",
      "url": "https://newsroom.arm.com/blog/introducing-arm-agi-cpu"
    },
    {
      "by": "surprisetalk",
      "descendants": 14,
      "id": 47453738,
      "kids": [
        47472797,
        47513881,
        47513443,
        47513230
      ],
      "score": 39,
      "time": 1774010560,
      "title": "You can run a DNS server (2025)",
      "type": "story",
      "url": "https://simonsafar.com/2025/running_dns/"
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
      "title": "Debunking zswap and zram myths",
      "url": "https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html",
      "score": 88,
      "comments": 36,
      "tags": [
        "linux",
        "performance"
      ],
      "id": "flmhja"
    },
    {
      "title": "curl > dev/sda",
      "url": "https://astrid.tech/2026/03/24/0/curl-to-dev-sda/",
      "score": 77,
      "comments": 21,
      "tags": [
        "osdev"
      ],
      "id": "brcq3a"
    },
    {
      "title": "Hegel, a universal property-based testing protocol and family of PBT libraries",
      "url": "https://hegel.dev",
      "score": 39,
      "comments": 19,
      "tags": [
        "testing",
        "vibecoding"
      ],
      "id": "juc8ix"
    },
    {
      "title": "\"﷽\" U+FDFD: ARABIC LIGATURE BISMILLAH AR-RAHMAN AR-RAHEEM (Unicode Character)",
      "url": "https://unicodeplus.com/U+FDFD",
      "score": 17,
      "comments": 7,
      "tags": [
        "a11y"
      ],
      "id": "7s4sjp"
    },
    {
      "title": "LiteLLM Compromised by Credential Stealer",
      "url": "https://futuresearch.ai/blog/litellm-pypi-supply-chain-attack/",
      "score": 34,
      "comments": 6,
      "tags": [
        "security",
        "vibecoding"
      ],
      "id": "plmvuv"
    },
    {
      "title": "Announcing TypeScript 6.0",
      "url": "https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/",
      "score": 54,
      "comments": 12,
      "tags": [
        "javascript",
        "release"
      ],
      "id": "hb04np"
    },
    {
      "title": "Go Naming Conventions: A Practical Guide",
      "url": "https://www.alexedwards.net/blog/go-naming-conventions",
      "score": 18,
      "comments": 7,
      "tags": [
        "go"
      ],
      "id": "xarlmy"
    },
    {
      "title": "Adding structured concurrency to JavaScript",
      "url": "https://github.com/bakkot/structured-concurrency-for-js",
      "score": 11,
      "comments": 4,
      "tags": [
        "javascript"
      ],
      "id": "xt8q7u"
    },
    {
      "title": "Inside Ohm's PEG-to-Wasm compiler",
      "url": "https://ohmjs.org/blog/2026/03/12/peg-to-wasm",
      "score": 17,
      "comments": 2,
      "tags": [
        "compilers",
        "wasm"
      ],
      "id": "gmss5r"
    },
    {
      "title": "Magic Link Pitfalls",
      "url": "https://etodd.io/2026/03/22/magic-link-pitfalls/",
      "score": 4,
      "comments": 2,
      "tags": [
        "browsers",
        "email"
      ],
      "id": "lzxb0m"
    }
  ]
}
```

