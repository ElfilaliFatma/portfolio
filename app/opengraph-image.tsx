import { ImageResponse } from "next/og";

export const alt = "Fatma and Ibrahim portfolio cover";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top left, rgba(14,165,233,0.45), transparent 28%), linear-gradient(135deg, #020617, #0f172a 42%, #1e293b)",
          color: "#f8fafc",
          padding: "56px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 28,
            letterSpacing: "-0.04em",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 9999,
              background: "#38bdf8",
            }}
          />
          Fatma & Ibrahim
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.05em",
              maxWidth: "860px",
            }}
          >
            Data Science and software engineering portfolio
          </div>
          <div style={{ fontSize: 28, color: "rgba(226,232,240,0.84)" }}>
            Web development • Data science • AI systems • Analytics
          </div>
        </div>
      </div>
    ),
    size,
  );
}
