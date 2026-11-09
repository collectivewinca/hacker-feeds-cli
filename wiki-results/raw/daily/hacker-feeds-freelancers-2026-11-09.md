# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-11-09 06:33:06 UTC

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
      "author": "cloudflare",
      "repo": "security-audit-skill",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/security-audit-skill",
      "desc": "A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4386,
      "added_stars": 10600,
      "builtBy": [
        {
          "username": "literally-dan",
          "href": "https://github.com/literally-dan",
          "avatar": "https://avatars.githubusercontent.com/u/9935415"
        },
        {
          "username": "CooperSheroy",
          "href": "https://github.com/CooperSheroy",
          "avatar": "https://avatars.githubusercontent.com/u/59650384"
        },
        {
          "username": "kennysarnoski-jarvis",
          "href": "https://github.com/kennysarnoski-jarvis",
          "avatar": "https://avatars.githubusercontent.com/u/228360615"
        }
      ]
    },
    {
      "author": "affaan-m",
      "repo": "ECC",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/ECC",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 44284,
      "added_stars": 5337,
      "builtBy": [
        {
          "username": "affaan-m",
          "href": "https://github.com/affaan-m",
          "avatar": "https://avatars.githubusercontent.com/u/124439313"
        },
        {
          "username": "haelyra",
          "href": "https://github.com/haelyra",
          "avatar": "https://avatars.githubusercontent.com/u/49814733"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "montjeffrey",
          "href": "https://github.com/montjeffrey",
          "avatar": "https://avatars.githubusercontent.com/u/24193489"
        }
      ]
    },
    {
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5319,
      "added_stars": 312,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
        }
      ]
    },
    {
      "author": "Orkas-AI",
      "repo": "Orkas",
      "avatar": "https://github.com/Orkas-AI.png",
      "repo_link": "https://github.com/Orkas-AI/Orkas",
      "desc": "Orkas is an open-source (MIT), local-first AI team for your desktop: a Commander turns your goal into to-dos and coordinates 16 built-in specialist agents plus Claude Code, Codex, OpenCode, OpenClaw and Hermes, with projects, scheduled automations and connectors. Free app for macOS & Windows; built-in models or your own keys.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 528,
      "added_stars": 2074,
      "builtBy": [
        {
          "username": "vaintwyt",
          "href": "https://github.com/vaintwyt",
          "avatar": "https://avatars.githubusercontent.com/u/3339127"
        },
        {
          "username": "Orkas-AI",
          "href": "https://github.com/Orkas-AI",
          "avatar": "https://avatars.githubusercontent.com/u/217779447"
        },
        {
          "username": "BlueSkyID666",
          "href": "https://github.com/BlueSkyID666",
          "avatar": "https://avatars.githubusercontent.com/u/280636370"
        },
        {
          "username": "CloudTianTian",
          "href": "https://github.com/CloudTianTian",
          "avatar": "https://avatars.githubusercontent.com/u/280628112"
        },
        {
          "username": "VarIntCheck",
          "href": "https://github.com/VarIntCheck",
          "avatar": "https://avatars.githubusercontent.com/u/4956912"
        }
      ]
    },
    {
      "author": "techjarves",
      "repo": "Portable-Local-Studio",
      "avatar": "https://github.com/techjarves.png",
      "repo_link": "https://github.com/techjarves/Portable-Local-Studio",
      "desc": "Portable local AI studio for Windows, Linux, and macOS. Zero-setup GUI for Image Generation, GGUF LLMs, Text to Speech & Speech to Text",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 481,
      "added_stars": 278,
      "builtBy": [
        {
          "username": "techjarves",
          "href": "https://github.com/techjarves",
          "avatar": "https://avatars.githubusercontent.com/u/54399984"
        },
        {
          "username": "howwonder",
          "href": "https://github.com/howwonder",
          "avatar": "https://avatars.githubusercontent.com/u/170706239"
        },
        {
          "username": "orailnoor",
          "href": "https://github.com/orailnoor",
          "avatar": "https://avatars.githubusercontent.com/u/34442749"
        },
        {
          "username": "idealistichacker",
          "href": "https://github.com/idealistichacker",
          "avatar": "https://avatars.githubusercontent.com/u/169532740"
        }
      ]
    },
    {
      "author": "DeanChensj",
      "repo": "jiangshan-map",
      "avatar": "https://github.com/DeanChensj.png",
      "repo_link": "https://github.com/DeanChensj/jiangshan-map",
      "desc": "江山时序 · 中国历史交互地图时间轴 (403 BCE – Present) | Interactive Historical Atlas of China across 18 dynasties, 164 territory snapshots, ancient-to-modern place genealogy & classical poetry routes",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 557,
      "added_stars": 2135,
      "builtBy": [
        {
          "username": "DeanChensj",
          "href": "https://github.com/DeanChensj",
          "avatar": "https://avatars.githubusercontent.com/u/9414763"
        },
        {
          "username": "xcv58",
          "href": "https://github.com/xcv58",
          "avatar": "https://avatars.githubusercontent.com/u/503123"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "feiandxs",
          "href": "https://github.com/feiandxs",
          "avatar": "https://avatars.githubusercontent.com/u/183929"
        },
        {
          "username": "frankslin",
          "href": "https://github.com/frankslin",
          "avatar": "https://avatars.githubusercontent.com/u/748873"
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
      "forks": 8663,
      "added_stars": 1446,
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
          "username": "aaronbeashel",
          "href": "https://github.com/aaronbeashel",
          "avatar": "https://avatars.githubusercontent.com/u/93219218"
        },
        {
          "username": "FekyBaz",
          "href": "https://github.com/FekyBaz",
          "avatar": "https://avatars.githubusercontent.com/u/97516177"
        }
      ]
    },
    {
      "author": "Leaflet",
      "repo": "Leaflet",
      "avatar": "https://github.com/Leaflet.png",
      "repo_link": "https://github.com/Leaflet/Leaflet",
      "desc": "🍃 number one JavaScript library for interactive maps 🇺🇦",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6215,
      "added_stars": 93,
      "builtBy": [
        {
          "username": "mourner",
          "href": "https://github.com/mourner",
          "avatar": "https://avatars.githubusercontent.com/u/25395"
        },
        {
          "username": "IvanSanchez",
          "href": "https://github.com/IvanSanchez",
          "avatar": "https://avatars.githubusercontent.com/u/1125786"
        },
        {
          "username": "danzel",
          "href": "https://github.com/danzel",
          "avatar": "https://avatars.githubusercontent.com/u/393086"
        },
        {
          "username": "yohanboniface",
          "href": "https://github.com/yohanboniface",
          "avatar": "https://avatars.githubusercontent.com/u/146023"
        }
      ]
    },
    {
      "author": "ConardLi",
      "repo": "garden-skills",
      "avatar": "https://github.com/ConardLi.png",
      "repo_link": "https://github.com/ConardLi/garden-skills",
      "desc": "ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1706,
      "added_stars": 1251,
      "builtBy": [
        {
          "username": "ConardLi",
          "href": "https://github.com/ConardLi",
          "avatar": "https://avatars.githubusercontent.com/u/30708545"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "eltociear",
          "href": "https://github.com/eltociear",
          "avatar": "https://avatars.githubusercontent.com/u/22633385"
        }
      ]
    },
    {
      "author": "ericrisco",
      "repo": "rsc-harness",
      "avatar": "https://github.com/ericrisco.png",
      "repo_link": "https://github.com/ericrisco/rsc-harness",
      "desc": "Your agent invents things because it has no memory, and can't touch your database because it has no arms. rsc is the meta-harness that gives it both, plus the trade to know the job and the reflexes to not break your repo. For Claude Code, Codex and 15 more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 77,
      "added_stars": 138,
      "builtBy": [
        {
          "username": "ericrisco",
          "href": "https://github.com/ericrisco",
          "avatar": "https://avatars.githubusercontent.com/u/20164590"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "carloszrcom",
          "href": "https://github.com/carloszrcom",
          "avatar": "https://avatars.githubusercontent.com/u/38780879"
        },
        {
          "username": "damiangilgonzalez1995",
          "href": "https://github.com/damiangilgonzalez1995",
          "avatar": "https://avatars.githubusercontent.com/u/92522021"
        },
        {
          "username": "Swpn0neel",
          "href": "https://github.com/Swpn0neel",
          "avatar": "https://avatars.githubusercontent.com/u/121167506"
        }
      ]
    },
    {
      "author": "open-gsd",
      "repo": "gsd-core",
      "avatar": "https://github.com/open-gsd.png",
      "repo_link": "https://github.com/open-gsd/gsd-core",
      "desc": "Git. Ship. Done - Core",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 816,
      "added_stars": 246,
      "builtBy": [
        {
          "username": "trek-e",
          "href": "https://github.com/trek-e",
          "avatar": "https://avatars.githubusercontent.com/u/4738965"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "glittercowboy",
          "href": "https://github.com/glittercowboy",
          "avatar": "https://avatars.githubusercontent.com/u/186001655"
        },
        {
          "username": "davesienkowski",
          "href": "https://github.com/davesienkowski",
          "avatar": "https://avatars.githubusercontent.com/u/3037759"
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
      "by": "zdw",
      "descendants": 81,
      "id": 50420035,
      "kids": [
        50420749,
        50421844,
        50421076,
        50421255,
        50421114,
        50421498,
        50421146,
        50420639,
        50421085,
        50420896,
        50421296,
        50421051,
        50421171,
        50421071,
        50421170,
        50421705,
        50421597,
        50421774,
        50421137,
        50421725,
        50421293,
        50420935,
        50420826,
        50421710,
        50421792,
        50421534,
        50421011,
        50420881,
        50421113,
        50420716,
        50421109,
        50421678,
        50421074,
        50420824,
        50420626,
        50421708,
        50420682,
        50421406,
        50421403,
        50421169,
        50420906,
        50421055,
        50420660
      ],
      "score": 269,
      "time": 1794189501,
      "title": "RIP, Harvest",
      "type": "story",
      "url": "https://aphyr.com/posts/427-rip-harvest"
    },
    {
      "by": "GloVin",
      "descendants": 22,
      "id": 50421426,
      "kids": [
        50421843,
        50421807,
        50421719,
        50421584,
        50421699,
        50421825,
        50421817,
        50421812,
        50421768,
        50421758,
        50421711,
        50421797,
        50421752
      ],
      "score": 24,
      "time": 1794202211,
      "title": "Apple capped engineers at a $200 daily AI budget",
      "type": "story",
      "url": "https://www.stork.ai/newsletter/2026-11-08-apple-capped-engineers-at-a-200-daily-ai-budget#story-1"
    },
    {
      "by": "dcoulmbe",
      "descendants": 96,
      "id": 50418176,
      "kids": [
        50420786,
        50419327,
        50421591,
        50420287,
        50419015,
        50419890,
        50420707,
        50419793,
        50418852,
        50419162,
        50420625,
        50420440,
        50420402,
        50419244,
        50420224,
        50419134,
        50419450,
        50420539,
        50420386,
        50418793,
        50420882,
        50419669,
        50419379,
        50419203,
        50419137,
        50419962,
        50420220,
        50420210,
        50420227,
        50419733,
        50419178
      ],
      "score": 366,
      "time": 1794177335,
      "title": "KetchUp – Open-source SketchUp alternative built with Rust and WebGPU",
      "type": "story",
      "url": "https://ketchup3d.github.io/app/"
    },
    {
      "by": "infosecau",
      "descendants": 73,
      "id": 50419215,
      "kids": [
        50420232,
        50421154,
        50420229,
        50420703,
        50420670,
        50419452,
        50420769,
        50419995,
        50420404,
        50419520,
        50420482,
        50420768,
        50421532,
        50420293,
        50419536,
        50419537,
        50420150,
        50421726
      ],
      "score": 210,
      "time": 1794183050,
      "title": "Unlocking any car from X brand in most of the world",
      "type": "story",
      "url": "https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/"
    },
    {
      "by": "ByteAtATime",
      "descendants": 24,
      "id": 50420857,
      "kids": [
        50421750,
        50421514,
        50421798,
        50421081,
        50421557,
        50421203,
        50421232,
        50421234,
        50421646,
        50421556
      ],
      "score": 60,
      "time": 1794196270,
      "title": "A Critique of GPUI",
      "type": "story",
      "url": "https://blog.zortax.de/posts/a-critique-of-gpui"
    },
    {
      "by": "nmstoker",
      "descendants": 23,
      "id": 50418182,
      "kids": [
        50419377,
        50418741,
        50418805,
        50418205,
        50419835,
        50419192,
        50419373,
        50418614,
        50419955,
        50420695,
        50420777,
        50420853,
        50418661,
        50420240,
        50420237
      ],
      "score": 166,
      "time": 1794177363,
      "title": "Chimera Vocal Synth",
      "type": "story",
      "url": "https://chimera-vocal-synth.vercel.app/"
    },
    {
      "by": "smusamashah",
      "descendants": 60,
      "id": 50368481,
      "kids": [
        50417709,
        50417110,
        50420990,
        50417671,
        50419369,
        50418121,
        50417473,
        50416849,
        50420904,
        50417266,
        50417884,
        50419810,
        50421356,
        50417644,
        50419284,
        50417369,
        50417143,
        50416646,
        50416350,
        50416809,
        50418188,
        50417921,
        50417877
      ],
      "score": 459,
      "time": 1793811907,
      "title": "Declarative Dragging",
      "type": "story",
      "url": "https://declarative-dragging.github.io/"
    },
    {
      "by": "matteoraso",
      "descendants": 207,
      "id": 50418975,
      "kids": [
        50420130,
        50420380,
        50420223,
        50421659,
        50421475,
        50419985,
        50420325,
        50421413,
        50421696,
        50420206,
        50421202,
        50419929,
        50421330,
        50421245,
        50421487,
        50421366,
        50420965,
        50420604,
        50420052,
        50420351,
        50420352,
        50420358,
        50421857,
        50420112,
        50421609,
        50421412,
        50421567,
        50420164,
        50421294,
        50420261,
        50420209,
        50420751,
        50421053,
        50420033,
        50420415,
        50421242,
        50420262,
        50420728,
        50421159,
        50421004,
        50420086,
        50420558,
        50421473,
        50420344
      ],
      "score": 150,
      "time": 1794181476,
      "title": "I'm not convinced the AI bubble exists",
      "type": "story",
      "url": "https://matteoraso.github.io/im-not-convinced-the-ai-bubble-exists.html#im-not-convinced-the-ai-bubble-exists"
    },
    {
      "by": "indigodaddy",
      "descendants": 77,
      "id": 50416053,
      "kids": [
        50421794,
        50417012,
        50416712,
        50418871,
        50416714,
        50416507,
        50416769,
        50417396,
        50419383,
        50417679,
        50417299,
        50417810,
        50418737,
        50416815,
        50419102,
        50416707,
        50418021,
        50416904,
        50416798,
        50421177,
        50417122,
        50416604,
        50418014,
        50416879,
        50420448,
        50416628,
        50416505,
        50418539,
        50417515,
        50418299,
        50417958,
        50417357,
        50417316
      ],
      "score": 244,
      "time": 1794164931,
      "title": "Dux: Free, open-source Wayland desktop shell with file manager and theming",
      "type": "story",
      "url": "https://duxlabs.dev/"
    },
    {
      "by": "david927",
      "descendants": 629,
      "id": 50417407,
      "kids": [
        50421853,
        50418273,
        50421762,
        50421806,
        50418058,
        50421785,
        50419208,
        50421800,
        50421786,
        50421714,
        50418955,
        50418936,
        50421566,
        50421618,
        50421621,
        50420484,
        50421694,
        50418225,
        50418055,
        50421607,
        50421680,
        50418230,
        50421602,
        50421383,
        50420552,
        50418925,
        50421358,
        50421513,
        50420179,
        50419720,
        50420612,
        50420222,
        50421554,
        50417795,
        50418570,
        50421337,
        50421364,
        50389922,
        50421793,
        50391077,
        50420929,
        50420213,
        50421674,
        50390534,
        50392205,
        50389705,
        50421200,
        50421309,
        50421511,
        50421144,
        50419911,
        50420491,
        50421477,
        50418592,
        50420460,
        50417938,
        50420214,
        50419273,
        50420373,
        50419728,
        50419315,
        50420718,
        50421398,
        50421491,
        50420974,
        50419021,
        50419530,
        50390265,
        50420781,
        50421220,
        50421001,
        50421219,
        50420691,
        50420841,
        50420772,
        50420528,
        50418801,
        50333747,
        50418525,
        50420913,
        50418377,
        50418886,
        50332938,
        50420299,
        50420875,
        50391148,
        50332029,
        50418981,
        50418971,
        50419595,
        50421050,
        50420202,
        50329769,
        50420956,
        50390297,
        50419925,
        50421037,
        50420618,
        50421496,
        50421019,
        50420816,
        50418914,
        50418276,
        50418929,
        50420060,
        50420306,
        50418491,
        50420897,
        50420688,
        50420876,
        50417862,
        50420643,
        50420290,
        50419363,
        50421183,
        50420472,
        50418085,
        50420602,
        50420331,
        50418315,
        50419699,
        50420615,
        50419815,
        50420839,
        50420669,
        50419490,
        50337193,
        50420968,
        50418144,
        50419474,
        50419899,
        50418524,
        50420064,
        50420184,
        50420124,
        50418514,
        50418068,
        50419449,
        50419041,
        50418456,
        50418959,
        50418465,
        50418301,
        50420828,
        50419704,
        50333797,
        50417917,
        50392170,
        50420067,
        50420021,
        50417905,
        50419065,
        50418095,
        50418368,
        50420294,
        50420312,
        50328364,
        50420807,
        50419617,
        50419613,
        50419656,
        50419762,
        50419477,
        50418916,
        50418311,
        50420301,
        50402587,
        50420509,
        50420996,
        50333492,
        50418765,
        50419211,
        50420888,
        50420034,
        50336869,
        50417899,
        50391569,
        50418197,
        50420036,
        50417915,
        50420334,
        50419247,
        50418247,
        50418478,
        50420109,
        50418217,
        50418059,
        50419386,
        50418252,
        50389775,
        50420512,
        50419193,
        50330163,
        50419691,
        50419364,
        50418322,
        50418066,
        50419245,
        50419931,
        50418119,
        50419535,
        50419106,
        50418577,
        50420938,
        50333273,
        50419838,
        50418540,
        50418109,
        50419638,
        50420084,
        50420607,
        50419567,
        50393956,
        50417895,
        50417530,
        50420361,
        50418763,
        50328605,
        50419842,
        50344488,
        50328458,
        50419409,
        50418942,
        50417943,
        50419098,
        50418468,
        50421240,
        50420065,
        50335476,
        50419473,
        50419570,
        50419633,
        50348920,
        50419355,
        50390324,
        50419346,
        50420354,
        50418634,
        50330035,
        50420465,
        50418364,
        50418022,
        50418008,
        50418081,
        50391051,
        50417995,
        50419404,
        50418884,
        50419049,
        50418385,
        50418237,
        50417948,
        50418175,
        50418326,
        50419809,
        50345100,
        50418189,
        50418810,
        50420634,
        50418250,
        50420349,
        50389863,
        50353674,
        50417919,
        50417869,
        50418436,
        50419907,
        50419297,
        50419868,
        50419625,
        50420335,
        50417834,
        50390420,
        50419865,
        50418481,
        50419804,
        50417830,
        50418272,
        50419724,
        50418887,
        50418433,
        50420008,
        50418566,
        50418031,
        50420128,
        50417954,
        50328703,
        50417941,
        50418407,
        50420186,
        50419312,
        50394748,
        50330022,
        50421271,
        50328645,
        50419004,
        50418362,
        50419057,
        50417734,
        50418280,
        50417705,
        50420508,
        50329069,
        50418389,
        50390524,
        50418341,
        50418880,
        50417984,
        50392027,
        50389578,
        50419562,
        50418757,
        50329798,
        50354505,
        50329920,
        50417953,
        50390773,
        50419157,
        50418775,
        50419238,
        50418653,
        50391640,
        50389844,
        50389854,
        50419039,
        50330263,
        50341186,
        50353982,
        50419269,
        50418269,
        50418143,
        50417897,
        50417865,
        50419090,
        50418411,
        50392208,
        50420042,
        50418219,
        50418392,
        50417855,
        50419391,
        50336437,
        50419166,
        50420183,
        50420397,
        50418018,
        50419587,
        50419305,
        50330659,
        50328491,
        50418115,
        50417923,
        50419265,
        50418304,
        50419087,
        50419195,
        50418773,
        50420413,
        50417993,
        50419078,
        50418390,
        50418736,
        50418331,
        50418660,
        50418122,
        50329832,
        50418492,
        50391551,
        50390608,
        50418000,
        50418431,
        50418342,
        50419236,
        50418044,
        50419748,
        50417831,
        50330007,
        50420137,
        50419713,
        50390934,
        50419580,
        50390562,
        50328686,
        50418876,
        50390573,
        50419866,
        50418719,
        50418406,
        50329548,
        50419671,
        50329994,
        50387435,
        50341762,
        50419064,
        50418401,
        50350801,
        50418420,
        50344226,
        50329304,
        50418353,
        50418336,
        50418117,
        50421088,
        50418160,
        50329585,
        50329383,
        50418589,
        50418778,
        50418157,
        50329876,
        50391397,
        50391291,
        50418395,
        50418840,
        50350610,
        50332762,
        50419250,
        50396024,
        50418198,
        50330052,
        50328513,
        50418286,
        50419066,
        50418439,
        50418098,
        50419224,
        50417697,
        50329045,
        50418275,
        50420994,
        50391837,
        50419614,
        50419734,
        50418231,
        50341961,
        50390231,
        50328982,
        50418292,
        50417813,
        50419052,
        50329823,
        50420681,
        50420856,
        50420586,
        50420584,
        50418759,
        50420367,
        50328945,
        50389812,
        50418167,
        50417932,
        50419859,
        50419828,
        50419773,
        50419772,
        50342317,
        50418895,
        50418556,
        50390436,
        50418139,
        50417936,
        50417431,
        50390914,
        50419590,
        50419663,
        50329787,
        50391961,
        50417509,
        50417739,
        50421803,
        50421626,
        50421432,
        50421323,
        50420942,
        50420332,
        50420591,
        50421310,
        50420542,
        50420784,
        50420133,
        50420348,
        50420446,
        50421039,
        50419149,
        50419892,
        50419610,
        50420527,
        50420278,
        50420439,
        50421284,
        50420355,
        50419893,
        50419933,
        50328430,
        50419692,
        50418185,
        50418107,
        50417484,
        50419833,
        50419848,
        50400293,
        50417759,
        50419471,
        50331526,
        50360853,
        50419496,
        50419650,
        50417848,
        50329898,
        50418344,
        50420004,
        50418169,
        50418997,
        50393626,
        50418261,
        50343031,
        50417982,
        50400898,
        50329270,
        50420260,
        50419794,
        50419806,
        50417837,
        50418161,
        50418298,
        50389272,
        50418475,
        50418026,
        50418255,
        50419240,
        50417785
      ],
      "score": 187,
      "text": "What are you working on? What have you been curious about lately?",
      "time": 1794172820,
      "title": "Ask HN: What are you working on? (November 2026)",
      "type": "story"
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
      "title": "systemd loves Rust",
      "url": "https://amutable.com/blog/systemd-loves-rust",
      "score": 37,
      "comments": 19,
      "tags": [
        "rust",
        "systemd"
      ],
      "id": "62loik"
    },
    {
      "title": "A bit about email",
      "url": "https://maurycyz.com/misc/email/",
      "score": 42,
      "comments": 7,
      "tags": [
        "email"
      ],
      "id": "jnz4v5"
    },
    {
      "title": "Unattended reboots with encrypted disks",
      "url": "https://jmmv.dev/2026/11/zkeys-intro.html",
      "score": 10,
      "comments": 10,
      "tags": [
        "freebsd",
        "security"
      ],
      "id": "urg4yu"
    },
    {
      "title": "Herb Sutter: When a language’s creator and its owners strongly disagree: C++26 post-DIS, historical experience, and paths forward",
      "url": "https://isocpp.org/files/papers/P4454R0.pdf",
      "score": 17,
      "comments": 5,
      "tags": [
        "c++",
        "pdf"
      ],
      "id": "vlagyq"
    },
    {
      "title": "What can I realistically do with local AI on a Mac mini M5 Pro (48GB)?",
      "url": "",
      "score": 16,
      "comments": 6,
      "tags": [
        "ai",
        "ask",
        "mac"
      ],
      "id": "umsitb"
    },
    {
      "title": "Virtualized Redox: from Virtio-FS to Cloud Hypervisor, and beyond",
      "url": "https://www.redox-os.org/news/virtualized-redox/",
      "score": 12,
      "comments": 0,
      "tags": [
        "osdev"
      ],
      "id": "zozcwa"
    },
    {
      "title": "Sem86: a full-system x86 emulator without hardcoded semantics",
      "url": "https://liblisa.nl/sem86/",
      "score": 5,
      "comments": 1,
      "tags": [
        "virtualization"
      ],
      "id": "a7byol"
    },
    {
      "title": "unlocking any car from X brand in most of the world",
      "url": "https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/",
      "score": 4,
      "comments": 0,
      "tags": [
        "reversing",
        "security"
      ],
      "id": "kbrpx3"
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
      "forks": 11704,
      "added_stars": 50169,
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
          "username": "velixio",
          "href": "https://github.com/velixio",
          "avatar": "https://avatars.githubusercontent.com/u/270455167"
        },
        {
          "username": "kevin9327",
          "href": "https://github.com/kevin9327",
          "avatar": "https://avatars.githubusercontent.com/u/5299031"
        },
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        }
      ]
    },
    {
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6974,
      "added_stars": 16065,
      "builtBy": [
        {
          "username": "pancacake",
          "href": "https://github.com/pancacake",
          "avatar": "https://avatars.githubusercontent.com/u/150592536"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Pinkllow",
          "href": "https://github.com/Pinkllow",
          "avatar": "https://avatars.githubusercontent.com/u/272976591"
        },
        {
          "username": "evan188199-tech",
          "href": "https://github.com/evan188199-tech",
          "avatar": "https://avatars.githubusercontent.com/u/238371241"
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
      "forks": 4851,
      "added_stars": 9152,
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
          "username": "mhegazy",
          "href": "https://github.com/mhegazy",
          "avatar": "https://avatars.githubusercontent.com/u/8000722"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 3900,
      "added_stars": 7947,
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
      "author": "AgriciDaniel",
      "repo": "claude-seo",
      "avatar": "https://github.com/AgriciDaniel.png",
      "repo_link": "https://github.com/AgriciDaniel/claude-seo",
      "desc": "Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3569,
      "added_stars": 9004,
      "builtBy": [
        {
          "username": "AgriciDaniel",
          "href": "https://github.com/AgriciDaniel",
          "avatar": "https://avatars.githubusercontent.com/u/223140489"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Nordalux",
          "href": "https://github.com/Nordalux",
          "avatar": "https://avatars.githubusercontent.com/u/129338099"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
        }
      ]
    },
    {
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3421,
      "added_stars": 5133,
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
          "username": "zouyonghe",
          "href": "https://github.com/zouyonghe",
          "avatar": "https://avatars.githubusercontent.com/u/62183434"
        },
        {
          "username": "anka-afk",
          "href": "https://github.com/anka-afk",
          "avatar": "https://avatars.githubusercontent.com/u/110004162"
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
      "forks": 5267,
      "added_stars": 6942,
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
      "author": "earthtojake",
      "repo": "text-to-cad",
      "avatar": "https://github.com/earthtojake.png",
      "repo_link": "https://github.com/earthtojake/text-to-cad",
      "desc": "Design physical products with AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2463,
      "added_stars": 7543,
      "builtBy": [
        {
          "username": "earthtojake",
          "href": "https://github.com/earthtojake",
          "avatar": "https://avatars.githubusercontent.com/u/10742417"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "warun7",
          "href": "https://github.com/warun7",
          "avatar": "https://avatars.githubusercontent.com/u/143688508"
        }
      ]
    },
    {
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ The BEST Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10456,
      "added_stars": 13826,
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
          "username": "SulimanAbdulrazzaq",
          "href": "https://github.com/SulimanAbdulrazzaq",
          "avatar": "https://avatars.githubusercontent.com/u/144490671"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
        }
      ]
    },
    {
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use Claude Code, Codex, Antigravity, VSCode, Pi, and OpenCode (and 6 other harnesses) for free (1.3B+ free tokens) from your terminal, app, IDE, or phone, and now from the browser with native browser sessions (multi-harness + multi-model) like OpenClaw (voice supported + ToS friendly)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10484,
      "added_stars": 10957,
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
          "username": "Tanishq-1",
          "href": "https://github.com/Tanishq-1",
          "avatar": "https://avatars.githubusercontent.com/u/49880456"
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
      "forks": 2181,
      "added_stars": 5295,
      "builtBy": [
        {
          "username": "yashrajp22",
          "href": "https://github.com/yashrajp22",
          "avatar": "https://avatars.githubusercontent.com/u/282666402"
        },
        {
          "username": "rng1995",
          "href": "https://github.com/rng1995",
          "avatar": "https://avatars.githubusercontent.com/u/32655573"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "keshprad",
          "href": "https://github.com/keshprad",
          "avatar": "https://avatars.githubusercontent.com/u/32313895"
        }
      ]
    },
    {
      "author": "wshobson",
      "repo": "agents",
      "avatar": "https://github.com/wshobson.png",
      "repo_link": "https://github.com/wshobson/agents",
      "desc": "Plugins, agents, skills, and commands for Claude Code, Codex CLI, Cursor, OpenCode, Antigravity CLI, GitHub Copilot, and Pi, written once in Markdown and adapted to each tool by generators with validation and evals.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4474,
      "added_stars": 2146,
      "builtBy": [
        {
          "username": "wshobson",
          "href": "https://github.com/wshobson",
          "avatar": "https://avatars.githubusercontent.com/u/553618"
        },
        {
          "username": "web-flow",
          "href": "https://github.com/web-flow",
          "avatar": "https://avatars.githubusercontent.com/u/19864447"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jau123",
          "href": "https://github.com/jau123",
          "avatar": "https://avatars.githubusercontent.com/u/130447398"
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
      "forks": 3067,
      "added_stars": 3522,
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
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "fastapi",
      "repo": "fastapi",
      "avatar": "https://github.com/fastapi.png",
      "repo_link": "https://github.com/fastapi/fastapi",
      "desc": "FastAPI framework, high performance, easy to learn, fast to code, ready for production",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10208,
      "added_stars": 2611,
      "builtBy": [
        {
          "username": "tiangolo",
          "href": "https://github.com/tiangolo",
          "avatar": "https://avatars.githubusercontent.com/u/1326112"
        },
        {
          "username": "YuriiMotov",
          "href": "https://github.com/YuriiMotov",
          "avatar": "https://avatars.githubusercontent.com/u/109919500"
        }
      ]
    },
    {
      "author": "pandas-dev",
      "repo": "pandas",
      "avatar": "https://github.com/pandas-dev.png",
      "repo_link": "https://github.com/pandas-dev/pandas",
      "desc": "Flexible and powerful data analysis / manipulation library for Python, providing labeled data structures similar to R data.frame objects, statistical functions, and much more",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 20732,
      "added_stars": 1107,
      "builtBy": [
        {
          "username": "jbrockmendel",
          "href": "https://github.com/jbrockmendel",
          "avatar": "https://avatars.githubusercontent.com/u/8078968"
        },
        {
          "username": "jreback",
          "href": "https://github.com/jreback",
          "avatar": "https://avatars.githubusercontent.com/u/953992"
        },
        {
          "username": "wesm",
          "href": "https://github.com/wesm",
          "avatar": "https://avatars.githubusercontent.com/u/329591"
        },
        {
          "username": "mroeschke",
          "href": "https://github.com/mroeschke",
          "avatar": "https://avatars.githubusercontent.com/u/10647082"
        },
        {
          "username": "jorisvandenbossche",
          "href": "https://github.com/jorisvandenbossche",
          "avatar": "https://avatars.githubusercontent.com/u/1020496"
        }
      ]
    },
    {
      "author": "Comfy-Org",
      "repo": "ComfyUI",
      "avatar": "https://github.com/Comfy-Org.png",
      "repo_link": "https://github.com/Comfy-Org/ComfyUI",
      "desc": "The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local inference engine in the world.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 17368,
      "added_stars": 9843,
      "builtBy": [
        {
          "username": "comfyanonymous",
          "href": "https://github.com/comfyanonymous",
          "avatar": "https://avatars.githubusercontent.com/u/121283862"
        },
        {
          "username": "bigcat88",
          "href": "https://github.com/bigcat88",
          "avatar": "https://avatars.githubusercontent.com/u/13381981"
        },
        {
          "username": "pythongosssss",
          "href": "https://github.com/pythongosssss",
          "avatar": "https://avatars.githubusercontent.com/u/125205205"
        },
        {
          "username": "comfyui-wiki",
          "href": "https://github.com/comfyui-wiki",
          "avatar": "https://avatars.githubusercontent.com/u/192523189"
        },
        {
          "username": "rattus128",
          "href": "https://github.com/rattus128",
          "avatar": "https://avatars.githubusercontent.com/u/46076784"
        }
      ]
    },
    {
      "author": "The-PR-Agent",
      "repo": "pr-agent",
      "avatar": "https://github.com/The-PR-Agent.png",
      "repo_link": "https://github.com/The-PR-Agent/pr-agent",
      "desc": "🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2154,
      "added_stars": 2327,
      "builtBy": [
        {
          "username": "mrT23",
          "href": "https://github.com/mrT23",
          "avatar": "https://avatars.githubusercontent.com/u/21198860"
        },
        {
          "username": "okotek",
          "href": "https://github.com/okotek",
          "avatar": "https://avatars.githubusercontent.com/u/4869233"
        },
        {
          "username": "PeterDaveHello",
          "href": "https://github.com/PeterDaveHello",
          "avatar": "https://avatars.githubusercontent.com/u/3691490"
        },
        {
          "username": "IsmaelMartinez",
          "href": "https://github.com/IsmaelMartinez",
          "avatar": "https://avatars.githubusercontent.com/u/430992"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "skills",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/skills",
      "desc": "Public repository for Agent Skills",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 22374,
      "added_stars": 9990,
      "builtBy": [
        {
          "username": "rlancemartin",
          "href": "https://github.com/rlancemartin",
          "avatar": "https://avatars.githubusercontent.com/u/122662504"
        },
        {
          "username": "klazuka",
          "href": "https://github.com/klazuka",
          "avatar": "https://avatars.githubusercontent.com/u/84525"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cj-ant",
          "href": "https://github.com/cj-ant",
          "avatar": "https://avatars.githubusercontent.com/u/286490957"
        },
        {
          "username": "ericharmeling",
          "href": "https://github.com/ericharmeling",
          "avatar": "https://avatars.githubusercontent.com/u/27286675"
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
      "forks": 5719,
      "added_stars": 5167,
      "builtBy": [
        {
          "username": "luongnv89",
          "href": "https://github.com/luongnv89",
          "avatar": "https://avatars.githubusercontent.com/u/3288457"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "edocltd",
          "href": "https://github.com/edocltd",
          "avatar": "https://avatars.githubusercontent.com/u/258913972"
        },
        {
          "username": "toanalien",
          "href": "https://github.com/toanalien",
          "avatar": "https://avatars.githubusercontent.com/u/5405744"
        },
        {
          "username": "lzw-git-all",
          "href": "https://github.com/lzw-git-all",
          "avatar": "https://avatars.githubusercontent.com/u/271938013"
        }
      ]
    },
    {
      "author": "elayadesign",
      "repo": "ai-design-skills",
      "avatar": "https://github.com/elayadesign.png",
      "repo_link": "https://github.com/elayadesign/ai-design-skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1137,
      "added_stars": 12699,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "elayadesign",
          "href": "https://github.com/elayadesign",
          "avatar": "https://avatars.githubusercontent.com/u/218383883"
        },
        {
          "username": "kachar",
          "href": "https://github.com/kachar",
          "avatar": "https://avatars.githubusercontent.com/u/893608"
        },
        {
          "username": "devluiscavalcante",
          "href": "https://github.com/devluiscavalcante",
          "avatar": "https://avatars.githubusercontent.com/u/113953786"
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
      "author": "morluto",
      "repo": "rea",
      "avatar": "https://github.com/morluto.png",
      "repo_link": "https://github.com/morluto/rea",
      "desc": "Reverse engineer anything with agents, from app behavior down to native binaries.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 109768,
      "added_stars": 425123,
      "builtBy": [
        {
          "username": "morluto",
          "href": "https://github.com/morluto",
          "avatar": "https://avatars.githubusercontent.com/u/76467478"
        },
        {
          "username": "kaoru0822-kitauji",
          "href": "https://github.com/kaoru0822-kitauji",
          "avatar": "https://avatars.githubusercontent.com/u/208281322"
        },
        {
          "username": "N0zoM1z0",
          "href": "https://github.com/N0zoM1z0",
          "avatar": "https://avatars.githubusercontent.com/u/161784452"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "gensokyo-dev",
          "href": "https://github.com/gensokyo-dev",
          "avatar": "https://avatars.githubusercontent.com/u/342580529"
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
      "forks": 7495,
      "added_stars": 22360,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jrusso1020",
          "href": "https://github.com/jrusso1020",
          "avatar": "https://avatars.githubusercontent.com/u/7664106"
        },
        {
          "username": "ukimsanov",
          "href": "https://github.com/ukimsanov",
          "avatar": "https://avatars.githubusercontent.com/u/165517112"
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
      "forks": 10067,
      "added_stars": 25840,
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
          "username": "maria-rcks",
          "href": "https://github.com/maria-rcks",
          "avatar": "https://avatars.githubusercontent.com/u/254055478"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
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
      "forks": 9994,
      "added_stars": 17296,
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
      "forks": 6821,
      "added_stars": 17520,
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
      "author": "Vincentwei1021",
      "repo": "video-shotcraft",
      "avatar": "https://github.com/Vincentwei1021.png",
      "repo_link": "https://github.com/Vincentwei1021/video-shotcraft",
      "desc": "AI video skill for Claude Code & Codex — cinematic, editable product promos with Remotion: 124 shot recipe cards, 150 motion previews, beat sync, sound design, Motion Workbench & JianYing (CapCut CN) export.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1700,
      "added_stars": 7146,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Vincentwei1021",
          "href": "https://github.com/Vincentwei1021",
          "avatar": "https://avatars.githubusercontent.com/u/18239147"
        },
        {
          "username": "skyzhao1223",
          "href": "https://github.com/skyzhao1223",
          "avatar": "https://avatars.githubusercontent.com/u/15373810"
        },
        {
          "username": "sarff0",
          "href": "https://github.com/sarff0",
          "avatar": "https://avatars.githubusercontent.com/u/255364023"
        },
        {
          "username": "xiaolai",
          "href": "https://github.com/xiaolai",
          "avatar": "https://avatars.githubusercontent.com/u/152970"
        }
      ]
    },
    {
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5961,
      "added_stars": 9422,
      "builtBy": [
        {
          "username": "JonnyBurger",
          "href": "https://github.com/JonnyBurger",
          "avatar": "https://avatars.githubusercontent.com/u/1629785"
        },
        {
          "username": "samohovets",
          "href": "https://github.com/samohovets",
          "avatar": "https://avatars.githubusercontent.com/u/24735429"
        },
        {
          "username": "patsalv",
          "href": "https://github.com/patsalv",
          "avatar": "https://avatars.githubusercontent.com/u/89481679"
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
      "forks": 3370,
      "added_stars": 5313,
      "builtBy": [
        {
          "username": "quuu",
          "href": "https://github.com/quuu",
          "avatar": "https://avatars.githubusercontent.com/u/32676955"
        },
        {
          "username": "antfubot",
          "href": "https://github.com/antfubot",
          "avatar": "https://avatars.githubusercontent.com/u/291667613"
        },
        {
          "username": "huozhi",
          "href": "https://github.com/huozhi",
          "avatar": "https://avatars.githubusercontent.com/u/4800338"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "sandbox-runtime",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/sandbox-runtime",
      "desc": "A lightweight sandboxing tool for enforcing filesystem and network restrictions on arbitrary processes at the OS level, without requiring a container.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 630,
      "added_stars": 1579,
      "builtBy": [
        {
          "username": "ig-ant",
          "href": "https://github.com/ig-ant",
          "avatar": "https://avatars.githubusercontent.com/u/278458262"
        },
        {
          "username": "elhajjj",
          "href": "https://github.com/elhajjj",
          "avatar": "https://avatars.githubusercontent.com/u/19651160"
        },
        {
          "username": "ronleizrowice-ant",
          "href": "https://github.com/ronleizrowice-ant",
          "avatar": "https://avatars.githubusercontent.com/u/272939801"
        },
        {
          "username": "shawnm-anthropic",
          "href": "https://github.com/shawnm-anthropic",
          "avatar": "https://avatars.githubusercontent.com/u/227474143"
        },
        {
          "username": "ollie-anthropic",
          "href": "https://github.com/ollie-anthropic",
          "avatar": "https://avatars.githubusercontent.com/u/159198875"
        }
      ]
    },
    {
      "author": "gitroomhq",
      "repo": "postiz-app",
      "avatar": "https://github.com/gitroomhq.png",
      "repo_link": "https://github.com/gitroomhq/postiz-app",
      "desc": "📨 The ultimate agentic social media scheduling tool 🤖",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7843,
      "added_stars": 4393,
      "builtBy": [
        {
          "username": "nevo-david",
          "href": "https://github.com/nevo-david",
          "avatar": "https://avatars.githubusercontent.com/u/100117126"
        },
        {
          "username": "giladresisi",
          "href": "https://github.com/giladresisi",
          "avatar": "https://avatars.githubusercontent.com/u/6623700"
        },
        {
          "username": "egelhaus",
          "href": "https://github.com/egelhaus",
          "avatar": "https://avatars.githubusercontent.com/u/156946629"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jamesread",
          "href": "https://github.com/jamesread",
          "avatar": "https://avatars.githubusercontent.com/u/2025715"
        }
      ]
    },
    {
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca lets you run a fleet of coding agents (e.g. Claude Code, Codex) with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7589,
      "added_stars": 32085,
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
          "username": "Jinwoo-H",
          "href": "https://github.com/Jinwoo-H",
          "avatar": "https://avatars.githubusercontent.com/u/73622457"
        },
        {
          "username": "AmethystLiang",
          "href": "https://github.com/AmethystLiang",
          "avatar": "https://avatars.githubusercontent.com/u/6427696"
        },
        {
          "username": "OrcaWin",
          "href": "https://github.com/OrcaWin",
          "avatar": "https://avatars.githubusercontent.com/u/293788423"
        }
      ]
    },
    {
      "author": "anomalyco",
      "repo": "opencode",
      "avatar": "https://github.com/anomalyco.png",
      "repo_link": "https://github.com/anomalyco/opencode",
      "desc": "The open source coding agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 30468,
      "added_stars": 14780,
      "builtBy": [
        {
          "username": "thdxr",
          "href": "https://github.com/thdxr",
          "avatar": "https://avatars.githubusercontent.com/u/826656"
        },
        {
          "username": "rekram1-node",
          "href": "https://github.com/rekram1-node",
          "avatar": "https://avatars.githubusercontent.com/u/63023139"
        },
        {
          "username": "adamdotdevin",
          "href": "https://github.com/adamdotdevin",
          "avatar": "https://avatars.githubusercontent.com/u/2363879"
        },
        {
          "username": "kitlangton",
          "href": "https://github.com/kitlangton",
          "avatar": "https://avatars.githubusercontent.com/u/7587245"
        }
      ]
    },
    {
      "author": "chthollyphile",
      "repo": "folia-major",
      "avatar": "https://github.com/chthollyphile.png",
      "repo_link": "https://github.com/chthollyphile/folia-major",
      "desc": "专注于绚丽的歌词动画效果的本地音乐/navidrome/第三方多平台在线音乐播放器 A multi-platform music player for local files, Navidrome, and online streaming services, featuring stunning animated lyrics.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1348,
      "added_stars": 8305,
      "builtBy": [
        {
          "username": "chthollyphile",
          "href": "https://github.com/chthollyphile",
          "avatar": "https://avatars.githubusercontent.com/u/30263107"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "lantudou",
          "href": "https://github.com/lantudou",
          "avatar": "https://avatars.githubusercontent.com/u/34973475"
        },
        {
          "username": "yakult-green-tea",
          "href": "https://github.com/yakult-green-tea",
          "avatar": "https://avatars.githubusercontent.com/u/143932026"
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
      "forks": 1651,
      "added_stars": 5467,
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
          "username": "djiang-jq",
          "href": "https://github.com/djiang-jq",
          "avatar": "https://avatars.githubusercontent.com/u/257394719"
        },
        {
          "username": "ericzakariasson",
          "href": "https://github.com/ericzakariasson",
          "avatar": "https://avatars.githubusercontent.com/u/25622412"
        }
      ]
    },
    {
      "author": "vitejs",
      "repo": "vite",
      "avatar": "https://github.com/vitejs.png",
      "repo_link": "https://github.com/vitejs/vite",
      "desc": "Next generation frontend tooling. It's fast!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9498,
      "added_stars": 1067,
      "builtBy": [
        {
          "username": "sapphi-red",
          "href": "https://github.com/sapphi-red",
          "avatar": "https://avatars.githubusercontent.com/u/49056869"
        },
        {
          "username": "yyx990803",
          "href": "https://github.com/yyx990803",
          "avatar": "https://avatars.githubusercontent.com/u/499550"
        },
        {
          "username": "patak-cat",
          "href": "https://github.com/patak-cat",
          "avatar": "https://avatars.githubusercontent.com/u/583075"
        },
        {
          "username": "bluwy",
          "href": "https://github.com/bluwy",
          "avatar": "https://avatars.githubusercontent.com/u/34116392"
        }
      ]
    },
    {
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9561,
      "added_stars": 7545,
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
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "proffesor-for-testing",
          "href": "https://github.com/proffesor-for-testing",
          "avatar": "https://avatars.githubusercontent.com/u/214853444"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "playwright",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/playwright",
      "desc": "Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6825,
      "added_stars": 2479,
      "builtBy": [
        {
          "username": "pavelfeldman",
          "href": "https://github.com/pavelfeldman",
          "avatar": "https://avatars.githubusercontent.com/u/883973"
        },
        {
          "username": "dgozman",
          "href": "https://github.com/dgozman",
          "avatar": "https://avatars.githubusercontent.com/u/9881434"
        },
        {
          "username": "yury-s",
          "href": "https://github.com/yury-s",
          "avatar": "https://avatars.githubusercontent.com/u/9798949"
        },
        {
          "username": "mxschmitt",
          "href": "https://github.com/mxschmitt",
          "avatar": "https://avatars.githubusercontent.com/u/17984549"
        },
        {
          "username": "aslushnikov",
          "href": "https://github.com/aslushnikov",
          "avatar": "https://avatars.githubusercontent.com/u/746130"
        }
      ]
    },
    {
      "author": "google-gemini",
      "repo": "gemini-cli",
      "avatar": "https://github.com/google-gemini.png",
      "repo_link": "https://github.com/google-gemini/gemini-cli",
      "desc": "An open-source AI agent that brings the power of Gemini directly into your terminal.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 14932,
      "added_stars": 2032,
      "builtBy": [
        {
          "username": "scidomino",
          "href": "https://github.com/scidomino",
          "avatar": "https://avatars.githubusercontent.com/u/13950003"
        },
        {
          "username": "jacob314",
          "href": "https://github.com/jacob314",
          "avatar": "https://avatars.githubusercontent.com/u/1226812"
        },
        {
          "username": "NTaylorMullen",
          "href": "https://github.com/NTaylorMullen",
          "avatar": "https://avatars.githubusercontent.com/u/2008729"
        },
        {
          "username": "abhipatel12",
          "href": "https://github.com/abhipatel12",
          "avatar": "https://avatars.githubusercontent.com/u/43648792"
        },
        {
          "username": "SandyTao520",
          "href": "https://github.com/SandyTao520",
          "avatar": "https://avatars.githubusercontent.com/u/12478482"
        }
      ]
    },
    {
      "author": "Renhuai123",
      "repo": "ziwei-doushu",
      "avatar": "https://github.com/Renhuai123.png",
      "repo_link": "https://github.com/Renhuai123/ziwei-doushu",
      "desc": "紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3308,
      "added_stars": 12700,
      "builtBy": [
        {
          "username": "Renhuai123",
          "href": "https://github.com/Renhuai123",
          "avatar": "https://avatars.githubusercontent.com/u/91890238"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "HelloWorld3326",
          "href": "https://github.com/HelloWorld3326",
          "avatar": "https://avatars.githubusercontent.com/u/189696476"
        },
        {
          "username": "sakura168899-debug",
          "href": "https://github.com/sakura168899-debug",
          "avatar": "https://avatars.githubusercontent.com/u/289346330"
        }
      ]
    },
    {
      "author": "LibreSpark",
      "repo": "LibreTV",
      "avatar": "https://github.com/LibreSpark.png",
      "repo_link": "https://github.com/LibreSpark/LibreTV",
      "desc": "一分钟搭建影视站，支持Docker等部署方式",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 30930,
      "added_stars": 10067,
      "builtBy": [
        {
          "username": "bestZwei",
          "href": "https://github.com/bestZwei",
          "avatar": "https://avatars.githubusercontent.com/u/110226580"
        },
        {
          "username": "senshinya",
          "href": "https://github.com/senshinya",
          "avatar": "https://avatars.githubusercontent.com/u/155552943"
        },
        {
          "username": "JohnsonRan",
          "href": "https://github.com/JohnsonRan",
          "avatar": "https://avatars.githubusercontent.com/u/89735151"
        },
        {
          "username": "WLongSAMA",
          "href": "https://github.com/WLongSAMA",
          "avatar": "https://avatars.githubusercontent.com/u/12743204"
        }
      ]
    },
    {
      "author": "makecindy",
      "repo": "cindy",
      "avatar": "https://github.com/makecindy.png",
      "repo_link": "https://github.com/makecindy/cindy",
      "desc": "Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1190,
      "added_stars": 6655,
      "builtBy": [
        {
          "username": "dashhuang",
          "href": "https://github.com/dashhuang",
          "avatar": "https://avatars.githubusercontent.com/u/125997726"
        },
        {
          "username": "MagicLizi",
          "href": "https://github.com/MagicLizi",
          "avatar": "https://avatars.githubusercontent.com/u/17176223"
        },
        {
          "username": "zqchris",
          "href": "https://github.com/zqchris",
          "avatar": "https://avatars.githubusercontent.com/u/4436110"
        },
        {
          "username": "DavidShenXD",
          "href": "https://github.com/DavidShenXD",
          "avatar": "https://avatars.githubusercontent.com/u/290921921"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "elie222",
      "repo": "rakazo",
      "avatar": "https://github.com/elie222.png",
      "repo_link": "https://github.com/elie222/rakazo",
      "desc": "Open-source Grok Bot alternative. Choose your own model and sandbox.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1366,
      "added_stars": 4094,
      "builtBy": [
        {
          "username": "elie222",
          "href": "https://github.com/elie222",
          "avatar": "https://avatars.githubusercontent.com/u/3090527"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "zicochaos",
          "href": "https://github.com/zicochaos",
          "avatar": "https://avatars.githubusercontent.com/u/23367003"
        },
        {
          "username": "ald3b",
          "href": "https://github.com/ald3b",
          "avatar": "https://avatars.githubusercontent.com/u/3642270"
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
      "title": "Congrats to the Kaggle Benchmarking Challenge Winners!",
      "description": "A few weeks ago we teamed up with Kaggle to ask a deceptively simple question: how do you actually...",
      "url": "https://dev.to/devteam/congrats-to-the-kaggle-benchmarking-challenge-winners-2moh",
      "tags": "devchallenge, kagglechallenge, ai, machinelearning",
      "reactions": 131,
      "comments": 26,
      "reading_time": 4,
      "author": "heyitsjem"
    },
    {
      "title": "Mobile Data on Android 17 and a 4.9 Kernel: Google Fi on the Pixel 3a",
      "description": "LineageOS 24.0 on the Pixel 3a gets mobile data from a Google Fi data-only SIM after four fixes: mobile data on by default, a Fi APN, VoLTE in the carrier settings and a close_range() backport for IPv4. Each one traced from the radio log.",
      "url": "https://dev.to/gde/mobile-data-on-android-17-and-a-49-kernel-google-fi-on-the-pixel-3a-4cdc",
      "tags": "android, linux, lineageos, networking",
      "reactions": 11,
      "comments": 0,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "Six Serving Engines, One 8 GB GPU: Gemma 4 E2B on an RTX 3050",
      "description": "llama.cpp, vLLM, SGLang, mistral.rs, a plain PyTorch engine and LiteRT-LM serve the same 4-bit Gemma 4 E2B on one 8 GB RTX 3050, measured with the same prompts, the same load sweep and the same GSM8K and BFCL questions. GSM8K is level on every engine; vLLM is the fastest up to 16 requests and within 3% of SGLang beyond.",
      "url": "https://dev.to/gde/six-serving-engines-one-8-gb-gpu-gemma-4-e2b-on-an-rtx-3050-ad7",
      "tags": "gemma, vllm, llamacpp, nvidia",
      "reactions": 10,
      "comments": 1,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-28dh",
      "tags": "weeklyretro",
      "reactions": 96,
      "comments": 65,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Stop Asking LLMs to Do Math: Client-Side Functions in Flutter GenUI with bloc_signals",
      "description": "Why Andrew 'Red' Brogdon's insight on client-side functions is critical for Generative UI—and how bloc_signals_genui turns catalog functions into 0ms synchronous reactive signals.",
      "url": "https://dev.to/gde/stop-asking-llms-to-do-math-client-side-functions-in-flutter-genui-with-blocsignals-23bh",
      "tags": "flutter, dart, ai, architecture",
      "reactions": 16,
      "comments": 16,
      "reading_time": 5,
      "author": "randalschwartz"
    },
    {
      "title": "Measuring Gemma & On-Device Latency on 16GB Apple Silicon for Agent Workflows",
      "description": "Before you wire up a multi-agent workflow, measure how fast your local models actually...",
      "url": "https://dev.to/gde/measuring-real-world-response-latency-on-16gb-apple-silicon-for-agent-workflows-24e5",
      "tags": "gemma",
      "reactions": 10,
      "comments": 3,
      "reading_time": 5,
      "author": "jimmyliao"
    },
    {
      "title": "Building RailPulse AI: Deploying an Open-Source Railway Dispatch Agent with Gemma and Google Cloud Run",
      "description": "Author: Robina Mirbahar AI/ML Google Developer Expert (GDE) | Google Cloud Champion Innovator GitHub...",
      "url": "https://dev.to/gde/building-railpulse-ai-deploying-an-open-source-railway-dispatch-agent-with-gemma-and-google-cloud-2b9g",
      "tags": "ai, googlecloud, opensource, python",
      "reactions": 28,
      "comments": 23,
      "reading_time": 5,
      "author": "robinamirbahar"
    },
    {
      "title": "Prompt Pad: What Are Open-Weight Models?",
      "description": "When people call an AI model \"open,\" they don't always mean the same thing.  On this week's Prompt...",
      "url": "https://blog.mlh.com/prompt-pad-what-are-open-weight-models-1ghh",
      "tags": "opensource, ai, beginners, codenewbie",
      "reactions": 12,
      "comments": 0,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "Leveling the Playing Field: Building a 100% Offline Kubernetes Docs RAG Exam Assistant with Web AI, Gemma 4, and WebGPU",
      "description": "How to enable fair, zero-cost, air-gapped AI assistance in technical classrooms and...",
      "url": "https://dev.to/gde/leveling-the-playing-field-building-a-100-offline-kubernetes-docs-rag-exam-assistant-with-web-ai-53bi",
      "tags": "webai, gemma, rag, webgpu",
      "reactions": 9,
      "comments": 0,
      "reading_time": 10,
      "author": "cyruswong"
    },
    {
      "title": "How I Made a Voice Clone in Minutes, Using Google Antigravity, Gemini 3.8 Flash TTS and My Harness",
      "description": "How I Made a Voice Clone in Minutes, Using Google Antigravity, Gemini 3.8 Flash TTS and My Harness",
      "url": "https://dev.to/gde/how-i-made-a-voice-clone-in-minutes-using-google-antigravity-gemini-38-flash-tts-and-my-harness-10j3",
      "tags": "googlecloud, agenticai, voicecloning, gemini",
      "reactions": 10,
      "comments": 0,
      "reading_time": 18,
      "author": "dazbo"
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
      "title": "What a good resume actually looks like",
      "description": "Most resumes fail for the same small set of reasons. This is everything I wish someone had told me...",
      "url": "https://dev.to/rohan_sharma/what-a-good-resume-actually-looks-like-1gf6",
      "tags": "career, productivity, showdev, learning",
      "reactions": 5,
      "comments": 1,
      "reading_time": 9,
      "author": "rohan_sharma"
    },
    {
      "title": "What gets refused on Seedance, and how the two review layers differ",
      "description": "Answer: Seedance reviews a job twice. Layer 1 screens the prompt before any task exists — a clear...",
      "url": "https://dev.to/chet103cc/what-gets-refused-on-seedance-and-how-the-two-review-layers-differ-1fpa",
      "tags": "seedance, ai, tutorial, productivity",
      "reactions": 71,
      "comments": 5,
      "reading_time": 4,
      "author": "chet103cc"
    },
    {
      "title": "Can You Actually Build a Useful Agent Team Without Code?",
      "description": "This came up in Chinese AI developer communities recently: a post claiming that anyone, not just...",
      "url": "https://dev.to/nina_antalpha/can-you-actually-build-a-useful-agent-team-without-code-59ma",
      "tags": "ai, agents, workflow, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "nina_antalpha"
    },
    {
      "title": "Before I Trust an AI Answer, I Ask It These 3 Questions",
      "description": "I use AI tools every day. I also don't trust them. Both are true at the same time, and that's the...",
      "url": "https://dev.to/aheadkit/before-i-trust-an-ai-answer-i-ask-it-these-3-questions-5c5d",
      "tags": "ai, productivity, programming, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "aheadkit"
    },
    {
      "title": "OpenSpec Tutorial (2026): Spec-Driven Development in Claude Code, Step by Step",
      "description": "Key Takeaways   OpenSpec is a free command-line tool that makes your coding agent write a short plan...",
      "url": "https://dev.to/remybuilds/openspec-tutorial-2026-spec-driven-development-in-claude-code-step-by-step-1k4p",
      "tags": "ai, productivity, claude, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 15,
      "author": "remybuilds"
    },
    {
      "title": "How to Use Claude Code to Kill or Launch a Business Idea",
      "description": "25 gated steps, the Claude model that runs each one, and a free Claude Code skill built from 10 real experiments.",
      "url": "https://dev.to/mariankamenistak/how-to-use-claude-code-to-kill-or-launch-a-business-idea-2360",
      "tags": "ai, claude, startup, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 30,
      "author": "mariankamenistak"
    },
    {
      "title": "Order of operations matters more than model choice when upscaling old footage",
      "description": "A denoise pass and an upscale pass are not commutative. Doing them in the wrong order permanently...",
      "url": "https://dev.to/celticgemini001/order-of-operations-matters-more-than-model-choice-when-upscaling-old-footage-2g1o",
      "tags": "video, ai, tutorial, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "celticgemini001"
    },
    {
      "title": "Should you admit you used AI at work? 🤫",
      "description": "Welcome back to OnboardedHQ! 👋 And if you’re new around here — thank you for joining us!  Today let’s...",
      "url": "https://dev.to/sonika_onboardedhq/should-you-admit-you-used-ai-at-work-4fal",
      "tags": "ai, productivity, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sonika_onboardedhq"
    },
    {
      "title": "The page is sideways every time I open it: saving rotation into the PDF",
      "description": "A scanned form comes back with page 2 on its side. I press rotate in the viewer, it looks right, I...",
      "url": "https://dev.to/glinck/the-page-is-sideways-every-time-i-open-it-saving-rotation-into-the-pdf-531g",
      "tags": "pdf, cli, tutorial, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "glinck"
    },
    {
      "title": "How ATS keyword matching works, and how to tailor your developer resume without keyword stuffing",
      "description": "If you've ever applied to a job through a company careers page, your resume probably went into an...",
      "url": "https://dev.to/krdbeep/how-ats-keyword-matching-works-and-how-to-tailor-your-developer-resume-without-keyword-stuffing-4ep",
      "tags": "career, resume, beginners, productivity",
      "reactions": 1,
      "comments": 1,
      "reading_time": 4,
      "author": "krdbeep"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

