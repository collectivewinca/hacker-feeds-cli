# Roadmap — hacker-feeds-cli

## Current (v0.4.3)

5 feeds supported:

| Feed | Command | Auth |
|------|---------|------|
| GitHub Trending | `hf github` | None |
| Hacker News | `hf news` | None |
| Reddit | `hf reddit` | None |
| Product Hunt | `hf product` | Token (OAuth2) |
| V2EX | `hf v2ex` | None |

## v0.5.0 — New Feeds (Tier 1: No Auth)

Platforms with free public APIs, no authentication required.

### Dev.to (`hf devto`)

Developer articles and tutorials from the Forem platform.

- **API:** `https://dev.to/api/articles` (REST, no auth for reads)
- **Data:** title, description, url, tags, reactions, comments, reading_time
- **Flags:** `-t, --tag <tag>` (filter by tag), `-s, --sort <sort>` (top, latest, rising)
- **Rate limit:** 30 req/min unauthenticated
- **Docs:** https://developers.forem.com/api/v0

### Lobsters (`hf lobsters`)

Curated computing and tech news (like HN but smaller, higher signal).

- **API:** `https://lobste.rs/hottest.json`, `https://lobste.rs/newest.json`
- **Data:** title, url, score, comment_count, tags, submitter
- **Flags:** `-s, --sort <sort>` (hot, new), `-t, --tag <tag>` (filter by tag)
- **Rate limit:** Be polite (no official limit, add delay)
- **Docs:** https://lobste.rs/about

### Echo JS (`hf echojs`)

JavaScript ecosystem news.

- **API:** `https://echojs.com/api/getnews/latest/0/30` (REST, no auth)
- **Data:** title, url, up, comments, ctime
- **Flags:** `-s, --sort <sort>` (latest, top)
- **Rate limit:** Minimal traffic, be respectful
- **Docs:** Unofficial — reverse-engineered REST endpoints

## v0.6.0 — New Feeds (Tier 2: Token-Based)

Platforms with free APIs that benefit from or require authentication.

### Hashnode (`hf hashnode`)

Developer blogging platform with strong GraphQL API.

- **API:** `https://gql.hashnode.com` (GraphQL, public queries work without auth)
- **Data:** title, brief, url, reactionCount, replyCount, author
- **Flags:** `-t, --tag <tag>` (filter by tag), `-c, --count <n>` (number of posts)
- **Rate limit:** Generous for public queries
- **Docs:** https://apidocs.hashnode.com

### Stack Overflow (`hf stackoverflow`)

Trending questions from the developer Q&A platform.

- **API:** `https://api.stackexchange.com/2.3/questions` (REST, optional key)
- **Data:** title, link, score, answer_count, view_count, tags, is_answered
- **Flags:** `-s, --sort <sort>` (hot, votes, activity, creation), `-t, --tag <tag>`
- **Rate limit:** 300 req/day without key, 10k/day with key
- **Docs:** https://api.stackexchange.com/docs

### daily.dev (`hf dailydev`)

Aggregated developer news from multiple sources.

- **API:** `https://app.daily.dev/api/` (REST, token-based)
- **Data:** title, url, source, upvotes, comments, tags
- **Flags:** `-c, --count <n>`, `-s, --sort <sort>` (popular, upvoted)
- **Rate limit:** TBD (newer API)
- **Docs:** https://docs.daily.dev

## v0.7.0 — Enhancements

### Multi-Feed Briefing (`hf brief`)

Run multiple feeds in parallel and present a combined summary.

```bash
hf brief                     # All feeds, 5 items each
hf brief --feeds github,news # Specific feeds only
hf brief --count 3           # 3 items per feed
```

### Feed Aliases

Allow user-defined aliases in `~/.hfrc`:

```json
{
  "aliases": {
    "morning": "brief --feeds github,news,devto --count 5",
    "js": "echojs --sort top"
  }
}
```

Usage: `hf morning`, `hf js`

### Output Formats

- `--json` — existing JSON output
- `--csv` — CSV for spreadsheets / data pipelines
- `--markdown` — formatted markdown tables (for pasting into docs)

### Caching

Cache feed responses for 5 minutes to avoid hammering APIs:

```bash
hf news -t 5          # fetches from API
hf news -t 5          # serves from cache (within 5 min)
hf news -t 5 --fresh  # force refresh
```

## Implementation Pattern

Each new feed follows this structure:

```
1. utils/fetchX.js        — fetch function with text/json output
2. bin/main.js            — commander subcommand
3. utils/index.js         — export
4. common/const.js        — base URL constant
5. i18n/en.js + zh.js     — translation strings
6. tests/fetchX.test.js   — unit tests (mock API responses)
7. scripts/smoke-live.sh  — add JSON check
```

## Priority Order

| Priority | Feed | Effort | Value |
|----------|------|--------|-------|
| 1 | Dev.to | Low | High — large community, great API |
| 2 | Lobsters | Low | High — curated, HN alternative |
| 3 | Echo JS | Low | Medium — JS-specific niche |
| 4 | Hashnode | Medium | Medium — GraphQL, good content |
| 5 | Stack Overflow | Medium | High — universal dev tool |
| 6 | daily.dev | Medium | Medium — newer API, aggregator |
| 7 | Multi-feed brief | Medium | High — killer feature |
| 8 | Feed aliases | Low | Medium — power user feature |
| 9 | CSV/Markdown output | Low | Low — nice to have |
| 10 | Caching | Medium | Medium — polite + fast |

## Release Plan

- **v0.5.0** — Dev.to + Lobsters + Echo JS (3 no-auth feeds)
- **v0.6.0** — Hashnode + Stack Overflow + daily.dev (token-based feeds)
- **v0.7.0** — Multi-feed brief, aliases, output formats, caching
