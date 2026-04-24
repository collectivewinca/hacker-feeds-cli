# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-24 06:56:52 UTC

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
      "author": "jamiepine",
      "repo": "voicebox",
      "avatar": "https://github.com/jamiepine.png",
      "repo_link": "https://github.com/jamiepine/voicebox",
      "desc": "The open-source AI voice studio. Clone, dictate, create.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2694,
      "added_stars": 3969,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5647,
      "added_stars": 7562,
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
      "author": "multica-ai",
      "repo": "multica",
      "avatar": "https://github.com/multica-ai.png",
      "repo_link": "https://github.com/multica-ai/multica",
      "desc": "The open-source managed agents platform. Turn coding agents into real teammates — assign tasks, track progress, compound skills.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2471,
      "added_stars": 5741,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output, 98% reduction. 12 platforms",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 660,
      "added_stars": 1797,
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
      "author": "zilliztech",
      "repo": "claude-context",
      "avatar": "https://github.com/zilliztech.png",
      "repo_link": "https://github.com/zilliztech/claude-context",
      "desc": "Code search MCP for Claude Code. Make entire codebase the context for any coding agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 672,
      "added_stars": 2183,
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
          "username": "Acren",
          "href": "https://github.com/Acren",
          "avatar": "https://avatars.githubusercontent.com/u/1582409"
        }
      ]
    },
    {
      "author": "vercel-labs",
      "repo": "open-agents",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/open-agents",
      "desc": "An open source template for building cloud agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 450,
      "added_stars": 1030,
      "builtBy": [
        {
          "username": "nicoalbanese",
          "href": "https://github.com/nicoalbanese",
          "avatar": "https://avatars.githubusercontent.com/u/49612682"
        },
        {
          "username": "willsather",
          "href": "https://github.com/willsather",
          "avatar": "https://avatars.githubusercontent.com/u/56037657"
        },
        {
          "username": "yavorpunchev",
          "href": "https://github.com/yavorpunchev",
          "avatar": "https://avatars.githubusercontent.com/u/1018854"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 320,
      "added_stars": 1221,
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
      "author": "firecrawl",
      "repo": "open-lovable",
      "avatar": "https://github.com/firecrawl.png",
      "repo_link": "https://github.com/firecrawl/open-lovable",
      "desc": "🔥 Clone and recreate any website as a modern React app in seconds",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4954,
      "added_stars": 440,
      "builtBy": [
        {
          "username": "developersdigest",
          "href": "https://github.com/developersdigest",
          "avatar": "https://avatars.githubusercontent.com/u/124798203"
        },
        {
          "username": "bekbull",
          "href": "https://github.com/bekbull",
          "avatar": "https://avatars.githubusercontent.com/u/40839494"
        },
        {
          "username": "MFCo",
          "href": "https://github.com/MFCo",
          "avatar": "https://avatars.githubusercontent.com/u/7811417"
        },
        {
          "username": "ericciarla",
          "href": "https://github.com/ericciarla",
          "avatar": "https://avatars.githubusercontent.com/u/43451761"
        },
        {
          "username": "ZLostTK",
          "href": "https://github.com/ZLostTK",
          "avatar": "https://avatars.githubusercontent.com/u/169317909"
        }
      ]
    },
    {
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1948,
      "added_stars": 1267,
      "builtBy": [
        {
          "username": "juliusmarminge",
          "href": "https://github.com/juliusmarminge",
          "avatar": "https://avatars.githubusercontent.com/u/51714798"
        },
        {
          "username": "t3dotgg",
          "href": "https://github.com/t3dotgg",
          "avatar": "https://avatars.githubusercontent.com/u/6751787"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "binbandit",
          "href": "https://github.com/binbandit",
          "avatar": "https://avatars.githubusercontent.com/u/6337115"
        }
      ]
    },
    {
      "author": "sparkjsdev",
      "repo": "spark",
      "avatar": "https://github.com/sparkjsdev.png",
      "repo_link": "https://github.com/sparkjsdev/spark",
      "desc": "✨ An advanced 3D Gaussian Splatting renderer for THREE.js",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 273,
      "added_stars": 248,
      "builtBy": [
        {
          "username": "dmarcos",
          "href": "https://github.com/dmarcos",
          "avatar": "https://avatars.githubusercontent.com/u/39342"
        },
        {
          "username": "asundqui",
          "href": "https://github.com/asundqui",
          "avatar": "https://avatars.githubusercontent.com/u/1168753"
        },
        {
          "username": "mrxz",
          "href": "https://github.com/mrxz",
          "avatar": "https://avatars.githubusercontent.com/u/8823461"
        },
        {
          "username": "alex-mcneilly",
          "href": "https://github.com/alex-mcneilly",
          "avatar": "https://avatars.githubusercontent.com/u/115044628"
        },
        {
          "username": "feiss",
          "href": "https://github.com/feiss",
          "avatar": "https://avatars.githubusercontent.com/u/359872"
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
      "forks": 2629,
      "added_stars": 910,
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
      "author": "lukilabs",
      "repo": "craft-agents-oss",
      "avatar": "https://github.com/lukilabs.png",
      "repo_link": "https://github.com/lukilabs/craft-agents-oss",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 666,
      "added_stars": 375,
      "builtBy": [
        {
          "username": "balintorosz",
          "href": "https://github.com/balintorosz",
          "avatar": "https://avatars.githubusercontent.com/u/2445418"
        },
        {
          "username": "rjulius23",
          "href": "https://github.com/rjulius23",
          "avatar": "https://avatars.githubusercontent.com/u/26127942"
        },
        {
          "username": "eachann1024",
          "href": "https://github.com/eachann1024",
          "avatar": "https://avatars.githubusercontent.com/u/43348055"
        },
        {
          "username": "fagemx",
          "href": "https://github.com/fagemx",
          "avatar": "https://avatars.githubusercontent.com/u/117356295"
        }
      ]
    },
    {
      "author": "calcom",
      "repo": "cal.diy",
      "avatar": "https://github.com/calcom.png",
      "repo_link": "https://github.com/calcom/cal.diy",
      "desc": "Scheduling infrastructure for absolutely everyone.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 12993,
      "added_stars": 756,
      "builtBy": [
        {
          "username": "zomars",
          "href": "https://github.com/zomars",
          "avatar": "https://avatars.githubusercontent.com/u/3504472"
        },
        {
          "username": "PeerRich",
          "href": "https://github.com/PeerRich",
          "avatar": "https://avatars.githubusercontent.com/u/8019099"
        },
        {
          "username": "emrysal",
          "href": "https://github.com/emrysal",
          "avatar": "https://avatars.githubusercontent.com/u/1046695"
        },
        {
          "username": "hariombalhara",
          "href": "https://github.com/hariombalhara",
          "avatar": "https://avatars.githubusercontent.com/u/1780212"
        },
        {
          "username": "crowdin-bot",
          "href": "https://github.com/crowdin-bot",
          "avatar": "https://avatars.githubusercontent.com/u/58779643"
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
      "forks": 1963,
      "added_stars": 514,
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
      "author": "siyuan-note",
      "repo": "siyuan",
      "avatar": "https://github.com/siyuan-note.png",
      "repo_link": "https://github.com/siyuan-note/siyuan",
      "desc": "A privacy-first, self-hosted, fully open source personal knowledge management software, written in typescript and golang.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2720,
      "added_stars": 314,
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
      "title": "I just watched a non-dev vibe-code something... We're all gonna be just fine.",
      "url": "https://www.reddit.com/r/webdev/comments/1stjfo4/i_just_watched_a_nondev_vibecode_something_were/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stjfo4/i_just_watched_a_nondev_vibecode_something_were/",
      "author": "/u/eowenith",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I kept seeing email notificaitons come in from Anthropic as she bought more credits. Took her hours and dozens of prompts to get something I could have done in one or two prompts. And mine would have looked better. She called me an amateur for how few credits and messages my Claude Code summary screen had in it. We gonna be fine boys. &#32; submitted by &#32; /u/eowenith [link] &#32; [comments]",
      "published": "2026-04-23T13:53:54+00:00"
    },
    {
      "title": "That will help your users avoid accidentally leaving the page",
      "url": "https://i.redd.it/rom6lqob6xwg1.jpeg",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stfd79/that_will_help_your_users_avoid_accidentally/",
      "author": "/u/wanoo21",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Especially when scrolling a table or a slider. It gives you smooth, natural scrolling inside an element while protecting the rest of the page from accidental scrolling. It&#39;s a common trick used for modals, side menus, chat boxes, or any scrollable area where you don&#39;t want the rest of the website to move when the user scrolls. &#32; submitted by &#32; /u/wanoo21 [link] &#32; [comments]",
      "published": "2026-04-23T10:56:20+00:00"
    },
    {
      "title": "The problems with this subreddit",
      "url": "https://www.reddit.com/r/webdev/comments/1stbvgt/the_problems_with_this_subreddit/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stbvgt/the_problems_with_this_subreddit/",
      "author": "/u/chaste-cuckold",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "This subreddit used to be a great place for web developers/programmers to discuss all kinds of related topics. It was catered towards professionals who work with it on a daily basis. But ever since the pandemic it&#39;s been nothing but trash for a few reasons. 1) Absent moderators who don&#39;t seem to care about the subreddit any longer. They must have given up somewhere along the way. 2) Way too much AI/vibe coded slop. Nobody cares about your bug-infested, broken, disgusting piece of copypasta code. Stop posting that shit. 3) Way too many beginners/inexperienced/uneducated people. Being a beginner is fine, but there are dedicated subreddits catered towards support for beginners. This subreddit is for not for asking support related questions! This is not like what Stackoverflow used to be. And what&#39;s worse are the endless arguments that arise when a senior developer tries to correct someone who clearly has no experience or degree in this field and thinks they know better. I see so many confidently incorrect takes on a daily basis here. 4) Toxicity. As soon as you point out the bad and the ugly, or just correcting someone who&#39;s clearly wrong, you get flooded with downvotes. This subreddit used to be so good back in the days, but nowadays it&#39;s just AI slop, low quality projects, beginner support questions and confidently incorrect posts from inexperienced people who think they know stuff when they actually don&#39;t. I&#39;m sick of it. It&#39;s important to be inclusive and not gatekeep, but damn, this is beyond that. There is no order on this subreddit and I already know this post will get 47 downvotes and people calling me an &quot;asshole&quot;. Very few experienced programmers are left on this subreddit because of that type of behavior. There&#39;s r/experienceddevs but it&#39;s starting to deteriorate as well. Worst of all is the lack of effort put into posts. Only 5 years ago, people used to put effort into their support questions or projects. You were required to explain in detail what you have tried, what errors you&#39;re getting, and what you want to achieve - otherwise your post was quickly removed. These days, documentation is so much better than it used to be - but despite that, people have stopped reading and use subreddits like this every time they get stuck, without trying on their own. Stop being lazy and do things the right way instead. Put a little bit if effort into it, damn! A lot of senior developers are now discussing creating an invite-only subreddit based on Github profiles or resumes, because there are almost no places left for professionals to discuss these types of topics in peace. Even HackerNews has been flooded with AI slop and comments from incompetent users in recent years. Anyways, the rant is done. You may now proceed with insulting me and downvoting this post. Thank you for your attention if you got this far. &#32; submitted by &#32; /u/chaste-cuckold [link] &#32; [comments]",
      "published": "2026-04-23T07:33:36+00:00"
    },
    {
      "title": "Meta to Lay Off 10 Percent of Work Force in A.I. Push",
      "url": "https://www.nytimes.com/2026/04/23/technology/meta-layoffs.html?",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stscas/meta_to_lay_off_10_percent_of_work_force_in_ai/",
      "author": "/u/dietcheese",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "The layoffs affect about 8,000 employees, with Meta also planning to close 6,000 open roles, as the company focuses on artificial intelligence. &#32; submitted by &#32; /u/dietcheese [link] &#32; [comments]",
      "published": "2026-04-23T19:11:32+00:00"
    },
    {
      "title": "Do not let Microsoft to steal your code for copilot training!",
      "url": "https://www.reddit.com/r/webdev/comments/1stftf5/do_not_let_microsoft_to_steal_your_code_for/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stftf5/do_not_let_microsoft_to_steal_your_code_for/",
      "author": "/u/blnkslt",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "You might have noticed this on your github page: `On April 24 we&#39;ll start using GitHub Copilot interaction data for AI model training unless you opt out.` Do not let Microsoft steal your code for their profit. Opt out before it is too late. How? go to h ttps://github.com/settings/copilot/features Scroll to Privacy Find the toggle: “Allow GitHub to use my data for AI model training” Disable the bloody option https://preview.redd.it/lx7cya36cxwg1.png?width=1972&amp;format=png&amp;auto=webp&amp;s=209b0b7051c968681edafa0eeca4bbc3d6629296 &#32; submitted by &#32; /u/blnkslt [link] &#32; [comments]",
      "published": "2026-04-23T11:19:02+00:00"
    },
    {
      "title": "Client is Saying I'm Charging too Much for The Project",
      "url": "https://www.reddit.com/r/webdev/comments/1su29g1/client_is_saying_im_charging_too_much_for_the/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1su29g1/client_is_saying_im_charging_too_much_for_the/",
      "author": "/u/KoenigOne",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "As the title says, the client thinks my price is way too high and may not want to continue. They want an all-in-one business platform, including maintenance, after planning it out, I estimated it would take around 2 months to complete, roughly 480 hours. I was going to charge £15/hour, which comes to about £7,200. They said they were expecting the whole project to cost around £300-£400. Now I feel like they are backing out after reading the contract. I explained that even £15/hour is much lower than what many software engineers charge. For context, I’m a software engineer with 4 years of experience, and I honestly thought I was already undervaluing myself. But from their reaction, it feels like they think I’m trying to scam them. What do you think? Should I continue with this client, or should I lower the price to keep a good relationship with them? I’m still new to freelancing, and I&#39;m not really sure what to do in this situation. &#32; submitted by &#32; /u/KoenigOne [link] &#32; [comments]",
      "published": "2026-04-24T01:58:47+00:00"
    },
    {
      "title": "your hex editor should color-code bytes",
      "url": "https://simonomi.dev/blog/color-code-your-bytes/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stoerd/your_hex_editor_should_colorcode_bytes/",
      "author": "/u/Dear-Economics-315",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Dear-Economics-315 [link] &#32; [comments]",
      "published": "2026-04-23T16:53:11+00:00"
    },
    {
      "title": "CSS interpolate-size",
      "url": "http://iprodan.dev/l/interpolate-size",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stbwmc/css_interpolatesize/",
      "author": "/u/wanoo21",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/wanoo21 [link] &#32; [comments]",
      "published": "2026-04-23T07:35:35+00:00"
    },
    {
      "title": "Do clients understand that software development is time consuming and not perfect?",
      "url": "https://www.reddit.com/r/webdev/comments/1su7usv/do_clients_understand_that_software_development/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1su7usv/do_clients_understand_that_software_development/",
      "author": "/u/swb_rise",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I am a self-taught developer, suffering from fear of judgment, rejection, fear of failure, and perfectionism. Moreover, I have no real exposure yet. Now, I want to do freelancing. However, I fear that clients expect absolute, or near perfect delivery; in the blink of an eye. In this situation, I want to know if clients understand that software could be unstable, or packed with flaws and bugs? On top of that, building any type of software takes considerable amount of time, both of development and for secondary researches? Or that the developer could go through uncertainties? &#32; submitted by &#32; /u/swb_rise [link] &#32; [comments]",
      "published": "2026-04-24T06:37:16+00:00"
    },
    {
      "title": "How do you show a page loader and still be SEO aware?",
      "url": "https://www.reddit.com/r/webdev/comments/1stfpuu/how_do_you_show_a_page_loader_and_still_be_seo/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stfpuu/how_do_you_show_a_page_loader_and_still_be_seo/",
      "author": "/u/Even_Job6933",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I dont get it, I can either show a loader, make the site relatively fast, then as it loads it show the content.. but then the crawlers wont see the content so im fucked SEO wise Or I can put up with allowing the site be slower and be fully SEO ready Is there any solution to this? &#32; submitted by &#32; /u/Even_Job6933 [link] &#32; [comments]",
      "published": "2026-04-23T11:14:12+00:00"
    },
    {
      "title": "Is it still worth to make utility/content websites in the era of AI summary in Google and hypersaturation of every single niche?",
      "url": "https://www.reddit.com/r/webdev/comments/1stfxoa/is_it_still_worth_to_make_utilitycontent_websites/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stfxoa/is_it_still_worth_to_make_utilitycontent_websites/",
      "author": "/u/amelix34",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I don&#39;t mean traditional SaaS, more like building websites similar to those taxcalculator com birthdaygifts com mathfunctions com livelongerlife com findnewhobby com I ask because I came to realisation that I don&#39;t have enough creativity, skill, confidence and courage to create normal SaaS and try to earn money on it, competing with all those successful people on SaaS subreddits. What I can do is try to play the long game. Buy 10 different domains that are still available, build some apps there, write lots of articles so they have SEO content and then wait 5 years for them to start ranking high in Google, hoping some day this portfolio of apps will be good enough for ads or affiliate links or that I&#39;ll be able to sell them for decent price. &#32; submitted by &#32; /u/amelix34 [link] &#32; [comments]",
      "published": "2026-04-23T11:24:48+00:00"
    },
    {
      "title": "Age verification for a travel platform turned into a harder problem than every vendor made it sound",
      "url": "https://www.reddit.com/r/webdev/comments/1stedzg/age_verification_for_a_travel_platform_turned/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stedzg/age_verification_for_a_travel_platform_turned/",
      "author": "/u/New-Molasses446",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "We built a travel booking platform that handles vehicle rentals and experiences with age restrictions attached. Six months in, an insurance partner flagged that we needed to verify user age at the point of booking rather than relying on self-declared dates of birth, which was obvious in retrospect but was not on my radar when we built the onboarding flow. The part that has been really difficult is that age verification for travel is transactional rather than account-level, triggered mid-booking rather than at signup, and the tolerance for friction at that moment is close to zero because a user who hits a verification step mid-purchase tends to just leave. Every vendor we spoke to treated this as a straightforward add-on to their standard document flow and the integration has been more complicated than that framing suggests. &#32; submitted by &#32; /u/New-Molasses446 [link] &#32; [comments]",
      "published": "2026-04-23T10:03:24+00:00"
    },
    {
      "title": "scroll all the way down on, then press a key and keep scrolling",
      "url": "https://stripe.dev",
      "permalink": "https://www.reddit.com/r/webdev/comments/1su07h8/scroll_all_the_way_down_on_then_press_a_key_and/",
      "author": "/u/constarx",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/constarx [link] &#32; [comments]",
      "published": "2026-04-24T00:24:20+00:00"
    },
    {
      "title": "Release Notes for Safari Technology Preview 242",
      "url": "https://webkit.org/blog/17934/release-notes-for-safari-technology-preview-242/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sttvwo/release_notes_for_safari_technology_preview_242/",
      "author": "/u/feross",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/feross [link] &#32; [comments]",
      "published": "2026-04-23T20:08:13+00:00"
    },
    {
      "title": "Is learn in public still worth it",
      "url": "https://www.reddit.com/r/webdev/comments/1su41oq/is_learn_in_public_still_worth_it/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1su41oq/is_learn_in_public_still_worth_it/",
      "author": "/u/Madara_noob",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Recently started a huge project and decided to finally do learn in public and post once in a while to Twitter. But when I go to Twitter it&#39;s all literal bullcrap and slop. &quot;Looking for these profiles let&#39;s connect&quot; - profile made in 2021 &quot;What is the best language to learn as a beginner need your opinion&quot; - profile made in 2020 Wtf is happening. So I wanted to know is it still worth it to do learn in public and post once in a while. And what can I do so that recruiters will notice me and maybe I can get hired for better opportunities. &#32; submitted by &#32; /u/Madara_noob [link] &#32; [comments]",
      "published": "2026-04-24T03:21:10+00:00"
    },
    {
      "title": "Adding a monster in background",
      "url": "https://www.reddit.com/r/webdev/comments/1su2koz/adding_a_monster_in_background/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1su2koz/adding_a_monster_in_background/",
      "author": "/u/BengalPirate",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "https://preview.redd.it/8t5cp9jfr1xg1.png?width=2916&amp;format=png&amp;auto=webp&amp;s=3f65f2d86161a7221702b9d74b8c8b3f16fb3329 I want to add a glb file of sometime of monster that appears behind the screen like if a lab experiment like Godzilla broke free. anyone know sites with monster glbs? &#32; submitted by &#32; /u/BengalPirate [link] &#32; [comments]",
      "published": "2026-04-24T02:13:03+00:00"
    },
    {
      "title": "So I'm using the scrollbar-gutter property, but it doesn't seem to be affecting how the content shifts. The image without the scrollbar is how I want the content to look, but I still want the scrollbar for overflowing text.",
      "url": "https://www.reddit.com/gallery/1su5n9y",
      "permalink": "https://www.reddit.com/r/webdev/comments/1su5n9y/so_im_using_the_scrollbargutter_property_but_it/",
      "author": "/u/Sackybacky2x",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": ".table-section:nth-child(6) tr:nth-child(3) td:nth-child(2) { overflow-y: scroll; scrollbar-gutter: stable; height: 165px; scrollbar-color: #2fe081 transparent; scrollbar-width: thin; } &#32; submitted by &#32; /u/Sackybacky2x [link] &#32; [comments]",
      "published": "2026-04-24T04:38:28+00:00"
    },
    {
      "title": "Developing a Website for School",
      "url": "https://www.reddit.com/r/webdev/comments/1su4r4p/developing_a_website_for_school/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1su4r4p/developing_a_website_for_school/",
      "author": "/u/aarav7sc",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey so, currently my school has a very bad website, It has zero search engine optimization, it is responsible but the design is not fluid of elements and texts. So as i know html and css, which is enough for building a page, i think i should make a page for school it might help me get some experience, i haven&#39;t done any of actual freelancing yet. So my question is, if im going to present them that i can build a better school site, ill need structure and a demo, how and what all should be enough for it, so even if they refuse i wont have wasted much time making it. Also if i can get some tips on how to negotiate the making, and what all to prepare when offering, i have already listed out the major as well as minor flaws of the current website. Thankyou. &#32; submitted by &#32; /u/aarav7sc [link] &#32; [comments]",
      "published": "2026-04-24T03:55:07+00:00"
    },
    {
      "title": "Does Google Tag Manager fall under IT or marketing?",
      "url": "https://www.reddit.com/r/webdev/comments/1stjxf9/does_google_tag_manager_fall_under_it_or_marketing/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stjxf9/does_google_tag_manager_fall_under_it_or_marketing/",
      "author": "/u/O0OO00O0OO0",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;ve been a web developer for like 7 years at different companies and I understand a bit of GTM but it never felt like it was part of my job. Past companies just didn&#39;t use it much at all but my current company is trying to do a lot with it. It&#39;s a smaller company and I&#39;m the only one who knows anything about GTM. The marketing team ended up hiring a freelancer to help. For reference, their job titles are like marketing manager, director of marketing, director of search and SEO. My manager says that GTM shouldn&#39;t be put on me outside of copying and pasting the embed code and coding in custom events. Being in the dashboard and making decisions about setup should be marketing since we&#39;re already spread thin in IT. Just curious from other developers, is GTM usually the job of IT? Or does that fall under marketing? It seems like a weird hybrid. &#32; submitted by &#32; /u/O0OO00O0OO0 [link] &#32; [comments]",
      "published": "2026-04-23T14:12:08+00:00"
    },
    {
      "title": "pre-signed s3 urls (short ttl) vs proxying downloads — what do you actually do in prod?",
      "url": "https://www.reddit.com/r/webdev/comments/1stiy9l/presigned_s3_urls_short_ttl_vs_proxying_downloads/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stiy9l/presigned_s3_urls_short_ttl_vs_proxying_downloads/",
      "author": "/u/Striking_Weird_8540",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "running into a design question and curious how others handled this in real systems… we currently give partners pre-signed s3 urls for file downloads (ttl ~60s) appsec concern is: if that url leaks, it’s basically a bearer token → anyone with it can download within that window the “safe” option we’re considering is proxying downloads through our backend (auth → stream file), but that adds latency, cost, and scaling complexity trying to understand what people actually do in practice: – is short ttl + scoped pre-signed url considered good enough? – do you enforce single-use / track downloads? – do you front it with cloudfront signed urls instead? – or do most teams just proxy everything and accept the cost? would love to hear real-world patterns vs theoretical concerns &#32; submitted by &#32; /u/Striking_Weird_8540 [link] &#32; [comments]",
      "published": "2026-04-23T13:34:22+00:00"
    },
    {
      "title": "Web Agencies: Do you resell 3rd party tools?",
      "url": "https://www.reddit.com/r/webdev/comments/1stic0r/web_agencies_do_you_resell_3rd_party_tools/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stic0r/web_agencies_do_you_resell_3rd_party_tools/",
      "author": "/u/Pan000",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;m considering pivoting my business model from selling directly to clients to selling through agencies at 75% discount. So the agency buys a license from us, marks it up 300% and resells to the client. The clients love the product, but it&#39;s too expensive to market. Is this typical? Is this something agencies regularly do? What is the best way to approach the agencies? I called a few but they hung up the phone as soon as I said &quot;reseller program&quot; which has confused me about whether this is a thing. I thought it was. &#32; submitted by &#32; /u/Pan000 [link] &#32; [comments]",
      "published": "2026-04-23T13:09:58+00:00"
    },
    {
      "title": "Public API ideas?",
      "url": "https://www.reddit.com/r/webdev/comments/1stent3/public_api_ideas/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stent3/public_api_ideas/",
      "author": "/u/Dense-Map-406",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey everyone :) I’m looking for any interesting public APIs I can use to collect and display info on a project of mine.. ideally looking for any APIs that share random insights, daily bits of info, random images.. whatever comes to mind So far I’ve collected Random meal recipes the meal db Dog photos from dog CEO NASA image of the day Random yoga poses Random doodles And some more Do you have any cool ideas? My top priority is sport crazy stat lines, random wildlife images, financial, fashion inspo But open to everything Would love recommendations on APIs you stumbled upon throughout your journey Thanks ! &#32; submitted by &#32; /u/Dense-Map-406 [link] &#32; [comments]",
      "published": "2026-04-23T10:18:50+00:00"
    },
    {
      "title": "Sneaky spam in conversational replies to blog posts",
      "url": "https://shkspr.mobi/blog/2026/04/sneaky-spam-in-conversational-replies-to-blog-posts/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stl5m9/sneaky_spam_in_conversational_replies_to_blog/",
      "author": "/u/Dear-Economics-315",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Dear-Economics-315 [link] &#32; [comments]",
      "published": "2026-04-23T14:56:42+00:00"
    },
    {
      "title": "I’m looking for HTML designs inspired by MS-DOS early pc era aesthetics",
      "url": "https://www.reddit.com/r/webdev/comments/1stgmhq/im_looking_for_html_designs_inspired_by_msdos/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1stgmhq/im_looking_for_html_designs_inspired_by_msdos/",
      "author": "/u/RaisinStraight2992",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey everyone, I’m currently diving deep into a very specific niche and could really use some recommendations. I’m looking for HTML designs inspired by MS-DOS early pc era aesthetics - think text-heavy layouts, minimal graphics, terminal vibes, ANSI-style color schemes, and anything that feels like it belongs on a late 80s and early 90s machine. Alongside that, I’d love to find: bitmap-pixel-DOS-style fonts Image banks or archives with retro computer graphics, icons, UI elements old-school or modern frameworks and tools that help recreate that vibe any websites, archives, or collections with web 1.0 pre-modern design inspiration. Basically anything that captures that raw, low-level, pre-polished internet feel - not just nostalgia, but actual usable resources. If you’ve come across cool repos, forgotten archives, or even personal projects in this style, please share Thanks! &#32; submitted by &#32; /u/RaisinStraight2992 [link] &#32; [comments]",
      "published": "2026-04-23T11:57:47+00:00"
    },
    {
      "title": "Google Places API... would bankrupt Google?",
      "url": "https://www.reddit.com/r/webdev/comments/1su7lua/google_places_api_would_bankrupt_google/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1su7lua/google_places_api_would_bankrupt_google/",
      "author": "/u/sporkland",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "How quickly would google go out of business if they had to pay their list prices on the google places API ... just operating google maps itself? &#32; submitted by &#32; /u/sporkland [link] &#32; [comments]",
      "published": "2026-04-24T06:22:46+00:00"
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
      "author": "QuantumNous",
      "repo": "new-api",
      "avatar": "https://github.com/QuantumNous.png",
      "repo_link": "https://github.com/QuantumNous/new-api",
      "desc": "A unified AI model hub for aggregation & distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemini-compatible formats. A centralized gateway for personal and enterprise model management. 🍥",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 6005,
      "added_stars": 6114,
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2608,
      "added_stars": 7056,
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
      "author": "steipete",
      "repo": "wacli",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/wacli",
      "desc": "WhatsApp CLI",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 244,
      "added_stars": 1426,
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
      "forks": 493,
      "added_stars": 1140,
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
      "forks": 279,
      "added_stars": 721,
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
      "forks": 3894,
      "added_stars": 1451,
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
      "forks": 743,
      "added_stars": 1157,
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
      "forks": 3055,
      "added_stars": 1580,
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
      "forks": 5244,
      "added_stars": 1714,
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
      "author": "syncthing",
      "repo": "syncthing",
      "avatar": "https://github.com/syncthing.png",
      "repo_link": "https://github.com/syncthing/syncthing",
      "desc": "Open Source Continuous File Synchronization",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5111,
      "added_stars": 2086,
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
      "author": "masterking32",
      "repo": "MasterDnsVPN",
      "avatar": "https://github.com/masterking32.png",
      "repo_link": "https://github.com/masterking32/MasterDnsVPN",
      "desc": "Advanced DNS tunneling VPN for censorship bypass, optimized beyond DNSTT and SlipStream with low-overhead ARQ, resolver load balancing, high packet-loss stability and speed.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 74,
      "added_stars": 707,
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
      "author": "versity",
      "repo": "versitygw",
      "avatar": "https://github.com/versity.png",
      "repo_link": "https://github.com/versity/versitygw",
      "desc": "A simple to deploy but feature rich S3 object storage server for your filesystem",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 240,
      "added_stars": 867,
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
      "author": "mudler",
      "repo": "LocalAI",
      "avatar": "https://github.com/mudler.png",
      "repo_link": "https://github.com/mudler/LocalAI",
      "desc": "LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4009,
      "added_stars": 1637,
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
      "author": "evcc-io",
      "repo": "evcc",
      "avatar": "https://github.com/evcc-io.png",
      "repo_link": "https://github.com/evcc-io/evcc",
      "desc": "solar charging ☀️🚘",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1292,
      "added_stars": 198,
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
      "author": "gophish",
      "repo": "gophish",
      "avatar": "https://github.com/gophish.png",
      "repo_link": "https://github.com/gophish/gophish",
      "desc": "Open-Source Phishing Toolkit",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2874,
      "added_stars": 132,
      "builtBy": [
        {
          "username": "jordan-wright",
          "href": "https://github.com/jordan-wright",
          "avatar": "https://avatars.githubusercontent.com/u/1317288"
        },
        {
          "username": "wjwoodson",
          "href": "https://github.com/wjwoodson",
          "avatar": "https://avatars.githubusercontent.com/u/7348076"
        },
        {
          "username": "glennzw",
          "href": "https://github.com/glennzw",
          "avatar": "https://avatars.githubusercontent.com/u/3966613"
        },
        {
          "username": "rcutmore",
          "href": "https://github.com/rcutmore",
          "avatar": "https://avatars.githubusercontent.com/u/873661"
        }
      ]
    },
    {
      "author": "runatlantis",
      "repo": "atlantis",
      "avatar": "https://github.com/runatlantis.png",
      "repo_link": "https://github.com/runatlantis/atlantis",
      "desc": "Terraform Pull Request Automation",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1267,
      "added_stars": 101,
      "builtBy": [
        {
          "username": "lkysow",
          "href": "https://github.com/lkysow",
          "avatar": "https://avatars.githubusercontent.com/u/1034429"
        },
        {
          "username": "chenrui333",
          "href": "https://github.com/chenrui333",
          "avatar": "https://avatars.githubusercontent.com/u/1580956"
        },
        {
          "username": "nitrocode",
          "href": "https://github.com/nitrocode",
          "avatar": "https://avatars.githubusercontent.com/u/7775707"
        }
      ]
    },
    {
      "author": "XTLS",
      "repo": "RealiTLScanner",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/RealiTLScanner",
      "desc": "A TLS server scanner for Reality",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 258,
      "added_stars": 404,
      "builtBy": [
        {
          "username": "juzeon",
          "href": "https://github.com/juzeon",
          "avatar": "https://avatars.githubusercontent.com/u/12206799"
        },
        {
          "username": "yuhan6665",
          "href": "https://github.com/yuhan6665",
          "avatar": "https://avatars.githubusercontent.com/u/1588741"
        },
        {
          "username": "ghggn",
          "href": "https://github.com/ghggn",
          "avatar": "https://avatars.githubusercontent.com/u/129544540"
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
      "forks": 16608,
      "added_stars": 102133,
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
      "forks": 3740,
      "added_stars": 9544,
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
      "author": "OpenBMB",
      "repo": "VoxCPM",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/VoxCPM",
      "desc": "VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and True-to-Life Cloning",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1856,
      "added_stars": 9655,
      "builtBy": [
        {
          "username": "Labmem-Zhouyx",
          "href": "https://github.com/Labmem-Zhouyx",
          "avatar": "https://avatars.githubusercontent.com/u/63361337"
        },
        {
          "username": "liuxin99",
          "href": "https://github.com/liuxin99",
          "avatar": "https://avatars.githubusercontent.com/u/33060143"
        },
        {
          "username": "VoxInstruct",
          "href": "https://github.com/VoxInstruct",
          "avatar": "https://avatars.githubusercontent.com/u/167593451"
        },
        {
          "username": "a710128",
          "href": "https://github.com/a710128",
          "avatar": "https://avatars.githubusercontent.com/u/8132992"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 2869,
      "added_stars": 10475,
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
      "forks": 4727,
      "added_stars": 17134,
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
      "author": "Fincept-Corporation",
      "repo": "FinceptTerminal",
      "avatar": "https://github.com/Fincept-Corporation.png",
      "repo_link": "https://github.com/Fincept-Corporation/FinceptTerminal",
      "desc": "FinceptTerminal is a modern finance application offering advanced market analytics, investment research, and economic data tools, designed for interactive exploration and data-driven decision-making in a user-friendly environment.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1900,
      "added_stars": 10943,
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
      "author": "microsoft",
      "repo": "markitdown",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/markitdown",
      "desc": "Python tool for converting files and office documents to Markdown.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7601,
      "added_stars": 24309,
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
      "author": "mvanhorn",
      "repo": "last30days-skill",
      "avatar": "https://github.com/mvanhorn.png",
      "repo_link": "https://github.com/mvanhorn/last30days-skill",
      "desc": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1967,
      "added_stars": 19220,
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
      "forks": 13383,
      "added_stars": 12195,
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
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3759,
      "added_stars": 10377,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1804,
      "added_stars": 8358,
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
      "forks": 855,
      "added_stars": 4913,
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
      "author": "SakanaAI",
      "repo": "AI-Scientist-v2",
      "avatar": "https://github.com/SakanaAI.png",
      "repo_link": "https://github.com/SakanaAI/AI-Scientist-v2",
      "desc": "The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 803,
      "added_stars": 3537,
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
      "author": "lsdefine",
      "repo": "GenericAgent",
      "avatar": "https://github.com/lsdefine.png",
      "repo_link": "https://github.com/lsdefine/GenericAgent",
      "desc": "Self-evolving agent: grows skill tree from 3.3K-line seed, achieving full system control with 6x less token consumption",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 724,
      "added_stars": 5574,
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
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9953,
      "added_stars": 7915,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "232+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1654,
      "added_stars": 6039,
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
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8280,
      "added_stars": 25733,
      "builtBy": [
        {
          "username": "MagicCube",
          "href": "https://github.com/MagicCube",
          "avatar": "https://avatars.githubusercontent.com/u/1003147"
        },
        {
          "username": "WillemJiang",
          "href": "https://github.com/WillemJiang",
          "avatar": "https://avatars.githubusercontent.com/u/219644"
        },
        {
          "username": "hetaoBackend",
          "href": "https://github.com/hetaoBackend",
          "avatar": "https://avatars.githubusercontent.com/u/45447813"
        },
        {
          "username": "henry-byted",
          "href": "https://github.com/henry-byted",
          "avatar": "https://avatars.githubusercontent.com/u/209858577"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "datalab-to",
      "repo": "chandra",
      "avatar": "https://github.com/datalab-to.png",
      "repo_link": "https://github.com/datalab-to/chandra",
      "desc": "OCR model that handles complex tables, forms, handwriting with full layout.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1007,
      "added_stars": 4391,
      "builtBy": [
        {
          "username": "VikParuchuri",
          "href": "https://github.com/VikParuchuri",
          "avatar": "https://avatars.githubusercontent.com/u/913340"
        },
        {
          "username": "sandy0kwon",
          "href": "https://github.com/sandy0kwon",
          "avatar": "https://avatars.githubusercontent.com/u/78377296"
        },
        {
          "username": "u-ashish",
          "href": "https://github.com/u-ashish",
          "avatar": "https://avatars.githubusercontent.com/u/14264791"
        },
        {
          "username": "zanussbaum",
          "href": "https://github.com/zanussbaum",
          "avatar": "https://avatars.githubusercontent.com/u/33707069"
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
      "forks": 323,
      "added_stars": 1915,
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
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9571,
      "added_stars": 14121,
      "builtBy": [
        {
          "username": "Yijia-Xiao",
          "href": "https://github.com/Yijia-Xiao",
          "avatar": "https://avatars.githubusercontent.com/u/48253104"
        },
        {
          "username": "EdwardoSunny",
          "href": "https://github.com/EdwardoSunny",
          "avatar": "https://avatars.githubusercontent.com/u/68405458"
        },
        {
          "username": "luohy15",
          "href": "https://github.com/luohy15",
          "avatar": "https://avatars.githubusercontent.com/u/15189961"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "CadeYu",
          "href": "https://github.com/CadeYu",
          "avatar": "https://avatars.githubusercontent.com/u/91041827"
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
      "forks": 9528,
      "added_stars": 8055,
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
      "author": "roboflow",
      "repo": "supervision",
      "avatar": "https://github.com/roboflow.png",
      "repo_link": "https://github.com/roboflow/supervision",
      "desc": "We write your reusable computer vision tools. 💜",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3390,
      "added_stars": 1551,
      "builtBy": [
        {
          "username": "SkalskiP",
          "href": "https://github.com/SkalskiP",
          "avatar": "https://avatars.githubusercontent.com/u/26109316"
        },
        {
          "username": "onuralpszr",
          "href": "https://github.com/onuralpszr",
          "avatar": "https://avatars.githubusercontent.com/u/1688848"
        },
        {
          "username": "LinasKo",
          "href": "https://github.com/LinasKo",
          "avatar": "https://avatars.githubusercontent.com/u/6500785"
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
      "comments": "0",
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
      "title": "Congrats to the April Fools Challenge Winners!!",
      "description": "We asked you to build something completely useless and you delivered.   The DEV April Fools Challenge...",
      "url": "https://dev.to/devteam/congrats-to-the-april-fools-challenge-winners-l8f",
      "tags": "devchallenge, 418challenge, jokes",
      "reactions": 31,
      "comments": 8,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "So, what am I doing after 22 years in tech?",
      "description": "A follow-up to What to do in tech after 20 years?*   Two years ago, I was between a rock and a hard...",
      "url": "https://dev.to/phalkmin/so-what-am-i-doing-after-22-years-in-tech-7ic",
      "tags": "discuss, career, watercooler, help",
      "reactions": 23,
      "comments": 7,
      "reading_time": 7,
      "author": "phalkmin"
    },
    {
      "title": "Tune In and Join the Google Cloud NEXT '26 Writing Challenge: $1,000 in Prizes!",
      "description": "Google Cloud NEXT '26 is kicking off today (April 22) and runs through April 24 – we're launching...",
      "url": "https://dev.to/devteam/tune-in-and-join-the-google-cloud-next-26-writing-challenge-1000-in-prizes-21bd",
      "tags": "devchallenge, googlecloud, cloudnextchallenge",
      "reactions": 117,
      "comments": 17,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "How My Coworker Who Didn't Know 'cd' Shipped to Production",
      "description": "The agent isn't the hard part. The scaffolding around it is. Here's how we built ours so a non-engineer could ship to production safely.",
      "url": "https://dev.to/mattstratton/how-my-coworker-who-didnt-know-cd-shipped-to-production-3j6j",
      "tags": "webdev, ai, devops, productivity",
      "reactions": 11,
      "comments": 3,
      "reading_time": 9,
      "author": "mattstratton"
    },
    {
      "title": "I let a kosher lobster run my Shabbat automations",
      "description": "What I built   I run an Orthodox Jewish household. That means twenty-five hours a week,...",
      "url": "https://dev.to/bengreenberg/i-let-a-kosher-lobster-run-my-shabbat-automations-5aln",
      "tags": "devchallenge, openclawchallenge",
      "reactions": 9,
      "comments": 3,
      "reading_time": 6,
      "author": "bengreenberg"
    },
    {
      "title": "Stop Worrying and Love AI",
      "description": "How to replace existential dread for the future of software development with hope for your own future",
      "url": "https://dev.to/shiftyp/stop-worrying-and-love-ai-9ij",
      "tags": "ai",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "shiftyp"
    },
    {
      "title": "From Generative to Agentic: My Key Takeaways from Google Cloud Next ‘26",
      "description": "The era of “chatting with AI” has officially evolved into the era of “AI doing the work.” This year...",
      "url": "https://dev.to/gde/from-generative-to-agentic-my-key-takeaways-from-google-cloud-next-26-4574",
      "tags": "googlecloud, googlecloudnext, agentskills, agentplatform",
      "reactions": 11,
      "comments": 0,
      "reading_time": 4,
      "author": "ibtissem_hattab_39e302b51"
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
      "title": "Google Cloud’s Agent Ops Stack: Why Deployment Is No Longer the Hard Part",
      "description": "This is a submission for the Google Cloud NEXT Writing Challenge    The Gemini Enterprise Agent...",
      "url": "https://dev.to/gde/google-clouds-agent-ops-stack-why-deployment-is-no-longer-the-hard-part-g3k",
      "tags": "devchallenge, cloudnextchallenge, googlecloud, vertexai",
      "reactions": 5,
      "comments": 0,
      "reading_time": 8,
      "author": "sonikaj"
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
      "title": "Semantic Introspection",
      "url": "https://chillicream.com/blog/2026/04/22/semantic-introspection/",
      "score": 1,
      "comments": 0,
      "tags": [
        "api",
        "vibecoding"
      ],
      "id": "wll3xh"
    },
    {
      "title": "Vibin' With Erlang",
      "url": "https://blog.whenhen.com/posts/vibin-with-erlang.html",
      "score": 2,
      "comments": 2,
      "tags": [
        "erlang",
        "vibecoding"
      ],
      "id": "crspm5"
    },
    {
      "title": "What are the best developer tools built around Markdown?",
      "url": "",
      "score": 8,
      "comments": 8,
      "tags": [
        "ask",
        "programming"
      ],
      "id": "g9jlyl"
    },
    {
      "title": "llm.rb is Ruby's most capable AI runtime",
      "url": "https://github.com/llmrb/llm.rb#readme",
      "score": 5,
      "comments": 2,
      "tags": [
        "ai",
        "ruby"
      ],
      "id": "emcmxd"
    },
    {
      "title": "How Hard Is It To Open a File?",
      "url": "https://blog.sebastianwick.net/posts/how-hard-is-it-to-open-a-file/",
      "score": 13,
      "comments": 0,
      "tags": [
        "security",
        "unix"
      ],
      "id": "fbfu56"
    },
    {
      "title": "Box to save memory",
      "url": "https://dystroy.org/blog/box-to-save-memory/",
      "score": 9,
      "comments": 2,
      "tags": [
        "rust"
      ],
      "id": "p76mlf"
    },
    {
      "title": "Using Perfetto in ZJIT",
      "url": "https://railsatscale.com/2026-03-27-using-perfetto-in-zjit/",
      "score": 5,
      "comments": 0,
      "tags": [
        "performance",
        "ruby"
      ],
      "id": "wx9ozr"
    },
    {
      "title": "Configuring Firefox",
      "url": "https://sciops.net/information/technology/firefox",
      "score": 9,
      "comments": 2,
      "tags": [
        "web"
      ],
      "id": "9csbvp"
    },
    {
      "title": "Working Through 001: The Art Of Computer Programming",
      "url": "https://youtu.be/i8BLIhLNBpo",
      "score": 1,
      "comments": 0,
      "tags": [
        "compsci",
        "video"
      ],
      "id": "le1igu"
    },
    {
      "title": "raylib v6.0",
      "url": "https://github.com/raysan5/raylib/releases/tag/6.0",
      "score": 30,
      "comments": 1,
      "tags": [
        "c",
        "graphics",
        "release"
      ],
      "id": "eiwtub"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "impact_sy",
      "descendants": 287,
      "id": 47884971,
      "kids": [
        47886400,
        47886285,
        47886414,
        47886340,
        47886038,
        47886551,
        47885306,
        47886567,
        47885567,
        47885474,
        47885630,
        47885284,
        47885255,
        47885263,
        47886457,
        47886441,
        47886169,
        47886126,
        47885401,
        47885822,
        47886111,
        47885574,
        47886011,
        47885359,
        47886077,
        47885801,
        47885316,
        47886026,
        47886283,
        47885300,
        47885845,
        47885971,
        47886474,
        47885278,
        47885248,
        47886427,
        47886171,
        47886315,
        47885943,
        47886366,
        47886420,
        47885333,
        47885457,
        47885572,
        47885669,
        47885371,
        47885355,
        47885998,
        47885514,
        47886027,
        47886071,
        47885394,
        47885426,
        47885293,
        47885573,
        47885727,
        47885409,
        47885646,
        47885421,
        47885483,
        47885812,
        47885336,
        47885393
      ],
      "score": 592,
      "text": "<a href=\"https:&#x2F;&#x2F;huggingface.co&#x2F;deepseek-ai&#x2F;DeepSeek-V4-Pro&#x2F;blob&#x2F;main&#x2F;DeepSeek_V4.pdf\" rel=\"nofollow\">https:&#x2F;&#x2F;huggingface.co&#x2F;deepseek-ai&#x2F;DeepSeek-V4-Pro&#x2F;blob&#x2F;main...</a>",
      "time": 1776999681,
      "title": "DeepSeek v4",
      "type": "story",
      "url": "https://api-docs.deepseek.com/"
    },
    {
      "by": "RyanShook",
      "descendants": 26,
      "id": 47884768,
      "kids": [
        47886519,
        47885323,
        47885314,
        47885124,
        47885088,
        47885632,
        47885827,
        47885191,
        47886039,
        47884956,
        47885353,
        47884974
      ],
      "score": 127,
      "time": 1776997583,
      "title": "Why I Write (1946)",
      "type": "story",
      "url": "https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/why-i-write/"
    },
    {
      "by": "rd",
      "descendants": 857,
      "id": 47879092,
      "kids": [
        47879272,
        47880421,
        47886564,
        47879991,
        47879562,
        47879225,
        47879193,
        47880333,
        47880922,
        47879174,
        47880227,
        47880093,
        47885990,
        47880238,
        47881349,
        47879868,
        47879379,
        47880398,
        47879756,
        47879334,
        47879249,
        47879198,
        47879564,
        47879622,
        47879431,
        47882229,
        47881561,
        47879317,
        47879456,
        47879959,
        47880669,
        47879164,
        47881216,
        47879182,
        47881255,
        47879234,
        47880853,
        47879486,
        47879340,
        47880715,
        47883219,
        47883408,
        47883948,
        47885772,
        47883278,
        47881069,
        47879206,
        47880309,
        47879912,
        47880737,
        47880326,
        47880196,
        47879296,
        47880150,
        47879286,
        47882483,
        47879895,
        47879569,
        47883523,
        47882984,
        47880738,
        47879439,
        47879266,
        47879930,
        47883461,
        47881123,
        47881697,
        47882657,
        47879638,
        47882579,
        47880815,
        47880371,
        47880768,
        47883160,
        47879906,
        47884811,
        47884886,
        47879875,
        47881267,
        47879785,
        47879467,
        47882795,
        47880033,
        47880624,
        47882873,
        47879924,
        47879233,
        47884051,
        47883633,
        47879582,
        47880943,
        47880645,
        47882008,
        47881988,
        47881610,
        47880346,
        47879882,
        47879650,
        47879450,
        47879264,
        47879410,
        47879137,
        47879864,
        47881901,
        47880365,
        47881424,
        47885711,
        47885171,
        47885493,
        47884327,
        47883588,
        47879662,
        47881652,
        47882174,
        47879571,
        47885559,
        47880537,
        47879656,
        47880611,
        47879709,
        47879615,
        47880082
      ],
      "score": 1285,
      "time": 1776967299,
      "title": "GPT-5.5",
      "type": "story",
      "url": "https://openai.com/index/introducing-gpt-5-5/"
    },
    {
      "by": "mfiguiere",
      "descendants": 507,
      "id": 47878905,
      "kids": [
        47879561,
        47883626,
        47879700,
        47879260,
        47879753,
        47879849,
        47880663,
        47885144,
        47885611,
        47880509,
        47879064,
        47882324,
        47884980,
        47880253,
        47883125,
        47882448,
        47880170,
        47882769,
        47880433,
        47881815,
        47879327,
        47879675,
        47879397,
        47886525,
        47879107,
        47879685,
        47880230,
        47881734,
        47885168,
        47885940,
        47878977,
        47881535,
        47880370,
        47879844,
        47880871,
        47882658,
        47883472,
        47879676,
        47884238,
        47879112,
        47880213,
        47881481,
        47883892,
        47880403,
        47885008,
        47880142,
        47881597,
        47883063,
        47884784,
        47882225,
        47883233,
        47879106,
        47881201,
        47879338,
        47879905,
        47879232,
        47883667,
        47882484,
        47879475,
        47880847,
        47879358,
        47879856,
        47880621,
        47881848,
        47883496,
        47879390,
        47879051,
        47882624,
        47879170,
        47880311,
        47880121,
        47880935,
        47883730,
        47881436,
        47879282,
        47880366,
        47879869,
        47881877,
        47880724,
        47879766,
        47881852,
        47880728,
        47881186,
        47879725,
        47879140,
        47881671,
        47880011,
        47880558,
        47880271,
        47879205,
        47884015,
        47881260,
        47880395,
        47879804,
        47880320,
        47880766,
        47885702,
        47880749,
        47885044,
        47885348,
        47883851,
        47880083,
        47884588,
        47881392,
        47881698,
        47880241,
        47881204,
        47879817,
        47879871,
        47880542
      ],
      "score": 666,
      "time": 1776966518,
      "title": "An update on recent Claude Code quality reports",
      "type": "story",
      "url": "https://www.anthropic.com/engineering/april-23-postmortem"
    },
    {
      "by": "tosh",
      "descendants": 356,
      "id": 47876043,
      "kids": [
        47878158,
        47880850,
        47877143,
        47876832,
        47876899,
        47877010,
        47882358,
        47876963,
        47884532,
        47880226,
        47876948,
        47876973,
        47877165,
        47876883,
        47878663,
        47883285,
        47883553,
        47876988,
        47878375,
        47877804,
        47877122,
        47876946,
        47881984,
        47881775,
        47881832,
        47881803,
        47877388,
        47877357,
        47877139,
        47878213,
        47876819,
        47877020,
        47883970,
        47879544,
        47877138,
        47877474,
        47876704,
        47878293,
        47878966,
        47880102,
        47876694,
        47877164,
        47884635,
        47878897,
        47877163,
        47879407,
        47885673,
        47879547,
        47883931,
        47877180,
        47876797,
        47877731,
        47876906
      ],
      "score": 726,
      "time": 1776953828,
      "title": "Bitwarden CLI compromised in ongoing Checkmarx supply chain campaign",
      "type": "story",
      "url": "https://socket.dev/blog/bitwarden-cli-compromised"
    },
    {
      "by": "nkrisc",
      "descendants": 207,
      "id": 47882645,
      "kids": [
        47885819,
        47886562,
        47883878,
        47884061,
        47886320,
        47883829,
        47883404,
        47886020,
        47884525,
        47883586,
        47884869,
        47885089,
        47884570,
        47883874,
        47886312,
        47885771,
        47884640,
        47886022,
        47883739,
        47885959,
        47884460,
        47883858,
        47885894,
        47884087,
        47886406,
        47883992,
        47883396,
        47882659,
        47884332,
        47884312,
        47884785,
        47883115,
        47883536,
        47883890,
        47885498,
        47883629,
        47883143,
        47884059,
        47885406,
        47883984,
        47884377,
        47883118,
        47883594,
        47883436
      ],
      "score": 155,
      "text": "<a href=\"https:&#x2F;&#x2F;www.justice.gov&#x2F;usao-sdny&#x2F;pr&#x2F;us-soldier-charged-using-classified-information-profit-prediction-market-bets?bm-verify=AAQAAAAN_____y6To7sZYZ502biZwIHXlr-7zXZUqV4H0xLTfW__wDA3SjNLqifXRaQwsikyuz6IJknyuL8xfVYRkesxcDk5V10m-HoXl2K93f17rygBphL77WVFoQ_XvlmUo922IwM_DQ66137X6wWMtpdHslcEjpJG7KbBmUw9Su4kDENpDt_yv2spThQZehgv-X1Adk5U2VHfp41co2s_QJGjRj4y0KmL1mhSCyVaE7MC1LHG0mtP-xYmD0xBOQwn6PlHkPiP5Nt46h5ZIjLGXgCZDEVD42i7rIEM379DKLPUPX0PDNmOAwFSuTqcTDVnT_UUV8vxpHLRMb7rUxPxKUPcIB23iZTRJddWDDtPHMXadpwv67xr-f1sKDLZT9NgHCO4iuC2EthmAt0\" rel=\"nofollow\">https:&#x2F;&#x2F;www.justice.gov&#x2F;usao-sdny&#x2F;pr&#x2F;us-soldier-charged-usin...</a>",
      "time": 1776981375,
      "title": "US special forces soldier arrested after allegedly winning $400k on Maduro raid",
      "type": "story",
      "url": "https://www.cnn.com/2026/04/23/politics/us-special-forces-soldier-arrested-maduro-raid-trade"
    },
    {
      "by": "scubakid",
      "descendants": 38,
      "id": 47885377,
      "kids": [
        47886534,
        47886112,
        47885838,
        47885919,
        47885802,
        47885757,
        47885791,
        47885793,
        47885830,
        47885745
      ],
      "score": 100,
      "time": 1777003482,
      "title": "Habitual coffee intake shapes the microbiome, modifies physiology and cognition",
      "type": "story",
      "url": "https://www.nature.com/articles/s41467-026-71264-8"
    },
    {
      "by": "adityaathalye",
      "descendants": 4,
      "id": 47885668,
      "kids": [
        47886484,
        47886139,
        47886247,
        47886489
      ],
      "score": 19,
      "time": 1777006134,
      "title": "Familiarity is the enemy: On why Enterprise systems have failed for 60 years",
      "type": "story",
      "url": "https://felixbarbalet.com/familiarity-is-the-enemy/"
    },
    {
      "by": "Vaslo",
      "descendants": 525,
      "id": 47879986,
      "kids": [
        47885294,
        47885407,
        47881678,
        47886589,
        47880643,
        47882440,
        47880428,
        47885313,
        47880873,
        47885237,
        47881508,
        47880489,
        47883028,
        47880888,
        47886377,
        47880266,
        47880438,
        47884284,
        47882692,
        47881230,
        47880773,
        47885308,
        47885475,
        47881383,
        47882856,
        47880637,
        47881034,
        47880723,
        47882375,
        47883289,
        47880397,
        47881576,
        47880733,
        47881797,
        47880950,
        47882000,
        47884795,
        47880782,
        47880316,
        47881595,
        47882335,
        47882814,
        47882793,
        47880243,
        47881643,
        47880272,
        47885258,
        47880581,
        47881113,
        47882014,
        47880361,
        47880276,
        47880418,
        47881518,
        47880829,
        47880580
      ],
      "score": 551,
      "text": "<a href=\"https:&#x2F;&#x2F;techcrunch.com&#x2F;2026&#x2F;04&#x2F;23&#x2F;meta-job-cuts-10-percent-8000-employees&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;techcrunch.com&#x2F;2026&#x2F;04&#x2F;23&#x2F;meta-job-cuts-10-percent-8...</a>",
      "time": 1776970532,
      "title": "Meta tells staff it will cut 10% of jobs",
      "type": "story",
      "url": "https://www.bloomberg.com/news/articles/2026-04-23/meta-tells-staff-it-will-cut-10-of-jobs-in-push-for-efficiency"
    },
    {
      "by": "lucaronin",
      "descendants": 62,
      "id": 47882697,
      "kids": [
        47886563,
        47884325,
        47885181,
        47886339,
        47885618,
        47885297,
        47883776,
        47884803,
        47885780,
        47885956,
        47884941,
        47886135,
        47883742,
        47886224,
        47884484,
        47885766,
        47883398,
        47883140,
        47883132,
        47883270,
        47883441,
        47882754,
        47883444,
        47884838,
        47884505,
        47884208,
        47884363,
        47884714,
        47885623,
        47883966,
        47884607,
        47883700,
        47883025
      ],
      "score": 172,
      "text": "Hey there! I am Luca, I write <a href=\"https:&#x2F;&#x2F;refactoring.fm&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;refactoring.fm&#x2F;</a> and I built Tolaria for myself to manage my own knowledge base (10K notes, 300+ articles written in over 6 years of newslettering) and work well with AI.<p>Tolaria is offline-first, file-based, has first-class support for git, and has strong opinions about how you should organize notes (types, relationships, etc).<p>Let me know your thoughts!",
      "time": 1776981719,
      "title": "Show HN: Tolaria – Open-source macOS app to manage Markdown knowledge bases",
      "type": "story",
      "url": "https://github.com/refactoringhq/tolaria"
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
      "title": "How good engineers write bad code at big companies",
      "url": "https://www.seangoedecke.com/bad-code-at-big-companies/",
      "permalink": "https://www.reddit.com/r/programming/comments/1stf10u/how_good_engineers_write_bad_code_at_big_companies/",
      "author": "/u/fagnerbrack",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/fagnerbrack [link] &#32; [comments]",
      "published": "2026-04-23T10:38:32+00:00"
    },
    {
      "title": "Bitwarden CLI Compromised in Ongoing Checkmarx Supply Chain",
      "url": "https://socket.dev/blog/bitwarden-cli-compromised",
      "permalink": "https://www.reddit.com/r/programming/comments/1stoumz/bitwarden_cli_compromised_in_ongoing_checkmarx/",
      "author": "/u/Successful_Bowl2564",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Successful_Bowl2564 [link] &#32; [comments]",
      "published": "2026-04-23T17:08:27+00:00"
    },
    {
      "title": "Message Queue vs Task Queue vs Message Broker: why are these always mixed up?",
      "url": "https://medium.com/@yashvaishnav1404/message-queue-and-task-queue-when-to-use-them-fe3a694f6433",
      "permalink": "https://www.reddit.com/r/programming/comments/1stchku/message_queue_vs_task_queue_vs_message_broker_why/",
      "author": "/u/Civil_Station_1164",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Title: Message Queue vs Task Queue vs Message Broker: why are these always mixed up? While working with Celery, Redis, and RabbitMQ, I kept seeing people use message queue, task queue, and message broker interchangeably. After looking into the documentation and real implementations, here’s how I understand it: Message Queue : just moves messages (one consumer per message). Message Broker : manages queues, routes, retries, and protocols. Task Queue : executes actual jobs using workers. They’re not alternatives; they work together in production systems. One interesting thing I noticed is that a lot of confusion comes from tools like Redis, which can act as both a simple queue and a broker-like system, and Celery, which abstracts everything. I’m curious how others think about this. Do you keep these concepts separate in your architecture or treat them more loosely? I also wrote a deeper breakdown with examples (Celery, RabbitMQ, SQS) if anyone’s interested. &#32; submitted by &#32; /u/Civil_Station_1164 [link] &#32; [comments]",
      "published": "2026-04-23T08:10:24+00:00"
    },
    {
      "title": "An update on the rust-coreutils rewrite for Ubuntu 26.04",
      "url": "https://discourse.ubuntu.com/t/an-update-on-rust-coreutils/80773",
      "permalink": "https://www.reddit.com/r/programming/comments/1stch8t/an_update_on_the_rustcoreutils_rewrite_for_ubuntu/",
      "author": "/u/self",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/self [link] &#32; [comments]",
      "published": "2026-04-23T08:09:57+00:00"
    },
    {
      "title": "Bitwarden CLI Compromised in Ongoing Checkmarx Supply Chain ...",
      "url": "https://socket.dev/blog/bitwarden-cli-compromised",
      "permalink": "https://www.reddit.com/r/programming/comments/1stxuqq/bitwarden_cli_compromised_in_ongoing_checkmarx/",
      "author": "/u/ApprehensiveEssay222",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Bitwarden CLI npm package got compromised today, looks like part of the ongoing Checkmarx supply chain attack If you’re using @bitwarden/cli version 2026.4.0, you might want to check your setup From what researchers found: - malicious file added (bw1.js) - steals creds from GitHub, npm, AWS, Azure, GCP, SSH, env vars - can read GitHub Actions runner memory - exfiltrates data and even tries to spread via npm + workflows - adds persistence through bash/zsh profiles Some weird indicators: - calls to audit.checkmarx.cx - temp file like /tmp/tmp.987654321.lock - random public repos with dune-style names (atreides, fremen etc.) - commits with “LongLiveTheResistanceAgainstMachines” Important part, this is only the npm CLI package right now, not the extensions or main apps If you used it recently: probably safest to rotate your tokens and check your CI logs and repos Source is Socket research (posted a few hours ago) Curious if anyone here actually got hit or noticed anything weird &#32; submitted by &#32; /u/ApprehensiveEssay222 [link] &#32; [comments]",
      "published": "2026-04-23T22:41:18+00:00"
    },
    {
      "title": "While GitHub Actions remains a key part of this vision, we are allocating resources towards other areas ...",
      "url": "https://github.com/cli/cli/issues/5416",
      "permalink": "https://www.reddit.com/r/programming/comments/1su5w1d/while_github_actions_remains_a_key_part_of_this/",
      "author": "/u/esiy0676",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Looking at it backwards - where is this heading? The official toolkit is falling behind, the action repos READMEs all state: We continue to focus our resources on strategic areas that help our customers be successful while making developers&#39; lives easier. While GitHub Actions remains a key part of this vision, we are allocating resources towards other areas of Actions and are not taking contributions to this repository at this time. But then back in 2022, it was the toolkit that was primary, CLI not being worth to keep in sync (linked issue ). So: What other areas? Is this a subliminal message to let co-pilot put something together without worrying much about any of the architecture? From the design standpoint, GHA looks like on life support, but that&#39;s nowhere it should be from the product lifecycle aspect of things. My OP on r/github : TL;DR I suppose some of the below might (if you will) be assigned to a &quot;learning curve issue&quot;, but all in all and given Microsoft&#39;s budget: Are GHA basically a &quot;launch and forget&quot; product? Is the official toolkit supposed to become &quot;outsourced&quot; to the Marketplace? Is this meant to be production quality tooling? Because it feels a bit like an experiment that got abandoned. I went to build a relatively simple pipeline with a couple of reusable workflows, bunch of composite actions and make use of GHCR where the images that are used to run the jobs reside - they are built from workflows too. There&#39;s been quite a few gotchas to me so far. Workflows and composite actions discrepancies workflows can define top-level env , actions cannot workflows can (in fact, must) pass in secrets actions do not support secrets (and one better remembers to ::addmask:: on anything passed in) workflows must define types on inputs strictly (and it ends up being string all of the time) workflows must not define types on secrets actions must not define types on inputs Reusable workflows do not get anything checked out with them, not even if called from separate repo, but composite actions do get everything checked out alongside in that case - in fact all the other actions from their repo get checked out. There&#39;s no reasonable way to share inputs between workflow_call: and repository_dispatch: , i.e. one needs to make extra job to reconcile inputs in these two cases even it could be all structured the same in client_payload . Composite actions have not been designed to be nested when sharing the same repo, i.e. calling one from within another requires one to fully specify the user/repo/action@ref even if it is meant to use the very same one, thus making it necessary to keep updating @ref for every push - or avoid using the construct altogether and resort to e.g. shared scripts. Aside: Debugging Talking of scripts, one cannot see outputs unless tee -a $GITHUB_OUTPUT &gt;&amp;2 , which makes one want to use multi-line HEREDOC - not exactly robust approach. And that only works for steps, obviously. Then having shell run by default with set -e with no indication on which line it exited is a bit of a nightmare. Either good for running single-liners, always setting own trap &lt;echo&gt; ERR or resorting to copious error output that kills readability of CI scripting, always. I suppose the single-liners were expected because every Run folds into its first line which is best to be some # summary comment since description is not supported on steps. Alas, calling actions has to be with no comments . The initial temptation to have anything multi-line inside scripts that are then single-liners however results in the realisation that - see above - workflows do not get them checked out. About jobs It is impossible to share matrix between jobs, as if the env is evaluated in the same pass - it cannot be used as a constant, so the workaround is to set repository variable and then strategy: matrix: field: ${{ fromJson(vars.CONST) }} in each job - or keep doing copy/paste. Running jobs in containers does not allow for the very basics to be specified to be meaningful, i.o.w. one cannot really - within the YAML syntax - run the equivalent of e.g. podman run --rm --network=none &lt;...&gt; and select mounts only. In fact, one gets extra stuff (node et al) always mounted. Goodbye hermetic-anything. Official Actions falling behind Even though GHCR is a GH product, the accompanying GH actions are rusting, e.g. the actions/delete-package-versions has not been updated since January 2024 and is thus throwing EOL Node warnings. Even the daily driver actions are somewhat falling behind, e.g. actions/download-artifact keeps throwing: [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. and it seems to be recurrent issue over a long period. I understand deprecation is not a failure, but - this used to be sign of unmaintained software . And then others where the need naturally come from GHA runs, e.g. creating releases got completely abandoned and one has to resort to the Marketplace or run their own gh CLI. CLI that is &quot;too much work to keep parity&quot; At the same time, actions/upload-artifact do not even have a CLI equivalent because &quot;it would be too much work replicating&quot; . &#32; submitted by &#32; /u/esiy0676 [link] &#32; [comments]",
      "published": "2026-04-24T04:50:45+00:00"
    },
    {
      "title": "What is Pub/Sub? An Interactive Guide to Messaging",
      "url": "http://encore.dev/blog/pubsub",
      "permalink": "https://www.reddit.com/r/programming/comments/1stkn70/what_is_pubsub_an_interactive_guide_to_messaging/",
      "author": "/u/GlitteringPenalty210",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/GlitteringPenalty210 [link] &#32; [comments]",
      "published": "2026-04-23T14:38:19+00:00"
    },
    {
      "title": "how metrics are stored and queried",
      "url": "https://www.bitsxpages.com/p/how-metrics-are-stored-and-queried",
      "permalink": "https://www.reddit.com/r/programming/comments/1stmrx1/how_metrics_are_stored_and_queried/",
      "author": "/u/NoPercentage6144",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/NoPercentage6144 [link] &#32; [comments]",
      "published": "2026-04-23T15:54:41+00:00"
    },
    {
      "title": "Refactoring: Express Selections as Tables",
      "url": "https://adamtornhill.substack.com/p/refactoring-express-selections-as",
      "permalink": "https://www.reddit.com/r/programming/comments/1stk8t6/refactoring_express_selections_as_tables/",
      "author": "/u/nephrenka",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "How much of your code is actually just data pretending to be logic? Here’s a simple refactoring to make it explicit. &#32; submitted by &#32; /u/nephrenka [link] &#32; [comments]",
      "published": "2026-04-23T14:23:43+00:00"
    },
    {
      "title": "Devirtualization and Static Polymorphism",
      "url": "https://david.alvarezrosa.com/posts/devirtualization-and-static-polymorphism/",
      "permalink": "https://www.reddit.com/r/programming/comments/1stq9k6/devirtualization_and_static_polymorphism/",
      "author": "/u/david-alvarez-rosa",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/david-alvarez-rosa [link] &#32; [comments]",
      "published": "2026-04-23T17:57:38+00:00"
    },
    {
      "title": "Why I spent years trying to make CSS states predictable",
      "url": "https://tenphi.me/blog/why-i-spent-years-trying-to-make-css-states-predictable/",
      "permalink": "https://www.reddit.com/r/programming/comments/1su7irb/why_i_spent_years_trying_to_make_css_states/",
      "author": "/u/SpecialistLady",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/SpecialistLady [link] &#32; [comments]",
      "published": "2026-04-24T06:17:58+00:00"
    },
    {
      "title": "Your Models Know Their Own Schema. Let Them Show You.",
      "url": "https://jeffield.net/blog/your-models-know-their-own-schema-let-them-show-you/",
      "permalink": "https://www.reddit.com/r/programming/comments/1su5k7i/your_models_know_their_own_schema_let_them_show/",
      "author": "/u/jsheffi",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/jsheffi [link] &#32; [comments]",
      "published": "2026-04-24T04:34:13+00:00"
    },
    {
      "title": "Kafka for Architects • Ekaterina Gorshkova & Viktor Gamov",
      "url": "https://youtu.be/6Uks7r652T8?list=PLEx5khR4g7PJbSLmADahf0LOpTLifiCra",
      "permalink": "https://www.reddit.com/r/programming/comments/1sth0eg/kafka_for_architects_ekaterina_gorshkova_viktor/",
      "author": "/u/goto-con",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/goto-con [link] &#32; [comments]",
      "published": "2026-04-23T12:14:22+00:00"
    },
    {
      "title": "The 20 Software Engineering Laws",
      "url": "https://newsletter.techworld-with-milan.com/p/the-20-software-engineering-laws",
      "permalink": "https://www.reddit.com/r/programming/comments/1stmn8i/the_20_software_engineering_laws/",
      "author": "/u/milanm08",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/milanm08 [link] &#32; [comments]",
      "published": "2026-04-23T15:50:00+00:00"
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
      "title": "So, what am I doing after 22 years in tech?",
      "description": "A follow-up to What to do in tech after 20 years?*   Two years ago, I was between a rock and a hard...",
      "url": "https://dev.to/phalkmin/so-what-am-i-doing-after-22-years-in-tech-7ic",
      "tags": "discuss, career, watercooler, help",
      "reactions": 23,
      "comments": 7,
      "reading_time": 7,
      "author": "phalkmin"
    },
    {
      "title": "I went against the trend - everyone split their monolith, I built one",
      "description": "I disappeared from dev.to for 6 months. I came back with a new job, 5 products, and a...",
      "url": "https://dev.to/iampraveen/i-went-against-the-trend-everyone-split-their-monolith-i-built-one-bba",
      "tags": "ai, career, architecture, webdev",
      "reactions": 10,
      "comments": 0,
      "reading_time": 5,
      "author": "iampraveen"
    },
    {
      "title": "From Byte-Pushing in a Bookstore to the Emacs Matrix",
      "description": "If the first 18 years of my life were spent in \"Survival Mode,\" the years that followed were my true...",
      "url": "https://dev.to/lcmd007/refactoring-my-life-from-bookstore-clerk-to-emacs-hacker-4901",
      "tags": "career, learning, linux, opensource",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "lcmd007"
    },
    {
      "title": "Technical Debt: How to Show Your CEO That Refactoring Is an Investment",
      "description": "CTOs struggle to justify refactoring. Here's how to use developer activity data to build a business case your CEO will understand.",
      "url": "https://dev.to/arthur_pandev/technical-debt-how-to-show-your-ceo-that-refactoring-is-an-investment-2aid",
      "tags": "programming, discuss, career, management",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "arthur_pandev"
    },
    {
      "title": "The 20 LeetCode Patterns That Cover 80% of Coding Interviews",
      "description": "The Problem With \"Grind 500 Problems\"   Every CS student hears the same advice: \"Just grind...",
      "url": "https://dev.to/crackly/the-20-leetcode-patterns-that-cover-80-of-coding-interviews-hh",
      "tags": "leetcode, algorithms, career, beginners",
      "reactions": 1,
      "comments": 0,
      "reading_time": 8,
      "author": "crackly"
    },
    {
      "title": "Engineering Team ROI: How to Calculate and Present to Business",
      "description": "A CTO's guide to calculating and presenting engineering team ROI to the CEO and board. Includes formulas, frameworks, and presentation tips.",
      "url": "https://dev.to/arthur_pandev/engineering-team-roi-how-to-calculate-and-present-to-business-2045",
      "tags": "management, career, discuss, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "arthur_pandev"
    },
    {
      "title": "How to Set Boundaries at Work Without Feeling Guilty",
      "description": "Most people who burn out are not lazy or weak. They are people who found it very hard to say no....",
      "url": "https://dev.to/recharge/how-to-set-boundaries-at-work-without-feeling-guilty-4dme",
      "tags": "burnout, career, productivity, mentalhealth",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "recharge"
    },
    {
      "title": "The Ethics of AI-Assisted Work: What the Professional Codes Actually Say",
      "description": "This is Part 2 of my series on AI in professional work. Read Part 1 → I Used AI for 90% of my...",
      "url": "https://dev.to/alexrebula/the-ethics-of-ai-assisted-work-what-the-professional-codes-actually-say-35dd",
      "tags": "ai, career, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "alexrebula"
    },
    {
      "title": "Stop drawing system design diagrams. Start simulating them.",
      "description": "Your diagram never fails.    That's the problem.  You draw a load balancer, three app servers, Redis...",
      "url": "https://dev.to/ronitdahiya/stop-drawing-system-design-diagrams-start-simulating-them-3m19",
      "tags": "systemdesign, career, architecture, interview",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "ronitdahiya"
    },
    {
      "title": "20 Penetration Testing Projects Worth Adding to Your Resume",
      "description": "Article Summary   This article addresses the needs of job seekers aiming for penetration...",
      "url": "https://dev.to/excalibra/20-penetration-testing-projects-worth-adding-to-your-resume-3d34",
      "tags": "career, cybersecurity, security, pentest",
      "reactions": 6,
      "comments": 0,
      "reading_time": 14,
      "author": "excalibra"
    }
  ]
}
```

