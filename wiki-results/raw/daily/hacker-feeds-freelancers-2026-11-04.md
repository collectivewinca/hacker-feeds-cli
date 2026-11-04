# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-11-04 06:26:00 UTC

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
      "forks": 3798,
      "added_stars": 8598,
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
      "author": "affaan-m",
      "repo": "ECC",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/ECC",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 43872,
      "added_stars": 6053,
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
      "author": "Leonxlnx",
      "repo": "taste-skill",
      "avatar": "https://github.com/Leonxlnx.png",
      "repo_link": "https://github.com/Leonxlnx/taste-skill",
      "desc": "Agent skills that give coding agents taste: art direction, reference images and a browser check instead of generic AI pages",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7370,
      "added_stars": 5972,
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
      "author": "HunYiSage",
      "repo": "dsh-purge",
      "avatar": "https://github.com/HunYiSage.png",
      "repo_link": "https://github.com/HunYiSage/dsh-purge",
      "desc": "DeepSeek Harness 破甲：让所有模型都能破甲，不同模型可换不同提示词；默认提示词面向国模「小码酱」。Jailbreak for every model — swap prompts per model. 求 Star 收藏 ⭐ 如要二开，请查看署名要求部分",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4025,
      "added_stars": 6158,
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
          "username": "Musan-34",
          "href": "https://github.com/Musan-34",
          "avatar": "https://avatars.githubusercontent.com/u/279201993"
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
      "forks": 8568,
      "added_stars": 1451,
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
      "forks": 1212,
      "added_stars": 1386,
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
      "author": "hmjz100",
      "repo": "LinkSwift",
      "avatar": "https://github.com/hmjz100.png",
      "repo_link": "https://github.com/hmjz100/LinkSwift",
      "desc": "一个基于 JavaScript 的网盘文件下载地址获取工具。基于【网盘直链下载助手】修改 ，支持 百度网盘 / 阿里云盘 / 中国移动云盘 / 天翼云盘 / 迅雷云盘 / 夸克网盘 / UC网盘 / 123云盘 八大网盘",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2695,
      "added_stars": 4746,
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
      "author": "techjarves",
      "repo": "Portable-Local-Studio",
      "avatar": "https://github.com/techjarves.png",
      "repo_link": "https://github.com/techjarves/Portable-Local-Studio",
      "desc": "Portable local AI studio for Windows, Linux, and macOS. Zero-setup GUI for Image Generation, GGUF LLMs, Text to Speech & Speech to Text",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 456,
      "added_stars": 280,
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
      "author": "DeanChensj",
      "repo": "jiangshan-map",
      "avatar": "https://github.com/DeanChensj.png",
      "repo_link": "https://github.com/DeanChensj/jiangshan-map",
      "desc": "江山时序 · 中国历史交互地图时间轴 (403 BCE – Present) | Interactive Historical Atlas of China across 18 dynasties, 164 territory snapshots, ancient-to-modern place genealogy & classical poetry routes",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 462,
      "added_stars": 2270,
      "builtBy": [
        {
          "username": "DeanChensj",
          "href": "https://github.com/DeanChensj",
          "avatar": "https://avatars.githubusercontent.com/u/9414763"
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
        },
        {
          "username": "jazhang00",
          "href": "https://github.com/jazhang00",
          "avatar": "https://avatars.githubusercontent.com/u/21065591"
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
      "forks": 5285,
      "added_stars": 333,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
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
      "forks": 5050,
      "added_stars": 328,
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
      "by": "memalign",
      "descendants": 16,
      "id": 50361268,
      "kids": [
        50361809,
        50361725,
        50361944,
        50361913,
        50361872,
        50361687,
        50361719,
        50362027,
        50361994
      ],
      "score": 82,
      "time": 1793763650,
      "title": "Jelly Sheet",
      "type": "story",
      "url": "https://mrdoob.github.io/codevember-2026/01/"
    },
    {
      "by": "thatxliner",
      "descendants": 100,
      "id": 50360164,
      "kids": [
        50361334,
        50361756,
        50361939,
        50361206,
        50361242,
        50361378,
        50361469,
        50362040,
        50361501,
        50361674,
        50361341,
        50361735,
        50361859,
        50361630,
        50361140,
        50361741,
        50361730,
        50361338,
        50361083,
        50361144,
        50361273,
        50361158,
        50361345,
        50361811,
        50361397
      ],
      "score": 206,
      "time": 1793752402,
      "title": "C++26 Disapproved",
      "type": "story",
      "url": "https://andreasfertig.com/blog/2026/11/cpp26-dis-failed-how-does-cpp-survive/"
    },
    {
      "by": "gmays",
      "descendants": 1,
      "id": 50361154,
      "kids": [
        50361660
      ],
      "score": 47,
      "time": 1793762413,
      "title": "Distinct cellular and genetic differences in colorectal cancer in young patients",
      "type": "story",
      "url": "https://www.dana-farber.org/newsroom/news-releases/2026/study-reveals-distinct-cellular-and-genetic-differences-in-colorectal-cancer-in-younger-patients"
    },
    {
      "by": "ibobev",
      "descendants": 13,
      "id": 50358702,
      "kids": [
        50361063,
        50359266,
        50361046,
        50361076,
        50360879,
        50361038
      ],
      "score": 221,
      "time": 1793742666,
      "title": "The Internals of PostgreSQL",
      "type": "story",
      "url": "https://www.interdb.jp/pg/index.html"
    },
    {
      "by": "xx_ns",
      "descendants": 295,
      "id": 50339288,
      "kids": [
        50353939,
        50355141,
        50355134,
        50354057,
        50353866,
        50354306,
        50361680,
        50361685,
        50354657,
        50355355,
        50357851,
        50354274,
        50360072,
        50354695,
        50353489,
        50354739,
        50357461,
        50359331,
        50354520,
        50358672,
        50356817,
        50353583,
        50356201,
        50356330,
        50359470,
        50355175,
        50357919,
        50354318,
        50361252,
        50354810,
        50354416,
        50357291,
        50354307,
        50358761,
        50359914,
        50354935,
        50359216,
        50358403,
        50354380,
        50355908,
        50356079,
        50355205,
        50355064,
        50354609,
        50354093,
        50361873,
        50360717,
        50360932,
        50354885,
        50354635
      ],
      "score": 721,
      "time": 1793636959,
      "title": "Jailbreaking my car's navigation system just so I can change the time",
      "type": "story",
      "url": "https://blog.nns.ee/2026/11/02/renault-hack/"
    },
    {
      "by": "nharada",
      "descendants": 173,
      "id": 50354358,
      "kids": [
        50358075,
        50359580,
        50356275,
        50358463,
        50359365,
        50356619,
        50361929,
        50356706,
        50359351,
        50361770,
        50356823,
        50361545,
        50356221,
        50356696,
        50356147,
        50356628,
        50357039,
        50357547,
        50361788,
        50358108,
        50357579,
        50360726,
        50357694,
        50357607,
        50357434,
        50357161,
        50358906,
        50356779,
        50356363,
        50359619,
        50357617,
        50357375,
        50358498,
        50359758,
        50356701,
        50356140,
        50359517,
        50358278,
        50356453,
        50356559,
        50356737,
        50359308,
        50356662,
        50357827,
        50357698,
        50357341,
        50357838
      ],
      "score": 497,
      "time": 1793724449,
      "title": "Stringman, an $800 open-source room scale gripper robot",
      "type": "story",
      "url": "https://neufangled.com/"
    },
    {
      "by": "gmays",
      "descendants": 5,
      "id": 50360573,
      "kids": [
        50361402,
        50361607,
        50362045
      ],
      "score": 63,
      "time": 1793756442,
      "title": "Giant canyon on Mars is still tectonically active",
      "type": "story",
      "url": "https://lamont.columbia.edu/news/giant-canyon-mars-still-tectonically-active-today"
    },
    {
      "by": "dsalzman",
      "descendants": 54,
      "id": 50346755,
      "kids": [
        50361320,
        50361633,
        50361060,
        50361193,
        50361722,
        50360980,
        50361701,
        50357819,
        50360223,
        50360696,
        50360711,
        50359853,
        50361145,
        50361856,
        50359671,
        50359095,
        50359996,
        50358980,
        50358747,
        50361477,
        50359690,
        50358892,
        50358574,
        50359753,
        50359571,
        50358662,
        50358267,
        50359071,
        50357839,
        50358456,
        50360558,
        50359462,
        50359738,
        50361135,
        50360055,
        50359884,
        50360231,
        50359859,
        50358651
      ],
      "score": 266,
      "text": "I saw HackerTube (<a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50319510\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=50319510</a>) a few days ago, the YouTube videos HN keeps\nrecommending, pulled from 19 years of comments. It made me want to flip\nthrough them instead of picking, so I built a TV for it. I have Algo fatigue.<p>Each topic area is a channel (DEVTV, SOLDER, RETRO, ORBIT, ...), plus HN Prime\n(the top 400), a music channel, and Late Night on ch 99, which only broadcasts\n11pm-5am your local time and shows color bars otherwise.<p>Similar to HackerTube it was built with Claude Code in a few hours.<p>All credit for the data goes to HackerTube. Happy to hear channel ideas.",
      "time": 1793668689,
      "title": "Show HN: HackerTV – HN's most-recommended Youtube videos as 24/7 TV channels",
      "type": "story",
      "url": "https://hackertv.org"
    },
    {
      "by": "passkey1510",
      "descendants": 8,
      "id": 50358352,
      "kids": [
        50362035,
        50361965,
        50361234,
        50361178
      ],
      "score": 20,
      "text": "To give you some context on the project. I&#x27;m a solo founder and I use AI heavily in my work. The idea came from wanting players to discover cities. Each city has its own history, so every case is set in a real city with real public places. The crime and the people are on other hand invented. The part that I care most is the playable aspect of the game, a model plays the detective and must solve the case before it goes live.<p>As of today: it&#x27;s free on Android, the iOS version is still waiting to be reviewed by Apple. It&#x27;s available in six popular languages, but adding more languages is just a matter of time and demand.My long term vision if it takes off: weekly cases, private parties like a team-building escape game, an MCP so a game master can build their own scenario from ChatGPT or Claude, and maybe tourism offices since players travel the world.",
      "time": 1793740803,
      "title": "Show HN: Uncracked City, detective game where you question LLM suspects that lie",
      "type": "story",
      "url": "https://uncracked.city"
    },
    {
      "by": "bookofjoe",
      "descendants": 181,
      "id": 50336918,
      "kids": [
        50353433,
        50356684,
        50352954,
        50354106,
        50361740,
        50354630,
        50355255,
        50353077,
        50357956,
        50352891,
        50361613,
        50353720,
        50353368,
        50354127,
        50357964,
        50353544,
        50354473,
        50353840,
        50353434,
        50355485,
        50356895,
        50355126,
        50357467,
        50354685,
        50359727,
        50353275,
        50355638,
        50358030,
        50353285,
        50353379,
        50356190
      ],
      "score": 435,
      "time": 1793628162,
      "title": "Fujifilm to boost tape production 5x as AI fuels archiving demand",
      "type": "story",
      "url": "https://arstechnica.com/gadgets/2026/10/fujifilm-to-boost-tape-production-5x-as-ai-fuels-archiving-demand/"
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
      "title": "Death comes for XSLT",
      "url": "https://dbushell.com/2026/11/03/xslt-rip/",
      "score": 71,
      "comments": 64,
      "tags": [
        "browsers",
        "web"
      ],
      "id": "chypzr"
    },
    {
      "title": "The Ubuntu 26.04 Rust sudo is not compatible with standard sudo",
      "url": "https://utcc.utoronto.ca/~cks/space/blog/linux/Ubuntu2604RustSudoNotCompatible",
      "score": 56,
      "comments": 29,
      "tags": [
        "linux",
        "rust"
      ],
      "id": "e201eb"
    },
    {
      "title": "Could a modern chess engine on a Pentium have defeated Kasparov in 1996?",
      "url": "https://nicholas.carlini.com/writing/2026/algorithmic-improvements-chess.html",
      "score": 39,
      "comments": 9,
      "tags": [
        "games",
        "retrocomputing"
      ],
      "id": "1gndxr"
    },
    {
      "title": "Observations from Running stealmybitcoin.com",
      "url": "https://pavursec.com/blog/stealmybitcoin/",
      "score": 27,
      "comments": 0,
      "tags": [
        "php",
        "security"
      ],
      "id": "fgucra"
    },
    {
      "title": "Announcing NetBSD 11.1",
      "url": "https://www.netbsd.org/releases/formal-11/NetBSD-11.1.html",
      "score": 23,
      "comments": 1,
      "tags": [
        "netbsd",
        "release"
      ],
      "id": "siqsg7"
    },
    {
      "title": "A Decade of Kill Bugs",
      "url": "https://alangrow.com/blog/a-decade-of-kill-bugs",
      "score": 106,
      "comments": 17,
      "tags": [
        "historical",
        "linux",
        "unix"
      ],
      "id": "wgoato"
    },
    {
      "title": "Would you believe it's jank?",
      "url": "https://www.youtube.com/watch?v=tHgApFhevrQ",
      "score": 15,
      "comments": 6,
      "tags": [
        "c++",
        "clojure",
        "video"
      ],
      "id": "xbmjlj"
    },
    {
      "title": "Your terminal manipulation/navigation setups",
      "url": "",
      "score": 12,
      "comments": 9,
      "tags": [
        "a11y",
        "ask",
        "editors"
      ],
      "id": "r3gton"
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
      "forks": 11109,
      "added_stars": 48168,
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
      "forks": 3831,
      "added_stars": 8685,
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
      "forks": 2402,
      "added_stars": 8708,
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
      "forks": 4790,
      "added_stars": 8845,
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
      "forks": 3437,
      "added_stars": 8108,
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
      "forks": 9684,
      "added_stars": 19446,
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
      "forks": 6708,
      "added_stars": 14236,
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
      "author": "calesthio",
      "repo": "OpenMontage",
      "avatar": "https://github.com/calesthio.png",
      "repo_link": "https://github.com/calesthio/OpenMontage",
      "desc": "World's first open-source, agentic video production system. 12 production pipelines, 100+ tools, 700+ agent skill and production-knowledge files. Turn your AI coding assistant into a full video production studio.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10086,
      "added_stars": 13622,
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
      "forks": 3368,
      "added_stars": 4731,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5237,
      "added_stars": 6960,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2088,
      "added_stars": 5054,
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
      "author": "wshobson",
      "repo": "agents",
      "avatar": "https://github.com/wshobson.png",
      "repo_link": "https://github.com/wshobson/agents",
      "desc": "Multi-harness agentic plugin marketplace for Claude Code, Codex, Cursor, OpenCode, GitHub Copilot, Google Antigravity, and Pi",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4457,
      "added_stars": 2094,
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
      "forks": 10317,
      "added_stars": 10288,
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
      "author": "luongnv89",
      "repo": "claude-howto",
      "avatar": "https://github.com/luongnv89.png",
      "repo_link": "https://github.com/luongnv89/claude-howto",
      "desc": "A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5701,
      "added_stars": 4938,
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
      "author": "beenuar",
      "repo": "AiSOC",
      "avatar": "https://github.com/beenuar.png",
      "repo_link": "https://github.com/beenuar/AiSOC",
      "desc": "Open-source AI Security Operations Center: alert fusion, LLM-agent triage, MITRE ATT&CK investigation, and a replayable decision ledger for every agent step. Self-hostable, runs with no API keys, MIT licensed. Ships an MCP server for Claude, Cursor and Continue.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 724,
      "added_stars": 4934,
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
      "forks": 106507,
      "added_stars": 426427,
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
      "forks": 7224,
      "added_stars": 22387,
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
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for month-long single sessions (billions of tokens) ,small context windows (a 100K context is enough) and token savings (5x fewer tokens) .上下文压缩插件，月级长会话会话， 兼顾小窗口(100k上下文足矣)省token(省5倍token) . billion-context is all you need",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 327,
      "added_stars": 3363,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9757,
      "added_stars": 16740,
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
      "forks": 9286,
      "added_stars": 18907,
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
      "author": "tester-army",
      "repo": "e2e",
      "avatar": "https://github.com/tester-army.png",
      "repo_link": "https://github.com/tester-army/e2e",
      "desc": "Next generation e2e testing framework for web and mobile apps.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 676,
      "added_stars": 10768,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Free, local plugin that keeps tool output out of your coding agent's context window. Sandbox and SQLite FTS5 search, 99% fewer bytes in context. Works with Claude Code, Codex, Pi, OpenCode, Gemini CLI, Copilot CLI and 4 more agents. Zero telemetry.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2301,
      "added_stars": 8397,
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
      "forks": 6449,
      "added_stars": 16812,
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
      "author": "michael-denyer",
      "repo": "pstack-claude",
      "avatar": "https://github.com/michael-denyer.png",
      "repo_link": "https://github.com/michael-denyer/pstack-claude",
      "desc": "Claude Code, Codex, Copilot, Pi, OpenCode, Muse, Gemini, and Prime Agent versions of Poteto's pstack. Rigorous agent workflows with Cursor primitives translated for other harnesses.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 355,
      "added_stars": 3026,
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
      "author": "Vincentwei1021",
      "repo": "video-shotcraft",
      "avatar": "https://github.com/Vincentwei1021.png",
      "repo_link": "https://github.com/Vincentwei1021/video-shotcraft",
      "desc": "AI video skill for Claude Code & Codex — cinematic, editable product promos with Remotion: 124 shot recipe cards, 150 motion previews, beat sync, sound design, Motion Workbench & JianYing (CapCut CN) export.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1578,
      "added_stars": 6322,
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
      "forks": 3290,
      "added_stars": 5032,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5806,
      "added_stars": 8905,
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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1584,
      "added_stars": 5693,
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
      "author": "supabase",
      "repo": "supabase",
      "avatar": "https://github.com/supabase.png",
      "repo_link": "https://github.com/supabase/supabase",
      "desc": "The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 15775,
      "added_stars": 3777,
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
      "author": "anthropics",
      "repo": "sandbox-runtime",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/sandbox-runtime",
      "desc": "A lightweight sandboxing tool for enforcing filesystem and network restrictions on arbitrary processes at the OS level, without requiring a container.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 620,
      "added_stars": 1535,
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
      "forks": 9484,
      "added_stars": 7399,
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
      "author": "mvschwarz",
      "repo": "openrig",
      "avatar": "https://github.com/mvschwarz.png",
      "repo_link": "https://github.com/mvschwarz/openrig",
      "desc": "Build your own network of agents from Claude Code, Codex and Pi: persistent teams with roles, shared context and owned work.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 713,
      "added_stars": 4045,
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
      "author": "chthollyphile",
      "repo": "folia-major",
      "avatar": "https://github.com/chthollyphile.png",
      "repo_link": "https://github.com/chthollyphile/folia-major",
      "desc": "专注于绚丽的歌词动画效果的本地音乐/navidrome/第三方多平台在线音乐播放器 A multi-platform music player for local files, Navidrome, and online streaming services, featuring stunning animated lyrics.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1274,
      "added_stars": 8273,
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
      "forks": 7778,
      "added_stars": 4288,
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
      "author": "LibreSpark",
      "repo": "LibreTV",
      "avatar": "https://github.com/LibreSpark.png",
      "repo_link": "https://github.com/LibreSpark/LibreTV",
      "desc": "一分钟搭建影视站，支持Docker等部署方式",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 30694,
      "added_stars": 9650,
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
      "author": "Renhuai123",
      "repo": "ziwei-doushu",
      "avatar": "https://github.com/Renhuai123.png",
      "repo_link": "https://github.com/Renhuai123/ziwei-doushu",
      "desc": "紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2956,
      "added_stars": 10593,
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
      "author": "makecindy",
      "repo": "cindy",
      "avatar": "https://github.com/makecindy.png",
      "repo_link": "https://github.com/makecindy/cindy",
      "desc": "Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1118,
      "added_stars": 6341,
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
      "title": "Let's see where you code!",
      "description": "I’ve been writing a lot about AWS lately, so let’s take a breather. This is my little corner of the...",
      "url": "https://dev.to/maame-codes/lets-see-where-you-code-147",
      "tags": "watercooler, discuss",
      "reactions": 54,
      "comments": 10,
      "reading_time": 2,
      "author": "maame-codes"
    },
    {
      "title": "Gemma 4 in Rust on TorchTPU: A Native TPU Rig With PyO3 and MCP",
      "description": "Gemma 4 E2B with the model in Rust, served from a TPU v5e-1 VM through PyO3 and a C++ shim over ATen, with no tch and no pinned PyTorch, an OpenAI endpoint, an MCP server and a local chat UI.",
      "url": "https://dev.to/gde/gemma-4-in-rust-on-torchtpu-a-native-tpu-rig-with-pyo3-and-mcp-47j1",
      "tags": "rust, pytorch, tpu, mcp",
      "reactions": 13,
      "comments": 1,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Prompt Pad: Lock Your AI's Output Schema in Google AI Studio",
      "description": "If you've ever tried to parse an LLM response in code, you know the pain: the format changes slightly...",
      "url": "https://blog.mlh.com/prompt-pad-lock-your-ais-output-schema-in-google-ai-studio-53io",
      "tags": "ai, gemini, promptengineering, tutorial",
      "reactions": 11,
      "comments": 1,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "Prompt Pad: Frame Your Persona for Better AI Answers",
      "description": "Want better answers from AI? Start by telling it who to be.  In this episode of Prompt Pad,...",
      "url": "https://blog.mlh.com/prompt-pad-frame-your-persona-for-better-ai-answers-eg3",
      "tags": "ai, promptengineering, llm, beginners",
      "reactions": 18,
      "comments": 0,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-cio",
      "tags": "top7, discuss",
      "reactions": 18,
      "comments": 11,
      "reading_time": 3,
      "author": "heyitsjem"
    },
    {
      "title": "Gemma 4 in Rust on TorchTPU: Hands On With Colab",
      "description": "A Rust crate reads the checkpoint, runs all 35 layers of Gemma 4 E2B and drives the decode loop on one TPU v5e chip in Colab, with every operation a TorchTPU kernel and the same tokens as compiled Python.",
      "url": "https://dev.to/gde/gemma-4-in-rust-on-torchtpu-hands-on-with-colab-44hi",
      "tags": "rust, pytorch, tpu, gemma",
      "reactions": 8,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "[Agent Platform in Action (7)] When ADK Go Graph Workflow Meets Google Research Harness (Part 1): Two-Layer Recursive Agent Fram",
      "description": "Foreword: After the AI Agent Goes Online, What is the Next Bottleneck?   Welcome back to...",
      "url": "https://dev.to/gde/agent-platform-in-action-7-when-adk-go-graph-workflow-meets-google-research-harness-part-1-28c1",
      "tags": "agents, ai, architecture, go",
      "reactions": 7,
      "comments": 0,
      "reading_time": 12,
      "author": "evanlin"
    },
    {
      "title": "Profile Sprawl: Solving a Problem You Didn't Know You Had",
      "description": "Every public profile you own says something slightly different about you. A step by step guide to treating your bio as source code, with one file, one tracker and an agent skill that checks the live sites.",
      "url": "https://dev.to/gde/profile-sprawl-solving-a-problem-you-didnt-know-you-had-19k5",
      "tags": "ai, devtools, productivity, opensource",
      "reactions": 9,
      "comments": 0,
      "reading_time": 7,
      "author": "xbill"
    },
    {
      "title": "From `main.js` Leaks to Hidden Tailwind CSS v4 Bloat — How I Built `angular-bundle-guard` with Antigravity `/learn` [GDE]",
      "description": "Day 33: From main.js Leaks to Hidden Tailwind CSS v4 Bloat — How I Built...",
      "url": "https://dev.to/gde/from-mainjs-leaks-to-hidden-tailwind-css-v4-bloat-how-i-built-angular-bundle-guard-with-geg",
      "tags": "angular, antigravity, gemini, performance",
      "reactions": 6,
      "comments": 0,
      "reading_time": 13,
      "author": "railsstudent"
    },
    {
      "title": "Securing an Angular Firebase AI App with Email/Password Authentication (Part 1: Emulator, AuthService, and Route Guard) [GDE]",
      "description": "Anyone with the public URL can use my tokens to perform image analysis and text-to-speech, which can...",
      "url": "https://dev.to/gde/securing-an-angular-firebase-ai-app-with-emailpassword-authentication-part-1-emulator-4jm",
      "tags": "angular, firebase, webdev",
      "reactions": 7,
      "comments": 9,
      "reading_time": 7,
      "author": "railsstudent"
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
      "title": "Codex Was Torching Your SSD and Nobody Noticed for Months",
      "description": "Your Codex log file looked fine. Your SSD counters did not.   The file was small.  That was...",
      "url": "https://dev.to/varshithvhegde/codex-was-torching-your-ssd-and-nobody-noticed-for-months-4c5h",
      "tags": "codex, security, devops, productivity",
      "reactions": 15,
      "comments": 14,
      "reading_time": 10,
      "author": "varshithvhegde"
    },
    {
      "title": "Are You a Python Developer or a Python Expert? 8 Tests I Failed Hijacking Win+Shift+S in One 7,600-Line File",
      "description": "Most Python developers can parse a CSV, write a decorator and pip install their way out of a...",
      "url": "https://dev.to/akhourianmolkumar/are-you-a-python-developer-or-a-python-expert-8-tests-i-failed-hijacking-winshifts-in-one-30dg",
      "tags": "python, programming, tutorial, productivity",
      "reactions": 12,
      "comments": 8,
      "reading_time": 10,
      "author": "akhourianmolkumar"
    },
    {
      "title": "Google Sheets is my favourite free backend",
      "description": "I made a small game for my daughter. It's called Počítadlo (\"counter\" in Czech), and it's a simple...",
      "url": "https://dev.to/pavel_polivka/google-sheets-is-my-favourite-free-backend-4no5",
      "tags": "javascript, webdev, beginners, productivity",
      "reactions": 2,
      "comments": 1,
      "reading_time": 5,
      "author": "pavel_polivka"
    },
    {
      "title": "GPT Image 2.5: the quality knob is the expensive one, not 4K",
      "description": "I assumed 4K was the expensive thing.  Then I read the price matrix properly: at 1K, max quality is...",
      "url": "https://dev.to/chet103cc/gpt-image-25-the-quality-knob-is-the-expensive-one-not-4k-3b0o",
      "tags": "openai, api, ai, productivity",
      "reactions": 60,
      "comments": 4,
      "reading_time": 4,
      "author": "chet103cc"
    },
    {
      "title": "I was offered 292 AI skills. I installed 21.",
      "description": "Halfway through building ParkEase, I found a popular open-source pack for Claude Code: 292 skills, 68...",
      "url": "https://dev.to/rakno/i-was-offered-292-ai-skills-i-installed-21-44kf",
      "tags": "ai, programming, productivity, devtools",
      "reactions": 0,
      "comments": 0,
      "reading_time": 2,
      "author": "rakno"
    },
    {
      "title": "Introducing Still — A Commitment System, Not Another Productivity App",
      "description": "Most productivity tools help you manage your time.  But what happens when you have enough time and...",
      "url": "https://dev.to/pjdeveloper896/introducing-still-a-commitment-system-not-another-productivity-app-1eck",
      "tags": "webdev, productivity, react, programming",
      "reactions": 3,
      "comments": 0,
      "reading_time": 1,
      "author": "pjdeveloper896"
    },
    {
      "title": "Stop being your AI's eyes and hands: pwa-debug lets Claude debug your live, logged-in browser",
      "description": "If you've debugged a web app with an AI assistant, you know the loop:   The AI asks what the console...",
      "url": "https://dev.to/aryanduntley/stop-being-your-ais-eyes-and-hands-pwa-debug-lets-claude-debug-your-live-logged-in-browser-4hc9",
      "tags": "pwa, webdev, ai, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "aryanduntley"
    },
    {
      "title": "Human in the loop by design: where the approval step goes",
      "description": "Where to put the human approval step in an AI workflow, who should own it, and what to log so you can trust the result.",
      "url": "https://dev.to/ahmedvaseer/human-in-the-loop-by-design-where-the-approval-step-goes-13o4",
      "tags": "ai, business, productivity, architecture",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "ahmedvaseer"
    },
    {
      "title": "A 9B assistant built from our specs went from 6 to 32 right answers out of 32. Most of the fixes were code, not prompts",
      "description": "A personal assistant is easy to demo and hard to trust. The demo ends when the assistant answers....",
      "url": "https://dev.to/weekendaiprojects/a-9b-assistant-built-from-our-specs-went-from-6-to-32-right-answers-out-of-32-most-of-the-fixes-49a7",
      "tags": "ai, python, llm, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "weekendaiprojects"
    },
    {
      "title": "The Wrong Model for the Job Is Quietly Eating Your AI Budget",
      "description": "The Wrong Model for the Job Is Quietly Eating Your AI Budget   Here is a habit almost every...",
      "url": "https://dev.to/mohsinakram91/the-wrong-model-for-the-job-is-quietly-eating-your-ai-budget-2gpc",
      "tags": "ai, llm, productivity, programming",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "mohsinakram91"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

