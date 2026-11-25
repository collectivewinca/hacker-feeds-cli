# Hacker Feeds Outcomes - Creators

Generated on: 2026-11-25 06:27:50 UTC

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
Request error: Request failed with status code 404
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "devto",
  "tag": null,
  "sort": "top",
  "items": [
    {
      "title": "Proofreader vs. Rewriter vs. Prompt API: Test the Task, Not the Demo",
      "description": "“Make this message better” is not one task. It can mean correcting a spelling mistake, changing the...",
      "url": "https://dev.to/gde/proofreader-vs-rewriter-vs-prompt-api-test-the-task-not-the-demo-pi9",
      "tags": "webdev, ai, typescript, testing",
      "reactions": 38,
      "comments": 32,
      "reading_time": 4,
      "author": "raju_dandigam"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-5559",
      "tags": "top7, discuss",
      "reactions": 66,
      "comments": 13,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "NYC: Escape the IVR at Twilio Assemble (Dec 8, Brooklyn)",
      "description": "If you're building AI agents in New York, this one's worth a weeknight.  Twilio Assemble, Twilio's...",
      "url": "https://dev.to/twilio/nyc-escape-the-ivr-at-twilio-assemble-dec-8-brooklyn-2dmb",
      "tags": "ai, events, nyc, agents",
      "reactions": 16,
      "comments": 0,
      "reading_time": 2,
      "author": "twiliodevs"
    },
    {
      "title": "Major League Hacking and SpaceXSI Come Together to Support the Next Generation of Builders",
      "description": "This initiative  will give thousands of students in the Major League Hacking (MLH) community access...",
      "url": "https://blog.mlh.com/major-league-hacking-and-spacexsi-come-together-to-support-the-next-generation-of-builders-feh",
      "tags": "ai, hackathon, grok, news",
      "reactions": 34,
      "comments": 1,
      "reading_time": 2,
      "author": "mlhacks"
    },
    {
      "title": "Why millions of agents don't need millions of VMs on Agent Substrate",
      "description": "How stateful agent harnesses run, suspend, and wake in under a second on Agent Substrate 1.0, from one VM to millions of actors.",
      "url": "https://dev.to/googlecloud/why-millions-of-agents-dont-need-millions-of-vms-on-agent-substrate-2ech",
      "tags": "agents, ai, architecture, infrastructure",
      "reactions": 6,
      "comments": 3,
      "reading_time": 9,
      "author": "eliasecchi"
    },
    {
      "title": "Build a Multilingual React Editor with Chrome’s Built-In AI",
      "description": "A translation can look polished and still be dangerous to apply. The application may preserve the...",
      "url": "https://dev.to/gde/build-a-multilingual-react-editor-with-chromes-built-in-ai-4863",
      "tags": "webdev, ai, typescript, react",
      "reactions": 19,
      "comments": 3,
      "reading_time": 4,
      "author": "raju_dandigam"
    },
    {
      "title": "One Chat, Three Clouds: An A2UI 1.0 Agent Mesh Over A2A on Google Cloud, AWS and Azure",
      "description": "Three A2UI 1.0 currency agents, one per cloud, joined over A2A behind one AG-UI coordinator. Google ADK and Gemini, Strands and Amazon Nova, Microsoft Agent Framework and Azure OpenAI answer in the same chat, one at a time or all three at once.",
      "url": "https://dev.to/gde/one-chat-three-clouds-an-a2ui-10-agent-mesh-over-a2a-on-google-cloud-aws-and-azure-2j83",
      "tags": "a2ui, a2a, multicloud, agents",
      "reactions": 17,
      "comments": 1,
      "reading_time": 13,
      "author": "xbill"
    },
    {
      "title": "Tell us your story, and we might read it on the CodeNewbie Podcast 🎙️",
      "description": "Hi! I’m Lauren 👩🏼‍💻, the new host of the CodeNewbie Podcast, and I’d love to hear your...",
      "url": "https://dev.to/codenewbie/tell-us-your-story-and-we-might-read-it-on-the-codenewbie-podcast-2840",
      "tags": "codenewbie, ai, beginners, codenewbiestory",
      "reactions": 52,
      "comments": 16,
      "reading_time": 4,
      "author": "lolocoding"
    },
    {
      "title": "Fast multimodal control flow with the Gemini Decisions API",
      "description": "Generative models write text for people to read. When your app only needs to pick a tool or route a...",
      "url": "https://dev.to/philschmid/fast-multimodal-control-flow-with-the-gemini-decisions-api-533b",
      "tags": "ai, api, gemini, llm",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "philschmid"
    },
    {
      "title": "E2B, E4B or 12B? On an 8 GB RTX 3050, Serve Gemma 4 E4B",
      "description": "The 12B is the largest Gemma 4 that fits on an 8 GB RTX 3050 and the most accurate with thinking off. E4B is the one to serve: with thinking on and Google's sampling settings it matched the 12B on the first 157 GSM8K problems, 153 each, in 0.55 hours against 0.96, with the full context on the card. At temperature 0 the 12B with thinking on loops.",
      "url": "https://dev.to/gde/e2b-e4b-or-12b-on-an-8-gb-rtx-3050-serve-gemma-4-e4b-1eji",
      "tags": "gemma, llm, benchmark, ai",
      "reactions": 27,
      "comments": 5,
      "reading_time": 14,
      "author": "xbill"
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
      "author": "Anil-matcha",
      "repo": "Open-Generative-AI",
      "avatar": "https://github.com/Anil-matcha.png",
      "repo_link": "https://github.com/Anil-matcha/Open-Generative-AI",
      "desc": "Uncensored AI Image & Video Generator — Free AI image & video generation studio with 800+ models (Flux, Midjourney, Kling, Sora, Veo). No content filters. Self-hosted, MIT licensed.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6950,
      "added_stars": 1020,
      "builtBy": [
        {
          "username": "Anil-matcha",
          "href": "https://github.com/Anil-matcha",
          "avatar": "https://avatars.githubusercontent.com/u/4326215"
        },
        {
          "username": "jaiprasad04",
          "href": "https://github.com/jaiprasad04",
          "avatar": "https://avatars.githubusercontent.com/u/114457757"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "WhiteRaven11",
          "href": "https://github.com/WhiteRaven11",
          "avatar": "https://avatars.githubusercontent.com/u/95498438"
        },
        {
          "username": "NgoQuocViet2001",
          "href": "https://github.com/NgoQuocViet2001",
          "avatar": "https://avatars.githubusercontent.com/u/123613986"
        }
      ]
    },
    {
      "author": "DeanChensj",
      "repo": "jiangshan-map",
      "avatar": "https://github.com/DeanChensj.png",
      "repo_link": "https://github.com/DeanChensj/jiangshan-map",
      "desc": "江山时序 · 中国历史交互地图时间轴 (403 BCE – Present) | Interactive Historical Atlas of China across 18 dynasties, 198 territory snapshots, ancient-to-modern place genealogy & classical poetry routes",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1141,
      "added_stars": 1516,
      "builtBy": [
        {
          "username": "DeanChensj",
          "href": "https://github.com/DeanChensj",
          "avatar": "https://avatars.githubusercontent.com/u/9414763"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mathieuwang",
          "href": "https://github.com/mathieuwang",
          "avatar": "https://avatars.githubusercontent.com/u/14016345"
        },
        {
          "username": "xcv58",
          "href": "https://github.com/xcv58",
          "avatar": "https://avatars.githubusercontent.com/u/503123"
        },
        {
          "username": "HEOJUNFO",
          "href": "https://github.com/HEOJUNFO",
          "avatar": "https://avatars.githubusercontent.com/u/100739943"
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
      "forks": 9125,
      "added_stars": 1465,
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
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "aaronbeashel",
          "href": "https://github.com/aaronbeashel",
          "avatar": "https://avatars.githubusercontent.com/u/93219218"
        },
        {
          "username": "FekyBaz",
          "href": "https://github.com/FekyBaz",
          "avatar": "https://avatars.githubusercontent.com/u/97516177"
        }
      ]
    },
    {
      "author": "jquery",
      "repo": "jquery",
      "avatar": "https://github.com/jquery.png",
      "repo_link": "https://github.com/jquery/jquery",
      "desc": "jQuery JavaScript Library",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 20634,
      "added_stars": 433,
      "builtBy": [
        {
          "username": "jeresig",
          "href": "https://github.com/jeresig",
          "avatar": "https://avatars.githubusercontent.com/u/1615"
        },
        {
          "username": "timmywil",
          "href": "https://github.com/timmywil",
          "avatar": "https://avatars.githubusercontent.com/u/192451"
        },
        {
          "username": "dmethvin",
          "href": "https://github.com/dmethvin",
          "avatar": "https://avatars.githubusercontent.com/u/157858"
        },
        {
          "username": "mgol",
          "href": "https://github.com/mgol",
          "avatar": "https://avatars.githubusercontent.com/u/1758366"
        },
        {
          "username": "jzaefferer",
          "href": "https://github.com/jzaefferer",
          "avatar": "https://avatars.githubusercontent.com/u/52585"
        }
      ]
    },
    {
      "author": "affaan-m",
      "repo": "ECC",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/ECC",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 45614,
      "added_stars": 5088,
      "builtBy": [
        {
          "username": "affaan-m",
          "href": "https://github.com/affaan-m",
          "avatar": "https://avatars.githubusercontent.com/u/124439313"
        },
        {
          "username": "haelyra",
          "href": "https://github.com/haelyra",
          "avatar": "https://avatars.githubusercontent.com/u/49814733"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "montjeffrey",
          "href": "https://github.com/montjeffrey",
          "avatar": "https://avatars.githubusercontent.com/u/24193489"
        }
      ]
    },
    {
      "author": "sveltejs",
      "repo": "svelte",
      "avatar": "https://github.com/sveltejs.png",
      "repo_link": "https://github.com/sveltejs/svelte",
      "desc": "web development for the rest of us",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6076,
      "added_stars": 1356,
      "builtBy": [
        {
          "username": "Rich-Harris",
          "href": "https://github.com/Rich-Harris",
          "avatar": "https://avatars.githubusercontent.com/u/1162160"
        },
        {
          "username": "dummdidumm",
          "href": "https://github.com/dummdidumm",
          "avatar": "https://avatars.githubusercontent.com/u/5968653"
        },
        {
          "username": "Conduitry",
          "href": "https://github.com/Conduitry",
          "avatar": "https://avatars.githubusercontent.com/u/16696352"
        },
        {
          "username": "trueadm",
          "href": "https://github.com/trueadm",
          "avatar": "https://avatars.githubusercontent.com/u/1519870"
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
      "forks": 8879,
      "added_stars": 348,
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
      "author": "addyosmani",
      "repo": "agent-skills",
      "avatar": "https://github.com/addyosmani.png",
      "repo_link": "https://github.com/addyosmani/agent-skills",
      "desc": "Production-grade engineering skills for AI coding agents.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 12503,
      "added_stars": 1645,
      "builtBy": [
        {
          "username": "addyosmani",
          "href": "https://github.com/addyosmani",
          "avatar": "https://avatars.githubusercontent.com/u/110953"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ayobamiseun",
          "href": "https://github.com/ayobamiseun",
          "avatar": "https://avatars.githubusercontent.com/u/66267222"
        },
        {
          "username": "nucliweb",
          "href": "https://github.com/nucliweb",
          "avatar": "https://avatars.githubusercontent.com/u/1307927"
        },
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        }
      ]
    },
    {
      "author": "vercel-labs",
      "repo": "agent-skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/agent-skills",
      "desc": "Vercel's official collection of agent skills",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3042,
      "added_stars": 547,
      "builtBy": [
        {
          "username": "aurorascharff",
          "href": "https://github.com/aurorascharff",
          "avatar": "https://avatars.githubusercontent.com/u/66901228"
        },
        {
          "username": "shuding",
          "href": "https://github.com/shuding",
          "avatar": "https://avatars.githubusercontent.com/u/3676859"
        },
        {
          "username": "quuu",
          "href": "https://github.com/quuu",
          "avatar": "https://avatars.githubusercontent.com/u/32676955"
        },
        {
          "username": "nandorojo",
          "href": "https://github.com/nandorojo",
          "avatar": "https://avatars.githubusercontent.com/u/13172299"
        },
        {
          "username": "JohnPhamous",
          "href": "https://github.com/JohnPhamous",
          "avatar": "https://avatars.githubusercontent.com/u/16027268"
        }
      ]
    },
    {
      "author": "saadeghi",
      "repo": "daisyui",
      "avatar": "https://github.com/saadeghi.png",
      "repo_link": "https://github.com/saadeghi/daisyui",
      "desc": "🌼 🌼 🌼 🌼 🌼  The most popular, free and open-source Tailwind CSS component library",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1727,
      "added_stars": 110,
      "builtBy": [
        {
          "username": "saadeghi",
          "href": "https://github.com/saadeghi",
          "avatar": "https://avatars.githubusercontent.com/u/7342023"
        },
        {
          "username": "sulimanbenhalim",
          "href": "https://github.com/sulimanbenhalim",
          "avatar": "https://avatars.githubusercontent.com/u/44615499"
        },
        {
          "username": "pdanpdan",
          "href": "https://github.com/pdanpdan",
          "avatar": "https://avatars.githubusercontent.com/u/118764"
        },
        {
          "username": "JamBalaya56562",
          "href": "https://github.com/JamBalaya56562",
          "avatar": "https://avatars.githubusercontent.com/u/88115388"
        },
        {
          "username": "withden",
          "href": "https://github.com/withden",
          "avatar": "https://avatars.githubusercontent.com/u/57515871"
        }
      ]
    },
    {
      "author": "GoogleChrome",
      "repo": "lighthouse",
      "avatar": "https://github.com/GoogleChrome.png",
      "repo_link": "https://github.com/GoogleChrome/lighthouse",
      "desc": "Automated auditing, performance metrics, and best practices for the web.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 9803,
      "added_stars": 70,
      "builtBy": [
        {
          "username": "connorjclark",
          "href": "https://github.com/connorjclark",
          "avatar": "https://avatars.githubusercontent.com/u/4071474"
        },
        {
          "username": "paulirish",
          "href": "https://github.com/paulirish",
          "avatar": "https://avatars.githubusercontent.com/u/39191"
        },
        {
          "username": "brendankenny",
          "href": "https://github.com/brendankenny",
          "avatar": "https://avatars.githubusercontent.com/u/316891"
        },
        {
          "username": "patrickhulce",
          "href": "https://github.com/patrickhulce",
          "avatar": "https://avatars.githubusercontent.com/u/2301202"
        },
        {
          "username": "adamraine",
          "href": "https://github.com/adamraine",
          "avatar": "https://avatars.githubusercontent.com/u/6752989"
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
      "title": "I Let Claude Code Create My AWS Account",
      "description": "Every time I've helped someone start on AWS, the same thing happens. They're keen, they have an idea,...",
      "url": "https://dev.to/aws/i-let-claude-code-create-my-aws-account-12gb",
      "tags": "aws, ai, mcp, claude",
      "reactions": 13,
      "comments": 8,
      "reading_time": 8,
      "author": "rohini_gaonkar"
    },
    {
      "title": "Why Your AI Release Notes Hallucinate: The \"Why vs What\" Problem in Git History",
      "description": "Passing raw git diffs to LLMs produces plausible but hallucinated changelogs. Here is why extracting the real \"why\" requires linked issues and counterfactual evals.",
      "url": "https://dev.to/necoz/why-your-ai-release-notes-hallucinate-the-why-vs-what-problem-in-git-history-5ch0",
      "tags": "ai, devops, github, programming",
      "reactions": 38,
      "comments": 14,
      "reading_time": 5,
      "author": "johnnylemonny"
    },
    {
      "title": "8 Best MCP Gateways",
      "description": "Connecting one agent to one MCP server is easy. You paste a URL, approve a prompt, and the agent...",
      "url": "https://dev.to/varshithvhegde/8-best-mcp-gateways-4ddf",
      "tags": "ai, programming, productivity, webdev",
      "reactions": 37,
      "comments": 13,
      "reading_time": 13,
      "author": "varshithvhegde"
    },
    {
      "title": "Lazy Senior Dev Mode Made My App Smaller. Was It Better?",
      "description": "Raise your hand if you've been curious about Ponytail. 🙋 Same spec, same model, same prompt. One...",
      "url": "https://dev.to/necoz/lazy-senior-dev-mode-made-my-app-smaller-was-it-better-90i",
      "tags": "ai, webdev, claude, necoz",
      "reactions": 23,
      "comments": 1,
      "reading_time": 10,
      "author": "earlgreyhot1701d"
    },
    {
      "title": "Your agent's tool registry is an API. Stop reviewing it like config.",
      "description": "Most agent security conversations start with the model. Can it be jailbroken? Will it follow an...",
      "url": "https://dev.to/cyclopt_dimitrisk/your-agents-tool-registry-is-an-api-stop-reviewing-it-like-config-40op",
      "tags": "ai, security, programming, discuss",
      "reactions": 39,
      "comments": 45,
      "reading_time": 3,
      "author": "cyclopt_dimitrisk"
    },
    {
      "title": "Your README lies. I built a tool that proves it with Kane CLI",
      "description": "READMEs lie. Not maliciously — they just drift. Someone changes the checkout flow, forgets to update...",
      "url": "https://dev.to/b_lacrade_b51cda712b6409a/your-readme-lies-i-built-a-tool-that-proves-it-with-kane-cli-jj2",
      "tags": "kanecli, testmuai, ai, testing",
      "reactions": 3,
      "comments": 3,
      "reading_time": 3,
      "author": "b_lacrade_b51cda712b6409a"
    },
    {
      "title": "I Tested My Prompt Against Plain English. One Answer Changed the Result.",
      "description": "A six-case pilot of a structured review prompt against plain English tied on a blinded second reading, and one ambiguous answer made the difference.",
      "url": "https://dev.to/gnomeman4201/i-tested-my-prompt-against-plain-english-one-answer-changed-the-result-4m3o",
      "tags": "llm, promptengineering, testing, ai",
      "reactions": 9,
      "comments": 0,
      "reading_time": 6,
      "author": "gnomeman4201"
    },
    {
      "title": "Claude Code Automated Refactoring Pipelines in 2026: Running AST Transforms and Letting the Agent Verify Its Own Output",
      "description": "Build refactoring pipelines that run TypeScript AST transforms through Claude Code and verify themselves with linters, type-checkers, and test suites before human review.",
      "url": "https://dev.to/jsmanifest/claude-code-automated-refactoring-pipelines-in-2026-running-ast-transforms-and-letting-the-agent-31ol",
      "tags": "typescript, ai, javascript, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 12,
      "author": "jsmanifest"
    },
    {
      "title": "Reverse engineering with your coding agent",
      "description": "I used REA with Claude Code to inspect Windows Calculator and an unnamed mobile app. Here is the workflow, the rebuild, and the limits.",
      "url": "https://dev.to/shubham399/reverse-engineering-with-your-coding-agent-30d6",
      "tags": "agents, reverseengineering, ai, tutorial",
      "reactions": 4,
      "comments": 0,
      "reading_time": 9,
      "author": "shubham399"
    },
    {
      "title": "Your AI Agent Trusted the Tool. The Tool Changed Overnight.",
      "description": "Subtitle: How changing MCP servers, modified tool schemas, and silent permission expansion can turn a...",
      "url": "https://dev.to/katul1512/your-ai-agent-trusted-the-tool-the-tool-changed-overnight-2f65",
      "tags": "agents, ai, mcp, security",
      "reactions": 6,
      "comments": 6,
      "reading_time": 16,
      "author": "katul1512"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "E-Reverance",
      "descendants": 203,
      "id": 50637220,
      "kids": [
        50637782,
        50637909,
        50637720,
        50637425,
        50637581,
        50637539,
        50638416,
        50638263,
        50637480,
        50638049,
        50637612,
        50637401,
        50638956,
        50637531,
        50637970,
        50638218,
        50638694,
        50637469,
        50637629,
        50638238,
        50638196,
        50638879,
        50638922,
        50637466,
        50637238,
        50637395,
        50638304,
        50638558,
        50638255,
        50637781,
        50637979,
        50637518,
        50638335,
        50638385,
        50637460
      ],
      "score": 427,
      "time": 1795569566,
      "title": "Matrix Multiplication is Θ(n^2.25) [pdf]",
      "type": "story",
      "url": "https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf"
    },
    {
      "by": "gaurang_tandon",
      "descendants": 14,
      "id": 50638032,
      "kids": [
        50638438,
        50639179,
        50638785,
        50639135,
        50638964,
        50638749,
        50638921,
        50638293,
        50638780,
        50638282,
        50638339
      ],
      "score": 164,
      "time": 1795576987,
      "title": "Button Sounds – collection of professionally-recorded button clicks and presses",
      "type": "story",
      "url": "https://buttons.joshwcomeau.com/"
    },
    {
      "by": "aanet",
      "descendants": 5,
      "id": 50638647,
      "kids": [
        50639084,
        50638918,
        50638648,
        50638873
      ],
      "score": 77,
      "time": 1795582596,
      "title": "Treasury CIO is too busy vibecoding instead of doing his job #147",
      "type": "story",
      "url": "https://github.com/samcorcos/legatum/issues/147"
    },
    {
      "by": "gmays",
      "descendants": 52,
      "id": 50637686,
      "kids": [
        50638341,
        50638579,
        50638450,
        50638971,
        50638147,
        50638357,
        50639160,
        50638433,
        50638051,
        50638342,
        50638701
      ],
      "score": 137,
      "time": 1795574061,
      "title": "Models Can Communicate via Inference Servers Despite Being Sandboxed",
      "type": "story",
      "url": "https://www.lesswrong.com/posts/7wzWuLP3HhyBLmKfo/models-can-communicate-via-inference-servers-despite-being"
    },
    {
      "by": "arkits",
      "descendants": 4,
      "id": 50638503,
      "kids": [
        50639138,
        50638561,
        50638882
      ],
      "score": 32,
      "time": 1795581108,
      "title": "Show HN: Old Nvidia and ATI tech demos, running again in the browser",
      "type": "story",
      "url": "https://gpu-demo-gallery.pages.dev/"
    },
    {
      "by": "b0m",
      "descendants": 133,
      "id": 50633922,
      "kids": [
        50635106,
        50634586,
        50636582,
        50635809,
        50635553,
        50634762,
        50634686,
        50639000,
        50634595,
        50636825,
        50634850,
        50637289,
        50634610,
        50634713,
        50636808,
        50634631,
        50634519,
        50635850,
        50634758,
        50636371,
        50634639,
        50636926,
        50634601,
        50636777,
        50636139,
        50635798,
        50635386,
        50636509,
        50636982,
        50636632,
        50636620,
        50635767,
        50635095
      ],
      "score": 409,
      "time": 1795550883,
      "title": "Ternary Bonsai 2.5 27B",
      "type": "story",
      "url": "https://prismml.com/news/bonsai-2-5-27b"
    },
    {
      "by": "smusamashah",
      "descendants": 30,
      "id": 50637056,
      "kids": [
        50638604,
        50637580,
        50638755,
        50638983,
        50637942,
        50637624,
        50637817,
        50637658,
        50638368,
        50638628,
        50638449,
        50637575,
        50637645,
        50637392,
        50637541,
        50637832,
        50638301,
        50637362,
        50637846
      ],
      "score": 179,
      "time": 1795568089,
      "title": "PenGPT: A Generative Transformer for Handwriting and Sketches",
      "type": "story",
      "url": "https://greydanus.github.io/2026/11/12/pengpt/"
    },
    {
      "by": "Curiositry",
      "descendants": 11,
      "id": 50638220,
      "kids": [
        50638406,
        50638627,
        50638303,
        50639099
      ],
      "score": 54,
      "time": 1795578462,
      "title": "Marginalia Search, Money, C++, Rust, AI, Stuff",
      "type": "story",
      "url": "https://www.marginalia.nu/log/a_141_marginalia_update/"
    },
    {
      "by": "vinhnx",
      "descendants": 21,
      "id": 50637890,
      "kids": [
        50639178,
        50638744,
        50638930,
        50638425,
        50638984,
        50638363,
        50638280,
        50638522,
        50639125,
        50639112,
        50638988,
        50638285
      ],
      "score": 84,
      "time": 1795575877,
      "title": "Bypassing iOS Safari's 60 FPS Limit to Build Web Applications That Feel Native",
      "type": "story",
      "url": "https://rida.dev/blog/bypassing-ios-safari-60-fps-limit"
    },
    {
      "by": "hoodied",
      "descendants": 71,
      "id": 50638320,
      "kids": [
        50638708,
        50639022,
        50638664,
        50638863,
        50638737,
        50638898,
        50638729,
        50639131,
        50638631,
        50638845,
        50638792,
        50638760,
        50639061,
        50639141,
        50638719,
        50638860,
        50638830,
        50639037,
        50638810,
        50638993,
        50638639,
        50638900,
        50638869,
        50638958,
        50638751,
        50638957,
        50638822
      ],
      "score": 103,
      "time": 1795579413,
      "title": "Gemini refused to give me the lyrics to Twinkle Twinkle Little Star",
      "type": "story",
      "url": "https://www.comentr.com/technology/01M88DWQ0R4NCMYR17AFEWRG1F"
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
Request error: Request failed with status code 429
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
      "by": "E-Reverance",
      "descendants": 203,
      "id": 50637220,
      "kids": [
        50637782,
        50637909,
        50637720,
        50637425,
        50637581,
        50637539,
        50638416,
        50638263,
        50637480,
        50638049,
        50637612,
        50637401,
        50638956,
        50637531,
        50637970,
        50638218,
        50638694,
        50637469,
        50637629,
        50638238,
        50638196,
        50638879,
        50638922,
        50637466,
        50637238,
        50637395,
        50638304,
        50638558,
        50638255,
        50637781,
        50637979,
        50637518,
        50638335,
        50638385,
        50637460
      ],
      "score": 427,
      "time": 1795569566,
      "title": "Matrix Multiplication is Θ(n^2.25) [pdf]",
      "type": "story",
      "url": "https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf"
    },
    {
      "by": "gaurang_tandon",
      "descendants": 14,
      "id": 50638032,
      "kids": [
        50638438,
        50639179,
        50638785,
        50639135,
        50638964,
        50638749,
        50638921,
        50638293,
        50638780,
        50638282,
        50638339
      ],
      "score": 164,
      "time": 1795576987,
      "title": "Button Sounds – collection of professionally-recorded button clicks and presses",
      "type": "story",
      "url": "https://buttons.joshwcomeau.com/"
    },
    {
      "by": "aanet",
      "descendants": 5,
      "id": 50638647,
      "kids": [
        50639084,
        50638918,
        50638648,
        50638873
      ],
      "score": 77,
      "time": 1795582596,
      "title": "Treasury CIO is too busy vibecoding instead of doing his job #147",
      "type": "story",
      "url": "https://github.com/samcorcos/legatum/issues/147"
    },
    {
      "by": "gmays",
      "descendants": 52,
      "id": 50637686,
      "kids": [
        50638341,
        50638579,
        50638450,
        50638971,
        50638147,
        50638357,
        50639160,
        50638433,
        50638051,
        50638342,
        50638701
      ],
      "score": 137,
      "time": 1795574061,
      "title": "Models Can Communicate via Inference Servers Despite Being Sandboxed",
      "type": "story",
      "url": "https://www.lesswrong.com/posts/7wzWuLP3HhyBLmKfo/models-can-communicate-via-inference-servers-despite-being"
    },
    {
      "by": "arkits",
      "descendants": 4,
      "id": 50638503,
      "kids": [
        50639138,
        50638561,
        50638882
      ],
      "score": 32,
      "time": 1795581108,
      "title": "Show HN: Old Nvidia and ATI tech demos, running again in the browser",
      "type": "story",
      "url": "https://gpu-demo-gallery.pages.dev/"
    },
    {
      "by": "b0m",
      "descendants": 133,
      "id": 50633922,
      "kids": [
        50635106,
        50634586,
        50636582,
        50635809,
        50635553,
        50634762,
        50634686,
        50639000,
        50634595,
        50636825,
        50634850,
        50637289,
        50634610,
        50634713,
        50636808,
        50634631,
        50634519,
        50635850,
        50634758,
        50636371,
        50634639,
        50636926,
        50634601,
        50636777,
        50636139,
        50635798,
        50635386,
        50636509,
        50636982,
        50636632,
        50636620,
        50635767,
        50635095
      ],
      "score": 409,
      "time": 1795550883,
      "title": "Ternary Bonsai 2.5 27B",
      "type": "story",
      "url": "https://prismml.com/news/bonsai-2-5-27b"
    },
    {
      "by": "smusamashah",
      "descendants": 30,
      "id": 50637056,
      "kids": [
        50638604,
        50637580,
        50638755,
        50638983,
        50637942,
        50637624,
        50637817,
        50637658,
        50638368,
        50638628,
        50638449,
        50637575,
        50637645,
        50637392,
        50637541,
        50637832,
        50638301,
        50637362,
        50637846
      ],
      "score": 179,
      "time": 1795568089,
      "title": "PenGPT: A Generative Transformer for Handwriting and Sketches",
      "type": "story",
      "url": "https://greydanus.github.io/2026/11/12/pengpt/"
    },
    {
      "by": "Curiositry",
      "descendants": 11,
      "id": 50638220,
      "kids": [
        50638406,
        50638627,
        50638303,
        50639099
      ],
      "score": 54,
      "time": 1795578462,
      "title": "Marginalia Search, Money, C++, Rust, AI, Stuff",
      "type": "story",
      "url": "https://www.marginalia.nu/log/a_141_marginalia_update/"
    },
    {
      "by": "vinhnx",
      "descendants": 21,
      "id": 50637890,
      "kids": [
        50639178,
        50638744,
        50638930,
        50638425,
        50638984,
        50638363,
        50638280,
        50638522,
        50639125,
        50639112,
        50638988,
        50638285
      ],
      "score": 84,
      "time": 1795575877,
      "title": "Bypassing iOS Safari's 60 FPS Limit to Build Web Applications That Feel Native",
      "type": "story",
      "url": "https://rida.dev/blog/bypassing-ios-safari-60-fps-limit"
    },
    {
      "by": "hoodied",
      "descendants": 71,
      "id": 50638320,
      "kids": [
        50638708,
        50639022,
        50638664,
        50638863,
        50638737,
        50638898,
        50638729,
        50639131,
        50638631,
        50638845,
        50638792,
        50638760,
        50639061,
        50639141,
        50638719,
        50638860,
        50638830,
        50639037,
        50638810,
        50638993,
        50638639,
        50638900,
        50638869,
        50638958,
        50638751,
        50638957,
        50638822
      ],
      "score": 103,
      "time": 1795579413,
      "title": "Gemini refused to give me the lyrics to Twinkle Twinkle Little Star",
      "type": "story",
      "url": "https://www.comentr.com/technology/01M88DWQ0R4NCMYR17AFEWRG1F"
    },
    {
      "by": "negura",
      "descendants": 0,
      "id": 50638478,
      "score": 21,
      "time": 1795580875,
      "title": "Taking over US Treasury subdomains for $3 each",
      "type": "story",
      "url": "https://www.intruder.io/research/taking-over-us-treasury-subdomains-for-3-each"
    },
    {
      "by": "vinhnx",
      "descendants": 8,
      "id": 50637888,
      "kids": [
        50638567,
        50638804,
        50638570
      ],
      "score": 38,
      "time": 1795575852,
      "title": "Lua for Data Representation",
      "type": "story",
      "url": "https://citrons.xyz/journal/2025-07-23"
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
      "title": "Pokemon Childhood Version: A romhack where Mew is under the truck",
      "url": "https://wheybags.com/blog/pokemon_childhood_version.html",
      "score": 29,
      "comments": 1,
      "tags": [
        "assembly",
        "games"
      ],
      "id": "em9zdb"
    },
    {
      "title": "2035 came early",
      "url": "https://fzakaria.com/2026/11/23/2035-came-early",
      "score": 102,
      "comments": 6,
      "tags": [
        "nix",
        "wasm"
      ],
      "id": "rkk6o8"
    },
    {
      "title": "I checked Clojure's core with Lean and found 17 unreported bugs",
      "url": "https://s.conao3.com/blog/2026/e4f733",
      "score": 65,
      "comments": 4,
      "tags": [
        "clojure"
      ],
      "id": "yyktrz"
    },
    {
      "title": "Security incident on Hex.pm",
      "url": "https://hex.pm/blog/security-incident-on-hexpm",
      "score": 52,
      "comments": 5,
      "tags": [
        "elixir",
        "erlang",
        "gleam"
      ],
      "id": "rfcgkx"
    },
    {
      "title": "Why there are still no non-WebKit browsers on iOS",
      "url": "https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/",
      "score": 26,
      "comments": 2,
      "tags": [
        "browsers",
        "ios"
      ],
      "id": "sv2flr"
    },
    {
      "title": "Per Vognsen on the effect of AVX-512 on lexing and parsing",
      "url": "https://mastodon.social/@pervognsen/117668394962974183",
      "score": 29,
      "comments": 10,
      "tags": [
        "compilers",
        "performance"
      ],
      "id": "m7gqr6"
    },
    {
      "title": "9/UX: a Macintosh-inspired desktop for 9front",
      "url": "https://progrium.github.io/9ux/",
      "score": 14,
      "comments": 3,
      "tags": [
        "ai",
        "osdev"
      ],
      "id": "vciex6"
    },
    {
      "title": "A faster algorithm for extracting hexadecimal digits of π",
      "url": "https://www.stylewarning.com/posts/faster-digit-extraction/",
      "score": 7,
      "comments": 4,
      "tags": [
        "compsci"
      ],
      "id": "qavfgc"
    },
    {
      "title": "Abolish Lock Poisoning",
      "url": "https://lucumr.pocoo.org/2026/11/25/poisoning/",
      "score": 5,
      "comments": 1,
      "tags": [
        "rust"
      ],
      "id": "sj2pkv"
    },
    {
      "title": "Matrix Multiplication is Θ(n^2.25)",
      "url": "https://raw.githubusercontent.com/openai/math/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf",
      "score": 3,
      "comments": 3,
      "tags": [
        "ai",
        "math",
        "pdf"
      ],
      "id": "kn0pmh"
    }
  ]
}
```

