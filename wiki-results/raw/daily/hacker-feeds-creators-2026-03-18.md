# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-18 06:39:30 UTC

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
      "title": "I Think a Lot of Developers Are Quietly Grieving the Old Internet",
      "description": "I think a lot of developers are carrying a kind of grief right now, but rarely naming it.  Not...",
      "url": "https://dev.to/the_nortern_dev/i-think-a-lot-of-developers-are-quietly-grieving-the-old-internet-3d8",
      "tags": "discuss, webdev, programming, culture",
      "reactions": 129,
      "comments": 82,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "What's in your headphones when you code? 🎧",
      "description": "Let's revisit this conversation!  What music, soundtracks, podcasts, etc do you listen to and is...",
      "url": "https://dev.to/ben/whats-in-your-headphones-when-you-code-51i4",
      "tags": "discuss, watercooler",
      "reactions": 49,
      "comments": 29,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Announcing the Colab MCP Server: Connect Any AI Agent to Google Colab",
      "description": "When you’re prototyping locally with AI agents like Gemini CLI, Claude Code, or your own agent, their...",
      "url": "https://dev.to/googleai/announcing-the-colab-mcp-server-connect-any-ai-agent-to-google-colab-308o",
      "tags": "cloud, agents, mcp, ai",
      "reactions": 34,
      "comments": 6,
      "reading_time": 3,
      "author": "jmew"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-cc9",
      "tags": "discuss, watercooler, jokes",
      "reactions": 56,
      "comments": 27,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Drop Your Challenge Submission Here",
      "description": "Built something for a DEV Challenge but feel like not enough people saw it?  This post is for exactly...",
      "url": "https://dev.to/axrisi/drop-your-challenge-submission-here-mej",
      "tags": "notionchallenge, weekendchallenge, geminireflections, wecoded",
      "reactions": 42,
      "comments": 25,
      "reading_time": 1,
      "author": "axrisi"
    },
    {
      "title": "Full Circle: Giving My AI's Knowledge Graph a Notion Interface using MCP",
      "description": "This is a submission for the Notion MCP Challenge  When I started building AI tools for my wife, it...",
      "url": "https://dev.to/juandastic/full-circle-giving-my-ais-knowledge-graph-a-notion-interface-using-mcp-2dmp",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 30,
      "comments": 11,
      "reading_time": 5,
      "author": "juandastic"
    },
    {
      "title": "Confident and Wrong",
      "description": "For a long time, I have been seeing AI in coding as something that enables me, amplifies my...",
      "url": "https://dev.to/maxrimue/confident-and-wrong-107o",
      "tags": "ai, swift, programming, learning",
      "reactions": 12,
      "comments": 1,
      "reading_time": 7,
      "author": "maxrimue"
    },
    {
      "title": "I built a cognitive layer for AI agents that learns without LLM calls",
      "description": "The problem   Every time your agent starts a conversation, it starts from zero.  Sure, you...",
      "url": "https://dev.to/teolex2020/i-built-a-cognitive-layer-for-ai-agents-that-learns-without-llm-calls-33no",
      "tags": "ai, memory, rust, python",
      "reactions": 20,
      "comments": 6,
      "reading_time": 2,
      "author": "teolex2020"
    },
    {
      "title": "I Built a Claude Code Agent That Doesn't Need Me Anymore",
      "description": "I gave my AI agent persistent memory and identity. Four months later, it had a life I knew nothing about.",
      "url": "https://dev.to/jkheadley/i-built-a-claude-code-agent-that-doesnt-need-me-anymore-dfm",
      "tags": "ai, opensource, claudecode, typescript",
      "reactions": 7,
      "comments": 1,
      "reading_time": 7,
      "author": "jkheadley"
    },
    {
      "title": "Path of Discovery",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience  A bit personal, a bit all...",
      "url": "https://dev.to/annavi11arrea1/path-of-discovery-1aoi",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 31,
      "comments": 7,
      "reading_time": 4,
      "author": "annavi11arrea1"
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
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 393,
      "added_stars": 6259,
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
          "username": "VaishnavGunjari",
          "href": "https://github.com/VaishnavGunjari",
          "avatar": "https://avatars.githubusercontent.com/u/169933825"
        },
        {
          "username": "whchi",
          "href": "https://github.com/whchi",
          "avatar": "https://avatars.githubusercontent.com/u/11798731"
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
      "forks": 10914,
      "added_stars": 12692,
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
          "username": "shimo4228",
          "href": "https://github.com/shimo4228",
          "avatar": "https://avatars.githubusercontent.com/u/54734315"
        }
      ]
    },
    {
      "author": "hmjz100",
      "repo": "LinkSwift",
      "avatar": "https://github.com/hmjz100.png",
      "repo_link": "https://github.com/hmjz100/LinkSwift",
      "desc": "一个基于 JavaScript 的网盘文件下载地址获取工具。基于【网盘直链下载助手】修改 ，支持 百度网盘 / 阿里云盘 / 中国移动云盘 / 天翼云盘 / 迅雷云盘 / 夸克网盘 / UC网盘 / 123云盘 八大网盘",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 777,
      "added_stars": 560,
      "builtBy": [
        {
          "username": "hmjz100",
          "href": "https://github.com/hmjz100",
          "avatar": "https://avatars.githubusercontent.com/u/98228280"
        },
        {
          "username": "MisaLiu",
          "href": "https://github.com/MisaLiu",
          "avatar": "https://avatars.githubusercontent.com/u/62408957"
        },
        {
          "username": "Night-stars-1",
          "href": "https://github.com/Night-stars-1",
          "avatar": "https://avatars.githubusercontent.com/u/99261160"
        },
        {
          "username": "AstralFlare-owo",
          "href": "https://github.com/AstralFlare-owo",
          "avatar": "https://avatars.githubusercontent.com/u/46892455"
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
      "forks": 1358,
      "added_stars": 134,
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
      "author": "jaywcjlove",
      "repo": "awesome-mac",
      "avatar": "https://github.com/jaywcjlove.png",
      "repo_link": "https://github.com/jaywcjlove/awesome-mac",
      "desc": " Now we have become very big, Different from the original idea. Collect premium software in various categories.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7503,
      "added_stars": 608,
      "builtBy": [
        {
          "username": "jaywcjlove",
          "href": "https://github.com/jaywcjlove",
          "avatar": "https://avatars.githubusercontent.com/u/1680273"
        },
        {
          "username": "alichtman",
          "href": "https://github.com/alichtman",
          "avatar": "https://avatars.githubusercontent.com/u/20600565"
        },
        {
          "username": "xcv58",
          "href": "https://github.com/xcv58",
          "avatar": "https://avatars.githubusercontent.com/u/503123"
        },
        {
          "username": "heldev",
          "href": "https://github.com/heldev",
          "avatar": "https://avatars.githubusercontent.com/u/16080436"
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
      "forks": 2122,
      "added_stars": 1743,
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
      "author": "jarrodwatts",
      "repo": "claude-hud",
      "avatar": "https://github.com/jarrodwatts.png",
      "repo_link": "https://github.com/jarrodwatts/claude-hud",
      "desc": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 260,
      "added_stars": 1152,
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
      "author": "trekhleb",
      "repo": "javascript-algorithms",
      "avatar": "https://github.com/trekhleb.png",
      "repo_link": "https://github.com/trekhleb/javascript-algorithms",
      "desc": "📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 31115,
      "added_stars": 145,
      "builtBy": [
        {
          "username": "trekhleb",
          "href": "https://github.com/trekhleb",
          "avatar": "https://avatars.githubusercontent.com/u/3000285"
        },
        {
          "username": "alexstulov",
          "href": "https://github.com/alexstulov",
          "avatar": "https://avatars.githubusercontent.com/u/14953640"
        },
        {
          "username": "m-maksyutin",
          "href": "https://github.com/m-maksyutin",
          "avatar": "https://avatars.githubusercontent.com/u/29200109"
        },
        {
          "username": "appleJax",
          "href": "https://github.com/appleJax",
          "avatar": "https://avatars.githubusercontent.com/u/13618860"
        },
        {
          "username": "albertstill",
          "href": "https://github.com/albertstill",
          "avatar": "https://avatars.githubusercontent.com/u/2787876"
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
      "forks": 2755,
      "added_stars": 4240,
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
          "username": "trek-e",
          "href": "https://github.com/trek-e",
          "avatar": "https://avatars.githubusercontent.com/u/4738965"
        }
      ]
    },
    {
      "author": "fishjar",
      "repo": "kiss-translator",
      "avatar": "https://github.com/fishjar.png",
      "repo_link": "https://github.com/fishjar/kiss-translator",
      "desc": "A simple, open source bilingual translation extension & Greasemonkey script (一个简约、开源的 双语对照翻译扩展 & 油猴脚本)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 382,
      "added_stars": 105,
      "builtBy": [
        {
          "username": "fishjar",
          "href": "https://github.com/fishjar",
          "avatar": "https://avatars.githubusercontent.com/u/1157624"
        },
        {
          "username": "htyxyt",
          "href": "https://github.com/htyxyt",
          "avatar": "https://avatars.githubusercontent.com/u/62530172"
        },
        {
          "username": "XYenon",
          "href": "https://github.com/XYenon",
          "avatar": "https://avatars.githubusercontent.com/u/20698483"
        },
        {
          "username": "hoilc",
          "href": "https://github.com/hoilc",
          "avatar": "https://avatars.githubusercontent.com/u/9067094"
        },
        {
          "username": "maou-shonen",
          "href": "https://github.com/maou-shonen",
          "avatar": "https://avatars.githubusercontent.com/u/22576780"
        }
      ]
    },
    {
      "author": "docmirror",
      "repo": "dev-sidecar",
      "avatar": "https://github.com/docmirror.png",
      "repo_link": "https://github.com/docmirror/dev-sidecar",
      "desc": "开发者边车，github打不开，github加速，git clone加速，git release下载加速，stackoverflow加速",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2618,
      "added_stars": 86,
      "builtBy": [
        {
          "username": "wangliang181230",
          "href": "https://github.com/wangliang181230",
          "avatar": "https://avatars.githubusercontent.com/u/1527893"
        },
        {
          "username": "greper",
          "href": "https://github.com/greper",
          "avatar": "https://avatars.githubusercontent.com/u/1687298"
        },
        {
          "username": "starknt",
          "href": "https://github.com/starknt",
          "avatar": "https://avatars.githubusercontent.com/u/64941905"
        },
        {
          "username": "cute-omega",
          "href": "https://github.com/cute-omega",
          "avatar": "https://avatars.githubusercontent.com/u/92797441"
        },
        {
          "username": "Mryan2005",
          "href": "https://github.com/Mryan2005",
          "avatar": "https://avatars.githubusercontent.com/u/40586009"
        }
      ]
    },
    {
      "author": "tabler",
      "repo": "tabler-icons",
      "avatar": "https://github.com/tabler.png",
      "repo_link": "https://github.com/tabler/tabler-icons",
      "desc": "A set of over 5900 free MIT-licensed high-quality SVG icons for you to use in your web projects.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1097,
      "added_stars": 79,
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
      "title": "Announcing the Colab MCP Server: Connect Any AI Agent to Google Colab",
      "description": "When you’re prototyping locally with AI agents like Gemini CLI, Claude Code, or your own agent, their...",
      "url": "https://dev.to/googleai/announcing-the-colab-mcp-server-connect-any-ai-agent-to-google-colab-308o",
      "tags": "cloud, agents, mcp, ai",
      "reactions": 34,
      "comments": 6,
      "reading_time": 3,
      "author": "jmew"
    },
    {
      "title": "Full Circle: Giving My AI's Knowledge Graph a Notion Interface using MCP",
      "description": "This is a submission for the Notion MCP Challenge  When I started building AI tools for my wife, it...",
      "url": "https://dev.to/juandastic/full-circle-giving-my-ais-knowledge-graph-a-notion-interface-using-mcp-2dmp",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 30,
      "comments": 11,
      "reading_time": 5,
      "author": "juandastic"
    },
    {
      "title": "Confident and Wrong",
      "description": "For a long time, I have been seeing AI in coding as something that enables me, amplifies my...",
      "url": "https://dev.to/maxrimue/confident-and-wrong-107o",
      "tags": "ai, swift, programming, learning",
      "reactions": 12,
      "comments": 1,
      "reading_time": 7,
      "author": "maxrimue"
    },
    {
      "title": "I built a cognitive layer for AI agents that learns without LLM calls",
      "description": "The problem   Every time your agent starts a conversation, it starts from zero.  Sure, you...",
      "url": "https://dev.to/teolex2020/i-built-a-cognitive-layer-for-ai-agents-that-learns-without-llm-calls-33no",
      "tags": "ai, memory, rust, python",
      "reactions": 20,
      "comments": 6,
      "reading_time": 2,
      "author": "teolex2020"
    },
    {
      "title": "Setting Up CocoIndex with Docker and pgvector - A Practical Guide",
      "description": "A step-by-step guide to setting up CocoIndex with Docker, pgvector, and semantic search - covering all the gotchas the docs don't mention.",
      "url": "https://dev.to/cdnsteve/setting-up-cocoindex-with-docker-and-pgvector-a-practical-guide-3mag",
      "tags": "python, docker, postgres, ai",
      "reactions": 12,
      "comments": 1,
      "reading_time": 5,
      "author": "cdnsteve"
    },
    {
      "title": "How I Built a Free AI Life Coach That Real People Use",
      "description": "Most self-improvement apps track one thing — fitness, meditation, or money. But your life doesn't...",
      "url": "https://dev.to/harm_rietmeijer_6a266b11e/how-i-built-a-free-ai-life-coach-that-real-people-use-4fl1",
      "tags": "ai, mentalhealth, productivity, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "harm_rietmeijer_6a266b11e"
    },
    {
      "title": "I Built a Claude Code Agent That Doesn't Need Me Anymore",
      "description": "I gave my AI agent persistent memory and identity. Four months later, it had a life I knew nothing about.",
      "url": "https://dev.to/jkheadley/i-built-a-claude-code-agent-that-doesnt-need-me-anymore-dfm",
      "tags": "ai, opensource, claudecode, typescript",
      "reactions": 7,
      "comments": 1,
      "reading_time": 7,
      "author": "jkheadley"
    },
    {
      "title": "Leap in Log Collection Efficiency: Comprehensive Upgrade from iLogtail to LoongCollector",
      "description": "This article introduces LoongCollector, a comprehensive upgrade from iLogtail that boosts log...",
      "url": "https://dev.to/observabilityguy/leap-in-log-collection-efficiency-comprehensive-upgrade-from-ilogtail-to-loongcollector-4pea",
      "tags": "ai, loongcollector",
      "reactions": 0,
      "comments": 0,
      "reading_time": 11,
      "author": "observabilityguy"
    },
    {
      "title": "I gave a local LLM memory, moods, and a task loop. Then it wrote a philosophical book.",
      "description": "The Problem with AI Today: Goldfish Memory   Most of our interactions with AI today look...",
      "url": "https://dev.to/southy404/i-gave-a-local-llm-memory-moods-and-a-task-loop-then-it-wrote-a-philosophical-book-57o8",
      "tags": "ai, showdev, llm, architecture",
      "reactions": 3,
      "comments": 0,
      "reading_time": 3,
      "author": "southy404"
    },
    {
      "title": "Building a Custom Telegram Bot with AI: Beyond Simple Commands",
      "description": "{   \"title\": \"Building a Custom Telegram Bot with AI: Beyond Simple Commands\",   \"body_markdown\": \"#...",
      "url": "https://dev.to/eqhoids/building-a-custom-telegram-bot-with-ai-beyond-simple-commands-ead",
      "tags": "telegram, ai, python, chatbot",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "eqhoids"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "asukachikaru",
      "descendants": 71,
      "id": 47421442,
      "kids": [
        47422274,
        47421793,
        47422262,
        47422180,
        47421922,
        47422158,
        47422169,
        47422110,
        47422060,
        47422126,
        47422149,
        47421722,
        47421994,
        47422074,
        47422115,
        47422209,
        47422088,
        47421803,
        47422067,
        47421949,
        47421918,
        47422113,
        47422010,
        47421539,
        47421723,
        47421729,
        47421694,
        47421885
      ],
      "score": 154,
      "time": 1773806022,
      "title": "Have a Fucking Website",
      "type": "story",
      "url": "https://www.otherstrangeness.com/2026/03/14/have-a-fucking-website/"
    },
    {
      "by": "apitman",
      "descendants": 39,
      "id": 47421828,
      "kids": [
        47422075,
        47422237,
        47421984,
        47422087,
        47421890,
        47421979,
        47422207,
        47422271,
        47421959,
        47421972,
        47422245,
        47421889,
        47422214,
        47422159,
        47422154,
        47422041
      ],
      "score": 60,
      "time": 1773811082,
      "title": "SSH has no Host header",
      "type": "story",
      "url": "https://blog.exe.dev/ssh-host-header"
    },
    {
      "by": "mwkaufma",
      "descendants": 47,
      "id": 47416736,
      "kids": [
        47417208,
        47418161,
        47419078,
        47421404,
        47417818,
        47420450,
        47418420,
        47420189,
        47420774,
        47418030,
        47417621,
        47418830,
        47418294,
        47420095,
        47419339,
        47418826,
        47418584,
        47417840,
        47417441,
        47420248,
        47417611,
        47420322,
        47420721
      ],
      "score": 535,
      "text": "<a href=\"https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260317185928&#x2F;https:&#x2F;&#x2F;terathon.com&#x2F;blog&#x2F;decade-slug.html\" rel=\"nofollow\">https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260317185928&#x2F;https:&#x2F;&#x2F;terathon....</a>",
      "time": 1773773990,
      "title": "A Decade of Slug",
      "type": "story",
      "url": "https://terathon.com/blog/decade-slug.html"
    },
    {
      "by": "crtasm",
      "descendants": 220,
      "id": 47413876,
      "kids": [
        47415701,
        47414568,
        47414564,
        47414830,
        47415901,
        47414636,
        47416060,
        47415715,
        47422098,
        47419284,
        47419448,
        47414926,
        47417807,
        47417254,
        47416988,
        47418886,
        47416957,
        47417315,
        47414893,
        47417738,
        47417830,
        47420409,
        47414546,
        47415885,
        47416295,
        47416006,
        47414794,
        47417795,
        47414459
      ],
      "score": 623,
      "time": 1773760589,
      "title": "Microsoft's 'unhackable' Xbox One has been hacked by 'Bliss'",
      "type": "story",
      "url": "https://www.tomshardware.com/video-games/console-gaming/microsofts-unhackable-xbox-one-has-been-hacked-by-bliss-the-2013-console-finally-fell-to-voltage-glitching-allowing-the-loading-of-unsigned-code-at-every-level"
    },
    {
      "by": "iosifnicolae2",
      "descendants": 12,
      "id": 47369883,
      "kids": [
        47421183,
        47421955,
        47422030,
        47420830,
        47421860,
        47421509,
        47421537,
        47421141
      ],
      "score": 151,
      "time": 1773435875,
      "title": "More than 135 open hardware devices flashable with your own firmware",
      "type": "story",
      "url": "https://openhardware.directory"
    },
    {
      "by": "pember",
      "descendants": 46,
      "id": 47418295,
      "kids": [
        47422272,
        47421831,
        47422222,
        47420023,
        47421200,
        47419819,
        47422043,
        47420520,
        47420744,
        47419912,
        47420557,
        47421177,
        47420507,
        47421925,
        47420946,
        47420483,
        47420777,
        47418496,
        47421155
      ],
      "score": 273,
      "time": 1773781466,
      "title": "Mistral AI Releases Forge",
      "type": "story",
      "url": "https://mistral.ai/news/forge"
    },
    {
      "by": "guidoiaquinti",
      "descendants": 155,
      "id": 47416486,
      "kids": [
        47421339,
        47418043,
        47419401,
        47419755,
        47419522,
        47417799,
        47419727,
        47417919,
        47419735,
        47419994,
        47418261,
        47418293,
        47418415,
        47419777,
        47420055,
        47420612,
        47418902,
        47418448,
        47417993,
        47419817
      ],
      "score": 337,
      "time": 1773772647,
      "title": "Python 3.15's JIT is now back on track",
      "type": "story",
      "url": "https://fidget-spinner.github.io/posts/jit-on-track.html"
    },
    {
      "by": "stefankuehnel",
      "descendants": 141,
      "id": 47417804,
      "kids": [
        47422065,
        47418626,
        47420236,
        47418177,
        47419760,
        47419476,
        47421174,
        47418296,
        47420772,
        47419539,
        47422091,
        47418427,
        47419626,
        47419559,
        47418148,
        47418147,
        47419290,
        47419580,
        47419806,
        47418851,
        47420983,
        47418650,
        47421006,
        47419801,
        47419510,
        47422032,
        47418128,
        47420059,
        47418759,
        47419535,
        47419793,
        47418860,
        47418071,
        47419048,
        47419976,
        47419678,
        47419421,
        47420741,
        47420551,
        47419890,
        47421102,
        47418141,
        47421900,
        47420624,
        47419229
      ],
      "score": 285,
      "time": 1773779019,
      "title": "Get Shit Done: A meta-prompting, context engineering and spec-driven dev system",
      "type": "story",
      "url": "https://github.com/gsd-build/get-shit-done"
    },
    {
      "by": "adammiribyan",
      "descendants": 24,
      "id": 47412569,
      "kids": [
        47420878,
        47422034,
        47420684,
        47420839,
        47420508,
        47421263,
        47420820,
        47420711,
        47421087,
        47420521,
        47420810,
        47420340,
        47421663,
        47420889,
        47422210
      ],
      "score": 114,
      "text": "I wanted to see how fast an isolated code sandbox could start if I never had to boot a fresh VM.<p>So instead of launching a new microVM per execution, I boot Firecracker once with Python and numpy already loaded, then snapshot the full VM state. Every execution after that creates a new KVM VM backed by a `MAP_PRIVATE` mapping of the snapshot memory, so Linux gives me copy-on-write pages automatically.<p>That means each sandbox starts from an already-running Python process inside a real VM, runs the code, and exits.<p>These are real KVM VMs, not containers: separate guest kernel, separate guest memory, separate page tables. When a VM writes to memory, it gets a private copy of that page.<p>The hard part was not CoW itself. The hard part was resuming the snapshotted VM correctly.<p>Rust, Apache 2.0.",
      "time": 1773755024,
      "title": "Show HN: Sub-millisecond VM sandboxes using CoW memory forking",
      "type": "story",
      "url": "https://github.com/adammiribyan/zeroboot"
    },
    {
      "by": "NaOH",
      "descendants": 23,
      "id": 47420432,
      "kids": [
        47422231,
        47421116,
        47421416,
        47420920,
        47421292,
        47421947,
        47421743,
        47421334,
        47421020,
        47420891
      ],
      "score": 70,
      "time": 1773795645,
      "title": "The pleasures of poor product design",
      "type": "story",
      "url": "https://www.inconspicuous.info/p/the-pleasures-of-poor-product-design"
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
      "by": "asukachikaru",
      "descendants": 71,
      "id": 47421442,
      "kids": [
        47422274,
        47421793,
        47422262,
        47422180,
        47421922,
        47422158,
        47422169,
        47422110,
        47422060,
        47422126,
        47422149,
        47421722,
        47421994,
        47422074,
        47422115,
        47422209,
        47422088,
        47421803,
        47422067,
        47421949,
        47421918,
        47422113,
        47422010,
        47421539,
        47421723,
        47421729,
        47421694,
        47421885
      ],
      "score": 154,
      "time": 1773806022,
      "title": "Have a Fucking Website",
      "type": "story",
      "url": "https://www.otherstrangeness.com/2026/03/14/have-a-fucking-website/"
    },
    {
      "by": "apitman",
      "descendants": 39,
      "id": 47421828,
      "kids": [
        47422075,
        47422237,
        47421984,
        47422087,
        47421890,
        47421979,
        47422207,
        47422271,
        47421959,
        47421972,
        47422245,
        47421889,
        47422214,
        47422159,
        47422154,
        47422041
      ],
      "score": 60,
      "time": 1773811082,
      "title": "SSH has no Host header",
      "type": "story",
      "url": "https://blog.exe.dev/ssh-host-header"
    },
    {
      "by": "mwkaufma",
      "descendants": 47,
      "id": 47416736,
      "kids": [
        47417208,
        47418161,
        47419078,
        47421404,
        47417818,
        47420450,
        47418420,
        47420189,
        47420774,
        47418030,
        47417621,
        47418830,
        47418294,
        47420095,
        47419339,
        47418826,
        47418584,
        47417840,
        47417441,
        47420248,
        47417611,
        47420322,
        47420721
      ],
      "score": 535,
      "text": "<a href=\"https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260317185928&#x2F;https:&#x2F;&#x2F;terathon.com&#x2F;blog&#x2F;decade-slug.html\" rel=\"nofollow\">https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260317185928&#x2F;https:&#x2F;&#x2F;terathon....</a>",
      "time": 1773773990,
      "title": "A Decade of Slug",
      "type": "story",
      "url": "https://terathon.com/blog/decade-slug.html"
    },
    {
      "by": "crtasm",
      "descendants": 220,
      "id": 47413876,
      "kids": [
        47415701,
        47414568,
        47414564,
        47414830,
        47415901,
        47414636,
        47416060,
        47415715,
        47422098,
        47419284,
        47419448,
        47414926,
        47417807,
        47417254,
        47416988,
        47418886,
        47416957,
        47417315,
        47414893,
        47417738,
        47417830,
        47420409,
        47414546,
        47415885,
        47416295,
        47416006,
        47414794,
        47417795,
        47414459
      ],
      "score": 623,
      "time": 1773760589,
      "title": "Microsoft's 'unhackable' Xbox One has been hacked by 'Bliss'",
      "type": "story",
      "url": "https://www.tomshardware.com/video-games/console-gaming/microsofts-unhackable-xbox-one-has-been-hacked-by-bliss-the-2013-console-finally-fell-to-voltage-glitching-allowing-the-loading-of-unsigned-code-at-every-level"
    },
    {
      "by": "iosifnicolae2",
      "descendants": 12,
      "id": 47369883,
      "kids": [
        47421183,
        47421955,
        47422030,
        47420830,
        47421860,
        47421509,
        47421537,
        47421141
      ],
      "score": 151,
      "time": 1773435875,
      "title": "More than 135 open hardware devices flashable with your own firmware",
      "type": "story",
      "url": "https://openhardware.directory"
    },
    {
      "by": "pember",
      "descendants": 46,
      "id": 47418295,
      "kids": [
        47422272,
        47421831,
        47422222,
        47420023,
        47421200,
        47419819,
        47422043,
        47420520,
        47420744,
        47419912,
        47420557,
        47421177,
        47420507,
        47421925,
        47420946,
        47420483,
        47420777,
        47418496,
        47421155
      ],
      "score": 273,
      "time": 1773781466,
      "title": "Mistral AI Releases Forge",
      "type": "story",
      "url": "https://mistral.ai/news/forge"
    },
    {
      "by": "guidoiaquinti",
      "descendants": 155,
      "id": 47416486,
      "kids": [
        47421339,
        47418043,
        47419401,
        47419755,
        47419522,
        47417799,
        47419727,
        47417919,
        47419735,
        47419994,
        47418261,
        47418293,
        47418415,
        47419777,
        47420055,
        47420612,
        47418902,
        47418448,
        47417993,
        47419817
      ],
      "score": 337,
      "time": 1773772647,
      "title": "Python 3.15's JIT is now back on track",
      "type": "story",
      "url": "https://fidget-spinner.github.io/posts/jit-on-track.html"
    },
    {
      "by": "stefankuehnel",
      "descendants": 141,
      "id": 47417804,
      "kids": [
        47422065,
        47418626,
        47420236,
        47418177,
        47419760,
        47419476,
        47421174,
        47418296,
        47420772,
        47419539,
        47422091,
        47418427,
        47419626,
        47419559,
        47418148,
        47418147,
        47419290,
        47419580,
        47419806,
        47418851,
        47420983,
        47418650,
        47421006,
        47419801,
        47419510,
        47422032,
        47418128,
        47420059,
        47418759,
        47419535,
        47419793,
        47418860,
        47418071,
        47419048,
        47419976,
        47419678,
        47419421,
        47420741,
        47420551,
        47419890,
        47421102,
        47418141,
        47421900,
        47420624,
        47419229
      ],
      "score": 285,
      "time": 1773779019,
      "title": "Get Shit Done: A meta-prompting, context engineering and spec-driven dev system",
      "type": "story",
      "url": "https://github.com/gsd-build/get-shit-done"
    },
    {
      "by": "adammiribyan",
      "descendants": 24,
      "id": 47412569,
      "kids": [
        47420878,
        47422034,
        47420684,
        47420839,
        47420508,
        47421263,
        47420820,
        47420711,
        47421087,
        47420521,
        47420810,
        47420340,
        47421663,
        47420889,
        47422210
      ],
      "score": 114,
      "text": "I wanted to see how fast an isolated code sandbox could start if I never had to boot a fresh VM.<p>So instead of launching a new microVM per execution, I boot Firecracker once with Python and numpy already loaded, then snapshot the full VM state. Every execution after that creates a new KVM VM backed by a `MAP_PRIVATE` mapping of the snapshot memory, so Linux gives me copy-on-write pages automatically.<p>That means each sandbox starts from an already-running Python process inside a real VM, runs the code, and exits.<p>These are real KVM VMs, not containers: separate guest kernel, separate guest memory, separate page tables. When a VM writes to memory, it gets a private copy of that page.<p>The hard part was not CoW itself. The hard part was resuming the snapshotted VM correctly.<p>Rust, Apache 2.0.",
      "time": 1773755024,
      "title": "Show HN: Sub-millisecond VM sandboxes using CoW memory forking",
      "type": "story",
      "url": "https://github.com/adammiribyan/zeroboot"
    },
    {
      "by": "NaOH",
      "descendants": 23,
      "id": 47420432,
      "kids": [
        47422231,
        47421116,
        47421416,
        47420920,
        47421292,
        47421947,
        47421743,
        47421334,
        47421020,
        47420891
      ],
      "score": 70,
      "time": 1773795645,
      "title": "The pleasures of poor product design",
      "type": "story",
      "url": "https://www.inconspicuous.info/p/the-pleasures-of-poor-product-design"
    },
    {
      "by": "vinhnx",
      "descendants": 0,
      "id": 47372367,
      "score": 8,
      "time": 1773451908,
      "title": "JPEG Compression",
      "type": "story",
      "url": "https://www.sophielwang.com/blog/jpeg"
    },
    {
      "by": "mrwh",
      "descendants": 12,
      "id": 47384653,
      "kids": [
        47421727,
        47384654,
        47421929
      ],
      "score": 35,
      "time": 1773553595,
      "title": "Leviathan (1651)",
      "type": "story",
      "url": "https://www.gutenberg.org/files/3207/3207-h/3207-h.htm"
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
      "title": "A sufficiently detailed spec is code",
      "url": "https://haskellforall.com/2026/03/a-sufficiently-detailed-spec-is-code",
      "score": 65,
      "comments": 18,
      "tags": [
        "vibecoding"
      ],
      "id": "nlyezv"
    },
    {
      "title": "Age-Gating Isn’t About Kids, It’s About Control",
      "url": "https://www.eff.org/deeplinks/2026/03/rep-finke-was-right-age-gating-isnt-about-kids-its-about-control",
      "score": 135,
      "comments": 48,
      "tags": [
        "law"
      ],
      "id": "3hojx1"
    },
    {
      "title": "Python 3.15’s JIT is now back on track",
      "url": "https://fidget-spinner.github.io/posts/jit-on-track.html",
      "score": 34,
      "comments": 7,
      "tags": [
        "performance",
        "plt",
        "python"
      ],
      "id": "nvlqyc"
    },
    {
      "title": "Every layer of review makes you 10x slower",
      "url": "https://apenwarr.ca/log/20260316",
      "score": 76,
      "comments": 15,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "elfva4"
    },
    {
      "title": "Jepsen: MariaDB Galera Cluster 12.1.2",
      "url": "https://jepsen.io/analyses/mariadb-galera-cluster-12.1.2",
      "score": 73,
      "comments": 8,
      "tags": [
        "databases",
        "distributed",
        "testing"
      ],
      "id": "7olqjk"
    },
    {
      "title": "The Most Important Software Innovations",
      "url": "https://dwheeler.com/innovation/innovation.html",
      "score": 6,
      "comments": 6,
      "tags": [
        "historical"
      ],
      "id": "j5m4fq"
    },
    {
      "title": "yes, all longest regex matches in linear time is possible",
      "url": "https://iev.ee/blog/all-longest-regex-matches-in-linear-time/",
      "score": 48,
      "comments": 0,
      "tags": [
        "compsci",
        "rust"
      ],
      "id": "jtp62p"
    },
    {
      "title": "Introducing postmarketOS Duranium: a more reliable postmarketOS",
      "url": "https://postmarketos.org/blog/2026/03/17/introducing-duranium/",
      "score": 32,
      "comments": 0,
      "tags": [
        "linux",
        "mobile"
      ],
      "id": "ebjelg"
    },
    {
      "title": "A Decade of Slug",
      "url": "https://terathon.com/blog/decade-slug.html",
      "score": 21,
      "comments": 0,
      "tags": [
        "graphics"
      ],
      "id": "3ixbzr"
    },
    {
      "title": "AI - Assassinating Intelligence",
      "url": "https://yashgarg.dev/posts/ai-slop/",
      "score": 5,
      "comments": 1,
      "tags": [
        "rant",
        "vibecoding"
      ],
      "id": "dsi02i"
    }
  ]
}
```

