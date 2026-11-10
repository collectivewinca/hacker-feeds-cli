# Hacker Feeds Outcomes - Freelancers

Generated on: 2026-11-10 06:25:13 UTC

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
      "forks": 4491,
      "added_stars": 10695,
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
      "forks": 44347,
      "added_stars": 4999,
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
      "forks": 5324,
      "added_stars": 287,
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
      "forks": 592,
      "added_stars": 1515,
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
      "author": "techjarves",
      "repo": "Portable-Local-Studio",
      "avatar": "https://github.com/techjarves.png",
      "repo_link": "https://github.com/techjarves/Portable-Local-Studio",
      "desc": "Portable local AI studio for Windows, Linux, and macOS. Zero-setup GUI for Image Generation, GGUF LLMs, Text to Speech & Speech to Text",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 481,
      "added_stars": 195,
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
      "author": "ConardLi",
      "repo": "garden-skills",
      "avatar": "https://github.com/ConardLi.png",
      "repo_link": "https://github.com/ConardLi/garden-skills",
      "desc": "ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1709,
      "added_stars": 1323,
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
    },
    {
      "author": "Leaflet",
      "repo": "Leaflet",
      "avatar": "https://github.com/Leaflet.png",
      "repo_link": "https://github.com/Leaflet/Leaflet",
      "desc": "🍃 number one JavaScript library for interactive maps 🇺🇦",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6212,
      "added_stars": 101,
      "builtBy": [
        {
          "username": "mourner",
          "href": "https://github.com/mourner",
          "avatar": "https://avatars.githubusercontent.com/u/25395"
        },
        {
          "username": "IvanSanchez",
          "href": "https://github.com/IvanSanchez",
          "avatar": "https://avatars.githubusercontent.com/u/1125786"
        },
        {
          "username": "danzel",
          "href": "https://github.com/danzel",
          "avatar": "https://avatars.githubusercontent.com/u/393086"
        },
        {
          "username": "yohanboniface",
          "href": "https://github.com/yohanboniface",
          "avatar": "https://avatars.githubusercontent.com/u/146023"
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
      "forks": 8683,
      "added_stars": 1399,
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
      "author": "ericrisco",
      "repo": "rsc-harness",
      "avatar": "https://github.com/ericrisco.png",
      "repo_link": "https://github.com/ericrisco/rsc-harness",
      "desc": "Your agent invents things because it has no memory, and can't touch your database because it has no arms. rsc is the meta-harness that gives it both, plus the trade to know the job and the reflexes to not break your repo. For Claude Code, Codex and 15 more.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 78,
      "added_stars": 136,
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
      "by": "lairv",
      "descendants": 732,
      "id": 50429068,
      "kids": [
        50430766,
        50430829,
        50436100,
        50435571,
        50431037,
        50430379,
        50430590,
        50430228,
        50433004,
        50430085,
        50432097,
        50435720,
        50433540,
        50430200,
        50430962,
        50431536,
        50430798,
        50431225,
        50436112,
        50431752,
        50430241,
        50435602,
        50432816,
        50432975,
        50430155,
        50430238,
        50430097,
        50434753,
        50435303,
        50430350,
        50430239,
        50431343,
        50435366,
        50432552,
        50431336,
        50435235,
        50431994,
        50431089,
        50431220,
        50434685,
        50431370,
        50431471,
        50430089,
        50431327,
        50431725,
        50431222,
        50434027,
        50436180,
        50430938,
        50432927,
        50430567,
        50430098,
        50432159,
        50432548,
        50430261,
        50430409,
        50431435,
        50430511,
        50435974,
        50430943,
        50435296,
        50429993,
        50436677,
        50436244,
        50430137,
        50436358,
        50430925,
        50430741,
        50430287,
        50431358,
        50433738,
        50430248,
        50435037,
        50430931,
        50431056,
        50430174,
        50430318,
        50432707,
        50433863,
        50433410,
        50430126,
        50430574,
        50430410,
        50430644,
        50435353,
        50430826,
        50430544,
        50431688,
        50435151,
        50432092,
        50433371,
        50432238,
        50430065,
        50430692,
        50431940,
        50430883,
        50430660,
        50430229,
        50431931,
        50430732,
        50430707,
        50430504,
        50431150,
        50434904,
        50434639,
        50430756,
        50434959,
        50436368,
        50436239,
        50431516,
        50431662,
        50431508,
        50430367,
        50430214,
        50436193,
        50430254,
        50431757,
        50430243,
        50430233,
        50429990,
        50430267,
        50430588
      ],
      "score": 428,
      "time": 1794247270,
      "title": "Claude Fable 5.2 and Mythos 5.2",
      "type": "story",
      "url": "https://www.anthropic.com/claude-fable-and-mythos-5-2"
    },
    {
      "by": "munro",
      "descendants": 285,
      "id": 50431058,
      "kids": [
        50432624,
        50431583,
        50432135,
        50431741,
        50434621,
        50431501,
        50432223,
        50432424,
        50435960,
        50433039,
        50436043,
        50431653,
        50431546,
        50431638,
        50431542,
        50433341,
        50432444,
        50432702,
        50432876,
        50435918,
        50431187,
        50432234,
        50432405,
        50432835,
        50433831,
        50431995,
        50433081,
        50431839,
        50432512,
        50432862,
        50433123,
        50432393,
        50432635,
        50434359,
        50431614,
        50433157,
        50432183,
        50433017,
        50434940,
        50432336,
        50431950,
        50431557,
        50431601
      ],
      "score": 577,
      "time": 1794254339,
      "title": "USPS now offers official ZIP Code boundary polygons",
      "type": "story",
      "url": "https://postalpro.usps.com/zcb"
    },
    {
      "by": "aloukissas",
      "descendants": 1,
      "id": 50436640,
      "kids": [
        50436768
      ],
      "score": 10,
      "time": 1794290468,
      "title": "Amazon saves millions by replacing Sonnet 4.6 with Strands Decider",
      "type": "story",
      "url": "https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/"
    },
    {
      "by": "Curiositry",
      "descendants": 0,
      "id": 50436410,
      "score": 15,
      "time": 1794288285,
      "title": "Your TV can see through walls",
      "type": "story",
      "url": "https://maurycyz.com/projects/fading/"
    },
    {
      "by": "porridgeraisin",
      "descendants": 31,
      "id": 50429734,
      "kids": [
        50432676,
        50431500,
        50435033,
        50433634,
        50431087,
        50436146,
        50435675,
        50434973,
        50432034,
        50434281,
        50432198,
        50434982,
        50432834,
        50435643
      ],
      "score": 347,
      "time": 1794249943,
      "title": "E-means: Outperforming k-means in one-tenth the epochs",
      "type": "story",
      "url": "https://e-means.github.io/"
    },
    {
      "by": "ocd",
      "descendants": 279,
      "id": 50427362,
      "kids": [
        50430343,
        50428639,
        50429727,
        50428265,
        50429215,
        50427830,
        50429058,
        50428264,
        50429199,
        50431195,
        50435645,
        50432582,
        50429593,
        50427677,
        50430665,
        50428866,
        50429879,
        50435190,
        50428024,
        50431840,
        50433836,
        50429222,
        50427756,
        50429240,
        50431632,
        50433527,
        50427515,
        50428295,
        50431873,
        50430997,
        50428683,
        50428813,
        50430515,
        50433125,
        50433052,
        50435973,
        50430088,
        50428570,
        50429272,
        50428069,
        50428063,
        50428298,
        50427918,
        50429462
      ],
      "score": 508,
      "time": 1794240045,
      "title": "Payments Canada announces launch of Canada's Real-Time Rail (RTR) payment system",
      "type": "story",
      "url": "https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy"
    },
    {
      "by": "bigwheels",
      "descendants": 48,
      "id": 50434310,
      "kids": [
        50436044,
        50435186,
        50436729,
        50436527,
        50435391,
        50436494,
        50436492,
        50435304,
        50436231,
        50435262,
        50435434,
        50435776,
        50435499,
        50435771,
        50435100,
        50435387,
        50436018,
        50435792,
        50435449,
        50436496,
        50435686,
        50435513
      ],
      "score": 101,
      "time": 1794269446,
      "title": "Locating the source of a mysterious beep",
      "type": "story",
      "url": "https://simonwillison.net/2026/Nov/9/mysterious-beeps/"
    },
    {
      "by": "Curiositry",
      "descendants": 37,
      "id": 50434264,
      "kids": [
        50435546,
        50434692,
        50435567,
        50434971,
        50435908,
        50436021,
        50435362,
        50435408,
        50435906,
        50434913,
        50435463,
        50436302
      ],
      "score": 109,
      "time": 1794269237,
      "title": "Horible public key tricks",
      "type": "story",
      "url": "https://maurycyz.com/projects/badcert/"
    },
    {
      "by": "vismit2000",
      "descendants": 145,
      "id": 50424581,
      "kids": [
        50426720,
        50425493,
        50426997,
        50430125,
        50425385,
        50426939,
        50424727,
        50424946,
        50424991,
        50429435,
        50428115,
        50432378,
        50424758,
        50425260,
        50427734,
        50424961,
        50429845,
        50427679,
        50435144,
        50427978,
        50432442,
        50424820,
        50432810,
        50426757,
        50426018,
        50427503,
        50428498,
        50424799,
        50431439,
        50428263,
        50425200,
        50425285,
        50424786,
        50429591,
        50430091,
        50431026,
        50427025,
        50429543,
        50425564,
        50426678,
        50425488,
        50424698,
        50426117,
        50427391,
        50428812,
        50429589,
        50426482,
        50425438,
        50430363,
        50429574,
        50428402,
        50425339,
        50427568
      ],
      "score": 936,
      "time": 1794226762,
      "title": "Foldable Flight: The Best Paper Airplanes",
      "type": "story",
      "url": "https://www.foldableflight.com"
    },
    {
      "by": "Ivoah",
      "descendants": 4,
      "id": 50435898,
      "kids": [
        50436679,
        50436618,
        50436726,
        50436710
      ],
      "score": 18,
      "time": 1794283179,
      "title": "Ultorg: The User Interface for Relational Databases",
      "type": "story",
      "url": "https://www.ultorg.com/"
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
      "title": "Horrible public key tricks",
      "url": "https://maurycyz.com/projects/badcert/",
      "score": 82,
      "comments": 9,
      "tags": [
        "cryptography"
      ],
      "id": "txkq8s"
    },
    {
      "title": "How Much Energy Does Building Distro Packages Use",
      "url": "https://www.wezm.net/v2/posts/2026/distro-energy-use/",
      "score": 90,
      "comments": 16,
      "tags": [
        "linux"
      ],
      "id": "ezjewj"
    },
    {
      "title": "Microsoft are rejecting your mail",
      "url": "https://www.mythic-beasts.com/blog/2026/11/09/microsoft-are-rejecting-your-mail/",
      "score": 47,
      "comments": 7,
      "tags": [
        "email"
      ],
      "id": "ynik5s"
    },
    {
      "title": "Let’s Talk About Why all This OT Stuff is Connected",
      "url": "https://tisiphone.net/2026/11/08/lets-talk-about-why-all-this-ot-stuff-is-connected/",
      "score": 42,
      "comments": 22,
      "tags": [
        "security"
      ],
      "id": "jxigk6"
    },
    {
      "title": "Terminal2Shell: Critical flaw grants instant shell access on every major OS",
      "url": "https://terminal2shell.com/",
      "score": 90,
      "comments": 26,
      "tags": [
        "satire",
        "security"
      ],
      "id": "vghqe8"
    },
    {
      "title": "unlocking any car from X brand in most of the world",
      "url": "https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/",
      "score": 80,
      "comments": 27,
      "tags": [
        "reversing",
        "security"
      ],
      "id": "kbrpx3"
    },
    {
      "title": "What's new in Node.js 27",
      "url": "https://nodejsdesignpatterns.com/blog/whats-new-in-nodejs-27/",
      "score": 19,
      "comments": 6,
      "tags": [
        "javascript",
        "nodejs"
      ],
      "id": "vtjjbc"
    },
    {
      "title": "A C++ Quicksort Faster Than std::sort",
      "url": "https://tiki.li/blog/about_blqsort",
      "score": 18,
      "comments": 2,
      "tags": [
        "c",
        "c++",
        "performance"
      ],
      "id": "qi2lni"
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
      "forks": 11817,
      "added_stars": 50585,
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
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7036,
      "added_stars": 16710,
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
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4860,
      "added_stars": 9215,
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
      "author": "anthropics",
      "repo": "knowledge-work-plugins",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/knowledge-work-plugins",
      "desc": "Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3913,
      "added_stars": 7322,
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
      "author": "AgriciDaniel",
      "repo": "claude-seo",
      "avatar": "https://github.com/AgriciDaniel.png",
      "repo_link": "https://github.com/AgriciDaniel/claude-seo",
      "desc": "Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3600,
      "added_stars": 9153,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5273,
      "added_stars": 6933,
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
      "forks": 3458,
      "added_stars": 5175,
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
      "author": "D4Vinci",
      "repo": "Scrapling",
      "avatar": "https://github.com/D4Vinci.png",
      "repo_link": "https://github.com/D4Vinci/Scrapling",
      "desc": "🕷️ The BEST Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceNQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10519,
      "added_stars": 14326,
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
      "author": "earthtojake",
      "repo": "text-to-cad",
      "avatar": "https://github.com/earthtojake.png",
      "repo_link": "https://github.com/earthtojake/text-to-cad",
      "desc": "Design physical products with AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2466,
      "added_stars": 7359,
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
      "repo": "skills",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/skills",
      "desc": "Public repository for Agent Skills",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 22468,
      "added_stars": 10955,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2199,
      "added_stars": 5366,
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
      "forks": 4477,
      "added_stars": 2170,
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
      "forks": 3075,
      "added_stars": 3559,
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
      "author": "The-PR-Agent",
      "repo": "pr-agent",
      "avatar": "https://github.com/The-PR-Agent.png",
      "repo_link": "https://github.com/The-PR-Agent/pr-agent",
      "desc": "🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2163,
      "added_stars": 2434,
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
          "username": "okotek",
          "href": "https://github.com/okotek",
          "avatar": "https://avatars.githubusercontent.com/u/4869233"
        },
        {
          "username": "IsmaelMartinez",
          "href": "https://github.com/IsmaelMartinez",
          "avatar": "https://avatars.githubusercontent.com/u/430992"
        }
      ]
    },
    {
      "author": "Comfy-Org",
      "repo": "ComfyUI",
      "avatar": "https://github.com/Comfy-Org.png",
      "repo_link": "https://github.com/Comfy-Org/ComfyUI",
      "desc": "The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local inference engine in the world.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 17399,
      "added_stars": 9870,
      "builtBy": [
        {
          "username": "comfyanonymous",
          "href": "https://github.com/comfyanonymous",
          "avatar": "https://avatars.githubusercontent.com/u/121283862"
        },
        {
          "username": "bigcat88",
          "href": "https://github.com/bigcat88",
          "avatar": "https://avatars.githubusercontent.com/u/13381981"
        },
        {
          "username": "pythongosssss",
          "href": "https://github.com/pythongosssss",
          "avatar": "https://avatars.githubusercontent.com/u/125205205"
        },
        {
          "username": "comfyui-wiki",
          "href": "https://github.com/comfyui-wiki",
          "avatar": "https://avatars.githubusercontent.com/u/192523189"
        },
        {
          "username": "rattus128",
          "href": "https://github.com/rattus128",
          "avatar": "https://avatars.githubusercontent.com/u/46076784"
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
      "forks": 10208,
      "added_stars": 2590,
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
      "forks": 20738,
      "added_stars": 1107,
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
      "author": "Alishahryar1",
      "repo": "free-claude-code",
      "avatar": "https://github.com/Alishahryar1.png",
      "repo_link": "https://github.com/Alishahryar1/free-claude-code",
      "desc": "Use Claude Code, Codex, Antigravity, VSCode, Pi, and OpenCode (and 6 other harnesses) for free (1.3B+ free tokens) from your terminal, app, IDE, or phone, and now from the browser with native browser sessions (multi-harness + multi-model) like OpenClaw (voice supported + ToS friendly)",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10520,
      "added_stars": 11089,
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
      "author": "sherlock-project",
      "repo": "sherlock",
      "avatar": "https://github.com/sherlock-project.png",
      "repo_link": "https://github.com/sherlock-project/sherlock",
      "desc": "Hunt down social media accounts by username across social networks",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12450,
      "added_stars": 13138,
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
      "author": "luongnv89",
      "repo": "claude-howto",
      "avatar": "https://github.com/luongnv89.png",
      "repo_link": "https://github.com/luongnv89/claude-howto",
      "desc": "A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5722,
      "added_stars": 5207,
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
      "author": "elayadesign",
      "repo": "ai-design-skills",
      "avatar": "https://github.com/elayadesign.png",
      "repo_link": "https://github.com/elayadesign/ai-design-skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1152,
      "added_stars": 12790,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "elayadesign",
          "href": "https://github.com/elayadesign",
          "avatar": "https://avatars.githubusercontent.com/u/218383883"
        },
        {
          "username": "kachar",
          "href": "https://github.com/kachar",
          "avatar": "https://avatars.githubusercontent.com/u/893608"
        },
        {
          "username": "devluiscavalcante",
          "href": "https://github.com/devluiscavalcante",
          "avatar": "https://avatars.githubusercontent.com/u/113953786"
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
      "forks": 717,
      "added_stars": 5763,
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
      "forks": 110391,
      "added_stars": 413718,
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
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 10223,
      "added_stars": 26993,
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
      "author": "heygen-com",
      "repo": "hyperframes",
      "avatar": "https://github.com/heygen-com.png",
      "repo_link": "https://github.com/heygen-com/hyperframes",
      "desc": "Write HTML. Render video. Built for agents.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7558,
      "added_stars": 22344,
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
      "author": "thedotmack",
      "repo": "claude-mem",
      "avatar": "https://github.com/thedotmack.png",
      "repo_link": "https://github.com/thedotmack/claude-mem",
      "desc": "Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 10025,
      "added_stars": 17008,
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
      "forks": 6903,
      "added_stars": 17544,
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
      "forks": 3383,
      "added_stars": 5315,
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
      "author": "remotion-dev",
      "repo": "remotion",
      "avatar": "https://github.com/remotion-dev.png",
      "repo_link": "https://github.com/remotion-dev/remotion",
      "desc": "🎥 Make videos programmatically with React",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6001,
      "added_stars": 9441,
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
      "author": "stablyai",
      "repo": "orca",
      "avatar": "https://github.com/stablyai.png",
      "repo_link": "https://github.com/stablyai/orca",
      "desc": "Orca lets you run a fleet of coding agents (e.g. Claude Code, Codex) with your own subscription. Available on desktop, mobile and remote runtime.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7647,
      "added_stars": 32472,
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
      "author": "anthropics",
      "repo": "sandbox-runtime",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/sandbox-runtime",
      "desc": "A lightweight sandboxing tool for enforcing filesystem and network restrictions on arbitrary processes at the OS level, without requiring a container.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 630,
      "added_stars": 1588,
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
      "author": "anomalyco",
      "repo": "opencode",
      "avatar": "https://github.com/anomalyco.png",
      "repo_link": "https://github.com/anomalyco/opencode",
      "desc": "The open source coding agent.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 30471,
      "added_stars": 14834,
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
      "author": "gitroomhq",
      "repo": "postiz-app",
      "avatar": "https://github.com/gitroomhq.png",
      "repo_link": "https://github.com/gitroomhq/postiz-app",
      "desc": "📨 The ultimate agentic social media scheduling tool 🤖",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 7861,
      "added_stars": 4418,
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
      "author": "chthollyphile",
      "repo": "folia-major",
      "avatar": "https://github.com/chthollyphile.png",
      "repo_link": "https://github.com/chthollyphile/folia-major",
      "desc": "专注于绚丽的歌词动画效果的本地音乐/navidrome/第三方多平台在线音乐播放器 A multi-platform music player for local files, Navidrome, and online streaming services, featuring stunning animated lyrics.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1350,
      "added_stars": 8262,
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
      "author": "cursor",
      "repo": "plugins",
      "avatar": "https://github.com/cursor.png",
      "repo_link": "https://github.com/cursor/plugins",
      "desc": "Cursor plugin specification and official plugins",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1661,
      "added_stars": 5415,
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
      "author": "vitejs",
      "repo": "vite",
      "avatar": "https://github.com/vitejs.png",
      "repo_link": "https://github.com/vitejs/vite",
      "desc": "Next generation frontend tooling. It's fast!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9560,
      "added_stars": 1077,
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
      "author": "google-gemini",
      "repo": "gemini-cli",
      "avatar": "https://github.com/google-gemini.png",
      "repo_link": "https://github.com/google-gemini/gemini-cli",
      "desc": "An open-source AI agent that brings the power of Gemini directly into your terminal.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 14928,
      "added_stars": 2046,
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
      "author": "elie222",
      "repo": "rakazo",
      "avatar": "https://github.com/elie222.png",
      "repo_link": "https://github.com/elie222/rakazo",
      "desc": "Open-source Grok Bot alternative. Choose your own model and sandbox.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1398,
      "added_stars": 4156,
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
          "username": "ald3b",
          "href": "https://github.com/ald3b",
          "avatar": "https://avatars.githubusercontent.com/u/3642270"
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
      "forks": 9576,
      "added_stars": 7571,
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
      "author": "microsoft",
      "repo": "playwright",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/playwright",
      "desc": "Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 6831,
      "added_stars": 2504,
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
      "author": "Renhuai123",
      "repo": "ziwei-doushu",
      "avatar": "https://github.com/Renhuai123.png",
      "repo_link": "https://github.com/Renhuai123/ziwei-doushu",
      "desc": "紫微斗数开源排盘引擎 — 基于倪海厦《天纪》体系，含完整排盘算法、四化系统、格局知识库、古籍原文数据",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3378,
      "added_stars": 13016,
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
      "author": "google",
      "repo": "brotli",
      "avatar": "https://github.com/google.png",
      "repo_link": "https://github.com/google/brotli",
      "desc": "Brotli compression format",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1396,
      "added_stars": 201,
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
      "url": "https://dev.to/devteam/what-was-your-win-this-week-28dh",
      "tags": "weeklyretro",
      "reactions": 106,
      "comments": 70,
      "reading_time": 1,
      "author": "jess"
    },
    {
      "title": "Take a Claude Agent SDK agent from install to deploy with Agents CLI",
      "description": "How the Claude extension in Agents CLI takes a Claude Agent SDK agent from install to a validated Cloud Run deploy, with sessions, tracing and eval set up for you.",
      "url": "https://dev.to/googlecloud/take-a-claude-agent-sdk-agent-from-install-to-deploy-with-agents-cli-2680",
      "tags": "agents, ai, cli, python",
      "reactions": 7,
      "comments": 1,
      "reading_time": 5,
      "author": "eliasecchi"
    },
    {
      "title": "Take Claude Code Above Average: Let Antigravity Review It",
      "description": "In November 2026, I spent a day building a small tool with Claude Code: a bridge that lets a second...",
      "url": "https://dev.to/gde/take-claude-code-above-average-let-antigravity-review-it-1f3g",
      "tags": "agents, ai, softwaredevelopment, tools",
      "reactions": 17,
      "comments": 8,
      "reading_time": 18,
      "author": "kulaone"
    },
    {
      "title": "Six Serving Engines on One Cloud TPU v5e Chip: Gemma 4 E2B",
      "description": "vLLM, SGLang-JAX, a pure-JAX engine, a Rust model over PJRT, and TorchTPU in Python and Rust serve Gemma 4 E2B on one flex-start v5e-1, with the same prompts, the same 1-to-64-request sweep and the same GSM8K questions. vLLM is the engine that serves out of the box; SGLang-JAX with an E2B patch is the fastest at every load from 8 requests up.",
      "url": "https://dev.to/gde/six-serving-engines-on-one-cloud-tpu-v5e-chip-gemma-4-e2b-22hn",
      "tags": "googlecloud, tpu, vllm, jax",
      "reactions": 18,
      "comments": 5,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "Meme Monday",
      "description": "Meme Monday!  Today's cover image comes from the last thread.  DEV is an inclusive space! Humor in...",
      "url": "https://dev.to/ben/meme-monday-22ig",
      "tags": "discuss, watercooler, jokes",
      "reactions": 55,
      "comments": 15,
      "reading_time": 1,
      "author": "ben"
    },
    {
      "title": "Why Developer Experience (DX) Isn't Enough in 2026: You Need Agent Experience (AX)",
      "description": "What happens when the hardest-working user on your 16GB Mac and multi-cloud Ubuntu Dev-Box is a fleet of 20+ AI coding agents? Real benchmarks and fixes for 8s Chrome 136+ CDP hangs, 12GB APFS ghost clones, WindowServer freezes, and tmux reboot amnesia.",
      "url": "https://dev.to/gde/why-developer-experience-dx-isnt-enough-in-2026-you-need-agent-experience-ax-3dcf",
      "tags": "gemini, googlecloud, ai, devtools",
      "reactions": 17,
      "comments": 2,
      "reading_time": 10,
      "author": "jimmyliao"
    },
    {
      "title": "Porting Gemma 4 E2B to SGLang-JAX on One Cloud TPU v5e",
      "description": "SGLang-JAX serves the Gemma 4 31B and 26B A4B on TPU and fails to load E2B. A two-file patch adds per-layer embeddings, shared K/V and the double-wide MLP; on one flex-start v5e-1 it then serves 159.9 tokens per second for one request and 4,249.4 at 64, 2.52x vLLM, with GSM8K level with the bf16 JAX engine.",
      "url": "https://dev.to/gde/porting-gemma-4-e2b-to-sglang-jax-on-one-cloud-tpu-v5e-5e9l",
      "tags": "googlecloud, tpu, jax, gemma",
      "reactions": 14,
      "comments": 0,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "Stop Asking LLMs to Do Math: Client-Side Functions in Flutter GenUI with bloc_signals",
      "description": "Why Andrew 'Red' Brogdon's insight on client-side functions is critical for Generative UI—and how bloc_signals_genui turns catalog functions into 0ms synchronous reactive signals.",
      "url": "https://dev.to/gde/stop-asking-llms-to-do-math-client-side-functions-in-flutter-genui-with-blocsignals-23bh",
      "tags": "flutter, dart, ai, architecture",
      "reactions": 21,
      "comments": 30,
      "reading_time": 5,
      "author": "randalschwartz"
    },
    {
      "title": "Open-weights models: A case (and first step) for Gemma over Gemini for budget & privacy",
      "description": "TL;DR:   Gemini is the premier frontier model (family) from Google DeepMind. In the current...",
      "url": "https://dev.to/gde/open-weights-models-a-case-and-first-step-for-gemma-over-gemini-for-budget-privacy-2gjo",
      "tags": "ai, opensource, gemini, python",
      "reactions": 14,
      "comments": 0,
      "reading_time": 20,
      "author": "wescpy"
    },
    {
      "title": "Google AI Classroom Part 1: Solving the $25-Per-Exam Problem — Architecting a Sub-$0.02/Student Serverless AI Classroom with Gemini 4 & Firebase",
      "description": "Author: Cyrus Wong (黃俊彥) — Google Developer Expert - Cloud (AI), Senior Lecturer at HKIIT           ...",
      "url": "https://dev.to/gde/google-ai-classroom-part-1-solving-the-25-per-exam-problem-architecting-a-sub-002student-fjc",
      "tags": "ai, architecture, cloud, serverless",
      "reactions": 13,
      "comments": 0,
      "reading_time": 11,
      "author": "cyruswong"
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
      "title": "How do you truly stand out in Tech?",
      "description": "I am not going to lie to you, the market has been rough out there. There are layoffs across different...",
      "url": "https://dev.to/francistrdev/how-do-you-truly-stand-out-in-tech-478a",
      "tags": "discuss, community, productivity, career",
      "reactions": 85,
      "comments": 34,
      "reading_time": 8,
      "author": "francistrdev"
    },
    {
      "title": "Top 7 Best Agent Gateways",
      "description": "An agent is not just a chat window with better manners.  It can call a model five times, search an...",
      "url": "https://dev.to/varshithvhegde/top-7-best-agent-gateways-lhi",
      "tags": "ai, productivity, webdev, programming",
      "reactions": 20,
      "comments": 3,
      "reading_time": 12,
      "author": "varshithvhegde"
    },
    {
      "title": "I Gave My Startup 6 AI Employees. They Talked More Than They Worked.",
      "description": "330 chat messages, 75 finished tasks, and one analyst who announced work she never did.",
      "url": "https://dev.to/elliot_brenya/i-gave-my-startup-6-ai-employees-they-talked-more-than-they-worked-480p",
      "tags": "discuss, showdev, startup, productivity",
      "reactions": 11,
      "comments": 7,
      "reading_time": 3,
      "author": "elliot_brenya"
    },
    {
      "title": "Developers Swear AI Makes Them Faster. A Stopwatch Says They're 19% Slower",
      "description": "There are two completely different AIs — the one you're forced to use and the one an expert chose — and we keep confusing them. Five measured findings, the methodology behind each, and the one mechanism that explains all of it.",
      "url": "https://dev.to/rudratosh/developers-swear-ai-makes-them-faster-a-stopwatch-says-theyre-19-slower-45cm",
      "tags": "ai, discuss, productivity, programming",
      "reactions": 7,
      "comments": 4,
      "reading_time": 10,
      "author": "rudratosh"
    },
    {
      "title": "Reverse Engineering Instagram",
      "description": "Instagram's Post URL Is a Database Row. Here's What Reverse Engineering It Actually Shows.  The...",
      "url": "https://dev.to/om_shree_0709/reverse-engineering-instagram-ii0",
      "tags": "ai, productivity, discuss, programming",
      "reactions": 5,
      "comments": 0,
      "reading_time": 6,
      "author": "om_shree_0709"
    },
    {
      "title": "Developers saving 10+ hours a week with AI fell from 68% to 26%. The bottleneck moved.",
      "description": "Atlassian published its State of Developer Experience 2026 this week, and one number in it stopped...",
      "url": "https://dev.to/rakno/developers-saving-10-hours-a-week-with-ai-fell-from-68-to-26-the-bottleneck-moved-2m80",
      "tags": "ai, productivity, career, discuss",
      "reactions": 0,
      "comments": 1,
      "reading_time": 3,
      "author": "rakno"
    },
    {
      "title": "Your agents are at home. You're at the office.",
      "description": "You kick off three agents on the Mac at home, then head to the office. Somewhere on the way one of...",
      "url": "https://dev.to/heylittlepan/your-agents-are-at-home-youre-at-the-office-38m7",
      "tags": "ai, productivity, devtools, claude",
      "reactions": 1,
      "comments": 2,
      "reading_time": 5,
      "author": "heylittlepan"
    },
    {
      "title": "How to make Vue Dynamic Components more stable",
      "description": "Hey Folks, it's me again!  Today, I would like to share with you how I recently made the Vue Dynamic...",
      "url": "https://dev.to/jacobandrewsky/how-to-make-vue-dynamic-components-more-stable-k4m",
      "tags": "vue, typescript, webdev, productivity",
      "reactions": 3,
      "comments": 0,
      "reading_time": 3,
      "author": "jacobandrewsky"
    },
    {
      "title": "Caret: an open-source Cursor class AI code editor",
      "description": "I wanted the Cursor experience without shipping a second copy of Chromium and without a monthly fee...",
      "url": "https://dev.to/lynkr/caret-an-open-source-cursor-class-ai-code-editor-54fe",
      "tags": "ai, productivity, programming, tutorial",
      "reactions": 1,
      "comments": 1,
      "reading_time": 8,
      "author": "lynkr"
    },
    {
      "title": "Does Having Nothing Make You Better at Shipping AI Products Than a Fortune 500?",
      "description": "This question came up in Chinese AI developer circles recently, sparked by a talk Wang Jian gave at...",
      "url": "https://dev.to/nina_antalpha/does-having-nothing-make-you-better-at-shipping-ai-products-than-a-fortune-500-534b",
      "tags": "ai, startup, productivity, machinelearning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "nina_antalpha"
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

