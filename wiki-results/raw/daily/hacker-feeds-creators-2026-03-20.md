# Hacker Feeds Outcomes - Creators

Generated on: 2026-03-20 06:33:38 UTC

Runtime note: executed with NODE_OPTIONS=--require /tmp/hf-polyfill.js

## 1. Hot Content Themes Today

**Query:** What content themes are hot today?

**Command:**
```bash
echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set' ; node bin/main.js --json reddit -t popular -s hot ; node bin/main.js --json devto -s top -c 10
```

**Output:**
```text
[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "devto",
  "tag": null,
  "sort": "top",
  "items": [
    {
      "title": "Congrats to the Winners of Our First DEV Weekend Challenge!",
      "description": "It's time!! We are thrilled to announce the winners of our first DEV Weekend Challenge.  The prompt...",
      "url": "https://dev.to/devteam/congrats-to-the-winners-of-our-first-dev-weekend-challenge-1gml",
      "tags": "ai, devchallenge, weekendchallenge, webdev",
      "reactions": 52,
      "comments": 12,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Vibe-coding in Google AI Studio: my tips to prompt better and create amazing apps",
      "description": "You might already know Google AI Studio as a sandbox to play with the Deepmind models and tinker with...",
      "url": "https://dev.to/googleai/vibe-coding-in-google-ai-studio-my-tips-to-prompt-better-and-create-amazing-apps-3kcp",
      "tags": "ai, vibecoding, gemini, promptengineering",
      "reactions": 37,
      "comments": 2,
      "reading_time": 12,
      "author": "giom_v"
    },
    {
      "title": "AI Vocab 101",
      "description": "Smart, curious people keep hitting the same wall with AI: they don't have the words to name what they don't understand. Here are the terms that turn vague frustration into specific, solvable problems.",
      "url": "https://dev.to/bekahhw/ai-vocab-101-eh2",
      "tags": "ai, beginners",
      "reactions": 6,
      "comments": 2,
      "reading_time": 6,
      "author": "bekahhw"
    },
    {
      "title": "We've Seen This Movie Before",
      "description": "I've been sitting on this comparison for a while, trying to decide if it was too obvious to write...",
      "url": "https://dev.to/wynandpieters/weve-seen-this-movie-before-3719",
      "tags": "ai, gamedev, programming",
      "reactions": 41,
      "comments": 2,
      "reading_time": 10,
      "author": "wynandpieters"
    },
    {
      "title": "I Think a Lot of Developers Are Quietly Grieving the Old Internet",
      "description": "I think a lot of developers are carrying a kind of grief right now, but rarely naming it.  Not...",
      "url": "https://dev.to/the_nortern_dev/i-think-a-lot-of-developers-are-quietly-grieving-the-old-internet-3d8",
      "tags": "discuss, webdev, programming, culture",
      "reactions": 196,
      "comments": 125,
      "reading_time": 2,
      "author": "the_nortern_dev"
    },
    {
      "title": "I Tried Vite+ and Replaced My Entire Frontend Toolchain",
      "description": "If you're a frontend developer in 2026, you've probably had to deal with a lot of different tooling....",
      "url": "https://dev.to/erikch/i-tried-vite-and-replaced-my-entire-frontend-toolchain-4cgb",
      "tags": "webdev, vite, frontend, javascript",
      "reactions": 22,
      "comments": 2,
      "reading_time": 9,
      "author": "erikch"
    },
    {
      "title": "Introducing the new full-stack vibe coding experience in Google AI Studio",
      "description": "Start building real apps for the modern web with the Antigravity coding agent along with Firebase...",
      "url": "https://dev.to/googleai/introducing-the-new-full-stack-vibe-coding-experience-in-google-ai-studio-471g",
      "tags": "ai, antigravity, agents, nextjs",
      "reactions": 41,
      "comments": 4,
      "reading_time": 4,
      "author": "kat_kampf"
    },
    {
      "title": "Vitest's 4.1 New \"Fast-Forward\" Mode Skips Timer Delays Instantly",
      "description": "An important property of tests is that they should be composable.  Here is an example. Say you have a...",
      "url": "https://dev.to/playfulprogramming-angular/vitests-41-new-fast-forward-mode-skips-timer-delays-instantly-4a4h",
      "tags": "webdev, javascript, testing, angular",
      "reactions": 29,
      "comments": 0,
      "reading_time": 3,
      "author": "younesjd"
    },
    {
      "title": "Should RubyGems/Bundler Have a Cooldown Feature?",
      "description": "I'm Hiroshi Shibata (hsbt), a Ruby committer and the maintainer of RubyGems and Bundler.          ...",
      "url": "https://dev.to/hsbt/should-rubygemsbundler-have-a-cooldown-feature-40cp",
      "tags": "ruby, security, supplychainsecurity, packaging",
      "reactions": 35,
      "comments": 3,
      "reading_time": 4,
      "author": "hsbt"
    },
    {
      "title": "Anki On My Wrist",
      "description": "I've long been interested in \"learning how to learn\" and have long been annoyed by how I have grown...",
      "url": "https://dev.to/matheusmaldaner/anki-on-my-wrist-3gi6",
      "tags": "learning, productivity, showdev, ai",
      "reactions": 24,
      "comments": 1,
      "reading_time": 4,
      "author": "matheusmaldaner"
    }
  ]
}
```

## 2. This Week AI + Web Content Ideas

**Query:** What should I make a video/post about this week in AI + web?

