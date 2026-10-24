# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-10-24 06:35:43 UTC

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
      "desc": "Claude Code, Codex, Copilot, Pi, OpenCode, Muse, Gemini, and Prime Agent versions of Poteto's pstack. Rigorous agent workflows with Cursor primitives translated for other harnesses.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 312,
      "added_stars": 732,
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
          "username": "younes-io",
          "href": "https://github.com/younes-io",
          "avatar": "https://avatars.githubusercontent.com/u/3153107"
        },
        {
          "username": "harrymunro",
          "href": "https://github.com/harrymunro",
          "avatar": "https://avatars.githubusercontent.com/u/13261778"
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
      "forks": 1815,
      "added_stars": 4025,
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
          "username": "sherlocknieh",
          "href": "https://github.com/sherlocknieh",
          "avatar": "https://avatars.githubusercontent.com/u/43476643"
        },
        {
          "username": "DeepslateQAQ",
          "href": "https://github.com/DeepslateQAQ",
          "avatar": "https://avatars.githubusercontent.com/u/46892455"
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
      "forks": 2658,
      "added_stars": 11223,
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
      "author": "DietrichGebert",
      "repo": "ponytail",
      "avatar": "https://github.com/DietrichGebert.png",
      "repo_link": "https://github.com/DietrichGebert/ponytail",
      "desc": "Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 9535,
      "added_stars": 9858,
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
      "author": "plugin87",
      "repo": "ux-ui-agent-skills",
      "avatar": "https://github.com/plugin87.png",
      "repo_link": "https://github.com/plugin87/ux-ui-agent-skills",
      "desc": "Turn Claude into a senior design architect: DTCG tokens, 52 components, WCAG 2.2 AA-AAA, 138 design systems, any-framework code, and 50 objective gates that fail the build instead of faking success.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 280,
      "added_stars": 896,
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
      "author": "citrolabs",
      "repo": "ego-lite",
      "avatar": "https://github.com/citrolabs.png",
      "repo_link": "https://github.com/citrolabs/ego-lite",
      "desc": "The fastest browser for AI agents to run browser automation, built for sharing your logged-in browser state with your AI agents, like Codex or Claude Code, without disturbing you. Zero cost, zero config.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1058,
      "added_stars": 1524,
      "builtBy": [
        {
          "username": "section9-lab",
          "href": "https://github.com/section9-lab",
          "avatar": "https://avatars.githubusercontent.com/u/22140958"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "aute",
          "href": "https://github.com/aute",
          "avatar": "https://avatars.githubusercontent.com/u/17873165"
        },
        {
          "username": "WUXM5",
          "href": "https://github.com/WUXM5",
          "avatar": "https://avatars.githubusercontent.com/u/77671587"
        },
        {
          "username": "joway",
          "href": "https://github.com/joway",
          "avatar": "https://avatars.githubusercontent.com/u/8353464"
        }
      ]
    },
    {
      "author": "Leonxlnx",
      "repo": "taste-skill",
      "avatar": "https://github.com/Leonxlnx.png",
      "repo_link": "https://github.com/Leonxlnx/taste-skill",
      "desc": "Agent skills that give coding agents taste: art direction, reference images and a browser check instead of generic AI pages",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6866,
      "added_stars": 3764,
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
          "username": "HugoSpy",
          "href": "https://github.com/HugoSpy",
          "avatar": "https://avatars.githubusercontent.com/u/122161868"
        },
        {
          "username": "flexi767",
          "href": "https://github.com/flexi767",
          "avatar": "https://avatars.githubusercontent.com/u/96955327"
        }
      ]
    },
    {
      "author": "datawhalechina",
      "repo": "easy-vibe",
      "avatar": "https://github.com/datawhalechina.png",
      "repo_link": "https://github.com/datawhalechina/easy-vibe",
      "desc": "💻 Vibe Coding 101｜Your First Course For AI Product Builders.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1948,
      "added_stars": 401,
      "builtBy": [
        {
          "username": "sanbuphy",
          "href": "https://github.com/sanbuphy",
          "avatar": "https://avatars.githubusercontent.com/u/96160062"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "GeoDaoyu",
          "href": "https://github.com/GeoDaoyu",
          "avatar": "https://avatars.githubusercontent.com/u/34641603"
        },
        {
          "username": "SherryTECNU",
          "href": "https://github.com/SherryTECNU",
          "avatar": "https://avatars.githubusercontent.com/u/47715534"
        },
        {
          "username": "1985312383",
          "href": "https://github.com/1985312383",
          "avatar": "https://avatars.githubusercontent.com/u/56398475"
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
      "forks": 51566,
      "added_stars": 810,
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
      "author": "affaan-m",
      "repo": "ECC",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/ECC",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 42626,
      "added_stars": 6418,
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
          "username": "montjeffrey",
          "href": "https://github.com/montjeffrey",
          "avatar": "https://avatars.githubusercontent.com/u/24193489"
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
      "forks": 394,
      "added_stars": 479,
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
      "by": "Jowsey",
      "descendants": 494,
      "id": 50212065,
      "kids": [
        50217036,
        50212874,
        50213204,
        50216342,
        50212857,
        50213093,
        50216574,
        50212489,
        50215149,
        50212563,
        50212318,
        50218495,
        50215774,
        50212945,
        50213831,
        50212343,
        50216038,
        50212365,
        50215371,
        50212357,
        50212605,
        50213462,
        50217436,
        50214254,
        50217781,
        50212575,
        50212447,
        50212415,
        50216868,
        50216963,
        50214409,
        50213109,
        50217547,
        50212311,
        50212538,
        50214455,
        50212324,
        50212301,
        50213887,
        50212796,
        50218113,
        50218362,
        50216765,
        50213970,
        50214393,
        50212303,
        50214423,
        50212404,
        50217169,
        50212321,
        50212449,
        50212423,
        50213019,
        50213082,
        50212893,
        50212407,
        50213574,
        50212852,
        50212826,
        50213549,
        50212632,
        50212982,
        50213894,
        50212457,
        50212552,
        50212231,
        50217261,
        50213189,
        50212829,
        50212691,
        50212786,
        50212471,
        50216358,
        50212291,
        50212523,
        50212996,
        50213879,
        50212716,
        50212591,
        50212521,
        50214157,
        50213294,
        50212202,
        50212238,
        50214481,
        50217969,
        50215912,
        50213608,
        50215609,
        50214619,
        50213356,
        50212532,
        50213167,
        50212403
      ],
      "score": 847,
      "text": "<a href=\"https:&#x2F;&#x2F;www.kimi.com&#x2F;code&#x2F;docs&#x2F;en&#x2F;kimi-code&#x2F;models.html\" rel=\"nofollow\">https:&#x2F;&#x2F;www.kimi.com&#x2F;code&#x2F;docs&#x2F;en&#x2F;kimi-code&#x2F;models.html</a><p><a href=\"https:&#x2F;&#x2F;artificialanalysis.ai&#x2F;models&#x2F;kimi-k3-1-pro\" rel=\"nofollow\">https:&#x2F;&#x2F;artificialanalysis.ai&#x2F;models&#x2F;kimi-k3-1-pro</a><p><a href=\"https:&#x2F;&#x2F;www.modelcompare.ai&#x2F;blog&#x2F;china-open-source-ai\" rel=\"nofollow\">https:&#x2F;&#x2F;www.modelcompare.ai&#x2F;blog&#x2F;china-open-source-ai</a>",
      "time": 1792774748,
      "title": "Kimi K3.1 Pro and K3.1 Pro Highspeed",
      "type": "story",
      "url": "https://www.kimi.ai/blog/kimi-k3-1-pro"
    },
    {
      "by": "otoolep",
      "descendants": 14,
      "id": 50217500,
      "kids": [
        50218626,
        50218636,
        50218493,
        50218298,
        50218382,
        50218267,
        50218363,
        50218080,
        50218059,
        50218546
      ],
      "score": 126,
      "time": 1792804618,
      "title": "Twelve years of distributed SQLite",
      "type": "story",
      "url": "https://philipotoole.com/twelve-years-of-distributed-sqlite/"
    },
    {
      "by": "stmonty",
      "descendants": 6,
      "id": 50218195,
      "kids": [
        50218599,
        50218676,
        50218487,
        50218681
      ],
      "score": 49,
      "time": 1792813434,
      "title": "How close can pure functional programming get to C?",
      "type": "story",
      "url": "https://rtfeldman.com/fp-vs-c"
    },
    {
      "by": "frizlab",
      "descendants": 219,
      "id": 50207910,
      "kids": [
        50214960,
        50213526,
        50216610,
        50215661,
        50213467,
        50218611,
        50213139,
        50218744,
        50214137,
        50217440,
        50218688,
        50217762,
        50215899,
        50218623,
        50213132,
        50213756,
        50218448,
        50215691,
        50215344,
        50215118,
        50214105,
        50215541,
        50216122,
        50214929,
        50214251,
        50217353,
        50215634,
        50217090,
        50215179,
        50214881,
        50213414,
        50213087,
        50213421,
        50213418,
        50214866,
        50213098,
        50213776,
        50214392,
        50214023,
        50213913,
        50214438,
        50216789,
        50215357,
        50207914,
        50214355,
        50213192,
        50213279,
        50215281,
        50213249
      ],
      "score": 704,
      "text": "<a href=\"https:&#x2F;&#x2F;www.macrumors.com&#x2F;2026&#x2F;10&#x2F;23&#x2F;apple-music-has-a-hidden-ipod-you-can-play-with&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.macrumors.com&#x2F;2026&#x2F;10&#x2F;23&#x2F;apple-music-has-a-hidde...</a>",
      "time": 1792758527,
      "title": "Apple Music 404 Not Found",
      "type": "story",
      "url": "https://music.apple.com/this-url-doesnt-exist"
    },
    {
      "by": "sohkamyung",
      "descendants": 230,
      "id": 50202285,
      "kids": [
        50210858,
        50205947,
        50205318,
        50205576,
        50205289,
        50218545,
        50208595,
        50205171,
        50215499,
        50214050,
        50205206,
        50212794,
        50208085,
        50205226,
        50205442,
        50217331,
        50205722,
        50218377,
        50205809,
        50205174,
        50205336,
        50205919,
        50205757,
        50213838,
        50211190,
        50206748,
        50215738,
        50213398,
        50214460,
        50208169,
        50215518,
        50205309,
        50206544,
        50206668,
        50207622,
        50211491,
        50214745,
        50212530,
        50206139,
        50212306,
        50206646,
        50206100,
        50205142,
        50206309,
        50205897,
        50206349,
        50212752,
        50216431,
        50206585,
        50215362,
        50205301,
        50207182,
        50206302,
        50207538,
        50208019,
        50213604,
        50206751,
        50210553,
        50209454,
        50209176,
        50211878,
        50206153,
        50210936,
        50207284,
        50210049,
        50207757,
        50205838,
        50217268,
        50206043,
        50206607,
        50205290,
        50205138,
        50206172,
        50208224,
        50205667,
        50209519,
        50207022,
        50206863,
        50205507,
        50212097,
        50205559,
        50210700,
        50213947,
        50206073,
        50211132,
        50205139,
        50205556,
        50206400,
        50208351,
        50209020,
        50205769,
        50207220,
        50210266,
        50215692,
        50205708,
        50213389,
        50214658,
        50209520,
        50213667,
        50207188,
        50205097,
        50206170,
        50212573,
        50205474,
        50211608,
        50211603,
        50206828,
        50207162,
        50209700,
        50209636,
        50205359,
        50207291,
        50206717,
        50205979,
        50205352,
        50210161,
        50205798,
        50212617,
        50206115,
        50205337,
        50207416,
        50206192,
        50205723,
        50210105,
        50216767,
        50206764,
        50205216,
        50205373,
        50208553,
        50207226,
        50211727,
        50206016,
        50206306,
        50205156,
        50211713,
        50205810,
        50205695
      ],
      "score": 1336,
      "time": 1792710078,
      "title": "Local Wikipedia: Wikipedia, but only for things a half hour walk from you",
      "type": "story",
      "url": "https://edjefferson.com/localwiki/"
    },
    {
      "by": "dsr12",
      "descendants": 130,
      "id": 50213925,
      "kids": [
        50216082,
        50216692,
        50215125,
        50215215,
        50216292,
        50216117,
        50215598,
        50217399,
        50216664,
        50218557,
        50216127,
        50215811,
        50215419,
        50218565,
        50217170,
        50218547,
        50215830,
        50218629,
        50216190,
        50215697,
        50215813,
        50216116,
        50217082,
        50218498,
        50215625,
        50215683,
        50217533,
        50215470,
        50216934,
        50215384,
        50215143,
        50216614,
        50216184,
        50216356,
        50217311,
        50217072,
        50215511,
        50215941,
        50214825,
        50216195,
        50215675,
        50215045,
        50216003,
        50216434,
        50216875,
        50215205,
        50214945,
        50216970,
        50215001,
        50217625,
        50217426,
        50216856,
        50217827,
        50216502,
        50216624,
        50214833
      ],
      "score": 340,
      "time": 1792782594,
      "title": "Dessa: Conversation Model trained only on speech",
      "type": "story",
      "url": "https://block.xyz/dessa"
    },
    {
      "by": "westsmith",
      "descendants": 5,
      "id": 50171379,
      "kids": [
        50172003,
        50183585,
        50171387
      ],
      "score": 32,
      "time": 1792524159,
      "title": "A practical guide to AI image generation, from diffusion to agents",
      "type": "story",
      "url": "https://danielball.com/notes/ai_image_generation.html"
    },
    {
      "by": "pavel_lishin",
      "descendants": 538,
      "id": 50211474,
      "kids": [
        50212486,
        50211681,
        50212216,
        50211756,
        50211812,
        50211620,
        50214848,
        50213403,
        50211572,
        50211964,
        50214650,
        50212347,
        50212508,
        50218653,
        50211793,
        50216146,
        50212016,
        50212206,
        50212639,
        50211740,
        50212709,
        50211599,
        50212177,
        50211559,
        50212562,
        50212506,
        50215679,
        50215015,
        50212956,
        50211991,
        50212979,
        50214259,
        50211882,
        50214626,
        50212002,
        50212023,
        50211941,
        50215004,
        50212381,
        50212396,
        50212314,
        50212035,
        50212130,
        50213015,
        50211985,
        50212641,
        50211614,
        50212050,
        50212674,
        50212169,
        50211721,
        50211647,
        50215644,
        50213994,
        50213145,
        50216114,
        50211699,
        50212479,
        50211820,
        50213525,
        50211638,
        50211974,
        50212983
      ],
      "score": 821,
      "time": 1792772510,
      "title": "Today, we hacked what we'd set out to hack: the iPhone",
      "type": "story",
      "url": "https://blog.calif.io/p/iphone"
    },
    {
      "by": "Group_B",
      "descendants": 59,
      "id": 50215530,
      "kids": [
        50217761,
        50216904,
        50217043,
        50216779,
        50217200,
        50217130,
        50216600,
        50217087,
        50216232,
        50217360,
        50216351,
        50217569,
        50216929,
        50217002,
        50216570,
        50217066,
        50217517,
        50216897,
        50216844,
        50216798
      ],
      "score": 149,
      "time": 1792790507,
      "title": "CVE Tracker",
      "type": "story",
      "url": "https://cve.0xosprey.com/"
    },
    {
      "by": "Ravencentric",
      "descendants": 23,
      "id": 50172962,
      "kids": [
        50217379,
        50218208,
        50218719,
        50218030,
        50217391,
        50217615,
        50217942,
        50217393,
        50217774,
        50218642,
        50218118
      ],
      "score": 94,
      "time": 1792531856,
      "title": "Bringing uv and ty together",
      "type": "story",
      "url": "https://astral.sh/blog/uv-ty-integration"
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
      "title": "Attention people who think UB is fine",
      "url": "https://blog.habets.se/2026/10/Attention-people-who-think-UB-is-fine.html",
      "score": 31,
      "comments": 20,
      "tags": [
        "c",
        "c++"
      ],
      "id": "5xzuff"
    },
    {
      "title": "The glorious @xkcdRandom Zig builtin",
      "url": "https://ochagavia.nl/blog/the-glorious-@xkcdrandom-zig-builtin/",
      "score": 49,
      "comments": 8,
      "tags": [
        "compilers",
        "satire",
        "zig"
      ],
      "id": "5hoqzj"
    },
    {
      "title": "Software is slow because of bad design, not slow languages",
      "url": "https://www.seangoedecke.com/software-is-slow-because-of-bad-design-not-slow-languages/",
      "score": 41,
      "comments": 45,
      "tags": [
        "performance"
      ],
      "id": "hd72yt"
    },
    {
      "title": "How close can pure FP get to C?",
      "url": "https://rtfeldman.com/fp-vs-c",
      "score": 38,
      "comments": 10,
      "tags": [
        "performance",
        "programming"
      ],
      "id": "7me8wm"
    },
    {
      "title": "Docker is weird",
      "url": "https://codeandcake.dev/posts/2026-10-22-docker-is-weird",
      "score": 96,
      "comments": 43,
      "tags": [
        "programming"
      ],
      "id": "xsz9sc"
    },
    {
      "title": "Please don't mess with links",
      "url": "https://maurycyz.com/misc/real_links/",
      "score": 93,
      "comments": 23,
      "tags": [
        "web"
      ],
      "id": "mucay8"
    },
    {
      "title": "UUIDv7 doesn't have the properties you think it does",
      "url": "https://alexsci.com/blog/uuidv7-is-weird/",
      "score": 42,
      "comments": 12,
      "tags": [
        "distributed",
        "python"
      ],
      "id": "kcyzco"
    },
    {
      "title": "Debunking \"Faster than Rust\": Malicious Benchmarks in Tov",
      "url": "https://blog.fyralabs.com/debunking-faster-than-rust-malicious-benchmarks-in-tov/",
      "score": 38,
      "comments": 16,
      "tags": [
        "performance"
      ],
      "id": "gajtrm"
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
      "forks": 9239,
      "added_stars": 48343,
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
      "author": "vectorize-io",
      "repo": "hindsight",
      "avatar": "https://github.com/vectorize-io.png",
      "repo_link": "https://github.com/vectorize-io/hindsight",
      "desc": "Hindsight: Agent Memory That Learns",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6232,
      "added_stars": 28115,
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
          "username": "cdbartholomew",
          "href": "https://github.com/cdbartholomew",
          "avatar": "https://avatars.githubusercontent.com/u/22917476"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 3578,
      "added_stars": 6635,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4643,
      "added_stars": 7614,
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
          "username": "mhegazy",
          "href": "https://github.com/mhegazy",
          "avatar": "https://avatars.githubusercontent.com/u/8000722"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 2222,
      "added_stars": 6519,
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
      "author": "rohitg00",
      "repo": "ai-engineering-from-scratch",
      "avatar": "https://github.com/rohitg00.png",
      "repo_link": "https://github.com/rohitg00/ai-engineering-from-scratch",
      "desc": "Learn AI Engineering! Learn it. Build it. Ship it for others.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12807,
      "added_stars": 17479,
      "builtBy": [
        {
          "username": "rohitg00",
          "href": "https://github.com/rohitg00",
          "avatar": "https://avatars.githubusercontent.com/u/48523873"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "abhinav-m22",
          "href": "https://github.com/abhinav-m22",
          "avatar": "https://avatars.githubusercontent.com/u/113239388"
        },
        {
          "username": "jkhandebharad",
          "href": "https://github.com/jkhandebharad",
          "avatar": "https://avatars.githubusercontent.com/u/177315487"
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
      "forks": 1395,
      "added_stars": 6225,
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
      "forks": 3428,
      "added_stars": 3867,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5087,
      "added_stars": 6906,
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
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8945,
      "added_stars": 16814,
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
          "username": "LohseZSai",
          "href": "https://github.com/LohseZSai",
          "avatar": "https://avatars.githubusercontent.com/u/116092574"
        },
        {
          "username": "nyxst4ck",
          "href": "https://github.com/nyxst4ck",
          "avatar": "https://avatars.githubusercontent.com/u/289980115"
        },
        {
          "username": "ricardolaurito",
          "href": "https://github.com/ricardolaurito",
          "avatar": "https://avatars.githubusercontent.com/u/75488296"
        }
      ]
    },
    {
      "author": "wshobson",
      "repo": "agents",
      "avatar": "https://github.com/wshobson.png",
      "repo_link": "https://github.com/wshobson/agents",
      "desc": "Multi-harness agentic plugin marketplace for Claude Code, Codex, Cursor, OpenCode, GitHub Copilot, Google Antigravity, and Pi",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4411,
      "added_stars": 1821,
      "builtBy": [
        {
          "username": "wshobson",
          "href": "https://github.com/wshobson",
          "avatar": "https://avatars.githubusercontent.com/u/553618"
        },
        {
          "username": "web-flow",
          "href": "https://github.com/web-flow",
          "avatar": "https://avatars.githubusercontent.com/u/19864447"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jau123",
          "href": "https://github.com/jau123",
          "avatar": "https://avatars.githubusercontent.com/u/130447398"
        }
      ]
    },
    {
      "author": "lightseekorg",
      "repo": "tokenspeed",
      "avatar": "https://github.com/lightseekorg.png",
      "repo_link": "https://github.com/lightseekorg/tokenspeed",
      "desc": "TokenSpeed is a speed-of-light LLM inference engine.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 374,
      "added_stars": 617,
      "builtBy": [
        {
          "username": "lightseek-bot",
          "href": "https://github.com/lightseek-bot",
          "avatar": "https://avatars.githubusercontent.com/u/243258330"
        },
        {
          "username": "antiagainst",
          "href": "https://github.com/antiagainst",
          "avatar": "https://avatars.githubusercontent.com/u/487928"
        },
        {
          "username": "nperrin-fr",
          "href": "https://github.com/nperrin-fr",
          "avatar": "https://avatars.githubusercontent.com/u/297528256"
        },
        {
          "username": "longcat-ia-team",
          "href": "https://github.com/longcat-ia-team",
          "avatar": "https://avatars.githubusercontent.com/u/312376714"
        },
        {
          "username": "borontion",
          "href": "https://github.com/borontion",
          "avatar": "https://avatars.githubusercontent.com/u/25846776"
        }
      ]
    },
    {
      "author": "calesthio",
      "repo": "OpenMontage",
      "avatar": "https://github.com/calesthio.png",
      "repo_link": "https://github.com/calesthio/OpenMontage",
      "desc": "World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9220,
      "added_stars": 10478,
      "builtBy": [
        {
          "username": "calesthio",
          "href": "https://github.com/calesthio",
          "avatar": "https://avatars.githubusercontent.com/u/213189893"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "0xDevNinja",
          "href": "https://github.com/0xDevNinja",
          "avatar": "https://avatars.githubusercontent.com/u/102245100"
        },
        {
          "username": "yiyabo",
          "href": "https://github.com/yiyabo",
          "avatar": "https://avatars.githubusercontent.com/u/129351686"
        },
        {
          "username": "xucailiang",
          "href": "https://github.com/xucailiang",
          "avatar": "https://avatars.githubusercontent.com/u/74602715"
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
      "forks": 921,
      "added_stars": 1312,
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
      "author": "pytorch",
      "repo": "pytorch",
      "avatar": "https://github.com/pytorch.png",
      "repo_link": "https://github.com/pytorch/pytorch",
      "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 32413,
      "added_stars": 2549,
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
      "author": "shiyu-coder",
      "repo": "Kronos",
      "avatar": "https://github.com/shiyu-coder.png",
      "repo_link": "https://github.com/shiyu-coder/Kronos",
      "desc": "Kronos: A Foundation Model for the Language of Financial Markets",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7175,
      "added_stars": 4199,
      "builtBy": [
        {
          "username": "shiyu-coder",
          "href": "https://github.com/shiyu-coder",
          "avatar": "https://avatars.githubusercontent.com/u/65760973"
        },
        {
          "username": "Luciferbobo",
          "href": "https://github.com/Luciferbobo",
          "avatar": "https://avatars.githubusercontent.com/u/54936491"
        },
        {
          "username": "CharlesJ-ABu",
          "href": "https://github.com/CharlesJ-ABu",
          "avatar": "https://avatars.githubusercontent.com/u/18326516"
        },
        {
          "username": "AnMakc",
          "href": "https://github.com/AnMakc",
          "avatar": "https://avatars.githubusercontent.com/u/1777564"
        },
        {
          "username": "randyy179",
          "href": "https://github.com/randyy179",
          "avatar": "https://avatars.githubusercontent.com/u/129808685"
        }
      ]
    },
    {
      "author": "fastapi",
      "repo": "fastapi",
      "avatar": "https://github.com/fastapi.png",
      "repo_link": "https://github.com/fastapi/fastapi",
      "desc": "FastAPI framework, high performance, easy to learn, fast to code, ready for production",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10112,
      "added_stars": 1866,
      "builtBy": [
        {
          "username": "tiangolo",
          "href": "https://github.com/tiangolo",
          "avatar": "https://avatars.githubusercontent.com/u/1326112"
        },
        {
          "username": "YuriiMotov",
          "href": "https://github.com/YuriiMotov",
          "avatar": "https://avatars.githubusercontent.com/u/109919500"
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
      "forks": 5684,
      "added_stars": 4147,
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
      "author": "ahujasid",
      "repo": "mcp-for-blender",
      "avatar": "https://github.com/ahujasid.png",
      "repo_link": "https://github.com/ahujasid/mcp-for-blender",
      "desc": "Community plugin to control Blender 3D with any LLM of your choice. Not affiliated with the official Blender Foundation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2917,
      "added_stars": 2972,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6413,
      "added_stars": 18268,
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
      "author": "paperclipai",
      "repo": "paperclip",
      "avatar": "https://github.com/paperclipai.png",
      "repo_link": "https://github.com/paperclipai/paperclip",
      "desc": "The open-source app everyone uses to manage agents at work",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 17724,
      "added_stars": 25543,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2207,
      "added_stars": 8135,
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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1367,
      "added_stars": 5333,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5454,
      "added_stars": 12006,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7987,
      "added_stars": 6387,
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
      "forks": 9067,
      "added_stars": 8445,
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
      "author": "supabase",
      "repo": "supabase",
      "avatar": "https://github.com/supabase.png",
      "repo_link": "https://github.com/supabase/supabase",
      "desc": "The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16936,
      "added_stars": 3317,
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
      "author": "vercel-labs",
      "repo": "skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/skills",
      "desc": "The open agent skills tool - npx skills",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3120,
      "added_stars": 4084,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5375,
      "added_stars": 6681,
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
      "author": "Effect-TS",
      "repo": "effect",
      "avatar": "https://github.com/Effect-TS.png",
      "repo_link": "https://github.com/Effect-TS/effect",
      "desc": "Build production-ready applications in TypeScript",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 876,
      "added_stars": 1237,
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
      "author": "elie222",
      "repo": "rakazo",
      "avatar": "https://github.com/elie222.png",
      "repo_link": "https://github.com/elie222/rakazo",
      "desc": "Open-source Grok Bot alternative. Choose your own model and sandbox.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 965,
      "added_stars": 2518,
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
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca is the place for working with a fleet of agents (e.g. Grok Bot, Claude Code). Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6577,
      "added_stars": 27848,
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
      "author": "LibreSpark",
      "repo": "LibreTV",
      "avatar": "https://github.com/LibreSpark.png",
      "repo_link": "https://github.com/LibreSpark/LibreTV",
      "desc": "一分钟搭建影视站，支持Docker等部署方式",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 29936,
      "added_stars": 7573,
      "builtBy": [
        {
          "username": "bestZwei",
          "href": "https://github.com/bestZwei",
          "avatar": "https://avatars.githubusercontent.com/u/110226580"
        },
        {
          "username": "senshinya",
          "href": "https://github.com/senshinya",
          "avatar": "https://avatars.githubusercontent.com/u/155552943"
        },
        {
          "username": "JohnsonRan",
          "href": "https://github.com/JohnsonRan",
          "avatar": "https://avatars.githubusercontent.com/u/89735151"
        },
        {
          "username": "WLongSAMA",
          "href": "https://github.com/WLongSAMA",
          "avatar": "https://avatars.githubusercontent.com/u/12743204"
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
      "forks": 1916,
      "added_stars": 6799,
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
      "author": "mobile-next",
      "repo": "mobile-mcp",
      "avatar": "https://github.com/mobile-next.png",
      "repo_link": "https://github.com/mobile-next/mobile-mcp",
      "desc": "Model Context Protocol Server for Mobile Automation and Scraping (iOS, Android, Emulators, Simulators and Real Devices)",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 883,
      "added_stars": 3155,
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
    },
    {
      "author": "vitejs",
      "repo": "vite",
      "avatar": "https://github.com/vitejs.png",
      "repo_link": "https://github.com/vitejs/vite",
      "desc": "Next generation frontend tooling. It's fast!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8874,
      "added_stars": 822,
      "builtBy": [
        {
          "username": "sapphi-red",
          "href": "https://github.com/sapphi-red",
          "avatar": "https://avatars.githubusercontent.com/u/49056869"
        },
        {
          "username": "yyx990803",
          "href": "https://github.com/yyx990803",
          "avatar": "https://avatars.githubusercontent.com/u/499550"
        },
        {
          "username": "patak-cat",
          "href": "https://github.com/patak-cat",
          "avatar": "https://avatars.githubusercontent.com/u/583075"
        },
        {
          "username": "bluwy",
          "href": "https://github.com/bluwy",
          "avatar": "https://avatars.githubusercontent.com/u/34116392"
        }
      ]
    },
    {
      "author": "Renhuai123",
      "repo": "ziwei-doushu",
      "avatar": "https://github.com/Renhuai123.png",
      "repo_link": "https://github.com/Renhuai123/ziwei-doushu",
      "desc": "紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1434,
      "added_stars": 2556,
      "builtBy": [
        {
          "username": "Renhuai123",
          "href": "https://github.com/Renhuai123",
          "avatar": "https://avatars.githubusercontent.com/u/91890238"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Renhuai",
          "href": "https://github.com/Renhuai",
          "avatar": "https://avatars.githubusercontent.com/u/108378938"
        },
        {
          "username": "sakura168899-debug",
          "href": "https://github.com/sakura168899-debug",
          "avatar": "https://avatars.githubusercontent.com/u/289346330"
        }
      ]
    },
    {
      "author": "thesysdev",
      "repo": "openui",
      "avatar": "https://github.com/thesysdev.png",
      "repo_link": "https://github.com/thesysdev/openui",
      "desc": "The Open Standard for Generative UI",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 892,
      "added_stars": 3597,
      "builtBy": [
        {
          "username": "i-subham23",
          "href": "https://github.com/i-subham23",
          "avatar": "https://avatars.githubusercontent.com/u/173032156"
        },
        {
          "username": "AbhinRustagi",
          "href": "https://github.com/AbhinRustagi",
          "avatar": "https://avatars.githubusercontent.com/u/55152006"
        },
        {
          "username": "ankit-thesys",
          "href": "https://github.com/ankit-thesys",
          "avatar": "https://avatars.githubusercontent.com/u/173031316"
        },
        {
          "username": "abhithesys",
          "href": "https://github.com/abhithesys",
          "avatar": "https://avatars.githubusercontent.com/u/157345590"
        },
        {
          "username": "zahlekhan",
          "href": "https://github.com/zahlekhan",
          "avatar": "https://avatars.githubusercontent.com/u/27266434"
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
      "forks": 26654,
      "added_stars": 6349,
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
      "title": "926 Steps, Two Lobotomies, and Zero Nudges: Flight-Testing the Commitment Machine Across Gemini, Claude, and GPT-OSS",
      "description": "A 2026 Harvard study of 718 companies found that AI agents write 30% more code and close zero additional tickets because review times jump 49%. Here is what happened when I put my 1986 Commitment Machine into live production across Gemini, Claude, and GPT-OSS.",
      "url": "https://dev.to/gde/926-steps-two-lobotomies-and-zero-nudges-flight-testing-the-commitment-machine-across-gemini-55ca",
      "tags": "ai, programming, architecture, unix",
      "reactions": 13,
      "comments": 29,
      "reading_time": 16,
      "author": "randalschwartz"
    },
    {
      "title": "Building a Multimodal, Suggestion-Based AI Writing Coach with Gemini and Google Docs",
      "description": "When we use generative AI to proofread our daily writing—whether technical reports, business...",
      "url": "https://dev.to/gde/building-a-multimodal-suggestion-based-ai-writing-coach-with-gemini-and-google-docs-ea4",
      "tags": "ai, gemini, googleappsscript, googleworkspace",
      "reactions": 12,
      "comments": 9,
      "reading_time": 26,
      "author": "tanaike"
    },
    {
      "title": "Don't Be a Proxy Between Me and Your AI",
      "description": "I've had this conversation more times than I'd like to admit.  I raise a technical question in a...",
      "url": "https://dev.to/adamthedeveloper/dont-be-a-proxy-between-me-and-your-ai-mcn",
      "tags": "ai, discuss, career, programming",
      "reactions": 67,
      "comments": 41,
      "reading_time": 7,
      "author": "adamthedeveloper"
    },
    {
      "title": "Congrats to the Hacktoberfest Open-Source AI Challenge Week 2: Side Hustle Winners!",
      "description": "We're excited to announce the winners of the Hacktoberfest Open-Source AI Challenge Week 2: Side...",
      "url": "https://dev.to/devteam/congrats-to-the-hacktoberfest-open-source-ai-challenge-week-2-side-hustle-winners-2i33",
      "tags": "devchallenge, hf26challenge, hacktoberfest, softwaredevelopment",
      "reactions": 44,
      "comments": 9,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Comic Studio AI: Turning Voice & Text Prompts into 4-Panel Comics with Google AI Studio, Gemini & Imagen",
      "description": "This post is my submission for DEV Education Track: Build Apps with Google AI Studio.             ...",
      "url": "https://dev.to/gde/comic-studio-ai-turning-voice-text-prompts-into-4-panel-comics-with-google-ai-studio-gemini--2npc",
      "tags": "deved, learngoogleaistudio, googleai, gemini",
      "reactions": 7,
      "comments": 0,
      "reading_time": 4,
      "author": "robinamirbahar"
    },
    {
      "title": "Promise Delivered: Welcome to the DEV Hall of Fame (65 Authors, 65 Masterpieces)",
      "description": "Status: Promise delivered ✅              The Doors Are Open   A little over a month ago, I published...",
      "url": "https://dev.to/georgekobaidze/promise-delivered-welcome-to-the-dev-hall-of-fame-65-authors-65-masterpieces-15fa",
      "tags": "community, discuss, showdev, writing",
      "reactions": 224,
      "comments": 113,
      "reading_time": 25,
      "author": "georgekobaidze"
    },
    {
      "title": "Building a Cross-Model Collaborative Workflow with Google Antigravity",
      "description": "Orchestrating Multiple AI Agents in Parallel via Custom Skills   Series 1/2: Multi-Model...",
      "url": "https://dev.to/gde/building-a-cross-model-collaborative-workflow-with-google-antigravity-2jj5",
      "tags": "gemini, devtools, programming, agents",
      "reactions": 8,
      "comments": 0,
      "reading_time": 5,
      "author": "jimmyliao"
    },
    {
      "title": "I Got Tired of Coming Into My Lab To Check the Pressure of My Cryocooler so I Built a Tool To Do It for Me",
      "description": "This is a submission for the Hacktoberfest Open-Source AI Challenge Week 3: Slow and Steady          ...",
      "url": "https://dev.to/pahorton/i-got-tired-of-coming-into-my-lab-to-check-the-pressure-of-my-cryocooler-so-i-built-a-tool-to-do-it-4ob7",
      "tags": "devchallenge, hf26challenge, tigerdata, githubcopilot",
      "reactions": 57,
      "comments": 21,
      "reading_time": 5,
      "author": "pahorton"
    },
    {
      "title": "Scaling stateful Gemini 4 Argon agent sessions on GKE: Connection draining, startup boost, and session persistence",
      "description": "Architect GKE for long-running Gemini 4 Argon agent sessions using VPA CPU startup boost, GCPBackendPolicy connection draining, and session checkpointing.",
      "url": "https://dev.to/googlecloud/scaling-stateful-gemini-4-argon-agent-sessions-on-gke-connection-draining-startup-boost-and-13ln",
      "tags": "kubernetes, ai, gke, googlecloud",
      "reactions": 11,
      "comments": 0,
      "reading_time": 8,
      "author": "olivi-eh"
    },
    {
      "title": "What was your win this week!?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-4ipe",
      "tags": "weeklyretro",
      "reactions": 26,
      "comments": 7,
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
      "title": "The End of an Era: Akhouri Systems Is Officially Retiring ACALCU and ANOTE (And Why a Solo Founder Had to Do It)",
      "description": "Description: \"Akhouri Systems is ending ACALCU and ANOTE with no further updates or...",
      "url": "https://dev.to/akhourianmolkumar/the-end-of-an-era-akhouri-systems-is-officially-retiring-acalcu-and-anote-and-why-a-solo-founder-2b1p",
      "tags": "devjournal, startup, python, productivity",
      "reactions": 23,
      "comments": 59,
      "reading_time": 4,
      "author": "akhourianmolkumar"
    },
    {
      "title": "Your AI Agent Says “Done.” What Did It Actually Verify?",
      "description": "“Fixed the bug. All tests pass.”  Great.  Which tests? Did they run? Did they cover the bug—or did...",
      "url": "https://dev.to/robertadam987_/your-ai-agent-says-done-what-did-it-actually-verify-16jd",
      "tags": "ai, programming, testing, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "robertadam987_"
    },
    {
      "title": "19 days, 546 messages, 141 users: building my app by mostly talking to Claude Code",
      "description": "I make Tabby, a free tab manager for Chrome, Firefox and Edge. This week I shipped version 1.2 and...",
      "url": "https://dev.to/taewoo/19-days-546-messages-141-users-building-my-app-by-mostly-talking-to-claude-code-1mgb",
      "tags": "ai, productivity, showdev, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "taewoo"
    },
    {
      "title": "Seven phases, four gates: the process every AI-written change went through",
      "description": "Yesterday I said process beat prompting. Here's the process.  Every change to ParkEase, from a...",
      "url": "https://dev.to/rakno/seven-phases-four-gates-the-process-every-ai-written-change-went-through-2fai",
      "tags": "ai, programming, productivity, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "rakno"
    },
    {
      "title": "Your agent is done. The pull request isn't.",
      "description": "Claude Code fixed the bug in four minutes and opened a pull request. Then I spent the next forty...",
      "url": "https://dev.to/heylittlepan/your-agent-is-done-the-pull-request-isnt-1877",
      "tags": "ai, productivity, github, devtools",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "heylittlepan"
    },
    {
      "title": "Which Session Is Waiting for Me? Claude Code Hooks on a Stream Deck",
      "description": "I usually have several Claude Code sessions running side by side — a document here, a small fix...",
      "url": "https://dev.to/altair_alter/which-session-is-waiting-for-me-claude-code-hooks-on-a-stream-deck-3moo",
      "tags": "ai, claudecode, productivity, javascript",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "altair_alter"
    },
    {
      "title": "Rushed vs. Rigorous: The Executive Blueprint for AI Adoption That Doesn't Alienate Your Best Engineers",
      "description": "Two companies. Same AI mandate, same quarter, same budget for licenses.  One ends the year shipping...",
      "url": "https://dev.to/debashish_ghosal/rushed-vs-rigorous-the-executive-blueprint-for-ai-adoption-that-doesnt-alienate-your-best-19pn",
      "tags": "discuss, ai, career, productivity",
      "reactions": 6,
      "comments": 1,
      "reading_time": 8,
      "author": "debashish_ghosal"
    },
    {
      "title": "Lid closed, Claude Code still running: how macOS DarkWakes burn your weekly limit overnight",
      "description": "You start a long Claude Code task, close the MacBook lid, and go to bed. In the morning the task...",
      "url": "https://dev.to/dawonlee/lid-closed-claude-code-still-running-how-macos-darkwakes-burn-your-weekly-limit-overnight-217i",
      "tags": "claudecode, claude, macos, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "dawonlee"
    },
    {
      "title": "Apps that block YouTube Shorts on iPhone but keep regular videos (2026 comparison)",
      "description": "You can't fully turn off Shorts in the YouTube app on an adult account. The closest built-in option...",
      "url": "https://dev.to/ayumu_kitabayashi_8e0de96/apps-that-block-youtube-shorts-on-iphone-but-keep-regular-videos-2026-comparison-4k04",
      "tags": "ios, youtube, productivity, iphone",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "ayumu_kitabayashi_8e0de96"
    },
    {
      "title": "Applis pour bloquer les Reels Instagram sur iPhone en gardant les messages (comparatif 2026)",
      "description": "L'application officielle d'Instagram ne permet pas de supprimer les Reels. Les comptes adultes n'ont...",
      "url": "https://dev.to/ayumu_kitabayashi_8e0de96/applis-pour-bloquer-les-reels-instagram-sur-iphone-en-gardant-les-messages-comparatif-2026-502m",
      "tags": "ios, productivity, iphone, french",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "ayumu_kitabayashi_8e0de96"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

