#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

VERBOSE="${VERBOSE:-0}"
failures=0
passed=0
skipped=0
results=()

run_json_check() {
  local source="$1"
  shift
  local output item_count elapsed
  local start_time end_time

  start_time=$(date +%s%N 2>/dev/null || date +%s)
  output="$("$@" 2>&1 || true)"
  end_time=$(date +%s%N 2>/dev/null || date +%s)

  # Calculate elapsed time (ms if nanoseconds available, otherwise s)
  if [[ ${#start_time} -gt 10 ]]; then
    elapsed="$(( (end_time - start_time) / 1000000 ))ms"
  else
    elapsed="$(( end_time - start_time ))s"
  fi

  if grep -q '"source"' <<<"$output" && grep -q "\"source\": \"${source}\"" <<<"$output"; then
    # Count items in the response
    item_count=$(grep -c '"title"\|"repo"\|"name"' <<<"$output" || echo "0")
    results+=("  ✓ ${source}  ${item_count} items  ${elapsed}")
    passed=$((passed + 1))

    if [[ "$VERBOSE" == "1" ]]; then
      echo "$output"
    fi
  else
    # Show first 3 lines of output on failure to help diagnose
    local preview
    preview=$(head -3 <<<"$output")
    results+=("  ✗ ${source}  failed  ${elapsed}")
    results+=("    ↳ ${preview}")
    failures=$((failures + 1))
  fi
}

echo ""
echo "  hacker-feeds-cli live smoke test"
echo "  ─────────────────────────────────"
echo ""

run_json_check "github" node bin/main.js --json github -s daily -l javascript
run_json_check "hackernews" node bin/main.js --json news -t 3
run_json_check "reddit" node bin/main.js --json reddit -t popular -s hot
run_json_check "v2ex" node bin/main.js --json v2ex -n create
run_json_check "devto" node bin/main.js --json devto -c 3
run_json_check "lobsters" node bin/main.js --json lobsters -c 3
run_json_check "echojs" node bin/main.js --json echojs -c 3

if [[ -n "${HF_PRODUCTHUNT_TOKEN:-}" || "${REQUIRE_PRODUCTHUNT:-0}" == "1" ]]; then
  if [[ -z "${HF_PRODUCTHUNT_TOKEN:-}" ]]; then
    results+=("  ✗ producthunt  missing HF_PRODUCTHUNT_TOKEN")
    failures=$((failures + 1))
  else
    run_json_check "producthunt" node bin/main.js --json product -c 1
  fi
else
  results+=("  ○ producthunt  skipped (no token)")
  skipped=$((skipped + 1))
fi

# Print results
for line in "${results[@]}"; do
  echo "$line"
done

echo ""
echo "  ─────────────────────────────────"
total=$((passed + failures + skipped))
echo "  ${passed} passed  ${failures} failed  ${skipped} skipped  (${total} feeds)"
echo ""

if [[ "$failures" -gt 0 ]]; then
  echo "  Set VERBOSE=1 to see full JSON output"
  exit 1
fi
