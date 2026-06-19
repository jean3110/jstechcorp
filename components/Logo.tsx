interface LogoProps {
  size?: "sm" | "md" | "lg";
}

const config = {
  sm: { box: 28, radius: 7,  js: 11, name: 13, gap: 8,  weight: 500 },
  md: { box: 36, radius: 9,  js: 14, name: 15, gap: 10, weight: 500 },
  lg: { box: 48, radius: 12, js: 18, name: 20, gap: 12, weight: 500 },
};

export default function Logo({ size = "md" }: LogoProps) {
  const c = config[size];

  return (
    <div className="flex items-center" style={{ gap: c.gap }}>
      {/* Rounded square icon with gradient */}
      <div
        style={{
          width: c.box,
          height: c.box,
          borderRadius: c.radius,
          background: "linear-gradient(135deg, #4A6CF7 0%, #8B5CF6 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            color: "#fff",
            fontFamily: "var(--font-space-grotesk, sans-serif)",
            fontSize: c.js,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          JS
        </span>
      </div>

      {/* Wordmark */}
      <span
        style={{
          color: "#fff",
          fontFamily: "var(--font-space-grotesk, sans-serif)",
          fontSize: c.name,
          fontWeight: c.weight,
          letterSpacing: "-0.01em",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        Tech Corp
      </span>
    </div>
  );
}
