# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-10-10 06:39:56 UTC

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
      "author": "DuarteSantos8",
      "repo": "openGym",
      "avatar": "https://github.com/DuarteSantos8.png",
      "repo_link": "https://github.com/DuarteSantos8/openGym",
      "desc": "Self-hosted gym & body-weight tracker — plan routines, log workouts (supersets, warm-ups, cardio), see which muscles are trained, fatigued or detrained, import from FitNotes/Strong/Hevy, passkey login. Your data, your server.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1091,
      "added_stars": 6749,
      "builtBy": [
        {
          "username": "DuarteSantos8",
          "href": "https://github.com/DuarteSantos8",
          "avatar": "https://avatars.githubusercontent.com/u/171949022"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "kurktchiev",
          "href": "https://github.com/kurktchiev",
          "avatar": "https://avatars.githubusercontent.com/u/5804477"
        },
        {
          "username": "gerrydoro",
          "href": "https://github.com/gerrydoro",
          "avatar": "https://avatars.githubusercontent.com/u/10131418"
        },
        {
          "username": "sgoendoer",
          "href": "https://github.com/sgoendoer",
          "avatar": "https://avatars.githubusercontent.com/u/1579152"
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
      "forks": 4704,
      "added_stars": 4853,
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
          "username": "abdulwahabone",
          "href": "https://github.com/abdulwahabone",
          "avatar": "https://avatars.githubusercontent.com/u/32850166"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
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
      "forks": 8601,
      "added_stars": 8319,
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
          "username": "ousamabenyounes",
          "href": "https://github.com/ousamabenyounes",
          "avatar": "https://avatars.githubusercontent.com/u/2910651"
        },
        {
          "username": "Lakshya77089",
          "href": "https://github.com/Lakshya77089",
          "avatar": "https://avatars.githubusercontent.com/u/169168095"
        },
        {
          "username": "dhedhialy",
          "href": "https://github.com/dhedhialy",
          "avatar": "https://avatars.githubusercontent.com/u/91044156"
        }
      ]
    },
    {
      "author": "androoAGI",
      "repo": "starnet",
      "avatar": "https://github.com/androoAGI.png",
      "repo_link": "https://github.com/androoAGI/starnet",
      "desc": "A living pixel-art station where real AI agents do real work. Local-first desktop agent harness - bring your own key, watch your crew actually run.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 245,
      "added_stars": 337,
      "builtBy": [
        {
          "username": "androoAGI",
          "href": "https://github.com/androoAGI",
          "avatar": "https://avatars.githubusercontent.com/u/224686490"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "bonjurroughs",
          "href": "https://github.com/bonjurroughs",
          "avatar": "https://avatars.githubusercontent.com/u/7193833"
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
      "forks": 10872,
      "added_stars": 3569,
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
          "username": "ayobamiseun",
          "href": "https://github.com/ayobamiseun",
          "avatar": "https://avatars.githubusercontent.com/u/66267222"
        }
      ]
    },
    {
      "author": "mnfst",
      "repo": "awesome-free-llm-apis",
      "avatar": "https://github.com/mnfst.png",
      "repo_link": "https://github.com/mnfst/awesome-free-llm-apis",
      "desc": "List of Permanent Free LLM API (API Keys)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1034,
      "added_stars": 650,
      "builtBy": [
        {
          "username": "SebConejo",
          "href": "https://github.com/SebConejo",
          "avatar": "https://avatars.githubusercontent.com/u/11723962"
        },
        {
          "username": "brunobuddy",
          "href": "https://github.com/brunobuddy",
          "avatar": "https://avatars.githubusercontent.com/u/6626184"
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
      "forks": 34387,
      "added_stars": 416,
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
      "author": "coreyhaines31",
      "repo": "marketingskills",
      "avatar": "https://github.com/coreyhaines31.png",
      "repo_link": "https://github.com/coreyhaines31/marketingskills",
      "desc": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 8020,
      "added_stars": 1603,
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
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "FekyBaz",
          "href": "https://github.com/FekyBaz",
          "avatar": "https://avatars.githubusercontent.com/u/97516177"
        },
        {
          "username": "imMamdouhaboammar",
          "href": "https://github.com/imMamdouhaboammar",
          "avatar": "https://avatars.githubusercontent.com/u/58908124"
        }
      ]
    },
    {
      "author": "byoungd",
      "repo": "up",
      "avatar": "https://github.com/byoungd.png",
      "repo_link": "https://github.com/byoungd/up",
      "desc": "人生进阶指南 韩先凯的人生进阶指南 英语学习指南 离谱的人生 AI时代终身学习：AI、学习、创业与成长。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6766,
      "added_stars": 1323,
      "builtBy": [
        {
          "username": "byoungd",
          "href": "https://github.com/byoungd",
          "avatar": "https://avatars.githubusercontent.com/u/16145783"
        },
        {
          "username": "fakesnow",
          "href": "https://github.com/fakesnow",
          "avatar": "https://avatars.githubusercontent.com/u/4256108"
        },
        {
          "username": "holtenko",
          "href": "https://github.com/holtenko",
          "avatar": "https://avatars.githubusercontent.com/u/17680637"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "WMXPY",
          "href": "https://github.com/WMXPY",
          "avatar": "https://avatars.githubusercontent.com/u/5085821"
        }
      ]
    },
    {
      "author": "Leonxlnx",
      "repo": "taste-skill",
      "avatar": "https://github.com/Leonxlnx.png",
      "repo_link": "https://github.com/Leonxlnx/taste-skill",
      "desc": "Taste-Skill - gives your AI good taste. stops the AI from generating boring, generic slop",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6411,
      "added_stars": 2160,
      "builtBy": [
        {
          "username": "Leonxlnx",
          "href": "https://github.com/Leonxlnx",
          "avatar": "https://avatars.githubusercontent.com/u/219127460"
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
          "username": "luojiyin1987",
          "href": "https://github.com/luojiyin1987",
          "avatar": "https://avatars.githubusercontent.com/u/6524977"
        },
        {
          "username": "jkk442",
          "href": "https://github.com/jkk442",
          "avatar": "https://avatars.githubusercontent.com/u/60716205"
        }
      ]
    },
    {
      "author": "akiralereal",
      "repo": "iptv",
      "avatar": "https://github.com/akiralereal.png",
      "repo_link": "https://github.com/akiralereal/iptv",
      "desc": "开箱即有 800+ 可稳定流畅播放频道的自托管 IPTV 直播源管理与分发系统，聚合了央视频、咪咕、央视、卫视、凤凰卫视、亚太、国际、地方台、体育赛事、抖音直播、B 站直播、斗鱼直播、虎牙直播等，以及自定义抓取源和订阅，并提供 EPG 节目单与聚合功能；另外还自带 GUI 可视化管理后台，支持 Docker Compose 或 Node.js 运行，适合 NAS 与家庭服务器。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 364,
      "added_stars": 154,
      "builtBy": [
        {
          "username": "akiralereal",
          "href": "https://github.com/akiralereal",
          "avatar": "https://avatars.githubusercontent.com/u/12994702"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "vitter",
          "href": "https://github.com/vitter",
          "avatar": "https://avatars.githubusercontent.com/u/12093851"
        }
      ]
    },
    {
      "author": "withmarbleapp",
      "repo": "os-taxonomy",
      "avatar": "https://github.com/withmarbleapp.png",
      "repo_link": "https://github.com/withmarbleapp/os-taxonomy",
      "desc": "",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 830,
      "added_stars": 194,
      "builtBy": [
        {
          "username": "lauramionel",
          "href": "https://github.com/lauramionel",
          "avatar": "https://avatars.githubusercontent.com/u/262926223"
        },
        {
          "username": "guillaumeboniface",
          "href": "https://github.com/guillaumeboniface",
          "avatar": "https://avatars.githubusercontent.com/u/2501329"
        }
      ]
    },
    {
      "author": "IRNova",
      "repo": "Nova-Proxy",
      "avatar": "https://github.com/IRNova.png",
      "repo_link": "https://github.com/IRNova/Nova-Proxy",
      "desc": "یک پنل گرافیکی کاربردی برای ارائه اشتراک‌های Worker با پروکسی‌های ، Trojan و Warp به همراه زنجیره پروکسی، ارائه دهنده تنظیمات کامل DNS، IP تمیز و روتینگ پیشرفته برای کاربران تمامی پلتفرم‌ها با استفاده از هسته‌های Amnezia، Wireguard، Sing-box، Clash/Mihomo و Xray.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 785,
      "added_stars": 49,
      "builtBy": [
        {
          "username": "iiviirv",
          "href": "https://github.com/iiviirv",
          "avatar": "https://avatars.githubusercontent.com/u/62857000"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "IRNova",
          "href": "https://github.com/IRNova",
          "avatar": "https://avatars.githubusercontent.com/u/226289179"
        }
      ]
    },
    {
      "author": "kanoqwq",
      "repo": "UFI-TOOLS",
      "avatar": "https://github.com/kanoqwq.png",
      "repo_link": "https://github.com/kanoqwq/UFI-TOOLS",
      "desc": "A functional tools for z*e devices (F50 | U30 Air)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 288,
      "added_stars": 641,
      "builtBy": [
        {
          "username": "kanoqwq",
          "href": "https://github.com/kanoqwq",
          "avatar": "https://avatars.githubusercontent.com/u/33284465"
        },
        {
          "username": "jizni",
          "href": "https://github.com/jizni",
          "avatar": "https://avatars.githubusercontent.com/u/17927350"
        },
        {
          "username": "ikxin",
          "href": "https://github.com/ikxin",
          "avatar": "https://avatars.githubusercontent.com/u/54543761"
        },
        {
          "username": "anhwaivo",
          "href": "https://github.com/anhwaivo",
          "avatar": "https://avatars.githubusercontent.com/u/97143764"
        },
        {
          "username": "fc8",
          "href": "https://github.com/fc8",
          "avatar": "https://avatars.githubusercontent.com/u/45502651"
        }
      ]
    },
    {
      "author": "tabler",
      "repo": "tabler-icons",
      "avatar": "https://github.com/tabler.png",
      "repo_link": "https://github.com/tabler/tabler-icons",
      "desc": "A set of over 6200 free MIT-licensed high-quality SVG icons for you to use in your web projects.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1232,
      "added_stars": 269,
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
          "username": "BGaweda",
          "href": "https://github.com/BGaweda",
          "avatar": "https://avatars.githubusercontent.com/u/73077398"
        },
        {
          "username": "mauriciabad",
          "href": "https://github.com/mauriciabad",
          "avatar": "https://avatars.githubusercontent.com/u/12821361"
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
      "by": "modinfo",
      "descendants": 91,
      "id": 50028275,
      "kids": [
        50029703,
        50029899,
        50028966,
        50028478,
        50028470,
        50029715,
        50029504,
        50029461,
        50030224,
        50029211,
        50028671,
        50030161,
        50028861,
        50028433,
        50029430,
        50028552,
        50028743,
        50028418,
        50028994,
        50028933,
        50029048,
        50029298
      ],
      "score": 291,
      "time": 1791592627,
      "title": "REA Reverse – Engineer Anything",
      "type": "story",
      "url": "https://rea.tools/"
    },
    {
      "by": "ilreb",
      "descendants": 595,
      "id": 50019911,
      "kids": [
        50020072,
        50026512,
        50021907,
        50020818,
        50029765,
        50021206,
        50024230,
        50020609,
        50020269,
        50020119,
        50022983,
        50020922,
        50020037,
        50021125,
        50020153,
        50020899,
        50028069,
        50027705,
        50020538,
        50020940,
        50025085,
        50020124,
        50021714,
        50023750,
        50021175,
        50029119,
        50020699,
        50020499,
        50022731,
        50026071,
        50022623,
        50021272,
        50021717,
        50028959,
        50028609,
        50026221,
        50022847,
        50021731,
        50025915,
        50021039,
        50027914,
        50020200,
        50020074,
        50027485,
        50025348,
        50027338,
        50025940,
        50022392,
        50021837,
        50020519,
        50024305,
        50025467,
        50022686,
        50025376,
        50021067,
        50021812,
        50023963,
        50026990,
        50022931,
        50023848,
        50023845,
        50024776,
        50028412,
        50023709,
        50026441,
        50024239,
        50021747,
        50025318,
        50020825,
        50021682,
        50020763,
        50020199,
        50020165,
        50020720,
        50029085,
        50024811,
        50024119,
        50025327,
        50024200,
        50024047,
        50021468,
        50028489,
        50021372,
        50021953,
        50028216,
        50021991,
        50020141,
        50022354,
        50022797,
        50020653,
        50020946,
        50021397,
        50020710,
        50020428,
        50020362,
        50020423,
        50021063,
        50025403,
        50020322,
        50020752,
        50024845,
        50022249,
        50021749,
        50021470,
        50021486,
        50020260,
        50020646,
        50020262,
        50024969,
        50020209,
        50024231,
        50025539,
        50024707,
        50021494,
        50020328,
        50021110,
        50028309,
        50020308,
        50020140,
        50021894,
        50030255,
        50021358,
        50025281,
        50025351,
        50024706,
        50021753,
        50020299,
        50024321,
        50020944,
        50024861,
        50020489,
        50020131,
        50020845,
        50023463,
        50021741,
        50021729,
        50020139,
        50022851
      ],
      "score": 1157,
      "time": 1791551028,
      "title": "Cloudflare acquires Deno",
      "type": "story",
      "url": "https://deno.com/blog/cloudflare"
    },
    {
      "by": "g-b-r",
      "descendants": 23,
      "id": 50029123,
      "kids": [
        50030303,
        50030173,
        50030116,
        50029673,
        50029877,
        50029746,
        50029639,
        50029124,
        50029822
      ],
      "score": 65,
      "time": 1791601367,
      "title": "Telegram Desktop vulnerability allowed any user's file to be stolen",
      "type": "story",
      "url": "https://beaksec.github.io/posts/telegram-desktop-one-click-account-takeover/"
    },
    {
      "by": "robin_reala",
      "descendants": 165,
      "id": 50022292,
      "kids": [
        50024657,
        50029143,
        50027813,
        50025339,
        50029866,
        50025422,
        50026253,
        50026682,
        50028997,
        50030203,
        50024875,
        50030068,
        50024979,
        50028032,
        50026168,
        50025100,
        50024387,
        50024738,
        50029396,
        50028331,
        50024797,
        50025289,
        50029000,
        50024974,
        50025220,
        50029932,
        50024739,
        50029088,
        50027812,
        50028305,
        50026258,
        50027879,
        50025380,
        50024651,
        50024660,
        50026090,
        50027509,
        50028676,
        50029522,
        50026430,
        50026109,
        50024920,
        50025056,
        50026018,
        50029144,
        50029128,
        50027233,
        50028127,
        50025920,
        50028975,
        50026035,
        50026490,
        50027669,
        50029001,
        50027092,
        50026704,
        50029674,
        50029425,
        50029411,
        50026620,
        50029628,
        50024476,
        50026382,
        50028417,
        50026607,
        50025412,
        50025041,
        50029107,
        50027003,
        50028435,
        50026929,
        50030009,
        50024990,
        50028181,
        50029179,
        50026897,
        50028420,
        50024667,
        50028374,
        50025589,
        50026812,
        50026774,
        50026591,
        50025341,
        50028373,
        50028416,
        50024735,
        50024379,
        50024836,
        50024937,
        50025565,
        50025295,
        50025280,
        50025118,
        50022386,
        50025628,
        50027859,
        50027492,
        50026110,
        50026200,
        50029873,
        50024450,
        50024658
      ],
      "score": 850,
      "time": 1791561065,
      "title": "Triple-A Minesweeper",
      "type": "story",
      "url": "https://minesweeper.mikelacher.com/"
    },
    {
      "by": "ortusdux",
      "descendants": 16,
      "id": 49997481,
      "kids": [
        50030140,
        50030184,
        50029707,
        50030018,
        50029341,
        50029261,
        50029155,
        50029390,
        50029378,
        50029434
      ],
      "score": 94,
      "time": 1791400557,
      "title": "Eye of Sauron: Long-Range Hidden Spy Camera Detection",
      "type": "story",
      "url": "https://www.usenix.org/conference/usenixsecurity24/presentation/zhang-qibo"
    },
    {
      "by": "tosh",
      "descendants": 240,
      "id": 50023450,
      "kids": [
        50024954,
        50025232,
        50024839,
        50025377,
        50025059,
        50029725,
        50025746,
        50025181,
        50027505,
        50024815,
        50024930,
        50025438,
        50026214,
        50025020,
        50026068,
        50028718,
        50026675,
        50029843,
        50025433,
        50026976,
        50027149,
        50025334,
        50026176,
        50024936,
        50025537,
        50026218,
        50025770,
        50029061,
        50024977,
        50026190,
        50026220,
        50026363,
        50026939,
        50026261,
        50026118,
        50027625,
        50026948,
        50027865
      ],
      "score": 337,
      "time": 1791565351,
      "title": "Typesafe AI raises $870M at $7.5B",
      "type": "story",
      "url": "https://typesafe.ai/blog/series-ai"
    },
    {
      "by": "simplyalec",
      "descendants": 35,
      "id": 50024499,
      "kids": [
        50025744,
        50025685,
        50028597,
        50025349,
        50025514,
        50030146,
        50027299,
        50025165,
        50026011,
        50028648,
        50026820,
        50025060,
        50025498,
        50025073,
        50028744,
        50028437,
        50028784,
        50026419
      ],
      "score": 273,
      "text": "Showing off carrier-explode, one of my side projects that continuously archives carrier settings for all major phone brands.<p>carrier-explode also contains decoders and explanations for all the common baseband configurations, etc.<p>There’s still quite a bit of work to be done in checking my assumptions, but the tool has already been proven useful for a few enthusiast groups.",
      "time": 1791569455,
      "title": "Show HN: Carrier-Explode: iPhone, Pixel and Galaxy carrier settings decoded",
      "type": "story",
      "url": "https://carrierexplode.com/"
    },
    {
      "by": "Betelbuddy",
      "descendants": 0,
      "id": 49981264,
      "score": 11,
      "time": 1791306432,
      "title": "How to head into VR without wearing a headset",
      "type": "story",
      "url": "https://www.kyushu-u.ac.jp/en/researches/view/414/"
    },
    {
      "by": "jsomers",
      "descendants": 22,
      "id": 50021410,
      "kids": [
        50029258,
        50029083,
        50030152,
        50029051,
        50029027,
        50028816,
        50030205,
        50029714,
        50029719
      ],
      "score": 58,
      "time": 1791557773,
      "title": "Can you use autoregressive diffusion to generate market data?",
      "type": "story",
      "url": "https://blog.janestreet.com/can-you-use-autoregressive-diffusion-to-generate-market-data/"
    },
    {
      "by": "peter_d_sherman",
      "descendants": 7,
      "id": 50027853,
      "kids": [
        50028376,
        50030243,
        50029819,
        50029868,
        50028771,
        50029307
      ],
      "score": 56,
      "time": 1791588516,
      "title": "Compiling Rust to readable C with Eurydice",
      "type": "story",
      "url": "https://lwn.net/Articles/1055211/"
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
      "title": "Programming Isn’t Special",
      "url": "https://blog.glyph.im/2026/10/programming-isnt-special.html",
      "score": 67,
      "comments": 36,
      "tags": [
        "art",
        "vibecoding"
      ],
      "id": "ily7as"
    },
    {
      "title": "A tale of four theorem provers, or: A (reasonably) opinionated comparison of Isabelle/HOL, Lean, HOL4, and Agda",
      "url": "https://blueberrywren.dev/blog/primes/",
      "score": 31,
      "comments": 6,
      "tags": [
        "design",
        "plt"
      ],
      "id": "4dwrz0"
    },
    {
      "title": "Why Are Coding Agents So Dumb?",
      "url": "https://mtlynch.io/why-are-coding-agents-so-dumb/",
      "score": 32,
      "comments": 15,
      "tags": [
        "rant",
        "vibecoding"
      ],
      "id": "t5htlf"
    },
    {
      "title": "Python 3.15.0",
      "url": "https://www.python.org/downloads/release/python-3150/",
      "score": 37,
      "comments": 2,
      "tags": [
        "python",
        "release"
      ],
      "id": "rpiwtb"
    },
    {
      "title": "Unison Cloud is now open source",
      "url": "https://www.unison-lang.org/blog/unison-cloud-open-source/",
      "score": 40,
      "comments": 2,
      "tags": [
        "release"
      ],
      "id": "zubabn"
    },
    {
      "title": "No Man Is an Island",
      "url": "https://borretti.me/article/no-man-is-an-island",
      "score": 15,
      "comments": 0,
      "tags": [
        "philosophy",
        "vibecoding"
      ],
      "id": "nxspz6"
    },
    {
      "title": "oh, apparently it's not possible to portably check for string-to-float conversion errors in standard c",
      "url": "https://sebsite.pw/w/20261009-strtod.html",
      "score": 4,
      "comments": 0,
      "tags": [
        "c"
      ],
      "id": "rb2ulg"
    },
    {
      "title": "Cloudflare shutting down Deno is news, not just PR",
      "url": "",
      "score": 32,
      "comments": 8,
      "tags": [
        "meta"
      ],
      "id": "8rrtma"
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6340,
      "added_stars": 34560,
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
          "username": "kevin9327",
          "href": "https://github.com/kevin9327",
          "avatar": "https://avatars.githubusercontent.com/u/5299031"
        },
        {
          "username": "jaketame",
          "href": "https://github.com/jaketame",
          "avatar": "https://avatars.githubusercontent.com/u/1787973"
        },
        {
          "username": "velixio",
          "href": "https://github.com/velixio",
          "avatar": "https://avatars.githubusercontent.com/u/270455167"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "financial-services",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/financial-services",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5570,
      "added_stars": 4495,
      "builtBy": [
        {
          "username": "mihilmy",
          "href": "https://github.com/mihilmy",
          "avatar": "https://avatars.githubusercontent.com/u/5457787"
        },
        {
          "username": "cxyback",
          "href": "https://github.com/cxyback",
          "avatar": "https://avatars.githubusercontent.com/u/174142461"
        },
        {
          "username": "manar-ant",
          "href": "https://github.com/manar-ant",
          "avatar": "https://avatars.githubusercontent.com/u/250030384"
        },
        {
          "username": "tobinsouth",
          "href": "https://github.com/tobinsouth",
          "avatar": "https://avatars.githubusercontent.com/u/32489862"
        },
        {
          "username": "viveknair",
          "href": "https://github.com/viveknair",
          "avatar": "https://avatars.githubusercontent.com/u/1203039"
        }
      ]
    },
    {
      "author": "vectorize-io",
      "repo": "hindsight",
      "avatar": "https://github.com/vectorize-io.png",
      "repo_link": "https://github.com/vectorize-io/hindsight",
      "desc": "Hindsight: Agent Memory That Learns",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5980,
      "added_stars": 24617,
      "builtBy": [
        {
          "username": "nicoloboschi",
          "href": "https://github.com/nicoloboschi",
          "avatar": "https://avatars.githubusercontent.com/u/23314389"
        },
        {
          "username": "benfrank241",
          "href": "https://github.com/benfrank241",
          "avatar": "https://avatars.githubusercontent.com/u/62250174"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cdbartholomew",
          "href": "https://github.com/cdbartholomew",
          "avatar": "https://avatars.githubusercontent.com/u/22917476"
        },
        {
          "username": "r266-tech",
          "href": "https://github.com/r266-tech",
          "avatar": "https://avatars.githubusercontent.com/u/233881301"
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
      "forks": 1013,
      "added_stars": 6720,
      "builtBy": [
        {
          "username": "jubaoliang-tencent",
          "href": "https://github.com/jubaoliang-tencent",
          "avatar": "https://avatars.githubusercontent.com/u/309035352"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "jubaoliang",
          "href": "https://github.com/jubaoliang",
          "avatar": "https://avatars.githubusercontent.com/u/222386738"
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3255,
      "added_stars": 4131,
      "builtBy": [
        {
          "username": "jordanecker-ant",
          "href": "https://github.com/jordanecker-ant",
          "avatar": "https://avatars.githubusercontent.com/u/305637556"
        },
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
          "username": "mattpic-ant",
          "href": "https://github.com/mattpic-ant",
          "avatar": "https://avatars.githubusercontent.com/u/227474486"
        }
      ]
    },
    {
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8315,
      "added_stars": 16294,
      "builtBy": [
        {
          "username": "Panniantong",
          "href": "https://github.com/Panniantong",
          "avatar": "https://avatars.githubusercontent.com/u/73925474"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "nyxst4ck",
          "href": "https://github.com/nyxst4ck",
          "avatar": "https://avatars.githubusercontent.com/u/289980115"
        },
        {
          "username": "kadaliao",
          "href": "https://github.com/kadaliao",
          "avatar": "https://avatars.githubusercontent.com/u/7401626"
        },
        {
          "username": "hymansun",
          "href": "https://github.com/hymansun",
          "avatar": "https://avatars.githubusercontent.com/u/10735997"
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
      "forks": 11554,
      "added_stars": 12969,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8870,
      "added_stars": 7174,
      "builtBy": [
        {
          "username": "D4Vinci",
          "href": "https://github.com/D4Vinci",
          "avatar": "https://avatars.githubusercontent.com/u/20604835"
        },
        {
          "username": "yetval",
          "href": "https://github.com/yetval",
          "avatar": "https://avatars.githubusercontent.com/u/102706514"
        },
        {
          "username": "AbdullahY36",
          "href": "https://github.com/AbdullahY36",
          "avatar": "https://avatars.githubusercontent.com/u/52079299"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mhillebrand",
          "href": "https://github.com/mhillebrand",
          "avatar": "https://avatars.githubusercontent.com/u/286198"
        }
      ]
    },
    {
      "author": "VectifyAI",
      "repo": "PageIndex",
      "avatar": "https://github.com/VectifyAI.png",
      "repo_link": "https://github.com/VectifyAI/PageIndex",
      "desc": "📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3383,
      "added_stars": 3566,
      "builtBy": [
        {
          "username": "rejojer",
          "href": "https://github.com/rejojer",
          "avatar": "https://avatars.githubusercontent.com/u/8255061"
        },
        {
          "username": "zmtomorrow",
          "href": "https://github.com/zmtomorrow",
          "avatar": "https://avatars.githubusercontent.com/u/13518252"
        },
        {
          "username": "BukeLy",
          "href": "https://github.com/BukeLy",
          "avatar": "https://avatars.githubusercontent.com/u/19304666"
        },
        {
          "username": "S3DFX-CYBER",
          "href": "https://github.com/S3DFX-CYBER",
          "avatar": "https://avatars.githubusercontent.com/u/213652949"
        },
        {
          "username": "KylinMountain",
          "href": "https://github.com/KylinMountain",
          "avatar": "https://avatars.githubusercontent.com/u/3996229"
        }
      ]
    },
    {
      "author": "superdesigndev",
      "repo": "treg",
      "avatar": "https://github.com/superdesigndev.png",
      "repo_link": "https://github.com/superdesigndev/treg",
      "desc": "OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 402,
      "added_stars": 3654,
      "builtBy": [
        {
          "username": "JayZeeDesign",
          "href": "https://github.com/JayZeeDesign",
          "avatar": "https://avatars.githubusercontent.com/u/22532527"
        },
        {
          "username": "stonexer",
          "href": "https://github.com/stonexer",
          "avatar": "https://avatars.githubusercontent.com/u/6255130"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shehjad-dev",
          "href": "https://github.com/shehjad-dev",
          "avatar": "https://avatars.githubusercontent.com/u/64325867"
        },
        {
          "username": "unclecode",
          "href": "https://github.com/unclecode",
          "avatar": "https://avatars.githubusercontent.com/u/12494079"
        }
      ]
    },
    {
      "author": "asgeirtj",
      "repo": "system_prompts_leaks",
      "avatar": "https://github.com/asgeirtj.png",
      "repo_link": "https://github.com/asgeirtj/system_prompts_leaks",
      "desc": "Documented system prompts from Anthropic - Claude Fable 5.1, Opus 5.5, Claude Design, Claude Code. OpenAI - ChatGPT GPT-6-Astra, Codex. Google - Gemini 3.8 Flash, 3.1 Pro, Antigravity. xAI - Grok, Grok Bot, Cursor, Kimi and more! Updated regularly.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 11255,
      "added_stars": 5092,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1734,
      "added_stars": 3074,
      "builtBy": [
        {
          "username": "rng1995",
          "href": "https://github.com/rng1995",
          "avatar": "https://avatars.githubusercontent.com/u/32655573"
        },
        {
          "username": "keshprad",
          "href": "https://github.com/keshprad",
          "avatar": "https://avatars.githubusercontent.com/u/32313895"
        },
        {
          "username": "yashrajp22",
          "href": "https://github.com/yashrajp22",
          "avatar": "https://avatars.githubusercontent.com/u/282666402"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "davila7",
      "repo": "claude-code-templates",
      "avatar": "https://github.com/davila7.png",
      "repo_link": "https://github.com/davila7/claude-code-templates",
      "desc": "CLI tool for configuring and monitoring Claude Code",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3739,
      "added_stars": 2065,
      "builtBy": [
        {
          "username": "davila7",
          "href": "https://github.com/davila7",
          "avatar": "https://avatars.githubusercontent.com/u/6216945"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "pytorch",
      "repo": "pytorch",
      "avatar": "https://github.com/pytorch.png",
      "repo_link": "https://github.com/pytorch/pytorch",
      "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 31844,
      "added_stars": 1290,
      "builtBy": [
        {
          "username": "pytorchmergebot",
          "href": "https://github.com/pytorchmergebot",
          "avatar": "https://avatars.githubusercontent.com/u/97764156"
        },
        {
          "username": "malfet",
          "href": "https://github.com/malfet",
          "avatar": "https://avatars.githubusercontent.com/u/2453524"
        },
        {
          "username": "ezyang",
          "href": "https://github.com/ezyang",
          "avatar": "https://avatars.githubusercontent.com/u/13564"
        },
        {
          "username": "zou3519",
          "href": "https://github.com/zou3519",
          "avatar": "https://avatars.githubusercontent.com/u/5652049"
        },
        {
          "username": "cyyever",
          "href": "https://github.com/cyyever",
          "avatar": "https://avatars.githubusercontent.com/u/17618148"
        }
      ]
    },
    {
      "author": "home-assistant",
      "repo": "core",
      "avatar": "https://github.com/home-assistant.png",
      "repo_link": "https://github.com/home-assistant/core",
      "desc": "🏡 Open source home automation that puts local control and privacy first.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 38849,
      "added_stars": 1154,
      "builtBy": [
        {
          "username": "balloob",
          "href": "https://github.com/balloob",
          "avatar": "https://avatars.githubusercontent.com/u/1444314"
        },
        {
          "username": "bdraco",
          "href": "https://github.com/bdraco",
          "avatar": "https://avatars.githubusercontent.com/u/663432"
        },
        {
          "username": "epenet",
          "href": "https://github.com/epenet",
          "avatar": "https://avatars.githubusercontent.com/u/6771947"
        },
        {
          "username": "frenck",
          "href": "https://github.com/frenck",
          "avatar": "https://avatars.githubusercontent.com/u/195327"
        },
        {
          "username": "emontnemery",
          "href": "https://github.com/emontnemery",
          "avatar": "https://avatars.githubusercontent.com/u/14281572"
        }
      ]
    },
    {
      "author": "NVIDIA",
      "repo": "Model-Optimizer",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/Model-Optimizer",
      "desc": "A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 737,
      "added_stars": 1501,
      "builtBy": [
        {
          "username": "kevalmorabia97",
          "href": "https://github.com/kevalmorabia97",
          "avatar": "https://avatars.githubusercontent.com/u/28916987"
        },
        {
          "username": "shengliangxu",
          "href": "https://github.com/shengliangxu",
          "avatar": "https://avatars.githubusercontent.com/u/106840466"
        },
        {
          "username": "cjluo-nv",
          "href": "https://github.com/cjluo-nv",
          "avatar": "https://avatars.githubusercontent.com/u/108829653"
        },
        {
          "username": "h-guo18",
          "href": "https://github.com/h-guo18",
          "avatar": "https://avatars.githubusercontent.com/u/67671475"
        },
        {
          "username": "ajrasane",
          "href": "https://github.com/ajrasane",
          "avatar": "https://avatars.githubusercontent.com/u/131806219"
        }
      ]
    },
    {
      "author": "danyuchn",
      "repo": "asd-ste100-skill",
      "avatar": "https://github.com/danyuchn.png",
      "repo_link": "https://github.com/danyuchn/asd-ste100-skill",
      "desc": "ASD-STE100 Simplified Technical English rules, repurposed as a Claude Code skill for rewriting ambiguous agent-facing English.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 245,
      "added_stars": 2352,
      "builtBy": [
        {
          "username": "danyuchn",
          "href": "https://github.com/danyuchn",
          "avatar": "https://avatars.githubusercontent.com/u/130748619"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "KevinGriffin-new",
          "href": "https://github.com/KevinGriffin-new",
          "avatar": "https://avatars.githubusercontent.com/u/117586586"
        },
        {
          "username": "couimet",
          "href": "https://github.com/couimet",
          "avatar": "https://avatars.githubusercontent.com/u/3306418"
        },
        {
          "username": "meehownow",
          "href": "https://github.com/meehownow",
          "avatar": "https://avatars.githubusercontent.com/u/131767147"
        }
      ]
    },
    {
      "author": "docling-project",
      "repo": "docling",
      "avatar": "https://github.com/docling-project.png",
      "repo_link": "https://github.com/docling-project/docling",
      "desc": "Get your documents ready for gen AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5031,
      "added_stars": 2528,
      "builtBy": [
        {
          "username": "dolfim-ibm",
          "href": "https://github.com/dolfim-ibm",
          "avatar": "https://avatars.githubusercontent.com/u/97102151"
        },
        {
          "username": "cau-git",
          "href": "https://github.com/cau-git",
          "avatar": "https://avatars.githubusercontent.com/u/60343111"
        },
        {
          "username": "ceberam",
          "href": "https://github.com/ceberam",
          "avatar": "https://avatars.githubusercontent.com/u/75900930"
        },
        {
          "username": "vagenas",
          "href": "https://github.com/vagenas",
          "avatar": "https://avatars.githubusercontent.com/u/35837085"
        }
      ]
    },
    {
      "author": "tile-ai",
      "repo": "tilelang",
      "avatar": "https://github.com/tile-ai.png",
      "repo_link": "https://github.com/tile-ai/tilelang",
      "desc": "Domain-specific language designed to streamline the development of high-performance GPU/CPU/Accelerators kernels",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 875,
      "added_stars": 1182,
      "builtBy": [
        {
          "username": "LeiWang1999",
          "href": "https://github.com/LeiWang1999",
          "avatar": "https://avatars.githubusercontent.com/u/34334180"
        },
        {
          "username": "chengyupku",
          "href": "https://github.com/chengyupku",
          "avatar": "https://avatars.githubusercontent.com/u/54519279"
        },
        {
          "username": "SiriusNEO",
          "href": "https://github.com/SiriusNEO",
          "avatar": "https://avatars.githubusercontent.com/u/41781658"
        },
        {
          "username": "Rachmanino",
          "href": "https://github.com/Rachmanino",
          "avatar": "https://avatars.githubusercontent.com/u/109033598"
        },
        {
          "username": "xwhzz",
          "href": "https://github.com/xwhzz",
          "avatar": "https://avatars.githubusercontent.com/u/132904306"
        }
      ]
    },
    {
      "author": "multimodal-art-projection",
      "repo": "YuE",
      "avatar": "https://github.com/multimodal-art-projection.png",
      "repo_link": "https://github.com/multimodal-art-projection/YuE",
      "desc": "YuE2: frontier music generation with symbolic planning, zero-shot covers, and agentic music editing.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1259,
      "added_stars": 4788,
      "builtBy": [
        {
          "username": "a43992899",
          "href": "https://github.com/a43992899",
          "avatar": "https://avatars.githubusercontent.com/u/30723625"
        },
        {
          "username": "hf-lin",
          "href": "https://github.com/hf-lin",
          "avatar": "https://avatars.githubusercontent.com/u/153443201"
        },
        {
          "username": "instr3",
          "href": "https://github.com/instr3",
          "avatar": "https://avatars.githubusercontent.com/u/13694510"
        },
        {
          "username": "Yiming-Liang",
          "href": "https://github.com/Yiming-Liang",
          "avatar": "https://avatars.githubusercontent.com/u/154485721"
        },
        {
          "username": "fengshi-cherish",
          "href": "https://github.com/fengshi-cherish",
          "avatar": "https://avatars.githubusercontent.com/u/22573687"
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
      "author": "paperclipai",
      "repo": "paperclip",
      "avatar": "https://github.com/paperclipai.png",
      "repo_link": "https://github.com/paperclipai/paperclip",
      "desc": "The open-source app everyone uses to manage agents at work",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16766,
      "added_stars": 19137,
      "builtBy": [
        {
          "username": "cryppadotta",
          "href": "https://github.com/cryppadotta",
          "avatar": "https://avatars.githubusercontent.com/u/34892728"
        },
        {
          "username": "Paperclip-Paperclip",
          "href": "https://github.com/Paperclip-Paperclip",
          "avatar": "https://avatars.githubusercontent.com/u/271391591"
        },
        {
          "username": "devinfoley",
          "href": "https://github.com/devinfoley",
          "avatar": "https://avatars.githubusercontent.com/u/139239"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "nickyleach",
          "href": "https://github.com/nickyleach",
          "avatar": "https://avatars.githubusercontent.com/u/331803"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "claude-code",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-code",
      "desc": "Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 25987,
      "added_stars": 6173,
      "builtBy": [
        {
          "username": "actions-user",
          "href": "https://github.com/actions-user",
          "avatar": "https://avatars.githubusercontent.com/u/65916846"
        },
        {
          "username": "poteat",
          "href": "https://github.com/poteat",
          "avatar": "https://avatars.githubusercontent.com/u/7668446"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "bcherny",
          "href": "https://github.com/bcherny",
          "avatar": "https://avatars.githubusercontent.com/u/1761758"
        },
        {
          "username": "ant-kurt",
          "href": "https://github.com/ant-kurt",
          "avatar": "https://avatars.githubusercontent.com/u/209710463"
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
      "forks": 5350,
      "added_stars": 11576,
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
    },
    {
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1877,
      "added_stars": 4398,
      "builtBy": [
        {
          "username": "mksglu",
          "href": "https://github.com/mksglu",
          "avatar": "https://avatars.githubusercontent.com/u/6067714"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "ipedro",
          "href": "https://github.com/ipedro",
          "avatar": "https://avatars.githubusercontent.com/u/380338"
        },
        {
          "username": "ousamabenyounes",
          "href": "https://github.com/ousamabenyounes",
          "avatar": "https://avatars.githubusercontent.com/u/2910651"
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
      "forks": 4520,
      "added_stars": 7455,
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
      "forks": 1006,
      "added_stars": 3503,
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
          "username": "minupalaniappan",
          "href": "https://github.com/minupalaniappan",
          "avatar": "https://avatars.githubusercontent.com/u/2145689"
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
        }
      ]
    },
    {
      "author": "LibreChat-AI",
      "repo": "LibreChat",
      "avatar": "https://github.com/LibreChat-AI.png",
      "repo_link": "https://github.com/LibreChat-AI/LibreChat",
      "desc": "Enhanced ChatGPT Clone: Features Agents, MCP, Skills, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, GPT-5, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions, Secure Multi-User Auth, Presets, open-source for self-hosting. Active",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9336,
      "added_stars": 2900,
      "builtBy": [
        {
          "username": "danny-avila",
          "href": "https://github.com/danny-avila",
          "avatar": "https://avatars.githubusercontent.com/u/110412045"
        },
        {
          "username": "berry-13",
          "href": "https://github.com/berry-13",
          "avatar": "https://avatars.githubusercontent.com/u/81851188"
        },
        {
          "username": "dustinhealy",
          "href": "https://github.com/dustinhealy",
          "avatar": "https://avatars.githubusercontent.com/u/54083382"
        }
      ]
    },
    {
      "author": "spotify",
      "repo": "portal-ai-plugins",
      "avatar": "https://github.com/spotify.png",
      "repo_link": "https://github.com/spotify/portal-ai-plugins",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 199,
      "added_stars": 1778,
      "builtBy": [
        {
          "username": "djamaile",
          "href": "https://github.com/djamaile",
          "avatar": "https://avatars.githubusercontent.com/u/15789670"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "sorantis",
          "href": "https://github.com/sorantis",
          "avatar": "https://avatars.githubusercontent.com/u/1685068"
        }
      ]
    },
    {
      "author": "supabase",
      "repo": "supabase",
      "avatar": "https://github.com/supabase.png",
      "repo_link": "https://github.com/supabase/supabase",
      "desc": "The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16287,
      "added_stars": 2648,
      "builtBy": [
        {
          "username": "joshenlim",
          "href": "https://github.com/joshenlim",
          "avatar": "https://avatars.githubusercontent.com/u/19742402"
        },
        {
          "username": "kiwicopple",
          "href": "https://github.com/kiwicopple",
          "avatar": "https://avatars.githubusercontent.com/u/10214025"
        },
        {
          "username": "MildTomato",
          "href": "https://github.com/MildTomato",
          "avatar": "https://avatars.githubusercontent.com/u/8291514"
        },
        {
          "username": "saltcod",
          "href": "https://github.com/saltcod",
          "avatar": "https://avatars.githubusercontent.com/u/105593"
        },
        {
          "username": "alaister",
          "href": "https://github.com/alaister",
          "avatar": "https://avatars.githubusercontent.com/u/10985857"
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
      "forks": 6966,
      "added_stars": 4559,
      "builtBy": [
        {
          "username": "juliusmarminge",
          "href": "https://github.com/juliusmarminge",
          "avatar": "https://avatars.githubusercontent.com/u/51714798"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
          "username": "maria-rcks",
          "href": "https://github.com/maria-rcks",
          "avatar": "https://avatars.githubusercontent.com/u/254055478"
        }
      ]
    },
    {
      "author": "cline",
      "repo": "cline",
      "avatar": "https://github.com/cline.png",
      "repo_link": "https://github.com/cline/cline",
      "desc": "Autonomous coding agent as an SDK, IDE extension, or CLI assistant.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7628,
      "added_stars": 2782,
      "builtBy": [
        {
          "username": "saoudrizwan",
          "href": "https://github.com/saoudrizwan",
          "avatar": "https://avatars.githubusercontent.com/u/7799382"
        },
        {
          "username": "abeatrix",
          "href": "https://github.com/abeatrix",
          "avatar": "https://avatars.githubusercontent.com/u/68532117"
        },
        {
          "username": "celestial-vault",
          "href": "https://github.com/celestial-vault",
          "avatar": "https://avatars.githubusercontent.com/u/58194240"
        },
        {
          "username": "arafatkatze",
          "href": "https://github.com/arafatkatze",
          "avatar": "https://avatars.githubusercontent.com/u/11155207"
        },
        {
          "username": "BarreiroT",
          "href": "https://github.com/BarreiroT",
          "avatar": "https://avatars.githubusercontent.com/u/52393857"
        }
      ]
    },
    {
      "author": "vastsa",
      "repo": "PI-Desktop",
      "avatar": "https://github.com/vastsa.png",
      "repo_link": "https://github.com/vastsa/PI-Desktop",
      "desc": "Local-first AI coding agent desktop: Electron + Rust host core + pi Agent Harness + user-installable plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 613,
      "added_stars": 5117,
      "builtBy": [
        {
          "username": "vastsa",
          "href": "https://github.com/vastsa",
          "avatar": "https://avatars.githubusercontent.com/u/48862574"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Tioit-Wang",
          "href": "https://github.com/Tioit-Wang",
          "avatar": "https://avatars.githubusercontent.com/u/104554654"
        },
        {
          "username": "zszz3",
          "href": "https://github.com/zszz3",
          "avatar": "https://avatars.githubusercontent.com/u/91608029"
        },
        {
          "username": "muzimu217",
          "href": "https://github.com/muzimu217",
          "avatar": "https://avatars.githubusercontent.com/u/201334833"
        }
      ]
    },
    {
      "author": "FxEmbed",
      "repo": "FxEmbed",
      "avatar": "https://github.com/FxEmbed.png",
      "repo_link": "https://github.com/FxEmbed/FxEmbed",
      "desc": "Fix X/Twitter and Bluesky embeds! Use multiple images, videos, polls, translations and more on Discord, Telegram and others",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 272,
      "added_stars": 705,
      "builtBy": [
        {
          "username": "dangeredwolf",
          "href": "https://github.com/dangeredwolf",
          "avatar": "https://avatars.githubusercontent.com/u/2636265"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "Wazbat",
          "href": "https://github.com/Wazbat",
          "avatar": "https://avatars.githubusercontent.com/u/6253896"
        }
      ]
    },
    {
      "author": "Effect-TS",
      "repo": "effect",
      "avatar": "https://github.com/Effect-TS.png",
      "repo_link": "https://github.com/Effect-TS/effect",
      "desc": "Build production-ready applications in TypeScript",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 846,
      "added_stars": 1292,
      "builtBy": [
        {
          "username": "mikearnaldi",
          "href": "https://github.com/mikearnaldi",
          "avatar": "https://avatars.githubusercontent.com/u/24249610"
        },
        {
          "username": "tim-smart",
          "href": "https://github.com/tim-smart",
          "avatar": "https://avatars.githubusercontent.com/u/40680"
        },
        {
          "username": "gcanti",
          "href": "https://github.com/gcanti",
          "avatar": "https://avatars.githubusercontent.com/u/878912"
        },
        {
          "username": "fubhy",
          "href": "https://github.com/fubhy",
          "avatar": "https://avatars.githubusercontent.com/u/1172528"
        }
      ]
    },
    {
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8674,
      "added_stars": 5830,
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
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "rodboev",
          "href": "https://github.com/rodboev",
          "avatar": "https://avatars.githubusercontent.com/u/106971"
        }
      ]
    },
    {
      "author": "miuuyy",
      "repo": "codex-chatgpt-web",
      "avatar": "https://github.com/miuuyy.png",
      "repo_link": "https://github.com/miuuyy/codex-chatgpt-web",
      "desc": "Use ChatGPT Web (including Pro) as a native model in Codex — with context, tools, streaming and images, without using Codex quota.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1087,
      "added_stars": 8044,
      "builtBy": [
        {
          "username": "miuuyy",
          "href": "https://github.com/miuuyy",
          "avatar": "https://avatars.githubusercontent.com/u/147659719"
        },
        {
          "username": "1saifj",
          "href": "https://github.com/1saifj",
          "avatar": "https://avatars.githubusercontent.com/u/31359390"
        },
        {
          "username": "jamie950315",
          "href": "https://github.com/jamie950315",
          "avatar": "https://avatars.githubusercontent.com/u/79763225"
        },
        {
          "username": "David-T-Campos",
          "href": "https://github.com/David-T-Campos",
          "avatar": "https://avatars.githubusercontent.com/u/132998405"
        },
        {
          "username": "kocourekwork-sudo",
          "href": "https://github.com/kocourekwork-sudo",
          "avatar": "https://avatars.githubusercontent.com/u/268165008"
        }
      ]
    },
    {
      "author": "dream-num",
      "repo": "univer",
      "avatar": "https://github.com/dream-num.png",
      "repo_link": "https://github.com/dream-num/univer",
      "desc": "The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1880,
      "added_stars": 8316,
      "builtBy": [
        {
          "username": "jikkai",
          "href": "https://github.com/jikkai",
          "avatar": "https://avatars.githubusercontent.com/u/14025786"
        },
        {
          "username": "DR-Univer",
          "href": "https://github.com/DR-Univer",
          "avatar": "https://avatars.githubusercontent.com/u/68851825"
        },
        {
          "username": "wzhudev",
          "href": "https://github.com/wzhudev",
          "avatar": "https://avatars.githubusercontent.com/u/12122021"
        },
        {
          "username": "wpxp123456",
          "href": "https://github.com/wpxp123456",
          "avatar": "https://avatars.githubusercontent.com/u/26315959"
        },
        {
          "username": "Dushusir",
          "href": "https://github.com/Dushusir",
          "avatar": "https://avatars.githubusercontent.com/u/26371161"
        }
      ]
    },
    {
      "author": "Open-Dev-Society",
      "repo": "OpenStock",
      "avatar": "https://github.com/Open-Dev-Society.png",
      "repo_link": "https://github.com/Open-Dev-Society/OpenStock",
      "desc": "OpenStock is an open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights — built openly, for everyone, forever free.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2447,
      "added_stars": 5821,
      "builtBy": [
        {
          "username": "ravixalgorithm",
          "href": "https://github.com/ravixalgorithm",
          "avatar": "https://avatars.githubusercontent.com/u/148683640"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "keshav-005",
          "href": "https://github.com/keshav-005",
          "avatar": "https://avatars.githubusercontent.com/u/180140750"
        },
        {
          "username": "nb-src",
          "href": "https://github.com/nb-src",
          "avatar": "https://avatars.githubusercontent.com/u/76625701"
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
      "forks": 1227,
      "added_stars": 4190,
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
      "author": "melgarafael",
      "repo": "DeskcommCRM",
      "avatar": "https://github.com/melgarafael.png",
      "repo_link": "https://github.com/melgarafael/DeskcommCRM",
      "desc": "Open-source AI sales OS — self-hosted CRM with native AI agents + WhatsApp (WAHA). Open alternative to Kommo, Octadesk & Intercom for any business that sells by chat. MCP-ready, multi-tenant, LGPD.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1196,
      "added_stars": 3798,
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
          "username": "paulolimajr77",
          "href": "https://github.com/paulolimajr77",
          "avatar": "https://avatars.githubusercontent.com/u/60278689"
        },
        {
          "username": "jmpo",
          "href": "https://github.com/jmpo",
          "avatar": "https://avatars.githubusercontent.com/u/23352109"
        }
      ]
    },
    {
      "author": "pablostanley",
      "repo": "yoinks",
      "avatar": "https://github.com/pablostanley.png",
      "repo_link": "https://github.com/pablostanley/yoinks",
      "desc": "yoink any video from your terminal. no shady ads.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 476,
      "added_stars": 3927,
      "builtBy": [
        {
          "username": "pablostanley",
          "href": "https://github.com/pablostanley",
          "avatar": "https://avatars.githubusercontent.com/u/7430988"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "reconurge",
      "repo": "flowsint",
      "avatar": "https://github.com/reconurge.png",
      "repo_link": "https://github.com/reconurge/flowsint",
      "desc": "A modern platform for visual, flexible, and extensible graph-based investigations. For cybersecurity analysts and investigators.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1176,
      "added_stars": 2014,
      "builtBy": [
        {
          "username": "dextmorgn",
          "href": "https://github.com/dextmorgn",
          "avatar": "https://avatars.githubusercontent.com/u/64375473"
        },
        {
          "username": "Ghraven",
          "href": "https://github.com/Ghraven",
          "avatar": "https://avatars.githubusercontent.com/u/115199279"
        },
        {
          "username": "gustavorps",
          "href": "https://github.com/gustavorps",
          "avatar": "https://avatars.githubusercontent.com/u/516827"
        },
        {
          "username": "rachit367",
          "href": "https://github.com/rachit367",
          "avatar": "https://avatars.githubusercontent.com/u/185813792"
        },
        {
          "username": "z3rodaycve",
          "href": "https://github.com/z3rodaycve",
          "avatar": "https://avatars.githubusercontent.com/u/241736084"
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
      "title": "Dev Opportunity Radar #20: $2M AI Reasoning Challenge, PayPal AI Hackathon, and Coinbase Analytics Challenge",
      "description": "TL;DR  Welcome back to Dev Opportunity Radar.  This is a weekly series where I share opportunities,...",
      "url": "https://dev.to/devengers/dev-opportunity-radar-20-2m-ai-reasoning-challenge-paypal-ai-hackathon-and-coinbase-analytics-1fec",
      "tags": "discuss, community, resources, opportunities",
      "reactions": 82,
      "comments": 10,
      "reading_time": 10,
      "author": "hemapriya_kanagala"
    },
    {
      "title": "Llama Village: a virtual world powered by local AI with llamadart",
      "description": "Llama Village in motion. The characters’ dialogue is generated by an on-device model.  Watch the...",
      "url": "https://dev.to/gde/llama-village-a-virtual-world-powered-by-local-ai-with-llamadart-3lmi",
      "tags": "flutter, ai, gamedev, showdev",
      "reactions": 16,
      "comments": 8,
      "reading_time": 6,
      "author": "leehack"
    },
    {
      "title": "I got Jev to zero mistakes. I'm still using Flash-Lite.",
      "description": "Jev is a brilliant decision model. Gemini Flash-Lite is the model nobody talks about, and it’s fast,...",
      "url": "https://dev.to/theycallmeswift/i-got-jev-to-zero-mistakes-im-still-using-flash-lite-2mo7",
      "tags": "ai, gemini, testing, jev",
      "reactions": 34,
      "comments": 15,
      "reading_time": 11,
      "author": "theycallmeswift"
    },
    {
      "title": "Congrats to Our First MLH x DEV Writing Challenge Winner!",
      "description": "We just wrapped the very first month of the MLH x DEV Writing Challenge, our new way of celebrating...",
      "url": "https://dev.to/devteam/congrats-to-our-first-mlh-x-dev-writing-challenge-winner-1c4l",
      "tags": "mlhacks, devchallenge, hackathon, ai",
      "reactions": 17,
      "comments": 2,
      "reading_time": 2,
      "author": "heyitsjem"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-1682",
      "tags": "top7, discuss",
      "reactions": 56,
      "comments": 25,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Why you still need a Website Portfolio, even though everyone can Vibe Code it.",
      "description": "If you have been following me for a long time, you already know that I have been holding off on my...",
      "url": "https://dev.to/francistrdev/why-you-still-need-a-website-portfolio-even-though-everyone-can-vibe-code-it-e63",
      "tags": "discuss, community, showdev, a11y",
      "reactions": 245,
      "comments": 219,
      "reading_time": 7,
      "author": "francistrdev"
    },
    {
      "title": "Congrats to the Hacktoberfest Weekend Challenge: Build for a Friend Winners!",
      "description": "We are so excited to announce the winners of the Hacktoberfest Weekend Challenge: Build for a Friend,...",
      "url": "https://dev.to/devteam/congrats-to-the-hacktoberfest-weekend-challenge-build-for-a-friend-winners-pgc",
      "tags": "devchallenge, weekendchallenge, hf26challenge",
      "reactions": 61,
      "comments": 17,
      "reading_time": 4,
      "author": "heyitsjem"
    },
    {
      "title": "Gemma 4 From E2B to 31B on an AMD MI300X: fp8 Overtakes bf16 From 12B Up",
      "description": "Every Gemma 4 size from E2B to 31B served on one AMD Instinct MI300X in bf16, fp8, int8 W8A8 and int4 W4A16, on the same vLLM image. fp8 goes from 0.75x bf16 for one request at E2B to 1.23x at 31B and is faster than bf16 in every cell at 12B and 31B. The mixture-of-experts 26B sits at bf16's pace, and the 4-bit builds run at 0.14x to 0.69x at every size.",
      "url": "https://dev.to/gde/gemma-4-from-e2b-to-31b-on-an-amd-mi300x-fp8-overtakes-bf16-from-12b-up-h4e",
      "tags": "gemma, amd, machinelearning, llm",
      "reactions": 8,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Stuart Feldman Was Right in 1976: Why Your AI Agent Needs a Makefile, Not a 20-Step Prompt",
      "description": "How replacing fragile linear prompt checklists with a 50-year-old declarative build graph eliminates agent amnesia, enables seamless mid-flight session resumption, and mechanizes software engineering governance.",
      "url": "https://dev.to/gde/stuart-feldman-was-right-in-1976-why-your-ai-agent-needs-a-makefile-not-a-20-step-prompt-5bn2",
      "tags": "ai, programming, architecture, productivity",
      "reactions": 14,
      "comments": 17,
      "reading_time": 11,
      "author": "randalschwartz"
    },
    {
      "title": "What was your win this week??",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-1l3f",
      "tags": "weeklyretro",
      "reactions": 22,
      "comments": 8,
      "reading_time": 1,
      "author": "jess"
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
      "title": "PLOT 🌿 - TabPFN on Real Frost Data Tells You to Touch Grass",
      "description": "This is a submission for the Hacktoberfest Open-Source AI Challenge Week 1: Touch Grass 🌿            ...",
      "url": "https://dev.to/pranjal_manhgaye_d94d7a8f/plot-tabpfn-on-real-frost-data-tells-you-to-touch-grass-54k1",
      "tags": "devchallenge, hf26challenge, productivity, webdev",
      "reactions": 65,
      "comments": 7,
      "reading_time": 5,
      "author": "pranjal_manhgaye_d94d7a8f"
    },
    {
      "title": "My $0 Coding Workflow: Free Tools That Replaced Paid Subscriptions",
      "description": "If you didn't know, the average monthly income in the US can be many times higher than in India. That...",
      "url": "https://dev.to/effessdev/my-0-coding-workflow-free-tools-that-replaced-paid-subscriptions-3pfc",
      "tags": "ai, productivity, beginners, programming",
      "reactions": 5,
      "comments": 1,
      "reading_time": 3,
      "author": "effessdev"
    },
    {
      "title": "Claude Code's keep-coding-instructions kept 1,044 tokens in the full prompt, 0 in the short one, and 18 of 18 fixes matched",
      "description": "On Claude Code 2.1.289 with Opus 5.5, keep-coding-instructions: true decided whether a 1,044-token #...",
      "url": "https://dev.to/rulestack/claude-codes-keep-coding-instructions-kept-1044-tokens-in-the-full-prompt-0-in-the-short-one-8np",
      "tags": "claudecode, claude, promptengineering, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 16,
      "author": "rulestack"
    },
    {
      "title": "My coding agents don't need a project management tool. They need markdown files.",
      "description": "My coding agents used to read their tasks from a hosted tracker. They never needed one. They needed a...",
      "url": "https://dev.to/anojanst/my-coding-agents-dont-need-a-project-management-tool-they-need-markdown-files-2m0i",
      "tags": "opensource, productivity, cli, ai",
      "reactions": 0,
      "comments": 1,
      "reading_time": 5,
      "author": "anojanst"
    },
    {
      "title": "7 Real Problems I Faced While Building a Real-Time Chat Application",
      "description": "Building a real-time chat application sounds pretty straightforward at first.  You create a login...",
      "url": "https://dev.to/ehan_siddique/7-real-problems-i-faced-while-building-a-real-time-chat-application-1m3k",
      "tags": "webdev, programming, productivity, javascript",
      "reactions": 0,
      "comments": 2,
      "reading_time": 10,
      "author": "ehan_siddique"
    },
    {
      "title": "My Claude Code chief of staff: one VM, eight specialists and one Telegram chat",
      "description": "For the last week, most of my work outside meetings has gone through one conversation. I send a text...",
      "url": "https://dev.to/rss_holmes/my-claude-code-chief-of-staff-one-vm-eight-specialists-and-one-telegram-chat-25d8",
      "tags": "claude, ai, agents, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "rss_holmes"
    },
    {
      "title": "Read the Methods First: A Mind Map Habit for Literature Reviews",
      "description": "If you work in ML or CS, your reading list probably grows faster than your notes. A dozen arXiv...",
      "url": "https://dev.to/jason_mindlm/read-the-methods-first-a-mind-map-habit-for-literature-reviews-2co9",
      "tags": "research, productivity, machinelearning, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "jason_mindlm"
    },
    {
      "title": "The Cheapest Intelligence Product I Know Sells to Resellers, Not Analysts",
      "description": "Most \"OSINT for business\" content targets security teams. But the cheapest useful intelligence...",
      "url": "https://dev.to/yuhehe/the-cheapest-intelligence-product-i-know-sells-to-resellers-not-analysts-1npp",
      "tags": "osint, datascience, productivity, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "yuhehe"
    },
    {
      "title": "Why 90% of Tech Resumes Fail Corporate ATS Parsers (And What We Learned Building an ATS Debugger)",
      "description": "As software engineers, we obsess over deterministic logic, zero-downtime deployments, and clean...",
      "url": "https://dev.to/saybuff/why-90-of-tech-resumes-fail-corporate-ats-parsers-and-what-we-learned-building-an-ats-debugger-5hdn",
      "tags": "career, webdev, ai, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 3,
      "author": "saybuff"
    },
    {
      "title": "Dictating the prose parts of a developer's day on Windows (commit messages, PR descriptions, issue replies)",
      "description": "A lot of what a developer types in a day is not code. It is commit messages, pull request...",
      "url": "https://dev.to/ashwar_sadh_f7abe6f82c8e9/dictating-the-prose-parts-of-a-developers-day-on-windows-commit-messages-pr-descriptions-issue-47i",
      "tags": "productivity, a11y, windows, android",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "ashwar_sadh_f7abe6f82c8e9"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

