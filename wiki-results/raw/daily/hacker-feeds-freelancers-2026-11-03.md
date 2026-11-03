# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-11-03 06:25:33 UTC

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
      "forks": 3749,
      "added_stars": 9155,
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
      "forks": 7337,
      "added_stars": 5729,
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
      "forks": 43779,
      "added_stars": 6201,
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
      "forks": 3794,
      "added_stars": 6560,
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
      "author": "citrolabs",
      "repo": "ego-lite",
      "avatar": "https://github.com/citrolabs.png",
      "repo_link": "https://github.com/citrolabs/ego-lite",
      "desc": "The fastest browser for AI agents to run browser automation, built for sharing your logged-in browser state with your AI agents, like Codex or Claude Code, without disturbing you. Zero cost, zero config.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1203,
      "added_stars": 1666,
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
      "forks": 2685,
      "added_stars": 8382,
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
      "forks": 8542,
      "added_stars": 1405,
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
      "author": "techjarves",
      "repo": "Portable-Local-Studio",
      "avatar": "https://github.com/techjarves.png",
      "repo_link": "https://github.com/techjarves/Portable-Local-Studio",
      "desc": "Portable local AI studio for Windows, Linux, and macOS. Zero-setup GUI for Image Generation, GGUF LLMs, Text to Speech & Speech to Text",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 446,
      "added_stars": 229,
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
      "author": "github",
      "repo": "awesome-copilot",
      "avatar": "https://github.com/github.png",
      "repo_link": "https://github.com/github/awesome-copilot",
      "desc": "Community-contributed instructions, agents, skills, and configurations to help you make the most of GitHub Copilot.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5273,
      "added_stars": 326,
      "builtBy": [
        {
          "username": "aaronpowell",
          "href": "https://github.com/aaronpowell",
          "avatar": "https://avatars.githubusercontent.com/u/434140"
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
      "forks": 432,
      "added_stars": 1995,
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
      "author": "juliangarnier",
      "repo": "anime",
      "avatar": "https://github.com/juliangarnier.png",
      "repo_link": "https://github.com/juliangarnier/anime",
      "desc": "JavaScript animation engine",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 5049,
      "added_stars": 366,
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
      "author": "DavidHDev",
      "repo": "react-bits",
      "avatar": "https://github.com/DavidHDev.png",
      "repo_link": "https://github.com/DavidHDev/react-bits",
      "desc": "The largest open-source library of animated, interactive, and customizable React & Next.js components for building standout web products and experiences. Built for humans and AI agents.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2548,
      "added_stars": 823,
      "builtBy": [
        {
          "username": "DavidHDev",
          "href": "https://github.com/DavidHDev",
          "avatar": "https://avatars.githubusercontent.com/u/48634587"
        },
        {
          "username": "EnderRomantice",
          "href": "https://github.com/EnderRomantice",
          "avatar": "https://avatars.githubusercontent.com/u/176131572"
        },
        {
          "username": "PedroMarianoAlmeida",
          "href": "https://github.com/PedroMarianoAlmeida",
          "avatar": "https://avatars.githubusercontent.com/u/59484474"
        },
        {
          "username": "joyalgeorgekj",
          "href": "https://github.com/joyalgeorgekj",
          "avatar": "https://avatars.githubusercontent.com/u/144530321"
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
      "by": "dbreunig",
      "descendants": 737,
      "id": 50341174,
      "kids": [
        50347685,
        50341841,
        50343529,
        50342657,
        50343628,
        50342153,
        50344881,
        50342071,
        50342074,
        50345802,
        50343264,
        50345867,
        50343034,
        50343394,
        50348278,
        50348643,
        50343731,
        50342301,
        50347587,
        50342040,
        50342336,
        50347251,
        50348201,
        50341840,
        50344516,
        50341912,
        50345519,
        50345110,
        50348213,
        50342299,
        50348544,
        50347958,
        50348695,
        50342413,
        50343110,
        50341914,
        50343443,
        50344366,
        50343147,
        50348164,
        50342400,
        50342651,
        50346388,
        50345458,
        50344997,
        50343747,
        50341898,
        50345731,
        50342061,
        50343177,
        50341809,
        50341883,
        50347703,
        50342485,
        50348057,
        50342257,
        50343875,
        50344062,
        50347180,
        50342768,
        50342988,
        50341896,
        50344238,
        50347450,
        50344303,
        50342066,
        50344996,
        50346672,
        50345278,
        50347682,
        50347712,
        50346802,
        50343150,
        50345063,
        50346136,
        50344286,
        50342894,
        50342145,
        50342682,
        50343221,
        50343007,
        50344734,
        50347788,
        50347741,
        50345949,
        50345831,
        50345098,
        50346999,
        50343055,
        50344664,
        50342534,
        50342242,
        50342577,
        50345194,
        50344583,
        50343829,
        50343070,
        50346914,
        50342375,
        50343342,
        50347222,
        50346365,
        50343488,
        50346707,
        50345940,
        50345113,
        50342762,
        50344587,
        50345045,
        50346280,
        50345062,
        50342853,
        50347169,
        50343737,
        50343783,
        50342353,
        50344792,
        50348234,
        50342023,
        50346211,
        50343463,
        50344009,
        50341993,
        50344429,
        50343523,
        50346678,
        50344702,
        50344897,
        50342044,
        50342936,
        50345221,
        50342616,
        50342017,
        50342386,
        50345339,
        50342490,
        50343823,
        50344862,
        50341970,
        50343478,
        50345827,
        50345303,
        50343578,
        50345811,
        50342959,
        50347010,
        50342488,
        50345288,
        50343871,
        50342447,
        50347279,
        50343213,
        50342693,
        50345922,
        50347395,
        50342461,
        50344318,
        50344330,
        50342120,
        50342130,
        50341859,
        50342479,
        50344796,
        50344237,
        50342204,
        50341926,
        50342558,
        50342122,
        50342606,
        50341906,
        50341991,
        50343041,
        50343285,
        50347202,
        50342289,
        50342049,
        50342215,
        50342960,
        50342586,
        50342063,
        50341905,
        50342067,
        50346285,
        50343738,
        50342121,
        50345742,
        50343237,
        50343208,
        50344016,
        50341807,
        50344692,
        50342958,
        50344406,
        50341867,
        50342615,
        50343138,
        50342085,
        50344521,
        50344394,
        50343188,
        50342217,
        50342446,
        50346722,
        50346266,
        50343273,
        50345080,
        50342671,
        50341877,
        50342975,
        50342362,
        50342944,
        50345535,
        50343459,
        50345766,
        50342560,
        50341862,
        50343627,
        50342709,
        50344530,
        50341872,
        50344317,
        50343916,
        50344003,
        50343892,
        50346325,
        50343666,
        50343039,
        50342952,
        50342205,
        50342842,
        50342751,
        50342623,
        50342468,
        50342292,
        50342228,
        50342094,
        50341918,
        50341823,
        50342193,
        50342197,
        50343205,
        50342506,
        50344715,
        50343320,
        50343148,
        50344457,
        50344826,
        50344221,
        50342043,
        50342570,
        50343339,
        50342780,
        50343198,
        50344074,
        50343253,
        50348655,
        50347813,
        50347716,
        50348313,
        50343837,
        50348083,
        50347030,
        50344387,
        50345512,
        50342030,
        50344091,
        50344242,
        50345487
      ],
      "score": 2342,
      "time": 1793643688,
      "title": "Astra can read and write weights to improve Qwen",
      "type": "story",
      "url": "https://rikiyat.github.io/blog/weight-space-programming/"
    },
    {
      "by": "polpenn",
      "descendants": 52,
      "id": 50346981,
      "kids": [
        50348084,
        50347818,
        50347933,
        50347483,
        50347461,
        50348451,
        50347626,
        50347177,
        50347397,
        50347339,
        50347166,
        50347807,
        50348319,
        50347281,
        50348148,
        50347331,
        50347580,
        50347377,
        50348495,
        50347498,
        50347599,
        50347695,
        50347282,
        50348674,
        50348362,
        50347948,
        50347189
      ],
      "score": 158,
      "text": "I thought it would be fun to browse HN as if it were a newspaper. The site updates once an hour. Enjoy!",
      "time": 1793670814,
      "title": "Show HN: Hacker Times, a New York Times-inspired version of Hacker News",
      "type": "story",
      "url": "https://hackertimes.ca/"
    },
    {
      "by": "bpierre",
      "descendants": 26,
      "id": 50346849,
      "kids": [
        50347035,
        50347612,
        50347855,
        50347258,
        50347472,
        50347236,
        50348090,
        50347865,
        50347231,
        50347230,
        50347462
      ],
      "score": 118,
      "time": 1793669623,
      "title": "DiscImageStudio: burn visible artwork onto CDs, DVDs and Blu-ray discs",
      "type": "story",
      "url": "https://github.com/JiaFeiMiao-K-Cat/DiscImageStudio"
    },
    {
      "by": "ymz5",
      "descendants": 7,
      "id": 50334523,
      "kids": [
        50348207
      ],
      "score": 33,
      "time": 1793609913,
      "title": "European RISC-V Industrial Computing Initiative",
      "type": "story",
      "url": "https://erici.eu"
    },
    {
      "by": "makeramen",
      "descendants": 66,
      "id": 50345924,
      "kids": [
        50348485,
        50347625,
        50347475,
        50347773,
        50348177,
        50348128,
        50347832,
        50347798,
        50347422,
        50348187,
        50347709,
        50347469
      ],
      "score": 155,
      "time": 1793663276,
      "title": "Scaling Git at OpenAI",
      "type": "story",
      "url": "https://openai.com/index/scaling-git-at-openai/"
    },
    {
      "by": "aarushyadav",
      "descendants": 324,
      "id": 50340088,
      "kids": [
        50341512,
        50341600,
        50340809,
        50343504,
        50342704,
        50341464,
        50348585,
        50347050,
        50342985,
        50345498,
        50340741,
        50340811,
        50342003,
        50343860,
        50341554,
        50340390,
        50345332,
        50348336,
        50341083,
        50341091,
        50343020,
        50346752,
        50345137,
        50343644,
        50340712,
        50341688,
        50340489,
        50341108,
        50341204,
        50340356,
        50340433,
        50347735,
        50342860,
        50344037,
        50347337,
        50340875,
        50346051,
        50343280,
        50340545,
        50345178,
        50346787,
        50347753,
        50344732,
        50341965,
        50340604,
        50341407,
        50340943,
        50344589,
        50340360,
        50346412,
        50346331,
        50343643,
        50342872,
        50346491,
        50341107,
        50342194,
        50342258,
        50346926,
        50340365,
        50340459,
        50340800,
        50340516,
        50344821,
        50343632,
        50341102,
        50345419,
        50343982,
        50344132,
        50341640,
        50346157,
        50341853,
        50340924,
        50340464,
        50342266,
        50346253,
        50343283,
        50345611,
        50342077,
        50342214,
        50340706,
        50341248,
        50341244,
        50340984,
        50341413,
        50344485,
        50341258,
        50340949,
        50344223,
        50344953,
        50341929,
        50340646,
        50340999,
        50344540,
        50346025,
        50343351,
        50345049,
        50346199,
        50340370,
        50340832,
        50341500,
        50341669,
        50341852,
        50341325,
        50343487,
        50343978,
        50340729,
        50343182,
        50341449,
        50341031,
        50341998,
        50341944,
        50341813,
        50341024,
        50344279,
        50341480,
        50341990,
        50340887,
        50340372,
        50348665,
        50346729,
        50340848,
        50343828,
        50341590,
        50340650,
        50341555,
        50340967,
        50341553,
        50340813,
        50340089,
        50340339,
        50342045
      ],
      "score": 631,
      "text": "Hi HN, we&#x27;re Aarush and Arnav from The Subvocal Company (YC F26) (<a href=\"https:&#x2F;&#x2F;subvocal.company&#x2F;\">https:&#x2F;&#x2F;subvocal.company&#x2F;</a>). We’re building smart glasses that let you talk to your computer without talking out loud. You can mouth words silently and discreetly and the glasses decode them to text at the speed of speech.<p>Here&#x27;s a video of Dave from YC trying it out: <a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=9QdX1eObVYI\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=9QdX1eObVYI</a><p>(Edit: you don&#x27;t actually have to move your lips or even open your mouth for this to work! Since the RF can see inside your mouth the system can be fine tuned on &quot;internal speech&quot;. This isn&#x27;t the automatic tongue movements that occur when &quot;thinking&quot; words to yourself, but more like mouthing with your lips closed. It&#x27;s a bit weird to do, but with practice, we have been able to get it down pretty well.)<p>Arnav and I were studying CS at Georgia Tech at the beginning of the year, with no experience in silent speech or sensing. We were both AI-native builders and power users of Wispr Flow. What bugged us was not being able to use these tools in the library (or an office) or in public. At Stanford’s TreeHacks in February, we decided to build the most technically ridiculous thing we could think of. We’d read about AlterEgo, a silent speech system out of MIT’s Media Lab, and wanted to recreate it in 36 hours. We built a crude prototype, sticking EMG electrodes onto my face:<p><a href=\"https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1mwhv5HZMz3UTevdrgwS5O7g2jWV0K9r2&#x2F;view?usp=sharing\" rel=\"nofollow\">https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1mwhv5HZMz3UTevdrgwS5O7g2jWV...</a><p>We got it to kind of work at a letter level in a very janky way. It wasn’t good enough to win the hackathon, but convinced us to go all in. The first time I typed a sentence without anyone noticing, I felt the magic of the technology.<p>We quickly realized EMG (reading muscle electrical signals) wouldn’t work:<p>- Signal changes due to sweat<p>- Electrical interference<p>- Placement variability<p>- Most importantly, no one wants to stick electrodes onto their face!!<p>So we switched to RF and built the glasses you see now. They emit radio waves, similar to Bluetooth, that pass through your face. As they cross the tongue, lips and soft palate, they’re modulated by silent mouthing. We train foundation models on this data to decode these perturbations to text.<p>Despite prior academic research, getting this to work was a huge engineering challenge. First we built an extremely low noise RF sensing stack. Then we had to place antennas so their fields overlapped maximally with the articulators. Our first attempt on glasses failed completely, so we reverted to old habits and taped antennas on our face:<p><a href=\"https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1ks0dS0eZiTV9EqSFsyB_w5BBjpcBAfX-&#x2F;view?usp=sharing\" rel=\"nofollow\">https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1ks0dS0eZiTV9EqSFsyB_w5BBjpc...</a><p>Since taping antennas consistently in the same spot and angle was hard, we created this weird but effective head rig to hold them in place:<p><a href=\"https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1rhzNFpdDzr7oHk0isFY70dkoV4CAF1pT&#x2F;view?usp=sharing\" rel=\"nofollow\">https:&#x2F;&#x2F;drive.google.com&#x2F;file&#x2F;d&#x2F;1rhzNFpdDzr7oHk0isFY70dkoV4C...</a><p>This worked, but obviously wasn’t a product yet. So we worked deep in simulations to design glasses that could hold the antennas.<p>That evolved into our design now, with antennas embedded within the frames. Once we established there was a signal, the next hurdle was cross-user generalization. Everyone’s facial anatomy, and hence RF signal patterns, are vastly different. We tried algorithmic workarounds but realized the only lever was to massively scale pretraining data.<p>So that’s what we did. We set up booths in our office and paid people to read prompts wearing our glasses, to pretrain our models on. This produced a beautiful scaling curve, with errors falling quickly as we scaled our dataset and cross-user performance becoming genuinely compelling (as you see in the video above; Dave only had a short 20-sentence calibration).<p>We always heard about building things from first principles but never understood it before this. We tried tackling it top down but completely failed. Only when we broke each component (the antenna, electronics, ML) down to its fundamentals to understand and optimize it did we get it to work really well.<p>Over the next few months we’re continuing R&amp;D to turn our prototype glasses into the slick product on our website and ship in Q1 2027. We’re also scaling up our dataset to improve performance on edge cases.<p>For anyone who loves voice dictation but hates using it around people, we’ve opened preorders for our first batch of 500 units, with a $200 discount off the final price. Allocation is running out quickly, so get yours at <a href=\"https:&#x2F;&#x2F;subvocal.co&#x2F;preorder\" rel=\"nofollow\">https:&#x2F;&#x2F;subvocal.co&#x2F;preorder</a>!",
      "time": 1793639777,
      "title": "Show HN: Subvocal – Talk to your computer without making noise",
      "type": "story"
    },
    {
      "by": "xoobdev",
      "descendants": 343,
      "id": 50339397,
      "kids": [
        50340523,
        50340940,
        50340621,
        50341092,
        50340874,
        50348080,
        50346933,
        50340517,
        50345030,
        50348474,
        50341025,
        50340831,
        50347804,
        50343709,
        50346363,
        50341438,
        50342627,
        50342209,
        50343544,
        50343252,
        50343243,
        50342500,
        50341273,
        50344209,
        50341138,
        50342156,
        50347391,
        50341763,
        50341014,
        50342983,
        50342355,
        50345152,
        50341203,
        50343181,
        50342981,
        50341349,
        50346124,
        50342378,
        50344248,
        50341012,
        50344198,
        50343710,
        50342745,
        50341660,
        50340566,
        50340842,
        50340470,
        50347001,
        50346973,
        50341055,
        50340719,
        50344174,
        50345547,
        50341399,
        50340906,
        50340408,
        50345577,
        50340424,
        50342039,
        50341021
      ],
      "score": 343,
      "time": 1793637276,
      "title": "US boy names that became girl names and vice versa",
      "type": "story",
      "url": "https://namedaisy.com/blog/boy-names-that-became-girl-names"
    },
    {
      "by": "knlb",
      "descendants": 27,
      "id": 50323123,
      "kids": [
        50348734,
        50348146,
        50348673,
        50335691,
        50348503,
        50347736,
        50347991,
        50348254,
        50347745,
        50347953
      ],
      "score": 71,
      "time": 1793513610,
      "title": "Resisting Cognitive Surrender",
      "type": "story",
      "url": "https://knlb.dev/essays/surrender"
    },
    {
      "by": "ingve",
      "descendants": 103,
      "id": 50336518,
      "kids": [
        50338928,
        50339351,
        50348656,
        50343664,
        50339917,
        50348428,
        50347401,
        50345156,
        50339250,
        50339928,
        50341644,
        50339142,
        50343032,
        50344202,
        50343107,
        50345961,
        50343131,
        50345964,
        50342873,
        50339591,
        50344281,
        50344316,
        50346372,
        50346193,
        50339385,
        50342934,
        50347623,
        50342180,
        50342047,
        50347205,
        50344531,
        50339721,
        50342727,
        50339353,
        50339926,
        50345139,
        50339215,
        50346336,
        50347017,
        50339227,
        50346092,
        50339954,
        50339480,
        50342676,
        50340326,
        50340290,
        50339929,
        50340006,
        50339707,
        50339234,
        50339831,
        50343011,
        50348727,
        50347044,
        50347284,
        50340034,
        50339771,
        50339989,
        50344848
      ],
      "score": 476,
      "time": 1793625935,
      "title": "If you love a website, back it up",
      "type": "story",
      "url": "https://blog.mistys-internet.website/post/2026/10/29/if-you-love-a-website-back-it-up/"
    },
    {
      "by": "teleforce",
      "descendants": 0,
      "id": 50347464,
      "score": 16,
      "time": 1793674724,
      "title": "Open-Source 5G Ran Platforms: A Dual Perspective on Performance and Capabilities",
      "type": "story",
      "url": "https://arxiv.org/abs/2608.25820"
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
      "title": "Jailbreaking my car's navigation system just so I can change the time",
      "url": "https://blog.nns.ee/2026/11/02/renault-hack/",
      "score": 90,
      "comments": 4,
      "tags": [
        "linux",
        "reversing",
        "security"
      ],
      "id": "qvdatp"
    },
    {
      "title": "A Decade of Kill Bugs",
      "url": "https://alangrow.com/blog/a-decade-of-kill-bugs",
      "score": 35,
      "comments": 4,
      "tags": [
        "historical",
        "linux",
        "unix"
      ],
      "id": "wgoato"
    },
    {
      "title": "Stop Hardcoding Your Timeouts",
      "url": "https://alfy.blog/2026/04/23/stop-hardcoding-your-timeouts.html",
      "score": 35,
      "comments": 3,
      "tags": [
        "a11y",
        "practices"
      ],
      "id": "qa0owz"
    },
    {
      "title": "This background sound leaks your exact location",
      "url": "https://youtu.be/UytYrhYLOKI",
      "score": 24,
      "comments": 4,
      "tags": [
        "math",
        "security",
        "video"
      ],
      "id": "s1btqo"
    },
    {
      "title": "My favourite laptop",
      "url": "https://blog.jsbarretto.com/post/laptop",
      "score": 22,
      "comments": 6,
      "tags": [
        "hardware"
      ],
      "id": "ezg5mx"
    },
    {
      "title": "Why did you choose the nix you nix?",
      "url": "",
      "score": 5,
      "comments": 5,
      "tags": [
        "ask",
        "nix"
      ],
      "id": "7fcuxz"
    },
    {
      "title": "An outsider's perspective on Scion and Mononoke",
      "url": "https://typesanitizer.com/blog/scion.html",
      "score": 143,
      "comments": 20,
      "tags": [
        "vcs"
      ],
      "id": "s2qeww"
    },
    {
      "title": "Polyend releases the Tracker firmware source code",
      "url": "https://backstage.polyend.com/t/tracker-the-biggest-update-yet/25120",
      "score": 25,
      "comments": 6,
      "tags": [
        "art",
        "release"
      ],
      "id": "gu6yyl"
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
      "forks": 11017,
      "added_stars": 47605,
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
      "forks": 3819,
      "added_stars": 8614,
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
      "forks": 2389,
      "added_stars": 8535,
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
      "forks": 4778,
      "added_stars": 8715,
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
      "forks": 3408,
      "added_stars": 7808,
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
      "forks": 9652,
      "added_stars": 20448,
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
      "forks": 6657,
      "added_stars": 13841,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3360,
      "added_stars": 4586,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2075,
      "added_stars": 5007,
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
      "forks": 5230,
      "added_stars": 6998,
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
      "forks": 9963,
      "added_stars": 13104,
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
      "author": "wshobson",
      "repo": "agents",
      "avatar": "https://github.com/wshobson.png",
      "repo_link": "https://github.com/wshobson/agents",
      "desc": "Multi-harness agentic plugin marketplace for Claude Code, Codex, Cursor, OpenCode, GitHub Copilot, Google Antigravity, and Pi",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4454,
      "added_stars": 2074,
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
      "forks": 10288,
      "added_stars": 10117,
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
      "forks": 5699,
      "added_stars": 4889,
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
      "author": "ifixai-ai",
      "repo": "iFixAi",
      "avatar": "https://github.com/ifixai-ai.png",
      "repo_link": "https://github.com/ifixai-ai/iFixAi",
      "desc": "Independent Auditing of AI Agents. Run by human or the agent itself, to answer the most crucial question in the AI Agent Economy. Is the agent doing what is supposed to do? With iFixAi you can have this answer in less than 120 seconds.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1781,
      "added_stars": 27487,
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
      "author": "Kruk2",
      "repo": "jasna",
      "avatar": "https://github.com/Kruk2.png",
      "repo_link": "https://github.com/Kruk2/jasna",
      "desc": "Video restoration tool",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 353,
      "added_stars": 2463,
      "builtBy": [
        {
          "username": "Kruk2",
          "href": "https://github.com/Kruk2",
          "avatar": "https://avatars.githubusercontent.com/u/59397941"
        },
        {
          "username": "suphamster",
          "href": "https://github.com/suphamster",
          "avatar": "https://avatars.githubusercontent.com/u/17669188"
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
          "username": "helkaluin",
          "href": "https://github.com/helkaluin",
          "avatar": "https://avatars.githubusercontent.com/u/6428432"
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
      "forks": 105660,
      "added_stars": 422104,
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
      "author": "tester-army",
      "repo": "e2e",
      "avatar": "https://github.com/tester-army.png",
      "repo_link": "https://github.com/tester-army/e2e",
      "desc": "Next generation e2e testing framework for web and mobile apps.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 657,
      "added_stars": 11344,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7165,
      "added_stars": 22290,
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
      "forks": 313,
      "added_stars": 3213,
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
      "forks": 9680,
      "added_stars": 15681,
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
      "forks": 9133,
      "added_stars": 15731,
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
      "author": "michael-denyer",
      "repo": "pstack-claude",
      "avatar": "https://github.com/michael-denyer.png",
      "repo_link": "https://github.com/michael-denyer/pstack-claude",
      "desc": "Claude Code, Codex, Copilot, Pi, OpenCode, Muse, Gemini, and Prime Agent versions of Poteto's pstack. Rigorous agent workflows with Cursor primitives translated for other harnesses.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 348,
      "added_stars": 3018,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Free, local plugin that keeps tool output out of your coding agent's context window. Sandbox and SQLite FTS5 search, 99% fewer bytes in context. Works with Claude Code, Codex, Pi, OpenCode, Gemini CLI, Copilot CLI and 4 more agents. Zero telemetry.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2295,
      "added_stars": 8531,
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
      "forks": 6357,
      "added_stars": 16329,
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
      "author": "vercel-labs",
      "repo": "skills",
      "avatar": "https://github.com/vercel-labs.png",
      "repo_link": "https://github.com/vercel-labs/skills",
      "desc": "The open agent skills tool - npx skills",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3272,
      "added_stars": 4956,
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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1567,
      "added_stars": 5776,
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
      "forks": 15774,
      "added_stars": 3783,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5783,
      "added_stars": 8701,
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
      "author": "anthropics",
      "repo": "sandbox-runtime",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/sandbox-runtime",
      "desc": "A lightweight sandboxing tool for enforcing filesystem and network restrictions on arbitrary processes at the OS level, without requiring a container.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 616,
      "added_stars": 1519,
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
      "author": "mvschwarz",
      "repo": "openrig",
      "avatar": "https://github.com/mvschwarz.png",
      "repo_link": "https://github.com/mvschwarz/openrig",
      "desc": "Build your own network of agents from Claude Code, Codex and Pi: persistent teams with roles, shared context and owned work.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 709,
      "added_stars": 4470,
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
      "author": "ruvnet",
      "repo": "ruflo",
      "avatar": "https://github.com/ruvnet.png",
      "repo_link": "https://github.com/ruvnet/ruflo",
      "desc": "🌊 The original agent harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, and build conversational AI systems. Features adaptive memory, self-learning intelligence, federation, vector RAG integration, and native Claude Code / Codex / Hermes and many more Integrated",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9478,
      "added_stars": 7325,
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
      "author": "chthollyphile",
      "repo": "folia-major",
      "avatar": "https://github.com/chthollyphile.png",
      "repo_link": "https://github.com/chthollyphile/folia-major",
      "desc": "专注于绚丽的歌词动画效果的本地音乐/navidrome/第三方多平台在线音乐播放器",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1248,
      "added_stars": 8131,
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
      "author": "gitroomhq",
      "repo": "postiz-app",
      "avatar": "https://github.com/gitroomhq.png",
      "repo_link": "https://github.com/gitroomhq/postiz-app",
      "desc": "📨 The ultimate agentic social media scheduling tool 🤖",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7757,
      "added_stars": 4220,
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
      "forks": 30652,
      "added_stars": 9556,
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
      "forks": 1097,
      "added_stars": 6252,
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
      "author": "thesysdev",
      "repo": "openui",
      "avatar": "https://github.com/thesysdev.png",
      "repo_link": "https://github.com/thesysdev/openui",
      "desc": "The Open Standard for Generative UI",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 969,
      "added_stars": 4788,
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
      "title": "Gemma 4 in Rust on TorchTPU: A Native TPU Rig With PyO3 and MCP",
      "description": "Gemma 4 E2B with the model in Rust, served from a TPU v5e-1 VM through PyO3 and a C++ shim over ATen, with no tch and no pinned PyTorch, an OpenAI endpoint, an MCP server and a local chat UI.",
      "url": "https://dev.to/gde/gemma-4-in-rust-on-torchtpu-a-native-tpu-rig-with-pyo3-and-mcp-47j1",
      "tags": "rust, pytorch, tpu, mcp",
      "reactions": 7,
      "comments": 1,
      "reading_time": 11,
      "author": "xbill"
    },
    {
      "title": "Prompt Pad: Frame Your Persona for Better AI Answers",
      "description": "Want better answers from AI? Start by telling it who to be.  In this episode of Prompt Pad,...",
      "url": "https://blog.mlh.com/prompt-pad-frame-your-persona-for-better-ai-answers-eg3",
      "tags": "ai, promptengineering, llm, beginners",
      "reactions": 17,
      "comments": 0,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "Securing an Angular Firebase AI App with Email/Password Authentication (Part 1: Emulator, AuthService, and Route Guard) [GDE]",
      "description": "Anyone with the public URL can use my tokens to perform image analysis and text-to-speech, which can...",
      "url": "https://dev.to/gde/securing-an-angular-firebase-ai-app-with-emailpassword-authentication-part-1-emulator-4jm",
      "tags": "angular, firebase, webdev",
      "reactions": 7,
      "comments": 4,
      "reading_time": 7,
      "author": "railsstudent"
    },
    {
      "title": "Gemma 4 in Rust on TorchTPU: Hands On With Colab",
      "description": "A Rust crate reads the checkpoint, runs all 35 layers of Gemma 4 E2B and drives the decode loop on one TPU v5e chip in Colab, with every operation a TorchTPU kernel and the same tokens as compiled Python.",
      "url": "https://dev.to/gde/gemma-4-in-rust-on-torchtpu-hands-on-with-colab-44hi",
      "tags": "rust, pytorch, tpu, gemma",
      "reactions": 7,
      "comments": 0,
      "reading_time": 9,
      "author": "xbill"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-47ci",
      "tags": "weeklyretro",
      "reactions": 30,
      "comments": 31,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Singularity News :: CCG",
      "description": "This is a submission for the Hacktoberfest Open-Source AI Challenge Week 4: Ghost in the Machine    ...",
      "url": "https://dev.to/pengeszikra/singularity-news-ccg-5ejk",
      "tags": "devchallenge, hf26challenge, gamedev, showdev",
      "reactions": 42,
      "comments": 12,
      "reading_time": 4,
      "author": "pengeszikra"
    },
    {
      "title": "All That Glisters Is Softmax: Shiny-Object Interns, Airplane-Magazine Execs, and Why AI Labs Can Only Bake In Half the Scars",
      "description": "Why do an eager intern with a Hacker News blog post, a C-level executive stepping off an airplane with an in-flight magazine, and a trillion-parameter LLM all walk straight into the exact same production bog? And why even Google DeepMind can only bake half of our 600 scars into model weights.",
      "url": "https://dev.to/gde/all-that-glisters-is-softmax-shiny-object-interns-airplane-magazine-execs-and-why-ai-labs-can-18af",
      "tags": "ai, programming, architecture, machinelearning",
      "reactions": 14,
      "comments": 12,
      "reading_time": 29,
      "author": "randalschwartz"
    },
    {
      "title": "Your DEV posts have a beautiful new share card ✨",
      "description": "The image that shows up when you share a DEV post just got a brand-new look!  I got to work on...",
      "url": "https://dev.to/devteam/your-dev-posts-have-a-beautiful-new-share-card-4be8",
      "tags": "devto, showdev, opensource, design",
      "reactions": 167,
      "comments": 36,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "RackDoc DCIM v1.1: Background Multi-Protocol Heartbeat, 48-Port CAD Geometry, NOC Kiosk Mode & Decoupled Remote Connect",
      "description": "A deep dive into everything new in RackDoc DCIM v1.1: a 4-state background Heartbeat engine (Grey/Green/Orange/Red), independent Frontend SSH/HTTP/HTTPS launcher, 48-port switch CAD geometry, NOC Kiosk Mode, Rack Trays, and Active Directory RBAC.",
      "url": "https://dev.to/gde/rackdoc-dcim-v11-background-multi-protocol-heartbeat-48-port-cad-geometry-noc-kiosk-mode--2j7k",
      "tags": "dcim, flutter, fastapi, docker",
      "reactions": 7,
      "comments": 0,
      "reading_time": 6,
      "author": "marioezquerro"
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
      "reactions": 11,
      "comments": 9,
      "reading_time": 10,
      "author": "varshithvhegde"
    },
    {
      "title": "Butter Scraped Over Too Much Bread",
      "description": "Everyone I know is tired. Not \"I stayed up too late\" tired. The other kind. The kind where you open...",
      "url": "https://dev.to/aws-heroes/butter-scraped-over-too-much-bread-55jn",
      "tags": "culture, discuss, productivity",
      "reactions": 14,
      "comments": 2,
      "reading_time": 4,
      "author": "btarbox"
    },
    {
      "title": "I shipped my biggest project ever and felt… nothing",
      "description": "Last month I finished one of the largest side project of my career — an open-source framework, docs,...",
      "url": "https://dev.to/dhananjay_mundhada_02c326/i-shipped-my-biggest-project-ever-and-felt-nothing-585f",
      "tags": "discuss, ai, career, productivity",
      "reactions": 13,
      "comments": 17,
      "reading_time": 2,
      "author": "dhananjay_mundhada_02c326"
    },
    {
      "title": "Codex 0.164 Shipped /presets. Agent CLIs Are Converging, So Bet on Your Workflow",
      "description": "Codex 0.164 added /presets and inline /model. Claude Code shipped 10 releases in 9 days. The agent CLIs are converging; your workflow is what lasts.",
      "url": "https://dev.to/gabrielanhaia/codex-0164-shipped-presets-agent-clis-are-converging-so-bet-on-your-workflow-5869",
      "tags": "ai, claudecode, codex, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 7,
      "author": "gabrielanhaia"
    },
    {
      "title": "Nothing dropped on the floor: how every lesson, finding and shortcut got harvested",
      "description": "AI-assisted development produces a lot of exhaust. A reviewer flags something out of scope. A...",
      "url": "https://dev.to/rakno/nothing-dropped-on-the-floor-how-every-lesson-finding-and-shortcut-got-harvested-1o28",
      "tags": "ai, programming, productivity, devtools",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "rakno"
    },
    {
      "title": "Electron Performance Playbook: Diagnose Slow Startup and Fix Runtime Jank",
      "description": "Electron Performance Playbook: Diagnose Slow Startup and Fix Runtime Jank   TL;DR — Electron...",
      "url": "https://dev.to/mp3sss31/electron-performance-playbook-diagnose-slow-startup-and-fix-runtime-jank-5ao4",
      "tags": "productivity, electron, node, webdev",
      "reactions": 0,
      "comments": 1,
      "reading_time": 7,
      "author": "mp3sss31"
    },
    {
      "title": "Two databases, one question: how I built Eligible",
      "description": "A government benefits finder that answers one sentence, and shows its work.     Type this:   I am a...",
      "url": "https://dev.to/harishkotra/two-databases-one-question-how-i-built-eligible-2f4d",
      "tags": "ai, productivity, appwrite, dailybuild2026",
      "reactions": 0,
      "comments": 0,
      "reading_time": 10,
      "author": "harishkotra"
    },
    {
      "title": "Don't Run Floor-Plan Generation on the Request Thread",
      "description": "I'm Tomás Herrera. Day job is backend and infrastructure at ArchyBase — mostly the unglamorous path...",
      "url": "https://dev.to/linnn_charm_2e397112f3b51/dont-run-floor-plan-generation-on-the-request-thread-29ff",
      "tags": "backend, webdev, architecture, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "linnn_charm_2e397112f3b51"
    },
    {
      "title": "Spec-driven development with AI coding agents: what a spec has to do",
      "description": "Halfcycle is a module that runs a five-layer build method inside your own Claude Code or OpenAI Codex...",
      "url": "https://dev.to/halfcycle/spec-driven-development-with-ai-coding-agents-what-a-spec-has-to-do-294k",
      "tags": "ai, claudecode, productivity, softwareengineering",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "halfcycle"
    },
    {
      "title": "Chrome Extension Bad Reviews: What 400 One-Star Reviews Show",
      "description": "Why do Chrome extensions get bad reviews? Data from 400 one-star reviews shows the top causes and a checklist to prevent each one.",
      "url": "https://dev.to/extensionbooster/chrome-extension-bad-reviews-what-400-one-star-reviews-show-358a",
      "tags": "chrome, extensions, webdev, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "extensionbooster"
    }
  ]
}
- Fetching feeds...
{
  "source": "reddit",
  "topic": "freelance",
  "sort": "top",
  "items": [
    {
      "title": "How do you prevent scope creep when working with clients?",
      "url": "https://www.reddit.com/r/freelance/comments/1xlzz9p/how_do_you_prevent_scope_creep_when_working_with/",
      "permalink": "https://www.reddit.com/r/freelance/comments/1xlzz9p/how_do_you_prevent_scope_creep_when_working_with/",
      "author": "/u/Aurelionx_",
      "subreddit": "freelance",
      "score": null,
      "num_comments": null,
      "selftext": "A project can start with a clear list of deliverables, but additional requests sometimes appear as the work progresses. How do experienced freelancers handle this professionally? I&#39;m interested in practical approaches: Defining revisions before starting Documenting new requests Explaining additional costs Keeping communication clear without damaging the client relationship What process has worked best in your experience? &#32; submitted by &#32; /u/Aurelionx_ [link] &#32; [comments]",
      "published": "2026-11-02T15:19:25+00:00"
    }
  ]
}
```

