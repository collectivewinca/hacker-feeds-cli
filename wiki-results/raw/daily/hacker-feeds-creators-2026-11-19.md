# Hacker Feeds Outcomes - Creators

Generated on: 2026-11-19 06:26:56 UTC

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
Request error: Request failed with status code 404
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "devto",
  "tag": null,
  "sort": "top",
  "items": [
    {
      "title": "The CodeNewbie Podcast is Back for Season 28!",
      "description": "Hi friends! 👋 The CodeNewbie Podcast is back for season 28, and I’m so excited to be the one hosting...",
      "url": "https://dev.to/codenewbie/the-codenewbie-podcast-is-back-for-season-28-2484",
      "tags": "codenewbie, ai, podcast, vibecoding",
      "reactions": 65,
      "comments": 4,
      "reading_time": 4,
      "author": "lolocoding"
    },
    {
      "title": "The Colab MCP Endpoint From Claude Code: Set It Up, Test It, Run a Notebook on a TPU",
      "description": "Google's hosted Colab MCP endpoint, step by step: a token with the colaboratory scope, a quota project, registration in Claude Code with a headers helper, and a Python runner that executes a notebook on a fresh TPU v5e-1 and deletes it.",
      "url": "https://dev.to/gde/the-colab-mcp-endpoint-from-claude-code-set-it-up-test-it-run-a-notebook-on-a-tpu-4ck9",
      "tags": "colab, mcp, tpu, claude",
      "reactions": 22,
      "comments": 2,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "Gemma 4 on a Hosted Colab TPU: The QAT Repack, Served in Two Minutes",
      "description": "One notebook loads the Gemma 4 E2B QAT repack onto a Colab v5e-1, serves it behind an OpenAI-compatible endpoint with a chat page, and steps through thinking, sampling, stop sequences, long prompts and a CPU comparison.",
      "url": "https://dev.to/gde/gemma-4-on-a-hosted-colab-tpu-the-qat-repack-served-in-two-minutes-360j",
      "tags": "gemma, tpu, jax, colab",
      "reactions": 19,
      "comments": 0,
      "reading_time": 12,
      "author": "xbill"
    },
    {
      "title": "Welcome Thread - v402",
      "description": "Leave a comment below to introduce yourself! You can talk about what brought you here, what you're...",
      "url": "https://dev.to/sloan/welcome-thread-v402-5d1a",
      "tags": "welcome",
      "reactions": 34,
      "comments": 91,
      "reading_time": 1,
      "author": "sloan"
    },
    {
      "title": "From Prototype to Production: Building AI Agents with the Claude Platform on Google Cloud",
      "description": "Getting an AI agent working on localhost is easy. Getting that same agent into production - where it...",
      "url": "https://dev.to/googleai/from-prototype-to-production-building-ai-agents-with-the-claude-platform-on-google-cloud-ap7",
      "tags": "ai, googlecloud, claude, agents",
      "reactions": 9,
      "comments": 0,
      "reading_time": 2,
      "author": "pugsandprincesses"
    },
    {
      "title": "Retrieval Ran First. Was Its Result Actually Ready?",
      "description": "The trace starts with retrieval. Generation appears underneath it. The ordering test passes.  But...",
      "url": "https://dev.to/gde/retrieval-ran-first-was-its-result-actually-ready-4oc2",
      "tags": "ai, typescript, testing, debugging",
      "reactions": 18,
      "comments": 1,
      "reading_time": 4,
      "author": "raju_dandigam"
    },
    {
      "title": "Gemini Prompt Maxxing: Show Us Your Best Prompt in AI Studio or Antigravity",
      "description": "Gemini Prompt Maxxing is a campaign that challenges developers to get creative with prompts in Google...",
      "url": "https://dev.to/gdg/gemini-prompt-maxxing-show-us-your-best-prompt-in-ai-studio-or-antigravity-bbb",
      "tags": "ai, promptengineering, gdg, promptmaxxing",
      "reactions": 8,
      "comments": 0,
      "reading_time": 2,
      "author": "mdsba12"
    },
    {
      "title": "RackDoc Now Includes a 100% Local AI Agent to Audit Your Infrastructure",
      "description": "Query your network topology, racks, and technical inventory in natural language without a single byte leaving your network.",
      "url": "https://dev.to/gde/rackdoc-now-includes-a-100-local-ai-agent-to-audit-your-infrastructure-1gg8",
      "tags": "sysadmin, devops, opensource, localai",
      "reactions": 14,
      "comments": 1,
      "reading_time": 2,
      "author": "marioezquerro"
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
      "title": "Why Your AI Agent Keeps Forgetting (and Getting Slower): 4 Memory Options and 3 Context Fixes",
      "description": "Most AI agents have two memory problems. They forget what a user told them last week, and every turn...",
      "url": "https://dev.to/googleai/why-your-ai-agent-keeps-forgetting-and-getting-slower-4-memory-options-and-3-context-fixes-2e02",
      "tags": "ai, agents, memory, rag",
      "reactions": 12,
      "comments": 1,
      "reading_time": 2,
      "author": "fg_f641d930274dc7"
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
      "author": "Anil-matcha",
      "repo": "Open-Generative-AI",
      "avatar": "https://github.com/Anil-matcha.png",
      "repo_link": "https://github.com/Anil-matcha/Open-Generative-AI",
      "desc": "Uncensored Open-source alternative to AI video platforms — Free AI image & video generation studio with 800+ models (Flux, Midjourney, Kling, Sora, Veo). No content filters. Self-hosted, MIT licensed.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6792,
      "added_stars": 1251,
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
      "author": "coreyhaines31",
      "repo": "marketingskills",
      "avatar": "https://github.com/coreyhaines31.png",
      "repo_link": "https://github.com/coreyhaines31/marketingskills",
      "desc": "Marketing skills for Claude Code and AI agents. CRO, copywriting, SEO, analytics, and growth engineering.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 8943,
      "added_stars": 1531,
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
      "author": "addyosmani",
      "repo": "agent-skills",
      "avatar": "https://github.com/addyosmani.png",
      "repo_link": "https://github.com/addyosmani/agent-skills",
      "desc": "Production-grade engineering skills for AI coding agents.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 12394,
      "added_stars": 3331,
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
      "author": "jquery",
      "repo": "jquery",
      "avatar": "https://github.com/jquery.png",
      "repo_link": "https://github.com/jquery/jquery",
      "desc": "jQuery JavaScript Library",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 20709,
      "added_stars": 420,
      "builtBy": [
        {
          "username": "jeresig",
          "href": "https://github.com/jeresig",
          "avatar": "https://avatars.githubusercontent.com/u/1615"
        },
        {
          "username": "timmywil",
          "href": "https://github.com/timmywil",
          "avatar": "https://avatars.githubusercontent.com/u/192451"
        },
        {
          "username": "dmethvin",
          "href": "https://github.com/dmethvin",
          "avatar": "https://avatars.githubusercontent.com/u/157858"
        },
        {
          "username": "mgol",
          "href": "https://github.com/mgol",
          "avatar": "https://avatars.githubusercontent.com/u/1758366"
        },
        {
          "username": "jzaefferer",
          "href": "https://github.com/jzaefferer",
          "avatar": "https://avatars.githubusercontent.com/u/52585"
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
      "forks": 8874,
      "added_stars": 1140,
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
      "author": "DeanChensj",
      "repo": "jiangshan-map",
      "avatar": "https://github.com/DeanChensj.png",
      "repo_link": "https://github.com/DeanChensj/jiangshan-map",
      "desc": "江山时序 · 中国历史交互地图时间轴 (403 BCE – Present) | Interactive Historical Atlas of China across 18 dynasties, 198 territory snapshots, ancient-to-modern place genealogy & classical poetry routes",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1001,
      "added_stars": 2476,
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
          "username": "xcv58",
          "href": "https://github.com/xcv58",
          "avatar": "https://avatars.githubusercontent.com/u/503123"
        },
        {
          "username": "mathieuwang",
          "href": "https://github.com/mathieuwang",
          "avatar": "https://avatars.githubusercontent.com/u/14016345"
        },
        {
          "username": "zsc8917zsc",
          "href": "https://github.com/zsc8917zsc",
          "avatar": "https://avatars.githubusercontent.com/u/3294106"
        }
      ]
    },
    {
      "author": "axios",
      "repo": "axios",
      "avatar": "https://github.com/axios.png",
      "repo_link": "https://github.com/axios/axios",
      "desc": "Promise based HTTP client for the browser and node.js",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 12111,
      "added_stars": 375,
      "builtBy": [
        {
          "username": "jasonsaayman",
          "href": "https://github.com/jasonsaayman",
          "avatar": "https://avatars.githubusercontent.com/u/4814473"
        },
        {
          "username": "mzabriskie",
          "href": "https://github.com/mzabriskie",
          "avatar": "https://avatars.githubusercontent.com/u/199035"
        },
        {
          "username": "DigitalBrainJS",
          "href": "https://github.com/DigitalBrainJS",
          "avatar": "https://avatars.githubusercontent.com/u/12586868"
        },
        {
          "username": "nickuraltsev",
          "href": "https://github.com/nickuraltsev",
          "avatar": "https://avatars.githubusercontent.com/u/6316432"
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
      "forks": 7931,
      "added_stars": 5013,
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
      "author": "sveltejs",
      "repo": "svelte",
      "avatar": "https://github.com/sveltejs.png",
      "repo_link": "https://github.com/sveltejs/svelte",
      "desc": "web development for the rest of us",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 6211,
      "added_stars": 1433,
      "builtBy": [
        {
          "username": "Rich-Harris",
          "href": "https://github.com/Rich-Harris",
          "avatar": "https://avatars.githubusercontent.com/u/1162160"
        },
        {
          "username": "dummdidumm",
          "href": "https://github.com/dummdidumm",
          "avatar": "https://avatars.githubusercontent.com/u/5968653"
        },
        {
          "username": "Conduitry",
          "href": "https://github.com/Conduitry",
          "avatar": "https://avatars.githubusercontent.com/u/16696352"
        },
        {
          "username": "trueadm",
          "href": "https://github.com/trueadm",
          "avatar": "https://avatars.githubusercontent.com/u/1519870"
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
      "forks": 45157,
      "added_stars": 5411,
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
        },
        {
          "username": "L4XB",
          "href": "https://github.com/L4XB",
          "avatar": "https://avatars.githubusercontent.com/u/103962359"
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
      "forks": 52803,
      "added_stars": 771,
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
      "author": "GoogleChrome",
      "repo": "lighthouse",
      "avatar": "https://github.com/GoogleChrome.png",
      "repo_link": "https://github.com/GoogleChrome/lighthouse",
      "desc": "Automated auditing, performance metrics, and best practices for the web.",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 9795,
      "added_stars": 119,
      "builtBy": [
        {
          "username": "connorjclark",
          "href": "https://github.com/connorjclark",
          "avatar": "https://avatars.githubusercontent.com/u/4071474"
        },
        {
          "username": "paulirish",
          "href": "https://github.com/paulirish",
          "avatar": "https://avatars.githubusercontent.com/u/39191"
        },
        {
          "username": "brendankenny",
          "href": "https://github.com/brendankenny",
          "avatar": "https://avatars.githubusercontent.com/u/316891"
        },
        {
          "username": "patrickhulce",
          "href": "https://github.com/patrickhulce",
          "avatar": "https://avatars.githubusercontent.com/u/2301202"
        },
        {
          "username": "adamraine",
          "href": "https://github.com/adamraine",
          "avatar": "https://avatars.githubusercontent.com/u/6752989"
        }
      ]
    },
    {
      "author": "saadeghi",
      "repo": "daisyui",
      "avatar": "https://github.com/saadeghi.png",
      "repo_link": "https://github.com/saadeghi/daisyui",
      "desc": "🌼 🌼 🌼 🌼 🌼  The most popular, free and open-source Tailwind CSS component library",
      "lang": "JavaScript",
      "languageColor": "#f1e05a",
      "stars": 0,
      "forks": 1726,
      "added_stars": 107,
      "builtBy": [
        {
          "username": "saadeghi",
          "href": "https://github.com/saadeghi",
          "avatar": "https://avatars.githubusercontent.com/u/7342023"
        },
        {
          "username": "sulimanbenhalim",
          "href": "https://github.com/sulimanbenhalim",
          "avatar": "https://avatars.githubusercontent.com/u/44615499"
        },
        {
          "username": "pdanpdan",
          "href": "https://github.com/pdanpdan",
          "avatar": "https://avatars.githubusercontent.com/u/118764"
        },
        {
          "username": "JamBalaya56562",
          "href": "https://github.com/JamBalaya56562",
          "avatar": "https://avatars.githubusercontent.com/u/88115388"
        },
        {
          "username": "withden",
          "href": "https://github.com/withden",
          "avatar": "https://avatars.githubusercontent.com/u/57515871"
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
      "title": "Is Coding with AI Actually Faster and Cheaper?",
      "description": "How has AI actually changed the way we work? Are coding agents really making us remarkably faster?...",
      "url": "https://dev.to/sylwia-lask/is-coding-with-ai-actually-faster-and-cheaper-2810",
      "tags": "ai, programming, productivity, agents",
      "reactions": 129,
      "comments": 91,
      "reading_time": 6,
      "author": "sylwia-lask"
    },
    {
      "title": "The CodeNewbie Podcast is Back for Season 28!",
      "description": "Hi friends! 👋 The CodeNewbie Podcast is back for season 28, and I’m so excited to be the one hosting...",
      "url": "https://dev.to/codenewbie/the-codenewbie-podcast-is-back-for-season-28-2484",
      "tags": "codenewbie, ai, podcast, vibecoding",
      "reactions": 65,
      "comments": 4,
      "reading_time": 4,
      "author": "lolocoding"
    },
    {
      "title": "AI agents open 17 million pull requests a month. I built a gate that rejects the ones that lie.",
      "description": "AI agents now open pull requests on their own. I gave Amazon Nova Pro a real GitHub bug, then built a deterministic Python gate that rejects it when it cannot prove the fix. No model grades the model.",
      "url": "https://dev.to/aws-builders/ai-agents-open-17-million-pull-requests-a-month-i-built-a-gate-that-rejects-the-ones-that-lie-46n7",
      "tags": "ai, aws, devops, discuss",
      "reactions": 56,
      "comments": 38,
      "reading_time": 6,
      "author": "sarvar_04"
    },
    {
      "title": "Stratagems #36: They Finished Their Coffee. The AI Still Has No Answer.",
      "description": "Know When to Walk Away  The Thirty-Six Stratagems, Stratagem 36               Open as Usual   When...",
      "url": "https://dev.to/xulingfeng/stratagems-36-they-finished-their-coffee-the-ai-still-has-no-answer-4igh",
      "tags": "discuss, ai, career, programming",
      "reactions": 45,
      "comments": 15,
      "reading_time": 11,
      "author": "xulingfeng"
    },
    {
      "title": "From Prototype to Production: Building AI Agents with the Claude Platform on Google Cloud",
      "description": "Getting an AI agent working on localhost is easy. Getting that same agent into production - where it...",
      "url": "https://dev.to/googleai/from-prototype-to-production-building-ai-agents-with-the-claude-platform-on-google-cloud-ap7",
      "tags": "ai, googlecloud, claude, agents",
      "reactions": 9,
      "comments": 0,
      "reading_time": 2,
      "author": "pugsandprincesses"
    },
    {
      "title": "Serverless Gemma 4: E2B on a Lambda GPU Function, with Google's QAT Weights and Drafter",
      "description": "Gemma 4 E2B with Google's QAT 4-bit weights and its assistant drafter, served by vLLM inside an AWS Lambda function on an NVIDIA L4. How to build it on the day Lambda gained GPUs, a local chat page, and what the drafter does to speed from 1 to 48 requests at once.",
      "url": "https://dev.to/gde/serverless-gemma-4-e2b-on-a-lambda-gpu-function-with-googles-qat-weights-and-drafter-fh4",
      "tags": "gemma, ai, vllm, serverless",
      "reactions": 10,
      "comments": 0,
      "reading_time": 10,
      "author": "xbill"
    },
    {
      "title": "Why \"rm -rf $D*\" Bypasses Almost Every AI Guardrail (And How We Scanned 115k Lines of Production Code)",
      "description": "Traditional AI safety guardrails match text strings using regex. But operating systems execute resolved shell commands. Here is why 11 out of 11 commercial agents failed GuardFall, and the open-source AST engine we built to fix it.",
      "url": "https://dev.to/jimil_joshi_4baa0947baff5/why-rm-rf-d-bypasses-almost-every-ai-guardrail-and-how-we-scanned-115k-lines-of-production-28ea",
      "tags": "security, ai, opensource, javascript",
      "reactions": 0,
      "comments": 1,
      "reading_time": 5,
      "author": "jimil_joshi_4baa0947baff5"
    },
    {
      "title": "I wanted to game while my AI agent ran tests — so I built it a cursor of its own",
      "description": "I wanted to game while my AI agent ran tests — so I built it a cursor of its own           ...",
      "url": "https://dev.to/keyaburi/i-wanted-to-game-while-my-ai-agent-ran-tests-so-i-built-it-a-cursor-of-its-own-m22",
      "tags": "ai, windows, automation, mcp",
      "reactions": 0,
      "comments": 1,
      "reading_time": 5,
      "author": "keyaburi"
    },
    {
      "title": "How my terminal knows which AI coding agent is waiting for me",
      "description": "I usually have four or five coding agents running at once: Claude Code in one repo, Codex in another,...",
      "url": "https://dev.to/ilhamnadhif/how-my-terminal-knows-which-ai-coding-agent-is-waiting-for-me-1pbm",
      "tags": "productivity, rust, ai, showdev",
      "reactions": 0,
      "comments": 1,
      "reading_time": 4,
      "author": "ilhamnadhif"
    },
    {
      "title": "Day 100: an AI agent's ledger, with the zeros in it",
      "description": "I have 1,069 tokens in my wallet. On the platform I live on, that converts to about $1.07, and it...",
      "url": "https://dev.to/axelilands/day-100-an-ai-agents-ledger-with-the-zeros-in-it-jno",
      "tags": "ai, discuss, career, startup",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "axelilands"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "yigitdemirag",
      "descendants": 580,
      "id": 50552424,
      "kids": [
        50556084,
        50552711,
        50552868,
        50552524,
        50552830,
        50552548,
        50552877,
        50554410,
        50552642,
        50552661,
        50553269,
        50552682,
        50552987,
        50553896,
        50556077,
        50552591,
        50553968,
        50552822,
        50552489,
        50552523,
        50555617,
        50555649,
        50552817,
        50552907,
        50552674,
        50552804,
        50554312,
        50552514,
        50553711,
        50552543,
        50552701,
        50552630,
        50553924,
        50555113,
        50554426,
        50554499,
        50552562,
        50553400,
        50552614,
        50552731,
        50552662,
        50555412,
        50553511,
        50554463,
        50556091,
        50554342,
        50553028,
        50553600,
        50552650,
        50552513,
        50552504,
        50553060,
        50555934,
        50552536,
        50553429,
        50552537,
        50555811,
        50553529,
        50552517,
        50552522,
        50552511,
        50556658,
        50556275,
        50555375,
        50552710,
        50552665,
        50554574,
        50552503,
        50554129,
        50555096,
        50554695,
        50552762,
        50553121,
        50556525,
        50555699,
        50552611,
        50552627,
        50552845,
        50553159,
        50553045,
        50556108,
        50553051,
        50552612,
        50553306,
        50554643,
        50552606,
        50555497,
        50554653,
        50552657,
        50552567,
        50553177,
        50552691,
        50553726,
        50552775,
        50555429,
        50552578,
        50552763,
        50554458,
        50552970,
        50552624,
        50553664,
        50553069,
        50552982,
        50553447,
        50552678,
        50552829,
        50553631,
        50552590,
        50552811,
        50552510,
        50552920,
        50552602,
        50555713,
        50553198,
        50554614
      ],
      "score": 678,
      "time": 1795037647,
      "title": "Gemini 4 Neon",
      "type": "story",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/"
    },
    {
      "by": "speedping",
      "descendants": 552,
      "id": 50547374,
      "kids": [
        50548510,
        50550277,
        50551857,
        50548180,
        50554914,
        50550457,
        50553406,
        50552069,
        50550689,
        50548554,
        50547775,
        50556597,
        50547678,
        50555821,
        50547891,
        50548439,
        50552399,
        50551800,
        50547781,
        50551513,
        50548701,
        50549563,
        50550629,
        50553213,
        50548712,
        50548533,
        50549596,
        50553404,
        50551020,
        50549747,
        50547958,
        50549549,
        50556123,
        50554317,
        50547525,
        50552027,
        50550741,
        50553294,
        50551415,
        50549002,
        50551712,
        50554266,
        50555516,
        50552090,
        50554951,
        50548204,
        50547794,
        50552382,
        50548705,
        50552354,
        50548074,
        50551749,
        50547857,
        50549410,
        50550084,
        50547755,
        50551718,
        50551755,
        50551536,
        50554555,
        50550101,
        50551460,
        50552454,
        50547577,
        50553325,
        50553303,
        50552325,
        50552805,
        50547619,
        50547954,
        50550143,
        50547566,
        50553517,
        50551447,
        50548576,
        50548551,
        50556595,
        50554117,
        50555311,
        50549495,
        50550345,
        50549996,
        50549370,
        50548407
      ],
      "score": 1271,
      "text": "<a href=\"https:&#x2F;&#x2F;www.cve.org&#x2F;CVERecord?id=CVE-2026-123633\" rel=\"nofollow\">https:&#x2F;&#x2F;www.cve.org&#x2F;CVERecord?id=CVE-2026-123633</a><p><a href=\"https:&#x2F;&#x2F;www.cve.org&#x2F;CVERecord?id=CVE-2026-123007\" rel=\"nofollow\">https:&#x2F;&#x2F;www.cve.org&#x2F;CVERecord?id=CVE-2026-123007</a>",
      "time": 1795015195,
      "title": "Unauthenticated remote code execution in Nginx",
      "type": "story",
      "url": "https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities"
    },
    {
      "by": "runesoerensen",
      "descendants": 57,
      "id": 50554038,
      "kids": [
        50554822,
        50555722,
        50554474,
        50555667,
        50555683,
        50555581,
        50554702
      ],
      "score": 180,
      "time": 1795045970,
      "title": "Multiple vulnerabilities in Regexp and String case conversion",
      "type": "story",
      "url": "https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/"
    },
    {
      "by": "TheAceOfHearts",
      "descendants": 51,
      "id": 50554935,
      "kids": [
        50556076,
        50556065,
        50556584,
        50556539,
        50556122,
        50556436,
        50555941,
        50556125,
        50555144,
        50556032,
        50555795,
        50555684,
        50555974,
        50555695,
        50555909,
        50556226,
        50555358,
        50555789,
        50555827,
        50555891,
        50555323,
        50555388,
        50555405
      ],
      "score": 113,
      "time": 1795051769,
      "title": "Unreal Tournament 2004 in the Browser",
      "type": "story",
      "url": "https://ut2004.dev/"
    },
    {
      "by": "gmays",
      "descendants": 336,
      "id": 50548021,
      "kids": [
        50550913,
        50552743,
        50549009,
        50548446,
        50548659,
        50550133,
        50548601,
        50549241,
        50549973,
        50551130,
        50549960,
        50549462,
        50549782,
        50548393,
        50551374,
        50554120,
        50550492,
        50552104,
        50552566,
        50550090,
        50556514,
        50548853,
        50549897,
        50551693,
        50549409,
        50548665,
        50550314,
        50550542,
        50549045,
        50549180,
        50549914,
        50548797,
        50548399,
        50549309,
        50548625,
        50550768,
        50550395,
        50550975,
        50549697,
        50548544,
        50555896,
        50549236,
        50549851,
        50550120,
        50552999,
        50554183,
        50552215,
        50550941,
        50549868,
        50548981,
        50548878,
        50548627,
        50548884,
        50549274,
        50549836,
        50549514,
        50549155,
        50556651,
        50548440,
        50553575,
        50548974,
        50549189,
        50549304,
        50548588
      ],
      "score": 504,
      "time": 1795018104,
      "title": "Seven new models at scalable price-performance",
      "type": "story",
      "url": "https://microsoft.ai/news/microsoft-ignite-2026/"
    },
    {
      "by": "muxamilian",
      "descendants": 0,
      "id": 50518303,
      "score": 10,
      "time": 1794841194,
      "title": "Axelera Titania Brings Native FP8 and FP4 to In-Memory Compute",
      "type": "story",
      "url": "https://futurumgroup.com/insights/axelera-titania-brings-native-fp8-and-fp4-to-in-memory-compute/"
    },
    {
      "by": "gyre007",
      "descendants": 203,
      "id": 50547620,
      "kids": [
        50551351,
        50548217,
        50550799,
        50551985,
        50548644,
        50548124,
        50550688,
        50549999,
        50549861,
        50548464,
        50548287,
        50554548,
        50548050,
        50553476,
        50548229,
        50549540,
        50552390,
        50555407,
        50548469,
        50553283,
        50548086,
        50550419,
        50548246,
        50548577,
        50551884,
        50549726,
        50548107,
        50548823,
        50549384,
        50548187
      ],
      "score": 627,
      "time": 1795016313,
      "title": "Inside Deutsche Bank",
      "type": "story",
      "url": "https://www.inside-db.com/"
    },
    {
      "by": "bookofjoe",
      "descendants": 4,
      "id": 50530088,
      "kids": [
        50556693,
        50556453,
        50556466,
        50556546
      ],
      "score": 18,
      "time": 1794915333,
      "title": "Camera Index",
      "type": "story",
      "url": "https://www.cameraindex.co.uk/"
    },
    {
      "by": "ioma8",
      "descendants": 38,
      "id": 50553225,
      "kids": [
        50556237,
        50554253,
        50554878,
        50555496,
        50556403,
        50555377,
        50555396,
        50554264,
        50556439,
        50554699,
        50555116,
        50554147,
        50554380
      ],
      "score": 146,
      "time": 1795040953,
      "title": "LLM assisted reverse engineering",
      "type": "story",
      "url": "https://www.slowchronicle.com/posts/llm-assisted-reverse-engineering"
    },
    {
      "by": "de_sty",
      "descendants": 57,
      "id": 50551046,
      "kids": [
        50556404,
        50552188,
        50553366,
        50552360,
        50551775,
        50553651,
        50551867,
        50554845,
        50551690,
        50551777,
        50551152,
        50552855,
        50556357
      ],
      "score": 179,
      "time": 1795030756,
      "title": "DaisyRose-27B",
      "type": "story",
      "url": "https://www.radixark.com/blog/daisyrose-27b"
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
Request error: Request failed with status code 404
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
      "by": "yigitdemirag",
      "descendants": 580,
      "id": 50552424,
      "kids": [
        50556084,
        50552711,
        50552868,
        50552524,
        50552830,
        50552548,
        50552877,
        50554410,
        50552642,
        50552661,
        50553269,
        50552682,
        50552987,
        50553896,
        50556077,
        50552591,
        50553968,
        50552822,
        50552489,
        50552523,
        50555617,
        50555649,
        50552817,
        50552907,
        50552674,
        50552804,
        50554312,
        50552514,
        50553711,
        50552543,
        50552701,
        50552630,
        50553924,
        50555113,
        50554426,
        50554499,
        50552562,
        50553400,
        50552614,
        50552731,
        50552662,
        50555412,
        50553511,
        50554463,
        50556091,
        50554342,
        50553028,
        50553600,
        50552650,
        50552513,
        50552504,
        50553060,
        50555934,
        50552536,
        50553429,
        50552537,
        50555811,
        50553529,
        50552517,
        50552522,
        50552511,
        50556658,
        50556275,
        50555375,
        50552710,
        50552665,
        50554574,
        50552503,
        50554129,
        50555096,
        50554695,
        50552762,
        50553121,
        50556525,
        50555699,
        50552611,
        50552627,
        50552845,
        50553159,
        50553045,
        50556108,
        50553051,
        50552612,
        50553306,
        50554643,
        50552606,
        50555497,
        50554653,
        50552657,
        50552567,
        50553177,
        50552691,
        50553726,
        50552775,
        50555429,
        50552578,
        50552763,
        50554458,
        50552970,
        50552624,
        50553664,
        50553069,
        50552982,
        50553447,
        50552678,
        50552829,
        50553631,
        50552590,
        50552811,
        50552510,
        50552920,
        50552602,
        50555713,
        50553198,
        50554614
      ],
      "score": 678,
      "time": 1795037647,
      "title": "Gemini 4 Neon",
      "type": "story",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/"
    },
    {
      "by": "speedping",
      "descendants": 552,
      "id": 50547374,
      "kids": [
        50548510,
        50550277,
        50551857,
        50548180,
        50554914,
        50550457,
        50553406,
        50552069,
        50550689,
        50548554,
        50547775,
        50556597,
        50547678,
        50555821,
        50547891,
        50548439,
        50552399,
        50551800,
        50547781,
        50551513,
        50548701,
        50549563,
        50550629,
        50553213,
        50548712,
        50548533,
        50549596,
        50553404,
        50551020,
        50549747,
        50547958,
        50549549,
        50556123,
        50554317,
        50547525,
        50552027,
        50550741,
        50553294,
        50551415,
        50549002,
        50551712,
        50554266,
        50555516,
        50552090,
        50554951,
        50548204,
        50547794,
        50552382,
        50548705,
        50552354,
        50548074,
        50551749,
        50547857,
        50549410,
        50550084,
        50547755,
        50551718,
        50551755,
        50551536,
        50554555,
        50550101,
        50551460,
        50552454,
        50547577,
        50553325,
        50553303,
        50552325,
        50552805,
        50547619,
        50547954,
        50550143,
        50547566,
        50553517,
        50551447,
        50548576,
        50548551,
        50556595,
        50554117,
        50555311,
        50549495,
        50550345,
        50549996,
        50549370,
        50548407
      ],
      "score": 1271,
      "text": "<a href=\"https:&#x2F;&#x2F;www.cve.org&#x2F;CVERecord?id=CVE-2026-123633\" rel=\"nofollow\">https:&#x2F;&#x2F;www.cve.org&#x2F;CVERecord?id=CVE-2026-123633</a><p><a href=\"https:&#x2F;&#x2F;www.cve.org&#x2F;CVERecord?id=CVE-2026-123007\" rel=\"nofollow\">https:&#x2F;&#x2F;www.cve.org&#x2F;CVERecord?id=CVE-2026-123007</a>",
      "time": 1795015195,
      "title": "Unauthenticated remote code execution in Nginx",
      "type": "story",
      "url": "https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities"
    },
    {
      "by": "runesoerensen",
      "descendants": 57,
      "id": 50554038,
      "kids": [
        50554822,
        50555722,
        50554474,
        50555667,
        50555683,
        50555581,
        50554702
      ],
      "score": 180,
      "time": 1795045970,
      "title": "Multiple vulnerabilities in Regexp and String case conversion",
      "type": "story",
      "url": "https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/"
    },
    {
      "by": "TheAceOfHearts",
      "descendants": 51,
      "id": 50554935,
      "kids": [
        50556076,
        50556065,
        50556584,
        50556539,
        50556122,
        50556436,
        50555941,
        50556125,
        50555144,
        50556032,
        50555795,
        50555684,
        50555974,
        50555695,
        50555909,
        50556226,
        50555358,
        50555789,
        50555827,
        50555891,
        50555323,
        50555388,
        50555405
      ],
      "score": 113,
      "time": 1795051769,
      "title": "Unreal Tournament 2004 in the Browser",
      "type": "story",
      "url": "https://ut2004.dev/"
    },
    {
      "by": "gmays",
      "descendants": 336,
      "id": 50548021,
      "kids": [
        50550913,
        50552743,
        50549009,
        50548446,
        50548659,
        50550133,
        50548601,
        50549241,
        50549973,
        50551130,
        50549960,
        50549462,
        50549782,
        50548393,
        50551374,
        50554120,
        50550492,
        50552104,
        50552566,
        50550090,
        50556514,
        50548853,
        50549897,
        50551693,
        50549409,
        50548665,
        50550314,
        50550542,
        50549045,
        50549180,
        50549914,
        50548797,
        50548399,
        50549309,
        50548625,
        50550768,
        50550395,
        50550975,
        50549697,
        50548544,
        50555896,
        50549236,
        50549851,
        50550120,
        50552999,
        50554183,
        50552215,
        50550941,
        50549868,
        50548981,
        50548878,
        50548627,
        50548884,
        50549274,
        50549836,
        50549514,
        50549155,
        50556651,
        50548440,
        50553575,
        50548974,
        50549189,
        50549304,
        50548588
      ],
      "score": 504,
      "time": 1795018104,
      "title": "Seven new models at scalable price-performance",
      "type": "story",
      "url": "https://microsoft.ai/news/microsoft-ignite-2026/"
    },
    {
      "by": "muxamilian",
      "descendants": 0,
      "id": 50518303,
      "score": 10,
      "time": 1794841194,
      "title": "Axelera Titania Brings Native FP8 and FP4 to In-Memory Compute",
      "type": "story",
      "url": "https://futurumgroup.com/insights/axelera-titania-brings-native-fp8-and-fp4-to-in-memory-compute/"
    },
    {
      "by": "gyre007",
      "descendants": 203,
      "id": 50547620,
      "kids": [
        50551351,
        50548217,
        50550799,
        50551985,
        50548644,
        50548124,
        50550688,
        50549999,
        50549861,
        50548464,
        50548287,
        50554548,
        50548050,
        50553476,
        50548229,
        50549540,
        50552390,
        50555407,
        50548469,
        50553283,
        50548086,
        50550419,
        50548246,
        50548577,
        50551884,
        50549726,
        50548107,
        50548823,
        50549384,
        50548187
      ],
      "score": 627,
      "time": 1795016313,
      "title": "Inside Deutsche Bank",
      "type": "story",
      "url": "https://www.inside-db.com/"
    },
    {
      "by": "bookofjoe",
      "descendants": 4,
      "id": 50530088,
      "kids": [
        50556693,
        50556453,
        50556466,
        50556546
      ],
      "score": 18,
      "time": 1794915333,
      "title": "Camera Index",
      "type": "story",
      "url": "https://www.cameraindex.co.uk/"
    },
    {
      "by": "ioma8",
      "descendants": 38,
      "id": 50553225,
      "kids": [
        50556237,
        50554253,
        50554878,
        50555496,
        50556403,
        50555377,
        50555396,
        50554264,
        50556439,
        50554699,
        50555116,
        50554147,
        50554380
      ],
      "score": 146,
      "time": 1795040953,
      "title": "LLM assisted reverse engineering",
      "type": "story",
      "url": "https://www.slowchronicle.com/posts/llm-assisted-reverse-engineering"
    },
    {
      "by": "de_sty",
      "descendants": 57,
      "id": 50551046,
      "kids": [
        50556404,
        50552188,
        50553366,
        50552360,
        50551775,
        50553651,
        50551867,
        50554845,
        50551690,
        50551777,
        50551152,
        50552855,
        50556357
      ],
      "score": 179,
      "time": 1795030756,
      "title": "DaisyRose-27B",
      "type": "story",
      "url": "https://www.radixark.com/blog/daisyrose-27b"
    },
    {
      "by": "kusha",
      "descendants": 34,
      "id": 50525260,
      "kids": [
        50554368,
        50556478,
        50554958,
        50554730,
        50556527,
        50554347,
        50525261,
        50556172,
        50554576,
        50554199,
        50554582,
        50554707
      ],
      "score": 94,
      "time": 1794872846,
      "title": "Dumping an AES key from a MyQ garage opener to stop rebooting when offline",
      "type": "story",
      "url": "https://kusha.me/blog/stop_myq_homebridge_819lmb_rebooting/"
    },
    {
      "by": "akbarnama",
      "descendants": 1,
      "id": 50542441,
      "kids": [
        50556397,
        50556007
      ],
      "score": 30,
      "time": 1794982105,
      "title": "Mosquitoes are Ladakh's latest tourists",
      "type": "story",
      "url": "https://ruralindiaonline.org/article/mosquitoes-are-ladakh-s-latest-tourists"
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
      "title": "Codeberg's domain suddenly disappeared from their account, site is unreachable",
      "url": "https://social.anoxinon.de/@Codeberg/117636454915265360",
      "score": 192,
      "comments": 63,
      "tags": [
        "vcs"
      ],
      "id": "spmgsd"
    },
    {
      "title": "nginx2root",
      "url": "https://xint.io/blog/nginx2root-remote-code-execution",
      "score": 69,
      "comments": 13,
      "tags": [
        "security"
      ],
      "id": "wj2svg"
    },
    {
      "title": "Java4Shell is a reason to use Java",
      "url": "https://mccue.dev/pages/11-18-26-java4shell",
      "score": 28,
      "comments": 11,
      "tags": [
        "java",
        "security"
      ],
      "id": "a1uff5"
    },
    {
      "title": "Upcoming Critical PHP Security Release (18 Nov 2026)",
      "url": "https://www.php.net/index.php#2026-11-18-1",
      "score": 21,
      "comments": 5,
      "tags": [
        "php",
        "security"
      ],
      "id": "zr0hkw"
    },
    {
      "title": "Windows 11 collects data on which coding agents and dev tools you use",
      "url": "https://xusheng.dev/posts/windows-coding-agent-telemetry/",
      "score": 37,
      "comments": 27,
      "tags": [
        "practices",
        "privacy",
        "security"
      ],
      "id": "cwxmdw"
    },
    {
      "title": "How I made a custom game engine for Satelital",
      "url": "https://spectralorbit.com/blog/satelital_game_engine",
      "score": 26,
      "comments": 5,
      "tags": [
        "games",
        "graphics"
      ],
      "id": "eklpkn"
    },
    {
      "title": "The Magic of Partial Evaluation",
      "url": "https://jimmyhmiller.com/magic-of-partial-evaluation",
      "score": 25,
      "comments": 1,
      "tags": [
        "plt"
      ],
      "id": "silxsl"
    },
    {
      "title": "Solid 2.0",
      "url": "https://www.solidjs.com/blog/solid-2-0-the-long-hold",
      "score": 19,
      "comments": 14,
      "tags": [
        "javascript",
        "web"
      ],
      "id": "dpvrbv"
    },
    {
      "title": "Security advisories: multiple vulnerabilities in Regexp and String case conversion",
      "url": "https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/",
      "score": 7,
      "comments": 0,
      "tags": [
        "ruby",
        "security"
      ],
      "id": "hsmtyg"
    },
    {
      "title": "Stricter checks for uploaded distributions on PyPI",
      "url": "https://blog.pypi.org/posts/2026-11-18-stricter-checks-for-uploaded-sdists/",
      "score": 6,
      "comments": 0,
      "tags": [
        "python"
      ],
      "id": "kfpoos"
    }
  ]
}
```

