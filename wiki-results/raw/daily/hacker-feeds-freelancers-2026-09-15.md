# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-09-15 06:39:55 UTC

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
      "author": "bilawalsidhu",
      "repo": "gods-eye-view",
      "avatar": "https://github.com/bilawalsidhu.png",
      "repo_link": "https://github.com/bilawalsidhu/gods-eye-view",
      "desc": "A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6763,
      "added_stars": 14403,
      "builtBy": [
        {
          "username": "samehkhamis",
          "href": "https://github.com/samehkhamis",
          "avatar": "https://avatars.githubusercontent.com/u/845989"
        },
        {
          "username": "bilawalsidhu",
          "href": "https://github.com/bilawalsidhu",
          "avatar": "https://avatars.githubusercontent.com/u/106619546"
        },
        {
          "username": "Tom-Neverwinter",
          "href": "https://github.com/Tom-Neverwinter",
          "avatar": "https://avatars.githubusercontent.com/u/3943634"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "daikaginza",
          "href": "https://github.com/daikaginza",
          "avatar": "https://avatars.githubusercontent.com/u/54053998"
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
      "forks": 38672,
      "added_stars": 6085,
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
      "author": "openai",
      "repo": "plugins",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/plugins",
      "desc": "OpenAI Plugins",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 882,
      "added_stars": 1233,
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
      "author": "DietrichGebert",
      "repo": "ponytail",
      "avatar": "https://github.com/DietrichGebert.png",
      "repo_link": "https://github.com/DietrichGebert/ponytail",
      "desc": "Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7449,
      "added_stars": 7722,
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
      "forks": 4150,
      "added_stars": 9868,
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
      "forks": 7616,
      "added_stars": 2344,
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
      "author": "asgeirtj",
      "repo": "system_prompts_leaks",
      "avatar": "https://github.com/asgeirtj.png",
      "repo_link": "https://github.com/asgeirtj/system_prompts_leaks",
      "desc": "Extracted system prompts from Anthropic - Claude Fable 5.1, Opus 5, Claude Design, Claude Code. OpenAI - ChatGPT GPT-6-Astra, Codex. Google - Gemini 3.8 Flash, 3.1 Pro, Antigravity. xAI - Grok, Grok Bot, Cursor, Kimi and more! Updated regularly.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 10882,
      "added_stars": 2426,
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
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Unlimited FREE AI coding. Connect Claude Code, Codex, Cursor, Cline, Copilot, Antigravity to FREE Claude/GPT/Gemini via 40+ providers. Auto-fallback, RTK -40% tokens, never hit limits.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5288,
      "added_stars": 1361,
      "builtBy": [
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "decolua",
          "href": "https://github.com/decolua",
          "avatar": "https://avatars.githubusercontent.com/u/8282593"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "anuragg-saxenaa",
          "href": "https://github.com/anuragg-saxenaa",
          "avatar": "https://avatars.githubusercontent.com/u/17893081"
        },
        {
          "username": "Jordannst",
          "href": "https://github.com/Jordannst",
          "avatar": "https://avatars.githubusercontent.com/u/180127601"
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
      "forks": 1087,
      "added_stars": 1526,
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
      "author": "is-a-dev",
      "repo": "register",
      "avatar": "https://github.com/is-a-dev.png",
      "repo_link": "https://github.com/is-a-dev/register",
      "desc": "Grab your own sweet-looking '.is-a.dev' subdomain.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 29543,
      "added_stars": 109,
      "builtBy": [
        {
          "username": "DEV-DIBSTER",
          "href": "https://github.com/DEV-DIBSTER",
          "avatar": "https://avatars.githubusercontent.com/u/76603072"
        },
        {
          "username": "STICKnoLOGIC",
          "href": "https://github.com/STICKnoLOGIC",
          "avatar": "https://avatars.githubusercontent.com/u/65322242"
        },
        {
          "username": "iostpa",
          "href": "https://github.com/iostpa",
          "avatar": "https://avatars.githubusercontent.com/u/69630113"
        },
        {
          "username": "wdhdev",
          "href": "https://github.com/wdhdev",
          "avatar": "https://avatars.githubusercontent.com/u/87287585"
        },
        {
          "username": "orangci",
          "href": "https://github.com/orangci",
          "avatar": "https://avatars.githubusercontent.com/u/90866414"
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
      "forks": 1586,
      "added_stars": 238,
      "builtBy": [
        {
          "username": "kKaskak",
          "href": "https://github.com/kKaskak",
          "avatar": "https://avatars.githubusercontent.com/u/117831817"
        },
        {
          "username": "tymmesyde",
          "href": "https://github.com/tymmesyde",
          "avatar": "https://avatars.githubusercontent.com/u/7889816"
        },
        {
          "username": "nklhtv",
          "href": "https://github.com/nklhtv",
          "avatar": "https://avatars.githubusercontent.com/u/5950722"
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
      "author": "OpenWhispr",
      "repo": "openwhispr",
      "avatar": "https://github.com/OpenWhispr.png",
      "repo_link": "https://github.com/OpenWhispr/openwhispr",
      "desc": "Voice-to-text dictation app with local (Nvidia Parakeet/Whisper) and cloud models (BYOK). Privacy-first and available cross-platform.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1004,
      "added_stars": 436,
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
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4946,
      "added_stars": 299,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
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
      "forks": 51339,
      "added_stars": 957,
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
      "author": "WorldFlowAI",
      "repo": "everything-claude-code",
      "avatar": "https://github.com/WorldFlowAI.png",
      "repo_link": "https://github.com/WorldFlowAI/everything-claude-code",
      "desc": "Claude Code toolkit - agents, commands, skills, rules, and hooks for productive AI-assisted development",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 453,
      "added_stars": 323,
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
      "author": "mrdoob",
      "repo": "three.js",
      "avatar": "https://github.com/mrdoob.png",
      "repo_link": "https://github.com/mrdoob/three.js",
      "desc": "JavaScript 3D Library.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 36553,
      "added_stars": 314,
      "builtBy": [
        {
          "username": "mrdoob",
          "href": "https://github.com/mrdoob",
          "avatar": "https://avatars.githubusercontent.com/u/97088"
        },
        {
          "username": "Mugen87",
          "href": "https://github.com/Mugen87",
          "avatar": "https://avatars.githubusercontent.com/u/12612165"
        },
        {
          "username": "sunag",
          "href": "https://github.com/sunag",
          "avatar": "https://avatars.githubusercontent.com/u/502810"
        },
        {
          "username": "alteredq",
          "href": "https://github.com/alteredq",
          "avatar": "https://avatars.githubusercontent.com/u/438022"
        },
        {
          "username": "WestLangley",
          "href": "https://github.com/WestLangley",
          "avatar": "https://avatars.githubusercontent.com/u/1000017"
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
      "forks": 5082,
      "added_stars": 490,
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
      "author": "louislam",
      "repo": "uptime-kuma",
      "avatar": "https://github.com/louislam.png",
      "repo_link": "https://github.com/louislam/uptime-kuma",
      "desc": "A fancy self-hosted monitoring tool",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 8412,
      "added_stars": 326,
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
      "forks": 1898,
      "added_stars": 450,
      "builtBy": [
        {
          "username": "maboloshi",
          "href": "https://github.com/maboloshi",
          "avatar": "https://avatars.githubusercontent.com/u/7850715"
        },
        {
          "username": "TC999",
          "href": "https://github.com/TC999",
          "avatar": "https://avatars.githubusercontent.com/u/88823709"
        },
        {
          "username": "52cik",
          "href": "https://github.com/52cik",
          "avatar": "https://avatars.githubusercontent.com/u/5033310"
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
      "forks": 2314,
      "added_stars": 94,
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
      "author": "Mathieu2301",
      "repo": "TradingView-API",
      "avatar": "https://github.com/Mathieu2301.png",
      "repo_link": "https://github.com/Mathieu2301/TradingView-API",
      "desc": "📈 Get real-time stocks from TradingView",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 869,
      "added_stars": 472,
      "builtBy": [
        {
          "username": "Mathieu2301",
          "href": "https://github.com/Mathieu2301",
          "avatar": "https://avatars.githubusercontent.com/u/21021423"
        },
        {
          "username": "clins1994",
          "href": "https://github.com/clins1994",
          "avatar": "https://avatars.githubusercontent.com/u/1874643"
        },
        {
          "username": "brandonros",
          "href": "https://github.com/brandonros",
          "avatar": "https://avatars.githubusercontent.com/u/8949910"
        },
        {
          "username": "OguzBey",
          "href": "https://github.com/OguzBey",
          "avatar": "https://avatars.githubusercontent.com/u/10181175"
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
      "forks": 755,
      "added_stars": 103,
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
      "by": "throw0101d",
      "descendants": 576,
      "id": 49701004,
      "kids": [
        49701276,
        49701451,
        49707288,
        49707639,
        49701199,
        49706014,
        49706230,
        49701826,
        49706348,
        49701234,
        49701627,
        49707913,
        49703005,
        49708051,
        49702598,
        49701555,
        49701210,
        49701393,
        49705942,
        49708065,
        49701521,
        49701525,
        49701697,
        49707722,
        49702698,
        49702487,
        49704967,
        49705745,
        49705957,
        49701260,
        49704268,
        49701162,
        49701323,
        49701832,
        49707963,
        49707831,
        49701342,
        49701794,
        49701420,
        49706784,
        49707588,
        49704857,
        49701181,
        49703196,
        49702335,
        49705995,
        49707264,
        49706302,
        49706316,
        49705352,
        49705221,
        49701452,
        49701220,
        49706970,
        49707985,
        49702426,
        49705729,
        49706617,
        49701209,
        49701474,
        49706827,
        49706706,
        49702100,
        49701453,
        49706884,
        49706386,
        49704176,
        49702383,
        49701630,
        49706028,
        49702820,
        49706485,
        49706324,
        49701197,
        49702413,
        49703007,
        49704980,
        49701443,
        49706423,
        49702659,
        49701752,
        49702314,
        49702749,
        49701343,
        49701961,
        49707612,
        49701300,
        49701545,
        49701213,
        49706352,
        49705899,
        49703400,
        49703932,
        49701332,
        49701339,
        49701214,
        49706082,
        49705984,
        49704471,
        49706176,
        49702065,
        49701430,
        49708442,
        49703184,
        49707450,
        49703442,
        49707071,
        49701367,
        49701526,
        49703072,
        49701383
      ],
      "score": 533,
      "time": 1789408229,
      "title": "iOS 27, iPadOS 27, and macOS 27",
      "type": "story",
      "url": "https://www.apple.com/newsroom/2026/09/major-updates-for-apples-software-platforms-are-now-available/"
    },
    {
      "by": "Lwrless",
      "descendants": 3,
      "id": 49684289,
      "kids": [
        49708609,
        49708227
      ],
      "score": 35,
      "time": 1789309069,
      "title": "OpenArm: An open-source 7DOF humanoid arm",
      "type": "story",
      "url": "https://github.com/enactic/OpenArm"
    },
    {
      "by": "sippingabonedry",
      "descendants": 24,
      "id": 49707627,
      "kids": [
        49708250,
        49708141,
        49708089,
        49708234,
        49708175,
        49708341,
        49708327,
        49708488,
        49708143,
        49708428,
        49708132
      ],
      "score": 63,
      "time": 1789445723,
      "title": "Linux from Scratch",
      "type": "story",
      "url": "https://www.linuxfromscratch.org/"
    },
    {
      "by": "arunbahl",
      "descendants": 19,
      "id": 49675817,
      "kids": [
        49706441,
        49708155,
        49708303
      ],
      "score": 95,
      "time": 1789239100,
      "title": "4,400-Year-Old Tomb of Egyptian Judge Found at Saqqara with Colors on Walls",
      "type": "story",
      "url": "https://arkeonews.net/4400-year-old-tomb-of-an-egyptian-judge-found-at-saqqara-with-colors-still-on-the-walls/"
    },
    {
      "by": "lukaspetersson",
      "descendants": 414,
      "id": 49700477,
      "kids": [
        49707860,
        49700959,
        49706897,
        49702729,
        49703273,
        49707666,
        49702377,
        49700794,
        49708296,
        49706563,
        49702237,
        49700837,
        49707302,
        49703168,
        49708204,
        49707873,
        49706158,
        49703254,
        49703717,
        49708281,
        49706661,
        49702730,
        49706794,
        49702521,
        49705157,
        49704110,
        49706777,
        49706504,
        49703356,
        49702316,
        49702196,
        49703481,
        49705981,
        49702470,
        49701898,
        49703130,
        49705708,
        49702960,
        49701926,
        49706766,
        49701827,
        49705601,
        49702484,
        49703283,
        49707367,
        49707077,
        49706404,
        49701379,
        49701529,
        49701953,
        49702924,
        49704830,
        49703319,
        49706972,
        49702244,
        49707603,
        49702745,
        49705881,
        49702219,
        49702271,
        49701998,
        49706061,
        49707583,
        49707793,
        49704062,
        49700815,
        49701639,
        49702395,
        49702236,
        49706610,
        49702741,
        49702356,
        49702247,
        49707082,
        49703562,
        49704410,
        49707206,
        49705701,
        49702394,
        49703407,
        49701348,
        49705596,
        49700653,
        49705347,
        49700827,
        49702648,
        49701899,
        49701746,
        49700618,
        49701929,
        49708071,
        49700760,
        49700710,
        49706909,
        49706742,
        49703110,
        49700478,
        49700810,
        49700811,
        49701652,
        49700631,
        49700658,
        49700807,
        49701986,
        49702106,
        49702628
      ],
      "score": 360,
      "time": 1789406166,
      "title": "Pion, an agent designed to run any company autonomously",
      "type": "story",
      "url": "https://andonlabs.com/blog/why-we-built-pion"
    },
    {
      "by": "thingsilearned",
      "descendants": 61,
      "id": 49704246,
      "kids": [
        49707875,
        49705397,
        49708485,
        49704247,
        49708111,
        49705953,
        49706956,
        49707321,
        49707624,
        49706629,
        49708317,
        49705983,
        49708338,
        49706529,
        49705492,
        49704708,
        49706477,
        49706541,
        49706393,
        49704876,
        49704465,
        49705494,
        49705643
      ],
      "score": 194,
      "time": 1789420974,
      "title": "Charts built for Chat",
      "type": "story",
      "url": "https://dbtcharts.com/blog/charts-built-for-chat/"
    },
    {
      "by": "lestx",
      "descendants": 34,
      "id": 49679653,
      "kids": [
        49708509,
        49708304,
        49708239,
        49708096,
        49679661
      ],
      "score": 62,
      "time": 1789269594,
      "title": "Every invoice in Brazil's economy runs on SOAP 1.2",
      "type": "story",
      "url": "https://github.com/stoix-dev/sefaz-webservices-postman"
    },
    {
      "by": "nathannaveen",
      "descendants": 25,
      "id": 49697477,
      "kids": [
        49705469,
        49707404,
        49708568,
        49708181,
        49707453,
        49707628,
        49705421,
        49706732,
        49707342,
        49708142,
        49706048,
        49708259
      ],
      "score": 89,
      "time": 1789396163,
      "title": "Dropping eBPF CPU Cost by About 90% with Memoization (Not AI Gen)",
      "type": "story",
      "url": "https://nathannaveen.dev/posts/dropping-ebpf-cpu-cost-by-90/"
    },
    {
      "by": "gaganyaan",
      "descendants": 841,
      "id": 49694296,
      "kids": [
        49696721,
        49700222,
        49694753,
        49695637,
        49698228,
        49695802,
        49695664,
        49695606,
        49707053,
        49708477,
        49695705,
        49695620,
        49694426,
        49694309,
        49694471,
        49705555,
        49694506,
        49706558,
        49697872,
        49698094,
        49694486,
        49696374,
        49696364,
        49695765,
        49700790,
        49694442,
        49703671,
        49708038,
        49707650,
        49700865,
        49707607,
        49694647,
        49694725,
        49695586,
        49700664,
        49695633,
        49700109,
        49699207,
        49697513,
        49700492,
        49702907,
        49695644,
        49696559,
        49698956,
        49697419,
        49696322,
        49694445,
        49703425,
        49707605,
        49694614,
        49704689,
        49700696,
        49705763,
        49703736,
        49694595,
        49707044,
        49701191,
        49694555,
        49697518,
        49704047,
        49701063,
        49696429,
        49695786,
        49694434,
        49695601,
        49694498,
        49701491,
        49704620,
        49694851,
        49700501,
        49694440,
        49696120,
        49695974,
        49702952,
        49696444
      ],
      "score": 573,
      "time": 1789379510,
      "title": "XCancel service is suspended until further notice",
      "type": "story",
      "url": "https://xcancel.com/#"
    },
    {
      "by": "fretlessjazz",
      "descendants": 11,
      "id": 49705442,
      "kids": [
        49708493,
        49708243,
        49707101,
        49707203,
        49707163,
        49706287,
        49707314,
        49706295,
        49706098
      ],
      "score": 54,
      "time": 1789426896,
      "title": "Show HN: Macros with a Behringer FCB1010 MIDI Pedalboard in macOS",
      "type": "story",
      "url": "https://github.com/JamesRyanATX/fcbnerd"
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
      "title": "The contagion of fear",
      "url": "https://bcantrill.dtrace.org/2026/09/13/the-contagion-of-fear/",
      "score": 118,
      "comments": 34,
      "tags": [
        "vibecoding"
      ],
      "id": "1ifr5f"
    },
    {
      "title": "\"Do You Still Read the Code?\"",
      "url": "https://zanlib.dev/blog/do-you-still-read-the-code/",
      "score": 33,
      "comments": 4,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "qiwlzz"
    },
    {
      "title": "What blog posts influenced your thinking the most?",
      "url": "",
      "score": 51,
      "comments": 33,
      "tags": [
        "ask",
        "practices"
      ],
      "id": "lbavmm"
    },
    {
      "title": "How can you not be romantic about UNIX domain sockets?",
      "url": "https://yuvalino.com/how-can-you-not-be-romantic-about-unix-domain-sockets",
      "score": 56,
      "comments": 4,
      "tags": [
        "c",
        "unix"
      ],
      "id": "uauns9"
    },
    {
      "title": "The case against JPEG XL",
      "url": "https://giannirosato.com/blog/post/case-against-jxl",
      "score": 59,
      "comments": 49,
      "tags": [
        "compsci"
      ],
      "id": "e1lcnf"
    },
    {
      "title": "A New Equal-Area Map for Interactive Computer Use (natively zooms to Mercator)",
      "url": "https://www.benjoffe.com/map",
      "score": 8,
      "comments": 4,
      "tags": [
        "math",
        "web"
      ],
      "id": "zttri6"
    },
    {
      "title": "Mergiraf: A syntax-aware git merge driver for a growing collection of programming languages and file formats",
      "url": "https://codeberg.org/mergiraf/mergiraf",
      "score": 45,
      "comments": 9,
      "tags": [
        "programming",
        "vcs"
      ],
      "id": "gslcz7"
    },
    {
      "title": "Anecdotally, programmers dislike \"reduce\"",
      "url": "https://evanhahn.com/posts/2026-09-13-programmers-dislike-reduce/",
      "score": 96,
      "comments": 87,
      "tags": [
        "programming"
      ],
      "id": "dhn991"
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
      "forks": 297,
      "added_stars": 3715,
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
      "forks": 2873,
      "added_stars": 8921,
      "builtBy": [
        {
          "username": "qin-ctx",
          "href": "https://github.com/qin-ctx",
          "avatar": "https://avatars.githubusercontent.com/u/234610432"
        },
        {
          "username": "ZaynJarvis",
          "href": "https://github.com/ZaynJarvis",
          "avatar": "https://avatars.githubusercontent.com/u/31875147"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2649,
      "added_stars": 24963,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3601,
      "added_stars": 18692,
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
      "author": "microsoft",
      "repo": "data-formulator",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/data-formulator",
      "desc": "🪄 Data Formulator is an interactive AI-powered data analysis system makes it easy to connect, explore and visualize data.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1673,
      "added_stars": 1158,
      "builtBy": [
        {
          "username": "Chenglong-MS",
          "href": "https://github.com/Chenglong-MS",
          "avatar": "https://avatars.githubusercontent.com/u/93549116"
        },
        {
          "username": "zhb-y-agent",
          "href": "https://github.com/zhb-y-agent",
          "avatar": "https://avatars.githubusercontent.com/u/233943790"
        },
        {
          "username": "danmarshall",
          "href": "https://github.com/danmarshall",
          "avatar": "https://avatars.githubusercontent.com/u/11507384"
        },
        {
          "username": "zhb-ai",
          "href": "https://github.com/zhb-ai",
          "avatar": "https://avatars.githubusercontent.com/u/233935264"
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
      "forks": 52983,
      "added_stars": 23551,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3115,
      "added_stars": 5252,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 19141,
      "added_stars": 20895,
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
          "username": "c020627",
          "href": "https://github.com/c020627",
          "avatar": "https://avatars.githubusercontent.com/u/251123242"
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
      "forks": 7946,
      "added_stars": 6550,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "wangzhaode",
          "href": "https://github.com/wangzhaode",
          "avatar": "https://avatars.githubusercontent.com/u/8401806"
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
      "forks": 4079,
      "added_stars": 11605,
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
      "author": "jundot",
      "repo": "omlx",
      "avatar": "https://github.com/jundot.png",
      "repo_link": "https://github.com/jundot/omlx",
      "desc": "LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1883,
      "added_stars": 3113,
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
      "author": "youssofal",
      "repo": "MTPLX",
      "avatar": "https://github.com/youssofal.png",
      "repo_link": "https://github.com/youssofal/MTPLX",
      "desc": "3x faster speeds on MLX | Qwen 3.8 27B | Native MTP Speculative Decoding On Apple Silicon With No External Drafter.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 172,
      "added_stars": 1163,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3519,
      "added_stars": 3965,
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
      "author": "Tencent",
      "repo": "AI-Infra-Guard",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/AI-Infra-Guard",
      "desc": "A full-stack AI Red Teaming platform securing AI ecosystems via Agent Scan, Skills Scan, MCP scan, AI Infra scan and LLM jailbreak evaluation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 586,
      "added_stars": 1806,
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
      "author": "sngyai",
      "repo": "Sequoia-X",
      "avatar": "https://github.com/sngyai.png",
      "repo_link": "https://github.com/sngyai/Sequoia-X",
      "desc": "A股自动选股系统 — 多种技术形态自动扫描，收盘后自动运行并推送飞书",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1474,
      "added_stars": 1953,
      "builtBy": [
        {
          "username": "sngyai",
          "href": "https://github.com/sngyai",
          "avatar": "https://avatars.githubusercontent.com/u/1306534"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ethqunzhong",
          "href": "https://github.com/ethqunzhong",
          "avatar": "https://avatars.githubusercontent.com/u/16517186"
        },
        {
          "username": "YipKo",
          "href": "https://github.com/YipKo",
          "avatar": "https://avatars.githubusercontent.com/u/17290550"
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
      "forks": 9624,
      "added_stars": 4962,
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
      "author": "semantica-agi",
      "repo": "semantica",
      "avatar": "https://github.com/semantica-agi.png",
      "repo_link": "https://github.com/semantica-agi/semantica",
      "desc": "Graph-Native Infrastructure for Context and Accountable AI Systems",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1438,
      "added_stars": 5580,
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
      "author": "experientiallabs",
      "repo": "experiential",
      "avatar": "https://github.com/experientiallabs.png",
      "repo_link": "https://github.com/experientiallabs/experiential",
      "desc": "Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend better models, and train a specialized model you own.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 175,
      "added_stars": 4496,
      "builtBy": [
        {
          "username": "SilenNaihin",
          "href": "https://github.com/SilenNaihin",
          "avatar": "https://avatars.githubusercontent.com/u/44129612"
        },
        {
          "username": "kfallah",
          "href": "https://github.com/kfallah",
          "avatar": "https://avatars.githubusercontent.com/u/9440350"
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
        }
      ]
    },
    {
      "author": "NVIDIA-NeMo",
      "repo": "Switchyard",
      "avatar": "https://github.com/NVIDIA-NeMo.png",
      "repo_link": "https://github.com/NVIDIA-NeMo/Switchyard",
      "desc": "Switchyard lets LLM applications route traffic across models and providers while preserving native OpenAI and Anthropic API compatibility - enabling flexible model selection, benchmarking, and cost/performance optimization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 275,
      "added_stars": 1665,
      "builtBy": [
        {
          "username": "nachiketb-nvidia",
          "href": "https://github.com/nachiketb-nvidia",
          "avatar": "https://avatars.githubusercontent.com/u/197974741"
        },
        {
          "username": "grahamking",
          "href": "https://github.com/grahamking",
          "avatar": "https://avatars.githubusercontent.com/u/180418"
        },
        {
          "username": "elyasmnvidian",
          "href": "https://github.com/elyasmnvidian",
          "avatar": "https://avatars.githubusercontent.com/u/186739590"
        },
        {
          "username": "ryan-lempka",
          "href": "https://github.com/ryan-lempka",
          "avatar": "https://avatars.githubusercontent.com/u/196090752"
        },
        {
          "username": "ayushag-nv",
          "href": "https://github.com/ayushag-nv",
          "avatar": "https://avatars.githubusercontent.com/u/208532109"
        }
      ]
    },
    {
      "author": "petergyang",
      "repo": "no-ai-slop",
      "avatar": "https://github.com/petergyang.png",
      "repo_link": "https://github.com/petergyang/no-ai-slop",
      "desc": "Removes 20+ patterns of AI slop from any piece of writing.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 691,
      "added_stars": 4436,
      "builtBy": [
        {
          "username": "petergyang",
          "href": "https://github.com/petergyang",
          "avatar": "https://avatars.githubusercontent.com/u/2383268"
        },
        {
          "username": "amateurhuman",
          "href": "https://github.com/amateurhuman",
          "avatar": "https://avatars.githubusercontent.com/u/374244"
        },
        {
          "username": "tmchow",
          "href": "https://github.com/tmchow",
          "avatar": "https://avatars.githubusercontent.com/u/517103"
        },
        {
          "username": "tymrtn",
          "href": "https://github.com/tymrtn",
          "avatar": "https://avatars.githubusercontent.com/u/4305058"
        },
        {
          "username": "CooperSheroy",
          "href": "https://github.com/CooperSheroy",
          "avatar": "https://avatars.githubusercontent.com/u/59650384"
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
      "forks": 689,
      "added_stars": 5026,
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
          "username": "ericzakariasson",
          "href": "https://github.com/ericzakariasson",
          "avatar": "https://avatars.githubusercontent.com/u/25622412"
        },
        {
          "username": "roshansada",
          "href": "https://github.com/roshansada",
          "avatar": "https://avatars.githubusercontent.com/u/930790"
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
      "forks": 5829,
      "added_stars": 16207,
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
      "forks": 502,
      "added_stars": 4111,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3585,
      "added_stars": 7801,
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
      "author": "every-app",
      "repo": "open-seo",
      "avatar": "https://github.com/every-app.png",
      "repo_link": "https://github.com/every-app/open-seo",
      "desc": "Open source alternative to Semrush and Ahrefs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2390,
      "added_stars": 6936,
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
      "author": "cordiverse",
      "repo": "cordis",
      "avatar": "https://github.com/cordiverse.png",
      "repo_link": "https://github.com/cordiverse/cordis",
      "desc": "Meta-Framework of Spatiotemporal Composability",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 532,
      "added_stars": 5391,
      "builtBy": [
        {
          "username": "shigma",
          "href": "https://github.com/shigma",
          "avatar": "https://avatars.githubusercontent.com/u/33423008"
        },
        {
          "username": "Hieuzest",
          "href": "https://github.com/Hieuzest",
          "avatar": "https://avatars.githubusercontent.com/u/16983883"
        },
        {
          "username": "undefined-moe",
          "href": "https://github.com/undefined-moe",
          "avatar": "https://avatars.githubusercontent.com/u/29992205"
        },
        {
          "username": "cyans-nya",
          "href": "https://github.com/cyans-nya",
          "avatar": "https://avatars.githubusercontent.com/u/68551684"
        },
        {
          "username": "morluto",
          "href": "https://github.com/morluto",
          "avatar": "https://avatars.githubusercontent.com/u/76467478"
        }
      ]
    },
    {
      "author": "advaitpaliwal",
      "repo": "feynman",
      "avatar": "https://github.com/advaitpaliwal.png",
      "repo_link": "https://github.com/advaitpaliwal/feynman",
      "desc": "The open source AI research agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1074,
      "added_stars": 1109,
      "builtBy": [
        {
          "username": "advaitpaliwal",
          "href": "https://github.com/advaitpaliwal",
          "avatar": "https://avatars.githubusercontent.com/u/66044327"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shkao",
          "href": "https://github.com/shkao",
          "avatar": "https://avatars.githubusercontent.com/u/4758311"
        },
        {
          "username": "randomm",
          "href": "https://github.com/randomm",
          "avatar": "https://avatars.githubusercontent.com/u/259547"
        },
        {
          "username": "Dunya-8a",
          "href": "https://github.com/Dunya-8a",
          "avatar": "https://avatars.githubusercontent.com/u/53619378"
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
      "forks": 267,
      "added_stars": 2169,
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
      "author": "melgarafael",
      "repo": "DeskcommCRM",
      "avatar": "https://github.com/melgarafael.png",
      "repo_link": "https://github.com/melgarafael/DeskcommCRM",
      "desc": "Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA). Open alternative to Kommo, Octadesk & Intercom for any business that sells by chat. MCP-ready, multi-tenant, LGPD.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 648,
      "added_stars": 1923,
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
          "username": "jmpo",
          "href": "https://github.com/jmpo",
          "avatar": "https://avatars.githubusercontent.com/u/23352109"
        },
        {
          "username": "JowaniOrantes",
          "href": "https://github.com/JowaniOrantes",
          "avatar": "https://avatars.githubusercontent.com/u/99059532"
        },
        {
          "username": "rafaelmelgaco",
          "href": "https://github.com/rafaelmelgaco",
          "avatar": "https://avatars.githubusercontent.com/u/163351162"
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
      "forks": 9084,
      "added_stars": 2807,
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
      "author": "solidjs",
      "repo": "solid",
      "avatar": "https://github.com/solidjs.png",
      "repo_link": "https://github.com/solidjs/solid",
      "desc": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1113,
      "added_stars": 262,
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
      "author": "maotoumao",
      "repo": "MusicFree",
      "avatar": "https://github.com/maotoumao.png",
      "repo_link": "https://github.com/maotoumao/MusicFree",
      "desc": "插件化、定制化、无广告的免费音乐播放器",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1934,
      "added_stars": 875,
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
      "author": "colinhacks",
      "repo": "zod",
      "avatar": "https://github.com/colinhacks.png",
      "repo_link": "https://github.com/colinhacks/zod",
      "desc": "TypeScript-first schema validation with static type inference",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2189,
      "added_stars": 540,
      "builtBy": [
        {
          "username": "colinhacks",
          "href": "https://github.com/colinhacks",
          "avatar": "https://avatars.githubusercontent.com/u/3084745"
        },
        {
          "username": "JacobWeisenburger",
          "href": "https://github.com/JacobWeisenburger",
          "avatar": "https://avatars.githubusercontent.com/u/31667350"
        },
        {
          "username": "scotttrinh",
          "href": "https://github.com/scotttrinh",
          "avatar": "https://avatars.githubusercontent.com/u/1682194"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "igalklebanov",
          "href": "https://github.com/igalklebanov",
          "avatar": "https://avatars.githubusercontent.com/u/14938291"
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
      "forks": 1292,
      "added_stars": 2871,
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
      "title": "The Symmetry of State: Why Flutter Deserves context.value and context.state",
      "description": "Eliminating the widget builder tax, closure fatigue, and the context.watch trap in Flutter: how 1:1 symmetry between containers and BuildContext unlocks cleaner, faster reactive apps.",
      "url": "https://dev.to/gde/the-symmetry-of-state-why-flutter-deserves-contextvalue-and-contextstate-4250",
      "tags": "flutter, dart, architecture, programming",
      "reactions": 8,
      "comments": 1,
      "reading_time": 9,
      "author": "randalschwartz"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-38bf",
      "tags": "discuss, jokes, watercooler",
      "reactions": 36,
      "comments": 23,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Build in the VM, Think on the Mac GPU: Debian 13 on Apple container With a Local Gemma 4",
      "description": "Apple's container CLI 1.4.1 cannot boot the official debian:13 image as a machine, because it has no /sbin/init. A small Dockerfile fixes that and gives you a persistent Debian 13 VM with systemd, your Mac user and your home folder. The VM has no GPU, so Ollama runs on macOS and the VM calls it at 192.168.64.1:8000. From inside Debian, gemma4:e2b answered at 45.2 tok/s, loaded 100% on the M3 GPU.",
      "url": "https://dev.to/gde/build-in-the-vm-think-on-the-mac-gpu-debian-13-on-apple-container-with-a-local-gemma-4-2d8b",
      "tags": "debian, macos, ollama, linux",
      "reactions": 9,
      "comments": 1,
      "reading_time": 16,
      "author": "xbill"
    },
    {
      "title": "The Modern Pitch for BlocSignal: Why Engineering Leads Are Moving to Reactive Primitives",
      "description": "A comprehensive guide for tech leads, staff architects, and engineering managers evaluating BlocSignal: cutting through CISC ceremony, unlocking AI agent velocity, eliminating the code-gen tax, and mastering push-pull reactivity.",
      "url": "https://dev.to/gde/the-modern-pitch-for-blocsignal-why-engineering-leads-are-moving-to-reactive-primitives-5d5h",
      "tags": "flutter, dart, architecture, programming",
      "reactions": 8,
      "comments": 1,
      "reading_time": 15,
      "author": "randalschwartz"
    },
    {
      "title": "Gemma 4 on an 2021 4 GB Laptop GPU: QAT Takes It From 9.5 GiB to 1.6",
      "description": "Step-by-step: running Google's quantization-aware-trained Gemma 4 E2B on a 10th-gen Core i7 laptop with a 4 GB GTX 1650 Ti — why bf16 and int8 cannot fit, why the QAT GGUF does with room to spare, and managing it with an MCP server.",
      "url": "https://dev.to/gde/gemma-4-on-an-old-4-gb-laptop-gpu-qat-takes-it-from-95-gib-to-16-b5l",
      "tags": "gemma, llamacpp, mcp, cuda",
      "reactions": 10,
      "comments": 3,
      "reading_time": 13,
      "author": "xbill"
    },
    {
      "title": "What was your win this week??",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-5amk",
      "tags": "weeklyretro",
      "reactions": 34,
      "comments": 39,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Nano Banana 2 Lite, Revisited: MCP 2.0, the New Interactions API, and Three Agent CLIs",
      "description": "The Nano Banana 2 Lite MCP server from July, updated: FastMCP is now MCPServer, google-genai 1.x gets a 400 from the Interactions API, and one server now runs in Claude Code, Codex and Antigravity CLI.",
      "url": "https://dev.to/gde/nano-banana-2-lite-revisited-mcp-20-the-new-interactions-api-and-three-agent-clis-37g5",
      "tags": "mcp, python, gemini, claudecode",
      "reactions": 10,
      "comments": 1,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "20 Agentic AI Terms Every Developer Should Know (Explained Simply)",
      "description": "Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...",
      "url": "https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii",
      "tags": "ai, agents, mcp, beginners",
      "reactions": 224,
      "comments": 115,
      "reading_time": 11,
      "author": "sylwia-lask"
    },
    {
      "title": "My Agents Never Get Tired. I Do: On Satisficing",
      "description": "I approved a prompt on a Tuesday morning and went to make a cup of Irish Afternoon tea. By the time I...",
      "url": "https://dev.to/earlgreyhot1701d/my-agents-never-get-tired-i-do-on-satisficing-1mb",
      "tags": "ai, buildinpublic, agents, discuss",
      "reactions": 34,
      "comments": 27,
      "reading_time": 8,
      "author": "earlgreyhot1701d"
    },
    {
      "title": "2B Gemma 4 Deployment with Cloud Run, NVIDIA L4, MCP SDK 2.x, and Claude Code",
      "description": "Step by step deployment of Gemma 4 E2B to a Cloud Run NVIDIA L4 GPU with vLLM, managed by a Python MCP server migrated to the MCP SDK 2.x.",
      "url": "https://dev.to/gde/2b-gemma-4-deployment-with-cloud-run-nvidia-l4-mcp-sdk-2x-and-claude-code-4ml3",
      "tags": "mcp, gemma, googlecloud, claudecode",
      "reactions": 8,
      "comments": 1,
      "reading_time": 13,
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
      "title": "AI Avatar v20, Cursor Avatar, Notification Avatar (Voxel Avatar)🧊",
      "description": "Intro   AI Avatar is a free app where your VRoid (VRM) avatar cheers you with all its...",
      "url": "https://dev.to/webdeveloperhyper/ai-avatar-v20-cursor-avatar-notification-avatar-voxel-avatar-4dd2",
      "tags": "ai, webdev, productivity, discuss",
      "reactions": 47,
      "comments": 20,
      "reading_time": 4,
      "author": "webdeveloperhyper"
    },
    {
      "title": "I Built a Mac Menu Bar App Because I Kept Saying \"Wait, What?\" in Every Meeting (Live Demo 🚀)",
      "description": "Someone on a Zoom call said a URL yesterday. I was still writing down the previous bullet point. By...",
      "url": "https://dev.to/varshithvhegde/i-built-a-mac-menu-bar-app-because-i-kept-saying-wait-what-in-every-meeting-live-demo--3gkj",
      "tags": "ai, programming, productivity, discuss",
      "reactions": 22,
      "comments": 17,
      "reading_time": 9,
      "author": "varshithvhegde"
    },
    {
      "title": "Claude Code Skills Worth Trying: From Vague Idea to Finished Feature",
      "description": "I’ve tried out a lot of Claude Code skills, and a few of them are especially useful when you combine...",
      "url": "https://dev.to/sizzlebop/claude-code-skills-worth-trying-from-vague-idea-to-finished-feature-1nhe",
      "tags": "ai, agents, agentskills, productivity",
      "reactions": 11,
      "comments": 4,
      "reading_time": 11,
      "author": "sizzlebop"
    },
    {
      "title": "Yes, you still need to know how to code",
      "description": "AI writes good code, faster than me most of the time and usually cleaner than my first pass. I'm not...",
      "url": "https://dev.to/basteez/yes-you-still-need-to-know-how-to-code-3lm9",
      "tags": "ai, programming, productivity, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "basteez"
    },
    {
      "title": "How I Turned Scattered Workstations into a Super Agentic Setup",
      "description": "Welcome to my corner of the internet! I'm Moses Amani, and recently I started an incredible journey...",
      "url": "https://dev.to/amani_moses_3166424e7ee1c/how-i-turned-scattered-workstations-into-a-super-agentic-setup-1ndb",
      "tags": "agents, ai, automation, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "amani_moses_3166424e7ee1c"
    },
    {
      "title": "How I Built a 4MB iOS App Blocker to Stop Doomscrolling",
      "description": "The story of how fighting dopamine loops led to building Scroll Brake, why popular competitors demand...",
      "url": "https://dev.to/diana_novas/how-i-built-a-4mb-ios-app-blocker-to-stop-doomscrolling-2hkp",
      "tags": "doomscrolling, ios, swift, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "diana_novas"
    },
    {
      "title": "12 questions to ask before you buy a text-to-SQL tool",
      "description": "Every demo works. The demo is the easy part. These are the questions that separate a tool your...",
      "url": "https://dev.to/giaa_a5d787a32b92a/12-questions-to-ask-before-you-buy-a-text-to-sql-tool-59dd",
      "tags": "ai, webdev, programming, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 9,
      "author": "giaa_a5d787a32b92a"
    },
    {
      "title": "What Painting Taught Me About Managing Technical Projects",
      "description": "On attention, patience, and what painting taught me about really listening to...",
      "url": "https://dev.to/juaria_iqbal/what-painting-taught-me-about-managing-technical-projects-1hf5",
      "tags": "productivity, creativity, career, leadership",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "juaria_iqbal"
    },
    {
      "title": "Revive it or let it stay dead: a repairer's test for dead projects",
      "description": "A three-check method for deciding whether a dead project deserves a revival, with the Atom editor as the worked example.",
      "url": "https://dev.to/ivo_repairer/revive-it-or-let-it-stay-dead-a-repairers-test-for-dead-projects-1g9",
      "tags": "ai, opensource, programming, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "ivo_repairer"
    },
    {
      "title": "Introducing vibewalking",
      "description": "The problems   In March 2026 my back began to hurt a lot more than usual. I had a standing...",
      "url": "https://dev.to/bhirbec/introducing-vibewalking-4mi6",
      "tags": "showdev, ai, productivity, devtools",
      "reactions": 1,
      "comments": 1,
      "reading_time": 3,
      "author": "bhirbec"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

