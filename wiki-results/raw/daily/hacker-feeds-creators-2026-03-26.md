# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-26 06:41:31 UTC

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
      "title": "your agent can think. it can't remember.",
      "description": "TLDR: ghost gives your agent instant, ephemeral postgres databases. unlimited databases, unlimited...",
      "url": "https://dev.to/ghostbuild/your-agent-can-think-it-cant-remember-5e1o",
      "tags": "ai, mcp, postgres, agents",
      "reactions": 122,
      "comments": 24,
      "reading_time": 7,
      "author": "ghostdotbuild"
    },
    {
      "title": "Check Up with Each Other",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience     Over the last year, It...",
      "url": "https://dev.to/francistrdev/check-up-with-each-other-2ogc",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 48,
      "comments": 17,
      "reading_time": 4,
      "author": "francistrdev"
    },
    {
      "title": "AI Didn't Break Your Culture. It Exposed It.",
      "description": "An engineer pushes back on a decision. The response: \"ChatGPT recommended something else.\" The tell...",
      "url": "https://dev.to/jonoherrington/ai-didnt-break-your-culture-it-exposed-it-2729",
      "tags": "ai, webdev, leadership, programming",
      "reactions": 19,
      "comments": 9,
      "reading_time": 6,
      "author": "jonoherrington"
    },
    {
      "title": "Beyond n8n for Workflow Automation: Agent Graphs as Your Universal Agent Harness",
      "description": "Original article published on March 20, 2025  Hardcoded multi-agent orchestration is brittle:...",
      "url": "https://dev.to/launchdarkly/beyond-n8n-for-workflow-automation-agent-graphs-as-your-universal-agent-harness-4lic",
      "tags": "agents, ai, aiops, architecture",
      "reactions": 6,
      "comments": 0,
      "reading_time": 14,
      "author": "sattensil888"
    },
    {
      "title": "The software industry is ready to grow",
      "description": "I don't spend a lot of time on the X these days, but I think this perspective is worth...",
      "url": "https://dev.to/ben/the-software-industry-is-ready-to-grow-4ie4",
      "tags": "ai, career, agents",
      "reactions": 14,
      "comments": 4,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Tend (and about Vibe Coding)",
      "description": "It’s been a while since I’ve coded for myself. I did push an update on Ssstyles and JSSynth every now...",
      "url": "https://dev.to/iamschulz/tend-and-about-vibe-coding-2501",
      "tags": "frontend, vue, docker, vibecoding",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "iamschulz"
    },
    {
      "title": "Generating an aerial view of your project with OpenRewrite",
      "description": "Read it in french here   In the previous article, we discussed (well, I wrote, you read) Scanning...",
      "url": "https://dev.to/onepoint/generating-an-aerial-view-of-your-project-with-openrewrite-49kk",
      "tags": "java, jreleaser, openrewrite, graph",
      "reactions": 3,
      "comments": 0,
      "reading_time": 5,
      "author": "jtama"
    },
    {
      "title": "AI Crash Course: Hallucinations",
      "description": "While we can’t eliminate hallucinations entirely, there are still things we can do to reduce the chances of hallucinations showing up in our model’s responses.",
      "url": "https://dev.to/kathryngrayson/ai-crash-course-hallucinations-1jeg",
      "tags": "ai, beginners",
      "reactions": 9,
      "comments": 1,
      "reading_time": 6,
      "author": "kathryngrayson"
    },
    {
      "title": "PageSpeed 35 to 90: What I Got Wrong, Then Right",
      "description": "How I Took My PageSpeed Score from 35 to 90 (And What I Got Wrong First)   Have you ever...",
      "url": "https://dev.to/genuineswe/pagespeed-35-to-90-what-i-got-wrong-then-right-1o2m",
      "tags": "performance, frontend, webdev, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "genuineswe"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-4ig2",
      "tags": "top7, discuss",
      "reactions": 43,
      "comments": 6,
      "reading_time": 2,
      "author": "jess"
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
      "forks": 553,
      "added_stars": 6816,
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
      "forks": 14186,
      "added_stars": 22442,
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
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 566,
      "added_stars": 3130,
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
      "author": "sgoudelis",
      "repo": "ground-station",
      "avatar": "https://github.com/sgoudelis.png",
      "repo_link": "https://github.com/sgoudelis/ground-station",
      "desc": "Ground Station is all-in-one satellite monitoring suite",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 568,
      "added_stars": 1182,
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
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3409,
      "added_stars": 7220,
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
      "author": "ComposioHQ",
      "repo": "awesome-claude-plugins",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/awesome-claude-plugins",
      "desc": "A curated list of Plugins that let you extend Claude Code with custom commands, agents, hooks, and MCP servers through the plugin system.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 238,
      "added_stars": 52,
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
      "forks": 2489,
      "added_stars": 1888,
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
      "added_stars": 20,
      "builtBy": [
        {
          "username": "GiorgioUghini",
          "href": "https://github.com/GiorgioUghini",
          "avatar": "https://avatars.githubusercontent.com/u/23707134"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ericsche",
          "href": "https://github.com/ericsche",
          "avatar": "https://avatars.githubusercontent.com/u/35633680"
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
      "author": "simple-icons",
      "repo": "simple-icons",
      "avatar": "https://github.com/simple-icons.png",
      "repo_link": "https://github.com/simple-icons/simple-icons",
      "desc": "SVG icons for popular brands",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3084,
      "added_stars": 91,
      "builtBy": [
        {
          "username": "PeterShaggyNoble",
          "href": "https://github.com/PeterShaggyNoble",
          "avatar": "https://avatars.githubusercontent.com/u/15157491"
        },
        {
          "username": "ericcornelissen",
          "href": "https://github.com/ericcornelissen",
          "avatar": "https://avatars.githubusercontent.com/u/3742559"
        },
        {
          "username": "birjj",
          "href": "https://github.com/birjj",
          "avatar": "https://avatars.githubusercontent.com/u/4542461"
        },
        {
          "username": "mondeja",
          "href": "https://github.com/mondeja",
          "avatar": "https://avatars.githubusercontent.com/u/23049315"
        },
        {
          "username": "danleech",
          "href": "https://github.com/danleech",
          "avatar": "https://avatars.githubusercontent.com/u/734706"
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
      "title": "your agent can think. it can't remember.",
      "description": "TLDR: ghost gives your agent instant, ephemeral postgres databases. unlimited databases, unlimited...",
      "url": "https://dev.to/ghostbuild/your-agent-can-think-it-cant-remember-5e1o",
      "tags": "ai, mcp, postgres, agents",
      "reactions": 124,
      "comments": 24,
      "reading_time": 7,
      "author": "ghostdotbuild"
    },
    {
      "title": "AI Didn't Break Your Culture. It Exposed It.",
      "description": "An engineer pushes back on a decision. The response: \"ChatGPT recommended something else.\" The tell...",
      "url": "https://dev.to/jonoherrington/ai-didnt-break-your-culture-it-exposed-it-2729",
      "tags": "ai, webdev, leadership, programming",
      "reactions": 19,
      "comments": 9,
      "reading_time": 6,
      "author": "jonoherrington"
    },
    {
      "title": "Beyond n8n for Workflow Automation: Agent Graphs as Your Universal Agent Harness",
      "description": "Original article published on March 20, 2025  Hardcoded multi-agent orchestration is brittle:...",
      "url": "https://dev.to/launchdarkly/beyond-n8n-for-workflow-automation-agent-graphs-as-your-universal-agent-harness-4lic",
      "tags": "agents, ai, aiops, architecture",
      "reactions": 6,
      "comments": 0,
      "reading_time": 14,
      "author": "sattensil888"
    },
    {
      "title": "The software industry is ready to grow",
      "description": "I don't spend a lot of time on the X these days, but I think this perspective is worth...",
      "url": "https://dev.to/ben/the-software-industry-is-ready-to-grow-4ie4",
      "tags": "ai, career, agents",
      "reactions": 14,
      "comments": 4,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "AI Crash Course: Hallucinations",
      "description": "While we can’t eliminate hallucinations entirely, there are still things we can do to reduce the chances of hallucinations showing up in our model’s responses.",
      "url": "https://dev.to/kathryngrayson/ai-crash-course-hallucinations-1jeg",
      "tags": "ai, beginners",
      "reactions": 9,
      "comments": 1,
      "reading_time": 6,
      "author": "kathryngrayson"
    },
    {
      "title": "AI Assistance vs AI Agents: Understanding the Shift from Responses to Autonomous Systems",
      "description": "👋 Hey there, tech enthusiasts!   I'm Sarvar, a Cloud Architect with a passion for transforming...",
      "url": "https://dev.to/aws-builders/ai-assistance-vs-ai-agents-understanding-the-shift-from-responses-to-autonomous-systems-pb3",
      "tags": "ai, aws, discuss, agents",
      "reactions": 11,
      "comments": 4,
      "reading_time": 15,
      "author": "sarvar_04"
    },
    {
      "title": "What the Agent Era Really Lacks Is Not a Bigger Model, but a Data Relationship Intelligence Layer",
      "description": "Over the past year, I’ve spent a lot of time building with agents.  Like many engineers, I started...",
      "url": "https://dev.to/hello_arisyn_0dc948aa82b3/what-the-agent-era-really-lacks-is-not-a-bigger-model-but-a-data-relationship-intelligence-layer-5e1e",
      "tags": "agents, ai, architecture, data",
      "reactions": 5,
      "comments": 0,
      "reading_time": 4,
      "author": "hello_arisyn_0dc948aa82b3"
    },
    {
      "title": "What Memory Benchmarks Don't Test",
      "description": "Every comparison of AI memory systems ranks on retrieval accuracy. None rank on what happens when the...",
      "url": "https://dev.to/esteyang/what-memory-benchmarks-dont-test-h9c",
      "tags": "ai, agents, llm, memory",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "esteyang"
    },
    {
      "title": "Overnight CLI: Train Claude Code on Your Own Chat History to Work While You Sleep",
      "description": "Overnight is a new open-source CLI that analyzes your Claude Code conversations to build a personal coding profile, then predicts and executes your ne",
      "url": "https://dev.to/gentic_news/overnight-cli-train-claude-code-on-your-own-chat-history-to-work-while-you-sleep-2k4b",
      "tags": "ai, programming, tech, product",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "gentic_news"
    },
    {
      "title": "Agents in 60 lines of python : Part 8",
      "description": "How AI Agents Plan Their Own Work — Self-Scheduling in Python   Lesson 8 of 9 — A Tour of...",
      "url": "https://dev.to/ahd_1337/agents-in-60-lines-of-python-part-8-jge",
      "tags": "ai, python",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "ahd_1337"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "driesdep",
      "descendants": 149,
      "id": 47523330,
      "kids": [
        47525493,
        47524415,
        47524069,
        47524558,
        47523953,
        47527232,
        47525841,
        47525034,
        47524669,
        47526196,
        47524753,
        47524722,
        47526623,
        47524927,
        47524711,
        47524833,
        47524601,
        47524015,
        47524111,
        47524401,
        47525403,
        47524440,
        47525173,
        47525384,
        47524608,
        47524133,
        47525653,
        47523887,
        47525690,
        47524032,
        47527282,
        47525757,
        47525217,
        47525320
      ],
      "score": 526,
      "time": 1774473117,
      "title": "Running Tesla Model 3's computer on my desk using parts from crashed cars",
      "type": "story",
      "url": "https://bugs.xdavidhu.me/tesla/2026/03/23/running-tesla-model-3s-computer-on-my-desk-using-parts-from-crashed-cars/"
    },
    {
      "by": "lairv",
      "descendants": 217,
      "id": 47521150,
      "kids": [
        47522597,
        47522623,
        47524668,
        47525778,
        47522415,
        47523062,
        47526684,
        47526791,
        47524291,
        47523463,
        47523704,
        47522389,
        47526309,
        47523017,
        47522706,
        47522580,
        47524950,
        47522765,
        47526561,
        47522855,
        47522680,
        47524970,
        47525595,
        47523065,
        47524805,
        47524005,
        47524766,
        47522480,
        47522556,
        47522518,
        47525654,
        47523611,
        47523960,
        47522563,
        47523505,
        47522429,
        47521307,
        47522423,
        47523782,
        47526198,
        47522305
      ],
      "score": 348,
      "text": "<a href=\"https:&#x2F;&#x2F;arcprize.org&#x2F;media&#x2F;ARC_AGI_3_Technical_Report.pdf\">https:&#x2F;&#x2F;arcprize.org&#x2F;media&#x2F;ARC_AGI_3_Technical_Report.pdf</a>",
      "time": 1774462563,
      "title": "ARC-AGI-3",
      "type": "story",
      "url": "https://arcprize.org/arc-agi/3"
    },
    {
      "by": "wallflower",
      "descendants": 193,
      "id": 47477873,
      "kids": [
        47520340,
        47517383,
        47517161,
        47517180,
        47517279,
        47526985,
        47523251,
        47517133,
        47519017,
        47520499,
        47520283,
        47521219,
        47519711,
        47526846,
        47517284,
        47517907,
        47519035,
        47518740,
        47521469,
        47498304,
        47518075,
        47519572,
        47517811,
        47519545,
        47521535,
        47517309,
        47519110,
        47517459,
        47516960,
        47489777,
        47517282
      ],
      "score": 810,
      "time": 1774189686,
      "title": "My astrophotography in the movie Project Hail Mary",
      "type": "story",
      "url": "https://rpastro.square.site/s/stories/phm"
    },
    {
      "by": "Brajeshwar",
      "descendants": 59,
      "id": 47517606,
      "kids": [
        47526801,
        47524287,
        47526139,
        47520045,
        47523980,
        47523834,
        47525051,
        47526007,
        47525297,
        47517898,
        47524116,
        47523897
      ],
      "score": 146,
      "text": "<a href=\"https:&#x2F;&#x2F;www.science.org&#x2F;doi&#x2F;10.1126&#x2F;science.aec0970\" rel=\"nofollow\">https:&#x2F;&#x2F;www.science.org&#x2F;doi&#x2F;10.1126&#x2F;science.aec0970</a>",
      "time": 1774447924,
      "title": "Earthquake scientists reveal how overplowing weakens soil at experimental farm",
      "type": "story",
      "url": "https://www.washington.edu/news/2026/03/19/earthquake-scientists-reveal-how-overplowing-weakens-soil-at-experimental-farm/"
    },
    {
      "by": "hmpc",
      "descendants": 4,
      "id": 47478599,
      "kids": [
        47527068,
        47526651,
        47527214
      ],
      "score": 57,
      "time": 1774193684,
      "title": "Two studies in compiler optimisations",
      "type": "story",
      "url": "https://www.hmpcabral.com/2026/03/20/two-studies-in-compiler-optimisations/"
    },
    {
      "by": "qsi",
      "descendants": 83,
      "id": 47525378,
      "kids": [
        47527281,
        47527197,
        47527246,
        47527099,
        47526702,
        47526687,
        47526533,
        47526463,
        47526009,
        47527063,
        47525717,
        47526327,
        47526484,
        47525974,
        47526111,
        47525533,
        47525814,
        47526240,
        47526728,
        47525943,
        47525960
      ],
      "score": 235,
      "time": 1774485991,
      "title": "False claims in a widely-cited paper",
      "type": "story",
      "url": "https://statmodeling.stat.columbia.edu/2026/03/24/false-claims-in-a-published-no-corrections-no-consequences-welcome-to-the-business-school/"
    },
    {
      "by": "sznio",
      "descendants": 37,
      "id": 47483286,
      "kids": [
        47525745,
        47527042,
        47524321,
        47526180,
        47525041,
        47524954,
        47527177,
        47524396,
        47487745,
        47525528,
        47483301,
        47525463,
        47525905,
        47524664,
        47525857,
        47526038
      ],
      "score": 112,
      "time": 1774220817,
      "title": "My DIY FPGA board can run Quake II",
      "type": "story",
      "url": "https://blog.mikhe.ch/quake2-on-fpga/part4.html"
    },
    {
      "by": "MrBruh",
      "descendants": 250,
      "id": 47522709,
      "kids": [
        47523220,
        47527293,
        47522862,
        47523013,
        47522940,
        47523829,
        47526972,
        47522786,
        47526625,
        47522837,
        47524377,
        47527059,
        47523039,
        47526612,
        47524716,
        47522710,
        47523201,
        47524043,
        47524938,
        47523152,
        47525490,
        47523532,
        47522999,
        47522952,
        47522865,
        47526093,
        47522921,
        47523471,
        47523649,
        47525270,
        47525367,
        47525143,
        47525073,
        47524477,
        47525955,
        47523155,
        47523364,
        47523396,
        47523930,
        47522754,
        47522968,
        47523647,
        47523874,
        47526957,
        47525028
      ],
      "score": 927,
      "time": 1774470423,
      "title": "The EU still wants to scan  your private messages and photos",
      "type": "story",
      "url": "https://fightchatcontrol.eu/?foo=bar"
    },
    {
      "by": "louiereederson",
      "descendants": 146,
      "id": 47521157,
      "kids": [
        47522974,
        47523456,
        47522858,
        47525140,
        47523261,
        47523414,
        47527138,
        47524609,
        47522840,
        47525215,
        47525838,
        47526917,
        47522807,
        47524000,
        47523926,
        47523035,
        47527131,
        47525985,
        47523144,
        47523238,
        47524010,
        47526782,
        47525228,
        47525834,
        47523798,
        47524033,
        47523295,
        47522691,
        47524701,
        47523030,
        47525543,
        47525692,
        47524240,
        47524405,
        47524526,
        47526445,
        47525818,
        47523712,
        47522895,
        47523617,
        47524298,
        47522925,
        47527182,
        47525567,
        47524672,
        47525844,
        47523924,
        47526340,
        47522927,
        47523752,
        47523134,
        47521158
      ],
      "score": 241,
      "time": 1774462600,
      "title": "90% of Claude-linked output going to GitHub repos w <2 stars",
      "type": "story",
      "url": "https://www.claudescode.dev/?window=since_launch"
    },
    {
      "by": "c420",
      "descendants": 24,
      "id": 47473673,
      "kids": [
        47526630,
        47526926,
        47526902,
        47526775,
        47476308,
        47526966,
        47526540,
        47527057,
        47526699,
        47474958,
        47526518
      ],
      "score": 62,
      "time": 1774144703,
      "title": "The truth that haunts the Ramones: 'They sold more T-shirts than records'",
      "type": "story",
      "url": "https://english.elpais.com/culture/2026-03-17/the-uncomfortable-truth-that-will-always-haunt-the-ramones-they-sold-more-t-shirts-than-records.html"
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
      "by": "driesdep",
      "descendants": 149,
      "id": 47523330,
      "kids": [
        47525493,
        47524415,
        47524069,
        47524558,
        47523953,
        47527232,
        47525841,
        47525034,
        47524669,
        47526196,
        47524753,
        47524722,
        47526623,
        47524927,
        47524711,
        47524833,
        47524601,
        47524015,
        47524111,
        47524401,
        47525403,
        47524440,
        47525173,
        47525384,
        47524608,
        47524133,
        47525653,
        47523887,
        47525690,
        47524032,
        47527282,
        47525757,
        47525217,
        47525320
      ],
      "score": 526,
      "time": 1774473117,
      "title": "Running Tesla Model 3's computer on my desk using parts from crashed cars",
      "type": "story",
      "url": "https://bugs.xdavidhu.me/tesla/2026/03/23/running-tesla-model-3s-computer-on-my-desk-using-parts-from-crashed-cars/"
    },
    {
      "by": "lairv",
      "descendants": 217,
      "id": 47521150,
      "kids": [
        47522597,
        47522623,
        47524668,
        47525778,
        47522415,
        47523062,
        47526684,
        47526791,
        47524291,
        47523463,
        47523704,
        47522389,
        47526309,
        47523017,
        47522706,
        47522580,
        47524950,
        47522765,
        47526561,
        47522855,
        47522680,
        47524970,
        47525595,
        47523065,
        47524805,
        47524005,
        47524766,
        47522480,
        47522556,
        47522518,
        47525654,
        47523611,
        47523960,
        47522563,
        47523505,
        47522429,
        47521307,
        47522423,
        47523782,
        47526198,
        47522305
      ],
      "score": 348,
      "text": "<a href=\"https:&#x2F;&#x2F;arcprize.org&#x2F;media&#x2F;ARC_AGI_3_Technical_Report.pdf\">https:&#x2F;&#x2F;arcprize.org&#x2F;media&#x2F;ARC_AGI_3_Technical_Report.pdf</a>",
      "time": 1774462563,
      "title": "ARC-AGI-3",
      "type": "story",
      "url": "https://arcprize.org/arc-agi/3"
    },
    {
      "by": "wallflower",
      "descendants": 193,
      "id": 47477873,
      "kids": [
        47520340,
        47517383,
        47517161,
        47517180,
        47517279,
        47526985,
        47523251,
        47517133,
        47519017,
        47520499,
        47520283,
        47521219,
        47519711,
        47526846,
        47517284,
        47517907,
        47519035,
        47518740,
        47521469,
        47498304,
        47518075,
        47519572,
        47517811,
        47519545,
        47521535,
        47517309,
        47519110,
        47517459,
        47516960,
        47489777,
        47517282
      ],
      "score": 810,
      "time": 1774189686,
      "title": "My astrophotography in the movie Project Hail Mary",
      "type": "story",
      "url": "https://rpastro.square.site/s/stories/phm"
    },
    {
      "by": "Brajeshwar",
      "descendants": 59,
      "id": 47517606,
      "kids": [
        47526801,
        47524287,
        47526139,
        47520045,
        47523980,
        47523834,
        47525051,
        47526007,
        47525297,
        47517898,
        47524116,
        47523897
      ],
      "score": 146,
      "text": "<a href=\"https:&#x2F;&#x2F;www.science.org&#x2F;doi&#x2F;10.1126&#x2F;science.aec0970\" rel=\"nofollow\">https:&#x2F;&#x2F;www.science.org&#x2F;doi&#x2F;10.1126&#x2F;science.aec0970</a>",
      "time": 1774447924,
      "title": "Earthquake scientists reveal how overplowing weakens soil at experimental farm",
      "type": "story",
      "url": "https://www.washington.edu/news/2026/03/19/earthquake-scientists-reveal-how-overplowing-weakens-soil-at-experimental-farm/"
    },
    {
      "by": "hmpc",
      "descendants": 4,
      "id": 47478599,
      "kids": [
        47527068,
        47526651,
        47527214
      ],
      "score": 57,
      "time": 1774193684,
      "title": "Two studies in compiler optimisations",
      "type": "story",
      "url": "https://www.hmpcabral.com/2026/03/20/two-studies-in-compiler-optimisations/"
    },
    {
      "by": "qsi",
      "descendants": 83,
      "id": 47525378,
      "kids": [
        47527281,
        47527197,
        47527246,
        47527099,
        47526702,
        47526687,
        47526533,
        47526463,
        47526009,
        47527063,
        47525717,
        47526327,
        47526484,
        47525974,
        47526111,
        47525533,
        47525814,
        47526240,
        47526728,
        47525943,
        47525960
      ],
      "score": 235,
      "time": 1774485991,
      "title": "False claims in a widely-cited paper",
      "type": "story",
      "url": "https://statmodeling.stat.columbia.edu/2026/03/24/false-claims-in-a-published-no-corrections-no-consequences-welcome-to-the-business-school/"
    },
    {
      "by": "sznio",
      "descendants": 37,
      "id": 47483286,
      "kids": [
        47525745,
        47527042,
        47524321,
        47526180,
        47525041,
        47524954,
        47527177,
        47524396,
        47487745,
        47525528,
        47483301,
        47525463,
        47525905,
        47524664,
        47525857,
        47526038
      ],
      "score": 112,
      "time": 1774220817,
      "title": "My DIY FPGA board can run Quake II",
      "type": "story",
      "url": "https://blog.mikhe.ch/quake2-on-fpga/part4.html"
    },
    {
      "by": "MrBruh",
      "descendants": 250,
      "id": 47522709,
      "kids": [
        47523220,
        47527293,
        47522862,
        47523013,
        47522940,
        47523829,
        47526972,
        47522786,
        47526625,
        47522837,
        47524377,
        47527059,
        47523039,
        47526612,
        47524716,
        47522710,
        47523201,
        47524043,
        47524938,
        47523152,
        47525490,
        47523532,
        47522999,
        47522952,
        47522865,
        47526093,
        47522921,
        47523471,
        47523649,
        47525270,
        47525367,
        47525143,
        47525073,
        47524477,
        47525955,
        47523155,
        47523364,
        47523396,
        47523930,
        47522754,
        47522968,
        47523647,
        47523874,
        47526957,
        47525028
      ],
      "score": 927,
      "time": 1774470423,
      "title": "The EU still wants to scan  your private messages and photos",
      "type": "story",
      "url": "https://fightchatcontrol.eu/?foo=bar"
    },
    {
      "by": "louiereederson",
      "descendants": 146,
      "id": 47521157,
      "kids": [
        47522974,
        47523456,
        47522858,
        47525140,
        47523261,
        47523414,
        47527138,
        47524609,
        47522840,
        47525215,
        47525838,
        47526917,
        47522807,
        47524000,
        47523926,
        47523035,
        47527131,
        47525985,
        47523144,
        47523238,
        47524010,
        47526782,
        47525228,
        47525834,
        47523798,
        47524033,
        47523295,
        47522691,
        47524701,
        47523030,
        47525543,
        47525692,
        47524240,
        47524405,
        47524526,
        47526445,
        47525818,
        47523712,
        47522895,
        47523617,
        47524298,
        47522925,
        47527182,
        47525567,
        47524672,
        47525844,
        47523924,
        47526340,
        47522927,
        47523752,
        47523134,
        47521158
      ],
      "score": 241,
      "time": 1774462600,
      "title": "90% of Claude-linked output going to GitHub repos w <2 stars",
      "type": "story",
      "url": "https://www.claudescode.dev/?window=since_launch"
    },
    {
      "by": "c420",
      "descendants": 24,
      "id": 47473673,
      "kids": [
        47526630,
        47526926,
        47526902,
        47526775,
        47476308,
        47526966,
        47526540,
        47527057,
        47526699,
        47474958,
        47526518
      ],
      "score": 62,
      "time": 1774144703,
      "title": "The truth that haunts the Ramones: 'They sold more T-shirts than records'",
      "type": "story",
      "url": "https://english.elpais.com/culture/2026-03-17/the-uncomfortable-truth-that-will-always-haunt-the-ramones-they-sold-more-t-shirts-than-records.html"
    },
    {
      "by": "oj2828",
      "descendants": 254,
      "id": 47518281,
      "kids": [
        47520527,
        47520993,
        47518733,
        47519741,
        47519639,
        47518554,
        47521213,
        47520266,
        47521021,
        47521750,
        47518444,
        47518564,
        47520522,
        47519840,
        47526257,
        47521509,
        47518780,
        47523060,
        47519090,
        47518826,
        47519451,
        47526160,
        47522225,
        47519140,
        47521424,
        47519016,
        47520461,
        47520006,
        47518330,
        47518987,
        47521096,
        47519394,
        47519826
      ],
      "score": 326,
      "text": "<a href=\"https:&#x2F;&#x2F;archive.is&#x2F;mEgaK\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.is&#x2F;mEgaK</a><p><a href=\"https:&#x2F;&#x2F;www.supremecourt.gov&#x2F;opinions&#x2F;25pdf&#x2F;24-171_bq7d.pdf\" rel=\"nofollow\">https:&#x2F;&#x2F;www.supremecourt.gov&#x2F;opinions&#x2F;25pdf&#x2F;24-171_bq7d.pdf</a><p><a href=\"https:&#x2F;&#x2F;supreme.justia.com&#x2F;cases&#x2F;federal&#x2F;us&#x2F;607&#x2F;24-171&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;supreme.justia.com&#x2F;cases&#x2F;federal&#x2F;us&#x2F;607&#x2F;24-171&#x2F;</a>",
      "time": 1774450976,
      "title": "Supreme Court Sides with Cox in Copyright Fight over Pirated Music",
      "type": "story",
      "url": "https://www.nytimes.com/2026/03/25/us/politics/supreme-court-cox-music-copyright.html"
    },
    {
      "by": "karussell",
      "descendants": 0,
      "id": 47491848,
      "score": 13,
      "time": 1774283993,
      "title": "More precise elevation data for GraphHopper routing engine",
      "type": "story",
      "url": "https://www.graphhopper.com/blog/2026/03/23/more-precise-elevation-data-for-graphhopper/"
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
      "title": "Mojo's not (yet) Python",
      "url": "https://theconsensus.dev/p/2026/03/12/mojos-not-yet-python.html",
      "score": 41,
      "comments": 18,
      "tags": [
        "plt",
        "python"
      ],
      "id": "tntlde"
    },
    {
      "title": "vim-classic: Long-term maintenance of Vim 8.x",
      "url": "https://sr.ht/~sircmpwn/vim-classic/",
      "score": 31,
      "comments": 6,
      "tags": [
        "release",
        "vim"
      ],
      "id": "iqctrn"
    },
    {
      "title": "Which Design Doc Did a Human Write?",
      "url": "https://refactoringenglish.com/blog/ai-vs-human-design-doc/",
      "score": 15,
      "comments": 8,
      "tags": [
        "programming",
        "vibecoding"
      ],
      "id": "yeoe5q"
    },
    {
      "title": "Thoughts on slowing the fuck down",
      "url": "https://mariozechner.at/posts/2026-03-25-thoughts-on-slowing-the-fuck-down/",
      "score": 42,
      "comments": 9,
      "tags": [
        "vibecoding"
      ],
      "id": "4i8uad"
    },
    {
      "title": "Shell Tricks That Actually Make Life Easier (And Save Your Sanity)",
      "url": "https://blog.hofstede.it/shell-tricks-that-actually-make-life-easier-and-save-your-sanity/",
      "score": 21,
      "comments": 4,
      "tags": [
        "unix"
      ],
      "id": "xpx9vi"
    },
    {
      "title": "\"Disregard that!\" attacks",
      "url": "https://calpaterson.com/disregard.html",
      "score": 20,
      "comments": 10,
      "tags": [
        "security",
        "vibecoding"
      ],
      "id": "ocrjck"
    },
    {
      "title": "VitruvianOS",
      "url": "https://v-os.dev/",
      "score": 43,
      "comments": 27,
      "tags": [
        "linux"
      ],
      "id": "xv13en"
    },
    {
      "title": "Magic Link Pitfalls",
      "url": "https://etodd.io/2026/03/22/magic-link-pitfalls/",
      "score": 61,
      "comments": 65,
      "tags": [
        "browsers",
        "email",
        "security"
      ],
      "id": "lzxb0m"
    },
    {
      "title": "Updates to GitHub Copilot interaction data usage policy",
      "url": "https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/",
      "score": 14,
      "comments": 5,
      "tags": [
        "vibecoding"
      ],
      "id": "urwusf"
    },
    {
      "title": "Electric Motorcycles are a Security Nightmare",
      "url": "https://persephonekarnstein.github.io/post/zero-days/",
      "score": 10,
      "comments": 2,
      "tags": [
        "reversing",
        "security"
      ],
      "id": "vyixek"
    }
  ]
}
```

