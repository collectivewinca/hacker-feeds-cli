# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-11-13 06:25:45 UTC

Runtime note: executed with NODE_OPTIONS=--require /tmp/hf-polyfill.js

## 1. Weekend Build Ideas with Demand

**Query:** What should I build this weekend that has demand?

**Command:**
```bash
echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set' ; node bin/main.js --json github -s weekly -l typescript ; node bin/main.js --json reddit -t webdev -s top
```

**Output:**
```text
[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set
- Fetching feeds...
{
  "source": "github",
  "since": "weekly",
  "language": "typescript",
  "items": [
    {
      "author": "milind-soni",
      "repo": "OpenMausBot",
      "avatar": "https://github.com/milind-soni.png",
      "repo_link": "https://github.com/milind-soni/OpenMausBot",
      "desc": "Open-source Grok Bot alternative with a virtual machine that bots can use",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 3034,
      "added_stars": 9104,
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
    },
    {
      "author": "lobehub",
      "repo": "lobehub",
      "avatar": "https://github.com/lobehub.png",
      "repo_link": "https://github.com/lobehub/lobehub",
      "desc": "🤯 LobeHub - Super-Agents on Your Team. Add super-agents to the chats your team already uses.They take on work by themselves and get better every week.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 16266,
      "added_stars": 1186,
      "builtBy": [
        {
          "username": "arvinxx",
          "href": "https://github.com/arvinxx",
          "avatar": "https://avatars.githubusercontent.com/u/28616219"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "semantic-release-bot",
          "href": "https://github.com/semantic-release-bot",
          "avatar": "https://avatars.githubusercontent.com/u/32174276"
        },
        {
          "username": "tjx666",
          "href": "https://github.com/tjx666",
          "avatar": "https://avatars.githubusercontent.com/u/41773861"
        }
      ]
    },
    {
      "author": "vuejs",
      "repo": "core",
      "avatar": "https://github.com/vuejs.png",
      "repo_link": "https://github.com/vuejs/core",
      "desc": "🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9338,
      "added_stars": 214,
      "builtBy": [
        {
          "username": "yyx990803",
          "href": "https://github.com/yyx990803",
          "avatar": "https://avatars.githubusercontent.com/u/499550"
        },
        {
          "username": "edison1105",
          "href": "https://github.com/edison1105",
          "avatar": "https://avatars.githubusercontent.com/u/3705199"
        }
      ]
    },
    {
      "author": "garrytan",
      "repo": "gbrain",
      "avatar": "https://github.com/garrytan.png",
      "repo_link": "https://github.com/garrytan/gbrain",
      "desc": "Garry's Opinionated OpenClaw/Hermes Agent Brain",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4896,
      "added_stars": 1248,
      "builtBy": [
        {
          "username": "garrytan",
          "href": "https://github.com/garrytan",
          "avatar": "https://avatars.githubusercontent.com/u/19957"
        },
        {
          "username": "time-attack",
          "href": "https://github.com/time-attack",
          "avatar": "https://avatars.githubusercontent.com/u/89218912"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "Masashi-Ono0611",
          "href": "https://github.com/Masashi-Ono0611",
          "avatar": "https://avatars.githubusercontent.com/u/98894508"
        }
      ]
    },
    {
      "author": "can1357",
      "repo": "oh-my-pi",
      "avatar": "https://github.com/can1357.png",
      "repo_link": "https://github.com/can1357/oh-my-pi",
      "desc": "⌥ Coding agent with the IDE wired in. Built by Stencil Labs.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 4438,
      "added_stars": 949,
      "builtBy": [
        {
          "username": "can1357",
          "href": "https://github.com/can1357",
          "avatar": "https://avatars.githubusercontent.com/u/11807264"
        },
        {
          "username": "roboomp",
          "href": "https://github.com/roboomp",
          "avatar": "https://avatars.githubusercontent.com/u/284758152"
        },
        {
          "username": "badlogic",
          "href": "https://github.com/badlogic",
          "avatar": "https://avatars.githubusercontent.com/u/514052"
        },
        {
          "username": "H4vC",
          "href": "https://github.com/H4vC",
          "avatar": "https://avatars.githubusercontent.com/u/10531428"
        },
        {
          "username": "will-bogusz",
          "href": "https://github.com/will-bogusz",
          "avatar": "https://avatars.githubusercontent.com/u/24197106"
        }
      ]
    },
    {
      "author": "RocketChat",
      "repo": "Rocket.Chat",
      "avatar": "https://github.com/RocketChat.png",
      "repo_link": "https://github.com/RocketChat/Rocket.Chat",
      "desc": "The Secure CommsOS™ for mission-critical operations",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 14150,
      "added_stars": 153,
      "builtBy": [
        {
          "username": "sampaiodiego",
          "href": "https://github.com/sampaiodiego",
          "avatar": "https://avatars.githubusercontent.com/u/8591547"
        },
        {
          "username": "engelgabriel",
          "href": "https://github.com/engelgabriel",
          "avatar": "https://avatars.githubusercontent.com/u/1000217"
        },
        {
          "username": "ggazzo",
          "href": "https://github.com/ggazzo",
          "avatar": "https://avatars.githubusercontent.com/u/5263975"
        },
        {
          "username": "rodrigok",
          "href": "https://github.com/rodrigok",
          "avatar": "https://avatars.githubusercontent.com/u/234261"
        },
        {
          "username": "MartinSchoeler",
          "href": "https://github.com/MartinSchoeler",
          "avatar": "https://avatars.githubusercontent.com/u/20868078"
        }
      ]
    },
    {
      "author": "ParadevAI",
      "repo": "Paradev",
      "avatar": "https://github.com/ParadevAI.png",
      "repo_link": "https://github.com/ParadevAI/Paradev",
      "desc": "Paradev is an open-source Codex App and Conductor alternative. Orchestrate an army coding agents in parallel with your own subscriptions.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1457,
      "added_stars": 302,
      "builtBy": [
        {
          "username": "Kitenite",
          "href": "https://github.com/Kitenite",
          "avatar": "https://avatars.githubusercontent.com/u/31864905"
        },
        {
          "username": "saddlepaddle",
          "href": "https://github.com/saddlepaddle",
          "avatar": "https://avatars.githubusercontent.com/u/14907857"
        },
        {
          "username": "AviPeltz",
          "href": "https://github.com/AviPeltz",
          "avatar": "https://avatars.githubusercontent.com/u/11849162"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "harshithmullapudi",
          "href": "https://github.com/harshithmullapudi",
          "avatar": "https://avatars.githubusercontent.com/u/17528887"
        }
      ]
    },
    {
      "author": "ranxianglei",
      "repo": "billion-context",
      "avatar": "https://github.com/ranxianglei.png",
      "repo_link": "https://github.com/ranxianglei/billion-context",
      "desc": "A context-compression plugin for month-long single sessions (billions of tokens) and small context windows (a 100K context is enough) .上下文压缩插件，月级长会话， 兼顾小窗口(100k上下文足矣) . billion-context is all you need",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 584,
      "added_stars": 2986,
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
      "author": "vitejs",
      "repo": "vite",
      "avatar": "https://github.com/vitejs.png",
      "repo_link": "https://github.com/vitejs/vite",
      "desc": "Next generation frontend tooling. It's fast!",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 9982,
      "added_stars": 401,
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
      "author": "grafana",
      "repo": "grafana",
      "avatar": "https://github.com/grafana.png",
      "repo_link": "https://github.com/grafana/grafana",
      "desc": "The open and composable observability and data visualization platform. Visualize metrics, logs, and traces from multiple sources like Prometheus, Loki, Elasticsearch, InfluxDB, Postgres and many more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 14971,
      "added_stars": 196,
      "builtBy": [
        {
          "username": "torkelo",
          "href": "https://github.com/torkelo",
          "avatar": "https://avatars.githubusercontent.com/u/10999"
        },
        {
          "username": "bergquist",
          "href": "https://github.com/bergquist",
          "avatar": "https://avatars.githubusercontent.com/u/618863"
        },
        {
          "username": "ryantxu",
          "href": "https://github.com/ryantxu",
          "avatar": "https://avatars.githubusercontent.com/u/705951"
        },
        {
          "username": "marefr",
          "href": "https://github.com/marefr",
          "avatar": "https://avatars.githubusercontent.com/u/1668778"
        }
      ]
    },
    {
      "author": "meta",
      "repo": "astryx",
      "avatar": "https://github.com/meta.png",
      "repo_link": "https://github.com/meta/astryx",
      "desc": "An open source design system that's fully customizable and agent ready",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2083,
      "added_stars": 12506,
      "builtBy": [
        {
          "username": "cixzhang",
          "href": "https://github.com/cixzhang",
          "avatar": "https://avatars.githubusercontent.com/u/2781099"
        },
        {
          "username": "rubyycheung",
          "href": "https://github.com/rubyycheung",
          "avatar": "https://avatars.githubusercontent.com/u/254546175"
        },
        {
          "username": "josephfarina",
          "href": "https://github.com/josephfarina",
          "avatar": "https://avatars.githubusercontent.com/u/17398284"
        },
        {
          "username": "vjeux",
          "href": "https://github.com/vjeux",
          "avatar": "https://avatars.githubusercontent.com/u/197597"
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
      "forks": 221,
      "added_stars": 1341,
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
      "author": "garrytan",
      "repo": "gstack",
      "avatar": "https://github.com/garrytan.png",
      "repo_link": "https://github.com/garrytan/gstack",
      "desc": "Use Garry Tan's exact Claude Code setup: 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 20881,
      "added_stars": 1704,
      "builtBy": [
        {
          "username": "garrytan",
          "href": "https://github.com/garrytan",
          "avatar": "https://avatars.githubusercontent.com/u/19957"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "test22345",
          "href": "https://github.com/test22345",
          "avatar": "https://avatars.githubusercontent.com/u/17983607"
        },
        {
          "username": "szsunyuan",
          "href": "https://github.com/szsunyuan",
          "avatar": "https://avatars.githubusercontent.com/u/3579304"
        }
      ]
    },
    {
      "author": "pingdotgg",
      "repo": "t3code",
      "avatar": "https://github.com/pingdotgg.png",
      "repo_link": "https://github.com/pingdotgg/t3code",
      "desc": "The best way to control Claude Code, Codex and more from any computer or phone",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 10710,
      "added_stars": 10337,
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
      "author": "getpaseo",
      "repo": "paseo",
      "avatar": "https://github.com/getpaseo.png",
      "repo_link": "https://github.com/getpaseo/paseo",
      "desc": "Orchestrate multiple coding agents from desktop and mobile",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2936,
      "added_stars": 756,
      "builtBy": [
        {
          "username": "boudra",
          "href": "https://github.com/boudra",
          "avatar": "https://avatars.githubusercontent.com/u/711886"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "cleiter",
          "href": "https://github.com/cleiter",
          "avatar": "https://avatars.githubusercontent.com/u/135764"
        }
      ]
    }
  ]
}
- Fetching feeds...
Request error: Request failed with status code 429
✖ Request failed. Check network/API settings and try again.
```

