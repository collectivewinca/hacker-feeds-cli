# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-03-25 06:39:04 UTC

Runtime note: executed with NODE_OPTIONS=--require /tmp/hf-polyfill.js

## 1. Services to Pitch This Week

**Query:** What services can I pitch this week?

**Command:**
```bash
echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set' ; node bin/main.js --json reddit -t smallbusiness -s top ; node bin/main.js --json github -s weekly -l javascript
```

**Output:**
```text
[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "github",
  "since": "weekly",
  "language": "javascript",
  "items": [
    {
      "author": "jarrodwatts",
      "repo": "claude-hud",
      "avatar": "https://github.com/jarrodwatts.png",
      "repo_link": "https://github.com/jarrodwatts/claude-hud",
      "desc": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 529,
      "added_stars": 7304,
      "builtBy": [
        {
          "username": "jarrodwatts",
          "href": "https://github.com/jarrodwatts",
          "avatar": "https://avatars.githubusercontent.com/u/35651410"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "melon-hub",
          "href": "https://github.com/melon-hub",
          "avatar": "https://avatars.githubusercontent.com/u/53302110"
        }
      ]
    },
    {
      "author": "affaan-m",
      "repo": "everything-claude-code",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/everything-claude-code",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 13722,
      "added_stars": 21932,
      "builtBy": [
        {
          "username": "affaan-m",
          "href": "https://github.com/affaan-m",
          "avatar": "https://avatars.githubusercontent.com/u/124439313"
        },
        {
          "username": "pangerlkr",
          "href": "https://github.com/pangerlkr",
          "avatar": "https://avatars.githubusercontent.com/u/73515951"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "pvgomes",
          "href": "https://github.com/pvgomes",
          "avatar": "https://avatars.githubusercontent.com/u/4427450"
        }
      ]
    },
    {
      "author": "andrewyng",
      "repo": "context-hub",
      "avatar": "https://github.com/andrewyng.png",
      "repo_link": "https://github.com/andrewyng/context-hub",
      "desc": "",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1043,
      "added_stars": 3047,
      "builtBy": [
        {
          "username": "rohitprasad15",
          "href": "https://github.com/rohitprasad15",
          "avatar": "https://avatars.githubusercontent.com/u/1796239"
        },
        {
          "username": "Ivanye2509",
          "href": "https://github.com/Ivanye2509",
          "avatar": "https://avatars.githubusercontent.com/u/91228630"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "danielhorvath-cleo",
          "href": "https://github.com/danielhorvath-cleo",
          "avatar": "https://avatars.githubusercontent.com/u/147529159"
        },
        {
          "username": "neilthomass",
          "href": "https://github.com/neilthomass",
          "avatar": "https://avatars.githubusercontent.com/u/195538237"
        }
      ]
    },
    {
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 548,
      "added_stars": 3344,
      "builtBy": [
        {
          "username": "pbakaus",
          "href": "https://github.com/pbakaus",
          "avatar": "https://avatars.githubusercontent.com/u/43004"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shog86",
          "href": "https://github.com/shog86",
          "avatar": "https://avatars.githubusercontent.com/u/19712631"
        },
        {
          "username": "rohan-tessl",
          "href": "https://github.com/rohan-tessl",
          "avatar": "https://avatars.githubusercontent.com/u/246233927"
        },
        {
          "username": "glacierphonk",
          "href": "https://github.com/glacierphonk",
          "avatar": "https://avatars.githubusercontent.com/u/260244336"
        }
      ]
    },
    {
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3329,
      "added_stars": 9109,
      "builtBy": [
        {
          "username": "glittercowboy",
          "href": "https://github.com/glittercowboy",
          "avatar": "https://avatars.githubusercontent.com/u/186001655"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "trek-e",
          "href": "https://github.com/trek-e",
          "avatar": "https://avatars.githubusercontent.com/u/4738965"
        },
        {
          "username": "Tibsfox",
          "href": "https://github.com/Tibsfox",
          "avatar": "https://avatars.githubusercontent.com/u/537551"
        },
        {
          "username": "Solvely-Colin",
          "href": "https://github.com/Solvely-Colin",
          "avatar": "https://avatars.githubusercontent.com/u/211764741"
        }
      ]
    },
    {
      "author": "sgoudelis",
      "repo": "ground-station",
      "avatar": "https://github.com/sgoudelis.png",
      "repo_link": "https://github.com/sgoudelis/ground-station",
      "desc": "Ground Station is all-in-one satellite monitoring suite",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 564,
      "added_stars": 2623,
      "builtBy": [
        {
          "username": "sgoudelis",
          "href": "https://github.com/sgoudelis",
          "avatar": "https://avatars.githubusercontent.com/u/4840328"
        },
        {
          "username": "Jbsco",
          "href": "https://github.com/Jbsco",
          "avatar": "https://avatars.githubusercontent.com/u/90524106"
        }
      ]
    },
    {
      "author": "ComposioHQ",
      "repo": "awesome-claude-plugins",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/awesome-claude-plugins",
      "desc": "A curated list of Plugins that let you extend Claude Code with custom commands, agents, hooks, and MCP servers through the plugin system.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 235,
      "added_stars": 54,
      "builtBy": [
        {
          "username": "Prat011",
          "href": "https://github.com/Prat011",
          "avatar": "https://avatars.githubusercontent.com/u/67639393"
        },
        {
          "username": "sujayjayjay",
          "href": "https://github.com/sujayjayjay",
          "avatar": "https://avatars.githubusercontent.com/u/84703335"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mksglu",
          "href": "https://github.com/mksglu",
          "avatar": "https://avatars.githubusercontent.com/u/6067714"
        },
        {
          "username": "SebConejo",
          "href": "https://github.com/SebConejo",
          "avatar": "https://avatars.githubusercontent.com/u/11723962"
        }
      ]
    },
    {
      "author": "coreyhaines31",
      "repo": "marketingskills",
      "avatar": "https://github.com/coreyhaines31.png",
      "repo_link": "https://github.com/coreyhaines31/marketingskills",
      "desc": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2440,
      "added_stars": 1918,
      "builtBy": [
        {
          "username": "coreyhaines31",
          "href": "https://github.com/coreyhaines31",
          "avatar": "https://avatars.githubusercontent.com/u/34802794"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Jiliac",
          "href": "https://github.com/Jiliac",
          "avatar": "https://avatars.githubusercontent.com/u/5956866"
        },
        {
          "username": "bensabic",
          "href": "https://github.com/bensabic",
          "avatar": "https://avatars.githubusercontent.com/u/27636870"
        },
        {
          "username": "Ray0907",
          "href": "https://github.com/Ray0907",
          "avatar": "https://avatars.githubusercontent.com/u/29456968"
        }
      ]
    },
    {
      "author": "hakimel",
      "repo": "reveal.js",
      "avatar": "https://github.com/hakimel.png",
      "repo_link": "https://github.com/hakimel/reveal.js",
      "desc": "The HTML Presentation Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 16807,
      "added_stars": 106,
      "builtBy": [
        {
          "username": "hakimel",
          "href": "https://github.com/hakimel",
          "avatar": "https://avatars.githubusercontent.com/u/629429"
        },
        {
          "username": "VonC",
          "href": "https://github.com/VonC",
          "avatar": "https://avatars.githubusercontent.com/u/79478"
        },
        {
          "username": "mischah",
          "href": "https://github.com/mischah",
          "avatar": "https://avatars.githubusercontent.com/u/441011"
        },
        {
          "username": "bnjmnt4n",
          "href": "https://github.com/bnjmnt4n",
          "avatar": "https://avatars.githubusercontent.com/u/813865"
        },
        {
          "username": "davidbanham",
          "href": "https://github.com/davidbanham",
          "avatar": "https://avatars.githubusercontent.com/u/631832"
        }
      ]
    },
    {
      "author": "FreeTubeApp",
      "repo": "FreeTube",
      "avatar": "https://github.com/FreeTubeApp.png",
      "repo_link": "https://github.com/FreeTubeApp/FreeTube",
      "desc": "An Open Source YouTube app for privacy",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1370,
      "added_stars": 98,
      "builtBy": [
        {
          "username": "absidue",
          "href": "https://github.com/absidue",
          "avatar": "https://avatars.githubusercontent.com/u/48293849"
        },
        {
          "username": "PrestonN",
          "href": "https://github.com/PrestonN",
          "avatar": "https://avatars.githubusercontent.com/u/9736046"
        },
        {
          "username": "efb4f5ff-1298-471a-8973-3d47447115dc",
          "href": "https://github.com/efb4f5ff-1298-471a-8973-3d47447115dc",
          "avatar": "https://avatars.githubusercontent.com/u/73130443"
        },
        {
          "username": "PikachuEXE",
          "href": "https://github.com/PikachuEXE",
          "avatar": "https://avatars.githubusercontent.com/u/1018543"
        }
      ]
    },
    {
      "author": "cockpit-project",
      "repo": "cockpit",
      "avatar": "https://github.com/cockpit-project.png",
      "repo_link": "https://github.com/cockpit-project/cockpit",
      "desc": "Cockpit is a web-based graphical interface for servers.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1251,
      "added_stars": 467,
      "builtBy": [
        {
          "username": "martinpitt",
          "href": "https://github.com/martinpitt",
          "avatar": "https://avatars.githubusercontent.com/u/200109"
        },
        {
          "username": "stefwalter",
          "href": "https://github.com/stefwalter",
          "avatar": "https://avatars.githubusercontent.com/u/795070"
        },
        {
          "username": "mvollmer",
          "href": "https://github.com/mvollmer",
          "avatar": "https://avatars.githubusercontent.com/u/3228183"
        },
        {
          "username": "allisonkarlitskaya",
          "href": "https://github.com/allisonkarlitskaya",
          "avatar": "https://avatars.githubusercontent.com/u/36541154"
        },
        {
          "username": "KKoukiou",
          "href": "https://github.com/KKoukiou",
          "avatar": "https://avatars.githubusercontent.com/u/14921356"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "skills-for-copilot-studio",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/skills-for-copilot-studio",
      "desc": "A skill for AI-coding tools to build and edit Microsoft Copilot Studio agents as YAML — with schema validation, templates, and AI-powered skills. Suited for Claude Code, GitHub Copilot CLI, and more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 24,
      "added_stars": 24,
      "builtBy": [
        {
          "username": "GiorgioUghini",
          "href": "https://github.com/GiorgioUghini",
          "avatar": "https://avatars.githubusercontent.com/u/23707134"
        },
        {
          "username": "ericsche",
          "href": "https://github.com/ericsche",
          "avatar": "https://avatars.githubusercontent.com/u/35633680"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "adilei",
          "href": "https://github.com/adilei",
          "avatar": "https://avatars.githubusercontent.com/u/28257760"
        },
        {
          "username": "purnananda",
          "href": "https://github.com/purnananda",
          "avatar": "https://avatars.githubusercontent.com/u/12234450"
        }
      ]
    },
    {
      "author": "eyaltoledano",
      "repo": "claude-task-master",
      "avatar": "https://github.com/eyaltoledano.png",
      "repo_link": "https://github.com/eyaltoledano/claude-task-master",
      "desc": "An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf, Roo, and others.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2453,
      "added_stars": 203,
      "builtBy": [
        {
          "username": "Crunchyman-ralph",
          "href": "https://github.com/Crunchyman-ralph",
          "avatar": "https://avatars.githubusercontent.com/u/35776126"
        },
        {
          "username": "eyaltoledano",
          "href": "https://github.com/eyaltoledano",
          "avatar": "https://avatars.githubusercontent.com/u/3160046"
        },
        {
          "username": "joedanz",
          "href": "https://github.com/joedanz",
          "avatar": "https://avatars.githubusercontent.com/u/1423777"
        },
        {
          "username": "ben-vargas",
          "href": "https://github.com/ben-vargas",
          "avatar": "https://avatars.githubusercontent.com/u/20713656"
        }
      ]
    },
    {
      "author": "xnx3",
      "repo": "translate",
      "avatar": "https://github.com/xnx3.png",
      "repo_link": "https://github.com/xnx3/translate",
      "desc": "AI i18n, Two lines of js realize automatic html translation. No need to change the page, no language configuration file, no API key, SEO friendly!",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 431,
      "added_stars": 117,
      "builtBy": [
        {
          "username": "xnx3",
          "href": "https://github.com/xnx3",
          "avatar": "https://avatars.githubusercontent.com/u/8872471"
        },
        {
          "username": "cxb1029",
          "href": "https://github.com/cxb1029",
          "avatar": "https://avatars.githubusercontent.com/u/155722415"
        },
        {
          "username": "Lruihao",
          "href": "https://github.com/Lruihao",
          "avatar": "https://avatars.githubusercontent.com/u/33419593"
        },
        {
          "username": "DYJ762",
          "href": "https://github.com/DYJ762",
          "avatar": "https://avatars.githubusercontent.com/u/68176989"
        },
        {
          "username": "TatsukiMeng",
          "href": "https://github.com/TatsukiMeng",
          "avatar": "https://avatars.githubusercontent.com/u/98578510"
        }
      ]
    }
  ]
}
```

