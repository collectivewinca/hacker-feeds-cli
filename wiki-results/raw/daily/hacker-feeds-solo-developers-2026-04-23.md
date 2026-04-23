# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-23 06:56:05 UTC

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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5588,
      "added_stars": 8739,
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
      "forks": 2632,
      "added_stars": 4495,
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
      "author": "multica-ai",
      "repo": "multica",
      "avatar": "https://github.com/multica-ai.png",
      "repo_link": "https://github.com/multica-ai/multica",
      "desc": "The open-source managed agents platform. Turn coding agents into real teammates — assign tasks, track progress, compound skills.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2399,
      "added_stars": 6015,
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
      "author": "vercel-labs",
      "repo": "open-agents",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/open-agents",
      "desc": "An open source template for building cloud agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 447,
      "added_stars": 1684,
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
      "author": "sparkjsdev",
      "repo": "spark",
      "avatar": "https://github.com/sparkjsdev.png",
      "repo_link": "https://github.com/sparkjsdev/spark",
      "desc": "✨ An advanced 3D Gaussian Splatting renderer for THREE.js",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 269,
      "added_stars": 426,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output, 98% reduction. 12 platforms",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 641,
      "added_stars": 1704,
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
      "author": "mnfst",
      "repo": "manifest",
      "avatar": "https://github.com/mnfst.png",
      "repo_link": "https://github.com/mnfst/manifest",
      "desc": "Smart Model Routing for Personal AI Agents. Cut Costs up to 70% 🦞👧🦚",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 317,
      "added_stars": 1189,
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
      "author": "open-metadata",
      "repo": "OpenMetadata",
      "avatar": "https://github.com/open-metadata.png",
      "repo_link": "https://github.com/open-metadata/OpenMetadata",
      "desc": "OpenMetadata is a unified metadata platform for data discovery, data observability, and data governance powered by a central metadata repository, in-depth column level lineage, and seamless team collaboration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1996,
      "added_stars": 1200,
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
      "forks": 664,
      "added_stars": 630,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1926,
      "added_stars": 1391,
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
      "author": "resend",
      "repo": "react-email",
      "avatar": "https://github.com/resend.png",
      "repo_link": "https://github.com/resend/react-email",
      "desc": "💌 Build and send emails using React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1012,
      "added_stars": 491,
      "builtBy": [
        {
          "username": "gabrielmfern",
          "href": "https://github.com/gabrielmfern",
          "avatar": "https://avatars.githubusercontent.com/u/88866334"
        },
        {
          "username": "bukinoshita",
          "href": "https://github.com/bukinoshita",
          "avatar": "https://avatars.githubusercontent.com/u/6929565"
        },
        {
          "username": "zenorocha",
          "href": "https://github.com/zenorocha",
          "avatar": "https://avatars.githubusercontent.com/u/398893"
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
      "forks": 3000,
      "added_stars": 1187,
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
      "author": "ChromeDevTools",
      "repo": "chrome-devtools-mcp",
      "avatar": "https://github.com/ChromeDevTools.png",
      "repo_link": "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      "desc": "Chrome DevTools for coding agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2272,
      "added_stars": 1571,
      "builtBy": [
        {
          "username": "OrKoN",
          "href": "https://github.com/OrKoN",
          "avatar": "https://avatars.githubusercontent.com/u/399150"
        },
        {
          "username": "Lightning00Blade",
          "href": "https://github.com/Lightning00Blade",
          "avatar": "https://avatars.githubusercontent.com/u/34244704"
        },
        {
          "username": "browser-automation-bot",
          "href": "https://github.com/browser-automation-bot",
          "avatar": "https://avatars.githubusercontent.com/u/133232582"
        },
        {
          "username": "szuend",
          "href": "https://github.com/szuend",
          "avatar": "https://avatars.githubusercontent.com/u/325588"
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
      "forks": 637,
      "added_stars": 1381,
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
      "author": "calcom",
      "repo": "cal.diy",
      "avatar": "https://github.com/calcom.png",
      "repo_link": "https://github.com/calcom/cal.diy",
      "desc": "Scheduling infrastructure for absolutely everyone.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 12970,
      "added_stars": 755,
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
      "added_stars": 498,
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
      "title": "You'd think AI would kill boilerplates. It's doing the opposite.",
      "url": "https://www.reddit.com/r/webdev/comments/1ssp1tz/youd_think_ai_would_kill_boilerplates_its_doing/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssp1tz/youd_think_ai_would_kill_boilerplates_its_doing/",
      "author": "/u/hottown",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I created/maintain an open-source SaaS boilerplate. It just crossed 14k GitHub stars, which is crazy and unexpected. So I did 40 user interviews and found out some surprising stuff: - Half the people I talked to had never deployed a full-stack app before - They were a mixed bag of career devs, PMs, woodworkers, devOps engs, audio engineers - Even though AI got them 90%, the last 10% was killer (think stripe webhooks, auth edge cases, background jobs, etc) - I launched it in the middle of the vibe coding boom (cursor blowing up, claude code being born, Karpathy coining &quot;vibe coding&quot;) and it still grew like crazy. You&#39;d think that AI could just write the boilerplate code and we wouldn&#39;t need starters, but that doesn&#39;t seem to be the case at all based on what users reported (&quot;things got crazy messy, fast&quot;) It made me realize that the web dev space and its vast realm of options is really difficult, even for someone that works in the tech space. Like, for example, if you start building an app tehre are a million different ways, tools, approaches, etc. you can use. So setting things up from scratch is a kind of a daunting task. And boilerplates and AI end up being pretty complementary. AI handles what you&#39;re building, while the boilerplate handles how it&#39;s built. That&#39;s probably why we kept growing instead of getting replaced. Anyway, it was surprising to me to find this stuff out and it kind of made me realize that AI is unlocking new builders, but that some of the same age old hurdles are still getting in the way at the same time. &#32; submitted by &#32; /u/hottown [link] &#32; [comments]",
      "published": "2026-04-22T15:36:53+00:00"
    },
    {
      "title": "I made tiny pets you can add to your GitHub README",
      "url": "https://i.redd.it/83xwoecarqwg1.gif",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssl313/i_made_tiny_pets_you_can_add_to_your_github_readme/",
      "author": "/u/Ok-Programmer6763",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "original post A while ago, I made web pets that you could add to your website as a component. I’ve now exported all the GIFs so you can use them in your GitHub README as well. Just copy the GIF URL and add it to your README site url: https://webpets-flame.vercel.app/generated &#32; submitted by &#32; /u/Ok-Programmer6763 [link] &#32; [comments]",
      "published": "2026-04-22T13:11:07+00:00"
    },
    {
      "title": "Microsoft Shipped a Broken ASP.NET Patch",
      "url": "https://threatroad.substack.com/p/microsoft-shipped-a-broken-aspnet",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssh8qy/microsoft_shipped_a_broken_aspnet_patch/",
      "author": "/u/Big-Engineering-9365",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Big-Engineering-9365 [link] &#32; [comments]",
      "published": "2026-04-22T10:13:16+00:00"
    },
    {
      "title": "WebTransport is now \"Baseline\" as of March 2026",
      "url": "https://developer.mozilla.org/en-US/docs/Web/API/WebTransport_API",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssu3bs/webtransport_is_now_baseline_as_of_march_2026/",
      "author": "/u/kizerkizer",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Finally, UDP-like networking available in browsers. &#32; submitted by &#32; /u/kizerkizer [link] &#32; [comments]",
      "published": "2026-04-22T18:33:32+00:00"
    },
    {
      "title": "If dotcom domain is not available, is it OK to have a number or a hyphen in the domain name, or should I just get other TLD like .app?",
      "url": "https://www.reddit.com/r/webdev/comments/1ssh8ha/if_dotcom_domain_is_not_available_is_it_ok_to/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssh8ha/if_dotcom_domain_is_not_available_is_it_ok_to/",
      "author": "/u/Armauer",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;m making a website with lots of 3D visualisations and I struggle with deciding which domain would be the best one. Let&#39;s assume it&#39;s about models of cars: www cars-gallery com www carsgallery3d com www carsgallery app For this example, domain that I would prefer is &quot;www carsgallery com&quot; but it&#39;s taken. Which one is the best option in your opinion? The app is a hobby project and I will propably never monetize it, but still it would be nice to have a good enough domain &#32; submitted by &#32; /u/Armauer [link] &#32; [comments]",
      "published": "2026-04-22T10:12:50+00:00"
    },
    {
      "title": "if you gonna charge per seat, normalize adding a billing role user.",
      "url": "https://www.reddit.com/r/webdev/comments/1ssr1ce/if_you_gonna_charge_per_seat_normalize_adding_a/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssr1ce/if_you_gonna_charge_per_seat_normalize_adding_a/",
      "author": "/u/iSpaYco",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I don&#39;t have access to a CC, I have to ping someone every time, thing is, many platforms charge per seat, meaning I would be charged extra for nothing, while they could&#39;ve just had a billing only user that doesn&#39;t get charged. or even worse, I wouldn&#39;t be able to add another user until i pay, but i need to add to pay... &#32; submitted by &#32; /u/iSpaYco [link] &#32; [comments]",
      "published": "2026-04-22T16:47:20+00:00"
    },
    {
      "title": "Convert to avif, downscale, compress: what is the correct order for optimizing an image for the web?",
      "url": "https://www.reddit.com/r/webdev/comments/1ssn3lx/convert_to_avif_downscale_compress_what_is_the/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssn3lx/convert_to_avif_downscale_compress_what_is_the/",
      "author": "/u/Wise_Stick9613",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I have these huge JPEGs, 8-bit, 60mb, 9000x12000: obviously I can&#39;t serve them as-is. I was planning to use the picture element, so I need to prepare several versions of the same image: &lt;picture&gt; &lt;source srcset=&quot;image-small.png 320w, image-medium.png 800w, image-large.png 1200w&quot; sizes=&quot;(min-width: 60rem) 80vw, (min-width: 40rem) 90vw, 100vw&quot; /&gt; &lt;img src=&quot;image-small.png&quot; alt=&quot;Image description&quot; /&gt; &lt;/picture&gt; I usually use tools like avifenc and ImageMagick... But I was wondering what the correct order is to get the best size-to-quality ratio (or even if it doesn&#39;t matter). convert to avif downscale compress Or is it better to compress first and then downscale? Please don’t suggest third-party services ; I like to do everything manually using the command line. &#32; submitted by &#32; /u/Wise_Stick9613 [link] &#32; [comments]",
      "published": "2026-04-22T14:26:32+00:00"
    },
    {
      "title": "Do you separate subdomains for transactional and mass email?",
      "url": "https://www.reddit.com/r/webdev/comments/1ssl6k1/do_you_separate_subdomains_for_transactional_and/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssl6k1/do_you_separate_subdomains_for_transactional_and/",
      "author": "/u/emmancano12",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "How do you all handle deliverability for different kinds of sends? Do you separate transactional email like password resets and confirmations from newsletters or marketing emails by using different subdomainsor sender identities? Like hello@domain.com for transactional emails and hello@fyi.domain.com for mass email sends. &#32; submitted by &#32; /u/emmancano12 [link] &#32; [comments]",
      "published": "2026-04-22T13:14:47+00:00"
    },
    {
      "title": "Blocking websites and social media on phone and PC (need something that actually works)",
      "url": "https://www.reddit.com/r/webdev/comments/1ssef1f/blocking_websites_and_social_media_on_phone_and/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssef1f/blocking_websites_and_social_media_on_phone_and/",
      "author": "/u/Gionni15",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I’m going through a stressful period and I really need to cut down on distractions. I’ve already tried uninstalling apps on my phone, but I just end up using social media or news site through the browser, so it doesn’t solve the problem. I need something that actually blocks websites and isn’t easy to bypass. Ideally, something that’s hard to get around, works across devices, and possibly includes a password or strong restrictions. Has anyone found a solution that really works? Apps, software, or technical setups are all welcome. &#32; submitted by &#32; /u/Gionni15 [link] &#32; [comments]",
      "published": "2026-04-22T07:29:27+00:00"
    },
    {
      "title": "I got millions of requests today - I don't know what that means, is that good, how do i stop it if it is bad?",
      "url": "https://i.redd.it/xps7ykhmqvwg1.png",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sta9q5/i_got_millions_of_requests_today_i_dont_know_what/",
      "author": "/u/SystemsCapital",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Basically the title. My site averages ~100 unique users per day, but today the amount of requests were in the millions. I&#39;m guessing this is botting, but how do I prevent this (if I should). I also have 0% cached. I&#39;m not entirely sure what that means either or if I should change it. I&#39;m really new to this, and I&#39;m happy to have the traffic (if it&#39;s real) but I don&#39;t know what to do or how to resolve/lean into it to offer an API access if that&#39;s what people use my data for. Some background, I make daily updated JSONs of investment data (statistics, advanced calculations, things that aren&#39;t readily offered by other sites, etc). I just started making it a server-side render so that the information can get picked up by the html search (yes I know that means all the data is easily scrapable, I wanted to make it get picked up for SEO). Once again, not entirely sure what I&#39;m doing, just trying to put my calculations online. I&#39;m happy if people use it, but I&#39;m worried about the nightmare $10k vercel bill with $0 income. I may have to take off the server side rendering which is okay, but does anyone with experience with cloudflare, caching, and maybe something similar offer some advice? either how to prevent or how to pivot into capitalizing on the high requests? Thanks &#32; submitted by &#32; /u/SystemsCapital [link] &#32; [comments]",
      "published": "2026-04-23T06:01:54+00:00"
    },
    {
      "title": "Typo3: Delete History upon sending form",
      "url": "https://www.reddit.com/r/webdev/comments/1ssuhdo/typo3_delete_history_upon_sending_form/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssuhdo/typo3_delete_history_upon_sending_form/",
      "author": "/u/PPMaxiM2",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey there! First of all, sorry if this is not specific enough, i try my very best to give all the infos i have gained so far. First of all, the problem i want to solve: I want to create a form with typo3. Upon completion/sending, the form should be sent, and (the tricky part), the site of the form should be deleted. Background: I manage a school-homepage, and we want to create an option to contact special teachers in case of abuse, without the abusers beeing able to see it in the history. What i tried: I looked into Javascript, with which i did manage to replace the last item. The issue is, i only have managed to get it to work one site later - so, the form itself is still there. I sadly cannot edit the script into the button itself (or atleast dont know how), so im looking for other solutions. &#32; submitted by &#32; /u/PPMaxiM2 [link] &#32; [comments]",
      "published": "2026-04-22T18:47:25+00:00"
    },
    {
      "title": "Display your high-impact GitHub contributions with a dynamic SVG badge",
      "url": "https://github.com/readme-SVG/readme-PR-contributors-rating",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssmbzr/display_your_highimpact_github_contributions_with/",
      "author": "/u/DazzlingChicken4893",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/DazzlingChicken4893 [link] &#32; [comments]",
      "published": "2026-04-22T13:58:33+00:00"
    },
    {
      "title": "Can someone resolve this?",
      "url": "https://www.reddit.com/r/webdev/comments/1ssj17s/can_someone_resolve_this/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssj17s/can_someone_resolve_this/",
      "author": "/u/ITheAnonymous",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "https://indasaccess.icai.org/2025-2026/AS/volume-II.html This is working fine. But when I click on an Ind AS - the error shows &quot;Geo-location service unavailable&quot;? I tried giving location access to the website. Also, location settings are on. Windows 10 Laptop. Microsoft Edge latest version. I am the user here. Does it relate to me? Or does it relate to the server? &#32; submitted by &#32; /u/ITheAnonymous [link] &#32; [comments]",
      "published": "2026-04-22T11:43:47+00:00"
    },
    {
      "title": "I mapped the UX research tooling landscape into one list",
      "url": "https://www.reddit.com/r/webdev/comments/1ssh20s/i_mapped_the_ux_research_tooling_landscape_into/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssh20s/i_mapped_the_ux_research_tooling_landscape_into/",
      "author": "/u/samuelberthe",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "This list maps the landscape by use case: all-in-one platforms, in-app surveys, feedback analysis, session recording, product analytics, CDPs, feature flags, product tours, user testing, interviews, research repositories, recruitment, plus a learning section (books, talks, podcasts, people to follow). -&gt; https://github.com/samber/awesome-user-research &#32; submitted by &#32; /u/samuelberthe [link] &#32; [comments]",
      "published": "2026-04-22T10:02:56+00:00"
    },
    {
      "title": "Lessons from building a client-side AI caption generator (WhisperX + ffmpeg.wasm + the COEP trap)",
      "url": "https://8gwifi.org/video/captions/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssqurp/lessons_from_building_a_clientside_ai_caption/",
      "author": "/u/anish2good",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Shipped https://8gwifi.org/video/captions/ this week free AI caption generator that runs almost entirely client-side. Sharing the rough edges so nobody else steps on them. The architecture Browser extracts audio (Web Audio API, resampled to 16 kHz mono) 2 MB WAV Audio uploaded to my backend WhisperX returns word evel timestamps Browser draws live caption preview on an HTML5 canvas over the video On Export: ffmpeg.wasm burns captions in via subtitles=filter with a generated .ass script + libass Server is thin the only thing that touches it is the audio for transcription. The final MP4 is built in the browser, so &quot;your video never leaves your device&quot; is literally true. The COEP trap To get ffmpeg.wasm multi-threaded (3× faster), you need Cross-Origin-Embedder-Policy: require-corp . That silently blocks: AdSense&#39;s newer bidding scripts (Setupad, ADX Premium) Google Publisher Tags StatCounter and most third-party pixels Anything that doesn&#39;t send Cross-Origin-Resource-Policy: cross-origin credentialless mode loosens that — but it strips cross-origin cookies, which breaks header-bidding partner cookie syncs. So if ads are part of your business model, strict cross-origin isolation basically doesn&#39;t work with the modern ad stack. I ended up dropping COEP entirely and taking the single-threaded fallback. Exports are ~3× slower but ads + analytics work and the tool stays free. Other things that bit ffmpeg.wasm has no system fonts or fontconfig. Without bundling a TTF into the virtual FS, libass silently skips text rendering. Preview worked, export was blank. Web Audio API decodeAudioData fails with a useless message when a video has no audio track had to wrap in a friendlier error. WhisperX&#39;s VAD aggressively drops silence, cutting transcripts short. Added an inline transcript editor so users can add missing words at the tail. Stack Frontend: vanilla JS, canvas, Web Audio, ffmpeg.wasm (DejaVu Sans for libass) Backend transcription: WhisperX on FastAPI, proxied through a Go server Nothing else — no framework, no build step on the frontend, lazy-loaded wasm Happy to answer anything about the pipeline. Source for the page structure, editor, and ffmpeg integration is on the host if anyone wants to peek at the JS. &#32; submitted by &#32; /u/anish2good [link] &#32; [comments]",
      "published": "2026-04-22T16:40:56+00:00"
    },
    {
      "title": "Why are Capacitor Android notifications playing sound but not vibrating or showing the alert card in the background?",
      "url": "https://i.redd.it/xnl2r5f0tpwg1.jpeg",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssgz72/why_are_capacitor_android_notifications_playing/",
      "author": "/u/Rarararararaviiiiii",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I’m working on a Capacitor-based Android app for a restaurant staff portal in android studio. The app must alert waiters when a table needs help or a new order arrives, even when the app is in a pocket or the screen is off. The Problem: When an event triggers, the notification sound plays perfectly (in and out of the app), but the actual Android notification card (banner/popup) never appears in the status bar or on the lock screen and the vibration feed back works inside the app but not outside(in BG). It&#39;s like a &quot;ghost notification.&quot; What I’ve already tried: •Native Plugin: Migrated from Web/Service Worker notifications to u/capacitor/local-notifications for better system-level integration. •Permission Bridge: Built a custom bridge to manually trigger the native Android permission request. •Keep-Alive: Implemented a silent audio loop to prevent the Android OS from putting the app to sleep while staff are on shift. •Notification Channels: Configured the manifest to ensure high-priority channels are used. •UI Tweaks: Set the app to a Fullscreen/NoActionBar theme to ensure the system UI isn&#39;t being suppressed by the app&#39;s layout. The staff can hear the alert, but they have no card to tap on to see which table needs help. Is there a specific Android 13/14 background restriction or a Capacitor-specific manifest setting that allows sound but blocks the visual alert card? Has anyone else solved this and advice me &quot;sound-only&quot; notification issue on modern Android devices? &#32; submitted by &#32; /u/Rarararararaviiiiii [link] &#32; [comments]",
      "published": "2026-04-22T09:58:43+00:00"
    },
    {
      "title": "AIPOCH Awesome Med Research Skills: 102 AI Agent Skills for Medical Research Workflows",
      "url": "https://www.reddit.com/r/webdev/comments/1ssekp5/aipoch_awesome_med_research_skills_102_ai_agent/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssekp5/aipoch_awesome_med_research_skills_102_ai_agent/",
      "author": "/u/There_ssssa",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "We are launching Awesome Med Research Skills — a curated collection of medical research Agent Skills, featuring 102 high-quality skills. Each skill embeds professional medical research logic. What are awesome-med-research-skills? Awesome Med Research Skills is a curated collection of medical research Agent Skills, currently including 102 high-quality skills. We aim to help researchers more effectively organize questions, connect evidence, and advance research. To achieve this, we encode professional medical research logic into these agent skills: Literature authenticity constraints: Implementing hard rules Research type identification: We first determine the study type, then execute different logical pathways Medical-specific prompt logic Key Features of Awesome Med Research Skills Modular Skill Architecture for Team Scaling Skills are composable, replaceable, and extensible, suitable for both individual use and team collaboration Can be assembled from single-task execution to multi-step workflow pipelines Built for Real Medical Research Scenarios Covers real workflows: topic selection, literature search, study design, writing, graphical abstracts, and more Not adapted from generic content templates — designed specifically for medical research contexts. Explore 102 Awesome Med Research Skills here . Total Skills in Library: 500+ and growing. Explore AIPOCH Github. &#32; submitted by &#32; /u/There_ssssa [link] &#32; [comments]",
      "published": "2026-04-22T07:38:51+00:00"
    },
    {
      "title": "Quick question does anybody have resources or links on how to manage auth and session between react frontend like tanstack-start and keycloak?",
      "url": "https://www.reddit.com/r/webdev/comments/1sso4c5/quick_question_does_anybody_have_resources_or/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sso4c5/quick_question_does_anybody_have_resources_or/",
      "author": "/u/morganharlowe",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I am developing a project that needs SSO and I am developing everything with docker, tanstack-start, keycloak as SSO and django for the backend data api. I would appreciate some insight into this flow. Thanks a lot! &#32; submitted by &#32; /u/morganharlowe [link] &#32; [comments]",
      "published": "2026-04-22T15:03:32+00:00"
    },
    {
      "title": "Built a multi AI local workflow Proxima surprisingly useful for dev tasks",
      "url": "https://www.reddit.com/r/webdev/comments/1sstwhf/built_a_multi_ai_local_workflow_proxima/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sstwhf/built_a_multi_ai_local_workflow_proxima/",
      "author": "/u/Personal_Offer1551",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Proxima connected multi AI through MCP with my coding agent. Basically, it lets an agent talk to multiple AI providers (ChatGPT, Claude, Gemini, Perplexity) from a single local Proxima server. What made it interesting is how it behaves in actual dev work. Earlier, when working with a single AI, I noticed some common issues: getting stuck on multi-step problems guessing wrong things and getting confused on hard problems (outdated training data) weak real-time data (especially for newer libraries/issues) going in circles while debugging and sometimes hallucinating because it works alone With this setup, the agent can call different models for the same task, pass context/code between them, and use tools for specific actions (debugging, reviewing, searching, etc.). So instead of retrying or guessing, it calls Proxima and uses 50+ tools to get better answers. All 4 AIs can work together, share context, do real-time internet research, and even share code to fix specific problems. For example: Model can suggests and do fix improves or corrects it search fills in missing context UI tool helps refine design I tried it on: debugging errors reviewing code comparing different implementations exploring better approaches Before, one model struggled. Now the agent uses Proxima MCP to get better code, improve project structure, and fix bugs and context issues. For complex or messy problems, it feels more stable than relying on a single model. Curious if anyone else here is experimenting with multi-AI workflows or MCP setups in their dev environment? Repo: https://github.com/Zen4-bit/Proxima If you check it out and find it useful, a ⭐ is appreciated. Would like to hear how others are approaching this &#32; submitted by &#32; /u/Personal_Offer1551 [link] &#32; [comments]",
      "published": "2026-04-22T18:26:44+00:00"
    },
    {
      "title": "How I normalized WebSocket feeds across 10+ stock and crypto exchanges into one real-time data stream",
      "url": "https://www.reddit.com/r/webdev/comments/1ssrmth/how_i_normalized_websocket_feeds_across_10_stock/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssrmth/how_i_normalized_websocket_feeds_across_10_stock/",
      "author": "/u/talinator1616",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Started learning WebSockets a few months ago and ended up going down a rabbit hole connecting to live feeds from stock exchanges (NYSE, Nasdaq, IEX, MEMX) and crypto exchanges (Binance, Bybit, OKX, Coinbase, Kraken) and trying to normalize everything into one consistent stream. A few things that were harder than expected: Binance order book deltas use sequence numbers - miss one and your book state is silently corrupted without any error. Had to build automatic gap detection with REST snapshot fallback. Every exchange handles reconnects differently. Some send a close frame, some just go silent. Per-exchange reconnect handlers with heartbeat monitoring ended up being the only reliable solution. Timestamp formats are all over the place - seconds, milliseconds, microseconds, and some exchanges only send arrival time with no exchange-side timestamp at all. Has anyone else tackled cross-exchange normalization? &#32; submitted by &#32; /u/talinator1616 [link] &#32; [comments]",
      "published": "2026-04-22T17:08:11+00:00"
    },
    {
      "title": "shadcn/ui now available in Cursor",
      "url": "https://www.reddit.com/r/webdev/comments/1ssfce1/shadcnui_now_available_in_cursor/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssfce1/shadcnui_now_available_in_cursor/",
      "author": "/u/riti_rathod",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Saw this today, shadcn/ui is now available as a Cursor plugin. Seems like a nice addition for people building with shadcn regularly. Anyone tested it yet? &#32; submitted by &#32; /u/riti_rathod [link] &#32; [comments]",
      "published": "2026-04-22T08:24:11+00:00"
    },
    {
      "title": "Anyone here registered for Perplexity’s Billion Dollar Build?",
      "url": "https://i.redd.it/vrav6patlswg1",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssvj26/anyone_here_registered_for_perplexitys_billion/",
      "author": "/u/No_Strawberry6141",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I didn’t since it’s only for US residents, but I have a strong idea that could win. The Billion Dollar Build — an 8-week competition starting April 2026 that challenges participants to build a company with a $1B valuation path using the Perplexity Computer AI agent system &#32; submitted by &#32; /u/No_Strawberry6141 [link] &#32; [comments]",
      "published": "2026-04-22T19:24:38+00:00"
    },
    {
      "title": "This Vercel breach made me rethink all my connected apps",
      "url": "https://www.reddit.com/r/webdev/comments/1ssx6sw/this_vercel_breach_made_me_rethink_all_my/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssx6sw/this_vercel_breach_made_me_rethink_all_my/",
      "author": "/u/codes_astro",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Vercel breach is pretty interesting, mainly because of how it actually happened. I expected something like a deep infra exploit or zero-day. Instead, it started with an AI tool. From what I understood, a third-party tool Context AI used by an employee got compromised. That exposed access to a Google Workspace account, and from there the attacker just moved through existing OAuth connections into Vercel’s internal systems. That’s what got me. Nothing was hacked in the usual way. They just used access that was already there. Shortly after Vercel disclosed the incident, a threat actor claiming ties to ShinyHunters posted samples of stolen data on BreachForums Vercel said sensitive env vars were safe, but anything not marked sensitive could be accessed. So basically API keys, tokens, that kind of stuff. There are also reports about GitHub/npm/Linear access, but not everything is confirmed yet. I always thought of these tools as harmless add-ons, but now I’m thinking they’re actually one of the weakest points. They sit there with a lot of permissions and I rarely check them unless something breaks. Feels like the real risk isn’t just your codebase anymore. It’s everything you’ve connected to it. If you’re curious, I wrote a detailed breakdown of the whole incident and how it unfolded. &#32; submitted by &#32; /u/codes_astro [link] &#32; [comments]",
      "published": "2026-04-22T20:25:06+00:00"
    },
    {
      "title": "Automated headshot cropper for image uploads",
      "url": "https://www.reddit.com/gallery/1ssuybw",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssuybw/automated_headshot_cropper_for_image_uploads/",
      "author": "/u/avidrunner84",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I would like to run this on VPS, so when a user uploads an image the headshot is automatically cropped. I am trying something like this out on this site https://poloclub.github.io/magic-crop/ but it seems to crop out the hair and also the colors get oversaturated Has anybody worked with something like this before for their website? &#32; submitted by &#32; /u/avidrunner84 [link] &#32; [comments]",
      "published": "2026-04-22T19:04:15+00:00"
    },
    {
      "title": "PorkBun requested ID verification after I registered my account",
      "url": "https://www.reddit.com/r/webdev/comments/1ssj1j2/porkbun_requested_id_verification_after_i/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssj1j2/porkbun_requested_id_verification_after_i/",
      "author": "/u/soldture",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Is it normal practice these days to collect so much information from their clients? Did you pass verification on that site? I was looking for a cheap registrar for my domain, but it appears that its low pricing comes with a significant disadvantage. What do you think? &#32; submitted by &#32; /u/soldture [link] &#32; [comments]",
      "published": "2026-04-22T11:44:12+00:00"
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
      "forks": 5954,
      "added_stars": 6084,
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
      "forks": 2527,
      "added_stars": 6948,
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
      "added_stars": 1379,
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
      "forks": 488,
      "added_stars": 1122,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3888,
      "added_stars": 1437,
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
      "author": "mostlygeek",
      "repo": "llama-swap",
      "avatar": "https://github.com/mostlygeek.png",
      "repo_link": "https://github.com/mostlygeek/llama-swap",
      "desc": "Reliable model swapping for any local OpenAI/Anthropic compatible server - llama.cpp, vllm, etc",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 274,
      "added_stars": 692,
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
      "forks": 1477,
      "added_stars": 1317,
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
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5235,
      "added_stars": 1705,
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
      "forks": 3042,
      "added_stars": 1560,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 739,
      "added_stars": 1078,
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
      "author": "syncthing",
      "repo": "syncthing",
      "avatar": "https://github.com/syncthing.png",
      "repo_link": "https://github.com/syncthing/syncthing",
      "desc": "Open Source Continuous File Synchronization",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5101,
      "added_stars": 2008,
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
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 349,
      "added_stars": 608,
      "builtBy": [
        {
          "username": "9seconds",
          "href": "https://github.com/9seconds",
          "avatar": "https://avatars.githubusercontent.com/u/831613"
        },
        {
          "username": "dolonet",
          "href": "https://github.com/dolonet",
          "avatar": "https://avatars.githubusercontent.com/u/86595509"
        },
        {
          "username": "savely-krasovsky",
          "href": "https://github.com/savely-krasovsky",
          "avatar": "https://avatars.githubusercontent.com/u/5345489"
        },
        {
          "username": "im-kulikov",
          "href": "https://github.com/im-kulikov",
          "avatar": "https://avatars.githubusercontent.com/u/888650"
        },
        {
          "username": "Dank-del",
          "href": "https://github.com/Dank-del",
          "avatar": "https://avatars.githubusercontent.com/u/63096193"
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
      "forks": 72,
      "added_stars": 679,
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
      "author": "mudler",
      "repo": "LocalAI",
      "avatar": "https://github.com/mudler.png",
      "repo_link": "https://github.com/mudler/LocalAI",
      "desc": "LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3998,
      "added_stars": 1656,
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
      "forks": 1291,
      "added_stars": 200,
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
      "added_stars": 127,
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
      "author": "XTLS",
      "repo": "RealiTLScanner",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/RealiTLScanner",
      "desc": "A TLS server scanner for Reality",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 258,
      "added_stars": 408,
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
      "forks": 16198,
      "added_stars": 100638,
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
      "forks": 3661,
      "added_stars": 9037,
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
      "forks": 1836,
      "added_stars": 9478,
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
      "forks": 2845,
      "added_stars": 10276,
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
      "forks": 4710,
      "added_stars": 17032,
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
      "forks": 7525,
      "added_stars": 23540,
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
      "forks": 1954,
      "added_stars": 19158,
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
      "author": "Fincept-Corporation",
      "repo": "FinceptTerminal",
      "avatar": "https://github.com/Fincept-Corporation.png",
      "repo_link": "https://github.com/Fincept-Corporation/FinceptTerminal",
      "desc": "FinceptTerminal is a modern finance application offering advanced market analytics, investment research, and economic data tools, designed for interactive exploration and data-driven decision-making in a user-friendly environment.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1759,
      "added_stars": 9926,
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
      "author": "hacksider",
      "repo": "Deep-Live-Cam",
      "avatar": "https://github.com/hacksider.png",
      "repo_link": "https://github.com/hacksider/Deep-Live-Cam",
      "desc": "real time face swap and one-click video deepfake with only a single image",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13344,
      "added_stars": 11891,
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
      "forks": 3741,
      "added_stars": 10189,
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
      "forks": 1794,
      "added_stars": 8318,
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
      "forks": 826,
      "added_stars": 4867,
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
      "forks": 801,
      "added_stars": 3523,
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
      "forks": 653,
      "added_stars": 5179,
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
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8252,
      "added_stars": 29257,
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
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9928,
      "added_stars": 7799,
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
      "forks": 1632,
      "added_stars": 6098,
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
      "author": "datalab-to",
      "repo": "chandra",
      "avatar": "https://github.com/datalab-to.png",
      "repo_link": "https://github.com/datalab-to/chandra",
      "desc": "OCR model that handles complex tables, forms, handwriting with full layout.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1000,
      "added_stars": 4368,
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
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9532,
      "added_stars": 16233,
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
      "author": "plastic-labs",
      "repo": "honcho",
      "avatar": "https://github.com/plastic-labs.png",
      "repo_link": "https://github.com/plastic-labs/honcho",
      "desc": "Memory library for building stateful agents",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 321,
      "added_stars": 1948,
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
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3349,
      "added_stars": 10388,
      "builtBy": [
        {
          "username": "hesreallyhim",
          "href": "https://github.com/hesreallyhim",
          "avatar": "https://avatars.githubusercontent.com/u/172150522"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tninja",
          "href": "https://github.com/tninja",
          "avatar": "https://avatars.githubusercontent.com/u/714625"
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
    },
    {
      "title": "Soft deletes in a Zustand store via enumerable:false property descriptors",
      "url": "https://dev.to/finom/stop-duplicating-api-state-a-zustand-registry-that-auto-updates-every-component-10if",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-04-09T13:00:31.000Z"
    },
    {
      "title": "Phantom UI – Skeleton that measures your real DOM (Web Component, 8kb)",
      "url": "https://github.com/Aejkatappaja/phantom-ui",
      "upvotes": "1",
      "comments": "6",
      "created": "2026-04-08T21:49:33.000Z"
    },
    {
      "title": "A lightweight front end framework with native JavaScript/TS feel",
      "url": "https://qingkuai.dev",
      "upvotes": "1",
      "comments": "2",
      "created": "2026-04-07T22:39:58.000Z"
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
      "title": "Tune In and Join the Google Cloud NEXT '26 Writing Challenge: $1,000 in Prizes!",
      "description": "Google Cloud NEXT '26 is kicking off today (April 22) and runs through April 24 – we're launching...",
      "url": "https://dev.to/devteam/tune-in-and-join-the-google-cloud-next-26-writing-challenge-1000-in-prizes-21bd",
      "tags": "devchallenge, googlecloud, cloudnextchallenge",
      "reactions": 75,
      "comments": 8,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Build your own blog post view counter on AWS Free Tier",
      "description": "Your blog deserves to know it's being read. A Lambda function counts the views, DynamoDB remembers...",
      "url": "https://dev.to/aws/build-your-own-blog-post-view-counter-on-aws-free-tier-306f",
      "tags": "beginners, lambda, dynamodb, tutorial",
      "reactions": 53,
      "comments": 4,
      "reading_time": 11,
      "author": "esin87"
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
      "title": "Cross Cloud Multi Agent Comic Builder with ADK, Amazon Lambda, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build low code...",
      "url": "https://dev.to/gde/cross-cloud-multi-agent-comic-builder-with-adk-amazon-lambda-and-gemini-cli-3178",
      "tags": "googleadk, python, gemini, awslambda",
      "reactions": 7,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
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
      "title": "TPU Mythbusting: vendor lock-in",
      "description": "Tensor Processing Units are a technology developed and owned by Google. While you can find GPUs in...",
      "url": "https://dev.to/googleai/tpu-mythbusting-vendor-lock-in-pbo",
      "tags": "tpu, googlecloud, ai, gcp",
      "reactions": 21,
      "comments": 2,
      "reading_time": 3,
      "author": "mstrzelczyk"
    },
    {
      "title": "I built a self-hosted PostgreSQL Control Plane that runs on single Docker container",
      "description": "I built NeonD — an open-source, self-hosted control plane for PostgreSQL inspired by Neon. It gives you branching, point-in-time recovery, and S3-backed durability, all running from a single Docker container on dedicated server.",
      "url": "https://dev.to/matisiekpl/i-built-a-self-hosted-postgresql-control-plane-that-runs-on-single-docker-container-30gm",
      "tags": "database, postgres, selfhosted",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "matisiekpl"
    },
    {
      "title": "Boring code is an organizational tell",
      "description": "If boring code is good, why is it so rare? Clever code is not the result of clever engineers. It's...",
      "url": "https://dev.to/simme/boring-code-is-an-organizational-tell-4gca",
      "tags": "ai, leadership, culture, management",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "simme"
    },
    {
      "title": "What Happens Between @SqsListener and Your Method in Spring Cloud AWS SQS",
      "description": "A walkthrough of the full SQS listener lifecycle in Spring Cloud AWS SQS, from annotation detection at startup to the composable async pipeline that polls, processes, and acknowledges every message.",
      "url": "https://dev.to/tomazfernandes/what-happens-between-sqslistener-and-your-method-in-spring-cloud-aws-sqs-36e7",
      "tags": "java, spring, aws, sqs",
      "reactions": 0,
      "comments": 0,
      "reading_time": 11,
      "author": "tomazfernandes"
    },
    {
      "title": "I built a WordPress plugin that generates llms.txt from your sitemap",
      "description": "If you've been following the GEO (Generative Engine Optimization) space, you've probably heard of...",
      "url": "https://dev.to/lboneluv/i-built-a-wordpress-plugin-that-generates-llmstxt-from-your-sitemap-idp",
      "tags": "wordpress, php, seo, ai",
      "reactions": 3,
      "comments": 0,
      "reading_time": 2,
      "author": "lboneluv"
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
      "title": "Gecko: a fast GLR parser with automatic syntax error recovery",
      "url": "https://vnmakarov.github.io/parsing/compilers/c/open-source/2026/04/22/gecko-glr.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "compilers"
      ],
      "id": "chsbgc"
    },
    {
      "title": "How The Heck Does Shazam Work?",
      "url": "https://perthirtysix.com/how-the-heck-does-shazam-work",
      "score": 7,
      "comments": 0,
      "tags": [
        "math",
        "programming"
      ],
      "id": "t04nvc"
    },
    {
      "title": "Reversing SynthID",
      "url": "https://hackerfactor.com/blog/index.php?/archives/1092-Reversing-SynthID.html",
      "score": 2,
      "comments": 0,
      "tags": [
        "ai",
        "graphics"
      ],
      "id": "o9zkq0"
    },
    {
      "title": "Modern rendering culling techniques",
      "url": "https://krupitskas.com/posts/modern_culling_techniques/",
      "score": 2,
      "comments": 0,
      "tags": [
        "graphics"
      ],
      "id": "qvfr0h"
    },
    {
      "title": "Borrow-checking without type-checking",
      "url": "https://www.scattered-thoughts.net/writing/borrow-checking-without-type-checking/",
      "score": 7,
      "comments": 1,
      "tags": [
        "plt"
      ],
      "id": "5jkwmc"
    },
    {
      "title": "Inside Lazarus: How North Korea uses AI to industrialize attacks on developers",
      "url": "https://expel.com/blog/inside-lazarus-how-north-korea-uses-ai-to-industrialize-attacks-on-developers/",
      "score": 2,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "glb1iy"
    },
    {
      "title": "The Future of Deep Learning Is Photonic (2021)",
      "url": "https://spectrum.ieee.org/the-future-of-deep-learning-is-photonic",
      "score": 1,
      "comments": 0,
      "tags": [
        "ai",
        "hardware"
      ],
      "id": "afcjot"
    },
    {
      "title": "nondescript: a simple embedded programming language",
      "url": "https://github.com/deadpixi/nondescript",
      "score": 12,
      "comments": 3,
      "tags": [
        "plt",
        "show"
      ],
      "id": "ivj2o8"
    },
    {
      "title": "Olive CSS: Lisp powered vanilla CSS utility-class a la Tailwind",
      "url": "https://codeberg.org/jjba23/olive-css",
      "score": 6,
      "comments": 0,
      "tags": [
        "css",
        "lisp",
        "web"
      ],
      "id": "unbgyx"
    },
    {
      "title": "It’s trivial to create your own hacking robot",
      "url": "https://www.notcheckmark.com/2026/04/you-will-drink-the-gasoline/",
      "score": 2,
      "comments": 2,
      "tags": [
        "rant",
        "security",
        "vibecoding"
      ],
      "id": "5g5q5w"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "bumbledraven",
      "descendants": 42,
      "id": 47872324,
      "kids": [
        47872884,
        47872412,
        47872723,
        47872619,
        47872872,
        47872742,
        47872856,
        47872858,
        47872419,
        47872838,
        47872551,
        47872765,
        47872786,
        47872727,
        47872675,
        47872719,
        47872605,
        47872582,
        47872442,
        47872720,
        47872832,
        47872736,
        47872690,
        47872767
      ],
      "score": 151,
      "time": 1776919459,
      "title": "I am building a cloud",
      "type": "story",
      "url": "https://crawshaw.io/blog/building-a-cloud"
    },
    {
      "by": "Kaibeezy",
      "descendants": 527,
      "id": 47865868,
      "kids": [
        47867092,
        47872877,
        47866242,
        47866591,
        47872279,
        47871811,
        47870589,
        47867801,
        47867511,
        47866220,
        47870019,
        47871379,
        47872752,
        47867549,
        47868640,
        47866313,
        47866362,
        47871764,
        47871770,
        47866762,
        47870145,
        47869061,
        47872569,
        47869406,
        47872760,
        47867952,
        47866353,
        47870430,
        47866245,
        47866102,
        47871191,
        47868377,
        47869389,
        47866729,
        47866998,
        47871832,
        47872445,
        47872443,
        47868665,
        47866141,
        47870325,
        47866643,
        47868910,
        47871441,
        47870180,
        47867122,
        47868646,
        47869015,
        47872194,
        47868584,
        47868435,
        47867835,
        47866108,
        47867662,
        47867711,
        47867061,
        47871952,
        47871244,
        47866802,
        47866737,
        47866910,
        47870040,
        47869852,
        47869320,
        47868869,
        47868352,
        47868308,
        47866428,
        47867456,
        47867454,
        47866814,
        47866854,
        47866731,
        47866662,
        47866440,
        47866279,
        47866148,
        47866040,
        47867847,
        47867635,
        47866318,
        47870927,
        47868103,
        47866134,
        47871375,
        47867556,
        47869127,
        47868110,
        47867351
      ],
      "score": 1631,
      "time": 1776875365,
      "title": "Alberta startup sells no-tech tractors for half price",
      "type": "story",
      "url": "https://wheelfront.com/this-alberta-startup-sells-no-tech-tractors-for-half-price/"
    },
    {
      "by": "cdrnsf",
      "descendants": 132,
      "id": 47868867,
      "kids": [
        47869383,
        47869394,
        47869244,
        47869247,
        47872428,
        47872673,
        47872581,
        47871394,
        47872728,
        47869267,
        47871085,
        47869272,
        47870708,
        47871525,
        47869681,
        47870609,
        47869919,
        47871130,
        47869310,
        47869191,
        47870548,
        47869939,
        47871041,
        47869570,
        47872253,
        47872187,
        47871224,
        47870170,
        47870383,
        47869907
      ],
      "score": 528,
      "time": 1776889651,
      "title": "Apple fixes bug that cops used to extract deleted chat messages from iPhones",
      "type": "story",
      "url": "https://techcrunch.com/2026/04/22/apple-fixes-bug-that-cops-used-to-extract-deleted-chat-messages-from-iphones/"
    },
    {
      "by": "danpinto",
      "descendants": 167,
      "id": 47866697,
      "kids": [
        47867883,
        47872223,
        47869592,
        47872165,
        47869322,
        47868065,
        47868820,
        47867941,
        47868940,
        47870624,
        47872227,
        47868499,
        47871865,
        47868211,
        47867878,
        47871590,
        47870030,
        47871098,
        47868527,
        47867903,
        47868529,
        47868075
      ],
      "score": 615,
      "time": 1776879303,
      "title": "We found a stable Firefox identifier linking all your private Tor identities",
      "type": "story",
      "url": "https://fingerprint.com/blog/firefox-tor-indexeddb-privacy-vulnerability/"
    },
    {
      "by": "Prof_Sigmund",
      "descendants": 4,
      "id": 47846718,
      "kids": [
        47872462,
        47872782,
        47872779,
        47872734
      ],
      "score": 43,
      "time": 1776765349,
      "title": "A True Life Hack: What Physical 'Life Force' Turns Biology's Wheels?",
      "type": "story",
      "url": "https://www.quantamagazine.org/what-physical-life-force-turns-biologys-wheels-20260420/"
    },
    {
      "by": "zdw",
      "descendants": 119,
      "id": 47824943,
      "kids": [
        47866819,
        47867985,
        47870989,
        47866864,
        47866918,
        47866960,
        47869783,
        47872717,
        47871355,
        47871737,
        47866982,
        47872287,
        47868218,
        47868078,
        47866853,
        47870128,
        47868935,
        47868796,
        47872127,
        47870463,
        47866962,
        47870429,
        47867654,
        47824953,
        47870538,
        47869422,
        47871588,
        47871314,
        47867500,
        47869885,
        47866973,
        47867555,
        47867256,
        47868176,
        47866650,
        47868586,
        47867202,
        47866441,
        47868906,
        47872486,
        47871256,
        47867691,
        47866738,
        47866778,
        47866711,
        47868189,
        47870166,
        47867905,
        47869729,
        47872414,
        47867634,
        47867690,
        47870240,
        47870081,
        47870479,
        47869099,
        47868059,
        47871987,
        47870160,
        47870143,
        47867752,
        47871189
      ],
      "score": 540,
      "time": 1776611968,
      "title": "5x5 Pixel font for tiny screens",
      "type": "story",
      "url": "https://maurycyz.com/projects/mcufont/"
    },
    {
      "by": "jamii",
      "descendants": 6,
      "id": 47871817,
      "kids": [
        47872489
      ],
      "score": 44,
      "time": 1776912917,
      "title": "Borrow-checking without type-checking",
      "type": "story",
      "url": "https://www.scattered-thoughts.net/writing/borrow-checking-without-type-checking/"
    },
    {
      "by": "zdw",
      "descendants": 1,
      "id": 47872452,
      "kids": [
        47872471
      ],
      "score": 14,
      "time": 1776921245,
      "title": "Ars Technica: Our newsroom AI policy",
      "type": "story",
      "url": "https://arstechnica.com/staff/2026/04/our-newsroom-ai-policy/"
    },
    {
      "by": "mwenge",
      "descendants": 21,
      "id": 47871195,
      "kids": [
        47872885,
        47872848,
        47871943,
        47872699,
        47872702,
        47872682,
        47872067,
        47872484,
        47871882,
        47871784,
        47871712,
        47871416
      ],
      "score": 58,
      "time": 1776906152,
      "title": "Tempest vs. Tempest: The Making and Remaking of Atari's Iconic Video Game",
      "type": "story",
      "url": "https://tempest.homemade.systems"
    },
    {
      "by": "pella",
      "descendants": 192,
      "id": 47866913,
      "kids": [
        47870179,
        47867253,
        47867899,
        47868297,
        47867281,
        47867240,
        47867909,
        47868919,
        47867406,
        47872125,
        47867460,
        47871834,
        47867508,
        47869431,
        47871119,
        47867774,
        47868672,
        47868571,
        47868471,
        47867768,
        47867554,
        47870407,
        47868873,
        47872156,
        47867223,
        47868291,
        47867292,
        47867384,
        47868329,
        47867303,
        47867383,
        47871370,
        47867413,
        47867785,
        47868319,
        47868616,
        47867999,
        47868824,
        47867649,
        47868915,
        47868070,
        47869653,
        47872147,
        47872594,
        47871607,
        47872190,
        47870632,
        47870715,
        47867404,
        47870491,
        47867761,
        47868138
      ],
      "score": 341,
      "time": 1776880277,
      "title": "Over-editing refers to a model modifying code beyond what is necessary",
      "type": "story",
      "url": "https://nrehiew.github.io/blog/minimal_editing/"
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
      "title": "Markdown (Aaron Swartz: The Weblog)",
      "url": "http://www.aaronsw.com/weblog/001189",
      "permalink": "https://www.reddit.com/r/programming/comments/1ssh8e2/markdown_aaron_swartz_the_weblog/",
      "author": "/u/Successful_Bowl2564",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Successful_Bowl2564 [link] &#32; [comments]",
      "published": "2026-04-22T10:12:42+00:00"
    },
    {
      "title": "Bun 1.1.13 out with memory fixes as dev complain of leaks",
      "url": "https://www.theregister.com/2026/04/21/anthropics_bun_1113_released_with_memory_fixes/?td=keepreading",
      "permalink": "https://www.reddit.com/r/programming/comments/1sse59e/bun_1113_out_with_memory_fixes_as_dev_complain_of/",
      "author": "/u/stronghup",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/stronghup [link] &#32; [comments]",
      "published": "2026-04-22T07:13:17+00:00"
    },
    {
      "title": "Columnar Storage is Normalization",
      "url": "https://buttondown.com/jaffray/archive/columnar-storage-is-normalization/",
      "permalink": "https://www.reddit.com/r/programming/comments/1ssm5qa/columnar_storage_is_normalization/",
      "author": "/u/SpecialistLady",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/SpecialistLady [link] &#32; [comments]",
      "published": "2026-04-22T13:52:02+00:00"
    },
    {
      "title": "The Second Wave of the API-first Economy",
      "url": "https://brandur.org/second-wave-api-first",
      "permalink": "https://www.reddit.com/r/programming/comments/1ssjbeq/the_second_wave_of_the_apifirst_economy/",
      "author": "/u/Kabra___kiiiiiiiid",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Kabra___kiiiiiiiid [link] &#32; [comments]",
      "published": "2026-04-22T11:56:47+00:00"
    },
    {
      "title": "The Work Runs on Different Maps",
      "url": "https://yusufaytas.com/the-work-runs-on-different-maps",
      "permalink": "https://www.reddit.com/r/programming/comments/1ssmxlj/the_work_runs_on_different_maps/",
      "author": "/u/SpecialistLady",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/SpecialistLady [link] &#32; [comments]",
      "published": "2026-04-22T14:20:27+00:00"
    },
    {
      "title": "Garbage Collection Without Unsafe Code",
      "url": "https://fitzgen.com/2024/02/06/safe-gc.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1ssm63f/garbage_collection_without_unsafe_code/",
      "author": "/u/SpecialistLady",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/SpecialistLady [link] &#32; [comments]",
      "published": "2026-04-22T13:52:25+00:00"
    },
    {
      "title": "curl roadmap 2026 with Daniel Stenberg",
      "url": "https://www.youtube.com/watch?v=DESGZXXKajY",
      "permalink": "https://www.reddit.com/r/programming/comments/1sss1e5/curl_roadmap_2026_with_daniel_stenberg/",
      "author": "/u/h4l",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "some things we want to work on, or consider working on during 2026 &#32; submitted by &#32; /u/h4l [link] &#32; [comments]",
      "published": "2026-04-22T17:22:08+00:00"
    },
    {
      "title": "Systems Thinking Explained: From Events to Systemic Structures",
      "url": "https://read.thecoder.cafe/p/systems-thinking",
      "permalink": "https://www.reddit.com/r/programming/comments/1ssqh52/systems_thinking_explained_from_events_to/",
      "author": "/u/teivah",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/teivah [link] &#32; [comments]",
      "published": "2026-04-22T16:27:26+00:00"
    },
    {
      "title": "What are the most impactful ways to improve website conversions from a development perspective?",
      "url": "http://laracopilot.com",
      "permalink": "https://www.reddit.com/r/programming/comments/1staoev/what_are_the_most_impactful_ways_to_improve/",
      "author": "/u/Kind-Discount-7806",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "I’m working on a website(LaraCopilot) that gets steady traffic, but the conversion rate is lower than expected. From a web development standpoint (not just marketing), I’m trying to understand what actually moves the needle. Some areas I’m thinking about: Page load performance and Core Web Vitals UX/UI structure and layout decisions Form handling and friction reduction Accessibility improvements For those with experience: What dev-related changes had the biggest impact on conversions? Any overlooked technical factors that affect user behavior? What would you prioritize first? Looking for insights based on real experience rather than general advice. &#32; submitted by &#32; /u/Kind-Discount-7806 [link] &#32; [comments]",
      "published": "2026-04-23T06:24:18+00:00"
    },
    {
      "title": "Building a map of the GeminiNet",
      "url": "https://rbtms.github.io/blog/gemini_map.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1st15gc/building_a_map_of_the_gemininet/",
      "author": "/u/Strong_Fig5979",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Strong_Fig5979 [link] &#32; [comments]",
      "published": "2026-04-22T22:57:15+00:00"
    },
    {
      "title": "Scalability in System Design: How Systems Grow Without Breaking",
      "url": "https://blogs.varaddhumale.in/blog/scalability-in-system-design-how-systems-grow-without-breaking-7151963607947890180",
      "permalink": "https://www.reddit.com/r/programming/comments/1st7rv4/scalability_in_system_design_how_systems_grow/",
      "author": "/u/varad177",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/varad177 [link] &#32; [comments]",
      "published": "2026-04-23T03:53:58+00:00"
    },
    {
      "title": "Why I don't chain everything in JavaScript anymore",
      "url": "https://allthingssmitty.com/2026/04/20/why-i-dont-chain-everything-in-javascript-anymore/",
      "permalink": "https://www.reddit.com/r/programming/comments/1ssmit5/why_i_dont_chain_everything_in_javascript_anymore/",
      "author": "/u/BlondieCoder",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/BlondieCoder [link] &#32; [comments]",
      "published": "2026-04-22T14:05:19+00:00"
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
      "title": "The Token Tab: A Developer's Audit of the AI Hype Stack",
      "description": "A four-layer teardown of what you are actually buying when you follow an AI tutorial in 2026, with real numbers and a checklist you can run before you commit hardware or a subscription.",
      "url": "https://dev.to/thegdsks/the-token-tab-a-developers-audit-of-the-ai-hype-stack-6gg",
      "tags": "ai, devtools, productivity, career",
      "reactions": 5,
      "comments": 0,
      "reading_time": 7,
      "author": "thegdsks"
    },
    {
      "title": "Why the Line Between Data Engineer and ML Engineer Is Disappearing, And Why That's Your Cue to Cross It",
      "description": "The ML engineer role is changing. If you're a data engineer who's been watching from the sidelines,...",
      "url": "https://dev.to/nyson_mark/why-the-line-between-data-engineer-and-ml-engineer-is-disappearing-and-why-thats-your-cue-to-566l",
      "tags": "machinelearning, dataengineering, mlops, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "nyson_mark"
    },
    {
      "title": "New Developer Onboarding: How Metrics Show the Ramp-Up to Full Productivity",
      "description": "New developers take 2-4 months to reach full productivity. Here's how to measure the onboarding ramp-up with real coding data — and how to shorten it.",
      "url": "https://dev.to/arthur_pandev/new-developer-onboarding-how-metrics-show-the-ramp-up-to-full-productivity-13hc",
      "tags": "career, management, discuss, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "arthur_pandev"
    },
    {
      "title": "How I stopped losing 3 hours a day to ADHD task-switching with a Notion OS (2026)",
      "description": "A developer's guide to building an ADHD-friendly Notion system for focus, energy tracking, and task capture that actually sticks.",
      "url": "https://dev.to/komugi_4236cc409d6f9157e7/how-i-stopped-losing-3-hours-a-day-to-adhd-task-switching-with-a-notion-os-2026-4p5g",
      "tags": "notion, productivity, career, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "komugi_4236cc409d6f9157e7"
    },
    {
      "title": "Unlimited PTO Doesn't Fix Burnout — Here's What Actually Does",
      "description": "Every year, another wave of companies announces unlimited PTO as their answer to employee burnout....",
      "url": "https://dev.to/recharge/unlimited-pto-doesnt-fix-burnout-heres-what-actually-does-3f24",
      "tags": "burnout, career, productivity, management",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "recharge"
    },
    {
      "title": "AI took my job but it didn't take my passion for writing software",
      "description": "The job market is challenging in the current day in age given that teams can become very productive...",
      "url": "https://dev.to/andreimerlescu/updated-last-week-24gc",
      "tags": "ai, programming, opensource, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "andreimerlescu"
    },
    {
      "title": "Stanford's 2026 AI Index just dropped. Junior developer employment is down 20%. Here's what the data actually says.",
      "description": "The Stanford Institute for Human-Centered AI released its 2026 AI Index today. It is the most...",
      "url": "https://dev.to/ajbuilds/stanfords-2026-ai-index-just-dropped-junior-developer-employment-is-down-20-heres-what-the-36ba",
      "tags": "ai, career, webdev, cloud",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "ajbuilds"
    },
    {
      "title": "Vibe Coding vs a Senior Dev: 5 Prompts, One App Clone",
      "description": "A vibe coder and a senior iOS dev each had 5 prompts to clone a $250M AI notetaker app. What happened says more about AI tools than talent.",
      "url": "https://dev.to/visesh/vibe-coding-vs-a-senior-dev-5-prompts-one-app-clone-452j",
      "tags": "ai, programming, webdev, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "visesh"
    },
    {
      "title": "Confessions of a Dev #2:The Interview Answer That Haunts Me",
      "description": "You know that feeling — walking out of an interview, and by the time you hit the elevator, your brain...",
      "url": "https://dev.to/stephen_jarso/confessions-of-a-dev-2the-interview-answer-that-haunts-me-558p",
      "tags": "programming, career, agents, ai",
      "reactions": 2,
      "comments": 0,
      "reading_time": 2,
      "author": "stephen_jarso"
    },
    {
      "title": "Beginner’s Roadmap to Becoming a Generative AI Engineer with Amazon Web Services",
      "description": "Generative AI has moved from curiosity to core capability. What once felt experimental is now...",
      "url": "https://dev.to/datta_kharad_3fd1383b5036/beginners-roadmap-to-becoming-a-generative-ai-engineer-with-amazon-web-services-7pi",
      "tags": "ai, aws, beginners, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "datta_kharad_3fd1383b5036"
    }
  ]
}
```

