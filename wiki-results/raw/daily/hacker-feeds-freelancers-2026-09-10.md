# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-09-10 06:38:38 UTC

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
      "author": "DietrichGebert",
      "repo": "ponytail",
      "avatar": "https://github.com/DietrichGebert.png",
      "repo_link": "https://github.com/DietrichGebert/ponytail",
      "desc": "Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7155,
      "added_stars": 12431,
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
      "author": "affaan-m",
      "repo": "ECC",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/ECC",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 38241,
      "added_stars": 9146,
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
      "author": "tt-a1i",
      "repo": "archify",
      "avatar": "https://github.com/tt-a1i.png",
      "repo_link": "https://github.com/tt-a1i/archify",
      "desc": "Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self-contained HTML with motion and crisp export.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3681,
      "added_stars": 12541,
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
      "forks": 7525,
      "added_stars": 2638,
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
      "author": "openai",
      "repo": "plugins",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/plugins",
      "desc": "OpenAI Plugins",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 833,
      "added_stars": 753,
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
      "forks": 4610,
      "added_stars": 5199,
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
      "author": "Stremio",
      "repo": "stremio-web",
      "avatar": "https://github.com/Stremio.png",
      "repo_link": "https://github.com/Stremio/stremio-web",
      "desc": "Stremio - Freedom to Stream",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1552,
      "added_stars": 768,
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
      "author": "jo-inc",
      "repo": "camofox-browser",
      "avatar": "https://github.com/jo-inc.png",
      "repo_link": "https://github.com/jo-inc/camofox-browser",
      "desc": "Stealth headless browser for AI agents — bypass Cloudflare, bot detection, and anti-scraping. Drop-in Puppeteer/Playwright replacement.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1070,
      "added_stars": 1816,
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
      "forks": 975,
      "added_stars": 1881,
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
      "forks": 414,
      "added_stars": 756,
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
      "author": "FB208",
      "repo": "OpenBidKit_Yibiao",
      "avatar": "https://github.com/FB208.png",
      "repo_link": "https://github.com/FB208/OpenBidKit_Yibiao",
      "desc": "开箱即用的AI标书编写工具，标书AI生成工具，投标工具箱、知识库、标书查重、废标项检查，完全开源免费，欢迎使用",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 742,
      "added_stars": 265,
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
      "author": "facebook",
      "repo": "stylex",
      "avatar": "https://github.com/facebook.png",
      "repo_link": "https://github.com/facebook/stylex",
      "desc": "StyleX is the styling system for ambitious user interfaces.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 479,
      "added_stars": 189,
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
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Unlimited FREE AI coding. Connect Claude Code, Codex, Cursor, Cline, Copilot, Antigravity to FREE Claude/GPT/Gemini via 40+ providers. Auto-fallback, RTK -40% tokens, never hit limits.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5110,
      "added_stars": 1272,
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
      "author": "Anil-matcha",
      "repo": "Open-Generative-AI",
      "avatar": "https://github.com/Anil-matcha.png",
      "repo_link": "https://github.com/Anil-matcha/Open-Generative-AI",
      "desc": "Unrestricted Open-source alternative to AI video platforms — Free AI image & video generation studio with 600+ models (Flux, Midjourney, Kling, Sora, Veo). No content filters. Self-hosted, MIT licensed.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5006,
      "added_stars": 631,
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
      "author": "asgeirtj",
      "repo": "system_prompts_leaks",
      "avatar": "https://github.com/asgeirtj.png",
      "repo_link": "https://github.com/asgeirtj/system_prompts_leaks",
      "desc": "Extracted system prompts from Anthropic - Claude Fable 5.1, Opus 5, Claude Design, Claude Code. OpenAI - ChatGPT GPT-6-Astra, Codex. Google - Gemini 3.8 Flash, 3.1 Pro, Antigravity. xAI - Grok, Grok Bot, Cursor, Kimi and more! Updated regularly.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 10582,
      "added_stars": 583,
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
      "author": "is-a-dev",
      "repo": "register",
      "avatar": "https://github.com/is-a-dev.png",
      "repo_link": "https://github.com/is-a-dev/register",
      "desc": "Grab your own sweet-looking '.is-a.dev' subdomain.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 29097,
      "added_stars": 100,
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
      "author": "conorbronsdon",
      "repo": "avoid-ai-writing",
      "avatar": "https://github.com/conorbronsdon.png",
      "repo_link": "https://github.com/conorbronsdon/avoid-ai-writing",
      "desc": "Skill that audits and rewrites content to remove AI writing patterns. Use it with your favorite agents including Claude Code, OpenClaw, Codex, and Hermes.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 359,
      "added_stars": 282,
      "builtBy": [
        {
          "username": "conorbronsdon",
          "href": "https://github.com/conorbronsdon",
          "avatar": "https://avatars.githubusercontent.com/u/120674402"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "UniversePeak",
          "href": "https://github.com/UniversePeak",
          "avatar": "https://avatars.githubusercontent.com/u/113168673"
        },
        {
          "username": "augustasas",
          "href": "https://github.com/augustasas",
          "avatar": "https://avatars.githubusercontent.com/u/12102628"
        },
        {
          "username": "mbhall88",
          "href": "https://github.com/mbhall88",
          "avatar": "https://avatars.githubusercontent.com/u/20403931"
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
      "forks": 51322,
      "added_stars": 1116,
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
      "by": "thecosmicfrog",
      "descendants": 1956,
      "id": 49630931,
      "kids": [
        49638923,
        49639299,
        49639035,
        49632516,
        49639162,
        49633341,
        49638380,
        49633307,
        49631599,
        49631894,
        49630973,
        49638927,
        49631177,
        49631048,
        49639179,
        49639069,
        49631501,
        49631850,
        49631776,
        49638409,
        49637566,
        49633379,
        49630801,
        49631500,
        49631002,
        49631119,
        49631798,
        49631161,
        49631531,
        49631652,
        49631060,
        49631920,
        49631403,
        49630826,
        49633992,
        49631347,
        49636391,
        49632169,
        49631068,
        49631458,
        49631122,
        49630970,
        49631903,
        49638710,
        49638520,
        49638763,
        49638140,
        49631506,
        49631792,
        49638954,
        49631209,
        49631117,
        49630884,
        49631008,
        49632706,
        49638391,
        49639147,
        49632164,
        49631299,
        49631620,
        49631190,
        49630968,
        49633810,
        49633490,
        49631474,
        49637825,
        49631653,
        49631995,
        49632225,
        49631572,
        49633048,
        49631914,
        49634255,
        49632467,
        49634616,
        49631124,
        49632961,
        49638122,
        49637177,
        49631857,
        49638772,
        49638148,
        49631337,
        49632251,
        49638228,
        49636556,
        49631277,
        49638261,
        49632371,
        49631795,
        49632304,
        49633744,
        49638699,
        49635097,
        49631597,
        49633264,
        49630886,
        49632135,
        49632472,
        49638464,
        49631464,
        49634567,
        49631910,
        49635496,
        49631141,
        49632184,
        49631239,
        49633429,
        49630872,
        49631617,
        49631432,
        49632055,
        49631087,
        49632944,
        49632083,
        49636248,
        49631175,
        49631761,
        49635229,
        49633831,
        49632683,
        49636348,
        49631144,
        49631878,
        49638300,
        49632063,
        49636339,
        49630976,
        49633509,
        49637883,
        49637102,
        49632215,
        49634079,
        49630990,
        49631138,
        49633790,
        49638427,
        49638804,
        49632614,
        49632708,
        49632263,
        49633074,
        49634529,
        49638666,
        49630848,
        49631266,
        49631099,
        49634695,
        49631381,
        49636361,
        49634715,
        49638199,
        49631959,
        49631123,
        49636118,
        49634253,
        49630796,
        49630883,
        49634617,
        49635289,
        49633560,
        49635830,
        49632971,
        49631205,
        49631294,
        49631614,
        49635774,
        49631869,
        49632627,
        49631040,
        49632366,
        49633682,
        49631495,
        49631049,
        49634817,
        49637577,
        49631105,
        49637408,
        49635972,
        49638476,
        49630983,
        49638467,
        49635567,
        49632065,
        49631056,
        49632813,
        49632793,
        49634088,
        49631109,
        49633444,
        49632681,
        49632628,
        49633097,
        49637189,
        49631611,
        49634854,
        49631041,
        49631206,
        49633334,
        49634162,
        49634263,
        49636813,
        49631241,
        49634795,
        49631292,
        49633766,
        49635560,
        49631136,
        49633210,
        49633246,
        49638466,
        49635670,
        49631862,
        49631603,
        49638583,
        49630992,
        49631032,
        49631356,
        49637820,
        49631946,
        49631132,
        49631312,
        49632086,
        49632733,
        49634426,
        49632429,
        49631666,
        49631130,
        49634138,
        49633936,
        49637662,
        49634704,
        49634595,
        49631784,
        49631030,
        49631309,
        49631566,
        49631554,
        49636140,
        49631843,
        49631747,
        49631237,
        49633902,
        49637176,
        49633544,
        49637149,
        49637061,
        49634433,
        49632740,
        49632891,
        49632843,
        49635451,
        49634196,
        49631678,
        49631626,
        49634075,
        49631086,
        49630940,
        49638057,
        49631676,
        49638866,
        49633365,
        49633804,
        49632216,
        49631840,
        49631005,
        49635749,
        49631227,
        49635653,
        49635406,
        49635402,
        49634221,
        49631544,
        49638698,
        49633881,
        49633636,
        49633589,
        49633269,
        49633167,
        49632866,
        49632776,
        49632743,
        49631053,
        49632343,
        49632245,
        49630881,
        49632123,
        49632099,
        49636770,
        49633588,
        49631864,
        49631851,
        49631801,
        49631789,
        49631751,
        49631397,
        49631396,
        49631303,
        49636620,
        49631069,
        49631037,
        49631018,
        49630991,
        49630952,
        49630699,
        49637265,
        49632563,
        49632361,
        49635605,
        49631368,
        49631765,
        49636120,
        49634939,
        49633082,
        49633215,
        49632279,
        49633464,
        49636467,
        49631336,
        49637645,
        49632022,
        49631184,
        49637792,
        49631254,
        49633175,
        49634582,
        49633896,
        49631250,
        49632983,
        49632480,
        49631950,
        49631402,
        49631110,
        49635960,
        49632314,
        49631738,
        49633890,
        49631467,
        49631712,
        49631526,
        49631061,
        49631052,
        49631651,
        49632652,
        49631007,
        49631512,
        49638347,
        49631574,
        49631725,
        49635471,
        49631100,
        49632244,
        49634566,
        49631660,
        49631296
      ],
      "score": 1108,
      "time": 1788977743,
      "title": "iPhone Duo",
      "type": "story",
      "url": "https://www.apple.com/iphone-duo/"
    },
    {
      "by": "dmitrybrant",
      "descendants": 87,
      "id": 49637385,
      "kids": [
        49639320,
        49639279,
        49639144,
        49639215,
        49638203,
        49637822,
        49638920,
        49639175,
        49638737,
        49639180,
        49637739,
        49637771,
        49637911,
        49638823,
        49639153,
        49637850,
        49637702,
        49638681,
        49638616,
        49638707,
        49638743,
        49638880,
        49638243,
        49638607,
        49639142,
        49637679,
        49638657,
        49638188,
        49637715,
        49637918,
        49638620,
        49637663,
        49638341,
        49638197,
        49638183,
        49637847,
        49637756,
        49639042,
        49638732
      ],
      "score": 199,
      "text": "I&#x27;ve always wanted to make a visualization where the speed of light was scaled down to human speeds, so that we could intuit relativistic effects with everyday objects. Here is the first version of it!",
      "time": 1789005480,
      "title": "Show HN: What if the speed of light was 5 km/h?",
      "type": "story",
      "url": "https://rivendell.dmitrybrant.com/relativity/"
    },
    {
      "by": "yurivish",
      "descendants": 8,
      "id": 49638280,
      "kids": [
        49639295,
        49639080,
        49639269,
        49639298,
        49639237,
        49639118,
        49639057
      ],
      "score": 38,
      "time": 1789013078,
      "title": "All grown-ups were once children… but only few of them remember it",
      "type": "story",
      "url": "https://mathstodon.xyz/@tao/117244102901892965"
    },
    {
      "by": "bananaboy",
      "descendants": 20,
      "id": 49603265,
      "kids": [
        49639122,
        49639246,
        49639242,
        49638860,
        49639119,
        49639044,
        49639133,
        49639156,
        49639067,
        49638961
      ],
      "score": 51,
      "time": 1788817331,
      "title": "Version Control Second Coming",
      "type": "story",
      "url": "https://psantosl.github.io/posts/version-control-second-coming/"
    },
    {
      "by": "geotp",
      "descendants": 10,
      "id": 49587465,
      "kids": [
        49639281,
        49639240,
        49639082,
        49587466,
        49639092,
        49639026,
        49638632,
        49639013,
        49638720
      ],
      "score": 66,
      "time": 1788708539,
      "title": "ESP32 Bit Pirate Hardware Hacking Kit with Web Tools That Speaks Every Protocol",
      "type": "story",
      "url": "https://geo-tp.github.io/ESP32-Bit-Pirate/"
    },
    {
      "by": "olalonde",
      "descendants": 1,
      "id": 49621018,
      "kids": [
        49639288
      ],
      "score": 12,
      "time": 1788928342,
      "title": "Larger Pacific Striped Octopus",
      "type": "story",
      "url": "https://en.wikipedia.org/wiki/Larger_Pacific_striped_octopus"
    },
    {
      "by": "EdwinHoksberg",
      "descendants": 384,
      "id": 49626190,
      "kids": [
        49626354,
        49626734,
        49626416,
        49630202,
        49626765,
        49634327,
        49637823,
        49626503,
        49626737,
        49627177,
        49626778,
        49626547,
        49628623,
        49634822,
        49638144,
        49629044,
        49629269,
        49638519,
        49626772,
        49627466,
        49638373,
        49629279,
        49627954,
        49626448,
        49626664,
        49626405,
        49630351,
        49626265,
        49636205,
        49628272,
        49635509,
        49630183,
        49626443,
        49626656,
        49636593,
        49627049,
        49626456,
        49632538,
        49636305,
        49629114,
        49626720,
        49627179,
        49630652,
        49634410,
        49630063,
        49635780,
        49626571,
        49626759,
        49630494,
        49627010,
        49627419,
        49637841,
        49626852,
        49626325,
        49631642,
        49627660,
        49626669,
        49637032,
        49637580,
        49634882,
        49629232,
        49626452,
        49627382,
        49626323,
        49627787,
        49630304,
        49630107,
        49630092,
        49632254,
        49629686,
        49629477,
        49626999,
        49626701,
        49626368,
        49626402,
        49627753,
        49626670,
        49635136,
        49629534,
        49637402,
        49636483,
        49628567,
        49627088,
        49630426,
        49626387,
        49627925
      ],
      "score": 984,
      "time": 1788960431,
      "title": "Shopify acquires Tailwind",
      "type": "story",
      "url": "https://tailwindcss.com/blog/tailwind-is-joining-shopify"
    },
    {
      "by": "evakhoury",
      "descendants": 260,
      "id": 49614280,
      "kids": [
        49632403,
        49632963,
        49631180,
        49633004,
        49631805,
        49636627,
        49634056,
        49632226,
        49631941,
        49635717,
        49637733,
        49635649,
        49631598,
        49632999,
        49632322,
        49633959,
        49631616,
        49631621,
        49630682,
        49635389,
        49632172,
        49633066,
        49632303,
        49637398,
        49634626,
        49631185,
        49636169
      ],
      "score": 476,
      "time": 1788891065,
      "title": "What do Visa and Mastercard do? An intro to card networks",
      "type": "story",
      "url": "https://tautology.town/2026/06/01/card-networks.html"
    },
    {
      "by": "bookofjoe",
      "descendants": 519,
      "id": 49629886,
      "kids": [
        49635397,
        49633788,
        49634152,
        49638541,
        49637730,
        49633760,
        49639164,
        49630012,
        49637410,
        49638864,
        49630056,
        49639222,
        49630199,
        49635011,
        49637263,
        49638210,
        49636090,
        49630265,
        49630348,
        49630217,
        49638586,
        49637186,
        49635238,
        49636910,
        49636923,
        49637521,
        49634812,
        49634496,
        49634804,
        49631125,
        49637017,
        49630137,
        49637026,
        49635395,
        49636504,
        49630488,
        49636607,
        49634439,
        49637039,
        49634343,
        49630696,
        49638357,
        49635820,
        49630892,
        49638070,
        49630114,
        49636862,
        49637743,
        49633630,
        49634778,
        49633795,
        49637084,
        49637150,
        49637008,
        49636975,
        49635443,
        49634050,
        49638633,
        49630282,
        49636840,
        49636363,
        49632623,
        49637234,
        49636441,
        49629978,
        49634798
      ],
      "score": 309,
      "time": 1788974099,
      "title": "Growing proof that autonomous cars save lives",
      "type": "story",
      "url": "https://spectrum.ieee.org/are-self-driving-cars-safe"
    },
    {
      "by": "Anon84",
      "descendants": 6,
      "id": 49637435,
      "kids": [
        49638604,
        49638325,
        49638048,
        49638987
      ],
      "score": 44,
      "time": 1789005851,
      "title": "Training a 3.8B LLM to 0.384 CORE for $998 – Hugo Vergnes",
      "type": "story",
      "url": "https://hugovergnes.github.io/little-lm-3-8b/"
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
      "title": "Apple Event for September 9th, 2026",
      "url": "https://www.apple.com/apple-events/event-stream/",
      "score": 54,
      "comments": 16,
      "tags": [
        "event",
        "hardware",
        "ios",
        "mac",
        "video"
      ],
      "id": "zj6mij"
    },
    {
      "title": "I Don’t Want to Interact With Stochastic Parrots",
      "url": "https://ploum.net/2026-09-09-ai_policy.html",
      "score": 74,
      "comments": 26,
      "tags": [
        "rant",
        "vibecoding"
      ],
      "id": "rdhsu9"
    },
    {
      "title": "ID design and primary keys",
      "url": "https://anchorsandlinks.com/posts/primary-keys/",
      "score": 13,
      "comments": 4,
      "tags": [
        "databases"
      ],
      "id": "tiltfq"
    },
    {
      "title": "A Design Space Exploration of Async/Await",
      "url": "https://cel.cs.brown.edu/blog/design-space-async-await/",
      "score": 29,
      "comments": 10,
      "tags": [
        "plt"
      ],
      "id": "rghafd"
    },
    {
      "title": "A decade of rustls",
      "url": "https://rustls.dev/blog/2026-09-08-a-decade-of-rustls/",
      "score": 58,
      "comments": 0,
      "tags": [
        "networking",
        "rust"
      ],
      "id": "zffgb8"
    },
    {
      "title": "How to build a f**king printer",
      "url": "https://nishantjosh.dev/blogs/how-to-build-a-fking-printer/",
      "score": 99,
      "comments": 21,
      "tags": [
        "c++",
        "hardware",
        "networking",
        "vibecoding"
      ],
      "id": "pxreik"
    },
    {
      "title": "The purpose of DNS is to spread scams",
      "url": "https://shkspr.mobi/blog/2026/09/the-purpose-of-dns-is-to-spread-scams/",
      "score": 21,
      "comments": 34,
      "tags": [
        "web"
      ],
      "id": "veafpx"
    },
    {
      "title": "Better AI code comment detector",
      "url": "https://entropicthoughts.com/better-ai-comment-classifier",
      "score": 6,
      "comments": 2,
      "tags": [
        "ai",
        "math",
        "vibecoding"
      ],
      "id": "o9cyiv"
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
      "forks": 281,
      "added_stars": 3395,
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
      "forks": 2779,
      "added_stars": 8284,
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
      "author": "semantica-agi",
      "repo": "semantica",
      "avatar": "https://github.com/semantica-agi.png",
      "repo_link": "https://github.com/semantica-agi/semantica",
      "desc": "Graph-Native Infrastructure for Context and Accountable AI Systems",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1403,
      "added_stars": 9711,
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
      "author": "cactus-compute",
      "repo": "needle",
      "avatar": "https://github.com/cactus-compute.png",
      "repo_link": "https://github.com/cactus-compute/needle",
      "desc": "14MB foundation model for tiny devices; phones, wearables, smart home, and robots.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 682,
      "added_stars": 7313,
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
      "forks": 2703,
      "added_stars": 12027,
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
      "author": "marin-community",
      "repo": "marin",
      "avatar": "https://github.com/marin-community.png",
      "repo_link": "https://github.com/marin-community/marin",
      "desc": "Open-source framework for the research and development of foundation models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 288,
      "added_stars": 2360,
      "builtBy": [
        {
          "username": "dlwh",
          "href": "https://github.com/dlwh",
          "avatar": "https://avatars.githubusercontent.com/u/9633"
        },
        {
          "username": "rjpower",
          "href": "https://github.com/rjpower",
          "avatar": "https://avatars.githubusercontent.com/u/607207"
        },
        {
          "username": "BabyChouSr",
          "href": "https://github.com/BabyChouSr",
          "avatar": "https://avatars.githubusercontent.com/u/49086305"
        },
        {
          "username": "abhinavg4",
          "href": "https://github.com/abhinavg4",
          "avatar": "https://avatars.githubusercontent.com/u/12746692"
        },
        {
          "username": "ravwojdyla",
          "href": "https://github.com/ravwojdyla",
          "avatar": "https://avatars.githubusercontent.com/u/1419010"
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
      "forks": 52784,
      "added_stars": 23852,
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
      "author": "megadose",
      "repo": "holehe",
      "avatar": "https://github.com/megadose.png",
      "repo_link": "https://github.com/megadose/holehe",
      "desc": "holehe allows you to check if the mail is used on different sites like twitter, instagram and will retrieve information on sites with the forgotten password function.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1884,
      "added_stars": 2905,
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
      "author": "3b1b",
      "repo": "manim",
      "avatar": "https://github.com/3b1b.png",
      "repo_link": "https://github.com/3b1b/manim",
      "desc": "Animation engine for explanatory math videos",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7689,
      "added_stars": 4372,
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
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 18836,
      "added_stars": 20372,
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
      "forks": 1844,
      "added_stars": 3096,
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
      "forks": 6916,
      "added_stars": 6434,
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
      "author": "MiaAI-Lab",
      "repo": "DeepSeek-v4-Flash-DSpark-2x-DGX-Spark",
      "avatar": "https://github.com/MiaAI-Lab.png",
      "repo_link": "https://github.com/MiaAI-Lab/DeepSeek-v4-Flash-DSpark-2x-DGX-Spark",
      "desc": "DeepSeek-v4-Flash 0731 recipe for 2x DGX Sparks",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 182,
      "added_stars": 828,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3467,
      "added_stars": 3915,
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
      "author": "blader",
      "repo": "humanizer",
      "avatar": "https://github.com/blader.png",
      "repo_link": "https://github.com/blader/humanizer",
      "desc": "Agent skill that removes signs of AI-generated writing from text",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3778,
      "added_stars": 11613,
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
      "forks": 580,
      "added_stars": 1783,
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
      "author": "K-Dense-AI",
      "repo": "scientific-agent-skills",
      "avatar": "https://github.com/K-Dense-AI.png",
      "repo_link": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "desc": "Turn any AI agent into an AI Scientist. The #1 Agent Skills library for science, used by 190,000+ scientists worldwide. 165 ready-to-use validated skills plus 100+ scientific databases covering biology, chemistry, medicine, and drug discovery. Compatible with Cursor, Claude Code, Codex, Pi, Antigravity, and the open Agent Skills standard.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4008,
      "added_stars": 11256,
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
      "author": "abi",
      "repo": "screenshot-to-code",
      "avatar": "https://github.com/abi.png",
      "repo_link": "https://github.com/abi/screenshot-to-code",
      "desc": "Drop in a screenshot and convert it to clean code (HTML/Tailwind/React/Vue)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9554,
      "added_stars": 4649,
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
      "forks": 467,
      "added_stars": 773,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7824,
      "added_stars": 5970,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3072,
      "added_stars": 4942,
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
      "author": "donnemartin",
      "repo": "system-design-primer",
      "avatar": "https://github.com/donnemartin.png",
      "repo_link": "https://github.com/donnemartin/system-design-primer",
      "desc": "Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 58327,
      "added_stars": 7348,
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
      "forks": 636,
      "added_stars": 4683,
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
      "forks": 5566,
      "added_stars": 13766,
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
      "forks": 478,
      "added_stars": 3880,
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
      "author": "titanwings",
      "repo": "distilly",
      "avatar": "https://github.com/titanwings.png",
      "repo_link": "https://github.com/titanwings/distilly",
      "desc": "Distilly — Distill how they think into reusable Skills for any Agent or Bot. Formerly Colleague Skill（原同事 Skill）.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2136,
      "added_stars": 3805,
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
      "forks": 2293,
      "added_stars": 7128,
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
      "author": "CodebuffAI",
      "repo": "freebuff",
      "avatar": "https://github.com/CodebuffAI.png",
      "repo_link": "https://github.com/CodebuffAI/freebuff",
      "desc": "The free coding agent",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1274,
      "added_stars": 3241,
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
      "forks": 3452,
      "added_stars": 7218,
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
      "forks": 257,
      "added_stars": 2113,
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
      "author": "maotoumao",
      "repo": "MusicFree",
      "avatar": "https://github.com/maotoumao.png",
      "repo_link": "https://github.com/maotoumao/MusicFree",
      "desc": "插件化、定制化、无广告的免费音乐播放器",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1921,
      "added_stars": 870,
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
      "author": "Gitlawb",
      "repo": "openclaude",
      "avatar": "https://github.com/Gitlawb.png",
      "repo_link": "https://github.com/Gitlawb/openclaude",
      "desc": "runs anywhere. uses anything",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9071,
      "added_stars": 2640,
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
      "forks": 258,
      "added_stars": 3519,
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
      "added_stars": 2616,
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
      "author": "can1357",
      "repo": "oh-my-pi",
      "avatar": "https://github.com/can1357.png",
      "repo_link": "https://github.com/can1357/oh-my-pi",
      "desc": "⌥ Coding agent with the IDE wired in",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3121,
      "added_stars": 7365,
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
      "author": "vercel-labs",
      "repo": "portless",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/portless",
      "desc": "Replace port numbers with stable, named local URLs. For humans and agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 411,
      "added_stars": 2072,
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
      "author": "mlc-ai",
      "repo": "web-llm",
      "avatar": "https://github.com/mlc-ai.png",
      "repo_link": "https://github.com/mlc-ai/web-llm",
      "desc": "High-performance In-browser LLM Inference Engine",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1378,
      "added_stars": 535,
      "builtBy": [
        {
          "username": "CharlieFRuan",
          "href": "https://github.com/CharlieFRuan",
          "avatar": "https://avatars.githubusercontent.com/u/53290280"
        },
        {
          "username": "tqchen",
          "href": "https://github.com/tqchen",
          "avatar": "https://avatars.githubusercontent.com/u/2577440"
        },
        {
          "username": "Neet-Nestor",
          "href": "https://github.com/Neet-Nestor",
          "avatar": "https://avatars.githubusercontent.com/u/23090573"
        },
        {
          "username": "MasterJH5574",
          "href": "https://github.com/MasterJH5574",
          "avatar": "https://avatars.githubusercontent.com/u/45167100"
        },
        {
          "username": "akaashrp",
          "href": "https://github.com/akaashrp",
          "avatar": "https://avatars.githubusercontent.com/u/43900735"
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
      "forks": 5709,
      "added_stars": 389,
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
      "forks": 5516,
      "added_stars": 4836,
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
      "author": "advaitpaliwal",
      "repo": "feynman",
      "avatar": "https://github.com/advaitpaliwal.png",
      "repo_link": "https://github.com/advaitpaliwal/feynman",
      "desc": "The open source AI research agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1057,
      "added_stars": 867,
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
      "title": "Four Debian 13 Boxes, One Brief: 1,923 Packages on Metal, 328 in the Cloud",
      "description": "The same Debian 13 on a laptop and on AWS, GCE and Azure. The cloud images ship 328-350 packages against 1,923 on metal, no firmware package at all, and no tool to read the NVMe they all boot from. Each machine was then given the same brief and asked to analyse itself. Three of them agreed. The fourth found a partition table its own resize had broken.",
      "url": "https://dev.to/gde/four-debian-13-boxes-one-brief-1923-packages-on-metal-328-in-the-cloud-and-the-backup-gpt-cc2",
      "tags": "debian, linux, claudecode, devops",
      "reactions": 8,
      "comments": 1,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "4 pitfalls of loop engineering (and how to fix them)",
      "description": "Perhaps you've heard the term Loop Engineering: instead of solving a problem by hand, you build a...",
      "url": "https://dev.to/googleai/4-pitfalls-of-loop-engineering-and-how-to-fix-them-1ji2",
      "tags": "ai, agents, discuss",
      "reactions": 9,
      "comments": 2,
      "reading_time": 1,
      "author": "annthurium"
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
      "title": "Welcome Thread - v 392",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-392-1kj4",
      "tags": "welcome",
      "reactions": 14,
      "comments": 60,
      "reading_time": 1,
      "author": "sloan"
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
      "reactions": 217,
      "comments": 115,
      "reading_time": 11,
      "author": "sylwia-lask"
    },
    {
      "title": "The Cable Buys Headroom: 91% of a USB 2.0 Bus, 3.6% of a Thunderbolt One",
      "description": "The best USB 2.0 pass in 45 tethering records used 91% of what that bus can usably carry. The same link on a SuperSpeed cable uses 3.6%. USB speed is autonegotiated between host, cable and device, the slowest one wins, and nothing anywhere tells you the cable capped you.",
      "url": "https://dev.to/gde/the-cable-buys-headroom-91-of-a-usb-20-bus-36-of-a-thunderbolt-one-563n",
      "tags": "linux, networking, usb, debugging",
      "reactions": 9,
      "comments": 1,
      "reading_time": 18,
      "author": "xbill"
    },
    {
      "title": "Stop rebuilding from scratch: cache Docker layers on Cloud Build",
      "description": "Cloud Build runs on ephemeral workers, so your Docker cache vanishes on every run. Here's how to persist it in Artifact Registry with BuildKit's registry cache — uv stops re-downloading dependencies, builds get faster, greener and cheaper.",
      "url": "https://dev.to/gde/stop-rebuilding-from-scratch-cache-docker-layers-on-cloud-build-41m0",
      "tags": "docker, googlecloud, python, devops",
      "reactions": 9,
      "comments": 1,
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
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-40ma",
      "tags": "top7, discuss",
      "reactions": 56,
      "comments": 25,
      "reading_time": 3,
      "author": "heyitsjem"
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
      "reactions": 47,
      "comments": 42,
      "reading_time": 5,
      "author": "francistrdev"
    },
    {
      "title": "Has AI Made You A Lazier Developer? Be Honest.",
      "description": "Haven't you ever wondered if this AI vibe coding has made us lazy? Who's been solving problems on...",
      "url": "https://dev.to/nazar-boyko/has-ai-made-you-a-lazier-developer-be-honest-5ack",
      "tags": "discuss, ai, productivity, career",
      "reactions": 78,
      "comments": 27,
      "reading_time": 4,
      "author": "nazar-boyko"
    },
    {
      "title": "Nothing failed for twelve days while our post schedule drifted 76 hours: the label that meant two things",
      "description": "For twelve days, every scheduled job fired, every commit gate passed, and the label on the front of...",
      "url": "https://dev.to/rulestack/nothing-failed-for-twelve-days-while-our-post-schedule-drifted-76-hours-the-label-that-meant-two-18a3",
      "tags": "ai, programming, devtools, productivity",
      "reactions": 1,
      "comments": 1,
      "reading_time": 7,
      "author": "rulestack"
    },
    {
      "title": "5 Verbal Corrections Didn't Stick, So a 46-Line Stop Hook Made the Mistake Physically Impossible",
      "description": "I corrected the same Claude Code mistake more than five times. It never stuck. Then I replaced the...",
      "url": "https://dev.to/bokuwalily/5-verbal-corrections-didnt-stick-so-a-46-line-stop-hook-made-the-mistake-physically-impossible-3d4n",
      "tags": "claudecode, automation, bash, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 21,
      "author": "bokuwalily"
    },
    {
      "title": "If You Understand These 5 AI Terms, You're Ahead of 90% of People",
      "description": "A few months back I sat in a meeting where someone said, dead serious, \"we should fine-tune the RAG.\"...",
      "url": "https://dev.to/rahmanfrr/if-you-understand-these-5-ai-terms-youre-ahead-of-90-of-people-53h2",
      "tags": "ai, beginners, productivity, career",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "rahmanfrr"
    },
    {
      "title": "I built a free toolkit with 38 tools for students — no sign-up, runs entirely in the browser",
      "description": "Every semester I found myself bouncing between five different websites just to calculate my CGPA,...",
      "url": "https://dev.to/prathamesh_karande_1/i-built-a-free-toolkit-with-38-tools-for-students-no-sign-up-runs-entirely-in-the-browser-3lel",
      "tags": "webdev, showdev, javascript, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "prathamesh_karande_1"
    },
    {
      "title": "Shipping AI-Generated Features as Stacked PRs: A Complete Spec Kit + gh stack Tutorial",
      "description": "A step-by-step guide to pairing spec-driven development with stacked pull requests — from specify...",
      "url": "https://dev.to/sohailrajput/shipping-ai-generated-features-as-stacked-prs-a-complete-spec-kit-gh-stack-tutorial-gie",
      "tags": "speckit, genai, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "sohailrajput"
    },
    {
      "title": "The Automation Pipeline — Pairing with a Scheduler So It Works at Night Too",
      "description": "This is chapter 7 of my book **Building Autonomous AI Agents with Claude Code* — a field guide to...",
      "url": "https://dev.to/dbsoul/the-automation-pipeline-pairing-with-a-scheduler-so-it-works-at-night-too-4ebg",
      "tags": "ai, productivity, automation, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "dbsoul"
    },
    {
      "title": "I Fumbled an Interview Not because I lack Technical Skills but an Arcade Development workflow",
      "description": "I just fumbled a casual interview with an organization a few hours ago.  It exposed a brutal...",
      "url": "https://dev.to/orashus/i-fumbled-an-interview-not-because-i-lack-technical-skills-but-an-arcade-development-workflow-4a90",
      "tags": "ai, webdev, programming, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 2,
      "author": "orashus"
    },
    {
      "title": "Batches, and Stopping Without Losing Anything",
      "description": "A batch is one executor, one pass, iterations strictly in order - and the boundary where the commit happens. Cut the work into batches and you can drop it at any boundary without reconstructing anything from memory, which matters because the executor has no memory at all.",
      "url": "https://dev.to/anton_brilliantov/batches-and-stopping-without-losing-anything-1nk9",
      "tags": "ai, productivity, go, architecture",
      "reactions": 0,
      "comments": 0,
      "reading_time": 10,
      "author": "anton_brilliantov"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