## 2. Founder Pain Points

**Query:** What pain points are founders talking about?

**Command:**
```bash
node bin/main.js --json reddit -t startups -s hot ; node bin/main.js --json news -t 10 ; node bin/main.js --json lobsters -s hottest -c 8
```

**Output:**
```text
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "ray__",
      "descendants": 0,
      "id": 47513475,
      "score": 40,
      "time": 1774414854,
      "title": "TurboQuant: Redefining AI efficiency with extreme compression",
      "type": "story",
      "url": "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/"
    },
    {
      "by": "felixding",
      "descendants": 26,
      "id": 47512816,
      "kids": [
        47513689,
        47513273,
        47513985,
        47513948,
        47513796,
        47513590,
        47513976,
        47513775,
        47513907,
        47513595,
        47513815,
        47513701,
        47513225,
        47513416,
        47513442,
        47513871
      ],
      "score": 70,
      "time": 1774408626,
      "title": "VitruvianOS – Desktop Linux Inspired by the BeOS",
      "type": "story",
      "url": "https://v-os.dev"
    },
    {
      "by": "skogstokig",
      "descendants": 78,
      "id": 47511589,
      "kids": [
        47512563,
        47513699,
        47513655,
        47513661,
        47511632,
        47511793,
        47512421,
        47513785,
        47513786,
        47513232,
        47513669,
        47511698,
        47512441,
        47512427,
        47513510,
        47512000,
        47511739,
        47511821,
        47513679,
        47511826,
        47512324
      ],
      "score": 247,
      "time": 1774398585,
      "title": "Flighty Airports",
      "type": "story",
      "url": "https://flighty.com/airports"
    },
    {
      "by": "mikeocool",
      "descendants": 432,
      "id": 47508246,
      "kids": [
        47511146,
        47514028,
        47512202,
        47510769,
        47512459,
        47510266,
        47513998,
        47509291,
        47509442,
        47511444,
        47513556,
        47511111,
        47513901,
        47510508,
        47513501,
        47511591,
        47509079,
        47508610,
        47508695,
        47511731,
        47508735,
        47513227,
        47511548,
        47512963,
        47513462,
        47509180,
        47513627,
        47512494,
        47509611,
        47509260,
        47512615,
        47513739,
        47513737,
        47510557,
        47511515,
        47509436,
        47511860,
        47512007,
        47509585,
        47512352,
        47511776,
        47511641,
        47512641,
        47510685,
        47511272,
        47511844,
        47513776,
        47510760,
        47508604,
        47510416,
        47511802,
        47510047,
        47512806,
        47512150,
        47512319,
        47511385,
        47513302,
        47510867,
        47512503,
        47509049,
        47509221,
        47511063,
        47510621,
        47510195,
        47512937,
        47509971,
        47509032,
        47510750,
        47510588,
        47508736,
        47512086,
        47511873,
        47510149,
        47512400,
        47509475,
        47509051,
        47511115,
        47510070,
        47510540,
        47510943,
        47512252,
        47510579,
        47510293,
        47510542,
        47511028,
        47510608,
        47510830,
        47510807,
        47510464,
        47511813,
        47511752,
        47511209,
        47511398,
        47510650,
        47513102,
        47509284,
        47511330,
        47513990,
        47510898,
        47513141,
        47512265,
        47513890,
        47509932,
        47511128,
        47511959,
        47511942,
        47513159,
        47510566,
        47511727,
        47510445,
        47508813,
        47511791,
        47512230
      ],
      "score": 598,
      "text": "<a href=\"https:&#x2F;&#x2F;xcancel.com&#x2F;soraofficialapp&#x2F;status&#x2F;2036532795984715896\" rel=\"nofollow\">https:&#x2F;&#x2F;xcancel.com&#x2F;soraofficialapp&#x2F;status&#x2F;20365327959847158...</a><p><a href=\"https:&#x2F;&#x2F;www.hollywoodreporter.com&#x2F;business&#x2F;digital&#x2F;openai-shutting-down-sora-ai-video-app-1236546187&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.hollywoodreporter.com&#x2F;business&#x2F;digital&#x2F;openai-sh...</a>, <a href=\"https:&#x2F;&#x2F;archive.ph&#x2F;ABkeI\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.ph&#x2F;ABkeI</a>",
      "time": 1774382465,
      "title": "Goodbye to Sora",
      "type": "story",
      "url": "https://twitter.com/soraofficialapp/status/2036532795984715896"
    },
    {
      "by": "decimalenough",
      "descendants": 27,
      "id": 47513229,
      "kids": [
        47514000,
        47514017,
        47513875,
        47513827,
        47513846,
        47513804,
        47513909,
        47513927,
        47513860,
        47513950,
        47513766
      ],
      "score": 41,
      "time": 1774412834,
      "title": "Miscellanea: The War in Iran",
      "type": "story",
      "url": "https://acoup.blog/2026/03/25/miscellanea-the-war-in-iran/"
    },
    {
      "by": "Heff",
      "descendants": 58,
      "id": 47506713,
      "kids": [
        47513623,
        47513181,
        47513916,
        47511544,
        47513144,
        47511573,
        47510930,
        47511871,
        47512982,
        47511926,
        47512197,
        47510752,
        47510723,
        47512223,
        47512136,
        47510357,
        47510548,
        47510917,
        47513409,
        47511716,
        47511967,
        47513966,
        47511601,
        47511368,
        47513937,
        47512088
      ],
      "score": 319,
      "text": "What do you do when private equity buys your old company and fires the maintainers of the popular open source project you started over a decade ago? You reboot it, and bring along some new friends to do it.<p>Video.js is used by billions of people every month, on sites like Amazon.com, Linkedin, and Dropbox, and yet it wasn’t in great shape. A skeleton crew of maintainers were doing their best with a dated architecture, but it needed more. So Sam from Plyr, Rahim from Vidstack, and Wes and Christain from Media Chrome jumped in to help me rebuild it better, faster, and smaller.<p>It’s in beta now. Please give it a try and tell us what breaks.",
      "time": 1774375428,
      "title": "Show HN: I took back Video.js after 16 years and we rewrote it to be 88% smaller",
      "type": "story",
      "url": "https://videojs.org/blog/videojs-v10-beta-hello-world-again"
    },
    {
      "by": "tezclarke",
      "descendants": 113,
      "id": 47509571,
      "kids": [
        47511583,
        47510230,
        47511402,
        47512454,
        47510180,
        47511023,
        47509924,
        47510055,
        47511870,
        47511540,
        47513525,
        47511073,
        47513467,
        47512052,
        47513163,
        47513241,
        47510819,
        47511647,
        47510598,
        47511053,
        47511456,
        47511726,
        47511050,
        47509930,
        47510160,
        47511422,
        47511612,
        47511165
      ],
      "score": 257,
      "time": 1774387473,
      "title": "I wanted to build vertical SaaS for pest control, so I took a technician job",
      "type": "story",
      "url": "https://www.onhand.pro/p/i-wanted-to-build-vertical-saas-for-pest-control-i-took-a-technician-job-instead"
    },
    {
      "by": "soheilpro",
      "descendants": 344,
      "id": 47504112,
      "kids": [
        47505700,
        47509607,
        47506183,
        47505054,
        47505192,
        47510420,
        47509636,
        47505179,
        47510467,
        47505032,
        47505059,
        47513761,
        47505044,
        47510689,
        47505767,
        47505004,
        47504253,
        47513904,
        47509230,
        47512716,
        47510555,
        47505569,
        47507843,
        47505353,
        47508200,
        47505149,
        47508626,
        47510593,
        47510880,
        47511550,
        47509326,
        47509056,
        47504942,
        47510434,
        47508876,
        47505039,
        47510906,
        47509551,
        47505014,
        47509960,
        47505551,
        47512696,
        47505056,
        47505379,
        47505474,
        47506617,
        47506837,
        47510532,
        47510600,
        47505498,
        47510072,
        47505447,
        47509978,
        47506314,
        47505739,
        47505328,
        47507631,
        47510462,
        47508136,
        47510951,
        47510053,
        47510032,
        47509951,
        47505470,
        47507920,
        47506727,
        47507217,
        47506020,
        47508015,
        47509235,
        47507466,
        47513152,
        47513111,
        47505141,
        47508208,
        47504925,
        47507597
      ],
      "score": 584,
      "time": 1774366181,
      "title": "Apple Business",
      "type": "story",
      "url": "https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/"
    },
    {
      "by": "dot_treo",
      "descendants": 404,
      "id": 47501426,
      "kids": [
        47502858,
        47502785,
        47513932,
        47502402,
        47509479,
        47502085,
        47507089,
        47502459,
        47513787,
        47502920,
        47502350,
        47504118,
        47502034,
        47502548,
        47502493,
        47503114,
        47502769,
        47503196,
        47504121,
        47502619,
        47503580,
        47505844,
        47502297,
        47503842,
        47502008,
        47510350,
        47507836,
        47502002,
        47502301,
        47503373,
        47502346,
        47502839,
        47510471,
        47502260,
        47512083,
        47512863,
        47506165,
        47510246,
        47504191,
        47511296,
        47511845,
        47511696,
        47502412,
        47503065,
        47506618,
        47506200,
        47503031,
        47502237,
        47508422,
        47506858,
        47502586,
        47510301,
        47502568,
        47502109,
        47503270,
        47502731,
        47503343,
        47504387,
        47502447,
        47502309,
        47502440,
        47508281,
        47502380,
        47504933,
        47508315,
        47506974,
        47502604,
        47504102,
        47506099,
        47502454,
        47505215,
        47502955,
        47502529,
        47502549,
        47503590,
        47502319,
        47503725,
        47505713,
        47508540,
        47501928,
        47503685,
        47506350,
        47502355,
        47504732,
        47507593,
        47502925,
        47510199,
        47502296,
        47502906,
        47502353,
        47502980,
        47511188,
        47507548,
        47506658,
        47501993,
        47502063,
        47501432,
        47506076,
        47511907,
        47511149,
        47510846,
        47511671,
        47512080,
        47512178,
        47505214,
        47507545,
        47512165,
        47503702,
        47507550,
        47503106,
        47501856,
        47513129,
        47502272,
        47508055,
        47502434,
        47502798,
        47502856,
        47504719,
        47501658,
        47503281,
        47506347,
        47506701,
        47506356,
        47502542,
        47505992,
        47508120
      ],
      "score": 596,
      "text": "About an hour ago new versions have been deployed to PyPI.<p>I was just setting up a new project, and things behaved weirdly. My laptop ran out of RAM, it looked like a forkbomb was running.<p>I&#x27;ve investigated, and found that a base64 encoded blob has been added to proxy_server.py.<p>It writes and decodes another file which it then runs.<p>I&#x27;m in the process of reporting this upstream, but wanted to give everyone here a headsup.<p>It is also reported in this issue:\n<a href=\"https:&#x2F;&#x2F;github.com&#x2F;BerriAI&#x2F;litellm&#x2F;issues&#x2F;24512\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;BerriAI&#x2F;litellm&#x2F;issues&#x2F;24512</a>",
      "time": 1774353989,
      "title": "Tell HN: Litellm 1.82.7 and 1.82.8 on PyPI are compromised",
      "type": "story",
      "url": "https://github.com/BerriAI/litellm/issues/24512"
    },
    {
      "by": "cigrainger",
      "descendants": 1,
      "id": 47512891,
      "kids": [
        47513207,
        47513429
      ],
      "score": 28,
      "text": "Hey folks! As someone doing hybrid search daily and wishing I could have a pgvector-like experience but with actual prefiltered approximate nearest neighbours, I decided to just take a punt on implementing ACORN on a fork of the DuckDB VSS extension. I had to make some changes to (vendored) usearch that I&#x27;m thinking of submitting upstream. But this does the business. Approximate nearest neighbours with WHERE prefiltering.<p>Edit: Just to clarify, this has been accepted into the community extensions repo. So you can use it like:<p>```<p>INSTALL hnsw_acorn FROM community;<p>LOAD hnsw_acorn;<p>```",
      "time": 1774409284,
      "title": "Show HN: DuckDB community extension for prefiltered HNSW using ACORN-1",
      "type": "story",
      "url": "https://github.com/cigrainger/duckdb-hnsw-acorn"
    }
  ]
}
- Fetching feeds...
{
  "source": "lobsters",
  "sort": "hottest",
  "tag": null,
  "items": [
    {
      "title": "Debunking zswap and zram myths",
      "url": "https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html",
      "score": 88,
      "comments": 36,
      "tags": [
        "linux",
        "performance"
      ],
      "id": "flmhja"
    },
    {
      "title": "curl > dev/sda",
      "url": "https://astrid.tech/2026/03/24/0/curl-to-dev-sda/",
      "score": 77,
      "comments": 21,
      "tags": [
        "osdev"
      ],
      "id": "brcq3a"
    },
    {
      "title": "Hegel, a universal property-based testing protocol and family of PBT libraries",
      "url": "https://hegel.dev",
      "score": 39,
      "comments": 19,
      "tags": [
        "testing",
        "vibecoding"
      ],
      "id": "juc8ix"
    },
    {
      "title": "\"﷽\" U+FDFD: ARABIC LIGATURE BISMILLAH AR-RAHMAN AR-RAHEEM (Unicode Character)",
      "url": "https://unicodeplus.com/U+FDFD",
      "score": 17,
      "comments": 7,
      "tags": [
        "a11y"
      ],
      "id": "7s4sjp"
    },
    {
      "title": "LiteLLM Compromised by Credential Stealer",
      "url": "https://futuresearch.ai/blog/litellm-pypi-supply-chain-attack/",
      "score": 34,
      "comments": 6,
      "tags": [
        "security",
        "vibecoding"
      ],
      "id": "plmvuv"
    },
    {
      "title": "Announcing TypeScript 6.0",
      "url": "https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/",
      "score": 54,
      "comments": 12,
      "tags": [
        "javascript",
        "release"
      ],
      "id": "hb04np"
    },
    {
      "title": "Go Naming Conventions: A Practical Guide",
      "url": "https://www.alexedwards.net/blog/go-naming-conventions",
      "score": 18,
      "comments": 7,
      "tags": [
        "go"
      ],
      "id": "xarlmy"
    },
    {
      "title": "Adding structured concurrency to JavaScript",
      "url": "https://github.com/bakkot/structured-concurrency-for-js",
      "score": 11,
      "comments": 4,
      "tags": [
        "javascript"
      ],
      "id": "xt8q7u"
    }
  ]
}
```

