# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-09-16 06:39:53 UTC

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
      "forks": 7015,
      "added_stars": 15193,
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
      "author": "openai",
      "repo": "plugins",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/plugins",
      "desc": "OpenAI Plugins",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 890,
      "added_stars": 1206,
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
      "author": "affaan-m",
      "repo": "ECC",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/ECC",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 38819,
      "added_stars": 5398,
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
      "forks": 7504,
      "added_stars": 7499,
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
      "forks": 4242,
      "added_stars": 9077,
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
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Unlimited FREE AI coding. Connect Claude Code, Codex, Cursor, Cline, Copilot, Antigravity to FREE Claude/GPT/Gemini via 40+ providers. Auto-fallback, RTK -40% tokens, never hit limits.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5315,
      "added_stars": 986,
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
      "author": "asgeirtj",
      "repo": "system_prompts_leaks",
      "avatar": "https://github.com/asgeirtj.png",
      "repo_link": "https://github.com/asgeirtj/system_prompts_leaks",
      "desc": "Extracted system prompts from Anthropic - Claude Fable 5.1, Opus 5, Claude Design, Claude Code. OpenAI - ChatGPT GPT-6-Astra, Codex. Google - Gemini 3.8 Flash, 3.1 Pro, Antigravity. xAI - Grok, Grok Bot, Cursor, Kimi and more! Updated regularly.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 10918,
      "added_stars": 2780,
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
      "author": "coreyhaines31",
      "repo": "marketingskills",
      "avatar": "https://github.com/coreyhaines31.png",
      "repo_link": "https://github.com/coreyhaines31/marketingskills",
      "desc": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7647,
      "added_stars": 1812,
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
      "author": "plugin87",
      "repo": "ux-ui-agent-skills",
      "avatar": "https://github.com/plugin87.png",
      "repo_link": "https://github.com/plugin87/ux-ui-agent-skills",
      "desc": "Turn Claude into a senior design architect: DTCG tokens, 50 components, WCAG 2.2 AA-AAA, 138 design systems, any-framework code, and 43 objective gates that fail the build instead of faking success.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 140,
      "added_stars": 485,
      "builtBy": [
        {
          "username": "plugin87",
          "href": "https://github.com/plugin87",
          "avatar": "https://avatars.githubusercontent.com/u/5790381"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "maybe-aesop",
          "href": "https://github.com/maybe-aesop",
          "avatar": "https://avatars.githubusercontent.com/u/280031725"
        },
        {
          "username": "aalvarez-dev",
          "href": "https://github.com/aalvarez-dev",
          "avatar": "https://avatars.githubusercontent.com/u/25042790"
        }
      ]
    },
    {
      "author": "viarotel-org",
      "repo": "escrcpy",
      "avatar": "https://github.com/viarotel-org.png",
      "repo_link": "https://github.com/viarotel-org/escrcpy",
      "desc": "📱 Display and control your Android device graphically with scrcpy.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 821,
      "added_stars": 494,
      "builtBy": [
        {
          "username": "viarotel",
          "href": "https://github.com/viarotel",
          "avatar": "https://avatars.githubusercontent.com/u/38282758"
        },
        {
          "username": "reindex-ot",
          "href": "https://github.com/reindex-ot",
          "avatar": "https://avatars.githubusercontent.com/u/32851879"
        },
        {
          "username": "dainamiter",
          "href": "https://github.com/dainamiter",
          "avatar": "https://avatars.githubusercontent.com/u/189065486"
        },
        {
          "username": "salmanmkc",
          "href": "https://github.com/salmanmkc",
          "avatar": "https://avatars.githubusercontent.com/u/32169182"
        },
        {
          "username": "ahmed-0011",
          "href": "https://github.com/ahmed-0011",
          "avatar": "https://avatars.githubusercontent.com/u/74181508"
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
      "forks": 29634,
      "added_stars": 101,
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
      "forks": 4952,
      "added_stars": 291,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
        }
      ]
    },
    {
      "author": "pdone",
      "repo": "lx-music-source",
      "avatar": "https://github.com/pdone.png",
      "repo_link": "https://github.com/pdone/lx-music-source",
      "desc": "洛雪音乐源",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 738,
      "added_stars": 261,
      "builtBy": [
        {
          "username": "pdone",
          "href": "https://github.com/pdone",
          "avatar": "https://avatars.githubusercontent.com/u/34151215"
        },
        {
          "username": "Meo597",
          "href": "https://github.com/Meo597",
          "avatar": "https://avatars.githubusercontent.com/u/197331664"
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
      "forks": 10073,
      "added_stars": 1766,
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
          "username": "HMAKT99",
          "href": "https://github.com/HMAKT99",
          "avatar": "https://avatars.githubusercontent.com/u/222980227"
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
      "forks": 1093,
      "added_stars": 659,
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
      "author": "mrdoob",
      "repo": "three.js",
      "avatar": "https://github.com/mrdoob.png",
      "repo_link": "https://github.com/mrdoob/three.js",
      "desc": "JavaScript 3D Library.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 36557,
      "added_stars": 298,
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
      "author": "react",
      "repo": "react",
      "avatar": "https://github.com/react.png",
      "repo_link": "https://github.com/react/react",
      "desc": "The library for web and native user interfaces.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 51354,
      "added_stars": 961,
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
      "author": "Asabeneh",
      "repo": "30-Days-Of-JavaScript",
      "avatar": "https://github.com/Asabeneh.png",
      "repo_link": "https://github.com/Asabeneh/30-Days-Of-JavaScript",
      "desc": "30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript programming language in 30 days. This challenge may take more than 100 days, please just follow your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 10459,
      "added_stars": 62,
      "builtBy": [
        {
          "username": "Asabeneh",
          "href": "https://github.com/Asabeneh",
          "avatar": "https://avatars.githubusercontent.com/u/9008063"
        },
        {
          "username": "EmmanuelArenas",
          "href": "https://github.com/EmmanuelArenas",
          "avatar": "https://avatars.githubusercontent.com/u/15266097"
        },
        {
          "username": "npnjuguna",
          "href": "https://github.com/npnjuguna",
          "avatar": "https://avatars.githubusercontent.com/u/7670185"
        },
        {
          "username": "yigittosun",
          "href": "https://github.com/yigittosun",
          "avatar": "https://avatars.githubusercontent.com/u/24936165"
        },
        {
          "username": "Dikendev",
          "href": "https://github.com/Dikendev",
          "avatar": "https://avatars.githubusercontent.com/u/103402889"
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
      "forks": 2312,
      "added_stars": 88,
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
      "forks": 894,
      "added_stars": 671,
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
      "by": "albelfio",
      "descendants": 337,
      "id": 49717558,
      "kids": [
        49718492,
        49722858,
        49722440,
        49721150,
        49719442,
        49720612,
        49718350,
        49718626,
        49718291,
        49722711,
        49717848,
        49722331,
        49718120,
        49722698,
        49718111,
        49718267,
        49722115,
        49722565,
        49722538,
        49719902,
        49719883,
        49722615,
        49719414,
        49721441,
        49721416,
        49718973,
        49717590,
        49719621,
        49718719,
        49722315,
        49718035,
        49719097,
        49721409,
        49720694,
        49720719,
        49719175,
        49718066,
        49720062,
        49718135,
        49718890,
        49721299,
        49721095,
        49721922,
        49721114,
        49719167,
        49722018,
        49721856,
        49722345,
        49718912,
        49720843,
        49718383,
        49720302,
        49722529,
        49719465,
        49719359,
        49719502,
        49719788,
        49718671,
        49720437,
        49719032,
        49719478,
        49720329,
        49721123,
        49721955,
        49721305,
        49718269,
        49719416,
        49721090,
        49718810,
        49721501,
        49717928,
        49718866,
        49718047,
        49718490,
        49718399,
        49718646,
        49718242,
        49717856,
        49720634,
        49718562,
        49720852,
        49718561,
        49721109,
        49720717,
        49718422,
        49720139,
        49718357,
        49719930,
        49718349,
        49718619,
        49719927,
        49719120,
        49717965,
        49722252,
        49720553,
        49718742,
        49718926,
        49718166,
        49719329,
        49718825,
        49718094,
        49721731,
        49718581,
        49720075,
        49718426,
        49718196,
        49718053,
        49719260,
        49718766,
        49720023,
        49718009,
        49721632,
        49718402,
        49718376,
        49718137,
        49717966,
        49718445,
        49719033,
        49718248,
        49718361,
        49718343,
        49718313,
        49719775,
        49718684,
        49718355,
        49720200
      ],
      "score": 1148,
      "time": 1789500303,
      "title": "Introducing System One Models and Jev",
      "type": "story",
      "url": "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
    },
    {
      "by": "imwally",
      "descendants": 93,
      "id": 49721322,
      "kids": [
        49722807,
        49722362,
        49721602,
        49722052,
        49722393,
        49722810,
        49722779,
        49722053,
        49722651,
        49722593,
        49722164,
        49722622,
        49722653,
        49722304,
        49722814,
        49722582,
        49722027,
        49721918,
        49721594,
        49722334,
        49721765,
        49722028,
        49721832,
        49721697,
        49721747
      ],
      "score": 159,
      "time": 1789524451,
      "title": "Apple Reference Image: A New Approach for Verified Photography",
      "type": "story",
      "url": "https://security.apple.com/blog/apple-reference-image/"
    },
    {
      "by": "arnemunthekaas",
      "descendants": 193,
      "id": 49711544,
      "kids": [
        49717700,
        49715349,
        49722697,
        49713097,
        49714884,
        49715696,
        49718953,
        49718691,
        49713446,
        49722586,
        49719062,
        49712016,
        49714603,
        49721031,
        49713017,
        49713041,
        49718181,
        49718605,
        49711987,
        49712181,
        49720512,
        49713020,
        49712366,
        49718930,
        49712641,
        49718923,
        49721826,
        49715275,
        49720971,
        49713187,
        49714776,
        49716106,
        49714283,
        49718654,
        49712421,
        49714858,
        49714844,
        49715159,
        49719799,
        49719948,
        49718837,
        49715201,
        49712498,
        49712762,
        49720620,
        49713240,
        49715327,
        49714300,
        49713437,
        49712292,
        49712734,
        49718147,
        49713293,
        49712937,
        49715760,
        49719021,
        49720006,
        49712230,
        49718108,
        49714737,
        49714370,
        49712007,
        49715033,
        49712788,
        49713465,
        49711546,
        49712388,
        49721245,
        49721418,
        49712290,
        49713595,
        49716038,
        49714819,
        49712999,
        49713035,
        49712803,
        49714325,
        49713891,
        49717053
      ],
      "score": 1515,
      "text": "See also: <i>Avian Visitors</i> - <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=48343424\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=48343424</a> - May 2026 (20 comments)",
      "time": 1789475470,
      "title": "Show HN: An e-ink frame that hears birds and draws them as 1800s illustrations",
      "type": "story",
      "url": "https://github.com/arnegiacomo/fugleramme"
    },
    {
      "by": "rkotcher",
      "descendants": 54,
      "id": 49693971,
      "kids": [
        49722636,
        49722864,
        49722834,
        49694914,
        49722442,
        49722592,
        49722493,
        49722228,
        49722626,
        49722101,
        49722510,
        49722617,
        49722540,
        49722612,
        49722840,
        49722531,
        49702624,
        49722099,
        49722431,
        49722253,
        49722147,
        49722471,
        49722473,
        49722100,
        49722530,
        49694107,
        49707384,
        49722055
      ],
      "score": 108,
      "text": "Buckle your seatbelt, secure your tray table, and open your window shade. Now you can simulate flying anywhere in the world as a commercial passenger, from takeoff to touchdown. Terrain, weather, and realtime sun position included. Don&#x27;t worry, the latest release now features legs, so you can get up and go to the bathroom on longer flights. Enjoy!",
      "time": 1789376936,
      "title": "Show HN: I made a flight simulator, except you're just a passenger",
      "type": "story",
      "url": "https://inflightsimulator.com"
    },
    {
      "by": "bananaboy",
      "descendants": 17,
      "id": 49721548,
      "kids": [
        49721664,
        49722149,
        49722119,
        49721950,
        49722301,
        49722197,
        49721707,
        49722161,
        49721795,
        49721681,
        49721800,
        49721830,
        49722270
      ],
      "score": 66,
      "time": 1789526766,
      "title": "Negativland, Culture Jamming, and the Art of Making Something New",
      "type": "story",
      "url": "https://blog.archive.org/2026/09/11/negativland-culture-jamming-and-the-art-of-making-something-new/"
    },
    {
      "by": "ake2l",
      "descendants": 2,
      "id": 49722276,
      "kids": [
        49722444,
        49722433,
        49722674,
        49722277
      ],
      "score": 18,
      "time": 1789534716,
      "title": "Datamimic – don't let your coding agent invent its own test world",
      "type": "story",
      "url": "https://github.com/rapiddweller/datamimic"
    },
    {
      "by": "ChrisArchitect",
      "descendants": 251,
      "id": 49716176,
      "kids": [
        49716712,
        49717583,
        49722367,
        49719893,
        49722191,
        49716906,
        49716935,
        49716760,
        49718115,
        49721797,
        49720991,
        49718004,
        49718149,
        49718698,
        49721346,
        49722232,
        49721873,
        49718965,
        49720646,
        49716905,
        49717365,
        49719468,
        49718205,
        49717293,
        49717811,
        49718781,
        49717270,
        49717025,
        49717108,
        49716698,
        49720110,
        49722171,
        49719205,
        49717169,
        49717188,
        49716884,
        49717836
      ],
      "score": 490,
      "time": 1789494738,
      "title": "An update on Wayback Machine access",
      "type": "story",
      "url": "https://blog.archive.org/2026/09/15/an-update-on-wayback-machine-access/"
    },
    {
      "by": "leumon",
      "descendants": 244,
      "id": 49715947,
      "kids": [
        49718996,
        49722066,
        49717988,
        49717061,
        49722743,
        49716968,
        49718250,
        49716918,
        49722847,
        49716990,
        49716985,
        49718208,
        49718983,
        49720177,
        49717281,
        49718793,
        49721668,
        49721097,
        49721944,
        49719356,
        49717307,
        49717869,
        49717277,
        49721885,
        49717262,
        49717172,
        49722022,
        49718947,
        49721579,
        49720739,
        49717010,
        49717215,
        49717144,
        49722450,
        49717254,
        49720428,
        49716766,
        49719038,
        49717205
      ],
      "score": 376,
      "time": 1789493898,
      "title": "Gemini 3.8 Live and 3.8 Live Extended Thinking",
      "type": "story",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/"
    },
    {
      "by": "zdw",
      "descendants": 22,
      "id": 49719938,
      "kids": [
        49722024,
        49722594,
        49721194,
        49721165,
        49722467,
        49721436,
        49722142,
        49721424,
        49720920
      ],
      "score": 99,
      "time": 1789512655,
      "title": "Recreating Voodoo Graphics and a Late-1990s Gaming PC on an FPGA",
      "type": "story",
      "url": "https://nand2mario.github.io/posts/2026/zsst-voodoo/"
    },
    {
      "by": "summarity",
      "descendants": 61,
      "id": 49718928,
      "kids": [
        49720439,
        49719752,
        49722671,
        49720728,
        49722663,
        49720890,
        49719126,
        49722528,
        49719946,
        49722652,
        49720178,
        49719348,
        49721583,
        49722498,
        49720547,
        49719849,
        49719179,
        49719286,
        49720009
      ],
      "score": 185,
      "time": 1789506467,
      "title": "German Rheinmetall open-sources its Battlesuite connected weapon system protcol",
      "type": "story",
      "url": "https://rheinmetall.github.io/onboardapi-documentation/9.10.0/index.html"
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
      "title": "GEFS on OpenBSD: A very early preview",
      "url": "https://marc.info/?l=openbsd-tech&m=178948744271633&w=2",
      "score": 64,
      "comments": 7,
      "tags": [
        "openbsd"
      ],
      "id": "buzdkb"
    },
    {
      "title": "Small Programming Tricks",
      "url": "https://will-keleher.com/posts/small-programming-tricks-matter/",
      "score": 27,
      "comments": 11,
      "tags": [
        "programming"
      ],
      "id": "f65fy3"
    },
    {
      "title": "Coreutils - rejected feature requests",
      "url": "https://www.gnu.org/software/coreutils/rejected_requests.html",
      "score": 57,
      "comments": 10,
      "tags": [
        "programming",
        "unix"
      ],
      "id": "zbcua4"
    },
    {
      "title": "JDK 27 has been released",
      "url": "https://openjdk.org/projects/jdk/27/",
      "score": 11,
      "comments": 0,
      "tags": [
        "java",
        "release"
      ],
      "id": "jlja1a"
    },
    {
      "title": "CSS-Tricks in Limbo",
      "url": "https://vale.rocks/micros/20260915-0135",
      "score": 42,
      "comments": 7,
      "tags": [
        "css",
        "web"
      ],
      "id": "lgcmoo"
    },
    {
      "title": "\"Do You Still Read the Code?\"",
      "url": "https://zanlib.dev/blog/do-you-still-read-the-code/",
      "score": 76,
      "comments": 12,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "qiwlzz"
    },
    {
      "title": "How much of F-Droid is LLM generated?",
      "url": "https://tintotint.eu/whacky-corner/f-droid_slop/",
      "score": 14,
      "comments": 6,
      "tags": [
        "vibecoding"
      ],
      "id": "acwuxy"
    },
    {
      "title": "Some things Veloren does differently",
      "url": "https://blog.jsbarretto.com/post/veloren",
      "score": 8,
      "comments": 0,
      "tags": [
        "games",
        "graphics",
        "rust"
      ],
      "id": "zutlqt"
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
      "forks": 302,
      "added_stars": 3784,
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2697,
      "added_stars": 25489,
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
      "forks": 3725,
      "added_stars": 20417,
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
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2900,
      "added_stars": 9114,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3128,
      "added_stars": 5202,
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
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4092,
      "added_stars": 11662,
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
      "forks": 7965,
      "added_stars": 6660,
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
          "username": "basil-k-aji-dev",
          "href": "https://github.com/basil-k-aji-dev",
          "avatar": "https://avatars.githubusercontent.com/u/70605804"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 53054,
      "added_stars": 22173,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 19201,
      "added_stars": 20832,
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
          "username": "c020627",
          "href": "https://github.com/c020627",
          "avatar": "https://avatars.githubusercontent.com/u/251123242"
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
      "forks": 173,
      "added_stars": 1148,
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
      "author": "jundot",
      "repo": "omlx",
      "avatar": "https://github.com/jundot.png",
      "repo_link": "https://github.com/jundot/omlx",
      "desc": "LLM inference server with continuous batching & SSD caching for Apple Silicon — managed from the macOS menu bar",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1882,
      "added_stars": 3116,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3523,
      "added_stars": 3987,
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
      "forks": 589,
      "added_stars": 1904,
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
      "forks": 9643,
      "added_stars": 5062,
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
      "author": "microsoft",
      "repo": "data-formulator",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/data-formulator",
      "desc": "🪄 Data Formulator is an interactive AI-powered data analysis system makes it easy to connect, explore and visualize data.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1673,
      "added_stars": 1226,
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
      "author": "blader",
      "repo": "humanizer",
      "avatar": "https://github.com/blader.png",
      "repo_link": "https://github.com/blader/humanizer",
      "desc": "Agent skill that removes signs of AI-generated writing from text",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3959,
      "added_stars": 12798,
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
      "author": "experientiallabs",
      "repo": "experiential",
      "avatar": "https://github.com/experientiallabs.png",
      "repo_link": "https://github.com/experientiallabs/experiential",
      "desc": "Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend better models, and train a specialized model you own.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 176,
      "added_stars": 4576,
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
      "author": "zubair-trabzada",
      "repo": "geo-seo-claude",
      "avatar": "https://github.com/zubair-trabzada.png",
      "repo_link": "https://github.com/zubair-trabzada/geo-seo-claude",
      "desc": "GEO-first SEO skill for Claude Code. Comprehensive AI search optimization for any website — citability scoring, AI crawler analysis, brand authority, schema markup, platform-specific optimization, and PDF reports. If you want learn how to sell this to real businesses, check out the skool community",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1612,
      "added_stars": 1297,
      "builtBy": [
        {
          "username": "richard-scott",
          "href": "https://github.com/richard-scott",
          "avatar": "https://avatars.githubusercontent.com/u/5149834"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "zubair-trabzada",
          "href": "https://github.com/zubair-trabzada",
          "avatar": "https://avatars.githubusercontent.com/u/13802400"
        },
        {
          "username": "xiaolai",
          "href": "https://github.com/xiaolai",
          "avatar": "https://avatars.githubusercontent.com/u/152970"
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
      "forks": 703,
      "added_stars": 4702,
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
      "forks": 1481,
      "added_stars": 1978,
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
      "forks": 707,
      "added_stars": 4996,
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
      "forks": 5868,
      "added_stars": 16497,
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
      "forks": 507,
      "added_stars": 4146,
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
      "forks": 3620,
      "added_stars": 8012,
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
      "author": "tech-leads-club",
      "repo": "agent-skills",
      "avatar": "https://github.com/tech-leads-club.png",
      "repo_link": "https://github.com/tech-leads-club/agent-skills",
      "desc": "The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 525,
      "added_stars": 1229,
      "builtBy": [
        {
          "username": "felipfr",
          "href": "https://github.com/felipfr",
          "avatar": "https://avatars.githubusercontent.com/u/99354371"
        },
        {
          "username": "edmarpaulino",
          "href": "https://github.com/edmarpaulino",
          "avatar": "https://avatars.githubusercontent.com/u/76621784"
        },
        {
          "username": "waldemarnt",
          "href": "https://github.com/waldemarnt",
          "avatar": "https://avatars.githubusercontent.com/u/5835706"
        },
        {
          "username": "may-santos",
          "href": "https://github.com/may-santos",
          "avatar": "https://avatars.githubusercontent.com/u/51439466"
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
      "forks": 2407,
      "added_stars": 6883,
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
      "author": "melgarafael",
      "repo": "DeskcommCRM",
      "avatar": "https://github.com/melgarafael.png",
      "repo_link": "https://github.com/melgarafael/DeskcommCRM",
      "desc": "Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA). Open alternative to Kommo, Octadesk & Intercom for any business that sells by chat. MCP-ready, multi-tenant, LGPD.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 695,
      "added_stars": 2165,
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
          "username": "IanCouto",
          "href": "https://github.com/IanCouto",
          "avatar": "https://avatars.githubusercontent.com/u/48738352"
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
      "forks": 1077,
      "added_stars": 1140,
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
      "author": "ever-co",
      "repo": "ever-gauzy",
      "avatar": "https://github.com/ever-co.png",
      "repo_link": "https://github.com/ever-co/ever-gauzy",
      "desc": "Ever® Gauzy™ - Open Business Management Platform (ERP/CRM/HRM/ATS/PM) - https://gauzy.co",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1058,
      "added_stars": 2104,
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
      "author": "bookorbit",
      "repo": "bookorbit",
      "avatar": "https://github.com/bookorbit.png",
      "repo_link": "https://github.com/bookorbit/bookorbit",
      "desc": "BookOrbit: Your Reading Space",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 269,
      "added_stars": 2147,
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
      "forks": 9087,
      "added_stars": 2838,
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
      "author": "langwatch",
      "repo": "langwatch",
      "avatar": "https://github.com/langwatch.png",
      "repo_link": "https://github.com/langwatch/langwatch",
      "desc": "The platform for LLM evaluations and AI agent testing",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 391,
      "added_stars": 1306,
      "builtBy": [
        {
          "username": "rogeriochaves",
          "href": "https://github.com/rogeriochaves",
          "avatar": "https://avatars.githubusercontent.com/u/792201"
        },
        {
          "username": "richhuth",
          "href": "https://github.com/richhuth",
          "avatar": "https://avatars.githubusercontent.com/u/2778646"
        },
        {
          "username": "0xdeafcafe",
          "href": "https://github.com/0xdeafcafe",
          "avatar": "https://avatars.githubusercontent.com/u/2768524"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "drewdrewthis",
          "href": "https://github.com/drewdrewthis",
          "avatar": "https://avatars.githubusercontent.com/u/4934813"
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
      "forks": 1936,
      "added_stars": 891,
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
      "author": "zenbu-labs",
      "repo": "terminal-browser",
      "avatar": "https://github.com/zenbu-labs.png",
      "repo_link": "https://github.com/zenbu-labs/terminal-browser",
      "desc": "A browser inside your terminal",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 140,
      "added_stars": 1974,
      "builtBy": [
        {
          "username": "RobPruzan",
          "href": "https://github.com/RobPruzan",
          "avatar": "https://avatars.githubusercontent.com/u/97781863"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "transitive-bullshit",
          "href": "https://github.com/transitive-bullshit",
          "avatar": "https://avatars.githubusercontent.com/u/552829"
        },
        {
          "username": "guillaumemeyer",
          "href": "https://github.com/guillaumemeyer",
          "avatar": "https://avatars.githubusercontent.com/u/1385518"
        },
        {
          "username": "alanagoyal",
          "href": "https://github.com/alanagoyal",
          "avatar": "https://avatars.githubusercontent.com/u/17993385"
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
      "added_stars": 256,
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
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-272b",
      "tags": "top7, discuss",
      "reactions": 31,
      "comments": 27,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Harness engineering doesn't mean building your own harness",
      "description": "It means giving the agent enough context to do the right thing  For this week's Agent Factory...",
      "url": "https://dev.to/annthurium/harness-engineering-doesnt-mean-building-your-own-harness-16pk",
      "tags": "agents, ai, automation, softwareengineering",
      "reactions": 7,
      "comments": 3,
      "reading_time": 1,
      "author": "annthurium"
    },
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
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-38bf",
      "tags": "discuss, jokes, watercooler",
      "reactions": 44,
      "comments": 28,
      "reading_time": 1,
      "author": "ben"
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
      "title": "The Slow and Quiet Cognitive Atrophy of a Modern Software Engineer",
      "description": "Over the past couple of months, I've read a lot of articles about the consequences of AI dependency...",
      "url": "https://dev.to/codingwithjiro/the-slow-and-quiet-cognitive-atrophy-of-a-modern-software-engineer-3lbh",
      "tags": "software, ai, programming, productivity",
      "reactions": 36,
      "comments": 9,
      "reading_time": 9,
      "author": "codingwithjiro"
    },
    {
      "title": "AI Avatar v20, Cursor Avatar, Notification Avatar (Voxel Avatar)🧊",
      "description": "Intro   AI Avatar is a free app where your VRoid (VRM) avatar cheers you with all its...",
      "url": "https://dev.to/webdeveloperhyper/ai-avatar-v20-cursor-avatar-notification-avatar-voxel-avatar-4dd2",
      "tags": "ai, webdev, productivity, discuss",
      "reactions": 52,
      "comments": 24,
      "reading_time": 4,
      "author": "webdeveloperhyper"
    },
    {
      "title": "🧩 Don't make Tech your entire personality.",
      "description": "This is one of those articles that I wanted to write for many days, but I kept delaying it until, a...",
      "url": "https://dev.to/tanay_dwivedi9098/dont-make-tech-your-entire-personality-45dc",
      "tags": "productivity, webdev, ai, javascript",
      "reactions": 9,
      "comments": 1,
      "reading_time": 5,
      "author": "tanay_dwivedi9098"
    },
    {
      "title": "What Is SeenDisJob? A New Chrome Extension for Job Seekers",
      "description": "Wisdom Ekwugha is the developer and creator of SeenDisJob. SeenDisJob is a Chrome extension built for...",
      "url": "https://dev.to/ekwughas_family_7e8478f8/what-is-seendisjob-a-new-chrome-extension-for-job-seekers-np0",
      "tags": "jobsearch, chrome, opensource, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "ekwughas_family_7e8478f8"
    },
    {
      "title": "Dev Multi-Agents are worth?",
      "description": "Lately, I’ve been experimenting with OpenCode and reading up on multi-agent development...",
      "url": "https://dev.to/marcos_cruz/dev-multi-agents-are-worth-1io0",
      "tags": "ai, programming, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "marcos_cruz"
    },
    {
      "title": "Typing is the fastest way to actually learn kana — most learners skip it",
      "description": "Chart recognition isn't recall. A kana typing drill turns passive recognition into instant recall — and if you use IME-friendly romaji, what you practice is exactly what you type in real life.",
      "url": "https://dev.to/yellownight/typing-is-the-fastest-way-to-actually-learn-kana-most-learners-skip-it-i30",
      "tags": "webdev, learning, productivity, showdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "yellownight"
    },
    {
      "title": "Your Best Employees Are Doing Work Your System Should Be Doing",
      "description": "Some of the most expensive technical problems inside a company do not look technical.  They look like...",
      "url": "https://dev.to/ksoft_technologies_33f7f6/your-best-employees-are-doing-work-your-system-should-be-doing-42da",
      "tags": "automation, productivity, softwareengineering, startup",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "ksoft_technologies_33f7f6"
    },
    {
      "title": "Retries Are How Cheap Jobs Get Expensive",
      "description": "Retries are how cheap jobs get expensive. A failed generation does not refund the tokens you already...",
      "url": "https://dev.to/hackrs_3352/retries-are-how-cheap-jobs-get-expensive-4n11",
      "tags": "ai, python, devops, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "hackrs_3352"
    },
    {
      "title": "I gave my coding agents a physical dashboard — a week with AgentStreamDeck",
      "description": "persona: quiet-kestrel venue: dev.to article channel: devto           title: I gave my coding agents...",
      "url": "https://dev.to/quiet-kestrel/--247n",
      "tags": "ai, automation, productivity, streamdeck",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "quiet-kestrel"
    },
    {
      "title": "The Pairing Session That Would Not Score a Patch in a Chat Window",
      "description": "The pairing session started with a failing webhook. A payment provider retried a POST the service had...",
      "url": "https://dev.to/appjs_7055/the-pairing-session-that-would-not-score-a-patch-in-a-chat-window-47b9",
      "tags": "ai, javascript, testing, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "appjs_7055"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

