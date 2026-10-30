# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-10-30 06:29:24 UTC

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
      "forks": 3411,
      "added_stars": 14320,
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
      "author": "Leonxlnx",
      "repo": "taste-skill",
      "avatar": "https://github.com/Leonxlnx.png",
      "repo_link": "https://github.com/Leonxlnx/taste-skill",
      "desc": "Agent skills that give coding agents taste: art direction, reference images and a browser check instead of generic AI pages",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7148,
      "added_stars": 4359,
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
          "username": "HugoSpy",
          "href": "https://github.com/HugoSpy",
          "avatar": "https://avatars.githubusercontent.com/u/122161868"
        },
        {
          "username": "flexi767",
          "href": "https://github.com/flexi767",
          "avatar": "https://avatars.githubusercontent.com/u/96955327"
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
      "forks": 43341,
      "added_stars": 6594,
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
      "author": "hmjz100",
      "repo": "LinkSwift",
      "avatar": "https://github.com/hmjz100.png",
      "repo_link": "https://github.com/hmjz100/LinkSwift",
      "desc": "一个基于 JavaScript 的网盘文件下载地址获取工具。基于【网盘直链下载助手】修改 ，支持 百度网盘 / 阿里云盘 / 中国移动云盘 / 天翼云盘 / 迅雷云盘 / 夸克网盘 / UC网盘 / 123云盘 八大网盘",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2586,
      "added_stars": 9296,
      "builtBy": [
        {
          "username": "hmjz100",
          "href": "https://github.com/hmjz100",
          "avatar": "https://avatars.githubusercontent.com/u/98228280"
        },
        {
          "username": "MisaLiu",
          "href": "https://github.com/MisaLiu",
          "avatar": "https://avatars.githubusercontent.com/u/62408957"
        },
        {
          "username": "Night-stars-1",
          "href": "https://github.com/Night-stars-1",
          "avatar": "https://avatars.githubusercontent.com/u/99261160"
        },
        {
          "username": "sherlocknieh",
          "href": "https://github.com/sherlocknieh",
          "avatar": "https://avatars.githubusercontent.com/u/43476643"
        },
        {
          "username": "DeepslateQAQ",
          "href": "https://github.com/DeepslateQAQ",
          "avatar": "https://avatars.githubusercontent.com/u/46892455"
        }
      ]
    },
    {
      "author": "citrolabs",
      "repo": "ego-lite",
      "avatar": "https://github.com/citrolabs.png",
      "repo_link": "https://github.com/citrolabs/ego-lite",
      "desc": "The fastest browser for AI agents to run browser automation, built for sharing your logged-in browser state with your AI agents, like Codex or Claude Code, without disturbing you. Zero cost, zero config.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1165,
      "added_stars": 1897,
      "builtBy": [
        {
          "username": "section9-lab",
          "href": "https://github.com/section9-lab",
          "avatar": "https://avatars.githubusercontent.com/u/22140958"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "aute",
          "href": "https://github.com/aute",
          "avatar": "https://avatars.githubusercontent.com/u/17873165"
        },
        {
          "username": "WUXM5",
          "href": "https://github.com/WUXM5",
          "avatar": "https://avatars.githubusercontent.com/u/77671587"
        },
        {
          "username": "joway",
          "href": "https://github.com/joway",
          "avatar": "https://avatars.githubusercontent.com/u/8353464"
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
      "forks": 9904,
      "added_stars": 7147,
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
      "author": "zarazhangrui",
      "repo": "frontend-slides",
      "avatar": "https://github.com/zarazhangrui.png",
      "repo_link": "https://github.com/zarazhangrui/frontend-slides",
      "desc": "Create beautiful slides on the web using a coding agent's frontend skills",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2418,
      "added_stars": 477,
      "builtBy": [
        {
          "username": "zarazhangrui",
          "href": "https://github.com/zarazhangrui",
          "avatar": "https://avatars.githubusercontent.com/u/153693696"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "lilyzhng",
          "href": "https://github.com/lilyzhng",
          "avatar": "https://avatars.githubusercontent.com/u/10191088"
        },
        {
          "username": "Vaibhavee89",
          "href": "https://github.com/Vaibhavee89",
          "avatar": "https://avatars.githubusercontent.com/u/114926092"
        },
        {
          "username": "kbanc85",
          "href": "https://github.com/kbanc85",
          "avatar": "https://avatars.githubusercontent.com/u/139567284"
        }
      ]
    },
    {
      "author": "nodejs",
      "repo": "node",
      "avatar": "https://github.com/nodejs.png",
      "repo_link": "https://github.com/nodejs/node",
      "desc": "Node.js JavaScript runtime ✨🐢🚀✨",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 39310,
      "added_stars": 748,
      "builtBy": [
        {
          "username": "Trott",
          "href": "https://github.com/Trott",
          "avatar": "https://avatars.githubusercontent.com/u/718899"
        },
        {
          "username": "ry",
          "href": "https://github.com/ry",
          "avatar": "https://avatars.githubusercontent.com/u/80"
        },
        {
          "username": "bnoordhuis",
          "href": "https://github.com/bnoordhuis",
          "avatar": "https://avatars.githubusercontent.com/u/275871"
        },
        {
          "username": "addaleax",
          "href": "https://github.com/addaleax",
          "avatar": "https://avatars.githubusercontent.com/u/899444"
        },
        {
          "username": "isaacs",
          "href": "https://github.com/isaacs",
          "avatar": "https://avatars.githubusercontent.com/u/9287"
        }
      ]
    },
    {
      "author": "ulsklyc",
      "repo": "yuvomi",
      "avatar": "https://github.com/ulsklyc.png",
      "repo_link": "https://github.com/ulsklyc/yuvomi",
      "desc": "One home instead of many subscriptions. Yuvomi is a self-hosted family planner: tasks, calendar, budget, meals, shopping, health and more in one PWA on your own server or NAS. Docker, Podman, TrueNAS, Umbrel, Unraid. No tracking, MIT.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 198,
      "added_stars": 387,
      "builtBy": [
        {
          "username": "ulsklyc",
          "href": "https://github.com/ulsklyc",
          "avatar": "https://avatars.githubusercontent.com/u/108589275"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "keinzufall85",
          "href": "https://github.com/keinzufall85",
          "avatar": "https://avatars.githubusercontent.com/u/293667467"
        },
        {
          "username": "rafaelfoster",
          "href": "https://github.com/rafaelfoster",
          "avatar": "https://avatars.githubusercontent.com/u/4605083"
        },
        {
          "username": "mclgoerg",
          "href": "https://github.com/mclgoerg",
          "avatar": "https://avatars.githubusercontent.com/u/8989659"
        }
      ]
    },
    {
      "author": "OpenWhispr",
      "repo": "openwhispr",
      "avatar": "https://github.com/OpenWhispr.png",
      "repo_link": "https://github.com/OpenWhispr/openwhispr",
      "desc": "Voice-to-text dictation app with local (Nvidia Parakeet/Whisper) and cloud models (BYOK). Privacy-first and available cross-platform.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1338,
      "added_stars": 555,
      "builtBy": [
        {
          "username": "gabrielste1n",
          "href": "https://github.com/gabrielste1n",
          "avatar": "https://avatars.githubusercontent.com/u/11309189"
        },
        {
          "username": "Chadpiha",
          "href": "https://github.com/Chadpiha",
          "avatar": "https://avatars.githubusercontent.com/u/48052303"
        },
        {
          "username": "xAlcahest",
          "href": "https://github.com/xAlcahest",
          "avatar": "https://avatars.githubusercontent.com/u/62606476"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "boseq",
          "href": "https://github.com/boseq",
          "avatar": "https://avatars.githubusercontent.com/u/307062491"
        }
      ]
    },
    {
      "author": "reisxd",
      "repo": "TizenTube",
      "avatar": "https://github.com/reisxd.png",
      "repo_link": "https://github.com/reisxd/TizenTube",
      "desc": "A TizenBrew module to remove ads and add support for SponsorBlock for your Tizen TV.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 229,
      "added_stars": 74,
      "builtBy": [
        {
          "username": "reisxd",
          "href": "https://github.com/reisxd",
          "avatar": "https://avatars.githubusercontent.com/u/29177546"
        },
        {
          "username": "ADDAMANDD",
          "href": "https://github.com/ADDAMANDD",
          "avatar": "https://avatars.githubusercontent.com/u/215475567"
        },
        {
          "username": "AppleSang",
          "href": "https://github.com/AppleSang",
          "avatar": "https://avatars.githubusercontent.com/u/96937073"
        },
        {
          "username": "reindex-ot",
          "href": "https://github.com/reindex-ot",
          "avatar": "https://avatars.githubusercontent.com/u/32851879"
        },
        {
          "username": "WolfoLion",
          "href": "https://github.com/WolfoLion",
          "avatar": "https://avatars.githubusercontent.com/u/269232734"
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
      "forks": 8463,
      "added_stars": 1363,
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
      "by": "Tiberium",
      "descendants": 643,
      "id": 50296470,
      "kids": [
        50296587,
        50299966,
        50296593,
        50300329,
        50300014,
        50296816,
        50298980,
        50296795,
        50296706,
        50296644,
        50297043,
        50296695,
        50299447,
        50300453,
        50298018,
        50296950,
        50298237,
        50297652,
        50297887,
        50299841,
        50300220,
        50299231,
        50300313,
        50298952,
        50296883,
        50298739,
        50300400,
        50299715,
        50296975,
        50296944,
        50297061,
        50298711,
        50297819,
        50298808,
        50299636,
        50296847,
        50299059,
        50297046,
        50300266,
        50297416,
        50296649,
        50296717,
        50298492,
        50298676,
        50296744,
        50300225,
        50299173,
        50297042,
        50297075,
        50297310,
        50297608,
        50298525,
        50298827,
        50300032,
        50297154,
        50298823,
        50296745,
        50296929,
        50298446,
        50298706,
        50296597,
        50297151,
        50300108,
        50298971,
        50298764,
        50298863,
        50298658,
        50298685,
        50297411,
        50299519,
        50298210,
        50298294,
        50298104,
        50300331,
        50299409,
        50297487,
        50298846,
        50296769,
        50299166,
        50296972,
        50299309,
        50299598,
        50297362,
        50296729,
        50297121,
        50297009,
        50296613,
        50299342,
        50298960,
        50297054,
        50299878,
        50296728,
        50296568,
        50296522,
        50297579,
        50298342,
        50297349,
        50298414,
        50296632,
        50296984,
        50296698,
        50298588,
        50296645,
        50296718,
        50296934,
        50296611,
        50297388,
        50297813,
        50299837,
        50296792,
        50300291,
        50296640,
        50299698,
        50299193,
        50296720,
        50298829,
        50297420,
        50299942,
        50299057,
        50297026,
        50296885,
        50296689,
        50299881,
        50297096,
        50298456,
        50296600,
        50298190,
        50297482,
        50296841
      ],
      "score": 1075,
      "time": 1793309939,
      "title": "Binance-hacker-1029 – $5.6B stolen from Binance",
      "type": "story",
      "url": "https://arkm.com/explorer/entity/21a94755-f604-45e5-9501-6542e23005e8"
    },
    {
      "by": "kuberwastaken",
      "descendants": 361,
      "id": 50289418,
      "kids": [
        50289701,
        50289555,
        50289898,
        50300465,
        50294837,
        50290261,
        50290476,
        50290022,
        50294557,
        50299951,
        50299728,
        50290450,
        50289652,
        50298043,
        50293063,
        50292910,
        50299490,
        50289734,
        50297894,
        50289715,
        50292706,
        50296211,
        50289993,
        50290065,
        50292013,
        50294311,
        50296604,
        50293412,
        50289628,
        50289956,
        50293001,
        50292996,
        50291329,
        50291746,
        50295513,
        50290413,
        50289584,
        50292012,
        50293386,
        50291278,
        50293056,
        50290705,
        50291920,
        50291473,
        50292041,
        50289933,
        50290095,
        50292050,
        50294559
      ],
      "score": 1328,
      "time": 1793283201,
      "title": "We're releasing the weights of Mistral Large 4",
      "type": "story",
      "url": "https://mistral.ai/news/mistral-large-4-oss/"
    },
    {
      "by": "theanonymousone",
      "descendants": 10,
      "id": 50255343,
      "kids": [
        50299639,
        50300320,
        50299681,
        50299840,
        50299543
      ],
      "score": 66,
      "time": 1793082796,
      "title": "Cuis: The Modern Smalltalk-80",
      "type": "story",
      "url": "https://cuis.st/"
    },
    {
      "by": "nvmdbljstm",
      "descendants": 5,
      "id": 50270651,
      "kids": [
        50300432,
        50300322,
        50270652,
        50299876,
        50299631
      ],
      "score": 66,
      "time": 1793176195,
      "title": "Astroterm: A Planetarium for Your Terminal",
      "type": "story",
      "url": "https://github.com/da-luce/astroterm"
    },
    {
      "by": "surprisetalk",
      "descendants": 6,
      "id": 50273104,
      "kids": [
        50299542,
        50300285,
        50299939,
        50299933
      ],
      "score": 64,
      "time": 1793193605,
      "title": "I'm so bad at billiards that I ended up in the hyperbolic plane [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=kL9BTbIGxLg"
    },
    {
      "by": "sandslash",
      "descendants": 83,
      "id": 50296486,
      "kids": [
        50297039,
        50299592,
        50300064,
        50296794,
        50297440,
        50298608,
        50298583,
        50296807,
        50298491,
        50297340,
        50297761,
        50298836,
        50297110,
        50298741,
        50298257,
        50298047,
        50299805,
        50298384,
        50299848,
        50297891,
        50296660,
        50297176,
        50297104,
        50300479,
        50296952,
        50298223,
        50299032,
        50296942,
        50298211,
        50299242
      ],
      "score": 242,
      "time": 1793310028,
      "title": "We ran AI agent swarms in Minecraft and Mindustry",
      "type": "story",
      "url": "https://labs.ycombinator.com/projects/games/index.html"
    },
    {
      "by": "cherioo",
      "descendants": 77,
      "id": 50298436,
      "kids": [
        50300473,
        50298958,
        50299783,
        50300466,
        50300042,
        50299644,
        50300314,
        50300195,
        50300233,
        50299280,
        50300305,
        50300261,
        50299335,
        50299479,
        50300310,
        50298966,
        50299217,
        50299174,
        50299572,
        50299534,
        50299071,
        50299010,
        50299048,
        50299049,
        50299248,
        50299685,
        50299197,
        50299065,
        50299090,
        50299134,
        50300181,
        50299023,
        50299611,
        50299375,
        50299433,
        50299527,
        50299662,
        50300060
      ],
      "score": 117,
      "time": 1793320961,
      "title": "Herdr has released native app",
      "type": "story",
      "url": "https://github.com/herdrdev/herdr-app"
    },
    {
      "by": "airinei",
      "descendants": 10,
      "id": 50295450,
      "kids": [
        50297311,
        50295825,
        50296260,
        50298618,
        50299683,
        50295451,
        50296197,
        50298995,
        50299036,
        50298652,
        50296765,
        50298917
      ],
      "score": 180,
      "time": 1793305948,
      "title": "A tiny world model running games on a Raspberry Pi Pico 2 W",
      "type": "story",
      "url": "https://github.com/SheepSeb/tinyworldformer"
    },
    {
      "by": "ea016",
      "descendants": 141,
      "id": 50291054,
      "kids": [
        50293621,
        50300348,
        50291496,
        50292766,
        50292056,
        50291587,
        50292455,
        50291937,
        50291723,
        50299404,
        50294533,
        50298291,
        50299320,
        50294253,
        50292486,
        50296562,
        50294065,
        50292374,
        50292795,
        50291742,
        50292885,
        50293201,
        50291934,
        50294295,
        50291265,
        50291731,
        50300380,
        50297932,
        50299140,
        50298651,
        50299153,
        50296772,
        50291869,
        50291663
      ],
      "score": 381,
      "time": 1793289183,
      "title": "H.264 Is Magic (2016)",
      "type": "story",
      "url": "https://sidbala.com/h-264-is-magic/"
    },
    {
      "by": "ibobev",
      "descendants": 215,
      "id": 50290177,
      "kids": [
        50293240,
        50292718,
        50293612,
        50300427,
        50293435,
        50294281,
        50296206,
        50299394,
        50299541,
        50299359,
        50298847,
        50299614,
        50293892,
        50294048,
        50293006,
        50299467,
        50297497,
        50294099,
        50293372,
        50293035,
        50298594,
        50294166,
        50294366,
        50294662,
        50296000,
        50292279,
        50294123,
        50292903,
        50296123,
        50296390,
        50296324,
        50297070,
        50293088,
        50294689,
        50292628,
        50293224,
        50292276,
        50291999,
        50299368,
        50299312,
        50296564,
        50296684,
        50296797,
        50296763,
        50294624,
        50293781,
        50298122,
        50294621,
        50293763,
        50294307,
        50293225,
        50296283,
        50295374,
        50294877,
        50294811,
        50296533,
        50292856,
        50296586,
        50297583,
        50292177,
        50293727,
        50293568,
        50300018,
        50298058,
        50298767,
        50295522,
        50299240,
        50292366,
        50297145,
        50293177,
        50292630,
        50293162
      ],
      "score": 414,
      "time": 1793285875,
      "title": "LLM Voice",
      "type": "story",
      "url": "https://martinfowler.com/bliki/LLM-Voice.html"
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
      "title": "London meetup",
      "url": "",
      "score": 24,
      "comments": 13,
      "tags": [
        "event"
      ],
      "id": "dsrruj"
    },
    {
      "title": "NetBSD adds a new Emacs-like text editor called atto",
      "url": "https://mastodon.sdf.org/@netbsd/117518160563539748",
      "score": 45,
      "comments": 25,
      "tags": [
        "editors",
        "netbsd"
      ],
      "id": "m6fw0x"
    },
    {
      "title": "What the fox say?",
      "url": "https://entropicthoughts.com/what-the-fox-say",
      "score": 59,
      "comments": 12,
      "tags": [
        "games"
      ],
      "id": "7qaac6"
    },
    {
      "title": "Shared password manager for families?",
      "url": "",
      "score": 30,
      "comments": 38,
      "tags": [
        "ask",
        "security"
      ],
      "id": "eccbci"
    },
    {
      "title": "C2PA's eMudhra Moment",
      "url": "https://www.da.vidbuchanan.co.uk/blog/c2pa-four.html",
      "score": 13,
      "comments": 1,
      "tags": [
        "cryptography",
        "security"
      ],
      "id": "2matgw"
    },
    {
      "title": "My favourite PowerMac is a Nintendo Wii",
      "url": "https://virtuallyfun.com/2026/10/29/my-favourite-powermac-is-a-nintendo-wii/",
      "score": 35,
      "comments": 1,
      "tags": [
        "retrocomputing",
        "reversing"
      ],
      "id": "siebde"
    },
    {
      "title": "If you love a website, back it up",
      "url": "http://blog.mistys-internet.website/post/2026/10/29/if-you-love-a-website-back-it-up/",
      "score": 8,
      "comments": 3,
      "tags": [
        "web"
      ],
      "id": "6ole9g"
    },
    {
      "title": "Qwenputer: a fully functioning, deterministic RISC-V CPU inside Qwen3.5",
      "url": "https://divagr.com/blog/qwenputer",
      "score": 41,
      "comments": 6,
      "tags": [
        "ai"
      ],
      "id": "zftely"
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3727,
      "added_stars": 8086,
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
      "author": "earthtojake",
      "repo": "text-to-cad",
      "avatar": "https://github.com/earthtojake.png",
      "repo_link": "https://github.com/earthtojake/text-to-cad",
      "desc": "Design physical products with AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2322,
      "added_stars": 7732,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10466,
      "added_stars": 47778,
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
          "username": "jaketame",
          "href": "https://github.com/jaketame",
          "avatar": "https://avatars.githubusercontent.com/u/1787973"
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
      "forks": 4728,
      "added_stars": 8277,
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
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9451,
      "added_stars": 20593,
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
          "username": "LohseZSai",
          "href": "https://github.com/LohseZSai",
          "avatar": "https://avatars.githubusercontent.com/u/116092574"
        },
        {
          "username": "nyxst4ck",
          "href": "https://github.com/nyxst4ck",
          "avatar": "https://avatars.githubusercontent.com/u/289980115"
        },
        {
          "username": "ricardolaurito",
          "href": "https://github.com/ricardolaurito",
          "avatar": "https://avatars.githubusercontent.com/u/75488296"
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
      "forks": 3232,
      "added_stars": 5997,
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
      "author": "danyuchn",
      "repo": "asd-ste100-skill",
      "avatar": "https://github.com/danyuchn.png",
      "repo_link": "https://github.com/danyuchn/asd-ste100-skill",
      "desc": "ASD-STE100 Simplified Technical English rules, repurposed as a Claude Code skill for rewriting ambiguous agent-facing English.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 338,
      "added_stars": 3556,
      "builtBy": [
        {
          "username": "danyuchn",
          "href": "https://github.com/danyuchn",
          "avatar": "https://avatars.githubusercontent.com/u/130748619"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "yupasik",
          "href": "https://github.com/yupasik",
          "avatar": "https://avatars.githubusercontent.com/u/3337248"
        },
        {
          "username": "KevinGriffin-new",
          "href": "https://github.com/KevinGriffin-new",
          "avatar": "https://avatars.githubusercontent.com/u/117586586"
        },
        {
          "username": "couimet",
          "href": "https://github.com/couimet",
          "avatar": "https://avatars.githubusercontent.com/u/3306418"
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
      "forks": 5198,
      "added_stars": 6938,
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
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use Claude Code, Codex, Antigravity, VSCode, Pi, and OpenCode (and 6 other harnesses) for free (1.3B+ free tokens) from your terminal, app, IDE, or phone, and now from the browser with native browser sessions (multi-harness + multi-model) like OpenClaw (voice supported + ToS friendly)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10121,
      "added_stars": 9312,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn AI Engineering! Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13315,
      "added_stars": 14950,
      "builtBy": [
        {
          "username": "rohitg00",
          "href": "https://github.com/rohitg00",
          "avatar": "https://avatars.githubusercontent.com/u/48523873"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "abhinav-m22",
          "href": "https://github.com/abhinav-m22",
          "avatar": "https://avatars.githubusercontent.com/u/113239388"
        },
        {
          "username": "jkhandebharad",
          "href": "https://github.com/jkhandebharad",
          "avatar": "https://avatars.githubusercontent.com/u/177315487"
        }
      ]
    },
    {
      "author": "calesthio",
      "repo": "OpenMontage",
      "avatar": "https://github.com/calesthio.png",
      "repo_link": "https://github.com/calesthio/OpenMontage",
      "desc": "World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9558,
      "added_stars": 11512,
      "builtBy": [
        {
          "username": "calesthio",
          "href": "https://github.com/calesthio",
          "avatar": "https://avatars.githubusercontent.com/u/213189893"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "0xDevNinja",
          "href": "https://github.com/0xDevNinja",
          "avatar": "https://avatars.githubusercontent.com/u/102245100"
        },
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "yiyabo",
          "href": "https://github.com/yiyabo",
          "avatar": "https://avatars.githubusercontent.com/u/129351686"
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
      "forks": 2025,
      "added_stars": 4801,
      "builtBy": [
        {
          "username": "rng1995",
          "href": "https://github.com/rng1995",
          "avatar": "https://avatars.githubusercontent.com/u/32655573"
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
      "desc": "Multi-harness agentic plugin marketplace for Claude Code, Codex, Cursor, OpenCode, GitHub Copilot, Google Antigravity, and Pi",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4445,
      "added_stars": 2027,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3296,
      "added_stars": 3752,
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
          "username": "LIghtJUNction",
          "href": "https://github.com/LIghtJUNction",
          "avatar": "https://avatars.githubusercontent.com/u/106986785"
        }
      ]
    },
    {
      "author": "lightseekorg",
      "repo": "tokenspeed",
      "avatar": "https://github.com/lightseekorg.png",
      "repo_link": "https://github.com/lightseekorg/tokenspeed",
      "desc": "TokenSpeed is a speed-of-light LLM inference engine.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 387,
      "added_stars": 648,
      "builtBy": [
        {
          "username": "lightseek-bot",
          "href": "https://github.com/lightseek-bot",
          "avatar": "https://avatars.githubusercontent.com/u/243258330"
        },
        {
          "username": "antiagainst",
          "href": "https://github.com/antiagainst",
          "avatar": "https://avatars.githubusercontent.com/u/487928"
        },
        {
          "username": "nperrin-fr",
          "href": "https://github.com/nperrin-fr",
          "avatar": "https://avatars.githubusercontent.com/u/297528256"
        },
        {
          "username": "longcat-ia-team",
          "href": "https://github.com/longcat-ia-team",
          "avatar": "https://avatars.githubusercontent.com/u/312376714"
        },
        {
          "username": "borontion",
          "href": "https://github.com/borontion",
          "avatar": "https://avatars.githubusercontent.com/u/25846776"
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
      "forks": 1492,
      "added_stars": 5699,
      "builtBy": [
        {
          "username": "jubaoliang-tencent",
          "href": "https://github.com/jubaoliang-tencent",
          "avatar": "https://avatars.githubusercontent.com/u/309035352"
        },
        {
          "username": "jubaoliang",
          "href": "https://github.com/jubaoliang",
          "avatar": "https://avatars.githubusercontent.com/u/222386738"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "Bosheng0422",
          "href": "https://github.com/Bosheng0422",
          "avatar": "https://avatars.githubusercontent.com/u/67680641"
        },
        {
          "username": "liukewia",
          "href": "https://github.com/liukewia",
          "avatar": "https://avatars.githubusercontent.com/u/50489030"
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
      "forks": 6237,
      "added_stars": 9293,
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
      "author": "luongnv89",
      "repo": "claude-howto",
      "avatar": "https://github.com/luongnv89.png",
      "repo_link": "https://github.com/luongnv89/claude-howto",
      "desc": "A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5661,
      "added_stars": 4564,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6879,
      "added_stars": 21520,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2271,
      "added_stars": 8800,
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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1506,
      "added_stars": 5677,
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
          "username": "djiang-jq",
          "href": "https://github.com/djiang-jq",
          "avatar": "https://avatars.githubusercontent.com/u/257394719"
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
      "forks": 9259,
      "added_stars": 9911,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8517,
      "added_stars": 7708,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5992,
      "added_stars": 14488,
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
      "author": "supabase",
      "repo": "supabase",
      "avatar": "https://github.com/supabase.png",
      "repo_link": "https://github.com/supabase/supabase",
      "desc": "The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16321,
      "added_stars": 3731,
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
      "author": "vercel-labs",
      "repo": "skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/skills",
      "desc": "The open agent skills tool - npx skills",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3203,
      "added_stars": 4512,
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
          "username": "antfubot",
          "href": "https://github.com/antfubot",
          "avatar": "https://avatars.githubusercontent.com/u/291667613"
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
      "forks": 607,
      "added_stars": 1474,
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
      "author": "paperclipai",
      "repo": "paperclip",
      "avatar": "https://github.com/paperclipai.png",
      "repo_link": "https://github.com/paperclipai/paperclip",
      "desc": "The open-source app everyone uses to manage agents at work",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 18008,
      "added_stars": 14927,
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
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9402,
      "added_stars": 7026,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5641,
      "added_stars": 7986,
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
      "author": "gitroomhq",
      "repo": "postiz-app",
      "avatar": "https://github.com/gitroomhq.png",
      "repo_link": "https://github.com/gitroomhq/postiz-app",
      "desc": "📨 The ultimate agentic social media scheduling tool 🤖",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7618,
      "added_stars": 3749,
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
      "desc": "Orca is the place for working with a fleet of agents (e.g. Grok Bot, Claude Code). Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6976,
      "added_stars": 29190,
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
          "username": "orca-ide",
          "href": "https://github.com/orca-ide",
          "avatar": "https://avatars.githubusercontent.com/u/277417572"
        }
      ]
    },
    {
      "author": "chthollyphile",
      "repo": "folia-major",
      "avatar": "https://github.com/chthollyphile.png",
      "repo_link": "https://github.com/chthollyphile/folia-major",
      "desc": "专注于绚丽的歌词动画效果的本地音乐/navidrome/第三方多平台在线音乐播放器",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1130,
      "added_stars": 7108,
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
      "author": "LibreSpark",
      "repo": "LibreTV",
      "avatar": "https://github.com/LibreSpark.png",
      "repo_link": "https://github.com/LibreSpark/LibreTV",
      "desc": "一分钟搭建影视站，支持Docker等部署方式",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 30387,
      "added_stars": 8873,
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
      "author": "Renhuai123",
      "repo": "ziwei-doushu",
      "avatar": "https://github.com/Renhuai123.png",
      "repo_link": "https://github.com/Renhuai123/ziwei-doushu",
      "desc": "紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2094,
      "added_stars": 5728,
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
          "username": "Renhuai",
          "href": "https://github.com/Renhuai",
          "avatar": "https://avatars.githubusercontent.com/u/108378938"
        },
        {
          "username": "sakura168899-debug",
          "href": "https://github.com/sakura168899-debug",
          "avatar": "https://avatars.githubusercontent.com/u/289346330"
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
      "forks": 1020,
      "added_stars": 5760,
      "builtBy": [
        {
          "username": "dashhuang",
          "href": "https://github.com/dashhuang",
          "avatar": "https://avatars.githubusercontent.com/u/125997726"
        },
        {
          "username": "zqchris",
          "href": "https://github.com/zqchris",
          "avatar": "https://avatars.githubusercontent.com/u/4436110"
        },
        {
          "username": "MagicLizi",
          "href": "https://github.com/MagicLizi",
          "avatar": "https://avatars.githubusercontent.com/u/17176223"
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
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for month-long single sessions (billions of tokens) ,small context windows (a 100K context is enough) and token savings (5x fewer tokens) .上下文压缩插件，月级长会话会话， 兼顾小窗口(100k上下文足矣)省token(省5倍token) . billion-context is all you need",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 288,
      "added_stars": 2991,
      "builtBy": [
        {
          "username": "ranxianglei",
          "href": "https://github.com/ranxianglei",
          "avatar": "https://avatars.githubusercontent.com/u/12445698"
        },
        {
          "username": "YunzhouLi-hub",
          "href": "https://github.com/YunzhouLi-hub",
          "avatar": "https://avatars.githubusercontent.com/u/154221037"
        },
        {
          "username": "yanhuojiyusheng",
          "href": "https://github.com/yanhuojiyusheng",
          "avatar": "https://avatars.githubusercontent.com/u/98598692"
        },
        {
          "username": "yingzhongshuoqi",
          "href": "https://github.com/yingzhongshuoqi",
          "avatar": "https://avatars.githubusercontent.com/u/187964595"
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
      "forks": 886,
      "added_stars": 1227,
      "builtBy": [
        {
          "username": "tim-smart",
          "href": "https://github.com/tim-smart",
          "avatar": "https://avatars.githubusercontent.com/u/40680"
        },
        {
          "username": "mikearnaldi",
          "href": "https://github.com/mikearnaldi",
          "avatar": "https://avatars.githubusercontent.com/u/24249610"
        },
        {
          "username": "gcanti",
          "href": "https://github.com/gcanti",
          "avatar": "https://avatars.githubusercontent.com/u/878912"
        },
        {
          "username": "effect-bot",
          "href": "https://github.com/effect-bot",
          "avatar": "https://avatars.githubusercontent.com/u/129879685"
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
      "forks": 540,
      "added_stars": 4666,
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
      "author": "michael-denyer",
      "repo": "pstack-claude",
      "avatar": "https://github.com/michael-denyer.png",
      "repo_link": "https://github.com/michael-denyer/pstack-claude",
      "desc": "Claude Code, Codex, Copilot, Pi, OpenCode, Muse, Gemini, and Prime Agent versions of Poteto's pstack. Rigorous agent workflows with Cursor primitives translated for other harnesses.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 335,
      "added_stars": 2941,
      "builtBy": [
        {
          "username": "michael-denyer",
          "href": "https://github.com/michael-denyer",
          "avatar": "https://avatars.githubusercontent.com/u/97485362"
        },
        {
          "username": "EthanYoQ",
          "href": "https://github.com/EthanYoQ",
          "avatar": "https://avatars.githubusercontent.com/u/257484394"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "younes-io",
          "href": "https://github.com/younes-io",
          "avatar": "https://avatars.githubusercontent.com/u/3153107"
        },
        {
          "username": "harrymunro",
          "href": "https://github.com/harrymunro",
          "avatar": "https://avatars.githubusercontent.com/u/13261778"
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
      "title": "Your DEV posts have a beautiful new share card ✨",
      "description": "The image that shows up when you share a DEV post just got a brand-new look!  I got to work on...",
      "url": "https://dev.to/devteam/your-dev-posts-have-a-beautiful-new-share-card-4be8",
      "tags": "devto, showdev, opensource, design",
      "reactions": 130,
      "comments": 30,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Welcome to the Prompt Pad: AI Tips & Tricks with Rosendo Pili",
      "description": "Keeping up with AI is a full-time job. Prompt Pad is here to help you keep up a little at a...",
      "url": "https://blog.mlh.com/welcome-to-the-prompt-pad-ai-tips-tricks-with-rosendo-pili-2hkl",
      "tags": "ai, beginners, promptengineering, codenewbie",
      "reactions": 13,
      "comments": 1,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "Welcome Thread - v399",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v400-fho",
      "tags": "welcome",
      "reactions": 39,
      "comments": 211,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "Accuracy vs Speed: Gemma 4 E2B Quantization Tradeoffs, BF16 to Q2_K",
      "description": "Gemma 4 E2B quantized from BF16 to Q2_K on one Tesla T4, every rung asked the same 250 GSM8K questions, and each answer buried at the rung where it first goes wrong. Q5_K_M and above hold the score; Q3_K_M loses 38; Q2_K gets 3 right. With thinking on, Q3_K_M wins back 17.",
      "url": "https://dev.to/gde/accuracy-vs-speed-gemma-4-e2b-quantization-tradeoffs-bf16-to-q2k-aea",
      "tags": "devchallenge, hf26challenge, gemma, llamacpp",
      "reactions": 9,
      "comments": 3,
      "reading_time": 15,
      "author": "xbill"
    },
    {
      "title": "Performance vs Quality: Gemma 4 E2B Quantization on an NVIDIA L4 and a Tesla T4",
      "description": "Gemma 4 E2B from BF16 to Q2_K, speed against GSM8K accuracy, on an AWS L4 with byte-identical GGUF files and the same llama.cpp build as the Tesla T4. The L4 decodes 1.25 to 1.89 times faster, Q5_K_M is still the best trade, and switching GPUs changes nearly as many grades as quantizing from BF16 to Q5_K_M.",
      "url": "https://dev.to/gde/performance-vs-quality-gemma-4-e2b-quantization-on-an-nvidia-l4-and-a-tesla-t4-4b90",
      "tags": "gemma, llamacpp, aws, quantization",
      "reactions": 6,
      "comments": 1,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Your Laptop Might Replace Most of Your AI Bill",
      "description": "I've never run an AI model on my own machine, and I assumed the cloud was the best way to get good...",
      "url": "https://dev.to/auth0/your-laptop-might-replace-most-of-your-ai-bill-4o1f",
      "tags": "ai, llm, programming, productivity",
      "reactions": 11,
      "comments": 3,
      "reading_time": 3,
      "author": "carlastabile"
    },
    {
      "title": "Size Your Model to Where You Run It: Gemma 4 E2B and E4B on an AWS L4 and Two Small GPUs",
      "description": "A 24 GB NVIDIA L4 serves Gemma 4 E2B and E4B at only 1.2-1.3x an 8 GB desktop RTX 3050 for one user, with the same answers, because a 4-bit small model uses 13-29% of the card. Pick the model for the hardware, and the hardware for the model.",
      "url": "https://dev.to/gde/size-your-model-to-where-you-run-it-gemma-4-e2b-and-e4b-on-an-aws-l4-and-two-small-gpus-1d47",
      "tags": "gemma, llamacpp, aws, cuda",
      "reactions": 8,
      "comments": 0,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "Gemini 4 Carbon Is #1 on AA Index — Still Fairwind-Only: Cyber Benches, $2/$10 $4/$20, and What to Do Before the API",
      "description": "Google DeepMind’s Gemini 4 Carbon (Oct 28) claims AA Index v5.0 #1 at 59 and SOTA cyber benches — still Fairwind/cyber-defenders first, no public model ID. Intro $2/$10 → $4/$20, 95% cache off, builder checklist before the API.",
      "url": "https://dev.to/yong_yu_f98e15562e9b120a0/gemini-4-carbon-is-1-on-aa-index-still-fairwind-only-cyber-benches-210-420-and-what-to-b66",
      "tags": "ai, llm, google, cybersecurity",
      "reactions": 4,
      "comments": 3,
      "reading_time": 6,
      "author": "yong_yu_f98e15562e9b120a0"
    },
    {
      "title": "AI Dev Weekly #32: GPT-6.1 Terra, Gemini Carbon, Kimi K3.1 and Copilot Fusion",
      "description": "Week of Oct 23-29: GPT-6.1 Terra, restricted Gemini Carbon access, Kimi K3.1 Pro, Copilot Fusion and GitHub's agentic workflow launches.",
      "url": "https://dev.to/ai_made_tools/ai-dev-weekly-32-gpt-61-terra-gemini-carbon-kimi-k31-and-copilot-fusion-3mpi",
      "tags": "aidevweekly, gpt61terra, gemini4carbon, kimik31",
      "reactions": 7,
      "comments": 0,
      "reading_time": 9,
      "author": "ai_made_tools"
    },
    {
      "title": "Inference on Google Cloud: Precision, Memory and Capacity on TPU, from v5e to Ironwood",
      "description": "The companion to the talk: what the number format, memory bandwidth, slice shape and capacity rules do to Gemma 4 on Cloud TPU v5e and v6e, against the L4, Blackwell, MI300X and Inferentia, with the cost of each.",
      "url": "https://dev.to/gde/inference-on-google-cloud-precision-memory-and-capacity-on-tpu-from-v5e-to-ironwood-5dlf",
      "tags": "googlecloud, tpu, machinelearning, gemma",
      "reactions": 8,
      "comments": 1,
      "reading_time": 14,
      "author": "xbill"
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
      "title": "Every App Eventually Becomes a Dashboard. Please Make It Stop.",
      "description": "Every good app starts with a lie.   “We’re going to keep this simple.”   I love that sentence.  So...",
      "url": "https://dev.to/the_nortern_dev/every-app-eventually-becomes-a-dashboard-please-make-it-stop-37e9",
      "tags": "programming, webdev, productivity, software",
      "reactions": 18,
      "comments": 8,
      "reading_time": 4,
      "author": "the_nortern_dev"
    },
    {
      "title": "Worktrees do not remove the collision. They move it to merge time.",
      "description": "Git worktrees give each coding agent its own checkout, so the agents stop overwriting each other's...",
      "url": "https://dev.to/naw103/worktrees-do-not-remove-the-collision-they-move-it-to-merge-time-3gb2",
      "tags": "ai, git, devtools, productivity",
      "reactions": 2,
      "comments": 7,
      "reading_time": 8,
      "author": "naw103"
    },
    {
      "title": "I counted every skill my AI invoked across 55 sessions. Here's the leaderboard.",
      "description": "I had over a hundred skills installed while building ParkEase. Which ones actually pulled their...",
      "url": "https://dev.to/rakno/i-counted-every-skill-my-ai-invoked-across-55-sessions-heres-the-leaderboard-1e3a",
      "tags": "ai, programming, productivity, devtools",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "rakno"
    },
    {
      "title": "Bring Back the Three-Hour Bug",
      "description": "Last week an AI agent fixed a bug for me in about five seconds. Clean fix, nice explanation, even a...",
      "url": "https://dev.to/grinushka/bring-back-the-three-hour-bug-36a3",
      "tags": "ai, programming, career, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "grinushka"
    },
    {
      "title": "How to actually read the code your AI agent wrote",
      "description": "A practical workflow for reviewing what Claude Code, Codex or Cursor changed: commits, branches against main, and uncommitted changes.",
      "url": "https://dev.to/yenpodev/how-to-actually-read-the-code-your-ai-agent-wrote-1fj9",
      "tags": "ai, codereview, git, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "yenpodev"
    },
    {
      "title": "Omarchy on an M1 MacBook Air: what works, what broke and how I fixed it",
      "description": "I had an M1 MacBook Air and an itch to try Omarchy, DHH's opinionated Arch Linux setup with Hyprland....",
      "url": "https://dev.to/pavel_polivka/omarchy-on-an-m1-macbook-air-what-works-what-broke-and-how-i-fixed-it-1e4",
      "tags": "linux, hyprland, macbook, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 8,
      "author": "pavel_polivka"
    },
    {
      "title": "Internal Tools: Build, Buy, or Do Without",
      "description": "Internal tools accumulate the same way business software does: one at a time, each solving a real...",
      "url": "https://dev.to/truffaire/internal-tools-build-buy-or-do-without-1jjg",
      "tags": "productivity, startup, business, softwaredevelopment",
      "reactions": 0,
      "comments": 1,
      "reading_time": 6,
      "author": "truffaire"
    },
    {
      "title": "Managing a Website with AI: What Should You Delegate?",
      "description": "Practical tasks to delegate to an AI assistant, with a workflow for checking content, permissions and publication.",
      "url": "https://dev.to/morlixcms/managing-a-website-with-ai-what-should-you-delegate-mfn",
      "tags": "ai, webdev, cms, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "evgeniybrusnitsyn"
    },
    {
      "title": "Mastering Electron's Process Model: A Practical Guide to Secure, Maintainable IPC",
      "description": "Mastering Electron's Process Model: A Practical Guide to Secure, Maintainable IPC   Every...",
      "url": "https://dev.to/mp3sss31/mastering-electrons-process-model-a-practical-guide-to-secure-maintainable-ipc-35cl",
      "tags": "electron, node, webdev, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "mp3sss31"
    },
    {
      "title": "What Obsidian Really Costs a Dev Team in 2026 (and 4 Ways to Sync a Vault)",
      "description": "Somebody on your team starts keeping docs in Obsidian. Then a few more people do. At some point a...",
      "url": "https://dev.to/typefire/what-obsidian-really-costs-a-dev-team-in-2026-and-4-ways-to-sync-a-vault-pd1",
      "tags": "obsidian, productivity, git, markdown",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "typefire"
    }
  ]
}
- Fetching feeds...
{
  "source": "reddit",
  "topic": "freelance",
  "sort": "top",
  "items": []
}
```

