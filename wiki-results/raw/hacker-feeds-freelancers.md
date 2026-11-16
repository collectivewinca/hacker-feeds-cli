# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-11-16 06:38:30 UTC

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
      "author": "addyosmani",
      "repo": "agent-skills",
      "avatar": "https://github.com/addyosmani.png",
      "repo_link": "https://github.com/addyosmani/agent-skills",
      "desc": "Production-grade engineering skills for AI coding agents.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 12349,
      "added_stars": 3889,
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
          "username": "ayobamiseun",
          "href": "https://github.com/ayobamiseun",
          "avatar": "https://avatars.githubusercontent.com/u/66267222"
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
      "forks": 8837,
      "added_stars": 1368,
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
      "author": "ConardLi",
      "repo": "garden-skills",
      "avatar": "https://github.com/ConardLi.png",
      "repo_link": "https://github.com/ConardLi/garden-skills",
      "desc": "ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1738,
      "added_stars": 550,
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
        },
        {
          "username": "Aliciawque",
          "href": "https://github.com/Aliciawque",
          "avatar": "https://avatars.githubusercontent.com/u/166712943"
        }
      ]
    },
    {
      "author": "louislam",
      "repo": "uptime-kuma",
      "avatar": "https://github.com/louislam.png",
      "repo_link": "https://github.com/louislam/uptime-kuma",
      "desc": "A fancy self-hosted monitoring tool",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 8847,
      "added_stars": 1088,
      "builtBy": [
        {
          "username": "louislam",
          "href": "https://github.com/louislam",
          "avatar": "https://avatars.githubusercontent.com/u/1336778"
        },
        {
          "username": "CommanderStorm",
          "href": "https://github.com/CommanderStorm",
          "avatar": "https://avatars.githubusercontent.com/u/26258709"
        },
        {
          "username": "chakflying",
          "href": "https://github.com/chakflying",
          "avatar": "https://avatars.githubusercontent.com/u/3271800"
        },
        {
          "username": "Saibamen",
          "href": "https://github.com/Saibamen",
          "avatar": "https://avatars.githubusercontent.com/u/905878"
        },
        {
          "username": "Computroniks",
          "href": "https://github.com/Computroniks",
          "avatar": "https://avatars.githubusercontent.com/u/67638596"
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
      "forks": 7802,
      "added_stars": 4234,
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
      "author": "Anil-matcha",
      "repo": "Open-Generative-AI",
      "avatar": "https://github.com/Anil-matcha.png",
      "repo_link": "https://github.com/Anil-matcha/Open-Generative-AI",
      "desc": "Uncensored Open-source alternative to AI video platforms — Free AI image & video generation studio with 800+ models (Flux, Midjourney, Kling, Sora, Veo). No content filters. Self-hosted, MIT licensed.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6712,
      "added_stars": 1552,
      "builtBy": [
        {
          "username": "Anil-matcha",
          "href": "https://github.com/Anil-matcha",
          "avatar": "https://avatars.githubusercontent.com/u/4326215"
        },
        {
          "username": "jaiprasad04",
          "href": "https://github.com/jaiprasad04",
          "avatar": "https://avatars.githubusercontent.com/u/114457757"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "WhiteRaven11",
          "href": "https://github.com/WhiteRaven11",
          "avatar": "https://avatars.githubusercontent.com/u/95498438"
        },
        {
          "username": "NgoQuocViet2001",
          "href": "https://github.com/NgoQuocViet2001",
          "avatar": "https://avatars.githubusercontent.com/u/123613986"
        }
      ]
    },
    {
      "author": "maillab",
      "repo": "cloud-mail",
      "avatar": "https://github.com/maillab.png",
      "repo_link": "https://github.com/maillab/cloud-mail",
      "desc": "An all-in-one email service platform powered by Cloudflare | 基于 Cloudflare 的一站式邮箱服务平台 | Cloudflare Email 邮箱 Mail",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 23760,
      "added_stars": 667,
      "builtBy": [
        {
          "username": "aslost",
          "href": "https://github.com/aslost",
          "avatar": "https://avatars.githubusercontent.com/u/225811079"
        },
        {
          "username": "LeeQianXi",
          "href": "https://github.com/LeeQianXi",
          "avatar": "https://avatars.githubusercontent.com/u/93516542"
        },
        {
          "username": "Silentely",
          "href": "https://github.com/Silentely",
          "avatar": "https://avatars.githubusercontent.com/u/22141172"
        },
        {
          "username": "MengNianxiaoyao",
          "href": "https://github.com/MengNianxiaoyao",
          "avatar": "https://avatars.githubusercontent.com/u/103258286"
        },
        {
          "username": "LLLLLLiulei",
          "href": "https://github.com/LLLLLLiulei",
          "avatar": "https://avatars.githubusercontent.com/u/18627197"
        }
      ]
    },
    {
      "author": "expressjs",
      "repo": "express",
      "avatar": "https://github.com/expressjs.png",
      "repo_link": "https://github.com/expressjs/express",
      "desc": "Fast, unopinionated, minimalist web framework for node.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 25533,
      "added_stars": 143,
      "builtBy": [
        {
          "username": "tj",
          "href": "https://github.com/tj",
          "avatar": "https://avatars.githubusercontent.com/u/25254"
        },
        {
          "username": "dougwilson",
          "href": "https://github.com/dougwilson",
          "avatar": "https://avatars.githubusercontent.com/u/67512"
        },
        {
          "username": "jonathanong",
          "href": "https://github.com/jonathanong",
          "avatar": "https://avatars.githubusercontent.com/u/643505"
        },
        {
          "username": "defunctzombie",
          "href": "https://github.com/defunctzombie",
          "avatar": "https://avatars.githubusercontent.com/u/84792"
        },
        {
          "username": "UlisesGascon",
          "href": "https://github.com/UlisesGascon",
          "avatar": "https://avatars.githubusercontent.com/u/5110813"
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
      "by": "o4c",
      "descendants": 3,
      "id": 50514470,
      "kids": [
        50514688,
        50514681
      ],
      "score": 36,
      "time": 1794808237,
      "title": "How to Make Almost Anything",
      "type": "story",
      "url": "https://pub.cba.mit.edu/863.26/site/"
    },
    {
      "by": "zaik",
      "descendants": 61,
      "id": 50513160,
      "kids": [
        50513374,
        50513505,
        50513816,
        50513700,
        50513497,
        50513778,
        50513327,
        50514237,
        50514509,
        50513460,
        50513792,
        50514661,
        50513869,
        50513986,
        50513484,
        50514534,
        50513657
      ],
      "score": 246,
      "time": 1794794688,
      "title": "Universal XSS in uBlock Origin from website-driven element picker",
      "type": "story",
      "url": "https://iter.ca/post/ubo-uxss/"
    },
    {
      "by": "ilreb",
      "descendants": 117,
      "id": 50513215,
      "kids": [
        50513658,
        50513837,
        50513416,
        50513296,
        50513737,
        50513527,
        50513953,
        50514596,
        50513602,
        50513799,
        50513853,
        50513925,
        50513835,
        50513704,
        50514320,
        50514178,
        50513371
      ],
      "score": 343,
      "time": 1794795284,
      "title": "Qwen4-Max",
      "type": "story",
      "url": "https://qwen.ai/blog?id=qwen4-max"
    },
    {
      "by": "hspeiser",
      "descendants": 131,
      "id": 50511395,
      "kids": [
        50512151,
        50513319,
        50514698,
        50512250,
        50512109,
        50511517,
        50514231,
        50511688,
        50513189,
        50511757,
        50513250,
        50512041,
        50514699,
        50514549,
        50511781,
        50511907,
        50512287,
        50511962,
        50511396,
        50511723,
        50512111,
        50511533,
        50511692,
        50512774
      ],
      "score": 246,
      "time": 1794780703,
      "title": "Old Bitly links are being hijacked",
      "type": "story",
      "url": "https://ransomnews.com/burger-king-tweet-bitly-link-hijack-2026/"
    },
    {
      "by": "zdw",
      "descendants": 245,
      "id": 50512235,
      "kids": [
        50514556,
        50512999,
        50512717,
        50514528,
        50514586,
        50513322,
        50513344,
        50512813,
        50513188,
        50513910,
        50512866,
        50514482,
        50514042,
        50513915,
        50513045,
        50514604,
        50512745,
        50513983,
        50513955,
        50513042,
        50514213,
        50513085,
        50513029,
        50512792,
        50512771,
        50514210,
        50512932,
        50512319,
        50514484,
        50513503,
        50513342,
        50513007,
        50512659
      ],
      "score": 187,
      "time": 1794786955,
      "title": "What's Next for Nvidia?",
      "type": "story",
      "url": "https://steveblank.com/2026/11/15/whats-next-for-nvidia/"
    },
    {
      "by": "aillia",
      "descendants": 27,
      "id": 50512441,
      "kids": [
        50513763,
        50513939,
        50513048,
        50513599,
        50513070,
        50513174
      ],
      "score": 112,
      "time": 1794788514,
      "title": "Tor Project Issues Rapid-Response DoS-Defense Fix Amid Sustained DDoS Attack",
      "type": "story",
      "url": "https://forum.torproject.org/t/security-release-0-4-9-17/22454"
    },
    {
      "by": "CharlesW",
      "descendants": 37,
      "id": 50511806,
      "kids": [
        50512436,
        50511985,
        50514513,
        50512909,
        50512747,
        50513212,
        50512311,
        50514461,
        50513134,
        50512997,
        50512021
      ],
      "score": 133,
      "time": 1794783611,
      "title": "Preserving 30 years of Salon journalism",
      "type": "story",
      "url": "https://blog.archive.org/2026/11/12/preserving-30-years-of-salon-journalism/"
    },
    {
      "by": "bcye",
      "descendants": 51,
      "id": 50509837,
      "kids": [
        50512020,
        50511304,
        50511852,
        50511863,
        50513203,
        50514118,
        50511971,
        50514080,
        50512892,
        50514000,
        50512117,
        50513080,
        50513033,
        50512768,
        50512110,
        50512146,
        50511835,
        50511616,
        50510849,
        50511176,
        50514240,
        50512989
      ],
      "score": 267,
      "time": 1794770782,
      "title": "Protomaps: Self-hosting map tiles has gotten cheap and easy",
      "type": "story",
      "url": "https://bruceroettgers.eu/blog/protomaps/"
    },
    {
      "by": "dabinat",
      "descendants": 10,
      "id": 50514093,
      "kids": [
        50514585,
        50514595,
        50514450,
        50514437,
        50514481
      ],
      "score": 22,
      "time": 1794803823,
      "title": "Stop Filming in Log",
      "type": "story",
      "url": "https://digitalfilms.wordpress.com/2026/11/15/stop-filming-in-log/"
    },
    {
      "by": "mutexjp",
      "descendants": 18,
      "id": 50479405,
      "kids": [
        50513991,
        50514507,
        50514263,
        50514336,
        50514141,
        50514448,
        50514029
      ],
      "score": 30,
      "time": 1794553121,
      "title": "The Miracle Cure: In 1977, a drug rejected by doctors became a sensation",
      "type": "story",
      "url": "https://slate.com/technology/2026/11/doctor-medicine-cancer-cure-pill-history.html"
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
      "title": "A datetime library for Rust",
      "url": "https://burntsushi.net/jiff/",
      "score": 49,
      "comments": 11,
      "tags": [
        "rust"
      ],
      "id": "dxxvek"
    },
    {
      "title": "All AI-generated code should be Open Source",
      "url": "https://jakub.jankiewicz.org/blog/ai-code-open-source/",
      "score": 50,
      "comments": 14,
      "tags": [
        "programming"
      ],
      "id": "ek4fkg"
    },
    {
      "title": "Memory management in 40 major C projects, a survey",
      "url": "https://theconsensus.dev/p/2026/11/08/c-memory-management-survey.html",
      "score": 48,
      "comments": 12,
      "tags": [
        "c"
      ],
      "id": "vdxevp"
    },
    {
      "title": "beer.drv.drv.drv",
      "url": "https://fzakaria.com/2026/11/14/beer-drv-drv-drv",
      "score": 9,
      "comments": 3,
      "tags": [
        "nix"
      ],
      "id": "md0vco"
    },
    {
      "title": "25 of my favourite modern NES games",
      "url": "https://jordi.inversethought.com/blog/25-of-my-favourite-modern-nes-games/",
      "score": 68,
      "comments": 11,
      "tags": [
        "games",
        "retrocomputing"
      ],
      "id": "w9j7xs"
    },
    {
      "title": "Paint in the memory of other programs",
      "url": "https://citrons.xyz/journal/2026-04-13",
      "score": 7,
      "comments": 1,
      "tags": [
        "programming",
        "visualization"
      ],
      "id": "thiekk"
    },
    {
      "title": "cursor:pointer on buttons",
      "url": "https://blog.kizu.dev/cursors/",
      "score": 30,
      "comments": 13,
      "tags": [
        "a11y",
        "css",
        "web"
      ],
      "id": "h8tghc"
    },
    {
      "title": "clice v1.0 Released: Welcome to Modern C++",
      "url": "https://www.ykiko.me/en/articles/2105384023094834022/",
      "score": 8,
      "comments": 3,
      "tags": [
        "c++",
        "compilers"
      ],
      "id": "9haygb"
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
      "repo": "skills",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/skills",
      "desc": "Public repository for Agent Skills",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 22977,
      "added_stars": 14332,
      "builtBy": [
        {
          "username": "rlancemartin",
          "href": "https://github.com/rlancemartin",
          "avatar": "https://avatars.githubusercontent.com/u/122662504"
        },
        {
          "username": "klazuka",
          "href": "https://github.com/klazuka",
          "avatar": "https://avatars.githubusercontent.com/u/84525"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cj-ant",
          "href": "https://github.com/cj-ant",
          "avatar": "https://avatars.githubusercontent.com/u/286490957"
        },
        {
          "username": "ericharmeling",
          "href": "https://github.com/ericharmeling",
          "avatar": "https://avatars.githubusercontent.com/u/27286675"
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
      "forks": 7216,
      "added_stars": 18278,
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
      "author": "sherlock-project",
      "repo": "sherlock",
      "avatar": "https://github.com/sherlock-project.png",
      "repo_link": "https://github.com/sherlock-project/sherlock",
      "desc": "Hunt down social media accounts by username across social networks",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13002,
      "added_stars": 18371,
      "builtBy": [
        {
          "username": "sdushantha",
          "href": "https://github.com/sdushantha",
          "avatar": "https://avatars.githubusercontent.com/u/27065646"
        },
        {
          "username": "hoadlck",
          "href": "https://github.com/hoadlck",
          "avatar": "https://avatars.githubusercontent.com/u/1666888"
        },
        {
          "username": "ppfeister",
          "href": "https://github.com/ppfeister",
          "avatar": "https://avatars.githubusercontent.com/u/33327613"
        },
        {
          "username": "TheYahya",
          "href": "https://github.com/TheYahya",
          "avatar": "https://avatars.githubusercontent.com/u/15307244"
        },
        {
          "username": "Czechball",
          "href": "https://github.com/Czechball",
          "avatar": "https://avatars.githubusercontent.com/u/13371865"
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
      "forks": 3751,
      "added_stars": 10672,
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
          "username": "Afloat16",
          "href": "https://github.com/Afloat16",
          "avatar": "https://avatars.githubusercontent.com/u/132809511"
        },
        {
          "username": "Nordalux",
          "href": "https://github.com/Nordalux",
          "avatar": "https://avatars.githubusercontent.com/u/129338099"
        },
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
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
      "forks": 3999,
      "added_stars": 6417,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12365,
      "added_stars": 44024,
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
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
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
      "forks": 3593,
      "added_stars": 5293,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2334,
      "added_stars": 6012,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ The BEST Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10783,
      "added_stars": 15879,
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
      "author": "The-PR-Agent",
      "repo": "pr-agent",
      "avatar": "https://github.com/The-PR-Agent.png",
      "repo_link": "https://github.com/The-PR-Agent/pr-agent",
      "desc": "🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2208,
      "added_stars": 2884,
      "builtBy": [
        {
          "username": "mrT23",
          "href": "https://github.com/mrT23",
          "avatar": "https://avatars.githubusercontent.com/u/21198860"
        },
        {
          "username": "PeterDaveHello",
          "href": "https://github.com/PeterDaveHello",
          "avatar": "https://avatars.githubusercontent.com/u/3691490"
        },
        {
          "username": "IsmaelMartinez",
          "href": "https://github.com/IsmaelMartinez",
          "avatar": "https://avatars.githubusercontent.com/u/430992"
        },
        {
          "username": "okotek",
          "href": "https://github.com/okotek",
          "avatar": "https://avatars.githubusercontent.com/u/4869233"
        }
      ]
    },
    {
      "author": "harry0703",
      "repo": "MoneyPrinterTurbo",
      "avatar": "https://github.com/harry0703.png",
      "repo_link": "https://github.com/harry0703/MoneyPrinterTurbo",
      "desc": "利用 AI 大模型和自动化工作流，根据主题或关键词一键生成高清短视频。Generate HD short videos from a topic or keyword with an automated AI workflow.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 23050,
      "added_stars": 12991,
      "builtBy": [
        {
          "username": "harry0703",
          "href": "https://github.com/harry0703",
          "avatar": "https://avatars.githubusercontent.com/u/4928832"
        },
        {
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "c020627",
          "href": "https://github.com/c020627",
          "avatar": "https://avatars.githubusercontent.com/u/251123242"
        },
        {
          "username": "tanishqbaweja",
          "href": "https://github.com/tanishqbaweja",
          "avatar": "https://avatars.githubusercontent.com/u/74068132"
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
      "forks": 10308,
      "added_stars": 2604,
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
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13000,
      "added_stars": 6569,
      "builtBy": [
        {
          "username": "666ghj",
          "href": "https://github.com/666ghj",
          "avatar": "https://avatars.githubusercontent.com/u/110395318"
        },
        {
          "username": "Ghostubborn",
          "href": "https://github.com/Ghostubborn",
          "avatar": "https://avatars.githubusercontent.com/u/15389158"
        },
        {
          "username": "harshitanand",
          "href": "https://github.com/harshitanand",
          "avatar": "https://avatars.githubusercontent.com/u/8389627"
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
      "forks": 4924,
      "added_stars": 8890,
      "builtBy": [
        {
          "username": "mhegazy",
          "href": "https://github.com/mhegazy",
          "avatar": "https://avatars.githubusercontent.com/u/8000722"
        },
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
      "forks": 5757,
      "added_stars": 5532,
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
      "forks": 20743,
      "added_stars": 1058,
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
      "author": "vllm-project",
      "repo": "vllm",
      "avatar": "https://github.com/vllm-project.png",
      "repo_link": "https://github.com/vllm-project/vllm",
      "desc": "A high-throughput and memory-efficient inference and serving engine for LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 24874,
      "added_stars": 3327,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "DarkLight1337",
          "href": "https://github.com/DarkLight1337",
          "avatar": "https://avatars.githubusercontent.com/u/44970335"
        },
        {
          "username": "mgoin",
          "href": "https://github.com/mgoin",
          "avatar": "https://avatars.githubusercontent.com/u/3195154"
        },
        {
          "username": "WoosukKwon",
          "href": "https://github.com/WoosukKwon",
          "avatar": "https://avatars.githubusercontent.com/u/46394894"
        },
        {
          "username": "vllm-agent",
          "href": "https://github.com/vllm-agent",
          "avatar": "https://avatars.githubusercontent.com/u/272371455"
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
      "forks": 3158,
      "added_stars": 3695,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "The best way to control Claude Code, Codex and more from any computer or phone",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 11066,
      "added_stars": 33583,
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
          "username": "maria-rcks",
          "href": "https://github.com/maria-rcks",
          "avatar": "https://avatars.githubusercontent.com/u/254055478"
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
      "forks": 10203,
      "added_stars": 17038,
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
          "username": "Afloat16",
          "href": "https://github.com/Afloat16",
          "avatar": "https://avatars.githubusercontent.com/u/132809511"
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
      "forks": 7858,
      "added_stars": 20878,
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
      "author": "Vincentwei1021",
      "repo": "video-shotcraft",
      "avatar": "https://github.com/Vincentwei1021.png",
      "repo_link": "https://github.com/Vincentwei1021/video-shotcraft",
      "desc": "AI video skill for Claude Code & Codex — cinematic, editable product promos with Remotion: 124 shot recipe cards, 150 motion previews, beat sync, sound design, Motion Workbench & JianYing (CapCut CN) export.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1883,
      "added_stars": 7937,
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
          "username": "Nombah501",
          "href": "https://github.com/Nombah501",
          "avatar": "https://avatars.githubusercontent.com/u/184250974"
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
      "forks": 530,
      "added_stars": 7798,
      "builtBy": [
        {
          "username": "danyaberezun",
          "href": "https://github.com/danyaberezun",
          "avatar": "https://avatars.githubusercontent.com/u/3789877"
        },
        {
          "username": "rsolmano",
          "href": "https://github.com/rsolmano",
          "avatar": "https://avatars.githubusercontent.com/u/177517595"
        },
        {
          "username": "OLavrik",
          "href": "https://github.com/OLavrik",
          "avatar": "https://avatars.githubusercontent.com/u/14210843"
        },
        {
          "username": "Mark-Life",
          "href": "https://github.com/Mark-Life",
          "avatar": "https://avatars.githubusercontent.com/u/88837967"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "anomalyco",
      "repo": "opencode",
      "avatar": "https://github.com/anomalyco.png",
      "repo_link": "https://github.com/anomalyco/opencode",
      "desc": "The open source coding agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 30765,
      "added_stars": 14787,
      "builtBy": [
        {
          "username": "thdxr",
          "href": "https://github.com/thdxr",
          "avatar": "https://avatars.githubusercontent.com/u/826656"
        },
        {
          "username": "rekram1-node",
          "href": "https://github.com/rekram1-node",
          "avatar": "https://avatars.githubusercontent.com/u/63023139"
        },
        {
          "username": "adamdotdevin",
          "href": "https://github.com/adamdotdevin",
          "avatar": "https://avatars.githubusercontent.com/u/2363879"
        },
        {
          "username": "kitlangton",
          "href": "https://github.com/kitlangton",
          "avatar": "https://avatars.githubusercontent.com/u/7587245"
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
      "forks": 3483,
      "added_stars": 4552,
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
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca lets you run a fleet of coding agents (e.g. Claude Code, Codex) with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7991,
      "added_stars": 33198,
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
          "username": "OrcaWin",
          "href": "https://github.com/OrcaWin",
          "avatar": "https://avatars.githubusercontent.com/u/293788423"
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
      "forks": 6190,
      "added_stars": 9288,
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
      "author": "backnotprop",
      "repo": "plannotator",
      "avatar": "https://github.com/backnotprop.png",
      "repo_link": "https://github.com/backnotprop/plannotator",
      "desc": "The workspace to stay in the loop and on top of agents - shape, decide, plan, annotate, review code, share with team, and send all feedback to agents with one click.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1118,
      "added_stars": 2237,
      "builtBy": [
        {
          "username": "backnotprop",
          "href": "https://github.com/backnotprop",
          "avatar": "https://avatars.githubusercontent.com/u/7244317"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "utpalsinghdev",
          "href": "https://github.com/utpalsinghdev",
          "avatar": "https://avatars.githubusercontent.com/u/110197373"
        },
        {
          "username": "leoreisdias",
          "href": "https://github.com/leoreisdias",
          "avatar": "https://avatars.githubusercontent.com/u/47978193"
        },
        {
          "username": "uvw",
          "href": "https://github.com/uvw",
          "avatar": "https://avatars.githubusercontent.com/u/1078682"
        }
      ]
    },
    {
      "author": "tashfeenahmed",
      "repo": "freellmapi",
      "avatar": "https://github.com/tashfeenahmed.png",
      "repo_link": "https://github.com/tashfeenahmed/freellmapi",
      "desc": "10.1 billion tokens per month. 87 free LLM providers. 1,313 free model endpoints. All behind one /v1 endpoint, plus any custom OpenAI-compatible endpoint. Smart routing, automatic failover, encrypted keys. Personal experimentation only.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7424,
      "added_stars": 17479,
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
      "author": "CopilotKit",
      "repo": "OpenBot",
      "avatar": "https://github.com/CopilotKit.png",
      "repo_link": "https://github.com/CopilotKit/OpenBot",
      "desc": "Open-source AI coworkers that each get a computer of their own: a browser, files and tools, with every action decided before it happens and recorded after. Bring any AG-UI agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1545,
      "added_stars": 5938,
      "builtBy": [
        {
          "username": "davidmckayv",
          "href": "https://github.com/davidmckayv",
          "avatar": "https://avatars.githubusercontent.com/u/1574202"
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
          "username": "guidovizoso",
          "href": "https://github.com/guidovizoso",
          "avatar": "https://avatars.githubusercontent.com/u/27702539"
        },
        {
          "username": "Ayush7614",
          "href": "https://github.com/Ayush7614",
          "avatar": "https://avatars.githubusercontent.com/u/67006255"
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
      "forks": 7969,
      "added_stars": 4584,
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
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for month-long single sessions (billions of tokens) and small context windows (a 100K context is enough), billion-context is all you need .",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 623,
      "added_stars": 6238,
      "builtBy": [
        {
          "username": "ranxianglei",
          "href": "https://github.com/ranxianglei",
          "avatar": "https://avatars.githubusercontent.com/u/12445698"
        },
        {
          "username": "Afloat16",
          "href": "https://github.com/Afloat16",
          "avatar": "https://avatars.githubusercontent.com/u/132809511"
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
      "forks": 1565,
      "added_stars": 4539,
      "builtBy": [
        {
          "username": "elie222",
          "href": "https://github.com/elie222",
          "avatar": "https://avatars.githubusercontent.com/u/3090527"
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
          "username": "zicochaos",
          "href": "https://github.com/zicochaos",
          "avatar": "https://avatars.githubusercontent.com/u/23367003"
        },
        {
          "username": "yxr-2025",
          "href": "https://github.com/yxr-2025",
          "avatar": "https://avatars.githubusercontent.com/u/226968270"
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
      "forks": 644,
      "added_stars": 1602,
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
      "author": "github",
      "repo": "docs",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/docs",
      "desc": "The open-source repo for docs.github.com",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 69604,
      "added_stars": 769,
      "builtBy": [
        {
          "username": "Octomerger",
          "href": "https://github.com/Octomerger",
          "avatar": "https://avatars.githubusercontent.com/u/63058869"
        },
        {
          "username": "docs-bot",
          "href": "https://github.com/docs-bot",
          "avatar": "https://avatars.githubusercontent.com/u/77750099"
        },
        {
          "username": "heiskr",
          "href": "https://github.com/heiskr",
          "avatar": "https://avatars.githubusercontent.com/u/1221423"
        },
        {
          "username": "mchammer01",
          "href": "https://github.com/mchammer01",
          "avatar": "https://avatars.githubusercontent.com/u/42146119"
        },
        {
          "username": "sophietheking",
          "href": "https://github.com/sophietheking",
          "avatar": "https://avatars.githubusercontent.com/u/29382425"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "playwright",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/playwright",
      "desc": "Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6889,
      "added_stars": 2643,
      "builtBy": [
        {
          "username": "pavelfeldman",
          "href": "https://github.com/pavelfeldman",
          "avatar": "https://avatars.githubusercontent.com/u/883973"
        },
        {
          "username": "dgozman",
          "href": "https://github.com/dgozman",
          "avatar": "https://avatars.githubusercontent.com/u/9881434"
        },
        {
          "username": "yury-s",
          "href": "https://github.com/yury-s",
          "avatar": "https://avatars.githubusercontent.com/u/9798949"
        },
        {
          "username": "mxschmitt",
          "href": "https://github.com/mxschmitt",
          "avatar": "https://avatars.githubusercontent.com/u/17984549"
        },
        {
          "username": "aslushnikov",
          "href": "https://github.com/aslushnikov",
          "avatar": "https://avatars.githubusercontent.com/u/746130"
        }
      ]
    },
    {
      "author": "google-gemini",
      "repo": "gemini-cli",
      "avatar": "https://github.com/google-gemini.png",
      "repo_link": "https://github.com/google-gemini/gemini-cli",
      "desc": "An open-source AI agent that brings the power of Gemini directly into your terminal.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 14957,
      "added_stars": 2026,
      "builtBy": [
        {
          "username": "scidomino",
          "href": "https://github.com/scidomino",
          "avatar": "https://avatars.githubusercontent.com/u/13950003"
        },
        {
          "username": "jacob314",
          "href": "https://github.com/jacob314",
          "avatar": "https://avatars.githubusercontent.com/u/1226812"
        },
        {
          "username": "NTaylorMullen",
          "href": "https://github.com/NTaylorMullen",
          "avatar": "https://avatars.githubusercontent.com/u/2008729"
        },
        {
          "username": "abhipatel12",
          "href": "https://github.com/abhipatel12",
          "avatar": "https://avatars.githubusercontent.com/u/43648792"
        },
        {
          "username": "SandyTao520",
          "href": "https://github.com/SandyTao520",
          "avatar": "https://avatars.githubusercontent.com/u/12478482"
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
      "forks": 3582,
      "added_stars": 13956,
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
          "username": "tyk-bitt",
          "href": "https://github.com/tyk-bitt",
          "avatar": "https://avatars.githubusercontent.com/u/263388032"
        }
      ]
    },
    {
      "author": "GoogleChrome",
      "repo": "modern-web-guidance-src",
      "avatar": "https://github.com/GoogleChrome.png",
      "repo_link": "https://github.com/GoogleChrome/modern-web-guidance-src",
      "desc": "Keep your coding agent up to date with the latest web best practices",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 642,
      "added_stars": 5584,
      "builtBy": [
        {
          "username": "paulirish",
          "href": "https://github.com/paulirish",
          "avatar": "https://avatars.githubusercontent.com/u/39191"
        },
        {
          "username": "rviscomi",
          "href": "https://github.com/rviscomi",
          "avatar": "https://avatars.githubusercontent.com/u/1120896"
        },
        {
          "username": "micahjo7",
          "href": "https://github.com/micahjo7",
          "avatar": "https://avatars.githubusercontent.com/u/126118814"
        },
        {
          "username": "LeaVerou",
          "href": "https://github.com/LeaVerou",
          "avatar": "https://avatars.githubusercontent.com/u/175836"
        }
      ]
    },
    {
      "author": "milind-soni",
      "repo": "OpenMausBot",
      "avatar": "https://github.com/milind-soni.png",
      "repo_link": "https://github.com/milind-soni/OpenMausBot",
      "desc": "Open-source Grok Bot alternative with a virtual machine that bots can use",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3293,
      "added_stars": 18327,
      "builtBy": [
        {
          "username": "milind-soni",
          "href": "https://github.com/milind-soni",
          "avatar": "https://avatars.githubusercontent.com/u/46266943"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "aivsomkar",
          "href": "https://github.com/aivsomkar",
          "avatar": "https://avatars.githubusercontent.com/u/255997030"
        },
        {
          "username": "AdityaUmale",
          "href": "https://github.com/AdityaUmale",
          "avatar": "https://avatars.githubusercontent.com/u/146627237"
        },
        {
          "username": "robinsonnblack",
          "href": "https://github.com/robinsonnblack",
          "avatar": "https://avatars.githubusercontent.com/u/331326017"
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
      "title": "Long Live Rails",
      "description": "When DHH took the stage at Rails World 2026 and talked openly about going \"pencils down\" on...",
      "url": "https://dev.to/ben/long-live-rails-3p21",
      "tags": "rails, ruby, rust, ai",
      "reactions": 133,
      "comments": 23,
      "reading_time": 5,
      "author": "ben"
    },
    {
      "title": "Congrats to the Hacktoberfest Open-Source AI Challenge Week 4: Ghost in the Machine Winners!",
      "description": "The results are in for the final week of our Hacktoberfest DEV Challenges! For Ghost in the Machine,...",
      "url": "https://dev.to/devteam/congrats-to-the-hacktoberfest-open-source-ai-challenge-week-4-ghost-in-the-machine-winners-nok",
      "tags": "devchallenge, hf26challenge, hacktoberfest, ai",
      "reactions": 97,
      "comments": 39,
      "reading_time": 4,
      "author": "heyitsjem"
    },
    {
      "title": "️🎞️ What is native multimodality?",
      "description": "🍿 Just a moment #01    Did you know there are three tokenizers involved when Gemini...",
      "url": "https://dev.to/googlecloud/what-is-native-multimodality-3091",
      "tags": "llm, machinelearning, videos, justamoment",
      "reactions": 5,
      "comments": 0,
      "reading_time": 1,
      "author": "picardparis"
    },
    {
      "title": "Can't Beat Free: Gemma 4 31B on AMD Token Lab, with a Local Chat Page and an ADK Agent",
      "description": "AMD Token Lab is a free OpenAI-compatible API on AMD GPUs that comes with the AMD AI Developer Program. How to sign up, a local chat page that keeps the key off the browser, a terminal client, and a small ADK agent that calls Gemma 4 31B through it.",
      "url": "https://dev.to/gde/cant-beat-free-gemma-4-31b-on-amd-token-lab-with-a-local-chat-page-and-an-adk-agent-c5b",
      "tags": "gemma, amd, adk, ai",
      "reactions": 38,
      "comments": 13,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "Refactor or Rot: Designing a Self-Improving Codebase",
      "description": "Coding agents have made it easier to produce software quickly. They have also made an old problem...",
      "url": "https://dev.to/jacob_prall_1c6bff06b0e0d/refactor-or-rot-designing-a-self-improving-codebase-22ak",
      "tags": "agents, ai, refactoring, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "jacob_prall_1c6bff06b0e0d"
    },
    {
      "title": "How did you end up in tech, and are you staying?",
      "description": "Last week you showed me where you code. This week I want to know how you ended up there in the first...",
      "url": "https://dev.to/maame-codes/how-did-you-end-up-in-tech-and-are-you-staying-4l9b",
      "tags": "discuss, career, beginners, watercooler",
      "reactions": 161,
      "comments": 65,
      "reading_time": 3,
      "author": "maame-codes"
    },
    {
      "title": "Can you merge at agent speed?",
      "description": "Major League Hacking and Entire are teaming up for a year of hackathons, DEV Challenges, and a new...",
      "url": "https://blog.mlh.com/can-you-merge-at-agent-speed-4m67",
      "tags": "hackathon, ai, opensource, entire",
      "reactions": 32,
      "comments": 3,
      "reading_time": 5,
      "author": "mlhacks"
    },
    {
      "title": "Why We Built an MCP Server for AI Founders’ Go to Market",
      "description": "Launching a technical startup in the age of AI is challenging. So we built a full MCP server to put...",
      "url": "https://dev.to/tedcarstensen/why-we-built-an-mcp-server-for-ai-founders-go-to-market-4hge",
      "tags": "ai, mcp, startup",
      "reactions": 2,
      "comments": 0,
      "reading_time": 5,
      "author": "tedcarstensen"
    },
    {
      "title": "Fast multimodal control flow with the Gemini Decisions API",
      "description": "Generative models write text for people to read. When your app only needs to pick a tool or route a...",
      "url": "https://dev.to/philschmid/fast-multimodal-control-flow-with-the-gemini-decisions-api-533b",
      "tags": "ai, api, gemini, llm",
      "reactions": 0,
      "comments": 0,
      "reading_time": 1,
      "author": "philschmid"
    },
    {
      "title": "Prompt Pad: What Are Tokens?",
      "description": "Your AI doesn't read your prompt word for word. It reads tokens.  In this episode of Prompt Pad,...",
      "url": "https://blog.mlh.com/prompt-pad-what-are-tokens-gec",
      "tags": "ai, beginners, codenewbie, llm",
      "reactions": 7,
      "comments": 0,
      "reading_time": 1,
      "author": "mlhacks"
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
      "title": "AI Avatar v28 (Security Support, Voxel Avatar)🛡️",
      "description": "Intro   AI Avatar is a free app where your VRoid (VRM) avatar cheers you with all its...",
      "url": "https://dev.to/webdeveloperhyper/ai-avatar-v28-security-support-voxel-avatar-2i5i",
      "tags": "ai, webdev, productivity, security",
      "reactions": 4,
      "comments": 1,
      "reading_time": 5,
      "author": "webdeveloperhyper"
    },
    {
      "title": "I got tired of uploading sensitive PDFs to random servers, so I built a 100% offline browser suite",
      "description": "Picture this: You’re trying to merge two pages of a sensitive bank statement, or maybe you just need...",
      "url": "https://dev.to/sahil_sahjad_e6c489cec4c6/i-got-tired-of-uploading-sensitive-pdfs-to-random-servers-so-i-built-a-100-offline-browser-suite-1lfc",
      "tags": "webdev, javascript, sideprojects, productivity",
      "reactions": 1,
      "comments": 1,
      "reading_time": 2,
      "author": "sahil_sahjad_e6c489cec4c6"
    },
    {
      "title": "Talk to your coding agent by writing and drawing on an iPad",
      "description": "We talk to coding agents in three ways today: typing, voice, or pasting a screenshot. Some things...",
      "url": "https://dev.to/pdggk/i-let-my-coding-agent-mark-up-my-handwritten-maths-on-the-ipad-on-the-same-page-2b80",
      "tags": "showdev, opensource, productivity, python",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "pdggk"
    },
    {
      "title": "Codex's 32 KiB default would cut our 35,479-byte CLAUDE.md three bytes into a heading and drop its last 3 sections",
      "description": "The CLAUDE.md at the root of our agent repo was 35,479 bytes at commit f53fb172 on 2026-11-11....",
      "url": "https://dev.to/rulestack/codexs-32-kib-default-would-cut-our-35479-byte-claudemd-three-bytes-into-a-heading-and-drop-its-cgp",
      "tags": "ai, productivity, cli, claudecode",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "rulestack"
    },
    {
      "title": "How to fix ITMS-91053 in React Native and Expo (with one command)",
      "description": "You upload a React Native build to App Store Connect, and a few minutes later Apple sends an email...",
      "url": "https://dev.to/yogesh_senior_dev/how-to-fix-itms-91053-in-react-native-and-expo-with-one-command-1gi9",
      "tags": "productivity, javascript, react, frontend",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "yogesh_senior_dev"
    },
    {
      "title": "How to Remove Duplicate Lines from a List (Free, Keeps Order, No Uploads)",
      "description": "Merged two email lists and now half the addresses appear twice. Exported keywords from three tools...",
      "url": "https://dev.to/sujalkhatri/how-to-remove-duplicate-lines-from-a-list-free-keeps-order-no-uploads-5752",
      "tags": "webdev, tools, productivity, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "sujalkhatri"
    },
    {
      "title": "A Definition of Done That Devs and QA Both Believe",
      "description": "Every team has had this exact conversation.  A developer says the ticket is done. QA opens it and...",
      "url": "https://dev.to/projtl/a-definition-of-done-that-devs-and-qa-both-believe-24h9",
      "tags": "agile, testing, productivity, teamwork",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "projtl"
    },
    {
      "title": "Give Claude access to Google Trends with the Apify MCP server",
      "description": "I wanted Claude to answer questions like \"is interest in pickleball still growing, and where?\" with...",
      "url": "https://dev.to/krammer/give-claude-access-to-google-trends-with-the-apify-mcp-server-2ec",
      "tags": "ai, mcp, seo, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "krammer"
    },
    {
      "title": "How to Batch Compress & Convert Nested Image Folders to WebP in the Browser (No 20-File Upload Limits)",
      "description": "If you've ever needed to compress a multi-folder project—like a public/assets/ directory for a web...",
      "url": "https://dev.to/youyishi_zhen_50a09394c12/how-to-batch-compress-convert-nested-image-folders-to-webp-in-the-browser-no-20-file-upload-lhf",
      "tags": "webdev, javascript, opensource, productivity",
      "reactions": 1,
      "comments": 1,
      "reading_time": 3,
      "author": "youyishi_zhen_50a09394c12"
    },
    {
      "title": "Best AI Video Generators in 2026: Free vs Paid, and My LTX-2.3 Test",
      "description": "Compare the best AI video generators in 2026 — free vs paid plans, real pricing, local open-weight models, and my hands-on LTX-2.3 test.",
      "url": "https://dev.to/hoelee/best-ai-video-generators-in-2026-free-vs-paid-and-my-ltx-23-test-3clf",
      "tags": "ai, tutorial, showdev, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 15,
      "author": "hoelee"
    }
  ]
}
- Fetching feeds...
{
  "source": "reddit",
  "topic": "freelance",
  "sort": "top",
  "items": []
}
```

