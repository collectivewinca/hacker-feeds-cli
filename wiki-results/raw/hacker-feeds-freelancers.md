# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-10-05 06:58:54 UTC

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
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4566,
      "added_stars": 4242,
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
      "author": "vercel",
      "repo": "next.js",
      "avatar": "https://github.com/vercel.png",
      "repo_link": "https://github.com/vercel/next.js",
      "desc": "The React Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 33926,
      "added_stars": 477,
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
      "author": "byoungd",
      "repo": "up",
      "avatar": "https://github.com/byoungd.png",
      "repo_link": "https://github.com/byoungd/up",
      "desc": "An advanced guide which might benefit you a lot 🎉 . 韩先凯的人生进阶指南 人生进阶指南 离谱的人生 人生进阶 AI学习 AI指南 韩先凯的AI学习指南 英语学习指南/英语学习教程/英语学习/学英语",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6674,
      "added_stars": 3205,
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
      "author": "androoAGI",
      "repo": "starnet",
      "avatar": "https://github.com/androoAGI.png",
      "repo_link": "https://github.com/androoAGI/starnet",
      "desc": "A living pixel-art station where real AI agents do real work. Local-first desktop agent harness - bring your own key, watch your crew actually run.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 191,
      "added_stars": 394,
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
      "author": "michael-denyer",
      "repo": "pstack-claude",
      "avatar": "https://github.com/michael-denyer.png",
      "repo_link": "https://github.com/michael-denyer/pstack-claude",
      "desc": "Claude Code, Codex, Pi, OpenCode, Gemini, and Prime Agent versions of Poteto's pstack. Rigorous agent workflows with Cursor primitives translated for other harnesses.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 138,
      "added_stars": 495,
      "builtBy": [
        {
          "username": "michael-denyer",
          "href": "https://github.com/michael-denyer",
          "avatar": "https://avatars.githubusercontent.com/u/97485362"
        },
        {
          "username": "harrymunro",
          "href": "https://github.com/harrymunro",
          "avatar": "https://avatars.githubusercontent.com/u/13261778"
        },
        {
          "username": "younes-io",
          "href": "https://github.com/younes-io",
          "avatar": "https://avatars.githubusercontent.com/u/3153107"
        },
        {
          "username": "tlmader",
          "href": "https://github.com/tlmader",
          "avatar": "https://avatars.githubusercontent.com/u/2181467"
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
      "forks": 589,
      "added_stars": 414,
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
      "author": "mnfst",
      "repo": "awesome-free-llm-apis",
      "avatar": "https://github.com/mnfst.png",
      "repo_link": "https://github.com/mnfst/awesome-free-llm-apis",
      "desc": "List of Permanent Free LLM API (API Keys)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 962,
      "added_stars": 728,
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
          "username": "codeusb",
          "href": "https://github.com/codeusb",
          "avatar": "https://avatars.githubusercontent.com/u/75412910"
        }
      ]
    },
    {
      "author": "vercel-labs",
      "repo": "agent-skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/agent-skills",
      "desc": "Vercel's official collection of agent skills",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2802,
      "added_stars": 329,
      "builtBy": [
        {
          "username": "aurorascharff",
          "href": "https://github.com/aurorascharff",
          "avatar": "https://avatars.githubusercontent.com/u/66901228"
        },
        {
          "username": "shuding",
          "href": "https://github.com/shuding",
          "avatar": "https://avatars.githubusercontent.com/u/3676859"
        },
        {
          "username": "quuu",
          "href": "https://github.com/quuu",
          "avatar": "https://avatars.githubusercontent.com/u/32676955"
        },
        {
          "username": "nandorojo",
          "href": "https://github.com/nandorojo",
          "avatar": "https://avatars.githubusercontent.com/u/13172299"
        },
        {
          "username": "JohnPhamous",
          "href": "https://github.com/JohnPhamous",
          "avatar": "https://avatars.githubusercontent.com/u/16027268"
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
      "forks": 6288,
      "added_stars": 2076,
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
      "author": "DietrichGebert",
      "repo": "ponytail",
      "avatar": "https://github.com/DietrichGebert.png",
      "repo_link": "https://github.com/DietrichGebert/ponytail",
      "desc": "Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 8342,
      "added_stars": 7948,
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
      "author": "qist",
      "repo": "tvbox",
      "avatar": "https://github.com/qist.png",
      "repo_link": "https://github.com/qist/tvbox",
      "desc": "OK影视、tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4163,
      "added_stars": 166,
      "builtBy": [
        {
          "username": "gaotianliuyun",
          "href": "https://github.com/gaotianliuyun",
          "avatar": "https://avatars.githubusercontent.com/u/58679624"
        },
        {
          "username": "qist",
          "href": "https://github.com/qist",
          "avatar": "https://avatars.githubusercontent.com/u/7844620"
        },
        {
          "username": "st7833232",
          "href": "https://github.com/st7833232",
          "avatar": "https://avatars.githubusercontent.com/u/46182664"
        }
      ]
    },
    {
      "author": "DuarteSantos8",
      "repo": "openGym",
      "avatar": "https://github.com/DuarteSantos8.png",
      "repo_link": "https://github.com/DuarteSantos8/openGym",
      "desc": "Self-hosted gym & body-weight tracker — plan routines, log workouts (supersets, warm-ups, cardio), see which muscles are trained, fatigued or detrained, import from FitNotes/Strong/Hevy, passkey login. Your data, your server.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 570,
      "added_stars": 921,
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
      "by": "thelastgallon",
      "descendants": 4,
      "id": 49960901,
      "kids": [
        49961372,
        49961494,
        49961413,
        49961232
      ],
      "score": 34,
      "time": 1791176983,
      "title": "Replacement of petroleum based products with plant-based materials (2025)",
      "type": "story",
      "url": "https://onlinelibrary.wiley.com/doi/10.1002/eng2.70108"
    },
    {
      "by": "snehesht",
      "descendants": 330,
      "id": 49953495,
      "kids": [
        49955565,
        49956534,
        49961324,
        49953496,
        49960283,
        49957375,
        49957786,
        49954019,
        49954449,
        49954498,
        49954815,
        49955948,
        49960552,
        49960949,
        49953980,
        49960758,
        49957515,
        49954658,
        49960784,
        49954266,
        49953844,
        49954083,
        49960340,
        49958835,
        49954581,
        49960248,
        49955898,
        49958817,
        49953738,
        49959598,
        49954705,
        49954041,
        49958593,
        49954614,
        49958456,
        49957399,
        49958767,
        49956116,
        49955321,
        49958780,
        49953852,
        49953669,
        49954307,
        49954297,
        49956279,
        49959449,
        49954117,
        49954513,
        49957089,
        49955308,
        49955067,
        49953674,
        49955995,
        49953945,
        49953933,
        49957908,
        49955512,
        49954313,
        49953792,
        49960314,
        49959645,
        49959889,
        49954678,
        49957627,
        49959199,
        49955708,
        49958086,
        49954719,
        49955340,
        49954320
      ],
      "score": 741,
      "time": 1791118313,
      "title": "Run Qwen 3.8 Flash Next (125B) on consumer hardware (RTX 4090) at 100T/s",
      "type": "story",
      "url": "https://github.com/Niko1221/Strata"
    },
    {
      "by": "rdmuser",
      "descendants": 11,
      "id": 49957812,
      "kids": [
        49961517,
        49959194,
        49959968,
        49960754,
        49960146,
        49959510,
        49961091
      ],
      "score": 109,
      "text": "<a href=\"https:&#x2F;&#x2F;archive.org&#x2F;details&#x2F;tippett-archive&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.org&#x2F;details&#x2F;tippett-archive&#x2F;</a>",
      "time": 1791147688,
      "title": "In the wake of closure, a digital archive of animated materials appears online",
      "type": "story",
      "url": "https://filmstories.co.uk/news/tippett-studios-in-the-wake-of-its-closure-a-digital-archive-of-animated-materials-appears-online/"
    },
    {
      "by": "shellpipe",
      "descendants": 28,
      "id": 49959654,
      "kids": [
        49961488,
        49961428,
        49961364,
        49960986,
        49961326,
        49961315,
        49960806,
        49961119,
        49960695,
        49961136,
        49961306,
        49960693,
        49960720
      ],
      "score": 62,
      "time": 1791162716,
      "title": "A 40ms Go garbage collector pause caused by swap",
      "type": "story",
      "url": "https://frn.sh/go-gc/"
    },
    {
      "by": "Vaslo",
      "descendants": 4,
      "id": 49948300,
      "kids": [
        49961500,
        49819304,
        49818243,
        49948308
      ],
      "score": 31,
      "time": 1791065640,
      "title": "We ported the original Doom to SQL",
      "type": "story",
      "url": "https://cedardb.com/blog/sqldoom/"
    },
    {
      "by": "emptybits",
      "descendants": 36,
      "id": 49961057,
      "kids": [
        49961356,
        49961423,
        49961351,
        49961432,
        49961467,
        49961385,
        49961479,
        49961477,
        49961499,
        49961519,
        49961470,
        49961456,
        49961258,
        49961394
      ],
      "score": 43,
      "time": 1791178660,
      "title": "Anthropic reported diary entry to police, woman faces felony charge",
      "type": "story",
      "url": "https://www.techspot.com/news/114091-florida-woman-used-claude-diary-anthropic-reported-shoot.html"
    },
    {
      "by": "tobr",
      "descendants": 19,
      "id": 49943637,
      "kids": [
        49961436,
        49961426,
        49959335,
        49961167,
        49959436,
        49959592,
        49958865,
        49959075
      ],
      "score": 122,
      "time": 1791029980,
      "title": "Infidel goes wild",
      "type": "story",
      "url": "https://blog.zarfhome.com/2026/10/infidel-goes-wild"
    },
    {
      "by": "wiso",
      "descendants": 64,
      "id": 49956681,
      "kids": [
        49961077,
        49961253,
        49961378,
        49960325,
        49958385,
        49960056,
        49959910,
        49961132,
        49961062,
        49957281,
        49959877,
        49959205,
        49960323,
        49960974,
        49958672,
        49959745,
        49961179,
        49960792,
        49958543,
        49959894,
        49958863,
        49959400,
        49958929,
        49959124,
        49959069,
        49958616,
        49957131,
        49958490,
        49959932,
        49959784
      ],
      "score": 166,
      "time": 1791139757,
      "title": "A browser-native classic Visual Basic VB6 IDE",
      "type": "story",
      "url": "https://wieslawsoltes.github.io/VB6/"
    },
    {
      "by": "llm_nerd",
      "descendants": 112,
      "id": 49959869,
      "kids": [
        49960091,
        49960000,
        49960471,
        49960008,
        49960872,
        49960362,
        49960026,
        49960366,
        49960822,
        49960473,
        49960973,
        49960632,
        49960686,
        49960438,
        49960428,
        49960276,
        49960052,
        49960687
      ],
      "score": 178,
      "time": 1791165248,
      "title": "Powerless F1 drivers frustrated by Bahrain F1 software glitch",
      "type": "story",
      "url": "https://www.motorsport.com/f1/news/horrible-totally-unacceptable-powerless-f1-drivers-frustrated-by-bahrain-f1-software-glitch/10861968/"
    },
    {
      "by": "vntok",
      "descendants": 25,
      "id": 49932236,
      "kids": [
        49961123,
        49961042,
        49949352,
        49961337,
        49959753,
        49960469,
        49961146,
        49960125,
        49960545,
        49960116,
        49959890,
        49959761,
        49961005,
        49960615
      ],
      "score": 105,
      "time": 1790939976,
      "title": "The Tao of Backup",
      "type": "story",
      "url": "http://www.taobackup.com/index.html"
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
      "title": "ncdu: NCurses Disk Usage (an updated fork)",
      "url": "https://github.com/rcalixte/ncdu",
      "score": 26,
      "comments": 11,
      "tags": [
        "release",
        "zig"
      ],
      "id": "dsoh2w"
    },
    {
      "title": "Refinement E-Graphs",
      "url": "https://www.philipzucker.com/refinement_egraph/",
      "score": 10,
      "comments": 0,
      "tags": [
        "compilers",
        "formalmethods"
      ],
      "id": "9bufek"
    },
    {
      "title": "Rust's derive often implies inline",
      "url": "https://yossarian.net/til/post/rust-s-derive-often-implies-inline/",
      "score": 64,
      "comments": 14,
      "tags": [
        "rust"
      ],
      "id": "dldhpw"
    },
    {
      "title": "Iroh global content discovery",
      "url": "https://www.iroh.computer/blog/iroh-global-content-discovery",
      "score": 28,
      "comments": 6,
      "tags": [
        "distributed"
      ],
      "id": "eoibah"
    },
    {
      "title": "Why don’t more developers \"use the platform\"?",
      "url": "https://nolanlawson.com/2026/10/03/why-dont-more-developers-use-the-platform/",
      "score": 68,
      "comments": 32,
      "tags": [
        "web"
      ],
      "id": "srduzv"
    },
    {
      "title": "We’re going to need default hard budget caps on pretty much everything",
      "url": "https://simonwillison.net/2026/Oct/3/default-hard-budget-caps/",
      "score": 40,
      "comments": 18,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "xkwswd"
    },
    {
      "title": "grubby: static site generator for git repos written in Ruby",
      "url": "https://git.btxx.org/grubby",
      "score": 16,
      "comments": 10,
      "tags": [
        "ruby",
        "vcs"
      ],
      "id": "xpyahx"
    },
    {
      "title": "Claude Says",
      "url": "https://ohhfishal.net/Posts/claude",
      "score": 6,
      "comments": 1,
      "tags": [
        "vibecoding"
      ],
      "id": "7faqgg"
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3081,
      "added_stars": 26627,
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
      "author": "anthropics",
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5555,
      "added_stars": 4143,
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
      "forks": 5919,
      "added_stars": 23232,
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
      "forks": 839,
      "added_stars": 5298,
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
      "author": "superdesigndev",
      "repo": "treg",
      "avatar": "https://github.com/superdesigndev.png",
      "repo_link": "https://github.com/superdesigndev/treg",
      "desc": "OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 347,
      "added_stars": 2955,
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3054,
      "added_stars": 2297,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1700,
      "added_stars": 3336,
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
          "username": "mohgupta-ship-it",
          "href": "https://github.com/mohgupta-ship-it",
          "avatar": "https://avatars.githubusercontent.com/u/269879782"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 8784,
      "added_stars": 7536,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8200,
      "added_stars": 4889,
      "builtBy": [
        {
          "username": "jingyaogong",
          "href": "https://github.com/jingyaogong",
          "avatar": "https://avatars.githubusercontent.com/u/62287848"
        },
        {
          "username": "iomgaa-ycz",
          "href": "https://github.com/iomgaa-ycz",
          "avatar": "https://avatars.githubusercontent.com/u/124225682"
        },
        {
          "username": "Linxiushen",
          "href": "https://github.com/Linxiushen",
          "avatar": "https://avatars.githubusercontent.com/u/142557582"
        },
        {
          "username": "basil-k-aji-dev",
          "href": "https://github.com/basil-k-aji-dev",
          "avatar": "https://avatars.githubusercontent.com/u/70605804"
        },
        {
          "username": "readlnh",
          "href": "https://github.com/readlnh",
          "avatar": "https://avatars.githubusercontent.com/u/16349082"
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
      "forks": 10982,
      "added_stars": 11614,
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
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3349,
      "added_stars": 3239,
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
      "author": "ahujasid",
      "repo": "mcp-for-blender",
      "avatar": "https://github.com/ahujasid.png",
      "repo_link": "https://github.com/ahujasid/mcp-for-blender",
      "desc": "Community plugin to control Blender 3D with any LLM of your choice. Not affiliated with the official Blender Foundation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2721,
      "added_stars": 3232,
      "builtBy": [
        {
          "username": "ahujasid",
          "href": "https://github.com/ahujasid",
          "avatar": "https://avatars.githubusercontent.com/u/11807284"
        },
        {
          "username": "ElgoogUdiab",
          "href": "https://github.com/ElgoogUdiab",
          "avatar": "https://avatars.githubusercontent.com/u/28426666"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "siddikisahil47",
          "href": "https://github.com/siddikisahil47",
          "avatar": "https://avatars.githubusercontent.com/u/134954614"
        },
        {
          "username": "harrywang",
          "href": "https://github.com/harrywang",
          "avatar": "https://avatars.githubusercontent.com/u/595772"
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
      "forks": 31399,
      "added_stars": 1194,
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
      "forks": 727,
      "added_stars": 1487,
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
      "author": "microsoft",
      "repo": "markitdown",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/markitdown",
      "desc": "Python tool for converting files and office documents to Markdown.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13958,
      "added_stars": 10769,
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
        }
      ]
    },
    {
      "author": "browser-use",
      "repo": "browser-use",
      "avatar": "https://github.com/browser-use.png",
      "repo_link": "https://github.com/browser-use/browser-use",
      "desc": "Agents that use the browser.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12931,
      "added_stars": 5190,
      "builtBy": [
        {
          "username": "MagMueller",
          "href": "https://github.com/MagMueller",
          "avatar": "https://avatars.githubusercontent.com/u/67061560"
        },
        {
          "username": "pirate",
          "href": "https://github.com/pirate",
          "avatar": "https://avatars.githubusercontent.com/u/511499"
        },
        {
          "username": "mertunsall",
          "href": "https://github.com/mertunsall",
          "avatar": "https://avatars.githubusercontent.com/u/22038471"
        },
        {
          "username": "sauravpanda",
          "href": "https://github.com/sauravpanda",
          "avatar": "https://avatars.githubusercontent.com/u/12201824"
        },
        {
          "username": "gregpr07",
          "href": "https://github.com/gregpr07",
          "avatar": "https://avatars.githubusercontent.com/u/36313686"
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
      "forks": 8008,
      "added_stars": 13140,
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
      "author": "docling-project",
      "repo": "docling",
      "avatar": "https://github.com/docling-project.png",
      "repo_link": "https://github.com/docling-project/docling",
      "desc": "Get your documents ready for gen AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5001,
      "added_stars": 2490,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5936,
      "added_stars": 36137,
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
      "author": "SnailSploit",
      "repo": "Claude-Red",
      "avatar": "https://github.com/SnailSploit.png",
      "repo_link": "https://github.com/SnailSploit/Claude-Red",
      "desc": "claude-red is a curated library of offensive security skills designed for the Claude skills system. Each skill is a structured SKILL.md file that primes Claude with expert-level methodology for a specific attack surface — from SQLi to shellcode, EDR evasion to exploit development.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 950,
      "added_stars": 4370,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1821,
      "added_stars": 5116,
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
      "author": "paperclipai",
      "repo": "paperclip",
      "avatar": "https://github.com/paperclipai.png",
      "repo_link": "https://github.com/paperclipai/paperclip",
      "desc": "The open-source app everyone uses to manage agents at work",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16462,
      "added_stars": 17361,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5104,
      "added_stars": 12865,
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
      "author": "anthropics",
      "repo": "claude-code",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code",
      "desc": "Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 25512,
      "added_stars": 5996,
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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 927,
      "added_stars": 3095,
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
      "forks": 4310,
      "added_stars": 6502,
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
          "username": "tashdroid",
          "href": "https://github.com/tashdroid",
          "avatar": "https://avatars.githubusercontent.com/u/319142293"
        },
        {
          "username": "OhOkThisIsFine",
          "href": "https://github.com/OhOkThisIsFine",
          "avatar": "https://avatars.githubusercontent.com/u/102485413"
        }
      ]
    },
    {
      "author": "humanlayer",
      "repo": "skills",
      "avatar": "https://github.com/humanlayer.png",
      "repo_link": "https://github.com/humanlayer/skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 159,
      "added_stars": 2746,
      "builtBy": [
        {
          "username": "dexhorthy",
          "href": "https://github.com/dexhorthy",
          "avatar": "https://avatars.githubusercontent.com/u/3730605"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "K-Mistele",
          "href": "https://github.com/K-Mistele",
          "avatar": "https://avatars.githubusercontent.com/u/18430555"
        },
        {
          "username": "LuisGot",
          "href": "https://github.com/LuisGot",
          "avatar": "https://avatars.githubusercontent.com/u/161772233"
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
      "forks": 9286,
      "added_stars": 2838,
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
        },
        {
          "username": "wtlyu",
          "href": "https://github.com/wtlyu",
          "avatar": "https://avatars.githubusercontent.com/u/8267138"
        }
      ]
    },
    {
      "author": "THU-MAIC",
      "repo": "OpenMAIC",
      "avatar": "https://github.com/THU-MAIC.png",
      "repo_link": "https://github.com/THU-MAIC/OpenMAIC",
      "desc": "Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6184,
      "added_stars": 8751,
      "builtBy": [
        {
          "username": "wyuc",
          "href": "https://github.com/wyuc",
          "avatar": "https://avatars.githubusercontent.com/u/18752201"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cosarah",
          "href": "https://github.com/cosarah",
          "avatar": "https://avatars.githubusercontent.com/u/117187635"
        },
        {
          "username": "YizukiAme",
          "href": "https://github.com/YizukiAme",
          "avatar": "https://avatars.githubusercontent.com/u/104178195"
        },
        {
          "username": "LING-6150",
          "href": "https://github.com/LING-6150",
          "avatar": "https://avatars.githubusercontent.com/u/181122961"
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
      "forks": 44361,
      "added_stars": 3502,
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
      "author": "supabase",
      "repo": "supabase",
      "avatar": "https://github.com/supabase.png",
      "repo_link": "https://github.com/supabase/supabase",
      "desc": "The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 15807,
      "added_stars": 2603,
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
      "author": "cline",
      "repo": "cline",
      "avatar": "https://github.com/cline.png",
      "repo_link": "https://github.com/cline/cline",
      "desc": "Autonomous coding agent as an SDK, IDE extension, or CLI assistant.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7604,
      "added_stars": 2799,
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
      "author": "miuuyy",
      "repo": "codex-chatgpt-web",
      "avatar": "https://github.com/miuuyy.png",
      "repo_link": "https://github.com/miuuyy/codex-chatgpt-web",
      "desc": "Use ChatGPT Web (including Pro) as a native model in Codex — with context, tools, streaming and images, without using Codex quota.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1061,
      "added_stars": 9148,
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
      "author": "alsk1992",
      "repo": "CloddsBot",
      "avatar": "https://github.com/alsk1992.png",
      "repo_link": "https://github.com/alsk1992/CloddsBot",
      "desc": "Open Source AI trading agent that operates autonomously across 1000+ markets - Polymarket, Kalshi, Binance, Hyperliquid, Solana DEXs, 5 EVM chains. Scans for edge, executes instantly, manages risk while you sleep. Agent commerce protocol for machine-to-machine payments. Self-hosted. Built on Claude.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 339,
      "added_stars": 2101,
      "builtBy": [
        {
          "username": "alsk1992",
          "href": "https://github.com/alsk1992",
          "avatar": "https://avatars.githubusercontent.com/u/193760801"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "dajiaohuang",
          "href": "https://github.com/dajiaohuang",
          "avatar": "https://avatars.githubusercontent.com/u/108231307"
        },
        {
          "username": "nox-oss",
          "href": "https://github.com/nox-oss",
          "avatar": "https://avatars.githubusercontent.com/u/259919097"
        }
      ]
    },
    {
      "author": "OpenHands",
      "repo": "OpenHands",
      "avatar": "https://github.com/OpenHands.png",
      "repo_link": "https://github.com/OpenHands/OpenHands",
      "desc": "🙌 OpenHands: AI-Driven Development",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 11902,
      "added_stars": 4073,
      "builtBy": [
        {
          "username": "openhands-agent",
          "href": "https://github.com/openhands-agent",
          "avatar": "https://avatars.githubusercontent.com/u/175740463"
        },
        {
          "username": "hieptl",
          "href": "https://github.com/hieptl",
          "avatar": "https://avatars.githubusercontent.com/u/69354317"
        },
        {
          "username": "xingyaoww",
          "href": "https://github.com/xingyaoww",
          "avatar": "https://avatars.githubusercontent.com/u/38853559"
        },
        {
          "username": "tofarr",
          "href": "https://github.com/tofarr",
          "avatar": "https://avatars.githubusercontent.com/u/17094895"
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
      "forks": 1870,
      "added_stars": 8183,
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
      "forks": 2411,
      "added_stars": 5564,
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
      "author": "Tencent",
      "repo": "BrowserSkill",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/BrowserSkill",
      "desc": "Let AI agents use your real, logged-in browser without interrupting your work. CLI + extension for browser automation across any shell-capable AI agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 583,
      "added_stars": 6456,
      "builtBy": [
        {
          "username": "TencentXiaowei",
          "href": "https://github.com/TencentXiaowei",
          "avatar": "https://avatars.githubusercontent.com/u/87162611"
        },
        {
          "username": "iuyo5678",
          "href": "https://github.com/iuyo5678",
          "avatar": "https://avatars.githubusercontent.com/u/5351707"
        },
        {
          "username": "Ljy-0827",
          "href": "https://github.com/Ljy-0827",
          "avatar": "https://avatars.githubusercontent.com/u/84192562"
        },
        {
          "username": "BB-fat",
          "href": "https://github.com/BB-fat",
          "avatar": "https://avatars.githubusercontent.com/u/45072480"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 1152,
      "added_stars": 3761,
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
          "username": "jmpo",
          "href": "https://github.com/jmpo",
          "avatar": "https://avatars.githubusercontent.com/u/23352109"
        },
        {
          "username": "paulolimajr77",
          "href": "https://github.com/paulolimajr77",
          "avatar": "https://avatars.githubusercontent.com/u/60278689"
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
      "forks": 1203,
      "added_stars": 4061,
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
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-4jli",
      "tags": "weeklyretro",
      "reactions": 78,
      "comments": 77,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Rediscovering the Schwartzian Transform: Why I Had to Comment on a Flutter Performance Article",
      "description": "When a Flutter developer tackled a UI freeze sorting 10,000 timeline events, they unwittingly reinvented a 30-year-old computer science idiom. Here is how modern Dart 3 records turn the Schwartzian Transform into an elegant, 13x faster one-liner.",
      "url": "https://dev.to/gde/rediscovering-the-schwartzian-transform-why-i-had-to-comment-on-a-flutter-performance-article-30l0",
      "tags": "dart, flutter, architecture, performance",
      "reactions": 10,
      "comments": 0,
      "reading_time": 7,
      "author": "randalschwartz"
    },
    {
      "title": "The Physics of Socratic Prompting: Somatic Recoil, Chess Alpha-Beta, & The NLP Meta-Model",
      "description": "Why scalar RLHF fails at credit assignment, why barking direct code fixes turns you into an exhausted human compiler, and how Socratic questioning plus topological scars prune doomed search trees at depth d=1.",
      "url": "https://dev.to/gde/the-physics-of-socratic-prompting-somatic-recoil-chess-alpha-beta-the-nlp-meta-model-2b6e",
      "tags": "ai, programming, architecture, machinelearning",
      "reactions": 15,
      "comments": 4,
      "reading_time": 16,
      "author": "randalschwartz"
    },
    {
      "title": "Gemma 4 on Amazon SageMaker: The NVIDIA T4 Decodes at 0.8x of the L4 With the Same Answers",
      "description": "Gemma 4's 4-bit builds on SageMaker's smallest GPU, an NVIDIA T4, against the L4: a Turing patch for vLLM, the host image the CUDA 13 container needs, speed, memory, answers and cost per token.",
      "url": "https://dev.to/gde/gemma-4-on-amazon-sagemaker-the-nvidia-t4-decodes-at-08x-of-the-l4-with-the-same-answers-19m4",
      "tags": "aws, sagemaker, gemma, vllm",
      "reactions": 15,
      "comments": 1,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Repacked QAT Gemma 4 on One TPU v5e: 12B Serves at 675 Tokens per Second",
      "description": "Google's quantization-aware-trained Gemma 4 weights, repacked into int4 and int8 formats vLLM serves on TPU. On one v5e chip the repacks serve every size from E2B to 26B, read the suite level with bf16 through 12B, score up to 2.4 points above Google's own 4-bit exports at the same speed, and put 12B on the chip at 11.31 GiB and 675 output tokens per second.",
      "url": "https://dev.to/gde/repacked-qat-gemma-4-on-one-tpu-v5e-12b-serves-at-675-tokens-per-second-15dd",
      "tags": "gemma, googlecloud, machinelearning, llm",
      "reactions": 8,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Gemma 4 QAT on One TPU v5e: What Runs and What Doesn't",
      "description": "Google's quantization-aware-trained Gemma 4 weights, repacked into int4 and int8 formats vLLM serves on TPU, on one v5e chip. What runs: every size from E2B to 26B, level with bf16 through 12B, up to 2.4 points above Google's own 4-bit exports at the same speed, and 12B at 675 output tokens per second. What doesn't: bf16 above E2B, 31B in any build, and 26B past a 2,176-token context.",
      "url": "https://dev.to/gde/gemma-4-qat-on-one-tpu-v5e-what-runs-and-what-doesnt-2gii",
      "tags": "gemma, googlecloud, machinelearning, llm",
      "reactions": 6,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Gemma 4 at Over 70 Tokens/s on a 2021 Laptop's 4 GB GPU: The Live Demo, Step by Step",
      "description": "The live demo, step by step: Gemma 4 E2B answering at 76 tok/s from a GTX 1650 Ti with 4 GB of memory, and the exact re-pack of Google's QAT weights on Hugging Face that makes it fit, run faster and stay close to bf16.",
      "url": "https://dev.to/gde/gemma-4-at-over-70-tokenss-on-a-2021-laptops-4-gb-gpu-the-live-demo-step-by-step-52hg",
      "tags": "gemma, llamacpp, cuda, huggingface",
      "reactions": 9,
      "comments": 0,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "Gemini 4 Argon\r\n\r\nhttps://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/",
      "description": "...",
      "url": "https://dev.to/ben/gemini-4-argon-5g2l",
      "tags": "ai, gemini, google",
      "reactions": 5,
      "comments": 2,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Gemma 4 on a Tesla T4, Part 3: Int4 Embeddings Serve E2B in 2.86 GiB at 2.30x bf16",
      "description": "Google's QAT Gemma 4 E2B keeps its embedding tables in bf16, and on a Tesla T4 they are most of the model. Packing them to int4 on the grid QAT trained them onto cuts model loading from 6.33 to 2.86 GiB, with every greedy test output token-identical, and raises vLLM's output throughput 11-37% over Google's own W4A16 export.",
      "url": "https://dev.to/gde/gemma-4-on-a-tesla-t4-part-3-int4-embeddings-serve-e2b-in-286-gib-at-230x-bf16-3kch",
      "tags": "gemma, vllm, cuda, machinelearning",
      "reactions": 9,
      "comments": 0,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Views Measure Views",
      "description": "Nine years in, I finally worked out what else to count.  A writer I follow, Sylwia Laskowska,...",
      "url": "https://dev.to/kenwalger/views-measure-views-4co7",
      "tags": "career, writing, devjournal, meta",
      "reactions": 24,
      "comments": 8,
      "reading_time": 12,
      "author": "kenwalger"
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
      "title": "Focus Agent: A Local AI Focus Companion Built for a Friend",
      "description": "Focus Agent: A Local AI Focus Companion Built for a Friend   This is my submission for the...",
      "url": "https://dev.to/legendofrj10/focus-agent-a-local-ai-focus-companion-built-for-a-friend-56mh",
      "tags": "hf26challenge, gemma, linux, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "legendofrj10"
    },
    {
      "title": "What If I'm Not Tired of Coding, Just Tired of Starting?",
      "description": "There is a strange state you can reach as a developer.  You still know how to code.  You still...",
      "url": "https://dev.to/sinarezaei/what-if-im-not-tired-of-coding-just-tired-of-starting-3d27",
      "tags": "discuss, productivity, devlife, programming",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "sinarezaei"
    },
    {
      "title": "Are You Spending More on AI Subscriptions Than on Your Actual Product?",
      "description": "This came up in Chinese indie dev circles recently, and the number stopped me cold: one developer...",
      "url": "https://dev.to/nina_antalpha/are-you-spending-more-on-ai-subscriptions-than-on-your-actual-product-3nfc",
      "tags": "ai, productivity, indiehackers, coding",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "nina_antalpha"
    },
    {
      "title": "Summarize weekly appointment KPIs into a Monday digest: an n8n workflow (JSON included)",
      "description": "I build n8n automations for small salons and clinics. The series so far covered preventing no-shows,...",
      "url": "https://dev.to/vlotstroom/summarize-weekly-appointment-kpis-into-a-monday-digest-an-n8n-workflow-json-included-563f",
      "tags": "n8n, automation, tutorial, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 10,
      "author": "vlotstroom"
    },
    {
      "title": "We built a context system for our coding agents. They ignored it and used grep.",
      "description": "This is the first of a set of write-ups behind my Build Stuff 2026 talk, Control Your Fate at the...",
      "url": "https://dev.to/kentkandiforge/we-built-a-context-system-for-our-coding-agents-they-ignored-it-and-used-grep-58pk",
      "tags": "ai, programming, productivity, agents",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "kentkandiforge"
    },
    {
      "title": "How Much Does It Cost to Build an Online Auction Marketplace in 2026?",
      "description": "Here’s the uncomfortable 2026 reality: the cheapest auction platform may become the most expensive...",
      "url": "https://dev.to/quokkalabs/how-much-does-it-cost-to-build-an-online-auction-marketplace-in-2026-2459",
      "tags": "ai, programming, productivity, webdev",
      "reactions": 5,
      "comments": 0,
      "reading_time": 5,
      "author": "dhruvjoshi9"
    },
    {
      "title": "Why I Built Frontpagee: A Distraction-Free RSS Reader for Curious Minds & Developers",
      "description": "Every morning used to start the exact same way for me:   Open Hacker News Skim 5 engineering...",
      "url": "https://dev.to/ganeshraikwar/why-i-built-frontpagee-a-distraction-free-rss-reader-for-curious-minds-developers-d71",
      "tags": "showdev, webdev, productivity, rss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "ganeshraikwar"
    },
    {
      "title": "How to Vibe Code Your Own Study Time Tracker (Claude Code, Codex, Cursor, Antigravity)",
      "description": "This guide walks you through building one with Claude Code, Codex, Antigravity, or Cursor....",
      "url": "https://dev.to/affan_bajwa/how-to-vibe-code-your-own-study-time-tracker-claude-code-codex-cursor-antigravity-kji",
      "tags": "vibecoding, productivity, webdev, timetracking",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "affan_bajwa"
    },
    {
      "title": "Ship Your Health Like You Ship Code: The 2-Minute Daily Tracker",
      "description": "Ship Your Health Like You Ship Code: The 2-Minute Daily Tracker   You'd never ship a feature...",
      "url": "https://dev.to/nutricounternetcmyk/ship-your-health-like-you-ship-code-the-2-minute-daily-tracker-2l9c",
      "tags": "health, productivity, wellness",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "nutricounternetcmyk"
    },
    {
      "title": "Why Editing Existing PDF Text Is Much Harder Than It Looks",
      "description": "Why Editing Existing PDF Text Is Much Harder Than It Looks   Editing text sounds...",
      "url": "https://dev.to/saffi_ullah_706aebeff15ca/why-editing-existing-pdf-text-is-much-harder-than-it-looks-3568",
      "tags": "python, productivity, pdf, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "saffi_ullah_706aebeff15ca"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

