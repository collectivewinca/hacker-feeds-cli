# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-28 07:11:52 UTC

Runtime note: executed with NODE_OPTIONS=--require /tmp/hf-polyfill.js

## 1. Weekend Build Ideas with Demand

**Query:** What should I build this weekend that has demand?

**Command:**
```bash
echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set' ; node bin/main.js --json github -s weekly -l typescript ; node bin/main.js --json reddit -t webdev -s top
```

**Output:**
```text
[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set
- Fetching feeds...
{
  "source": "github",
  "since": "weekly",
  "language": "typescript",
  "items": [
    {
      "author": "zilliztech",
      "repo": "claude-context",
      "avatar": "https://github.com/zilliztech.png",
      "repo_link": "https://github.com/zilliztech/claude-context",
      "desc": "Code search MCP for Claude Code. Make entire codebase the context for any coding agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 750,
      "added_stars": 3725,
      "builtBy": [
        {
          "username": "zc277584121",
          "href": "https://github.com/zc277584121",
          "avatar": "https://avatars.githubusercontent.com/u/17022025"
        },
        {
          "username": "Shawnzheng011019",
          "href": "https://github.com/Shawnzheng011019",
          "avatar": "https://avatars.githubusercontent.com/u/88486803"
        },
        {
          "username": "codingjaguar",
          "href": "https://github.com/codingjaguar",
          "avatar": "https://avatars.githubusercontent.com/u/7064054"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "jaxkodex",
          "href": "https://github.com/jaxkodex",
          "avatar": "https://avatars.githubusercontent.com/u/2271391"
        }
      ]
    },
    {
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output, 98% reduction. 14 platforms",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 743,
      "added_stars": 2346,
      "builtBy": [
        {
          "username": "mksglu",
          "href": "https://github.com/mksglu",
          "avatar": "https://avatars.githubusercontent.com/u/6067714"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ipedro",
          "href": "https://github.com/ipedro",
          "avatar": "https://avatars.githubusercontent.com/u/380338"
        },
        {
          "username": "rjkaes",
          "href": "https://github.com/rjkaes",
          "avatar": "https://avatars.githubusercontent.com/u/128173"
        }
      ]
    },
    {
      "author": "thunderbird",
      "repo": "thunderbolt",
      "avatar": "https://github.com/thunderbird.png",
      "repo_link": "https://github.com/thunderbird/thunderbolt",
      "desc": "AI You Control: Choose your models. Own your data. Eliminate vendor lock-in.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 281,
      "added_stars": 1675,
      "builtBy": [
        {
          "username": "cjroth",
          "href": "https://github.com/cjroth",
          "avatar": "https://avatars.githubusercontent.com/u/582130"
        },
        {
          "username": "raivieiraadriano92",
          "href": "https://github.com/raivieiraadriano92",
          "avatar": "https://avatars.githubusercontent.com/u/14861463"
        },
        {
          "username": "ital0",
          "href": "https://github.com/ital0",
          "avatar": "https://avatars.githubusercontent.com/u/5700402"
        },
        {
          "username": "darkbanjo",
          "href": "https://github.com/darkbanjo",
          "avatar": "https://avatars.githubusercontent.com/u/75756250"
        },
        {
          "username": "arienemaiara",
          "href": "https://github.com/arienemaiara",
          "avatar": "https://avatars.githubusercontent.com/u/5312296"
        }
      ]
    },
    {
      "author": "multica-ai",
      "repo": "multica",
      "avatar": "https://github.com/multica-ai.png",
      "repo_link": "https://github.com/multica-ai/multica",
      "desc": "The open-source managed agents platform. Turn coding agents into real teammates — assign tasks, track progress, compound skills.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2700,
      "added_stars": 4532,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "forrestchang",
          "href": "https://github.com/forrestchang",
          "avatar": "https://avatars.githubusercontent.com/u/7857126"
        },
        {
          "username": "NevilleQingNY",
          "href": "https://github.com/NevilleQingNY",
          "avatar": "https://avatars.githubusercontent.com/u/145280634"
        },
        {
          "username": "Bohan-J",
          "href": "https://github.com/Bohan-J",
          "avatar": "https://avatars.githubusercontent.com/u/52446949"
        },
        {
          "username": "ldnvnbl",
          "href": "https://github.com/ldnvnbl",
          "avatar": "https://avatars.githubusercontent.com/u/3798479"
        }
      ]
    },
    {
      "author": "langfuse",
      "repo": "langfuse",
      "avatar": "https://github.com/langfuse.png",
      "repo_link": "https://github.com/langfuse/langfuse",
      "desc": "🪢 Open source LLM engineering platform: LLM Observability, metrics, evals, prompt management, playground, datasets. Integrates with OpenTelemetry, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2652,
      "added_stars": 987,
      "builtBy": [
        {
          "username": "marcklingen",
          "href": "https://github.com/marcklingen",
          "avatar": "https://avatars.githubusercontent.com/u/2834609"
        },
        {
          "username": "maxdeichmann",
          "href": "https://github.com/maxdeichmann",
          "avatar": "https://avatars.githubusercontent.com/u/17686849"
        },
        {
          "username": "Steffen911",
          "href": "https://github.com/Steffen911",
          "avatar": "https://avatars.githubusercontent.com/u/14163614"
        },
        {
          "username": "marliessophie",
          "href": "https://github.com/marliessophie",
          "avatar": "https://avatars.githubusercontent.com/u/74332854"
        },
        {
          "username": "nimarb",
          "href": "https://github.com/nimarb",
          "avatar": "https://avatars.githubusercontent.com/u/246059"
        }
      ]
    },
    {
      "author": "CherryHQ",
      "repo": "cherry-studio",
      "avatar": "https://github.com/CherryHQ.png",
      "repo_link": "https://github.com/CherryHQ/cherry-studio",
      "desc": "AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Unified access to frontier LLMs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4235,
      "added_stars": 729,
      "builtBy": [
        {
          "username": "kangfenmao",
          "href": "https://github.com/kangfenmao",
          "avatar": "https://avatars.githubusercontent.com/u/8253512"
        },
        {
          "username": "EurFelux",
          "href": "https://github.com/EurFelux",
          "avatar": "https://avatars.githubusercontent.com/u/59059173"
        },
        {
          "username": "DeJeune",
          "href": "https://github.com/DeJeune",
          "avatar": "https://avatars.githubusercontent.com/u/67425183"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "alephpiece",
          "href": "https://github.com/alephpiece",
          "avatar": "https://avatars.githubusercontent.com/u/22237751"
        }
      ]
    },
    {
      "author": "jamiepine",
      "repo": "voicebox",
      "avatar": "https://github.com/jamiepine.png",
      "repo_link": "https://github.com/jamiepine/voicebox",
      "desc": "The open-source AI voice studio. Clone, dictate, create.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2809,
      "added_stars": 2123,
      "builtBy": [
        {
          "username": "jamiepine",
          "href": "https://github.com/jamiepine",
          "avatar": "https://avatars.githubusercontent.com/u/32987599"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tomasmach",
          "href": "https://github.com/tomasmach",
          "avatar": "https://avatars.githubusercontent.com/u/52257177"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "selop",
          "href": "https://github.com/selop",
          "avatar": "https://avatars.githubusercontent.com/u/5173254"
        }
      ]
    },
    {
      "author": "badlogic",
      "repo": "pi-mono",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-mono",
      "desc": "AI agent toolkit: coding agent CLI, unified LLM API, TUI & web UI libraries, Slack bot, vLLM pods",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4882,
      "added_stars": 3727,
      "builtBy": [
        {
          "username": "badlogic",
          "href": "https://github.com/badlogic",
          "avatar": "https://avatars.githubusercontent.com/u/514052"
        },
        {
          "username": "hjanuschka",
          "href": "https://github.com/hjanuschka",
          "avatar": "https://avatars.githubusercontent.com/u/2891702"
        },
        {
          "username": "mitsuhiko",
          "href": "https://github.com/mitsuhiko",
          "avatar": "https://avatars.githubusercontent.com/u/7396"
        },
        {
          "username": "aliou",
          "href": "https://github.com/aliou",
          "avatar": "https://avatars.githubusercontent.com/u/980367"
        }
      ]
    },
    {
      "author": "mnfst",
      "repo": "manifest",
      "avatar": "https://github.com/mnfst.png",
      "repo_link": "https://github.com/mnfst/manifest",
      "desc": "Smart Model Routing for Personal AI Agents. Cut Costs up to 70% 🦞👧🦚",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 331,
      "added_stars": 430,
      "builtBy": [
        {
          "username": "brunobuddy",
          "href": "https://github.com/brunobuddy",
          "avatar": "https://avatars.githubusercontent.com/u/6626184"
        },
        {
          "username": "SebConejo",
          "href": "https://github.com/SebConejo",
          "avatar": "https://avatars.githubusercontent.com/u/11723962"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "guillaumegay13",
          "href": "https://github.com/guillaumegay13",
          "avatar": "https://avatars.githubusercontent.com/u/141296636"
        }
      ]
    },
    {
      "author": "playcanvas",
      "repo": "supersplat",
      "avatar": "https://github.com/playcanvas.png",
      "repo_link": "https://github.com/playcanvas/supersplat",
      "desc": "3D Gaussian Splat Editor",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 585,
      "added_stars": 468,
      "builtBy": [
        {
          "username": "slimbuck",
          "href": "https://github.com/slimbuck",
          "avatar": "https://avatars.githubusercontent.com/u/11276292"
        },
        {
          "username": "willeastcott",
          "href": "https://github.com/willeastcott",
          "avatar": "https://avatars.githubusercontent.com/u/697563"
        },
        {
          "username": "simonbethke",
          "href": "https://github.com/simonbethke",
          "avatar": "https://avatars.githubusercontent.com/u/11922599"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "gitroomhq",
      "repo": "postiz-app",
      "avatar": "https://github.com/gitroomhq.png",
      "repo_link": "https://github.com/gitroomhq/postiz-app",
      "desc": "📨 The ultimate agentic social media scheduling tool 🤖",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5360,
      "added_stars": 580,
      "builtBy": [
        {
          "username": "nevo-david",
          "href": "https://github.com/nevo-david",
          "avatar": "https://avatars.githubusercontent.com/u/100117126"
        },
        {
          "username": "egelhaus",
          "href": "https://github.com/egelhaus",
          "avatar": "https://avatars.githubusercontent.com/u/156946629"
        },
        {
          "username": "jamesread",
          "href": "https://github.com/jamesread",
          "avatar": "https://avatars.githubusercontent.com/u/2025715"
        },
        {
          "username": "jonathan-irvin",
          "href": "https://github.com/jonathan-irvin",
          "avatar": "https://avatars.githubusercontent.com/u/2481437"
        },
        {
          "username": "weblate",
          "href": "https://github.com/weblate",
          "avatar": "https://avatars.githubusercontent.com/u/1607653"
        }
      ]
    },
    {
      "author": "n8n-io",
      "repo": "n8n",
      "avatar": "https://github.com/n8n-io.png",
      "repo_link": "https://github.com/n8n-io/n8n",
      "desc": "Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 57183,
      "added_stars": 1197,
      "builtBy": [
        {
          "username": "janober",
          "href": "https://github.com/janober",
          "avatar": "https://avatars.githubusercontent.com/u/6249596"
        },
        {
          "username": "ivov",
          "href": "https://github.com/ivov",
          "avatar": "https://avatars.githubusercontent.com/u/44588767"
        },
        {
          "username": "netroy",
          "href": "https://github.com/netroy",
          "avatar": "https://avatars.githubusercontent.com/u/196144"
        },
        {
          "username": "RicardoE105",
          "href": "https://github.com/RicardoE105",
          "avatar": "https://avatars.githubusercontent.com/u/16496553"
        },
        {
          "username": "michael-radency",
          "href": "https://github.com/michael-radency",
          "avatar": "https://avatars.githubusercontent.com/u/88898367"
        }
      ]
    },
    {
      "author": "EvolutionAPI",
      "repo": "evolution-api",
      "avatar": "https://github.com/EvolutionAPI.png",
      "repo_link": "https://github.com/EvolutionAPI/evolution-api",
      "desc": "Evolution API is an open-source WhatsApp integration API",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6141,
      "added_stars": 110,
      "builtBy": [
        {
          "username": "DavidsonGomes",
          "href": "https://github.com/DavidsonGomes",
          "avatar": "https://avatars.githubusercontent.com/u/24706726"
        },
        {
          "username": "dgcode-tec",
          "href": "https://github.com/dgcode-tec",
          "avatar": "https://avatars.githubusercontent.com/u/135461850"
        },
        {
          "username": "judsonjuniorr",
          "href": "https://github.com/judsonjuniorr",
          "avatar": "https://avatars.githubusercontent.com/u/44608323"
        },
        {
          "username": "KokeroO",
          "href": "https://github.com/KokeroO",
          "avatar": "https://avatars.githubusercontent.com/u/29261763"
        },
        {
          "username": "jaison-x",
          "href": "https://github.com/jaison-x",
          "avatar": "https://avatars.githubusercontent.com/u/5599142"
        }
      ]
    },
    {
      "author": "KeygraphHQ",
      "repo": "shannon",
      "avatar": "https://github.com/KeygraphHQ.png",
      "repo_link": "https://github.com/KeygraphHQ/shannon",
      "desc": "Shannon Lite is an autonomous, white-box AI pentester for web applications and APIs. It analyzes your source code, identifies attack vectors, and executes real exploits to prove vulnerabilities before they reach production.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4542,
      "added_stars": 1976,
      "builtBy": [
        {
          "username": "ajmallesh",
          "href": "https://github.com/ajmallesh",
          "avatar": "https://avatars.githubusercontent.com/u/178829317"
        },
        {
          "username": "ezl-keygraph",
          "href": "https://github.com/ezl-keygraph",
          "avatar": "https://avatars.githubusercontent.com/u/252853768"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "keygraphVarun",
          "href": "https://github.com/keygraphVarun",
          "avatar": "https://avatars.githubusercontent.com/u/182007681"
        },
        {
          "username": "Khaushik-keygraph",
          "href": "https://github.com/Khaushik-keygraph",
          "avatar": "https://avatars.githubusercontent.com/u/197124057"
        }
      ]
    },
    {
      "author": "siyuan-note",
      "repo": "siyuan",
      "avatar": "https://github.com/siyuan-note.png",
      "repo_link": "https://github.com/siyuan-note/siyuan",
      "desc": "A privacy-first, self-hosted, fully open source personal knowledge management software, written in typescript and golang.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2730,
      "added_stars": 249,
      "builtBy": [
        {
          "username": "Vanessa219",
          "href": "https://github.com/Vanessa219",
          "avatar": "https://avatars.githubusercontent.com/u/970828"
        },
        {
          "username": "88250",
          "href": "https://github.com/88250",
          "avatar": "https://avatars.githubusercontent.com/u/873584"
        },
        {
          "username": "TCOTC",
          "href": "https://github.com/TCOTC",
          "avatar": "https://avatars.githubusercontent.com/u/78434827"
        },
        {
          "username": "Zuoqiu-Yingyi",
          "href": "https://github.com/Zuoqiu-Yingyi",
          "avatar": "https://avatars.githubusercontent.com/u/49649786"
        }
      ]
    },
    {
      "author": "open-metadata",
      "repo": "OpenMetadata",
      "avatar": "https://github.com/open-metadata.png",
      "repo_link": "https://github.com/open-metadata/OpenMetadata",
      "desc": "OpenMetadata is a unified metadata platform for data discovery, data observability, and data governance powered by a central metadata repository, in-depth column level lineage, and seamless team collaboration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2058,
      "added_stars": 2499,
      "builtBy": [
        {
          "username": "pmbrull",
          "href": "https://github.com/pmbrull",
          "avatar": "https://avatars.githubusercontent.com/u/35870520"
        },
        {
          "username": "harshach",
          "href": "https://github.com/harshach",
          "avatar": "https://avatars.githubusercontent.com/u/38649"
        },
        {
          "username": "ShaileshParmar11",
          "href": "https://github.com/ShaileshParmar11",
          "avatar": "https://avatars.githubusercontent.com/u/71748675"
        },
        {
          "username": "chirag-madlani",
          "href": "https://github.com/chirag-madlani",
          "avatar": "https://avatars.githubusercontent.com/u/12962843"
        },
        {
          "username": "Sachin-chaurasiya",
          "href": "https://github.com/Sachin-chaurasiya",
          "avatar": "https://avatars.githubusercontent.com/u/59080942"
        }
      ]
    }
  ]
}
- Fetching feeds...
{
  "source": "reddit",
  "topic": "webdev",
  "sort": "top",
  "items": [
    {
      "title": "Agentic Coding is a Trap | Remaining vigilant about cognitive debt and atrophy",
      "url": "https://larsfaye.com/articles/agentic-coding-is-a-trap",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sx3ygy/agentic_coding_is_a_trap_remaining_vigilant_about/",
      "author": "/u/creaturefeature16",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/creaturefeature16 [link] &#32; [comments]",
      "published": "2026-04-27T13:37:56+00:00"
    },
    {
      "title": "What’s the most overhyped trend in modern web design right now?",
      "url": "https://www.reddit.com/r/webdev/comments/1sx2417/whats_the_most_overhyped_trend_in_modern_web/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sx2417/whats_the_most_overhyped_trend_in_modern_web/",
      "author": "/u/Afsheen_dev",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "We’ve gone through glassmorphism, neumorphism, excessive animations, and scroll-heavy storytelling. Lately even AI-generated UI styles and ultra-minimal “clean” layouts are everywhere. Some of it looks great at first glance but adds little value. What’s a design trend you think is all style and no real substance? &#32; submitted by &#32; /u/Afsheen_dev [link] &#32; [comments]",
      "published": "2026-04-27T12:24:45+00:00"
    },
    {
      "title": "two types of clients in development are keeping me busy in 2026 and both think what they need is simple",
      "url": "https://www.reddit.com/r/webdev/comments/1swxnhi/two_types_of_clients_in_development_are_keeping/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swxnhi/two_types_of_clients_in_development_are_keeping/",
      "author": "/u/Academic_Flamingo302",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "every project falls into one of two buckets. bucket one: the indian startup founder comes in with a vibe coded app. it works. genuinely, it works, users are on it, sometimes there is even revenue. they are proud of it and they should be, getting to that point without a technical background is not nothing. then they want to add a payment gateway. or an API integration. or user roles. &quot;everything is already built so it should be easy right, just adding something on top&quot; open the codebase. one file. six thousand lines. no separation of concerns. state managed in ways that made sense to whoever was prompting at 2am. the payment gateway integration requires touching seventeen different places because nothing is modular. adding user roles means the entire auth logic needs to be rewritten because it was not designed with that in mind. explaining this to the client is its own skill. they built something real. i am not dismissing that. but &quot;just adding&quot; to a vibe coded codebase is sometimes harder than starting clean. bucket two: the US based client different problem entirely. we built their site. good build. clean code. they were happy. then they came back because their competitor, objectively worse site, was showing up in AI recommendations for their category and theirs was not. they wanted to know what we did wrong. we had not done anything wrong by the standards we were building to six months ago. but their competitor had all their key content in plain semantic HTML on initial load. ours had content in javascript rendered components. parser hits the page, reads whatever is in the document on first parse, moves on. the good stuff never gets read. we sorted it last year. restructured the document layer without touching the visual design. they show up in AI recommendations now. it is fine. but both of these things are now part of every project conversation whether we planned for them or not. anyway. it is monday. there is a new client in the inbox who wants to &quot;just add&quot; something. the estimate is going to hurt them. such is life. &#32; submitted by &#32; /u/Academic_Flamingo302 [link] &#32; [comments]",
      "published": "2026-04-27T08:29:04+00:00"
    },
    {
      "title": "Can someone explain to me why the font is rendered in this way in safari?",
      "url": "https://i.redd.it/2dlbp28fwrxg1.jpeg",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sxbl7d/can_someone_explain_to_me_why_the_font_is/",
      "author": "/u/princessinsomnia",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/princessinsomnia [link] &#32; [comments]",
      "published": "2026-04-27T18:05:27+00:00"
    },
    {
      "title": "Crazy story: ImgBB added JXL support just three days after I requested it",
      "url": "https://i.redd.it/0urvsfaadsxg1.png",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sxecve/crazy_story_imgbb_added_jxl_support_just_three/",
      "author": "/u/anestling",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "And here&#39;s probably the first ever JXL image: ibb.co/qYhKZSVP (a 1893 byte &quot;screenshot&quot; of Volcov Commander running in MS-DOS). &#32; submitted by &#32; /u/anestling [link] &#32; [comments]",
      "published": "2026-04-27T19:42:32+00:00"
    },
    {
      "title": "Vultr blocks legitimate payments and suspends accounts. Doesnot even blink before deactivating users invited as devs, managers.",
      "url": "https://www.reddit.com/r/webdev/comments/1sx8t4i/vultr_blocks_legitimate_payments_and_suspends/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sx8t4i/vultr_blocks_legitimate_payments_and_suspends/",
      "author": "/u/Future_Carpenter_910",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Due to what i faced today, I don&#39;t recommend Vultr at all. Please read this: I run a software company and of course I manage cloud infrastructure for clients on Vultr as an authorised invited manager. Basically each client has his account as administrator, and they add my account to their org as manager. But one of my client had his payment delayed due to card limits, their account had a warning on suspension, and it affected my personal account as well. Mine also got deactivated/suspended. I also got &quot;you need to pay $75 amount&quot; warning on my account so i tried to pay that amount from my account using paypal, card, alipay, but it denies me every time saying &quot;this paypal account is used by other vultr account&quot;. Now my account is deactivated, my other clients will face side-effects as well as i can&#39;t dig into their cloud services without their admin accounts and i am sure it will flag my device fingerprint and hurt their account. And Yes sir, that other vultr account that uses the paypal account is my account that is invited to this client&#39;s org. This got escalated like &quot;Your client&#39;s account hasn&#39;t paid, you pay it personally, but you can&#39;t use the paypal or card linked to your account even if it&#39;s you paying as a invited manager. If you don&#39;t pay for their expense, your account will get disabled as well. The payment method you will use must be unique every time for every linked org&quot;. I never faced this on OVH, Digitalocean, linode, aws. Now my personal account is deactivated as well. What kind of shitty policy is this? Why don&#39;t they just keep the money and shut up and let users do their regular work with servers? Please share if you have similar experiences with other cloud providers. &#32; submitted by &#32; /u/Future_Carpenter_910 [link] &#32; [comments]",
      "published": "2026-04-27T16:30:00+00:00"
    },
    {
      "title": "What’s a tool or abstraction you regret adopting too early?",
      "url": "https://www.reddit.com/r/webdev/comments/1sxcihu/whats_a_tool_or_abstraction_you_regret_adopting/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sxcihu/whats_a_tool_or_abstraction_you_regret_adopting/",
      "author": "/u/TariqKhalaf",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Curious how others have navigated this. Over the years I’ve jumped on a few tools/frameworks that felt like “the future” at the time, but ended up adding more complexity than value for my actual projects For me, it’s usually abstractions that promise cleaner architecture or better scalability, but in practice introduce indirection that makes onboarding harder and debugging slower. Sometimes the ecosystem just wasn’t mature yet, other times I didn’t really need the extra layer at all I’ve started leaning more toward boring, well-understood solutions unless there’s a clear, immediate benefit. But I still worry about missing out on tools that could genuinely improve workflow if adopted at the right time. So I’m wondering: What’s something you adopted early that you later rolled back or stopped using? Was it the tool itself, or how/when you applied it? Do you have a personal rule now for deciding when to adopt something new vs sticking with the basics? Would be interesting to hear both frontend and backend perspectives here. &#32; submitted by &#32; /u/TariqKhalaf [link] &#32; [comments]",
      "published": "2026-04-27T18:38:05+00:00"
    },
    {
      "title": "PyPI supply chain compromise via GitHub Actions → elementary-data backdoored with .pth infostealer (exec on interpreter startup)",
      "url": "https://thecybersecguru.com/news/elementary-data-pypi-hack-infostealer/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sxr5o6/pypi_supply_chain_compromise_via_github_actions/",
      "author": "/u/raptorhunter22",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "A recent supply chain attack targeted the elementary-data Python package on PyPI, where an attacker exploited a GitHub Actions script injection vulnerability to abuse the repository’s GITHUB_TOKEN and push a forged release without modifying the main branch. The malicious version (0.23.3) was published to PyPI and container registries, embedding a .pth file that executes automatically whenever the Python interpreter starts—no explicit import required. The payload was obfuscated (base64-encoded) and designed to quietly run in any environment that installed the compromised package, effectively turning routine dependency installs into remote code execution. This incident stands out because it bypassed traditional trust signals by leveraging the legitimate CI/CD pipeline rather than typosquatting or rogue packages, and it also affected unpinned Docker pulls that defaulted to latest. &#32; submitted by &#32; /u/raptorhunter22 [link] &#32; [comments]",
      "published": "2026-04-28T04:33:11+00:00"
    },
    {
      "title": "How to make Laspass ignore certain Input fields [html, css]?",
      "url": "https://www.reddit.com/r/webdev/comments/1sxevg0/how_to_make_laspass_ignore_certain_input_fields/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sxevg0/how_to_make_laspass_ignore_certain_input_fields/",
      "author": "/u/TheConceptBoy",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;m working on a web-tool - drawing / story boarding app. I placed a few input elements - range and number input and Lastpass went bonkers assuming these were username and password fields. I know - &quot;Two input tags near each other? Not on my watch&quot; - LastPass probably. Anyways. is there a way to hint lastpass to ignore these tags? I tried: autocomplete=&quot;off&quot; data-1p-ignore data-bwignore data-lpignore=&quot;true&quot; data-form-type=&quot;other&quot;autocomplete=&quot;off&quot; data-1p-ignore data-bwignore data-lpignore=&quot;true&quot; data-form-type=&quot;other&quot; based on this post: https://www.stefanjudis.com/snippets/turn-off-password-managers/ but it did not work. &#32; submitted by &#32; /u/TheConceptBoy [link] &#32; [comments]",
      "published": "2026-04-27T20:00:17+00:00"
    },
    {
      "title": "Visual, step-by-step explainers for how the web actually works.",
      "url": "https://toolkit.whysonil.dev/how-it-works/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sx66st/visual_stepbystep_explainers_for_how_the_web/",
      "author": "/u/nulless",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Includes: DNS HTTPS (TLS handshake) caching + CDNs load balancing Much easier to follow than static docs. https://toolkit.whysonil.dev/how-it-works/ &#32; submitted by &#32; /u/nulless [link] &#32; [comments]",
      "published": "2026-04-27T14:58:27+00:00"
    },
    {
      "title": "anyone else had a rough time testing datadog api integrations?",
      "url": "https://www.reddit.com/r/webdev/comments/1sxl1vg/anyone_else_had_a_rough_time_testing_datadog_api/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sxl1vg/anyone_else_had_a_rough_time_testing_datadog_api/",
      "author": "/u/Striking_Weird_8540",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "i have been testing an integration that pulls logs/instrumentions metrics and incidents from datadog. the api itself is fine but getting to the point where you can actually test anything is painful. we need two keys for them to test api key and application key, each with different permission scopes, and you can&#39;t get either without a paid account. free trial wants a credit card and installs an agent on your infra. all that just to check if my code handles their pagination format correctly. when i started looking at github issues and it&#39;s the same pain everywhere. people running into auth scope mismatches, incident state transitions not working how the docs describe, monitors returning different shapes depending on the type. tbh i don&#39;t even need real data. i just need some fake responses that match the actual shape — what does a monitor with no tags look like, what happens when you create an incident and immediately query it, does the status actually transition the way the docs say it does. anyone integrating with datadog found a decent workflow for this? or do you just eat the setup cost and test against your real org? &#32; submitted by &#32; /u/Striking_Weird_8540 [link] &#32; [comments]",
      "published": "2026-04-27T23:57:14+00:00"
    },
    {
      "title": "How to make an element extend to the bottom of the screen, regardless of its content?",
      "url": "https://www.reddit.com/r/webdev/comments/1sxie1g/how_to_make_an_element_extend_to_the_bottom_of/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sxie1g/how_to_make_an_element_extend_to_the_bottom_of/",
      "author": "/u/ThrowAway237s",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Is there any way to make the bottom cell of the table in this demo extend until the bottom of the screen, regardless of how much it contains? One possible way would be to &quot;cheat&quot; using JavaScript by detecting the screen height and setting the table to that height whenever the screen height changes. But is there any way to accomplish this using bare HTML and CSS? &lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt; &lt;html xmlns=&quot;http://www.w3.org/1999/xhtml&quot; xml:lang=&quot;en&quot; style=&quot;height:100%;&quot;&gt; &lt;head&gt; &lt;title&gt;Variable height demo&lt;/title&gt; &lt;style type=&quot;text/css&quot;&gt; body { background-color: #222; color:#ccc; font-family: sans-serif; } &lt;/style&gt; &lt;/head&gt; &lt;body style=&quot;height:100%; margin:0;&quot;&gt; &lt;table style=&quot;width: 100%; height:100%; table-layout: fixed;&quot; border=&quot;1&quot;&gt; &lt;tr style=&quot;height:50px;&quot;&gt; &lt;th&gt;Fixed-height row&lt;/th&gt; &lt;/tr&gt; &lt;tr style=&quot;height:100%;&quot;&gt; &lt;td style=&quot;overflow-y: scroll; vertical-align:top;&quot;&gt; &lt;ul&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;li&gt;Scrollable list&lt;/li&gt; &lt;/ul&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;/body&gt; &lt;/html&gt; &#32; submitted by &#32; /u/ThrowAway237s [link] &#32; [comments]",
      "published": "2026-04-27T22:07:43+00:00"
    },
    {
      "title": "Which early decisions in a web project tend to have the biggest long-term impact?",
      "url": "https://www.reddit.com/r/webdev/comments/1sxtw2m/which_early_decisions_in_a_web_project_tend_to/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sxtw2m/which_early_decisions_in_a_web_project_tend_to/",
      "author": "/u/Gullible_Prior9448",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "In my experience, things like structure and data flow become hard to change later. What decisions have mattered most in your projects? &#32; submitted by &#32; /u/Gullible_Prior9448 [link] &#32; [comments]",
      "published": "2026-04-28T07:01:49+00:00"
    },
    {
      "title": "Automating nicely displayed events from Google Calendar/forms on Cascade webpage without the need to click on event?",
      "url": "https://i.redd.it/6vezcrdnerxg1.jpeg",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sx8owf/automating_nicely_displayed_events_from_google/",
      "author": "/u/PeaBandJ",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hi all, I&#39;m currently working on god awful Cascade here at my job, and our website has two calendars for events (both of which I have to update the Google Calendar for) And we also have a weekly newsletter that I use Google Calendar for using Styled Calendars to put on Cascade as the &quot;schedule for the week&quot;. Of course this is 1,000% easier that I don&#39;t have to touch the newsletter template anymore since it&#39;s automatically updated. However, every event has it&#39;s own webpage, in classic table fashion, with the SAME information I put on all two webpages and the email I send out with the reader. Having a styled calendar is not enough information/looks good for each event since there is no title, speaker, or abstract of course, and you have to click on each event to see the information. I&#39;m including an example of what the pages currently look like now. Does anyone know of a way I can auto force it to fill out the information in the layout from Google Calendar or even the email I send out? Some website similar to Styled Calendars maybe, that looks a little better for the public. I&#39;m tired of having to do this weekly, when it&#39;s the same information everywhere, I&#39;m too busy for this to be a main job, but it&#39;s needed for stuff like grant funding/having a past title list. I will also have to stay away from AI, so please don&#39;t suggest it. Thank you for your help! &#32; submitted by &#32; /u/PeaBandJ [link] &#32; [comments]",
      "published": "2026-04-27T16:25:50+00:00"
    },
    {
      "title": "Was Postman down again?",
      "url": "https://www.reddit.com/r/webdev/comments/1swztuk/was_postman_down_again/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swztuk/was_postman_down_again/",
      "author": "/u/Successful_Bowl2564",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "What are you guys mostly switching too. &#32; submitted by &#32; /u/Successful_Bowl2564 [link] &#32; [comments]",
      "published": "2026-04-27T10:36:00+00:00"
    },
    {
      "title": "Looking for developer communities to join",
      "url": "https://www.reddit.com/r/webdev/comments/1sx6khk/looking_for_developer_communities_to_join/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sx6khk/looking_for_developer_communities_to_join/",
      "author": "/u/riti_rathod",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I’m looking to join some active and helpful communities where I can learn, share knowledge, and connect with others. I’m especially interested in platforms similar to Reddit (discussion-based communities), but I’m also open to Discord servers, forums, or any other groups you’ve found valuable. I’d really appreciate your suggestions! &#32; submitted by &#32; /u/riti_rathod [link] &#32; [comments]",
      "published": "2026-04-27T15:11:29+00:00"
    },
    {
      "title": "Working around incomplete `webNavigation.transitionType` support in Safari and Firefox extensions",
      "url": "https://i.redd.it/syqi83bhgpxg1.png",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swz3v1/working_around_incomplete/",
      "author": "/u/rxliuli",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;m building a translation browser extension. One requirement: when the user reloads a page, stop translating; but when they click a link or use back/forward, keep translating on the new page. The natural fit is webNavigation.onCommitted with transitionType and transitionQualifiers : ts browser.webNavigation.onCommitted.addListener((details) =&gt; { if (details.frameId !== 0) return const isForwardBack = (details as any).transitionQualifiers?.includes(&#39;forward_back&#39;) if (!isForwardBack &amp;&amp; details.transitionType === &#39;reload&#39;) { setTabTranslatingLang(details.tabId, null) } }) Works fine on Chrome. On Safari, the API exists but several properties just aren&#39;t there. Checked MDN and the compatibility story is rougher than I expected — Safari is missing a lot, and Firefox isn&#39;t great here either. transitionQualifiers and transitionType are both unsupported on Safari and Firefox for Android. Ended up working around it with webNavigation.onDOMContentLoaded plus an injected script that reads performance.getEntriesByType(&#39;navigation&#39;) : ts try { const [result] = await browser.scripting.executeScript({ target: { tabId: details.tabId }, func: () =&gt; (performance.getEntriesByType(&#39;navigation&#39;) as PerformanceNavigationTiming[])[0]?.type, }) if (result?.result === &#39;reload&#39;) { await setTabTranslatingLang(details.tabId, null) return } } catch { // scripting may fail on restricted pages; skip reload check } Trade-off: I can no longer distinguish between typed URLs and link clicks, but for this use case it doesn&#39;t matter — I only need to detect reloads. Compatibility table for reference: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation/onCommitted#browser_compatibility Anyone found a cleaner approach? Or is dropping these features on non-Chromium browsers just the standard playbook now? &#32; submitted by &#32; /u/rxliuli [link] &#32; [comments]",
      "published": "2026-04-27T09:56:09+00:00"
    },
    {
      "title": "Production lessons from building AI agents into a web app",
      "url": "https://www.reddit.com/r/webdev/comments/1sxfd27/production_lessons_from_building_ai_agents_into_a/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sxfd27/production_lessons_from_building_ai_agents_into_a/",
      "author": "/u/middlerange",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "At this point we have rebuilt our AI agent implementation 4 times from scratch. Wrote up on the architecture that we finally feel good about and the tradeoffs here: https://userorbit.com/blog/how-to-build-production-grade-ai-agents Curious how others are handling tool permissions and undo for agents that can mutate product state. &#32; submitted by &#32; /u/middlerange [link] &#32; [comments]",
      "published": "2026-04-27T20:17:06+00:00"
    },
    {
      "title": "View transitions look great on mobile but terrible on desktop: is it okay if I disable them just for the latter?",
      "url": "https://www.reddit.com/r/webdev/comments/1sxdfzi/view_transitions_look_great_on_mobile_but/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sxdfzi/view_transitions_look_great_on_mobile_but/",
      "author": "/u/Wise_Stick9613",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;m experimenting with the View Transition API on a personal project. I&#39;ve managed to replicate the iOS and Android animations quite well, and everything looks great; it really feels like a native app. However, on the desktop, they look terrible and out of place, so I was wondering, is it okay to enable them only on mobile? I&#39;m asking this question because when I look for JavaScript solutions to detect a mobile device, they all seem like ugly hacks: if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){ // mobile device } Is there an elegant way to do this? &#32; submitted by &#32; /u/Wise_Stick9613 [link] &#32; [comments]",
      "published": "2026-04-27T19:10:23+00:00"
    },
    {
      "title": "BEM Styling Convention Newbie",
      "url": "https://www.reddit.com/r/webdev/comments/1swyeq9/bem_styling_convention_newbie/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swyeq9/bem_styling_convention_newbie/",
      "author": "/u/Wotsits1984",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Having recently inherited a bit of a mess in a legacy systems, I&#39;ve recently started using BEM to clen up it&#39;s styling. The more I use it, the more I enjoy the principles of it hoever I&#39;ve found pure BEM a bit of a challenge at times. I&#39;ve supplemented it with a few alterations and it got me wondering what any other BEM users have done. My alterations: Perhaps wrongly, I started off very pure (don&#39;t judge me). I would create a &quot;.p&quot; class and apply that to all my &lt;p&gt; elements. I stopped doing this very early on, and now I set global styles against HTML elements which are overridden by BEM classes. I use utility classes to modify instead of modifiers. This means that the same utility class can be used instead of rewriting the same modifier logic against every B-E combination. Imagine a &quot;.page-title&quot; and &quot;.main-paragraph&quot;. If I want a &quot;text-align: center&quot; modifier on each, in true BEM, I would create &quot;.page-title--centered&quot; and &quot;.main-paragraph--centered&quot;. Instead, I create &quot;.centered&quot; and apply that as a second class to both elements. I&#39;m interested to know what other BEM users have done with a view to improving my own BEM workflows. TIA Simon &#32; submitted by &#32; /u/Wotsits1984 [link] &#32; [comments]",
      "published": "2026-04-27T09:15:13+00:00"
    },
    {
      "title": "Lightport – AI gateway that makes LLM providers OpenAI-compatible",
      "url": "https://github.com/glama-ai/lightport",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sxodbh/lightport_ai_gateway_that_makes_llm_providers/",
      "author": "/u/punkpeye",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "We are making Lightport open-source – it&#39;s the AI gateway that&#39;s been powering Glama AI Gateway. GitHub: https://github.com/glama-ai/lightport Why? We&#39;re going all-in on the MCP ecosystem – it&#39;s what we&#39;re best at. Open-sourcing the gateway is both a thank-you to the community that helped us grow and a way to keep us focused. The short backstory: Lightport began as a fork of Portkey. We needed a way to make various LLM providers OpenAI-compatible, and Portkey provided a solid foundation. But it also came with many higher-level features (guardrails, billing, etc.) that we didn&#39;t think belonged at this layer – and that made it hard to iterate on provider compatibility. So we slimmed it down, fixed bugs, added integration tests for 80+ providers, and shaped it into one thing: a reliable, lightweight layer that makes any LLM provider OpenAI-compatible. What&#39;s next: More modules will follow – guardrails, billing, retries, telemetry – each open-sourced as standalone middleware. We&#39;ll continue to maintain Lightport in the open, with a focus on OpenAI compatibility across LLM providers. For Glama users: The Glama AI gateway will continue to function as a privacy-first gateway, but we will support only a curated set of providers (OpenAI, Anthropic, Google, Grok, Groq, DeepSeek, Alibaba, Moonshot, and a few others). For everything else, OpenRouter is a great alternative. Try it, break it, build with it. I can&#39;t wait to see what you make. &#32; submitted by &#32; /u/punkpeye [link] &#32; [comments]",
      "published": "2026-04-28T02:22:33+00:00"
    },
    {
      "title": "Beyond the Chatbot Multi-AI Agentic system with Proxima",
      "url": "https://www.reddit.com/r/webdev/comments/1sxawhg/beyond_the_chatbot_multiai_agentic_system_with/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sxawhg/beyond_the_chatbot_multiai_agentic_system_with/",
      "author": "/u/Personal_Offer1551",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I’ve been experimenting with agentic workflows lately, but the API costs for running multiple models Claude + GPT + Gemini + Perplexity) simultaneously were getting ridiculous. Also, most single-model prompts kept failing on complex architecture because there was no &quot;second opinion&quot; or verification. I spent few months building Proxima . It’s an open-source local server that connects your active browser providers to your IDE via MCP or RestAPI. What it actually does differently: Multi-Model Synergy: Instead of trusting one AI, I built a debate tool. You can make Claude and GPT argue over a technical decision in your terminal. Usually, the &quot;winner&quot; of that debate produces much cleaner code. Agentic Verification: I added a verify tool where one model writes the logic and another audits it, giving a confidence score. It’s been a lifesaver for catching hallucinated library methods before they hit my codebase. No API Keys: It uses a native provider engine to stream responses directly from the sessions you&#39;re already logged into. Deep Context Fixing: You can pipe build errors directly from the terminal: npm run build 2&gt;&amp;1 | proxima fix. It looks at the whole context to suggest a fix rather than just guessing. It’s got about 45+ tools for everything from security audits to building modular blueprints. I built it for my own workflow because I wanted a &quot;team of AIs&quot; rather than just a agent. It’s all on GitHub and runs locally on localhost:3210. If you’re into MCP or looking for a way to use multiple AIs without the API tax, check it out. Github: https://github.com/Zen4-bit/Proxima &#32; submitted by &#32; /u/Personal_Offer1551 [link] &#32; [comments]",
      "published": "2026-04-27T17:42:23+00:00"
    },
    {
      "title": "Glyphborn — Language Learning as a Roguelike",
      "url": "https://www.reddit.com/r/webdev/comments/1sxcsrq/glyphborn_language_learning_as_a_roguelike/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sxcsrq/glyphborn_language_learning_as_a_roguelike/",
      "author": "/u/Remohw",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Glyphborn — Language Learning as a Roguelike I built a roguelike where language is the magic system. It&#39;s open source, half-finished, and I&#39;d love help breaking it. The problem Three years of streaks, flashcards, and very polite owls have given me roughly the vocabulary of a tired toddler. I love learning languages. I hate every app that&#39;s tried to teach me one. So I built the thing I actually wanted to play. What it is Glyphborn is a browser roguelike where every enemy on the floor is a real word in the language you&#39;re learning. The fire elemental is 火. To kill it, you decode it. Get the quiz right — the door opens. Master a glyph, and the next time it appears on a tile, it shows up dim and weak. Spaced repetition, but with a sword. The architecture The LLM is the Dungeon Master. One Claude call at the start of a run generates the entire dungeon — floors, enemies, quizzes calibrated to your level, a boss riddle, and a merchant who insists on haggling in Mandarin. Then the game runs fully offline. Adding a new language is basically: drop some seed words in a file, let Claude do the worldbuilding. Adding Russian took an afternoon. Adding Arabic took an afternoon and a small existential crisis about right-to-left text. The honest part It&#39;s not finished. The Arabic still has rough edges. The mobile controls technically work, in the way a folding chair technically works. There&#39;s a TODO list I refuse to look at directly. I&#39;m publishing it anyway — because the alternative is polishing it forever in private and never showing anyone. Why I want collaborators The languages I most want to add are ones I don&#39;t speak well enough to seed alone. The community-runs system is already wired: anyone can publish a generated bundle to the shared library. It&#39;s only as good as the people uploading. If you&#39;re a language learner, a teacher, a gamedev person, or someone who&#39;s looked at a Duolingo streak and felt absolutely nothing — please come help. For devs Stack: React 19 + TypeScript (strict), Vite, Zustand, HTML5 Canvas No game framework — handwritten FOV and scanlines No Math.random() — every run is seeded for replays and deterministic tests Auth/sync: Supabase (optional cloud sync) LLM: Anthropic Onboarding: there&#39;s a CLAUDE.md that explains the rules so you don&#39;t have to spelunk ⭐ the repo, open an issue, fork it and break it. I&#39;ll be in the issues, gently apologising. https://github.com/sullytobias/GLYPHBORN (The REPO) https://sullytobias.github.io/GLYPHBORN/ (The APP) &#32; submitted by &#32; /u/Remohw [link] &#32; [comments]",
      "published": "2026-04-27T18:48:02+00:00"
    },
    {
      "title": "Genuinely starting to get bored of my portfolio, i am in dire need for advice.",
      "url": "http://www.kitmane.com",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sx6g54/genuinely_starting_to_get_bored_of_my_portfolio_i/",
      "author": "/u/ismailkit",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Not an ad to my services although the site advertises my services, i built this a year ago, i was hyped about threejs and took time to learn both 3d and threejs for a single globe animation i was fantasizing about for years, then i made it... A year later it started looking like the most mid portfolio out there, i am a UX developer, a portfolio is representation of my work. &#32; submitted by &#32; /u/ismailkit [link] &#32; [comments]",
      "published": "2026-04-27T15:07:21+00:00"
    },
    {
      "title": "Getting started with freelancing landing pages and simple static sites",
      "url": "https://www.reddit.com/r/webdev/comments/1sx56ue/getting_started_with_freelancing_landing_pages/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sx56ue/getting_started_with_freelancing_landing_pages/",
      "author": "/u/Dtarvin",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I hope I’m not breaking the rules. I’m trying to be specific with my questions. If I am breaking the rules with this post, I would appreciate suggestions on making my questions specific enough to be allowed on here. I am an Associate Software Engineer full-time and instructor part-time. I have taught Web Development for a few years as a second job. However, I have never actually done web development for actual clients before. The teaching job is now on hold while the nonprofit running it reorients itself. So I would like to start doing freelance web development work in the meantime. I want to start off simple with some basic landing pages and simple static sites. So my first question is, in this day and age, what types of clients would still benefit from landing pages and simple static sites? Or does everything need to be interactive now? Second question: for local work (not Upwork, etc), what is a good way to find clients? With my full-time job I don’t know that I would be able to attend networking events, and past experience with those when I did other types of work seemed to never really produce leads anyway. Participants never really gave each other work. So how else would you find clients? Third question: should I make pages from scratch, or should I take advantage of something like Wix to start with and customize? It seems many freelancers use Wix or similar website building resources. But how do you explain that use to a client without having them thinking they could have just created something Wix themselves? Fourth question: how much should one charge for a simple landing site or a simple five page static site? &#32; submitted by &#32; /u/Dtarvin [link] &#32; [comments]",
      "published": "2026-04-27T14:22:47+00:00"
    }
  ]
}
```