## 3. Growing Tech Niches

**Query:** What tech niches are growing where clients may pay?

**Command:**
```bash
node bin/main.js --json github -s monthly -l python ; node bin/main.js --json github -s monthly -l typescript ; node bin/main.js --json devto -s top -c 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "github",
  "since": "monthly",
  "language": "python",
  "items": [
    {
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5761,
      "added_stars": 37311,
      "builtBy": [
        {
          "username": "666ghj",
          "href": "https://github.com/666ghj",
          "avatar": "https://avatars.githubusercontent.com/u/110395318"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5221,
      "added_stars": 21598,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1303,
      "added_stars": 15109,
      "builtBy": [
        {
          "username": "qin-ctx",
          "href": "https://github.com/qin-ctx",
          "avatar": "https://avatars.githubusercontent.com/u/234610432"
        },
        {
          "username": "zhoujh01",
          "href": "https://github.com/zhoujh01",
          "avatar": "https://avatars.githubusercontent.com/u/242402223"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "MaojiaSheng",
          "href": "https://github.com/MaojiaSheng",
          "avatar": "https://avatars.githubusercontent.com/u/211460083"
        },
        {
          "username": "ZaynJarvis",
          "href": "https://github.com/ZaynJarvis",
          "avatar": "https://avatars.githubusercontent.com/u/31875147"
        }
      ]
    },
    {
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "+192 Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 806,
      "added_stars": 4730,
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
      "author": "langchain-ai",
      "repo": "open-swe",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/open-swe",
      "desc": "An Open-Source Asynchronous Coding Agent",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 981,
      "added_stars": 2992,
      "builtBy": [
        {
          "username": "bracesproul",
          "href": "https://github.com/bracesproul",
          "avatar": "https://avatars.githubusercontent.com/u/46789226"
        },
        {
          "username": "aran-yogesh",
          "href": "https://github.com/aran-yogesh",
          "avatar": "https://avatars.githubusercontent.com/u/63587953"
        },
        {
          "username": "starmorph",
          "href": "https://github.com/starmorph",
          "avatar": "https://avatars.githubusercontent.com/u/121908331"
        }
      ]
    },
    {
      "author": "fishaudio",
      "repo": "fish-speech",
      "avatar": "https://github.com/fishaudio.png",
      "repo_link": "https://github.com/fishaudio/fish-speech",
      "desc": "SOTA Open Source TTS",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2408,
      "added_stars": 3813,
      "builtBy": [
        {
          "username": "leng-yue",
          "href": "https://github.com/leng-yue",
          "avatar": "https://avatars.githubusercontent.com/u/25119060"
        },
        {
          "username": "AnyaCoder",
          "href": "https://github.com/AnyaCoder",
          "avatar": "https://avatars.githubusercontent.com/u/122108331"
        },
        {
          "username": "PoTaTo-Mika",
          "href": "https://github.com/PoTaTo-Mika",
          "avatar": "https://avatars.githubusercontent.com/u/148920650"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3158,
      "added_stars": 8064,
      "builtBy": [
        {
          "username": "potassiummmm",
          "href": "https://github.com/potassiummmm",
          "avatar": "https://avatars.githubusercontent.com/u/54800242"
        },
        {
          "username": "tsong-ms",
          "href": "https://github.com/tsong-ms",
          "avatar": "https://avatars.githubusercontent.com/u/84831885"
        },
        {
          "username": "younesbelkada",
          "href": "https://github.com/younesbelkada",
          "avatar": "https://avatars.githubusercontent.com/u/49240599"
        },
        {
          "username": "sd983527",
          "href": "https://github.com/sd983527",
          "avatar": "https://avatars.githubusercontent.com/u/59006636"
        },
        {
          "username": "XsquirrelC",
          "href": "https://github.com/XsquirrelC",
          "avatar": "https://avatars.githubusercontent.com/u/178687198"
        }
      ]
    },
    {
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 930,
      "added_stars": 5198,
      "builtBy": [
        {
          "username": "teng-lin",
          "href": "https://github.com/teng-lin",
          "avatar": "https://avatars.githubusercontent.com/u/737447"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "furkankoykiran",
          "href": "https://github.com/furkankoykiran",
          "avatar": "https://avatars.githubusercontent.com/u/60299878"
        },
        {
          "username": "welshofer",
          "href": "https://github.com/welshofer",
          "avatar": "https://avatars.githubusercontent.com/u/33588582"
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
      "forks": 7577,
      "added_stars": 10068,
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
          "username": "ZeroAct",
          "href": "https://github.com/ZeroAct",
          "avatar": "https://avatars.githubusercontent.com/u/46982469"
        }
      ]
    },
    {
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1846,
      "added_stars": 9444,
      "builtBy": [
        {
          "username": "Soulter",
          "href": "https://github.com/Soulter",
          "avatar": "https://avatars.githubusercontent.com/u/37870767"
        },
        {
          "username": "Raven95676",
          "href": "https://github.com/Raven95676",
          "avatar": "https://avatars.githubusercontent.com/u/176760093"
        },
        {
          "username": "RC-CHN",
          "href": "https://github.com/RC-CHN",
          "avatar": "https://avatars.githubusercontent.com/u/67079377"
        },
        {
          "username": "anka-afk",
          "href": "https://github.com/anka-afk",
          "avatar": "https://avatars.githubusercontent.com/u/110004162"
        },
        {
          "username": "LIghtJUNction",
          "href": "https://github.com/LIghtJUNction",
          "avatar": "https://avatars.githubusercontent.com/u/106986785"
        }
      ]
    },
    {
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "Give your agents the power of the Hugging Face ecosystem",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 600,
      "added_stars": 5145,
      "builtBy": [
        {
          "username": "burtenshaw",
          "href": "https://github.com/burtenshaw",
          "avatar": "https://avatars.githubusercontent.com/u/19620375"
        },
        {
          "username": "evalstate",
          "href": "https://github.com/evalstate",
          "avatar": "https://avatars.githubusercontent.com/u/1936278"
        },
        {
          "username": "hanouticelina",
          "href": "https://github.com/hanouticelina",
          "avatar": "https://avatars.githubusercontent.com/u/36770234"
        },
        {
          "username": "NielsRogge",
          "href": "https://github.com/NielsRogge",
          "avatar": "https://avatars.githubusercontent.com/u/48327001"
        },
        {
          "username": "abidlabs",
          "href": "https://github.com/abidlabs",
          "avatar": "https://avatars.githubusercontent.com/u/1778297"
        }
      ]
    },
    {
      "author": "langchain-ai",
      "repo": "deepagents",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/deepagents",
      "desc": "Agent harness built with LangChain and LangGraph. Equipped with a planning tool, a filesystem backend, and the ability to spawn subagents - well-equipped to handle complex agentic tasks.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2439,
      "added_stars": 7796,
      "builtBy": [
        {
          "username": "mdrxy",
          "href": "https://github.com/mdrxy",
          "avatar": "https://avatars.githubusercontent.com/u/61371264"
        },
        {
          "username": "eyurtsev",
          "href": "https://github.com/eyurtsev",
          "avatar": "https://avatars.githubusercontent.com/u/3205522"
        },
        {
          "username": "vtrivedy",
          "href": "https://github.com/vtrivedy",
          "avatar": "https://avatars.githubusercontent.com/u/28938224"
        },
        {
          "username": "hwchase17",
          "href": "https://github.com/hwchase17",
          "avatar": "https://avatars.githubusercontent.com/u/11986836"
        },
        {
          "username": "sydney-runkle",
          "href": "https://github.com/sydney-runkle",
          "avatar": "https://avatars.githubusercontent.com/u/54324534"
        }
      ]
    },
    {
      "author": "ZhuLinsen",
      "repo": "daily_stock_analysis",
      "avatar": "https://github.com/ZhuLinsen.png",
      "repo_link": "https://github.com/ZhuLinsen/daily_stock_analysis",
      "desc": "LLM驱动的 A/H/美股智能分析器：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送，零成本定时运行，纯白嫖. LLM-powered stock analysis system for A/H/US markets.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 25948,
      "added_stars": 12238,
      "builtBy": [
        {
          "username": "ZhuLinsen",
          "href": "https://github.com/ZhuLinsen",
          "avatar": "https://avatars.githubusercontent.com/u/42829555"
        },
        {
          "username": "massif-01",
          "href": "https://github.com/massif-01",
          "avatar": "https://avatars.githubusercontent.com/u/176381099"
        },
        {
          "username": "freesme",
          "href": "https://github.com/freesme",
          "avatar": "https://avatars.githubusercontent.com/u/56824280"
        },
        {
          "username": "adminlove520",
          "href": "https://github.com/adminlove520",
          "avatar": "https://avatars.githubusercontent.com/u/32920883"
        },
        {
          "username": "birdxs",
          "href": "https://github.com/birdxs",
          "avatar": "https://avatars.githubusercontent.com/u/36181736"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1516,
      "added_stars": 6243,
      "builtBy": [
        {
          "username": "tobinsouth",
          "href": "https://github.com/tobinsouth",
          "avatar": "https://avatars.githubusercontent.com/u/32489862"
        },
        {
          "username": "k6l3",
          "href": "https://github.com/k6l3",
          "avatar": "https://avatars.githubusercontent.com/u/111803974"
        },
        {
          "username": "noahzweben",
          "href": "https://github.com/noahzweben",
          "avatar": "https://avatars.githubusercontent.com/u/12701358"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "dhollman",
          "href": "https://github.com/dhollman",
          "avatar": "https://avatars.githubusercontent.com/u/100382"
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
      "forks": 1701,
      "added_stars": 7193,
      "builtBy": [
        {
          "username": "p-e-w",
          "href": "https://github.com/p-e-w",
          "avatar": "https://avatars.githubusercontent.com/u/2702526"
        },
        {
          "username": "spikymoth",
          "href": "https://github.com/spikymoth",
          "avatar": "https://avatars.githubusercontent.com/u/133602907"
        },
        {
          "username": "anrp",
          "href": "https://github.com/anrp",
          "avatar": "https://avatars.githubusercontent.com/u/1325515"
        },
        {
          "username": "red40maxxer",
          "href": "https://github.com/red40maxxer",
          "avatar": "https://avatars.githubusercontent.com/u/113548315"
        },
        {
          "username": "kldzj",
          "href": "https://github.com/kldzj",
          "avatar": "https://avatars.githubusercontent.com/u/7687617"
        }
      ]
    },
    {
      "author": "666ghj",
      "repo": "BettaFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/BettaFish",
      "desc": "微舆：人人可用的多Agent舆情分析助手，打破信息茧房，还原舆情原貌，预测未来走向，辅助决策！从0实现，不依赖任何框架。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7412,
      "added_stars": 4249,
      "builtBy": [
        {
          "username": "666ghj",
          "href": "https://github.com/666ghj",
          "avatar": "https://avatars.githubusercontent.com/u/110395318"
        },
        {
          "username": "MaYiding",
          "href": "https://github.com/MaYiding",
          "avatar": "https://avatars.githubusercontent.com/u/77890939"
        },
        {
          "username": "DoiiarX",
          "href": "https://github.com/DoiiarX",
          "avatar": "https://avatars.githubusercontent.com/u/25550075"
        },
        {
          "username": "ghmark675",
          "href": "https://github.com/ghmark675",
          "avatar": "https://avatars.githubusercontent.com/u/188834327"
        },
        {
          "username": "Qst137",
          "href": "https://github.com/Qst137",
          "avatar": "https://avatars.githubusercontent.com/u/139198328"
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
      "forks": 45063,
      "added_stars": 16539,
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
          "username": "pawelborkar",
          "href": "https://github.com/pawelborkar",
          "avatar": "https://avatars.githubusercontent.com/u/36134699"
        },
        {
          "username": "jbrooksuk",
          "href": "https://github.com/jbrooksuk",
          "avatar": "https://avatars.githubusercontent.com/u/246103"
        },
        {
          "username": "marekdano",
          "href": "https://github.com/marekdano",
          "avatar": "https://avatars.githubusercontent.com/u/1914165"
        }
      ]
    },
    {
      "author": "openclaw",
      "repo": "skills",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/skills",
      "desc": "All versions of all skills that are on clawhub.com archived",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 965,
      "added_stars": 1988,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "thewilloftheshadow",
          "href": "https://github.com/thewilloftheshadow",
          "avatar": "https://avatars.githubusercontent.com/u/35580099"
        }
      ]
    },
    {
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Unsloth Studio is a web UI for training and running open models like Qwen, DeepSeek, gpt-oss and Gemma locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4895,
      "added_stars": 5466,
      "builtBy": [
        {
          "username": "danielhanchen",
          "href": "https://github.com/danielhanchen",
          "avatar": "https://avatars.githubusercontent.com/u/23090290"
        },
        {
          "username": "rolandtannous",
          "href": "https://github.com/rolandtannous",
          "avatar": "https://avatars.githubusercontent.com/u/115670425"
        },
        {
          "username": "shimmyshimmer",
          "href": "https://github.com/shimmyshimmer",
          "avatar": "https://avatars.githubusercontent.com/u/107991372"
        },
        {
          "username": "Datta0",
          "href": "https://github.com/Datta0",
          "avatar": "https://avatars.githubusercontent.com/u/39181234"
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
      "forks": 8615,
      "added_stars": 3814,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用AI大模型，一键生成高清短视频 Generate short videos with one click using AI LLM.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7477,
      "added_stars": 3070,
      "builtBy": [
        {
          "username": "harry0703",
          "href": "https://github.com/harry0703",
          "avatar": "https://avatars.githubusercontent.com/u/4928832"
        },
        {
          "username": "yyhhyyyyyy",
          "href": "https://github.com/yyhhyyyyyy",
          "avatar": "https://avatars.githubusercontent.com/u/95077259"
        },
        {
          "username": "vuisme",
          "href": "https://github.com/vuisme",
          "avatar": "https://avatars.githubusercontent.com/u/96235876"
        },
        {
          "username": "KevinZhang19870314",
          "href": "https://github.com/KevinZhang19870314",
          "avatar": "https://avatars.githubusercontent.com/u/13794286"
        },
        {
          "username": "garylab",
          "href": "https://github.com/garylab",
          "avatar": "https://avatars.githubusercontent.com/u/3072379"
        }
      ]
    },
    {
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 495,
      "added_stars": 3577,
      "builtBy": [
        {
          "username": "Jeffallan",
          "href": "https://github.com/Jeffallan",
          "avatar": "https://avatars.githubusercontent.com/u/23423962"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "liyin2015",
          "href": "https://github.com/liyin2015",
          "avatar": "https://avatars.githubusercontent.com/u/14322677"
        },
        {
          "username": "salmanmkc",
          "href": "https://github.com/salmanmkc",
          "avatar": "https://avatars.githubusercontent.com/u/32169182"
        },
        {
          "username": "thomassamoul",
          "href": "https://github.com/thomassamoul",
          "avatar": "https://avatars.githubusercontent.com/u/50757446"
        }
      ]
    }
  ]
}
- Fetching feeds...
{
  "source": "github",
  "since": "monthly",
  "language": "typescript",
  "items": [
    {
      "author": "abhigyanpatwari",
      "repo": "GitNexus",
      "avatar": "https://github.com/abhigyanpatwari.png",
      "repo_link": "https://github.com/abhigyanpatwari/GitNexus",
      "desc": "GitNexus: The Zero-Server Code Intelligence Engine - GitNexus is a client-side knowledge graph creator that runs entirely in your browser. Drop in a GitHub repo or ZIP file, and get an interactive knowledge graph wit a built in Graph RAG Agent. Perfect for code exploration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2246,
      "added_stars": 17090,
      "builtBy": [
        {
          "username": "abhigyanpatwari",
          "href": "https://github.com/abhigyanpatwari",
          "avatar": "https://avatars.githubusercontent.com/u/126312502"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "magyargergo",
          "href": "https://github.com/magyargergo",
          "avatar": "https://avatars.githubusercontent.com/u/11230420"
        },
        {
          "username": "naicud",
          "href": "https://github.com/naicud",
          "avatar": "https://avatars.githubusercontent.com/u/55764723"
        },
        {
          "username": "zander-raycraft",
          "href": "https://github.com/zander-raycraft",
          "avatar": "https://avatars.githubusercontent.com/u/99677330"
        }
      ]
    },
    {
      "author": "moeru-ai",
      "repo": "airi",
      "avatar": "https://github.com/moeru-ai.png",
      "repo_link": "https://github.com/moeru-ai/airi",
      "desc": "💖🧸 Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3526,
      "added_stars": 18061,
      "builtBy": [
        {
          "username": "nekomeowww",
          "href": "https://github.com/nekomeowww",
          "avatar": "https://avatars.githubusercontent.com/u/11081491"
        },
        {
          "username": "shinohara-rin",
          "href": "https://github.com/shinohara-rin",
          "avatar": "https://avatars.githubusercontent.com/u/25588514"
        },
        {
          "username": "luoling8192",
          "href": "https://github.com/luoling8192",
          "avatar": "https://avatars.githubusercontent.com/u/44741987"
        },
        {
          "username": "LemonNekoGH",
          "href": "https://github.com/LemonNekoGH",
          "avatar": "https://avatars.githubusercontent.com/u/17664845"
        },
        {
          "username": "sumimakito",
          "href": "https://github.com/sumimakito",
          "avatar": "https://avatars.githubusercontent.com/u/5277268"
        }
      ]
    },
    {
      "author": "koala73",
      "repo": "worldmonitor",
      "avatar": "https://github.com/koala73.png",
      "repo_link": "https://github.com/koala73/worldmonitor",
      "desc": "Real-time global intelligence dashboard — AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7100,
      "added_stars": 30441,
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
          "username": "danielimad",
          "href": "https://github.com/danielimad",
          "avatar": "https://avatars.githubusercontent.com/u/72716286"
        }
      ]
    },
    {
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need - A nano claude code–like 「agent harness」, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6027,
      "added_stars": 20342,
      "builtBy": [
        {
          "username": "CrazyBoyM",
          "href": "https://github.com/CrazyBoyM",
          "avatar": "https://avatars.githubusercontent.com/u/35400185"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "bansalkanav",
          "href": "https://github.com/bansalkanav",
          "avatar": "https://avatars.githubusercontent.com/u/13186335"
        },
        {
          "username": "Octane0411",
          "href": "https://github.com/Octane0411",
          "avatar": "https://avatars.githubusercontent.com/u/88922959"
        },
        {
          "username": "synix",
          "href": "https://github.com/synix",
          "avatar": "https://avatars.githubusercontent.com/u/3198234"
        }
      ]
    },
    {
      "author": "promptfoo",
      "repo": "promptfoo",
      "avatar": "https://github.com/promptfoo.png",
      "repo_link": "https://github.com/promptfoo/promptfoo",
      "desc": "Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI. Compare performance of GPT, Claude, Gemini, Llama, and more. Simple declarative configs with command line and CI/CD integration. Used by OpenAI and Anthropic.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1576,
      "added_stars": 7806,
      "builtBy": [
        {
          "username": "typpo",
          "href": "https://github.com/typpo",
          "avatar": "https://avatars.githubusercontent.com/u/310310"
        },
        {
          "username": "mldangelo",
          "href": "https://github.com/mldangelo",
          "avatar": "https://avatars.githubusercontent.com/u/7235481"
        },
        {
          "username": "sklein12",
          "href": "https://github.com/sklein12",
          "avatar": "https://avatars.githubusercontent.com/u/1080611"
        }
      ]
    },
    {
      "author": "superset-sh",
      "repo": "superset",
      "avatar": "https://github.com/superset-sh.png",
      "repo_link": "https://github.com/superset-sh/superset",
      "desc": "IDE for the AI Agents Era - Run an army of Claude Code, Codex, etc. on your machine",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 580,
      "added_stars": 5983,
      "builtBy": [
        {
          "username": "Kitenite",
          "href": "https://github.com/Kitenite",
          "avatar": "https://avatars.githubusercontent.com/u/31864905"
        },
        {
          "username": "saddlepaddle",
          "href": "https://github.com/saddlepaddle",
          "avatar": "https://avatars.githubusercontent.com/u/14907857"
        },
        {
          "username": "AviPeltz",
          "href": "https://github.com/AviPeltz",
          "avatar": "https://avatars.githubusercontent.com/u/11849162"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 2929,
      "added_stars": 12025,
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
          "username": "markusylisiurunen",
          "href": "https://github.com/markusylisiurunen",
          "avatar": "https://avatars.githubusercontent.com/u/8409947"
        },
        {
          "username": "aliou",
          "href": "https://github.com/aliou",
          "avatar": "https://avatars.githubusercontent.com/u/980367"
        }
      ]
    },
    {
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The leading agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features enterprise-grade architecture, distributed swarm intelligence, RAG integration, and native Claude Code / Codex Integration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2763,
      "added_stars": 10421,
      "builtBy": [
        {
          "username": "ruvnet",
          "href": "https://github.com/ruvnet",
          "avatar": "https://avatars.githubusercontent.com/u/2934394"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "alexx-ftw",
          "href": "https://github.com/alexx-ftw",
          "avatar": "https://avatars.githubusercontent.com/u/22500633"
        },
        {
          "username": "lanemc",
          "href": "https://github.com/lanemc",
          "avatar": "https://avatars.githubusercontent.com/u/15803865"
        },
        {
          "username": "tommy-ca",
          "href": "https://github.com/tommy-ca",
          "avatar": "https://avatars.githubusercontent.com/u/140900186"
        }
      ]
    },
    {
      "author": "ItzCrazyKns",
      "repo": "Vane",
      "avatar": "https://github.com/ItzCrazyKns.png",
      "repo_link": "https://github.com/ItzCrazyKns/Vane",
      "desc": "Vane is an AI-powered answering engine.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3622,
      "added_stars": 4460,
      "builtBy": [
        {
          "username": "ItzCrazyKns",
          "href": "https://github.com/ItzCrazyKns",
          "avatar": "https://avatars.githubusercontent.com/u/95534749"
        },
        {
          "username": "WanQuanXie",
          "href": "https://github.com/WanQuanXie",
          "avatar": "https://avatars.githubusercontent.com/u/8021137"
        },
        {
          "username": "OmarElKadri",
          "href": "https://github.com/OmarElKadri",
          "avatar": "https://avatars.githubusercontent.com/u/118303871"
        },
        {
          "username": "sjiampojamarn",
          "href": "https://github.com/sjiampojamarn",
          "avatar": "https://avatars.githubusercontent.com/u/18257803"
        }
      ]
    },
    {
      "author": "siteboon",
      "repo": "claudecodeui",
      "avatar": "https://github.com/siteboon.png",
      "repo_link": "https://github.com/siteboon/claudecodeui",
      "desc": "Use Claude Code, Cursor CLI or Codex on mobile and web with CloudCLI (aka Claude Code UI). CloudCLI is a free open source webui/GUI that helps you manage your Claude Code session and projects remotely",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1135,
      "added_stars": 2130,
      "builtBy": [
        {
          "username": "viper151",
          "href": "https://github.com/viper151",
          "avatar": "https://avatars.githubusercontent.com/u/7479045"
        },
        {
          "username": "blackmammoth",
          "href": "https://github.com/blackmammoth",
          "avatar": "https://avatars.githubusercontent.com/u/118998054"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "EricBlanquer",
          "href": "https://github.com/EricBlanquer",
          "avatar": "https://avatars.githubusercontent.com/u/1058958"
        },
        {
          "username": "unsystemizer",
          "href": "https://github.com/unsystemizer",
          "avatar": "https://avatars.githubusercontent.com/u/13134193"
        }
      ]
    },
    {
      "author": "openclaw",
      "repo": "clawhub",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/clawhub",
      "desc": "Skill Directory for OpenClaw",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1066,
      "added_stars": 4090,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "sethconvex",
          "href": "https://github.com/sethconvex",
          "avatar": "https://avatars.githubusercontent.com/u/239661579"
        },
        {
          "username": "thewilloftheshadow",
          "href": "https://github.com/thewilloftheshadow",
          "avatar": "https://avatars.githubusercontent.com/u/35580099"
        },
        {
          "username": "vincentkoc",
          "href": "https://github.com/vincentkoc",
          "avatar": "https://avatars.githubusercontent.com/u/25068"
        }
      ]
    },
    {
      "author": "blackboardsh",
      "repo": "electrobun",
      "avatar": "https://github.com/blackboardsh.png",
      "repo_link": "https://github.com/blackboardsh/electrobun",
      "desc": "Build ultra fast, tiny, and cross-platform desktop apps with Typescript.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 254,
      "added_stars": 3818,
      "builtBy": [
        {
          "username": "YoavCodes",
          "href": "https://github.com/YoavCodes",
          "avatar": "https://avatars.githubusercontent.com/u/75102186"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "NullDev",
          "href": "https://github.com/NullDev",
          "avatar": "https://avatars.githubusercontent.com/u/22935000"
        },
        {
          "username": "ungedenstad",
          "href": "https://github.com/ungedenstad",
          "avatar": "https://avatars.githubusercontent.com/u/61791080"
        },
        {
          "username": "AugusDogus",
          "href": "https://github.com/AugusDogus",
          "avatar": "https://avatars.githubusercontent.com/u/9794679"
        }
      ]
    },
    {
      "author": "tobi",
      "repo": "qmd",
      "avatar": "https://github.com/tobi.png",
      "repo_link": "https://github.com/tobi/qmd",
      "desc": "mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1002,
      "added_stars": 6491,
      "builtBy": [
        {
          "username": "tobi",
          "href": "https://github.com/tobi",
          "avatar": "https://avatars.githubusercontent.com/u/347"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shreyaskarnik",
          "href": "https://github.com/shreyaskarnik",
          "avatar": "https://avatars.githubusercontent.com/u/311217"
        },
        {
          "username": "burke",
          "href": "https://github.com/burke",
          "avatar": "https://avatars.githubusercontent.com/u/1284"
        },
        {
          "username": "mbrendan",
          "href": "https://github.com/mbrendan",
          "avatar": "https://avatars.githubusercontent.com/u/25271154"
        }
      ]
    },
    {
      "author": "southleft",
      "repo": "figma-console-mcp",
      "avatar": "https://github.com/southleft.png",
      "repo_link": "https://github.com/southleft/figma-console-mcp",
      "desc": "Your design system as an API. Connect AI to Figma for extraction, creation, and debugging.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 141,
      "added_stars": 641,
      "builtBy": [
        {
          "username": "tpitre",
          "href": "https://github.com/tpitre",
          "avatar": "https://avatars.githubusercontent.com/u/645765"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "abdokhaire",
          "href": "https://github.com/abdokhaire",
          "avatar": "https://avatars.githubusercontent.com/u/4311670"
        },
        {
          "username": "lukemoderwell",
          "href": "https://github.com/lukemoderwell",
          "avatar": "https://avatars.githubusercontent.com/u/2180358"
        },
        {
          "username": "klgral",
          "href": "https://github.com/klgral",
          "avatar": "https://avatars.githubusercontent.com/u/22195254"
        }
      ]
    },
    {
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3116,
      "added_stars": 4550,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
        }
      ]
    },
    {
      "author": "shadcn-ui",
      "repo": "ui",
      "avatar": "https://github.com/shadcn-ui.png",
      "repo_link": "https://github.com/shadcn-ui/ui",
      "desc": "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8299,
      "added_stars": 3834,
      "builtBy": [
        {
          "username": "shadcn",
          "href": "https://github.com/shadcn",
          "avatar": "https://avatars.githubusercontent.com/u/124599"
        },
        {
          "username": "kapishdima",
          "href": "https://github.com/kapishdima",
          "avatar": "https://avatars.githubusercontent.com/u/23422228"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "vercel-labs",
      "repo": "skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/skills",
      "desc": "The open agent skills tool - npx skills",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 938,
      "added_stars": 4842,
      "builtBy": [
        {
          "username": "quuu",
          "href": "https://github.com/quuu",
          "avatar": "https://avatars.githubusercontent.com/u/32676955"
        },
        {
          "username": "huozhi",
          "href": "https://github.com/huozhi",
          "avatar": "https://avatars.githubusercontent.com/u/4800338"
        },
        {
          "username": "elliotllliu",
          "href": "https://github.com/elliotllliu",
          "avatar": "https://avatars.githubusercontent.com/u/55885132"
        },
        {
          "username": "pi0",
          "href": "https://github.com/pi0",
          "avatar": "https://avatars.githubusercontent.com/u/5158436"
        }
      ]
    }
  ]
}
- Fetching feeds...
{
  "source": "devto",
  "tag": null,
  "sort": "top",
  "items": [
    {
      "title": "Check Up with Each Other",
      "description": "This is a submission for the 2026 WeCoded Challenge: Echoes of Experience     Over the last year, It...",
      "url": "https://dev.to/francistrdev/check-up-with-each-other-2ogc",
      "tags": "devchallenge, wecoded, dei, career",
      "reactions": 35,
      "comments": 13,
      "reading_time": 4,
      "author": "francistrdev"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-4ig2",
      "tags": "top7, discuss",
      "reactions": 21,
      "comments": 3,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-1bec",
      "tags": "discuss, watercooler, jokes",
      "reactions": 35,
      "comments": 28,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Implementing a RAG system: Crawl",
      "description": "I'm starting a \"Crawl, walk, run\" series of posts on various topics and decided to start with...",
      "url": "https://dev.to/gde/implementing-a-rag-system-crawl-5li",
      "tags": "rag, genai, opensource, adk",
      "reactions": 6,
      "comments": 3,
      "reading_time": 5,
      "author": "glen_yu"
    },
    {
      "title": "Deploy a Multi Agent ADK Application to Google Cloud Run",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build a multi...",
      "url": "https://dev.to/gde/deploy-a-multi-agent-adk-application-to-google-cloud-run-59on",
      "tags": "gemini, adkui, googlecloudrun, python",
      "reactions": 5,
      "comments": 0,
      "reading_time": 5,
      "author": "xbill"
    },
    {
      "title": "Building a Multimodal Cross Cloud Live Agent with ADK, Amazon Lightsail, and Gemini CLI",
      "description": "Leveraging the Google Agent Development Kit (ADK) and the underlying Gemini LLM to build cross cloud...",
      "url": "https://dev.to/gde/building-a-multimodal-cross-cloud-live-agent-with-adk-amazon-lightsail-and-gemini-cli-4p56",
      "tags": "googleadk, awslightsail, gemini, python",
      "reactions": 5,
      "comments": 0,
      "reading_time": 6,
      "author": "xbill"
    },
    {
      "title": "AI Writes Code. You Own Quality.",
      "description": "The more I use AI tools like Claude Code, the clearer it becomes: engineering skills are what make AI...",
      "url": "https://dev.to/helderberto/ai-writes-code-you-own-quality-19g0",
      "tags": "ai, software, development, programming",
      "reactions": 15,
      "comments": 11,
      "reading_time": 6,
      "author": "helderberto"
    },
    {
      "title": "Building a Weather Station Using an Old Raspberry Pi",
      "description": "For a long time I wanted to build a weather station at home because I like meteorology and for the...",
      "url": "https://dev.to/nandofm/building-a-weather-station-using-an-old-raspberry-pi-5333",
      "tags": "raspberrypi, sideprojects, learning, community",
      "reactions": 38,
      "comments": 10,
      "reading_time": 3,
      "author": "nandofm"
    },
    {
      "title": "I built a terminal-native Little Snitch alternative for macOS",
      "description": "CLI Snitch monitors every outbound connection from your Mac and lets you allow or deny them with real pfctl firewall rules — all from the terminal.",
      "url": "https://dev.to/nickciolpan/i-built-a-terminal-native-little-snitch-alternative-for-macos-4807",
      "tags": "go, macos, security, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "nickciolpan"
    },
    {
      "title": "I Built a Type-Safe SI Unit Library in Swift — And the Compiler Catches Your Physics Mistakes",
      "description": "SystemeInternational uses phantom types, affine spaces, and zero-cost abstractions to make unit misuse a compile-time error. 306 tests, 8 bytes per quantity, and unit conversions at 3 ns/op in Release.",
      "url": "https://dev.to/moriturus/i-built-a-type-safe-si-unit-library-in-swift-and-the-compiler-catches-your-physics-mistakes-32he",
      "tags": "swift, programming, opensource, types",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "moriturus"
    }
  ]
}
```

