---
name: hacker-feeds
description: >
  Get trending repos, top stories, and hot posts from GitHub, Hacker News, Reddit,
  Product Hunt, and V2EX. Use when the user asks about trending tech, top stories,
  what's new on HN, developer news, popular repos, or hot posts. Triggers on phrases
  like "what's trending", "top stories", "hacker news", "github trending", "show me
  reddit", "product hunt today", "tech news".
---

# Hacker Feeds

Fetch developer news and trending content from 5 sources via the `hf` CLI.

## Quick Reference

```bash
hf --json github  -s daily -l javascript    # GitHub trending (daily/weekly/monthly)
hf --json news    -t 5                       # Hacker News top N stories
hf --json reddit  -t popular -s hot          # Reddit (hot/new/top/rising)
hf --json product -c 5                       # Product Hunt top N (requires token)
hf --json v2ex    -n hot                     # V2EX (hot/create/tech nodes)
```

Always use `--json` for structured output. Parse the JSON and format as tables.

## Commands

### GitHub Trending

```bash
hf --json github -s <since> [-l <language>]
```

| Flag | Values | Default |
|------|--------|---------|
| `-s, --since` | `daily`, `weekly`, `monthly` | `daily` |
| `-l, --lang` | Any GitHub language (e.g. `javascript`, `python`, `rust`) | all |

### Hacker News

```bash
hf --json news -t <count>
```

| Flag | Values | Default |
|------|--------|---------|
| `-t, --top` | Number of top stories | 10 |

### Reddit

```bash
hf --json reddit [-t <topic>] [-s <sort>]
```

| Flag | Values | Default |
|------|--------|---------|
| `-t, --topic` | Any subreddit name or `popular` | `popular` |
| `-s, --sort` | `hot`, `new`, `top`, `rising`, `best` | `hot` |

### Product Hunt

```bash
hf --json product -c <count> [-p <past>]
```

| Flag | Values | Default |
|------|--------|---------|
| `-c, --count` | Number of products | 10 |
| `-p, --past` | Days in the past (0 = today) | 0 |

**Requires token.** If `hf config` has no token and `HF_PRODUCTHUNT_TOKEN` is unset, skip Product Hunt and tell the user:
> "Product Hunt requires an API token. Get one at https://api.producthunt.com/v2/oauth/applications and run `hf config --ph-token <token>`."

### V2EX

```bash
hf --json v2ex [-n <node>]
```

| Flag | Values | Default |
|------|--------|---------|
| `-n, --node` | `hot`, `create`, `tech`, `jobs`, `qna`, `deals`, `city`, `play` etc. | `hot` |

## Output Formatting

**Never dump raw JSON to the user.** Parse the JSON and present as markdown tables.

### GitHub

```
| # | Repo | Description | Lang | Stars | +Today |
|---|------|-------------|------|-------|--------|
| 1 | author/repo | Short description... | Rust | 12,400 | +350 |
```

Fields: `items[].author`, `items[].repo`, `items[].desc`, `items[].lang`, `items[].stars`, `items[].added_stars`

### Hacker News

```
| # | Title | Points | Comments | Link |
|---|-------|--------|----------|------|
| 1 | Story title here | 542 | 128 | news.ycombinator.com |
```

Fields: `items[].title`, `items[].score`, `items[].descendants`, `items[].url`

Link: show domain only. If `url` is missing, use `https://news.ycombinator.com/item?id=<id>`.

### Reddit

```
| # | Title | Subreddit | Score | Comments |
|---|-------|-----------|-------|----------|
| 1 | Post title here | r/programming | 1,234 | 89 |
```

Fields: `items[].title`, `items[].subreddit`, `items[].score`, `items[].num_comments`, `items[].url`

### Product Hunt

```
| # | Name | Tagline | Votes | Rating |
|---|------|---------|-------|--------|
| 1 | Product Name | Short tagline | 456 | 4.9 |
```

Fields: `items[].name`, `items[].tagline`, `items[].votesCount`, `items[].reviewsRating`

### V2EX

```
| # | Title | Replies | Node |
|---|-------|---------|------|
| 1 | Post title here | 42 | create |
```

Fields: `items[].title`, `items[].replies`, `items[].node`, `items[].url`

## Intent Mapping

| User says | Command |
|-----------|---------|
| "what's trending on github?" | `hf --json github -s daily` |
| "trending python repos this week" | `hf --json github -s weekly -l python` |
| "top hacker news stories" | `hf --json news -t 10` |
| "HN top 5" | `hf --json news -t 5` |
| "what's hot on reddit?" | `hf --json reddit -s hot` |
| "r/rust top posts" | `hf --json reddit -t rust -s top` |
| "what launched on product hunt today?" | `hf --json product -c 10` |
| "product hunt yesterday" | `hf --json product -c 10 -p 1` |
| "v2ex hot posts" | `hf --json v2ex -n hot` |
| "tech news" / "dev news" | Run 2-3 feeds (github + news + reddit) and summarize |
| "morning brief" / "what's new?" | Run all available feeds, summarize top items from each |

## Multi-Feed Summaries

When the user asks for a general briefing (e.g. "tech news", "what's new today"), run multiple feeds and present a combined summary:

1. Run feeds in parallel where possible
2. Present each source as a separate section with its table
3. Add a 2-3 sentence summary at the top highlighting the most notable items
4. Keep tables short (5 items each) for briefings

## Installation

### Local (macOS)

```bash
npm i -g hacker-feeds-cli
hf --version
```

### Server (for OpenClaw)

```bash
npm i -g git+https://github.com/collectivewinca/hacker-feeds-cli.git
hf config --ph-token <token>  # Optional: Product Hunt
```

Note: install from GitHub (not npm) to get the fork with `--ph-token` and `--json` support.

Copy this skill to the server:
```bash
scp -r skills/hacker-feeds root@46.62.231.92:/root/clawd/skills/
```

## Defaults

When the user doesn't specify details, use sensible defaults:

- GitHub: `daily`, no language filter, show top 10
- Hacker News: top 10 stories
- Reddit: `popular` + `hot`, show top 10
- Product Hunt: today, 5 products
- V2EX: `hot` node

## Error Handling

- If a feed times out or returns empty: report which feed failed, show results from others
- If `hf` is not installed: tell the user to run `npm i -g hacker-feeds-cli`
- If Product Hunt has no token: skip it silently in multi-feed mode, explain in single-feed mode
