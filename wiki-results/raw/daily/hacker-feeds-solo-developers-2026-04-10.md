# Hacker Feeds Outcomes - Solo Developers

Generated on: 2026-04-10 06:53:45 UTC

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
      "author": "Yeachan-Heo",
      "repo": "oh-my-codex",
      "avatar": "https://github.com/Yeachan-Heo.png",
      "repo_link": "https://github.com/Yeachan-Heo/oh-my-codex",
      "desc": "OmX - Oh My codeX: Your codex is not alone. Add hooks, agent teams, HUDs, and so much more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1820,
      "added_stars": 9737,
      "builtBy": [
        {
          "username": "Yeachan-Heo",
          "href": "https://github.com/Yeachan-Heo",
          "avatar": "https://avatars.githubusercontent.com/u/54757707"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "HaD0Yun",
          "href": "https://github.com/HaD0Yun",
          "avatar": "https://avatars.githubusercontent.com/u/102889891"
        },
        {
          "username": "junhoyeo",
          "href": "https://github.com/junhoyeo",
          "avatar": "https://avatars.githubusercontent.com/u/32605822"
        }
      ]
    },
    {
      "author": "siddharthvaddem",
      "repo": "openscreen",
      "avatar": "https://github.com/siddharthvaddem.png",
      "repo_link": "https://github.com/siddharthvaddem/openscreen",
      "desc": "Create stunning demos for free. Open-source, no subscriptions, no watermarks, and free for commercial use. An alternative to Screen Studio.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1814,
      "added_stars": 12278,
      "builtBy": [
        {
          "username": "siddharthvaddem",
          "href": "https://github.com/siddharthvaddem",
          "avatar": "https://avatars.githubusercontent.com/u/70214527"
        },
        {
          "username": "FabLrc",
          "href": "https://github.com/FabLrc",
          "avatar": "https://avatars.githubusercontent.com/u/86679051"
        },
        {
          "username": "EtienneLescot",
          "href": "https://github.com/EtienneLescot",
          "avatar": "https://avatars.githubusercontent.com/u/215859519"
        },
        {
          "username": "prayaslashkari",
          "href": "https://github.com/prayaslashkari",
          "avatar": "https://avatars.githubusercontent.com/u/25193916"
        },
        {
          "username": "marcgabe15",
          "href": "https://github.com/marcgabe15",
          "avatar": "https://avatars.githubusercontent.com/u/33824219"
        }
      ]
    },
    {
      "author": "Yeachan-Heo",
      "repo": "oh-my-claudecode",
      "avatar": "https://github.com/Yeachan-Heo.png",
      "repo_link": "https://github.com/Yeachan-Heo/oh-my-claudecode",
      "desc": "Teams-first Multi-agent orchestration for Claude Code",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 2504,
      "added_stars": 5219,
      "builtBy": [
        {
          "username": "Yeachan-Heo",
          "href": "https://github.com/Yeachan-Heo",
          "avatar": "https://avatars.githubusercontent.com/u/54757707"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "shaun0927",
          "href": "https://github.com/shaun0927",
          "avatar": "https://avatars.githubusercontent.com/u/70629228"
        },
        {
          "username": "riftzen-bit",
          "href": "https://github.com/riftzen-bit",
          "avatar": "https://avatars.githubusercontent.com/u/139470135"
        },
        {
          "username": "blue-int",
          "href": "https://github.com/blue-int",
          "avatar": "https://avatars.githubusercontent.com/u/42234614"
        }
      ]
    },
    {
      "author": "yamadashy",
      "repo": "repomix",
      "avatar": "https://github.com/yamadashy.png",
      "repo_link": "https://github.com/yamadashy/repomix",
      "desc": "📦 Repomix is a powerful tool that packs your entire repository into a single, AI-friendly file. Perfect for when you need to feed your codebase to Large Language Models (LLMs) or other AI tools like Claude, ChatGPT, DeepSeek, Perplexity, Gemini, Gemma, Llama, Grok, and more.",
      "lang": "TypeScript",
      "languageColor": "#3178c6",
      "stars": 0,
      "forks": 1119,
      "added_stars": 459,
      "builtBy": [
        {
          "username": "yamadashy",
          "href": "https://github.com/yamadashy",
          "avatar": "https://avatars.githubusercontent.com/u/5019072"
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
Request error: Request failed with status code 403
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
      "author": "Wei-Shaw",
      "repo": "sub2api",
      "avatar": "https://github.com/Wei-Shaw.png",
      "repo_link": "https://github.com/Wei-Shaw/sub2api",
      "desc": "Sub2API-CRS2 一站式开源中转服务，让 Claude、Openai 、Gemini、Antigravity订阅统一接入，支持拼车共享，更高效分摊成本，原生工具无缝使用。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 1876,
      "added_stars": 7447,
      "builtBy": [
        {
          "username": "Wei-Shaw",
          "href": "https://github.com/Wei-Shaw",
          "avatar": "https://avatars.githubusercontent.com/u/26101719"
        },
        {
          "username": "IanShaw027",
          "href": "https://github.com/IanShaw027",
          "avatar": "https://avatars.githubusercontent.com/u/131567472"
        },
        {
          "username": "touwaeriol",
          "href": "https://github.com/touwaeriol",
          "avatar": "https://avatars.githubusercontent.com/u/52620633"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "slovx2",
          "href": "https://github.com/slovx2",
          "avatar": "https://avatars.githubusercontent.com/u/2713715"
        }
      ]
    },
    {
      "author": "QuantumNous",
      "repo": "new-api",
      "avatar": "https://github.com/QuantumNous.png",
      "repo_link": "https://github.com/QuantumNous/new-api",
      "desc": "A unified AI model hub for aggregation & distribution. It supports cross-converting various LLMs into OpenAI-compatible, Claude-compatible, or Gemini-compatible formats. A centralized gateway for personal and enterprise model management. 🍥",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 5219,
      "added_stars": 6178,
      "builtBy": [
        {
          "username": "Calcium-Ion",
          "href": "https://github.com/Calcium-Ion",
          "avatar": "https://avatars.githubusercontent.com/u/61247483"
        },
        {
          "username": "seefs001",
          "href": "https://github.com/seefs001",
          "avatar": "https://avatars.githubusercontent.com/u/40468931"
        },
        {
          "username": "t0ng7u",
          "href": "https://github.com/t0ng7u",
          "avatar": "https://avatars.githubusercontent.com/u/133845290"
        },
        {
          "username": "songquanpeng",
          "href": "https://github.com/songquanpeng",
          "avatar": "https://avatars.githubusercontent.com/u/39998050"
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
      "forks": 1921,
      "added_stars": 5473,
      "builtBy": [
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
          "username": "sirozha",
          "href": "https://github.com/sirozha",
          "avatar": "https://avatars.githubusercontent.com/u/7765123"
        },
        {
          "username": "hhktony",
          "href": "https://github.com/hhktony",
          "avatar": "https://avatars.githubusercontent.com/u/1276702"
        }
      ]
    },
    {
      "author": "dolthub",
      "repo": "dolt",
      "avatar": "https://github.com/dolthub.png",
      "repo_link": "https://github.com/dolthub/dolt",
      "desc": "Dolt – Git for Data",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 734,
      "added_stars": 1430,
      "builtBy": [
        {
          "username": "zachmu",
          "href": "https://github.com/zachmu",
          "avatar": "https://avatars.githubusercontent.com/u/474773"
        },
        {
          "username": "andy-wm-arthur",
          "href": "https://github.com/andy-wm-arthur",
          "avatar": "https://avatars.githubusercontent.com/u/8837413"
        },
        {
          "username": "fulghum",
          "href": "https://github.com/fulghum",
          "avatar": "https://avatars.githubusercontent.com/u/193449"
        },
        {
          "username": "coffeegoddd",
          "href": "https://github.com/coffeegoddd",
          "avatar": "https://avatars.githubusercontent.com/u/43383835"
        },
        {
          "username": "reltuk",
          "href": "https://github.com/reltuk",
          "avatar": "https://avatars.githubusercontent.com/u/1150979"
        }
      ]
    },
    {
      "author": "maximhq",
      "repo": "bifrost",
      "avatar": "https://github.com/maximhq.png",
      "repo_link": "https://github.com/maximhq/bifrost",
      "desc": "Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models support & <100 µs overhead at 5k RPS.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 406,
      "added_stars": 865,
      "builtBy": [
        {
          "username": "akshaydeo",
          "href": "https://github.com/akshaydeo",
          "avatar": "https://avatars.githubusercontent.com/u/1050029"
        },
        {
          "username": "Pratham-Mishra04",
          "href": "https://github.com/Pratham-Mishra04",
          "avatar": "https://avatars.githubusercontent.com/u/99235987"
        },
        {
          "username": "TejasGhatte",
          "href": "https://github.com/TejasGhatte",
          "avatar": "https://avatars.githubusercontent.com/u/64637256"
        },
        {
          "username": "Radheshg04",
          "href": "https://github.com/Radheshg04",
          "avatar": "https://avatars.githubusercontent.com/u/61974742"
        }
      ]
    },
    {
      "author": "mudler",
      "repo": "LocalAI",
      "avatar": "https://github.com/mudler.png",
      "repo_link": "https://github.com/mudler/LocalAI",
      "desc": "LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU required.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3901,
      "added_stars": 1872,
      "builtBy": [
        {
          "username": "mudler",
          "href": "https://github.com/mudler",
          "avatar": "https://avatars.githubusercontent.com/u/2420543"
        },
        {
          "username": "localai-bot",
          "href": "https://github.com/localai-bot",
          "avatar": "https://avatars.githubusercontent.com/u/139863280"
        },
        {
          "username": "dave-gray101",
          "href": "https://github.com/dave-gray101",
          "avatar": "https://avatars.githubusercontent.com/u/15875595"
        }
      ]
    },
    {
      "author": "9seconds",
      "repo": "mtg",
      "avatar": "https://github.com/9seconds.png",
      "repo_link": "https://github.com/9seconds/mtg",
      "desc": "Highly opinionated MTPROTO proxy for Telegram",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 340,
      "added_stars": 896,
      "builtBy": [
        {
          "username": "9seconds",
          "href": "https://github.com/9seconds",
          "avatar": "https://avatars.githubusercontent.com/u/831613"
        },
        {
          "username": "dolonet",
          "href": "https://github.com/dolonet",
          "avatar": "https://avatars.githubusercontent.com/u/86595509"
        },
        {
          "username": "savely-krasovsky",
          "href": "https://github.com/savely-krasovsky",
          "avatar": "https://avatars.githubusercontent.com/u/5345489"
        },
        {
          "username": "im-kulikov",
          "href": "https://github.com/im-kulikov",
          "avatar": "https://avatars.githubusercontent.com/u/888650"
        },
        {
          "username": "Dank-del",
          "href": "https://github.com/Dank-del",
          "avatar": "https://avatars.githubusercontent.com/u/63096193"
        }
      ]
    },
    {
      "author": "harness",
      "repo": "harness",
      "avatar": "https://github.com/harness.png",
      "repo_link": "https://github.com/harness/harness",
      "desc": "Harness Open Source is an end-to-end developer platform with Source Control Management, CI/CD Pipelines, Hosted Developer Environments, and Artifact Registries.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2969,
      "added_stars": 874,
      "builtBy": [
        {
          "username": "johannesHarness",
          "href": "https://github.com/johannesHarness",
          "avatar": "https://avatars.githubusercontent.com/u/98799615"
        },
        {
          "username": "marko-gacesa",
          "href": "https://github.com/marko-gacesa",
          "avatar": "https://avatars.githubusercontent.com/u/1862257"
        },
        {
          "username": "cjlee01",
          "href": "https://github.com/cjlee01",
          "avatar": "https://avatars.githubusercontent.com/u/92757601"
        },
        {
          "username": "shivanand-harness",
          "href": "https://github.com/shivanand-harness",
          "avatar": "https://avatars.githubusercontent.com/u/148759765"
        },
        {
          "username": "tan-nhu",
          "href": "https://github.com/tan-nhu",
          "avatar": "https://avatars.githubusercontent.com/u/29714664"
        }
      ]
    },
    {
      "author": "smtg-ai",
      "repo": "claude-squad",
      "avatar": "https://github.com/smtg-ai.png",
      "repo_link": "https://github.com/smtg-ai/claude-squad",
      "desc": "Manage multiple AI terminal agents like Claude Code, Codex, OpenCode, and Amp.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 486,
      "added_stars": 680,
      "builtBy": [
        {
          "username": "mufeez-amjad",
          "href": "https://github.com/mufeez-amjad",
          "avatar": "https://avatars.githubusercontent.com/u/19630228"
        },
        {
          "username": "jayshrivastava",
          "href": "https://github.com/jayshrivastava",
          "avatar": "https://avatars.githubusercontent.com/u/18633281"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "jennings",
          "href": "https://github.com/jennings",
          "avatar": "https://avatars.githubusercontent.com/u/24511"
        },
        {
          "username": "bzbetty",
          "href": "https://github.com/bzbetty",
          "avatar": "https://avatars.githubusercontent.com/u/533131"
        }
      ]
    },
    {
      "author": "SagerNet",
      "repo": "sing-box",
      "avatar": "https://github.com/SagerNet.png",
      "repo_link": "https://github.com/SagerNet/sing-box",
      "desc": "The universal proxy platform",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 3804,
      "added_stars": 1320,
      "builtBy": [
        {
          "username": "nekohasekai",
          "href": "https://github.com/nekohasekai",
          "avatar": "https://avatars.githubusercontent.com/u/56506714"
        },
        {
          "username": "dyhkwong",
          "href": "https://github.com/dyhkwong",
          "avatar": "https://avatars.githubusercontent.com/u/50692134"
        },
        {
          "username": "H1JK",
          "href": "https://github.com/H1JK",
          "avatar": "https://avatars.githubusercontent.com/u/106379370"
        },
        {
          "username": "arm64v8a",
          "href": "https://github.com/arm64v8a",
          "avatar": "https://avatars.githubusercontent.com/u/48624112"
        }
      ]
    },
    {
      "author": "wavetermdev",
      "repo": "waveterm",
      "avatar": "https://github.com/wavetermdev.png",
      "repo_link": "https://github.com/wavetermdev/waveterm",
      "desc": "An open-source, AI-integrated, cross-platform terminal for seamless workflows",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 893,
      "added_stars": 1524,
      "builtBy": [
        {
          "username": "sawka",
          "href": "https://github.com/sawka",
          "avatar": "https://avatars.githubusercontent.com/u/2722291"
        },
        {
          "username": "esimkowitz",
          "href": "https://github.com/esimkowitz",
          "avatar": "https://avatars.githubusercontent.com/u/16651283"
        },
        {
          "username": "oneirocosm",
          "href": "https://github.com/oneirocosm",
          "avatar": "https://avatars.githubusercontent.com/u/107814465"
        }
      ]
    },
    {
      "author": "kubernetes-sigs",
      "repo": "agent-sandbox",
      "avatar": "https://github.com/kubernetes-sigs.png",
      "repo_link": "https://github.com/kubernetes-sigs/agent-sandbox",
      "desc": "agent-sandbox enables easy management of isolated, stateful, singleton workloads, ideal for use cases like AI agent runtimes.",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 192,
      "added_stars": 574,
      "builtBy": [
        {
          "username": "k8s-ci-robot",
          "href": "https://github.com/k8s-ci-robot",
          "avatar": "https://avatars.githubusercontent.com/u/20407524"
        },
        {
          "username": "janetkuo",
          "href": "https://github.com/janetkuo",
          "avatar": "https://avatars.githubusercontent.com/u/4876867"
        },
        {
          "username": "justinsb",
          "href": "https://github.com/justinsb",
          "avatar": "https://avatars.githubusercontent.com/u/100893"
        },
        {
          "username": "barney-s",
          "href": "https://github.com/barney-s",
          "avatar": "https://avatars.githubusercontent.com/u/6457279"
        },
        {
          "username": "vicentefb",
          "href": "https://github.com/vicentefb",
          "avatar": "https://avatars.githubusercontent.com/u/47219931"
        }
      ]
    },
    {
      "author": "jesseduffield",
      "repo": "lazygit",
      "avatar": "https://github.com/jesseduffield.png",
      "repo_link": "https://github.com/jesseduffield/lazygit",
      "desc": "simple terminal UI for git commands",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2738,
      "added_stars": 2615,
      "builtBy": [
        {
          "username": "jesseduffield",
          "href": "https://github.com/jesseduffield",
          "avatar": "https://avatars.githubusercontent.com/u/8456633"
        },
        {
          "username": "stefanhaller",
          "href": "https://github.com/stefanhaller",
          "avatar": "https://avatars.githubusercontent.com/u/1225667"
        },
        {
          "username": "mjarkk",
          "href": "https://github.com/mjarkk",
          "avatar": "https://avatars.githubusercontent.com/u/15320763"
        },
        {
          "username": "dawidd6",
          "href": "https://github.com/dawidd6",
          "avatar": "https://avatars.githubusercontent.com/u/9713907"
        },
        {
          "username": "Ryooooooga",
          "href": "https://github.com/Ryooooooga",
          "avatar": "https://avatars.githubusercontent.com/u/10097437"
        }
      ]
    },
    {
      "author": "openimsdk",
      "repo": "open-im-server",
      "avatar": "https://github.com/openimsdk.png",
      "repo_link": "https://github.com/openimsdk/open-im-server",
      "desc": "IM Chat OpenClaw",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 2856,
      "added_stars": 469,
      "builtBy": [
        {
          "username": "cubxxw",
          "href": "https://github.com/cubxxw",
          "avatar": "https://avatars.githubusercontent.com/u/86140903"
        },
        {
          "username": "skiffer-git",
          "href": "https://github.com/skiffer-git",
          "avatar": "https://avatars.githubusercontent.com/u/72860476"
        },
        {
          "username": "FGadvancer",
          "href": "https://github.com/FGadvancer",
          "avatar": "https://avatars.githubusercontent.com/u/46924906"
        },
        {
          "username": "wangchuxiao-dev",
          "href": "https://github.com/wangchuxiao-dev",
          "avatar": "https://avatars.githubusercontent.com/u/58578570"
        },
        {
          "username": "withchao",
          "href": "https://github.com/withchao",
          "avatar": "https://avatars.githubusercontent.com/u/48119764"
        }
      ]
    },
    {
      "author": "docker",
      "repo": "docker-agent",
      "avatar": "https://github.com/docker.png",
      "repo_link": "https://github.com/docker/docker-agent",
      "desc": "AI Agent Builder and Runtime by Docker Engineering",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 338,
      "added_stars": 636,
      "builtBy": [
        {
          "username": "dgageot",
          "href": "https://github.com/dgageot",
          "avatar": "https://avatars.githubusercontent.com/u/153495"
        },
        {
          "username": "rumpl",
          "href": "https://github.com/rumpl",
          "avatar": "https://avatars.githubusercontent.com/u/99933"
        },
        {
          "username": "krissetto",
          "href": "https://github.com/krissetto",
          "avatar": "https://avatars.githubusercontent.com/u/47751006"
        },
        {
          "username": "trungutt",
          "href": "https://github.com/trungutt",
          "avatar": "https://avatars.githubusercontent.com/u/18528548"
        },
        {
          "username": "derekmisler",
          "href": "https://github.com/derekmisler",
          "avatar": "https://avatars.githubusercontent.com/u/2684662"
        }
      ]
    },
    {
      "author": "zhaoxinyi02",
      "repo": "ClawPanel",
      "avatar": "https://github.com/zhaoxinyi02.png",
      "repo_link": "https://github.com/zhaoxinyi02/ClawPanel",
      "desc": "🐾 ClawPanel — OpenClaw AI 助手可视化管理面板。Go 单二进制部署，支持 20+ 通道统一管理，跨平台，实时日志监控。",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 118,
      "added_stars": 459,
      "builtBy": [
        {
          "username": "zhaoxinyi02",
          "href": "https://github.com/zhaoxinyi02",
          "avatar": "https://avatars.githubusercontent.com/u/98445030"
        },
        {
          "username": "BlueSkyXN",
          "href": "https://github.com/BlueSkyXN",
          "avatar": "https://avatars.githubusercontent.com/u/63384277"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "codeKing6412",
          "href": "https://github.com/codeKing6412",
          "avatar": "https://avatars.githubusercontent.com/u/185812512"
        }
      ]
    },
    {
      "author": "kagent-dev",
      "repo": "kagent",
      "avatar": "https://github.com/kagent-dev.png",
      "repo_link": "https://github.com/kagent-dev/kagent",
      "desc": "Cloud Native Agentic AI | Discord: https://bit.ly/kagentdiscord",
      "lang": "Go",
      "languageColor": "#00ADD8",
      "stars": 0,
      "forks": 504,
      "added_stars": 229,
      "builtBy": [
        {
          "username": "EItanya",
          "href": "https://github.com/EItanya",
          "avatar": "https://avatars.githubusercontent.com/u/4185086"
        },
        {
          "username": "peterj",
          "href": "https://github.com/peterj",
          "avatar": "https://avatars.githubusercontent.com/u/11080940"
        },
        {
          "username": "ilackarms",
          "href": "https://github.com/ilackarms",
          "avatar": "https://avatars.githubusercontent.com/u/5974898"
        },
        {
          "username": "onematchfox",
          "href": "https://github.com/onematchfox",
          "avatar": "https://avatars.githubusercontent.com/u/878612"
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
      "author": "NousResearch",
      "repo": "hermes-agent",
      "avatar": "https://github.com/NousResearch.png",
      "repo_link": "https://github.com/NousResearch/hermes-agent",
      "desc": "The agent that grows with you",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 6066,
      "added_stars": 39332,
      "builtBy": [
        {
          "username": "teknium1",
          "href": "https://github.com/teknium1",
          "avatar": "https://avatars.githubusercontent.com/u/127238744"
        },
        {
          "username": "0xbyt4",
          "href": "https://github.com/0xbyt4",
          "avatar": "https://avatars.githubusercontent.com/u/35742124"
        },
        {
          "username": "kshitijk4poor",
          "href": "https://github.com/kshitijk4poor",
          "avatar": "https://avatars.githubusercontent.com/u/82637225"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "erosika",
          "href": "https://github.com/erosika",
          "avatar": "https://avatars.githubusercontent.com/u/56565191"
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
      "forks": 7887,
      "added_stars": 44278,
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
          "username": "cursoragent",
          "href": "https://github.com/cursoragent",
          "avatar": "https://avatars.githubusercontent.com/u/199161495"
        }
      ]
    },
    {
      "author": "bytedance",
      "repo": "deer-flow",
      "avatar": "https://github.com/bytedance.png",
      "repo_link": "https://github.com/bytedance/deer-flow",
      "desc": "An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 7627,
      "added_stars": 33722,
      "builtBy": [
        {
          "username": "MagicCube",
          "href": "https://github.com/MagicCube",
          "avatar": "https://avatars.githubusercontent.com/u/1003147"
        },
        {
          "username": "WillemJiang",
          "href": "https://github.com/WillemJiang",
          "avatar": "https://avatars.githubusercontent.com/u/219644"
        },
        {
          "username": "hetaoBackend",
          "href": "https://github.com/hetaoBackend",
          "avatar": "https://avatars.githubusercontent.com/u/45447813"
        },
        {
          "username": "henry-byted",
          "href": "https://github.com/henry-byted",
          "avatar": "https://avatars.githubusercontent.com/u/209858577"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        }
      ]
    },
    {
      "author": "FujiwaraChoki",
      "repo": "MoneyPrinterV2",
      "avatar": "https://github.com/FujiwaraChoki.png",
      "repo_link": "https://github.com/FujiwaraChoki/MoneyPrinterV2",
      "desc": "Automate the process of making money online.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3132,
      "added_stars": 14209,
      "builtBy": [
        {
          "username": "FujiwaraChoki",
          "href": "https://github.com/FujiwaraChoki",
          "avatar": "https://avatars.githubusercontent.com/u/78088687"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "supperfreddo",
          "href": "https://github.com/supperfreddo",
          "avatar": "https://avatars.githubusercontent.com/u/9703184"
        },
        {
          "username": "SaroAntonelloLovito",
          "href": "https://github.com/SaroAntonelloLovito",
          "avatar": "https://avatars.githubusercontent.com/u/91974562"
        },
        {
          "username": "TomyDiNero",
          "href": "https://github.com/TomyDiNero",
          "avatar": "https://avatars.githubusercontent.com/u/151256852"
        }
      ]
    },
    {
      "author": "mvanhorn",
      "repo": "last30days-skill",
      "avatar": "https://github.com/mvanhorn.png",
      "repo_link": "https://github.com/mvanhorn/last30days-skill",
      "desc": "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1651,
      "added_stars": 16184,
      "builtBy": [
        {
          "username": "mvanhorn",
          "href": "https://github.com/mvanhorn",
          "avatar": "https://avatars.githubusercontent.com/u/455140"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "j-sperling",
          "href": "https://github.com/j-sperling",
          "avatar": "https://avatars.githubusercontent.com/u/17969723"
        },
        {
          "username": "pejmanjohn",
          "href": "https://github.com/pejmanjohn",
          "avatar": "https://avatars.githubusercontent.com/u/481729"
        },
        {
          "username": "phjlljp",
          "href": "https://github.com/phjlljp",
          "avatar": "https://avatars.githubusercontent.com/u/76761332"
        }
      ]
    },
    {
      "author": "TauricResearch",
      "repo": "TradingAgents",
      "avatar": "https://github.com/TauricResearch.png",
      "repo_link": "https://github.com/TauricResearch/TradingAgents",
      "desc": "TradingAgents: Multi-Agents LLM Financial Trading Framework",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 8887,
      "added_stars": 17495,
      "builtBy": [
        {
          "username": "Yijia-Xiao",
          "href": "https://github.com/Yijia-Xiao",
          "avatar": "https://avatars.githubusercontent.com/u/48253104"
        },
        {
          "username": "EdwardoSunny",
          "href": "https://github.com/EdwardoSunny",
          "avatar": "https://avatars.githubusercontent.com/u/68405458"
        },
        {
          "username": "luohy15",
          "href": "https://github.com/luohy15",
          "avatar": "https://avatars.githubusercontent.com/u/15189961"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "CadeYu",
          "href": "https://github.com/CadeYu",
          "avatar": "https://avatars.githubusercontent.com/u/91041827"
        }
      ]
    },
    {
      "author": "langchain-ai",
      "repo": "open-swe",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/open-swe",
      "desc": "An Open-Source Asynchronous Coding Agent",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1060,
      "added_stars": 4137,
      "builtBy": [
        {
          "username": "bracesproul",
          "href": "https://github.com/bracesproul",
          "avatar": "https://avatars.githubusercontent.com/u/46789226"
        },
        {
          "username": "aran-yogesh",
          "href": "https://github.com/aran-yogesh",
          "avatar": "https://avatars.githubusercontent.com/u/63587953"
        },
        {
          "username": "open-swe",
          "href": "https://github.com/open-swe",
          "avatar": "https://avatars.githubusercontent.com/u/221408880"
        }
      ]
    },
    {
      "author": "volcengine",
      "repo": "OpenViking",
      "avatar": "https://github.com/volcengine.png",
      "repo_link": "https://github.com/volcengine/OpenViking",
      "desc": "OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1570,
      "added_stars": 16698,
      "builtBy": [
        {
          "username": "qin-ctx",
          "href": "https://github.com/qin-ctx",
          "avatar": "https://avatars.githubusercontent.com/u/234610432"
        },
        {
          "username": "zhoujh01",
          "href": "https://github.com/zhoujh01",
          "avatar": "https://avatars.githubusercontent.com/u/242402223"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "MaojiaSheng",
          "href": "https://github.com/MaojiaSheng",
          "avatar": "https://avatars.githubusercontent.com/u/211460083"
        },
        {
          "username": "ZaynJarvis",
          "href": "https://github.com/ZaynJarvis",
          "avatar": "https://avatars.githubusercontent.com/u/31875147"
        }
      ]
    },
    {
      "author": "onyx-dot-app",
      "repo": "onyx",
      "avatar": "https://github.com/onyx-dot-app.png",
      "repo_link": "https://github.com/onyx-dot-app/onyx",
      "desc": "Open Source AI Platform - AI Chat with advanced features that works with every LLM",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3500,
      "added_stars": 8528,
      "builtBy": [
        {
          "username": "Weves",
          "href": "https://github.com/Weves",
          "avatar": "https://avatars.githubusercontent.com/u/25087905"
        },
        {
          "username": "yuhongsun96",
          "href": "https://github.com/yuhongsun96",
          "avatar": "https://avatars.githubusercontent.com/u/32520769"
        },
        {
          "username": "pablonyx",
          "href": "https://github.com/pablonyx",
          "avatar": "https://avatars.githubusercontent.com/u/171597620"
        },
        {
          "username": "jmelahman",
          "href": "https://github.com/jmelahman",
          "avatar": "https://avatars.githubusercontent.com/u/23436978"
        }
      ]
    },
    {
      "author": "langchain-ai",
      "repo": "deepagents",
      "avatar": "https://github.com/langchain-ai.png",
      "repo_link": "https://github.com/langchain-ai/deepagents",
      "desc": "Agent harness built with LangChain and LangGraph. Equipped with a planning tool, a filesystem backend, and the ability to spawn subagents - well-equipped to handle complex agentic tasks.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 2798,
      "added_stars": 10077,
      "builtBy": [
        {
          "username": "mdrxy",
          "href": "https://github.com/mdrxy",
          "avatar": "https://avatars.githubusercontent.com/u/61371264"
        },
        {
          "username": "eyurtsev",
          "href": "https://github.com/eyurtsev",
          "avatar": "https://avatars.githubusercontent.com/u/3205522"
        },
        {
          "username": "vtrivedy",
          "href": "https://github.com/vtrivedy",
          "avatar": "https://avatars.githubusercontent.com/u/28938224"
        },
        {
          "username": "hwchase17",
          "href": "https://github.com/hwchase17",
          "avatar": "https://avatars.githubusercontent.com/u/11986836"
        }
      ]
    },
    {
      "author": "alirezarezvani",
      "repo": "claude-skills",
      "avatar": "https://github.com/alirezarezvani.png",
      "repo_link": "https://github.com/alirezarezvani/claude-skills",
      "desc": "220+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1284,
      "added_stars": 7012,
      "builtBy": [
        {
          "username": "alirezarezvani",
          "href": "https://github.com/alirezarezvani",
          "avatar": "https://avatars.githubusercontent.com/u/5697919"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "olgasafonova",
          "href": "https://github.com/olgasafonova",
          "avatar": "https://avatars.githubusercontent.com/u/23409189"
        },
        {
          "username": "fernandezbaptiste",
          "href": "https://github.com/fernandezbaptiste",
          "avatar": "https://avatars.githubusercontent.com/u/83458751"
        },
        {
          "username": "ikala-shawn",
          "href": "https://github.com/ikala-shawn",
          "avatar": "https://avatars.githubusercontent.com/u/111341595"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "VibeVoice",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/VibeVoice",
      "desc": "Open-Source Frontier Voice AI",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 4400,
      "added_stars": 14527,
      "builtBy": [
        {
          "username": "YaoyaoChang",
          "href": "https://github.com/YaoyaoChang",
          "avatar": "https://avatars.githubusercontent.com/u/20237658"
        },
        {
          "username": "MSLDCherryPick",
          "href": "https://github.com/MSLDCherryPick",
          "avatar": "https://avatars.githubusercontent.com/u/173002764"
        },
        {
          "username": "pengzhiliang",
          "href": "https://github.com/pengzhiliang",
          "avatar": "https://avatars.githubusercontent.com/u/26346329"
        },
        {
          "username": "MSJwyu",
          "href": "https://github.com/MSJwyu",
          "avatar": "https://avatars.githubusercontent.com/u/39176643"
        }
      ]
    },
    {
      "author": "hacksider",
      "repo": "Deep-Live-Cam",
      "avatar": "https://github.com/hacksider.png",
      "repo_link": "https://github.com/hacksider/Deep-Live-Cam",
      "desc": "real time face swap and one-click video deepfake with only a single image",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 13004,
      "added_stars": 9944,
      "builtBy": [
        {
          "username": "hacksider",
          "href": "https://github.com/hacksider",
          "avatar": "https://avatars.githubusercontent.com/u/1267200"
        },
        {
          "username": "KRSHH",
          "href": "https://github.com/KRSHH",
          "avatar": "https://avatars.githubusercontent.com/u/136873090"
        },
        {
          "username": "vic4key",
          "href": "https://github.com/vic4key",
          "avatar": "https://avatars.githubusercontent.com/u/5672864"
        },
        {
          "username": "laurigates",
          "href": "https://github.com/laurigates",
          "avatar": "https://avatars.githubusercontent.com/u/13014001"
        },
        {
          "username": "pereiraroland26",
          "href": "https://github.com/pereiraroland26",
          "avatar": "https://avatars.githubusercontent.com/u/52257639"
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
      "forks": 511,
      "added_stars": 6296,
      "builtBy": [
        {
          "username": "nicoloboschi",
          "href": "https://github.com/nicoloboschi",
          "avatar": "https://avatars.githubusercontent.com/u/23314389"
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
          "username": "benfrank241",
          "href": "https://github.com/benfrank241",
          "avatar": "https://avatars.githubusercontent.com/u/62250174"
        },
        {
          "username": "DK09876",
          "href": "https://github.com/DK09876",
          "avatar": "https://avatars.githubusercontent.com/u/55561168"
        }
      ]
    },
    {
      "author": "microsoft",
      "repo": "BitNet",
      "avatar": "https://github.com/microsoft.png",
      "repo_link": "https://github.com/microsoft/BitNet",
      "desc": "Official inference framework for 1-bit LLMs",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3399,
      "added_stars": 9521,
      "builtBy": [
        {
          "username": "potassiummmm",
          "href": "https://github.com/potassiummmm",
          "avatar": "https://avatars.githubusercontent.com/u/54800242"
        },
        {
          "username": "tsong-ms",
          "href": "https://github.com/tsong-ms",
          "avatar": "https://avatars.githubusercontent.com/u/84831885"
        },
        {
          "username": "younesbelkada",
          "href": "https://github.com/younesbelkada",
          "avatar": "https://avatars.githubusercontent.com/u/49240599"
        },
        {
          "username": "sd983527",
          "href": "https://github.com/sd983527",
          "avatar": "https://avatars.githubusercontent.com/u/59006636"
        },
        {
          "username": "XsquirrelC",
          "href": "https://github.com/XsquirrelC",
          "avatar": "https://avatars.githubusercontent.com/u/178687198"
        }
      ]
    },
    {
      "author": "langflow-ai",
      "repo": "openrag",
      "avatar": "https://github.com/langflow-ai.png",
      "repo_link": "https://github.com/langflow-ai/openrag",
      "desc": "OpenRAG is a comprehensive, single package Retrieval-Augmented Generation platform built on Langflow, Docling, and Opensearch.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 347,
      "added_stars": 3504,
      "builtBy": [
        {
          "username": "phact",
          "href": "https://github.com/phact",
          "avatar": "https://avatars.githubusercontent.com/u/1313220"
        },
        {
          "username": "edwinjosechittilappilly",
          "href": "https://github.com/edwinjosechittilappilly",
          "avatar": "https://avatars.githubusercontent.com/u/15969583"
        },
        {
          "username": "lucaseduoli",
          "href": "https://github.com/lucaseduoli",
          "avatar": "https://avatars.githubusercontent.com/u/62335616"
        },
        {
          "username": "mendonk",
          "href": "https://github.com/mendonk",
          "avatar": "https://avatars.githubusercontent.com/u/59585235"
        },
        {
          "username": "mfortman11",
          "href": "https://github.com/mfortman11",
          "avatar": "https://avatars.githubusercontent.com/u/6100513"
        }
      ]
    },
    {
      "author": "hesreallyhim",
      "repo": "awesome-claude-code",
      "avatar": "https://github.com/hesreallyhim.png",
      "repo_link": "https://github.com/hesreallyhim/awesome-claude-code",
      "desc": "A curated list of awesome skills, hooks, slash-commands, agent orchestrators, applications, and plugins for Claude Code by Anthropic",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 3043,
      "added_stars": 10745,
      "builtBy": [
        {
          "username": "hesreallyhim",
          "href": "https://github.com/hesreallyhim",
          "avatar": "https://avatars.githubusercontent.com/u/172150522"
        },
        {
          "username": "claude",
          "href": "https://github.com/claude",
          "avatar": "https://avatars.githubusercontent.com/u/81847"
        },
        {
          "username": "tninja",
          "href": "https://github.com/tninja",
          "avatar": "https://avatars.githubusercontent.com/u/714625"
        }
      ]
    },
    {
      "author": "unslothai",
      "repo": "unsloth",
      "avatar": "https://github.com/unslothai.png",
      "repo_link": "https://github.com/unslothai/unsloth",
      "desc": "Unsloth Studio is a web UI for training and running open models like Qwen3.5, Gemma 4, DeepSeek, gpt-oss locally.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 5220,
      "added_stars": 7276,
      "builtBy": [
        {
          "username": "danielhanchen",
          "href": "https://github.com/danielhanchen",
          "avatar": "https://avatars.githubusercontent.com/u/23090290"
        },
        {
          "username": "rolandtannous",
          "href": "https://github.com/rolandtannous",
          "avatar": "https://avatars.githubusercontent.com/u/115670425"
        },
        {
          "username": "shimmyshimmer",
          "href": "https://github.com/shimmyshimmer",
          "avatar": "https://avatars.githubusercontent.com/u/107991372"
        },
        {
          "username": "Datta0",
          "href": "https://github.com/Datta0",
          "avatar": "https://avatars.githubusercontent.com/u/39181234"
        }
      ]
    },
    {
      "author": "google-research",
      "repo": "timesfm",
      "avatar": "https://github.com/google-research.png",
      "repo_link": "https://github.com/google-research/timesfm",
      "desc": "TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.",
      "lang": "Python",
      "languageColor": "#3572A5",
      "stars": 0,
      "forks": 1467,
      "added_stars": 5981,
      "builtBy": [
        {
          "username": "rajatsen91",
          "href": "https://github.com/rajatsen91",
          "avatar": "https://avatars.githubusercontent.com/u/8039264"
        },
        {
          "username": "siriuz42",
          "href": "https://github.com/siriuz42",
          "avatar": "https://avatars.githubusercontent.com/u/5073569"
        },
        {
          "username": "misha-chertushkin",
          "href": "https://github.com/misha-chertushkin",
          "avatar": "https://avatars.githubusercontent.com/u/151166456"
        },
        {
          "username": "JustinGuese",
          "href": "https://github.com/JustinGuese",
          "avatar": "https://avatars.githubusercontent.com/u/9588843"
        },
        {
          "username": "kashif",
          "href": "https://github.com/kashif",
          "avatar": "https://avatars.githubusercontent.com/u/8100"
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
      "title": "Soft deletes in a Zustand store via enumerable:false property descriptors",
      "url": "https://dev.to/finom/stop-duplicating-api-state-a-zustand-registry-that-auto-updates-every-component-10if",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-04-09T13:00:31.000Z"
    },
    {
      "title": "Phantom UI – Skeleton that measures your real DOM (Web Component, 8kb)",
      "url": "https://github.com/Aejkatappaja/phantom-ui",
      "upvotes": "1",
      "comments": "4",
      "created": "2026-04-08T21:49:33.000Z"
    },
    {
      "title": "A lightweight front end framework with native JavaScript/TS feel",
      "url": "https://qingkuai.dev",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-04-07T22:39:58.000Z"
    },
    {
      "title": "Zephyr Events – A 2KB TypeScript event emitter that's race-condition safe",
      "url": "https://www.npmjs.com/package/zephyr-events",
      "upvotes": "2",
      "comments": "0",
      "created": "2026-04-07T22:32:27.000Z"
    },
    {
      "title": "easy-live2d v0.4.0: A Milestone Release for Live2D on the Web",
      "url": "https://github.com/Panzer-Jack/easy-live2d",
      "upvotes": "1",
      "comments": "2",
      "created": "2026-04-04T14:56:44.000Z"
    },
    {
      "title": "oh-my-hi: Visual dashboard for your Claude Code harness",
      "url": "https://github.com/netil/oh-my-hi",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-31T12:06:10.000Z"
    },
    {
      "title": "Auth library with AI agent identity and MCP OAuth 2.1",
      "url": "https://github.com/kavachos/kavachos",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-30T20:06:45.000Z"
    },
    {
      "title": "Your options for preloading images with JavaScript",
      "url": "https://macarthur.me/posts/preloading-images/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-30T16:57:57.000Z"
    },
    {
      "title": "You probably don't need to lift state",
      "url": "https://allthingssmitty.com/2026/03/30/you-probably-dont-need-to-lift-that-state/",
      "upvotes": "1",
      "comments": "0",
      "created": "2026-03-30T12:53:30.000Z"
    },
    {
      "title": "Polpelmi - Open-source file upload security",
      "url": "https://pompelmi.github.io/pompelmi/",
      "upvotes": "1",
      "comments": "1",
      "created": "2026-03-29T08:01:48.000Z"
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
      "title": "You’re a Real Software Developer Only If…",
      "description": "Uff, I’m finally done with my talk at jsDay 2026!  And honestly? It went at least good. People showed...",
      "url": "https://dev.to/sylwia-lask/youre-a-real-software-developer-only-if-2mo8",
      "tags": "jokes, devlive",
      "reactions": 49,
      "comments": 24,
      "reading_time": 3,
      "author": "sylwia-lask"
    },
    {
      "title": "Unlocking Casual Fun: AI-Powered 'Vibe Coding' for Quick, Niche Apps",
      "description": "I recently heard the comparison that AI is the smartphone of our generation.   Smartphones made...",
      "url": "https://dev.to/maria_from_mlh/unlocking-casual-fun-ai-powered-vibe-coding-for-quick-niche-apps-ml5",
      "tags": "sideprojects, ai, vibecoding, gemini",
      "reactions": 42,
      "comments": 6,
      "reading_time": 4,
      "author": "maria_from_mlh"
    },
    {
      "title": "Top 7 Featured DEV Posts of the Week",
      "description": "Welcome to this week's Top 7, where the DEV editorial team handpicks their favorite posts from the...",
      "url": "https://dev.to/devteam/top-7-featured-dev-posts-of-the-week-4idc",
      "tags": "top7, discuss",
      "reactions": 65,
      "comments": 15,
      "reading_time": 3,
      "author": "jess"
    },
    {
      "title": "On-Device AI with the Google AI Edge Gallery and Gemma 4",
      "description": "Until recently, running an LLM on your phone meant one thing: chat. You could have a conversation or...",
      "url": "https://dev.to/googleai/on-device-ai-with-the-google-ai-edge-gallery-and-gemma-4-ena",
      "tags": "aiondevice, android, ios, gemma",
      "reactions": 20,
      "comments": 0,
      "reading_time": 6,
      "author": "kweinmeister"
    },
    {
      "title": "Mastering Error Handling in Go",
      "description": "Error handling is one of the most distinctive aspects of Go. Unlike languages that use exceptions, Go...",
      "url": "https://dev.to/adi73/mastering-error-handling-in-go-400g",
      "tags": "go, programming, tutorial, security",
      "reactions": 0,
      "comments": 1,
      "reading_time": 5,
      "author": "adi73"
    },
    {
      "title": "Skills Are the New CLI",
      "description": "Every developer tool follows the same pattern: parse flags, run logic, print output. git commit -m...",
      "url": "https://dev.to/helderberto/skills-are-the-new-cli-225e",
      "tags": "ai, development, software, programming",
      "reactions": 7,
      "comments": 1,
      "reading_time": 8,
      "author": "helderberto"
    },
    {
      "title": "TigerFS: A Filesystem Backed by PostgreSQL",
      "description": "TigerFS is a filesystem backed by PostgreSQL, built by the Timescale team. It mounts a database as a...",
      "url": "https://dev.to/polliog/tigerfs-a-filesystem-backed-by-postgresql-50i",
      "tags": "postgres, database, devtools, ai",
      "reactions": 15,
      "comments": 0,
      "reading_time": 5,
      "author": "polliog"
    },
    {
      "title": "When Your UX Only Fits Two Sizes",
      "description": "A few years ago, right before the pandemic hit, I was trying to buy clothes online. Nothing fancy,...",
      "url": "https://dev.to/phalkmin/when-your-ux-only-fits-two-sizes-3a1e",
      "tags": "watercooler, dei, career",
      "reactions": 7,
      "comments": 0,
      "reading_time": 5,
      "author": "phalkmin"
    },
    {
      "title": "The \"Stateless\" AI Era is a Massive Engineering Tax",
      "description": "We have spent a decade watching hackers grind through the same 48-hour cycle at MLH: build something...",
      "url": "https://dev.to/mlh/the-stateless-ai-era-is-a-massive-engineering-tax-49ic",
      "tags": "ai, architecture, llm, softwareengineering",
      "reactions": 46,
      "comments": 9,
      "reading_time": 2,
      "author": "mlhacks"
    },
    {
      "title": "Fine-Tuning Gemma 3 with Cloud Run Jobs: Serverless GPUs (NVIDIA RTX 6000 Pro) for pet breed classification 🐈🐕",
      "description": "Architectural worklow: fine tuning Gemma 3 27B on Cloud Run Jobs     Recently, I was inspired by a...",
      "url": "https://dev.to/googleai/fine-tuning-gemma-3-with-cloud-run-jobs-serverless-gpus-nvidia-rtx-6000-pro-for-pet-breed-248b",
      "tags": "nvidia, ai, gemma, serverless",
      "reactions": 5,
      "comments": 0,
      "reading_time": 14,
      "author": "shirmeirlador"
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
      "title": "Allium LLM-native spec language",
      "url": "https://juxt.github.io/allium/",
      "score": 1,
      "comments": 0,
      "tags": [
        "vibecoding"
      ],
      "id": "o44mil"
    },
    {
      "title": "My favorite thing to do with AI doesn't really have a label",
      "url": "https://daniel.do/article/my-favorite-thing-to-do-with-ai",
      "score": 1,
      "comments": 0,
      "tags": [
        "culture",
        "vibecoding"
      ],
      "id": "xfnjjy"
    },
    {
      "title": "Your Single Use iPhone",
      "url": "https://www.youtube.com/watch?v=NG-lLt5X3Rs",
      "score": 1,
      "comments": 0,
      "tags": [
        "hardware",
        "law",
        "mobile",
        "video"
      ],
      "id": "3o2l2w"
    },
    {
      "title": "USB for Software Developers",
      "url": "https://werwolv.net/posts/usb_for_sw_devs/",
      "score": 1,
      "comments": 0,
      "tags": [
        "hardware",
        "programming"
      ],
      "id": "ayr0cj"
    },
    {
      "title": "Installing OpenBSD on the Pomera DM250{,XY?}",
      "url": "https://jcs.org/2026/04/09/openbsd-dm250",
      "score": 3,
      "comments": 0,
      "tags": [
        "hardware",
        "openbsd"
      ],
      "id": "tmbbhl"
    },
    {
      "title": "Incremental compilation with LLVM",
      "url": "https://ziglang.org/devlog/2026/#2026-04-08",
      "score": 9,
      "comments": 1,
      "tags": [
        "zig"
      ],
      "id": "tbud4j"
    },
    {
      "title": "My Login Shell in Assembly",
      "url": "https://isene.org/2026/04/Bare.html",
      "score": 3,
      "comments": 6,
      "tags": [
        "assembly",
        "vibecoding"
      ],
      "id": "wnizjm"
    },
    {
      "title": "Yacc is Not Dead (2010)",
      "url": "https://research.swtch.com/yaccalive",
      "score": 4,
      "comments": 4,
      "tags": [
        "unix"
      ],
      "id": "ylkrnu"
    },
    {
      "title": "Charcuterie. A visual explorer for Unicode",
      "url": "https://charcuterie.elastiq.ch",
      "score": 2,
      "comments": 0,
      "tags": [
        "programming",
        "visualization"
      ],
      "id": "qiq6qb"
    },
    {
      "title": "preact-react-reconciler: turn preact into a react reconciler",
      "url": "https://github.com/easrng/preact-react-reconciler",
      "score": 3,
      "comments": 0,
      "tags": [
        "javascript",
        "web"
      ],
      "id": "v188hd"
    }
  ]
}
- Fetching feeds...
{
  "source": "hackernews",
  "items": [
    {
      "by": "speckx",
      "descendants": 91,
      "id": 47704804,
      "kids": [
        47711967,
        47713548,
        47712888,
        47712482,
        47714320,
        47713379,
        47713936,
        47712348,
        47705155,
        47712278,
        47713261,
        47713749,
        47713686,
        47712697,
        47714460,
        47714007,
        47712021
      ],
      "score": 274,
      "time": 1775747560,
      "title": "How NASA built Artemis II’s fault-tolerant computer",
      "type": "story",
      "url": "https://cacm.acm.org/news/how-nasa-built-artemis-iis-fault-tolerant-computer/"
    },
    {
      "by": "PaulHoule",
      "descendants": 204,
      "id": 47708818,
      "kids": [
        47710293,
        47712299,
        47710172,
        47713976,
        47710002,
        47710227,
        47710296,
        47709420,
        47709230,
        47714238,
        47711733,
        47710908,
        47709745,
        47714081,
        47710351,
        47709880,
        47713555,
        47710750,
        47709852,
        47712310,
        47711461,
        47713118,
        47712298,
        47713141,
        47709098,
        47713264,
        47709100,
        47712584,
        47712279,
        47714065,
        47713391,
        47710055,
        47710529,
        47710048,
        47711034,
        47710705,
        47710977,
        47714068,
        47710682,
        47710219,
        47711867,
        47711028,
        47710554,
        47711764,
        47711396,
        47711197,
        47709433,
        47711692,
        47710101,
        47710029,
        47712351,
        47710454,
        47709791,
        47709254,
        47713101,
        47710592,
        47710619,
        47713078,
        47712403,
        47710847,
        47710819,
        47710265,
        47712399,
        47708904,
        47712192,
        47711328,
        47711601,
        47710147,
        47710455,
        47709743,
        47710250,
        47709661,
        47710309,
        47710344
      ],
      "score": 441,
      "time": 1775764106,
      "title": "Native Instant Space Switching on macOS",
      "type": "story",
      "url": "https://arhan.sh/blog/native-instant-space-switching-on-macos/"
    },
    {
      "by": "volatilityfund",
      "descendants": 1,
      "id": 47714239,
      "kids": [
        47714473
      ],
      "score": 8,
      "time": 1775801387,
      "title": "The tool that won't let AI say anything it can't cite",
      "type": "story",
      "url": "https://github.com/grainulation/grainulator"
    },
    {
      "by": "gmays",
      "descendants": 73,
      "id": 47712718,
      "kids": [
        47713089,
        47713065,
        47713172,
        47712816,
        47714383,
        47713042,
        47713491,
        47713076,
        47713571,
        47713604,
        47713199,
        47713541,
        47713592,
        47713412,
        47713638,
        47713603,
        47713369,
        47713205,
        47713278,
        47713568,
        47713145,
        47713225,
        47712983,
        47713330,
        47714313
      ],
      "score": 70,
      "time": 1775786508,
      "title": "I still prefer MCP over skills",
      "type": "story",
      "url": "https://david.coffee/i-still-prefer-mcp-over-skills/"
    },
    {
      "by": "evakhoury",
      "descendants": 24,
      "id": 47675906,
      "kids": [
        47713183,
        47713080,
        47714166,
        47713242,
        47713189,
        47713201,
        47714236,
        47713585,
        47713536,
        47712881,
        47713711,
        47714220,
        47713293,
        47714137
      ],
      "score": 98,
      "time": 1775571923,
      "title": "Generative art over the years",
      "type": "story",
      "url": "https://blog.veitheller.de/Generative_art_over_the_years.html"
    },
    {
      "by": "ellieh",
      "descendants": 88,
      "id": 47712656,
      "kids": [
        47713454,
        47714447,
        47714456,
        47713641,
        47713460,
        47714451,
        47713351,
        47713523,
        47714437,
        47713432,
        47712848,
        47713550,
        47714400,
        47714398,
        47714336,
        47714158,
        47713479,
        47713597,
        47713502,
        47713455,
        47713404,
        47713230,
        47713607,
        47713509,
        47713891,
        47713355,
        47713323
      ],
      "score": 60,
      "time": 1775785978,
      "title": "We've raised $17M to build what comes after Git",
      "type": "story",
      "url": "https://blog.gitbutler.com/series-a"
    },
    {
      "by": "zdw",
      "descendants": 4,
      "id": 47675731,
      "kids": [
        47714229,
        47714134,
        47714217,
        47714252
      ],
      "score": 37,
      "time": 1775571239,
      "title": "Principles of Mechanical Sympathy",
      "type": "story",
      "url": "https://martinfowler.com/articles/mechanical-sympathy-principles.html"
    },
    {
      "by": "rickcarlino",
      "descendants": 34,
      "id": 47709158,
      "kids": [
        47710516,
        47714295,
        47711498,
        47709887,
        47711176,
        47713081,
        47711917,
        47712898,
        47711904,
        47713897,
        47711120,
        47711980,
        47713708,
        47712780,
        47711048,
        47711902,
        47712818,
        47711264,
        47712633,
        47712878,
        47711841,
        47710163,
        47711948,
        47711098,
        47711314,
        47712051
      ],
      "score": 190,
      "time": 1775765527,
      "title": "Charcuterie – Visual similarity Unicode explorer",
      "type": "story",
      "url": "https://charcuterie.elastiq.ch/"
    },
    {
      "by": "surprisetalk",
      "descendants": 23,
      "id": 47680005,
      "kids": [
        47713075,
        47713255,
        47714448,
        47712991,
        47713682,
        47714024,
        47713382,
        47713813,
        47713846,
        47713090,
        47682870
      ],
      "score": 152,
      "time": 1775589272,
      "title": "RAM Has a Design Flaw from 1966. I Bypassed It [video]",
      "type": "story",
      "url": "https://www.youtube.com/watch?v=KKbgulTp3FE"
    },
    {
      "by": "OBrien_1107",
      "id": 47713744,
      "score": 1,
      "time": 1775796185,
      "title": "CollectWise (YC F24) Is Hiring",
      "type": "job",
      "url": "https://www.ycombinator.com/companies/collectwise/jobs/Ktc6m6o-ai-agent-engineer"
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
Request error: Request failed with status code 403
✖ Request failed. Check network/API settings and try again.
- Fetching feeds...
{
  "source": "devto",
  "tag": "career",
  "sort": "top",
  "items": [
    {
      "title": "When Your UX Only Fits Two Sizes",
      "description": "A few years ago, right before the pandemic hit, I was trying to buy clothes online. Nothing fancy,...",
      "url": "https://dev.to/phalkmin/when-your-ux-only-fits-two-sizes-3a1e",
      "tags": "watercooler, dei, career",
      "reactions": 7,
      "comments": 0,
      "reading_time": 5,
      "author": "phalkmin"
    },
    {
      "title": "The Certification Industrial Complex",
      "description": "The Invoice — Episode 17  \"Get certified! Industry-recognised credentials! Advance your career!...",
      "url": "https://dev.to/vivian-voss/the-certification-industrial-complex-4i7d",
      "tags": "career, programming, certification, industry",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "vivian-voss"
    },
    {
      "title": "How to Talk to Your Manager About Burnout (Without It Feeling Career-Limiting)",
      "description": "Most advice on this topic tells you to \"be honest with your manager\" and \"frame it as a performance...",
      "url": "https://dev.to/recharge/how-to-talk-to-your-manager-about-burnout-without-it-feeling-career-limiting-h66",
      "tags": "burnout, career, mentalhealth, webdev",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "recharge"
    },
    {
      "title": "How Recruiters Scan Resumes in 6 Seconds (What They Actually Look For)",
      "description": "Recruiters don't read resumes. They scan them. Eye-tracking studies consistently show the first pass...",
      "url": "https://dev.to/sarah_m/how-recruiters-scan-resumes-in-6-seconds-what-they-actually-look-for-130j",
      "tags": "career, resume, beginners, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sarah_m"
    },
    {
      "title": "I Analyzed Real Mock Coding Interviews. Here's What Separates Hires from No Hires",
      "description": "We run AI mock coding interviews on intervu.dev. Each session is scored across five pillars...",
      "url": "https://dev.to/anbmz_llc_1253b3cd322ff8e/i-analyzed-real-mock-coding-interviews-heres-what-separates-hires-from-no-hires-33d1",
      "tags": "programming, career, interview, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 3,
      "author": "anbmz_llc_1253b3cd322ff8e"
    },
    {
      "title": "How to Write a Resume With No Experience (2026 Guide)",
      "description": "Here is the truth most resume guides skip: employers hiring for entry-level positions already know...",
      "url": "https://dev.to/sarah_m/how-to-write-a-resume-with-no-experience-2026-guide-1c34",
      "tags": "career, resume, beginners, productivity",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "sarah_m"
    },
    {
      "title": "A decade and a half",
      "description": "Last Friday, there was a sudden moment of cake and cava at the office. To celebrate ... me! What had...",
      "url": "https://dev.to/hanneslowette/a-decade-and-a-half-2oe3",
      "tags": "workplace, career",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "hanneslowette"
    },
    {
      "title": "How to Stay Ahead with Creativity When Trying to Build Your Brand",
      "description": "Building a strong personal brand is all about consistently sharing what you’re passionate about and...",
      "url": "https://dev.to/shyam_bhardwaj/how-to-stay-ahead-with-creativity-when-trying-to-build-your-brand-1h6i",
      "tags": "career, design, marketing, writing",
      "reactions": 0,
      "comments": 0,
      "reading_time": 4,
      "author": "shyam_bhardwaj"
    },
    {
      "title": "What 50+ QA Automation Interviews Taught Me About Flaky Tests",
      "description": "Last month I asked a senior candidate the same question I ask everyone. \"Tell me about a flaky test...",
      "url": "https://dev.to/aston_cook_b6e2cd3f3c477b/what-50-qa-automation-interviews-taught-me-about-flaky-tests-4776",
      "tags": "qa, testing, career, playwright",
      "reactions": 0,
      "comments": 0,
      "reading_time": 5,
      "author": "aston_cook_b6e2cd3f3c477b"
    },
    {
      "title": "The Secret AWS Skill That Gets Freshers Hired While Everyone Else Gets Ignored",
      "description": "This isn't about certifications. It isn't about projects. It's something nobody is teaching.         ...",
      "url": "https://dev.to/learnwithprashik/the-secret-aws-skill-that-gets-freshers-hired-while-everyone-else-gets-ignored-gg5",
      "tags": "aws, career, programming, beginners",
      "reactions": 0,
      "comments": 0,
      "reading_time": 6,
      "author": "learnwithprashik"
    }
  ]
}
```