## 2. Monthly Stack Trends

**Query:** What stack trends should I follow this month?

**Command:**
```bash
node bin/main.js --json github -s monthly -l go ; node bin/main.js --json github -s monthly -l python ; node bin/main.js --json echojs -s latest -c 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "github",
  "since": "monthly",
  "language": "go",
  "items": [
    {
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2867,
      "added_stars": 7435,
      "builtBy": [
        {
          "username": "Wei-Shaw",
          "href": "https://github.com/Wei-Shaw",
          "avatar": "https://avatars.githubusercontent.com/u/26101719"
        },
        {
          "username": "IanShaw027",
          "href": "https://github.com/IanShaw027",
          "avatar": "https://avatars.githubusercontent.com/u/131567472"
        },
        {
          "username": "touwaeriol",
          "href": "https://github.com/touwaeriol",
          "avatar": "https://avatars.githubusercontent.com/u/52620633"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "slovx2",
          "href": "https://github.com/slovx2",
          "avatar": "https://avatars.githubusercontent.com/u/2713715"
        }
      ]
    },
    {
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3064,
      "added_stars": 1550,
      "builtBy": [
        {
          "username": "johannesHarness",
          "href": "https://github.com/johannesHarness",
          "avatar": "https://avatars.githubusercontent.com/u/98799615"
        },
        {
          "username": "marko-gacesa",
          "href": "https://github.com/marko-gacesa",
          "avatar": "https://avatars.githubusercontent.com/u/1862257"
        },
        {
          "username": "cjlee01",
          "href": "https://github.com/cjlee01",
          "avatar": "https://avatars.githubusercontent.com/u/92757601"
        },
        {
          "username": "shivanand-harness",
          "href": "https://github.com/shivanand-harness",
          "avatar": "https://avatars.githubusercontent.com/u/148759765"
        },
        {
          "username": "tan-nhu",
          "href": "https://github.com/tan-nhu",
          "avatar": "https://avatars.githubusercontent.com/u/29714664"
        }
      ]
    },
    {
      "author": "QuantumNous",
      "repo": "new-api",
      "avatar": "https://github.com/QuantumNous.png",
      "repo_link": "https://github.com/QuantumNous/new-api",
      "desc": "A unified AI model hub for aggregation & distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemini-compatible formats. A centralized gateway for personal and enterprise model management. 🍥",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6234,
      "added_stars": 6083,
      "builtBy": [
        {
          "username": "Calcium-Ion",
          "href": "https://github.com/Calcium-Ion",
          "avatar": "https://avatars.githubusercontent.com/u/61247483"
        },
        {
          "username": "seefs001",
          "href": "https://github.com/seefs001",
          "avatar": "https://avatars.githubusercontent.com/u/40468931"
        },
        {
          "username": "t0ng7u",
          "href": "https://github.com/t0ng7u",
          "avatar": "https://avatars.githubusercontent.com/u/133845290"
        },
        {
          "username": "songquanpeng",
          "href": "https://github.com/songquanpeng",
          "avatar": "https://avatars.githubusercontent.com/u/39998050"
        }
      ]
    },
    {
      "author": "steipete",
      "repo": "wacli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/wacli",
      "desc": "WhatsApp CLI",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 250,
      "added_stars": 1456,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "draix",
          "href": "https://github.com/draix",
          "avatar": "https://avatars.githubusercontent.com/u/270983"
        },
        {
          "username": "dinakars777",
          "href": "https://github.com/dinakars777",
          "avatar": "https://avatars.githubusercontent.com/u/250428393"
        },
        {
          "username": "shaun0927",
          "href": "https://github.com/shaun0927",
          "avatar": "https://avatars.githubusercontent.com/u/70629228"
        },
        {
          "username": "plattenschieber",
          "href": "https://github.com/plattenschieber",
          "avatar": "https://avatars.githubusercontent.com/u/1213794"
        }
      ]
    },
    {
      "author": "Gentleman-Programming",
      "repo": "gentle-ai",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/gentle-ai",
      "desc": "",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 301,
      "added_stars": 1361,
      "builtBy": [
        {
          "username": "Alan-TheGentleman",
          "href": "https://github.com/Alan-TheGentleman",
          "avatar": "https://avatars.githubusercontent.com/u/6935240"
        },
        {
          "username": "tonyblu331",
          "href": "https://github.com/tonyblu331",
          "avatar": "https://avatars.githubusercontent.com/u/16378197"
        },
        {
          "username": "IrrealV",
          "href": "https://github.com/IrrealV",
          "avatar": "https://avatars.githubusercontent.com/u/56964704"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Tech-Codde",
          "href": "https://github.com/Tech-Codde",
          "avatar": "https://avatars.githubusercontent.com/u/77520396"
        }
      ]
    },
    {
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 518,
      "added_stars": 1120,
      "builtBy": [
        {
          "username": "akshaydeo",
          "href": "https://github.com/akshaydeo",
          "avatar": "https://avatars.githubusercontent.com/u/1050029"
        },
        {
          "username": "Pratham-Mishra04",
          "href": "https://github.com/Pratham-Mishra04",
          "avatar": "https://avatars.githubusercontent.com/u/99235987"
        },
        {
          "username": "TejasGhatte",
          "href": "https://github.com/TejasGhatte",
          "avatar": "https://avatars.githubusercontent.com/u/64637256"
        },
        {
          "username": "impoiler",
          "href": "https://github.com/impoiler",
          "avatar": "https://avatars.githubusercontent.com/u/83772622"
        }
      ]
    },
    {
      "author": "chenhg5",
      "repo": "cc-connect",
      "avatar": "https://github.com/chenhg5.png",
      "repo_link": "https://github.com/chenhg5/cc-connect",
      "desc": "Bridge local AI coding agents (Claude Code, Cursor, Gemini CLI, Codex) to messaging platforms (Feishu/Lark, DingTalk, Slack, Telegram, Discord, LINE, WeChat Work). Chat with your AI dev assistant from anywhere — no public IP required for most platforms.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 610,
      "added_stars": 3196,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "chenhg5",
          "href": "https://github.com/chenhg5",
          "avatar": "https://avatars.githubusercontent.com/u/4344486"
        },
        {
          "username": "kevinWangSheng",
          "href": "https://github.com/kevinWangSheng",
          "avatar": "https://avatars.githubusercontent.com/u/118158941"
        },
        {
          "username": "q107580018",
          "href": "https://github.com/q107580018",
          "avatar": "https://avatars.githubusercontent.com/u/44695873"
        },
        {
          "username": "xxb",
          "href": "https://github.com/xxb",
          "avatar": "https://avatars.githubusercontent.com/u/1808765"
        }
      ]
    },
    {
      "author": "mostlygeek",
      "repo": "llama-swap",
      "avatar": "https://github.com/mostlygeek.png",
      "repo_link": "https://github.com/mostlygeek/llama-swap",
      "desc": "Reliable model swapping for any local OpenAI/Anthropic compatible server - llama.cpp, vllm, etc",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 290,
      "added_stars": 767,
      "builtBy": [
        {
          "username": "mostlygeek",
          "href": "https://github.com/mostlygeek",
          "avatar": "https://avatars.githubusercontent.com/u/83972"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ryan-steed-usa",
          "href": "https://github.com/ryan-steed-usa",
          "avatar": "https://avatars.githubusercontent.com/u/240190636"
        },
        {
          "username": "shirayu",
          "href": "https://github.com/shirayu",
          "avatar": "https://avatars.githubusercontent.com/u/963961"
        },
        {
          "username": "Thammachart",
          "href": "https://github.com/Thammachart",
          "avatar": "https://avatars.githubusercontent.com/u/1731496"
        }
      ]
    },
    {
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5274,
      "added_stars": 1768,
      "builtBy": [
        {
          "username": "RPRX",
          "href": "https://github.com/RPRX",
          "avatar": "https://avatars.githubusercontent.com/u/63339210"
        },
        {
          "username": "yuhan6665",
          "href": "https://github.com/yuhan6665",
          "avatar": "https://avatars.githubusercontent.com/u/1588741"
        },
        {
          "username": "Fangliding",
          "href": "https://github.com/Fangliding",
          "avatar": "https://avatars.githubusercontent.com/u/45535409"
        },
        {
          "username": "mmmray",
          "href": "https://github.com/mmmray",
          "avatar": "https://avatars.githubusercontent.com/u/142015632"
        }
      ]
    },
    {
      "author": "googleapis",
      "repo": "mcp-toolbox",
      "avatar": "https://github.com/googleapis.png",
      "repo_link": "https://github.com/googleapis/mcp-toolbox",
      "desc": "MCP Toolbox for Databases is an open source MCP server for databases.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1486,
      "added_stars": 1330,
      "builtBy": [
        {
          "username": "Yuan325",
          "href": "https://github.com/Yuan325",
          "avatar": "https://avatars.githubusercontent.com/u/45984206"
        },
        {
          "username": "twishabansal",
          "href": "https://github.com/twishabansal",
          "avatar": "https://avatars.githubusercontent.com/u/58483338"
        },
        {
          "username": "duwenxin99",
          "href": "https://github.com/duwenxin99",
          "avatar": "https://avatars.githubusercontent.com/u/117315983"
        },
        {
          "username": "averikitsch",
          "href": "https://github.com/averikitsch",
          "avatar": "https://avatars.githubusercontent.com/u/6519888"
        }
      ]
    },
    {
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3910,
      "added_stars": 1498,
      "builtBy": [
        {
          "username": "nekohasekai",
          "href": "https://github.com/nekohasekai",
          "avatar": "https://avatars.githubusercontent.com/u/56506714"
        },
        {
          "username": "dyhkwong",
          "href": "https://github.com/dyhkwong",
          "avatar": "https://avatars.githubusercontent.com/u/50692134"
        },
        {
          "username": "H1JK",
          "href": "https://github.com/H1JK",
          "avatar": "https://avatars.githubusercontent.com/u/106379370"
        },
        {
          "username": "arm64v8a",
          "href": "https://github.com/arm64v8a",
          "avatar": "https://avatars.githubusercontent.com/u/48624112"
        }
      ]
    },
    {
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 15846,
      "added_stars": 4615,
      "builtBy": [
        {
          "username": "mxyng",
          "href": "https://github.com/mxyng",
          "avatar": "https://avatars.githubusercontent.com/u/2372640"
        },
        {
          "username": "jmorganca",
          "href": "https://github.com/jmorganca",
          "avatar": "https://avatars.githubusercontent.com/u/251292"
        },
        {
          "username": "dhiltgen",
          "href": "https://github.com/dhiltgen",
          "avatar": "https://avatars.githubusercontent.com/u/4033016"
        },
        {
          "username": "BruceMacD",
          "href": "https://github.com/BruceMacD",
          "avatar": "https://avatars.githubusercontent.com/u/5853428"
        },
        {
          "username": "jessegross",
          "href": "https://github.com/jessegross",
          "avatar": "https://avatars.githubusercontent.com/u/6468499"
        }
      ]
    },
    {
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 753,
      "added_stars": 1227,
      "builtBy": [
        {
          "username": "henrygd",
          "href": "https://github.com/henrygd",
          "avatar": "https://avatars.githubusercontent.com/u/8519632"
        },
        {
          "username": "svenvg93",
          "href": "https://github.com/svenvg93",
          "avatar": "https://avatars.githubusercontent.com/u/4511676"
        },
        {
          "username": "a-mnich",
          "href": "https://github.com/a-mnich",
          "avatar": "https://avatars.githubusercontent.com/u/56564725"
        },
        {
          "username": "stanol",
          "href": "https://github.com/stanol",
          "avatar": "https://avatars.githubusercontent.com/u/27770896"
        },
        {
          "username": "arsfy",
          "href": "https://github.com/arsfy",
          "avatar": "https://avatars.githubusercontent.com/u/93700457"
        }
      ]
    },
    {
      "author": "masterking32",
      "repo": "MasterDnsVPN",
      "avatar": "https://github.com/masterking32.png",
      "repo_link": "https://github.com/masterking32/MasterDnsVPN",
      "desc": "Advanced DNS tunneling VPN for censorship bypass, optimized beyond DNSTT and SlipStream with low-overhead ARQ, resolver load balancing, high packet-loss stability and speed.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 93,
      "added_stars": 833,
      "builtBy": [
        {
          "username": "masterking32",
          "href": "https://github.com/masterking32",
          "avatar": "https://avatars.githubusercontent.com/u/1076030"
        },
        {
          "username": "abolix",
          "href": "https://github.com/abolix",
          "avatar": "https://avatars.githubusercontent.com/u/20380298"
        },
        {
          "username": "PentSec",
          "href": "https://github.com/PentSec",
          "avatar": "https://avatars.githubusercontent.com/u/11955573"
        },
        {
          "username": "MahdiMirzadeh",
          "href": "https://github.com/MahdiMirzadeh",
          "avatar": "https://avatars.githubusercontent.com/u/63877463"
        },
        {
          "username": "typerhack",
          "href": "https://github.com/typerhack",
          "avatar": "https://avatars.githubusercontent.com/u/22979706"
        }
      ]
    },
    {
      "author": "evcc-io",
      "repo": "evcc",
      "avatar": "https://github.com/evcc-io.png",
      "repo_link": "https://github.com/evcc-io/evcc",
      "desc": "solar charging ☀️🚘",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1295,
      "added_stars": 205,
      "builtBy": [
        {
          "username": "andig",
          "href": "https://github.com/andig",
          "avatar": "https://avatars.githubusercontent.com/u/184815"
        },
        {
          "username": "naltatis",
          "href": "https://github.com/naltatis",
          "avatar": "https://avatars.githubusercontent.com/u/152287"
        },
        {
          "username": "premultiply",
          "href": "https://github.com/premultiply",
          "avatar": "https://avatars.githubusercontent.com/u/4681172"
        },
        {
          "username": "weblate",
          "href": "https://github.com/weblate",
          "avatar": "https://avatars.githubusercontent.com/u/1607653"
        },
        {
          "username": "DerAndereAndi",
          "href": "https://github.com/DerAndereAndi",
          "avatar": "https://avatars.githubusercontent.com/u/42185"
        }
      ]
    },
    {
      "author": "syncthing",
      "repo": "syncthing",
      "avatar": "https://github.com/syncthing.png",
      "repo_link": "https://github.com/syncthing/syncthing",
      "desc": "Open Source Continuous File Synchronization",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5128,
      "added_stars": 2136,
      "builtBy": [
        {
          "username": "calmh",
          "href": "https://github.com/calmh",
          "avatar": "https://avatars.githubusercontent.com/u/125426"
        },
        {
          "username": "AudriusButkevicius",
          "href": "https://github.com/AudriusButkevicius",
          "avatar": "https://avatars.githubusercontent.com/u/1144861"
        },
        {
          "username": "imsodin",
          "href": "https://github.com/imsodin",
          "avatar": "https://avatars.githubusercontent.com/u/15955093"
        },
        {
          "username": "st-release",
          "href": "https://github.com/st-release",
          "avatar": "https://avatars.githubusercontent.com/u/14043830"
        },
        {
          "username": "tomasz1986",
          "href": "https://github.com/tomasz1986",
          "avatar": "https://avatars.githubusercontent.com/u/5626656"
        }
      ]
    },
    {
      "author": "versity",
      "repo": "versitygw",
      "avatar": "https://github.com/versity.png",
      "repo_link": "https://github.com/versity/versitygw",
      "desc": "A simple to deploy but feature rich S3 object storage server for your filesystem",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 247,
      "added_stars": 964,
      "builtBy": [
        {
          "username": "benmcclelland",
          "href": "https://github.com/benmcclelland",
          "avatar": "https://avatars.githubusercontent.com/u/2184287"
        },
        {
          "username": "mlt180",
          "href": "https://github.com/mlt180",
          "avatar": "https://avatars.githubusercontent.com/u/62040422"
        },
        {
          "username": "niksis02",
          "href": "https://github.com/niksis02",
          "avatar": "https://avatars.githubusercontent.com/u/82755277"
        },
        {
          "username": "lrm25",
          "href": "https://github.com/lrm25",
          "avatar": "https://avatars.githubusercontent.com/u/19983726"
        }
      ]
    },
    {
      "author": "anchore",
      "repo": "syft",
      "avatar": "https://github.com/anchore.png",
      "repo_link": "https://github.com/anchore/syft",
      "desc": "CLI tool and library for generating a Software Bill of Materials from container images and filesystems",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 845,
      "added_stars": 248,
      "builtBy": [
        {
          "username": "wagoodman",
          "href": "https://github.com/wagoodman",
          "avatar": "https://avatars.githubusercontent.com/u/590471"
        },
        {
          "username": "spiffcs",
          "href": "https://github.com/spiffcs",
          "avatar": "https://avatars.githubusercontent.com/u/32073428"
        },
        {
          "username": "kzantow",
          "href": "https://github.com/kzantow",
          "avatar": "https://avatars.githubusercontent.com/u/3009477"
        }
      ]
    }
  ]
}
- Fetching feeds...
{
  "source": "github",
  "since": "monthly",
  "language": "python",
  "items": [
    {
      "author": "NousResearch",
      "repo": "hermes-agent",
      "avatar": "https://github.com/NousResearch.png",
      "repo_link": "https://github.com/NousResearch/hermes-agent",
      "desc": "The agent that grows with you",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 18050,
      "added_stars": 106290,
      "builtBy": [
        {
          "username": "teknium1",
          "href": "https://github.com/teknium1",
          "avatar": "https://avatars.githubusercontent.com/u/127238744"
        },
        {
          "username": "OutThisLife",
          "href": "https://github.com/OutThisLife",
          "avatar": "https://avatars.githubusercontent.com/u/770929"
        },
        {
          "username": "0xbyt4",
          "href": "https://github.com/0xbyt4",
          "avatar": "https://avatars.githubusercontent.com/u/35742124"
        },
        {
          "username": "kshitijk4poor",
          "href": "https://github.com/kshitijk4poor",
          "avatar": "https://avatars.githubusercontent.com/u/82637225"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "shiyu-coder",
      "repo": "Kronos",
      "avatar": "https://github.com/shiyu-coder.png",
      "repo_link": "https://github.com/shiyu-coder/Kronos",
      "desc": "Kronos: A Foundation Model for the Language of Financial Markets",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3853,
      "added_stars": 10523,
      "builtBy": [
        {
          "username": "shiyu-coder",
          "href": "https://github.com/shiyu-coder",
          "avatar": "https://avatars.githubusercontent.com/u/65760973"
        },
        {
          "username": "Luciferbobo",
          "href": "https://github.com/Luciferbobo",
          "avatar": "https://avatars.githubusercontent.com/u/54936491"
        },
        {
          "username": "CharlesJ-ABu",
          "href": "https://github.com/CharlesJ-ABu",
          "avatar": "https://avatars.githubusercontent.com/u/18326516"
        },
        {
          "username": "AnMakc",
          "href": "https://github.com/AnMakc",
          "avatar": "https://avatars.githubusercontent.com/u/1777564"
        },
        {
          "username": "randyy179",
          "href": "https://github.com/randyy179",
          "avatar": "https://avatars.githubusercontent.com/u/129808685"
        }
      ]
    },
    {
      "author": "Fincept-Corporation",
      "repo": "FinceptTerminal",
      "avatar": "https://github.com/Fincept-Corporation.png",
      "repo_link": "https://github.com/Fincept-Corporation/FinceptTerminal",
      "desc": "FinceptTerminal is a modern finance application offering advanced market analytics, investment research, and economic data tools, designed for interactive exploration and data-driven decision-making in a user-friendly environment.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2243,
      "added_stars": 13159,
      "builtBy": [
        {
          "username": "tilakpatel22",
          "href": "https://github.com/tilakpatel22",
          "avatar": "https://avatars.githubusercontent.com/u/66294702"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Jaimin-ptl07",
          "href": "https://github.com/Jaimin-ptl07",
          "avatar": "https://avatars.githubusercontent.com/u/92565248"
        },
        {
          "username": "rudrasheth",
          "href": "https://github.com/rudrasheth",
          "avatar": "https://avatars.githubusercontent.com/u/170165924"
        }
      ]
    },
    {
      "author": "luongnv89",
      "repo": "claude-howto",
      "avatar": "https://github.com/luongnv89.png",
      "repo_link": "https://github.com/luongnv89/claude-howto",
      "desc": "A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3631,
      "added_stars": 27117,
      "builtBy": [
        {
          "username": "luongnv89",
          "href": "https://github.com/luongnv89",
          "avatar": "https://avatars.githubusercontent.com/u/3288457"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "edocltd",
          "href": "https://github.com/edocltd",
          "avatar": "https://avatars.githubusercontent.com/u/258913972"
        },
        {
          "username": "toanalien",
          "href": "https://github.com/toanalien",
          "avatar": "https://avatars.githubusercontent.com/u/5405744"
        },
        {
          "username": "xiaolai",
          "href": "https://github.com/xiaolai",
          "avatar": "https://avatars.githubusercontent.com/u/152970"
        }
      ]
    },
    {
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "\"DeepTutor: Agent-Native Personalized Learning Assistant\"",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2974,
      "added_stars": 11444,
      "builtBy": [
        {
          "username": "pancacake",
          "href": "https://github.com/pancacake",
          "avatar": "https://avatars.githubusercontent.com/u/150592536"
        },
        {
          "username": "tusharkhatriofficial",
          "href": "https://github.com/tusharkhatriofficial",
          "avatar": "https://avatars.githubusercontent.com/u/64004539"
        },
        {
          "username": "scrrlt",
          "href": "https://github.com/scrrlt",
          "avatar": "https://avatars.githubusercontent.com/u/235653744"
        },
        {
          "username": "RinZ27",
          "href": "https://github.com/RinZ27",
          "avatar": "https://avatars.githubusercontent.com/u/222222878"
        }
      ]
    },
    {
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use claude-code for free in the terminal, VSCode extension or via discord like openclaw",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2322,
      "added_stars": 14253,
      "builtBy": [
        {
          "username": "Alishahryar1",
          "href": "https://github.com/Alishahryar1",
          "avatar": "https://avatars.githubusercontent.com/u/20476625"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "rishiskhare",
          "href": "https://github.com/rishiskhare",
          "avatar": "https://avatars.githubusercontent.com/u/30673002"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "markitdown",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/markitdown",
      "desc": "Python tool for converting files and office documents to Markdown.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7771,
      "added_stars": 25592,
      "builtBy": [
        {
          "username": "afourney",
          "href": "https://github.com/afourney",
          "avatar": "https://avatars.githubusercontent.com/u/4017093"
        },
        {
          "username": "gagb",
          "href": "https://github.com/gagb",
          "avatar": "https://avatars.githubusercontent.com/u/13227607"
        },
        {
          "username": "sugatoray",
          "href": "https://github.com/sugatoray",
          "avatar": "https://avatars.githubusercontent.com/u/10201242"
        },
        {
          "username": "PetrAPConsulting",
          "href": "https://github.com/PetrAPConsulting",
          "avatar": "https://avatars.githubusercontent.com/u/173082609"
        },
        {
          "username": "l-lumin",
          "href": "https://github.com/l-lumin",
          "avatar": "https://avatars.githubusercontent.com/u/71011125"
        }
      ]
    },
    {
      "author": "lsdefine",
      "repo": "GenericAgent",
      "avatar": "https://github.com/lsdefine.png",
      "repo_link": "https://github.com/lsdefine/GenericAgent",
      "desc": "Self-evolving agent: grows skill tree from 3.3K-line seed, achieving full system control with 6x less token consumption",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 902,
      "added_stars": 6876,
      "builtBy": [
        {
          "username": "lsdefine",
          "href": "https://github.com/lsdefine",
          "avatar": "https://avatars.githubusercontent.com/u/3377819"
        },
        {
          "username": "ViviqwerAsd",
          "href": "https://github.com/ViviqwerAsd",
          "avatar": "https://avatars.githubusercontent.com/u/90703326"
        },
        {
          "username": "shenhao-stu",
          "href": "https://github.com/shenhao-stu",
          "avatar": "https://avatars.githubusercontent.com/u/65658684"
        },
        {
          "username": "JinyiHan99",
          "href": "https://github.com/JinyiHan99",
          "avatar": "https://avatars.githubusercontent.com/u/154297799"
        },
        {
          "username": "wjl2023",
          "href": "https://github.com/wjl2023",
          "avatar": "https://avatars.githubusercontent.com/u/126332148"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4916,
      "added_stars": 18317,
      "builtBy": [
        {
          "username": "YaoyaoChang",
          "href": "https://github.com/YaoyaoChang",
          "avatar": "https://avatars.githubusercontent.com/u/20237658"
        },
        {
          "username": "MSLDCherryPick",
          "href": "https://github.com/MSLDCherryPick",
          "avatar": "https://avatars.githubusercontent.com/u/173002764"
        },
        {
          "username": "pengzhiliang",
          "href": "https://github.com/pengzhiliang",
          "avatar": "https://avatars.githubusercontent.com/u/26346329"
        },
        {
          "username": "jsoref",
          "href": "https://github.com/jsoref",
          "avatar": "https://avatars.githubusercontent.com/u/2119212"
        }
      ]
    },
    {
      "author": "hugohe3",
      "repo": "ppt-master",
      "avatar": "https://github.com/hugohe3.png",
      "repo_link": "https://github.com/hugohe3/ppt-master",
      "desc": "AI generates natively editable PPTX from any document — real PowerPoint shapes, not images — no design skills needed · by Hugo He",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 970,
      "added_stars": 5540,
      "builtBy": [
        {
          "username": "hugohe3",
          "href": "https://github.com/hugohe3",
          "avatar": "https://avatars.githubusercontent.com/u/188330578"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shandianchengzi",
          "href": "https://github.com/shandianchengzi",
          "avatar": "https://avatars.githubusercontent.com/u/58585665"
        },
        {
          "username": "scientificworld",
          "href": "https://github.com/scientificworld",
          "avatar": "https://avatars.githubusercontent.com/u/30764166"
        },
        {
          "username": "ximiximi423",
          "href": "https://github.com/ximiximi423",
          "avatar": "https://avatars.githubusercontent.com/u/217722657"
        }
      ]
    },
    {
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1821,
      "added_stars": 8665,
      "builtBy": [
        {
          "username": "rajatsen91",
          "href": "https://github.com/rajatsen91",
          "avatar": "https://avatars.githubusercontent.com/u/8039264"
        },
        {
          "username": "siriuz42",
          "href": "https://github.com/siriuz42",
          "avatar": "https://avatars.githubusercontent.com/u/5073569"
        },
        {
          "username": "misha-chertushkin",
          "href": "https://github.com/misha-chertushkin",
          "avatar": "https://avatars.githubusercontent.com/u/151166456"
        },
        {
          "username": "darkpowerxo",
          "href": "https://github.com/darkpowerxo",
          "avatar": "https://avatars.githubusercontent.com/u/1857776"
        },
        {
          "username": "JustinGuese",
          "href": "https://github.com/JustinGuese",
          "avatar": "https://avatars.githubusercontent.com/u/9588843"
        }
      ]
    },
    {
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10024,
      "added_stars": 8132,
      "builtBy": [
        {
          "username": "virattt",
          "href": "https://github.com/virattt",
          "avatar": "https://avatars.githubusercontent.com/u/901795"
        },
        {
          "username": "arsaboo",
          "href": "https://github.com/arsaboo",
          "avatar": "https://avatars.githubusercontent.com/u/18319734"
        },
        {
          "username": "KittatamSaisaard",
          "href": "https://github.com/KittatamSaisaard",
          "avatar": "https://avatars.githubusercontent.com/u/50354903"
        },
        {
          "username": "jsemldonado",
          "href": "https://github.com/jsemldonado",
          "avatar": "https://avatars.githubusercontent.com/u/172995042"
        },
        {
          "username": "ak4631",
          "href": "https://github.com/ak4631",
          "avatar": "https://avatars.githubusercontent.com/u/132299371"
        }
      ]
    },
    {
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3835,
      "added_stars": 9960,
      "builtBy": [
        {
          "username": "Weves",
          "href": "https://github.com/Weves",
          "avatar": "https://avatars.githubusercontent.com/u/25087905"
        },
        {
          "username": "yuhongsun96",
          "href": "https://github.com/yuhongsun96",
          "avatar": "https://avatars.githubusercontent.com/u/32520769"
        },
        {
          "username": "pablonyx",
          "href": "https://github.com/pablonyx",
          "avatar": "https://avatars.githubusercontent.com/u/171597620"
        },
        {
          "username": "jmelahman",
          "href": "https://github.com/jmelahman",
          "avatar": "https://avatars.githubusercontent.com/u/23436978"
        }
      ]
    },
    {
      "author": "AIDC-AI",
      "repo": "Pixelle-Video",
      "avatar": "https://github.com/AIDC-AI.png",
      "repo_link": "https://github.com/AIDC-AI/Pixelle-Video",
      "desc": "🚀 AI 全自动短视频引擎 | AI Fully Automated Short Video Engine",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1166,
      "added_stars": 3822,
      "builtBy": [
        {
          "username": "puke3615",
          "href": "https://github.com/puke3615",
          "avatar": "https://avatars.githubusercontent.com/u/9640444"
        },
        {
          "username": "lltt90511",
          "href": "https://github.com/lltt90511",
          "avatar": "https://avatars.githubusercontent.com/u/17017736"
        },
        {
          "username": "AuroraChloe",
          "href": "https://github.com/AuroraChloe",
          "avatar": "https://avatars.githubusercontent.com/u/139871909"
        },
        {
          "username": "xianshi-yyds",
          "href": "https://github.com/xianshi-yyds",
          "avatar": "https://avatars.githubusercontent.com/u/150135158"
        },
        {
          "username": "strict235",
          "href": "https://github.com/strict235",
          "avatar": "https://avatars.githubusercontent.com/u/196629462"
        }
      ]
    },
    {
      "author": "sherlock-project",
      "repo": "sherlock",
      "avatar": "https://github.com/sherlock-project.png",
      "repo_link": "https://github.com/sherlock-project/sherlock",
      "desc": "Hunt down social media accounts by username across social networks",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9630,
      "added_stars": 8639,
      "builtBy": [
        {
          "username": "sdushantha",
          "href": "https://github.com/sdushantha",
          "avatar": "https://avatars.githubusercontent.com/u/27065646"
        },
        {
          "username": "hoadlck",
          "href": "https://github.com/hoadlck",
          "avatar": "https://avatars.githubusercontent.com/u/1666888"
        },
        {
          "username": "ppfeister",
          "href": "https://github.com/ppfeister",
          "avatar": "https://avatars.githubusercontent.com/u/33327613"
        },
        {
          "username": "TheYahya",
          "href": "https://github.com/TheYahya",
          "avatar": "https://avatars.githubusercontent.com/u/15307244"
        },
        {
          "username": "Czechball",
          "href": "https://github.com/Czechball",
          "avatar": "https://avatars.githubusercontent.com/u/13371865"
        }
      ]
    },
    {
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "232+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1716,
      "added_stars": 5654,
      "builtBy": [
        {
          "username": "alirezarezvani",
          "href": "https://github.com/alirezarezvani",
          "avatar": "https://avatars.githubusercontent.com/u/5697919"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "olgasafonova",
          "href": "https://github.com/olgasafonova",
          "avatar": "https://avatars.githubusercontent.com/u/23409189"
        },
        {
          "username": "fernandezbaptiste",
          "href": "https://github.com/fernandezbaptiste",
          "avatar": "https://avatars.githubusercontent.com/u/83458751"
        },
        {
          "username": "ikala-shawn",
          "href": "https://github.com/ikala-shawn",
          "avatar": "https://avatars.githubusercontent.com/u/111341595"
        }
      ]
    },
    {
      "author": "plastic-labs",
      "repo": "honcho",
      "avatar": "https://github.com/plastic-labs.png",
      "repo_link": "https://github.com/plastic-labs/honcho",
      "desc": "Memory library for building stateful agents",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 339,
      "added_stars": 1832,
      "builtBy": [
        {
          "username": "VVoruganti",
          "href": "https://github.com/VVoruganti",
          "avatar": "https://avatars.githubusercontent.com/u/13438633"
        },
        {
          "username": "dr-frmr",
          "href": "https://github.com/dr-frmr",
          "avatar": "https://avatars.githubusercontent.com/u/93405247"
        },
        {
          "username": "Rajat-Ahuja1997",
          "href": "https://github.com/Rajat-Ahuja1997",
          "avatar": "https://avatars.githubusercontent.com/u/16487421"
        },
        {
          "username": "vintrocode",
          "href": "https://github.com/vintrocode",
          "avatar": "https://avatars.githubusercontent.com/u/77507980"
        },
        {
          "username": "ajspig",
          "href": "https://github.com/ajspig",
          "avatar": "https://avatars.githubusercontent.com/u/46900795"
        }
      ]
    },
    {
      "author": "HKUDS",
      "repo": "RAG-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/RAG-Anything",
      "desc": "\"RAG-Anything: All-in-One RAG Framework\"",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2183,
      "added_stars": 4390,
      "builtBy": [
        {
          "username": "LarFii",
          "href": "https://github.com/LarFii",
          "avatar": "https://avatars.githubusercontent.com/u/49157727"
        },
        {
          "username": "Jah-yee",
          "href": "https://github.com/Jah-yee",
          "avatar": "https://avatars.githubusercontent.com/u/166608075"
        },
        {
          "username": "chaohuang-ai",
          "href": "https://github.com/chaohuang-ai",
          "avatar": "https://avatars.githubusercontent.com/u/204865953"
        },
        {
          "username": "LaansDole",
          "href": "https://github.com/LaansDole",
          "avatar": "https://avatars.githubusercontent.com/u/85084360"
        },
        {
          "username": "hzywhite",
          "href": "https://github.com/hzywhite",
          "avatar": "https://avatars.githubusercontent.com/u/53216231"
        }
      ]
    },
    {
      "author": "sansan0",
      "repo": "TrendRadar",
      "avatar": "https://github.com/sansan0.png",
      "repo_link": "https://github.com/sansan0/TrendRadar",
      "desc": "⭐AI-driven public opinion & trend monitor with multi-platform aggregation, RSS, and smart alerts.🎯 告别信息过载，你的 AI 舆情监控助手与热点筛选工具！聚合多平台热点 + RSS 订阅，支持关键词精准筛选。AI 智能筛选新闻 + AI 翻译 + AI 分析简报直推手机，也支持接入 MCP 架构，赋能 AI 自然语言对话分析、情感洞察与趋势预测等。支持 Docker ，数据本地/云端自持。集成微信/飞书/钉钉/Telegram/邮件/ntfy/bark/slack 等渠道智能推送。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 23899,
      "added_stars": 6043,
      "builtBy": [
        {
          "username": "actions-user",
          "href": "https://github.com/actions-user",
          "avatar": "https://avatars.githubusercontent.com/u/65916846"
        },
        {
          "username": "sansan0",
          "href": "https://github.com/sansan0",
          "avatar": "https://avatars.githubusercontent.com/u/77180927"
        },
        {
          "username": "bing-h",
          "href": "https://github.com/bing-h",
          "avatar": "https://avatars.githubusercontent.com/u/9867881"
        },
        {
          "username": "wtychn",
          "href": "https://github.com/wtychn",
          "avatar": "https://avatars.githubusercontent.com/u/48308484"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "apm",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/apm",
      "desc": "Agent Package Manager",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 148,
      "added_stars": 1325,
      "builtBy": [
        {
          "username": "danielmeppiel",
          "href": "https://github.com/danielmeppiel",
          "avatar": "https://avatars.githubusercontent.com/u/51440732"
        },
        {
          "username": "sergio-sisternes-epam",
          "href": "https://github.com/sergio-sisternes-epam",
          "avatar": "https://avatars.githubusercontent.com/u/207026618"
        }
      ]
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "Three Ways to Convert JSON to TypeScript. Only One Is Deterministic.",
      "url": "https://aralroca.hashnode.dev/three-ways-to-convert-json-to-typescript-only-one-is-deterministic",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-04-27T22:03:24.000Z"
    },
    {
      "title": "One PR to a parser unlocked prerendering in Brisa",
      "url": "https://aralroca.hashnode.dev/one-pr-to-a-parser-unlocked-prerendering-in-brisa",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-04-23T20:40:05.000Z"
    },
    {
      "title": "Honker - PosgtreSQL style NOTIFY/LISTEN with SQLite (Node/Bun Libraries)",
      "url": "https://github.com/russellromney/honker",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-04-23T16:03:07.000Z"
    },
    {
      "title": "A Powerful Node.JS CLI Time Tracker",
      "url": "https://datsusara.hashnode.dev/a-powerful-node-js-cli-time-tracker",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-04-23T08:04:17.000Z"
    },
    {
      "title": "Getting started with antivirus scanning in Node.js (5 minutes)",
      "url": "https://pompelmi.app/blog/nodejs-antivirus-getting-started.html",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-04-21T07:52:34.000Z"
    },
    {
      "title": "WebBlackbox - A flight recorder and time-travel debugger for web apps",
      "url": "https://github.com/webllm/webblackbox",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-04-20T16:18:41.000Z"
    },
    {
      "title": "Why I don't chain everything in JavaScript anymore",
      "url": "https://allthingssmitty.com/2026/04/20/why-i-dont-chain-everything-in-javascript-anymore/",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-04-20T12:58:41.000Z"
    },
    {
      "title": "I got tired of wiring the same caching stack every project, so I built LayerCache",
      "url": "https://dev.to/flyingsquirrel0419/i-got-tired-of-wiring-the-same-caching-stack-every-project-so-i-built-layercache-52e2",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-04-19T17:20:09.000Z"
    },
    {
      "title": "Letting Product Teams Own SVG Icons (Without Code Changes)",
      "url": "https://dev.to/subito/letting-product-teams-own-svg-icons-without-code-changes-5hll",
      "upvotes": "2",
      "comments": "2",
      "created": "2026-04-15T05:20:29.000Z"
    },
    {
      "title": "New Vue UI components from SVAR: 30+ controls, edit forms, and filtering widgets",
      "url": "https://svar.dev/blog/svar-vue-components-released/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-04-13T13:48:02.000Z"
    }
  ]
}
```

