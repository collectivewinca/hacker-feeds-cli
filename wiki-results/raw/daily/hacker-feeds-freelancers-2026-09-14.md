# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-09-14 06:49:10 UTC

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
      "forks": 38571,
      "added_stars": 7264,
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
      "forks": 874,
      "added_stars": 1181,
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
      "author": "bilawalsidhu",
      "repo": "gods-eye-view",
      "avatar": "https://github.com/bilawalsidhu.png",
      "repo_link": "https://github.com/bilawalsidhu/gods-eye-view",
      "desc": "A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6487,
      "added_stars": 12931,
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
      "author": "DietrichGebert",
      "repo": "ponytail",
      "avatar": "https://github.com/DietrichGebert.png",
      "repo_link": "https://github.com/DietrichGebert/ponytail",
      "desc": "Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7385,
      "added_stars": 8444,
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
      "forks": 4035,
      "added_stars": 10132,
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
      "forks": 7597,
      "added_stars": 2678,
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
      "author": "jo-inc",
      "repo": "camofox-browser",
      "avatar": "https://github.com/jo-inc.png",
      "repo_link": "https://github.com/jo-inc/camofox-browser",
      "desc": "Stealth headless browser for AI agents — bypass Cloudflare, bot detection, and anti-scraping. Drop-in Puppeteer/Playwright replacement.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1085,
      "added_stars": 1788,
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
      "author": "asgeirtj",
      "repo": "system_prompts_leaks",
      "avatar": "https://github.com/asgeirtj.png",
      "repo_link": "https://github.com/asgeirtj/system_prompts_leaks",
      "desc": "Extracted system prompts from Anthropic - Claude Fable 5.1, Opus 5, Claude Design, Claude Code. OpenAI - ChatGPT GPT-6-Astra, Codex. Google - Gemini 3.8 Flash, 3.1 Pro, Antigravity. xAI - Grok, Grok Bot, Cursor, Kimi and more! Updated regularly.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 10824,
      "added_stars": 1745,
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
      "forks": 5249,
      "added_stars": 1434,
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
      "author": "Stremio",
      "repo": "stremio-web",
      "avatar": "https://github.com/Stremio.png",
      "repo_link": "https://github.com/Stremio/stremio-web",
      "desc": "Stremio - Freedom to Stream",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1581,
      "added_stars": 470,
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
      "author": "FB208",
      "repo": "OpenBidKit_Yibiao",
      "avatar": "https://github.com/FB208.png",
      "repo_link": "https://github.com/FB208/OpenBidKit_Yibiao",
      "desc": "开箱即用的AI标书编写工具，标书AI生成工具，投标工具箱、知识库、标书查重、废标项检查，完全开源免费，欢迎使用",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 753,
      "added_stars": 140,
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
      "author": "WorldFlowAI",
      "repo": "everything-claude-code",
      "avatar": "https://github.com/WorldFlowAI.png",
      "repo_link": "https://github.com/WorldFlowAI/everything-claude-code",
      "desc": "Claude Code toolkit - agents, commands, skills, rules, and hooks for productive AI-assisted development",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 449,
      "added_stars": 358,
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
      "author": "OpenWhispr",
      "repo": "openwhispr",
      "avatar": "https://github.com/OpenWhispr.png",
      "repo_link": "https://github.com/OpenWhispr/openwhispr",
      "desc": "Voice-to-text dictation app with local (Nvidia Parakeet/Whisper) and cloud models (BYOK). Privacy-first and available cross-platform.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1000,
      "added_stars": 903,
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
      "author": "is-a-dev",
      "repo": "register",
      "avatar": "https://github.com/is-a-dev.png",
      "repo_link": "https://github.com/is-a-dev/register",
      "desc": "Grab your own sweet-looking '.is-a.dev' subdomain.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 29454,
      "added_stars": 105,
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
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4939,
      "added_stars": 302,
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
      "forks": 51341,
      "added_stars": 1401,
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
      "author": "louislam",
      "repo": "uptime-kuma",
      "avatar": "https://github.com/louislam.png",
      "repo_link": "https://github.com/louislam/uptime-kuma",
      "desc": "A fancy self-hosted monitoring tool",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 8406,
      "added_stars": 336,
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
      "author": "Anil-matcha",
      "repo": "Open-Generative-AI",
      "avatar": "https://github.com/Anil-matcha.png",
      "repo_link": "https://github.com/Anil-matcha/Open-Generative-AI",
      "desc": "Unrestricted Open-source alternative to AI video platforms — Free AI image & video generation studio with 600+ models (Flux, Midjourney, Kling, Sora, Veo). No content filters. Self-hosted, MIT licensed.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5062,
      "added_stars": 555,
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
      "author": "mrdoob",
      "repo": "three.js",
      "avatar": "https://github.com/mrdoob.png",
      "repo_link": "https://github.com/mrdoob/three.js",
      "desc": "JavaScript 3D Library.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 36552,
      "added_stars": 330,
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
      "author": "maboloshi",
      "repo": "github-chinese",
      "avatar": "https://github.com/maboloshi.png",
      "repo_link": "https://github.com/maboloshi/github-chinese",
      "desc": "GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1894,
      "added_stars": 467,
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
      "author": "vercel",
      "repo": "next.js",
      "avatar": "https://github.com/vercel.png",
      "repo_link": "https://github.com/vercel/next.js",
      "desc": "The React Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 31903,
      "added_stars": 252,
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
      "author": "decaporg",
      "repo": "decap-cms",
      "avatar": "https://github.com/decaporg.png",
      "repo_link": "https://github.com/decaporg/decap-cms",
      "desc": "A Git-based CMS for Static Site Generators",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3130,
      "added_stars": 30,
      "builtBy": [
        {
          "username": "erquhart",
          "href": "https://github.com/erquhart",
          "avatar": "https://avatars.githubusercontent.com/u/2112202"
        },
        {
          "username": "renovate-bot",
          "href": "https://github.com/renovate-bot",
          "avatar": "https://avatars.githubusercontent.com/u/25180681"
        },
        {
          "username": "erezrokah",
          "href": "https://github.com/erezrokah",
          "avatar": "https://avatars.githubusercontent.com/u/26760571"
        },
        {
          "username": "martinjagodic",
          "href": "https://github.com/martinjagodic",
          "avatar": "https://avatars.githubusercontent.com/u/42938138"
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
      "by": "u1hcw9nx",
      "descendants": 316,
      "id": 49688695,
      "kids": [
        49692135,
        49689302,
        49689080,
        49689163,
        49689988,
        49692041,
        49689335,
        49692588,
        49689388,
        49689061,
        49689430,
        49689089,
        49689415,
        49692395,
        49690063,
        49692597,
        49690842,
        49689251,
        49689130,
        49689811,
        49692407,
        49689423,
        49691322,
        49690793,
        49689548,
        49690625,
        49690909,
        49691093,
        49692142,
        49691888,
        49689214,
        49690788,
        49690783,
        49690010,
        49691925,
        49690134,
        49691944,
        49691142,
        49690245,
        49690096,
        49689230,
        49689453,
        49690045,
        49689091,
        49692241,
        49691442,
        49689768,
        49689212,
        49689220,
        49691990,
        49689908,
        49692280,
        49689235,
        49690934,
        49690732,
        49692363,
        49691097,
        49690904,
        49691139,
        49689170,
        49689327,
        49692350,
        49692323,
        49689910,
        49691791,
        49692307,
        49690744,
        49690572,
        49691370,
        49691397
      ],
      "score": 763,
      "time": 1789333573,
      "title": "Fable 5.1 Solves the Cyphral Distich, a 370-year-old cipher",
      "type": "story",
      "url": "https://www.vals.ai/blogs/fable-solves-cyphral-distich"
    },
    {
      "by": "bryanrasmussen",
      "descendants": 0,
      "id": 49692765,
      "score": 5,
      "time": 1789367646,
      "title": "Of Gods and Languages: On \"When God Spoke Greek\"",
      "type": "story",
      "url": "https://lareviewofbooks.org/article/of-gods-and-languages-on-when-god-spoke-greek/"
    },
    {
      "by": "zdw",
      "descendants": 30,
      "id": 49638510,
      "kids": [
        49692846,
        49692403,
        49692837,
        49691261,
        49691077,
        49691372,
        49692240,
        49691844,
        49691084,
        49691130,
        49691079,
        49691212,
        49691829
      ],
      "score": 159,
      "time": 1789015472,
      "title": "Spaceships (Reverse Asteroid)",
      "type": "story",
      "url": "https://spaceships.treybastian.com/"
    },
    {
      "by": "Cider9986",
      "descendants": 91,
      "id": 49689048,
      "kids": [
        49690224,
        49690265,
        49690178,
        49690135,
        49690129,
        49691725,
        49690637,
        49690469,
        49691026,
        49692786,
        49690762,
        49690189,
        49689829
      ],
      "score": 200,
      "time": 1789336024,
      "title": "Registration without a phone number on Signal will use zero-knowledge proofs",
      "type": "story",
      "url": "https://community.signalusers.org/t/registration-without-a-phone-number/2222?page=10"
    },
    {
      "by": "contact9879",
      "descendants": 132,
      "id": 49690554,
      "kids": [
        49692494,
        49690741,
        49692311,
        49690834,
        49692252,
        49692685,
        49691256,
        49690980,
        49691354,
        49690856,
        49690698,
        49690859,
        49690751,
        49692570,
        49690789,
        49691022,
        49690819,
        49692283
      ],
      "score": 105,
      "time": 1789347757,
      "title": "The case against JPEG XL",
      "type": "story",
      "url": "https://giannirosato.com/blog/post/case-against-jxl/"
    },
    {
      "by": "herbertl",
      "descendants": 42,
      "id": 49690174,
      "kids": [
        49691668,
        49691494,
        49691945,
        49691216,
        49692478,
        49692089,
        49691450,
        49692717,
        49691846
      ],
      "score": 130,
      "time": 1789344681,
      "title": "Apple's Dimensional Drawings",
      "type": "story",
      "url": "https://developer.apple.com/accessories/dimensional-drawings/"
    },
    {
      "by": "knowablemag",
      "descendants": 3,
      "id": 49662246,
      "kids": [
        49691926,
        49692756
      ],
      "score": 35,
      "time": 1789148291,
      "title": "Rope, twine and thread: Invisible technologies of the Stone Age",
      "type": "story",
      "url": "https://knowablemagazine.org/content/article/society/2026/prehistory-lost-threads"
    },
    {
      "by": "rasengan0",
      "descendants": 10,
      "id": 49690678,
      "kids": [
        49691391,
        49691880,
        49691403
      ],
      "score": 46,
      "time": 1789348955,
      "title": "The Malicious Use of Artificial Intelligence",
      "type": "story",
      "url": "https://arxiv.org/abs/1802.07228"
    },
    {
      "by": "bookofjoe",
      "descendants": 201,
      "id": 49683953,
      "kids": [
        49684930,
        49689409,
        49692534,
        49692726,
        49684449,
        49687774,
        49684363,
        49684998,
        49684853,
        49685028,
        49685056,
        49690673,
        49691892,
        49691530,
        49684973,
        49692290,
        49688187,
        49684639,
        49688931,
        49688543,
        49684864,
        49685227,
        49684441,
        49692499,
        49683960,
        49685947,
        49687545,
        49692126,
        49687840,
        49684526,
        49684340
      ],
      "score": 384,
      "text": "<a href=\"https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260913134705&#x2F;https:&#x2F;&#x2F;www.theverge.com&#x2F;column&#x2F;994172&#x2F;your-car-is-selling-your-data\" rel=\"nofollow\">https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20260913134705&#x2F;https:&#x2F;&#x2F;www.theve...</a><p><a href=\"https:&#x2F;&#x2F;archive.ph&#x2F;TWEVZ\" rel=\"nofollow\">https:&#x2F;&#x2F;archive.ph&#x2F;TWEVZ</a>",
      "time": 1789307108,
      "title": "Data collected by cars and sold to third parties",
      "type": "story",
      "url": "https://www.theverge.com/column/994172/your-car-is-selling-your-data"
    },
    {
      "by": "andsoitis",
      "descendants": 28,
      "id": 49690279,
      "kids": [
        49691463,
        49691860,
        49691081,
        49692087,
        49692539,
        49690585,
        49691634,
        49691554,
        49691903,
        49691688,
        49692243
      ],
      "score": 56,
      "time": 1789345631,
      "title": "Writing a better reality: The case for optimistic sci-fi (2022)",
      "type": "story",
      "url": "https://honisoit.com/2022/03/writing-a-better-reality-the-case-for-optimistic-sci-fi/"
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
      "title": "a better way of blocking macOS updates",
      "url": "https://zoey-on-github.github.io/blog/updates.html",
      "score": 13,
      "comments": 3,
      "tags": [
        "mac"
      ],
      "id": "betbip"
    },
    {
      "title": "Linux Zoom Client Proactively Reads X11 Clipboard",
      "url": "https://hachyderm.io/@simontatham/117201594980991062",
      "score": 68,
      "comments": 36,
      "tags": [
        "linux",
        "security"
      ],
      "id": "8t1ddm"
    },
    {
      "title": "A Few Good Ideas in Programming Languages",
      "url": "https://prydt.xyz/blog/a-few-good-ideas-in-pl/",
      "score": 39,
      "comments": 11,
      "tags": [
        "plt"
      ],
      "id": "er0hfp"
    },
    {
      "title": "Opusfived",
      "url": "https://opusfived.dev/",
      "score": 55,
      "comments": 10,
      "tags": [
        "satire",
        "vibecoding"
      ],
      "id": "scyufg"
    },
    {
      "title": "Nobody pays for open source. We can force them to",
      "url": "https://seldo.com/posts/nobody-pays-for-open-source-we-can-force-them-to/",
      "score": 14,
      "comments": 11,
      "tags": [
        "culture"
      ],
      "id": "oqkml5"
    },
    {
      "title": "xkcd-font: The xkcd font",
      "url": "https://github.com/ipython/xkcd-font",
      "score": 49,
      "comments": 5,
      "tags": [
        "design"
      ],
      "id": "o6rlho"
    },
    {
      "title": "Don't call yourself an artisanal programmer",
      "url": "https://purplesyringa.moe/blog/dont-call-yourself-an-artisanal-programmer/",
      "score": 21,
      "comments": 30,
      "tags": [
        "culture",
        "philosophy",
        "rant",
        "vibecoding"
      ],
      "id": "dmlzwx"
    },
    {
      "title": "The gpg.fail aftermath: On responsible disclosure, GPG, and the state of security in 2026 [32:37]",
      "url": "https://media.ccc.de/v/2026-728-the-gpg-fail-aftermath-on-responsible-disclosure-gpg-and-the-state-of-security-in-2026",
      "score": 29,
      "comments": 6,
      "tags": [
        "cryptography",
        "security",
        "video"
      ],
      "id": "fcttpk"
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
      "forks": 291,
      "added_stars": 3635,
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
      "forks": 2852,
      "added_stars": 8745,
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
      "forks": 2573,
      "added_stars": 24025,
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
      "forks": 3392,
      "added_stars": 15895,
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
      "forks": 52932,
      "added_stars": 24869,
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
      "author": "youssofal",
      "repo": "MTPLX",
      "avatar": "https://github.com/youssofal.png",
      "repo_link": "https://github.com/youssofal/MTPLX",
      "desc": "3x faster speeds on MLX | Qwen 3.8 27B | Native MTP Speculative Decoding On Apple Silicon With No External Drafter.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 171,
      "added_stars": 1153,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3107,
      "added_stars": 5192,
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
      "forks": 19089,
      "added_stars": 20878,
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
      "author": "jundot",
      "repo": "omlx",
      "avatar": "https://github.com/jundot.png",
      "repo_link": "https://github.com/jundot/omlx",
      "desc": "LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1876,
      "added_stars": 3106,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7921,
      "added_stars": 6429,
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
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4064,
      "added_stars": 11530,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3506,
      "added_stars": 4031,
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
      "forks": 584,
      "added_stars": 1796,
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
      "forks": 1468,
      "added_stars": 1910,
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
      "author": "semantica-agi",
      "repo": "semantica",
      "avatar": "https://github.com/semantica-agi.png",
      "repo_link": "https://github.com/semantica-agi/semantica",
      "desc": "Graph-Native Infrastructure for Context and Accountable AI Systems",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1433,
      "added_stars": 6477,
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
      "author": "titanwings",
      "repo": "distilly",
      "avatar": "https://github.com/titanwings.png",
      "repo_link": "https://github.com/titanwings/distilly",
      "desc": "Distilly — Distill how they think into reusable Skills for any Agent or Bot. Formerly Colleague Skill（原同事 Skill）.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2144,
      "added_stars": 3754,
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
      "forks": 9609,
      "added_stars": 4901,
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
      "author": "NVIDIA-NeMo",
      "repo": "Switchyard",
      "avatar": "https://github.com/NVIDIA-NeMo.png",
      "repo_link": "https://github.com/NVIDIA-NeMo/Switchyard",
      "desc": "Switchyard lets LLM applications route traffic across models and providers while preserving native OpenAI and Anthropic API compatibility - enabling flexible model selection, benchmarking, and cost/performance optimization.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 270,
      "added_stars": 1905,
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
          "username": "ryan-lempka",
          "href": "https://github.com/ryan-lempka",
          "avatar": "https://avatars.githubusercontent.com/u/196090752"
        },
        {
          "username": "elyasmnvidian",
          "href": "https://github.com/elyasmnvidian",
          "avatar": "https://avatars.githubusercontent.com/u/186739590"
        },
        {
          "username": "ayushag-nv",
          "href": "https://github.com/ayushag-nv",
          "avatar": "https://avatars.githubusercontent.com/u/208532109"
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
      "added_stars": 4416,
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
      "author": "cactus-compute",
      "repo": "needle",
      "avatar": "https://github.com/cactus-compute.png",
      "repo_link": "https://github.com/cactus-compute/needle",
      "desc": "14MB foundation model for tiny devices; phones, wearables, smart home, and robots.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 709,
      "added_stars": 6220,
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
      "forks": 676,
      "added_stars": 4967,
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
      "forks": 5796,
      "added_stars": 15888,
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
      "forks": 498,
      "added_stars": 4056,
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
      "author": "cordiverse",
      "repo": "cordis",
      "avatar": "https://github.com/cordiverse.png",
      "repo_link": "https://github.com/cordiverse/cordis",
      "desc": "Meta-Framework of Spatiotemporal Composability",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 530,
      "added_stars": 7887,
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
      "author": "every-app",
      "repo": "open-seo",
      "avatar": "https://github.com/every-app.png",
      "repo_link": "https://github.com/every-app/open-seo",
      "desc": "Open source alternative to Semrush and Ahrefs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2372,
      "added_stars": 6994,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3543,
      "added_stars": 7674,
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
      "forks": 265,
      "added_stars": 2157,
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
      "forks": 9080,
      "added_stars": 2777,
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
      "added_stars": 273,
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
      "forks": 1930,
      "added_stars": 871,
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
      "author": "CodebuffAI",
      "repo": "freebuff",
      "avatar": "https://github.com/CodebuffAI.png",
      "repo_link": "https://github.com/CodebuffAI/freebuff",
      "desc": "The free coding agent",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1287,
      "added_stars": 3013,
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
      "author": "advaitpaliwal",
      "repo": "feynman",
      "avatar": "https://github.com/advaitpaliwal.png",
      "repo_link": "https://github.com/advaitpaliwal/feynman",
      "desc": "The open source AI research agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1071,
      "added_stars": 1092,
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
      "author": "apify",
      "repo": "apify-mcp-server",
      "avatar": "https://github.com/apify.png",
      "repo_link": "https://github.com/apify/apify-mcp-server",
      "desc": "The Apify MCP server enables your AI agents to extract data from social media, search engines, maps, e-commerce sites, or any other website using thousands of ready-made scrapers, crawlers, and automation tools available on the Apify Store.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 264,
      "added_stars": 3500,
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
      "reactions": 33,
      "comments": 37,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "20 Agentic AI Terms Every Developer Should Know (Explained Simply)",
      "description": "Do you ever feel like the AI world has moved forward a little too quickly?&nbsp;You hear about...",
      "url": "https://dev.to/sylwia-lask/20-agentic-ai-terms-every-developer-should-know-explained-simply-jii",
      "tags": "ai, agents, mcp, beginners",
      "reactions": 221,
      "comments": 115,
      "reading_time": 11,
      "author": "sylwia-lask"
    },
    {
      "title": "Autoscaling Docker Containers Without Kubernetes: How Gubernator Scales CPU & GPU Workloads Automatically",
      "description": "Discover how Gubernator delivers declarative Horizontal Pod Autoscaling (HPA) for plain Docker Compose stacks with CPU and NVIDIA GPU metrics across multi-node clusters.",
      "url": "https://dev.to/gde/autoscaling-docker-containers-without-kubernetes-how-gubernator-scales-cpu-gpu-workloads-1p0b",
      "tags": "devops, docker, go, cloud",
      "reactions": 7,
      "comments": 3,
      "reading_time": 4,
      "author": "marioezquerro"
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
    },
    {
      "title": "Bidirectional Writeback for Apache Iceberg via Google Sheets: Serverless Lakehouse Console",
      "description": "Turn Google Sheets into a Fully Interactive, Differential ACID Mutation Console for Apache Iceberg...",
      "url": "https://dev.to/gde/bidirectional-writeback-for-apache-iceberg-via-google-sheets-serverless-lakehouse-console-14ic",
      "tags": "googleworkspace, googlecloud, bigquery, apacheiceberg",
      "reactions": 7,
      "comments": 0,
      "reading_time": 26,
      "author": "tanaike"
    },
    {
      "title": "Serverless Multimodal Vector Search on Apache Iceberg via Google Apps Script",
      "description": "Turn Google Drive into an AI-Powered Lakehouse Vector Engine across Converted PDFs, Binary Images,...",
      "url": "https://dev.to/gde/serverless-multimodal-vector-search-on-apache-iceberg-via-google-apps-script-4fg",
      "tags": "googleworkspace, googlecloud, bigquery, apacheiceberg",
      "reactions": 7,
      "comments": 0,
      "reading_time": 22,
      "author": "tanaike"
    },
    {
      "title": "FastMCP Is Now MCPServer: Migrating a Python MCP Server to the MCP SDK 2.x",
      "description": "Step-by-step: moving a FastMCP server to the MCP Python SDK 2.x — what broke, what changed, what did not, and a redeploy of its Gemma 4 vLLM backend to a Cloud Run L4 GPU.",
      "url": "https://dev.to/gde/fastmcp-is-now-mcpserver-migrating-a-python-mcp-server-to-the-mcp-sdk-2x-2nhj",
      "tags": "mcp, python, googlecloud, vllm",
      "reactions": 13,
      "comments": 8,
      "reading_time": 12,
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
      "title": "I Built a Mac Menu Bar App Because I Kept Saying \"Wait, What?\" in Every Meeting (Live Demo 🚀)",
      "description": "Someone on a Zoom call said a URL yesterday. I was still writing down the previous bullet point. By...",
      "url": "https://dev.to/varshithvhegde/i-built-a-mac-menu-bar-app-because-i-kept-saying-wait-what-in-every-meeting-live-demo--3gkj",
      "tags": "ai, programming, productivity, discuss",
      "reactions": 14,
      "comments": 13,
      "reading_time": 9,
      "author": "varshithvhegde"
    },
    {
      "title": "AI Avatar v20, Cursor Avatar, Notification Avatar (Voxel Avatar)🧊",
      "description": "Intro   AI Avatar is a free app where your VRoid (VRM) avatar cheers you with all its...",
      "url": "https://dev.to/webdeveloperhyper/ai-avatar-v20-cursor-avatar-notification-avatar-voxel-avatar-4dd2",
      "tags": "ai, webdev, productivity, discuss",
      "reactions": 15,
      "comments": 3,
      "reading_time": 4,
      "author": "webdeveloperhyper"
    },
    {
      "title": "Shift Left Code Review: How Qodo Turns Your Coding Agent Into Its Own First Reviewer",
      "description": "Hello Devs 👋  I have been thinking about something that has changed quite a bit with AI coding...",
      "url": "https://dev.to/dev_kiran/shift-left-code-review-how-qodo-turns-your-coding-agent-into-its-own-first-reviewer-58fc",
      "tags": "ai, productivity, devops, opensource",
      "reactions": 62,
      "comments": 0,
      "reading_time": 10,
      "author": "dev_kiran"
    },
    {
      "title": "TypeError: __exportAll is not a function — the deploy that only breaks after you merge",
      "description": "published: false tags: vercel, nitro, tanstack, debugging Production went down twice in one day with...",
      "url": "https://dev.to/captd/typeerror-exportall-is-not-a-function-the-deploy-that-only-breaks-after-you-merge-4i89",
      "tags": "ai, webdev, productivity, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "captd"
    },
    {
      "title": "Your AI Cannot Use the Posts You Saved, So I Built Social Memory",
      "description": "Likes and bookmarks on X and Threads are easy to accumulate and surprisingly hard to use. I save an...",
      "url": "https://dev.to/devjiro/your-ai-cannot-use-the-posts-you-saved-so-i-built-social-memory-2amp",
      "tags": "showdev, ai, productivity, javascript",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "devjiro"
    },
    {
      "title": "I ran $24,000 of Claude through my terminal in August. Here is what it built.",
      "description": "In July, Anthropic invited me into the Claude for Open Source Program. The deal is simple: six months...",
      "url": "https://dev.to/kataras/i-ran-24000-of-claude-through-my-terminal-in-august-here-is-what-it-built-37h5",
      "tags": "ai, programming, webdev, productivity",
      "reactions": 3,
      "comments": 6,
      "reading_time": 6,
      "author": "kataras"
    },
    {
      "title": "Built a Repository for Student Offers",
      "description": "As a student, I kept finding useful student offers randomly — sometimes through GitHub, sometimes...",
      "url": "https://dev.to/nk2552003/built-a-repository-for-student-offers-58b2",
      "tags": "beginners, offers, productivity, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "nk2552003"
    },
    {
      "title": "Why I built an open creative layer across image, video, voice and AI agents",
      "description": "Foundation models keep changing. Your creative workflow shouldn't have to.  AI media has an unusual...",
      "url": "https://dev.to/prantik_1995/why-i-built-an-open-creative-layer-across-image-video-voice-and-ai-agents-5cke",
      "tags": "ai, productivity, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "prantik_1995"
    },
    {
      "title": "Turning YouTube Videos Into Obsidian Notes — and What Shipping the Plugin Taught Me",
      "description": "Every so often I'd watch a 90-minute conference talk, close the tab, and realise the only trace it...",
      "url": "https://dev.to/_94be737e156beb4d74df2/turning-youtube-videos-into-obsidian-notes-and-what-shipping-the-plugin-taught-me-6m2",
      "tags": "obsidian, showdev, typescript, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "_94be737e156beb4d74df2"
    },
    {
      "title": "One Job, Done Twice: What We Found Inside a Sales Onboarding Process",
      "description": "A process can look completely reasonable until you follow it from beginning to end.  That is what...",
      "url": "https://dev.to/ksoft_technologies_33f7f6/one-job-done-twice-what-we-found-inside-a-sales-onboarding-process-35c2",
      "tags": "automation, webdev, startup, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "ksoft_technologies_33f7f6"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

