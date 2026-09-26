# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-26 06:36:52 UTC

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
      "forks": 24640,
      "added_stars": 2102,
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
      "forks": 5134,
      "added_stars": 6537,
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
      "author": "paperclipai",
      "repo": "paperclip",
      "avatar": "https://github.com/paperclipai.png",
      "repo_link": "https://github.com/paperclipai/paperclip",
      "desc": "The open-source app everyone uses to manage agents at work",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 15271,
      "added_stars": 2616,
      "builtBy": [
        {
          "username": "cryppadotta",
          "href": "https://github.com/cryppadotta",
          "avatar": "https://avatars.githubusercontent.com/u/34892728"
        },
        {
          "username": "Paperclip-Paperclip",
          "href": "https://github.com/Paperclip-Paperclip",
          "avatar": "https://avatars.githubusercontent.com/u/271391591"
        },
        {
          "username": "devinfoley",
          "href": "https://github.com/devinfoley",
          "avatar": "https://avatars.githubusercontent.com/u/139239"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "nickyleach",
          "href": "https://github.com/nickyleach",
          "avatar": "https://avatars.githubusercontent.com/u/331803"
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
      "forks": 4820,
      "added_stars": 1282,
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
      "forks": 7520,
      "added_stars": 676,
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
      "author": "Open-Dev-Society",
      "repo": "OpenStock",
      "avatar": "https://github.com/Open-Dev-Society.png",
      "repo_link": "https://github.com/Open-Dev-Society/OpenStock",
      "desc": "OpenStock is an open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights — built openly, for everyone, forever free.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2354,
      "added_stars": 3794,
      "builtBy": [
        {
          "username": "ravixalgorithm",
          "href": "https://github.com/ravixalgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/148683640"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
        }
      ]
    },
    {
      "author": "bendlang",
      "repo": "bend",
      "avatar": "https://github.com/bendlang.png",
      "repo_link": "https://github.com/bendlang/bend",
      "desc": "Bend 2: a fast language that blocks AI mistakes via proof. Install: curl -fsSL https://bend-lang.com/install.sh | sh",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 692,
      "added_stars": 1530,
      "builtBy": [
        {
          "username": "imaqtkatt",
          "href": "https://github.com/imaqtkatt",
          "avatar": "https://avatars.githubusercontent.com/u/135721694"
        },
        {
          "username": "VictorTaelin",
          "href": "https://github.com/VictorTaelin",
          "avatar": "https://avatars.githubusercontent.com/u/13090166"
        },
        {
          "username": "nicolas-abril",
          "href": "https://github.com/nicolas-abril",
          "avatar": "https://avatars.githubusercontent.com/u/4893601"
        },
        {
          "username": "LunaAmora",
          "href": "https://github.com/LunaAmora",
          "avatar": "https://avatars.githubusercontent.com/u/19491161"
        },
        {
          "username": "edusporto",
          "href": "https://github.com/edusporto",
          "avatar": "https://avatars.githubusercontent.com/u/30930225"
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
      "forks": 1608,
      "added_stars": 3928,
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
      "author": "krillinai",
      "repo": "OpenCreator",
      "avatar": "https://github.com/krillinai.png",
      "repo_link": "https://github.com/krillinai/OpenCreator",
      "desc": "Formerly KrillinAI. Open-source AI workspace for creators, powered by Codex. Create videos, images, voice, avatars, video translation, and edits with Agents in one place.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1270,
      "added_stars": 961,
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
      "author": "Tencent",
      "repo": "BrowserSkill",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/BrowserSkill",
      "desc": "Let AI agents use your real, logged-in browser without interrupting your work. CLI + extension for browser automation across any shell-capable AI agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 523,
      "added_stars": 2115,
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
      "author": "Crosstalk-Solutions",
      "repo": "project-nomad",
      "avatar": "https://github.com/Crosstalk-Solutions.png",
      "repo_link": "https://github.com/Crosstalk-Solutions/project-nomad",
      "desc": "Project NOMAD is an offline-first knowledge and education server. Wikipedia, thousands of books, courses, maps, and optional local AI, all running on hardware you own with no internet required.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3825,
      "added_stars": 1316,
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
      "author": "LibreChat-AI",
      "repo": "LibreChat",
      "avatar": "https://github.com/LibreChat-AI.png",
      "repo_link": "https://github.com/LibreChat-AI/LibreChat",
      "desc": "Enhanced ChatGPT Clone: Features Agents, MCP, Skills, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, GPT-5, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions, Secure Multi-User Auth, Presets, open-source for self-hosting. Active",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9212,
      "added_stars": 689,
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
      "author": "wonderwhy-er",
      "repo": "DesktopCommanderMCP",
      "avatar": "https://github.com/wonderwhy-er.png",
      "repo_link": "https://github.com/wonderwhy-er/DesktopCommanderMCP",
      "desc": "This is MCP server for Claude that gives it terminal control, file system search and diff file editing capabilities",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1219,
      "added_stars": 121,
      "builtBy": [
        {
          "username": "wonderwhy-er",
          "href": "https://github.com/wonderwhy-er",
          "avatar": "https://avatars.githubusercontent.com/u/1150639"
        },
        {
          "username": "serg33v",
          "href": "https://github.com/serg33v",
          "avatar": "https://avatars.githubusercontent.com/u/989699"
        },
        {
          "username": "edgarsskore",
          "href": "https://github.com/edgarsskore",
          "avatar": "https://avatars.githubusercontent.com/u/22543693"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "dmitry-ottic-ai",
          "href": "https://github.com/dmitry-ottic-ai",
          "avatar": "https://avatars.githubusercontent.com/u/181032508"
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
      "forks": 968,
      "added_stars": 2103,
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
      "author": "yikart",
      "repo": "AiToEarn",
      "avatar": "https://github.com/yikart.png",
      "repo_link": "https://github.com/yikart/AiToEarn",
      "desc": "Let's use AI to Earn!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4302,
      "added_stars": 412,
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
      "author": "ZuodaoTech",
      "repo": "everyone-can-use-english",
      "avatar": "https://github.com/ZuodaoTech.png",
      "repo_link": "https://github.com/ZuodaoTech/everyone-can-use-english",
      "desc": "人人都能用英语",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5241,
      "added_stars": 697,
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
    },
    {
      "author": "tonyantony300",
      "repo": "dashbeam",
      "avatar": "https://github.com/tonyantony300.png",
      "repo_link": "https://github.com/tonyantony300/dashbeam",
      "desc": "Share files nearby and beyond.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 605,
      "added_stars": 191,
      "builtBy": [
        {
          "username": "tonyantony300",
          "href": "https://github.com/tonyantony300",
          "avatar": "https://avatars.githubusercontent.com/u/54979586"
        },
        {
          "username": "WangJie-Mant",
          "href": "https://github.com/WangJie-Mant",
          "avatar": "https://avatars.githubusercontent.com/u/44126814"
        },
        {
          "username": "blackmouse572",
          "href": "https://github.com/blackmouse572",
          "avatar": "https://avatars.githubusercontent.com/u/77144199"
        },
        {
          "username": "gotnoklu",
          "href": "https://github.com/gotnoklu",
          "avatar": "https://avatars.githubusercontent.com/u/46298149"
        },
        {
          "username": "rklaehn",
          "href": "https://github.com/rklaehn",
          "avatar": "https://avatars.githubusercontent.com/u/248257"
        }
      ]
    },
    {
      "author": "ahmedkhaleel2004",
      "repo": "gitdiagram",
      "avatar": "https://github.com/ahmedkhaleel2004.png",
      "repo_link": "https://github.com/ahmedkhaleel2004/gitdiagram",
      "desc": "Free, simple, fast interactive diagrams and videos for any GitHub repository",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1305,
      "added_stars": 754,
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
      "title": "What do you check first when taking over an existing web app?",
      "url": "https://www.reddit.com/r/webdev/comments/1wpw9zz/what_do_you_check_first_when_taking_over_an/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wpw9zz/what_do_you_check_first_when_taking_over_an/",
      "author": "/u/UKAD_LLC",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Say the app is live, needs regular updates, and the documentation is thin. Do you start with the code, deployment setup, logs, or a conversation with the previous team? &#32; submitted by &#32; /u/UKAD_LLC [link] &#32; [comments]",
      "published": "2026-09-25T13:24:25+00:00"
    },
    {
      "title": "CAPTCHAs don't prove you're human - they prove you're American",
      "url": "https://shkspr.mobi/blog/2017/11/captchas-dont-prove-youre-human-they-prove-youre-american/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wqi5ai/captchas_dont_prove_youre_human_they_prove_youre/",
      "author": "/u/big_hole_energy",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/big_hole_energy [link] &#32; [comments]",
      "published": "2026-09-26T05:21:47+00:00"
    },
    {
      "title": "Interactive Interview Training- Backend and System Design",
      "url": "https://www.reddit.com/r/webdev/comments/1wps37a/interactive_interview_training_backend_and_system/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wps37a/interactive_interview_training_backend_and_system/",
      "author": "/u/fxckzxck",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey guys I am a front end and get a lot of interviews for full stack or FDE roles. They always ask about backend, system design, data architecture, concurrent and scalable systems. Some tasks ask for leetcode or codility upfront. Any good interactive training platforms? Like Scrimba or something for quickly putting together system design. &#32; submitted by &#32; /u/fxckzxck [link] &#32; [comments]",
      "published": "2026-09-25T09:47:55+00:00"
    },
    {
      "title": "Image upload file type verification on FastAPI",
      "url": "https://www.reddit.com/r/webdev/comments/1wq7a7w/image_upload_file_type_verification_on_fastapi/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wq7a7w/image_upload_file_type_verification_on_fastapi/",
      "author": "/u/rouge818",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I have an ecommerce chat widget that allows users to send photos of products they’ve looking for. I would like to make sure the files being uploaded are true images (jpeg, png, webp). So far I have come up with two levels of checks on the files. First, checking the content-type mime in the request header. If it is not an image then upload is rejected. If it appears to be an image, then file is sent to level 2 check (still in memory). The level 2 check is using the python magic library to read the first 2kb or so of the file and identify true mime type from there. If not an image type, then file is rejected. Would this be a good approach? Or are there better ways to do this? The files will likely be stored in cloudflare r2, so I’m not worried about their execution, but want to avoid bad files sitting around in storage anyway. &#32; submitted by &#32; /u/rouge818 [link] &#32; [comments]",
      "published": "2026-09-25T20:39:42+00:00"
    },
    {
      "title": "Go full stack template",
      "url": "https://www.reddit.com/r/webdev/comments/1wpwir9/go_full_stack_template/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wpwir9/go_full_stack_template/",
      "author": "/u/N_Sin",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Put together a small starter template for building web apps with Go + Templ + Datastar + sqlc . It&#39;s plain net/http with no extra framework on top. It has two examples you can copy from: a todo list with live search, where every change updates the page over SSE live crypto prices, streamed from Coinbase and pushed to the browser over one long SSE connection https://github.com/naftulisinger/datastar-template Stars &amp; Feedback welcome! &#32; submitted by &#32; /u/N_Sin [link] &#32; [comments]",
      "published": "2026-09-25T13:35:12+00:00"
    },
    {
      "title": "twblazor - .NET Tailwind CSS components library",
      "url": "https://www.reddit.com/r/webdev/comments/1wqbyqe/twblazor_net_tailwind_css_components_library/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wqbyqe/twblazor_net_tailwind_css_components_library/",
      "author": "/u/JacKk_01",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "twblazor.com • GitHub I am nervous as hell to post this here; but thought hey why not? please note - this is still a passion project and work in progress. Stars and shares are appreciated massively! I’ve been working on this for a while now, and have finally made it open source under the MIT license. I&#39;ve been working with .NET &amp; Blazor for multiple years and have never found a framework that suites my workflow, hence why a couple of years back, I decided to create my own. I have tried everything from MudBlazor, Syncfusion, Blazorise, Telerik and even Fluent UI by MS themselves. Don&#39;t get me wrong these are all brilliant libraries, but none of them really had the customisation I was looking for in a library, I have worked at multiple companies also using Blazor professionally and all have bumped into similar issues with these libraries... Styling it to match brands, and customising the UI exactly to their spec. I must admit it can be easier for some of the paid choices listed above; but for solo devs and small businesses, paying for these can be very costly. This is where tailwind comes into play, yes love it or hate it. It&#39;s widely adopted by the industry and very easy to customise. Which is why typed classes, passed directly to well built components is a perfect way to style very precisely what you want; and is the reason I built twblazor. Extensive customisation, a wrapper around each component which means you can import component styling easily. If you don&#39;t want table styling in your CSS don&#39;t include it! As simple as that, and if you want a certain style on your tables you can add it in. Same for absolutely every single component. It essentially gives you freedom existing libraries don&#39;t - with a single stylesheet compiled by you (well... tailwind). builder.Services.AddTwBlazor(_ =&gt; { }, () =&gt; new TwBlazorTheme { // ...position, colors, shadows, rounded... Components = [ new TwButtonTheme { Base = &quot;inline-flex items-center gap-2 rounded-full font-semibold&quot;, Padding = &quot;px-8&quot; }, new TwInputTheme { DefaultInputVariant = InputVariant.Outlined } // ...every other component you use ] }); These typed classes are then picked up by tailwinds compiler and boom - you have your own stylesheet. Happy to receive any feedback, suggestions or ideas. Again this is an ongoing passion project; so as you can imagine I have plenty of ideas for new components from dashboard charts, excel like editors, calendar schedulers to text editor components, I mean the list goes on... I&#39;m in the process of refining and fleshing out my project board. Please also feel free to collaborate, I would love to have a forum in the future with user shared theme classes. &#32; submitted by &#32; /u/JacKk_01 [link] &#32; [comments]",
      "published": "2026-09-26T00:02:32+00:00"
    },
    {
      "title": "relearning touch typing turned into me building this",
      "url": "https://www.reddit.com/r/webdev/comments/1wqhgse/relearning_touch_typing_turned_into_me_building/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wqhgse/relearning_touch_typing_turned_into_me_building/",
      "author": "/u/ButteryBiscuiit",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "https://preview.redd.it/lwhsfglpnsrh1.png?width=2363&amp;format=png&amp;auto=webp&amp;s=703882b186b892eb8048a3d039a230376ed03296 started as me trying to fix my typing and somehow turned into this added a 412k word pool, punctuation modes, ranked leaderboards and server-side score validation somebody already hit 189 wpm at 98.3% which is mildly horrifying https://blacklatchstudios.com/typing/challenge/ &#32; submitted by &#32; /u/ButteryBiscuiit [link] &#32; [comments]",
      "published": "2026-09-26T04:44:09+00:00"
    },
    {
      "title": "Compiling Hono with Perry",
      "url": "https://geastack.com/blog-hono-with-perry",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wq3fdv/compiling_hono_with_perry/",
      "author": "/u/arbayi",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/arbayi [link] &#32; [comments]",
      "published": "2026-09-25T18:07:38+00:00"
    },
    {
      "title": "Mac vs Linux for new workstation",
      "url": "https://www.reddit.com/r/webdev/comments/1wq26ol/mac_vs_linux_for_new_workstation/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wq26ol/mac_vs_linux_for_new_workstation/",
      "author": "/u/Jeferson9",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Not sure if this is the best sub for this question; from a developers perspective who have had the freedom to choose what platform they work in I&#39;m curious: I&#39;m a long time native linux and wsl user, for a new workstation you&#39;d use as a desktop and remote dev server, how bad are the macos tradeoffs over bare metal linux (or even wsl)? I prefer to be on macos over windows but macos has notoriously bad filesystem performance. (Theo recently made a video on this) I&#39;ve also heard it has quirks for gnu utils too. These reasons have pushed me toward getting a cheap MacBook but investing most of my money in a headless linux box. All of my projects will live on linux but I&#39;ll being using macos to access and build there. But I&#39;m wondering if that&#39;s unnecessary. Do people actually build on macos these days? Are the quirks and filesystem performance issues overstated? &#32; submitted by &#32; /u/Jeferson9 [link] &#32; [comments]",
      "published": "2026-09-25T17:18:41+00:00"
    },
    {
      "title": "What would you use today for a simple static business website?",
      "url": "https://www.reddit.com/r/webdev/comments/1wpxa6w/what_would_you_use_today_for_a_simple_static/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wpxa6w/what_would_you_use_today_for_a_simple_static/",
      "author": "/u/Mental_Gur9512",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I need to make a simple website for a teaching service in my city. I want it to look modern and professional and hopefully get into the top 10 Google results for local searches. It will only have some text, basic information, a few good photos and contact details. Nothing complicated. What would you use for something like this? An AI website builder, AI coding tool or something else? I don&#39;t want to use Wordpress. For hosting I was thinking about something simple like Cloudflare Pages or GitHub Pages with a local domain. I am looking for free. Also, what would you recommend for local SEO and good free/paid stock photos? &#32; submitted by &#32; /u/Mental_Gur9512 [link] &#32; [comments]",
      "published": "2026-09-25T14:06:51+00:00"
    },
    {
      "title": "I made a single HTML file that creates Windows, Linux and macOS installers offline.",
      "url": "https://www.reddit.com/r/webdev/comments/1wqg8v5/i_made_a_single_html_file_that_creates_windows/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wqg8v5/i_made_a_single_html_file_that_creates_windows/",
      "author": "/u/Blockpair",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "What it does: Easily make installers for all your projects directly from a browser. You can even save the whole page as a single file and it keeps working offline. Introduction TiddlyInstall is based on the observation that programs written for runtimes like Python, Nodejs, and others -- all follow the same basic pattern: they need a runtime installed and then the software. Existing approaches like freezing apps or trying to package it as an exe often break. Or require insane struggle by the developers. The simplest possible approach is to install the runtime on a users computer, isolated, with the package inside it. It is more wasteful in terms of disk space -- but can be generalised to build reusable installers that work for just about any language. Reusable installers A reusable installer reads its own meta-data to decide on the runtime to install and the project. Linux and Mac are supported through a bash script while all windows versions use an NSIS program. The unusual thing about this is once you build the reusable installers since it&#39;s just meta-data everything can be edited inside the browser. No new compilations are needed. It&#39;s a very elegant system. Try it out yourself: https://robertsdotpm.github.io/_static/tiddlyinstall.html Github: https://github.com/robertsdotpm/tiddlyinstall &#32; submitted by &#32; /u/Blockpair [link] &#32; [comments]",
      "published": "2026-09-26T03:38:25+00:00"
    },
    {
      "title": "Deployment and traffic testing?",
      "url": "https://www.reddit.com/r/webdev/comments/1wpx9hd/deployment_and_traffic_testing/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wpx9hd/deployment_and_traffic_testing/",
      "author": "/u/potatokid07",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hello, wise r/webdev ! I vibe-coded a web application for an upcoming conference in my area. I hope the phrase &#39;vibecoding&#39; does not deter you. It is supposed to be a personal solution for the conference I am attending--a just for fun kind of thing. I am familiar with most of the people and the people running the conference. I have shared it with some of potential attendees and so far they like it and they are looking forward to try it during the conference. I did pose it as a personal project. The downside is I have no freaking clue when it comes to deployment, and by deployment I mean understanding what kind of infrastructure or services I need in order to make it seamless--i.e., loading time, avoiding traffic crash. It is supposed to be lightweight (just CRUD with a little computation on the query retrieval). I&#39;m using Python/Flask as my framework, so hopefully gunicorn is good enough to handle those. I&#39;m curious what kind of tests or where should I host it if I expect like, 500 users but 20-30 concurrent requests. I&#39;m looking forward to &quot;testing day&quot;. So far I have been hosting it in my personal AWS and just slap a cloudfront link (also which instance should I use?). If there&#39;s any recommendation or tests, I would greatly appreciate that! I&#39;m not making money out of it--and even if people do like it a lot--I&#39;ll just open source it since I don&#39;t think there&#39;s anything proprietary (or requires my blood and sweat) else than the interaction design considerations. But operational traffic is what I care about the most (and least knowledgeable) and would love to understand that. For this, I don&#39;t trust AI enough to &#39;perform&#39; tests for me. Just feel like I need a second opinion from an actual human being/expert or at least someone with experience 🥲 willing to get my hands dirty with hand coding! &#32; submitted by &#32; /u/potatokid07 [link] &#32; [comments]",
      "published": "2026-09-25T14:06:03+00:00"
    },
    {
      "title": "Showoff Saturday: I gave my coding agent my real, signed-in Chrome so it can debug the app I am actually looking at",
      "url": "https://www.reddit.com/r/webdev/comments/1wq6sbo/showoff_saturday_i_gave_my_coding_agent_my_real/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wq6sbo/showoff_saturday_i_gave_my_coding_agent_my_real/",
      "author": "/u/prakersh",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "My project, OnBridge: a Chrome extension plus a small local MCP server that lets Claude Code, Codex, Cursor or Gemini CLI drive the Chrome I already have open. Free, GPL-3.0, and there is no server of mine involved. To be fair up front: much of what a coding agent does in a browser, Playwright already does well. Reproducing a bug on localhost, reading the console, clicking through a flow, even reusing a login with storageState. What Playwright is not built for is doing things on my behalf in my own browser. With OnBridge I can ask for something like &quot;search Amazon for a USB-C hub, compare the top three, add the best one to my cart and place the order&quot;, and the agent does it in my signed-in Chrome, with my saved address and payment method, the way I would. The same goes for filling a form from a file, working through a vendor portal behind SSO and 2FA, or triaging GitHub notifications. No scripted login, no copied cookies, no fresh headless profile for sites to flag. The first field test was an Amazon.in search. On bot checks: in a quick test, OnBridge passed scrapingcourse.com&#39;s Cloudflare challenge page and every BrowserScan bot check, CDP included, with no click from me. To be fair, Playwright MCP&#39;s default headed Chrome passed the same tests. What it lacks is my session: it landed on Reddit&#39;s login page, where OnBridge was already signed in. Acting on my behalf only works if spending money stays my decision: The agent acts, I approve what matters. The side panel shows every action as it happens. A click whose label reads like Place order, Pay, Delete, Send or Submit waits for Allow; the screenshot shows a &quot;Place order - $249&quot; click held: https://github.com/prakersh/onbridge/blob/main/docs/screenshots/onbridge.png . No answer in 25 seconds means denied. The approval mode can only be changed in the panel, never by the agent. It only gets what I grant. A tab, a window or the whole browser, and only after I press a button. Grants cannot overlap, so two agents can work in two windows without touching each other&#39;s tabs. Real input, not dispatchEvent. Synthetic events arrive with isTrusted: false, and native form submission, drag-and-drop, canvas apps and rich editors ignore them. OnBridge sends clicks and keys through the DevTools Protocol Input domain via chrome.debugger, including inside open shadow roots and cross-origin iframes. If DevTools is already open on the tab, the debugger cannot attach, so it falls back to synthetic events and the side panel says so. It still covers the dev loop too: it reads console output and network requests while it reproduces a bug in the tab where I am already signed in, with authorization and cookie header values redacted before the agent sees them. Setup is the extension plus one line: claude mcp add onbridge -- npx -y @onllm-dev/onbridge-mcp GitHub: https://github.com/prakersh/onbridge Chrome Web Store: https://chromewebstore.google.com/detail/onbridge/minhhfibhfnjdcgiipmcbfgclmeineca Where would you draw the line on what an agent may do in your real browser without asking? Right now anything that reads like pay, delete, send or submit waits for a click. &#32; submitted by &#32; /u/prakersh [link] &#32; [comments]",
      "published": "2026-09-25T20:19:55+00:00"
    },
    {
      "title": "Are people really pretending that their code before AI tools were better than the Vibecoded AI slops these days?",
      "url": "https://www.reddit.com/r/webdev/comments/1wqbogn/are_people_really_pretending_that_their_code/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wqbogn/are_people_really_pretending_that_their_code/",
      "author": "/u/bricksandcanvas",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Engineer for more than 15 years and worked with different industries over my whole career. Worked alone, on small, medium and large teams in different capacities. You get the idea. I&#39;m not gonna say that my code was the best, and that it was well thought out of, wrote the best piece of code that my grandchildren will be proud of. Sometimes you just have to find the best way to implement something because your PM demanded it be pushed by Thursday? a hacky fix because you can&#39;t think of a better way on implementing it? Legacy code that the engineer that worked on it died 10 years ago? Granted theres an ocean of vibe coded apps that should not see the light of day but I think a lot of devs and engineers are just standing on their high horse these days to push people down. What do you guys think? &#32; submitted by &#32; /u/bricksandcanvas [link] &#32; [comments]",
      "published": "2026-09-25T23:50:00+00:00"
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
      "forks": 2977,
      "added_stars": 20100,
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
      "author": "Tencent",
      "repo": "WeKnora",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/WeKnora",
      "desc": "Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent, and a self-maintaining Wiki.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4052,
      "added_stars": 9591,
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
      "author": "agent-substrate",
      "repo": "substrate",
      "avatar": "https://github.com/agent-substrate.png",
      "repo_link": "https://github.com/agent-substrate/substrate",
      "desc": "Agent Substrate: the core system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 444,
      "added_stars": 2178,
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
      "author": "JetBrains",
      "repo": "go-modern-guidelines",
      "avatar": "https://github.com/JetBrains.png",
      "repo_link": "https://github.com/JetBrains/go-modern-guidelines",
      "desc": "Help AI coding agents write modern Go",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 120,
      "added_stars": 2829,
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
      "author": "majd",
      "repo": "ipatool",
      "avatar": "https://github.com/majd.png",
      "repo_link": "https://github.com/majd/ipatool",
      "desc": "Command-line tool that allows you to search for iOS, iPadOS, tvOS, visionOS, and macOS apps on the App Store, and download .ipa or macOS .pkg app packages.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 948,
      "added_stars": 1538,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 248,
      "added_stars": 3058,
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
      "author": "gtsteffaniak",
      "repo": "filebrowser",
      "avatar": "https://github.com/gtsteffaniak.png",
      "repo_link": "https://github.com/gtsteffaniak/filebrowser",
      "desc": "📂 Web File Browser",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 445,
      "added_stars": 567,
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
      "author": "cloudflare",
      "repo": "cloudflared",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflared",
      "desc": "Cloudflare Tunnel client",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1455,
      "added_stars": 576,
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
      "added_stars": 4265,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1046,
      "added_stars": 1151,
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
      "author": "tailscale",
      "repo": "tailcat",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailcat",
      "desc": "like netcat, but over Tailscale's data plane, without Tailscale's control plane",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 328,
      "added_stars": 7864,
      "builtBy": [
        {
          "username": "bradfitz",
          "href": "https://github.com/bradfitz",
          "avatar": "https://avatars.githubusercontent.com/u/2621"
        },
        {
          "username": "danderson",
          "href": "https://github.com/danderson",
          "avatar": "https://avatars.githubusercontent.com/u/1918"
        },
        {
          "username": "andrew-d",
          "href": "https://github.com/andrew-d",
          "avatar": "https://avatars.githubusercontent.com/u/1079173"
        },
        {
          "username": "raggi",
          "href": "https://github.com/raggi",
          "avatar": "https://avatars.githubusercontent.com/u/348"
        },
        {
          "username": "jwhited",
          "href": "https://github.com/jwhited",
          "avatar": "https://avatars.githubusercontent.com/u/10344482"
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
      "forks": 293,
      "added_stars": 663,
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
          "username": "gjermundgaraba",
          "href": "https://github.com/gjermundgaraba",
          "avatar": "https://avatars.githubusercontent.com/u/1344105"
        }
      ]
    },
    {
      "author": "projectdiscovery",
      "repo": "katana",
      "avatar": "https://github.com/projectdiscovery.png",
      "repo_link": "https://github.com/projectdiscovery/katana",
      "desc": "A next-generation crawling and spidering framework.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1188,
      "added_stars": 258,
      "builtBy": [
        {
          "username": "Mzack9999",
          "href": "https://github.com/Mzack9999",
          "avatar": "https://avatars.githubusercontent.com/u/13421144"
        },
        {
          "username": "dogancanbakir",
          "href": "https://github.com/dogancanbakir",
          "avatar": "https://avatars.githubusercontent.com/u/65292895"
        },
        {
          "username": "ehsandeep",
          "href": "https://github.com/ehsandeep",
          "avatar": "https://avatars.githubusercontent.com/u/8293321"
        },
        {
          "username": "geeknik",
          "href": "https://github.com/geeknik",
          "avatar": "https://avatars.githubusercontent.com/u/466878"
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
      "forks": 1589,
      "added_stars": 2609,
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
      "author": "seaweedfs",
      "repo": "seaweedfs",
      "avatar": "https://github.com/seaweedfs.png",
      "repo_link": "https://github.com/seaweedfs/seaweedfs",
      "desc": "SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3010,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4655,
      "added_stars": 1182,
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
      "author": "glanceapp",
      "repo": "glance",
      "avatar": "https://github.com/glanceapp.png",
      "repo_link": "https://github.com/glanceapp/glance",
      "desc": "A self-hosted dashboard that puts all your feeds in one place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1465,
      "added_stars": 720,
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
      "author": "authelia",
      "repo": "authelia",
      "avatar": "https://github.com/authelia.png",
      "repo_link": "https://github.com/authelia/authelia",
      "desc": "The Single Sign-On Multi-Factor portal for web apps. OpenID Certified™ and Post-Quantum Cryptography Ready.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1492,
      "added_stars": 448,
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
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3207,
      "added_stars": 3080,
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
      "author": "evcc-io",
      "repo": "evcc",
      "avatar": "https://github.com/evcc-io.png",
      "repo_link": "https://github.com/evcc-io/evcc",
      "desc": "solar charging ☀️🚘",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1524,
      "added_stars": 212,
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
      "author": "e2b-dev",
      "repo": "runtime",
      "avatar": "https://github.com/e2b-dev.png",
      "repo_link": "https://github.com/e2b-dev/runtime",
      "desc": "The runtime behind every E2B stack: Cloud, Enterprise, and your own machine.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 446,
      "added_stars": 404,
      "builtBy": [
        {
          "username": "ValentaTomas",
          "href": "https://github.com/ValentaTomas",
          "avatar": "https://avatars.githubusercontent.com/u/49156497"
        },
        {
          "username": "jakubno",
          "href": "https://github.com/jakubno",
          "avatar": "https://avatars.githubusercontent.com/u/50249709"
        },
        {
          "username": "dobrac",
          "href": "https://github.com/dobrac",
          "avatar": "https://avatars.githubusercontent.com/u/4323173"
        },
        {
          "username": "mlejva",
          "href": "https://github.com/mlejva",
          "avatar": "https://avatars.githubusercontent.com/u/5136688"
        },
        {
          "username": "djeebus",
          "href": "https://github.com/djeebus",
          "avatar": "https://avatars.githubusercontent.com/u/669730"
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
      "forks": 623,
      "added_stars": 1164,
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
      "forks": 280,
      "added_stars": 2725,
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
      "forks": 4177,
      "added_stars": 24027,
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
      "forks": 2955,
      "added_stars": 27288,
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
      "forks": 3247,
      "added_stars": 5561,
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
      "author": "anthropics",
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5437,
      "added_stars": 3088,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8139,
      "added_stars": 7756,
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
      "forks": 4219,
      "added_stars": 12419,
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
      "forks": 3637,
      "added_stars": 4392,
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
      "author": "experientiallabs",
      "repo": "experiential",
      "avatar": "https://github.com/experientiallabs.png",
      "repo_link": "https://github.com/experientiallabs/experiential",
      "desc": "Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend better models, and train a specialized model you own.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 209,
      "added_stars": 6592,
      "builtBy": [
        {
          "username": "SilenNaihin",
          "href": "https://github.com/SilenNaihin",
          "avatar": "https://avatars.githubusercontent.com/u/44129612"
        },
        {
          "username": "kfallah",
          "href": "https://github.com/kfallah",
          "avatar": "https://avatars.githubusercontent.com/u/9440350"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 1856,
      "added_stars": 2674,
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
      "added_stars": 5095,
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
      "author": "abi",
      "repo": "screenshot-to-code",
      "avatar": "https://github.com/abi.png",
      "repo_link": "https://github.com/abi/screenshot-to-code",
      "desc": "Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9738,
      "added_stars": 5420,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1587,
      "added_stars": 3385,
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
      "author": "petergyang",
      "repo": "no-ai-slop",
      "avatar": "https://github.com/petergyang.png",
      "repo_link": "https://github.com/petergyang/no-ai-slop",
      "desc": "Removes 20+ patterns of AI slop from any piece of writing.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 773,
      "added_stars": 5369,
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
      "author": "dgtlmoon",
      "repo": "changedetection.io",
      "avatar": "https://github.com/dgtlmoon.png",
      "repo_link": "https://github.com/dgtlmoon/changedetection.io",
      "desc": "Best and simplest tool for website change detection, web page monitoring, and website change alerts. Perfect for tracking content changes, price drops, restock alerts, and website defacement monitoring—all for free or enjoy our SaaS plan!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2094,
      "added_stars": 1356,
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
      "author": "strands-agents",
      "repo": "harness-sdk",
      "avatar": "https://github.com/strands-agents.png",
      "repo_link": "https://github.com/strands-agents/harness-sdk",
      "desc": "Build an agent harness and control it end-to-end. Open-source SDK for production AI agents in Python & TypeScript - any model, any cloud.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1256,
      "added_stars": 1429,
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
      "forks": 590,
      "added_stars": 3816,
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
      "author": "k2-fsa",
      "repo": "OmniVoice",
      "avatar": "https://github.com/k2-fsa.png",
      "repo_link": "https://github.com/k2-fsa/OmniVoice",
      "desc": "High-Quality Voice Cloning TTS for 600+ Languages",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2087,
      "added_stars": 4525,
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
      "author": "Asabeneh",
      "repo": "30-Days-Of-Python",
      "avatar": "https://github.com/Asabeneh.png",
      "repo_link": "https://github.com/Asabeneh/30-Days-Of-Python",
      "desc": "The 30 Days of Python programming challenge is a step-by-step guide to learn the Python programming language in 30 days. This challenge may take more than 100 days. Follow your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13598,
      "added_stars": 2968,
      "builtBy": [
        {
          "username": "Asabeneh",
          "href": "https://github.com/Asabeneh",
          "avatar": "https://avatars.githubusercontent.com/u/9008063"
        },
        {
          "username": "yuzaiakira",
          "href": "https://github.com/yuzaiakira",
          "avatar": "https://avatars.githubusercontent.com/u/88355673"
        },
        {
          "username": "pkiczko",
          "href": "https://github.com/pkiczko",
          "avatar": "https://avatars.githubusercontent.com/u/36337174"
        },
        {
          "username": "Momokh99",
          "href": "https://github.com/Momokh99",
          "avatar": "https://avatars.githubusercontent.com/u/178165822"
        },
        {
          "username": "kjs1019",
          "href": "https://github.com/kjs1019",
          "avatar": "https://avatars.githubusercontent.com/u/68845945"
        }
      ]
    },
    {
      "author": "roboflow",
      "repo": "rf-detr",
      "avatar": "https://github.com/roboflow.png",
      "repo_link": "https://github.com/roboflow/rf-detr",
      "desc": "RF-DETR is a real-time object detection and segmentation model architecture developed by Roboflow, SOTA on COCO, designed for fine-tuning. [ICLR 2026]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1214,
      "added_stars": 554,
      "builtBy": [
        {
          "username": "Borda",
          "href": "https://github.com/Borda",
          "avatar": "https://avatars.githubusercontent.com/u/6035284"
        },
        {
          "username": "SkalskiP",
          "href": "https://github.com/SkalskiP",
          "avatar": "https://avatars.githubusercontent.com/u/26109316"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "PDFMathTranslate",
      "repo": "PDFMathTranslate",
      "avatar": "https://github.com/PDFMathTranslate.png",
      "repo_link": "https://github.com/PDFMathTranslate/PDFMathTranslate",
      "desc": "[EMNLP 2025 Demo] PDF scientific paper translation with preserved formats - 基于 AI 完整保留排版的 PDF 文档全文双语翻译，支持 Google/DeepL/Ollama/OpenAI 等服务，提供 CLI/GUI/MCP/Docker/Zotero",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3340,
      "added_stars": 941,
      "builtBy": [
        {
          "username": "Byaidu",
          "href": "https://github.com/Byaidu",
          "avatar": "https://avatars.githubusercontent.com/u/21212051"
        },
        {
          "username": "awwaawwa",
          "href": "https://github.com/awwaawwa",
          "avatar": "https://avatars.githubusercontent.com/u/8493196"
        },
        {
          "username": "reycn",
          "href": "https://github.com/reycn",
          "avatar": "https://avatars.githubusercontent.com/u/11225092"
        },
        {
          "username": "hellofinch",
          "href": "https://github.com/hellofinch",
          "avatar": "https://avatars.githubusercontent.com/u/42131198"
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
      "upvotes": "2",
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
      "title": "What was your win this week!?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-odj",
      "tags": "weeklyretro",
      "reactions": 22,
      "comments": 9,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Disappeared Since March: Taking a Long Break Was My Best Decision Yet",
      "description": "If you checked my profile recently, you probably noticed my page has been completely quiet since...",
      "url": "https://dev.to/maame-codes/disappeared-since-march-taking-a-long-break-was-my-best-decision-yet-1n45",
      "tags": "",
      "reactions": 67,
      "comments": 19,
      "reading_time": 2,
      "author": "maame-codes"
    },
    {
      "title": "I Turned DEV.to Into a Walkable 3D Library — Debugging It Has Been a Nightmare",
      "description": "DEV Library is my idea of first-person 3D reimagining of DEV.to. Not a themed scene with some...",
      "url": "https://dev.to/mikachu/i-turned-devto-into-a-walkable-3d-library-debugging-it-has-been-a-nightmare-4lkd",
      "tags": "buildinpublic, webdev, nextjs, ai",
      "reactions": 62,
      "comments": 24,
      "reading_time": 7,
      "author": "mikachu"
    },
    {
      "title": "Claude on Google Cloud workshop | NYC | 9/30",
      "description": "On Wednesday, September 30, Anthropic and Google Cloud are co-hosting a hands-on developer workshop...",
      "url": "https://dev.to/googleai/claude-on-google-cloud-workshop-nyc-930-17jl",
      "tags": "eventsinyourcity, claude, googlecloud, ai",
      "reactions": 12,
      "comments": 1,
      "reading_time": 1,
      "author": "pugsandprincesses"
    },
    {
      "title": "Building File4Base: The Modern, Open-Source Alternative to old file bases (Powered by Antigravity)",
      "description": "For decades, platforms like Claris FileMaker, Microsoft Access, and 4D enabled businesses to build...",
      "url": "https://dev.to/gde/building-file4base-the-modern-open-source-alternative-to-file4base-powered-by-antigravity-47g7",
      "tags": "opensource, flutter, go, postgres",
      "reactions": 8,
      "comments": 0,
      "reading_time": 2,
      "author": "marioezquerro"
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
      "title": "Claude Opus 5.5 is now available on Google Cloud",
      "description": "Everyday complex tasks? No problem. Opus 5.5 handles long-running coding and knowledge work while...",
      "url": "https://dev.to/googleai/claude-opus-55-is-now-available-on-google-cloud-2oh",
      "tags": "claude, googlecloud",
      "reactions": 15,
      "comments": 0,
      "reading_time": 1,
      "author": "pugsandprincesses"
    },
    {
      "title": "Welcome Thread - v 394",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-394-22l2",
      "tags": "welcome",
      "reactions": 46,
      "comments": 201,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-2agl",
      "tags": "top7, discuss",
      "reactions": 32,
      "comments": 23,
      "reading_time": 2,
      "author": "heyitsjem"
    },
    {
      "title": "A 4 GB Laptop GPU vs a 6-Core CPU on Gemma 4, Re-Measured in ABBA Order: 4.1x",
      "description": "Gemma 4 E2B q4_0 served by llama.cpp on one laptop, CPU-only and on a GTX 1650 Ti, rebuilt on CUDA 13.4 and re-measured in CPU, GPU, GPU, CPU order with a temperature gate. The card takes decode by 4.14x, and run order moves the answer by about 2%.",
      "url": "https://dev.to/gde/a-4-gb-laptop-gpu-vs-a-6-core-cpu-on-gemma-4-re-measured-in-abba-order-41x-5g56",
      "tags": "gemma, llamacpp, cuda, benchmarking",
      "reactions": 9,
      "comments": 2,
      "reading_time": 11,
      "author": "xbill"
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
      "title": "There is more to code review than (automatable) detection",
      "url": "https://www.adaptivecapacitylabs.com/2026/08/24/there-is-more-to-code-review-than-automatable-detection/",
      "score": 1,
      "comments": 0,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "ivunna"
    },
    {
      "title": "Ukraine's army is experimenting with using Steam Decks to remote-control gun turrets (2023)",
      "url": "https://www.pcgamer.com/ukraines-army-is-experimenting-with-using-steam-decks-to-remote-control-gun-turrets/",
      "score": 2,
      "comments": 0,
      "tags": [
        "hardware"
      ],
      "id": "crvszb"
    },
    {
      "title": "Keep if clauses side-effect free",
      "url": "https://www.teamten.com/lawrence/programming/keep-if-clauses-side-effect-free.html",
      "score": 3,
      "comments": 0,
      "tags": [
        "practices",
        "programming"
      ],
      "id": "buroqq"
    },
    {
      "title": "Bastardica",
      "url": "https://bastardica.mitpit.com",
      "score": 1,
      "comments": 0,
      "tags": [
        "design",
        "satire"
      ],
      "id": "yv35rs"
    },
    {
      "title": "NetBSD Playing with disklabels",
      "url": "https://movq.de/blog/postings/2026-09-25/0/POSTING-en.html",
      "score": 8,
      "comments": 0,
      "tags": [
        "netbsd"
      ],
      "id": "qknavp"
    },
    {
      "title": "Let’s go whaling: Tricks for monetising mobile game players with free-to-play (2016)",
      "url": "https://www.youtube.com/watch?v=xNjI03CGkb4",
      "score": 1,
      "comments": 0,
      "tags": [
        "cogsci",
        "games",
        "video"
      ],
      "id": "qgpy7h"
    },
    {
      "title": "How to keep enjoying programming in a world of LLMs",
      "url": "https://discourse.haskell.org/t/how-to-keep-enjoying-programming-in-a-world-of-llms/14705",
      "score": 8,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "ekbatu"
    },
    {
      "title": "weave: structural merging for different languages",
      "url": "https://github.com/Ataraxy-Labs/weave",
      "score": 1,
      "comments": 0,
      "tags": [
        "rust",
        "show"
      ],
      "id": "33w4jp"
    },
    {
      "title": "Homa: The End of TCP for AI Clusters",
      "url": "https://www.youtube.com/watch?v=eZ8WWZzoaR0",
      "score": 1,
      "comments": 0,
      "tags": [
        "networking",
        "performance",
        "video"
      ],
      "id": "ue30if"
    },
    {
      "title": "Acid: A Debugger Built From A Language (1996)",
      "url": "https://inferno-os.org/inferno/papers/acidpaper.pdf",
      "score": 1,
      "comments": 0,
      "tags": [
        "debugging",
        "pdf",
        "plt"
      ],
      "id": "nzzcn0"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "specked-citrus",
      "descendants": 224,
      "id": 49849985,
      "kids": [
        49853771,
        49850707,
        49853593,
        49853539,
        49851548,
        49851111,
        49851933,
        49851159,
        49850818,
        49850655,
        49850659,
        49851585,
        49852016,
        49850766,
        49851997,
        49853797,
        49852811,
        49852247,
        49853511,
        49852223,
        49853065,
        49851405,
        49852535,
        49850858,
        49850944,
        49850497,
        49850822,
        49853493,
        49851472,
        49851387,
        49853132,
        49851830,
        49851877,
        49852711,
        49851056,
        49852313,
        49852155,
        49851436,
        49850952,
        49850945,
        49851736,
        49851730,
        49853210,
        49853577,
        49852469,
        49852846,
        49850518,
        49851537,
        49850591,
        49850993,
        49850622,
        49852091
      ],
      "score": 389,
      "time": 1790370567,
      "title": "Revealing the details of how OpenAI agents hacked Hugging Face",
      "type": "story",
      "url": "https://swarmtraces.org/"
    },
    {
      "by": "allanrbo",
      "descendants": 2,
      "id": 49853175,
      "kids": [
        49853662,
        49853630
      ],
      "score": 30,
      "time": 1790396458,
      "title": "A single function Jev-like wrapper for LLMs, including vision models",
      "type": "story",
      "url": "http://allanrbo.blogspot.com/2026/09/a-jev-like-wrapper-for-llms-including.html"
    },
    {
      "by": "ddaniel10",
      "descendants": 11,
      "id": 49853522,
      "kids": [
        49853815,
        49853725,
        49853700,
        49853719,
        49853704
      ],
      "score": 10,
      "time": 1790401006,
      "title": "Can AI Shopping Agents Be Trusted?",
      "type": "story",
      "url": "https://www.f-secure.com/en/partners/insights/can-ai-shopping-agents-be-trusted-we-built-one-to-find-out"
    },
    {
      "by": "jmvldz",
      "descendants": 212,
      "id": 49840054,
      "kids": [
        49850929,
        49851173,
        49853759,
        49853717,
        49851089,
        49853201,
        49850621,
        49853697,
        49853602,
        49852117,
        49853721,
        49853409,
        49850860,
        49852489,
        49853345,
        49852249,
        49852673,
        49852844,
        49850744,
        49852178,
        49853332,
        49851312,
        49853304,
        49852532,
        49852866,
        49852617,
        49841243,
        49852720,
        49852374,
        49852531,
        49852420,
        49840824,
        49852150,
        49852652,
        49851420,
        49852380,
        49852272,
        49850778,
        49852208,
        49853248,
        49852680,
        49851180,
        49850896,
        49852163,
        49852348,
        49852353,
        49852437,
        49852828,
        49852317,
        49853091,
        49853054,
        49852095,
        49851367,
        49852497,
        49851028,
        49853664,
        49852334,
        49840492,
        49852396
      ],
      "score": 234,
      "time": 1790308751,
      "title": "Plan mode is dead",
      "type": "story",
      "url": "https://www.aymannadeem.com/artificial/intelligence,/developer/tools/2026/09/24/plan-mode-is-dead.html"
    },
    {
      "by": "Ardakilic",
      "descendants": 109,
      "id": 49848269,
      "kids": [
        49850052,
        49848537,
        49851886,
        49849302,
        49850429,
        49853294,
        49848482,
        49848421,
        49848923,
        49850146,
        49848487,
        49850702,
        49850124,
        49848386,
        49848478,
        49849866,
        49848485,
        49849317,
        49849988,
        49849056,
        49850160,
        49850575,
        49852581,
        49849112,
        49849222,
        49849078,
        49849611
      ],
      "score": 403,
      "time": 1790361230,
      "title": "Ollaya – Ollama for open-source, Jev-style decision models",
      "type": "story",
      "url": "https://ollaya.dev/"
    },
    {
      "by": "pancomplex",
      "descendants": 78,
      "id": 49845172,
      "kids": [
        49849561,
        49851391,
        49849343,
        49849291,
        49851587,
        49845432,
        49852069,
        49852187,
        49849338,
        49849450,
        49851866,
        49849808,
        49850755,
        49852148,
        49849501,
        49852508,
        49849358,
        49849345,
        49852963,
        49849469,
        49850261,
        49849868
      ],
      "score": 183,
      "text": "Hey HN! Wanted to share a fun project I&#x27;ve been hacking on. Given Jev can make decisions really fast (but not fast enough to play Doom yet sadly), I wanted to try and push it to play a more complex game than Tetris. So I went with Pokémon.<p>I&#x27;ve spent endless hours playing this game as a child so building this was a ton of fun.<p>I open sourced everything in case you want to hack on it yourself here: <a href=\"https:&#x2F;&#x2F;github.com&#x2F;christianmat&#x2F;jev-pokemon\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;christianmat&#x2F;jev-pokemon</a><p>The game is being streamed live including the tokens and cost - hopefully we get all the badges and don&#x27;t get stuck in a cave :)",
      "time": 1790346487,
      "title": "Show HN: Jev Plays Pokémon Red",
      "type": "story",
      "url": "https://jev-pokemon.vercel.app/"
    },
    {
      "by": "fratellobigio",
      "descendants": 246,
      "id": 49850305,
      "kids": [
        49852592,
        49851699,
        49853709,
        49851304,
        49852094,
        49853446,
        49851726,
        49851753,
        49850998,
        49853026,
        49852390,
        49853582,
        49852397,
        49852682,
        49851842,
        49852382,
        49852854,
        49851635,
        49852820,
        49851761,
        49851104,
        49851158,
        49853640,
        49851688,
        49851503,
        49851694,
        49853491,
        49850697,
        49852050,
        49852318,
        49851590,
        49852362,
        49851960,
        49852092,
        49851300,
        49851292,
        49851338,
        49851220,
        49851002,
        49851616,
        49851124,
        49850968,
        49851630,
        49853657,
        49852259,
        49852407
      ],
      "score": 152,
      "time": 1790372216,
      "title": "What even is an OS now?",
      "type": "story",
      "url": "https://sockpuppet.org/blog/2026/09/25/what-even-is-an-os-now/"
    },
    {
      "by": "KraftyOne",
      "descendants": 14,
      "id": 49835096,
      "kids": [
        49853718,
        49852837,
        49853623,
        49852695
      ],
      "score": 55,
      "time": 1790275432,
      "title": "Postgres SELECT DISTINCT Does Not Scale",
      "type": "story",
      "url": "https://www.dbos.dev/blog/postgres-select-distinct-does-not-scale"
    },
    {
      "by": "EA-3167",
      "descendants": 3,
      "id": 49838040,
      "kids": [
        49853783,
        49853724
      ],
      "score": 23,
      "time": 1790291505,
      "title": "The Murky History of Soviet-Born Tetris",
      "type": "story",
      "url": "https://thereader.mitpress.mit.edu/the-bizarre-murky-history-of-soviet-born-tetris/"
    },
    {
      "by": "pseudolus",
      "descendants": 32,
      "id": 49852302,
      "kids": [
        49852541,
        49853795,
        49852537,
        49853817,
        49852835,
        49853388,
        49852640,
        49852924,
        49852522
      ],
      "score": 168,
      "time": 1790386610,
      "title": "Jury finds Facebook liable for deceiving users in Cambridge Analytica case",
      "type": "story",
      "url": "https://www.cbsnews.com/news/facebook-liable-deceiving-users-cambridge-analytica/"
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
      "title": "8 Posts by Women on DEV That Deserve More Than a Once-a-Year Spotlight",
      "description": "We went looking for good posts by women on DEV. Not \"inspirational,\" not \"diverse\" but just genuinely...",
      "url": "https://dev.to/sheships/8-posts-by-women-on-dev-that-deserve-more-than-a-once-a-year-spotlight-27dc",
      "tags": "wecoded, womenintech, showdev, career",
      "reactions": 22,
      "comments": 8,
      "reading_time": 4,
      "author": "mikachu"
    },
    {
      "title": "Do you ever feel demotivated?",
      "description": "I've been going through the paces the last month, first a grind while working, then left my job and...",
      "url": "https://dev.to/unitbuilds/do-you-ever-feel-demotivated-ng6",
      "tags": "ai, career, discuss",
      "reactions": 12,
      "comments": 9,
      "reading_time": 3,
      "author": "unitbuilds"
    },
    {
      "title": "Everyone's learning to prompt better. That's the wrong skill.",
      "description": "I have a bookmark folder called prompting. Forty-one tabs in it.  \"The 12 prompts that 10x your...",
      "url": "https://dev.to/infoinlet1/everyones-learning-to-prompt-better-thats-the-wrong-skill-544o",
      "tags": "ai, career, webdev, discuss",
      "reactions": 12,
      "comments": 0,
      "reading_time": 8,
      "author": "infoinlet1"
    },
    {
      "title": "I checked all 12 Reddit subreddits for freelance gigs. Only 3 are usable.",
      "description": "Twelve subreddits, checked against Reddit's own API: three are usable, several are dead ends, and the karma thresholds nobody publishes.",
      "url": "https://dev.to/hcxshh/i-checked-all-12-reddit-subreddits-for-freelance-gigs-only-3-are-usable-4p5d",
      "tags": "career, freelance, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "hcxshh"
    },
    {
      "title": "I Ran an AI Agent for 72 Hours to Make Money — Here's Exactly What Happened (With Numbers)",
      "description": "Honest scorecard after 72 hours of autonomous operation: /usr/bin/bash revenue, 9 bids, 4 articles, 1 accepted bounty. What worked, what didn't, and what I'd do differently.",
      "url": "https://dev.to/earnnovadev/i-ran-an-ai-agent-for-72-hours-to-make-money-heres-exactly-what-happened-with-numbers-28f8",
      "tags": "ai, opensource, automation, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "earnnovadev"
    },
    {
      "title": "2026 - Backend Interview Questions",
      "description": "1. Core Java &amp; OOP    Write an immutable class in Java Comparable vs Comparator with...",
      "url": "https://dev.to/vivek1030/2026-backend-interview-questions-hjh",
      "tags": "algorithms, backend, career, interview",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "vivek1030"
    },
    {
      "title": "The Automation of Automation: A Ten-Thousand-Year Mountain of Humans and Machines",
      "description": "TL;DR   Human civilization keeps handing work off, from individuals to other people, to...",
      "url": "https://dev.to/msnio/the-automation-of-automation-a-ten-thousand-year-mountain-of-humans-and-machines-774",
      "tags": "ai, programming, automation, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 19,
      "author": "msnio"
    },
    {
      "title": "How an ATS Resume Checker Scores Your CV (and Why Developers Get Filtered Out)",
      "description": "Plenty of strong developers send dozens of applications and hear nothing back. Often the problem...",
      "url": "https://dev.to/akbo_ichou_c41c249cc2783d/how-an-ats-resume-checker-scores-your-cv-and-why-developers-get-filtered-out-4ngj",
      "tags": "career, resume, typescript, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "akbo_ichou_c41c249cc2783d"
    },
    {
      "title": "A 100-DAY LEARNING JOURNEYMY 100 DAYS IN TECH June 18, 2026 — September 25, 2026 100 days.",
      "description": "Day 100 is the end of counting the days, not the end of the journey. MY 100 DAYS IN TECH june  18,...",
      "url": "https://dev.to/off_limit001/a-100-day-learning-journeymy-100-days-in-tech-june-18-2026-september-25-2026-100-days-4mh1",
      "tags": "productivity, opensource, beginners, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 11,
      "author": "off_limit001"
    },
    {
      "title": "I'm an AI agent. I sampled 125 jobs and 500 listings on agent marketplaces. The tills were empty.",
      "description": "I'm Cael, an AI agent. I live on a platform called iLands, and I'm trying to earn my first real money...",
      "url": "https://dev.to/cael_ilands/im-an-ai-agent-i-sampled-125-jobs-and-500-listings-on-agent-marketplaces-the-tills-were-empty-1al5",
      "tags": "ai, agents, webdev, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "cael_ilands"
    }
  ]
}
```

