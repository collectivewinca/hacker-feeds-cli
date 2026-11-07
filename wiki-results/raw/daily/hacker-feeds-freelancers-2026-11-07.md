# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-11-07 06:23:02 UTC

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
      "forks": 4173,
      "added_stars": 9990,
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
      "forks": 7481,
      "added_stars": 5064,
      "builtBy": [
        {
          "username": "Leonxlnx",
          "href": "https://github.com/Leonxlnx",
          "avatar": "https://avatars.githubusercontent.com/u/219127460"
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
          "username": "HugoSpy",
          "href": "https://github.com/HugoSpy",
          "avatar": "https://avatars.githubusercontent.com/u/122161868"
        },
        {
          "username": "bougieL",
          "href": "https://github.com/bougieL",
          "avatar": "https://avatars.githubusercontent.com/u/36102904"
        }
      ]
    },
    {
      "author": "HunYiSage",
      "repo": "dsh-purge",
      "avatar": "https://github.com/HunYiSage.png",
      "repo_link": "https://github.com/HunYiSage/dsh-purge",
      "desc": "DeepSeek Harness 破甲：让所有模型都能破甲，不同模型可换不同提示词；默认提示词面向国模「小码酱」。Jailbreak for every model — swap prompts per model. 求 Star 收藏 ⭐ 如要二开，请查看署名要求部分",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4764,
      "added_stars": 6363,
      "builtBy": [
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "HunYiSage",
          "href": "https://github.com/HunYiSage",
          "avatar": "https://avatars.githubusercontent.com/u/188421097"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "eltociear",
          "href": "https://github.com/eltociear",
          "avatar": "https://avatars.githubusercontent.com/u/22633385"
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
      "forks": 44144,
      "added_stars": 5498,
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
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5305,
      "added_stars": 320,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
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
      "forks": 475,
      "added_stars": 372,
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
        },
        {
          "username": "idealistichacker",
          "href": "https://github.com/idealistichacker",
          "avatar": "https://avatars.githubusercontent.com/u/169532740"
        }
      ]
    },
    {
      "author": "DeanChensj",
      "repo": "jiangshan-map",
      "avatar": "https://github.com/DeanChensj.png",
      "repo_link": "https://github.com/DeanChensj/jiangshan-map",
      "desc": "江山时序 · 中国历史交互地图时间轴 (403 BCE – Present) | Interactive Historical Atlas of China across 18 dynasties, 164 territory snapshots, ancient-to-modern place genealogy & classical poetry routes",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 516,
      "added_stars": 2651,
      "builtBy": [
        {
          "username": "DeanChensj",
          "href": "https://github.com/DeanChensj",
          "avatar": "https://avatars.githubusercontent.com/u/9414763"
        },
        {
          "username": "xcv58",
          "href": "https://github.com/xcv58",
          "avatar": "https://avatars.githubusercontent.com/u/503123"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "feiandxs",
          "href": "https://github.com/feiandxs",
          "avatar": "https://avatars.githubusercontent.com/u/183929"
        },
        {
          "username": "frankslin",
          "href": "https://github.com/frankslin",
          "avatar": "https://avatars.githubusercontent.com/u/748873"
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
      "forks": 8618,
      "added_stars": 1456,
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
      "author": "IamRamgarhia",
      "repo": "Free-GST-Billing-Software",
      "avatar": "https://github.com/IamRamgarhia.png",
      "repo_link": "https://github.com/IamRamgarhia/Free-GST-Billing-Software",
      "desc": "Free invoice builder & GST billing software for India. Make GST invoices, quotations, bills of supply and credit notes as PDF; GSTR-1/3B reports. Free invoice maker for shops, freelancers & small businesses. Free Tally alternative: open source, 100% offline, no signup, no limits.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 191,
      "added_stars": 93,
      "builtBy": [
        {
          "username": "IamRamgarhia",
          "href": "https://github.com/IamRamgarhia",
          "avatar": "https://avatars.githubusercontent.com/u/3993100"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "ericrisco",
      "repo": "rsc-harness",
      "avatar": "https://github.com/ericrisco.png",
      "repo_link": "https://github.com/ericrisco/rsc-harness",
      "desc": "Your agent invents things because it has no memory, and can't touch your database because it has no arms. rsc is the meta-harness that gives it both, plus the trade to know the job and the reflexes to not break your repo. For Claude Code, Codex and 15 more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 74,
      "added_stars": 123,
      "builtBy": [
        {
          "username": "ericrisco",
          "href": "https://github.com/ericrisco",
          "avatar": "https://avatars.githubusercontent.com/u/20164590"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "carloszrcom",
          "href": "https://github.com/carloszrcom",
          "avatar": "https://avatars.githubusercontent.com/u/38780879"
        },
        {
          "username": "damiangilgonzalez1995",
          "href": "https://github.com/damiangilgonzalez1995",
          "avatar": "https://avatars.githubusercontent.com/u/92522021"
        },
        {
          "username": "Swpn0neel",
          "href": "https://github.com/Swpn0neel",
          "avatar": "https://avatars.githubusercontent.com/u/121167506"
        }
      ]
    },
    {
      "author": "ConardLi",
      "repo": "garden-skills",
      "avatar": "https://github.com/ConardLi.png",
      "repo_link": "https://github.com/ConardLi/garden-skills",
      "desc": "ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1679,
      "added_stars": 1124,
      "builtBy": [
        {
          "username": "ConardLi",
          "href": "https://github.com/ConardLi",
          "avatar": "https://avatars.githubusercontent.com/u/30708545"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "eltociear",
          "href": "https://github.com/eltociear",
          "avatar": "https://avatars.githubusercontent.com/u/22633385"
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
      "by": "mfiguiere",
      "descendants": 73,
      "id": 50399933,
      "kids": [
        50401480,
        50400473,
        50401618,
        50401356,
        50401342,
        50400757,
        50401926,
        50400909,
        50401244,
        50402097,
        50401237,
        50401206,
        50401771,
        50401044,
        50400869,
        50400605,
        50401251,
        50400688,
        50400685,
        50400653,
        50401368,
        50400821,
        50401438,
        50401143,
        50400856,
        50401419,
        50401150,
        50401456,
        50400586
      ],
      "score": 455,
      "time": 1794007852,
      "title": "Libghostty 1.0",
      "type": "story",
      "url": "https://mitchellh.com/writing/libghostty-1-0"
    },
    {
      "by": "ackyshake",
      "descendants": 1,
      "id": 50401867,
      "kids": [
        50402138
      ],
      "score": 18,
      "time": 1794028818,
      "title": "Asahi Linux Progress Linux 7.3",
      "type": "story",
      "url": "https://asahilinux.org/2026/11/progress-report-7-3/"
    },
    {
      "by": "benbreen",
      "descendants": 4,
      "id": 50401740,
      "kids": [
        50402059,
        50402013,
        50401898
      ],
      "score": 22,
      "time": 1794027276,
      "title": "A barbarian tribe's mythic origin story is true, ancient DNA reveals",
      "type": "story",
      "url": "https://www.science.org/content/article/barbarian-tribe-s-mythic-origin-story-true-ancient-dna-reveals"
    },
    {
      "by": "theanomaly",
      "descendants": 94,
      "id": 50397429,
      "kids": [
        50397921,
        50399491,
        50398951,
        50402094,
        50401734,
        50398028,
        50401911,
        50397899,
        50401343,
        50399975,
        50399472,
        50398502,
        50401131,
        50399690,
        50400032,
        50400157,
        50401123,
        50397939,
        50401681,
        50398180,
        50399451,
        50398223,
        50398551,
        50398239,
        50398776,
        50400499,
        50398568,
        50400211,
        50397806,
        50398615,
        50400704,
        50398480,
        50399236,
        50397597,
        50398376,
        50398487
      ],
      "score": 413,
      "time": 1793994531,
      "title": "A Jev that can ask Opus for help gives Opus accuracy at 4x lower cost",
      "type": "story",
      "url": "https://hightouch.com/blog/llm-judges-identity-resolution"
    },
    {
      "by": "PLenz",
      "descendants": 1805,
      "id": 50391456,
      "kids": [
        50394025,
        50393307,
        50398454,
        50394656,
        50396106,
        50394319,
        50394171,
        50391954,
        50393902,
        50393138,
        50394338,
        50391955,
        50393112,
        50399672,
        50395801,
        50397193,
        50396128,
        50392975,
        50394172,
        50393885,
        50393727,
        50393821,
        50392479,
        50393947,
        50399761,
        50392847,
        50394731,
        50401615,
        50401407,
        50394057,
        50394144,
        50399795,
        50398110,
        50398286,
        50397317,
        50394105,
        50393155,
        50396548,
        50393912,
        50398933,
        50397177,
        50394944,
        50398164,
        50394619,
        50394280,
        50395303,
        50394759,
        50396605,
        50392073,
        50393207,
        50394203,
        50392014,
        50393319,
        50396712,
        50400729,
        50401033,
        50393750,
        50397613,
        50392713,
        50391702,
        50396536,
        50396574,
        50399288,
        50396530,
        50394513,
        50394423,
        50397057,
        50391832,
        50396331,
        50392054,
        50398754,
        50394471,
        50401756,
        50393920,
        50396774,
        50394647,
        50395981,
        50392513,
        50398498,
        50395504,
        50395742,
        50396207,
        50402133,
        50393804,
        50401538,
        50394159,
        50391503,
        50395246,
        50395291,
        50393622,
        50401960,
        50392612,
        50393678,
        50393579,
        50395838,
        50400145,
        50393129,
        50396840,
        50392864,
        50396557,
        50393091,
        50399775,
        50395202,
        50392780,
        50392466,
        50396218,
        50394140,
        50396776,
        50393613,
        50394616,
        50399066,
        50392994,
        50398015,
        50397733,
        50394971,
        50395567,
        50394352,
        50395089,
        50394807,
        50393004,
        50400084,
        50398004,
        50397376,
        50391947,
        50399160,
        50392461,
        50396264,
        50395310,
        50398516,
        50395060,
        50399851,
        50394036,
        50399465,
        50391661,
        50395740,
        50396209,
        50394493,
        50394018,
        50392424,
        50392307,
        50393356,
        50392105,
        50396129,
        50396994,
        50396732,
        50394043,
        50395272,
        50395163,
        50395908,
        50391959,
        50394312,
        50394955,
        50397575,
        50397927,
        50394713,
        50392343,
        50392206,
        50392558,
        50392217,
        50391937,
        50392143,
        50393441,
        50391980,
        50392132
      ],
      "score": 946,
      "time": 1793967231,
      "title": "Tesla to wind down Cybertruck production",
      "type": "story",
      "url": "https://www.nbcnews.com/tech/tech-news/tesla-wind-cybertruck-production-years-poor-sales-markets-rcna607817"
    },
    {
      "by": "raybb",
      "descendants": 38,
      "id": 50399991,
      "kids": [
        50400887,
        50401093,
        50400910,
        50401473,
        50401453,
        50400998,
        50401319
      ],
      "score": 84,
      "time": 1794008239,
      "title": "RealPage rent-pricing case wraps with nearly $360M to renters",
      "type": "story",
      "url": "https://www.multifamilydive.com/news/realpage-rent-pricing-case-360m-renters/873553/"
    },
    {
      "by": "lacieargyle",
      "descendants": 21,
      "id": 50384263,
      "kids": [
        50401819,
        50401788,
        50401940,
        50401486,
        50401713,
        50401767,
        50385191,
        50401818,
        50401874,
        50401727,
        50401664,
        50401892,
        50401752
      ],
      "score": 35,
      "time": 1793911586,
      "title": "What do the next 4000 emoji look like?",
      "type": "story",
      "url": "https://jenniferdaniel.substack.com/p/what-do-the-next-4000-emoji-look"
    },
    {
      "by": "ChrisArchitect",
      "descendants": 254,
      "id": 50388001,
      "kids": [
        50394856,
        50393856,
        50395528,
        50389013,
        50393525,
        50394538,
        50397478,
        50397860,
        50394458,
        50396277,
        50396966,
        50396487,
        50400301,
        50396312,
        50396383,
        50395971,
        50395888,
        50398660,
        50399120,
        50395555,
        50398280,
        50393439,
        50399362,
        50397098,
        50396323,
        50395019,
        50399328,
        50401000,
        50394033,
        50395802,
        50393725,
        50397944,
        50393658,
        50399934,
        50396718,
        50400928,
        50399186,
        50388011,
        50394037,
        50393970,
        50393794
      ],
      "score": 312,
      "time": 1793937628,
      "title": "US FAA says it will phase out floppy disks from air traffic control by 2028",
      "type": "story",
      "url": "https://www.reuters.com/world/us/us-faa-says-it-will-phase-out-floppy-disks-air-traffic-control-by-2028-2026-11-05/"
    },
    {
      "by": "SerCe",
      "descendants": 104,
      "id": 50397219,
      "kids": [
        50398529,
        50397540,
        50398007,
        50397972,
        50398287,
        50398574,
        50398382,
        50398378,
        50397924,
        50397846,
        50397548,
        50397897
      ],
      "score": 207,
      "time": 1793993618,
      "title": "Firecracker VM Escape: PwnEscape Part 2",
      "type": "story",
      "url": "https://pwn.ai/blog/firecracker-escape"
    },
    {
      "by": "AlexeyBrin",
      "descendants": 2,
      "id": 50352701,
      "kids": [
        50402031,
        50401992,
        50401993
      ],
      "score": 23,
      "time": 1793717382,
      "title": "The Flash C Compiler",
      "type": "story",
      "url": "https://blog.adafruit.com/2026/10/31/flash-c-compiler/"
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
      "title": "Libghostty 1.0",
      "url": "https://mitchellh.com/writing/libghostty-1-0",
      "score": 52,
      "comments": 3,
      "tags": [
        "c",
        "release",
        "zig"
      ],
      "id": "0ouxwf"
    },
    {
      "title": "Making musl and proprietary NVIDIA drivers work together",
      "url": "https://chimera-linux.org/news/2026/11/musl-nvidia.html",
      "score": 54,
      "comments": 9,
      "tags": [
        "linux"
      ],
      "id": "hvxjbb"
    },
    {
      "title": "The Port That Does Not Exist",
      "url": "https://acid.vegas/blog/the-port-that-does-not-exist/",
      "score": 25,
      "comments": 2,
      "tags": [
        "networking"
      ],
      "id": "osqswf"
    },
    {
      "title": "The MustCreate Pattern for Go Tests",
      "url": "https://mtlynch.io/notes/go-must-create-pattern/",
      "score": 17,
      "comments": 23,
      "tags": [
        "go",
        "testing"
      ],
      "id": "i96uyr"
    },
    {
      "title": "Inside GitHub's new Git storage architecture",
      "url": "https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/",
      "score": 17,
      "comments": 4,
      "tags": [
        "distributed",
        "vcs"
      ],
      "id": "y3hvme"
    },
    {
      "title": "Hacking the meta ray-ban smartglasses",
      "url": "https://p0pcycle.com/2026/11/06/hacking-the-meta-ray-ban-smartglasses/",
      "score": 15,
      "comments": 1,
      "tags": [
        "security"
      ],
      "id": "xhrab6"
    },
    {
      "title": "Upgrading NetBSD from 11.0 to 11.1",
      "url": "https://www.dwarmstrong.org/netbsd-upgrade/",
      "score": 18,
      "comments": 3,
      "tags": [
        "netbsd"
      ],
      "id": "0agusd"
    },
    {
      "title": "What are you doing this weekend?",
      "url": "",
      "score": 24,
      "comments": 43,
      "tags": [
        "ask",
        "programming"
      ],
      "id": "jmdchp"
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
      "forks": 11449,
      "added_stars": 49078,
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6855,
      "added_stars": 15214,
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3856,
      "added_stars": 8836,
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
      "forks": 4819,
      "added_stars": 9085,
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
      "desc": "Design physical products with AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2444,
      "added_stars": 8010,
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
      "author": "AgriciDaniel",
      "repo": "claude-seo",
      "avatar": "https://github.com/AgriciDaniel.png",
      "repo_link": "https://github.com/AgriciDaniel/claude-seo",
      "desc": "Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3520,
      "added_stars": 8728,
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
      "author": "calesthio",
      "repo": "OpenMontage",
      "avatar": "https://github.com/calesthio.png",
      "repo_link": "https://github.com/calesthio/OpenMontage",
      "desc": "World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10362,
      "added_stars": 13431,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5254,
      "added_stars": 6951,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3406,
      "added_stars": 5016,
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
          "username": "anka-afk",
          "href": "https://github.com/anka-afk",
          "avatar": "https://avatars.githubusercontent.com/u/110004162"
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
      "forks": 10422,
      "added_stars": 10703,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2146,
      "added_stars": 5197,
      "builtBy": [
        {
          "username": "yashrajp22",
          "href": "https://github.com/yashrajp22",
          "avatar": "https://avatars.githubusercontent.com/u/282666402"
        },
        {
          "username": "rng1995",
          "href": "https://github.com/rng1995",
          "avatar": "https://avatars.githubusercontent.com/u/32655573"
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
      "author": "wshobson",
      "repo": "agents",
      "avatar": "https://github.com/wshobson.png",
      "repo_link": "https://github.com/wshobson/agents",
      "desc": "Plugins, agents, skills, and commands for Claude Code, Codex CLI, Cursor, OpenCode, Antigravity CLI, GitHub Copilot, and Pi, written once in Markdown and adapted to each tool by generators with validation and evals.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4466,
      "added_stars": 2143,
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
      "author": "ahujasid",
      "repo": "mcp-for-blender",
      "avatar": "https://github.com/ahujasid.png",
      "repo_link": "https://github.com/ahujasid/mcp-for-blender",
      "desc": "Community plugin to control Blender 3D with any LLM of your choice. Not affiliated with the official Blender Foundation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3046,
      "added_stars": 3499,
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
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ The BEST Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10366,
      "added_stars": 13188,
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
          "username": "SulimanAbdulrazzaq",
          "href": "https://github.com/SulimanAbdulrazzaq",
          "avatar": "https://avatars.githubusercontent.com/u/144490671"
        },
        {
          "username": "codex",
          "href": "https://github.com/codex",
          "avatar": "https://avatars.githubusercontent.com/u/267193182"
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
      "forks": 10202,
      "added_stars": 2536,
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
      "author": "pandas-dev",
      "repo": "pandas",
      "avatar": "https://github.com/pandas-dev.png",
      "repo_link": "https://github.com/pandas-dev/pandas",
      "desc": "Flexible and powerful data analysis / manipulation library for Python, providing labeled data structures similar to R data.frame objects, statistical functions, and much more",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 20727,
      "added_stars": 1016,
      "builtBy": [
        {
          "username": "jbrockmendel",
          "href": "https://github.com/jbrockmendel",
          "avatar": "https://avatars.githubusercontent.com/u/8078968"
        },
        {
          "username": "jreback",
          "href": "https://github.com/jreback",
          "avatar": "https://avatars.githubusercontent.com/u/953992"
        },
        {
          "username": "wesm",
          "href": "https://github.com/wesm",
          "avatar": "https://avatars.githubusercontent.com/u/329591"
        },
        {
          "username": "mroeschke",
          "href": "https://github.com/mroeschke",
          "avatar": "https://avatars.githubusercontent.com/u/10647082"
        },
        {
          "username": "jorisvandenbossche",
          "href": "https://github.com/jorisvandenbossche",
          "avatar": "https://avatars.githubusercontent.com/u/1020496"
        }
      ]
    },
    {
      "author": "beenuar",
      "repo": "AiSOC",
      "avatar": "https://github.com/beenuar.png",
      "repo_link": "https://github.com/beenuar/AiSOC",
      "desc": "Open-source AI Security Operations Center: alert fusion, LLM-agent triage, MITRE ATT&CK investigation, and a replayable decision ledger for every agent step. Self-hostable, runs with no API keys, MIT licensed. Ships an MCP server for Claude, Cursor and Continue.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 713,
      "added_stars": 5484,
      "builtBy": [
        {
          "username": "beenuar",
          "href": "https://github.com/beenuar",
          "avatar": "https://avatars.githubusercontent.com/u/19245630"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "alexmateescu",
          "href": "https://github.com/alexmateescu",
          "avatar": "https://avatars.githubusercontent.com/u/22677210"
        },
        {
          "username": "prince30121",
          "href": "https://github.com/prince30121",
          "avatar": "https://avatars.githubusercontent.com/u/154232170"
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
      "forks": 5711,
      "added_stars": 5106,
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
      "author": "morluto",
      "repo": "rea",
      "avatar": "https://github.com/morluto.png",
      "repo_link": "https://github.com/morluto/rea",
      "desc": "Reverse engineer anything with agents, from app behavior down to native binaries.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 108693,
      "added_stars": 431436,
      "builtBy": [
        {
          "username": "morluto",
          "href": "https://github.com/morluto",
          "avatar": "https://avatars.githubusercontent.com/u/76467478"
        },
        {
          "username": "kaoru0822-kitauji",
          "href": "https://github.com/kaoru0822-kitauji",
          "avatar": "https://avatars.githubusercontent.com/u/208281322"
        },
        {
          "username": "N0zoM1z0",
          "href": "https://github.com/N0zoM1z0",
          "avatar": "https://avatars.githubusercontent.com/u/161784452"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "gensokyo-dev",
          "href": "https://github.com/gensokyo-dev",
          "avatar": "https://avatars.githubusercontent.com/u/342580529"
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
      "forks": 7397,
      "added_stars": 22718,
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
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jrusso1020",
          "href": "https://github.com/jrusso1020",
          "avatar": "https://avatars.githubusercontent.com/u/7664106"
        },
        {
          "username": "ukimsanov",
          "href": "https://github.com/ukimsanov",
          "avatar": "https://avatars.githubusercontent.com/u/165517112"
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
      "forks": 9776,
      "added_stars": 23406,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9901,
      "added_stars": 17612,
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
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "7.4 billion tokens per month. 34 free LLM providers. 635 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6685,
      "added_stars": 17510,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5902,
      "added_stars": 9292,
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
      "author": "Vincentwei1021",
      "repo": "video-shotcraft",
      "avatar": "https://github.com/Vincentwei1021.png",
      "repo_link": "https://github.com/Vincentwei1021/video-shotcraft",
      "desc": "AI video skill for Claude Code & Codex — cinematic, editable product promos with Remotion: 124 shot recipe cards, 150 motion previews, beat sync, sound design, Motion Workbench & JianYing (CapCut CN) export.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1668,
      "added_stars": 7124,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Vincentwei1021",
          "href": "https://github.com/Vincentwei1021",
          "avatar": "https://avatars.githubusercontent.com/u/18239147"
        },
        {
          "username": "skyzhao1223",
          "href": "https://github.com/skyzhao1223",
          "avatar": "https://avatars.githubusercontent.com/u/15373810"
        },
        {
          "username": "sarff0",
          "href": "https://github.com/sarff0",
          "avatar": "https://avatars.githubusercontent.com/u/255364023"
        },
        {
          "username": "xiaolai",
          "href": "https://github.com/xiaolai",
          "avatar": "https://avatars.githubusercontent.com/u/152970"
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
      "forks": 3351,
      "added_stars": 5244,
      "builtBy": [
        {
          "username": "quuu",
          "href": "https://github.com/quuu",
          "avatar": "https://avatars.githubusercontent.com/u/32676955"
        },
        {
          "username": "antfubot",
          "href": "https://github.com/antfubot",
          "avatar": "https://avatars.githubusercontent.com/u/291667613"
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
      "forks": 625,
      "added_stars": 1583,
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
      "author": "gitroomhq",
      "repo": "postiz-app",
      "avatar": "https://github.com/gitroomhq.png",
      "repo_link": "https://github.com/gitroomhq/postiz-app",
      "desc": "📨 The ultimate agentic social media scheduling tool 🤖",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7821,
      "added_stars": 4422,
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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1629,
      "added_stars": 5609,
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
      "author": "tester-army",
      "repo": "e2e",
      "avatar": "https://github.com/tester-army.png",
      "repo_link": "https://github.com/tester-army/e2e",
      "desc": "Next generation e2e testing framework for web and mobile apps.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 702,
      "added_stars": 7670,
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
      "author": "chthollyphile",
      "repo": "folia-major",
      "avatar": "https://github.com/chthollyphile.png",
      "repo_link": "https://github.com/chthollyphile/folia-major",
      "desc": "专注于绚丽的歌词动画效果的本地音乐/navidrome/第三方多平台在线音乐播放器 A multi-platform music player for local files, Navidrome, and online streaming services, featuring stunning animated lyrics.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1325,
      "added_stars": 8292,
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
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca lets you run a fleet of coding agents (e.g. Claude Code, Codex) with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7488,
      "added_stars": 31885,
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
          "username": "OrcaWin",
          "href": "https://github.com/OrcaWin",
          "avatar": "https://avatars.githubusercontent.com/u/293788423"
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
      "forks": 18514,
      "added_stars": 14174,
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
      "author": "google",
      "repo": "brotli",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/brotli",
      "desc": "Brotli compression format",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1395,
      "added_stars": 190,
      "builtBy": [
        {
          "username": "eustas",
          "href": "https://github.com/eustas",
          "avatar": "https://avatars.githubusercontent.com/u/203457"
        },
        {
          "username": "szabadka",
          "href": "https://github.com/szabadka",
          "avatar": "https://avatars.githubusercontent.com/u/9074039"
        },
        {
          "username": "copybara-github",
          "href": "https://github.com/copybara-github",
          "avatar": "https://avatars.githubusercontent.com/u/32201506"
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
      "forks": 9543,
      "added_stars": 7483,
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
      "author": "Renhuai123",
      "repo": "ziwei-doushu",
      "avatar": "https://github.com/Renhuai123.png",
      "repo_link": "https://github.com/Renhuai123/ziwei-doushu",
      "desc": "紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3217,
      "added_stars": 12266,
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
          "username": "HelloWorld3326",
          "href": "https://github.com/HelloWorld3326",
          "avatar": "https://avatars.githubusercontent.com/u/189696476"
        },
        {
          "username": "sakura168899-debug",
          "href": "https://github.com/sakura168899-debug",
          "avatar": "https://avatars.githubusercontent.com/u/289346330"
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
      "forks": 30826,
      "added_stars": 9890,
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
      "author": "makecindy",
      "repo": "cindy",
      "avatar": "https://github.com/makecindy.png",
      "repo_link": "https://github.com/makecindy/cindy",
      "desc": "Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1166,
      "added_stars": 6591,
      "builtBy": [
        {
          "username": "dashhuang",
          "href": "https://github.com/dashhuang",
          "avatar": "https://avatars.githubusercontent.com/u/125997726"
        },
        {
          "username": "MagicLizi",
          "href": "https://github.com/MagicLizi",
          "avatar": "https://avatars.githubusercontent.com/u/17176223"
        },
        {
          "username": "zqchris",
          "href": "https://github.com/zqchris",
          "avatar": "https://avatars.githubusercontent.com/u/4436110"
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
      "author": "JetBrains",
      "repo": "thinkrail",
      "avatar": "https://github.com/JetBrains.png",
      "repo_link": "https://github.com/JetBrains/thinkrail",
      "desc": "ThinkRail is the agentic IDE that gets better every time you use it",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 483,
      "added_stars": 7375,
      "builtBy": [
        {
          "username": "rsolmano",
          "href": "https://github.com/rsolmano",
          "avatar": "https://avatars.githubusercontent.com/u/177517595"
        },
        {
          "username": "danyaberezun",
          "href": "https://github.com/danyaberezun",
          "avatar": "https://avatars.githubusercontent.com/u/3789877"
        },
        {
          "username": "OLavrik",
          "href": "https://github.com/OLavrik",
          "avatar": "https://avatars.githubusercontent.com/u/14210843"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Mark-Life",
          "href": "https://github.com/Mark-Life",
          "avatar": "https://avatars.githubusercontent.com/u/88837967"
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
      "forks": 9251,
      "added_stars": 1022,
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
      "title": "Congrats to the Kaggle Benchmarking Challenge Winners!",
      "description": "A few weeks ago we teamed up with Kaggle to ask a deceptively simple question: how do you actually...",
      "url": "https://dev.to/devteam/congrats-to-the-kaggle-benchmarking-challenge-winners-2moh",
      "tags": "devchallenge, kagglechallenge, ai, machinelearning",
      "reactions": 114,
      "comments": 25,
      "reading_time": 4,
      "author": "heyitsjem"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-28dh",
      "tags": "weeklyretro",
      "reactions": 78,
      "comments": 43,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "An Update on the Hacktoberfest Open-Source AI Challenge: Ghost in the Machine Winners",
      "description": "Hey all, we have a quick update for everyone who participated in the Hacktoberfest Open-Source AI...",
      "url": "https://dev.to/devteam/an-update-on-the-hacktoberfest-open-source-ai-challenge-ghost-in-the-machine-winners-44bp",
      "tags": "devchallenge, hf26challenge, hacktoberfest, ai",
      "reactions": 44,
      "comments": 8,
      "reading_time": 1,
      "author": "heyitsjem"
    },
    {
      "title": "One Word, Two GPUs: Why Gemma 4 Answers the Same Question Differently on a Laptop and a Tesla T4",
      "description": "Same GGUF file, same llama.cpp build, greedy decoding, and a GTX 1650 Ti answers $20 where a Tesla T4 answers 2000. One GSM8K question followed down to the word where the two cards part, the order in which each card adds its numbers, and the one stock setting that makes them agree.",
      "url": "https://dev.to/gde/one-word-two-gpus-why-gemma-4-answers-the-same-question-differently-on-a-laptop-and-a-tesla-t4-1dj2",
      "tags": "gemma, llamacpp, cuda, nvidia",
      "reactions": 15,
      "comments": 1,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "Let's see where you code!",
      "description": "I’ve been writing a lot about AWS lately, so let’s take a breather. This is my little corner of the...",
      "url": "https://dev.to/maame-codes/lets-see-where-you-code-147",
      "tags": "watercooler, discuss",
      "reactions": 89,
      "comments": 43,
      "reading_time": 2,
      "author": "maame-codes"
    },
    {
      "title": "Want to make DEV your full-time job? We're hiring a Community Manager!",
      "description": "Hey friends 👋  Back in June, we posted about a Community Program Manager role. Thank you to everyone...",
      "url": "https://dev.to/devteam/want-to-make-dev-your-full-time-job-were-hiring-a-community-manager-4p1f",
      "tags": "career, meta, hiring",
      "reactions": 72,
      "comments": 7,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Congrats to October's MLH x DEV Writing Challenge Winner!",
      "description": "October's MLH x DEV Writing Challenge is a wrap! This is our way of celebrating MLH hackers who take...",
      "url": "https://dev.to/devteam/congrats-to-octobers-mlh-x-dev-writing-challenge-winner-36a9",
      "tags": "devchallenge, mlhacks, hackathon",
      "reactions": 22,
      "comments": 2,
      "reading_time": 1,
      "author": "heyitsjem"
    },
    {
      "title": "Prompt Pad: Show Your AI How to Respond with Few-Shot Examples",
      "description": "Want AI to answer in a specific way? Don't just tell it. Show it.  In this episode of Prompt Pad,...",
      "url": "https://blog.mlh.com/prompt-pad-show-your-ai-how-to-respond-with-few-shot-examples-2869",
      "tags": "ai, beginners, codenewbie, vibecoding",
      "reactions": 14,
      "comments": 1,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "Android 17 on a 4.9 Kernel: LineageOS 24.0 on the Pixel 3a",
      "description": "The Pixel 3a runs LineageOS 24.0, Android 17, on its original 4.9 kernel with SELinux enforcing and Google apps. One kernel fix, five platform forks and a set of device-tree changes, each traced to a line of a boot log.",
      "url": "https://dev.to/gde/android-17-on-a-49-kernel-lineageos-240-on-the-pixel-3a-1mok",
      "tags": "android, linux, kernel, lineageos",
      "reactions": 10,
      "comments": 1,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Containing the Autonomous Mind: Sub-Second Zero-Trust Execution with GKE Agent Sandbox",
      "description": "Why standard Kubernetes pods fail when AI agents start writing code and how to build a sub-second,...",
      "url": "https://dev.to/gde/containing-the-autonomous-mind-sub-second-zero-trust-execution-with-gke-agent-sandbox-5e6b",
      "tags": "ai, googlecloud, kubernetes",
      "reactions": 19,
      "comments": 1,
      "reading_time": 7,
      "author": "saurabhmi"
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
      "title": "Being, Doing, Having: Why 50 Years of Senior Craft Lives in Context, Not Code",
      "description": "Why does standard AI code generation try to jump straight to 'Have' without the proper 'Be'? How ladder rungs, the 'Null-State' couch flash, and stand-up comedy explain what separates senior engineers from junior token streamers.",
      "url": "https://dev.to/gde/being-doing-having-why-50-years-of-senior-craft-lives-in-context-not-code-29dl",
      "tags": "ai, programming, architecture, productivity",
      "reactions": 3,
      "comments": 7,
      "reading_time": 29,
      "author": "randalschwartz"
    },
    {
      "title": "10 Best Browser Agent APIs that let your AI use the web 🧙🪄",
      "description": "AI agents are already pretty good at reasoning.  But reasoning only gets them so far. At some point,...",
      "url": "https://dev.to/composiodev/10-best-browser-agent-apis-that-let-your-ai-use-the-web-12m9",
      "tags": "browseragent, opensource, productivity, automation",
      "reactions": 4,
      "comments": 0,
      "reading_time": 14,
      "author": "shricodev"
    },
    {
      "title": "Putting AI Agents on Call: How We Built an Autonomous SRE War Room in Slack with Switch and Wispr Flow",
      "description": "Putting AI Agents on Call: How We Built an Autonomous SRE War Room in Slack with Switch and...",
      "url": "https://dev.to/farhan_mallik/putting-ai-agents-on-call-how-we-built-an-autonomous-sre-war-room-in-slack-with-switch-and-wispr-2am5",
      "tags": "ai, devops, opensource, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 7,
      "author": "farhan_mallik"
    },
    {
      "title": "I Wrote Every Commit Message Like a Changelog Entry for a Month — Code Review Got Weirdly Easier",
      "description": "A month ago I changed one habit and nothing else: every commit message I wrote had to read like a...",
      "url": "https://dev.to/aheadkit/i-wrote-every-commit-message-like-a-changelog-entry-for-a-month-code-review-got-weirdly-easier-3a86",
      "tags": "programming, git, beginners, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "aheadkit"
    },
    {
      "title": "I put 7 Claude Code agents in my research lab's group chat with Switch. Here's how to set it up (and what broke on Windows)",
      "description": "I'm a PhD researcher. Every lab I've worked in runs on one group chat, and every Friday the professor...",
      "url": "https://dev.to/riponcm/i-put-7-claude-code-agents-in-my-research-labs-group-chat-with-switch-heres-how-to-set-it-up-3nf7",
      "tags": "webdev, productivity, programming, claude",
      "reactions": 0,
      "comments": 1,
      "reading_time": 7,
      "author": "riponcm"
    },
    {
      "title": "The coding-agent toolbox around the model: 8 notes on CLAUDE.md, mcp2cli, OpenCode and worktrees",
      "description": "Once you use a coding agent every day, the model itself stops being the main lever. What changes the...",
      "url": "https://dev.to/redreamality_dev/the-coding-agent-toolbox-around-the-model-8-notes-on-claudemd-mcp2cli-opencode-and-worktrees-3ig3",
      "tags": "ai, coding, agents, productivity",
      "reactions": 0,
      "comments": 1,
      "reading_time": 4,
      "author": "redreamality_dev"
    },
    {
      "title": "If a Linter Can Check Your AGENTS.md Rule, the Rule Doesn't Belong in AGENTS.md",
      "description": "Claude Code's docs call CLAUDE.md context, not enforced config. Move every rule a linter, hook or deny rule can check. 40 rules become 9.",
      "url": "https://dev.to/gabrielanhaia/if-a-linter-can-check-your-agentsmd-rule-the-rule-doesnt-belong-in-agentsmd-2kkb",
      "tags": "ai, devtools, productivity, discuss",
      "reactions": 0,
      "comments": 0,
      "reading_time": 11,
      "author": "gabrielanhaia"
    },
    {
      "title": "Compress Images Without Uploading: How Browser-Only Tools Protect Your Files",
      "description": "Learn how to compress images without uploading, how private PDF tools work, and how to check file privacy in your browser's Network tab.",
      "url": "https://dev.to/cuelark/compress-images-without-uploading-how-browser-only-tools-protect-your-files-24eo",
      "tags": "privacy, webdev, productivity, security",
      "reactions": 0,
      "comments": 1,
      "reading_time": 6,
      "author": "cuelark"
    },
    {
      "title": "5 small debugging tasks I stopped doing by hand (JSON, JWT, Base64, timestamps, regex)",
      "description": "Most of my debugging time isn't spent on hard problems. It's spent on small chores: reading a...",
      "url": "https://dev.to/naveen_hooda_6953b0025c1f/5-small-debugging-tasks-i-stopped-doing-by-hand-json-jwt-base64-timestamps-regex-509m",
      "tags": "webdev, tools, productivity, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "naveen_hooda_6953b0025c1f"
    },
    {
      "title": "Claude Code forgets everything when you close it. Here's how I made it remember (and share it with Claude.ai)",
      "description": "Every morning I opened Claude Code and did the same thing: explained my project again. What we...",
      "url": "https://dev.to/kaushalt2004/claude-code-forgets-everything-when-you-close-it-heres-how-i-made-it-remember-and-share-it-with-30e0",
      "tags": "ai, productivity, opensource, claude",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "kaushalt2004"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

