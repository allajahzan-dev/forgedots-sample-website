import { SERVICES_LIST } from "../data/constants";

export default function ServiceTicker() {
  const items = [...SERVICES_LIST, ...SERVICES_LIST, ...SERVICES_LIST, ...SERVICES_LIST];
  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg)",
        height: 40,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div className="marquee">
        <div className="marquee-track" style={{ animationDuration: "60s" }}>
          {[...items, ...items].map((s, i) => (
            <span
              key={i}
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                padding: "0 28px",
                display: "inline-flex",
                alignItems: "center",
                gap: 28,
              }}
            >
              {s}
              <span style={{ opacity: 0.5 }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
