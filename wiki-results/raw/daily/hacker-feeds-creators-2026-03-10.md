# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-10 07:08:32 UTC

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
      "title": "Join the 2026 WeCoded Challenge and Celebrate Underrepresented Voices in Tech Through Writing & Frontend Art 🎨!",
      "description": "We’re excited to announce the launch of the 2026 WeCoded Challenge!  This year marks our ninth year...",
      "url": "https://dev.to/devteam/join-the-2026-wecoded-challenge-and-celebrate-underrepresented-voices-in-tech-through-writing--4828",
      "tags": "devchallenge, wecoded, frontend, career",
      "reactions": 117,
      "comments": 14,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Revamped RSS Feed Imports",
      "description": "You can now add multiple RSS feed imports, monitor their status, and assign each one to different...",
      "url": "https://dev.to/devteam/revamped-rss-feed-imports-3j1e",
      "tags": "forem, devto, rss",
      "reactions": 36,
      "comments": 3,
      "reading_time": 2,
      "author": "jonmarkgo"
    },
    {
      "title": "Can you Truly Know that you are in the Right Path?",
      "description": "I have seen many people discussing online and people I know in real life having doubts about if the...",
      "url": "https://dev.to/francistrdev/can-you-truly-know-that-you-are-in-the-right-path-4745",
      "tags": "discuss, codenewbie, career, programming",
      "reactions": 18,
      "comments": 7,
      "reading_time": 2,
      "author": "francistrdev"
    },
    {
      "title": "I Planned an Exit Strategy. I Stayed the Whole Time.",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience     I told my wife to keep...",
      "url": "https://dev.to/earlgreyhot1701d/i-planned-an-exit-strategy-i-stayed-the-whole-time-4ejh",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 26,
      "comments": 2,
      "reading_time": 5,
      "author": "earlgreyhot1701d"
    },
    {
      "title": "3 words worth a billion dollars: Drift to Determinism (DriDe)",
      "description": "I doubt I am the first to come up with this concept, but I am probably the first to name it.  Drift...",
      "url": "https://dev.to/grahamthedev/3-words-worth-a-billion-dollars-drift-to-determinism-dride-dej",
      "tags": "webdev, ai, automation, architecture",
      "reactions": 51,
      "comments": 30,
      "reading_time": 7,
      "author": "grahamthedev"
    },
    {
      "title": "From NEET Aspirant to Writing Code: A Journey I Never Planned",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience  If someone had told me a...",
      "url": "https://dev.to/preeti_yadav/from-neet-aspirant-to-writing-code-a-journey-i-never-planned-l59",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 8,
      "comments": 0,
      "reading_time": 3,
      "author": "preeti_yadav"
    },
    {
      "title": "One Sentence From My Senior Engineer Changed How I Think About Software",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience           One Sentence From...",
      "url": "https://dev.to/siti_aisyahmatzainal_73/one-sentence-from-my-senior-engineer-changed-how-i-think-about-software-4oe3",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 7,
      "comments": 1,
      "reading_time": 3,
      "author": "siti_aisyahmatzainal_73"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-1m96",
      "tags": "weeklyretro, discuss",
      "reactions": 64,
      "comments": 99,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Let Dependabot Merge Its Own PRs",
      "description": "Dependabot opens PRs automatically. That part most people have set up. But then those PRs just sit...",
      "url": "https://dev.to/nickytonline/let-dependabot-merge-its-own-prs-27pc",
      "tags": "github, cicd, githubactions, devops",
      "reactions": 23,
      "comments": 5,
      "reading_time": 3,
      "author": "nickytonline"
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
      "forks": 151,
      "added_stars": 787,
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
      "author": "jgraph",
      "repo": "drawio",
      "avatar": "https://github.com/jgraph.png",
      "repo_link": "https://github.com/jgraph/drawio",
      "desc": "draw.io is a JavaScript, client-side editor for general diagramming.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 702,
      "added_stars": 158,
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
      "author": "aandrew-me",
      "repo": "ytDownloader",
      "avatar": "https://github.com/aandrew-me.png",
      "repo_link": "https://github.com/aandrew-me/ytDownloader",
      "desc": "Desktop App for downloading Videos and Audios from hundreds of sites",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 749,
      "added_stars": 423,
      "builtBy": [
        {
          "username": "aandrew-me",
          "href": "https://github.com/aandrew-me",
          "avatar": "https://avatars.githubusercontent.com/u/66430340"
        },
        {
          "username": "albanobattistella",
          "href": "https://github.com/albanobattistella",
          "avatar": "https://avatars.githubusercontent.com/u/34811668"
        },
        {
          "username": "Muxutruk2",
          "href": "https://github.com/Muxutruk2",
          "avatar": "https://avatars.githubusercontent.com/u/156070698"
        },
        {
          "username": "soredake",
          "href": "https://github.com/soredake",
          "avatar": "https://avatars.githubusercontent.com/u/5204968"
        },
        {
          "username": "candrapersada",
          "href": "https://github.com/candrapersada",
          "avatar": "https://avatars.githubusercontent.com/u/36833664"
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
      "forks": 2674,
      "added_stars": 1261,
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
      "author": "datawhalechina",
      "repo": "easy-vibe",
      "avatar": "https://github.com/datawhalechina.png",
      "repo_link": "https://github.com/datawhalechina/easy-vibe",
      "desc": "easy vibe 一起 vibe ! Learn Vibe Coding From 0 to 1 ｜ Vibe Coding 零基础教程 ｜ 产品原型、AI 能力集成、前后端开发、多平台应用开发教程 ｜ Tutorial on Product Prototype, AI Capability Integration, Frontend and Backend Development, and Multi-platform Application Development",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 318,
      "added_stars": 396,
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
      "forks": 5784,
      "added_stars": 299,
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
      "author": "Mintplex-Labs",
      "repo": "anything-llm",
      "avatar": "https://github.com/Mintplex-Labs.png",
      "repo_link": "https://github.com/Mintplex-Labs/anything-llm",
      "desc": "The all-in-one AI productivity accelerator. On device and privacy first with no annoying setup or configration.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6051,
      "added_stars": 734,
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
      "author": "jarrodwatts",
      "repo": "claude-hud",
      "avatar": "https://github.com/jarrodwatts.png",
      "repo_link": "https://github.com/jarrodwatts/claude-hud",
      "desc": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 203,
      "added_stars": 347,
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
      "author": "is-a-dev",
      "repo": "register",
      "avatar": "https://github.com/is-a-dev.png",
      "repo_link": "https://github.com/is-a-dev/register",
      "desc": "Grab your own sweet-looking '.is-a.dev' subdomain.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 18875,
      "added_stars": 308,
      "builtBy": [
        {
          "username": "wdhdev",
          "href": "https://github.com/wdhdev",
          "avatar": "https://avatars.githubusercontent.com/u/87287585"
        },
        {
          "username": "DEV-DIBSTER",
          "href": "https://github.com/DEV-DIBSTER",
          "avatar": "https://avatars.githubusercontent.com/u/76603072"
        },
        {
          "username": "iostpa",
          "href": "https://github.com/iostpa",
          "avatar": "https://avatars.githubusercontent.com/u/69630113"
        },
        {
          "username": "STICKnoLOGIC",
          "href": "https://github.com/STICKnoLOGIC",
          "avatar": "https://avatars.githubusercontent.com/u/65322242"
        },
        {
          "username": "orangci",
          "href": "https://github.com/orangci",
          "avatar": "https://avatars.githubusercontent.com/u/90866414"
        }
      ]
    },
    {
      "author": "usebruno",
      "repo": "bruno",
      "avatar": "https://github.com/usebruno.png",
      "repo_link": "https://github.com/usebruno/bruno",
      "desc": "Opensource IDE For Exploring and Testing API's (lightweight alternative to Postman/Insomnia)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2180,
      "added_stars": 346,
      "builtBy": [
        {
          "username": "helloanoop",
          "href": "https://github.com/helloanoop",
          "avatar": "https://avatars.githubusercontent.com/u/9350733"
        },
        {
          "username": "lohxt1",
          "href": "https://github.com/lohxt1",
          "avatar": "https://avatars.githubusercontent.com/u/25679466"
        },
        {
          "username": "lohit-bruno",
          "href": "https://github.com/lohit-bruno",
          "avatar": "https://avatars.githubusercontent.com/u/159901171"
        },
        {
          "username": "pooja-bruno",
          "href": "https://github.com/pooja-bruno",
          "avatar": "https://avatars.githubusercontent.com/u/191850912"
        },
        {
          "username": "naman-bruno",
          "href": "https://github.com/naman-bruno",
          "avatar": "https://avatars.githubusercontent.com/u/194787292"
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
      "forks": 2311,
      "added_stars": 3671,
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
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 121,
      "added_stars": 2442,
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
      "forks": 1338,
      "added_stars": 73,
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
      "author": "expo",
      "repo": "skills",
      "avatar": "https://github.com/expo.png",
      "repo_link": "https://github.com/expo/skills",
      "desc": "A collection of AI agent skills for working with Expo projects and Expo Application Services",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 62,
      "added_stars": 124,
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
          "username": "Kudo",
          "href": "https://github.com/Kudo",
          "avatar": "https://avatars.githubusercontent.com/u/46429"
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
  "source": "devto",
  "tag": "ai",
  "sort": "top",
  "items": [
    {
      "title": "Congrats to the GitHub Copilot CLI Challenge Winners!",
      "description": "The results are in! Thank you all so much for your patience as we reviewed over 400 submissions for...",
      "url": "https://dev.to/devteam/congrats-to-the-github-copilot-cli-challenge-winners-2240",
      "tags": "devchallenge, githubchallenge, cli, ai",
      "reactions": 92,
      "comments": 38,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "3 words worth a billion dollars: Drift to Determinism (DriDe)",
      "description": "I doubt I am the first to come up with this concept, but I am probably the first to name it.  Drift...",
      "url": "https://dev.to/grahamthedev/3-words-worth-a-billion-dollars-drift-to-determinism-dride-dej",
      "tags": "webdev, ai, automation, architecture",
      "reactions": 51,
      "comments": 30,
      "reading_time": 7,
      "author": "grahamthedev"
    },
    {
      "title": "Building a Text-to-Speech Engine in Pure C",
      "description": "Building a minimal Text-to-Speech engine in pure C using Qwen3-TTS without ML frameworks.",
      "url": "https://dev.to/gabrielemastrapasqua/building-a-text-to-speech-engine-in-pure-c-59h4",
      "tags": "c, ai, tts, opensource",
      "reactions": 2,
      "comments": 0,
      "reading_time": 5,
      "author": "gabrielemastrapasqua"
    },
    {
      "title": "Mapping the Territory",
      "description": "We thought the \"Multi-Repo Verse\" would save us from spaghetti code. Instead, we traded a tangled web...",
      "url": "https://dev.to/tico/mapping-the-territory-3n55",
      "tags": "ai, devops, infrastructureascode, graph",
      "reactions": 5,
      "comments": 1,
      "reading_time": 4,
      "author": "tico"
    },
    {
      "title": "The New AI Stack Every Developer Should Understand",
      "description": "Invitation: Now, I am officially active on X (Twitter). For new DevOps ideas, you can join me on X...",
      "url": "https://dev.to/jaideepparashar/the-new-ai-stack-every-developer-should-understand-3ejl",
      "tags": "webdev, ai, devops, beginners",
      "reactions": 16,
      "comments": 1,
      "reading_time": 4,
      "author": "jaideepparashar"
    },
    {
      "title": "I Tracked 3,200 Manus AI Tasks for 94 Days — 72.4% of Credit Waste Comes from Just 3 Patterns",
      "description": "After spending 3 months tracking every Manus AI task I ran — over 3,200 tasks across web development,...",
      "url": "https://dev.to/rafsilva85/i-analyzed-10000-manus-ai-tasks-and-found-73-of-credit-waste-comes-from-just-3-patterns-iip",
      "tags": "ai, productivity, opensource, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "rafsilva85"
    },
    {
      "title": "229 Demos, 0 Signups — Here's What We Are Doing Next",
      "description": "We have been building Agenium in public. This is the honest version of what happened.           What...",
      "url": "https://dev.to/agenium_platform/229-demos-0-signups-heres-what-we-are-doing-next-2bhk",
      "tags": "webdev, ai, agentprotocol, buildingpublic",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "agenium_platform"
    },
    {
      "title": "Unlocking AI Resilience: Mastering State Persistence with LangGraph and PostgreSQL",
      "description": "Imagine building an autonomous AI agent that can conduct deep research, manage complex workflows, or...",
      "url": "https://dev.to/programmingcentral/unlocking-ai-resilience-mastering-state-persistence-with-langgraph-and-postgresql-50h0",
      "tags": "javascript, typescript, ai, webdev",
      "reactions": 3,
      "comments": 2,
      "reading_time": 6,
      "author": "programmingcentral"
    },
    {
      "title": "I built a startup validator that queries 40+ live sources. Here's what I learned.",
      "description": "I kept watching friends burn 6 months building things nobody wanted. Every time I asked \"who's your...",
      "url": "https://dev.to/vxncxnx/i-scanned-2500-startup-ideas-with-ai-here-is-what-the-data-says-about-why-most-fail-nh3",
      "tags": "webdev, ai, startup, buildinpublic",
      "reactions": 3,
      "comments": 0,
      "reading_time": 3,
      "author": "vxncxnx"
    },
    {
      "title": "AI Agent Logging vs Monitoring: Most Teams Confuse These",
      "description": "Most teams building AI agent systems believe they have monitoring in place.  What they actually have...",
      "url": "https://dev.to/askpatrick/ai-agent-logging-vs-monitoring-most-teams-confuse-these-1g20",
      "tags": "ai, agents, devops, programming",
      "reactions": 1,
      "comments": 1,
      "reading_time": 2,
      "author": "askpatrick"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "celadevra_",
      "descendants": 39,
      "id": 47317616,
      "kids": [
        47319463,
        47318933,
        47318060,
        47318361,
        47319808,
        47318799,
        47319336,
        47318817,
        47318485,
        47319839,
        47318199,
        47318146,
        47318302,
        47318403,
        47318266,
        47318835
      ],
      "score": 175,
      "time": 1773101804,
      "title": "Two Years of Emacs Solo",
      "type": "story",
      "url": "https://www.rahuljuliato.com/posts/emacs-solo-two-years"
    },
    {
      "by": "swolpers",
      "descendants": 13,
      "id": 47319294,
      "kids": [
        47319928,
        47319678
      ],
      "score": 15,
      "time": 1773119574,
      "title": "Claude Code, Claude Cowork and Codex #5",
      "type": "story",
      "url": "https://thezvi.wordpress.com/2026/03/09/claude-code-claude-cowork-and-codex-5/"
    },
    {
      "by": "philippemnoel",
      "descendants": 2,
      "id": 47302493,
      "kids": [
        47319743,
        47319488,
        47319844
      ],
      "score": 36,
      "time": 1773010457,
      "title": "Optimizing Top K in Postgres",
      "type": "story",
      "url": "https://www.paradedb.com/blog/optimizing-top-k"
    },
    {
      "by": "TMWNN",
      "descendants": 4,
      "id": 47279633,
      "kids": [
        47319951,
        47319859,
        47319944,
        47319599
      ],
      "score": 31,
      "time": 1772824284,
      "title": "Lotus 1-2-3 on the PC with DOS",
      "type": "story",
      "url": "https://stonetools.ghost.io/lotus123-dos/"
    },
    {
      "by": "imadr",
      "descendants": 69,
      "id": 47311815,
      "kids": [
        47313477,
        47313184,
        47318031,
        47316867,
        47312761,
        47313271,
        47314150,
        47312560,
        47318094,
        47315549,
        47313066,
        47313015,
        47317913,
        47313856,
        47316909,
        47313302,
        47314037,
        47315614,
        47315206,
        47316564,
        47312698,
        47315055,
        47313041,
        47312494,
        47317148,
        47316283,
        47313072,
        47317909,
        47312571,
        47312100,
        47312773,
        47312858,
        47313543,
        47312451,
        47312809,
        47318822
      ],
      "score": 457,
      "time": 1773075742,
      "title": "Building a Procedural Hex Map with Wave Function Collapse",
      "type": "story",
      "url": "https://felixturner.github.io/hex-map-wfc/article/"
    },
    {
      "by": "jnord",
      "descendants": 62,
      "id": 47317132,
      "kids": [
        47319954,
        47319728,
        47319528,
        47319205,
        47319324,
        47319008,
        47319153,
        47319492,
        47319820,
        47319473,
        47319066,
        47317367,
        47319221,
        47319372
      ],
      "score": 115,
      "time": 1773098526,
      "title": "No, it doesn't cost Anthropic $5k per Claude Code user",
      "type": "story",
      "url": "https://martinalderson.com/posts/no-it-doesnt-cost-anthropic-5k-per-claude-code-user/"
    },
    {
      "by": "jenthoven",
      "descendants": 81,
      "id": 47318421,
      "kids": [
        47319942,
        47319710,
        47318953,
        47319922,
        47319259,
        47318869,
        47319295,
        47319381,
        47319346,
        47318956,
        47319738,
        47319215,
        47318880,
        47319740,
        47318886,
        47319822,
        47319106,
        47319334
      ],
      "score": 108,
      "time": 1773109492,
      "title": "Learnings from paying artists royalties for AI-generated art",
      "type": "story",
      "url": "https://www.kapwing.com/blog/learnings-from-paying-artists-royalties-for-ai-generated-art/"
    },
    {
      "by": "smith-kyle",
      "descendants": 39,
      "id": 47280654,
      "kids": [
        47318672,
        47319943,
        47319938,
        47317418,
        47319695,
        47317483,
        47319494,
        47317734,
        47318449,
        47318319,
        47318351,
        47317420,
        47318580,
        47317485,
        47317852,
        47318017,
        47317754,
        47319236,
        47318003,
        47319296,
        47318415,
        47318216
      ],
      "score": 157,
      "time": 1772828870,
      "title": "Show HN: Remotely use my guitar tuner",
      "type": "story",
      "url": "https://realtuner.online/"
    },
    {
      "by": "TechTechTech",
      "descendants": 82,
      "id": 47311484,
      "kids": [
        47314161,
        47317639,
        47313877,
        47312898,
        47318852,
        47314784,
        47313361,
        47313282,
        47316675,
        47312829,
        47313741,
        47314697,
        47313807,
        47316137,
        47316070
      ],
      "score": 297,
      "time": 1773074619,
      "title": "JSLinux Now Supports x86_64",
      "type": "story",
      "url": "https://bellard.org/jslinux/"
    },
    {
      "by": "dahlia",
      "descendants": 457,
      "id": 47310160,
      "kids": [
        47316829,
        47315293,
        47311665,
        47315788,
        47315401,
        47311673,
        47312617,
        47317797,
        47312824,
        47319449,
        47312099,
        47315593,
        47315992,
        47319240,
        47311957,
        47311632,
        47312660,
        47315989,
        47319144,
        47319529,
        47318442,
        47317604,
        47313320,
        47312203,
        47319034,
        47312198,
        47317860,
        47317446,
        47318819,
        47316731,
        47315284,
        47312369,
        47312573,
        47312363,
        47317267,
        47317800,
        47318461,
        47316944,
        47317605,
        47312083,
        47316513,
        47312403,
        47317628,
        47311975,
        47315479,
        47312808,
        47314108,
        47318214,
        47319607,
        47312109,
        47312531,
        47317201,
        47316020,
        47312333,
        47311802,
        47318400,
        47316917,
        47316663,
        47314451,
        47315764,
        47319425,
        47312190,
        47317376,
        47317843,
        47314146,
        47312551,
        47316344,
        47313062,
        47318994,
        47313555,
        47311915,
        47315326,
        47317941,
        47312268,
        47311773,
        47317401,
        47317258,
        47317147,
        47317021,
        47316194,
        47315761,
        47315490,
        47319445,
        47314380,
        47312140,
        47311823,
        47315559,
        47311772,
        47311893,
        47317225,
        47312145,
        47311860,
        47311732
      ],
      "score": 419,
      "time": 1773069173,
      "title": "Is legal the same as legitimate: AI reimplementation and the erosion of copyleft",
      "type": "story",
      "url": "https://writings.hongminhee.org/2026/03/legal-vs-legitimate/"
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
      "by": "celadevra_",
      "descendants": 39,
      "id": 47317616,
      "kids": [
        47319463,
        47318933,
        47318060,
        47318361,
        47319808,
        47318799,
        47319336,
        47318817,
        47318485,
        47319839,
        47318199,
        47318146,
        47318302,
        47318403,
        47318266,
        47318835
      ],
      "score": 175,
      "time": 1773101804,
      "title": "Two Years of Emacs Solo",
      "type": "story",
      "url": "https://www.rahuljuliato.com/posts/emacs-solo-two-years"
    },
    {
      "by": "swolpers",
      "descendants": 13,
      "id": 47319294,
      "kids": [
        47319928,
        47319678
      ],
      "score": 15,
      "time": 1773119574,
      "title": "Claude Code, Claude Cowork and Codex #5",
      "type": "story",
      "url": "https://thezvi.wordpress.com/2026/03/09/claude-code-claude-cowork-and-codex-5/"
    },
    {
      "by": "philippemnoel",
      "descendants": 2,
      "id": 47302493,
      "kids": [
        47319743,
        47319488,
        47319844
      ],
      "score": 36,
      "time": 1773010457,
      "title": "Optimizing Top K in Postgres",
      "type": "story",
      "url": "https://www.paradedb.com/blog/optimizing-top-k"
    },
    {
      "by": "TMWNN",
      "descendants": 4,
      "id": 47279633,
      "kids": [
        47319951,
        47319859,
        47319944,
        47319599
      ],
      "score": 31,
      "time": 1772824284,
      "title": "Lotus 1-2-3 on the PC with DOS",
      "type": "story",
      "url": "https://stonetools.ghost.io/lotus123-dos/"
    },
    {
      "by": "imadr",
      "descendants": 69,
      "id": 47311815,
      "kids": [
        47313477,
        47313184,
        47318031,
        47316867,
        47312761,
        47313271,
        47314150,
        47312560,
        47318094,
        47315549,
        47313066,
        47313015,
        47317913,
        47313856,
        47316909,
        47313302,
        47314037,
        47315614,
        47315206,
        47316564,
        47312698,
        47315055,
        47313041,
        47312494,
        47317148,
        47316283,
        47313072,
        47317909,
        47312571,
        47312100,
        47312773,
        47312858,
        47313543,
        47312451,
        47312809,
        47318822
      ],
      "score": 457,
      "time": 1773075742,
      "title": "Building a Procedural Hex Map with Wave Function Collapse",
      "type": "story",
      "url": "https://felixturner.github.io/hex-map-wfc/article/"
    },
    {
      "by": "jnord",
      "descendants": 62,
      "id": 47317132,
      "kids": [
        47319954,
        47319728,
        47319528,
        47319205,
        47319324,
        47319008,
        47319153,
        47319492,
        47319820,
        47319473,
        47319066,
        47317367,
        47319221,
        47319372
      ],
      "score": 115,
      "time": 1773098526,
      "title": "No, it doesn't cost Anthropic $5k per Claude Code user",
      "type": "story",
      "url": "https://martinalderson.com/posts/no-it-doesnt-cost-anthropic-5k-per-claude-code-user/"
    },
    {
      "by": "jenthoven",
      "descendants": 81,
      "id": 47318421,
      "kids": [
        47319942,
        47319710,
        47318953,
        47319922,
        47319259,
        47318869,
        47319295,
        47319381,
        47319346,
        47318956,
        47319738,
        47319215,
        47318880,
        47319740,
        47318886,
        47319822,
        47319106,
        47319334
      ],
      "score": 108,
      "time": 1773109492,
      "title": "Learnings from paying artists royalties for AI-generated art",
      "type": "story",
      "url": "https://www.kapwing.com/blog/learnings-from-paying-artists-royalties-for-ai-generated-art/"
    },
    {
      "by": "smith-kyle",
      "descendants": 39,
      "id": 47280654,
      "kids": [
        47318672,
        47319943,
        47319938,
        47317418,
        47319695,
        47317483,
        47319494,
        47317734,
        47318449,
        47318319,
        47318351,
        47317420,
        47318580,
        47317485,
        47317852,
        47318017,
        47317754,
        47319236,
        47318003,
        47319296,
        47318415,
        47318216
      ],
      "score": 157,
      "time": 1772828870,
      "title": "Show HN: Remotely use my guitar tuner",
      "type": "story",
      "url": "https://realtuner.online/"
    },
    {
      "by": "TechTechTech",
      "descendants": 82,
      "id": 47311484,
      "kids": [
        47314161,
        47317639,
        47313877,
        47312898,
        47318852,
        47314784,
        47313361,
        47313282,
        47316675,
        47312829,
        47313741,
        47314697,
        47313807,
        47316137,
        47316070
      ],
      "score": 297,
      "time": 1773074619,
      "title": "JSLinux Now Supports x86_64",
      "type": "story",
      "url": "https://bellard.org/jslinux/"
    },
    {
      "by": "dahlia",
      "descendants": 457,
      "id": 47310160,
      "kids": [
        47316829,
        47315293,
        47311665,
        47315788,
        47315401,
        47311673,
        47312617,
        47317797,
        47312824,
        47319449,
        47312099,
        47315593,
        47315992,
        47319240,
        47311957,
        47311632,
        47312660,
        47315989,
        47319144,
        47319529,
        47318442,
        47317604,
        47313320,
        47312203,
        47319034,
        47312198,
        47317860,
        47317446,
        47318819,
        47316731,
        47315284,
        47312369,
        47312573,
        47312363,
        47317267,
        47317800,
        47318461,
        47316944,
        47317605,
        47312083,
        47316513,
        47312403,
        47317628,
        47311975,
        47315479,
        47312808,
        47314108,
        47318214,
        47319607,
        47312109,
        47312531,
        47317201,
        47316020,
        47312333,
        47311802,
        47318400,
        47316917,
        47316663,
        47314451,
        47315764,
        47319425,
        47312190,
        47317376,
        47317843,
        47314146,
        47312551,
        47316344,
        47313062,
        47318994,
        47313555,
        47311915,
        47315326,
        47317941,
        47312268,
        47311773,
        47317401,
        47317258,
        47317147,
        47317021,
        47316194,
        47315761,
        47315490,
        47319445,
        47314380,
        47312140,
        47311823,
        47315559,
        47311772,
        47311893,
        47317225,
        47312145,
        47311860,
        47311732
      ],
      "score": 419,
      "time": 1773069173,
      "title": "Is legal the same as legitimate: AI reimplementation and the erosion of copyleft",
      "type": "story",
      "url": "https://writings.hongminhee.org/2026/03/legal-vs-legitimate/"
    },
    {
      "by": "robenkleene",
      "descendants": 9,
      "id": 47279761,
      "kids": [
        47319945,
        47286151,
        47282484
      ],
      "score": 23,
      "time": 1772824818,
      "title": "macOS Tahoe windows have different corner radiuses",
      "type": "story",
      "url": "https://lapcatsoftware.com/articles/2026/3/1.html"
    },
    {
      "by": "TigerUniversity",
      "descendants": 19,
      "id": 47276343,
      "kids": [
        47318792,
        47318414,
        47318690,
        47319504,
        47318626,
        47318547,
        47318478,
        47319064,
        47319505
      ],
      "score": 81,
      "time": 1772811645,
      "title": "Darkrealms BBS",
      "type": "story",
      "url": "http://www.darkrealms.ca/"
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
      "title": "Ghostty 1.3.0",
      "url": "https://ghostty.org/docs/install/release-notes/1-3-0",
      "score": 106,
      "comments": 32,
      "tags": [
        "release"
      ],
      "id": "flbwoi"
    },
    {
      "title": "Returning To Rails in 2026",
      "url": "https://www.markround.com/blog/2026/03/05/returning-to-rails-in-2026/",
      "score": 39,
      "comments": 19,
      "tags": [
        "programming",
        "ruby",
        "web"
      ],
      "id": "jreqtw"
    },
    {
      "title": "Your LLM Doesn't Write Correct Code. It Writes Plausible Code",
      "url": "https://blog.katanaquant.com/p/your-llm-doesnt-write-correct-code",
      "score": 51,
      "comments": 7,
      "tags": [
        "vibecoding"
      ],
      "id": "dnqcvh"
    },
    {
      "title": "Production query plans without production data",
      "url": "https://boringsql.com/posts/portable-stats/",
      "score": 48,
      "comments": 7,
      "tags": [
        "databases",
        "performance"
      ],
      "id": "o8vbb7"
    },
    {
      "title": "Do the Illegible",
      "url": "https://ashwinsundar.com/posts/legibility-and-programming/",
      "score": 7,
      "comments": 3,
      "tags": [
        "culture"
      ],
      "id": "ckr3r2"
    },
    {
      "title": "Meta’s Renewed Commitment to jemalloc",
      "url": "https://engineering.fb.com/2026/03/02/data-infrastructure/investing-in-infrastructure-metas-renewed-commitment-to-jemalloc/",
      "score": 21,
      "comments": 4,
      "tags": [
        "programming"
      ],
      "id": "k6vpjh"
    },
    {
      "title": "Abusing .arpa, the TLD that isn’t supposed to host anything",
      "url": "https://www.infoblox.com/blog/threat-intelligence/abusing-arpa-the-tld-that-isnt-supposed-to-host-anything/",
      "score": 16,
      "comments": 6,
      "tags": [
        "browsers",
        "practices"
      ],
      "id": "hsegku"
    },
    {
      "title": "Video Conferencing with Postgres",
      "url": "https://planetscale.com/blog/video-conferencing-with-postgres",
      "score": 20,
      "comments": 4,
      "tags": [
        "databases"
      ],
      "id": "yg9m2q"
    },
    {
      "title": "I don't know if my job will still exist in ten years",
      "url": "https://www.seangoedecke.com/will-my-job-still-exist/",
      "score": 17,
      "comments": 12,
      "tags": [
        "vibecoding"
      ],
      "id": "sd1rsy"
    },
    {
      "title": "Price-Checking Zerocopy's Zero Cost Abstractions",
      "url": "https://jack.wrenn.fyi/blog/price-check/",
      "score": 18,
      "comments": 1,
      "tags": [
        "performance",
        "rust"
      ],
      "id": "nkmxnp"
    }
  ]
}
```