## 2. Monthly Stack Trends

**Query:** What stack trends should I follow this month?

**Command:**
```bash
node bin/main.js --json github -s monthly -l go ; node bin/main.js --json github -s monthly -l python ; node bin/main.js --json echojs -s latest -c 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "github",
  "since": "monthly",
  "language": "go",
  "items": [
    {
      "author": "ollama",
      "repo": "ollama",
      "avatar": "https://github.com/ollama.png",
      "repo_link": "https://github.com/ollama/ollama",
      "desc": "Get up and running with Kimi, GLM, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 19055,
      "added_stars": 4867,
      "builtBy": [
        {
          "username": "mxyng",
          "href": "https://github.com/mxyng",
          "avatar": "https://avatars.githubusercontent.com/u/2372640"
        },
        {
          "username": "dhiltgen",
          "href": "https://github.com/dhiltgen",
          "avatar": "https://avatars.githubusercontent.com/u/4033016"
        },
        {
          "username": "jmorganca",
          "href": "https://github.com/jmorganca",
          "avatar": "https://avatars.githubusercontent.com/u/251292"
        },
        {
          "username": "BruceMacD",
          "href": "https://github.com/BruceMacD",
          "avatar": "https://avatars.githubusercontent.com/u/5853428"
        },
        {
          "username": "jessegross",
          "href": "https://github.com/jessegross",
          "avatar": "https://avatars.githubusercontent.com/u/6468499"
        }
      ]
    },
    {
      "author": "prometheus",
      "repo": "prometheus",
      "avatar": "https://github.com/prometheus.png",
      "repo_link": "https://github.com/prometheus/prometheus",
      "desc": "The Prometheus monitoring system and time series database.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 11015,
      "added_stars": 1545,
      "builtBy": [
        {
          "username": "fabxc",
          "href": "https://github.com/fabxc",
          "avatar": "https://avatars.githubusercontent.com/u/4948210"
        },
        {
          "username": "juliusv",
          "href": "https://github.com/juliusv",
          "avatar": "https://avatars.githubusercontent.com/u/538008"
        },
        {
          "username": "beorn7",
          "href": "https://github.com/beorn7",
          "avatar": "https://avatars.githubusercontent.com/u/5609886"
        },
        {
          "username": "bboreham",
          "href": "https://github.com/bboreham",
          "avatar": "https://avatars.githubusercontent.com/u/8125524"
        }
      ]
    },
    {
      "author": "docker",
      "repo": "compose",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/compose",
      "desc": "Define and run multi-container applications with Docker",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5944,
      "added_stars": 644,
      "builtBy": [
        {
          "username": "ndeloof",
          "href": "https://github.com/ndeloof",
          "avatar": "https://avatars.githubusercontent.com/u/132757"
        },
        {
          "username": "glours",
          "href": "https://github.com/glours",
          "avatar": "https://avatars.githubusercontent.com/u/705411"
        },
        {
          "username": "gtardif",
          "href": "https://github.com/gtardif",
          "avatar": "https://avatars.githubusercontent.com/u/437958"
        },
        {
          "username": "rumpl",
          "href": "https://github.com/rumpl",
          "avatar": "https://avatars.githubusercontent.com/u/99933"
        }
      ]
    },
    {
      "author": "gosom",
      "repo": "google-maps-scraper",
      "avatar": "https://github.com/gosom.png",
      "repo_link": "https://github.com/gosom/google-maps-scraper",
      "desc": "scrape data from Google Maps. Extracts data such as the name, address, phone number, website URL, rating, reviews number, latitude and longitude, reviews,email and more for each place",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1257,
      "added_stars": 1585,
      "builtBy": [
        {
          "username": "gosom",
          "href": "https://github.com/gosom",
          "avatar": "https://avatars.githubusercontent.com/u/454718"
        },
        {
          "username": "dredozubov",
          "href": "https://github.com/dredozubov",
          "avatar": "https://avatars.githubusercontent.com/u/131368"
        },
        {
          "username": "sbOogway",
          "href": "https://github.com/sbOogway",
          "avatar": "https://avatars.githubusercontent.com/u/92176188"
        },
        {
          "username": "fidalgo",
          "href": "https://github.com/fidalgo",
          "avatar": "https://avatars.githubusercontent.com/u/22743"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "netbirdio",
      "repo": "netbird",
      "avatar": "https://github.com/netbirdio.png",
      "repo_link": "https://github.com/netbirdio/netbird",
      "desc": "NetBird securely connects people, machines and AI agents across any network with one identity-based Zero Trust platform. Powered by peer-to-peer WireGuard®",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1853,
      "added_stars": 1112,
      "builtBy": [
        {
          "username": "mlsmaycon",
          "href": "https://github.com/mlsmaycon",
          "avatar": "https://avatars.githubusercontent.com/u/7747744"
        },
        {
          "username": "pascal-fischer",
          "href": "https://github.com/pascal-fischer",
          "avatar": "https://avatars.githubusercontent.com/u/32096965"
        },
        {
          "username": "lixmal",
          "href": "https://github.com/lixmal",
          "avatar": "https://avatars.githubusercontent.com/u/17948409"
        },
        {
          "username": "braginini",
          "href": "https://github.com/braginini",
          "avatar": "https://avatars.githubusercontent.com/u/700848"
        },
        {
          "username": "pappz",
          "href": "https://github.com/pappz",
          "avatar": "https://avatars.githubusercontent.com/u/7756831"
        }
      ]
    },
    {
      "author": "moby",
      "repo": "moby",
      "avatar": "https://github.com/moby.png",
      "repo_link": "https://github.com/moby/moby",
      "desc": "The Moby Project - a collaborative project for the container ecosystem to assemble container-based systems",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 19310,
      "added_stars": 451,
      "builtBy": [
        {
          "username": "thaJeztah",
          "href": "https://github.com/thaJeztah",
          "avatar": "https://avatars.githubusercontent.com/u/1804568"
        },
        {
          "username": "vvoland",
          "href": "https://github.com/vvoland",
          "avatar": "https://avatars.githubusercontent.com/u/5046555"
        },
        {
          "username": "cpuguy83",
          "href": "https://github.com/cpuguy83",
          "avatar": "https://avatars.githubusercontent.com/u/799078"
        },
        {
          "username": "crosbymichael",
          "href": "https://github.com/crosbymichael",
          "avatar": "https://avatars.githubusercontent.com/u/749551"
        },
        {
          "username": "vdemeester",
          "href": "https://github.com/vdemeester",
          "avatar": "https://avatars.githubusercontent.com/u/6508"
        }
      ]
    },
    {
      "author": "argoproj",
      "repo": "argo-cd",
      "avatar": "https://github.com/argoproj.png",
      "repo_link": "https://github.com/argoproj/argo-cd",
      "desc": "Declarative Continuous Deployment for Kubernetes",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8146,
      "added_stars": 255,
      "builtBy": [
        {
          "username": "alexmt",
          "href": "https://github.com/alexmt",
          "avatar": "https://avatars.githubusercontent.com/u/426437"
        },
        {
          "username": "crenshaw-dev",
          "href": "https://github.com/crenshaw-dev",
          "avatar": "https://avatars.githubusercontent.com/u/350466"
        },
        {
          "username": "jannfis",
          "href": "https://github.com/jannfis",
          "avatar": "https://avatars.githubusercontent.com/u/3942683"
        },
        {
          "username": "jessesuen",
          "href": "https://github.com/jessesuen",
          "avatar": "https://avatars.githubusercontent.com/u/12677113"
        }
      ]
    },
    {
      "author": "vxcontrol",
      "repo": "pentagi",
      "avatar": "https://github.com/vxcontrol.png",
      "repo_link": "https://github.com/vxcontrol/pentagi",
      "desc": "Fully autonomous AI Agents system capable of performing complex penetration testing tasks",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5359,
      "added_stars": 7814,
      "builtBy": [
        {
          "username": "sirozha",
          "href": "https://github.com/sirozha",
          "avatar": "https://avatars.githubusercontent.com/u/7765123"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "asdek",
          "href": "https://github.com/asdek",
          "avatar": "https://avatars.githubusercontent.com/u/4257336"
        },
        {
          "username": "mason5052",
          "href": "https://github.com/mason5052",
          "avatar": "https://avatars.githubusercontent.com/u/52062353"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "rclone",
      "repo": "rclone",
      "avatar": "https://github.com/rclone.png",
      "repo_link": "https://github.com/rclone/rclone",
      "desc": "\"rsync for cloud storage\" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Azure Blob, Azure Files, Yandex Files",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5684,
      "added_stars": 840,
      "builtBy": [
        {
          "username": "ncw",
          "href": "https://github.com/ncw",
          "avatar": "https://avatars.githubusercontent.com/u/536803"
        },
        {
          "username": "albertony",
          "href": "https://github.com/albertony",
          "avatar": "https://avatars.githubusercontent.com/u/12441419"
        },
        {
          "username": "nielash",
          "href": "https://github.com/nielash",
          "avatar": "https://avatars.githubusercontent.com/u/31582349"
        },
        {
          "username": "ivandeex",
          "href": "https://github.com/ivandeex",
          "avatar": "https://avatars.githubusercontent.com/u/9028053"
        },
        {
          "username": "B4dM4n",
          "href": "https://github.com/B4dM4n",
          "avatar": "https://avatars.githubusercontent.com/u/448169"
        }
      ]
    },
    {
      "author": "gitleaks",
      "repo": "gitleaks",
      "avatar": "https://github.com/gitleaks.png",
      "repo_link": "https://github.com/gitleaks/gitleaks",
      "desc": "Find secrets with Gitleaks 🔑",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2369,
      "added_stars": 1157,
      "builtBy": [
        {
          "username": "zricethezav",
          "href": "https://github.com/zricethezav",
          "avatar": "https://avatars.githubusercontent.com/u/15034943"
        },
        {
          "username": "rgmz",
          "href": "https://github.com/rgmz",
          "avatar": "https://avatars.githubusercontent.com/u/32133502"
        },
        {
          "username": "w0rmr1d3r",
          "href": "https://github.com/w0rmr1d3r",
          "avatar": "https://avatars.githubusercontent.com/u/20722014"
        },
        {
          "username": "bryanbeverly",
          "href": "https://github.com/bryanbeverly",
          "avatar": "https://avatars.githubusercontent.com/u/1050885"
        },
        {
          "username": "petegallagher",
          "href": "https://github.com/petegallagher",
          "avatar": "https://avatars.githubusercontent.com/u/688331"
        }
      ]
    },
    {
      "author": "Asymptote-Labs",
      "repo": "agent-beacon",
      "avatar": "https://github.com/Asymptote-Labs.png",
      "repo_link": "https://github.com/Asymptote-Labs/agent-beacon",
      "desc": "The cross-harness, self-improving memory layer for AI agents. Join our community: https://discord.com/invite/zdNChS2fBu",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 304,
      "added_stars": 1637,
      "builtBy": [
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jqdsouza",
          "href": "https://github.com/jqdsouza",
          "avatar": "https://avatars.githubusercontent.com/u/13512741"
        },
        {
          "username": "shukieshah",
          "href": "https://github.com/shukieshah",
          "avatar": "https://avatars.githubusercontent.com/u/21977216"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "kyle-elliott-asymptote",
          "href": "https://github.com/kyle-elliott-asymptote",
          "avatar": "https://avatars.githubusercontent.com/u/337744697"
        }
      ]
    },
    {
      "author": "VictoriaMetrics",
      "repo": "VictoriaMetrics",
      "avatar": "https://github.com/VictoriaMetrics.png",
      "repo_link": "https://github.com/VictoriaMetrics/VictoriaMetrics",
      "desc": "VictoriaMetrics: fast, cost-effective monitoring solution and time series database",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1808,
      "added_stars": 282,
      "builtBy": [
        {
          "username": "valyala",
          "href": "https://github.com/valyala",
          "avatar": "https://avatars.githubusercontent.com/u/283442"
        },
        {
          "username": "hagen1778",
          "href": "https://github.com/hagen1778",
          "avatar": "https://avatars.githubusercontent.com/u/2902918"
        },
        {
          "username": "f41gh7",
          "href": "https://github.com/f41gh7",
          "avatar": "https://avatars.githubusercontent.com/u/18450869"
        },
        {
          "username": "makasim",
          "href": "https://github.com/makasim",
          "avatar": "https://avatars.githubusercontent.com/u/143206"
        },
        {
          "username": "zekker6",
          "href": "https://github.com/zekker6",
          "avatar": "https://avatars.githubusercontent.com/u/1367798"
        }
      ]
    },
    {
      "author": "tailscale",
      "repo": "tailscale",
      "avatar": "https://github.com/tailscale.png",
      "repo_link": "https://github.com/tailscale/tailscale",
      "desc": "The easiest, most secure way to use WireGuard and 2FA.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3475,
      "added_stars": 1704,
      "builtBy": [
        {
          "username": "bradfitz",
          "href": "https://github.com/bradfitz",
          "avatar": "https://avatars.githubusercontent.com/u/2621"
        },
        {
          "username": "danderson",
          "href": "https://github.com/danderson",
          "avatar": "https://avatars.githubusercontent.com/u/1918"
        },
        {
          "username": "josharian",
          "href": "https://github.com/josharian",
          "avatar": "https://avatars.githubusercontent.com/u/67496"
        },
        {
          "username": "raggi",
          "href": "https://github.com/raggi",
          "avatar": "https://avatars.githubusercontent.com/u/348"
        },
        {
          "username": "andrew-d",
          "href": "https://github.com/andrew-d",
          "avatar": "https://avatars.githubusercontent.com/u/1079173"
        }
      ]
    },
    {
      "author": "istio",
      "repo": "istio",
      "avatar": "https://github.com/istio.png",
      "repo_link": "https://github.com/istio/istio",
      "desc": "Connect, secure, control, and observe services.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 8442,
      "added_stars": 101,
      "builtBy": [
        {
          "username": "istio-testing",
          "href": "https://github.com/istio-testing",
          "avatar": "https://avatars.githubusercontent.com/u/25311884"
        },
        {
          "username": "howardjohn",
          "href": "https://github.com/howardjohn",
          "avatar": "https://avatars.githubusercontent.com/u/623453"
        },
        {
          "username": "hzxuzhonghu",
          "href": "https://github.com/hzxuzhonghu",
          "avatar": "https://avatars.githubusercontent.com/u/13374016"
        },
        {
          "username": "ramaraochavali",
          "href": "https://github.com/ramaraochavali",
          "avatar": "https://avatars.githubusercontent.com/u/17204904"
        },
        {
          "username": "kyessenov",
          "href": "https://github.com/kyessenov",
          "avatar": "https://avatars.githubusercontent.com/u/9537734"
        }
      ]
    },
    {
      "author": "aquasecurity",
      "repo": "trivy",
      "avatar": "https://github.com/aquasecurity.png",
      "repo_link": "https://github.com/aquasecurity/trivy",
      "desc": "Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 862,
      "added_stars": 960,
      "builtBy": [
        {
          "username": "knqyf263",
          "href": "https://github.com/knqyf263",
          "avatar": "https://avatars.githubusercontent.com/u/2253692"
        },
        {
          "username": "DmitriyLewen",
          "href": "https://github.com/DmitriyLewen",
          "avatar": "https://avatars.githubusercontent.com/u/91113035"
        },
        {
          "username": "nikpivkin",
          "href": "https://github.com/nikpivkin",
          "avatar": "https://avatars.githubusercontent.com/u/100182843"
        },
        {
          "username": "simar7",
          "href": "https://github.com/simar7",
          "avatar": "https://avatars.githubusercontent.com/u/1254783"
        }
      ]
    },
    {
      "author": "etcd-io",
      "repo": "etcd",
      "avatar": "https://github.com/etcd-io.png",
      "repo_link": "https://github.com/etcd-io/etcd",
      "desc": "Distributed reliable key-value store for the most critical data of a distributed system",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 10598,
      "added_stars": 545,
      "builtBy": [
        {
          "username": "gyuho",
          "href": "https://github.com/gyuho",
          "avatar": "https://avatars.githubusercontent.com/u/6799218"
        },
        {
          "username": "ahrtr",
          "href": "https://github.com/ahrtr",
          "avatar": "https://avatars.githubusercontent.com/u/30739825"
        },
        {
          "username": "xiang90",
          "href": "https://github.com/xiang90",
          "avatar": "https://avatars.githubusercontent.com/u/4479947"
        },
        {
          "username": "serathius",
          "href": "https://github.com/serathius",
          "avatar": "https://avatars.githubusercontent.com/u/5873433"
        },
        {
          "username": "yichengq",
          "href": "https://github.com/yichengq",
          "avatar": "https://avatars.githubusercontent.com/u/2976232"
        }
      ]
    },
    {
      "author": "opensandbox-group",
      "repo": "OpenSandbox",
      "avatar": "https://github.com/opensandbox-group.png",
      "repo_link": "https://github.com/opensandbox-group/OpenSandbox",
      "desc": "Secure, Fast, and Extensible Sandbox runtime for AI agents.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1642,
      "added_stars": 1477,
      "builtBy": [
        {
          "username": "Pangjiping",
          "href": "https://github.com/Pangjiping",
          "avatar": "https://avatars.githubusercontent.com/u/62273713"
        },
        {
          "username": "ninan-nn",
          "href": "https://github.com/ninan-nn",
          "avatar": "https://avatars.githubusercontent.com/u/249928781"
        },
        {
          "username": "hittyt",
          "href": "https://github.com/hittyt",
          "avatar": "https://avatars.githubusercontent.com/u/1870207"
        },
        {
          "username": "hpliStartAgain",
          "href": "https://github.com/hpliStartAgain",
          "avatar": "https://avatars.githubusercontent.com/u/118508408"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "go-gitea",
      "repo": "gitea",
      "avatar": "https://github.com/go-gitea.png",
      "repo_link": "https://github.com/go-gitea/gitea",
      "desc": "Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 7392,
      "added_stars": 712,
      "builtBy": [
        {
          "username": "lunny",
          "href": "https://github.com/lunny",
          "avatar": "https://avatars.githubusercontent.com/u/81045"
        },
        {
          "username": "wxiaoguang",
          "href": "https://github.com/wxiaoguang",
          "avatar": "https://avatars.githubusercontent.com/u/2114189"
        },
        {
          "username": "unknwon",
          "href": "https://github.com/unknwon",
          "avatar": "https://avatars.githubusercontent.com/u/2946214"
        },
        {
          "username": "GiteaBot",
          "href": "https://github.com/GiteaBot",
          "avatar": "https://avatars.githubusercontent.com/u/24582011"
        },
        {
          "username": "silverwind",
          "href": "https://github.com/silverwind",
          "avatar": "https://avatars.githubusercontent.com/u/115237"
        }
      ]
    },
    {
      "author": "superplanehq",
      "repo": "superplane",
      "avatar": "https://github.com/superplanehq.png",
      "repo_link": "https://github.com/superplanehq/superplane",
      "desc": "Open source factory for one-shot engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 707,
      "added_stars": 2512,
      "builtBy": [
        {
          "username": "forestileao",
          "href": "https://github.com/forestileao",
          "avatar": "https://avatars.githubusercontent.com/u/60622592"
        },
        {
          "username": "shiroyasha",
          "href": "https://github.com/shiroyasha",
          "avatar": "https://avatars.githubusercontent.com/u/1779493"
        },
        {
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        },
        {
          "username": "lucaspin",
          "href": "https://github.com/lucaspin",
          "avatar": "https://avatars.githubusercontent.com/u/12387728"
        },
        {
          "username": "superplaneagent",
          "href": "https://github.com/superplaneagent",
          "avatar": "https://avatars.githubusercontent.com/u/307978323"
        }
      ]
    },
    {
      "author": "php",
      "repo": "frankenphp",
      "avatar": "https://github.com/php.png",
      "repo_link": "https://github.com/php/frankenphp",
      "desc": "🧟 The modern PHP app server",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 515,
      "added_stars": 149,
      "builtBy": [
        {
          "username": "dunglas",
          "href": "https://github.com/dunglas",
          "avatar": "https://avatars.githubusercontent.com/u/57224"
        },
        {
          "username": "henderkes",
          "href": "https://github.com/henderkes",
          "avatar": "https://avatars.githubusercontent.com/u/7896469"
        },
        {
          "username": "alexandre-daubois",
          "href": "https://github.com/alexandre-daubois",
          "avatar": "https://avatars.githubusercontent.com/u/2144837"
        },
        {
          "username": "AlliBalliBaba",
          "href": "https://github.com/AlliBalliBaba",
          "avatar": "https://avatars.githubusercontent.com/u/45872305"
        },
        {
          "username": "withinboredom",
          "href": "https://github.com/withinboredom",
          "avatar": "https://avatars.githubusercontent.com/u/1883296"
        }
      ]
    }
  ]
}
- Fetching feeds...
{
  "source": "github",
  "since": "monthly",
  "language": "python",
  "items": [
    {
      "author": "HKUDS",
      "repo": "DeepTutor",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/DeepTutor",
      "desc": "DeepTutor: Lifelong Personalized Tutoring. https://deeptutor.info/.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7137,
      "added_stars": 17692,
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
      "repo": "skills",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/skills",
      "desc": "Public repository for Agent Skills",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 22805,
      "added_stars": 13440,
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
      "author": "debpalash",
      "repo": "VoiceStudio",
      "avatar": "https://github.com/debpalash.png",
      "repo_link": "https://github.com/debpalash/VoiceStudio",
      "desc": "VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12118,
      "added_stars": 49960,
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
      "author": "anthropics",
      "repo": "claude-plugins-official",
      "avatar": "https://github.com/anthropics.png",
      "repo_link": "https://github.com/anthropics/claude-plugins-official",
      "desc": "Official, Anthropic-managed directory of high quality Claude Code Plugins.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4886,
      "added_stars": 9515,
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
      "author": "AgriciDaniel",
      "repo": "claude-seo",
      "avatar": "https://github.com/AgriciDaniel.png",
      "repo_link": "https://github.com/AgriciDaniel/claude-seo",
      "desc": "Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3676,
      "added_stars": 9819,
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
          "username": "rudycelekli",
          "href": "https://github.com/rudycelekli",
          "avatar": "https://avatars.githubusercontent.com/u/47457359"
        },
        {
          "username": "Nordalux",
          "href": "https://github.com/Nordalux",
          "avatar": "https://avatars.githubusercontent.com/u/129338099"
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
      "forks": 3937,
      "added_stars": 6451,
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
      "author": "AstrBotDevs",
      "repo": "AstrBot",
      "avatar": "https://github.com/AstrBotDevs.png",
      "repo_link": "https://github.com/AstrBotDevs/AstrBot",
      "desc": "AI Agent Assistant & development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and can be your openclaw alternative. ✨",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3546,
      "added_stars": 5262,
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
      "forks": 10643,
      "added_stars": 15507,
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
      "author": "666ghj",
      "repo": "MiroFish",
      "avatar": "https://github.com/666ghj.png",
      "repo_link": "https://github.com/666ghj/MiroFish",
      "desc": "A Simple and Universal Swarm Intelligence Engine, Predicting Anything. 简洁通用的群体智能引擎，预测万物",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 12959,
      "added_stars": 7368,
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
      "author": "NVIDIA",
      "repo": "SkillSpector",
      "avatar": "https://github.com/NVIDIA.png",
      "repo_link": "https://github.com/NVIDIA/SkillSpector",
      "desc": "Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2273,
      "added_stars": 5704,
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
      "author": "HKUDS",
      "repo": "CLI-Anything",
      "avatar": "https://github.com/HKUDS.png",
      "repo_link": "https://github.com/HKUDS/CLI-Anything",
      "desc": "\"CLI-Anything: Making ALL Software Agent-Native\" -- CLI-Hub: https://clianything.cc/",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5286,
      "added_stars": 6896,
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
      "author": "The-PR-Agent",
      "repo": "pr-agent",
      "avatar": "https://github.com/The-PR-Agent.png",
      "repo_link": "https://github.com/The-PR-Agent/pr-agent",
      "desc": "🚀 PR Agent: The Original Open-Source PR Reviewer. This project is not the Qodo free tier.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2185,
      "added_stars": 2704,
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
      "author": "fastapi",
      "repo": "fastapi",
      "avatar": "https://github.com/fastapi.png",
      "repo_link": "https://github.com/fastapi/fastapi",
      "desc": "FastAPI framework, high performance, easy to learn, fast to code, ready for production",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 10238,
      "added_stars": 2648,
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
      "author": "luongnv89",
      "repo": "claude-howto",
      "avatar": "https://github.com/luongnv89.png",
      "repo_link": "https://github.com/luongnv89/claude-howto",
      "desc": "A visual, example-driven guide to Claude Code — from basic concepts to advanced agents, with copy-paste templates that bring immediate value.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5739,
      "added_stars": 5394,
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
      "author": "earthtojake",
      "repo": "text-to-cad",
      "avatar": "https://github.com/earthtojake.png",
      "repo_link": "https://github.com/earthtojake/text-to-cad",
      "desc": "Design physical products with AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2486,
      "added_stars": 6722,
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
      "author": "ahujasid",
      "repo": "mcp-for-blender",
      "avatar": "https://github.com/ahujasid.png",
      "repo_link": "https://github.com/ahujasid/mcp-for-blender",
      "desc": "Community plugin to control Blender 3D with any LLM of your choice. Not affiliated with the official Blender Foundation.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3117,
      "added_stars": 3730,
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
      "author": "Comfy-Org",
      "repo": "ComfyUI",
      "avatar": "https://github.com/Comfy-Org.png",
      "repo_link": "https://github.com/Comfy-Org/ComfyUI",
      "desc": "The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local inference engine in the world.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 17467,
      "added_stars": 9873,
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
      "author": "pandas-dev",
      "repo": "pandas",
      "avatar": "https://github.com/pandas-dev.png",
      "repo_link": "https://github.com/pandas-dev/pandas",
      "desc": "Flexible and powerful data analysis / manipulation library for Python, providing labeled data structures similar to R data.frame objects, statistical functions, and much more",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 20737,
      "added_stars": 1075,
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
      "author": "elayadesign",
      "repo": "ai-design-skills",
      "avatar": "https://github.com/elayadesign.png",
      "repo_link": "https://github.com/elayadesign/ai-design-skills",
      "desc": "",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1182,
      "added_stars": 12900,
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
    }
  ]
}
- Fetching feeds...
{
  "source": "echojs",
  "sort": "latest",
  "items": [
    {
      "title": "Dual JWT Authentication: Security, Redis, and Trade-Offs",
      "url": "https://www.jstools.space/blog/dual-jwt-authentication/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-11-07T23:57:17.000Z"
    },
    {
      "title": "pathmask matches relative paths against patterns in the syntax of .gitignore",
      "url": "https://github.com/webdiscus/pathmask",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-11-07T17:59:41.000Z"
    },
    {
      "title": "Announcing Parcel 3 Alpha",
      "url": "https://v3.parceljs.org/blog/v3-alpha/?ck_subscriber_id=2125261785",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-11-06T22:46:50.000Z"
    },
    {
      "title": "Goyangi: watch what Claude Code is doing, live: every step, tool call, subagent, token and cost in a side panel",
      "url": "https://github.com/netil/goyangi",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-11-05T12:48:22.000Z"
    },
    {
      "title": "We Migrated 10,144 Tests from Jest to Vitest in 3 Weeks: The Honest, AI-Assisted Truth",
      "url": "https://dev.to/subito/we-migrated-10144-tests-from-jest-to-vitest-in-3-weeks-the-honest-ai-assisted-truth-527",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-11-02T11:41:57.000Z"
    },
    {
      "title": "Repo-Atlas - Any GitHub user’s work, mapped and clustered, with stale favorites flagged.",
      "url": "https://github.com/evoluteur/repo-atlas",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-22T01:27:11.000Z"
    },
    {
      "title": "EchoJS Meta: I'm Going Home",
      "url": "text://Hi all, I know I've been pretty absent the past few months.  I've been in two separate extended hospital stays over the past few months.  I'm going home now and looking forward to getting more involved again. \n\nAside, if anyone has it knows of open, real developer positions in the US for fully remote work, please reach out. \n\ntracker1 at Gmail.",
      "upvotes": "5",
      "comments": "3",
      "created": "2026-10-21T21:56:10.000Z"
    },
    {
      "title": "SVAR Gantt v2.8 for React, Svelte, Vue: upgraded scheduling engine & live updates",
      "url": "https://svar.dev/blog/svar-gantt-2-8-released/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-21T08:31:06.000Z"
    },
    {
      "title": "Vovk.ts – Turn Next.js route handlers into MCP tools and typed clients",
      "url": "https://vovk.dev",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-10-20T19:29:00.000Z"
    },
    {
      "title": "Full port of CossUI components to Svelte",
      "url": "https://cossui-svelte.com/",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-10-20T17:00:56.000Z"
    }
  ]
}
```