## 3. What Builders Are Shipping/Discussing

**Query:** What are builders shipping and discussing right now?

**Command:**
```bash
node bin/main.js --json devto -s top -c 10 ; node bin/main.js --json lobsters -s newest -c 10 ; node bin/main.js --json news -t 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "devto",
  "tag": null,
  "sort": "top",
  "items": [
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-98e",
      "tags": "discuss, jokes, watercooler",
      "reactions": 21,
      "comments": 20,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-2njl",
      "tags": "top7, discuss",
      "reactions": 39,
      "comments": 5,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Fine-Tune Any HuggingFace Model like Gemma on TPUs with TorchAX",
      "description": "Learn how to fine-tune PyTorch HuggingFace models on Google TPUs using torchax and LoRA — no JAX rewrite needed. Includes evaluation, save/reload, and a Colab notebook.",
      "url": "https://dev.to/gde/fine-tune-any-huggingface-model-like-gemma-on-tpus-with-torchax-5g21",
      "tags": "machinelearning, pytorch, python, tutorial",
      "reactions": 8,
      "comments": 0,
      "reading_time": 11,
      "author": "ahmed_elnaggar"
    },
    {
      "title": "What was your win this week!?",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-8ep",
      "tags": "discuss, weeklyretro",
      "reactions": 52,
      "comments": 86,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Creating a CLI Tool with AI Agents: My Journey with kdn",
      "description": "A few months ago, my experience with AI assistance was limited to tab completions in Cursor. The kind...",
      "url": "https://dev.to/feloy/creating-a-cli-tool-with-ai-agents-my-journey-with-kdn-46d8",
      "tags": "ai, agents, development, workspace",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "feloy"
    },
    {
      "title": "How to Remove Console.log from React Native Production Builds",
      "description": "When building React Native apps, console.log is your best friend during development. But leaving it...",
      "url": "https://dev.to/neeraj1005/how-to-remove-consolelog-from-react-native-production-builds-2f7d",
      "tags": "reactnative, typescript, performance, mobile",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "neeraj1005"
    },
    {
      "title": "ChatGPT 5.4 v/s Claude Opus 4.6: Which Model Should You use?",
      "description": "GPT-5.4 wins on cost efficiency, native computer use, and speed for high-throughput pipelines. Claude...",
      "url": "https://dev.to/devashishmamgain/chatgpt-54-vs-claude-opus-46-which-model-should-you-use-oln",
      "tags": "ai, chatgpt, claude, llm",
      "reactions": 0,
      "comments": 0,
      "reading_time": 10,
      "author": "devashishmamgain"
    },
    {
      "title": "G̶o̶d̶ ̶i̶s̶ ̶m̶y̶ ̶C̶o̶p̶i̶l̶o̶t̶ Copilot is my new god",
      "description": "I spent some time this weekend noodling around with Github Copilot, using the copilot-cli tool.  A...",
      "url": "https://dev.to/drhyde/god-is-my-copilot-copilot-is-my-new-god-5h6i",
      "tags": "ai, programming, githubcopilot",
      "reactions": 3,
      "comments": 0,
      "reading_time": 5,
      "author": "drhyde"
    },
    {
      "title": "Codemod for ignoring lint errors",
      "description": "Meet my new codemod, ignore-lint-errors. It helps us ignore lint errors from eslint, stylelint, and...",
      "url": "https://dev.to/ijlee2/codemod-for-ignoring-lint-errors-2j3g",
      "tags": "javascript, ember, showdev, opensource",
      "reactions": 0,
      "comments": 1,
      "reading_time": 2,
      "author": "ijlee2"
    },
    {
      "title": "Service-to-Service Calls vs Event-Driven Flows: When to Use Which",
      "description": "This post breaks down the difference between direct service calls, jobs and workers, and event-driven flows in plain terms, with a simple way to decide when each one makes sense.",
      "url": "https://dev.to/toybz/service-to-service-calls-vs-event-driven-flows-when-to-use-which-1da8",
      "tags": "backend, architecture",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "toybz"
    }
  ]
}
- Fetching feeds...
{
  "source": "lobsters",
  "sort": "newest",
  "tag": null,
  "items": [
    {
      "title": "GTFOBins",
      "url": "https://gtfobins.org/",
      "score": 1,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "5wj0a2"
    },
    {
      "title": "Donating to open source",
      "url": "https://entropicthoughts.com/open-source-donation",
      "score": 7,
      "comments": 1,
      "tags": [
        "culture"
      ],
      "id": "rmujw3"
    },
    {
      "title": "How I Broke the Anti-Bot Behind Nike, Kick, and Twitch",
      "url": "https://emro.cat/blog/how-i-broke-the-anti-bot-behind-nike-kick-and-twitch/",
      "score": 7,
      "comments": 0,
      "tags": [
        "javascript",
        "reversing",
        "rust"
      ],
      "id": "jpohft"
    },
    {
      "title": "Fix Your Game's Input Latency",
      "url": "https://www.youtube.com/watch?v=EM9utsGhaYs",
      "score": 7,
      "comments": 0,
      "tags": [
        "games",
        "graphics",
        "video"
      ],
      "id": "uy7ynl"
    },
    {
      "title": "What Happens When You Build an Inode-Style Vector in Rust",
      "url": "https://sot.dev/inode-style-vector-in-rust.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "performance",
        "rust"
      ],
      "id": "bzlbzs"
    },
    {
      "title": "Compu-Global-Hyper-Mega-Net: A Retro Internet for Retro Computers (LFNW 2026)",
      "url": "https://www.youtube.com/watch?v=cSJsGNIDjtc",
      "score": 5,
      "comments": 0,
      "tags": [
        "networking",
        "retrocomputing",
        "video"
      ],
      "id": "hphnx4"
    },
    {
      "title": "Using Rust to Build a $1 Handheld Gaming Console",
      "url": "https://chrisdell.info/using-rust-to-build-a-1-dollar-handheld-gaming-console/",
      "score": 9,
      "comments": 1,
      "tags": [
        "rust"
      ],
      "id": "jl0d5b"
    },
    {
      "title": "What's new in pip 26.1 - lockfiles and dependency cooldowns",
      "url": "https://ichard26.github.io/blog/2026/04/whats-new-in-pip-26.1/",
      "score": 9,
      "comments": 0,
      "tags": [
        "python",
        "release",
        "security"
      ],
      "id": "w2oiaq"
    },
    {
      "title": "Rick and Morty Tried to Warn Us About Agentic AI",
      "url": "https://jadarma.github.io/blog/posts/2026/04/rick-and-morty-tried-to-warn-us-about-agentic-ai/",
      "score": -1,
      "comments": 2,
      "tags": [
        "satire",
        "vibecoding"
      ],
      "id": "9xqbzk"
    },
    {
      "title": "The woes of sanitizing SVGs",
      "url": "https://muffin.ink/blog/scratch-svg-sanitization/",
      "score": 5,
      "comments": 3,
      "tags": [
        "security",
        "web"
      ],
      "id": "foxx1z"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "StefanBatory",
      "descendants": 5,
      "id": 47931035,
      "kids": [
        47931239,
        47931292,
        47931211,
        47931160
      ],
      "score": 44,
      "time": 1777357659,
      "title": "GTFOBins",
      "type": "story",
      "url": "https://gtfobins.org/"
    },
    {
      "by": "jekude",
      "descendants": 95,
      "id": 47927903,
      "kids": [
        47931253,
        47930782,
        47930394,
        47931275,
        47930261,
        47930714,
        47930744,
        47929230,
        47929506,
        47929169,
        47930479,
        47931087,
        47931174,
        47928886,
        47929417,
        47929046,
        47928864,
        47930526,
        47929889,
        47928949,
        47930241,
        47929317,
        47928940,
        47929190,
        47929189,
        47929828,
        47929685,
        47928917,
        47928888,
        47928987,
        47930230
      ],
      "score": 293,
      "time": 1777326948,
      "title": "Talkie: a 13B vintage language model from 1930",
      "type": "story",
      "url": "https://talkie-lm.com/introducing-talkie"
    },
    {
      "by": "helsinkiandrew",
      "descendants": 723,
      "id": 47921248,
      "kids": [
        47923805,
        47921551,
        47922120,
        47922477,
        47930160,
        47925421,
        47922022,
        47925160,
        47921511,
        47926909,
        47922383,
        47921995,
        47925637,
        47921267,
        47924759,
        47925814,
        47926814,
        47930909,
        47923581,
        47921287,
        47921840,
        47921718,
        47923395,
        47922446,
        47922454,
        47923370,
        47921772,
        47921252,
        47927373,
        47926220,
        47921769,
        47925888,
        47926174,
        47929924,
        47922058,
        47924679,
        47925907,
        47928188,
        47926708,
        47924571,
        47921711,
        47929738,
        47929394,
        47925570,
        47925286,
        47922834,
        47929268,
        47929683,
        47921662,
        47925248,
        47921886,
        47923734,
        47928218,
        47924193,
        47924796,
        47921792,
        47921854,
        47926878,
        47923995,
        47921270,
        47921797,
        47930785,
        47921285,
        47929969,
        47924062,
        47921816,
        47924123,
        47923418,
        47923649,
        47921715,
        47929862,
        47921832,
        47923796,
        47924682,
        47921499
      ],
      "score": 847,
      "text": "Gift Article: <a href=\"https:&#x2F;&#x2F;www.bloomberg.com&#x2F;news&#x2F;articles&#x2F;2026-04-27&#x2F;microsoft-to-stop-sharing-revenue-with-main-ai-partner-openai?accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJTdWJzY3JpYmVyR2lmdGVkQXJ0aWNsZSIsImlhdCI6MTc3NzI5NjE3MiwiZXhwIjoxNzc3OTAwOTcyLCJhcnRpY2xlSWQiOiJURTVMT0lLSzNOWUkwMCIsImJjb25uZWN0SWQiOiJDN0U3REM1Q0MxRTQ0NzM0QkY2MzYxQjY5QzgxN0UzMyJ9.mkOwEicK1kMLb-h6ZjkN4u-DsF55439rrFad0m1lqZM\" rel=\"nofollow\">https:&#x2F;&#x2F;www.bloomberg.com&#x2F;news&#x2F;articles&#x2F;2026-04-27&#x2F;microsoft...</a><p><a href=\"https:&#x2F;&#x2F;openai.com&#x2F;index&#x2F;next-phase-of-microsoft-partnership&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;openai.com&#x2F;index&#x2F;next-phase-of-microsoft-partnership...</a><p><a href=\"https:&#x2F;&#x2F;x.com&#x2F;ajassy&#x2F;status&#x2F;2048806022253609115\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;ajassy&#x2F;status&#x2F;2048806022253609115</a>",
      "time": 1777296162,
      "title": "Microsoft and OpenAI end their exclusive and revenue-sharing deal",
      "type": "story",
      "url": "https://www.bloomberg.com/news/articles/2026-04-27/microsoft-to-stop-sharing-revenue-with-main-ai-partner-openai"
    },
    {
      "by": "theogravity",
      "descendants": 317,
      "id": 47926861,
      "kids": [
        47928794,
        47931268,
        47927476,
        47931278,
        47927501,
        47928484,
        47927626,
        47931129,
        47930788,
        47927696,
        47928573,
        47928521,
        47927622,
        47928014,
        47929995,
        47929441,
        47931249,
        47930894,
        47930456,
        47928130,
        47928405,
        47927599,
        47927550,
        47931096,
        47927649,
        47930597,
        47930478,
        47927625,
        47927667,
        47930194,
        47927578,
        47930745,
        47929576,
        47930457,
        47927707,
        47928951,
        47928665,
        47927597,
        47928555,
        47930253,
        47928630,
        47927651,
        47929805,
        47927889,
        47928387,
        47930879,
        47929329,
        47930516,
        47927702,
        47928991,
        47927594,
        47927887,
        47927810,
        47927534,
        47928509,
        47928448,
        47928067,
        47928091,
        47931048,
        47929807,
        47930365,
        47929483,
        47928868,
        47931119,
        47928499,
        47927941,
        47927789,
        47928181,
        47928371,
        47927711,
        47928637,
        47927802,
        47928783,
        47929253,
        47927729,
        47928778,
        47929008,
        47928048,
        47928319,
        47927809,
        47927875,
        47927933,
        47928144,
        47927610,
        47930847,
        47929013,
        47929884,
        47927631,
        47927784,
        47930256,
        47928223,
        47928169,
        47930141,
        47927742,
        47928692,
        47928679,
        47928570,
        47930583,
        47928781,
        47928154,
        47928261,
        47927701,
        47929453,
        47929645,
        47927905,
        47928746,
        47930131,
        47928477,
        47928465,
        47928358,
        47928222,
        47928096,
        47927812,
        47927688,
        47930359
      ],
      "score": 474,
      "time": 1777321473,
      "title": "Is my blue your blue?",
      "type": "story",
      "url": "https://ismy.blue/"
    },
    {
      "by": "luu",
      "descendants": 2,
      "id": 47899669,
      "kids": [
        47930786
      ],
      "score": 52,
      "time": 1777104979,
      "title": "Pgrx: Build Postgres Extensions with Rust",
      "type": "story",
      "url": "https://github.com/pgcentralfoundation/pgrx"
    },
    {
      "by": "blfr",
      "descendants": 12,
      "id": 47902269,
      "kids": [
        47929994,
        47930044,
        47930503,
        47931031,
        47929985,
        47929973
      ],
      "score": 100,
      "time": 1777131714,
      "title": "Mo RAM, Mo Problems (2025)",
      "type": "story",
      "url": "https://fabiensanglard.net/curse/"
    },
    {
      "by": "gnabgib",
      "descendants": 11,
      "id": 47929035,
      "kids": [
        47930850,
        47930357,
        47929782,
        47929926,
        47931304,
        47930653
      ],
      "score": 99,
      "time": 1777336324,
      "title": "High Performance Git",
      "type": "story",
      "url": "https://gitperf.com/"
    },
    {
      "by": "gnabgib",
      "descendants": 66,
      "id": 47927070,
      "kids": [
        47930549,
        47927632,
        47927876,
        47930427,
        47930278,
        47927890,
        47929903,
        47929681,
        47928248,
        47928066
      ],
      "score": 146,
      "time": 1777322656,
      "title": "Three men are facing charges in Toronto SMS Blaster arrests",
      "type": "story",
      "url": "https://www.tps.ca/media-centre/stories/unprecedented-sms-blaster-arrests/"
    },
    {
      "by": "nateb2022",
      "descendants": 2,
      "id": 47930170,
      "kids": [
        47931280,
        47930546
      ],
      "score": 22,
      "time": 1777346860,
      "title": "LingBot-Map: Streaming 3D reconstruction with geometric context transformer",
      "type": "story",
      "url": "https://technology.robbyant.com/lingbot-map"
    },
    {
      "by": "Oravys",
      "descendants": 181,
      "id": 47919630,
      "kids": [
        47922388,
        47919660,
        47921246,
        47922503,
        47921406,
        47922271,
        47924381,
        47928770,
        47925528,
        47921768,
        47921812,
        47922654,
        47928246,
        47923398,
        47925971,
        47921543,
        47924203,
        47923496,
        47925195,
        47923387,
        47921348,
        47924022,
        47926164,
        47921347,
        47924108,
        47921346,
        47926724,
        47921460,
        47922520,
        47922824,
        47928739,
        47928440,
        47923123,
        47921463,
        47922399,
        47922667,
        47921646,
        47930602,
        47921364,
        47928192,
        47924106,
        47923302
      ],
      "score": 510,
      "time": 1777283830,
      "title": "4TB of voice samples just stolen from 40k AI contractors at Mercor",
      "type": "story",
      "url": "https://app.oravys.com/blog/mercor-breach-2026"
    }
  ]
}
```

