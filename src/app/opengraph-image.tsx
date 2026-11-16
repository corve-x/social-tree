import { ImageResponse } from "next/og";
import { profile } from "@/config/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: 96,
        background: "#09090B",
        color: "#F4F4F5",
      }}
    >
      <div
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          border: "3px solid #C0C0C0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 76,
          fontWeight: 600,
          background: "#121214",
        }}
      >
        {profile.initials}
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginLeft: 64 }}>
        <div style={{ fontSize: 68, fontWeight: 600, letterSpacing: -2 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 34, color: "#A1A1AA", marginTop: 14 }}>
          {profile.title}
        </div>
        <div style={{ fontSize: 26, color: "#71717A", marginTop: 28 }}>
          {profile.username}
        </div>
      </div>
    </div>,
    size,
  );
}
