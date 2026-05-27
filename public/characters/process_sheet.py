"""
process_sheet.py  —  Run once after saving the character sheet.

Usage:
    python3 public/characters/process_sheet.py

Expects:  public/characters/character-sheet.png  (the 3×2 grid you uploaded)
Produces: arbeid / meta-creatives / testpakken / produksjon / prosess / kontakt .png
          debug-head-alignment.png
"""

import sys, os
from PIL import Image, ImageDraw, ImageFont

HERE     = os.path.dirname(os.path.abspath(__file__))
SHEET    = os.path.join(HERE, "character-sheet.png")
OUT_SIZE = 900

# ── 0. Sanity check ──────────────────────────────────────────────────────────
if not os.path.exists(SHEET):
    print("ERROR: character-sheet.png not found in public/characters/")
    print("Save the uploaded character sheet there and re-run.")
    sys.exit(1)

sheet = Image.open(SHEET).convert("RGBA")
SW, SH = sheet.size
print(f"Sheet loaded: {SW}×{SH}")

# ── 1. Remove background (keep only dark green line-art) ─────────────────────
# The sheet has either a white/grey checkerboard BG or is already transparent.
# We remove anything that is NOT dark-ish (i.e. not the green line art).
def remove_background(img: Image.Image) -> Image.Image:
    """Turn any light / grey / white pixel fully transparent."""
    data = img.load()
    w, h = img.size
    result = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    rdata  = result.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = data[x, y]
            # Keep pixel if it is reasonably dark (the green line-art)
            luminance = 0.299*r + 0.587*g + 0.114*b
            if luminance < 180 and a > 40:          # dark enough → keep
                rdata[x, y] = (r, g, b, 255)
            # else leave as transparent
    return result

print("Removing background …")
clean = remove_background(sheet)

# ── 2. Split into 6 cells (3 cols × 2 rows) ──────────────────────────────────
COL_W = SW // 3
ROW_H = SH // 2

NAMES = [
    ("arbeid",         0, 0),   # row 0, col 0
    ("meta-creatives", 0, 1),   # row 0, col 1
    ("testpakken",     0, 2),   # row 0, col 2
    ("produksjon",     1, 0),   # row 1, col 0
    ("prosess",        1, 1),   # row 1, col 1
    ("kontakt",        1, 2),   # row 1, col 2
]

cells = {}
for name, row, col in NAMES:
    x0 = col * COL_W
    y0 = row * ROW_H
    x1 = x0 + COL_W
    y1 = y0 + ROW_H
    cells[name] = clean.crop((x0, y0, x1, y1))

# ── 3. Detect head center for each cell ──────────────────────────────────────
def find_head(img: Image.Image):
    """
    Returns (cx, cy, head_h) of the character's head.
    Strategy:
      - Restrict to a central vertical strip (avoid wide props)
      - Find topmost occupied row  → hair_top
      - Find the 'neck gap'        → chin_y  (big drop in row density)
      - Head cx = horizontal centre of pixels in [hair_top … chin_y]
    """
    w, h   = img.size
    data   = img.load()
    cx_min = w // 4
    cx_max = 3 * w // 4

    # Row density in the central strip
    def row_density(y):
        return sum(1 for x in range(cx_min, cx_max) if data[x, y][3] > 30)

    # Hair top
    hair_top = None
    for y in range(int(h * 0.50)):
        if row_density(y) > 2:
            hair_top = y
            break
    if hair_top is None:
        hair_top = 0

    # Scan downward; find peak density then first drop to ~15% → neck
    densities = [(y, row_density(y)) for y in range(hair_top, int(h * 0.65))]
    if not densities:
        return w // 2, h // 4, h // 5
    peak = max(d for _, d in densities)
    chin_y = hair_top + 1
    peaked = False
    for y, d in densities:
        if d > peak * 0.45:
            peaked = True
        if peaked and d < peak * 0.15:
            chin_y = y
            break
    else:
        chin_y = hair_top + int((densities[-1][0] - hair_top) * 0.55)

    # Head cx
    head_px = [(x, y) for y in range(hair_top, min(chin_y + 1, h))
                       for x in range(cx_min, cx_max)
                       if data[x, y][3] > 30]
    if head_px:
        cx = sum(p[0] for p in head_px) // len(head_px)
    else:
        cx = w // 2

    head_h = chin_y - hair_top
    cy     = hair_top + head_h // 2
    return cx, cy, head_h, hair_top, chin_y

print("Detecting head positions …")
head_info = {}
for name, _, _ in NAMES:
    cx, cy, head_h, hair_top, chin_y = find_head(cells[name])
    head_info[name] = dict(cx=cx, cy=cy, head_h=head_h,
                           hair_top=hair_top, chin_y=chin_y)
    print(f"  {name:18s}: cx={cx}  hair_top={hair_top}  chin_y={chin_y}  head_h={head_h}")

# ── 4. Choose master (arbeid) + compute per-character transforms ──────────────
master = head_info["arbeid"]
TARGET_HEAD_H = master["head_h"]
TARGET_CX     = COL_W // 2      # keep heads centred on 900px canvas

