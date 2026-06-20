interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const config = {
  sm: { dot: 6,  text: 13, gap: 7  },
  md: { dot: 8,  text: 16, gap: 9  },
  lg: { dot: 11, text: 21, gap: 12 },
};

export default function Logo({ size = "md", variant = "light" }: LogoProps) {
  const c = config[size];
  const color = variant === "light" ? "#0F172A" : "#FFFFFF";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: c.gap, userSelect: "none" }}>
      <div style={{ width: c.dot, height: c.dot, borderRadius: "50%", backgroundColor: "#4A6CF7", flexShrink: 0 }} />
      <span style={{ fontFamily: "var(--font-space-grotesk, sans-serif)", fontSize: c.text, fontWeight: 600, color, letterSpacing: "-0.015em", lineHeight: 1 }}>
        JS Tech Corp
      </span>
    </div>
  );
}
