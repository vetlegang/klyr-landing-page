import { ImageResponse } from "next/og";

export const runtime     = "edge";
export const alt         = "Fujii — Annonser som faktisk selger";
export const size        = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Load Nunito ExtraBold (weight 800) from Google Fonts CDN
  const fontRes = await fetch(
    "https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTQ3j6zbXWjgeg.woff2"
  );
  const fontData = await fontRes.arrayBuffer();

  return new ImageResponse(
    (
      <div
        style={{
          background:     "#2A5C18",
          width:          "100%",
          height:         "100%",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "flex-start",
          justifyContent: "space-between",
          padding:        "72px 88px",
          fontFamily:     "Nunito",
        }}
      >
        {/* Top: small label */}
        <div
          style={{
            fontSize:      18,
            fontWeight:    800,
            color:         "rgba(255,255,255,0.35)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontFamily:    "Nunito",
          }}
        >
          fujii.no
        </div>

        {/* Bottom: wordmark + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div
            style={{
              fontSize:      164,
              fontWeight:    800,
              color:         "#ffffff",
              lineHeight:    0.88,
              letterSpacing: "-0.03em",
              fontFamily:    "Nunito",
            }}
          >
            Fujii
          </div>

          <div
            style={{
              display:       "flex",
              alignItems:    "center",
              gap:           24,
              marginTop:     32,
            }}
          >
            <div
              style={{
                width:      48,
                height:     2,
                background: "rgba(255,255,255,0.3)",
              }}
            />
            <div
              style={{
                fontSize:      26,
                color:         "rgba(255,255,255,0.6)",
                letterSpacing: "0.01em",
                fontFamily:    "Nunito",
              }}
            >
              20 Meta-creatives · Fra 5 000 kr · Ingen binding
            </div>
          </div>
        </div>

        {/* Bottom-right: accent dot */}
        <div
          style={{
            position:     "absolute",
            right:        88,
            bottom:       72,
            width:        16,
            height:       16,
            borderRadius: "50%",
            background:   "#BEFF00",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name:   "Nunito",
          data:   fontData,
          weight: 800,
          style:  "normal",
        },
      ],
    }
  );
}
