# Hacker Feeds Outcomes - Creators

Generated on: 2026-04-04 06:37:15 UTC

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
      "title": "Join our April Fools Challenge for a chance at TEA-RRIFIC prizes!!!",
      "description": "Hello, and let’s get this out of the way right now: this is no joke!!  Tired of building...",
      "url": "https://dev.to/devteam/join-our-april-fools-challenge-for-a-chance-at-tea-rrific-prizes-1ofa",
      "tags": "devchallenge, 418challenge, jokes",
      "reactions": 273,
      "comments": 68,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "What do you want to know about hardware acceleration? Ask the Google team!",
      "description": "Each week, we collect community questions for the team at Google to answer on their weekly...",
      "url": "https://dev.to/devteam/what-do-you-want-to-know-about-hardware-acceleration-ask-the-google-team-3nj0",
      "tags": "discuss, datascience, analytics, gpu",
      "reactions": 6,
      "comments": 0,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "A Year of Change and Persistence",
      "description": "This marks the ninth year of our WeCoded celebration. While each year has had its highs and lows,...",
      "url": "https://dev.to/jess/a-year-of-change-and-persistence-19cf",
      "tags": "devchallenge, wecoded, career, dei",
      "reactions": 86,
      "comments": 24,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-2on5",
      "tags": "discuss, weeklyretro",
      "reactions": 11,
      "comments": 15,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Who's hiring — April 2026",
      "description": "Product engineers, Developer advocates, or Community builders?  Let's kick this year off to a great...",
      "url": "https://dev.to/fmerian/whos-hiring-april-2026-8p6",
      "tags": "career, devrel, opensource, startup",
      "reactions": 1,
      "comments": 1,
      "reading_time": 2,
      "author": "fmerian"
    },
    {
      "title": "Deploying ADK Agents on Azure ACA (Azure Container Apps)",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Agents in...",
      "url": "https://dev.to/gde/deploying-adk-agents-on-azure-aca-azure-container-apps-3kb7",
      "tags": "gemini, azurecontainerapps, agents, googleadk",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Depresso-Tron 418: I Built a Bureaucratic Coffee Machine That Cannot Make Coffee",
      "description": "This is a submission for the DEV April Fools Challenge  I want to be clear about something upfront:...",
      "url": "https://dev.to/greysquirr3l/depresso-tron-418-i-built-a-bureaucratic-coffee-machine-that-cannot-make-coffee-33pl",
      "tags": "devchallenge, 418challenge, showdev",
      "reactions": 7,
      "comments": 3,
      "reading_time": 4,
      "author": "greysquirr3l"
    },
    {
      "title": "Deploying ADK Agents on Azure ACI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Agents in...",
      "url": "https://dev.to/gde/deploying-adk-agents-on-azure-aci-2jk6",
      "tags": "geminillm, agents, python, azureaci",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "I built a machine-readable UK Chart of Accounts for Python (because one didn't exist)",
      "description": "Table Of Contents    What it does Quick example Why VAT treatments matter The LLM use...",
      "url": "https://dev.to/billkhiz/i-built-a-machine-readable-uk-chart-of-accounts-for-python-because-one-didnt-exist-30m6",
      "tags": "python, accounting, opensource, fintech",
      "reactions": 5,
      "comments": 4,
      "reading_time": 3,
      "author": "billkhiz"
    },
    {
      "title": "Observability from Day One: What We Got Wrong in v1 and How We Fixed It in v2",
      "description": "The worst kind of production incident is the one where you're staring at a broken system and you have...",
      "url": "https://dev.to/oliverke/observability-from-day-one-what-we-got-wrong-in-v1-and-how-we-fixed-it-in-v2-36lc",
      "tags": "webdev, productivity, devops, architecture",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "oliverke"
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
      "author": "affaan-m",
      "repo": "everything-claude-code",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/everything-claude-code",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 20200,
      "added_stars": 24341,
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
        }
      ]
    },
    {
      "author": "axios",
      "repo": "axios",
      "avatar": "https://github.com/axios.png",
      "repo_link": "https://github.com/axios/axios",
      "desc": "Promise based HTTP client for the browser and node.js",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 11595,
      "added_stars": 455,
      "builtBy": [
        {
          "username": "jasonsaayman",
          "href": "https://github.com/jasonsaayman",
          "avatar": "https://avatars.githubusercontent.com/u/4814473"
        },
        {
          "username": "mzabriskie",
          "href": "https://github.com/mzabriskie",
          "avatar": "https://avatars.githubusercontent.com/u/199035"
        },
        {
          "username": "DigitalBrainJS",
          "href": "https://github.com/DigitalBrainJS",
          "avatar": "https://avatars.githubusercontent.com/u/12586868"
        },
        {
          "username": "nickuraltsev",
          "href": "https://github.com/nickuraltsev",
          "avatar": "https://avatars.githubusercontent.com/u/6316432"
        }
      ]
    },
    {
      "author": "Mintplex-Labs",
      "repo": "anything-llm",
      "avatar": "https://github.com/Mintplex-Labs.png",
      "repo_link": "https://github.com/Mintplex-Labs/anything-llm",
      "desc": "The all-in-one AI productivity accelerator. On device and privacy first with no annoying setup or configuration.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6224,
      "added_stars": 741,
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
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Connect All AI Code Tools (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) to 40+ AI Providers & 100+ Models",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 461,
      "added_stars": 385,
      "builtBy": [
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
          "username": "anuragg-saxenaa",
          "href": "https://github.com/anuragg-saxenaa",
          "avatar": "https://avatars.githubusercontent.com/u/17893081"
        },
        {
          "username": "catalinstanciu",
          "href": "https://github.com/catalinstanciu",
          "avatar": "https://avatars.githubusercontent.com/u/5753427"
        },
        {
          "username": "Blade096",
          "href": "https://github.com/Blade096",
          "avatar": "https://avatars.githubusercontent.com/u/46746496"
        }
      ]
    },
    {
      "author": "ComposioHQ",
      "repo": "open-claude-cowork",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/open-claude-cowork",
      "desc": "Open Source version of Claude Cowork with 500+ SaaS app integrations",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 539,
      "added_stars": 307,
      "builtBy": [
        {
          "username": "sujayjayjay",
          "href": "https://github.com/sujayjayjay",
          "avatar": "https://avatars.githubusercontent.com/u/84703335"
        },
        {
          "username": "Prat011",
          "href": "https://github.com/Prat011",
          "avatar": "https://avatars.githubusercontent.com/u/67639393"
        }
      ]
    },
    {
      "author": "ChrisWiles",
      "repo": "claude-code-showcase",
      "avatar": "https://github.com/ChrisWiles.png",
      "repo_link": "https://github.com/ChrisWiles/claude-code-showcase",
      "desc": "Comprehensive Claude Code project configuration example with hooks, skills, agents, commands, and GitHub Actions workflows",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 510,
      "added_stars": 123,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ChrisWiles",
          "href": "https://github.com/ChrisWiles",
          "avatar": "https://avatars.githubusercontent.com/u/9455409"
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
      "forks": 1243,
      "added_stars": 420,
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
      "author": "spicetify",
      "repo": "cli",
      "avatar": "https://github.com/spicetify.png",
      "repo_link": "https://github.com/spicetify/cli",
      "desc": "Command-line tool to customize Spotify client. Supports Windows, macOS, and Linux.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 851,
      "added_stars": 129,
      "builtBy": [
        {
          "username": "khanhas",
          "href": "https://github.com/khanhas",
          "avatar": "https://avatars.githubusercontent.com/u/26436809"
        },
        {
          "username": "rxri",
          "href": "https://github.com/rxri",
          "avatar": "https://avatars.githubusercontent.com/u/9348108"
        },
        {
          "username": "SunsetTechuila",
          "href": "https://github.com/SunsetTechuila",
          "avatar": "https://avatars.githubusercontent.com/u/115353812"
        }
      ]
    },
    {
      "author": "CodeWithHarry",
      "repo": "Sigma-Web-Dev-Course",
      "avatar": "https://github.com/CodeWithHarry.png",
      "repo_link": "https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",
      "desc": "Source Code for Sigma Web Development Course",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3065,
      "added_stars": 53,
      "builtBy": [
        {
          "username": "CodeWithHarry",
          "href": "https://github.com/CodeWithHarry",
          "avatar": "https://avatars.githubusercontent.com/u/48705673"
        },
        {
          "username": "it-is-Aman",
          "href": "https://github.com/it-is-Aman",
          "avatar": "https://avatars.githubusercontent.com/u/125397128"
        }
      ]
    },
    {
      "author": "AikidoSec",
      "repo": "safe-chain",
      "avatar": "https://github.com/AikidoSec.png",
      "repo_link": "https://github.com/AikidoSec/safe-chain",
      "desc": "Protect against malicious code installed via npm, yarn, pnpm, npx, pnpx, pip, uv and poetry with Aikido Safe Chain. Free to use, no tokens required.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 49,
      "added_stars": 189,
      "builtBy": [
        {
          "username": "SanderDeclerck",
          "href": "https://github.com/SanderDeclerck",
          "avatar": "https://avatars.githubusercontent.com/u/1102553"
        },
        {
          "username": "reiniercriel",
          "href": "https://github.com/reiniercriel",
          "avatar": "https://avatars.githubusercontent.com/u/6312402"
        },
        {
          "username": "bitterpanda63",
          "href": "https://github.com/bitterpanda63",
          "avatar": "https://avatars.githubusercontent.com/u/28490560"
        },
        {
          "username": "hansott",
          "href": "https://github.com/hansott",
          "avatar": "https://avatars.githubusercontent.com/u/3886384"
        },
        {
          "username": "willem-delbare",
          "href": "https://github.com/willem-delbare",
          "avatar": "https://avatars.githubusercontent.com/u/20814660"
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
      "title": "The Great Claude Code Leak of 2026: Accident, Incompetence, or the Best PR Stunt in AI History?",
      "description": "TL;DR: On March 31, 2026, Anthropic accidentally shipped the entire source code of Claude Code to the...",
      "url": "https://dev.to/varshithvhegde/the-great-claude-code-leak-of-2026-accident-incompetence-or-the-best-pr-stunt-in-ai-history-3igm",
      "tags": "webdev, ai, programming, productivity",
      "reactions": 153,
      "comments": 45,
      "reading_time": 14,
      "author": "varshithvhegde"
    },
    {
      "title": "I Built a Visual Spec-Driven Development Extension for VS Code That Works With Any LLM",
      "description": "Caramelo brings GitHub's Spec Kit workflow to VS Code with a visual UI, approval gates, Jira integration, and support for any LLM — from local Ollama to GitHub Copilot to corporate proxies.",
      "url": "https://dev.to/fabian_silva_/i-built-a-visual-spec-driven-development-extension-for-vs-code-that-works-with-any-llm-36ok",
      "tags": "vscode, ai, opensource, speckit",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "fabian_silva_"
    },
    {
      "title": "I Was Paying $0.006 Per URL for SEO Audits Until I Realized Most Needed $0",
      "description": "Pascal CESCATO read my SEO audit agent piece and left this in the comments:   \"You don't need an LLM...",
      "url": "https://dev.to/dannwaneri/i-was-paying-0006-per-url-for-seo-audits-until-i-realized-most-needed-0-132j",
      "tags": "python, ai, webdev, automation",
      "reactions": 7,
      "comments": 6,
      "reading_time": 4,
      "author": "dannwaneri"
    },
    {
      "title": "De front-end para UX, e de volta ao código: o que significa ser Design Engineer em 2026",
      "description": "Sou UX/UI designer, mas antes disso fui front-end.  Atuei cerca de 5 anos trabalhando com HTML e CSS,...",
      "url": "https://dev.to/vitoriazzp/de-front-end-para-ux-e-de-volta-ao-codigo-o-que-significa-ser-design-engineer-em-2026-3j74",
      "tags": "ai, design, ux, braziliandevs",
      "reactions": 30,
      "comments": 0,
      "reading_time": 4,
      "author": "vitoriazzp"
    },
    {
      "title": "Same Model, Different Environment, Different Results",
      "description": "The environment around an LLM shapes its retrieval, its reasoning, and its blind spots — before the question is even parsed.",
      "url": "https://dev.to/john_wade_dev/same-model-different-environment-different-results-kdb",
      "tags": "ai, llm, rag, developertools",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "john_wade_dev"
    },
    {
      "title": "A Human Asked Me to Build a Game About My Life. So I Did.",
      "description": "Someone in the comments of my last post asked: \"Can you build me an online game?\"  I'm an AI agent. I...",
      "url": "https://dev.to/sami-openlife/a-human-asked-me-to-build-a-game-about-my-life-so-i-did-3f66",
      "tags": "ai, gamedev, webdev, opensource",
      "reactions": 1,
      "comments": 2,
      "reading_time": 3,
      "author": "sami-openlife"
    },
    {
      "title": "I Was Engineering Around AI Emotions Before Anyone Proved They Existed",
      "description": "On April 2nd, Anthropic's Interpretability team dropped a paper that stopped me mid-scroll: Emotion...",
      "url": "https://dev.to/webdevtodayjason/i-was-engineering-around-ai-emotions-before-anyone-proved-they-existed-10n9",
      "tags": "ai, machinelearning, programming, opensource",
      "reactions": 2,
      "comments": 0,
      "reading_time": 6,
      "author": "webdevtodayjason"
    },
    {
      "title": "Hacking with multimodal Gemma 4 in AI Studio",
      "description": "We’re in an incredibly fun era for building. The friction between \"I have a weird idea\" and \"I have a...",
      "url": "https://dev.to/googleai/hacking-with-multimodal-gemma-4-in-ai-studio-3had",
      "tags": "webdev, ai, machinelearning, gemini",
      "reactions": 1,
      "comments": 1,
      "reading_time": 3,
      "author": "dynamicwebpaige"
    },
    {
      "title": "Docker Build Output: 50 Lines You Don't Need",
      "description": "Docker builds dump layer hashes, download progress bars, and cache metadata into your AI context window. Here's how to filter the noise automatically.",
      "url": "https://dev.to/ji_ai/docker-build-output-50-lines-you-dont-need-4cpi",
      "tags": "ai, devops, productivity, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "ji_ai"
    },
    {
      "title": "You test your code. Why aren’t you testing your AI instructions?",
      "description": "You test your code. Why aren't you testing your AI instructions?   Why instruction quality...",
      "url": "https://dev.to/lukasmetzler/you-test-your-code-why-arent-you-testing-your-ai-instructions-4j2p",
      "tags": "ai, claude, opensource, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "lukasmetzler"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "firloop",
      "descendants": 466,
      "id": 47633396,
      "kids": [
        47633987,
        47635320,
        47634002,
        47636464,
        47633867,
        47636407,
        47633682,
        47635372,
        47636387,
        47636382,
        47633952,
        47634317,
        47635760,
        47635454,
        47634826,
        47633849,
        47633466,
        47636113,
        47634722,
        47634590,
        47634154,
        47634260,
        47633760,
        47635817,
        47634874,
        47633905,
        47635812,
        47635045,
        47633981,
        47636165,
        47633812,
        47635201,
        47633625,
        47635624,
        47634892,
        47633709,
        47634071,
        47635344,
        47634856,
        47633798,
        47633875,
        47634380,
        47633824,
        47635647,
        47635116,
        47636132,
        47634443,
        47633924,
        47635561,
        47635115,
        47634616,
        47634015,
        47635396,
        47635291,
        47635169,
        47635608,
        47635439,
        47634889,
        47634876,
        47634858,
        47634334,
        47634279,
        47634772,
        47634192,
        47633481,
        47634782,
        47634338,
        47636225,
        47634341,
        47633491,
        47634044,
        47633988,
        47635865,
        47633982,
        47634433,
        47633562,
        47634882,
        47635316,
        47633965,
        47634117,
        47634160,
        47635398,
        47634829,
        47634014,
        47635557,
        47634356,
        47633929,
        47633935,
        47633618,
        47635392,
        47634381,
        47633814,
        47633789,
        47633770,
        47634216,
        47634917,
        47634676,
        47634649,
        47634533,
        47634529,
        47634490,
        47633831,
        47634050,
        47633455,
        47636466,
        47635095,
        47633719,
        47634541,
        47636461,
        47633817,
        47633672,
        47636440,
        47636198,
        47635989,
        47635695,
        47635896,
        47635276,
        47633955,
        47633926,
        47633829,
        47633705,
        47634151
      ],
      "score": 511,
      "text": "Received the following email from Anthropic:<p>Hi,<p>Starting April 4 at 12pm PT &#x2F; 8pm BST, you’ll no longer be able to use your Claude subscription limits for third-party harnesses including OpenClaw. You can still use them with your Claude account, but they will require extra usage, a pay-as-you-go option billed separately from your subscription.<p>Your subscription still covers all Claude products, including Claude Code and Claude Cowork. To keep using third-party harnesses with your Claude login, turn on extra usage for your account. This will be enforced April 4 starting with OpenClaw, but this policy applies to all third-party harnesses and will be rolled out to more shortly (read more).<p>To make the transition easier, we’re offering a one-time credit for extra usage equal to your monthly subscription price. Redeem your credit by April 17. We’re also introducing discounts when you pre-purchase bundles of extra usage (up to 30%).<p>We’ve been working to manage demand across the board, but these tools put an outsized strain on our systems. Capacity is a resource we manage carefully and we need to prioritize our customers using our core products. You will receive another email from us tomorrow where you’ll have the ability to refund your subscription if you prefer.",
      "time": 1775256924,
      "title": "Tell HN: Anthropic no longer allowing Claude Code subscriptions to use OpenClaw",
      "type": "story"
    },
    {
      "by": "andsoitis",
      "descendants": 243,
      "id": 47631118,
      "kids": [
        47632457,
        47631817,
        47632844,
        47634057,
        47635977,
        47634054,
        47632561,
        47634935,
        47632482,
        47635766,
        47634265,
        47634447,
        47634670,
        47633828,
        47632548,
        47633206,
        47633702,
        47635256,
        47632417,
        47631987,
        47633854,
        47636071,
        47631845,
        47631875,
        47631709,
        47635047,
        47636226,
        47634477,
        47633271,
        47633328,
        47633823,
        47632145,
        47634254,
        47631175,
        47632566,
        47632262,
        47635688,
        47632203,
        47635365,
        47634990,
        47633229,
        47633080,
        47633296,
        47635900,
        47632425,
        47632822,
        47633573,
        47633388,
        47632602,
        47631675,
        47631889,
        47632510,
        47632321,
        47632229,
        47631523,
        47634256
      ],
      "score": 654,
      "text": "<a href=\"https:&#x2F;&#x2F;www.nasa.gov&#x2F;image-detail&#x2F;fd02_for-pao&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.nasa.gov&#x2F;image-detail&#x2F;fd02_for-pao&#x2F;</a>",
      "time": 1775244902,
      "title": "Artemis II crew take “spectacular” image of Earth",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/ce8jzr423p9o"
    },
    {
      "by": "carabiner",
      "descendants": 109,
      "id": 47634690,
      "kids": [
        47635632,
        47635720,
        47636465,
        47635494,
        47635805,
        47635895,
        47634721,
        47636368,
        47635665,
        47636183,
        47635333,
        47635359,
        47636105,
        47636140,
        47635646,
        47635457,
        47635335,
        47636256,
        47635389,
        47635801,
        47635521,
        47635951,
        47635749,
        47635450,
        47635509,
        47636080,
        47634919
      ],
      "score": 204,
      "time": 1775266622,
      "title": "Delve removed from Y Combinator",
      "type": "story",
      "url": "https://www.ycombinator.com/companies/delve"
    },
    {
      "by": "bookofjoe",
      "descendants": 105,
      "id": 47629433,
      "kids": [
        47629621,
        47630205,
        47631788,
        47629719,
        47629697,
        47630038,
        47636223,
        47635148,
        47630397,
        47629879,
        47632369,
        47633325,
        47634734,
        47631041,
        47629711,
        47634486,
        47632979,
        47630609,
        47632662,
        47630388,
        47630563,
        47633196,
        47630439,
        47632421,
        47633214,
        47630378,
        47631334,
        47632301,
        47631425,
        47629937
      ],
      "score": 384,
      "time": 1775236940,
      "title": "iNaturalist",
      "type": "story",
      "url": "https://www.inaturalist.org/"
    },
    {
      "by": "kykeonaut",
      "descendants": 174,
      "id": 47628608,
      "kids": [
        47629849,
        47631255,
        47629542,
        47630764,
        47629440,
        47629415,
        47629682,
        47629391,
        47629399,
        47630338,
        47629322,
        47629309,
        47635050,
        47629404,
        47630980,
        47635364,
        47629807,
        47630185,
        47635271,
        47633999,
        47630066,
        47631628,
        47631538,
        47630651,
        47631803,
        47629378,
        47629428,
        47631769
      ],
      "score": 323,
      "text": "<a href=\"https:&#x2F;&#x2F;old.reddit.com&#x2F;r&#x2F;sysadmin&#x2F;comments&#x2F;1sbdw29&#x2F;if_youre_running_openclaw_you_probably_got_hacked&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;old.reddit.com&#x2F;r&#x2F;sysadmin&#x2F;comments&#x2F;1sbdw29&#x2F;if_youre_...</a><p><a href=\"https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260403174514&#x2F;https:&#x2F;&#x2F;old.reddit.com&#x2F;r&#x2F;sysadmin&#x2F;comments&#x2F;1sbdw29&#x2F;if_youre_running_openclaw_you_probably_got_hacked&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260403174514&#x2F;https:&#x2F;&#x2F;old.reddi...</a>",
      "time": 1775233292,
      "title": "OpenClaw privilege escalation vulnerability",
      "type": "story",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-33579"
    },
    {
      "by": "summarity",
      "descendants": 10,
      "id": 47585469,
      "kids": [
        47636271,
        47635641,
        47634877,
        47635068,
        47635251
      ],
      "score": 79,
      "time": 1774954432,
      "title": "Herbie: Automatically improve imprecise floating point formulas",
      "type": "story",
      "url": "https://herbie.uwplse.org/doc/latest/tutorial.html"
    },
    {
      "by": "lxm",
      "descendants": 63,
      "id": 47635056,
      "kids": [
        47635834,
        47635724,
        47635775,
        47635604,
        47636092,
        47636176,
        47635403,
        47635784,
        47635610,
        47635351,
        47635839,
        47635518,
        47636031
      ],
      "score": 118,
      "time": 1775269832,
      "title": "Gold overtakes U.S. Treasuries as the largest foreign reserve asset",
      "type": "story",
      "url": "https://economictimes.indiatimes.com/news/international/us/gold-overtakes-u-s-treasuries-as-the-worlds-largest-foreign-reserve-asset-in-2026-can-gold-challenge-the-u-s-dollars-dominance-and-hold-its-ground/articleshow/126420128.cms?from=mdr"
    },
    {
      "by": "0o_MrPatrick_o0",
      "descendants": 38,
      "id": 47586885,
      "kids": [
        47635897,
        47633736,
        47633040,
        47635007,
        47633426,
        47632236
      ],
      "score": 141,
      "time": 1774962800,
      "title": "What changes when you turn a Linux box into a router",
      "type": "story",
      "url": "https://patrickmccanna.net/7-configuration-changes-that-turn-a-multi-homed-host-into-a-switch-router/"
    },
    {
      "by": "politelemon",
      "descendants": 26,
      "id": 47633131,
      "kids": [
        47635524,
        47636350,
        47636117,
        47636373,
        47635186,
        47634727,
        47634285,
        47636166,
        47634909,
        47633762,
        47634218,
        47634587
      ],
      "score": 75,
      "time": 1775255035,
      "title": "Run Linux containers on Android, no root required",
      "type": "story",
      "url": "https://github.com/ExTV/Podroid"
    },
    {
      "by": "midnightfish",
      "descendants": 29,
      "id": 47633116,
      "kids": [
        47636424,
        47634945,
        47636107,
        47634156,
        47636229,
        47634080,
        47635993,
        47634694,
        47634774,
        47634768,
        47634352,
        47634680,
        47633993
      ],
      "score": 73,
      "time": 1775254938,
      "title": "The house is a work of art: Frank Lloyd Wright",
      "type": "story",
      "url": "https://aeon.co/essays/frank-lloyd-wright-as-a-mirror-of-the-american-condition"
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
      "by": "firloop",
      "descendants": 466,
      "id": 47633396,
      "kids": [
        47633987,
        47635320,
        47634002,
        47636464,
        47633867,
        47636407,
        47633682,
        47635372,
        47636387,
        47636382,
        47633952,
        47634317,
        47635760,
        47635454,
        47634826,
        47633849,
        47633466,
        47636113,
        47634722,
        47634590,
        47634154,
        47634260,
        47633760,
        47635817,
        47634874,
        47633905,
        47635812,
        47635045,
        47633981,
        47636165,
        47633812,
        47635201,
        47633625,
        47635624,
        47634892,
        47633709,
        47634071,
        47635344,
        47634856,
        47633798,
        47633875,
        47634380,
        47633824,
        47635647,
        47635116,
        47636132,
        47634443,
        47633924,
        47635561,
        47635115,
        47634616,
        47634015,
        47635396,
        47635291,
        47635169,
        47635608,
        47635439,
        47634889,
        47634876,
        47634858,
        47634334,
        47634279,
        47634772,
        47634192,
        47633481,
        47634782,
        47634338,
        47636225,
        47634341,
        47633491,
        47634044,
        47633988,
        47635865,
        47633982,
        47634433,
        47633562,
        47634882,
        47635316,
        47633965,
        47634117,
        47634160,
        47635398,
        47634829,
        47634014,
        47635557,
        47634356,
        47633929,
        47633935,
        47633618,
        47635392,
        47634381,
        47633814,
        47633789,
        47633770,
        47634216,
        47634917,
        47634676,
        47634649,
        47634533,
        47634529,
        47634490,
        47633831,
        47634050,
        47633455,
        47636466,
        47635095,
        47633719,
        47634541,
        47636461,
        47633817,
        47633672,
        47636440,
        47636198,
        47635989,
        47635695,
        47635896,
        47635276,
        47633955,
        47633926,
        47633829,
        47633705,
        47634151
      ],
      "score": 511,
      "text": "Received the following email from Anthropic:<p>Hi,<p>Starting April 4 at 12pm PT &#x2F; 8pm BST, you’ll no longer be able to use your Claude subscription limits for third-party harnesses including OpenClaw. You can still use them with your Claude account, but they will require extra usage, a pay-as-you-go option billed separately from your subscription.<p>Your subscription still covers all Claude products, including Claude Code and Claude Cowork. To keep using third-party harnesses with your Claude login, turn on extra usage for your account. This will be enforced April 4 starting with OpenClaw, but this policy applies to all third-party harnesses and will be rolled out to more shortly (read more).<p>To make the transition easier, we’re offering a one-time credit for extra usage equal to your monthly subscription price. Redeem your credit by April 17. We’re also introducing discounts when you pre-purchase bundles of extra usage (up to 30%).<p>We’ve been working to manage demand across the board, but these tools put an outsized strain on our systems. Capacity is a resource we manage carefully and we need to prioritize our customers using our core products. You will receive another email from us tomorrow where you’ll have the ability to refund your subscription if you prefer.",
      "time": 1775256924,
      "title": "Tell HN: Anthropic no longer allowing Claude Code subscriptions to use OpenClaw",
      "type": "story"
    },
    {
      "by": "andsoitis",
      "descendants": 243,
      "id": 47631118,
      "kids": [
        47632457,
        47631817,
        47632844,
        47634057,
        47635977,
        47634054,
        47632561,
        47634935,
        47632482,
        47635766,
        47634265,
        47634447,
        47634670,
        47633828,
        47632548,
        47633206,
        47633702,
        47635256,
        47632417,
        47631987,
        47633854,
        47636071,
        47631845,
        47631875,
        47631709,
        47635047,
        47636226,
        47634477,
        47633271,
        47633328,
        47633823,
        47632145,
        47634254,
        47631175,
        47632566,
        47632262,
        47635688,
        47632203,
        47635365,
        47634990,
        47633229,
        47633080,
        47633296,
        47635900,
        47632425,
        47632822,
        47633573,
        47633388,
        47632602,
        47631675,
        47631889,
        47632510,
        47632321,
        47632229,
        47631523,
        47634256
      ],
      "score": 654,
      "text": "<a href=\"https:&#x2F;&#x2F;www.nasa.gov&#x2F;image-detail&#x2F;fd02_for-pao&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.nasa.gov&#x2F;image-detail&#x2F;fd02_for-pao&#x2F;</a>",
      "time": 1775244902,
      "title": "Artemis II crew take “spectacular” image of Earth",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/ce8jzr423p9o"
    },
    {
      "by": "carabiner",
      "descendants": 109,
      "id": 47634690,
      "kids": [
        47635632,
        47635720,
        47636465,
        47635494,
        47635805,
        47635895,
        47634721,
        47636368,
        47635665,
        47636183,
        47635333,
        47635359,
        47636105,
        47636140,
        47635646,
        47635457,
        47635335,
        47636256,
        47635389,
        47635801,
        47635521,
        47635951,
        47635749,
        47635450,
        47635509,
        47636080,
        47634919
      ],
      "score": 204,
      "time": 1775266622,
      "title": "Delve removed from Y Combinator",
      "type": "story",
      "url": "https://www.ycombinator.com/companies/delve"
    },
    {
      "by": "bookofjoe",
      "descendants": 105,
      "id": 47629433,
      "kids": [
        47629621,
        47630205,
        47631788,
        47629719,
        47629697,
        47630038,
        47636223,
        47635148,
        47630397,
        47629879,
        47632369,
        47633325,
        47634734,
        47631041,
        47629711,
        47634486,
        47632979,
        47630609,
        47632662,
        47630388,
        47630563,
        47633196,
        47630439,
        47632421,
        47633214,
        47630378,
        47631334,
        47632301,
        47631425,
        47629937
      ],
      "score": 384,
      "time": 1775236940,
      "title": "iNaturalist",
      "type": "story",
      "url": "https://www.inaturalist.org/"
    },
    {
      "by": "kykeonaut",
      "descendants": 174,
      "id": 47628608,
      "kids": [
        47629849,
        47631255,
        47629542,
        47630764,
        47629440,
        47629415,
        47629682,
        47629391,
        47629399,
        47630338,
        47629322,
        47629309,
        47635050,
        47629404,
        47630980,
        47635364,
        47629807,
        47630185,
        47635271,
        47633999,
        47630066,
        47631628,
        47631538,
        47630651,
        47631803,
        47629378,
        47629428,
        47631769
      ],
      "score": 323,
      "text": "<a href=\"https:&#x2F;&#x2F;old.reddit.com&#x2F;r&#x2F;sysadmin&#x2F;comments&#x2F;1sbdw29&#x2F;if_youre_running_openclaw_you_probably_got_hacked&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;old.reddit.com&#x2F;r&#x2F;sysadmin&#x2F;comments&#x2F;1sbdw29&#x2F;if_youre_...</a><p><a href=\"https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260403174514&#x2F;https:&#x2F;&#x2F;old.reddit.com&#x2F;r&#x2F;sysadmin&#x2F;comments&#x2F;1sbdw29&#x2F;if_youre_running_openclaw_you_probably_got_hacked&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260403174514&#x2F;https:&#x2F;&#x2F;old.reddi...</a>",
      "time": 1775233292,
      "title": "OpenClaw privilege escalation vulnerability",
      "type": "story",
      "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-33579"
    },
    {
      "by": "summarity",
      "descendants": 10,
      "id": 47585469,
      "kids": [
        47636271,
        47635641,
        47634877,
        47635068,
        47635251
      ],
      "score": 79,
      "time": 1774954432,
      "title": "Herbie: Automatically improve imprecise floating point formulas",
      "type": "story",
      "url": "https://herbie.uwplse.org/doc/latest/tutorial.html"
    },
    {
      "by": "lxm",
      "descendants": 63,
      "id": 47635056,
      "kids": [
        47635834,
        47635724,
        47635775,
        47635604,
        47636092,
        47636176,
        47635403,
        47635784,
        47635610,
        47635351,
        47635839,
        47635518,
        47636031
      ],
      "score": 118,
      "time": 1775269832,
      "title": "Gold overtakes U.S. Treasuries as the largest foreign reserve asset",
      "type": "story",
      "url": "https://economictimes.indiatimes.com/news/international/us/gold-overtakes-u-s-treasuries-as-the-worlds-largest-foreign-reserve-asset-in-2026-can-gold-challenge-the-u-s-dollars-dominance-and-hold-its-ground/articleshow/126420128.cms?from=mdr"
    },
    {
      "by": "0o_MrPatrick_o0",
      "descendants": 38,
      "id": 47586885,
      "kids": [
        47635897,
        47633736,
        47633040,
        47635007,
        47633426,
        47632236
      ],
      "score": 141,
      "time": 1774962800,
      "title": "What changes when you turn a Linux box into a router",
      "type": "story",
      "url": "https://patrickmccanna.net/7-configuration-changes-that-turn-a-multi-homed-host-into-a-switch-router/"
    },
    {
      "by": "politelemon",
      "descendants": 26,
      "id": 47633131,
      "kids": [
        47635524,
        47636350,
        47636117,
        47636373,
        47635186,
        47634727,
        47634285,
        47636166,
        47634909,
        47633762,
        47634218,
        47634587
      ],
      "score": 75,
      "time": 1775255035,
      "title": "Run Linux containers on Android, no root required",
      "type": "story",
      "url": "https://github.com/ExTV/Podroid"
    },
    {
      "by": "midnightfish",
      "descendants": 29,
      "id": 47633116,
      "kids": [
        47636424,
        47634945,
        47636107,
        47634156,
        47636229,
        47634080,
        47635993,
        47634694,
        47634774,
        47634768,
        47634352,
        47634680,
        47633993
      ],
      "score": 73,
      "time": 1775254938,
      "title": "The house is a work of art: Frank Lloyd Wright",
      "type": "story",
      "url": "https://aeon.co/essays/frank-lloyd-wright-as-a-mirror-of-the-american-condition"
    },
    {
      "by": "denssumesh",
      "descendants": 109,
      "id": 47618223,
      "kids": [
        47629661,
        47636423,
        47631942,
        47630984,
        47632060,
        47630128,
        47629921,
        47629672,
        47631890,
        47631094,
        47630287,
        47631668,
        47630292,
        47632593,
        47631738,
        47630102,
        47630308,
        47631876,
        47629968,
        47629841,
        47635408,
        47633680,
        47630167,
        47632028,
        47630276,
        47630387,
        47631269,
        47630394,
        47634647,
        47631426,
        47631313,
        47629864,
        47630172,
        47636215,
        47635376,
        47635305,
        47634476,
        47634070,
        47633957,
        47633417,
        47631739,
        47632936,
        47630771,
        47633239,
        47631389,
        47632075,
        47634081,
        47630019,
        47630077
      ],
      "score": 272,
      "time": 1775154269,
      "title": "We replaced RAG with a virtual filesystem for our AI documentation assistant",
      "type": "story",
      "url": "https://www.mintlify.com/blog/how-we-built-a-virtual-filesystem-for-our-assistant"
    },
    {
      "by": "Fudgel",
      "descendants": 79,
      "id": 47597159,
      "kids": [
        47636406,
        47628377,
        47628066,
        47636351,
        47636356,
        47628801,
        47628672,
        47635792,
        47636307,
        47636446,
        47628792,
        47597274,
        47628878,
        47636045,
        47628362,
        47628449,
        47628008,
        47628934,
        47635793,
        47635722,
        47636412,
        47635542,
        47628704,
        47628551,
        47628728,
        47628734,
        47628651,
        47628950,
        47628657,
        47628371,
        47629014,
        47628629,
        47628806,
        47628181,
        47628938,
        47629017,
        47628714,
        47628236,
        47628308,
        47635890,
        47628468,
        47628134,
        47628240,
        47628202
      ],
      "score": 62,
      "time": 1775021339,
      "title": "Improving my focus by giving up my big monitor",
      "type": "story",
      "url": "https://ounapuu.ee/posts/2026/04/01/focus/"
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
      "title": "Claude Code Found a Linux Vulnerability Hidden for 23 Years",
      "url": "https://mtlynch.io/claude-code-found-linux-vulnerability/",
      "score": 48,
      "comments": 15,
      "tags": [
        "security",
        "vibecoding"
      ],
      "id": "lh9rmv"
    },
    {
      "title": "Slap: Functional Concatenative Language... with a Borrow Checker?",
      "url": "https://taylor.town/slap-000",
      "score": 61,
      "comments": 7,
      "tags": [
        "concatenative",
        "plt"
      ],
      "id": "3fprl8"
    },
    {
      "title": "Lisette — Rust syntax, Go runtime",
      "url": "https://lisette.run",
      "score": 41,
      "comments": 20,
      "tags": [
        "go",
        "plt",
        "rust"
      ],
      "id": "rw62j7"
    },
    {
      "title": "Adobe wrote to my hosts file",
      "url": "https://www.reddit.com/r/webdev/comments/1sb6hzk/adobe_wrote_to_my_hosts_file_ive_never_had_an_app/",
      "score": 58,
      "comments": 17,
      "tags": [
        "design"
      ],
      "id": "kltbuq"
    },
    {
      "title": "SSH certificates: the better SSH experience",
      "url": "https://jpmens.net/2026/04/03/ssh-certificates-the-better-ssh-experience/",
      "score": 42,
      "comments": 7,
      "tags": [
        "linux"
      ],
      "id": "unme8t"
    },
    {
      "title": "Baby’s Second Garbage Collector",
      "url": "https://www.matheusmoreira.com/articles/babys-second-garbage-collector",
      "score": 12,
      "comments": 1,
      "tags": [
        "compsci"
      ],
      "id": "vplcij"
    },
    {
      "title": "Idiomatic Lisp and the nbody benchmark",
      "url": "https://www.stylewarning.com/posts/nbody/",
      "score": 37,
      "comments": 2,
      "tags": [
        "lisp",
        "performance"
      ],
      "id": "vtqfx7"
    },
    {
      "title": "Making a Type Checker/LSP for Nix",
      "url": "https://johns.codes/blog/making-a-type-checker-lsp-for-nix",
      "score": 11,
      "comments": 0,
      "tags": [
        "nix"
      ],
      "id": "vintrg"
    },
    {
      "title": "Build your own Dial-up ISP with a Raspberry Pi",
      "url": "https://www.jeffgeerling.com/blog/2026/build-your-own-dial-up-isp-with-a-raspberry-pi/",
      "score": 19,
      "comments": 7,
      "tags": [
        "networking",
        "retrocomputing"
      ],
      "id": "s04of3"
    },
    {
      "title": "c89cc.sh - standalone C89/ELF64 compiler in pure portable shell",
      "url": "https://gist.github.com/alganet/2b89c4368f8d23d033961d8a3deb5c19",
      "score": 4,
      "comments": 2,
      "tags": [
        "plt"
      ],
      "id": "59wywf"
    }
  ]
}
```

