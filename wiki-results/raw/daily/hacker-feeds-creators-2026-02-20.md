# Hacker Feeds Outcomes - Creators

Generated on: 2026-02-20 07:14:14 UTC

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
      "title": "A New Chapter: DEV is Joining Forces with Major League Hacking (MLH)",
      "description": "Hey everyone,  I have some massive news to share today, and I couldn't be more excited to finally...",
      "url": "https://dev.to/devteam/a-new-chapter-dev-is-joining-forces-with-major-league-hacking-mlh-3kfd",
      "tags": "news, devto, hackathon, discuss",
      "reactions": 330,
      "comments": 82,
      "reading_time": 6,
      "author": "ben"
    },
    {
      "title": "Why did you become a Developer?",
      "description": "We all have our origin stories. Maybe you were born to become a programmer or you started off when...",
      "url": "https://dev.to/francistrdev/why-did-you-become-a-developer-57ea",
      "tags": "discuss, community, programming, mentalhealth",
      "reactions": 38,
      "comments": 32,
      "reading_time": 2,
      "author": "francistrdev"
    },
    {
      "title": "Congrats to the \"New Year, New You\" Portfolio Challenge Winners and Runner-Ups!",
      "description": "The results are in! We are thrilled to announce the winners of the New Year, New You Portfolio...",
      "url": "https://dev.to/devteam/congrats-to-the-new-year-new-you-portfolio-challenge-winners-and-runner-ups-1l9h",
      "tags": "devchallenge, googleaichallenge, gemini, career",
      "reactions": 47,
      "comments": 18,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Suffering from BUGS: How I Almost Deleted My Entire Project",
      "description": "You know that iconic DJ Khaled album, \"Suffering from Success\"? The one where he looks overwhelmed by...",
      "url": "https://dev.to/maame-codes/suffering-from-bugs-how-i-almost-deleted-my-entire-project-1eef",
      "tags": "showdev, devops, python, typescript",
      "reactions": 81,
      "comments": 23,
      "reading_time": 5,
      "author": "maame-codes"
    },
    {
      "title": "The Future of Software Has a Lot More Builders. They’re Going to Need a Home.",
      "description": "I have some big news to share today: Major League Hacking has acquired DEV (dev.to), the developer...",
      "url": "https://dev.to/mlh/the-future-of-software-has-a-lot-more-builders-theyre-going-to-need-a-home-1k65",
      "tags": "discuss, news, ai, programming",
      "reactions": 87,
      "comments": 15,
      "reading_time": 4,
      "author": "jonmarkgo"
    },
    {
      "title": "Ran out of Cursor tokens and switched to GitHub Copilot: Side-by-Side",
      "description": "DISCLAIMER! The best AI coding tool is the one available to you, that gives you the best model and...",
      "url": "https://dev.to/maximsaplin/ran-out-of-cursor-tokens-and-switched-to-github-copilot-side-by-side-2n5p",
      "tags": "ai, githubcopilot, programming, productivity",
      "reactions": 24,
      "comments": 9,
      "reading_time": 9,
      "author": "maximsaplin"
    },
    {
      "title": "The hosting setup nobody talks about anymore",
      "description": "Ever had this problem?   You're building something real, real-time features, background workers, cron...",
      "url": "https://dev.to/aws/the-hosting-setup-nobody-talks-about-anymore-2528",
      "tags": "aws, webhost, webdev",
      "reactions": 4,
      "comments": 0,
      "reading_time": 24,
      "author": "erikch"
    },
    {
      "title": "Inside OpenClaw: How a Persistent AI Agent Actually Works",
      "description": "Introduction   OpenClaw, originally called ClawdBot, is trending everywhere. People are...",
      "url": "https://dev.to/entelligenceai/inside-openclaw-how-a-persistent-ai-agent-actually-works-1mnk",
      "tags": "ai, productivity, opensource, programming",
      "reactions": 9,
      "comments": 0,
      "reading_time": 10,
      "author": "astrodevil"
    },
    {
      "title": "If Writing still Matters, How to Do it Right and Avoid AI Suspicion?",
      "description": "Does writing still matter? Does anyone still care? I care. I write. Because it matters.  \"Still\"...",
      "url": "https://dev.to/ingosteinke/if-writing-still-matters-how-to-do-it-right-and-avoid-ai-suspicion-2nac",
      "tags": "writing, ai, watercooler, nanobanana",
      "reactions": 30,
      "comments": 11,
      "reading_time": 9,
      "author": "ingosteinke"
    },
    {
      "title": "Taming non-determinism: from logic gates to LLMs",
      "description": "Or: how engineering keeps turning chaos into reliable computation. And why agentic AI still hasn't...",
      "url": "https://dev.to/leandronsp/taming-non-determinism-from-logic-gates-to-llms-3mf0",
      "tags": "ai, llm, ann",
      "reactions": 11,
      "comments": 0,
      "reading_time": 8,
      "author": "leandronsp"
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
      "author": "pshenok",
      "repo": "server-survival",
      "avatar": "https://github.com/pshenok.png",
      "repo_link": "https://github.com/pshenok/server-survival",
      "desc": "Tower defense game that teaches cloud architecture. Build infrastructure, survive traffic, learn scaling.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 5280,
      "forks": 613,
      "added_stars": 594,
      "builtBy": [
        {
          "username": "pshenok",
          "href": "https://github.com/pshenok",
          "avatar": "https://avatars.githubusercontent.com/u/42213409"
        },
        {
          "username": "kant2002",
          "href": "https://github.com/kant2002",
          "avatar": "https://avatars.githubusercontent.com/u/4257079"
        },
        {
          "username": "velosojonathan5",
          "href": "https://github.com/velosojonathan5",
          "avatar": "https://avatars.githubusercontent.com/u/16419310"
        },
        {
          "username": "TraxionRPh",
          "href": "https://github.com/TraxionRPh",
          "avatar": "https://avatars.githubusercontent.com/u/103160824"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "SynkraAI",
      "repo": "aios-core",
      "avatar": "https://github.com/SynkraAI.png",
      "repo_link": "https://github.com/SynkraAI/aios-core",
      "desc": "Synkra AIOS: AI-Orchestrated System for Full Stack Development - Core Framework v4.0",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 1440,
      "forks": 517,
      "added_stars": 1183,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Pedrovaleriolopez",
          "href": "https://github.com/Pedrovaleriolopez",
          "avatar": "https://avatars.githubusercontent.com/u/124090200"
        },
        {
          "username": "oalanicolas",
          "href": "https://github.com/oalanicolas",
          "avatar": "https://avatars.githubusercontent.com/u/895889"
        },
        {
          "username": "semantic-release-bot",
          "href": "https://github.com/semantic-release-bot",
          "avatar": "https://avatars.githubusercontent.com/u/32174276"
        }
      ]
    },
    {
      "author": "harvard-edge",
      "repo": "cs249r_book",
      "avatar": "https://github.com/harvard-edge.png",
      "repo_link": "https://github.com/harvard-edge/cs249r_book",
      "desc": "Introduction to Machine Learning Systems",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 20326,
      "forks": 2337,
      "added_stars": 2014,
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
      "author": "yctimlin",
      "repo": "mcp_excalidraw",
      "avatar": "https://github.com/yctimlin.png",
      "repo_link": "https://github.com/yctimlin/mcp_excalidraw",
      "desc": "",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 1020,
      "forks": 96,
      "added_stars": 184,
      "builtBy": [
        {
          "username": "yctimlin",
          "href": "https://github.com/yctimlin",
          "avatar": "https://avatars.githubusercontent.com/u/37396655"
        },
        {
          "username": "frNNcs",
          "href": "https://github.com/frNNcs",
          "avatar": "https://avatars.githubusercontent.com/u/34633159"
        },
        {
          "username": "ycsahara",
          "href": "https://github.com/ycsahara",
          "avatar": "https://avatars.githubusercontent.com/u/171326707"
        },
        {
          "username": "gianluca-venturini",
          "href": "https://github.com/gianluca-venturini",
          "avatar": "https://avatars.githubusercontent.com/u/6535621"
        },
        {
          "username": "Songmengdi",
          "href": "https://github.com/Songmengdi",
          "avatar": "https://avatars.githubusercontent.com/u/40119877"
        }
      ]
    },
    {
      "author": "qist",
      "repo": "tvbox",
      "avatar": "https://github.com/qist.png",
      "repo_link": "https://github.com/qist/tvbox",
      "desc": "OK影视、tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 8152,
      "forks": 3030,
      "added_stars": 163,
      "builtBy": [
        {
          "username": "gaotianliuyun",
          "href": "https://github.com/gaotianliuyun",
          "avatar": "https://avatars.githubusercontent.com/u/58679624"
        },
        {
          "username": "qist",
          "href": "https://github.com/qist",
          "avatar": "https://avatars.githubusercontent.com/u/7844620"
        },
        {
          "username": "st7833232",
          "href": "https://github.com/st7833232",
          "avatar": "https://avatars.githubusercontent.com/u/46182664"
        },
        {
          "username": "taomi",
          "href": "https://github.com/taomi",
          "avatar": "https://avatars.githubusercontent.com/u/1817451"
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
      "stars": 8222,
      "forks": 698,
      "added_stars": 130,
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
      "author": "louislam",
      "repo": "uptime-kuma",
      "avatar": "https://github.com/louislam.png",
      "repo_link": "https://github.com/louislam/uptime-kuma",
      "desc": "A fancy self-hosted monitoring tool",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 83006,
      "forks": 7423,
      "added_stars": 292,
      "builtBy": [
        {
          "username": "louislam",
          "href": "https://github.com/louislam",
          "avatar": "https://avatars.githubusercontent.com/u/1336778"
        },
        {
          "username": "CommanderStorm",
          "href": "https://github.com/CommanderStorm",
          "avatar": "https://avatars.githubusercontent.com/u/26258709"
        },
        {
          "username": "chakflying",
          "href": "https://github.com/chakflying",
          "avatar": "https://avatars.githubusercontent.com/u/3271800"
        },
        {
          "username": "Saibamen",
          "href": "https://github.com/Saibamen",
          "avatar": "https://avatars.githubusercontent.com/u/905878"
        },
        {
          "username": "Computroniks",
          "href": "https://github.com/Computroniks",
          "avatar": "https://avatars.githubusercontent.com/u/67638596"
        }
      ]
    },
    {
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code and OpenCode.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 16343,
      "forks": 1500,
      "added_stars": 2794,
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
          "username": "jjshanks",
          "href": "https://github.com/jjshanks",
          "avatar": "https://avatars.githubusercontent.com/u/62661"
        },
        {
          "username": "davesienkowski",
          "href": "https://github.com/davesienkowski",
          "avatar": "https://avatars.githubusercontent.com/u/3037759"
        },
        {
          "username": "superresistant",
          "href": "https://github.com/superresistant",
          "avatar": "https://avatars.githubusercontent.com/u/8614797"
        }
      ]
    },
    {
      "author": "SillyTavern",
      "repo": "SillyTavern",
      "avatar": "https://github.com/SillyTavern.png",
      "repo_link": "https://github.com/SillyTavern/SillyTavern",
      "desc": "LLM Frontend for Power Users.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 23300,
      "forks": 4752,
      "added_stars": 275,
      "builtBy": [
        {
          "username": "Cohee1207",
          "href": "https://github.com/Cohee1207",
          "avatar": "https://avatars.githubusercontent.com/u/18619528"
        },
        {
          "username": "Wolfsblvt",
          "href": "https://github.com/Wolfsblvt",
          "avatar": "https://avatars.githubusercontent.com/u/9962104"
        },
        {
          "username": "RossAscends",
          "href": "https://github.com/RossAscends",
          "avatar": "https://avatars.githubusercontent.com/u/124905043"
        },
        {
          "username": "LenAnderson",
          "href": "https://github.com/LenAnderson",
          "avatar": "https://avatars.githubusercontent.com/u/7149120"
        },
        {
          "username": "valadaptive",
          "href": "https://github.com/valadaptive",
          "avatar": "https://avatars.githubusercontent.com/u/79560998"
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
      "stars": 22183,
      "forks": 837,
      "added_stars": 69,
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
          "username": "kyrie25",
          "href": "https://github.com/kyrie25",
          "avatar": "https://avatars.githubusercontent.com/u/77577746"
        },
        {
          "username": "SunsetTechuila",
          "href": "https://github.com/SunsetTechuila",
          "avatar": "https://avatars.githubusercontent.com/u/115353812"
        }
      ]
    },
    {
      "author": "firecrawl",
      "repo": "firecrawl-mcp-server",
      "avatar": "https://github.com/firecrawl.png",
      "repo_link": "https://github.com/firecrawl/firecrawl-mcp-server",
      "desc": "🔥 Official Firecrawl MCP Server - Adds powerful web scraping and search to Cursor, Claude and any other LLM clients.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 5545,
      "forks": 607,
      "added_stars": 64,
      "builtBy": [
        {
          "username": "nickscamara",
          "href": "https://github.com/nickscamara",
          "avatar": "https://avatars.githubusercontent.com/u/20311743"
        },
        {
          "username": "vrknetha",
          "href": "https://github.com/vrknetha",
          "avatar": "https://avatars.githubusercontent.com/u/20596261"
        },
        {
          "username": "tomkosm",
          "href": "https://github.com/tomkosm",
          "avatar": "https://avatars.githubusercontent.com/u/10325851"
        },
        {
          "username": "mogery",
          "href": "https://github.com/mogery",
          "avatar": "https://avatars.githubusercontent.com/u/66118807"
        },
        {
          "username": "leonardogrig",
          "href": "https://github.com/leonardogrig",
          "avatar": "https://avatars.githubusercontent.com/u/48296347"
        }
      ]
    },
    {
      "author": "fanmingming",
      "repo": "live",
      "avatar": "https://github.com/fanmingming.png",
      "repo_link": "https://github.com/fanmingming/live",
      "desc": "✯ 可直连访问的电视/广播图标库与相关工具项目 ✯ 🔕 永久免费 直连访问 完整开源 不断完善的台标 支持IPv4/IPv6双栈访问 🔕",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 27663,
      "forks": 4166,
      "added_stars": 88,
      "builtBy": [
        {
          "username": "fanmingming",
          "href": "https://github.com/fanmingming",
          "avatar": "https://avatars.githubusercontent.com/u/4993993"
        },
        {
          "username": "SeastLeePro",
          "href": "https://github.com/SeastLeePro",
          "avatar": "https://avatars.githubusercontent.com/u/135801506"
        },
        {
          "username": "JeremyQian001",
          "href": "https://github.com/JeremyQian001",
          "avatar": "https://avatars.githubusercontent.com/u/62588417"
        },
        {
          "username": "sln162",
          "href": "https://github.com/sln162",
          "avatar": "https://avatars.githubusercontent.com/u/11196986"
        }
      ]
    },
    {
      "author": "jhuckaby",
      "repo": "Cronicle",
      "avatar": "https://github.com/jhuckaby.png",
      "repo_link": "https://github.com/jhuckaby/Cronicle",
      "desc": "A simple, distributed task scheduler and runner with a web based UI.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 5474,
      "forks": 480,
      "added_stars": 83,
      "builtBy": [
        {
          "username": "jhuckaby",
          "href": "https://github.com/jhuckaby",
          "avatar": "https://avatars.githubusercontent.com/u/700765"
        },
        {
          "username": "mprasil",
          "href": "https://github.com/mprasil",
          "avatar": "https://avatars.githubusercontent.com/u/8255364"
        },
        {
          "username": "ftaiolivista",
          "href": "https://github.com/ftaiolivista",
          "avatar": "https://avatars.githubusercontent.com/u/150721"
        },
        {
          "username": "attie",
          "href": "https://github.com/attie",
          "avatar": "https://avatars.githubusercontent.com/u/2195519"
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
      "title": "The Future of Software Has a Lot More Builders. They’re Going to Need a Home.",
      "description": "I have some big news to share today: Major League Hacking has acquired DEV (dev.to), the developer...",
      "url": "https://dev.to/mlh/the-future-of-software-has-a-lot-more-builders-theyre-going-to-need-a-home-1k65",
      "tags": "discuss, news, ai, programming",
      "reactions": 87,
      "comments": 15,
      "reading_time": 4,
      "author": "jonmarkgo"
    },
    {
      "title": "Ran out of Cursor tokens and switched to GitHub Copilot: Side-by-Side",
      "description": "DISCLAIMER! The best AI coding tool is the one available to you, that gives you the best model and...",
      "url": "https://dev.to/maximsaplin/ran-out-of-cursor-tokens-and-switched-to-github-copilot-side-by-side-2n5p",
      "tags": "ai, githubcopilot, programming, productivity",
      "reactions": 24,
      "comments": 9,
      "reading_time": 9,
      "author": "maximsaplin"
    },
    {
      "title": "Inside OpenClaw: How a Persistent AI Agent Actually Works",
      "description": "Introduction   OpenClaw, originally called ClawdBot, is trending everywhere. People are...",
      "url": "https://dev.to/entelligenceai/inside-openclaw-how-a-persistent-ai-agent-actually-works-1mnk",
      "tags": "ai, productivity, opensource, programming",
      "reactions": 9,
      "comments": 0,
      "reading_time": 10,
      "author": "astrodevil"
    },
    {
      "title": "If Writing still Matters, How to Do it Right and Avoid AI Suspicion?",
      "description": "Does writing still matter? Does anyone still care? I care. I write. Because it matters.  \"Still\"...",
      "url": "https://dev.to/ingosteinke/if-writing-still-matters-how-to-do-it-right-and-avoid-ai-suspicion-2nac",
      "tags": "writing, ai, watercooler, nanobanana",
      "reactions": 30,
      "comments": 11,
      "reading_time": 9,
      "author": "ingosteinke"
    },
    {
      "title": "Taming non-determinism: from logic gates to LLMs",
      "description": "Or: how engineering keeps turning chaos into reliable computation. And why agentic AI still hasn't...",
      "url": "https://dev.to/leandronsp/taming-non-determinism-from-logic-gates-to-llms-3mf0",
      "tags": "ai, llm, ann",
      "reactions": 11,
      "comments": 0,
      "reading_time": 8,
      "author": "leandronsp"
    },
    {
      "title": "How I Built Two Generations of Neuromorphic Processor From Scratch",
      "description": "Your brain runs on about 20 watts. It processes visual scenes, generates speech, and maintains...",
      "url": "https://dev.to/catalyst-neuromorphic/how-i-built-two-generations-of-neuromorphic-processor-from-scratch-4efd",
      "tags": "ai, architecture, showdev, sideprojects",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "catalyst-neuromorphic"
    },
    {
      "title": "Your Secrets Aren’t Safe: How the .git Directory Can Leak Data via AI Tools",
      "description": "Even if you delete a secret, Git never forgets. This article explores how the .git directory, git commands, and malicious AI tools or plugins can expose sensitive data — plus practical defenses you should implement today.",
      "url": "https://dev.to/yoheiseki/your-secrets-arent-safe-how-the-git-directory-can-leak-data-via-ai-tools-4ioo",
      "tags": "security, git, ai, devops",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "yoheiseki"
    },
    {
      "title": "I Built an AGI Benchmark — And Tested It Against Top AI Models",
      "description": "Most AI benchmarks today measure accuracy.  But here’s the problem:  Accuracy ≠ Intelligence.  So I...",
      "url": "https://dev.to/felipe_muniz_grsba/i-built-an-agi-benchmark-and-tested-it-against-top-ai-models-p43",
      "tags": "ai, benchmark, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "felipe_muniz_grsba"
    },
    {
      "title": "5 AI Tools Every Developer Should Integrate into Their Daily Workflow",
      "description": "Most productivity gains don’t come from heroic bursts of coding.  They come from removing friction...",
      "url": "https://dev.to/jaideepparashar/5-ai-tools-every-developer-should-integrate-into-their-daily-workflow-4272",
      "tags": "ai, devops, developer, productivity",
      "reactions": 17,
      "comments": 2,
      "reading_time": 3,
      "author": "jaideepparashar"
    },
    {
      "title": "The 200 Lines of Code That Run Claude Code. The 9,800 Lines That Keep It Safe.",
      "description": "A HN post claimed you can rebuild Claude Code in 200 lines. They weren't wrong about the core. But here's what 3,529 activity log entries and one context-exhaustion incident taught us about what comes after.",
      "url": "https://dev.to/yurukusa/the-200-lines-of-code-that-run-claude-code-the-9800-lines-that-keep-it-safe-40i1",
      "tags": "claudecode, ai, automation, devops",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "yurukusa"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "r4um",
      "descendants": 18,
      "id": 47031197,
      "kids": [
        47084266,
        47084179,
        47084457,
        47084296,
        47084606,
        47084210,
        47084337
      ],
      "score": 54,
      "time": 1771219655,
      "title": "Defer available in gcc and clang",
      "type": "story",
      "url": "https://gustedt.wordpress.com/2026/02/15/defer-available-in-gcc-and-clang/"
    },
    {
      "by": "zagwdt",
      "descendants": 8,
      "id": 47083648,
      "kids": [
        47084726,
        47084262,
        47084200,
        47084079
      ],
      "score": 49,
      "time": 1771560958,
      "title": "Consistency diffusion language models: Up to 14x faster, no quality loss",
      "type": "story",
      "url": "https://www.together.ai/blog/consistency-diffusion-language-models"
    },
    {
      "by": "MallocVoidstar",
      "descendants": 767,
      "id": 47074735,
      "kids": [
        47076453,
        47079966,
        47080308,
        47076937,
        47075566,
        47076484,
        47084686,
        47076733,
        47075747,
        47075916,
        47075750,
        47076703,
        47082391,
        47075340,
        47082908,
        47075498,
        47076285,
        47082937,
        47075618,
        47075386,
        47075664,
        47083519,
        47076344,
        47084282,
        47080142,
        47078572,
        47081311,
        47078265,
        47075581,
        47081653,
        47082960,
        47076172,
        47077551,
        47076958,
        47076500,
        47075751,
        47076088,
        47075355,
        47079104,
        47077009,
        47076019,
        47082350,
        47078302,
        47083092,
        47081106,
        47075681,
        47080637,
        47075954,
        47076511,
        47076086,
        47075669,
        47084429,
        47080993,
        47080818,
        47077606,
        47077814,
        47077238,
        47076810,
        47076036,
        47081554,
        47075367,
        47075939,
        47080173,
        47076328,
        47075881,
        47077934,
        47076049,
        47075337,
        47075825,
        47077207,
        47075725,
        47079826,
        47075755,
        47078141,
        47075586,
        47081745,
        47075579,
        47079418,
        47081414,
        47080386,
        47076133,
        47079204,
        47075798,
        47075535,
        47078599,
        47077402,
        47076432,
        47075594,
        47075529,
        47075439,
        47075304,
        47075740,
        47078180,
        47075946,
        47076934,
        47075728,
        47079354,
        47077070,
        47080146,
        47077693,
        47075961,
        47075948,
        47075923,
        47075600,
        47080030,
        47075689,
        47076863,
        47076504,
        47076486,
        47076181,
        47075599,
        47077328,
        47077507,
        47076572,
        47077877,
        47078959,
        47083988,
        47081090,
        47077346,
        47076433,
        47075223,
        47077912,
        47076031,
        47076074
      ],
      "score": 678,
      "text": "Preview: <a href=\"https:&#x2F;&#x2F;console.cloud.google.com&#x2F;vertex-ai&#x2F;publishers&#x2F;google&#x2F;model-garden&#x2F;gemini-3.1-pro-preview?pli=1\" rel=\"nofollow\">https:&#x2F;&#x2F;console.cloud.google.com&#x2F;vertex-ai&#x2F;publishers&#x2F;google...</a><p>Card: <a href=\"https:&#x2F;&#x2F;deepmind.google&#x2F;models&#x2F;model-cards&#x2F;gemini-3-1-pro&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;deepmind.google&#x2F;models&#x2F;model-cards&#x2F;gemini-3-1-pro&#x2F;</a>",
      "time": 1771514397,
      "title": "Gemini 3.1 Pro",
      "type": "story",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/"
    },
    {
      "by": "scottshambaugh",
      "descendants": 224,
      "id": 47083145,
      "kids": [
        47083893,
        47084704,
        47084735,
        47083388,
        47083624,
        47083937,
        47084721,
        47083377,
        47083329,
        47083439,
        47084151,
        47083796,
        47084540,
        47084684,
        47084172,
        47083850,
        47083468,
        47083266,
        47083542,
        47084383,
        47083965,
        47083792,
        47084707,
        47083362,
        47083788,
        47083616,
        47084166,
        47084259,
        47083927,
        47083376,
        47083817,
        47083359,
        47083938,
        47083275,
        47083292,
        47084076,
        47083474,
        47083603,
        47084255,
        47083975,
        47083990,
        47083549,
        47084295,
        47083640,
        47084193,
        47083551,
        47083646,
        47083496,
        47083655,
        47083690,
        47083339,
        47084101,
        47083628,
        47083671,
        47083303,
        47083414,
        47083588,
        47083372,
        47083302,
        47083524,
        47083438,
        47083687
      ],
      "score": 290,
      "time": 1771556708,
      "title": "An AI Agent Published a Hit Piece on Me – The Operator Came Forward",
      "type": "story",
      "url": "https://theshamblog.com/an-ai-agent-wrote-a-hit-piece-on-me-part-4/"
    },
    {
      "by": "rahimnathwani",
      "descendants": 7,
      "id": 47082854,
      "kids": [
        47084709,
        47084221,
        47083905,
        47084373,
        47083617,
        47083779,
        47083208
      ],
      "score": 43,
      "time": 1771554006,
      "title": "Pi for Excel: AI sidebar add-in for Excel",
      "type": "story",
      "url": "https://github.com/tmustier/pi-for-excel"
    },
    {
      "by": "todsacerdoti",
      "descendants": 1,
      "id": 47084000,
      "kids": [
        47084552,
        47084541
      ],
      "score": 17,
      "time": 1771564000,
      "title": "Reading the undocumented MEMS accelerometer on Apple Silicon MacBooks via iokit",
      "type": "story",
      "url": "https://github.com/olvvier/apple-silicon-accelerometer"
    },
    {
      "by": "cpcloud",
      "descendants": 167,
      "id": 47075124,
      "kids": [
        47080795,
        47078179,
        47076008,
        47076801,
        47077730,
        47079163,
        47083604,
        47084110,
        47076009,
        47075960,
        47076742,
        47083178,
        47078392,
        47078408,
        47077974,
        47078317,
        47078030,
        47075782,
        47079615,
        47082943,
        47082060,
        47076796,
        47081927,
        47080649,
        47076892,
        47078293,
        47079444,
        47075564,
        47076925,
        47076985,
        47078926,
        47075624,
        47077943,
        47077040,
        47080263,
        47079095,
        47075611,
        47077074,
        47081750,
        47075364,
        47076969,
        47077797,
        47078116,
        47082800,
        47076549,
        47083505,
        47082651,
        47075726,
        47077599,
        47080765,
        47076635,
        47075570,
        47078874,
        47082846,
        47078197,
        47077753,
        47079320,
        47079848,
        47079113,
        47078184,
        47077954,
        47077818,
        47075985,
        47081708,
        47078340,
        47081217,
        47082280,
        47084459,
        47081673,
        47078304
      ],
      "score": 512,
      "text": "micasa is a terminal UI that helps you track home stuff, in a single SQLite file. No cloud, no\naccount, no subscription. Backup with cp.<p>I built it because I was tired of losing track of everything in notes apps, and &quot;I&#x27;ll remember\nthat&quot;s. When do I need to clean the dishwasher filter? What&#x27;s the best quote for a complete\noverhaul of the backyard. Oops, found some mold behind the trim, need to address that ASAP. That\nsort of stuff.<p>Another reason I made micasa was to build a (hopefully useful) low-stakes personal project where\nthe code was written entirely by AI. I still review the code and click the merge button, but 99%\nof the programming was done with an agent.<p>Here are some things I think make it worth checking out:<p>- Vim-style modal UI. Nav mode to browse, edit mode to change. Multicolumn sort, fuzzy-jump to\n  columns, pin-and-filter rows, hide columns you don&#x27;t need, drill into related records (like\n  quotes for a project). Much of the spirit of the design and some of the actual design choices\n  is and are inspired by VisiData. You should check that out too.\n- Local LLM chat. Definitely a gimmick, but I am trying preempt &quot;Yeah, but does it AI?&quot;-style\n  conversations. This is an optional feature and you can simply pretend it doesn&#x27;t exist. All\n  features work without it.\n- Single-file SQLite-based architecture. Document attachments (manuals, receipts, photos) are\n  stored as BLOBs in the same SQLite database. One file is the whole app state. If you think\n  this won&#x27;t scale, you&#x27;re right. It&#x27;s pretty damn easy to work with though.\n- Pure Go, zero CGO. Built on Charmbracelet for the TUI and GORM + go-sqlite for the database.\n  Charm makes pretty nice TUIs, and this was my first time using it.<p>Try it with sample data:\ngo install github.com&#x2F;cpcloud&#x2F;micasa&#x2F;cmd&#x2F;micasa@latest &amp;&amp; micasa --demo<p>If you&#x27;re insane you can also run micasa --demo --years 1000 to generate 1000 years worth of\ndemo data. Not sure what house would last that long, but hey, you do you.",
      "time": 1771516454,
      "title": "Show HN: Micasa – track your house from the terminal",
      "type": "story",
      "url": "https://micasa.dev"
    },
    {
      "by": "neelc",
      "descendants": 42,
      "id": 47082548,
      "kids": [
        47082950,
        47084239,
        47083462,
        47083560,
        47082825,
        47082826,
        47082598,
        47083483,
        47083156,
        47083413
      ],
      "score": 51,
      "time": 1771551216,
      "title": "An ARM Homelab Server, or a Minisforum MS-R1 Review",
      "type": "story",
      "url": "https://sour.coffee/2026/02/20/an-arm-homelab-server-or-a-minisforum-ms-r1-review/"
    },
    {
      "by": "arjunbajaj",
      "descendants": 0,
      "id": 47084431,
      "score": 3,
      "text": "Hey HN! Arjun and Sid here.<p>Fostrom is an IoT Cloud Platform designed for developers to make it really easy to get started and scale fleets. We have Device SDKs (in Python, JS, Elixir, more coming soon), Typed Schemas, Per-Device Mailboxes, Programmable Actions, 4 Global Regions for lower-latency connections, and much more.<p>We&#x27;ve built Fostrom to solve a real need we faced in our previous startup, building a fully automated indoor vertical farm. We spent more time figuring out IoT infrastructure than writing automation logic. Fostrom is the platform we wished existed back then.<p>Over the last few years we&#x27;ve experimented with a lot of interesting tech and architectures, and settled on an architecture that we believe is quite elegant. We wrote a Go&lt;-&gt;Elixir bridge to execute JS code in WASM for Actions, implemented a DuckDB library for Elixir, and wrote a Device Agent in Rust that our SDKs run in the background (<a href=\"https:&#x2F;&#x2F;github.com&#x2F;fostrom&#x2F;devicekit\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;fostrom&#x2F;devicekit</a>).<p>The most interesting realization we had was about the data architecture. For years, we tried using distributed databases and built complex layers on top of them, but all approaches had significant limitations specifically around consistency and querying. We want to provide operational correctness, rich insights, and reliability. Finally, we came to the conclusion that to achieve this we really need a SQL database for fleet data. So we built a DuckDB-based replicated multi-tenant data layer. We&#x27;re still improving it (hence the Technical Preview badge) but we&#x27;re quite proud of this decision. It simplifies the rest of the codebase, while keeping operational complexity in just a few places.<p>Our vision is to make a powerful IoT platform that enables you to build correct, secure, and reliable connected systems without dealing with any of the plumbing or infrastructure.<p>Next up, we&#x27;re gonna launch our CLI, add automatic device monitoring to our Device SDKs, and improve the debugging experience. We have some pretty cool ideas to make Fostrom and the experience of developing connected systems better. We&#x27;re also going to write more about our architecture and journey soon.<p>We also published our launch blog post which goes into more detail about our vision, what we&#x27;ve built, and our future plans: <a href=\"https:&#x2F;&#x2F;fostrom.io&#x2F;blog&#x2F;introducing-fostrom\" rel=\"nofollow\">https:&#x2F;&#x2F;fostrom.io&#x2F;blog&#x2F;introducing-fostrom</a><p>Would love for you to try out Fostrom and give us your feedback and thoughts.",
      "time": 1771568434,
      "title": "Show HN: Fostrom, an IoT Cloud Platform built for developers",
      "type": "story",
      "url": "https://fostrom.io/"
    },
    {
      "by": "Meetvelde",
      "descendants": 81,
      "id": 47043345,
      "kids": [
        47082079,
        47082117,
        47084666,
        47082246,
        47083375,
        47084220,
        47084355,
        47083568,
        47083427,
        47082878,
        47084047,
        47084542,
        47083741,
        47083455,
        47084297,
        47082043,
        47083327,
        47082107,
        47082335,
        47082221,
        47082902,
        47082220,
        47083079,
        47082588,
        47084118
      ],
      "score": 168,
      "time": 1771298596,
      "title": "Almost Every infrastructure decision I endorse or regret after 4 years",
      "type": "story",
      "url": "https://cep.dev/posts/every-infrastructure-decision-i-endorse-or-regret-after-4-years-running-infrastructure-at-a-startup/"
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
      "by": "r4um",
      "descendants": 18,
      "id": 47031197,
      "kids": [
        47084266,
        47084179,
        47084457,
        47084296,
        47084606,
        47084210,
        47084337
      ],
      "score": 54,
      "time": 1771219655,
      "title": "Defer available in gcc and clang",
      "type": "story",
      "url": "https://gustedt.wordpress.com/2026/02/15/defer-available-in-gcc-and-clang/"
    },
    {
      "by": "zagwdt",
      "descendants": 8,
      "id": 47083648,
      "kids": [
        47084726,
        47084262,
        47084200,
        47084079
      ],
      "score": 49,
      "time": 1771560958,
      "title": "Consistency diffusion language models: Up to 14x faster, no quality loss",
      "type": "story",
      "url": "https://www.together.ai/blog/consistency-diffusion-language-models"
    },
    {
      "by": "MallocVoidstar",
      "descendants": 767,
      "id": 47074735,
      "kids": [
        47076453,
        47079966,
        47080308,
        47076937,
        47075566,
        47076484,
        47084686,
        47076733,
        47075747,
        47075916,
        47075750,
        47076703,
        47082391,
        47075340,
        47082908,
        47075498,
        47076285,
        47082937,
        47075618,
        47075386,
        47075664,
        47083519,
        47076344,
        47084282,
        47080142,
        47078572,
        47081311,
        47078265,
        47075581,
        47081653,
        47082960,
        47076172,
        47077551,
        47076958,
        47076500,
        47075751,
        47076088,
        47075355,
        47079104,
        47077009,
        47076019,
        47082350,
        47078302,
        47083092,
        47081106,
        47075681,
        47080637,
        47075954,
        47076511,
        47076086,
        47075669,
        47084429,
        47080993,
        47080818,
        47077606,
        47077814,
        47077238,
        47076810,
        47076036,
        47081554,
        47075367,
        47075939,
        47080173,
        47076328,
        47075881,
        47077934,
        47076049,
        47075337,
        47075825,
        47077207,
        47075725,
        47079826,
        47075755,
        47078141,
        47075586,
        47081745,
        47075579,
        47079418,
        47081414,
        47080386,
        47076133,
        47079204,
        47075798,
        47075535,
        47078599,
        47077402,
        47076432,
        47075594,
        47075529,
        47075439,
        47075304,
        47075740,
        47078180,
        47075946,
        47076934,
        47075728,
        47079354,
        47077070,
        47080146,
        47077693,
        47075961,
        47075948,
        47075923,
        47075600,
        47080030,
        47075689,
        47076863,
        47076504,
        47076486,
        47076181,
        47075599,
        47077328,
        47077507,
        47076572,
        47077877,
        47078959,
        47083988,
        47081090,
        47077346,
        47076433,
        47075223,
        47077912,
        47076031,
        47076074
      ],
      "score": 678,
      "text": "Preview: <a href=\"https:&#x2F;&#x2F;console.cloud.google.com&#x2F;vertex-ai&#x2F;publishers&#x2F;google&#x2F;model-garden&#x2F;gemini-3.1-pro-preview?pli=1\" rel=\"nofollow\">https:&#x2F;&#x2F;console.cloud.google.com&#x2F;vertex-ai&#x2F;publishers&#x2F;google...</a><p>Card: <a href=\"https:&#x2F;&#x2F;deepmind.google&#x2F;models&#x2F;model-cards&#x2F;gemini-3-1-pro&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;deepmind.google&#x2F;models&#x2F;model-cards&#x2F;gemini-3-1-pro&#x2F;</a>",
      "time": 1771514397,
      "title": "Gemini 3.1 Pro",
      "type": "story",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/"
    },
    {
      "by": "scottshambaugh",
      "descendants": 224,
      "id": 47083145,
      "kids": [
        47083893,
        47084704,
        47084735,
        47083388,
        47083624,
        47083937,
        47084721,
        47083377,
        47083329,
        47083439,
        47084151,
        47083796,
        47084540,
        47084684,
        47084172,
        47083850,
        47083468,
        47083266,
        47083542,
        47084383,
        47083965,
        47083792,
        47084707,
        47083362,
        47083788,
        47083616,
        47084166,
        47084259,
        47083927,
        47083376,
        47083817,
        47083359,
        47083938,
        47083275,
        47083292,
        47084076,
        47083474,
        47083603,
        47084255,
        47083975,
        47083990,
        47083549,
        47084295,
        47083640,
        47084193,
        47083551,
        47083646,
        47083496,
        47083655,
        47083690,
        47083339,
        47084101,
        47083628,
        47083671,
        47083303,
        47083414,
        47083588,
        47083372,
        47083302,
        47083524,
        47083438,
        47083687
      ],
      "score": 290,
      "time": 1771556708,
      "title": "An AI Agent Published a Hit Piece on Me – The Operator Came Forward",
      "type": "story",
      "url": "https://theshamblog.com/an-ai-agent-wrote-a-hit-piece-on-me-part-4/"
    },
    {
      "by": "rahimnathwani",
      "descendants": 7,
      "id": 47082854,
      "kids": [
        47084709,
        47084221,
        47083905,
        47084373,
        47083617,
        47083779,
        47083208
      ],
      "score": 43,
      "time": 1771554006,
      "title": "Pi for Excel: AI sidebar add-in for Excel",
      "type": "story",
      "url": "https://github.com/tmustier/pi-for-excel"
    },
    {
      "by": "todsacerdoti",
      "descendants": 1,
      "id": 47084000,
      "kids": [
        47084552,
        47084541
      ],
      "score": 17,
      "time": 1771564000,
      "title": "Reading the undocumented MEMS accelerometer on Apple Silicon MacBooks via iokit",
      "type": "story",
      "url": "https://github.com/olvvier/apple-silicon-accelerometer"
    },
    {
      "by": "cpcloud",
      "descendants": 167,
      "id": 47075124,
      "kids": [
        47080795,
        47078179,
        47076008,
        47076801,
        47077730,
        47079163,
        47083604,
        47084110,
        47076009,
        47075960,
        47076742,
        47083178,
        47078392,
        47078408,
        47077974,
        47078317,
        47078030,
        47075782,
        47079615,
        47082943,
        47082060,
        47076796,
        47081927,
        47080649,
        47076892,
        47078293,
        47079444,
        47075564,
        47076925,
        47076985,
        47078926,
        47075624,
        47077943,
        47077040,
        47080263,
        47079095,
        47075611,
        47077074,
        47081750,
        47075364,
        47076969,
        47077797,
        47078116,
        47082800,
        47076549,
        47083505,
        47082651,
        47075726,
        47077599,
        47080765,
        47076635,
        47075570,
        47078874,
        47082846,
        47078197,
        47077753,
        47079320,
        47079848,
        47079113,
        47078184,
        47077954,
        47077818,
        47075985,
        47081708,
        47078340,
        47081217,
        47082280,
        47084459,
        47081673,
        47078304
      ],
      "score": 512,
      "text": "micasa is a terminal UI that helps you track home stuff, in a single SQLite file. No cloud, no\naccount, no subscription. Backup with cp.<p>I built it because I was tired of losing track of everything in notes apps, and &quot;I&#x27;ll remember\nthat&quot;s. When do I need to clean the dishwasher filter? What&#x27;s the best quote for a complete\noverhaul of the backyard. Oops, found some mold behind the trim, need to address that ASAP. That\nsort of stuff.<p>Another reason I made micasa was to build a (hopefully useful) low-stakes personal project where\nthe code was written entirely by AI. I still review the code and click the merge button, but 99%\nof the programming was done with an agent.<p>Here are some things I think make it worth checking out:<p>- Vim-style modal UI. Nav mode to browse, edit mode to change. Multicolumn sort, fuzzy-jump to\n  columns, pin-and-filter rows, hide columns you don&#x27;t need, drill into related records (like\n  quotes for a project). Much of the spirit of the design and some of the actual design choices\n  is and are inspired by VisiData. You should check that out too.\n- Local LLM chat. Definitely a gimmick, but I am trying preempt &quot;Yeah, but does it AI?&quot;-style\n  conversations. This is an optional feature and you can simply pretend it doesn&#x27;t exist. All\n  features work without it.\n- Single-file SQLite-based architecture. Document attachments (manuals, receipts, photos) are\n  stored as BLOBs in the same SQLite database. One file is the whole app state. If you think\n  this won&#x27;t scale, you&#x27;re right. It&#x27;s pretty damn easy to work with though.\n- Pure Go, zero CGO. Built on Charmbracelet for the TUI and GORM + go-sqlite for the database.\n  Charm makes pretty nice TUIs, and this was my first time using it.<p>Try it with sample data:\ngo install github.com&#x2F;cpcloud&#x2F;micasa&#x2F;cmd&#x2F;micasa@latest &amp;&amp; micasa --demo<p>If you&#x27;re insane you can also run micasa --demo --years 1000 to generate 1000 years worth of\ndemo data. Not sure what house would last that long, but hey, you do you.",
      "time": 1771516454,
      "title": "Show HN: Micasa – track your house from the terminal",
      "type": "story",
      "url": "https://micasa.dev"
    },
    {
      "by": "neelc",
      "descendants": 42,
      "id": 47082548,
      "kids": [
        47082950,
        47084239,
        47083462,
        47083560,
        47082825,
        47082826,
        47082598,
        47083483,
        47083156,
        47083413
      ],
      "score": 51,
      "time": 1771551216,
      "title": "An ARM Homelab Server, or a Minisforum MS-R1 Review",
      "type": "story",
      "url": "https://sour.coffee/2026/02/20/an-arm-homelab-server-or-a-minisforum-ms-r1-review/"
    },
    {
      "by": "arjunbajaj",
      "descendants": 0,
      "id": 47084431,
      "score": 3,
      "text": "Hey HN! Arjun and Sid here.<p>Fostrom is an IoT Cloud Platform designed for developers to make it really easy to get started and scale fleets. We have Device SDKs (in Python, JS, Elixir, more coming soon), Typed Schemas, Per-Device Mailboxes, Programmable Actions, 4 Global Regions for lower-latency connections, and much more.<p>We&#x27;ve built Fostrom to solve a real need we faced in our previous startup, building a fully automated indoor vertical farm. We spent more time figuring out IoT infrastructure than writing automation logic. Fostrom is the platform we wished existed back then.<p>Over the last few years we&#x27;ve experimented with a lot of interesting tech and architectures, and settled on an architecture that we believe is quite elegant. We wrote a Go&lt;-&gt;Elixir bridge to execute JS code in WASM for Actions, implemented a DuckDB library for Elixir, and wrote a Device Agent in Rust that our SDKs run in the background (<a href=\"https:&#x2F;&#x2F;github.com&#x2F;fostrom&#x2F;devicekit\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;fostrom&#x2F;devicekit</a>).<p>The most interesting realization we had was about the data architecture. For years, we tried using distributed databases and built complex layers on top of them, but all approaches had significant limitations specifically around consistency and querying. We want to provide operational correctness, rich insights, and reliability. Finally, we came to the conclusion that to achieve this we really need a SQL database for fleet data. So we built a DuckDB-based replicated multi-tenant data layer. We&#x27;re still improving it (hence the Technical Preview badge) but we&#x27;re quite proud of this decision. It simplifies the rest of the codebase, while keeping operational complexity in just a few places.<p>Our vision is to make a powerful IoT platform that enables you to build correct, secure, and reliable connected systems without dealing with any of the plumbing or infrastructure.<p>Next up, we&#x27;re gonna launch our CLI, add automatic device monitoring to our Device SDKs, and improve the debugging experience. We have some pretty cool ideas to make Fostrom and the experience of developing connected systems better. We&#x27;re also going to write more about our architecture and journey soon.<p>We also published our launch blog post which goes into more detail about our vision, what we&#x27;ve built, and our future plans: <a href=\"https:&#x2F;&#x2F;fostrom.io&#x2F;blog&#x2F;introducing-fostrom\" rel=\"nofollow\">https:&#x2F;&#x2F;fostrom.io&#x2F;blog&#x2F;introducing-fostrom</a><p>Would love for you to try out Fostrom and give us your feedback and thoughts.",
      "time": 1771568434,
      "title": "Show HN: Fostrom, an IoT Cloud Platform built for developers",
      "type": "story",
      "url": "https://fostrom.io/"
    },
    {
      "by": "Meetvelde",
      "descendants": 81,
      "id": 47043345,
      "kids": [
        47082079,
        47082117,
        47084666,
        47082246,
        47083375,
        47084220,
        47084355,
        47083568,
        47083427,
        47082878,
        47084047,
        47084542,
        47083741,
        47083455,
        47084297,
        47082043,
        47083327,
        47082107,
        47082335,
        47082221,
        47082902,
        47082220,
        47083079,
        47082588,
        47084118
      ],
      "score": 168,
      "time": 1771298596,
      "title": "Almost Every infrastructure decision I endorse or regret after 4 years",
      "type": "story",
      "url": "https://cep.dev/posts/every-infrastructure-decision-i-endorse-or-regret-after-4-years-running-infrastructure-at-a-startup/"
    },
    {
      "by": "tartoran",
      "descendants": 30,
      "id": 47083735,
      "kids": [
        47084512,
        47084185,
        47084287,
        47084196,
        47084188,
        47084483,
        47084600,
        47084547
      ],
      "score": 64,
      "time": 1771561671,
      "title": "Mystery donor gives Japanese city $3.6M in gold bars to fix water system",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/c3ew5jlqz87o"
    },
    {
      "by": "c420",
      "descendants": 356,
      "id": 47067270,
      "kids": [
        47079786,
        47084335,
        47084708,
        47081228,
        47083342,
        47084693,
        47083454,
        47081681,
        47083270,
        47079793,
        47080204,
        47082823,
        47080249,
        47079703,
        47084661,
        47083140,
        47080276,
        47082415,
        47079686,
        47082258,
        47072868,
        47084344,
        47083989,
        47079549,
        47079920,
        47082718,
        47083799,
        47083234,
        47081479,
        47082955,
        47082092,
        47083978,
        47082711,
        47079491,
        47068558,
        47083668,
        47079777,
        47082457,
        47081179,
        47080502,
        47082853,
        47084384,
        47082364,
        47081044,
        47072833,
        47083007,
        47079496,
        47082691,
        47079554,
        47082303,
        47081247,
        47080170,
        47080010,
        47079687,
        47083782,
        47082138,
        47080391,
        47082972,
        47080152,
        47072637,
        47080341,
        47079767,
        47082981,
        47083016,
        47072197,
        47082657,
        47083395,
        47080054,
        47083783,
        47070084,
        47076224,
        47080339,
        47067332,
        47079526,
        47082029,
        47068953
      ],
      "score": 263,
      "text": "<a href=\"https:&#x2F;&#x2F;freedom.gov\" rel=\"nofollow\">https:&#x2F;&#x2F;freedom.gov</a>",
      "time": 1771453513,
      "title": "US plans online portal to bypass content bans in Europe and elsewhere",
      "type": "story",
      "url": "https://www.reuters.com/world/us-plans-online-portal-bypass-content-bans-europe-elsewhere-2026-02-18/"
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
      "title": "The Missing Semester of Your CS Education",
      "url": "https://missing.csail.mit.edu/",
      "score": 66,
      "comments": 9,
      "tags": [
        "compsci",
        "education",
        "practices",
        "unix"
      ],
      "id": "q4ykw7"
    },
    {
      "title": "Choosing a Language Based on its Syntax?",
      "url": "https://www.gingerbill.org/article/2026/02/19/choosing-a-language-based-on-syntax/",
      "score": 29,
      "comments": 28,
      "tags": [
        "design",
        "plt",
        "programming"
      ],
      "id": "jkvtew"
    },
    {
      "title": "Hold on to Your Hardware",
      "url": "https://マリウス.com/hold-on-to-your-hardware/",
      "score": 28,
      "comments": 2,
      "tags": [
        "ai",
        "hardware",
        "privacy"
      ],
      "id": "zpotiy"
    },
    {
      "title": "AI makes you boring",
      "url": "https://www.marginalia.nu/log/a_132_ai_bores/",
      "score": 28,
      "comments": 7,
      "tags": [
        "vibecoding"
      ],
      "id": "fgkcxo"
    },
    {
      "title": "Linux CVE assignment process",
      "url": "http://www.kroah.com/log/blog/2026/02/16/linux-cve-assignment-process/",
      "score": 24,
      "comments": 6,
      "tags": [
        "linux",
        "security"
      ],
      "id": "rn4g9a"
    },
    {
      "title": "Paged Out! #8",
      "url": "https://pagedout.institute/download/PagedOut_008.pdf",
      "score": 66,
      "comments": 8,
      "tags": [
        "ai",
        "pdf",
        "programming",
        "security"
      ],
      "id": "bzqteq"
    },
    {
      "title": "how openai, the US government, and persona built an identity surveillance machine that files reports on you to the feds",
      "url": "https://vmfunc.re/blog/persona/",
      "score": 134,
      "comments": 25,
      "tags": [
        "security"
      ],
      "id": "yyqxg6"
    },
    {
      "title": "Resurrecting _why's Dream",
      "url": "https://schwadlabs.io/blog/resurrecting-whys-dream",
      "score": 16,
      "comments": 7,
      "tags": [
        "ruby",
        "vibecoding"
      ],
      "id": "df1p8i"
    },
    {
      "title": "Every app you've built is an ETL pipeline (you just didn't call it that)",
      "url": "https://www.inngest.com/blog/etl-via-inngest",
      "score": 4,
      "comments": 7,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "9zos31"
    },
    {
      "title": "Using the Browser’s <canvas> for Data Compression",
      "url": "https://jstrieb.github.io/posts/canvas-compress/",
      "score": 14,
      "comments": 2,
      "tags": [
        "browsers",
        "javascript",
        "web"
      ],
      "id": "vrru3d"
    }
  ]
}
```

