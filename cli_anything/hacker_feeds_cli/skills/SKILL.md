# SKILL.md — Hacker Feeds CLI

## Skill Metadata

- **name**: cli-anything-hacker-feeds-cli
- **description**: Fetch developer news feeds from Hacker News, Product Hunt, GitHub Trending, Reddit, V2EX, DEV.to, Lobsters, and EchoJS via a unified CLI interface.
- **commands**: `hf news`, `hf github`, `hf product`, `hf reddit`, `hf v2ex`, `hf devto`, `hf lobsters`, `hf echojs`, `hf config`
- **flags**: `--json` outputs machine-readable JSON for all commands

## What this CLI does

`hacker-feeds-cli` aggregates developer news from multiple platforms into a single command-line tool:

- **Hacker News** (`hf news`) — Top stories from news.ycombinator.com
- **Product Hunt** (`hf product`) — New product launches (requires free API token)
- **GitHub Trending** (`hf github`) — Trending repositories with language and time-range filters
- **Reddit** (`hf reddit`) — Subreddit feeds with sort options
- **V2EX** (`hf v2ex`) — Chinese tech community feeds
- **DEV.to** (`hf devto`) — Developer articles with tag and sort filters
- **Lobsters** (`hf lobsters`) — Technology link aggregator
- **EchoJS** (`hf echojs`) — JavaScript news aggregator

## Installation

```bash
# Requires Node.js and npm
npm install -g hacker-feeds-cli

# Python CLI wrapper (for agents)
pip install cli-anything-hacker-feeds-cli
```

## Command Reference

### `hf news [-t N]`
Fetch Hacker News top stories. Default 10 items.

```bash
hf news -t 5
hf --json news -t 5
```

### `hf github [-s daily|weekly|monthly] [-l LANGUAGE]`
Fetch GitHub Trending repositories.

```bash
hf github -s daily -l python
hf --json github -s weekly
```

### `hf product [-c N] [-p DAYS]`
Fetch Product Hunt launches. Requires API token via `HF_PRODUCTHUNT_TOKEN` env var or `hf config`.

```bash
hf product -c 5
hf --json product -c 3
```

### `hf reddit [-t SUBREDDIT] [-s rising|hot|top|new|comments]`
Fetch Reddit feed.

```bash
hf reddit -t programming -s rising
hf --json reddit -t popular -s top
```

### `hf v2ex [-n NODE]`
Fetch V2EX feeds by node.

```bash
hf v2ex -n share
hf --json v2ex -n tech
```

### `hf devto [-t TAG] [-s top|latest|hot] [-c N]`
Fetch DEV.to articles.

```bash
hf devto -t javascript -s top
hf --json devto -c 10
```

### `hf lobsters [-s hottest|rising|top|new] [-t TAG] [-c N]`
Fetch Lobsters feeds.

```bash
hf lobsters -s top -c 5
hf --json lobsters -t programming
```

### `hf echojs [-s latest|hot|best] [-c N]`
Fetch EchoJS feeds.

```bash
hf echojs -s hot
hf --json echojs -c 10
```

### `hf config [--lang en|zh] [--ph-token TOKEN]`
Configure language and Product Hunt token. Interactive if run without flags.

```bash
hf config --lang en --ph-token <token>
```

## JSON Output

Use `--json` before any subcommand for machine-readable output:

```json
{
  "source": "github",
  "items": [
    {
      "rank": 1,
      "name": "owner/repo",
      "description": "...",
      "stars": "1,234",
      "language": "JavaScript",
      "url": "https://github.com/owner/repo"
    }
  ]
}
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `HF_PRODUCTHUNT_TOKEN` | Product Hunt API token (free, from api.producthunt.com/v2/oauth/applications) |

## Product Hunt Setup

1. Visit [api.producthunt.com/v2/oauth/applications](https://api.producthunt.com/v2/oauth/applications)
2. Sign in → Add an Application → set redirect URI to `https://localhost`
3. Generate a Developer Token
4. Configure: `hf config --ph-token YOUR_TOKEN` or `export HF_PRODUCTHUNT_TOKEN=YOUR_TOKEN`
