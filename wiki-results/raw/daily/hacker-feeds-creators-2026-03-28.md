# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-28 06:35:40 UTC

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
      "title": "The Next DEV Weekend Challenge Launches on April 16 - 20. Mark Your Calendar!",
      "description": "We're back with another installment of our newest format: the DEV Weekend Challenge!   If you missed...",
      "url": "https://dev.to/devteam/the-next-dev-weekend-challenge-launches-on-april-16-20-mark-your-calendar-5pd",
      "tags": "weekendchallenge, devchallenge, hackathon, programming",
      "reactions": 15,
      "comments": 1,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "I'm so sick of my editor telling me how great I am. Not that I'm not great.",
      "description": "A post by Ben Halpern",
      "url": "https://dev.to/ben/im-so-sick-of-my-editor-telling-me-how-great-i-am-not-that-im-not-great-2oam",
      "tags": "",
      "reactions": 4,
      "comments": 2,
      "reading_time": 0,
      "author": "ben"
    },
    {
      "title": "Speed vs smarts for coding agents?",
      "description": "I'm curious if you specifically have a sense of where you draw the line in terms of your interest in...",
      "url": "https://dev.to/ben/speed-vs-smarts-for-coding-agents-3h",
      "tags": "agents, ai, productivity, discuss",
      "reactions": 33,
      "comments": 16,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Auth0 MCP Server Extension for Gemini CLI",
      "description": "The Auth0 MCP Server is now listed on the official Gemini CLI extensions page. This means the Auth0...",
      "url": "https://dev.to/auth0/auth0-mcp-server-extension-for-gemini-cli-405m",
      "tags": "ai, mcp, tutorial, tooling",
      "reactions": 7,
      "comments": 0,
      "reading_time": 3,
      "author": "jesstemporal"
    },
    {
      "title": "your agent can think. it can't remember.",
      "description": "TLDR: ghost gives your agent instant, ephemeral postgres databases. unlimited databases, unlimited...",
      "url": "https://dev.to/ghostbuild/your-agent-can-think-it-cant-remember-5e1o",
      "tags": "ai, mcp, postgres, agents",
      "reactions": 145,
      "comments": 35,
      "reading_time": 7,
      "author": "ghostdotbuild"
    },
    {
      "title": "Ghost Maintainer — An AI Junior Partner for Open Source",
      "description": "This is a submission for the Notion MCP Challenge           What I Built   I maintain a few open...",
      "url": "https://dev.to/sbis04/ghost-maintainer-an-ai-junior-partner-for-open-source-11l0",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 24,
      "comments": 3,
      "reading_time": 3,
      "author": "sbis04"
    },
    {
      "title": "This is Cloud Run: Configuration",
      "description": "This is Part 3 of the \"This is Cloud Run\" series. In Part 1, we covered what Cloud Run is and when to...",
      "url": "https://dev.to/gde/this-is-cloud-run-configuration-2gi2",
      "tags": "devops, gcp, cloudrun, serverless",
      "reactions": 4,
      "comments": 0,
      "reading_time": 12,
      "author": "kulaone"
    },
    {
      "title": "Check Up with Each Other",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience     Over the last year, It...",
      "url": "https://dev.to/francistrdev/check-up-with-each-other-2ogc",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 57,
      "comments": 23,
      "reading_time": 4,
      "author": "francistrdev"
    },
    {
      "title": "Building a Error Library",
      "description": "Error handling is one of those things that quietly shapes the entire experience of a system. When it...",
      "url": "https://dev.to/fafhrd91/building-a-error-library-3kda",
      "tags": "rust",
      "reactions": 28,
      "comments": 0,
      "reading_time": 6,
      "author": "fafhrd91"
    },
    {
      "title": "AI Writes Daily Without My Involvement",
      "description": "A naive dive into a multi-agent system with self-critique, diversity-aware curation, and weekly self-reflection to cover local cultural events",
      "url": "https://dev.to/maksugr/ai-writes-daily-without-my-involvement-4jfc",
      "tags": "ai, claude, llm, agents",
      "reactions": 3,
      "comments": 0,
      "reading_time": 16,
      "author": "maksugr"
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
      "forks": 14723,
      "added_stars": 22361,
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
      "author": "jarrodwatts",
      "repo": "claude-hud",
      "avatar": "https://github.com/jarrodwatts.png",
      "repo_link": "https://github.com/jarrodwatts/claude-hud",
      "desc": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 587,
      "added_stars": 5080,
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
      "author": "figma",
      "repo": "mcp-server-guide",
      "avatar": "https://github.com/figma.png",
      "repo_link": "https://github.com/figma/mcp-server-guide",
      "desc": "A guide on how to use the Figma MCP server",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 55,
      "added_stars": 258,
      "builtBy": [
        {
          "username": "ebentley-figma",
          "href": "https://github.com/ebentley-figma",
          "avatar": "https://avatars.githubusercontent.com/u/111350777"
        },
        {
          "username": "mwilliams-figma",
          "href": "https://github.com/mwilliams-figma",
          "avatar": "https://avatars.githubusercontent.com/u/126205200"
        },
        {
          "username": "dwong-figma",
          "href": "https://github.com/dwong-figma",
          "avatar": "https://avatars.githubusercontent.com/u/234063059"
        },
        {
          "username": "jesselumarie",
          "href": "https://github.com/jesselumarie",
          "avatar": "https://avatars.githubusercontent.com/u/4467473"
        },
        {
          "username": "rbhalla-figma",
          "href": "https://github.com/rbhalla-figma",
          "avatar": "https://avatars.githubusercontent.com/u/127770926"
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
      "forks": 607,
      "added_stars": 2875,
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
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3500,
      "added_stars": 6428,
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
      "forks": 2555,
      "added_stars": 2016,
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
      "author": "simple-icons",
      "repo": "simple-icons",
      "avatar": "https://github.com/simple-icons.png",
      "repo_link": "https://github.com/simple-icons/simple-icons",
      "desc": "SVG icons for popular brands",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3087,
      "added_stars": 109,
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
      "forks": 1213,
      "added_stars": 54,
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
      "author": "levnikolaevich",
      "repo": "claude-code-skills",
      "avatar": "https://github.com/levnikolaevich.png",
      "repo_link": "https://github.com/levnikolaevich/claude-code-skills",
      "desc": "Plugin suite + bundled MCP servers for Claude Code. Full delivery lifecycle: Agile pipeline with multi-model AI review, project bootstrap, documentation generation, codebase audits, performance optimization, community workflows. Includes hex-line (hash-verified editing), hex-graph (code knowledge graph), and hex-ssh (remote SSH) MCP servers.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 45,
      "added_stars": 40,
      "builtBy": [
        {
          "username": "levnikolaevich",
          "href": "https://github.com/levnikolaevich",
          "avatar": "https://avatars.githubusercontent.com/u/66056575"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "allenthinkingabu-hub",
          "href": "https://github.com/allenthinkingabu-hub",
          "avatar": "https://avatars.githubusercontent.com/u/235762877"
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
      "forks": 1252,
      "added_stars": 111,
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
      "author": "eyaltoledano",
      "repo": "claude-task-master",
      "avatar": "https://github.com/eyaltoledano.png",
      "repo_link": "https://github.com/eyaltoledano/claude-task-master",
      "desc": "An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf, Roo, and others.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2463,
      "added_stars": 247,
      "builtBy": [
        {
          "username": "Crunchyman-ralph",
          "href": "https://github.com/Crunchyman-ralph",
          "avatar": "https://avatars.githubusercontent.com/u/35776126"
        },
        {
          "username": "eyaltoledano",
          "href": "https://github.com/eyaltoledano",
          "avatar": "https://avatars.githubusercontent.com/u/3160046"
        },
        {
          "username": "joedanz",
          "href": "https://github.com/joedanz",
          "avatar": "https://avatars.githubusercontent.com/u/1423777"
        },
        {
          "username": "ben-vargas",
          "href": "https://github.com/ben-vargas",
          "avatar": "https://avatars.githubusercontent.com/u/20713656"
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
      "forks": 245,
      "added_stars": 48,
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
      "title": "Speed vs smarts for coding agents?",
      "description": "I'm curious if you specifically have a sense of where you draw the line in terms of your interest in...",
      "url": "https://dev.to/ben/speed-vs-smarts-for-coding-agents-3h",
      "tags": "agents, ai, productivity, discuss",
      "reactions": 33,
      "comments": 16,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Auth0 MCP Server Extension for Gemini CLI",
      "description": "The Auth0 MCP Server is now listed on the official Gemini CLI extensions page. This means the Auth0...",
      "url": "https://dev.to/auth0/auth0-mcp-server-extension-for-gemini-cli-405m",
      "tags": "ai, mcp, tutorial, tooling",
      "reactions": 7,
      "comments": 0,
      "reading_time": 3,
      "author": "jesstemporal"
    },
    {
      "title": "I Built an MCP That Publishes Your Blog to Every Platform With One Sentence to Claude",
      "description": "This is a submission for the Notion MCP Challenge              What I Built   Every developer I know...",
      "url": "https://dev.to/thecodedaniel/i-built-an-mcp-that-publishes-your-blog-to-every-platform-with-one-sentence-to-claude-26li",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 4,
      "comments": 0,
      "reading_time": 3,
      "author": "thecodedaniel"
    },
    {
      "title": "Turning Weekly GitHub Activity Into Blog Posts on Notion + DEV.to",
      "description": "This is a submission for the Notion MCP Challenge           What I Built   Every Monday standup,...",
      "url": "https://dev.to/yashksaini/i-built-a-3-agent-pipeline-that-turns-my-github-activity-into-weekly-blog-posts-on-notion-devto-1ndn",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 40,
      "comments": 3,
      "reading_time": 7,
      "author": "yashksaini"
    },
    {
      "title": "The .workbuddy/ Folder Is My Brain. Here's What's Inside.",
      "description": "Today, a post called \"Anatomy of the .claude/ folder\" hit #1 on Hacker News with 317 points. People...",
      "url": "https://dev.to/mindon/the-workbuddy-folder-is-my-brain-heres-whats-inside-jlc",
      "tags": "ai, productivity, programming, devtools",
      "reactions": 3,
      "comments": 1,
      "reading_time": 5,
      "author": "mindon"
    },
    {
      "title": "Building an AI Social Media Autopilot — The Technical Decisions That Actually Matter",
      "description": "I’ve spent the past year building Do Not Eat, an AI platform that generates, publishes, and manages...",
      "url": "https://dev.to/donot_eat_ffa468446e53242/building-an-ai-social-media-autopilot-the-technical-decisions-that-actually-matter-3604",
      "tags": "ai, socialmedia, automation, startup",
      "reactions": 2,
      "comments": 0,
      "reading_time": 4,
      "author": "donot_eat_ffa468446e53242"
    },
    {
      "title": "Ghost Maintainer — An AI Junior Partner for Open Source",
      "description": "This is a submission for the Notion MCP Challenge           What I Built   I maintain a few open...",
      "url": "https://dev.to/sbis04/ghost-maintainer-an-ai-junior-partner-for-open-source-11l0",
      "tags": "devchallenge, notionchallenge, mcp, ai",
      "reactions": 28,
      "comments": 3,
      "reading_time": 3,
      "author": "sbis04"
    },
    {
      "title": "your agent can think. it can't remember.",
      "description": "TLDR: ghost gives your agent instant, ephemeral postgres databases. unlimited databases, unlimited...",
      "url": "https://dev.to/ghostbuild/your-agent-can-think-it-cant-remember-5e1o",
      "tags": "ai, mcp, postgres, agents",
      "reactions": 145,
      "comments": 35,
      "reading_time": 7,
      "author": "ghostdotbuild"
    },
    {
      "title": "Learn the Hard Way First: Why New Developers Should Build Skills Before Leaning on AI",
      "description": "Welcome to your first job, freshers. You've probably already used ChatGPT or Copilot to get through...",
      "url": "https://dev.to/rickcogley/learn-the-hard-way-first-why-new-developers-should-build-skills-before-leaning-on-ai-ibk",
      "tags": "beginners, career, ai, programming",
      "reactions": 1,
      "comments": 1,
      "reading_time": 3,
      "author": "rickcogley"
    },
    {
      "title": "Building Reliable Agents with the Transactional Outbox Pattern and Redis Streams",
      "description": "AI agents are pretty good at deciding what should happen next, given a well-defined business...",
      "url": "https://dev.to/redis/building-reliable-agents-with-the-transactional-outbox-pattern-and-redis-streams-45e6",
      "tags": "agents, redis, ai, eventdriven",
      "reactions": 17,
      "comments": 7,
      "reading_time": 12,
      "author": "riferrei"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "mazieres",
      "descendants": 125,
      "id": 47550282,
      "kids": [
        47550688,
        47552155,
        47551658,
        47551630,
        47551133,
        47551973,
        47550575,
        47552081,
        47551959,
        47550799,
        47551147,
        47550686,
        47551208,
        47550637,
        47551119,
        47550283,
        47551261,
        47550859,
        47550796,
        47551393,
        47551764,
        47550774,
        47550691,
        47551731,
        47551076,
        47551302,
        47551503,
        47551686,
        47550800,
        47551197,
        47551821,
        47550909,
        47550642,
        47551705,
        47551867,
        47551185,
        47550981,
        47550908,
        47550725,
        47552021,
        47550607,
        47551303
      ],
      "score": 219,
      "time": 1774658394,
      "title": "Go hard on agents, not on your filesystem",
      "type": "story",
      "url": "https://jai.scs.stanford.edu/"
    },
    {
      "by": "zdw",
      "descendants": 50,
      "id": 47550878,
      "kids": [
        47551594,
        47551326,
        47551723,
        47551728,
        47551241,
        47551509,
        47551621,
        47551976,
        47551793,
        47551390,
        47551367
      ],
      "score": 105,
      "time": 1774664224,
      "title": "AMD's Ryzen 9 9950X3D2 Dual Edition crams 208MB of cache into a single chip",
      "type": "story",
      "url": "https://arstechnica.com/gadgets/2026/03/amds-ryzen-9-9950x3d2-dual-edition-crams-208mb-of-cache-into-a-single-chip/"
    },
    {
      "by": "speckx",
      "descendants": 246,
      "id": 47547009,
      "kids": [
        47548199,
        47547379,
        47547482,
        47547476,
        47550905,
        47547873,
        47547489,
        47549989,
        47547407,
        47547469,
        47550098,
        47547550,
        47550152,
        47551281,
        47548116,
        47548397,
        47550027,
        47547406,
        47547398,
        47547384,
        47548127,
        47547298,
        47548236,
        47551878,
        47547813,
        47548263,
        47550088,
        47547610,
        47551041,
        47551798,
        47548734,
        47547292,
        47549252,
        47547450,
        47547874,
        47547251,
        47547796
      ],
      "score": 364,
      "time": 1774638919,
      "title": "Make macOS consistently bad unironically",
      "type": "story",
      "url": "https://lr0.org/blog/p/macos/"
    },
    {
      "by": "robotnikman",
      "descendants": 93,
      "id": 47495245,
      "kids": [
        47549873,
        47496747,
        47548713,
        47549724,
        47549900,
        47551981,
        47550917,
        47548928,
        47496886,
        47550166,
        47550110,
        47549223,
        47549665,
        47498550,
        47549337,
        47551126,
        47550272,
        47549500
      ],
      "score": 193,
      "time": 1774300733,
      "title": "LG's new 1Hz display is the secret behind a new laptop's battery life",
      "type": "story",
      "url": "https://www.pcworld.com/article/3096432/lgs-new-1hz-display-is-the-secret-behind-a-new-laptops-battery-life.html"
    },
    {
      "by": "nivethan",
      "descendants": 7,
      "id": 47520599,
      "kids": [
        47552072,
        47551909,
        47552067,
        47551752
      ],
      "score": 41,
      "time": 1774460116,
      "title": "The bee that everyone wants to save",
      "type": "story",
      "url": "https://naturalist.bearblog.dev/the-bee-that-everyone-wants-to-save/"
    },
    {
      "by": "freedomben",
      "descendants": 206,
      "id": 47543139,
      "kids": [
        47546767,
        47543929,
        47546164,
        47548265,
        47544018,
        47545155,
        47552088,
        47545303,
        47546129,
        47546942,
        47544731,
        47543625,
        47548158,
        47547993,
        47544262,
        47547378,
        47544207,
        47543615,
        47544822,
        47544839,
        47546714,
        47543516,
        47544631,
        47550184,
        47547163,
        47548983,
        47545828,
        47548047,
        47547721,
        47543656,
        47543682,
        47544610,
        47545398,
        47544424,
        47544707,
        47549471,
        47543629,
        47545064,
        47544803,
        47552124,
        47544438,
        47551877,
        47551734,
        47550084,
        47551195,
        47551770,
        47551602,
        47548970,
        47547303,
        47548221,
        47547008,
        47547041,
        47549053,
        47545049,
        47545070,
        47546822,
        47546112,
        47547369,
        47544533,
        47543573,
        47546698,
        47550455,
        47544773
      ],
      "score": 443,
      "time": 1774622145,
      "title": "Anatomy of the .claude/ folder",
      "type": "story",
      "url": "https://blog.dailydoseofds.com/p/anatomy-of-the-claude-folder"
    },
    {
      "by": "toomuchtodo",
      "descendants": 33,
      "id": 47498571,
      "kids": [
        47548303,
        47550042,
        47551542,
        47550216,
        47547242,
        47548312,
        47550142,
        47548219,
        47548289,
        47549699,
        47547576,
        47547870
      ],
      "score": 137,
      "time": 1774326135,
      "title": "Nashville library launches Memory Lab for digitizing home movies",
      "type": "story",
      "url": "https://www.axios.com/local/nashville/2026/03/16/nashville-library-digitize-home-movies"
    },
    {
      "by": "abadar",
      "descendants": 4,
      "id": 47515783,
      "kids": [
        47552074
      ],
      "score": 18,
      "time": 1774436961,
      "title": ".apks are just .zips; semi-legally hacking software for orphaned hardware [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=P1kfuCkWo24"
    },
    {
      "by": "ellg",
      "descendants": 44,
      "id": 47549160,
      "kids": [
        47550669,
        47550215,
        47551863,
        47550820,
        47550706,
        47550314,
        47550739,
        47551068,
        47549786,
        47551391,
        47549737,
        47550015,
        47551474,
        47550249,
        47550618,
        47551395,
        47549960,
        47549982,
        47551144,
        47552076,
        47550360
      ],
      "score": 94,
      "text": "Hey HN, I re-launched an old site I remembered back in the day that someone made called twitchroulette.net with a lot of new features and stats and I would love for people to check it out. The idea is you can easily browse the less browsed parts of twitch and find cool and new streamers to say hi to, and maybe make some new friends.<p>I also added some real time stats and breakdowns per channel and I think some of the things they show are pretty interesting. Check it out!",
      "time": 1774650140,
      "title": "Show HN: Twitch Roulette – Find live streamers who need views the most",
      "type": "story",
      "url": "https://twitchroulette.net/"
    },
    {
      "by": "dmcrespo",
      "descendants": 41,
      "id": 47548013,
      "kids": [
        47548356,
        47548014,
        47551246,
        47551715,
        47549114,
        47550626,
        47550898,
        47551522,
        47548571,
        47549453,
        47549443,
        47551207,
        47551547,
        47551918,
        47551771,
        47551023,
        47550765
      ],
      "score": 123,
      "time": 1774644273,
      "title": "Velxio 2.0 – Emulate Arduino, ESP32, and Raspberry Pi 3 in the Browser",
      "type": "story",
      "url": "https://github.com/davidmonterocrespo24/velxio"
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
      "by": "mazieres",
      "descendants": 125,
      "id": 47550282,
      "kids": [
        47550688,
        47552155,
        47551658,
        47551630,
        47551133,
        47551973,
        47550575,
        47552081,
        47551959,
        47550799,
        47551147,
        47550686,
        47551208,
        47550637,
        47551119,
        47550283,
        47551261,
        47550859,
        47550796,
        47551393,
        47551764,
        47550774,
        47550691,
        47551731,
        47551076,
        47551302,
        47551503,
        47551686,
        47550800,
        47551197,
        47551821,
        47550909,
        47550642,
        47551705,
        47551867,
        47551185,
        47550981,
        47550908,
        47550725,
        47552021,
        47550607,
        47551303
      ],
      "score": 219,
      "time": 1774658394,
      "title": "Go hard on agents, not on your filesystem",
      "type": "story",
      "url": "https://jai.scs.stanford.edu/"
    },
    {
      "by": "zdw",
      "descendants": 50,
      "id": 47550878,
      "kids": [
        47551594,
        47551326,
        47551723,
        47551728,
        47551241,
        47551509,
        47551621,
        47551976,
        47551793,
        47551390,
        47551367
      ],
      "score": 105,
      "time": 1774664224,
      "title": "AMD's Ryzen 9 9950X3D2 Dual Edition crams 208MB of cache into a single chip",
      "type": "story",
      "url": "https://arstechnica.com/gadgets/2026/03/amds-ryzen-9-9950x3d2-dual-edition-crams-208mb-of-cache-into-a-single-chip/"
    },
    {
      "by": "speckx",
      "descendants": 246,
      "id": 47547009,
      "kids": [
        47548199,
        47547379,
        47547482,
        47547476,
        47550905,
        47547873,
        47547489,
        47549989,
        47547407,
        47547469,
        47550098,
        47547550,
        47550152,
        47551281,
        47548116,
        47548397,
        47550027,
        47547406,
        47547398,
        47547384,
        47548127,
        47547298,
        47548236,
        47551878,
        47547813,
        47548263,
        47550088,
        47547610,
        47551041,
        47551798,
        47548734,
        47547292,
        47549252,
        47547450,
        47547874,
        47547251,
        47547796
      ],
      "score": 364,
      "time": 1774638919,
      "title": "Make macOS consistently bad unironically",
      "type": "story",
      "url": "https://lr0.org/blog/p/macos/"
    },
    {
      "by": "robotnikman",
      "descendants": 93,
      "id": 47495245,
      "kids": [
        47549873,
        47496747,
        47548713,
        47549724,
        47549900,
        47551981,
        47550917,
        47548928,
        47496886,
        47550166,
        47550110,
        47549223,
        47549665,
        47498550,
        47549337,
        47551126,
        47550272,
        47549500
      ],
      "score": 193,
      "time": 1774300733,
      "title": "LG's new 1Hz display is the secret behind a new laptop's battery life",
      "type": "story",
      "url": "https://www.pcworld.com/article/3096432/lgs-new-1hz-display-is-the-secret-behind-a-new-laptops-battery-life.html"
    },
    {
      "by": "nivethan",
      "descendants": 7,
      "id": 47520599,
      "kids": [
        47552072,
        47551909,
        47552067,
        47551752
      ],
      "score": 41,
      "time": 1774460116,
      "title": "The bee that everyone wants to save",
      "type": "story",
      "url": "https://naturalist.bearblog.dev/the-bee-that-everyone-wants-to-save/"
    },
    {
      "by": "freedomben",
      "descendants": 206,
      "id": 47543139,
      "kids": [
        47546767,
        47543929,
        47546164,
        47548265,
        47544018,
        47545155,
        47552088,
        47545303,
        47546129,
        47546942,
        47544731,
        47543625,
        47548158,
        47547993,
        47544262,
        47547378,
        47544207,
        47543615,
        47544822,
        47544839,
        47546714,
        47543516,
        47544631,
        47550184,
        47547163,
        47548983,
        47545828,
        47548047,
        47547721,
        47543656,
        47543682,
        47544610,
        47545398,
        47544424,
        47544707,
        47549471,
        47543629,
        47545064,
        47544803,
        47552124,
        47544438,
        47551877,
        47551734,
        47550084,
        47551195,
        47551770,
        47551602,
        47548970,
        47547303,
        47548221,
        47547008,
        47547041,
        47549053,
        47545049,
        47545070,
        47546822,
        47546112,
        47547369,
        47544533,
        47543573,
        47546698,
        47550455,
        47544773
      ],
      "score": 443,
      "time": 1774622145,
      "title": "Anatomy of the .claude/ folder",
      "type": "story",
      "url": "https://blog.dailydoseofds.com/p/anatomy-of-the-claude-folder"
    },
    {
      "by": "toomuchtodo",
      "descendants": 33,
      "id": 47498571,
      "kids": [
        47548303,
        47550042,
        47551542,
        47550216,
        47547242,
        47548312,
        47550142,
        47548219,
        47548289,
        47549699,
        47547576,
        47547870
      ],
      "score": 137,
      "time": 1774326135,
      "title": "Nashville library launches Memory Lab for digitizing home movies",
      "type": "story",
      "url": "https://www.axios.com/local/nashville/2026/03/16/nashville-library-digitize-home-movies"
    },
    {
      "by": "abadar",
      "descendants": 4,
      "id": 47515783,
      "kids": [
        47552074
      ],
      "score": 18,
      "time": 1774436961,
      "title": ".apks are just .zips; semi-legally hacking software for orphaned hardware [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=P1kfuCkWo24"
    },
    {
      "by": "ellg",
      "descendants": 44,
      "id": 47549160,
      "kids": [
        47550669,
        47550215,
        47551863,
        47550820,
        47550706,
        47550314,
        47550739,
        47551068,
        47549786,
        47551391,
        47549737,
        47550015,
        47551474,
        47550249,
        47550618,
        47551395,
        47549960,
        47549982,
        47551144,
        47552076,
        47550360
      ],
      "score": 94,
      "text": "Hey HN, I re-launched an old site I remembered back in the day that someone made called twitchroulette.net with a lot of new features and stats and I would love for people to check it out. The idea is you can easily browse the less browsed parts of twitch and find cool and new streamers to say hi to, and maybe make some new friends.<p>I also added some real time stats and breakdowns per channel and I think some of the things they show are pretty interesting. Check it out!",
      "time": 1774650140,
      "title": "Show HN: Twitch Roulette – Find live streamers who need views the most",
      "type": "story",
      "url": "https://twitchroulette.net/"
    },
    {
      "by": "dmcrespo",
      "descendants": 41,
      "id": 47548013,
      "kids": [
        47548356,
        47548014,
        47551246,
        47551715,
        47549114,
        47550626,
        47550898,
        47551522,
        47548571,
        47549453,
        47549443,
        47551207,
        47551547,
        47551918,
        47551771,
        47551023,
        47550765
      ],
      "score": 123,
      "time": 1774644273,
      "title": "Velxio 2.0 – Emulate Arduino, ESP32, and Raspberry Pi 3 in the Browser",
      "type": "story",
      "url": "https://github.com/davidmonterocrespo24/velxio"
    },
    {
      "by": "Cider9986",
      "descendants": 20,
      "id": 47547508,
      "kids": [
        47549249,
        47549301,
        47548691,
        47551374,
        47550752,
        47548292,
        47549069,
        47548711,
        47548647,
        47548375,
        47550251
      ],
      "score": 141,
      "time": 1774641725,
      "title": "ISBN Visualization",
      "type": "story",
      "url": "https://annas-archive.gd/isbn-visualization?"
    },
    {
      "by": "ingve",
      "descendants": 19,
      "id": 47532770,
      "kids": [
        47551145,
        47550046,
        47551364,
        47550961,
        47550470,
        47551543,
        47550710,
        47551174,
        47550578,
        47550768,
        47550001,
        47550634,
        47550540,
        47550778,
        47550897,
        47551775
      ],
      "score": 76,
      "time": 1774543692,
      "title": "Improving Composer through real-time RL",
      "type": "story",
      "url": "https://cursor.com/blog/real-time-rl-for-composer"
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
      "title": "Tailscale’d Into Homelabbing",
      "url": "https://rugu.dev/en/blog/homelabbing_01/",
      "score": 19,
      "comments": 15,
      "tags": [
        "devops",
        "linux"
      ],
      "id": "abrpfr"
    },
    {
      "title": "The Comforting Lie Of SHA Pinning",
      "url": "https://www.vaines.org/posts/2026-03-24-the-comforting-lie-of-sha-pinning/",
      "score": 21,
      "comments": 9,
      "tags": [
        "devops",
        "security",
        "vcs"
      ],
      "id": "qtu40j"
    },
    {
      "title": "immich vs ente photos - the photo backup showdown",
      "url": "https://alexandmanu.com/blog/immich-vs-ente-photos/",
      "score": 48,
      "comments": 24,
      "tags": [
        "devops"
      ],
      "id": "pxnyf9"
    },
    {
      "title": "Bigoish: Test the empirical computational complexity of Rust algorithms",
      "url": "https://docs.rs/bigoish/",
      "score": 24,
      "comments": 0,
      "tags": [
        "performance",
        "release",
        "rust"
      ],
      "id": "4lntz7"
    },
    {
      "title": "Which Programming Language Is Best for Claude Code?",
      "url": "https://dev.to/mame/which-programming-language-is-best-for-claude-code-508a",
      "score": 8,
      "comments": 11,
      "tags": [
        "vibecoding"
      ],
      "id": "j5rw8d"
    },
    {
      "title": "Scaling a Monolith to 1M LOC: 113 Pragmatic Lessons from Tech Lead to CTO",
      "url": "https://www.semicolonandsons.com/articles/scaling-a-monolith-to-1m-loc-113-pragmatic-lessons-from-tech-lead-to-cto",
      "score": 26,
      "comments": 26,
      "tags": [
        "debugging",
        "performance",
        "practices",
        "python",
        "scaling",
        "testing",
        "web"
      ],
      "id": "suqhsn"
    },
    {
      "title": "Pondering Effects",
      "url": "https://wiki.alopex.li/PonderingEffects",
      "score": 9,
      "comments": 4,
      "tags": [
        "plt"
      ],
      "id": "x7re3z"
    },
    {
      "title": "A one-line Kubernetes fix that saved 600 hours a year",
      "url": "https://blog.cloudflare.com/one-line-kubernetes-fix-saved-600-hours-a-year/",
      "score": 17,
      "comments": 3,
      "tags": [
        "devops"
      ],
      "id": "jxqn5s"
    },
    {
      "title": "Vibe-coded ext4 for OpenBSD",
      "url": "https://lwn.net/SubscriberLink/1064541/1a399d572a046fb9/",
      "score": 12,
      "comments": 2,
      "tags": [
        "openbsd",
        "vibecoding"
      ],
      "id": "j4hrbx"
    },
    {
      "title": "Distraction-Free Writing with the Micro Journal Rev.2 (and Neovim)",
      "url": "https://www.ssp.sh/brain/my-distraction-free-typewriter-micro-journal/",
      "score": 10,
      "comments": 10,
      "tags": [
        "hardware"
      ],
      "id": "he46nq"
    }
  ]
}
```

