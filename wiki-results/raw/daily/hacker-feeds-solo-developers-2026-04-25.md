# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-25 06:46:05 UTC

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
      "forks": 699,
      "added_stars": 2878,
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
      "forks": 2524,
      "added_stars": 5421,
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
      "forks": 5710,
      "added_stars": 5961,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output, 98% reduction. 12 platforms",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 680,
      "added_stars": 2315,
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
      "author": "jamiepine",
      "repo": "voicebox",
      "avatar": "https://github.com/jamiepine.png",
      "repo_link": "https://github.com/jamiepine/voicebox",
      "desc": "The open-source AI voice studio. Clone, dictate, create.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2730,
      "added_stars": 3540,
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
      "author": "mnfst",
      "repo": "manifest",
      "avatar": "https://github.com/mnfst.png",
      "repo_link": "https://github.com/mnfst/manifest",
      "desc": "Smart Model Routing for Personal AI Agents. Cut Costs up to 70% 🦞👧🦚",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 324,
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
      "author": "langfuse",
      "repo": "langfuse",
      "avatar": "https://github.com/langfuse.png",
      "repo_link": "https://github.com/langfuse/langfuse",
      "desc": "🪢 Open source LLM engineering platform: LLM Observability, metrics, evals, prompt management, playground, datasets. Integrates with OpenTelemetry, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2635,
      "added_stars": 951,
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
      "author": "koala73",
      "repo": "worldmonitor",
      "avatar": "https://github.com/koala73.png",
      "repo_link": "https://github.com/koala73/worldmonitor",
      "desc": "Real-time global intelligence dashboard. AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8421,
      "added_stars": 3903,
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
      "author": "onlook-dev",
      "repo": "onlook",
      "avatar": "https://github.com/onlook-dev.png",
      "repo_link": "https://github.com/onlook-dev/onlook",
      "desc": "The Cursor for Designers • An Open-Source AI-First Design tool • Visually build, style, and edit your React App with AI",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1964,
      "added_stars": 366,
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
      "author": "firecrawl",
      "repo": "open-lovable",
      "avatar": "https://github.com/firecrawl.png",
      "repo_link": "https://github.com/firecrawl/open-lovable",
      "desc": "🔥 Clone and recreate any website as a modern React app in seconds",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4956,
      "added_stars": 315,
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
      "author": "coleam00",
      "repo": "Archon",
      "avatar": "https://github.com/coleam00.png",
      "repo_link": "https://github.com/coleam00/Archon",
      "desc": "The first open-source harness builder for AI coding. Make AI coding deterministic and repeatable.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3033,
      "added_stars": 1085,
      "builtBy": [
        {
          "username": "Wirasm",
          "href": "https://github.com/Wirasm",
          "avatar": "https://avatars.githubusercontent.com/u/152263317"
        },
        {
          "username": "coleam00",
          "href": "https://github.com/coleam00",
          "avatar": "https://avatars.githubusercontent.com/u/47287758"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "leex279",
          "href": "https://github.com/leex279",
          "avatar": "https://avatars.githubusercontent.com/u/6664492"
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
      "forks": 2217,
      "added_stars": 68,
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
      "author": "KeygraphHQ",
      "repo": "shannon",
      "avatar": "https://github.com/KeygraphHQ.png",
      "repo_link": "https://github.com/KeygraphHQ/shannon",
      "desc": "Shannon Lite is an autonomous, white-box AI pentester for web applications and APIs. It analyzes your source code, identifies attack vectors, and executes real exploits to prove vulnerabilities before they reach production.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4461,
      "added_stars": 1753,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1961,
      "added_stars": 1106,
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
      "title": "Am I using Claude Code wrong?",
      "url": "https://www.reddit.com/r/webdev/comments/1suqbrl/am_i_using_claude_code_wrong/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1suqbrl/am_i_using_claude_code_wrong/",
      "author": "/u/Postik123",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Most of my work now uses Laravel. For the past few months I&#39;ve been using Claude Code, but based on what I read on this sub, I have a nagging concern maybe I&#39;m not using it right. This stems from the fact I regularly hear people say they did like 5 weeks of work in 5 hours using Claude Code. I recently added a whole bunch of new features to one of our Laravel projects using Claude, and honestly I&#39;m really not sure how much time it saved. First of all, to get exactly what you want, you have to write a fairly detailed prompt. That in itself takes time. I usually put it into plan mode. It will take several minutes to think about everything and write the plan. Often I find myself checking emails or getting side tracked whilst waiting, which can lead to more time wasted. After it&#39;s written the plan I&#39;ll most likely make some revisions. Claude will think some more. Finally, we&#39;ll put the plan into action. More waiting. Then at the end of it I&#39;ll check through what it&#39;s created or changed as I don&#39;t 100% trust it to never make a mistake or do something out of turn. So more time checking things. Now, I would have to do the project all over again by hand to compare how long it would take me without Claude Code. But it just doesn&#39;t feel like it&#39;s saving masses of time. It&#39;s mostly saving me typing, and I type pretty quickly. I have some changes to make to another project and the way those changes need to work is quite detailed and intricate. I&#39;m thinking that writing the prompt explaining what I want down to the last detail will probably take almost as long as just rolling up my sleeves and doing it myself. So are my expectations of doing 5 weeks worth of work in 5 hours unrealistic, or am I just using the tool in the wrong way? &#32; submitted by &#32; /u/Postik123 [link] &#32; [comments]",
      "published": "2026-04-24T19:54:43+00:00"
    },
    {
      "title": "I just saw this on threads. Is it true that GoDaddy is taking people’s domains? Did somebody experienced this?",
      "url": "https://i.redd.it/mj6toa83u9xg1.jpeg",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sv35dd/i_just_saw_this_on_threads_is_it_true_that/",
      "author": "/u/SachinKaxhyap",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/SachinKaxhyap [link] &#32; [comments]",
      "published": "2026-04-25T05:20:18+00:00"
    },
    {
      "title": "Moving on after 10+ years at the same company",
      "url": "https://www.reddit.com/r/webdev/comments/1suh4zq/moving_on_after_10_years_at_the_same_company/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1suh4zq/moving_on_after_10_years_at_the_same_company/",
      "author": "/u/SchrimpMan",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hi everyone, I’m facing a bit of a career crossroads and could use some perspective from the community. For the past decade, I’ve worked for a major French company. I started as a PHP/Fullstack dev, but over the years, I carved out a niche for myself as what I call an &quot;Integrator ++&quot; . My daily bread is high-level HTML, CSS, vanilla JS, Web Performance, and Accessibility (A11y). I’ve been a Lead Dev for 6 years now. In my current company, I have total &quot;veto&quot; power, no project goes live without my validation on the frontend architecture and quality standards. The catch: I’m leaving soon (long story), and I’m worried the specific role (and the senior salary that goes with it) I’ve built for myself doesn’t exist elsewhere. I feel like a dinosaur who is very good at his craft but might be missing the &quot;shiny&quot; tools recruiters crave. My questions for you: Is there a market for &quot;UI Architects&quot; or &quot;Web Perf Specialists&quot; who aren&#39;t necessarily React/Angular experts (yet)? If I want to be &quot;bankable&quot; in 2026, which stack should I pair with my accessibility/performance expertise? For those who left a &quot;comfortable&quot; Lead position after a long time, how did you handle the &quot;imposter syndrome&quot; during interviews when asked about modern tooling? I have the fundamentals down to a science, but I need to modernize my &quot;packaging&quot; to stay competitive. Thanks for your insights! &#32; submitted by &#32; /u/SchrimpMan [link] &#32; [comments]",
      "published": "2026-04-24T14:21:02+00:00"
    },
    {
      "title": "Are there ways in browsers to prevent Javascript from disabling copy/paste and right click menu?",
      "url": "https://www.reddit.com/r/webdev/comments/1suz3ij/are_there_ways_in_browsers_to_prevent_javascript/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1suz3ij/are_there_ways_in_browsers_to_prevent_javascript/",
      "author": "/u/GroomedHedgehog",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I seem to be encountering sites that fuck with the context menu or ability to copy/paste more often as of late (if you are one of those responsible for this, please quit your job). Latest offender is Dropbox of all places, which now demands one manually type their password to empty the recycle bin. Are there ways to prevent JavaScript&#39;s ability to do so (maybe something in about:flags or similar) without disabling it entirely? Or if not, is there a way to do the same with the browser&#39;s developer tools? &#32; submitted by &#32; /u/GroomedHedgehog [link] &#32; [comments]",
      "published": "2026-04-25T02:02:45+00:00"
    },
    {
      "title": "Client has 30 domains selling the same thing, consolidate or no?",
      "url": "https://www.reddit.com/r/webdev/comments/1sujpwv/client_has_30_domains_selling_the_same_thing/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sujpwv/client_has_30_domains_selling_the_same_thing/",
      "author": "/u/FleetingCheese",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey everyone, Client I&#39;m working with has a small business selling hardware products. He has one &quot;main&quot; one, but also domains with cloned content per city ex: hardwareedmonton.com, hardwarevancouver.com etc. I assume this was done for SEO purposes when Google blessed these types of domain names in the past. In my understanding Google doesn&#39;t care about this anymore and prefers one source of truth. Am I right in going thru these sites and having them redirect to the &quot;main&quot; site instead? Reasoning is we&#39;ll centralize Internet traffic and also help reduce developer load on maintaining 30 sites. Advice and sanity check much appreciated, thank you! &#32; submitted by &#32; /u/FleetingCheese [link] &#32; [comments]",
      "published": "2026-04-24T15:55:30+00:00"
    },
    {
      "title": "Estimating projects in 2026 issues",
      "url": "https://www.reddit.com/r/webdev/comments/1sufe4p/estimating_projects_in_2026_issues/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sufe4p/estimating_projects_in_2026_issues/",
      "author": "/u/IAmRules",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "So after months of trying to break back into freelancing, i finally had a real client reach out for a project. But I immediately hit a problem I never thought about before so wondering how you guys deal with it. This guy essentially wants custom CRM for his business, so normally I would use Laravel + Filament + Cashier and spin him up a demo, iterate and maybe do 2 week or a month of back and fourth work for a project at 5-10k usd. But now I can literally spin him up the same app in maybe an hour or two of prompting CC, and knowing his use cases I can give him a fully functional app in a day or two for about $500 bucks worth of my time. Issue is - the risk is now all on ME for very little money back. If he makes endless iterations, if he changes his mind, hates the app whatever.. yea I can get some extra money but again i&#39;m doing all the risky parts of freelancing and support for much less reward back. Sure I can still charge him 5k, but then I feel like i&#39;m ripping him off cause I 100% am and at that point he can literally just ask any other script kiddie to prompt their way for 200 bucks. Am I overthinking this? This is my first freelance gig in 12 years, and I&#39;m much less tolerant of dealing with the headache clients making me question whether this is worth it if these are now the typical returns. &#32; submitted by &#32; /u/IAmRules [link] &#32; [comments]",
      "published": "2026-04-24T13:12:43+00:00"
    },
    {
      "title": "WebMCP... why go through the website?",
      "url": "https://www.reddit.com/r/webdev/comments/1suiwcz/webmcp_why_go_through_the_website/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1suiwcz/webmcp_why_go_through_the_website/",
      "author": "/u/fyzbo",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;m failing to understand the value of WebMCP as opposed to connecting to the underlying APIs directly. We all went through the process of migrating to APIs and headless architecture, why not skip the web layer entirely? Is anyone using WebMCP? What does it get you over going directly to the API layer? &#32; submitted by &#32; /u/fyzbo [link] &#32; [comments]",
      "published": "2026-04-24T15:25:32+00:00"
    },
    {
      "title": "Best way to make a site",
      "url": "https://www.reddit.com/r/webdev/comments/1sv179k/best_way_to_make_a_site/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sv179k/best_way_to_make_a_site/",
      "author": "/u/aarav7sc",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey so, ive been wondering what could be the best approach making a website. Like what to start with, what idea. What is the best order to start/finish these things. Sitemap Framework Colors Typography Final Design (like in figma) Coding the site In what order to approach these things, also if any im missing, Thankyou. &#32; submitted by &#32; /u/aarav7sc [link] &#32; [comments]",
      "published": "2026-04-25T03:41:42+00:00"
    },
    {
      "title": "Feedback on website built with Astro",
      "url": "https://www.reddit.com/r/webdev/comments/1sutpms/feedback_on_website_built_with_astro/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sutpms/feedback_on_website_built_with_astro/",
      "author": "/u/iLikePython3",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey everyone! Where I live it is Saturday now, so it should be fine if I ask for feedback now, right? :D I just developed and launched my first website with Astrojs! It&#39;s a bilingual (German/English) portfolio and information site for an artist duo. https://schatzundschatzgbr.de Tech stack Astro 5 (fully static output) Decap CMS so the artists can manage content themselves without touching code Netlify hosting with Netlify Forms (newsletter signup, connects to MailerLite with Zapier) Specific things I&#39;d love feedback on Does the bilingual experience (DE/EN switching) feel smooth and intuitive? How does the overall design feel for an artist/performance context — does it convey the right mood? Navigation clarity — can you easily find productions, dates, and contact info? Mobile experience — anything feeling off on smaller screens? Any general UX, accessibility, or performance observations welcome! Any bugs, issues, or errors? How much would you charge for a website like this? This is a real site for working artists, so honest critique is hugely appreciated. Thanks in advance! &#32; submitted by &#32; /u/iLikePython3 [link] &#32; [comments]",
      "published": "2026-04-24T22:04:09+00:00"
    },
    {
      "title": "Should I add PostgreSQL on my resume even though I didn't notice much of a difference working with it versus MySQL?",
      "url": "https://www.reddit.com/r/webdev/comments/1susk7d/should_i_add_postgresql_on_my_resume_even_though/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1susk7d/should_i_add_postgresql_on_my_resume_even_though/",
      "author": "/u/TalesOfSymposia",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Started using MySQL in my LAMP stack days doing that for 5+ years, and later took a contract Ruby on Rails job, switching all of the stack but MVC patterns made it feel very familiar. Instead of MySQL they used PostgreSQL for the back end. Yet in practice it didn&#39;t feel so different at all. The CLI, the table structures, all what I had to deal with. The client catered to other small local businesses so there was not a huge need for scalability. I&#39;m comfortable with a lot of SQL syntax (well as much as I need to as a full stack dev and not an admin). But I don&#39;t know if adding Postgres to my listed skills is a good idea. Or if it will lead to a trap of me expecting to know all the crucial differences where a client cannot meet needs with MySQL. &#32; submitted by &#32; /u/TalesOfSymposia [link] &#32; [comments]",
      "published": "2026-04-24T21:18:28+00:00"
    },
    {
      "title": "I need guidance on web/app dev as someone with no experience. I'm coming from a business perspecitve.",
      "url": "https://www.reddit.com/r/webdev/comments/1subeai/i_need_guidance_on_webapp_dev_as_someone_with_no/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1subeai/i_need_guidance_on_webapp_dev_as_someone_with_no/",
      "author": "/u/SignificanceOk6360",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hello! I am yet to have any experience in this department . I need advice on what the optimal way to produce and host my own website/app: selling products similar to Amazon, multiple 3rd party sellers, and divided commission (the business receives a % of seller transactions). Below are more specifics on what I&#39;m looking for. Feel free to DM me to answer. 1) Production, running and hosting - I need guidance on costs, time scale, and hardware/software involved, as well as the production process. 2) Account storage - As someone with no experience, I&#39;m currently thinking the following: Three account types (Customer, seller, and admin) - server allocation, stored on separate servers? etc. - information safety - costs and volume when it comes to servers 3) Cyber security - What needs to be put in place? 4) Payment - a) divided: not a straightforward transaction, all the values need to be allocated among the correct accounts. b) Also, as a curiosity, is it possible to utilise cryptocurrencies (BTC, ETH) and stablecoins (USDC) as an optional payment method? How would this be implemented? Any barriers that arise with this? (aside from price volatility). 5) Anything else I&#39;ve missed - I&#39;m sure there is plenty I&#39;ve missed, so if you notice anything, let me know. If you&#39;re contacting me from the perspective of attempting to acquire me as a client, please include your specific expertise and experience when you DM me. Any advice is much appreciated. For reference, I&#39;m based in the UK. &#32; submitted by &#32; /u/SignificanceOk6360 [link] &#32; [comments]",
      "published": "2026-04-24T10:05:00+00:00"
    },
    {
      "title": "Question for senior devs",
      "url": "https://www.reddit.com/r/webdev/comments/1sukbfw/question_for_senior_devs/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sukbfw/question_for_senior_devs/",
      "author": "/u/Dizzy_External2549",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Do you all remember all the programming languages or just languages in general, when you have something you&#39;re working on with that specific language? or do you do something everyday to help you remember certain things? Like if you&#39;re working with JS and react does your mind ever go blank? &#32; submitted by &#32; /u/Dizzy_External2549 [link] &#32; [comments]",
      "published": "2026-04-24T16:16:12+00:00"
    },
    {
      "title": "Handling multiple gmail accounts and dashboards without burnout.",
      "url": "https://www.reddit.com/r/webdev/comments/1su9b7x/handling_multiple_gmail_accounts_and_dashboards/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1su9b7x/handling_multiple_gmail_accounts_and_dashboards/",
      "author": "/u/Familiar_Network_108",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "i have started freelance web dev a year ago, now i have got like 5 client emails, 3 shopify stores, 2 notion workspaces, github, linear, slack for each project, stripe dashboards, and some aws console i barely remember the password for. logging into everything takes 20 mins every morning. half the time i click the wrong tab and end up in an old project, almost paying some random invoice. i just keep losing track of which login goes with which client. how do you keep all your accounts and dashboards under control? &#32; submitted by &#32; /u/Familiar_Network_108 [link] &#32; [comments]",
      "published": "2026-04-24T08:02:06+00:00"
    },
    {
      "title": "[Showoff Saturday] Console Animation library",
      "url": "https://i.redd.it/rkmo70ice8xg1.gif",
      "permalink": "https://www.reddit.com/r/webdev/comments/1suxyxo/showoff_saturday_console_animation_library/",
      "author": "/u/SideLow2446",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Just a small prototype of one of the things I&#39;ve been working on, which is a console-based animation library. Right now there are 2 ways to animate: Frame-by-frame Tweening Currently you have to manually add frames/tweens via the API but I&#39;d like to add a more UX-friendly way, either with a human readable/editable file format or maybe even with an interactive CLI. Comments and/or feedback appreciated, thank you. &#32; submitted by &#32; /u/SideLow2446 [link] &#32; [comments]",
      "published": "2026-04-25T01:10:09+00:00"
    },
    {
      "title": "Made a site with a button, that if you click, it redirects you to an old web1 type site, when the internet used to be fun and unique.",
      "url": "https://www.button.christmas/web1",
      "permalink": "https://www.reddit.com/r/webdev/comments/1suxrzg/made_a_site_with_a_button_that_if_you_click_it/",
      "author": "/u/truecakesnake",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "web1 was genuinely so fun. &#32; submitted by &#32; /u/truecakesnake [link] &#32; [comments]",
      "published": "2026-04-25T01:01:16+00:00"
    },
    {
      "title": "[Showoff Saturday] I built a CDN path for assets outside the usual image pipeline",
      "url": "https://www.reddit.com/r/webdev/comments/1supust/showoff_saturday_i_built_a_cdn_path_for_assets/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1supust/showoff_saturday_i_built_a_cdn_path_for_assets/",
      "author": "/u/oweaye",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Image optimization is usually where this starts. The other stuff is easier to miss: fonts, PDFs, SVGs, old CSS, JS bundles, JSON files, and small static assets that do not fit neatly into image tooling. I built Kompressr to make that pipeline less dramatic. For files you already host, you prepend one CDN URL: Before: https://example.com/hero.jpg After: https://cdn.kompressr.com/YOUR_PROJECT/https://example.com/hero.jpg No SDK. No build step. No moving the original file. The first request serves the original while Kompressr prepares the optimized copy. After that, the CDN serves the smaller version from the edge. It handles images, video, PDFs, fonts, CSS, JS, HTML, SVG, JSON, and XML on paid plans. Free tier starts with images. There is also an Upload API for files your app creates or receives. Same idea: send a file, get back a CDN URL. Free tier includes 250 optimizations. No credit card. https://kompressr.com/developers I built this because I got tired of stitching this file pipeline together. Happy to answer questions or hear where this does not fit your setup. &#32; submitted by &#32; /u/oweaye [link] &#32; [comments]",
      "published": "2026-04-24T19:36:38+00:00"
    },
    {
      "title": "Created a landing page for my iOS Apps - WDYT?",
      "url": "https://www.reddit.com/gallery/1sufc94",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sufc94/created_a_landing_page_for_my_ios_apps_wdyt/",
      "author": "/u/Rate-Worth",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hi r/webdev ! I built this landing page for my iOS projects. I tried keeping it minimal but fun - wdyt? https://apps.weichart.de &#32; submitted by &#32; /u/Rate-Worth [link] &#32; [comments]",
      "published": "2026-04-24T13:10:37+00:00"
    },
    {
      "title": "Lessons from building a domain-specific RAG where hallucinations have real consequences (Islamic finance rulings)",
      "url": "https://www.reddit.com/r/webdev/comments/1su9i2s/lessons_from_building_a_domainspecific_rag_where/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1su9i2s/lessons_from_building_a_domainspecific_rag_where/",
      "author": "/u/Particular-Plate7051",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Lessons from building a domain-specific RAG where hallucinations have real consequences (Islamic finance rulings) I built a RAG for halalfinanx.com [disclosure: my project] and ran into some problems that I think are worth sharing for anyone building in high-stakes domains. The core problem with vanilla RAG here In Islamic finance, a wrong answer isn&#39;t just unhelpful — it&#39;s potentially guiding someone&#39;s financial decision based on a fabricated fatwa. The model needs to know when to refuse, not just when to answer. What actually worked: Similarity threshold as a hard gate If the top retrieved chunks score below 0.7 cosine similarity, the LLM never gets called. The function returns &quot;I don&#39;t have a ruling on this — consult a qualified scholar&quot; directly. No LLM involved. This was more reliable than any system prompt instruction to &quot;refuse if unsure.&quot; Jurisdiction metadata on every chunk Each chunk carries source_name, source_url, jurisdiction (global / MY / GCC). The system prompt instructs the model to cite all three in every answer. A Malaysian SC ruling ≠ a Gulf fatwa — surfacing that distinction is the whole point. Seed corpus before scraping Started with a hand-curated JSON of 30 core terms with citations before touching any web scraping. This gave the FAISS index an immediate quality baseline and made early testing meaningful. FAISS on HuggingFace Spaces is ephemeral Free tier disk wipes on cold start. Fixed by pushing the index to a private HF Dataset and downloading on startup via FastAPI lifespan. Obvious in retrospect, not obvious at 2am. What didn&#39;t work: PyPDF2 on scanned AAOIFI PDFs extracts nothing — they&#39;re images. OCR via pytesseract works but Arabic encoding is messy. Ended up preferring clean HTML sources via trafilatura wherever possible. System prompt alone is not enough to prevent speculation in edge cases. The hard gate at retrieval level is more robust than prompt engineering. Stack: FastAPI + LlamaIndex + FAISS + sentence-transformers + Netlify Function as proxy so the HF token never hits the browser. Anyone else building RAG in domains where the wrong answer causes real harm? Curious how others handle the refusal threshold. &#32; submitted by &#32; /u/Particular-Plate7051 [link] &#32; [comments]",
      "published": "2026-04-24T08:13:32+00:00"
    },
    {
      "title": "Build my own “Skyslope”",
      "url": "https://www.reddit.com/r/webdev/comments/1suusch/build_my_own_skyslope/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1suusch/build_my_own_skyslope/",
      "author": "/u/Iamkellygrace",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "My business offers real estate transaction management to clients and we currently use Skyslope. How long would it take to build out my own? Just the document management, use of checklists, e-signature. Basically somewhere agents can load their documents and see the status of their own items etc. Thanks! &#32; submitted by &#32; /u/Iamkellygrace [link] &#32; [comments]",
      "published": "2026-04-24T22:48:14+00:00"
    },
    {
      "title": "Transfer Funds to Connected Account and Payout — running the full Stripe Connect flow in a sandbox",
      "url": "https://www.reddit.com/r/webdev/comments/1suts9e/transfer_funds_to_connected_account_and_payout/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1suts9e/transfer_funds_to_connected_account_and_payout/",
      "author": "/u/Striking_Weird_8540",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "i&#39;ve been building fetchsandbox — you give it an openapi spec and it gives you a working sandbox with state, webhooks, the whole thing. just shipped workflow guides this week. this one walks through stripe connect&#39;s transfer-to-payout flow step by step — you can run each call, see the response, and the IDs carry forward automatically. video: https://youtu.be/5ZyqipLW17Q try it live: https://fetchsandbox.com/docs/stripe?page=workflow-connect-transfer-payout&amp;flow_run_id=run_a1eff98d-be61-4d27-a1bf-71ab0b859234 &#32; submitted by &#32; /u/Striking_Weird_8540 [link] &#32; [comments]",
      "published": "2026-04-24T22:07:04+00:00"
    },
    {
      "title": "A simpler version of coolify for JS backend",
      "url": "https://www.reddit.com/r/webdev/comments/1sukbv9/a_simpler_version_of_coolify_for_js_backend/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sukbv9/a_simpler_version_of_coolify_for_js_backend/",
      "author": "/u/originalfaskforce",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey ya&#39;ll! I built my own simple version of coolify for deploying my Javascript APIs to my VPS. It&#39;s still a work in progress but i would love your feedback. Check it out here . It&#39;s free! &#32; submitted by &#32; /u/originalfaskforce [link] &#32; [comments]",
      "published": "2026-04-24T16:16:39+00:00"
    },
    {
      "title": "How React streams UI out of order and still manages to keep order",
      "url": "https://inside-react.vercel.app/blog/how-react-streams-ui-out-of-order",
      "permalink": "https://www.reddit.com/r/webdev/comments/1suen84/how_react_streams_ui_out_of_order_and_still/",
      "author": "/u/Ok-Programmer6763",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Ok-Programmer6763 [link] &#32; [comments]",
      "published": "2026-04-24T12:42:31+00:00"
    },
    {
      "title": "How much of your salary goes to petrol? I built a free tool to find out",
      "url": "https://www.reddit.com/r/webdev/comments/1sv3qil/how_much_of_your_salary_goes_to_petrol_i_built_a/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sv3qil/how_much_of_your_salary_goes_to_petrol_i_built_a/",
      "author": "/u/ghostofkalappurakkal",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Fuel prices are rising, but I realized most people don’t actually know how much they spend on petrol every month. So I built a simple tool that: - Calculates daily, monthly, yearly fuel cost - Shows how much % of your income goes into fuel - Gives a basic idea of how price changes affect you Would love feedback from you guys 🙌 https://fuel-impact.vercel.app/ &#32; submitted by &#32; /u/ghostofkalappurakkal [link] &#32; [comments]",
      "published": "2026-04-25T05:51:36+00:00"
    },
    {
      "title": "Struggling to improve with UI design",
      "url": "https://www.reddit.com/r/webdev/comments/1suzgo3/struggling_to_improve_with_ui_design/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1suzgo3/struggling_to_improve_with_ui_design/",
      "author": "/u/PracticeEssay",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;m having trouble improving my ability to design good UIs. I&#39;ve been doing web dev for years and can program sites easily enough when given a screenshot of a design. But working on my own projects, I just get completely lost. I know what functionality I need and what data I need to show, I just struggle knowing the best way to convey it. I&#39;ve spent hours in Figma tossing up different designs and just get lost. I&#39;m working on a V2 for a sports club management site. I&#39;ve tried tools like Google Stitch and Figma Make to get some inspiration but they all come out useless. I don&#39;t really know where to go from here. I don&#39;t have any budget to hire a UI designer as this is a hobby project. Does anyone have advice? &#32; submitted by &#32; /u/PracticeEssay [link] &#32; [comments]",
      "published": "2026-04-25T02:19:51+00:00"
    },
    {
      "title": "documentation cli for js",
      "url": "https://www.reddit.com/r/webdev/comments/1sumpzj/documentation_cli_for_js/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sumpzj/documentation_cli_for_js/",
      "author": "/u/Ok-Delivery307",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;ve developed a small command-line tool that provides quick access to built-in functions, similar to “go doc” but less powerful. You can use it to ask your AI to check a function&#39;s definition, or do it yourself. available on npm : &quot;@esrid/js-ref&quot; &#32; submitted by &#32; /u/Ok-Delivery307 [link] &#32; [comments]",
      "published": "2026-04-24T17:42:36+00:00"
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
      "forks": 2669,
      "added_stars": 7100,
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
      "forks": 6045,
      "added_stars": 6127,
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
      "forks": 245,
      "added_stars": 1434,
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
      "forks": 498,
      "added_stars": 1148,
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
      "added_stars": 728,
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
      "added_stars": 1338,
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
      "forks": 3899,
      "added_stars": 1477,
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
      "added_stars": 1178,
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
      "forks": 5249,
      "added_stars": 1718,
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
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3056,
      "added_stars": 1583,
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
      "author": "masterking32",
      "repo": "MasterDnsVPN",
      "avatar": "https://github.com/masterking32.png",
      "repo_link": "https://github.com/masterking32/MasterDnsVPN",
      "desc": "Advanced DNS tunneling VPN for censorship bypass, optimized beyond DNSTT and SlipStream with low-overhead ARQ, resolver load balancing, high packet-loss stability and speed.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 80,
      "added_stars": 730,
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
      "forks": 1291,
      "added_stars": 199,
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
      "author": "mudler",
      "repo": "LocalAI",
      "avatar": "https://github.com/mudler.png",
      "repo_link": "https://github.com/mudler/LocalAI",
      "desc": "LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4014,
      "added_stars": 1620,
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
      "author": "versity",
      "repo": "versitygw",
      "avatar": "https://github.com/versity.png",
      "repo_link": "https://github.com/versity/versitygw",
      "desc": "A simple to deploy but feature rich S3 object storage server for your filesystem",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 243,
      "added_stars": 889,
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
      "author": "syncthing",
      "repo": "syncthing",
      "avatar": "https://github.com/syncthing.png",
      "repo_link": "https://github.com/syncthing/syncthing",
      "desc": "Open Source Continuous File Synchronization",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5115,
      "added_stars": 2100,
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
      "forks": 840,
      "added_stars": 274,
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
      "author": "gophish",
      "repo": "gophish",
      "avatar": "https://github.com/gophish.png",
      "repo_link": "https://github.com/gophish/gophish",
      "desc": "Open-Source Phishing Toolkit",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2874,
      "added_stars": 135,
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
      "forks": 16992,
      "added_stars": 103029,
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
      "forks": 3524,
      "added_stars": 27573,
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
          "username": "wjhrdy",
          "href": "https://github.com/wjhrdy",
          "avatar": "https://avatars.githubusercontent.com/u/1795778"
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
      "forks": 3783,
      "added_stars": 9929,
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "\"DeepTutor: Agent-Native Personalized Learning Assistant\"",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2887,
      "added_stars": 10610,
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
      "author": "Fincept-Corporation",
      "repo": "FinceptTerminal",
      "avatar": "https://github.com/Fincept-Corporation.png",
      "repo_link": "https://github.com/Fincept-Corporation/FinceptTerminal",
      "desc": "FinceptTerminal is a modern finance application offering advanced market analytics, investment research, and economic data tools, designed for interactive exploration and data-driven decision-making in a user-friendly environment.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1954,
      "added_stars": 11430,
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
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4730,
      "added_stars": 17233,
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
      "forks": 7642,
      "added_stars": 24833,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1810,
      "added_stars": 8432,
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
      "forks": 882,
      "added_stars": 5021,
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
      "forks": 3781,
      "added_stars": 10498,
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
      "author": "lsdefine",
      "repo": "GenericAgent",
      "avatar": "https://github.com/lsdefine.png",
      "repo_link": "https://github.com/lsdefine/GenericAgent",
      "desc": "Self-evolving agent: grows skill tree from 3.3K-line seed, achieving full system control with 6x less token consumption",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 779,
      "added_stars": 6027,
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
      "author": "hacksider",
      "repo": "Deep-Live-Cam",
      "avatar": "https://github.com/hacksider.png",
      "repo_link": "https://github.com/hacksider/Deep-Live-Cam",
      "desc": "real time face swap and one-click video deepfake with only a single image",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13399,
      "added_stars": 12308,
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
      "forks": 803,
      "added_stars": 3542,
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
      "author": "mvanhorn",
      "repo": "last30days-skill",
      "avatar": "https://github.com/mvanhorn.png",
      "repo_link": "https://github.com/mvanhorn/last30days-skill",
      "desc": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1976,
      "added_stars": 19056,
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
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9980,
      "added_stars": 7984,
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
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use claude-code for free in the terminal, VSCode extension or via discord like openclaw",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1438,
      "added_stars": 6026,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "232+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1672,
      "added_stars": 6000,
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
      "forks": 327,
      "added_stars": 1877,
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
      "forks": 9532,
      "added_stars": 8078,
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
      "author": "AIDC-AI",
      "repo": "Pixelle-Video",
      "avatar": "https://github.com/AIDC-AI.png",
      "repo_link": "https://github.com/AIDC-AI/Pixelle-Video",
      "desc": "🚀 AI 全自动短视频引擎 | AI Fully Automated Short Video Engine",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1051,
      "added_stars": 3360,
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
      "reactions": 23,
      "comments": 34,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "The Vonage Dev Discussion: Making mistakes",
      "description": "Nobody is perfect! Even the most seasoned developers have made mistakes – it’s all just part of the...",
      "url": "https://dev.to/vonagedev/the-vonage-dev-discussion-making-mistakes-32mc",
      "tags": "security, discuss, python",
      "reactions": 7,
      "comments": 4,
      "reading_time": 1,
      "author": "lizzzzz"
    },
    {
      "title": "Why LLM Reasoning Is Breaking AI Infrastructure (And How to Fix It)",
      "description": "If you've tried building anything serious on top of large language models (LLMs) recently, you've...",
      "url": "https://dev.to/backboardio/why-llm-reasoning-is-breaking-ai-infrastructure-and-how-to-fix-it-2aik",
      "tags": "ai, webdev, programming, machinelearning",
      "reactions": 7,
      "comments": 1,
      "reading_time": 3,
      "author": "jon_at_backboardio"
    },
    {
      "title": "The Hidden Challenge of Multi-LLM Context Management",
      "description": "Why token counting isn't a solved problem when building across providers   Building AI...",
      "url": "https://dev.to/backboardio/the-hidden-challenge-of-multi-llm-context-management-1pbh",
      "tags": "ai, webdev, programming, llm",
      "reactions": 6,
      "comments": 0,
      "reading_time": 2,
      "author": "jon_at_backboardio"
    },
    {
      "title": "I'm Running Gemini as an Autonomous Coding Agent. Here's What It Can't Do and Which NEXT '26 Announcements Would Fix It.",
      "description": "This is a submission for the Google Cloud NEXT Writing Challenge  I'm running something called The...",
      "url": "https://dev.to/ai_made_tools/im-running-gemini-as-an-autonomous-coding-agent-heres-what-it-cant-do-and-which-next-26-6p2",
      "tags": "devchallenge, cloudnextchallenge, googlecloud",
      "reactions": 6,
      "comments": 5,
      "reading_time": 7,
      "author": "ai_made_tools"
    },
    {
      "title": "A Stitch at a time",
      "description": "Every UI idea starts the same way. A sentence. A sketch. A screenshot of something you saw and...",
      "url": "https://dev.to/gde/a-stitch-at-a-time-j20",
      "tags": "ui, design, ai",
      "reactions": 8,
      "comments": 1,
      "reading_time": 6,
      "author": "apinke"
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
      "title": "A Map for the First-Time Software Creator",
      "description": "TL;DR — Five stages turn a first-time software creator's idea into a deployed product:...",
      "url": "https://dev.to/mlh/a-map-for-the-first-time-software-creator-3d8f",
      "tags": "beginners, webdev, ai, nocode",
      "reactions": 12,
      "comments": 2,
      "reading_time": 10,
      "author": "mlhacks"
    },
    {
      "title": "Congrats to the April Fools Challenge Winners!!",
      "description": "We asked you to build something completely useless and you delivered.   The DEV April Fools Challenge...",
      "url": "https://dev.to/devteam/congrats-to-the-april-fools-challenge-winners-l8f",
      "tags": "devchallenge, 418challenge, jokes",
      "reactions": 40,
      "comments": 13,
      "reading_time": 2,
      "author": "jess"
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
      "title": "Do I belong in tech anymore?",
      "url": "https://ky.fyi/posts/ai-burnout",
      "score": 13,
      "comments": 3,
      "tags": [
        "vibecoding"
      ],
      "id": "xgtyyu"
    },
    {
      "title": "Annotated source code for the Elite Demonstration Disc",
      "url": "https://elite.bbcelite.com/demo/",
      "score": 2,
      "comments": 0,
      "tags": [
        "historical",
        "retrocomputing",
        "reversing"
      ],
      "id": "s795p7"
    },
    {
      "title": "Automatic brightness in Plasma",
      "url": "https://zamundaaa.github.io/wayland,display/2026/04/24/automatic-brightness.html",
      "score": 3,
      "comments": 1,
      "tags": [
        "hardware",
        "linux"
      ],
      "id": "ivdh3a"
    },
    {
      "title": "The Aging Programmer (2024)",
      "url": "https://www.youtube.com/watch?v=hs8EGgoJpdQ&list=PLsAtvvJ8KXBT-Tx67H5P3TgkiW6llnoBE&index=3",
      "score": 2,
      "comments": 1,
      "tags": [
        "a11y",
        "practices",
        "video"
      ],
      "id": "gdlaj1"
    },
    {
      "title": "The people do not yearn for automation",
      "url": "https://www.theverge.com/podcast/917029/software-brain-ai-backlash-databases-automation",
      "score": 37,
      "comments": 7,
      "tags": [
        "vibecoding"
      ],
      "id": "gp02rx"
    },
    {
      "title": "Introducing mine, a Coalton and Common Lisp IDE",
      "url": "https://coalton-lang.github.io/20260424-mine/",
      "score": 18,
      "comments": 1,
      "tags": [
        "editors",
        "lisp"
      ],
      "id": "hk4nsp"
    },
    {
      "title": "Turning Git commits into changelog with Git-Cliff - YouTube",
      "url": "https://www.youtube.com/watch?v=RWh8qbiLRts",
      "score": 5,
      "comments": 4,
      "tags": [
        "rust",
        "vcs",
        "video"
      ],
      "id": "7va7at"
    },
    {
      "title": "On Software Quality",
      "url": "https://peteshima.com/2026/04/01/on-software-quality/",
      "score": 2,
      "comments": 0,
      "tags": [
        "devops",
        "distributed",
        "practices"
      ],
      "id": "fevnlo"
    },
    {
      "title": "Gleam gets source maps, 1.16.0",
      "url": "https://gleam.run/news/javascript-source-maps/",
      "score": 30,
      "comments": 6,
      "tags": [
        "gleam"
      ],
      "id": "ckacgl"
    },
    {
      "title": "Cloudflare Email Service is a deliverability bet dressed as an agents launch",
      "url": "https://lord.technology/2026/04/20/cloudflare-email-service-is-a-deliverability-bet-dressed-as-an-agents-launch.html",
      "score": 6,
      "comments": 5,
      "tags": [
        "email"
      ],
      "id": "ytzaui"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "elffjs",
      "descendants": 500,
      "id": 47892074,
      "kids": [
        47895009,
        47896920,
        47895553,
        47899241,
        47895574,
        47899283,
        47896481,
        47895497,
        47895842,
        47896207,
        47898048,
        47895401,
        47895674,
        47895706,
        47894489,
        47894990,
        47898748,
        47895799,
        47895814,
        47898130,
        47896994,
        47898512,
        47897632,
        47894965,
        47896301,
        47895650,
        47898241,
        47897923,
        47894592,
        47895802,
        47897510,
        47895750,
        47896817,
        47897471,
        47895844,
        47896588,
        47892713,
        47895381,
        47895654,
        47895683,
        47895548,
        47898057,
        47897490,
        47897796,
        47895244,
        47897607,
        47897749,
        47895870,
        47895792,
        47898132,
        47898751,
        47894650,
        47896545,
        47896982,
        47895677
      ],
      "score": 505,
      "time": 1777046681,
      "title": "Google plans to invest up to $40B in Anthropic",
      "type": "story",
      "url": "https://www.bloomberg.com/news/articles/2026-04-24/google-plans-to-invest-up-to-40-billion-in-anthropic"
    },
    {
      "by": "Ariarule",
      "descendants": 22,
      "id": 47858939,
      "kids": [
        47898091,
        47898380,
        47898572,
        47898090,
        47898298,
        47899033,
        47898123
      ],
      "score": 136,
      "time": 1776831427,
      "title": "Paraloid B-72",
      "type": "story",
      "url": "https://en.wikipedia.org/wiki/Paraloid_B-72"
    },
    {
      "by": "arkadiuss",
      "descendants": 3,
      "id": 47862541,
      "kids": [
        47898926,
        47899130,
        47899124
      ],
      "score": 22,
      "time": 1776860401,
      "title": "A 3D Body from Eight Questions – No Photo, No GPU",
      "type": "story",
      "url": "https://clad.you/blog/posts/questionnaire-mlp/"
    },
    {
      "by": "andsoitis",
      "descendants": 11,
      "id": 47898597,
      "kids": [
        47899131,
        47899160,
        47898872,
        47899193,
        47898784,
        47899267,
        47899153,
        47898856
      ],
      "score": 76,
      "time": 1777090681,
      "title": "Turbo Vision 2.0 – a modern port",
      "type": "story",
      "url": "https://github.com/magiblot/tvision"
    },
    {
      "by": "andsoitis",
      "descendants": 32,
      "id": 47858294,
      "kids": [
        47899273,
        47898266,
        47897844,
        47898171,
        47897985,
        47898508,
        47898200,
        47898014
      ],
      "score": 79,
      "time": 1776826549,
      "title": "Humpback whales are forming super-groups",
      "type": "story",
      "url": "https://www.bbc.com/future/article/20260416-the-humpback-super-groups-swarming-the-seas"
    },
    {
      "by": "pigeons",
      "descendants": 15,
      "id": 47897647,
      "kids": [
        47898716,
        47897648,
        47898360,
        47898882,
        47898599,
        47898484
      ],
      "score": 112,
      "time": 1777078718,
      "title": "Replace IBM Quantum back end with /dev/urandom",
      "type": "story",
      "url": "https://github.com/yuvadm/quantumslop/blob/25ad2e76ae58baa96f6219742459407db9dd17f5/URANDOM_DEMO.md"
    },
    {
      "by": "hhh",
      "descendants": 72,
      "id": 47894747,
      "kids": [
        47895644,
        47898729,
        47895199,
        47897898,
        47896110,
        47898147,
        47898566,
        47896089,
        47895588,
        47895214,
        47898745,
        47895287
      ],
      "score": 214,
      "time": 1777059046,
      "title": "My audio interface has SSH enabled by default",
      "type": "story",
      "url": "https://hhh.hn/rodecaster-duo-fw/"
    },
    {
      "by": "rbanffy",
      "descendants": 5,
      "id": 47897681,
      "kids": [
        47898522,
        47898799,
        47898701,
        47898490,
        47898658,
        47898332,
        47898177
      ],
      "score": 58,
      "time": 1777078989,
      "title": "\"Plain text has been around for decades and it's here to stay.\" – Unsung",
      "type": "story",
      "url": "https://unsung.aresluna.org/plain-text-has-been-around-for-decades-and-its-here-to-stay/"
    },
    {
      "by": "alcazar",
      "descendants": 105,
      "id": 47890799,
      "kids": [
        47891121,
        47892218,
        47892089,
        47891348,
        47893033,
        47897460,
        47897764,
        47898825,
        47893239,
        47898723,
        47890900,
        47897606,
        47891682,
        47892314,
        47891380,
        47894379,
        47896145,
        47892678,
        47891476,
        47894306,
        47891119,
        47893873,
        47891844,
        47891233,
        47893601,
        47891821,
        47897497,
        47892216,
        47891870,
        47892038,
        47897576,
        47897967,
        47892993,
        47893659,
        47893107,
        47892981,
        47898030,
        47898033,
        47897344,
        47891358,
        47891826
      ],
      "score": 403,
      "time": 1777040932,
      "title": "Sabotaging projects by overthinking, scope creep, and structural diffing",
      "type": "story",
      "url": "https://kevinlynagh.com/newsletter/2026_04_overthinking/"
    },
    {
      "by": "wise_blood",
      "descendants": 45,
      "id": 47864056,
      "kids": [
        47896309,
        47897118,
        47896440,
        47898579,
        47897252,
        47896976,
        47896972
      ],
      "score": 158,
      "time": 1776867515,
      "title": "Iliad fragment found in Roman-era mummy",
      "type": "story",
      "url": "https://www.thehistoryblog.com/archives/75877"
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
      "title": "raylib v6.0",
      "url": "https://github.com/raysan5/raylib/releases/tag/6.0",
      "permalink": "https://www.reddit.com/r/programming/comments/1sudrm3/raylib_v60/",
      "author": "/u/SupersonicSpitfire",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/SupersonicSpitfire [link] &#32; [comments]",
      "published": "2026-04-24T12:03:59+00:00"
    },
    {
      "title": "My audio interface has ssh enabled by default",
      "url": "https://hhh.hn/rodecaster-duo-fw/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sutiw3/my_audio_interface_has_ssh_enabled_by_default/",
      "author": "/u/BlondieCoder",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/BlondieCoder [link] &#32; [comments]",
      "published": "2026-04-24T21:56:46+00:00"
    },
    {
      "title": "Clock Synchronization Is a Nightmare",
      "url": "https://arpitbhayani.me/blogs/clock-sync-nightmare/",
      "permalink": "https://www.reddit.com/r/programming/comments/1suc1ds/clock_synchronization_is_a_nightmare/",
      "author": "/u/fagnerbrack",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/fagnerbrack [link] &#32; [comments]",
      "published": "2026-04-24T10:39:20+00:00"
    },
    {
      "title": "On sabotaging projects by overthinking",
      "url": "https://kevinlynagh.com/newsletter/2026_04_overthinking/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sumkeu/on_sabotaging_projects_by_overthinking/",
      "author": "/u/SpecialistLady",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/SpecialistLady [link] &#32; [comments]",
      "published": "2026-04-24T17:37:10+00:00"
    },
    {
      "title": "Hunting a Windows ARM crash through Rust, C, and a Build-System configurations",
      "url": "https://medium.com/@autoexplore/hunting-a-windows-arm-crash-through-rust-c-and-a-build-system-configurations-f768dd66d5c5",
      "permalink": "https://www.reddit.com/r/programming/comments/1sucv4e/hunting_a_windows_arm_crash_through_rust_c_and_a/",
      "author": "/u/Havunenreddit",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Havunenreddit [link] &#32; [comments]",
      "published": "2026-04-24T11:20:59+00:00"
    },
    {
      "title": "Modern LZ Compression Part 2: FSE and Arithmetic Coding",
      "url": "https://glinscott.github.io/lz/part2.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1suioko/modern_lz_compression_part_2_fse_and_arithmetic/",
      "author": "/u/glinscott",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "This is the second article in a series discussing modern compression techniques. The first one covered Huffman + LZ. This one covers optimal entropy coders (FSE and Arithmetic), and some additional tricks to get closer to the state of the art. The full compressor and decompressor are just over 1500 lines of pretty compact C++: https://github.com/glinscott/linzip2/blob/master/main.cc . It&#39;s been seven years since the first article! Hopefully not so long before the third (and probably final one). Part 1 discussion thread: https://www.reddit.com/r/programming/comments/amfzqg/modern_lz_compression/ &#32; submitted by &#32; /u/glinscott [link] &#32; [comments]",
      "published": "2026-04-24T15:17:39+00:00"
    },
    {
      "title": "A Dab of DuckDB",
      "url": "https://peterdohertys.website/blog-posts/dab-of-duck.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1suye8n/a_dab_of_duckdb/",
      "author": "/u/pdoherty926",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/pdoherty926 [link] &#32; [comments]",
      "published": "2026-04-25T01:29:41+00:00"
    },
    {
      "title": "GitHub Status - Incident with Pull Requests",
      "url": "https://www.githubstatus.com/incidents/zsg1lk7w13cf",
      "permalink": "https://www.reddit.com/r/programming/comments/1suzrdx/github_status_incident_with_pull_requests/",
      "author": "/u/Successful_Bowl2564",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Successful_Bowl2564 [link] &#32; [comments]",
      "published": "2026-04-25T02:33:36+00:00"
    },
    {
      "title": "Engineering Health Essentials",
      "url": "https://yusufaytas.com/engineering-health-essentials",
      "permalink": "https://www.reddit.com/r/programming/comments/1sumrk1/engineering_health_essentials/",
      "author": "/u/BlondieCoder",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/BlondieCoder [link] &#32; [comments]",
      "published": "2026-04-24T17:44:16+00:00"
    },
    {
      "title": "How the Lobsters front page works - nilenso blog",
      "url": "https://blog.nilenso.com/blog/2026/01/20/lobsters-front-page/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sutymi/how_the_lobsters_front_page_works_nilenso_blog/",
      "author": "/u/fagnerbrack",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/fagnerbrack [link] &#32; [comments]",
      "published": "2026-04-24T22:14:00+00:00"
    },
    {
      "title": "How I Built an Automated JS/TS Repository Analyzer for the Silverfish IDP",
      "url": "https://dashboard.silverfishsoftware.com/documentation",
      "permalink": "https://www.reddit.com/r/programming/comments/1suhkea/how_i_built_an_automated_jsts_repository_analyzer/",
      "author": "/u/DavidArno",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "TL;DR I built the JavaScript/TypeScript analysis engine for the Silverfish IDP, an Internal Developer Portal that automatically detects packaging tools, identifies component types, and extracts complete dependency graphs from repos. It handles monorepos, multiple lock file formats, and mixed JS/TS codebases—all whilst minimising assumptions about the expected repo structure. The Problem The aim of the Silverfish IDP is to help individual developers and engineering teams understand their entire codebase. But when you have hundreds of repositories spanning multiple languages, frameworks, and tools, how do you automatically make sense of it all? For JavaScript and TypeScript repos specifically, the challenge is significant: every repo is different. Some use Yarn, others npm or pnpm. Some have monorepos with nested package.json files. Some mix JavaScript and TypeScript. Some have multiple lock files checked in (a real mess). And some don&#39;t have lock files at all. I needed an analyzer that could handle all these cases automatically with no manual configuration, no &quot;please tell us which package manager you use&quot; questions. Just point it at a repo and get back structured metadata about components, dependencies, and versions. Step 1: Detect the Packaging Tool The naive approach: Check if yarn.lock exists → use Yarn. Check if package-lock.json exists → use npm. Reality is messier: // Priority order matters 1. Check packageManager field in package.json (&quot;yarn@4.1.0&quot;) 2. Look for lock files (yarn.lock, pnpm-lock.yaml, package-lock.json, bun.lock) 3. Check config files (.yarnrc.yml, pnpm-workspace.yaml) 4. Default to npm The packageManager field was the key insight—it&#39;s set by corepack and is the source of truth. If it says Yarn, it&#39;s Yarn, even if npm somehow created a lock file too. I also had to handle conflicts: I found real repos with both yarn.lock and package-lock.json checked in. My solution? Detect all of them, report the conflict, and parse only the highest-priority one. C# public static async Task&lt;PackagingToolDetectionResult&gt; DetectAsync( IReadOnlyCollection&lt;string&gt; repoPaths, Func&lt;string, Task&lt;string?&gt;&gt; readFileContentAsync) { // 1. Check packageManager field first var fromPackageManager = await TryDetectFromPackageManagerFieldAsync(...); if (fromPackageManager is not null) return fromPackageManager; // 2. Check lock files var fromLockFile = TryDetectFromLockFiles(...); if (fromLockFile is not null) return ...; // 3. Check config files var fromConfigFile = TryDetectFromConfigFiles(...); if (fromConfigFile is not null) return ...; // 4. Default to npm return new(PackagingTool.Npm, true); } Result: (PackagingTool.Yarn, LockFileNeedsGenerating: false) or similar. Step 2: Identify Components and Their Type Each package.json is a component. But what kind? And what does it do? I classified each one into: Package (capable of being published to npm), Library (internal or private), and determined usage: Frontend, Backend, Fullstack, or Unknown. The key was looking at dependencies: C# static readonly HashSet&lt;string&gt; FrontendSignals = new() { &quot;react&quot;, &quot;vue&quot;, &quot;@angular/core&quot;, &quot;svelte&quot;, &quot;react-router&quot;, &quot;redux&quot;, ... }; static readonly HashSet&lt;string&gt; BackendSignals = new() { &quot;express&quot;, &quot;koa&quot;, &quot;mongoose&quot;, &quot;pg&quot;, &quot;apollo-server&quot;, &quot;prisma&quot;, ... }; // If a package depends on react + express = fullstack // If only react = frontend // If only express = backend I also extracted language info: C# // Pure JS? Check for no TypeScript signals // TypeScript? Look for typescript pkg + /* // Mixed? Has flow-bin + typescript OR tsconfig.json&#39;s allowJs = true And pulled in version constraints: C# // Node version: from engines.node in package.json or .nvmrc file // TS version: from devDependencies // ECMAScript target: from tsconfig.json compilerOptions Result: A JsComponent record with all metadata attached—used by Silverfish&#39;s dashboard to display component details instantly. Step 3: Parse Lock Files (The Hard Part) This was the gnarly part. Four different formats, each with quirks. Yarn Lock (v1 Classic) Looks like TOML with nested dependency lists: Code &quot;@pkgjs/parseargs@^0.11.0&quot;: version &quot;0.11.0&quot; resolved &quot;https://registry.npmjs.org/...&quot; dependencies: package-json &quot;^6.0.0&quot; I wrote a line-by-line parser. The trick: track indentation to know when you&#39;re inside a package block vs. dependency list. npm package-lock.json Flat JSON structure (v2/v3): JSON { &quot;packages&quot;: { &quot;node_modules/lodash&quot;: { &quot;version&quot;: &quot;4.17.21&quot;, &quot;dependencies&quot;: { ... } } } } Easier to parse with JsonDocument, but the key names have node_modules/ prefixes that need stripping. pnpm-lock.yaml YAML with name@version keys: YAML packages: /lodash/4.17.21: version: 4.17.21 dependencies: react: 18.2.0 I treated this as mostly line-based text parsing since I didn&#39;t want to add a full YAML dependency. Works for the common cases. Bun Lock JSONC format with array-based entries. Least common, so I parse it but mark binary bun.lockb files as unparseable. Step 4: Resolve Dependencies Once I had a parsed lock file, I needed to extract: Local dependencies (internal workspace packages like u/company/shared) Direct dependencies (what&#39;s explicitly in package.json) Transitive dependencies (what your dependencies need) C# // Read package.json dependencies var directRanges = ReadDirectDependencyRanges(packageJsonContent); // For each direct dep, look it up in the lock file foreach (var (name, range) in directRanges) { var pkg = Resolve(name, range, parsedLock); if (pkg != null) { // It&#39;s resolved to version X.Y.Z direct.Add(new ResolvedDependency(pkg.Name, pkg.Version, range)); // Queue it to traverse its dependencies queue.Enqueue(pkg); } } // Depth-first traversal to collect transitives while (queue.TryDequeue(out var pkg)) { foreach (var (depName, depRange) in pkg.DependencyRanges) { var dep = Resolve(depName, depRange, parsedLock); if (dep != null &amp;&amp; !visited.Contains($&quot;{dep.Name}@{dep.Version}&quot;)) { transitive.Add(...); queue.Enqueue(dep); } } } Result: Three lists of ResolvedDependency objects with exact versions and requested ranges. Silverfish uses this to build the full dependency graph in its UI. Step 5: Handle Monorepos Monorepos have multiple package.json files. The key insight: walk up the directory tree to find the root lock file. C# static IEnumerable&lt;string&gt; AncestorDirs(string dir) { var current = dir; while (true) { yield return current; if (string.IsNullOrEmpty(current)) break; current = Path.GetDirectoryName(current); } } So packages/web/package.json in an entria-style monorepo correctly finds the root yarn.lock instead of failing. Each workspace member gets its own component record in Silverfish. How the Silverfish IDP Uses This Once the analyzer extracts all this metadata, it: Maps dependencies visually — showing which components depend on what Flags version mismatches — when different packages pin different versions of the same library Detects tech stacks — knowing which services are frontend, which are backend, which databases they use Tracks upgrades — identifying outdated packages and planning coordinated updates Enables governance — enforcing policies like &quot;no direct jquery dependencies&quot; or &quot;all frontends must use React 18+&quot; Lessons Learned Abstraction beats assumptions: I wrote the whole thing to accept Func&lt;string, Task&lt;string?&gt;&gt; readFileContentAsync instead of directly reading files. This made it testable and backend-agnostic (GitHub API, filesystem, cache, whatever). Format-specific parsing is worth it: I could have given up on Yarn/pnpm/Bun and only parsed npm lock files. But each format&#39;s parser is ~100-150 lines and handles real repos that exist in the wild. Conflicts are data, not errors: Instead of failing when I find multiple lock files, I report them. That&#39;s valuable information (&quot;why do you have both yarn.lock and package-lock.json?&quot;). Monorepos are normal: Walking ancestor directories for lock files + detecting internal workspace packages turned out to be essential, not an edge case. Version constraints matter: Storing both the requested range (^1.2.3) and resolved version (1.2.5) proved useful—you can detect upgradeable deps without breaking changes. What&#39;s Next The JS/TS analyzer is one piece of Silverfish&#39;s language support. It already has support for .NET languages and Ruby. I&#39;ll be building similar analyzers for Python, Go, Java, and other ecosystems. The pattern is the same: detect the package manager, identify components, resolve dependencies, extract versions. If you&#39;re trying to understand complex multi-language codebases at scale, this approach should help. The code is C# 14 with only standard library dependencies—no bloat. &#32; submitted by &#32; /u/DavidArno [link] &#32; [comments]",
      "published": "2026-04-24T14:37:23+00:00"
    },
    {
      "title": "The Contract Your Test Didn’t Mean to Sign",
      "url": "https://www.abelenekes.com/p/the-contract-your-test-didn-t-mean-to-sign",
      "permalink": "https://www.reddit.com/r/programming/comments/1sugrij/the_contract_your_test_didnt_mean_to_sign/",
      "author": "/u/TranslatorRude4917",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "A while ago I posted about the gap between what e2e tests appear to prove and what they actually check. The discussion around that made me think more about the part I may not have understood well enough: tests do not just check software. They write contracts for what the system must continue to preserve. And sometimes, without noticing, they write a bigger contract than the promise needed. A clean test can still make the wrong commitment, if it ties the system to a surface that changes faster than the behavior it was meant to protect. It will still become brittle. That is the contract your test did not mean to sign. Small example: promise: a business party can be created contract actually encoded in a UIbasede2e test: PartyList -&gt; click &quot;Add party button&quot; -&gt; PartyModal -&gt; click &quot;Business tab&quot; -&gt; Fill &quot;party name&quot; with &quot;Acme Inc.&quot; -&gt; click &quot;submit&quot; -&gt; new party row with &quot;Acme Inc.&quot; appears Same promise space, UI-agonistic contract: parties -&gt; addBusiness &#39;Acme Inc.&#39; parties -&gt; get &#39;Acme Inc.&#39; -&gt; exists Neither version is universally better. They just commit the system to different things. The problem starts when the test claims to protect one promise, but quietly depends on a surface that changes for different reasons. That is where a lot of hidden brittleness enters test suites. Once the promise and the contract move at the same pace, the whole suite gets easier to reason about: a UI contract changes when UI behavior changes an application contract changes when the capability changes mechanical failures are easier to locate it becomes clearer when a lower-level check creates more churn than the promise is worth and if a test is truly UI-scope, it is worth asking whether e2e is the right place for it, or whether a smaller UI/component test would give faster, more focused feedback. I wrote the longer version in the linked blog post if you find this discussion interesting. Appreciate any feedback, and happy to partake in discussions! :) &#32; submitted by &#32; /u/TranslatorRude4917 [link] &#32; [comments]",
      "published": "2026-04-24T14:06:37+00:00"
    },
    {
      "title": "EuroTcl/OpenACS conference, Vienna, 16-17 July 2026",
      "url": "https://openacs.km.at/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sub80g/eurotclopenacs_conference_vienna_1617_july_2026/",
      "author": "/u/CGM",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/CGM [link] &#32; [comments]",
      "published": "2026-04-24T09:55:36+00:00"
    },
    {
      "title": "The Complicated Nature of Programming Languages",
      "url": "https://functiondispatch.substack.com/p/the-complicated-nature-of-programming",
      "permalink": "https://www.reddit.com/r/programming/comments/1suo0yr/the_complicated_nature_of_programming_languages/",
      "author": "/u/techne98",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/techne98 [link] &#32; [comments]",
      "published": "2026-04-24T18:29:34+00:00"
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
      "title": "I Used to Love Coding. Now I Just Prompt.",
      "description": "Last weekend, I opened my laptop.  No deadline. No client. No pressure. Just me, my keyboard, and a...",
      "url": "https://dev.to/harsh2644/i-used-to-love-coding-now-i-just-prompt-550l",
      "tags": "ai, career, discuss, productivity",
      "reactions": 45,
      "comments": 29,
      "reading_time": 5,
      "author": "harsh2644"
    },
    {
      "title": "If You Were in Your Early 20s Again… What Would You Do Differently?",
      "description": "Lately, I’ve been thinking about something that’s probably on a lot of our minds—especially with how...",
      "url": "https://dev.to/nish2005karsh/if-you-were-in-your-early-20s-again-what-would-you-do-differently-5402",
      "tags": "beginners, career, discuss, watercooler",
      "reactions": 10,
      "comments": 3,
      "reading_time": 2,
      "author": "nish2005karsh"
    },
    {
      "title": "So, what am I doing after 22 years in tech?",
      "description": "A follow-up to What to do in tech after 20 years?*   Two years ago, I was between a rock and a hard...",
      "url": "https://dev.to/phalkmin/so-what-am-i-doing-after-22-years-in-tech-7ic",
      "tags": "discuss, career, watercooler, help",
      "reactions": 35,
      "comments": 11,
      "reading_time": 7,
      "author": "phalkmin"
    },
    {
      "title": "Vibe coding is producing developers who can't debug. We're going to pay for this.",
      "description": "Hello, I'm Tuan.  I've been doing technical interviews for backend roles recently. The pattern across...",
      "url": "https://dev.to/diata0210/vibe-coding-is-producing-developers-who-cant-debug-were-going-to-pay-for-this-2ifh",
      "tags": "ai, discuss, career, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "diata0210"
    },
    {
      "title": "The daily system I use to balance coding, college, a personal app, and still not burn out",
      "description": "I'm building an app. I'm in my second year of a CS diploma. I'm trying to get better at coding, stay...",
      "url": "https://dev.to/yeeshit_chandekar_b80c1cc/the-daily-system-i-use-to-balance-coding-college-a-personal-app-and-still-not-burn-out-1fm5",
      "tags": "productivity, webdev, beginners, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "yeeshit_chandekar_b80c1cc"
    },
    {
      "title": "The Industry Quietly Killed Junior Developer Jobs",
      "description": "The Path That Used to Exist   A few years ago, the path into tech felt almost predictable....",
      "url": "https://dev.to/pavel_polivka/the-industry-quietly-killed-junior-developer-jobs-5eil",
      "tags": "ai, career, webdev, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "pavel_polivka"
    },
    {
      "title": "I Built a Free Resume ATS Score Checker — Here's What I Learned",
      "description": "Every job seeker has heard the stat: 75% of resumes never reach a human recruiter. They get filtered...",
      "url": "https://dev.to/charliemorrison/i-built-a-free-resume-ats-score-checker-heres-what-i-learned-2ndf",
      "tags": "career, jobsearch, resume, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "charliemorrison"
    },
    {
      "title": "4 Moves to Train Systems Thinking When AI Writes Your Code",
      "description": "How to maintain architectural oversight and mental models when using AI tools like Copilot or ChatGPT.",
      "url": "https://dev.to/semosem_20/4-moves-to-train-systems-thinking-when-ai-writes-your-code-1ja7",
      "tags": "ai, career, architecture, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "semosem_20"
    },
    {
      "title": "We’re Not Being Replaced by AI. We’re Being Asked to Train It.",
      "description": "Meta is installing tracking software on its employees’ work computers.  Not for security. Not for...",
      "url": "https://dev.to/pacheco/were-not-being-replaced-by-ai-were-being-asked-to-train-it-5c82",
      "tags": "ai, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 11,
      "author": "pacheco"
    },
    {
      "title": "Anthropic just admitted Claude Code broke. Here's exactly what happened, what they fixed, and what it means for your workflows.",
      "description": "For the past several weeks, engineers using Claude Code have been filing complaints. Responses felt...",
      "url": "https://dev.to/ajbuilds/anthropic-just-admitted-claude-code-broke-heres-exactly-what-happened-what-they-fixed-and-what-hnm",
      "tags": "ai, aws, cloudcomputing, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "ajbuilds"
    }
  ]
}
```

