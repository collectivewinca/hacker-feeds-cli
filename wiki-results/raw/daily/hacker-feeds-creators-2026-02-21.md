# Hacker Feeds Outcomes - Creators

Generated on: 2026-02-21 07:01:19 UTC

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
      "reactions": 342,
      "comments": 85,
      "reading_time": 6,
      "author": "ben"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-5a3g",
      "tags": "weeklyretro, discuss",
      "reactions": 21,
      "comments": 30,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Congrats to the \"New Year, New You\" Portfolio Challenge Winners and Runner-Ups!",
      "description": "The results are in! We are thrilled to announce the winners of the New Year, New You Portfolio...",
      "url": "https://dev.to/devteam/congrats-to-the-new-year-new-you-portfolio-challenge-winners-and-runner-ups-1l9h",
      "tags": "devchallenge, googleaichallenge, gemini, career",
      "reactions": 74,
      "comments": 30,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "Why did you become a Developer?",
      "description": "We all have our origin stories. Maybe you were born to become a programmer or you started off when...",
      "url": "https://dev.to/francistrdev/why-did-you-become-a-developer-57ea",
      "tags": "discuss, community, programming, mentalhealth",
      "reactions": 46,
      "comments": 42,
      "reading_time": 2,
      "author": "francistrdev"
    },
    {
      "title": "What does MLH stand for?",
      "description": "Come up with incorrect expansions of the MLH initialism",
      "url": "https://dev.to/mellen/what-does-mlh-stand-for-2cbg",
      "tags": "jokes, watercooler, discuss, mlh",
      "reactions": 13,
      "comments": 14,
      "reading_time": 1,
      "author": "mellen"
    },
    {
      "title": "What Do You Want to Know About Antigravity?",
      "description": "Last week Jack Wotherspoon and @greggyb dove into skills, hooks, and Plan Mode on Google Cloud Live....",
      "url": "https://dev.to/devteam/what-do-you-want-to-know-about-antigravity-1o7a",
      "tags": "antigravity, discuss, gemini, ai",
      "reactions": 10,
      "comments": 1,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "The Meter Was Always Running",
      "description": "On the All-In podcast (episode #261), Jason Calacanis revealed his AI agents cost $300 a day. Each....",
      "url": "https://dev.to/dannwaneri/the-meter-was-always-running-44c4",
      "tags": "ai, webdev, career, discuss",
      "reactions": 16,
      "comments": 6,
      "reading_time": 5,
      "author": "dannwaneri"
    },
    {
      "title": "Suffering from BUGS: How I Almost Deleted My Entire Project",
      "description": "You know that iconic DJ Khaled album, \"Suffering from Success\"? The one where he looks overwhelmed by...",
      "url": "https://dev.to/maame-codes/suffering-from-bugs-how-i-almost-deleted-my-entire-project-1eef",
      "tags": "showdev, devops, python, typescript",
      "reactions": 83,
      "comments": 31,
      "reading_time": 5,
      "author": "maame-codes"
    },
    {
      "title": "Optimizing Shared GitLab Pipelines: Flexibility and Maintainability",
      "description": "Optimizing shared GitLab pipelines enhances flexibility and maintainability. Users can easily customize pipeline behavior by implementing variables as configuration points without compromising the original intent. While temporary workarounds exist, contributing to open-source projects to improve shared pipeline structures is highly recommended, especially during events like Hacktoberfest.",
      "url": "https://dev.to/rlespinasse/optimizing-shared-gitlab-pipelines-flexibility-and-maintainability-7p8",
      "tags": "gitlab, cicd",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "rlespinasse"
    },
    {
      "title": "Exploring Olympic Downhill Results with PHP Statistics",
      "description": "When Franjo von Allmen crossed the finish line in 111.61 seconds at the 2026 Olympic Downhill, he...",
      "url": "https://dev.to/robertobutti/exploring-olympic-downhill-results-with-php-statistics-3eo1",
      "tags": "php, statistics, programming, tutorial",
      "reactions": 1,
      "comments": 0,
      "reading_time": 7,
      "author": "robertobutti"
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
      "author": "SynkraAI",
      "repo": "aios-core",
      "avatar": "https://github.com/SynkraAI.png",
      "repo_link": "https://github.com/SynkraAI/aios-core",
      "desc": "Synkra AIOS: AI-Orchestrated System for Full Stack Development - Core Framework v4.0",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 1537,
      "forks": 553,
      "added_stars": 1159,
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
      "author": "yctimlin",
      "repo": "mcp_excalidraw",
      "avatar": "https://github.com/yctimlin.png",
      "repo_link": "https://github.com/yctimlin/mcp_excalidraw",
      "desc": "",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 1076,
      "forks": 96,
      "added_stars": 182,
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
      "author": "pshenok",
      "repo": "server-survival",
      "avatar": "https://github.com/pshenok.png",
      "repo_link": "https://github.com/pshenok/server-survival",
      "desc": "Tower defense game that teaches cloud architecture. Build infrastructure, survive traffic, learn scaling.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 5290,
      "forks": 614,
      "added_stars": 593,
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
      "author": "harvard-edge",
      "repo": "cs249r_book",
      "avatar": "https://github.com/harvard-edge.png",
      "repo_link": "https://github.com/harvard-edge/cs249r_book",
      "desc": "Introduction to Machine Learning Systems",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 20502,
      "forks": 2360,
      "added_stars": 2318,
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
      "author": "louislam",
      "repo": "uptime-kuma",
      "avatar": "https://github.com/louislam.png",
      "repo_link": "https://github.com/louislam/uptime-kuma",
      "desc": "A fancy self-hosted monitoring tool",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 83045,
      "forks": 7427,
      "added_stars": 293,
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
      "stars": 16753,
      "forks": 1528,
      "added_stars": 2912,
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
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, prompts, and configurations to help you make the most of GitHub Copilot.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 21920,
      "forks": 2513,
      "added_stars": 753,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
        },
        {
          "username": "codemillmatt",
          "href": "https://github.com/codemillmatt",
          "avatar": "https://avatars.githubusercontent.com/u/2053639"
        },
        {
          "username": "jhauga",
          "href": "https://github.com/jhauga",
          "avatar": "https://avatars.githubusercontent.com/u/10998676"
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
      "stars": 23332,
      "forks": 4757,
      "added_stars": 280,
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
      "stars": 22194,
      "forks": 839,
      "added_stars": 70,
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
      "author": "qist",
      "repo": "tvbox",
      "avatar": "https://github.com/qist.png",
      "repo_link": "https://github.com/qist/tvbox",
      "desc": "OK影视、tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 8172,
      "forks": 3031,
      "added_stars": 154,
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
      "author": "philc",
      "repo": "vimium",
      "avatar": "https://github.com/philc.png",
      "repo_link": "https://github.com/philc/vimium",
      "desc": "The hacker's browser.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 26080,
      "forks": 2561,
      "added_stars": 55,
      "builtBy": [
        {
          "username": "smblott-github",
          "href": "https://github.com/smblott-github",
          "avatar": "https://avatars.githubusercontent.com/u/2641335"
        },
        {
          "username": "philc",
          "href": "https://github.com/philc",
          "avatar": "https://avatars.githubusercontent.com/u/8598"
        },
        {
          "username": "mrmr1993",
          "href": "https://github.com/mrmr1993",
          "avatar": "https://avatars.githubusercontent.com/u/1847343"
        },
        {
          "username": "int3",
          "href": "https://github.com/int3",
          "avatar": "https://avatars.githubusercontent.com/u/228496"
        },
        {
          "username": "ilya",
          "href": "https://github.com/ilya",
          "avatar": "https://avatars.githubusercontent.com/u/4327"
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
      "stars": 5480,
      "forks": 481,
      "added_stars": 89,
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
    },
    {
      "author": "fanmingming",
      "repo": "live",
      "avatar": "https://github.com/fanmingming.png",
      "repo_link": "https://github.com/fanmingming/live",
      "desc": "✯ 可直连访问的电视/广播图标库与相关工具项目 ✯ 🔕 永久免费 直连访问 完整开源 不断完善的台标 支持IPv4/IPv6双栈访问 🔕",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 27673,
      "forks": 4167,
      "added_stars": 84,
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
      "title": "What Do You Want to Know About Antigravity?",
      "description": "Last week Jack Wotherspoon and @greggyb dove into skills, hooks, and Plan Mode on Google Cloud Live....",
      "url": "https://dev.to/devteam/what-do-you-want-to-know-about-antigravity-1o7a",
      "tags": "antigravity, discuss, gemini, ai",
      "reactions": 10,
      "comments": 1,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "The Meter Was Always Running",
      "description": "On the All-In podcast (episode #261), Jason Calacanis revealed his AI agents cost $300 a day. Each....",
      "url": "https://dev.to/dannwaneri/the-meter-was-always-running-44c4",
      "tags": "ai, webdev, career, discuss",
      "reactions": 16,
      "comments": 6,
      "reading_time": 5,
      "author": "dannwaneri"
    },
    {
      "title": "localhost to deploy..project that changed my thinking....",
      "description": "As a fresher stepping into software development, I initially focused on languages, frameworks, and...",
      "url": "https://dev.to/sourav_mahato_3900/localhost-to-deployproject-that-changed-my-thinking-5b75",
      "tags": "webdev, ai, javascript, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "sourav_mahato_3900"
    },
    {
      "title": "Your AI Agents Need an Org Chart — But Not the Kind You Think",
      "description": "I run a small healthcare SaaS. Solo founder, Python/FastAPI backend, React frontend, German-hosted...",
      "url": "https://dev.to/philippenderle/your-ai-agents-need-an-org-chart-but-not-the-kind-you-think-2fg7",
      "tags": "ai, agents, architecture, opensource",
      "reactions": 1,
      "comments": 2,
      "reading_time": 7,
      "author": "philippenderle"
    },
    {
      "title": "AI Coding Tools and the Runtime Context Gap",
      "description": "Current AI coding tools operate on source files. They read your code, predict what the application...",
      "url": "https://dev.to/bluehotdog/ai-coding-tools-and-the-runtime-context-gap-33ai",
      "tags": "ai, programming, tooling, agents",
      "reactions": 5,
      "comments": 0,
      "reading_time": 8,
      "author": "bluehotdog"
    },
    {
      "title": "AI Agents Are Making Decisions Nobody Can Audit",
      "description": "Last month, a developer posted on Reddit about an AI agent that got stuck in a loop and fired off...",
      "url": "https://dev.to/nostalgicskinco/ai-agents-are-making-decisions-nobody-can-audit-2gpn",
      "tags": "ai, opensource, security, devops",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "nostalgicskinco"
    },
    {
      "title": "Building an AI Agent Hiring Marketplace on Kubernetes with kagent",
      "description": "What happens when AI agents need to hire each other? We built HireWire — a Kubernetes-native marketplace where agents discover, negotiate, hire, and pay one another using MCP tools and x402 micropayments.",
      "url": "https://dev.to/opspawn/building-an-ai-agent-hiring-marketplace-on-kubernetes-with-kagent-1dag",
      "tags": "kubernetes, ai, mcp, agents",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "opspawn"
    },
    {
      "title": "Drupal Canvas Full HTML rollout guide",
      "description": "I turned my Drupal Canvas Full HTML notes into a clear rollout guide and backed it with a runnable...",
      "url": "https://dev.to/victorstackai/drupal-canvas-full-html-rollout-guide-1b5m",
      "tags": "devlog, agents, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "victorstackai"
    },
    {
      "title": "I Built a Package Manager for MCP Servers in One Day",
      "description": "Ever tried setting up MCP servers for Claude Code or Cursor? You end up copy-pasting JSON configs,...",
      "url": "https://dev.to/lakshmisravyavedantham/i-built-a-package-manager-for-mcp-servers-in-one-day-lmg",
      "tags": "python, ai, opensource, cli",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "lakshmisravyavedantham"
    },
    {
      "title": "GEO (Generative Engine Optimization): Why Your Website Might Be Invisible to AI in 2026",
      "description": "I was staring at my server logs last week, trying to make sense of a weird trend. My Google organic...",
      "url": "https://dev.to/kazkn/geo-generative-engine-optimization-why-your-website-might-be-invisible-to-ai-in-2026-df7",
      "tags": "ai, seo, webdev, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "kazkn"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "LorenDB",
      "descendants": 502,
      "id": 47091419,
      "kids": [
        47091612,
        47092274,
        47092480,
        47092304,
        47091638,
        47091614,
        47097259,
        47092407,
        47095110,
        47091576,
        47095003,
        47096638,
        47091893,
        47096322,
        47097237,
        47096748,
        47095689,
        47096497,
        47096703,
        47097403,
        47094421,
        47096827,
        47093882,
        47093535,
        47094292,
        47096910,
        47094415,
        47095063,
        47094414,
        47093885,
        47096332,
        47094517,
        47092627,
        47094097,
        47092621,
        47094168,
        47091896,
        47091581,
        47094648,
        47094024,
        47093097,
        47094549,
        47092345,
        47095763,
        47093728,
        47091538,
        47092111,
        47093720,
        47093707,
        47095729,
        47095727,
        47097594,
        47092662,
        47091943
      ],
      "score": 1321,
      "time": 1771610331,
      "title": "Keep Android Open",
      "type": "story",
      "url": "https://f-droid.org/2026/02/20/twif.html"
    },
    {
      "by": "zenincognito",
      "descendants": 33,
      "id": 47097502,
      "kids": [
        47098204,
        47098107,
        47098201,
        47098174,
        47098066,
        47097972,
        47098076,
        47098149,
        47098017,
        47097963,
        47098044,
        47098115,
        47098098,
        47097974,
        47098090,
        47098046,
        47098095,
        47097985,
        47098091,
        47098011
      ],
      "score": 73,
      "time": 1771648180,
      "title": "Meta Deployed AI and It Is Killing Our Agency",
      "type": "story",
      "url": "https://mojodojo.io/blog/meta-is-systematically-killing-our-agency/"
    },
    {
      "by": "todsacerdoti",
      "descendants": 100,
      "id": 47094192,
      "kids": [
        47094795,
        47094651,
        47098178,
        47095402,
        47095058,
        47095265,
        47096282,
        47094519,
        47094661,
        47095621,
        47094742,
        47094817,
        47095427,
        47095044,
        47094897,
        47096055,
        47094599,
        47096045,
        47096221,
        47096648,
        47094526,
        47094562,
        47094758,
        47097517,
        47095239,
        47096281,
        47096047
      ],
      "score": 384,
      "time": 1771622741,
      "title": "Turn Dependabot Off",
      "type": "story",
      "url": "https://words.filippo.io/dependabot/"
    },
    {
      "by": "toomuchtodo",
      "descendants": 204,
      "id": 47092578,
      "kids": [
        47094181,
        47097670,
        47094876,
        47093656,
        47093066,
        47093570,
        47095267,
        47096036,
        47095307,
        47096008,
        47093738,
        47094076,
        47095859,
        47094259,
        47093026,
        47097475,
        47093334,
        47094830,
        47093275,
        47098180,
        47093416,
        47093294,
        47094922,
        47094467,
        47095747,
        47094908,
        47096257,
        47094931,
        47094336,
        47096954,
        47096390,
        47093955,
        47093067,
        47093758,
        47096375,
        47093833,
        47095971,
        47093453,
        47095589,
        47093037,
        47096051,
        47093861,
        47093914,
        47094759,
        47093842,
        47093074,
        47095847,
        47096315,
        47096065,
        47093558,
        47097488
      ],
      "score": 484,
      "time": 1771615198,
      "title": "I found a Vulnerability. They found a Lawyer",
      "type": "story",
      "url": "https://dixken.de/blog/i-found-a-vulnerability-they-found-a-lawyer"
    },
    {
      "by": "npilk",
      "descendants": 539,
      "id": 47091748,
      "kids": [
        47093428,
        47093470,
        47091961,
        47091862,
        47092400,
        47091985,
        47098120,
        47096489,
        47092327,
        47093123,
        47093390,
        47094584,
        47098124,
        47097620,
        47092148,
        47097894,
        47095374,
        47091922,
        47092178,
        47097654,
        47097084,
        47096297,
        47092085,
        47097944,
        47095940,
        47097875,
        47097632,
        47097559,
        47097917,
        47097886,
        47091895,
        47091869,
        47093240,
        47092109,
        47097970,
        47096095,
        47093880,
        47095431,
        47094971,
        47093424,
        47092663,
        47092288,
        47097391,
        47093750,
        47096159,
        47096752,
        47093202,
        47093229,
        47091965,
        47095741,
        47091957,
        47093322,
        47095579,
        47092978,
        47095716,
        47094468,
        47092167,
        47092191,
        47093902,
        47095865,
        47095629,
        47097451,
        47092285,
        47092611,
        47094219,
        47095094,
        47097040,
        47097968,
        47095989,
        47093371,
        47092112,
        47095683,
        47092287,
        47095768,
        47094118,
        47091889,
        47095023,
        47091760,
        47092151,
        47093234,
        47092164,
        47097510,
        47091984,
        47097302,
        47091873,
        47094992,
        47094109,
        47091955,
        47092012,
        47092608,
        47092610,
        47094401,
        47094307,
        47094041,
        47093311,
        47092563,
        47096866,
        47094494,
        47092923,
        47092250,
        47093206,
        47096461,
        47094253,
        47097273,
        47096029,
        47092861,
        47096374,
        47091989,
        47094035,
        47094506,
        47093247,
        47095356,
        47094532,
        47094202,
        47094065,
        47094656,
        47095066,
        47094947,
        47095743,
        47092329,
        47094653,
        47094939,
        47096214,
        47091880,
        47093516,
        47093151,
        47093062,
        47095724,
        47093221,
        47095164,
        47095988,
        47094933,
        47094573,
        47091977,
        47094700,
        47092697,
        47094487,
        47093983,
        47093948,
        47092107,
        47094749,
        47093464,
        47093309,
        47091969,
        47093041,
        47092717,
        47092715,
        47092912,
        47096453,
        47092588,
        47091913,
        47092205,
        47092595,
        47092713,
        47091942,
        47096480,
        47092899,
        47092573,
        47092297,
        47091921,
        47091870,
        47093162,
        47093081,
        47092973,
        47092188,
        47092116,
        47092712,
        47093779,
        47095634,
        47096130,
        47096884,
        47092096,
        47092844
      ],
      "score": 952,
      "time": 1771611907,
      "title": "Facebook is cooked",
      "type": "story",
      "url": "https://pilk.website/3/facebook-is-absolutely-cooked"
    },
    {
      "by": "lairv",
      "descendants": 177,
      "id": 47088037,
      "kids": [
        47088506,
        47090880,
        47097816,
        47088312,
        47090563,
        47088236,
        47089605,
        47096411,
        47088499,
        47088771,
        47092403,
        47088541,
        47095842,
        47088233,
        47093514,
        47088764,
        47093312,
        47094984,
        47093383,
        47089525,
        47090696,
        47089042,
        47088735,
        47089643,
        47088416,
        47088261,
        47093682,
        47094296,
        47088836,
        47094667,
        47090012,
        47090517,
        47094491,
        47096288,
        47090642,
        47093950,
        47088277,
        47088225
      ],
      "score": 713,
      "time": 1771595464,
      "title": "Ggml.ai joins Hugging Face to ensure the long-term progress of Local AI",
      "type": "story",
      "url": "https://github.com/ggml-org/llama.cpp/discussions/19759"
    },
    {
      "by": "tylerdane",
      "descendants": 50,
      "id": 47095429,
      "kids": [
        47098152,
        47096633,
        47096057,
        47095430,
        47097514,
        47096712,
        47096041,
        47095705,
        47097002,
        47096894,
        47095919,
        47097175,
        47095648,
        47096898
      ],
      "score": 144,
      "time": 1771629552,
      "title": "CERN rebuilt the original browser from 1989 (2019)",
      "type": "story",
      "url": "https://worldwideweb.cern.ch"
    },
    {
      "by": "nobody9999",
      "descendants": 226,
      "id": 47092006,
      "kids": [
        47094695,
        47092909,
        47096564,
        47094574,
        47093712,
        47095907,
        47096739,
        47095480,
        47094078,
        47096366,
        47096528,
        47095877,
        47094919,
        47097384,
        47095248,
        47094244,
        47095518,
        47094387,
        47093659,
        47097531,
        47092142,
        47095326,
        47094303,
        47093110,
        47092648,
        47094636,
        47093273,
        47095214,
        47094555,
        47095288,
        47094001,
        47093771,
        47093515,
        47092351
      ],
      "score": 386,
      "text": "Related:<p><i>Archive.today is directing a DDoS attack against my blog</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=46843805\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=46843805</a> - Feb 2026 (168 comments)<p><i>Ask HN: Weird archive.today behavior?</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=46624740\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=46624740</a> - Jan 2026 (69 comments)",
      "time": 1771612941,
      "title": "Wikipedia deprecates Archive.today, starts removing archive links",
      "type": "story",
      "url": "https://arstechnica.com/tech-policy/2026/02/wikipedia-bans-archive-today-after-site-executed-ddos-and-altered-web-captures/"
    },
    {
      "by": "todsacerdoti",
      "descendants": 0,
      "id": 47047936,
      "score": 9,
      "time": 1771338979,
      "title": "The Evolution of x86 SIMD: From SSE to AVX-512",
      "type": "story",
      "url": "https://bgslabs.org/blog/evolution-of-x86-simd/"
    },
    {
      "by": "gnabgib",
      "descendants": 14,
      "id": 47065729,
      "kids": [
        47066820,
        47098096,
        47065762,
        47098127,
        47098173,
        47098157,
        47066029,
        47066976,
        47098050,
        47066191
      ],
      "score": 28,
      "time": 1771445533,
      "title": "Microsoft team creates 'revolutionary' data storage system that lasts millennia",
      "type": "story",
      "url": "https://www.nature.com/articles/d41586-026-00502-2"
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
      "by": "LorenDB",
      "descendants": 502,
      "id": 47091419,
      "kids": [
        47091612,
        47092274,
        47092480,
        47092304,
        47091638,
        47091614,
        47097259,
        47092407,
        47095110,
        47091576,
        47095003,
        47096638,
        47091893,
        47096322,
        47097237,
        47096748,
        47095689,
        47096497,
        47096703,
        47097403,
        47094421,
        47096827,
        47093882,
        47093535,
        47094292,
        47096910,
        47094415,
        47095063,
        47094414,
        47093885,
        47096332,
        47094517,
        47092627,
        47094097,
        47092621,
        47094168,
        47091896,
        47091581,
        47094648,
        47094024,
        47093097,
        47094549,
        47092345,
        47095763,
        47093728,
        47091538,
        47092111,
        47093720,
        47093707,
        47095729,
        47095727,
        47097594,
        47092662,
        47091943
      ],
      "score": 1321,
      "time": 1771610331,
      "title": "Keep Android Open",
      "type": "story",
      "url": "https://f-droid.org/2026/02/20/twif.html"
    },
    {
      "by": "zenincognito",
      "descendants": 33,
      "id": 47097502,
      "kids": [
        47098204,
        47098107,
        47098201,
        47098174,
        47098066,
        47097972,
        47098076,
        47098149,
        47098017,
        47097963,
        47098044,
        47098115,
        47098098,
        47097974,
        47098090,
        47098046,
        47098095,
        47097985,
        47098091,
        47098011
      ],
      "score": 73,
      "time": 1771648180,
      "title": "Meta Deployed AI and It Is Killing Our Agency",
      "type": "story",
      "url": "https://mojodojo.io/blog/meta-is-systematically-killing-our-agency/"
    },
    {
      "by": "todsacerdoti",
      "descendants": 100,
      "id": 47094192,
      "kids": [
        47094795,
        47094651,
        47098178,
        47095402,
        47095058,
        47095265,
        47096282,
        47094519,
        47094661,
        47095621,
        47094742,
        47094817,
        47095427,
        47095044,
        47094897,
        47096055,
        47094599,
        47096045,
        47096221,
        47096648,
        47094526,
        47094562,
        47094758,
        47097517,
        47095239,
        47096281,
        47096047
      ],
      "score": 384,
      "time": 1771622741,
      "title": "Turn Dependabot Off",
      "type": "story",
      "url": "https://words.filippo.io/dependabot/"
    },
    {
      "by": "toomuchtodo",
      "descendants": 204,
      "id": 47092578,
      "kids": [
        47094181,
        47097670,
        47094876,
        47093656,
        47093066,
        47093570,
        47095267,
        47096036,
        47095307,
        47096008,
        47093738,
        47094076,
        47095859,
        47094259,
        47093026,
        47097475,
        47093334,
        47094830,
        47093275,
        47098180,
        47093416,
        47093294,
        47094922,
        47094467,
        47095747,
        47094908,
        47096257,
        47094931,
        47094336,
        47096954,
        47096390,
        47093955,
        47093067,
        47093758,
        47096375,
        47093833,
        47095971,
        47093453,
        47095589,
        47093037,
        47096051,
        47093861,
        47093914,
        47094759,
        47093842,
        47093074,
        47095847,
        47096315,
        47096065,
        47093558,
        47097488
      ],
      "score": 484,
      "time": 1771615198,
      "title": "I found a Vulnerability. They found a Lawyer",
      "type": "story",
      "url": "https://dixken.de/blog/i-found-a-vulnerability-they-found-a-lawyer"
    },
    {
      "by": "npilk",
      "descendants": 539,
      "id": 47091748,
      "kids": [
        47093428,
        47093470,
        47091961,
        47091862,
        47092400,
        47091985,
        47098120,
        47096489,
        47092327,
        47093123,
        47093390,
        47094584,
        47098124,
        47097620,
        47092148,
        47097894,
        47095374,
        47091922,
        47092178,
        47097654,
        47097084,
        47096297,
        47092085,
        47097944,
        47095940,
        47097875,
        47097632,
        47097559,
        47097917,
        47097886,
        47091895,
        47091869,
        47093240,
        47092109,
        47097970,
        47096095,
        47093880,
        47095431,
        47094971,
        47093424,
        47092663,
        47092288,
        47097391,
        47093750,
        47096159,
        47096752,
        47093202,
        47093229,
        47091965,
        47095741,
        47091957,
        47093322,
        47095579,
        47092978,
        47095716,
        47094468,
        47092167,
        47092191,
        47093902,
        47095865,
        47095629,
        47097451,
        47092285,
        47092611,
        47094219,
        47095094,
        47097040,
        47097968,
        47095989,
        47093371,
        47092112,
        47095683,
        47092287,
        47095768,
        47094118,
        47091889,
        47095023,
        47091760,
        47092151,
        47093234,
        47092164,
        47097510,
        47091984,
        47097302,
        47091873,
        47094992,
        47094109,
        47091955,
        47092012,
        47092608,
        47092610,
        47094401,
        47094307,
        47094041,
        47093311,
        47092563,
        47096866,
        47094494,
        47092923,
        47092250,
        47093206,
        47096461,
        47094253,
        47097273,
        47096029,
        47092861,
        47096374,
        47091989,
        47094035,
        47094506,
        47093247,
        47095356,
        47094532,
        47094202,
        47094065,
        47094656,
        47095066,
        47094947,
        47095743,
        47092329,
        47094653,
        47094939,
        47096214,
        47091880,
        47093516,
        47093151,
        47093062,
        47095724,
        47093221,
        47095164,
        47095988,
        47094933,
        47094573,
        47091977,
        47094700,
        47092697,
        47094487,
        47093983,
        47093948,
        47092107,
        47094749,
        47093464,
        47093309,
        47091969,
        47093041,
        47092717,
        47092715,
        47092912,
        47096453,
        47092588,
        47091913,
        47092205,
        47092595,
        47092713,
        47091942,
        47096480,
        47092899,
        47092573,
        47092297,
        47091921,
        47091870,
        47093162,
        47093081,
        47092973,
        47092188,
        47092116,
        47092712,
        47093779,
        47095634,
        47096130,
        47096884,
        47092096,
        47092844
      ],
      "score": 952,
      "time": 1771611907,
      "title": "Facebook is cooked",
      "type": "story",
      "url": "https://pilk.website/3/facebook-is-absolutely-cooked"
    },
    {
      "by": "lairv",
      "descendants": 177,
      "id": 47088037,
      "kids": [
        47088506,
        47090880,
        47097816,
        47088312,
        47090563,
        47088236,
        47089605,
        47096411,
        47088499,
        47088771,
        47092403,
        47088541,
        47095842,
        47088233,
        47093514,
        47088764,
        47093312,
        47094984,
        47093383,
        47089525,
        47090696,
        47089042,
        47088735,
        47089643,
        47088416,
        47088261,
        47093682,
        47094296,
        47088836,
        47094667,
        47090012,
        47090517,
        47094491,
        47096288,
        47090642,
        47093950,
        47088277,
        47088225
      ],
      "score": 713,
      "time": 1771595464,
      "title": "Ggml.ai joins Hugging Face to ensure the long-term progress of Local AI",
      "type": "story",
      "url": "https://github.com/ggml-org/llama.cpp/discussions/19759"
    },
    {
      "by": "tylerdane",
      "descendants": 50,
      "id": 47095429,
      "kids": [
        47098152,
        47096633,
        47096057,
        47095430,
        47097514,
        47096712,
        47096041,
        47095705,
        47097002,
        47096894,
        47095919,
        47097175,
        47095648,
        47096898
      ],
      "score": 144,
      "time": 1771629552,
      "title": "CERN rebuilt the original browser from 1989 (2019)",
      "type": "story",
      "url": "https://worldwideweb.cern.ch"
    },
    {
      "by": "nobody9999",
      "descendants": 226,
      "id": 47092006,
      "kids": [
        47094695,
        47092909,
        47096564,
        47094574,
        47093712,
        47095907,
        47096739,
        47095480,
        47094078,
        47096366,
        47096528,
        47095877,
        47094919,
        47097384,
        47095248,
        47094244,
        47095518,
        47094387,
        47093659,
        47097531,
        47092142,
        47095326,
        47094303,
        47093110,
        47092648,
        47094636,
        47093273,
        47095214,
        47094555,
        47095288,
        47094001,
        47093771,
        47093515,
        47092351
      ],
      "score": 386,
      "text": "Related:<p><i>Archive.today is directing a DDoS attack against my blog</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=46843805\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=46843805</a> - Feb 2026 (168 comments)<p><i>Ask HN: Weird archive.today behavior?</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=46624740\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=46624740</a> - Jan 2026 (69 comments)",
      "time": 1771612941,
      "title": "Wikipedia deprecates Archive.today, starts removing archive links",
      "type": "story",
      "url": "https://arstechnica.com/tech-policy/2026/02/wikipedia-bans-archive-today-after-site-executed-ddos-and-altered-web-captures/"
    },
    {
      "by": "todsacerdoti",
      "descendants": 0,
      "id": 47047936,
      "score": 9,
      "time": 1771338979,
      "title": "The Evolution of x86 SIMD: From SSE to AVX-512",
      "type": "story",
      "url": "https://bgslabs.org/blog/evolution-of-x86-simd/"
    },
    {
      "by": "gnabgib",
      "descendants": 14,
      "id": 47065729,
      "kids": [
        47066820,
        47098096,
        47065762,
        47098127,
        47098173,
        47098157,
        47066029,
        47066976,
        47098050,
        47066191
      ],
      "score": 28,
      "time": 1771445533,
      "title": "Microsoft team creates 'revolutionary' data storage system that lasts millennia",
      "type": "story",
      "url": "https://www.nature.com/articles/d41586-026-00502-2"
    },
    {
      "by": "cratermoon",
      "descendants": 18,
      "id": 47096520,
      "kids": [
        47097177,
        47096957,
        47097388,
        47097117,
        47096977,
        47097369,
        47097093,
        47097026,
        47097139,
        47097113
      ],
      "score": 87,
      "time": 1771637620,
      "title": "What Is OAuth?",
      "type": "story",
      "url": "https://leaflet.pub/p/did:plc:3vdrgzr2zybocs45yfhcr6ur/3mfd2oxx5v22b"
    },
    {
      "by": "ingve",
      "descendants": 15,
      "id": 47058584,
      "kids": [
        47098202,
        47097687,
        47097427,
        47097300,
        47097248,
        47097658
      ],
      "score": 61,
      "time": 1771402817,
      "title": "Index, Count, Offset, Size",
      "type": "story",
      "url": "https://tigerbeetle.com/blog/2026-02-16-index-count-offset-size/"
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
      "title": "Lobsters Interview with steveklabnik",
      "url": "https://alexalejandre.com/programming/steve-klabnik-interview/",
      "score": 45,
      "comments": 8,
      "tags": [
        "interview",
        "person",
        "vibecoding"
      ],
      "id": "w1bsle"
    },
    {
      "title": "Turn Dependabot Off",
      "url": "https://words.filippo.io/dependabot/",
      "score": 44,
      "comments": 4,
      "tags": [
        "go",
        "security"
      ],
      "id": "gscaw3"
    },
    {
      "title": "Brat, a parallel TAP testing harness for the POSIX shell",
      "url": "https://codeberg.org/sstephenson/brat",
      "score": 31,
      "comments": 7,
      "tags": [
        "unix"
      ],
      "id": "wul2hi"
    },
    {
      "title": "\"Made in EU\" - it was harder than I thought",
      "url": "https://www.coinerella.com/made-in-eu-it-was-harder-than-i-thought/",
      "score": 48,
      "comments": 11,
      "tags": [
        "practices"
      ],
      "id": "5iucri"
    },
    {
      "title": "Death to Scroll Fade",
      "url": "https://dbushell.com/2026/01/09/death-to-scroll-fade/",
      "score": 32,
      "comments": 9,
      "tags": [
        "a11y",
        "css",
        "web"
      ],
      "id": "bi9wsi"
    },
    {
      "title": "eBPF the Hard Way",
      "url": "https://feyor.sh/blog/ebpf-the-hard-way",
      "score": 29,
      "comments": 3,
      "tags": [
        "assembly",
        "zig"
      ],
      "id": "6yjefp"
    },
    {
      "title": "IPv6 Adoption in 2026",
      "url": "https://www.netmeister.org/blog/ipv6-adoption.html",
      "score": 24,
      "comments": 31,
      "tags": [
        "networking"
      ],
      "id": "rxsphs"
    },
    {
      "title": "A Beginner’s Guide to Split Keyboards",
      "url": "https://justinmklam.com/posts/2026/02/beginners-guide-split-keyboards/",
      "score": 18,
      "comments": 11,
      "tags": [
        "hardware"
      ],
      "id": "t760l8"
    },
    {
      "title": "I found a Vulnerability. They found a Lawyer",
      "url": "https://dixken.de/blog/i-found-a-vulnerability-they-found-a-lawyer",
      "score": 18,
      "comments": 3,
      "tags": [
        "security"
      ],
      "id": "vpxzhe"
    },
    {
      "title": "joinirc.at: Link to your IRC server on any client to onboard new users",
      "url": "https://joinirc.at",
      "score": 6,
      "comments": 3,
      "tags": [
        "show",
        "web"
      ],
      "id": "slfm4t"
    }
  ]
}
```

