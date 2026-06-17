export default function TechMarquee({ items, duration = 40 }: { items: string[]; duration?: number }) {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee" style={{ padding: "12px 0" }}>
      <div className="marquee-track" style={{ animationDuration: `${duration}s`, gap: 16 }}>
        {[...loop, ...loop].map((t, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--text)",
              border: "1px solid var(--text)",
              padding: "10px 22px",
              borderRadius: 0,
              marginRight: 16,
              whiteSpace: "nowrap",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