## 3. What Builders Are Shipping/Discussing

**Query:** What are builders shipping and discussing right now?

**Command:**
```bash
node bin/main.js --json devto -s top -c 10 ; node bin/main.js --json lobsters -s newest -c 10 ; node bin/main.js --json news -t 10
```

**Output:**
```text
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
      "reactions": 88,
      "comments": 14,
      "reading_time": 5,
      "author": "ben"
    },
    {
      "title": "Ultimate AI Roast! 😂😹",
      "description": "I asked my favorite AI to Roast me. Thanks @trickell for this idea.   You need to try this with your...",
      "url": "https://dev.to/annavi11arrea1/ultimate-ai-roast-168b",
      "tags": "ai, webdev, claude, cli",
      "reactions": 46,
      "comments": 15,
      "reading_time": 4,
      "author": "annavi11arrea1"
    },
    {
      "title": "How did you end up in tech, and are you staying?",
      "description": "Last week you showed me where you code. This week I want to know how you ended up there in the first...",
      "url": "https://dev.to/maame-codes/how-did-you-end-up-in-tech-and-are-you-staying-4l9b",
      "tags": "discuss, career, beginners, watercooler",
      "reactions": 145,
      "comments": 56,
      "reading_time": 3,
      "author": "maame-codes"
    },
    {
      "title": "What Changes With the A2UI 1.0 Release",
      "description": "The same currency agent built on A2UI 0.9 and on A2UI 1.0: what changed in the protocol, how an answer reaches the screen now, and why the model writes 21 tokens for a rate card that took 223 on 0.9.",
      "url": "https://dev.to/gde/what-changes-with-the-a2ui-10-release-31eo",
      "tags": "a2ui, agents, gemini, react",
      "reactions": 14,
      "comments": 2,
      "reading_time": 16,
      "author": "xbill"
    },
    {
      "title": "Can you merge at agent speed?",
      "description": "Major League Hacking and Entire are teaming up for a year of hackathons, DEV Challenges, and a new...",
      "url": "https://blog.mlh.com/can-you-merge-at-agent-speed-4m67",
      "tags": "hackathon, ai, opensource, entire",
      "reactions": 31,
      "comments": 3,
      "reading_time": 5,
      "author": "mlhacks"
    },
    {
      "title": "Nvidia Says Its Roadmap Will Continue. AI Teams Should Verify the Dependencies",
      "description": "A company can announce that its operations and product roadmap will continue without interruption....",
      "url": "https://dev.to/jamilxt/nvidia-says-its-roadmap-will-continue-ai-teams-should-verify-the-dependencies-3c8d",
      "tags": "ai, business, infrastructure, devops",
      "reactions": 5,
      "comments": 0,
      "reading_time": 7,
      "author": "jamilxt"
    },
    {
      "title": "The Case for Smart Software",
      "description": "At a typical AI conference, there's usually much discussion of \"the future of software\", but it...",
      "url": "https://dev.to/swyx/the-case-for-smart-software-329f",
      "tags": "jev, ai, software, aie",
      "reactions": 11,
      "comments": 2,
      "reading_time": 3,
      "author": "swyx"
    },
    {
      "title": "Prompt Pad: What Are Tokens?",
      "description": "Your AI doesn't read your prompt word for word. It reads tokens.  In this episode of Prompt Pad,...",
      "url": "https://blog.mlh.com/prompt-pad-what-are-tokens-gec",
      "tags": "ai, beginners, codenewbie, llm",
      "reactions": 5,
      "comments": 0,
      "reading_time": 1,
      "author": "mlhacks"
    },
    {
      "title": "Muse Wonder, Muse Spark 1.3, and Muse Ember are now available on Google Cloud in public preview",
      "description": "Muse Wonder, Muse Spark 1.3 and Muse Ember are now publicly available on Google Cloud.   Deploy...",
      "url": "https://dev.to/googleai/muse-wonder-muse-spark-13-and-muse-ember-are-now-available-on-google-cloud-in-public-preview-5e6j",
      "tags": "muse, ai, googlecloud",
      "reactions": 13,
      "comments": 0,
      "reading_time": 1,
      "author": "pugsandprincesses"
    },
    {
      "title": "Ask More of Your UI",
      "description": "In my last post, I wrote about moving Forem’s performance and maintenance work into autonomous loops...",
      "url": "https://dev.to/dailycontext/ask-more-of-your-ui-2nf7",
      "tags": "ai, agents, webdev, architecture",
      "reactions": 55,
      "comments": 6,
      "reading_time": 4,
      "author": "ben"
    }
  ]
}
- Fetching feeds...
{
  "source": "lobsters",
  "sort": "newest",
  "tag": null,
  "items": [
    {
      "title": "SSA from bytecode: imperative pearl",
      "url": "https://bernsteinbear.com/blog/ssa-bytecode/",
      "score": 1,
      "comments": 0,
      "tags": [
        "compilers"
      ],
      "id": "x5uq91"
    },
    {
      "title": "Choosing QuePaxa, an unusual consensus algorithm",
      "url": "https://blog.cloudflare.com/choosing-quepaxa/",
      "score": 1,
      "comments": 0,
      "tags": [
        "distributed",
        "scaling"
      ],
      "id": "sbsu9w"
    },
    {
      "title": "I’m not descending into madness because mount and unmount icons make no sense",
      "url": "https://www.osnews.com/story/146312/im-not-descending-into-madness-because-mount-and-unmount-icons-make-no-sense/",
      "score": 1,
      "comments": 0,
      "tags": [
        "design",
        "rant"
      ],
      "id": "fbsrym"
    },
    {
      "title": "Contra \"Glue work considered harmful\"",
      "url": "https://sunshowers.io/posts/glue-work/",
      "score": 7,
      "comments": 0,
      "tags": [
        "practices"
      ],
      "id": "f6u0cg"
    },
    {
      "title": "Announcing the GraphQL over HTTP specification",
      "url": "https://graphql.org/blog/2026-11-12-announcing-the-graphql-over-http-spec/",
      "score": 2,
      "comments": 0,
      "tags": [
        "api",
        "web"
      ],
      "id": "klmtb1"
    },
    {
      "title": "Building my own ADS-B receiver",
      "url": "https://kew.edbn.me/blog/adsb-receiver/",
      "score": 3,
      "comments": 0,
      "tags": [
        "hardware"
      ],
      "id": "49c859"
    },
    {
      "title": "Futhark-J Bridge",
      "url": "https://chen.cat/j/futhark/",
      "score": 4,
      "comments": 0,
      "tags": [
        "apl"
      ],
      "id": "slkmnx"
    },
    {
      "title": "JIT bitmap text rendering for microcontrollers",
      "url": "https://linebender.org/blog/jit-bitmap-text/",
      "score": 5,
      "comments": 1,
      "tags": [
        "graphics",
        "performance"
      ],
      "id": "a3elxr"
    },
    {
      "title": "Secure Exclaves and Ambient Sensing",
      "url": "https://security.apple.com/blog/secure-exclaves/",
      "score": 3,
      "comments": 1,
      "tags": [
        "privacy",
        "security"
      ],
      "id": "vnugiy"
    },
    {
      "title": "Let’s Write a PostScript Interpreter",
      "url": "https://beyondloom.com/blog/postscript.html",
      "score": 10,
      "comments": 0,
      "tags": [
        "concatenative"
      ],
      "id": "8kdcdd"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "lldb",
      "descendants": 3011,
      "id": 50467087,
      "kids": [
        50477314,
        50474166,
        50467199,
        50477297,
        50467344,
        50472909,
        50477887,
        50467672,
        50467245,
        50477183,
        50472115,
        50467203,
        50467861,
        50467402,
        50467699,
        50469788,
        50469819,
        50467637,
        50468274,
        50468224,
        50467327,
        50478785,
        50467951,
        50467179,
        50467221,
        50467280,
        50472671,
        50467413,
        50467155,
        50468730,
        50468947,
        50469032,
        50468159,
        50467202,
        50477573,
        50473175,
        50478901,
        50477905,
        50475772,
        50469530,
        50475729,
        50477498,
        50473388,
        50472835,
        50467870,
        50469202,
        50478195,
        50467908,
        50472076,
        50474881,
        50476870,
        50467421,
        50467662,
        50472811,
        50470647,
        50467523,
        50475559,
        50473108,
        50469408,
        50467877,
        50467708,
        50469168,
        50467462,
        50467420,
        50470458,
        50467984,
        50475462,
        50471155,
        50469872,
        50468472,
        50477199,
        50467315,
        50469462,
        50467887,
        50477059,
        50467323,
        50469848,
        50467600,
        50468964,
        50467710,
        50468056,
        50471518,
        50471001,
        50477985,
        50469476,
        50468407,
        50470081,
        50475847,
        50467492,
        50468194,
        50467986,
        50468711,
        50471597,
        50476240,
        50477112,
        50468646,
        50467843,
        50467174,
        50469255,
        50467684,
        50468107,
        50473631,
        50469461,
        50469364,
        50468784,
        50467490,
        50471113,
        50467720,
        50468025,
        50474875,
        50467467,
        50469521,
        50472125,
        50468990,
        50473457,
        50468868,
        50467833,
        50473912,
        50471776,
        50469658,
        50471970,
        50472360,
        50472989,
        50471099,
        50470367,
        50473037,
        50468162,
        50467693,
        50476431,
        50472692,
        50467559,
        50467997,
        50467320,
        50476887,
        50467452,
        50468815,
        50471404,
        50467847,
        50468548,
        50469503,
        50467370,
        50468743,
        50470643,
        50470059,
        50474692,
        50470294,
        50467437,
        50470071,
        50475627,
        50467289,
        50467553,
        50471497,
        50467798,
        50474067,
        50473711,
        50470203,
        50476287,
        50472911,
        50474958,
        50471558,
        50467904,
        50471030,
        50469303,
        50468802,
        50468465,
        50468331,
        50468301,
        50468174,
        50468036,
        50478193,
        50467293,
        50467116,
        50469057,
        50467863,
        50470209,
        50471304,
        50469900,
        50472735,
        50471013,
        50468117,
        50469270,
        50470002,
        50479088,
        50478991,
        50479073,
        50467170,
        50478717,
        50478998,
        50478591,
        50477883,
        50468376,
        50467943,
        50467567,
        50476359,
        50469993,
        50468249,
        50467410,
        50468813,
        50470914,
        50467272,
        50475480,
        50477441,
        50467680,
        50467193,
        50476501,
        50467747,
        50468112,
        50467911,
        50467864,
        50474008,
        50477775,
        50467821,
        50469054,
        50470568,
        50467329,
        50468537,
        50467319,
        50467704,
        50467988,
        50469585,
        50467503,
        50469064,
        50467250,
        50472762,
        50472921,
        50474541,
        50472509,
        50469199,
        50473247,
        50477157,
        50467312,
        50468876,
        50473187,
        50475165,
        50468985,
        50468742,
        50467380,
        50467828,
        50472858,
        50471833,
        50474432,
        50475211,
        50468134,
        50469806,
        50476618,
        50471615,
        50476714,
        50473496,
        50471334,
        50472888,
        50469799,
        50475021,
        50471022,
        50475892,
        50467337,
        50467204,
        50476534,
        50468948,
        50470154,
        50467707,
        50475385,
        50467451,
        50474960,
        50469647,
        50467801,
        50473617,
        50471150,
        50468133,
        50467150,
        50467205,
        50468045,
        50467640,
        50476526,
        50467631,
        50472578,
        50470170,
        50469762,
        50467189,
        50468756,
        50468400,
        50468262,
        50468255,
        50468382,
        50468011,
        50467597,
        50467527,
        50467348,
        50467219,
        50467587,
        50472547,
        50467835,
        50477426,
        50468273,
        50473955,
        50469673,
        50468088,
        50467985,
        50467325,
        50467296,
        50467165,
        50467184,
        50467173,
        50471375,
        50473227,
        50472847,
        50471502,
        50467890,
        50467546,
        50472361,
        50474795,
        50479114,
        50467391,
        50474145,
        50467638,
        50469043,
        50477549,
        50468240,
        50476797,
        50474800,
        50475117,
        50468446,
        50467609,
        50470644,
        50467508,
        50474986,
        50470587,
        50476732,
        50468862,
        50468915,
        50470781,
        50467465,
        50467797,
        50467148,
        50471878,
        50477225,
        50476910,
        50471643,
        50474955,
        50469574,
        50472297,
        50468052,
        50468715,
        50468504,
        50467308,
        50467269,
        50473775,
        50467163,
        50467488,
        50467930,
        50467146,
        50467364,
        50467613,
        50467676,
        50468250,
        50468278,
        50468448,
        50467749,
        50467395,
        50467157,
        50467265,
        50467469,
        50467260,
        50467275
      ],
      "score": 3288,
      "text": "<a href=\"https:&#x2F;&#x2F;nvidianews.nvidia.com&#x2F;news&#x2F;nvidia-announces-ceo-transition\" rel=\"nofollow\">https:&#x2F;&#x2F;nvidianews.nvidia.com&#x2F;news&#x2F;nvidia-announces-ceo-tran...</a><p><a href=\"https:&#x2F;&#x2F;www.reuters.com&#x2F;business&#x2F;retail-consumer&#x2F;nvidia-ceo-jensen-huang-step-down-big-blow-ai-boom-2026-11-12&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.reuters.com&#x2F;business&#x2F;retail-consumer&#x2F;nvidia-ceo-...</a>, <a href=\"https:&#x2F;&#x2F;www.reuters.com&#x2F;live&#x2F;nvidia-live-board-meets-fate-ceo-jensen-huang-after-affair-reports-2026-11-12&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;www.reuters.com&#x2F;live&#x2F;nvidia-live-board-meets-fate-ce...</a><p><a href=\"https:&#x2F;&#x2F;www.nytimes.com&#x2F;live&#x2F;2026&#x2F;11&#x2F;12&#x2F;business&#x2F;nvidia-jensen-huang-resigns\" rel=\"nofollow\">https:&#x2F;&#x2F;www.nytimes.com&#x2F;live&#x2F;2026&#x2F;11&#x2F;12&#x2F;business&#x2F;nvidia-jens...</a>",
      "time": 1794491549,
      "title": "Jensen Huang resigns",
      "type": "story",
      "url": "https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f"
    },
    {
      "by": "inatreecrown2",
      "descendants": 25,
      "id": 50478515,
      "kids": [
        50479141,
        50478894,
        50479019,
        50479155,
        50478749,
        50478932,
        50479110,
        50478881,
        50478933
      ],
      "score": 53,
      "time": 1794545693,
      "title": "IceWM",
      "type": "story",
      "url": "https://ice-wm.org/"
    },
    {
      "by": "mbStavola",
      "descendants": 226,
      "id": 50472038,
      "kids": [
        50471989,
        50472574,
        50472758,
        50478693,
        50473144,
        50472246,
        50475537,
        50471852,
        50472075,
        50477873,
        50472771,
        50475141,
        50472449,
        50472184,
        50474514,
        50476265,
        50476652,
        50471997,
        50476657,
        50476154,
        50475494,
        50472397,
        50474862,
        50478964,
        50478497,
        50476327,
        50476684,
        50472163,
        50473038,
        50472661,
        50475130,
        50473943,
        50472091
      ],
      "score": 576,
      "time": 1794508745,
      "title": "Rust 1.100",
      "type": "story",
      "url": "https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/"
    },
    {
      "by": "sammatilda",
      "descendants": 15,
      "id": 50477714,
      "kids": [
        50478260,
        50479046,
        50478523,
        50478577,
        50478167,
        50478309,
        50478557,
        50478752
      ],
      "score": 71,
      "time": 1794539699,
      "title": "Switcher (2004)",
      "type": "story",
      "url": "https://folklore.org/Switcher.html"
    },
    {
      "by": "sjdh76",
      "descendants": 11,
      "id": 50477649,
      "kids": [
        50477724,
        50478638,
        50479133,
        50478801,
        50478761,
        50478982,
        50478863
      ],
      "score": 40,
      "time": 1794539288,
      "title": "Brave Search API now accepts agentic payments via the x402 protocol",
      "type": "story",
      "url": "https://brave.com/blog/search-api-agentic-payments/"
    },
    {
      "by": "jonbaer",
      "descendants": 101,
      "id": 50472260,
      "kids": [
        50475502,
        50473254,
        50476827,
        50472958,
        50473078,
        50475941,
        50475142,
        50478558,
        50472918,
        50475415,
        50472387,
        50473267,
        50478864,
        50473982,
        50477376,
        50477571,
        50474014,
        50473295,
        50476393,
        50473885,
        50476649,
        50474738,
        50473640
      ],
      "score": 374,
      "time": 1794509521,
      "title": "Gemini 4 Hydrogen and Orchestrator",
      "type": "story",
      "url": "https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/"
    },
    {
      "by": "sroussey",
      "descendants": 44,
      "id": 50475713,
      "kids": [
        50479033,
        50478501,
        50477029,
        50476687,
        50476512,
        50476876,
        50476740,
        50478039,
        50478495,
        50478571,
        50476862,
        50476588,
        50479136,
        50478606,
        50476575,
        50477628,
        50476981,
        50477921,
        50476945,
        50478054,
        50476834,
        50477585,
        50477149,
        50476430
      ],
      "score": 183,
      "time": 1794524777,
      "title": "Edge0-145B: Frontier AI Capabilities on Your Own Computer",
      "type": "story",
      "url": "https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer"
    },
    {
      "by": "simpsoka",
      "descendants": 168,
      "id": 50470488,
      "kids": [
        50472665,
        50478829,
        50476215,
        50474010,
        50478803,
        50473413,
        50473199,
        50478284,
        50478074,
        50478789,
        50473697,
        50473945,
        50478519,
        50473006,
        50474205,
        50472452,
        50472840,
        50476237,
        50475431,
        50475661,
        50474863,
        50475323,
        50475467,
        50472695,
        50478653,
        50473465,
        50478654,
        50476358,
        50473840,
        50475344,
        50475173,
        50476045,
        50472915,
        50473032,
        50472714,
        50475781,
        50476294,
        50477283,
        50473939,
        50473053,
        50474582,
        50474815,
        50472208,
        50476491,
        50475262,
        50475459,
        50472451,
        50472349,
        50476449,
        50475209,
        50474651,
        50472722
      ],
      "score": 444,
      "text": "<a href=\"https:&#x2F;&#x2F;x.com&#x2F;simpsoka&#x2F;status&#x2F;2115254318161182876\" rel=\"nofollow\">https:&#x2F;&#x2F;x.com&#x2F;simpsoka&#x2F;status&#x2F;2115254318161182876</a>",
      "time": 1794502962,
      "title": "Show HN: My $300 embroidery machine needed a subscription, so I built my own app",
      "type": "story",
      "url": "https://github.com/simpsoka/zigzag"
    },
    {
      "by": "cybermango",
      "descendants": 111,
      "id": 50472490,
      "kids": [
        50474001,
        50472788,
        50473142,
        50473128,
        50477480,
        50473678,
        50475811,
        50478857,
        50476227,
        50474272,
        50476966,
        50477782,
        50473823,
        50474824,
        50473251,
        50474445
      ],
      "score": 257,
      "time": 1794510333,
      "title": "Dwarf planet candidate appears which takes roughly 280 years to orbit our sun",
      "type": "story",
      "url": "https://www.smithsonianmag.com/smart-news/astronomers-found-a-mysterious-object-orbiting-far-beyond-pluto-it-could-be-a-new-dwarf-planet-hidden-in-our-solar-system-180989857/"
    },
    {
      "by": "lavendermon",
      "descendants": 275,
      "id": 50477231,
      "kids": [
        50477536,
        50478397,
        50477411,
        50478004,
        50478861,
        50478320,
        50479065,
        50478851,
        50478425,
        50478865,
        50478818,
        50478249,
        50477793,
        50477565,
        50478342,
        50477412,
        50478843,
        50478747,
        50478122,
        50478390,
        50478430,
        50477433,
        50478848,
        50477452,
        50477529,
        50477542,
        50478588,
        50477481,
        50478373,
        50478706,
        50478161,
        50478731,
        50477588,
        50477643,
        50477421,
        50477661,
        50478989,
        50477554,
        50478251,
        50478036,
        50477559,
        50477552,
        50477449,
        50478094,
        50477654,
        50478029,
        50477851,
        50477742,
        50477860,
        50477642
      ],
      "score": 363,
      "time": 1794536184,
      "title": "Nvidia employees petition to bring back Jensen Huang",
      "type": "story",
      "url": "https://www.wired.com/story/nvidia-employees-petition-for-jensen-huangs-return/"
    }
  ]
}
```