## 4. Practical Coding Topics to Study

**Query:** What practical coding topics should I study next?

**Command:**
```bash
node bin/main.js --json reddit -t programming -s top ; node bin/main.js --json devto -t career -s top -c 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "reddit",
  "topic": "programming",
  "sort": "top",
  "items": [
    {
      "title": "First time using the MareNostrum V Supercomputer, writeup of what actually surprised me coming from cloud",
      "url": "https://towardsdatascience.com/what-it-actually-takes-to-run-code-on-200me-supercomputer/",
      "permalink": "https://www.reddit.com/r/programming/comments/1swwo7h/first_time_using_the_marenostrum_v_supercomputer/",
      "author": "/u/Georgiou1226",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Georgiou1226 [link] &#32; [comments]",
      "published": "2026-04-27T07:30:07+00:00"
    },
    {
      "title": "Box to save memory in Rust",
      "url": "https://dystroy.org/blog/box-to-save-memory/",
      "permalink": "https://www.reddit.com/r/programming/comments/1swzugs/box_to_save_memory_in_rust/",
      "author": "/u/BlondieCoder",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/BlondieCoder [link] &#32; [comments]",
      "published": "2026-04-27T10:36:55+00:00"
    },
    {
      "title": "The fastest Linux timestamps",
      "url": "https://www.hmpcabral.com/2026/04/26/the-fastest-linux-timestamps/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sx074x/the_fastest_linux_timestamps/",
      "author": "/u/Dear-Economics-315",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Dear-Economics-315 [link] &#32; [comments]",
      "published": "2026-04-27T10:55:29+00:00"
    },
    {
      "title": "Turing Award Winner: Data Abstraction, Dijkstra, Distributed Systems | Barbara Liskov",
      "url": "https://www.developing.dev/p/turing-award-winner-data-abstraction",
      "permalink": "https://www.reddit.com/r/programming/comments/1sx9v9e/turing_award_winner_data_abstraction_dijkstra/",
      "author": "/u/mttd",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/mttd [link] &#32; [comments]",
      "published": "2026-04-27T17:06:42+00:00"
    },
    {
      "title": "Message Brokers Are Modern Grids",
      "url": "https://yusufaytas.com/message-brokers-are-modern-grids",
      "permalink": "https://www.reddit.com/r/programming/comments/1sx032b/message_brokers_are_modern_grids/",
      "author": "/u/Dear-Economics-315",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Dear-Economics-315 [link] &#32; [comments]",
      "published": "2026-04-27T10:49:39+00:00"
    },
    {
      "title": "Using Rust to Build a $1 Handheld Gaming Console",
      "url": "https://chrisdell.info/using-rust-to-build-a-1-dollar-handheld-gaming-console/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sxsrrf/using_rust_to_build_a_1_handheld_gaming_console/",
      "author": "/u/BlondieCoder",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/BlondieCoder [link] &#32; [comments]",
      "published": "2026-04-28T05:59:01+00:00"
    },
    {
      "title": "The Friendly Rewrite · thehardparts.dev",
      "url": "https://thehardparts.dev/failure-modes/friendly-rewrite",
      "permalink": "https://www.reddit.com/r/programming/comments/1sx7da9/the_friendly_rewrite_thehardpartsdev/",
      "author": "/u/ludovicianul",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/ludovicianul [link] &#32; [comments]",
      "published": "2026-04-27T15:39:20+00:00"
    },
    {
      "title": "in which lisp generates music",
      "url": "https://abhirag.com/fennel-pattrns-renoise",
      "permalink": "https://www.reddit.com/r/programming/comments/1sx17v6/in_which_lisp_generates_music/",
      "author": "/u/abhirag",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Livecoding Music with Fennel and Renoise &#32; submitted by &#32; /u/abhirag [link] &#32; [comments]",
      "published": "2026-04-27T11:45:12+00:00"
    },
    {
      "title": "Crash Course on Notation in Programming Language Theory",
      "url": "https://siek.blogspot.com/2012/07/crash-course-on-notation-in-programming.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1sx4eb2/crash_course_on_notation_in_programming_language/",
      "author": "/u/peripateticman2026",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/peripateticman2026 [link] &#32; [comments]",
      "published": "2026-04-27T13:54:28+00:00"
    },
    {
      "title": "Solving Hidden Number Problems Without Lattices",
      "url": "https://leetarxiv.substack.com/p/solving-hidden-number-problems-without",
      "permalink": "https://www.reddit.com/r/programming/comments/1swzj9f/solving_hidden_number_problems_without_lattices/",
      "author": "/u/DataBaeBee",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/DataBaeBee [link] &#32; [comments]",
      "published": "2026-04-27T10:19:38+00:00"
    },
    {
      "title": "High Performance Git",
      "url": "https://gitperf.com/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sxt6si/high_performance_git/",
      "author": "/u/BlondieCoder",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/BlondieCoder [link] &#32; [comments]",
      "published": "2026-04-28T06:22:03+00:00"
    },
    {
      "title": "We are our own worst enemies",
      "url": "https://www.ufried.com/blog/worst_enemies/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sx9ocy/we_are_our_own_worst_enemies/",
      "author": "/u/BinaryIgor",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "A good read about perceived vs real progress acceleration and what to do about it. &#32; submitted by &#32; /u/BinaryIgor [link] &#32; [comments]",
      "published": "2026-04-27T17:00:10+00:00"
    },
    {
      "title": "Florent Castelli: Introduction to the Bazel build system",
      "url": "https://youtu.be/GMx6YwdELl4",
      "permalink": "https://www.reddit.com/r/programming/comments/1sx94m9/florent_castelli_introduction_to_the_bazel_build/",
      "author": "/u/_a4z",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/_a4z [link] &#32; [comments]",
      "published": "2026-04-27T16:41:10+00:00"
    },
    {
      "title": "Looking for feedback on a JSON formatter I built for my workflow",
      "url": "https://json-formatter-five-tau.vercel.app/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sxt83k/looking_for_feedback_on_a_json_formatter_i_built/",
      "author": "/u/Background_Leg_5125",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;ve been working with JSON a lot lately and got tired of existing tools being too cluttered or requiring signup. Features I focused on: • Clean UI (no ads) • Works offline • Mobile friendly What features would make this actually useful for your workflow? Any feedback appreciated! &#32; submitted by &#32; /u/Background_Leg_5125 [link] &#32; [comments]",
      "published": "2026-04-28T06:24:01+00:00"
    },
    {
      "title": "C++ & OpenGL Spacecraft Navigation: Earth to Moon Trajectory",
      "url": "https://www.youtube.com/watch?v=qHCHyJkCEKs",
      "permalink": "https://www.reddit.com/r/programming/comments/1sx8nap/c_opengl_spacecraft_navigation_earth_to_moon/",
      "author": "/u/Any_Area_5977",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Testing the navigation system for an Earth to Moon transfer trajectory in my custom C++ and OpenGL spacecraft simulation. &#32; submitted by &#32; /u/Any_Area_5977 [link] &#32; [comments]",
      "published": "2026-04-27T16:24:21+00:00"
    },
    {
      "title": "It's OK to abandon your side-project",
      "url": "https://robbowen.digital/wrote-about/abandoned-side-projects/",
      "permalink": "https://www.reddit.com/r/programming/comments/1swztyv/its_ok_to_abandon_your_sideproject/",
      "author": "/u/BlondieCoder",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/BlondieCoder [link] &#32; [comments]",
      "published": "2026-04-27T10:36:10+00:00"
    },
    {
      "title": "Why is this README roasting me so much?!!!",
      "url": "https://github.com/RoninAkagami/worst-password-manager/blob/main/README.md",
      "permalink": "https://www.reddit.com/r/programming/comments/1sxsdd9/why_is_this_readme_roasting_me_so_much/",
      "author": "/u/Fresh-Lie5160",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Ive never seen a bloody README so damn goofy... lol &#32; submitted by &#32; /u/Fresh-Lie5160 [link] &#32; [comments]",
      "published": "2026-04-28T05:37:17+00:00"
    },
    {
      "title": "The reason you aren’t making $300k as a developer",
      "url": "https://javarevisited.substack.com/p/the-300k-skill-most-developers-ignore",
      "permalink": "https://www.reddit.com/r/programming/comments/1sxqgas/the_reason_you_arent_making_300k_as_a_developer/",
      "author": "/u/javinpaul",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/javinpaul [link] &#32; [comments]",
      "published": "2026-04-28T03:59:08+00:00"
    }
  ]
}
- Fetching feeds...
{
  "source": "devto",
  "tag": "career",
  "sort": "top",
  "items": [
    {
      "title": "What It Actually Feels Like to Build Something You're Proud Of",
      "description": "Nobody talks about the emotional side of shipping. Let's fix that.     There's a specific kind of...",
      "url": "https://dev.to/_boweii/what-it-actually-feels-like-to-build-something-youre-proud-of-35mi",
      "tags": "career, webdev, beginners, productivity",
      "reactions": 4,
      "comments": 0,
      "reading_time": 6,
      "author": "_boweii"
    },
    {
      "title": "From Data Entry at a CA Office to Senior WordPress Developer — My 9-Year Journey",
      "description": "From Data Entry at a CA Office to Senior WordPress Developer — My 9-Year Journey   I didn't...",
      "url": "https://dev.to/kushang_tailor/from-data-entry-at-a-ca-office-to-senior-wordpress-developer-my-9-year-journey-3f92",
      "tags": "career, webdev, wordpress, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "kushang_tailor"
    },
    {
      "title": "I Applied to 200 Jobs and Got 3 Interviews — Here's What Finally Worked",
      "description": "The first 100 applications taught me nothing. Same resume, same cover letter template, same job...",
      "url": "https://dev.to/charliemorrison/i-applied-to-200-jobs-and-got-3-interviews-heres-what-finally-worked-4d0g",
      "tags": "career, productivity, beginners, motivation",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "charliemorrison"
    },
    {
      "title": "I Tried 10 ChatGPT Resume Prompts. Here's What Actually Got Me Interviews.",
      "description": "I sent 47 applications with my old resume. 0 callbacks.  Then I tried 10 ChatGPT prompts I'd been...",
      "url": "https://dev.to/ahnhyeongkyu/i-tried-10-chatgpt-resume-prompts-heres-what-actually-got-me-interviews-kjo",
      "tags": "chatgpt, resume, ai, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "ahnhyeongkyu"
    },
    {
      "title": "I built a resume compiler in Go — write YAML, get every format",
      "description": "I got tired of fighting Word docs and Canva templates every time I updated my resume.  Your resume is...",
      "url": "https://dev.to/sahaabhishek/i-built-a-resume-compiler-in-go-write-yaml-get-every-format-elo",
      "tags": "go, opensource, career, resume",
      "reactions": 0,
      "comments": 1,
      "reading_time": 3,
      "author": "sahaabhishek"
    },
    {
      "title": "How to track 30+ FAANG interviews without losing offers in 2026",
      "description": "A battle-tested system for tracking multiple FAANG loops, follow-ups, and compensation negotiations without dropping the ball.",
      "url": "https://dev.to/komugi_4236cc409d6f9157e7/how-to-track-30-faang-interviews-without-losing-offers-in-2026-261p",
      "tags": "career, productivity, notion, interview",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "komugi_4236cc409d6f9157e7"
    },
    {
      "title": "How to Beat the ATS: A 2026 Resume Guide That Actually Works",
      "description": "If you've applied to 50+ jobs and heard nothing back, it's probably not your experience — it's your...",
      "url": "https://dev.to/charliemorrison/how-to-beat-the-ats-a-2026-resume-guide-that-actually-works-1oa0",
      "tags": "career, resume, jobsearch, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "charliemorrison"
    },
    {
      "title": "I was tired of copy-pasting between job tracker and CV tools, so I connected them",
      "description": "Last year when I was applying for jobs, my setup was a mess.  I had 10 tabs open, a spreadsheet to...",
      "url": "https://dev.to/sylumkdev/i-was-tired-of-copy-pasting-between-job-tracker-and-cv-tools-so-i-connected-them-2ai2",
      "tags": "ai, programming, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "sylumkdev"
    },
    {
      "title": "How to Negotiate Your Salary Over Email (With Templates)",
      "description": "Salary negotiation is awkward enough in person. Over email, it's somehow worse — you're staring at a...",
      "url": "https://dev.to/charliemorrison/how-to-negotiate-your-salary-over-email-with-templates-5c14",
      "tags": "career, salary, productivity, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "charliemorrison"
    },
    {
      "title": "I Reviewed 100 LinkedIn Headlines — Here's What Actually Gets Clicks",
      "description": "Your LinkedIn headline is 220 characters. That's it. And most people waste every single one of...",
      "url": "https://dev.to/charliemorrison/i-reviewed-100-linkedin-headlines-heres-what-actually-gets-clicks-3oln",
      "tags": "career, linkedin, productivity, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "charliemorrison"
    }
  ]
}
```

