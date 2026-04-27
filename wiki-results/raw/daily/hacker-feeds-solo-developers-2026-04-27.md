# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-27 07:11:09 UTC

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
      "forks": 736,
      "added_stars": 3537,
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
      "author": "thunderbird",
      "repo": "thunderbolt",
      "avatar": "https://github.com/thunderbird.png",
      "repo_link": "https://github.com/thunderbird/thunderbolt",
      "desc": "AI You Control: Choose your models. Own your data. Eliminate vendor lock-in.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 273,
      "added_stars": 2244,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output, 98% reduction. 14 platforms",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 725,
      "added_stars": 2504,
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
      "author": "multica-ai",
      "repo": "multica",
      "avatar": "https://github.com/multica-ai.png",
      "repo_link": "https://github.com/multica-ai/multica",
      "desc": "The open-source managed agents platform. Turn coding agents into real teammates — assign tasks, track progress, compound skills.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2631,
      "added_stars": 4882,
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
      "forks": 2646,
      "added_stars": 977,
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
      "author": "mnfst",
      "repo": "manifest",
      "avatar": "https://github.com/mnfst.png",
      "repo_link": "https://github.com/mnfst/manifest",
      "desc": "Smart Model Routing for Personal AI Agents. Cut Costs up to 70% 🦞👧🦚",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 329,
      "added_stars": 822,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5804,
      "added_stars": 4967,
      "builtBy": [
        {
          "username": "thedotmack",
          "href": "https://github.com/thedotmack",
          "avatar": "https://avatars.githubusercontent.com/u/683968"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ousamabenyounes",
          "href": "https://github.com/ousamabenyounes",
          "avatar": "https://avatars.githubusercontent.com/u/2910651"
        },
        {
          "username": "rodboev",
          "href": "https://github.com/rodboev",
          "avatar": "https://avatars.githubusercontent.com/u/106971"
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
      "forks": 2792,
      "added_stars": 2647,
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
      "author": "CherryHQ",
      "repo": "cherry-studio",
      "avatar": "https://github.com/CherryHQ.png",
      "repo_link": "https://github.com/CherryHQ/cherry-studio",
      "desc": "AI productivity studio with smart chat, autonomous agents, and 300+ assistants. Unified access to frontier LLMs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4221,
      "added_stars": 676,
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
      "author": "n8n-io",
      "repo": "n8n",
      "avatar": "https://github.com/n8n-io.png",
      "repo_link": "https://github.com/n8n-io/n8n",
      "desc": "Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 57157,
      "added_stars": 1172,
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
      "author": "koala73",
      "repo": "worldmonitor",
      "avatar": "https://github.com/koala73.png",
      "repo_link": "https://github.com/koala73/worldmonitor",
      "desc": "Real-time global intelligence dashboard. AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8461,
      "added_stars": 3530,
      "builtBy": [
        {
          "username": "koala73",
          "href": "https://github.com/koala73",
          "avatar": "https://avatars.githubusercontent.com/u/996596"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "SebastienMelki",
          "href": "https://github.com/SebastienMelki",
          "avatar": "https://avatars.githubusercontent.com/u/5787993"
        },
        {
          "username": "NewCoder3294",
          "href": "https://github.com/NewCoder3294",
          "avatar": "https://avatars.githubusercontent.com/u/168879994"
        },
        {
          "username": "lspassos1",
          "href": "https://github.com/lspassos1",
          "avatar": "https://avatars.githubusercontent.com/u/220533488"
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
      "forks": 4792,
      "added_stars": 3173,
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
      "author": "onlook-dev",
      "repo": "onlook",
      "avatar": "https://github.com/onlook-dev.png",
      "repo_link": "https://github.com/onlook-dev/onlook",
      "desc": "The Cursor for Designers • An Open-Source AI-First Design tool • Visually build, style, and edit your React App with AI",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1968,
      "added_stars": 207,
      "builtBy": [
        {
          "username": "Kitenite",
          "href": "https://github.com/Kitenite",
          "avatar": "https://avatars.githubusercontent.com/u/31864905"
        },
        {
          "username": "drfarrell",
          "href": "https://github.com/drfarrell",
          "avatar": "https://avatars.githubusercontent.com/u/14104075"
        },
        {
          "username": "spartan-vutrannguyen",
          "href": "https://github.com/spartan-vutrannguyen",
          "avatar": "https://avatars.githubusercontent.com/u/134599728"
        },
        {
          "username": "iNerdStack",
          "href": "https://github.com/iNerdStack",
          "avatar": "https://avatars.githubusercontent.com/u/62861595"
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
      "forks": 583,
      "added_stars": 384,
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
      "author": "KeygraphHQ",
      "repo": "shannon",
      "avatar": "https://github.com/KeygraphHQ.png",
      "repo_link": "https://github.com/KeygraphHQ/shannon",
      "desc": "Shannon Lite is an autonomous, white-box AI pentester for web applications and APIs. It analyzes your source code, identifies attack vectors, and executes real exploits to prove vulnerabilities before they reach production.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4516,
      "added_stars": 1883,
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
      "title": "I'm not a robot. Have been proving I'm human for years now.",
      "url": "https://i.redd.it/tg1pf3n9gkxg1.png",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swd3q8/im_not_a_robot_have_been_proving_im_human_for/",
      "author": "/u/Mastbubbles",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "By clicking on the traffic cones, we were teaching Waymo&#39;s AI, Those two squiggly words you typed in 2010? You were digitizing the New York Times archive, one word at a time. Google bought the company that ran it for the data pipeline. For 29 years we&#39;ve been clicking traffic lights to prove we&#39;re human, for the same company that already had our Gmail, our YouTube history, our Maps timeline, and our location at 3pm yesterday. Just to learn about Captcha, and how all of them worked, Made an interactive version that embeds the actual reCAPTCHA v2, hCaptcha, and Cloudflare Turnstile widgets via their published test sitekeys, plus recreations of the dead generations The CAPTCHA wasn&#39;t really stopping bots after about 2014. It was a free workforce. Hundreds of millions of people, hundreds of millions of clicks, all unpaid. interactive version &#32; submitted by &#32; /u/Mastbubbles [link] &#32; [comments]",
      "published": "2026-04-26T17:02:46+00:00"
    },
    {
      "title": "Web server down",
      "url": "https://www.reddit.com/r/webdev/comments/1sw6kw3/web_server_down/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sw6kw3/web_server_down/",
      "author": "/u/a2annie",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I just got a text f myself n my customer that the site is down. It’s a Sunday morning at 8am. I reach out to the hosting service to see what’s up. What I find is truly alarming. It wasn’t just our site but the entire server. They had no idea and I was the first to report the issue. Let me repeat this. They didn’t know they had entire web server with thousands of sites not working until one person reported it. This feels insane to me. How in this day and age can there not be a monitoring system in place? Or is this just a punk*ss company? (It’s a rather large company) thoughts? &#32; submitted by &#32; /u/a2annie [link] &#32; [comments]",
      "published": "2026-04-26T12:44:41+00:00"
    },
    {
      "title": "Sell our web design business?",
      "url": "https://www.reddit.com/r/webdev/comments/1sw9ea3/sell_our_web_design_business/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sw9ea3/sell_our_web_design_business/",
      "author": "/u/for_anon_throwaway",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "My wife and I started our web design business together 20 years ago. We’ve done well over $1,500,000 USD in sales and support since then. We are nearing retirement and having a little debate. We have stopped taking new clients but still have about 30 clients on maintenance and hosting retainers for a total revenue of about $50,000 USD per year requiring about 10 hours per month of work with practically no overhead. We lose about $5,000 of retainer clients a year due to attrition. My wife thinks we should sell our business so we don’t have to worry about any problems that might come up. I say that with the very small amount of work it takes to keep our income, why should we sell? We have an almost guaranteed income of ~$300,000 USD over the next 10 years, and finding someone to buy our business for close to that would be hard. I’m interested to hear your thoughts. &#32; submitted by &#32; /u/for_anon_throwaway [link] &#32; [comments]",
      "published": "2026-04-26T14:43:34+00:00"
    },
    {
      "title": "What is the coolest website you’ve visited that no one knows about?",
      "url": "https://www.reddit.com/r/webdev/comments/1sw50ma/what_is_the_coolest_website_youve_visited_that_no/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sw50ma/what_is_the_coolest_website_youve_visited_that_no/",
      "author": "/u/Successful_Bowl2564",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I just came across https://www.window-swap.com/ and its amazing !!! &#32; submitted by &#32; /u/Successful_Bowl2564 [link] &#32; [comments]",
      "published": "2026-04-26T11:26:55+00:00"
    },
    {
      "title": "GoDaddy Gave a Domain to a Stranger Without Any Documentation",
      "url": "https://news.ycombinator.com/item?id=47911780",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swgynh/godaddy_gave_a_domain_to_a_stranger_without_any/",
      "author": "/u/Pikamander2",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Pikamander2 [link] &#32; [comments]",
      "published": "2026-04-26T19:25:07+00:00"
    },
    {
      "title": "A compiled list of frontend interview take home assignments.",
      "url": "https://www.reddit.com/r/webdev/comments/1sw2m43/a_compiled_list_of_frontend_interview_take_home/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sw2m43/a_compiled_list_of_frontend_interview_take_home/",
      "author": "/u/CurrentDifficulty888",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;m preparing for frontend interview take home assignments. Can you respond with previous take home assignments that you have received. So that we can see commonalities and what to prioritise for study. Kind regards &#32; submitted by &#32; /u/CurrentDifficulty888 [link] &#32; [comments]",
      "published": "2026-04-26T09:10:45+00:00"
    },
    {
      "title": "Chrome finally supports jxl",
      "url": "https://www.phoronix.com/news/Chrome-145-Released",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swb2s2/chrome_finally_supports_jxl/",
      "author": "/u/moxyte",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/moxyte [link] &#32; [comments]",
      "published": "2026-04-26T15:47:58+00:00"
    },
    {
      "title": "spent six months building visual regression coverage and ended up deleting most of it",
      "url": "https://www.reddit.com/r/webdev/comments/1swpcdf/spent_six_months_building_visual_regression/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swpcdf/spent_six_months_building_visual_regression/",
      "author": "/u/Deep_Ad1959",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I added visual regression to a small product back in october, started with maybe 12 snapshots, got excited about coverage, watched it balloon to about 380 baselines that nobody on the team trusted enough to update without a meeting. every token tweak, every font loading shift, every emoji rendering different on mac vs linux runners produced 40 red diffs. half the time it was a real change, half the time it was a 1px shadow on a hover state nobody could see with their eyes. the part nobody warns you about is that snapshot tests rot way faster than functional ones, because what they encode is a rendering of a moment, not behavior. swap a chart lib, redesign the nav, ship a minor headless ui bump and the whole baseline layer is wrong even though the app works fine. what eventually worked was cutting it down to about 8 high-stakes views (checkout, dashboard cards, the print receipt) and treating everything else as a smoke check via dom assertions. visual diffs are great when you mean them, pure noise when you do not. still trying to figure out how teams pick what&#39;s actually worth a baseline image versus a regular assertion. don&#39;t think the industry has a clean answer yet. &#32; submitted by &#32; /u/Deep_Ad1959 [link] &#32; [comments]",
      "published": "2026-04-27T01:15:39+00:00"
    },
    {
      "title": "I built a tool to solve a web dev issue I was having",
      "url": "https://i.redd.it/j1u8935a7jxg1.jpeg",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sw6qf6/i_built_a_tool_to_solve_a_web_dev_issue_i_was/",
      "author": "/u/f91w_blue",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "For another website I was building, I wanted to create an eye-catching hero image. The concept was simple: take a flat 2D image and rotate it into 3D. Maybe add a transparent background and some shadows. Something more interesting than just dropping a flat screenshot onto the page. A google search didn’t bring up a simple web tool that did what I wanted. If I remember correctly, I eventually found one, but it was around $9.99 and didn’t look especially great. I wasn&#39;t super keen to pay that much for something that feels like it should be pretty trivial. In the end I managed to get something acceptable using GIMP, but it took far too long. And the result was basically made by warping pixels, not by actually rotating the image in 3D with proper perspective. I used that image anyways and moved on, but the thought stuck with me: a good web tool should exist for this. I have quite a bit of experience with OpenGL and 3D graphics development, so the idea of doing this &quot;the right way&quot; stayed with me. Put the image on a plane, rotate it in a perspective camera, render it cleanly, and export the result. So I decided to give WebGL a spin and built FrameTilt: https://frametilt.com It’s a fully browser-based tool, with which you can: - upload images and rotate them in 3D with pitch/yaw/roll - drag directly on the preview to rotate - stack multiple images - fit/center the composition (I built an autofit system so at the end of each manipulation of the image the rotated canvas is centered with consistent margins, regardless of angle) - use transparent backgrounds - adjust background and shadow - export a PNG It’s built with React, Vite, Three.js, and WebGL. Images are processed locally in the browser and never leave the device (this was important to me personally as the first user). I also added a settings export option so I can recreate the exact same perspectives in future (for continuity in case I want to update images on my website). While I was developing this I also got the idea for &quot;stacked&quot; compositions to create a photo stack like effect. In the meantime I&#39;ve had other ideas, like adding an option for creating one of those cubes with images on each side, maybe add a reflections options, etc. Will be using this for other projects in ftureu it personally, but hope it can help other devs. &#32; submitted by &#32; /u/f91w_blue [link] &#32; [comments]",
      "published": "2026-04-26T12:51:53+00:00"
    },
    {
      "title": "Interactive visualizations for DNS, load balancing, and system design concepts",
      "url": "https://toolkit.whysonil.dev/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swkdnz/interactive_visualizations_for_dns_load_balancing/",
      "author": "/u/nulless",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/nulless [link] &#32; [comments]",
      "published": "2026-04-26T21:36:38+00:00"
    },
    {
      "title": "Trying to choose a React UI framework with free Figma assets",
      "url": "https://www.reddit.com/r/webdev/comments/1swh9cw/trying_to_choose_a_react_ui_framework_with_free/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swh9cw/trying_to_choose_a_react_ui_framework_with_free/",
      "author": "/u/CoVegGirl",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I’m working on an all-volunteer project for a nonprofit, so we don’t really have money to spend on UI frameworks and Figma assets. We tried shadcn, but it feels kind of bloated because of how much JavaScript it pulls in. So I guess we’re looking for something that’s a happy medium between a pure CSS library like DaisyUI and a bloated full-feature framework. I’ve been digging around, but there are a zillion UI frameworks, and it’s hard to know the differences between all of them. &#32; submitted by &#32; /u/CoVegGirl [link] &#32; [comments]",
      "published": "2026-04-26T19:36:05+00:00"
    },
    {
      "title": "How to make my website look more frutiger aero?",
      "url": "https://i.redd.it/uyqzisabokxg1.png",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swedfi/how_to_make_my_website_look_more_frutiger_aero/",
      "author": "/u/Dependent-Hamster361",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I want to add more glossiness to it. My site can be found here: https://blackedlight.neocities.org/ &#32; submitted by &#32; /u/Dependent-Hamster361 [link] &#32; [comments]",
      "published": "2026-04-26T17:50:08+00:00"
    },
    {
      "title": "Protecting email reputation against password reset abuse",
      "url": "https://www.reddit.com/r/webdev/comments/1swc271/protecting_email_reputation_against_password/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swc271/protecting_email_reputation_against_password/",
      "author": "/u/jumurtka",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Malicious actors may initiate registration and password reset emails from my website for various reasons. This will result in users and non-users receiving unwanted emails. Both the action of reporting as spam and high frequency of transactional emails sent to the people may result in email reputation damage. How to protect? &#32; submitted by &#32; /u/jumurtka [link] &#32; [comments]",
      "published": "2026-04-26T16:24:31+00:00"
    },
    {
      "title": "Looking for guidance on building a custom landing page builder inside a SaaS product",
      "url": "https://www.reddit.com/r/webdev/comments/1swvu4y/looking_for_guidance_on_building_a_custom_landing/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swvu4y/looking_for_guidance_on_building_a_custom_landing/",
      "author": "/u/Spartan_King_",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hi everyone, I’m currently exploring how to build a custom landing page builder as part of an existing B2B SaaS platform, and I’d really value some guidance from developers who have tackled similar problems. A bit of context: the platform is a loyalty and rewards system for companies. When an employee earns a reward (for example, a birthday, anniversary, or sales milestone), they’re directed to a custom landing page tied to that event. Each company wants these pages to reflect their own branding and messaging. The goal is to give non-technical admins a way to: Choose from predefined templates for different event types Customize branding such as colors, fonts, and content Add, remove, and reorder sections Use dynamic variables like first name or reward amount Publish pages that go live for employees My current approach is to store pages as a JSON schema in the database, where each block represents a section (like a hero banner or CTA), along with its data and styling. I’m also thinking of having global theme tokens for things like colors and typography. The editor itself would be a three-column layout: a block library on the left, a central canvas showing the page, and a settings panel on the right. The backend is Laravel, and the frontend is React with TypeScript. There are a few areas where I’m unsure what the best approach is: Whether storing the entire page as JSON is the right long-term decision, or if a relational structure (like a page_blocks table) is more scalable Whether the editor canvas should render the actual page (possibly in an iframe) or just a simplified preview of blocks How to implement a real-time mobile and desktop preview without duplicating rendering logic How to handle image uploads — storing URLs directly in the JSON vs referencing a separate media library The best way to support dynamic variables — simple string replacement vs something more structured How to manage templates — whether to fully fork them per company or use a shared base with overrides What should happen during publishing — dynamic rendering vs pre-rendering vs caching strategies If you were designing this system from scratch today, I’d really appreciate hearing how you’d approach the architecture. That includes database design, editor structure, rendering strategy, and any libraries or patterns you’d rely on. Even if your experience comes from adjacent tools like form builders, email editors, or CMS block systems, your insights would be very helpful. Thanks in advance for your time. &#32; submitted by &#32; /u/Spartan_King_ [link] &#32; [comments]",
      "published": "2026-04-27T06:42:19+00:00"
    },
    {
      "title": "I wanted to know if anyone knew how exactly this animation/sequence is possible, and potentially how to recreate it.",
      "url": "https://www.reddit.com/r/webdev/comments/1sws31t/i_wanted_to_know_if_anyone_knew_how_exactly_this/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sws31t/i_wanted_to_know_if_anyone_knew_how_exactly_this/",
      "author": "/u/TikkoMasala",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "As I&#39;ve said in the title, my co-founder and I have been scouring different websites in-order to get inspiration for our own companies site. I stumbled upon https://terminal-industries.com/ , and my gosh, it is beautiful. The main thing that caught me eye was the initial entrance animation. When you load into the site, irregular shapes on the four corners of the page rotate counter-clockwise and align. During this, the companies logo appears (the T), and as the alignment of the irregular shapes takes place, the T animates towards the left, with it&#39;s color changing from black to white as a black box surrounds said letter. Then their company name animates in with a half sliced approach. My descriptions were probably not super helpful, so I ask that you either visit the website, or look at the video linked on this post and let me know what you think was done for this sequence. Was it created in AfterEffects before hand? Was it animated with GSAP, Motion, or Framer? Is it a video that&#39;s just playing when you load in? We want something similar, but of course with our own styling and all. We were thinking of developing the site in Next.JS/React, but I&#39;m a backend developer and don&#39;t know much about the differences between it, and Nuxt.js (what the website used). Any help would be awesome! https://imgur.com/a/EEP3S4t &#32; submitted by &#32; /u/TikkoMasala [link] &#32; [comments]",
      "published": "2026-04-27T03:25:17+00:00"
    },
    {
      "title": "VCs buying up frameworks, how bad is it?",
      "url": "https://www.reddit.com/r/webdev/comments/1swvru7/vcs_buying_up_frameworks_how_bad_is_it/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swvru7/vcs_buying_up_frameworks_how_bad_is_it/",
      "author": "/u/StringerXX",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;m kind of late to the party since a lot of the news were within the last couple years But have been getting back into web development and was looking at frameworks I wanted to go with Laravel because it was so opinionated which appealed to me, but started reading and heard news that Accel, a VC company, pumped around 60m into Laravel a little while back It went from like 12 core developers only working on the open source project to now 80 workers, and they&#39;re seemingly focused more on paid products now like Laravel Cloud And then I was like whatever, it&#39;s fine, I listened to a couple Taylor Otwell interviews (creator of Laravel), and felt kind of reassured it&#39;s ok, he still does 2hrs of daily pull requests personally on the open source side, and the paid products like UI components are just optional. But I&#39;m thinking if this had been before the investment, those additions would have just been new features. Is every new thing now going to go to the paid side of it, and the open source side will just get minimum attention? But I was like ok whatever, I&#39;ll still go with Laravel and then I&#39;ll use Vue on the front end (via inertia). Then I start to look into Vue a little, and Evan You (Creator of Vue) did the exact same thing Taylor Otwell and Laravel did. Evan started Void(0) and Vite+ and took a large investment from the same exact VC company! And apparently Accel also heavily invested into Vercel, creators of Next.js, with 300 MILLION dollar investment! wtf So now it seems like Laravel, Vue AND Vercel, maybe others also, are kind of pivoting from their open source projects to these new entities that are backed by VC My worry is that I&#39;ll start working with these frameworks, and then I&#39;ll get locked in, and every new thing that&#39;s added will be something I have to pay for, or that the core products will get neglected I dunno, am I overthinking this? It seems like it&#39;s largely a cloud play? but I&#39;m not sure. How do all these frameworks that devs rely on being bought up by VCs impact us going forward? &#32; submitted by &#32; /u/StringerXX [link] &#32; [comments]",
      "published": "2026-04-27T06:38:49+00:00"
    },
    {
      "title": "Any api monetisation gateway suggestions?",
      "url": "https://www.reddit.com/r/webdev/comments/1sw85m8/any_api_monetisation_gateway_suggestions/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sw85m8/any_api_monetisation_gateway_suggestions/",
      "author": "/u/Consistent_Tutor_597",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey guys, we are a pretty lean team. And planning to release a public api. With ofcourse usage tracking and self generated keys etc. Which was not so hard before. But I think now we might move towards metered billing (pay per request model) and I was thinking we are better off outsourcing it. As there&#39;s things that can go wrong. Zuplo: I have tried a few options and zuplo was quite plug and play but their monetisation is pretty new and lacks deep features. They don&#39;t really use stripe subscriptions (I think it&#39;s built on openmeter). And handle billing themselves. Which causes issues coz stripe is not the source of truth. Only source of payments. Kong/openmeter: The other option I tried. Both by trying to connect zuplo + openmeter or using konnect+ openmeter. But neither was really out of the box. I am starting to get tired and thinking to just build it myself with firing off units to stripe through middleware. And we already log endpoints in our db. And can enforce limits. Let me know if you guys know of any clean solution. And if you guys suggest against using stripe&#39;s own metered billing. I just feel like it gives me a lot more control. And the fact that it runs in real time in middleware, reduces the headache of state sync too. What are your thoughts? &#32; submitted by &#32; /u/Consistent_Tutor_597 [link] &#32; [comments]",
      "published": "2026-04-26T13:53:51+00:00"
    },
    {
      "title": "Devlog #68 - PxSkillGridNode",
      "url": "https://www.patreon.com/posts/devlog-68-154223404",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sw19wz/devlog_68_pxskillgridnode/",
      "author": "/u/Pixelodo",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Pixelodo [link] &#32; [comments]",
      "published": "2026-04-26T07:52:21+00:00"
    },
    {
      "title": "Showoff Saturday: I made a Next.js directory for AI/automation tools",
      "url": "https://www.reddit.com/r/webdev/comments/1swv9s0/showoff_saturday_i_made_a_nextjs_directory_for/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swv9s0/showoff_saturday_i_made_a_nextjs_directory_for/",
      "author": "/u/Humble-Programmer192",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Built with Next.js + Supabase + deployed on Replit. 30+ tools listed so far: n8n, Make, Zapier, Groq, Apify, Replit, Supabase, Bubble, Webflow... Features: - Side-by-side comparisons - Pricing badges - Category filtering &#32; submitted by &#32; /u/Humble-Programmer192 [link] &#32; [comments]",
      "published": "2026-04-27T06:10:43+00:00"
    },
    {
      "title": "I want to understand and make a digital video database with a surreal cyberpunk GUI",
      "url": "https://www.reddit.com/r/webdev/comments/1swnnnn/i_want_to_understand_and_make_a_digital_video/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swnnnn/i_want_to_understand_and_make_a_digital_video/",
      "author": "/u/up4rbutt",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I am in need of someone to help me create a website that has a digital database that can store my surveillance videos. I have lots of footage that I want to be able to sort and catalogue based on who or what is happening is in the video. Ideally I want to users to be able to search for specific keywords or have access to a few options which will show them clips related to their searches. The clips I have are between 20 seconds-3 min and I want to create an interface similar to the little giger database (that is the only visual I really have of what I am trying to create). I&#39;m having a hard time visualizing how else it could look so if anyone has any good resources or examples of something like this they already know of pls share!! From what I understand I need to make an SQL with GUI so I can search it on the internet. What are the best programs to run for any of those? I want to learn this stuff myself and I&#39;ve considered using AI but that would just go against my own morals and really the entirety of my project. I have no knowledge of how to build a website or really anything regarding coding and am looking for someone to also let me in on some of the information. Please if anyone is available ASAP to help me work on this project I am really interested in what it might take. &#32; submitted by &#32; /u/up4rbutt [link] &#32; [comments]",
      "published": "2026-04-26T23:57:34+00:00"
    },
    {
      "title": "Elite design references - any for tailwind.css/react.js?",
      "url": "https://www.reddit.com/r/webdev/comments/1sw4jws/elite_design_references_any_for_tailwindcssreactjs/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sw4jws/elite_design_references_any_for_tailwindcssreactjs/",
      "author": "/u/Formal_Ad_3295",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hi! Anyone know if there is any online gallery with amazing open-source React.js websites? There is a lot of slop, like AI blogs and vibe-coded galleries. I&#39;m asking for better curation. Something that would be featured on FastCompany or It&#39;s Nice That. I used to use Webflow Community and Framer Templates. They&#39;re the closest there was to open-source, and the design quality is pristine. But now I&#39;m looking for the next thing. With the shift towards React.js and Vibe Coding, UI work has changed a lot. &#32; submitted by &#32; /u/Formal_Ad_3295 [link] &#32; [comments]",
      "published": "2026-04-26T11:02:03+00:00"
    },
    {
      "title": "Need guidance on end to end web development process for business",
      "url": "https://www.reddit.com/r/webdev/comments/1sws5xy/need_guidance_on_end_to_end_web_development/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sws5xy/need_guidance_on_end_to_end_web_development/",
      "author": "/u/WillHunting20",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I have a request from a contact to develop a website for his real estate business. I have experience in software engineering, but not particularly worked on a business model like this. If I plan to do this for multiple clients, Do you develop websites from scratch or are there templates that can be reused? I know WordPress but is it only enough? Where to host these applications(frontend/backend/database)? Surely aws or azure maybe expensive overkill for these. What&#39;s the process of acquiring a domain? If you have some experience related to this please share your workflow, please do address any part I may have missed. &#32; submitted by &#32; /u/WillHunting20 [link] &#32; [comments]",
      "published": "2026-04-27T03:29:16+00:00"
    },
    {
      "title": "Clock Synchronization Is a Nightmare",
      "url": "https://arpitbhayani.me/blogs/clock-sync-nightmare/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swpq84/clock_synchronization_is_a_nightmare/",
      "author": "/u/fagnerbrack",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/fagnerbrack [link] &#32; [comments]",
      "published": "2026-04-27T01:33:30+00:00"
    },
    {
      "title": "I built an anime stock trading game",
      "url": "https://agenda.exchange/market/op-loki",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swl52e/i_built_an_anime_stock_trading_game/",
      "author": "/u/Jones-10",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "It’s a completely free game with fake money. Built it at the start of the year to get more comfortable with AI tooling, and wanted to work on a Kotlin project again. Check it out: https://agenda.exchange . The frontend is built with react + typescript and the backend with ktor. &#32; submitted by &#32; /u/Jones-10 [link] &#32; [comments]",
      "published": "2026-04-26T22:08:04+00:00"
    },
    {
      "title": "An open source hiring platform that watches engineers work in a real CAD tool",
      "url": "https://ai-eval-lab.janardan.xyz/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1swissp/an_open_source_hiring_platform_that_watches/",
      "author": "/u/mind_uncapped",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I got bored of UI work at my day job and wanted to build something. Ended up building a platform that streams KiCad (a PCB design tool) to the browser via VNC, tracks what the user is doing on the board in real time, and uses an LLM to evaluate their process at the end. The idea: coding assessments exist everywhere, but nothing like this for EE/hardware folks. Wanted to see if you could evaluate an engineer by just watching them work. Still rough. VNC latency and lag is real. No proctoring yet (MVP phase). But the core thing works. Blog has the full breakdown of how it&#39;s built. https://www.janardan.xyz/writing/deconstructing-ai-eval-lab-workings &#32; submitted by &#32; /u/mind_uncapped [link] &#32; [comments]",
      "published": "2026-04-26T20:34:37+00:00"
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
      "forks": 2798,
      "added_stars": 7188,
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
      "forks": 3062,
      "added_stars": 1566,
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
      "forks": 6156,
      "added_stars": 6058,
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
      "forks": 248,
      "added_stars": 1448,
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
          "username": "shaun0927",
          "href": "https://github.com/shaun0927",
          "avatar": "https://avatars.githubusercontent.com/u/70629228"
        },
        {
          "username": "dinakars777",
          "href": "https://github.com/dinakars777",
          "avatar": "https://avatars.githubusercontent.com/u/250428393"
        },
        {
          "username": "plattenschieber",
          "href": "https://github.com/plattenschieber",
          "avatar": "https://avatars.githubusercontent.com/u/1213794"
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
      "forks": 510,
      "added_stars": 1095,
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
          "username": "danpiths",
          "href": "https://github.com/danpiths",
          "avatar": "https://avatars.githubusercontent.com/u/85949566"
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
      "forks": 286,
      "added_stars": 752,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3908,
      "added_stars": 1480,
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
      "author": "googleapis",
      "repo": "mcp-toolbox",
      "avatar": "https://github.com/googleapis.png",
      "repo_link": "https://github.com/googleapis/mcp-toolbox",
      "desc": "MCP Toolbox for Databases is an open source MCP server for databases.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1484,
      "added_stars": 1337,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 749,
      "added_stars": 1195,
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
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5270,
      "added_stars": 1753,
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
      "author": "masterking32",
      "repo": "MasterDnsVPN",
      "avatar": "https://github.com/masterking32.png",
      "repo_link": "https://github.com/masterking32/MasterDnsVPN",
      "desc": "Advanced DNS tunneling VPN for censorship bypass, optimized beyond DNSTT and SlipStream with low-overhead ARQ, resolver load balancing, high packet-loss stability and speed.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 86,
      "added_stars": 803,
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
      "forks": 1293,
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
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 15831,
      "added_stars": 4610,
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
      "author": "syncthing",
      "repo": "syncthing",
      "avatar": "https://github.com/syncthing.png",
      "repo_link": "https://github.com/syncthing/syncthing",
      "desc": "Open Source Continuous File Synchronization",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5128,
      "added_stars": 2143,
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
      "author": "anchore",
      "repo": "syft",
      "avatar": "https://github.com/anchore.png",
      "repo_link": "https://github.com/anchore/syft",
      "desc": "CLI tool and library for generating a Software Bill of Materials from container images and filesystems",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 841,
      "added_stars": 263,
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
    },
    {
      "author": "XIU2",
      "repo": "CloudflareSpeedTest",
      "avatar": "https://github.com/XIU2.png",
      "repo_link": "https://github.com/XIU2/CloudflareSpeedTest",
      "desc": "🌩「自选优选 IP」测试 Cloudflare CDN 延迟和速度，获取最快 IP ！当然也支持其他 CDN / 多个解析 IP 的网站 ~",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5010,
      "added_stars": 1012,
      "builtBy": [
        {
          "username": "XIU2",
          "href": "https://github.com/XIU2",
          "avatar": "https://avatars.githubusercontent.com/u/54703944"
        },
        {
          "username": "seek4self",
          "href": "https://github.com/seek4self",
          "avatar": "https://avatars.githubusercontent.com/u/36224405"
        },
        {
          "username": "Spedoske",
          "href": "https://github.com/Spedoske",
          "avatar": "https://avatars.githubusercontent.com/u/52339623"
        },
        {
          "username": "ipcjs",
          "href": "https://github.com/ipcjs",
          "avatar": "https://avatars.githubusercontent.com/u/4396864"
        },
        {
          "username": "Sving1024",
          "href": "https://github.com/Sving1024",
          "avatar": "https://avatars.githubusercontent.com/u/82246127"
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
      "forks": 17676,
      "added_stars": 104773,
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
      "author": "luongnv89",
      "repo": "claude-howto",
      "avatar": "https://github.com/luongnv89.png",
      "repo_link": "https://github.com/luongnv89/claude-howto",
      "desc": "A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3594,
      "added_stars": 27992,
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
      "author": "shiyu-coder",
      "repo": "Kronos",
      "avatar": "https://github.com/shiyu-coder.png",
      "repo_link": "https://github.com/shiyu-coder/Kronos",
      "desc": "Kronos: A Foundation Model for the Language of Financial Markets",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3831,
      "added_stars": 10363,
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
      "forks": 2152,
      "added_stars": 12424,
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "\"DeepTutor: Agent-Native Personalized Learning Assistant\"",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2946,
      "added_stars": 11213,
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
      "author": "microsoft",
      "repo": "markitdown",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/markitdown",
      "desc": "Python tool for converting files and office documents to Markdown.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7715,
      "added_stars": 25187,
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
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use claude-code for free in the terminal, VSCode extension or via discord like openclaw",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2032,
      "added_stars": 11242,
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
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4833,
      "added_stars": 17850,
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
      "author": "lsdefine",
      "repo": "GenericAgent",
      "avatar": "https://github.com/lsdefine.png",
      "repo_link": "https://github.com/lsdefine/GenericAgent",
      "desc": "Self-evolving agent: grows skill tree from 3.3K-line seed, achieving full system control with 6x less token consumption",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 852,
      "added_stars": 6534,
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
      "author": "hugohe3",
      "repo": "ppt-master",
      "avatar": "https://github.com/hugohe3.png",
      "repo_link": "https://github.com/hugohe3/ppt-master",
      "desc": "AI generates natively editable PPTX from any document — real PowerPoint shapes, not images — no design skills needed",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 930,
      "added_stars": 5275,
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
      "forks": 1819,
      "added_stars": 8574,
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
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3816,
      "added_stars": 10544,
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
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10013,
      "added_stars": 8077,
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
      "author": "AIDC-AI",
      "repo": "Pixelle-Video",
      "avatar": "https://github.com/AIDC-AI.png",
      "repo_link": "https://github.com/AIDC-AI/Pixelle-Video",
      "desc": "🚀 AI 全自动短视频引擎 | AI Fully Automated Short Video Engine",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1133,
      "added_stars": 3630,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "232+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1698,
      "added_stars": 5795,
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
      "author": "hacksider",
      "repo": "Deep-Live-Cam",
      "avatar": "https://github.com/hacksider.png",
      "repo_link": "https://github.com/hacksider/Deep-Live-Cam",
      "desc": "real time face swap and one-click video deepfake with only a single image",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13411,
      "added_stars": 12299,
      "builtBy": [
        {
          "username": "hacksider",
          "href": "https://github.com/hacksider",
          "avatar": "https://avatars.githubusercontent.com/u/1267200"
        },
        {
          "username": "KRSHH",
          "href": "https://github.com/KRSHH",
          "avatar": "https://avatars.githubusercontent.com/u/136873090"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "vic4key",
          "href": "https://github.com/vic4key",
          "avatar": "https://avatars.githubusercontent.com/u/5672864"
        },
        {
          "username": "maxwbuckley",
          "href": "https://github.com/maxwbuckley",
          "avatar": "https://avatars.githubusercontent.com/u/4339561"
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
      "forks": 9604,
      "added_stars": 8410,
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
      "author": "plastic-labs",
      "repo": "honcho",
      "avatar": "https://github.com/plastic-labs.png",
      "repo_link": "https://github.com/plastic-labs/honcho",
      "desc": "Memory library for building stateful agents",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 335,
      "added_stars": 1838,
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
      "author": "SakanaAI",
      "repo": "AI-Scientist-v2",
      "avatar": "https://github.com/SakanaAI.png",
      "repo_link": "https://github.com/SakanaAI/AI-Scientist-v2",
      "desc": "The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 807,
      "added_stars": 3412,
      "builtBy": [
        {
          "username": "conglu1997",
          "href": "https://github.com/conglu1997",
          "avatar": "https://avatars.githubusercontent.com/u/20336225"
        },
        {
          "username": "kotama7",
          "href": "https://github.com/kotama7",
          "avatar": "https://avatars.githubusercontent.com/u/104612339"
        },
        {
          "username": "runopti",
          "href": "https://github.com/runopti",
          "avatar": "https://avatars.githubusercontent.com/u/6688737"
        },
        {
          "username": "RobertTLange",
          "href": "https://github.com/RobertTLange",
          "avatar": "https://avatars.githubusercontent.com/u/20374662"
        },
        {
          "username": "Shawn-Hwang",
          "href": "https://github.com/Shawn-Hwang",
          "avatar": "https://avatars.githubusercontent.com/u/62516342"
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
      "forks": 2158,
      "added_stars": 4201,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
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
    },
    {
      "title": "A minimal Node.js wrapper around ClamAV",
      "url": "https://pompelmi.app/index.html",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-04-12T09:55:40.000Z"
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
      "title": "Officially Introducing: The Google AI and Google Cloud Run Badges",
      "description": "Hey everyone!  If you’ve been building with Google Cloud lately, you might have noticed some shiny...",
      "url": "https://dev.to/devteam/officially-introducing-the-google-ai-and-google-cloud-run-badges-mn9",
      "tags": "cloudnextchallenge, devchallenge, googlecloud, gemini",
      "reactions": 9,
      "comments": 0,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "What was your win this week!?",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-8ep",
      "tags": "discuss, weeklyretro",
      "reactions": 49,
      "comments": 77,
      "reading_time": 1,
      "author": "jess"
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
    },
    {
      "title": "Keeping You in the Driver's Seat and AI as the Copilot",
      "description": "Last week I attended NDC Sydney, a large global tech conference aimed at software developers. The...",
      "url": "https://dev.to/liatmoss/keeping-you-in-the-drivers-seat-and-ai-as-the-copilot-1oc8",
      "tags": "ai, programming, productivity, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "liatmoss"
    },
    {
      "title": "The Untold issues with AI job-takeover theory ( chapter 1)",
      "description": "TLDR: AI is an abstraction for coding. And like all abstractions, it never replaces the need for the...",
      "url": "https://dev.to/tiagobnobrega/the-untold-issues-with-ai-job-takeover-theory-chapter-1-g9h",
      "tags": "ai, softwaredevelopment, career, programming",
      "reactions": 2,
      "comments": 2,
      "reading_time": 4,
      "author": "tiagobnobrega"
    },
    {
      "title": "Instructions. Skills. Tools. How Google Embedded Skills Into Every Layer of Its Agent Stack",
      "description": "Agent Skills Adoption    Prompt Bloat has a name and a fix. Skills are now load-bearing...",
      "url": "https://dev.to/gde/instructions-skills-tools-how-google-embedded-skills-into-every-layer-of-its-agent-stack-5415",
      "tags": "googleadk, googleagentplatform, enterpriseaistrategy, geminienterprise",
      "reactions": 5,
      "comments": 0,
      "reading_time": 11,
      "author": "sonikaj"
    },
    {
      "title": "Google's Most Important NEXT '26 Announcement Wasn't Gemini 2.5 Ultra",
      "description": "This is a submission for the Google Cloud NEXT Writing Challenge     Every developer building AI...",
      "url": "https://dev.to/pooja_bhavani/googles-most-important-next-26-announcement-wasnt-gemini-25-ultra-27ff",
      "tags": "devchallenge, cloudnextchallenge, googlecloud",
      "reactions": 6,
      "comments": 0,
      "reading_time": 8,
      "author": "pooja_bhavani"
    },
    {
      "title": "How to use AI to identify and fix security vulnerabilities in your codebase",
      "description": "Meta: Understand the common code-based security vulnerabilities, from SQL injection to XSS, and how...",
      "url": "https://dev.to/coderabbitai/how-to-use-ai-to-identify-and-fix-security-vulnerabilities-in-your-codebase-4na2",
      "tags": "ai, security, vulnerabilities, code",
      "reactions": 5,
      "comments": 0,
      "reading_time": 9,
      "author": "thatcoolguy"
    },
    {
      "title": "Building MCP Apps with Angular",
      "description": "If you've been building MCP servers, you know the drill: your tool returns JSON, the host renders it...",
      "url": "https://dev.to/dalenguyen/building-mcp-apps-with-angular-3849",
      "tags": "angular, mcp, typescript, vite",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "dalenguyen"
    },
    {
      "title": "How to make OpenClaw just work",
      "description": "This is a submission for the OpenClaw Writing Challenge           Intro   In this article, I want to...",
      "url": "https://dev.to/angeluz07/how-to-make-openclaw-just-work-2lm1",
      "tags": "devchallenge, openclawchallenge, tutorial, howto",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "angeluz07"
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
      "title": "Wasm is not quite a stack machine",
      "url": "https://purplesyringa.moe/blog/wasm-is-not-quite-a-stack-machine/",
      "score": 4,
      "comments": 0,
      "tags": [
        "plt",
        "wasm"
      ],
      "id": "h8hlp7"
    },
    {
      "title": "It's Not About The API - Fast, Flexible, and Simple Rendering in Vulkan (2024)",
      "url": "https://www.youtube.com/watch?v=7bSzp-QildA",
      "score": 1,
      "comments": 0,
      "tags": [
        "graphics",
        "video"
      ],
      "id": "0qqjyi"
    },
    {
      "title": "Let's Build the Terminal Pt. 1",
      "url": "https://chauhankiran.blogspot.com/2026/04/lets-build-terminal-pt-1.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "c"
      ],
      "id": "9ckz9x"
    },
    {
      "title": "Let’s All Agree to Use Seeds as ML-KEM Keys (2024)",
      "url": "https://words.filippo.io/ml-kem-seeds/",
      "score": 2,
      "comments": 2,
      "tags": [
        "cryptography"
      ],
      "id": "bnvmia"
    },
    {
      "title": "(Cryptographic) Registries Considered Harmful (2020)",
      "url": "https://words.filippo.io/registries-considered-harmful/",
      "score": 10,
      "comments": 0,
      "tags": [
        "cryptography"
      ],
      "id": "l4kgqg"
    },
    {
      "title": "HardenedBSD Is Now Officially on Radicle",
      "url": "https://hardenedbsd.org/article/shawn-webb/2026-04-26/hardenedbsd-officially-radicle",
      "score": 13,
      "comments": 0,
      "tags": [
        "freebsd",
        "vcs"
      ],
      "id": "5dbg0u"
    },
    {
      "title": "LLM-assisted coding is not deterministic. Does it matter?",
      "url": "https://blog.vrypan.net/2026/04/23/llm-assisted-coding-is-not-deterministic-does-it-matter/",
      "score": 3,
      "comments": 4,
      "tags": [
        "vibecoding"
      ],
      "id": "npaxtp"
    },
    {
      "title": "Why the Future Doesn't Need Us (Bill Joy, 2000)",
      "url": "https://web.archive.org/web/20160210081017/https://www.wired.com/2000/04/joy-2/",
      "score": 12,
      "comments": 2,
      "tags": [
        "philosophy"
      ],
      "id": "b2tvhe"
    },
    {
      "title": "Smolwebifying my site",
      "url": "https://akselmo.dev/posts/smolwebifying-my-site/",
      "score": 35,
      "comments": 17,
      "tags": [
        "web"
      ],
      "id": "fyev5y"
    },
    {
      "title": "PLFM_RADAR: Open-source, low-cost 10.5 GHz PLFM phased array RADAR system",
      "url": "https://github.com/NawfalMotii79/PLFM_RADAR",
      "score": 6,
      "comments": 1,
      "tags": [
        "hardware"
      ],
      "id": "vnnpwe"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "skogstokig",
      "descendants": 24,
      "id": 47875795,
      "kids": [
        47918052,
        47918012,
        47917858,
        47918221,
        47918004,
        47918244,
        47918445,
        47918053,
        47917901,
        47918389
      ],
      "score": 144,
      "time": 1776952471,
      "title": "Flipdiscs",
      "type": "story",
      "url": "https://flipdisc.io"
    },
    {
      "by": "ca98am79",
      "descendants": 365,
      "id": 47914165,
      "kids": [
        47915397,
        47916124,
        47915634,
        47915917,
        47915268,
        47916297,
        47918119,
        47918434,
        47917947,
        47915435,
        47916025,
        47918392,
        47917951,
        47916438,
        47917816,
        47916448,
        47917753,
        47915958,
        47915421,
        47915604,
        47915253,
        47918339,
        47915248,
        47915243,
        47915961,
        47917150,
        47915647,
        47917040,
        47915919,
        47917821,
        47916833,
        47917719,
        47917857,
        47917580,
        47917817,
        47917846,
        47916346,
        47915623,
        47917682,
        47918182,
        47917868,
        47915491,
        47918291,
        47916781,
        47917271,
        47916708,
        47917829,
        47915618,
        47916974,
        47916495,
        47916359,
        47915520,
        47914282,
        47916324,
        47916761,
        47917808,
        47918156,
        47915883,
        47916353,
        47915789,
        47915657,
        47918003,
        47916235,
        47917897,
        47915613,
        47917374,
        47916189,
        47917417,
        47916412,
        47916797,
        47917681,
        47916794,
        47916222,
        47915175,
        47918108,
        47915258,
        47916567,
        47916960,
        47917428,
        47916505,
        47915895,
        47915317,
        47915614,
        47917736,
        47915323,
        47915334,
        47917408,
        47916445,
        47915573
      ],
      "score": 682,
      "time": 1777236066,
      "title": "I bought Friendster for $30k – Here's what I'm doing with it",
      "type": "story",
      "url": "https://ca98am79.medium.com/i-bought-friendster-for-30k-heres-what-i-m-doing-with-it-d5e8ddb3991d"
    },
    {
      "by": "kweezar",
      "descendants": 13,
      "id": 47916890,
      "kids": [
        47917577,
        47917382,
        47918464,
        47917650,
        47918547,
        47917413,
        47917475,
        47918148
      ],
      "score": 102,
      "time": 1777254872,
      "title": "TurboQuant: A first-principles walkthrough",
      "type": "story",
      "url": "https://arkaung.github.io/interactive-turboquant/"
    },
    {
      "by": "koshyjohn",
      "descendants": 312,
      "id": 47913650,
      "kids": [
        47917921,
        47914102,
        47918576,
        47915107,
        47913863,
        47918436,
        47914201,
        47918506,
        47917196,
        47913734,
        47918324,
        47913977,
        47918246,
        47913825,
        47913992,
        47917134,
        47915209,
        47916513,
        47914208,
        47916158,
        47917794,
        47913757,
        47916925,
        47913967,
        47916638,
        47916366,
        47916987,
        47914020,
        47915189,
        47916030,
        47918299,
        47916532,
        47913780,
        47918275,
        47914033,
        47915201,
        47915845,
        47915831,
        47916428,
        47914398,
        47916129,
        47915526,
        47913820,
        47915412,
        47917971,
        47914228,
        47914795,
        47917915,
        47915001,
        47915097,
        47916632,
        47913794,
        47916433,
        47913769,
        47914435,
        47914185,
        47913980,
        47913740,
        47913960,
        47916108,
        47916144,
        47915328,
        47914754,
        47914705,
        47913904,
        47913836,
        47913961,
        47914013,
        47913808,
        47917583,
        47917968,
        47916218,
        47916946,
        47915848,
        47917023,
        47918437,
        47916931,
        47917074,
        47914307,
        47916375,
        47915774,
        47913651,
        47917233,
        47915830,
        47915194,
        47915303,
        47914324,
        47916205,
        47914312,
        47914137
      ],
      "score": 419,
      "time": 1777233792,
      "title": "AI should elevate your thinking, not replace it",
      "type": "story",
      "url": "https://www.koshyjohn.com/blog/ai-should-elevate-your-thinking-not-replace-it/"
    },
    {
      "by": "bjhess",
      "descendants": 33,
      "id": 47908051,
      "kids": [
        47916766,
        47918516,
        47916742,
        47917393,
        47910360,
        47918175,
        47917826,
        47918043,
        47916908,
        47918407,
        47918319,
        47917019,
        47917205,
        47917706,
        47917496,
        47908978,
        47916677,
        47916757,
        47918031,
        47916778,
        47916906,
        47917489,
        47908231,
        47917409,
        47917635
      ],
      "score": 234,
      "time": 1777186839,
      "title": "Self-updating screenshots",
      "type": "story",
      "url": "https://interblah.net/self-updating-screenshots"
    },
    {
      "by": "nervous_north",
      "descendants": 26,
      "id": 47903541,
      "kids": [
        47916860,
        47918439,
        47918555,
        47917546,
        47917387,
        47917319,
        47918022,
        47916914,
        47916689,
        47916674,
        47917200,
        47916809,
        47918340,
        47918333,
        47916717,
        47917178
      ],
      "score": 168,
      "time": 1777142463,
      "title": "Three constraints before I build anything",
      "type": "story",
      "url": "https://jordanlord.co.uk/blog/3-constraints/"
    },
    {
      "by": "o4c",
      "descendants": 0,
      "id": 47906666,
      "score": 14,
      "time": 1777169736,
      "title": "A Guide to CubeSat Mission and Bus Design",
      "type": "story",
      "url": "https://pressbooks-dev.oer.hawaii.edu/epet302/"
    },
    {
      "by": "dd23",
      "descendants": 49,
      "id": 47913855,
      "kids": [
        47914637,
        47916417,
        47915211,
        47914463,
        47915740,
        47914679,
        47915823,
        47914315,
        47917841,
        47916861,
        47915458,
        47917414,
        47917347,
        47915348,
        47914808
      ],
      "score": 221,
      "time": 1777234717,
      "title": "Fast16: High-precision software sabotage 5 years before Stuxnet",
      "type": "story",
      "url": "https://www.sentinelone.com/labs/fast16-mystery-shadowbrokers-reference-reveals-high-precision-software-sabotage-5-years-before-stuxnet/"
    },
    {
      "by": "ddrmaxgt37",
      "descendants": 32,
      "id": 47906420,
      "kids": [
        47918430,
        47917053,
        47918220,
        47917541,
        47918059,
        47916905,
        47917067,
        47917637,
        47916633,
        47917057,
        47916668,
        47917231
      ],
      "score": 90,
      "time": 1777166713,
      "title": "When the cheap one is the cool one",
      "type": "story",
      "url": "https://arun.is/blog/cheap-cool/"
    },
    {
      "by": "emschwartz",
      "descendants": 22,
      "id": 47878231,
      "kids": [
        47916951,
        47916817,
        47916748,
        47916021,
        47916763,
        47917403,
        47915909,
        47916561,
        47917203,
        47917415
      ],
      "score": 109,
      "time": 1776963744,
      "title": "Box to save memory in Rust",
      "type": "story",
      "url": "https://dystroy.org/blog/box-to-save-memory/"
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
      "title": "Same algorithm, 16x faster: optimizing a vector search engine’s hot path",
      "url": "https://dubeykartikay.com/posts/sembed-engine-vector-search-performance/",
      "permalink": "https://www.reddit.com/r/programming/comments/1swbm8a/same_algorithm_16x_faster_optimizing_a_vector/",
      "author": "/u/BgA_stan",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/BgA_stan [link] &#32; [comments]",
      "published": "2026-04-26T16:08:07+00:00"
    },
    {
      "title": "Fast16: High-Precision Software Sabotage 5 Years Before Stuxnet",
      "url": "https://www.sentinelone.com/labs/fast16-mystery-shadowbrokers-reference-reveals-high-precision-software-sabotage-5-years-before-stuxnet/",
      "permalink": "https://www.reddit.com/r/programming/comments/1swcgrl/fast16_highprecision_software_sabotage_5_years/",
      "author": "/u/teknikly-correct",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/teknikly-correct [link] &#32; [comments]",
      "published": "2026-04-26T16:39:10+00:00"
    },
    {
      "title": "\"Parse, don't Validate\" through the years with C++",
      "url": "https://derekrodriguez.dev/parse-dont-validate-through-the-years-with-c-/",
      "permalink": "https://www.reddit.com/r/programming/comments/1swhwt8/parse_dont_validate_through_the_years_with_c/",
      "author": "/u/dwrodri",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/dwrodri [link] &#32; [comments]",
      "published": "2026-04-26T20:00:34+00:00"
    },
    {
      "title": "Debugging WASM in Chrome DevTools",
      "url": "https://eli.thegreenplace.net/2026/debugging-wasm-in-chrome-devtools/",
      "permalink": "https://www.reddit.com/r/programming/comments/1swam8t/debugging_wasm_in_chrome_devtools/",
      "author": "/u/self",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/self [link] &#32; [comments]",
      "published": "2026-04-26T15:30:32+00:00"
    },
    {
      "title": "The Monday Elephant #2: SQL Queries to List Users and Groups",
      "url": "https://pgdash.io/blog/monday-elephant-postgres-tips-2.html?p",
      "permalink": "https://www.reddit.com/r/programming/comments/1swuqyf/the_monday_elephant_2_sql_queries_to_list_users/",
      "author": "/u/jmswlms",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/jmswlms [link] &#32; [comments]",
      "published": "2026-04-27T05:41:43+00:00"
    },
    {
      "title": "Event Sourcing Explained using Football ⚽️ - YouTube",
      "url": "https://www.youtube.com/watch?v=xPmQxYIi5fA&amp;list=PLCl5BUbK0jXt5l18S5UNAoUc4eQ2PJDye",
      "permalink": "https://www.reddit.com/r/programming/comments/1swbw0o/event_sourcing_explained_using_football_youtube/",
      "author": "/u/andrewcairns",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/andrewcairns [link] &#32; [comments]",
      "published": "2026-04-26T16:18:13+00:00"
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
      "title": "Why High-Performing Teams Look Like They Do Nothing",
      "description": "There is a belief quietly embedded in some engineering cultures that suffering equals seriousness....",
      "url": "https://dev.to/adamthedeveloper/why-high-performing-teams-look-like-they-do-nothing-2o4j",
      "tags": "programming, productivity, career, startup",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "adamthedeveloper"
    },
    {
      "title": "Autism as a catalyst",
      "description": "Autism hardly create effects directly: it amplifies whatever is already present, in both directions. The same wiring that produces unusual pattern recognition also produces sensory overload. The genius effect and the burnout are not opposites; they're the same amplifier applied to different inputs. This post synthesizes the series and names the mechanism running through all of it.",
      "url": "https://dev.to/raphink/autism-as-a-catalyst-322e",
      "tags": "mentalhealth, inclusion, community, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "raphink"
    },
    {
      "title": "The Untold issues with AI job-takeover theory ( chapter 1)",
      "description": "TLDR: AI is an abstraction for coding. And like all abstractions, it never replaces the need for the...",
      "url": "https://dev.to/tiagobnobrega/the-untold-issues-with-ai-job-takeover-theory-chapter-1-g9h",
      "tags": "ai, softwaredevelopment, career, programming",
      "reactions": 2,
      "comments": 2,
      "reading_time": 4,
      "author": "tiagobnobrega"
    },
    {
      "title": "I Let AI Write 80% of My Code for a Month. My Boss Gave Me a Raise.",
      "description": "GitHub Copilot and Claude Code are terrifying developers. Here's why I'm more valuable than ever—and...",
      "url": "https://dev.to/meetbhalodiya/i-let-ai-write-80-of-my-code-for-a-month-my-boss-gave-me-a-raise-58pa",
      "tags": "ai, webdev, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "meetbhalodiya"
    },
    {
      "title": "Data Engineers Don't Need DSA. So Why Do Interviews Still Test It?",
      "description": "LeetCode screens are driving senior DE talent away. Here's what the viral DSA debate exposes about who really benefits from broken hiring loops.",
      "url": "https://dev.to/datadriven/data-engineers-dont-need-dsa-so-why-do-interviews-still-test-it-bof",
      "tags": "dataengineering, interview, career, sql",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "datadriven"
    },
    {
      "title": "What 30 Days of AI-Powered Job Searching Taught Me",
      "description": "I spent a month using AI tools and custom scripts to optimize my job search. Here is what moved the needle and what was a waste of time.",
      "url": "https://dev.to/charliemorrison/what-30-days-of-ai-powered-job-searching-taught-me-ajp",
      "tags": "career, productivity, ai, jobsearch",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "charliemorrison"
    },
    {
      "title": "How to Build a Client-Side AI Tool With Zero Backend (Full Tutorial)",
      "description": "Step-by-step guide to building a resume ATS checker that runs entirely in the browser. No API keys, no server, no data collection.",
      "url": "https://dev.to/charliemorrison/how-to-build-a-client-side-ai-tool-with-zero-backend-full-tutorial-474j",
      "tags": "webdev, javascript, tutorial, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "charliemorrison"
    },
    {
      "title": "How I Built a 100% Free, ATS-Friendly CV Maker with Zero Backend: The Story of MakeFreeCV",
      "description": "Building a tool that people actually use is one of the best feelings for a developer. I recently set...",
      "url": "https://dev.to/mimishak/how-i-built-a-100-free-ats-friendly-cv-maker-with-zero-backend-the-story-of-makefreecv-53g1",
      "tags": "programming, career, javascript, webdev",
      "reactions": 5,
      "comments": 1,
      "reading_time": 3,
      "author": "mimishak"
    },
    {
      "title": "I Built 4 Free Career Tools With Zero Backend — Here's the Stack",
      "description": "Every career tool on the internet wants your data. Upload your resume here, paste your LinkedIn...",
      "url": "https://dev.to/charliemorrison/i-built-4-free-career-tools-with-zero-backend-heres-the-stack-3l6n",
      "tags": "webdev, javascript, career, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "charliemorrison"
    },
    {
      "title": "AGI is Coming — Cultivate Mental Models",
      "description": "If Winter (AGI) Is Coming ⚔️❄️, why mental models, not skills, will save?",
      "url": "https://dev.to/abhj/agi-is-coming-cultivate-mental-models-4khp",
      "tags": "ai, agi, career, opinion",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "abhj"
    }
  ]
}
```

