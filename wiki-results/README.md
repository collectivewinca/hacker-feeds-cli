# Wiki Results Package

Audience-specific wiki results generated from `hacker-feeds-cli` query bundles.

## Contents

- `raw/`: full live command outputs in markdown
- `wiki/`: curated markdown wiki pages
- `wiki-html/`: static HTML wiki pages
- `scripts/build-wiki-html.js`: rebuild HTML from markdown wiki files

## Local View

Open:

- `wiki-results/wiki-html/index.html`

Or run a local server from repo root:

```bash
python3 -m http.server 8765
# then open http://localhost:8765/wiki-results/wiki-html/index.html
```

## Rebuild HTML

```bash
node wiki-results/scripts/build-wiki-html.js
```