**Command:**
```bash
node bin/main.js --json github -s weekly -l javascript ; node bin/main.js --json devto -t ai -s top -c 10 ; node bin/main.js --json news -t 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "github",
  "since": "weekly",
  "language": "javascript",
  "items": [
    {
      "author": "pbakaus",
      "repo": "impeccable",
      "avatar": "https://github.com/pbakaus.png",
      "repo_link": "https://github.com/pbakaus/impeccable",
      "desc": "The design language that makes your AI harness better at design.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 424,
      "added_stars": 6432,
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
          "username": "glacierphonk",
          "href": "https://github.com/glacierphonk",
          "avatar": "https://avatars.githubusercontent.com/u/260244336"
        },
        {
          "username": "VaishnavGunjari",
          "href": "https://github.com/VaishnavGunjari",
          "avatar": "https://avatars.githubusercontent.com/u/169933825"
        },
        {
          "username": "whchi",
          "href": "https://github.com/whchi",
          "avatar": "https://avatars.githubusercontent.com/u/11798731"
        }
      ]
    },
    {
      "author": "andrewyng",
      "repo": "context-hub",
      "avatar": "https://github.com/andrewyng.png",
      "repo_link": "https://github.com/andrewyng/context-hub",
      "desc": "",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 945,
      "added_stars": 5237,
      "builtBy": [
        {
          "username": "rohitprasad15",
          "href": "https://github.com/rohitprasad15",
          "avatar": "https://avatars.githubusercontent.com/u/1796239"
        },
        {
          "username": "Ivanye2509",
          "href": "https://github.com/Ivanye2509",
          "avatar": "https://avatars.githubusercontent.com/u/91228630"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "danielhorvath-cleo",
          "href": "https://github.com/danielhorvath-cleo",
          "avatar": "https://avatars.githubusercontent.com/u/147529159"
        },
        {
          "username": "neilthomass",
          "href": "https://github.com/neilthomass",
          "avatar": "https://avatars.githubusercontent.com/u/195538237"
        }
      ]
    },
    {
      "author": "jarrodwatts",
      "repo": "claude-hud",
      "avatar": "https://github.com/jarrodwatts.png",
      "repo_link": "https://github.com/jarrodwatts/claude-hud",
      "desc": "A Claude Code plugin that shows what's happening - context usage, active tools, running agents, and todo progress",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 366,
      "added_stars": 3674,
      "builtBy": [
        {
          "username": "jarrodwatts",
          "href": "https://github.com/jarrodwatts",
          "avatar": "https://avatars.githubusercontent.com/u/35651410"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "melon-hub",
          "href": "https://github.com/melon-hub",
          "avatar": "https://avatars.githubusercontent.com/u/53302110"
        }
      ]
    },
    {
      "author": "affaan-m",
      "repo": "everything-claude-code",
      "avatar": "https://github.com/affaan-m.png",
      "repo_link": "https://github.com/affaan-m/everything-claude-code",
      "desc": "The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 11643,
      "added_stars": 14298,
      "builtBy": [
        {
          "username": "affaan-m",
          "href": "https://github.com/affaan-m",
          "avatar": "https://avatars.githubusercontent.com/u/124439313"
        },
        {
          "username": "pangerlkr",
          "href": "https://github.com/pangerlkr",
          "avatar": "https://avatars.githubusercontent.com/u/73515951"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shimo4228",
          "href": "https://github.com/shimo4228",
          "avatar": "https://avatars.githubusercontent.com/u/54734315"
        }
      ]
    },
    {
      "author": "gsd-build",
      "repo": "get-shit-done",
      "avatar": "https://github.com/gsd-build.png",
      "repo_link": "https://github.com/gsd-build/get-shit-done",
      "desc": "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2978,
      "added_stars": 7165,
      "builtBy": [
        {
          "username": "glittercowboy",
          "href": "https://github.com/glittercowboy",
          "avatar": "https://avatars.githubusercontent.com/u/186001655"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "trek-e",
          "href": "https://github.com/trek-e",
          "avatar": "https://avatars.githubusercontent.com/u/4738965"
        },
        {
          "username": "Tibsfox",
          "href": "https://github.com/Tibsfox",
          "avatar": "https://avatars.githubusercontent.com/u/537551"
        },
        {
          "username": "Solvely-Colin",
          "href": "https://github.com/Solvely-Colin",
          "avatar": "https://avatars.githubusercontent.com/u/211764741"
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
      "forks": 784,
      "added_stars": 583,
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
          "username": "AstralFlare-owo",
          "href": "https://github.com/AstralFlare-owo",
          "avatar": "https://avatars.githubusercontent.com/u/46892455"
        }
      ]
    },
    {
      "author": "Wei-Shaw",
      "repo": "claude-relay-service",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/claude-relay-service",
      "desc": "CRS-自建Claude Code镜像，一站式开源中转服务，让 Claude、OpenAI、Gemini、Droid 订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1508,
      "added_stars": 448,
      "builtBy": [
        {
          "username": "Wei-Shaw",
          "href": "https://github.com/Wei-Shaw",
          "avatar": "https://avatars.githubusercontent.com/u/26101719"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "f3n9",
          "href": "https://github.com/f3n9",
          "avatar": "https://avatars.githubusercontent.com/u/663221"
        },
        {
          "username": "kevinconan",
          "href": "https://github.com/kevinconan",
          "avatar": "https://avatars.githubusercontent.com/u/3772409"
        }
      ]
    },
    {
      "author": "FreeTubeApp",
      "repo": "FreeTube",
      "avatar": "https://github.com/FreeTubeApp.png",
      "repo_link": "https://github.com/FreeTubeApp/FreeTube",
      "desc": "An Open Source YouTube app for privacy",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1364,
      "added_stars": 142,
      "builtBy": [
        {
          "username": "absidue",
          "href": "https://github.com/absidue",
          "avatar": "https://avatars.githubusercontent.com/u/48293849"
        },
        {
          "username": "PrestonN",
          "href": "https://github.com/PrestonN",
          "avatar": "https://avatars.githubusercontent.com/u/9736046"
        },
        {
          "username": "efb4f5ff-1298-471a-8973-3d47447115dc",
          "href": "https://github.com/efb4f5ff-1298-471a-8973-3d47447115dc",
          "avatar": "https://avatars.githubusercontent.com/u/73130443"
        },
        {
          "username": "PikachuEXE",
          "href": "https://github.com/PikachuEXE",
          "avatar": "https://avatars.githubusercontent.com/u/1018543"
        }
      ]
    },
    {
      "author": "ComposioHQ",
      "repo": "awesome-claude-plugins",
      "avatar": "https://github.com/ComposioHQ.png",
      "repo_link": "https://github.com/ComposioHQ/awesome-claude-plugins",
      "desc": "A curated list of Plugins that let you extend Claude Code with custom commands, agents, hooks, and MCP servers through the plugin system.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 222,
      "added_stars": 57,
      "builtBy": [
        {
          "username": "Prat011",
          "href": "https://github.com/Prat011",
          "avatar": "https://avatars.githubusercontent.com/u/67639393"
        },
        {
          "username": "sujayjayjay",
          "href": "https://github.com/sujayjayjay",
          "avatar": "https://avatars.githubusercontent.com/u/84703335"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "mksglu",
          "href": "https://github.com/mksglu",
          "avatar": "https://avatars.githubusercontent.com/u/6067714"
        },
        {
          "username": "SebConejo",
          "href": "https://github.com/SebConejo",
          "avatar": "https://avatars.githubusercontent.com/u/11723962"
        }
      ]
    },
    {
      "author": "tabler",
      "repo": "tabler-icons",
      "avatar": "https://github.com/tabler.png",
      "repo_link": "https://github.com/tabler/tabler-icons",
      "desc": "A set of over 5900 free MIT-licensed high-quality SVG icons for you to use in your web projects.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1099,
      "added_stars": 114,
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
          "username": "BG-Software-BG",
          "href": "https://github.com/BG-Software-BG",
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
      "author": "coreyhaines31",
      "repo": "marketingskills",
      "avatar": "https://github.com/coreyhaines31.png",
      "repo_link": "https://github.com/coreyhaines31/marketingskills",
      "desc": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 2221,
      "added_stars": 1813,
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
          "username": "Jiliac",
          "href": "https://github.com/Jiliac",
          "avatar": "https://avatars.githubusercontent.com/u/5956866"
        },
        {
          "username": "bensabic",
          "href": "https://github.com/bensabic",
          "avatar": "https://avatars.githubusercontent.com/u/27636870"
        },
        {
          "username": "Ray0907",
          "href": "https://github.com/Ray0907",
          "avatar": "https://avatars.githubusercontent.com/u/29456968"
        }
      ]
    },
    {
      "author": "jaywcjlove",
      "repo": "awesome-mac",
      "avatar": "https://github.com/jaywcjlove.png",
      "repo_link": "https://github.com/jaywcjlove/awesome-mac",
      "desc": " Now we have become very big, Different from the original idea. Collect premium software in various categories.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 7504,
      "added_stars": 522,
      "builtBy": [
        {
          "username": "jaywcjlove",
          "href": "https://github.com/jaywcjlove",
          "avatar": "https://avatars.githubusercontent.com/u/1680273"
        },
        {
          "username": "alichtman",
          "href": "https://github.com/alichtman",
          "avatar": "https://avatars.githubusercontent.com/u/20600565"
        },
        {
          "username": "xcv58",
          "href": "https://github.com/xcv58",
          "avatar": "https://avatars.githubusercontent.com/u/503123"
        },
        {
          "username": "heldev",
          "href": "https://github.com/heldev",
          "avatar": "https://avatars.githubusercontent.com/u/16080436"
        }
      ]
    },
    {
      "author": "decolua",
      "repo": "9router",
      "avatar": "https://github.com/decolua.png",
      "repo_link": "https://github.com/decolua/9router",
      "desc": "Connect All AI Code Tools (Claude Code, Cursor, Antigravity, Copilot, Codex, Gemini, OpenCode, Cline, OpenClaw...) to 40+ AI Providers & 100+ Models",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 308,
      "added_stars": 238,
      "builtBy": [
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
          "username": "catalinstanciu",
          "href": "https://github.com/catalinstanciu",
          "avatar": "https://avatars.githubusercontent.com/u/5753427"
        },
        {
          "username": "Blade096",
          "href": "https://github.com/Blade096",
          "avatar": "https://avatars.githubusercontent.com/u/46746496"
        },
        {
          "username": "decolua",
          "href": "https://github.com/decolua",
          "avatar": "https://avatars.githubusercontent.com/u/8282593"
        }
      ]
    },
    {
      "author": "hakimel",
      "repo": "reveal.js",
      "avatar": "https://github.com/hakimel.png",
      "repo_link": "https://github.com/hakimel/reveal.js",
      "desc": "The HTML Presentation Framework",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 16806,
      "added_stars": 95,
      "builtBy": [
        {
          "username": "hakimel",
          "href": "https://github.com/hakimel",
          "avatar": "https://avatars.githubusercontent.com/u/629429"
        },
        {
          "username": "VonC",
          "href": "https://github.com/VonC",
          "avatar": "https://avatars.githubusercontent.com/u/79478"
        },
        {
          "username": "mischah",
          "href": "https://github.com/mischah",
          "avatar": "https://avatars.githubusercontent.com/u/441011"
        },
        {
          "username": "bnjmnt4n",
          "href": "https://github.com/bnjmnt4n",
          "avatar": "https://avatars.githubusercontent.com/u/813865"
        },
        {
          "username": "davidbanham",
          "href": "https://github.com/davidbanham",
          "avatar": "https://avatars.githubusercontent.com/u/631832"
        }
      ]
    },
    {
      "author": "fishjar",
      "repo": "kiss-translator",
      "avatar": "https://github.com/fishjar.png",
      "repo_link": "https://github.com/fishjar/kiss-translator",
      "desc": "A simple, open source bilingual translation extension & Greasemonkey script (一个简约、开源的 双语对照翻译扩展 & 油猴脚本)",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 383,
      "added_stars": 75,
      "builtBy": [
        {
          "username": "fishjar",
          "href": "https://github.com/fishjar",
          "avatar": "https://avatars.githubusercontent.com/u/1157624"
        },
        {
          "username": "htyxyt",
          "href": "https://github.com/htyxyt",
          "avatar": "https://avatars.githubusercontent.com/u/62530172"
        },
        {
          "username": "XYenon",
          "href": "https://github.com/XYenon",
          "avatar": "https://avatars.githubusercontent.com/u/20698483"
        },
        {
          "username": "hoilc",
          "href": "https://github.com/hoilc",
          "avatar": "https://avatars.githubusercontent.com/u/9067094"
        },
        {
          "username": "maou-shonen",
          "href": "https://github.com/maou-shonen",
          "avatar": "https://avatars.githubusercontent.com/u/22576780"
        }
      ]
    }
  ]
}
- Fetching feeds...
{
  "source": "devto",
  "tag": "ai",
  "sort": "top",
  "items": [
    {
      "title": "Congrats to the Winners of Our First DEV Weekend Challenge!",
      "description": "It's time!! We are thrilled to announce the winners of our first DEV Weekend Challenge.  The prompt...",
      "url": "https://dev.to/devteam/congrats-to-the-winners-of-our-first-dev-weekend-challenge-1gml",
      "tags": "ai, devchallenge, weekendchallenge, webdev",
      "reactions": 52,
      "comments": 12,
      "reading_time": 2,
      "author": "jess"
    },
    {
      "title": "Congrats to the \"Built with Google Gemini: Writing Challenge\" Winners!",
      "description": "The results are in! We are thrilled to announce the winners of the Built with Google Gemini: Writing...",
      "url": "https://dev.to/devteam/congrats-to-the-built-with-google-gemini-writing-challenge-winners-5ej6",
      "tags": "geminireflections, gemini, ai, devchallenge",
      "reactions": 60,
      "comments": 13,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "Vibe-coding in Google AI Studio: my tips to prompt better and create amazing apps",
      "description": "You might already know Google AI Studio as a sandbox to play with the Deepmind models and tinker with...",
      "url": "https://dev.to/googleai/vibe-coding-in-google-ai-studio-my-tips-to-prompt-better-and-create-amazing-apps-3kcp",
      "tags": "ai, vibecoding, gemini, promptengineering",
      "reactions": 37,
      "comments": 2,
      "reading_time": 12,
      "author": "giom_v"
    },
    {
      "title": "Your Agent Is Making Decisions Nobody Authorized",
      "description": "A quant fund ran five independent strategies. Every one passed its individual risk limits. Every...",
      "url": "https://dev.to/dannwaneri/your-agent-is-making-decisions-nobody-authorized-2bc7",
      "tags": "ai, webdev, architecture, discuss",
      "reactions": 17,
      "comments": 11,
      "reading_time": 7,
      "author": "dannwaneri"
    },
    {
      "title": "AI Vocab 101",
      "description": "Smart, curious people keep hitting the same wall with AI: they don't have the words to name what they don't understand. Here are the terms that turn vague frustration into specific, solvable problems.",
      "url": "https://dev.to/bekahhw/ai-vocab-101-eh2",
      "tags": "ai, beginners",
      "reactions": 6,
      "comments": 2,
      "reading_time": 6,
      "author": "bekahhw"
    },
    {
      "title": "We've Seen This Movie Before",
      "description": "I've been sitting on this comparison for a while, trying to decide if it was too obvious to write...",
      "url": "https://dev.to/wynandpieters/weve-seen-this-movie-before-3719",
      "tags": "ai, gamedev, programming",
      "reactions": 41,
      "comments": 2,
      "reading_time": 10,
      "author": "wynandpieters"
    },
    {
      "title": "Sub Agent that executes Claude AI CLI requirements in a work-pipeline",
      "description": "TL;DR   I built uctm (Universal Claude Task Manager) — an npm package that...",
      "url": "https://dev.to/ucjung/sub-agent-that-executes-claude-ai-cli-requirements-in-a-work-pipeline-3lpk",
      "tags": "claudecode, ai, agents, opensource",
      "reactions": 1,
      "comments": 0,
      "reading_time": 5,
      "author": "ucjung"
    },
    {
      "title": "Introducing the new full-stack vibe coding experience in Google AI Studio",
      "description": "Start building real apps for the modern web with the Antigravity coding agent along with Firebase...",
      "url": "https://dev.to/googleai/introducing-the-new-full-stack-vibe-coding-experience-in-google-ai-studio-471g",
      "tags": "ai, antigravity, agents, nextjs",
      "reactions": 41,
      "comments": 4,
      "reading_time": 4,
      "author": "kat_kampf"
    },
    {
      "title": "How I Built Aegis — A Credential Isolation Proxy for AI Agents",
      "description": "AI agents are getting really good at calling APIs. But the way we usually give them access — pasting...",
      "url": "https://dev.to/sjwarren91/how-i-built-aegis-a-credential-isolation-proxy-for-ai-agents-3bgb",
      "tags": "showdev, typescript, ai, security",
      "reactions": 2,
      "comments": 3,
      "reading_time": 5,
      "author": "sjwarren91"
    },
    {
      "title": "How to Stop My Agent from Getting Me Fired",
      "description": "This is fiction. For now.  I have an AI agent connected to my email and Slack. It can read...",
      "url": "https://dev.to/aws/how-to-stop-my-agent-from-getting-me-fired-5amc",
      "tags": "agents, mcp, security, ai",
      "reactions": 30,
      "comments": 4,
      "reading_time": 10,
      "author": "mikegcaws"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "bookstore-romeo",
      "descendants": 17,
      "id": 47450478,
      "kids": [
        47451167,
        47450921,
        47450986,
        47451014,
        47450859,
        47450824,
        47450925,
        47450973
      ],
      "score": 101,
      "time": 1773980651,
      "title": "ArXiv Declares Independence from Cornell",
      "type": "story",
      "url": "https://www.science.org/content/article/arxiv-pioneering-preprint-server-declares-independence-cornell"
    },
    {
      "by": "jasonjmcghee",
      "descendants": 156,
      "id": 47448524,
      "kids": [
        47448763,
        47448676,
        47448740,
        47448680,
        47450922,
        47449000,
        47450517,
        47449738,
        47449332,
        47448625,
        47449388,
        47450667,
        47450548,
        47448726,
        47450410,
        47449015,
        47449274,
        47449064,
        47449655,
        47449089,
        47448714,
        47450613,
        47449652,
        47448724,
        47448732,
        47448985,
        47450379,
        47449010,
        47448943,
        47449565,
        47449302,
        47449004,
        47448720,
        47449408,
        47448692,
        47449071
      ],
      "score": 291,
      "time": 1773966128,
      "title": "Push events into a running session with channels",
      "type": "story",
      "url": "https://code.claude.com/docs/en/channels"
    },
    {
      "by": "0xedb",
      "descendants": 746,
      "id": 47442690,
      "kids": [
        47446446,
        47444880,
        47443929,
        47443835,
        47446418,
        47451164,
        47444793,
        47450849,
        47443820,
        47451091,
        47450704,
        47444257,
        47451035,
        47447686,
        47448749,
        47448409,
        47443971,
        47445191,
        47444475,
        47448446,
        47443915,
        47446743,
        47450071,
        47447392,
        47445607,
        47445745,
        47450566,
        47444401,
        47450499,
        47446914,
        47447796,
        47447922,
        47445948,
        47444842,
        47449528,
        47446019,
        47450650,
        47447581,
        47448197,
        47444697,
        47449608,
        47450003,
        47449717,
        47449186,
        47448879,
        47450230,
        47446383,
        47443116,
        47445812,
        47445595,
        47446193,
        47445205,
        47444472,
        47450174,
        47444772,
        47445027,
        47446771,
        47448990,
        47449448,
        47443980,
        47446552,
        47448192,
        47446036,
        47447832,
        47445037,
        47446296,
        47446724,
        47443181,
        47444996,
        47447160,
        47446617,
        47447732,
        47444423,
        47450060,
        47445289,
        47449238,
        47446052,
        47446401,
        47446123,
        47447566,
        47445804,
        47449795,
        47449556,
        47445623,
        47445124,
        47445545,
        47443925,
        47448171,
        47448113,
        47446007,
        47447920,
        47446891,
        47446528,
        47446169,
        47445132,
        47448428,
        47444536,
        47445906,
        47446150,
        47444011,
        47448513,
        47443899,
        47446579,
        47445708,
        47447372,
        47445887,
        47444205,
        47444956
      ],
      "score": 671,
      "text": "<a href=\"https:&#x2F;&#x2F;android-developers.googleblog.com&#x2F;2026&#x2F;03&#x2F;android-developer-verification.html\" rel=\"nofollow\">https:&#x2F;&#x2F;android-developers.googleblog.com&#x2F;2026&#x2F;03&#x2F;android-de...</a>",
      "time": 1773940564,
      "title": "Google details new 24-hour process to sideload unverified Android apps",
      "type": "story",
      "url": "https://arstechnica.com/gadgets/2026/03/google-details-new-24-hour-process-to-sideload-unverified-android-apps/"
    },
    {
      "by": "nyxgeek",
      "descendants": 18,
      "id": 47448994,
      "kids": [
        47450296,
        47449829,
        47450462,
        47449934,
        47450924,
        47450712,
        47450990,
        47450884,
        47451136,
        47450631,
        47450190,
        47451119
      ],
      "score": 95,
      "time": 1773968985,
      "title": "Full Disclosure: A Third (and Fourth) Azure Sign-In Log Bypass Found",
      "type": "story",
      "url": "https://trustedsec.com/blog/full-disclosure-a-third-and-fourth-azure-sign-in-log-bypass-found"
    },
    {
      "by": "robotnikman",
      "descendants": 46,
      "id": 47448566,
      "kids": [
        47450005,
        47451101,
        47451185,
        47450565,
        47449168,
        47449491,
        47451041,
        47450678,
        47449174,
        47450446,
        47450552,
        47450851,
        47449681,
        47449734,
        47449115,
        47450533,
        47449511,
        47449305,
        47449706,
        47449224,
        47449193,
        47449167,
        47449104,
        47449724,
        47450000,
        47449477,
        47449884,
        47449777,
        47449277
      ],
      "score": 114,
      "time": 1773966407,
      "title": "Drugwars for the TI-82/83/83 Calculators (2011)",
      "type": "story",
      "url": "https://gist.github.com/mattmanning/1002653/b7a1e88479a10eaae3bd5298b8b2c86e16fb4404"
    },
    {
      "by": "PaulHoule",
      "descendants": 42,
      "id": 47406160,
      "kids": [
        47444554,
        47445725,
        47451024,
        47445295,
        47448059,
        47444005,
        47445166,
        47448514,
        47445630,
        47444082,
        47443989,
        47444339,
        47447855,
        47450370,
        47448413,
        47447757,
        47444007,
        47447989,
        47447822,
        47449160,
        47448579
      ],
      "score": 305,
      "time": 1773701773,
      "title": "Return of the Obra Dinn: spherical mapped dithering for a 1bpp first-person game",
      "type": "story",
      "url": "https://forums.tigsource.com/index.php?topic=40832.msg1363742#msg1363742"
    },
    {
      "by": "greedo",
      "descendants": 94,
      "id": 47416972,
      "kids": [
        47447083,
        47451094,
        47449844,
        47446538,
        47447665,
        47447628,
        47450173,
        47450708,
        47447175,
        47450216,
        47446411,
        47447800,
        47450633,
        47448344,
        47446494,
        47446812,
        47449781,
        47447162,
        47449270,
        47447383,
        47447943
      ],
      "score": 180,
      "time": 1773775184,
      "title": "How the Turner twins are mythbusting modern technical apparel",
      "type": "story",
      "url": "https://www.carryology.com/insights/how-the-turner-twins-are-mythbusting-modern-gear/"
    },
    {
      "by": "rohan_joshi",
      "descendants": 146,
      "id": 47441546,
      "kids": [
        47448356,
        47442196,
        47448182,
        47449764,
        47445231,
        47447271,
        47450951,
        47447368,
        47442295,
        47445234,
        47445835,
        47450937,
        47449779,
        47443934,
        47450645,
        47448275,
        47447805,
        47442901,
        47449292,
        47449822,
        47444097,
        47446647,
        47442179,
        47442384,
        47443898,
        47443199,
        47443172,
        47443006,
        47442080,
        47442362,
        47443609,
        47443815,
        47442112,
        47443921,
        47449268,
        47444301,
        47444201,
        47442899,
        47442127,
        47445907,
        47445666,
        47447994,
        47449326,
        47449021,
        47446988,
        47445013,
        47444236,
        47445560,
        47448873,
        47443529,
        47447049
      ],
      "score": 382,
      "text": "Kitten TTS (<a href=\"https:&#x2F;&#x2F;github.com&#x2F;KittenML&#x2F;KittenTTS\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;KittenML&#x2F;KittenTTS</a>) is an open-source series of tiny and expressive text-to-speech models for on-device applications. We had a thread last year here: <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=44807868\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=44807868</a>.<p>Today we&#x27;re releasing three new models with 80M, 40M and 14M parameters.<p>The largest model (80M) has the highest quality. The 14M variant reaches new SOTA in expressivity among similar sized models, despite being &lt;25MB in size. This release is a major upgrade from the previous one and supports English text-to-speech applications in eight voices: four male and four female.<p>Here&#x27;s a short demo: <a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=ge3u5qblqZA\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=ge3u5qblqZA</a>.<p>Most models are quantized to int8 + fp16, and they use ONNX for runtime. Our models are designed to run anywhere eg. raspberry pi, low-end smartphones, wearables, browsers etc. No GPU required! This release aims to bridge the gap between on-device and cloud models for tts applications. Multi-lingual model release is coming soon.<p>On-device AI is bottlenecked by one thing: a lack of tiny models that actually perform. Our goal is to open-source more models to run production-ready voice agents and apps entirely on-device.<p>We would love your feedback!",
      "time": 1773935766,
      "title": "Show HN: Three new Kitten TTS models – smallest less than 25MB",
      "type": "story",
      "url": "https://github.com/KittenML/KittenTTS"
    },
    {
      "by": "modinfo",
      "descendants": 130,
      "id": 47445599,
      "kids": [
        47450030,
        47447626,
        47447480,
        47446964,
        47447230,
        47446216,
        47445972,
        47445990,
        47449658,
        47447782,
        47447651,
        47449988,
        47446035,
        47446133,
        47449110,
        47446277,
        47447114,
        47447398,
        47450964,
        47448725,
        47449929,
        47447136,
        47446030,
        47449906,
        47446039,
        47447745,
        47447041,
        47448690,
        47447728,
        47450031,
        47447630,
        47447858,
        47447101,
        47448545,
        47450680,
        47447099,
        47447646,
        47446413,
        47448407,
        47446960,
        47446864,
        47448078,
        47449287,
        47448107
      ],
      "score": 222,
      "time": 1773952382,
      "title": "Cockpit is a web-based graphical interface for servers",
      "type": "story",
      "url": "https://github.com/cockpit-project/cockpit"
    },
    {
      "by": "mosura",
      "descendants": 552,
      "id": 47440430,
      "kids": [
        47444931,
        47444422,
        47443130,
        47443289,
        47443837,
        47443033,
        47443003,
        47444397,
        47443516,
        47443330,
        47443338,
        47447809,
        47444797,
        47450791,
        47443293,
        47448388,
        47444563,
        47445473,
        47447497,
        47444090,
        47450494,
        47443789,
        47443606,
        47448631,
        47443521,
        47448583,
        47443057,
        47446935,
        47445344,
        47446563,
        47443836,
        47448754,
        47447662,
        47446598,
        47450744,
        47446727,
        47445512,
        47447340,
        47443097,
        47443983,
        47450840,
        47441202,
        47447132,
        47446094,
        47449369,
        47445386,
        47444943,
        47444566,
        47443759,
        47450207,
        47443120,
        47446769,
        47443552,
        47445799,
        47443237,
        47443738,
        47444585,
        47448895,
        47446258,
        47448768,
        47443812,
        47443361,
        47443822,
        47442954,
        47444553
      ],
      "score": 330,
      "text": "<a href=\"https:&#x2F;&#x2F;www.ofcom.org.uk&#x2F;online-safety&#x2F;illegal-and-harmful-content&#x2F;4chan-fined-450000-for-not-protecting-children-from-online-pornography\" rel=\"nofollow\">https:&#x2F;&#x2F;www.ofcom.org.uk&#x2F;online-safety&#x2F;illegal-and-harmful-c...</a>",
      "time": 1773931585,
      "title": "4Chan mocks £520k fine for UK online safety breaches",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/c624330lg1ko"
    }
  ]
}
```

