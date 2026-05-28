import { ImageResponse } from "next/og";

export const runtime     = "edge";
export const size        = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background:     "#2A5C18",
          width:          "100%",
          height:         "100%",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          borderRadius:   6,
        }}
      >
        <div
          style={{
            fontSize:      22,
            fontWeight:    900,
            color:         "#ffffff",
            lineHeight:    1,
            letterSpacing: "-0.04em",
            marginTop:     1,
          }}
        >
          F
        </div>
      </div>
    ),
    { ...size }
  );
}
