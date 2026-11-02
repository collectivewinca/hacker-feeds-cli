# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-11-02 06:32:57 UTC

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
      "author": "cloudflare",
      "repo": "security-audit-skill",
      "avatar": "https://github.com/cloudflare.png",
      "repo_link": "https://github.com/cloudflare/security-audit-skill",
      "desc": "A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3689,
      "added_stars": 10069,
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
      "author": "Leonxlnx",
      "repo": "taste-skill",
      "avatar": "https://github.com/Leonxlnx.png",
      "repo_link": "https://github.com/Leonxlnx/taste-skill",
      "desc": "Agent skills that give coding agents taste: art direction, reference images and a browser check instead of generic AI pages",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7292,
      "added_stars": 5336,
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
      "author": "affaan-m",
      "repo": "ECC",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/ECC",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 43658,
      "added_stars": 6299,
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
      "author": "YuJunZhiXue",
      "repo": "dsh-purge",
      "avatar": "https://github.com/YuJunZhiXue.png",
      "repo_link": "https://github.com/YuJunZhiXue/dsh-purge",
      "desc": "DeepSeek Harness 破甲：让所有模型都能破甲，不同模型可换不同提示词；默认提示词面向国模「小码酱」。Jailbreak for every model — swap prompts per model. 求 Star 收藏 ⭐ 如要二开，请查看署名要求部分",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 3589,
      "added_stars": 6644,
      "builtBy": [
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "YuJunZhiXue",
          "href": "https://github.com/YuJunZhiXue",
          "avatar": "https://avatars.githubusercontent.com/u/188421097"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Musan-34",
          "href": "https://github.com/Musan-34",
          "avatar": "https://avatars.githubusercontent.com/u/279201993"
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
      "forks": 2663,
      "added_stars": 9518,
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
      "author": "coreyhaines31",
      "repo": "marketingskills",
      "avatar": "https://github.com/coreyhaines31.png",
      "repo_link": "https://github.com/coreyhaines31/marketingskills",
      "desc": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 8518,
      "added_stars": 1370,
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
          "username": "aaronbeashel",
          "href": "https://github.com/aaronbeashel",
          "avatar": "https://avatars.githubusercontent.com/u/93219218"
        },
        {
          "username": "FekyBaz",
          "href": "https://github.com/FekyBaz",
          "avatar": "https://avatars.githubusercontent.com/u/97516177"
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
      "forks": 1188,
      "added_stars": 1727,
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
      "author": "juliangarnier",
      "repo": "anime",
      "avatar": "https://github.com/juliangarnier.png",
      "repo_link": "https://github.com/juliangarnier/anime",
      "desc": "JavaScript animation engine",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5041,
      "added_stars": 375,
      "builtBy": [
        {
          "username": "juliangarnier",
          "href": "https://github.com/juliangarnier",
          "avatar": "https://avatars.githubusercontent.com/u/1268691"
        },
        {
          "username": "kn0wn",
          "href": "https://github.com/kn0wn",
          "avatar": "https://avatars.githubusercontent.com/u/59017897"
        },
        {
          "username": "Maximilianos",
          "href": "https://github.com/Maximilianos",
          "avatar": "https://avatars.githubusercontent.com/u/2260302"
        },
        {
          "username": "lukeed",
          "href": "https://github.com/lukeed",
          "avatar": "https://avatars.githubusercontent.com/u/5855893"
        },
        {
          "username": "fljot",
          "href": "https://github.com/fljot",
          "avatar": "https://avatars.githubusercontent.com/u/404216"
        }
      ]
    },
    {
      "author": "techjarves",
      "repo": "Portable-Local-Studio",
      "avatar": "https://github.com/techjarves.png",
      "repo_link": "https://github.com/techjarves/Portable-Local-Studio",
      "desc": "Portable local AI studio for Windows, Linux, and macOS. Zero-setup GUI for Image Generation, GGUF LLMs, Text to Speech & Speech to Text",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 436,
      "added_stars": 173,
      "builtBy": [
        {
          "username": "techjarves",
          "href": "https://github.com/techjarves",
          "avatar": "https://avatars.githubusercontent.com/u/54399984"
        },
        {
          "username": "howwonder",
          "href": "https://github.com/howwonder",
          "avatar": "https://avatars.githubusercontent.com/u/170706239"
        },
        {
          "username": "orailnoor",
          "href": "https://github.com/orailnoor",
          "avatar": "https://avatars.githubusercontent.com/u/34442749"
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
      "forks": 1368,
      "added_stars": 539,
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
          "username": "boseq",
          "href": "https://github.com/boseq",
          "avatar": "https://avatars.githubusercontent.com/u/307062491"
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
      "by": "roansh",
      "descendants": 215,
      "id": 50326821,
      "kids": [
        50333684,
        50333399,
        50330302,
        50333656,
        50332843,
        50328127,
        50333358,
        50333671,
        50330354,
        50330808,
        50330698,
        50327283,
        50333214,
        50333126,
        50327185,
        50328810,
        50327092,
        50328528,
        50333295,
        50332877,
        50327129,
        50327103,
        50327140,
        50328268,
        50327191,
        50327064,
        50327165,
        50328063,
        50332178,
        50327497,
        50327148,
        50328271,
        50327434,
        50327238,
        50333609,
        50332773,
        50328459,
        50331193,
        50329513,
        50329488,
        50330752,
        50327553,
        50328171,
        50333581,
        50327451,
        50327971,
        50328349,
        50330295,
        50331472,
        50330292,
        50327225,
        50328581,
        50329207,
        50327496,
        50328018,
        50333221,
        50328308,
        50333159,
        50328000,
        50330388,
        50328844,
        50327359,
        50330967,
        50331919,
        50327131,
        50328916,
        50327632,
        50327985,
        50327646,
        50328375,
        50332226,
        50330413,
        50331760,
        50329340,
        50329674,
        50329338,
        50332134,
        50327899,
        50327157,
        50327203,
        50328362,
        50329294,
        50329165,
        50329866,
        50330309,
        50332713,
        50327658,
        50333364,
        50328756,
        50330414,
        50327370,
        50328465,
        50329112,
        50327656,
        50327027,
        50329080,
        50327032,
        50328769,
        50330002,
        50327921,
        50328662,
        50333650,
        50327201,
        50331908,
        50326995,
        50328714,
        50332483,
        50328098,
        50326869,
        50327942,
        50333610,
        50333074
      ],
      "score": 1194,
      "text": "Saw Karpathy&#x27;s HackerTube and wanted the same thing for books. So I had Claude build one (Opus 5.5).<p>It&#x27;s ~16.5k books that at least two different HN commenters brought up, from 2007 till now. Each book links back to the comments that mentioned it. Data is downloadable from the about page.<p>To be clear: Claude wrote almost all of it, including the data pipeline and the site. I mostly steered and made calls, bought the domain name, etc.<p>It counts mentions, so it&#x27;s not perfect (praising a book and trashing it both count). If your favourite book is missing or matched to the wrong thing, tell me.",
      "time": 1793548708,
      "title": "Show HN: HackerBooks – HackerTube, but for books mentioned on HN",
      "type": "story",
      "url": "https://hackerbooks.org"
    },
    {
      "by": "soheilpro",
      "descendants": 165,
      "id": 50312408,
      "kids": [
        50331818,
        50333745,
        50331824,
        50331711,
        50312516,
        50332733,
        50333588,
        50332770,
        50333694,
        50332832,
        50333047,
        50333225,
        50333607,
        50331947,
        50332195,
        50332078,
        50332308,
        50331729,
        50332949,
        50333715,
        50333655,
        50333591,
        50332540,
        50333618,
        50332461,
        50332104,
        50331726,
        50331811,
        50332032,
        50332881
      ],
      "score": 257,
      "time": 1793410736,
      "title": "Postgres 19 is late because so many more bugs are being found now",
      "type": "story",
      "url": "http://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html"
    },
    {
      "by": "joonehur",
      "descendants": 6,
      "id": 50332163,
      "kids": [
        50333667,
        50332706,
        50332851
      ],
      "score": 72,
      "time": 1793584778,
      "title": "F/OSS Comics #13: BSD Unix, Part 3 – The Beginning of BSD Unix",
      "type": "story",
      "url": "https://fosscomics.com/posts/13.%20BSD%20Unix%20Part%203%20-%20The%20Beginning%20of%20BSD%20Unix/"
    },
    {
      "by": "karpathy",
      "descendants": 555,
      "id": 50319510,
      "kids": [
        50327005,
        50326842,
        50329520,
        50320482,
        50330500,
        50323715,
        50333672,
        50319961,
        50327450,
        50322984,
        50319987,
        50320675,
        50333023,
        50319936,
        50321483,
        50327806,
        50320230,
        50328993,
        50327091,
        50327326,
        50319765,
        50321152,
        50322395,
        50327878,
        50329602,
        50319845,
        50325735,
        50333604,
        50320309,
        50321002,
        50322487,
        50326438,
        50320462,
        50322413,
        50320887,
        50326426,
        50320117,
        50319962,
        50320429,
        50324406,
        50328475,
        50323778,
        50331429,
        50323662,
        50321263,
        50320222,
        50320064,
        50320102,
        50329431,
        50321113,
        50321416,
        50323023,
        50319736,
        50321537,
        50320490,
        50322981,
        50328894,
        50319949,
        50331399,
        50328532,
        50319965,
        50319874,
        50321790,
        50323536,
        50326745,
        50330667,
        50327221,
        50320964,
        50327347,
        50322124,
        50320738,
        50326212,
        50319997,
        50320994,
        50332494,
        50327568,
        50319756,
        50320885,
        50325322,
        50320827,
        50320899,
        50321753,
        50320384,
        50325109,
        50322795,
        50323970,
        50319890,
        50319784,
        50324008,
        50321076,
        50328948,
        50328590,
        50319967,
        50322877,
        50323811,
        50321903,
        50320632,
        50330076,
        50321626,
        50322153,
        50330664,
        50328953,
        50323530,
        50327938,
        50322586,
        50326447,
        50324307,
        50321700,
        50322468,
        50324663,
        50323712,
        50328296,
        50320783,
        50322588,
        50320852,
        50320370,
        50322862,
        50319953,
        50325549,
        50321585,
        50320066,
        50331219,
        50320853,
        50324125,
        50322534,
        50320435,
        50325620,
        50320413,
        50321955,
        50319922,
        50320059,
        50322744,
        50323231,
        50328224,
        50327080,
        50326715,
        50327276,
        50323975,
        50331972,
        50326548,
        50321084,
        50320717,
        50322293,
        50322479,
        50323124,
        50320426,
        50322688,
        50322905,
        50319856,
        50319947,
        50319996,
        50323201,
        50321044,
        50321286,
        50319994,
        50323272,
        50321782,
        50321703,
        50320604,
        50321466,
        50330684,
        50324075,
        50320037,
        50321822,
        50324142,
        50323647,
        50329376,
        50326151,
        50326757,
        50324709,
        50323466,
        50324415,
        50324578,
        50320848,
        50329426,
        50322011,
        50324275,
        50324098,
        50322421,
        50327126,
        50332766,
        50322309,
        50322628,
        50322327,
        50323217,
        50320198,
        50321599,
        50320986,
        50327040,
        50320427,
        50320237,
        50320562,
        50320193,
        50321097,
        50324572,
        50321118,
        50323864,
        50323394,
        50321705,
        50323204,
        50323137,
        50323015,
        50321890,
        50323206,
        50319833,
        50320056,
        50320394,
        50321747,
        50320998,
        50320980,
        50321218,
        50328773,
        50324482,
        50319893,
        50321521,
        50319843,
        50322511,
        50333660,
        50320460,
        50324686,
        50321514,
        50330466,
        50330688,
        50328341,
        50322696,
        50325770,
        50326252,
        50332560,
        50320424,
        50320396,
        50332212,
        50322168,
        50322097,
        50321344,
        50319511,
        50323304,
        50325307,
        50320041,
        50322195,
        50323585,
        50320741,
        50323043,
        50321254,
        50322912,
        50319903,
        50326475,
        50324830,
        50320187,
        50319753,
        50320920,
        50326275,
        50321369,
        50326087,
        50326709,
        50326800
      ],
      "score": 2438,
      "text": "YouTube-style UI over 6,454 videos sourced from 39,834 HN comments since 2007.<p><a href=\"https:&#x2F;&#x2F;hackertube.org&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;hackertube.org&#x2F;</a>",
      "time": 1793476613,
      "title": "HackerTube: YouTube built from videos recommended by HN",
      "type": "story",
      "url": "https://karpathy.bearblog.dev/hacker-tube/"
    },
    {
      "by": "anurag",
      "descendants": 20,
      "id": 50331784,
      "kids": [
        50333116,
        50333351,
        50333043,
        50333345,
        50332800,
        50333033,
        50333257,
        50333359,
        50333498
      ],
      "score": 60,
      "time": 1793581756,
      "title": "Trigger.dev customer environment variables exposed",
      "type": "story",
      "url": "https://trigger.dev/blog/security-incident-nov-2026"
    },
    {
      "by": "aizk",
      "descendants": 0,
      "id": 50333339,
      "score": 7,
      "text": "After seeing Karpathy&#x27;s Hackertube and Hackerbooks, I just had to make Wikihack.<p>I scraped all mentions of wikipedia on hackernews and ranked them, and turn them into a scrollable feed to make it a bit more easy to digest &#x2F; interact with. You can see where people submitted the articles and where people mentioned it in comments.<p>The top shows the most frequently linked articles.<p>Random is random but slightly weighted towards the more frequently linked articles (a little bit like Wikipedia actually).<p>Rising is ranked towards the past 12 months.<p>The entire site is served only through the frontend -- I&#x27;ll add more features if people enjoy this!",
      "time": 1793595990,
      "title": "Show HN: Wikihack – HackerTube, but for Wikipedia articles mentioned on HN",
      "type": "story",
      "url": "https://wikihack.netlify.app"
    },
    {
      "by": "_Microft",
      "descendants": 30,
      "id": 50315217,
      "kids": [
        50333628,
        50332960,
        50333617,
        50332542,
        50333560,
        50333297,
        50322725,
        50322900
      ],
      "score": 77,
      "time": 1793447627,
      "title": "Mystery of 60-Second Fluctuations in Power Grids Solved",
      "type": "story",
      "url": "https://www.fz-juelich.de/en/news/archive/press-release/2026/mystery-of-60-second-fluctuations-in-power-grids-solved"
    },
    {
      "by": "LecroJS",
      "descendants": 423,
      "id": 50328896,
      "kids": [
        50332515,
        50331408,
        50330810,
        50329201,
        50329648,
        50333461,
        50332351,
        50332788,
        50329491,
        50331572,
        50333479,
        50330973,
        50333317,
        50332124,
        50332799,
        50331125,
        50333395,
        50330957,
        50329933,
        50333218,
        50329240,
        50329595,
        50333595,
        50333125,
        50330660,
        50329633,
        50332742,
        50332292,
        50329187,
        50333021,
        50329236,
        50333144,
        50332061,
        50331954,
        50332054,
        50332886,
        50330815,
        50332689,
        50333374,
        50333669,
        50332527,
        50331949,
        50333180,
        50333050,
        50329277,
        50332544,
        50331473,
        50331958,
        50329331,
        50332528,
        50332449,
        50329188,
        50333400,
        50331904,
        50329932,
        50332466,
        50330989,
        50329196,
        50329791,
        50330631,
        50330696,
        50331687,
        50330859,
        50332138,
        50329664,
        50331705,
        50329524,
        50329658,
        50329194,
        50331964,
        50331877,
        50329446,
        50331187,
        50331559,
        50329683,
        50330759,
        50329885,
        50329546,
        50332026,
        50332164,
        50329324,
        50331202,
        50331684,
        50331646,
        50332493,
        50329688,
        50333026,
        50331048,
        50329689,
        50330776,
        50331275,
        50331686,
        50329256,
        50329682,
        50329290,
        50329703,
        50331468,
        50330946,
        50329321,
        50329604,
        50329830,
        50330872,
        50330629,
        50329724,
        50330572,
        50332001,
        50331240,
        50331454,
        50331668,
        50331261,
        50329979,
        50332384,
        50330625,
        50332222,
        50330877,
        50332005,
        50331967,
        50329152,
        50331467,
        50332433,
        50330789,
        50330541,
        50329550,
        50329512,
        50331111,
        50330691,
        50331474,
        50330804,
        50330577,
        50333505,
        50330728,
        50331968,
        50333418
      ],
      "score": 262,
      "text": "I haven’t owned a TV in years and would like one that respects my privacy. Are there any TV’s which do this well? I am looking for something in the 60”to 80”range and would like a 4k display with at least 60hz display. I don’t mind paying a premium.<p>I have heard good things about Apple TV as a better alternative to most smart TV native apps. Would some TV’s pair better with this than others for privacy? I don’t want the TV doing anything other than being the display for Apple TV.<p>I am curious what success others have had.",
      "time": 1793561727,
      "title": "Ask HN: Which TV do you recommend for privacy?",
      "type": "story"
    },
    {
      "by": "raphlinus",
      "descendants": 21,
      "id": 50299811,
      "kids": [
        50331792,
        50330083,
        50329909,
        50330077,
        50329870,
        50330632,
        50330578
      ],
      "score": 124,
      "time": 1793333826,
      "title": "Nibnib: Image compression with extreme decompression speed",
      "type": "story",
      "url": "https://github.com/raphlinus/nibnib"
    },
    {
      "by": "luu",
      "descendants": 16,
      "id": 50271106,
      "kids": [
        50330106,
        50333155,
        50329845,
        50329882,
        50332252
      ],
      "score": 103,
      "time": 1793180772,
      "title": "Tips for more effective fuzz testing with AFL++",
      "type": "story",
      "url": "https://nullprogram.com/blog/2025/02/05/"
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
      "title": "An outsider's perspective on Scion and Mononoke",
      "url": "https://typesanitizer.com/blog/scion.html",
      "score": 72,
      "comments": 10,
      "tags": [
        "vcs"
      ],
      "id": "s2qeww"
    },
    {
      "title": "Pratt parsing is a black box",
      "url": "https://vinipsmaker.github.io/blog/article/pratt-parsing-is-a-black-box/",
      "score": 26,
      "comments": 10,
      "tags": [
        "compilers",
        "plt"
      ],
      "id": "bzazar"
    },
    {
      "title": "Introducing Kwi, a new KDE terminal emulator",
      "url": "https://blogs.kde.org/2026/11/01/introducing-kwi/",
      "score": 111,
      "comments": 32,
      "tags": [
        "linux"
      ],
      "id": "lt44rt"
    },
    {
      "title": "Work on GEFS (the Good Enough File System) for OpenBSD progresses",
      "url": "https://www.undeadly.org/cgi?action=article;sid=20261101115637",
      "score": 31,
      "comments": 1,
      "tags": [
        "openbsd"
      ],
      "id": "zjjvbo"
    },
    {
      "title": "London Meetup - Nov 2026",
      "url": "",
      "score": 24,
      "comments": 4,
      "tags": [
        "event"
      ],
      "id": "cqzwwg"
    },
    {
      "title": "Jepsen: ParticleDB 1.1.4",
      "url": "https://jepsen.io/analyses/particledb-1.1.4",
      "score": 147,
      "comments": 40,
      "tags": [
        "databases",
        "testing"
      ],
      "id": "drwd4j"
    },
    {
      "title": "Postgres 19 is late, and it's AI's fault",
      "url": "http://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html",
      "score": 5,
      "comments": 1,
      "tags": [
        "databases",
        "practices"
      ],
      "id": "0yxkvs"
    },
    {
      "title": "XKCD and Fourier",
      "url": "https://leancrew.com/all-this/2026/10/xkcd-and-fourier/",
      "score": 37,
      "comments": 2,
      "tags": [
        "math"
      ],
      "id": "mni8ri"
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
      "forks": 10910,
      "added_stars": 47055,
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
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3807,
      "added_stars": 8486,
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
      "author": "earthtojake",
      "repo": "text-to-cad",
      "avatar": "https://github.com/earthtojake.png",
      "repo_link": "https://github.com/earthtojake/text-to-cad",
      "desc": "Design physical products with AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2374,
      "added_stars": 8238,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4764,
      "added_stars": 8625,
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
      "author": "AgriciDaniel",
      "repo": "claude-seo",
      "avatar": "https://github.com/AgriciDaniel.png",
      "repo_link": "https://github.com/AgriciDaniel/claude-seo",
      "desc": "Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3368,
      "added_stars": 7274,
      "builtBy": [
        {
          "username": "AgriciDaniel",
          "href": "https://github.com/AgriciDaniel",
          "avatar": "https://avatars.githubusercontent.com/u/223140489"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Nordalux",
          "href": "https://github.com/Nordalux",
          "avatar": "https://avatars.githubusercontent.com/u/129338099"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
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
      "forks": 9611,
      "added_stars": 20927,
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6589,
      "added_stars": 13133,
      "builtBy": [
        {
          "username": "pancacake",
          "href": "https://github.com/pancacake",
          "avatar": "https://avatars.githubusercontent.com/u/150592536"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Pinkllow",
          "href": "https://github.com/Pinkllow",
          "avatar": "https://avatars.githubusercontent.com/u/272976591"
        },
        {
          "username": "evan188199-tech",
          "href": "https://github.com/evan188199-tech",
          "avatar": "https://avatars.githubusercontent.com/u/238371241"
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
      "forks": 2062,
      "added_stars": 5005,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5221,
      "added_stars": 7085,
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
      "author": "calesthio",
      "repo": "OpenMontage",
      "avatar": "https://github.com/calesthio.png",
      "repo_link": "https://github.com/calesthio/OpenMontage",
      "desc": "World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 9802,
      "added_stars": 12581,
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
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "yiyabo",
          "href": "https://github.com/yiyabo",
          "avatar": "https://avatars.githubusercontent.com/u/129351686"
        }
      ]
    },
    {
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3340,
      "added_stars": 4436,
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
          "username": "zouyonghe",
          "href": "https://github.com/zouyonghe",
          "avatar": "https://avatars.githubusercontent.com/u/62183434"
        },
        {
          "username": "LIghtJUNction",
          "href": "https://github.com/LIghtJUNction",
          "avatar": "https://avatars.githubusercontent.com/u/106986785"
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
      "forks": 4454,
      "added_stars": 2071,
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
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use Claude Code, Codex, Antigravity, VSCode, Pi, and OpenCode (and 6 other harnesses) for free (1.3B+ free tokens) from your terminal, app, IDE, or phone, and now from the browser with native browser sessions (multi-harness + multi-model) like OpenClaw (voice supported + ToS friendly)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10254,
      "added_stars": 9946,
      "builtBy": [
        {
          "username": "Alishahryar1",
          "href": "https://github.com/Alishahryar1",
          "avatar": "https://avatars.githubusercontent.com/u/20476625"
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
          "username": "Tanishq-1",
          "href": "https://github.com/Tanishq-1",
          "avatar": "https://avatars.githubusercontent.com/u/49880456"
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
      "forks": 345,
      "added_stars": 3608,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "danyuchn",
          "href": "https://github.com/danyuchn",
          "avatar": "https://avatars.githubusercontent.com/u/130748619"
        },
        {
          "username": "mathiasesn",
          "href": "https://github.com/mathiasesn",
          "avatar": "https://avatars.githubusercontent.com/u/27091759"
        },
        {
          "username": "yupasik",
          "href": "https://github.com/yupasik",
          "avatar": "https://avatars.githubusercontent.com/u/3337248"
        },
        {
          "username": "KevinGriffin-new",
          "href": "https://github.com/KevinGriffin-new",
          "avatar": "https://avatars.githubusercontent.com/u/117586586"
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
      "forks": 13501,
      "added_stars": 14314,
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
      "author": "ifixai-ai",
      "repo": "iFixAi",
      "avatar": "https://github.com/ifixai-ai.png",
      "repo_link": "https://github.com/ifixai-ai/iFixAi",
      "desc": "Independent Auditing of AI Agents. Run by human or the agent itself, to answer the most crucial question in the AI Agent Economy. Is the agent doing what is supposed to do? With iFixAi you can have this answer in less than 120 seconds.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1776,
      "added_stars": 27444,
      "builtBy": [
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "n-papaioannou",
          "href": "https://github.com/n-papaioannou",
          "avatar": "https://avatars.githubusercontent.com/u/258243974"
        },
        {
          "username": "stefyi-4355",
          "href": "https://github.com/stefyi-4355",
          "avatar": "https://avatars.githubusercontent.com/u/260612219"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "luongnv89",
      "repo": "claude-howto",
      "avatar": "https://github.com/luongnv89.png",
      "repo_link": "https://github.com/luongnv89/claude-howto",
      "desc": "A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5692,
      "added_stars": 4819,
      "builtBy": [
        {
          "username": "luongnv89",
          "href": "https://github.com/luongnv89",
          "avatar": "https://avatars.githubusercontent.com/u/3288457"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "edocltd",
          "href": "https://github.com/edocltd",
          "avatar": "https://avatars.githubusercontent.com/u/258913972"
        },
        {
          "username": "toanalien",
          "href": "https://github.com/toanalien",
          "avatar": "https://avatars.githubusercontent.com/u/5405744"
        },
        {
          "username": "lzw-git-all",
          "href": "https://github.com/lzw-git-all",
          "avatar": "https://avatars.githubusercontent.com/u/271938013"
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
      "forks": 7084,
      "added_stars": 22225,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9586,
      "added_stars": 14011,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 8955,
      "added_stars": 12629,
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
          "username": "maria-rcks",
          "href": "https://github.com/maria-rcks",
          "avatar": "https://avatars.githubusercontent.com/u/254055478"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
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
      "forks": 2291,
      "added_stars": 8666,
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
      "forks": 1552,
      "added_stars": 5809,
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
          "username": "djiang-jq",
          "href": "https://github.com/djiang-jq",
          "avatar": "https://avatars.githubusercontent.com/u/257394719"
        },
        {
          "username": "ericzakariasson",
          "href": "https://github.com/ericzakariasson",
          "avatar": "https://avatars.githubusercontent.com/u/25622412"
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
      "forks": 3258,
      "added_stars": 4758,
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
          "username": "antfubot",
          "href": "https://github.com/antfubot",
          "avatar": "https://avatars.githubusercontent.com/u/291667613"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 6270,
      "added_stars": 15908,
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
      "author": "supabase",
      "repo": "supabase",
      "avatar": "https://github.com/supabase.png",
      "repo_link": "https://github.com/supabase/supabase",
      "desc": "The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 15760,
      "added_stars": 3769,
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
      "author": "mvschwarz",
      "repo": "openrig",
      "avatar": "https://github.com/mvschwarz.png",
      "repo_link": "https://github.com/mvschwarz/openrig",
      "desc": "Build your own network of agents from Claude Code, Codex and Pi: persistent teams with roles, shared context and owned work.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 706,
      "added_stars": 5140,
      "builtBy": [
        {
          "username": "mvschwarz",
          "href": "https://github.com/mvschwarz",
          "avatar": "https://avatars.githubusercontent.com/u/171890339"
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
          "username": "Nikhi00718",
          "href": "https://github.com/Nikhi00718",
          "avatar": "https://avatars.githubusercontent.com/u/177048619"
        },
        {
          "username": "AdamWhitehurst",
          "href": "https://github.com/AdamWhitehurst",
          "avatar": "https://avatars.githubusercontent.com/u/10641097"
        }
      ]
    },
    {
      "author": "anthropics",
      "repo": "sandbox-runtime",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/sandbox-runtime",
      "desc": "A lightweight sandboxing tool for enforcing filesystem and network restrictions on arbitrary processes at the OS level, without requiring a container.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 616,
      "added_stars": 1512,
      "builtBy": [
        {
          "username": "ig-ant",
          "href": "https://github.com/ig-ant",
          "avatar": "https://avatars.githubusercontent.com/u/278458262"
        },
        {
          "username": "elhajjj",
          "href": "https://github.com/elhajjj",
          "avatar": "https://avatars.githubusercontent.com/u/19651160"
        },
        {
          "username": "ronleizrowice-ant",
          "href": "https://github.com/ronleizrowice-ant",
          "avatar": "https://avatars.githubusercontent.com/u/272939801"
        },
        {
          "username": "shawnm-anthropic",
          "href": "https://github.com/shawnm-anthropic",
          "avatar": "https://avatars.githubusercontent.com/u/227474143"
        },
        {
          "username": "ollie-anthropic",
          "href": "https://github.com/ollie-anthropic",
          "avatar": "https://avatars.githubusercontent.com/u/159198875"
        }
      ]
    },
    {
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9455,
      "added_stars": 7294,
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
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "proffesor-for-testing",
          "href": "https://github.com/proffesor-for-testing",
          "avatar": "https://avatars.githubusercontent.com/u/214853444"
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
      "forks": 5745,
      "added_stars": 8489,
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
      "author": "chthollyphile",
      "repo": "folia-major",
      "avatar": "https://github.com/chthollyphile.png",
      "repo_link": "https://github.com/chthollyphile/folia-major",
      "desc": "专注于绚丽的歌词动画效果的本地音乐/navidrome/第三方多平台在线音乐播放器",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1221,
      "added_stars": 7748,
      "builtBy": [
        {
          "username": "chthollyphile",
          "href": "https://github.com/chthollyphile",
          "avatar": "https://avatars.githubusercontent.com/u/30263107"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "lantudou",
          "href": "https://github.com/lantudou",
          "avatar": "https://avatars.githubusercontent.com/u/34973475"
        },
        {
          "username": "yakult-green-tea",
          "href": "https://github.com/yakult-green-tea",
          "avatar": "https://avatars.githubusercontent.com/u/143932026"
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
      "forks": 30599,
      "added_stars": 9384,
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
      "author": "gitroomhq",
      "repo": "postiz-app",
      "avatar": "https://github.com/gitroomhq.png",
      "repo_link": "https://github.com/gitroomhq/postiz-app",
      "desc": "📨 The ultimate agentic social media scheduling tool 🤖",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7734,
      "added_stars": 4086,
      "builtBy": [
        {
          "username": "nevo-david",
          "href": "https://github.com/nevo-david",
          "avatar": "https://avatars.githubusercontent.com/u/100117126"
        },
        {
          "username": "giladresisi",
          "href": "https://github.com/giladresisi",
          "avatar": "https://avatars.githubusercontent.com/u/6623700"
        },
        {
          "username": "egelhaus",
          "href": "https://github.com/egelhaus",
          "avatar": "https://avatars.githubusercontent.com/u/156946629"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jamesread",
          "href": "https://github.com/jamesread",
          "avatar": "https://avatars.githubusercontent.com/u/2025715"
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
      "forks": 2619,
      "added_stars": 8698,
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
      "author": "tester-army",
      "repo": "e2e",
      "avatar": "https://github.com/tester-army.png",
      "repo_link": "https://github.com/tester-army/e2e",
      "desc": "Next generation e2e testing framework for web and mobile apps.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 646,
      "added_stars": 12433,
      "builtBy": [
        {
          "username": "okwasniewski",
          "href": "https://github.com/okwasniewski",
          "avatar": "https://avatars.githubusercontent.com/u/52801365"
        },
        {
          "username": "kacperkapusciak",
          "href": "https://github.com/kacperkapusciak",
          "avatar": "https://avatars.githubusercontent.com/u/39658211"
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
          "username": "KrzysztofMoch",
          "href": "https://github.com/KrzysztofMoch",
          "avatar": "https://avatars.githubusercontent.com/u/83216158"
        }
      ]
    },
    {
      "author": "makecindy",
      "repo": "cindy",
      "avatar": "https://github.com/makecindy.png",
      "repo_link": "https://github.com/makecindy/cindy",
      "desc": "Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1074,
      "added_stars": 6137,
      "builtBy": [
        {
          "username": "dashhuang",
          "href": "https://github.com/dashhuang",
          "avatar": "https://avatars.githubusercontent.com/u/125997726"
        },
        {
          "username": "zqchris",
          "href": "https://github.com/zqchris",
          "avatar": "https://avatars.githubusercontent.com/u/4436110"
        },
        {
          "username": "MagicLizi",
          "href": "https://github.com/MagicLizi",
          "avatar": "https://avatars.githubusercontent.com/u/17176223"
        },
        {
          "username": "DavidShenXD",
          "href": "https://github.com/DavidShenXD",
          "avatar": "https://avatars.githubusercontent.com/u/290921921"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
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
      "forks": 18238,
      "added_stars": 14583,
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
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for month-long single sessions (billions of tokens) ,small context windows (a 100K context is enough) and token savings (5x fewer tokens) .上下文压缩插件，月级长会话会话， 兼顾小窗口(100k上下文足矣)省token(省5倍token) . billion-context is all you need",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 304,
      "added_stars": 3150,
      "builtBy": [
        {
          "username": "ranxianglei",
          "href": "https://github.com/ranxianglei",
          "avatar": "https://avatars.githubusercontent.com/u/12445698"
        },
        {
          "username": "YunzhouLi-hub",
          "href": "https://github.com/YunzhouLi-hub",
          "avatar": "https://avatars.githubusercontent.com/u/154221037"
        },
        {
          "username": "z0d0dOr",
          "href": "https://github.com/z0d0dOr",
          "avatar": "https://avatars.githubusercontent.com/u/128966342"
        },
        {
          "username": "yanhuojiyusheng",
          "href": "https://github.com/yanhuojiyusheng",
          "avatar": "https://avatars.githubusercontent.com/u/98598692"
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
      "forks": 961,
      "added_stars": 4721,
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
          "username": "zahlekhan",
          "href": "https://github.com/zahlekhan",
          "avatar": "https://avatars.githubusercontent.com/u/27266434"
        },
        {
          "username": "abhithesys",
          "href": "https://github.com/abhithesys",
          "avatar": "https://avatars.githubusercontent.com/u/157345590"
        }
      ]
    },
    {
      "author": "michael-denyer",
      "repo": "pstack-claude",
      "avatar": "https://github.com/michael-denyer.png",
      "repo_link": "https://github.com/michael-denyer/pstack-claude",
      "desc": "Claude Code, Codex, Copilot, Pi, OpenCode, Muse, Gemini, and Prime Agent versions of Poteto's pstack. Rigorous agent workflows with Cursor primitives translated for other harnesses.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 345,
      "added_stars": 2996,
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
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-47ci",
      "tags": "weeklyretro",
      "reactions": 28,
      "comments": 27,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Giving AI Pain: The Architecture of Synthetic Scars & The Rapid-Regret Miner",
      "description": "Why 90% of AI coding frustration comes from the Quota vs. Prompt-Compliance Death Loop, why Rich Sutton's Bitter Lesson fails in open-world software, and how we compile mid-flight collisions into 4-Vector Synthetic Scars and a Six-Pillar Critic.",
      "url": "https://dev.to/gde/giving-ai-pain-the-architecture-of-synthetic-scars-the-rapid-regret-miner-1740",
      "tags": "ai, programming, architecture, unix",
      "reactions": 18,
      "comments": 33,
      "reading_time": 29,
      "author": "randalschwartz"
    },
    {
      "title": "Singularity News :: CCG",
      "description": "This is a submission for the Hacktoberfest Open-Source AI Challenge Week 4: Ghost in the Machine    ...",
      "url": "https://dev.to/pengeszikra/singularity-news-ccg-5ejk",
      "tags": "devchallenge, hf26challenge, gamedev, showdev",
      "reactions": 41,
      "comments": 12,
      "reading_time": 4,
      "author": "pengeszikra"
    },
    {
      "title": "Your DEV posts have a beautiful new share card ✨",
      "description": "The image that shows up when you share a DEV post just got a brand-new look!  I got to work on...",
      "url": "https://dev.to/devteam/your-dev-posts-have-a-beautiful-new-share-card-4be8",
      "tags": "devto, showdev, opensource, design",
      "reactions": 166,
      "comments": 36,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Zero Trust CI/CD: Keyless Bitbucket Deployment on Google Cloud",
      "description": "Using static Service Account (SA) keys in CI/CD pipelines has long been a common method for...",
      "url": "https://dev.to/gde/zero-trust-cicd-keyless-bitbucket-deployment-on-google-cloud-1ka1",
      "tags": "devops, cicd, security, googlecloud",
      "reactions": 7,
      "comments": 1,
      "reading_time": 5,
      "author": "azidin"
    },
    {
      "title": "Gemini 4 Carbon Is #1 on AA Index — Still Fairwind-Only: Cyber Benches, $2/$10 $4/$20, and What to Do Before the API",
      "description": "Google DeepMind’s Gemini 4 Carbon (Oct 28) claims AA Index v5.0 #1 at 59 and SOTA cyber benches — still Fairwind/cyber-defenders first, no public model ID. Intro $2/$10 → $4/$20, 95% cache off, builder checklist before the API.",
      "url": "https://dev.to/yong_yu_f98e15562e9b120a0/gemini-4-carbon-is-1-on-aa-index-still-fairwind-only-cyber-benches-210-420-and-what-to-b66",
      "tags": "ai, llm, google, cybersecurity",
      "reactions": 4,
      "comments": 3,
      "reading_time": 6,
      "author": "yong_yu_f98e15562e9b120a0"
    },
    {
      "title": "Is Tech Actually Welcoming to Beginners, or Do We Just Say It Is?",
      "description": "We hear it all the time in tech.  Everyone starts somewhere. There are no stupid questions. Don't be...",
      "url": "https://dev.to/sizzlebop/is-tech-actually-welcoming-to-beginners-or-do-we-just-say-it-is-3d6p",
      "tags": "discuss, beginners, community, womenintech",
      "reactions": 47,
      "comments": 51,
      "reading_time": 6,
      "author": "sizzlebop"
    },
    {
      "title": "Don't Be a Proxy Between Me and Your AI",
      "description": "I've had this conversation more times than I'd like to admit.  I raise a technical question in a...",
      "url": "https://dev.to/adamthedeveloper/dont-be-a-proxy-between-me-and-your-ai-mcn",
      "tags": "ai, discuss, career, programming",
      "reactions": 149,
      "comments": 132,
      "reading_time": 7,
      "author": "adamthedeveloper"
    },
    {
      "title": "Promise Delivered: Welcome to the DEV Hall of Fame (65 Authors, 65 Masterpieces)",
      "description": "Status: Promise delivered ✅              The Doors Are Open   A little over a month ago, I published...",
      "url": "https://dev.to/georgekobaidze/promise-delivered-welcome-to-the-dev-hall-of-fame-65-authors-65-masterpieces-15fa",
      "tags": "community, discuss, showdev, writing",
      "reactions": 227,
      "comments": 129,
      "reading_time": 25,
      "author": "georgekobaidze"
    },
    {
      "title": "Congrats to the Hacktoberfest Open-Source AI Challenge Week 3: Slow and Steady Winners!",
      "description": "The results are in for Week 3 of our five Hacktoberfest DEV Challenges! For Slow and Steady, we asked...",
      "url": "https://dev.to/devteam/congrats-to-the-hacktoberfest-open-source-ai-challenge-week-3-slow-and-steady-winners-3e4a",
      "tags": "devchallenge, hf26challenge, hacktoberfest, productivity",
      "reactions": 35,
      "comments": 20,
      "reading_time": 4,
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
      "title": "How to make link to SaaS Launch Video system",
      "description": "A screenshot can show what you built. A screen recording can show how it works. But making a short,...",
      "url": "https://dev.to/mashraf_aiman/how-to-make-link-to-saas-launch-video-system-5a8k",
      "tags": "ai, opensource, saas, productivity",
      "reactions": 53,
      "comments": 1,
      "reading_time": 3,
      "author": "mashraf_aiman"
    },
    {
      "title": "I shipped my biggest project ever and felt… nothing",
      "description": "Last month I finished one of the largest side project of my career — an open-source framework, docs,...",
      "url": "https://dev.to/dhananjay_mundhada_02c326/i-shipped-my-biggest-project-ever-and-felt-nothing-585f",
      "tags": "discuss, ai, career, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 2,
      "author": "dhananjay_mundhada_02c326"
    },
    {
      "title": "What I Learned Using Free AI Coding Agents on a Real Portfolio (OpenCode and Kilo)",
      "description": "I'm a student, and I built and kept improving my portfolio with free AI coding agents running in the...",
      "url": "https://dev.to/ritika_rajput/what-i-learned-using-free-ai-coding-agents-on-a-real-portfolio-opencode-and-kilo-210h",
      "tags": "ai, webdev, beginners, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 4,
      "author": "ritika_rajput"
    },
    {
      "title": "Your AI Agent Doesn't Read Your 40-Page Security Policy",
      "description": "Your company spent three months writing an AI governance policy.  Legal reviewed it.  Security...",
      "url": "https://dev.to/karthik_gokul_3a38136130f/your-ai-agent-doesnt-read-your-40-page-security-policy-38d5",
      "tags": "ai, webdev, productivity, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "karthik_gokul_3a38136130f"
    },
    {
      "title": "Mervadon Feature Overview: A More Reliable Way to Bring Web Research into NotebookLM",
      "description": "When you use NotebookLM for research, asking questions is often not the most time-consuming part....",
      "url": "https://dev.to/bayswong/mervadon-feature-overview-a-more-reliable-way-to-bring-web-research-into-notebooklm-5jp",
      "tags": "notebooklm, chromeextension, productivity, ai",
      "reactions": 0,
      "comments": 0,
      "reading_time": 9,
      "author": "bayswong"
    },
    {
      "title": "Stop your AI coding agent from saying \"done\" without evidence",
      "description": "If you use an AI coding agent every day, you have probably seen this loop:   You ask for a bug...",
      "url": "https://dev.to/rockyshi/stop-your-ai-coding-agent-from-saying-done-without-evidence-2775",
      "tags": "ai, agents, productivity, opensource",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "rockyshi"
    },
    {
      "title": "AI Briefing, October 15: Grok Voice 3.0 and the Full Cost of Customer Support",
      "description": "Grok Voice 3.0 claims 70% autonomous resolution of Starlink support calls. Resolution, handoffs and costs, plus OpenAI adoption data and Argon research.",
      "url": "https://dev.to/weiyi/ai-briefing-october-15-grok-voice-30-and-the-full-cost-of-customer-support-4001",
      "tags": "ai, programming, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "weiyi"
    },
    {
      "title": "FDE, Part 4: Launch and Maintain an Enterprise AI System",
      "description": "Use staged releases, version records, monitoring and feedback to hand over an AI pilot with a practical recovery plan.",
      "url": "https://dev.to/weiyi/fde-part-4-launch-and-maintain-an-enterprise-ai-system-78b",
      "tags": "ai, programming, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "weiyi"
    },
    {
      "title": "Claude’s New Report: Capable AI Needs to Know When to Stop",
      "description": "Anthropic reports unintended actions during Claude evaluations and internal use. Lessons for agent permissions, stopping rules and reliable automation.",
      "url": "https://dev.to/weiyi/claudes-new-report-capable-ai-needs-to-know-when-to-stop-2ha",
      "tags": "ai, programming, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "weiyi"
    },
    {
      "title": "The More I Develop with AI, the Less I Skip the Process",
      "description": "What improving my own blog taught me about AI development: clear requirements, small changes, meaningful tests and live verification.",
      "url": "https://dev.to/weiyi/the-more-i-develop-with-ai-the-less-i-skip-the-process-11di",
      "tags": "ai, programming, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "weiyi"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

