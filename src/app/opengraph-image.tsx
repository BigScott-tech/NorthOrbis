import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const runtime = "edge";
export const alt = "NorthOrbis AIMA AI-powered HVAC marketing";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 70,
          background: "#0A0A0A",
          color: "#F7F4EC",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.26), transparent 38%), linear-gradient(220deg, rgba(73,199,184,0.16), transparent 34%)"
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 24, position: "relative" }}>
          <div
            style={{
              width: 82,
              height: 82,
              border: "2px solid rgba(212,175,55,0.72)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(45deg)"
            }}
          >
            <div style={{ width: 34, height: 34, background: "#D4AF37" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 700 }}>{site.name}</div>
            <div style={{ fontSize: 20, color: "#D4AF37", marginTop: 8 }}>AI-Augmented Intelligent Marketing Agency</div>
          </div>
        </div>
        <div style={{ position: "relative", maxWidth: 880 }}>
          <div style={{ fontSize: 76, lineHeight: 1.02, fontWeight: 800 }}>
            AI-powered HVAC marketing that turns attention into booked jobs.
          </div>
          <div style={{ marginTop: 26, fontSize: 28, lineHeight: 1.35, color: "#A7ADB7" }}>
            Paid ads, content, local SEO, and lead systems for residential and light commercial HVAC contractors.
          </div>
        </div>
      </div>
    ),
    size
  );
}
