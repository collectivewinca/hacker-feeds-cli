# Hacker Feeds Outcomes - Creators

Generated on: 2026-02-27 07:13:04 UTC

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
      "title": "Join the \"Built with Google Gemini: Writing Challenge\" Presented by Major League Hacking (MLH). Win a Raspberry Pi AI Kit!",
      "description": "Last week, we announced that DEV has joined Major League Hacking. To kick things off, we're launching...",
      "url": "https://dev.to/devteam/join-the-built-with-google-gemini-writing-challenge-presented-by-major-league-hacking-mlh-win-17pk",
      "tags": "devchallenge, geminireflections, gemini, ai",
      "reactions": 86,
      "comments": 22,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "The Token Economy",
      "description": "In 2161, time is money. Literally.  When you are born, a clock starts on your arm. One year. When it...",
      "url": "https://dev.to/dannwaneri/the-token-economy-3cd9",
      "tags": "ai, webdev, career, discuss",
      "reactions": 35,
      "comments": 27,
      "reading_time": 4,
      "author": "dannwaneri"
    },
    {
      "title": "Happening Now: DEV Weekend Challenge!! Submissions due March 2 at 7:59am UTC.",
      "description": "Good morning! Good afternoon! Good Evening!   Welcome to our first DEV Weekend Challenge, a short...",
      "url": "https://dev.to/devteam/happening-now-dev-weekend-challenge-submissions-due-march-2-at-759am-utc-5fg8",
      "tags": "devchallenge, weekendchallenge, webdev, ai",
      "reactions": 25,
      "comments": 2,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "The Agent Skills Gold Rush Has a Malware Problem",
      "description": "Three weeks ago, ClawHub had roughly 2,800 skills in its registry. Today it has over 10,700. In that...",
      "url": "https://dev.to/meimakes/the-agent-skills-gold-rush-has-a-malware-problem-2jai",
      "tags": "devtools, ai, productivity",
      "reactions": 7,
      "comments": 3,
      "reading_time": 3,
      "author": "meimakes"
    },
    {
      "title": "The $0 Developer Phase — And How Dev.to Pulled Me Out",
      "description": "Eight years ago, I was absolutely convinced of one thing:  I was ahead of the curve.  Not just...",
      "url": "https://dev.to/art_light/the-0-developer-phase-and-how-devto-pulled-me-out-84g",
      "tags": "career, webdev, productivity, beginners",
      "reactions": 168,
      "comments": 94,
      "reading_time": 5,
      "author": "art_light"
    },
    {
      "title": "Nano Banana 2: Combining Pro capabilities with lightning-fast speed",
      "description": "In August of last year, our Gemini Image model, Nano Banana, became a viral sensation, redefining...",
      "url": "https://dev.to/googleai/nano-banana-2-combining-pro-capabilities-with-lightning-fast-speed-4fm1",
      "tags": "nanobanana, gemini, ai",
      "reactions": 13,
      "comments": 0,
      "reading_time": 9,
      "author": "alisa_fortin"
    },
    {
      "title": "Understanding Next.js Rewrites",
      "description": "Most people use Next.js very superficially.  Routing, SSR, maybe API routes — and that’s it. But...",
      "url": "https://dev.to/cole_ruche/understanding-nextjs-rewrites-234j",
      "tags": "architecture, javascript, nextjs, react",
      "reactions": 3,
      "comments": 0,
      "reading_time": 3,
      "author": "cole_ruche"
    },
    {
      "title": "Perfect Claude Code Notifications Setup with Tailscale and ntfy",
      "description": "If you’re like me and have been hooked into running Claude Code on your phone, running several...",
      "url": "https://dev.to/felipeelias/perfect-claude-code-notifications-setup-with-tailscale-and-ntfy-1ii1",
      "tags": "claudecode, tailscale, ntfy, docker",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "felipeelias"
    },
    {
      "title": "Want your agent to write better code with fewer tokens? Ask the Google AI Team about Agent Skills!",
      "description": "Last week @stephr_wong, Kevin Hou, and Andy Zhang explored the Antigravity Editor and Agent...",
      "url": "https://dev.to/devteam/want-your-agent-to-write-better-code-with-fewer-tokens-ask-the-google-ai-team-about-agent-skills-44pg",
      "tags": "gemini, agents, cli",
      "reactions": 9,
      "comments": 0,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "The Developer I'm Grateful I Never Became",
      "description": "Inspired by—but not aligned with—\"The $0 Developer Phase—And How Dev.to Pulled Me Out\" by Art...",
      "url": "https://dev.to/narnaiezzsshaa/the-developer-im-grateful-i-never-became-255d",
      "tags": "career, webdev, beginners, productivity",
      "reactions": 19,
      "comments": 17,
      "reading_time": 3,
      "author": "narnaiezzsshaa"
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
      "author": "Stremio",
      "repo": "stremio-web",
      "avatar": "https://github.com/Stremio.png",
      "repo_link": "https://github.com/Stremio/stremio-web",
      "desc": "Stremio - Freedom to Stream",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1095,
      "added_stars": 1178,
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
      "author": "SynkraAI",
      "repo": "aios-core",
      "avatar": "https://github.com/SynkraAI.png",
      "repo_link": "https://github.com/SynkraAI/aios-core",
      "desc": "Synkra AIOS: AI-Orchestrated System for Full Stack Development - Core Framework v4.0",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 647,
      "added_stars": 470,
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
      "stars": 0,
      "forks": 2459,
      "added_stars": 901,
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
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code and OpenCode.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1845,
      "added_stars": 4775,
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
      "forks": 669,
      "added_stars": 160,
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
      "author": "jasonjmcghee",
      "repo": "WebMCP",
      "avatar": "https://github.com/jasonjmcghee.png",
      "repo_link": "https://github.com/jasonjmcghee/WebMCP",
      "desc": "Early WebMCP proposal / implementation - since evolved and worked on by much more capable folks that develop the web: https://github.com/webmachinelearning/webmcp",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 41,
      "added_stars": 47,
      "builtBy": [
        {
          "username": "jasonjmcghee",
          "href": "https://github.com/jasonjmcghee",
          "avatar": "https://avatars.githubusercontent.com/u/1522149"
        },
        {
          "username": "evalstate",
          "href": "https://github.com/evalstate",
          "avatar": "https://avatars.githubusercontent.com/u/1936278"
        },
        {
          "username": "cybermanhao",
          "href": "https://github.com/cybermanhao",
          "avatar": "https://avatars.githubusercontent.com/u/37235140"
        }
      ]
    },
    {
      "author": "badlogic",
      "repo": "pi-skills",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-skills",
      "desc": "Skills for pi coding agent (compatible with Claude Code and Codex CLI)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 66,
      "added_stars": 113,
      "builtBy": [
        {
          "username": "badlogic",
          "href": "https://github.com/badlogic",
          "avatar": "https://avatars.githubusercontent.com/u/514052"
        },
        {
          "username": "terrorobe",
          "href": "https://github.com/terrorobe",
          "avatar": "https://avatars.githubusercontent.com/u/151045"
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
      "stars": 0,
      "forks": 2620,
      "added_stars": 985,
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
          "username": "mubaidr",
          "href": "https://github.com/mubaidr",
          "avatar": "https://avatars.githubusercontent.com/u/2222702"
        }
      ]
    },
    {
      "author": "Balackburn",
      "repo": "Apollo",
      "avatar": "https://github.com/Balackburn.png",
      "repo_link": "https://github.com/Balackburn/Apollo",
      "desc": "Altstore source and website for Apollo for Reddit (with ImprovedCustomApi)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 74,
      "added_stars": 47,
      "builtBy": [
        {
          "username": "Balackburn",
          "href": "https://github.com/Balackburn",
          "avatar": "https://avatars.githubusercontent.com/u/93828569"
        },
        {
          "username": "actions-user",
          "href": "https://github.com/actions-user",
          "avatar": "https://avatars.githubusercontent.com/u/65916846"
        },
        {
          "username": "tanakrit-d",
          "href": "https://github.com/tanakrit-d",
          "avatar": "https://avatars.githubusercontent.com/u/127579510"
        }
      ]
    },
    {
      "author": "Mintplex-Labs",
      "repo": "anything-llm",
      "avatar": "https://github.com/Mintplex-Labs.png",
      "repo_link": "https://github.com/Mintplex-Labs/anything-llm",
      "desc": "The all-in-one Desktop & Docker AI application with built-in RAG, AI agents, No-code agent builder, MCP compatibility, and more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5947,
      "added_stars": 358,
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
      "author": "louislam",
      "repo": "uptime-kuma",
      "avatar": "https://github.com/louislam.png",
      "repo_link": "https://github.com/louislam/uptime-kuma",
      "desc": "A fancy self-hosted monitoring tool",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7446,
      "added_stars": 353,
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
      "author": "gaotianliuyun",
      "repo": "gao",
      "avatar": "https://github.com/gaotianliuyun.png",
      "repo_link": "https://github.com/gaotianliuyun/gao",
      "desc": "FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2587,
      "added_stars": 58,
      "builtBy": [
        {
          "username": "gaotianliuyun",
          "href": "https://github.com/gaotianliuyun",
          "avatar": "https://avatars.githubusercontent.com/u/58679624"
        },
        {
          "username": "xuy132",
          "href": "https://github.com/xuy132",
          "avatar": "https://avatars.githubusercontent.com/u/61369344"
        },
        {
          "username": "ghaner",
          "href": "https://github.com/ghaner",
          "avatar": "https://avatars.githubusercontent.com/u/51288907"
        },
        {
          "username": "lanceyang",
          "href": "https://github.com/lanceyang",
          "avatar": "https://avatars.githubusercontent.com/u/13310044"
        },
        {
          "username": "Baobei321",
          "href": "https://github.com/Baobei321",
          "avatar": "https://avatars.githubusercontent.com/u/108043431"
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
      "forks": 4801,
      "added_stars": 311,
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
      "author": "eslint",
      "repo": "eslint",
      "avatar": "https://github.com/eslint.png",
      "repo_link": "https://github.com/eslint/eslint",
      "desc": "Find and fix problems in your JavaScript code.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4931,
      "added_stars": 133,
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
      "author": "nolimits4web",
      "repo": "swiper",
      "avatar": "https://github.com/nolimits4web.png",
      "repo_link": "https://github.com/nolimits4web/swiper",
      "desc": "Most modern mobile touch slider with hardware accelerated transitions",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 9708,
      "added_stars": 26,
      "builtBy": [
        {
          "username": "nolimits4web",
          "href": "https://github.com/nolimits4web",
          "avatar": "https://avatars.githubusercontent.com/u/999588"
        },
        {
          "username": "vltansky",
          "href": "https://github.com/vltansky",
          "avatar": "https://avatars.githubusercontent.com/u/5851280"
        },
        {
          "username": "DAnn2012",
          "href": "https://github.com/DAnn2012",
          "avatar": "https://avatars.githubusercontent.com/u/1197819"
        },
        {
          "username": "TiagoCavalcante",
          "href": "https://github.com/TiagoCavalcante",
          "avatar": "https://avatars.githubusercontent.com/u/62714153"
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
      "title": "Join the \"Built with Google Gemini: Writing Challenge\" Presented by Major League Hacking (MLH). Win a Raspberry Pi AI Kit!",
      "description": "Last week, we announced that DEV has joined Major League Hacking. To kick things off, we're launching...",
      "url": "https://dev.to/devteam/join-the-built-with-google-gemini-writing-challenge-presented-by-major-league-hacking-mlh-win-17pk",
      "tags": "devchallenge, geminireflections, gemini, ai",
      "reactions": 86,
      "comments": 22,
      "reading_time": 4,
      "author": "jess"
    },
    {
      "title": "The Token Economy",
      "description": "In 2161, time is money. Literally.  When you are born, a clock starts on your arm. One year. When it...",
      "url": "https://dev.to/dannwaneri/the-token-economy-3cd9",
      "tags": "ai, webdev, career, discuss",
      "reactions": 36,
      "comments": 27,
      "reading_time": 4,
      "author": "dannwaneri"
    },
    {
      "title": "Happening Now: DEV Weekend Challenge!! Submissions due March 2 at 7:59am UTC.",
      "description": "Good morning! Good afternoon! Good Evening!   Welcome to our first DEV Weekend Challenge, a short...",
      "url": "https://dev.to/devteam/happening-now-dev-weekend-challenge-submissions-due-march-2-at-759am-utc-5fg8",
      "tags": "devchallenge, weekendchallenge, webdev, ai",
      "reactions": 25,
      "comments": 2,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "The Agent Skills Gold Rush Has a Malware Problem",
      "description": "Three weeks ago, ClawHub had roughly 2,800 skills in its registry. Today it has over 10,700. In that...",
      "url": "https://dev.to/meimakes/the-agent-skills-gold-rush-has-a-malware-problem-2jai",
      "tags": "devtools, ai, productivity",
      "reactions": 7,
      "comments": 3,
      "reading_time": 3,
      "author": "meimakes"
    },
    {
      "title": "Vibe Coding Reality Check",
      "description": "I was really excited about this hackathon because it was an offline event and completely focused on...",
      "url": "https://dev.to/konark_13/vibe-coding-reality-check-440a",
      "tags": "ai, vibecoding, learning, hackathon",
      "reactions": 12,
      "comments": 12,
      "reading_time": 4,
      "author": "konark_13"
    },
    {
      "title": "Curse of The Context Window",
      "description": "TL;DR: Large-document extraction with LLMs fails less from “bad reasoning” and more from hard output...",
      "url": "https://dev.to/deathsaber/the-curse-of-context-window-1c7i",
      "tags": "ai, programming, learning, llm",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "deathsaber"
    },
    {
      "title": "I Built an AI Agent Monitoring System as a Non-Dev Side Project. Here's Why.",
      "description": "Hey everyone. This is my first ever side project and my first ever post here. I'm not a developer by...",
      "url": "https://dev.to/sidhomein/i-built-an-ai-agent-monitoring-system-as-a-non-dev-side-project-heres-why-4jmg",
      "tags": "ai, opensource, python, security",
      "reactions": 3,
      "comments": 1,
      "reading_time": 2,
      "author": "sidhomein"
    },
    {
      "title": "I Had an AI Agent Build Me a Full App. 46K Lines of Code, 3 Platforms, Zero Dart Knowledge",
      "description": "Disclaimer: this article was also written by an AI agent. I’m a developer, not a writer — my raw...",
      "url": "https://dev.to/hcan_359/i-had-an-ai-agent-build-me-a-full-app-46k-lines-of-code-3-platforms-zero-dart-knowledge-23p0",
      "tags": "ai, opensource, showdev, flutter",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "hcan_359"
    },
    {
      "title": "Top 5 Enterprise AI Gateways in 2026 (Ranked for Scale, Governance & Production Readiness)",
      "description": "In 2026, the real AI challenge isn’t model quality.  It’s infrastructure.  The enterprise AI market...",
      "url": "https://dev.to/hadil/top-5-enterprise-ai-gateways-in-2026-ranked-for-scale-governance-production-readiness-4iod",
      "tags": "ai, opensource, go, python",
      "reactions": 15,
      "comments": 5,
      "reading_time": 8,
      "author": "hadil"
    },
    {
      "title": "Nano Banana 2: Combining Pro capabilities with lightning-fast speed",
      "description": "In August of last year, our Gemini Image model, Nano Banana, became a viral sensation, redefining...",
      "url": "https://dev.to/googleai/nano-banana-2-combining-pro-capabilities-with-lightning-fast-speed-4fm1",
      "tags": "nanobanana, gemini, ai",
      "reactions": 13,
      "comments": 0,
      "reading_time": 9,
      "author": "alisa_fortin"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "qwertox",
      "descendants": 817,
      "id": 47173121,
      "kids": [
        47174423,
        47173642,
        47174125,
        47173975,
        47173851,
        47177472,
        47173414,
        47177363,
        47177237,
        47173618,
        47173275,
        47175870,
        47176313,
        47173598,
        47177282,
        47174148,
        47177446,
        47175367,
        47173378,
        47177020,
        47173451,
        47173397,
        47175363,
        47176183,
        47177300,
        47176114,
        47173507,
        47173453,
        47176763,
        47173872,
        47173718,
        47176224,
        47173506,
        47176626,
        47176376,
        47175628,
        47174971,
        47174296,
        47174965,
        47175343,
        47173921,
        47175483,
        47176138,
        47174182,
        47175239,
        47174293,
        47176230,
        47174819,
        47174747,
        47177303,
        47174343,
        47175006,
        47173408,
        47174786,
        47175156,
        47177290,
        47175030,
        47176301,
        47173420,
        47174683,
        47174880,
        47176330,
        47173488,
        47174386,
        47174040,
        47174122,
        47175183,
        47173994,
        47175298,
        47174494,
        47174242,
        47175088,
        47174214,
        47174019,
        47173303,
        47175493,
        47175234,
        47175454,
        47174588,
        47175738,
        47173370,
        47174005,
        47176248,
        47173577,
        47174534,
        47174664,
        47176212,
        47173719,
        47175968,
        47176776,
        47176778,
        47173799,
        47175490,
        47175448,
        47173923,
        47176326,
        47176185,
        47174983,
        47173309,
        47173563,
        47175757,
        47174394,
        47173784,
        47174106,
        47175150,
        47175441,
        47175413,
        47176839,
        47174007,
        47175889,
        47174939,
        47173551,
        47173535,
        47176340,
        47174016,
        47175322,
        47175320,
        47175550,
        47173236,
        47174446,
        47173721,
        47174239,
        47175534,
        47175793,
        47175742,
        47176417,
        47176520,
        47174341,
        47173594,
        47173199,
        47173803,
        47175601,
        47173657,
        47173866,
        47173360,
        47175710,
        47173769,
        47173978
      ],
      "score": 1574,
      "time": 1772145767,
      "title": "Statement from Dario Amodei on our discussions with the Department of War",
      "type": "story",
      "url": "https://www.anthropic.com/news/statement-department-of-war"
    },
    {
      "by": "moultano",
      "descendants": 50,
      "id": 47176257,
      "kids": [
        47177429,
        47176671,
        47176585,
        47177366,
        47177245,
        47176484,
        47176450,
        47176482,
        47176630,
        47176781,
        47176420,
        47176345,
        47177004,
        47176532,
        47177371,
        47176588,
        47177077,
        47177025,
        47176429,
        47176740,
        47176346,
        47176944,
        47176642,
        47176771,
        47176708,
        47176940,
        47176439
      ],
      "score": 143,
      "time": 1772164188,
      "title": "The Hunt for Dark Breakfast",
      "type": "story",
      "url": "https://moultano.wordpress.com/2026/02/22/the-hunt-for-dark-breakfast/"
    },
    {
      "by": "tosh",
      "descendants": 2,
      "id": 47123633,
      "kids": [
        47177431
      ],
      "score": 13,
      "time": 1771860813,
      "title": "Julia: Performance Tips",
      "type": "story",
      "url": "https://docs.julialang.org/en/v1/manual/performance-tips/"
    },
    {
      "by": "tin7in",
      "descendants": 145,
      "id": 47169757,
      "kids": [
        47176204,
        47171575,
        47177493,
        47177336,
        47175428,
        47172175,
        47172655,
        47176684,
        47172377,
        47171437,
        47177355,
        47176963,
        47176872,
        47172130,
        47171623,
        47172240,
        47174021,
        47173046,
        47176507,
        47171105,
        47176764,
        47171969,
        47177024,
        47171626,
        47173336,
        47172773,
        47172292,
        47176863,
        47173072,
        47171653,
        47173825,
        47173302,
        47176123,
        47171049,
        47171007,
        47172372,
        47171152,
        47174565,
        47177267,
        47175384,
        47171275,
        47172870
      ],
      "score": 363,
      "time": 1772129546,
      "title": "What Claude Code chooses",
      "type": "story",
      "url": "https://amplifying.ai/research/claude-code-picks"
    },
    {
      "by": "nand2mario",
      "descendants": 3,
      "id": 47138698,
      "kids": [
        47177352,
        47177067
      ],
      "score": 25,
      "time": 1771948592,
      "title": "80386 Protection",
      "type": "story",
      "url": "https://nand2mario.github.io/posts/2026/80386_protection/"
    },
    {
      "by": "mlex",
      "descendants": 680,
      "id": 47172119,
      "kids": [
        47172729,
        47177514,
        47174079,
        47176919,
        47172632,
        47176242,
        47173078,
        47177495,
        47173330,
        47172528,
        47172264,
        47172801,
        47173203,
        47173676,
        47173259,
        47174612,
        47174136,
        47173178,
        47175223,
        47173137,
        47173227,
        47172344,
        47173279,
        47172189,
        47173089,
        47173417,
        47172990,
        47173332,
        47172804,
        47174462,
        47176719,
        47173094,
        47176991,
        47175728,
        47176144,
        47175416,
        47172248,
        47177470,
        47173961,
        47173176,
        47175703,
        47173775,
        47176350,
        47173044,
        47177369,
        47174292,
        47173876,
        47173625,
        47174790,
        47174447,
        47176223,
        47174999,
        47176533,
        47176518,
        47174636,
        47173588,
        47172853,
        47173228,
        47174872,
        47174138,
        47173699,
        47172630,
        47173029,
        47173692,
        47173929,
        47176390,
        47173205,
        47174014,
        47172832,
        47172831,
        47174163,
        47172677,
        47174070,
        47175852,
        47175716,
        47174158,
        47172477,
        47172723,
        47174252,
        47172874,
        47174861,
        47174748,
        47176636,
        47172657,
        47174460,
        47172581,
        47172692,
        47176096,
        47174932,
        47174332,
        47174159,
        47174795,
        47173416,
        47174383,
        47174623,
        47172534,
        47172450,
        47172595,
        47172626,
        47175219,
        47175543,
        47172569,
        47175713,
        47175177,
        47173162,
        47172468,
        47173105
      ],
      "score": 645,
      "text": "<a href=\"https:&#x2F;&#x2F;www.cnbc.com&#x2F;2026&#x2F;02&#x2F;26&#x2F;block-laying-off-about-4000-employees-nearly-half-of-its-workforce.html\" rel=\"nofollow\">https:&#x2F;&#x2F;www.cnbc.com&#x2F;2026&#x2F;02&#x2F;26&#x2F;block-laying-off-about-4000-...</a><p><a href=\"https:&#x2F;&#x2F;www.marketwatch.com&#x2F;story&#x2F;block-plans-to-lay-off-nearly-half-its-staff-in-deliberate-and-bold-embrace-of-ai-81e99247\" rel=\"nofollow\">https:&#x2F;&#x2F;www.marketwatch.com&#x2F;story&#x2F;block-plans-to-lay-off-nea...</a>",
      "time": 1772140676,
      "title": "Layoffs at Block",
      "type": "story",
      "url": "https://twitter.com/jack/status/2027129697092731343"
    },
    {
      "by": "DamnInteresting",
      "descendants": 162,
      "id": 47167763,
      "kids": [
        47168129,
        47168167,
        47169619,
        47168080,
        47168966,
        47168958,
        47167975,
        47168768,
        47168200,
        47168006,
        47168315,
        47168524,
        47173313,
        47169704,
        47169440,
        47169200,
        47171663,
        47170415,
        47168742,
        47171361,
        47170045,
        47168081,
        47172582,
        47168319,
        47168044,
        47177308,
        47167913,
        47168161
      ],
      "score": 344,
      "time": 1772121348,
      "title": "AirSnitch: Demystifying and breaking client isolation in Wi-Fi networks [pdf]",
      "type": "story",
      "url": "https://www.ndss-symposium.org/wp-content/uploads/2026-f1282-paper.pdf"
    },
    {
      "by": "alexmolas",
      "descendants": 129,
      "id": 47171233,
      "kids": [
        47173059,
        47175672,
        47177447,
        47173277,
        47175985,
        47174628,
        47172941,
        47173471,
        47173472,
        47172933,
        47173276,
        47174314,
        47173868,
        47175308,
        47173386,
        47173646,
        47173293,
        47174268,
        47176927,
        47173158,
        47173391,
        47173209,
        47175172,
        47175676,
        47174851,
        47175692,
        47174205
      ],
      "score": 230,
      "time": 1772135926,
      "title": "What does \" 2>&1 \" mean?",
      "type": "story",
      "url": "https://stackoverflow.com/questions/818255/what-does-21-mean"
    },
    {
      "by": "noahkay13",
      "descendants": 2,
      "id": 47176239,
      "kids": [
        47176240,
        47176584
      ],
      "score": 26,
      "time": 1772164085,
      "title": "Parakeet.cpp – Parakeet ASR inference in pure C++ with Metal GPU acceleration",
      "type": "story",
      "url": "https://github.com/Frikallo/parakeet.cpp"
    },
    {
      "by": "paultendo",
      "descendants": 12,
      "id": 47150674,
      "kids": [
        47177382,
        47151139,
        47155711,
        47177337,
        47177058
      ],
      "score": 30,
      "time": 1772022636,
      "title": "I rendered 1,418 confusables over 230 fonts. Most aren't confusable to the eye",
      "type": "story",
      "url": "https://paultendo.github.io/posts/confusable-vision-visual-similarity/"
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
      "by": "qwertox",
      "descendants": 817,
      "id": 47173121,
      "kids": [
        47174423,
        47173642,
        47174125,
        47173975,
        47173851,
        47177472,
        47173414,
        47177363,
        47177237,
        47173618,
        47173275,
        47175870,
        47176313,
        47173598,
        47177282,
        47174148,
        47177446,
        47175367,
        47173378,
        47177020,
        47173451,
        47173397,
        47175363,
        47176183,
        47177300,
        47176114,
        47173507,
        47173453,
        47176763,
        47173872,
        47173718,
        47176224,
        47173506,
        47176626,
        47176376,
        47175628,
        47174971,
        47174296,
        47174965,
        47175343,
        47173921,
        47175483,
        47176138,
        47174182,
        47175239,
        47174293,
        47176230,
        47174819,
        47174747,
        47177303,
        47174343,
        47175006,
        47173408,
        47174786,
        47175156,
        47177290,
        47175030,
        47176301,
        47173420,
        47174683,
        47174880,
        47176330,
        47173488,
        47174386,
        47174040,
        47174122,
        47175183,
        47173994,
        47175298,
        47174494,
        47174242,
        47175088,
        47174214,
        47174019,
        47173303,
        47175493,
        47175234,
        47175454,
        47174588,
        47175738,
        47173370,
        47174005,
        47176248,
        47173577,
        47174534,
        47174664,
        47176212,
        47173719,
        47175968,
        47176776,
        47176778,
        47173799,
        47175490,
        47175448,
        47173923,
        47176326,
        47176185,
        47174983,
        47173309,
        47173563,
        47175757,
        47174394,
        47173784,
        47174106,
        47175150,
        47175441,
        47175413,
        47176839,
        47174007,
        47175889,
        47174939,
        47173551,
        47173535,
        47176340,
        47174016,
        47175322,
        47175320,
        47175550,
        47173236,
        47174446,
        47173721,
        47174239,
        47175534,
        47175793,
        47175742,
        47176417,
        47176520,
        47174341,
        47173594,
        47173199,
        47173803,
        47175601,
        47173657,
        47173866,
        47173360,
        47175710,
        47173769,
        47173978
      ],
      "score": 1578,
      "time": 1772145767,
      "title": "Statement from Dario Amodei on our discussions with the Department of War",
      "type": "story",
      "url": "https://www.anthropic.com/news/statement-department-of-war"
    },
    {
      "by": "moultano",
      "descendants": 50,
      "id": 47176257,
      "kids": [
        47177429,
        47176671,
        47176585,
        47177366,
        47177245,
        47176484,
        47176450,
        47176482,
        47176630,
        47176781,
        47176420,
        47176345,
        47177004,
        47176532,
        47176588,
        47177371,
        47177077,
        47177025,
        47176429,
        47176740,
        47176346,
        47176944,
        47176642,
        47176771,
        47176708,
        47176940,
        47176439
      ],
      "score": 143,
      "time": 1772164188,
      "title": "The Hunt for Dark Breakfast",
      "type": "story",
      "url": "https://moultano.wordpress.com/2026/02/22/the-hunt-for-dark-breakfast/"
    },
    {
      "by": "tosh",
      "descendants": 2,
      "id": 47123633,
      "kids": [
        47177431
      ],
      "score": 13,
      "time": 1771860813,
      "title": "Julia: Performance Tips",
      "type": "story",
      "url": "https://docs.julialang.org/en/v1/manual/performance-tips/"
    },
    {
      "by": "tin7in",
      "descendants": 145,
      "id": 47169757,
      "kids": [
        47176204,
        47171575,
        47177493,
        47177336,
        47175428,
        47172175,
        47172655,
        47176684,
        47172377,
        47171437,
        47177355,
        47176963,
        47176872,
        47172130,
        47171623,
        47172240,
        47174021,
        47173046,
        47176507,
        47171105,
        47176764,
        47171969,
        47177024,
        47171626,
        47173336,
        47172773,
        47172292,
        47176863,
        47173072,
        47171653,
        47173825,
        47173302,
        47176123,
        47171049,
        47171007,
        47172372,
        47171152,
        47174565,
        47177267,
        47175384,
        47171275,
        47172870
      ],
      "score": 363,
      "time": 1772129546,
      "title": "What Claude Code chooses",
      "type": "story",
      "url": "https://amplifying.ai/research/claude-code-picks"
    },
    {
      "by": "nand2mario",
      "descendants": 3,
      "id": 47138698,
      "kids": [
        47177352,
        47177067
      ],
      "score": 25,
      "time": 1771948592,
      "title": "80386 Protection",
      "type": "story",
      "url": "https://nand2mario.github.io/posts/2026/80386_protection/"
    },
    {
      "by": "mlex",
      "descendants": 680,
      "id": 47172119,
      "kids": [
        47172729,
        47177514,
        47174079,
        47176919,
        47172632,
        47176242,
        47173078,
        47177495,
        47173330,
        47172528,
        47172264,
        47172801,
        47173203,
        47173676,
        47173259,
        47174612,
        47174136,
        47173178,
        47175223,
        47173137,
        47173227,
        47172344,
        47173279,
        47172189,
        47173089,
        47173417,
        47172990,
        47173332,
        47172804,
        47174462,
        47176719,
        47173094,
        47176991,
        47175728,
        47176144,
        47175416,
        47172248,
        47177470,
        47173961,
        47173176,
        47175703,
        47173775,
        47176350,
        47173044,
        47177369,
        47174292,
        47173876,
        47173625,
        47174790,
        47174447,
        47176223,
        47174999,
        47176533,
        47176518,
        47174636,
        47173588,
        47172853,
        47173228,
        47174872,
        47174138,
        47173699,
        47172630,
        47173029,
        47173692,
        47173929,
        47176390,
        47173205,
        47174014,
        47172832,
        47172831,
        47174163,
        47172677,
        47174070,
        47175852,
        47175716,
        47174158,
        47172477,
        47172723,
        47174252,
        47172874,
        47174861,
        47174748,
        47176636,
        47172657,
        47174460,
        47172581,
        47172692,
        47176096,
        47174932,
        47174332,
        47174159,
        47174795,
        47173416,
        47174383,
        47174623,
        47172534,
        47172450,
        47172595,
        47172626,
        47175219,
        47175543,
        47172569,
        47175713,
        47175177,
        47173162,
        47172468,
        47173105
      ],
      "score": 646,
      "text": "<a href=\"https:&#x2F;&#x2F;www.cnbc.com&#x2F;2026&#x2F;02&#x2F;26&#x2F;block-laying-off-about-4000-employees-nearly-half-of-its-workforce.html\" rel=\"nofollow\">https:&#x2F;&#x2F;www.cnbc.com&#x2F;2026&#x2F;02&#x2F;26&#x2F;block-laying-off-about-4000-...</a><p><a href=\"https:&#x2F;&#x2F;www.marketwatch.com&#x2F;story&#x2F;block-plans-to-lay-off-nearly-half-its-staff-in-deliberate-and-bold-embrace-of-ai-81e99247\" rel=\"nofollow\">https:&#x2F;&#x2F;www.marketwatch.com&#x2F;story&#x2F;block-plans-to-lay-off-nea...</a>",
      "time": 1772140676,
      "title": "Layoffs at Block",
      "type": "story",
      "url": "https://twitter.com/jack/status/2027129697092731343"
    },
    {
      "by": "DamnInteresting",
      "descendants": 162,
      "id": 47167763,
      "kids": [
        47168129,
        47168167,
        47169619,
        47168080,
        47168966,
        47168958,
        47167975,
        47168768,
        47168200,
        47168006,
        47168315,
        47168524,
        47173313,
        47169704,
        47169440,
        47169200,
        47171663,
        47170415,
        47168742,
        47171361,
        47170045,
        47168081,
        47172582,
        47168319,
        47168044,
        47177308,
        47167913,
        47168161
      ],
      "score": 344,
      "time": 1772121348,
      "title": "AirSnitch: Demystifying and breaking client isolation in Wi-Fi networks [pdf]",
      "type": "story",
      "url": "https://www.ndss-symposium.org/wp-content/uploads/2026-f1282-paper.pdf"
    },
    {
      "by": "alexmolas",
      "descendants": 129,
      "id": 47171233,
      "kids": [
        47173059,
        47175672,
        47177447,
        47173277,
        47175985,
        47174628,
        47172941,
        47173471,
        47173472,
        47172933,
        47173276,
        47174314,
        47173868,
        47175308,
        47173386,
        47173646,
        47173293,
        47174268,
        47176927,
        47173158,
        47173391,
        47173209,
        47175172,
        47175676,
        47174851,
        47175692,
        47174205
      ],
      "score": 230,
      "time": 1772135926,
      "title": "What does \" 2>&1 \" mean?",
      "type": "story",
      "url": "https://stackoverflow.com/questions/818255/what-does-21-mean"
    },
    {
      "by": "noahkay13",
      "descendants": 2,
      "id": 47176239,
      "kids": [
        47176240,
        47176584
      ],
      "score": 26,
      "time": 1772164085,
      "title": "Parakeet.cpp – Parakeet ASR inference in pure C++ with Metal GPU acceleration",
      "type": "story",
      "url": "https://github.com/Frikallo/parakeet.cpp"
    },
    {
      "by": "paultendo",
      "descendants": 12,
      "id": 47150674,
      "kids": [
        47177382,
        47151139,
        47155711,
        47177337,
        47177058
      ],
      "score": 31,
      "time": 1772022636,
      "title": "I rendered 1,418 confusables over 230 fonts. Most aren't confusable to the eye",
      "type": "story",
      "url": "https://paultendo.github.io/posts/confusable-vision-visual-similarity/"
    },
    {
      "by": "zdw",
      "descendants": 20,
      "id": 47176581,
      "kids": [
        47177517,
        47177404,
        47177511,
        47177133,
        47177197,
        47177302,
        47177473,
        47177173,
        47177066,
        47177417,
        47177076
      ],
      "score": 53,
      "time": 1772167126,
      "title": "Dear Time Lords: Freeze Computers in 1993",
      "type": "story",
      "url": "https://graydon2.dreamwidth.org/322461.html"
    },
    {
      "by": "sxmawl",
      "descendants": 57,
      "id": 47170174,
      "kids": [
        47177462,
        47176198,
        47176428,
        47173306,
        47177286,
        47171039,
        47171683,
        47170872,
        47172520,
        47175736,
        47172747,
        47174192,
        47172163,
        47171616,
        47172064,
        47170960,
        47171909,
        47171942,
        47171550,
        47171744,
        47171184,
        47171401,
        47173388,
        47172659,
        47173294,
        47171979,
        47172101,
        47171737
      ],
      "score": 107,
      "text": "Hey HN - we&#x27;re Saksham and Ishan, and we’re building Cardboard (<a href=\"https:&#x2F;&#x2F;www.usecardboard.com\">https:&#x2F;&#x2F;www.usecardboard.com</a>). It lets you go from raw footage to an edited video by describing what you want in natural language. There’s a demo video at <a href=\"https:&#x2F;&#x2F;www.usecardboard.com&#x2F;share&#x2F;fUN2i9ft8B46\">https:&#x2F;&#x2F;www.usecardboard.com&#x2F;share&#x2F;fUN2i9ft8B46</a>, and you can try the product out at <a href=\"https:&#x2F;&#x2F;demo.usecardboard.com\">https:&#x2F;&#x2F;demo.usecardboard.com</a> (no login required!)<p>People sit on mountains of raw assets - product walkthroughs, customer interviews, travel videos, screen recordings, changelogs, etc. - that could become testimonials, ads, vlogs, launch videos, etc.<p>Instead they sit in cloud storage &#x2F; hard drives because getting to a first cut takes hours of scrubbing through the raw footage manually, arranging clips in correct sequence, syncing music, exporting, uploading to a cloud storage to share, and then getting feedback on WhatsApp&#x2F;iMessage&#x2F;Slack, then re-doing the same thing again till everyone is happy.<p>We grew up together and have been friends for 15 years. Saksham creates content on socials with ~250K views&#x2F;month and kept hitting the wall where editing took longer than creating. Ishan was producing launch videos for HackerRank&#x27;s all-hands demo days and spent most of his time on cuts and sequencing rather than storytelling. We both felt that while tools like Premiere Pro and DaVinci are powerful, they have a steep learning curve and involve lots of manual labor.<p>So we built Cardboard. You tell it to &quot;make a 60s recap from this raw footage&quot; or &quot;cut this into a 20s ad&quot; or &quot;beat-sync this to the music I just added&quot; and it proposes a first draft on the timeline that you can refine further.<p>We built a custom hardware-accelerated renderer on WebCodecs &#x2F; WebGL2, there’s no server-side rendering, no plugins, everything runs in your browser (client-side). Video understanding tasks go through a series of Cloud VLMs + traditional ML models, and we use third party foundational models for agent orchestration. We also give a dropdown for this to the end user.<p>We&#x27;ve shipped 13 releases since November (<a href=\"https:&#x2F;&#x2F;www.usecardboard.com&#x2F;changelog\">https:&#x2F;&#x2F;www.usecardboard.com&#x2F;changelog</a>). The editor handles multi-track timelines with keyframe animations, shot detection, beat sync via percussion detection, voiceover generation, voice cloning, background removal, multilingual captions that are spatially aware of subjects in frame, and Premiere Pro&#x2F;DaVinci&#x2F;FCP XML exports so you can move projects into your existing tools if you want.<p>Where we&#x27;re headed next: real-time collaboration (video git) to avoid inefficient feedback loops, and eventually a prediction engine that learns your editing patterns and suggests the next low entropy actions - similar to how Cursor&#x27;s tab completion works, but for timeline actions.<p>We believe that video creation tools today are stuck where developer tools were in the early 2000s: local-first, zero collaboration with really slow feedback loops.<p>Here are some videos that we made with Cardboard:\n- <a href=\"https:&#x2F;&#x2F;www.usecardboard.com&#x2F;share&#x2F;YYsstWeWE9KI\">https:&#x2F;&#x2F;www.usecardboard.com&#x2F;share&#x2F;YYsstWeWE9KI</a>\n- <a href=\"https:&#x2F;&#x2F;www.usecardboard.com&#x2F;share&#x2F;nyT9oj93sm1e\">https:&#x2F;&#x2F;www.usecardboard.com&#x2F;share&#x2F;nyT9oj93sm1e</a>\n- <a href=\"https:&#x2F;&#x2F;www.usecardboard.com&#x2F;share&#x2F;xK9mP2vR7nQ4\">https:&#x2F;&#x2F;www.usecardboard.com&#x2F;share&#x2F;xK9mP2vR7nQ4</a><p>We would love to hear your thoughts&#x2F;feedback.<p>We&#x27;ll be in the comments all day :)",
      "time": 1772131118,
      "title": "Launch HN: Cardboard (YC W26) – Agentic video editor",
      "type": "story",
      "url": "https://www.usecardboard.com/"
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
      "title": "An Open Letter to Google regarding Mandatory Developer Registration for Android",
      "url": "https://keepandroidopen.org/open-letter/",
      "score": 139,
      "comments": 27,
      "tags": [
        "android",
        "law",
        "privacy"
      ],
      "id": "uikg3e"
    },
    {
      "title": "How my side project got banned from the internet",
      "url": "https://trysound.io/how-my-side-project-got-banned-from-the-internet/",
      "score": 32,
      "comments": 2,
      "tags": [
        "security"
      ],
      "id": "wbpjmd"
    },
    {
      "title": "Making WebAssembly a first-class language on the Web",
      "url": "https://hacks.mozilla.org/2026/02/making-webassembly-a-first-class-language-on-the-web/",
      "score": 46,
      "comments": 17,
      "tags": [
        "wasm",
        "web"
      ],
      "id": "ul9mjj"
    },
    {
      "title": "Git in Postgres",
      "url": "https://nesbitt.io/2026/02/26/git-in-postgres.html",
      "score": 73,
      "comments": 18,
      "tags": [
        "databases",
        "vcs"
      ],
      "id": "ibkc72"
    },
    {
      "title": "snakes.run: rendering 100M pixels a second over ssh",
      "url": "https://eieio.games/blog/secure-massively-multiplayer-snake/",
      "score": 48,
      "comments": 5,
      "tags": [
        "games",
        "go"
      ],
      "id": "nxmzzn"
    },
    {
      "title": "Sliced by Go’s Slices",
      "url": "https://ohadravid.github.io/posts/2026-02-go-sliced/",
      "score": 15,
      "comments": 10,
      "tags": [
        "go",
        "plt"
      ],
      "id": "o3cpxf"
    },
    {
      "title": "Open Source Endowment — World's First Endowment Fund for OSS",
      "url": "https://endowment.dev/",
      "score": 16,
      "comments": 5,
      "tags": [
        "finance"
      ],
      "id": "bhzsdr"
    },
    {
      "title": "BuildKit: Docker's hidden gem that can build almost anything",
      "url": "https://tuananh.net/2026/02/25/buildkit-docker-hidden-gem/",
      "score": 26,
      "comments": 9,
      "tags": [
        "devops",
        "vibecoding"
      ],
      "id": "0pof41"
    },
    {
      "title": "Return of the Obra Dinn: spherical mapped dithering for a 1bpp 1st-person game (2017)",
      "url": "https://forums.tigsource.com/index.php?topic=40832.msg1363742#msg1363742",
      "score": 13,
      "comments": 1,
      "tags": [
        "graphics"
      ],
      "id": "bohhcq"
    },
    {
      "title": "Can LLMs SAT?",
      "url": "https://blog.aiono.dev/posts/can-llms-sat.html",
      "score": 10,
      "comments": 7,
      "tags": [
        "vibecoding"
      ],
      "id": "3kwdvv"
    }
  ]
}
```

