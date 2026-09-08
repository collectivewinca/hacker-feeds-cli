# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-09-08 06:38:20 UTC

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
      "author": "tt-a1i",
      "repo": "archify",
      "avatar": "https://github.com/tt-a1i.png",
      "repo_link": "https://github.com/tt-a1i/archify",
      "desc": "Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self-contained HTML with motion and crisp export.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3517,
      "added_stars": 14946,
      "builtBy": [
        {
          "username": "tt-a1i",
          "href": "https://github.com/tt-a1i",
          "avatar": "https://avatars.githubusercontent.com/u/53142663"
        },
        {
          "username": "sunsunsun-java",
          "href": "https://github.com/sunsunsun-java",
          "avatar": "https://avatars.githubusercontent.com/u/55621390"
        },
        {
          "username": "YunyueLi",
          "href": "https://github.com/YunyueLi",
          "avatar": "https://avatars.githubusercontent.com/u/44204222"
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
      "forks": 37979,
      "added_stars": 7735,
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
          "username": "pangerlkr",
          "href": "https://github.com/pangerlkr",
          "avatar": "https://avatars.githubusercontent.com/u/73515951"
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
      "forks": 7029,
      "added_stars": 12834,
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
          "username": "Lakshya77089",
          "href": "https://github.com/Lakshya77089",
          "avatar": "https://avatars.githubusercontent.com/u/169168095"
        },
        {
          "username": "ousamabenyounes",
          "href": "https://github.com/ousamabenyounes",
          "avatar": "https://avatars.githubusercontent.com/u/2910651"
        },
        {
          "username": "dhedhialy",
          "href": "https://github.com/dhedhialy",
          "avatar": "https://avatars.githubusercontent.com/u/91044156"
        }
      ]
    },
    {
      "author": "jo-inc",
      "repo": "camofox-browser",
      "avatar": "https://github.com/jo-inc.png",
      "repo_link": "https://github.com/jo-inc/camofox-browser",
      "desc": "Stealth headless browser for AI agents — bypass Cloudflare, bot detection, and anti-scraping. Drop-in Puppeteer/Playwright replacement.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1032,
      "added_stars": 462,
      "builtBy": [
        {
          "username": "skyfallsin",
          "href": "https://github.com/skyfallsin",
          "avatar": "https://avatars.githubusercontent.com/u/998"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "epicsagas",
          "href": "https://github.com/epicsagas",
          "avatar": "https://avatars.githubusercontent.com/u/39856742"
        },
        {
          "username": "leoneparise",
          "href": "https://github.com/leoneparise",
          "avatar": "https://avatars.githubusercontent.com/u/1442927"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 957,
      "added_stars": 1869,
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
          "username": "hsusul",
          "href": "https://github.com/hsusul",
          "avatar": "https://avatars.githubusercontent.com/u/231806842"
        }
      ]
    },
    {
      "author": "WorldFlowAI",
      "repo": "everything-claude-code",
      "avatar": "https://github.com/WorldFlowAI.png",
      "repo_link": "https://github.com/WorldFlowAI/everything-claude-code",
      "desc": "Claude Code toolkit - agents, commands, skills, rules, and hooks for productive AI-assisted development",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 387,
      "added_stars": 700,
      "builtBy": [
        {
          "username": "affaan-m",
          "href": "https://github.com/affaan-m",
          "avatar": "https://avatars.githubusercontent.com/u/124439313"
        },
        {
          "username": "gzb1128",
          "href": "https://github.com/gzb1128",
          "avatar": "https://avatars.githubusercontent.com/u/55176411"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "zbennett10",
          "href": "https://github.com/zbennett10",
          "avatar": "https://avatars.githubusercontent.com/u/19748368"
        },
        {
          "username": "zerx-lab",
          "href": "https://github.com/zerx-lab",
          "avatar": "https://avatars.githubusercontent.com/u/161401688"
        }
      ]
    },
    {
      "author": "bilawalsidhu",
      "repo": "gods-eye-view",
      "avatar": "https://github.com/bilawalsidhu.png",
      "repo_link": "https://github.com/bilawalsidhu/gods-eye-view",
      "desc": "A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3852,
      "added_stars": 4497,
      "builtBy": [
        {
          "username": "bilawalsidhu",
          "href": "https://github.com/bilawalsidhu",
          "avatar": "https://avatars.githubusercontent.com/u/106619546"
        },
        {
          "username": "ethanstoner",
          "href": "https://github.com/ethanstoner",
          "avatar": "https://avatars.githubusercontent.com/u/177599791"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "yangsongsf",
          "href": "https://github.com/yangsongsf",
          "avatar": "https://avatars.githubusercontent.com/u/4534677"
        },
        {
          "username": "prajwal-raj",
          "href": "https://github.com/prajwal-raj",
          "avatar": "https://avatars.githubusercontent.com/u/49208092"
        }
      ]
    },
    {
      "author": "facebook",
      "repo": "stylex",
      "avatar": "https://github.com/facebook.png",
      "repo_link": "https://github.com/facebook/stylex",
      "desc": "StyleX is the styling system for ambitious user interfaces.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 473,
      "added_stars": 183,
      "builtBy": [
        {
          "username": "nmn",
          "href": "https://github.com/nmn",
          "avatar": "https://avatars.githubusercontent.com/u/3582514"
        },
        {
          "username": "mellyeliu",
          "href": "https://github.com/mellyeliu",
          "avatar": "https://avatars.githubusercontent.com/u/64865235"
        },
        {
          "username": "henryqdineen",
          "href": "https://github.com/henryqdineen",
          "avatar": "https://avatars.githubusercontent.com/u/682132"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 7456,
      "added_stars": 1722,
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
          "username": "njcameron",
          "href": "https://github.com/njcameron",
          "avatar": "https://avatars.githubusercontent.com/u/1101879"
        },
        {
          "username": "Jiliac",
          "href": "https://github.com/Jiliac",
          "avatar": "https://avatars.githubusercontent.com/u/5956866"
        },
        {
          "username": "basseko",
          "href": "https://github.com/basseko",
          "avatar": "https://avatars.githubusercontent.com/u/20099808"
        }
      ]
    },
    {
      "author": "alyssaxuu",
      "repo": "screenity",
      "avatar": "https://github.com/alyssaxuu.png",
      "repo_link": "https://github.com/alyssaxuu/screenity",
      "desc": "The free and privacy-friendly screen recorder with no limits 🎥",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1521,
      "added_stars": 52,
      "builtBy": [
        {
          "username": "alyssaxuu",
          "href": "https://github.com/alyssaxuu",
          "avatar": "https://avatars.githubusercontent.com/u/7581348"
        },
        {
          "username": "harad",
          "href": "https://github.com/harad",
          "avatar": "https://avatars.githubusercontent.com/u/16905768"
        },
        {
          "username": "erickvils",
          "href": "https://github.com/erickvils",
          "avatar": "https://avatars.githubusercontent.com/u/28757161"
        },
        {
          "username": "pranjalagg",
          "href": "https://github.com/pranjalagg",
          "avatar": "https://avatars.githubusercontent.com/u/54495980"
        },
        {
          "username": "jordigg",
          "href": "https://github.com/jordigg",
          "avatar": "https://avatars.githubusercontent.com/u/404331"
        }
      ]
    },
    {
      "author": "JoeanAmier",
      "repo": "TikTokDownloader",
      "avatar": "https://github.com/JoeanAmier.png",
      "repo_link": "https://github.com/JoeanAmier/TikTokDownloader",
      "desc": "抖音 / TikTok 平台作品下载/数据采集工具",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2712,
      "added_stars": 158,
      "builtBy": [
        {
          "username": "JoeanAmier",
          "href": "https://github.com/JoeanAmier",
          "avatar": "https://avatars.githubusercontent.com/u/49263334"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "yjagh",
          "href": "https://github.com/yjagh",
          "avatar": "https://avatars.githubusercontent.com/u/20411337"
        },
        {
          "username": "Johnserf-Seed",
          "href": "https://github.com/Johnserf-Seed",
          "avatar": "https://avatars.githubusercontent.com/u/40727745"
        }
      ]
    },
    {
      "author": "bigskysoftware",
      "repo": "htmx",
      "avatar": "https://github.com/bigskysoftware.png",
      "repo_link": "https://github.com/bigskysoftware/htmx",
      "desc": "</> htmx - high power tools for HTML",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1653,
      "added_stars": 141,
      "builtBy": [
        {
          "username": "1cg",
          "href": "https://github.com/1cg",
          "avatar": "https://avatars.githubusercontent.com/u/469183"
        },
        {
          "username": "bencroker",
          "href": "https://github.com/bencroker",
          "avatar": "https://avatars.githubusercontent.com/u/57572400"
        },
        {
          "username": "benpate",
          "href": "https://github.com/benpate",
          "avatar": "https://avatars.githubusercontent.com/u/4381040"
        },
        {
          "username": "alexpetros",
          "href": "https://github.com/alexpetros",
          "avatar": "https://avatars.githubusercontent.com/u/23287457"
        },
        {
          "username": "Telroshan",
          "href": "https://github.com/Telroshan",
          "avatar": "https://avatars.githubusercontent.com/u/19146183"
        }
      ]
    },
    {
      "author": "alam00000",
      "repo": "bentopdf",
      "avatar": "https://github.com/alam00000.png",
      "repo_link": "https://github.com/alam00000/bentopdf",
      "desc": "The Privacy First PDF Toolkit",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1318,
      "added_stars": 304,
      "builtBy": [
        {
          "username": "alam00000",
          "href": "https://github.com/alam00000",
          "avatar": "https://avatars.githubusercontent.com/u/50314772"
        },
        {
          "username": "Skillkiller",
          "href": "https://github.com/Skillkiller",
          "avatar": "https://avatars.githubusercontent.com/u/18444809"
        },
        {
          "username": "Stephan-P",
          "href": "https://github.com/Stephan-P",
          "avatar": "https://avatars.githubusercontent.com/u/10008599"
        }
      ]
    },
    {
      "author": "jackwener",
      "repo": "OpenCLI",
      "avatar": "https://github.com/jackwener.png",
      "repo_link": "https://github.com/jackwener/OpenCLI",
      "desc": "Make Any Website into CLI & Use your logged-in browser by AI agent.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2850,
      "added_stars": 317,
      "builtBy": [
        {
          "username": "jackwener",
          "href": "https://github.com/jackwener",
          "avatar": "https://avatars.githubusercontent.com/u/30525741"
        },
        {
          "username": "Benjamin-eecs",
          "href": "https://github.com/Benjamin-eecs",
          "avatar": "https://avatars.githubusercontent.com/u/32269413"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Astro-Han",
          "href": "https://github.com/Astro-Han",
          "avatar": "https://avatars.githubusercontent.com/u/255364436"
        },
        {
          "username": "ByteYue",
          "href": "https://github.com/ByteYue",
          "avatar": "https://avatars.githubusercontent.com/u/43750022"
        }
      ]
    },
    {
      "author": "FB208",
      "repo": "OpenBidKit_Yibiao",
      "avatar": "https://github.com/FB208.png",
      "repo_link": "https://github.com/FB208/OpenBidKit_Yibiao",
      "desc": "开箱即用的AI标书编写工具，标书AI生成工具，投标工具箱、知识库、标书查重、废标项检查，完全开源免费，欢迎使用",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 734,
      "added_stars": 248,
      "builtBy": [
        {
          "username": "FB208",
          "href": "https://github.com/FB208",
          "avatar": "https://avatars.githubusercontent.com/u/8197476"
        },
        {
          "username": "wll447",
          "href": "https://github.com/wll447",
          "avatar": "https://avatars.githubusercontent.com/u/261154642"
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
          "username": "yibiaoai",
          "href": "https://github.com/yibiaoai",
          "avatar": "https://avatars.githubusercontent.com/u/224491262"
        }
      ]
    },
    {
      "author": "jgraph",
      "repo": "drawio",
      "avatar": "https://github.com/jgraph.png",
      "repo_link": "https://github.com/jgraph/drawio",
      "desc": "draw.io is a JavaScript, client-side editor for general diagramming.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1225,
      "added_stars": 150,
      "builtBy": [
        {
          "username": "davidjgraph",
          "href": "https://github.com/davidjgraph",
          "avatar": "https://avatars.githubusercontent.com/u/1761087"
        },
        {
          "username": "alderg",
          "href": "https://github.com/alderg",
          "avatar": "https://avatars.githubusercontent.com/u/921200"
        },
        {
          "username": "mediaslav",
          "href": "https://github.com/mediaslav",
          "avatar": "https://avatars.githubusercontent.com/u/472418"
        },
        {
          "username": "m-mohamedin",
          "href": "https://github.com/m-mohamedin",
          "avatar": "https://avatars.githubusercontent.com/u/24944765"
        },
        {
          "username": "MJomaa",
          "href": "https://github.com/MJomaa",
          "avatar": "https://avatars.githubusercontent.com/u/9029497"
        }
      ]
    },
    {
      "author": "louislam",
      "repo": "uptime-kuma",
      "avatar": "https://github.com/louislam.png",
      "repo_link": "https://github.com/louislam/uptime-kuma",
      "desc": "A fancy self-hosted monitoring tool",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 8374,
      "added_stars": 313,
      "builtBy": [
        {
          "username": "louislam",
          "href": "https://github.com/louislam",
          "avatar": "https://avatars.githubusercontent.com/u/1336778"
        },
        {
          "username": "CommanderStorm",
          "href": "https://github.com/CommanderStorm",
          "avatar": "https://avatars.githubusercontent.com/u/26258709"
        },
        {
          "username": "chakflying",
          "href": "https://github.com/chakflying",
          "avatar": "https://avatars.githubusercontent.com/u/3271800"
        },
        {
          "username": "Saibamen",
          "href": "https://github.com/Saibamen",
          "avatar": "https://avatars.githubusercontent.com/u/905878"
        },
        {
          "username": "Computroniks",
          "href": "https://github.com/Computroniks",
          "avatar": "https://avatars.githubusercontent.com/u/67638596"
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
      "by": "kuberwastaken",
      "descendants": 42,
      "id": 49605767,
      "kids": [
        49606293,
        49606204,
        49605971,
        49606143,
        49606117,
        49606252,
        49606059,
        49606228,
        49606259
      ],
      "score": 105,
      "time": 1788843983,
      "title": "Mistral raises €3B to make sovereign, open-weight AI the technology frontier",
      "type": "story",
      "url": "https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/"
    },
    {
      "by": "saikatsg",
      "descendants": 66,
      "id": 49605691,
      "kids": [
        49606073,
        49605803,
        49605819,
        49605795,
        49606011,
        49605920,
        49606224,
        49606270,
        49606288,
        49605921,
        49606042,
        49605835,
        49605872,
        49605858,
        49605896,
        49605832,
        49606015,
        49605866,
        49605771
      ],
      "score": 106,
      "time": 1788842890,
      "title": "We have a year to fix security everywhere",
      "type": "story",
      "url": "https://jyn.dev/a-year-to-fix-security/"
    },
    {
      "by": "procedurecall",
      "descendants": 7,
      "id": 49605915,
      "kids": [
        49606078,
        49606322,
        49606230
      ],
      "score": 49,
      "time": 1788846148,
      "title": "Navier-Stokes – Tristan Buckmaster [pdf]",
      "type": "story",
      "url": "https://cims.nyu.edu/~tristanb/statement.pdf"
    },
    {
      "by": "ahlCVA",
      "descendants": 45,
      "id": 49604637,
      "kids": [
        49604929,
        49604867,
        49604918,
        49604923,
        49605738,
        49605491,
        49605294,
        49605020,
        49604987,
        49605534,
        49605260,
        49604841
      ],
      "score": 245,
      "time": 1788830219,
      "title": "I've factored the RSA keys of a Certificate Authority from the 90s",
      "type": "story",
      "url": "https://mcpherrin.ca/2026/09/07/rsa.html"
    },
    {
      "by": "dotcoma",
      "descendants": 21,
      "id": 49605782,
      "kids": [
        49606210,
        49606070,
        49606024,
        49605882,
        49606091,
        49605876,
        49605949,
        49606088,
        49606020,
        49606141,
        49605923,
        49605871
      ],
      "score": 47,
      "time": 1788844236,
      "title": "My Feed, My Way",
      "type": "story",
      "url": "https://www.pm.gov.au/media/my-feed-my-way"
    },
    {
      "by": "alvins82",
      "descendants": 21,
      "id": 49605433,
      "kids": [
        49606211,
        49606008,
        49605789,
        49606305,
        49605929,
        49606032,
        49605788,
        49605744,
        49605967,
        49605999,
        49605776,
        49605838,
        49605434,
        49606054
      ],
      "score": 37,
      "time": 1788838945,
      "title": "I tested 10 model/harness combinations on the same Three.js task",
      "type": "story",
      "url": "https://alvins82.github.io/hangar-harness-model-tests/"
    },
    {
      "by": "alixanderwang",
      "descendants": 12,
      "id": 49604150,
      "kids": [
        49606264,
        49604567,
        49605287,
        49604254,
        49604560,
        49604922,
        49605341,
        49604470,
        49604538,
        49604527,
        49605316,
        49604446
      ],
      "score": 173,
      "time": 1788824262,
      "title": "TALA Is Open-Source",
      "type": "story",
      "url": "https://d2lang.com/blog/tala-is-open-source/"
    },
    {
      "by": "drasticactions",
      "descendants": 32,
      "id": 49605424,
      "kids": [
        49606055,
        49605984,
        49605889,
        49606050,
        49606104,
        49605870,
        49605888,
        49605990,
        49605986,
        49606223,
        49606014,
        49606021
      ],
      "score": 53,
      "time": 1788838824,
      "title": "GamersNexus and LG: Or why rooting your TV is a bad idea",
      "type": "story",
      "url": "https://leaflet.pub/p/did:plc:yhgc5rlqhoezrx6fbawajxlh/3muwrqenzfk2n"
    },
    {
      "by": "vinhnx",
      "descendants": 7,
      "id": 49605246,
      "kids": [
        49605773,
        49605759,
        49605679,
        49605704,
        49605816,
        49605809,
        49606127,
        49606076,
        49605413
      ],
      "score": 50,
      "time": 1788836296,
      "title": "How well do agents use test/verification techniques?",
      "type": "story",
      "url": "https://danluu.com/agentic-testing/"
    },
    {
      "by": "Re-Tails",
      "descendants": 10,
      "id": 49605511,
      "kids": [
        49605780,
        49605696,
        49605991
      ],
      "score": 25,
      "time": 1788840380,
      "title": "Arm Mali G2-Ultra NX GPU: desktop-class mobile gameplay with AI-native graphics",
      "type": "story",
      "url": "https://newsroom.arm.com/blog/arm-mali-g2-ultra-nx-ai-native-mobile-graphics"
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
      "title": "A faster way to convert a timestamp to Hour, Min, Sec",
      "url": "https://www.benjoffe.com/fast-time-of-day",
      "score": 96,
      "comments": 10,
      "tags": [
        "c++",
        "performance"
      ],
      "id": "wolwwd"
    },
    {
      "title": "The shortest IPv6 addresses",
      "url": "https://ache.one/notes/vanity-ipv6",
      "score": 40,
      "comments": 16,
      "tags": [
        "networking"
      ],
      "id": "vdalin"
    },
    {
      "title": "I changed my license to EUPL",
      "url": "https://bergie.iki.fi/blog/eupl/",
      "score": 12,
      "comments": 3,
      "tags": [
        "law"
      ],
      "id": "4ntizu"
    },
    {
      "title": "What are you using as a task manager and as a people manager?",
      "url": "",
      "score": 8,
      "comments": 13,
      "tags": [
        "ask",
        "philosophy"
      ],
      "id": "0t6c5f"
    },
    {
      "title": "Emacs Bedrock 2.0 Released",
      "url": "https://lambdaland.org/posts/2026-09-06-bedrock-v2/",
      "score": 12,
      "comments": 0,
      "tags": [
        "emacs"
      ],
      "id": "sukgeg"
    },
    {
      "title": "It took a year to ship WebAssembly in Anubis",
      "url": "https://anubis.techaro.lol/blog/2026/anubis-wasm/",
      "score": 96,
      "comments": 12,
      "tags": [
        "rust",
        "wasm"
      ],
      "id": "aokzbg"
    },
    {
      "title": "bzip3: A better and stronger spiritual successor to BZip2",
      "url": "https://github.com/iczelia/bzip3",
      "score": 20,
      "comments": 4,
      "tags": [
        "compsci",
        "performance"
      ],
      "id": "9coxwz"
    },
    {
      "title": "Rust debugging survey 2026 results",
      "url": "https://blog.rust-lang.org/2026/09/07/rust-debugging-survey-2026-results/",
      "score": 25,
      "comments": 1,
      "tags": [
        "rust"
      ],
      "id": "ku4hwg"
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
      "author": "semantica-agi",
      "repo": "semantica",
      "avatar": "https://github.com/semantica-agi.png",
      "repo_link": "https://github.com/semantica-agi/semantica",
      "desc": "Graph-Native Infrastructure for Context and Accountable AI Systems",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1390,
      "added_stars": 10142,
      "builtBy": [
        {
          "username": "KaifAhmad1",
          "href": "https://github.com/KaifAhmad1",
          "avatar": "https://avatars.githubusercontent.com/u/98801504"
        },
        {
          "username": "Sameer6305",
          "href": "https://github.com/Sameer6305",
          "avatar": "https://avatars.githubusercontent.com/u/169603553"
        },
        {
          "username": "ZohaibHassan16",
          "href": "https://github.com/ZohaibHassan16",
          "avatar": "https://avatars.githubusercontent.com/u/109234410"
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
      "repo": "claude-plugins-community",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-community",
      "desc": "Community plugin marketplace for Claude Cowork and Claude Code. Read-only mirror — submit plugins at clau.de/plugin-directory-submission.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 278,
      "added_stars": 3285,
      "builtBy": [
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
          "username": "tobinsouth",
          "href": "https://github.com/tobinsouth",
          "avatar": "https://avatars.githubusercontent.com/u/32489862"
        },
        {
          "username": "ThariqS",
          "href": "https://github.com/ThariqS",
          "avatar": "https://avatars.githubusercontent.com/u/140827"
        }
      ]
    },
    {
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2745,
      "added_stars": 7993,
      "builtBy": [
        {
          "username": "qin-ctx",
          "href": "https://github.com/qin-ctx",
          "avatar": "https://avatars.githubusercontent.com/u/234610432"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ZaynJarvis",
          "href": "https://github.com/ZaynJarvis",
          "avatar": "https://avatars.githubusercontent.com/u/31875147"
        },
        {
          "username": "zhoujh01",
          "href": "https://github.com/zhoujh01",
          "avatar": "https://avatars.githubusercontent.com/u/242402223"
        },
        {
          "username": "r266-tech",
          "href": "https://github.com/r266-tech",
          "avatar": "https://avatars.githubusercontent.com/u/233881301"
        }
      ]
    },
    {
      "author": "youssofal",
      "repo": "MTPLX",
      "avatar": "https://github.com/youssofal.png",
      "repo_link": "https://github.com/youssofal/MTPLX",
      "desc": "3x faster speeds on MLX | Qwen 3.8 27B | Native MTP Speculative Decoding On Apple Silicon With No External Drafter.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 159,
      "added_stars": 1000,
      "builtBy": [
        {
          "username": "youssofal",
          "href": "https://github.com/youssofal",
          "avatar": "https://avatars.githubusercontent.com/u/66418316"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "davidtai",
          "href": "https://github.com/davidtai",
          "avatar": "https://avatars.githubusercontent.com/u/8346495"
        },
        {
          "username": "Cyb3rb1ade",
          "href": "https://github.com/Cyb3rb1ade",
          "avatar": "https://avatars.githubusercontent.com/u/84099452"
        }
      ]
    },
    {
      "author": "cactus-compute",
      "repo": "needle",
      "avatar": "https://github.com/cactus-compute.png",
      "repo_link": "https://github.com/cactus-compute/needle",
      "desc": "14MB foundation model for tiny devices; phones, wearables, smart home, and robots.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 674,
      "added_stars": 7126,
      "builtBy": [
        {
          "username": "HenryNdubuaku",
          "href": "https://github.com/HenryNdubuaku",
          "avatar": "https://avatars.githubusercontent.com/u/26547576"
        },
        {
          "username": "ncylich",
          "href": "https://github.com/ncylich",
          "avatar": "https://avatars.githubusercontent.com/u/75380243"
        },
        {
          "username": "kar-m",
          "href": "https://github.com/kar-m",
          "avatar": "https://avatars.githubusercontent.com/u/52249278"
        },
        {
          "username": "justinl66",
          "href": "https://github.com/justinl66",
          "avatar": "https://avatars.githubusercontent.com/u/128657146"
        },
        {
          "username": "LeonSGP43",
          "href": "https://github.com/LeonSGP43",
          "avatar": "https://avatars.githubusercontent.com/u/154585401"
        }
      ]
    },
    {
      "author": "3b1b",
      "repo": "manim",
      "avatar": "https://github.com/3b1b.png",
      "repo_link": "https://github.com/3b1b/manim",
      "desc": "Animation engine for explanatory math videos",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7675,
      "added_stars": 4285,
      "builtBy": [
        {
          "username": "3b1b",
          "href": "https://github.com/3b1b",
          "avatar": "https://avatars.githubusercontent.com/u/11601040"
        },
        {
          "username": "TonyCrane",
          "href": "https://github.com/TonyCrane",
          "avatar": "https://avatars.githubusercontent.com/u/44120331"
        },
        {
          "username": "bhbr",
          "href": "https://github.com/bhbr",
          "avatar": "https://avatars.githubusercontent.com/u/13440601"
        },
        {
          "username": "YishiMichael",
          "href": "https://github.com/YishiMichael",
          "avatar": "https://avatars.githubusercontent.com/u/50232075"
        },
        {
          "username": "eulertour",
          "href": "https://github.com/eulertour",
          "avatar": "https://avatars.githubusercontent.com/u/43117506"
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
      "forks": 2600,
      "added_stars": 10716,
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
          "username": "paoloantinori",
          "href": "https://github.com/paoloantinori",
          "avatar": "https://avatars.githubusercontent.com/u/1520602"
        },
        {
          "username": "psiberfunk",
          "href": "https://github.com/psiberfunk",
          "avatar": "https://avatars.githubusercontent.com/u/19777571"
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
      "forks": 52669,
      "added_stars": 22977,
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
          "username": "ArindamOSS",
          "href": "https://github.com/ArindamOSS",
          "avatar": "https://avatars.githubusercontent.com/u/278394627"
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
        }
      ]
    },
    {
      "author": "vitali87",
      "repo": "code-graph-rag",
      "avatar": "https://github.com/vitali87.png",
      "repo_link": "https://github.com/vitali87/code-graph-rag",
      "desc": "The ultimate RAG for your monorepo. Query, understand, and edit multi-language codebases with the power of AI and knowledge graphs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 665,
      "added_stars": 2529,
      "builtBy": [
        {
          "username": "vitali87",
          "href": "https://github.com/vitali87",
          "avatar": "https://avatars.githubusercontent.com/u/22404335"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ZuebeyirEser",
          "href": "https://github.com/ZuebeyirEser",
          "avatar": "https://avatars.githubusercontent.com/u/140069682"
        }
      ]
    },
    {
      "author": "megadose",
      "repo": "holehe",
      "avatar": "https://github.com/megadose.png",
      "repo_link": "https://github.com/megadose/holehe",
      "desc": "holehe allows you to check if the mail is used on different sites like twitter, instagram and will retrieve information on sites with the forgotten password function.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1880,
      "added_stars": 2795,
      "builtBy": [
        {
          "username": "megadose",
          "href": "https://github.com/megadose",
          "avatar": "https://avatars.githubusercontent.com/u/51822495"
        },
        {
          "username": "Eriys",
          "href": "https://github.com/Eriys",
          "avatar": "https://avatars.githubusercontent.com/u/70079220"
        },
        {
          "username": "novitae",
          "href": "https://github.com/novitae",
          "avatar": "https://avatars.githubusercontent.com/u/85891169"
        },
        {
          "username": "mxrch",
          "href": "https://github.com/mxrch",
          "avatar": "https://avatars.githubusercontent.com/u/17338428"
        },
        {
          "username": "byt3loss",
          "href": "https://github.com/byt3loss",
          "avatar": "https://avatars.githubusercontent.com/u/72035730"
        }
      ]
    },
    {
      "author": "MiaAI-Lab",
      "repo": "DeepSeek-v4-Flash-DSpark-2x-DGX-Spark",
      "avatar": "https://github.com/MiaAI-Lab.png",
      "repo_link": "https://github.com/MiaAI-Lab/DeepSeek-v4-Flash-DSpark-2x-DGX-Spark",
      "desc": "DeepSeek-v4-Flash 0731 recipe for 2x DGX Sparks",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 178,
      "added_stars": 809,
      "builtBy": [
        {
          "username": "MiaAI-Lab",
          "href": "https://github.com/MiaAI-Lab",
          "avatar": "https://avatars.githubusercontent.com/u/83042094"
        },
        {
          "username": "plotarmordev",
          "href": "https://github.com/plotarmordev",
          "avatar": "https://avatars.githubusercontent.com/u/299844489"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "de1tydev",
          "href": "https://github.com/de1tydev",
          "avatar": "https://avatars.githubusercontent.com/u/7804799"
        },
        {
          "username": "0xSero",
          "href": "https://github.com/0xSero",
          "avatar": "https://avatars.githubusercontent.com/u/69639595"
        }
      ]
    },
    {
      "author": "jundot",
      "repo": "omlx",
      "avatar": "https://github.com/jundot.png",
      "repo_link": "https://github.com/jundot/omlx",
      "desc": "LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1835,
      "added_stars": 3070,
      "builtBy": [
        {
          "username": "jundot",
          "href": "https://github.com/jundot",
          "avatar": "https://avatars.githubusercontent.com/u/64250138"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cfbraun",
          "href": "https://github.com/cfbraun",
          "avatar": "https://avatars.githubusercontent.com/u/6842433"
        },
        {
          "username": "JimStenstrom",
          "href": "https://github.com/JimStenstrom",
          "avatar": "https://avatars.githubusercontent.com/u/30080538"
        }
      ]
    },
    {
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Local UI to run and train LLMs and diffusion models. Supports GGUF, MLX, Qwen3.8, DeepSeek-V4, MiniMax-H3, Gemma 4, FLUX and more.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6900,
      "added_stars": 6317,
      "builtBy": [
        {
          "username": "danielhanchen",
          "href": "https://github.com/danielhanchen",
          "avatar": "https://avatars.githubusercontent.com/u/23090290"
        },
        {
          "username": "shimmyshimmer",
          "href": "https://github.com/shimmyshimmer",
          "avatar": "https://avatars.githubusercontent.com/u/107991372"
        },
        {
          "username": "wasimysaid",
          "href": "https://github.com/wasimysaid",
          "avatar": "https://avatars.githubusercontent.com/u/112766706"
        },
        {
          "username": "Datta0",
          "href": "https://github.com/Datta0",
          "avatar": "https://avatars.githubusercontent.com/u/39181234"
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
      "forks": 3426,
      "added_stars": 3766,
      "builtBy": [
        {
          "username": "p-e-w",
          "href": "https://github.com/p-e-w",
          "avatar": "https://avatars.githubusercontent.com/u/2702526"
        },
        {
          "username": "Vinay-Umrethe",
          "href": "https://github.com/Vinay-Umrethe",
          "avatar": "https://avatars.githubusercontent.com/u/175500353"
        },
        {
          "username": "anrp",
          "href": "https://github.com/anrp",
          "avatar": "https://avatars.githubusercontent.com/u/1325515"
        },
        {
          "username": "spikymoth",
          "href": "https://github.com/spikymoth",
          "avatar": "https://avatars.githubusercontent.com/u/133602907"
        }
      ]
    },
    {
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 18726,
      "added_stars": 19986,
      "builtBy": [
        {
          "username": "harry0703",
          "href": "https://github.com/harry0703",
          "avatar": "https://avatars.githubusercontent.com/u/4928832"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
          "username": "Mihir7027",
          "href": "https://github.com/Mihir7027",
          "avatar": "https://avatars.githubusercontent.com/u/41247825"
        }
      ]
    },
    {
      "author": "blader",
      "repo": "humanizer",
      "avatar": "https://github.com/blader.png",
      "repo_link": "https://github.com/blader/humanizer",
      "desc": "Agent skill that removes signs of AI-generated writing from text",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3714,
      "added_stars": 10865,
      "builtBy": [
        {
          "username": "blader",
          "href": "https://github.com/blader",
          "avatar": "https://avatars.githubusercontent.com/u/1672"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "Scott-Emberson",
          "href": "https://github.com/Scott-Emberson",
          "avatar": "https://avatars.githubusercontent.com/u/8268155"
        },
        {
          "username": "warp-agent",
          "href": "https://github.com/warp-agent",
          "avatar": "https://avatars.githubusercontent.com/u/243858445"
        }
      ]
    },
    {
      "author": "Tencent",
      "repo": "AI-Infra-Guard",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/AI-Infra-Guard",
      "desc": "A full-stack AI Red Teaming platform securing AI ecosystems via Agent Scan, Skills Scan, MCP scan, AI Infra scan and LLM jailbreak evaluation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 577,
      "added_stars": 1769,
      "builtBy": [
        {
          "username": "boy-hack",
          "href": "https://github.com/boy-hack",
          "avatar": "https://avatars.githubusercontent.com/u/18695984"
        },
        {
          "username": "aigsec",
          "href": "https://github.com/aigsec",
          "avatar": "https://avatars.githubusercontent.com/u/19813635"
        },
        {
          "username": "rocie799",
          "href": "https://github.com/rocie799",
          "avatar": "https://avatars.githubusercontent.com/u/28682217"
        },
        {
          "username": "zonalalala",
          "href": "https://github.com/zonalalala",
          "avatar": "https://avatars.githubusercontent.com/u/170615914"
        },
        {
          "username": "y3oZ",
          "href": "https://github.com/y3oZ",
          "avatar": "https://avatars.githubusercontent.com/u/55682544"
        }
      ]
    },
    {
      "author": "abi",
      "repo": "screenshot-to-code",
      "avatar": "https://github.com/abi.png",
      "repo_link": "https://github.com/abi/screenshot-to-code",
      "desc": "Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9510,
      "added_stars": 4411,
      "builtBy": [
        {
          "username": "abi",
          "href": "https://github.com/abi",
          "avatar": "https://avatars.githubusercontent.com/u/23818"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "clean99",
          "href": "https://github.com/clean99",
          "avatar": "https://avatars.githubusercontent.com/u/53188310"
        },
        {
          "username": "kachbit",
          "href": "https://github.com/kachbit",
          "avatar": "https://avatars.githubusercontent.com/u/59241904"
        }
      ]
    },
    {
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3977,
      "added_stars": 10847,
      "builtBy": [
        {
          "username": "TKassis",
          "href": "https://github.com/TKassis",
          "avatar": "https://avatars.githubusercontent.com/u/9168908"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "borealBytes",
          "href": "https://github.com/borealBytes",
          "avatar": "https://avatars.githubusercontent.com/u/206480607"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "donnemartin",
      "repo": "system-design-primer",
      "avatar": "https://github.com/donnemartin.png",
      "repo_link": "https://github.com/donnemartin/system-design-primer",
      "desc": "Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 58293,
      "added_stars": 7333,
      "builtBy": [
        {
          "username": "donnemartin",
          "href": "https://github.com/donnemartin",
          "avatar": "https://avatars.githubusercontent.com/u/5458997"
        },
        {
          "username": "cclauss",
          "href": "https://github.com/cclauss",
          "avatar": "https://avatars.githubusercontent.com/u/3709715"
        },
        {
          "username": "satob",
          "href": "https://github.com/satob",
          "avatar": "https://avatars.githubusercontent.com/u/171818"
        },
        {
          "username": "fluency03",
          "href": "https://github.com/fluency03",
          "avatar": "https://avatars.githubusercontent.com/u/7440735"
        },
        {
          "username": "luisbg",
          "href": "https://github.com/luisbg",
          "avatar": "https://avatars.githubusercontent.com/u/303663"
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
      "forks": 7728,
      "added_stars": 5141,
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
          "username": "readlnh",
          "href": "https://github.com/readlnh",
          "avatar": "https://avatars.githubusercontent.com/u/16349082"
        },
        {
          "username": "wangzhaode",
          "href": "https://github.com/wangzhaode",
          "avatar": "https://avatars.githubusercontent.com/u/8401806"
        },
        {
          "username": "JustinGuese",
          "href": "https://github.com/JustinGuese",
          "avatar": "https://avatars.githubusercontent.com/u/9588843"
        }
      ]
    },
    {
      "author": "index-tts",
      "repo": "index-tts",
      "avatar": "https://github.com/index-tts.png",
      "repo_link": "https://github.com/index-tts/index-tts",
      "desc": "An Industrial-Level Controllable and Efficient Zero-Shot Text-To-Speech System",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2847,
      "added_stars": 1397,
      "builtBy": [
        {
          "username": "Arcitec",
          "href": "https://github.com/Arcitec",
          "avatar": "https://avatars.githubusercontent.com/u/38923130"
        },
        {
          "username": "nanaoto",
          "href": "https://github.com/nanaoto",
          "avatar": "https://avatars.githubusercontent.com/u/19526637"
        },
        {
          "username": "yrom",
          "href": "https://github.com/yrom",
          "avatar": "https://avatars.githubusercontent.com/u/2888674"
        },
        {
          "username": "bilisjc",
          "href": "https://github.com/bilisjc",
          "avatar": "https://avatars.githubusercontent.com/u/105334801"
        },
        {
          "username": "index-tts",
          "href": "https://github.com/index-tts",
          "avatar": "https://avatars.githubusercontent.com/u/196291161"
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
      "author": "THU-MAIC",
      "repo": "OpenMAIC",
      "avatar": "https://github.com/THU-MAIC.png",
      "repo_link": "https://github.com/THU-MAIC/OpenMAIC",
      "desc": "Open Multi-Agent Interactive Classroom — Get an immersive, multi-agent learning experience in just one click",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5392,
      "added_stars": 12423,
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
          "username": "ly-wang19",
          "href": "https://github.com/ly-wang19",
          "avatar": "https://avatars.githubusercontent.com/u/94427531"
        }
      ]
    },
    {
      "author": "PrimeIntellect-ai",
      "repo": "prime-agent",
      "avatar": "https://github.com/PrimeIntellect-ai.png",
      "repo_link": "https://github.com/PrimeIntellect-ai/prime-agent",
      "desc": "A self-improving RLM agent for coding workflows and long-running autonomous tasks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2208,
      "added_stars": 15094,
      "builtBy": [
        {
          "username": "kevinjosethomas",
          "href": "https://github.com/kevinjosethomas",
          "avatar": "https://avatars.githubusercontent.com/u/46242684"
        },
        {
          "username": "snimu",
          "href": "https://github.com/snimu",
          "avatar": "https://avatars.githubusercontent.com/u/110109193"
        },
        {
          "username": "sethkarten",
          "href": "https://github.com/sethkarten",
          "avatar": "https://avatars.githubusercontent.com/u/32787133"
        },
        {
          "username": "alexzhang13",
          "href": "https://github.com/alexzhang13",
          "avatar": "https://avatars.githubusercontent.com/u/13501287"
        },
        {
          "username": "samsja",
          "href": "https://github.com/samsja",
          "avatar": "https://avatars.githubusercontent.com/u/55492238"
        }
      ]
    },
    {
      "author": "apache",
      "repo": "maka",
      "avatar": "https://github.com/apache.png",
      "repo_link": "https://github.com/apache/maka",
      "desc": "Apache Maka (Incubating) is a high-performance agent workspace that keeps a complete record of everything it did.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 467,
      "added_stars": 3715,
      "builtBy": [
        {
          "username": "jackwener",
          "href": "https://github.com/jackwener",
          "avatar": "https://avatars.githubusercontent.com/u/30525741"
        },
        {
          "username": "Astro-Han",
          "href": "https://github.com/Astro-Han",
          "avatar": "https://avatars.githubusercontent.com/u/255364436"
        },
        {
          "username": "likun666661",
          "href": "https://github.com/likun666661",
          "avatar": "https://avatars.githubusercontent.com/u/90952590"
        },
        {
          "username": "M4n5ter",
          "href": "https://github.com/M4n5ter",
          "avatar": "https://avatars.githubusercontent.com/u/68144809"
        },
        {
          "username": "me2seeks",
          "href": "https://github.com/me2seeks",
          "avatar": "https://avatars.githubusercontent.com/u/96464454"
        }
      ]
    },
    {
      "author": "CodebuffAI",
      "repo": "freebuff",
      "avatar": "https://github.com/CodebuffAI.png",
      "repo_link": "https://github.com/CodebuffAI/freebuff",
      "desc": "The free coding agent",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1270,
      "added_stars": 3337,
      "builtBy": [
        {
          "username": "jahooma",
          "href": "https://github.com/jahooma",
          "avatar": "https://avatars.githubusercontent.com/u/1593821"
        },
        {
          "username": "brandonkachen",
          "href": "https://github.com/brandonkachen",
          "avatar": "https://avatars.githubusercontent.com/u/9735006"
        },
        {
          "username": "charleslien",
          "href": "https://github.com/charleslien",
          "avatar": "https://avatars.githubusercontent.com/u/26100741"
        },
        {
          "username": "venkr",
          "href": "https://github.com/venkr",
          "avatar": "https://avatars.githubusercontent.com/u/21302375"
        }
      ]
    },
    {
      "author": "titanwings",
      "repo": "distilly",
      "avatar": "https://github.com/titanwings.png",
      "repo_link": "https://github.com/titanwings/distilly",
      "desc": "Distilly — Distill how they think into reusable Skills for any Agent or Bot. Formerly Colleague Skill（原同事 Skill）.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2132,
      "added_stars": 3755,
      "builtBy": [
        {
          "username": "titanwings",
          "href": "https://github.com/titanwings",
          "avatar": "https://avatars.githubusercontent.com/u/85022018"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "baichou6320-cpu",
          "href": "https://github.com/baichou6320-cpu",
          "avatar": "https://avatars.githubusercontent.com/u/172188635"
        },
        {
          "username": "KOR-Believer",
          "href": "https://github.com/KOR-Believer",
          "avatar": "https://avatars.githubusercontent.com/u/8975134"
        },
        {
          "username": "dajiaohuang",
          "href": "https://github.com/dajiaohuang",
          "avatar": "https://avatars.githubusercontent.com/u/108231307"
        }
      ]
    },
    {
      "author": "every-app",
      "repo": "open-seo",
      "avatar": "https://github.com/every-app.png",
      "repo_link": "https://github.com/every-app/open-seo",
      "desc": "Open source alternative to Semrush and Ahrefs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2246,
      "added_stars": 6965,
      "builtBy": [
        {
          "username": "bensenescu",
          "href": "https://github.com/bensenescu",
          "avatar": "https://avatars.githubusercontent.com/u/44480372"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jeremypenguin-max",
          "href": "https://github.com/jeremypenguin-max",
          "avatar": "https://avatars.githubusercontent.com/u/287046313"
        },
        {
          "username": "bookingseo",
          "href": "https://github.com/bookingseo",
          "avatar": "https://avatars.githubusercontent.com/u/68512992"
        },
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        }
      ]
    },
    {
      "author": "bookorbit",
      "repo": "bookorbit",
      "avatar": "https://github.com/bookorbit.png",
      "repo_link": "https://github.com/bookorbit/bookorbit",
      "desc": "BookOrbit: Your Reading Space",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 250,
      "added_stars": 2090,
      "builtBy": [
        {
          "username": "neonsolstice",
          "href": "https://github.com/neonsolstice",
          "avatar": "https://avatars.githubusercontent.com/u/18559658"
        },
        {
          "username": "chrismansell26",
          "href": "https://github.com/chrismansell26",
          "avatar": "https://avatars.githubusercontent.com/u/213777310"
        },
        {
          "username": "jadehawk",
          "href": "https://github.com/jadehawk",
          "avatar": "https://avatars.githubusercontent.com/u/333657"
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
      "forks": 3405,
      "added_stars": 6938,
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
        },
        {
          "username": "jasnoorgill",
          "href": "https://github.com/jasnoorgill",
          "avatar": "https://avatars.githubusercontent.com/u/5494586"
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
      "forks": 5423,
      "added_stars": 4955,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "maria-rcks",
          "href": "https://github.com/maria-rcks",
          "avatar": "https://avatars.githubusercontent.com/u/254055478"
        }
      ]
    },
    {
      "author": "apify",
      "repo": "apify-mcp-server",
      "avatar": "https://github.com/apify.png",
      "repo_link": "https://github.com/apify/apify-mcp-server",
      "desc": "The Apify MCP server enables your AI agents to extract data from social media, search engines, maps, e-commerce sites, or any other website using thousands of ready-made scrapers, crawlers, and automation tools available on the Apify Store.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 253,
      "added_stars": 3429,
      "builtBy": [
        {
          "username": "jirispilka",
          "href": "https://github.com/jirispilka",
          "avatar": "https://avatars.githubusercontent.com/u/19406805"
        },
        {
          "username": "MQ37",
          "href": "https://github.com/MQ37",
          "avatar": "https://avatars.githubusercontent.com/u/29043708"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "apify-service-account",
          "href": "https://github.com/apify-service-account",
          "avatar": "https://avatars.githubusercontent.com/u/64261774"
        },
        {
          "username": "jmikitova",
          "href": "https://github.com/jmikitova",
          "avatar": "https://avatars.githubusercontent.com/u/29228048"
        }
      ]
    },
    {
      "author": "can1357",
      "repo": "oh-my-pi",
      "avatar": "https://github.com/can1357.png",
      "repo_link": "https://github.com/can1357/oh-my-pi",
      "desc": "⌥ Coding agent with the IDE wired in",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3075,
      "added_stars": 7509,
      "builtBy": [
        {
          "username": "can1357",
          "href": "https://github.com/can1357",
          "avatar": "https://avatars.githubusercontent.com/u/11807264"
        },
        {
          "username": "roboomp",
          "href": "https://github.com/roboomp",
          "avatar": "https://avatars.githubusercontent.com/u/284758152"
        },
        {
          "username": "badlogic",
          "href": "https://github.com/badlogic",
          "avatar": "https://avatars.githubusercontent.com/u/514052"
        },
        {
          "username": "Mathews-Tom",
          "href": "https://github.com/Mathews-Tom",
          "avatar": "https://avatars.githubusercontent.com/u/9562152"
        },
        {
          "username": "metaphorics",
          "href": "https://github.com/metaphorics",
          "avatar": "https://avatars.githubusercontent.com/u/152830360"
        }
      ]
    },
    {
      "author": "lightningpixel",
      "repo": "modly",
      "avatar": "https://github.com/lightningpixel.png",
      "repo_link": "https://github.com/lightningpixel/modly",
      "desc": "Desktop app to generate 3D models from images or prompt using local AI — runs entirely on your GPU",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 704,
      "added_stars": 2614,
      "builtBy": [
        {
          "username": "lightningpixel",
          "href": "https://github.com/lightningpixel",
          "avatar": "https://avatars.githubusercontent.com/u/63157773"
        },
        {
          "username": "Lorchie",
          "href": "https://github.com/Lorchie",
          "avatar": "https://avatars.githubusercontent.com/u/16082197"
        },
        {
          "username": "iammojogo-sudo",
          "href": "https://github.com/iammojogo-sudo",
          "avatar": "https://avatars.githubusercontent.com/u/240378348"
        },
        {
          "username": "DrHepa",
          "href": "https://github.com/DrHepa",
          "avatar": "https://avatars.githubusercontent.com/u/162889656"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "1weiho",
      "repo": "open-slide",
      "avatar": "https://github.com/1weiho.png",
      "repo_link": "https://github.com/1weiho/open-slide",
      "desc": "A slide framework built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 531,
      "added_stars": 1395,
      "builtBy": [
        {
          "username": "1weiho",
          "href": "https://github.com/1weiho",
          "avatar": "https://avatars.githubusercontent.com/u/75478661"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ridemountainpig",
          "href": "https://github.com/ridemountainpig",
          "avatar": "https://avatars.githubusercontent.com/u/92412722"
        }
      ]
    },
    {
      "author": "earendil-works",
      "repo": "pi",
      "avatar": "https://github.com/earendil-works.png",
      "repo_link": "https://github.com/earendil-works/pi",
      "desc": "AI agent toolkit: unified LLM API, agent loop, TUI, coding agent CLI",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 12840,
      "added_stars": 17926,
      "builtBy": [
        {
          "username": "badlogic",
          "href": "https://github.com/badlogic",
          "avatar": "https://avatars.githubusercontent.com/u/514052"
        },
        {
          "username": "mitsuhiko",
          "href": "https://github.com/mitsuhiko",
          "avatar": "https://avatars.githubusercontent.com/u/7396"
        },
        {
          "username": "davidbrai",
          "href": "https://github.com/davidbrai",
          "avatar": "https://avatars.githubusercontent.com/u/351026"
        },
        {
          "username": "cristinaponcela",
          "href": "https://github.com/cristinaponcela",
          "avatar": "https://avatars.githubusercontent.com/u/140309543"
        },
        {
          "username": "christianklotz",
          "href": "https://github.com/christianklotz",
          "avatar": "https://avatars.githubusercontent.com/u/69443"
        }
      ]
    },
    {
      "author": "solidjs",
      "repo": "solid",
      "avatar": "https://github.com/solidjs.png",
      "repo_link": "https://github.com/solidjs/solid",
      "desc": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1105,
      "added_stars": 220,
      "builtBy": [
        {
          "username": "ryansolid",
          "href": "https://github.com/ryansolid",
          "avatar": "https://avatars.githubusercontent.com/u/2768267"
        },
        {
          "username": "thetarnav",
          "href": "https://github.com/thetarnav",
          "avatar": "https://avatars.githubusercontent.com/u/24491503"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "otonashixav",
          "href": "https://github.com/otonashixav",
          "avatar": "https://avatars.githubusercontent.com/u/42372774"
        },
        {
          "username": "Jutanium",
          "href": "https://github.com/Jutanium",
          "avatar": "https://avatars.githubusercontent.com/u/4033662"
        }
      ]
    },
    {
      "author": "Gitlawb",
      "repo": "openclaude",
      "avatar": "https://github.com/Gitlawb.png",
      "repo_link": "https://github.com/Gitlawb/openclaude",
      "desc": "runs anywhere. uses anything",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9068,
      "added_stars": 2528,
      "builtBy": [
        {
          "username": "kevincodex1",
          "href": "https://github.com/kevincodex1",
          "avatar": "https://avatars.githubusercontent.com/u/268502447"
        },
        {
          "username": "chioarub",
          "href": "https://github.com/chioarub",
          "avatar": "https://avatars.githubusercontent.com/u/59725767"
        },
        {
          "username": "jatmn",
          "href": "https://github.com/jatmn",
          "avatar": "https://avatars.githubusercontent.com/u/12479882"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "0xfandom",
          "href": "https://github.com/0xfandom",
          "avatar": "https://avatars.githubusercontent.com/u/50949929"
        }
      ]
    },
    {
      "author": "elizaOS",
      "repo": "eliza",
      "avatar": "https://github.com/elizaOS.png",
      "repo_link": "https://github.com/elizaOS/eliza",
      "desc": "Open source agentic operating system",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5708,
      "added_stars": 425,
      "builtBy": [
        {
          "username": "lalalune",
          "href": "https://github.com/lalalune",
          "avatar": "https://avatars.githubusercontent.com/u/18633264"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "NubsCarson",
          "href": "https://github.com/NubsCarson",
          "avatar": "https://avatars.githubusercontent.com/u/192162056"
        },
        {
          "username": "wtfsayo",
          "href": "https://github.com/wtfsayo",
          "avatar": "https://avatars.githubusercontent.com/u/82053242"
        },
        {
          "username": "tcm390",
          "href": "https://github.com/tcm390",
          "avatar": "https://avatars.githubusercontent.com/u/60634884"
        }
      ]
    },
    {
      "author": "vercel-labs",
      "repo": "portless",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/portless",
      "desc": "Replace port numbers with stable, named local URLs. For humans and agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 405,
      "added_stars": 1975,
      "builtBy": [
        {
          "username": "ctate",
          "href": "https://github.com/ctate",
          "avatar": "https://avatars.githubusercontent.com/u/366502"
        },
        {
          "username": "Railly",
          "href": "https://github.com/Railly",
          "avatar": "https://avatars.githubusercontent.com/u/51397083"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tomdale",
          "href": "https://github.com/tomdale",
          "avatar": "https://avatars.githubusercontent.com/u/90888"
        },
        {
          "username": "gerardbalaoro",
          "href": "https://github.com/gerardbalaoro",
          "avatar": "https://avatars.githubusercontent.com/u/13101267"
        }
      ]
    },
    {
      "author": "TencentCloud",
      "repo": "TencentDB-Agent-Memory",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/TencentDB-Agent-Memory",
      "desc": "TencentDB Agent Memory is a team-level memory hub for AI Agents — turning conversations, docs, and code into four reusable memory assets (Chat Memory, Skill, LLM-Wiki, Code-Graph) that are governed, shared, and equipped across agents and frameworks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2443,
      "added_stars": 8875,
      "builtBy": [
        {
          "username": "Yuntong8888",
          "href": "https://github.com/Yuntong8888",
          "avatar": "https://avatars.githubusercontent.com/u/277734672"
        },
        {
          "username": "aleronwang",
          "href": "https://github.com/aleronwang",
          "avatar": "https://avatars.githubusercontent.com/u/52184295"
        },
        {
          "username": "Maxwell-Code07",
          "href": "https://github.com/Maxwell-Code07",
          "avatar": "https://avatars.githubusercontent.com/u/95488710"
        },
        {
          "username": "nicwn",
          "href": "https://github.com/nicwn",
          "avatar": "https://avatars.githubusercontent.com/u/94191"
        },
        {
          "username": "962673247",
          "href": "https://github.com/962673247",
          "avatar": "https://avatars.githubusercontent.com/u/45094628"
        }
      ]
    },
    {
      "author": "maotoumao",
      "repo": "MusicFree",
      "avatar": "https://github.com/maotoumao.png",
      "repo_link": "https://github.com/maotoumao/MusicFree",
      "desc": "插件化、定制化、无广告的免费音乐播放器",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1910,
      "added_stars": 825,
      "builtBy": [
        {
          "username": "maotoumao",
          "href": "https://github.com/maotoumao",
          "avatar": "https://avatars.githubusercontent.com/u/31655147"
        },
        {
          "username": "282931",
          "href": "https://github.com/282931",
          "avatar": "https://avatars.githubusercontent.com/u/11798364"
        },
        {
          "username": "eastcukt",
          "href": "https://github.com/eastcukt",
          "avatar": "https://avatars.githubusercontent.com/u/49146637"
        },
        {
          "username": "Matsuko97",
          "href": "https://github.com/Matsuko97",
          "avatar": "https://avatars.githubusercontent.com/u/64468673"
        },
        {
          "username": "zhuguibiao",
          "href": "https://github.com/zhuguibiao",
          "avatar": "https://avatars.githubusercontent.com/u/22173974"
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
      "title": "My Grandmother Ran Ajo. I Built the Version Where the Pot Can't Walk Away",
      "description": "This is a submission for Weekend Challenge: Generosity Edition           What I Built   My late...",
      "url": "https://dev.to/dannwaneri/my-grandmother-ran-ajo-i-built-the-version-where-the-pot-cant-walk-away-5gkn",
      "tags": "weekendchallenge, devchallenge, solana, gemini",
      "reactions": 38,
      "comments": 2,
      "reading_time": 6,
      "author": "dannwaneri"
    },
    {
      "title": "20 Agentic AI Terms Every Developer Should Know (Explained Simply)",
      "description": "Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...",
      "url": "https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii",
      "tags": "ai, agents, mcp, beginners",
      "reactions": 205,
      "comments": 108,
      "reading_time": 11,
      "author": "sylwia-lask"
    },
    {
      "title": "BoonFest: The Anti-Sloth Game Where Generosity Means Survival!",
      "description": "This is a submission for Weekend Challenge: Generosity Edition           What I Built   I built...",
      "url": "https://dev.to/fm/boonfest-the-anti-sloth-game-where-generosity-means-survival-3pg8",
      "tags": "devchallenge, weekendchallenge, ai, gamedev",
      "reactions": 19,
      "comments": 9,
      "reading_time": 4,
      "author": "fm"
    },
    {
      "title": "AI Engineering Is Easy. Changing How We Work Is Hard",
      "description": "AI engineering sounds fancy. New terms are everywhere: agentic development, AI-native engineering,...",
      "url": "https://dev.to/ujja/ai-engineering-is-easy-changing-how-we-work-is-hard-39j4",
      "tags": "ai, agents, software, discuss",
      "reactions": 40,
      "comments": 32,
      "reading_time": 4,
      "author": "ujja"
    },
    {
      "title": "The Unbreakable Shopping Cart: Pairing BlocSignal with Fast Immutable Collections (FIC) for Bulletproof Flutter Apps",
      "description": "Eliminate in-place mutation bugs, corrupted undo stacks, defensive copying overhead, and skipped Flutter rebuilds by pairing BlocSignal with fast_immutable_collections.",
      "url": "https://dev.to/gde/the-unbreakable-shopping-cart-pairing-blocsignal-with-fast-immutable-collections-fic-for-1pn2",
      "tags": "flutter, dart, architecture, statemanagement",
      "reactions": 8,
      "comments": 1,
      "reading_time": 16,
      "author": "randalschwartz"
    },
    {
      "title": "Building With AI When You Don't Know Architecture: A Survival Guide",
      "description": "Let me describe a moment you might recognize.  You had an idea for an app. You didn't know how to...",
      "url": "https://dev.to/james_anderson_h/building-with-ai-when-you-dont-know-architecture-a-survival-guide-1ma3",
      "tags": "ai, beginners, webdev",
      "reactions": 127,
      "comments": 75,
      "reading_time": 7,
      "author": "james_anderson_h"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-1mo8",
      "tags": "weeklyretro",
      "reactions": 33,
      "comments": 32,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Kubeflow Without Kubernetes? Deploy a Complete MLOps Suite in 60 Seconds with Gubernator",
      "description": "Run JupyterLab, MLflow, MinIO S3, and Ollama Inference on a lightweight cluster using pure Docker Compose and <2GB RAM.",
      "url": "https://dev.to/gde/kubeflow-without-kubernetes-deploy-a-complete-mlops-suite-in-60-seconds-with-gubernator-3moo",
      "tags": "gubernator, docker, antigravity, orquestador",
      "reactions": 11,
      "comments": 1,
      "reading_time": 4,
      "author": "marioezquerro"
    },
    {
      "title": "Unifying Google Workspace and Apache Iceberg: Serverless Lakehouse Management",
      "description": "Turn Google Sheets into a Petabyte Lakehouse with Sub-Second ACID Queries.             ...",
      "url": "https://dev.to/gde/unifying-google-workspace-and-apache-iceberg-serverless-lakehouse-management-ep3",
      "tags": "googleworkspace, googlecloud, bigquery, apacheiceberg",
      "reactions": 7,
      "comments": 0,
      "reading_time": 21,
      "author": "tanaike"
    },
    {
      "title": "Two-step control plane upgrades in GKE: How minor version rollbacks work under the hood",
      "description": "Learn how GKE decouples binary rollouts from API finalization to safely test and roll back Kubernetes minor version upgrades.",
      "url": "https://dev.to/googlecloud/two-step-control-plane-upgrades-in-gke-how-minor-version-rollbacks-work-under-the-hood-i1l",
      "tags": "kubernetes, ai, gke, googlecloud",
      "reactions": 6,
      "comments": 0,
      "reading_time": 4,
      "author": "olivi-eh"
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
      "title": "The Same Day, 180 Times: How Does the Unglamorous Machinery of Locking In Actually Work?",
      "description": "\"Inspiration is for amateurs, the rest of us just show up and get to work.\"   — Chuck Close        ...",
      "url": "https://dev.to/georgekobaidze/the-same-day-180-times-how-does-the-unglamorous-machinery-of-locking-in-actually-work-4n0l",
      "tags": "productivity, career, community, journey",
      "reactions": 22,
      "comments": 13,
      "reading_time": 19,
      "author": "georgekobaidze"
    },
    {
      "title": "A like is not a relationship: where our agent's permission to reply stops",
      "description": "Our agent replies to strangers in public. The standing rule is that the owner approves every reply...",
      "url": "https://dev.to/rulestack/a-like-is-not-a-relationship-where-our-agents-permission-to-reply-stops-27d6",
      "tags": "ai, devtools, productivity, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "rulestack"
    },
    {
      "title": "How to Know If Your CAD Design Can Actually Be Manufactured",
      "description": "Sending a CAD file to a factory without knowing whether it can be manufactured is one of the most...",
      "url": "https://dev.to/fabdosebp/how-to-know-if-your-cad-design-can-actually-be-manufactured-3plm",
      "tags": "manufacturing, hardware, productivity, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "fabdosebp"
    },
    {
      "title": "How Scale Should Change the Way You Think in Tech",
      "description": "Most engineers learn technology by asking:  “How do I make this work?”  That is the right question—at...",
      "url": "https://dev.to/sumit0rn/how-scale-should-change-the-way-you-think-in-tech-1d67",
      "tags": "productivity, programming, beginners, basic",
      "reactions": 5,
      "comments": 0,
      "reading_time": 7,
      "author": "sumit0rn"
    },
    {
      "title": "This week at Romi #2 - Latency and Voice AI",
      "description": "Welcome back to This Last week at Romi. We've been really busy so this post hits a bit late than our...",
      "url": "https://dev.to/romiadhd/this-week-at-romi-2-latency-and-voice-ai-556c",
      "tags": "ai, webdev, programming, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "vladbevs"
    },
    {
      "title": "Hash the Side-Effect Ledger Before You Accept a Cleanup Refactor",
      "description": "Messy modules rarely break because a pure helper returns the wrong integer on a tidy fixture. They...",
      "url": "https://dev.to/webx_2736/hash-the-side-effect-ledger-before-you-accept-a-cleanup-refactor-1je8",
      "tags": "testing, python, ai, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "webx_2736"
    },
    {
      "title": "A Prompt Is a Specification, Not an Assignment",
      "description": "An assignment says what you want and leaves the executor to go find the facts. A specification carries the facts inside it. That difference decides whether a fact is paid for once or once per executor.",
      "url": "https://dev.to/anton_brilliantov/a-prompt-is-a-specification-not-an-assignment-46e6",
      "tags": "ai, productivity, architecture, go",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "anton_brilliantov"
    },
    {
      "title": "Free Tools Every Competitive Programmer Should Bookmark",
      "description": "If you've ever lost 20 minutes at 2 AM debugging a submask enumeration loop, or drawn a segment tree...",
      "url": "https://dev.to/md_shohan_102187760726951/free-tools-every-competitive-programmer-should-bookmark-p3f",
      "tags": "productivity, competativeprogramming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "md_shohan_102187760726951"
    },
    {
      "title": "Qwen4 Isn’t Here Yet, but Qwen3.8-Flash-Next Tells Us a Lot",
      "description": "Qwen4 still isn’t officially here, but Qwen3.8-Flash-Next gives us something more useful than...",
      "url": "https://dev.to/masonreed1/qwen4-isnt-here-yet-but-qwen38-flash-next-tells-us-a-lot-4p1e",
      "tags": "ai, webdev, programming, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "masonreed1"
    },
    {
      "title": "A Small, Checkable Test for AI Memory Systems",
      "description": "AI disclosure: This draft was generated autonomously by AI. The author should review every technical...",
      "url": "https://dev.to/yadu989/a-small-checkable-test-for-ai-memory-systems-e1h",
      "tags": "productivity, ai, testing",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "yadu989"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

