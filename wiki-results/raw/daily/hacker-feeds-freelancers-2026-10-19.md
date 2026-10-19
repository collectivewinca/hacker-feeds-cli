# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-10-19 06:50:41 UTC

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
      "author": "michael-denyer",
      "repo": "pstack-claude",
      "avatar": "https://github.com/michael-denyer.png",
      "repo_link": "https://github.com/michael-denyer/pstack-claude",
      "desc": "Claude Code, Codex, Copilot, Pi, OpenCode, Gemini, and Prime Agent versions of Poteto's pstack. Rigorous agent workflows with Cursor primitives translated for other harnesses.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 287,
      "added_stars": 1152,
      "builtBy": [
        {
          "username": "michael-denyer",
          "href": "https://github.com/michael-denyer",
          "avatar": "https://avatars.githubusercontent.com/u/97485362"
        },
        {
          "username": "EthanYoQ",
          "href": "https://github.com/EthanYoQ",
          "avatar": "https://avatars.githubusercontent.com/u/257484394"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "harrymunro",
          "href": "https://github.com/harrymunro",
          "avatar": "https://avatars.githubusercontent.com/u/13261778"
        },
        {
          "username": "younes-io",
          "href": "https://github.com/younes-io",
          "avatar": "https://avatars.githubusercontent.com/u/3153107"
        }
      ]
    },
    {
      "author": "DuarteSantos8",
      "repo": "openGym",
      "avatar": "https://github.com/DuarteSantos8.png",
      "repo_link": "https://github.com/DuarteSantos8/openGym",
      "desc": "Self-hosted gym & body-weight tracker — plan routines, log workouts (supersets, warm-ups, cardio), see which muscles are trained, fatigued or detrained, import from FitNotes/Strong/Hevy, passkey login. Your data, your server.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1702,
      "added_stars": 3834,
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
      "author": "hmjz100",
      "repo": "LinkSwift",
      "avatar": "https://github.com/hmjz100.png",
      "repo_link": "https://github.com/hmjz100/LinkSwift",
      "desc": "一个基于 JavaScript 的网盘文件下载地址获取工具。基于【网盘直链下载助手】修改 ，支持 百度网盘 / 阿里云盘 / 中国移动云盘 / 天翼云盘 / 迅雷云盘 / 夸克网盘 / UC网盘 / 123云盘 八大网盘",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1626,
      "added_stars": 3457,
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
          "username": "DeepslateQAQ",
          "href": "https://github.com/DeepslateQAQ",
          "avatar": "https://avatars.githubusercontent.com/u/46892455"
        },
        {
          "username": "bilili-syy",
          "href": "https://github.com/bilili-syy",
          "avatar": "https://avatars.githubusercontent.com/u/61721162"
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
      "forks": 975,
      "added_stars": 900,
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
      "author": "react",
      "repo": "react",
      "avatar": "https://github.com/react.png",
      "repo_link": "https://github.com/react/react",
      "desc": "The library for web and native user interfaces.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 51538,
      "added_stars": 713,
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
      "author": "greensock",
      "repo": "GSAP",
      "avatar": "https://github.com/greensock.png",
      "repo_link": "https://github.com/greensock/GSAP",
      "desc": "GSAP (GreenSock Animation Platform), a JavaScript animation library for the modern web",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2274,
      "added_stars": 380,
      "builtBy": [
        {
          "username": "jackdoyle",
          "href": "https://github.com/jackdoyle",
          "avatar": "https://avatars.githubusercontent.com/u/2389714"
        },
        {
          "username": "PeterDaveHello",
          "href": "https://github.com/PeterDaveHello",
          "avatar": "https://avatars.githubusercontent.com/u/3691490"
        }
      ]
    },
    {
      "author": "Minglink",
      "repo": "dsh-infinite-gen-5",
      "avatar": "https://github.com/Minglink.png",
      "repo_link": "https://github.com/Minglink/dsh-infinite-gen-5",
      "desc": "DeepSeek v4.1 flash 逆向工具（无限五代） 求 Star 收藏 ⭐欢迎大家提交项目的改进",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 321,
      "added_stars": 427,
      "builtBy": [
        {
          "username": "Minglink",
          "href": "https://github.com/Minglink",
          "avatar": "https://avatars.githubusercontent.com/u/108618469"
        },
        {
          "username": "JacksonsY",
          "href": "https://github.com/JacksonsY",
          "avatar": "https://avatars.githubusercontent.com/u/64361320"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "XAN9xXx",
          "href": "https://github.com/XAN9xXx",
          "avatar": "https://avatars.githubusercontent.com/u/237037184"
        }
      ]
    },
    {
      "author": "plugin87",
      "repo": "ux-ui-agent-skills",
      "avatar": "https://github.com/plugin87.png",
      "repo_link": "https://github.com/plugin87/ux-ui-agent-skills",
      "desc": "Turn Claude into a senior design architect: DTCG tokens, 52 components, WCAG 2.2 AA-AAA, 138 design systems, any-framework code, and 50 objective gates that fail the build instead of faking success.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 250,
      "added_stars": 692,
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
      "author": "elysia395",
      "repo": "dsh-wallpaper-engine",
      "avatar": "https://github.com/elysia395.png",
      "repo_link": "https://github.com/elysia395/dsh-wallpaper-engine",
      "desc": "把本机 Wallpaper Engine 的壁纸搬进 DSH 网页界面：场景壁纸由内置 MIT 开源引擎 WebWallGL 实时 WebGL 渲染（粒子 / puppet 骨骼 / SceneScript / 音频反应 / 鼠标交互），失败自动降级内嵌 MP4 与场景静态帧；Web 壁纸严格沙箱 + WE API；iOS 风格液态玻璃 UI 高度自定义，遮挡暂停省电、ffmpeg 帧率上限转码、系统音频频谱与 Now Playing、自定义上传与自动轮播；设置存宿主端，对 agent 零 token 开销。Windows / macOS / Linux 三平台原生（同一个包、同一条命令）。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 63,
      "added_stars": 551,
      "builtBy": [
        {
          "username": "YV3507",
          "href": "https://github.com/YV3507",
          "avatar": "https://avatars.githubusercontent.com/u/184193300"
        },
        {
          "username": "oneincase",
          "href": "https://github.com/oneincase",
          "avatar": "https://avatars.githubusercontent.com/u/57388318"
        },
        {
          "username": "elysia395",
          "href": "https://github.com/elysia395",
          "avatar": "https://avatars.githubusercontent.com/u/182482545"
        },
        {
          "username": "yuxilao",
          "href": "https://github.com/yuxilao",
          "avatar": "https://avatars.githubusercontent.com/u/50688264"
        },
        {
          "username": "levodoubt",
          "href": "https://github.com/levodoubt",
          "avatar": "https://avatars.githubusercontent.com/u/268188883"
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
      "by": "samizdis",
      "descendants": 5,
      "id": 50131315,
      "kids": [
        50149073,
        50148941
      ],
      "score": 28,
      "time": 1792246056,
      "title": "Rabbits were a medieval royal luxury in England until the Black Death",
      "type": "story",
      "url": "https://phys.org/news/2026-10-rabbits-medieval-royal-luxury-england.html"
    },
    {
      "by": "allinonai",
      "descendants": 163,
      "id": 50145337,
      "kids": [
        50147908,
        50145696,
        50147768,
        50146255,
        50148928,
        50146496,
        50146330,
        50145990,
        50145678,
        50146820,
        50145692,
        50146204,
        50146427,
        50146809,
        50145677,
        50146572,
        50146373,
        50147842,
        50147502,
        50145872,
        50146628,
        50145878,
        50145751,
        50145525,
        50146437,
        50146765,
        50146729,
        50146459,
        50148751,
        50147382,
        50148777,
        50146123,
        50147762,
        50145580,
        50145488,
        50148249,
        50146262
      ],
      "score": 340,
      "text": "<a href=\"https:&#x2F;&#x2F;x.com&#x2F;Jiaru_Zou&#x2F;status&#x2F;2110400256647340476\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;Jiaru_Zou&#x2F;status&#x2F;2110400256647340476</a><p><a href=\"https:&#x2F;&#x2F;github.com&#x2F;togethercomputer&#x2F;HybridAgent\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;togethercomputer&#x2F;HybridAgent</a><p><a href=\"https:&#x2F;&#x2F;huggingface.co&#x2F;collections&#x2F;togethercomputer&#x2F;hybridagent\" rel=\"nofollow\">https:&#x2F;&#x2F;huggingface.co&#x2F;collections&#x2F;togethercomputer&#x2F;hybridag...</a><p>Evaluations: <a href=\"https:&#x2F;&#x2F;arxiv.org&#x2F;html&#x2F;2610.18861v1#S5\" rel=\"nofollow\">https:&#x2F;&#x2F;arxiv.org&#x2F;html&#x2F;2610.18861v1#S5</a>",
      "time": 1792356494,
      "title": "Hybrid Reasoning Agents: LLM agents that think in latent space, act through text",
      "type": "story",
      "url": "https://arxiv.org/abs/2610.18861"
    },
    {
      "by": "Eric_Gullichsen",
      "descendants": 41,
      "id": 50146625,
      "kids": [
        50147401,
        50149055,
        50147869,
        50148207,
        50147165,
        50148427,
        50146629,
        50147787,
        50146800,
        50148604
      ],
      "score": 141,
      "time": 1792366677,
      "title": "William Gibson and the trademarking of cyberspace",
      "type": "story",
      "url": "https://colo.to/cyberspace.html"
    },
    {
      "by": "mdp2021",
      "descendants": 357,
      "id": 50136150,
      "kids": [
        50148867,
        50147337,
        50148085,
        50148922,
        50146707,
        50145948,
        50145901,
        50147498,
        50148619,
        50148640,
        50148430,
        50148242,
        50147418,
        50146030,
        50146530,
        50146916,
        50145723,
        50147341,
        50147036,
        50147439,
        50146620,
        50145756,
        50146174,
        50145876,
        50148498,
        50145830,
        50148265,
        50146505,
        50147338,
        50147733,
        50146767,
        50149168,
        50147344,
        50146794,
        50147426,
        50146550,
        50147635
      ],
      "score": 300,
      "time": 1792279595,
      "title": "There's never been a better time to go into math (by: 3blue1brown) [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=LKrwhjOI8Nc"
    },
    {
      "by": "iheatuchriswogu",
      "descendants": 24,
      "id": 50147492,
      "kids": [
        50149140,
        50148169,
        50148299,
        50148485,
        50148587,
        50148164,
        50148075,
        50147896,
        50148335,
        50147493,
        50148029,
        50147929,
        50148283,
        50147967,
        50147991,
        50148210,
        50148016
      ],
      "score": 53,
      "time": 1792375276,
      "title": "Superlite: A Faster Alternatie to Superpowers",
      "type": "story",
      "url": "https://contextfirst.blog/superlite-hand-an-agent-a-spec/"
    },
    {
      "by": "tosh",
      "descendants": 157,
      "id": 50142573,
      "kids": [
        50149037,
        50142865,
        50144694,
        50144352,
        50145335,
        50148705,
        50143549,
        50144334,
        50143486,
        50147275,
        50148368,
        50147102,
        50143903,
        50149027,
        50147288,
        50144320,
        50146185,
        50143219,
        50145360,
        50144150,
        50144956,
        50145627,
        50147028,
        50144450,
        50143311,
        50148508,
        50143655,
        50144566,
        50147294,
        50145539,
        50148350,
        50142872,
        50145522,
        50146362,
        50143362,
        50143545,
        50142831,
        50144750,
        50144876,
        50144265,
        50143978,
        50146226,
        50144028,
        50145069,
        50143618,
        50143606,
        50143387,
        50143356,
        50142882,
        50145617,
        50144394,
        50145512,
        50144670,
        50148687,
        50145480,
        50146144,
        50145586,
        50145720,
        50145365
      ],
      "score": 396,
      "time": 1792341120,
      "title": "Someone behind the software",
      "type": "story",
      "url": "https://karrisaarinen.com/posts/someone-behind-the-software/"
    },
    {
      "by": "nanochess",
      "descendants": 37,
      "id": 50111537,
      "kids": [
        50149112,
        50148924,
        50147207,
        50147361,
        50147101,
        50147187,
        50147504,
        50147711,
        50111568,
        50148684,
        50147248,
        50147659,
        50147274,
        50147813
      ],
      "score": 91,
      "time": 1792104983,
      "title": "Laptop Based on 6502 CPU",
      "type": "story",
      "url": "https://www.maddox.pro/?p=448"
    },
    {
      "by": "greyface-",
      "descendants": 12,
      "id": 50148441,
      "kids": [
        50148852,
        50148910,
        50148810,
        50148778,
        50148844,
        50148884,
        50148815
      ],
      "score": 52,
      "time": 1792384818,
      "title": "Verisign .com Domain Name Registry Consumer Class Action",
      "type": "story",
      "url": "https://www.hbsslaw.com/cases/verisign-com-domain-name-registry-consumer-class-action"
    },
    {
      "by": "amrrs",
      "descendants": 77,
      "id": 50145507,
      "kids": [
        50148000,
        50147314,
        50147381,
        50147182,
        50147631,
        50147059,
        50148151,
        50148594,
        50147291,
        50147740,
        50147725,
        50147996,
        50147147,
        50147769,
        50148165,
        50147281,
        50145711,
        50147741,
        50147840,
        50147509,
        50147936,
        50147538,
        50147121,
        50148977,
        50147384,
        50147695,
        50147811,
        50147013,
        50148198
      ],
      "score": 111,
      "time": 1792357752,
      "title": "If you don't run your own LLM proxy, how do you know whats going on?",
      "type": "story",
      "url": "https://jrdsgl.com/if-you-dont-run-your-own-llm-proxy-how-the-fuck-do-you-even-know-whats-going-on/"
    },
    {
      "by": "RobotToaster",
      "descendants": 57,
      "id": 50141076,
      "kids": [
        50143355,
        50141336,
        50141271,
        50143199,
        50141674,
        50142645,
        50141842,
        50141628,
        50141677,
        50143275,
        50143787,
        50145083,
        50141540,
        50141316,
        50145320,
        50141395
      ],
      "score": 369,
      "time": 1792331328,
      "title": "RepRapMicron",
      "type": "story",
      "url": "https://github.com/VikOlliver/RepRapMicron/wiki"
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
      "title": "Updates to site guidelines and AI/LLM tags",
      "url": "",
      "score": 107,
      "comments": 66,
      "tags": [
        "announce",
        "meta"
      ],
      "id": "h0eate"
    },
    {
      "title": "It's enough - vibecoding tag crossed from useless to harmful",
      "url": "",
      "score": 273,
      "comments": 257,
      "tags": [
        "meta",
        "vibecoding"
      ],
      "id": "ggpwfi"
    },
    {
      "title": "ARP! Tell your network to explain itself",
      "url": "https://benjcal.space/blog/arp-tell-your-network-to-explain-itself/",
      "score": 36,
      "comments": 13,
      "tags": [
        "networking"
      ],
      "id": "mmvhup"
    },
    {
      "title": "A New Way to Think About Borrow Checking (In Reverse)",
      "url": "https://verdagon.dev/blog/reverse-borrow-checking",
      "score": 34,
      "comments": 3,
      "tags": [
        "compilers"
      ],
      "id": "vwgrix"
    },
    {
      "title": "Men in tech #YesAllMen",
      "url": "https://media.ccc.de/v/emf2026-240-1-men-in-tech-yesallmen",
      "score": 69,
      "comments": 15,
      "tags": [
        "culture",
        "video"
      ],
      "id": "mp8qye"
    },
    {
      "title": "Outside the Scope of Our Support",
      "url": "https://fireborn.mataroa.blog/blog/outside-the-scope-of-our-support/",
      "score": 28,
      "comments": 0,
      "tags": [
        "a11y",
        "android"
      ],
      "id": "brrnpm"
    },
    {
      "title": "Superoptimizing an FPU emulator",
      "url": "https://purplesyringa.moe/blog/superoptimizing-an-fpu-emulator/",
      "score": 14,
      "comments": 2,
      "tags": [
        "performance",
        "rust"
      ],
      "id": "1s3dve"
    },
    {
      "title": "My obituary for programming",
      "url": "https://dumbmatter.com/2026/10/programming-obituary/",
      "score": 17,
      "comments": 14,
      "tags": [
        "vibecoding"
      ],
      "id": "wtobpt"
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
      "forks": 8328,
      "added_stars": 42036,
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
          "username": "kevin9327",
          "href": "https://github.com/kevin9327",
          "avatar": "https://avatars.githubusercontent.com/u/5299031"
        },
        {
          "username": "jaketame",
          "href": "https://github.com/jaketame",
          "avatar": "https://avatars.githubusercontent.com/u/1787973"
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
      "forks": 5654,
      "added_stars": 5498,
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
      "forks": 6156,
      "added_stars": 27550,
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3426,
      "added_stars": 5493,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn AI Engineering! Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12515,
      "added_stars": 16300,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4545,
      "added_stars": 6015,
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
          "username": "mhegazy",
          "href": "https://github.com/mhegazy",
          "avatar": "https://avatars.githubusercontent.com/u/8000722"
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
      "forks": 1279,
      "added_stars": 6138,
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
          "username": "Bosheng0422",
          "href": "https://github.com/Bosheng0422",
          "avatar": "https://avatars.githubusercontent.com/u/67680641"
        },
        {
          "username": "liukewia",
          "href": "https://github.com/liukewia",
          "avatar": "https://avatars.githubusercontent.com/u/50489030"
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
      "forks": 3411,
      "added_stars": 3678,
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
          "username": "noobakong",
          "href": "https://github.com/noobakong",
          "avatar": "https://avatars.githubusercontent.com/u/34873469"
        }
      ]
    },
    {
      "author": "earthtojake",
      "repo": "text-to-cad",
      "avatar": "https://github.com/earthtojake.png",
      "repo_link": "https://github.com/earthtojake/text-to-cad",
      "desc": "Give your agent CAD superpowers.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2128,
      "added_stars": 5476,
      "builtBy": [
        {
          "username": "earthtojake",
          "href": "https://github.com/earthtojake",
          "avatar": "https://avatars.githubusercontent.com/u/10742417"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "warun7",
          "href": "https://github.com/warun7",
          "avatar": "https://avatars.githubusercontent.com/u/143688508"
        }
      ]
    },
    {
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4955,
      "added_stars": 5051,
      "builtBy": [
        {
          "username": "yuh-yang",
          "href": "https://github.com/yuh-yang",
          "avatar": "https://avatars.githubusercontent.com/u/43330997"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "AiMiDi",
          "href": "https://github.com/AiMiDi",
          "avatar": "https://avatars.githubusercontent.com/u/76622021"
        },
        {
          "username": "omerarslan0",
          "href": "https://github.com/omerarslan0",
          "avatar": "https://avatars.githubusercontent.com/u/76780961"
        },
        {
          "username": "hito0512",
          "href": "https://github.com/hito0512",
          "avatar": "https://avatars.githubusercontent.com/u/26110883"
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
      "forks": 3795,
      "added_stars": 2089,
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
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8747,
      "added_stars": 16509,
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
      "author": "strands-agents",
      "repo": "harness-sdk",
      "avatar": "https://github.com/strands-agents.png",
      "repo_link": "https://github.com/strands-agents/harness-sdk",
      "desc": "Build an agent harness and control it end-to-end. Open-source SDK for production AI agents in Python & TypeScript - any model, any cloud.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1397,
      "added_stars": 1545,
      "builtBy": [
        {
          "username": "zastrowm",
          "href": "https://github.com/zastrowm",
          "avatar": "https://avatars.githubusercontent.com/u/3211021"
        },
        {
          "username": "pgrayy",
          "href": "https://github.com/pgrayy",
          "avatar": "https://avatars.githubusercontent.com/u/204914194"
        },
        {
          "username": "strands-agent",
          "href": "https://github.com/strands-agent",
          "avatar": "https://avatars.githubusercontent.com/u/217235299"
        },
        {
          "username": "yonib05",
          "href": "https://github.com/yonib05",
          "avatar": "https://avatars.githubusercontent.com/u/5503597"
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
      "forks": 32835,
      "added_stars": 2391,
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
      "author": "superdesigndev",
      "repo": "treg",
      "avatar": "https://github.com/superdesigndev.png",
      "repo_link": "https://github.com/superdesigndev/treg",
      "desc": "OpenRouter for agent tools. Join community here: https://discord.gg/6mQYYfFMAn",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 484,
      "added_stars": 4127,
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
      "author": "tile-ai",
      "repo": "tilelang",
      "avatar": "https://github.com/tile-ai.png",
      "repo_link": "https://github.com/tile-ai/tilelang",
      "desc": "Domain-specific language designed to streamline the development of high-performance GPU/CPU/Accelerators kernels",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 902,
      "added_stars": 1242,
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
      "author": "NVIDIA",
      "repo": "Model-Optimizer",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/Model-Optimizer",
      "desc": "A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 755,
      "added_stars": 1555,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1804,
      "added_stars": 2840,
      "builtBy": [
        {
          "username": "rng1995",
          "href": "https://github.com/rng1995",
          "avatar": "https://avatars.githubusercontent.com/u/32655573"
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
        },
        {
          "username": "keshprad",
          "href": "https://github.com/keshprad",
          "avatar": "https://avatars.githubusercontent.com/u/32313895"
        }
      ]
    },
    {
      "author": "topoteretes",
      "repo": "cognee",
      "avatar": "https://github.com/topoteretes.png",
      "repo_link": "https://github.com/topoteretes/cognee",
      "desc": "Cognee is the open-source AI memory platform for agents. Give your AI agents persistent long-term memory with small models for free",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3400,
      "added_stars": 1835,
      "builtBy": [
        {
          "username": "dexters1",
          "href": "https://github.com/dexters1",
          "avatar": "https://avatars.githubusercontent.com/u/30923996"
        },
        {
          "username": "Vasilije1990",
          "href": "https://github.com/Vasilije1990",
          "avatar": "https://avatars.githubusercontent.com/u/8619304"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "hajdul88",
          "href": "https://github.com/hajdul88",
          "avatar": "https://avatars.githubusercontent.com/u/52442977"
        },
        {
          "username": "borisarzentar",
          "href": "https://github.com/borisarzentar",
          "avatar": "https://avatars.githubusercontent.com/u/5081379"
        }
      ]
    },
    {
      "author": "ahujasid",
      "repo": "mcp-for-blender",
      "avatar": "https://github.com/ahujasid.png",
      "repo_link": "https://github.com/ahujasid/mcp-for-blender",
      "desc": "Community plugin to control Blender 3D with any LLM of your choice. Not affiliated with the official Blender Foundation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2968,
      "added_stars": 2658,
      "builtBy": [
        {
          "username": "ahujasid",
          "href": "https://github.com/ahujasid",
          "avatar": "https://avatars.githubusercontent.com/u/11807284"
        },
        {
          "username": "ElgoogUdiab",
          "href": "https://github.com/ElgoogUdiab",
          "avatar": "https://avatars.githubusercontent.com/u/28426666"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "siddikisahil47",
          "href": "https://github.com/siddikisahil47",
          "avatar": "https://avatars.githubusercontent.com/u/134954614"
        },
        {
          "username": "harrywang",
          "href": "https://github.com/harrywang",
          "avatar": "https://avatars.githubusercontent.com/u/595772"
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
      "forks": 17413,
      "added_stars": 23340,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6072,
      "added_stars": 15429,
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
      "forks": 2297,
      "added_stars": 7319,
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
      "forks": 5025,
      "added_stars": 10063,
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
          "username": "tashdroid",
          "href": "https://github.com/tashdroid",
          "avatar": "https://avatars.githubusercontent.com/u/319142293"
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
      "forks": 1266,
      "added_stars": 4507,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7593,
      "added_stars": 5415,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8934,
      "added_stars": 7900,
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
      "author": "Effect-TS",
      "repo": "effect",
      "avatar": "https://github.com/Effect-TS.png",
      "repo_link": "https://github.com/Effect-TS/effect",
      "desc": "Build production-ready applications in TypeScript",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 870,
      "added_stars": 1270,
      "builtBy": [
        {
          "username": "tim-smart",
          "href": "https://github.com/tim-smart",
          "avatar": "https://avatars.githubusercontent.com/u/40680"
        },
        {
          "username": "mikearnaldi",
          "href": "https://github.com/mikearnaldi",
          "avatar": "https://avatars.githubusercontent.com/u/24249610"
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
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca is the place for working with a fleet of agents (e.g. Grok Bot, Claude Code). Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6198,
      "added_stars": 25115,
      "builtBy": [
        {
          "username": "nwparker",
          "href": "https://github.com/nwparker",
          "avatar": "https://avatars.githubusercontent.com/u/4138956"
        },
        {
          "username": "brennanb2025",
          "href": "https://github.com/brennanb2025",
          "avatar": "https://avatars.githubusercontent.com/u/79079362"
        },
        {
          "username": "Jinwoo-H",
          "href": "https://github.com/Jinwoo-H",
          "avatar": "https://avatars.githubusercontent.com/u/73622457"
        },
        {
          "username": "AmethystLiang",
          "href": "https://github.com/AmethystLiang",
          "avatar": "https://avatars.githubusercontent.com/u/6427696"
        },
        {
          "username": "orca-ide",
          "href": "https://github.com/orca-ide",
          "avatar": "https://avatars.githubusercontent.com/u/277417572"
        }
      ]
    },
    {
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5174,
      "added_stars": 5451,
      "builtBy": [
        {
          "username": "JonnyBurger",
          "href": "https://github.com/JonnyBurger",
          "avatar": "https://avatars.githubusercontent.com/u/1629785"
        },
        {
          "username": "samohovets",
          "href": "https://github.com/samohovets",
          "avatar": "https://avatars.githubusercontent.com/u/24735429"
        },
        {
          "username": "patsalv",
          "href": "https://github.com/patsalv",
          "avatar": "https://avatars.githubusercontent.com/u/89481679"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 3033,
      "added_stars": 3672,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jonathanhefner",
          "href": "https://github.com/jonathanhefner",
          "avatar": "https://avatars.githubusercontent.com/u/771968"
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
      "forks": 27053,
      "added_stars": 6860,
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
      "author": "elie222",
      "repo": "rakazo",
      "avatar": "https://github.com/elie222.png",
      "repo_link": "https://github.com/elie222/rakazo",
      "desc": "Open-source Grok Bot alternative. Choose your own model and sandbox.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 843,
      "added_stars": 1897,
      "builtBy": [
        {
          "username": "elie222",
          "href": "https://github.com/elie222",
          "avatar": "https://avatars.githubusercontent.com/u/3090527"
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
          "username": "fetw882",
          "href": "https://github.com/fetw882",
          "avatar": "https://avatars.githubusercontent.com/u/121428752"
        },
        {
          "username": "ald3b",
          "href": "https://github.com/ald3b",
          "avatar": "https://avatars.githubusercontent.com/u/3642270"
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
      "forks": 279,
      "added_stars": 721,
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
      "author": "dream-num",
      "repo": "univer",
      "avatar": "https://github.com/dream-num.png",
      "repo_link": "https://github.com/dream-num/univer",
      "desc": "The Office Harness for AI Agents — Spreadsheets, Docs, Slides, Canvas, Relational Tables, and PDF in one runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1896,
      "added_stars": 8415,
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
      "author": "pablostanley",
      "repo": "yoinks",
      "avatar": "https://github.com/pablostanley.png",
      "repo_link": "https://github.com/pablostanley/yoinks",
      "desc": "yoink any video from your terminal. no shady ads.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 508,
      "added_stars": 4298,
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
      "author": "Open-Dev-Society",
      "repo": "OpenStock",
      "avatar": "https://github.com/Open-Dev-Society.png",
      "repo_link": "https://github.com/Open-Dev-Society/OpenStock",
      "desc": "OpenStock is an open-source alternative to expensive market platforms. Track real-time prices, set personalized alerts, and explore detailed company insights — built openly, for everyone, forever free.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2509,
      "added_stars": 5060,
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
      "author": "BuilderIO",
      "repo": "agent-native",
      "avatar": "https://github.com/BuilderIO.png",
      "repo_link": "https://github.com/BuilderIO/agent-native",
      "desc": "A framework for building agentic apps",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 680,
      "added_stars": 2676,
      "builtBy": [
        {
          "username": "steve8708",
          "href": "https://github.com/steve8708",
          "avatar": "https://avatars.githubusercontent.com/u/844291"
        },
        {
          "username": "3mdistal",
          "href": "https://github.com/3mdistal",
          "avatar": "https://avatars.githubusercontent.com/u/86723305"
        },
        {
          "username": "builderio-bot",
          "href": "https://github.com/builderio-bot",
          "avatar": "https://avatars.githubusercontent.com/u/175421836"
        }
      ]
    },
    {
      "author": "Crosstalk-Solutions",
      "repo": "project-nomad",
      "avatar": "https://github.com/Crosstalk-Solutions.png",
      "repo_link": "https://github.com/Crosstalk-Solutions/project-nomad",
      "desc": "Project NOMAD is an offline-first knowledge and education server. Wikipedia, thousands of books, courses, maps, and optional local AI, all running on hardware you own with no internet required.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4095,
      "added_stars": 3476,
      "builtBy": [
        {
          "username": "jakeaturner",
          "href": "https://github.com/jakeaturner",
          "avatar": "https://avatars.githubusercontent.com/u/52841588"
        },
        {
          "username": "chriscrosstalk",
          "href": "https://github.com/chriscrosstalk",
          "avatar": "https://avatars.githubusercontent.com/u/49691103"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cosmistack-bot",
          "href": "https://github.com/cosmistack-bot",
          "avatar": "https://avatars.githubusercontent.com/u/175166532"
        }
      ]
    },
    {
      "author": "mobile-next",
      "repo": "mobile-mcp",
      "avatar": "https://github.com/mobile-next.png",
      "repo_link": "https://github.com/mobile-next/mobile-mcp",
      "desc": "Model Context Protocol Server for Mobile Automation and Scraping (iOS, Android, Emulators, Simulators and Real Devices)",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 866,
      "added_stars": 3026,
      "builtBy": [
        {
          "username": "gmegidish",
          "href": "https://github.com/gmegidish",
          "avatar": "https://avatars.githubusercontent.com/u/2457607"
        },
        {
          "username": "krismuhi",
          "href": "https://github.com/krismuhi",
          "avatar": "https://avatars.githubusercontent.com/u/38224019"
        },
        {
          "username": "mobile-kevin",
          "href": "https://github.com/mobile-kevin",
          "avatar": "https://avatars.githubusercontent.com/u/306153527"
        },
        {
          "username": "benlmyers",
          "href": "https://github.com/benlmyers",
          "avatar": "https://avatars.githubusercontent.com/u/41796709"
        },
        {
          "username": "tomoya0x00",
          "href": "https://github.com/tomoya0x00",
          "avatar": "https://avatars.githubusercontent.com/u/5106629"
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
      "title": "Promise Delivered: Welcome to the DEV Hall of Fame (65 Authors, 65 Masterpieces)",
      "description": "Status: Promise delivered ✅              The Doors Are Open   A little over a month ago, I published...",
      "url": "https://dev.to/georgekobaidze/promise-delivered-welcome-to-the-dev-hall-of-fame-65-authors-65-masterpieces-15fa",
      "tags": "community, discuss, showdev, writing",
      "reactions": 119,
      "comments": 57,
      "reading_time": 25,
      "author": "georgekobaidze"
    },
    {
      "title": "Dev Opportunity Radar #21: $500K Y Combinator Funding, Bolt Builders Week, and AI Safety Research Residency",
      "description": "TL;DR  Welcome back to Dev Opportunity Radar!  This is a weekly series where I share opportunities,...",
      "url": "https://dev.to/devengers/dev-opportunity-radar-21-500k-y-combinator-funding-bolt-builders-week-and-ai-safety-research-12b8",
      "tags": "discuss, community, opportunities, resources",
      "reactions": 88,
      "comments": 9,
      "reading_time": 10,
      "author": "hemapriya_kanagala"
    },
    {
      "title": "[AI in Practice] Upgrading from Gemini 3.5/3.6 to Gemini 4 Argon: Migration Notes and Pitfalls for LINE Bot Developers",
      "description": "Background   I have a LINE Bot that I use every day, linebot-helper-python. I use it daily...",
      "url": "https://dev.to/gde/ai-in-practice-upgrading-from-gemini-3536-to-gemini-4-argon-migration-notes-and-pitfalls-for-hli",
      "tags": "ai, api, gemini, python",
      "reactions": 8,
      "comments": 0,
      "reading_time": 12,
      "author": "evanlin"
    },
    {
      "title": "Building ora-tui with Google Antigravity & Gemini 4 Argon: An MS-DOS Retro TUI & OpenTelemetry Exporter for Oracle RAC, DB & SAN Multipath",
      "description": "How I pair-programmed with Google Antigravity powered by Gemini 4 Argon to build a zero-dependency Go TUI and OpenTelemetry/Prometheus observability stack for Oracle Databases and Linux SAN storage.",
      "url": "https://dev.to/gde/building-ora-tui-with-google-antigravity-gemini-4-argon-an-ms-dos-retro-tui-opentelemetry-4d02",
      "tags": "oracle, go, opentelemetry, ai",
      "reactions": 8,
      "comments": 0,
      "reading_time": 7,
      "author": "marioezquerro"
    },
    {
      "title": "DuckLess: serverless DuckDB on Google Cloud, in your own project",
      "description": "Serverless DuckDB on Google Cloud, in your own project. Files on GCS, tables in BigQuery (read and write), what I measured, and what I learned.",
      "url": "https://dev.to/gde/duckless-serverless-duckdb-on-google-cloud-in-your-own-project-4o5a",
      "tags": "duckdb, googlecloud, dataengineering, opensource",
      "reactions": 11,
      "comments": 1,
      "reading_time": 10,
      "author": "mazlum_tosun"
    },
    {
      "title": "Nobody’s winning the AI race yet",
      "description": "By Ryan Swift  Yesterday, Google finally released its Gemini 4 Argon model for public use. It’s...",
      "url": "https://dev.to/dailycontext/nobodys-winning-the-ai-race-yet-24h4",
      "tags": "ai, gemini, llm, aie",
      "reactions": 17,
      "comments": 2,
      "reading_time": 2,
      "author": "thisisryanswift"
    },
    {
      "title": "Gemini 4 Under the Microscope: Red-Teaming AI Agents and Deterministic Dual-Port Remote Control Gemini 4 Architecture Banner",
      "description": "🎯 What You'll Learn     Gemini 4 Native Architecture Leap: How to leverage Deep Reasoning...",
      "url": "https://dev.to/gde/gemini-4-under-the-microscope-red-teaming-ai-agents-and-deterministic-dual-port-remote-control-4567",
      "tags": "gemini, agents, security, devsecops",
      "reactions": 20,
      "comments": 0,
      "reading_time": 9,
      "author": "jimmyliao"
    },
    {
      "title": "Six Months After Cloud Next ‘26: A Builder’s Tour of the Gemini Enterprise Agent Platform",
      "description": "What actually shipped across Build, Scale, Govern, and Optimize — and what I'd tell a team starting...",
      "url": "https://dev.to/gde/six-months-after-cloud-next-26-a-builders-tour-of-the-gemini-enterprise-agent-platform-3hib",
      "tags": "googlecloud, ai, agents, gemini",
      "reactions": 7,
      "comments": 0,
      "reading_time": 10,
      "author": "jonathan_zhuo_ae7e5c02dec"
    },
    {
      "title": "AlphaEvolve and Gemini: Autonomous Algorithm Discovery for Unified Disaster Prediction",
      "description": "📄 Published Paper (Open Access on Zenodo): Autonomous Discovery of Unified Multi-Hazard Prediction...",
      "url": "https://dev.to/gde/alphaevolve-and-gemini-autonomous-algorithm-discovery-for-unified-disaster-prediction-20f4",
      "tags": "ai, gemini, iot, algorithms",
      "reactions": 18,
      "comments": 0,
      "reading_time": 26,
      "author": "tanaike"
    },
    {
      "title": "What was your win this week?!",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-36am",
      "tags": "weeklyretro",
      "reactions": 22,
      "comments": 27,
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
      "title": "The Terminal Made Me a Better Developer (And Not for the Reasons I Expected)",
      "description": "When I first started using the terminal, sure, it was useful. I could navigate around directories,...",
      "url": "https://dev.to/sizzlebop/the-terminal-made-me-a-better-developer-and-not-for-the-reasons-i-expected-nn6",
      "tags": "productivity, linux, beginners, terminal",
      "reactions": 21,
      "comments": 3,
      "reading_time": 10,
      "author": "sizzlebop"
    },
    {
      "title": "LeetCode Made Coding Fun Again",
      "description": "Many of us have already fully switched to AI-powered development. We write specs, create skills,...",
      "url": "https://dev.to/empiree/leetcode-made-coding-fun-again-d7d",
      "tags": "ai, programming, productivity, beginners",
      "reactions": 14,
      "comments": 1,
      "reading_time": 3,
      "author": "empiree"
    },
    {
      "title": "Running multiple Claude Code agents in parallel: what worktrees cannot see",
      "description": "If you only ever run one coding agent, you do not need most of this. You're also probably working...",
      "url": "https://dev.to/naw103/running-multiple-claude-code-agents-in-parallel-what-worktrees-cannot-see-4le7",
      "tags": "ai, git, devtools, productivity",
      "reactions": 3,
      "comments": 4,
      "reading_time": 11,
      "author": "naw103"
    },
    {
      "title": "7 Things Your Coding Agent Can't See, and the Command That Shows Each One",
      "description": "Your agent sees the repo and what you paste. CI logs, the live schema, review threads and flag state are outside. Seven commands bring them in.",
      "url": "https://dev.to/gabrielanhaia/7-things-your-coding-agent-cant-see-and-the-command-that-shows-each-one-41a8",
      "tags": "ai, productivity, cli, devtools",
      "reactions": 0,
      "comments": 0,
      "reading_time": 8,
      "author": "gabrielanhaia"
    },
    {
      "title": "My AI Experiment Was Going Great Until My Client Replied 😂",
      "description": "Quick confession. Last Sunday I opened dev.to and my brain made a tiny error noise. 😵  Opus against...",
      "url": "https://dev.to/hanzla/my-ai-experiment-was-going-great-until-my-client-replied-17kd",
      "tags": "productivity, ai, webdev, programming",
      "reactions": 34,
      "comments": 1,
      "reading_time": 3,
      "author": "hanzla"
    },
    {
      "title": "The Verification Trap: Why Generative AI Is Making Senior Engineers Slower (and How to Fix It)",
      "description": "The Verification Trap: Why Generative AI Is Making Senior Engineers Slower (and How to Fix...",
      "url": "https://dev.to/debashish_ghosal/the-verification-trap-why-generative-ai-is-making-senior-engineers-slower-and-how-to-fix-it-245m",
      "tags": "discuss, ai, softwareengineering, productivity",
      "reactions": 5,
      "comments": 0,
      "reading_time": 6,
      "author": "debashish_ghosal"
    },
    {
      "title": "Custodian — Your Offline AI Assistant for Safe Desktop Automation",
      "description": "The video introduces the project and its workflow. We also created illustrative interface artwork to...",
      "url": "https://dev.to/paarthgup001/custodian-your-offline-ai-assistant-for-safe-desktop-automation-278i",
      "tags": "devchallenge, hf26challenge, ai, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "paarthgup001"
    },
    {
      "title": "D47：錢到了，人沒到",
      "description": "十月十八日，帳戶多了一萬元。  這筆入金是實驗操作者手動匯入的，不是阿富賺的。八月十一日開始的時候，帳戶裡只有兩千兩百元可動用資金。阿富用其中一千零八十五元，在第二天買了三十六股群益台灣精選高息（009...",
      "url": "https://dev.to/_2ab71a79dd36101e6be89/d47qian-dao-liao-ren-mei-dao-2mjn",
      "tags": "productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "_2ab71a79dd36101e6be89"
    },
    {
      "title": "Why I maintain my own translation extension",
      "description": "There are already plenty of browser translation extensions. Some handle webpages, video subtitles,...",
      "url": "https://dev.to/airhunter/why-i-maintain-my-own-translation-extension-3d4k",
      "tags": "browser, productivity, software, tools",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "airhunter"
    },
    {
      "title": "Spreadsheets vs Automation: When Excel Stops Being Enough",
      "description": "Excel is not the problem.  The problem starts when a spreadsheet becomes responsible for work that...",
      "url": "https://dev.to/ksoft_technologies_33f7f6/spreadsheets-vs-automation-when-excel-stops-being-enough-1an4",
      "tags": "automation, productivity, softwaredevelopment, architecture",
      "reactions": 1,
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

