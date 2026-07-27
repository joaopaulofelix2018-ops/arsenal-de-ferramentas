import { ImageResponse } from "next/og";
import { OFFICIAL_LOGO } from "@/lib/constants";

export const runtime = "edge";
export const alt = "Arsenal de Ferramentas — As melhores promoções de ferramentas todos os dias";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#0B0B0B", color: "white", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", width: 460, height: 460, borderRadius: 999, background: "rgba(255,193,7,.13)", filter: "blur(10px)", right: -90, top: -130 }} />
      <div style={{ position: "absolute", left: 0, top: 0, width: 24, height: "100%", background: "#FFC107" }} />
      <div style={{ position: "absolute", right: 70, bottom: 55, width: 260, height: 12, borderRadius: 20, background: "#FFC107" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "70px 95px", width: "100%" }}>
        <img src={OFFICIAL_LOGO} width="250" height="105" alt="" style={{ objectFit: "contain", objectPosition: "left center", marginBottom: 38 }} />
        <div style={{ color: "#FFC107", fontSize: 28, fontWeight: 800, letterSpacing: 4, textTransform: "uppercase", marginBottom: 18 }}>Grupo VIP no WhatsApp</div>
        <div style={{ fontSize: 72, lineHeight: 1.02, fontWeight: 900, maxWidth: 900 }}>Arsenal de Ferramentas</div>
        <div style={{ marginTop: 26, fontSize: 32, color: "#D4D4D8", maxWidth: 850, lineHeight: 1.25 }}>As melhores promoções de ferramentas todos os dias</div>
      </div>
    </div>,
    size
  );
}
