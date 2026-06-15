import { ImageResponse } from "next/og";
import { profile } from "@/lib/content/profile";

export const alt = `${profile.fullName}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded social-share card. Editorial: bone paper, ink type, terracotta dot. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f1e7",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8a8170",
          }}
        >
          <span style={{ color: "#16140f" }}>Catherine</span>
          <span style={{ color: "#c25b3a" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 96,
              lineHeight: 1.02,
              color: "#16140f",
              letterSpacing: "-0.03em",
            }}
          >
            <span>{profile.displayName.first}</span>
            <span style={{ fontStyle: "italic" }}>
              {profile.displayName.second}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 34,
              color: "#6b6354",
              fontFamily: "system-ui, sans-serif",
              maxWidth: 900,
            }}
          >
            {profile.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 24,
            color: "#8a8170",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#c25b3a",
            }}
          />
          {profile.availability}
        </div>
      </div>
    ),
    { ...size },
  );
}
