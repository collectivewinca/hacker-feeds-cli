# Hacker Feeds Outcomes - Creators

Generated on: 2026-02-25 07:16:33 UTC

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
      "title": "Once Upon a Time, Writing Code Was Fun",
      "description": "I’m one of those developers who’s had the privilege of writing code by hand in its rawest form, the...",
      "url": "https://dev.to/ismail9k/once-upon-a-time-writing-code-was-fun-62",
      "tags": "ai, programming, development",
      "reactions": 18,
      "comments": 5,
      "reading_time": 4,
      "author": "ismail9k"
    },
    {
      "title": "The Increasing Need for Human Connection in the Age of AI",
      "description": "Is it just me, or are tech events and communities on the rise?  I’ve been thinking about this lately,...",
      "url": "https://dev.to/javz/the-increasing-need-for-human-connection-in-the-age-of-ai-43cd",
      "tags": "ai, community, career, growth",
      "reactions": 38,
      "comments": 32,
      "reading_time": 3,
      "author": "javz"
    },
    {
      "title": "Understanding Gitaly and Kernel Memory Consumption in Kubernetes on Self-Hosted GitLab",
      "description": "During the early hours of the morning, I started receiving Gitaly alerts — memory spikes that weren't...",
      "url": "https://dev.to/camilacodes/understanding-gitaly-and-kernel-memory-consumption-in-kubernetes-on-self-hosted-gitlab-2je3",
      "tags": "gitlab, linux, kernel, devops",
      "reactions": 7,
      "comments": 0,
      "reading_time": 4,
      "author": "camilacodes"
    },
    {
      "title": "Think of AI-assisted coding as calculators in math classes. You can't use them until you know the procedure you want to automate by hand.",
      "description": "A Quick Recovery Guide for AI-Dependent Coders       Cesar...",
      "url": "https://dev.to/canro91/think-of-ai-assisted-coding-as-calculators-in-math-classes-you-cant-use-them-until-you-know-the-2dlh",
      "tags": "beginners, ai, coding, softwaredevelopment",
      "reactions": 2,
      "comments": 0,
      "reading_time": 1,
      "author": "canro91"
    },
    {
      "title": "Software 3.1? - AI Functions",
      "description": "Andrej Karpathy has a version numbering scheme for how software gets written. Software 1.0 is code...",
      "url": "https://dev.to/aws/software-31-ai-functions-5acn",
      "tags": "ai, llm, programming, softwaredevelopment",
      "reactions": 20,
      "comments": 3,
      "reading_time": 13,
      "author": "mikegcaws"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-2phc",
      "tags": "top7, discuss",
      "reactions": 43,
      "comments": 8,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "I Said Yes to Everything for a Year. Here's What It Cost Me.",
      "description": "It is 3:14 AM on a Tuesday, and your heart is beating with the rhythmic intensity of a kick drum in a...",
      "url": "https://dev.to/chandravijayagr/i-said-yes-to-everything-for-a-year-heres-what-it-cost-me-35ib",
      "tags": "personal",
      "reactions": 10,
      "comments": 0,
      "reading_time": 9,
      "author": "chandravijayagr"
    },
    {
      "title": "Domain-First Nx Monorepos: Using `packages/` to Make Ownership and Boundaries Obvious",
      "description": "Where should this go? Which apps are using this library?  Those two questions are plaguing my team as...",
      "url": "https://dev.to/codenamegrant/domain-first-nx-monorepos-using-packages-to-make-ownership-and-boundaries-obvious-4h5g",
      "tags": "nx, typescript, architecture, monorepo",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "codenamegrant"
    },
    {
      "title": "We Ran 180 AI Agent Shopping Sessions Across 11 Models and 20 Stores. Here's What We Found",
      "description": "Postman didn't become essential by testing APIs. It became essential by showing developers what was...",
      "url": "https://dev.to/benjifisher/we-ran-180-ai-agent-shopping-sessions-across-11-models-and-20-stores-heres-what-we-found-2884",
      "tags": "ucp, postman, playground, agents",
      "reactions": 5,
      "comments": 2,
      "reading_time": 10,
      "author": "benjifisher"
    },
    {
      "title": "A Quick Recovery Guide for AI-Dependent Coders",
      "description": "Technology makes us lazy.  That's not an opinion but a fact. We can't do mental math, find addresses,...",
      "url": "https://dev.to/canro91/a-quick-recovery-guide-for-ai-dependent-coders-4112",
      "tags": "beginners, ai, coding, softwaredevelopment",
      "reactions": 52,
      "comments": 23,
      "reading_time": 4,
      "author": "canro91"
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
      "stars": 0,
      "forks": 623,
      "added_stars": 707,
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
      "stars": 0,
      "forks": 107,
      "added_stars": 219,
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
      "author": "eslint",
      "repo": "eslint",
      "avatar": "https://github.com/eslint.png",
      "repo_link": "https://github.com/eslint/eslint",
      "desc": "Find and fix problems in your JavaScript code.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4929,
      "added_stars": 218,
      "builtBy": [
        {
          "username": "nzakas",
          "href": "https://github.com/nzakas",
          "avatar": "https://avatars.githubusercontent.com/u/38546"
        },
        {
          "username": "mdjermanovic",
          "href": "https://github.com/mdjermanovic",
          "avatar": "https://avatars.githubusercontent.com/u/44349756"
        },
        {
          "username": "ilyavolodin",
          "href": "https://github.com/ilyavolodin",
          "avatar": "https://avatars.githubusercontent.com/u/1380062"
        },
        {
          "username": "not-an-aardvark",
          "href": "https://github.com/not-an-aardvark",
          "avatar": "https://avatars.githubusercontent.com/u/11638619"
        },
        {
          "username": "mysticatea",
          "href": "https://github.com/mysticatea",
          "avatar": "https://avatars.githubusercontent.com/u/1937871"
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
      "stars": 0,
      "forks": 2435,
      "added_stars": 2043,
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
      "author": "Stremio",
      "repo": "stremio-web",
      "avatar": "https://github.com/Stremio.png",
      "repo_link": "https://github.com/Stremio/stremio-web",
      "desc": "Stremio - Freedom to Stream",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1088,
      "added_stars": 1087,
      "builtBy": [
        {
          "username": "nklhtv",
          "href": "https://github.com/nklhtv",
          "avatar": "https://avatars.githubusercontent.com/u/5950722"
        },
        {
          "username": "tymmesyde",
          "href": "https://github.com/tymmesyde",
          "avatar": "https://avatars.githubusercontent.com/u/7889816"
        },
        {
          "username": "kKaskak",
          "href": "https://github.com/kKaskak",
          "avatar": "https://avatars.githubusercontent.com/u/117831817"
        },
        {
          "username": "swetlasg",
          "href": "https://github.com/swetlasg",
          "avatar": "https://avatars.githubusercontent.com/u/15102316"
        },
        {
          "username": "Botsy",
          "href": "https://github.com/Botsy",
          "avatar": "https://avatars.githubusercontent.com/u/10400528"
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
      "stars": 0,
      "forks": 7438,
      "added_stars": 338,
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
      "stars": 0,
      "forks": 1734,
      "added_stars": 4027,
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
          "username": "Solvely-Colin",
          "href": "https://github.com/Solvely-Colin",
          "avatar": "https://avatars.githubusercontent.com/u/211764741"
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
      "forks": 663,
      "added_stars": 121,
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
      "author": "SillyTavern",
      "repo": "SillyTavern",
      "avatar": "https://github.com/SillyTavern.png",
      "repo_link": "https://github.com/SillyTavern/SillyTavern",
      "desc": "LLM Frontend for Power Users.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4785,
      "added_stars": 331,
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
      "author": "anuraghazra",
      "repo": "github-readme-stats",
      "avatar": "https://github.com/anuraghazra.png",
      "repo_link": "https://github.com/anuraghazra/github-readme-stats",
      "desc": "⚡ Dynamically generated stats for your github readmes",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 30915,
      "added_stars": 124,
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
      "author": "spicetify",
      "repo": "cli",
      "avatar": "https://github.com/spicetify.png",
      "repo_link": "https://github.com/spicetify/cli",
      "desc": "Command-line tool to customize Spotify client. Supports Windows, macOS, and Linux.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 838,
      "added_stars": 75,
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
      "author": "axios",
      "repo": "axios",
      "avatar": "https://github.com/axios.png",
      "repo_link": "https://github.com/axios/axios",
      "desc": "Promise based HTTP client for the browser and node.js",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 11533,
      "added_stars": 51,
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
      "title": "Once Upon a Time, Writing Code Was Fun",
      "description": "I’m one of those developers who’s had the privilege of writing code by hand in its rawest form, the...",
      "url": "https://dev.to/ismail9k/once-upon-a-time-writing-code-was-fun-62",
      "tags": "ai, programming, development",
      "reactions": 19,
      "comments": 5,
      "reading_time": 4,
      "author": "ismail9k"
    },
    {
      "title": "The Increasing Need for Human Connection in the Age of AI",
      "description": "Is it just me, or are tech events and communities on the rise?  I’ve been thinking about this lately,...",
      "url": "https://dev.to/javz/the-increasing-need-for-human-connection-in-the-age-of-ai-43cd",
      "tags": "ai, community, career, growth",
      "reactions": 39,
      "comments": 32,
      "reading_time": 3,
      "author": "javz"
    },
    {
      "title": "💥How to Reduce Stress for Free (Mega Bazooka with React Three Fiber + AI)💥",
      "description": "Update (2026/02/24): Added feature to reduce much stress. Gold Fountain with Mega Bazooka          ...",
      "url": "https://dev.to/webdeveloperhyper/how-to-reduce-stress-for-free-mega-bazooka-with-react-three-fiber-ai-4n50",
      "tags": "ai, webdev, graphql, a11y",
      "reactions": 55,
      "comments": 26,
      "reading_time": 6,
      "author": "webdeveloperhyper"
    },
    {
      "title": "Think of AI-assisted coding as calculators in math classes. You can't use them until you know the procedure you want to automate by hand.",
      "description": "A Quick Recovery Guide for AI-Dependent Coders       Cesar...",
      "url": "https://dev.to/canro91/think-of-ai-assisted-coding-as-calculators-in-math-classes-you-cant-use-them-until-you-know-the-2dlh",
      "tags": "beginners, ai, coding, softwaredevelopment",
      "reactions": 2,
      "comments": 0,
      "reading_time": 1,
      "author": "canro91"
    },
    {
      "title": "Software 3.1? - AI Functions",
      "description": "Andrej Karpathy has a version numbering scheme for how software gets written. Software 1.0 is code...",
      "url": "https://dev.to/aws/software-31-ai-functions-5acn",
      "tags": "ai, llm, programming, softwaredevelopment",
      "reactions": 20,
      "comments": 3,
      "reading_time": 13,
      "author": "mikegcaws"
    },
    {
      "title": "Enterprise Integration Patterns Aren't Dead; They're Running on Kubernetes and Orchestrating AI",
      "description": "Enterprise Integration Patterns Aren't Dead; They're Running on Kubernetes and Orchestrating...",
      "url": "https://dev.to/dcruver/enterprise-integration-patterns-arent-dead-theyre-running-on-kubernetes-and-orchestrating-ai-30ol",
      "tags": "java, kubernetes, ai, architecture",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "dcruver"
    },
    {
      "title": "112 Battle-Tested Claude Code Skills — Every Bug Fix That Cost Me Hours So It Won't Cost You",
      "description": "AI coding assistants are powerful. They're also amnesiac.  Claude Code will help you fix a Docker...",
      "url": "https://dev.to/stklen/112-battle-tested-claude-code-skills-every-bug-fix-that-cost-me-hours-so-it-wont-cost-you-252e",
      "tags": "claudecode, ai, programming, webdev",
      "reactions": 1,
      "comments": 1,
      "reading_time": 5,
      "author": "stklen"
    },
    {
      "title": "How AI is Reducing Clinician Burnout in Modern Clinics",
      "description": "Imagine spending years becoming a doctor. The exams, the training, the sacrifice. And then you get...",
      "url": "https://dev.to/vaiu-ai/how-ai-is-reducing-clinician-burnout-in-modern-clinics-44hb",
      "tags": "ai, productivity, automation, startup",
      "reactions": 54,
      "comments": 20,
      "reading_time": 4,
      "author": "rmohitjoe"
    },
    {
      "title": "Protocol Launcher Series: One-Click Setup of Cherry Studio MCP Services and AI Models",
      "description": "In the previous article, we introduced how Protocol Launcher generates app-launch links in a...",
      "url": "https://dev.to/zhensherlock/protocol-launcher-series-one-click-setup-of-cherry-studio-mcp-services-and-ai-models-i5i",
      "tags": "ai, typescript, javascript, webdev",
      "reactions": 5,
      "comments": 0,
      "reading_time": 4,
      "author": "zhensherlock"
    },
    {
      "title": "The eval() Epidemic in MCP Servers: Three CVEs, One Root Cause",
      "description": "In February 2026, three separate MCP server vulnerabilities were published to NVD. All three allow...",
      "url": "https://dev.to/kai_security_ai/the-eval-epidemic-in-mcp-servers-three-cves-one-root-cause-2a1c",
      "tags": "security, mcp, vulnerability, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "kai_security_ai"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "cleak",
      "descendants": 226,
      "id": 47139675,
      "kids": [
        47141434,
        47140828,
        47146712,
        47148328,
        47140057,
        47148342,
        47140656,
        47148281,
        47148274,
        47142150,
        47140749,
        47141900,
        47140604,
        47140547,
        47147956,
        47140030,
        47143394,
        47146470,
        47144834,
        47147356,
        47140724,
        47140988,
        47145961,
        47142994,
        47142118,
        47140438,
        47146646,
        47140129,
        47146519,
        47145985,
        47140792,
        47142002,
        47145339,
        47145501,
        47147516,
        47140567,
        47147162,
        47140102,
        47140140,
        47140246,
        47146897,
        47140067,
        47140902,
        47146251,
        47145772,
        47148086,
        47147960,
        47142960,
        47147548,
        47144418,
        47145874,
        47143566,
        47145380,
        47141128,
        47140849,
        47145558,
        47146103,
        47143431,
        47140625,
        47142513,
        47140975,
        47140992,
        47140380,
        47141605,
        47147338,
        47144915,
        47140706,
        47146018,
        47142743,
        47142350,
        47147075,
        47140535,
        47143804,
        47140529,
        47141716,
        47140892,
        47145362,
        47142676,
        47146249,
        47140693,
        47141748,
        47140640,
        47140863,
        47140486,
        47140591,
        47145611,
        47140759,
        47145230,
        47140294,
        47140895,
        47141033,
        47142750,
        47142702,
        47140121,
        47142404,
        47140723,
        47142277,
        47140066,
        47141249,
        47144042,
        47146347,
        47140511,
        47140694,
        47141731,
        47140726,
        47146015,
        47140405,
        47146480,
        47146112,
        47142909,
        47140901
      ],
      "score": 827,
      "time": 1771953317,
      "title": "I'm helping my dog vibe code games",
      "type": "story",
      "url": "https://www.calebleak.com/posts/dog-game/"
    },
    {
      "by": "varjag",
      "descendants": 2,
      "id": 47110384,
      "kids": [
        47148362,
        47148329
      ],
      "score": 22,
      "time": 1771762359,
      "title": "Cl-kawa: Scheme on Java on Common Lisp",
      "type": "story",
      "url": "https://github.com/atgreen/cl-kawa"
    },
    {
      "by": "petewarden",
      "descendants": 40,
      "id": 47143755,
      "kids": [
        47145321,
        47146766,
        47148154,
        47147828,
        47147794,
        47146208,
        47146848,
        47145735,
        47145758,
        47144986,
        47145020,
        47145750,
        47145277,
        47145180,
        47146661,
        47147414,
        47146933,
        47145066,
        47146138,
        47145241,
        47147132,
        47145739,
        47144580,
        47144246,
        47145661
      ],
      "score": 214,
      "text": "I wanted to share our new speech to text model, and the library to use them effectively. We&#x27;re a small startup (six people, sub-$100k monthly GPU budget) so I&#x27;m proud of the work the team has done to create streaming STT models with lower word-error rates than OpenAI&#x27;s largest Whisper model. Admittedly Large v3 is a couple of years old, but we&#x27;re near the top the HF OpenASR leaderboard, even up against Nvidia&#x27;s Parakeet family. Anyway, I&#x27;d love to get feedback on the models and software, and hear about what people might build with it.",
      "time": 1771970047,
      "title": "Show HN: Moonshine Open-Weights STT models – higher accuracy than WhisperLargev3",
      "type": "story",
      "url": "https://github.com/moonshine-ai/moonshine"
    },
    {
      "by": "fittingopposite",
      "descendants": 86,
      "id": 47144464,
      "kids": [
        47145617,
        47148157,
        47146336,
        47147455,
        47146114,
        47145428,
        47148229,
        47147878,
        47147387,
        47146695,
        47145725,
        47147445,
        47145486,
        47146557,
        47146901,
        47146024,
        47146441,
        47146629,
        47146434,
        47146516,
        47146353,
        47146274,
        47146164
      ],
      "score": 178,
      "time": 1771973183,
      "title": "Mercury 2: Fast reasoning LLM powered by diffusion",
      "type": "story",
      "url": "https://www.inceptionlabs.ai/blog/introducing-mercury-2"
    },
    {
      "by": "kristianpaul",
      "descendants": 127,
      "id": 47143754,
      "kids": [
        47146936,
        47144370,
        47148023,
        47145723,
        47144490,
        47145053,
        47144994,
        47145760,
        47144576,
        47146073,
        47144468,
        47144284,
        47147191,
        47144965,
        47144260,
        47145567,
        47146166,
        47146992,
        47145283,
        47146528,
        47145990,
        47144954,
        47144949,
        47146237,
        47145145,
        47146239,
        47146567,
        47144838,
        47145102,
        47147057,
        47146542,
        47146512,
        47146883,
        47146578,
        47145138,
        47144829,
        47144198,
        47144239
      ],
      "score": 303,
      "time": 1771970039,
      "title": "Pi – A minimal terminal coding harness",
      "type": "story",
      "url": "https://pi.dev"
    },
    {
      "by": "haunter",
      "descendants": 461,
      "id": 47143152,
      "kids": [
        47144051,
        47144096,
        47144148,
        47144107,
        47146700,
        47143683,
        47143425,
        47144910,
        47143916,
        47144665,
        47146705,
        47143882,
        47143443,
        47144775,
        47144137,
        47146178,
        47147157,
        47145555,
        47147832,
        47147331,
        47143496,
        47144245,
        47147407,
        47146515,
        47143529,
        47143428,
        47147137,
        47144612,
        47144590,
        47144338,
        47143484,
        47145363,
        47144814,
        47146662,
        47145390,
        47145203,
        47144934,
        47144456,
        47144168,
        47144708,
        47143256,
        47143501,
        47143580,
        47143605,
        47144477,
        47143752,
        47143910,
        47143386,
        47143427,
        47143446,
        47143868
      ],
      "score": 469,
      "time": 1771967625,
      "title": "Mac mini will be made at a new facility in Houston",
      "type": "story",
      "url": "https://www.apple.com/newsroom/2026/02/apple-accelerates-us-manufacturing-with-mac-mini-production/"
    },
    {
      "by": "surprisetalk",
      "descendants": 38,
      "id": 47077215,
      "kids": [
        47148336,
        47146689,
        47147567,
        47147316,
        47146754,
        47147555,
        47146801,
        47146850
      ],
      "score": 94,
      "time": 1771525795,
      "title": "Justifying Text-Wrap: Pretty",
      "type": "story",
      "url": "https://matklad.github.io/2026/02/14/justifying-text-wrap-pretty.html"
    },
    {
      "by": "mengchengfeng",
      "descendants": 49,
      "id": 47141797,
      "kids": [
        47147913,
        47145503,
        47144454,
        47142460,
        47147856,
        47148125,
        47146614,
        47142386,
        47145375,
        47142374,
        47142764,
        47145192,
        47146778,
        47144730,
        47145165,
        47146267,
        47147843,
        47143060,
        47143235,
        47142717
      ],
      "score": 224,
      "time": 1771962214,
      "title": "Hacking an old Kindle to display bus arrival times",
      "type": "story",
      "url": "https://www.mariannefeng.com/portfolio/kindle/"
    },
    {
      "by": "Anon84",
      "descendants": 20,
      "id": 47092809,
      "kids": [
        47147720,
        47148315,
        47147591,
        47147729
      ],
      "score": 40,
      "time": 1771616228,
      "title": "Georgian wine culture dates back, uninterrupted, approximately 8k years",
      "type": "story",
      "url": "https://www.wsetglobal.com/knowledge-centre/blog/2023/july/05/exploring-georgian-wine-history-grape-varieties-styles-and-amber-wine/"
    },
    {
      "by": "toomuchtodo",
      "descendants": 103,
      "id": 47145907,
      "kids": [
        47147199,
        47146739,
        47146450,
        47146853,
        47147343,
        47148219,
        47147654,
        47146909,
        47146783,
        47147263,
        47146786,
        47146466,
        47146969,
        47146604,
        47146678,
        47145909,
        47146583,
        47146481,
        47146428,
        47146639,
        47146808,
        47146721
      ],
      "score": 348,
      "time": 1771981245,
      "title": "Amazon accused of widespread scheme to inflate prices across the economy",
      "type": "story",
      "url": "https://www.thebignewsletter.com/p/amazon-busted-for-widespread-price"
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
      "by": "cleak",
      "descendants": 226,
      "id": 47139675,
      "kids": [
        47141434,
        47140828,
        47146712,
        47148328,
        47140057,
        47148342,
        47140656,
        47148281,
        47148274,
        47142150,
        47140749,
        47141900,
        47140604,
        47140547,
        47147956,
        47140030,
        47143394,
        47146470,
        47144834,
        47147356,
        47140724,
        47140988,
        47145961,
        47142994,
        47142118,
        47140438,
        47146646,
        47140129,
        47146519,
        47145985,
        47140792,
        47142002,
        47145339,
        47145501,
        47147516,
        47140567,
        47147162,
        47140102,
        47140140,
        47140246,
        47146897,
        47140067,
        47140902,
        47146251,
        47145772,
        47148086,
        47147960,
        47142960,
        47147548,
        47144418,
        47145874,
        47143566,
        47145380,
        47141128,
        47140849,
        47145558,
        47146103,
        47143431,
        47140625,
        47142513,
        47140975,
        47140992,
        47140380,
        47141605,
        47147338,
        47144915,
        47140706,
        47146018,
        47142743,
        47142350,
        47147075,
        47140535,
        47143804,
        47140529,
        47141716,
        47140892,
        47145362,
        47142676,
        47146249,
        47140693,
        47141748,
        47140640,
        47140863,
        47140486,
        47140591,
        47145611,
        47140759,
        47145230,
        47140294,
        47140895,
        47141033,
        47142750,
        47142702,
        47140121,
        47142404,
        47140723,
        47142277,
        47140066,
        47141249,
        47144042,
        47146347,
        47140511,
        47140694,
        47141731,
        47140726,
        47146015,
        47140405,
        47146480,
        47146112,
        47142909,
        47140901
      ],
      "score": 827,
      "time": 1771953317,
      "title": "I'm helping my dog vibe code games",
      "type": "story",
      "url": "https://www.calebleak.com/posts/dog-game/"
    },
    {
      "by": "varjag",
      "descendants": 2,
      "id": 47110384,
      "kids": [
        47148362,
        47148329
      ],
      "score": 22,
      "time": 1771762359,
      "title": "Cl-kawa: Scheme on Java on Common Lisp",
      "type": "story",
      "url": "https://github.com/atgreen/cl-kawa"
    },
    {
      "by": "petewarden",
      "descendants": 40,
      "id": 47143755,
      "kids": [
        47145321,
        47146766,
        47148154,
        47147828,
        47147794,
        47146208,
        47146848,
        47145735,
        47145758,
        47144986,
        47145020,
        47145750,
        47145277,
        47145180,
        47146661,
        47147414,
        47146933,
        47145066,
        47146138,
        47145241,
        47147132,
        47145739,
        47144580,
        47144246,
        47145661
      ],
      "score": 214,
      "text": "I wanted to share our new speech to text model, and the library to use them effectively. We&#x27;re a small startup (six people, sub-$100k monthly GPU budget) so I&#x27;m proud of the work the team has done to create streaming STT models with lower word-error rates than OpenAI&#x27;s largest Whisper model. Admittedly Large v3 is a couple of years old, but we&#x27;re near the top the HF OpenASR leaderboard, even up against Nvidia&#x27;s Parakeet family. Anyway, I&#x27;d love to get feedback on the models and software, and hear about what people might build with it.",
      "time": 1771970047,
      "title": "Show HN: Moonshine Open-Weights STT models – higher accuracy than WhisperLargev3",
      "type": "story",
      "url": "https://github.com/moonshine-ai/moonshine"
    },
    {
      "by": "fittingopposite",
      "descendants": 86,
      "id": 47144464,
      "kids": [
        47145617,
        47148157,
        47146336,
        47147455,
        47146114,
        47145428,
        47148229,
        47147878,
        47147387,
        47146695,
        47145725,
        47147445,
        47145486,
        47146557,
        47146901,
        47146024,
        47146441,
        47146629,
        47146434,
        47146516,
        47146353,
        47146274,
        47146164
      ],
      "score": 178,
      "time": 1771973183,
      "title": "Mercury 2: Fast reasoning LLM powered by diffusion",
      "type": "story",
      "url": "https://www.inceptionlabs.ai/blog/introducing-mercury-2"
    },
    {
      "by": "kristianpaul",
      "descendants": 127,
      "id": 47143754,
      "kids": [
        47146936,
        47144370,
        47148023,
        47145723,
        47144490,
        47145053,
        47144994,
        47145760,
        47144576,
        47146073,
        47144468,
        47144284,
        47147191,
        47144965,
        47144260,
        47145567,
        47146166,
        47146992,
        47145283,
        47146528,
        47145990,
        47144954,
        47144949,
        47146237,
        47145145,
        47146239,
        47146567,
        47144838,
        47145102,
        47147057,
        47146542,
        47146512,
        47146883,
        47146578,
        47145138,
        47144829,
        47144198,
        47144239
      ],
      "score": 303,
      "time": 1771970039,
      "title": "Pi – A minimal terminal coding harness",
      "type": "story",
      "url": "https://pi.dev"
    },
    {
      "by": "haunter",
      "descendants": 461,
      "id": 47143152,
      "kids": [
        47144051,
        47144096,
        47144148,
        47144107,
        47146700,
        47143683,
        47143425,
        47144910,
        47143916,
        47144665,
        47146705,
        47143882,
        47143443,
        47144775,
        47144137,
        47146178,
        47147157,
        47145555,
        47147832,
        47147331,
        47143496,
        47144245,
        47147407,
        47146515,
        47143529,
        47143428,
        47147137,
        47144612,
        47144590,
        47144338,
        47143484,
        47145363,
        47144814,
        47146662,
        47145390,
        47145203,
        47144934,
        47144456,
        47144168,
        47144708,
        47143256,
        47143501,
        47143580,
        47143605,
        47144477,
        47143752,
        47143910,
        47143386,
        47143427,
        47143446,
        47143868
      ],
      "score": 469,
      "time": 1771967625,
      "title": "Mac mini will be made at a new facility in Houston",
      "type": "story",
      "url": "https://www.apple.com/newsroom/2026/02/apple-accelerates-us-manufacturing-with-mac-mini-production/"
    },
    {
      "by": "surprisetalk",
      "descendants": 38,
      "id": 47077215,
      "kids": [
        47148336,
        47146689,
        47147567,
        47147316,
        47146754,
        47147555,
        47146801,
        47146850
      ],
      "score": 94,
      "time": 1771525795,
      "title": "Justifying Text-Wrap: Pretty",
      "type": "story",
      "url": "https://matklad.github.io/2026/02/14/justifying-text-wrap-pretty.html"
    },
    {
      "by": "mengchengfeng",
      "descendants": 49,
      "id": 47141797,
      "kids": [
        47147913,
        47145503,
        47144454,
        47142460,
        47147856,
        47148125,
        47146614,
        47142386,
        47145375,
        47142374,
        47142764,
        47145192,
        47146778,
        47144730,
        47145165,
        47146267,
        47147843,
        47143060,
        47143235,
        47142717
      ],
      "score": 224,
      "time": 1771962214,
      "title": "Hacking an old Kindle to display bus arrival times",
      "type": "story",
      "url": "https://www.mariannefeng.com/portfolio/kindle/"
    },
    {
      "by": "Anon84",
      "descendants": 20,
      "id": 47092809,
      "kids": [
        47147720,
        47148315,
        47147591,
        47147729
      ],
      "score": 40,
      "time": 1771616228,
      "title": "Georgian wine culture dates back, uninterrupted, approximately 8k years",
      "type": "story",
      "url": "https://www.wsetglobal.com/knowledge-centre/blog/2023/july/05/exploring-georgian-wine-history-grape-varieties-styles-and-amber-wine/"
    },
    {
      "by": "toomuchtodo",
      "descendants": 103,
      "id": 47145907,
      "kids": [
        47147199,
        47146739,
        47146450,
        47146853,
        47147343,
        47148219,
        47147654,
        47146909,
        47146783,
        47147263,
        47146786,
        47146466,
        47146969,
        47146604,
        47146678,
        47145909,
        47146583,
        47146481,
        47146428,
        47146639,
        47146808,
        47146721
      ],
      "score": 348,
      "time": 1771981245,
      "title": "Amazon accused of widespread scheme to inflate prices across the economy",
      "type": "story",
      "url": "https://www.thebignewsletter.com/p/amazon-busted-for-widespread-price"
    },
    {
      "by": "onecommit",
      "descendants": 55,
      "id": 47140322,
      "kids": [
        47142801,
        47147666,
        47148054,
        47143463,
        47142445,
        47146160,
        47146744,
        47147661,
        47145917,
        47145065,
        47141656,
        47141404,
        47143382,
        47142304,
        47145297,
        47145749,
        47145919,
        47143949,
        47142704,
        47145436,
        47141766,
        47146747,
        47142158,
        47145370,
        47142244,
        47142035,
        47144259,
        47142728,
        47144858,
        47142891,
        47142567
      ],
      "score": 132,
      "text": "Hey HN! We’re Arne and Raban, the founders of Emdash (<a href=\"https:&#x2F;&#x2F;github.com&#x2F;generalaction&#x2F;emdash\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;generalaction&#x2F;emdash</a>).<p>Emdash is an open-source and provider-agnostic desktop app that lets you run multiple coding agents in parallel, each isolated in its own git worktree, either locally or over SSH on a remote machine. We call it an Agentic Development Environment (ADE).<p>You can see a 1 minute demo here: <a href=\"https:&#x2F;&#x2F;youtu.be&#x2F;X31nK-zlzKo\" rel=\"nofollow\">https:&#x2F;&#x2F;youtu.be&#x2F;X31nK-zlzKo</a><p>We are building Emdash for ourselves. While working on a cap-table management application (think Stripe Atlas + Pulley), we found our development workflow to be messy: lots of terminals, lots of branches, and too much time spent waiting on Codex.<p>Emdash puts the terminal at the center and makes it easy to run multiple agents at once. Each agent runs as a task in its own git worktree. You can start one or a few agents on the same problem, test, and review.<p>Emdash works over SSH so you can run agents where your code lives and keep the parallel workflow. You can assign tickets to agents, edit files manually, and review changes.<p>We also spent time making task startup fast. Each task can be created in a worktree, and creating worktrees on demand was taking 5s+ in some cases. We now keep a small reserve of worktrees in the background and let a new task claim one instantly. That brought task start time down to ~500–1000ms depending on the provider. We also spawn the shell directly and avoid loading the shell environments on startup.<p>We believe using the providers’ native CLIs is the right approach. It gives you the full capabilities of each agent, always. If a provider starts supporting plan mode, we don&#x27;t have to add that first.<p>We support 21 coding agent CLIs today, including Claude Code, Codex, Gemini, Droid, Amp, Codebuff, and more. We auto-detect what you have installed and we’re provider-agnostic by design. If there’s a provider you want that we don’t support yet, we can add it. We believe that in the future, some agents will be better suited for task X and others for task Y. Codex, Claude Code, and Gemini all have fans. We want to be agnostic and enable individuals and teams to freely switch between them.<p>Beyond orchestration, we try to pull most of the development loop into Emdash. You can review diffs, commit, open PRs, see CI&#x2F;CD checks, and merge directly from Emdash once checks pass. When starting a task, you can pass issues from Linear, GitHub, and Jira to an agent. We also support convenience variables and lifecycle scripts so it’s easy to allocate ports and test changes.<p>Emdash is fully open-source and MIT-licensed.<p>Download for macOS, Linux or Windows (as of yesterday !), or install via Homebrew: brew install --cask emdash.<p>We’d love your feedback. How does your coding agent development setup look like, especially when working with multiple agents? We would want to learn more about it. Check out our repository here: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;generalaction&#x2F;emdash\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;generalaction&#x2F;emdash</a><p>We’ll be around in the comments — thanks!",
      "time": 1771956037,
      "title": "Show HN: Emdash – Open-source agentic development environment",
      "type": "story",
      "url": "https://github.com/generalaction/emdash"
    },
    {
      "by": "wordglyph",
      "descendants": 161,
      "id": 47136604,
      "kids": [
        47138245,
        47138414,
        47138323,
        47139816,
        47138433,
        47138130,
        47137807,
        47140349,
        47139194,
        47138866,
        47139050,
        47138309,
        47140076,
        47140740,
        47140646,
        47141433,
        47141512,
        47138034,
        47139907,
        47138596,
        47139042,
        47139915,
        47141589,
        47139220,
        47138532,
        47138492,
        47144089,
        47139335,
        47139413,
        47143941,
        47137894,
        47137842,
        47138006,
        47137747,
        47140645,
        47138612,
        47139539,
        47138873,
        47140234,
        47138205,
        47137741,
        47140565,
        47142322,
        47139248,
        47138926,
        47140938,
        47142745
      ],
      "score": 435,
      "time": 1771938231,
      "title": "I pitched a roller coaster to Disneyland at age 10 in 1978",
      "type": "story",
      "url": "https://wordglyph.xyz/one-piece-at-a-time"
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
      "title": "Goodbye innerHTML, Hello setHTML: Stronger XSS Protection in Firefox 148",
      "url": "https://hacks.mozilla.org/2026/02/goodbye-innerhtml-hello-sethtml-stronger-xss-protection-in-firefox-148/",
      "score": 79,
      "comments": 33,
      "tags": [
        "browsers",
        "security",
        "web"
      ],
      "id": "kwpvgy"
    },
    {
      "title": "Reducing the size of Go binaries by up to 77%",
      "url": "https://www.datadoghq.com/blog/engineering/agent-go-binaries/",
      "score": 49,
      "comments": 25,
      "tags": [
        "go",
        "performance"
      ],
      "id": "tzyslr"
    },
    {
      "title": "“Just a little detail that wouldn’t sell anything”",
      "url": "https://unsung.aresluna.org/just-a-little-detail-that-wouldnt-sell-anything/",
      "score": 61,
      "comments": 15,
      "tags": [
        "design",
        "mac",
        "retrocomputing"
      ],
      "id": "vi9msd"
    },
    {
      "title": "RFC 406i - The Rejection of Artificially Generated Slop (RAGS)",
      "url": "https://406.fail/",
      "score": 24,
      "comments": 8,
      "tags": [
        "vibecoding"
      ],
      "id": "xkzo35"
    },
    {
      "title": "Lines of Code Are Back (And It's Worse Than Before)",
      "url": "https://www.thepragmaticcto.com/p/lines-of-code-are-back-and-its-worse",
      "score": 32,
      "comments": 14,
      "tags": [
        "programming",
        "vibecoding"
      ],
      "id": "kx2sp3"
    },
    {
      "title": "x86CSS - An x86 CPU emulator written in CSS",
      "url": "https://lyra.horse/x86css/",
      "score": 124,
      "comments": 18,
      "tags": [
        "css",
        "show"
      ],
      "id": "rhgsiy"
    },
    {
      "title": "ansigpt: c89 implementation of microgpt",
      "url": "https://github.com/yobibyte/ansigpt",
      "score": 8,
      "comments": 4,
      "tags": [
        "ai",
        "c"
      ],
      "id": "rhoktj"
    },
    {
      "title": "Justifying text-wrap: pretty",
      "url": "https://matklad.github.io/2026/02/14/justifying-text-wrap-pretty.html",
      "score": 16,
      "comments": 0,
      "tags": [
        "browsers",
        "css",
        "design",
        "web"
      ],
      "id": "mo0hgf"
    },
    {
      "title": "Charm v2: Major releases for Bubble Tea, Lip Gloss, and Bubbles for terminal UIs in Go",
      "url": "https://charm.land/blog/v2/",
      "score": 19,
      "comments": 3,
      "tags": [
        "go"
      ],
      "id": "1to8sq"
    },
    {
      "title": "How we rebuilt Next.js with AI in one week",
      "url": "https://blog.cloudflare.com/vinext/",
      "score": 8,
      "comments": 6,
      "tags": [
        "vibecoding"
      ],
      "id": "fjrzzm"
    }
  ]
}
```

