# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-10-09 06:44:16 UTC

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
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "github",
  "since": "weekly",
  "language": "javascript",
  "items": [
    {
      "author": "DuarteSantos8",
      "repo": "openGym",
      "avatar": "https://github.com/DuarteSantos8.png",
      "repo_link": "https://github.com/DuarteSantos8/openGym",
      "desc": "Self-hosted gym & body-weight tracker — plan routines, log workouts (supersets, warm-ups, cardio), see which muscles are trained, fatigued or detrained, import from FitNotes/Strong/Hevy, passkey login. Your data, your server.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1035,
      "added_stars": 6086,
      "builtBy": [
        {
          "username": "DuarteSantos8",
          "href": "https://github.com/DuarteSantos8",
          "avatar": "https://avatars.githubusercontent.com/u/171949022"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "kurktchiev",
          "href": "https://github.com/kurktchiev",
          "avatar": "https://avatars.githubusercontent.com/u/5804477"
        },
        {
          "username": "sgoendoer",
          "href": "https://github.com/sgoendoer",
          "avatar": "https://avatars.githubusercontent.com/u/1579152"
        },
        {
          "username": "Space-Hermes",
          "href": "https://github.com/Space-Hermes",
          "avatar": "https://avatars.githubusercontent.com/u/290709289"
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
      "forks": 4678,
      "added_stars": 5260,
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
          "username": "abdulwahabone",
          "href": "https://github.com/abdulwahabone",
          "avatar": "https://avatars.githubusercontent.com/u/32850166"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "androoAGI",
      "repo": "starnet",
      "avatar": "https://github.com/androoAGI.png",
      "repo_link": "https://github.com/androoAGI/starnet",
      "desc": "A living pixel-art station where real AI agents do real work. Local-first desktop agent harness - bring your own key, watch your crew actually run.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 237,
      "added_stars": 409,
      "builtBy": [
        {
          "username": "androoAGI",
          "href": "https://github.com/androoAGI",
          "avatar": "https://avatars.githubusercontent.com/u/224686490"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "DietrichGebert",
      "repo": "ponytail",
      "avatar": "https://github.com/DietrichGebert.png",
      "repo_link": "https://github.com/DietrichGebert/ponytail",
      "desc": "Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 8541,
      "added_stars": 8511,
      "builtBy": [
        {
          "username": "DietrichGebert",
          "href": "https://github.com/DietrichGebert",
          "avatar": "https://avatars.githubusercontent.com/u/137048761"
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
          "username": "Lakshya77089",
          "href": "https://github.com/Lakshya77089",
          "avatar": "https://avatars.githubusercontent.com/u/169168095"
        },
        {
          "username": "dhedhialy",
          "href": "https://github.com/dhedhialy",
          "avatar": "https://avatars.githubusercontent.com/u/91044156"
        }
      ]
    },
    {
      "author": "addyosmani",
      "repo": "agent-skills",
      "avatar": "https://github.com/addyosmani.png",
      "repo_link": "https://github.com/addyosmani/agent-skills",
      "desc": "Production-grade engineering skills for AI coding agents.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 10830,
      "added_stars": 3103,
      "builtBy": [
        {
          "username": "addyosmani",
          "href": "https://github.com/addyosmani",
          "avatar": "https://avatars.githubusercontent.com/u/110953"
        },
        {
          "username": "nucliweb",
          "href": "https://github.com/nucliweb",
          "avatar": "https://avatars.githubusercontent.com/u/1307927"
        },
        {
          "username": "federicobartoli",
          "href": "https://github.com/federicobartoli",
          "avatar": "https://avatars.githubusercontent.com/u/27234034"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ayobamiseun",
          "href": "https://github.com/ayobamiseun",
          "avatar": "https://avatars.githubusercontent.com/u/66267222"
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
      "forks": 8005,
      "added_stars": 1643,
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
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "FekyBaz",
          "href": "https://github.com/FekyBaz",
          "avatar": "https://avatars.githubusercontent.com/u/97516177"
        },
        {
          "username": "imMamdouhaboammar",
          "href": "https://github.com/imMamdouhaboammar",
          "avatar": "https://avatars.githubusercontent.com/u/58908124"
        }
      ]
    },
    {
      "author": "mnfst",
      "repo": "awesome-free-llm-apis",
      "avatar": "https://github.com/mnfst.png",
      "repo_link": "https://github.com/mnfst/awesome-free-llm-apis",
      "desc": "List of Permanent Free LLM API (API Keys)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1018,
      "added_stars": 648,
      "builtBy": [
        {
          "username": "SebConejo",
          "href": "https://github.com/SebConejo",
          "avatar": "https://avatars.githubusercontent.com/u/11723962"
        },
        {
          "username": "brunobuddy",
          "href": "https://github.com/brunobuddy",
          "avatar": "https://avatars.githubusercontent.com/u/6626184"
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
      "author": "Leonxlnx",
      "repo": "taste-skill",
      "avatar": "https://github.com/Leonxlnx.png",
      "repo_link": "https://github.com/Leonxlnx/taste-skill",
      "desc": "Taste-Skill - gives your AI good taste. stops the AI from generating boring, generic slop",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6377,
      "added_stars": 2134,
      "builtBy": [
        {
          "username": "Leonxlnx",
          "href": "https://github.com/Leonxlnx",
          "avatar": "https://avatars.githubusercontent.com/u/219127460"
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
          "username": "luojiyin1987",
          "href": "https://github.com/luojiyin1987",
          "avatar": "https://avatars.githubusercontent.com/u/6524977"
        },
        {
          "username": "jkk442",
          "href": "https://github.com/jkk442",
          "avatar": "https://avatars.githubusercontent.com/u/60716205"
        }
      ]
    },
    {
      "author": "tabler",
      "repo": "tabler-icons",
      "avatar": "https://github.com/tabler.png",
      "repo_link": "https://github.com/tabler/tabler-icons",
      "desc": "A set of over 6200 free MIT-licensed high-quality SVG icons for you to use in your web projects.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1227,
      "added_stars": 252,
      "builtBy": [
        {
          "username": "codecalm",
          "href": "https://github.com/codecalm",
          "avatar": "https://avatars.githubusercontent.com/u/1282324"
        },
        {
          "username": "FreexD",
          "href": "https://github.com/FreexD",
          "avatar": "https://avatars.githubusercontent.com/u/7117869"
        },
        {
          "username": "0xflotus",
          "href": "https://github.com/0xflotus",
          "avatar": "https://avatars.githubusercontent.com/u/26602940"
        },
        {
          "username": "BGaweda",
          "href": "https://github.com/BGaweda",
          "avatar": "https://avatars.githubusercontent.com/u/73077398"
        },
        {
          "username": "mauriciabad",
          "href": "https://github.com/mauriciabad",
          "avatar": "https://avatars.githubusercontent.com/u/12821361"
        }
      ]
    },
    {
      "author": "spicetify",
      "repo": "cli",
      "avatar": "https://github.com/spicetify.png",
      "repo_link": "https://github.com/spicetify/cli",
      "desc": "Command-line tool to customize Spotify client. Supports Windows, macOS, and Linux.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 959,
      "added_stars": 165,
      "builtBy": [
        {
          "username": "khanhas",
          "href": "https://github.com/khanhas",
          "avatar": "https://avatars.githubusercontent.com/u/26436809"
        },
        {
          "username": "rxri",
          "href": "https://github.com/rxri",
          "avatar": "https://avatars.githubusercontent.com/u/9348108"
        },
        {
          "username": "kyrie25",
          "href": "https://github.com/kyrie25",
          "avatar": "https://avatars.githubusercontent.com/u/77577746"
        },
        {
          "username": "SunsetTechuila",
          "href": "https://github.com/SunsetTechuila",
          "avatar": "https://avatars.githubusercontent.com/u/115353812"
        }
      ]
    },
    {
      "author": "hughhowey",
      "repo": "neo",
      "avatar": "https://github.com/hughhowey.png",
      "repo_link": "https://github.com/hughhowey/neo",
      "desc": "A novel-writing tool created by a novelist.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 168,
      "added_stars": 187,
      "builtBy": [
        {
          "username": "hughhowey",
          "href": "https://github.com/hughhowey",
          "avatar": "https://avatars.githubusercontent.com/u/30789359"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "sebastienpiconnier",
          "href": "https://github.com/sebastienpiconnier",
          "avatar": "https://avatars.githubusercontent.com/u/8091322"
        },
        {
          "username": "triffanna-oss",
          "href": "https://github.com/triffanna-oss",
          "avatar": "https://avatars.githubusercontent.com/u/240713801"
        },
        {
          "username": "gtanner",
          "href": "https://github.com/gtanner",
          "avatar": "https://avatars.githubusercontent.com/u/317051"
        }
      ]
    },
    {
      "author": "byoungd",
      "repo": "up",
      "avatar": "https://github.com/byoungd.png",
      "repo_link": "https://github.com/byoungd/up",
      "desc": "人生进阶指南 韩先凯的人生进阶指南 英语学习指南 离谱的人生 AI时代终身学习：AI、学习、创业与成长。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6743,
      "added_stars": 1323,
      "builtBy": [
        {
          "username": "byoungd",
          "href": "https://github.com/byoungd",
          "avatar": "https://avatars.githubusercontent.com/u/16145783"
        },
        {
          "username": "fakesnow",
          "href": "https://github.com/fakesnow",
          "avatar": "https://avatars.githubusercontent.com/u/4256108"
        },
        {
          "username": "holtenko",
          "href": "https://github.com/holtenko",
          "avatar": "https://avatars.githubusercontent.com/u/17680637"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "WMXPY",
          "href": "https://github.com/WMXPY",
          "avatar": "https://avatars.githubusercontent.com/u/5085821"
        }
      ]
    },
    {
      "author": "Neet-Nestor",
      "repo": "Telegram-Media-Downloader",
      "avatar": "https://github.com/Neet-Nestor.png",
      "repo_link": "https://github.com/Neet-Nestor/Telegram-Media-Downloader",
      "desc": "A script allowing you to download images and videos from Telegram web even if the group restricts downloading.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 592,
      "added_stars": 80,
      "builtBy": [
        {
          "username": "Neet-Nestor",
          "href": "https://github.com/Neet-Nestor",
          "avatar": "https://avatars.githubusercontent.com/u/23090573"
        },
        {
          "username": "EuropaYou",
          "href": "https://github.com/EuropaYou",
          "avatar": "https://avatars.githubusercontent.com/u/53128780"
        },
        {
          "username": "hrukalive",
          "href": "https://github.com/hrukalive",
          "avatar": "https://avatars.githubusercontent.com/u/7337458"
        },
        {
          "username": "Flame239",
          "href": "https://github.com/Flame239",
          "avatar": "https://avatars.githubusercontent.com/u/32807896"
        },
        {
          "username": "Blueberryy",
          "href": "https://github.com/Blueberryy",
          "avatar": "https://avatars.githubusercontent.com/u/36592509"
        }
      ]
    },
    {
      "author": "vercel",
      "repo": "next.js",
      "avatar": "https://github.com/vercel.png",
      "repo_link": "https://github.com/vercel/next.js",
      "desc": "The React Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 34241,
      "added_stars": 415,
      "builtBy": [
        {
          "username": "ijjk",
          "href": "https://github.com/ijjk",
          "avatar": "https://avatars.githubusercontent.com/u/22380829"
        },
        {
          "username": "timneutkens",
          "href": "https://github.com/timneutkens",
          "avatar": "https://avatars.githubusercontent.com/u/6324199"
        },
        {
          "username": "sokra",
          "href": "https://github.com/sokra",
          "avatar": "https://avatars.githubusercontent.com/u/1365881"
        },
        {
          "username": "vercel-release-bot",
          "href": "https://github.com/vercel-release-bot",
          "avatar": "https://avatars.githubusercontent.com/u/88769842"
        },
        {
          "username": "huozhi",
          "href": "https://github.com/huozhi",
          "avatar": "https://avatars.githubusercontent.com/u/4800338"
        }
      ]
    },
    {
      "author": "withmarbleapp",
      "repo": "os-taxonomy",
      "avatar": "https://github.com/withmarbleapp.png",
      "repo_link": "https://github.com/withmarbleapp/os-taxonomy",
      "desc": "",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 829,
      "added_stars": 178,
      "builtBy": [
        {
          "username": "lauramionel",
          "href": "https://github.com/lauramionel",
          "avatar": "https://avatars.githubusercontent.com/u/262926223"
        },
        {
          "username": "guillaumeboniface",
          "href": "https://github.com/guillaumeboniface",
          "avatar": "https://avatars.githubusercontent.com/u/2501329"
        }
      ]
    },
    {
      "author": "kanoqwq",
      "repo": "UFI-TOOLS",
      "avatar": "https://github.com/kanoqwq.png",
      "repo_link": "https://github.com/kanoqwq/UFI-TOOLS",
      "desc": "A functional tools for z*e devices (F50 | U30 Air)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 267,
      "added_stars": 623,
      "builtBy": [
        {
          "username": "kanoqwq",
          "href": "https://github.com/kanoqwq",
          "avatar": "https://avatars.githubusercontent.com/u/33284465"
        },
        {
          "username": "jizni",
          "href": "https://github.com/jizni",
          "avatar": "https://avatars.githubusercontent.com/u/17927350"
        },
        {
          "username": "ikxin",
          "href": "https://github.com/ikxin",
          "avatar": "https://avatars.githubusercontent.com/u/54543761"
        },
        {
          "username": "anhwaivo",
          "href": "https://github.com/anhwaivo",
          "avatar": "https://avatars.githubusercontent.com/u/97143764"
        },
        {
          "username": "fc8",
          "href": "https://github.com/fc8",
          "avatar": "https://avatars.githubusercontent.com/u/45502651"
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
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "ilreb",
      "descendants": 70,
      "id": 50016312,
      "kids": [
        50016749,
        50016508,
        50016483,
        50016571,
        50016464,
        50016537,
        50016669,
        50016762,
        50016446,
        50016845,
        50016682,
        50016510,
        50016465,
        50016466,
        50016769,
        50016723,
        50016618,
        50016418,
        50016532,
        50016719,
        50016576
      ],
      "score": 98,
      "time": 1791523378,
      "title": "Show HN: Quake ported to safe Rust, playable in browser",
      "type": "story",
      "url": "https://quake-srp.pages.dev/"
    },
    {
      "by": "signa11",
      "descendants": 56,
      "id": 50015074,
      "kids": [
        50016771,
        50016256,
        50015519,
        50016735,
        50016057,
        50015564,
        50016207,
        50015407,
        50016366,
        50015391,
        50015484,
        50015364,
        50015471
      ],
      "score": 89,
      "time": 1791511373,
      "title": "Reducing undefined behavior in the C language",
      "type": "story",
      "url": "https://lwn.net/Articles/1095811/"
    },
    {
      "by": "jonotime",
      "descendants": 471,
      "id": 50000488,
      "kids": [
        50012463,
        50011021,
        50011685,
        50012504,
        50011347,
        50012754,
        50011885,
        50016514,
        50015596,
        50014175,
        50011195,
        50011160,
        50011156,
        50012393,
        50016390,
        50015547,
        50011664,
        50012356,
        50016024,
        50011724,
        50011219,
        50012137,
        50012928,
        50016095,
        50011476,
        50015544,
        50016499,
        50012766,
        50014997,
        50015970,
        50014867,
        50013361,
        50012564,
        50012612,
        50011612,
        50013204,
        50015875,
        50014868,
        50014775,
        50014580,
        50015687,
        50015032,
        50011540,
        50014934,
        50015894,
        50013738,
        50012815,
        50011075,
        50013827,
        50011070,
        50014858,
        50012878,
        50014820,
        50011024,
        50012978,
        50013385,
        50013332,
        50011180,
        50012081,
        50015227,
        50011682,
        50011318,
        50012277,
        50012031,
        50011467,
        50011025,
        50011971,
        50014923,
        50014214,
        50012874,
        50011441,
        50014607,
        50011264,
        50011845,
        50011506,
        50015280,
        50011502,
        50014810,
        50011137,
        50014714,
        50014642,
        50013507,
        50012559,
        50013307,
        50013304,
        50013263,
        50013249,
        50013174,
        50012117,
        50016408,
        50011829,
        50011666,
        50011192,
        50014488,
        50013580,
        50012173,
        50011533,
        50014333,
        50001187,
        50013677,
        50016493,
        50015749,
        50016704,
        50011830,
        50012985,
        50012285,
        50011572,
        50011389,
        50011610
      ],
      "score": 586,
      "time": 1791418488,
      "title": "Why isn't the industry freaking out about DeepSeek 4.1 Flash?",
      "type": "story",
      "url": "https://www.dgt.is/blog/2026-10-07-deepseek-freek-out/"
    },
    {
      "by": "gmays",
      "descendants": 143,
      "id": 50008427,
      "kids": [
        50011633,
        50008908,
        50009740,
        50009751,
        50010298,
        50015141,
        50008830,
        50013213,
        50015122,
        50008973,
        50016036,
        50015218,
        50015389,
        50015954,
        50012184,
        50010500,
        50014055,
        50009780,
        50011619,
        50014308,
        50015137,
        50010388,
        50009097,
        50009247,
        50009963,
        50011617,
        50015051,
        50009699,
        50011117,
        50016050,
        50010876,
        50009122,
        50010134,
        50009409,
        50013653,
        50008896,
        50010697,
        50009255,
        50008838,
        50014672,
        50011108,
        50012217,
        50011280,
        50010842,
        50011222,
        50011246,
        50011237,
        50011197,
        50009506,
        50016843,
        50015851,
        50015751,
        50015302,
        50015179,
        50014152,
        50011973,
        50009072,
        50010314,
        50011162,
        50009418,
        50011765,
        50009457,
        50010389,
        50010394
      ],
      "score": 698,
      "time": 1791478779,
      "title": "Whistle: Speech to Text in 16.9 MB",
      "type": "story",
      "url": "https://cactuscompute.com/blog/whistle"
    },
    {
      "by": "sohkamyung",
      "descendants": 59,
      "id": 50015515,
      "kids": [
        50016852,
        50016411,
        50016688,
        50015724,
        50016796,
        50015863,
        50015919,
        50016652,
        50016515,
        50016289,
        50015597,
        50016304,
        50016266,
        50016343,
        50016321,
        50015666,
        50015852,
        50015556,
        50015900,
        50016178,
        50016044,
        50016586,
        50015694,
        50016278,
        50015987,
        50015679,
        50015726
      ],
      "score": 66,
      "time": 1791515285,
      "title": "Keyboard differences between Windows and Macs",
      "type": "story",
      "url": "https://unsung.aresluna.org/deeper-dive-keyboard-differences-between-windows-and-macs/"
    },
    {
      "by": "ck2",
      "descendants": 356,
      "id": 49995495,
      "kids": [
        49996221,
        50016814,
        50015507,
        50016827,
        50014444,
        50014674,
        50012077,
        50013043,
        50013220,
        50014114,
        49999503,
        50016217,
        50014385,
        50014712,
        50013744,
        50012202,
        50016601,
        50012230,
        50016104,
        50001848,
        50012076,
        50014928,
        50013492,
        50013592,
        50011304,
        50013601,
        50015171,
        50016431,
        50014300,
        50015743,
        50015465,
        50011823,
        50014328,
        50002044,
        50013324,
        49998722,
        49997515,
        49996219,
        50015258,
        50014236,
        50013061,
        49998924,
        50014606,
        50001685,
        49998266,
        50014167,
        50012515,
        50011383,
        50012501,
        50015326,
        50012639,
        50013508
      ],
      "score": 601,
      "text": "<a href=\"https:&#x2F;&#x2F;x.com&#x2F;NomadsGalaxy&#x2F;status&#x2F;2107284088247689290\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;NomadsGalaxy&#x2F;status&#x2F;2107284088247689290</a>",
      "time": 1791392190,
      "title": "Man discovers his parents' coffee machine used 1TB of data in 10 days",
      "type": "story",
      "url": "https://www.dexerto.com/entertainment/man-discovers-his-parents-coffee-machine-used-1tb-of-data-in-10-days-3416399/"
    },
    {
      "by": "kbyatnal",
      "descendants": 141,
      "id": 50009295,
      "kids": [
        50016816,
        50015757,
        50016826,
        50011847,
        50011865,
        50011769,
        50012156,
        50012034,
        50016022,
        50011812,
        50012030,
        50011348,
        50011939,
        50011459,
        50011957,
        50012351,
        50012387,
        50014219,
        50011930,
        50011719,
        50011990,
        50015046,
        50013140,
        50016454,
        50012259,
        50014085,
        50011995,
        50013376,
        50012589,
        50011356,
        50011425,
        50011825,
        50012126,
        50012215,
        50013156,
        50011660,
        50014312,
        50012549,
        50014207,
        50013887,
        50012438,
        50012325,
        50013715,
        50011438,
        50013120,
        50012537,
        50015360
      ],
      "score": 396,
      "time": 1791481909,
      "title": "Theranos.world",
      "type": "story",
      "url": "https://www.theranos.world/"
    },
    {
      "by": "soheilpro",
      "descendants": 94,
      "id": 49986882,
      "kids": [
        50012378,
        50015210,
        50012723,
        50014136,
        50011618,
        50012581,
        50014372,
        50012760,
        50014883,
        50014047,
        50015207,
        50011680,
        50014041,
        49990442,
        49989744,
        50015332,
        49994693,
        50011735,
        50013153,
        49990076,
        50012234,
        50011600
      ],
      "score": 537,
      "time": 1791337263,
      "title": "I hired an illustrator to draw my house. Now it's my Home Assistant dashboard",
      "type": "story",
      "url": "https://antonfrolov.substack.com/p/i-hired-an-illustrator-to-draw-my"
    },
    {
      "by": "Michelangelo11",
      "descendants": 96,
      "id": 50003796,
      "kids": [
        50016864,
        50014287,
        50012822,
        50016790,
        50015214,
        50016184,
        50011535,
        50012198,
        50003952,
        50015378,
        50015761,
        50013484,
        50011520,
        50013068,
        50013915,
        50013124,
        50013729,
        50014143,
        50013973,
        50014591,
        50015134,
        50014217,
        50013188,
        50014092,
        50013029,
        50012322,
        50003900,
        50015602
      ],
      "score": 335,
      "time": 1791452898,
      "title": "Yes, and",
      "type": "story",
      "url": "https://htmx.org/essays/yes-and/"
    },
    {
      "by": "md224",
      "descendants": 122,
      "id": 50013902,
      "kids": [
        50016829,
        50014233,
        50014707,
        50014371,
        50016860,
        50014717,
        50014355,
        50014341,
        50015108,
        50014608,
        50014530,
        50014789,
        50014427,
        50014437,
        50014250,
        50014525,
        50014807,
        50014651,
        50014388,
        50014658,
        50014314,
        50014359,
        50014345,
        50014805,
        50014330,
        50014862,
        50014498,
        50014452
      ],
      "score": 90,
      "time": 1791502183,
      "title": "OpenAI, the Partition Principle, and Mathematics",
      "type": "story",
      "url": "https://karagila.org/2026/openai-pp/"
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
      "title": "The people holding up the internet",
      "url": "https://sheets.works/data-viz/holding-up-the-internet",
      "score": 65,
      "comments": 20,
      "tags": [
        "historical",
        "web"
      ],
      "id": "lhr4oy"
    },
    {
      "title": "Bevy 0.20",
      "url": "https://bevy.org/news/bevy-0-20/",
      "score": 23,
      "comments": 1,
      "tags": [
        "games",
        "release",
        "rust"
      ],
      "id": "3gikyb"
    },
    {
      "title": "Ending the Casuarina Linux Experiment",
      "url": "https://casuarina.org/news/ending-the-casuarina-linux-experiment/",
      "score": 38,
      "comments": 5,
      "tags": [
        "linux"
      ],
      "id": "sdlhhs"
    },
    {
      "title": "Margaret Hamilton, computing pioneer who led software development for the Apollo program, dies at 90",
      "url": "https://news.mit.edu/2026/margaret-hamilton-computing-pioneer-dies-1007",
      "score": 285,
      "comments": 6,
      "tags": [
        "person"
      ],
      "id": "9qtgrm"
    },
    {
      "title": "I've Been Deindexed by Google",
      "url": "https://kennyqin.com/deindexed-by-google/",
      "score": 54,
      "comments": 15,
      "tags": [
        "practices"
      ],
      "id": "en3vgh"
    },
    {
      "title": "Navier-Stokes lost in translation: Why Lean verification of AI autoformalisation does not guarantee correct natural language proofs",
      "url": "https://arxiv.org/abs/2610.08144",
      "score": 18,
      "comments": 8,
      "tags": [
        "formalmethods",
        "math",
        "pdf",
        "reversing",
        "vibecoding"
      ],
      "id": "axmhji"
    },
    {
      "title": "The Missing Piece in Rust Error Handling",
      "url": "https://mcmah309.github.io/posts/the-missing-piece-in-rust-error-handling/",
      "score": 34,
      "comments": 5,
      "tags": [
        "rust"
      ],
      "id": "3vfu09"
    },
    {
      "title": "Anti-Patterns in Software Blogging",
      "url": "https://refactoringenglish.com/blog/anti-patterns-software-blogging/",
      "score": 136,
      "comments": 51,
      "tags": [
        "programming"
      ],
      "id": "rwdufq"
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6221,
      "added_stars": 34334,
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
      "author": "anthropics",
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5569,
      "added_stars": 4400,
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
      "author": "vectorize-io",
      "repo": "hindsight",
      "avatar": "https://github.com/vectorize-io.png",
      "repo_link": "https://github.com/vectorize-io/hindsight",
      "desc": "Hindsight: Agent Memory That Learns",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5974,
      "added_stars": 24260,
      "builtBy": [
        {
          "username": "nicoloboschi",
          "href": "https://github.com/nicoloboschi",
          "avatar": "https://avatars.githubusercontent.com/u/23314389"
        },
        {
          "username": "benfrank241",
          "href": "https://github.com/benfrank241",
          "avatar": "https://avatars.githubusercontent.com/u/62250174"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cdbartholomew",
          "href": "https://github.com/cdbartholomew",
          "avatar": "https://avatars.githubusercontent.com/u/22917476"
        },
        {
          "username": "r266-tech",
          "href": "https://github.com/r266-tech",
          "avatar": "https://avatars.githubusercontent.com/u/233881301"
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
      "forks": 977,
      "added_stars": 6497,
      "builtBy": [
        {
          "username": "jubaoliang-tencent",
          "href": "https://github.com/jubaoliang-tencent",
          "avatar": "https://avatars.githubusercontent.com/u/309035352"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "jubaoliang",
          "href": "https://github.com/jubaoliang",
          "avatar": "https://avatars.githubusercontent.com/u/222386738"
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3221,
      "added_stars": 3453,
      "builtBy": [
        {
          "username": "jordanecker-ant",
          "href": "https://github.com/jordanecker-ant",
          "avatar": "https://avatars.githubusercontent.com/u/305637556"
        },
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
          "username": "mattpic-ant",
          "href": "https://github.com/mattpic-ant",
          "avatar": "https://avatars.githubusercontent.com/u/227474486"
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
      "forks": 3190,
      "added_stars": 27656,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 11442,
      "added_stars": 13041,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8248,
      "added_stars": 15772,
      "builtBy": [
        {
          "username": "Panniantong",
          "href": "https://github.com/Panniantong",
          "avatar": "https://avatars.githubusercontent.com/u/73925474"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "nyxst4ck",
          "href": "https://github.com/nyxst4ck",
          "avatar": "https://avatars.githubusercontent.com/u/289980115"
        },
        {
          "username": "kadaliao",
          "href": "https://github.com/kadaliao",
          "avatar": "https://avatars.githubusercontent.com/u/7401626"
        },
        {
          "username": "hymansun",
          "href": "https://github.com/hymansun",
          "avatar": "https://avatars.githubusercontent.com/u/10735997"
        }
      ]
    },
    {
      "author": "superdesigndev",
      "repo": "treg",
      "avatar": "https://github.com/superdesigndev.png",
      "repo_link": "https://github.com/superdesigndev/treg",
      "desc": "OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 394,
      "added_stars": 3580,
      "builtBy": [
        {
          "username": "JayZeeDesign",
          "href": "https://github.com/JayZeeDesign",
          "avatar": "https://avatars.githubusercontent.com/u/22532527"
        },
        {
          "username": "stonexer",
          "href": "https://github.com/stonexer",
          "avatar": "https://avatars.githubusercontent.com/u/6255130"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shehjad-dev",
          "href": "https://github.com/shehjad-dev",
          "avatar": "https://avatars.githubusercontent.com/u/64325867"
        },
        {
          "username": "unclecode",
          "href": "https://github.com/unclecode",
          "avatar": "https://avatars.githubusercontent.com/u/12494079"
        }
      ]
    },
    {
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8860,
      "added_stars": 7279,
      "builtBy": [
        {
          "username": "D4Vinci",
          "href": "https://github.com/D4Vinci",
          "avatar": "https://avatars.githubusercontent.com/u/20604835"
        },
        {
          "username": "yetval",
          "href": "https://github.com/yetval",
          "avatar": "https://avatars.githubusercontent.com/u/102706514"
        },
        {
          "username": "AbdullahY36",
          "href": "https://github.com/AbdullahY36",
          "avatar": "https://avatars.githubusercontent.com/u/52079299"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mhillebrand",
          "href": "https://github.com/mhillebrand",
          "avatar": "https://avatars.githubusercontent.com/u/286198"
        }
      ]
    },
    {
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3381,
      "added_stars": 3537,
      "builtBy": [
        {
          "username": "rejojer",
          "href": "https://github.com/rejojer",
          "avatar": "https://avatars.githubusercontent.com/u/8255061"
        },
        {
          "username": "zmtomorrow",
          "href": "https://github.com/zmtomorrow",
          "avatar": "https://avatars.githubusercontent.com/u/13518252"
        },
        {
          "username": "BukeLy",
          "href": "https://github.com/BukeLy",
          "avatar": "https://avatars.githubusercontent.com/u/19304666"
        },
        {
          "username": "S3DFX-CYBER",
          "href": "https://github.com/S3DFX-CYBER",
          "avatar": "https://avatars.githubusercontent.com/u/213652949"
        },
        {
          "username": "KylinMountain",
          "href": "https://github.com/KylinMountain",
          "avatar": "https://avatars.githubusercontent.com/u/3996229"
        }
      ]
    },
    {
      "author": "asgeirtj",
      "repo": "system_prompts_leaks",
      "avatar": "https://github.com/asgeirtj.png",
      "repo_link": "https://github.com/asgeirtj/system_prompts_leaks",
      "desc": "Documented system prompts from Anthropic - Claude Fable 5.1, Opus 5.5, Claude Design, Claude Code. OpenAI - ChatGPT GPT-6-Astra, Codex. Google - Gemini 3.8 Flash, 3.1 Pro, Antigravity. xAI - Grok, Grok Bot, Cursor, Kimi and more! Updated regularly.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 11247,
      "added_stars": 5103,
      "builtBy": [
        {
          "username": "asgeirtj",
          "href": "https://github.com/asgeirtj",
          "avatar": "https://avatars.githubusercontent.com/u/27446620"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "awrreny",
          "href": "https://github.com/awrreny",
          "avatar": "https://avatars.githubusercontent.com/u/46632417"
        },
        {
          "username": "anonymous619259",
          "href": "https://github.com/anonymous619259",
          "avatar": "https://avatars.githubusercontent.com/u/87837428"
        },
        {
          "username": "lcebot",
          "href": "https://github.com/lcebot",
          "avatar": "https://avatars.githubusercontent.com/u/117039037"
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
      "forks": 1724,
      "added_stars": 3128,
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
          "username": "yashrajp22",
          "href": "https://github.com/yashrajp22",
          "avatar": "https://avatars.githubusercontent.com/u/282666402"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "davila7",
      "repo": "claude-code-templates",
      "avatar": "https://github.com/davila7.png",
      "repo_link": "https://github.com/davila7/claude-code-templates",
      "desc": "CLI tool for configuring and monitoring Claude Code",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3731,
      "added_stars": 2054,
      "builtBy": [
        {
          "username": "davila7",
          "href": "https://github.com/davila7",
          "avatar": "https://avatars.githubusercontent.com/u/6216945"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "home-assistant",
      "repo": "core",
      "avatar": "https://github.com/home-assistant.png",
      "repo_link": "https://github.com/home-assistant/core",
      "desc": "🏡 Open source home automation that puts local control and privacy first.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 38833,
      "added_stars": 1152,
      "builtBy": [
        {
          "username": "balloob",
          "href": "https://github.com/balloob",
          "avatar": "https://avatars.githubusercontent.com/u/1444314"
        },
        {
          "username": "bdraco",
          "href": "https://github.com/bdraco",
          "avatar": "https://avatars.githubusercontent.com/u/663432"
        },
        {
          "username": "epenet",
          "href": "https://github.com/epenet",
          "avatar": "https://avatars.githubusercontent.com/u/6771947"
        },
        {
          "username": "frenck",
          "href": "https://github.com/frenck",
          "avatar": "https://avatars.githubusercontent.com/u/195327"
        },
        {
          "username": "emontnemery",
          "href": "https://github.com/emontnemery",
          "avatar": "https://avatars.githubusercontent.com/u/14281572"
        }
      ]
    },
    {
      "author": "pytorch",
      "repo": "pytorch",
      "avatar": "https://github.com/pytorch.png",
      "repo_link": "https://github.com/pytorch/pytorch",
      "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 31694,
      "added_stars": 1252,
      "builtBy": [
        {
          "username": "pytorchmergebot",
          "href": "https://github.com/pytorchmergebot",
          "avatar": "https://avatars.githubusercontent.com/u/97764156"
        },
        {
          "username": "malfet",
          "href": "https://github.com/malfet",
          "avatar": "https://avatars.githubusercontent.com/u/2453524"
        },
        {
          "username": "ezyang",
          "href": "https://github.com/ezyang",
          "avatar": "https://avatars.githubusercontent.com/u/13564"
        },
        {
          "username": "zou3519",
          "href": "https://github.com/zou3519",
          "avatar": "https://avatars.githubusercontent.com/u/5652049"
        },
        {
          "username": "cyyever",
          "href": "https://github.com/cyyever",
          "avatar": "https://avatars.githubusercontent.com/u/17618148"
        }
      ]
    },
    {
      "author": "NVIDIA",
      "repo": "Model-Optimizer",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/Model-Optimizer",
      "desc": "A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 736,
      "added_stars": 1502,
      "builtBy": [
        {
          "username": "kevalmorabia97",
          "href": "https://github.com/kevalmorabia97",
          "avatar": "https://avatars.githubusercontent.com/u/28916987"
        },
        {
          "username": "shengliangxu",
          "href": "https://github.com/shengliangxu",
          "avatar": "https://avatars.githubusercontent.com/u/106840466"
        },
        {
          "username": "cjluo-nv",
          "href": "https://github.com/cjluo-nv",
          "avatar": "https://avatars.githubusercontent.com/u/108829653"
        },
        {
          "username": "h-guo18",
          "href": "https://github.com/h-guo18",
          "avatar": "https://avatars.githubusercontent.com/u/67671475"
        },
        {
          "username": "ajrasane",
          "href": "https://github.com/ajrasane",
          "avatar": "https://avatars.githubusercontent.com/u/131806219"
        }
      ]
    },
    {
      "author": "tile-ai",
      "repo": "tilelang",
      "avatar": "https://github.com/tile-ai.png",
      "repo_link": "https://github.com/tile-ai/tilelang",
      "desc": "Domain-specific language designed to streamline the development of high-performance GPU/CPU/Accelerators kernels",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 866,
      "added_stars": 1170,
      "builtBy": [
        {
          "username": "LeiWang1999",
          "href": "https://github.com/LeiWang1999",
          "avatar": "https://avatars.githubusercontent.com/u/34334180"
        },
        {
          "username": "chengyupku",
          "href": "https://github.com/chengyupku",
          "avatar": "https://avatars.githubusercontent.com/u/54519279"
        },
        {
          "username": "SiriusNEO",
          "href": "https://github.com/SiriusNEO",
          "avatar": "https://avatars.githubusercontent.com/u/41781658"
        },
        {
          "username": "Rachmanino",
          "href": "https://github.com/Rachmanino",
          "avatar": "https://avatars.githubusercontent.com/u/109033598"
        },
        {
          "username": "xwhzz",
          "href": "https://github.com/xwhzz",
          "avatar": "https://avatars.githubusercontent.com/u/132904306"
        }
      ]
    },
    {
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4713,
      "added_stars": 2765,
      "builtBy": [
        {
          "username": "yuh-yang",
          "href": "https://github.com/yuh-yang",
          "avatar": "https://avatars.githubusercontent.com/u/43330997"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "AiMiDi",
          "href": "https://github.com/AiMiDi",
          "avatar": "https://avatars.githubusercontent.com/u/76622021"
        },
        {
          "username": "omerarslan0",
          "href": "https://github.com/omerarslan0",
          "avatar": "https://avatars.githubusercontent.com/u/76780961"
        },
        {
          "username": "hito0512",
          "href": "https://github.com/hito0512",
          "avatar": "https://avatars.githubusercontent.com/u/26110883"
        }
      ]
    },
    {
      "author": "docling-project",
      "repo": "docling",
      "avatar": "https://github.com/docling-project.png",
      "repo_link": "https://github.com/docling-project/docling",
      "desc": "Get your documents ready for gen AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5028,
      "added_stars": 2510,
      "builtBy": [
        {
          "username": "dolfim-ibm",
          "href": "https://github.com/dolfim-ibm",
          "avatar": "https://avatars.githubusercontent.com/u/97102151"
        },
        {
          "username": "cau-git",
          "href": "https://github.com/cau-git",
          "avatar": "https://avatars.githubusercontent.com/u/60343111"
        },
        {
          "username": "ceberam",
          "href": "https://github.com/ceberam",
          "avatar": "https://avatars.githubusercontent.com/u/75900930"
        },
        {
          "username": "vagenas",
          "href": "https://github.com/vagenas",
          "avatar": "https://avatars.githubusercontent.com/u/35837085"
        }
      ]
    },
    {
      "author": "SnailSploit",
      "repo": "Claude-Red",
      "avatar": "https://github.com/SnailSploit.png",
      "repo_link": "https://github.com/SnailSploit/Claude-Red",
      "desc": "claude-red is a curated library of offensive security skills designed for the Claude skills system. Each skill is a structured SKILL.md file that primes Claude with expert-level methodology for a specific attack surface — from SQLi to shellcode, EDR evasion to exploit development.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 958,
      "added_stars": 4464,
      "builtBy": [
        {
          "username": "SnailSploit",
          "href": "https://github.com/SnailSploit",
          "avatar": "https://avatars.githubusercontent.com/u/95986478"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "halilkirazkaya",
          "href": "https://github.com/halilkirazkaya",
          "avatar": "https://avatars.githubusercontent.com/u/90972683"
        },
        {
          "username": "LvL23HT",
          "href": "https://github.com/LvL23HT",
          "avatar": "https://avatars.githubusercontent.com/u/130660521"
        },
        {
          "username": "yogesh-tessl",
          "href": "https://github.com/yogesh-tessl",
          "avatar": "https://avatars.githubusercontent.com/u/246077594"
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
      "author": "paperclipai",
      "repo": "paperclip",
      "avatar": "https://github.com/paperclipai.png",
      "repo_link": "https://github.com/paperclipai/paperclip",
      "desc": "The open-source app everyone uses to manage agents at work",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16703,
      "added_stars": 18863,
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
      "author": "anthropics",
      "repo": "claude-code",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code",
      "desc": "Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 25826,
      "added_stars": 6111,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "bcherny",
          "href": "https://github.com/bcherny",
          "avatar": "https://avatars.githubusercontent.com/u/1761758"
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
      "forks": 1860,
      "added_stars": 4606,
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
      "forks": 5289,
      "added_stars": 11862,
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
      "author": "spotify",
      "repo": "portal-ai-plugins",
      "avatar": "https://github.com/spotify.png",
      "repo_link": "https://github.com/spotify/portal-ai-plugins",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 198,
      "added_stars": 1993,
      "builtBy": [
        {
          "username": "djamaile",
          "href": "https://github.com/djamaile",
          "avatar": "https://avatars.githubusercontent.com/u/15789670"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "sorantis",
          "href": "https://github.com/sorantis",
          "avatar": "https://avatars.githubusercontent.com/u/1685068"
        }
      ]
    },
    {
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 988,
      "added_stars": 3443,
      "builtBy": [
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "poteto",
          "href": "https://github.com/poteto",
          "avatar": "https://avatars.githubusercontent.com/u/1390709"
        },
        {
          "username": "minupalaniappan",
          "href": "https://github.com/minupalaniappan",
          "avatar": "https://avatars.githubusercontent.com/u/2145689"
        },
        {
          "username": "ericzakariasson",
          "href": "https://github.com/ericzakariasson",
          "avatar": "https://avatars.githubusercontent.com/u/25622412"
        },
        {
          "username": "roshansada",
          "href": "https://github.com/roshansada",
          "avatar": "https://avatars.githubusercontent.com/u/930790"
        }
      ]
    },
    {
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4480,
      "added_stars": 7238,
      "builtBy": [
        {
          "username": "tashfeenahmed",
          "href": "https://github.com/tashfeenahmed",
          "avatar": "https://avatars.githubusercontent.com/u/9307356"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "suantea",
          "href": "https://github.com/suantea",
          "avatar": "https://avatars.githubusercontent.com/u/108558399"
        },
        {
          "username": "OhOkThisIsFine",
          "href": "https://github.com/OhOkThisIsFine",
          "avatar": "https://avatars.githubusercontent.com/u/102485413"
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
      "forks": 9325,
      "added_stars": 2894,
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
      "forks": 16133,
      "added_stars": 2640,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6880,
      "added_stars": 4458,
      "builtBy": [
        {
          "username": "juliusmarminge",
          "href": "https://github.com/juliusmarminge",
          "avatar": "https://avatars.githubusercontent.com/u/51714798"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
          "username": "maria-rcks",
          "href": "https://github.com/maria-rcks",
          "avatar": "https://avatars.githubusercontent.com/u/254055478"
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
      "forks": 7622,
      "added_stars": 2793,
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
      "author": "microsoft",
      "repo": "vscode",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/vscode",
      "desc": "Visual Studio Code",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 44692,
      "added_stars": 3036,
      "builtBy": [
        {
          "username": "bpasero",
          "href": "https://github.com/bpasero",
          "avatar": "https://avatars.githubusercontent.com/u/900690"
        },
        {
          "username": "jrieken",
          "href": "https://github.com/jrieken",
          "avatar": "https://avatars.githubusercontent.com/u/1794099"
        },
        {
          "username": "Tyriar",
          "href": "https://github.com/Tyriar",
          "avatar": "https://avatars.githubusercontent.com/u/2193314"
        },
        {
          "username": "sandy081",
          "href": "https://github.com/sandy081",
          "avatar": "https://avatars.githubusercontent.com/u/10746682"
        },
        {
          "username": "joaomoreno",
          "href": "https://github.com/joaomoreno",
          "avatar": "https://avatars.githubusercontent.com/u/22350"
        }
      ]
    },
    {
      "author": "Effect-TS",
      "repo": "effect",
      "avatar": "https://github.com/Effect-TS.png",
      "repo_link": "https://github.com/Effect-TS/effect",
      "desc": "Build production-ready applications in TypeScript",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 844,
      "added_stars": 1289,
      "builtBy": [
        {
          "username": "mikearnaldi",
          "href": "https://github.com/mikearnaldi",
          "avatar": "https://avatars.githubusercontent.com/u/24249610"
        },
        {
          "username": "tim-smart",
          "href": "https://github.com/tim-smart",
          "avatar": "https://avatars.githubusercontent.com/u/40680"
        },
        {
          "username": "gcanti",
          "href": "https://github.com/gcanti",
          "avatar": "https://avatars.githubusercontent.com/u/878912"
        },
        {
          "username": "fubhy",
          "href": "https://github.com/fubhy",
          "avatar": "https://avatars.githubusercontent.com/u/1172528"
        }
      ]
    },
    {
      "author": "FxEmbed",
      "repo": "FxEmbed",
      "avatar": "https://github.com/FxEmbed.png",
      "repo_link": "https://github.com/FxEmbed/FxEmbed",
      "desc": "Fix X/Twitter and Bluesky embeds! Use multiple images, videos, polls, translations and more on Discord, Telegram and others",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 271,
      "added_stars": 703,
      "builtBy": [
        {
          "username": "dangeredwolf",
          "href": "https://github.com/dangeredwolf",
          "avatar": "https://avatars.githubusercontent.com/u/2636265"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "Wazbat",
          "href": "https://github.com/Wazbat",
          "avatar": "https://avatars.githubusercontent.com/u/6253896"
        }
      ]
    },
    {
      "author": "miuuyy",
      "repo": "codex-chatgpt-web",
      "avatar": "https://github.com/miuuyy.png",
      "repo_link": "https://github.com/miuuyy/codex-chatgpt-web",
      "desc": "Use ChatGPT Web (including Pro) as a native model in Codex — with context, tools, streaming and images, without using Codex quota.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1076,
      "added_stars": 8225,
      "builtBy": [
        {
          "username": "miuuyy",
          "href": "https://github.com/miuuyy",
          "avatar": "https://avatars.githubusercontent.com/u/147659719"
        },
        {
          "username": "1saifj",
          "href": "https://github.com/1saifj",
          "avatar": "https://avatars.githubusercontent.com/u/31359390"
        },
        {
          "username": "jamie950315",
          "href": "https://github.com/jamie950315",
          "avatar": "https://avatars.githubusercontent.com/u/79763225"
        },
        {
          "username": "David-T-Campos",
          "href": "https://github.com/David-T-Campos",
          "avatar": "https://avatars.githubusercontent.com/u/132998405"
        },
        {
          "username": "kocourekwork-sudo",
          "href": "https://github.com/kocourekwork-sudo",
          "avatar": "https://avatars.githubusercontent.com/u/268165008"
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
      "forks": 1879,
      "added_stars": 8295,
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
      "author": "Open-Dev-Society",
      "repo": "OpenStock",
      "avatar": "https://github.com/Open-Dev-Society.png",
      "repo_link": "https://github.com/Open-Dev-Society/OpenStock",
      "desc": "OpenStock is an open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights — built openly, for everyone, forever free.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2437,
      "added_stars": 5781,
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
      "author": "melgarafael",
      "repo": "DeskcommCRM",
      "avatar": "https://github.com/melgarafael.png",
      "repo_link": "https://github.com/melgarafael/DeskcommCRM",
      "desc": "Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA). Open alternative to Kommo, Octadesk & Intercom for any business that sells by chat. MCP-ready, multi-tenant, LGPD.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1190,
      "added_stars": 3800,
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
          "username": "paulolimajr77",
          "href": "https://github.com/paulolimajr77",
          "avatar": "https://avatars.githubusercontent.com/u/60278689"
        },
        {
          "username": "jmpo",
          "href": "https://github.com/jmpo",
          "avatar": "https://avatars.githubusercontent.com/u/23352109"
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
      "forks": 1218,
      "added_stars": 4108,
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
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5641,
      "added_stars": 24245,
      "builtBy": [
        {
          "username": "nwparker",
          "href": "https://github.com/nwparker",
          "avatar": "https://avatars.githubusercontent.com/u/4138956"
        },
        {
          "username": "brennanb2025",
          "href": "https://github.com/brennanb2025",
          "avatar": "https://avatars.githubusercontent.com/u/79079362"
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
          "username": "Jinwoo-H",
          "href": "https://github.com/Jinwoo-H",
          "avatar": "https://avatars.githubusercontent.com/u/73622457"
        }
      ]
    },
    {
      "author": "pablostanley",
      "repo": "yoinks",
      "avatar": "https://github.com/pablostanley.png",
      "repo_link": "https://github.com/pablostanley/yoinks",
      "desc": "yoink any video from your terminal. no shady ads.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 463,
      "added_stars": 3648,
      "builtBy": [
        {
          "username": "pablostanley",
          "href": "https://github.com/pablostanley",
          "avatar": "https://avatars.githubusercontent.com/u/7430988"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8653,
      "added_stars": 5224,
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
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "rodboev",
          "href": "https://github.com/rodboev",
          "avatar": "https://avatars.githubusercontent.com/u/106971"
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
      "title": "Why you still need a Website Portfolio, even though everyone can Vibe Code it.",
      "description": "If you have been following me for a long time, you already know that I have been holding off on my...",
      "url": "https://dev.to/francistrdev/why-you-still-need-a-website-portfolio-even-though-everyone-can-vibe-code-it-e63",
      "tags": "discuss, community, showdev, a11y",
      "reactions": 220,
      "comments": 153,
      "reading_time": 7,
      "author": "francistrdev"
    },
    {
      "title": "I got Jev to zero mistakes. I'm still using Flash-Lite.",
      "description": "Jev is a brilliant decision model. Gemini Flash-Lite is the model nobody talks about, and it’s fast,...",
      "url": "https://dev.to/theycallmeswift/i-got-jev-to-zero-mistakes-im-still-using-flash-lite-2mo7",
      "tags": "ai, gemini, testing, jev",
      "reactions": 21,
      "comments": 3,
      "reading_time": 11,
      "author": "theycallmeswift"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-1682",
      "tags": "top7, discuss",
      "reactions": 51,
      "comments": 25,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Gemma 4 E2B on an AMD MI300X: Which Weight Format Should You Serve?",
      "description": "Ten builds of Gemma 4 E2B (bf16, fp8 in both E4M3 flavours, int8 W8A8 and int4 W4A16, each with and without int4 embedding tables) served one after another on one AMD Instinct MI300X with the same vLLM image. fp8 is the only format that keeps pace with bf16, the 4-bit builds run at 0.14x to 0.63x, and int4 embedding tables cost almost nothing.",
      "url": "https://dev.to/gde/gemma-4-e2b-on-an-amd-mi300x-which-weight-format-should-you-serve-1a01",
      "tags": "gemma, amd, machinelearning, llm",
      "reactions": 7,
      "comments": 1,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-3ib7",
      "tags": "discuss, jokes, watercooler",
      "reactions": 47,
      "comments": 35,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Build a Tiny Virtual Pet on Arduino in 60 Minutes 🐾",
      "description": "Turn an Arduino Uno Q into Kiku, a Tamagotchi-style virtual pet with an animated LED face, moods, and keyboard controls.",
      "url": "https://dev.to/heraistudio/build-a-tiny-virtual-pet-on-arduino-in-60-minutes-2cf",
      "tags": "arduino, beginners, programming, hacktoberfest",
      "reactions": 38,
      "comments": 15,
      "reading_time": 5,
      "author": "jenlooper"
    },
    {
      "title": "Welcome Thread - v 396",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-396-ih4",
      "tags": "welcome",
      "reactions": 31,
      "comments": 226,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-4jli",
      "tags": "weeklyretro",
      "reactions": 115,
      "comments": 133,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Making cross-platform local AI easier with llamadart",
      "description": "My writing assistant could talk to Gemini. The missing piece was using it without a connection.  That...",
      "url": "https://dev.to/gde/making-cross-platform-local-ai-easier-with-llamadart-2l4k",
      "tags": "dart, flutter, ai, tutorial",
      "reactions": 8,
      "comments": 2,
      "reading_time": 6,
      "author": "leehack"
    },
    {
      "title": "stop-using-complex-urls-for-your-demos.us-central1.run.app",
      "description": "Wish you had a custom domain for all of your demos and AI prototypes? When you deploy your apps with...",
      "url": "https://dev.to/googleai/stop-using-complex-urls-for-your-demosus-central1runapp-2efd",
      "tags": "googlecloud, cloud, software, programming",
      "reactions": 26,
      "comments": 1,
      "reading_time": 1,
      "author": "ruchika_goel"
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
      "title": "I Think We're Forgetting How to Be Bored",
      "description": "You know the moment. You're waiting for the kettle, or the elevator, or a page to load, or a friend...",
      "url": "https://dev.to/james_anderson_h/i-think-were-forgetting-how-to-be-bored-3pe5",
      "tags": "discuss, mentalhealth, productivity, ai",
      "reactions": 66,
      "comments": 24,
      "reading_time": 7,
      "author": "james_anderson_h"
    },
    {
      "title": "I wanted a Cursor-style agent that runs on my own model, so I built one",
      "description": "Disclosure: I'm Ibrahim, the solo developer of OpenPilot. This article was drafted with help from an...",
      "url": "https://dev.to/openpilot/i-wanted-a-cursor-style-agent-that-runs-on-my-own-model-so-i-built-one-14b7",
      "tags": "opensource, ai, productivity, electron",
      "reactions": 1,
      "comments": 1,
      "reading_time": 3,
      "author": "openpilot"
    },
    {
      "title": "What I learned building a study platform for Nigerian universities, as a student founder with a team of AI agents",
      "description": "I'm a student at the Federal University of Technology, Owerri (FUTO), and for the last five months...",
      "url": "https://dev.to/nmesirionyengbaronye/what-i-learned-building-a-study-platform-for-nigerian-universities-as-a-student-founder-with-a-2ggf",
      "tags": "ai, programming, productivity, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "nmesirionyengbaronye"
    },
    {
      "title": "I Built 15 Free Browser Tools That Never Touch a Server",
      "description": "I Built 15 Free Browser Tools That Never Touch a Server   A few months ago I started...",
      "url": "https://dev.to/sahu_khan_74873a8e161176b/i-built-15-free-browser-tools-that-never-touch-a-server-2b7l",
      "tags": "webdev, productivity, tools, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "sahu_khan_74873a8e161176b"
    },
    {
      "title": "The Most Useful API Review Starts With a Diff, Not a Demo",
      "description": "A demo shows that the new path works. A contract diff shows what existing callers now have to survive. Here is a focused way to review an API change without turning it into a committee meeting.",
      "url": "https://dev.to/jeff_pdc/the-most-useful-api-review-starts-with-a-diff-not-a-demo-lh4",
      "tags": "api, programming, productivity, discuss",
      "reactions": 2,
      "comments": 0,
      "reading_time": 3,
      "author": "jeff_pdc"
    },
    {
      "title": "Chatbots for small business marketing",
      "description": "Shipping a chatbot into a small business marketing stack is easy; making it actually produce leads is...",
      "url": "https://dev.to/matintellect/chatbots-for-small-business-marketing-53j0",
      "tags": "ai, agents, automation, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "matintellect"
    },
    {
      "title": "Diffing two spreadsheets by key column, entirely client-side",
      "description": "Every month a new version of some spreadsheet arrives — a supplier price list, an employee roster, an...",
      "url": "https://dev.to/codex_moneya_6ea83ca96f3/diffing-two-spreadsheets-by-key-column-entirely-client-side-2hch",
      "tags": "webdev, javascript, showdev, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 4,
      "author": "codex_moneya_6ea83ca96f3"
    },
    {
      "title": "Stop pasting other people's agent skills into your repo as-is",
      "description": "Agent skills (the SKILL.md files that Claude Code and Codex load) are easy to share, and GitHub is...",
      "url": "https://dev.to/kyoungsookim/stop-pasting-other-peoples-agent-skills-into-your-repo-as-is-9c6",
      "tags": "ai, claude, opensource, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "kyoungsookim"
    },
    {
      "title": "With 160 skills installed, Claude Code kept 20 descriptions, and the model found 0 of 3 skills that lost theirs",
      "description": "With Opus 5.5's 1M-token window, Claude Code 2.1.289 held the skill listing to 30,000 characters. Of...",
      "url": "https://dev.to/rulestack/with-160-skills-installed-claude-code-kept-20-descriptions-and-the-model-found-0-of-3-skills-that-10j2",
      "tags": "claudecode, claude, ai, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 18,
      "author": "rulestack"
    },
    {
      "title": "Claude Code Review in Production: How Our Review Rules Evolved Over Five Months",
      "description": "Claude Code review started at my company as a single prompt in a GitHub workflow, and five months...",
      "url": "https://dev.to/rss_holmes/claude-code-review-in-production-how-our-review-rules-evolved-over-five-months-1ehb",
      "tags": "claude, ai, codereview, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "rss_holmes"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

