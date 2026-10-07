# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-10-07 06:41:57 UTC

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
      "forks": 817,
      "added_stars": 3318,
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
          "username": "sgoendoer",
          "href": "https://github.com/sgoendoer",
          "avatar": "https://avatars.githubusercontent.com/u/1579152"
        },
        {
          "username": "Space-Hermes",
          "href": "https://github.com/Space-Hermes",
          "avatar": "https://avatars.githubusercontent.com/u/290709289"
        }
      ]
    },
    {
      "author": "byoungd",
      "repo": "up",
      "avatar": "https://github.com/byoungd.png",
      "repo_link": "https://github.com/byoungd/up",
      "desc": "中英双语终身学习指南：英语学习、AI 协作、真实项目与成长证据。A bilingual guide to English learning and AI-era growth.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6709,
      "added_stars": 2154,
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
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4634,
      "added_stars": 5256,
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
      "author": "androoAGI",
      "repo": "starnet",
      "avatar": "https://github.com/androoAGI.png",
      "repo_link": "https://github.com/androoAGI/starnet",
      "desc": "A living pixel-art station where real AI agents do real work. Local-first desktop agent harness - bring your own key, watch your crew actually run.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 216,
      "added_stars": 400,
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
      "forks": 8434,
      "added_stars": 8909,
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
      "author": "Neet-Nestor",
      "repo": "Telegram-Media-Downloader",
      "avatar": "https://github.com/Neet-Nestor.png",
      "repo_link": "https://github.com/Neet-Nestor/Telegram-Media-Downloader",
      "desc": "A script allowing you to download images and videos from Telegram web even if the group restricts downloading.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 592,
      "added_stars": 397,
      "builtBy": [
        {
          "username": "Neet-Nestor",
          "href": "https://github.com/Neet-Nestor",
          "avatar": "https://avatars.githubusercontent.com/u/23090573"
        },
        {
          "username": "EuropaYou",
          "href": "https://github.com/EuropaYou",
          "avatar": "https://avatars.githubusercontent.com/u/53128780"
        },
        {
          "username": "hrukalive",
          "href": "https://github.com/hrukalive",
          "avatar": "https://avatars.githubusercontent.com/u/7337458"
        },
        {
          "username": "Flame239",
          "href": "https://github.com/Flame239",
          "avatar": "https://avatars.githubusercontent.com/u/32807896"
        },
        {
          "username": "Blueberryy",
          "href": "https://github.com/Blueberryy",
          "avatar": "https://avatars.githubusercontent.com/u/36592509"
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
      "forks": 990,
      "added_stars": 683,
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
      "author": "Leonxlnx",
      "repo": "taste-skill",
      "avatar": "https://github.com/Leonxlnx.png",
      "repo_link": "https://github.com/Leonxlnx/taste-skill",
      "desc": "Taste-Skill - gives your AI good taste. stops the AI from generating boring, generic slop",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6325,
      "added_stars": 2033,
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
      "author": "vercel",
      "repo": "next.js",
      "avatar": "https://github.com/vercel.png",
      "repo_link": "https://github.com/vercel/next.js",
      "desc": "The React Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 34140,
      "added_stars": 457,
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
      "author": "spicetify",
      "repo": "cli",
      "avatar": "https://github.com/spicetify.png",
      "repo_link": "https://github.com/spicetify/cli",
      "desc": "Command-line tool to customize Spotify client. Supports Windows, macOS, and Linux.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 958,
      "added_stars": 165,
      "builtBy": [
        {
          "username": "khanhas",
          "href": "https://github.com/khanhas",
          "avatar": "https://avatars.githubusercontent.com/u/26436809"
        },
        {
          "username": "rxri",
          "href": "https://github.com/rxri",
          "avatar": "https://avatars.githubusercontent.com/u/9348108"
        },
        {
          "username": "kyrie25",
          "href": "https://github.com/kyrie25",
          "avatar": "https://avatars.githubusercontent.com/u/77577746"
        },
        {
          "username": "SunsetTechuila",
          "href": "https://github.com/SunsetTechuila",
          "avatar": "https://avatars.githubusercontent.com/u/115353812"
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
      "forks": 7954,
      "added_stars": 1625,
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
      "author": "qist",
      "repo": "tvbox",
      "avatar": "https://github.com/qist.png",
      "repo_link": "https://github.com/qist/tvbox",
      "desc": "OK影视、tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 4169,
      "added_stars": 188,
      "builtBy": [
        {
          "username": "gaotianliuyun",
          "href": "https://github.com/gaotianliuyun",
          "avatar": "https://avatars.githubusercontent.com/u/58679624"
        },
        {
          "username": "qist",
          "href": "https://github.com/qist",
          "avatar": "https://avatars.githubusercontent.com/u/7844620"
        },
        {
          "username": "st7833232",
          "href": "https://github.com/st7833232",
          "avatar": "https://avatars.githubusercontent.com/u/46182664"
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
      "forks": 1221,
      "added_stars": 120,
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
    },
    {
      "author": "eolix",
      "repo": "photosuite",
      "avatar": "https://github.com/eolix.png",
      "repo_link": "https://github.com/eolix/photosuite",
      "desc": "A desktop image editor, faithful to classic Adobe Photoshop, with native PSD/PSB compatibility",
      "lang": "Rust",
      "languageColor": "#dea584",
      "stars": 0,
      "forks": 38,
      "added_stars": 555,
      "builtBy": [
        {
          "username": "eolix",
          "href": "https://github.com/eolix",
          "avatar": "https://avatars.githubusercontent.com/u/22733015"
        },
        {
          "username": "Alex9001",
          "href": "https://github.com/Alex9001",
          "avatar": "https://avatars.githubusercontent.com/u/2770710"
        },
        {
          "username": "christian-korneck",
          "href": "https://github.com/christian-korneck",
          "avatar": "https://avatars.githubusercontent.com/u/6320032"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "thisisparth187",
          "href": "https://github.com/thisisparth187",
          "avatar": "https://avatars.githubusercontent.com/u/140729488"
        }
      ]
    },
    {
      "author": "hexgrad",
      "repo": "kokoro",
      "avatar": "https://github.com/hexgrad.png",
      "repo_link": "https://github.com/hexgrad/kokoro",
      "desc": "https://hf.co/hexgrad/Kokoro-82M",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1013,
      "added_stars": 117,
      "builtBy": [
        {
          "username": "hexgrad",
          "href": "https://github.com/hexgrad",
          "avatar": "https://avatars.githubusercontent.com/u/166769057"
        },
        {
          "username": "xenova",
          "href": "https://github.com/xenova",
          "avatar": "https://avatars.githubusercontent.com/u/26504141"
        },
        {
          "username": "remsky",
          "href": "https://github.com/remsky",
          "avatar": "https://avatars.githubusercontent.com/u/25017870"
        },
        {
          "username": "ArEnSc",
          "href": "https://github.com/ArEnSc",
          "avatar": "https://avatars.githubusercontent.com/u/6252325"
        },
        {
          "username": "alesaccoia",
          "href": "https://github.com/alesaccoia",
          "avatar": "https://avatars.githubusercontent.com/u/1385023"
        }
      ]
    },
    {
      "author": "laoma528",
      "repo": "awesome-zhuiju-free",
      "avatar": "https://github.com/laoma528.png",
      "repo_link": "https://github.com/laoma528/awesome-zhuiju-free",
      "desc": "免费无广告的追剧资源指南，人工精选资源、每天检测资源有效性。收录在线影视、影视APP、网盘搜索、磁力BT、字幕、TVBox / 影视仓空壳软件/配置地址、IPTV直播源、会员拼团、影视相关开源项目。开源，社区共同维护。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 775,
      "added_stars": 797,
      "builtBy": [
        {
          "username": "laoma528",
          "href": "https://github.com/laoma528",
          "avatar": "https://avatars.githubusercontent.com/u/169715751"
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
      "forks": 261,
      "added_stars": 525,
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
      "by": "OfficialTurkey",
      "descendants": 673,
      "id": 49984923,
      "kids": [
        49987367,
        49988578,
        49985733,
        49989013,
        49985622,
        49985321,
        49987525,
        49986150,
        49986608,
        49985114,
        49989088,
        49985109,
        49985692,
        49985101,
        49985540,
        49985516,
        49985322,
        49985029,
        49985176,
        49985273,
        49985820,
        49985230,
        49985038,
        49985212,
        49985068,
        49985784,
        49985106,
        49986815,
        49986658,
        49988780,
        49986581,
        49987844,
        49987581,
        49986941,
        49985968,
        49985938,
        49988756,
        49986565,
        49986976,
        49987652,
        49986075,
        49988447,
        49988271,
        49985902,
        49986986,
        49988247,
        49987078,
        49985358,
        49986624,
        49985930,
        49987051,
        49985459,
        49987790,
        49986875,
        49985297,
        49985655,
        49986977,
        49987778,
        49985868,
        49987633,
        49987682,
        49985070,
        49986745,
        49987558,
        49985951,
        49986424,
        49985884,
        49985977,
        49985315,
        49984998,
        49985635,
        49987908,
        49987820,
        49985214,
        49985767,
        49985100,
        49986303,
        49985149,
        49987715,
        49985989,
        49987200,
        49985741,
        49985695,
        49985590,
        49986052,
        49987870,
        49985429,
        49985243,
        49988980,
        49985374,
        49987931,
        49986440,
        49987996,
        49987642,
        49986192,
        49985593,
        49985941,
        49985330,
        49985003
      ],
      "score": 749,
      "text": "<a href=\"https:&#x2F;&#x2F;github.com&#x2F;openai&#x2F;math\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;openai&#x2F;math</a><p><a href=\"https:&#x2F;&#x2F;github.com&#x2F;openai&#x2F;math&#x2F;tree&#x2F;main&#x2F;preprints\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;openai&#x2F;math&#x2F;tree&#x2F;main&#x2F;preprints</a>",
      "time": 1791325041,
      "title": "Sharing AI progress in mathematics",
      "type": "story",
      "url": "https://openai.com/index/sharing-ai-progress-in-mathematics/"
    },
    {
      "by": "gmays",
      "descendants": 25,
      "id": 49987076,
      "kids": [
        49987721,
        49989024,
        49988832,
        49987519,
        49988676,
        49988410,
        49987351,
        49988243,
        49988229,
        49988820,
        49988433,
        49989035,
        49987594
      ],
      "score": 121,
      "time": 1791338531,
      "title": "Strands Decider 2B: a small, open-source, decision model",
      "type": "story",
      "url": "https://strandsagents.com/blog/introducing-strands-decider/"
    },
    {
      "by": "chiefstorm",
      "descendants": 108,
      "id": 49984025,
      "kids": [
        49985035,
        49985015,
        49985095,
        49988488,
        49986641,
        49989048,
        49986799,
        49985090,
        49987503,
        49987620,
        49986061,
        49987483,
        49988378,
        49988662,
        49984956,
        49984958,
        49987484,
        49985910,
        49988294,
        49986230,
        49986220,
        49986491,
        49988132,
        49984093,
        49984508,
        49986304,
        49984639,
        49986010,
        49987624,
        49984946,
        49988060,
        49987953,
        49986500,
        49988335,
        49985166,
        49984764,
        49985004
      ],
      "score": 236,
      "time": 1791320245,
      "title": "Decisions API is in public beta",
      "type": "story",
      "url": "https://developers.openai.com/api/docs/guides/decisions"
    },
    {
      "by": "jinqueeny",
      "descendants": 2,
      "id": 49988709,
      "kids": [
        49989104,
        49988772
      ],
      "score": 7,
      "time": 1791351515,
      "title": "Shaders, WebGPU Components for React, Vue, Svelte, Solid, JavaScript and Framer",
      "type": "story",
      "url": "https://github.com/shader-effects-inc/shaders"
    },
    {
      "by": "kavourias",
      "descendants": 74,
      "id": 49984716,
      "kids": [
        49987995,
        49986173,
        49987054,
        49988921,
        49986845,
        49985829,
        49987787,
        49986660,
        49987334,
        49988637,
        49985836,
        49985942,
        49985993,
        49987651,
        49986600,
        49984717,
        49987974,
        49987905,
        49986727,
        49986133
      ],
      "score": 146,
      "time": 1791323983,
      "title": "Penguin Mail – open-source Rust email client for Linux with AI",
      "type": "story",
      "url": "https://penguin-mail.com/"
    },
    {
      "by": "nanochess",
      "descendants": 8,
      "id": 49987675,
      "kids": [
        49987945,
        49988906,
        49988679,
        49988564,
        49987976
      ],
      "score": 32,
      "time": 1791343005,
      "title": "La Cueva BBS in Mexico in 1993 (session replay)",
      "type": "story",
      "url": "https://nanochess.org/la_cueva_bbs.html"
    },
    {
      "by": "Philpax",
      "descendants": 1005,
      "id": 49977979,
      "kids": [
        49978763,
        49978149,
        49984124,
        49981633,
        49978258,
        49983933,
        49978211,
        49979576,
        49978577,
        49978077,
        49978645,
        49978850,
        49978300,
        49978617,
        49980321,
        49978910,
        49980909,
        49978666,
        49978242,
        49980826,
        49979173,
        49979676,
        49986076,
        49978883,
        49981763,
        49979292,
        49988261,
        49978066,
        49978188,
        49979034,
        49979140,
        49980861,
        49978409,
        49980155,
        49978783,
        49982150,
        49979454,
        49984794,
        49982255,
        49978064,
        49978437,
        49978104,
        49978114,
        49979932,
        49978451,
        49979079,
        49978370,
        49978868,
        49984893,
        49978837,
        49978076,
        49982723,
        49979462,
        49978059,
        49978944,
        49980633,
        49979009,
        49985704,
        49980739,
        49978459,
        49980860,
        49978909,
        49981437,
        49978203,
        49979570,
        49981040,
        49980764,
        49981381,
        49978097,
        49978689,
        49979486,
        49982223,
        49978462,
        49981301,
        49979211,
        49978324,
        49980350,
        49978170,
        49978273,
        49981421,
        49979000,
        49978194,
        49979134,
        49982190,
        49978640,
        49983744,
        49978695,
        49978852,
        49978197,
        49978204,
        49978304,
        49984620,
        49980083,
        49980437,
        49978625,
        49978787,
        49981701,
        49981326,
        49981217,
        49982097,
        49980881,
        49978172,
        49978297,
        49979202,
        49978456,
        49978270,
        49978056,
        49978318,
        49983137,
        49979537,
        49980781,
        49978538,
        49988601,
        49978934,
        49980948,
        49980544,
        49978755,
        49978034,
        49980754,
        49979302,
        49978074,
        49978050,
        49978917,
        49978156,
        49979199,
        49981468,
        49979175,
        49980961,
        49982853
      ],
      "score": 1709,
      "text": "<a href=\"https:&#x2F;&#x2F;docs.mistral.ai&#x2F;models&#x2F;mistral-large-4-0\" rel=\"nofollow\">https:&#x2F;&#x2F;docs.mistral.ai&#x2F;models&#x2F;mistral-large-4-0</a>",
      "time": 1791292549,
      "title": "Mistral Large 4",
      "type": "story",
      "url": "https://mistral.ai/news/mistral-large-4/\\"
    },
    {
      "by": "derac",
      "descendants": 4,
      "id": 49988881,
      "kids": [
        49989002,
        49988891
      ],
      "score": 10,
      "time": 1791352966,
      "title": "Clean room implementation of Adobe products",
      "type": "story",
      "url": "https://github.com/storytold"
    },
    {
      "by": "jayhoon",
      "descendants": 14,
      "id": 49986862,
      "kids": [
        49989138,
        49989147,
        49988699,
        49987489,
        49987962,
        49988978,
        49988440,
        49987472,
        49988895,
        49988880,
        49989124
      ],
      "score": 55,
      "time": 1791337161,
      "title": "ESP32-C3 Adblock",
      "type": "story",
      "url": "https://github.com/M-Abozaid/esp32-c3-adblock"
    },
    {
      "by": "Tomte",
      "descendants": 10,
      "id": 49978333,
      "kids": [
        49988381,
        49989055,
        49988961,
        49988422,
        49988924,
        49988385,
        49988358
      ],
      "score": 52,
      "time": 1791294063,
      "title": "What Is Codemode",
      "type": "story",
      "url": "https://lucumr.pocoo.org/2026/10/6/codemode/"
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
      "title": "Janet on x32: 32-bit Pointers, 64-bit Speed, 25% Less RAM",
      "url": "https://alexalejandre.com/programming/lisp/janet-for-the-x32-abi/",
      "score": 21,
      "comments": 7,
      "tags": [
        "linux",
        "performance"
      ],
      "id": "am1cuw"
    },
    {
      "title": "That Time I Worked With a Laptop Thief (2025)",
      "url": "https://blog.pipetogrep.org/2025/07/27/that-time-i-worked-with-a-laptop-thief/",
      "score": 49,
      "comments": 8,
      "tags": [
        "security"
      ],
      "id": "0slgpl"
    },
    {
      "title": "Brut, the Brutal Router for Unix Tools",
      "url": "https://brut.sh",
      "score": 24,
      "comments": 12,
      "tags": [
        "show",
        "unix"
      ],
      "id": "dwbksa"
    },
    {
      "title": "A sustainable web career, for when all this blows over",
      "url": "https://dbushell.com/2026/10/07/sustainable-web-career/",
      "score": 34,
      "comments": 18,
      "tags": [
        "vibecoding",
        "web"
      ],
      "id": "jxhi2i"
    },
    {
      "title": "Email Self Hosters - what are you using?",
      "url": "",
      "score": 73,
      "comments": 71,
      "tags": [
        "ask",
        "email"
      ],
      "id": "rwloew"
    },
    {
      "title": "Last rites for Gentoo's Chromium package",
      "url": "https://lwn.net/SubscriberLink/1097760/2be4d9e3eeb59039/",
      "score": 30,
      "comments": 3,
      "tags": [
        "browsers",
        "linux",
        "practices"
      ],
      "id": "fpcicg"
    },
    {
      "title": "A Terminal Protocol for Program Status (OSC 7501)",
      "url": "https://mitchellh.com/writing/program-status-osc7501",
      "score": 13,
      "comments": 6,
      "tags": [
        "programming"
      ],
      "id": "rmh4fg"
    },
    {
      "title": "Is COSMIC DE mogging KDE Plasma?",
      "url": "https://thelibre.news/is-cosmic-de-mogging-kde-plasma/",
      "score": 15,
      "comments": 1,
      "tags": [
        "design",
        "linux"
      ],
      "id": "7qjhic"
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
      "author": "ayghri",
      "repo": "i-have-adhd",
      "avatar": "https://github.com/ayghri.png",
      "repo_link": "https://github.com/ayghri/i-have-adhd",
      "desc": "A skill to stop your coding agent from burying the answer. ADHD-friendly output.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3133,
      "added_stars": 27129,
      "builtBy": [
        {
          "username": "ayghri",
          "href": "https://github.com/ayghri",
          "avatar": "https://avatars.githubusercontent.com/u/32200675"
        },
        {
          "username": "thejesh23",
          "href": "https://github.com/thejesh23",
          "avatar": "https://avatars.githubusercontent.com/u/35212698"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "SillyDark",
          "href": "https://github.com/SillyDark",
          "avatar": "https://avatars.githubusercontent.com/u/116559191"
        },
        {
          "username": "commie70",
          "href": "https://github.com/commie70",
          "avatar": "https://avatars.githubusercontent.com/u/57289446"
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
      "forks": 5567,
      "added_stars": 4264,
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
      "forks": 5946,
      "added_stars": 23797,
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
      "forks": 914,
      "added_stars": 5766,
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
      "forks": 3125,
      "added_stars": 2444,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1713,
      "added_stars": 3250,
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
          "username": "mohgupta-ship-it",
          "href": "https://github.com/mohgupta-ship-it",
          "avatar": "https://avatars.githubusercontent.com/u/269879782"
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
      "forks": 11273,
      "added_stars": 12983,
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
      "forks": 8810,
      "added_stars": 7581,
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
      "forks": 3362,
      "added_stars": 3343,
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
      "author": "asgeirtj",
      "repo": "system_prompts_leaks",
      "avatar": "https://github.com/asgeirtj.png",
      "repo_link": "https://github.com/asgeirtj/system_prompts_leaks",
      "desc": "Documented system prompts from Anthropic - Claude Fable 5.1, Opus 5.5, Claude Design, Claude Code. OpenAI - ChatGPT GPT-6-Astra, Codex. Google - Gemini 3.8 Flash, 3.1 Pro, Antigravity. xAI - Grok, Grok Bot, Cursor, Kimi and more! Updated regularly.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 11213,
      "added_stars": 5134,
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
      "author": "Panniantong",
      "repo": "Agent-Reach",
      "avatar": "https://github.com/Panniantong.png",
      "repo_link": "https://github.com/Panniantong/Agent-Reach",
      "desc": "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8136,
      "added_stars": 14705,
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
      "author": "pytorch",
      "repo": "pytorch",
      "avatar": "https://github.com/pytorch.png",
      "repo_link": "https://github.com/pytorch/pytorch",
      "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 31596,
      "added_stars": 1208,
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
      "author": "jingyaogong",
      "repo": "minimind",
      "avatar": "https://github.com/jingyaogong.png",
      "repo_link": "https://github.com/jingyaogong/minimind",
      "desc": "🧠 Train a 64M-parameter LLM from scratch in just 2h!",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8206,
      "added_stars": 4328,
      "builtBy": [
        {
          "username": "jingyaogong",
          "href": "https://github.com/jingyaogong",
          "avatar": "https://avatars.githubusercontent.com/u/62287848"
        },
        {
          "username": "iomgaa-ycz",
          "href": "https://github.com/iomgaa-ycz",
          "avatar": "https://avatars.githubusercontent.com/u/124225682"
        },
        {
          "username": "Linxiushen",
          "href": "https://github.com/Linxiushen",
          "avatar": "https://avatars.githubusercontent.com/u/142557582"
        },
        {
          "username": "basil-k-aji-dev",
          "href": "https://github.com/basil-k-aji-dev",
          "avatar": "https://avatars.githubusercontent.com/u/70605804"
        },
        {
          "username": "readlnh",
          "href": "https://github.com/readlnh",
          "avatar": "https://avatars.githubusercontent.com/u/16349082"
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
      "forks": 2734,
      "added_stars": 2943,
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
      "forks": 3717,
      "added_stars": 2026,
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
      "author": "NVIDIA",
      "repo": "Model-Optimizer",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/Model-Optimizer",
      "desc": "A unified library of SOTA model optimization techniques like quantization, distillation, pruning, neural architecture search, speculative decoding, etc. It compresses deep learning models for downstream deployment frameworks like TensorRT-LLM, TensorRT, vLLM, etc. to optimize inference speed.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 732,
      "added_stars": 1502,
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
      "author": "home-assistant",
      "repo": "core",
      "avatar": "https://github.com/home-assistant.png",
      "repo_link": "https://github.com/home-assistant/core",
      "desc": "🏡 Open source home automation that puts local control and privacy first.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 38812,
      "added_stars": 1148,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6089,
      "added_stars": 34949,
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
      "author": "SnailSploit",
      "repo": "Claude-Red",
      "avatar": "https://github.com/SnailSploit.png",
      "repo_link": "https://github.com/SnailSploit/Claude-Red",
      "desc": "claude-red is a curated library of offensive security skills designed for the Claude skills system. Each skill is a structured SKILL.md file that primes Claude with expert-level methodology for a specific attack surface — from SQLi to shellcode, EDR evasion to exploit development.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 955,
      "added_stars": 4432,
      "builtBy": [
        {
          "username": "SnailSploit",
          "href": "https://github.com/SnailSploit",
          "avatar": "https://avatars.githubusercontent.com/u/95986478"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "halilkirazkaya",
          "href": "https://github.com/halilkirazkaya",
          "avatar": "https://avatars.githubusercontent.com/u/90972683"
        },
        {
          "username": "LvL23HT",
          "href": "https://github.com/LvL23HT",
          "avatar": "https://avatars.githubusercontent.com/u/130660521"
        },
        {
          "username": "yogesh-tessl",
          "href": "https://github.com/yogesh-tessl",
          "avatar": "https://avatars.githubusercontent.com/u/246077594"
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
      "forks": 856,
      "added_stars": 1109,
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
      "forks": 16591,
      "added_stars": 18199,
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
      "forks": 25709,
      "added_stars": 6022,
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
      "author": "mksglu",
      "repo": "context-mode",
      "avatar": "https://github.com/mksglu.png",
      "repo_link": "https://github.com/mksglu/context-mode",
      "desc": "Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1838,
      "added_stars": 5188,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5173,
      "added_stars": 13590,
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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 962,
      "added_stars": 3273,
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
      "forks": 4392,
      "added_stars": 6832,
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
      "author": "LibreChat-AI",
      "repo": "LibreChat",
      "avatar": "https://github.com/LibreChat-AI.png",
      "repo_link": "https://github.com/LibreChat-AI/LibreChat",
      "desc": "Enhanced ChatGPT Clone: Features Agents, MCP, Skills, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Groq, o1, GPT-5, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions, Secure Multi-User Auth, Presets, open-source for self-hosting. Active",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9306,
      "added_stars": 2876,
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
      "author": "supabase",
      "repo": "supabase",
      "avatar": "https://github.com/supabase.png",
      "repo_link": "https://github.com/supabase/supabase",
      "desc": "The Postgres development platform. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16017,
      "added_stars": 2627,
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
      "author": "cline",
      "repo": "cline",
      "avatar": "https://github.com/cline.png",
      "repo_link": "https://github.com/cline/cline",
      "desc": "Autonomous coding agent as an SDK, IDE extension, or CLI assistant.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7614,
      "added_stars": 2803,
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
      "author": "microsoft",
      "repo": "vscode",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/vscode",
      "desc": "Visual Studio Code",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 44575,
      "added_stars": 3485,
      "builtBy": [
        {
          "username": "bpasero",
          "href": "https://github.com/bpasero",
          "avatar": "https://avatars.githubusercontent.com/u/900690"
        },
        {
          "username": "jrieken",
          "href": "https://github.com/jrieken",
          "avatar": "https://avatars.githubusercontent.com/u/1794099"
        },
        {
          "username": "Tyriar",
          "href": "https://github.com/Tyriar",
          "avatar": "https://avatars.githubusercontent.com/u/2193314"
        },
        {
          "username": "sandy081",
          "href": "https://github.com/sandy081",
          "avatar": "https://avatars.githubusercontent.com/u/10746682"
        },
        {
          "username": "joaomoreno",
          "href": "https://github.com/joaomoreno",
          "avatar": "https://avatars.githubusercontent.com/u/22350"
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
      "forks": 835,
      "added_stars": 1263,
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
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 5564,
      "added_stars": 24330,
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
          "username": "AmethystLiang",
          "href": "https://github.com/AmethystLiang",
          "avatar": "https://avatars.githubusercontent.com/u/6427696"
        },
        {
          "username": "orca-ide",
          "href": "https://github.com/orca-ide",
          "avatar": "https://avatars.githubusercontent.com/u/277417572"
        },
        {
          "username": "Jinwoo-H",
          "href": "https://github.com/Jinwoo-H",
          "avatar": "https://avatars.githubusercontent.com/u/73622457"
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
      "forks": 270,
      "added_stars": 702,
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
      "author": "miuuyy",
      "repo": "codex-chatgpt-web",
      "avatar": "https://github.com/miuuyy.png",
      "repo_link": "https://github.com/miuuyy/codex-chatgpt-web",
      "desc": "Use ChatGPT Web (including Pro) as a native model in Codex — with context, tools, streaming and images, without using Codex quota.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1069,
      "added_stars": 8708,
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
      "forks": 1876,
      "added_stars": 8239,
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
          "username": "Dushusir",
          "href": "https://github.com/Dushusir",
          "avatar": "https://avatars.githubusercontent.com/u/26371161"
        },
        {
          "username": "wpxp123456",
          "href": "https://github.com/wpxp123456",
          "avatar": "https://avatars.githubusercontent.com/u/26315959"
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
      "forks": 2426,
      "added_stars": 5668,
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
      "author": "alsk1992",
      "repo": "CloddsBot",
      "avatar": "https://github.com/alsk1992.png",
      "repo_link": "https://github.com/alsk1992/CloddsBot",
      "desc": "Open Source AI trading agent that operates autonomously across 1000+ markets - Polymarket, Kalshi, Binance, Hyperliquid, Solana DEXs, 5 EVM chains. Scans for edge, executes instantly, manages risk while you sleep. Agent commerce protocol for machine-to-machine payments. Self-hosted. Built on Claude.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 338,
      "added_stars": 2088,
      "builtBy": [
        {
          "username": "alsk1992",
          "href": "https://github.com/alsk1992",
          "avatar": "https://avatars.githubusercontent.com/u/193760801"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "dajiaohuang",
          "href": "https://github.com/dajiaohuang",
          "avatar": "https://avatars.githubusercontent.com/u/108231307"
        },
        {
          "username": "nox-oss",
          "href": "https://github.com/nox-oss",
          "avatar": "https://avatars.githubusercontent.com/u/259919097"
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
      "forks": 1170,
      "added_stars": 3784,
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
      "author": "ever-co",
      "repo": "ever-gauzy",
      "avatar": "https://github.com/ever-co.png",
      "repo_link": "https://github.com/ever-co/ever-gauzy",
      "desc": "Ever® Gauzy™ - Open Business Management Platform (ERP/CRM/HRM/ATS/PM) - https://gauzy.co",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1205,
      "added_stars": 4095,
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
      "author": "OpenHands",
      "repo": "OpenHands",
      "avatar": "https://github.com/OpenHands.png",
      "repo_link": "https://github.com/OpenHands/OpenHands",
      "desc": "🙌 OpenHands: AI-Driven Development",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 11927,
      "added_stars": 4033,
      "builtBy": [
        {
          "username": "openhands-agent",
          "href": "https://github.com/openhands-agent",
          "avatar": "https://avatars.githubusercontent.com/u/175740463"
        },
        {
          "username": "hieptl",
          "href": "https://github.com/hieptl",
          "avatar": "https://avatars.githubusercontent.com/u/69354317"
        },
        {
          "username": "xingyaoww",
          "href": "https://github.com/xingyaoww",
          "avatar": "https://avatars.githubusercontent.com/u/38853559"
        },
        {
          "username": "enyst",
          "href": "https://github.com/enyst",
          "avatar": "https://avatars.githubusercontent.com/u/6080905"
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
      "title": "Why you still need a Website Portfolio, even though everyone can Vibe Code it.",
      "description": "If you have been following me for a long time, you already know that I have been holding off on my...",
      "url": "https://dev.to/francistrdev/why-you-still-need-a-website-portfolio-even-though-everyone-can-vibe-code-it-e63",
      "tags": "discuss, community, showdev, a11y",
      "reactions": 122,
      "comments": 54,
      "reading_time": 7,
      "author": "francistrdev"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-3ib7",
      "tags": "discuss, jokes, watercooler",
      "reactions": 41,
      "comments": 30,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "stop-using-complex-urls-for-your-demos.us-central1.run.app",
      "description": "Wish you had a custom domain for all of your demos and AI prototypes? When you deploy your apps with...",
      "url": "https://dev.to/googleai/stop-using-complex-urls-for-your-demosus-central1runapp-2efd",
      "tags": "googlecloud, cloud, software, programming",
      "reactions": 8,
      "comments": 0,
      "reading_time": 1,
      "author": "ruchika_goel"
    },
    {
      "title": "Run, Hunt, Hack: Join the Cloud Run Hackathon on Product Hunt",
      "description": "Got a cool side project running on your local machine? This is your chance to make it live and have...",
      "url": "https://dev.to/googlecloud/run-hunt-hack-join-the-cloud-run-hackathon-on-product-hunt-3cc",
      "tags": "hackathon, cloud",
      "reactions": 5,
      "comments": 0,
      "reading_time": 1,
      "author": "momander"
    },
    {
      "title": "Build a Tiny Virtual Pet on Arduino in 60 Minutes 🐾",
      "description": "Turn an Arduino Uno Q into Kiku, a Tamagotchi-style virtual pet with an animated LED face, moods, and keyboard controls.",
      "url": "https://dev.to/heraistudio/build-a-tiny-virtual-pet-on-arduino-in-60-minutes-2cf",
      "tags": "arduino, beginners, programming, hacktoberfest",
      "reactions": 31,
      "comments": 12,
      "reading_time": 5,
      "author": "jenlooper"
    },
    {
      "title": "What was your win this week?",
      "description": "👋👋👋👋 Looking back on your week -- what was something you're proud of? All wins count -- big or small...",
      "url": "https://dev.to/devteam/what-was-your-win-this-week-4jli",
      "tags": "weeklyretro",
      "reactions": 95,
      "comments": 119,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Publishing Markdown to Substack from an Agent Skill",
      "description": "Substack has no publishing API, its editor has no tables, and a link around inline code is dropped on paste. A step by step walk-through of the Substack destination in publishing-kit: what the editor keeps, what it drops, and how an agent publishes to it and reads the result back.",
      "url": "https://dev.to/gde/publishing-markdown-to-substack-from-an-agent-skill-258f",
      "tags": "substack, writing, devtools, ai",
      "reactions": 17,
      "comments": 5,
      "reading_time": 8,
      "author": "xbill"
    },
    {
      "title": "Join the Hacktoberfest Open-Source AI Challenge: Touch Grass! $2,450 in Prizes Across 17 Winners.",
      "description": "Week 1 of our five Hacktoberfest DEV Challenges starts today! Running through October 11, the...",
      "url": "https://dev.to/devteam/join-the-hacktoberfest-open-source-ai-challenge-week-1-touch-grass-2450-in-prizes-across-17-4pom",
      "tags": "devchallenge, hf26challenge, hacktoberfest, softwaredevelopment",
      "reactions": 128,
      "comments": 36,
      "reading_time": 7,
      "author": "heyitsjem"
    },
    {
      "title": "Activating Your Data Layer for Production-Ready AI",
      "description": "When discussing applications and systems using generative AI and the new opportunities they present,...",
      "url": "https://dev.to/googleai/activating-your-data-layer-for-production-ready-ai-p3e",
      "tags": "database, googlecloud, ai",
      "reactions": 10,
      "comments": 1,
      "reading_time": 5,
      "author": "gleb_otochkin"
    },
    {
      "title": "MCP Configuration for Google Workspace with Claude Code",
      "description": "Connect Claude Code to Google's eight remote Workspace MCP servers (Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat and People), packaged as a Claude Code skill, with the two sign-in limits that decide how you use it.",
      "url": "https://dev.to/gde/mcp-configuration-for-google-workspace-with-claude-code-11om",
      "tags": "claudecode, mcp, googleworkspace, googleoauth",
      "reactions": 13,
      "comments": 2,
      "reading_time": 18,
      "author": "xbill"
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
      "title": "Curiosity Over Comfort",
      "description": "I’m More Interested in Why Things Break Than Why They Work   I don’t think I became...",
      "url": "https://dev.to/marceli/curiosity-over-comfort-5cki",
      "tags": "ai, webdev, programming, productivity",
      "reactions": 9,
      "comments": 4,
      "reading_time": 4,
      "author": "marceli"
    },
    {
      "title": "Claude Code in VS Code: The Official Extension, Set Up Properly",
      "description": "Claude Code in VS Code has an official Anthropic extension now. Install, permission modes, checkpoints, CLI vs panel, and the settings I'd change on day one.",
      "url": "https://dev.to/noorhalvorsen/claude-code-in-vs-code-the-official-extension-set-up-properly-38o5",
      "tags": "vscode, claude, ai, productivity",
      "reactions": 4,
      "comments": 0,
      "reading_time": 6,
      "author": "noorhalvorsen"
    },
    {
      "title": "Building Pylerium: A Tactical, Local-First Python Workflow Orchestrator in PyQt6",
      "description": "GitHub: https://github.com/Sh1tmunch3r/Pylerium.git  Tech Stack: Python 3.10+, PyQt6, SQLite,...",
      "url": "https://dev.to/donnnnn14/building-pylerium-a-tactical-local-first-python-workflow-orchestrator-in-pyqt6-5bad",
      "tags": "productivity, opensource, architecture, database",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "donnnnn14"
    },
    {
      "title": "Markdown Is Everywhere, and It All Started with a README",
      "description": "Original article: Markdown Is Everywhere, and It All Started with a README   Have you noticed that...",
      "url": "https://dev.to/jatniel/markdown-is-everywhere-and-it-all-started-with-a-readme-3f6g",
      "tags": "markdown, webdev, productivity, ai",
      "reactions": 2,
      "comments": 0,
      "reading_time": 7,
      "author": "jatniel"
    },
    {
      "title": "Stop dragging boxes in Draw.io: Turn plain text into interactive architecture maps",
      "description": "Every time I need to draw an architecture diagram or document a workflow, the same thing happens:   I...",
      "url": "https://dev.to/divyesh5981/stop-dragging-boxes-in-drawio-turn-plain-text-into-interactive-architecture-maps-2n7d",
      "tags": "devtools, ai, architecture, productivity",
      "reactions": 2,
      "comments": 0,
      "reading_time": 2,
      "author": "divyesh5981"
    },
    {
      "title": "Blader Humanizer in 2026: What v3.1 Changed and How I Use It",
      "description": "A hands-on guide to blader humanizer v3.1.0: the 26 patterns, install steps for Claude Code and Codex, voice matching, and what it still can't do for you.",
      "url": "https://dev.to/farahellison/blader-humanizer-in-2026-what-v31-changed-and-how-i-use-it-5h6b",
      "tags": "ai, claude, writing, productivity",
      "reactions": 4,
      "comments": 0,
      "reading_time": 7,
      "author": "farahellison"
    },
    {
      "title": "Copilot CLI in Late 2026: The Flags I Actually Use in Scripts",
      "description": "A practical October 2026 guide to GitHub Copilot CLI for scripts and CI: permission patterns, autopilot limits, JSON output, worktrees and token setup.",
      "url": "https://dev.to/selinorlov/copilot-cli-in-late-2026-the-flags-i-actually-use-in-scripts-4b0g",
      "tags": "githubcopilot, cli, devops, productivity",
      "reactions": 4,
      "comments": 0,
      "reading_time": 7,
      "author": "selinorlov"
    },
    {
      "title": "Junior interviews don't test what they used to, and nobody updated you",
      "description": "You prepped for an entry-level loop and got asked to defend tradeoffs like a senior hire. That's not the interviewer overreaching — the job underneath the title actually changed. Here's what they're listening for now, and the words that show it.",
      "url": "https://dev.to/parsajiravand/junior-interviews-dont-test-what-they-used-to-and-nobody-updated-you-1h01",
      "tags": "career, discuss, beginners, productivity",
      "reactions": 2,
      "comments": 0,
      "reading_time": 6,
      "author": "parsajiravand"
    },
    {
      "title": "A Better Workspace for Developers Using Browsers Terminals and AI",
      "description": "A developer's workspace is more useful when the issue, tools, and verification stay connected. A...",
      "url": "https://dev.to/novastart/a-better-workspace-for-developers-using-browsers-terminals-and-ai-56p",
      "tags": "ai, devtools, webdev, productivity",
      "reactions": 1,
      "comments": 0,
      "reading_time": 3,
      "author": "novastart"
    },
    {
      "title": "What a workflow really is, and why it's the most honest form of no-code",
      "description": "\"No-code\" has a reputation problem. Many tools are no-code right up to the moment your task gets...",
      "url": "https://dev.to/dannickstark/what-a-workflow-really-is-and-why-its-the-most-honest-form-of-no-code-13ii",
      "tags": "automation, productivity, tools",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "dannickstark"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

