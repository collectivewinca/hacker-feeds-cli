#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR"

DATE_UTC="$(date -u +%F)"
STAMP_UTC="$(date -u '+%Y-%m-%d %H:%M:%S UTC')"
RAW_DIR="wiki-results/raw"
DAILY_DIR="$RAW_DIR/daily"

mkdir -p "$DAILY_DIR"

POLYFILL_FILE="/tmp/hf-polyfill.js"
cat > "$POLYFILL_FILE" <<'POLY'
if (typeof File === 'undefined') {
  global.File = class File {};
}
POLY
export NODE_OPTIONS="--require $POLYFILL_FILE"

run_section() {
  local file="$1"
  local title="$2"
  local query="$3"
  local cmd="$4"

  {
    echo "## ${title}"
    echo
    echo "**Query:** ${query}"
    echo
    echo "**Command:**"
    echo '```bash'
    echo "$cmd"
    echo '```'
    echo
    echo "**Output:**"
    echo '```text'
  } >> "$file"

  set +e
  bash -lc "export NODE_OPTIONS='--require $POLYFILL_FILE'; $cmd" >> "$file" 2>&1
  local exit_code=$?
  set -e

  if [ $exit_code -ne 0 ]; then
    echo "[exit code: $exit_code]" >> "$file"
  fi

  {
    echo '```'
    echo
  } >> "$file"
}

cmd_product_10="node bin/main.js --json product -c 10"
cmd_product_12="node bin/main.js --json product -c 12"
cmd_product_15="node bin/main.js --json product -c 15"

if [[ -z "${HF_PRODUCTHUNT_TOKEN:-}" ]]; then
  cmd_product_10="echo '[info] Product Hunt skipped: HF_PRODUCTHUNT_TOKEN is not set'"
  cmd_product_12="$cmd_product_10"
  cmd_product_15="$cmd_product_10"
fi

creators_file="$DAILY_DIR/hacker-feeds-creators-${DATE_UTC}.md"
{
  echo "# Hacker Feeds Outcomes - Creators"
  echo
  echo "Generated on: ${STAMP_UTC}"
  echo
  echo "Runtime note: executed with NODE_OPTIONS=--require /tmp/hf-polyfill.js"
  echo
} > "$creators_file"

run_section "$creators_file" "1. Hot Content Themes Today" "What content themes are hot today?" "$cmd_product_10 ; node bin/main.js --json reddit -t popular -s hot ; node bin/main.js --json devto -s top -c 10"
run_section "$creators_file" "2. This Week AI + Web Content Ideas" "What should I make a video/post about this week in AI + web?" "node bin/main.js --json github -s weekly -l javascript ; node bin/main.js --json devto -t ai -s top -c 10 ; node bin/main.js --json news -t 10"
run_section "$creators_file" "3. Product Launches to Review/React" "What products launched that I can review or react to?" "$cmd_product_15 ; node bin/main.js --json reddit -t startups -s new"
run_section "$creators_file" "4. Current Tech Debate Talking Points" "What talking points are tech people debating right now?" "node bin/main.js --json news -t 12 ; node bin/main.js --json lobsters -s hottest -c 10"

solo_file="$DAILY_DIR/hacker-feeds-solo-developers-${DATE_UTC}.md"
{
  echo "# Hacker Feeds Outcomes - Solo Developers"
  echo
  echo "Generated on: ${STAMP_UTC}"
  echo
  echo "Runtime note: executed with NODE_OPTIONS=--require /tmp/hf-polyfill.js"
  echo
} > "$solo_file"

run_section "$solo_file" "1. Weekend Build Ideas with Demand" "What should I build this weekend that has demand?" "$cmd_product_10 ; node bin/main.js --json github -s weekly -l typescript ; node bin/main.js --json reddit -t webdev -s top"
run_section "$solo_file" "2. Monthly Stack Trends" "What stack trends should I follow this month?" "node bin/main.js --json github -s monthly -l go ; node bin/main.js --json github -s monthly -l python ; node bin/main.js --json echojs -s latest -c 10"
run_section "$solo_file" "3. What Builders Are Shipping/Discussing" "What are builders shipping and discussing right now?" "node bin/main.js --json devto -s top -c 10 ; node bin/main.js --json lobsters -s newest -c 10 ; node bin/main.js --json news -t 10"
run_section "$solo_file" "4. Practical Coding Topics to Study" "What practical coding topics should I study next?" "node bin/main.js --json reddit -t programming -s top ; node bin/main.js --json devto -t career -s top -c 10"

freelancers_file="$DAILY_DIR/hacker-feeds-freelancers-${DATE_UTC}.md"
{
  echo "# Hacker Feeds Outcomes - Freelancers"
  echo
  echo "Generated on: ${STAMP_UTC}"
  echo
  echo "Runtime note: executed with NODE_OPTIONS=--require /tmp/hf-polyfill.js"
  echo
} > "$freelancers_file"

run_section "$freelancers_file" "1. Services to Pitch This Week" "What services can I pitch this week?" "$cmd_product_12 ; node bin/main.js --json reddit -t smallbusiness -s top ; node bin/main.js --json github -s weekly -l javascript"
run_section "$freelancers_file" "2. Founder Pain Points" "What pain points are founders talking about?" "node bin/main.js --json reddit -t startups -s hot ; node bin/main.js --json news -t 10 ; node bin/main.js --json lobsters -s hottest -c 8"
run_section "$freelancers_file" "3. Growing Tech Niches" "What tech niches are growing where clients may pay?" "node bin/main.js --json github -s monthly -l python ; node bin/main.js --json github -s monthly -l typescript ; node bin/main.js --json devto -s top -c 10"
run_section "$freelancers_file" "4. Quick-Win Offers (Automation/Web/AI)" "What quick-win offers can I package (automation/web/AI)?" "$cmd_product_10 ; node bin/main.js --json devto -t productivity -s top -c 10 ; node bin/main.js --json reddit -t freelance -s top"

cp "$creators_file" "$RAW_DIR/hacker-feeds-creators.md"
cp "$solo_file" "$RAW_DIR/hacker-feeds-solo-developers.md"
cp "$freelancers_file" "$RAW_DIR/hacker-feeds-freelancers.md"

node wiki-results/scripts/build-wiki-html.js

echo "Generated daily reports for ${DATE_UTC}"
