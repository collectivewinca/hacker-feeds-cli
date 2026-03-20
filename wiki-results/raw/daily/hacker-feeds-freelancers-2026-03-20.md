# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-03-20 06:33:38 UTC

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
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 424,
      "added_stars": 6432,
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
      "author": "andrewyng",
      "repo": "context-hub",
      "avatar": "https://github.com/andrewyng.png",
      "repo_link": "https://github.com/andrewyng/context-hub",
      "desc": "",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 945,
      "added_stars": 5237,
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
      "author": "jarrodwatts",
      "repo": "claude-hud",
      "avatar": "https://github.com/jarrodwatts.png",
      "repo_link": "https://github.com/jarrodwatts/claude-hud",
      "desc": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 366,
      "added_stars": 3674,
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
      "author": "affaan-m",
      "repo": "everything-claude-code",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/everything-claude-code",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 11643,
      "added_stars": 14298,
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
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2978,
      "added_stars": 7165,
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
      "forks": 784,
      "added_stars": 583,
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
      "author": "Wei-Shaw",
      "repo": "claude-relay-service",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/claude-relay-service",
      "desc": "CRS-自建Claude Code镜像，一站式开源中转服务，让 Claude、OpenAI、Gemini、Droid 订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1508,
      "added_stars": 448,
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
      "author": "FreeTubeApp",
      "repo": "FreeTube",
      "avatar": "https://github.com/FreeTubeApp.png",
      "repo_link": "https://github.com/FreeTubeApp/FreeTube",
      "desc": "An Open Source YouTube app for privacy",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1364,
      "added_stars": 142,
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
      "author": "ComposioHQ",
      "repo": "awesome-claude-plugins",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/awesome-claude-plugins",
      "desc": "A curated list of Plugins that let you extend Claude Code with custom commands, agents, hooks, and MCP servers through the plugin system.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 222,
      "added_stars": 57,
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
      "author": "tabler",
      "repo": "tabler-icons",
      "avatar": "https://github.com/tabler.png",
      "repo_link": "https://github.com/tabler/tabler-icons",
      "desc": "A set of over 5900 free MIT-licensed high-quality SVG icons for you to use in your web projects.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1099,
      "added_stars": 114,
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
      "forks": 2221,
      "added_stars": 1813,
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
      "author": "jaywcjlove",
      "repo": "awesome-mac",
      "avatar": "https://github.com/jaywcjlove.png",
      "repo_link": "https://github.com/jaywcjlove/awesome-mac",
      "desc": " Now we have become very big, Different from the original idea. Collect premium software in various categories.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7504,
      "added_stars": 522,
      "builtBy": [
        {
          "username": "jaywcjlove",
          "href": "https://github.com/jaywcjlove",
          "avatar": "https://avatars.githubusercontent.com/u/1680273"
        },
        {
          "username": "alichtman",
          "href": "https://github.com/alichtman",
          "avatar": "https://avatars.githubusercontent.com/u/20600565"
        },
        {
          "username": "xcv58",
          "href": "https://github.com/xcv58",
          "avatar": "https://avatars.githubusercontent.com/u/503123"
        },
        {
          "username": "heldev",
          "href": "https://github.com/heldev",
          "avatar": "https://avatars.githubusercontent.com/u/16080436"
        }
      ]
    },
    {
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Connect All AI Code Tools (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) to 40+ AI Providers & 100+ Models",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 308,
      "added_stars": 238,
      "builtBy": [
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
          "username": "catalinstanciu",
          "href": "https://github.com/catalinstanciu",
          "avatar": "https://avatars.githubusercontent.com/u/5753427"
        },
        {
          "username": "Blade096",
          "href": "https://github.com/Blade096",
          "avatar": "https://avatars.githubusercontent.com/u/46746496"
        },
        {
          "username": "decolua",
          "href": "https://github.com/decolua",
          "avatar": "https://avatars.githubusercontent.com/u/8282593"
        }
      ]
    },
    {
      "author": "hakimel",
      "repo": "reveal.js",
      "avatar": "https://github.com/hakimel.png",
      "repo_link": "https://github.com/hakimel/reveal.js",
      "desc": "The HTML Presentation Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 16806,
      "added_stars": 95,
      "builtBy": [
        {
          "username": "hakimel",
          "href": "https://github.com/hakimel",
          "avatar": "https://avatars.githubusercontent.com/u/629429"
        },
        {
          "username": "VonC",
          "href": "https://github.com/VonC",
          "avatar": "https://avatars.githubusercontent.com/u/79478"
        },
        {
          "username": "mischah",
          "href": "https://github.com/mischah",
          "avatar": "https://avatars.githubusercontent.com/u/441011"
        },
        {
          "username": "bnjmnt4n",
          "href": "https://github.com/bnjmnt4n",
          "avatar": "https://avatars.githubusercontent.com/u/813865"
        },
        {
          "username": "davidbanham",
          "href": "https://github.com/davidbanham",
          "avatar": "https://avatars.githubusercontent.com/u/631832"
        }
      ]
    },
    {
      "author": "fishjar",
      "repo": "kiss-translator",
      "avatar": "https://github.com/fishjar.png",
      "repo_link": "https://github.com/fishjar/kiss-translator",
      "desc": "A simple, open source bilingual translation extension & Greasemonkey script (一个简约、开源的 双语对照翻译扩展 & 油猴脚本)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 383,
      "added_stars": 75,
      "builtBy": [
        {
          "username": "fishjar",
          "href": "https://github.com/fishjar",
          "avatar": "https://avatars.githubusercontent.com/u/1157624"
        },
        {
          "username": "htyxyt",
          "href": "https://github.com/htyxyt",
          "avatar": "https://avatars.githubusercontent.com/u/62530172"
        },
        {
          "username": "XYenon",
          "href": "https://github.com/XYenon",
          "avatar": "https://avatars.githubusercontent.com/u/20698483"
        },
        {
          "username": "hoilc",
          "href": "https://github.com/hoilc",
          "avatar": "https://avatars.githubusercontent.com/u/9067094"
        },
        {
          "username": "maou-shonen",
          "href": "https://github.com/maou-shonen",
          "avatar": "https://avatars.githubusercontent.com/u/22576780"
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
      "by": "bookstore-romeo",
      "descendants": 17,
      "id": 47450478,
      "kids": [
        47451167,
        47450921,
        47450986,
        47451014,
        47450859,
        47450824,
        47450925,
        47450973
      ],
      "score": 101,
      "time": 1773980651,
      "title": "ArXiv Declares Independence from Cornell",
      "type": "story",
      "url": "https://www.science.org/content/article/arxiv-pioneering-preprint-server-declares-independence-cornell"
    },
    {
      "by": "jasonjmcghee",
      "descendants": 156,
      "id": 47448524,
      "kids": [
        47448763,
        47448676,
        47448740,
        47448680,
        47450922,
        47449000,
        47450517,
        47449738,
        47449332,
        47448625,
        47449388,
        47450667,
        47450548,
        47448726,
        47450410,
        47449015,
        47449274,
        47449064,
        47449655,
        47449089,
        47448714,
        47450613,
        47449652,
        47448724,
        47448732,
        47448985,
        47450379,
        47449010,
        47448943,
        47449565,
        47449302,
        47449004,
        47448720,
        47449408,
        47448692,
        47449071
      ],
      "score": 291,
      "time": 1773966128,
      "title": "Push events into a running session with channels",
      "type": "story",
      "url": "https://code.claude.com/docs/en/channels"
    },
    {
      "by": "0xedb",
      "descendants": 746,
      "id": 47442690,
      "kids": [
        47446446,
        47444880,
        47443929,
        47443835,
        47446418,
        47451164,
        47444793,
        47450849,
        47443820,
        47451091,
        47450704,
        47444257,
        47451035,
        47447686,
        47448749,
        47448409,
        47443971,
        47445191,
        47444475,
        47448446,
        47443915,
        47446743,
        47450071,
        47447392,
        47445607,
        47445745,
        47450566,
        47444401,
        47450499,
        47446914,
        47447796,
        47447922,
        47445948,
        47444842,
        47449528,
        47446019,
        47450650,
        47447581,
        47448197,
        47444697,
        47449608,
        47450003,
        47449717,
        47449186,
        47448879,
        47450230,
        47446383,
        47443116,
        47445812,
        47445595,
        47446193,
        47445205,
        47444472,
        47450174,
        47444772,
        47445027,
        47446771,
        47448990,
        47449448,
        47443980,
        47446552,
        47448192,
        47446036,
        47447832,
        47445037,
        47446296,
        47446724,
        47443181,
        47444996,
        47447160,
        47446617,
        47447732,
        47444423,
        47450060,
        47445289,
        47449238,
        47446052,
        47446401,
        47446123,
        47447566,
        47445804,
        47449795,
        47449556,
        47445623,
        47445124,
        47445545,
        47443925,
        47448171,
        47448113,
        47446007,
        47447920,
        47446891,
        47446528,
        47446169,
        47445132,
        47448428,
        47444536,
        47445906,
        47446150,
        47444011,
        47448513,
        47443899,
        47446579,
        47445708,
        47447372,
        47445887,
        47444205,
        47444956
      ],
      "score": 671,
      "text": "<a href=\"https:&#x2F;&#x2F;android-developers.googleblog.com&#x2F;2026&#x2F;03&#x2F;android-developer-verification.html\" rel=\"nofollow\">https:&#x2F;&#x2F;android-developers.googleblog.com&#x2F;2026&#x2F;03&#x2F;android-de...</a>",
      "time": 1773940564,
      "title": "Google details new 24-hour process to sideload unverified Android apps",
      "type": "story",
      "url": "https://arstechnica.com/gadgets/2026/03/google-details-new-24-hour-process-to-sideload-unverified-android-apps/"
    },
    {
      "by": "nyxgeek",
      "descendants": 18,
      "id": 47448994,
      "kids": [
        47450296,
        47449829,
        47450462,
        47449934,
        47450924,
        47450712,
        47450990,
        47450884,
        47451136,
        47450631,
        47450190,
        47451119
      ],
      "score": 95,
      "time": 1773968985,
      "title": "Full Disclosure: A Third (and Fourth) Azure Sign-In Log Bypass Found",
      "type": "story",
      "url": "https://trustedsec.com/blog/full-disclosure-a-third-and-fourth-azure-sign-in-log-bypass-found"
    },
    {
      "by": "robotnikman",
      "descendants": 46,
      "id": 47448566,
      "kids": [
        47450005,
        47451101,
        47451185,
        47450565,
        47449168,
        47449491,
        47451041,
        47450678,
        47449174,
        47450446,
        47450552,
        47450851,
        47449681,
        47449734,
        47449115,
        47450533,
        47449511,
        47449305,
        47449706,
        47449224,
        47449193,
        47449167,
        47449104,
        47449724,
        47450000,
        47449477,
        47449884,
        47449777,
        47449277
      ],
      "score": 114,
      "time": 1773966407,
      "title": "Drugwars for the TI-82/83/83 Calculators (2011)",
      "type": "story",
      "url": "https://gist.github.com/mattmanning/1002653/b7a1e88479a10eaae3bd5298b8b2c86e16fb4404"
    },
    {
      "by": "PaulHoule",
      "descendants": 42,
      "id": 47406160,
      "kids": [
        47444554,
        47445725,
        47451024,
        47445295,
        47448059,
        47444005,
        47445166,
        47448514,
        47445630,
        47444082,
        47443989,
        47444339,
        47447855,
        47450370,
        47448413,
        47447757,
        47444007,
        47447989,
        47447822,
        47449160,
        47448579
      ],
      "score": 305,
      "time": 1773701773,
      "title": "Return of the Obra Dinn: spherical mapped dithering for a 1bpp first-person game",
      "type": "story",
      "url": "https://forums.tigsource.com/index.php?topic=40832.msg1363742#msg1363742"
    },
    {
      "by": "greedo",
      "descendants": 94,
      "id": 47416972,
      "kids": [
        47447083,
        47451094,
        47449844,
        47446538,
        47447665,
        47447628,
        47450173,
        47450708,
        47447175,
        47450216,
        47446411,
        47447800,
        47450633,
        47448344,
        47446494,
        47446812,
        47449781,
        47447162,
        47449270,
        47447383,
        47447943
      ],
      "score": 180,
      "time": 1773775184,
      "title": "How the Turner twins are mythbusting modern technical apparel",
      "type": "story",
      "url": "https://www.carryology.com/insights/how-the-turner-twins-are-mythbusting-modern-gear/"
    },
    {
      "by": "rohan_joshi",
      "descendants": 146,
      "id": 47441546,
      "kids": [
        47448356,
        47442196,
        47448182,
        47449764,
        47445231,
        47447271,
        47450951,
        47447368,
        47442295,
        47445234,
        47445835,
        47450937,
        47449779,
        47443934,
        47450645,
        47448275,
        47447805,
        47442901,
        47449292,
        47449822,
        47444097,
        47446647,
        47442179,
        47442384,
        47443898,
        47443199,
        47443172,
        47443006,
        47442080,
        47442362,
        47443609,
        47443815,
        47442112,
        47443921,
        47449268,
        47444301,
        47444201,
        47442899,
        47442127,
        47445907,
        47445666,
        47447994,
        47449326,
        47449021,
        47446988,
        47445013,
        47444236,
        47445560,
        47448873,
        47443529,
        47447049
      ],
      "score": 382,
      "text": "Kitten TTS (<a href=\"https:&#x2F;&#x2F;github.com&#x2F;KittenML&#x2F;KittenTTS\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;KittenML&#x2F;KittenTTS</a>) is an open-source series of tiny and expressive text-to-speech models for on-device applications. We had a thread last year here: <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=44807868\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=44807868</a>.<p>Today we&#x27;re releasing three new models with 80M, 40M and 14M parameters.<p>The largest model (80M) has the highest quality. The 14M variant reaches new SOTA in expressivity among similar sized models, despite being &lt;25MB in size. This release is a major upgrade from the previous one and supports English text-to-speech applications in eight voices: four male and four female.<p>Here&#x27;s a short demo: <a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=ge3u5qblqZA\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=ge3u5qblqZA</a>.<p>Most models are quantized to int8 + fp16, and they use ONNX for runtime. Our models are designed to run anywhere eg. raspberry pi, low-end smartphones, wearables, browsers etc. No GPU required! This release aims to bridge the gap between on-device and cloud models for tts applications. Multi-lingual model release is coming soon.<p>On-device AI is bottlenecked by one thing: a lack of tiny models that actually perform. Our goal is to open-source more models to run production-ready voice agents and apps entirely on-device.<p>We would love your feedback!",
      "time": 1773935766,
      "title": "Show HN: Three new Kitten TTS models – smallest less than 25MB",
      "type": "story",
      "url": "https://github.com/KittenML/KittenTTS"
    },
    {
      "by": "modinfo",
      "descendants": 130,
      "id": 47445599,
      "kids": [
        47450030,
        47447626,
        47447480,
        47446964,
        47447230,
        47446216,
        47445972,
        47445990,
        47449658,
        47447782,
        47447651,
        47449988,
        47446035,
        47446133,
        47449110,
        47446277,
        47447114,
        47447398,
        47450964,
        47448725,
        47449929,
        47447136,
        47446030,
        47449906,
        47446039,
        47447745,
        47447041,
        47448690,
        47447728,
        47450031,
        47447630,
        47447858,
        47447101,
        47448545,
        47450680,
        47447099,
        47447646,
        47446413,
        47448407,
        47446960,
        47446864,
        47448078,
        47449287,
        47448107
      ],
      "score": 222,
      "time": 1773952382,
      "title": "Cockpit is a web-based graphical interface for servers",
      "type": "story",
      "url": "https://github.com/cockpit-project/cockpit"
    },
    {
      "by": "mosura",
      "descendants": 552,
      "id": 47440430,
      "kids": [
        47444931,
        47444422,
        47443130,
        47443289,
        47443837,
        47443033,
        47443003,
        47444397,
        47443516,
        47443330,
        47443338,
        47447809,
        47444797,
        47450791,
        47443293,
        47448388,
        47444563,
        47445473,
        47447497,
        47444090,
        47450494,
        47443789,
        47443606,
        47448631,
        47443521,
        47448583,
        47443057,
        47446935,
        47445344,
        47446563,
        47443836,
        47448754,
        47447662,
        47446598,
        47450744,
        47446727,
        47445512,
        47447340,
        47443097,
        47443983,
        47450840,
        47441202,
        47447132,
        47446094,
        47449369,
        47445386,
        47444943,
        47444566,
        47443759,
        47450207,
        47443120,
        47446769,
        47443552,
        47445799,
        47443237,
        47443738,
        47444585,
        47448895,
        47446258,
        47448768,
        47443812,
        47443361,
        47443822,
        47442954,
        47444553
      ],
      "score": 330,
      "text": "<a href=\"https:&#x2F;&#x2F;www.ofcom.org.uk&#x2F;online-safety&#x2F;illegal-and-harmful-content&#x2F;4chan-fined-450000-for-not-protecting-children-from-online-pornography\" rel=\"nofollow\">https:&#x2F;&#x2F;www.ofcom.org.uk&#x2F;online-safety&#x2F;illegal-and-harmful-c...</a>",
      "time": 1773931585,
      "title": "4Chan mocks £520k fine for UK online safety breaches",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/c624330lg1ko"
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
      "title": "Things That Turbo Pascal is Smaller Than (2011)",
      "url": "https://prog21.dadgum.com/116.html",
      "score": 42,
      "comments": 23,
      "tags": [
        "programming",
        "retrocomputing"
      ],
      "id": "nzg621"
    },
    {
      "title": "Android developer verification: Balancing openness and choice with safety",
      "url": "https://android-developers.googleblog.com/2026/03/android-developer-verification.html",
      "score": 33,
      "comments": 21,
      "tags": [
        "android",
        "security"
      ],
      "id": "g1ktjl"
    },
    {
      "title": "Getting Ziggy With It – Re: Factor",
      "url": "https://re.factorcode.org/2026/03/getting-ziggy-with-it.html",
      "score": 31,
      "comments": 4,
      "tags": [
        "concatenative",
        "zig"
      ],
      "id": "3qhmza"
    },
    {
      "title": "AI's impact on mathematics is analogous to the car's impact on cities",
      "url": "https://mathstodon.xyz/@tao/116252708577614828",
      "score": 30,
      "comments": 12,
      "tags": [
        "ai",
        "math"
      ],
      "id": "nfkpw4"
    },
    {
      "title": "To be a better programmer, write little proofs in your head (2025)",
      "url": "https://blog.get-nerve.com/to-be-a-better-programmer-write-little-proofs-in-your-head/",
      "score": 6,
      "comments": 2,
      "tags": [
        "practices",
        "programming"
      ],
      "id": "hjr72q"
    },
    {
      "title": "No Semicolons Needed",
      "url": "https://terts.dev/blog/no-semicolons-needed/",
      "score": 49,
      "comments": 16,
      "tags": [
        "plt"
      ],
      "id": "09wmcz"
    },
    {
      "title": "Root from the parking lot: OpenWRT XSS through SSID scanning (CVE-2026-32721)",
      "url": "https://mxsasha.eu/posts/openwrt-ssid-xss-to-root/",
      "score": 26,
      "comments": 2,
      "tags": [
        "security"
      ],
      "id": "vteijd"
    },
    {
      "title": "How many branches can your CPU predict?",
      "url": "https://lemire.me/blog/2026/03/18/how-many-branches-can-your-cpu-predict/",
      "score": 15,
      "comments": 1,
      "tags": [
        "hardware"
      ],
      "id": "5d6qru"
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
      "forks": 4732,
      "added_stars": 31367,
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
      "forks": 3864,
      "added_stars": 12001,
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
      "forks": 1124,
      "added_stars": 13226,
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
      "forks": 567,
      "added_stars": 8179,
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
      "forks": 666,
      "added_stars": 7637,
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
      "author": "p-e-w",
      "repo": "heretic",
      "avatar": "https://github.com/p-e-w.png",
      "repo_link": "https://github.com/p-e-w/heretic",
      "desc": "Fully automatic censorship removal for language models",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1633,
      "added_stars": 7772,
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
      "author": "teng-lin",
      "repo": "notebooklm-py",
      "avatar": "https://github.com/teng-lin.png",
      "repo_link": "https://github.com/teng-lin/notebooklm-py",
      "desc": "Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's features—including capabilities the web UI doesn't expose—via Python, CLI, and AI agents like Claude Code, Codex, and OpenClaw.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 801,
      "added_stars": 4375,
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
      "forks": 1775,
      "added_stars": 9298,
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
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3091,
      "added_stars": 7452,
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
      "author": "fishaudio",
      "repo": "fish-speech",
      "avatar": "https://github.com/fishaudio.png",
      "repo_link": "https://github.com/fishaudio/fish-speech",
      "desc": "SOTA Open Source TTS",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2376,
      "added_stars": 3417,
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
      "author": "Jeffallan",
      "repo": "claude-skills",
      "avatar": "https://github.com/Jeffallan.png",
      "repo_link": "https://github.com/Jeffallan/claude-skills",
      "desc": "66 Specialized Skills for Full-Stack Developers. Transform Claude Code into your expert pair programmer.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 456,
      "added_stars": 3818,
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
      "author": "ZhuLinsen",
      "repo": "daily_stock_analysis",
      "avatar": "https://github.com/ZhuLinsen.png",
      "repo_link": "https://github.com/ZhuLinsen/daily_stock_analysis",
      "desc": "LLM驱动的 A/H/美股智能分析器：多数据源行情 + 实时新闻 + LLM决策仪表盘 + 多渠道推送，零成本定时运行，纯白嫖. LLM-powered stock analysis system for A/H/US markets.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 24283,
      "added_stars": 11579,
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
      "author": "RichardAtCT",
      "repo": "claude-code-telegram",
      "avatar": "https://github.com/RichardAtCT.png",
      "repo_link": "https://github.com/RichardAtCT/claude-code-telegram",
      "desc": "A powerful Telegram bot that provides remote access to Claude Code, enabling developers to interact with their projects from anywhere with full AI assistance and session persistence.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 281,
      "added_stars": 1411,
      "builtBy": [
        {
          "username": "RichardAtCT",
          "href": "https://github.com/RichardAtCT",
          "avatar": "https://avatars.githubusercontent.com/u/29794543"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "guillaumegay13",
          "href": "https://github.com/guillaumegay13",
          "avatar": "https://avatars.githubusercontent.com/u/141296636"
        },
        {
          "username": "F1orian",
          "href": "https://github.com/F1orian",
          "avatar": "https://avatars.githubusercontent.com/u/27896106"
        },
        {
          "username": "alexx-ftw",
          "href": "https://github.com/alexx-ftw",
          "avatar": "https://avatars.githubusercontent.com/u/22500633"
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
      "forks": 8591,
      "added_stars": 3716,
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
      "forks": 322,
      "added_stars": 873,
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
      "author": "public-apis",
      "repo": "public-apis",
      "avatar": "https://github.com/public-apis.png",
      "repo_link": "https://github.com/public-apis/public-apis",
      "desc": "A collective list of free APIs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 44624,
      "added_stars": 14030,
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
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 844,
      "added_stars": 1703,
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
          "username": "JustinGuese",
          "href": "https://github.com/JustinGuese",
          "avatar": "https://avatars.githubusercontent.com/u/9588843"
        },
        {
          "username": "kashif",
          "href": "https://github.com/kashif",
          "avatar": "https://avatars.githubusercontent.com/u/8100"
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
      "forks": 884,
      "added_stars": 1631,
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
      "author": "databricks-solutions",
      "repo": "ai-dev-kit",
      "avatar": "https://github.com/databricks-solutions.png",
      "repo_link": "https://github.com/databricks-solutions/ai-dev-kit",
      "desc": "Databricks Toolkit for Coding Agents provided by Field Engineering",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 188,
      "added_stars": 560,
      "builtBy": [
        {
          "username": "calreynolds",
          "href": "https://github.com/calreynolds",
          "avatar": "https://avatars.githubusercontent.com/u/49540501"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "dustinvannoy-db",
          "href": "https://github.com/dustinvannoy-db",
          "avatar": "https://avatars.githubusercontent.com/u/126025751"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "malcolndandaro",
          "href": "https://github.com/malcolndandaro",
          "avatar": "https://avatars.githubusercontent.com/u/40570280"
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
      "forks": 7382,
      "added_stars": 4095,
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
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Unified web UI for training and running open models like Qwen, DeepSeek, gpt-oss and Gemma locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4773,
      "added_stars": 4177,
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
      "forks": 6772,
      "added_stars": 33111,
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
      "forks": 3445,
      "added_stars": 17300,
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
      "forks": 5525,
      "added_stars": 16125,
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
      "forks": 1523,
      "added_stars": 7122,
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
      "author": "blackboardsh",
      "repo": "electrobun",
      "avatar": "https://github.com/blackboardsh.png",
      "repo_link": "https://github.com/blackboardsh/electrobun",
      "desc": "Build ultra fast, tiny, and cross-platform desktop apps with Typescript.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 238,
      "added_stars": 4927,
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
      "author": "superset-sh",
      "repo": "superset",
      "avatar": "https://github.com/superset-sh.png",
      "repo_link": "https://github.com/superset-sh/superset",
      "desc": "IDE for the AI Agents Era - Run an army of Claude Code, Codex, etc. on your machine",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 536,
      "added_stars": 5670,
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
      "forks": 2753,
      "added_stars": 12189,
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
      "author": "openclaw",
      "repo": "openclaw",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/openclaw",
      "desc": "Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 62967,
      "added_stars": 117458,
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
          "username": "gumadeiras",
          "href": "https://github.com/gumadeiras",
          "avatar": "https://avatars.githubusercontent.com/u/5599352"
        },
        {
          "username": "obviyus",
          "href": "https://github.com/obviyus",
          "avatar": "https://avatars.githubusercontent.com/u/22031114"
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
      "forks": 378,
      "added_stars": 3240,
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
      "author": "ItzCrazyKns",
      "repo": "Vane",
      "avatar": "https://github.com/ItzCrazyKns.png",
      "repo_link": "https://github.com/ItzCrazyKns/Vane",
      "desc": "Vane is an AI-powered answering engine.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3571,
      "added_stars": 4295,
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
      "author": "tobi",
      "repo": "qmd",
      "avatar": "https://github.com/tobi.png",
      "repo_link": "https://github.com/tobi/qmd",
      "desc": "mini cli search engine for your docs, knowledge bases, meeting notes, whatever. Tracking current sota approaches while being all local",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 965,
      "added_stars": 6777,
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
      "author": "JimLiu",
      "repo": "baoyu-skills",
      "avatar": "https://github.com/JimLiu.png",
      "repo_link": "https://github.com/JimLiu/baoyu-skills",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1100,
      "added_stars": 4893,
      "builtBy": [
        {
          "username": "JimLiu",
          "href": "https://github.com/JimLiu",
          "avatar": "https://avatars.githubusercontent.com/u/648674"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "bviews",
          "href": "https://github.com/bviews",
          "avatar": "https://avatars.githubusercontent.com/u/2810579"
        },
        {
          "username": "luojiyin1987",
          "href": "https://github.com/luojiyin1987",
          "avatar": "https://avatars.githubusercontent.com/u/6524977"
        },
        {
          "username": "justnode",
          "href": "https://github.com/justnode",
          "avatar": "https://avatars.githubusercontent.com/u/8398907"
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
      "forks": 1106,
      "added_stars": 2354,
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
      "author": "openclaw",
      "repo": "clawhub",
      "avatar": "https://github.com/openclaw.png",
      "repo_link": "https://github.com/openclaw/clawhub",
      "desc": "Skill Directory for OpenClaw",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1007,
      "added_stars": 4093,
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
      "author": "southleft",
      "repo": "figma-console-mcp",
      "avatar": "https://github.com/southleft.png",
      "repo_link": "https://github.com/southleft/figma-console-mcp",
      "desc": "Your design system as an API. Connect AI to Figma for extraction, creation, and debugging.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 125,
      "added_stars": 647,
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
      "forks": 457,
      "added_stars": 1364,
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
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The leading agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features enterprise-grade architecture, distributed swarm intelligence, RAG integration, and native Claude Code / Codex Integration",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2402,
      "added_stars": 7701,
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
      "author": "vercel-labs",
      "repo": "skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/skills",
      "desc": "The open agent skills tool - npx skills",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 887,
      "added_stars": 4672,
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
      "author": "can1357",
      "repo": "oh-my-pi",
      "avatar": "https://github.com/can1357.png",
      "repo_link": "https://github.com/can1357/oh-my-pi",
      "desc": "⌥ AI Coding agent for the terminal — hash-anchored edits, optimized tool harness, LSP, Python, browser, subagents, and more",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 191,
      "added_stars": 1211,
      "builtBy": [
        {
          "username": "badlogic",
          "href": "https://github.com/badlogic",
          "avatar": "https://avatars.githubusercontent.com/u/514052"
        },
        {
          "username": "can1357",
          "href": "https://github.com/can1357",
          "avatar": "https://avatars.githubusercontent.com/u/11807264"
        },
        {
          "username": "nicobailon",
          "href": "https://github.com/nicobailon",
          "avatar": "https://avatars.githubusercontent.com/u/2958133"
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
      "title": "Congrats to the Winners of Our First DEV Weekend Challenge!",
      "description": "It's time!! We are thrilled to announce the winners of our first DEV Weekend Challenge.  The prompt...",
      "url": "https://dev.to/devteam/congrats-to-the-winners-of-our-first-dev-weekend-challenge-1gml",
      "tags": "ai, devchallenge, weekendchallenge, webdev",
      "reactions": 52,
      "comments": 12,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Vibe-coding in Google AI Studio: my tips to prompt better and create amazing apps",
      "description": "You might already know Google AI Studio as a sandbox to play with the Deepmind models and tinker with...",
      "url": "https://dev.to/googleai/vibe-coding-in-google-ai-studio-my-tips-to-prompt-better-and-create-amazing-apps-3kcp",
      "tags": "ai, vibecoding, gemini, promptengineering",
      "reactions": 37,
      "comments": 2,
      "reading_time": 12,
      "author": "giom_v"
    },
    {
      "title": "AI Vocab 101",
      "description": "Smart, curious people keep hitting the same wall with AI: they don't have the words to name what they don't understand. Here are the terms that turn vague frustration into specific, solvable problems.",
      "url": "https://dev.to/bekahhw/ai-vocab-101-eh2",
      "tags": "ai, beginners",
      "reactions": 6,
      "comments": 2,
      "reading_time": 6,
      "author": "bekahhw"
    },
    {
      "title": "We've Seen This Movie Before",
      "description": "I've been sitting on this comparison for a while, trying to decide if it was too obvious to write...",
      "url": "https://dev.to/wynandpieters/weve-seen-this-movie-before-3719",
      "tags": "ai, gamedev, programming",
      "reactions": 41,
      "comments": 2,
      "reading_time": 10,
      "author": "wynandpieters"
    },
    {
      "title": "I Think a Lot of Developers Are Quietly Grieving the Old Internet",
      "description": "I think a lot of developers are carrying a kind of grief right now, but rarely naming it.  Not...",
      "url": "https://dev.to/the_nortern_dev/i-think-a-lot-of-developers-are-quietly-grieving-the-old-internet-3d8",
      "tags": "discuss, webdev, programming, culture",
      "reactions": 196,
      "comments": 125,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "I Tried Vite+ and Replaced My Entire Frontend Toolchain",
      "description": "If you're a frontend developer in 2026, you've probably had to deal with a lot of different tooling....",
      "url": "https://dev.to/erikch/i-tried-vite-and-replaced-my-entire-frontend-toolchain-4cgb",
      "tags": "webdev, vite, frontend, javascript",
      "reactions": 22,
      "comments": 2,
      "reading_time": 9,
      "author": "erikch"
    },
    {
      "title": "Introducing the new full-stack vibe coding experience in Google AI Studio",
      "description": "Start building real apps for the modern web with the Antigravity coding agent along with Firebase...",
      "url": "https://dev.to/googleai/introducing-the-new-full-stack-vibe-coding-experience-in-google-ai-studio-471g",
      "tags": "ai, antigravity, agents, nextjs",
      "reactions": 41,
      "comments": 4,
      "reading_time": 4,
      "author": "kat_kampf"
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
      "title": "Should RubyGems/Bundler Have a Cooldown Feature?",
      "description": "I'm Hiroshi Shibata (hsbt), a Ruby committer and the maintainer of RubyGems and Bundler.          ...",
      "url": "https://dev.to/hsbt/should-rubygemsbundler-have-a-cooldown-feature-40cp",
      "tags": "ruby, security, supplychainsecurity, packaging",
      "reactions": 35,
      "comments": 3,
      "reading_time": 4,
      "author": "hsbt"
    },
    {
      "title": "Anki On My Wrist",
      "description": "I've long been interested in \"learning how to learn\" and have long been annoyed by how I have grown...",
      "url": "https://dev.to/matheusmaldaner/anki-on-my-wrist-3gi6",
      "tags": "learning, productivity, showdev, ai",
      "reactions": 24,
      "comments": 1,
      "reading_time": 4,
      "author": "matheusmaldaner"
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
      "title": "Hoarder Vs Shiori",
      "description": "Quick Verdict   Hoarder is the better choice if you save a lot of content and want AI to...",
      "url": "https://dev.to/selfhostingsh/hoarder-vs-shiori-2nnl",
      "tags": "ai, go, productivity, tooling",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "selfhostingsh"
    },
    {
      "title": "Anki On My Wrist",
      "description": "I've long been interested in \"learning how to learn\" and have long been annoyed by how I have grown...",
      "url": "https://dev.to/matheusmaldaner/anki-on-my-wrist-3gi6",
      "tags": "learning, productivity, showdev, ai",
      "reactions": 24,
      "comments": 1,
      "reading_time": 4,
      "author": "matheusmaldaner"
    },
    {
      "title": "Vite vs Webpack: Build Tool Comparison for Modern Web Development (2026)",
      "description": "Compare Vite and Webpack for frontend builds. Analyze dev server speed, HMR, bundle optimization, plugin ecosystem, and migration strategies for production projects.",
      "url": "https://dev.to/_d7eb1c1703182e3ce1782/vite-vs-webpack-build-tool-comparison-for-modern-web-development-2026-3793",
      "tags": "webdev, programming, tools, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 13,
      "author": "_d7eb1c1703182e3ce1782"
    },
    {
      "title": "PostgreSQL Performance Tuning Checklist: 2026 Complete Guide",
      "description": "Optimize your PostgreSQL database with this comprehensive tuning checklist. Cover indexing, query optimization, configuration, connection pooling, vacuum, and monitoring strategies.",
      "url": "https://dev.to/_d7eb1c1703182e3ce1782/postgresql-performance-tuning-checklist-2026-complete-guide-65a",
      "tags": "webdev, programming, tools, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 15,
      "author": "_d7eb1c1703182e3ce1782"
    },
    {
      "title": "How to Build a CLI Tool with Rust: Step-by-Step Tutorial",
      "description": "Learn to build professional command-line tools with Rust. Cover project setup, argument parsing with clap, error handling, file I/O, colored output, testing, and distribution.",
      "url": "https://dev.to/_d7eb1c1703182e3ce1782/how-to-build-a-cli-tool-with-rust-step-by-step-tutorial-1jek",
      "tags": "webdev, programming, tools, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 10,
      "author": "_d7eb1c1703182e3ce1782"
    },
    {
      "title": "Best CI/CD Pipeline for Small Teams: A Practical 2026 Guide",
      "description": "Build an efficient CI/CD pipeline for small teams. Compare GitHub Actions, GitLab CI, CircleCI, and more. Get practical configs, cost analysis, and step-by-step setup guides.",
      "url": "https://dev.to/_d7eb1c1703182e3ce1782/best-cicd-pipeline-for-small-teams-a-practical-2026-guide-2ad0",
      "tags": "webdev, programming, tools, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 13,
      "author": "_d7eb1c1703182e3ce1782"
    },
    {
      "title": "From Issue to Production: What Autonomous Software Development Actually Looks Like",
      "description": "From Issue to Production: What Autonomous Software Development Actually Looks Like   Less...",
      "url": "https://dev.to/alprimak/from-issue-to-production-what-autonomous-software-development-actually-looks-like-1plj",
      "tags": "ai, programming, productivity, github",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "alprimak"
    },
    {
      "title": "The MCP Server of You: Building a Personal Knowledge Power for Kiro IDE",
      "description": "In this post I'm going to walk you through how I built kiro-recall,  a Kiro IDE Power that loads...",
      "url": "https://dev.to/mikeartee/the-mcp-server-of-you-building-a-personal-knowledge-power-for-kiro-ide-159j",
      "tags": "ai, kiro, productivity, opensource",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "mikeartee"
    },
    {
      "title": "10 More CLI Tools for AI Coding: Part 2 Terminal Workflow Guide",
      "description": "Part 2 of the CLI tools series — 10 more terminal tools to supercharge your AI coding workflow, plus resources for discovering new packages across Homebrew, NPM, and Rust crates.",
      "url": "https://dev.to/starmorph/10-more-cli-tools-for-ai-coding-part-2-terminal-workflow-guide-2a1h",
      "tags": "cli, terminal, devtools, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "starmorph"
    },
    {
      "title": "The Complete Guide to Developer Productivity Tools in 2026",
      "description": "Discover the best developer productivity tools in 2026 — from AI coding assistants to CLI utilities, task runners, and free online dev tools that save hours every week.",
      "url": "https://dev.to/_d7eb1c1703182e3ce1782/the-complete-guide-to-developer-productivity-tools-in-2026-165b",
      "tags": "webdev, programming, tools, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 13,
      "author": "_d7eb1c1703182e3ce1782"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
```

