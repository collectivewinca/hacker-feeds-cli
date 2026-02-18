#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[smoke:live] Running live feed checks..."

echo "[smoke:live] github"
node bin/main.js --json github -s daily -l javascript >/dev/null

echo "[smoke:live] news"
node bin/main.js --json news -t 3 >/dev/null

echo "[smoke:live] reddit"
node bin/main.js --json reddit -t popular -s hot >/dev/null

echo "[smoke:live] v2ex"
node bin/main.js --json v2ex -n create >/dev/null

if [[ -n "${HF_PRODUCTHUNT_TOKEN:-}" ]]; then
  echo "[smoke:live] producthunt"
  node bin/main.js --json product -c 1 >/dev/null
else
  echo "[smoke:live] producthunt skipped (set HF_PRODUCTHUNT_TOKEN to enable)"
fi

echo "[smoke:live] done"