## 4. Quick-Win Offers (Automation/Web/AI)

**Query:** What quick-win offers can I package (automation/web/AI)?

**Command:**
```bash
echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set' ; node bin/main.js --json devto -t productivity -s top -c 10 ; node bin/main.js --json reddit -t freelance -s top
```

**Output:**
```text
[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set
- Fetching feeds...
{
  "source": "devto",
  "tag": "productivity",
  "sort": "top",
  "items": [
    {
      "title": "Engenharia de Prompt: Por Que a Forma Como Você Pergunta Muda Tudo(Um guia introdutório)",
      "description": "Neste artigo irei explicar alguns pontos importantes sobre Engenharia de prompt, e como saber esses...",
      "url": "https://dev.to/fransborges/engenharia-de-prompt-por-que-a-forma-como-voce-pergunta-muda-tudoum-guia-introdutorio-3hb0",
      "tags": "ai, productivity, beginners, braziliandevs",
      "reactions": 115,
      "comments": 4,
      "reading_time": 7,
      "author": "fransborges"
    },
    {
      "title": "I Stopped Writing Code First, And My Productivity Doubled",
      "description": "For most of my career, I followed the same instinct as every developer.  Open the editor. Start...",
      "url": "https://dev.to/jaideepparashar/i-stopped-writing-code-first-and-my-productivity-doubled-3p7p",
      "tags": "ai, programming, devops, productivity",
      "reactions": 11,
      "comments": 3,
      "reading_time": 3,
      "author": "jaideepparashar"
    },
    {
      "title": "Why AI-generated UI still isn’t production-ready",
      "description": "AI tools can generate UI really fast now. At first glance, it feels like we’ve solved a huge part of...",
      "url": "https://dev.to/frontuna_system_0e112840e/why-ai-generated-ui-still-isnt-production-ready-2ig9",
      "tags": "ai, frontend, productivity, ui",
      "reactions": 0,
      "comments": 2,
      "reading_time": 1,
      "author": "frontuna_system_0e112840e"
    },
    {
      "title": "Professional Development Email Templates: Mentorship Requests, Conference Applications & Certification Communication",
      "description": "Investing in Your Professional Growth   Professional development often requires asking for...",
      "url": "https://dev.to/skippy_magnificent_8cce24/professional-development-email-templates-mentorship-requests-conference-applications--56pk",
      "tags": "career, discuss, watercooler, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "skippy_magnificent_8cce24"
    },
    {
      "title": "Stop Guessing Your LLM Costs: Track Every Token in Real Time",
      "description": "If you're building with LLMs in 2026, you already know the pain: API costs creep up silently. You...",
      "url": "https://dev.to/godnick/stop-guessing-your-llm-costs-track-every-token-in-real-time-3kdj",
      "tags": "ai, productivity, devtools, llm",
      "reactions": 0,
      "comments": 1,
      "reading_time": 2,
      "author": "godnick"
    },
    {
      "title": "Stop Guessing Your LLM Costs: Track Every Token in Real Time",
      "description": "If you're building with LLMs in 2026, you already know the pain: API costs creep up silently. You...",
      "url": "https://dev.to/godnick/stop-guessing-your-llm-costs-track-every-token-in-real-time-3jb5",
      "tags": "ai, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "godnick"
    },
    {
      "title": "How to Build an AI Employee Using MCP and Claude",
      "description": "What if your AI assistant could actually DO things — not just talk about them?  With MCP (Model...",
      "url": "https://dev.to/0n/how-to-build-an-ai-employee-using-mcp-and-claude-416f",
      "tags": "ai, automation, mcp, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "0n"
    },
    {
      "title": "# How I Automated My MSP Tasks Using PowerShell (And Saved Hours Every Week)",
      "description": "When I first started working with MSP environments, I thought the hardest part would be technical...",
      "url": "https://dev.to/arthur_kirby_f66568779ac5/-how-i-automated-my-msp-tasks-using-powershell-and-saved-hours-every-week-3ji3",
      "tags": "automation, cli, devops, productivity",
      "reactions": 40,
      "comments": 2,
      "reading_time": 3,
      "author": "arthur_kirby_f66568779ac5"
    },
    {
      "title": "I Built 15 CLI Tools in One Day (And You Can Too)",
      "description": "How I went from zero to a complete developer toolkit using AI-assisted development. 15 production-ready CLI tools in 24 hours.",
      "url": "https://dev.to/universe7creator/i-built-15-cli-tools-in-one-day-and-you-can-too-4mo7",
      "tags": "cli, python, productivity, automation",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "universe7creator"
    },
    {
      "title": "How to Actually Find Photos on Your Windows PC",
      "description": "I have somewhere north of 150,000 photos on my hard drive and that number keeps growing. Not in the...",
      "url": "https://dev.to/narendrac/how-to-actually-find-photos-on-your-windows-pc-17da",
      "tags": "windows, productivity, privacy, photography",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "narendrac"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
```

