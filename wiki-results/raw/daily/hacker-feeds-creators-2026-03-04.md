# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-04 07:05:59 UTC

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
      "title": "i built a social platform where everything vanishes after 24 hours",
      "description": "genjutsu is a fast-paced, developer-focused social network where everything vanishes every 24 hours....",
      "url": "https://dev.to/iamovi/i-built-a-social-platform-where-everything-vanishes-after-24-hours-3imk",
      "tags": "socialmedia, showdev, webdev, typescript",
      "reactions": 36,
      "comments": 25,
      "reading_time": 2,
      "author": "iamovi"
    },
    {
      "title": "I Stopped Reviewing Code: A Backend Dev’s Experiment with Google Gemini",
      "description": "I stopped reviewing code and let Google Gemini build my UI. Then I audited the results to see what autonomy in AI development actually produces.",
      "url": "https://dev.to/anchildress1/i-stopped-reviewing-code-a-backend-devs-experiment-with-google-gemini-5424",
      "tags": "devchallenge, geminireflections, gemini",
      "reactions": 6,
      "comments": 1,
      "reading_time": 5,
      "author": "anchildress1"
    },
    {
      "title": "SaaS Companies Fear Me: Cloning* Granola for Linux",
      "description": "This is a submission for the Built with Google Gemini: Writing Challenge  I've been spending a lot of...",
      "url": "https://dev.to/thisisryanswift/saas-companies-fear-me-cloning-granola-for-linux-3pk0",
      "tags": "devchallenge, mlhreflections, gemini, ai",
      "reactions": 18,
      "comments": 4,
      "reading_time": 4,
      "author": "thisisryanswift"
    },
    {
      "title": "Fusing NASA Data with AI: How I Built CosmoDex and Won the MLH Data Hackfest!",
      "description": "This is a submission for the Built with Google Gemini: Writing Challenge  What if tracking near-Earth...",
      "url": "https://dev.to/astrodeeptej/fusing-nasa-data-with-ai-how-i-built-cosmodex-and-won-the-mlh-data-hackfest-5fmm",
      "tags": "devchallenge, geminireflections, gemini, discuss",
      "reactions": 16,
      "comments": 2,
      "reading_time": 4,
      "author": "astrodeeptej"
    },
    {
      "title": "I used Google Gemini for the First Time. A Deep Analysis of my Experience so far! ✨",
      "description": "This is a submission for the Built with Google Gemini: Writing Challenge   Front Cover is from...",
      "url": "https://dev.to/francistrdev/i-used-google-gemini-for-the-first-time-a-deep-analysis-of-my-experience-so-far-2n12",
      "tags": "devchallenge, geminireflections, gemini, bash",
      "reactions": 17,
      "comments": 2,
      "reading_time": 11,
      "author": "francistrdev"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-2of0",
      "tags": "top7, discuss",
      "reactions": 11,
      "comments": 4,
      "reading_time": 2,
      "author": "jess"
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
      "title": "Building a Local PR Review Interface for Claude Code Plans",
      "description": "GitHub PR Review UI for Claude Code Plans",
      "url": "https://dev.to/eduardmaghakyan/building-a-local-pr-review-interface-for-claude-code-plans-57o2",
      "tags": "claudecode, ai, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "eduardmaghakyan"
    },
    {
      "title": "Oooh very interesting",
      "description": "Gemini 3.1 Flash-Lite: Developer guide...",
      "url": "https://dev.to/ben/oooh-very-interesting-ohk",
      "tags": "gemini, ai, coding",
      "reactions": 5,
      "comments": 0,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Gemini 3.1 Flash-Lite: Developer guide and use cases",
      "description": "Gemini 3.1 Flash-Lite is the high-volume, affordable powerhouse of the Gemini family. It’s...",
      "url": "https://dev.to/googleai/gemini-31-flash-lite-developer-guide-and-use-cases-1hh",
      "tags": "gemini, ai, coding",
      "reactions": 54,
      "comments": 0,
      "reading_time": 6,
      "author": "pat_loeber"
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
      "author": "Wei-Shaw",
      "repo": "claude-relay-service",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/claude-relay-service",
      "desc": "CRS-自建Claude Code镜像，一站式开源中转服务，让 Claude、OpenAI、Gemini、Droid 订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1412,
      "added_stars": 560,
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
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2065,
      "added_stars": 4782,
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
      "author": "songquanpeng",
      "repo": "one-api",
      "avatar": "https://github.com/songquanpeng.png",
      "repo_link": "https://github.com/songquanpeng/one-api",
      "desc": "LLM API 管理 & 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。LLM API management & key redistribution system, unifying multiple providers under a single API. Single binary, Docker-ready, with an English UI.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5757,
      "added_stars": 279,
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
      "author": "qeeqbox",
      "repo": "social-analyzer",
      "avatar": "https://github.com/qeeqbox.png",
      "repo_link": "https://github.com/qeeqbox/social-analyzer",
      "desc": "API, CLI, and Web App for analyzing and finding a person's profile in 1000 social media \\ websites",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2045,
      "added_stars": 397,
      "builtBy": [
        {
          "username": "giga-a",
          "href": "https://github.com/giga-a",
          "avatar": "https://avatars.githubusercontent.com/u/52905881"
        },
        {
          "username": "qb-auto",
          "href": "https://github.com/qb-auto",
          "avatar": "https://avatars.githubusercontent.com/u/81345102"
        },
        {
          "username": "SethFalco",
          "href": "https://github.com/SethFalco",
          "avatar": "https://avatars.githubusercontent.com/u/22801583"
        },
        {
          "username": "supersourlemons",
          "href": "https://github.com/supersourlemons",
          "avatar": "https://avatars.githubusercontent.com/u/210174607"
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
      "forks": 58,
      "added_stars": 146,
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
      "title": "SaaS Companies Fear Me: Cloning* Granola for Linux",
      "description": "This is a submission for the Built with Google Gemini: Writing Challenge  I've been spending a lot of...",
      "url": "https://dev.to/thisisryanswift/saas-companies-fear-me-cloning-granola-for-linux-3pk0",
      "tags": "devchallenge, mlhreflections, gemini, ai",
      "reactions": 18,
      "comments": 4,
      "reading_time": 4,
      "author": "thisisryanswift"
    },
    {
      "title": "What do you think about building when AI models get cheaper?",
      "description": "With Gemini 3.1 Flash-Lite launching today, my mind goes towards thinking about things I wouldn't...",
      "url": "https://dev.to/ben/what-do-you-think-about-building-when-ai-models-get-cheaper-24d1",
      "tags": "ai, discuss",
      "reactions": 18,
      "comments": 16,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Building a Local PR Review Interface for Claude Code Plans",
      "description": "GitHub PR Review UI for Claude Code Plans",
      "url": "https://dev.to/eduardmaghakyan/building-a-local-pr-review-interface-for-claude-code-plans-57o2",
      "tags": "claudecode, ai, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "eduardmaghakyan"
    },
    {
      "title": "Oooh very interesting",
      "description": "Gemini 3.1 Flash-Lite: Developer guide...",
      "url": "https://dev.to/ben/oooh-very-interesting-ohk",
      "tags": "gemini, ai, coding",
      "reactions": 5,
      "comments": 0,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "I launched a tiny macOS tool yesterday and woke up to 100+ installs",
      "description": "Yesterday I shared a small tool I was working on with friends called TokenBar and the response...",
      "url": "https://dev.to/jack__altman__/i-launched-a-tiny-macos-tool-yesterday-and-woke-up-to-100-installs-280i",
      "tags": "ai, news, llm, development",
      "reactions": 1,
      "comments": 0,
      "reading_time": 1,
      "author": "jack__altman__"
    },
    {
      "title": "Building Disaster Pulse: What Happened When I Let AI Decide If a Disaster Is Real",
      "description": "This is a submission for the Built with Google Gemini: Writing Challenge     I live in Indonesia. We...",
      "url": "https://dev.to/denyherianto/building-disaster-pulse-what-happened-when-i-let-ai-decide-if-a-disaster-is-real-19jh",
      "tags": "devchallenge, mlhreflections, gemini, ai",
      "reactions": 3,
      "comments": 0,
      "reading_time": 7,
      "author": "denyherianto"
    },
    {
      "title": "I Built an AI That Automates Literature Reviews — Here's How It Works Under the Hood",
      "description": "If you've ever had to do a systematic literature review — the kind where you manually search...",
      "url": "https://dev.to/devfuad/i-built-an-ai-that-automates-literature-reviews-heres-how-it-works-under-the-hood-5gpk",
      "tags": "ai, automation, saas, researchtool",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "devfuad"
    },
    {
      "title": "Gemini 3.1 Flash-Lite: Developer guide and use cases",
      "description": "Gemini 3.1 Flash-Lite is the high-volume, affordable powerhouse of the Gemini family. It’s...",
      "url": "https://dev.to/googleai/gemini-31-flash-lite-developer-guide-and-use-cases-1hh",
      "tags": "gemini, ai, coding",
      "reactions": 54,
      "comments": 0,
      "reading_time": 6,
      "author": "pat_loeber"
    },
    {
      "title": "Serverless Bedrock: How I invoke Claude from Lambda in warrantyAI",
      "description": "Every week I ship a new piece of warrantyAI — an AI-powered warranty management system I'm building...",
      "url": "https://dev.to/harisharavindan/serverless-bedrock-how-i-invoke-claude-from-lambda-in-warrantyai-3hk",
      "tags": "aws, serverless, ai, bedrock",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "harisharavindan"
    },
    {
      "title": "Stop Explaining Bugs to AI - Show It the Bug",
      "description": "I found a better way to debug bugs with AI.  AI is brilliant at code-level reasoning, but sometimes...",
      "url": "https://dev.to/brady_stroud_402d6c121a83/stop-explaining-bugs-to-ai-show-it-the-bug-a45",
      "tags": "webdev, ai, programming, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "brady_stroud_402d6c121a83"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "pabs3",
      "descendants": 98,
      "id": 47241551,
      "kids": [
        47244121,
        47242430,
        47242740,
        47242328,
        47243879,
        47242978,
        47242918,
        47243593,
        47242456,
        47242718,
        47243229,
        47243280,
        47243919,
        47242418,
        47242573,
        47242457,
        47242579,
        47242708,
        47242148,
        47242940,
        47242348,
        47242805,
        47242482
      ],
      "score": 420,
      "time": 1772585911,
      "title": "Motorola GrapheneOS devices will be bootloader unlockable/relockable",
      "type": "story",
      "url": "https://grapheneos.social/@GrapheneOS/116160393783585567"
    },
    {
      "by": "SerCe",
      "descendants": 72,
      "id": 47242765,
      "kids": [
        47243908,
        47243407,
        47244119,
        47244117,
        47244120,
        47243363,
        47243535,
        47244095,
        47244081,
        47243991,
        47244033,
        47243775,
        47243833,
        47243120,
        47243554,
        47243439,
        47244039,
        47243299,
        47243845,
        47243222,
        47243773,
        47243165,
        47243152,
        47243489,
        47244017,
        47243869,
        47243739,
        47243235,
        47243398,
        47243990,
        47243766,
        47243161,
        47243714,
        47243093,
        47243627,
        47243469,
        47243720,
        47243214,
        47243582
      ],
      "score": 175,
      "time": 1772595618,
      "title": "Nobody Gets Promoted for Simplicity",
      "type": "story",
      "url": "https://terriblesoftware.org/2026/03/03/nobody-gets-promoted-for-simplicity/"
    },
    {
      "by": "1659447091",
      "descendants": 87,
      "id": 47241817,
      "kids": [
        47243038,
        47243011,
        47243287,
        47243803,
        47242789,
        47242780,
        47243336,
        47242653,
        47243550,
        47243525,
        47243237,
        47242782,
        47243693,
        47243042,
        47243281,
        47243270,
        47243260,
        47243564,
        47243428,
        47242862,
        47243571,
        47243286
      ],
      "score": 143,
      "time": 1772587865,
      "title": "TikTok will not introduce end-to-end encryption, saying it makes users less safe",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/cly2m5e5ke4o"
    },
    {
      "by": "abetusk",
      "descendants": 7,
      "id": 47242193,
      "kids": [
        47242777,
        47243855,
        47242721
      ],
      "score": 62,
      "time": 1772590981,
      "title": "Graphics Programming Resources",
      "type": "story",
      "url": "https://develop--gpvm-website.netlify.app/resources/"
    },
    {
      "by": "rs545837",
      "descendants": 55,
      "id": 47241976,
      "kids": [
        47244116,
        47242570,
        47242900,
        47243438,
        47242612,
        47243406,
        47243163,
        47242029,
        47243027,
        47243018,
        47242454,
        47243009,
        47243313,
        47241977,
        47242346
      ],
      "score": 100,
      "time": 1772589141,
      "title": "Weave – A language aware merge algorithm based on entities",
      "type": "story",
      "url": "https://github.com/Ataraxy-Labs/weave"
    },
    {
      "by": "r4um",
      "descendants": 2,
      "id": 47243272,
      "kids": [
        47244113,
        47244047
      ],
      "score": 21,
      "time": 1772600437,
      "title": "Agentic Engineering Patterns",
      "type": "story",
      "url": "https://simonwillison.net/guides/agentic-engineering-patterns/"
    },
    {
      "by": "cypres",
      "descendants": 11,
      "id": 47243069,
      "kids": [
        47244086,
        47243888,
        47244085,
        47243809,
        47243798,
        47243896,
        47243825,
        47243883,
        47243763
      ],
      "score": 39,
      "time": 1772598632,
      "title": "A CPU that runs entirely on GPU",
      "type": "story",
      "url": "https://github.com/robertcprice/nCPU"
    },
    {
      "by": "scrlk",
      "descendants": 765,
      "id": 47232453,
      "kids": [
        47234436,
        47233173,
        47232559,
        47232614,
        47233887,
        47232572,
        47241103,
        47232730,
        47232554,
        47242861,
        47242284,
        47233246,
        47232648,
        47235552,
        47239954,
        47234639,
        47233179,
        47232700,
        47233328,
        47232922,
        47233039,
        47233554,
        47232735,
        47234734,
        47232864,
        47241784,
        47242594,
        47236074,
        47232707,
        47241928,
        47233987,
        47236835,
        47237830,
        47239793,
        47240966,
        47239935,
        47240722,
        47237555,
        47232553,
        47233795,
        47233122,
        47232578,
        47233713,
        47233356,
        47241870,
        47237276,
        47236050,
        47233942,
        47236829,
        47238922,
        47240652,
        47233223,
        47241592,
        47239319,
        47242656,
        47241057,
        47233519,
        47234437,
        47235030,
        47242206,
        47238097,
        47236265,
        47236862,
        47233619,
        47239318,
        47237491,
        47232570,
        47232542,
        47236101,
        47232878,
        47233410,
        47234434,
        47237049,
        47241314,
        47234411,
        47235396,
        47242065,
        47241789,
        47240647,
        47239407,
        47240995,
        47233301,
        47232618,
        47239436,
        47240957,
        47237714,
        47237870,
        47236095,
        47233186,
        47241603,
        47237911,
        47233338,
        47233260,
        47233235,
        47233262,
        47237862,
        47240113,
        47241672,
        47234821,
        47232869,
        47242074,
        47240148,
        47236954,
        47233084,
        47239622,
        47242230,
        47237083,
        47240640
      ],
      "score": 748,
      "time": 1772546526,
      "title": "MacBook Pro with M5 Pro and M5 Max",
      "type": "story",
      "url": "https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/"
    },
    {
      "by": "jruohonen",
      "descendants": 0,
      "id": 47205031,
      "score": 18,
      "time": 1772356144,
      "title": "On the Design of Programming Languages (1974) [pdf]",
      "type": "story",
      "url": "https://web.cs.ucdavis.edu/~su/teaching/ecs240-w17/readings/PLHistoryGoodDesign.PDF"
    },
    {
      "by": "E-Reverance",
      "descendants": 3,
      "id": 47242637,
      "kids": [
        47243580,
        47243446,
        47243301
      ],
      "score": 33,
      "time": 1772594660,
      "title": "Speculative Speculative Decoding (SSD)",
      "type": "story",
      "url": "https://arxiv.org/abs/2603.03251"
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
      "by": "pabs3",
      "descendants": 98,
      "id": 47241551,
      "kids": [
        47244121,
        47242430,
        47242740,
        47242328,
        47243879,
        47242978,
        47242918,
        47243593,
        47242456,
        47242718,
        47243229,
        47243280,
        47243919,
        47242418,
        47242573,
        47242457,
        47242579,
        47242708,
        47242148,
        47242940,
        47242348,
        47242805,
        47242482
      ],
      "score": 420,
      "time": 1772585911,
      "title": "Motorola GrapheneOS devices will be bootloader unlockable/relockable",
      "type": "story",
      "url": "https://grapheneos.social/@GrapheneOS/116160393783585567"
    },
    {
      "by": "SerCe",
      "descendants": 72,
      "id": 47242765,
      "kids": [
        47243908,
        47243407,
        47244119,
        47244117,
        47244120,
        47243363,
        47243535,
        47244095,
        47244081,
        47243991,
        47244033,
        47243775,
        47243833,
        47243120,
        47243554,
        47243439,
        47244039,
        47243299,
        47243845,
        47243222,
        47243773,
        47243165,
        47243152,
        47243489,
        47244017,
        47243869,
        47243739,
        47243235,
        47243398,
        47243990,
        47243766,
        47243161,
        47243714,
        47243093,
        47243627,
        47243469,
        47243720,
        47243214,
        47243582
      ],
      "score": 175,
      "time": 1772595618,
      "title": "Nobody Gets Promoted for Simplicity",
      "type": "story",
      "url": "https://terriblesoftware.org/2026/03/03/nobody-gets-promoted-for-simplicity/"
    },
    {
      "by": "1659447091",
      "descendants": 87,
      "id": 47241817,
      "kids": [
        47243038,
        47243011,
        47243287,
        47243803,
        47242789,
        47242780,
        47243336,
        47242653,
        47243550,
        47243525,
        47243237,
        47242782,
        47243693,
        47243042,
        47243281,
        47243270,
        47243260,
        47243564,
        47243428,
        47242862,
        47243571,
        47243286
      ],
      "score": 143,
      "time": 1772587865,
      "title": "TikTok will not introduce end-to-end encryption, saying it makes users less safe",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/cly2m5e5ke4o"
    },
    {
      "by": "abetusk",
      "descendants": 7,
      "id": 47242193,
      "kids": [
        47242777,
        47243855,
        47242721
      ],
      "score": 62,
      "time": 1772590981,
      "title": "Graphics Programming Resources",
      "type": "story",
      "url": "https://develop--gpvm-website.netlify.app/resources/"
    },
    {
      "by": "rs545837",
      "descendants": 55,
      "id": 47241976,
      "kids": [
        47244116,
        47242570,
        47242900,
        47243438,
        47242612,
        47243406,
        47243163,
        47242029,
        47243027,
        47243018,
        47242454,
        47243009,
        47243313,
        47241977,
        47242346
      ],
      "score": 100,
      "time": 1772589141,
      "title": "Weave – A language aware merge algorithm based on entities",
      "type": "story",
      "url": "https://github.com/Ataraxy-Labs/weave"
    },
    {
      "by": "r4um",
      "descendants": 2,
      "id": 47243272,
      "kids": [
        47244113,
        47244047
      ],
      "score": 21,
      "time": 1772600437,
      "title": "Agentic Engineering Patterns",
      "type": "story",
      "url": "https://simonwillison.net/guides/agentic-engineering-patterns/"
    },
    {
      "by": "cypres",
      "descendants": 11,
      "id": 47243069,
      "kids": [
        47244086,
        47243888,
        47244085,
        47243809,
        47243798,
        47243896,
        47243825,
        47243883,
        47243763
      ],
      "score": 39,
      "time": 1772598632,
      "title": "A CPU that runs entirely on GPU",
      "type": "story",
      "url": "https://github.com/robertcprice/nCPU"
    },
    {
      "by": "scrlk",
      "descendants": 765,
      "id": 47232453,
      "kids": [
        47234436,
        47233173,
        47232559,
        47232614,
        47233887,
        47232572,
        47241103,
        47232730,
        47232554,
        47242861,
        47242284,
        47233246,
        47232648,
        47235552,
        47239954,
        47234639,
        47233179,
        47232700,
        47233328,
        47232922,
        47233039,
        47233554,
        47232735,
        47234734,
        47232864,
        47241784,
        47242594,
        47236074,
        47232707,
        47241928,
        47233987,
        47236835,
        47237830,
        47239793,
        47240966,
        47239935,
        47240722,
        47237555,
        47232553,
        47233795,
        47233122,
        47232578,
        47233713,
        47233356,
        47241870,
        47237276,
        47236050,
        47233942,
        47236829,
        47238922,
        47240652,
        47233223,
        47241592,
        47239319,
        47242656,
        47241057,
        47233519,
        47234437,
        47235030,
        47242206,
        47238097,
        47236265,
        47236862,
        47233619,
        47239318,
        47237491,
        47232570,
        47232542,
        47236101,
        47232878,
        47233410,
        47234434,
        47237049,
        47241314,
        47234411,
        47235396,
        47242065,
        47241789,
        47240647,
        47239407,
        47240995,
        47233301,
        47232618,
        47239436,
        47240957,
        47237714,
        47237870,
        47236095,
        47233186,
        47241603,
        47237911,
        47233338,
        47233260,
        47233235,
        47233262,
        47237862,
        47240113,
        47241672,
        47234821,
        47232869,
        47242074,
        47240148,
        47236954,
        47233084,
        47239622,
        47242230,
        47237083,
        47240640
      ],
      "score": 748,
      "time": 1772546526,
      "title": "MacBook Pro with M5 Pro and M5 Max",
      "type": "story",
      "url": "https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/"
    },
    {
      "by": "jruohonen",
      "descendants": 0,
      "id": 47205031,
      "score": 18,
      "time": 1772356144,
      "title": "On the Design of Programming Languages (1974) [pdf]",
      "type": "story",
      "url": "https://web.cs.ucdavis.edu/~su/teaching/ecs240-w17/readings/PLHistoryGoodDesign.PDF"
    },
    {
      "by": "E-Reverance",
      "descendants": 3,
      "id": 47242637,
      "kids": [
        47243580,
        47243446,
        47243301
      ],
      "score": 33,
      "time": 1772594660,
      "title": "Speculative Speculative Decoding (SSD)",
      "type": "story",
      "url": "https://arxiv.org/abs/2603.03251"
    },
    {
      "by": "fs123",
      "descendants": 235,
      "id": 47230710,
      "kids": [
        47232597,
        47238112,
        47235863,
        47235247,
        47234125,
        47243300,
        47235332,
        47242833,
        47234522,
        47234993,
        47234914,
        47232955,
        47233546,
        47234187,
        47235809,
        47242562,
        47237532,
        47235134,
        47235471,
        47243053,
        47240024,
        47243246,
        47233114
      ],
      "score": 586,
      "time": 1772535462,
      "title": "Claude's Cycles [pdf]",
      "type": "story",
      "url": "https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf"
    },
    {
      "by": "spacemarine1",
      "descendants": 47,
      "id": 47239042,
      "kids": [
        47239043,
        47241395,
        47239682,
        47242837,
        47242528,
        47240798,
        47242249,
        47243741,
        47242887,
        47243657,
        47240708,
        47241277,
        47239849,
        47243628,
        47241639,
        47241061,
        47239787,
        47241351,
        47241590,
        47242222
      ],
      "score": 167,
      "time": 1772572227,
      "title": "Voxile: A ray-traced game made in its own engine and programming language",
      "type": "story",
      "url": "https://elbowgreasegames.substack.com/p/voxray-games-pushes-major-update"
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
      "title": "Claude is an Electron App because we’ve lost native",
      "url": "https://tonsky.me/blog/fall-of-native/",
      "score": 73,
      "comments": 78,
      "tags": [
        "web"
      ],
      "id": "r8kjli"
    },
    {
      "title": "Nobody Gets Promoted for Simplicity",
      "url": "https://terriblesoftware.org/2026/03/03/nobody-gets-promoted-for-simplicity/",
      "score": 43,
      "comments": 12,
      "tags": [
        "practices"
      ],
      "id": "tznewb"
    },
    {
      "title": "Don Knuth's \"Claude-like\" directed Hamiltonian cycles decompositions",
      "url": "https://www-cs-faculty.stanford.edu/~knuth/papers/claude-cycles.pdf",
      "score": 32,
      "comments": 7,
      "tags": [
        "compsci",
        "pdf",
        "vibecoding"
      ],
      "id": "teexox"
    },
    {
      "title": "Rust zero-cost abstractions vs. SIMD",
      "url": "https://turbopuffer.com/blog/zero-cost",
      "score": 24,
      "comments": 8,
      "tags": [
        "performance",
        "rust"
      ],
      "id": "2gwqlh"
    },
    {
      "title": "Four months of Ruby Central moving Ruby backward",
      "url": "https://andre.arko.net/2026/03/03/four-months-of-ruby-central-moving-ruby-backward/",
      "score": 28,
      "comments": 2,
      "tags": [
        "ruby"
      ],
      "id": "g6moku"
    },
    {
      "title": "US Supreme Court declines to hear dispute over copyrights for AI-generated material",
      "url": "https://www.reuters.com/legal/government/us-supreme-court-declines-hear-dispute-over-copyrights-ai-generated-material-2026-03-02/",
      "score": 46,
      "comments": 8,
      "tags": [
        "law",
        "vibecoding"
      ],
      "id": "of77cp"
    },
    {
      "title": "California's Digital Age Assurance Act, and FOSS",
      "url": "https://runxiyu.org/comp/ab1043/",
      "score": 5,
      "comments": 2,
      "tags": [
        "law",
        "privacy"
      ],
      "id": "hz6vhv"
    },
    {
      "title": "When AI Writes the World's Software, Who Verifies It?",
      "url": "https://leodemoura.github.io/blog/2026/02/28/when-ai-writes-the-worlds-software.html",
      "score": 19,
      "comments": 10,
      "tags": [
        "formalmethods",
        "logiclangs",
        "vibecoding"
      ],
      "id": "zv0pyh"
    },
    {
      "title": "The Markless Document Markup Standard",
      "url": "https://shirakumo.org/docs/markless/",
      "score": 8,
      "comments": 4,
      "tags": [
        "programming"
      ],
      "id": "hu6tos"
    },
    {
      "title": "yj_nearbyglasses: attempting to detect smart glasses nearby and warn you",
      "url": "https://github.com/yjeanrenaud/yj_nearbyglasses",
      "score": 18,
      "comments": 0,
      "tags": [
        "android",
        "privacy"
      ],
      "id": "tahkfr"
    }
  ]
}
```

