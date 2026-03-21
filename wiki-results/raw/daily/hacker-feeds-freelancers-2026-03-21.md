# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-03-21 06:26:33 UTC

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
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "github",
  "since": "weekly",
  "language": "javascript",
  "items": [
    {
      "author": "jarrodwatts",
      "repo": "claude-hud",
      "avatar": "https://github.com/jarrodwatts.png",
      "repo_link": "https://github.com/jarrodwatts/claude-hud",
      "desc": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 418,
      "added_stars": 4693,
      "builtBy": [
        {
          "username": "jarrodwatts",
          "href": "https://github.com/jarrodwatts",
          "avatar": "https://avatars.githubusercontent.com/u/35651410"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "melon-hub",
          "href": "https://github.com/melon-hub",
          "avatar": "https://avatars.githubusercontent.com/u/53302110"
        }
      ]
    },
    {
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 451,
      "added_stars": 4529,
      "builtBy": [
        {
          "username": "pbakaus",
          "href": "https://github.com/pbakaus",
          "avatar": "https://avatars.githubusercontent.com/u/43004"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "glacierphonk",
          "href": "https://github.com/glacierphonk",
          "avatar": "https://avatars.githubusercontent.com/u/260244336"
        },
        {
          "username": "VaishnavGunjari",
          "href": "https://github.com/VaishnavGunjari",
          "avatar": "https://avatars.githubusercontent.com/u/169933825"
        },
        {
          "username": "whchi",
          "href": "https://github.com/whchi",
          "avatar": "https://avatars.githubusercontent.com/u/11798731"
        }
      ]
    },
    {
      "author": "affaan-m",
      "repo": "everything-claude-code",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/everything-claude-code",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 11996,
      "added_stars": 15436,
      "builtBy": [
        {
          "username": "affaan-m",
          "href": "https://github.com/affaan-m",
          "avatar": "https://avatars.githubusercontent.com/u/124439313"
        },
        {
          "username": "pangerlkr",
          "href": "https://github.com/pangerlkr",
          "avatar": "https://avatars.githubusercontent.com/u/73515951"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shimo4228",
          "href": "https://github.com/shimo4228",
          "avatar": "https://avatars.githubusercontent.com/u/54734315"
        }
      ]
    },
    {
      "author": "andrewyng",
      "repo": "context-hub",
      "avatar": "https://github.com/andrewyng.png",
      "repo_link": "https://github.com/andrewyng/context-hub",
      "desc": "",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 973,
      "added_stars": 5170,
      "builtBy": [
        {
          "username": "rohitprasad15",
          "href": "https://github.com/rohitprasad15",
          "avatar": "https://avatars.githubusercontent.com/u/1796239"
        },
        {
          "username": "Ivanye2509",
          "href": "https://github.com/Ivanye2509",
          "avatar": "https://avatars.githubusercontent.com/u/91228630"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "danielhorvath-cleo",
          "href": "https://github.com/danielhorvath-cleo",
          "avatar": "https://avatars.githubusercontent.com/u/147529159"
        },
        {
          "username": "neilthomass",
          "href": "https://github.com/neilthomass",
          "avatar": "https://avatars.githubusercontent.com/u/195538237"
        }
      ]
    },
    {
      "author": "FreeTubeApp",
      "repo": "FreeTube",
      "avatar": "https://github.com/FreeTubeApp.png",
      "repo_link": "https://github.com/FreeTubeApp/FreeTube",
      "desc": "An Open Source YouTube app for privacy",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1365,
      "added_stars": 129,
      "builtBy": [
        {
          "username": "absidue",
          "href": "https://github.com/absidue",
          "avatar": "https://avatars.githubusercontent.com/u/48293849"
        },
        {
          "username": "PrestonN",
          "href": "https://github.com/PrestonN",
          "avatar": "https://avatars.githubusercontent.com/u/9736046"
        },
        {
          "username": "efb4f5ff-1298-471a-8973-3d47447115dc",
          "href": "https://github.com/efb4f5ff-1298-471a-8973-3d47447115dc",
          "avatar": "https://avatars.githubusercontent.com/u/73130443"
        },
        {
          "username": "PikachuEXE",
          "href": "https://github.com/PikachuEXE",
          "avatar": "https://avatars.githubusercontent.com/u/1018543"
        }
      ]
    },
    {
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3029,
      "added_stars": 7756,
      "builtBy": [
        {
          "username": "glittercowboy",
          "href": "https://github.com/glittercowboy",
          "avatar": "https://avatars.githubusercontent.com/u/186001655"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "trek-e",
          "href": "https://github.com/trek-e",
          "avatar": "https://avatars.githubusercontent.com/u/4738965"
        },
        {
          "username": "Tibsfox",
          "href": "https://github.com/Tibsfox",
          "avatar": "https://avatars.githubusercontent.com/u/537551"
        },
        {
          "username": "Solvely-Colin",
          "href": "https://github.com/Solvely-Colin",
          "avatar": "https://avatars.githubusercontent.com/u/211764741"
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
      "forks": 786,
      "added_stars": 578,
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
          "username": "AstralFlare-owo",
          "href": "https://github.com/AstralFlare-owo",
          "avatar": "https://avatars.githubusercontent.com/u/46892455"
        }
      ]
    },
    {
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "A Claude Code plugin that automatically captures everything Claude does during your coding sessions, compresses it with AI (using Claude's agent-sdk), and injects relevant context back into future sessions.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2815,
      "added_stars": 4204,
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
          "username": "rodboev",
          "href": "https://github.com/rodboev",
          "avatar": "https://avatars.githubusercontent.com/u/106971"
        }
      ]
    },
    {
      "author": "Wei-Shaw",
      "repo": "claude-relay-service",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/claude-relay-service",
      "desc": "CRS-自建Claude Code镜像，一站式开源中转服务，让 Claude、OpenAI、Gemini、Droid 订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1514,
      "added_stars": 460,
      "builtBy": [
        {
          "username": "Wei-Shaw",
          "href": "https://github.com/Wei-Shaw",
          "avatar": "https://avatars.githubusercontent.com/u/26101719"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "f3n9",
          "href": "https://github.com/f3n9",
          "avatar": "https://avatars.githubusercontent.com/u/663221"
        },
        {
          "username": "kevinconan",
          "href": "https://github.com/kevinconan",
          "avatar": "https://avatars.githubusercontent.com/u/3772409"
        }
      ]
    },
    {
      "author": "ComposioHQ",
      "repo": "awesome-claude-plugins",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/awesome-claude-plugins",
      "desc": "A curated list of Plugins that let you extend Claude Code with custom commands, agents, hooks, and MCP servers through the plugin system.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 227,
      "added_stars": 64,
      "builtBy": [
        {
          "username": "Prat011",
          "href": "https://github.com/Prat011",
          "avatar": "https://avatars.githubusercontent.com/u/67639393"
        },
        {
          "username": "sujayjayjay",
          "href": "https://github.com/sujayjayjay",
          "avatar": "https://avatars.githubusercontent.com/u/84703335"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mksglu",
          "href": "https://github.com/mksglu",
          "avatar": "https://avatars.githubusercontent.com/u/6067714"
        },
        {
          "username": "SebConejo",
          "href": "https://github.com/SebConejo",
          "avatar": "https://avatars.githubusercontent.com/u/11723962"
        }
      ]
    },
    {
      "author": "justlovemaki",
      "repo": "AIClient-2-API",
      "avatar": "https://github.com/justlovemaki.png",
      "repo_link": "https://github.com/justlovemaki/AIClient-2-API",
      "desc": "Simulates Gemini CLI, Antigravity, Qwen Code, and Kiro client requests, compatible with the OpenAI API. It supports thousands of Gemini model requests per day and offers free use of the built-in Claude model in Kiro. Easily connect to any client via the API, making AI development more efficient!",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 901,
      "added_stars": 766,
      "builtBy": [
        {
          "username": "justlikemaki",
          "href": "https://github.com/justlikemaki",
          "avatar": "https://avatars.githubusercontent.com/u/12859173"
        },
        {
          "username": "justlovemaki",
          "href": "https://github.com/justlovemaki",
          "avatar": "https://avatars.githubusercontent.com/u/22851716"
        },
        {
          "username": "leonaii",
          "href": "https://github.com/leonaii",
          "avatar": "https://avatars.githubusercontent.com/u/7904076"
        },
        {
          "username": "MicoMiOvO",
          "href": "https://github.com/MicoMiOvO",
          "avatar": "https://avatars.githubusercontent.com/u/119792728"
        },
        {
          "username": "tickernelz",
          "href": "https://github.com/tickernelz",
          "avatar": "https://avatars.githubusercontent.com/u/10543415"
        }
      ]
    },
    {
      "author": "tabler",
      "repo": "tabler-icons",
      "avatar": "https://github.com/tabler.png",
      "repo_link": "https://github.com/tabler/tabler-icons",
      "desc": "A set of over 5900 free MIT-licensed high-quality SVG icons for you to use in your web projects.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1100,
      "added_stars": 134,
      "builtBy": [
        {
          "username": "codecalm",
          "href": "https://github.com/codecalm",
          "avatar": "https://avatars.githubusercontent.com/u/1282324"
        },
        {
          "username": "FreexD",
          "href": "https://github.com/FreexD",
          "avatar": "https://avatars.githubusercontent.com/u/7117869"
        },
        {
          "username": "0xflotus",
          "href": "https://github.com/0xflotus",
          "avatar": "https://avatars.githubusercontent.com/u/26602940"
        },
        {
          "username": "BG-Software-BG",
          "href": "https://github.com/BG-Software-BG",
          "avatar": "https://avatars.githubusercontent.com/u/73077398"
        },
        {
          "username": "mauriciabad",
          "href": "https://github.com/mauriciabad",
          "avatar": "https://avatars.githubusercontent.com/u/12821361"
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
      "forks": 2252,
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
          "username": "Jiliac",
          "href": "https://github.com/Jiliac",
          "avatar": "https://avatars.githubusercontent.com/u/5956866"
        },
        {
          "username": "bensabic",
          "href": "https://github.com/bensabic",
          "avatar": "https://avatars.githubusercontent.com/u/27636870"
        },
        {
          "username": "Ray0907",
          "href": "https://github.com/Ray0907",
          "avatar": "https://avatars.githubusercontent.com/u/29456968"
        }
      ]
    },
    {
      "author": "songquanpeng",
      "repo": "one-api",
      "avatar": "https://github.com/songquanpeng.png",
      "repo_link": "https://github.com/songquanpeng/one-api",
      "desc": "LLM API 管理 & 分发系统，支持 OpenAI、Azure、Anthropic Claude、Google Gemini、DeepSeek、字节豆包、ChatGLM、文心一言、讯飞星火、通义千问、360 智脑、腾讯混元等主流模型，统一 API 适配，可用于 key 管理与二次分发。单可执行文件，提供 Docker 镜像，一键部署，开箱即用。LLM API management & key redistribution system, unifying multiple providers under a single API. Single binary, Docker-ready, with an English UI.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5875,
      "added_stars": 356,
      "builtBy": [
        {
          "username": "songquanpeng",
          "href": "https://github.com/songquanpeng",
          "avatar": "https://avatars.githubusercontent.com/u/39998050"
        },
        {
          "username": "mrhaoji",
          "href": "https://github.com/mrhaoji",
          "avatar": "https://avatars.githubusercontent.com/u/483419"
        },
        {
          "username": "Laisky",
          "href": "https://github.com/Laisky",
          "avatar": "https://avatars.githubusercontent.com/u/4532436"
        },
        {
          "username": "igophper",
          "href": "https://github.com/igophper",
          "avatar": "https://avatars.githubusercontent.com/u/34326532"
        },
        {
          "username": "quzard",
          "href": "https://github.com/quzard",
          "avatar": "https://avatars.githubusercontent.com/u/30899719"
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
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "rbanffy",
      "descendants": 273,
      "id": 47460525,
      "kids": [
        47462013,
        47463880,
        47461304,
        47460841,
        47461834,
        47461565,
        47461578,
        47463429,
        47461462,
        47462787,
        47461042,
        47463916,
        47461326,
        47462955,
        47463768,
        47461008,
        47462243,
        47461613,
        47463249,
        47462016,
        47463524,
        47461348,
        47463007,
        47463470,
        47463743,
        47463753,
        47462299,
        47461707,
        47461334,
        47462400,
        47461500,
        47461851,
        47463814,
        47461846,
        47464077,
        47461597,
        47461314,
        47463198,
        47464053,
        47461781,
        47462465,
        47461212,
        47461262,
        47462066,
        47461679,
        47461996,
        47461475,
        47461944,
        47461340,
        47463497,
        47461422,
        47460967,
        47460886,
        47463483,
        47463835,
        47461499,
        47461213,
        47462900,
        47462424,
        47463399,
        47463979,
        47461888,
        47462908,
        47461947,
        47463897,
        47462583,
        47462289,
        47461217,
        47462442,
        47463509,
        47462612,
        47463915,
        47463913,
        47461418,
        47461554,
        47462117,
        47462890
      ],
      "score": 629,
      "time": 1774040632,
      "title": "OpenCode – Open source AI coding agent",
      "type": "story",
      "url": "https://opencode.ai/"
    },
    {
      "by": "matt_d",
      "descendants": 4,
      "id": 47419391,
      "kids": [
        47464472,
        47464418
      ],
      "score": 37,
      "time": 1773787512,
      "title": "Mamba-3",
      "type": "story",
      "url": "https://www.together.ai/blog/mamba-3"
    },
    {
      "by": "surprisetalk",
      "descendants": 25,
      "id": 47455138,
      "kids": [
        47464191,
        47463891,
        47464286,
        47463638,
        47464243,
        47464331,
        47464292,
        47464192,
        47463681,
        47463812,
        47463745,
        47463925
      ],
      "score": 55,
      "text": "<a href=\"https:&#x2F;&#x2F;en.wiktionary.org&#x2F;wiki&#x2F;molly-guard\" rel=\"nofollow\">https:&#x2F;&#x2F;en.wiktionary.org&#x2F;wiki&#x2F;molly-guard</a>",
      "time": 1774017221,
      "title": "Molly Guard",
      "type": "story",
      "url": "https://bookofjoe2.blogspot.com/2026/02/molly-guard.html"
    },
    {
      "by": "MrDresden",
      "descendants": 420,
      "id": 47453942,
      "kids": [
        47460122,
        47455098,
        47464315,
        47454412,
        47455086,
        47457473,
        47458273,
        47461915,
        47461364,
        47457617,
        47457880,
        47463987,
        47459304,
        47460221,
        47455433,
        47461864,
        47457751,
        47458066,
        47458977,
        47458587,
        47460427,
        47454543,
        47459849,
        47462477,
        47460431,
        47458701,
        47458516,
        47462972,
        47459763,
        47459534,
        47458905,
        47458000,
        47457760,
        47456331,
        47460483,
        47462898,
        47461117,
        47458282,
        47459178,
        47459502,
        47454550,
        47459210,
        47458874,
        47454819,
        47458627,
        47454717,
        47459663
      ],
      "score": 531,
      "time": 1774011716,
      "title": "France's aircraft carrier located in real time by Le Monde through fitness app",
      "type": "story",
      "url": "https://www.lemonde.fr/en/international/article/2026/03/20/stravaleaks-france-s-aircraft-carrier-located-in-real-time-by-le-monde-through-fitness-app_6751640_4.html"
    },
    {
      "by": "zahlekhan",
      "descendants": 91,
      "id": 47461094,
      "kids": [
        47462536,
        47461242,
        47463605,
        47461566,
        47464358,
        47461919,
        47464380,
        47461585,
        47464407,
        47464074,
        47463786,
        47462862,
        47462654,
        47462440,
        47463693,
        47462638,
        47462408,
        47463250,
        47462405,
        47461524,
        47462742,
        47462838,
        47462816,
        47461630,
        47462457,
        47463598,
        47462245,
        47462341,
        47462099,
        47463521,
        47462722,
        47462827,
        47462452,
        47463369,
        47462039,
        47462976
      ],
      "score": 157,
      "time": 1774043286,
      "title": "We rewrote our Rust WASM parser in TypeScript and it got faster",
      "type": "story",
      "url": "https://www.openui.com/blog/rust-wasm-parser"
    },
    {
      "by": "cainxinth",
      "descendants": 151,
      "id": 47460452,
      "kids": [
        47460779,
        47463530,
        47461243,
        47464450,
        47464463,
        47464459,
        47463905,
        47461323,
        47463956,
        47460885,
        47461573,
        47464056,
        47460799,
        47463792,
        47463728,
        47461121,
        47461355,
        47463859,
        47460964,
        47461926,
        47461800,
        47462659,
        47460948,
        47463474,
        47460920,
        47463525,
        47461263,
        47461487,
        47460768,
        47461200,
        47462683,
        47461502,
        47463111,
        47460974,
        47460745
      ],
      "score": 206,
      "time": 1774040097,
      "title": "A Japanese glossary of chopsticks faux pas",
      "type": "story",
      "url": "https://www.nippon.com/en/japan-data/h01362/"
    },
    {
      "by": "bjornroberg",
      "descendants": 28,
      "id": 47461378,
      "kids": [
        47462254,
        47462132,
        47462521
      ],
      "score": 165,
      "time": 1774044697,
      "title": "Ghostling",
      "type": "story",
      "url": "https://github.com/ghostty-org/ghostling"
    },
    {
      "by": "notcodingtoday",
      "descendants": 1,
      "id": 47435081,
      "kids": [
        47435082
      ],
      "score": 5,
      "time": 1773895773,
      "title": "Fujifilm X RAW STUDIO webapp clone",
      "type": "story",
      "url": "https://github.com/eggricesoy/filmkit"
    },
    {
      "by": "teleforce",
      "descendants": 8,
      "id": 47462483,
      "kids": [
        47462979,
        47462937
      ],
      "score": 60,
      "time": 1774051042,
      "title": "Linux Applications Programming by Example: The Fundamental APIs (2nd Edition)",
      "type": "story",
      "url": "https://github.com/arnoldrobbins/LinuxByExample-2e"
    },
    {
      "by": "vinhnx",
      "descendants": 0,
      "id": 47463547,
      "score": 21,
      "time": 1774061233,
      "title": "FFmpeg 101 (2024)",
      "type": "story",
      "url": "https://blogs.igalia.com/llepage/ffmpeg-101/"
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
      "title": "EnshittifAIcation",
      "url": "https://it-notes.dragas.net/2026/03/20/enshittifaication/",
      "score": 91,
      "comments": 22,
      "tags": [
        "vibecoding"
      ],
      "id": "cvt7fd"
    },
    {
      "title": "I'm OK being left behind, thanks",
      "url": "https://shkspr.mobi/blog/2026/03/im-ok-being-left-behind-thanks/",
      "score": 74,
      "comments": 27,
      "tags": [
        "practices",
        "vibecoding"
      ],
      "id": "ghtnpx"
    },
    {
      "title": "Lobsters Interview with Internet_Jannitor",
      "url": "https://alexalejandre.com/programming/interview-with-john-earnest/",
      "score": 39,
      "comments": 6,
      "tags": [
        "apl",
        "interview",
        "person"
      ],
      "id": "bekb7j"
    },
    {
      "title": "Related UI elements should not appear unrelated",
      "url": "https://rakhim.exotext.com/related-ui-elements-should-not-appear-unrelated",
      "score": 47,
      "comments": 7,
      "tags": [
        "design"
      ],
      "id": "8iyfng"
    },
    {
      "title": "What we heard about Rust's challenges, and how we can address them",
      "url": "https://blog.rust-lang.org/2026/03/20/rust-challenges.md/",
      "score": 28,
      "comments": 25,
      "tags": [
        "rust"
      ],
      "id": "eewvj8"
    },
    {
      "title": "Adding Live Reload to a Static Site Generator Written in Go",
      "url": "https://jon.chrt.dev/2026/03/20/adding-live-reload-to-a-static-site-generator-written-in-go.html",
      "score": 13,
      "comments": 8,
      "tags": [
        "go"
      ],
      "id": "ldglpx"
    },
    {
      "title": "What creative technical outlets of yours have been ruined by generative AI?",
      "url": "",
      "score": 14,
      "comments": 1,
      "tags": [
        "ask",
        "vibecoding"
      ],
      "id": "vvt1fh"
    },
    {
      "title": "Unix philosophy is dead! Long live... something else?",
      "url": "https://sdomi.pl/weblog/27-manifesto-of-a-burnt-out-hacker/",
      "score": 6,
      "comments": 1,
      "tags": [
        "philosophy"
      ],
      "id": "dttagp"
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
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4988,
      "added_stars": 32574,
      "builtBy": [
        {
          "username": "666ghj",
          "href": "https://github.com/666ghj",
          "avatar": "https://avatars.githubusercontent.com/u/110395318"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skills and subagents, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3892,
      "added_stars": 12170,
      "builtBy": [
        {
          "username": "MagicCube",
          "href": "https://github.com/MagicCube",
          "avatar": "https://avatars.githubusercontent.com/u/1003147"
        },
        {
          "username": "WillemJiang",
          "href": "https://github.com/WillemJiang",
          "avatar": "https://avatars.githubusercontent.com/u/219644"
        },
        {
          "username": "hetaoBackend",
          "href": "https://github.com/hetaoBackend",
          "avatar": "https://avatars.githubusercontent.com/u/45447813"
        },
        {
          "username": "henry-byted",
          "href": "https://github.com/henry-byted",
          "avatar": "https://avatars.githubusercontent.com/u/209858577"
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
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1167,
      "added_stars": 13725,
      "builtBy": [
        {
          "username": "qin-ctx",
          "href": "https://github.com/qin-ctx",
          "avatar": "https://avatars.githubusercontent.com/u/234610432"
        },
        {
          "username": "zhoujh01",
          "href": "https://github.com/zhoujh01",
          "avatar": "https://avatars.githubusercontent.com/u/242402223"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "MaojiaSheng",
          "href": "https://github.com/MaojiaSheng",
          "avatar": "https://avatars.githubusercontent.com/u/211460083"
        },
        {
          "username": "ZaynJarvis",
          "href": "https://github.com/ZaynJarvis",
          "avatar": "https://avatars.githubusercontent.com/u/31875147"
        }
      ]
    },
    {
      "author": "huggingface",
      "repo": "skills",
      "avatar": "https://github.com/huggingface.png",
      "repo_link": "https://github.com/huggingface/skills",
      "desc": "Give your agents the power of the Hugging Face ecosystem",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 576,
      "added_stars": 8233,
      "builtBy": [
        {
          "username": "burtenshaw",
          "href": "https://github.com/burtenshaw",
          "avatar": "https://avatars.githubusercontent.com/u/19620375"
        },
        {
          "username": "evalstate",
          "href": "https://github.com/evalstate",
          "avatar": "https://avatars.githubusercontent.com/u/1936278"
        },
        {
          "username": "hanouticelina",
          "href": "https://github.com/hanouticelina",
          "avatar": "https://avatars.githubusercontent.com/u/36770234"
        },
        {
          "username": "NielsRogge",
          "href": "https://github.com/NielsRogge",
          "avatar": "https://avatars.githubusercontent.com/u/48327001"
        },
        {
          "username": "abidlabs",
          "href": "https://github.com/abidlabs",
          "avatar": "https://avatars.githubusercontent.com/u/1778297"
        }
      ]
    },
    {
      "author": "alibaba",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/alibaba.png",
      "repo_link": "https://github.com/alibaba/OpenSandbox",
      "desc": "OpenSandbox is a general-purpose sandbox platform for AI applications, offering multi-language SDKs, unified sandbox APIs, and Docker/Kubernetes runtimes for scenarios like Coding Agents, GUI Agents, Agent Evaluation, AI Code Execution, and RL Training.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 675,
      "added_stars": 7785,
      "builtBy": [
        {
          "username": "Pangjiping",
          "href": "https://github.com/Pangjiping",
          "avatar": "https://avatars.githubusercontent.com/u/62273713"
        },
        {
          "username": "ninan-nn",
          "href": "https://github.com/ninan-nn",
          "avatar": "https://avatars.githubusercontent.com/u/249928781"
        },
        {
          "username": "hittyt",
          "href": "https://github.com/hittyt",
          "avatar": "https://avatars.githubusercontent.com/u/1870207"
        },
        {
          "username": "Spground",
          "href": "https://github.com/Spground",
          "avatar": "https://avatars.githubusercontent.com/u/10492823"
        },
        {
          "username": "jwx0925",
          "href": "https://github.com/jwx0925",
          "avatar": "https://avatars.githubusercontent.com/u/1539927"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3104,
      "added_stars": 7612,
      "builtBy": [
        {
          "username": "potassiummmm",
          "href": "https://github.com/potassiummmm",
          "avatar": "https://avatars.githubusercontent.com/u/54800242"
        },
        {
          "username": "tsong-ms",
          "href": "https://github.com/tsong-ms",
          "avatar": "https://avatars.githubusercontent.com/u/84831885"
        },
        {
          "username": "younesbelkada",
          "href": "https://github.com/younesbelkada",
          "avatar": "https://avatars.githubusercontent.com/u/49240599"
        },
        {
          "username": "sd983527",
          "href": "https://github.com/sd983527",
          "avatar": "https://avatars.githubusercontent.com/u/59006636"
        },
        {
          "username": "XsquirrelC",
          "href": "https://github.com/XsquirrelC",
          "avatar": "https://avatars.githubusercontent.com/u/178687198"
        }
      ]
    },
    {
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 825,
      "added_stars": 4464,
      "builtBy": [
        {
          "username": "teng-lin",
          "href": "https://github.com/teng-lin",
          "avatar": "https://avatars.githubusercontent.com/u/737447"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "furkankoykiran",
          "href": "https://github.com/furkankoykiran",
          "avatar": "https://avatars.githubusercontent.com/u/60299878"
        },
        {
          "username": "welshofer",
          "href": "https://github.com/welshofer",
          "avatar": "https://avatars.githubusercontent.com/u/33588582"
        }
      ]
    },
    {
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "Agentic IM Chatbot infrastructure that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1789,
      "added_stars": 9305,
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
          "username": "anka-afk",
          "href": "https://github.com/anka-afk",
          "avatar": "https://avatars.githubusercontent.com/u/110004162"
        },
        {
          "username": "LIghtJUNction",
          "href": "https://github.com/LIghtJUNction",
          "avatar": "https://avatars.githubusercontent.com/u/106986785"
        }
      ]
    },
    {
      "author": "fishaudio",
      "repo": "fish-speech",
      "avatar": "https://github.com/fishaudio.png",
      "repo_link": "https://github.com/fishaudio/fish-speech",
      "desc": "SOTA Open Source TTS",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2389,
      "added_stars": 3623,
      "builtBy": [
        {
          "username": "leng-yue",
          "href": "https://github.com/leng-yue",
          "avatar": "https://avatars.githubusercontent.com/u/25119060"
        },
        {
          "username": "AnyaCoder",
          "href": "https://github.com/AnyaCoder",
          "avatar": "https://avatars.githubusercontent.com/u/122108331"
        },
        {
          "username": "PoTaTo-Mika",
          "href": "https://github.com/PoTaTo-Mika",
          "avatar": "https://avatars.githubusercontent.com/u/148920650"
        }
      ]
    },
    {
      "author": "langchain-ai",
      "repo": "open-swe",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/open-swe",
      "desc": "An Open-Source Asynchronous Coding Agent",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 926,
      "added_stars": 2253,
      "builtBy": [
        {
          "username": "bracesproul",
          "href": "https://github.com/bracesproul",
          "avatar": "https://avatars.githubusercontent.com/u/46789226"
        },
        {
          "username": "aran-yogesh",
          "href": "https://github.com/aran-yogesh",
          "avatar": "https://avatars.githubusercontent.com/u/63587953"
        },
        {
          "username": "starmorph",
          "href": "https://github.com/starmorph",
          "avatar": "https://avatars.githubusercontent.com/u/121908331"
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
      "forks": 1642,
      "added_stars": 7573,
      "builtBy": [
        {
          "username": "p-e-w",
          "href": "https://github.com/p-e-w",
          "avatar": "https://avatars.githubusercontent.com/u/2702526"
        },
        {
          "username": "spikymoth",
          "href": "https://github.com/spikymoth",
          "avatar": "https://avatars.githubusercontent.com/u/133602907"
        },
        {
          "username": "anrp",
          "href": "https://github.com/anrp",
          "avatar": "https://avatars.githubusercontent.com/u/1325515"
        },
        {
          "username": "red40maxxer",
          "href": "https://github.com/red40maxxer",
          "avatar": "https://avatars.githubusercontent.com/u/113548315"
        },
        {
          "username": "kldzj",
          "href": "https://github.com/kldzj",
          "avatar": "https://avatars.githubusercontent.com/u/7687617"
        }
      ]
    },
    {
      "author": "ZhuLinsen",
      "repo": "daily_stock_analysis",
      "avatar": "https://github.com/ZhuLinsen.png",
      "repo_link": "https://github.com/ZhuLinsen/daily_stock_analysis",
      "desc": "LLM驱动的 A/H/美股智能分析器：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送，零成本定时运行，纯白嫖. LLM-powered stock analysis system for A/H/US markets.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 24683,
      "added_stars": 11725,
      "builtBy": [
        {
          "username": "ZhuLinsen",
          "href": "https://github.com/ZhuLinsen",
          "avatar": "https://avatars.githubusercontent.com/u/42829555"
        },
        {
          "username": "massif-01",
          "href": "https://github.com/massif-01",
          "avatar": "https://avatars.githubusercontent.com/u/176381099"
        },
        {
          "username": "freesme",
          "href": "https://github.com/freesme",
          "avatar": "https://avatars.githubusercontent.com/u/56824280"
        },
        {
          "username": "adminlove520",
          "href": "https://github.com/adminlove520",
          "avatar": "https://avatars.githubusercontent.com/u/32920883"
        },
        {
          "username": "birdxs",
          "href": "https://github.com/birdxs",
          "avatar": "https://avatars.githubusercontent.com/u/36181736"
        }
      ]
    },
    {
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 463,
      "added_stars": 3723,
      "builtBy": [
        {
          "username": "Jeffallan",
          "href": "https://github.com/Jeffallan",
          "avatar": "https://avatars.githubusercontent.com/u/23423962"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "liyin2015",
          "href": "https://github.com/liyin2015",
          "avatar": "https://avatars.githubusercontent.com/u/14322677"
        },
        {
          "username": "salmanmkc",
          "href": "https://github.com/salmanmkc",
          "avatar": "https://avatars.githubusercontent.com/u/32169182"
        },
        {
          "username": "thomassamoul",
          "href": "https://github.com/thomassamoul",
          "avatar": "https://avatars.githubusercontent.com/u/50757446"
        }
      ]
    },
    {
      "author": "virattt",
      "repo": "ai-hedge-fund",
      "avatar": "https://github.com/virattt.png",
      "repo_link": "https://github.com/virattt/ai-hedge-fund",
      "desc": "An AI Hedge Fund Team",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8600,
      "added_stars": 3766,
      "builtBy": [
        {
          "username": "virattt",
          "href": "https://github.com/virattt",
          "avatar": "https://avatars.githubusercontent.com/u/901795"
        },
        {
          "username": "arsaboo",
          "href": "https://github.com/arsaboo",
          "avatar": "https://avatars.githubusercontent.com/u/18319734"
        },
        {
          "username": "KittatamSaisaard",
          "href": "https://github.com/KittatamSaisaard",
          "avatar": "https://avatars.githubusercontent.com/u/50354903"
        },
        {
          "username": "jsemldonado",
          "href": "https://github.com/jsemldonado",
          "avatar": "https://avatars.githubusercontent.com/u/172995042"
        },
        {
          "username": "ak4631",
          "href": "https://github.com/ak4631",
          "avatar": "https://avatars.githubusercontent.com/u/132299371"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "claude-code-security-review",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code-security-review",
      "desc": "An AI-powered security review GitHub Action using Claude to analyze code changes for security vulnerabilities.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 325,
      "added_stars": 897,
      "builtBy": [
        {
          "username": "ddworken",
          "href": "https://github.com/ddworken",
          "avatar": "https://avatars.githubusercontent.com/u/5304541"
        },
        {
          "username": "GrahamCampbell",
          "href": "https://github.com/GrahamCampbell",
          "avatar": "https://avatars.githubusercontent.com/u/2829600"
        },
        {
          "username": "Eduard-Voiculescu",
          "href": "https://github.com/Eduard-Voiculescu",
          "avatar": "https://avatars.githubusercontent.com/u/26581515"
        }
      ]
    },
    {
      "author": "langchain-ai",
      "repo": "deepagents",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/deepagents",
      "desc": "Agent harness built with LangChain and LangGraph. Equipped with a planning tool, a filesystem backend, and the ability to spawn subagents - well-equipped to handle complex agentic tasks.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2325,
      "added_stars": 6515,
      "builtBy": [
        {
          "username": "mdrxy",
          "href": "https://github.com/mdrxy",
          "avatar": "https://avatars.githubusercontent.com/u/61371264"
        },
        {
          "username": "eyurtsev",
          "href": "https://github.com/eyurtsev",
          "avatar": "https://avatars.githubusercontent.com/u/3205522"
        },
        {
          "username": "vtrivedy",
          "href": "https://github.com/vtrivedy",
          "avatar": "https://avatars.githubusercontent.com/u/28938224"
        },
        {
          "username": "hwchase17",
          "href": "https://github.com/hwchase17",
          "avatar": "https://avatars.githubusercontent.com/u/11986836"
        },
        {
          "username": "sydney-runkle",
          "href": "https://github.com/sydney-runkle",
          "avatar": "https://avatars.githubusercontent.com/u/54324534"
        }
      ]
    },
    {
      "author": "666ghj",
      "repo": "BettaFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/BettaFish",
      "desc": "微舆：人人可用的多Agent舆情分析助手，打破信息茧房，还原舆情原貌，预测未来走向，辅助决策！从0实现，不依赖任何框架。",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7395,
      "added_stars": 4144,
      "builtBy": [
        {
          "username": "666ghj",
          "href": "https://github.com/666ghj",
          "avatar": "https://avatars.githubusercontent.com/u/110395318"
        },
        {
          "username": "MaYiding",
          "href": "https://github.com/MaYiding",
          "avatar": "https://avatars.githubusercontent.com/u/77890939"
        },
        {
          "username": "DoiiarX",
          "href": "https://github.com/DoiiarX",
          "avatar": "https://avatars.githubusercontent.com/u/25550075"
        },
        {
          "username": "ghmark675",
          "href": "https://github.com/ghmark675",
          "avatar": "https://avatars.githubusercontent.com/u/188834327"
        },
        {
          "username": "Qst137",
          "href": "https://github.com/Qst137",
          "avatar": "https://avatars.githubusercontent.com/u/139198328"
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
      "forks": 44651,
      "added_stars": 14280,
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
          "username": "pawelborkar",
          "href": "https://github.com/pawelborkar",
          "avatar": "https://avatars.githubusercontent.com/u/36134699"
        },
        {
          "username": "jbrooksuk",
          "href": "https://github.com/jbrooksuk",
          "avatar": "https://avatars.githubusercontent.com/u/246103"
        },
        {
          "username": "marekdano",
          "href": "https://github.com/marekdano",
          "avatar": "https://avatars.githubusercontent.com/u/1914165"
        }
      ]
    },
    {
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Unified web UI for training and running open models like Qwen, DeepSeek, gpt-oss and Gemma locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4805,
      "added_stars": 4717,
      "builtBy": [
        {
          "username": "danielhanchen",
          "href": "https://github.com/danielhanchen",
          "avatar": "https://avatars.githubusercontent.com/u/23090290"
        },
        {
          "username": "rolandtannous",
          "href": "https://github.com/rolandtannous",
          "avatar": "https://avatars.githubusercontent.com/u/115670425"
        },
        {
          "username": "shimmyshimmer",
          "href": "https://github.com/shimmyshimmer",
          "avatar": "https://avatars.githubusercontent.com/u/107991372"
        },
        {
          "username": "Datta0",
          "href": "https://github.com/Datta0",
          "avatar": "https://avatars.githubusercontent.com/u/39181234"
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
      "author": "koala73",
      "repo": "worldmonitor",
      "avatar": "https://github.com/koala73.png",
      "repo_link": "https://github.com/koala73/worldmonitor",
      "desc": "Real-time global intelligence dashboard — AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6836,
      "added_stars": 33076,
      "builtBy": [
        {
          "username": "koala73",
          "href": "https://github.com/koala73",
          "avatar": "https://avatars.githubusercontent.com/u/996596"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "SebastienMelki",
          "href": "https://github.com/SebastienMelki",
          "avatar": "https://avatars.githubusercontent.com/u/5787993"
        },
        {
          "username": "NewCoder3294",
          "href": "https://github.com/NewCoder3294",
          "avatar": "https://avatars.githubusercontent.com/u/168879994"
        },
        {
          "username": "danielimad",
          "href": "https://github.com/danielimad",
          "avatar": "https://avatars.githubusercontent.com/u/72716286"
        }
      ]
    },
    {
      "author": "moeru-ai",
      "repo": "airi",
      "avatar": "https://github.com/moeru-ai.png",
      "repo_link": "https://github.com/moeru-ai/airi",
      "desc": "💖🧸 Self hosted, you-owned Grok Companion, a container of souls of waifu, cyber livings to bring them into our worlds, wishing to achieve Neuro-sama's altitude. Capable of realtime voice chat, Minecraft, Factorio playing. Web / macOS / Windows supported.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3467,
      "added_stars": 17554,
      "builtBy": [
        {
          "username": "nekomeowww",
          "href": "https://github.com/nekomeowww",
          "avatar": "https://avatars.githubusercontent.com/u/11081491"
        },
        {
          "username": "shinohara-rin",
          "href": "https://github.com/shinohara-rin",
          "avatar": "https://avatars.githubusercontent.com/u/25588514"
        },
        {
          "username": "luoling8192",
          "href": "https://github.com/luoling8192",
          "avatar": "https://avatars.githubusercontent.com/u/44741987"
        },
        {
          "username": "LemonNekoGH",
          "href": "https://github.com/LemonNekoGH",
          "avatar": "https://avatars.githubusercontent.com/u/17664845"
        },
        {
          "username": "sumimakito",
          "href": "https://github.com/sumimakito",
          "avatar": "https://avatars.githubusercontent.com/u/5277268"
        }
      ]
    },
    {
      "author": "shareAI-lab",
      "repo": "learn-claude-code",
      "avatar": "https://github.com/shareAI-lab.png",
      "repo_link": "https://github.com/shareAI-lab/learn-claude-code",
      "desc": "Bash is all you need - A nano claude code–like 「agent harness」, built from 0 to 1",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5603,
      "added_stars": 17374,
      "builtBy": [
        {
          "username": "CrazyBoyM",
          "href": "https://github.com/CrazyBoyM",
          "avatar": "https://avatars.githubusercontent.com/u/35400185"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "bansalkanav",
          "href": "https://github.com/bansalkanav",
          "avatar": "https://avatars.githubusercontent.com/u/13186335"
        },
        {
          "username": "Octane0411",
          "href": "https://github.com/Octane0411",
          "avatar": "https://avatars.githubusercontent.com/u/88922959"
        },
        {
          "username": "synix",
          "href": "https://github.com/synix",
          "avatar": "https://avatars.githubusercontent.com/u/3198234"
        }
      ]
    },
    {
      "author": "promptfoo",
      "repo": "promptfoo",
      "avatar": "https://github.com/promptfoo.png",
      "repo_link": "https://github.com/promptfoo/promptfoo",
      "desc": "Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI. Compare performance of GPT, Claude, Gemini, Llama, and more. Simple declarative configs with command line and CI/CD integration.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1536,
      "added_stars": 7270,
      "builtBy": [
        {
          "username": "typpo",
          "href": "https://github.com/typpo",
          "avatar": "https://avatars.githubusercontent.com/u/310310"
        },
        {
          "username": "mldangelo",
          "href": "https://github.com/mldangelo",
          "avatar": "https://avatars.githubusercontent.com/u/7235481"
        },
        {
          "username": "sklein12",
          "href": "https://github.com/sklein12",
          "avatar": "https://avatars.githubusercontent.com/u/1080611"
        }
      ]
    },
    {
      "author": "superset-sh",
      "repo": "superset",
      "avatar": "https://github.com/superset-sh.png",
      "repo_link": "https://github.com/superset-sh/superset",
      "desc": "IDE for the AI Agents Era - Run an army of Claude Code, Codex, etc. on your machine",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 545,
      "added_stars": 5702,
      "builtBy": [
        {
          "username": "Kitenite",
          "href": "https://github.com/Kitenite",
          "avatar": "https://avatars.githubusercontent.com/u/31864905"
        },
        {
          "username": "saddlepaddle",
          "href": "https://github.com/saddlepaddle",
          "avatar": "https://avatars.githubusercontent.com/u/14907857"
        },
        {
          "username": "AviPeltz",
          "href": "https://github.com/AviPeltz",
          "avatar": "https://avatars.githubusercontent.com/u/11849162"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "andreasasprou",
          "href": "https://github.com/andreasasprou",
          "avatar": "https://avatars.githubusercontent.com/u/8077469"
        }
      ]
    },
    {
      "author": "badlogic",
      "repo": "pi-mono",
      "avatar": "https://github.com/badlogic.png",
      "repo_link": "https://github.com/badlogic/pi-mono",
      "desc": "AI agent toolkit: coding agent CLI, unified LLM API, TUI & web UI libraries, Slack bot, vLLM pods",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2797,
      "added_stars": 12244,
      "builtBy": [
        {
          "username": "badlogic",
          "href": "https://github.com/badlogic",
          "avatar": "https://avatars.githubusercontent.com/u/514052"
        },
        {
          "username": "hjanuschka",
          "href": "https://github.com/hjanuschka",
          "avatar": "https://avatars.githubusercontent.com/u/2891702"
        },
        {
          "username": "markusylisiurunen",
          "href": "https://github.com/markusylisiurunen",
          "avatar": "https://avatars.githubusercontent.com/u/8409947"
        },
        {
          "username": "aliou",
          "href": "https://github.com/aliou",
          "avatar": "https://avatars.githubusercontent.com/u/980367"
        }
      ]
    },
    {
      "author": "blackboardsh",
      "repo": "electrobun",
      "avatar": "https://github.com/blackboardsh.png",
      "repo_link": "https://github.com/blackboardsh/electrobun",
      "desc": "Build ultra fast, tiny, and cross-platform desktop apps with Typescript.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 242,
      "added_stars": 4574,
      "builtBy": [
        {
          "username": "YoavCodes",
          "href": "https://github.com/YoavCodes",
          "avatar": "https://avatars.githubusercontent.com/u/75102186"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "NullDev",
          "href": "https://github.com/NullDev",
          "avatar": "https://avatars.githubusercontent.com/u/22935000"
        },
        {
          "username": "ungedenstad",
          "href": "https://github.com/ungedenstad",
          "avatar": "https://avatars.githubusercontent.com/u/61791080"
        },
        {
          "username": "AugusDogus",
          "href": "https://github.com/AugusDogus",
          "avatar": "https://avatars.githubusercontent.com/u/9794679"
        }
      ]
    },
    {
      "author": "ItzCrazyKns",
      "repo": "Vane",
      "avatar": "https://github.com/ItzCrazyKns.png",
      "repo_link": "https://github.com/ItzCrazyKns/Vane",
      "desc": "Vane is an AI-powered answering engine.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3587,
      "added_stars": 4307,
      "builtBy": [
        {
          "username": "ItzCrazyKns",
          "href": "https://github.com/ItzCrazyKns",
          "avatar": "https://avatars.githubusercontent.com/u/95534749"
        },
        {
          "username": "WanQuanXie",
          "href": "https://github.com/WanQuanXie",
          "avatar": "https://avatars.githubusercontent.com/u/8021137"
        },
        {
          "username": "OmarElKadri",
          "href": "https://github.com/OmarElKadri",
          "avatar": "https://avatars.githubusercontent.com/u/118303871"
        },
        {
          "username": "sjiampojamarn",
          "href": "https://github.com/sjiampojamarn",
          "avatar": "https://avatars.githubusercontent.com/u/18257803"
        }
      ]
    },
    {
      "author": "siteboon",
      "repo": "claudecodeui",
      "avatar": "https://github.com/siteboon.png",
      "repo_link": "https://github.com/siteboon/claudecodeui",
      "desc": "Use Claude Code, Cursor CLI or Codex on mobile and web with CloudCLI (aka Claude Code UI). CloudCLI is a free open source webui/GUI that helps you manage your Claude Code session and projects remotely",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1109,
      "added_stars": 2399,
      "builtBy": [
        {
          "username": "viper151",
          "href": "https://github.com/viper151",
          "avatar": "https://avatars.githubusercontent.com/u/7479045"
        },
        {
          "username": "blackmammoth",
          "href": "https://github.com/blackmammoth",
          "avatar": "https://avatars.githubusercontent.com/u/118998054"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "EricBlanquer",
          "href": "https://github.com/EricBlanquer",
          "avatar": "https://avatars.githubusercontent.com/u/1058958"
        },
        {
          "username": "unsystemizer",
          "href": "https://github.com/unsystemizer",
          "avatar": "https://avatars.githubusercontent.com/u/13134193"
        }
      ]
    },
    {
      "author": "tobi",
      "repo": "qmd",
      "avatar": "https://github.com/tobi.png",
      "repo_link": "https://github.com/tobi/qmd",
      "desc": "mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 971,
      "added_stars": 6756,
      "builtBy": [
        {
          "username": "tobi",
          "href": "https://github.com/tobi",
          "avatar": "https://avatars.githubusercontent.com/u/347"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shreyaskarnik",
          "href": "https://github.com/shreyaskarnik",
          "avatar": "https://avatars.githubusercontent.com/u/311217"
        },
        {
          "username": "burke",
          "href": "https://github.com/burke",
          "avatar": "https://avatars.githubusercontent.com/u/1284"
        },
        {
          "username": "mbrendan",
          "href": "https://github.com/mbrendan",
          "avatar": "https://avatars.githubusercontent.com/u/25271154"
        }
      ]
    },
    {
      "author": "openclaw",
      "repo": "clawhub",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/clawhub",
      "desc": "Skill Directory for OpenClaw",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1023,
      "added_stars": 4083,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "sethconvex",
          "href": "https://github.com/sethconvex",
          "avatar": "https://avatars.githubusercontent.com/u/239661579"
        },
        {
          "username": "thewilloftheshadow",
          "href": "https://github.com/thewilloftheshadow",
          "avatar": "https://avatars.githubusercontent.com/u/35580099"
        },
        {
          "username": "magicseth",
          "href": "https://github.com/magicseth",
          "avatar": "https://avatars.githubusercontent.com/u/15504"
        }
      ]
    },
    {
      "author": "openclaw",
      "repo": "openclaw",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/openclaw",
      "desc": "Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 63425,
      "added_stars": 116717,
      "builtBy": [
        {
          "username": "steipete",
          "href": "https://github.com/steipete",
          "avatar": "https://avatars.githubusercontent.com/u/58493"
        },
        {
          "username": "vincentkoc",
          "href": "https://github.com/vincentkoc",
          "avatar": "https://avatars.githubusercontent.com/u/25068"
        },
        {
          "username": "obviyus",
          "href": "https://github.com/obviyus",
          "avatar": "https://avatars.githubusercontent.com/u/22031114"
        },
        {
          "username": "gumadeiras",
          "href": "https://github.com/gumadeiras",
          "avatar": "https://avatars.githubusercontent.com/u/5599352"
        },
        {
          "username": "vignesh07",
          "href": "https://github.com/vignesh07",
          "avatar": "https://avatars.githubusercontent.com/u/1436853"
        }
      ]
    },
    {
      "author": "fluxerapp",
      "repo": "fluxer",
      "avatar": "https://github.com/fluxerapp.png",
      "repo_link": "https://github.com/fluxerapp/fluxer",
      "desc": "A free and open source instant messaging and VoIP platform built for friends, groups, and communities. Self-hosting and more activity in this repository is coming very soon! See the README.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 379,
      "added_stars": 2932,
      "builtBy": [
        {
          "username": "hampus-fluxer",
          "href": "https://github.com/hampus-fluxer",
          "avatar": "https://avatars.githubusercontent.com/u/241303489"
        },
        {
          "username": "Jiralite",
          "href": "https://github.com/Jiralite",
          "avatar": "https://avatars.githubusercontent.com/u/33201955"
        },
        {
          "username": "M0n7y5",
          "href": "https://github.com/M0n7y5",
          "avatar": "https://avatars.githubusercontent.com/u/17201053"
        },
        {
          "username": "fenbyte",
          "href": "https://github.com/fenbyte",
          "avatar": "https://avatars.githubusercontent.com/u/189394543"
        },
        {
          "username": "dynamicbark",
          "href": "https://github.com/dynamicbark",
          "avatar": "https://avatars.githubusercontent.com/u/79102296"
        }
      ]
    },
    {
      "author": "southleft",
      "repo": "figma-console-mcp",
      "avatar": "https://github.com/southleft.png",
      "repo_link": "https://github.com/southleft/figma-console-mcp",
      "desc": "Your design system as an API. Connect AI to Figma for extraction, creation, and debugging.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 131,
      "added_stars": 663,
      "builtBy": [
        {
          "username": "tpitre",
          "href": "https://github.com/tpitre",
          "avatar": "https://avatars.githubusercontent.com/u/645765"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "abdokhaire",
          "href": "https://github.com/abdokhaire",
          "avatar": "https://avatars.githubusercontent.com/u/4311670"
        },
        {
          "username": "ionmesca",
          "href": "https://github.com/ionmesca",
          "avatar": "https://avatars.githubusercontent.com/u/103584532"
        },
        {
          "username": "chaba11",
          "href": "https://github.com/chaba11",
          "avatar": "https://avatars.githubusercontent.com/u/39912868"
        }
      ]
    },
    {
      "author": "cloudflare",
      "repo": "agents",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/agents",
      "desc": "Build and deploy AI Agents on Cloudflare",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 459,
      "added_stars": 1363,
      "builtBy": [
        {
          "username": "threepointone",
          "href": "https://github.com/threepointone",
          "avatar": "https://avatars.githubusercontent.com/u/18808"
        },
        {
          "username": "whoiskatrin",
          "href": "https://github.com/whoiskatrin",
          "avatar": "https://avatars.githubusercontent.com/u/8017908"
        },
        {
          "username": "mattzcarey",
          "href": "https://github.com/mattzcarey",
          "avatar": "https://avatars.githubusercontent.com/u/77928207"
        },
        {
          "username": "deathbyknowledge",
          "href": "https://github.com/deathbyknowledge",
          "avatar": "https://avatars.githubusercontent.com/u/37671466"
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
      "forks": 896,
      "added_stars": 4738,
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
          "username": "elliotllliu",
          "href": "https://github.com/elliotllliu",
          "avatar": "https://avatars.githubusercontent.com/u/55885132"
        },
        {
          "username": "pi0",
          "href": "https://github.com/pi0",
          "avatar": "https://avatars.githubusercontent.com/u/5158436"
        }
      ]
    },
    {
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The leading agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features enterprise-grade architecture, distributed swarm intelligence, RAG integration, and native Claude Code / Codex Integration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2414,
      "added_stars": 7932,
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
          "username": "alexx-ftw",
          "href": "https://github.com/alexx-ftw",
          "avatar": "https://avatars.githubusercontent.com/u/22500633"
        },
        {
          "username": "lanemc",
          "href": "https://github.com/lanemc",
          "avatar": "https://avatars.githubusercontent.com/u/15803865"
        },
        {
          "username": "tommy-ca",
          "href": "https://github.com/tommy-ca",
          "avatar": "https://avatars.githubusercontent.com/u/140900186"
        }
      ]
    },
    {
      "author": "Fission-AI",
      "repo": "OpenSpec",
      "avatar": "https://github.com/Fission-AI.png",
      "repo_link": "https://github.com/Fission-AI/OpenSpec",
      "desc": "Spec-driven development (SDD) for AI coding assistants.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2166,
      "added_stars": 7989,
      "builtBy": [
        {
          "username": "TabishB",
          "href": "https://github.com/TabishB",
          "avatar": "https://avatars.githubusercontent.com/u/30385142"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "fsilvaortiz",
          "href": "https://github.com/fsilvaortiz",
          "avatar": "https://avatars.githubusercontent.com/u/5909774"
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
      "title": "What was your win this week??",
      "description": "👋👋👋👋  Looking back on your week -- what was something you're proud of?  All wins count -- big or...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-35ja",
      "tags": "weeklyretro, discuss",
      "reactions": 34,
      "comments": 23,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Get Started on Dev.to! A Beginner's Guide to Engage with the Community!",
      "description": "All Images are own by the Pokemon Company!  Important Information: This post is an Unofficial Dev.to...",
      "url": "https://dev.to/francistrdev/get-started-on-devto-a-beginners-guide-to-engage-with-the-community-4ach",
      "tags": "discuss, community, beginners, howtodevto",
      "reactions": 41,
      "comments": 22,
      "reading_time": 6,
      "author": "francistrdev"
    },
    {
      "title": "Unlocking Gemini CLI with Skills, Hooks & Plan Mode",
      "description": "In Unlocking Gemini CLI with Skills, Hooks &amp; Plan Mode, we moved past the basics and into the...",
      "url": "https://dev.to/googleai/unlocking-gemini-cli-with-skills-hooks-plan-mode-2bgf",
      "tags": "gemini, ai, cli",
      "reactions": 38,
      "comments": 3,
      "reading_time": 3,
      "author": "greggyb"
    },
    {
      "title": "Congrats to the Winners of Our First DEV Weekend Challenge!",
      "description": "It's time!! We are thrilled to announce the winners of our first DEV Weekend Challenge.  The prompt...",
      "url": "https://dev.to/devteam/congrats-to-the-winners-of-our-first-dev-weekend-challenge-1gml",
      "tags": "ai, devchallenge, weekendchallenge, webdev",
      "reactions": 65,
      "comments": 17,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Vandalizing My Own Wikipedia Experience: A 90s Cyberpunk GeoCities Makeover",
      "description": "Wikipedia is a marvel. It is the Library of Alexandria of our time, a meticulously curated repository...",
      "url": "https://dev.to/googleai/vandalizing-my-own-wikipedia-experience-a-90s-cyberpunk-geocities-makeover-13ie",
      "tags": "webdev, ai, javascript, programming",
      "reactions": 51,
      "comments": 4,
      "reading_time": 4,
      "author": "dynamicwebpaige"
    },
    {
      "title": "My AI agent messed up a UTC time conversion algorithm after I *specifically told it* to make no mistakes. smh",
      "description": "A post by Ben Halpern",
      "url": "https://dev.to/ben/my-ai-agent-messed-up-a-utc-time-conversion-algorithm-after-i-specifically-told-it-to-make-no-46k7",
      "tags": "agents, ai, algorithms, discuss",
      "reactions": 41,
      "comments": 4,
      "reading_time": 0,
      "author": "ben"
    },
    {
      "title": "My First Experience Creating Antigravity Skills",
      "description": "Experimenting with Agent skills for the first time, feeling empowered!    Last week, I was at an...",
      "url": "https://dev.to/googleai/my-first-experience-creating-antigravity-skills-524b",
      "tags": "antigravity, ai, googlecloud, agents",
      "reactions": 39,
      "comments": 2,
      "reading_time": 5,
      "author": "shirmeirlador"
    },
    {
      "title": "Quick tip: your og:image should be 1200x630px",
      "description": "Quick tip about link previews:  Your og:image should be 1200x630px. Most sites get this wrong —...",
      "url": "https://dev.to/bengreenberg/quick-tip-your-ogimage-should-be-1200x630px-4m27",
      "tags": "seo, webdev, devtips, opengraph",
      "reactions": 29,
      "comments": 3,
      "reading_time": 1,
      "author": "bengreenberg"
    },
    {
      "title": "Vitest's 4.1 New \"Fast-Forward\" Mode Skips Timer Delays Instantly",
      "description": "An important property of tests is that they should be composable.  Here is an example. Say you have a...",
      "url": "https://dev.to/playfulprogramming-angular/vitests-41-new-fast-forward-mode-skips-timer-delays-instantly-4a4h",
      "tags": "webdev, javascript, testing, angular",
      "reactions": 29,
      "comments": 0,
      "reading_time": 3,
      "author": "younesjd"
    },
    {
      "title": "I Scanned 100 AI Codebases - Here's What I Found",
      "description": "I've been building VibeCheck for the past few months - it's a security scanner specifically for...",
      "url": "https://dev.to/itskondrat/i-scanned-100-ai-codebases-heres-what-i-found-55be",
      "tags": "vibecoding, ai, security, webdev",
      "reactions": 7,
      "comments": 51,
      "reading_time": 3,
      "author": "itskondrat"
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
      "title": "I Built a Personalized AI Life Coach with Obsidian + Claude — Here's the Exact Setup",
      "description": "Most people use AI the same way they use Google: ask a question, get an answer, close the tab. The...",
      "url": "https://dev.to/aschung212/i-built-a-personalized-ai-life-coach-with-obsidian-claude-heres-the-exact-setup-3aj2",
      "tags": "productivity, ai, obsidian, pkm",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "aschung212"
    },
    {
      "title": "I Built a Tool That Turns TODO Comments Into Actual Documentation",
      "description": "Most developers already “document” their code — just not in a structured way.  We write things...",
      "url": "https://dev.to/nitish_sharma/i-built-a-tool-that-turns-todo-comments-into-actual-documentation-34d2",
      "tags": "productivity, showdev, sideprojects, tooling",
      "reactions": 2,
      "comments": 0,
      "reading_time": 2,
      "author": "nitish_sharma"
    },
    {
      "title": "Why I Built a Privacy-First AI Assistant for Visual Studio 2022 (Goodbye Cloud-Only Copilots!)",
      "description": "The Problem: Cloud AI is Great, but Privacy is Greater   We all love GitHub Copilot, but...",
      "url": "https://dev.to/furkiak/why-i-built-a-privacy-first-ai-assistant-for-visual-studio-2022-goodbye-cloud-only-copilots-e9h",
      "tags": "ai, opensource, csharp, productivity",
      "reactions": 2,
      "comments": 2,
      "reading_time": 2,
      "author": "furkiak"
    },
    {
      "title": "I built a beautiful Markdown Viewer for Chrome, VS Code, and Desktop — here's what I learned",
      "description": "Markdown Viewer Premium is a cross-platform Markdown previewer with Mermaid diagrams, Math/LaTeX, syntax highlighting, and a glassmorphism UI. One shared React core — deployed everywhere.",
      "url": "https://dev.to/chieund/i-built-a-beautiful-markdown-viewer-for-chrome-vs-code-and-desktop-heres-what-i-learned-27cd",
      "tags": "webdev, opensource, react, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "chieund"
    },
    {
      "title": "OpenCode: The Open Source AI Coding Agent That's Changing Developer Productivity",
      "description": "OpenCode: The Open Source AI Coding Agent That's Changing Developer Productivity   The AI...",
      "url": "https://dev.to/_a1084658c738d4804957c/opencode-the-open-source-ai-coding-agent-thats-changing-developer-productivity-m6f",
      "tags": "ai, coding, productivity, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "_a1084658c738d4804957c"
    },
    {
      "title": "How I Made fzf Feel Snappy Again in Large Repositories",
      "description": "Most of the time when I’m working in the terminal, I’m navigating files.  Usually that looks like...",
      "url": "https://dev.to/jerry_schneider/how-i-made-fzf-feel-snappy-again-in-large-repositories-208n",
      "tags": "bash, cli, productivity, performance",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "jerry_schneider"
    },
    {
      "title": "I Built 24 AI Agents for My Terminal — Here's What They Do",
      "description": "## The Problem                                                                                       ...",
      "url": "https://dev.to/prince_vasoya_12d7a1a2bae/i-built-24-ai-agents-for-my-terminal-heres-what-they-do-31jn",
      "tags": "ai, opensource, javascript, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 1,
      "author": "prince_vasoya_12d7a1a2bae"
    },
    {
      "title": "CodeRef - Smart Java Analyzer with ML Engine",
      "description": "How a Single IntelliJ Plugin Cut Our Code Review Rework by 60% — A 6-Month Honest Review    I'm a...",
      "url": "https://dev.to/piwe/coderef-smart-java-analyzer-with-ml-engine-41c3",
      "tags": "codereview, java, machinelearning, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "piwe"
    },
    {
      "title": "Poll: Which AI Search Engine Do You Use Most?",
      "description": "Which AI Search Engine Do You Use Most?   I'm researching how developers actually use...",
      "url": "https://dev.to/alexandrebrt14sys/poll-which-ai-search-engine-do-you-use-most-46mi",
      "tags": "ai, discuss, productivity, watercooler",
      "reactions": 1,
      "comments": 0,
      "reading_time": 1,
      "author": "alexandrebrt14sys"
    },
    {
      "title": "OpenCode AI Agent Setup: Production-Ready Workflow Guide",
      "description": "Master the OpenCode AI agent setup guide for real-world projects. This deep dive covers configuration, integration, and practical use cases for immediate pro...",
      "url": "https://dev.to/umair24171/opencode-ai-agent-setup-production-ready-workflow-guide-18d8",
      "tags": "ai, developertools, opensource, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 12,
      "author": "umair24171"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
```

