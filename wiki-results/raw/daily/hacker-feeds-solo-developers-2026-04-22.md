# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-22 06:55:34 UTC

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
      "forks": 5518,
      "added_stars": 10356,
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
      "desc": "The open-source voice synthesis studio",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2585,
      "added_stars": 5198,
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
      "forks": 2304,
      "added_stars": 6223,
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
      "author": "coleam00",
      "repo": "Archon",
      "avatar": "https://github.com/coleam00.png",
      "repo_link": "https://github.com/coleam00/Archon",
      "desc": "The first open-source harness builder for AI coding. Make AI coding deterministic and repeatable.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2980,
      "added_stars": 1322,
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
      "forks": 662,
      "added_stars": 713,
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
      "author": "resend",
      "repo": "react-email",
      "avatar": "https://github.com/resend.png",
      "repo_link": "https://github.com/resend/react-email",
      "desc": "💌 Build and send emails using React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1011,
      "added_stars": 461,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1904,
      "added_stars": 1387,
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
      "author": "onlook-dev",
      "repo": "onlook",
      "avatar": "https://github.com/onlook-dev.png",
      "repo_link": "https://github.com/onlook-dev/onlook",
      "desc": "The Cursor for Designers • An Open-Source AI-First Design tool • Visually build, style, and edit your React App with AI",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1959,
      "added_stars": 487,
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
      "author": "sparkjsdev",
      "repo": "spark",
      "avatar": "https://github.com/sparkjsdev.png",
      "repo_link": "https://github.com/sparkjsdev/spark",
      "desc": "✨ An advanced 3D Gaussian Splatting renderer for THREE.js",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 262,
      "added_stars": 605,
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
      "forks": 5255,
      "added_stars": 898,
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
      "author": "open-metadata",
      "repo": "OpenMetadata",
      "avatar": "https://github.com/open-metadata.png",
      "repo_link": "https://github.com/open-metadata/OpenMetadata",
      "desc": "OpenMetadata is a unified metadata platform for data discovery, data observability, and data governance powered by a central metadata repository, in-depth column level lineage, and seamless team collaboration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1967,
      "added_stars": 945,
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
      "author": "microsoft",
      "repo": "Ontology-Playground",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/Ontology-Playground",
      "desc": "Free, open-source web app for learning about ontologies and Microsoft Fabric IQ. Explore a catalogue of pre-built ontologies, design your own visually, export as RDF/XML, and share interactive diagrams. Zero backend, fully static.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 80,
      "added_stars": 93,
      "builtBy": [
        {
          "username": "videlalvaro",
          "href": "https://github.com/videlalvaro",
          "avatar": "https://avatars.githubusercontent.com/u/30834"
        },
        {
          "username": "crgarcia12",
          "href": "https://github.com/crgarcia12",
          "avatar": "https://avatars.githubusercontent.com/u/27244028"
        },
        {
          "username": "pankaj-bind",
          "href": "https://github.com/pankaj-bind",
          "avatar": "https://avatars.githubusercontent.com/u/73558583"
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
      "title": "CSS image-set() just became the hero we needed",
      "url": "https://i.redd.it/17lve33hhiwg1.png",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sriifh/css_imageset_just_became_the_hero_we_needed/",
      "author": "/u/wanoo21",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Has been widely available since September 2023 &#32; submitted by &#32; /u/wanoo21 [link] &#32; [comments]",
      "published": "2026-04-21T09:21:45+00:00"
    },
    {
      "title": "Clients sending me AI snippets",
      "url": "https://www.reddit.com/r/webdev/comments/1sryuw2/clients_sending_me_ai_snippets/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sryuw2/clients_sending_me_ai_snippets/",
      "author": "/u/Tom_Ace2",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;m a self-employed web developer for over 25 years and lately I keep getting clients sending me snippets of scripts generated by AI, telling me how to do stuff. Like when I tell them something they want can&#39;t be done in a certain way, they will say: &quot;It&#39;s actually quite easy, I asked AI and here&#39;s a script that will do that, just put that in.&quot; (The script obviously works only half and there&#39;s nothing in there I haven&#39;t thought of) Is it me or is that wildly inappropriate? (I don&#39;t tell them how to do their job, do I?) I&#39;ve never had this happen before and frankly, it&#39;s pissing me off. Does this happen to you as well, and how do you deal with it? &#32; submitted by &#32; /u/Tom_Ace2 [link] &#32; [comments]",
      "published": "2026-04-21T19:57:36+00:00"
    },
    {
      "title": "Why are there so many big companies with websites that are just unbelievably glitchy?",
      "url": "https://www.reddit.com/r/webdev/comments/1srrz4i/why_are_there_so_many_big_companies_with_websites/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srrz4i/why_are_there_so_many_big_companies_with_websites/",
      "author": "/u/darnoc11",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Examples: Big apparel brands like Nike, adidas, carhart, etc. News websites/articles I can’t think of the other ones off the top of my head but you get the point. Why do so many of them absolutely suck? There’s been times that I have been looking for new shoes or clothes and quit out of annoyance because the website sucked. I imagine this costs companies a lot in sales. It can’t be that hard for them to fix if so many smaller companies have websites that work perfectly fine. Is it because of the traffic? &#32; submitted by &#32; /u/darnoc11 [link] &#32; [comments]",
      "published": "2026-04-21T16:00:03+00:00"
    },
    {
      "title": "I finally calculated my actual hourly rate on a project… wasn’t even close",
      "url": "https://www.reddit.com/r/webdev/comments/1srhedq/i_finally_calculated_my_actual_hourly_rate_on_a/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srhedq/i_finally_calculated_my_actual_hourly_rate_on_a/",
      "author": "/u/uwt101",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I don’t really track hours properly on smaller projects. I just estimate, quote, and go. Out of curiosity I went back to one of them and tried to piece the time together. Quoted around 20h. Pretty sure it ended up somewhere around 40–45h. So instead of ~$100/hr it was closer to ~$45–50/hr. Didn’t expect it to be that far off. What’s weird is I remember all the extra work. A revision here An extra section there A “quick change” near the end But none of it felt like a big deal at the time. It just felt like normal progress. Only after adding it up I realized how far off it was. Do you actually track this stuff while working, or just figure it out after? &#32; submitted by &#32; /u/uwt101 [link] &#32; [comments]",
      "published": "2026-04-21T08:15:47+00:00"
    },
    {
      "title": "Just did my first proper dependency audit on a codebase I inherited and I don't know where to start fixing it",
      "url": "https://www.reddit.com/r/webdev/comments/1srivda/just_did_my_first_proper_dependency_audit_on_a/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srivda/just_did_my_first_proper_dependency_audit_on_a/",
      "author": "/u/Similar_Cantaloupe29",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "The direct dependencies are manageable, around 80 packages, most reasonably maintained. The transitive tree is 1,400 packages. Dozens haven&#39;t had a commit in three or more years. A handful are effectively abandoned with open CVEs and no fix available because the maintainer disappeared. The compliance review is in six weeks and part of the ask is producing an SBOM. Which is fine in theory but when your scanner is flagging everything at the same severity level with no context about what&#39;s reachable in your application versus just sitting somewhere in the dependency tree, the SBOM just becomes a very official looking list of problems you can&#39;t fix in time. The software supply chain security guidance I keep finding online assumes you&#39;re building with good hygiene from the start. Not that you inherited someone else&#39;s four-year-old mess a month before an audit. How do you even approach prioritization in this situation, or even produce an SBOM under these conditions? &#32; submitted by &#32; /u/Similar_Cantaloupe29 [link] &#32; [comments]",
      "published": "2026-04-21T09:43:19+00:00"
    },
    {
      "title": "Lame web dev scam. Careful out there",
      "url": "https://i.redd.it/3av6dwjp4kwg1.jpeg",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srq23a/lame_web_dev_scam_careful_out_there/",
      "author": "/u/Made4uo",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I’m a web developer with years of experience, but I almost let my guard down with this one because it started through my own website&#39;s contact form. I wanted to share this here so others don&#39;t fall for it. A &quot;client&quot; named Nacho Perez reached out via my contact form asking for a website for a new Spanish restaurant in Houston called &quot;Levante Restaurant and Bar&quot; opening in June. After I replied to the initial inquiry, I got a long email with the following classic scam markers: The &quot;Consultant&quot;: They claim a &quot;private project consultant&quot; will provide all the logos, images, and text. (This is the person they will eventually ask you to pay using &quot;extra&quot; funds from a fake check). The Budget: A suspiciously high and broad range of $5,000 – $20,000 . The Reference Site: They linked milunatapasbar.com as a reference but said they want theirs &quot;more refined.&quot; Urgency: Needs to be live by the second week of June. The Phrasing: &quot;I strongly trust that you will have the website running...&quot; and weird punctuation (spaces before commas). I think, how the scam works. If I had proceeded, they would have sent a fraudulent check for more than the agreed amount, like $15,000. They would then ask me to &quot;do them a favor&quot; and wire $5,000 of that to their &quot;consultant&quot; for the logo/assets. The original check would eventually bounce, leaving me responsible for the $5,000 sent out of my own pocket. As a dev for years, this is the most low-effort attempt I&#39;ve seen. If you&#39;re going to try to social engineer a professional, maybe don&#39;t use a &#39;private project consultant&#39; as a middleman for a logo that probably costs $50 on Fiverr 0/10 for creativity. DO NOT USE AI to write a scam script lol. I’ve been doing this for years and haven&#39;t seen them use contact forms this aggressively before. Stay sharp, everyone! &#32; submitted by &#32; /u/Made4uo [link] &#32; [comments]",
      "published": "2026-04-21T14:55:40+00:00"
    },
    {
      "title": "Anthropic’s “Mythos” AI Model got accessed by unauthorized users",
      "url": "https://thecybersecguru.com/news/anthropic-mythos-unauthorized-access/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssbkri/anthropics_mythos_ai_model_got_accessed_by/",
      "author": "/u/raptorhunter22",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Anthropic&#39;s new cybersecurity-focused Al, Mythos, was reportedly accessed by unauthorized users through a third-party vendor environment (Mercor) shortly after internal launch. The model is designed to identify and exploit software vulnerabilities, raising concerns about what happens if tools like this leak beyond controlled access. The unauthenticated access has been confirmed by Anthropic. &#32; submitted by &#32; /u/raptorhunter22 [link] &#32; [comments]",
      "published": "2026-04-22T04:52:00+00:00"
    },
    {
      "title": "Front-end web dev being backed into a full stack and dev-ops corner",
      "url": "https://www.reddit.com/r/webdev/comments/1ss9xsl/frontend_web_dev_being_backed_into_a_full_stack/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ss9xsl/frontend_web_dev_being_backed_into_a_full_stack/",
      "author": "/u/defenistrat3d",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hello. 11 yoe. I live and breath FE. To be honest I&#39;ve been full stack for a while and it&#39;s fine. Might even like it to some extent. I loath dev-ops though and now I&#39;m expected to be an expert and teach others. such is life. But maybe I just haven&#39;t found a good set of learning material. kubernetes, AWS, Terraform and harness seem to be the main stack I need to learn. Anyone know a good source? Just udemy? Any other FE devs that have been backed into a dev-ops corner? What was your experience? Fat promotion? Made it easier to job hop? With the economy and profession what it is I feel a bit trapped. Though I can&#39;t deny I&#39;ve had it good for a long time. Sorta feels like I need to pay the bill so to speak. &#32; submitted by &#32; /u/defenistrat3d [link] &#32; [comments]",
      "published": "2026-04-22T03:31:42+00:00"
    },
    {
      "title": "How to find decision makers at mid-market companies?",
      "url": "https://www.reddit.com/r/webdev/comments/1ss2lr6/how_to_find_decision_makers_at_midmarket_companies/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ss2lr6/how_to_find_decision_makers_at_midmarket_companies/",
      "author": "/u/alyyyseeit",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "So we&#39;ve been dealing with this lately. We sell to mid-market companies (50-500 employees) and half the time the person who responds to our outreach isn&#39;t the actual buyer. They&#39;re just tasked with researching options. I&#39;ve tried the usual stuff - asking &quot;who else would be involved in this decision&quot; but people get cagey. Looking at org charts helps but titles are so inflated these days. VP of Innovation could be a one person team or could run a 50 person department. What&#39;s working for you all? I&#39;ve been testing different approaches to identify buyer contacts early in the process. Sometimes I&#39;ll reach out to multiple people in parallel - the director, the VP, maybe someone in procurement. But that can backfire if they talk to each other and it looks like you&#39;re going around someone. The other challenge is when there&#39;s a buying committee. Enterprise deals especially. You think you&#39;ve got the main buyer locked in, then legal or IT or finance shows up last minute with veto power. Happened to me twice last quarter. I&#39;ve been looking at Apo͏llo and Pro͏speo for better contact data to map out org structures before reaching out. Anyone have a process that actually works for figuring out who holds the budget? &#32; submitted by &#32; /u/alyyyseeit [link] &#32; [comments]",
      "published": "2026-04-21T22:14:04+00:00"
    },
    {
      "title": "CAPTCHA",
      "url": "https://www.reddit.com/r/webdev/comments/1srpfhq/captcha/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srpfhq/captcha/",
      "author": "/u/Confident_Meat2189",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I look after a not-for-profit &#39;hobbyist&#39; educational website with very little/no regular income but lots of in-depth &#39;rich&#39; content built up over 15 years. The website is being hammered at the moment by bots/crawlers with up to 700,000 page access requests a day. I&#39;ve blocked a lot of the traffic through the hard coding in the .htaccess file but I am also looking at CAPTCHA options as well. For this level of traffic compared to income Google reCAPTCHA and hCaptcha look very expensive. Would Cloudflare Turnstile work here? Any other ideas as to how to handle this problem? &#32; submitted by &#32; /u/Confident_Meat2189 [link] &#32; [comments]",
      "published": "2026-04-21T14:32:42+00:00"
    },
    {
      "title": "CheerpJ 4.3 - Run unmodified Java applications in the browser",
      "url": "https://labs.leaningtech.com/blog/cheerpj-4.3",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srl9pz/cheerpj_43_run_unmodified_java_applications_in/",
      "author": "/u/alexp_lt",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/alexp_lt [link] &#32; [comments]",
      "published": "2026-04-21T11:47:35+00:00"
    },
    {
      "title": "How are apps triggering an App Store overlay sheet inside Safari without redirecting to the App Store app?",
      "url": "https://www.reddit.com/r/webdev/comments/1srk2kh/how_are_apps_triggering_an_app_store_overlay/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srk2kh/how_are_apps_triggering_an_app_store_overlay/",
      "author": "/u/Available-Zombie6290",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Seen this in a few mobile sites like Evernote, where tapping a &quot;Get App&quot; CTA on mobile web shows a native-looking bottom sheet with the App Store card - user taps Get, downloads the app, and lands back on the browser page. I&#39;ve tried: Direct https://apps.apple.com URL → redirects to App Store app Smart App Banner meta tag → works but it&#39;s a passive top banner, not button-triggered Is this an App Clip? A SKOverlay somehow bridged to web? The behaviour I want is that the user does not leaves the web page by redirection, is able to download the app via tha bottom sheet and close the sheet and app installs in the background. App store is not opened in the whole process at least in the foreground. Would love to know if anyone has actually shipped this or knows what&#39;s happening under the hood. &#32; submitted by &#32; /u/Available-Zombie6290 [link] &#32; [comments]",
      "published": "2026-04-21T10:49:05+00:00"
    },
    {
      "title": "Recommendation for an API CMS for a personal blog",
      "url": "https://www.reddit.com/r/webdev/comments/1srh6fh/recommendation_for_an_api_cms_for_a_personal_blog/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srh6fh/recommendation_for_an_api_cms_for_a_personal_blog/",
      "author": "/u/jonbristow",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I wanna start a personal website about my profession (cybersecurity). I dont want to handle server updates or RAM or CPU, so I will prefer a hosted solution like framer/wix or even managed wordpress. It has to accept content management, scheduling, posting, drafting via API as I want to automate some parts of it. But are there any new, more modern solutions available? Last time I ran a blog it was with wordpress and I&#39;ve been out of the webdev game for years. &#32; submitted by &#32; /u/jonbristow [link] &#32; [comments]",
      "published": "2026-04-21T08:02:26+00:00"
    },
    {
      "title": "Promotion of your apps",
      "url": "https://www.reddit.com/r/webdev/comments/1sryv9x/promotion_of_your_apps/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sryv9x/promotion_of_your_apps/",
      "author": "/u/Haswell19",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hi, I&#39;m building an app. I will ask you, how do you promote it and gain users ? My friends aren&#39;t into the niche I&#39;m. So what&#39;s your plan ? Did you pay for ads and how much time to get your new users ? Really thanks &#32; submitted by &#32; /u/Haswell19 [link] &#32; [comments]",
      "published": "2026-04-21T19:57:59+00:00"
    },
    {
      "title": "Need help/info for a webapp",
      "url": "https://www.reddit.com/r/webdev/comments/1srqi4l/need_helpinfo_for_a_webapp/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srqi4l/need_helpinfo_for_a_webapp/",
      "author": "/u/AiidenAya",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey ! For a while now, i&#39;ve been looking in website making and feel like using a mix of laravel and react. The thing is, i&#39;m pretty inexperimented and only dabbled with pretty basic php (build as a MVC app) with a side of bootstrap. Would you have tips to use such languages ? Could a mix of laravel and bootstrap do the work ? This is pretty simple content to show off and all, and i feel like the use of the bootstrap components could be of good use :) Thanks for the reply ! &#32; submitted by &#32; /u/AiidenAya [link] &#32; [comments]",
      "published": "2026-04-21T15:10:28+00:00"
    },
    {
      "title": "Thinking about migrating our law firm website from Webflow to code - looking for experiences and suggestions",
      "url": "https://www.reddit.com/r/webdev/comments/1srpmp9/thinking_about_migrating_our_law_firm_website/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srpmp9/thinking_about_migrating_our_law_firm_website/",
      "author": "/u/akimmik",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hey, I&#39;m running marketing and AI initiatives at a small tech law firm and I&#39;ve been going back and forth on whether to migrate our website away from Webflow to a proper code-based stack. Our site is essentially static with no real backend and no dynamic content served server-side. It&#39;s a relatively straightforward marketing site for a law firm. Why I&#39;m considering the move Honestly, I&#39;m not very experienced with designing in Webflow and we need to make some fairly substantial structural changes to the site. Every time I try to do something meaningful I hit friction. Either the visual editor doesn&#39;t behave the way I expect, or the underlying structure fights me. I have a feeling I could move significantly faster just writing the thing with Claude Code doing the heavy lifting. There&#39;s also a learning angle. I think I&#39;d get a lot of value from actually understanding the codebase rather than working through Webflow&#39;s abstraction layer. And once it&#39;s in code, maintaining and evolving it with Claude Code feels much more sustainable. Stack I&#39;m thinking about Something like Next.js or Astro for the frontend, Tailwind for styling, deployed on Vercel (i know it got hacked) or Netlify. Open to suggestions if you&#39;d go differently for a simple static marketing site. Questions Has anyone made this kind of move from Webflow to code and was it worth it? Any regrets? What about the exported code - is it enough? I&#39;m particularly curious about the Webflow MCP for anyone who has used it. Does it actually work smoothly with Claude Code or does it feel slow and clunky in practice? I want to understand whether MCP tooling makes the Webflow side more competitive before I commit to leaving. Any workflow tips for running a mostly static marketing site with Claude Code as your primary dev tool? Appreciate any experiences or honest opinions. The goal is to move fast and not get stuck. &#32; submitted by &#32; /u/akimmik [link] &#32; [comments]",
      "published": "2026-04-21T14:40:23+00:00"
    },
    {
      "title": "What are some fun ways to update a card viewer to be more interesting?",
      "url": "https://www.reddit.com/r/webdev/comments/1ss3xf1/what_are_some_fun_ways_to_update_a_card_viewer_to/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ss3xf1/what_are_some_fun_ways_to_update_a_card_viewer_to/",
      "author": "/u/NoClownsOnMyStation",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I’m working on a portfolio project for an animal adoption site and need ideas on how to make a card view a lot more interesting without it being to run of the mill. I can make a large listing of cards that you scroll through with filters but I&#39;m curious what more experienced devs do to make it really pop out. I&#39;ve listed some of things in particular I&#39;m looking to improve on below to get this from going off the rails. Things I’m looking for: Better layouts than a normal card grid Ways to make some cards stand out Good use of filters or categories Ideas that make browsing feel more fun or engaging Examples of sites or apps that do this well (This would be a huge help) How would you handle a design with lots of cards without it feeling repetitive? &#32; submitted by &#32; /u/NoClownsOnMyStation [link] &#32; [comments]",
      "published": "2026-04-21T23:07:01+00:00"
    },
    {
      "title": "What's actually new in JavaScript (and what's coming next)",
      "url": "https://neciudan.dev/whats-new-in-javascript",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srz6ba/whats_actually_new_in_javascript_and_whats_coming/",
      "author": "/u/creasta29",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "wrote an article on what ecmascript is, who decides whats what and whats live in 2025 and coming up in ES2026 Let me know what you think &#32; submitted by &#32; /u/creasta29 [link] &#32; [comments]",
      "published": "2026-04-21T20:08:55+00:00"
    },
    {
      "title": "How can you permanently lock the browser bar?",
      "url": "https://www.reddit.com/r/webdev/comments/1sruexf/how_can_you_permanently_lock_the_browser_bar/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1sruexf/how_can_you_permanently_lock_the_browser_bar/",
      "author": "/u/MostNetwork1931",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "This has always been a major issue. Safari on iOS offers the ability to shrink its navigation bar, which can literally break your app’s UX. Visually, it becomes less immersive and quite annoying. What I want is simple: I don’t care whether the bar is large or small (I actually prefer small), but I want it to stop shifting around. So how can this problem be solved once and for all? A classic hack is to set the body to `position: fixed`, apply `overflow: hidden` on `html` and `body` with `height: 100%`, and then put the main content in a container with `overflow-y: auto` and `height: 100%`. However, I don’t know of any serious website that actually uses this approach. What are the risks of locking the body like this? Is there a more native solution, or other better alternatives that don’t require JavaScript? &#32; submitted by &#32; /u/MostNetwork1931 [link] &#32; [comments]",
      "published": "2026-04-21T17:23:19+00:00"
    },
    {
      "title": "Trying to auto-detect whether a codebase is \"legacy\" or \"modern\" , my heuristic approach feels hacky, looking for ideas",
      "url": "https://www.reddit.com/r/webdev/comments/1srszfo/trying_to_autodetect_whether_a_codebase_is_legacy/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srszfo/trying_to_autodetect_whether_a_codebase_is_legacy/",
      "author": "/u/jselby81989",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "We recently had to do a quick tech assessment on a codebase from a company we were evaluating. The question was basically &quot;how old is this stuff and how much work would migration be?&quot; Manually reading through the repo took forever, so I tried automating the detection. My approach is embarrassingly simple, scan source files for keywords and count how many &quot;classic&quot; vs &quot;modern&quot; indicators show up: ERA_INDICATORS = { &quot;classic&quot;: [ &quot;angularjs&quot;, &quot;backbone&quot;, &quot;ember&quot;, &quot;knockout&quot;, &quot;jquery&quot;, &quot;prototype&quot;, &quot;mootools&quot;, &quot;python2&quot;, &quot;python3.5&quot;, &quot;python3.6&quot;, &quot;gulp&quot;, &quot;grunt&quot; ], &quot;modern&quot;: [ &quot;react18&quot;, &quot;react19&quot;, &quot;vue3&quot;, &quot;svelte&quot;, &quot;next13&quot;, &quot;next14&quot;, &quot;vite&quot;, &quot;python3.9&quot;, &quot;python3.10&quot;, &quot;python3.11&quot;, &quot;python3.12&quot;, &quot;es2020&quot;, &quot;es2021&quot;, &quot;es2022&quot;, &quot;typescript4&quot;, &quot;typescript5&quot; ] } # ...then literally just: classic_count = sum(1 for indicator in ERA_INDICATORS[&quot;classic&quot;] if indicator.lower() in all_content.lower()) modern_count = sum(1 for indicator in ERA_INDICATORS[&quot;modern&quot;] if indicator.lower() in all_content.lower()) if classic_count &gt; modern_count: era = &quot;classic&quot; elif modern_count &gt; classic_count: era = &quot;modern&quot; else: era = &quot;mixed&quot; I&#39;m not sure this is the right approach at all, but it kinda works. Tested on 4 internal projects so far: got 3 right, 1 wrong. The wrong one was a Flask app that used very modern patterns (type hints everywhere, async routes, pydantic models) but Flask itself is tagged as &quot;classic&quot; in my framework list , had to reclassify it to &quot;modern&quot; manually. Some known problems: - The classic vs modern count is super naive. It literally just counts keyword occurrences, no weighting. - Mixed codebases are the worst case. A React app that still has jQuery mixed in will often show as &quot;modern&quot; because react-related keywords outnumber the single jquery reference, even if half the actual code is still jQuery spaghetti. - I&#39;m reading the first 10KB of each file which is... not great. Big files might have modern imports at the top but legacy code in the body. It also detects frameworks and architecture patterns (microservices vs monolith, MVC, etc.) by looking for characteristic files and directory structures. That part actually works better than the era detection. Been using Verdent to work through the detection logic , having multiple agents review the keyword matching and suggest edge cases helped me catch a bunch of false positives I would&#39;ve missed. The plan mode is especially useful for thinking through the heuristic approach before writing code. Curious how others handle this. Is there a better signal than keyword counting? Been thinking about checking dependency versions directly from package.json / requirements.txt instead, at least version numbers are concrete. &#32; submitted by &#32; /u/jselby81989 [link] &#32; [comments]",
      "published": "2026-04-21T16:34:16+00:00"
    },
    {
      "title": "design qa workflows",
      "url": "https://www.reddit.com/r/webdev/comments/1ss6yyi/design_qa_workflows/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ss6yyi/design_qa_workflows/",
      "author": "/u/Expert-Stress-9190",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "recently I had a design lead wanting me to do design QA for a product using Google Doc to list out and share with devs, I&#39;m a designer and if its painful for me I know its even more for devs. interested to know other peoples workflow in QA&#39;ing in general, idk if you have had something as bad as a google doc or worse ha &#32; submitted by &#32; /u/Expert-Stress-9190 [link] &#32; [comments]",
      "published": "2026-04-22T01:18:52+00:00"
    },
    {
      "title": "Introducing Universal Deploy: deploy Vite apps anywhere",
      "url": "https://vike.dev/blog/universal-deploy",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srt10r/introducing_universal_deploy_deploy_vite_apps/",
      "author": "/u/brillout",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "Hi 👋 I&#39;m the co-creator of Universal Deploy. It&#39;s a new infrastructure to deploy Vite apps anywhere with zero configuration. Questions welcome! &#32; submitted by &#32; /u/brillout [link] &#32; [comments]",
      "published": "2026-04-21T16:35:52+00:00"
    },
    {
      "title": "Server components broke my auth flow and I didn't realize for 2 weeks",
      "url": "https://www.reddit.com/r/webdev/comments/1ssc1pd/server_components_broke_my_auth_flow_and_i_didnt/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ssc1pd/server_components_broke_my_auth_flow_and_i_didnt/",
      "author": "/u/emmettvance",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "migrated a next.js 14 app to full rsc. auth middleware was checking tokens on server side, rendering worked fine, shipped to prod. two weeks later- users reported random logouts. dug into it and a client component was calling an api route that expected serverside session context but the session object wasnt crossing the line. request would succeed but session state would be stale. the fix was obvious once spotted- move session logic into a server action and pass serialized state down. but the error was silent... no hydration warnings no build errors just the wrong runtime behavior. lesson learned: server/client boundaries in rsc aren&#39;t just about &quot;use client&quot; directives. anything stateful (auth, db connections, env vars) needs explicit data contracts at every crossing point. treat the boundary like an api, never assume context travels automatically. Would love to hear anyone facing or had something similar to this &#32; submitted by &#32; /u/emmettvance [link] &#32; [comments]",
      "published": "2026-04-22T05:16:19+00:00"
    },
    {
      "title": "In demand web building tools?",
      "url": "https://www.reddit.com/r/webdev/comments/1ss15h7/in_demand_web_building_tools/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1ss15h7/in_demand_web_building_tools/",
      "author": "/u/aliveinternettheory1",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I’m trying to get started on Fiverr as a web builder. I’ve had some success with hard coded projects but I want to explore no code tools. Which ones would you say are the most in demand among clients? Or you’ve had most success in finding clients for? Webflow, Bubble.io, Framer, Wix, Squarespace, Shopify? I want to pick one or two and focus my efforts on them instead of trying all of them and succeeding at none. &#32; submitted by &#32; /u/aliveinternettheory1 [link] &#32; [comments]",
      "published": "2026-04-21T21:18:48+00:00"
    },
    {
      "title": "Anyone else locked out of Convex? \"Authentication denied. Please contact your administrator.",
      "url": "https://www.reddit.com/r/webdev/comments/1srsm8g/anyone_else_locked_out_of_convex_authentication/",
      "permalink": "https://www.reddit.com/r/webdev/comments/1srsm8g/anyone_else_locked_out_of_convex_authentication/",
      "author": "/u/Codeblix_Ltd",
      "subreddit": "webdev",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;m experiencing a complete lockout on the Convex dashboard today. Every login attempt gives me: &#39;Authentication denied. Please contact your administrator.&#39; I&#39;ve tried multiple accounts, cleared cookies, and tried different browsers, but the error persists across the board. Since the r/ConvexDev sub is private, I’m hoping someone here has run into this or knows if there&#39;s a wider issue with their auth provider today. Is it just me, or is there a known IP-block or outage happening? Any help appreciated! https://preview.redd.it/h8cz4uzgkkwg1.png?width=633&amp;format=png&amp;auto=webp&amp;s=c0e991e71df010fb14931c0b923b4be53a89bf23 &#32; submitted by &#32; /u/Codeblix_Ltd [link] &#32; [comments]",
      "published": "2026-04-21T16:21:55+00:00"
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
      "forks": 2472,
      "added_stars": 6822,
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
      "forks": 5889,
      "added_stars": 5970,
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
      "forks": 241,
      "added_stars": 1348,
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
      "forks": 483,
      "added_stars": 1076,
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
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3881,
      "added_stars": 1420,
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
      "forks": 271,
      "added_stars": 670,
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
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 349,
      "added_stars": 646,
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
      "author": "googleapis",
      "repo": "mcp-toolbox",
      "avatar": "https://github.com/googleapis.png",
      "repo_link": "https://github.com/googleapis/mcp-toolbox",
      "desc": "MCP Toolbox for Databases is an open source MCP server for databases.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1476,
      "added_stars": 1297,
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
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3037,
      "added_stars": 1482,
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
      "author": "mudler",
      "repo": "LocalAI",
      "avatar": "https://github.com/mudler.png",
      "repo_link": "https://github.com/mudler/LocalAI",
      "desc": "LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3992,
      "added_stars": 1678,
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
      "author": "masterking32",
      "repo": "MasterDnsVPN",
      "avatar": "https://github.com/masterking32.png",
      "repo_link": "https://github.com/masterking32/MasterDnsVPN",
      "desc": "Advanced DNS tunneling VPN for censorship bypass, optimized beyond DNSTT and SlipStream with low-overhead ARQ, resolver load balancing, high packet-loss stability and speed.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 71,
      "added_stars": 646,
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
      "author": "XTLS",
      "repo": "Xray-core",
      "avatar": "https://github.com/XTLS.png",
      "repo_link": "https://github.com/XTLS/Xray-core",
      "desc": "Xray, Penetrates Everything. Also the best v2ray-core. Where the magic happens. An open platform for various uses.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5231,
      "added_stars": 1694,
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
      "author": "henrygd",
      "repo": "beszel",
      "avatar": "https://github.com/henrygd.png",
      "repo_link": "https://github.com/henrygd/beszel",
      "desc": "Lightweight server monitoring with historical data, docker stats, and alerts.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 725,
      "added_stars": 971,
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
      "author": "gophish",
      "repo": "gophish",
      "avatar": "https://github.com/gophish.png",
      "repo_link": "https://github.com/gophish/gophish",
      "desc": "Open-Source Phishing Toolkit",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2872,
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
      "author": "syncthing",
      "repo": "syncthing",
      "avatar": "https://github.com/syncthing.png",
      "repo_link": "https://github.com/syncthing/syncthing",
      "desc": "Open Source Continuous File Synchronization",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5084,
      "added_stars": 1725,
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
      "author": "kagent-dev",
      "repo": "kagent",
      "avatar": "https://github.com/kagent-dev.png",
      "repo_link": "https://github.com/kagent-dev/kagent",
      "desc": "Cloud Native Agentic AI | Discord: https://bit.ly/kagentdiscord",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 522,
      "added_stars": 237,
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
        },
        {
          "username": "supreme-gg-gg",
          "href": "https://github.com/supreme-gg-gg",
          "avatar": "https://avatars.githubusercontent.com/u/145060541"
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
      "forks": 2968,
      "added_stars": 2505,
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
      "author": "guohuiyuan",
      "repo": "go-music-dl",
      "avatar": "https://github.com/guohuiyuan.png",
      "repo_link": "https://github.com/guohuiyuan/go-music-dl",
      "desc": "一个基于 Go 语言的全网音乐搜索与下载工具。支持 CLI 命令行与 Web 服务双模式，内置网易云、QQ、酷狗、Bilibili、汽水音乐等 10+ 个主流平台，支持多源并发搜索与无损音质解析。music-dl交流群：1074285005",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 199,
      "added_stars": 1545,
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
      "author": "XIU2",
      "repo": "CloudflareSpeedTest",
      "avatar": "https://github.com/XIU2.png",
      "repo_link": "https://github.com/XIU2/CloudflareSpeedTest",
      "desc": "🌩「自选优选 IP」测试 Cloudflare CDN 延迟和速度，获取最快 IP ！当然也支持其他 CDN / 多个解析 IP 的网站 ~",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 4985,
      "added_stars": 954,
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
      "forks": 15746,
      "added_stars": 98304,
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
      "forks": 3605,
      "added_stars": 8841,
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
      "forks": 1823,
      "added_stars": 9257,
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
      "author": "mvanhorn",
      "repo": "last30days-skill",
      "avatar": "https://github.com/mvanhorn.png",
      "repo_link": "https://github.com/mvanhorn/last30days-skill",
      "desc": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1936,
      "added_stars": 18946,
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "\"DeepTutor: Agent-Native Personalized Learning Assistant\"",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2818,
      "added_stars": 9982,
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
      "forks": 4690,
      "added_stars": 16944,
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
      "forks": 7446,
      "added_stars": 23017,
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
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8216,
      "added_stars": 31537,
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
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3717,
      "added_stars": 10060,
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
      "forks": 13315,
      "added_stars": 11704,
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
      "author": "Fincept-Corporation",
      "repo": "FinceptTerminal",
      "avatar": "https://github.com/Fincept-Corporation.png",
      "repo_link": "https://github.com/Fincept-Corporation/FinceptTerminal",
      "desc": "FinceptTerminal is a modern finance application offering advanced market analytics, investment research, and economic data tools, designed for interactive exploration and data-driven decision-making in a user-friendly environment.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1588,
      "added_stars": 8205,
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
      "author": "SakanaAI",
      "repo": "AI-Scientist-v2",
      "avatar": "https://github.com/SakanaAI.png",
      "repo_link": "https://github.com/SakanaAI/AI-Scientist-v2",
      "desc": "The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 800,
      "added_stars": 3494,
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
      "forks": 1785,
      "added_stars": 8278,
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
      "author": "lsdefine",
      "repo": "GenericAgent",
      "avatar": "https://github.com/lsdefine.png",
      "repo_link": "https://github.com/lsdefine/GenericAgent",
      "desc": "Self-evolving agent: grows skill tree from 3.3K-line seed, achieving full system control with 6x less token consumption",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 617,
      "added_stars": 4722,
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
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "232+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1615,
      "added_stars": 6111,
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
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9880,
      "added_stars": 7560,
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
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9469,
      "added_stars": 17270,
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
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3325,
      "added_stars": 10637,
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
      "forks": 993,
      "added_stars": 4337,
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
      "title": "Build your own blog post view counter on AWS Free Tier",
      "description": "Your blog deserves to know it's being read. A Lambda function counts the views, DynamoDB remembers...",
      "url": "https://dev.to/aws/build-your-own-blog-post-view-counter-on-aws-free-tier-306f",
      "tags": "beginners, lambda, dynamodb, tutorial",
      "reactions": 11,
      "comments": 1,
      "reading_time": 11,
      "author": "esin87"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-555a",
      "tags": "top7, discuss",
      "reactions": 37,
      "comments": 6,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "What are your goals for the week? #175",
      "description": "What are your goals for the week?    What are you building this week? What do you want to...",
      "url": "https://dev.to/jarvisscript/what-are-your-goals-for-the-week-175-324a",
      "tags": "discuss, motivation",
      "reactions": 9,
      "comments": 17,
      "reading_time": 2,
      "author": "jarvisscript"
    },
    {
      "title": "Migrating vector embeddings in production without downtime",
      "description": "In the fast-moving world of AI, models evolve rapidly. What was state-of-the-art six months ago is...",
      "url": "https://dev.to/googleai/migrating-vector-embeddings-in-production-without-downtime-5bli",
      "tags": "rag, ai, vectordatabase, programming",
      "reactions": 12,
      "comments": 0,
      "reading_time": 6,
      "author": "rsamborski"
    },
    {
      "title": "Atomic Scaffolding: How scbake Prevents Configuration Mishaps",
      "description": "Project scaffolders help speed up development. Until they fail halfway. Now you're left with a messy...",
      "url": "https://dev.to/emin-acikgoz/atomic-scaffolding-how-scbake-prevents-configuration-mishaps-2gmo",
      "tags": "go, devops, opensource, tools",
      "reactions": 7,
      "comments": 2,
      "reading_time": 4,
      "author": "emin-acikgoz"
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
      "title": "wsl9x: Windows 9x subsystem for Linux",
      "url": "https://codeberg.org/hails/wsl9x",
      "score": 1,
      "comments": 0,
      "tags": [
        "assembly",
        "linux",
        "retrocomputing",
        "windows"
      ],
      "id": "ipyknz"
    },
    {
      "title": "Math is hard (OpenBSD on VAX)",
      "url": "http://miod.online.fr/software/openbsd/stories/vaxfp.html",
      "score": 1,
      "comments": 0,
      "tags": [
        "historical",
        "openbsd"
      ],
      "id": "nvwn1i"
    },
    {
      "title": "Is Claude Code going to cost $100/month? Probably not—it’s all very confusing",
      "url": "https://simonwillison.net/2026/Apr/22/claude-code-confusion/",
      "score": 10,
      "comments": 5,
      "tags": [
        "vibecoding"
      ],
      "id": "0qdgc0"
    },
    {
      "title": "10,000-watt GPU meet 40-watt lump of meat",
      "url": "https://daverupert.com/2026/04/if-i-could-watt-10-000-florps/",
      "score": 2,
      "comments": 0,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "7r20bc"
    },
    {
      "title": "Stay On Credits — Discover the best value for your points and travel credits",
      "url": "https://stayoncredits.com/",
      "score": -2,
      "comments": 0,
      "tags": [
        "show",
        "web"
      ],
      "id": "jlgdk6"
    },
    {
      "title": "Announcing TypeScript 7.0 Beta",
      "url": "https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-beta/",
      "score": 17,
      "comments": 3,
      "tags": [
        "javascript",
        "release"
      ],
      "id": "48omfn"
    },
    {
      "title": "I don't want your PRs anymore",
      "url": "https://dpc.pw/posts/i-dont-want-your-prs-anymore/",
      "score": 12,
      "comments": 6,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "p8idoc"
    },
    {
      "title": "Switching from uv to PDM",
      "url": "https://stuartm.nz/2026/04/pdm-rocks/",
      "score": 22,
      "comments": 6,
      "tags": [
        "python"
      ],
      "id": "uczgez"
    },
    {
      "title": "Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2",
      "url": "https://frame.work/laptop13pro",
      "score": 39,
      "comments": 19,
      "tags": [
        "hardware"
      ],
      "id": "0rzs0d"
    },
    {
      "title": "Building an Enterprise Homelab - Part 5: The Synology Btrfs Trap",
      "url": "https://rant.mvh.dev/building-an-enterprise-homelab-part-5-the-synology-btrfs-trap/",
      "score": 3,
      "comments": 1,
      "tags": [
        "hardware",
        "linux"
      ],
      "id": "yyuyni"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "kaipereira",
      "descendants": 48,
      "id": 47842569,
      "kids": [
        47858989,
        47858732,
        47859327,
        47859240,
        47859706,
        47859698,
        47859108,
        47844006,
        47843315,
        47859184,
        47858836,
        47859242,
        47858658,
        47859743,
        47858733
      ],
      "score": 207,
      "time": 1776728106,
      "title": "Making RAM at Home [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=h6GWikWlAQA"
    },
    {
      "by": "wahnfrieden",
      "descendants": 543,
      "id": 47852835,
      "kids": [
        47856144,
        47859665,
        47853359,
        47854164,
        47853328,
        47856225,
        47859884,
        47859506,
        47855984,
        47855839,
        47855428,
        47857339,
        47855547,
        47853816,
        47853176,
        47853568,
        47853938,
        47853744,
        47857911,
        47853136,
        47856037,
        47854593,
        47853311,
        47859558,
        47853314,
        47855809,
        47856152,
        47853934,
        47854299,
        47855620,
        47859009,
        47854722,
        47856301,
        47856403,
        47854325,
        47855417,
        47858194,
        47858896,
        47857651,
        47855535,
        47857102,
        47853456,
        47856591,
        47855493,
        47855962,
        47859489,
        47855593,
        47853084,
        47856604,
        47856783,
        47855476,
        47858322,
        47856486,
        47856479,
        47854044,
        47853937,
        47856045,
        47854113,
        47854362,
        47856758,
        47853282,
        47855631,
        47853949,
        47855751,
        47853598,
        47856969,
        47854367,
        47856779,
        47853918,
        47854043,
        47858250,
        47853433,
        47853308,
        47855876,
        47856295,
        47857060,
        47856536,
        47856263,
        47853505,
        47853685,
        47856538,
        47853229,
        47853559,
        47859829,
        47857196,
        47857193,
        47857065,
        47853644,
        47856927,
        47853464,
        47853334,
        47855608,
        47855865,
        47853286,
        47859095,
        47857353,
        47857231,
        47858697,
        47859023
      ],
      "score": 709,
      "text": "Livestream: <a href=\"https:&#x2F;&#x2F;openai.com&#x2F;live&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;openai.com&#x2F;live&#x2F;</a><p>System card: <a href=\"https:&#x2F;&#x2F;deploymentsafety.openai.com&#x2F;chatgpt-images-2-0&#x2F;chatgpt-images-2-0.pdf\" rel=\"nofollow\">https:&#x2F;&#x2F;deploymentsafety.openai.com&#x2F;chatgpt-images-2-0&#x2F;chatg...</a>",
      "time": 1776797400,
      "title": "ChatGPT Images 2.0",
      "type": "story",
      "url": "https://openai.com/index/introducing-chatgpt-images-2-0/"
    },
    {
      "by": "nkurz",
      "descendants": 116,
      "id": 47835635,
      "kids": [
        47859916,
        47859639,
        47859989,
        47858898,
        47859909,
        47859844,
        47859490,
        47858220,
        47859864,
        47858339,
        47859667,
        47859565,
        47857597,
        47859821,
        47858615,
        47859620,
        47859575,
        47859596,
        47859621,
        47858914,
        47859040,
        47859439,
        47859981,
        47859391,
        47858949,
        47858225,
        47858763,
        47859101,
        47859010,
        47859869,
        47859702,
        47858429,
        47858957,
        47858909,
        47858635,
        47859512,
        47858825,
        47858940
      ],
      "score": 266,
      "time": 1776698476,
      "title": "Acetaminophen vs. ibuprofen",
      "type": "story",
      "url": "https://asteriskmag.com/issues/14/the-mystery-in-the-medicine-cabinet"
    },
    {
      "by": "geox",
      "descendants": 1,
      "id": 47846861,
      "kids": [
        47859729
      ],
      "score": 57,
      "text": "<a href=\"https:&#x2F;&#x2F;www.nature.com&#x2F;articles&#x2F;s41467-026-70656-0\" rel=\"nofollow\">https:&#x2F;&#x2F;www.nature.com&#x2F;articles&#x2F;s41467-026-70656-0</a>",
      "time": 1776766789,
      "title": "Diverse organic molecules on Mars revealed by the first SAM TMAH experiment",
      "type": "story",
      "url": "https://www.courthousenews.com/preserved-for-billions-of-years-organic-compounds-found-on-mars/"
    },
    {
      "by": "dmarcos",
      "descendants": 617,
      "id": 47855293,
      "kids": [
        47856926,
        47859973,
        47856297,
        47856489,
        47856768,
        47856807,
        47859566,
        47857558,
        47855647,
        47858433,
        47856586,
        47857500,
        47859912,
        47859934,
        47857025,
        47856060,
        47856273,
        47856660,
        47858465,
        47856227,
        47855579,
        47855618,
        47855742,
        47856898,
        47859840,
        47855604,
        47856390,
        47855632,
        47857606,
        47855557,
        47855652,
        47856501,
        47858345,
        47857262,
        47856748,
        47856233,
        47858934,
        47855731,
        47859283,
        47856542,
        47857687,
        47859500,
        47857955,
        47857378,
        47855954,
        47859102,
        47858928,
        47855471,
        47859163,
        47856433,
        47857531,
        47856021,
        47857309,
        47857999,
        47857070,
        47856426,
        47856936,
        47859477,
        47855556,
        47857915,
        47859045,
        47857097,
        47856816,
        47858684,
        47858094,
        47858122,
        47858328,
        47857819,
        47857654,
        47857796,
        47856605,
        47855727,
        47858149,
        47857063,
        47857321,
        47855838,
        47859855,
        47857178,
        47857970,
        47858703,
        47856744,
        47855561,
        47856839,
        47857842,
        47855922,
        47856899,
        47856876,
        47855461,
        47856075,
        47858475,
        47857591,
        47857580,
        47857088,
        47856500,
        47855880,
        47855991,
        47858113,
        47855946,
        47858321,
        47856127,
        47856855,
        47857294,
        47855619,
        47858141,
        47859001,
        47858437,
        47857809,
        47855810,
        47856706,
        47857943,
        47856331,
        47856187,
        47856175,
        47856296,
        47856320,
        47855804,
        47855793,
        47855717,
        47856171,
        47856143,
        47859767
      ],
      "score": 511,
      "text": "<a href=\"https:&#x2F;&#x2F;www.reuters.com&#x2F;technology&#x2F;spacex-says-it-has-option-acquire-startup-cursor-60-billion-2026-04-21&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.reuters.com&#x2F;technology&#x2F;spacex-says-it-has-option...</a><p><a href=\"https:&#x2F;&#x2F;www.nytimes.com&#x2F;2026&#x2F;04&#x2F;21&#x2F;business&#x2F;spacex-cursor-deal.html\" rel=\"nofollow\">https:&#x2F;&#x2F;www.nytimes.com&#x2F;2026&#x2F;04&#x2F;21&#x2F;business&#x2F;spacex-cursor-de...</a> (<a href=\"https:&#x2F;&#x2F;archive.ph&#x2F;c2Tac\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.ph&#x2F;c2Tac</a>)<p><a href=\"https:&#x2F;&#x2F;www.bloomberg.com&#x2F;news&#x2F;articles&#x2F;2026-04-21&#x2F;spacex-says-has-agreement-to-acquire-cursor-for-60-billion\" rel=\"nofollow\">https:&#x2F;&#x2F;www.bloomberg.com&#x2F;news&#x2F;articles&#x2F;2026-04-21&#x2F;spacex-sa...</a>",
      "time": 1776809598,
      "title": "SpaceX says it has agreement to acquire Cursor for $60B",
      "type": "story",
      "url": "https://twitter.com/spacex/status/2046713419978453374"
    },
    {
      "by": "milanm081",
      "descendants": 451,
      "id": 47847179,
      "kids": [
        47849418,
        47848312,
        47847689,
        47850925,
        47847586,
        47850328,
        47849894,
        47850853,
        47853939,
        47847935,
        47855718,
        47857681,
        47850581,
        47848171,
        47849999,
        47849313,
        47847631,
        47849400,
        47848192,
        47851830,
        47847764,
        47858566,
        47858942,
        47853312,
        47852235,
        47850516,
        47854393,
        47847662,
        47847597,
        47850177,
        47851740,
        47847957,
        47849670,
        47859029,
        47847369,
        47857863,
        47848073,
        47856196,
        47854834,
        47848400,
        47854856,
        47848221,
        47855534,
        47849261,
        47847762,
        47848528,
        47849061,
        47857330,
        47848274,
        47850744,
        47851381,
        47852467,
        47853177,
        47854732,
        47851227,
        47848405,
        47856872,
        47849344,
        47848674,
        47858099,
        47854363,
        47849143,
        47847331,
        47855847,
        47849124,
        47847829,
        47850847,
        47851436,
        47849105,
        47847698,
        47847786,
        47852456,
        47854310,
        47848069,
        47850193,
        47848983,
        47855403,
        47850993,
        47853604,
        47852083,
        47849194,
        47854746,
        47851149,
        47850085,
        47849909,
        47852889,
        47852007,
        47848237,
        47854879,
        47848390,
        47849310,
        47852825,
        47852820,
        47852773,
        47851267,
        47847674,
        47847654,
        47850103,
        47848922,
        47850769,
        47851732,
        47851733,
        47848427,
        47856343,
        47857952,
        47847180,
        47854210,
        47849442,
        47847908
      ],
      "score": 930,
      "time": 1776769496,
      "title": "Laws of Software Engineering",
      "type": "story",
      "url": "https://lawsofsoftwareengineering.com"
    },
    {
      "by": "queenelvis",
      "descendants": 105,
      "id": 47851634,
      "kids": [
        47852124,
        47853404,
        47852373,
        47856502,
        47852033,
        47857918,
        47854340,
        47852126,
        47852347,
        47854419,
        47858529,
        47853063,
        47853567,
        47852890,
        47852530,
        47852307,
        47854691,
        47853410,
        47852332,
        47852319,
        47853779,
        47851679,
        47852014,
        47851821,
        47858382,
        47852959,
        47853405,
        47857448,
        47851962,
        47854923,
        47854729,
        47852242,
        47853090
      ],
      "score": 302,
      "text": "<i>Vercel April 2026 security incident</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47824463\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47824463</a> - April 2026 (485 comments)<p><i>A Roblox cheat and one AI tool brought down Vercel&#x27;s platform</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47844431\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=47844431</a> - April 2026 (145 comments)",
      "time": 1776791675,
      "title": "The Vercel breach: OAuth attack exposes risk in platform environment variables",
      "type": "story",
      "url": "https://www.trendmicro.com/en_us/research/26/d/vercel-breach-oauth-supply-chain.html"
    },
    {
      "by": "zdw",
      "descendants": 67,
      "id": 47856535,
      "kids": [
        47857553,
        47859793,
        47859245,
        47859338,
        47859715,
        47858483,
        47857689,
        47859218,
        47858873,
        47859224,
        47859495,
        47856659,
        47857572,
        47859164,
        47858797
      ],
      "score": 115,
      "time": 1776815625,
      "title": "Drunk post: Things I've learned as a senior engineer (2021)",
      "type": "story",
      "url": "https://luminousmen.substack.com/p/drunk-post-things-ive-learned-as"
    },
    {
      "by": "foota",
      "descendants": 1,
      "id": 47821853,
      "kids": [
        47859868
      ],
      "score": 13,
      "time": 1776573719,
      "title": "Garbage Collection Without Unsafe Code",
      "type": "story",
      "url": "https://fitzgen.com/2024/02/06/safe-gc.html"
    },
    {
      "by": "ahaspel",
      "descendants": 94,
      "id": 47851885,
      "kids": [
        47852287,
        47851896,
        47852841,
        47852931,
        47852623,
        47852157,
        47853350,
        47852255,
        47852487,
        47852512,
        47852175,
        47858083,
        47852171,
        47855785,
        47854316,
        47852252,
        47856183,
        47857697,
        47853126,
        47854647,
        47855994,
        47854556,
        47855972,
        47857153,
        47855129,
        47854258,
        47852907,
        47858679,
        47854947,
        47853831,
        47857906,
        47853950
      ],
      "score": 269,
      "time": 1776792830,
      "title": "Britannica11.org – a structured edition of the 1911 Encyclopædia Britannica",
      "type": "story",
      "url": "https://britannica11.org/"
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
      "title": "Highlights from Git 2.54",
      "url": "https://github.blog/open-source/git/highlights-from-git-2-54/",
      "permalink": "https://www.reddit.com/r/programming/comments/1srhttc/highlights_from_git_254/",
      "author": "/u/Skaarj",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Skaarj [link] &#32; [comments]",
      "published": "2026-04-21T08:41:46+00:00"
    },
    {
      "title": "Announcing TypeScript 7.0 Beta",
      "url": "https://devblogs.microsoft.com/typescript/announcing-typescript-7-0-beta/",
      "permalink": "https://www.reddit.com/r/programming/comments/1srwby3/announcing_typescript_70_beta/",
      "author": "/u/DanielRosenwasser",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/DanielRosenwasser [link] &#32; [comments]",
      "published": "2026-04-21T18:28:10+00:00"
    },
    {
      "title": "Bloom filters: the niche trick behind a 16× faster API | Blog | incident.io",
      "url": "https://incident.io/blog/bloom-filters",
      "permalink": "https://www.reddit.com/r/programming/comments/1sry5gh/bloom_filters_the_niche_trick_behind_a_16_faster/",
      "author": "/u/fagnerbrack",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/fagnerbrack [link] &#32; [comments]",
      "published": "2026-04-21T19:31:57+00:00"
    },
    {
      "title": "Running a Minecraft Server and more on a 1960s UNIVAC Computer",
      "url": "https://farlow.dev/2026/04/17/running-a-minecraft-server-and-more-on-a-1960s-univac-computer",
      "permalink": "https://www.reddit.com/r/programming/comments/1srof92/running_a_minecraft_server_and_more_on_a_1960s/",
      "author": "/u/Dear-Economics-315",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Dear-Economics-315 [link] &#32; [comments]",
      "published": "2026-04-21T13:56:17+00:00"
    },
    {
      "title": "Quantum Computers Are Not a Threat to 128-bit Symmetric Keys",
      "url": "https://words.filippo.io/128-bits/",
      "permalink": "https://www.reddit.com/r/programming/comments/1ss135g/quantum_computers_are_not_a_threat_to_128bit/",
      "author": "/u/ScottContini",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/ScottContini [link] &#32; [comments]",
      "published": "2026-04-21T21:16:26+00:00"
    },
    {
      "title": "Proofs are Programs: A Few Examples of the Curry-Howard Correspondence",
      "url": "https://adueck.github.io/blog/curry-howard-proofs-are-programs/",
      "permalink": "https://www.reddit.com/r/programming/comments/1ssadqh/proofs_are_programs_a_few_examples_of_the/",
      "author": "/u/I2cScion",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/I2cScion [link] &#32; [comments]",
      "published": "2026-04-22T03:52:36+00:00"
    },
    {
      "title": "Pandas feels clunky coming from R. What about Haskell?",
      "url": "https://mchav.github.io/being-less-clunky/",
      "permalink": "https://www.reddit.com/r/programming/comments/1ssbk2i/pandas_feels_clunky_coming_from_r_what_about/",
      "author": "/u/m-chav",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/m-chav [link] &#32; [comments]",
      "published": "2026-04-22T04:50:59+00:00"
    },
    {
      "title": "Designing a portable and human-readable data format: trying to solve the visual displacement problem in tabular data and spreadsheets",
      "url": "https://github.com/Datastripes/DataSheetStandard/blob/main/README.md",
      "permalink": "https://www.reddit.com/r/programming/comments/1srgtik/designing_a_portable_and_humanreadable_data/",
      "author": "/u/Vinserello",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Vinserello [link] &#32; [comments]",
      "published": "2026-04-21T07:39:52+00:00"
    },
    {
      "title": "Four Refactors and a Funeral: Migrating a Live System to Event Sourcing (in depth)",
      "url": "https://langwatch.ai/blog/four-refactors-and-a-funeral-migrating-a-live-system-to-event-sourcing",
      "permalink": "https://www.reddit.com/r/programming/comments/1ss1pu7/four_refactors_and_a_funeral_migrating_a_live/",
      "author": "/u/Xerax",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "I&#39;ve spent the last few months working on this project and now it&#39;s done i&#39;ve done a writeup of alllll the learnings (mistakes). Hope a few of you find it nice! &#32; submitted by &#32; /u/Xerax [link] &#32; [comments]",
      "published": "2026-04-21T21:40:00+00:00"
    },
    {
      "title": "The Great Stream Fix: Interleaving Writes in Seastar with Invariants Tracing",
      "url": "https://www.scylladb.com/2026/04/21/interleaving-writes-in-seastar",
      "permalink": "https://www.reddit.com/r/programming/comments/1srvpmv/the_great_stream_fix_interleaving_writes_in/",
      "author": "/u/swdevtest",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Using invariant-based testing to locate and resolve tricky hidden bugs with complex state transitions in Seastar, an open-source, high-performance C++ framework for I/O-intensive, asynchronous applications &#32; submitted by &#32; /u/swdevtest [link] &#32; [comments]",
      "published": "2026-04-21T18:06:49+00:00"
    },
    {
      "title": "Building, Managing & Governing APIs on AWS • Giedrius Praspaliauskas",
      "url": "https://youtu.be/xqRUnoaQiUM?list=PLEx5khR4g7PJy5LslEV6EbSEhmw-88ezL",
      "permalink": "https://www.reddit.com/r/programming/comments/1srmfij/building_managing_governing_apis_on_aws_giedrius/",
      "author": "/u/goto-con",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/goto-con [link] &#32; [comments]",
      "published": "2026-04-21T12:38:26+00:00"
    },
    {
      "title": "Controlled chaos tests of retries, Retry-After, and hedging in JS HTTP clients",
      "url": "https://blog.gaborkoos.com/posts/2026-04-19-Your-HTTP-Client-Is-Lying-to-You/?utm_source=reddit&amp;utm_medium=social&amp;utm_campaign=your-http-client-is-lying-to-you&amp;utm_content=r_programming",
      "permalink": "https://www.reddit.com/r/programming/comments/1srlc5g/controlled_chaos_tests_of_retries_retryafter_and/",
      "author": "/u/OtherwisePush6424",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "What retries, Retry-After, and hedging actually do under controlled network chaos &#32; submitted by &#32; /u/OtherwisePush6424 [link] &#32; [comments]",
      "published": "2026-04-21T11:50:24+00:00"
    },
    {
      "title": "Java'fying the infrastructure or why mediocrity rules the enterprise",
      "url": "https://www.linkedin.com/pulse/javafying-infrastructure-why-mediocrity-rules-paranaliyanage-kxdpe/",
      "permalink": "https://www.reddit.com/r/programming/comments/1srh0pb/javafying_the_infrastructure_or_why_mediocrity/",
      "author": "/u/WifeEyedFascination",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/WifeEyedFascination [link] &#32; [comments]",
      "published": "2026-04-21T07:52:44+00:00"
    },
    {
      "title": "Good architecture shouldn't need a carrot or a stick",
      "url": "https://frederickvanbrabant.com/blog/2026-04-17-good-architecture-shouldnt-need-a-carrot-or-a-stick/",
      "permalink": "https://www.reddit.com/r/programming/comments/1srougi/good_architecture_shouldnt_need_a_carrot_or_a/",
      "author": "/u/GeneralZiltoid",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "Almost all architecture offices I’ve seen have a policing stance. When you want to get your software, tooling, or approach implemented, you’re going to need to pass through the architecture board (or some kind of board). In these boards, there are architects that go through all the documents required (artefacts) and either approve or disapprove the setup. I would call this the stick approach. People don’t want to go through this procedure. They have to prepare all of these documents, follow all of these guidelines and after all of this work, the faceless board can still stop everything in its tracks. With rework and unclear deadlines as a result. The reality is that most people try to avoid this entire setup and either go the shadow IT route, or try to make their new project part of an existing (and allowed) project. An alternative to this setup is the carrot approach. This often works a lot better. Every project gets an architect appointed to it. They guide the project so it aligns to the way of working of the organization. As you can imagine, this is a lot more work for the architecture team and also results in more things the project has to keep track of. Even if the architect takes care of all the governance and rules, you still have to have all the meetings in place. You also don’t have to pass the board (or the architect takes care of all of that), but you’ve inherited a team member whose job is to say ‘yes, but’ at every turn. What if there is a 3rd way? “Hey we’ve heard you wanted to automate some workflows. We have a standard for that. It’s fully approved and brings you these benefits … and by the way, it also handles security, logging, and legal. So you don’t have to pass there any more”. What a dream. As a customer someone came to you and gave you not only part of your project worked out, they also took a security and legal board off your plate. This is a direct positive impact to your project timeline. Next project I’m going to seek out these people. And what if said workflow doesn’t fit? Then we adapt it, but the foundation is already there. You’re not talking over process adaptations and not the base structure. This is called paved road architecture and is used by Netflix and Spotify. Path of least resistance Projects will always follow the path of least resistance, that’s just project management. Try to minimize your risks and guard your scope and timelines. Paved road architecture plays into that. If we make the easy route the “good” route, people will default to that. Everyone wins. And more importantly is that you will automatically discourage people from not following it. If they don’t follow the carved-out route, they will have to carve out their own route. That will take time and risk. &#32; submitted by &#32; /u/GeneralZiltoid [link] &#32; [comments]",
      "published": "2026-04-21T14:11:59+00:00"
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
      "title": "Built a 5k usd MRR app with AI but still needed a developer",
      "description": "You see it everywhere you turn:   \"I built this using just AI and im making 10K USD MRR\"  \"Just got...",
      "url": "https://dev.to/chocoscoding/built-a-5k-usd-mrr-app-with-ai-but-still-needed-a-developer-2k8p",
      "tags": "ai, career, discuss, saas",
      "reactions": 28,
      "comments": 10,
      "reading_time": 4,
      "author": "chocoscoding"
    },
    {
      "title": "I Tracked My To-Do List for 30 Days. 73% of My 'Urgent' Work Was Someone Else's Emergency.",
      "description": "I tracked every task I touched for 30 days. Not in a project management tool; in a spreadsheet with...",
      "url": "https://dev.to/aralroca/i-tracked-my-to-do-list-for-30-days-73-of-my-urgent-work-was-someone-elses-emergency-63",
      "tags": "productivity, career, beginners, discuss",
      "reactions": 2,
      "comments": 0,
      "reading_time": 7,
      "author": "aralroca"
    },
    {
      "title": "Autism and the \"genius\" effect",
      "description": "Rain Man or Sheldon Cooper — those are the two faces of autism most people know. But the vast middle is invisible, largely because it masks. This post explores the three dimensions you need to understand autism properly, why the \"genius\" stereotype is largely a visibility problem, and what actually happens when high IQ meets an insatiable information-gathering drive. Spoiler: it's a double-edged sword.",
      "url": "https://dev.to/raphink/autism-and-the-genius-effect-k86",
      "tags": "mentalhealth, inclusion, community, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "raphink"
    },
    {
      "title": "Why Debugging Is a More Important Skill Than Solving Algorithms",
      "description": "Most coding platforms train you to solve clean problems.  You’re given a neat description. Clear...",
      "url": "https://dev.to/vulcanwm/why-debugging-is-a-more-important-skill-than-solving-algorithms-o7a",
      "tags": "programming, productivity, career, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "vulcanwm"
    },
    {
      "title": "Ship Fast, Lose Clients: Why AI-Accelerated Fragility Is Not Engineering",
      "description": "For the last year, the software world has been split into two incompatible narratives.  In one...",
      "url": "https://dev.to/narnaiezzsshaa/ship-fast-lose-clients-why-ai-accelerated-fragility-is-not-engineering-19mi",
      "tags": "ai, career, vibecoding, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "narnaiezzsshaa"
    },
    {
      "title": "AI Agents Are Shipping Features Without You. Now What?",
      "description": "Jaskaran Singh — Senior Software Engineer, AI Trainer     A few weeks ago I watched an agent open a...",
      "url": "https://dev.to/jaskaran_singh/ai-agents-are-shipping-features-without-you-now-what-4eo0",
      "tags": "ai, agents, career, security",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "jaskaran_singh"
    },
    {
      "title": "What was your Win-Win this week?! 👋👋👋👋 All wins count -- Big or Small 🎉📱",
      "description": "Discuss ? weekly-retro AI talk news and office coffee upgrades    👋👋👋👋  Looking back on your week --...",
      "url": "https://dev.to/mohammedzaidwaghoo/what-was-your-win-win-this-weekall-wins-count-big-or-small-a51",
      "tags": "career, discuss, productivity, watercooler",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "mohammedzaidwaghoo"
    },
    {
      "title": "I Grade AI Code for a Living. Here's What Nobody Talks About.",
      "description": "Jaskaran Singh — Senior Software Engineer, AI Trainer     I've spent the last year doing something...",
      "url": "https://dev.to/jaskaran_singh/i-grade-ai-code-for-a-living-heres-what-nobody-talks-about-4do3",
      "tags": "ai, career, android, kotlin",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "jaskaran_singh"
    },
    {
      "title": "I Stopped Googling Errors for 30 Days — My Code Got 10x Better",
      "description": "🚀 The Shift No One Is Talking About   For years, most of us followed the same debugging...",
      "url": "https://dev.to/ajay_mudettula/i-stopped-googling-errors-for-30-days-my-code-got-10x-better-4llc",
      "tags": "ai, programming, career, beginners",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "ajay_mudettula"
    },
    {
      "title": "10 Resume-Ready AI Projects for Students in 2026 (With Free GitHub Ideas)",
      "description": "Most students build AI projects that look impressive on paper but never actually impress a...",
      "url": "https://dev.to/keerthana_696356/10-resume-ready-ai-projects-for-students-in-2026-with-free-github-ideas-gpo",
      "tags": "ai, machinelearning, beginners, career",
      "reactions": 5,
      "comments": 0,
      "reading_time": 4,
      "author": "keerthana_696356"
    }
  ]
}
```