## 4. Practical Coding Topics to Study

**Query:** What practical coding topics should I study next?

**Command:**
```bash
node bin/main.js --json reddit -t programming -s top ; node bin/main.js --json devto -t career -s top -c 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "reddit",
  "topic": "programming",
  "sort": "top",
  "items": [
    {
      "title": "C3 0.8.6 released: Library fetching, 30% smaller safe-mode binaries, and stricter type rules",
      "url": "https://c3-lang.org/blog/c3_0_8_6_fetching_libraries/",
      "permalink": "https://www.reddit.com/r/programming/comments/1xuci0t/c3_086_released_library_fetching_30_smaller/",
      "author": "/u/Nuoji",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Nuoji [link] &#32; [comments]",
      "published": "2026-11-12T13:16:09+00:00"
    },
    {
      "title": "This Turkish Letter Keeps Breaking the World's Software - YouTube",
      "url": "https://m.youtube.com/watch?v=Ke-_V_XT5i4",
      "permalink": "https://www.reddit.com/r/programming/comments/1xu79k2/this_turkish_letter_keeps_breaking_the_worlds/",
      "author": "/u/BoloFan05",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "This video sheds light on a bug that has been around for a few decades but is still easily missed; specifically due to the letter &quot;i&quot; having unique casing rules for Turkish as &quot;İ/i&quot; (dotted I) and &quot;I/ı&quot; (dotless i). To add a few extra points of my own: The root cause of the Unity box letter bug is also related to the regular uppercasing method of C# (ToUpper), since Unity itself is written on C#. For the same reason, multiple other Turkish-related bugs (like Unity failing to recognize VR controllers on Turkish PCs) have also been reported and fixed. The particular &quot;i&quot; bug mentioned in this video has been fixed on Unity version 6.2 in 2024, or at least that was what Unity told me when I contacted them; I haven&#39;t confirmed it myself. I have seen two Unity video games (CRYSTAR and Speedrunners) refusing to start up at all (getting stuck at a black screen) when launched on a console set to the Turkish language; making them entirely unplayable unless device language is switched to something else. The first Pillars of Eternity game has also had the same bug for a decade until its devs fixed it. I confirmed from the devs themselves that they fixed it by replacing an instance of ToUpper with ToUpperInvariant. It&#39;s a brilliant idea to run the Turkey Test as said in the video; and one I REALLY wish becomes standard practice in all software companies. If one does run into bugs that way in C#, they could switch their ToLower and ToUpper instances to ToLowerInvariant and ToUpperInvariant respectively; or use StringComparison.OrdinalIgnoreCase. Invariant culture (i.e. English-based results regardless of device language) is also useful in getting rid of decimal vs. comma related bugs on decimal numbers and dates; which happen in Turkish AND a whole lot of European, South American, Russian, etc. language settings. When a program has this sort of bug; it happens not only on Turkish PCs, but also phones and consoles, or basically any device, whose language is set to Turkish. Finally, users making sure to report bugs they encounter only on Turkish devices for every video game, program, and so on in a timely manner is key in keeping this topic front and center for software and game companies. Thanks for watching and reading! &#32; submitted by &#32; /u/BoloFan05 [link] &#32; [comments]",
      "published": "2026-11-12T08:15:24+00:00"
    },
    {
      "title": "How Cloudflare uses QuePaxa—a leaderless, fault-detection-free consensus algorithm—for its global control plane",
      "url": "https://blog.cloudflare.com/choosing-quepaxa/",
      "permalink": "https://www.reddit.com/r/programming/comments/1xuv4ux/how_cloudflare_uses_quepaxaa_leaderless/",
      "author": "/u/Ok_Stomach6651",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Ok_Stomach6651 [link] &#32; [comments]",
      "published": "2026-11-13T01:45:17+00:00"
    },
    {
      "title": "Lean explained with TypeScript",
      "url": "https://gruhn.me/blog/2026-08-29/",
      "permalink": "https://www.reddit.com/r/programming/comments/1xu6252/lean_explained_with_typescript/",
      "author": "/u/fagnerbrack",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/fagnerbrack [link] &#32; [comments]",
      "published": "2026-11-12T07:00:41+00:00"
    },
    {
      "title": "Proactive Measures Against Password Breaches and Cookie Hijacking",
      "url": "https://slack.engineering/proactive-measures-against-password-breaches-and-cookie-hijacking/",
      "permalink": "https://www.reddit.com/r/programming/comments/1xupnmw/proactive_measures_against_password_breaches_and/",
      "author": "/u/Ok_Stomach6651",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/Ok_Stomach6651 [link] &#32; [comments]",
      "published": "2026-11-12T21:43:22+00:00"
    },
    {
      "title": "Building Barista: Formal Verification and TLA+",
      "url": "https://read.thecoder.cafe/p/barista-2",
      "permalink": "https://www.reddit.com/r/programming/comments/1xufafk/building_barista_formal_verification_and_tla/",
      "author": "/u/teivah",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/teivah [link] &#32; [comments]",
      "published": "2026-11-12T15:12:25+00:00"
    },
    {
      "title": "exploit a 22 years old PostgreSQL composite-type vulnerability",
      "url": "https://mehmetince.net/part-3-6-how-i-ended-up-turning-a-22-year-old-postgresql-type-confusion-primitive-into-rce-cve-2026-6460/",
      "permalink": "https://www.reddit.com/r/programming/comments/1xuk4d5/exploit_a_22_years_old_postgresql_compositetype/",
      "author": "/u/wtfse",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "&#32; submitted by &#32; /u/wtfse [link] &#32; [comments]",
      "published": "2026-11-12T18:12:49+00:00"
    },
    {
      "title": "Over-the-air updates come to NativePHP apps",
      "url": "https://youtu.be/2XQZkLyL0XI",
      "permalink": "https://www.reddit.com/r/programming/comments/1xu8mlk/overtheair_updates_come_to_nativephp_apps/",
      "author": "/u/nativephp_official",
      "subreddit": "programming",
      "score": null,
      "num_comments": null,
      "selftext": "PHP is known for being easy to deploy and has been battle-hardened over 30 years on the web. By contrast, mobile apps are infamous for being tough to deploy. Today, we bring PHP&#39;s ease of deployment to mobile apps, thanks to OTA builds in Bifrost and a free and open source plugin for your apps. Fully offline-first, native apps with the flexibility of PHP. That&#39;s SuperNative! &#32; submitted by &#32; /u/nativephp_official [link] &#32; [comments]",
      "published": "2026-11-12T09:43:46+00:00"
    }
  ]
}
- Fetching feeds...
{
  "source": "devto",
  "tag": "career",
  "sort": "top",
  "items": [
    {
      "title": "How did you end up in tech, and are you staying?",
      "description": "Last week you showed me where you code. This week I want to know how you ended up there in the first...",
      "url": "https://dev.to/maame-codes/how-did-you-end-up-in-tech-and-are-you-staying-4l9b",
      "tags": "discuss, career, beginners, watercooler",
      "reactions": 145,
      "comments": 56,
      "reading_time": 3,
      "author": "maame-codes"
    },
    {
      "title": "How do you truly stand out in Tech?",
      "description": "I am not going to lie to you, the market has been rough out there. There are layoffs across different...",
      "url": "https://dev.to/francistrdev/how-do-you-truly-stand-out-in-tech-478a",
      "tags": "discuss, community, productivity, career",
      "reactions": 173,
      "comments": 100,
      "reading_time": 8,
      "author": "francistrdev"
    },
    {
      "title": "Four Applications and One Ask. Guess Which One Scared Me.",
      "description": "Waitlisted once. Applied again anyway.   TL;DR: In one day I sent four applications: three AI...",
      "url": "https://dev.to/earlgreyhot1701d/four-applications-and-one-ask-guess-which-one-scared-me-2ia3",
      "tags": "ai, career, womenintech, discuss",
      "reactions": 14,
      "comments": 7,
      "reading_time": 4,
      "author": "earlgreyhot1701d"
    },
    {
      "title": "We Keep Hearing About AI Productivity. The QA Group Chat Told a Different Story.",
      "description": "An anonymous poll, a debate about multimodal testing, and some uncomfortable questions about who...",
      "url": "https://dev.to/xulingfeng/we-keep-hearing-about-ai-productivity-the-qa-group-chat-told-a-different-story-2nma",
      "tags": "ai, discuss, career, programming",
      "reactions": 107,
      "comments": 92,
      "reading_time": 12,
      "author": "xulingfeng"
    },
    {
      "title": "A gap is better than a guess",
      "description": "Building the labelled set everything else gets measured against, and the rule that made it usable: when you don't know, leave it blank.",
      "url": "https://dev.to/phpboyscout/a-gap-is-better-than-a-guess-51pd",
      "tags": "ai, career, agents, testing",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "phpboyscout"
    },
    {
      "title": "AI made practice tools cheaper. So why is deliberate practice still so rare?",
      "description": "Generating questions is free now. Getting better is not. The bottleneck was never content; it was feedback, difficulty and showing up.",
      "url": "https://dev.to/thiagolongom/ai-made-practice-tools-cheaper-so-why-is-deliberate-practice-still-so-rare-3def",
      "tags": "ai, discuss, learning, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "thiagolongom"
    },
    {
      "title": "Everyone promises AI will train the next generation of clinicians. Here are 7 questions I'd ask first.",
      "description": "AI tutors for medicine demo beautifully. Seven questions that separate a practice tool from a confident chatbot, and why they apply to coding tutors too.",
      "url": "https://dev.to/thiagolongom/everyone-promises-ai-will-train-the-next-generation-of-clinicians-here-are-7-questions-id-ask-5goo",
      "tags": "ai, discuss, career, learning",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "thiagolongom"
    },
    {
      "title": "Dal Lordo al Netto: Come Rendere Più Semplice il Calcolo dello Stipendio con gli Strumenti Digitali",
      "description": "When people receive a job offer, one of their first questions is usually simple: how much money will...",
      "url": "https://dev.to/ornella_lacqu_dd3c9340f1b67c88/dal-lordo-al-netto-come-rendere-piu-semplice-il-calcolo-dello-stipendio-con-gli-strumenti-digitali-499a",
      "tags": "webdev, programming, productivity, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "ornella_lacqu_dd3c9340f1b67c88"
    },
    {
      "title": "AWS CLF-C02 vs AIF-C01: Which Foundational Exam First?",
      "description": "AWS has two Foundational certifications that many people weigh up as a first step: AWS Certified...",
      "url": "https://dev.to/sajeevsebastian/aws-clf-c02-vs-aif-c01-which-foundational-exam-first-4gn4",
      "tags": "aws, certification, ai, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sajeevsebastian"
    },
    {
      "title": "Databricks Data Engineer Associate vs Professional",
      "description": "Databricks has two data engineering certifications: Data Engineer Associate and Data Engineer...",
      "url": "https://dev.to/sajeevsebastian/databricks-data-engineer-associate-vs-professional-6bb",
      "tags": "databricks, dataengineering, certification, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sajeevsebastian"
    }
  ]
}
```