## 3. Product Launches to Review/React

**Query:** What products launched that I can review or react to?

**Command:**
```bash
echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set' ; node bin/main.js --json reddit -t startups -s new
```

**Output:**
```text
[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set
- Fetching feeds...
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
```

## 4. Current Tech Debate Talking Points

**Query:** What talking points are tech people debating right now?

**Command:**
```bash
node bin/main.js --json news -t 12 ; node bin/main.js --json lobsters -s hottest -c 10
```

**Output:**
```text
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "bookstore-romeo",
      "descendants": 17,
      "id": 47450478,
      "kids": [
        47451167,
        47450921,
        47450986,
        47451014,
        47450859,
        47450824,
        47450925,
        47450973
      ],
      "score": 101,
      "time": 1773980651,
      "title": "ArXiv Declares Independence from Cornell",
      "type": "story",
      "url": "https://www.science.org/content/article/arxiv-pioneering-preprint-server-declares-independence-cornell"
    },
    {
      "by": "jasonjmcghee",
      "descendants": 156,
      "id": 47448524,
      "kids": [
        47448763,
        47448676,
        47448740,
        47448680,
        47450922,
        47449000,
        47450517,
        47449738,
        47449332,
        47448625,
        47449388,
        47450667,
        47450548,
        47448726,
        47450410,
        47449015,
        47449274,
        47449064,
        47449655,
        47449089,
        47448714,
        47450613,
        47449652,
        47448724,
        47448732,
        47448985,
        47450379,
        47449010,
        47448943,
        47449565,
        47449302,
        47449004,
        47448720,
        47449408,
        47448692,
        47449071
      ],
      "score": 291,
      "time": 1773966128,
      "title": "Push events into a running session with channels",
      "type": "story",
      "url": "https://code.claude.com/docs/en/channels"
    },
    {
      "by": "0xedb",
      "descendants": 746,
      "id": 47442690,
      "kids": [
        47446446,
        47444880,
        47443929,
        47443835,
        47446418,
        47451164,
        47444793,
        47450849,
        47443820,
        47451091,
        47450704,
        47444257,
        47451035,
        47447686,
        47448749,
        47448409,
        47443971,
        47445191,
        47444475,
        47448446,
        47443915,
        47446743,
        47450071,
        47447392,
        47445607,
        47445745,
        47450566,
        47444401,
        47450499,
        47446914,
        47447796,
        47447922,
        47445948,
        47444842,
        47449528,
        47446019,
        47450650,
        47447581,
        47448197,
        47444697,
        47449608,
        47450003,
        47449717,
        47449186,
        47448879,
        47450230,
        47446383,
        47443116,
        47445812,
        47445595,
        47446193,
        47445205,
        47444472,
        47450174,
        47444772,
        47445027,
        47446771,
        47448990,
        47449448,
        47443980,
        47446552,
        47448192,
        47446036,
        47447832,
        47445037,
        47446296,
        47446724,
        47443181,
        47444996,
        47447160,
        47446617,
        47447732,
        47444423,
        47450060,
        47445289,
        47449238,
        47446052,
        47446401,
        47446123,
        47447566,
        47445804,
        47449795,
        47449556,
        47445623,
        47445124,
        47445545,
        47443925,
        47448171,
        47448113,
        47446007,
        47447920,
        47446891,
        47446528,
        47446169,
        47445132,
        47448428,
        47444536,
        47445906,
        47446150,
        47444011,
        47448513,
        47443899,
        47446579,
        47445708,
        47447372,
        47445887,
        47444205,
        47444956
      ],
      "score": 671,
      "text": "<a href=\"https:&#x2F;&#x2F;android-developers.googleblog.com&#x2F;2026&#x2F;03&#x2F;android-developer-verification.html\" rel=\"nofollow\">https:&#x2F;&#x2F;android-developers.googleblog.com&#x2F;2026&#x2F;03&#x2F;android-de...</a>",
      "time": 1773940564,
      "title": "Google details new 24-hour process to sideload unverified Android apps",
      "type": "story",
      "url": "https://arstechnica.com/gadgets/2026/03/google-details-new-24-hour-process-to-sideload-unverified-android-apps/"
    },
    {
      "by": "nyxgeek",
      "descendants": 18,
      "id": 47448994,
      "kids": [
        47450296,
        47449829,
        47450462,
        47449934,
        47450924,
        47450712,
        47450990,
        47450884,
        47451136,
        47450631,
        47450190,
        47451119
      ],
      "score": 95,
      "time": 1773968985,
      "title": "Full Disclosure: A Third (and Fourth) Azure Sign-In Log Bypass Found",
      "type": "story",
      "url": "https://trustedsec.com/blog/full-disclosure-a-third-and-fourth-azure-sign-in-log-bypass-found"
    },
    {
      "by": "robotnikman",
      "descendants": 46,
      "id": 47448566,
      "kids": [
        47450005,
        47451101,
        47451185,
        47450565,
        47449168,
        47449491,
        47451041,
        47450678,
        47449174,
        47450446,
        47450552,
        47450851,
        47449681,
        47449734,
        47449115,
        47450533,
        47449511,
        47449305,
        47449706,
        47449224,
        47449193,
        47449167,
        47449104,
        47449724,
        47450000,
        47449477,
        47449884,
        47449777,
        47449277
      ],
      "score": 114,
      "time": 1773966407,
      "title": "Drugwars for the TI-82/83/83 Calculators (2011)",
      "type": "story",
      "url": "https://gist.github.com/mattmanning/1002653/b7a1e88479a10eaae3bd5298b8b2c86e16fb4404"
    },
    {
      "by": "PaulHoule",
      "descendants": 42,
      "id": 47406160,
      "kids": [
        47444554,
        47445725,
        47451024,
        47445295,
        47448059,
        47444005,
        47445166,
        47448514,
        47445630,
        47444082,
        47443989,
        47444339,
        47447855,
        47450370,
        47448413,
        47447757,
        47444007,
        47447989,
        47447822,
        47449160,
        47448579
      ],
      "score": 305,
      "time": 1773701773,
      "title": "Return of the Obra Dinn: spherical mapped dithering for a 1bpp first-person game",
      "type": "story",
      "url": "https://forums.tigsource.com/index.php?topic=40832.msg1363742#msg1363742"
    },
    {
      "by": "greedo",
      "descendants": 94,
      "id": 47416972,
      "kids": [
        47447083,
        47451094,
        47449844,
        47446538,
        47447665,
        47447628,
        47450173,
        47450708,
        47447175,
        47450216,
        47446411,
        47447800,
        47450633,
        47448344,
        47446494,
        47446812,
        47449781,
        47447162,
        47449270,
        47447383,
        47447943
      ],
      "score": 180,
      "time": 1773775184,
      "title": "How the Turner twins are mythbusting modern technical apparel",
      "type": "story",
      "url": "https://www.carryology.com/insights/how-the-turner-twins-are-mythbusting-modern-gear/"
    },
    {
      "by": "rohan_joshi",
      "descendants": 146,
      "id": 47441546,
      "kids": [
        47448356,
        47442196,
        47448182,
        47449764,
        47445231,
        47447271,
        47450951,
        47447368,
        47442295,
        47445234,
        47445835,
        47450937,
        47449779,
        47443934,
        47450645,
        47448275,
        47447805,
        47442901,
        47449292,
        47449822,
        47444097,
        47446647,
        47442179,
        47442384,
        47443898,
        47443199,
        47443172,
        47443006,
        47442080,
        47442362,
        47443609,
        47443815,
        47442112,
        47443921,
        47449268,
        47444301,
        47444201,
        47442899,
        47442127,
        47445907,
        47445666,
        47447994,
        47449326,
        47449021,
        47446988,
        47445013,
        47444236,
        47445560,
        47448873,
        47443529,
        47447049
      ],
      "score": 382,
      "text": "Kitten TTS (<a href=\"https:&#x2F;&#x2F;github.com&#x2F;KittenML&#x2F;KittenTTS\" rel=\"nofollow\">https:&#x2F;&#x2F;github.com&#x2F;KittenML&#x2F;KittenTTS</a>) is an open-source series of tiny and expressive text-to-speech models for on-device applications. We had a thread last year here: <a href=\"https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=44807868\">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=44807868</a>.<p>Today we&#x27;re releasing three new models with 80M, 40M and 14M parameters.<p>The largest model (80M) has the highest quality. The 14M variant reaches new SOTA in expressivity among similar sized models, despite being &lt;25MB in size. This release is a major upgrade from the previous one and supports English text-to-speech applications in eight voices: four male and four female.<p>Here&#x27;s a short demo: <a href=\"https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=ge3u5qblqZA\" rel=\"nofollow\">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=ge3u5qblqZA</a>.<p>Most models are quantized to int8 + fp16, and they use ONNX for runtime. Our models are designed to run anywhere eg. raspberry pi, low-end smartphones, wearables, browsers etc. No GPU required! This release aims to bridge the gap between on-device and cloud models for tts applications. Multi-lingual model release is coming soon.<p>On-device AI is bottlenecked by one thing: a lack of tiny models that actually perform. Our goal is to open-source more models to run production-ready voice agents and apps entirely on-device.<p>We would love your feedback!",
      "time": 1773935766,
      "title": "Show HN: Three new Kitten TTS models – smallest less than 25MB",
      "type": "story",
      "url": "https://github.com/KittenML/KittenTTS"
    },
    {
      "by": "modinfo",
      "descendants": 130,
      "id": 47445599,
      "kids": [
        47450030,
        47447626,
        47447480,
        47446964,
        47447230,
        47446216,
        47445972,
        47445990,
        47449658,
        47447782,
        47447651,
        47449988,
        47446035,
        47446133,
        47449110,
        47446277,
        47447114,
        47447398,
        47450964,
        47448725,
        47449929,
        47447136,
        47446030,
        47449906,
        47446039,
        47447745,
        47447041,
        47448690,
        47447728,
        47450031,
        47447630,
        47447858,
        47447101,
        47448545,
        47450680,
        47447099,
        47447646,
        47446413,
        47448407,
        47446960,
        47446864,
        47448078,
        47449287,
        47448107
      ],
      "score": 222,
      "time": 1773952382,
      "title": "Cockpit is a web-based graphical interface for servers",
      "type": "story",
      "url": "https://github.com/cockpit-project/cockpit"
    },
    {
      "by": "mosura",
      "descendants": 552,
      "id": 47440430,
      "kids": [
        47444931,
        47444422,
        47443130,
        47443289,
        47443837,
        47443033,
        47443003,
        47444397,
        47443516,
        47443330,
        47443338,
        47447809,
        47444797,
        47450791,
        47443293,
        47448388,
        47444563,
        47445473,
        47447497,
        47444090,
        47450494,
        47443789,
        47443606,
        47448631,
        47443521,
        47448583,
        47443057,
        47446935,
        47445344,
        47446563,
        47443836,
        47448754,
        47447662,
        47446598,
        47450744,
        47446727,
        47445512,
        47447340,
        47443097,
        47443983,
        47450840,
        47441202,
        47447132,
        47446094,
        47449369,
        47445386,
        47444943,
        47444566,
        47443759,
        47450207,
        47443120,
        47446769,
        47443552,
        47445799,
        47443237,
        47443738,
        47444585,
        47448895,
        47446258,
        47448768,
        47443812,
        47443361,
        47443822,
        47442954,
        47444553
      ],
      "score": 330,
      "text": "<a href=\"https:&#x2F;&#x2F;www.ofcom.org.uk&#x2F;online-safety&#x2F;illegal-and-harmful-content&#x2F;4chan-fined-450000-for-not-protecting-children-from-online-pornography\" rel=\"nofollow\">https:&#x2F;&#x2F;www.ofcom.org.uk&#x2F;online-safety&#x2F;illegal-and-harmful-c...</a>",
      "time": 1773931585,
      "title": "4Chan mocks £520k fine for UK online safety breaches",
      "type": "story",
      "url": "https://www.bbc.com/news/articles/c624330lg1ko"
    },
    {
      "by": "od0",
      "descendants": 24,
      "id": 47443588,
      "kids": [
        47443908,
        47444633,
        47444336,
        47446792,
        47446096,
        47448366,
        47447213,
        47444114,
        47446745,
        47446079
      ],
      "score": 181,
      "time": 1773944235,
      "title": "Noq: n0's new QUIC implementation in Rust",
      "type": "story",
      "url": "https://www.iroh.computer/blog/noq-announcement"
    },
    {
      "by": "ibraheemdev",
      "descendants": 802,
      "id": 47438723,
      "kids": [
        47439404,
        47441792,
        47439151,
        47439129,
        47439241,
        47439532,
        47439625,
        47439666,
        47438931,
        47439281,
        47439075,
        47450832,
        47439214,
        47446286,
        47450900,
        47439449,
        47443887,
        47439725,
        47441135,
        47439740,
        47439836,
        47439446,
        47450800,
        47439198,
        47439264,
        47439334,
        47447550,
        47440868,
        47443522,
        47441009,
        47443383,
        47440320,
        47441086,
        47450719,
        47440730,
        47439094,
        47439116,
        47439471,
        47450113,
        47439822,
        47440396,
        47443909,
        47439788,
        47448547,
        47441460,
        47440996,
        47439174,
        47439142,
        47439802,
        47448309,
        47441487,
        47449207,
        47439371,
        47443363,
        47439395,
        47441070,
        47440089,
        47439185,
        47443387,
        47442683,
        47440779,
        47439392,
        47439157,
        47439199,
        47443796,
        47440368,
        47439590,
        47440663,
        47449720,
        47446357,
        47440605,
        47440980,
        47439716,
        47441494,
        47439376,
        47441434,
        47440025,
        47442485,
        47439276,
        47444277,
        47445425,
        47439547,
        47444345,
        47440847,
        47439192,
        47439211,
        47441049,
        47441794,
        47440210,
        47439844,
        47443171,
        47439425,
        47440159,
        47450306,
        47443519,
        47439110,
        47442915,
        47440059,
        47445807,
        47445732,
        47444504,
        47441072,
        47442229,
        47439349,
        47439430,
        47449968,
        47443718,
        47440851,
        47440231,
        47443093,
        47440029,
        47444665,
        47443558,
        47440218,
        47441310,
        47440574,
        47439197,
        47440017,
        47439884,
        47440963,
        47442853,
        47439452,
        47440186,
        47444348,
        47442533,
        47439321,
        47439429,
        47441131,
        47439843,
        47440895,
        47442014,
        47441933,
        47440816,
        47441387,
        47442727,
        47447128,
        47439599,
        47440005,
        47440558,
        47441996,
        47442649,
        47439782,
        47440803,
        47440522,
        47440213,
        47441114,
        47441590,
        47443320,
        47441533,
        47441380,
        47441054,
        47444630,
        47439656,
        47439396,
        47439297,
        47439386,
        47442046,
        47442881,
        47439468,
        47441259,
        47442809,
        47445924,
        47439969,
        47439492,
        47443217,
        47439344,
        47440434,
        47448641,
        47439554,
        47444752,
        47445021,
        47442110,
        47444237,
        47442905,
        47440894,
        47438797,
        47441713,
        47442584,
        47439473,
        47441105,
        47442383,
        47441191,
        47440289,
        47443429,
        47439877,
        47439892,
        47440945,
        47439160,
        47439280,
        47439332,
        47439368
      ],
      "score": 1305,
      "text": "<a href=\"https:&#x2F;&#x2F;openai.com&#x2F;index&#x2F;openai-to-acquire-astral&#x2F;\" rel=\"nofollow\">https:&#x2F;&#x2F;openai.com&#x2F;index&#x2F;openai-to-acquire-astral&#x2F;</a>",
      "time": 1773925550,
      "title": "Astral to Join OpenAI",
      "type": "story",
      "url": "https://astral.sh/blog/openai"
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
      "title": "Things That Turbo Pascal is Smaller Than (2011)",
      "url": "https://prog21.dadgum.com/116.html",
      "score": 42,
      "comments": 23,
      "tags": [
        "programming",
        "retrocomputing"
      ],
      "id": "nzg621"
    },
    {
      "title": "Android developer verification: Balancing openness and choice with safety",
      "url": "https://android-developers.googleblog.com/2026/03/android-developer-verification.html",
      "score": 33,
      "comments": 21,
      "tags": [
        "android",
        "security"
      ],
      "id": "g1ktjl"
    },
    {
      "title": "Getting Ziggy With It – Re: Factor",
      "url": "https://re.factorcode.org/2026/03/getting-ziggy-with-it.html",
      "score": 31,
      "comments": 4,
      "tags": [
        "concatenative",
        "zig"
      ],
      "id": "3qhmza"
    },
    {
      "title": "AI's impact on mathematics is analogous to the car's impact on cities",
      "url": "https://mathstodon.xyz/@tao/116252708577614828",
      "score": 30,
      "comments": 12,
      "tags": [
        "ai",
        "math"
      ],
      "id": "nfkpw4"
    },
    {
      "title": "To be a better programmer, write little proofs in your head (2025)",
      "url": "https://blog.get-nerve.com/to-be-a-better-programmer-write-little-proofs-in-your-head/",
      "score": 6,
      "comments": 2,
      "tags": [
        "practices",
        "programming"
      ],
      "id": "hjr72q"
    },
    {
      "title": "No Semicolons Needed",
      "url": "https://terts.dev/blog/no-semicolons-needed/",
      "score": 49,
      "comments": 16,
      "tags": [
        "plt"
      ],
      "id": "09wmcz"
    },
    {
      "title": "Root from the parking lot: OpenWRT XSS through SSID scanning (CVE-2026-32721)",
      "url": "https://mxsasha.eu/posts/openwrt-ssid-xss-to-root/",
      "score": 26,
      "comments": 2,
      "tags": [
        "security"
      ],
      "id": "vteijd"
    },
    {
      "title": "How many branches can your CPU predict?",
      "url": "https://lemire.me/blog/2026/03/18/how-many-branches-can-your-cpu-predict/",
      "score": 15,
      "comments": 1,
      "tags": [
        "hardware"
      ],
      "id": "5d6qru"
    },
    {
      "title": "What Languages is Arthur Whitney Style Code Possible in?",
      "url": "",
      "score": 4,
      "comments": 2,
      "tags": [
        "apl",
        "ask"
      ],
      "id": "s40j01"
    },
    {
      "title": "The 49MB Web Page",
      "url": "https://thatshubham.com/blog/news-audit",
      "score": 54,
      "comments": 4,
      "tags": [
        "web"
      ],
      "id": "vba3az"
    }
  ]
}
```

