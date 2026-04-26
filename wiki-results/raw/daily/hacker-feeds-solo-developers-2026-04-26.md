# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-26 06:55:39 UTC

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
      "author": "thunderbird",
      "repo": "thunderbolt",
      "avatar": "https://github.com/thunderbird.png",
      "repo_link": "https://github.com/thunderbird/thunderbolt",
      "desc": "AI You Control: Choose your models. Own your data. Eliminate vendor lock-in.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 257,
      "added_stars": 2799,
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
      "author": "zilliztech",
      "repo": "claude-context",
      "avatar": "https://github.com/zilliztech.png",
      "repo_link": "https://github.com/zilliztech/claude-context",
      "desc": "Code search MCP for Claude Code. Make entire codebase the context for any coding agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 723,
      "added_stars": 3301,
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
          "username": "jaxkodex",
          "href": "https://github.com/jaxkodex",
          "avatar": "https://avatars.githubusercontent.com/u/2271391"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
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
      "forks": 2575,
      "added_stars": 5118,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5755,
      "added_stars": 5341,
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
      "forks": 2772,
      "added_stars": 3018,
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
      "author": "langfuse",
      "repo": "langfuse",
      "avatar": "https://github.com/langfuse.png",
      "repo_link": "https://github.com/langfuse/langfuse",
      "desc": "🪢 Open source LLM engineering platform: LLM Observability, metrics, evals, prompt management, playground, datasets. Integrates with OpenTelemetry, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2637,
      "added_stars": 979,
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
      "forks": 328,
      "added_stars": 1246,
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
      "author": "koala73",
      "repo": "worldmonitor",
      "avatar": "https://github.com/koala73.png",
      "repo_link": "https://github.com/koala73/worldmonitor",
      "desc": "Real-time global intelligence dashboard. AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8439,
      "added_stars": 3747,
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
      "author": "formbricks",
      "repo": "formbricks",
      "avatar": "https://github.com/formbricks.png",
      "repo_link": "https://github.com/formbricks/formbricks",
      "desc": "Open Source Qualtrics Alternative",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2219,
      "added_stars": 61,
      "builtBy": [
        {
          "username": "mattinannt",
          "href": "https://github.com/mattinannt",
          "avatar": "https://avatars.githubusercontent.com/u/675065"
        },
        {
          "username": "jobenjada",
          "href": "https://github.com/jobenjada",
          "avatar": "https://avatars.githubusercontent.com/u/72809645"
        },
        {
          "username": "Dhruwang",
          "href": "https://github.com/Dhruwang",
          "avatar": "https://avatars.githubusercontent.com/u/67850763"
        },
        {
          "username": "pandeymangg",
          "href": "https://github.com/pandeymangg",
          "avatar": "https://avatars.githubusercontent.com/u/54475686"
        },
        {
          "username": "gupta-piyush19",
          "href": "https://github.com/gupta-piyush19",
          "avatar": "https://avatars.githubusercontent.com/u/56182734"
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
      "forks": 57121,
      "added_stars": 1206,
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
      "author": "KeygraphHQ",
      "repo": "shannon",
      "avatar": "https://github.com/KeygraphHQ.png",
      "repo_link": "https://github.com/KeygraphHQ/shannon",
      "desc": "Shannon Lite is an autonomous, white-box AI pentester for web applications and APIs. It analyzes your source code, identifies attack vectors, and executes real exploits to prove vulnerabilities before they reach production.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4488,
      "added_stars": 1832,
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
      "author": "Adam-CAD",
      "repo": "CADAM",
      "avatar": "https://github.com/Adam-CAD.png",
      "repo_link": "https://github.com/Adam-CAD/CADAM",
      "desc": "CADAM is the open source text-to-CAD web application",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 338,
      "added_stars": 564,
      "builtBy": [
        {
          "username": "zachdive",
          "href": "https://github.com/zachdive",
          "avatar": "https://avatars.githubusercontent.com/u/72450807"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tsadpbb",
          "href": "https://github.com/tsadpbb",
          "avatar": "https://avatars.githubusercontent.com/u/90269351"
        },
        {
          "username": "ForzaAaRon",
          "href": "https://github.com/ForzaAaRon",
          "avatar": "https://avatars.githubusercontent.com/u/44490269"
        },
        {
          "username": "dylan-at-adam",
          "href": "https://github.com/dylan-at-adam",
          "avatar": "https://avatars.githubusercontent.com/u/200306849"
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
      "forks": 4211,
      "added_stars": 657,
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
      "title": "I built a website to track songs that mention specific dates",
      "url": "https://i.redd.it/a0js89etlexg1.png",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svofbi/i_built_a_website_to_track_songs_that_mention/",
      "author": "/u/rySeeR4",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey! I built a site to track all songs that mention a specific date. I have been checking many sources, and for now this is what I got. Built it with React and FastAPI. Check it out at TheYearInSongs.com &#32; submitted by &#32; /u/rySeeR4 [link] &#32; [comments]",
      "published": "2026-04-25T21:24:50+00:00"
    },
    {
      "title": "I built a loading indicator library around parametric curves and it has a playground too!",
      "url": "https://www.reddit.com/gallery/1sv892n",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sv892n/i_built_a_loading_indicator_library_around/",
      "author": "/u/Rovax",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "The main idea is that you could pass a math function that returns an x and a y coordinate over time ( t ), and it draws an animated trail. There are also built-in curves readily available from the project exports. But it&#39;s also fun to tinker with it and write your own in the playground and see it move in real time! If you prefer not to go through a build/bundle step, there is also a CDN option where you can add two lines of HTML to have it animate right away One weakness I feel like this ended up having was that the curves feel more of a &quot;centerpiece&quot; visuals rather than a standard small loading spinner. At lower scales it kind of loses its fidelity. Would you use something like this for an actual project, or is this more of fun to look at but not to use thing? [Playground](sarmal.art/play) npm: @sarmal/core &#32; submitted by &#32; /u/Rovax [link] &#32; [comments]",
      "published": "2026-04-25T10:12:09+00:00"
    },
    {
      "title": "I built a website that tracks every stock trade Congress makes",
      "url": "https://i.redd.it/qbp9o8yfsaxg1.gif",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sv6l6n/i_built_a_website_that_tracks_every_stock_trade/",
      "author": "/u/madredditscientist",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Congressional trading data is relatively commoditized, but I couldn&#39;t find any open-source version with the features I wanted. The data is lagged (median 28 days from trade to disclosure, 19% of filings miss the 45-day STOCK Act deadline). But there&#39;s still interesting patterns to explore. Live app: congress.kadoa.com Source: github.com/kadoa-org/congress-trading-monitor What&#39;s next: Joining it with additional datasets like legislation data (filers that are part of a committee related to a certain sector, etc.) Proper CSV exports and documented endpoints Notifications &#32; submitted by &#32; /u/madredditscientist [link] &#32; [comments]",
      "published": "2026-04-25T08:33:50+00:00"
    },
    {
      "title": "Finished a Timeline project (no AI used)",
      "url": "https://www.reddit.com/gallery/1svdnx2",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svdnx2/finished_a_timeline_project_no_ai_used/",
      "author": "/u/Alx__",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "See it with animations and hover effects on ufotimeline.com . Each filter/category has its own color to make it easier to browse/research. By pressing on a year, you get yearly archives. By pressing on a month, you get the monthly archive - and so on. The main timeline uses WordPress&#39; default post/category feature. The &quot;People&quot; and &quot;Websites&quot; sections are separate and made with custom post types. Category: News Category: Documentaries Category: Famous Cases Category: Sightings Category: Books &amp; Documents Category: Spotlight Category: Quotes Page: People Page: Websites Here is how it looked when I began working on it, and what you see today is what it evolved into without any plan or so. I recently added some final touches (like the menu) and I think I&#39;m actually done with the design now - but I am always listening to thoughts on how to improve it. &#32; submitted by &#32; /u/Alx__ [link] &#32; [comments]",
      "published": "2026-04-25T14:27:44+00:00"
    },
    {
      "title": "I built an interactive explainer about how Shazam (the music ID app) works. Link in post!",
      "url": "https://www.reddit.com/gallery/1svaesz",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svaesz/i_built_an_interactive_explainer_about_how_shazam/",
      "author": "/u/Shriracha",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Live link: https://perthirtysix.com/how-the-heck-does-shazam-work Interactive bits build using Canvas, Web Audio API, and Vue Hope you enjoy it! &#32; submitted by &#32; /u/Shriracha [link] &#32; [comments]",
      "published": "2026-04-25T12:07:21+00:00"
    },
    {
      "title": "I built a 2010s themed microblogging site with SolidJS and a .NET Core API",
      "url": "https://www.reddit.com/gallery/1svly5k",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svly5k/i_built_a_2010s_themed_microblogging_site_with/",
      "author": "/u/RGBhedy",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Unlike most sites that try and get into this era, I tried to build this with modern technology while also sticking to simple and iconic design, solidjs was picked due to the performance and the fact that most native JS libraries work fine without a wrapper lib like React. Since most of the stuff I wanted to build needed a custom UI the ecosystem being smaller wasn&#39;t too much of an issue. One other thing I worked on the project was a simple WS wrapper to make stuff easier for myself, you can check that out at github.com/colourlabs/hanau check it out at https://bojan.social &#32; submitted by &#32; /u/RGBhedy [link] &#32; [comments]",
      "published": "2026-04-25T19:47:41+00:00"
    },
    {
      "title": "Do you know HTML? Really? Test it.",
      "url": "https://moritzglantz.de/html-quiz",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svlree/do_you_know_html_really_test_it/",
      "author": "/u/Repulsive-Bird6367",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Years ago there was this HTML memory test on CodePen , and I was wondering if it could be a real challenge and give you a result which tags you missed. &#32; submitted by &#32; /u/Repulsive-Bird6367 [link] &#32; [comments]",
      "published": "2026-04-25T19:40:45+00:00"
    },
    {
      "title": "My RPG Project ( Very WIP )",
      "url": "https://www.reddit.com/gallery/1sv70u6",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sv70u6/my_rpg_project_very_wip/",
      "author": "/u/Its_rEd96",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey! Some of you might have seen my RPG project a few weeks ago when I posted a question about what language should I choose to create this passion project of mine. I&#39;ve continued with PHP since that&#39;s what I&#39;m good with. Anyway this post is not about that, but rather how I progressed so far. I&#39;d like to show it to you how the game&#39;s progressing visually and logically. Frontend: I&#39;ve done a visual overhaul, I didn&#39;t quite like the previous style, it was way too blocky, clumsy and let&#39;s be honest: not a good looking one. This current design aims to be more modern yet I&#39;m still trying to preserve the oldschool vibe, it&#39;s very-very far from finish, it&#39;s more of a base than a complete work. Backend: Implemented a bunch of new stuff such as: Quest system with different objective types Explore places Gather Items Kill NPCs Item system improvements and more options Items that give quests ( Item dropped by a boss, starts a quest ) Item turn in for quests Equipped gear now shows on character model Redesigned item icons ( replaced placeholder icons ) Entire combat system rework Turn based combat logic has been completely reworked ( It was a complete mess before ) Added different types of DOTs ( damage over time ) such as : Bleed ( scales with strength ) Poison ( scales with agility ) Curse ( scales with intellect ) Added item requirement for spells, example: &quot;Steady shot&quot; a ranged attack can not be used if the player is wielding a sword Added spell book where players can activate a maximum of 5 spells which they can then use in combat Got many ideas for the future, but for now I&#39;m trying to aim for a stable base game. I&#39;d like to publish something like an alpha version just to test the current systems in the near future but still got stuff to fix... &#32; submitted by &#32; /u/Its_rEd96 [link] &#32; [comments]",
      "published": "2026-04-25T09:00:05+00:00"
    },
    {
      "title": "Built a per pixel film camera emulation engine in vanilla JS no shaders, no WebGL",
      "url": "https://i.redd.it/0wtbuhfaxdxg1.jpeg",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svkula/built_a_per_pixel_film_camera_emulation_engine_in/",
      "author": "/u/Beneficial_String411",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Spent the last few months writing per-pixel film camera emulations in plain Canvas 2D. Eight cameras (Contax T2, Leica M3, Polaroid SX-70, Pentax 67, Nikon F, Yashica T4, Mamiya 7, Plaubel Makina), each with its own pipeline. No WebGL, no shaders, just nested loops on ImageData. Why this stack: I wanted the entire engine to run in the browser without uploads. Privacy was the constraint. Canvas 2D was the only thing that worked everywhere (iOS Safari included) without shipping a 2MB WebGL framework. A single render does 5–7 full-frame passes: - Tonal curve (per-film 9-point spline LUT) - Per-channel color grading (luminance-gated shadow/highlight masks) - Lens vignette - Halation (red-channel Gaussian bloom on highlights, additive composite uses canvas filter:&#39;blur(Npx)&#39; which is GPU-accelerated even in Canvas 2D) - Luminance-weighted grain (PRNG seeded by image identity) - USM micro-contrast (Laplacian, threshold-gated) The hardest part by far was halation. Without it the output reads as &quot;Instagram filter.&quot; With it (warm bleed around highlights), film photographers stop bouncing in 3 seconds. ~30 lines of code, biggest delta in the whole project. Performance: 12MP photo on iPhone 12 = ~2-4s end to end. Most of the cost is `getImageData`/`putImageData` GPU↔CPU sync, not the loops themselves. Tried Web Workers but the data transfer cost killed any gain. Stack: - Vanilla JS, single HTML file - Cloudflare Pages + Functions for the 8 SEO landing pages and license validation - Polar.sh for payments - Plausible for the only analytics Honest limits: - No live preview while sliding (full re-render per change) - HEIC handling on iOS Safari is still flaky in some edge cases - B&amp;W cameras still differentiate less than I want at thumbnail size Live: faxoffice1987.com first camera (Contax T2) is free unlimited if you want to throw a photo at it. Open to roasts on the pipeline order, the grain math, or the canvas memory tuning. Especially curious if anyone has tricks for cheaper Gaussian blur on Canvas 2D — `filter:&#39;blur&#39;` works but quality degrades at large σ. &#32; submitted by &#32; /u/Beneficial_String411 [link] &#32; [comments]",
      "published": "2026-04-25T19:05:38+00:00"
    },
    {
      "title": "Anyone else finding AI tools great for starting things but not so much for finishing them?",
      "url": "https://www.reddit.com/r/webdev/comments/1svhfc6/anyone_else_finding_ai_tools_great_for_starting/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svhfc6/anyone_else_finding_ai_tools_great_for_starting/",
      "author": "/u/Responsible_East6308",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I’ve been using AI tools a bit more lately for UI/frontend work and keep running into the same pattern. They’re really good at getting something on the screen quickly. Like you can generate a rough dashboard or layout in a few minutes and it feels like you’re moving fast. But once I try to build on top of that, things start getting messy. The structure isn’t quite right, small changes take longer than expected, and I usually end up reworking a lot of it anyway. So now I mostly use them to get unstuck at the beginning, then rebuild properly once I know what I actually want. I’ve tried a few of the popular ones and they all seem to have the same tradeoff. Curious how others are using them, are you actually shipping from them, or mostly using them as a starting point? &#32; submitted by &#32; /u/Responsible_East6308 [link] &#32; [comments]",
      "published": "2026-04-25T16:55:06+00:00"
    },
    {
      "title": "I remember Webutation badges, are they still a thing?",
      "url": "https://www.reddit.com/r/webdev/comments/1svq9o7/i_remember_webutation_badges_are_they_still_a/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svq9o7/i_remember_webutation_badges_are_they_still_a/",
      "author": "/u/OMGCluck",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "In the 2010s, you could add a badge to your site showing its Webutation using various sources, then when it shut down in 2020 there was WebWiki which did the same thing until last year when it switched to some blogging dreck. Did anyone use these back then and find or make something today that does this? Or is this no longer a thing? &#32; submitted by &#32; /u/OMGCluck [link] &#32; [comments]",
      "published": "2026-04-25T22:42:23+00:00"
    },
    {
      "title": "A Modern Quality Pipeline and Testing Strategy for Frontend Projects",
      "url": "https://alexop.dev/posts/modern-frontend-quality-pipeline/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svhfmf/a_modern_quality_pipeline_and_testing_strategy/",
      "author": "/u/therealalex5363",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/therealalex5363 [link] &#32; [comments]",
      "published": "2026-04-25T16:55:24+00:00"
    },
    {
      "title": "I built a link in bio with bento boxes",
      "url": "https://i.redd.it/zilll60ondxg1.gif",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svji1w/i_built_a_link_in_bio_with_bento_boxes/",
      "author": "/u/Spacesh1psoda",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;ve had this link in bio platform for over 5 years, when I first built it there was just a list of links and a round image at the top. Today I&#39;m relaunching it with bento boxes instead so that you can build your own cozy place with images, links, quotes, sections and tons of other blocks. I&#39;ve recently fallen in love with the black and white aesthetics, so I thought I would redesign the whole platform with it and it turned out so good! Let me know what you think! platform | the profile page in the video &#32; submitted by &#32; /u/Spacesh1psoda [link] &#32; [comments]",
      "published": "2026-04-25T18:14:19+00:00"
    },
    {
      "title": "[Showoff Saturday] I built a daily literature-focused puzzle game and just hit 1,000 users in my first 2 weeks!",
      "url": "https://i.redd.it/phg7dlxt1dxg1.png",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svgami/showoff_saturday_i_built_a_daily/",
      "author": "/u/PlayRedacted",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Two weeks ago I launched Redacted., a daily literary puzzle game. Today I finally hit 1,000 users! This is my first major project and I&#39;m really proud of it. I spent about 4 months building and testing before launching. I realized in the two weeks post-launch that I was missing a few key features and got them deployed in an update this morning. What I ended up deploying in the update: - Email capture on the end screen with a Beehiiv-powered daily puzzle reminder - Streak counter clearly visible on end game screen and on the shareable results card (previously it was a small widget in the site header) - Playable archive calendar going back to day one (I&#39;m hoping this helps &#39;hook&#39; new users...) - Content additions, including 25 new books to push the total to 154 with a realistic roadmap to two full years of content I&#39;m hoping these new features will drive my retention rate up. I did have some organic improvements in retention, reaching about 17% in week 2. My next steps will be: - A library archive page that lists all books included in the game. I&#39;m hoping this will be a good lever for SEO and drive some organic growth. - Read Now/Buy Now links for monetization. All books are Public Domain, so I plan to offer the user a free link to the eBook and a Bookshop affiliate link at the end of each daily puzzle. Game is at playredacted.com if you want to try it. Any and all feedback is welcome! Any insights on the growth and retention strategies would be greatly appreciated. &#32; submitted by &#32; /u/PlayRedacted [link] &#32; [comments]",
      "published": "2026-04-25T16:11:12+00:00"
    },
    {
      "title": "Metadata editor for photographers",
      "url": "http://Jade-gt.com",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svd727/metadata_editor_for_photographers/",
      "author": "/u/jesuspancakestogo",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hello everyone! This is my batch metadata editor project that I started last year. I am interested in how effective the landing is. Also check out the blog. How well does it connect visitors back to the app. Lastly please use the app and test out on some of your images and give me feedback on the work flow. Thanks for looking. &#32; submitted by &#32; /u/jesuspancakestogo [link] &#32; [comments]",
      "published": "2026-04-25T14:08:44+00:00"
    },
    {
      "title": "Launched Stock Image Website for Artists, Designers, and Developers for inspiration/Assets free for commercial use. Looking feedback.",
      "url": "https://i.redd.it/mt9lukuplcxg1.jpeg",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sve6gu/launched_stock_image_website_for_artists/",
      "author": "/u/That_Bad6338",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Launched Stock Image website imagical.store for beta testing. Looking for valuable feedback. My main objective is to make it suitable for getting inspiration and assets for starting point. Currently I have uploaded 80K assets images from different categories and planning full release of 4M in May 2026. Full release would contain backgrounds, textures, displacement maps, and other type of assets. My current tech stack: Astro SSR, Cloudflare CDN and R2, PostgreSQL DB I would love to get your valuable feedback and suggestion. &#32; submitted by &#32; /u/That_Bad6338 [link] &#32; [comments]",
      "published": "2026-04-25T14:48:24+00:00"
    },
    {
      "title": "Play Square Off! An online strategy game (React, FastAPI, Postgres, Redis)",
      "url": "https://www.reddit.com/r/webdev/comments/1svh25c/play_square_off_an_online_strategy_game_react/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svh25c/play_square_off_an_online_strategy_game_react/",
      "author": "/u/ian4tge",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Play Square Off! It’s a turn-based strategy board game: claim spaces, form squares and diamonds, and outscore your opponent. This is probably my fourth full rebuild of the same game idea. V1 was a school project in Python only. Throughout my career I kept learning what a “real” web app looks like, so I tore it down and started over more than once. The current stack is React + TypeScript on the front end, FastAPI on the back, PostgreSQL for persistence, Redis for the bits that need to be fast, and WebSockets for real-time play. What you can do in the app Play against CPUs at several difficulty levels. Pass-and-play with friends on the same device. Online with friends from separate devices. Browse a lobby and see other people waiting for a match; jump in if you like. Create an account to track your games and view stats I’d really like feedback on game flow (does a round feel clear from start to finish?), instructions (can you understand the rules without a wall of text?), and overall UI/UX (anything clunky, confusing, or worth polishing). Bragging rights: if you can beat CPU level 6, I’m impressed. I built the thing and I only win about half the time on that setting. https://square-off.com &#32; submitted by &#32; /u/ian4tge [link] &#32; [comments]",
      "published": "2026-04-25T16:40:43+00:00"
    },
    {
      "title": "Finding the sweet spot for self-hosting without the сloud giant overhead?",
      "url": "https://www.reddit.com/r/webdev/comments/1svc8lt/finding_the_sweet_spot_for_selfhosting_without/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svc8lt/finding_the_sweet_spot_for_selfhosting_without/",
      "author": "/u/ivyhoro",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I’ve been diving deep into self-hosting my dev environments lately to move away from the rising costs of Her͏oku and Ver͏cel. I recently settled on Coo͏lify (which is ama͏zing, btw), but I hit a wall when it came to choosing the right VPS provider. I initially looked at A͏WS Ligh͏tsail and Kama͏tera. Lightsail felt a bit restrictive with specific networking rules that messed with my PaaS setup, and I had some weird latency issues with Kamatera in certain regions. What I’m looking for is a provider that offers: * True scalability: not just pick a plan, but being able to tweak CPU/RAM independently as the app grows. * API-first approach: since I’m automating deployments, I need a clean CLI/API. * Consistent IOPS: high disk performance is crucial for the databases running inside my containers. I’ve also seen people mention Serve͏rspace and Het͏zner for this kind of setup. Haven’t used them myself, but it came up a few times while I was looking around. For those of you running PaaS-like setups on a budget (~$10-15/mo), what’s your stable go-to? Do you stick with the big names despite the complexity or have you found better luck with more specialized providers? &#32; submitted by &#32; /u/ivyhoro [link] &#32; [comments]",
      "published": "2026-04-25T13:29:00+00:00"
    },
    {
      "title": "Showcasing my Nextjs horror jumpscare database, feedback welcome!",
      "url": "https://notscare.me",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sv5cza/showcasing_my_nextjs_horror_jumpscare_database/",
      "author": "/u/DevWarrior504",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I built notscare.me with Nextjs, a database for horror movie and series jumpscares and triggers. Users can search any film/series, see exact timestamps, intensity ratings, and trigger types (e.g. shadows, sounds). It’s niche but getting steady traffic from horror fans. Any feedback on UX, performance or features you would add? Thank you. &#32; submitted by &#32; /u/DevWarrior504 [link] &#32; [comments]",
      "published": "2026-04-25T07:22:50+00:00"
    },
    {
      "title": "[showoff saturday] i made download.fyi - file sharing with a p2p quick mode, no server upload",
      "url": "https://download.fyi",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svnms8/showoff_saturday_i_made_downloadfyi_file_sharing/",
      "author": "/u/kedi_dili",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "hey, i made download.fyi, a file sharing site like wetransfer but with a few things i wanted myself. quick share: drop a file, show a qr, the other person scans it, the file goes browser to browser over webrtc. nothing uploaded, the key sits in the url so even my server can&#39;t read it. stored mode: normal cloud share with expiry. paid plans give you a username and links like download.fyi/yourname/holiday-photos, plus custom branding. also a small mac/win/linux app (tauri), a &quot;send me files&quot; link instead of the usual &quot;i send you&quot;, and 12 languages. stack: next.js, mongo, node signaling server, fastify worker, tauri, s3, coolify on a vps. just fixed around 50 bugs and security issues this week so if something breaks tell me. https://download.fyi · quick share: https://download.fyi/quick &#32; submitted by &#32; /u/kedi_dili [link] &#32; [comments]",
      "published": "2026-04-25T20:53:01+00:00"
    },
    {
      "title": "[Showoff Saturday] A growing library of polished web interactions and animations",
      "url": "https://i.redd.it/c7xujlxzvcxg1.png",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svfecq/showoff_saturday_a_growing_library_of_polished/",
      "author": "/u/Worried_Cap5180",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I am building a collection of interactions and animations that you can plug into your own projects to add more thoughtful detail and polish. They are built specifically for people working on marketing sites, portfolios, landing pages and even CMS setups like Webflow or WordPress. If you’re working with HTML, CSS, and JS, they’ll fit right in. Each one comes with the full source code and a clear breakdown of how it works, so you can tweak or build on top of it. I’m adding new interactions regularly as I build them. Take a look -&gt; www.thecreativeweb.dev &#32; submitted by &#32; /u/Worried_Cap5180 [link] &#32; [comments]",
      "published": "2026-04-25T15:36:26+00:00"
    },
    {
      "title": "showoff saturday: i built a simulator and odds calculator for blooket so people stop wasting their tokens",
      "url": "https://www.reddit.com/r/webdev/comments/1svbfa3/showoff_saturday_i_built_a_simulator_and_odds/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svbfa3/showoff_saturday_i_built_a_simulator_and_odds/",
      "author": "/u/SideQuestDev",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "hey guys. been working on a small side project to practice some next.js and tailwind, and finally got it to a decent state to share. it&#39;s a calculator and simulator for blooket (an edtech game with some crazy low drop rates for rare items, like 0.02% for some chromas). players usually waste tons of in-game tokens just blindly opening packs. so i built blooketsimulator.com . it lets you input your token balance, pick a pack, and run simulations based on the actual in-game math. the trickiest part to build was the &quot;include resell value&quot; toggle, which simulates selling duplicate items back to the game in real-time, making the probability loop way more complex. stack is pretty simple: next.js and tailwind. tried to keep the client-side js minimal so the mobile performance doesn&#39;t completely suck (learned my lesson about core web vitals recently 😅). would love any feedback on the ui/ux, especially the mobile layout since the pack grid was giving me a headache. let me know if you spot any weird bugs or if the dark mode contrast looks off on your screen. cheers. &#32; submitted by &#32; /u/SideQuestDev [link] &#32; [comments]",
      "published": "2026-04-25T12:54:07+00:00"
    },
    {
      "title": "[Show Off Saturday] I built SPEARMAP - a real-time spearfishing conditions map with hex grids, species habitat scoring, and a lobster nocturnal timing model",
      "url": "https://spearmap.com/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sv5suc/show_off_saturday_i_built_spearmap_a_realtime/",
      "author": "/u/Jolly-Advantage-7245",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey r/webdev 👋 I want to share something I&#39;ve been building for the past few months: SPEARMAP - a mobile-first web app for spearfishers that shows real-time and 7-day forecast conditions across the South West England coastline, colour-coded on an interactive hex map. The goal: help me (and other divers I guess 😋) find the best spots, at the best times, while staying safe. Rather than a feature list, here&#39;s roughly how it got built: Starting point — a map with hexagons The foundation is a React + Fastify monorepo. On day one I had Mapbox rendering coloured H3 hexagons over the sea and a time slider to scrub through a 7-day forecast. The hex grid is generated server-side so the frontend just receives scored cells — no raw geometry. The first big cut was the coastal zone filter: strip out all offshore ocean cells and land cells, keep only cells within 1 nautical mile of the coast. That reduced the grid from thousands of cells to 339 valid dive sites, kept API costs manageable, and immediately made the map readable. Worth it. Making the free tier work Stormglass (swell, currents, water temp, tides) gives 10 API calls per day on the free tier. Serving 339 cells × 168 forecast hours from 10 calls sounds impossible — the trick is a station cache: fetch 7 days of data for 5 representative marine stations at startup, persist to disk, and serve all per-cell data from that in-memory store. Tidal state between the highs and lows is sinusoidally interpolated rather than fetched per hour. Result: exactly 10 Stormglass calls per day regardless of traffic. The scoring engine I started with additive scoring and it immediately felt wrong. Spearfishing conditions aren&#39;t additive — a perfect tide cannot compensate for zero visibility. Switched to a multiplicative block model: Score = 100 × Activity^0.35 × Visibility^0.40 × Biology^0.20 × Pressure^0.05 The exponents encode the real hierarchy (visibility dominates). A soft visibility gate hard-caps any cell at 35 if water clarity is genuinely unusable, regardless of everything else. Without the gate, cells with near-zero clarity were still scoring 40 when the tide and temperature happened to be good. Danger, kept separate from score A high-scoring cell can still be dangerous. A strong current on a clean, warm, settled day is productive for fish but genuinely risky for a diver. So danger is computed entirely independently — five axes (wave height, wave energy, wind speed, current, temperature) assessed against BSAC safety thresholds. Any dangerous axis triggers &#39;dangerous&#39;; 2+ caution axes give &#39;caution&#39;. Dangerous cells get a thick red border on the map; caution cells get an amber border and a ⚠ icon. Score and danger never bleed into each other. Species-aware conditions scoring A single &quot;fish&quot; temperature curve was always a simplification. Bass and pollock anti-correlate on SST — the autumn cold-snap that kills the bass score is exactly when pollock conditions peak. So I split the biology block into three species models (bass, pollock, flatfish), each with its own temperature curve tuned to UK inshore behaviour. The map now colours cells by whichever species you&#39;ve selected, and a side-by-side species table appears when you tap a cell. Habitat layer — what never changes Alongside the real-time conditions layer, there&#39;s a static habitat suitability layer built from two open geospatial datasets at startup: EMODnet Bathymetry (depth) and EMODnet Geology (seabed substrate). Each coastal cell gets a habitat score per species — bass rewards mixed reef, flatfish rewards sand, pollock is largely substrate-agnostic. This layer never changes, because depth and substrate don&#39;t change. The key design decision: keep it visually separate and independently toggleable, so a diver can ask &quot;is this structurally good habitat?&quot; independently of &quot;is today a good conditions day?&quot; The lobster model Lobster needed an entirely different approach: they&#39;re nocturnal, emerging from reef crevices after dark. So the lobster score combines a light decay curve from sunset (further suppressed by moon illumination), a temperature bell curve, a tidal flow preference, and a seasonal penalty — multiplied against the static habitat score to produce a single &quot;right place, right time&quot; hunt score. The elegant bit: you never explicitly exclude daytime. The light block naturally returns near-zero during daylight, so the score collapses to zero before sunset without any conditional logic. One thing that surprised me Going from Natural Earth 50m coastline data to 10m data increased the valid cell count from 73 to 104 — a 42% coverage increase at zero scoring cost. Those 31 new cells (small coves, tighter headlands) were physically valid dive sites all along, just invisible to the app because the lower-resolution polygon had filled them in. Where it is now Live at spearmap.com (South West England coverage — Land&#39;s End to Weymouth) 7-day forecast, hex map with continuous gradient scoring, danger borders, species selector, habitat layer, bathymetry overlay, Best This Week panel Frontend on Vercel, API on Railway Phase 3 is session logging, catch recording, and community data — but Phase 1 + 2 are fully live Happy to answer any questions about the scoring model, the station cache architecture, or anything else. Would love feedback from anyone who dives! &#32; submitted by &#32; /u/Jolly-Advantage-7245 [link] &#32; [comments]",
      "published": "2026-04-25T07:48:19+00:00"
    },
    {
      "title": "Bamboozle - api mocking",
      "url": "https://www.reddit.com/r/webdev/comments/1svww52/bamboozle_api_mocking/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svww52/bamboozle_api_mocking/",
      "author": "/u/Betweenirl",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hello, I just wanted to take a moment to share an open source project i started last week called Bamboozle https://github.com/matt-andrews/bamboozle Bamboozle is an api mocking server that you can use for integration testing, local dev, or whatever you want really. You can load route configurations with json/yaml at container startup, or you can hit the control api to generate routes from your tests. You can also make assertions based off of historical route data, so you can verify that your routes are being hit with the data you expect. The compressed image size is 3.6mb and average startup time to first route response is ~10ms. I have been using this project to learn rust so its probably not the best code ever, and I did have some help from AI. Anyways, I hope someone here finds this useful! &#32; submitted by &#32; /u/Betweenirl [link] &#32; [comments]",
      "published": "2026-04-26T03:56:34+00:00"
    },
    {
      "title": "LeetCode Galaxy, cool way to flex your leetcode profile",
      "url": "https://leetcode-galaxy.vercel.app",
      "permalink": "https://www.reddit.com/r/webdev/comments/1svwabg/leetcode_galaxy_cool_way_to_flex_your_leetcode/",
      "author": "/u/captainOfSage",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Built a little tool that turns your LeetCode profile into a shareable stat card Been grinding on LeetCode for a while, and one thing always annoyed me — sharing progress usually means posting awkward screenshots of your profile/contest page. So I made a small side project: **LeetCode Galaxy** → https://leetcode-galaxy.vercel.app Enter your username and it generates a clean stat card with stuff like: • Contest rating • Global rank • Problems solved (easy / medium / hard) • Badges • Submission heatmap • Streak / active days • Export as PNG Made it mainly for fun (and a little vanity 😄), but figured other people here might enjoy it too. Would love honest feedback: * what stats should be added? * anything that looks bad / confusing? * features you&#39;d actually use? Feel free to break it. &#32; submitted by &#32; /u/captainOfSage [link] &#32; [comments]",
      "published": "2026-04-26T03:25:31+00:00"
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
      "forks": 2715,
      "added_stars": 7119,
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
      "author": "QuantumNous",
      "repo": "new-api",
      "avatar": "https://github.com/QuantumNous.png",
      "repo_link": "https://github.com/QuantumNous/new-api",
      "desc": "A unified AI model hub for aggregation & distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemini-compatible formats. A centralized gateway for personal and enterprise model management. 🍥",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6090,
      "added_stars": 6093,
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
      "added_stars": 1442,
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
      "forks": 503,
      "added_stars": 1141,
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
      "forks": 283,
      "added_stars": 742,
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
      "author": "googleapis",
      "repo": "mcp-toolbox",
      "avatar": "https://github.com/googleapis.png",
      "repo_link": "https://github.com/googleapis/mcp-toolbox",
      "desc": "MCP Toolbox for Databases is an open source MCP server for databases.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1481,
      "added_stars": 1345,
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
      "forks": 3902,
      "added_stars": 1481,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 746,
      "added_stars": 1187,
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
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3058,
      "added_stars": 1570,
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
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5257,
      "added_stars": 1728,
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
      "forks": 84,
      "added_stars": 768,
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
      "forks": 1292,
      "added_stars": 204,
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
      "forks": 15806,
      "added_stars": 4614,
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
      "author": "mudler",
      "repo": "LocalAI",
      "avatar": "https://github.com/mudler.png",
      "repo_link": "https://github.com/mudler/LocalAI",
      "desc": "LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4024,
      "added_stars": 1605,
      "builtBy": [
        {
          "username": "mudler",
          "href": "https://github.com/mudler",
          "avatar": "https://avatars.githubusercontent.com/u/2420543"
        },
        {
          "username": "localai-bot",
          "href": "https://github.com/localai-bot",
          "avatar": "https://avatars.githubusercontent.com/u/139863280"
        },
        {
          "username": "dave-gray101",
          "href": "https://github.com/dave-gray101",
          "avatar": "https://avatars.githubusercontent.com/u/15875595"
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
      "forks": 840,
      "added_stars": 269,
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
      "forks": 5009,
      "added_stars": 1004,
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
      "forks": 5119,
      "added_stars": 2132,
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
      "forks": 17305,
      "added_stars": 103696,
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
      "forks": 3547,
      "added_stars": 27798,
      "builtBy": [
        {
          "username": "luongnv89",
          "href": "https://github.com/luongnv89",
          "avatar": "https://avatars.githubusercontent.com/u/3288457"
        },
        {
          "username": "edocltd",
          "href": "https://github.com/edocltd",
          "avatar": "https://avatars.githubusercontent.com/u/258913972"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 3807,
      "added_stars": 10218,
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
      "forks": 2040,
      "added_stars": 11821,
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
      "forks": 2924,
      "added_stars": 10894,
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
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4764,
      "added_stars": 17315,
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
      "author": "microsoft",
      "repo": "markitdown",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/markitdown",
      "desc": "Python tool for converting files and office documents to Markdown.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7676,
      "added_stars": 25114,
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
      "forks": 812,
      "added_stars": 6306,
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
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use claude-code for free in the terminal, VSCode extension or via discord like openclaw",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1772,
      "added_stars": 9506,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1814,
      "added_stars": 8492,
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
      "author": "hugohe3",
      "repo": "ppt-master",
      "avatar": "https://github.com/hugohe3.png",
      "repo_link": "https://github.com/hugohe3/ppt-master",
      "desc": "AI generates natively editable PPTX from any document — real PowerPoint shapes, not images — no design skills needed",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 909,
      "added_stars": 5105,
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
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3798,
      "added_stars": 10617,
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
      "forks": 9990,
      "added_stars": 8021,
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
      "author": "hacksider",
      "repo": "Deep-Live-Cam",
      "avatar": "https://github.com/hacksider.png",
      "repo_link": "https://github.com/hacksider/Deep-Live-Cam",
      "desc": "real time face swap and one-click video deepfake with only a single image",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13406,
      "added_stars": 12395,
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
      "author": "SakanaAI",
      "repo": "AI-Scientist-v2",
      "avatar": "https://github.com/SakanaAI.png",
      "repo_link": "https://github.com/SakanaAI/AI-Scientist-v2",
      "desc": "The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 804,
      "added_stars": 3555,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "232+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1685,
      "added_stars": 5897,
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
      "author": "AIDC-AI",
      "repo": "Pixelle-Video",
      "avatar": "https://github.com/AIDC-AI.png",
      "repo_link": "https://github.com/AIDC-AI/Pixelle-Video",
      "desc": "🚀 AI 全自动短视频引擎 | AI Fully Automated Short Video Engine",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1084,
      "added_stars": 3492,
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
      "author": "plastic-labs",
      "repo": "honcho",
      "avatar": "https://github.com/plastic-labs.png",
      "repo_link": "https://github.com/plastic-labs/honcho",
      "desc": "Memory library for building stateful agents",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 330,
      "added_stars": 1851,
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
      "author": "sherlock-project",
      "repo": "sherlock",
      "avatar": "https://github.com/sherlock-project.png",
      "repo_link": "https://github.com/sherlock-project/sherlock",
      "desc": "Hunt down social media accounts by username across social networks",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9557,
      "added_stars": 8099,
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
      "author": "mvanhorn",
      "repo": "last30days-skill",
      "avatar": "https://github.com/mvanhorn.png",
      "repo_link": "https://github.com/mvanhorn/last30days-skill",
      "desc": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1985,
      "added_stars": 17356,
      "builtBy": [
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "j-sperling",
          "href": "https://github.com/j-sperling",
          "avatar": "https://avatars.githubusercontent.com/u/17969723"
        },
        {
          "username": "pejmanjohn",
          "href": "https://github.com/pejmanjohn",
          "avatar": "https://avatars.githubusercontent.com/u/481729"
        },
        {
          "username": "tmchow",
          "href": "https://github.com/tmchow",
          "avatar": "https://avatars.githubusercontent.com/u/517103"
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
      "title": "What was your win this week!?",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-8ep",
      "tags": "discuss, weeklyretro",
      "reactions": 41,
      "comments": 56,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "I'm Running Gemini as an Autonomous Coding Agent. Here's What It Can't Do and Which NEXT '26 Announcements Would Fix It.",
      "description": "This is a submission for the Google Cloud NEXT Writing Challenge  I'm running something called The...",
      "url": "https://dev.to/ai_made_tools/im-running-gemini-as-an-autonomous-coding-agent-heres-what-it-cant-do-and-which-next-26-6p2",
      "tags": "devchallenge, cloudnextchallenge, googlecloud",
      "reactions": 14,
      "comments": 9,
      "reading_time": 7,
      "author": "ai_made_tools"
    },
    {
      "title": "This is pretty exciting!\r\n\r\nhttps://github.com/matz/spinel",
      "description": "...",
      "url": "https://dev.to/ben/this-is-pretty-excitinghttpsgithubcommatzspinel-4bjl",
      "tags": "",
      "reactions": 1,
      "comments": 0,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "The Vonage Dev Discussion: Making mistakes",
      "description": "Nobody is perfect! Even the most seasoned developers have made mistakes – it’s all just part of the...",
      "url": "https://dev.to/vonagedev/the-vonage-dev-discussion-making-mistakes-32mc",
      "tags": "security, discuss, python",
      "reactions": 17,
      "comments": 9,
      "reading_time": 1,
      "author": "lizzzzz"
    },
    {
      "title": "The Hidden Challenge of Multi-LLM Context Management",
      "description": "Why token counting isn't a solved problem when building across providers   Building AI...",
      "url": "https://dev.to/backboardio/the-hidden-challenge-of-multi-llm-context-management-1pbh",
      "tags": "ai, webdev, programming, llm",
      "reactions": 8,
      "comments": 1,
      "reading_time": 2,
      "author": "jon_at_backboardio"
    },
    {
      "title": "Congrats to the April Fools Challenge Winners!!",
      "description": "We asked you to build something completely useless and you delivered.   The DEV April Fools Challenge...",
      "url": "https://dev.to/devteam/congrats-to-the-april-fools-challenge-winners-l8f",
      "tags": "devchallenge, 418challenge, jokes",
      "reactions": 45,
      "comments": 13,
      "reading_time": 2,
      "author": "jess"
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
      "title": "Empowering Autonomous AI Agents through Dynamic Tool Creation",
      "description": "Abstract   Welcome to the Agentic Enterprise era. This article explores a paradigm shift...",
      "url": "https://dev.to/gde/empowering-autonomous-ai-agents-through-dynamic-tool-creation-3pfm",
      "tags": "ai, gemini, agents, googleappsscript",
      "reactions": 8,
      "comments": 0,
      "reading_time": 16,
      "author": "tanaike"
    },
    {
      "title": "tinyboot v0.4.0 Released — The API is Stable",
      "description": "Minimal Rust bootloader for CH32 MCUs. v0.4.0 adds CH32V00x support, stabilizes the API and wire protocol, and fits in 1920 bytes of system flash.",
      "url": "https://dev.to/aq1018/tinyboot-v040-released-the-api-is-stable-2h76",
      "tags": "rust, embedded, bootloader, ch32",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "aq1018"
    },
    {
      "title": "How to Build a Vendor-Agnostic Logger (with a Grafana Implementation)",
      "description": "The Problem: Why I Built My Own Logger   If you’ve ever tried to implement proper logging in...",
      "url": "https://dev.to/matthxc/how-to-build-a-vendor-agnostic-logger-with-a-grafana-implementation-3mmo",
      "tags": "programming, frontend, webdev, javascript",
      "reactions": 0,
      "comments": 0,
      "reading_time": 13,
      "author": "matthxc"
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
      "title": "I have officially retired from Emacs",
      "url": "https://nullprogram.com/blog/2026/04/26/",
      "score": 1,
      "comments": 0,
      "tags": [
        "emacs",
        "vibecoding"
      ],
      "id": "plertt"
    },
    {
      "title": "A New Perspective on Drawing Venn Diagrams for Data Visualization",
      "url": "https://arxiv.org/abs/2601.06980",
      "score": 1,
      "comments": 0,
      "tags": [
        "math"
      ],
      "id": "g2jq2n"
    },
    {
      "title": "Replacing an Apple Time Capsule? Skip the Ubiquiti UNAS-2",
      "url": "https://rachelbythebay.com/w/2026/04/24/unas/",
      "score": 1,
      "comments": 1,
      "tags": [
        "hardware",
        "networking",
        "rant"
      ],
      "id": "9tvnsx"
    },
    {
      "title": "A breakthrough in C/C++ dependency management",
      "url": "https://lcamtuf.substack.com/p/a-breakthrough-in-cc-dependency-management",
      "score": 11,
      "comments": 6,
      "tags": [
        "c",
        "c++",
        "programming",
        "satire"
      ],
      "id": "cn89rt"
    },
    {
      "title": "Npm Slop & Wonky Software Supply Chains",
      "url": "https://simonramstedt.com/blog/2026-04-09-npm-slop-and-wonky-software-supply-chains/",
      "score": 4,
      "comments": 1,
      "tags": [
        "javascript",
        "nodejs",
        "security"
      ],
      "id": "hllfeo"
    },
    {
      "title": "Lute: a standalone runtime for Luau",
      "url": "https://lute.luau.org",
      "score": 7,
      "comments": 0,
      "tags": [
        "lua"
      ],
      "id": "jzuifo"
    },
    {
      "title": "It's OK To Use Floating Point for Money",
      "url": "https://suricrasia.online/blog/its-ok-to-use/",
      "score": 10,
      "comments": 0,
      "tags": [
        "satire"
      ],
      "id": "n8i2wl"
    },
    {
      "title": "It's OK to use coding assistance tools to revive the projects you never were going to finish",
      "url": "https://blog.matthewbrunelle.com/its-ok-to-use-coding-assistance-tools-to-revive-the-projects-you-never-were-going-to-finish/",
      "score": 14,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "dtkjsz"
    },
    {
      "title": "Transformers are Inherently Succinct",
      "url": "https://arxiv.org/abs/2510.19315",
      "score": 1,
      "comments": 0,
      "tags": [
        "ai"
      ],
      "id": "hzhyw9"
    },
    {
      "title": "My Homemade PBX",
      "url": "https://wandel.ca/homepage/pbx.html",
      "score": 11,
      "comments": 4,
      "tags": [
        "hardware"
      ],
      "id": "bwg33l"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "pr337h4m",
      "descendants": 179,
      "id": 47903126,
      "kids": [
        47906766,
        47907544,
        47906734,
        47907510,
        47907254,
        47907093,
        47906945,
        47907978,
        47908009,
        47907886,
        47906805,
        47907790,
        47907328,
        47907324,
        47907217,
        47907954,
        47906861,
        47906812,
        47906943,
        47906713,
        47907423,
        47907400,
        47907720,
        47907856,
        47907705,
        47907024,
        47906822,
        47906885,
        47906779,
        47906969,
        47907064,
        47907366,
        47907546
      ],
      "score": 284,
      "text": "<a href=\"https:&#x2F;&#x2F;www.erdosproblems.com&#x2F;1196\" rel=\"nofollow\">https:&#x2F;&#x2F;www.erdosproblems.com&#x2F;1196</a>",
      "time": 1777138838,
      "title": "Amateur armed with ChatGPT solves an Erdős problem",
      "type": "story",
      "url": "https://www.scientificamerican.com/article/amateur-armed-with-chatgpt-vibe-maths-a-60-year-old-problem/"
    },
    {
      "by": "chiefalchemist",
      "descendants": 92,
      "id": 47905984,
      "kids": [
        47907898,
        47906620,
        47906729,
        47906218,
        47906398,
        47906935,
        47907290,
        47906440,
        47907591,
        47906994,
        47907600,
        47906544,
        47907511,
        47906263,
        47907919,
        47906428,
        47906705,
        47906782,
        47906712,
        47906665,
        47906438,
        47906399,
        47906489,
        47907493,
        47906313
      ],
      "score": 191,
      "time": 1777162367,
      "title": "Why has there been so little progress on Alzheimer's disease?",
      "type": "story",
      "url": "https://freakonomics.com/podcast/why-has-there-been-so-little-progress-on-alzheimers-disease/"
    },
    {
      "by": "_-x-_",
      "descendants": 85,
      "id": 47906253,
      "kids": [
        47907806,
        47906830,
        47907426,
        47907152,
        47907196,
        47907855,
        47907794,
        47907789,
        47907399,
        47907410,
        47907713,
        47906638,
        47907587,
        47907637,
        47906499,
        47907142,
        47907804,
        47907310,
        47907565,
        47906567,
        47907502,
        47907793,
        47907594,
        47907776,
        47907408,
        47907537,
        47906974,
        47906542,
        47906303,
        47907201,
        47906677,
        47906481,
        47907859,
        47906754,
        47907057
      ],
      "score": 178,
      "text": "Every day for the past 3 days around 1pm EST the &#x27;Headspace&#x27; app has been silently appearing on my iPhone (13 Pro). Automatic downloads are turned off and I&#x27;ve updated to the latest iOS since this started happening.<p>I googled around and found a couple reddit threads with people reporting the exact same thing starting 2 or 3 days ago. There were reports from people on iPhone 12 and iPhone 17 so it doesn&#x27;t seem device-specific.<p>Anyone else seeing this? Does anyone understand how or why this is happening?",
      "time": 1777164656,
      "title": "Tell HN: An app is silently installing itself on my iPhone every day",
      "type": "story"
    },
    {
      "by": "gwerbret",
      "descendants": 53,
      "id": 47904876,
      "kids": [
        47905680,
        47905824,
        47905580,
        47906275,
        47905542,
        47905970,
        47905881,
        47906149,
        47905684,
        47907926,
        47905873,
        47906111,
        47905884,
        47907296,
        47906125,
        47906383,
        47905518,
        47905719,
        47906083
      ],
      "score": 259,
      "time": 1777153878,
      "title": "USB Cheat Sheet (2022)",
      "type": "story",
      "url": "https://fabiensanglard.net/usbcheat/index.html"
    },
    {
      "by": "jger15",
      "descendants": 0,
      "id": 47877811,
      "score": 20,
      "time": 1776962080,
      "title": "The route from Prussian military headquarters to Gary Gygax’s basement",
      "type": "story",
      "url": "https://asteriskmag.com/issues/14/shall-we-play-a-game"
    },
    {
      "by": "zdkaster",
      "descendants": 7,
      "id": 47907018,
      "kids": [
        47907810,
        47907779,
        47907893,
        47907019
      ],
      "score": 27,
      "time": 1777173902,
      "title": "GnuPG – post-quantum crypto landing in mainline",
      "type": "story",
      "url": "https://lists.gnupg.org/pipermail/gnupg-announce/2026q2/000504.html"
    },
    {
      "by": "iamwil",
      "descendants": 16,
      "id": 47885239,
      "kids": [
        47908018,
        47907802,
        47907890,
        47907985,
        47907766,
        47907805,
        47907577,
        47907838,
        47907462,
        47907380,
        47885463
      ],
      "score": 57,
      "time": 1777002069,
      "title": "Mahjong: A Visual Guide",
      "type": "story",
      "url": "https://themahjong.guide/"
    },
    {
      "by": "gasull",
      "descendants": 25,
      "id": 47907130,
      "kids": [
        47907839,
        47907596,
        47907538,
        47908016,
        47907951,
        47907683,
        47907696,
        47907431,
        47907563,
        47907620,
        47907390,
        47907614
      ],
      "score": 95,
      "text": "<a href=\"https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260426040218&#x2F;https:&#x2F;&#x2F;juraj.bednar.io&#x2F;en&#x2F;blog-en&#x2F;2026&#x2F;04&#x2F;17&#x2F;eu-age-control-the-trojan-horse-for-digital-ids&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260426040218&#x2F;https:&#x2F;&#x2F;juraj.bed...</a>",
      "time": 1777175068,
      "title": "EU Age Control: The trojan horse for digital IDs",
      "type": "story",
      "url": "https://juraj.bednar.io/en/blog-en/2026/04/17/eu-age-control-the-trojan-horse-for-digital-ids/"
    },
    {
      "by": "milkglass",
      "descendants": 2,
      "id": 47907879,
      "kids": [
        47908029,
        47907940
      ],
      "score": 3,
      "time": 1777184682,
      "title": "The West Forgot How to Make Things. Now It's Forgetting How to Code",
      "type": "story",
      "url": "https://techtrenches.dev/p/the-west-forgot-how-to-make-things"
    },
    {
      "by": "Nrbelex",
      "descendants": 67,
      "id": 47867473,
      "kids": [
        47907124,
        47906503,
        47906688,
        47907530,
        47907238,
        47907008,
        47907862,
        47907138,
        47907356,
        47905957,
        47906382,
        47906977,
        47906699,
        47906211,
        47906743,
        47906633,
        47906855,
        47907082,
        47907529,
        47906559,
        47906442,
        47906757
      ],
      "score": 131,
      "time": 1776882861,
      "title": "Flickr: The first and last great photo platform",
      "type": "story",
      "url": "https://petapixel.com/2026/04/22/flickr-the-first-and-last-great-photo-platform/"
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
      "title": "Plain text has been around for decades and it’s here to stay.",
      "url": "https://unsung.aresluna.org/plain-text-has-been-around-for-decades-and-its-here-to-stay/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sv7di4/plain_text_has_been_around_for_decades_and_its/",
      "author": "/u/Successful_Bowl2564",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Successful_Bowl2564 [link] &#32; [comments]",
      "published": "2026-04-25T09:20:48+00:00"
    },
    {
      "title": "Java Virtual Threads: The Pinning Problem and the Fix in Java 24",
      "url": "https://shbhmrzd.github.io/java/concurrency/virtual-threads/2026/04/25/java-virtual-threads-pinning-and-the-deadlock-problem.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1svqsa4/java_virtual_threads_the_pinning_problem_and_the/",
      "author": "/u/Normal-Tangelo-7120",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "I came across an internal engineering writeup at my org where a production service stalled after adopting virtual threads, a feature introduced in Java 21 that lets you run millions of lightweight threads on a handful of OS threads. Switching back to platform threads fixed it immediately. Turns out Netflix hit the exact same problem of virtual threads getting pinned inside synchronized blocks, exhausting all carrier threads, and hanging the application. I put together a write-up with a demo one can run locally to see it happen. It goes into what pinning is and why it exists, how to read thread dumps to spot it &#32; submitted by &#32; /u/Normal-Tangelo-7120 [link] &#32; [comments]",
      "published": "2026-04-25T23:04:56+00:00"
    },
    {
      "title": "Npm Slop & Wonky Software Supply Chains",
      "url": "https://simonramstedt.com/blog/2026-04-09-npm-slop-and-wonky-software-supply-chains/",
      "permalink": "https://www.reddit.com/r/programming/comments/1svk4ij/npm_slop_wonky_software_supply_chains/",
      "author": "/u/simonramstedt",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/simonramstedt [link] &#32; [comments]",
      "published": "2026-04-25T18:38:28+00:00"
    },
    {
      "title": "In-Flight Request Tracking: Lessons from Card Payments and HTTP/2",
      "url": "https://madflojo.dev/posts/in-flight-request-tracking-in-asynchronous-systems/",
      "permalink": "https://www.reddit.com/r/programming/comments/1svif0b/inflight_request_tracking_lessons_from_card/",
      "author": "/u/madflojo",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/madflojo [link] &#32; [comments]",
      "published": "2026-04-25T17:33:21+00:00"
    },
    {
      "title": "A Field Guide to bugs",
      "url": "https://www.stephendiehl.com/posts/field_guide_to_bugs/",
      "permalink": "https://www.reddit.com/r/programming/comments/1svb7tw/a_field_guide_to_bugs/",
      "author": "/u/arj-co",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/arj-co [link] &#32; [comments]",
      "published": "2026-04-25T12:44:59+00:00"
    },
    {
      "title": "Caching Beyond Redis: Real-World Strategies That Don’t Break Your System",
      "url": "https://commitlog.cc/posts/caching-beyond-redis",
      "permalink": "https://www.reddit.com/r/programming/comments/1sv664k/caching_beyond_redis_realworld_strategies_that/",
      "author": "/u/anant94",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "In the article, I break down: • why caching is really a trade-off between speed and correctness • when to use in-memory cache, Redis-style distributed cache, and CDN caching • cache-aside, write-through, write-back, and read-through with real examples • cache invalidation, stale data, and cache stampedes • when caching is the wrong solution entirely &#32; submitted by &#32; /u/anant94 [link] &#32; [comments]",
      "published": "2026-04-25T08:09:35+00:00"
    },
    {
      "title": "has anyone else been experimenting with self-hosted rss setups that integrate cleanly with existing dev tooling?",
      "url": "https://conduit.arewefriends.org/",
      "permalink": "https://www.reddit.com/r/programming/comments/1svzv21/has_anyone_else_been_experimenting_with/",
      "author": "/u/OGMYT",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/OGMYT [link] &#32; [comments]",
      "published": "2026-04-26T06:33:18+00:00"
    },
    {
      "title": "EVO-V E.C.K. (Epistemic Control Kernel)",
      "url": "https://evo-veck.lovable.app",
      "permalink": "https://www.reddit.com/r/programming/comments/1svybzu/evov_eck_epistemic_control_kernel/",
      "author": "/u/Laszlo_Rasta",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Laszlo_Rasta [link] &#32; [comments]",
      "published": "2026-04-26T05:11:13+00:00"
    },
    {
      "title": "what do you use for syncing rss feeds across devices without relying on big tech?",
      "url": "https://conduit.arewefriends.org/",
      "permalink": "https://www.reddit.com/r/programming/comments/1svyjhb/what_do_you_use_for_syncing_rss_feeds_across/",
      "author": "/u/OGMYT",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/OGMYT [link] &#32; [comments]",
      "published": "2026-04-26T05:21:58+00:00"
    },
    {
      "title": "How to become a better Unity C# Programmer",
      "url": "https://darkounity.com/blog/how-to-become-better-unity-csharp-programmer",
      "permalink": "https://www.reddit.com/r/programming/comments/1sv914z/how_to_become_a_better_unity_c_programmer/",
      "author": "/u/KwonDarko",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/KwonDarko [link] &#32; [comments]",
      "published": "2026-04-25T10:56:50+00:00"
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
      "title": "Eight Years in FinTech. Zero Tools for Myself.",
      "description": "I've spent eight years building financial software for institutions. This is where I start building it for myself — and doing it in the open.",
      "url": "https://dev.to/aswin94/eight-years-in-fintech-zero-tools-for-myself-423n",
      "tags": "buildinpublic, fintech, career, indiedev",
      "reactions": 0,
      "comments": 1,
      "reading_time": 4,
      "author": "aswin94"
    },
    {
      "title": "I built a Chrome extension that tells you exactly why your resume isn't getting callbacks",
      "description": "A close friend of mine applied to 67 jobs over three months. She's talented, her resume is solid, she...",
      "url": "https://dev.to/deckdout/i-built-a-chrome-extension-that-tells-you-exactly-why-your-resume-isnt-getting-callbacks-4ao0",
      "tags": "ai, productivity, career, startup",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "deckdout"
    },
    {
      "title": "90% of the internships I applied to weren’t real. So I’m building a way to expose them.",
      "description": "If you're a student or dev in India right now, you know the grind. I've spent months obsessing over...",
      "url": "https://dev.to/qurotz/90-of-the-internships-i-applied-to-werent-real-so-im-building-a-way-to-expose-them-2jnm",
      "tags": "ai, programming, career, devops",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "qurotz"
    },
    {
      "title": "Building a LinkedIn Headline Generator in Pure HTML/JS (No API Needed)",
      "description": "LinkedIn headlines are one of those things everyone knows matter but nobody wants to spend time on....",
      "url": "https://dev.to/charliemorrison/building-a-linkedin-headline-generator-in-pure-htmljs-no-api-needed-4nop",
      "tags": "webdev, javascript, career, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "charliemorrison"
    },
    {
      "title": "I Built a Free Resume ATS Checker (Client-Side Only, No Data Collection)",
      "description": "Most resume ATS checkers want your email, upload your resume to their servers, or paywall the...",
      "url": "https://dev.to/charliemorrison/i-built-a-free-resume-ats-checker-client-side-only-no-data-collection-59n",
      "tags": "webdev, javascript, career, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "charliemorrison"
    },
    {
      "title": "9 Rules That’ll Help You Write Clean Code",
      "description": "You write code every day. It runs. Tests pass. Tickets close. But six months later, you open that...",
      "url": "https://dev.to/web_dev-usman/9-rules-thatll-help-you-write-clean-code-269i",
      "tags": "programming, softwaredevelopment, productivity, career",
      "reactions": 5,
      "comments": 0,
      "reading_time": 6,
      "author": "web_dev-usman"
    },
    {
      "title": "Is AI Changing the Future of Developers? (Spoiler: It’s Not the End It’s the Upgrade)",
      "description": "Log onto Twitter (X) today, and i saw two competing headlines. One says, \"Copilot wrote 80% of my...",
      "url": "https://dev.to/kashafabdullah/is-ai-changing-the-future-of-developers-spoiler-its-not-the-end-its-the-upgrade-809",
      "tags": "ai, career, productivity, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "kashafabdullah"
    },
    {
      "title": "Why Mastery Simplifies (And Inexperience Creates Complexity)",
      "description": "The smartest engineers often make things look simpler, not more complex. That can be hard to...",
      "url": "https://dev.to/ranjitshah79/why-mastery-simplifies-and-inexperience-creates-complexity-112g",
      "tags": "softwareengineering, career, productivity, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "ranjitshah79"
    },
    {
      "title": "How to Fix the 'You're Charging Too Much' Problem Before It Starts",
      "description": "Stop losing freelance projects to pricing objections. Learn how to scope, estimate, and communicate project value so clients understand what they're paying for.",
      "url": "https://dev.to/alanwest/how-to-fix-the-youre-charging-too-much-problem-before-it-starts-469f",
      "tags": "freelancing, webdev, career, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "alanwest"
    },
    {
      "title": "The mid-level engineer is the real casualty of AI. Not the junior.",
      "description": "Everyone's wringing their hands about juniors getting replaced by AI. They're worried about the wrong...",
      "url": "https://dev.to/adioof/the-mid-level-engineer-is-the-real-casualty-of-ai-not-the-junior-3oe1",
      "tags": "discuss, ai, career, programming",
      "reactions": 4,
      "comments": 0,
      "reading_time": 3,
      "author": "adioof"
    }
  ]
}
```

