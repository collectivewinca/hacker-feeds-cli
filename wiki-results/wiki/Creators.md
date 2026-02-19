# Creators Wiki

## Goal

Identify high-leverage content ideas and narrative angles from live tech feeds.

## Feed Mix

- Product Hunt
- Reddit
- Dev.to
- GitHub Trending
- Hacker News
- Lobsters

## Query Playbook

| # | Use Case | Query | Command |
|---|---|---|---|
| 1 | Hot themes today | What content themes are hot today? | `hf --json product -c 10 && hf --json reddit -t popular -s hot && hf --json devto -s top -c 10` |
| 2 | Weekly AI/Web ideas | What should I make a video/post about this week in AI + web? | `hf --json github -s weekly -l javascript && hf --json devto -t ai -s top -c 10 && hf --json news -t 10` |
| 3 | Launch reaction content | What products launched that I can review or react to? | `hf --json product -c 15 && hf --json reddit -t startups -s new` |
| 4 | Debate-driven talking points | What talking points are tech people debating right now? | `hf --json news -t 12 && hf --json lobsters -s hottest -c 10` |

## Publishing Workflow

1. Run one query bundle.
2. Pick 3-5 repeated topics across the three sources.
3. Draft one short-form post, one thread, one long-form piece.
4. Re-run in 24h and update with trend movement.

## Raw Results

- [`hacker-feeds-creators.md`](../hacker-feeds-creators.md)
