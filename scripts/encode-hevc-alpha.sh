#!/usr/bin/env bash
# Re-encode all 6 karakter videos as HEVC with alpha for Safari.
# Run this on your Mac from the project root:
#   bash scripts/encode-hevc-alpha.sh
#
# Requires: ffmpeg with hevc_videotoolbox (built into macOS / Homebrew ffmpeg)
# After running, commit the new -hevc.mp4 files and push to deploy.

set -e
cd "$(dirname "$0")/.."
CHARS="public/characters"

declare -A BG=(
  [1]="f8f9f9"
  [2]="f4f5f4"
  [3]="f8f9f8"
  [4]="f7f8f7"
  [5]="f6f9f8"
  [6]="fdfdfd"
)

for k in 1 2 3 4 5 6; do
  bg="${BG[$k]}"
  input="${CHARS}/karakter-${k}.mp4"
  output="${CHARS}/karakter-${k}-hevc.mp4"

  echo "→ karakter-${k}  bg=#${bg}"

  ffmpeg -y -i "$input" \
    -vf "colorkey=0x${bg}:0.18:0.06,format=ayuv" \
    -c:v hevc_videotoolbox \
    -allow_sw 1 \
    -alpha_quality 0.75 \
    -tag:v hvc1 \
    "$output"

  echo "✅  karakter-${k}-hevc.mp4  ($(du -h "$output" | cut -f1))"
done

echo ""
echo "All done! Verify transparency in Safari/QuickTime, then:"
echo "  git add public/characters/*-hevc.mp4"
echo "  git commit -m 'fix: HEVC alpha re-encoded with format=ayuv'"
echo "  git push"
