# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-09-19 06:35:31 UTC

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
      "forks": 7661,
      "added_stars": 11683,
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
          "username": "manjunath22466",
          "href": "https://github.com/manjunath22466",
          "avatar": "https://avatars.githubusercontent.com/u/301209272"
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
      "forks": 39231,
      "added_stars": 5877,
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
      "author": "addyosmani",
      "repo": "agent-skills",
      "avatar": "https://github.com/addyosmani.png",
      "repo_link": "https://github.com/addyosmani/agent-skills",
      "desc": "Production-grade engineering skills for AI coding agents.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 10201,
      "added_stars": 3051,
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
      "author": "openai",
      "repo": "plugins",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/plugins",
      "desc": "OpenAI Plugins",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 903,
      "added_stars": 542,
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
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Unlimited FREE AI coding. Connect Claude Code, Codex, Cursor, Cline, Copilot, Antigravity to FREE Claude/GPT/Gemini via 40+ providers. Auto-fallback, RTK -40% tokens, never hit limits.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5433,
      "added_stars": 884,
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
      "author": "cloudflare",
      "repo": "security-audit-skill",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/security-audit-skill",
      "desc": "A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 770,
      "added_stars": 10436,
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
      "author": "asgeirtj",
      "repo": "system_prompts_leaks",
      "avatar": "https://github.com/asgeirtj.png",
      "repo_link": "https://github.com/asgeirtj/system_prompts_leaks",
      "desc": "Extracted system prompts from Anthropic - Claude Fable 5.1, Opus 5, Claude Design, Claude Code. OpenAI - ChatGPT GPT-6-Astra, Codex. Google - Gemini 3.8 Flash, 3.1 Pro, Antigravity. xAI - Grok, Grok Bot, Cursor, Kimi and more! Updated regularly.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 10968,
      "added_stars": 2770,
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
      "author": "mekos2772",
      "repo": "ios-location-spoofer",
      "avatar": "https://github.com/mekos2772.png",
      "repo_link": "https://github.com/mekos2772/ios-location-spoofer",
      "desc": "Standalone iOS app to spoof GPS location without jailbreak. Includes Shadowrocket/Surge/Loon/QX/Stash module.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 841,
      "added_stars": 234,
      "builtBy": [
        {
          "username": "mekos2772",
          "href": "https://github.com/mekos2772",
          "avatar": "https://avatars.githubusercontent.com/u/119464194"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ppanphper",
          "href": "https://github.com/ppanphper",
          "avatar": "https://avatars.githubusercontent.com/u/6057923"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "mahdi-salmanzade",
          "href": "https://github.com/mahdi-salmanzade",
          "avatar": "https://avatars.githubusercontent.com/u/23733945"
        }
      ]
    },
    {
      "author": "tradesdontlie",
      "repo": "tradingview-mcp",
      "avatar": "https://github.com/tradesdontlie.png",
      "repo_link": "https://github.com/tradesdontlie/tradingview-mcp",
      "desc": "AI-assisted TradingView chart analysis — connect Claude Code to your TradingView Desktop for personal workflow automation",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2719,
      "added_stars": 402,
      "builtBy": [
        {
          "username": "tradesdontlie",
          "href": "https://github.com/tradesdontlie",
          "avatar": "https://avatars.githubusercontent.com/u/196674484"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "xxhanselxx-sudo",
          "href": "https://github.com/xxhanselxx-sudo",
          "avatar": "https://avatars.githubusercontent.com/u/279546097"
        },
        {
          "username": "jawadtazi-dot",
          "href": "https://github.com/jawadtazi-dot",
          "avatar": "https://avatars.githubusercontent.com/u/267062393"
        },
        {
          "username": "wowkin2",
          "href": "https://github.com/wowkin2",
          "avatar": "https://avatars.githubusercontent.com/u/1820114"
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
      "forks": 2748,
      "added_stars": 336,
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
      "author": "vercel",
      "repo": "next.js",
      "avatar": "https://github.com/vercel.png",
      "repo_link": "https://github.com/vercel/next.js",
      "desc": "The React Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 32404,
      "added_stars": 531,
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
      "author": "DietrichGebert",
      "repo": "ponytail",
      "avatar": "https://github.com/DietrichGebert.png",
      "repo_link": "https://github.com/DietrichGebert/ponytail",
      "desc": "Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7622,
      "added_stars": 6452,
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
      "author": "is-a-dev",
      "repo": "register",
      "avatar": "https://github.com/is-a-dev.png",
      "repo_link": "https://github.com/is-a-dev/register",
      "desc": "Grab your own sweet-looking '.is-a.dev' subdomain.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 29887,
      "added_stars": 97,
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
      "author": "xuanyustudio",
      "repo": "LocalMiniDrama",
      "avatar": "https://github.com/xuanyustudio.png",
      "repo_link": "https://github.com/xuanyustudio/LocalMiniDrama",
      "desc": "🎬 seedance2接入 开源本地 AI 短剧 & 漫剧生成工具 —— 从故事到成片一站式完成，数据不出本机，短剧工作流管理平台，高灵活度，AI真人剧，AI漫剧本地搞定。 Open-source local AI short drama maker: story → storyboard → video, fully offline, your data stays yours. 纳米流水线",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 437,
      "added_stars": 421,
      "builtBy": [
        {
          "username": "xuanyustudio",
          "href": "https://github.com/xuanyustudio",
          "avatar": "https://avatars.githubusercontent.com/u/208556008"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "Link-1028",
          "href": "https://github.com/Link-1028",
          "avatar": "https://avatars.githubusercontent.com/u/83273005"
        },
        {
          "username": "4022chat",
          "href": "https://github.com/4022chat",
          "avatar": "https://avatars.githubusercontent.com/u/269969099"
        },
        {
          "username": "Linorman",
          "href": "https://github.com/Linorman",
          "avatar": "https://avatars.githubusercontent.com/u/101043205"
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
      "forks": 902,
      "added_stars": 958,
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
      "author": "fleetbase",
      "repo": "fleetbase",
      "avatar": "https://github.com/fleetbase.png",
      "repo_link": "https://github.com/fleetbase/fleetbase",
      "desc": "Modular logistics and supply chain operating system (LSOS)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1009,
      "added_stars": 1389,
      "builtBy": [
        {
          "username": "roncodes",
          "href": "https://github.com/roncodes",
          "avatar": "https://avatars.githubusercontent.com/u/816371"
        },
        {
          "username": "shivthakker",
          "href": "https://github.com/shivthakker",
          "avatar": "https://avatars.githubusercontent.com/u/58805033"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ekini",
          "href": "https://github.com/ekini",
          "avatar": "https://avatars.githubusercontent.com/u/1527663"
        },
        {
          "username": "TemuulenBM",
          "href": "https://github.com/TemuulenBM",
          "avatar": "https://avatars.githubusercontent.com/u/124872945"
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
      "forks": 750,
      "added_stars": 275,
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
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4971,
      "added_stars": 275,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
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
      "by": "emigre",
      "descendants": 5,
      "id": 49763697,
      "kids": [
        49763884,
        49763820,
        49763940,
        49763753
      ],
      "score": 37,
      "time": 1789796930,
      "title": "Human brain is two separate organs, Stanford Medicine-led research finds",
      "type": "story",
      "url": "https://med.stanford.edu/news/all-news/2026/09/two-separate-brains.html"
    },
    {
      "by": "z-mach9",
      "descendants": 46,
      "id": 49763296,
      "kids": [
        49763509,
        49763378,
        49763373,
        49763513,
        49763554,
        49763597,
        49763915,
        49763668,
        49763900,
        49763521,
        49763500,
        49763388,
        49763769,
        49763876,
        49763419,
        49763427,
        49763584,
        49763474,
        49763413,
        49763472
      ],
      "score": 130,
      "time": 1789791810,
      "title": "San Francisco Onion Futures Company",
      "type": "story",
      "url": "https://onionfutures.com/"
    },
    {
      "by": "theanonymousone",
      "descendants": 360,
      "id": 49758736,
      "kids": [
        49759227,
        49759896,
        49761997,
        49763135,
        49759761,
        49759420,
        49759660,
        49759705,
        49762362,
        49759836,
        49759520,
        49759488,
        49763428,
        49759327,
        49761912,
        49759847,
        49762726,
        49762377,
        49759707,
        49760780,
        49759395,
        49760351,
        49760409,
        49763182,
        49759215,
        49760495,
        49761583,
        49761099,
        49759960,
        49761209,
        49759659,
        49759832,
        49759962,
        49759160,
        49762823,
        49762301,
        49763448
      ],
      "score": 745,
      "time": 1789758189,
      "title": "Android 17 is the first since 3.x to add new APIs without releasing to the AOSP",
      "type": "story",
      "url": "https://grapheneos.social/@GrapheneOS/117282080803799576"
    },
    {
      "by": "rahimnathwani",
      "descendants": 11,
      "id": 49733647,
      "kids": [
        49763738,
        49763634,
        49763526,
        49763408,
        49763654
      ],
      "score": 49,
      "time": 1789596109,
      "title": "Typesafe-computer-use drives a Mac toward a goal for 1/50th of a cent per step",
      "type": "story",
      "url": "https://github.com/awlevin/typesafe-computer-use"
    },
    {
      "by": "lioeters",
      "descendants": 14,
      "id": 49762744,
      "kids": [
        49763332,
        49763011,
        49763773,
        49763263,
        49763003
      ],
      "score": 54,
      "time": 1789785156,
      "title": "SDCC – Small Device C Compiler",
      "type": "story",
      "url": "https://sdcc.sourceforge.net/"
    },
    {
      "by": "jegp",
      "descendants": 25,
      "id": 49762687,
      "kids": [
        49763758,
        49763179,
        49763044,
        49763148,
        49762816,
        49763226,
        49763870,
        49763646,
        49762688
      ],
      "score": 57,
      "time": 1789784495,
      "title": "Science Is Open Software",
      "type": "story",
      "url": "https://jepedersen.dk/blog/202505_research/"
    },
    {
      "by": "jcbhmr",
      "descendants": 272,
      "id": 49754785,
      "kids": [
        49756985,
        49761235,
        49757199,
        49756239,
        49755662,
        49757437,
        49756300,
        49758203,
        49755700,
        49755600,
        49762782,
        49757800,
        49763482,
        49757484,
        49758150,
        49759719,
        49755726,
        49756056,
        49757043,
        49758227,
        49755895,
        49760238,
        49759355,
        49757255,
        49762818,
        49755738,
        49762390,
        49757257,
        49762338,
        49760824,
        49756915,
        49760917,
        49758449,
        49760434,
        49755264,
        49756478,
        49758508,
        49756881,
        49758864,
        49758620,
        49755944,
        49760440,
        49763480,
        49757272,
        49756491,
        49755671,
        49757056,
        49760673,
        49757946,
        49756830,
        49757117,
        49757045,
        49761564,
        49756557,
        49756884,
        49761034,
        49757338,
        49759012,
        49756235,
        49760396,
        49756334,
        49757372,
        49757366,
        49757364,
        49756205,
        49755595,
        49761085,
        49763420,
        49760175,
        49758592,
        49757674,
        49757511,
        49756732,
        49757754,
        49762284,
        49757031,
        49757365,
        49756248,
        49755628,
        49756191,
        49761444,
        49758373,
        49755654
      ],
      "score": 671,
      "time": 1789741121,
      "title": "Cloudflare Quick Tunnels",
      "type": "story",
      "url": "https://try.cloudflare.com/"
    },
    {
      "by": "f311a",
      "descendants": 60,
      "id": 49758580,
      "kids": [
        49762008,
        49762990,
        49760611,
        49760109,
        49761991,
        49760087,
        49760077,
        49761051,
        49760924,
        49762417,
        49762924,
        49763363,
        49760782,
        49762465,
        49762423,
        49760557,
        49762334,
        49759891,
        49759137,
        49759203,
        49761342
      ],
      "score": 316,
      "time": 1789757506,
      "title": "Saving another 100TB of RAM",
      "type": "story",
      "url": "https://blog.cloudflare.com/saving-100-tb-of-ram-with-math/"
    },
    {
      "by": "agluszak",
      "descendants": 20,
      "id": 49734131,
      "kids": [
        49763677,
        49762872,
        49763665,
        49762933
      ],
      "score": 41,
      "time": 1789599076,
      "title": "Why building a Rust LSP is hard",
      "type": "story",
      "url": "https://rust-glancer.github.io/blog/why-lsp-is-hard/"
    },
    {
      "by": "maxall4",
      "descendants": 75,
      "id": 49761432,
      "kids": [
        49762023,
        49762241,
        49763289,
        49762209,
        49761617,
        49762329,
        49761634,
        49763445,
        49762260,
        49762321,
        49762148,
        49762318,
        49761857
      ],
      "score": 103,
      "time": 1789772657,
      "title": "How OpenAI Used Its Own LLMs to Design Its Jalapeño Chip",
      "type": "story",
      "url": "https://spectrum.ieee.org/llms-for-chip-design"
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
      "title": "Typst makes big strides",
      "url": "https://lwn.net/Articles/1092993/",
      "score": 78,
      "comments": 10,
      "tags": [
        "a11y",
        "programming"
      ],
      "id": "j4oyxa"
    },
    {
      "title": "I don't like passkeys",
      "url": "https://hawksley.dev/blog/i-dont-like-passkeys",
      "score": 50,
      "comments": 25,
      "tags": [
        "security"
      ],
      "id": "4a7qly"
    },
    {
      "title": "There's no point at which turning your brain off will work",
      "url": "https://danluu.com/brain-off/",
      "score": 21,
      "comments": 7,
      "tags": [
        "vibecoding"
      ],
      "id": "dd6if1"
    },
    {
      "title": "Benchmarking Wild vs Mold",
      "url": "https://davidlattimore.github.io/posts/2026/09/18/benchmarking-wild-vs-mold.html",
      "score": 39,
      "comments": 0,
      "tags": [
        "compilers",
        "performance"
      ],
      "id": "gjjizm"
    },
    {
      "title": "What is still exciting in tech?",
      "url": "",
      "score": 135,
      "comments": 164,
      "tags": [
        "ask",
        "culture"
      ],
      "id": "lcjf7c"
    },
    {
      "title": "FAQ: Why isn’t mutable a subtype of immutable, or vice versa?",
      "url": "https://crumbles.blog/posts/2026-09-17-immutable-mutable.html",
      "score": 15,
      "comments": 4,
      "tags": [
        "lisp"
      ],
      "id": "lzhzsx"
    },
    {
      "title": "CSS-Tricks could be a co-op",
      "url": "https://ericwbailey.website/published/css-tricks-could-be-a-co-op/",
      "score": 20,
      "comments": 1,
      "tags": [
        "css",
        "culture"
      ],
      "id": "bcfzlc"
    },
    {
      "title": "Be alert: targeted attacks on prominent Rustaceans",
      "url": "https://blog.rust-lang.org/2026/09/17/targeted-attacks/",
      "score": 94,
      "comments": 27,
      "tags": [
        "rust",
        "security"
      ],
      "id": "uz30ed"
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
      "forks": 309,
      "added_stars": 3934,
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
      "forks": 2807,
      "added_stars": 26310,
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
      "forks": 3905,
      "added_stars": 22910,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3193,
      "added_stars": 5206,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8014,
      "added_stars": 6966,
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
          "username": "basil-k-aji-dev",
          "href": "https://github.com/basil-k-aji-dev",
          "avatar": "https://avatars.githubusercontent.com/u/70605804"
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
      "forks": 4132,
      "added_stars": 11875,
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
      "forks": 3560,
      "added_stars": 4101,
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
      "author": "experientiallabs",
      "repo": "experiential",
      "avatar": "https://github.com/experientiallabs.png",
      "repo_link": "https://github.com/experientiallabs/experiential",
      "desc": "Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend better models, and train a specialized model you own.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 186,
      "added_stars": 4831,
      "builtBy": [
        {
          "username": "SilenNaihin",
          "href": "https://github.com/SilenNaihin",
          "avatar": "https://avatars.githubusercontent.com/u/44129612"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "kfallah",
          "href": "https://github.com/kfallah",
          "avatar": "https://avatars.githubusercontent.com/u/9440350"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 9678,
      "added_stars": 5241,
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
      "author": "securo-finance",
      "repo": "securo",
      "avatar": "https://github.com/securo-finance.png",
      "repo_link": "https://github.com/securo-finance/securo",
      "desc": "Open-source personal finance manager. Self-hosted, privacy-first.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 451,
      "added_stars": 1988,
      "builtBy": [
        {
          "username": "tassionoronha",
          "href": "https://github.com/tassionoronha",
          "avatar": "https://avatars.githubusercontent.com/u/5116181"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ADolkun",
          "href": "https://github.com/ADolkun",
          "avatar": "https://avatars.githubusercontent.com/u/90114586"
        },
        {
          "username": "panga",
          "href": "https://github.com/panga",
          "avatar": "https://avatars.githubusercontent.com/u/225529"
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
      "forks": 731,
      "added_stars": 5278,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9663,
      "added_stars": 8366,
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
          "username": "thejesh23",
          "href": "https://github.com/thejesh23",
          "avatar": "https://avatars.githubusercontent.com/u/35212698"
        }
      ]
    },
    {
      "author": "jiji262",
      "repo": "douyin-downloader",
      "avatar": "https://github.com/jiji262.png",
      "repo_link": "https://github.com/jiji262/douyin-downloader",
      "desc": "A practical Douyin downloader for both single-item and profile batch downloads, with progress display, retries, SQLite deduplication, and browser fallback support. 抖音批量下载工具，去水印，支持视频、图集、合集、音乐(原声)。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1834,
      "added_stars": 2581,
      "builtBy": [
        {
          "username": "jiji262",
          "href": "https://github.com/jiji262",
          "avatar": "https://avatars.githubusercontent.com/u/168751"
        },
        {
          "username": "dennistodo",
          "href": "https://github.com/dennistodo",
          "avatar": "https://avatars.githubusercontent.com/u/213367755"
        },
        {
          "username": "craft-agents-bot",
          "href": "https://github.com/craft-agents-bot",
          "avatar": "https://avatars.githubusercontent.com/u/255798083"
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
      "forks": 53161,
      "added_stars": 18338,
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
      "author": "k2-fsa",
      "repo": "OmniVoice",
      "avatar": "https://github.com/k2-fsa.png",
      "repo_link": "https://github.com/k2-fsa/OmniVoice",
      "desc": "High-Quality Voice Cloning TTS for 600+ Languages",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2043,
      "added_stars": 4361,
      "builtBy": [
        {
          "username": "zhu-han",
          "href": "https://github.com/zhu-han",
          "avatar": "https://avatars.githubusercontent.com/u/52005835"
        },
        {
          "username": "HenryVarro666",
          "href": "https://github.com/HenryVarro666",
          "avatar": "https://avatars.githubusercontent.com/u/48014495"
        },
        {
          "username": "pkufool",
          "href": "https://github.com/pkufool",
          "avatar": "https://avatars.githubusercontent.com/u/11765074"
        },
        {
          "username": "Pastells",
          "href": "https://github.com/Pastells",
          "avatar": "https://avatars.githubusercontent.com/u/30735349"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "youssofal",
      "repo": "MTPLX",
      "avatar": "https://github.com/youssofal.png",
      "repo_link": "https://github.com/youssofal/MTPLX",
      "desc": "The fastest way to run Qwen 3.8 Flash Next and Qwen 3.8 27B on a Mac: 125 tok/s in OpenCode on an M5 Max. Native MTP speculative decoding on Apple Silicon, exact at any temperature. OpenAI and Anthropic compatible local server.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 181,
      "added_stars": 1003,
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
      "author": "Tencent",
      "repo": "AI-Infra-Guard",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/AI-Infra-Guard",
      "desc": "A full-stack AI Red Teaming platform securing AI ecosystems via Agent Scan, Skills Scan, MCP scan, AI Infra scan and LLM jailbreak evaluation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 597,
      "added_stars": 1863,
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
      "author": "PDFMathTranslate",
      "repo": "PDFMathTranslate",
      "avatar": "https://github.com/PDFMathTranslate.png",
      "repo_link": "https://github.com/PDFMathTranslate/PDFMathTranslate",
      "desc": "[EMNLP 2025 Demo] PDF scientific paper translation with preserved formats - 基于 AI 完整保留排版的 PDF 文档全文双语翻译，支持 Google/DeepL/Ollama/OpenAI 等服务，提供 CLI/GUI/MCP/Docker/Zotero",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3328,
      "added_stars": 947,
      "builtBy": [
        {
          "username": "Byaidu",
          "href": "https://github.com/Byaidu",
          "avatar": "https://avatars.githubusercontent.com/u/21212051"
        },
        {
          "username": "awwaawwa",
          "href": "https://github.com/awwaawwa",
          "avatar": "https://avatars.githubusercontent.com/u/8493196"
        },
        {
          "username": "reycn",
          "href": "https://github.com/reycn",
          "avatar": "https://avatars.githubusercontent.com/u/11225092"
        },
        {
          "username": "hellofinch",
          "href": "https://github.com/hellofinch",
          "avatar": "https://avatars.githubusercontent.com/u/42131198"
        }
      ]
    },
    {
      "author": "dgtlmoon",
      "repo": "changedetection.io",
      "avatar": "https://github.com/dgtlmoon.png",
      "repo_link": "https://github.com/dgtlmoon/changedetection.io",
      "desc": "Best and simplest tool for website change detection, web page monitoring, and website change alerts. Perfect for tracking content changes, price drops, restock alerts, and website defacement monitoring—all for free or enjoy our SaaS plan!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2065,
      "added_stars": 1256,
      "builtBy": [
        {
          "username": "dgtlmoon",
          "href": "https://github.com/dgtlmoon",
          "avatar": "https://avatars.githubusercontent.com/u/275001"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "skkzsh",
          "href": "https://github.com/skkzsh",
          "avatar": "https://avatars.githubusercontent.com/u/1439870"
        },
        {
          "username": "Constantin1489",
          "href": "https://github.com/Constantin1489",
          "avatar": "https://avatars.githubusercontent.com/u/61624808"
        }
      ]
    },
    {
      "author": "caronc",
      "repo": "apprise",
      "avatar": "https://github.com/caronc.png",
      "repo_link": "https://github.com/caronc/apprise",
      "desc": "Apprise - Push Notifications that work with just about every platform!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 663,
      "added_stars": 295,
      "builtBy": [
        {
          "username": "caronc",
          "href": "https://github.com/caronc",
          "avatar": "https://avatars.githubusercontent.com/u/850374"
        },
        {
          "username": "amotl",
          "href": "https://github.com/amotl",
          "avatar": "https://avatars.githubusercontent.com/u/453543"
        },
        {
          "username": "YoRyan",
          "href": "https://github.com/YoRyan",
          "avatar": "https://avatars.githubusercontent.com/u/4701008"
        },
        {
          "username": "HerbertGao",
          "href": "https://github.com/HerbertGao",
          "avatar": "https://avatars.githubusercontent.com/u/7234559"
        },
        {
          "username": "sentriz",
          "href": "https://github.com/sentriz",
          "avatar": "https://avatars.githubusercontent.com/u/6832539"
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
      "forks": 5941,
      "added_stars": 17177,
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
          "username": "xuyuanwei678",
          "href": "https://github.com/xuyuanwei678",
          "avatar": "https://avatars.githubusercontent.com/u/71585589"
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
      "forks": 744,
      "added_stars": 5182,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3717,
      "added_stars": 8509,
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
      "author": "apache",
      "repo": "maka",
      "avatar": "https://github.com/apache.png",
      "repo_link": "https://github.com/apache/maka",
      "desc": "Apache Maka (Incubating) is a high-performance agent workspace that keeps a complete record of everything it did.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 517,
      "added_stars": 4259,
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
      "author": "tech-leads-club",
      "repo": "agent-skills",
      "avatar": "https://github.com/tech-leads-club.png",
      "repo_link": "https://github.com/tech-leads-club/agent-skills",
      "desc": "The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 535,
      "added_stars": 1471,
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
      "author": "melgarafael",
      "repo": "DeskcommCRM",
      "avatar": "https://github.com/melgarafael.png",
      "repo_link": "https://github.com/melgarafael/DeskcommCRM",
      "desc": "Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA). Open alternative to Kommo, Octadesk & Intercom for any business that sells by chat. MCP-ready, multi-tenant, LGPD.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 789,
      "added_stars": 2721,
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
          "username": "JowaniOrantes",
          "href": "https://github.com/JowaniOrantes",
          "avatar": "https://avatars.githubusercontent.com/u/99059532"
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
      "forks": 2490,
      "added_stars": 6804,
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
      "author": "chaitanyagiri",
      "repo": "munder-difflin",
      "avatar": "https://github.com/chaitanyagiri.png",
      "repo_link": "https://github.com/chaitanyagiri/munder-difflin",
      "desc": "A local multi-agent harness that works with your existing Claude Code, Codex subscriptions, allows you to run an office of agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 998,
      "added_stars": 5866,
      "builtBy": [
        {
          "username": "chaitanyagiri",
          "href": "https://github.com/chaitanyagiri",
          "avatar": "https://avatars.githubusercontent.com/u/26071627"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "gpechieu",
          "href": "https://github.com/gpechieu",
          "avatar": "https://avatars.githubusercontent.com/u/86521613"
        },
        {
          "username": "savvaskoualis",
          "href": "https://github.com/savvaskoualis",
          "avatar": "https://avatars.githubusercontent.com/u/35274501"
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
      "forks": 378,
      "added_stars": 3943,
      "builtBy": [
        {
          "username": "TencentXiaowei",
          "href": "https://github.com/TencentXiaowei",
          "avatar": "https://avatars.githubusercontent.com/u/87162611"
        },
        {
          "username": "Ljy-0827",
          "href": "https://github.com/Ljy-0827",
          "avatar": "https://avatars.githubusercontent.com/u/84192562"
        },
        {
          "username": "iuyo5678",
          "href": "https://github.com/iuyo5678",
          "avatar": "https://avatars.githubusercontent.com/u/5351707"
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
      "author": "Companion-Inc",
      "repo": "feynman",
      "avatar": "https://github.com/Companion-Inc.png",
      "repo_link": "https://github.com/Companion-Inc/feynman",
      "desc": "The open source AI research agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1079,
      "added_stars": 1196,
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
      "author": "Gitlawb",
      "repo": "openclaude",
      "avatar": "https://github.com/Gitlawb.png",
      "repo_link": "https://github.com/Gitlawb/openclaude",
      "desc": "runs anywhere. uses anything",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9094,
      "added_stars": 2846,
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
      "author": "ever-co",
      "repo": "ever-gauzy",
      "avatar": "https://github.com/ever-co.png",
      "repo_link": "https://github.com/ever-co/ever-gauzy",
      "desc": "Ever® Gauzy™ - Open Business Management Platform (ERP/CRM/HRM/ATS/PM) - https://gauzy.co",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1151,
      "added_stars": 3636,
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
      "author": "linshenkx",
      "repo": "prompt-optimizer",
      "avatar": "https://github.com/linshenkx.png",
      "repo_link": "https://github.com/linshenkx/prompt-optimizer",
      "desc": "An AI prompt optimizer for writing better prompts and getting better AI results.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4089,
      "added_stars": 1945,
      "builtBy": [
        {
          "username": "linshenkx",
          "href": "https://github.com/linshenkx",
          "avatar": "https://avatars.githubusercontent.com/u/32978552"
        },
        {
          "username": "hexart",
          "href": "https://github.com/hexart",
          "avatar": "https://avatars.githubusercontent.com/u/5528016"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "prazjain",
          "href": "https://github.com/prazjain",
          "avatar": "https://avatars.githubusercontent.com/u/1950036"
        },
        {
          "username": "lanyuanxiaoyao",
          "href": "https://github.com/lanyuanxiaoyao",
          "avatar": "https://avatars.githubusercontent.com/u/15119304"
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
      "forks": 283,
      "added_stars": 2176,
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
      "forks": 1938,
      "added_stars": 890,
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
      "forks": 2192,
      "added_stars": 548,
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
      "title": "What was your win this week?!",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-2hcb",
      "tags": "weeklyretro",
      "reactions": 43,
      "comments": 22,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Congrats to the DEV Weekend Challenge: Dog Days Edition Winners!",
      "description": "The results are in for our DEV Weekend Challenge: Dog Days Edition! Thank you for your patience while...",
      "url": "https://dev.to/devteam/congrats-to-the-dev-weekend-challenge-dog-days-edition-winners-300g",
      "tags": "devchallenge, weekendchallenge, hackathon, programming",
      "reactions": 57,
      "comments": 21,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Dev Opportunity Radar #17: $138K Amazon Hackathon, Stanford's Code in Place X, and Dev3Pack Hackathon",
      "description": "TL;DR  Welcome back to Dev Opportunity Radar.  This is a weekly series where I share opportunities,...",
      "url": "https://dev.to/devengers/dev-opportunity-radar-17-138k-amazon-hackathon-stanfords-code-in-place-x-and-dev3pack-4imm",
      "tags": "discuss, community, opportunities, resources",
      "reactions": 41,
      "comments": 7,
      "reading_time": 12,
      "author": "hemapriya_kanagala"
    },
    {
      "title": "Serving Gemma 4 on an AMD MI300X: What $1.99 an Hour Buys",
      "description": "A step by step deployment of Gemma 4 E2B to a single AMD Instinct MI300X on AMD Developer Cloud, driven by Python MCP tools, and the throughput a 191.7 GiB card returns for its hourly rate.",
      "url": "https://dev.to/gde/serving-gemma-4-on-an-amd-mi300x-what-199-an-hour-buys-52h9",
      "tags": "amd, vllm, rocm, machinelearning",
      "reactions": 11,
      "comments": 4,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Build real-time voice applications with Gemini 3.8 Live and 3.5 Transcribe",
      "description": "Yesterday, we released new Gemini Live models in the Gemini API and Google AI Studio, expanding our...",
      "url": "https://dev.to/googleai/build-real-time-voice-applications-with-gemini-38-live-and-35-transcribe-4nb5",
      "tags": "ai, live, voice, gemini",
      "reactions": 33,
      "comments": 8,
      "reading_time": 4,
      "author": "thorwebdev"
    },
    {
      "title": "Join the Sanity Challenge: $2,500 in prizes for FIVE winners!",
      "description": "We're excited to announce our newest challenge with Sanity!  The Sanity Challenge runs September 18...",
      "url": "https://dev.to/devteam/join-the-sanity-challenge-2500-in-prizes-for-five-winners-514m",
      "tags": "sanitychallenge, devchallenge, agents, webdev",
      "reactions": 76,
      "comments": 12,
      "reading_time": 7,
      "author": "heyitsjem"
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
      "title": "How we built a desktop companion robot with Gemma 4 and Raspberry Pi",
      "description": "The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.",
      "url": "https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke",
      "tags": "raspberrypi, gemma, gemini, robotics",
      "reactions": 31,
      "comments": 4,
      "reading_time": 5,
      "author": "bebechien"
    },
    {
      "title": "Welcome Thread - v 393",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-393-5f09",
      "tags": "welcome",
      "reactions": 48,
      "comments": 232,
      "reading_time": 1,
      "author": "sloan"
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
      "title": "GMail, please let me hide delegated accounts on my iPhone",
      "description": "Gmail's delegated accounts have started showing up in the app on my iPhone, and I find this...",
      "url": "https://dev.to/peter/gmail-please-let-me-hide-delegated-accounts-on-my-iphone-30e",
      "tags": "ios, design, productivity, discuss",
      "reactions": 14,
      "comments": 2,
      "reading_time": 7,
      "author": "peter"
    },
    {
      "title": "Why AI Coding Agents Crash at 3 AM: The Happy-Path Mirage & The Forced Continuity Defect",
      "description": "Why LLMs fail in production, why \"more RLHF\" cannot fix it, and how transferring 3 AM pager-duty trauma gives autonomous coding agents real survival instincts.",
      "url": "https://dev.to/gde/why-ai-coding-agents-crash-at-3-am-the-happy-path-mirage-the-forced-continuity-defect-46pd",
      "tags": "ai, programming, architecture, productivity",
      "reactions": 2,
      "comments": 2,
      "reading_time": 10,
      "author": "randalschwartz"
    },
    {
      "title": "There are 42 r's in strawberry",
      "description": "Good news, everyone! AI is not going to replace us. AI is dumb! Just look at this answer to a trivial...",
      "url": "https://dev.to/aloisseckar/there-are-42-rs-in-strawberry-2f4e",
      "tags": "ai, discuss, showdev, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "aloisseckar"
    },
    {
      "title": "MiniMax H3 Prompt Engineering: Camera Motion, Timing, and Native Audio",
      "description": "Generating a visually attractive AI video is easy to describe, but much harder to control.  With...",
      "url": "https://dev.to/jaysean_brambila_1f12d6cc/minimax-h3-prompt-engineering-camera-motion-timing-and-native-audio-1a8g",
      "tags": "ai, productivity, video, marketing",
      "reactions": 1,
      "comments": 1,
      "reading_time": 5,
      "author": "jaysean_brambila_1f12d6cc"
    },
    {
      "title": "The Four Ways Your Word Template Silently Breaks",
      "description": "If you've ever generated a Word document from a template — a proposal, a contract, a report — you've...",
      "url": "https://dev.to/smartias/the-four-ways-your-word-template-silently-breaks-4cff",
      "tags": "webdev, javascript, opensource, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "smartias"
    },
    {
      "title": "Stop Rubber-Stamping \"LGTM\": Why Pull Requests Are Operational Contracts (Especially with AI Code)",
      "description": "Be honest: when was the last time you opened a 400-line PR, scrolled through a sea of clean-looking...",
      "url": "https://dev.to/tarikmostafa/stop-rubber-stamping-lgtm-why-pull-requests-are-operational-contracts-especially-with-ai-code-cdh",
      "tags": "ai, programming, git, productivity",
      "reactions": 5,
      "comments": 0,
      "reading_time": 2,
      "author": "tarikmostafa"
    },
    {
      "title": "Can we really ship software built entirely with AI?",
      "description": "Vibe coding is changing the economics of software development. Writing code is becoming faster,...",
      "url": "https://dev.to/fredlag/can-we-really-ship-software-built-entirely-with-ai-15gf",
      "tags": "ai, devops, programming, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "fredlag"
    },
    {
      "title": "Using the Grok API to Reduce the Effort of Keeping Up with AI",
      "description": "Long Story Short    X is useful for keeping up with AI and tech, but I find browsing the...",
      "url": "https://dev.to/tohru_yaginuma_4f041533c6/using-the-grok-api-to-reduce-the-effort-of-keeping-up-with-ai-3edk",
      "tags": "ai, api, automation, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "tohru_yaginuma_4f041533c6"
    },
    {
      "title": "Talking to an agent is not talking to yourself",
      "description": "When you record an idea to document something or to tell someone, what comes back is a draft: you...",
      "url": "https://dev.to/uridovoicenote/talking-to-an-agent-is-not-talking-to-yourself-22l0",
      "tags": "ai, productivity, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "uridovoicenote"
    },
    {
      "title": "A One-Command Pre-Flight Checklist for Developers: astro-tasks",
      "description": "Before starting work I used to open three tabs: GitHub notifications, the WakaTime dashboard, and a...",
      "url": "https://dev.to/3ni8ma/a-one-command-pre-flight-checklist-for-developers-astro-tasks-3cg6",
      "tags": "productivity, python, cli, opensource",
      "reactions": 1,
      "comments": 0,
      "reading_time": 1,
      "author": "3ni8ma"
    }
  ]
}
- Fetching feeds...
{
  "source": "reddit",
  "topic": "freelance",
  "sort": "top",
  "items": [
    {
      "title": "I cried on a client call today",
      "url": "https://www.reddit.com/r/freelance/comments/1wjvyxi/i_cried_on_a_client_call_today/",
      "permalink": "https://www.reddit.com/r/freelance/comments/1wjvyxi/i_cried_on_a_client_call_today/",
      "author": "/u/SherbertStriking2830",
      "subreddit": "freelance",
      "score": null,
      "num_comments": null,
      "selftext": "I’m a freelance web designer and developer working on a website project for a clients. I always set my conditions before starting. The thing is, I’m wearing a lot of hats on this project. I’m not only doing the design/development — I’m also doing copywriting, photo editing, product uploads, content organization, etc. Basically, I’m covering several roles that would normally be split between different people in an agency. The project itself is actually going well. But some tasks are taking much longer than expected. For example, they asked me to upload a large number of products. From their perspective, I think it sounds like “download the photo and upload it.” But for every image I’m downloading it, cropping it, resizing it, changing the format, adapting it to the store requirements, uploading it, assigning the color, etc. And there are hundreds of images. I brought this up during a call because I wanted them to understand this was taking so much time . Expecting understanding for my hard work. Instead the client responded: “You can’t complain, because when you complain it makes us feel bad as clients. I keep getting complaint after complaint from you.” That really threw me off. I had never complained before this??? Then we got into additional work. They asked me to write/upload product descriptions, which were explicitly excluded from the original proposal. When I said that would be additional work, they said: “But with what we’re already paying you, how can you charge extra?” At that point I started crying. I cry pretty easily, but I really didn’t want to cry in front of a client. I’ve already added several things that weren’t originally included — a quiz, a size calculator, a map, etc. — without charging extra because I thought they would make the final product better. So from my perspective, I’m actually very flexible with what we do. They then said “you are not being flexible”. I feel like I’ve been extremely flexible. And that’s what I can’t figure out: if the scope is clear and they know additional work costs extra, why does charging for that work become a personal issue? After I started crying they turned nicer and in the SAME conversation, they basically said: “Okay, if you’re charging for additional things, just tell us how much and we’ll pay you.” The weirdest part is that they actually told me they don’t want me to leave the project and want me to keep helping them for the next few months. Obviously, I like getting paid. But this conversation has made me question whether I want to continue working with them. After the call, I sent them an email summarizing everything and reiterating the scope and my boundaries. I also made it clear that I value the relationship and want the project to succeed. Now I’m wondering how other freelancers handle this. Have you ever had a client who understood the scope and agreed to the terms, but still made you feel guilty when you charged for additional work? How do you communicate that something is taking a lot of time without it sounding like you’re complaining? And if you were in my position, would you continue working with them — perhaps at a significantly higher rate — or take this as a sign to move on? &#32; submitted by &#32; /u/SherbertStriking2830 [link] &#32; [comments]",
      "published": "2026-09-18T17:05:22+00:00"
    },
    {
      "title": "I lose one of my incomes because of gpt-6 astra..",
      "url": "https://i.redd.it/6uqod3cg29qh1.jpeg",
      "permalink": "https://www.reddit.com/r/freelance/comments/1wjlqbs/i_lose_one_of_my_incomes_because_of_gpt6_astra/",
      "author": "/u/mostafaali-qoe",
      "subreddit": "freelance",
      "score": null,
      "num_comments": null,
      "selftext": "Hello my name is Mostafa, I&#39;m a Roblox game developer for 3 years working as a freelancer There&#39;s this dude I used to consider as my friend, he hired me to work on several projects, been working together about 4 months About 4 days ago, my school started which is about 11 hours a day, I told him already I wouldn&#39;t be that active during most week days, so I came home and was tired asshell and couldn&#39;t work or respond immediately He was asking me to create a custom UI animation but I forgot to respond so he went like this So yeah, it kinda pissed me off, I thought we were good friends/colleagues, but I guess some stuff must come to an end &#32; submitted by &#32; /u/mostafaali-qoe [link] &#32; [comments]",
      "published": "2026-09-18T09:45:19+00:00"
    }
  ]
}
```

