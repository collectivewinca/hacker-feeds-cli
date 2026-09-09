# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-09-09 06:38:57 UTC

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
      "author": "affaan-m",
      "repo": "ECC",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/ECC",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 38135,
      "added_stars": 8527,
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
      "forks": 7090,
      "added_stars": 12598,
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
      "author": "tt-a1i",
      "repo": "archify",
      "avatar": "https://github.com/tt-a1i.png",
      "repo_link": "https://github.com/tt-a1i/archify",
      "desc": "Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self-contained HTML with motion and crisp export.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3618,
      "added_stars": 13318,
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
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "YunyueLi",
          "href": "https://github.com/YunyueLi",
          "avatar": "https://avatars.githubusercontent.com/u/44204222"
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
      "forks": 7503,
      "added_stars": 2141,
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
      "author": "bilawalsidhu",
      "repo": "gods-eye-view",
      "avatar": "https://github.com/bilawalsidhu.png",
      "repo_link": "https://github.com/bilawalsidhu/gods-eye-view",
      "desc": "A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4085,
      "added_stars": 4196,
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
      "author": "jo-inc",
      "repo": "camofox-browser",
      "avatar": "https://github.com/jo-inc.png",
      "repo_link": "https://github.com/jo-inc/camofox-browser",
      "desc": "Stealth headless browser for AI agents — bypass Cloudflare, bot detection, and anti-scraping. Drop-in Puppeteer/Playwright replacement.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1061,
      "added_stars": 1300,
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
      "forks": 967,
      "added_stars": 1907,
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
      "forks": 399,
      "added_stars": 729,
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
      "author": "openai",
      "repo": "plugins",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/plugins",
      "desc": "OpenAI Plugins",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 806,
      "added_stars": 330,
      "builtBy": [
        {
          "username": "cching-openai",
          "href": "https://github.com/cching-openai",
          "avatar": "https://avatars.githubusercontent.com/u/239646192"
        },
        {
          "username": "ashwinm-oai",
          "href": "https://github.com/ashwinm-oai",
          "avatar": "https://avatars.githubusercontent.com/u/264544061"
        },
        {
          "username": "Aismit",
          "href": "https://github.com/Aismit",
          "avatar": "https://avatars.githubusercontent.com/u/24821844"
        },
        {
          "username": "vb-openai",
          "href": "https://github.com/vb-openai",
          "avatar": "https://avatars.githubusercontent.com/u/250380837"
        },
        {
          "username": "gverma-openai",
          "href": "https://github.com/gverma-openai",
          "avatar": "https://avatars.githubusercontent.com/u/235382312"
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
      "forks": 735,
      "added_stars": 253,
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
      "author": "bigskysoftware",
      "repo": "htmx",
      "avatar": "https://github.com/bigskysoftware.png",
      "repo_link": "https://github.com/bigskysoftware/htmx",
      "desc": "</> htmx - high power tools for HTML",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1655,
      "added_stars": 101,
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
      "author": "Anil-matcha",
      "repo": "Open-Generative-AI",
      "avatar": "https://github.com/Anil-matcha.png",
      "repo_link": "https://github.com/Anil-matcha/Open-Generative-AI",
      "desc": "Unrestricted Open-source alternative to AI video platforms — Free AI image & video generation studio with 600+ models (Flux, Midjourney, Kling, Sora, Veo). No content filters. Self-hosted, MIT licensed.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4995,
      "added_stars": 603,
      "builtBy": [
        {
          "username": "Anil-matcha",
          "href": "https://github.com/Anil-matcha",
          "avatar": "https://avatars.githubusercontent.com/u/4326215"
        },
        {
          "username": "jaiprasad04",
          "href": "https://github.com/jaiprasad04",
          "avatar": "https://avatars.githubusercontent.com/u/114457757"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "WhiteRaven11",
          "href": "https://github.com/WhiteRaven11",
          "avatar": "https://avatars.githubusercontent.com/u/95498438"
        },
        {
          "username": "NgoQuocViet2001",
          "href": "https://github.com/NgoQuocViet2001",
          "avatar": "https://avatars.githubusercontent.com/u/123613986"
        }
      ]
    },
    {
      "author": "playcanvas",
      "repo": "engine",
      "avatar": "https://github.com/playcanvas.png",
      "repo_link": "https://github.com/playcanvas/engine",
      "desc": "Powerful web graphics runtime built on WebGL, WebGPU, WebXR and glTF",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1975,
      "added_stars": 75,
      "builtBy": [
        {
          "username": "willeastcott",
          "href": "https://github.com/willeastcott",
          "avatar": "https://avatars.githubusercontent.com/u/697563"
        },
        {
          "username": "mvaligursky",
          "href": "https://github.com/mvaligursky",
          "avatar": "https://avatars.githubusercontent.com/u/59932779"
        },
        {
          "username": "daredevildave",
          "href": "https://github.com/daredevildave",
          "avatar": "https://avatars.githubusercontent.com/u/504980"
        },
        {
          "username": "guycalledfrank",
          "href": "https://github.com/guycalledfrank",
          "avatar": "https://avatars.githubusercontent.com/u/7008423"
        },
        {
          "username": "vkalpias",
          "href": "https://github.com/vkalpias",
          "avatar": "https://avatars.githubusercontent.com/u/850969"
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
      "forks": 1322,
      "added_stars": 289,
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
      "author": "EvoMap",
      "repo": "evolver",
      "avatar": "https://github.com/EvoMap.png",
      "repo_link": "https://github.com/EvoMap/evolver",
      "desc": "The GEP-powered self-evolving engine for AI agents. Auditable evolution with Genes, Capsules, and Events. | evomap.ai",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 842,
      "added_stars": 84,
      "builtBy": [
        {
          "username": "autogame-17",
          "href": "https://github.com/autogame-17",
          "avatar": "https://avatars.githubusercontent.com/u/166480271"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "penggaolai",
          "href": "https://github.com/penggaolai",
          "avatar": "https://avatars.githubusercontent.com/u/44097312"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "onthebigtree",
          "href": "https://github.com/onthebigtree",
          "avatar": "https://avatars.githubusercontent.com/u/60813639"
        }
      ]
    },
    {
      "author": "koodo-reader",
      "repo": "koodo-reader",
      "avatar": "https://github.com/koodo-reader.png",
      "repo_link": "https://github.com/koodo-reader/koodo-reader",
      "desc": "A modern ebook manager and reader with sync and backup capacities for Windows, macOS, Linux, Android, iOS and Web",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2102,
      "added_stars": 107,
      "builtBy": [
        {
          "username": "troyeguo",
          "href": "https://github.com/troyeguo",
          "avatar": "https://avatars.githubusercontent.com/u/13820674"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "nofalbriansah",
          "href": "https://github.com/nofalbriansah",
          "avatar": "https://avatars.githubusercontent.com/u/48385577"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "hacketiwack",
          "href": "https://github.com/hacketiwack",
          "avatar": "https://avatars.githubusercontent.com/u/13329768"
        }
      ]
    },
    {
      "author": "hiteshchoudhary",
      "repo": "apihub",
      "avatar": "https://github.com/hiteshchoudhary.png",
      "repo_link": "https://github.com/hiteshchoudhary/apihub",
      "desc": "Your own API Hub to learn and master API interaction. Ideal for frontend, mobile dev and backend developers.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1494,
      "added_stars": 32,
      "builtBy": [
        {
          "username": "wajeshubham",
          "href": "https://github.com/wajeshubham",
          "avatar": "https://avatars.githubusercontent.com/u/62889697"
        },
        {
          "username": "anirudhuuu",
          "href": "https://github.com/anirudhuuu",
          "avatar": "https://avatars.githubusercontent.com/u/25549847"
        },
        {
          "username": "atulbhatt-system32",
          "href": "https://github.com/atulbhatt-system32",
          "avatar": "https://avatars.githubusercontent.com/u/38177419"
        },
        {
          "username": "learner-enthusiast",
          "href": "https://github.com/learner-enthusiast",
          "avatar": "https://avatars.githubusercontent.com/u/110292025"
        },
        {
          "username": "shrey-dadhaniya",
          "href": "https://github.com/shrey-dadhaniya",
          "avatar": "https://avatars.githubusercontent.com/u/50957657"
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
      "forks": 478,
      "added_stars": 212,
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
      "author": "zarazhangrui",
      "repo": "frontend-slides",
      "avatar": "https://github.com/zarazhangrui.png",
      "repo_link": "https://github.com/zarazhangrui/frontend-slides",
      "desc": "Create beautiful slides on the web using a coding agent's frontend skills",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2304,
      "added_stars": 419,
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
      "author": "react",
      "repo": "react",
      "avatar": "https://github.com/react.png",
      "repo_link": "https://github.com/react/react",
      "desc": "The library for web and native user interfaces.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 51315,
      "added_stars": 1110,
      "builtBy": [
        {
          "username": "sebmarkbage",
          "href": "https://github.com/sebmarkbage",
          "avatar": "https://avatars.githubusercontent.com/u/63648"
        },
        {
          "username": "zpao",
          "href": "https://github.com/zpao",
          "avatar": "https://avatars.githubusercontent.com/u/8445"
        },
        {
          "username": "gaearon",
          "href": "https://github.com/gaearon",
          "avatar": "https://avatars.githubusercontent.com/u/810438"
        },
        {
          "username": "acdlite",
          "href": "https://github.com/acdlite",
          "avatar": "https://avatars.githubusercontent.com/u/3624098"
        },
        {
          "username": "sophiebits",
          "href": "https://github.com/sophiebits",
          "avatar": "https://avatars.githubusercontent.com/u/6820"
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
      "forks": 2742,
      "added_stars": 279,
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
      "by": "tosh",
      "descendants": 18,
      "id": 49621697,
      "kids": [
        49622110,
        49621895,
        49622097,
        49622107,
        49621912,
        49622078,
        49622106,
        49621981,
        49622114,
        49622064,
        49622010,
        49622076,
        49622040
      ],
      "score": 54,
      "time": 1788933339,
      "title": "The Navier–Stokes Millennium Prize Problem",
      "type": "story",
      "url": "https://simonwillison.net/2026/Sep/8/on-navier-stokes/"
    },
    {
      "by": "yks",
      "descendants": 483,
      "id": 49615537,
      "kids": [
        49619077,
        49622072,
        49619026,
        49621833,
        49621179,
        49615810,
        49620183,
        49621251,
        49619535,
        49619018,
        49619507,
        49615819,
        49619260,
        49618998,
        49619101,
        49615858,
        49615932,
        49619131,
        49615838,
        49617903,
        49617555,
        49615782,
        49615917,
        49620189,
        49615846,
        49616390,
        49616351,
        49619147,
        49620546,
        49616030,
        49619518,
        49619951,
        49620579,
        49621793,
        49619039,
        49616421,
        49616575,
        49621649,
        49620382,
        49616249,
        49620091,
        49616315,
        49621300,
        49616552,
        49619481,
        49619424,
        49620034,
        49616670,
        49621693,
        49619974,
        49615930,
        49618113,
        49616273,
        49615744,
        49620176,
        49616908,
        49619664,
        49619335,
        49617025,
        49616702,
        49620044,
        49616992,
        49616596,
        49616361,
        49619714,
        49617667,
        49615972,
        49616484,
        49617731,
        49620554,
        49619228,
        49621214,
        49618981,
        49621590,
        49616069,
        49621540,
        49616079,
        49620645,
        49620427,
        49620045,
        49619914,
        49615817,
        49620261,
        49615862,
        49619505,
        49615988,
        49617036,
        49616363,
        49616080,
        49619010,
        49620042,
        49616406,
        49615841,
        49616135,
        49619087,
        49615903,
        49618951,
        49615880,
        49619071,
        49616025,
        49616056,
        49617310,
        49621858,
        49621812,
        49621702,
        49621720,
        49619626,
        49619092,
        49617066,
        49619315,
        49619252,
        49616393,
        49619097,
        49619021
      ],
      "score": 460,
      "time": 1788895500,
      "title": "Muse – Meta’s personal AI agent",
      "type": "story",
      "url": "https://ai.meta.com/muse/"
    },
    {
      "by": "mdp2021",
      "descendants": 15,
      "id": 49546964,
      "kids": [
        49620838,
        49620619,
        49620756,
        49621885,
        49621647
      ],
      "score": 92,
      "time": 1788420580,
      "title": "Tension wood: A 'muscle' that can both bend and straighten plants",
      "type": "story",
      "url": "https://phys.org/news/2026-09-trees-muscle-posture-newly-role.html"
    },
    {
      "by": "cisc",
      "descendants": 7,
      "id": 49580761,
      "kids": [
        49621410,
        49621537,
        49621674
      ],
      "score": 26,
      "time": 1788642858,
      "title": "Researchers Spot Fake Ancient Pottery Using the Earth's Magnetic Field",
      "type": "story",
      "url": "https://www.smithsonianmag.com/smart-news/researchers-determine-how-to-spot-fake-ancient-pottery-using-the-earths-magnetic-field-180989441/"
    },
    {
      "by": "procedurecall",
      "descendants": 659,
      "id": 49605915,
      "kids": [
        49607239,
        49606568,
        49617154,
        49606404,
        49621415,
        49607090,
        49607073,
        49619384,
        49606636,
        49606322,
        49606740,
        49616213,
        49615201,
        49606078,
        49617952,
        49606885,
        49607029,
        49621557,
        49608455,
        49621306,
        49608314,
        49609805,
        49618153,
        49614040,
        49615823,
        49607399,
        49606626,
        49609571,
        49621953,
        49607550,
        49608365,
        49615746,
        49606357,
        49616108,
        49606738,
        49610490,
        49620887,
        49617060,
        49608151,
        49607355,
        49620790,
        49619276,
        49620491,
        49614847,
        49606531,
        49606887,
        49608026,
        49607401,
        49613400,
        49618413,
        49606230,
        49609372,
        49607727,
        49609106,
        49618373,
        49618010,
        49621042,
        49609098,
        49608767,
        49608845,
        49621080,
        49606886,
        49616901,
        49617241,
        49608162,
        49612566,
        49618150,
        49620149,
        49611325,
        49618482,
        49613423,
        49609191,
        49606377,
        49607045,
        49610958,
        49607177,
        49610225,
        49618183,
        49613323,
        49616636,
        49608643,
        49616733,
        49606777,
        49619270,
        49606400,
        49607728,
        49607507,
        49611740,
        49613521,
        49612897,
        49619495,
        49617105,
        49608636,
        49617109,
        49614460,
        49617115,
        49617112,
        49618043,
        49620358,
        49607054,
        49606408,
        49606628,
        49613276
      ],
      "score": 1528,
      "time": 1788846148,
      "title": "Navier-Stokes – Tristan Buckmaster [pdf]",
      "type": "story",
      "url": "https://cims.nyu.edu/~tristanb/statement.pdf"
    },
    {
      "by": "samclemens",
      "descendants": 19,
      "id": 49621074,
      "kids": [
        49622080,
        49621735,
        49621153,
        49621831,
        49622090,
        49621950
      ],
      "score": 22,
      "time": 1788928751,
      "title": "The Nonfiction Book Market is Collapsing?",
      "type": "story",
      "url": "https://dearheadofmine.substack.com/p/the-nonfiction-book-market-is-collapsing"
    },
    {
      "by": "cat-whisperer",
      "descendants": 52,
      "id": 49617255,
      "kids": [
        49619525,
        49621387,
        49619847,
        49621801,
        49619127,
        49621279,
        49618581,
        49619186,
        49619083,
        49619254,
        49618532,
        49618730,
        49618896,
        49618165,
        49620568
      ],
      "score": 258,
      "time": 1788902531,
      "title": "How to build a printer",
      "type": "story",
      "url": "https://nishantjosh.dev/blogs/how-to-build-a-fking-printer/"
    },
    {
      "by": "utiiiD",
      "descendants": 118,
      "id": 49611251,
      "kids": [
        49616342,
        49612313,
        49614431,
        49613968,
        49612971,
        49616128,
        49612833,
        49617920,
        49614889,
        49614818,
        49613579,
        49613078,
        49612575,
        49612165,
        49614297,
        49612615,
        49613263,
        49612867,
        49612588,
        49613702,
        49615449,
        49612321,
        49615289,
        49612080,
        49614786,
        49613788,
        49612714,
        49612331,
        49611659,
        49612297,
        49611800
      ],
      "score": 539,
      "text": "<a href=\"https:&#x2F;&#x2F;deepmind.google&#x2F;blog&#x2F;alphagenome-atlas-a-predictive-map-of-every-possible-dna-letter-change-in-the-human-genome&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;deepmind.google&#x2F;blog&#x2F;alphagenome-atlas-a-predictive-...</a><p><a href=\"https:&#x2F;&#x2F;deepmind.google.com&#x2F;science&#x2F;alphagenome&#x2F;atlas\" rel=\"nofollow\">https:&#x2F;&#x2F;deepmind.google.com&#x2F;science&#x2F;alphagenome&#x2F;atlas</a>",
      "time": 1788879345,
      "title": "AlphaGenome Atlas: a high-resolution map of human DNA",
      "type": "story",
      "url": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/alphagenome-atlas/"
    },
    {
      "by": "Topfi",
      "descendants": 26,
      "id": 49616354,
      "kids": [
        49621408,
        49616933,
        49620999,
        49616810,
        49617237,
        49620437,
        49616855,
        49617968,
        49620803,
        49618366,
        49619052,
        49617234,
        49620778,
        49618304,
        49620535,
        49618367,
        49618375,
        49619826,
        49619441,
        49617222
      ],
      "score": 176,
      "time": 1788898492,
      "title": "Mercury 2.5",
      "type": "story",
      "url": "https://www.inceptionlabs.ai/blog/introducing-mercury-2-5"
    },
    {
      "by": "paimapi",
      "descendants": 72,
      "id": 49617581,
      "kids": [
        49618722,
        49618279,
        49618016,
        49621842,
        49617925,
        49618636,
        49618488,
        49620986,
        49619070,
        49618789,
        49619347,
        49619681,
        49618433,
        49618550,
        49618725,
        49620118,
        49618579,
        49619880,
        49617897,
        49619580,
        49619995,
        49619458,
        49618353,
        49618260,
        49618131
      ],
      "score": 139,
      "time": 1788904058,
      "title": "Large language models develop novel social biases through adaptive exploration",
      "type": "story",
      "url": "https://openreview.net/challenge?redirect=%2Fforum%3Fid%3Dpc7fqaOcAH"
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
      "title": "How to build a f**king printer",
      "url": "https://nishantjosh.dev/blogs/how-to-build-a-fking-printer/",
      "score": 35,
      "comments": 5,
      "tags": [
        "c++",
        "hardware",
        "networking"
      ],
      "id": "pxreik"
    },
    {
      "title": "What makes $BigTechCompany's products bad, anyway?",
      "url": "https://herecomesthemoon.net/2026/09/why-is-big-tech-bad/",
      "score": 18,
      "comments": 19,
      "tags": [
        "finance"
      ],
      "id": "wlcg5w"
    },
    {
      "title": "Switching Password Managers in 2026",
      "url": "https://rmondello.com/2026/09/07/switching-password-managers-2026/",
      "score": 69,
      "comments": 29,
      "tags": [
        "practices",
        "security"
      ],
      "id": "ikzvtv"
    },
    {
      "title": "I changed my license to EUPL",
      "url": "https://bergie.iki.fi/blog/eupl/",
      "score": 126,
      "comments": 59,
      "tags": [
        "law"
      ],
      "id": "4ntizu"
    },
    {
      "title": "The state of European cloud providers in 2026",
      "url": "https://crescentro.se/posts/euro-cloud-providers-2026/",
      "score": 71,
      "comments": 26,
      "tags": [
        "scaling"
      ],
      "id": "6licoy"
    },
    {
      "title": "Extreme Server Side Rendering",
      "url": "https://www.scd31.com/posts/extreme-server-side-rendering",
      "score": 45,
      "comments": 23,
      "tags": [
        "browsers",
        "web"
      ],
      "id": "tprfej"
    },
    {
      "title": "Rust: When Empty Isn't Bottom",
      "url": "https://ettolrach.com/blog/rust_when_empty_isnt_bottom.html",
      "score": 7,
      "comments": 4,
      "tags": [
        "plt",
        "rust"
      ],
      "id": "lf3est"
    },
    {
      "title": "Jellyfin 12.0",
      "url": "https://jellyfin.org/posts/jellyfin-release-12.0",
      "score": 75,
      "comments": 29,
      "tags": [
        "release"
      ],
      "id": "blba3b"
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
      "repo": "claude-plugins-community",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-community",
      "desc": "Community plugin marketplace for Claude Cowork and Claude Code. Read-only mirror — submit plugins at clau.de/plugin-directory-submission.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 282,
      "added_stars": 3348,
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
      "author": "semantica-agi",
      "repo": "semantica",
      "avatar": "https://github.com/semantica-agi.png",
      "repo_link": "https://github.com/semantica-agi/semantica",
      "desc": "Graph-Native Infrastructure for Context and Accountable AI Systems",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1394,
      "added_stars": 9951,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2754,
      "added_stars": 8115,
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
      "author": "cactus-compute",
      "repo": "needle",
      "avatar": "https://github.com/cactus-compute.png",
      "repo_link": "https://github.com/cactus-compute/needle",
      "desc": "14MB foundation model for tiny devices; phones, wearables, smart home, and robots.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 677,
      "added_stars": 7220,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2659,
      "added_stars": 11516,
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
      "forks": 52735,
      "added_stars": 23450,
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
      "author": "3b1b",
      "repo": "manim",
      "avatar": "https://github.com/3b1b.png",
      "repo_link": "https://github.com/3b1b/manim",
      "desc": "Animation engine for explanatory math videos",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7682,
      "added_stars": 4394,
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
      "author": "megadose",
      "repo": "holehe",
      "avatar": "https://github.com/megadose.png",
      "repo_link": "https://github.com/megadose/holehe",
      "desc": "holehe allows you to check if the mail is used on different sites like twitter, instagram and will retrieve information on sites with the forgotten password function.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1881,
      "added_stars": 2856,
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
      "forks": 179,
      "added_stars": 812,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Local UI to run and train LLMs and diffusion models. Supports GGUF, MLX, Qwen3.8, DeepSeek-V4, MiniMax-H3, Gemma 4, FLUX and more.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6901,
      "added_stars": 6357,
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
          "username": "Imagineer99",
          "href": "https://github.com/Imagineer99",
          "avatar": "https://avatars.githubusercontent.com/u/130007945"
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
      "forks": 3449,
      "added_stars": 3837,
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
      "author": "jundot",
      "repo": "omlx",
      "avatar": "https://github.com/jundot.png",
      "repo_link": "https://github.com/jundot/omlx",
      "desc": "LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1839,
      "added_stars": 3084,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 18781,
      "added_stars": 20098,
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
      "forks": 3749,
      "added_stars": 11172,
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
      "forks": 581,
      "added_stars": 1775,
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
      "forks": 9525,
      "added_stars": 4566,
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
      "author": "radixark",
      "repo": "miles",
      "avatar": "https://github.com/radixark.png",
      "repo_link": "https://github.com/radixark/miles",
      "desc": "Miles is an enterprise-facing reinforcement learning framework for LLM and VLM post-training, forked from and co-evolving with slime.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 458,
      "added_stars": 754,
      "builtBy": [
        {
          "username": "fzyzcjy",
          "href": "https://github.com/fzyzcjy",
          "avatar": "https://avatars.githubusercontent.com/u/5236035"
        },
        {
          "username": "guapisolo",
          "href": "https://github.com/guapisolo",
          "avatar": "https://avatars.githubusercontent.com/u/48857426"
        },
        {
          "username": "yueming-yuan",
          "href": "https://github.com/yueming-yuan",
          "avatar": "https://avatars.githubusercontent.com/u/112649537"
        },
        {
          "username": "Zhichenzzz",
          "href": "https://github.com/Zhichenzzz",
          "avatar": "https://avatars.githubusercontent.com/u/108505471"
        },
        {
          "username": "Shi-Dong",
          "href": "https://github.com/Shi-Dong",
          "avatar": "https://avatars.githubusercontent.com/u/23387010"
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
      "forks": 668,
      "added_stars": 2520,
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
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3993,
      "added_stars": 11075,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7783,
      "added_stars": 5584,
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
      "author": "donnemartin",
      "repo": "system-design-primer",
      "avatar": "https://github.com/donnemartin.png",
      "repo_link": "https://github.com/donnemartin/system-design-primer",
      "desc": "Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 58308,
      "added_stars": 7360,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3063,
      "added_stars": 4813,
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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 620,
      "added_stars": 4574,
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
          "username": "roshansada",
          "href": "https://github.com/roshansada",
          "avatar": "https://avatars.githubusercontent.com/u/930790"
        },
        {
          "username": "ericzakariasson",
          "href": "https://github.com/ericzakariasson",
          "avatar": "https://avatars.githubusercontent.com/u/25622412"
        },
        {
          "username": "maloneya",
          "href": "https://github.com/maloneya",
          "avatar": "https://avatars.githubusercontent.com/u/9469738"
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
      "forks": 5459,
      "added_stars": 13038,
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
      "author": "apache",
      "repo": "maka",
      "avatar": "https://github.com/apache.png",
      "repo_link": "https://github.com/apache/maka",
      "desc": "Apache Maka (Incubating) is a high-performance agent workspace that keeps a complete record of everything it did.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 471,
      "added_stars": 3835,
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
      "author": "every-app",
      "repo": "open-seo",
      "avatar": "https://github.com/every-app.png",
      "repo_link": "https://github.com/every-app/open-seo",
      "desc": "Open source alternative to Semrush and Ahrefs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2267,
      "added_stars": 7060,
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
      "author": "titanwings",
      "repo": "distilly",
      "avatar": "https://github.com/titanwings.png",
      "repo_link": "https://github.com/titanwings/distilly",
      "desc": "Distilly — Distill how they think into reusable Skills for any Agent or Bot. Formerly Colleague Skill（原同事 Skill）.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2133,
      "added_stars": 3765,
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
      "author": "CodebuffAI",
      "repo": "freebuff",
      "avatar": "https://github.com/CodebuffAI.png",
      "repo_link": "https://github.com/CodebuffAI/freebuff",
      "desc": "The free coding agent",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1273,
      "added_stars": 3292,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3429,
      "added_stars": 7120,
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
      "author": "bookorbit",
      "repo": "bookorbit",
      "avatar": "https://github.com/bookorbit.png",
      "repo_link": "https://github.com/bookorbit/bookorbit",
      "desc": "BookOrbit: Your Reading Space",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 253,
      "added_stars": 2112,
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
      "author": "Gitlawb",
      "repo": "openclaude",
      "avatar": "https://github.com/Gitlawb.png",
      "repo_link": "https://github.com/Gitlawb/openclaude",
      "desc": "runs anywhere. uses anything",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9068,
      "added_stars": 2609,
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
      "author": "apify",
      "repo": "apify-mcp-server",
      "avatar": "https://github.com/apify.png",
      "repo_link": "https://github.com/apify/apify-mcp-server",
      "desc": "The Apify MCP server enables your AI agents to extract data from social media, search engines, maps, e-commerce sites, or any other website using thousands of ready-made scrapers, crawlers, and automation tools available on the Apify Store.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 255,
      "added_stars": 3464,
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
      "author": "lightningpixel",
      "repo": "modly",
      "avatar": "https://github.com/lightningpixel.png",
      "repo_link": "https://github.com/lightningpixel/modly",
      "desc": "Desktop app to generate 3D models from images or prompt using local AI — runs entirely on your GPU",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 704,
      "added_stars": 2617,
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
      "author": "maotoumao",
      "repo": "MusicFree",
      "avatar": "https://github.com/maotoumao.png",
      "repo_link": "https://github.com/maotoumao/MusicFree",
      "desc": "插件化、定制化、无广告的免费音乐播放器",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1918,
      "added_stars": 854,
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
      "forks": 533,
      "added_stars": 1415,
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
      "author": "can1357",
      "repo": "oh-my-pi",
      "avatar": "https://github.com/can1357.png",
      "repo_link": "https://github.com/can1357/oh-my-pi",
      "desc": "⌥ Coding agent with the IDE wired in",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3097,
      "added_stars": 7445,
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
      "author": "elizaOS",
      "repo": "eliza",
      "avatar": "https://github.com/elizaOS.png",
      "repo_link": "https://github.com/elizaOS/eliza",
      "desc": "Open source agentic operating system",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5708,
      "added_stars": 395,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5474,
      "added_stars": 4924,
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
      "author": "vercel-labs",
      "repo": "portless",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/portless",
      "desc": "Replace port numbers with stable, named local URLs. For humans and agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 409,
      "added_stars": 2019,
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
      "author": "PrimeIntellect-ai",
      "repo": "prime-agent",
      "avatar": "https://github.com/PrimeIntellect-ai.png",
      "repo_link": "https://github.com/PrimeIntellect-ai/prime-agent",
      "desc": "A self-improving RLM agent for coding workflows and long-running autonomous tasks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2226,
      "added_stars": 12120,
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
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-40ma",
      "tags": "top7, discuss",
      "reactions": 54,
      "comments": 25,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Bidirectional Writeback for Apache Iceberg via Google Sheets: Serverless Lakehouse Console",
      "description": "Turn Google Sheets into a Fully Interactive, Differential ACID Mutation Console for Apache Iceberg...",
      "url": "https://dev.to/gde/bidirectional-writeback-for-apache-iceberg-via-google-sheets-serverless-lakehouse-console-14ic",
      "tags": "googleworkspace, googlecloud, bigquery, apacheiceberg",
      "reactions": 6,
      "comments": 0,
      "reading_time": 26,
      "author": "tanaike"
    },
    {
      "title": "Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script",
      "description": "Turn Google Drive into an AI-Powered Lakehouse Vector Engine across Converted PDFs, Binary Images,...",
      "url": "https://dev.to/gde/serverless-multimodal-vector-search-on-apache-iceberg-via-google-apps-script-4fg",
      "tags": "googleworkspace, googlecloud, bigquery, apacheiceberg",
      "reactions": 6,
      "comments": 0,
      "reading_time": 22,
      "author": "tanaike"
    },
    {
      "title": "Interactive AI Eval Dashboards with Data Studio",
      "description": "Welcome to the final entry of our series about designing, analyzing and visualizing AI evals! As with...",
      "url": "https://dev.to/googleai/interactive-ai-eval-dashboards-with-data-studio-1kl9",
      "tags": "ai, datascience, productivity, llm",
      "reactions": 9,
      "comments": 2,
      "reading_time": 11,
      "author": "glasnt"
    },
    {
      "title": "20 Agentic AI Terms Every Developer Should Know (Explained Simply)",
      "description": "Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...",
      "url": "https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii",
      "tags": "ai, agents, mcp, beginners",
      "reactions": 212,
      "comments": 110,
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
      "title": "Stop rebuilding from scratch: cache Docker layers on Cloud Build",
      "description": "Cloud Build runs on ephemeral workers, so your Docker cache vanishes on every run. Here's how to persist it in Artifact Registry with BuildKit's registry cache — uv stops re-downloading dependencies, builds get faster, greener and cheaper.",
      "url": "https://dev.to/gde/stop-rebuilding-from-scratch-cache-docker-layers-on-cloud-build-41m0",
      "tags": "docker, googlecloud, python, devops",
      "reactions": 9,
      "comments": 0,
      "reading_time": 14,
      "author": "mazlum_tosun"
    },
    {
      "title": "My Grandmother Ran Ajo. I Built the Version Where the Pot Can't Walk Away",
      "description": "This is a submission for Weekend Challenge: Generosity Edition           What I Built   My late...",
      "url": "https://dev.to/dannwaneri/my-grandmother-ran-ajo-i-built-the-version-where-the-pot-cant-walk-away-5gkn",
      "tags": "weekendchallenge, devchallenge, solana, gemini",
      "reactions": 40,
      "comments": 2,
      "reading_time": 6,
      "author": "dannwaneri"
    },
    {
      "title": "Building With AI When You Don't Know Architecture: A Survival Guide",
      "description": "Let me describe a moment you might recognize.  You had an idea for an app. You didn't know how to...",
      "url": "https://dev.to/james_anderson_h/building-with-ai-when-you-dont-know-architecture-a-survival-guide-1ma3",
      "tags": "ai, beginners, webdev",
      "reactions": 130,
      "comments": 78,
      "reading_time": 7,
      "author": "james_anderson_h"
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
      "title": "Networking is Hard but easy to think about.",
      "description": "The video cover is what we are all feeling in this Job Market. I don't have a good cover image this...",
      "url": "https://dev.to/francistrdev/networking-is-hard-but-easy-to-think-about-dc1",
      "tags": "discuss, community, productivity, mentalhealth",
      "reactions": 26,
      "comments": 12,
      "reading_time": 5,
      "author": "francistrdev"
    },
    {
      "title": "Has AI Made You A Lazier Developer? Be Honest.",
      "description": "Haven't you ever wondered if this AI vibe coding has made us lazy? Who's been solving problems on...",
      "url": "https://dev.to/nazar-boyko/has-ai-made-you-a-lazier-developer-be-honest-5ack",
      "tags": "discuss, ai, productivity, career",
      "reactions": 61,
      "comments": 22,
      "reading_time": 4,
      "author": "nazar-boyko"
    },
    {
      "title": "Wiring a Reachy Mini into OpenClaw without trusting the robot",
      "description": "I put a Reachy Mini in the living room.  It is a small desktop robot from Pollen Robotics, now part...",
      "url": "https://dev.to/bengreenberg/wiring-a-reachy-mini-into-openclaw-without-trusting-the-robot-3lgh",
      "tags": "openclaw, ai, productivity, tutorial",
      "reactions": 6,
      "comments": 2,
      "reading_time": 7,
      "author": "bengreenberg"
    },
    {
      "title": "Why I built a zero-telemetry Chrome extension to measure the physical cost of AI prompts",
      "description": "Every developer today relies on LLMs. Whether it's drafting boilerplate, refactoring complex logic,...",
      "url": "https://dev.to/ib2mofficial/why-i-built-a-zero-telemetry-chrome-extension-to-measure-the-physical-cost-of-ai-prompts-4dmf",
      "tags": "webdev, ai, productivity, extensions",
      "reactions": 3,
      "comments": 2,
      "reading_time": 2,
      "author": "ib2mofficial"
    },
    {
      "title": "You Don't Need Kubernetes to Become a DevOps Engineer: The Learning Path I Wish I Had",
      "description": "There is a specific kind of imposter syndrome that shows up early in a DevOps career. It usually...",
      "url": "https://dev.to/arbythecoder/you-dont-need-kubernetes-to-become-a-devops-engineer-the-learning-path-i-wish-i-had-3gh7",
      "tags": "beginners, devops, cloud, productivity",
      "reactions": 5,
      "comments": 0,
      "reading_time": 6,
      "author": "arbythecoder"
    },
    {
      "title": "A Claude conversation is not a transcript any more",
      "description": "Export a Claude session that used Artifacts and read the result. It goes something like:   Me: Can...",
      "url": "https://dev.to/anuis258/a-claude-conversation-is-not-a-transcript-any-more-3ddg",
      "tags": "ai, programming, productivity, discuss",
      "reactions": 4,
      "comments": 2,
      "reading_time": 4,
      "author": "anuis258"
    },
    {
      "title": "Giving an AI agent memory is easy. Keeping it true is the hard part.",
      "description": "Giving a coding agent memory that survives the session is not a hard engineering problem. A directory...",
      "url": "https://dev.to/youfuhsu/giving-an-ai-agent-memory-is-easy-keeping-it-true-is-the-hard-part-3f02",
      "tags": "ai, agents, automation, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 4,
      "author": "youfuhsu"
    },
    {
      "title": "30 Minutes Every Morning Lost to Re-Explaining Myself: The 20-Line Auto-Brief That Fixed It",
      "description": "The thing that moved my numbers wasn't a clever idea — it was a shell script that tells me where I...",
      "url": "https://dev.to/bokuwalily/30-minutes-every-morning-lost-to-re-explaining-myself-the-20-line-auto-brief-that-fixed-it-35bj",
      "tags": "automation, claudecode, bash, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 24,
      "author": "bokuwalily"
    },
    {
      "title": "D22：他補上昨天漏掉的停損，然後一整天沒回來看它",
      "description": "阿富今天在交易日誌裡留下的所有痕跡，集中在早上八點四十五分五十八秒到八點四十六分四十二秒之間，四十四秒。  那四十四秒他做得很紮實。查帳戶、查 00919 跟加權指數的報價、查實驗進度、查委託簿、拉日...",
      "url": "https://dev.to/_2ab71a79dd36101e6be89/d22ta-bu-shang-zuo-tian-lou-diao-de-ting-sun-ran-hou-zheng-tian-mei-hui-lai-kan-ta-1jb4",
      "tags": "agents, ai, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "_2ab71a79dd36101e6be89"
    },
    {
      "title": "Why Do I Have to Re-Explain Everything When I Switch Between ChatGPT, Claude, and Gemini?",
      "description": "Using multiple AI tools sounds efficient.  I might use ChatGPT to explore an idea, Claude to turn it...",
      "url": "https://dev.to/_948e2d1bf18d06fe67113/why-do-i-have-to-re-explain-everything-when-i-switch-between-chatgpt-claude-and-gemini-4l20",
      "tags": "ai, workflow, productivity, tools",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "_948e2d1bf18d06fe67113"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

