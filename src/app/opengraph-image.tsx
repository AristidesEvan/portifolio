import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4EFE6",
          color: "#1A1714",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#5C564E",
          }}
        >
          Goiânia · Paulínia
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: -2,
              fontStyle: "italic",
            }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: 28, color: "#5C564E", maxWidth: 720 }}>
            {site.role}
          </div>
        </div>
        <div
          style={{
            width: 72,
            height: 4,
            background: "#C45C3E",
          }}
        />
      </div>
    ),
    size,
  );
}
