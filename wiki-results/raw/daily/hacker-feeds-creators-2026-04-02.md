# Hacker Feeds Outcomes - Creators

Generated on: 2026-04-02 06:42:45 UTC

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
      "reactions": 142,
      "comments": 35,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "A Year of Change and Persistence",
      "description": "This marks the ninth year of our WeCoded celebration. While each year has had its highs and lows,...",
      "url": "https://dev.to/jess/a-year-of-change-and-persistence-19cf",
      "tags": "devchallenge, wecoded, career, dei",
      "reactions": 67,
      "comments": 18,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "🌪️ Proof of Work: The To-Do List of Infinite Regret",
      "description": "**           What I Built   ** I built a productivity app for people who hate being productive. Proof...",
      "url": "https://dev.to/malik_sohaib_iqbal/proof-of-work-the-to-do-list-of-infinite-regret-48le",
      "tags": "devchallenge, 418challenge, showdev, webdev",
      "reactions": 15,
      "comments": 0,
      "reading_time": 2,
      "author": "malik_sohaib_iqbal"
    },
    {
      "title": "BrewOps: I built a production-grade HTCPCP server because nobody else would",
      "description": "This is a submission for the DEV April Fools Challenge           What I built   We identified a...",
      "url": "https://dev.to/axrisi/brewops-i-built-a-production-grade-htcpcp-server-because-nobody-else-would-3clh",
      "tags": "devchallenge, 418challenge, showdev, jokes",
      "reactions": 17,
      "comments": 1,
      "reading_time": 8,
      "author": "axrisi"
    },
    {
      "title": "The Curated, Automated Open Source Portfolio: How It’s Going",
      "description": "A few months ago, I shared a story about building an automated open source portfolio using just my...",
      "url": "https://dev.to/adiatiayu/the-curated-automated-open-source-portfolio-how-its-going-5f98",
      "tags": "opensource, ai, vibecoding",
      "reactions": 14,
      "comments": 7,
      "reading_time": 5,
      "author": "adiatiayu"
    },
    {
      "title": "3 Takeaways from All Things AI: 80/20 Rule, Non-Deterministic Humans, and Why We're Still Early",
      "description": "Last week, I attended All Things AI in Durham, NC. The event was geared toward technical AI...",
      "url": "https://dev.to/thisisryanswift/3-takeaways-from-all-things-ai-8020-rule-non-deterministic-humans-and-why-were-still-early-2mln",
      "tags": "ai, discuss, mlh, opensource",
      "reactions": 37,
      "comments": 2,
      "reading_time": 3,
      "author": "thisisryanswift"
    },
    {
      "title": "I built a machine-readable UK Chart of Accounts for Python (because one didn't exist)",
      "description": "Table Of Contents    What it does Quick example Why VAT treatments matter The LLM use...",
      "url": "https://dev.to/billkhiz/i-built-a-machine-readable-uk-chart-of-accounts-for-python-because-one-didnt-exist-30m6",
      "tags": "python, accounting, opensource, fintech",
      "reactions": 3,
      "comments": 1,
      "reading_time": 3,
      "author": "billkhiz"
    },
    {
      "title": "I've been building software for 40 years. But I want *you* to tell me about dev in 1986...",
      "description": "It's 2026 and I started professional software development in 1986 when I took a Summer internship...",
      "url": "https://dev.to/johnmunsch/ive-been-building-software-for-40-years-but-i-want-you-to-tell-me-about-dev-in-1986-1pmj",
      "tags": "programming, discuss, development, watercooler",
      "reactions": 17,
      "comments": 9,
      "reading_time": 1,
      "author": "johnmunsch"
    },
    {
      "title": "Antigravity: My Approach to Deliver the Most Assured Value for the Least Money",
      "description": "As I'm not a professional developer but a guy who needs to use automation to get things done, I...",
      "url": "https://dev.to/gdg/antigravity-my-approach-to-deliver-the-most-assured-value-for-the-least-money-3iip",
      "tags": "antigravity, development, automation, responsibleai",
      "reactions": 10,
      "comments": 1,
      "reading_time": 4,
      "author": "alexandertyutin"
    },
    {
      "title": "Authorizer v2 Is Here: Self-Hosted Auth, Rebuilt From the Ground Up",
      "description": "We just shipped Authorizer v2 — a major rewrite of our open-source, self-hosted authentication and...",
      "url": "https://dev.to/lakhansamani/authorizer-v2-is-here-self-hosted-auth-rebuilt-from-the-ground-up-184a",
      "tags": "webdev, ai, opensource, authentication",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "lakhansamani"
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
      "forks": 18992,
      "added_stars": 23500,
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
      "author": "jarrodwatts",
      "repo": "claude-hud",
      "avatar": "https://github.com/jarrodwatts.png",
      "repo_link": "https://github.com/jarrodwatts/claude-hud",
      "desc": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 679,
      "added_stars": 2931,
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
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Connect All AI Code Tools (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) to 40+ AI Providers & 100+ Models",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 432,
      "added_stars": 353,
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
      "author": "axios",
      "repo": "axios",
      "avatar": "https://github.com/axios.png",
      "repo_link": "https://github.com/axios/axios",
      "desc": "Promise based HTTP client for the browser and node.js",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 11589,
      "added_stars": 237,
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
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3799,
      "added_stars": 5066,
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
      "author": "Mintplex-Labs",
      "repo": "anything-llm",
      "avatar": "https://github.com/Mintplex-Labs.png",
      "repo_link": "https://github.com/Mintplex-Labs/anything-llm",
      "desc": "The all-in-one AI productivity accelerator. On device and privacy first with no annoying setup or configuration.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6206,
      "added_stars": 668,
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
      "author": "mrdoob",
      "repo": "three.js",
      "avatar": "https://github.com/mrdoob.png",
      "repo_link": "https://github.com/mrdoob/three.js",
      "desc": "JavaScript 3D Library.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 36317,
      "added_stars": 183,
      "builtBy": [
        {
          "username": "mrdoob",
          "href": "https://github.com/mrdoob",
          "avatar": "https://avatars.githubusercontent.com/u/97088"
        },
        {
          "username": "Mugen87",
          "href": "https://github.com/Mugen87",
          "avatar": "https://avatars.githubusercontent.com/u/12612165"
        },
        {
          "username": "alteredq",
          "href": "https://github.com/alteredq",
          "avatar": "https://avatars.githubusercontent.com/u/438022"
        },
        {
          "username": "sunag",
          "href": "https://github.com/sunag",
          "avatar": "https://avatars.githubusercontent.com/u/502810"
        },
        {
          "username": "WestLangley",
          "href": "https://github.com/WestLangley",
          "avatar": "https://avatars.githubusercontent.com/u/1000017"
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
      "forks": 2788,
      "added_stars": 1812,
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
          "username": "CoopahG",
          "href": "https://github.com/CoopahG",
          "avatar": "https://avatars.githubusercontent.com/u/72124096"
        }
      ]
    },
    {
      "author": "datawhalechina",
      "repo": "easy-vibe",
      "avatar": "https://github.com/datawhalechina.png",
      "repo_link": "https://github.com/datawhalechina/easy-vibe",
      "desc": "🤖 A systematic tutorial on vibe coding, help beginners turn ideas into prototypes, MVPs, and launch-ready products.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 473,
      "added_stars": 552,
      "builtBy": [
        {
          "username": "sanbuphy",
          "href": "https://github.com/sanbuphy",
          "avatar": "https://avatars.githubusercontent.com/u/96160062"
        },
        {
          "username": "GeoDaoyu",
          "href": "https://github.com/GeoDaoyu",
          "avatar": "https://avatars.githubusercontent.com/u/34641603"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "1985312383",
          "href": "https://github.com/1985312383",
          "avatar": "https://avatars.githubusercontent.com/u/56398475"
        },
        {
          "username": "SherryTECNU",
          "href": "https://github.com/SherryTECNU",
          "avatar": "https://avatars.githubusercontent.com/u/47715534"
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
      "forks": 853,
      "added_stars": 143,
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
      "author": "sligter",
      "repo": "LandPPT",
      "avatar": "https://github.com/sligter.png",
      "repo_link": "https://github.com/sligter/LandPPT",
      "desc": "一个基于LLM的演示文稿生成平台，能够自动将文档内容转换为专业的PPT演示文稿。平台支持多种AI模型，提供丰富的模板和样式选择，让用户能够创建高质量的演示文稿。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 371,
      "added_stars": 206,
      "builtBy": [
        {
          "username": "sligter",
          "href": "https://github.com/sligter",
          "avatar": "https://avatars.githubusercontent.com/u/23713984"
        },
        {
          "username": "liunux4odoo",
          "href": "https://github.com/liunux4odoo",
          "avatar": "https://avatars.githubusercontent.com/u/41217877"
        },
        {
          "username": "octo-patch",
          "href": "https://github.com/octo-patch",
          "avatar": "https://avatars.githubusercontent.com/u/266937838"
        }
      ]
    },
    {
      "author": "ChristopherKahler",
      "repo": "paul",
      "avatar": "https://github.com/ChristopherKahler.png",
      "repo_link": "https://github.com/ChristopherKahler/paul",
      "desc": "Plan-Apply-Unify Loop — Structured AI-assisted development for Claude Code. Quality over speed-for-speed's-sake.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 66,
      "added_stars": 168,
      "builtBy": [
        {
          "username": "ChristopherKahler",
          "href": "https://github.com/ChristopherKahler",
          "avatar": "https://avatars.githubusercontent.com/u/188632505"
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
      "title": "The Great Claude Code Leak of 2026: Accident, Incompetence, or the Best PR Stunt in AI History?",
      "description": "TL;DR: On March 31, 2026, Anthropic accidentally shipped the entire source code of Claude Code to the...",
      "url": "https://dev.to/varshithvhegde/the-great-claude-code-leak-of-2026-accident-incompetence-or-the-best-pr-stunt-in-ai-history-3igm",
      "tags": "webdev, ai, programming, productivity",
      "reactions": 74,
      "comments": 17,
      "reading_time": 14,
      "author": "varshithvhegde"
    },
    {
      "title": "The Curated, Automated Open Source Portfolio: How It’s Going",
      "description": "A few months ago, I shared a story about building an automated open source portfolio using just my...",
      "url": "https://dev.to/adiatiayu/the-curated-automated-open-source-portfolio-how-its-going-5f98",
      "tags": "opensource, ai, vibecoding",
      "reactions": 14,
      "comments": 7,
      "reading_time": 5,
      "author": "adiatiayu"
    },
    {
      "title": "3 Takeaways from All Things AI: 80/20 Rule, Non-Deterministic Humans, and Why We're Still Early",
      "description": "Last week, I attended All Things AI in Durham, NC. The event was geared toward technical AI...",
      "url": "https://dev.to/thisisryanswift/3-takeaways-from-all-things-ai-8020-rule-non-deterministic-humans-and-why-were-still-early-2mln",
      "tags": "ai, discuss, mlh, opensource",
      "reactions": 37,
      "comments": 2,
      "reading_time": 3,
      "author": "thisisryanswift"
    },
    {
      "title": "Claudilon: an AI that replies to my LinkedIn comments in real time",
      "description": "How I built a bot that scrapes LinkedIn posts, detects new comments, and replies via Claude CLI in under 30 seconds.",
      "url": "https://dev.to/ohugonnot/claudilon-an-ai-that-replies-to-my-linkedin-comments-in-real-time-97h",
      "tags": "ai, linkedin, claudecode, playwright",
      "reactions": 0,
      "comments": 0,
      "reading_time": 10,
      "author": "ohugonnot"
    },
    {
      "title": "The Integration Tax: Walled-Garden Agent Strategies Won't Scale (MxN vs. M+N)",
      "description": "Personio maintains 200+ integrations. Greenhouse has 400+. iCIMS lists 800+.  Every single one is a...",
      "url": "https://dev.to/testinat0r/the-integration-tax-walled-garden-agent-strategies-wont-scale-mxn-vs-mn-g5f",
      "tags": "ai, agents, programming, discuss",
      "reactions": 0,
      "comments": 3,
      "reading_time": 6,
      "author": "testinat0r"
    },
    {
      "title": "Authorizer v2 Is Here: Self-Hosted Auth, Rebuilt From the Ground Up",
      "description": "We just shipped Authorizer v2 — a major rewrite of our open-source, self-hosted authentication and...",
      "url": "https://dev.to/lakhansamani/authorizer-v2-is-here-self-hosted-auth-rebuilt-from-the-ground-up-184a",
      "tags": "webdev, ai, opensource, authentication",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "lakhansamani"
    },
    {
      "title": "How to Add AI Gateway Observability to a Production Control Plane",
      "description": "A lot of teams add an AI gateway for a good reason.  They want one place to enforce policy. They want...",
      "url": "https://dev.to/tokvera/how-to-add-ai-gateway-observability-to-a-production-control-plane-4gbb",
      "tags": "ai, typescript, observability, architecture",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "tokvera"
    },
    {
      "title": "AI Writes Better UI Without React Than With It",
      "description": "I recently shipped a desktop app. No React. No npm. No node_modules. AI generated most of the UI...",
      "url": "https://dev.to/endenwer/ai-writes-better-ui-without-react-than-with-it-26fl",
      "tags": "ai, javascript, react, ui",
      "reactions": 2,
      "comments": 0,
      "reading_time": 5,
      "author": "endenwer"
    },
    {
      "title": "BDD Test Cases from User Stories: 5 Steps and 12 Scenarios",
      "description": "User stories set the destination. Test cases map every path, including the wrong ones.  In this post...",
      "url": "https://dev.to/krinosystems/bdd-test-cases-from-user-stories-5-steps-and-12-scenarios-g76",
      "tags": "ai, testing, bdd, qa",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "krinosystems"
    },
    {
      "title": "What RAG Is: The Pattern That Grounds AI in Reality",
      "description": "RAG is not a product or a framework. It is a pattern: retrieve relevant context first, then generate an answer grounded in that context. Here is what that actually means.",
      "url": "https://dev.to/gursharansingh/what-rag-is-the-pattern-that-grounds-ai-in-reality-2dac",
      "tags": "rag, ai, architecture, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "gursharansingh"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "apitman",
      "descendants": 735,
      "id": 47603657,
      "kids": [
        47607684,
        47605635,
        47604028,
        47607791,
        47604551,
        47610235,
        47604563,
        47607619,
        47607512,
        47606861,
        47603814,
        47610126,
        47607837,
        47605185,
        47607609,
        47605146,
        47607469,
        47608354,
        47604376,
        47609759,
        47610189,
        47609987,
        47607611,
        47609516,
        47608588,
        47609158,
        47609878,
        47603923,
        47608605,
        47607669,
        47604048,
        47609262,
        47608811,
        47607982,
        47605728,
        47605599,
        47606033,
        47607533,
        47607840,
        47607740,
        47605299,
        47607644,
        47606656,
        47608534,
        47606331,
        47607688,
        47607632,
        47605591,
        47606606,
        47608439,
        47609177,
        47609519,
        47608436,
        47604571,
        47605151,
        47608369,
        47607495,
        47607779,
        47607444,
        47606867,
        47604243,
        47604174,
        47605150,
        47605585,
        47608447,
        47608198,
        47605926,
        47610023,
        47608210,
        47608992,
        47607807,
        47608930,
        47604595,
        47609705,
        47608996,
        47607680,
        47607808,
        47603839,
        47608036,
        47608248,
        47607972,
        47607718,
        47608471,
        47604817,
        47607268,
        47604167,
        47605870
      ],
      "score": 817,
      "text": "<a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;live&#x2F;Tf_UjBMIzNo\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;live&#x2F;Tf_UjBMIzNo</a>",
      "time": 1775063491,
      "title": "Live: Artemis II Launch Day Updates",
      "type": "story",
      "url": "https://www.nasa.gov/blogs/missions/2026/04/01/live-artemis-ii-launch-day-updates/"
    },
    {
      "by": "homelessdino",
      "descendants": 42,
      "id": 47609882,
      "kids": [
        47610397,
        47610203,
        47610366,
        47610337,
        47610226,
        47610129,
        47610283,
        47610537,
        47610159,
        47610413,
        47610230,
        47610286
      ],
      "score": 66,
      "time": 1775102885,
      "title": "Subscription bombing and how to mitigate it",
      "type": "story",
      "url": "https://bytemash.net/posts/subscription-bombing-your-signup-form-is-a-weapon/"
    },
    {
      "by": "mergesort",
      "descendants": 55,
      "id": 47609294,
      "kids": [
        47609858,
        47610102,
        47610389,
        47609734,
        47609821,
        47610717,
        47609816,
        47610582,
        47610660,
        47610697,
        47610541,
        47610483,
        47610072,
        47610435,
        47610489,
        47610284,
        47610079,
        47610381,
        47610625,
        47610118,
        47609931,
        47610240,
        47610576,
        47609863
      ],
      "score": 99,
      "time": 1775096765,
      "title": "The Claude Code Leak",
      "type": "story",
      "url": "https://build.ms/2026/4/1/the-claude-code-leak/"
    },
    {
      "by": "Strilanc",
      "descendants": 36,
      "id": 47608495,
      "kids": [
        47610749,
        47610243,
        47609453,
        47610542,
        47609617,
        47609368,
        47609744,
        47609593,
        47609721
      ],
      "score": 115,
      "time": 1775089483,
      "title": "Quantum computing bombshells that are not April Fools",
      "type": "story",
      "url": "https://scottaaronson.blog/?p=9665"
    },
    {
      "by": "cryptoz",
      "descendants": 37,
      "id": 47610336,
      "kids": [
        47610750,
        47610575,
        47610391,
        47610665,
        47610373,
        47610756,
        47610500,
        47610718,
        47610712,
        47610692,
        47610588,
        47610450,
        47610392,
        47610374,
        47610531,
        47610414
      ],
      "score": 68,
      "time": 1775108000,
      "title": "r/programming bans all discussion of LLM programming",
      "type": "story",
      "url": "https://old.reddit.com/r/programming/comments/1s9jkzi/announcement_temporary_llm_content_ban/"
    },
    {
      "by": "hkmaxpro",
      "descendants": 62,
      "id": 47609564,
      "kids": [
        47609818,
        47609887,
        47609796,
        47609889,
        47610503,
        47610277,
        47609873,
        47610375,
        47609924,
        47609874,
        47610400,
        47610287,
        47609914,
        47609708,
        47609970,
        47609920,
        47610233
      ],
      "score": 172,
      "time": 1775099544,
      "title": "Steam on Linux Use Skyrocketed Above 5% in March",
      "type": "story",
      "url": "https://www.phoronix.com/news/Steam-On-Linux-Tops-5p"
    },
    {
      "by": "jaden",
      "descendants": 5,
      "id": 47609694,
      "kids": [
        47610508,
        47610441,
        47610421,
        47610524,
        47610620
      ],
      "score": 33,
      "time": 1775100933,
      "title": "Email obfuscation: What works in 2026?",
      "type": "story",
      "url": "https://spencermortensen.com/articles/email-obfuscation/"
    },
    {
      "by": "glittershark",
      "descendants": 12,
      "id": 47608058,
      "kids": [
        47608258,
        47610302,
        47610583,
        47609985,
        47609015,
        47608632,
        47608301,
        47608814
      ],
      "score": 149,
      "time": 1775086502,
      "title": "A new C++ back end for ocamlc",
      "type": "story",
      "url": "https://github.com/ocaml/ocaml/pull/14701"
    },
    {
      "by": "elithrar",
      "descendants": 373,
      "id": 47602832,
      "kids": [
        47603112,
        47606147,
        47607571,
        47610559,
        47604294,
        47609668,
        47603526,
        47605699,
        47603398,
        47603999,
        47610147,
        47604024,
        47603920,
        47609359,
        47606896,
        47609838,
        47605025,
        47606340,
        47610282,
        47608907,
        47605979,
        47605426,
        47604696,
        47604242,
        47604925,
        47604700,
        47603525,
        47603081,
        47604164,
        47608430,
        47609953,
        47603323,
        47606939,
        47603060,
        47609869,
        47603162,
        47606994,
        47604273,
        47609296,
        47607485,
        47606414,
        47605622,
        47609557,
        47607735,
        47608927,
        47603450,
        47603931,
        47605027,
        47603585,
        47606177,
        47606654,
        47605562,
        47603330,
        47606992,
        47609332,
        47603493,
        47604118,
        47606905,
        47607233,
        47605067,
        47602926,
        47603404,
        47604045,
        47606234,
        47604034,
        47603384,
        47604929,
        47605237,
        47605032,
        47603786,
        47604154,
        47606591,
        47604576,
        47605917,
        47603108,
        47606046,
        47606755,
        47602897,
        47608949,
        47605106,
        47607254,
        47605604,
        47604837,
        47606433,
        47605517,
        47604504,
        47603861,
        47608470,
        47603666,
        47603612,
        47603507,
        47603465,
        47603378,
        47603401,
        47603245,
        47604658,
        47604032,
        47604877,
        47604529,
        47606276,
        47605508,
        47605463,
        47604873,
        47603410,
        47610048,
        47609183,
        47607633,
        47606744,
        47608356,
        47609159,
        47608802,
        47604750,
        47603922,
        47604412,
        47603746,
        47606181,
        47603414,
        47605378,
        47604766
      ],
      "score": 537,
      "time": 1775060078,
      "title": "EmDash – A spiritual successor to WordPress that solves plugin security",
      "type": "story",
      "url": "https://blog.cloudflare.com/emdash-wordpress/"
    },
    {
      "by": "ingve",
      "descendants": 341,
      "id": 47606840,
      "kids": [
        47608294,
        47610423,
        47607703,
        47609520,
        47607342,
        47607135,
        47608980,
        47607437,
        47607173,
        47609168,
        47607151,
        47610186,
        47607575,
        47610405,
        47608708,
        47609099,
        47607587,
        47607818,
        47608933,
        47607538,
        47607763,
        47609852,
        47607785,
        47607417,
        47607537,
        47609016,
        47609510,
        47607292,
        47607907,
        47607238,
        47609244,
        47609959,
        47609737,
        47608237,
        47608125,
        47607774,
        47607682,
        47606931,
        47607522,
        47607793,
        47608239,
        47607374,
        47608325,
        47607847,
        47607766,
        47607743,
        47607142,
        47607216,
        47609701,
        47608954,
        47609022,
        47609186,
        47607242,
        47607126
      ],
      "score": 423,
      "time": 1775079401,
      "title": "DRAM pricing is killing the hobbyist SBC market",
      "type": "story",
      "url": "https://www.jeffgeerling.com/blog/2026/dram-pricing-is-killing-the-hobbyist-sbc-market/"
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
      "by": "apitman",
      "descendants": 735,
      "id": 47603657,
      "kids": [
        47607684,
        47605635,
        47604028,
        47607791,
        47604551,
        47610235,
        47604563,
        47607619,
        47607512,
        47606861,
        47603814,
        47610126,
        47607837,
        47605185,
        47607609,
        47605146,
        47607469,
        47608354,
        47604376,
        47609759,
        47610189,
        47609987,
        47607611,
        47609516,
        47608588,
        47609158,
        47609878,
        47603923,
        47608605,
        47607669,
        47604048,
        47609262,
        47608811,
        47607982,
        47605728,
        47605599,
        47606033,
        47607533,
        47607840,
        47607740,
        47605299,
        47607644,
        47606656,
        47608534,
        47606331,
        47607688,
        47607632,
        47605591,
        47606606,
        47608439,
        47609177,
        47609519,
        47608436,
        47604571,
        47605151,
        47608369,
        47607495,
        47607779,
        47607444,
        47606867,
        47604243,
        47604174,
        47605150,
        47605585,
        47608447,
        47608198,
        47605926,
        47610023,
        47608210,
        47608992,
        47607807,
        47608930,
        47604595,
        47609705,
        47608996,
        47607680,
        47607808,
        47603839,
        47608036,
        47608248,
        47607972,
        47607718,
        47608471,
        47604817,
        47607268,
        47604167,
        47605870
      ],
      "score": 817,
      "text": "<a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;live&#x2F;Tf_UjBMIzNo\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;live&#x2F;Tf_UjBMIzNo</a>",
      "time": 1775063491,
      "title": "Live: Artemis II Launch Day Updates",
      "type": "story",
      "url": "https://www.nasa.gov/blogs/missions/2026/04/01/live-artemis-ii-launch-day-updates/"
    },
    {
      "by": "homelessdino",
      "descendants": 42,
      "id": 47609882,
      "kids": [
        47610397,
        47610203,
        47610366,
        47610337,
        47610226,
        47610129,
        47610283,
        47610537,
        47610159,
        47610413,
        47610230,
        47610286
      ],
      "score": 66,
      "time": 1775102885,
      "title": "Subscription bombing and how to mitigate it",
      "type": "story",
      "url": "https://bytemash.net/posts/subscription-bombing-your-signup-form-is-a-weapon/"
    },
    {
      "by": "mergesort",
      "descendants": 55,
      "id": 47609294,
      "kids": [
        47609858,
        47610102,
        47610389,
        47609734,
        47609821,
        47610717,
        47609816,
        47610582,
        47610660,
        47610697,
        47610541,
        47610483,
        47610072,
        47610435,
        47610489,
        47610284,
        47610079,
        47610381,
        47610625,
        47610118,
        47609931,
        47610240,
        47610576,
        47609863
      ],
      "score": 99,
      "time": 1775096765,
      "title": "The Claude Code Leak",
      "type": "story",
      "url": "https://build.ms/2026/4/1/the-claude-code-leak/"
    },
    {
      "by": "Strilanc",
      "descendants": 36,
      "id": 47608495,
      "kids": [
        47610749,
        47610243,
        47609453,
        47610542,
        47609617,
        47609368,
        47609744,
        47609593,
        47609721
      ],
      "score": 115,
      "time": 1775089483,
      "title": "Quantum computing bombshells that are not April Fools",
      "type": "story",
      "url": "https://scottaaronson.blog/?p=9665"
    },
    {
      "by": "cryptoz",
      "descendants": 37,
      "id": 47610336,
      "kids": [
        47610750,
        47610575,
        47610391,
        47610665,
        47610373,
        47610756,
        47610500,
        47610718,
        47610712,
        47610692,
        47610588,
        47610450,
        47610392,
        47610374,
        47610531,
        47610414
      ],
      "score": 68,
      "time": 1775108000,
      "title": "r/programming bans all discussion of LLM programming",
      "type": "story",
      "url": "https://old.reddit.com/r/programming/comments/1s9jkzi/announcement_temporary_llm_content_ban/"
    },
    {
      "by": "hkmaxpro",
      "descendants": 62,
      "id": 47609564,
      "kids": [
        47609818,
        47609887,
        47609796,
        47609889,
        47610503,
        47610277,
        47609873,
        47610375,
        47609924,
        47609874,
        47610400,
        47610287,
        47609914,
        47609708,
        47609970,
        47609920,
        47610233
      ],
      "score": 172,
      "time": 1775099544,
      "title": "Steam on Linux Use Skyrocketed Above 5% in March",
      "type": "story",
      "url": "https://www.phoronix.com/news/Steam-On-Linux-Tops-5p"
    },
    {
      "by": "jaden",
      "descendants": 5,
      "id": 47609694,
      "kids": [
        47610508,
        47610441,
        47610421,
        47610524,
        47610620
      ],
      "score": 33,
      "time": 1775100933,
      "title": "Email obfuscation: What works in 2026?",
      "type": "story",
      "url": "https://spencermortensen.com/articles/email-obfuscation/"
    },
    {
      "by": "glittershark",
      "descendants": 12,
      "id": 47608058,
      "kids": [
        47608258,
        47610302,
        47610583,
        47609985,
        47609015,
        47608632,
        47608301,
        47608814
      ],
      "score": 149,
      "time": 1775086502,
      "title": "A new C++ back end for ocamlc",
      "type": "story",
      "url": "https://github.com/ocaml/ocaml/pull/14701"
    },
    {
      "by": "elithrar",
      "descendants": 373,
      "id": 47602832,
      "kids": [
        47603112,
        47606147,
        47607571,
        47610559,
        47604294,
        47609668,
        47603526,
        47605699,
        47603398,
        47603999,
        47610147,
        47604024,
        47603920,
        47609359,
        47606896,
        47609838,
        47605025,
        47606340,
        47610282,
        47608907,
        47605979,
        47605426,
        47604696,
        47604242,
        47604925,
        47604700,
        47603525,
        47603081,
        47604164,
        47608430,
        47609953,
        47603323,
        47606939,
        47603060,
        47609869,
        47603162,
        47606994,
        47604273,
        47609296,
        47607485,
        47606414,
        47605622,
        47609557,
        47607735,
        47608927,
        47603450,
        47603931,
        47605027,
        47603585,
        47606177,
        47606654,
        47605562,
        47603330,
        47606992,
        47609332,
        47603493,
        47604118,
        47606905,
        47607233,
        47605067,
        47602926,
        47603404,
        47604045,
        47606234,
        47604034,
        47603384,
        47604929,
        47605237,
        47605032,
        47603786,
        47604154,
        47606591,
        47604576,
        47605917,
        47603108,
        47606046,
        47606755,
        47602897,
        47608949,
        47605106,
        47607254,
        47605604,
        47604837,
        47606433,
        47605517,
        47604504,
        47603861,
        47608470,
        47603666,
        47603612,
        47603507,
        47603465,
        47603378,
        47603401,
        47603245,
        47604658,
        47604032,
        47604877,
        47604529,
        47606276,
        47605508,
        47605463,
        47604873,
        47603410,
        47610048,
        47609183,
        47607633,
        47606744,
        47608356,
        47609159,
        47608802,
        47604750,
        47603922,
        47604412,
        47603746,
        47606181,
        47603414,
        47605378,
        47604766
      ],
      "score": 537,
      "time": 1775060078,
      "title": "EmDash – A spiritual successor to WordPress that solves plugin security",
      "type": "story",
      "url": "https://blog.cloudflare.com/emdash-wordpress/"
    },
    {
      "by": "ingve",
      "descendants": 341,
      "id": 47606840,
      "kids": [
        47608294,
        47610423,
        47607703,
        47609520,
        47607342,
        47607135,
        47608980,
        47607437,
        47607173,
        47609168,
        47607151,
        47610186,
        47607575,
        47610405,
        47608708,
        47609099,
        47607587,
        47607818,
        47608933,
        47607538,
        47607763,
        47609852,
        47607785,
        47607417,
        47607537,
        47609016,
        47609510,
        47607292,
        47607907,
        47607238,
        47609244,
        47609959,
        47609737,
        47608237,
        47608125,
        47607774,
        47607682,
        47606931,
        47607522,
        47607793,
        47608239,
        47607374,
        47608325,
        47607847,
        47607766,
        47607743,
        47607142,
        47607216,
        47609701,
        47608954,
        47609022,
        47609186,
        47607242,
        47607126
      ],
      "score": 423,
      "time": 1775079401,
      "title": "DRAM pricing is killing the hobbyist SBC market",
      "type": "story",
      "url": "https://www.jeffgeerling.com/blog/2026/dram-pricing-is-killing-the-hobbyist-sbc-market/"
    },
    {
      "by": "runevision",
      "descendants": 13,
      "id": 47584386,
      "kids": [
        47584387,
        47608012,
        47609575,
        47607476,
        47609190,
        47608033,
        47608994,
        47608683,
        47609097,
        47609008
      ],
      "score": 126,
      "time": 1774946484,
      "title": "Fast and Gorgeous Erosion Filter",
      "type": "story",
      "url": "https://blog.runevision.com/2026/03/fast-and-gorgeous-erosion-filter.html"
    },
    {
      "by": "hauntsaninja",
      "descendants": 40,
      "id": 47557921,
      "kids": [
        47607352,
        47558065,
        47558862,
        47605255,
        47610178,
        47606543,
        47609693,
        47605757,
        47607529,
        47607801,
        47609026,
        47608979,
        47609031,
        47608010,
        47608374,
        47606706
      ],
      "score": 256,
      "time": 1774729921,
      "title": "Show HN: Git bayesect – Bayesian Git bisection for non-deterministic bugs",
      "type": "story",
      "url": "https://github.com/hauntsaninja/git_bayesect"
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
      "title": "What Would You See Changed in Haskell?",
      "url": "https://blog.haskell.org/what-would-you-see-changed-in-haskell/",
      "score": 30,
      "comments": 1,
      "tags": [
        "haskell"
      ],
      "id": "zgnphc"
    },
    {
      "title": "Linear types proposal for Hare",
      "url": "https://yerinalexey.srht.site/borrow/notes.html",
      "score": 46,
      "comments": 17,
      "tags": [
        "plt"
      ],
      "id": "pzl1g9"
    },
    {
      "title": "Python Yet Reforged Entirely",
      "url": "https://pyre-lang.org/",
      "score": 9,
      "comments": 5,
      "tags": [
        "compilers",
        "python",
        "rust",
        "vibecoding"
      ],
      "id": "phjtbx"
    },
    {
      "title": "Reading leaked Claude Code source code",
      "url": "https://lr0.org/blog/p/claude-code-source/",
      "score": 76,
      "comments": 37,
      "tags": [
        "vibecoding"
      ],
      "id": "6c8cwq"
    },
    {
      "title": "git_bayesect: Bayesian git bisect",
      "url": "https://github.com/hauntsaninja/git_bayesect",
      "score": 24,
      "comments": 2,
      "tags": [
        "debugging"
      ],
      "id": "h9zb89"
    },
    {
      "title": "The Self-Cancelling Subscription",
      "url": "https://predr.ag/blog/the-self-cancelling-subscription/",
      "score": 58,
      "comments": 0,
      "tags": [
        "debugging"
      ],
      "id": "6gqiqy"
    },
    {
      "title": "CSS or BS?",
      "url": "https://www.keithcirkel.co.uk/css-or-bs",
      "score": 60,
      "comments": 5,
      "tags": [
        "css"
      ],
      "id": "oox3oi"
    },
    {
      "title": "Email obfuscation: What works in 2026?",
      "url": "https://spencermortensen.com/articles/email-obfuscation/",
      "score": 14,
      "comments": 3,
      "tags": [
        "practices",
        "privacy"
      ],
      "id": "m3b3fk"
    },
    {
      "title": "A game with programmable space combat written in Go",
      "url": "https://store.steampowered.com/app/3024370/NebuLeet",
      "score": 9,
      "comments": 5,
      "tags": [
        "games",
        "go"
      ],
      "id": "gtb0fc"
    },
    {
      "title": "Ruby 3.2 Is EOL: What You Actually Need to Do",
      "url": "https://piechowski.io/post/ruby-3-2-eol/",
      "score": 2,
      "comments": 1,
      "tags": [
        "ruby"
      ],
      "id": "kpizkt"
    }
  ]
}
```

