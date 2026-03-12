# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-12 07:13:22 UTC

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
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-1889",
      "tags": "top7, discuss",
      "reactions": 44,
      "comments": 17,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "I Built a Secure Planning Agent with MCP and Keycard",
      "description": "My workday is scattered across many disconnected tools: Google Calendar, Linear, Gmail, Google Docs,...",
      "url": "https://dev.to/kimmaida/i-built-a-secure-planning-agent-with-mcp-and-keycard-324a",
      "tags": "agents, mcp, productivity, showdev",
      "reactions": 32,
      "comments": 0,
      "reading_time": 12,
      "author": "kimmaida"
    },
    {
      "title": "What Quitting My Job Taught Me About Tech",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience  So it is finally time to...",
      "url": "https://dev.to/konark_13/what-quitting-my-job-taught-me-about-tech-3no0",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 25,
      "comments": 16,
      "reading_time": 7,
      "author": "konark_13"
    },
    {
      "title": "Getting Started with Gemini CLI",
      "description": "For Google Cloud's new weekly livestream series, we started with something every developer and...",
      "url": "https://dev.to/googleai/getting-started-with-gemini-cli-17nm",
      "tags": "gemini, cli, ai, beginners",
      "reactions": 39,
      "comments": 2,
      "reading_time": 3,
      "author": "greggyb"
    },
    {
      "title": "In the AI Agents Era, Why Waste Time Building a Framework?",
      "description": "Not about the result. About the zen of solving your own annoyances one weekend at a time",
      "url": "https://dev.to/sleewoo/in-the-ai-agents-era-why-waste-time-building-a-framework-oni",
      "tags": "typescript, javascript, node, webdev",
      "reactions": 33,
      "comments": 0,
      "reading_time": 3,
      "author": "sleewoo"
    },
    {
      "title": "The Diplomatic Core: Shared Logic in a Multi-Framework World",
      "description": "This is the third part in a tenuously linked series defending JavaScript singletons in a modern...",
      "url": "https://dev.to/link2twenty/the-diplomatic-core-shared-logic-in-a-multi-framework-world-36m8",
      "tags": "microfrontend, webdev, react, vue",
      "reactions": 21,
      "comments": 1,
      "reading_time": 4,
      "author": "link2twenty"
    },
    {
      "title": "When AI Writes the Code… Who Takes Responsibility?",
      "description": "Late one night in Kolkata, a developer sat staring at a glowing screen.  That developer was me.  Two...",
      "url": "https://dev.to/subhrangsu90/when-ai-writes-the-code-who-takes-responsibility-19fc",
      "tags": "ai, programming, agents, webdev",
      "reactions": 45,
      "comments": 17,
      "reading_time": 4,
      "author": "subhrangsu90"
    },
    {
      "title": "Gemini 2.5 Flash vs Claude 3.7 Sonnet: 4 Production Constraints That Made the Decision for Me",
      "description": "An evaluation of the Gemini 2.5 flash and Claude 3.7 Sonnet model for an agentic engine.  I had a...",
      "url": "https://dev.to/dumebii/gemini-25-flash-vs-claude-37-sonnet-4-production-constraints-that-made-the-decision-for-me-bib",
      "tags": "webdev, javascript, showdev, nextjs",
      "reactions": 43,
      "comments": 19,
      "reading_time": 11,
      "author": "dumebii"
    },
    {
      "title": "Your AI code reviewer has no one to disagree with",
      "description": "Why single-pass AI code review is fundamentally broken and what happens when you make AI reviewers argue with each other first.",
      "url": "https://dev.to/spencermarx/your-ai-code-reviewer-has-no-one-to-disagree-with-f1j",
      "tags": "opensource, ai, codereview, claudecode",
      "reactions": 34,
      "comments": 0,
      "reading_time": 5,
      "author": "spencermarx"
    },
    {
      "title": "I Reverse-Engineered an Undocumented API and Shipped 2 npm Packages in 4 Days — with Claude Code",
      "description": "A freelancer's frustration, an undocumented API, and an AI pair-programmer. Here's how it went.      ...",
      "url": "https://dev.to/yabbal/i-reverse-engineered-an-undocumented-api-and-shipped-2-npm-packages-in-4-days-with-claude-code-5cm9",
      "tags": "ai, cli, typescript, tooling",
      "reactions": 27,
      "comments": 0,
      "reading_time": 8,
      "author": "yabbal"
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
      "forks": 166,
      "added_stars": 805,
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
      "forks": 710,
      "added_stars": 152,
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
      "forks": 752,
      "added_stars": 466,
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
      "author": "is-a-dev",
      "repo": "register",
      "avatar": "https://github.com/is-a-dev.png",
      "repo_link": "https://github.com/is-a-dev/register",
      "desc": "Grab your own sweet-looking '.is-a.dev' subdomain.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 18973,
      "added_stars": 317,
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
      "author": "harvard-edge",
      "repo": "cs249r_book",
      "avatar": "https://github.com/harvard-edge.png",
      "repo_link": "https://github.com/harvard-edge/cs249r_book",
      "desc": "Machine Learning Systems",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2681,
      "added_stars": 1063,
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
      "author": "FreeTubeApp",
      "repo": "FreeTube",
      "avatar": "https://github.com/FreeTubeApp.png",
      "repo_link": "https://github.com/FreeTubeApp/FreeTube",
      "desc": "An Open Source YouTube app for privacy",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1341,
      "added_stars": 97,
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
      "author": "maboloshi",
      "repo": "github-chinese",
      "avatar": "https://github.com/maboloshi.png",
      "repo_link": "https://github.com/maboloshi/github-chinese",
      "desc": "GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1181,
      "added_stars": 304,
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
    },
    {
      "author": "datawhalechina",
      "repo": "easy-vibe",
      "avatar": "https://github.com/datawhalechina.png",
      "repo_link": "https://github.com/datawhalechina/easy-vibe",
      "desc": "easy vibe 👋 一起 vibe ! Learn Vibe Coding From 0 to 1 ｜ Vibe Coding 零基础教程 ｜ 产品原型、AI 能力集成、前后端开发、多平台应用开发教程 ｜ Tutorial on Product Prototype, AI Capability Integration, Frontend and Backend Development, and Multi-platform Application Development",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 331,
      "added_stars": 377,
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
      "author": "jarrodwatts",
      "repo": "claude-hud",
      "avatar": "https://github.com/jarrodwatts.png",
      "repo_link": "https://github.com/jarrodwatts/claude-hud",
      "desc": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 204,
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
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 153,
      "added_stars": 3759,
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
          "username": "JasonOA888",
          "href": "https://github.com/JasonOA888",
          "avatar": "https://avatars.githubusercontent.com/u/101583541"
        },
        {
          "username": "hobostay",
          "href": "https://github.com/hobostay",
          "avatar": "https://avatars.githubusercontent.com/u/110803307"
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
      "forks": 5800,
      "added_stars": 317,
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
      "forks": 2391,
      "added_stars": 3741,
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
      "reactions": 133,
      "comments": 59,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "I Built EchoHR: The HR System That Doesn’t Ghost You",
      "description": "This is a submission for the Notion MCP Challenge  Rejections hurt. But ghosting hurts even...",
      "url": "https://dev.to/ujja/i-built-echohr-the-hr-system-that-doesnt-ghost-you-1c2i",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 9,
      "comments": 5,
      "reading_time": 5,
      "author": "ujja"
    },
    {
      "title": "Getting Started with Gemini CLI",
      "description": "For Google Cloud's new weekly livestream series, we started with something every developer and...",
      "url": "https://dev.to/googleai/getting-started-with-gemini-cli-17nm",
      "tags": "gemini, cli, ai, beginners",
      "reactions": 40,
      "comments": 2,
      "reading_time": 3,
      "author": "greggyb"
    },
    {
      "title": "Why Bible APIs Should Be Version-Agnostic",
      "description": "When I tell developers I built a Bible reference resolver, I can see them mentally categorizing...",
      "url": "https://dev.to/derek_codes/why-bible-apis-should-be-version-agnostic-nfe",
      "tags": "api, ai, webdev, javascript",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "derek_codes"
    },
    {
      "title": "How I Built a Multimodal AI Virtual Stager with the Gemini API and Cloud Run",
      "description": "The Problem with Empty Rooms   If you have ever tried to sell a house, you know the...",
      "url": "https://dev.to/corporeal/how-i-built-a-multimodal-ai-virtual-stager-with-the-gemini-api-and-cloud-run-1cjg",
      "tags": "ai, googlecloud, javascript, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "corporeal"
    },
    {
      "title": "AI Regex Generator: Build Accurate Patterns from Plain English in Seconds",
      "description": "Regular expressions are one of the most powerful tools in a developer's arsenal — and one of the most...",
      "url": "https://dev.to/luoyao_dev/ai-regex-generator-build-accurate-patterns-from-plain-english-in-seconds-1123",
      "tags": "regex, ai, programming, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "luoyao_dev"
    },
    {
      "title": "How to add AI to your App in 5 minutes",
      "description": "Most AI integrations are overengineered.   Even basic tutorials on adding an AI assistant get mixed...",
      "url": "https://dev.to/copilotkit/how-to-add-ai-to-your-app-in-5-minutes-2b0d",
      "tags": "ai, opensource, tutorial, programming",
      "reactions": 71,
      "comments": 9,
      "reading_time": 10,
      "author": "anmolbaranwal"
    },
    {
      "title": "LLM Hallucination and Bias Detection in Regulated Enterprise Systems",
      "description": "A Risk-Centered Analytical Framework for Reliable and Responsible...",
      "url": "https://dev.to/suresh_babunarra_c24d754/llm-hallucination-and-bias-detection-in-regulated-enterprise-systems-18p3",
      "tags": "ai, llm, machinelearning, systemdesign",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "suresh_babunarra_c24d754"
    },
    {
      "title": "Why Asking an LLM for JSON Isn’t Enough",
      "description": "When I first learned prompting, I assumed something simple.  If I needed structured data from an LLM,...",
      "url": "https://dev.to/dev-in-progress/why-asking-an-llm-for-json-isnt-enough-1n8a",
      "tags": "webdev, ai, machinelearning, llm",
      "reactions": 10,
      "comments": 14,
      "reading_time": 4,
      "author": "dev-in-progress"
    },
    {
      "title": "Build Your Own Longevity Researcher: RAG with Qdrant and 5,000+ PubMed Papers 🧬📚",
      "description": "We are currently living in a golden age of longevity science. Every day, hundreds of new papers on...",
      "url": "https://dev.to/wellallytech/build-your-own-longevity-researcher-rag-with-qdrant-and-5000-pubmed-papers-5fjg",
      "tags": "rag, ai, python, discuss",
      "reactions": 2,
      "comments": 0,
      "reading_time": 3,
      "author": "wellallytech"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "remywang",
      "descendants": 80,
      "id": 47344548,
      "kids": [
        47346261,
        47346401,
        47347248,
        47346132,
        47346626,
        47345880,
        47347445,
        47347370,
        47345624,
        47346939,
        47346373,
        47345931,
        47346403,
        47345825,
        47345497,
        47346881,
        47346436,
        47346184,
        47346159,
        47345905,
        47346412,
        47345368,
        47346177,
        47346570,
        47346502,
        47345093,
        47347058,
        47345728
      ],
      "score": 207,
      "time": 1773274939,
      "title": "Show HN: s@: decentralized social networking over static sites",
      "type": "story",
      "url": "http://satproto.org/"
    },
    {
      "by": "stanislavb",
      "descendants": 2,
      "id": 47347064,
      "kids": [
        47347409
      ],
      "score": 11,
      "time": 1773295606,
      "title": "Returning to Rails in 2026",
      "type": "story",
      "url": "https://www.markround.com/blog/2026/03/05/returning-to-rails-in-2026/"
    },
    {
      "by": "robpalmer",
      "descendants": 201,
      "id": 47336989,
      "kids": [
        47343541,
        47342457,
        47341747,
        47337508,
        47338085,
        47337494,
        47337601,
        47344780,
        47338589,
        47337150,
        47345243,
        47339280,
        47340336,
        47346416,
        47345123,
        47339791,
        47343469,
        47338565,
        47337807,
        47338843,
        47339371,
        47345021,
        47338054,
        47339578,
        47337443,
        47340545,
        47337387,
        47338411,
        47337452,
        47343295,
        47347204,
        47345087,
        47337094,
        47338312,
        47337426,
        47338606,
        47339852,
        47337903,
        47337882,
        47337415,
        47340006,
        47344448,
        47338470,
        47338572,
        47346666,
        47339345,
        47339799,
        47339812
      ],
      "score": 631,
      "time": 1773243350,
      "title": "Temporal: The 9-year journey to fix time in JavaScript",
      "type": "story",
      "url": "https://bloomberg.github.io/js-blog/post/temporal/"
    },
    {
      "by": "mikece",
      "descendants": 173,
      "id": 47331811,
      "kids": [
        47337872,
        47337922,
        47347458,
        47340164,
        47343451,
        47340102,
        47347307,
        47339527,
        47339076,
        47338253,
        47338119,
        47337771,
        47338199,
        47337685,
        47346699,
        47345980,
        47345312,
        47339258,
        47346940,
        47346444,
        47339574,
        47345841,
        47338676,
        47339064,
        47344438,
        47340725,
        47339117,
        47343433,
        47343513,
        47339141,
        47338049,
        47346762,
        47340883,
        47338967,
        47339134,
        47339595,
        47340222,
        47338328,
        47338590,
        47344414,
        47332172,
        47338612,
        47339641,
        47338302,
        47344139,
        47337704
      ],
      "score": 506,
      "time": 1773204286,
      "title": "Making WebAssembly a first-class language on the Web",
      "type": "story",
      "url": "https://hacks.mozilla.org/2026/02/making-webassembly-a-first-class-language-on-the-web/"
    },
    {
      "by": "akkartik",
      "descendants": 2,
      "id": 47310617,
      "kids": [
        47347354,
        47347433
      ],
      "score": 23,
      "time": 1773071282,
      "title": "Datahäxan",
      "type": "story",
      "url": "https://0dd.company/galleries/witches/7.html"
    },
    {
      "by": "giuliomagnifico",
      "descendants": 20,
      "id": 47296568,
      "kids": [
        47345577,
        47345838,
        47347193,
        47345853,
        47346792,
        47345655,
        47346802,
        47345115
      ],
      "score": 120,
      "time": 1772970296,
      "title": "Tested: How Many Times Can a DVD±RW Be Rewritten? Methodology and Results",
      "type": "story",
      "url": "https://goughlui.com/2026/03/07/tested-how-many-times-can-a-dvd%C2%B1rw-be-rewritten-part-2-methodology-results/"
    },
    {
      "by": "aragilar",
      "descendants": 1,
      "id": 47308349,
      "kids": [
        47346808
      ],
      "score": 25,
      "time": 1773060431,
      "title": "WebPKI and You",
      "type": "story",
      "url": "https://blog.brycekerley.net/2026/03/08/webpki-and-you.html"
    },
    {
      "by": "mustaphah",
      "descendants": 85,
      "id": 47341645,
      "kids": [
        47346160,
        47345192,
        47344152,
        47344709,
        47343706,
        47346984,
        47345034,
        47346260,
        47345315,
        47346688,
        47344261,
        47344583,
        47344701,
        47343923,
        47344938,
        47345731,
        47344426,
        47345782,
        47344679,
        47342914
      ],
      "score": 210,
      "time": 1773262612,
      "title": "Many SWE-bench-Passing PRs would not be merged",
      "type": "story",
      "url": "https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/"
    },
    {
      "by": "usefulposter",
      "descendants": 1246,
      "id": 47340079,
      "kids": [
        47346032,
        47347360,
        47347425,
        47345895,
        47343241,
        47340981,
        47341249,
        47341705,
        47341591,
        47345456,
        47343248,
        47340520,
        47340483,
        47341726,
        47346631,
        47343161,
        47343025,
        47347271,
        47342052,
        47340166,
        47344782,
        47342204,
        47346307,
        47340964,
        47346734,
        47345716,
        47340369,
        47340877,
        47341204,
        47343747,
        47340603,
        47340474,
        47340669,
        47341070,
        47341062,
        47340351,
        47346404,
        47343063,
        47341602,
        47340727,
        47343851,
        47346965,
        47341477,
        47346506,
        47340911,
        47340779,
        47341915,
        47341438,
        47340643,
        47344013,
        47340706,
        47340526,
        47340982,
        47340360,
        47345669,
        47345423,
        47344473,
        47343138,
        47346377,
        47341481,
        47343514,
        47340843,
        47345508,
        47343126,
        47346196,
        47342865,
        47347200,
        47345392,
        47345906,
        47343118,
        47342653,
        47342322,
        47346813,
        47341237,
        47346448,
        47340598,
        47341932,
        47340650,
        47341129,
        47340742,
        47347119,
        47345662,
        47340734,
        47340451,
        47340922,
        47342538,
        47342427,
        47340569,
        47341541,
        47342706,
        47341133,
        47341268,
        47345272,
        47342004,
        47340842,
        47341420,
        47343050,
        47344940,
        47341271,
        47342990,
        47342609,
        47341044,
        47346967,
        47343376,
        47341850,
        47343297,
        47341514,
        47340488,
        47343261,
        47341423,
        47340464,
        47346310,
        47341569,
        47344004,
        47342300,
        47340899,
        47344226,
        47341722,
        47345269,
        47340558,
        47341738,
        47343356,
        47342247,
        47342956,
        47341583,
        47341054,
        47342645,
        47341552,
        47340798,
        47341269,
        47342798,
        47341653,
        47340847,
        47341061,
        47342036,
        47340737,
        47343067,
        47346437,
        47342438,
        47343218,
        47340368,
        47341658,
        47340266,
        47342466,
        47345035,
        47347006,
        47340440,
        47341737,
        47346176,
        47344797,
        47341692,
        47341870,
        47340403,
        47341606,
        47342713,
        47341199,
        47343060,
        47345709,
        47345470,
        47342610,
        47341092,
        47343993,
        47341236,
        47341535,
        47341143,
        47341912,
        47340854,
        47346359,
        47342043,
        47340462,
        47340394,
        47341450,
        47341005,
        47343273,
        47342917,
        47341783,
        47343545,
        47343833,
        47341983,
        47343639,
        47343581,
        47342745,
        47342629,
        47342495,
        47342455,
        47341031,
        47342375,
        47342075,
        47341231,
        47341968,
        47341401,
        47341167,
        47340905,
        47342557,
        47340534,
        47340479,
        47340478,
        47346073,
        47346069,
        47341846,
        47343875,
        47342476,
        47341780,
        47340373,
        47342035,
        47344396,
        47341488,
        47341032,
        47341021,
        47343890,
        47343777,
        47340337,
        47346003,
        47345991,
        47343091,
        47345320,
        47341080,
        47341034,
        47341113,
        47340455,
        47345554,
        47343243,
        47345184,
        47345105,
        47341280,
        47341130,
        47343954,
        47344941,
        47345907,
        47345460,
        47344496,
        47342651,
        47342184,
        47345175,
        47340370,
        47340998,
        47340743,
        47341052,
        47341586,
        47341964,
        47340524,
        47341088,
        47340322,
        47340601,
        47340388,
        47341331,
        47340089,
        47340480,
        47341307,
        47341557,
        47340722,
        47345193,
        47340358,
        47340471,
        47340862,
        47340836,
        47340496,
        47341008
      ],
      "score": 3298,
      "time": 1773257369,
      "title": "Don't post generated/AI-edited comments. HN is for conversation between humans",
      "type": "story",
      "url": "https://news.ycombinator.com/newsguidelines.html#generated"
    },
    {
      "by": "speckx",
      "descendants": 235,
      "id": 47339164,
      "kids": [
        47339362,
        47343574,
        47340359,
        47341248,
        47345848,
        47343234,
        47347278,
        47346498,
        47340500,
        47344470,
        47347221,
        47340445,
        47346623,
        47346121,
        47343446,
        47343824,
        47340232,
        47346590,
        47340111,
        47342905,
        47341633,
        47346341,
        47346630,
        47346425,
        47346994,
        47342579,
        47341294,
        47344303,
        47341934,
        47343090,
        47344329,
        47340137,
        47341926,
        47346675,
        47344279,
        47344290,
        47346124,
        47344043,
        47343426,
        47345397,
        47340561,
        47346186,
        47344157,
        47342411,
        47342849,
        47342044,
        47342132,
        47345148,
        47340093,
        47341763,
        47343677,
        47344395,
        47341700,
        47340948
      ],
      "score": 253,
      "text": "<a href=\"https:&#x2F;&#x2F;archive.ph&#x2F;DEwy7\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.ph&#x2F;DEwy7</a>",
      "time": 1773253050,
      "title": "I was interviewed by an AI bot for a job",
      "type": "story",
      "url": "https://www.theverge.com/featured-video/892850/i-was-interviewed-by-an-ai-bot-for-a-job"
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
      "by": "remywang",
      "descendants": 80,
      "id": 47344548,
      "kids": [
        47346261,
        47346401,
        47347248,
        47346132,
        47346626,
        47345880,
        47347445,
        47347370,
        47345624,
        47346939,
        47346373,
        47345931,
        47346403,
        47345825,
        47345497,
        47346881,
        47346436,
        47346184,
        47346159,
        47345905,
        47346412,
        47345368,
        47346177,
        47346570,
        47346502,
        47345093,
        47347058,
        47345728
      ],
      "score": 207,
      "time": 1773274939,
      "title": "Show HN: s@: decentralized social networking over static sites",
      "type": "story",
      "url": "http://satproto.org/"
    },
    {
      "by": "stanislavb",
      "descendants": 3,
      "id": 47347064,
      "kids": [
        47347409
      ],
      "score": 13,
      "time": 1773295606,
      "title": "Returning to Rails in 2026",
      "type": "story",
      "url": "https://www.markround.com/blog/2026/03/05/returning-to-rails-in-2026/"
    },
    {
      "by": "robpalmer",
      "descendants": 201,
      "id": 47336989,
      "kids": [
        47343541,
        47342457,
        47341747,
        47337508,
        47338085,
        47337494,
        47337601,
        47344780,
        47338589,
        47337150,
        47345243,
        47339280,
        47340336,
        47346416,
        47345123,
        47339791,
        47343469,
        47338565,
        47337807,
        47338843,
        47339371,
        47345021,
        47338054,
        47339578,
        47337443,
        47340545,
        47337387,
        47338411,
        47337452,
        47343295,
        47347204,
        47345087,
        47337094,
        47338312,
        47337426,
        47338606,
        47339852,
        47337903,
        47337882,
        47337415,
        47340006,
        47344448,
        47338470,
        47338572,
        47346666,
        47339345,
        47339799,
        47339812
      ],
      "score": 631,
      "time": 1773243350,
      "title": "Temporal: The 9-year journey to fix time in JavaScript",
      "type": "story",
      "url": "https://bloomberg.github.io/js-blog/post/temporal/"
    },
    {
      "by": "mikece",
      "descendants": 173,
      "id": 47331811,
      "kids": [
        47337872,
        47337922,
        47347458,
        47340164,
        47343451,
        47340102,
        47347307,
        47339527,
        47339076,
        47338253,
        47338119,
        47337771,
        47338199,
        47337685,
        47346699,
        47345980,
        47345312,
        47339258,
        47346940,
        47346444,
        47339574,
        47345841,
        47338676,
        47339064,
        47344438,
        47340725,
        47339117,
        47343433,
        47343513,
        47339141,
        47338049,
        47346762,
        47340883,
        47338967,
        47339134,
        47339595,
        47340222,
        47338328,
        47338590,
        47344414,
        47332172,
        47338612,
        47339641,
        47338302,
        47344139,
        47337704
      ],
      "score": 506,
      "time": 1773204286,
      "title": "Making WebAssembly a first-class language on the Web",
      "type": "story",
      "url": "https://hacks.mozilla.org/2026/02/making-webassembly-a-first-class-language-on-the-web/"
    },
    {
      "by": "akkartik",
      "descendants": 2,
      "id": 47310617,
      "kids": [
        47347354,
        47347433
      ],
      "score": 23,
      "time": 1773071282,
      "title": "Datahäxan",
      "type": "story",
      "url": "https://0dd.company/galleries/witches/7.html"
    },
    {
      "by": "giuliomagnifico",
      "descendants": 20,
      "id": 47296568,
      "kids": [
        47345577,
        47345838,
        47347193,
        47345853,
        47346792,
        47345655,
        47346802,
        47345115
      ],
      "score": 120,
      "time": 1772970296,
      "title": "Tested: How Many Times Can a DVD±RW Be Rewritten? Methodology and Results",
      "type": "story",
      "url": "https://goughlui.com/2026/03/07/tested-how-many-times-can-a-dvd%C2%B1rw-be-rewritten-part-2-methodology-results/"
    },
    {
      "by": "aragilar",
      "descendants": 1,
      "id": 47308349,
      "kids": [
        47346808
      ],
      "score": 25,
      "time": 1773060431,
      "title": "WebPKI and You",
      "type": "story",
      "url": "https://blog.brycekerley.net/2026/03/08/webpki-and-you.html"
    },
    {
      "by": "mustaphah",
      "descendants": 86,
      "id": 47341645,
      "kids": [
        47346160,
        47345192,
        47344152,
        47344709,
        47343706,
        47346984,
        47345034,
        47346260,
        47345315,
        47346688,
        47344261,
        47344583,
        47344701,
        47343923,
        47344938,
        47345731,
        47344426,
        47345782,
        47344679,
        47342914
      ],
      "score": 210,
      "time": 1773262612,
      "title": "Many SWE-bench-Passing PRs would not be merged",
      "type": "story",
      "url": "https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/"
    },
    {
      "by": "usefulposter",
      "descendants": 1246,
      "id": 47340079,
      "kids": [
        47346032,
        47347360,
        47345895,
        47343241,
        47347425,
        47340981,
        47341249,
        47341705,
        47341591,
        47345456,
        47343248,
        47340520,
        47340483,
        47341726,
        47346631,
        47343161,
        47343025,
        47347271,
        47342052,
        47340166,
        47344782,
        47342204,
        47346307,
        47340964,
        47346734,
        47340369,
        47345716,
        47340877,
        47341204,
        47343747,
        47340603,
        47340474,
        47340669,
        47341070,
        47341062,
        47340351,
        47346404,
        47343063,
        47341602,
        47340727,
        47343851,
        47341477,
        47346965,
        47346506,
        47340911,
        47340779,
        47341915,
        47341438,
        47340643,
        47344013,
        47340706,
        47340526,
        47340982,
        47340360,
        47345669,
        47345423,
        47344473,
        47343138,
        47346377,
        47341481,
        47343514,
        47340843,
        47345508,
        47343126,
        47346196,
        47342865,
        47347200,
        47345392,
        47345906,
        47343118,
        47342653,
        47342322,
        47341237,
        47346448,
        47346813,
        47340598,
        47341932,
        47340650,
        47341129,
        47340742,
        47340734,
        47345662,
        47347119,
        47340451,
        47340922,
        47342538,
        47342427,
        47340569,
        47341541,
        47342706,
        47341133,
        47341268,
        47345272,
        47342004,
        47340842,
        47341420,
        47343050,
        47344940,
        47341271,
        47342990,
        47342609,
        47341044,
        47343376,
        47346967,
        47341850,
        47343297,
        47341514,
        47340488,
        47343261,
        47341423,
        47340464,
        47346310,
        47341569,
        47344004,
        47342300,
        47340899,
        47344226,
        47341722,
        47345269,
        47340558,
        47341738,
        47343356,
        47342247,
        47342956,
        47341583,
        47341054,
        47342645,
        47341552,
        47340798,
        47341269,
        47342798,
        47341653,
        47340847,
        47341061,
        47342036,
        47340737,
        47343067,
        47346437,
        47342438,
        47340368,
        47343218,
        47341658,
        47340266,
        47342466,
        47345035,
        47347006,
        47340440,
        47341737,
        47346176,
        47344797,
        47341692,
        47341870,
        47340403,
        47341606,
        47342713,
        47341199,
        47343060,
        47345709,
        47345470,
        47342610,
        47341092,
        47343993,
        47341236,
        47341535,
        47341143,
        47341912,
        47340854,
        47346359,
        47342043,
        47340462,
        47340394,
        47341450,
        47341005,
        47343273,
        47342917,
        47341783,
        47343545,
        47343833,
        47341983,
        47343639,
        47343581,
        47342745,
        47342629,
        47342495,
        47342455,
        47341031,
        47342375,
        47342075,
        47341231,
        47341968,
        47341401,
        47341167,
        47340905,
        47342557,
        47340534,
        47340479,
        47340478,
        47346073,
        47346069,
        47341846,
        47343875,
        47342476,
        47341780,
        47340373,
        47342035,
        47344396,
        47341488,
        47341032,
        47341021,
        47343890,
        47343777,
        47340337,
        47346003,
        47345991,
        47343091,
        47345320,
        47341080,
        47341034,
        47341113,
        47340455,
        47345554,
        47343243,
        47345184,
        47345105,
        47341280,
        47341130,
        47343954,
        47344941,
        47345907,
        47345460,
        47344496,
        47342651,
        47342184,
        47345175,
        47340370,
        47340998,
        47340743,
        47341052,
        47341586,
        47341964,
        47340524,
        47341088,
        47340322,
        47340601,
        47340388,
        47341331,
        47340089,
        47340480,
        47341307,
        47341557,
        47340722,
        47345193,
        47340358,
        47340471,
        47340862,
        47340836,
        47340496,
        47341008
      ],
      "score": 3299,
      "time": 1773257369,
      "title": "Don't post generated/AI-edited comments. HN is for conversation between humans",
      "type": "story",
      "url": "https://news.ycombinator.com/newsguidelines.html#generated"
    },
    {
      "by": "speckx",
      "descendants": 236,
      "id": 47339164,
      "kids": [
        47339362,
        47343574,
        47340359,
        47341248,
        47345848,
        47343234,
        47347278,
        47346498,
        47340500,
        47344470,
        47347221,
        47340445,
        47346623,
        47346121,
        47343446,
        47343824,
        47340232,
        47346590,
        47340111,
        47342905,
        47341633,
        47346341,
        47346630,
        47346425,
        47346994,
        47342579,
        47341294,
        47344303,
        47341934,
        47343090,
        47344329,
        47340137,
        47341926,
        47346675,
        47344279,
        47344290,
        47346124,
        47344043,
        47343426,
        47345397,
        47340561,
        47346186,
        47344157,
        47342411,
        47342849,
        47342044,
        47342132,
        47345148,
        47340093,
        47341763,
        47343677,
        47344395,
        47341700,
        47340948
      ],
      "score": 253,
      "text": "<a href=\"https:&#x2F;&#x2F;archive.ph&#x2F;DEwy7\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.ph&#x2F;DEwy7</a>",
      "time": 1773253050,
      "title": "I was interviewed by an AI bot for a job",
      "type": "story",
      "url": "https://www.theverge.com/featured-video/892850/i-was-interviewed-by-an-ai-bot-for-a-job"
    },
    {
      "by": "2bluesc",
      "descendants": 46,
      "id": 47346091,
      "kids": [
        47346692,
        47346665,
        47347101,
        47346644,
        47347173,
        47346602,
        47346438,
        47347282,
        47347192,
        47347147,
        47346651,
        47346953,
        47346789,
        47347000,
        47346475,
        47346715,
        47346849,
        47347124
      ],
      "score": 119,
      "time": 1773286168,
      "title": "Iran-backed hackers claim wiper attack on medtech firm Stryker",
      "type": "story",
      "url": "https://krebsonsecurity.com/2026/03/iran-backed-hackers-claim-wiper-attack-on-medtech-firm-stryker/"
    },
    {
      "by": "schipperai",
      "descendants": 36,
      "id": 47343927,
      "kids": [
        47345119,
        47347331,
        47346968,
        47344708,
        47346748,
        47345051,
        47345627,
        47346103,
        47344379,
        47344507,
        47345205,
        47344552,
        47344768,
        47344492,
        47346769,
        47346027,
        47343959,
        47344943,
        47344933,
        47346946,
        47344642,
        47345788
      ],
      "score": 92,
      "text": "We needed something like --dangerously-skip-permissions that doesn’t nuke your untracked files, exfiltrate your keys, or install malware.<p>Claude Code&#x27;s permission system is allow-or-deny per tool, but that doesn’t really scale. Deleting some files is fine sometimes. And git checkout is sometimes not fine. Even when you curate permissions, 200 IQ Opus can find a way around it. Maintaining a deny list is a fool&#x27;s errand.<p>nah is a PreToolUse hook that classifies every tool call by what it actually does, using a deterministic classifier that runs in milliseconds. It maps commands to action types like filesystem_read, package_run, db_write, git_history_rewrite, and applies policies: allow, context (depends on the target), ask, or block.<p>Not everything can be classified, so you can optionally escalate ambiguous stuff to an LLM, but that’s not required. Anything unresolved you can approve, and configure the taxonomy so you don’t get asked again.<p>It works out of the box with sane defaults, no config needed. But you can customize it fully if you want to.<p>No dependencies, stdlib Python, MIT.<p>pip install nah &amp;&amp; nah install<p><a href=\"https:&#x2F;&#x2F;github.com&#x2F;manuelschipper&#x2F;nah\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;manuelschipper&#x2F;nah</a>",
      "time": 1773271585,
      "title": "Show HN: A context-aware permission guard for Claude Code",
      "type": "story",
      "url": "https://github.com/manuelschipper/nah/"
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
      "title": "My PostgreSQL database got nuked lol",
      "url": "https://akselmo.dev/posts/they-broke-my-server/",
      "score": 50,
      "comments": 27,
      "tags": [
        "security",
        "web"
      ],
      "id": "vb7ipx"
    },
    {
      "title": "Lobsters Interview with ngoldbaum",
      "url": "https://alexalejandre.com/programming/interview-with-ngoldbaum/",
      "score": 26,
      "comments": 5,
      "tags": [
        "interview",
        "person"
      ],
      "id": "6lqnhh"
    },
    {
      "title": "A fully snapshotable Wasm interpreter",
      "url": "https://github.com/friendlymatthew/gabagool?tab=readme-ov-file#gabagool",
      "score": 55,
      "comments": 9,
      "tags": [
        "programming",
        "rust",
        "wasm"
      ],
      "id": "eu5uiz"
    },
    {
      "title": "Faster asin() Was Hiding In Plain Sight",
      "url": "https://16bpp.net/blog/post/faster-asin-was-hiding-in-plain-sight/",
      "score": 28,
      "comments": 12,
      "tags": [
        "math",
        "performance"
      ],
      "id": "bunmdv"
    },
    {
      "title": "Why should we have user age tracking in Operating Systems and websites?",
      "url": "https://wiki.alcidesfonseca.com/blog/age-verification-in-operating-systems-and-the-internet/",
      "score": 22,
      "comments": 19,
      "tags": [
        "law",
        "osdev"
      ],
      "id": "oyb3u8"
    },
    {
      "title": "Moonforge, A Yocto-Based Linux OS",
      "url": "https://www.igalia.com/2026/03/09/Introducing-Moonforge-A-Yocto-Based-Linux-OS.html",
      "score": 24,
      "comments": 10,
      "tags": [
        "linux",
        "release"
      ],
      "id": "tyeo20"
    },
    {
      "title": "AI should help us produce better code",
      "url": "https://simonwillison.net/guides/agentic-engineering-patterns/better-code/",
      "score": 66,
      "comments": 70,
      "tags": [
        "vibecoding"
      ],
      "id": "tiktds"
    },
    {
      "title": "Generative AI vegetarianism",
      "url": "https://sboots.ca/2026/03/11/generative-ai-vegetarianism/",
      "score": 11,
      "comments": 2,
      "tags": [
        "vibecoding"
      ],
      "id": "g3qpeu"
    },
    {
      "title": "On The Need For Understanding",
      "url": "https://blog.information-superhighway.net/on-the-need-for-understanding",
      "score": 13,
      "comments": 3,
      "tags": [
        "education",
        "practices",
        "programming"
      ],
      "id": "wxk0ka"
    },
    {
      "title": "SQLite WAL-reset database corruption bug",
      "url": "https://sqlite.org/wal.html#walresetbug",
      "score": 39,
      "comments": 4,
      "tags": [
        "databases"
      ],
      "id": "mqpba7"
    }
  ]
}
```

