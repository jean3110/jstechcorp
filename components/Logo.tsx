interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const config = {
  sm: { tag: 13, js: 13, sub: 7.5, gap: 2, jsMargin: 3 },
  md: { tag: 17, js: 17, sub: 9,   gap: 3, jsMargin: 4 },
  lg: { tag: 23, js: 23, sub: 11,  gap: 4, jsMargin: 5 },
};

export default function Logo({ size = "md" }: LogoProps) {
  const c = config[size];
  const font = "var(--font-space-grotesk, sans-serif)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: c.gap, userSelect: "none" }}>

      {/* < JS /> */}
      <div style={{ display: "flex", alignItems: "baseline", lineHeight: 1 }}>
        <span style={{ fontFamily: font, fontSize: c.tag, fontWeight: 700, color: "#4A6CF7" }}>
          &lt;
        </span>
        <span style={{ fontFamily: font, fontSize: c.js, fontWeight: 700, color: "#FFFFFF", margin: `0 ${c.jsMargin}px` }}>
          JS
        </span>
        <span style={{ fontFamily: font, fontSize: c.tag, fontWeight: 700, color: "#8B5CF6" }}>
          /&gt;
        </span>
      </div>

      {/* TECH CORP */}
      <div style={{
        fontFamily: font,
        fontSize: c.sub,
        fontWeight: 600,
        color: "#9CA3AF",
        letterSpacing: "0.2em",
        lineHeight: 1,
      }}>
        TECH CORP
      </div>

    </div>
  );
}
