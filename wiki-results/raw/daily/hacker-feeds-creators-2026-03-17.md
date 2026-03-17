# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-17 07:18:56 UTC

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
      "reactions": 74,
      "comments": 65,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-cc9",
      "tags": "discuss, watercooler, jokes",
      "reactions": 44,
      "comments": 20,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "The Firebreak",
      "description": "Go-live day has a very specific energy. There's the final pre-launch checks. DNS propagating, smoke...",
      "url": "https://dev.to/davidisnotnull/the-firebreak-1oej",
      "tags": "devex, productmanagement",
      "reactions": 9,
      "comments": 0,
      "reading_time": 4,
      "author": "davidisnotnull"
    },
    {
      "title": "I built an open-source \"focus group simulator\" that spawns 1,000 AI customers to roast your startup idea",
      "description": "The Problem  Every founder has been there: you spend 3 months building something, launch it, and......",
      "url": "https://dev.to/nghiahsgs/i-built-an-open-source-focus-group-simulator-that-spawns-1000-ai-customers-to-roast-your-startup-1c5o",
      "tags": "webdev, opensource",
      "reactions": 12,
      "comments": 2,
      "reading_time": 2,
      "author": "nghiahsgs"
    },
    {
      "title": "I Built a Browser UI for Claude Code — Here's Why",
      "description": "I started using Claude Code a few months ago. Terminal-first, no nonsense, incredibly powerful. But...",
      "url": "https://dev.to/hamed_farag/i-built-a-browser-ui-for-claude-code-heres-why-4959",
      "tags": "claude, ai, opensource, devex",
      "reactions": 17,
      "comments": 5,
      "reading_time": 8,
      "author": "hamed_farag"
    },
    {
      "title": "Rethinking Architecture in the AI Era — Part 1: Repository Management",
      "description": "This is the first installment of a series on software product architecture for the AI age. There's no...",
      "url": "https://dev.to/iktakahiro/rethinking-architecture-in-the-ai-era-part-1-repository-management-2ia4",
      "tags": "webdev, ai, programming",
      "reactions": 16,
      "comments": 1,
      "reading_time": 4,
      "author": "iktakahiro"
    },
    {
      "title": "How I Built Niobe: An AI Waitress with Gemini Live and Google Cloud",
      "description": "Disclaimer: I created this blog post for the purposes of entering the Gemini Live Agent Challenge...",
      "url": "https://dev.to/provydon/how-i-built-niobe-an-ai-waitress-with-gemini-live-and-google-cloud-2o28",
      "tags": "devchallenge, gemini, googlecloud, showdev",
      "reactions": 9,
      "comments": 0,
      "reading_time": 4,
      "author": "provydon"
    },
    {
      "title": "One regex to match them all",
      "description": "Last year I was building a single-page app with SvelteKit. Nothing fancy—a handful of views,...",
      "url": "https://dev.to/ferderer/one-regex-to-match-them-all-228h",
      "tags": "webdev, javascript, typescript, opensource",
      "reactions": 10,
      "comments": 0,
      "reading_time": 3,
      "author": "ferderer"
    },
    {
      "title": "Backstage logbook: Migrating the Catalog Plugin to the New Frontend System",
      "description": "The Backstage new frontend system support is growing, and I figured I needed to carve out some time to really understand it. I took the Catalog plugin migration, from the legacy frontend system to the new one, as my learning ground to see how all the different customisation points work in practice. Here you'll see my process following the migration, step by step.",
      "url": "https://dev.to/sarabadu/backstage-logbook-migrating-the-catalog-plugin-to-the-new-frontend-system-f6",
      "tags": "backstage, nfs, migrations",
      "reactions": 15,
      "comments": 0,
      "reading_time": 9,
      "author": "sarabadu"
    },
    {
      "title": "The Local AI Powerhouse",
      "description": "Introduction   Keeping up with everything AI-related in the recent months has got me...",
      "url": "https://dev.to/amjadmh73/the-local-ai-powerhouse-28j",
      "tags": "ai, qwen, localllm, gptoss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "amjadmh73"
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
      "forks": 365,
      "added_stars": 6515,
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
      "author": "hmjz100",
      "repo": "LinkSwift",
      "avatar": "https://github.com/hmjz100.png",
      "repo_link": "https://github.com/hmjz100/LinkSwift",
      "desc": "一个基于 JavaScript 的网盘文件下载地址获取工具。基于【网盘直链下载助手】修改 ，支持 百度网盘 / 阿里云盘 / 中国移动云盘 / 天翼云盘 / 迅雷云盘 / 夸克网盘 / UC网盘 / 123云盘 八大网盘",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 771,
      "added_stars": 515,
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
      "author": "jaywcjlove",
      "repo": "awesome-mac",
      "avatar": "https://github.com/jaywcjlove.png",
      "repo_link": "https://github.com/jaywcjlove/awesome-mac",
      "desc": " Now we have become very big, Different from the original idea. Collect premium software in various categories.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7500,
      "added_stars": 590,
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
      "forks": 2085,
      "added_stars": 1765,
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
      "author": "jgraph",
      "repo": "drawio",
      "avatar": "https://github.com/jgraph.png",
      "repo_link": "https://github.com/jgraph/drawio",
      "desc": "draw.io is a JavaScript, client-side editor for general diagramming.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 717,
      "added_stars": 197,
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
      "author": "libaxuan",
      "repo": "cursor2api-go",
      "avatar": "https://github.com/libaxuan.png",
      "repo_link": "https://github.com/libaxuan/cursor2api-go",
      "desc": "Free claude-sonnet-4.6 | cursor不倒我不倒🙏 ❌ 不支持 tools / function calling / MCP",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 278,
      "added_stars": 296,
      "builtBy": [
        {
          "username": "libaxuan",
          "href": "https://github.com/libaxuan",
          "avatar": "https://avatars.githubusercontent.com/u/33255877"
        },
        {
          "username": "highkay",
          "href": "https://github.com/highkay",
          "avatar": "https://avatars.githubusercontent.com/u/443490"
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
      "forks": 2626,
      "added_stars": 4169,
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
      "author": "lockfale",
      "repo": "OSINT-Framework",
      "avatar": "https://github.com/lockfale.png",
      "repo_link": "https://github.com/lockfale/OSINT-Framework",
      "desc": "OSINT Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1792,
      "added_stars": 80,
      "builtBy": [
        {
          "username": "s0lray",
          "href": "https://github.com/s0lray",
          "avatar": "https://avatars.githubusercontent.com/u/16158727"
        },
        {
          "username": "mrpnkt",
          "href": "https://github.com/mrpnkt",
          "avatar": "https://avatars.githubusercontent.com/u/2102625"
        },
        {
          "username": "Giddlers",
          "href": "https://github.com/Giddlers",
          "avatar": "https://avatars.githubusercontent.com/u/212430952"
        },
        {
          "username": "scanpatch",
          "href": "https://github.com/scanpatch",
          "avatar": "https://avatars.githubusercontent.com/u/3992998"
        },
        {
          "username": "bcoles",
          "href": "https://github.com/bcoles",
          "avatar": "https://avatars.githubusercontent.com/u/434827"
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
      "added_stars": 100,
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
      "title": "Maybe there's a little time left",
      "description": "When everything's AI, nothing's AI",
      "url": "https://dev.to/moopet/maybe-theres-a-little-time-left-1ml3",
      "tags": "ai, discuss, watercooler",
      "reactions": 13,
      "comments": 1,
      "reading_time": 2,
      "author": "moopet"
    },
    {
      "title": "Waypoint — Building a Universal Intent Layer for the Web",
      "description": "This article was written as part of my submission for the Google Gemini Live Agent Challenge....",
      "url": "https://dev.to/prof2k/waypoint-building-a-universal-intent-layer-for-the-web-55a5",
      "tags": "ai, geminihackathon, googlecloud, a11y",
      "reactions": 0,
      "comments": 2,
      "reading_time": 7,
      "author": "prof2k"
    },
    {
      "title": "How I built sandboxes that boot in 28ms using Firecracker snapshots",
      "description": "A deep-dive into building a sandbox orchestrator that gives AI agents their own isolated machines....",
      "url": "https://dev.to/adwitiya/how-i-built-sandboxes-that-boot-in-28ms-using-firecracker-snapshots-i0k",
      "tags": "go, agents, linux, ai",
      "reactions": 1,
      "comments": 0,
      "reading_time": 7,
      "author": "adwitiya"
    },
    {
      "title": "Why your Production Retreival-Augmented-Generation (RAG) is failing and how to fix it?",
      "description": "Why Most RAG Systems Fail in Production — and How Developers Can Fix It  Over the past 2-3 years,...",
      "url": "https://dev.to/royanannya/is-your-production-rag-giving-up-too-3pi0",
      "tags": "ai, systemdesign, rag, aws",
      "reactions": 2,
      "comments": 0,
      "reading_time": 4,
      "author": "royanannya"
    },
    {
      "title": "Building Heritage Keeper: A Gemini Live Agent for Family Story Preservatio",
      "description": "How I used the Gemini Live API with native audio, function calling, and Google Search grounding to...",
      "url": "https://dev.to/billkhiz/building-heritage-keeper-a-gemini-live-agent-for-family-story-preservatio-57fk",
      "tags": "agents, ai, gemini, showdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "billkhiz"
    },
    {
      "title": "Building Argus: A Voice-Driven SOC Copilot with Gemini Live",
      "description": "When a critical alert flashes at 3:00 AM, SOC analysts usually waste precious minutes manually...",
      "url": "https://dev.to/pratima-sapkota/building-argus-a-voice-driven-soc-copilot-with-gemini-live-2np6",
      "tags": "geminiliveagentchallenge, cybersecurity, ai, python",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "pratima-sapkota"
    },
    {
      "title": "Disney Built a Walking, Talking Olaf Robot — And Nvidia Powered the Whole Thing",
      "description": "Disney just put a real, walking Olaf robot on stage at Nvidia's GTC 2026 keynote. Not a screen. Not a...",
      "url": "https://dev.to/tyson_cung/disney-built-a-walking-talking-olaf-robot-and-nvidia-powered-the-whole-thing-7em",
      "tags": "nvidia, ai, robotics, disney",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "tyson_cung"
    },
    {
      "title": "Claude Code vs Cursor: What I Learned Using Both for 30 Days",
      "description": "I spent the last month using both Claude Code and Cursor as my primary AI coding tools. Not as a...",
      "url": "https://dev.to/hugo662/claude-code-vs-cursor-what-i-learned-using-both-for-30-days-17en",
      "tags": "ai, programming, discuss, tooling",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "hugo662"
    },
    {
      "title": "Why AI Agents Need a Trust Layer",
      "description": "Your agent calls an API. It gets JSON back. It makes a decision based on that data.  But how does it...",
      "url": "https://dev.to/petter-strale/why-ai-agents-need-a-trust-layer-205",
      "tags": "ai, agents, mcp, trust",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "petter-strale"
    },
    {
      "title": "Everyone Agrees Agent Identity Is the Problem. Nobody Agrees on the Solution.",
      "description": "Enterprise security just discovered that AI agents need identity. In the last week alone:    Token...",
      "url": "https://dev.to/thenexusguard/everyone-agrees-agent-identity-is-the-problem-nobody-agrees-on-the-solution-jf7",
      "tags": "ai, security, identity, agents",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "thenexusguard"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "smitec",
      "descendants": 84,
      "id": 47408703,
      "kids": [
        47408858,
        47409493,
        47408967,
        47408940,
        47409260,
        47409310,
        47408854,
        47409566,
        47409509,
        47409267,
        47409505,
        47409216,
        47409363,
        47409051,
        47409291,
        47409492,
        47409294,
        47409382,
        47409236,
        47408977,
        47408755,
        47409283,
        47409404,
        47409210,
        47409285,
        47409205,
        47409214,
        47409323,
        47409177,
        47409050,
        47409188,
        47409398,
        47409007,
        47409318,
        47409072,
        47408964,
        47409079,
        47409243,
        47409428,
        47409076,
        47408984,
        47409359,
        47409008,
        47409408,
        47409112,
        47409316,
        47409032,
        47409377,
        47409340,
        47409265,
        47409563,
        47409336,
        47409161,
        47409438,
        47409386,
        47408876,
        47409156,
        47409337
      ],
      "score": 323,
      "time": 1773722382,
      "title": "Kagi Translate now supports LinkedIn Speak as an output language",
      "type": "story",
      "url": "https://translate.kagi.com/?from=en&to=LinkedIn+speak"
    },
    {
      "by": "djoldman",
      "descendants": 288,
      "id": 47406779,
      "kids": [
        47407646,
        47407270,
        47407350,
        47407980,
        47407463,
        47409146,
        47409047,
        47407048,
        47407351,
        47407002,
        47407488,
        47409384,
        47406934,
        47407798,
        47408255,
        47407077,
        47407087,
        47407538,
        47406886,
        47407201,
        47408281,
        47406964,
        47406966,
        47406952,
        47407123,
        47406988,
        47408517,
        47407619,
        47408490,
        47407810,
        47407080,
        47407031,
        47407685,
        47406924,
        47407032,
        47406949,
        47408485,
        47408872,
        47407049,
        47406943,
        47409273
      ],
      "score": 532,
      "time": 1773705755,
      "title": "US SEC preparing to scrap quarterly reporting requirement",
      "type": "story",
      "url": "https://www.reuters.com/business/finance/us-sec-preparing-eliminate-quarterly-reporting-requirement-wsj-says-2026-03-16/"
    },
    {
      "by": "aresant",
      "descendants": 20,
      "id": 47408441,
      "kids": [
        47408931,
        47409419,
        47409168,
        47408726,
        47408992,
        47409450,
        47408856,
        47408847
      ],
      "score": 84,
      "time": 1773720028,
      "title": "Monkey Island for Commodore 64 Ground Up",
      "type": "story",
      "url": "https://pixeldust.se/monkey-island-project"
    },
    {
      "by": "greyface-",
      "descendants": 61,
      "id": 47408205,
      "kids": [
        47408934,
        47409548,
        47408874,
        47408720,
        47408640,
        47408704,
        47409179,
        47408878,
        47409287,
        47408705,
        47409457,
        47408718,
        47408699,
        47408748
      ],
      "score": 139,
      "time": 1773717636,
      "title": "Every layer of review makes you 10x slower",
      "type": "story",
      "url": "https://apenwarr.ca/log/20260316"
    },
    {
      "by": "Poudlardo",
      "descendants": 89,
      "id": 47404796,
      "kids": [
        47407461,
        47406685,
        47405846,
        47405507,
        47405328,
        47407262,
        47406371,
        47406282,
        47408650,
        47406446,
        47406982,
        47405506,
        47405900,
        47405654,
        47409190,
        47407014,
        47407815,
        47405492,
        47406277,
        47406119,
        47408215,
        47405625,
        47406624,
        47409082,
        47408072,
        47405557,
        47407181,
        47406520,
        47407129,
        47406246,
        47405914,
        47405688,
        47405319,
        47406481
      ],
      "score": 427,
      "text": "Lean 4 paper (2021): <a href=\"https:&#x2F;&#x2F;dl.acm.org&#x2F;doi&#x2F;10.1007&#x2F;978-3-030-79876-5_37\" rel=\"nofollow\">https:&#x2F;&#x2F;dl.acm.org&#x2F;doi&#x2F;10.1007&#x2F;978-3-030-79876-5_37</a>",
      "time": 1773694780,
      "title": "Leanstral: Open-source agent for trustworthy coding and formal proof engineering",
      "type": "story",
      "url": "https://mistral.ai/news/leanstral"
    },
    {
      "by": "hahahacorn",
      "descendants": 178,
      "id": 47402640,
      "kids": [
        47404107,
        47402981,
        47402995,
        47403015,
        47405547,
        47404076,
        47408957,
        47404266,
        47403164,
        47406234,
        47404422,
        47403531,
        47403992,
        47404368,
        47403141,
        47404533,
        47403953,
        47402860,
        47402996,
        47404689,
        47404096,
        47403422,
        47403070,
        47404535,
        47402900,
        47402870,
        47402910,
        47403705,
        47402877,
        47404777
      ],
      "score": 406,
      "text": "<a href=\"https:&#x2F;&#x2F;github.com&#x2F;jemalloc&#x2F;jemalloc\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;jemalloc&#x2F;jemalloc</a>",
      "time": 1773684752,
      "title": "Meta’s renewed commitment to jemalloc",
      "type": "story",
      "url": "https://engineering.fb.com/2026/03/02/data-infrastructure/investing-in-infrastructure-metas-renewed-commitment-to-jemalloc/"
    },
    {
      "by": "snide",
      "descendants": 3,
      "id": 47365299,
      "kids": [
        47409557,
        47408985,
        47409121,
        47409268
      ],
      "score": 46,
      "time": 1773413590,
      "title": "Claude Tips for 3D Work",
      "type": "story",
      "url": "https://www.davesnider.com/posts/claude-3d"
    },
    {
      "by": "divbzero",
      "descendants": 1,
      "id": 47360293,
      "kids": [
        47409510
      ],
      "score": 13,
      "time": 1773371768,
      "title": "Gitana 18: the new flying Ultim trimaran",
      "type": "story",
      "url": "https://www.boatnews.com/story/50717/gitana-18-radical-technical-choices-for-the-new-flying-ultim-trimaran"
    },
    {
      "by": "speckx",
      "descendants": 163,
      "id": 47401879,
      "kids": [
        47402616,
        47403009,
        47402914,
        47403304,
        47403090,
        47404681,
        47403582,
        47404898,
        47402938,
        47402607,
        47407393,
        47407832,
        47402510,
        47405602,
        47403014,
        47406463,
        47408616,
        47404425,
        47405001,
        47402948,
        47402571,
        47407343,
        47405742,
        47407727,
        47404259,
        47403413,
        47405392,
        47402952,
        47406490,
        47406090,
        47408345,
        47406636,
        47406329,
        47403755,
        47404407,
        47403011
      ],
      "score": 380,
      "time": 1773681477,
      "title": "The “small web” is bigger than you might think",
      "type": "story",
      "url": "https://kevinboone.me/small_web_is_big.html"
    },
    {
      "by": "rexroad",
      "descendants": 275,
      "id": 47401809,
      "kids": [
        47409560,
        47407989,
        47408513,
        47408200,
        47406622,
        47405783,
        47406464,
        47408838,
        47409322,
        47405916,
        47408553,
        47409514,
        47407240,
        47408889,
        47401825,
        47408068,
        47405985,
        47407152,
        47408402,
        47408025,
        47406970,
        47407190,
        47407991,
        47408608,
        47406124,
        47407595,
        47407946,
        47408337,
        47406682,
        47409063,
        47406791,
        47406916,
        47408026,
        47407228,
        47405843,
        47406903,
        47406861,
        47406687,
        47407330,
        47408067,
        47405903,
        47405861,
        47406632,
        47406728,
        47406754
      ],
      "score": 319,
      "time": 1773681207,
      "title": "The American Healthcare Conundrum",
      "type": "story",
      "url": "https://github.com/rexrodeo/american-healthcare-conundrum"
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
      "by": "smitec",
      "descendants": 84,
      "id": 47408703,
      "kids": [
        47408858,
        47409493,
        47408967,
        47408940,
        47409260,
        47409310,
        47408854,
        47409566,
        47409509,
        47409267,
        47409505,
        47409216,
        47409363,
        47409051,
        47409291,
        47409492,
        47409294,
        47409382,
        47409236,
        47408977,
        47408755,
        47409283,
        47409404,
        47409210,
        47409285,
        47409205,
        47409214,
        47409323,
        47409177,
        47409050,
        47409188,
        47409398,
        47409007,
        47409318,
        47409072,
        47408964,
        47409079,
        47409243,
        47409428,
        47409076,
        47408984,
        47409359,
        47409008,
        47409408,
        47409112,
        47409316,
        47409032,
        47409377,
        47409340,
        47409265,
        47409563,
        47409336,
        47409161,
        47409438,
        47409386,
        47408876,
        47409156,
        47409337
      ],
      "score": 323,
      "time": 1773722382,
      "title": "Kagi Translate now supports LinkedIn Speak as an output language",
      "type": "story",
      "url": "https://translate.kagi.com/?from=en&to=LinkedIn+speak"
    },
    {
      "by": "djoldman",
      "descendants": 288,
      "id": 47406779,
      "kids": [
        47407646,
        47407270,
        47407350,
        47407980,
        47407463,
        47409146,
        47409047,
        47407048,
        47407351,
        47407002,
        47407488,
        47409384,
        47406934,
        47407798,
        47408255,
        47407077,
        47407087,
        47407538,
        47406886,
        47407201,
        47408281,
        47406964,
        47406966,
        47406952,
        47407123,
        47406988,
        47408517,
        47407619,
        47408490,
        47407810,
        47407080,
        47407031,
        47407685,
        47406924,
        47407032,
        47406949,
        47408485,
        47408872,
        47407049,
        47406943,
        47409273
      ],
      "score": 532,
      "time": 1773705755,
      "title": "US SEC preparing to scrap quarterly reporting requirement",
      "type": "story",
      "url": "https://www.reuters.com/business/finance/us-sec-preparing-eliminate-quarterly-reporting-requirement-wsj-says-2026-03-16/"
    },
    {
      "by": "aresant",
      "descendants": 20,
      "id": 47408441,
      "kids": [
        47408931,
        47409419,
        47409168,
        47408726,
        47408992,
        47409450,
        47408856,
        47408847
      ],
      "score": 84,
      "time": 1773720028,
      "title": "Monkey Island for Commodore 64 Ground Up",
      "type": "story",
      "url": "https://pixeldust.se/monkey-island-project"
    },
    {
      "by": "greyface-",
      "descendants": 61,
      "id": 47408205,
      "kids": [
        47408934,
        47409548,
        47408874,
        47408720,
        47408640,
        47408704,
        47409179,
        47408878,
        47409287,
        47408705,
        47409457,
        47408718,
        47408699,
        47408748
      ],
      "score": 139,
      "time": 1773717636,
      "title": "Every layer of review makes you 10x slower",
      "type": "story",
      "url": "https://apenwarr.ca/log/20260316"
    },
    {
      "by": "Poudlardo",
      "descendants": 89,
      "id": 47404796,
      "kids": [
        47407461,
        47406685,
        47405846,
        47405507,
        47405328,
        47407262,
        47406371,
        47406282,
        47408650,
        47406446,
        47406982,
        47405506,
        47405900,
        47405654,
        47409190,
        47407014,
        47407815,
        47405492,
        47406277,
        47406119,
        47408215,
        47405625,
        47406624,
        47409082,
        47408072,
        47405557,
        47407181,
        47406520,
        47407129,
        47406246,
        47405914,
        47405688,
        47405319,
        47406481
      ],
      "score": 427,
      "text": "Lean 4 paper (2021): <a href=\"https:&#x2F;&#x2F;dl.acm.org&#x2F;doi&#x2F;10.1007&#x2F;978-3-030-79876-5_37\" rel=\"nofollow\">https:&#x2F;&#x2F;dl.acm.org&#x2F;doi&#x2F;10.1007&#x2F;978-3-030-79876-5_37</a>",
      "time": 1773694780,
      "title": "Leanstral: Open-source agent for trustworthy coding and formal proof engineering",
      "type": "story",
      "url": "https://mistral.ai/news/leanstral"
    },
    {
      "by": "hahahacorn",
      "descendants": 178,
      "id": 47402640,
      "kids": [
        47404107,
        47402981,
        47402995,
        47403015,
        47405547,
        47404076,
        47408957,
        47404266,
        47403164,
        47406234,
        47404422,
        47403531,
        47403992,
        47404368,
        47403141,
        47404533,
        47403953,
        47402860,
        47402996,
        47404689,
        47404096,
        47403422,
        47403070,
        47404535,
        47402900,
        47402870,
        47402910,
        47403705,
        47402877,
        47404777
      ],
      "score": 406,
      "text": "<a href=\"https:&#x2F;&#x2F;github.com&#x2F;jemalloc&#x2F;jemalloc\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;jemalloc&#x2F;jemalloc</a>",
      "time": 1773684752,
      "title": "Meta’s renewed commitment to jemalloc",
      "type": "story",
      "url": "https://engineering.fb.com/2026/03/02/data-infrastructure/investing-in-infrastructure-metas-renewed-commitment-to-jemalloc/"
    },
    {
      "by": "snide",
      "descendants": 3,
      "id": 47365299,
      "kids": [
        47409557,
        47408985,
        47409121,
        47409268
      ],
      "score": 46,
      "time": 1773413590,
      "title": "Claude Tips for 3D Work",
      "type": "story",
      "url": "https://www.davesnider.com/posts/claude-3d"
    },
    {
      "by": "divbzero",
      "descendants": 1,
      "id": 47360293,
      "kids": [
        47409510
      ],
      "score": 13,
      "time": 1773371768,
      "title": "Gitana 18: the new flying Ultim trimaran",
      "type": "story",
      "url": "https://www.boatnews.com/story/50717/gitana-18-radical-technical-choices-for-the-new-flying-ultim-trimaran"
    },
    {
      "by": "speckx",
      "descendants": 163,
      "id": 47401879,
      "kids": [
        47402616,
        47403009,
        47402914,
        47403304,
        47403090,
        47404681,
        47403582,
        47404898,
        47402938,
        47402607,
        47407393,
        47407832,
        47402510,
        47405602,
        47403014,
        47406463,
        47408616,
        47404425,
        47405001,
        47402948,
        47402571,
        47407343,
        47405742,
        47407727,
        47404259,
        47403413,
        47405392,
        47402952,
        47406490,
        47406090,
        47408345,
        47406636,
        47406329,
        47403755,
        47404407,
        47403011
      ],
      "score": 380,
      "time": 1773681477,
      "title": "The “small web” is bigger than you might think",
      "type": "story",
      "url": "https://kevinboone.me/small_web_is_big.html"
    },
    {
      "by": "rexroad",
      "descendants": 275,
      "id": 47401809,
      "kids": [
        47409560,
        47407989,
        47408513,
        47408200,
        47406622,
        47405783,
        47406464,
        47408838,
        47409322,
        47405916,
        47408553,
        47409514,
        47407240,
        47408889,
        47401825,
        47408068,
        47405985,
        47407152,
        47408402,
        47408025,
        47406970,
        47407190,
        47407991,
        47408608,
        47406124,
        47407595,
        47407946,
        47408337,
        47406682,
        47409063,
        47406791,
        47406916,
        47408026,
        47407228,
        47405843,
        47406903,
        47406861,
        47406687,
        47407330,
        47408067,
        47405903,
        47405861,
        47406632,
        47406728,
        47406754
      ],
      "score": 319,
      "time": 1773681207,
      "title": "The American Healthcare Conundrum",
      "type": "story",
      "url": "https://github.com/rexrodeo/american-healthcare-conundrum"
    },
    {
      "by": "Anon84",
      "descendants": 5,
      "id": 47363133,
      "kids": [
        47363399,
        47363947,
        47366297
      ],
      "score": 43,
      "time": 1773402267,
      "title": "Sci-Fi Short Film \"There Is No Antimemetics Division\" [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=3v8AsTHfAG0"
    },
    {
      "by": "Vaslo",
      "descendants": 103,
      "id": 47398534,
      "kids": [
        47399332,
        47402966,
        47401149,
        47399061,
        47398992,
        47398980,
        47404426,
        47408016,
        47408095,
        47404453,
        47399680,
        47399162,
        47403382,
        47404543,
        47409545,
        47409059,
        47408817,
        47407496,
        47402135,
        47402062,
        47404660,
        47399248
      ],
      "score": 360,
      "time": 1773666598,
      "title": "My Journey to a reliable and enjoyable locally hosted voice assistant (2025)",
      "type": "story",
      "url": "https://community.home-assistant.io/t/my-journey-to-a-reliable-and-enjoyable-locally-hosted-voice-assistant/944860"
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
      "title": "Try not to get scammed while looking for work",
      "url": "https://trysound.io/try-not-to-get-scammed-while-looking-for-work/",
      "score": 111,
      "comments": 18,
      "tags": [
        "security"
      ],
      "id": "yhc5ug"
    },
    {
      "title": "Why I Love FreeBSD",
      "url": "https://it-notes.dragas.net/2026/03/16/why-i-love-freebsd/",
      "score": 71,
      "comments": 16,
      "tags": [
        "freebsd"
      ],
      "id": "bzllmf"
    },
    {
      "title": "The Gemini Protocol in 2026",
      "url": "https://kevinboone.me/gemini_2026.html",
      "score": 21,
      "comments": 11,
      "tags": [
        "web"
      ],
      "id": "eoj99q"
    },
    {
      "title": "Gleam v1.15.0 released",
      "url": "https://gleam.run/news/upgrading-hex-security/",
      "score": 49,
      "comments": 3,
      "tags": [
        "gleam"
      ],
      "id": "bpeg4o"
    },
    {
      "title": "Reviewing large changes with Jujutsu",
      "url": "https://ben.gesoff.uk/posts/reviewing-large-changes-with-jj/",
      "score": 47,
      "comments": 13,
      "tags": [
        "vcs"
      ],
      "id": "8is8ya"
    },
    {
      "title": "Jepsen: MariaDB Galera Cluster 12.1.2",
      "url": "https://jepsen.io/analyses/mariadb-galera-cluster-12.1.2",
      "score": 6,
      "comments": 0,
      "tags": [
        "databases",
        "distributed",
        "testing"
      ],
      "id": "7olqjk"
    },
    {
      "title": "typenix: Full typing for Nix based on TypeScript",
      "url": "https://github.com/ryanrasti/typenix",
      "score": 19,
      "comments": 2,
      "tags": [
        "nix"
      ],
      "id": "h6ntut"
    },
    {
      "title": "Every layer of review makes you 10x slower",
      "url": "https://apenwarr.ca/log/20260316",
      "score": 8,
      "comments": 1,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "elfva4"
    },
    {
      "title": "When perfection is table stakes",
      "url": "https://lukeplant.me.uk/blog/posts/when-perfection-is-table-stakes/",
      "score": 20,
      "comments": 1,
      "tags": [
        "practices"
      ],
      "id": "mnkmag"
    },
    {
      "title": "Free airport ride exchange platform",
      "url": "https://airportswap.com/",
      "score": 4,
      "comments": 7,
      "tags": [
        "show",
        "web"
      ],
      "id": "1br6fz"
    }
  ]
}
```

