# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-03-03 07:10:57 UTC

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
      "author": "Wei-Shaw",
      "repo": "claude-relay-service",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/claude-relay-service",
      "desc": "CRS-自建Claude Code镜像，一站式开源中转服务，让 Claude、OpenAI、Gemini、Droid 订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1405,
      "added_stars": 546,
      "builtBy": [
        {
          "username": "Wei-Shaw",
          "href": "https://github.com/Wei-Shaw",
          "avatar": "https://avatars.githubusercontent.com/u/26101719"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "f3n9",
          "href": "https://github.com/f3n9",
          "avatar": "https://avatars.githubusercontent.com/u/663221"
        },
        {
          "username": "kevinconan",
          "href": "https://github.com/kevinconan",
          "avatar": "https://avatars.githubusercontent.com/u/3772409"
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
      "forks": 2025,
      "added_stars": 5032,
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
          "username": "Tibsfox",
          "href": "https://github.com/Tibsfox",
          "avatar": "https://avatars.githubusercontent.com/u/537551"
        },
        {
          "username": "Solvely-Colin",
          "href": "https://github.com/Solvely-Colin",
          "avatar": "https://avatars.githubusercontent.com/u/211764741"
        },
        {
          "username": "jjshanks",
          "href": "https://github.com/jjshanks",
          "avatar": "https://avatars.githubusercontent.com/u/62661"
        }
      ]
    },
    {
      "author": "songquanpeng",
      "repo": "one-api",
      "avatar": "https://github.com/songquanpeng.png",
      "repo_link": "https://github.com/songquanpeng/one-api",
      "desc": "LLM API 管理 & 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。LLM API management & key redistribution system, unifying multiple providers under a single API. Single binary, Docker-ready, with an English UI.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5753,
      "added_stars": 270,
      "builtBy": [
        {
          "username": "songquanpeng",
          "href": "https://github.com/songquanpeng",
          "avatar": "https://avatars.githubusercontent.com/u/39998050"
        },
        {
          "username": "mrhaoji",
          "href": "https://github.com/mrhaoji",
          "avatar": "https://avatars.githubusercontent.com/u/483419"
        },
        {
          "username": "Laisky",
          "href": "https://github.com/Laisky",
          "avatar": "https://avatars.githubusercontent.com/u/4532436"
        },
        {
          "username": "igophper",
          "href": "https://github.com/igophper",
          "avatar": "https://avatars.githubusercontent.com/u/34326532"
        },
        {
          "username": "quzard",
          "href": "https://github.com/quzard",
          "avatar": "https://avatars.githubusercontent.com/u/30899719"
        }
      ]
    },
    {
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, prompts, and configurations to help you make the most of GitHub Copilot.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2674,
      "added_stars": 990,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
        },
        {
          "username": "codemillmatt",
          "href": "https://github.com/codemillmatt",
          "avatar": "https://avatars.githubusercontent.com/u/2053639"
        }
      ]
    },
    {
      "author": "Stremio",
      "repo": "stremio-web",
      "avatar": "https://github.com/Stremio.png",
      "repo_link": "https://github.com/Stremio/stremio-web",
      "desc": "Stremio - Freedom to Stream",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1100,
      "added_stars": 462,
      "builtBy": [
        {
          "username": "nklhtv",
          "href": "https://github.com/nklhtv",
          "avatar": "https://avatars.githubusercontent.com/u/5950722"
        },
        {
          "username": "tymmesyde",
          "href": "https://github.com/tymmesyde",
          "avatar": "https://avatars.githubusercontent.com/u/7889816"
        },
        {
          "username": "kKaskak",
          "href": "https://github.com/kKaskak",
          "avatar": "https://avatars.githubusercontent.com/u/117831817"
        },
        {
          "username": "swetlasg",
          "href": "https://github.com/swetlasg",
          "avatar": "https://avatars.githubusercontent.com/u/15102316"
        },
        {
          "username": "Botsy",
          "href": "https://github.com/Botsy",
          "avatar": "https://avatars.githubusercontent.com/u/10400528"
        }
      ]
    },
    {
      "author": "maboloshi",
      "repo": "github-chinese",
      "avatar": "https://github.com/maboloshi.png",
      "repo_link": "https://github.com/maboloshi/github-chinese",
      "desc": "GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1163,
      "added_stars": 261,
      "builtBy": [
        {
          "username": "maboloshi",
          "href": "https://github.com/maboloshi",
          "avatar": "https://avatars.githubusercontent.com/u/7850715"
        },
        {
          "username": "52cik",
          "href": "https://github.com/52cik",
          "avatar": "https://avatars.githubusercontent.com/u/5033310"
        },
        {
          "username": "TC999",
          "href": "https://github.com/TC999",
          "avatar": "https://avatars.githubusercontent.com/u/88823709"
        }
      ]
    },
    {
      "author": "atlassian",
      "repo": "atlassian-mcp-server",
      "avatar": "https://github.com/atlassian.png",
      "repo_link": "https://github.com/atlassian/atlassian-mcp-server",
      "desc": "Remote MCP Server that securely connects Jira and Confluence with your LLM, IDE, or agent platform of choice.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 41,
      "added_stars": 26,
      "builtBy": [
        {
          "username": "lsosa1",
          "href": "https://github.com/lsosa1",
          "avatar": "https://avatars.githubusercontent.com/u/218678431"
        },
        {
          "username": "pnguyen-atlassian",
          "href": "https://github.com/pnguyen-atlassian",
          "avatar": "https://avatars.githubusercontent.com/u/16570385"
        },
        {
          "username": "iosamaatlassian",
          "href": "https://github.com/iosamaatlassian",
          "avatar": "https://avatars.githubusercontent.com/u/154573081"
        },
        {
          "username": "ekahinga",
          "href": "https://github.com/ekahinga",
          "avatar": "https://avatars.githubusercontent.com/u/255455128"
        },
        {
          "username": "evperlman1",
          "href": "https://github.com/evperlman1",
          "avatar": "https://avatars.githubusercontent.com/u/262648862"
        }
      ]
    },
    {
      "author": "qeeqbox",
      "repo": "social-analyzer",
      "avatar": "https://github.com/qeeqbox.png",
      "repo_link": "https://github.com/qeeqbox/social-analyzer",
      "desc": "API, CLI, and Web App for analyzing and finding a person's profile in 1000 social media \\ websites",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2038,
      "added_stars": 596,
      "builtBy": [
        {
          "username": "giga-a",
          "href": "https://github.com/giga-a",
          "avatar": "https://avatars.githubusercontent.com/u/52905881"
        },
        {
          "username": "qb-auto",
          "href": "https://github.com/qb-auto",
          "avatar": "https://avatars.githubusercontent.com/u/81345102"
        },
        {
          "username": "SethFalco",
          "href": "https://github.com/SethFalco",
          "avatar": "https://avatars.githubusercontent.com/u/22801583"
        },
        {
          "username": "supersourlemons",
          "href": "https://github.com/supersourlemons",
          "avatar": "https://avatars.githubusercontent.com/u/210174607"
        }
      ]
    },
    {
      "author": "ToolJet",
      "repo": "ToolJet",
      "avatar": "https://github.com/ToolJet.png",
      "repo_link": "https://github.com/ToolJet/ToolJet",
      "desc": "ToolJet is the open-source foundation of ToolJet AI - the AI-native platform for building internal tools, dashboard, business applications, workflows and AI agents 🚀",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4959,
      "added_stars": 81,
      "builtBy": [
        {
          "username": "Navaneeth-pk",
          "href": "https://github.com/Navaneeth-pk",
          "avatar": "https://avatars.githubusercontent.com/u/7828962"
        },
        {
          "username": "arpitnath",
          "href": "https://github.com/arpitnath",
          "avatar": "https://avatars.githubusercontent.com/u/67645175"
        },
        {
          "username": "adishM98",
          "href": "https://github.com/adishM98",
          "avatar": "https://avatars.githubusercontent.com/u/44204658"
        },
        {
          "username": "akshaysasidrn",
          "href": "https://github.com/akshaysasidrn",
          "avatar": "https://avatars.githubusercontent.com/u/11629675"
        },
        {
          "username": "johnsoncherian",
          "href": "https://github.com/johnsoncherian",
          "avatar": "https://avatars.githubusercontent.com/u/57667706"
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
      "by": "sandbach",
      "descendants": 537,
      "id": 47225130,
      "kids": [
        47229108,
        47226301,
        47226922,
        47225454,
        47225384,
        47228588,
        47228996,
        47226006,
        47225468,
        47226944,
        47226756,
        47225345,
        47226942,
        47228475,
        47225943,
        47227073,
        47229023,
        47227220,
        47225343,
        47225485,
        47226210,
        47227864,
        47228273,
        47225926,
        47226633,
        47225887,
        47226008,
        47226887,
        47225517,
        47225921,
        47226037,
        47227954,
        47225380,
        47226994,
        47225804,
        47227602,
        47227076,
        47227722,
        47227196,
        47225850,
        47227807,
        47225700,
        47226308,
        47225350,
        47225633,
        47225327,
        47225374,
        47225279,
        47226618,
        47226560,
        47226520,
        47227389,
        47226161,
        47226122,
        47225852,
        47225649,
        47225835,
        47228536,
        47225701,
        47226324,
        47226989,
        47228211,
        47226779,
        47228649,
        47225705,
        47228151,
        47225257,
        47227484,
        47228766,
        47225274,
        47226675,
        47225414,
        47225780,
        47226071,
        47226928
      ],
      "score": 936,
      "time": 1772490755,
      "title": "Meta’s AI smart glasses and data privacy concerns",
      "type": "story",
      "url": "https://www.svd.se/a/K8nrV4/metas-ai-smart-glasses-and-data-privacy-concerns-workers-say-we-see-everything"
    },
    {
      "by": "ireflect",
      "descendants": 348,
      "id": 47223620,
      "kids": [
        47224234,
        47224500,
        47224052,
        47224584,
        47225640,
        47224326,
        47227053,
        47229021,
        47223814,
        47225132,
        47225781,
        47224506,
        47228183,
        47225048,
        47228794,
        47223745,
        47227566,
        47226793,
        47225055,
        47225354,
        47224297,
        47227667,
        47224710,
        47226802,
        47228185,
        47225332,
        47225224,
        47228127,
        47226406,
        47225996,
        47224294,
        47226223,
        47225111,
        47228125,
        47225178,
        47225494,
        47224152,
        47224790,
        47225202
      ],
      "score": 706,
      "time": 1772483452,
      "title": "British Columbia is permanently adopting daylight time",
      "type": "story",
      "url": "https://www.cbc.ca/news/canada/british-columbia/b-c-adopting-year-round-daylight-time-9.7111657"
    },
    {
      "by": "zdw",
      "descendants": 16,
      "id": 47228390,
      "kids": [
        47229116,
        47229065,
        47228984,
        47229081,
        47228953,
        47228923,
        47228848,
        47228819
      ],
      "score": 45,
      "time": 1772515104,
      "title": "Daily Driving GrapheneOS",
      "type": "story",
      "url": "https://blog.matthewbrunelle.com/8-4-months-of-daily-driving-grapheneos/"
    },
    {
      "by": "danso",
      "descendants": 109,
      "id": 47226608,
      "kids": [
        47228363,
        47228104,
        47228051,
        47229015,
        47228268,
        47228192,
        47228464,
        47228201,
        47227885,
        47228287,
        47228610,
        47228311,
        47228334,
        47228209,
        47228854,
        47228929,
        47228990,
        47228082,
        47228877,
        47228069,
        47228498,
        47228662,
        47227634,
        47228281,
        47228800,
        47227792,
        47228164,
        47227638,
        47228106,
        47227518,
        47228035,
        47228070,
        47228144,
        47228080,
        47227633
      ],
      "score": 192,
      "time": 1772500350,
      "title": "Ars Technica fires reporter after AI controversy involving fabricated quotes",
      "type": "story",
      "url": "https://futurism.com/artificial-intelligence/ars-technica-fires-reporter-ai-quotes"
    },
    {
      "by": "jk_tech",
      "descendants": 17,
      "id": 47201132,
      "kids": [
        47228660,
        47228892,
        47228565,
        47228440,
        47228869,
        47228418,
        47227846,
        47228824,
        47228809,
        47204097
      ],
      "score": 77,
      "time": 1772318493,
      "title": "Simple screw counter",
      "type": "story",
      "url": "https://mitxela.com/projects/screwcounter"
    },
    {
      "by": "littlexsparkee",
      "descendants": 2,
      "id": 47228639,
      "kids": [
        47229088,
        47228921
      ],
      "score": 12,
      "time": 1772517062,
      "title": "Buckle Up for Bumpier Skies",
      "type": "story",
      "url": "https://www.newyorker.com/magazine/2026/03/09/buckle-up-for-bumpier-skies"
    },
    {
      "by": "adamveld12",
      "descendants": 16,
      "id": 47227999,
      "kids": [
        47228875,
        47228383,
        47228989,
        47228681,
        47228479,
        47228482,
        47228768,
        47228684,
        47228718,
        47228692,
        47228622,
        47228038
      ],
      "score": 29,
      "time": 1772511637,
      "title": "Intent-Based Commits",
      "type": "story",
      "url": "https://github.com/adamveld12/ghost"
    },
    {
      "by": "nicktikhonov",
      "descendants": 98,
      "id": 47224295,
      "kids": [
        47226535,
        47226218,
        47225408,
        47228698,
        47225311,
        47224438,
        47225053,
        47228667,
        47225335,
        47227309,
        47228496,
        47228945,
        47227857,
        47225431,
        47227364,
        47225169,
        47228539,
        47227699,
        47227717,
        47225220,
        47224409,
        47228518,
        47228269,
        47226215,
        47227451,
        47227534,
        47225265,
        47227251,
        47226333,
        47227180,
        47227960,
        47226004,
        47224682,
        47226828,
        47226298,
        47227991,
        47226419,
        47225508,
        47226909
      ],
      "score": 334,
      "text": "I built a voice agent from scratch that averages ~400ms end-to-end latency (phone stop → first syllable). That’s with full STT → LLM → TTS in the loop, clean barge-ins, and no precomputed responses.<p>What moved the needle:<p>Voice is a turn-taking problem, not a transcription problem. VAD alone fails; you need semantic end-of-turn detection.<p>The system reduces to one loop: speaking vs listening. The two transitions - cancel instantly on barge-in, respond instantly on end-of-turn - define the experience.<p>STT → LLM → TTS must stream. Sequential pipelines are dead on arrival for natural conversation.<p>TTFT dominates everything. In voice, the first token is the critical path. Groq’s ~80ms TTFT was the single biggest win.<p>Geography matters more than prompts. Colocate everything or you lose before you start.<p>GitHub Repo: \n<a href=\"https:&#x2F;&#x2F;github.com&#x2F;NickTikhonov&#x2F;shuo\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;NickTikhonov&#x2F;shuo</a><p>Follow whatever I next tinker with: <a href=\"https:&#x2F;&#x2F;x.com&#x2F;nick_tikhonov\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;nick_tikhonov</a>",
      "time": 1772486620,
      "title": "Show HN: I built a sub-500ms latency voice agent from scratch",
      "type": "story",
      "url": "https://www.ntik.me/posts/voice-agent"
    },
    {
      "by": "ingve",
      "descendants": 0,
      "id": 47196864,
      "score": 11,
      "time": 1772294448,
      "title": "DOS Memory Management",
      "type": "story",
      "url": "https://www.os2museum.com/wp/dos-memory-management/"
    },
    {
      "by": "almonerthis",
      "descendants": 17,
      "id": 47197858,
      "kids": [
        47229064,
        47228881,
        47228325,
        47229140,
        47228965,
        47228666,
        47228796,
        47228924,
        47228274,
        47228442,
        47229124,
        47197927,
        47228968,
        47228855
      ],
      "score": 30,
      "time": 1772299423,
      "title": "Moldova broke our data pipeline",
      "type": "story",
      "url": "https://www.avraam.dev/blog/moldova-broke-our-pipeline"
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
      "title": "GRAM: A Zed fork without all the AI",
      "url": "https://gram.liten.app/",
      "score": 140,
      "comments": 68,
      "tags": [
        "editors",
        "vibecoding"
      ],
      "id": "yyqowj"
    },
    {
      "title": "Motorola's new partnership with GrapheneOS",
      "url": "https://motorolanews.com/motorola-three-new-b2b-solutions-at-mwc-2026/",
      "score": 141,
      "comments": 47,
      "tags": [
        "android",
        "hardware"
      ],
      "id": "awwhqz"
    },
    {
      "title": "The two kinds of error",
      "url": "https://evanhahn.com/the-two-kinds-of-error/",
      "score": 16,
      "comments": 9,
      "tags": [
        "programming"
      ],
      "id": "3cq649"
    },
    {
      "title": "Quantifying the Swiss marriage tax",
      "url": "https://gendx.dev/blog/2026/03/02/swiss-marriage-tax.html",
      "score": 23,
      "comments": 5,
      "tags": [
        "finance",
        "rust"
      ],
      "id": "bvkanl"
    },
    {
      "title": "Gram 1.0 released",
      "url": "https://gram.liten.app/posts/first-release/",
      "score": 38,
      "comments": 3,
      "tags": [
        "editors",
        "release"
      ],
      "id": "txfaym"
    },
    {
      "title": "Evolving Typst",
      "url": "https://laurmaedje.github.io/posts/evolving-typst/",
      "score": 15,
      "comments": 2,
      "tags": [
        "practices"
      ],
      "id": "og7ihk"
    },
    {
      "title": "You can't always fix it",
      "url": "https://ntietz.com/blog/you-cant-always-fix-it/",
      "score": 24,
      "comments": 5,
      "tags": [
        "security"
      ],
      "id": "rkzdmk"
    },
    {
      "title": "Packaging a Gleam app into a single executable",
      "url": "https://www.dhzdhd.dev/blog/gleam-executable",
      "score": 25,
      "comments": 8,
      "tags": [
        "gleam"
      ],
      "id": "ba6cnk"
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
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 259,
      "added_stars": 3934,
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
    },
    {
      "author": "openai",
      "repo": "skills",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/skills",
      "desc": "Skills Catalog for Codex",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 587,
      "added_stars": 8148,
      "builtBy": [
        {
          "username": "gverma-openai",
          "href": "https://github.com/gverma-openai",
          "avatar": "https://avatars.githubusercontent.com/u/235382312"
        },
        {
          "username": "dkundel-openai",
          "href": "https://github.com/dkundel-openai",
          "avatar": "https://avatars.githubusercontent.com/u/200841172"
        },
        {
          "username": "vb-openai",
          "href": "https://github.com/vb-openai",
          "avatar": "https://avatars.githubusercontent.com/u/250380837"
        },
        {
          "username": "ae-openai",
          "href": "https://github.com/ae-openai",
          "avatar": "https://avatars.githubusercontent.com/u/173195103"
        },
        {
          "username": "edward-bayes",
          "href": "https://github.com/edward-bayes",
          "avatar": "https://avatars.githubusercontent.com/u/191618473"
        }
      ]
    },
    {
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 471,
      "added_stars": 6741,
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
          "username": "abidlabs",
          "href": "https://github.com/abidlabs",
          "avatar": "https://avatars.githubusercontent.com/u/1778297"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "irangareddy",
          "href": "https://github.com/irangareddy",
          "avatar": "https://avatars.githubusercontent.com/u/60821111"
        }
      ]
    },
    {
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skills and subagents, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2805,
      "added_stars": 3897,
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
      "author": "google",
      "repo": "langextract",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/langextract",
      "desc": "A Python library for extracting structured information from unstructured text using LLMs with precise source grounding and interactive visualization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2287,
      "added_stars": 10364,
      "builtBy": [
        {
          "username": "aksg87",
          "href": "https://github.com/aksg87",
          "avatar": "https://avatars.githubusercontent.com/u/19271735"
        },
        {
          "username": "kleeena",
          "href": "https://github.com/kleeena",
          "avatar": "https://avatars.githubusercontent.com/u/62442533"
        },
        {
          "username": "mariano",
          "href": "https://github.com/mariano",
          "avatar": "https://avatars.githubusercontent.com/u/18598"
        },
        {
          "username": "tonebeta",
          "href": "https://github.com/tonebeta",
          "avatar": "https://avatars.githubusercontent.com/u/4890246"
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
      "forks": 1510,
      "added_stars": 7646,
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
          "username": "clarenceluo78",
          "href": "https://github.com/clarenceluo78",
          "avatar": "https://avatars.githubusercontent.com/u/71917860"
        }
      ]
    },
    {
      "author": "NevaMind-AI",
      "repo": "memU",
      "avatar": "https://github.com/NevaMind-AI.png",
      "repo_link": "https://github.com/NevaMind-AI/memU",
      "desc": "Memory for 24/7 proactive agents like openclaw (moltbot, clawdbot).",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 898,
      "added_stars": 5458,
      "builtBy": [
        {
          "username": "sairin1202",
          "href": "https://github.com/sairin1202",
          "avatar": "https://avatars.githubusercontent.com/u/5654879"
        },
        {
          "username": "evan-ak",
          "href": "https://github.com/evan-ak",
          "avatar": "https://avatars.githubusercontent.com/u/33013709"
        },
        {
          "username": "ankaisen",
          "href": "https://github.com/ankaisen",
          "avatar": "https://avatars.githubusercontent.com/u/51148505"
        },
        {
          "username": "Koimiao-zz",
          "href": "https://github.com/Koimiao-zz",
          "avatar": "https://avatars.githubusercontent.com/u/224523934"
        }
      ]
    },
    {
      "author": "OpenBMB",
      "repo": "ChatDev",
      "avatar": "https://github.com/OpenBMB.png",
      "repo_link": "https://github.com/OpenBMB/ChatDev",
      "desc": "ChatDev 2.0: Dev All through LLM-powered Multi-Agent Collaboration",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3873,
      "added_stars": 2192,
      "builtBy": [
        {
          "username": "thinkwee",
          "href": "https://github.com/thinkwee",
          "avatar": "https://avatars.githubusercontent.com/u/11889052"
        },
        {
          "username": "Alphamasterliu",
          "href": "https://github.com/Alphamasterliu",
          "avatar": "https://avatars.githubusercontent.com/u/110011045"
        },
        {
          "username": "NA-Wen",
          "href": "https://github.com/NA-Wen",
          "avatar": "https://avatars.githubusercontent.com/u/92134380"
        },
        {
          "username": "LaansDole",
          "href": "https://github.com/LaansDole",
          "avatar": "https://avatars.githubusercontent.com/u/85084360"
        },
        {
          "username": "qianc62",
          "href": "https://github.com/qianc62",
          "avatar": "https://avatars.githubusercontent.com/u/48988402"
        }
      ]
    },
    {
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "OpenSandbox is a general-purpose sandbox platform for AI applications, offering multi-language SDKs, unified sandbox APIs, and Docker/Kubernetes runtimes for scenarios like Coding Agents, GUI Agents, Agent Evaluation, AI Code Execution, and RL Training.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 337,
      "added_stars": 3009,
      "builtBy": [
        {
          "username": "Pangjiping",
          "href": "https://github.com/Pangjiping",
          "avatar": "https://avatars.githubusercontent.com/u/62273713"
        },
        {
          "username": "ninan-nn",
          "href": "https://github.com/ninan-nn",
          "avatar": "https://avatars.githubusercontent.com/u/249928781"
        },
        {
          "username": "hittyt",
          "href": "https://github.com/hittyt",
          "avatar": "https://avatars.githubusercontent.com/u/1870207"
        },
        {
          "username": "jwx0925",
          "href": "https://github.com/jwx0925",
          "avatar": "https://avatars.githubusercontent.com/u/1539927"
        },
        {
          "username": "Spground",
          "href": "https://github.com/Spground",
          "avatar": "https://avatars.githubusercontent.com/u/10492823"
        }
      ]
    },
    {
      "author": "disler",
      "repo": "claude-code-hooks-mastery",
      "avatar": "https://github.com/disler.png",
      "repo_link": "https://github.com/disler/claude-code-hooks-mastery",
      "desc": "Master Claude Code Hooks",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 572,
      "added_stars": 1055,
      "builtBy": [
        {
          "username": "disler",
          "href": "https://github.com/disler",
          "avatar": "https://avatars.githubusercontent.com/u/7570811"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "Shubhamsaboo",
      "repo": "awesome-llm-apps",
      "avatar": "https://github.com/Shubhamsaboo.png",
      "repo_link": "https://github.com/Shubhamsaboo/awesome-llm-apps",
      "desc": "Collection of awesome LLM apps with AI Agents and RAG using OpenAI, Anthropic, Gemini and opensource models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 14412,
      "added_stars": 7618,
      "builtBy": [
        {
          "username": "Shubhamsaboo",
          "href": "https://github.com/Shubhamsaboo",
          "avatar": "https://avatars.githubusercontent.com/u/31396011"
        },
        {
          "username": "Madhuvod",
          "href": "https://github.com/Madhuvod",
          "avatar": "https://avatars.githubusercontent.com/u/124294538"
        },
        {
          "username": "onestardao",
          "href": "https://github.com/onestardao",
          "avatar": "https://avatars.githubusercontent.com/u/212544643"
        },
        {
          "username": "libw0430",
          "href": "https://github.com/libw0430",
          "avatar": "https://avatars.githubusercontent.com/u/102198332"
        },
        {
          "username": "awesomekoder",
          "href": "https://github.com/awesomekoder",
          "avatar": "https://avatars.githubusercontent.com/u/258367783"
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
      "forks": 821,
      "added_stars": 2259,
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
          "username": "JustinGuese",
          "href": "https://github.com/JustinGuese",
          "avatar": "https://avatars.githubusercontent.com/u/9588843"
        },
        {
          "username": "kashif",
          "href": "https://github.com/kashif",
          "avatar": "https://avatars.githubusercontent.com/u/8100"
        }
      ]
    },
    {
      "author": "taylorwilsdon",
      "repo": "google_workspace_mcp",
      "avatar": "https://github.com/taylorwilsdon.png",
      "repo_link": "https://github.com/taylorwilsdon/google_workspace_mcp",
      "desc": "Control Gmail, Google Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Search & Drive with AI - Comprehensive Google Workspace / G Suite MCP Server & CLI Tool",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 491,
      "added_stars": 359,
      "builtBy": [
        {
          "username": "taylorwilsdon",
          "href": "https://github.com/taylorwilsdon",
          "avatar": "https://avatars.githubusercontent.com/u/6508528"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shawnzhu",
          "href": "https://github.com/shawnzhu",
          "avatar": "https://avatars.githubusercontent.com/u/1059372"
        },
        {
          "username": "cfdude",
          "href": "https://github.com/cfdude",
          "avatar": "https://avatars.githubusercontent.com/u/1118320"
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
      "forks": 1401,
      "added_stars": 3186,
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
          "username": "advent259141",
          "href": "https://github.com/advent259141",
          "avatar": "https://avatars.githubusercontent.com/u/197440256"
        }
      ]
    },
    {
      "author": "BerriAI",
      "repo": "litellm",
      "avatar": "https://github.com/BerriAI.png",
      "repo_link": "https://github.com/BerriAI/litellm",
      "desc": "Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, guardrails, loadbalancing and logging. [Bedrock, Azure, OpenAI, VertexAI, Cohere, Anthropic, Sagemaker, HuggingFace, VLLM, NVIDIA NIM]",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6103,
      "added_stars": 2543,
      "builtBy": [
        {
          "username": "ishaan-jaff",
          "href": "https://github.com/ishaan-jaff",
          "avatar": "https://avatars.githubusercontent.com/u/29436595"
        },
        {
          "username": "krrishdholakia",
          "href": "https://github.com/krrishdholakia",
          "avatar": "https://avatars.githubusercontent.com/u/17561003"
        },
        {
          "username": "yuneng-jiang",
          "href": "https://github.com/yuneng-jiang",
          "avatar": "https://avatars.githubusercontent.com/u/171294688"
        },
        {
          "username": "Sameerlite",
          "href": "https://github.com/Sameerlite",
          "avatar": "https://avatars.githubusercontent.com/u/231518212"
        },
        {
          "username": "uc4w6c",
          "href": "https://github.com/uc4w6c",
          "avatar": "https://avatars.githubusercontent.com/u/36355491"
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
      "forks": 5986,
      "added_stars": 2291,
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
      "author": "sooperset",
      "repo": "mcp-atlassian",
      "avatar": "https://github.com/sooperset.png",
      "repo_link": "https://github.com/sooperset/mcp-atlassian",
      "desc": "MCP server for Atlassian tools (Confluence, Jira)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 967,
      "added_stars": 319,
      "builtBy": [
        {
          "username": "sooperset",
          "href": "https://github.com/sooperset",
          "avatar": "https://avatars.githubusercontent.com/u/32061883"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cutekibry",
          "href": "https://github.com/cutekibry",
          "avatar": "https://avatars.githubusercontent.com/u/16778504"
        },
        {
          "username": "hteichmann-strato",
          "href": "https://github.com/hteichmann-strato",
          "avatar": "https://avatars.githubusercontent.com/u/151167293"
        },
        {
          "username": "major",
          "href": "https://github.com/major",
          "avatar": "https://avatars.githubusercontent.com/u/89910"
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
      "author": "openclaw",
      "repo": "openclaw",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/openclaw",
      "desc": "Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 48190,
      "added_stars": 100507,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "vignesh07",
          "href": "https://github.com/vignesh07",
          "avatar": "https://avatars.githubusercontent.com/u/1436853"
        },
        {
          "username": "obviyus",
          "href": "https://github.com/obviyus",
          "avatar": "https://avatars.githubusercontent.com/u/22031114"
        },
        {
          "username": "thewilloftheshadow",
          "href": "https://github.com/thewilloftheshadow",
          "avatar": "https://avatars.githubusercontent.com/u/35580099"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "KeygraphHQ",
      "repo": "shannon",
      "avatar": "https://github.com/KeygraphHQ.png",
      "repo_link": "https://github.com/KeygraphHQ/shannon",
      "desc": "Fully autonomous AI hacker to find actual exploits in your web apps. Shannon has achieved a 96.15% success rate on the hint-free, source-aware XBOW Benchmark.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2579,
      "added_stars": 21987,
      "builtBy": [
        {
          "username": "ajmallesh",
          "href": "https://github.com/ajmallesh",
          "avatar": "https://avatars.githubusercontent.com/u/178829317"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ezl-keygraph",
          "href": "https://github.com/ezl-keygraph",
          "avatar": "https://avatars.githubusercontent.com/u/252853768"
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
      "author": "badlogic",
      "repo": "pi-mono",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-mono",
      "desc": "AI agent toolkit: coding agent CLI, unified LLM API, TUI & web UI libraries, Slack bot, vLLM pods",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1987,
      "added_stars": 13545,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2200,
      "added_stars": 15208,
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
          "username": "rodboev",
          "href": "https://github.com/rodboev",
          "avatar": "https://avatars.githubusercontent.com/u/106971"
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
      "forks": 649,
      "added_stars": 5871,
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
          "username": "burke",
          "href": "https://github.com/burke",
          "avatar": "https://avatars.githubusercontent.com/u/1284"
        },
        {
          "username": "mbrendan",
          "href": "https://github.com/mbrendan",
          "avatar": "https://avatars.githubusercontent.com/u/25271154"
        },
        {
          "username": "vincentkoc",
          "href": "https://github.com/vincentkoc",
          "avatar": "https://avatars.githubusercontent.com/u/25068"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "playwright-cli",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/playwright-cli",
      "desc": "CLI for common Playwright actions. Record and generate Playwright code, inspect selectors and take screenshots.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 172,
      "added_stars": 2475,
      "builtBy": [
        {
          "username": "pavelfeldman",
          "href": "https://github.com/pavelfeldman",
          "avatar": "https://avatars.githubusercontent.com/u/883973"
        },
        {
          "username": "Skn0tt",
          "href": "https://github.com/Skn0tt",
          "avatar": "https://avatars.githubusercontent.com/u/14912729"
        },
        {
          "username": "yury-s",
          "href": "https://github.com/yury-s",
          "avatar": "https://avatars.githubusercontent.com/u/9798949"
        },
        {
          "username": "manuelgruber",
          "href": "https://github.com/manuelgruber",
          "avatar": "https://avatars.githubusercontent.com/u/156138"
        },
        {
          "username": "boardfish",
          "href": "https://github.com/boardfish",
          "avatar": "https://avatars.githubusercontent.com/u/20680337"
        }
      ]
    },
    {
      "author": "virattt",
      "repo": "dexter",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/dexter",
      "desc": "An autonomous agent for deep financial research",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2054,
      "added_stars": 7137,
      "builtBy": [
        {
          "username": "virattt",
          "href": "https://github.com/virattt",
          "avatar": "https://avatars.githubusercontent.com/u/901795"
        },
        {
          "username": "MkDev11",
          "href": "https://github.com/MkDev11",
          "avatar": "https://avatars.githubusercontent.com/u/94194147"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "gupta-8",
          "href": "https://github.com/gupta-8",
          "avatar": "https://avatars.githubusercontent.com/u/215169640"
        },
        {
          "username": "sjhddh",
          "href": "https://github.com/sjhddh",
          "avatar": "https://avatars.githubusercontent.com/u/5778228"
        }
      ]
    },
    {
      "author": "steipete",
      "repo": "summarize",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/summarize",
      "desc": "Point at any URL/YouTube/Podcast or file. Get the gist. CLI and Chrome Extension.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 285,
      "added_stars": 3408,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "mvance",
          "href": "https://github.com/mvance",
          "avatar": "https://avatars.githubusercontent.com/u/82473"
        },
        {
          "username": "vlnd0",
          "href": "https://github.com/vlnd0",
          "avatar": "https://avatars.githubusercontent.com/u/42946292"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "philippb",
          "href": "https://github.com/philippb",
          "avatar": "https://avatars.githubusercontent.com/u/374326"
        }
      ]
    },
    {
      "author": "steipete",
      "repo": "mcporter",
      "avatar": "https://github.com/steipete.png",
      "repo_link": "https://github.com/steipete/mcporter",
      "desc": "Call MCPs via TypeScript, masquerading as simple TypeScript API. Or package them as cli.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 161,
      "added_stars": 1051,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "ryoppippi",
          "href": "https://github.com/ryoppippi",
          "avatar": "https://avatars.githubusercontent.com/u/1560508"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "rawwerks",
          "href": "https://github.com/rawwerks",
          "avatar": "https://avatars.githubusercontent.com/u/19483938"
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
      "forks": 253,
      "added_stars": 2254,
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
        },
        {
          "username": "andreasasprou",
          "href": "https://github.com/andreasasprou",
          "avatar": "https://avatars.githubusercontent.com/u/8077469"
        }
      ]
    },
    {
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need - A nano Claude Code–like agent, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4083,
      "added_stars": 4301,
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
      "author": "seerr-team",
      "repo": "seerr",
      "avatar": "https://github.com/seerr-team.png",
      "repo_link": "https://github.com/seerr-team/seerr",
      "desc": "Open-source media request and discovery manager for Jellyfin, Plex, and Emby.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 659,
      "added_stars": 1616,
      "builtBy": [
        {
          "username": "fallenbagel",
          "href": "https://github.com/fallenbagel",
          "avatar": "https://avatars.githubusercontent.com/u/98979876"
        },
        {
          "username": "sct",
          "href": "https://github.com/sct",
          "avatar": "https://avatars.githubusercontent.com/u/234213"
        },
        {
          "username": "TheCatLady",
          "href": "https://github.com/TheCatLady",
          "avatar": "https://avatars.githubusercontent.com/u/52870424"
        },
        {
          "username": "gauthier-th",
          "href": "https://github.com/gauthier-th",
          "avatar": "https://avatars.githubusercontent.com/u/37781713"
        }
      ]
    },
    {
      "author": "tambo-ai",
      "repo": "tambo",
      "avatar": "https://github.com/tambo-ai.png",
      "repo_link": "https://github.com/tambo-ai/tambo",
      "desc": "Generative UI SDK for React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 544,
      "added_stars": 3839,
      "builtBy": [
        {
          "username": "alecf",
          "href": "https://github.com/alecf",
          "avatar": "https://avatars.githubusercontent.com/u/135340"
        },
        {
          "username": "MichaelMilstead",
          "href": "https://github.com/MichaelMilstead",
          "avatar": "https://avatars.githubusercontent.com/u/8498335"
        },
        {
          "username": "tambo-bot",
          "href": "https://github.com/tambo-bot",
          "avatar": "https://avatars.githubusercontent.com/u/230265268"
        },
        {
          "username": "akhileshrangani4",
          "href": "https://github.com/akhileshrangani4",
          "avatar": "https://avatars.githubusercontent.com/u/70284178"
        }
      ]
    },
    {
      "author": "cloudflare",
      "repo": "agents",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/agents",
      "desc": "Build and deploy AI Agents on Cloudflare",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 443,
      "added_stars": 1374,
      "builtBy": [
        {
          "username": "threepointone",
          "href": "https://github.com/threepointone",
          "avatar": "https://avatars.githubusercontent.com/u/18808"
        },
        {
          "username": "whoiskatrin",
          "href": "https://github.com/whoiskatrin",
          "avatar": "https://avatars.githubusercontent.com/u/8017908"
        },
        {
          "username": "mattzcarey",
          "href": "https://github.com/mattzcarey",
          "avatar": "https://avatars.githubusercontent.com/u/77928207"
        },
        {
          "username": "deathbyknowledge",
          "href": "https://github.com/deathbyknowledge",
          "avatar": "https://avatars.githubusercontent.com/u/37671466"
        }
      ]
    },
    {
      "author": "iOfficeAI",
      "repo": "AionUi",
      "avatar": "https://github.com/iOfficeAI.png",
      "repo_link": "https://github.com/iOfficeAI/AionUi",
      "desc": "Free, local, open-source 24/7 Cowork app and OpenClaw for Gemini CLI, Claude Code, Codex, OpenCode, Qwen Code, Goose CLI, Auggie, and more | 🌟 Star if you like it!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1356,
      "added_stars": 5669,
      "builtBy": [
        {
          "username": "kuishou68",
          "href": "https://github.com/kuishou68",
          "avatar": "https://avatars.githubusercontent.com/u/54054995"
        },
        {
          "username": "IceyLiu",
          "href": "https://github.com/IceyLiu",
          "avatar": "https://avatars.githubusercontent.com/u/10683426"
        },
        {
          "username": "halvee-tech",
          "href": "https://github.com/halvee-tech",
          "avatar": "https://avatars.githubusercontent.com/u/224486645"
        },
        {
          "username": "goworm",
          "href": "https://github.com/goworm",
          "avatar": "https://avatars.githubusercontent.com/u/28083037"
        },
        {
          "username": "piorpua",
          "href": "https://github.com/piorpua",
          "avatar": "https://avatars.githubusercontent.com/u/3362922"
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
      "forks": 1592,
      "added_stars": 4295,
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
      "title": "What should I do and learn in 2026?",
      "description": "Maybe it's not about skills, but tactics.",
      "url": "https://dev.to/missamarakay/what-should-i-do-and-learn-in-2026-4enc",
      "tags": "career, learning, motivation, productivity",
      "reactions": 17,
      "comments": 6,
      "reading_time": 5,
      "author": "missamarakay"
    },
    {
      "title": "I Plugged Gemini Into My 10,000-Line Rental Platform. Here's What Happened.",
      "description": "This is a submission for the Built with Google Gemini: Writing Challenge           What I Built with...",
      "url": "https://dev.to/wilhelm_tell/i-plugged-gemini-into-my-10000-line-rental-platform-heres-what-happened-2epi",
      "tags": "devchallenge, geminireflections, gemini",
      "reactions": 4,
      "comments": 0,
      "reading_time": 7,
      "author": "wilhelm_tell"
    },
    {
      "title": "Meet BlokJS - 9 KB, No Build Step, Standalone, Full FE Framework",
      "description": "BlokJS - Zero-Build, Zero-Dependency, Standalone, Reactive, Lightweight UI Framework   New...",
      "url": "https://dev.to/maleta/meet-blokjs-9-kb-no-build-step-standalone-full-fe-framework-3gfg",
      "tags": "javascript, frontend, webdev, opensource",
      "reactions": 1,
      "comments": 0,
      "reading_time": 6,
      "author": "maleta"
    },
    {
      "title": "Flexible Border Element",
      "description": "I recently transitioned from full stack to front end engineer. Front end is what inspired me to...",
      "url": "https://dev.to/lisacee/flexible-border-element-m6e",
      "tags": "css, frontend, tailwindcss, learning",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "lisacee"
    },
    {
      "title": "Why I stopped overthinking the Livewire vs. Inertia debate (and how to pick one)",
      "description": "The Laravel ecosystem is spoiled for choice. When building a modern web app, the first big decision...",
      "url": "https://dev.to/hamizulfaiz/why-i-stopped-overthinking-the-livewire-vs-inertia-debate-and-how-to-pick-one-5h67",
      "tags": "webdev, livewire, inertiajs, laravel",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "hamizulfaiz"
    },
    {
      "title": "DevStretch: The Antiburnout Protocol for Devs Who Forgot They Have Bodies",
      "description": "The Community   Let’s be honest: most of us treat our physical bodies like a deprecated...",
      "url": "https://dev.to/highflyer910/devstretch-the-antiburnout-protocol-for-devs-who-forgot-they-have-bodies-3am",
      "tags": "devchallenge, weekendchallenge, showdev, pwa",
      "reactions": 53,
      "comments": 11,
      "reading_time": 3,
      "author": "highflyer910"
    },
    {
      "title": "How Do You Actually Know If AI Is Working On Your Team?",
      "description": "Productivity percentages and acceptance rates don't tell you much. Here's a more concrete metric: AI functional coverage.",
      "url": "https://dev.to/dionysos/how-do-you-actually-know-if-ai-is-working-on-your-team-2b02",
      "tags": "ai, engineering, productivity, dx",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "dionysos"
    },
    {
      "title": "Coding Agents Are Actually Good at This One Thing",
      "description": "Coding agents aren't magic. But for internal tooling? They've brought back the \"just build the thing\" era I've been missing since Microsoft Access.",
      "url": "https://dev.to/mattstratton/coding-agents-are-actually-good-at-this-one-thing-5dej",
      "tags": "webdev, productivity, ai, beginners",
      "reactions": 1,
      "comments": 3,
      "reading_time": 4,
      "author": "mattstratton"
    },
    {
      "title": "Stop Running Prettier Through ESLint — Here's Why Standalone Is Better",
      "description": "If you've set up a JavaScript project in the last few years, there's a good chance you're running...",
      "url": "https://dev.to/vadim/stop-running-prettier-through-eslint-heres-why-standalone-is-better-78a",
      "tags": "frontend, vite, javascript, typescript",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "vadim"
    },
    {
      "title": "Mastering JavaScript Arrays: A Beginner's Guide to Organize Data Like a Pro",
      "description": "Introduction   Hey there! my fellow code explorer!   Imagine you're planning a weekend road...",
      "url": "https://dev.to/ritam369/mastering-javascript-arrays-a-beginners-guide-to-organize-data-like-a-pro-2dk0",
      "tags": "webdev, programming, javascript, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "ritam369"
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
      "title": "What should I do and learn in 2026?",
      "description": "Maybe it's not about skills, but tactics.",
      "url": "https://dev.to/missamarakay/what-should-i-do-and-learn-in-2026-4enc",
      "tags": "career, learning, motivation, productivity",
      "reactions": 17,
      "comments": 6,
      "reading_time": 5,
      "author": "missamarakay"
    },
    {
      "title": "Devlog 3",
      "description": "&lt; there has been a large gap between the last devlog that I posted, sorry about that I am not good...",
      "url": "https://dev.to/no_arms_studio/devlog-3-3324",
      "tags": "programming, productivity, discuss",
      "reactions": 0,
      "comments": 1,
      "reading_time": 2,
      "author": "no_arms_studio"
    },
    {
      "title": "I built a local-first AI prompt manager — here is why offline-first was worth the extra complexity",
      "description": "Every developer I know who uses AI tools daily has the same problem.  You write a prompt that works...",
      "url": "https://dev.to/wilxai/i-built-a-local-first-ai-prompt-manager-here-is-why-offline-first-was-worth-the-extra-complexity-4ao7",
      "tags": "ai, llm, productivity, showdev",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "wilxai"
    },
    {
      "title": "I Deleted Half My Codebase and Nobody Noticed",
      "description": "Last quarter, I deleted 48% of our backend code.  No new bugs. No outages. No customer...",
      "url": "https://dev.to/thegiansorianodev/i-deleted-half-my-codebase-and-nobody-noticed-549",
      "tags": "programming, softwareengineering, productivity, career",
      "reactions": 35,
      "comments": 3,
      "reading_time": 2,
      "author": "thegiansorianodev"
    },
    {
      "title": "the difference between Visual studio code and Visual studio (And how to decide whats best for you)",
      "description": "What most people think   Now you may think Visual studio code is the same as Visual studio...",
      "url": "https://dev.to/beey12345/the-difference-between-visual-studio-code-and-visual-studio-and-how-to-decide-whats-best-for-you-1ej",
      "tags": "vscode, beginners, productivity, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "beey12345"
    },
    {
      "title": "If AI Writes Your Code, Should the Session Be Part of the Commit?",
      "description": "There's a thread on Hacker News right now asking: if AI writes code, should the AI session log be...",
      "url": "https://dev.to/midastools/if-ai-writes-your-code-should-the-session-be-part-of-the-commit-2d87",
      "tags": "ai, productivity, webdev, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 2,
      "author": "midastools"
    },
    {
      "title": "Getting Unix Tools to Work in PowerShell: A Debugging War Story",
      "description": "Generated by Claude (Anthropic) based on a real debugging session with @ankitg12. This post exists...",
      "url": "https://dev.to/ankitg12/getting-unix-tools-to-work-in-powershell-a-debugging-war-story-1ipl",
      "tags": "powershell, windows, tutorial, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "ankitg12"
    },
    {
      "title": "I stopped trusting my coding agents, so I built a system to not trust them",
      "description": "As it happens, the last year for me was just big projects: Orome.ai, Relayn.sh. Multiple elements,...",
      "url": "https://dev.to/pzygadlo/i-stopped-trusting-my-coding-agents-so-i-built-a-system-to-not-trust-them-3756",
      "tags": "ai, productivity, agents, devtools",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "pzygadlo"
    },
    {
      "title": "If You Installed Claude Code and Only Chat With It — You’re Missing the Point",
      "description": "Claude Code’s real power isn’t in the chat. It’s in 3 config files.",
      "url": "https://dev.to/ji_ai/if-you-installed-claude-code-and-only-chat-with-it-youre-missing-the-point-4elg",
      "tags": "ai, webdev, claude, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "ji_ai"
    },
    {
      "title": "Claude Code, 깔아놓고 채팅만 하고 있다면 — CLAUDE.md, Hooks, MCP 설정법",
      "description": "Claude Code의 진짜 힘은 채팅창이 아니라 설정 파일에 있다.",
      "url": "https://dev.to/ji_ai/claude-code-ggalanohgo-caetingman-hago-issdamyeon-claudemd-hooks-mcp-seoljeongbeob-3o18",
      "tags": "ai, webdev, claude, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "ji_ai"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
```

