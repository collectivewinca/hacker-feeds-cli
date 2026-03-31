# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-31 06:44:37 UTC

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
      "title": "What is your WPM (Words per Minute)? #1",
      "description": "Cover Video is from Sonic X   I am curious, What is your WPM?  The highest WPM for the 5 minute and...",
      "url": "https://dev.to/francistrdev/what-is-your-wpm-words-per-minute-1af7",
      "tags": "discuss, watercooler, challenge, community",
      "reactions": 18,
      "comments": 34,
      "reading_time": 1,
      "author": "francistrdev"
    },
    {
      "title": "What are your goals for the week? #172",
      "description": "Had an increase in responses last week. Thanks to @francistrdev for the shout out in their posts. I...",
      "url": "https://dev.to/jarvisscript/what-are-your-goals-for-the-week-55nm",
      "tags": "career, discuss, productivity, watercooler",
      "reactions": 14,
      "comments": 22,
      "reading_time": 2,
      "author": "jarvisscript"
    },
    {
      "title": "Prompt Stuffing Is Killing Your Agent",
      "description": "Classic RAG retrieves everything and hopes for the best. Agentic RAG uses conditional retrieval with validation loops — and it's cheaper too.",
      "url": "https://dev.to/wassimchegham/agentic-rag-done-right-4846",
      "tags": "ai, rag, agents, llm",
      "reactions": 4,
      "comments": 1,
      "reading_time": 6,
      "author": "wassimchegham"
    },
    {
      "title": "How to Break Your PostgreSQL IIoT Database and Learn Something in the Process",
      "description": "As engineers, we're taught to design for reliability. We do design calculations, run simulations,...",
      "url": "https://dev.to/tigerdata/how-to-break-your-postgresql-iiot-database-and-learn-something-in-the-process-n2d",
      "tags": "iot, postgres, industrial, database",
      "reactions": 2,
      "comments": 0,
      "reading_time": 6,
      "author": "tigerdata_dev"
    },
    {
      "title": "I'm rebuilding a 90s LAN game in Rust to finally learn it",
      "description": "In the late 90s, my brother, my cousin, and I would crowd around a single PC and play Atomic...",
      "url": "https://dev.to/tomerl1/im-rebuilding-a-90s-lan-game-in-rust-to-finally-learn-it-5eo8",
      "tags": "webdev, gamedev, rust, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "tomerl1"
    },
    {
      "title": "The Excel Moment: Why Every Profession That Absorbed a Transformative Tool Followed the Same Pattern",
      "description": "Someone recently asked in a LinkedIn thread whether AI tools are truly changing software engineering...",
      "url": "https://dev.to/martinrojas/the-excel-moment-why-every-profession-that-absorbed-a-transformative-tool-followed-the-same-pattern-1lm4",
      "tags": "ai, careerdevelopment, discuss",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "martinrojas"
    },
    {
      "title": "I Eliminated Layout Jitter From LLM Streaming — Here's How",
      "description": "Every AI chat app has the same bug. You've felt it. That stuttering scrollbar, the content jumping,...",
      "url": "https://dev.to/jvoltci/zerojitter-stop-layout-thrashing-stream-llm-tokens-without-jitter-36ef",
      "tags": "llm, performance, showdev, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "jvoltci"
    },
    {
      "title": "What is ‘Harness Design’ and why does it matter",
      "description": "AI coding starts to feel a lot more useful when you stop expecting one agent to do everything.  The...",
      "url": "https://dev.to/baltz/what-is-harness-design-and-why-does-it-matter-2dbj",
      "tags": "ai, programming, productivity, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "baltz"
    },
    {
      "title": "Long-Horizon Agents Are Here. Full Autopilot Isn't",
      "description": "A good sanity check for long-horizon agents is not a benchmark. It is a task that is easy to verify...",
      "url": "https://dev.to/maximsaplin/long-horizon-agents-are-here-full-autopilot-isnt-5bo7",
      "tags": "agents, ai, llm, programming",
      "reactions": 13,
      "comments": 6,
      "reading_time": 6,
      "author": "maximsaplin"
    },
    {
      "title": "Why Rails Still Feels Like a Startup’s Best Friend in the AI Era",
      "description": "Why Rails still matters for startups and AI-assisted coding: less chaos, more momentum.",
      "url": "https://dev.to/mezbahalam/why-rails-still-feels-like-a-startups-best-friend-in-the-ai-era-45hn",
      "tags": "rails, startup, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "mezbahalam"
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
      "forks": 15782,
      "added_stars": 17901,
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
      "forks": 646,
      "added_stars": 3555,
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
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3666,
      "added_stars": 5747,
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
      "author": "coreyhaines31",
      "repo": "marketingskills",
      "avatar": "https://github.com/coreyhaines31.png",
      "repo_link": "https://github.com/coreyhaines31/marketingskills",
      "desc": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2675,
      "added_stars": 1802,
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
      "author": "ChristopherKahler",
      "repo": "paul",
      "avatar": "https://github.com/ChristopherKahler.png",
      "repo_link": "https://github.com/ChristopherKahler/paul",
      "desc": "Plan-Apply-Unify Loop — Structured AI-assisted development for Claude Code. Quality over speed-for-speed's-sake.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 63,
      "added_stars": 157,
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
    },
    {
      "author": "plankanban",
      "repo": "planka",
      "avatar": "https://github.com/plankanban.png",
      "repo_link": "https://github.com/plankanban/planka",
      "desc": "PLANKA is the Kanban-style project mastering tool for everyone",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1218,
      "added_stars": 60,
      "builtBy": [
        {
          "username": "meltyshev",
          "href": "https://github.com/meltyshev",
          "avatar": "https://avatars.githubusercontent.com/u/5564188"
        },
        {
          "username": "daniel-hiller",
          "href": "https://github.com/daniel-hiller",
          "avatar": "https://avatars.githubusercontent.com/u/46579393"
        },
        {
          "username": "HannesOberreiter",
          "href": "https://github.com/HannesOberreiter",
          "avatar": "https://avatars.githubusercontent.com/u/16878981"
        },
        {
          "username": "symonbaikov",
          "href": "https://github.com/symonbaikov",
          "avatar": "https://avatars.githubusercontent.com/u/115481136"
        }
      ]
    },
    {
      "author": "SharpAI",
      "repo": "DeepCamera",
      "avatar": "https://github.com/SharpAI.png",
      "repo_link": "https://github.com/SharpAI/DeepCamera",
      "desc": "Open-Source AI Camera Skills Platform, AI NVR & CCTV Surveillance. Local VLM video analysis with Qwen, DeepSeek, SmolVLM, LLaVA, YOLO26. LLM-powered agentic security camera agent — watches, understands, remembers & guards your home via Telegram, Discord or Slack. Pluggable AI skills. OpenAI, Google, Anthropic or local AI. Runs on Mac Mini & AI PC.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 417,
      "added_stars": 73,
      "builtBy": [
        {
          "username": "solderzzc",
          "href": "https://github.com/solderzzc",
          "avatar": "https://avatars.githubusercontent.com/u/3085564"
        },
        {
          "username": "cici-tan",
          "href": "https://github.com/cici-tan",
          "avatar": "https://avatars.githubusercontent.com/u/13968333"
        },
        {
          "username": "lambda-zhang",
          "href": "https://github.com/lambda-zhang",
          "avatar": "https://avatars.githubusercontent.com/u/4313090"
        },
        {
          "username": "ningning-718",
          "href": "https://github.com/ningning-718",
          "avatar": "https://avatars.githubusercontent.com/u/10989782"
        },
        {
          "username": "yunhaia",
          "href": "https://github.com/yunhaia",
          "avatar": "https://avatars.githubusercontent.com/u/6570698"
        }
      ]
    },
    {
      "author": "anuraghazra",
      "repo": "github-readme-stats",
      "avatar": "https://github.com/anuraghazra.png",
      "repo_link": "https://github.com/anuraghazra/github-readme-stats",
      "desc": "⚡ Dynamically generated stats for your github readmes",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 31887,
      "added_stars": 129,
      "builtBy": [
        {
          "username": "qwerty541",
          "href": "https://github.com/qwerty541",
          "avatar": "https://avatars.githubusercontent.com/u/53787217"
        },
        {
          "username": "anuraghazra",
          "href": "https://github.com/anuraghazra",
          "avatar": "https://avatars.githubusercontent.com/u/35374649"
        },
        {
          "username": "rickstaa",
          "href": "https://github.com/rickstaa",
          "avatar": "https://avatars.githubusercontent.com/u/17570430"
        },
        {
          "username": "opheliagoldstein",
          "href": "https://github.com/opheliagoldstein",
          "avatar": "https://avatars.githubusercontent.com/u/159258143"
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
      "forks": 446,
      "added_stars": 602,
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
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Connect All AI Code Tools (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) to 40+ AI Providers & 100+ Models",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 391,
      "added_stars": 241,
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
      "author": "spicetify",
      "repo": "cli",
      "avatar": "https://github.com/spicetify.png",
      "repo_link": "https://github.com/spicetify/cli",
      "desc": "Command-line tool to customize Spotify client. Supports Windows, macOS, and Linux.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 852,
      "added_stars": 138,
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
      "title": "NoteRunway: Because Your Notion Workspace Deserves an Elite Crew",
      "description": "This is a submission for the Notion MCP Challenge           Table of Contents     What I...",
      "url": "https://dev.to/georgekobaidze/noterunway-because-your-notion-workspace-deserves-an-elite-crew-53bk",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 31,
      "comments": 21,
      "reading_time": 7,
      "author": "georgekobaidze"
    },
    {
      "title": "I Built a Local AI Agent That Audits My Own Articles. It Flagged Every Single One.",
      "description": "Not as a gotcha. As a result.  Seven URLs. Seven FAILs.  My Hashnode profile is missing an H1. Three...",
      "url": "https://dev.to/dannwaneri/i-built-a-local-ai-agent-that-audits-my-own-articles-it-flagged-every-single-one-pkh",
      "tags": "python, automation, ai, webdev",
      "reactions": 18,
      "comments": 17,
      "reading_time": 3,
      "author": "dannwaneri"
    },
    {
      "title": "Prompt Stuffing Is Killing Your Agent",
      "description": "Classic RAG retrieves everything and hopes for the best. Agentic RAG uses conditional retrieval with validation loops — and it's cheaper too.",
      "url": "https://dev.to/wassimchegham/agentic-rag-done-right-4846",
      "tags": "ai, rag, agents, llm",
      "reactions": 4,
      "comments": 1,
      "reading_time": 6,
      "author": "wassimchegham"
    },
    {
      "title": "Why AI agents fail at scheduling (and how to fix it)",
      "description": "Your AI agent can draft emails, search the web, summarize a 40-page PDF, and write code. Then someone...",
      "url": "https://dev.to/nicholasemccormick/why-ai-agents-fail-at-scheduling-and-how-to-fix-it-257h",
      "tags": "ai, agents, mcp, typescript",
      "reactions": 1,
      "comments": 2,
      "reading_time": 4,
      "author": "nicholasemccormick"
    },
    {
      "title": "The Excel Moment: Why Every Profession That Absorbed a Transformative Tool Followed the Same Pattern",
      "description": "Someone recently asked in a LinkedIn thread whether AI tools are truly changing software engineering...",
      "url": "https://dev.to/martinrojas/the-excel-moment-why-every-profession-that-absorbed-a-transformative-tool-followed-the-same-pattern-1lm4",
      "tags": "ai, careerdevelopment, discuss",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "martinrojas"
    },
    {
      "title": "Beyond InferenceService Readiness: 5 GitOps Failure Modes That Break KServe Deployments",
      "description": "A sequel to my KServe readiness post — five GitOps control-plane failure modes with exact terminal...",
      "url": "https://dev.to/sodiqjimoh/beyond-inferenceservice-readiness-5-gitops-failure-modes-that-break-kserve-deployments-14fb",
      "tags": "kubernetes, gitops, devops, ai",
      "reactions": 1,
      "comments": 0,
      "reading_time": 8,
      "author": "sodiqjimoh"
    },
    {
      "title": "I added AI to Stack Universe — your GitHub profile now has a narrator, a roast mode, and a weekly horoscope",
      "description": "Phase 5 just shipped. Stack Universe now has a full AI intelligence layer powered by Groq and...",
      "url": "https://dev.to/mabdullah06/i-added-ai-to-stack-universe-your-github-profile-now-has-a-narrator-a-roast-mode-and-a-weekly-2fkp",
      "tags": "webdev, ai, javascript, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "mabdullah06"
    },
    {
      "title": "The Frozen Context Pattern: Adding State to Deep Equilibrium Models",
      "description": "DEQ models converge only if their update function is a contraction. We found a design pattern that...",
      "url": "https://dev.to/sergio_solis/the-frozen-context-pattern-adding-state-to-deep-equilibrium-models-3b2e",
      "tags": "ai, deeplearning, machinelearning, rust",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sergio_solis"
    },
    {
      "title": "285 Ways to Attack an AI Agent — A Security Taxonomy",
      "description": "I cataloged 285+ attack patterns for AI agents and built an open-source scanner. Here is what I found.",
      "url": "https://dev.to/neuzhou/285-ways-to-attack-an-ai-agent-a-security-taxonomy-1pep",
      "tags": "security, ai, opensource, typescript",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "neuzhou"
    },
    {
      "title": "Surviving as a Human in the Age of AI",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience  There's a palpable feeling...",
      "url": "https://dev.to/jenlooper/surviving-as-a-human-in-the-age-of-ai-1p1b",
      "tags": "ai, programming, career, wecoded",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "jenlooper"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "mtud",
      "descendants": 143,
      "id": 47582220,
      "kids": [
        47582632,
        47582484,
        47583251,
        47582834,
        47582652,
        47582778,
        47583515,
        47582455,
        47583453,
        47583469,
        47582927,
        47582781,
        47583086,
        47582667,
        47583468,
        47582823,
        47582685,
        47583220,
        47582937,
        47582443,
        47583372,
        47582702,
        47582221,
        47583087,
        47582423,
        47582650,
        47582759,
        47582649,
        47583304,
        47582454,
        47582488,
        47582738,
        47582688,
        47583294,
        47583510,
        47582893,
        47582782,
        47582656,
        47582448,
        47583098
      ],
      "score": 474,
      "time": 1774925657,
      "title": "Axios compromised on NPM – Malicious versions drop remote access trojan",
      "type": "story",
      "url": "https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan"
    },
    {
      "by": "redundantly",
      "descendants": 42,
      "id": 47582482,
      "kids": [
        47582826,
        47583550,
        47582925,
        47582875,
        47582878,
        47583159,
        47582939,
        47583101,
        47583513
      ],
      "score": 134,
      "time": 1774928445,
      "title": "Ollama is now powered by MLX on Apple Silicon in preview",
      "type": "story",
      "url": "https://ollama.com/blog/mlx"
    },
    {
      "by": "codepawl",
      "descendants": 21,
      "id": 47583045,
      "kids": [
        47583189,
        47583470,
        47583161,
        47583336,
        47583465,
        47583129,
        47583466
      ],
      "score": 47,
      "time": 1774934519,
      "title": "Google's 200M-parameter time-series foundation model with 16k context",
      "type": "story",
      "url": "https://github.com/google-research/timesfm"
    },
    {
      "by": "killme2008",
      "descendants": 92,
      "id": 47581701,
      "kids": [
        47581841,
        47582905,
        47581985,
        47581845,
        47581956,
        47582120,
        47583028,
        47581963,
        47581946,
        47582229,
        47582960,
        47582404,
        47581918,
        47583205,
        47582401,
        47581840,
        47581941,
        47583446,
        47582598,
        47582487,
        47581909,
        47582173,
        47582041,
        47582131,
        47583173,
        47581814,
        47582580,
        47582490,
        47582338,
        47582248,
        47582088,
        47581921,
        47581870,
        47582172,
        47582247,
        47581990,
        47582410,
        47582620,
        47582432,
        47582285,
        47582805,
        47582013
      ],
      "score": 242,
      "time": 1774920214,
      "title": "Universal Claude.md – cut Claude output tokens",
      "type": "story",
      "url": "https://github.com/drona23/claude-token-efficient"
    },
    {
      "by": "idlewords",
      "descendants": 113,
      "id": 47582043,
      "kids": [
        47582655,
        47583171,
        47583210,
        47582340,
        47582600,
        47582627,
        47582842,
        47582529,
        47582602,
        47582639,
        47582926,
        47582694,
        47582417,
        47583464,
        47583249,
        47582884,
        47582480,
        47582327,
        47583153
      ],
      "score": 199,
      "time": 1774923830,
      "title": "Artemis II is not safe to fly",
      "type": "story",
      "url": "https://idlewords.com/2026/03/artemis_ii_is_not_safe_to_fly.htm"
    },
    {
      "by": "speckx",
      "descendants": 165,
      "id": 47577761,
      "kids": [
        47581532,
        47578630,
        47578865,
        47578770,
        47578939,
        47578467,
        47578773,
        47579473,
        47582384,
        47582711,
        47581255,
        47578873,
        47579693,
        47580899,
        47578442,
        47581975,
        47580412,
        47580453,
        47579364,
        47578617,
        47579632,
        47579839,
        47579023,
        47579001,
        47579840
      ],
      "score": 525,
      "time": 1774894560,
      "title": "Fedware: Government apps that spy harder than the apps they ban",
      "type": "story",
      "url": "https://www.sambent.com/the-white-house-app-has-huawei-spyware-and-an-ice-tip-line/"
    },
    {
      "by": "karimf",
      "descendants": 172,
      "id": 47573519,
      "kids": [
        47578515,
        47578622,
        47578477,
        47581726,
        47578488,
        47579795,
        47580714,
        47583387,
        47582747,
        47583269,
        47580797,
        47583056,
        47578439,
        47579338,
        47578636,
        47579983,
        47580338,
        47579171,
        47581350,
        47580382,
        47578607,
        47579158,
        47579228,
        47579858,
        47580437,
        47578849,
        47581655,
        47579830,
        47579224,
        47578500,
        47578644,
        47581239,
        47580711,
        47580523,
        47579160,
        47581440,
        47578498,
        47579226,
        47578878,
        47582289,
        47579651,
        47583077,
        47579790,
        47579978,
        47578850,
        47579412,
        47578922,
        47579802,
        47580340,
        47581700,
        47580200,
        47578546,
        47580193,
        47581202,
        47581119,
        47578188,
        47579366,
        47578980,
        47578642,
        47579437
      ],
      "score": 474,
      "time": 1774874396,
      "title": "Do your own writing",
      "type": "story",
      "url": "https://alexhwoods.com/dont-let-ai-write-for-you/"
    },
    {
      "by": "_____k",
      "descendants": 30,
      "id": 47582984,
      "kids": [
        47583315,
        47583186,
        47583478,
        47583321,
        47583260,
        47583527,
        47583558,
        47583393,
        47583322,
        47583318,
        47583443,
        47583398,
        47583376
      ],
      "score": 64,
      "time": 1774933884,
      "title": "GitHub backs down, kills Copilot pull-request ads after backlash",
      "type": "story",
      "url": "https://www.theregister.com/2026/03/30/github_copilot_ads_pull_requests/"
    },
    {
      "by": "ingve",
      "descendants": 201,
      "id": 47580297,
      "kids": [
        47580937,
        47581785,
        47580691,
        47581607,
        47580816,
        47580438,
        47582339,
        47580769,
        47581096,
        47581739,
        47581707,
        47581351,
        47580948,
        47581346,
        47583432,
        47581326,
        47580894,
        47581628,
        47581123,
        47582211,
        47580772,
        47582071,
        47581124,
        47581067,
        47581813,
        47580652,
        47580452,
        47581214,
        47580893,
        47581303,
        47582471,
        47581866,
        47580681,
        47582343,
        47580554,
        47580458,
        47580918
      ],
      "score": 212,
      "time": 1774908321,
      "title": "Android Developer Verification",
      "type": "story",
      "url": "https://android-developers.googleblog.com/2026/03/android-developer-verification-rolling-out-to-all-developers.html"
    },
    {
      "by": "yabones",
      "descendants": 227,
      "id": 47574034,
      "kids": [
        47583568,
        47576601,
        47574787,
        47575275,
        47574625,
        47576135,
        47577221,
        47575728,
        47574989,
        47576791,
        47578579,
        47578710,
        47582424,
        47575454,
        47575377,
        47575573,
        47575070,
        47582691,
        47580977,
        47576436,
        47576249,
        47575200,
        47574579,
        47575367,
        47577546,
        47576085,
        47579351,
        47579751,
        47577973,
        47579356,
        47582155,
        47575284,
        47576518,
        47577894,
        47575641,
        47578359,
        47575648,
        47574610,
        47575422,
        47580995,
        47576178,
        47575901,
        47575476,
        47575494,
        47574732,
        47574617,
        47574634,
        47577599,
        47577271,
        47576425,
        47576329,
        47574404,
        47575407,
        47574408,
        47579965,
        47577473,
        47577388,
        47577360,
        47576598,
        47574444,
        47575731,
        47579274,
        47582788,
        47575881,
        47576073,
        47575203
      ],
      "score": 652,
      "time": 1774877334,
      "title": "How to turn anything into a router",
      "type": "story",
      "url": "https://nbailey.ca/post/router/"
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
      "by": "mtud",
      "descendants": 143,
      "id": 47582220,
      "kids": [
        47582632,
        47582484,
        47583251,
        47582834,
        47582652,
        47582778,
        47583515,
        47582455,
        47583453,
        47583469,
        47582927,
        47582781,
        47583086,
        47582667,
        47583468,
        47582823,
        47582685,
        47583220,
        47582937,
        47582443,
        47583372,
        47582702,
        47582221,
        47583087,
        47582423,
        47582650,
        47582759,
        47582649,
        47583304,
        47582454,
        47582488,
        47582738,
        47582688,
        47583294,
        47583510,
        47582893,
        47582782,
        47582656,
        47582448,
        47583098
      ],
      "score": 474,
      "time": 1774925657,
      "title": "Axios compromised on NPM – Malicious versions drop remote access trojan",
      "type": "story",
      "url": "https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan"
    },
    {
      "by": "redundantly",
      "descendants": 42,
      "id": 47582482,
      "kids": [
        47582826,
        47583550,
        47582925,
        47582875,
        47582878,
        47583159,
        47582939,
        47583101,
        47583513
      ],
      "score": 134,
      "time": 1774928445,
      "title": "Ollama is now powered by MLX on Apple Silicon in preview",
      "type": "story",
      "url": "https://ollama.com/blog/mlx"
    },
    {
      "by": "codepawl",
      "descendants": 21,
      "id": 47583045,
      "kids": [
        47583189,
        47583470,
        47583161,
        47583336,
        47583465,
        47583129,
        47583466
      ],
      "score": 47,
      "time": 1774934519,
      "title": "Google's 200M-parameter time-series foundation model with 16k context",
      "type": "story",
      "url": "https://github.com/google-research/timesfm"
    },
    {
      "by": "killme2008",
      "descendants": 92,
      "id": 47581701,
      "kids": [
        47581841,
        47582905,
        47581985,
        47581845,
        47581956,
        47582120,
        47583028,
        47581963,
        47581946,
        47582229,
        47582960,
        47582404,
        47581918,
        47583205,
        47582401,
        47581840,
        47581941,
        47583446,
        47582598,
        47582487,
        47581909,
        47582173,
        47582041,
        47582131,
        47583173,
        47581814,
        47582580,
        47582490,
        47582338,
        47582248,
        47582088,
        47581921,
        47581870,
        47582172,
        47582247,
        47581990,
        47582410,
        47582620,
        47582432,
        47582285,
        47582805,
        47582013
      ],
      "score": 242,
      "time": 1774920214,
      "title": "Universal Claude.md – cut Claude output tokens",
      "type": "story",
      "url": "https://github.com/drona23/claude-token-efficient"
    },
    {
      "by": "idlewords",
      "descendants": 113,
      "id": 47582043,
      "kids": [
        47582655,
        47583171,
        47583210,
        47582340,
        47582600,
        47582627,
        47582842,
        47582529,
        47582602,
        47582639,
        47582926,
        47582694,
        47582417,
        47583464,
        47583249,
        47582884,
        47582480,
        47582327,
        47583153
      ],
      "score": 199,
      "time": 1774923830,
      "title": "Artemis II is not safe to fly",
      "type": "story",
      "url": "https://idlewords.com/2026/03/artemis_ii_is_not_safe_to_fly.htm"
    },
    {
      "by": "speckx",
      "descendants": 165,
      "id": 47577761,
      "kids": [
        47581532,
        47578630,
        47578865,
        47578770,
        47578939,
        47578467,
        47578773,
        47579473,
        47582384,
        47582711,
        47581255,
        47578873,
        47579693,
        47580899,
        47578442,
        47581975,
        47580412,
        47580453,
        47579364,
        47578617,
        47579632,
        47579839,
        47579023,
        47579001,
        47579840
      ],
      "score": 525,
      "time": 1774894560,
      "title": "Fedware: Government apps that spy harder than the apps they ban",
      "type": "story",
      "url": "https://www.sambent.com/the-white-house-app-has-huawei-spyware-and-an-ice-tip-line/"
    },
    {
      "by": "karimf",
      "descendants": 172,
      "id": 47573519,
      "kids": [
        47578515,
        47578622,
        47578477,
        47581726,
        47578488,
        47579795,
        47580714,
        47583387,
        47582747,
        47583269,
        47580797,
        47583056,
        47578439,
        47579338,
        47578636,
        47579983,
        47580338,
        47579171,
        47581350,
        47580382,
        47578607,
        47579158,
        47579228,
        47579858,
        47580437,
        47578849,
        47581655,
        47579830,
        47579224,
        47578500,
        47578644,
        47581239,
        47580711,
        47580523,
        47579160,
        47581440,
        47578498,
        47579226,
        47578878,
        47582289,
        47579651,
        47583077,
        47579790,
        47579978,
        47578850,
        47579412,
        47578922,
        47579802,
        47580340,
        47581700,
        47580200,
        47578546,
        47580193,
        47581202,
        47581119,
        47578188,
        47579366,
        47578980,
        47578642,
        47579437
      ],
      "score": 474,
      "time": 1774874396,
      "title": "Do your own writing",
      "type": "story",
      "url": "https://alexhwoods.com/dont-let-ai-write-for-you/"
    },
    {
      "by": "_____k",
      "descendants": 30,
      "id": 47582984,
      "kids": [
        47583315,
        47583186,
        47583478,
        47583321,
        47583260,
        47583527,
        47583558,
        47583393,
        47583322,
        47583318,
        47583443,
        47583398,
        47583376
      ],
      "score": 64,
      "time": 1774933884,
      "title": "GitHub backs down, kills Copilot pull-request ads after backlash",
      "type": "story",
      "url": "https://www.theregister.com/2026/03/30/github_copilot_ads_pull_requests/"
    },
    {
      "by": "ingve",
      "descendants": 201,
      "id": 47580297,
      "kids": [
        47580937,
        47581785,
        47580691,
        47581607,
        47580816,
        47580438,
        47582339,
        47580769,
        47581096,
        47581739,
        47581707,
        47581351,
        47580948,
        47581346,
        47583432,
        47581326,
        47580894,
        47581628,
        47581123,
        47582211,
        47580772,
        47582071,
        47581124,
        47581067,
        47581813,
        47580652,
        47580452,
        47581214,
        47580893,
        47581303,
        47582471,
        47581866,
        47580681,
        47582343,
        47580554,
        47580458,
        47580918
      ],
      "score": 212,
      "time": 1774908321,
      "title": "Android Developer Verification",
      "type": "story",
      "url": "https://android-developers.googleblog.com/2026/03/android-developer-verification-rolling-out-to-all-developers.html"
    },
    {
      "by": "yabones",
      "descendants": 227,
      "id": 47574034,
      "kids": [
        47583568,
        47576601,
        47574787,
        47575275,
        47574625,
        47576135,
        47577221,
        47575728,
        47574989,
        47576791,
        47578579,
        47578710,
        47582424,
        47575454,
        47575377,
        47575573,
        47575070,
        47582691,
        47580977,
        47576436,
        47576249,
        47575200,
        47574579,
        47575367,
        47577546,
        47576085,
        47579351,
        47579751,
        47577973,
        47579356,
        47582155,
        47575284,
        47576518,
        47577894,
        47575641,
        47578359,
        47575648,
        47574610,
        47575422,
        47580995,
        47576178,
        47575901,
        47575476,
        47575494,
        47574732,
        47574617,
        47574634,
        47577599,
        47577271,
        47576425,
        47576329,
        47574404,
        47575407,
        47574408,
        47579965,
        47577473,
        47577388,
        47577360,
        47576598,
        47574444,
        47575731,
        47579274,
        47582788,
        47575881,
        47576073,
        47575203
      ],
      "score": 652,
      "time": 1774877334,
      "title": "How to turn anything into a router",
      "type": "story",
      "url": "https://nbailey.ca/post/router/"
    },
    {
      "by": "HughParry",
      "descendants": 132,
      "id": 47578572,
      "kids": [
        47583557,
        47581678,
        47579511,
        47579542,
        47580901,
        47582870,
        47581943,
        47580442,
        47583116,
        47581424,
        47580067,
        47579555,
        47579279,
        47582765,
        47581504,
        47579251,
        47579828,
        47580571,
        47579155,
        47579566,
        47580095,
        47579321,
        47579232,
        47579293,
        47583136,
        47580177,
        47579343,
        47579962,
        47579146
      ],
      "score": 282,
      "time": 1774898553,
      "title": "Turning a MacBook into a touchscreen with $1 of hardware (2018)",
      "type": "story",
      "url": "https://anishathalye.com/macbook-touchscreen/"
    },
    {
      "by": "fogus",
      "descendants": 7,
      "id": 47532891,
      "kids": [
        47583349,
        47583290,
        47582255
      ],
      "score": 130,
      "time": 1774544454,
      "title": "Clojure: The Documentary, official trailer [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=JJEyffSdBsk"
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
      "title": "copilot edited an ad into my pr",
      "url": "https://notes.zachmanson.com/copilot-edited-an-ad-into-my-pr/",
      "score": 123,
      "comments": 22,
      "tags": [
        "vibecoding"
      ],
      "id": "0o60nu"
    },
    {
      "title": "Your job isn't programming",
      "url": "https://codeandcake.dev/posts/2025-12-12-your-job-isnt-programming",
      "score": 38,
      "comments": 22,
      "tags": [
        "practices"
      ],
      "id": "fug4fz"
    },
    {
      "title": "Okapi, or “What if ripgrep Could Edit?”",
      "url": "https://kocharhook.com/post/6/",
      "score": 59,
      "comments": 19,
      "tags": [
        "editors",
        "release",
        "rust",
        "show"
      ],
      "id": "kqnoi9"
    },
    {
      "title": "Joins are NOT Expensive",
      "url": "https://www.database-doctor.com/posts/joins-are-not-expensive",
      "score": 21,
      "comments": 6,
      "tags": [
        "databases"
      ],
      "id": "zudaci"
    },
    {
      "title": "Why have supply chain attacks become a near daily occurrence ?",
      "url": "",
      "score": 5,
      "comments": 3,
      "tags": [
        "ask",
        "programming"
      ],
      "id": "nz2wdr"
    },
    {
      "title": "The Steam Controller D0ggle Adventure",
      "url": "https://im-just-lee.ing/steam-controller-d0ggle-54682aa4/",
      "score": 45,
      "comments": 4,
      "tags": [
        "hardware",
        "reversing"
      ],
      "id": "wkukvc"
    },
    {
      "title": "Working software runs locally",
      "url": "https://nickmonad.blog/2026/working-software-runs-locally/",
      "score": 18,
      "comments": 0,
      "tags": [
        "practices",
        "testing"
      ],
      "id": "vxqecz"
    },
    {
      "title": "ChatGPT Won't Let You Type Until Cloudflare Reads Your React State. I Decrypted the Program That Does It",
      "url": "https://www.buchodi.com/chatgpt-wont-let-you-type-until-cloudflare-reads-your-react-state-i-decrypted-the-program-that-does-it/",
      "score": 62,
      "comments": 2,
      "tags": [
        "privacy",
        "security",
        "web"
      ],
      "id": "lxkqhp"
    },
    {
      "title": "NumPy as Synth Engine",
      "url": "https://kennethreitz.org/essays/2026-03-29-numpy_as_synth_engine",
      "score": 18,
      "comments": 6,
      "tags": [
        "python"
      ],
      "id": "v8agk2"
    },
    {
      "title": "15 Years of Forking (Waterfox)",
      "url": "https://www.waterfox.com/blog/15-years-of-forking/",
      "score": 46,
      "comments": 16,
      "tags": [
        "browsers",
        "historical"
      ],
      "id": "yyxyjy"
    }
  ]
}
```

