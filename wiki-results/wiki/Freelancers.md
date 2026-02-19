# Freelancers Wiki

## Goal

Find client pain points, service angles, and monetizable trend pockets.

## Feed Mix

- Product Hunt
- Reddit
- GitHub Trending
- Hacker News
- Lobsters
- Dev.to

## Query Playbook

| # | Use Case | Query | Command |
|---|---|---|---|
| 1 | Services to pitch this week | What services can I pitch this week? | `hf --json product -c 12 && hf --json reddit -t smallbusiness -s top && hf --json github -s weekly -l javascript` |
| 2 | Founder pain points | What pain points are founders talking about? | `hf --json reddit -t startups -s hot && hf --json news -t 10 && hf --json lobsters -s hottest -c 8` |
| 3 | Growing paid niches | What tech niches are growing where clients may pay? | `hf --json github -s monthly -l python && hf --json github -s monthly -l typescript && hf --json devto -s top -c 10` |
| 4 | Quick-win packaged offers | What quick-win offers can I package (automation/web/AI)? | `hf --json product -c 10 && hf --json devto -t productivity -s top -c 10 && hf --json reddit -t freelance -s top` |

## Offer Design Workflow

1. Capture recurring pains from startup/smallbusiness channels.
2. Map each pain to a productized offer with fixed scope.
3. Attach a stack proof point from GitHub/HN trend evidence.
4. Build one-page proposal template per offer.

## Raw Results

- [`hacker-feeds-freelancers.md`](../hacker-feeds-freelancers.md)
