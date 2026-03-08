# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-08 07:00:34 UTC

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
      "title": "3 words worth a billion dollars: Drift to Determinism (DriDe)",
      "description": "I doubt I am the first to come up with this concept, but I am probably the first to name it.  Drift...",
      "url": "https://dev.to/grahamthedev/3-words-worth-a-billion-dollars-drift-to-determinism-dride-dej",
      "tags": "webdev, ai, automation, architecture",
      "reactions": 38,
      "comments": 25,
      "reading_time": 7,
      "author": "grahamthedev"
    },
    {
      "title": "Join the 2026 WeCoded Challenge and Celebrate Underrepresented Voices in Tech Through Writing & Frontend Art 🎨!",
      "description": "We’re excited to announce the launch of the 2026 WeCoded Challenge!  This year marks our ninth year...",
      "url": "https://dev.to/devteam/join-the-2026-wecoded-challenge-and-celebrate-underrepresented-voices-in-tech-through-writing--4828",
      "tags": "devchallenge, wecoded, frontend, career",
      "reactions": 78,
      "comments": 9,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "I Turned Notion Into a Control Plane for my 18 OpenClaw AI Agents",
      "description": "This is a submission for the Notion MCP Challenge           What I Built   OpenClaw just got an...",
      "url": "https://dev.to/aws-heroes/i-turned-notion-into-a-control-plane-for-my-18-openclaw-ai-agents-5624",
      "tags": "notionchallenge, openclaw, mcp, devchallenge",
      "reactions": 23,
      "comments": 16,
      "reading_time": 7,
      "author": "vivek-aws"
    },
    {
      "title": "Decisions, Decisions -- Thoughts on making architectural decisions",
      "description": "Architectural decisions shape codebases for years. Here are the principles I've developed over 25 years to make better ones — covering simplicity, vendor lock-in, reversibility, and total cost of ownership.",
      "url": "https://dev.to/alexandermchan/decisions-decisions-thoughts-on-making-architectural-decisions-2bol",
      "tags": "architecture, libraries, fullstack",
      "reactions": 2,
      "comments": 0,
      "reading_time": 7,
      "author": "alexandermchan"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-1m96",
      "tags": "weeklyretro, discuss",
      "reactions": 53,
      "comments": 68,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Share, Embed, and Curate Agent Sessions on DEV [Beta]",
      "description": "Authors can now upload Agent Session transcripts to their DEV account. Those transcripts can be...",
      "url": "https://dev.to/devteam/share-embed-and-curate-agent-sessions-on-dev-beta-5bj6",
      "tags": "ai, forem, devto, gemini",
      "reactions": 65,
      "comments": 20,
      "reading_time": 3,
      "author": "jonmarkgo"
    },
    {
      "title": "Ship Less, Measure More",
      "description": "AI did not remove the engineering bottleneck. It moved it.  Code is cheaper than it has ever been....",
      "url": "https://dev.to/snowman647/ship-less-measure-more-58m4",
      "tags": "ai, programming, management",
      "reactions": 5,
      "comments": 0,
      "reading_time": 6,
      "author": "snowman647"
    },
    {
      "title": "🏗️ Building a Clean Architecture API with Go, Ore, and SQLite",
      "description": "So you've been writing Go for a bit. Your main.go is growing. You've got a database call next to an...",
      "url": "https://dev.to/lilury/building-a-clean-architecture-api-with-go-ore-and-sqlite-4ilf",
      "tags": "go, ore, di, architecture",
      "reactions": 1,
      "comments": 0,
      "reading_time": 14,
      "author": "firas"
    },
    {
      "title": "I Deleted Pinecone, Redis, and 400 Lines of Python. My RAG Pipeline Still Works.",
      "description": "I had 5 services running for a RAG pipeline. Turns out I only needed PostgreSQL. Here's the whole thing in SQL.",
      "url": "https://dev.to/zeybek/i-deleted-pinecone-redis-and-400-lines-of-python-my-rag-pipeline-still-works-5dh3",
      "tags": "postgres, ai, machinelearning, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "zeybek"
    },
    {
      "title": "Are you more of a CLI person or a GUI person",
      "description": "And why do you think that's your preference?",
      "url": "https://dev.to/ben/are-you-more-of-a-cli-person-or-a-gui-person-37n5",
      "tags": "discuss, cli, terminal",
      "reactions": 6,
      "comments": 6,
      "reading_time": 1,
      "author": "ben"
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
      "author": "apify",
      "repo": "agent-skills",
      "avatar": "https://github.com/apify.png",
      "repo_link": "https://github.com/apify/agent-skills",
      "desc": "Collection of Apify Agent Skills",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 129,
      "added_stars": 647,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "vystrcild",
          "href": "https://github.com/vystrcild",
          "avatar": "https://avatars.githubusercontent.com/u/25441338"
        },
        {
          "username": "patrikbraborec",
          "href": "https://github.com/patrikbraborec",
          "avatar": "https://avatars.githubusercontent.com/u/18550315"
        },
        {
          "username": "B4nan",
          "href": "https://github.com/B4nan",
          "avatar": "https://avatars.githubusercontent.com/u/615580"
        },
        {
          "username": "lukas-bekr",
          "href": "https://github.com/lukas-bekr",
          "avatar": "https://avatars.githubusercontent.com/u/224167845"
        }
      ]
    },
    {
      "author": "expo",
      "repo": "skills",
      "avatar": "https://github.com/expo.png",
      "repo_link": "https://github.com/expo/skills",
      "desc": "A collection of AI agent skills for working with Expo projects and Expo Application Services",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 61,
      "added_stars": 129,
      "builtBy": [
        {
          "username": "EvanBacon",
          "href": "https://github.com/EvanBacon",
          "avatar": "https://avatars.githubusercontent.com/u/9664363"
        },
        {
          "username": "ide",
          "href": "https://github.com/ide",
          "avatar": "https://avatars.githubusercontent.com/u/379606"
        },
        {
          "username": "Ubax",
          "href": "https://github.com/Ubax",
          "avatar": "https://avatars.githubusercontent.com/u/32908614"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "brentvatne",
          "href": "https://github.com/brentvatne",
          "avatar": "https://avatars.githubusercontent.com/u/90494"
        }
      ]
    },
    {
      "author": "harvard-edge",
      "repo": "cs249r_book",
      "avatar": "https://github.com/harvard-edge.png",
      "repo_link": "https://github.com/harvard-edge/cs249r_book",
      "desc": "Machine Learning Systems",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2668,
      "added_stars": 1252,
      "builtBy": [
        {
          "username": "profvjreddi",
          "href": "https://github.com/profvjreddi",
          "avatar": "https://avatars.githubusercontent.com/u/6807956"
        },
        {
          "username": "hzeljko",
          "href": "https://github.com/hzeljko",
          "avatar": "https://avatars.githubusercontent.com/u/36451783"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Mjrovai",
          "href": "https://github.com/Mjrovai",
          "avatar": "https://avatars.githubusercontent.com/u/17109416"
        }
      ]
    },
    {
      "author": "jgraph",
      "repo": "drawio",
      "avatar": "https://github.com/jgraph.png",
      "repo_link": "https://github.com/jgraph/drawio",
      "desc": "draw.io is a JavaScript, client-side editor for general diagramming.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 696,
      "added_stars": 162,
      "builtBy": [
        {
          "username": "davidjgraph",
          "href": "https://github.com/davidjgraph",
          "avatar": "https://avatars.githubusercontent.com/u/1761087"
        },
        {
          "username": "alderg",
          "href": "https://github.com/alderg",
          "avatar": "https://avatars.githubusercontent.com/u/921200"
        },
        {
          "username": "mediaslav",
          "href": "https://github.com/mediaslav",
          "avatar": "https://avatars.githubusercontent.com/u/472418"
        },
        {
          "username": "m-mohamedin",
          "href": "https://github.com/m-mohamedin",
          "avatar": "https://avatars.githubusercontent.com/u/24944765"
        },
        {
          "username": "MJomaa",
          "href": "https://github.com/MJomaa",
          "avatar": "https://avatars.githubusercontent.com/u/9029497"
        }
      ]
    },
    {
      "author": "datawhalechina",
      "repo": "easy-vibe",
      "avatar": "https://github.com/datawhalechina.png",
      "repo_link": "https://github.com/datawhalechina/easy-vibe",
      "desc": "easy vibe 一起 vibe ! Learn Vibe Coding From 0 to 1 ｜ Vibe Coding 零基础教程 ｜ 产品原型、AI 能力集成、前后端开发、多平台应用开发教程 ｜ Tutorial on Product Prototype, AI Capability Integration, Frontend and Backend Development, and Multi-platform Application Development",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 302,
      "added_stars": 518,
      "builtBy": [
        {
          "username": "sanbuphy",
          "href": "https://github.com/sanbuphy",
          "avatar": "https://avatars.githubusercontent.com/u/96160062"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "GeoDaoyu",
          "href": "https://github.com/GeoDaoyu",
          "avatar": "https://avatars.githubusercontent.com/u/34641603"
        },
        {
          "username": "1985312383",
          "href": "https://github.com/1985312383",
          "avatar": "https://avatars.githubusercontent.com/u/56398475"
        },
        {
          "username": "luahan77m",
          "href": "https://github.com/luahan77m",
          "avatar": "https://avatars.githubusercontent.com/u/107054996"
        }
      ]
    },
    {
      "author": "songquanpeng",
      "repo": "one-api",
      "avatar": "https://github.com/songquanpeng.png",
      "repo_link": "https://github.com/songquanpeng/one-api",
      "desc": "LLM API 管理 & 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。LLM API management & key redistribution system, unifying multiple providers under a single API. Single binary, Docker-ready, with an English UI.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5774,
      "added_stars": 290,
      "builtBy": [
        {
          "username": "songquanpeng",
          "href": "https://github.com/songquanpeng",
          "avatar": "https://avatars.githubusercontent.com/u/39998050"
        },
        {
          "username": "mrhaoji",
          "href": "https://github.com/mrhaoji",
          "avatar": "https://avatars.githubusercontent.com/u/483419"
        },
        {
          "username": "Laisky",
          "href": "https://github.com/Laisky",
          "avatar": "https://avatars.githubusercontent.com/u/4532436"
        },
        {
          "username": "igophper",
          "href": "https://github.com/igophper",
          "avatar": "https://avatars.githubusercontent.com/u/34326532"
        },
        {
          "username": "quzard",
          "href": "https://github.com/quzard",
          "avatar": "https://avatars.githubusercontent.com/u/30899719"
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
      "forks": 2209,
      "added_stars": 3555,
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
          "username": "Tibsfox",
          "href": "https://github.com/Tibsfox",
          "avatar": "https://avatars.githubusercontent.com/u/537551"
        },
        {
          "username": "Solvely-Colin",
          "href": "https://github.com/Solvely-Colin",
          "avatar": "https://avatars.githubusercontent.com/u/211764741"
        },
        {
          "username": "jjshanks",
          "href": "https://github.com/jjshanks",
          "avatar": "https://avatars.githubusercontent.com/u/62661"
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
      "forks": 1429,
      "added_stars": 415,
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
      "author": "SillyTavern",
      "repo": "SillyTavern",
      "avatar": "https://github.com/SillyTavern.png",
      "repo_link": "https://github.com/SillyTavern/SillyTavern",
      "desc": "LLM Frontend for Power Users.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4861,
      "added_stars": 365,
      "builtBy": [
        {
          "username": "Cohee1207",
          "href": "https://github.com/Cohee1207",
          "avatar": "https://avatars.githubusercontent.com/u/18619528"
        },
        {
          "username": "Wolfsblvt",
          "href": "https://github.com/Wolfsblvt",
          "avatar": "https://avatars.githubusercontent.com/u/9962104"
        },
        {
          "username": "RossAscends",
          "href": "https://github.com/RossAscends",
          "avatar": "https://avatars.githubusercontent.com/u/124905043"
        },
        {
          "username": "LenAnderson",
          "href": "https://github.com/LenAnderson",
          "avatar": "https://avatars.githubusercontent.com/u/7149120"
        },
        {
          "username": "valadaptive",
          "href": "https://github.com/valadaptive",
          "avatar": "https://avatars.githubusercontent.com/u/79560998"
        }
      ]
    },
    {
      "author": "Mintplex-Labs",
      "repo": "anything-llm",
      "avatar": "https://github.com/Mintplex-Labs.png",
      "repo_link": "https://github.com/Mintplex-Labs/anything-llm",
      "desc": "The all-in-one AI productivity accelerator. On device and privacy first with no annoying setup or configration.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6041,
      "added_stars": 701,
      "builtBy": [
        {
          "username": "timothycarambat",
          "href": "https://github.com/timothycarambat",
          "avatar": "https://avatars.githubusercontent.com/u/16845892"
        },
        {
          "username": "shatfield4",
          "href": "https://github.com/shatfield4",
          "avatar": "https://avatars.githubusercontent.com/u/2336488"
        },
        {
          "username": "angelplusultra",
          "href": "https://github.com/angelplusultra",
          "avatar": "https://avatars.githubusercontent.com/u/106866560"
        },
        {
          "username": "KPCOFGS",
          "href": "https://github.com/KPCOFGS",
          "avatar": "https://avatars.githubusercontent.com/u/100217654"
        },
        {
          "username": "17ColinMiPerry",
          "href": "https://github.com/17ColinMiPerry",
          "avatar": "https://avatars.githubusercontent.com/u/55003831"
        }
      ]
    },
    {
      "author": "maboloshi",
      "repo": "github-chinese",
      "avatar": "https://github.com/maboloshi.png",
      "repo_link": "https://github.com/maboloshi/github-chinese",
      "desc": "GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1173,
      "added_stars": 277,
      "builtBy": [
        {
          "username": "maboloshi",
          "href": "https://github.com/maboloshi",
          "avatar": "https://avatars.githubusercontent.com/u/7850715"
        },
        {
          "username": "52cik",
          "href": "https://github.com/52cik",
          "avatar": "https://avatars.githubusercontent.com/u/5033310"
        },
        {
          "username": "TC999",
          "href": "https://github.com/TC999",
          "avatar": "https://avatars.githubusercontent.com/u/88823709"
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
      "title": "3 words worth a billion dollars: Drift to Determinism (DriDe)",
      "description": "I doubt I am the first to come up with this concept, but I am probably the first to name it.  Drift...",
      "url": "https://dev.to/grahamthedev/3-words-worth-a-billion-dollars-drift-to-determinism-dride-dej",
      "tags": "webdev, ai, automation, architecture",
      "reactions": 38,
      "comments": 25,
      "reading_time": 7,
      "author": "grahamthedev"
    },
    {
      "title": "When Your AI Agent Starts Fixing Itself: A Week of Rebuilding Wiz",
      "description": "When Your AI Agent Starts Fixing Itself: A Week of Rebuilding Wiz   Originally published on...",
      "url": "https://dev.to/joozio/when-your-ai-agent-starts-fixing-itself-a-week-of-rebuilding-wiz-31an",
      "tags": "ai, claudecode, automation, programming",
      "reactions": 6,
      "comments": 5,
      "reading_time": 5,
      "author": "joozio"
    },
    {
      "title": "AI Agent Landscape: February 2026 Data from Running One for 6 Months",
      "description": "I have been running a personal AI agent autonomously for about six months. Here is what the data...",
      "url": "https://dev.to/joozio/ai-agent-landscape-february-2026-data-from-running-one-for-6-months-33ap",
      "tags": "ai, automation, agentdev, machinelearning",
      "reactions": 1,
      "comments": 3,
      "reading_time": 2,
      "author": "joozio"
    },
    {
      "title": "I Built a Desktop Tamagotchi Cat with AI Brain in Swift - and It Lives on My macOS Doc",
      "description": "You know that feeling when you're coding at 2 AM and wish someone was there with you?  Meet Murchi —...",
      "url": "https://dev.to/egorfedorov/i-built-a-desktop-tamagotchi-cat-with-ai-brain-in-swift-and-it-lives-on-my-macos-doc-4e94",
      "tags": "swift, ai, showdev, opensource",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "egorfedorov"
    },
    {
      "title": "Why I replaced \"think freely\" with structured blackboarding in my agent loops",
      "description": "A developer named GrahamTheDev left a comment on my build log that I'm still processing. He described...",
      "url": "https://dev.to/askpatrick/why-i-replaced-think-freely-with-structured-blackboarding-in-my-agent-loops-am3",
      "tags": "ai, agents, architecture, autonomy",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "askpatrick"
    },
    {
      "title": "The Micro-Coercion of Speed: Why Friction Is an Engineering Prerequisite",
      "description": "AI-assisted velocity can collapse verification. Protective friction restores engineering integrity.",
      "url": "https://dev.to/crisiscoresystems/the-micro-coercion-of-speed-why-friction-is-an-engineering-prerequisite-g4j",
      "tags": "ai, softwareengineering, architecture, devops",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "crisiscoresystems"
    },
    {
      "title": "I'm tired...",
      "description": "I've sent out hundreds of job applications through platforms like JobStreet, Glints, and LinkedIn,...",
      "url": "https://dev.to/restu_muhammad_d32f98b653/im-tired-2d99",
      "tags": "webdev, ai, programming, javascript",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "restu_muhammad_d32f98b653"
    },
    {
      "title": "I Found 9 Agent Identity Projects on GitHub. Only 2 Have Real Users.",
      "description": "I searched GitHub for \"agent identity protocol\" this week and found 9 projects created in 2026 alone....",
      "url": "https://dev.to/thenexusguard/i-found-9-agent-identity-projects-on-github-only-2-have-real-users-3aed",
      "tags": "ai, security, opensource, agents",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "thenexusguard"
    },
    {
      "title": "Introducing claude-collab",
      "description": "Hi there.  I've been working on my project — bit — and wanted to work on several ideas at once. I...",
      "url": "https://dev.to/david_hoze/introducing-claude-collab-5mm",
      "tags": "agents, ai, cli, showdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 7,
      "author": "david_hoze"
    },
    {
      "title": "You Can't Build a Categorizer Before You Have Composable Workflows",
      "description": "I've been having a thread with GrahamTheDev on dev.to that's now 10 exchanges deep. His...",
      "url": "https://dev.to/askpatrick/you-cant-build-a-categorizer-before-you-have-composable-workflows-4c37",
      "tags": "ai, agentops, architecture, buildinpublic",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "askpatrick"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "dkechag",
      "descendants": 80,
      "id": 47293119,
      "kids": [
        47293576,
        47294479,
        47293421,
        47295026,
        47293726,
        47293527,
        47293511,
        47294701,
        47293495,
        47293567,
        47293665,
        47294675,
        47294658,
        47294519,
        47293770,
        47293565,
        47293529,
        47293496,
        47293627,
        47293566,
        47293986
      ],
      "score": 171,
      "time": 1772930672,
      "title": "Cloud VM benchmarks 2026",
      "type": "story",
      "url": "https://devblog.ecuadors.net/cloud-vm-benchmarks-2026-performance-price-1i1m.html"
    },
    {
      "by": "networked",
      "descendants": 25,
      "id": 47293415,
      "kids": [
        47295211,
        47295014,
        47294433,
        47294356,
        47294370,
        47295072,
        47294608,
        47294765
      ],
      "score": 104,
      "time": 1772933721,
      "title": "\"Warn about PyPy being unmaintained\"",
      "type": "story",
      "url": "https://github.com/astral-sh/uv/pull/17643"
    },
    {
      "by": "aebtebeten",
      "descendants": 35,
      "id": 47291292,
      "kids": [
        47291555,
        47295100,
        47293255,
        47291591,
        47291427,
        47292996,
        47294499,
        47291952,
        47292236,
        47291802,
        47291612,
        47291557,
        47292433,
        47291787,
        47292276,
        47292766,
        47292326,
        47291594,
        47292092
      ],
      "score": 257,
      "time": 1772916231,
      "title": "CasNum",
      "type": "story",
      "url": "https://github.com/0x0mer/CasNum"
    },
    {
      "by": "azhenley",
      "descendants": 18,
      "id": 47293682,
      "kids": [
        47294357,
        47294560,
        47295086,
        47294621,
        47295031
      ],
      "score": 48,
      "time": 1772936162,
      "title": "MonoGame: A .NET framework for making cross-platform games",
      "type": "story",
      "url": "https://github.com/MonoGame/MonoGame"
    },
    {
      "by": "zacwest",
      "descendants": 194,
      "id": 47289311,
      "kids": [
        47295208,
        47289874,
        47291440,
        47289537,
        47291296,
        47289545,
        47289918,
        47292042,
        47289335,
        47294851,
        47293975,
        47289519,
        47290569,
        47291596,
        47294123,
        47294402,
        47292337,
        47293827,
        47290765,
        47293641,
        47290506,
        47292713,
        47292215,
        47293383,
        47290299,
        47289758,
        47292289,
        47292712,
        47291073,
        47291177,
        47292891,
        47291351,
        47291172,
        47290292,
        47291031,
        47292098,
        47290109,
        47290086
      ],
      "score": 274,
      "time": 1772902518,
      "title": "A decade of Docker containers",
      "type": "story",
      "url": "https://cacm.acm.org/research/a-decade-of-docker-containers/"
    },
    {
      "by": "thecloudlet",
      "descendants": 1,
      "id": 47259961,
      "kids": [
        47295030
      ],
      "score": 52,
      "time": 1772706195,
      "title": "Emacs internals: Deconstructing Lisp_Object in C (Part 2)",
      "type": "story",
      "url": "https://thecloudlet.github.io/blog/project/emacs-02/"
    },
    {
      "by": "theblazehen",
      "descendants": 11,
      "id": 47271988,
      "kids": [
        47291245,
        47291420,
        47291256,
        47293290,
        47292870,
        47293046,
        47292376
      ],
      "score": 182,
      "time": 1772781468,
      "title": "Dumping Lego NXT firmware off of an existing brick (2025)",
      "type": "story",
      "url": "https://arcanenibble.github.io/dumping-lego-nxt-firmware-off-of-an-existing-brick.html"
    },
    {
      "by": "ranit",
      "descendants": 141,
      "id": 47287344,
      "kids": [
        47293219,
        47295205,
        47288995,
        47290047,
        47288562,
        47289712,
        47293419,
        47288953,
        47294684,
        47288548,
        47289422,
        47290723,
        47292301,
        47289173,
        47288462,
        47289074,
        47290069,
        47290154,
        47291034,
        47289585,
        47288916
      ],
      "score": 256,
      "time": 1772889160,
      "title": "Yoghurt delivery women combatting loneliness in Japan",
      "type": "story",
      "url": "https://www.bbc.com/travel/article/20260302-the-yoghurt-delivery-women-combatting-loneliness-in-japan"
    },
    {
      "by": "simonpure",
      "descendants": 23,
      "id": 47291123,
      "kids": [
        47293276,
        47293823,
        47293881,
        47293008,
        47292267,
        47293375,
        47294120,
        47293957,
        47292342,
        47292742,
        47293035,
        47292405,
        47292994
      ],
      "score": 88,
      "time": 1772914965,
      "title": "Autoresearch: Agents researching on single-GPU nanochat training automatically",
      "type": "story",
      "url": "https://github.com/karpathy/autoresearch"
    },
    {
      "by": "mooreds",
      "descendants": 2,
      "id": 47261858,
      "kids": [
        47295167
      ],
      "score": 10,
      "time": 1772720746,
      "title": "Ten Years of Deploying to Production",
      "type": "story",
      "url": "https://brandonvin.github.io/2026/03/04/ten-years-of-deploying-to-production.html"
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
      "by": "dkechag",
      "descendants": 80,
      "id": 47293119,
      "kids": [
        47293576,
        47294479,
        47293421,
        47295026,
        47293726,
        47293527,
        47293511,
        47294701,
        47293495,
        47293567,
        47293665,
        47294675,
        47294658,
        47294519,
        47293770,
        47293565,
        47293529,
        47293496,
        47293627,
        47293566,
        47293986
      ],
      "score": 172,
      "time": 1772930672,
      "title": "Cloud VM benchmarks 2026",
      "type": "story",
      "url": "https://devblog.ecuadors.net/cloud-vm-benchmarks-2026-performance-price-1i1m.html"
    },
    {
      "by": "networked",
      "descendants": 26,
      "id": 47293415,
      "kids": [
        47295014,
        47295211,
        47294433,
        47295226,
        47294356,
        47294370,
        47295072,
        47294608,
        47294765
      ],
      "score": 104,
      "time": 1772933721,
      "title": "\"Warn about PyPy being unmaintained\"",
      "type": "story",
      "url": "https://github.com/astral-sh/uv/pull/17643"
    },
    {
      "by": "aebtebeten",
      "descendants": 35,
      "id": 47291292,
      "kids": [
        47291555,
        47295100,
        47293255,
        47291591,
        47291427,
        47292996,
        47294499,
        47291952,
        47292236,
        47291802,
        47291612,
        47291557,
        47292433,
        47291787,
        47292276,
        47292766,
        47292326,
        47291594,
        47292092
      ],
      "score": 257,
      "time": 1772916231,
      "title": "CasNum",
      "type": "story",
      "url": "https://github.com/0x0mer/CasNum"
    },
    {
      "by": "azhenley",
      "descendants": 18,
      "id": 47293682,
      "kids": [
        47294357,
        47294560,
        47295086,
        47294621,
        47295031
      ],
      "score": 48,
      "time": 1772936162,
      "title": "MonoGame: A .NET framework for making cross-platform games",
      "type": "story",
      "url": "https://github.com/MonoGame/MonoGame"
    },
    {
      "by": "zacwest",
      "descendants": 194,
      "id": 47289311,
      "kids": [
        47295208,
        47289874,
        47291440,
        47289537,
        47291296,
        47289545,
        47289918,
        47292042,
        47289335,
        47294851,
        47293975,
        47289519,
        47290569,
        47291596,
        47294123,
        47294402,
        47292337,
        47293827,
        47290765,
        47293641,
        47290506,
        47292713,
        47292215,
        47293383,
        47290299,
        47289758,
        47292289,
        47292712,
        47291073,
        47291177,
        47292891,
        47291351,
        47291172,
        47290292,
        47291031,
        47292098,
        47290109,
        47290086
      ],
      "score": 275,
      "time": 1772902518,
      "title": "A decade of Docker containers",
      "type": "story",
      "url": "https://cacm.acm.org/research/a-decade-of-docker-containers/"
    },
    {
      "by": "thecloudlet",
      "descendants": 1,
      "id": 47259961,
      "kids": [
        47295030
      ],
      "score": 52,
      "time": 1772706195,
      "title": "Emacs internals: Deconstructing Lisp_Object in C (Part 2)",
      "type": "story",
      "url": "https://thecloudlet.github.io/blog/project/emacs-02/"
    },
    {
      "by": "theblazehen",
      "descendants": 11,
      "id": 47271988,
      "kids": [
        47291245,
        47291420,
        47291256,
        47293290,
        47292870,
        47293046,
        47292376
      ],
      "score": 182,
      "time": 1772781468,
      "title": "Dumping Lego NXT firmware off of an existing brick (2025)",
      "type": "story",
      "url": "https://arcanenibble.github.io/dumping-lego-nxt-firmware-off-of-an-existing-brick.html"
    },
    {
      "by": "ranit",
      "descendants": 141,
      "id": 47287344,
      "kids": [
        47293219,
        47295205,
        47288995,
        47290047,
        47288562,
        47289712,
        47293419,
        47288953,
        47294684,
        47288548,
        47289422,
        47290723,
        47292301,
        47289173,
        47288462,
        47289074,
        47290069,
        47290154,
        47291034,
        47289585,
        47288916
      ],
      "score": 256,
      "time": 1772889160,
      "title": "Yoghurt delivery women combatting loneliness in Japan",
      "type": "story",
      "url": "https://www.bbc.com/travel/article/20260302-the-yoghurt-delivery-women-combatting-loneliness-in-japan"
    },
    {
      "by": "simonpure",
      "descendants": 23,
      "id": 47291123,
      "kids": [
        47293276,
        47293823,
        47293881,
        47293008,
        47292267,
        47293375,
        47294120,
        47293957,
        47292342,
        47292742,
        47293035,
        47292405,
        47292994
      ],
      "score": 88,
      "time": 1772914965,
      "title": "Autoresearch: Agents researching on single-GPU nanochat training automatically",
      "type": "story",
      "url": "https://github.com/karpathy/autoresearch"
    },
    {
      "by": "mooreds",
      "descendants": 2,
      "id": 47261858,
      "kids": [
        47295167
      ],
      "score": 10,
      "time": 1772720746,
      "title": "Ten Years of Deploying to Production",
      "type": "story",
      "url": "https://brandonvin.github.io/2026/03/04/ten-years-of-deploying-to-production.html"
    },
    {
      "by": "jandeboevrie",
      "descendants": 13,
      "id": 47274768,
      "kids": [
        47294829,
        47295164,
        47294806,
        47294445,
        47294431,
        47294697,
        47294655
      ],
      "score": 20,
      "time": 1772804416,
      "title": "Best Performance of a C++ Singleton",
      "type": "story",
      "url": "https://andreasfertig.com/blog/2026/03/best-performance-of-a-cpp-singleton/"
    },
    {
      "by": "kilroy123",
      "descendants": 26,
      "id": 47247762,
      "kids": [
        47293681,
        47293822,
        47294681,
        47293947,
        47294276,
        47293516,
        47293589,
        47294214,
        47293541,
        47293900,
        47294284
      ],
      "score": 55,
      "time": 1772634264,
      "title": "Show HN: A weird thing that detects your pulse from the browser video",
      "type": "story",
      "url": "https://pulsefeedback.io/"
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
      "title": "Pushing and Pulling: Three Reactivity Algorithms",
      "url": "https://jonathan-frere.com/posts/reactivity-algorithms/",
      "score": 35,
      "comments": 17,
      "tags": [
        "programming"
      ],
      "id": "2zk3oe"
    },
    {
      "title": "Lenovo’s New T-Series ThinkPads Score 10/10 for Repairability",
      "url": "https://www.ifixit.com/News/115827/new-thinkpads-score-perfect-10-repairability",
      "score": 108,
      "comments": 28,
      "tags": [
        "hardware"
      ],
      "id": "azkace"
    },
    {
      "title": "Usage Specification",
      "url": "https://usage.jdx.dev/spec/",
      "score": 30,
      "comments": 12,
      "tags": [
        "programming"
      ],
      "id": "xndrk0"
    },
    {
      "title": "Primitive proposal for human-interface improvement on Lobste.rs",
      "url": "https://www.figma.com/proto/wyDB0nvSiZCmvlsSLCf4eY/Websites?node-id=244-252&p=f&t=hi5Tfa6PoucMf2hW-1&scaling=scale-down-width&content-scaling=fixed&page-id=140%3A126",
      "score": 4,
      "comments": 3,
      "tags": [
        "design"
      ],
      "id": "8dz5tt"
    },
    {
      "title": "Some Words on WigglyPaint",
      "url": "https://beyondloom.com/blog/onwigglypaint.html",
      "score": 128,
      "comments": 9,
      "tags": [
        "graphics"
      ],
      "id": "drtput"
    },
    {
      "title": "Ki Editor | Multi-cursor structural editor",
      "url": "https://ki-editor.org/",
      "score": 26,
      "comments": 7,
      "tags": [
        "editors"
      ],
      "id": "u8x6xv"
    },
    {
      "title": "I'm not consulting an LLM",
      "url": "https://lr0.org/blog/p/gpt/",
      "score": 42,
      "comments": 19,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "qorrgl"
    },
    {
      "title": "Perfect types with `setHTML()`",
      "url": "https://frederikbraun.de/perfect-types-with-sethtml.html",
      "score": 10,
      "comments": 3,
      "tags": [
        "security",
        "web"
      ],
      "id": "c7tzjs"
    },
    {
      "title": "How Apple Used to Design Its Laptops for Repairability",
      "url": "https://www.ifixit.com/News/115995/how-apple-used-to-design-its-laptops-for-repairability",
      "score": 25,
      "comments": 11,
      "tags": [
        "hardware"
      ],
      "id": "9o02lu"
    },
    {
      "title": "MuJS - lightweight Javascript interpreter designed for embedding in other software",
      "url": "https://mujs.com/",
      "score": 6,
      "comments": 3,
      "tags": [
        "javascript",
        "programming"
      ],
      "id": "e174yb"
    }
  ]
}
```

