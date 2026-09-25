# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-25 06:40:52 UTC

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
      "author": "anthropics",
      "repo": "claude-code",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code",
      "desc": "Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 24451,
      "added_stars": 2384,
      "builtBy": [
        {
          "username": "actions-user",
          "href": "https://github.com/actions-user",
          "avatar": "https://avatars.githubusercontent.com/u/65916846"
        },
        {
          "username": "poteat",
          "href": "https://github.com/poteat",
          "avatar": "https://avatars.githubusercontent.com/u/7668446"
        },
        {
          "username": "bcherny",
          "href": "https://github.com/bcherny",
          "avatar": "https://avatars.githubusercontent.com/u/1761758"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ant-kurt",
          "href": "https://github.com/ant-kurt",
          "avatar": "https://avatars.githubusercontent.com/u/209710463"
        }
      ]
    },
    {
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5086,
      "added_stars": 6547,
      "builtBy": [
        {
          "username": "nwparker",
          "href": "https://github.com/nwparker",
          "avatar": "https://avatars.githubusercontent.com/u/4138956"
        },
        {
          "username": "AmethystLiang",
          "href": "https://github.com/AmethystLiang",
          "avatar": "https://avatars.githubusercontent.com/u/6427696"
        },
        {
          "username": "orca-ide",
          "href": "https://github.com/orca-ide",
          "avatar": "https://avatars.githubusercontent.com/u/277417572"
        },
        {
          "username": "brennanb2025",
          "href": "https://github.com/brennanb2025",
          "avatar": "https://avatars.githubusercontent.com/u/79079362"
        },
        {
          "username": "Jinwoo-H",
          "href": "https://github.com/Jinwoo-H",
          "avatar": "https://avatars.githubusercontent.com/u/73622457"
        }
      ]
    },
    {
      "author": "Fission-AI",
      "repo": "OpenSpec",
      "avatar": "https://github.com/Fission-AI.png",
      "repo_link": "https://github.com/Fission-AI/OpenSpec",
      "desc": "Spec-driven development (SDD) for AI coding assistants.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4806,
      "added_stars": 1415,
      "builtBy": [
        {
          "username": "TabishB",
          "href": "https://github.com/TabishB",
          "avatar": "https://avatars.githubusercontent.com/u/30385142"
        },
        {
          "username": "clay-good",
          "href": "https://github.com/clay-good",
          "avatar": "https://avatars.githubusercontent.com/u/237345393"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "cline",
      "repo": "cline",
      "avatar": "https://github.com/cline.png",
      "repo_link": "https://github.com/cline/cline",
      "desc": "Autonomous coding agent as an SDK, IDE extension, or CLI assistant.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7515,
      "added_stars": 855,
      "builtBy": [
        {
          "username": "saoudrizwan",
          "href": "https://github.com/saoudrizwan",
          "avatar": "https://avatars.githubusercontent.com/u/7799382"
        },
        {
          "username": "abeatrix",
          "href": "https://github.com/abeatrix",
          "avatar": "https://avatars.githubusercontent.com/u/68532117"
        },
        {
          "username": "celestial-vault",
          "href": "https://github.com/celestial-vault",
          "avatar": "https://avatars.githubusercontent.com/u/58194240"
        },
        {
          "username": "arafatkatze",
          "href": "https://github.com/arafatkatze",
          "avatar": "https://avatars.githubusercontent.com/u/11155207"
        },
        {
          "username": "BarreiroT",
          "href": "https://github.com/BarreiroT",
          "avatar": "https://avatars.githubusercontent.com/u/52393857"
        }
      ]
    },
    {
      "author": "LibreChat-AI",
      "repo": "LibreChat",
      "avatar": "https://github.com/LibreChat-AI.png",
      "repo_link": "https://github.com/LibreChat-AI/LibreChat",
      "desc": "Enhanced ChatGPT Clone: Features Agents, MCP, Skills, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, GPT-5, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions, Secure Multi-User Auth, Presets, open-source for self-hosting. Active",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9203,
      "added_stars": 743,
      "builtBy": [
        {
          "username": "danny-avila",
          "href": "https://github.com/danny-avila",
          "avatar": "https://avatars.githubusercontent.com/u/110412045"
        },
        {
          "username": "berry-13",
          "href": "https://github.com/berry-13",
          "avatar": "https://avatars.githubusercontent.com/u/81851188"
        },
        {
          "username": "dustinhealy",
          "href": "https://github.com/dustinhealy",
          "avatar": "https://avatars.githubusercontent.com/u/54083382"
        },
        {
          "username": "wtlyu",
          "href": "https://github.com/wtlyu",
          "avatar": "https://avatars.githubusercontent.com/u/8267138"
        }
      ]
    },
    {
      "author": "Open-Dev-Society",
      "repo": "OpenStock",
      "avatar": "https://github.com/Open-Dev-Society.png",
      "repo_link": "https://github.com/Open-Dev-Society/OpenStock",
      "desc": "OpenStock is an open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights — built openly, for everyone, forever free.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2335,
      "added_stars": 4800,
      "builtBy": [
        {
          "username": "ravixalgorithm",
          "href": "https://github.com/ravixalgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/148683640"
        },
        {
          "username": "keshav-005",
          "href": "https://github.com/keshav-005",
          "avatar": "https://avatars.githubusercontent.com/u/180140750"
        },
        {
          "username": "nb-src",
          "href": "https://github.com/nb-src",
          "avatar": "https://avatars.githubusercontent.com/u/76625701"
        },
        {
          "username": "chinnsenn",
          "href": "https://github.com/chinnsenn",
          "avatar": "https://avatars.githubusercontent.com/u/13096352"
        }
      ]
    },
    {
      "author": "supabase",
      "repo": "supabase",
      "avatar": "https://github.com/supabase.png",
      "repo_link": "https://github.com/supabase/supabase",
      "desc": "The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 14791,
      "added_stars": 920,
      "builtBy": [
        {
          "username": "joshenlim",
          "href": "https://github.com/joshenlim",
          "avatar": "https://avatars.githubusercontent.com/u/19742402"
        },
        {
          "username": "kiwicopple",
          "href": "https://github.com/kiwicopple",
          "avatar": "https://avatars.githubusercontent.com/u/10214025"
        },
        {
          "username": "MildTomato",
          "href": "https://github.com/MildTomato",
          "avatar": "https://avatars.githubusercontent.com/u/8291514"
        },
        {
          "username": "saltcod",
          "href": "https://github.com/saltcod",
          "avatar": "https://avatars.githubusercontent.com/u/105593"
        },
        {
          "username": "alaister",
          "href": "https://github.com/alaister",
          "avatar": "https://avatars.githubusercontent.com/u/10985857"
        }
      ]
    },
    {
      "author": "BuilderIO",
      "repo": "agent-native",
      "avatar": "https://github.com/BuilderIO.png",
      "repo_link": "https://github.com/BuilderIO/agent-native",
      "desc": "A framework for building agentic apps",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 610,
      "added_stars": 1981,
      "builtBy": [
        {
          "username": "steve8708",
          "href": "https://github.com/steve8708",
          "avatar": "https://avatars.githubusercontent.com/u/844291"
        },
        {
          "username": "builderio-bot",
          "href": "https://github.com/builderio-bot",
          "avatar": "https://avatars.githubusercontent.com/u/175421836"
        },
        {
          "username": "3mdistal",
          "href": "https://github.com/3mdistal",
          "avatar": "https://avatars.githubusercontent.com/u/86723305"
        }
      ]
    },
    {
      "author": "dream-num",
      "repo": "univer",
      "avatar": "https://github.com/dream-num.png",
      "repo_link": "https://github.com/dream-num/univer",
      "desc": "The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1544,
      "added_stars": 2848,
      "builtBy": [
        {
          "username": "jikkai",
          "href": "https://github.com/jikkai",
          "avatar": "https://avatars.githubusercontent.com/u/14025786"
        },
        {
          "username": "DR-Univer",
          "href": "https://github.com/DR-Univer",
          "avatar": "https://avatars.githubusercontent.com/u/68851825"
        },
        {
          "username": "wzhudev",
          "href": "https://github.com/wzhudev",
          "avatar": "https://avatars.githubusercontent.com/u/12122021"
        },
        {
          "username": "Dushusir",
          "href": "https://github.com/Dushusir",
          "avatar": "https://avatars.githubusercontent.com/u/26371161"
        },
        {
          "username": "wpxp123456",
          "href": "https://github.com/wpxp123456",
          "avatar": "https://avatars.githubusercontent.com/u/26315959"
        }
      ]
    },
    {
      "author": "Tencent",
      "repo": "BrowserSkill",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/BrowserSkill",
      "desc": "Let AI agents use your real, logged-in browser without interrupting your work. CLI + extension for browser automation across any shell-capable AI agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 514,
      "added_stars": 3373,
      "builtBy": [
        {
          "username": "TencentXiaowei",
          "href": "https://github.com/TencentXiaowei",
          "avatar": "https://avatars.githubusercontent.com/u/87162611"
        },
        {
          "username": "iuyo5678",
          "href": "https://github.com/iuyo5678",
          "avatar": "https://avatars.githubusercontent.com/u/5351707"
        },
        {
          "username": "Ljy-0827",
          "href": "https://github.com/Ljy-0827",
          "avatar": "https://avatars.githubusercontent.com/u/84192562"
        },
        {
          "username": "BB-fat",
          "href": "https://github.com/BB-fat",
          "avatar": "https://avatars.githubusercontent.com/u/45072480"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "krillinai",
      "repo": "OpenCreator",
      "avatar": "https://github.com/krillinai.png",
      "repo_link": "https://github.com/krillinai/OpenCreator",
      "desc": "Formerly KrillinAI. Open-source AI workspace for creators, powered by Codex. Create videos, images, voice, avatars, video translation, and edits with Agents in one place.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1267,
      "added_stars": 911,
      "builtBy": [
        {
          "username": "maranello-o",
          "href": "https://github.com/maranello-o",
          "avatar": "https://avatars.githubusercontent.com/u/114557800"
        },
        {
          "username": "wulien",
          "href": "https://github.com/wulien",
          "avatar": "https://avatars.githubusercontent.com/u/2296937"
        },
        {
          "username": "krillinai",
          "href": "https://github.com/krillinai",
          "avatar": "https://avatars.githubusercontent.com/u/2386538"
        },
        {
          "username": "puji4810",
          "href": "https://github.com/puji4810",
          "avatar": "https://avatars.githubusercontent.com/u/148682040"
        },
        {
          "username": "PairZhu",
          "href": "https://github.com/PairZhu",
          "avatar": "https://avatars.githubusercontent.com/u/47098840"
        }
      ]
    },
    {
      "author": "Crosstalk-Solutions",
      "repo": "project-nomad",
      "avatar": "https://github.com/Crosstalk-Solutions.png",
      "repo_link": "https://github.com/Crosstalk-Solutions/project-nomad",
      "desc": "Project NOMAD is an offline-first knowledge and education server. Wikipedia, thousands of books, courses, maps, and optional local AI, all running on hardware you own with no internet required.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3811,
      "added_stars": 1147,
      "builtBy": [
        {
          "username": "jakeaturner",
          "href": "https://github.com/jakeaturner",
          "avatar": "https://avatars.githubusercontent.com/u/52841588"
        },
        {
          "username": "chriscrosstalk",
          "href": "https://github.com/chriscrosstalk",
          "avatar": "https://avatars.githubusercontent.com/u/49691103"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cosmistack-bot",
          "href": "https://github.com/cosmistack-bot",
          "avatar": "https://avatars.githubusercontent.com/u/175166532"
        }
      ]
    },
    {
      "author": "ahmedkhaleel2004",
      "repo": "gitdiagram",
      "avatar": "https://github.com/ahmedkhaleel2004.png",
      "repo_link": "https://github.com/ahmedkhaleel2004/gitdiagram",
      "desc": "Free, simple, fast interactive diagrams and explainer videos for any GitHub repository",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1302,
      "added_stars": 930,
      "builtBy": [
        {
          "username": "ahmedkhaleel2004",
          "href": "https://github.com/ahmedkhaleel2004",
          "avatar": "https://avatars.githubusercontent.com/u/111161052"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "martin226",
          "href": "https://github.com/martin226",
          "avatar": "https://avatars.githubusercontent.com/u/46298951"
        }
      ]
    },
    {
      "author": "vercel-labs",
      "repo": "json-render",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/json-render",
      "desc": "The Generative UI framework",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 962,
      "added_stars": 2061,
      "builtBy": [
        {
          "username": "ctate",
          "href": "https://github.com/ctate",
          "avatar": "https://avatars.githubusercontent.com/u/366502"
        },
        {
          "username": "Railly",
          "href": "https://github.com/Railly",
          "avatar": "https://avatars.githubusercontent.com/u/51397083"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "lucianfialho",
          "href": "https://github.com/lucianfialho",
          "avatar": "https://avatars.githubusercontent.com/u/3296497"
        }
      ]
    },
    {
      "author": "upscayl",
      "repo": "upscayl",
      "avatar": "https://github.com/upscayl.png",
      "repo_link": "https://github.com/upscayl/upscayl",
      "desc": "🆙 Upscayl - #1 Free and Open Source AI Image Upscaler for Linux, MacOS and Windows.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2526,
      "added_stars": 581,
      "builtBy": [
        {
          "username": "NayamAmarshe",
          "href": "https://github.com/NayamAmarshe",
          "avatar": "https://avatars.githubusercontent.com/u/25067102"
        },
        {
          "username": "aaronliu0130",
          "href": "https://github.com/aaronliu0130",
          "avatar": "https://avatars.githubusercontent.com/u/11874211"
        },
        {
          "username": "TGS963",
          "href": "https://github.com/TGS963",
          "avatar": "https://avatars.githubusercontent.com/u/46394656"
        },
        {
          "username": "Danik1601",
          "href": "https://github.com/Danik1601",
          "avatar": "https://avatars.githubusercontent.com/u/17238959"
        }
      ]
    },
    {
      "author": "yikart",
      "repo": "AiToEarn",
      "avatar": "https://github.com/yikart.png",
      "repo_link": "https://github.com/yikart/AiToEarn",
      "desc": "Let's use AI to Earn!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4293,
      "added_stars": 435,
      "builtBy": [
        {
          "username": "niuwenzheng",
          "href": "https://github.com/niuwenzheng",
          "avatar": "https://avatars.githubusercontent.com/u/30893307"
        },
        {
          "username": "gaozhenqiang",
          "href": "https://github.com/gaozhenqiang",
          "avatar": "https://avatars.githubusercontent.com/u/88360790"
        },
        {
          "username": "Yuuki-Sakura",
          "href": "https://github.com/Yuuki-Sakura",
          "avatar": "https://avatars.githubusercontent.com/u/54829481"
        },
        {
          "username": "whh2333",
          "href": "https://github.com/whh2333",
          "avatar": "https://avatars.githubusercontent.com/u/70197018"
        },
        {
          "username": "gao1234-prog",
          "href": "https://github.com/gao1234-prog",
          "avatar": "https://avatars.githubusercontent.com/u/208151450"
        }
      ]
    },
    {
      "author": "supermemoryai",
      "repo": "supermemory",
      "avatar": "https://github.com/supermemoryai.png",
      "repo_link": "https://github.com/supermemoryai/supermemory",
      "desc": "Memory and context engine + app that is extremely fast, scalable, and can be run fully locally. The Memory API for the AI era.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2704,
      "added_stars": 973,
      "builtBy": [
        {
          "username": "Dhravya",
          "href": "https://github.com/Dhravya",
          "avatar": "https://avatars.githubusercontent.com/u/63950637"
        },
        {
          "username": "MaheshtheDev",
          "href": "https://github.com/MaheshtheDev",
          "avatar": "https://avatars.githubusercontent.com/u/38828053"
        },
        {
          "username": "yxshv",
          "href": "https://github.com/yxshv",
          "avatar": "https://avatars.githubusercontent.com/u/93475253"
        },
        {
          "username": "CodeTorso",
          "href": "https://github.com/CodeTorso",
          "avatar": "https://avatars.githubusercontent.com/u/129188028"
        },
        {
          "username": "ved015",
          "href": "https://github.com/ved015",
          "avatar": "https://avatars.githubusercontent.com/u/122012786"
        }
      ]
    },
    {
      "author": "ZuodaoTech",
      "repo": "everyone-can-use-english",
      "avatar": "https://github.com/ZuodaoTech.png",
      "repo_link": "https://github.com/ZuodaoTech/everyone-can-use-english",
      "desc": "人人都能用英语",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5239,
      "added_stars": 717,
      "builtBy": [
        {
          "username": "an-lee",
          "href": "https://github.com/an-lee",
          "avatar": "https://avatars.githubusercontent.com/u/22209056"
        },
        {
          "username": "xiaolai",
          "href": "https://github.com/xiaolai",
          "avatar": "https://avatars.githubusercontent.com/u/152970"
        },
        {
          "username": "lyricat",
          "href": "https://github.com/lyricat",
          "avatar": "https://avatars.githubusercontent.com/u/67439"
        },
        {
          "username": "zgw010",
          "href": "https://github.com/zgw010",
          "avatar": "https://avatars.githubusercontent.com/u/26003810"
        },
        {
          "username": "divisey",
          "href": "https://github.com/divisey",
          "avatar": "https://avatars.githubusercontent.com/u/26423172"
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
      "title": "Everything on XYZ.com or XYZ.com+app.XYZ.com",
      "url": "https://www.reddit.com/r/webdev/comments/1wpg7jm/everything_on_xyzcom_or_xyzcomappxyzcom/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wpg7jm/everything_on_xyzcom_or_xyzcomappxyzcom/",
      "author": "/u/SecretiveShades",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I’m finding a lot of mixed advice on what to do here. I’m creating a fantasy football app and can’t decide if I should have a subdomain. AI and a few Reddit post are telling me you need to have your XYZ.com be your marketing page and app.XYZ.com be your app. But the following big names do not: Sleeper AirTable Figma Canva Trello Dropbox Github This is something that will be difficult to change later, so I wanna make sure I make the right call. Anybody have any good insight here? &#32; submitted by &#32; /u/SecretiveShades [link] &#32; [comments]",
      "published": "2026-09-24T22:54:53+00:00"
    },
    {
      "title": "About Transferable Objects, Structured Cloning , SharedArrayBuffer & Dedicated Web Workers",
      "url": "https://www.reddit.com/r/webdev/comments/1wpbllp/about_transferable_objects_structured_cloning/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wpbllp/about_transferable_objects_structured_cloning/",
      "author": "/u/No-Resolution-4054",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Transferable Objects Think of Transferable = cut + paste. const buffer = new ArrayBuffer(1024); worker.postMessage(buffer, [buffer]); The second argument [buffer] is the transfer list. It means: :- Transfer ownership of this buffer to the worker. After transferring, the original buffer becomes detached and can&#39;t be used normally. Why do this? Because copying a large ArrayBuffer can be expensive. Transferring allows ownership to move instead of copying the data. Structured Cloning Structured cloning is somewhat like: JSON.stringify() + JSON.parse() but much more capable. structuredClone() can correctly clone many JavaScript types such as: Date , Map , Set , BigInt , undefined and nested objects. JSON serialization can lose or change the behavior/type of several of these. One important limitation: Functions cannot be structured-cloned. Dedicated Web Worker JavaScript normally executes application code on the main thread. If we do heavy work there, such as face detection in the browser, the main thread can become busy: UI freezes , buttons become delayed , animations lag and scrolling becomes laggy This is what Web Workers help solve. A Dedicated Web Worker is a separate JavaScript execution environment running on another thread. It has its own: Global context , Call stack , Event loop , JavaScript execution and all.. .And a dedicated worker belongs to a particular page/script rather than being normally shared with other pages. The main thread and worker don&#39;t directly share normal JavaScript variables. Communication usually happens through: // Main thread worker.postMessage(data); // Worker self.onmessage = (event) =&gt; { // use event.data }; self refers to the worker&#39;s global environment. The main browser context commonly uses window , while a worker doesn&#39;t have the normal DOM window . So the important picture is: Main Thread --&gt; structured clone --&gt; Worker or, for transferable data: Main Thread --&gt; transfer ownership --&gt; Worker SharedArrayBuffer But sometimes we don&#39;t want to copy or transfer the data. What if both threads need to work with the same memory? That&#39;s what SharedArrayBuffer is for: const buffer = new SharedArrayBuffer(8); This creates a shared memory area of 8 bytes. Both the main thread and worker can create a TypedArray over that memory and modify the same underlying data. But now we have a problem: Two threads can access the same memory at the same time. For example, if the value is 10 and two threads both try to increment it, we might expect 12. But both could read 10 before either writes, resulting in: 11 This is a race condition . That&#39;s where Atomics come in. Atomics.add(numbers, 0, 1); This safely adds 1 to numbers[0] . The operation happens atomically, meaning it is performed as one indivisible operation. One important detail: Atomics only works with specific integer TypedArrays. If you notice anything technically incorrect or something that could be explained better, please let me know. &#32; submitted by &#32; /u/No-Resolution-4054 [link] &#32; [comments]",
      "published": "2026-09-24T19:46:28+00:00"
    },
    {
      "title": "Shipped a game to the App Store that is entirely canvas and Web Audio. No images, no audio files, 6.4 MB.",
      "url": "https://www.reddit.com/r/webdev/comments/1wpgtm1/shipped_a_game_to_the_app_store_that_is_entirely/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wpgtm1/shipped_a_game_to_the_app_store_that_is_entirely/",
      "author": "/u/kpb1258",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "It is an HTML5 canvas game wrapped in Capacitor. What surprised me is how far you can get without a single asset. Every shape is drawn with canvas paths at runtime and every sound is synthesised with Web Audio, including a soundtrack that is generated from the date and builds in layers as your score rises. There is no sprite sheet, no audio file, no font file. The entire binary is 6.4 MB and the whole game runs offline with no network at all. The native side is four small Swift plugins for Game Center, ads, the share sheet and local notifications. Everything else, the rendering, the audio, the layout, the localisation into nine languages, is web. The part I did not expect to be hard was layout. A banner ad and the iOS safe area interact in ways a browser never makes you think about, and the phone&#39;s status bar is not where a web developer assumes the top of the page is. That cost me more time than the game loop did. GRAZE: Edge Rush is Free on iOS if you want to look at what canvas can do. Happy to answer anything about the stack. &#32; submitted by &#32; /u/kpb1258 [link] &#32; [comments]",
      "published": "2026-09-24T23:22:44+00:00"
    },
    {
      "title": "Devs: would generated starter code for a complex table actually save you time, or is it just something you'll rewrite anyway?",
      "url": "https://www.reddit.com/r/webdev/comments/1wp44m3/devs_would_generated_starter_code_for_a_complex/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wp44m3/devs_would_generated_starter_code_for_a_complex/",
      "author": "/u/justincampbelldesign",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;m a UX designer at a company with strict security/procurement rules, we can&#39;t use or buy things like AG Grid, TanStack, or MUI, and getting anything new approved takes forever I&#39;m talking and mind numbing amount of approvals and red tape. I&#39;ve also seen some table builders in this subreddit that people have made but they don&#39;t quite have the functionality we need (i.e. nested rows). We build tools in-house, sometimes with AI help. We have story book with a table component, however it isn&#39;t built for cases we hit a lot: multiple levels of nested/expandable rows, detail panels on large datasets. Every time one of these comes up it turns into a slow back-and-forth between design and dev. And its making me want to rip my hair out. I also think dev would prefer if we had a better approach / system for this but thus far we are just running to complete things but not improving the process itself. Genuine question for devs who&#39;ve been on the receiving end of a handoff like this: if you got generated starter code for a table like that would that actually save you time? Or would you rather just get the spec/design and build it yourself? I&#39;m asking before you before going to our devs because they are swamped and I want to use as little of their time as possible. Also what&#39;s the part of a complex table handoff that&#39;s actually the most painful for you? Vague edge cases, data volume, something else? &#32; submitted by &#32; /u/justincampbelldesign [link] &#32; [comments]",
      "published": "2026-09-24T15:05:29+00:00"
    },
    {
      "title": "Webflow",
      "url": "https://www.reddit.com/r/webdev/comments/1wplx8o/webflow/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wplx8o/webflow/",
      "author": "/u/Big-Conversation2983",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey I’m not an actual web developer or anything I’m still kinda learning. I was just wondering if webflow is good enough to make websites with &#32; submitted by &#32; /u/Big-Conversation2983 [link] &#32; [comments]",
      "published": "2026-09-25T03:34:01+00:00"
    },
    {
      "title": "Favicon not updating",
      "url": "https://www.reddit.com/r/webdev/comments/1wp9xy0/favicon_not_updating/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wp9xy0/favicon_not_updating/",
      "author": "/u/Comfortable-Donkey74",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I built a site for a client a while ago, and now he&#39;s requesting a favicon update. I used lovable because it was only a landing page he needed, in our deal we had a minor fall out so I didn&#39;t bother to finish up the site but host the domain for him. Until he contacted me recently. I changed the old favicon to the new one which is his logo. But for over two weeks now it isn&#39;t reflecting. I have requested indexing on Google Search Console twice. I have told the client to be patient because it can take time for Google to crawl the page. I added sitemaps and have checked other reddit threads with people having experience of it taking weeks. I have swapped a favicon on a nextjs app before(from the default) and it didn&#39;t take as long as it is now. Does anyone know of the solution to this problem? How I can speed this up so the client would stop texting me &#32; submitted by &#32; /u/Comfortable-Donkey74 [link] &#32; [comments]",
      "published": "2026-09-24T18:42:36+00:00"
    },
    {
      "title": "\"build something that gets users\" (impossible challenge)",
      "url": "https://www.reddit.com/r/webdev/comments/1wplg6u/build_something_that_gets_users_impossible/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wplg6u/build_something_that_gets_users_impossible/",
      "author": "/u/Lavaa444",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I hear this advice a lot for aspiring devs trying to make their resumes stand out. It sounds great and I&#39;d love to finally make one. It&#39;s just really hard for me to find an idea that: 1. Is doable for me as a solo dev 2. Solves a real problem 3. Either fills a market gap or outperforms the established apps (somehow) 4. Is in a relevant tech stack for my desired role (not as important, but I do need a job) The more devs that are out there, the harder it is for a solo dev to find a gap in the market. More apps are being made. More ideas are being taken. The ones left over are absolute moon shots that are really difficult for solo devs to handle. For those of you who have made these kinds of apps, how did you do it? Is going after niche ideas better? Have you had to compete with existing apps? I&#39;m curious. &#32; submitted by &#32; /u/Lavaa444 [link] &#32; [comments]",
      "published": "2026-09-25T03:10:01+00:00"
    },
    {
      "title": "Is it possible for users to tamper with webasm website code?",
      "url": "https://www.reddit.com/r/webdev/comments/1wpbm4e/is_it_possible_for_users_to_tamper_with_webasm/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wpbm4e/is_it_possible_for_users_to_tamper_with_webasm/",
      "author": "/u/Infinite-Jaguar-1753",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey guys, so no going in details but suppose (am using webasm with rust), someone open my website and in background it gets connected to a network of other people&#39;s browsers, and there any browser can recieve data which they can verify through merkles (let&#39;s just say they recieve data A from many other browsers and then recieve data B and after some hashing it check if both r equal and send to others if they request it), then is there any way for malicious users to tamper with their browser so that they can send wrong data or verify wrongly or is there any way for us to know if the user has tampered the logic and hence alert other browsers that it&#39;s malicious &#32; submitted by &#32; /u/Infinite-Jaguar-1753 [link] &#32; [comments]",
      "published": "2026-09-24T19:47:02+00:00"
    },
    {
      "title": "Will free versions of AI models be enough to get you ready for a programming job today?",
      "url": "https://www.reddit.com/r/webdev/comments/1wpjnzs/will_free_versions_of_ai_models_be_enough_to_get/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wpjnzs/will_free_versions_of_ai_models_be_enough_to_get/",
      "author": "/u/TalesOfSymposia",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I don&#39;t know what it&#39;s like to work in a professional space with AI. My level of skill is at least enough to be able to program professionally by hand, but I&#39;m going to limit myself in jobs if I continue to stick with jobs that don&#39;t keep up with competition. I know I should still be able to code by hand, but I think it&#39;s more realistic to assume that more jobs want you ready to produce very quickly with LLMs. So I have to at least be ready for that. Do you need paid tiers like Claude code or ChatGPT Codex to prepare more adequately or will free versions do fine enough? I&#39;m not sure if I need to financially commit to a subscription to be job-ready, since I don&#39;t have a job, super broke and as far as I know it&#39;s still one of the only major professions where you can build your skills for free. &#32; submitted by &#32; /u/TalesOfSymposia [link] &#32; [comments]",
      "published": "2026-09-25T01:40:21+00:00"
    },
    {
      "title": "Front enders! What do you think of clients who Vibe code and expect you to fix it?",
      "url": "https://www.reddit.com/r/webdev/comments/1wp00kh/front_enders_what_do_you_think_of_clients_who/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wp00kh/front_enders_what_do_you_think_of_clients_who/",
      "author": "/u/neonrider2018",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Basically, I vibe-coded a website that I&#39;d like to make public. However, just the fact that I have vibe- coded it makes it feel kind of disrespectful to the people who have done this their whole life and are professionals. Now I kind of want to hire a frontend developer UI/UX designer to make my website look better and be more like an actual website rather than vibe-coded trash. The backend is fully vibe-coded, and I hired developers to initially make the design, but they took too long, and I feel like they didn&#39;t fully understand my requirements.Whereas when I made the back end code and modified their code using claude was a bit more to my liking. &#32; submitted by &#32; /u/neonrider2018 [link] &#32; [comments]",
      "published": "2026-09-24T12:14:31+00:00"
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
      "author": "alibaba",
      "repo": "open-code-review",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/open-code-review",
      "desc": "Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2944,
      "added_stars": 19583,
      "builtBy": [
        {
          "username": "lizhengfeng101",
          "href": "https://github.com/lizhengfeng101",
          "avatar": "https://avatars.githubusercontent.com/u/254839944"
        },
        {
          "username": "wu21-web",
          "href": "https://github.com/wu21-web",
          "avatar": "https://avatars.githubusercontent.com/u/149216116"
        },
        {
          "username": "chethanuk",
          "href": "https://github.com/chethanuk",
          "avatar": "https://avatars.githubusercontent.com/u/16241795"
        },
        {
          "username": "stay-foolish-forever",
          "href": "https://github.com/stay-foolish-forever",
          "avatar": "https://avatars.githubusercontent.com/u/61303077"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "JetBrains",
      "repo": "go-modern-guidelines",
      "avatar": "https://github.com/JetBrains.png",
      "repo_link": "https://github.com/JetBrains/go-modern-guidelines",
      "desc": "Help AI coding agents write modern Go",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 122,
      "added_stars": 2858,
      "builtBy": [
        {
          "username": "nikitakuchur",
          "href": "https://github.com/nikitakuchur",
          "avatar": "https://avatars.githubusercontent.com/u/17953379"
        },
        {
          "username": "Splatjov",
          "href": "https://github.com/Splatjov",
          "avatar": "https://avatars.githubusercontent.com/u/57684922"
        },
        {
          "username": "simpletonDL",
          "href": "https://github.com/simpletonDL",
          "avatar": "https://avatars.githubusercontent.com/u/25866352"
        },
        {
          "username": "raeperd",
          "href": "https://github.com/raeperd",
          "avatar": "https://avatars.githubusercontent.com/u/41039751"
        },
        {
          "username": "ethanstoner",
          "href": "https://github.com/ethanstoner",
          "avatar": "https://avatars.githubusercontent.com/u/177599791"
        }
      ]
    },
    {
      "author": "Tencent",
      "repo": "WeKnora",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/WeKnora",
      "desc": "Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4008,
      "added_stars": 9356,
      "builtBy": [
        {
          "username": "lyingbug",
          "href": "https://github.com/lyingbug",
          "avatar": "https://avatars.githubusercontent.com/u/11257935"
        },
        {
          "username": "voidkey",
          "href": "https://github.com/voidkey",
          "avatar": "https://avatars.githubusercontent.com/u/67856742"
        },
        {
          "username": "begoniezhao",
          "href": "https://github.com/begoniezhao",
          "avatar": "https://avatars.githubusercontent.com/u/216642699"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "majd",
      "repo": "ipatool",
      "avatar": "https://github.com/majd.png",
      "repo_link": "https://github.com/majd/ipatool",
      "desc": "Command-line tool that allows you to search for iOS, iPadOS, tvOS, visionOS, and macOS apps on the App Store, and download .ipa or macOS .pkg app packages.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 948,
      "added_stars": 1537,
      "builtBy": [
        {
          "username": "majd",
          "href": "https://github.com/majd",
          "avatar": "https://avatars.githubusercontent.com/u/1644696"
        },
        {
          "username": "ViRb3",
          "href": "https://github.com/ViRb3",
          "avatar": "https://avatars.githubusercontent.com/u/2650170"
        },
        {
          "username": "tux-mind",
          "href": "https://github.com/tux-mind",
          "avatar": "https://avatars.githubusercontent.com/u/1824153"
        },
        {
          "username": "testwill",
          "href": "https://github.com/testwill",
          "avatar": "https://avatars.githubusercontent.com/u/8717479"
        }
      ]
    },
    {
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 433,
      "added_stars": 2110,
      "builtBy": [
        {
          "username": "BenTheElder",
          "href": "https://github.com/BenTheElder",
          "avatar": "https://avatars.githubusercontent.com/u/917931"
        },
        {
          "username": "juli4n",
          "href": "https://github.com/juli4n",
          "avatar": "https://avatars.githubusercontent.com/u/680407"
        },
        {
          "username": "HavenXia",
          "href": "https://github.com/HavenXia",
          "avatar": "https://avatars.githubusercontent.com/u/55463354"
        },
        {
          "username": "thockin",
          "href": "https://github.com/thockin",
          "avatar": "https://avatars.githubusercontent.com/u/5595220"
        },
        {
          "username": "zoez7",
          "href": "https://github.com/zoez7",
          "avatar": "https://avatars.githubusercontent.com/u/35669350"
        }
      ]
    },
    {
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 242,
      "added_stars": 3210,
      "builtBy": [
        {
          "username": "asciimoo",
          "href": "https://github.com/asciimoo",
          "avatar": "https://avatars.githubusercontent.com/u/20240"
        },
        {
          "username": "4evy",
          "href": "https://github.com/4evy",
          "avatar": "https://avatars.githubusercontent.com/u/57304299"
        },
        {
          "username": "ISSOtm",
          "href": "https://github.com/ISSOtm",
          "avatar": "https://avatars.githubusercontent.com/u/15271137"
        },
        {
          "username": "Shadowbee27",
          "href": "https://github.com/Shadowbee27",
          "avatar": "https://avatars.githubusercontent.com/u/169397554"
        }
      ]
    },
    {
      "author": "bjarneo",
      "repo": "cliamp",
      "avatar": "https://github.com/bjarneo.png",
      "repo_link": "https://github.com/bjarneo/cliamp",
      "desc": "cliamp - Terminal music player inspired by winamp",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 292,
      "added_stars": 736,
      "builtBy": [
        {
          "username": "bjarneo",
          "href": "https://github.com/bjarneo",
          "avatar": "https://avatars.githubusercontent.com/u/1419214"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tahadx",
          "href": "https://github.com/tahadx",
          "avatar": "https://avatars.githubusercontent.com/u/152646159"
        },
        {
          "username": "coryshaw1",
          "href": "https://github.com/coryshaw1",
          "avatar": "https://avatars.githubusercontent.com/u/5014172"
        },
        {
          "username": "oweneldridge",
          "href": "https://github.com/oweneldridge",
          "avatar": "https://avatars.githubusercontent.com/u/90428464"
        }
      ]
    },
    {
      "author": "glanceapp",
      "repo": "glance",
      "avatar": "https://github.com/glanceapp.png",
      "repo_link": "https://github.com/glanceapp/glance",
      "desc": "A self-hosted dashboard that puts all your feeds in one place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1465,
      "added_stars": 723,
      "builtBy": [
        {
          "username": "svilenmarkov",
          "href": "https://github.com/svilenmarkov",
          "avatar": "https://avatars.githubusercontent.com/u/7613769"
        },
        {
          "username": "ralphocdol",
          "href": "https://github.com/ralphocdol",
          "avatar": "https://avatars.githubusercontent.com/u/31056871"
        },
        {
          "username": "c0smicdev",
          "href": "https://github.com/c0smicdev",
          "avatar": "https://avatars.githubusercontent.com/u/161938764"
        },
        {
          "username": "wfg",
          "href": "https://github.com/wfg",
          "avatar": "https://avatars.githubusercontent.com/u/22161283"
        },
        {
          "username": "DVDAndroid",
          "href": "https://github.com/DVDAndroid",
          "avatar": "https://avatars.githubusercontent.com/u/6277172"
        }
      ]
    },
    {
      "author": "cloudflare",
      "repo": "cloudflared",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflared",
      "desc": "Cloudflare Tunnel client",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1457,
      "added_stars": 568,
      "builtBy": [
        {
          "username": "chungthuang",
          "href": "https://github.com/chungthuang",
          "avatar": "https://avatars.githubusercontent.com/u/7826979"
        },
        {
          "username": "DevinCarr",
          "href": "https://github.com/DevinCarr",
          "avatar": "https://avatars.githubusercontent.com/u/4468678"
        },
        {
          "username": "adamchalmers",
          "href": "https://github.com/adamchalmers",
          "avatar": "https://avatars.githubusercontent.com/u/5407457"
        },
        {
          "username": "sudarshan-reddy",
          "href": "https://github.com/sudarshan-reddy",
          "avatar": "https://avatars.githubusercontent.com/u/12325664"
        },
        {
          "username": "ipostelnik",
          "href": "https://github.com/ipostelnik",
          "avatar": "https://avatars.githubusercontent.com/u/308114"
        }
      ]
    },
    {
      "author": "weave-os",
      "repo": "router",
      "avatar": "https://github.com/weave-os.png",
      "repo_link": "https://github.com/weave-os/router",
      "desc": "Model router for agentic systems. Routes every prompt to the right model in <50ms. Cut costs 40-70% with just an endpoint change.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 142,
      "added_stars": 4166,
      "builtBy": [
        {
          "username": "steventohme",
          "href": "https://github.com/steventohme",
          "avatar": "https://avatars.githubusercontent.com/u/56594084"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "aminsamir45",
          "href": "https://github.com/aminsamir45",
          "avatar": "https://avatars.githubusercontent.com/u/115834029"
        },
        {
          "username": "a-churchill",
          "href": "https://github.com/a-churchill",
          "avatar": "https://avatars.githubusercontent.com/u/18105223"
        }
      ]
    },
    {
      "author": "gtsteffaniak",
      "repo": "filebrowser",
      "avatar": "https://github.com/gtsteffaniak.png",
      "repo_link": "https://github.com/gtsteffaniak/filebrowser",
      "desc": "📂 Web File Browser",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 445,
      "added_stars": 571,
      "builtBy": [
        {
          "username": "gtsteffaniak",
          "href": "https://github.com/gtsteffaniak",
          "avatar": "https://avatars.githubusercontent.com/u/42989099"
        },
        {
          "username": "Kurami32",
          "href": "https://github.com/Kurami32",
          "avatar": "https://avatars.githubusercontent.com/u/178341547"
        },
        {
          "username": "Stephan-P",
          "href": "https://github.com/Stephan-P",
          "avatar": "https://avatars.githubusercontent.com/u/10008599"
        },
        {
          "username": "pyroch",
          "href": "https://github.com/pyroch",
          "avatar": "https://avatars.githubusercontent.com/u/5215882"
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
      "forks": 1042,
      "added_stars": 1159,
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
        }
      ]
    },
    {
      "author": "1Panel-dev",
      "repo": "1Panel",
      "avatar": "https://github.com/1Panel-dev.png",
      "repo_link": "https://github.com/1Panel-dev/1Panel",
      "desc": "🔥 1Panel is a modern, open-source Linux server management panel and a lightweight AI management platform.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3360,
      "added_stars": 473,
      "builtBy": [
        {
          "username": "zhengkunwang223",
          "href": "https://github.com/zhengkunwang223",
          "avatar": "https://avatars.githubusercontent.com/u/31820853"
        },
        {
          "username": "ssongliu",
          "href": "https://github.com/ssongliu",
          "avatar": "https://avatars.githubusercontent.com/u/73214554"
        },
        {
          "username": "lan-yonghui",
          "href": "https://github.com/lan-yonghui",
          "avatar": "https://avatars.githubusercontent.com/u/81747598"
        },
        {
          "username": "wanghe-fit2cloud",
          "href": "https://github.com/wanghe-fit2cloud",
          "avatar": "https://avatars.githubusercontent.com/u/46734380"
        },
        {
          "username": "HynoR",
          "href": "https://github.com/HynoR",
          "avatar": "https://avatars.githubusercontent.com/u/20227709"
        }
      ]
    },
    {
      "author": "coder",
      "repo": "coder",
      "avatar": "https://github.com/coder.png",
      "repo_link": "https://github.com/coder/coder",
      "desc": "Secure environments for developers and their agents",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1588,
      "added_stars": 2607,
      "builtBy": [
        {
          "username": "kylecarbs",
          "href": "https://github.com/kylecarbs",
          "avatar": "https://avatars.githubusercontent.com/u/7122116"
        },
        {
          "username": "mafredri",
          "href": "https://github.com/mafredri",
          "avatar": "https://avatars.githubusercontent.com/u/147409"
        },
        {
          "username": "johnstcn",
          "href": "https://github.com/johnstcn",
          "avatar": "https://avatars.githubusercontent.com/u/4949514"
        },
        {
          "username": "Emyrk",
          "href": "https://github.com/Emyrk",
          "avatar": "https://avatars.githubusercontent.com/u/5446298"
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
      "forks": 4648,
      "added_stars": 1180,
      "builtBy": [
        {
          "username": "nekohasekai",
          "href": "https://github.com/nekohasekai",
          "avatar": "https://avatars.githubusercontent.com/u/56506714"
        },
        {
          "username": "macronut",
          "href": "https://github.com/macronut",
          "avatar": "https://avatars.githubusercontent.com/u/4027187"
        },
        {
          "username": "flyzstu",
          "href": "https://github.com/flyzstu",
          "avatar": "https://avatars.githubusercontent.com/u/94161727"
        },
        {
          "username": "NagaseMinato",
          "href": "https://github.com/NagaseMinato",
          "avatar": "https://avatars.githubusercontent.com/u/80738880"
        },
        {
          "username": "Mahdi-zarei",
          "href": "https://github.com/Mahdi-zarei",
          "avatar": "https://avatars.githubusercontent.com/u/80265960"
        }
      ]
    },
    {
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3208,
      "added_stars": 3068,
      "builtBy": [
        {
          "username": "sirozha",
          "href": "https://github.com/sirozha",
          "avatar": "https://avatars.githubusercontent.com/u/7765123"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "asdek",
          "href": "https://github.com/asdek",
          "avatar": "https://avatars.githubusercontent.com/u/4257336"
        },
        {
          "username": "mason5052",
          "href": "https://github.com/mason5052",
          "avatar": "https://avatars.githubusercontent.com/u/52062353"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "seaweedfs",
      "repo": "seaweedfs",
      "avatar": "https://github.com/seaweedfs.png",
      "repo_link": "https://github.com/seaweedfs/seaweedfs",
      "desc": "SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3007,
      "added_stars": 795,
      "builtBy": [
        {
          "username": "chrislusf",
          "href": "https://github.com/chrislusf",
          "avatar": "https://avatars.githubusercontent.com/u/1543151"
        },
        {
          "username": "kmlebedev",
          "href": "https://github.com/kmlebedev",
          "avatar": "https://avatars.githubusercontent.com/u/9497591"
        },
        {
          "username": "chrisluuber",
          "href": "https://github.com/chrisluuber",
          "avatar": "https://avatars.githubusercontent.com/u/37195999"
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
      "forks": 1522,
      "added_stars": 222,
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
      "author": "authelia",
      "repo": "authelia",
      "avatar": "https://github.com/authelia.png",
      "repo_link": "https://github.com/authelia/authelia",
      "desc": "The Single Sign-On Multi-Factor portal for web apps. OpenID Certified™ and Post-Quantum Cryptography Ready.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1492,
      "added_stars": 447,
      "builtBy": [
        {
          "username": "james-d-elliott",
          "href": "https://github.com/james-d-elliott",
          "avatar": "https://avatars.githubusercontent.com/u/3903683"
        },
        {
          "username": "nightah",
          "href": "https://github.com/nightah",
          "avatar": "https://avatars.githubusercontent.com/u/3339418"
        },
        {
          "username": "clems4ever",
          "href": "https://github.com/clems4ever",
          "avatar": "https://avatars.githubusercontent.com/u/3193257"
        },
        {
          "username": "renovate-bot",
          "href": "https://github.com/renovate-bot",
          "avatar": "https://avatars.githubusercontent.com/u/25180681"
        }
      ]
    },
    {
      "author": "abiosoft",
      "repo": "colima",
      "avatar": "https://github.com/abiosoft.png",
      "repo_link": "https://github.com/abiosoft/colima",
      "desc": "Container runtimes on macOS (and Linux) with minimal setup",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 620,
      "added_stars": 515,
      "builtBy": [
        {
          "username": "abiosoft",
          "href": "https://github.com/abiosoft",
          "avatar": "https://avatars.githubusercontent.com/u/240448"
        },
        {
          "username": "rfay",
          "href": "https://github.com/rfay",
          "avatar": "https://avatars.githubusercontent.com/u/112444"
        },
        {
          "username": "LaszloGombos",
          "href": "https://github.com/LaszloGombos",
          "avatar": "https://avatars.githubusercontent.com/u/1522773"
        },
        {
          "username": "ekalinin",
          "href": "https://github.com/ekalinin",
          "avatar": "https://avatars.githubusercontent.com/u/234891"
        }
      ]
    },
    {
      "author": "rorkai",
      "repo": "App-Store-Connect-CLI",
      "avatar": "https://github.com/rorkai.png",
      "repo_link": "https://github.com/rorkai/App-Store-Connect-CLI",
      "desc": "Fast, scriptable CLI for the App Store Connect API. Automate TestFlight, builds, submissions, signing, analytics, screenshots, subscriptions, and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 622,
      "added_stars": 1189,
      "builtBy": [
        {
          "username": "rudrankriyam",
          "href": "https://github.com/rudrankriyam",
          "avatar": "https://avatars.githubusercontent.com/u/30552772"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "mithileshchellappan",
          "href": "https://github.com/mithileshchellappan",
          "avatar": "https://avatars.githubusercontent.com/u/35962266"
        },
        {
          "username": "Abdo-codes",
          "href": "https://github.com/Abdo-codes",
          "avatar": "https://avatars.githubusercontent.com/u/80545944"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The task manager you actually own.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 711,
      "added_stars": 376,
      "builtBy": [
        {
          "username": "kolaente",
          "href": "https://github.com/kolaente",
          "avatar": "https://avatars.githubusercontent.com/u/13721712"
        },
        {
          "username": "dpschen",
          "href": "https://github.com/dpschen",
          "avatar": "https://avatars.githubusercontent.com/u/6173598"
        },
        {
          "username": "vikunja-bot",
          "href": "https://github.com/vikunja-bot",
          "avatar": "https://avatars.githubusercontent.com/u/45438395"
        },
        {
          "username": "tink-bot",
          "href": "https://github.com/tink-bot",
          "avatar": "https://avatars.githubusercontent.com/u/259739204"
        }
      ]
    },
    {
      "author": "siderolabs",
      "repo": "talos",
      "avatar": "https://github.com/siderolabs.png",
      "repo_link": "https://github.com/siderolabs/talos",
      "desc": "Talos Linux is a modern Linux distribution built for Kubernetes.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 904,
      "added_stars": 241,
      "builtBy": [
        {
          "username": "smira",
          "href": "https://github.com/smira",
          "avatar": "https://avatars.githubusercontent.com/u/55211"
        },
        {
          "username": "andrewrynhard",
          "href": "https://github.com/andrewrynhard",
          "avatar": "https://avatars.githubusercontent.com/u/3383143"
        },
        {
          "username": "frezbo",
          "href": "https://github.com/frezbo",
          "avatar": "https://avatars.githubusercontent.com/u/18496730"
        },
        {
          "username": "rsmitty",
          "href": "https://github.com/rsmitty",
          "avatar": "https://avatars.githubusercontent.com/u/1529818"
        },
        {
          "username": "Unix4ever",
          "href": "https://github.com/Unix4ever",
          "avatar": "https://avatars.githubusercontent.com/u/830532"
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
      "author": "superdesigndev",
      "repo": "treg",
      "avatar": "https://github.com/superdesigndev.png",
      "repo_link": "https://github.com/superdesigndev/treg",
      "desc": "OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 268,
      "added_stars": 2413,
      "builtBy": [
        {
          "username": "JayZeeDesign",
          "href": "https://github.com/JayZeeDesign",
          "avatar": "https://avatars.githubusercontent.com/u/22532527"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "stonexer",
          "href": "https://github.com/stonexer",
          "avatar": "https://avatars.githubusercontent.com/u/6255130"
        },
        {
          "username": "unclecode",
          "href": "https://github.com/unclecode",
          "avatar": "https://avatars.githubusercontent.com/u/12494079"
        },
        {
          "username": "shehjad-dev",
          "href": "https://github.com/shehjad-dev",
          "avatar": "https://avatars.githubusercontent.com/u/64325867"
        }
      ]
    },
    {
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4158,
      "added_stars": 23857,
      "builtBy": [
        {
          "username": "debpalash",
          "href": "https://github.com/debpalash",
          "avatar": "https://avatars.githubusercontent.com/u/4178343"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "kevin9327",
          "href": "https://github.com/kevin9327",
          "avatar": "https://avatars.githubusercontent.com/u/5299031"
        },
        {
          "username": "jaketame",
          "href": "https://github.com/jaketame",
          "avatar": "https://avatars.githubusercontent.com/u/1787973"
        },
        {
          "username": "velixio",
          "href": "https://github.com/velixio",
          "avatar": "https://avatars.githubusercontent.com/u/270455167"
        }
      ]
    },
    {
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2944,
      "added_stars": 27473,
      "builtBy": [
        {
          "username": "ayghri",
          "href": "https://github.com/ayghri",
          "avatar": "https://avatars.githubusercontent.com/u/32200675"
        },
        {
          "username": "thejesh23",
          "href": "https://github.com/thejesh23",
          "avatar": "https://avatars.githubusercontent.com/u/35212698"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "SillyDark",
          "href": "https://github.com/SillyDark",
          "avatar": "https://avatars.githubusercontent.com/u/116559191"
        },
        {
          "username": "commie70",
          "href": "https://github.com/commie70",
          "avatar": "https://avatars.githubusercontent.com/u/57289446"
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
      "forks": 3249,
      "added_stars": 5545,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8130,
      "added_stars": 7689,
      "builtBy": [
        {
          "username": "jingyaogong",
          "href": "https://github.com/jingyaogong",
          "avatar": "https://avatars.githubusercontent.com/u/62287848"
        },
        {
          "username": "iomgaa-ycz",
          "href": "https://github.com/iomgaa-ycz",
          "avatar": "https://avatars.githubusercontent.com/u/124225682"
        },
        {
          "username": "Linxiushen",
          "href": "https://github.com/Linxiushen",
          "avatar": "https://avatars.githubusercontent.com/u/142557582"
        },
        {
          "username": "basil-k-aji-dev",
          "href": "https://github.com/basil-k-aji-dev",
          "avatar": "https://avatars.githubusercontent.com/u/70605804"
        },
        {
          "username": "readlnh",
          "href": "https://github.com/readlnh",
          "avatar": "https://avatars.githubusercontent.com/u/16349082"
        }
      ]
    },
    {
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4207,
      "added_stars": 12450,
      "builtBy": [
        {
          "username": "timothykassis",
          "href": "https://github.com/timothykassis",
          "avatar": "https://avatars.githubusercontent.com/u/9168908"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "borealBytes",
          "href": "https://github.com/borealBytes",
          "avatar": "https://avatars.githubusercontent.com/u/206480607"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3630,
      "added_stars": 4378,
      "builtBy": [
        {
          "username": "p-e-w",
          "href": "https://github.com/p-e-w",
          "avatar": "https://avatars.githubusercontent.com/u/2702526"
        },
        {
          "username": "Vinay-Umrethe",
          "href": "https://github.com/Vinay-Umrethe",
          "avatar": "https://avatars.githubusercontent.com/u/175500353"
        },
        {
          "username": "anrp",
          "href": "https://github.com/anrp",
          "avatar": "https://avatars.githubusercontent.com/u/1325515"
        },
        {
          "username": "spikymoth",
          "href": "https://github.com/spikymoth",
          "avatar": "https://avatars.githubusercontent.com/u/133602907"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5422,
      "added_stars": 2901,
      "builtBy": [
        {
          "username": "mihilmy",
          "href": "https://github.com/mihilmy",
          "avatar": "https://avatars.githubusercontent.com/u/5457787"
        },
        {
          "username": "cxyback",
          "href": "https://github.com/cxyback",
          "avatar": "https://avatars.githubusercontent.com/u/174142461"
        },
        {
          "username": "manar-ant",
          "href": "https://github.com/manar-ant",
          "avatar": "https://avatars.githubusercontent.com/u/250030384"
        },
        {
          "username": "tobinsouth",
          "href": "https://github.com/tobinsouth",
          "avatar": "https://avatars.githubusercontent.com/u/32489862"
        },
        {
          "username": "viveknair",
          "href": "https://github.com/viveknair",
          "avatar": "https://avatars.githubusercontent.com/u/1203039"
        }
      ]
    },
    {
      "author": "experientiallabs",
      "repo": "experiential",
      "avatar": "https://github.com/experientiallabs.png",
      "repo_link": "https://github.com/experientiallabs/experiential",
      "desc": "Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend better models, and train a specialized model you own.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 206,
      "added_stars": 6411,
      "builtBy": [
        {
          "username": "SilenNaihin",
          "href": "https://github.com/SilenNaihin",
          "avatar": "https://avatars.githubusercontent.com/u/44129612"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "kfallah",
          "href": "https://github.com/kfallah",
          "avatar": "https://avatars.githubusercontent.com/u/9440350"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "abi",
      "repo": "screenshot-to-code",
      "avatar": "https://github.com/abi.png",
      "repo_link": "https://github.com/abi/screenshot-to-code",
      "desc": "Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9735,
      "added_stars": 5441,
      "builtBy": [
        {
          "username": "abi",
          "href": "https://github.com/abi",
          "avatar": "https://avatars.githubusercontent.com/u/23818"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "clean99",
          "href": "https://github.com/clean99",
          "avatar": "https://avatars.githubusercontent.com/u/53188310"
        },
        {
          "username": "kachbit",
          "href": "https://github.com/kachbit",
          "avatar": "https://avatars.githubusercontent.com/u/59241904"
        }
      ]
    },
    {
      "author": "jiji262",
      "repo": "douyin-downloader",
      "avatar": "https://github.com/jiji262.png",
      "repo_link": "https://github.com/jiji262/douyin-downloader",
      "desc": "A practical Douyin downloader for both single-item and profile batch downloads, with progress display, retries, SQLite deduplication, and browser fallback support. 抖音批量下载工具，去水印，支持视频、图集、合集、音乐(原声)。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1853,
      "added_stars": 2680,
      "builtBy": [
        {
          "username": "jiji262",
          "href": "https://github.com/jiji262",
          "avatar": "https://avatars.githubusercontent.com/u/168751"
        },
        {
          "username": "dennistodo",
          "href": "https://github.com/dennistodo",
          "avatar": "https://avatars.githubusercontent.com/u/213367755"
        },
        {
          "username": "craft-agents-bot",
          "href": "https://github.com/craft-agents-bot",
          "avatar": "https://avatars.githubusercontent.com/u/255798083"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "handsomestWei",
      "repo": "patent-disclosure-skill",
      "avatar": "https://github.com/handsomestWei.png",
      "repo_link": "https://github.com/handsomestWei/patent-disclosure-skill",
      "desc": "中国专利.skill：专利点挖掘与交底书（发明/实用/外观）编写，通俗解读专利，嗅探政策动向，辅助审查答复。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1071,
      "added_stars": 5109,
      "builtBy": [
        {
          "username": "handsomestWei",
          "href": "https://github.com/handsomestWei",
          "avatar": "https://avatars.githubusercontent.com/u/36500279"
        },
        {
          "username": "yizchu",
          "href": "https://github.com/yizchu",
          "avatar": "https://avatars.githubusercontent.com/u/130751472"
        },
        {
          "username": "x7peeps",
          "href": "https://github.com/x7peeps",
          "avatar": "https://avatars.githubusercontent.com/u/9640837"
        },
        {
          "username": "xiaofengShi",
          "href": "https://github.com/xiaofengShi",
          "avatar": "https://avatars.githubusercontent.com/u/30405889"
        },
        {
          "username": "dajiaohuang",
          "href": "https://github.com/dajiaohuang",
          "avatar": "https://avatars.githubusercontent.com/u/108231307"
        }
      ]
    },
    {
      "author": "petergyang",
      "repo": "no-ai-slop",
      "avatar": "https://github.com/petergyang.png",
      "repo_link": "https://github.com/petergyang/no-ai-slop",
      "desc": "Removes 20+ patterns of AI slop from any piece of writing.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 762,
      "added_stars": 5361,
      "builtBy": [
        {
          "username": "petergyang",
          "href": "https://github.com/petergyang",
          "avatar": "https://avatars.githubusercontent.com/u/2383268"
        },
        {
          "username": "amateurhuman",
          "href": "https://github.com/amateurhuman",
          "avatar": "https://avatars.githubusercontent.com/u/374244"
        },
        {
          "username": "tmchow",
          "href": "https://github.com/tmchow",
          "avatar": "https://avatars.githubusercontent.com/u/517103"
        },
        {
          "username": "tymrtn",
          "href": "https://github.com/tymrtn",
          "avatar": "https://avatars.githubusercontent.com/u/4305058"
        },
        {
          "username": "CooperSheroy",
          "href": "https://github.com/CooperSheroy",
          "avatar": "https://avatars.githubusercontent.com/u/59650384"
        }
      ]
    },
    {
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1579,
      "added_stars": 3324,
      "builtBy": [
        {
          "username": "rng1995",
          "href": "https://github.com/rng1995",
          "avatar": "https://avatars.githubusercontent.com/u/32655573"
        },
        {
          "username": "keshprad",
          "href": "https://github.com/keshprad",
          "avatar": "https://avatars.githubusercontent.com/u/32313895"
        },
        {
          "username": "mohgupta-ship-it",
          "href": "https://github.com/mohgupta-ship-it",
          "avatar": "https://avatars.githubusercontent.com/u/269879782"
        },
        {
          "username": "rodboev",
          "href": "https://github.com/rodboev",
          "avatar": "https://avatars.githubusercontent.com/u/106971"
        }
      ]
    },
    {
      "author": "TencentCloud",
      "repo": "Octop",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/Octop",
      "desc": "A smarter, self-hosted AI assistant — multi-user, multi-agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 581,
      "added_stars": 3781,
      "builtBy": [
        {
          "username": "jubaoliang-tencent",
          "href": "https://github.com/jubaoliang-tencent",
          "avatar": "https://avatars.githubusercontent.com/u/309035352"
        },
        {
          "username": "jubaoliang",
          "href": "https://github.com/jubaoliang",
          "avatar": "https://avatars.githubusercontent.com/u/222386738"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "liukewia",
          "href": "https://github.com/liukewia",
          "avatar": "https://avatars.githubusercontent.com/u/50489030"
        },
        {
          "username": "huangcheng",
          "href": "https://github.com/huangcheng",
          "avatar": "https://avatars.githubusercontent.com/u/2804393"
        }
      ]
    },
    {
      "author": "dgtlmoon",
      "repo": "changedetection.io",
      "avatar": "https://github.com/dgtlmoon.png",
      "repo_link": "https://github.com/dgtlmoon/changedetection.io",
      "desc": "Best and simplest tool for website change detection, web page monitoring, and website change alerts. Perfect for tracking content changes, price drops, restock alerts, and website defacement monitoring—all for free or enjoy our SaaS plan!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2085,
      "added_stars": 1341,
      "builtBy": [
        {
          "username": "dgtlmoon",
          "href": "https://github.com/dgtlmoon",
          "avatar": "https://avatars.githubusercontent.com/u/275001"
        },
        {
          "username": "skkzsh",
          "href": "https://github.com/skkzsh",
          "avatar": "https://avatars.githubusercontent.com/u/1439870"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Constantin1489",
          "href": "https://github.com/Constantin1489",
          "avatar": "https://avatars.githubusercontent.com/u/61624808"
        }
      ]
    },
    {
      "author": "FlashML-org",
      "repo": "FreeToken",
      "avatar": "https://github.com/FlashML-org.png",
      "repo_link": "https://github.com/FlashML-org/FreeToken",
      "desc": "FreeToken brings datacenter-scale model serving to your desktop. Run massive models locally, fast and efficiently.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1355,
      "added_stars": 9075,
      "builtBy": [
        {
          "username": "jason-fxz",
          "href": "https://github.com/jason-fxz",
          "avatar": "https://avatars.githubusercontent.com/u/36730318"
        },
        {
          "username": "andy-yang-1",
          "href": "https://github.com/andy-yang-1",
          "avatar": "https://avatars.githubusercontent.com/u/73746844"
        },
        {
          "username": "taking-lying-flat",
          "href": "https://github.com/taking-lying-flat",
          "avatar": "https://avatars.githubusercontent.com/u/234872336"
        },
        {
          "username": "earlvanze",
          "href": "https://github.com/earlvanze",
          "avatar": "https://avatars.githubusercontent.com/u/3733346"
        },
        {
          "username": "RuixiangMa",
          "href": "https://github.com/RuixiangMa",
          "avatar": "https://avatars.githubusercontent.com/u/27672240"
        }
      ]
    },
    {
      "author": "xerrors",
      "repo": "Yuxi",
      "avatar": "https://github.com/xerrors.png",
      "repo_link": "https://github.com/xerrors/Yuxi",
      "desc": "可私有部署的多租户知识智能体平台：统一 RAG、知识图谱、多智能体、MCP/Skills、沙盒与权限管理。Yuxi = Cloud Agents + Knowledge RAG, Self-hosted knowledge agent platform for RAG, knowledge graphs and multi-agent workflows.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1140,
      "added_stars": 684,
      "builtBy": [
        {
          "username": "xerrors",
          "href": "https://github.com/xerrors",
          "avatar": "https://avatars.githubusercontent.com/u/35524243"
        },
        {
          "username": "Yuchuan925",
          "href": "https://github.com/Yuchuan925",
          "avatar": "https://avatars.githubusercontent.com/u/28227133"
        },
        {
          "username": "supreme0597",
          "href": "https://github.com/supreme0597",
          "avatar": "https://avatars.githubusercontent.com/u/101025596"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "k2-fsa",
      "repo": "OmniVoice",
      "avatar": "https://github.com/k2-fsa.png",
      "repo_link": "https://github.com/k2-fsa/OmniVoice",
      "desc": "High-Quality Voice Cloning TTS for 600+ Languages",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2083,
      "added_stars": 4512,
      "builtBy": [
        {
          "username": "zhu-han",
          "href": "https://github.com/zhu-han",
          "avatar": "https://avatars.githubusercontent.com/u/52005835"
        },
        {
          "username": "HenryVarro666",
          "href": "https://github.com/HenryVarro666",
          "avatar": "https://avatars.githubusercontent.com/u/48014495"
        },
        {
          "username": "pkufool",
          "href": "https://github.com/pkufool",
          "avatar": "https://avatars.githubusercontent.com/u/11765074"
        },
        {
          "username": "Pastells",
          "href": "https://github.com/Pastells",
          "avatar": "https://avatars.githubusercontent.com/u/30735349"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "strands-agents",
      "repo": "harness-sdk",
      "avatar": "https://github.com/strands-agents.png",
      "repo_link": "https://github.com/strands-agents/harness-sdk",
      "desc": "Build an agent harness and control it end-to-end. Open-source SDK for production AI agents in Python & TypeScript - any model, any cloud.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1244,
      "added_stars": 1206,
      "builtBy": [
        {
          "username": "zastrowm",
          "href": "https://github.com/zastrowm",
          "avatar": "https://avatars.githubusercontent.com/u/3211021"
        },
        {
          "username": "pgrayy",
          "href": "https://github.com/pgrayy",
          "avatar": "https://avatars.githubusercontent.com/u/204914194"
        },
        {
          "username": "strands-agent",
          "href": "https://github.com/strands-agent",
          "avatar": "https://avatars.githubusercontent.com/u/217235299"
        },
        {
          "username": "yonib05",
          "href": "https://github.com/yonib05",
          "avatar": "https://avatars.githubusercontent.com/u/5503597"
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
      "title": "Node.JS Built-Ins That Replaced NPM Packages",
      "url": "https://flaviocopes.com/node-builtins/",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-09-24T23:00:59.000Z"
    },
    {
      "title": "Tibetan-Singing-Bowls: Strike or rub a set of virtual Tibetan singing bowls - synthesized in the browser with Web Audio, with the beating overtones of the real thing",
      "url": "https://github.com/evoluteur/tibetan-singing-bowls",
      "upvotes": "3",
      "comments": "1",
      "created": "2026-09-22T05:46:13.000Z"
    },
    {
      "title": "Draw a mandala with mirrored symmetry and export it as PNG or SVG.",
      "url": "https://github.com/evoluteur/mandala-maker",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-20T01:15:18.000Z"
    },
    {
      "title": "Supapower - A sync engine that keeps a local PGlite database in sync with Supabase, inspired by PowerSync",
      "url": "https://github.com/aboviq/supapower",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-09-18T15:05:21.000Z"
    },
    {
      "title": "billboard.js 4.1.0: Live resizing, configurable subchart, React subpath & CSP-safe worker",
      "url": "https://netil.medium.com/billboard-js-4-1-0-live-resizing-configurable-subchart-react-subpath-csp-safe-worker-e1a6fd0ece88",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-16T07:28:53.000Z"
    },
    {
      "title": "From 1,256ms to 96ms: Fixing INP in a Massive React Dropdown",
      "url": "https://dev.to/subito/from-1256ms-to-96ms-fixing-inp-in-a-massive-react-dropdown-16l7",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-15T06:55:32.000Z"
    },
    {
      "title": "structured-filter-react: React component for structured queries",
      "url": "https://github.com/evoluteur/structured-filter-react",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-11T07:30:13.000Z"
    },
    {
      "title": "Cymatics: Play a frequency and watch the sand settle into its Chladni figure, computed from the wave equation",
      "url": "https://github.com/evoluteur/cymatics",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-09-09T01:45:36.000Z"
    },
    {
      "title": "Turn the five Platonic solids in 3D, show their duals, and read their measurements",
      "url": "https://github.com/evoluteur/platonic-solids",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-04T07:14:05.000Z"
    },
    {
      "title": "Sharing Application State in a URL",
      "url": "https://ivakin.dev/blog/state-in-url",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-09-02T15:52:29.000Z"
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
      "title": "Disappeared Since March: Taking a Long Break Was My Best Decision Yet",
      "description": "If you checked my profile recently, you probably noticed my page has been completely quiet since...",
      "url": "https://dev.to/maame-codes/disappeared-since-march-taking-a-long-break-was-my-best-decision-yet-1n45",
      "tags": "",
      "reactions": 56,
      "comments": 17,
      "reading_time": 2,
      "author": "maame-codes"
    },
    {
      "title": "I Turned DEV.to Into a Walkable 3D Library — Debugging It Has Been a Nightmare",
      "description": "DEV Library is my idea of first-person 3D reimagining of DEV.to. Not a themed scene with some...",
      "url": "https://dev.to/mikachu/i-turned-devto-into-a-walkable-3d-library-debugging-it-has-been-a-nightmare-4lkd",
      "tags": "buildinpublic, webdev, nextjs, ai",
      "reactions": 60,
      "comments": 23,
      "reading_time": 7,
      "author": "mikachu"
    },
    {
      "title": "This video is about how this video was made",
      "description": "This video (the script, the voice timings, the source code, the storyboard, the briefs the subagents...",
      "url": "https://dev.to/peter/this-video-is-about-how-this-video-was-made-42hl",
      "tags": "ai, claude, video, javascript",
      "reactions": 17,
      "comments": 3,
      "reading_time": 4,
      "author": "peter"
    },
    {
      "title": "Welcome Thread - v 394",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-394-22l2",
      "tags": "welcome",
      "reactions": 36,
      "comments": 133,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "Congrats to the Summer Bug Smash Winners!",
      "description": "We are thrilled to announce the winners of DEV's Big Summer Bug Smash powered by Sentry!  This...",
      "url": "https://dev.to/devteam/congrats-to-the-summer-bug-smash-winners-50ei",
      "tags": "devchallenge, bugsmash, performance, debugging",
      "reactions": 32,
      "comments": 12,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Running a Jev-Style Decision Model on One TPU v6e: What Fits, What It Costs, and What Changes From a GPU",
      "description": "Gemma 4 E2B, E4B, 12B and a 26B-A4B fp8 build read by their label probabilities with vLLM on one TPU v6e chip, checked against the same read on an NVIDIA L4 and against Jev 1.13.0's published results. What fits one chip, how to read labels when vLLM on TPU returns only the top 32 log-probabilities, speed, cost, and why no 31B loads today.",
      "url": "https://dev.to/gde/running-a-jev-style-decision-model-on-one-tpu-v6e-what-fits-what-it-costs-and-what-changes-from-1j0g",
      "tags": "gemma, googlecloud, machinelearning, llm",
      "reactions": 9,
      "comments": 0,
      "reading_time": 13,
      "author": "xbill"
    },
    {
      "title": "Equip your agent with Google Cloud best practices using google-cloud-developer plugin",
      "description": "Coding agents in your terminal can scaffold microservices in seconds. But what happens when your...",
      "url": "https://dev.to/googleai/equip-your-agent-with-google-cloud-best-practices-using-google-cloud-developer-plugin-1bm1",
      "tags": "ai, agents, agentskills, googlecloud",
      "reactions": 6,
      "comments": 2,
      "reading_time": 7,
      "author": "rsamborski"
    },
    {
      "title": "Plain Gemma 4 26B vs Jev on One EC2 L4: 2.1 Points Behind Overall, Level on Yes/No, 4.5 Behind on Multiple Choice",
      "description": "Plain Gemma 4 26B read by its label probabilities against DiffusionGemma's one-step read, both as community 4-bit (AWQ) builds on one EC2 L4, on 1,200 labelled examples and on the 3,880-record public suite where Jev 1.13.0 has published results. Pre-registered, with accuracy, calibration, calibration after 0 to 150 labels, latency and cost.",
      "url": "https://dev.to/gde/plain-gemma-4-26b-vs-jev-on-one-ec2-l4-21-points-behind-overall-level-on-yesno-45-behind-on-15k6",
      "tags": "gemma, aws, machinelearning, llm",
      "reactions": 6,
      "comments": 0,
      "reading_time": 23,
      "author": "xbill"
    },
    {
      "title": "Jev After Eight Days of Independent Tests: Level With Mid-Price LLMs, Behind the Frontier",
      "description": "What the independent measurements of TypeSafe's Jev found in its first eight days: arXiv preprints, GitHub evaluations and blog benchmarks, each traced to its primary source. Accuracy, calibration, speed, cost, failure modes, the prior art, the open alternatives, and what is still unmeasured.",
      "url": "https://dev.to/gde/jev-after-eight-days-of-independent-tests-level-with-mid-price-llms-behind-the-frontier-1kln",
      "tags": "ai, machinelearning, llm, gemma",
      "reactions": 8,
      "comments": 0,
      "reading_time": 17,
      "author": "xbill"
    },
    {
      "title": "The Grand Unifying Architecture of Frontend",
      "description": "I used to joke that the history of frontend development could be retraced by following the argument...",
      "url": "https://dev.to/playfulprogramming/the-grand-unifying-architecture-of-frontend-bhk",
      "tags": "webdev, javascript, solidjs, architecture",
      "reactions": 17,
      "comments": 2,
      "reading_time": 10,
      "author": "ryansolid"
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
      "title": "Every package is already installed",
      "url": "https://fzakaria.com/2026/09/24/every-package-is-already-installed",
      "score": 1,
      "comments": 0,
      "tags": [
        "nix"
      ],
      "id": "wqzbpw"
    },
    {
      "title": "Real-Time Telemetry with Eventlog Live",
      "url": "https://www.well-typed.com/blog/2026/09/real-time-telemetry-with-eventlog-live/",
      "score": 2,
      "comments": 0,
      "tags": [
        "haskell",
        "release"
      ],
      "id": "3bgvbn"
    },
    {
      "title": "Goodbye Google",
      "url": "https://robert.ocallahan.org/2026/09/goodbye-google.html",
      "score": 2,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "sxlf4a"
    },
    {
      "title": "Lobsters: Rename vibecoding to llms (Greasemonkey script)",
      "url": "https://greasyfork.org/en/scripts?by=1646191",
      "score": 4,
      "comments": 3,
      "tags": [
        "vibecoding"
      ],
      "id": "68n22g"
    },
    {
      "title": "Remembering Johannes Doerfert",
      "url": "https://blog.llvm.org/posts/2026-09-24-rememberingjohannesdoerfert/",
      "score": 2,
      "comments": 0,
      "tags": [
        "culture"
      ],
      "id": "cuxdjq"
    },
    {
      "title": "File Notification Attacks: Side-Channel Leakage from the File-Notification System on Linux, Android, Windows, and macOS",
      "url": "https://inoti.fyi/",
      "score": 6,
      "comments": 3,
      "tags": [
        "security"
      ],
      "id": "x6yjrc"
    },
    {
      "title": "Pencils Down, Eyes Open: A Rails Developer After Rails World",
      "url": "https://caio.ca/blog/pencils-down-eyes-open-rails-world",
      "score": 3,
      "comments": 0,
      "tags": [
        "ruby",
        "rust",
        "vibecoding"
      ],
      "id": "jiv1c5"
    },
    {
      "title": "Launching FreeBSD/EC2 desktop AMIs",
      "url": "https://www.daemonology.net/blog/2026-09-24-Launching-FreeBSD-EC2-desktop-AMIs.html",
      "score": 3,
      "comments": 0,
      "tags": [
        "freebsd"
      ],
      "id": "ufor73"
    },
    {
      "title": "Introducing Lev",
      "url": "https://yogthos.net/posts/2026-09-24-introducing-lev.html",
      "score": 4,
      "comments": 0,
      "tags": [
        "ai",
        "clojure"
      ],
      "id": "zcbk0r"
    },
    {
      "title": "Platform-independent SIMD in Go",
      "url": "https://go.dev/blog/simd-experiment",
      "score": 5,
      "comments": 0,
      "tags": [
        "go"
      ],
      "id": "sfdf3h"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "daveoc64",
      "descendants": 296,
      "id": 49831968,
      "kids": [
        49835185,
        49832443,
        49840410,
        49837707,
        49832601,
        49839041,
        49833608,
        49832643,
        49835748,
        49840901,
        49832486,
        49832308,
        49840016,
        49832268,
        49839789,
        49832741,
        49832347,
        49835261,
        49832234,
        49835853,
        49834628,
        49839147,
        49832357,
        49839002,
        49836254,
        49837602,
        49838245,
        49833474,
        49838267,
        49833453,
        49832269,
        49833777,
        49833560,
        49838622,
        49835027,
        49834615,
        49832605,
        49834105,
        49836720,
        49832953,
        49832342,
        49832587,
        49837121,
        49833967,
        49832555,
        49833060,
        49839568,
        49836382,
        49833385,
        49836851,
        49836855,
        49835975,
        49832323,
        49834459,
        49837304
      ],
      "score": 1118,
      "time": 1790263572,
      "title": "F-Droid 2.0",
      "type": "story",
      "url": "https://f-droid.org/2026/09/24/f-droid-2.0-a-new-chapter-for-android-freedom.html"
    },
    {
      "by": "MitPitt",
      "descendants": 81,
      "id": 49823738,
      "kids": [
        49839819,
        49835208,
        49836236,
        49835645,
        49835583,
        49839298,
        49834986,
        49835757,
        49835902,
        49840265,
        49834919,
        49839927,
        49839475,
        49835489,
        49835433,
        49836048,
        49837231,
        49840430,
        49835089,
        49839920,
        49834868,
        49835250,
        49837472,
        49837872,
        49837921,
        49838054,
        49839268,
        49837461,
        49836288,
        49839557,
        49836188,
        49834941,
        49835127,
        49834957,
        49837495,
        49835075,
        49839478,
        49839996,
        49838678,
        49836597,
        49837144,
        49836727,
        49836187,
        49836162,
        49835451,
        49835166,
        49826860,
        49836756,
        49835274,
        49835263,
        49840167,
        49836388,
        49836631
      ],
      "score": 594,
      "text": "A joke tool that abuses OpenType&#x27;s ligature feature to mix fonts. It works pretty fast on client-side by loading Python in WASM.",
      "time": 1790204008,
      "title": "Show HN: Make cursed fonts like Times New Bastard",
      "type": "story",
      "url": "https://bastardica.mitpit.com"
    },
    {
      "by": "sidharthkmenon",
      "descendants": 105,
      "id": 49833867,
      "kids": [
        49834543,
        49840900,
        49840763,
        49837645,
        49840151,
        49840531,
        49840326,
        49840608,
        49840367,
        49840667,
        49834714,
        49836507,
        49839050,
        49837428,
        49840172,
        49836542,
        49835319,
        49836385,
        49837529,
        49836793,
        49836484,
        49836440,
        49838809,
        49837945,
        49836332,
        49836271,
        49837784,
        49836767,
        49834864,
        49837464,
        49835980,
        49838943,
        49836566,
        49836840,
        49835940,
        49835239,
        49835228,
        49834369,
        49838273,
        49834380,
        49838730,
        49834508,
        49835732,
        49835068,
        49836158,
        49835627,
        49834994,
        49840504,
        49836389,
        49834901,
        49834891,
        49835681,
        49834622
      ],
      "score": 264,
      "text": "Hello! We’re Sid, Alex, Ketan, and Milan. We’re building Whiteboard (<a href=\"https:&#x2F;&#x2F;whiteboard.dev.fast&#x2F;\">https:&#x2F;&#x2F;whiteboard.dev.fast&#x2F;</a>), an open-source desktop app where humans and agents can architect software together in a common workspace. Here’s our repo: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;devdotfast&#x2F;whiteboard\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;devdotfast&#x2F;whiteboard</a>.<p>We were missing the feeling of a “whiteboard session” with another dev where you leave with a deep understanding of a system, so we built this app for ourselves. Whiteboard plugs into the tools you already use - e.g. Claude Code, Codex, etc. – and gives your agent an SDK to draw on an in-app canvas to describe its work. We began with an MVP based on HTML artifacts and started rethinking the app as we ran into limitations:<p>1. Built on top of CodeOSS: We found that in pure HTML tools it was hard to connect a spec or diagram to code. In Whiteboard, when you click on visualizations like a sequence diagram, an entity relationship diagram, or a quote from the agent’s trace, you can jump to the underlying code directly. When navigating code, you get keybindings and LSP support from VSCode out of the box. We’ve found this is especially valuable because tradeoffs are often only discovered after a first pass at implementation (re: slop)<p>2. Semantic diff viewer: we wrote a semantic, AST-aware diff viewer in Rust so you can only view the code changes which are relevant to you [1]. We’ve set up some sane defaults: large added functions are summarized as pseudocode, and things like unit tests and large documentation changes are collapsed &#x2F; hidden. This is all customizable with a WASM-based plugin system.<p>3. Decision Log: We found it difficult to reason about what set of decisions our agents made autonomously. So we built tools for agents to query and link their own traces to the Whiteboard, so you can understand how the requirements that you set were implemented, and understand what decisions your agent made autonomously.<p>Here’s a quick demo video explaining more: <a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=ChPn3ftULWE\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=ChPn3ftULWE</a><p>Folks at companies like Salesforce and Modal are using Whiteboard today as a review tool for architecture or spec-level changes – really any change where they want to be involved:<p>1. Reviewing your own coding agent’s work: because Whiteboard makes it easier to review large amounts of code, folks will typically have their AI agents create a prototype and a corresponding Whiteboard session so they can iterate on the design.<p>2. Reviewing other people’s changes: We’ve found that Whiteboard is particularly helpful when composed with tools like Greptile. For example, you can run an automated code reviewer on small changes and escalate to a Whiteboard session for the changes that require human judgement.<p>Why we built this: we’re four buddies from college who quit our jobs as tech leads right before agentic coding became industry standard. As we iterated towards an MVP for a previous idea, we struggled to maintain a comprehensible codebase while reaping all the velocity benefits of agentic coding. As more PRs were merged without our understanding, we felt a ‘cognitive debt’ begin to seep in, until it became difficult for us to even contribute to the system [2].<p>We’re releasing our desktop app under an MIT license. Please poke through and feel free to contribute! Eventually we’ll charge companies for a hosted web version that manages whiteboard session creation alongside features like trajectory storage and multiplayer reviews. Everything will always remain self-hostable.<p>Thanks for reading, and we hope you try it out! We would love to hear any feedback and to learn from your expertise.<p>Here’s are the project links again: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;devdotfast&#x2F;whiteboard\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;devdotfast&#x2F;whiteboard</a>, and you can install (for MacOS + Linux) at <a href=\"https:&#x2F;&#x2F;install.dev.fast\">https:&#x2F;&#x2F;install.dev.fast</a><p>[1] diffs library: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;devdotfast&#x2F;diffr\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;devdotfast&#x2F;diffr</a>\n[2] Credit for the term ‘cognitive debt’ goes to  <a href=\"https:&#x2F;&#x2F;www.geoffreylitt.com&#x2F;2026&#x2F;07&#x2F;02&#x2F;understanding-is-the-new-bottleneck\" rel=\"nofollow\">https:&#x2F;&#x2F;www.geoffreylitt.com&#x2F;2026&#x2F;07&#x2F;02&#x2F;understanding-is-the...</a>",
      "time": 1790270496,
      "title": "Show HN: Whiteboard (YC W26) – An open-source IDE for thoughtful software design",
      "type": "story",
      "url": "https://github.com/devdotfast/whiteboard"
    },
    {
      "by": "Murmuring9087",
      "descendants": 107,
      "id": 49840314,
      "kids": [
        49840736,
        49840931,
        49840739,
        49840924,
        49840782,
        49840802,
        49840682,
        49840897,
        49840781,
        49840798,
        49840565,
        49840673,
        49840709,
        49840874,
        49840707,
        49840724,
        49840501,
        49840591,
        49840656,
        49840715,
        49840559,
        49840873,
        49840676,
        49840541,
        49840598,
        49840596,
        49840826,
        49840774,
        49840669,
        49840666,
        49840625,
        49840740
      ],
      "score": 130,
      "time": 1790311922,
      "title": "Goodbye Google",
      "type": "story",
      "url": "https://robert.ocallahan.org/2026/09/goodbye-google.html"
    },
    {
      "by": "jbotz",
      "descendants": 183,
      "id": 49832938,
      "kids": [
        49839087,
        49836812,
        49836192,
        49838309,
        49839897,
        49836178,
        49840749,
        49835957,
        49837430,
        49835037,
        49840297,
        49833922,
        49840346,
        49836383,
        49833779,
        49838618,
        49840196,
        49839632,
        49838413,
        49835464,
        49835078,
        49837690,
        49837486,
        49836805,
        49836704,
        49835789,
        49835207,
        49839103,
        49836370,
        49838395,
        49834039,
        49834042,
        49839274,
        49836758,
        49833729
      ],
      "score": 360,
      "time": 1790266980,
      "title": "Why is the liver so weirdly regenerative?",
      "type": "story",
      "url": "https://dynomight.substack.com/p/liver"
    },
    {
      "by": "surprisetalk",
      "descendants": 28,
      "id": 49801436,
      "kids": [
        49839404,
        49840767,
        49840254,
        49837844,
        49839093,
        49837078,
        49840302,
        49839448,
        49838352,
        49838311,
        49837770,
        49837229,
        49839855,
        49839024,
        49838356,
        49838212,
        49838449
      ],
      "score": 192,
      "time": 1790085608,
      "title": "2DWillNeverDie",
      "type": "story",
      "url": "https://2dwillneverdie.com/"
    },
    {
      "by": "verdagon",
      "descendants": 34,
      "id": 49800085,
      "kids": [
        49837285,
        49835084,
        49836633,
        49834505,
        49812925,
        49835944,
        49838758,
        49838830,
        49837520,
        49834780,
        49834779
      ],
      "score": 236,
      "time": 1790079817,
      "title": "Fearless SIMD v1.0",
      "type": "story",
      "url": "https://linebender.org/blog/fearless-simd-1-0/"
    },
    {
      "by": "an0malous",
      "descendants": 329,
      "id": 49817680,
      "kids": [
        49830669,
        49823081,
        49840921,
        49836253,
        49836825,
        49837388,
        49840466,
        49835660,
        49818469,
        49837967,
        49838538,
        49835995,
        49829032,
        49837093,
        49823039,
        49836260,
        49835874,
        49838342,
        49835148,
        49835064,
        49835801,
        49837123,
        49828433,
        49839736,
        49827021,
        49824882,
        49836724,
        49840567,
        49836772,
        49835620,
        49826396,
        49834991,
        49835641,
        49817719,
        49834958,
        49828419,
        49836189,
        49837049
      ],
      "score": 302,
      "time": 1790177613,
      "title": "Rails World 2026 Opening Keynote [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=vDjW_dRyKXY"
    },
    {
      "by": "cisc",
      "descendants": 488,
      "id": 49823568,
      "kids": [
        49837949,
        49834479,
        49840280,
        49839311,
        49834655,
        49824771,
        49835675,
        49834692,
        49834517,
        49837835,
        49840789,
        49835219,
        49826560,
        49838804,
        49835236,
        49839225,
        49838980,
        49834840,
        49840195,
        49835218,
        49839679,
        49839528,
        49835950,
        49835474,
        49835586,
        49838349,
        49834286,
        49834378,
        49838818,
        49838977,
        49837762,
        49834981,
        49835431,
        49839299,
        49839451,
        49837175,
        49837857,
        49838030,
        49840262,
        49838946,
        49836316,
        49834411,
        49834442,
        49838951,
        49839383,
        49840493,
        49835269,
        49838193
      ],
      "score": 290,
      "time": 1790203048,
      "title": "Toyota is taking the Corolla electric",
      "type": "story",
      "url": "https://electrek.co/2026/09/23/toyota-best-selling-corolla-electric/"
    },
    {
      "by": "ahmedhossamdev",
      "descendants": 126,
      "id": 49805344,
      "kids": [
        49836551,
        49835033,
        49838004,
        49840658,
        49824828,
        49838838,
        49837056,
        49838234,
        49840770,
        49840587,
        49840551,
        49834570,
        49835255,
        49840534,
        49835328,
        49836857,
        49836205,
        49839593,
        49840220,
        49834852,
        49840381,
        49837899,
        49839517,
        49837549,
        49837966,
        49835709,
        49839359,
        49840647,
        49839284,
        49837095,
        49836466,
        49840155,
        49838857,
        49836522,
        49836682,
        49835799,
        49836757,
        49835892,
        49837300,
        49835406,
        49835731,
        49838407,
        49834757,
        49835680,
        49839211,
        49834544,
        49836977,
        49838929,
        49835946,
        49837547,
        49837955,
        49836965,
        49835707,
        49834618,
        49836517,
        49838248,
        49836113,
        49839060,
        49838602
      ],
      "score": 287,
      "time": 1790099386,
      "title": "My weird new hobby: Wandering around Tokyo on Google Maps",
      "type": "story",
      "url": "https://ahmedhossamdev.com/writing/my-weird-new-hobby-wandering-around-tokyo/"
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
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "devto",
  "tag": "career",
  "sort": "top",
  "items": [
    {
      "title": "Inside a Japanese Engineering Team: Meetings, Reviews, Overtime and the Pay Trap",
      "description": "What daily work is actually like on a Japanese engineering team: the daily progress check, how technical decisions get made through heavy review, Japan's legal overtime caps, paid leave in practice — and fixed overtime pay, which catches foreign engineers out.",
      "url": "https://dev.to/maru_honnedev_39f51f07cc/inside-a-japanese-engineering-team-meetings-reviews-overtime-and-the-pay-trap-4mhe",
      "tags": "japan, career, culture, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "maru_honnedev_39f51f07cc"
    },
    {
      "title": "5 SQL patterns that run fine and still return the wrong answer",
      "description": "A database table is really just a spreadsheet. Rows are records — one row per customer, one row per...",
      "url": "https://dev.to/analyticsdurgesh/5-sql-patterns-that-run-fine-and-still-return-the-wrong-answer-40ka",
      "tags": "career, dataengineering, sql, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "analyticsdurgesh"
    },
    {
      "title": "I don't write code. Here's how I finally understood RAG.",
      "description": "I've worked in IT for years, but I don't write code. When LLMs went mainstream, the people around me...",
      "url": "https://dev.to/koe/i-dont-write-code-heres-how-i-finally-understood-rag-311g",
      "tags": "beginners, rag, llm, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "koe"
    },
    {
      "title": "The Machine Learning Career Roadmap I'd Follow If I Started Today",
      "description": "After seven years of building ML systems across four continents, I know exactly which early mistakes...",
      "url": "https://dev.to/mryadavgulshan/the-machine-learning-career-roadmap-id-follow-if-i-started-today-558i",
      "tags": "career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "mryadavgulshan"
    },
    {
      "title": "I Don't Have a Job, but I Am Working More Than Before",
      "description": "Right now, I don't have a job.  Strangely, I feel like I am working more than when I had one.  There...",
      "url": "https://dev.to/rochapablo/i-dont-have-a-job-but-i-am-working-more-than-before-2oaj",
      "tags": "career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "rochapablo"
    },
    {
      "title": "Tailoring a resume to a job description: a 15-minute gap check",
      "description": "Most resume advice says \"tailor it to the job.\" Very little says how. Here is the 15-minute check I...",
      "url": "https://dev.to/launchgatecheck/tailoring-a-resume-to-a-job-description-a-15-minute-gap-check-213c",
      "tags": "career, resume, jobs, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "launchgatecheck"
    },
    {
      "title": "Chaos, Order, and Code: The Cycle That Drives Software (and Our Careers)",
      "description": "The first discussion I came across about this duality between chaos and order as it applies to...",
      "url": "https://dev.to/diogojorge/chaos-order-and-code-the-cycle-that-drives-software-and-our-careers-2gif",
      "tags": "programming, discuss, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "diogojorge"
    },
    {
      "title": "PROGRAMMER, QUICK QUESTION:",
      "description": "You could be one of the most talented developers in the room...           but if nobody knows you're...",
      "url": "https://dev.to/blessloaded/programmer-quick-question-jfk",
      "tags": "career, development, programmers",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "blessloaded"
    },
    {
      "title": "Should You Still Learn to Code in 2026? An Honest Take From a Student Who's Still Grinding",
      "description": "Everyone says coding is dead. Here's the no-BS take on what beginners should actually learn in the AI era, and how to use AI without rotting your brain.",
      "url": "https://dev.to/adhikareeprayush/should-you-still-learn-to-code-in-2026-an-honest-take-from-a-student-whos-still-grinding-4f3",
      "tags": "beginners, ai, career, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "adhikareeprayush"
    },
    {
      "title": "I Used to Think Getting Better at Coding Meant Writing More Code",
      "description": "For a long time, I thought becoming a better developer mostly meant knowing more things.  More...",
      "url": "https://dev.to/nocklock/i-used-to-think-getting-better-at-coding-meant-writing-more-code-4m54",
      "tags": "programming, learning, career, webdev",
      "reactions": 1,
      "comments": 1,
      "reading_time": 4,
      "author": "nocklock"
    }
  ]
}
```

