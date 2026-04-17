import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          background: "linear-gradient(135deg, #059669 0%, #2563eb 100%)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ fontSize: 120, marginBottom: 20 }}>💰</div>
        <div style={{ fontSize: 80, fontWeight: "bold", color: "#fff", marginBottom: 20 }}>
          マネーナビJP
        </div>
        <div style={{ fontSize: 32, color: "rgba(255,255,255,0.9)" }}>
          投資・資産運用・副業の情報サイト
        </div>
      </div>
    ),
    size
  );
}
