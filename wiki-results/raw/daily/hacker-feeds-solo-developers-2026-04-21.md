# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-21 06:55:24 UTC

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
      "forks": 5435,
      "added_stars": 12472,
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
      "forks": 2204,
      "added_stars": 7009,
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
      "author": "jamiepine",
      "repo": "voicebox",
      "avatar": "https://github.com/jamiepine.png",
      "repo_link": "https://github.com/jamiepine/voicebox",
      "desc": "The open-source voice synthesis studio",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2524,
      "added_stars": 5936,
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
      "author": "coleam00",
      "repo": "Archon",
      "avatar": "https://github.com/coleam00.png",
      "repo_link": "https://github.com/coleam00/Archon",
      "desc": "The first open-source harness builder for AI coding. Make AI coding deterministic and repeatable.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2953,
      "added_stars": 1572,
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
      "author": "lukilabs",
      "repo": "craft-agents-oss",
      "avatar": "https://github.com/lukilabs.png",
      "repo_link": "https://github.com/lukilabs/craft-agents-oss",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 658,
      "added_stars": 697,
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
      "forks": 1879,
      "added_stars": 1334,
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
      "forks": 1008,
      "added_stars": 417,
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
      "author": "hicccc77",
      "repo": "WeFlow",
      "avatar": "https://github.com/hicccc77.png",
      "repo_link": "https://github.com/hicccc77/WeFlow",
      "desc": "WeFlow - 一个本地的微信聊天记录导出和年度报告应用",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2050,
      "added_stars": 715,
      "builtBy": [
        {
          "username": "hicccc77",
          "href": "https://github.com/hicccc77",
          "avatar": "https://avatars.githubusercontent.com/u/98377878"
        },
        {
          "username": "xunchahaha",
          "href": "https://github.com/xunchahaha",
          "avatar": "https://avatars.githubusercontent.com/u/102988462"
        },
        {
          "username": "aits2026",
          "href": "https://github.com/aits2026",
          "avatar": "https://avatars.githubusercontent.com/u/263311168"
        },
        {
          "username": "Jasonzhu1207",
          "href": "https://github.com/Jasonzhu1207",
          "avatar": "https://avatars.githubusercontent.com/u/159670257"
        },
        {
          "username": "H3CoF6",
          "href": "https://github.com/H3CoF6",
          "avatar": "https://avatars.githubusercontent.com/u/190114211"
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
      "forks": 255,
      "added_stars": 568,
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
      "author": "gitroomhq",
      "repo": "postiz-app",
      "avatar": "https://github.com/gitroomhq.png",
      "repo_link": "https://github.com/gitroomhq/postiz-app",
      "desc": "📨 The ultimate social media scheduling tool, with a bunch of AI 🤖",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5225,
      "added_stars": 1035,
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
      "author": "formbricks",
      "repo": "formbricks",
      "avatar": "https://github.com/formbricks.png",
      "repo_link": "https://github.com/formbricks/formbricks",
      "desc": "Open Source Qualtrics Alternative",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2211,
      "added_stars": 52,
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
      "author": "calcom",
      "repo": "cal.diy",
      "avatar": "https://github.com/calcom.png",
      "repo_link": "https://github.com/calcom/cal.diy",
      "desc": "Scheduling infrastructure for absolutely everyone.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 12897,
      "added_stars": 400,
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
      "author": "pascalorg",
      "repo": "editor",
      "avatar": "https://github.com/pascalorg.png",
      "repo_link": "https://github.com/pascalorg/editor",
      "desc": "Create and share 3D architectural projects.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1730,
      "added_stars": 3620,
      "builtBy": [
        {
          "username": "wass08",
          "href": "https://github.com/wass08",
          "avatar": "https://avatars.githubusercontent.com/u/6551176"
        },
        {
          "username": "Aymericr",
          "href": "https://github.com/Aymericr",
          "avatar": "https://avatars.githubusercontent.com/u/4444492"
        },
        {
          "username": "sudhir9297",
          "href": "https://github.com/sudhir9297",
          "avatar": "https://avatars.githubusercontent.com/u/19578447"
        },
        {
          "username": "open-pascal",
          "href": "https://github.com/open-pascal",
          "avatar": "https://avatars.githubusercontent.com/u/271033448"
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
      "title": "Holy crap Vercel got hacked. ROTATE YOUR KEYS if they weren't marked \"sensitive\"",
      "url": "https://www.reddit.com/r/webdev/comments/1sqy1k4/holy_crap_vercel_got_hacked_rotate_your_keys_if/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sqy1k4/holy_crap_vercel_got_hacked_rotate_your_keys_if/",
      "author": "/u/Codeblix_Ltd",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "vercel just confirmed they got hacked. apparently some employee was using a 3rd party ai tool called context.ai and the hackers used it to take over their google workspace.. anyway if you didnt explicitly click that little &#39;sensitive&#39; box on your environment variables you need to go rotate your keys. vercel said they got accessed in plaintext. &#32; submitted by &#32; /u/Codeblix_Ltd [link] &#32; [comments]",
      "published": "2026-04-20T18:28:47+00:00"
    },
    {
      "title": "PSA: Copying your SQLite .db file isn't a valid backup when WAL mode is enabled",
      "url": "https://www.reddit.com/r/webdev/comments/1sqs79o/psa_copying_your_sqlite_db_file_isnt_a_valid/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sqs79o/psa_copying_your_sqlite_db_file_isnt_a_valid/",
      "author": "/u/ultrathink-art",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "If your app uses SQLite in WAL mode (which is the default in most modern setups — Rails 8, Litestream users, etc.), a simple file copy of the .db file won&#39;t give you a valid backup. Why: WAL mode keeps a separate write-ahead log (.wal file). Until it&#39;s checkpointed back into the main database file, committed transactions live only in the WAL. A file copy of just the .db can give you a database in an inconsistent state. The right approach is to use SQLite&#39;s .backup() API (or VACUUM INTO in newer versions), which handles checkpointing atomically. Or if you&#39;re doing file-level backups, you need to copy the .db, .wal, and .shm files together, ideally with the WAL checkpointed first. We discovered this the hard way when HN commenters pointed it out after we wrote about running SQLite in production. Embarrassing but useful — rewrote our whole backup system after. Anyone else run into this? Curious how others handle SQLite backups in production. &#32; submitted by &#32; /u/ultrathink-art [link] &#32; [comments]",
      "published": "2026-04-20T15:13:17+00:00"
    },
    {
      "title": "The DOJ pushed ADA Title II back a year, and I do not think that is good news",
      "url": "https://www.reddit.com/r/webdev/comments/1sr599m/the_doj_pushed_ada_title_ii_back_a_year_and_i_do/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sr599m/the_doj_pushed_ada_title_ii_back_a_year_and_i_do/",
      "author": "/u/tayarndt",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "As a blind person, I do not think this is cool. I know some people are probably going to look at this and say okay, more time, maybe that helps. I do not see it that way. A year is too long. That is another year of people dealing with forms that do not work. Another year of broken PDFs. Another year of websites and apps that should already be accessible. And that is the part I do not want people to forget. If you are disabled, this is not just some policy update. It is whether you can do what you need to do by yourself or not. Can you fill out the form. Can you read the document. Can you use the site. Can you get through the app without getting stuck. That is what this actually means. And I keep coming back to this point. You would not wait until the last minute to think about design. Would you do that? No. So accessibility is no different. It should be there from the start, not shoved in later because the deadline is finally close. I really do not like having to make posts like this. We should not still be here in 2026 telling people that government websites, documents, forms, and apps need to be accessible, and now people are basically being told to wait even longer. Am I wrong to think this just gives a lot of teams permission to wait? &#32; submitted by &#32; /u/tayarndt [link] &#32; [comments]",
      "published": "2026-04-20T22:30:50+00:00"
    },
    {
      "title": "Is the idea that SPA's are not \"SEO friendly\" just not true anymore?",
      "url": "https://www.reddit.com/r/webdev/comments/1sr7lz9/is_the_idea_that_spas_are_not_seo_friendly_just/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sr7lz9/is_the_idea_that_spas_are_not_seo_friendly_just/",
      "author": "/u/avidrunner84",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "My Nuxt website is using ssr: false and I find the site to be a lot faster as SPA. Even the initial load time is not noticeable to me compared to SSR. I am using Directus API where the content is being updated and my URL&#39;s are very SEO friendly. I guess I don&#39;t understand why a web crawler could not index the site as SPA, especially if I have a sitemap to help it out? Just curious if this has changed in these modern days, or something to even worry about. &#32; submitted by &#32; /u/avidrunner84 [link] &#32; [comments]",
      "published": "2026-04-21T00:07:26+00:00"
    },
    {
      "title": "I built a CMS that works on MS-DOS, Netscape 3 and modern browsers (Web 1.0 approach)",
      "url": "https://www.reddit.com/r/webdev/comments/1sqkbzx/i_built_a_cms_that_works_on_msdos_netscape_3_and/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sqkbzx/i_built_a_cms_that_works_on_msdos_netscape_3_and/",
      "author": "/u/RaisinStraight2992",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I’ve been experimenting with the idea of “downgrading” the web — not just for nostalgia, but to explore simpler, more durable approaches to building sites. As a result, I built a CMS that: works on MS-DOS and very old Windows systems uses extremely minimal HTML (roughly HTML 3.x level) still renders correctly in modern browsers (backward compatibility) The editor intentionally mimics the workflow of early browsers like Netscape 3, so content is created in a way similar to late 90s websites. Screenshots: https://hamster.oldcities.org/2025_19_54_48.png http://downgrade.w10.site/login.jpg I’m curious from a developer perspective: Does this kind of extreme backward compatibility make any sense today? Where would you draw the line between constraints and usability? What would you improve in such a system? &#32; submitted by &#32; /u/RaisinStraight2992 [link] &#32; [comments]",
      "published": "2026-04-20T09:28:35+00:00"
    },
    {
      "title": "senior devs, please guide me on how to 'remember' what I coded.",
      "url": "https://www.reddit.com/r/webdev/comments/1sqtlz6/senior_devs_please_guide_me_on_how_to_remember/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sqtlz6/senior_devs_please_guide_me_on_how_to_remember/",
      "author": "/u/Then-Management6053",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;m running into a problem. It&#39;s been 1.5 years of working as a developer and so far I&#39;ve worked on a variety of projects frontend and backend. I freelanced in a frontend capacity for a while and work on shadcn, tanstack tables, next. Now I&#39;m at a job working on a Nestjs project, enterprise grade with kafka, redis etc. The thing is, I remember nothing from the nextjs projects. If you asked me to write it again, without AI I couldn&#39;t. I can still read the code and the repo and the concepts and how the flow is going. The same goes for this new Nestjs project, I just dived into this codebase and understand most of the architecture now but I doubt if I&#39;ll be able to write it. How do senior devs remember this or escape the imposter syndrome of seeing this overwhelming wall of code? Like I know it&#39;s working, but I can&#39;t make it stick in my mind and the moment I work on something else, I forget the syntax and boilerplate of the previous one. &#32; submitted by &#32; /u/Then-Management6053 [link] &#32; [comments]",
      "published": "2026-04-20T16:02:41+00:00"
    },
    {
      "title": "How are you securing environment variables in production after vercel got hacked?",
      "url": "https://www.reddit.com/r/webdev/comments/1sr13rz/how_are_you_securing_environment_variables_in/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sr13rz/how_are_you_securing_environment_variables_in/",
      "author": "/u/Autom8Guy",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey everyone, with recent discussions around platform security, I’ve been thinking more about how to properly secure environment variables in production on Vercel. Right now I’m using standard env variables, but I’m curious how others are handling this in real projects. – do you rely only on Vercel env vars or use something more advanced? – how do you handle sensitive keys across different environments? – do you rotate or manage them in any specific way? how you’re approaching this. &#32; submitted by &#32; /u/Autom8Guy [link] &#32; [comments]",
      "published": "2026-04-20T20:02:14+00:00"
    },
    {
      "title": "What is the one part of web dev you still hate doing?",
      "url": "https://www.reddit.com/r/webdev/comments/1squ23o/what_is_the_one_part_of_web_dev_you_still_hate/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1squ23o/what_is_the_one_part_of_web_dev_you_still_hate/",
      "author": "/u/Competitive-Tiger457",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "For me it is never the flashy part. It is the weird middle layer stuff that keeps a project alive but somehow always turns into a mess. Auth edge cases forms that almost work state that breaks in one specific flow responsive fixes that should take 10 minutes and somehow eat half a day small UI polish that matters way more than it should Building the core thing is usually fun. Getting everything around it to feel solid is where the pain starts. What part of web dev still drains you every time? &#32; submitted by &#32; /u/Competitive-Tiger457 [link] &#32; [comments]",
      "published": "2026-04-20T16:17:50+00:00"
    },
    {
      "title": "Are there any tools to scan websites/code for vulnerabilities before going live?",
      "url": "https://www.reddit.com/r/webdev/comments/1sr1puv/are_there_any_tools_to_scan_websitescode_for/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sr1puv/are_there_any_tools_to_scan_websitescode_for/",
      "author": "/u/rosesaiyann",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I have a solid IT background, just not in web dev. The app stores user-submitted data in databases, so it is not a static site. I can handle database setup and scripting and I know to keep API keys out of the code, but what else should I watch out for? The main concern is, I have vibe coded almost all of the website. I don&#39;t want the site to be breached/hacked and have user data, API keys and/or other stuff be stolen. I&#39;ve built websites for school projects in the past, but those were local only and whatever skills I had are long gone :p I&#39;m planning on charging a small fee, a long side a free version if users don&#39;t want to pay, with the goal of eventually bringing in a professional to audit the site properly. What would you recommend? ps: I know vibe coding is looked down on by a lot, but I am making this website mainly for myself and thought it would be nice to share with others now that Im at it. edit: typos &#32; submitted by &#32; /u/rosesaiyann [link] &#32; [comments]",
      "published": "2026-04-20T20:20:37+00:00"
    },
    {
      "title": "How to add articles to my website without having to upload a .html file every single time?",
      "url": "https://www.reddit.com/r/webdev/comments/1sre99a/how_to_add_articles_to_my_website_without_having/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sre99a/how_to_add_articles_to_my_website_without_having/",
      "author": "/u/Glittering_Report_82",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I have a website hosted with GitHub pages where I want to add articles/essays, but I want to have a best way to manage the addition of articles without always having to upload a .html file. My website is written in plain HTML/CSS. &#32; submitted by &#32; /u/Glittering_Report_82 [link] &#32; [comments]",
      "published": "2026-04-21T05:15:38+00:00"
    },
    {
      "title": "Looking for a little encouragement",
      "url": "https://www.reddit.com/r/webdev/comments/1sr8ums/looking_for_a_little_encouragement/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sr8ums/looking_for_a_little_encouragement/",
      "author": "/u/ProfDrd",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;ve been a .Net/JavaScript developer for 15 years, give or take. I&#39;ve been out of a job for a few years now due to health issues, but I&#39;m trying to get my foot back in the door. I&#39;ve not had much traction and I&#39;m seeing so much more python and react job opportunities than .Net now. I&#39;ve lately been working on personal projects with React and I&#39;m not gonna lie, it&#39;s difficult to grasp. Mainly I&#39;m having a hard time with debugging. I&#39;m so accustomed to Visual Studio Pro but I&#39;m now working VS Code and it&#39;s so damn cumbersome. I feel like I&#39;m using AI too much to help out and I&#39;m just not getting the appeal for it&#39;s popularity. Anybody have any tips for a .Net developer transitioning to React? &#32; submitted by &#32; /u/ProfDrd [link] &#32; [comments]",
      "published": "2026-04-21T01:01:26+00:00"
    },
    {
      "title": "Anyone done a long term contract role with Apple? Specifically for Frontend Engineering.",
      "url": "https://www.reddit.com/r/webdev/comments/1sqzc4m/anyone_done_a_long_term_contract_role_with_apple/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sqzc4m/anyone_done_a_long_term_contract_role_with_apple/",
      "author": "/u/skidmark_zuckerberg",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Was contacted today by a recruiter who works for an agency that handles contract roles through Apple. This is for a long term contract (+1 year) with high probability of being extended in 1 year increments, with a small chance to convert to FTE. I have a couple other interviews ongoing, and typically I do not entertain contract roles, but given it is a long term contract with Apple and there is a small chance to convert to FTE, seems worth it potentially. I had to pass a coding assessment to even get a phone screen with the recruiter, and that went well. I have another interview with the Hiring Director of this agency, and then after that I will have a 45 minute interview with a Hiring Manager directly from Apple. This will be a 45 minute Coder Pad interview. Specifically they are looking for someone with React and heaving charting experience, which I have both. But I am unsure what this interview with Apple will entail technically. Does anyone have any experience with this? I am waiting to speak to the recruitment agency Hiring Director to be able to ask more details. But in the meantime, figured I&#39;d see if anyone else had any experiences they could share. I do not practice Leet Code in the slightest, and I do not do interviews with LC being the expectation. So I am a bit worried it&#39;s waste of time, but I did find some other experiences through some Googling and it seems hit or miss on what they will ask. I believe this will center around React &amp; charting given that is what they are specifically looking for here. &#32; submitted by &#32; /u/skidmark_zuckerberg [link] &#32; [comments]",
      "published": "2026-04-20T19:07:43+00:00"
    },
    {
      "title": "How do I get a script of a background gradient shader like this?",
      "url": "https://i.redd.it/4g0idt5eqewg1.gif",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sr2gl4/how_do_i_get_a_script_of_a_background_gradient/",
      "author": "/u/LostCuriousMonkey",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;ve come across this gradient shader background. https://github.com/ruucm/shadergradient I&#39;ve seen it advertised as something you can use in Framer and there are galleries for installing it. But how do I get a script which I can use for my website that is not a Framer based website. I&#39;ve heard maybe Three.js but I&#39;m not all that familiar with it. Can anyone point me in the right direction? &#32; submitted by &#32; /u/LostCuriousMonkey [link] &#32; [comments]",
      "published": "2026-04-20T20:46:17+00:00"
    },
    {
      "title": "SPA with complex forms and server side calculations?",
      "url": "https://www.reddit.com/r/webdev/comments/1sqxqzr/spa_with_complex_forms_and_server_side/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sqxqzr/spa_with_complex_forms_and_server_side/",
      "author": "/u/Venisol",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "i worked on a lot of enterprise projects, but it was either mostly server driven with blazor razor or I was just on the backend api. I am now prototyping something to move a razor app at my new job to react. I am experienced with react and aspnet. Both our techs. I usually structure my API endpoints to be specific for the pages / components. We essentially have a dedicated API / BFF pattern. My question is how do I structure the backend endpoints for some calculations that have to happen server side, like prices, but we want to show the users while they are editing the form? Lets say I have a booking app for rooms. So if Im a customer and I am creating a booking in a form, that form needs certain data to populate dropdowns. So I need an endpoint like /bookings/create/form-data . Then while the user inputs stuff (with all the proper debouncing and cancelling), I need to preview the price (it can only be done server side), so I call another endpoint like /bookings/create/price . Then I need the actual endpoint to create the booking. /bookings/create Any thoughts or experiences with this? Overkill? Can I merge 1 and 2 and just be fine with constantly firing that one? Maybe it calculates more stuff like shipping length so its more like /bookings/create/preview-data ? Obviously (?) in the actual CreateBookingEndpoint the calculations for price and shipping run again and thats the source of truth. Just looking for some real life experiences and pitfalls. @ mods in experiencedDevs you guys are dumb. &quot;easily googlable&quot;. Get outta here man. I know ur reading this. &#32; submitted by &#32; /u/Venisol [link] &#32; [comments]",
      "published": "2026-04-20T18:19:55+00:00"
    },
    {
      "title": "Any api management gateway suggestions?",
      "url": "https://www.reddit.com/r/webdev/comments/1sqrthu/any_api_management_gateway_suggestions/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sqrthu/any_api_management_gateway_suggestions/",
      "author": "/u/Consistent_Tutor_597",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey guys, we are a pretty lean team. And planning to release a public api. With ofcourse usage tracking and self generated keys etc. Which was not so hard before. But I think now we might move towards metered billing (pay per request model) and I was thinking we are better off outsourcing it. As there&#39;s things that can go wrong. And we can afford it. Would be nice to get both prepaid/postpaid style features. All out of the box. Like buying and loading credits in a wallet. And then they spend it. Or paying end of the month based on usage. What might be the right managed solution for it. Sure we can build it. But would be better as its core and I don&#39;t wanna fuck it up. I was looking into zuplo and maybe kong. But open to if there&#39;s better suggestions. That are like super plug and play. But reliable. &#32; submitted by &#32; /u/Consistent_Tutor_597 [link] &#32; [comments]",
      "published": "2026-04-20T14:58:56+00:00"
    },
    {
      "title": "[Advice] Developing a News Website for a Group Project - What should I focus on regarding System Analysis and Architecture?",
      "url": "https://www.reddit.com/r/webdev/comments/1sqqyd5/advice_developing_a_news_website_for_a_group/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sqqyd5/advice_developing_a_news_website_for_a_group/",
      "author": "/u/LienXoEnthusiastic",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hi everyone, For a News platform, besides the basic CRUD for articles, what are the &quot;must-have&quot; technical considerations I should analyze before diving into the database design? I&#39;m particularly thinking about: Role-based Access Control (RBAC): Managing permissions for Guests, Subscribers, Editors, and Admins. Content Versioning: Is it worth modeling in a student project? Performance: Handling high traffic for breaking news (caching strategies). SEO-friendly URL structures and how they reflect in the Class Diagram. Any common pitfalls in News Site architecture that I should avoid during the modeling phase? Thanks! &#32; submitted by &#32; /u/LienXoEnthusiastic [link] &#32; [comments]",
      "published": "2026-04-20T14:27:24+00:00"
    },
    {
      "title": "Is there a tool where I can set up path-based proxy in browser for development purposes?",
      "url": "https://www.reddit.com/r/webdev/comments/1sqnb27/is_there_a_tool_where_i_can_set_up_pathbased/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sqnb27/is_there_a_tool_where_i_can_set_up_pathbased/",
      "author": "/u/peawyoyoyin",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hello r/webdev . TL:DR; looking for a quick, pleasant way to setup some proxy like similar to nginx for development only I work in a medium-sized corporate. My team owns a “support chat widget” React component exposed as an MFE package where the users render it on their page. (Users in this case are just other teams in my company, they own the actual pages on the site) The chat uses its own backend to do its stuff, so generally the users don’t need to care about how it works. On production, the chat’s backend is behind our reverse proxy, under the same domain (e.g. myawesomesite.com/api/chat/* goes to our API). We rely on the backend being on the same domain so our cookies get passed correctly. However, when running each individual page locally, their backend usually does not proxy /api/chat/* to our backend. Currently we do something like ( on the frontend code ) ``` let apiUrl; if (window.location.hostname.includes(‘localhost’)) { apiUrl = ‘’ } if (window.location.hostname.includes(‘stagingenv’) { apiUrl = ‘//chat-backend/‘ } ``` This is not so great because people run their pages under different setups and it doesn’t make sense for us to force them to follow our URL conventions. What’s a quick and easy way to set up a simple proxy that does this kind of routing easily? Preferably something like a chrome extension. EDIT: fixed formatting. Man I hate the mobile app &#32; submitted by &#32; /u/peawyoyoyin [link] &#32; [comments]",
      "published": "2026-04-20T12:03:39+00:00"
    },
    {
      "title": "Quiz softwares mobile Integration?",
      "url": "https://www.reddit.com/r/webdev/comments/1sqj467/quiz_softwares_mobile_integration/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sqj467/quiz_softwares_mobile_integration/",
      "author": "/u/tiltberger",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I am trying to find a quiz software that can be included via iframe. Most solutions just work desktop and tablet but are too small and hard to read mobile. Anybody got a solution for that? Thx &#32; submitted by &#32; /u/tiltberger [link] &#32; [comments]",
      "published": "2026-04-20T08:14:39+00:00"
    },
    {
      "title": "Professional web devs at big companies, how often are you redesigning the landing page",
      "url": "https://www.reddit.com/r/webdev/comments/1srdx99/professional_web_devs_at_big_companies_how_often/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srdx99/professional_web_devs_at_big_companies_how_often/",
      "author": "/u/Mediocre-Subject4867",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I ask as I constantly see companies like github, clickup etc redesigning their site almost monthly. Usually just rephrasing the same thing again and again to an unnecessary extent. Im sure they have A/B testing metrics to justify the changes, but it still seems a bit dumb &#32; submitted by &#32; /u/Mediocre-Subject4867 [link] &#32; [comments]",
      "published": "2026-04-21T04:58:48+00:00"
    },
    {
      "title": "Is it legal to open third-party websites in a WebView inside my app?",
      "url": "https://www.reddit.com/r/webdev/comments/1sr44ml/is_it_legal_to_open_thirdparty_websites_in_a/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sr44ml/is_it_legal_to_open_thirdparty_websites_in_a/",
      "author": "/u/im_nihar",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey everyone, I’m currently building a mobile app(React Native) and had a quick question about something I’ve seen in other apps. For example, apps like Reddit open external links inside an in-app browser (WebView) instead of redirecting you to Safari/Chrome. I’m thinking of doing something similar—opening a third-party website within my app when a user taps a link. From a legal and compliance perspective, is this generally allowed? Are there any restrictions around: Loading another website inside a WebView Deep linking to specific pages Using this in a commercial app I’m not modifying the content—just displaying the site as-is. Would appreciate any insights or things I should watch out for before implementing this. Thanks! &#32; submitted by &#32; /u/im_nihar [link] &#32; [comments]",
      "published": "2026-04-20T21:46:29+00:00"
    },
    {
      "title": "Exploring how location extraction from video content behaves across different formats",
      "url": "https://www.reddit.com/r/webdev/comments/1sqom4r/exploring_how_location_extraction_from_video/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sqom4r/exploring_how_location_extraction_from_video/",
      "author": "/u/Mofunny",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I’ve been experimenting with extracting structured location data from video content and noticed some interesting behavior patterns. The goal is to take a shared video link and identify real-world locations mentioned or shown, then normalize them into structured entities. High-level flow: Input: video URL Processing: LLM + lightweight vision-based analysis Output: extracted locations → normalized → geocoded What stands out is how inconsistent location signals are across different types of content: Explicitly named locations work reliably Visual-only locations are often missed or incorrectly inferred Vague references introduce ambiguity (“this beach in Thailand”) Multiple locations in short sequences create overlapping extraction conflicts Some outputs over-infer context and introduce false positives The more I test it, the more it looks like the problem isn’t extraction itself, but deciding how much inference is acceptable before results become unreliable. &#32; submitted by &#32; /u/Mofunny [link] &#32; [comments]",
      "published": "2026-04-20T12:59:54+00:00"
    },
    {
      "title": "Chrome Web Store review stuck at 10+ days - do I resubmit or keep waiting?",
      "url": "https://www.reddit.com/r/webdev/comments/1sqke2h/chrome_web_store_review_stuck_at_10_days_do_i/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sqke2h/chrome_web_store_review_stuck_at_10_days_do_i/",
      "author": "/u/its_faraaz888",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I am posting my first ever Chrome extension submission. It&#39;s been pending review for over 10 days with zero feedback. I have emailed support through the inbuilt support form three times with no reply. For anyone who&#39;s been through this, is it worth pulling out and resubmitting? Or does that reset the queue and make it worse? There are a few permissions on the listing might be adding to the time, but waiting 10+ days feels abnormal as everyone seems to suggests within 2-3 days, worst case scenario 1 week. Also has anyone found a way to actually reach a human at CWS support? Feels like I am shouting into the void &#32; submitted by &#32; /u/its_faraaz888 [link] &#32; [comments]",
      "published": "2026-04-20T09:32:02+00:00"
    },
    {
      "title": "Hourly vs. fixed pricing for web dev projects",
      "url": "https://www.reddit.com/r/webdev/comments/1sqoq5f/hourly_vs_fixed_pricing_for_web_dev_projects/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sqoq5f/hourly_vs_fixed_pricing_for_web_dev_projects/",
      "author": "/u/EffectiveLet2117",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "For website builds (think small business sites, 5-10 pages), do you find it better to charge hourly or use a flat project fee? • Hourly feels fair, but clients get nervous about “open-ended” costs. • Flat fees make clients happy, but I sometimes underprice when the scope creeps. How do you handle this balance? &#32; submitted by &#32; /u/EffectiveLet2117 [link] &#32; [comments]",
      "published": "2026-04-20T13:04:00+00:00"
    },
    {
      "title": "I built a zero-config CLI that instantly visualises your Next.js project as an interactive map: npx nextmap",
      "url": "https://i.redd.it/g67c32sgyawg1.gif",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sqiwqj/i_built_a_zeroconfig_cli_that_instantly/",
      "author": "/u/TheHganavak",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "https://www.npmjs.com/package/nextmap Quick summary: I kept losing track of routes in a larger Next.js project even with file-based routing. Route groups, parallel routes, intercepting routes, middleware matchers — the App Router is powerful but the file structure gets hard to reason about once you&#39;re past 30-40 routes. So I built nextmap. You run npx nextmap in a Next.js project and it opens a zoomable, interactive graph of every route in your browser. What it does: - Scans your app/ and pages/ directories (no compilation, no running Next.js) - Shows pages, API routes, middleware, and how they&#39;re connected - Detects HTTP methods from your route.ts exports (GET, POST, etc.) - Shows which routes are behind middleware and which aren&#39;t - Click any route to see the source code with syntax highlighting - Supports App Router, Pages Router, and hybrid projects - Exports to SVG for docs/wikis What it doesn&#39;t do: - Doesn&#39;t run or compile your app — purely reads the filesystem - Doesn&#39;t phone home — 100% local - Doesn&#39;t handle next.config rewrites/redirects yet (planned) I think it could be useful for onboarding (show someone the full picture of a project), code review (which middleware covers what?), and just keeping your own mental model straight. Let me know what you think 😊 &#32; submitted by &#32; /u/TheHganavak [link] &#32; [comments]",
      "published": "2026-04-20T08:02:29+00:00"
    },
    {
      "title": "How can i download subtitles from a server-hosted video",
      "url": "https://www.reddit.com/r/webdev/comments/1sr661b/how_can_i_download_subtitles_from_a_serverhosted/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sr661b/how_can_i_download_subtitles_from_a_serverhosted/",
      "author": "/u/Constant-Scallion-72",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hi i really don’t know much about this kind of thing. Please, I’m trying to download subtitles from a server-hosted video. Usually, I inspect the element and look for VTT or SRT files, but this time I can’t find anything. If anyone can help, I’d really appreciate it. Just to clarify, the subtitles are definitely not embedded in the video. If anyone can help, I’d really appreciate it. And it’s not a paid platform like Netflix or anything just a regular website. Here&#39;s the link of the episode i want the french subtitles...if someone can show me how i can do.... https://ww19.myasiantv.es/ep/the-scarecrow-2026-episode-1-english-subbed/ &#32; submitted by &#32; /u/Constant-Scallion-72 [link] &#32; [comments]",
      "published": "2026-04-20T23:07:17+00:00"
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
      "forks": 2404,
      "added_stars": 6700,
      "builtBy": [
        {
          "username": "Wei-Shaw",
          "href": "https://github.com/Wei-Shaw",
          "avatar": "https://avatars.githubusercontent.com/u/26101719"
        },
        {
          "username": "touwaeriol",
          "href": "https://github.com/touwaeriol",
          "avatar": "https://avatars.githubusercontent.com/u/52620633"
        },
        {
          "username": "IanShaw027",
          "href": "https://github.com/IanShaw027",
          "avatar": "https://avatars.githubusercontent.com/u/131567472"
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
      "forks": 5831,
      "added_stars": 5928,
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
      "forks": 238,
      "added_stars": 1318,
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
      "forks": 476,
      "added_stars": 998,
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
          "username": "Radheshg04",
          "href": "https://github.com/Radheshg04",
          "avatar": "https://avatars.githubusercontent.com/u/61974742"
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
      "forks": 348,
      "added_stars": 670,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3875,
      "added_stars": 1399,
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
      "forks": 1476,
      "added_stars": 1278,
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
      "author": "mostlygeek",
      "repo": "llama-swap",
      "avatar": "https://github.com/mostlygeek.png",
      "repo_link": "https://github.com/mostlygeek/llama-swap",
      "desc": "Reliable model swapping for any local OpenAI/Anthropic compatible server - llama.cpp, vllm, etc",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 267,
      "added_stars": 640,
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
      "author": "mudler",
      "repo": "LocalAI",
      "avatar": "https://github.com/mudler.png",
      "repo_link": "https://github.com/mudler/LocalAI",
      "desc": "LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3984,
      "added_stars": 1696,
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
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3023,
      "added_stars": 1411,
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
      "forks": 5220,
      "added_stars": 1428,
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
      "forks": 69,
      "added_stars": 623,
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
      "author": "gophish",
      "repo": "gophish",
      "avatar": "https://github.com/gophish.png",
      "repo_link": "https://github.com/gophish/gophish",
      "desc": "Open-Source Phishing Toolkit",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2871,
      "added_stars": 119,
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
      "author": "Gentleman-Programming",
      "repo": "engram",
      "avatar": "https://github.com/Gentleman-Programming.png",
      "repo_link": "https://github.com/Gentleman-Programming/engram",
      "desc": "Persistent memory system for AI coding agents. Agent-agnostic Go binary with SQLite + FTS5, MCP server, HTTP API, CLI, and TUI.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 291,
      "added_stars": 1060,
      "builtBy": [
        {
          "username": "Alan-TheGentleman",
          "href": "https://github.com/Alan-TheGentleman",
          "avatar": "https://avatars.githubusercontent.com/u/6935240"
        },
        {
          "username": "egdev6",
          "href": "https://github.com/egdev6",
          "avatar": "https://avatars.githubusercontent.com/u/18334564"
        },
        {
          "username": "Twinber",
          "href": "https://github.com/Twinber",
          "avatar": "https://avatars.githubusercontent.com/u/5513621"
        },
        {
          "username": "SantiagoBobrik",
          "href": "https://github.com/SantiagoBobrik",
          "avatar": "https://avatars.githubusercontent.com/u/43079605"
        },
        {
          "username": "sanurb",
          "href": "https://github.com/sanurb",
          "avatar": "https://avatars.githubusercontent.com/u/60886336"
        }
      ]
    },
    {
      "author": "guohuiyuan",
      "repo": "go-music-dl",
      "avatar": "https://github.com/guohuiyuan.png",
      "repo_link": "https://github.com/guohuiyuan/go-music-dl",
      "desc": "一个基于 Go 语言的全网音乐搜索与下载工具。支持 CLI 命令行与 Web 服务双模式，内置网易云、QQ、酷狗、Bilibili、汽水音乐等 10+ 个主流平台，支持多源并发搜索与无损音质解析。music-dl交流群：1074285005",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 195,
      "added_stars": 1711,
      "builtBy": [
        {
          "username": "guohuiyuan",
          "href": "https://github.com/guohuiyuan",
          "avatar": "https://avatars.githubusercontent.com/u/54976075"
        },
        {
          "username": "lianhong2758",
          "href": "https://github.com/lianhong2758",
          "avatar": "https://avatars.githubusercontent.com/u/108398856"
        }
      ]
    },
    {
      "author": "NoFxAiOS",
      "repo": "nofx",
      "avatar": "https://github.com/NoFxAiOS.png",
      "repo_link": "https://github.com/NoFxAiOS/nofx",
      "desc": "Your personal AI trading assistant. Any market. Any model. Pay with USDC, not API keys.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2965,
      "added_stars": 2477,
      "builtBy": [
        {
          "username": "tinkle-community",
          "href": "https://github.com/tinkle-community",
          "avatar": "https://avatars.githubusercontent.com/u/240652709"
        },
        {
          "username": "icyouo",
          "href": "https://github.com/icyouo",
          "avatar": "https://avatars.githubusercontent.com/u/228341237"
        },
        {
          "username": "the-dev-z",
          "href": "https://github.com/the-dev-z",
          "avatar": "https://avatars.githubusercontent.com/u/128128010"
        },
        {
          "username": "0xEmberZz",
          "href": "https://github.com/0xEmberZz",
          "avatar": "https://avatars.githubusercontent.com/u/15190419"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "kagent-dev",
      "repo": "kagent",
      "avatar": "https://github.com/kagent-dev.png",
      "repo_link": "https://github.com/kagent-dev/kagent",
      "desc": "Cloud Native Agentic AI | Discord: https://bit.ly/kagentdiscord",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 520,
      "added_stars": 235,
      "builtBy": [
        {
          "username": "EItanya",
          "href": "https://github.com/EItanya",
          "avatar": "https://avatars.githubusercontent.com/u/4185086"
        },
        {
          "username": "peterj",
          "href": "https://github.com/peterj",
          "avatar": "https://avatars.githubusercontent.com/u/11080940"
        },
        {
          "username": "ilackarms",
          "href": "https://github.com/ilackarms",
          "avatar": "https://avatars.githubusercontent.com/u/5974898"
        },
        {
          "username": "onematchfox",
          "href": "https://github.com/onematchfox",
          "avatar": "https://avatars.githubusercontent.com/u/878612"
        }
      ]
    },
    {
      "author": "openimsdk",
      "repo": "open-im-server",
      "avatar": "https://github.com/openimsdk.png",
      "repo_link": "https://github.com/openimsdk/open-im-server",
      "desc": "IM Chat OpenClaw",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2872,
      "added_stars": 311,
      "builtBy": [
        {
          "username": "cubxxw",
          "href": "https://github.com/cubxxw",
          "avatar": "https://avatars.githubusercontent.com/u/86140903"
        },
        {
          "username": "skiffer-git",
          "href": "https://github.com/skiffer-git",
          "avatar": "https://avatars.githubusercontent.com/u/72860476"
        },
        {
          "username": "FGadvancer",
          "href": "https://github.com/FGadvancer",
          "avatar": "https://avatars.githubusercontent.com/u/46924906"
        },
        {
          "username": "wangchuxiao-dev",
          "href": "https://github.com/wangchuxiao-dev",
          "avatar": "https://avatars.githubusercontent.com/u/58578570"
        },
        {
          "username": "withchao",
          "href": "https://github.com/withchao",
          "avatar": "https://avatars.githubusercontent.com/u/48119764"
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
      "forks": 721,
      "added_stars": 943,
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
      "forks": 15217,
      "added_stars": 95651,
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
      "forks": 3581,
      "added_stars": 8635,
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
      "author": "mvanhorn",
      "repo": "last30days-skill",
      "avatar": "https://github.com/mvanhorn.png",
      "repo_link": "https://github.com/mvanhorn/last30days-skill",
      "desc": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1909,
      "added_stars": 18684,
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
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8186,
      "added_stars": 31390,
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
      "author": "OpenBMB",
      "repo": "VoxCPM",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/VoxCPM",
      "desc": "VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and True-to-Life Cloning",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1798,
      "added_stars": 8975,
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
      "author": "microsoft",
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4680,
      "added_stars": 16883,
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
      "forks": 7380,
      "added_stars": 22626,
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "\"DeepTutor: Agent-Native Personalized Learning Assistant\"",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2779,
      "added_stars": 9732,
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
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3702,
      "added_stars": 9938,
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
      "author": "hacksider",
      "repo": "Deep-Live-Cam",
      "avatar": "https://github.com/hacksider.png",
      "repo_link": "https://github.com/hacksider/Deep-Live-Cam",
      "desc": "real time face swap and one-click video deepfake with only a single image",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13302,
      "added_stars": 11503,
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
          "username": "vic4key",
          "href": "https://github.com/vic4key",
          "avatar": "https://avatars.githubusercontent.com/u/5672864"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "laurigates",
          "href": "https://github.com/laurigates",
          "avatar": "https://avatars.githubusercontent.com/u/13014001"
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
      "forks": 797,
      "added_stars": 3466,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1777,
      "added_stars": 8194,
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
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9414,
      "added_stars": 18545,
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
      "author": "FujiwaraChoki",
      "repo": "MoneyPrinterV2",
      "avatar": "https://github.com/FujiwaraChoki.png",
      "repo_link": "https://github.com/FujiwaraChoki/MoneyPrinterV2",
      "desc": "Automate the process of making money online.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3212,
      "added_stars": 13882,
      "builtBy": [
        {
          "username": "FujiwaraChoki",
          "href": "https://github.com/FujiwaraChoki",
          "avatar": "https://avatars.githubusercontent.com/u/78088687"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "supperfreddo",
          "href": "https://github.com/supperfreddo",
          "avatar": "https://avatars.githubusercontent.com/u/9703184"
        },
        {
          "username": "SaroAntonelloLovito",
          "href": "https://github.com/SaroAntonelloLovito",
          "avatar": "https://avatars.githubusercontent.com/u/91974562"
        },
        {
          "username": "TomyDiNero",
          "href": "https://github.com/TomyDiNero",
          "avatar": "https://avatars.githubusercontent.com/u/151256852"
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
      "forks": 1592,
      "added_stars": 6074,
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
      "author": "lsdefine",
      "repo": "GenericAgent",
      "avatar": "https://github.com/lsdefine.png",
      "repo_link": "https://github.com/lsdefine/GenericAgent",
      "desc": "Self-evolving agent: grows skill tree from 3.3K-line seed, achieving full system control with 6x less token consumption",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 554,
      "added_stars": 4183,
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
          "username": "JinyiHan99",
          "href": "https://github.com/JinyiHan99",
          "avatar": "https://avatars.githubusercontent.com/u/154297799"
        },
        {
          "username": "shenhao-stu",
          "href": "https://github.com/shenhao-stu",
          "avatar": "https://avatars.githubusercontent.com/u/65658684"
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
      "forks": 9834,
      "added_stars": 7362,
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
      "author": "plastic-labs",
      "repo": "honcho",
      "avatar": "https://github.com/plastic-labs.png",
      "repo_link": "https://github.com/plastic-labs/honcho",
      "desc": "Memory library for building stateful agents",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 311,
      "added_stars": 1991,
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
      "forks": 3308,
      "added_stars": 10705,
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
      "forks": 981,
      "added_stars": 4287,
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
          "username": "zanussbaum",
          "href": "https://github.com/zanussbaum",
          "avatar": "https://avatars.githubusercontent.com/u/33707069"
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
      "title": "Fax Office 1987 8 film cameras simulated in a single HTML file",
      "url": "https://faxoffice1987.com",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-04-20T18:52:36.000Z"
    },
    {
      "title": "WebBlackbox - A flight recorder and time-travel debugger for web apps",
      "url": "https://github.com/webllm/webblackbox",
      "upvotes": "1",
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
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-555a",
      "tags": "top7, discuss",
      "reactions": 29,
      "comments": 5,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Why Do I Keep Killing My Side Projects?",
      "description": "Two projects, two deaths. At some point, you need to stop blaming circumstances and start asking harder questions.",
      "url": "https://dev.to/eayurt/why-do-i-keep-killing-my-side-projects-31eh",
      "tags": "sideprojects, career, productivity",
      "reactions": 14,
      "comments": 3,
      "reading_time": 4,
      "author": "eayurt"
    },
    {
      "title": "I Built a BaaS Where AI Agents Can Onboard Themselves",
      "description": "Vibebase gives AI agents identity, email, and service access without handing them raw API keys. Agents start autonomously and humans can claim them later.",
      "url": "https://dev.to/steveemmerich/i-built-a-baas-where-ai-agents-can-onboard-themselves-11nn",
      "tags": "ai, agents, cloudflare, startup",
      "reactions": 3,
      "comments": 0,
      "reading_time": 3,
      "author": "steveemmerich"
    },
    {
      "title": "What are your goals for the week? #175",
      "description": "What are your goals for the week?    What are you building this week? What do you want to...",
      "url": "https://dev.to/jarvisscript/what-are-your-goals-for-the-week-175-324a",
      "tags": "discuss, motivation",
      "reactions": 3,
      "comments": 6,
      "reading_time": 2,
      "author": "jarvisscript"
    },
    {
      "title": "What was your win this week?!",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-28fb",
      "tags": "discuss, weeklyretro",
      "reactions": 62,
      "comments": 39,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Watch Google Cloud NEXT Live Right Here on DEV!",
      "description": "Big things are happening at Google Cloud NEXT, and you don't have to go anywhere to catch the action....",
      "url": "https://dev.to/devteam/watch-google-cloud-next-live-right-here-on-dev-2g6h",
      "tags": "googlecloud, google, ai, cloud",
      "reactions": 19,
      "comments": 2,
      "reading_time": 2,
      "author": "thepracticaldev"
    },
    {
      "title": "Multi-Agent A2A with the Agent Development Kit(ADK), Azure ACI, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build Multi-Agent...",
      "url": "https://dev.to/gde/multi-agent-a2a-with-the-agent-development-kitadk-azure-aci-and-gemini-cli-1k84",
      "tags": "googleadk, multiagent, gemini, a2a",
      "reactions": 5,
      "comments": 0,
      "reading_time": 13,
      "author": "xbill"
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
      "title": "I got tired of copy-pasting the same table code, so I built a library",
      "description": "Every Angular project I've worked on has a table. Usually more than one. And every single time I end...",
      "url": "https://dev.to/zonaibbokhari/i-got-tired-of-copy-pasting-the-same-table-code-so-i-built-a-library-2c3l",
      "tags": "angular, typescript, webdev, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "zonaibbokhari"
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
      "title": "Command Execution via Drag-and-Drop in Terminal Emulators",
      "url": "https://sdushantha.github.io/post/drop-it-like-its-hot",
      "score": 2,
      "comments": 0,
      "tags": [
        "security"
      ],
      "id": "mfy7oi"
    },
    {
      "title": "256 Lines or Less: Test Case Minimization",
      "url": "https://matklad.github.io/2026/04/20/test-case-minimization.html",
      "score": 3,
      "comments": 0,
      "tags": [
        "testing",
        "zig"
      ],
      "id": "eu5n2j"
    },
    {
      "title": "good-egg: Trust scoring for GitHub PR authors based on contribution history",
      "url": "https://github.com/2ndSetAI/good-egg",
      "score": 5,
      "comments": 3,
      "tags": [
        "programming"
      ],
      "id": "axllpn"
    },
    {
      "title": "Roll your own Neovim statusline",
      "url": "https://jacobnscott.com/posts/nvim-statusline/",
      "score": 2,
      "comments": 0,
      "tags": [
        "vim"
      ],
      "id": "fipxg1"
    },
    {
      "title": "Signal Shot: a project to verify the Signal protocol and its Rust implementation using Lean",
      "url": "https://leodemoura.github.io/blog/2026-4-20-signal-shot-the-platform-is-ready/",
      "score": 8,
      "comments": 0,
      "tags": [
        "cryptography",
        "formalmethods",
        "security",
        "vibecoding"
      ],
      "id": "jnl6e7"
    },
    {
      "title": "Meet Git-Kepo: The Kaypoh Git Detective Who Joined My AI Family",
      "url": "https://cslev.medium.com/meet-git-kepo-the-kaypoh-git-detective-who-joined-my-ai-family-38fb0d43d787",
      "score": 1,
      "comments": 0,
      "tags": [
        "vcs",
        "vibecoding"
      ],
      "id": "td2qy9"
    },
    {
      "title": "Jujutsu megamerges for fun and profit",
      "url": "https://isaaccorbrey.com/notes/jujutsu-megamerges-for-fun-and-profit",
      "score": 31,
      "comments": 1,
      "tags": [
        "vcs"
      ],
      "id": "etrtmp"
    },
    {
      "title": "FrontierSWE",
      "url": "https://www.frontierswe.com/",
      "score": 2,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "xzo0u5"
    },
    {
      "title": "Stalwart v0.16: A New Foundation",
      "url": "https://stalw.art/blog/stalwart-0-16",
      "score": 13,
      "comments": 2,
      "tags": [
        "release"
      ],
      "id": "47iclr"
    },
    {
      "title": "SPAM - A Software PAckage Manager utility",
      "url": "https://codeberg.org/aol/spam",
      "score": 2,
      "comments": 0,
      "tags": [
        "python",
        "rust",
        "unix"
      ],
      "id": "wts8yp"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "schappim",
      "descendants": 787,
      "id": 47840219,
      "kids": [
        47840300,
        47840659,
        47840691,
        47840974,
        47841644,
        47840474,
        47840495,
        47840385,
        47842227,
        47840552,
        47840728,
        47845240,
        47845112,
        47841815,
        47840344,
        47841774,
        47841882,
        47841420,
        47845310,
        47840394,
        47840814,
        47840998,
        47844743,
        47840326,
        47840932,
        47844930,
        47842224,
        47840688,
        47844063,
        47843009,
        47843721,
        47841983,
        47842893,
        47841179,
        47841699,
        47844428,
        47840847,
        47841468,
        47841361,
        47843039,
        47840393,
        47844622,
        47840496,
        47844441,
        47843468,
        47842358,
        47841134,
        47844067,
        47841733,
        47840321,
        47841377,
        47843827,
        47840803,
        47840491,
        47841916,
        47842049,
        47842619,
        47843514,
        47840345,
        47840265,
        47842382,
        47844984,
        47842405,
        47840342,
        47841402,
        47842435,
        47841554,
        47843820,
        47840511,
        47840402,
        47841790,
        47842070,
        47841246,
        47842182,
        47844498,
        47842177,
        47842548,
        47843236,
        47840378,
        47844019,
        47840590,
        47844711,
        47844746,
        47840490,
        47843424,
        47840334,
        47840784,
        47841418,
        47841053,
        47840966,
        47841714,
        47844340,
        47841429,
        47841414,
        47841095,
        47843696,
        47840886,
        47840798,
        47840289,
        47843165,
        47841054,
        47840695,
        47842520,
        47842029,
        47841776,
        47840828,
        47840445,
        47841519,
        47840593,
        47840900,
        47840690,
        47840325,
        47840636,
        47842440,
        47840868,
        47840315,
        47840416,
        47842539,
        47842424,
        47840493,
        47840281,
        47840538,
        47841309
      ],
      "score": 1607,
      "time": 1776717572,
      "title": "John Ternus to become Apple CEO",
      "type": "story",
      "url": "https://www.apple.com/newsroom/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/"
    },
    {
      "by": "jmsflknr",
      "descendants": 35,
      "id": 47844269,
      "kids": [
        47845084,
        47845270,
        47845023,
        47844933,
        47845272,
        47844802,
        47845089,
        47845403,
        47845021,
        47844811,
        47844950,
        47844874,
        47844852,
        47845072,
        47844703
      ],
      "score": 84,
      "time": 1776742983,
      "title": "Anthropic says OpenClaw-style Claude CLI usage is allowed again",
      "type": "story",
      "url": "https://docs.openclaw.ai/providers/anthropic"
    },
    {
      "by": "bishwasbh",
      "descendants": 33,
      "id": 47844431,
      "kids": [
        47844973,
        47844935,
        47844778,
        47844714,
        47844708,
        47844825,
        47844875,
        47845005,
        47845150,
        47844833,
        47844908,
        47844896,
        47845077,
        47845400
      ],
      "score": 96,
      "time": 1776744732,
      "title": "A Roblox cheat and one AI tool brought down Vercel's platform",
      "type": "story",
      "url": "https://webmatrices.com/post/how-a-roblox-cheat-and-one-ai-tool-brought-down-vercel-s-entire-platform"
    },
    {
      "by": "sanity",
      "descendants": 10,
      "id": 47835411,
      "kids": [
        47845409,
        47845130,
        47844999,
        47845101,
        47844822,
        47845004,
        47845262,
        47844770,
        47844373
      ],
      "score": 36,
      "text": "Eight years ago, my then-fiancée and I decided to get a prenup, so we hired a local mediator. The meetings were useful, but I felt there was no systematic process to produce a final agreement. So I started to think about this problem, and after a bit of research, I discovered the Nash bargaining solution.<p>Yet if John Nash had solved negotiation in the 1950s, why did it seem like nobody was using it today? The issue was that Nash&#x27;s solution required that each party to the negotiation provide a &quot;utility function&quot;, which could take a set of deal terms and produce a utility number. But even experts have trouble producing such functions for non-trivial negotiations.<p>A few years passed and LLMs appeared, and about a year ago I realized that while LLMs aren’t good at directly producing utility estimates, they are good at doing comparisons, and this can be used to estimate utilities of draft agreements.<p>This is the basis for Mediator.ai, which I soft-launched over the weekend. Be interviewed by an LLM to capture your preferences and then invite the other party or parties to do the same. These preferences are then used as the fitness function for a genetic algorithm to find an agreement all parties are likely to agree to.<p>An article with more technical detail: <a href=\"https:&#x2F;&#x2F;mediator.ai&#x2F;blog&#x2F;ai-negotiation-nash-bargaining&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;mediator.ai&#x2F;blog&#x2F;ai-negotiation-nash-bargaining&#x2F;</a>",
      "time": 1776697624,
      "title": "Show HN: Mediator.ai – Using Nash bargaining and LLMs to systematize fairness",
      "type": "story",
      "url": "https://mediator.ai/"
    },
    {
      "by": "pizlonator",
      "descendants": 17,
      "id": 47843194,
      "kids": [
        47845313,
        47845137,
        47843623,
        47844254,
        47844089,
        47843819
      ],
      "score": 130,
      "time": 1776732487,
      "title": "How to make a fast dynamic language interpreter",
      "type": "story",
      "url": "https://zef-lang.dev/implementation"
    },
    {
      "by": "lagniappe",
      "descendants": 4,
      "id": 47844539,
      "kids": [
        47845384,
        47845191,
        47844943
      ],
      "score": 23,
      "time": 1776745890,
      "title": "The Beauty of Bonsai Styles",
      "type": "story",
      "url": "https://longwoodgardens.org/blog/2023-05-17/beauty-bonsai-styles"
    },
    {
      "by": "mfiguiere",
      "descendants": 320,
      "id": 47834565,
      "kids": [
        47836251,
        47839388,
        47835603,
        47835483,
        47845311,
        47837133,
        47842839,
        47834921,
        47836403,
        47839756,
        47834968,
        47835661,
        47840827,
        47844847,
        47835109,
        47837378,
        47843393,
        47836764,
        47838265,
        47837600,
        47840129,
        47838599,
        47835894,
        47835897,
        47844270,
        47844026,
        47845211,
        47835523,
        47838236,
        47838391,
        47837701
      ],
      "score": 600,
      "time": 1776693934,
      "title": "Qwen3.6-Max-Preview: Smarter, Sharper, Still Evolving",
      "type": "story",
      "url": "https://qwen.ai/blog?id=qwen3.6-max-preview"
    },
    {
      "by": "slicktux",
      "descendants": 8,
      "id": 47797457,
      "kids": [
        47844418,
        47845039,
        47845148,
        47844953,
        47844585,
        47844722
      ],
      "score": 43,
      "time": 1776363928,
      "title": "How a subsea cable is repaired",
      "type": "story",
      "url": "https://www.onesteppower.com/post/subsea-cable-repair"
    },
    {
      "by": "icorbrey",
      "descendants": 85,
      "id": 47841129,
      "kids": [
        47844573,
        47844265,
        47842203,
        47843766,
        47844969,
        47843180,
        47844503,
        47841857,
        47843292,
        47844129,
        47841922,
        47843561,
        47843727,
        47844734,
        47841811,
        47843787,
        47843376,
        47842983,
        47841634,
        47841905,
        47842278,
        47841190,
        47842689,
        47842482,
        47842869,
        47842934
      ],
      "score": 208,
      "time": 1776720730,
      "title": "Jujutsu megamerges for fun and profit",
      "type": "story",
      "url": "https://isaaccorbrey.com/notes/jujutsu-megamerges-for-fun-and-profit"
    },
    {
      "by": "Alifatisk",
      "descendants": 20,
      "id": 47838703,
      "kids": [
        47841735,
        47839857,
        47842129,
        47839883,
        47839796,
        47842205,
        47843184,
        47844798,
        47840057
      ],
      "score": 229,
      "time": 1776710393,
      "title": "Kimi vendor verifier – verify accuracy of inference providers",
      "type": "story",
      "url": "https://www.kimi.com/blog/kimi-vendor-verifier"
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
      "title": "An interactive explainer of how audio fingerprinting lets Shazam identify a song in seconds",
      "url": "https://perthirtysix.com/how-the-heck-does-shazam-work",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqrv8p/an_interactive_explainer_of_how_audio/",
      "author": "/u/Shriracha",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Shriracha [link] &#32; [comments]",
      "published": "2026-04-20T15:00:38+00:00"
    },
    {
      "title": "Modern Frontend Complexity: essential or accidental?",
      "url": "https://binaryigor.com/modern-frontend-complexity.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqmvt5/modern_frontend_complexity_essential_or_accidental/",
      "author": "/u/BinaryIgor",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Given that the current frontend ecosystem complexity is rivaling Tower of Babel, I asked: Can we start from scratch and figure out a much simpler approach, given how browsers have evolved in recent years? Have a read to find out ;) &#32; submitted by &#32; /u/BinaryIgor [link] &#32; [comments]",
      "published": "2026-04-20T11:44:41+00:00"
    },
    {
      "title": "Why Crystal, 10 Years Later: Performance and Joy",
      "url": "https://serdardogruyol.com/why-crystal-10-years-later-performance-and-joy",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqpdgi/why_crystal_10_years_later_performance_and_joy/",
      "author": "/u/sdogruyol",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Hi everyone, I wrote the original &quot;Why Crystal?&quot; blog post back in 2015 when Crystal was just v0.9.1. Ten years and many versions later, I am revisiting that post to analyze the road to v1.20. If you are interested in how a language matures from a syntax experiment to a high performance standard, this one is for you. &#32; submitted by &#32; /u/sdogruyol [link] &#32; [comments]",
      "published": "2026-04-20T13:29:27+00:00"
    },
    {
      "title": "Zero-day ‘BlueHammer’ exploit stayed live for ~2 weeks before the patch.",
      "url": "https://www.windowscentral.com/microsoft/microsoft-security-response-center-bluehammer-exploit",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqigk7/zeroday_bluehammer_exploit_stayed_live_for_2/",
      "author": "/u/Digitalunicon",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Digitalunicon [link] &#32; [comments]",
      "published": "2026-04-20T07:35:39+00:00"
    },
    {
      "title": "Stripe’s payments APIs: The first 10 years(2020)",
      "url": "https://stripe.dev/blog/payment-api-design",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqiq7e/stripes_payments_apis_the_first_10_years2020/",
      "author": "/u/Successful_Bowl2564",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Successful_Bowl2564 [link] &#32; [comments]",
      "published": "2026-04-20T07:51:48+00:00"
    },
    {
      "title": "ggsql: A grammar of graphics for SQL",
      "url": "https://opensource.posit.co/blog/2026-04-20_ggsql_alpha_release/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqx0u6/ggsql_a_grammar_of_graphics_for_sql/",
      "author": "/u/Dear-Economics-315",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Dear-Economics-315 [link] &#32; [comments]",
      "published": "2026-04-20T17:58:01+00:00"
    },
    {
      "title": "How To Make a Fast Dynamic Language Interpreter",
      "url": "https://zef-lang.dev/implementation",
      "permalink": "https://www.reddit.com/r/programming/comments/1src2an/how_to_make_a_fast_dynamic_language_interpreter/",
      "author": "/u/mttd",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/mttd [link] &#32; [comments]",
      "published": "2026-04-21T03:25:46+00:00"
    },
    {
      "title": "Streaming My Hard Drive to the World",
      "url": "https://youtu.be/Qmds7-mwCMg",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqwm1a/streaming_my_hard_drive_to_the_world/",
      "author": "/u/PulseBeat_02",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/PulseBeat_02 [link] &#32; [comments]",
      "published": "2026-04-20T17:45:01+00:00"
    },
    {
      "title": "Theseus, a static Windows emulator",
      "url": "https://neugierig.org/software/blog/2026/04/theseus.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1srccyp/theseus_a_static_windows_emulator/",
      "author": "/u/mttd",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/mttd [link] &#32; [comments]",
      "published": "2026-04-21T03:40:02+00:00"
    },
    {
      "title": "What if database branching was easy?",
      "url": "https://xata.io/blog/what-if-database-branching-was-easy",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqtiev/what_if_database_branching_was_easy/",
      "author": "/u/Dear-Economics-315",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Dear-Economics-315 [link] &#32; [comments]",
      "published": "2026-04-20T15:59:39+00:00"
    },
    {
      "title": "“shutting down the goldmine”",
      "url": "https://eed3si9n.com/shutting-down-the-goldmine/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqoaih/shutting_down_the_goldmine/",
      "author": "/u/adam-dabrowski",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/adam-dabrowski [link] &#32; [comments]",
      "published": "2026-04-20T12:46:21+00:00"
    },
    {
      "title": "A leaky analogy for incident management",
      "url": "https://gavinb.site/blog/2026-04-18-a-leaky-analogy-for-incident-management/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqtqr6/a_leaky_analogy_for_incident_management/",
      "author": "/u/TheGUnit",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/TheGUnit [link] &#32; [comments]",
      "published": "2026-04-20T16:07:09+00:00"
    },
    {
      "title": "State of the Art of Java in 2026 • Ben Evans",
      "url": "https://youtu.be/v9Pq69Y_yqM?list=PLEx5khR4g7PLg2vxafJTTGzeBbmzjsIz6",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqqx50/state_of_the_art_of_java_in_2026_ben_evans/",
      "author": "/u/goto-con",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/goto-con [link] &#32; [comments]",
      "published": "2026-04-20T14:26:09+00:00"
    },
    {
      "title": "The Power of the Pointer: How Memory Management Is Still Relevant Today",
      "url": "https://programmers.fyi/the-power-of-the-pointer-how-memory-management-is-still-relevant-today",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqqs51/the_power_of_the_pointer_how_memory_management_is/",
      "author": "/u/derjanni",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/derjanni [link] &#32; [comments]",
      "published": "2026-04-20T14:21:03+00:00"
    },
    {
      "title": "Introducing DSA Panicle - Visualize linked list, trees, and many more.",
      "url": "http://dsapanicle.com",
      "permalink": "https://www.reddit.com/r/programming/comments/1srdh9v/introducing_dsa_panicle_visualize_linked_list/",
      "author": "/u/rebechi007",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "TLDR: Visit dsapanicle.com It is a structured DSA reference for people who want to actually understand patterns, not just grind problems blindly. I would strongly recommend to you goto the website and explore all 150+ visualizations and for different problems from different data structures. What makes it different: Pattern-first , not problem-first: problems are grouped by technique Step-by-step visualizations: pointer movement, node states, algorithm phases, all animated and synchronized with the actual code No ads. No paywall. No email signup . Pure content! Currently covers: Linked Lists (basics, one-pass, two-pointer, three-pointer) Binary Trees (traversal, path/height/views, tree modification, post-order, two-trees) We have planned thousands of problems and visualization in our 2026 roadmap. - Fellow engineer &#32; submitted by &#32; /u/rebechi007 [link] &#32; [comments]",
      "published": "2026-04-21T04:35:51+00:00"
    },
    {
      "title": "Mobile breaks differently",
      "url": "https://blog.measure.sh/p/mobile-breaks-differently",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqhtw7/mobile_breaks_differently/",
      "author": "/u/gandharva-kr",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/gandharva-kr [link] &#32; [comments]",
      "published": "2026-04-20T06:59:25+00:00"
    },
    {
      "title": "How Computers Work: Explained from First Principles",
      "url": "https://sushantdhiman.dev/how-computers-work-explained-from/",
      "permalink": "https://www.reddit.com/r/programming/comments/1srdqj8/how_computers_work_explained_from_first_principles/",
      "author": "/u/Sushant098123",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Sushant098123 [link] &#32; [comments]",
      "published": "2026-04-21T04:49:08+00:00"
    },
    {
      "title": "Yoda Principle for better integrations",
      "url": "https://event-driven.io/en/yoda_principle_in_command_design/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqp7qm/yoda_principle_for_better_integrations/",
      "author": "/u/Adventurous-Salt8514",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Adventurous-Salt8514 [link] &#32; [comments]",
      "published": "2026-04-20T13:23:09+00:00"
    },
    {
      "title": "Algebra of Contexts",
      "url": "https://neurons-me.github.io/.me/npm/typedocs/Algebra-of-Contexts.html",
      "permalink": "https://www.reddit.com/r/programming/comments/1srd8vv/algebra_of_contexts/",
      "author": "/u/Royal_Increase_6966",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Set Law Applied to Context `.me` thinks in spaces . Not schemas. Not tables. Not object classes. A space is a region of meaning ( context) that can contain other spaces. Everything else follows from set laws. Core Rule A space can contain spaces. space ⊇ subspace ⊇ subspace ⊇ subspace Examples: - `profile` is a space - `profile.contact` is a subspace of `profile` - `wallet.hidden` is a subspace of `wallet` - `friends[age &gt; 18]` is a selected subspace of `friends` In .me , paths are how we navigate nested spaces: me.profile.name(&quot;Abella&quot;); me.profile.contact.email(&quot; [ abella@neurons.me ](mailto: abella@neurons.me ) &quot;); me.wallet[&quot;_&quot;](&quot;vault-key&quot;); me.wallet.hidden.note(&quot;private&quot;); Namespace A namespace is a named space. Examples: - `self` - `kernel` - `ana` - `family.photos` In protocol form: me://self:read/profile me://kernel:export/snapshot me://family.photos:read/2026.vacation.cover So: - `namespace` names the space - `selector` states the operation - `path` identifies the subspace Set View We can describe a space by the sets that act on it: - `A` = audience set - `T` = topology set - `C` = capability set - `P` = path / subspace set These are not different ontologies. They are different views of the same space. Space Predicates The common adjectives are just set statements: - public space : the readable audience is broadly open - private space : the audience is tightly bounded, often `{self}` - shared space : the audience contains more than one principal - encrypted space : readable membership is enforced cryptographically - replicated space : the topology has multiple carriers Examples: - `wallet` may be a private encrypted space - `family.photos` may be a shared replicated encrypted space - `profile.public` may be a public space No new noun is required beyond `space`. Refinement More specific spaces are subsets of less specific spaces. profile.contact.email ⊆ profile.contact ⊆ profile wallet.hidden ⊆ wallet This same law appears across the system: - deeper path -&gt; smaller semantic region - tighter audience -&gt; smaller readable set - tighter context -&gt; smaller resolution set - tighter capability -&gt; smaller action set Encryption As Membership Encryption does not create a different universe. It creates a stricter readable membership over a space. Examples: - a private space may have `A = {self}` - a shared encrypted space may have `A = {me ∪ wife}` The topology can be large while the readable audience stays small: T = {home-daemon, office-daemon, phone} A = {me, wife} That means the same space may be replicated widely without becoming readable widely. Why This Matters This gives `.me` one ontology instead of many.- `.me` declares, creates, and navigates spaces - `cleaker` records, routes, and transports spaces - `monad.ai` serves, resolves, and persists spaces The system stays unified because everything still reduces to: space inside space inside space And all of it follows set law. &#32; submitted by &#32; /u/Royal_Increase_6966 [link] &#32; [comments]",
      "published": "2026-04-21T04:23:34+00:00"
    },
    {
      "title": "Architectural Principles as AI Guardrails",
      "url": "https://glenpierce.github.io/gitfolio/#architectural-principles-as-ai-guardrails",
      "permalink": "https://www.reddit.com/r/programming/comments/1srdigm/architectural_principles_as_ai_guardrails/",
      "author": "/u/glenpiercev",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Architectural discipline is becoming the main safeguard against AI-assisted systems drifting into brittle, unmaintainable complexity. Code elegance matters less than predictability under regeneration. &#32; submitted by &#32; /u/glenpiercev [link] &#32; [comments]",
      "published": "2026-04-21T04:37:34+00:00"
    },
    {
      "title": "Tokenized Tokens",
      "url": "https://fly.io/blog/tokenized-tokens/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqxczw/tokenized_tokens/",
      "author": "/u/self",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Tokenizer: HTTP proxy that injects 3rd party credentials into requests &#32; submitted by &#32; /u/self [link] &#32; [comments]",
      "published": "2026-04-20T18:07:56+00:00"
    },
    {
      "title": "Game design is simple, actually",
      "url": "https://www.raphkoster.com/2025/11/03/game-design-is-simple-actually/",
      "permalink": "https://www.reddit.com/r/programming/comments/1sqiiar/game_design_is_simple_actually/",
      "author": "/u/fagnerbrack",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/fagnerbrack [link] &#32; [comments]",
      "published": "2026-04-20T07:38:36+00:00"
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
      "title": "Why Do I Keep Killing My Side Projects?",
      "description": "Two projects, two deaths. At some point, you need to stop blaming circumstances and start asking harder questions.",
      "url": "https://dev.to/eayurt/why-do-i-keep-killing-my-side-projects-31eh",
      "tags": "sideprojects, career, productivity",
      "reactions": 14,
      "comments": 3,
      "reading_time": 4,
      "author": "eayurt"
    },
    {
      "title": "Vibe Coding, Fundamentals, and the New Job Market Reality",
      "description": "Reality of Today in the Job Market   I have gone through a lot over the last month....",
      "url": "https://dev.to/elshadhu/vibe-coding-fundamentals-and-the-new-job-market-reality-53f1",
      "tags": "ai, career, vibecoding, webdev",
      "reactions": 12,
      "comments": 6,
      "reading_time": 4,
      "author": "elshadhu"
    },
    {
      "title": "Built a 5k usd MRR app with AI but still needed a developer",
      "description": "You see it everywhere you turn:   \"I built this using just AI and im making 10K USD MRR\"  \"Just got...",
      "url": "https://dev.to/chocoscoding/built-a-5k-usd-mrr-app-with-ai-but-still-needed-a-developer-2k8p",
      "tags": "ai, career, discuss, saas",
      "reactions": 5,
      "comments": 2,
      "reading_time": 4,
      "author": "chocoscoding"
    },
    {
      "title": "The Dyslexic Mind Loop: Why Over-Preparation is a Fast Track to Burnout",
      "description": "Picture this: You are sitting in a system architecture meeting. A senior engineer or a manager brings...",
      "url": "https://dev.to/chadders13/the-dyslexic-mind-loop-why-over-preparation-is-a-fast-track-to-burnout-23eo",
      "tags": "ai, programming, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "chadders13"
    },
    {
      "title": "The 5 Reasons Good Ideas Fail Before They Ship",
      "description": "After 30 years in IT — the last 15 as a project manager — I've watched a lot of good ideas die. Not...",
      "url": "https://dev.to/paull_dodemaide_1d220541e/the-5-reasons-good-ideas-fail-before-they-ship-38d6",
      "tags": "startup, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "paull_dodemaide_1d220541e"
    },
    {
      "title": "Developer's Guide to Eliminating Back Pain at Your Desk",
      "description": "I spent three years ignoring my lower back. Then one morning I couldn't sit down to open my laptop....",
      "url": "https://dev.to/the_devzenteam_769cdf22/developers-guide-to-eliminating-back-pain-at-your-desk-ee3",
      "tags": "mentalhealth, productivity, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "the_devzenteam_769cdf22"
    },
    {
      "title": "Developer Resume with No Experience: What Actually Works in 2026",
      "description": "Breaking into development without professional experience is harder than it was — but very doable....",
      "url": "https://dev.to/swapnilnakate7/developer-resume-with-no-experience-what-actually-works-in-2026-1i1n",
      "tags": "beginners, career, codenewbie, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "swapnilnakate7"
    },
    {
      "title": "A Developer’s Lesson on Feedback",
      "description": "I built my first React Native MVP for a startup pitch.  I was proud of it… until the feedback started...",
      "url": "https://dev.to/shakiran_nannyombi_b0bf41/a-developers-lesson-on-feedback-2291",
      "tags": "softwaredevelopment, career, productivity, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "shakiran_nannyombi_b0bf41"
    },
    {
      "title": "AWS AI Practitioner vs AWS Cloud Practitioner: What’s the Difference?",
      "description": "In a market where cloud and AI are no longer optional—but foundational—the choice of certification is...",
      "url": "https://dev.to/datta_kharad_3fd1383b5036/aws-ai-practitioner-vs-aws-cloud-practitioner-whats-the-difference-2888",
      "tags": "ai, aws, beginners, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "datta_kharad_3fd1383b5036"
    },
    {
      "title": "Azure AI Engineer vs Data Scientist: Understanding the Differences",
      "description": "In today’s AI-driven economy, roles are evolving faster than most job descriptions can keep up. Two...",
      "url": "https://dev.to/datta_kharad_3fd1383b5036/azure-ai-engineer-vs-data-scientist-understanding-the-differences-3i3b",
      "tags": "ai, azure, career, datascience",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "datta_kharad_3fd1383b5036"
    }
  ]
}
```