# We will:
#   a) scale the cell uniformly so master head_h matches TARGET_HEAD_H (= no-op for arbeid)
#   b) translate so the hair_top lands at a fixed y on the 900×900 canvas
CANVAS_HAIR_TOP = int(OUT_SIZE * 0.11)   # ≈ 99px from top on 900×900

# ── 5. Render each character onto 900×900, head-locked ───────────────────────
print("Rendering 900×900 PNGs …")
for name, _, _ in NAMES:
    info  = head_info[name]
    cell  = cells[name]
    cw, ch = cell.size

    # Scale factor so this character's head_h matches the master's
    sf = TARGET_HEAD_H / info["head_h"] if info["head_h"] > 0 else 1.0
    # Clamp scale so we don't blow up tiny/huge differences
    sf = max(0.65, min(1.45, sf))

    new_w = int(cw * sf)
    new_h = int(ch * sf)
    scaled = cell.resize((new_w, new_h), Image.LANCZOS)

    # After scaling: where does the hair_top land?
    scaled_hair_top = int(info["hair_top"] * sf)
    scaled_cx       = int(info["cx"] * sf)

    # Paste offset so:
    #   canvas_y = CANVAS_HAIR_TOP → scaled_hair_top
    #   canvas_x centres the head at OUT_SIZE//2
    off_y = CANVAS_HAIR_TOP - scaled_hair_top
    off_x = (OUT_SIZE // 2) - scaled_cx

    canvas = Image.new("RGBA", (OUT_SIZE, OUT_SIZE), (0, 0, 0, 0))
    canvas.paste(scaled, (off_x, off_y), scaled)

    out_path = os.path.join(HERE, f"{name}.png")
    canvas.save(out_path, "PNG")
    print(f"  ✓  {name}.png   (scale={sf:.3f}, off=({off_x},{off_y}))")

# ── 6. Verify head positions on the output PNGs ──────────────────────────────
print("\nVerifying alignment on output PNGs …")
for name, _, _ in NAMES:
    img  = Image.open(os.path.join(HERE, f"{name}.png")).convert("RGBA")
    _, _, _, hair_top, chin_y = find_head(img)
    print(f"  {name:18s}: hair_top={hair_top}  chin_y={chin_y}")

# ── 7. Debug contact sheet ───────────────────────────────────────────────────
print("\nGenerating debug contact sheet …")
THUMB  = 300
PAD    = 16
HEADER = 36
W_TOTAL = 6 * THUMB + 7 * PAD
H_TOTAL = HEADER + THUMB + 2 * PAD

canvas_dbg = Image.new("RGBA", (W_TOTAL, H_TOTAL), (245, 244, 240, 255))
d = ImageDraw.Draw(canvas_dbg)

try:
    font    = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 12)
    font_sm = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 10)
except:
    font = font_sm = ImageFont.load_default()

# We need to re-detect heads on the 900×900 outputs for guide placement
for i, (name, _, _) in enumerate(NAMES):
    img = Image.open(os.path.join(HERE, f"{name}.png")).convert("RGBA")
    cx_src, cy_src, head_h, hair_top, chin_y = find_head(img)

    thumb = img.resize((THUMB, THUMB), Image.LANCZOS)
    scale = THUMB / OUT_SIZE

    ox = PAD + i * (THUMB + PAD)
    oy = HEADER + PAD
    canvas_dbg.paste(thumb, (ox, oy), thumb)

    abs_cx   = ox + int(cx_src * scale)
    abs_hair = oy + int(hair_top * scale)
    abs_chin = oy + int(chin_y * scale)
    abs_eye  = oy + int((hair_top + (chin_y - hair_top) * 0.52) * scale)

    RED  = (220, 50,  50,  200)
    BLUE = (30,  80,  200, 200)
    GRN  = (42,  92,  24,  180)

    # Vertical centre (red)
    d.line([(abs_cx, oy), (abs_cx, oy + THUMB)], fill=RED, width=1)
    # Eye line (blue)
    d.line([(ox, abs_eye), (ox + THUMB, abs_eye)], fill=BLUE, width=1)
    # Hair top (green dotted)
    for xx in range(ox, ox + THUMB, 5):
        d.point((xx, abs_hair), fill=GRN)
    # Head ellipse
    rx = int((cx_src - max(0, cx_src - 80)) * scale)
    ry = int((chin_y - hair_top) / 2 * scale)
    ecx = abs_cx
    ecy = abs_hair + ry
    d.ellipse([ecx - rx, ecy - ry, ecx + rx, ecy + ry], outline=RED, width=1)
    # Label
    d.text((ox + 4, oy - HEADER + 6),
           name.replace("-", " ").title(), fill=(42, 92, 24, 255), font=font)

canvas_dbg = canvas_dbg.convert("RGB")
debug_path = os.path.join(HERE, "debug-head-alignment.png")
canvas_dbg.save(debug_path)
print(f"  ✓  debug-head-alignment.png  ({W_TOTAL}×{H_TOTAL})")

print("\n✅  All done. Bump ?v=7 in StudioIndexHero.tsx and reload localhost.")
