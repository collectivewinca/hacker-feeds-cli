# Solo Developers Wiki

## Goal

Spot build opportunities, stack momentum, and practical skill priorities.

## Feed Mix

- Product Hunt
- GitHub Trending
- Reddit
- Echo JS
- Dev.to
- Lobsters
- Hacker News

## Query Playbook

| # | Use Case | Query | Command |
|---|---|---|---|
| 1 | Weekend build demand | What should I build this weekend that has demand? | `hf --json product -c 10 && hf --json github -s weekly -l typescript && hf --json reddit -t webdev -s top` |
| 2 | Monthly stack direction | What stack trends should I follow this month? | `hf --json github -s monthly -l go && hf --json github -s monthly -l python && hf --json echojs -s latest -c 10` |
| 3 | What builders are shipping | What are builders shipping and discussing right now? | `hf --json devto -s top -c 10 && hf --json lobsters -s newest -c 10 && hf --json news -t 10` |
| 4 | Skill roadmap topics | What practical coding topics should I study next? | `hf --json reddit -t programming -s top && hf --json devto -t career -s top -c 10` |

## Build Prioritization Workflow

1. Rank ideas by market pull (Product Hunt + Reddit signals).
2. Validate technical feasibility via GitHub Trending and HN.
3. Choose one idea to ship in 48-72 hours.
4. Document and publish build log for feedback loop.

## Raw Results

- [`hacker-feeds-solo-developers.md`](../hacker-feeds-solo-developers.md)
